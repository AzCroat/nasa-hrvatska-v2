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

/**
 * Which modality the day's produce step asks for (increment 2b). WRITE is graded by
 * `/api/correct`; SPEAK by `/api/speaking-coach` on the browser's transcript (typed
 * fallback), so both are about the day's concept and both feed the mastery ledger.
 */
export type ProduceKind = 'write' | 'speak';

export const LESSON_PRODUCE_REQUEST_KEY = 'nh_lesson_produce';
const ACTIVITY_PREFIX = 'curriculum_produce_';

/** The session activity id for a lesson's produce step: `curriculum_produce_<kind>_<lesson>`. */
export function lessonProduceActivityId(lessonId: string, kind: ProduceKind = 'write'): string {
  return `${ACTIVITY_PREFIX}${kind}_${lessonId}`;
}

/**
 * The lesson and kind an activity id names, or null when it is not a produce
 * activity. An id from before the kind existed (`curriculum_produce_<lesson>`, the
 * 2a shape, still in some persisted sessions) reads as WRITE — that is what it was.
 */
export function lessonIdOfProduceActivity(
  activityId: string | undefined | null,
): { lessonId: string; kind: ProduceKind } | null {
  if (!activityId || !activityId.startsWith(ACTIVITY_PREFIX)) return null;
  const rest = activityId.slice(ACTIVITY_PREFIX.length);
  if (!rest) return null;
  for (const kind of ['write', 'speak'] as const) {
    if (rest.startsWith(`${kind}_`)) {
      const lessonId = rest.slice(kind.length + 1);
      return lessonId ? { lessonId, kind } : null;
    }
  }
  return { lessonId: rest, kind: 'write' };
}

export function requestLessonProduce(lessonId: string, kind: ProduceKind = 'write'): void {
  if (!lessonId) return;
  try {
    sessionStorage.setItem(LESSON_PRODUCE_REQUEST_KEY, `${lessonId}|${kind}`);
  } catch {
    /* the screen reports that it has no lesson rather than crashing */
  }
}

export function readLessonProduceRequest(): { lessonId: string; kind: ProduceKind } | null {
  try {
    const raw = sessionStorage.getItem(LESSON_PRODUCE_REQUEST_KEY);
    if (!raw) return null;
    const [lessonId, kind] = raw.split('|');
    if (!lessonId) return null;
    return { lessonId, kind: kind === 'speak' ? 'speak' : 'write' };
  } catch {
    return null;
  }
}

/**
 * The modality of the most recently graded produce step across all lessons, or
 * null when none carries a kind — used to ALTERNATE when the ledger has no verdict
 * on which production skill is weaker.
 */
export function lastProducedKind(): ProduceKind | null {
  try {
    let best: { at: string; kind: ProduceKind } | null = null;
    for (const rec of Object.values(readRetention().lessons)) {
      const p = rec.produced;
      if (!p || (p.kind !== 'write' && p.kind !== 'speak')) continue;
      if (!best || p.at > best.at) best = { at: p.at, kind: p.kind };
    }
    return best?.kind ?? null;
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
