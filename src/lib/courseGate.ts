// src/lib/courseGate.ts
//
// NEVER DRILL A CONCEPT THE COURSE TEACHES LATER (2026-09-27).
//
// Found by walking the course in a browser: a Unit 1 learner — who had read the
// alphabet, greetings, biti, gender and the plural and nothing else — opened Home
// and was served "Genitive: You haven't practised the genitive yet." The genitive
// is taught in Unit 5. Measured with the real session builder over 40 builds per
// level, the adaptive pick (P2) put `genitivedrill` into **40 of 40** sessions for a
// Unit 1 learner at A2, because the adaptive store's new-user first pick is the
// genitive and every slot below the teaching slot gates on CEFR, never on the
// course. The course taught one thing and the session tested another, which is the
// owner's original complaint about the app ("it seems to bounce around") surviving
// in the one surface that composes the day.
//
// THE RULE: a drill whose subject the course teaches in a unit the learner has not
// reached is not served by the SESSION. Everything else is untouched:
//   * drills tied to no lesson (topic vocabulary games, culture, listening) stay;
//   * the MODALITY categories — writing, speaking, listening, reading — are skills
//     practised at every level, not concepts one lesson introduces, so the B2
//     `formal-email` lesson coupling to `writing` must not take Guided Writing away
//     from an A1 learner (measured: it would have, in 11 of 40 A1 sessions);
//   * the LIBRARY stays open — this gates the path, exactly as the unit lock does.
//
// "REACHED" is a lesson the learner has read (the library counts — reading it IS
// being taught it), any lesson in a unit the course has ADVANCED them past, or the
// one lesson the course serves TODAY. Until redesign increment 3 (2026-09-28) every
// lesson of the OPEN unit counted, read or not — so on a free slot the session could
// drill lesson 4's concept while the learner stood on lesson 1 (the design's §6,
// owner decision 2: graded picks come from what has been taught). Today's lesson
// stays reached because its coupled drill sits in the plan beside it, and the plan
// splice (`teachingSlotSplice`) drops what is ahead — the drill for the lesson being
// taught today is not ahead. A category is reached when ANY lesson teaching it is
// reached, so a concept revisited at a higher level (`genitive-deep`) never re-locks
// what `genitive-intro` taught.
//
// NO SPINE MEANS NOTHING IS AHEAD, so the session composes exactly as it did before
// the course existed — the same null contract every course surface keeps.

import { readCourseState } from './courseStep';
import { readCompletedLessons } from './curriculumProgress';
import { LESSON_TAUGHT_CATEGORY } from './teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN } from './categoryRoutes';
import type { CourseUnit } from './courseUnits';

/** Skills practised at every level; no single lesson introduces them. */
export const MODALITY_CATEGORIES: ReadonlySet<string> = new Set([
  'writing',
  'speaking',
  'listening',
  'reading',
]);

export interface CourseAhead {
  /** Concept categories taught only in units the learner has not reached. */
  categories: ReadonlySet<string>;
  /** Screens that drill only such categories (their route, not their pool tag). */
  screens: ReadonlySet<string>;
  /** Concept categories the learner HAS reached. */
  reached: ReadonlySet<string>;
}

export const NOTHING_AHEAD: CourseAhead = {
  categories: new Set(),
  screens: new Set(),
  reached: new Set(),
};

function routesOf(category: string): string[] {
  const r = category as keyof typeof CATEGORY_SCREEN_MAP;
  return [CATEGORY_SCREEN_MAP[r], CATEGORY_EASIER_SCREEN[r]].filter(Boolean) as string[];
}

/** Pure: what is ahead, given the course's units and the lessons the learner has reached. */
export function courseAhead(
  units: readonly CourseUnit[],
  reached: ReadonlySet<string>,
): CourseAhead {
  const reachedCats = new Set<string>();
  const taughtCats = new Set<string>();
  for (const u of units) {
    for (const l of u.lessons) {
      const c = LESSON_TAUGHT_CATEGORY[l.id];
      if (!c || MODALITY_CATEGORIES.has(c)) continue;
      taughtCats.add(c);
      if (reached.has(l.id)) reachedCats.add(c);
    }
  }
  const categories = new Set([...taughtCats].filter((c) => !reachedCats.has(c)));
  const reachedScreens = new Set([...reachedCats].flatMap(routesOf));
  // A screen that also drills something the learner HAS reached stays servable:
  // a route shared by a reached and an unreached category is the drill for both.
  const screens = new Set([...categories].flatMap(routesOf).filter((s) => !reachedScreens.has(s)));
  return { categories, screens, reached: reachedCats };
}

/** The learner's current gate, read from storage. Never throws. */
export function readCourseAhead(): CourseAhead {
  try {
    const state = readCourseState();
    if (state.units.length === 0) return NOTHING_AHEAD;
    const reached = new Set(readCompletedLessons());
    for (const u of state.units) {
      if (state.advanced.has(u.id)) for (const l of u.lessons) reached.add(l.id);
    }
    // Today's lesson: the first unread lesson of the unit the learner stands on.
    const current = state.units.find((u) => u.index === state.currentIndex);
    const today = current?.lessons.find((l) => !reached.has(l.id));
    if (today) reached.add(today.id);
    return courseAhead(state.units, reached);
  } catch {
    return NOTHING_AHEAD;
  }
}

/**
 * True when the session must not serve this pool entry yet: it is TAGGED with a
 * concept still ahead, or it is a screen that drills only such concepts — unless its
 * own tag is a concept the learner has reached, which makes it their drill too.
 */
export function isAheadOfCourse(
  ex: { category?: string; screen: string },
  ahead: CourseAhead,
): boolean {
  if (ex.category && ahead.categories.has(ex.category)) return true;
  if (ex.category && ahead.reached.has(ex.category)) return false;
  return ahead.screens.has(ex.screen);
}
