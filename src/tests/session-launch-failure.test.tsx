/**
 * session-launch-failure.test.tsx — P0 (2026-07-18): a Daily Session activity
 * tap must never be a silent no-op.
 *
 * Root cause class under test: launchSessionActivity awaits a lazy data chunk
 * (`import('../data')`); on a stale tab across a deploy, or a flaky connection,
 * that import rejects. Before the fix nothing caught it — the tap did nothing,
 * nh_session_started stayed pinned (SessionCard.onStart sets it BEFORE the
 * launcher runs), and every re-tap re-bailed. The Speaking activity was the
 * most visible victim because it also pre-initialises its vocab pool here.
 *
 * The contract now: a launch either NAVIGATES, or it VISIBLY FAILS —
 * clearing the pinned session markers, broadcasting LAUNCH_FAILED_EVENT
 * (SessionCard renders an inline error strip), and routing stale-chunk
 * errors into the reloadWithCachePurge self-healer.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import React from 'react';

import { useScreenLauncher } from '../hooks/useScreenLauncher';
import { LAUNCH_FAILED_EVENT } from '../lib/launchFailure';
import SessionCard from '../components/home/SessionCard';
import type { DailySession, SessionActivity } from '../hooks/useDailySession';

// ── Mocks ─────────────────────────────────────────────────────────────────────

vi.mock('../lib/exerciseData', () => ({
  _getData: vi.fn(),
  // The learn-path launchers read vocabulary through _getVocab (see
  // path-launch-vocab.test.tsx). Nothing in THIS suite exercises them, but the
  // hook imports it, so the mock must supply it or the module is undefined.
  _getVocab: vi.fn(async () => ({})),
  _buildAdaptivePool: (pool: unknown[]) => pool,
}));

// Keep the real isChunkLoadError matcher (it IS part of the contract under
// test); stub only the reload so jsdom never attempts location.reload().
vi.mock('../lib/chunkErrors', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, reloadWithCachePurge: vi.fn(() => true) };
});

// V lives behind /api/content/core, so the launcher's vocab branches read it
// via contentClient.getContent(). Mocking only _getData (as this suite used to)
// supplied a V that the real client barrel does NOT export — which is exactly
// how the production 'empty-pool' regression passed CI.
vi.mock('../lib/contentClient', () => ({
  getContent: vi.fn(),
  getLessons: vi.fn(async () => []),
  getGrammar: vi.fn(async () => ({})),
}));

vi.mock('../lib/errorReporter', () => ({
  reportError: vi.fn(),
  reportBoundaryError: vi.fn(),
}));

import { getContent } from '../lib/contentClient';
import { reloadWithCachePurge } from '../lib/chunkErrors';
import { reportError } from '../lib/errorReporter';

const mockGetContent = vi.mocked(getContent);
const mockReload = vi.mocked(reloadWithCachePurge);

// ── Hook harness ──────────────────────────────────────────────────────────────

function makeParams() {
  return {
    setScr: vi.fn(),
    navigate: vi.fn(),
    curEx: '',
    sCurEx: vi.fn(),
    currentScreen: 'dashboard',
    setStats: vi.fn(),
    award: vi.fn(),
    writeDelta: vi.fn(),
    allCats: ['basics'],
    gc: 0,
    tab: 'home',
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
  };
}

const VOCAB = {
  V: {
    basics: [
      ['jedan', 'one', 'YEH-dahn'],
      ['dva', 'two', 'dvah'],
      ['tri', 'three', 'tree'],
      ['četiri', 'four', 'CHEH-tee-ree'],
      ['pet', 'five', 'peht'],
      ['šest', 'six', 'shehst'],
      ['sedam', 'seven', 'SEH-dahm'],
      ['osam', 'eight', 'OH-sahm'],
    ],
  },
};

/** Simulates SessionCard.onStart, which pins the markers BEFORE the launcher runs. */
function pinSession(screenId: string) {
  sessionStorage.setItem('nh_session_started', screenId);
  sessionStorage.setItem('nh_session_category', 'vocab');
}

