/**
 * course-failure-and-time.spec.js — the paths a learner meets when things go WRONG or
 * TIME PASSES (2026-09-30).
 *
 * `course-full-walk.spec.js` walks all 36 units with every answer right and "a new day"
 * simulated by dropping the persisted plan. That cannot reach anything the calendar
 * decides: the same-day lock on a failed check, the corrective day, the 7- and 30-day
 * check-ups. So this spec moves the BROWSER'S CALENDAR (a whole-day offset on `Date`,
 * applied at every page load — see `setup`), and the app meets a real new day the way it does in the field — `localDateStr()` changes,
 * the persisted plan's date no longer matches, a launch marker stamped yesterday is
 * stale — rather than being told about it.
 *
 * Answers come from the SAME lesson data the app serves (the fixture is the server
 * modules), keyed by question text AND the option set, across form A and form B of
 * every check. Wrong answers are "any option that is not the key".
 */
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent, TEST_EMAIL } from './fixtures/seed-auth.js';
import { LESSONS_FIXTURE } from './fixtures/content-fixture.js';
import { CURRICULUM } from '../functions/api/content/_data/curriculum.js';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const byLevel = (lv) =>
  CURRICULUM.filter((l) => l.level === lv)
    .sort((a, b) => a.order - b.order)
    .map((l) => l.id);
const UNITS = LEVELS.flatMap((lv) => {
  const ids = byLevel(lv);
  const out = [];
  for (let i = 0; i < ids.length; i += 5)
    out.push({ id: `${lv}-${i / 5 + 1}`, level: lv, lessons: ids.slice(i, i + 5) });
  return out;
});
const LESSON = new Map(LESSONS_FIXTURE.map((l) => [l.id, l]));

const keyOf = (q, opts) => `${q.trim()}||${[...opts].sort().join('|')}`;
const ANSWERS = new Map();
/** lesson id → keys of its form-A and form-B check items. */
const FORMS = new Map();
for (const l of LESSONS_FIXTURE) {
  const forms = { A: new Set(), B: new Set() };
  for (const s of l.slides ?? []) {
    if (s.type !== 'check') continue;
    for (const it of s.items ?? []) {
      ANSWERS.set(keyOf(it.q, it.options), it.options[it.correct]);
      forms.A.add(keyOf(it.q, it.options));
    }
    for (const it of s.itemsB ?? []) {
      ANSWERS.set(keyOf(it.q, it.options), it.options[it.correct]);
      forms.B.add(keyOf(it.q, it.options));
    }
  }
  FORMS.set(l.id, forms);
}
const answerFor = (q, shown) => ANSWERS.get(keyOf(q, shown));
const titleOf = (id) => LESSON.get(id)?.title ?? id;

const WORDS = Array.from({ length: 90 }, (_, j) => `riječ${j}`).join(' ');

