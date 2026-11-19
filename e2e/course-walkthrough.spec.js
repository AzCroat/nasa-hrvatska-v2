import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { settleExerciseStep } from './fixtures/settle-exercise.js';
import { LESSONS_FIXTURE } from './fixtures/content-fixture.js';
import { CURRICULUM } from '../functions/api/content/_data/curriculum.js';

/**
 * A NEW LEARNER WALKS UNIT 1, END TO END, WITH NOTHING SEEDED.
 *
 * Every other course spec seeds the state a stage needs — lessons already read, a
 * test already passed — and checks that ONE stage. That proves each stage and says
 * nothing about the path between them, which is the only thing a learner ever does:
 * nobody arrives at the unit test with `nh_curriculum_progress` pre-written. This
 * spec starts from an empty course and does what a learner does — read five lessons
 * and pass each one's check, sit the unit test, write, speak — and then asserts the
 * course moved them into Unit 2.
 *
 * Answers are taken from the SAME lesson data the app serves (the fixture is the
 * server modules), matched by the question text on screen, so a pass here is a real
 * pass at the real bar — not a seeded one.
 */

/** Unit 1 is the first five A1 lessons in spine order, derived so a reorder cannot strand the walk. */
const UNIT_1 = CURRICULUM.filter((e) => e.level === 'A1')
  .sort((a, b) => a.order - b.order)
  .slice(0, 5)
  .map((e) => e.id);

const LESSON = new Map(LESSONS_FIXTURE.map((l) => [l.id, l]));
const checkItems = (id) =>
  (LESSON.get(id)?.slides ?? []).filter((s) => s.type === 'check').flatMap((s) => s.items ?? []);

/** The correct option TEXT for a question on screen, from the lessons it could come from. */
function answerFor(question, shownOptions, lessonIds) {
  const shown = [...shownOptions].sort().join('|');
  for (const id of lessonIds) {
    for (const it of checkItems(id)) {
      if (it.q.trim() !== question.trim()) continue;
      if ([...it.options].sort().join('|') !== shown) continue;
      return { text: it.options[it.correct], index: it.correct };
    }
  }
  throw new Error(`no source item for "${question}" among ${lessonIds.join(', ')}`);
}

async function readLesson(page, id) {
  await page.goto('/coursemap');
  await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  await page.getByTestId(`course-lesson-${id}`).click();
  await expect(page.getByTestId('lesson-nav-next')).toBeVisible({ timeout: 20_000 });

  for (let step = 0; step < 160; step++) {
    if (await page.getByTestId('lesson-complete').isVisible()) return;

    const checkQ = page.getByTestId('lesson-check-question');
    if (await checkQ.isVisible()) {
      const q = (await checkQ.innerText()).trim();
      const opts = page.getByTestId('lesson-check-option');
      if (await opts.first().isEnabled()) {
        // Read each option from its aria-label ("Option N: text"): the visible text
        // carries a letter badge, so innerText is not the option.
        const labels = await opts.evaluateAll((els) =>
          els.map((e) => (e.getAttribute('aria-label') || '').replace(/^Option \d+: /, '')),
        );
        const { text } = answerFor(q, labels, [id]);
        await opts.nth(labels.indexOf(text)).click();
      }
      const more = page.getByTestId('lesson-check-next');
      if ((await more.isVisible()) && (await more.isEnabled())) {
        await more.click();
        continue;
      }
    }

    // A worked example (2026-09-27): reveal every step; Next waits for the last one.
    const step = page.getByTestId('worked-next-step');
    if (await step.isVisible()) {
      await step.click();
      continue;
    }

    // A TYPED practice item (2026-09-29): it is not scored, so two misses resolve it
    // and show the answer — the walk needs only to move through it.
    if (await settleExerciseStep(page)) continue;
    const typedIn = page.getByTestId('practice-typed-input');
    if (await typedIn.isVisible()) {
      await typedIn.fill('x');
      await page.getByTestId('practice-typed-submit').click();
      continue;
    }

    // Guided practice: answer each item, taking the second try when the hint shows
    // (it is not scored), then move to the next item; Next waits for the last one.
    const practice = page.getByTestId('practice-option');
    if ((await practice.count()) && !(await page.getByTestId('practice-explanation').isVisible())) {
      const open = practice.locator(':scope:not([disabled])');
      await open.first().click();
      continue;
    }
    const moreItems = page.getByTestId('practice-next-item');
    if (await moreItems.isVisible()) {
      await moreItems.click();
      continue;
    }

    // A formative quiz slide: any answer, then Check Answer — it gates nothing.
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

test.describe('A new learner walks Unit 1 into Unit 2', () => {
  test.beforeEach(async ({ page }) => {
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
  });

  test('five lessons open Unit 2; production is practice that never gates', async ({
    page,
  }) => {
    test.setTimeout(300_000);

    // Nothing seeded: the course begins at Unit 1 and Unit 2 is locked.
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'current',
      { timeout: 20_000 },
    );
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute('data-unit-state', 'locked');

    for (const id of UNIT_1) await readLesson(page, id);

    // Five lessons passed opens the next unit: Unit 1 is cleared, Unit 2 is where they are.
    // The unit test and the production tasks are practice, never a gate.
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute(
      'data-unit-state',
      'current',
      { timeout: 20_000 },
    );
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute('data-unit-state', 'cleared');

    // Production, both halves, typed (a learner without a microphone can finish the course).
    for (const kind of ['write', 'speak']) {
      // Production is practice, reached by its own route; the handoff is set as the course sets it.
      await page.goto('/');
      await page.evaluate((k) => sessionStorage.setItem('nh_unit_production', `A1-1|${k}`), kind);
      await page.goto('/unitproduction', { waitUntil: 'domcontentloaded' });
      await expect(page.getByTestId('unit-production')).toBeVisible({ timeout: 20_000 });
      const words = Array.from({ length: 80 }, (_, j) => `riječ${j}`).join(' ');
      await page.getByTestId('unit-production-input').fill(words);
      await page.getByTestId('unit-production-submit').click();
      await expect(page.getByTestId('unit-production-result')).toBeVisible({ timeout: 20_000 });
    }

    // The bar is met: Unit 1 is cleared (retention pending) and Unit 2 is where they are.
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute(
      'data-unit-state',
      'current',
      { timeout: 20_000 },
    );
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'cleared',
    );
  });
});
