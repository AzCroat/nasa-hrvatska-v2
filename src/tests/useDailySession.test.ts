// src/tests/useDailySession.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  buildSessionActivities,
  markDoneInSession,
  recordSessionComplete,
  useDailySession,
  shouldAutoCompleteOnReturn,
  selectGuaranteedGrammar,
  GRAMMAR_STRUCTURE_CATEGORIES,
  CEFR_EXERCISE_POOL,
  SESSION_AUTOCOMPLETE_SCREENS,
  CROATIA_POOL,
} from '../hooks/useDailySession';

// Wave 2: the Croatia slot rotates a widened, CEFR-gated pool — derive id/screen
// sets from the export so these tests never drift as the pool grows.
const CROATIA_IDS = new Set(CROATIA_POOL.map((c) => c.id));
import type { DailySession, SessionActivity } from '../hooks/useDailySession';
import { localDateStr } from '../lib/dateUtils';

// Mock external dependencies to test different branches
vi.mock('../lib/srs', () => ({
  getDueReviews: vi.fn(() => []),
}));

vi.mock('../lib/adaptive', () => ({
  getDueCategoryQueue: vi.fn(() => []),
  CONJ_CATEGORIES: new Set([
    'present-tense',
    'past-tense',
    'future-tense',
    'conditional',
    'aspect-imperfective',
    'aspect-perfective',
    'aspect-negation',
  ]),
  CATEGORY_MIN_CEFR: {
    'present-tense': 'A1',
    'past-tense': 'A2',
    'future-tense': 'A2',
    conditional: 'B1',
    'aspect-imperfective': 'B1',
    'aspect-negation': 'B1',
    'aspect-perfective': 'B2',
  },
}));

// Wave 8: premium gate under test control. Default TRUE mirrors production
// today (FREE_ANNUAL_ENABLED makes every user premium); individual tests flip
// it to assert the free-user filter.
let mockIsPremium = true;
vi.mock('../hooks/useSubscription', () => ({
  getSubscriptionStatus: () => ({ isPremium: mockIsPremium }),
}));

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  mockIsPremium = true;
});

