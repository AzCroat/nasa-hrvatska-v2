// src/lib/courseStep.ts
//
// WHAT THE COURSE SERVES NEXT (Step 3, increment 3, 2026-09-26).
//
// One function, read by the daily session's teaching slot and by the session
// launcher, so Home and the course map can never disagree about what comes next.
// That agreement is the whole point of this increment: increment 2 shipped a unit
// test and a mastery state while the session was still choosing lessons through
// `getNextLesson`'s CERTIFICATION INFERENCE — which serves a certified B1 learner
// their own level's first lesson, a unit the course map would show as locked. Two
// surfaces contradicting each other is worse than either rule alone.
//
// SO THE INFERENCE IS RETIRED HERE, per the owner's directive: _"all users follow
// the same learning path. If they are already somewhat familiar they will be able
// to master easier subjects quickly."_ Position is positional. `getNextLesson`
// survives for nothing in the session path; what makes the single path bearable for
// a learner who already knows A1 is the TEST-OUT offer (`unitTestOffer`), not a
// shortcut in the sequencer.
//
// TWO KINDS OF STEP, and the second is what stops the course stalling:
//
//   * `lesson` — the next unread lesson of the open unit the learner is on.
//   * `unit-test` — that unit's cumulative test, once all five are read. Without
//     it, a learner who finished a unit's reading would be served... the next
//     unit's lesson (racing past the test that is supposed to gate it) or nothing
//     at all (a silent stall, with the course waiting on an action nothing asks
//     for). Serving the test IS the next step.
//
// NULL MEANS "NO CURRICULUM DATA", exactly as `resolveCurriculumLesson`'s contract
// always has: the spine is a cached fetch and can legitimately be absent, and the
// session then composes as it did before any of this existed. Absence degrades to
// the old behaviour, never to no teaching.

import { readCurriculumSpine, readCompletedLessons } from './curriculumProgress';
import { passedUnits, insufficientUnits, readCourseUnits } from './courseUnitProgress';
import {
  buildCourseUnits,
  courseProgress,
  openUnits,
  unitTestOffer,
  type CourseUnit,
  type UnitProgress,
} from './courseUnits';
import type { CurriculumEntry } from './curriculum';

export type CourseStep =
  | { kind: 'lesson'; unit: CourseUnit; lesson: CurriculumEntry; reason: string }
  | { kind: 'unit-test'; unit: CourseUnit; reason: string };

/**
 * The whole course state, read once.
 *
 * Exported because three callers need the same view and computing it twice invites
 * the two of them to disagree — which is the defect this file exists to remove.
 */
export function readCourseState(): {
  units: CourseUnit[];
  rows: UnitProgress[];
  open: Set<string>;
  currentIndex: number | null;
} {
  const spine = readCurriculumSpine() as CurriculumEntry[];
  const units = buildCourseUnits(spine);
  const store = readCourseUnits();
  const completed = readCompletedLessons();
  const passed = passedUnits(store);
  const short = insufficientUnits(store);
  const open = openUnits({
    units,
    completed,
    passedUnitIds: passed,
    insufficientUnitIds: short,
  });
  const progress = courseProgress(units, completed, passed, open, short);
  return { units, rows: progress.units, open, currentIndex: progress.currentIndex };
}

/**
 * The walk, pure, over rows the caller has already computed.
 *
 * Exported because its LOCKED clause is otherwise unreachable and would be
 * decoration. Removing `if (row.state === 'locked') break;` changes nothing when
 * the rows come from storage — mutation-verified, it survived — and the reason is
 * an invariant that holds across two modules: `openUnits` stops the chain at the
 * first unit that does not advance, and a unit that does not advance is one with an
 * unread lesson, on which the walk returns. So the walk provably cannot reach a
 * locked row today.
 *
 * The clause stays, because relying on an invariant proved by reasoning across two
 * files is exactly what breaks when one of them changes. This repo's own rule is to
 * keep such a clause and give it a SYNTHETIC control rather than delete it — which
 * needs the walk to be callable with fabricated rows, which is what this export is
 * for. A locked row must stop the walk, never be served.
 */
export function pickCourseStep(input: {
  rows: readonly UnitProgress[];
  completed: ReadonlySet<string>;
  unitCount: number;
}): CourseStep | null {
  for (const row of input.rows) {
    if (row.tested) continue;
    if (row.state === 'locked') break;
    const unit = row.unit;
    const unread = unit.lessons.find((l) => !input.completed.has(l.id));
    if (unread) {
      return {
        kind: 'lesson',
        unit,
        lesson: unread,
        // Positional and true by construction. It names the UNIT, because that is
        // the shape the learner now sees the course in.
        // POSITIONAL, AND DELIBERATELY WITHOUT THE UNIT'S NAME. The authored names
        // live in src/data, which `manualChunks` groups with the whole content
        // library — importing them on this path is what `firstPaintGraph` forbids.
        // The session card already shows the LESSON's title as its label, so
        // "Unit 1 of 36" beside it is informative without costing a chunk.
        reason: `Unit ${unit.index} of ${input.unitCount}`,
      };
    }
    if (unitTestOffer(row) === 'primary') {
      return {
        kind: 'unit-test',
        unit,
        reason: `Unit ${unit.index} test — all ${unit.lessons.length} lessons read`,
      };
    }
    // Neither unread lessons nor a servable test: nothing this unit can offer.
    // `openUnits` has already let the course past it, so keep walking.
  }
  return null;
}

/**
 * The course's next step, or null when there is no curriculum data.
 *
 * Walks the OPEN units in order and answers about the first one that is not
 * mastered. A unit whose reading is done gets its test; otherwise its next unread
 * lesson.
 */
export function nextCourseStep(): CourseStep | null {
  let state: ReturnType<typeof readCourseState>;
  try {
    state = readCourseState();
  } catch {
    return null;
  }
  if (state.units.length === 0) return null;
  const completed = (() => {
    try {
      return readCompletedLessons();
    } catch {
      return new Set<string>();
    }
  })();
  return pickCourseStep({
    rows: state.rows,
    completed,
    unitCount: state.units.length,
  });
}

/** Stable activity id for the unit-test slot. */
export function unitTestActivityId(unitId: string): string {
  return `course_unit_test_${unitId}`;
}
