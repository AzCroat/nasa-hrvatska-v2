// src/lib/teachingSlotSplice.ts
//
// Today's lesson, inserted into a plan the learner has already started (2026-09-27).
// Split out of useDailySession, whose 800-line ceiling was not raised. The decision
// (`shouldSpliceTeachingSlot`) and the transform (`spliceTeachingSlots`) live in
// curriculumSlot; this is the one place that turns a plan into the spliced plan.

import { isUnlocked } from './cefr';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from './categoryRoutes';
import { buildCurriculumSlots, spliceTeachingSlots } from './curriculumSlot';
import { MINUTES_PER_ACTIVITY, type DailySession, type SessionActivity } from './dailySessionStore';
import { isAheadOfCourse, readCourseAhead } from './courseGate';
import { hasPendingSessionActivity } from './sessionSignal';

/**
 * THE PLAN WAS BUILT WITHOUT A COURSE, SO IT MAY HOLD WHAT THE COURSE HAS NOT TAUGHT
 * (2026-09-27). With no spine, `readCourseAhead()` answers "nothing is ahead" — the
 * session composes as it did before the course existed — so a plan committed in the
 * first seconds of a cold start can serve the genitive drill to a Unit 2 learner.
 * Measured in a browser: the splice added the check-up and Unit 2's first lesson and
 * left "Genitive — you haven't practised the genitive yet" beside them.
 *
 * Only UNSTARTED activities are dropped; a completed one keeps its place, so the card
 * cannot forget work. And nothing is dropped while an activity is in flight: Home
 * matches its completion against the plan when the learner returns, and removing the
 * activity they are doing would lose that. (A failed read is treated as in flight.)
 */
function withoutAheadOfCourse(
  activities: readonly SessionActivity[],
  completedIds: readonly string[],
): SessionActivity[] {
  let pending = true;
  try {
    pending = hasPendingSessionActivity();
  } catch {
    /* treat as in flight */
  }
  if (pending) return [...activities];
  const ahead = readCourseAhead();
  const done = new Set(completedIds);
  return activities.filter(
    (a) => done.has(a.id) || !isAheadOfCourse({ category: a.category, screen: a.screen }, ahead),
  );
}

/** `prev` with today's teaching slots inserted before its next unfinished activity. */
export function withTeachingSlots(prev: DailySession, userCefr: string): DailySession {
  const slots = buildCurriculumSlots({
    userCefr,
    screenMap: CATEGORY_SCREEN_MAP,
    easierMap: CATEGORY_EASIER_SCREEN,
    screenCefr: SCREEN_CEFR,
    isUnlocked,
  }) as SessionActivity[];
  const activities = withoutAheadOfCourse(
    spliceTeachingSlots(prev.activities, prev.completedIds, slots),
    prev.completedIds,
  );
  return {
    ...prev,
    activities,
    spineSeen: true,
    estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY,
  };
}