describe('buildSessionActivities', () => {
  it('returns 4–6 activities for new user (no FSRS, no category SR)', () => {
    const acts = buildSessionActivities('A1');
    expect(acts.length).toBeGreaterThanOrEqual(4);
    expect(acts.length).toBeLessThanOrEqual(6);
  });

  it('always includes exactly one Croatia activity', () => {
    const acts = buildSessionActivities('A1');
    const croatiaActs = acts.filter((a) => CROATIA_IDS.has(a.id));
    expect(croatiaActs).toHaveLength(1);
  });

  it('includes cityofday as croatia activity when not visited today', () => {
    localStorage.removeItem('nh_cityofday_date');
    const acts = buildSessionActivities('A2');
    expect(acts.find((a) => a.id === 'cityofday')).toBeTruthy();
  });

  it('excludes cityofday when already visited today, rotates instead', () => {
    const today = localDateStr();
    localStorage.setItem('nh_cityofday_date', today);
    const acts = buildSessionActivities('A2');
    expect(acts.find((a) => a.id === 'cityofday')).toBeFalsy();
  });

  it('only includes exercises at or below user CEFR level', () => {
    const acts = buildSessionActivities('A1');
    // B1+ exercises should not appear in an A1 session (case drills are A1 now,
    // so the locked examples here are verb/syntax tiers).
    const b1Exercises = ['aspectdrill', 'clitic', 'future'];
    for (const ex of b1Exercises) {
      expect(acts.find((a) => a.screen === ex)).toBeFalsy();
    }
  });

  it('does not repeat exercises from nh_recent_exercises', () => {
    localStorage.setItem(
      'nh_recent_exercises',
      JSON.stringify(['mcgame', 'flashcards', 'review', 'znam', 'cloze', 'typing']),
    );
    const acts = buildSessionActivities('B1');
    const recentIds = ['mcgame', 'flashcards', 'review', 'znam', 'cloze', 'typing'];
    for (const act of acts) {
      if (!CROATIA_IDS.has(act.id)) {
        expect(recentIds).not.toContain(act.screen);
      }
    }
  });

  it('falls back to all unlocked exercises when all are in nh_recent_exercises', () => {
    // Mark every known screen as recent to trigger the fallback branch
    const allScreens = [
      'flashcards',
      'mcgame',
      'match',
      'review',
      'znam',
      'qwords',
      'genderdrill',
      'cloze',
      'unjumble',
      'prepdrill',
      'negation',
      'sentbuild',
      'sentencetiles',
      'typing',
      'speaking_sprint',
      'aspectdrill',
      'accusativedrill',
      'future',
      'comparatives',
      'clitic',
      'writing',
      'dictation',
    ];
    localStorage.setItem('nh_recent_exercises', JSON.stringify(allScreens));
    // A1 user — only A1/A2 exercises are unlocked, but all are "recent"
    // The fallback branch fires, returning full unlocked pool ignoring recency
    const acts = buildSessionActivities('A1');
    // Croatia slot always included, so we get at least 2 activities (fill + croatia)
    expect(acts.length).toBeGreaterThanOrEqual(2);
  });

  it('handles corrupt nh_recent_exercises JSON gracefully', () => {
    // Store invalid JSON to trigger the catch branch
    localStorage.setItem('nh_recent_exercises', '{invalid json}');
    // Should not throw; returns full exercise pool instead
    const acts = buildSessionActivities('A1');
    expect(acts.length).toBeGreaterThanOrEqual(4); // Should have normal session size
  });

  it('includes FSRS review activity when getDueReviews returns items', async () => {
    // Import the mocked function and configure it
    const srs = await import('../lib/srs');
    const getDueReviews = vi.mocked(srs.getDueReviews);
    getDueReviews.mockReturnValue([{ word: 'test' }]);
    const acts = buildSessionActivities('A1');
    // Should include 'srsreview' activity from Priority 1
    expect(acts.find((a) => a.id === 'srsreview')).toBeTruthy();
  });

  it('includes adaptive category activity when getDueCategoryQueue returns items', async () => {
    // Import the mocked function and configure it
    const adaptive = await import('../lib/adaptive');
    const getDueCategoryQueue = vi.mocked(adaptive.getDueCategoryQueue);
    getDueCategoryQueue.mockReturnValue([{ category: 'genitive', difficulty: 3 }]);
    // genitive maps to 'genitivedrill' (A1) — unlocked for an A2 user.
    const acts = buildSessionActivities('A2');
    expect(acts.find((a) => a.screen === 'genitivedrill')).toBeTruthy();
  });

  it('CEFR-gates the adaptive pick: an A1 user does NOT get a locked higher-tier drill', async () => {
    const adaptive = await import('../lib/adaptive');
    // The full case system is A1 now, so use a genuinely higher-tier category:
    // aspect-imperfective → aspectdrill (B1), locked for an A1 user.
    vi.mocked(adaptive.getDueCategoryQueue).mockReturnValue([
      { category: 'aspect-imperfective', difficulty: 3 },
    ]);
    const acts = buildSessionActivities('A1');
    // aspectdrill is B1 — locked for A1. The adaptive slot is skipped and the
    // guaranteed-grammar slot (G2) still backfills a level-appropriate grammar drill.
    expect(acts.some((a) => a.screen === 'aspectdrill')).toBe(false);
    expect(acts.some((a) => GRAMMAR_STRUCTURE_CATEGORIES.has(a.category))).toBe(true);
  });
});

describe('markDoneInSession', () => {
  it('adds id to completedIds', () => {
    const session: DailySession = {
      date: localDateStr(),
      activities: [{ id: 'cloze', label: 'Sentence Cloze', screen: 'cloze', category: 'genitive' }],
      completedIds: [],
      estimatedMinutes: 5,
    };
    const updated = markDoneInSession(session, 'cloze');
    expect(updated.completedIds).toContain('cloze');
  });

  it('is idempotent — double-call does not duplicate', () => {
    const session: DailySession = {
      date: localDateStr(),
      activities: [{ id: 'cloze', label: 'Sentence Cloze', screen: 'cloze', category: 'genitive' }],
      completedIds: ['cloze'],
      estimatedMinutes: 5,
    };
    const updated = markDoneInSession(session, 'cloze');
    expect(updated.completedIds.filter((id) => id === 'cloze')).toHaveLength(1);
  });
});