async function setup(page, { seedUnits = [], seedReviews = [], seedDone = [] } = {}) {
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  // THE CALENDAR IS SHIFTED, NOT FAKED. Playwright's `page.clock` fakes timers and
  // `performance` too, and after a `setSystemTime` jump framer-motion's exit animation
  // (AnimatePresence mode="wait") never completed, so every navigation after the first
  // "new day" froze on the old screen — an artifact no real browser can produce. This
  // shifts only `Date`, by whole days held in localStorage, and lets real time flow.
  await page.addInitScript(() => {
    let off = 0;
    try {
      off = Number(localStorage.getItem('cft_day_offset') || 0) * 86400000;
    } catch {
      return;
    }
    if (!off) return;
    const Real = Date;
    class Shifted extends Real {
      constructor(...a) {
        if (a.length === 0) super(Real.now() + off);
        else super(...a);
      }
      static now() {
        return Real.now() + off;
      }
    }
    window.Date = Shifted;
  });
  await seedAuth(page);
  await blockFirebase(page);
  await mockTTS(page);
  await mockContent(page);
  await page.route('**/api/correct', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ score: 78, changes: [], corrected_text: 'Ispravljeno.' }),
    }),
  );
  await page.route('**/api/speaking-coach', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        scores: { range: 0.7, accuracy: 0.7, fluency: 0.7, task: 0.7 },
        overall: 0.7,
        errors: [],
        advice: 'Dobro.',
        encouragement: 'Bravo!',
      }),
    }),
  );
  if (seedUnits.length || seedReviews.length || seedDone.length) {
    const units = UNITS.filter((u) => seedUnits.includes(u.id));
    await page.addInitScript(
      ([unitList, levels, extraDone]) => {
        if (window.top !== window) return;
        if (sessionStorage.getItem('cft_seeded')) return;
        sessionStorage.setItem('cft_seeded', '1');
        const d = new Date();
        const iso = (x) =>
          `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
        const today = iso(d);
        const due = iso(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7));
        const done = {};
        const u = {};
        for (const unit of unitList) {
          for (const id of unit.lessons) done[id] = today;
          u[unit.id] = {
            passedAt: today,
            bestCorrect: 15,
            bestTotal: 15,
            attempts: [{ at: today, correct: 15, total: 15, passed: true }],
            production: { wroteAt: today, writeScore: 78, spokeAt: today, speakScore: 0.7 },
            recheck: { stage: 0, dueAt: due },
          };
        }
        for (const id of extraDone) done[id] = today;
        const reviews = {};
        for (const lv of levels) reviews[lv] = { doneAt: today, firstTryCorrect: 18, total: 18 };
        localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done }));
        localStorage.setItem('nh_course_units', JSON.stringify({ units: u, reviews }));
      },
      [units, seedReviews, seedDone],
    );
  }
  let offset = 0;
  /** Move the browser's calendar forward `n` days; takes effect on the next page load. */
  const advanceDays = async (n) => {
    offset += n;
    if (!page.url().startsWith('http')) await page.goto('/coursemap');
    await page.evaluate((o) => localStorage.setItem('cft_day_offset', String(o)), offset);
  };
  return { errs, advanceDays, dayOffset: () => offset };
}

const readJSON = (page, key) =>
  page.evaluate((k) => {
    try {
      return JSON.parse(localStorage.getItem(k) || 'null');
    } catch {
      return null;
    }
  }, key);

/**
 * XP earned in the browser: the sum of the per-week XP counters. The profile's `st.xp`
 * is re-seeded by `seedAuth` on every page load, so it cannot show an award; the week
 * counters are written only by the award path.
 */
const xpNow = (page) =>
  page.evaluate(() =>
    Object.keys(localStorage)
      .filter((k) => k.startsWith('nh_week_xp_'))
      .reduce((n, k) => n + (parseInt(localStorage.getItem(k) || '0', 10) || 0), 0),
  );

/** Expand a unit's row on the map (only the current unit opens by itself). */
async function expandUnit(page, id) {
  const row = page.getByTestId(`course-unit-${id}`);
  if (!(await page.getByTestId(`course-unit-holding-${id}`).isVisible()))
    await row.locator('button').first().click();
}

/** The first unfinished activity in today's stored plan. */
const nextPlanned = async (page) => {
  const plan = await readJSON(page, 'nh_daily_session');
  return plan?.activities?.find((a) => !plan.completedIds.includes(a.id)) ?? null;
};

async function openMap(page) {
  await page.goto('/coursemap');
  await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 30_000 });
}
const unitState = (page, id) =>
  page.getByTestId(`course-unit-${id}`).getAttribute('data-unit-state');

async function openHome(page) {
  await page.goto('/');
  const card = page.getByTestId('session-card');
  await expect(card).toBeVisible({ timeout: 30_000 });
  return card;
}

/** Open Home, assert the session card leads with `label`, and press Begin. */
async function beginFromHome(page, label) {
  const card = await openHome(page);
  await expect(card, `Home leads with "${label}"`).toContainText(label, { timeout: 20_000 });
  await page.getByTestId('session-begin-cta').click();
}

/**
 * Drive an opened lesson. `mode` 'pass' answers the check from the key; 'fail' answers
 * every check item with an option that is NOT the key. Stops on the completion screen,
 * the failed summary, or the closed-check notice. Records which check items it saw.
 */
async function driveLesson(page, id, mode = 'pass', seen = []) {
  await expect(page.getByTestId('lesson-nav-next')).toBeVisible({ timeout: 20_000 });
  for (let i = 0; i < 220; i++) {
    if (await page.getByTestId('lesson-complete').isVisible()) return 'complete';
    if (await page.getByTestId('lesson-check-failed').isVisible()) return 'failed';
    if (await page.getByTestId('lesson-check-closed').isVisible()) return 'closed';

    const checkQ = page.getByTestId('lesson-check-question');
    if (await checkQ.isVisible()) {
      const q = (await checkQ.innerText()).trim();
      const opts = page.getByTestId('lesson-check-option');
      if (await opts.first().isEnabled()) {
        const labels = await opts.evaluateAll((els) =>
          els.map((e) => (e.getAttribute('aria-label') || '').replace(/^Option \d+: /, '')),
        );
        const text = answerFor(q, labels);
        if (!text) throw new Error(`lesson ${id}: no key for check question "${q}"`);
        if (!seen.includes(keyOf(q, labels))) seen.push(keyOf(q, labels));
        const pick = mode === 'pass' ? labels.indexOf(text) : labels.findIndex((l) => l !== text);
        await opts.nth(pick).click();
      }
      const more = page.getByTestId('lesson-check-next');
      if ((await more.isVisible()) && (await more.isEnabled())) {
        await more.click();
        continue;
      }
    }
    const step = page.getByTestId('worked-next-step');
    if (await step.isVisible()) {
      await step.click();
      continue;
    }
    const typedIn = page.getByTestId('practice-typed-input');
    if (await typedIn.isVisible()) {
      await typedIn.fill('x');
      await page.getByTestId('practice-typed-submit').click();
      continue;
    }
    const practice = page.getByTestId('practice-option');
    if ((await practice.count()) && !(await page.getByTestId('practice-explanation').isVisible())) {
      await practice.locator(':scope:not([disabled])').first().click();
      continue;
    }
    const moreItems = page.getByTestId('practice-next-item');
    if (await moreItems.isVisible()) {
      await moreItems.click();
      continue;
    }
    const check = page.getByRole('button', { name: 'Check Answer' });
    if (await check.isVisible()) {
      await page
        .getByRole('button', { name: /^Option 1:/ })
        .first()
        .click();
      await check.click();
    }
    const next = page.getByTestId('lesson-nav-next');
    if (await next.isEnabled()) await next.click();
  }
  throw new Error(`lesson ${id} never reached an end screen`);
}

async function readLesson(page, id, mode = 'pass') {
  await openMap(page);
  await page.getByTestId(`course-lesson-${id}`).click();
  return driveLesson(page, id, mode);
}

/**
 * Answer a mixed paper (unit test / check-up / level review). `pickWrong(i)` returns
 * true for the items to miss. Returns the list of question keys it saw, in order.
 */
async function answerPaper(page, { rootId, optSelector, nextId, count, pickWrong = () => false }) {
  const seen = [];
  for (let i = 0; i < count; i++) {
    const root = page.getByTestId(rootId);
    const opts = page.locator(optSelector);
    await expect(opts.first()).toBeEnabled({ timeout: 20_000 });
    const shown = (await opts.allInnerTexts()).map((s) => s.trim());
    let hit = null;
    for (const candidate of await root.locator('div').allInnerTexts()) {
      const text = answerFor(candidate, shown);
      if (text) {
        hit = { key: keyOf(candidate, shown), text };
        break;
      }
    }
    if (!hit)
      throw new Error(`${rootId} q${i + 1}: no key matched (options: ${shown.join(' | ')})`);
    seen.push(hit.key);
    const idx = pickWrong(i) ? shown.findIndex((s) => s !== hit.text) : shown.indexOf(hit.text);
    await opts.nth(idx).click();
    await page.getByTestId(nextId).click();
  }
  return seen;
}

async function sitUnitTest(page, pickWrong) {
  await expect(page.getByTestId('unit-test')).toBeVisible({ timeout: 20_000 });
  const total = Number(
    ((await page.getByTestId('unit-test-progress').innerText()).match(/of (\d+)/) || [])[1],
  );
  expect(total).toBe(15);
  const seen = await answerPaper(page, {
    rootId: 'unit-test',
    optSelector: '[data-testid^="unit-test-opt-"]',
    nextId: 'unit-test-next',
    count: total,
    pickWrong,
  });
  await expect(page.getByTestId('unit-test-result')).toBeVisible({ timeout: 20_000 });
  return seen;
}

/** Both production tasks, each from Home on its own day (Home serves one a day). */
async function produceFromHome(page, unitNumber, advanceDays) {
  for (const kind of ['write', 'speak']) {
    if (kind === 'speak') await advanceDays(1);
    await beginFromHome(page, `Unit ${unitNumber}: ${kind}`);
    await expect(page.getByTestId('unit-production')).toBeVisible({ timeout: 20_000 });
    await page.getByTestId('unit-production-input').fill(WORDS);
    await page.getByTestId('unit-production-submit').click();
    await expect(page.getByTestId('unit-production-result')).toBeVisible({ timeout: 20_000 });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
test.describe('When a learner fails, and when time passes', () => {
  test('a failed lesson check closes for the day, then comes back corrected on form B', async ({
    page,
  }) => {
    test.setTimeout(10 * 60_000);
    const { errs, advanceDays } = await setup(page);
    const lesson = 'alphabet';

    // ── Day 0: Home opens the first lesson; the learner fails its check. ──
    await beginFromHome(page, 'Unit 1 of 36');
    const xpBefore = await xpNow(page);
    const seenA = [];
    expect(await driveLesson(page, lesson, 'fail', seenA)).toBe('failed');
    const failed = page.getByTestId('lesson-check-failed');
    await expect(failed).toContainText('Not passed');
    await expect(page.getByTestId('lesson-check-focus')).toContainText('focus areas');
    await expect(page.getByTestId('lesson-check-locked-copy')).toContainText(
      'opens again tomorrow',
    );
    // No retake by the summary's own button, nor by the nav.
    await expect(page.getByTestId('lesson-check-retake')).toHaveCount(0);
    await expect(page.getByTestId('lesson-nav-next')).not.toHaveText(/Retake/);
    // The paper was form A.
    expect(seenA.length).toBe(FORMS.get(lesson).A.size);
    for (const k of seenA) expect(FORMS.get(lesson).A.has(k), `form A item: ${k}`).toBe(true);

    // Nothing credited.
    expect(await xpNow(page)).toBe(xpBefore);
    const progress = await readJSON(page, 'nh_curriculum_progress');
    expect(progress?.done?.[lesson]).toBeUndefined();
    const stats = (await readJSON(page, 'uP_' + TEST_EMAIL))?.st;
    expect(stats?.vs ?? []).not.toContain('al_' + lesson);
    // The missed items are Lesson Review cards; the lesson has no retention ladder.
    const retention = await readJSON(page, 'nh_lesson_retention');
    const cards = Object.keys(retention?.items ?? {}).filter((k) => k.startsWith(lesson + '#'));
    expect(cards.length).toBe(FORMS.get(lesson).A.size);
    expect(retention?.lessons?.[lesson]).toBeUndefined();

    // Reopening the lesson the same day: no test-out, and the check is closed.
    await openMap(page);
    await page.getByTestId(`course-lesson-${lesson}`).click();
    await expect(page.getByTestId('lesson-nav-next')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('lesson-test-out')).toHaveCount(0);
    expect(await driveLesson(page, lesson, 'pass')).toBe('closed');
    await expect(page.getByTestId('lesson-check-option')).toHaveCount(0);

    // The missed items are not asked again the same day — that would be the retake.
    await page.goto('/lessonreview');
    await expect(page.getByTestId('retention-empty')).toBeVisible({ timeout: 20_000 });

    // Home the same day does not re-serve the check as a retake.
    const card0 = await openHome(page);
    await expect(card0).not.toContainText(`Again: ${titleOf(lesson)}`);

    // ── Day 1: the corrective day. ──
    await advanceDays(1);
    await beginFromHome(page, `Again: ${titleOf(lesson)}`);
    // Opens at the first worked example, not the intro.
    await expect(page.getByTestId('worked-next-step')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('lesson-test-out')).toHaveCount(0);
    const seenB = [];
    expect(await driveLesson(page, lesson, 'pass', seenB)).toBe('complete');
    expect(seenB.length).toBe(FORMS.get(lesson).B.size);
    for (const k of seenB) expect(FORMS.get(lesson).B.has(k), `form B item: ${k}`).toBe(true);

    // The lesson now counts and the course has moved on.
    await openMap(page);
    await expect(page.getByTestId(`course-lesson-${lesson}`)).toHaveAttribute(
      'data-lesson-done',
      '1',
    );
    const progress1 = await readJSON(page, 'nh_curriculum_progress');
    expect(progress1?.done?.[lesson]).toBeTruthy();

    // XP was paid on the pass, not on the fail.
    await expect.poll(() => xpNow(page), { timeout: 15_000 }).toBeGreaterThan(xpBefore);

    // Lesson Review now serves yesterday's missed items, from this lesson.
    await page.goto('/lessonreview');
    await expect(page.getByTestId('retention-check')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('retention-part')).toContainText(titleOf(lesson));

    // The next day the course has moved on to the unit's second lesson.
    await advanceDays(1);
    await beginFromHome(page, titleOf(UNITS[0].lessons[1]));
    await expect(page.getByTestId('lesson-nav-next')).toBeVisible({ timeout: 20_000 });

    expect(errs).toEqual([]);
  });

  test('a failed unit test records the attempt only, names what was missed, and a different paper passes', async ({
    page,
  }) => {
    test.setTimeout(10 * 60_000);
    const unit = UNITS[0];
    const { errs, advanceDays } = await setup(page, { seedDone: unit.lessons });
    const lessonOfKey = new Map();
    for (const id of unit.lessons)
      for (const k of [...FORMS.get(id).A, ...FORMS.get(id).B]) lessonOfKey.set(k, id);

    // Every lesson read: Home's step is the unit test.
    await beginFromHome(page, 'Unit 1 test');
    const xpBefore = await xpNow(page);
    // Miss five of fifteen: 10 of 15, under the 13 needed.
    const MISS = new Set([0, 3, 6, 9, 12]);
    const paper1 = await sitUnitTest(page, (i) => MISS.has(i));
    const result = page.getByTestId('unit-test-result');
    await expect(result).toHaveAttribute('data-passed', '0');
    await expect(result).toContainText('10');
    await expect(result).toContainText('13');

    // Nothing credited; the attempt is recorded.
    expect(await xpNow(page)).toBe(xpBefore);
    const rec = (await readJSON(page, 'nh_course_units'))?.units?.[unit.id];
    expect(rec?.passedAt).toBeUndefined();
    expect(rec?.attempts?.length).toBe(1);
    expect(rec?.attempts?.[0]).toMatchObject({ correct: 10, total: 15, passed: false });

    // The result names the lessons the misses came from, with a tap to each.
    const missedLessons = new Set([...MISS].map((i) => lessonOfKey.get(paper1[i])));
    for (const id of missedLessons)
      await expect(page.getByTestId(`unit-test-review-${id}`)).toBeVisible();
    const tapTo = [...missedLessons][0];
    await page.getByTestId(`unit-test-review-${tapTo}`).click();
    await expect(page.getByTestId('lesson-nav-next')).toBeVisible({ timeout: 20_000 });

    // The unit is not passed and the next one stays locked.
    await openMap(page);
    expect(await unitState(page, unit.id)).toBe('current');
    expect(await unitState(page, UNITS[1].id)).toBe('locked');

    // The retake (next day, from Home) draws a different paper, and passes.
    await advanceDays(1);
    await beginFromHome(page, 'Unit 1 test');
    const paper2 = await sitUnitTest(page, () => false);
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-passed', '1');
    expect(paper2.join('#')).not.toBe(paper1.join('#'));
    const overlap = paper2.filter((k) => paper1.includes(k)).length;
    expect(overlap, 'the retake is not the same fifteen items').toBeLessThan(15);
    await expect.poll(() => xpNow(page), { timeout: 15_000 }).toBeGreaterThan(xpBefore);
    const rec2 = (await readJSON(page, 'nh_course_units'))?.units?.[unit.id];
    expect(rec2?.passedAt).toBeTruthy();
    expect(rec2?.attempts?.length).toBe(2);

    // Production, then the next unit opens.
    await advanceDays(1);
    await produceFromHome(page, 1, advanceDays);
    await openMap(page);
    expect(await unitState(page, unit.id)).toBe('cleared');
    expect(await unitState(page, UNITS[1].id)).toBe('current');
    expect(errs).toEqual([]);
  });

  test('check-ups come due at 7 and 30 days, and holding both is what masters a unit', async ({
    page,
  }) => {
    test.setTimeout(10 * 60_000);
    const { errs, advanceDays } = await setup(page, { seedUnits: ['A1-1'] });
    await openMap(page);
    expect(await unitState(page, 'A1-1')).toBe('cleared');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toHaveCount(0);

    // Six days on: not due yet.
    await advanceDays(6);
    await openMap(page);
    await expandUnit(page, 'A1-1');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toHaveCount(0);
    await openHome(page);
    const plan6 = await readJSON(page, 'nh_daily_session');
    expect(plan6.activities.some((a) => /recheck/.test(a.id))).toBe(false);

    // Seven days: Home and the map both offer the check-up.
    await advanceDays(1);
    await openMap(page);
    await expandUnit(page, 'A1-1');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toBeVisible();
    await expect(page.getByTestId('course-unit-holding-A1-1')).toContainText(
      'Time to check it stayed',
    );
    const xpBefore = await xpNow(page);
    await beginFromHome(page, 'Unit 1 check-up');
    await expect(page.getByTestId('unit-test')).toHaveAttribute('data-mode', 'recheck', {
      timeout: 20_000,
    });
    await sitUnitTest(page, () => false);
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-mode', 'recheck');
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-passed', '1');
    let r = (await readJSON(page, 'nh_course_units'))?.units?.['A1-1']?.recheck;
    expect(r?.stage).toBe(1);
    expect(r?.heldAt).toBeUndefined();
    await openMap(page);
    expect(await unitState(page, 'A1-1'), 'one check-up held is not mastery').toBe('cleared');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toHaveCount(0);
    await expect(page.getByTestId('course-units-mastered')).toHaveText('0 of 36 units mastered');

    // Thirty days after that: the second check-up.
    await advanceDays(29);
    await openMap(page);
    await expandUnit(page, 'A1-1');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toHaveCount(0);
    await advanceDays(1);
    await openMap(page);
    await expandUnit(page, 'A1-1');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toBeVisible();
    await beginFromHome(page, 'Unit 1 check-up');
    await sitUnitTest(page, () => false);
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-passed', '1');
    r = (await readJSON(page, 'nh_course_units'))?.units?.['A1-1']?.recheck;
    expect(r?.stage).toBe(2);
    expect(r?.heldAt).toBeTruthy();
    await openMap(page);
    expect(await unitState(page, 'A1-1')).toBe('mastered');
    await expect(page.getByTestId('course-units-mastered')).toHaveText('1 of 36 units mastered');
    // A check-up pays no XP; it confirms.
    expect(await xpNow(page)).toBe(xpBefore);
    expect(errs).toEqual([]);
  });

  test('a failed check-up takes nothing away and comes back the next day', async ({ page }) => {
    test.setTimeout(10 * 60_000);
    const { errs, advanceDays } = await setup(page, { seedUnits: ['A1-1'] });
    await advanceDays(7);
    await beginFromHome(page, 'Unit 1 check-up');
    const slipped = await sitUnitTest(page, (i) => i < 6);
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-passed', '0');
    await expect(page.getByTestId('unit-test-verdict')).toContainText('Slipped');
    const rec = (await readJSON(page, 'nh_course_units'))?.units?.['A1-1'];
    expect(rec?.passedAt).toBeTruthy();
    expect(rec?.production?.wroteAt).toBeTruthy();
    expect(rec?.recheck?.stage).toBe(0);

    // Not un-advanced, not called mastered, and the next unit is still open.
    await openMap(page);
    expect(await unitState(page, 'A1-1')).toBe('cleared');
    expect(await unitState(page, 'A1-2')).toBe('current');
    await expect(page.getByTestId('course-units-mastered')).toHaveText('0 of 36 units mastered');

    // The same day it is not served again; the next day it is.
    await openHome(page);
    expect((await nextPlanned(page))?.id ?? '').not.toMatch(/recheck/);
    await advanceDays(1);
    await openMap(page);
    await expandUnit(page, 'A1-1');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toBeVisible();
    await beginFromHome(page, 'Unit 1 check-up');
    const again = await sitUnitTest(page, () => false);
    expect(again.join('#'), 'the next check-up is not the paper that slipped').not.toBe(
      slipped.join('#'),
    );
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-passed', '1');
    expect((await readJSON(page, 'nh_course_units'))?.units?.['A1-1']?.recheck?.stage).toBe(1);
    expect(errs).toEqual([]);
  });

  test('a learner who failed and recovered in the last A1 unit still meets the A1 review', async ({
    page,
  }) => {
    test.setTimeout(20 * 60_000);
    const last = UNITS.find((u) => u.id === 'A1-6');
    const { errs, advanceDays } = await setup(page, {
      seedUnits: ['A1-1', 'A1-2', 'A1-3', 'A1-4', 'A1-5'],
    });
    // Fail the unit's first lesson from Home; pass it the next day, corrected.
    await beginFromHome(page, 'Unit 6 of 36');
    expect(await driveLesson(page, last.lessons[0], 'fail')).toBe('failed');
    await advanceDays(1);
    await beginFromHome(page, `Again: ${titleOf(last.lessons[0])}`);
    expect(await driveLesson(page, last.lessons[0], 'pass')).toBe('complete');
    for (const id of last.lessons.slice(1)) expect(await readLesson(page, id)).toBe('complete');

    // Fail the unit test, then pass it on another day.
    await advanceDays(1);
    await beginFromHome(page, 'Unit 6 test');
    await sitUnitTest(page, (i) => i < 4);
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-passed', '0');
    await advanceDays(1);
    await beginFromHome(page, 'Unit 6 test');
    await sitUnitTest(page, () => false);
    await expect(page.getByTestId('unit-test-result')).toHaveAttribute('data-passed', '1');
    await advanceDays(1);
    await produceFromHome(page, 6, advanceDays);

    // The crossing: Home leads with the A1 review, then with Unit 7.
    await advanceDays(1);
    await beginFromHome(page, 'A1 review');
    await expect(page.getByTestId('level-review')).toBeVisible({ timeout: 20_000 });
    for (let i = 0; i < 60; i++) {
      if (await page.getByTestId('level-review-result').isVisible()) break;
      await answerPaper(page, {
        rootId: 'level-review',
        optSelector: '[data-testid="level-review-option"]',
        nextId: 'level-review-next',
        count: 1,
      });
    }
    await expect(page.getByTestId('level-review-result')).toBeVisible({ timeout: 20_000 });
    await openMap(page);
    await expect(page.getByTestId('course-level-review-A1')).toHaveAttribute('data-done', '1');
    await advanceDays(1);
    // Unit 7's first lesson is today's lesson (behind the check-ups the seeded units
    // now owe, which ride in front of it).
    await openHome(page);
    const plan = await readJSON(page, 'nh_daily_session');
    expect(plan.activities.map((a) => a.id)).toContain(`curriculum_${UNITS[6].lessons[0]}`);
    expect(plan.activities.some((a) => /A1 review|levelreview/.test(a.label + a.screen))).toBe(
      false,
    );
    expect(errs).toEqual([]);
  });

  test('after a failed day, Keep Learning serves the unproven lesson’s practice — never a new lesson or the closed check', async ({
    page,
  }) => {
    test.setTimeout(10 * 60_000);
    const { errs, advanceDays } = await setup(page);
    const lesson = 'alphabet';
    await beginFromHome(page, 'Unit 1 of 36');
    expect(await driveLesson(page, lesson, 'fail')).toBe('failed');

    // The corrective day fails again: the produce slot cannot be done today.
    await advanceDays(1);
    await beginFromHome(page, `Again: ${titleOf(lesson)}`);
    expect(await driveLesson(page, lesson, 'fail')).toBe('failed');

    // Walk the rest of the core from Home. The drill, Lesson Review and City of the
    // Day are marked done in the stored plan (their screens have their own specs);
    // the produce slot is OPENED, because that is the one this scenario is about.
    for (let k = 0; k < 8; k++) {
      await openHome(page);
      const plan = await readJSON(page, 'nh_daily_session');
      const next = plan.activities.find((a) => !plan.completedIds.includes(a.id) && !a.keep);
      if (!next) break;
      if (next.screen === 'lessonproduce') {
        await page.getByTestId('session-begin-cta').click();
        const waits = page.getByTestId('lesson-produce-waits');
        await expect(waits).toBeVisible({ timeout: 20_000 });
        await expect(page.getByTestId('lesson-produce-open-lesson')).toHaveCount(0);
        await waits.getByRole('button', { name: /Back to Today/ }).click();
        continue;
      }
      await page.evaluate((id) => {
        const p = JSON.parse(localStorage.getItem('nh_daily_session'));
        p.completedIds.push(id);
        localStorage.setItem('nh_daily_session', JSON.stringify(p));
      }, next.id);
    }

    // The core is done, so Keep Learning leads — and only with unproven material.
    await openHome(page);
    const hero = page.getByTestId('keep-learning-hero');
    await expect(hero).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('keep-core-chip')).toContainText("Today's session done");
    const plan = await readJSON(page, 'nh_daily_session');
    const block = plan.activities.filter((a) => a.keep);
    expect(block.length).toBeGreaterThan(0);
    for (const a of block) {
      expect(['animlesson', 'unittest', 'levelreview'], a.id).not.toContain(a.screen);
    }
    expect(block[0].id).toBe(`keep_drill_${lesson}`);
    expect(block[0].reason).toContain('not passed');

    // Continue opens the drill, not the lesson or its closed check.
    await page.getByTestId('session-begin-cta').click();
    await expect(page.getByTestId('lesson-nav-next')).toHaveCount(0);
    await expect(page.getByTestId('lesson-check-question')).toHaveCount(0);
    await expect(page).toHaveURL(/\/alphabet$/, { timeout: 20_000 });

    // Nothing credited the lesson.
    expect((await readJSON(page, 'nh_curriculum_progress'))?.done?.[lesson]).toBeUndefined();
    expect(errs).toEqual([]);
  });
});
