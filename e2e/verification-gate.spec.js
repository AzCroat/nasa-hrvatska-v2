// e2e/verification-gate.spec.js
//
// Phase 1 mastery gate (2026-08-16): a user whose CEFR level was grandfathered
// from activity (provisional passes) must verify it. The gate takes over the
// Home CTA with no snooze, tags the profile badge, and routes into the Level
// Verification intro. seedAuth normally seeds VERIFIED users; this spec
// overwrites the certification blob with grandfather-shaped provisional passes
// to put the account behind the gate.

import { test, expect } from '@playwright/test';
import { seedAuth, blockFirebase, mockTTS } from './fixtures/seed-auth.js';

/** Overwrite seedAuth's verified certification with provisional (grandfather-
 *  signature) passes at A2+B1 — the state every pre-Phase-1 user wakes up in. */
function seedProvisional(page) {
  return page.addInitScript(() => {
    const gf = (at) => ({
      passedAt: at,
      scores: { vocab: 0.8, grammar: 0.8, reading: 0.8 },
      overall: 80,
      provisional: true,
    });
    localStorage.setItem(
      'nh_cefr_certifications',
      JSON.stringify({
        passes: { A2: gf(1700000000000), B1: gf(1700000000001) },
        attempts: [],
        lastFailedAt: {},
        checkpoints: {
          lastCheckpointAt: null,
          activeDaysAtLastCheckpoint: 0,
          consecutiveFails: {},
          focusSkills: {},
          demotions: [],
          snoozedUntil: null,
        },
        v: 2,
      }),
    );
  });
}

test.describe('Verification gate (provisional CEFR levels)', () => {
  test.beforeEach(async ({ page }) => {
    await seedAuth(page, { xp: 1500 }); // B1-eligible fixture
    await seedProvisional(page); // runs after seedAuth → its blob wins
    await blockFirebase(page);
    await mockTTS(page);
    await page.goto('/');
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
      timeout: 10_000,
    });
  });

  test('Home shows the verification gate card with no dismiss control', async ({ page }) => {
    const card = page.getByTestId('verification-gate-card');
    await expect(card).toBeVisible({ timeout: 20_000 });
    await expect(card).toContainText('LEVEL VERIFICATION REQUIRED');
    await expect(card).toContainText('B1');
    // No snooze / dismiss: the card's only button is the verification CTA.
    await expect(card.getByRole('button')).toHaveCount(1);
  });

  test('gate CTA routes into the Level Verification intro', async ({ page }) => {
    await page.getByTestId('verification-gate-cta').click();
    await expect(page.getByText('CEFR LEVEL VERIFICATION')).toBeVisible({ timeout: 15_000 });
    await expect(page.getByText('Verify B1').first()).toBeVisible();
    await expect(page.getByTestId('equivalency-begin')).toBeVisible();
    // Step-down path is offered (A2 is also provisional).
    await expect(page.getByTestId('equivalency-stepdown')).toBeVisible();
  });

  test('Me tab badge is honest about the provisional level', async ({ page }) => {
    // testid, not getByText('Me') — substring matching also hits "Ho**me**"
    // in the desktop nav and trips Playwright's strict mode.
    await page.getByTestId('nav-profile').click();
    await expect(page.getByTestId('cefr-provisional-tag')).toBeVisible({ timeout: 15_000 });
    await expect(page.getByTestId('equivalency-card-verify')).toBeVisible();
  });
});