describe('recordSessionComplete', () => {
  it('writes to nh_session_history with today as key', () => {
    const today = localDateStr();
    recordSessionComplete(today);
    const history = JSON.parse(localStorage.getItem('nh_session_history') || '{}');
    expect(history[today]).toBe(true);
  });

  it('merges with existing nh_session_history entries', () => {
    const today = localDateStr();
    const d = new Date();
    d.setDate(d.getDate() - 1);
    // localDateStr, not toISOString — mixing the two in one test makes
    // "yesterday" collide with (or skip past) "today" in off-UTC timezones.
    const yesterday = localDateStr(d);
    localStorage.setItem('nh_session_history', JSON.stringify({ [yesterday]: true }));
    recordSessionComplete(today);
    const history = JSON.parse(localStorage.getItem('nh_session_history') || '{}') as Record<
      string,
      boolean
    >;
    expect(history[today]).toBe(true);
    expect(history[yesterday]).toBe(true); // prior entry preserved
  });

  it('handles corrupt nh_session_history JSON gracefully', () => {
    // Store invalid JSON to trigger the catch branch
    localStorage.setItem('nh_session_history', '{bad json}');
    const today = localDateStr();
    // Should not throw; silently fails and skips writing
    recordSessionComplete(today);
    // localStorage should still contain the bad data (nothing changed)
    expect(localStorage.getItem('nh_session_history')).toBe('{bad json}');
  });
});

describe('useDailySession — rotation memory + completion (hook)', () => {
  it('records a completed activity screen in nh_recent_exercises (the missing write)', () => {
    const { result } = renderHook(() => useDailySession('A2'));
    const first = result.current.session.activities[0]!;
    act(() => {
      result.current.markDone(first.screen);
    });
    const recent = JSON.parse(localStorage.getItem('nh_recent_exercises') || '[]') as string[];
    expect(recent).toContain(first.screen);
  });

  it('REGRESSION (bug #1): completing every activity reaches a real, visible complete state — it does NOT silently auto-regenerate', () => {
    // The session used to rebuild itself the instant the last activity was done,
    // erasing the "Session Complete!" moment and making it feel endless. The
    // complete state must now persist so the celebration + next-steps render.
    const { result } = renderHook(() => useDailySession('A2'));
    const firstIds = result.current.session.activities.map((a) => a.id);
    expect(firstIds.length).toBeGreaterThan(0);
    act(() => {
      firstIds.forEach((id) => result.current.markDone(id));
    });
    expect(result.current.isComplete).toBe(true);
    expect(result.current.progress).toBe(1);
    // Bonus next-steps surface only once complete.
    expect(result.current.bonusActivities.length).toBeGreaterThan(0);
  });

  it('completing a production activity records it for recency rotation; the rep COUNT now lives in useAward (Rec #6)', () => {
    const { result } = renderHook(() => useDailySession('B1'));
    const productionScreens = [
      'dialogue',
      'writing',
      'shadowing',
      'speaking',
      'production_drill',
      'dictation',
      'speaking_sprint', // Wave 3: rejoined PRODUCTION_POOL (browser speech only)
    ];
    const prod = result.current.session.activities.find((a) =>
      productionScreens.includes(a.screen),
    );
    expect(prod, 'a B1 session must contain a production activity').toBeTruthy();
    act(() => {
      result.current.markDone(prod!.screen);
    });
    // markDone still records production recency (3-day rotation of the slot)…
    const recent = JSON.parse(localStorage.getItem('nh_recent_production') || '[]') as Array<{
      screen: string;
    }>;
    expect(recent.some((e) => e.screen === prod!.screen)).toBe(true);
    // …but no longer increments the rep metric — that moved to the central
    // useAward completion point so it also captures Practice-tab production.
    expect(localStorage.getItem('nh_production_reps')).toBeNull();
  });

  it('startFreshSession builds a new non-empty set on demand (the explicit "keep going" path)', () => {
    const { result } = renderHook(() => useDailySession('A2'));
    const firstIds = result.current.session.activities.map((a) => a.id);
    act(() => {
      firstIds.forEach((id) => result.current.markDone(id));
    });
    expect(result.current.isComplete).toBe(true);
    act(() => {
      result.current.startFreshSession();
    });
    // A fresh session: progress reset, not complete, non-empty activities.
    expect(result.current.isComplete).toBe(false);
    expect(result.current.session.completedIds).toEqual([]);
    expect(result.current.session.activities.length).toBeGreaterThan(0);
  });
});

