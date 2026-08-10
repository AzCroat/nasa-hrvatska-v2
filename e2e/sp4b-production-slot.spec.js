// e2e/sp4b-production-slot.spec.js
import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS, mockContent } from './fixtures/seed-auth.js';
import { forceCefr } from './fixtures/forceCefr.js';
import { mockRnd } from './fixtures/mockRnd.js';

test.describe('SP4b — production slot in daily session', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page);
    await blockFirebase(page);
    await mockTTS(page);
    await mockContent(page);
    await forceCefr(page, 'B1'); // deterministic CEFR
    await mockRnd(page, 0); // deterministic selectProductionExercise pick
  });

  test('daily session contains the expected production exercise (mic available)', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('nh_mic_state', 'available');
      // Lock-in profile.st.xp=2000 (B1) so HomeTab's production selector
      // unconditionally sees a B1 user (Speaking Sprint needs A2+).
      const uS = JSON.parse(localStorage.getItem('uS') || '{}');
      const email = uS.u;
      if (email) {
        const profileKey = 'uP_' + email;
        const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
        profile.st = { ...(profile.st || {}), xp: 2000, lc: 0, gc: 0 };
        localStorage.setItem(profileKey, JSON.stringify(profile));
      }
    });
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
      timeout: 15_000,
    });
    // Session-Rec #1/#2 (+ Wave 3): PRODUCTION_POOL is [dialogue, writing,
    // shadowing, speaking, production_drill, dictation, speaking_sprint]. With
    // rnd=0 + mic-available + B1, the first eligible item is `dialogue`
    // (label "Conversation").
    // Scope to the session card (as the sibling test below does for "Speaking"):
    // the Home tab's Daily Input card can also contain the substring
    // "conversation" (a listening unit's description), so an unscoped getByText
    // would strict-mode-violate.
    await expect(page.getByTestId('session-card').getByText('Conversation')).toBeVisible({
      timeout: 15_000,
    });
  });

  test('open Speaking is routed into the session as a production slot (B1, mic available)', async ({
    page,
  }) => {
    // At B1 the conversation anchor takes `dialogue`, so the production pick is
    // chosen from [writing, shadowing, speaking, production_drill, dictation,
    // speaking_sprint] (Wave 3 re-added speaking_sprint). rnd=0.4 → index 2 →
    // `speaking`. This proves SpeakingScreen is now a session production option
    // (the follow-up that auto-routes it); the launcher initialises its vocab
    // pool so it can't render blank (render path covered by
    // pronunciation.spec.js + the verbatim launchSpeaking init reuse).
    await mockRnd(page, 0.4);
    await page.addInitScript(() => {
      localStorage.setItem('nh_mic_state', 'available');
      const uS = JSON.parse(localStorage.getItem('uS') || '{}');
      const email = uS.u;
      if (email) {
        const profileKey = 'uP_' + email;
        const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
        profile.st = { ...(profile.st || {}), xp: 2000, lc: 0, gc: 0 };
        localStorage.setItem(profileKey, JSON.stringify(profile));
      }
    });
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId('session-card').getByText('Speaking')).toBeVisible({
      timeout: 15_000,
    });
  });

  test('mic-denied user gets a keyboard production slot; mic-required exercises are filtered out', async ({
    page,
  }) => {
    await page.addInitScript(() => {
      localStorage.setItem('nh_mic_state', 'denied');
      // Lock-in profile.st.xp=2000 (B1) so HomeTab's production selector sees a
      // B1 user (all five production exercises CEFR-unlocked).
      const uS = JSON.parse(localStorage.getItem('uS') || '{}');
      const email = uS.u;
      if (email) {
        const profileKey = 'uP_' + email;
        const profile = JSON.parse(localStorage.getItem(profileKey) || '{}');
        profile.st = { ...(profile.st || {}), xp: 2000, lc: 0, gc: 0 };
        localStorage.setItem(profileKey, JSON.stringify(profile));
      }
      // Seed the two keyboard AI modes (dialogue, writing) as done TODAY so
      // recent-exclusion drops them, leaving `dictation` as the sole keyboard
      // option. This makes the assertion meaningful: if the mic filter were
      // broken, the mic-required `shadowing` (rnd=0 first) would surface instead.
      // LOCAL date — useDailySession compares recency against localDateStr().
      const d = new Date();
      const today =
        d.getFullYear() +
        '-' +
        String(d.getMonth() + 1).padStart(2, '0') +
        '-' +
        String(d.getDate()).padStart(2, '0');
      localStorage.setItem(
        'nh_recent_production',
        JSON.stringify([
          { screen: 'dialogue', date: today },
          { screen: 'writing', date: today },
        ]),
      );
    });
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
      timeout: 15_000,
    });
    // Mic-denied B1 keyboard pool = [dialogue, writing, dictation,
    // speaking_sprint]; dialogue + writing are recent, and rnd=0 picks the first
    // survivor → dictation. shadowing + production_drill (mic-required) must NOT
    // appear.
    await expect(page.getByText('Dictation')).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText('Shadowing')).toHaveCount(0);
  });
});
