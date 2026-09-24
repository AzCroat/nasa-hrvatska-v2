/**
 * dwellContentGate.test.tsx — the dwell timer paid for a page that showed
 * nothing (2026-09-24).
 *
 * THE INTERACTION. `launchPathItem` arms a 20-second timer when a LEARN_PATH
 * item's `go` is in `BLACK_HOLE_SCREENS`, and on fire credits `lc`/`gc` plus
 * DWELL_XP. It knows the screen ID and nothing else — in particular nothing
 * about whether that screen had anything to DISPLAY. Seven of the thirteen
 * black-hole screens render from the `/api/content/core` payload, which lands
 * seconds after first paint (measured at ~9.2 s in the CI-equivalent E2E
 * harness, because `fetchAuthed` awaits `getFirebaseBearer()` and that has a 6 s
 * failsafe) and NEVER on a failed fetch. So a learner who tapped a path item and
 * sat on "Loading this page — one moment." for twenty seconds was credited a
 * completed informational lesson and 5 XP for reading nothing: NEVER-DO 14,
 * reached between two features that are each correct on their own.
 *
 * THE RE-ARM IS THE LOAD-BEARING HALF, and a bare `return` would have been a
 * worse defect than the one it fixed. `vs` is written on TAP, so `wasFirstVisit`
 * is false on every later visit — returning without credit would have withheld
 * the counter PERMANENTLY from the ordinary learner who tapped in during the
 * content window, which is far commoner than a failed fetch. The timer re-arms a
 * full dwell instead, capped at DWELL_CONTENT_WAITS, so the credit is paid for
 * twenty seconds on a page that could actually be read.
 *
 * THE SET IS DERIVED, NOT HAND-LISTED. A list of screen ids in one file cannot
 * know about a screen that starts or stops reading the payload — this repo's
 * most-repeated lesson — so the census below walks the REAL router and the REAL
 * import graph from every BLACK_HOLE_SCREENS key and requires
 * CONTENT_DEPENDENT_BLACK_HOLE_SCREENS to equal the result in BOTH directions.
 *
 * Mutation-verified (see the commit message).
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

vi.mock('../lib/exerciseData', () => ({
  _getData: vi.fn(async () => ({ LISTEN: [] })),
  _getVocab: vi.fn(async () => ({})),
  _getVocabSource: vi.fn(async () => ({ V: {}, V_LEVELS: {} })),
  _buildAdaptivePool: (pool: unknown[]) => pool,
}));
vi.mock('../lib/contentClient', () => ({
  getContent: vi.fn(async () => ({ V: {} })),
  getLessons: vi.fn(async () => []),
  getGrammar: vi.fn(async () => ({})),
}));
vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn(), reportBoundaryError: vi.fn() }));

/** The synchronous payload read the gate asks. Absent by default. */
const peek = vi.fn<[], unknown>(() => null);
vi.mock('../hooks/useContent', () => ({
  peekContent: () => peek(),
  useContent: () => ({ content: peek(), loading: false, error: null }),
}));

import { useScreenLauncher } from '../hooks/useScreenLauncher';
import {
  BLACK_HOLE_SCREENS,
  CONTENT_DEPENDENT_BLACK_HOLE_SCREENS,
  DWELL_CONTENT_WAITS,
  DWELL_XP,
} from '../lib/blackHoleScreens';

/** A content-dependent black-hole screen, and a static one, both real keys. */
const NEEDS_CONTENT = 'dialects';
const STATIC = 'writing';

type TestStats = { vs: string[]; lc: number; gc: number; xp: number };

