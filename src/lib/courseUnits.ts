// src/lib/courseUnits.ts
//
// THE COURSE, IN UNITS (Step 3 of the structural overhaul, 2026-09-26).
//
// THE OWNER REPORT THIS EXISTS TO ANSWER, verbatim: "I don't feel the
// application really provides a structured learning experience that moves the
// user along as they grasp subjects. It seems to bounce around, never really
// capturing if the user is grasping subjects… We need to make this much more
// like a course."
//
// The curriculum spine already holds 180 lessons in a defensible order. What it
// does not give a learner is a SHAPE they can see themselves inside: 180 is a
// list, not a course. A course has units you finish, and a position you hold in
// it. This file is that shape.
//
// ONE PATH, EVERYONE STARTS AT UNIT 1 (owner directive, 2026-09-26)
// ----------------------------------------------------------------
// "Fuck a heritage user, all users follow the same learning path. If they are
// already somewhat familiar they will be able to master easier subjects
// quickly."
//
// So this file deliberately does NOT read the certification level, and that is
// the single most important thing about it. `getNextLesson` (curriculum.ts)
// infers that everything below a learner's certified level is already known —
// correct for the question IT answers ("what do I teach today" under the old
// CEFR-driven model) and wrong for the question this one answers ("where am I in
// the course"). Under one path for everyone, position is POSITIONAL: the current
// unit is the first unit with an unfinished lesson, for every learner, always.
// A learner who already knows A1 clears its six units quickly; nobody is handed
// a map with twelve units greyed out that the app has no evidence they did.
//
// THE UNITS ARE DERIVED, NOT LISTED
// ---------------------------------
// The obvious implementation is a second data file naming 36 units and the five
// lesson ids in each. That is 180 ids restated, in a codebase whose single
// most-repeated lesson is that a hand-maintained list decays exactly like one in
// production — and the spine's own header says it refuses to restate facts that
// already have a home, for this reason.
//
// So a unit is a CHUNK: five consecutive lessons of one level, in spine order.
// Nothing is restated, a reorder cannot desynchronise the units from the spine,
// and the only authored thing is each unit's TITLE (36 strings, in
// src/data/courseUnitTitles.ts), which `courseUnitTitles.test.ts` pins to the
// lessons it actually spans so a reorder fails loudly instead of leaving a title
// describing five lessons it no longer covers.
//
// The chunk boundaries are not arbitrary: the curriculum was authored in
// thematic blocks and they fall at fives almost throughout. A1's boundary at
// 16 lands exactly on `cases`, which that file's own header calls the hinge of
// the level. Where a block straddles a boundary (B1's aspect sequence at 7–10)
// it sits wholly inside one unit.
//
// WHAT THIS FILE DOES NOT YET DO
// ------------------------------
// It does not gate. A unit test and the "you may not advance until you have
// demonstrated this" rule are the next increment; this one gives the learner the
// structure and their place in it. Two states are therefore NOT rendered here —
// `mastered` (which needs retention evidence) and `locked` (which needs the
// gate). Rendering either now would be NEVER-DO 13: a state the app has not
// measured, or a rule it does not enforce.

import type { CefrLevel } from './cefr';
import type { CurriculumEntry } from './curriculum';
import { COURSE_UNIT_TITLES } from '../data/courseUnitTitles';

/** Lessons per unit. Six units per 30-lesson level; 36 units over 180 lessons. */
export const UNIT_SIZE = 5;

export const COURSE_LEVELS: readonly CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export interface CourseUnit {
  /** Stable id: level + position in level, e.g. 'A1-4'. */
  id: string;
  level: CefrLevel;
  /** 1-based position within the level. */
  indexInLevel: number;
  /** 1-based position in the whole course. */
  index: number;
  /** The unit's lessons, in spine order. */
  lessons: CurriculumEntry[];
  title: string;
  subtitle: string;
  /**
   * True when no title was authored for this id — a spine that grew past what
   * the titles file knows about. The unit still renders, with a positional name,
   * because a course map that silently drops a unit is worse than one with a
   * plain heading. The titles test fails on it, which is where it gets fixed.
   */
  titleDerived: boolean;
}

function byOrder(a: CurriculumEntry, b: CurriculumEntry): number {
  return a.order - b.order;
}

/**
 * Group the spine into units.
 *
 * Levels are walked in CEFR order and lessons within a level in `order`, so the
 * global index is the learner's path through the course. A level with no lessons
 * contributes no units; a level whose count is not a multiple of UNIT_SIZE ends
 * with a short unit rather than dropping the remainder — losing lessons off the
 * end of a map is the one failure that would be invisible.
 */
export function buildCourseUnits(spine: readonly CurriculumEntry[]): CourseUnit[] {
  const units: CourseUnit[] = [];
  let index = 0;
  for (const level of COURSE_LEVELS) {
    const at = spine.filter((e) => e.level === level).sort(byOrder);
    for (let i = 0; i < at.length; i += UNIT_SIZE) {
      const indexInLevel = i / UNIT_SIZE + 1;
      const id = `${level}-${indexInLevel}`;
      const authored = COURSE_UNIT_TITLES[id];
      index += 1;
      units.push({
        id,
        level,
        indexInLevel,
        index,
        lessons: at.slice(i, i + UNIT_SIZE),
        title: authored ? authored.title : `${level} · Unit ${indexInLevel}`,
        subtitle: authored ? authored.subtitle : '',
        titleDerived: !authored,
      });
    }
  }
  return units;
}

