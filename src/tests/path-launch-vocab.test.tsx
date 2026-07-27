/**
 * path-launch-vocab.test.tsx — the Learn Path's vocabulary launches must work.
 *
 * P0 (2026-07-25): vocabulary moved server-side to /api/content/core, and
 * data/content.tsx stopped re-exporting `V`. Six launchers in useScreenLauncher
 * kept reading `(await _getData()).V` off the client data barrel, which is now
 * `undefined`. Every vocab pool they built was empty, so:
 *
 *   - launchPathItem({go:'lesson'})   — the app's PRIMARY lesson entry point
 *                                        (Learn Path tile, Home "continue"
 *                                        chip, search result) did NOTHING.
 *   - launchPathItem({go:'speaking'}) — did nothing.
 *   - launchPathItem({go:'mcgame'})   — did nothing.
 *   - launchCheckpoint                — did nothing.
 *   - launchLegendary                 — navigated to McGame with ZERO
 *                                        questions (it had no empty guard).
 *   - resumeLesson                    — mistook a live topic for a stale one
 *                                        and DELETED the resume token.
 *
 * These tests deliberately do NOT mock lib/exerciseData: the real `_getData`
 * loads the real barrel (which genuinely lacks V) and the real `_getVocab`
 * reads the mocked content client. That is the exact boundary that broke, so
 * mocking either side of it would re-open the hole CI already missed once.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useScreenLauncher } from '../hooks/useScreenLauncher';
import { _getData, _getVocab } from '../lib/exerciseData';

vi.mock('../lib/contentClient', () => ({
  getContent: vi.fn(),
  getLessons: vi.fn(async () => []),
  getGrammar: vi.fn(async () => ({ GRAM: { beginner: [], intermediate: [], advanced: [] } })),
}));

vi.mock('../lib/errorReporter', () => ({
  reportError: vi.fn(),
  reportBoundaryError: vi.fn(),
}));

import { getContent } from '../lib/contentClient';
import { reportError } from '../lib/errorReporter';

const mockGetContent = vi.mocked(getContent);
const mockReport = vi.mocked(reportError);

const V = {
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
};

function makeParams() {
  return {
    setScr: vi.fn(),
    navigate: vi.fn(),
    curEx: '',
    sCurEx: vi.fn(),
    currentScreen: 'learnpath',
    setStats: vi.fn(),
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
  };
}

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  sessionStorage.clear();
  mockGetContent.mockResolvedValue({ V } as never);
});

// ── The boundary that broke ───────────────────────────────────────────────────

describe('vocabulary boundary', () => {
  it('the client data barrel really has no V — reading _getData().V yields undefined', async () => {
    const barrel = (await _getData()) as Record<string, unknown>;
    // Sanity: the barrel DID load (so an undefined V below is absence, not a
    // failed import).
    expect(Array.isArray(barrel.LISTEN)).toBe(true);
    expect(barrel.V).toBeUndefined();
  });

  it('_getVocab() returns V from the content client', async () => {
    await expect(_getVocab()).resolves.toEqual(V);
  });

  it('_getVocab() never rejects when the content client fails — it reports and returns {}', async () => {
    mockGetContent.mockRejectedValue(new Error('offline'));
    // A rejection here would escape as an unhandled promise rejection: every
    // caller is a click handler invoked as `void launchX(...)`.
    await expect(_getVocab()).resolves.toEqual({});
    expect(mockReport).toHaveBeenCalled();
  });
});

// ── Launchers navigate when vocabulary is available ───────────────────────────

describe('learn-path launchers reach their screen', () => {
  it('launchPathItem lesson — the primary lesson entry point navigates', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp1', go: 'lesson', topic: 'basics' });
    });
    expect(params.setScr).toHaveBeenCalledWith('lesson');
    expect(params.sLi).toHaveBeenCalled();
    expect(mockReport).not.toHaveBeenCalled();
  });

  it('launchPathItem lesson — falls back to the global pool for an unknown topic', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp2', go: 'lesson', topic: 'no-such-topic' });
    });
    expect(params.setScr).toHaveBeenCalledWith('lesson');
  });

  it('launchPathItem speaking — navigates and seeds the spoken pool', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp3', go: 'speaking' });
    });
    expect(params.setScr).toHaveBeenCalledWith('speaking');
    expect(params.sSw).toHaveBeenCalled();
  });

  it('launchPathItem mcgame — navigates with a non-empty question set', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp4', go: 'mcgame' });
    });
    expect(params.setScr).toHaveBeenCalledWith('mcgame');
    expect(params.setMcInitQ.mock.calls[0]![0] as unknown[]).not.toHaveLength(0);
  });

  it('launchCheckpoint — navigates', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchCheckpoint(0, [{ id: 'lp1', go: 'lesson', topic: 'basics' }]);
    });
    expect(params.setScr).toHaveBeenCalledWith('mcgame');
    expect(params.setMcInitQ.mock.calls[0]![0] as unknown[]).not.toHaveLength(0);
  });

  it('launchLegendary — navigates', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchLegendary({ id: 'lp1', go: 'lesson', topic: 'basics' });
    });
    expect(params.setScr).toHaveBeenCalledWith('mcgame');
    expect(sessionStorage.getItem('nh_legendary_mode')).toBe('1');
    // Pre-fix this launcher navigated with an EMPTY set, so asserting the
    // destination alone would have passed straight through the bug.
    expect(params.setMcInitQ.mock.calls[0]![0] as unknown[]).not.toHaveLength(0);
  });

  it('resumeLesson — resumes a live topic instead of discarding it', async () => {
    localStorage.setItem('nh_lesson_resume', JSON.stringify({ topic: 'basics', ts: Date.now() }));
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.resumeLesson();
    });
    expect(params.setScr).toHaveBeenCalledWith('lesson');
    expect(params.sLt).toHaveBeenCalledWith('basics');
    // The token belongs to a lesson still in progress — it must survive.
    expect(localStorage.getItem('nh_lesson_resume')).not.toBeNull();
  });
});

// ── Empty vocabulary must fail loudly, never half-navigate ────────────────────

describe('empty vocabulary is reported, and never lands on a dead screen', () => {
  beforeEach(() => {
    mockGetContent.mockResolvedValue({ V: {} } as never);
  });

  it('launchPathItem lesson — reports and does not navigate', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp1', go: 'lesson', topic: 'basics' });
    });
    expect(params.setScr).not.toHaveBeenCalled();
    expect(mockReport).toHaveBeenCalled();
  });

  it('launchPathItem speaking — reports and does not navigate', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp3', go: 'speaking' });
    });
    expect(params.setScr).not.toHaveBeenCalled();
    expect(mockReport).toHaveBeenCalled();
  });

  it('launchPathItem mcgame — reports and does not navigate', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp4', go: 'mcgame' });
    });
    expect(params.setScr).not.toHaveBeenCalled();
    expect(mockReport).toHaveBeenCalled();
  });

  it('launchCheckpoint — reports and does not navigate', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchCheckpoint(0, [{ id: 'lp1', go: 'lesson', topic: 'basics' }]);
    });
    expect(params.setScr).not.toHaveBeenCalled();
    expect(mockReport).toHaveBeenCalled();
  });

  it('launchLegendary — does NOT navigate to an unplayable empty McGame', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.launchLegendary({ id: 'lp1', go: 'lesson', topic: 'basics' });
    });
    expect(params.setScr).not.toHaveBeenCalled();
    expect(params.setMcInitQ).not.toHaveBeenCalled();
    expect(sessionStorage.getItem('nh_legendary_mode')).toBeNull();
    expect(mockReport).toHaveBeenCalled();
  });

  it('resumeLesson — keeps the resume token when V could not be loaded', async () => {
    mockGetContent.mockRejectedValue(new Error('offline'));
    const token = JSON.stringify({ topic: 'basics', ts: Date.now() });
    localStorage.setItem('nh_lesson_resume', token);
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.resumeLesson();
    });
    // An unverifiable topic is NOT a stale topic. Deleting it here destroyed a
    // lesson the user had not finished.
    expect(localStorage.getItem('nh_lesson_resume')).toBe(token);
    expect(params.setScr).not.toHaveBeenCalled();
  });

  it('resumeLesson — still clears a genuinely stale token once V has loaded', async () => {
    mockGetContent.mockResolvedValue({ V } as never);
    localStorage.setItem(
      'nh_lesson_resume',
      JSON.stringify({ topic: 'retired-topic', ts: Date.now() }),
    );
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params));
    await act(async () => {
      await result.current.resumeLesson();
    });
    expect(localStorage.getItem('nh_lesson_resume')).toBeNull();
    expect(params.setScr).toHaveBeenCalledWith('learnpath');
  });
});
