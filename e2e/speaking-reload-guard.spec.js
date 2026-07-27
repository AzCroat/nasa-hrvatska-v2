// e2e/speaking-reload-guard.spec.js
//
// Regression for the 2026-07-15 P0: a user could get stranded on the daily
// session's Speaking activity. SpeakingScreen depends on parent-held launch
// state (sw/si/…) that lives ONLY in React memory — it is not persisted. When
// the user lands on the /speaking URL WITHOUT that in-memory state (a reload or
// PWA restore while on the screen, a deep-link, or forward-nav back into it),
// currentScreen becomes 'speaking' with sw empty. Before the fix, SpeakingScreen
// returned null → a blank, back-button-less screen, and the stale
// nh_session_started marker was never cleared, PINNING the daily session.
//
// This was NEVER B2-specific: the speaking slot is offered to any A2+ user with
// a mic. The reproduction below drives the exact production trigger — navigating
// straight to /speaking with no launch state — and asserts the ScreenGuard
// recovery UI renders (not a blank) AND that it clears the session markers so the
// session is no longer pinned.
//
// (The static invariant — every launch-state-dependent session route has a
// ScreenGuard fallback — is covered by src/tests/session-screen-guards.test.ts.
// This spec proves the guard actually renders end-to-end in the built app.)
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS } from './fixtures/seed-auth.js';

test.describe('Speaking — reload/deep-link onto /speaking never strands the session', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page, { xp: 6000 }); // B2-range XP — proves it is not B2-locked
    await blockFirebase(page);
    await mockTTS(page);
  });

  test('a stranded session on /speaking shows the recovery UI and un-pins the session', async ({
    page,
  }) => {
    // Simulate a session that launched Speaking and then lost its in-memory
    // launch state (reload / PWA restore): the sessionStorage markers survive,
    // the React state does not.
    await page.addInitScript(() => {
      sessionStorage.setItem('nh_session_started', 'speaking');
      sessionStorage.setItem('nh_session_category', 'cat_speaking');
    });

    await page.goto('/speaking');

    // The ScreenGuard recovery UI must render — NOT a blank screen.
    await expect(page.getByText('Session refreshed')).toBeVisible({ timeout: 15_000 });
    await expect(
      page.getByText(/speaking practice needs to be started from the Practice tab/i),
    ).toBeVisible();
    await expect(page.getByRole('button', { name: 'Back to Practice' })).toBeVisible();

    // Pre-fix this rendered `null`: the pronunciation-practice UI must be absent
    // (we are on the guard, not a half-broken SpeakingScreen).
    await expect(page.getByText(/Pronunciation Practice/i)).toHaveCount(0);

    // The guard must clear the stale session markers, so the daily session is no
    // longer pinned to an activity it can never complete.
    const started = await page.evaluate(() => sessionStorage.getItem('nh_session_started'));
    const category = await page.evaluate(() => sessionStorage.getItem('nh_session_category'));
    expect(started).toBeNull();
    expect(category).toBeNull();

    // The recovery button provides a real way out (no dead-end): it is enabled,
    // and clicking it dismisses the guard (navigates away from the stranded
    // screen). We don't assert the exact destination — goBack() uses history /
    // return-context that a synthetic deep-link doesn't reproduce; the product
    // guarantee under test is "renders recovery + un-pins", verified above.
    const backBtn = page.getByRole('button', { name: 'Back to Practice' });
    await expect(backBtn).toBeEnabled();
    await backBtn.click();
    await expect(page.getByText('Session refreshed')).toHaveCount(0);
  });

  test('a plain deep-link to /speaking (no active session) also shows recovery, not a blank', async ({
    page,
  }) => {
    // No nh_session_started marker — a cold deep-link / shared URL. The screen
    // still has no launch state, so it must show the guard rather than blank.
    await page.goto('/speaking');

    await expect(page.getByText('Session refreshed')).toBeVisible({ timeout: 15_000 });
    await expect(page.getByRole('button', { name: 'Back to Practice' })).toBeVisible();
  });
});
