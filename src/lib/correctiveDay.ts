// src/lib/correctiveDay.ts
//
// THE CORRECTIVE DAY (Daily Session redesign, increment 4; owner decision 5 of
// 2026-09-28). Bloom's mastery learning is not "retry the test": it is corrective
// instruction, then the test again. Until this, a failed lesson check changed
// nothing about the next session except that the spine served the same lesson
// again from slide 0 — the whole lesson, the same drill, the same check.
//
// A lesson is CORRECTIVE when its latest real check attempt (`kind: 'lesson'` —
// a failed test-out is not a failed lesson, it is the answer to "should I read
// this?") was a FAIL and the lesson is still not complete. That holds from the
// moment of the fail until the check is passed, however many days pass, so the
// session — built once a day — meets it tomorrow, and a same-day relaunch from
// Home meets it through the handoff `rearmCourseHandoff` writes at launch.
//
// What changes on a corrective day, all in the teaching slot (P0):
//   * the lesson opens at its first WORKED EXAMPLE, not slide 0 — the reasoning,
//     the hinted practice and the check again, without the explanation the learner
//     has already read (a shorter re-teach, not a repeat);
//   * its coupled drill prefers the EASIER route (`CATEGORY_EASIER_SCREEN`) where
//     one exists at the learner's level;
//   * the slot says so.
// Nothing else moves: the rest of the day composes as any lesson day, and the
// mastery gate is untouched — the check is still the bar.

import { readAttempts, type LessonAttempt } from './lessonAttempts';
import { readCompletedLessons } from './curriculumProgress';

export const CORRECTIVE_LESSON_KEY = 'nh_lesson_corrective';

/** The most recent REAL (non-test-out) check attempt for a lesson, or null. */
export function latestLessonAttempt(lessonId: string): LessonAttempt | null {
  try {
    const rec = readAttempts().lessons[lessonId];
    if (!rec) return null;
    for (let i = rec.attempts.length - 1; i >= 0; i--) {
      const a = rec.attempts[i]!;
      if (a.kind === 'lesson') return a;
    }
    return null;
  } catch {
    return null;
  }
}

/** Whether the next sitting of this lesson is a corrective one. */
export function isCorrectiveLesson(lessonId: string): boolean {
  if (!lessonId) return false;
  try {
    if (readCompletedLessons().has(lessonId)) return false;
  } catch {
    return false;
  }
  const last = latestLessonAttempt(lessonId);
  return !!last && !last.passed;
}

export function requestCorrectiveLesson(lessonId: string): void {
  if (!lessonId) return;
  try {
    sessionStorage.setItem(CORRECTIVE_LESSON_KEY, lessonId);
  } catch {
    /* the lesson simply opens from the start */
  }
}

export function readCorrectiveLessonRequest(): string | null {
  try {
    return sessionStorage.getItem(CORRECTIVE_LESSON_KEY) || null;
  } catch {
    return null;
  }
}

export function clearCorrectiveLessonRequest(): void {
  try {
    sessionStorage.removeItem(CORRECTIVE_LESSON_KEY);
  } catch {
    /* nothing more to do */
  }
}

/**
 * The slide index a corrective sitting opens on: the first worked example, or null
 * when the lesson has none (an older cached body) — the caller then opens at 0.
 */
export function firstWorkedSlide(slides: ReadonlyArray<{ type?: string }>): number | null {
  const i = slides.findIndex((s) => s?.type === 'worked');
  return i >= 0 ? i : null;
}
