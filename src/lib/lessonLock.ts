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

import { readCourseState } from './courseStep';
import { readCompletedLessons } from './curriculumProgress';
import type { CourseUnit } from './courseUnits';

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
 * is open or unknown. The sentence names what unlocks it, never what it teaches.
 */
export function lockReasonFor(
  lessonId: string,
  units: readonly CourseUnit[],
  open: ReadonlySet<string>,
  currentIndex: number | null,
): string | null {
  if (open.has(lessonId)) return null;
  const unit = units.find((u) => u.lessons.some((l) => l.id === lessonId));
  if (!unit) return null;
  if (currentIndex != null && unit.index > currentIndex) {
    return `Opens after you pass Unit ${unit.index - 1}.`;
  }
  // Inside the unit the learner stands on, behind the lesson the course serves today:
  // it opens once the lesson before it is done (or tested out).
  const at = unit.lessons.findIndex((l) => l.id === lessonId);
  return at >= 1
    ? `Opens after lesson ${at} of this unit.`
    : `Opens after you pass Unit ${Math.max(1, unit.index - 1)}.`;
}

/**
 * Reads the course ONCE and answers for any lesson — for a screen that lists all 180
 * and must not re-read storage per row. Never throws; with no spine nothing is locked.
 */
export function readLockLookup(): (lessonId: string) => string | null {
  try {
    const state = readCourseState();
    if (state.units.length === 0) return () => null;
    const open = openLessonIds(
      state.units,
      readCompletedLessons(),
      state.advanced,
      state.currentIndex,
    );
    return (lessonId) => lockReasonFor(lessonId, state.units, open, state.currentIndex);
  } catch {
    return () => null;
  }
}

/** The reason a lesson is locked right now, or null. Never throws. */
export function lessonLockReason(lessonId: string): string | null {
  return readLockLookup()(lessonId);
}
