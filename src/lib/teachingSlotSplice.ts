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

/** `prev` with today's teaching slots inserted before its next unfinished activity. */
export function withTeachingSlots(prev: DailySession, userCefr: string): DailySession {
  const slots = buildCurriculumSlots({
    userCefr,
    screenMap: CATEGORY_SCREEN_MAP,
    easierMap: CATEGORY_EASIER_SCREEN,
    screenCefr: SCREEN_CEFR,
    isUnlocked,
  }) as SessionActivity[];
  const activities = spliceTeachingSlots(prev.activities, prev.completedIds, slots);
  return {
    ...prev,
    activities,
    spineSeen: true,
    estimatedMinutes: activities.length * MINUTES_PER_ACTIVITY,
  };
}
