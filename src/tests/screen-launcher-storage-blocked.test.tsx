/**
 * screen-launcher-storage-blocked.test.tsx — the app must still open and exit
 * exercises on a profile where Web Storage is blocked.
 *
 * `sessionStorage.getItem/setItem` THROW a SecurityError — they do not return
 * null — when the origin's cookies / site data are blocked: "block all cookies",
 * supervised or managed profiles (Google Family Link), some embedded webviews.
 * safeStorage.ts already documents this for localStorage; sessionStorage sits
 * behind the SAME permission gate, which is the easy thing to get wrong because
 * sessionStorage is per-tab and feels more ephemeral.
 *
 * useScreenLauncher had 30 raw calls and no safeStorage import. The placement is
 * what made it fatal rather than lossy:
 *
 *   - every launcher writes `nh_ex_start` on the line immediately BEFORE its
 *     setScr(...), so the throw pre-empted the navigation — no exercise opened;
 *   - goBack()'s read is its literal FIRST statement, so no exercise closed
 *     either — a user who did get onto a screen was stuck there;
 *   - mcGameComplete() reads `nh_checkpoint_level` before setScr('mcresult'),
 *     so finishing a quiz threw instead of showing the score.
 *
 * The net effect was a bricked app for those profiles, not a degraded one: the
 * home screen rendered and every tile was dead. Nothing in the suite covered it
 * because jsdom's storage never throws unless a test makes it.
 *
 * The same unguarded pattern sat on the rest of the launch → complete → exit
 * spine (useAward's completion tracker, useAuth's sign-out sweep, LearnPath's
 * level-quiz launch, DailyPlanCard's plan-activity launch), so those are covered
 * by the static guard at the foot of this file. Their destination readers
 * (HomeTab, AppRouter, ReadingList, ClozeEngine, sessionSignal, sessionCategory)
 * were already try/caught and are deliberately left alone.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { useScreenLauncher } from '../hooks/useScreenLauncher';

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

/** Every operation throws: cookies / site data blocked, supervised profile. */
function blockedStorage(): Storage {
  const boom = () => {
    throw new DOMException('The operation is insecure.', 'SecurityError');
  };
  return {
    getItem: boom,
    setItem: boom,
    removeItem: boom,
    clear: boom,
    key: boom,
    length: 0,
  } as unknown as Storage;
}

function makeParams() {
  return {
    setScr: vi.fn(),
    navigate: vi.fn(),
    curEx: 'flashcards',
    sCurEx: vi.fn(),
    currentScreen: 'dashboard',
    setStats: vi.fn(),
    award: vi.fn(),
    writeDelta: vi.fn(),
    allCats: ['basics'],
    gc: 0,
    tab: 'practice',
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

const QUESTIONS = [{ hr: 'jedan', en: 'one', opts: ['one', 'two', 'three'], correct: 'one' }];

beforeEach(() => {
  vi.stubGlobal('sessionStorage', blockedStorage());
  vi.stubGlobal('localStorage', blockedStorage());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useScreenLauncher on a storage-blocked profile', () => {
  it('opens flashcards — the write of nh_ex_start must not pre-empt setScr', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    act(() => result.current.launchFlashcards([['jedan', 'one']]));
    expect(p.setScr).toHaveBeenCalledWith('flashcards');
  });

  it('opens the quiz', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    act(() => result.current.launchMcGame(QUESTIONS));
    expect(p.setScr).toHaveBeenCalledWith('mcgame');
  });

  it('opens listening', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    act(() => result.current.launchListening([{ q: 1 }]));
    expect(p.setScr).toHaveBeenCalledWith('listening');
  });

  it('opens matching', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    act(() => result.current.launchMatch([{ id: 'h0' }]));
    expect(p.setScr).toHaveBeenCalledWith('match');
  });

  it('opens speaking', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    act(() => result.current.launchSpeaking([['jedan', 'one']]));
    expect(p.setScr).toHaveBeenCalledWith('speaking');
  });

  it('shows the quiz result — the checkpoint read must not pre-empt setScr', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    act(() => result.current.mcGameComplete(QUESTIONS, 1, []));
    expect(p.setScr).toHaveBeenCalledWith('mcresult');
    expect(p.setMcResultScore).toHaveBeenCalledWith(1);
  });

  it('exits the exercise — goBack reads nh_ex_start as its first statement', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    act(() => result.current.launchFlashcards([['jedan', 'one']]));
    act(() => result.current.goBack());
    // launchFlashcards recorded { tab: 'practice', screen: 'dashboard' }, and a
    // 'dashboard' return context resolves to a tab switch rather than a setScr.
    expect(p.setTab).toHaveBeenCalledWith('practice');
    expect(p.sCurEx).toHaveBeenCalledWith('');
  });

  it('still navigates when the whole launch → exit loop runs back to back', () => {
    const p = makeParams();
    const { result } = renderHook(() => useScreenLauncher(p));
    expect(() => {
      act(() => result.current.launchMcGame(QUESTIONS));
      act(() => result.current.mcGameComplete(QUESTIONS, 1, []));
      act(() => result.current.goBack());
    }).not.toThrow();
  });
});

/**
 * Static guard. The behavioural tests above can only reach the launchers that
 * need no async content load; the rest of the spine is asserted by source
 * inspection, which is also what stops the pattern being reintroduced one raw
 * call at a time.
 */
describe('the launch → complete → exit spine holds no raw Web Storage access', () => {
  const SPINE = [
    'src/hooks/useScreenLauncher.ts',
    'src/hooks/useAward.ts',
    'src/components/profile/LearnPath.tsx',
  ];

  it.each(SPINE)('%s routes storage through safeStorage', (file) => {
    const src = readFileSync(resolve(process.cwd(), file), 'utf8');
    const raw = src
      .split('\n')
      .map((line, i) => [i + 1, line] as const)
      .filter(([, line]) => /\b(sessionStorage|localStorage)\.(get|set|remove)Item\b/.test(line))
      .filter(([, line]) => !line.trim().startsWith('*') && !line.trim().startsWith('//'));
    expect(raw).toEqual([]);
  });
});