describe('buildSessionActivities — difficulty bias (defect #1)', () => {
  it('biases the fill toward harder content for an advanced user (B2)', () => {
    // The difficulty bias is asserted by TIER/CATEGORY, not hard-coded screen
    // names: a B2 session must never pull in tier-1 recognition games as fill,
    // and must surface grammar/structure (the guaranteed slot). Name-listing the
    // "hard" screens was brittle — it flaked once the tier-4 set grew and the
    // unseeded rnd tiebreak picked a tier-4 drill not on the list.
    const EASY_TIER1 = ['flashcards', 'mcgame', 'match'];
    for (let i = 0; i < 5; i++) {
      const acts = buildSessionActivities('B2');
      const screens = acts.map((a) => a.screen);
      for (const easy of EASY_TIER1) expect(screens).not.toContain(easy);
      expect(acts.some((a) => GRAMMAR_STRUCTURE_CATEGORIES.has(a.category))).toBe(true);
    }
  });

  it('keeps an A1 user on easy types (only tier 1–2 unlocked anyway)', () => {
    const screens = buildSessionActivities('A1').map((a) => a.screen);
    // No advanced-tier type should appear at A1 (they are CEFR-locked).
    for (const hard of ['sentbuild', 'aspectdrill', 'clitic', 'future']) {
      expect(screens).not.toContain(hard);
    }
  });
});