function capturedEvents(): Array<{ reason: string }> {
  return captured;
}
let captured: Array<{ reason: string }> = [];
window.addEventListener(LAUNCH_FAILED_EVENT, (e) => {
  captured.push((e as CustomEvent).detail);
});

beforeEach(() => {
  vi.clearAllMocks();
  mockReload.mockReturnValue(true);
  sessionStorage.clear();
  captured = [];
});

// ── Launcher contract ─────────────────────────────────────────────────────────

describe('launchSessionActivity — visible-failure contract', () => {
  it('data-chunk load failure: clears pinned markers, broadcasts load-error, does NOT navigate', async () => {
    mockGetContent.mockRejectedValue(new Error('boom'));
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    pinSession('speaking');

    await act(() => result.current.launchSessionActivity('speaking'));

    expect(sessionStorage.getItem('nh_session_started')).toBeNull();
    expect(sessionStorage.getItem('nh_session_category')).toBeNull();
    expect(capturedEvents()).toEqual([{ reason: 'load-error' }]);
    expect(params.setScr).not.toHaveBeenCalled();
    expect(params.sCurEx).not.toHaveBeenCalled();
    expect(mockReload).not.toHaveBeenCalled(); // 'boom' is not a chunk error
    expect(reportError).toHaveBeenCalled();
  });

  it('stale-chunk failure: routes into reloadWithCachePurge self-heal instead of the error strip', async () => {
    mockGetContent.mockRejectedValue(
      new TypeError('Failed to fetch dynamically imported module: /assets/data-abc123.js'),
    );
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    pinSession('flashcards');

    await act(() => result.current.launchSessionActivity('flashcards'));

    expect(mockReload).toHaveBeenCalledWith('nh_reload_attempt');
    expect(capturedEvents()).toEqual([]); // reload in flight — no strip
    expect(sessionStorage.getItem('nh_session_started')).toBeNull();
    expect(params.setScr).not.toHaveBeenCalled();
  });

  it('stale-chunk failure with reload budget spent: falls back to the visible error', async () => {
    mockGetContent.mockRejectedValue(new Error('error loading dynamically imported module'));
    mockReload.mockReturnValue(false); // 2 reloads already burned this session
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    pinSession('flashcards');

    await act(() => result.current.launchSessionActivity('flashcards'));

    expect(mockReload).toHaveBeenCalledWith('nh_reload_attempt');
    expect(capturedEvents()).toEqual([{ reason: 'load-error' }]);
    expect(sessionStorage.getItem('nh_session_started')).toBeNull();
    expect(params.setScr).not.toHaveBeenCalled();
  });

  it('empty vocab pool: clears pinned markers and broadcasts empty-pool', async () => {
    mockGetContent.mockResolvedValue({ V: {} } as never);
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    pinSession('speaking');

    await act(() => result.current.launchSessionActivity('speaking'));

    expect(sessionStorage.getItem('nh_session_started')).toBeNull();
    expect(capturedEvents()).toEqual([{ reason: 'empty-pool' }]);
    expect(params.setScr).not.toHaveBeenCalled();
    expect(params.sSi).not.toHaveBeenCalled();
  });

  it('speaking success: initialises the spoken-vocab pool and navigates (markers stay pinned)', async () => {
    mockGetContent.mockResolvedValue(VOCAB as never);
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    pinSession('speaking');

    await act(() => result.current.launchSessionActivity('speaking'));

    expect(params.sSi).toHaveBeenCalledTimes(1);
    const items = params.sSi.mock.calls[0]![0] as unknown[][];
    expect(items).toHaveLength(6);
    expect(params.sSw).toHaveBeenCalledWith(items[0]);
    expect(params.sSx).toHaveBeenCalledWith(0);
    expect(params.sCurEx).toHaveBeenCalledWith('speaking');
    expect(params.setScr).toHaveBeenCalledWith('speaking');
    expect(sessionStorage.getItem('nh_session_started')).toBe('speaking');
    expect(capturedEvents()).toEqual([]);
  });

  it('flashcards success: seeds the pool and navigates without failure noise', async () => {
    mockGetContent.mockResolvedValue(VOCAB as never);
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    pinSession('flashcards');

    await act(() => result.current.launchSessionActivity('flashcards'));

    expect(params.setFcInitPool).toHaveBeenCalledTimes(1);
    expect(params.setScr).toHaveBeenCalledWith('flashcards');
    expect(sessionStorage.getItem('nh_session_started')).toBe('flashcards');
    expect(capturedEvents()).toEqual([]);
    expect(mockReload).not.toHaveBeenCalled();
  });
});

