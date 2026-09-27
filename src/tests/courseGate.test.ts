// src/tests/courseGate.test.ts
//
// NEVER DRILL A CONCEPT THE COURSE TEACHES LATER (2026-09-27) — see lib/courseGate.ts.
//
// Measured before the fix, real builder, 40 builds per level, Unit 1 learner with the
// full spine: `genitivedrill` in 40 of 40 sessions at A2 on a lesson day, and at EVERY
// level (A1, A2, B1, C1) on the unit-test day, because the adaptive store's new-user
// first pick is the genitive and no slot below the teaching slot read the course.
// After: 0 of 40 everywhere, total activities per level unchanged.

import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../lib/srs', () => ({ getDueReviews: vi.fn(() => []) }));
let CERT = 'A1';
vi.mock('../lib/cefrCertification', () => ({
  getCertifiedLevel: vi.fn(() => CERT),
  getContentUnlockLevel: vi.fn((l: string) => l),
}));

import {
  buildSessionActivities,
  resolveAdaptiveActivity,
  selectGuaranteedGrammar,
} from '../hooks/useDailySession';
import { writeCurriculumSpine, markLessonComplete } from '../lib/curriculumProgress';
import { buildCourseUnits } from '../lib/courseUnits';
import {
  courseAhead,
  readCourseAhead,
  isAheadOfCourse,
  MODALITY_CATEGORIES,
} from '../lib/courseGate';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP } from '../lib/categoryRoutes';
import type { CurriculumEntry } from '../lib/curriculum';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const SPINE = CURRICULUM as unknown as CurriculumEntry[];
const UNITS = buildCourseUnits(SPINE);
const UNIT1 = UNITS[0]!.lessons.map((l) => l.id);
const DAY = '2026-09-01';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.clearAllMocks();
  CERT = 'A1';
});

describe('courseAhead — the pure rule', () => {
  it('the fixture is the real course: Unit 1 does not teach the genitive, a later unit does', () => {
    expect(UNITS.length).toBe(36);
    expect(UNIT1.map((id) => LESSON_TAUGHT_CATEGORY[id])).not.toContain('genitive');
    expect(Object.values(LESSON_TAUGHT_CATEGORY)).toContain('genitive');
  });

  it('for a Unit 1 learner the genitive and its drill are ahead; Unit 1’s own concepts are not', () => {
    const a = courseAhead(UNITS, new Set(UNIT1));
    expect(a.categories.has('genitive')).toBe(true);
    expect(a.screens.has(CATEGORY_SCREEN_MAP.genitive!)).toBe(true);
    for (const id of UNIT1) {
      const c = LESSON_TAUGHT_CATEGORY[id];
      if (c) expect(a.categories.has(c), `${id} → ${c}`).toBe(false);
    }
  });

  it('never gates a MODALITY — writing is practised at every level, not taught once at B2', () => {
    const a = courseAhead(UNITS, new Set(UNIT1));
    for (const m of MODALITY_CATEGORIES) expect(a.categories.has(m), m).toBe(false);
    // the real coupling that would otherwise take Guided Writing away from A1
    expect(Object.values(LESSON_TAUGHT_CATEGORY)).toContain('writing');
  });

  it('a concept revisited later is reached once ANY lesson teaching it is reached', () => {
    const genitiveLessons = SPINE.filter((l) => LESSON_TAUGHT_CATEGORY[l.id] === 'genitive');
    expect(genitiveLessons.length).toBeGreaterThan(1); // intro + deep
    const earliest = [...genitiveLessons].sort(
      (x, y) =>
        UNITS.findIndex((u) => u.lessons.includes(x)) -
        UNITS.findIndex((u) => u.lessons.includes(y)),
    )[0]!;
    const a = courseAhead(UNITS, new Set([...UNIT1, earliest.id]));
    expect(a.categories.has('genitive')).toBe(false);
    expect(a.reached.has('genitive')).toBe(true);
  });

  it('everything reached → nothing ahead; no units → nothing ahead', () => {
    expect(courseAhead(UNITS, new Set(SPINE.map((l) => l.id))).categories.size).toBe(0);
    expect(courseAhead([], new Set()).categories.size).toBe(0);
  });
});

