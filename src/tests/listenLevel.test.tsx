/**
 * listenLevel.test.tsx — the Listening Quiz serves the learner's level (2026-09-04).
 *
 * Every LISTEN item carries a `level` (A1 7 · A2 8 · B1 11 · B2 10 · C1 5 · C2 4),
 * and both launch sites ignored it — `_sh(LISTEN).slice(0, 10)` — so an A1
 * learner's "listening quiz" was mostly B1–C2 sentences. The pool entry is now
 * `adaptive: true` on the strength of the launcher's filter, which is why the
 * filter is asserted through the REAL launcher and not only as a helper.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScreenLauncher, _levelledListen } from '../hooks/useScreenLauncher';
import { LISTEN } from '../data/exercises.js';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';

vi.mock('../lib/exerciseData', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, _getData: vi.fn(async () => ({ LISTEN })) };
});
vi.mock('../lib/contentClient', () => ({
  getContent: vi.fn(async () => ({ V: {} })),
  getLessons: vi.fn(async () => []),
  getGrammar: vi.fn(async () => ({})),
}));
vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn(), reportBoundaryError: vi.fn() }));

type Item = { level?: string };
const BANK = LISTEN as Item[];

function makeParams() {
  const fn = () => vi.fn();
  return {
    setScr: fn(),
    navigate: fn(),
    curEx: '',
    sCurEx: fn(),
    currentScreen: 'dashboard',
    setStats: fn(),
    award: fn(),
    writeDelta: fn(),
    gc: 0,
    tab: 'home',
    setTab: fn(),
    sLt: fn(),
    sLi: fn(),
    sLx: fn(),
    sLs: fn(),
    sLp: fn(),
    sLa: fn(),
    sLsl: fn(),
    sQi: fn(),
    sGl: fn(),
    sGp: fn(),
    sGx: fn(),
    sGs: fn(),
    sGa: fn(),
    sGsl: fn(),
    setMcInitQ: fn(),
    setMcResultQ: fn(),
    setMcResultScore: fn(),
    setMcMistakes: fn(),
    setFcInitPool: fn(),
    setLsInitQ: fn(),
    setMatchInitPool: fn(),
    sSi: fn(),
    sSx: fn(),
    sSw: fn(),
    sSr: fn(),
    sSsc: fn(),
    setAnimLesson: fn(),
  };
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe('the bank is levelled — the precondition', () => {
  it('every LISTEN item carries a valid level', () => {
    expect(BANK.length).toBeGreaterThanOrEqual(40);
    for (const q of BANK) expect(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).toContain(q.level);
  });

  it('the pool entry is adaptive on the strength of the filter below', () => {
    expect(CEFR_EXERCISE_POOL.find((e) => e.id === 'listeninggame')!.adaptive).toBe(true);
  });
});

describe('_levelledListen', () => {
  it('A1 keeps only A1 items; C2 keeps the whole bank', () => {
    expect(_levelledListen(BANK, 'A1').every((q) => (q as Item).level === 'A1')).toBe(true);
    expect(_levelledListen(BANK, 'A1').length).toBeGreaterThanOrEqual(4);
    expect(_levelledListen(BANK, 'C2')).toHaveLength(BANK.length);
  });

  it('B1 keeps A1–B1 and drops B2+', () => {
    const lv = _levelledListen(BANK, 'B1').map((q) => (q as Item).level);
    expect(lv).not.toContain('B2');
    expect(lv).not.toContain('C1');
    expect(lv).toContain('B1');
    expect(lv).toContain('A1');
  });

  it('falls back to the whole bank when the levelled slice is too thin for a quiz', () => {
    const thin = [
      { level: 'A1' },
      { level: 'A1' },
      { level: 'C2' },
      { level: 'C2' },
      { level: 'C2' },
    ];
    expect(_levelledListen(thin, 'A1')).toHaveLength(5);
  });

  it('an unlevelled item is never dropped (absence degrades, never excludes)', () => {
    const bank = [{}, {}, {}, {}, { level: 'C2' }];
    expect(_levelledListen(bank, 'A1')).toHaveLength(4);
  });
});

describe('the launcher applies it (wiring, not just the helper)', () => {
  it('session Listening Quiz at A1 receives only A1 sentences', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params as never));
    sessionStorage.setItem('nh_session_started', 'listening');
    await act(() => result.current.launchSessionActivity('listening'));
    expect(params.setScr).toHaveBeenCalledWith('listening');
    const served = params.setLsInitQ.mock.calls[0]![0] as Item[];
    expect(served.length).toBeGreaterThan(0);
    for (const q of served) expect(q.level).toBe('A1');
  });

  it('at B2 (placement) the quiz reaches B2 sentences and never C1/C2', async () => {
    localStorage.setItem('nh_level', 'B2');
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params as never));
    sessionStorage.setItem('nh_session_started', 'listening');
    await act(() => result.current.launchSessionActivity('listening'));
    const served = params.setLsInitQ.mock.calls[0]![0] as Item[];
    for (const q of served) expect(['A1', 'A2', 'B1', 'B2']).toContain(q.level);
  });

  it('the learn-path listening item goes through the same filter', async () => {
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params as never));
    await act(() => result.current.launchPathItem({ id: 'lp3', go: 'listening' } as never));
    const served = params.setLsInitQ.mock.calls[0]![0] as Item[];
    expect(served.length).toBeGreaterThan(0);
    for (const q of served) expect(q.level).toBe('A1');
  });
});
