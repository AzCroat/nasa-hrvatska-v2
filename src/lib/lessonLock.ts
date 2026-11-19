// src/lib/lessonLock.ts
//
// THE COURSE IS SEQUENTIAL, AND NOW THE DOORS AGREE (owner decision, 2026-11-12).
// Owner: "I want to lock ahead-of-you lessons … they should be able to test out of
// Lesson 1, then they can test out of lesson 2, but it has to be sequential and not
// allowed to jump around." Until now the course map greyed out a locked UNIT while the
// Learning Center, search and the lesson launcher opened any of the 180 lessons
// (CourseMapScreen's header recorded that as deliberate). That earlier decision —
// "extra studying stays possible" — is superseded: a learner is not shown material they
// have not reached, because it confuses them.
//
// A lesson is OPEN when it is already done, sits in a unit the learner has advanced
// through, or is the ONE lesson the course serves today. Everything else is locked.
// That is exactly the set the daily session already treats as "reached"
// (`courseGate.readCourseAhead`), so the session, the map and every other door read
// one definition — it lives here and `courseGate` imports it.
//
// TEST-OUT IS NOT REMOVED BY THIS. The lesson's own test-out is offered on the intro of
// any lesson that opens, and the unit's test-out on the unit the learner stands on;
// passing either opens the next lesson/unit, so a learner who knows the material goes
// 1, 2, 3 … quickly, in order. What the lock refuses is skipping the order.
//
// ABSENCE DEGRADES TO "NOTHING LOCKED", the null contract every course module keeps:
// the spine is a cached fetch, and a learner must never be locked out because it has
// not arrived. A lesson id the spine does not know is never locked either.

import { readCourseState, currentOwedStep } from './courseStep';
import { readCompletedLessons } from './curriculumProgress';
import type { CourseUnit, OwedStep } from './courseUnits';

/**
 * Pure: the lessons a learner may open, given the course's units, the lessons they
 * have completed, the units they have advanced past and the unit they stand on.
 */
export function openLessonIds(
  units: readonly CourseUnit[],
  completed: ReadonlySet<string>,
  advanced: ReadonlySet<string>,
  currentIndex: number | null,
): Set<string> {
  const open = new Set<string>(completed);
  for (const u of units) {
    if (advanced.has(u.id)) for (const l of u.lessons) open.add(l.id);
  }
  // Today's lesson: the first unread lesson of the unit the learner stands on.
  const current = units.find((u) => u.index === currentIndex);
  const today = current?.lessons.find((l) => !open.has(l.id));
  if (today) open.add(today.id);
  return open;
}

/** The learner's open lessons, read from storage; null when there is no spine. */
export function readOpenLessons(): Set<string> | null {
  try {
    const state = readCourseState();
    if (state.units.length === 0) return null;
    return openLessonIds(state.units, readCompletedLessons(), state.advanced, state.currentIndex);
  } catch {
    return null;
  }
}

/**
 * Pure: why a lesson is locked, in a sentence the learner can act on — or null when it
 * is open or unknown. The sentence names the exact step that opens it (`step`, from
 * `currentOwedStep`) and says the lesson can be tested out of — TEST-OUT IS OPEN FOR ANY
 * LESSON AT ANY TIME (owner, 2026-11-19), reading ahead is not.
 */
export function lockReasonFor(
  lessonId: string,
  units: readonly CourseUnit[],
  open: ReadonlySet<string>,
  currentIndex: number | null,
  ctx?: { step?: OwedStep | null; completed?: ReadonlySet<string> },
): string | null {
  if (open.has(lessonId)) return null;
  const unit = units.find((u) => u.lessons.some((l) => l.id === lessonId));
  if (!unit) return null;
  const tail = ' You can test out of it any time.';
  if (currentIndex != null && unit.index > currentIndex) {
    return `${ctx?.step ? `${ctx.step.text}. That opens Unit ${currentIndex + 1} in order.` : `Opens after you pass Unit ${unit.index - 1}.`}${tail}`;
  }
  // Inside the unit the learner stands on, behind the lesson the course serves today:
  // it opens once the lesson before it is done (or tested out).
  const at = unit.lessons.findIndex((l) => l.id === lessonId);
  if (at >= 1) {
    const done = ctx?.completed;
    const today = done ? unit.lessons.findIndex((l) => !done.has(l.id)) : at - 1;
    const f = today >= 0 && today < at ? today : at - 1;
    return `Finish lesson ${f + 1} of this unit to open lesson ${at + 1}.${tail}`;
  }
  return `Opens after you pass Unit ${Math.max(1, unit.index - 1)}.${tail}`;
}

/**
 * The lesson that opens next — the first unfinished lesson of the unit the learner
 * stands on — or null (no spine, course finished). Where a failed test-out sends them.
 */
export function readNextOpenLesson(): { id: string; title: string } | null {
  try {
    const state = readCourseState();
    const unit = state.units.find((u) => u.index === state.currentIndex);
    if (!unit) return null;
    const done = readCompletedLessons();
    const l = unit.lessons.find((x) => !done.has(x.id));
    return l ? { id: l.id, title: l.title || l.id } : null;
  } catch {
    return null;
  }
}

/** The one-shot handoff AnimatedLesson consumes to open a lesson already in its check. */
export const LESSON_TESTOUT_KEY = 'nh_lesson_testout';

export function requestLessonTestOut(lessonId: string): void {
  try {
    sessionStorage.setItem(LESSON_TESTOUT_KEY, lessonId);
  } catch {
    /* the lesson still opens; its own button remains */
  }
}

/**
 * Reads the course ONCE and answers for any lesson — for a screen that lists all 180
 * and must not re-read storage per row. Never throws; with no spine nothing is locked.
 */
export function readLockLookup(): (lessonId: string) => string | null {
  try {
    const state = readCourseState();
    if (state.units.length === 0) return () => null;
    const completed = readCompletedLessons();
    const open = openLessonIds(state.units, completed, state.advanced, state.currentIndex);
    const step = currentOwedStep(state);
    return (lessonId) =>
      lockReasonFor(lessonId, state.units, open, state.currentIndex, { step, completed });
  } catch {
    return () => null;
  }
}

/** The reason a lesson is locked right now, or null. Never throws. */
export function lessonLockReason(lessonId: string): string | null {
  return readLockLookup()(lessonId);
}
