// xpRebalance.test.ts — pins the XP-economy rebalance + budget raise
// (fluency initiative #1/#3, owner directives 2026-08-14).
//
// The incentive gradient must point at PRODUCTION:
//   - dwell (presence on an info screen) pays a token DWELL_XP, not a third
//     of a drill;
//   - production-pool completions pay a 50% premium, applied centrally in
//     useAward at the same PRODUCTION_SCREEN_IDS check that counts reps;
//   - the AI budget ceiling is $10/month (gate $9), spent on conversation
//     turns — per-endpoint ceilings and the Haiku-only model policy stand.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { DWELL_XP } from '../lib/blackHoleScreens';
import { PRODUCTION_XP_MULTIPLIER } from '../lib/productionMetric';
import { MONTHLY_BUDGET_MICROUSD } from '../../functions/api/_aiBudget.js';
import { ACTIVITY_XP_MAP } from '../lib/activityXp.js';

describe('XP economy rebalance (2026-08-14)', () => {
  it('dwell pays a token 5 XP; production pays a 1.5x premium', () => {
    expect(DWELL_XP).toBe(5);
    expect(PRODUCTION_XP_MULTIPLIER).toBe(1.5);
    expect(DWELL_XP).toBeLessThan(15 / 2); // a dwell is now a token, well under half the old payout
  });

  it('the dwell timer awards DWELL_XP (not a hardcoded amount)', () => {
    const src = readFileSync('src/hooks/useScreenLauncher.ts', 'utf8');
    expect(src).toContain("award(DWELL_XP, undefined, 'lesson', screenId)");
    expect(src).not.toContain("award(15, undefined, 'lesson', screenId)");
  });

  it('useAward applies the production premium at the PRODUCTION_SCREEN_IDS check', () => {
    const src = readFileSync('src/hooks/useAward.ts', 'utf8');
    expect(src).toContain('PRODUCTION_XP_MULTIPLIER');
    // Premium multiplies the BASE amount so campaign multipliers stack on top.
    expect(src).toMatch(/Math\.round\(amt \* PRODUCTION_XP_MULTIPLIER\)/);
  });

  it('the premium cannot push a typical production payout past the server speaking cap', () => {
    // Speaking screens award at most ~15 + score*5 with small totals; the
    // realistic top base is ~60. 60 * 1.5 = 90 <= the 100 cap.
    expect(Math.round(60 * PRODUCTION_XP_MULTIPLIER)).toBeLessThanOrEqual(ACTIVITY_XP_MAP.speaking);
  });
});

describe('AI budget ceiling (owner raise, 2026-08-14)', () => {
  it('gate sits at $9.00 — $1 head-room under the $10 mandate', () => {
    expect(MONTHLY_BUDGET_MICROUSD).toBe(9_000_000);
  });
});