// ── SessionCard error strip ───────────────────────────────────────────────────

const ACT: SessionActivity = {
  id: 'a1',
  label: 'Speaking',
  screen: 'speaking',
  category: 'speaking',
};

const SESSION: DailySession = {
  date: '2026-07-18',
  activities: [ACT],
  completedIds: [],
  estimatedMinutes: 10,
};

const CARD_PROPS = {
  session: SESSION,
  isComplete: false,
  progress: 0,
  nextActivity: ACT,
  tomorrowLabel: 'Come back tomorrow',
  onKeepPracticing: vi.fn(),
  streak: 3,
  xpThisWeek: 120,
  wordsdue: 0,
};

describe('SessionCard — launch-failure error strip', () => {
  it('is hidden until a launch failure is broadcast', () => {
    render(<SessionCard {...CARD_PROPS} onStart={vi.fn()} />);
    expect(screen.queryByTestId('session-launch-error')).toBeNull();
  });

  it('appears when the launcher broadcasts LAUNCH_FAILED_EVENT', () => {
    render(<SessionCard {...CARD_PROPS} onStart={vi.fn()} />);
    act(() => {
      window.dispatchEvent(
        new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason: 'load-error' } }),
      );
    });
    expect(screen.getByTestId('session-launch-error')).toBeTruthy();
    expect(screen.getByTestId('session-launch-error').textContent).toMatch(/tap again/i);
  });

  it('clears on the next Begin tap (retry) and still calls onStart', () => {
    const onStart = vi.fn();
    render(<SessionCard {...CARD_PROPS} onStart={onStart} />);
    act(() => {
      window.dispatchEvent(
        new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason: 'empty-pool' } }),
      );
    });
    expect(screen.getByTestId('session-launch-error')).toBeTruthy();

    fireEvent.click(screen.getByTestId('session-begin-cta'));
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(screen.queryByTestId('session-launch-error')).toBeNull();
  });

  it('reappears if the retry fails again', () => {
    render(<SessionCard {...CARD_PROPS} onStart={vi.fn()} />);
    act(() => {
      window.dispatchEvent(
        new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason: 'load-error' } }),
      );
    });
    fireEvent.click(screen.getByTestId('session-begin-cta'));
    expect(screen.queryByTestId('session-launch-error')).toBeNull();
    act(() => {
      window.dispatchEvent(
        new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason: 'load-error' } }),
      );
    });
    expect(screen.getByTestId('session-launch-error')).toBeTruthy();
  });
});

// ── Regression guard: V must come from the source that actually has it ────────
//
// The production 'empty-pool' alert of 2026-07-25 was NOT an empty content
// catalogue. Vocabulary moved server-side to /api/content/core (core.js KEYS[0]),
// and data/content.tsx destructures V for internal use WITHOUT re-exporting it —
// so the launcher's `(await _getData()).V` was permanently undefined, every pool
// was empty, and flashcards / mcgame / match / speaking bailed with 'empty-pool'
// on every attempt. This suite hid it by mocking _getData with a V the real
// barrel does not export.
//
// This test pins the boundary against the REAL module: if anyone points the
// launcher back at the client barrel for vocabulary, it fails here.
describe('vocabulary boundary', () => {
  it('the client data barrel does NOT export V (it is served by /api/content/core)', async () => {
    vi.doUnmock('../lib/contentClient');
    const barrel = (await vi.importActual('../data')) as Record<string, unknown>;
    // Sibling exports still come from the barrel — this is not a broken import.
    expect(Array.isArray(barrel.LISTEN)).toBe(true);
    // V deliberately does not: reading it from here yields undefined, which is
    // what produced the empty pools. Any launcher vocab read must use
    // contentClient.getContent().
    expect(barrel.V).toBeUndefined();
  });
});
