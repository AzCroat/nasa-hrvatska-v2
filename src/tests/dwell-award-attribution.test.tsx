/**
 * dwell-award-attribution.test.tsx
 *
 * THE BUG
 * -------
 * The Learn-Path black-hole dwell timer (useScreenLauncher)awards DWELL_XP after 20
 * seconds on a reference screen (5 XP since the 2026-08-14 rebalance). It scheduled that award with `setTimeout` and
 * then, further down the SAME function, called `sCurEx(item.go)`.
 *
 * `award` is a `useCallback` over `[curEx, …]` whose first statement was
 * `const _effectiveEx = curEx`. So the `award` captured by the timer carried
 * curEx as of the render at CLICK time — the exercise the user was in BEFORE the
 * launcher switched. Twenty seconds later that stale id drove every id-keyed
 * effect in award():
 *
 *   - `markExerciseDone(stale)` stamped the WRONG exercise's XP cooldown, so the
 *     real exercise earned no XP for the rest of that day.
 *   - `PRODUCTION_SCREEN_IDS.has(stale)` counted a production rep — `stats.pr`,
 *     a Math.max-merged synced lifetime counter — for merely READING a reference
 *     page. Irreversible once synced.
 *   - `nh_session_started === stale` completed an abandoned daily-session
 *     activity the user never finished.
 *
 * Only `goBack()` clears curEx. Leaving an exercise by the tab bar (App.tsx
 * setTab) or by browser-back leaves the id sitting there, which is what makes the
 * stale value reachable in ordinary use:
 *
 *   Today's Session → tap Speaking → bail via the Learn tab → open a black-hole
 *   screen → read it for 20s.
 *
 * THE FIX
 * -------
 * `award` takes an optional 4th argument, `exerciseId`, that overrides curEx, and
 * the dwell timer passes the black-hole screen's own id. Everything keyed off the
 * exercise now names the screen actually being credited.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';

vi.mock('../lib/appUtils.js', () => ({
  lXPgain: (x: number) => x,
  lvl: () => 1,
  BADGES: [],
  updateStreak: () => ({ count: 1, milestone: null, freezeUsed: false }),
  applyStreakEarnBack: () => 0,
  getStreakEarnBack: () => null,
  earnFreeze: vi.fn(),
  getStreak: () => ({ count: 1 }),
  recordJourneyMilestone: vi.fn(),
}));
vi.mock('../lib/learnerStyle.js', () => ({ trackComplete: vi.fn() }));
vi.mock('../lib/analytics.js', () => ({
  trackLessonComplete: vi.fn(),
  trackExerciseComplete: vi.fn(),
  trackLevelUp: vi.fn(),
  trackBadgeEarned: vi.fn(),
  trackStreakMilestone: vi.fn(),
}));
vi.mock('../lib/dateUtils.js', () => ({
  localDateStr: () => '2026-08-03',
  weekKey: () => '2026-W31',
  getServerDateStr: () => Promise.resolve('2026-08-03'),
}));
vi.mock('../lib/knightSpeak.js', () => ({ knightSpeak: vi.fn() }));
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: vi.fn() }));
vi.mock('../lib/offlineAwardQueue.js', () => ({ enqueue: vi.fn() }));
vi.mock('../lib/activityXp.js', () => ({
  ACTIVITY_XP_MAP: { grammar: 80, lesson: 210, default: 210 },
}));

const recordProductionRep = vi.fn();
vi.mock('../lib/productionMetric', () => ({
  recordProductionRep: () => recordProductionRep(),
  // Real value: useAward multiplies production-screen XP by this (2026-08-14
  // rebalance). These tests assert attribution, not amounts, so the constant
  // just needs to exist and be numeric.
  PRODUCTION_XP_MULTIPLIER: 1.5,
}));

import { useAward } from '../hooks/useAward';
import { PRODUCTION_SCREEN_IDS } from '../hooks/useDailySession';
import { DWELL_XP } from '../lib/blackHoleScreens';
import type { Stats } from '../types';

/** The stale id a user leaves behind by exiting Speaking via the tab bar. */
const STALE = 'speaking';
/** A real BLACK_HOLE_SCREENS key — the screen actually being dwelt on. */
const DWELT = 'dialects';

const DS = {
  xp: 0,
  lc: 0,
  gc: 0,
  sp: 0,
  de: 0,
  rc: 0,
  str: 0,
  pf: 0,
  mv: 0,
  hi: 0,
  diff: 'beginner',
  ct: [],
  vs: [],
  rs: [],
  badges: [],
  authLoading: 0,
} as unknown as Stats;

