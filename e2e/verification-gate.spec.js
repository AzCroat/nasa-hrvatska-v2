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
    // The card still names the standing being protected (B1, the top of the
    // stack and what gates content) while offering the rung below it.
    await expect(card).toContainText('B1');
    await expect(card).toContainText('A2');
    // No snooze / dismiss: the card's only button is the verification CTA.
    await expect(card.getByRole('button')).toHaveCount(1);
  });

  test('gate CTA routes into the Level Verification intro', async ({ page }) => {
    await page.getByTestId('verification-gate-cta').click();
    await expect(page.getByText('CEFR LEVEL VERIFICATION')).toBeVisible({ timeout: 15_000 });
    // A2, not B1. The fixture holds provisional A2 + B1 with NOTHING verified,
    // and since 2026-09-09 the gate offers the next RUNG (`nextCheck`, the
    // bottom of the stack) rather than its top. Offering B1 to a learner
    // verified at A1 was the field report: the badge said A1 and the gate said
    // C1 on the same screen, four levels apart.
    await expect(page.getByText('Verify A2').first()).toBeVisible();
    await expect(page.getByTestId('equivalency-begin')).toBeVisible();
    // NO step-down: A2 is already the bottom of this stack, so there is nothing
    // to step down TO. That button now renders only when a lower rung exists —
    // before, it showed whenever the stack had depth and its onClick found no
    // lower option, which after the split is precisely when it does nothing.
    await expect(page.getByTestId('equivalency-stepdown')).toHaveCount(0);
  });

  test('an attempt with no practice since takes the gate OFF Home — no hero, no chip (owner, 2026-09-07)', async ({
    page,
  }) => {
    // Re-seed with an attempt recorded at the fixture's own XP (1500): nothing
    // has been earned since, so the top of Home must show NOTHING for the gate
    // — not the red takeover and not the one-line "ready on <date>" chip the
    // 2026-08-18 fix left there. Taking the test has to visibly change Home,
    // and a calendar date must not bring the prompt back: this attempt is
    // thirty days old.
    await page.addInitScript(() => {
      const raw = localStorage.getItem('nh_cefr_certifications');
      const state = raw ? JSON.parse(raw) : {};
      state.attempts = [
        {
          level: 'B1',
          passed: false,
          takenAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
          scores: { vocab: 0.5, grammar: 0.5, reading: 0.5 },
          xp: 1500,
        },
      ];
      localStorage.setItem('nh_cefr_certifications', JSON.stringify(state));
    });
    await page.reload();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
      timeout: 10_000,
    });
    // The session card proves Home has rendered past the gate slot.
    await expect(page.getByTestId('session-card')).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('verification-gate-card')).toHaveCount(0);
    await expect(page.getByTestId('verification-gate-chip')).toHaveCount(0);
    // The check is still one tap away on the Me tab for anyone who wants it sooner.
    await page.getByTestId('nav-profile').click();
    await expect(page.getByTestId('equivalency-card-verify')).toBeVisible({ timeout: 15_000 });
  });

  test('the hero RETURNS once VERIFICATION_RETURN_XP has been earned since the attempt', async ({
    page,
  }) => {
    // Same attempt, recorded 400 XP ago (fixture xp 1500, baseline 1100): the
    // learning is done, so the prompt is back — an hour after the attempt,
    // because it waits for work, not for a date.
    await page.addInitScript(() => {
      const raw = localStorage.getItem('nh_cefr_certifications');
      const state = raw ? JSON.parse(raw) : {};
      state.attempts = [
        {
          level: 'B1',
          passed: false,
          takenAt: Date.now() - 60 * 60 * 1000,
          scores: { vocab: 0.5, grammar: 0.5, reading: 0.5 },
          xp: 1100,
        },
      ];
      localStorage.setItem('nh_cefr_certifications', JSON.stringify(state));
    });
    await page.reload();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible({
      timeout: 10_000,
    });
    const card = page.getByTestId('verification-gate-card');
    await expect(card).toBeVisible({ timeout: 20_000 });
    await expect(page.getByTestId('verification-gate-returning')).toContainText('400 XP');
    await expect(page.getByTestId('verification-gate-chip')).toHaveCount(0);
  });

  test('Me tab badge is honest about the provisional level', async ({ page }) => {
    // testid, not getByText('Me') — substring matching also hits "Ho**me**"
    // in the desktop nav and trips Playwright's strict mode.
    await page.getByTestId('nav-profile').click();
    await expect(page.getByTestId('cefr-provisional-tag')).toBeVisible({ timeout: 15_000 });
    await expect(page.getByTestId('equivalency-card-verify')).toBeVisible();
  });
});
