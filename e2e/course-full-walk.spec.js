/**
 * course-full-walk.spec.js — the WHOLE course, walked as a learner walks it (2026-09-30).
 *
 * `course-walkthrough.spec.js` walks Unit 1 from nothing. This walks all 36 units:
 * every lesson read to its summary with its check passed, every unit test, both
 * production tasks, and each level review where the course serves it — from Home, at
 * the crossing into the next level (the C2 review after the last unit). After every
 * unit the map must show that unit cleared and the next one current; after every level
 * Home must lead with that level's review, then with the next unit.
 *
 * SPLIT PER LEVEL, because 36 units in one test is ~35 minutes. One test walks A1 and
 * A2 with NOTHING seeded (the path a real learner starts on, across one real level
 * crossing); each later test seeds only the levels before it, in the SAME shapes a
 * real walk writes (`nh_curriculum_progress.done`, and `nh_course_units` with the pass,
 * both production grades, the retention ladder the course starts, and the level
 * review) — so a seeded start is indistinguishable from having walked there.
 *
 * Answers come from the SAME lesson data the app serves (the fixture is the server
 * modules), keyed by question text AND the option set, across form A and form B of
 * every check — 2,355 items with no collision (measured) — so a pass here is a real
 * pass at the real bar. The evaluators are mocked the way the other course specs do.
 */
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { LESSONS_FIXTURE } from './fixtures/content-fixture.js';
import { CURRICULUM } from '../functions/api/content/_data/curriculum.js';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const byLevel = (lv) =>
  CURRICULUM.filter((l) => l.level === lv)
    .sort((a, b) => a.order - b.order)
    .map((l) => l.id);
/** The course's units, derived the way `courseUnits.ts` chunks them: five per level. */
const UNITS = LEVELS.flatMap((lv) => {
  const ids = byLevel(lv);
  const out = [];
  for (let i = 0; i < ids.length; i += 5)
    out.push({ id: `${lv}-${i / 5 + 1}`, level: lv, lessons: ids.slice(i, i + 5) });
  return out;
});

/** question || sorted options  →  correct option text, over every check item. */
const ANSWERS = new Map();
for (const l of LESSONS_FIXTURE)
  for (const s of l.slides ?? []) {
    if (s.type !== 'check') continue;
    for (const it of [...(s.items ?? []), ...(s.itemsB ?? [])])
      ANSWERS.set(`${it.q.trim()}||${[...it.options].sort().join('|')}`, it.options[it.correct]);
  }
const answerFor = (question, shown) =>
  ANSWERS.get(`${question.trim()}||${[...shown].sort().join('|')}`);

const WORDS = Array.from({ length: 90 }, (_, j) => `riječ${j}`).join(' ');

async function setup(page, seedLevels) {
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
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
  if (seedLevels.length) {
    const units = UNITS.filter((u) => seedLevels.includes(u.level));
    await page.addInitScript(
      ([unitList, levels]) => {
        // SEED ONCE: an init script re-runs on every navigation, and an unconditional
        // write would overwrite what the walk records in between.
        if (window.top !== window) return;
        if (sessionStorage.getItem('cfw_seeded')) return;
        sessionStorage.setItem('cfw_seeded', '1');
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
        const reviews = {};
        for (const lv of levels) reviews[lv] = { doneAt: today, firstTryCorrect: 18, total: 18 };
        localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done }));
        localStorage.setItem('nh_course_units', JSON.stringify({ units: u, reviews }));
      },
      [units, seedLevels],
    );
  }
  return errs;
}

async function openMap(page) {
  await page.goto('/coursemap');
  await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 30_000 });
}
const unitState = (page, id) =>
  page.getByTestId(`course-unit-${id}`).getAttribute('data-unit-state');

async function readLesson(page, id) {
  await openMap(page);
  await page.getByTestId(`course-lesson-${id}`).click();
  await driveLesson(page, id);
}