function cooldown(): Record<string, string> {
  return JSON.parse(localStorage.getItem('xpCooldown') || '{}');
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  recordProductionRep.mockClear();
});
afterEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('award() — exerciseId overrides a stale curEx', () => {
  it('the premise holds: the stale id really is a production screen', () => {
    // If this ever stops being true the blast radius below changes, and the test
    // would otherwise keep passing while proving nothing.
    expect(PRODUCTION_SCREEN_IDS.has(STALE)).toBe(true);
    expect(PRODUCTION_SCREEN_IDS.has(DWELT)).toBe(false);
  });

  it("stamps the dwelt screen's XP cooldown, not the stale exercise's", async () => {
    const setStats = vi.fn();
    const { result } = renderHook(() =>
      useAward({ curEx: STALE, stats: { ...DS }, setStats, writeDelta: vi.fn() }),
    );

    await act(async () => {
      await result.current.award(DWELL_XP, undefined, 'lesson', DWELT);
    });

    expect(cooldown()[DWELT]).toBe('2026-08-03');
    // The bug: the user's Speaking exercise was burned for the day by reading a
    // reference page.
    expect(STALE in cooldown()).toBe(false);
  });

  it('counts no production rep for reading a reference page', async () => {
    const setStats = vi.fn();
    const writeDelta = vi.fn();
    const { result } = renderHook(() =>
      useAward({ curEx: STALE, stats: { ...DS }, setStats, writeDelta }),
    );

    await act(async () => {
      await result.current.award(DWELL_XP, undefined, 'lesson', DWELT);
    });

    expect(recordProductionRep).not.toHaveBeenCalled();
    // `pr` is Math.max-merged into Firestore, so a phantom rep is permanent.
    const prWrites = writeDelta.mock.calls.filter(
      (c) => (c[0] as Record<string, unknown> | undefined)?.pr !== undefined,
    );
    expect(prWrites).toEqual([]);
  });

  it('does not complete the abandoned daily-session activity', async () => {
    // The user launched Speaking from Today's Session, then left by browser-back —
    // which clears neither curEx nor nh_session_started.
    sessionStorage.setItem('nh_session_started', STALE);
    const setStats = vi.fn();
    const { result } = renderHook(() =>
      useAward({ curEx: STALE, stats: { ...DS }, setStats, writeDelta: vi.fn() }),
    );

    await act(async () => {
      await result.current.award(DWELL_XP, undefined, 'lesson', DWELT);
    });

    expect(sessionStorage.getItem('nh_session_completed')).toBeNull();
  });

  it('still completes the session activity when the dwelt screen IS the launched one', async () => {
    // The override must not break the legitimate case: a black-hole screen can
    // itself be the daily-session activity.
    sessionStorage.setItem('nh_session_started', DWELT);
    const setStats = vi.fn();
    const { result } = renderHook(() =>
      useAward({ curEx: STALE, stats: { ...DS }, setStats, writeDelta: vi.fn() }),
    );

    await act(async () => {
      await result.current.award(DWELL_XP, undefined, 'lesson', DWELT);
    });

    expect(sessionStorage.getItem('nh_session_completed')).toBe(DWELT);
  });

  it('omitting exerciseId still uses curEx — existing callers are unchanged', async () => {
    const setStats = vi.fn();
    const { result } = renderHook(() =>
      useAward({ curEx: STALE, stats: { ...DS }, setStats, writeDelta: vi.fn() }),
    );

    await act(async () => {
      await result.current.award(15, undefined, 'speaking');
    });

    expect(cooldown()[STALE]).toBe('2026-08-03');
    expect(recordProductionRep).toHaveBeenCalled();
  });

  it("the dwelt screen's own cooldown now gates a repeat dwell", async () => {
    // Previously the cooldown was stamped against the stale id, so re-reading the
    // SAME reference page paid 15 XP again every time.
    localStorage.setItem('xpCooldown', JSON.stringify({ [DWELT]: '2026-08-03' }));
    const setStats = vi.fn();
    const { result } = renderHook(() =>
      useAward({ curEx: STALE, stats: { ...DS }, setStats, writeDelta: vi.fn() }),
    );

    await act(async () => {
      await result.current.award(DWELL_XP, undefined, 'lesson', DWELT);
    });

    expect(setStats).not.toHaveBeenCalled();
  });
});
