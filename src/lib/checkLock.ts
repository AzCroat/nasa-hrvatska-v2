// src/lib/checkLock.ts
//
// A FAILED CHECK IS NOT RETAKEN THE SAME DAY (owner directive, 2026-09-29).
//
// Owner: "When a user fails a lesson let's not let them go back and click through
// the right answers to get a passing score. Let's note they did not pass and add as
// an area of focus in review. We should let them know they didn't pass and this will
// be something they will need to study more before the next test."
//
// Before this, a failed mastery check offered "↻ Retake check" on the spot. Every
// item had just been answered and REVEALED with its explanation, and the retake
// served the same six items reshuffled — so a second attempt measured memory of the
// answer sheet, not the grammar, and a pass bought that way recorded the lesson as
// mastered, started its retention ladder and advanced the course.
//
// The rule: once a lesson's latest REAL attempt (kind 'lesson') has failed, its check
// is closed until the next calendar day. A failed TEST-OUT does not lock anything —
// it is the answer to "should I read this?", taken before the lesson was taught, and
// the learner is sent into the lesson whose check they then take for real.
// Tomorrow is the corrective day (lib/correctiveDay): the lesson opens at its worked
// examples and the check follows.
//
// What stays open: every teaching slide. Re-reading is exactly the studying the owner
// asked for; only the graded check is closed.

import { latestLessonAttempt } from './correctiveDay';
import { readAttempts } from './lessonAttempts';
import { readCompletedLessons } from './curriculumProgress';
import { localDateStr } from './dateUtils';

/**
 * Whether this lesson's check is closed for the rest of today: its latest real check
 * attempt was a FAIL taken today, and the lesson is not already complete (a completed
 * lesson replayed for practice has nothing to gain from a lock).
 */
export function checkLockedToday(lessonId: string, today: string = localDateStr()): boolean {
  if (!lessonId) return false;
  try {
    if (readCompletedLessons().has(lessonId)) return false;
  } catch {
    return false;
  }
  const last = latestLessonAttempt(lessonId);
  return !!last && !last.passed && last.at === today;
}

/** The learner-facing sentence for a closed check. One definition, so the summary
 *  and the locked check slide cannot say two different things. */
export const CHECK_LOCKED_COPY =
  'The check opens again tomorrow. Study the lesson now; tomorrow your Lesson Review asks the questions you missed, and the session brings this lesson back with a shorter re-teach before the check.';

/**
 * How many checks this lesson has been through, ANY kind — the first attempt number of
 * a new opening. The option shuffle is seeded by the attempt number, and a fresh mount
 * used to start at 0, so tomorrow's retake would present every item in yesterday's
 * positions: a memory test of where the answer sat, which the per-attempt shuffle exists
 * to prevent. Now that a retake is only ever on a later opening, this is what keeps it a
 * different paper.
 */
export function priorAttemptCount(lessonId: string | undefined): number {
  if (!lessonId) return 0;
  try {
    return readAttempts().lessons[lessonId]?.attempts.length ?? 0;
  } catch {
    return 0;
  }
}