describe('buildSessionActivities — guaranteed grammar/structure slot (G2/G4)', () => {
  // The contract this slot guarantees: at least one case/verb/structure activity
  // per session. Uses the source-of-truth set (no duplicated mirror to drift).
  const hasGrammar = (acts: SessionActivity[]) =>
    acts.some((a) => GRAMMAR_STRUCTURE_CATEGORIES.has(a.category));

  it('forces in a grammar/structure drill when the adaptive pick is null (empty queue)', () => {
    // Default mock: getDueCategoryQueue → [] → P2 adds nothing. Without G2 a B1
    // session could be all vocab + Croatia.
    const acts = buildSessionActivities('B1');
    expect(hasGrammar(acts)).toBe(true);
  });

  it('forces in a grammar/structure drill even when the adaptive pick is VOCAB', async () => {
    const adaptive = await import('../lib/adaptive');
    vi.mocked(adaptive.getDueCategoryQueue).mockReturnValue([
      { category: 'vocab-a2', difficulty: 1 },
    ]);
    const acts = buildSessionActivities('B1');
    // P2 adds the vocab drill (znam); G2 must still guarantee grammar.
    expect(acts.some((a) => a.screen === 'znam')).toBe(true);
    expect(hasGrammar(acts)).toBe(true);
  });

  it('the guaranteed slot is level-appropriate: an A1 user gets an A1 case/grammar drill, not a buried higher tier', () => {
    // The full case system now unlocks at A1, so an A1 user's guaranteed grammar
    // slot is one of the A1 case drills (case-tier 3–4). The P3 tier sort (target
    // tier 1) would push them below the recognition games; G4 exempts the
    // guaranteed slot so a case/grammar drill appears anyway.
    const A1_GRAMMAR = [
      'nomdrill',
      'genitivedrill',
      'accusativedrill',
      'locdrill',
      'instrumental',
      // 7a rotation expansion — new A1 grammar-structure drills are equally
      // valid guaranteed-slot picks.
      'numtime',
      'possess',
      'cityloc',
      // Wave 1 catchment — vocative (A1, grammar-structure category) joined the
      // pool, so the guaranteed slot may pick it too.
      'vocative',
    ];
    const acts = buildSessionActivities('A1');
    expect(acts.some((a) => A1_GRAMMAR.includes(a.screen))).toBe(true);
  });

  it('DISPLACES a vocab fill — does not lengthen the session beyond fillTarget', () => {
    // Non-Croatia activities must stay ≤ fillTarget (4) whether or not G2 fires.
    const nonCroatia = buildSessionActivities('A2').filter((a) => !CROATIA_IDS.has(a.id));
    expect(nonCroatia.length).toBeLessThanOrEqual(4);
    expect(hasGrammar(nonCroatia)).toBe(true);
  });

  it('selectGuaranteedGrammar picks the nearest-CEFR drill at every level — incl. C1/C2', () => {
    // Regression: cefrRank must rank on the full A1–C2 scale. With the wrong
    // (A1–B2-only) ranker, cefrRank('C1') was -1, so |0-(-1)|=1 made A1 nomdrill
    // the "nearest" pick for advanced users — the inverse of intent.
    // Assert by the picked drill's CEFR LEVEL (robust as more drills are added).
    const screenCefr = new Map(CEFR_EXERCISE_POOL.map((e) => [e.screen, e.cefr]));
    const pickCefr = (lvl: string) => {
      const screen = selectGuaranteedGrammar(lvl, new Set(), [])?.screen;
      return screen ? screenCefr.get(screen) : undefined;
    };
    expect(pickCefr('A1')).toBe('A1'); // only A1 grammar is nomdrill
    // C1: nearest grammar is a C1 drill (discourse/nominalization), never A1.
    expect(pickCefr('C1')).toBe('C1');
    // C2: the c2drill (task #45) is the pool's first C2 grammar drill — C2
    // users now get true C2 structure work, not the old C1 fallback.
    expect(pickCefr('C2')).toBe('C2');
  });

  it('does not double up grammar when the adaptive pick already provides it', async () => {
    const adaptive = await import('../lib/adaptive');
    vi.mocked(adaptive.getDueCategoryQueue).mockReturnValue([
      { category: 'genitive', difficulty: 3 },
    ]);
    const acts = buildSessionActivities('A2');
    // P2 adds genitivedrill (grammar); G2 must not exceed the displace invariant.
    expect(acts.some((a) => a.screen === 'genitivedrill')).toBe(true);
    const nonCroatia = acts.filter((a) => !CROATIA_IDS.has(a.id));
    expect(nonCroatia.length).toBeLessThanOrEqual(4);
  });
});

describe('shouldAutoCompleteOnReturn — Croatia/reference slot completion', () => {
  it('REGRESSION: every always-present Croatia slot auto-completes on return (no stranding)', () => {
    // The Priority-4 Croatia slot is one of these; none self-grade on normal
    // view, so without this the session could never complete (blocking regen).
    for (const screen of CROATIA_POOL.map((c) => c.screen)) {
      expect(SESSION_AUTOCOMPLETE_SCREENS.has(screen)).toBe(true);
      expect(shouldAutoCompleteOnReturn(screen, null)).toBe(true); // completes even w/o a signal
    }
  });

  it('a graded screen still requires its real completion signal', () => {
    expect(shouldAutoCompleteOnReturn('genitivedrill', null)).toBe(false);
    expect(shouldAutoCompleteOnReturn('genitivedrill', 'genitivedrill')).toBe(true);
  });

  it('returns false when there is no pending activity', () => {
    expect(shouldAutoCompleteOnReturn(null, null)).toBe(false);
    expect(shouldAutoCompleteOnReturn(null, 'cityofday')).toBe(false);
  });

  it('INVARIANT: never auto-completes a graded/production screen (no pool overlap)', () => {
    // Locks the safety property: only reference (Croatia) slots auto-complete on
    // view. A graded or production screen must still fire its real signal — so a
    // future pool edit that collided ids would fail here, not silently credit.
    const nonReference = [
      'flashcards',
      'mcgame',
      'match',
      'review',
      'znam',
      'cloze',
      'genitivedrill',
      'accusativedrill',
      'future',
      'aspectdrill',
      'clitic',
      'shadowing',
      'production_drill',
      'dictation',
    ];
    for (const s of nonReference) {
      expect(SESSION_AUTOCOMPLETE_SCREENS.has(s)).toBe(false);
      expect(shouldAutoCompleteOnReturn(s, null)).toBe(false);
    }
  });
});

