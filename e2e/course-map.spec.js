import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';

/**
 * The course map — the structural surface the app never had.
 *
 * WHY AN E2E AND NOT ONLY THE COMPONENT TEST. The component test supplies
 * `onOpenLesson` itself, so it proves the map renders and says why a tap failed;
 * it cannot prove a learner can GET here from the Learn tab, nor that tapping a
 * lesson really opens one — which needs the router, the lazy chunk, the spine
 * fetch and the lesson-body fetch all working together. That chain is where the
 * "a tap either opens it or says why" defects have always lived.
 */
test.describe('Course map', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/learn');
    await expect(page.getByTestId('open-course-map')).toBeVisible({ timeout: 20_000 });
  });

  test('is reachable from the Learn tab and shows the whole course', async ({ page }) => {
    await page.getByTestId('open-course-map').click();
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });

    // Six levels × six units. The count comes from the spine, so this also
    // proves the real /api/content/curriculum projection reached the screen.
    //
    // MATCHED ON `data-unit-state`, NOT on the testid prefix: `course-unit-` also
    // prefixes `course-unit-test-*`, `course-unit-locked-*` and
    // `course-unit-mastered-*`, so the prefix form counted 37 once the open unit
    // started rendering its test offer. Only a unit ROW carries the state attribute.
    await expect(page.locator('[data-unit-state]')).toHaveCount(36);
    await expect(page.getByText('Unit 1 of 36')).toBeVisible();
    await expect(page.getByTestId('course-lessons-count')).toContainText('/ 180 lessons');
  });

  test('opens on the learner’s current unit, with its lessons showing', async ({ page }) => {
    await page.getByTestId('open-course-map').click();
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'current',
      { timeout: 20_000 },
    );
    await expect(page.getByTestId('course-lesson-alphabet')).toBeVisible();
    // A unit that is not current stays closed.
    await expect(page.getByTestId('course-lesson-basic-questions')).toHaveCount(0);
  });

  test('a lesson tap opens the lesson, and says nothing about a failure', async ({ page }) => {
    await page.getByTestId('open-course-map').click();
    await expect(page.getByTestId('course-lesson-alphabet')).toBeVisible({ timeout: 20_000 });
    await page.getByTestId('course-lesson-alphabet').click();
    // ASSERT THE DESTINATION, not merely that the map went away — a tap that
    // navigated anywhere at all would satisfy the weaker form. `lesson-nav-next`
    // is AnimatedLesson's own slide control, and `lesson-test-out` is the offer
    // it makes on the intro slide, so either proves the lesson itself opened.
    await expect(page.getByTestId('lesson-nav-next')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('course-map')).toHaveCount(0);
    await expect(page.getByTestId('course-open-failed')).toHaveCount(0);
  });

  test('the map survives a direct URL entry', async ({ page }) => {
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  });
});

/**
 * The unit test — the cumulative gate at the end of a unit.
 *
 * Driven end to end because the paper is assembled from FIVE separately-fetched
 * lesson bodies, and the one thing the component test cannot prove is that a
 * learner who has read a unit's lessons can get from the map to a real fifteen-item
 * paper in a browser.
 */
test.describe('Unit test', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    // Unit A1-1's five lessons, read. The ids come from the real spine.
    await page.addInitScript(() => {
      if (window.top !== window) return; // an init script runs in EVERY frame
      try {
        localStorage.setItem(
          'nh_curriculum_progress',
          JSON.stringify({
            done: {
              alphabet: '2026-09-01',
              'greetings-farewells': '2026-09-01',
              'pronouns-biti': '2026-09-01',
              gender: '2026-09-01',
              'plural-nouns': '2026-09-01',
            },
          }),
        );
      } catch {
        /* storage blocked — the test will fail visibly rather than silently */
      }
    });
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  });

  test('is offered on the finished unit and serves a fifteen-item paper', async ({ page }) => {
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'current',
    );
    await page.getByTestId('course-unit-test-A1-1').click();
    await expect(page.getByTestId('unit-test')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('unit-test-progress')).toHaveText('Question 1 of 15');
    // STATE THE COUNT: the bar is shown as items, never as a percentage.
    await expect(page.getByText('13 of 15 to pass')).toBeVisible();
  });

  test('an answer reveals the explanation and advances', async ({ page }) => {
    await page.getByTestId('course-unit-test-A1-1').click();
    await expect(page.getByTestId('unit-test')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('unit-test-next')).toHaveCount(0);
    await page.locator('[data-testid^="unit-test-opt-"]').first().click();
    await expect(page.getByTestId('unit-test-next')).toBeVisible();
    await page.getByTestId('unit-test-next').click();
    await expect(page.getByTestId('unit-test-progress')).toHaveText('Question 2 of 15');
  });
});

