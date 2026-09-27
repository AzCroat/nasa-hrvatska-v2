import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { LESSONS_FIXTURE } from './fixtures/content-fixture.js';

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

const UNIT_1 = ['alphabet', 'greetings-farewells', 'pronouns-biti', 'gender', 'plural-nouns'];

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

  for (let step = 0; step < 80; step++) {
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

  test('five lessons, the unit test, both production tasks, then Unit 2 opens', async ({
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

    // Reading all five is not the bar: the unit stays current and offers its test.
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'current',
      { timeout: 20_000 },
    );
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute('data-unit-state', 'locked');
    const offer = page.getByTestId('course-unit-test-A1-1');
    await expect(offer).toHaveAttribute('data-offer', 'primary');
    await offer.click();

    await expect(page.getByTestId('unit-test')).toBeVisible({ timeout: 20_000 });
    for (let i = 0; i < 15; i++) {
      await expect(page.getByTestId('unit-test-progress')).toHaveText(`Question ${i + 1} of 15`);
      const opts = page.locator('[data-testid^="unit-test-opt-"]');
      const shown = (await opts.allInnerTexts()).map((s) => s.trim());
      const q = (
        await page
          .getByTestId('unit-test')
          .locator('[data-testid="unit-test-question"], h2, h3, p')
          .first()
          .innerText()
      ).trim();
      let clicked = false;
      for (const candidate of [
        q,
        ...(await page.getByTestId('unit-test').locator('*').allInnerTexts()),
      ]) {
        try {
          const { index } = answerFor(candidate, shown, UNIT_1);
          await page.getByTestId(`unit-test-opt-${index}`).click();
          clicked = true;
          break;
        } catch {
          /* not the question node — try the next text on screen */
        }
      }
      expect(clicked, `question ${i + 1}: no source item matched what is on screen`).toBe(true);
      await page.getByTestId('unit-test-next').click();
    }
    const result = page.getByTestId('unit-test-result');
    await expect(result).toBeVisible({ timeout: 20_000 });
    await expect(result).toHaveAttribute('data-passed', '1');

    // Passing the test is HALF the bar: production is still owed, so Unit 2 stays shut.
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute(
      'data-unit-state',
      'locked',
      { timeout: 20_000 },
    );

    // Production, both halves, typed (a learner without a microphone can finish the course).
    for (const kind of ['write', 'speak']) {
      await page.goto('/coursemap');
      await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
      const btn = page.getByTestId(`course-unit-${kind}-A1-1`);
      if (!(await btn.isVisible()))
        await page.getByTestId('course-unit-A1-1').locator('button').first().click();
      await btn.click();
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