/** The unit a lesson belongs to, or null when the lesson is not in the spine. */
export function unitOfLesson(units: readonly CourseUnit[], lessonId: string): CourseUnit | null {
  if (!lessonId) return null;
  return units.find((u) => u.lessons.some((l) => l.id === lessonId)) ?? null;
}

/**
 * A unit's state, from what the app has actually measured.
 *
 * `mastered` — its cumulative unit test is PASSED. The strongest claim the course
 *   makes, and the only one that means "you have shown you know this".
 * `current` — the first unit not yet mastered; where the learner is now. It shows
 *   as current even when all five lessons are read, because reading is not the
 *   bar: its next action is the test.
 * `cleared` — all five lessons read, but not the current unit and not tested.
 *   Reachable when a learner works ahead through search or the library, which is
 *   deliberately open.
 * `upcoming` — everything else.
 *
 * THE ORDER OF THAT LADDER IS THE WHOLE POINT OF INCREMENT 2. Before the unit
 * test, "all five lessons read" was the strongest thing the course could say, and
 * the owner's report was precisely that this never captured whether a learner was
 * grasping anything. `mastered` is the measured claim; `cleared` is honest about
 * being weaker.
 */
export type UnitState = 'mastered' | 'current' | 'cleared' | 'upcoming';

export interface UnitProgress {
  unit: CourseUnit;
  /** Lessons of this unit the learner has read. */
  done: number;
  total: number;
  /** Whether the unit's cumulative test is passed. */
  tested: boolean;
  state: UnitState;
}

/** Ready for its test: every lesson read, and the test not yet passed. */
export function awaitingUnitTest(row: UnitProgress): boolean {
  return !row.tested && row.total > 0 && row.done >= row.total;
}

export interface CourseProgress {
  units: UnitProgress[];
  /** 1-based index of the current unit, or null when every unit is mastered. */
  currentIndex: number | null;
  /** Units whose test is passed. */
  unitsMastered: number;
  /** Units whose five lessons are all read — a weaker fact, counted separately. */
  unitsCleared: number;
  unitsTotal: number;
  lessonsDone: number;
  lessonsTotal: number;
}

function asSet(v: ReadonlySet<string> | readonly string[]): ReadonlySet<string> {
  return v instanceof Set ? v : new Set(v as readonly string[]);
}

/**
 * Where the learner is, over the whole course.
 *
 * Counts REAL completions only — no inference from a CEFR level, per the owner
 * directive at the top of this file. With an empty spine every count is zero and
 * `currentIndex` is null; the caller must render its content-state notice rather
 * than a row of zeros, because a count is a claim too.
 */
export function courseProgress(
  units: readonly CourseUnit[],
  completed: ReadonlySet<string> | readonly string[],
  passedUnitIds: ReadonlySet<string> | readonly string[],
): CourseProgress {
  const set = asSet(completed);
  const passed = asSet(passedUnitIds);
  const rows = units.map((unit) => {
    const total = unit.lessons.length;
    const done = unit.lessons.filter((l) => set.has(l.id)).length;
    return { unit, done, total, tested: passed.has(unit.id) };
  });
  const first = rows.find((r) => !r.tested);
  const currentIndex = first ? first.unit.index : null;
  return {
    units: rows.map((r) => ({
      unit: r.unit,
      done: r.done,
      total: r.total,
      tested: r.tested,
      state: r.tested
        ? 'mastered'
        : r.unit.index === currentIndex
          ? 'current'
          : r.total > 0 && r.done >= r.total
            ? 'cleared'
            : 'upcoming',
    })),
    currentIndex,
    unitsMastered: rows.filter((r) => r.tested).length,
    unitsCleared: rows.filter((r) => r.total > 0 && r.done >= r.total).length,
    unitsTotal: rows.length,
    lessonsDone: rows.reduce((n, r) => n + r.done, 0),
    lessonsTotal: rows.reduce((n, r) => n + r.total, 0),
  };
}

/** The lesson the course would teach next: the first incomplete one, in course order. */
export function nextCourseLesson(
  units: readonly CourseUnit[],
  completed: ReadonlySet<string> | readonly string[],
): { unit: CourseUnit; lesson: CurriculumEntry } | null {
  const set = asSet(completed);
  for (const unit of units) {
    for (const lesson of unit.lessons) {
      if (!set.has(lesson.id)) return { unit, lesson };
    }
  }
  return null;
}

// ── Why the map cannot be shown ─────────────────────────────────────────────
//
// The same three-way vocabulary `poolLaunchBlock` established, for the same
// reason: "not arrived yet", "could not be fetched" and "there is nothing in it"
// are three different facts, and saying the wrong one is NEVER-DO 13. The spine
// is a cached fetch, so all three are reachable.

export type CourseMapBlock = 'loading' | 'unavailable' | 'empty';

export const COURSE_MAP_COPY: Record<CourseMapBlock, string> = {
  loading: 'Loading your course — one moment.',
  unavailable: 'The course could not be loaded. Check your connection and try again.',
  empty: 'The course has no units yet.',
};

export function courseMapBlock(
  fetchState: 'pending' | 'failed' | 'settled',
  unitCount: number,
): CourseMapBlock | null {
  if (unitCount > 0) return null;
  if (fetchState === 'pending') return 'loading';
  if (fetchState === 'failed') return 'unavailable';
  return 'empty';
}
