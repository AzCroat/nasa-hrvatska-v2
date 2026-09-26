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
    await expect(page.locator('[data-testid^="course-unit-"]')).toHaveCount(36);
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
