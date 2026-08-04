/**
 * paidStreakRestore.test.ts — the 200-XP streak restore must survive the sync.
 *
 * THE BUG
 * -------
 * `uStreak` is only a DERIVED cache. `applyRemoteProgress` recomputes the streak
 * from the canonical day-set `nh_streak_days` on every remote snapshot and
 * overwrites the cache with the result.
 *
 * The paid restore in useHeroRewards wrote `uStreak = {count:1, last:today}` and
 * nothing else. The button only renders at count === 0, which by definition means
 * today is NOT in the day-set — so the next sync (~2 minutes, or the next app
 * launch) re-derived 0 and wiped the restore, while `spent` kept the 200 XP
 * because that counter is deliberately monotonic and never refunded. The user
 * paid and got nothing, and `nh_streak_restored_<today>` blocked a retry.
 *
 * The codebase had already learned this twice — `repairStreak` (streak.ts:116)
 * and `applyStreakEarnBack` (appUtils.ts:343) both call `restoreStreakDays`, each
 * with a comment saying "the paid repair is undone within ~2 min" — and
 * streakRestoreSync.test.ts guards exactly those two. The third path was missed,
 * and it is the ONLY one a user can reach: `showStreakRepair` is never set true
 * anywhere in the tree, and `canRepairStreak()` requires `count === 0 && last ===
 * yesterday`, a state `computeStreak` cannot produce (yesterday in the day-set
 * anchors there and returns count >= 1).
 *
 * This test asserts the invariant at the level that matters: after the restore,
 * re-deriving from the canonical day-set must still yield a live streak.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { restoreStreakDays } from '../lib/appUtils';
import { computeStreak, type DaySet } from '../lib/streakDays';
import { localDateStr } from '../lib/dateUtils';

/**
 * The canonical day-set, read the way applyRemoteProgress reads it. appUtils'
 * own readStreakDays is module-private, and the set is a keyed object
 * (Record<string, boolean>) rather than an array — reading the key directly
 * keeps this test honest about the on-disk shape.
 */
function daySet(): DaySet {
  return JSON.parse(localStorage.getItem('nh_streak_days') || '{}') as DaySet;
}

const SRC = 'src/components/home/useHeroRewards.ts';

beforeEach(() => {
  localStorage.clear();
});
afterEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('paid streak restore — survives the sync re-derivation', () => {
  it('the premise holds: a bare uStreak write re-derives to 0', () => {
    // Without this, every assertion below could pass for the wrong reason —
    // it would not prove the day-set write is what saves the restore.
    const today = localDateStr();
    localStorage.setItem('uStreak', JSON.stringify({ count: 1, last: today }));

    // This is what applyRemoteProgress does on the next snapshot.
    const derived = computeStreak(daySet(), today);
    expect(derived.count).toBe(0);
  });

  it('restoreStreakDays puts today in the canonical day-set so the streak survives', () => {
    const today = localDateStr();
    localStorage.setItem('uStreak', JSON.stringify({ count: 1, last: today }));
    restoreStreakDays(1, today);

    const derived = computeStreak(daySet(), today);
    expect(derived.count).toBeGreaterThanOrEqual(1);
    expect(derived.last).toBe(today);
  });

  it('is additive — an existing active day is never dropped', () => {
    const today = localDateStr();
    const earlier = '2020-01-01';
    localStorage.setItem('nh_streak_days', JSON.stringify({ [earlier]: true }));

    restoreStreakDays(1, today);

    const days = daySet();
    expect(days[earlier]).toBe(true);
    expect(days[today]).toBe(true);
  });

  it('the paid restore call site backfills the day-set', async () => {
    // Driving the hook itself would need the whole StatsContext + HomeTab tree;
    // what must not regress is narrower and exact: the purchase path writes the
    // canonical day-set, not just the derived cache. Deleting the call is the
    // regression this guards, and it is the shape the other two recovery paths
    // already use.
    const { readFileSync } = await import('node:fs');
    const source = readFileSync(SRC, 'utf8');

    // Non-vacuity: we are reading the file we think we are.
    expect(source).toContain('STREAK_RESTORE_COST');
    expect(source).toContain("safeSetItem('uStreak'");

    expect(source).toMatch(/restoreStreakDays\(/);
  });

  it('all three recovery paths backfill — none is left on the cache alone', async () => {
    const { readFileSync } = await import('node:fs');
    for (const f of ['src/lib/streak.ts', 'src/lib/appUtils.ts', SRC]) {
      expect(readFileSync(f, 'utf8')).toMatch(/restoreStreakDays\(/);
    }
  });
});

/**
 * The price is one number.
 *
 * It used to be three: a local const in useHeroRewards (what the learner is
 * actually charged), a bare `xp >= 200` in the RewardsPanel visibility gate, and
 * the literal "200 XP" in the button label. All three read 200, so nothing was
 * broken — but the other two rewards (XP_BOOST_COST, FREEZE_COST_XP) already
 * shared one constant between charge and display, and this one did not. Changing
 * the price in the obvious place would have left the panel gating at the old
 * number and advertising it while charging the new one.
 */
describe('streak restore price has a single source of truth', () => {
  const read = async (f: string) => (await import('node:fs')).readFileSync(f, 'utf8');
  const PANEL = 'src/components/home/RewardsPanel.tsx';

  it('is exported once from appUtils, beside the other reward costs', async () => {
    const { STREAK_RESTORE_COST, XP_BOOST_COST } = await import('../lib/appUtils');
    expect(typeof STREAK_RESTORE_COST).toBe('number');
    expect(STREAK_RESTORE_COST).toBeGreaterThan(0);
    // Non-vacuity: the module really is the one holding the reward costs.
    expect(typeof XP_BOOST_COST).toBe('number');
  });

  it('the charge and both display sites reference the constant', async () => {
    expect(await read(SRC)).toMatch(/spendXp\(STREAK_RESTORE_COST\)/);
    const panel = await read(PANEL);
    expect(panel).toMatch(/xp >= STREAK_RESTORE_COST/); // visibility gate
    expect(panel).toMatch(/\{STREAK_RESTORE_COST\} XP/); // button label
  });

  it('neither file hard-codes the price again', async () => {
    // Scoped to the gate and label shapes rather than the digits alone, so the
    // comments above them that recount the original bug keep their numbers.
    for (const f of [SRC, PANEL]) {
      const src = await read(f);
      expect(`${f}: ${/xp >= \d+/.test(src)}`).toBe(`${f}: false`);
      expect(`${f}: ${/Restore streak — \d+ XP/.test(src)}`).toBe(`${f}: false`);
      expect(`${f}: ${/spendXp\(\d+\)/.test(src)}`).toBe(`${f}: false`);
    }
  });
});
