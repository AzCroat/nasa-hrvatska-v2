/**
 * dailyQuestOnReplay.test.ts — a daily quest must be reachable by an exercise you have
 * already completed.
 *
 * THE DEFECT, DEMONSTRATED (2026-09-26). `completeExercise` marked the daily quest below
 * the already-credited early return that `stats.vs` guards. A daily quest is DAY-scoped;
 * `vs` is ONCE-EVER. Coupling them to opposite lifetimes meant a learner who finished a
 * drill last month and finished it again today got **no quest credit at all** — and the
 * further they progressed through the app, the fewer screens could advance today's quests.
 * Driven straight against the authority before the fix: first run marked `grammar`, the
 * replay marked nothing.
 *
 * This is 140 screens at once, which is the argument for putting credit in one place.
 *
 * THE TIER-2 HALF IS WHY A BARE MOVE WOULD HAVE BEEN WRONG. `markQuest` also counts per
 * day and auto-promotes the tier-2 quest on the second call, and tier 2 means "do TWO
 * grammar exercises today". Marking unconditionally on replay would let ONE drill,
 * replayed, satisfy it. `markQuestForExercise` keys its guard on the exercise, so a
 * replay advances the quest and a second replay of the SAME exercise does not.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// NO MOCK ON `markQuest`, deliberately. `markQuestForExercise` calls it through a
// module-local reference, so a `vi.mock` of the namespace cannot observe that call — the
// first draft of this test asserted on a spy that was never reached and read as three
// failures of production code. The real effect is a per-day localStorage key, so assert
// THAT: it is also what `DailyQuests` actually reads.
vi.mock('../lib/teachPractice', () => ({
  recordScreenPractised: vi.fn(),
  recordLessonTaught: vi.fn(),
}));
vi.mock('../lib/masteryLedger', () => ({ recordExerciseOutcome: vi.fn() }));
vi.mock('../lib/sessionCategory', () => ({ consumeSessionCategoryOutcome: vi.fn() }));

import { completeExercise } from '../hooks/useExerciseCompletion';
import { localDateStr } from '../lib/dateUtils';

const D = () => localDateStr();
/** What `DailyQuests` reads: the tier-1 marker for today. */
const questMarked = (id: string) => localStorage.getItem(`nh_quest_${id}_${D()}`) === '1';
/** The per-day count that drives tier-2 auto-promotion. */
const questCount = (id: string) => Number(localStorage.getItem(`nh_quest_${id}_count_${D()}`) || 0);

interface S {
  vs: string[];
  gc: number;
  lc: number;
}

function finish(key: string, stats: S): S {
  let out = stats;
  completeExercise({
    key,
    score: 10,
    total: 10,
    xp: 30,
    stats: out,
    setStats: (fn) => {
      out = fn(out) as S;
    },
    writeDelta: vi.fn(),
    award: vi.fn(),
  });
  return out;
}

describe('the daily quest and the once-ever completion flag have different lifetimes', () => {
  beforeEach(() => localStorage.clear());

  it('a replay of an already-completed exercise still marks the daily quest', () => {
    let stats: S = { vs: [], gc: 0, lc: 0 };
    stats = finish('genitive', stats);
    expect(questMarked('grammar'), 'first completion').toBe(true);
    expect(stats.gc, 'the counter moves once').toBe(1);

    localStorage.clear(); // a different DAY: the per-day guards are gone, `vs` is not
    stats = finish('genitive', stats);
    expect(
      questMarked('grammar'),
      'a learner who finished this last month got no quest credit for finishing it today',
    ).toBe(true);
    expect(stats.gc, 'but the mastery counter must NOT move again').toBe(1);
  });

  it('the same exercise twice in one day marks the quest once, so tier 2 needs two exercises', () => {
    let stats: S = { vs: [], gc: 0, lc: 0 };
    stats = finish('genitive', stats);
    stats = finish('genitive', stats);
    expect(questMarked('grammar')).toBe(true);
    expect(
      questCount('grammar'),
      'replaying one drill twice must not satisfy "do two grammar exercises today"',
    ).toBe(1);
    expect(questMarked('grammar2'), 'tier 2 auto-promoted off one drill').toBe(false);
    expect(stats.gc, 'and the mastery counter still moved exactly once').toBe(1);
  });

  it('two DIFFERENT exercises in one day mark it twice, which is what tier 2 means', () => {
    let stats: S = { vs: [], gc: 0, lc: 0 };
    stats = finish('genitive', stats);
    stats = finish('accusative', stats);
    expect(questCount('grammar')).toBe(2);
    expect(questMarked('grammar2'), 'two distinct exercises DO earn tier 2').toBe(true);
    expect(stats.gc, 'two distinct exercises, two completions').toBe(2);
  });

  it('a FAILED attempt marks nothing — the quest says "complete", not "attempt"', () => {
    let stats: S = { vs: [], gc: 0, lc: 0 };
    completeExercise({
      key: 'genitive',
      score: 3,
      total: 10, // below LESSON_PASS_THRESHOLD; `genitive` is a gated row
      xp: 30,
      stats,
      setStats: (fn) => {
        stats = fn(stats) as S;
      },
      writeDelta: vi.fn(),
      award: vi.fn(),
    });
    expect(questMarked('grammar')).toBe(false);
    expect(stats.gc).toBe(0);
  });
});
