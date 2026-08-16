/**
 * dwell-award-callsite.test.tsx — the Learn-Path dwell timer must name the screen
 * it is crediting.
 *
 * dwell-award-attribution.test.tsx proves `award`'s `exerciseId` override works.
 * This proves the one caller that needs it actually passes it: without this,
 * deleting the 4th argument at the call site would silently restore the bug —
 * award() would fall back to curEx, which at that point is the exercise the user
 * was in BEFORE the launcher's own sCurEx().
 *
 * The timer is driven for real (fake timers + 20s) rather than asserted against
 * the source text, so it also covers the timer still firing at all.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useScreenLauncher } from '../hooks/useScreenLauncher';
import { BLACK_HOLE_SCREENS, DWELL_XP } from '../lib/blackHoleScreens';

vi.mock('../lib/exerciseData', () => ({
  _getData: vi.fn(async () => ({ LISTEN: [] })),
  _getVocab: vi.fn(async () => ({})),
  _buildAdaptivePool: (pool: unknown[]) => pool,
}));
vi.mock('../lib/contentClient', () => ({
  getContent: vi.fn(async () => ({ V: {} })),
  getLessons: vi.fn(async () => []),
  getGrammar: vi.fn(async () => ({})),
}));
vi.mock('../lib/errorReporter', () => ({
  reportError: vi.fn(),
  reportBoundaryError: vi.fn(),
}));

/** A real black-hole screen. */
const DWELT = 'dialects';
/** The stale exercise a user leaves behind by exiting via the tab bar. */
const STALE = 'speaking';

function makeParams(overrides: Record<string, unknown> = {}) {
  return {
    setScr: vi.fn(),
    navigate: vi.fn(),
    curEx: STALE,
    sCurEx: vi.fn(),
    currentScreen: 'dashboard',
    // Must actually run the updater: the dwell timer early-returns unless the
    // `wasFirstVisit` flag was set inside it, so a bare vi.fn() would make every
    // assertion below vacuous by never letting the award fire at all.
    setStats: vi.fn((fn: (prev: { vs: string[] }) => unknown) => fn({ vs: [] })),
    award: vi.fn(),
    writeDelta: vi.fn(),
    allCats: ['basics'],
    gc: 0,
    tab: 'learn',
    setTab: vi.fn(),
    sLt: vi.fn(),
    sLi: vi.fn(),
    sLx: vi.fn(),
    sLs: vi.fn(),
    sLp: vi.fn(),
    sLa: vi.fn(),
    sLsl: vi.fn(),
    sQi: vi.fn(),
    sGl: vi.fn(),
    sGp: vi.fn(),
    sGx: vi.fn(),
    sGs: vi.fn(),
    sGa: vi.fn(),
    sGsl: vi.fn(),
    setMcInitQ: vi.fn(),
    setMcResultQ: vi.fn(),
    setMcResultScore: vi.fn(),
    setMcMistakes: vi.fn(),
    setFcInitPool: vi.fn(),
    setLsInitQ: vi.fn(),
    setMatchInitPool: vi.fn(),
    sSi: vi.fn(),
    sSx: vi.fn(),
    sSw: vi.fn(),
    sSr: vi.fn(),
    sSsc: vi.fn(),
    setAnimLesson: vi.fn(),
    ...overrides,
  };
}

beforeEach(() => {
  vi.useFakeTimers();
  localStorage.clear();
  sessionStorage.clear();
});
afterEach(() => {
  vi.useRealTimers();
  localStorage.clear();
  sessionStorage.clear();
});

describe('Learn-Path dwell timer — award attribution', () => {
  it('the premise holds: the target really is a dwell-credited screen', () => {
    // Guards the whole file against going vacuous if the screen is ever removed
    // from the map — the timer would never be scheduled and every assertion below
    // would have nothing to say.
    expect(BLACK_HOLE_SCREENS[DWELT]).toBe('lc');
  });

  it('awards after 20s naming the dwelt screen, not the stale curEx', async () => {
    const p = makeParams();
    const { result, rerender } = renderHook(
      (props: ReturnType<typeof makeParams>) => useScreenLauncher(props),
      { initialProps: p },
    );

    await act(async () => {
      await result.current.launchPathItem({ id: 'x', go: DWELT } as never);
    });
    // The launcher switched curEx AFTER scheduling the timer — this is exactly the
    // ordering that makes the captured `award` stale.
    expect(p.sCurEx).toHaveBeenCalledWith(DWELT);
    expect(p.award).not.toHaveBeenCalled();

    // Mirror what setScr does in the real app: the hook re-renders on the dwelt
    // screen. Without this the launcher's own cleanup effect (currentScreen !==
    // dwell.screen) cancels the timer and nothing fires.
    rerender({ ...p, currentScreen: DWELT });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(20000);
    });

    expect(p.award).toHaveBeenCalledTimes(1);
    const [amt, celebrate, activityType, exerciseId] = p.award.mock.calls[0] as [
      number,
      boolean | undefined,
      string,
      string | undefined,
    ];
    expect(amt).toBe(DWELL_XP);
    expect(celebrate).toBeUndefined();
    expect(activityType).toBe('lesson');
    // The whole point: without this argument award() falls back to curEx (STALE)
    // and stamps that exercise's XP cooldown, counts it a production rep, and can
    // complete an abandoned daily-session activity.
    expect(exerciseId).toBe(DWELT);
    expect(exerciseId).not.toBe(STALE);
  });

  it('does not award when the user leaves before 20s', async () => {
    const p = makeParams();
    const { result, rerender } = renderHook(
      (props: ReturnType<typeof makeParams>) => useScreenLauncher(props),
      { initialProps: p },
    );

    await act(async () => {
      await result.current.launchPathItem({ id: 'x', go: DWELT } as never);
    });
    rerender({ ...p, currentScreen: DWELT });
    // Navigating away cancels the dwell (the currentScreen effect clears the timer).
    rerender({ ...p, currentScreen: 'learnpath' });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(20000);
    });

    expect(p.award).not.toHaveBeenCalled();
  });
});
