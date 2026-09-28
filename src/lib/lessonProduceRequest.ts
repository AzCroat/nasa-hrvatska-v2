// src/lib/lessonProduceRequest.ts
//
// THE DAY'S PRODUCTION IS ABOUT THE DAY'S CONCEPT (Daily Session redesign,
// increment 2a, owner decision 4 of 2026-09-28: "production on lesson days").
//
// The lesson's produce step (`LessonProduceStep`, on the passed summary) asks for
// two or three sentences using THAT lesson's objectives, graded by the same
// `/api/correct` rubric as Guided Writing. Until this increment it was optional
// and easy to skip, while the session's production slot rotated writing and
// speaking units unrelated to the day's lesson. On a LESSON day the slot is now
// that step: credited automatically when the learner writes it on the lesson
// summary, and reachable on its own (`lessonproduce`) for anyone who skipped it.
//
// Same handoff shape as the unit test and unit production: the session builder
// writes the lesson id into sessionStorage when it composes the day, and
// `rearmCourseHandoff` writes it again at launch, because sessionStorage does not
// survive every path to the screen. The screen reads it non-destructively.

import { readRetention } from './lessonRetention';

export const LESSON_PRODUCE_REQUEST_KEY = 'nh_lesson_produce';
const ACTIVITY_PREFIX = 'curriculum_produce_';

/** The session activity id for a lesson's produce step. */
export function lessonProduceActivityId(lessonId: string): string {
  return ACTIVITY_PREFIX + lessonId;
}

/** The lesson id an activity id names, or null when it is not a produce activity. */
export function lessonIdOfProduceActivity(activityId: string | undefined | null): string | null {
  if (!activityId || !activityId.startsWith(ACTIVITY_PREFIX)) return null;
  const id = activityId.slice(ACTIVITY_PREFIX.length);
  return id || null;
}

export function requestLessonProduce(lessonId: string): void {
  if (!lessonId) return;
  try {
    sessionStorage.setItem(LESSON_PRODUCE_REQUEST_KEY, lessonId);
  } catch {
    /* the screen reports that it has no lesson rather than crashing */
  }
}

export function readLessonProduceRequest(): string | null {
  try {
    return sessionStorage.getItem(LESSON_PRODUCE_REQUEST_KEY) || null;
  } catch {
    return null;
  }
}

export function clearLessonProduceRequest(): void {
  try {
    sessionStorage.removeItem(LESSON_PRODUCE_REQUEST_KEY);
  } catch {
    /* nothing more to do */
  }
}

/**
 * Whether the learner has already written this lesson's produce step — recorded
 * by `markLessonProduced` on a graded submission, whichever surface it came from.
 * This is what lets the session credit the slot for work done on the lesson page.
 */
export function lessonProduced(lessonId: string): boolean {
  try {
    return !!readRetention().lessons[lessonId]?.produced;
  } catch {
    return false;
  }
}