describe('isAheadOfCourse', () => {
  const a = courseAhead(UNITS, new Set(UNIT1));
  it('an entry TAGGED with an ahead concept is ahead', () => {
    expect(isAheadOfCourse({ category: 'genitive', screen: 'anything' }, a)).toBe(true);
  });
  it('an untagged entry on a screen that drills only ahead concepts is ahead', () => {
    expect(
      isAheadOfCourse({ category: 'vocab-a2', screen: CATEGORY_SCREEN_MAP.genitive! }, a),
    ).toBe(true);
  });
  it('an entry tagged with a REACHED concept stays servable whatever screen it is on', () => {
    const reachedCat = [...a.reached][0]!;
    expect(reachedCat).toBeTruthy();
    expect(
      isAheadOfCourse({ category: reachedCat, screen: CATEGORY_SCREEN_MAP.genitive! }, a),
    ).toBe(false);
  });
  it('an entry tied to no lesson stays servable', () => {
    expect(isAheadOfCourse({ category: 'culture', screen: 'cityofday' }, a)).toBe(false);
  });
});

describe('readCourseAhead — from storage', () => {
  it('no spine means nothing is ahead (the session composes as it did before the course)', () => {
    const a = readCourseAhead();
    expect(a.categories.size + a.screens.size).toBe(0);
  });

  it('a new learner: the open unit is reached even before a lesson is read', () => {
    writeCurriculumSpine(SPINE);
    const a = readCourseAhead();
    expect(a.categories.has('genitive')).toBe(true);
    expect(a.categories.has(LESSON_TAUGHT_CATEGORY['pronouns-biti']!)).toBe(false);
  });

  it('a lesson read through the LIBRARY counts as taught', () => {
    writeCurriculumSpine(SPINE);
    const g = SPINE.find((l) => LESSON_TAUGHT_CATEGORY[l.id] === 'genitive')!;
    markLessonComplete(g.id, DAY);
    expect(readCourseAhead().categories.has('genitive')).toBe(false);
  });
});

describe('the session and the next-step engine obey it', () => {
  // resolveAdaptiveActivity is also getNextStep's discovery rung, so this covers both.
  it('the adaptive pick is the genitive with no course (non-vacuity), and not with one', () => {
    expect(resolveAdaptiveActivity('A2', new Set())?.category).toBe('genitive');
    writeCurriculumSpine(SPINE);
    expect(resolveAdaptiveActivity('A2', new Set())?.category).not.toBe('genitive');
  });

  // The DRAW sites (P2.7, the P3 fill, the bonus round) share entryServable. On the
  // days measured above the adaptive pick already supplied grammar, so P2.7 never ran
  // and a session test alone left this gate unexercised — mutation showed it. Drive
  // the guaranteed-grammar draw directly, where a certified C1 learner's whole
  // unlocked pool is on offer.
  it('the guaranteed-grammar draw serves a certified C1 Unit 1 learner only what the course has reached', () => {
    const drawn = (n: number) =>
      Array.from({ length: n }, () => selectGuaranteedGrammar('C1', new Set(), [])).filter(Boolean);
    const unGated = drawn(60);
    writeCurriculumSpine(SPINE);
    const ahead = readCourseAhead();
    // non-vacuity: with no course the draw DOES reach concepts Unit 1 has not taught
    expect(
      unGated.some((a) => isAheadOfCourse({ category: a!.category, screen: a!.screen }, ahead)),
    ).toBe(true);
    const gated = drawn(60);
    expect(gated.length).toBe(60); // the guarantee still delivers
    for (const a of gated) {
      expect(isAheadOfCourse({ category: a!.category, screen: a!.screen }, ahead), a!.id).toBe(
        false,
      );
    }
  });

  it.each(['A1', 'A2', 'B1', 'C1'])(
    'a Unit 1 learner at %s is served nothing the course teaches later — lesson day and test day',
    (level) => {
      for (const readUnit of [false, true]) {
        for (let r = 0; r < 15; r++) {
          localStorage.clear();
          CERT = level;
          writeCurriculumSpine(SPINE);
          if (readUnit) for (const id of UNIT1) markLessonComplete(id, DAY);
          const ahead = readCourseAhead();
          expect(ahead.categories.has('genitive')).toBe(true);
          const acts = buildSessionActivities(level as never);
          expect(acts.length).toBeGreaterThan(0);
          for (const act of acts) {
            expect(
              isAheadOfCourse({ category: act.category, screen: act.screen }, ahead),
              `${level}${readUnit ? ' test day' : ''}: ${act.id} (${act.screen}/${act.category})`,
            ).toBe(false);
          }
        }
      }
    },
  );
});
