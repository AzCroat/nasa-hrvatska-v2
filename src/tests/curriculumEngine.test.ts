// src/tests/curriculumEngine.test.ts
//
// THE SEQUENCING ENGINE (Wave 1, 2026-08-28).
//
// getNextLesson decides what a learner is taught. Two properties matter more
// than the rest and are pinned hardest:
//
//   1. THE MIGRATION TRAP. Every existing learner has zero completed lessons on
//      the day this ships. A certified C1 learner must not be greeted with A1
//      lesson 1. The engine infers from certification rather than backfilling
//      fake completion records — see the header of src/lib/curriculum.ts.
//
//   2. IT ALWAYS ANSWERS, whenever there is a spine to answer from. A teaching
//      slot that silently produces nothing is the old behaviour with extra code.

import { describe, it, expect } from 'vitest';
import { getNextLesson, levelProgress, type CurriculumEntry } from '../lib/curriculum';
import type { CEFRLevel } from '../types';

/** Compact spine builder: level → how many lessons, linear prerequisites. */
function makeSpine(counts: Partial<Record<CEFRLevel, number>>): CurriculumEntry[] {
  const out: CurriculumEntry[] = [];
  for (const [level, n] of Object.entries(counts)) {
    for (let i = 1; i <= (n as number); i++) {
      out.push({
        id: `${level}-${i}`,
        level: level as CEFRLevel,
        order: i,
        prerequisites: i > 1 ? [`${level}-${i - 1}`] : [],
        objectives: [`Do the ${level} thing number ${i}`],
      });
    }
  }
  return out;
}

const FULL = makeSpine({ A1: 5, A2: 5, B1: 5, B2: 5, C1: 5, C2: 5 });
const ALL_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

describe('THE MIGRATION TRAP: an existing learner is not sent back to lesson one', () => {
  it('a certified C1 learner with NO completions starts at C1, not A1', () => {
    // The single most important assertion in this file. Before the certification
    // inference, this returned 'A1-1' — every existing user demoted to the
    // alphabet on the morning the curriculum shipped.
    const step = getNextLesson({ spine: FULL, completed: [], certifiedLevel: 'C1' });
    expect(step?.entry.id).toBe('C1-1');
    expect(step?.entry.level).toBe('C1');
  });

  it('holds at every level — nobody is sent below their certification', () => {
    for (const level of ALL_LEVELS) {
      const step = getNextLesson({ spine: FULL, completed: [], certifiedLevel: level });
      expect(step?.entry.level, `certified ${level} was sent to ${step?.entry.level}`).toBe(level);
      expect(step?.entry.order).toBe(1);
    }
  });

  it('the inference is NOT written down as a completion', () => {
    // levelProgress counts real completions only. A certified B1 learner has done
    // no A1 lessons and the UI must say so rather than claim credit for them.
    const p = levelProgress(FULL, [], 'A1');
    expect(p).toEqual({ done: 0, total: 5 });
  });

  it('a lower-level prerequisite is satisfied by certification, not by pretending', () => {
    const spine: CurriculumEntry[] = [
      { id: 'a1-cases', level: 'A1', order: 1, prerequisites: [], objectives: ['x'] },
      { id: 'b1-genitive', level: 'B1', order: 1, prerequisites: ['a1-cases'], objectives: ['y'] },
    ];
    // Certified B1: A1 sits strictly below, so the prerequisite is met.
    expect(getNextLesson({ spine, completed: [], certifiedLevel: 'B1' })?.entry.id).toBe(
      'b1-genitive',
    );
  });
});

describe('ordinary progression', () => {
  it('a new A1 learner starts at the first lesson', () => {
    const step = getNextLesson({ spine: FULL, completed: [], certifiedLevel: 'A1' });
    expect(step?.entry.id).toBe('A1-1');
    expect(step?.isReview).toBe(false);
  });

  it('walks the spine in order as lessons are completed', () => {
    const done: string[] = [];
    for (let i = 1; i <= 5; i++) {
      const step = getNextLesson({ spine: FULL, completed: done, certifiedLevel: 'A1' });
      expect(step?.entry.id).toBe(`A1-${i}`);
      done.push(`A1-${i}`);
    }
  });

  it('respects a prerequisite that is not yet met', () => {
    // A1-3 requires A1-2. With only A1-1 done, the answer must be A1-2 — never
    // skipping ahead to something the learner is not ready for.
    const step = getNextLesson({ spine: FULL, completed: ['A1-1'], certifiedLevel: 'A1' });
    expect(step?.entry.id).toBe('A1-2');
  });

  it('moves up a level once the current one is finished and unlocked', () => {
    const all = ['A1-1', 'A1-2', 'A1-3', 'A1-4', 'A1-5'];
    const step = getNextLesson({
      spine: FULL,
      completed: all,
      certifiedLevel: 'A1',
      unlockedLevel: 'A2',
    });
    expect(step?.entry.id).toBe('A2-1');
    expect(step?.isReview).toBe(false);
  });

  it('does NOT move up when the next level is still locked', () => {
    // The verification gate holds content back on purpose; the teaching slot must
    // not become a way around it.
    const all = ['A1-1', 'A1-2', 'A1-3', 'A1-4', 'A1-5'];
    const step = getNextLesson({
      spine: FULL,
      completed: all,
      certifiedLevel: 'A1',
      unlockedLevel: 'A1',
    });
    expect(step?.entry.level).toBe('A1');
    expect(step?.isReview).toBe(true);
  });
});

