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
// the single most important thing about it. The engine this replaced
// (`getNextLesson`, deleted in increment 3 — see curriculum.ts for the history)
// inferred that everything below a learner's certified level was already known:
// correct for the question IT answered ("what do I teach today" under the old
// CEFR-driven model) and wrong for the question this one answers ("where am I in
// the course"). Under one path for everyone, position is POSITIONAL: the current
// unit is the first unit not yet mastered, for every learner, always.
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
  /**
   * The unit's name. AUTHORED names live in `src/data/courseUnitTitles.ts` and are
   * passed in by the (lazily loaded) screens — see `buildCourseUnits`. With none
   * supplied this is positional (`A1 · Unit 3`), which is what the daily session
   * uses: a course map that silently dropped a unit would be worse than one with
   * a plain heading, and the session's own reason line is positional anyway.
   */
  title: string;
  subtitle: string;
  /** True when no authored title was supplied for this id. */
  titleDerived: boolean;
}

/** The authored name of one unit. */
export interface CourseUnitName {
  title: string;
  subtitle: string;
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
export function buildCourseUnits(
  spine: readonly CurriculumEntry[],
  /**
   * Authored unit names, keyed by unit id.
   *
   * PASSED IN RATHER THAN IMPORTED, and the reason is measured: `manualChunks` maps
   * every `src/data/*` module into ONE chunk, so a static import of the titles here
   * would put the whole content library back on the first-paint path — this module
   * is reached from App.tsx through useScreenLauncher → sessionLessonPick →
   * courseStep. `firstPaintGraph.test.ts` caught it, which is that guard's own
   * comment ("a small eagerly-imported data module can re-couple the whole library")
   * landing on exactly the case it predicted.
   *
   * The screens are lazy, so they import the names and pass them here; the session
   * path does not, and gets positional names it never renders.
   */
  names?: Readonly<Record<string, CourseUnitName>>,
): CourseUnit[] {
  const units: CourseUnit[] = [];
  let index = 0;
  for (const level of COURSE_LEVELS) {
    const at = spine.filter((e) => e.level === level).sort(byOrder);
    for (let i = 0; i < at.length; i += UNIT_SIZE) {
      const indexInLevel = i / UNIT_SIZE + 1;
      const id = `${level}-${indexInLevel}`;
      const authored = names?.[id];
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
 * `locked` — the unit before it is not mastered, so the COURSE has not opened it
 *   yet. The library has not locked anything: every lesson stays reachable from
 *   the Learning Center and from search, which is the owner's own "you can do
 *   extra studying if you want but there is a PROVEN set curriculum that guides
 *   the learner". What is gated is the PATH, not the content.
 * `upcoming` — everything else. Unreachable today, because every unit after the
 *   current one is locked; it survives for a spine whose units cannot be ordered.
 *
 * THE ORDER OF THAT LADDER IS THE WHOLE POINT OF INCREMENT 2. Before the unit
 * test, "all five lessons read" was the strongest thing the course could say, and
 * the owner's report was precisely that this never captured whether a learner was
 * grasping anything. `mastered` is the measured claim; `cleared` is honest about
 * being weaker.
 */
export type UnitState = 'mastered' | 'current' | 'cleared' | 'locked' | 'upcoming';

export interface UnitProgress {
  unit: CourseUnit;
  /** Lessons of this unit the learner has read. */
  done: number;
  total: number;
  /** Whether the unit's cumulative test is passed. */
  tested: boolean;
  /**
   * Whether this unit's test is known to be unassemblable from the cached lesson
   * bodies (`courseUnitProgress`'s `insufficient`). It has to reach the row,
   * because both the map and the session must stop OFFERING a test they know
   * cannot be served — without it, a unit that is read through AND unassemblable
   * is served its own dead end by the teaching slot every day, for ever. Found by
   * a test rather than by reading the code.
   */
  short: boolean;
  state: UnitState;
}

// ── The gate ────────────────────────────────────────────────────────────────
//
// THE COURSE OPENS ONE UNIT AT A TIME, and the bar is the unit test. This is the
// mastery gate the owner asked for: _"Mastery is the goal… It should begin basic
// and move to more advanced topics after basics have been mastered."_
//
// WHAT IS GATED IS THE PATH, NOT THE CONTENT. Every lesson stays reachable from
// the Learning Center and from search — `launchAnimLesson` has always been ungated
// and the Center's own header records that as what makes "look anything up, at any
// time" true. The owner said the same thing in the same breath as asking for the
// course: _"You can do extra studying if you want but there is a PROVEN set
// curriculum that guides the learner."_ A locked unit is the course declining to
// walk you there, never the app hiding it.
//
// A LOCK MUST NEVER BE ABLE TO STRAND ANYONE, so two things pass through it:
//
//   * `insufficient` — the unit's cached lesson bodies could not assemble a real
//     test (measured, not inferred; see courseUnitProgress). A learner must not be
//     walled behind an old payload, so such a unit opens the next one.
//   * a unit whose five lessons are all READ. That is not the bar and does not
//     master the unit, but a learner who has done the reading and cannot pass the
//     test yet must still be able to go on rather than hit a dead end. The unit
//     stays un-mastered, the map keeps offering its test, and nothing claims they
//     know it.
//
// The FIRST unit is never locked, whatever the store says.

export interface OpenUnitsInput {
  units: readonly CourseUnit[];
  completed: ReadonlySet<string> | readonly string[];
  passedUnitIds: ReadonlySet<string> | readonly string[];
  /** Units whose test could not be assembled. */
  insufficientUnitIds?: ReadonlySet<string> | readonly string[];
}

/** The unit ids the course has opened, in order. */
export function openUnits(input: OpenUnitsInput): Set<string> {
  const done = asSet(input.completed);
  const passed = asSet(input.passedUnitIds);
  const short = asSet(input.insufficientUnitIds ?? []);
  const out = new Set<string>();
  for (const unit of input.units) {
    out.add(unit.id);
    const total = unit.lessons.length;
    const read = unit.lessons.filter((l) => done.has(l.id)).length;
    const advances = passed.has(unit.id) || short.has(unit.id) || (total > 0 && read >= total);
    if (!advances) break;
  }
  return out;
}

/** Why a unit will not open, in the learner's words. Null when it is open. */
export function lockReason(row: UnitProgress, previous: CourseUnit | null): string | null {
  if (row.state !== 'locked') return null;
  return previous
    ? `The course opens this after Unit ${previous.index}. You can still reach any lesson from the Learning Center.`
    : 'The course has not opened this unit yet.';
}

/**
 * Whether to offer this unit's test, and how prominently.
 *
 * `primary` — every lesson read and the test not passed: the unit's next action.
 * `testout` — open and untested with reading still to do. **This is the test-out
 *   path, and it is the same test at the same bar** — the owner's own condition on
 *   one path for everyone: _"If they are already somewhat familiar they will be
 *   able to master easier subjects quickly."_ Without it, a heritage learner who
 *   understands A1 has to page through thirty lessons to reach B1, which is the
 *   friction the single path would otherwise buy. `AnimatedLesson` settled the same
 *   question for a single lesson (rec #4, 2026-09-07) and its answer was ONE BAR,
 *   NOT TWO: a stricter threshold for the same questions would be arbitrary and
 *   unexplainable, and a failed test-out records nothing, so offering it costs the
 *   learner nothing.
 * `none` — already mastered, the course has not opened the unit, or the unit's
 *   test is known to be unassemblable (`short`). That last clause is what stops
 *   the teaching slot sending a learner to a dead end every day: the gate already
 *   lets the course past such a unit, so nothing must keep offering its test.
 */
export type UnitTestOffer = 'primary' | 'testout' | 'none';

export function unitTestOffer(row: UnitProgress): UnitTestOffer {
  if (row.tested || row.short || row.state === 'locked') return 'none';
  if (row.total > 0 && row.done >= row.total) return 'primary';
  return 'testout';
}

/** Ready for its test with the reading done. */
export function awaitingUnitTest(row: UnitProgress): boolean {
  return unitTestOffer(row) === 'primary';
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
  /** Units the course has opened — see `openUnits`. Omit to lock nothing. */
  openableUnitIds?: ReadonlySet<string> | readonly string[],
  /** Units whose test could not be assembled. Omit when nothing is known. */
  insufficientUnitIds?: ReadonlySet<string> | readonly string[],
): CourseProgress {
  const set = asSet(completed);
  const passed = asSet(passedUnitIds);
  // OMITTED MEANS LOCK NOTHING, and the first version of this got it backwards:
  // defaulting to an empty SET locked every unit after the current one while the
  // docstring said the opposite — a default that contradicts its own comment, which
  // is the defect this file keeps finding in other people's code. `null` is the
  // "no gate" signal and is distinguishable from an empty set, which legitimately
  // means "the course has opened nothing".
  const openable = openableUnitIds === undefined ? null : asSet(openableUnitIds);
  const short = asSet(insufficientUnitIds ?? []);
  const rows = units.map((unit) => {
    const total = unit.lessons.length;
    const done = unit.lessons.filter((l) => set.has(l.id)).length;
    return { unit, done, total, tested: passed.has(unit.id), short: short.has(unit.id) };
  });
  const first = rows.find((r) => !r.tested);
  const currentIndex = first ? first.unit.index : null;
  return {
    units: rows.map((r) => ({
      unit: r.unit,
      done: r.done,
      total: r.total,
      tested: r.tested,
      short: r.short,
      state: r.tested
        ? 'mastered'
        : r.unit.index === currentIndex
          ? 'current'
          : r.total > 0 && r.done >= r.total
            ? 'cleared'
            : openable && !openable.has(r.unit.id)
              ? 'locked'
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