describe('7a — A1 rotation expansion', () => {
  it('an A1 user has more than 10 distinct fill-pool drills to rotate through', () => {
    const a1 = CEFR_EXERCISE_POOL.filter((ex) => ex.cefr === 'A1');
    expect(a1.length).toBeGreaterThan(10);
    // The 7a additions specifically:
    const screens = new Set(a1.map((ex) => ex.screen));
    for (const s of [
      'boje',
      'numtime',
      'wordsprint',
      'possess',
      'cityloc',
      'genderdrill',
      'typing',
    ]) {
      expect(screens.has(s), `expected ${s} at A1`).toBe(true);
    }
  });

  it('the 7a screens are unique pool entries (no duplicate ids/screens)', () => {
    const ids = CEFR_EXERCISE_POOL.map((ex) => ex.id);
    expect(new Set(ids).size).toBe(ids.length);
    const screens = CEFR_EXERCISE_POOL.map((ex) => ex.screen);
    expect(new Set(screens).size).toBe(screens.length);
  });
});

// ── Wave 2: CEFR-gated Croatia rotation ──────────────────────────────────────
describe('Wave 2 — Croatia slot CEFR gating and rotation', () => {
  const gatedIds = CROATIA_POOL.filter((c) => c.cefr && c.cefr !== 'A1').map((c) => c.id);

  it('has gated entries to test (pool sanity)', () => {
    expect(gatedIds.length).toBeGreaterThan(0);
  });

  it('never serves a CEFR-gated culture entry to an A1 user', () => {
    // Rotation is day-of-month deterministic; force the rotation branch by
    // marking cityofday visited, then assert across a spread of builds.
    localStorage.setItem('nh_cityofday_date', localDateStr());
    for (let i = 0; i < 5; i++) {
      const acts = buildSessionActivities('A1');
      const croatia = acts.filter((a) => CROATIA_IDS.has(a.id));
      expect(croatia).toHaveLength(1);
      expect(gatedIds).not.toContain(croatia[0]!.id);
    }
  });

  it('C2 rotation draws from the full pool (gated entries reachable)', () => {
    // With cityofday visited, the served entry is rotation[dayOfMonth % len] —
    // verify the C2-eligible rotation equals the whole pool minus cityofday by
    // checking the served entry matches that formula.
    localStorage.setItem('nh_cityofday_date', localDateStr());
    const rotation = CROATIA_POOL.filter((c) => c.screen !== 'cityofday');
    const expected = rotation[new Date().getDate() % rotation.length]!;
    const acts = buildSessionActivities('C2');
    const croatia = acts.filter((a) => CROATIA_IDS.has(a.id));
    expect(croatia).toHaveLength(1);
    expect(croatia[0]!.id).toBe(expected.id);
  });

  it('cityofday keeps first claim on the slot when not yet visited', () => {
    localStorage.removeItem('nh_cityofday_date');
    for (const lvl of ['A1', 'B1', 'C2']) {
      const acts = buildSessionActivities(lvl);
      expect(acts.find((a) => a.id === 'cityofday')).toBeTruthy();
    }
  });

  it('every Wave-2 Croatia entry auto-completes on return (derived set)', () => {
    for (const c of CROATIA_POOL) {
      expect(SESSION_AUTOCOMPLETE_SCREENS.has(c.screen), c.screen).toBe(true);
      expect(shouldAutoCompleteOnReturn(c.screen, null)).toBe(true);
    }
  });

  it('Croatia pool ids and screens are unique and id === screen (launch contract)', () => {
    const ids = CROATIA_POOL.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const c of CROATIA_POOL) expect(c.id).toBe(c.screen);
  });
});

