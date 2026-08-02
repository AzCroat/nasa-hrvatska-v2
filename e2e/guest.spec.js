import { test, expect } from '@playwright/test';
import { blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';

/**
 * Guest mode — the signed-out learner path.
 *
 * This surface had no e2e coverage at all: 29 of the suite's 45 specs begin by
 * seeding a signed-in user via seedAuth, and none exercised "start learning
 * without an account". That blind spot is why the bug below survived — the
 * login screen promises "progress saved on this device only" while nothing was
 * written to storage at all.
 *
 * blockFirebase() aborts identitytoolkit.googleapis.com, which is where
 * signInAnonymously() goes. That failure is what puts doGuest() onto its
 * enterLegacyGuest() fallback, where authUser stays null — the exact state real
 * users hit when anonymous auth is disabled in the Firebase console, when the
 * device is offline at the moment they tap Guest, or during a Firebase outage.
 */

async function enterGuest(page) {
  await blockFirebase(page);
  await mockTTS(page);
  await mockContent(page);
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Naša Hrvatska', { timeout: 20_000 });
  await page.getByRole('button', { name: /Continue as Guest/ }).click();
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
    timeout: 15_000,
  });
}

test.describe('Guest mode', () => {
  test('the guest reaches the app from the login screen', async ({ page }) => {
    await enterGuest(page);
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  });

  test('the home screen renders real content, not a permanent loading state', async ({ page }) => {
    await enterGuest(page);
    // Regression guard: a guest has no Firestore document, so anything that waits
    // on a remote read before rendering would hang here forever.
    await expect
      .poll(async () => ((await page.locator('body').textContent()) || '').trim().length, {
        timeout: 15_000,
      })
      .toBeGreaterThan(300);
    // The signed-out learner still gets the level/streak chrome.
    await expect(page.getByText(/Level 1/).first()).toBeVisible({ timeout: 10_000 });
  });

  test('guest progress is written to localStorage — the login screen promises this', async ({
    page,
  }) => {
    await enterGuest(page);
    // The auto-save effect keys a guest's blob on the fixed GUEST_UID, because a
    // guest has no uid. Before the fix this wrote nothing and the promise on the
    // login screen ("progress saved on this device only") was simply false.
    await expect
      .poll(
        async () =>
          await page.evaluate(() => Object.keys(localStorage).filter((k) => k.startsWith('uP_'))),
        { timeout: 15_000 },
      )
      .toContain('uP_guest');
  });

  test('a guest blob survives a reload and is read back', async ({ page }) => {
    await enterGuest(page);
    await expect
      .poll(async () => await page.evaluate(() => localStorage.getItem('uP_guest') !== null), {
        timeout: 15_000,
      })
      .toBe(true);

    // Stamp a recognisable value into the stored blob, reload, and confirm the
    // app reads it back rather than starting the guest from scratch.
    await page.evaluate(() => {
      const raw = JSON.parse(localStorage.getItem('uP_guest'));
      raw.name = 'GuestRestoreProbe';
      localStorage.setItem('uP_guest', JSON.stringify(raw));
    });

    await page.reload();
    await page.getByRole('button', { name: /Continue as Guest/ }).click();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
      timeout: 15_000,
    });

    // The restore effect must not be clobbered by the auto-save effect writing a
    // default snapshot first — that ordering is why the restore flag is state
    // rather than a ref.
    await expect
      .poll(
        async () =>
          await page.evaluate(() => {
            const raw = localStorage.getItem('uP_guest');
            return raw ? JSON.parse(raw).name : null;
          }),
        { timeout: 15_000 },
      )
      .toBe('GuestRestoreProbe');
  });

  test('a second guest session does not wipe the first one', async ({ page }) => {
    // The restore flag is per-App-mount state, so a page reload always clears it
    // — which is why the reload test above passed while this path was broken.
    // Only an in-SPA guest -> signed-out -> guest cycle keeps the flag alive, and
    // leaving guest mode does NOT delete uP_guest: doOut() removes 'uP_' + uid
    // and a legacy guest has no uid, and its nh_ sweep does not match this key.
    // So the second session found a stale `guestRestored === true`, skipped the
    // restore, and let the auto-save effect write post-sign-out DEFAULT stats
    // straight over the stored progress.
    await enterGuest(page);
    await expect
      .poll(async () => await page.evaluate(() => localStorage.getItem('uP_guest') !== null), {
        timeout: 15_000,
      })
      .toBe(true);

    await page.evaluate(() => {
      const raw = JSON.parse(localStorage.getItem('uP_guest'));
      raw.name = 'FirstGuestSession';
      raw.stats = { ...(raw.stats || {}), xp: 420 };
      localStorage.setItem('uP_guest', JSON.stringify(raw));
    });

    // Leave guest mode without reloading.
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await nav.getByRole('button', { name: 'Me', exact: true }).click();
    await page.locator('.profile-tab-pill').filter({ hasText: 'Settings' }).click();
    await page
      .getByRole('button', { name: /Sign Out/i })
      .first()
      .click();
    // Two shapes reach the same place: the Settings section's button opens a
    // confirm step, while the sidebar control signs out directly. Click the
    // confirmation only if one actually appeared.
    const confirmOut = page.getByRole('button', { name: /^Sign Out$/ });
    if (
      await confirmOut
        .last()
        .isVisible({ timeout: 3_000 })
        .catch(() => false)
    ) {
      await confirmOut.last().click();
    }

    await expect(page.getByRole('button', { name: /Continue as Guest/ })).toBeVisible({
      timeout: 15_000,
    });

    // Re-enter guest mode in the same page — no reload, so App never remounts.
    await page.getByRole('button', { name: /Continue as Guest/ }).click();
    await expect(nav).toBeVisible({ timeout: 15_000 });

    // The first session's progress must still be there.
    await expect
      .poll(
        async () =>
          await page.evaluate(() => {
            const raw = localStorage.getItem('uP_guest');
            return raw ? (JSON.parse(raw).stats || {}).xp : null;
          }),
        { timeout: 15_000 },
      )
      .toBe(420);
  });
});
