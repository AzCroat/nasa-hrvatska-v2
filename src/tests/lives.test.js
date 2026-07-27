import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getHearts, loseHeart, hasHearts, getRegenTimeMs } from '../lib/lives.js';
import { localDateStr } from '../lib/dateUtils.js';

function clearLS() {
  localStorage.clear();
}

describe('lives — hearts system', () => {
  beforeEach(clearLS);
  afterEach(() => {
    clearLS();
    vi.useRealTimers();
  });

  // ── getHearts ────────────────────────────────────────────────────────────────

  it('returns 5 hearts on first use (no localStorage)', () => {
    expect(getHearts()).toBe(5);
  });

  it('returns 5 hearts after midnight (new day key)', () => {
    // Store state with a clearly stale date (not today) to simulate a new day
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: '2000-01-01', hearts: 2, lastRegen: Date.now() - 3600000 }),
    );
    expect(getHearts()).toBe(5);
  });

  it('returns stored hearts within same day', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 3, lastRegen: Date.now() }),
    );
    expect(getHearts()).toBe(3);
  });

  it('returns 0 hearts when stored as 0', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 0, lastRegen: Date.now() }),
    );
    expect(getHearts()).toBe(0);
  });

  // ── regen ────────────────────────────────────────────────────────────────────

  it('regenerates 1 heart after 4+ hours', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 2, lastRegen: now - 4 * 3600001 }),
    );
    expect(getHearts()).toBe(3);
  });

  it('regenerates 2 hearts after 8+ hours', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 2, lastRegen: now - 8 * 3600001 }),
    );
    expect(getHearts()).toBe(4);
  });

  it('never regenerates above 5 hearts', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 4, lastRegen: now - 8 * 3600001 }),
    );
    expect(getHearts()).toBe(5);
  });

  it('does not regen when already at 5', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 5, lastRegen: now - 8 * 3600001 }),
    );
    expect(getHearts()).toBe(5);
  });

  it('does not regen with < 4 hours elapsed', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 3, lastRegen: now - 2 * 3600000 }),
    );
    expect(getHearts()).toBe(3);
  });

  // ── loseHeart ────────────────────────────────────────────────────────────────

  it('loseHeart decrements hearts by 1', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 4, lastRegen: Date.now() }),
    );
    expect(loseHeart()).toBe(3);
  });

  it('loseHeart floors at 0', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 0, lastRegen: Date.now() }),
    );
    expect(loseHeart()).toBe(0);
  });

  it('loseHeart works on fresh state (5 → 4)', () => {
    expect(loseHeart()).toBe(4);
  });

  it('loseHeart persists to localStorage', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 3, lastRegen: Date.now() }),
    );
    loseHeart();
    const stored = JSON.parse(localStorage.getItem('nh_hearts'));
    expect(stored.hearts).toBe(2);
  });

  // ── hasHearts ────────────────────────────────────────────────────────────────

  it('hasHearts returns true when hearts > 0', () => {
    expect(hasHearts()).toBe(true);
  });

  it('hasHearts returns false when hearts === 0', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 0, lastRegen: Date.now() }),
    );
    expect(hasHearts()).toBe(false);
  });

  // ── getRegenTimeMs ────────────────────────────────────────────────────────────

  it('getRegenTimeMs returns 0 when hearts are at 5', () => {
    expect(getRegenTimeMs()).toBe(0);
  });

  it('getRegenTimeMs returns 0 when no state stored (treated as full hearts)', () => {
    // getRegenTimeMs reads state; no state = null → s is null → returns 0
    expect(getRegenTimeMs()).toBe(0);
  });

  it('getRegenTimeMs returns positive ms when hearts < 5', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    const lastRegen = now - 1 * 3600000; // 1 hour ago
    localStorage.setItem('nh_hearts', JSON.stringify({ date: today, hearts: 3, lastRegen }));
    const ms = getRegenTimeMs();
    expect(ms).toBeGreaterThan(0);
    expect(ms).toBeLessThanOrEqual(14400000); // max 4 hours
  });

  it('getRegenTimeMs is roughly (4h - elapsed) for 1h elapsed', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    const oneHourAgo = now - 3600000;
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 3, lastRegen: oneHourAgo }),
    );
    const ms = getRegenTimeMs();
    // Should be approx 3 hours remaining
    expect(ms).toBeGreaterThan(3600000 * 2.9);
    expect(ms).toBeLessThanOrEqual(3600000 * 3.1);
  });

  // ── refund regression (lastRegen re-anchored on the 5→4 drop) ─────────────────

  it('a heart lost while at 5 with a stale lastRegen is NOT instantly refunded', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    // Full hearts, but lastRegen pinned 10h ago (day started this morning; the
    // user sat at 5 all day, so getHearts never advanced lastRegen).
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 5, lastRegen: now - 10 * 3600000 }),
    );
    expect(loseHeart()).toBe(4);
    // Next read must stay 4. Before the fix, getHearts() saw ~10h of "elapsed"
    // regen and refunded straight back to 5.
    expect(getHearts()).toBe(4);
  });

  it('multiple hearts lost late in the day stay lost (5 → 3)', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 5, lastRegen: now - 9 * 3600000 }),
    );
    expect(loseHeart()).toBe(4); // anchors lastRegen to now
    expect(loseHeart()).toBe(3); // already below 5 → keeps lastRegen, no refund
    expect(getHearts()).toBe(3);
  });

  it('regen preserves the sub-4h remainder instead of restarting the clock at now', () => {
    vi.useFakeTimers();
    const now = Date.now();
    vi.setSystemTime(now);
    const today = localDateStr();
    // 7h since lastRegen at 3 hearts → 1 heart regens (floor(7/4)), 3h remainder.
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 3, lastRegen: now - 7 * 3600000 }),
    );
    expect(getHearts()).toBe(4);
    // lastRegen advanced by exactly one 4h block, leaving a 3h remainder, so the
    // next heart is ~1h away — NOT a full 4h (and NOT 0, which the old code showed).
    const ms = getRegenTimeMs();
    expect(ms).toBeGreaterThan(0);
    expect(ms).toBeLessThanOrEqual(3600000 * 1.1);
  });

  // getHearts() already clamped a corrupted stored value to [0,5]; loseHeart()
  // did not, and its return value is what McGame hands to the reducer as the
  // displayed heart count. So the two functions disagreed: getHearts() showed 5
  // while loseHeart() counted down from 99, making hearts look unlosable.
  it('loseHeart clamps a corrupted above-max stored value, like getHearts does', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 99, lastRegen: Date.now() }),
    );
    expect(getHearts()).toBe(5);
    expect(loseHeart()).toBe(4);
    expect(getHearts()).toBe(4);
  });

  it('loseHeart tolerates a non-numeric stored heart count', () => {
    const today = localDateStr();
    localStorage.setItem(
      'nh_hearts',
      JSON.stringify({ date: today, hearts: 'lots', lastRegen: Date.now() }),
    );
    expect(loseHeart()).toBe(4);
  });
});