describe('review mode is honest about being review', () => {
  it('flags a re-served lesson rather than dressing it as new', () => {
    const all = ['C2-1', 'C2-2', 'C2-3', 'C2-4', 'C2-5'];
    const step = getNextLesson({ spine: FULL, completed: all, certifiedLevel: 'C2' });
    expect(step).not.toBeNull();
    expect(step?.isReview).toBe(true);
    expect(step?.reason.toLowerCase()).toContain('review');
  });

  it('a learner at the very top of the curriculum still gets something', () => {
    const everything = FULL.map((e) => e.id);
    const step = getNextLesson({ spine: FULL, completed: everything, certifiedLevel: 'C2' });
    expect(step).not.toBeNull();
    expect(step?.isReview).toBe(true);
  });
});

describe('the null contract', () => {
  it('returns null ONLY when there is no spine at all', () => {
    expect(getNextLesson({ spine: [], completed: [], certifiedLevel: 'A1' })).toBeNull();
  });

  it('never returns null for a non-empty spine, across an exhaustive matrix', () => {
    // Every level × every prefix of completion, including states that cannot
    // arise from normal use (completed out of order, completed above your level).
    for (const level of ALL_LEVELS) {
      for (const unlocked of ALL_LEVELS) {
        for (let n = 0; n <= FULL.length; n++) {
          const completed = FULL.slice(0, n).map((e) => e.id);
          const step = getNextLesson({
            spine: FULL,
            completed,
            certifiedLevel: level,
            unlockedLevel: unlocked,
          });
          expect(step, `null at level=${level} unlocked=${unlocked} completed=${n}`).not.toBeNull();
          expect(step?.entry.id).toBeTruthy();
        }
      }
    }
  });

  it('survives a spine with only one lesson', () => {
    const tiny = makeSpine({ A1: 1 });
    expect(getNextLesson({ spine: tiny, completed: [], certifiedLevel: 'A1' })?.entry.id).toBe(
      'A1-1',
    );
    expect(
      getNextLesson({ spine: tiny, completed: ['A1-1'], certifiedLevel: 'A1' }),
    ).not.toBeNull();
  });

  it('survives a learner whose level has no lessons at all', () => {
    // Mid-authoring reality: a wave lands for A1 before C2 exists.
    const partial = makeSpine({ A1: 3 });
    const step = getNextLesson({ spine: partial, completed: [], certifiedLevel: 'C2' });
    expect(step).not.toBeNull();
  });
});

describe('bad data cannot wall a learner out', () => {
  it('a prerequisite naming a lesson that does not exist is not a permanent block', () => {
    // The structural test catches the typo. The engine must not turn it into a
    // learner who is silently never taught anything again.
    const spine: CurriculumEntry[] = [
      { id: 'x', level: 'A1', order: 1, prerequisites: ['ghost'], objectives: ['x'] },
    ];
    const step = getNextLesson({ spine, completed: [], certifiedLevel: 'A1' });
    expect(step?.entry.id).toBe('x');
  });

  it('an unknown certified level degrades to A1 rather than throwing', () => {
    const step = getNextLesson({
      spine: FULL,
      completed: [],
      certifiedLevel: 'ZZ' as unknown as CEFRLevel,
    });
    expect(step).not.toBeNull();
  });

  it('accepts a Set or an array for completed, identically', () => {
    const a = getNextLesson({ spine: FULL, completed: ['A1-1'], certifiedLevel: 'A1' });
    const b = getNextLesson({ spine: FULL, completed: new Set(['A1-1']), certifiedLevel: 'A1' });
    expect(a?.entry.id).toBe(b?.entry.id);
  });
});

describe('the reason is checkable, never invented', () => {
  it('states the position in the level, which is true by construction', () => {
    const step = getNextLesson({ spine: FULL, completed: ['A1-1'], certifiedLevel: 'A1' });
    expect(step?.reason).toBe('Lesson 2 of 5 in A1');
  });

  it('never claims a measurement the engine did not make', () => {
    // The engine knows position and completion. It does not know accuracy, and
    // must never imply it does — the honesty rule the reason strings follow.
    for (const level of ALL_LEVELS) {
      const step = getNextLesson({ spine: FULL, completed: [], certifiedLevel: level });
      expect(step?.reason).not.toMatch(/%|accura|weakest|struggl/i);
    }
  });
});