// ── Wave 4: reference (browse) entries ───────────────────────────────────────
describe('Wave 4 — reference entries', () => {
  const referenceScreens = CEFR_EXERCISE_POOL.filter((e) => e.reference).map((e) => e.screen);

  it('has reference entries to test (pool sanity)', () => {
    expect(referenceScreens.length).toBeGreaterThan(0);
  });

  it('every reference entry auto-completes on return', () => {
    for (const s of referenceScreens) {
      expect(SESSION_AUTOCOMPLETE_SCREENS.has(s), s).toBe(true);
      expect(shouldAutoCompleteOnReturn(s, null)).toBe(true);
    }
  });

  it('graded pool entries never auto-complete (reference flag is the only path in)', () => {
    for (const e of CEFR_EXERCISE_POOL) {
      if (e.reference) continue;
      // Croatia-slot screens are a separate auto-complete contract; no graded
      // pool entry shares a screen with CROATIA_POOL (checked below).
      expect(SESSION_AUTOCOMPLETE_SCREENS.has(e.screen), e.screen).toBe(false);
    }
  });

  it('no pool screen doubles as a Croatia-slot screen', () => {
    const croatia = new Set(CROATIA_POOL.map((c) => c.screen));
    for (const e of CEFR_EXERCISE_POOL) {
      expect(croatia.has(e.screen), e.screen).toBe(false);
    }
  });

  it('serves AT MOST ONE reference entry per session (browse never crowds drills)', () => {
    const refSet = new Set(referenceScreens);
    for (const lvl of ['A1', 'A2', 'B1', 'C2']) {
      for (let i = 0; i < 10; i++) {
        localStorage.clear();
        const refs = buildSessionActivities(lvl).filter((a) => refSet.has(a.screen));
        expect(refs.length, `${lvl}: ${refs.map((a) => a.screen).join(', ')}`).toBeLessThanOrEqual(
          1,
        );
      }
    }
  });
});

// ── Wave 8: premium-tagged entries ───────────────────────────────────────────
describe('Wave 8 — premium gate on pool draws', () => {
  const premiumScreens = CEFR_EXERCISE_POOL.filter((e) => e.premium).map((e) => e.screen);

  it('has premium entries to test (pool sanity)', () => {
    expect(premiumScreens).toEqual(expect.arrayContaining(['maja', 'live_tutor']));
  });

  it('a free user is NEVER served a premium entry — sessions or bonus round', () => {
    mockIsPremium = false;
    const premiumSet = new Set(premiumScreens);
    for (let i = 0; i < 20; i++) {
      localStorage.clear();
      const acts = buildSessionActivities('C2');
      expect(acts.filter((a) => premiumSet.has(a.screen))).toEqual([]);
    }
    localStorage.clear();
    const { result } = renderHook(() => useDailySession('C2'));
    act(() => {
      result.current.session.activities.forEach((a) => result.current.markDone(a.id));
    });
    expect(result.current.isComplete).toBe(true);
    expect(result.current.bonusActivities.filter((a) => premiumSet.has(a.screen))).toEqual([]);
  });

  it('premium entries never auto-complete (graded contract preserved)', () => {
    for (const s of premiumScreens) {
      expect(SESSION_AUTOCOMPLETE_SCREENS.has(s), s).toBe(false);
    }
  });
});

// ── Wave 9: mic-required entries ─────────────────────────────────────────────
describe('Wave 9 — mic gate on pool draws', () => {
  const micScreens = CEFR_EXERCISE_POOL.filter((e) => e.micRequired).map((e) => e.screen);

  it('has mic-required entries to test (pool sanity)', () => {
    expect(micScreens).toEqual(expect.arrayContaining(['pronunciation_assess']));
  });

  it('a mic-blocked user is NEVER served a mic-required entry', () => {
    const micSet = new Set(micScreens);
    for (const state of ['denied', 'unsupported']) {
      for (let i = 0; i < 10; i++) {
        localStorage.clear();
        localStorage.setItem('nh_mic_state', state);
        const acts = buildSessionActivities('C2');
        expect(
          acts.filter((a) => micSet.has(a.screen)),
          state,
        ).toEqual([]);
      }
    }
  });
});