function makeParams() {
  // setStats must APPLY the updater, not merely record it: `wasFirstVisit` is
  // assigned inside the launcher's updater and read by the timer twenty seconds
  // later, so a recording-only mock leaves it false and every credit path bails
  // before the gate under test. (Found by this suite failing on the STATIC
  // screen, where no gate should apply at all.)
  const stats: TestStats = { vs: [], lc: 0, gc: 0, xp: 0 };
  const setStats = vi.fn((u: unknown) => {
    if (typeof u === 'function') Object.assign(stats, (u as (p: TestStats) => TestStats)(stats));
  });
  return {
    stats,
    setScr: vi.fn(),
    navigate: vi.fn(),
    curEx: '',
    sCurEx: vi.fn(),
    currentScreen: 'learnpath',
    setStats,
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

const statsFrom = (p: ReturnType<typeof makeParams>) => p.stats;

async function tap(p: ReturnType<typeof makeParams>, go: string) {
  const { result } = renderHook(() => useScreenLauncher(p));
  await act(async () => {
    await result.current.launchPathItem({ id: 'lp-test', go } as never);
  });
}

describe('the dwell timer does not credit a page the learner could not read', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    peek.mockReturnValue(null);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('writes the vs VISIT marker on tap even with no content — the path node must not stick', async () => {
    const p = makeParams();
    await tap(p, NEEDS_CONTENT);
    expect(statsFrom(p).vs).toContain(NEEDS_CONTENT);
    expect(p.writeDelta).toHaveBeenCalledWith({ vs: [NEEDS_CONTENT] });
  });

  it('credits nothing at 20s while the content payload is still absent', async () => {
    const p = makeParams();
    await tap(p, NEEDS_CONTENT);
    await act(async () => {
      vi.advanceTimersByTime(20_000);
    });
    const s = statsFrom(p);
    expect(s.lc, 'lc credited for a page that rendered no content').toBe(0);
    expect(s.gc).toBe(0);
    expect(p.award, 'DWELL_XP paid for a page that rendered no content').not.toHaveBeenCalled();
    // And the proof the scenario ran at all: the visit half DID happen.
    expect(s.vs).toContain(NEEDS_CONTENT);
  });

  it('credits at 20s when the payload is present', async () => {
    peek.mockReturnValue({ V: {} });
    const p = makeParams();
    await tap(p, NEEDS_CONTENT);
    await act(async () => {
      vi.advanceTimersByTime(20_000);
    });
    expect(statsFrom(p).lc).toBe(1);
    expect(p.award).toHaveBeenCalledWith(DWELL_XP, undefined, 'lesson', NEEDS_CONTENT);
  });

  it('re-arms and credits once the payload arrives late — the counter is not lost for ever', async () => {
    const p = makeParams();
    await tap(p, NEEDS_CONTENT);
    await act(async () => {
      vi.advanceTimersByTime(20_000);
    });
    expect(p.award).not.toHaveBeenCalled();
    peek.mockReturnValue({ V: {} });
    await act(async () => {
      vi.advanceTimersByTime(20_000);
    });
    expect(statsFrom(p).lc, 'a re-armed dwell never paid out').toBe(1);
    expect(p.award).toHaveBeenCalledWith(DWELL_XP, undefined, 'lesson', NEEDS_CONTENT);
  });

  it('gives up after DWELL_CONTENT_WAITS re-arms rather than waiting for ever', async () => {
    const p = makeParams();
    await tap(p, NEEDS_CONTENT);
    await act(async () => {
      vi.advanceTimersByTime(20_000 * (DWELL_CONTENT_WAITS + 1));
    });
    expect(p.award).not.toHaveBeenCalled();
    peek.mockReturnValue({ V: {} });
    await act(async () => {
      vi.advanceTimersByTime(20_000 * 5);
    });
    expect(statsFrom(p).lc, 'credit paid after the wait was capped').toBe(0);
    expect(p.award).not.toHaveBeenCalled();
  });

  it('a STATIC black-hole screen is credited with no payload at all', async () => {
    const p = makeParams();
    await tap(p, STATIC);
    await act(async () => {
      vi.advanceTimersByTime(20_000);
    });
    expect(statsFrom(p).lc, `${STATIC} renders from static imports — its credit is earned`).toBe(1);
    expect(p.award).toHaveBeenCalledWith(DWELL_XP, undefined, 'lesson', STATIC);
  });

  it('navigating away cancels a re-armed timer', async () => {
    const p = makeParams();
    const { result, rerender } = renderHook((props: typeof p) => useScreenLauncher(props), {
      initialProps: p,
    });
    await act(async () => {
      await result.current.launchPathItem({ id: 'lp-test', go: NEEDS_CONTENT } as never);
    });
    await act(async () => {
      vi.advanceTimersByTime(20_000);
    });
    // The learner leaves; the effect keyed on currentScreen clears the timer.
    rerender({ ...p, currentScreen: 'dashboard' });
    peek.mockReturnValue({ V: {} });
    await act(async () => {
      vi.advanceTimersByTime(20_000 * 5);
    });
    expect(p.award, 'a cancelled dwell still paid out').not.toHaveBeenCalled();
  });
});

/**
 * The census. A hand-listed set of screen ids decays exactly like one in
 * production, and it decays in the DANGEROUS direction silently: a screen that
 * gains a content dependency and is not listed goes back to being credited for a
 * blank page, with every test above still green.
 */
const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
const NEEDS = /\buseContent\s*\(|\bgetContent\s*\(|\bpeekContent\s*\(/;

function resolveImport(from: string, spec: string): string | null {
  if (!spec.startsWith('.')) return null;
  const base = resolve(dirname(from), spec);
  for (const c of [
    base,
    base + '.tsx',
    base + '.ts',
    base + '.jsx',
    base + '.js',
    base + '/index.tsx',
    base + '/index.ts',
  ]) {
    if (existsSync(c)) {
      try {
        if (readFileSync(c)) return c;
      } catch {
        /* a directory — keep looking */
      }
    }
  }
  return null;
}

/**
 * The walk stays inside `components/` and `hooks/`, for the reason
 * sessionScreensFeedLedger records: a shared `lib/` module that reads content
 * internally would make every importer of it look content-dependent.
 */
function reachesContent(start: string): string | null {
  const seen = new Set<string>();
  const stack = [start];
  while (stack.length) {
    const f = stack.pop()!;
    if (seen.has(f)) continue;
    seen.add(f);
    const s = strip(readFileSync(f, 'utf8'));
    if (NEEDS.test(s)) return f;
    const specs: string[] = [];
    for (const m of s.matchAll(/from\s+['"]([^'"]+)['"]/g)) specs.push(m[1]!);
    for (const m of s.matchAll(/import\s*\(\s*['"]([^'"]+)['"]\s*\)/g)) specs.push(m[1]!);
    for (const spec of specs) {
      const r = resolveImport(f, spec);
      if (r && /\/(components|hooks)\//.test(r) && !seen.has(r)) stack.push(r);
    }
  }
  return null;
}

const ROUTER = 'src/components/AppRouter.tsx';

/** Resolve a screen key to the file the router actually renders for it. */
function screenFile(key: string): string | null {
  const router = strip(readFileSync(ROUTER, 'utf8'));
  const block = router.match(
    new RegExp(
      `currentScreen === '${key}'[\\s\\S]{0,500}?<(?:ScreenErrorBoundary[^>]*>\\s*<)?([A-Z]\\w*)`,
    ),
  );
  if (!block) return null;
  const comp = block[1]!;
  const imp =
    router.match(
      new RegExp(
        `const\\s+${comp}\\s*=\\s*lazyWithReload\\(\\s*\\(\\)\\s*=>\\s*import\\(['"]([^'"]+)`,
      ),
    ) || router.match(new RegExp(`import\\s+${comp}\\s+from\\s+['"]([^'"]+)['"]`));
  return imp ? resolveImport(ROUTER, imp[1]!) : null;
}

describe('CONTENT_DEPENDENT_BLACK_HOLE_SCREENS is the derived truth', () => {
  const keys = Object.keys(BLACK_HOLE_SCREENS);

  it('every black-hole key resolves to a file through the real router', () => {
    expect(keys.length).toBeGreaterThan(5);
    const unresolved = keys.filter((k) => !screenFile(k));
    expect(unresolved, 'unresolved keys make the census below vacuous').toEqual([]);
  });

  it('the set equals the keys whose screen reads the content payload, both directions', () => {
    const derived = new Set<string>();
    for (const k of keys) {
      const f = screenFile(k);
      if (f && reachesContent(f)) derived.add(k);
    }
    const listed = [...CONTENT_DEPENDENT_BLACK_HOLE_SCREENS].sort();
    expect(
      [...derived].sort(),
      'a screen reads the payload and is NOT gated (credited for a blank page), ' +
        'or is gated and no longer reads it (credit withheld for nothing)',
    ).toEqual(listed);
    // Both halves must be non-empty, or one direction of the check is vacuous.
    expect(derived.size).toBeGreaterThan(0);
    expect(
      keys.length - derived.size,
      'no STATIC black-hole screen left to prove the split',
    ).toBeGreaterThan(0);
  });

  it('the two screens the behavioural tests name are still on the sides they assume', () => {
    expect(CONTENT_DEPENDENT_BLACK_HOLE_SCREENS.has(NEEDS_CONTENT)).toBe(true);
    expect(CONTENT_DEPENDENT_BLACK_HOLE_SCREENS.has(STATIC)).toBe(false);
    expect(BLACK_HOLE_SCREENS[NEEDS_CONTENT]).toBeTruthy();
    expect(BLACK_HOLE_SCREENS[STATIC]).toBeTruthy();
  });
});
