import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';

/**
 * Back goes where the learner came from, not to the place stored for an exercise they left.
 * Reproduced 2026-11-22: start a lesson, leave it with the bottom bar, open Profile >
 * My Analytics, press Back -> it landed on /learn instead of Profile.
 */
test.describe('Back after leaving an exercise by the tab bar', () => {
  test('My Analytics goes back to Profile', async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await page.goto('/learn');
    await expect(page.getByTestId('learn-lesson-testout')).toBeVisible({ timeout: 20_000 });
    await page.getByTestId('learn-lesson-testout').click();
    await expect(page.getByTestId('lesson-check-progress')).toBeVisible({ timeout: 20_000 });
    await page.getByTestId('nav-more').click(); // leave by the tab bar, not Back
    await page.getByTestId('header-profile').click();
    await page.getByText('My Analytics').first().click();
    await expect(page).toHaveURL(/\/analytics$/);
    await page
      .getByRole('button', { name: /back/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/profile$/);
  });
});