/**
 * The gate — the course opens one unit at a time, and says so.
 *
 * Driven because the lock is computed from two stores and rendered per row: the
 * unit tests prove the rule, and only a browser proves a learner meets it.
 */
test.describe('The course gate', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  });

  test('locks every unit after the first, and names what it is waiting on', async ({ page }) => {
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'current',
    );
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute('data-unit-state', 'locked');
    await expect(page.getByTestId('course-unit-C2-6')).toHaveAttribute('data-unit-state', 'locked');
    await page.getByTestId('course-unit-A1-2').locator('button').first().click();
    const notice = page.getByTestId('course-unit-locked-A1-2');
    await expect(notice).toBeVisible();
    await expect(notice).toContainText('opens this after Unit 1');
    // THE LIBRARY IS NOT LOCKED, and the sentence says so.
    await expect(notice).toContainText('Learning Center');
  });

  test('offers the test-out on the open unit before any reading', async ({ page }) => {
    // The CURRENT unit opens by itself, so clicking its header would COLLAPSE it —
    // which is what made the first version of this test fail on correct code.
    const offer = page.getByTestId('course-unit-test-A1-1');
    await expect(offer).toHaveAttribute('data-offer', 'testout');
    await expect(offer).toContainText('Already know this?');
    await offer.click();
    await expect(page.getByTestId('unit-test')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('unit-test-progress')).toHaveText('Question 1 of 15');
  });
});

/**
 * Production — the other half of the bar, in a browser.
 *
 * The AI evaluators are MOCKED here on purpose: what an E2E can prove that a unit
 * test cannot is that a learner who passed a unit test is offered the production
 * task, reaches it, and that a graded submission is recorded against the unit. What
 * the evaluator says is the evaluators' own contract, covered elsewhere.
 */
test.describe('Unit production', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.addInitScript(() => {
      if (window.top !== window) return; // an init script runs in EVERY frame
      try {
        // Unit A1-1's test passed, production owed.
        localStorage.setItem(
          'nh_course_units',
          JSON.stringify({ units: { 'A1-1': { passedAt: '2026-09-20' } } }),
        );
      } catch {
        /* storage blocked — the test fails visibly rather than silently */
      }
    });
    await page.route('**/api/correct', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ score: 82, changes: [], corrected_text: 'Ispravljeno.' }),
      }),
    );
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  });

  test('is offered on a unit whose test is passed, and records a graded task', async ({ page }) => {
    // The unit is not mastered yet: production is owed, so no tick.
    await expect(page.getByTestId('course-unit-mastered-A1-1')).toHaveCount(0);
    const write = page.getByTestId('course-unit-write-A1-1');
    await expect(write).toBeVisible();
    await write.click();

    await expect(page.getByTestId('unit-production')).toBeVisible({ timeout: 20_000 });
    // The brief comes from the unit's own lessons — nothing was authored for it.
    await expect(page.getByTestId('unit-production-count')).toContainText('of 25 words');
    await expect(page.getByTestId('unit-production-submit')).toBeDisabled();

    const enough = Array.from({ length: 26 }, (_, i) => `rijec${i}`).join(' ');
    await page.getByTestId('unit-production-input').fill(enough);
    await expect(page.getByTestId('unit-production-submit')).toBeEnabled();
    await page.getByTestId('unit-production-submit').click();

    await expect(page.getByTestId('unit-production-result')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByText('82/100')).toBeVisible();
    const stored = await page.evaluate(() => localStorage.getItem('nh_course_units'));
    expect(stored).toContain('wroteAt');
  });

  test('the next unit stays locked until BOTH halves are done', async ({ page }) => {
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute('data-unit-state', 'locked');
  });
});