/** Drive an opened lesson to its completion screen, passing the check from the key. */
async function driveLesson(page, id) {
  await expect(page.getByTestId('lesson-nav-next')).toBeVisible({ timeout: 20_000 });

  for (let i = 0; i < 200; i++) {
    if (await page.getByTestId('lesson-complete').isVisible()) return;
    if (await page.getByTestId('lesson-check-failed').isVisible())
      throw new Error(`lesson ${id}: its check was FAILED with every answer taken from the key`);

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
        await opts.nth(labels.indexOf(text)).click();
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
  throw new Error(`lesson ${id} never reached its completion screen`);
}

/** Answer a mixed paper (unit test or level review) from the key, item by item. */
async function answerFromScreen(page, rootId, optSelector, what) {
  const root = page.getByTestId(rootId);
  const opts = page.locator(optSelector);
  await expect(opts.first()).toBeEnabled({ timeout: 20_000 });
  const shown = (await opts.allInnerTexts()).map((s) => s.trim());
  for (const candidate of await root.locator('div').allInnerTexts()) {
    const text = answerFor(candidate, shown);
    if (text) {
      await opts.nth(shown.indexOf(text)).click();
      return;
    }
  }
  throw new Error(`${what}: no key matched the question on screen (options: ${shown.join(' | ')})`);
}

/** Open Home on a new day and assert the session card leads with `label`; press Begin. */
async function beginFromHome(page, label) {
  await nextDay(page);
  await page.goto('/');
  const card = page.getByTestId('session-card');
  await expect(card).toBeVisible({ timeout: 30_000 });
  await expect(card, `Home leads with "${label}"`).toContainText(label, { timeout: 20_000 });
  await page.getByTestId('session-begin-cta').click();
}

/** The unit test, taken where the course serves it: from Home, the day after the reading. */
async function takeUnitTest(page, unit) {
  const n = UNITS.indexOf(unit) + 1;
  await openMap(page);
  await expect(
    page.getByTestId(`course-unit-test-${unit.id}`),
    `${unit.id}: the map offers the unit test`,
  ).toHaveAttribute('data-offer', 'primary');
  await beginFromHome(page, `Unit ${n} test`);
  await expect(page.getByTestId('unit-test')).toBeVisible({ timeout: 20_000 });
  const total = Number(
    ((await page.getByTestId('unit-test-progress').innerText()).match(/of (\d+)/) || [])[1],
  );
  expect(total, `${unit.id}: unit test length`).toBe(15);
  for (let i = 0; i < total; i++) {
    await expect(page.getByTestId('unit-test-progress')).toHaveText(
      `Question ${i + 1} of ${total}`,
    );
    await answerFromScreen(
      page,
      'unit-test',
      '[data-testid^="unit-test-opt-"]',
      `${unit.id} q${i + 1}`,
    );
    await page.getByTestId('unit-test-next').click();
  }
  const result = page.getByTestId('unit-test-result');
  await expect(result).toBeVisible({ timeout: 20_000 });
  await expect(result, `${unit.id}: the unit test passes on the key`).toHaveAttribute(
    'data-passed',
    '1',
  );
}

/** Both production tasks, each taken from Home on the day the course owes it. */
async function produce(page, unit) {
  const n = UNITS.indexOf(unit) + 1;
  for (const kind of ['write', 'speak']) {
    await beginFromHome(page, `Unit ${n}: ${kind}`);
    await expect(page.getByTestId('unit-production')).toBeVisible({ timeout: 20_000 });
    await page.getByTestId('unit-production-input').fill(WORDS);
    await page.getByTestId('unit-production-submit').click();
    await expect(page.getByTestId('unit-production-result')).toBeVisible({ timeout: 20_000 });
  }
}

/**
 * Home teaches the unit the course stands on: on a new day the session card names it,
 * and Begin opens its first lesson. The unit's first lesson is read THROUGH Home, the
 * rest through the map, so both doors are walked for every unit.
 */
async function firstLessonFromHome(page, unit) {
  const n = UNITS.indexOf(unit) + 1;
  await beginFromHome(page, `Unit ${n} of 36`);
  await driveLesson(page, unit.lessons[0]);
  await openMap(page);
  await expect(
    page.getByTestId(`course-lesson-${unit.lessons[0]}`),
    `Home opened ${unit.lessons[0]} and it counted`,
  ).toHaveAttribute('data-lesson-done', '1');
}

async function walkUnit(page, unit, nextId) {
  await openMap(page);
  expect(await unitState(page, unit.id), `${unit.id} is current before it is walked`).toBe(
    'current',
  );
  if (nextId) expect(await unitState(page, nextId), `${nextId} is locked`).toBe('locked');
  await firstLessonFromHome(page, unit);
  for (const id of unit.lessons.slice(1)) await readLesson(page, id);
  await takeUnitTest(page, unit);
  if (nextId) {
    await openMap(page);
    expect(await unitState(page, nextId), `${nextId} stays locked until production`).toBe('locked');
  }
  await produce(page, unit);
  await openMap(page);
  expect(await unitState(page, unit.id), `${unit.id} is cleared after the bar`).toBe('cleared');
  if (nextId) expect(await unitState(page, nextId), `${nextId} opens`).toBe('current');
}

/**
 * THE DAY'S PLAN IS BUILT ONCE PER DAY (`nh_daily_session`), so a learner who walks a
 * level in one sitting meets the crossing on a plan built that morning. A real learner
 * reaches it on a later day; dropping the persisted plan is what that later day does
 * (the date check invalidates it) and nothing else.
 */
async function nextDay(page) {
  if (!page.url().startsWith('http')) await page.goto('/coursemap');
  await page.evaluate(() => {
    localStorage.removeItem('nh_daily_session');
    // A launch marker still pending from "yesterday" is stamped with yesterday's
    // date on a real next day; the app must drop it rather than credit it to the
    // new plan (lib/sessionLaunchDay). Back-date the stamp so that path runs.
    if (sessionStorage.getItem('nh_session_started_on'))
      sessionStorage.setItem('nh_session_started_on', '2000-01-01');
  });
}

/** Home leads with the level review at the crossing; take it from there. */
async function reviewFromHome(page, level, nextUnitNumber) {
  await nextDay(page);
  await page.goto('/');
  const card = page.getByTestId('session-card');
  await expect(card).toBeVisible({ timeout: 30_000 });
  await expect(card, `Home leads with the ${level} review`).toContainText(`${level} review`, {
    timeout: 20_000,
  });
  await page.getByTestId('session-begin-cta').click();
  await expect(page.getByTestId('level-review')).toBeVisible({ timeout: 20_000 });
  for (let i = 0; i < 60; i++) {
    if (await page.getByTestId('level-review-result').isVisible()) break;
    await answerFromScreen(
      page,
      'level-review',
      '[data-testid="level-review-option"]',
      `${level} review item ${i + 1}`,
    );
    await page.getByTestId('level-review-next').click();
  }
  await expect(page.getByTestId('level-review-result')).toBeVisible({ timeout: 20_000 });
  await expect(page.getByTestId('level-review-first-try')).toContainText('18');

  await openMap(page);
  await expect(page.getByTestId(`course-level-review-${level}`)).toHaveAttribute('data-done', '1');
  await nextDay(page);
  await page.goto('/');
  await expect(page.getByTestId('session-card')).toBeVisible({ timeout: 30_000 });
  if (nextUnitNumber) {
    await expect(page.getByTestId('session-card')).toContainText(`Unit ${nextUnitNumber} of 36`, {
      timeout: 20_000,
    });
  }
  await expect(page.getByTestId('session-card')).not.toContainText(`${level} review`);
}

async function walkLevel(page, level) {
  const units = UNITS.filter((u) => u.level === level);
  for (const unit of units) {
    const idx = UNITS.indexOf(unit);
    await walkUnit(page, unit, UNITS[idx + 1]?.id);
  }
  const lastIdx = UNITS.indexOf(units[units.length - 1]);
  await openMap(page);
  await expect(page.getByTestId('course-units-mastered')).toBeVisible();
  await reviewFromHome(page, level, UNITS[lastIdx + 1] ? lastIdx + 2 : null);
}

test.describe('A learner walks the whole course', () => {
  test('A1 and A2, from nothing, across the first level crossing', async ({ page }) => {
    test.setTimeout(40 * 60_000);
    const errs = await setup(page, []);
    await openMap(page);
    expect(await unitState(page, 'A1-1')).toBe('current');
    await walkLevel(page, 'A1');
    await walkLevel(page, 'A2');
    expect(errs).toEqual([]);
  });

  for (const [i, level] of LEVELS.entries()) {
    if (i < 2) continue;
    test(`${level}, after walking every level before it`, async ({ page }) => {
      test.setTimeout(25 * 60_000);
      const errs = await setup(page, LEVELS.slice(0, i));
      await walkLevel(page, level);
      if (level === 'C2') {
        await openMap(page);
        for (const u of UNITS.filter((x) => x.level === 'C2'))
          expect(await unitState(page, u.id)).toBe('cleared');
      }
      expect(errs).toEqual([]);
    });
  }
});
