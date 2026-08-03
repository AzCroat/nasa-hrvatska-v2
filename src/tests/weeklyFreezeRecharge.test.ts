/**
 * weeklyFreezeRecharge.test.ts — the prune must not eat the key the recharge reads.
 *
 * THE BUG
 * -------
 * `pruneStaleLocalStorage` (App.tsx) deleted every `nh_week_xp_*` key that was not
 * the current ISO week, on the stated premise:
 *
 *   "Only the current week's value is ever read; past weeks are unused."
 *
 * 880 lines later in the same file, the weekly freeze recharge reads exactly a
 * past week's key to decide whether the user earned XP last week — and then writes
 * its once-per-week guard `nh_freeze_recharge_wk` UNCONDITIONALLY, so a lost race
 * is permanent for that week.
 *
 * The prune runs on requestIdleCallback; the recharge waits for auth to resolve
 * (a Firebase IndexedDB + token round trip). The prune generally won: the read
 * returned '0', no freeze was awarded, and the guard was set anyway. Every user,
 * every week — surfacing much later as a streak that broke on a day the user
 * thought they were covered.
 *
 * Both sides now go through `prevWeekKey()`, so they cannot drift apart. That
 * helper is also calendar arithmetic rather than `Date.now() - 7 * 86400000`:
 * subtracting 168 real hours lands on the wrong day when a DST transition falls in
 * between (a 23-hour local day makes it Sunday 23:xx — the week before last).
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { weekKey, prevWeekKey } from '../lib/dateUtils';

describe('prevWeekKey', () => {
  it('returns the ISO week before the given date', () => {
    const d = new Date(2026, 7, 3); // Mon 2026-08-03
    expect(prevWeekKey(d)).toBe(weekKey(new Date(2026, 6, 27))); // Mon 2026-07-27
    expect(prevWeekKey(d)).not.toBe(weekKey(d));
  });

  it('crosses a year boundary correctly', () => {
    const jan = new Date(2026, 0, 2); // Fri 2026-01-02
    expect(prevWeekKey(jan)).toBe(weekKey(new Date(2025, 11, 26)));
  });

  it('is exactly one week back on a DST-transition week, unlike ms arithmetic', () => {
    // Europe/Zagreb springs forward on the last Sunday of March. The Monday after
    // is 2026-03-30. `Date.now() - 7*86400000` from that Monday morning lands on
    // the previous Sunday evening in a +1h shift — the week BEFORE last.
    const mondayAfterDst = new Date(2026, 2, 30);
    const calendar = prevWeekKey(mondayAfterDst);
    expect(calendar).toBe(weekKey(new Date(2026, 2, 23)));

    // The whole point of the helper: whatever the local DST rules, going back
    // seven calendar days never skips a week.
    const naive = weekKey(new Date(mondayAfterDst.getTime() - 7 * 86400000));
    expect(calendar >= naive).toBe(true);
  });
});

describe('prune ↔ recharge agreement', () => {
  const src = readFileSync('src/App.tsx', 'utf8');

  it('non-vacuity: both the prune and the recharge are still in this file', () => {
    expect(src).toContain('/^nh_week_xp_/');
    expect(src).toContain('nh_freeze_recharge_wk');
  });

  it('the prune keeps the previous week, not only the current one', () => {
    // The exact bug: `!== weekKey()` alone deleted the key the recharge reads.
    expect(src).toMatch(/_wk !== weekKey\(\) && _wk !== prevWeekKey\(\)/);
  });

  it('the recharge reads the same helper the prune keeps', () => {
    expect(src).toMatch(/nh_week_xp_' \+ prevWeekKey\(\)/);
    // And no longer derives "last week" by subtracting raw milliseconds.
    expect(src).not.toMatch(/weekKey\(new Date\(Date\.now\(\) - 7 \* 86400000\)\)/);
  });
});