/**
 * Retention — mastery is a claim about what stayed.
 *
 * The 7/30-day ladder cannot be waited out in a test, so the ladder is SEEDED as due
 * and what is driven is the consequence: the check-up is served, it draws a fresh
 * paper, and a failure takes nothing away.
 */
test.describe('Retention check-up', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.addInitScript(() => {
      if (window.top !== window) return; // an init script runs in EVERY frame
      try {
        // Unit A1-1 has met the whole bar, and its first check-up is overdue.
        localStorage.setItem(
          'nh_course_units',
          JSON.stringify({
            units: {
              'A1-1': {
                passedAt: '2026-09-01',
                production: { wroteAt: '2026-09-01', spokeAt: '2026-09-01' },
                recheck: { stage: 0, dueAt: '2020-01-01' },
              },
            },
          }),
        );
      } catch {
        /* storage blocked — the test fails visibly rather than silently */
      }
    });
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  });

  test('the bar opens the next unit while mastery waits on retention', async ({ page }) => {
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'cleared',
    );
    await expect(page.getByTestId('course-unit-A1-2')).toHaveAttribute(
      'data-unit-state',
      'current',
    );
    await expect(page.getByTestId('course-units-mastered')).toHaveText('0 of 36 units mastered');
    // The unit's own line says what it is waiting for, and — because this ladder is
    // seeded DUE — the promise comes with the button that keeps it. Asserting the
    // due wording rather than the waiting wording is deliberate: a line reading
    // "we will check it again in a few days" beside an overdue check-up is the
    // promise-without-a-door defect this pair exists to keep closed.
    await page.getByTestId('course-unit-A1-1').locator('button').first().click();
    await expect(page.getByTestId('course-unit-holding-A1-1')).toContainText(
      'Time to check it stayed',
    );
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toBeVisible();
  });

  test('a ladder that is not yet due says so and offers nothing', async ({ page }) => {
    // The OTHER arm of the holding copy. Written because the two arms differ only in
    // wording and a test that drives one of them reads exactly like a test that
    // covers both. The later init script wins, so this re-seeds the same unit with a
    // check-up far in the future.
    await page.addInitScript(() => {
      if (window.top !== window) return;
      try {
        localStorage.setItem(
          'nh_course_units',
          JSON.stringify({
            units: {
              'A1-1': {
                passedAt: '2026-09-01',
                production: { wroteAt: '2026-09-01', spokeAt: '2026-09-01' },
                recheck: { stage: 0, dueAt: '2099-01-01' },
              },
            },
          }),
        );
      } catch {
        /* storage blocked — the test fails visibly rather than silently */
      }
    });
    await page.reload();
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('course-unit-A1-1')).toHaveAttribute(
      'data-unit-state',
      'cleared',
    );
    await page.getByTestId('course-unit-A1-1').locator('button').first().click();
    await expect(page.getByTestId('course-unit-holding-A1-1')).toContainText('check it again');
    await expect(page.getByTestId('course-unit-recheck-A1-1')).toHaveCount(0);
  });

  test('a failed check-up takes nothing away', async ({ page }) => {
    await page.getByTestId('course-unit-A1-1').locator('button').first().click();
    // The DUE check-up, not the unit test: a passed unit has no test offer.
    await page.getByTestId('course-unit-recheck-A1-1').click();
    const sitting = page.getByTestId('unit-test');
    await expect(sitting).toBeVisible({ timeout: 20_000 });
    await expect(sitting).toHaveAttribute('data-mode', 'recheck');

    // Answer every question wrongly: pick the second option each time.
    for (let i = 0; i < 15; i++) {
      const opts = page.locator('[data-testid^="unit-test-opt-"]');
      await opts.nth(1).click();
      await page.getByTestId('unit-test-next').click();
    }
    const result = page.getByTestId('unit-test-result');
    await expect(result).toBeVisible({ timeout: 20_000 });
    await expect(result).toHaveAttribute('data-mode', 'recheck');
    await expect(page.getByTestId('unit-test-verdict')).toContainText('Slipped');

    // The unit keeps its pass and its production; only the ladder moved.
    const stored = await page.evaluate(() => localStorage.getItem('nh_course_units'));
    expect(stored).toContain('"passedAt":"2026-09-01"');
    expect(stored).toContain('wroteAt');
  });
});

