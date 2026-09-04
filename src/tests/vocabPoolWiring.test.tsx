/**
 * vocabPoolWiring.test.tsx — the launcher really serves the level-gated deck.
 *
 * vocabPool.test.ts proves the derivation; this proves the hook CALLS it. The
 * split matters (see CLAUDE.md, "a component test and a wiring test are
 * different tests"): a launcher that quietly went back to flattening a category
 * list would pass every pool test and still hand a C1 learner `greetings`.
 *
 * Production omits `allCats`; the level comes from the persisted profile /
 * placement (`vocabLevel()` → getGenerationCefr), which these tests set through
 * `nh_level` exactly as placement does.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScreenLauncher } from '../hooks/useScreenLauncher';

vi.mock('../lib/exerciseData', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, _getData: vi.fn(async () => ({})) };
});
vi.mock('../lib/contentClient', () => ({
  getContent: vi.fn(),
  getLessons: vi.fn(async () => []),
  getGrammar: vi.fn(async () => ({})),
}));
vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn(), reportBoundaryError: vi.fn() }));

import { getContent } from '../lib/contentClient';
const mockGetContent = vi.mocked(getContent);

const CONTENT = {
  V: {
    greetings: [
      ['bog', 'hello', 'bohg'],
      ['hvala', 'thanks', 'HVAH-lah'],
      ['molim', 'please', 'MOH-leem'],
      ['dobro', 'good', 'DOH-broh'],
    ],
    conjunctions: [
      ['iako', 'although'],
      ['stoga', 'therefore'],
      ['premda', 'even though'],
      ['dakle', 'so'],
    ],
  },
  V_LEVELS: { greetings: 'A1', conjunctions: 'B1' },
  V_B2: {
    'media & journalism': [
      ['vijesti', 'news'],
      ['novinar', 'journalist'],
      ['urednik', 'editor'],
      ['naslovnica', 'front page'],
    ],
  },
  V_C1: {},
  V_C2: {},
};
const A1 = new Set(['bog', 'hvala', 'molim', 'dobro']);
const B1 = new Set(['iako', 'stoga', 'premda', 'dakle']);
const B2 = new Set(['vijesti', 'novinar', 'urednik', 'naslovnica']);

function makeParams(overrides: Record<string, unknown> = {}) {
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
    ...overrides,
  };
}

const lemmas = (rows: unknown[][]) => new Set(rows.map((w) => w[0] as string));

async function flashcardPool(params: ReturnType<typeof makeParams>) {
  const { result } = renderHook(() => useScreenLauncher(params as never));
  sessionStorage.setItem('nh_session_started', 'flashcards');
  await act(() => result.current.launchSessionActivity('flashcards'));
  expect(params.setScr).toHaveBeenCalledWith('flashcards');
  return lemmas(
    (params.setFcInitPool as ReturnType<typeof vi.fn>).mock.calls[0]![0] as unknown[][],
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  sessionStorage.clear();
  mockGetContent.mockResolvedValue(CONTENT as never);
});

describe('session flashcards draw from the acquisition deck at the learner’s level', () => {
  it('A1: only A1-band words — the B1 category the old list served everyone is gated out', async () => {
    const pool = await flashcardPool(makeParams());
    expect(pool.size).toBe(4);
    for (const w of pool) expect(A1.has(w), w).toBe(true);
  });

  it('B2: the V_B2 tier is served — words no drill could reach before', async () => {
    localStorage.setItem('nh_level', 'B2');
    const pool = await flashcardPool(makeParams());
    for (const w of B2) expect(pool.has(w), w).toBe(true);
    // Lower bands are treated as known unless SRS says otherwise.
    for (const w of [...A1, ...B1]) expect(pool.has(w), w).toBe(false);
  });

  it('B2 with a tracked A1 card: that card rides along, the rest of A1 does not', async () => {
    localStorage.setItem('nh_level', 'B2');
    localStorage.setItem(
      'nh_sr',
      JSON.stringify({ hvala: { s: 2, d: 5, r: 1, w: 0, l: 0, due: 1 } }),
    );
    const pool = await flashcardPool(makeParams());
    expect(pool.has('hvala')).toBe(true);
    expect(pool.has('bog')).toBe(false);
    for (const w of B2) expect(pool.has(w), w).toBe(true);
  });

  it('the fixture override still wins (the `basics` seeds in the older suites)', async () => {
    localStorage.setItem('nh_level', 'B2');
    const pool = await flashcardPool(makeParams({ allCats: ['conjunctions'] }));
    expect(pool).toEqual(B1);
  });

  it('a payload with no V_LEVELS degrades to every V category, never to an empty pool', async () => {
    mockGetContent.mockResolvedValue({ V: CONTENT.V } as never);
    const pool = await flashcardPool(makeParams());
    expect(pool).toEqual(new Set([...A1, ...B1]));
  });
});

describe('the quiz deck gates the same way', () => {
  it('B1: A1 and B1 words are servable, the B2 tier is not', async () => {
    localStorage.setItem('nh_level', 'B1');
    const params = makeParams();
    const { result } = renderHook(() => useScreenLauncher(params as never));
    sessionStorage.setItem('nh_session_started', 'mcgame');
    await act(() => result.current.launchSessionActivity('mcgame'));
    const qs = (params.setMcInitQ as ReturnType<typeof vi.fn>).mock.calls[0]![0] as {
      hr: string;
    }[];
    expect(qs.length).toBeGreaterThan(0);
    for (const q of qs) {
      expect(B2.has(q.hr), q.hr).toBe(false);
      expect(B1.has(q.hr), `${q.hr} — own band leads the deck`).toBe(true);
    }
  });
});
