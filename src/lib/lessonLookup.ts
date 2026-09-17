// src/lib/lessonLookup.ts
//
// THE WAY BACK TO THE TEACHING.
//
// The Learning Center made all 180 lessons findable, but only by going and
// looking. The two places a learner is most likely to want the teaching are the
// two places they are already stuck — a wrong answer in a drill, and a concept
// the map has just told them is slipping — and neither offered a way there.
// The wrong-answer panel could explain the ITEM; nothing opened the LESSON.
//
// TWO PIECES, both deliberately small:
//
//   1. `lessonsTeachingScreen` — the INVERSE of the teach→practice coupling.
//      The coupling has always run lesson → category → screen; this runs it
//      backwards, so a drill can name the lesson that taught it. Derived from
//      the same two maps, so a drill authored next month answers correctly on
//      the day it lands.
//
//   2. a one-shot handoff. Neither surface can launch a lesson: `ConceptMapCard`
//      is handed only `setScr`, and `WrongAnswerHelp` sits three components deep
//      inside `ModeDrill`. Both DO have navigation, and the Learning Center
//      already owns `launchAnimLesson` — so they hand the Center a lesson and
//      navigate to it, exactly the shape `nh_open_browse` already uses for the
//      library modal. sessionStorage, consumed atomically, fail-soft: this is
//      ephemeral navigation state and never progress.
//
// WHY THE UNION AND NOT THE PRIMARY ROUTE. `conceptMap` resolves a lesson's
// drill as `CATEGORY_SCREEN_MAP[c] || CATEGORY_EASIER_SCREEN[c]` — primary
// first. Mirroring that precedence backwards loses exactly the drills reached
// through the EASIER route, which is how a lower-level learner arrives at them:
// measured, it covers 107 of the 109 engine-backed drills and drops
// `isklonidbab2` and `objekt`, leaving those two with no way back to their own
// teaching. Taking both routes covers all 109. The cost is that one drill names
// more than one lesson (`objekt` — clitics, clitics-advanced, object-pronouns,
// the documented `CATEGORY_EASIER_SCREEN.clitics` case), and that is reported as
// the several lessons it is rather than resolved by picking one. Naming one of
// three would be a claim the maps do not support.

import { LESSON_TAUGHT_CATEGORY } from './teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from './categoryRoutes';

/** The one-shot handoff key. Ephemeral navigation state, never progress. */
export const LESSON_LOOKUP_KEY = 'nh_lookup_lessons';

/**
 * Every lesson whose taught category routes to `screen`, by either the primary
 * or the easier route. Sorted, so the order a learner sees is stable across
 * renders rather than whatever the map literal happened to be written in.
 */
export function lessonsTeachingScreen(screen: string): string[] {
  if (!screen) return [];
  const out = new Set<string>();
  for (const [lessonId, category] of Object.entries(LESSON_TAUGHT_CATEGORY)) {
    if (CATEGORY_SCREEN_MAP[category] === screen || CATEGORY_EASIER_SCREEN[category] === screen) {
      out.add(lessonId);
    }
  }
  return [...out].sort();
}

/** Hand the Learning Center one or more lessons to open. No-op when empty. */
export function requestLessonLookup(lessonIds: string[]): void {
  if (!lessonIds || lessonIds.length === 0) return;
  try {
    sessionStorage.setItem(LESSON_LOOKUP_KEY, JSON.stringify(lessonIds));
  } catch {
    /* sessionStorage unavailable — the Center simply opens as normal */
  }
}

/**
 * Read and clear the handoff. Atomic: a second caller in the same mount gets
 * null, so a remount cannot re-open a lesson the learner has already left.
 */
export function consumeLessonLookup(): string[] | null {
  try {
    const raw = sessionStorage.getItem(LESSON_LOOKUP_KEY);
    if (!raw) return null;
    sessionStorage.removeItem(LESSON_LOOKUP_KEY);
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    const ids = parsed.filter((v): v is string => typeof v === 'string' && v.length > 0);
    return ids.length > 0 ? ids : null;
  } catch {
    // Unreadable or malformed: clear it so a bad value cannot wedge every future
    // visit to the Center, and open as normal.
    try {
      sessionStorage.removeItem(LESSON_LOOKUP_KEY);
    } catch {
      /* nothing more to do */
    }
    return null;
  }
}
