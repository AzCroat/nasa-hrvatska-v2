import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getFreezesStored, purchaseFreeze, FREEZE_COST_XP } from '../lib/streakFreeze';
import { updateStreak, getStreakFreezes } from '../lib/appUtils';
import { computeStreak } from '../lib/streakDays';

function clearLS() {
  localStorage.clear();
}

/** Local YYYY-MM-DD for today + offsetDays (DST-safe, matches app date helpers). */
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

describe('streakFreeze', () => {
  beforeEach(clearLS);
  afterEach(() => {
    clearLS();
    vi.useRealTimers();
  });

  // ── FREEZE_COST_XP ──────────────────────────────────────────────────────────

  it('FREEZE_COST_XP is 50', () => {
    expect(FREEZE_COST_XP).toBe(50);
  });

  // ── getFreezesStored (canonical uFreeze store) ──────────────────────────────

  it('returns 0 when nothing stored', () => {
    expect(getFreezesStored()).toBe(0);
  });

  it('reads the canonical uFreeze store', () => {
    localStorage.setItem('uFreeze', '2');
    expect(getFreezesStored()).toBe(2);
  });

  it('returns 0 for invalid stored value', () => {
    localStorage.setItem('uFreeze', 'bad');
    expect(getFreezesStored()).toBe(0);
  });

  // ── legacy nh_streak_freezes migration ──────────────────────────────────────

  it('migrates legacy nh_streak_freezes into uFreeze and removes the old key', () => {
    localStorage.setItem('nh_streak_freezes', '2');
    expect(getFreezesStored()).toBe(2);
    expect(localStorage.getItem('uFreeze')).toBe('2');
    expect(localStorage.getItem('nh_streak_freezes')).toBeNull();
  });

  it('caps combined legacy + uFreeze count at 2', () => {
    localStorage.setItem('uFreeze', '1');
    localStorage.setItem('nh_streak_freezes', '2');
    expect(getFreezesStored()).toBe(2);
    expect(localStorage.getItem('nh_streak_freezes')).toBeNull();
  });

  it('clamps an out-of-range legacy value to max 2', () => {
    localStorage.setItem('nh_streak_freezes', '5');
    expect(getFreezesStored()).toBe(2);
  });

  it('discards an invalid legacy value without crashing', () => {
    localStorage.setItem('nh_streak_freezes', 'bad');
    expect(getFreezesStored()).toBe(0);
    expect(localStorage.getItem('nh_streak_freezes')).toBeNull();
  });

  // ── purchaseFreeze ──────────────────────────────────────────────────────────

  it('fails when already at max 2 freezes', () => {
    localStorage.setItem('uFreeze', '2');
    const setStats = vi.fn();
    const result = purchaseFreeze(100, setStats);
    expect(result.ok).toBe(false);
    expect(result.reason).toContain('maximum');
    expect(setStats).not.toHaveBeenCalled();
  });

  it('fails when not enough XP', () => {
    const setStats = vi.fn();
    const result = purchaseFreeze(30, setStats);
    expect(result.ok).toBe(false);
    expect(result.reason).toContain('50');
    expect(setStats).not.toHaveBeenCalled();
  });

  it('succeeds with exactly 50 XP and deposits into uFreeze', () => {
    const setStats = vi.fn();
    const result = purchaseFreeze(50, setStats);
    expect(result.ok).toBe(true);
    expect(result.stored).toBe(1);
    expect(setStats).toHaveBeenCalledOnce();
    expect(localStorage.getItem('uFreeze')).toBe('1');
  });

  it('increments stored count from 1 to 2', () => {
    localStorage.setItem('uFreeze', '1');
    const setStats = vi.fn();
    const result = purchaseFreeze(100, setStats);
    expect(result.ok).toBe(true);
    expect(result.stored).toBe(2);
    expect(localStorage.getItem('uFreeze')).toBe('2');
  });

  it('counts legacy freezes toward the max-2 purchase gate', () => {
    localStorage.setItem('nh_streak_freezes', '2');
    const setStats = vi.fn();
    const result = purchaseFreeze(100, setStats);
    expect(result.ok).toBe(false);
    expect(setStats).not.toHaveBeenCalled();
  });

  it('setStats is called with XP deduction function', () => {
    const setStats = vi.fn();
    purchaseFreeze(100, setStats);
    // Call the updater function to verify it deducts 50 XP
    const updater = setStats.mock.calls[0][0];
    const prev = { xp: 100, other: 5 };
    const next = updater(prev);
    expect(next.xp).toBe(50);
    expect(next.other).toBe(5); // other fields preserved
  });

  it('setStats XP deduction does not go below 0', () => {
    const setStats = vi.fn();
    purchaseFreeze(50, setStats);
    const updater = setStats.mock.calls[0][0];
    const prev = { xp: 40 }; // less than FREEZE_COST
    const next = updater(prev);
    expect(next.xp).toBe(0); // clamped at 0
  });

  // ── end-to-end: purchased freeze auto-applies via updateStreak ──────────────

  it('a purchased freeze bridges exactly one missed day in updateStreak', () => {
    localStorage.setItem('uStreak', JSON.stringify({ count: 5, last: dateStr(-2) }));
    const setStats = vi.fn();
    expect(purchaseFreeze(100, setStats).ok).toBe(true);

    const result = updateStreak();
    expect(result.freezeUsed).toBe(true);
    // 5-day run + the freeze-bridged missed day + today = a 7-day consecutive
    // run. The count is derived from the canonical active-day set (which counts
    // the bridged day), so the immediate value equals the value the next sync
    // settles on — no post-sync "+1 with no activity" jump. (Previously this
    // returned the pre-sync transient 6 and then jumped to 7.)
    expect(result.count).toBe(7);
    expect(result.last).toBe(dateStr(0));
    expect(getStreakFreezes()).toBe(0); // the freeze was consumed
  });

  it('a legacy-purchased freeze also protects the streak after migration', () => {
    localStorage.setItem('nh_streak_freezes', '1');
    localStorage.setItem('uStreak', JSON.stringify({ count: 7, last: dateStr(-2) }));

    // Migration happens on the first freeze read inside updateStreak's spend path
    const result = updateStreak();
    expect(result.freezeUsed).toBe(true);
    // 7-day run + bridged day + today = a 9-day consecutive run (set-derived).
    expect(result.count).toBe(9);
    expect(getStreakFreezes()).toBe(0);
    expect(localStorage.getItem('nh_streak_freezes')).toBeNull();
  });

  it('a freeze cannot bridge a 2+ day gap — streak resets to 1', () => {
    localStorage.setItem('uFreeze', '2');
    localStorage.setItem('uStreak', JSON.stringify({ count: 9, last: dateStr(-3) }));

    const result = updateStreak();
    expect(result.freezeUsed).toBeFalsy();
    expect(result.count).toBe(1);
    expect(getStreakFreezes()).toBe(2); // freezes untouched
  });

  // Regression guard for the "+1 with no activity after a sync" flash: the count
  // updateStreak returns MUST equal what applyRemoteProgress re-derives from the
  // active-day set, so the display never jumps when the next sync runs.
  it('the freeze-updated count already equals the sync-derived count (no flash)', () => {
    localStorage.setItem('uFreeze', '1');
    localStorage.setItem('uStreak', JSON.stringify({ count: 5, last: dateStr(-2) }));

    const result = updateStreak();
    expect(result.freezeUsed).toBe(true);
    const derived = computeStreak(
      JSON.parse(localStorage.getItem('nh_streak_days') || '{}'),
      dateStr(0),
    ).count;
    expect(result.count).toBe(derived); // no post-sync jump
  });
});