/**
 * THE END-OF-LEVEL REVIEW (2026-09-27): mixed practice across all six units of a level,
 * before its Level Check. In a real browser because the round is assembled from thirty
 * separately-fetched lesson bodies through the router, the lazy chunk and the content
 * fetch — the chain the component test supplies for itself.
 */
test.describe('Level review', () => {
  test.beforeEach(async ({ page }) => {
    const { CURRICULUM } = await import('../functions/api/content/_data/curriculum.js');
    const a1 = CURRICULUM.filter((e) => e.level === 'A1').map((e) => e.id);
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.addInitScript((ids) => {
      if (window.top !== window) return; // an init script runs in EVERY frame
      try {
        const done = {};
        for (const id of ids) done[id] = '2026-09-01';
        localStorage.setItem('nh_curriculum_progress', JSON.stringify({ done }));
        // Every A1 unit has met the whole bar: test passed, both halves produced.
        const units = {};
        for (let i = 1; i <= 6; i++)
          units[`A1-${i}`] = {
            passedAt: '2026-09-10',
            production: {
              wroteAt: '2026-09-10',
              writeScore: 80,
              spokeAt: '2026-09-10',
              speakScore: 0.8,
            },
          };
        localStorage.setItem('nh_course_units', JSON.stringify({ units }));
      } catch {
        /* storage blocked — the test fails visibly rather than silently */
      }
    }, a1);
    await page.goto('/coursemap');
    await expect(page.getByTestId('course-map')).toBeVisible({ timeout: 20_000 });
  });

  test('is on the map once A1 is finished, and serves an eighteen-item mixed round', async ({
    page,
  }) => {
    const row = page.getByTestId('course-level-review-A1');
    await expect(row).toBeVisible();
    await expect(row).toHaveAttribute('data-done', '0');
    await page.getByTestId('course-level-review-open-A1').click();
    await expect(page.getByTestId('level-review')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('level-review-progress')).toHaveText('Question 1 of 18');
    await expect(page.getByText('practice, not scored')).toBeVisible();
  });

  test('a missed item comes back, and the round ends on a first-try count', async ({ page }) => {
    await page.getByTestId('course-level-review-open-A1').click();
    await expect(page.getByTestId('level-review')).toBeVisible({ timeout: 20_000 });
    let sawRepeat = false;
    for (let i = 0; i < 200; i++) {
      if (await page.getByTestId('level-review-result').isVisible()) break;
      const card = page.getByTestId('level-review');
      if ((await card.getAttribute('data-repeat')) === '1') sawRepeat = true;
      // The first option on screen: right about a quarter of the time, so some items miss.
      await page.getByTestId('level-review-option').first().click();
      await page.getByTestId('level-review-next').click();
    }
    await expect(page.getByTestId('level-review-result')).toBeVisible({ timeout: 20_000 });
    expect(sawRepeat, 'a missed question must come back before the round ends').toBe(true);
    await expect(page.getByTestId('level-review-first-try')).toContainText(
      /\d+ of 18 right first time/,
    );
    const stored = await page.evaluate(() => localStorage.getItem('nh_course_units'));
    expect(stored).toContain('"reviews"');
    expect(stored).toContain('"A1"');

    await page.getByTestId('level-review-level-check').click();
    await expect(page).toHaveURL(/equivalency/, { timeout: 20_000 });
  });
});
