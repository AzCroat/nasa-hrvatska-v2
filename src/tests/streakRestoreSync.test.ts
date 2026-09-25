/**
 * streakRestoreSync.test.ts — a restored streak must survive the next sync.
 *
 * The streak count lives in the `uStreak` cache, but applyRemoteProgress DERIVES
 * the streak from the canonical `nh_streak_days` set on every remote snapshot and
 * overwrites that cache. Paid repair (repairStreak) and earn-back
 * (applyStreakEarnBack) used to set only `uStreak.count`, leaving the day-set
 * holding just the recent post-break day(s) — so the next Firestore sync
 * re-derived a count of ~1 and silently wiped the restoration within ~2 minutes.
 *
 * These tests reproduce the sync re-derivation (computeStreak over the day-set)
 * and assert the restored count now survives it.
 *
 * THERE WERE THREE RECOVERY PATHS AND NOW THERE ARE TWO. `paidStreakRestore.test.ts`
 * guarded the third — `useHeroRewards.restoreStreak`, the 200-XP purchase — and its
 * own docstring called it "the ONLY one a user can reach". It was reachable by
 * nobody: the hero cluster had been unrendered since 2026-04-25 (sweep 129) and was
 * deleted in sweep 136, so that file went with it. The two paths here are the live
 * ones, driven through their real functions rather than pinned by source, and the
 * additivity assertion that file held is now the last test below.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { repairStreak } from '../lib/streak';
import { applyStreakEarnBack, restoreStreakDays } from '../lib/appUtils';
import { computeStreak, type DaySet } from '../lib/streakDays';

function dateStr(offsetDays: number): string {
  const d = new Date();
  if (offsetDays) d.setDate(d.getDate() + offsetDays);
  return (
    d.getFullYear() +
    '-' +
    String(d.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(d.getDate()).padStart(2, '0')
  );
}
const today = () => dateStr(0);
const yesterday = () => dateStr(-1);

/** Re-derive the streak the way applyRemoteProgress does on a remote snapshot. */
function syncDerivedCount(): number {
  const set = JSON.parse(localStorage.getItem('nh_streak_days') || '{}') as DaySet;
  return computeStreak(set, today()).count;
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('paid repairStreak backfills the day-set', () => {
  it('restores a 30-day streak that survives a sync re-derivation', () => {
    // Broken streak, last active yesterday → repairable. Earn-back records the
    // pre-break count of 30. Day-set is empty (the historical run was missed).
    localStorage.setItem('uStreak', JSON.stringify({ count: 0, last: yesterday() }));
    localStorage.setItem('nh_earn_back', JSON.stringify({ prev: 30, date: today(), lc: 2 }));

    const res = repairStreak(1000);
    expect(res.ok).toBe(true);
    expect(res.restoredCount).toBe(30);

    // Cache restored…
    expect(JSON.parse(localStorage.getItem('uStreak')!).count).toBe(30);
    // …AND the canonical set now derives 30, so the next sync keeps it.
    expect(syncDerivedCount()).toBe(30);
  });
});

describe('applyStreakEarnBack backfills the day-set', () => {
  it('restores a 20-day streak that survives a sync re-derivation', () => {
    // After completing 2 lessons the day after a break: streak is a fresh 1
    // ending today; earn-back token carries the pre-break count of 20 (lc>=2).
    localStorage.setItem('uStreak', JSON.stringify({ count: 1, last: today() }));
    localStorage.setItem('nh_earn_back', JSON.stringify({ prev: 20, date: today(), lc: 2 }));

    const restored = applyStreakEarnBack();
    expect(restored).toBe(20);

    expect(JSON.parse(localStorage.getItem('uStreak')!).count).toBe(20);
    expect(syncDerivedCount()).toBe(20);
  });

  it('does nothing when the earn-back window has not been earned (lc<2)', () => {
    localStorage.setItem('uStreak', JSON.stringify({ count: 1, last: today() }));
    localStorage.setItem('nh_earn_back', JSON.stringify({ prev: 20, date: today(), lc: 1 }));

    expect(applyStreakEarnBack()).toBe(0);
    // No spurious backfill when nothing was restored.
    expect(localStorage.getItem('nh_streak_days')).toBeNull();
  });
});

/**
 * The backfill primitive itself, inherited from paidStreakRestore.test.ts: the two
 * paths above both reach `restoreStreakDays`, and a restore must never drop a day
 * the learner had genuinely earned.
 */
describe('restoreStreakDays is additive', () => {
  it('never drops an existing active day', () => {
    const earlier = '2020-01-01';
    localStorage.setItem('nh_streak_days', JSON.stringify({ [earlier]: true }));

    restoreStreakDays(1, today());

    const days = JSON.parse(localStorage.getItem('nh_streak_days')!) as DaySet;
    expect(days[earlier]).toBe(true);
    expect(days[today()]).toBe(true);
  });
});
