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
    // DERIVED, because this pin named useScreenLauncher.ts and went stale the day
    // the dwell block was extracted to lib/dwellCredit.ts for the 800-line cap
    // (2026-09-24) — a file path in an assertion decays exactly like a
    // hand-maintained list. Whichever file holds the dwell award must reach
    // DWELL_XP through the constant; a literal 15 anywhere fails.
    const HOLDERS = ['src/lib/dwellCredit.ts', 'src/hooks/useScreenLauncher.ts'];
    const sources = HOLDERS.map((f) => readFileSync(f, 'utf8'));
    const awarding = sources.filter((src) => /award\(DWELL_XP, undefined, 'lesson',/.test(src));
    expect(awarding.length, 'no file awards the dwell XP through DWELL_XP').toBe(1);
    for (const src of sources) expect(src).not.toMatch(/award\(1?5, undefined, 'lesson',/);
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
