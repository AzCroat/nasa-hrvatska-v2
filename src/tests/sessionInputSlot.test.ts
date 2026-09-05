/**
 * sessionInputSlot.test.ts — the guaranteed comprehension slot (P2.8),
 * content expansion item 2 (2026-09-04).
 *
 * THE FINDING. Every skill the daily session guarantees had a slot — grammar
 * (P2.7), production (P2.5), conversation at B1+ (P2.4) — except comprehension.
 * Listening and reading entries competed in the P3 fill among 50–300 eligible
 * entries, and `adaptive` only made them level with every other
 * difficulty-matched drill. Measured over 300 non-lesson sessions per level
 * BEFORE the slot, the share containing ANY listening or reading:
 *
 *   A1 10%  ·  A2 19%  ·  B1 13%  ·  B2 11%  ·  C1 27%  ·  C2 10%
 *
 * and listening alone was 4–5% at B1, B2 and C2 — one listening activity every
 * three weeks or so. The Level Check tests comprehension; the session never
 * scheduled it.
 *
 * The slot is a GUARANTEE, not an addition: it takes a fill slot under the same
 * budget rule as P2 and P2.7, so session length is unchanged by construction.
 * Its measured cost is recorded in session-coverage.test.ts (the A2 discovery
 * slot) and in CLAUDE.md.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

vi.mock('../lib/srs', () => ({
  getDueReviews: vi.fn(() => []),
  getServableReviewCount: vi.fn(() => 0),
  getSR: vi.fn(() => ({})),
}));
vi.mock('../lib/adaptive', () => ({
  getDueCategoryQueue: vi.fn(() => []),
  getCategoryStatus: vi.fn(() => ({ seen: false, accuracy: null, lastSeen: 0 })),
  CONJ_CATEGORIES: new Set(['present-tense', 'past-tense', 'future-tense', 'conditional']),
  CATEGORY_MIN_CEFR: { 'present-tense': 'A1', 'past-tense': 'A2', 'future-tense': 'A2' },
}));
vi.mock('../lib/masteryLedger', async (importOriginal) => {
  const real = (await importOriginal()) as Record<string, unknown>;
  return { ...real, weakestReceptiveKind: vi.fn(() => null) };
});

import {
  buildSessionActivities,
  selectGuaranteedInput,
  getSessionFillTarget,
  CEFR_EXERCISE_POOL,
} from '../hooks/useDailySession';
import { inputKindOf } from '../lib/inputSlot';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { weakestReceptiveKind } from '../lib/masteryLedger';
import { CEFR_ORDER } from '../lib/cefr';

const CROATIA_IDS = new Set(CROATIA_POOL.map((c) => c.id));
// The modality categories only — see inputKindOf for why the SKILL_GROUP
// reading family (which also holds terminology drills) is deliberately not it.
const INPUT_ENTRIES = CEFR_EXERCISE_POOL.filter((e) => inputKindOf(e.category));
const GENERATED_IDS = new Set(INPUT_ENTRIES.filter((e) => e.generated).map((e) => e.id));
const CTX = { micBlocked: false };

function inputActivities(acts: { category: string }[]) {
  return acts.filter((a) => inputKindOf(a.category));
}

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  vi.mocked(weakestReceptiveKind).mockReturnValue(null);
});

describe('every non-lesson session contains exactly one comprehension activity', () => {
  it.each(CEFR_ORDER)('%s — 40 sessions, all with input, none longer than before', (level) => {
    const target = getSessionFillTarget(level, false);
    for (let i = 0; i < 40; i++) {
      localStorage.clear();
      const acts = buildSessionActivities(level);
      const input = inputActivities(acts);
      // AT LEAST one — the guarantee. The P3 variety pass may legitimately add a
      // second (A2 has a fill slot left and prefers a family the session lacks).
      expect(input.length, `${level}: ${acts.map((a) => a.id).join(', ')}`).toBeGreaterThanOrEqual(
        1,
      );
      // The budget rule: non-Croatia activities EXACTLY fill the target — the
      // slot neither adds a slot nor leaves one empty.
      expect(acts.filter((a) => !CROATIA_IDS.has(a.id)).length).toBe(target);
    }
  });

  it('the slot carries an honest reason (the guarantee, when nothing is measured)', () => {
    const acts = buildSessionActivities('B1');
    const [input] = inputActivities(acts) as { reason?: string }[];
    expect(input!.reason).toBe(
      'Every session includes one listening or reading activity at your level.',
    );
  });
});

describe('the kind alternates by what was served less recently', () => {
  // The served map (nh_session_served) is keyed by screen → date. Same-day
  // dates tie (a rebuild within one day must not flip the kind), so the
  // alternation is asserted with explicit dates, as consecutive days produce.
  const served = (m: Record<string, string>) =>
    localStorage.setItem('nh_session_served', JSON.stringify(m));

  it('never served → listening (the scarcer kind in the census)', () => {
    expect(selectGuaranteedInput('B1', new Set(), [], CTX)!.kind).toBe('listening');
  });

  it('listening served yesterday, reading never → reading', () => {
    served({ listening_comprehension: '2026-09-03' });
    expect(selectGuaranteedInput('B1', new Set(), [], CTX)!.kind).toBe('reading');
  });

  it('reading served more recently than listening → listening', () => {
    served({ graded_input: '2026-09-03', listening: '2026-09-01' });
    expect(selectGuaranteedInput('B1', new Set(), [], CTX)!.kind).toBe('listening');
  });

  it('the whole session honours it: a reading day at A1 serves the graded reader', () => {
    served({ listening_comprehension: '2026-09-03', listening: '2026-09-03' });
    const [input] = inputActivities(buildSessionActivities('A1'));
    expect(inputKindOf(input!.category)).toBe('reading');
    expect(input!.screen).toBe('graded_input');
  });

  it('a fresh session later the same day serves the other kind', () => {
    // The first build records its listening screens under today; a "keep going"
    // session built afterwards sees listening as the more recent kind. Two
    // sessions in one day covering both kinds is the intended shape.
    const first = inputActivities(buildSessionActivities('B1'))[0]!;
    const second = inputActivities(buildSessionActivities('B1'))[0]!;
    expect(inputKindOf(first.category)).toBe('listening');
    expect(inputKindOf(second.category)).toBe('reading');
  });
});

describe('input means the modality categories, not the skill families', () => {
  it('a drill grouped under the reading family is not comprehension input', () => {
    // `legal` and `literature` are SKILL_GROUP 'reading' for the variety pass and
    // are terminology / register banks. The guarantee must never be discharged
    // by one, and must never be skipped because the session already holds one.
    expect(inputKindOf('legal')).toBeNull();
    expect(inputKindOf('literature')).toBeNull();
    expect(inputKindOf('media-analysis')).toBeNull();
    expect(inputKindOf('listening')).toBe('listening');
    expect(inputKindOf('reading')).toBe('reading');
    expect(INPUT_ENTRIES.map((e) => e.id).sort()).toEqual(
      [
        'aiListening',
        'aistory',
        'gradedreader',
        'grammarreader',
        'listeningComprehension',
        'listeninggame',
        'storymode',
        'video_lesson',
      ].sort(),
    );
  });

  it('at B2 a reading day serves the graded reader, not the literature drill', () => {
    localStorage.setItem(
      'nh_session_served',
      JSON.stringify({ listening_comprehension: '2026-09-03' }),
    );
    const pick = selectGuaranteedInput('B2', new Set(), [], CTX)!;
    expect(pick.kind).toBe('reading');
    expect(pick.screen).toBe('graded_input');
  });
});

describe('the mastery ledger steers the kind when it has measured one', () => {
  it('a weaker reading skill gets reading, and the reason says so', () => {
    vi.mocked(weakestReceptiveKind).mockReturnValue('reading');
    const pick = selectGuaranteedInput('B2', new Set(), [], CTX)!;
    expect(pick.kind).toBe('reading');
    expect(pick.reason).toBe('Reading is the skill your practice says needs the most work.');
  });

  it('a weaker listening skill gets listening even after listening was served yesterday', () => {
    vi.mocked(weakestReceptiveKind).mockReturnValue('listening');
    localStorage.setItem(
      'nh_session_served',
      JSON.stringify({ listening_comprehension: '2026-09-03', listening: '2026-09-03' }),
    );
    expect(selectGuaranteedInput('B2', new Set(), [], CTX)!.kind).toBe('listening');
  });
});

describe('authored input before generated — the P2.4 posture', () => {
  it('has both kinds of entry to test (pool sanity)', () => {
    expect([...GENERATED_IDS].sort()).toEqual([
      'aiListening',
      'aistory',
      'storymode',
      'video_lesson',
    ]);
    expect(INPUT_ENTRIES.some((e) => !e.generated && !e.reference)).toBe(true);
  });

  it.each(['B1', 'B2', 'C1', 'C2'])(
    '%s — 30 sessions never put a generated entry in the guaranteed slot',
    (level) => {
      for (let i = 0; i < 30; i++) {
        localStorage.clear();
        const [input] = inputActivities(buildSessionActivities(level));
        expect(GENERATED_IDS.has(input!.id), input!.id).toBe(false);
      }
    },
  );

  it('degrades to a generated entry before degrading to nothing', () => {
    const authored = INPUT_ENTRIES.filter((e) => !e.generated).map((e) => e.screen);
    const pick = selectGuaranteedInput('B1', new Set(authored), [], CTX);
    expect(pick).not.toBeNull();
    expect(GENERATED_IDS.has(pick!.id)).toBe(true);
  });

  it('never serves a reference (browse) entry, and returns null only when nothing graded is left', () => {
    const graded = INPUT_ENTRIES.filter((e) => !e.reference).map((e) => e.screen);
    expect(selectGuaranteedInput('C2', new Set(graded), [], CTX)).toBeNull();
    // grammarreader is the one reference input entry; it must be what is left.
    expect(INPUT_ENTRIES.filter((e) => e.reference).map((e) => e.id)).toEqual(['grammarreader']);
  });

  it('respects the CEFR gate — an A1 learner never gets a B1 listening screen', () => {
    for (let i = 0; i < 20; i++) {
      localStorage.clear();
      const [input] = inputActivities(buildSessionActivities('A1'));
      const entry = CEFR_EXERCISE_POOL.find((e) => e.id === input!.id)!;
      expect(entry.cefr).toBe('A1');
    }
  });
});

describe('the `generated` flag is derived from what the screen actually does', () => {
  // A flag with one consumer decays like any hand list. Walk the REAL router to
  // each input screen's component and read which endpoints it calls; the flag
  // must equal "calls a Claude endpoint for its content" in BOTH directions.
  //
  // "Claude endpoint" is derived from the budget ledger's ceiling table
  // (functions/api/_aiBudget.js — the canonical AI-endpoint list) minus the
  // non-Claude entries that table also meters (speech, translation, image/video
  // generation). One screen calls Claude for something OTHER than its content
  // and is exempted by name, with the endpoint it must still be calling —
  // both halves are asserted so the exemption cannot go stale silently.
  const router = readFileSync('src/components/AppRouter.tsx', 'utf8');
  const budget = readFileSync('functions/api/_aiBudget.js', 'utf8');
  const table = budget.slice(budget.indexOf('ENDPOINT_CEILING_MICROUSD = {'));
  const NON_CLAUDE = new Set([
    '/api/tts',
    '/api/stt',
    '/api/stt-calibration',
    '/api/pronunciation-assess',
    '/api/translate',
    '/api/flux-generate',
    '/api/srs-sync',
  ]);
  const CLAUDE_ENDPOINTS = new Set(
    [...table.matchAll(/'(\/api\/[a-z-]+)(?::[a-z]+)?':/g)]
      .map((m) => m[1]!)
      .filter((e) => !NON_CLAUDE.has(e)),
  );
  /** Screens whose Claude call is auxiliary to AUTHORED content, not the content. */
  const AUXILIARY_AI: Record<string, string> = {
    // Grammar X-Ray: per-level authored passages; tap-a-word analysis is opt-in.
    grammarreader: '/api/ai-chat',
  };

  function componentSource(screen: string): string | null {
    const m = router.match(
      new RegExp(
        `currentScreen === '${screen}'[\\s\\S]{0,300}?<ScreenErrorBoundary[^>]*>\\s*<([A-Z][A-Za-z0-9]+)`,
      ),
    );
    if (!m) return null;
    const lazy = router.match(
      new RegExp(`const ${m[1]} = lazyWithReload\\(\\s*\\(\\) => import\\('([^']+)'\\)`),
    );
    if (!lazy) return null;
    const base = resolve('src/components', lazy[1]!);
    for (const ext of ['.tsx', '.ts', '.jsx', '.js']) {
      try {
        return readFileSync(base + ext, 'utf8');
      } catch {
        /* try next */
      }
    }
    return null;
  }
  const endpointsOf = (src: string) =>
    new Set([...src.matchAll(/['"\`](\/api\/[a-z-]+)/g)].map((m) => m[1]!));

  it('the derivation has teeth (the ceiling table was found and is non-trivial)', () => {
    expect(CLAUDE_ENDPOINTS.has('/api/listening')).toBe(true);
    expect(CLAUDE_ENDPOINTS.has('/api/maja')).toBe(true);
    expect(CLAUDE_ENDPOINTS.has('/api/ai-chat')).toBe(true);
    expect(CLAUDE_ENDPOINTS.has('/api/pronunciation-assess')).toBe(false);
    expect(CLAUDE_ENDPOINTS.size).toBeGreaterThan(15);
  });

  it.each(INPUT_ENTRIES.filter((e) => e.screen !== 'listening').map((e) => [e.id, e.screen]))(
    '%s (%s) is flagged generated exactly when its component gets its content from Claude',
    (id, screen) => {
      const src = componentSource(screen as string);
      expect(src, `could not resolve ${screen} through AppRouter`).not.toBeNull();
      const claude = [...endpointsOf(src!)].filter((e) => CLAUDE_ENDPOINTS.has(e));
      const aux = AUXILIARY_AI[screen as string];
      const generatesContent = claude.filter((e) => e !== aux).length > 0;
      const entry = CEFR_EXERCISE_POOL.find((e) => e.id === id)!;
      expect(!!entry.generated, `${id}: calls ${claude.join(', ') || 'nothing'}`).toBe(
        generatesContent,
      );
    },
  );

  it('every auxiliary-AI exemption still calls exactly the endpoint it is exempted for', () => {
    for (const [screen, endpoint] of Object.entries(AUXILIARY_AI)) {
      const src = componentSource(screen)!;
      expect(endpointsOf(src).has(endpoint), `${screen} no longer calls ${endpoint}`).toBe(true);
      expect(CEFR_EXERCISE_POOL.find((e) => e.screen === screen)!.generated).toBeUndefined();
    }
  });

  it('the listening quiz takes its questions from the launcher, not an endpoint', () => {
    // Routed with a questions prop rather than lazily imported, so the walker
    // above cannot see it; assert the property directly.
    expect(CEFR_EXERCISE_POOL.find((e) => e.id === 'listeninggame')!.generated).toBeUndefined();
    expect(router).toMatch(/currentScreen === 'listening'[\s\S]{0,300}questions=/);
  });
});

describe('the slot yields to the budget, like P2 and P2.7', () => {
  it('fluency mode keeps the guarantee AND leaves fill room (target +2)', () => {
    localStorage.setItem('nh_fluency_mode', 'true');
    const acts = buildSessionActivities('A2');
    expect(inputActivities(acts).length).toBeGreaterThanOrEqual(1);
    expect(acts.filter((a) => !CROATIA_IDS.has(a.id)).length).toBe(6);
  });

  it('a mic-blocked learner is never handed a mic-required input entry', () => {
    const micInput = INPUT_ENTRIES.filter((e) => e.micRequired).map((e) => e.screen);
    for (let i = 0; i < 10; i++) {
      localStorage.clear();
      localStorage.setItem('nh_mic_state', 'denied');
      const [input] = inputActivities(buildSessionActivities('C1'));
      expect(micInput).not.toContain(input!.screen);
    }
  });
});

describe('the wiring — buildSessionActivities really calls the slot', () => {
  it('useDailySession imports and invokes selectGuaranteedInput under the budget check', () => {
    const src = readFileSync('src/hooks/useDailySession.ts', 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
    expect(src).toMatch(/from '\.\.\/lib\/inputSlot'/);
    expect(src).toMatch(
      /activities\.length < fillTarget && !activities\.some\(\(a\) => inputKindOf\(a\.category\)\)/,
    );
    expect(src).toMatch(
      /selectGuaranteedInput\(userCefr, usedScreens, recentScreens, drawCtx\(\)\)/,
    );
  });
});
