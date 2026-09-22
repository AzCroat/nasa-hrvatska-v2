// src/hooks/useTeachingSlotRetry.ts
//
// PRIORITY 0's SECOND CHANCE (2026-09-22). Split out of useDailySession for the
// same reason retentionSlot, inputSlot and croatiaPool were: that file sits at
// its 800-line ceiling and the ceiling was not raised.
//
// THE DEFECT, measured in a browser rather than reasoned about: on a learner's
// FIRST load on a device the daily plan contained no lesson at all, and nothing
// put one back for the rest of that day — the exact failure the curriculum work
// exists to prevent, arrived at from a different direction.
//
// It is not a race that sometimes goes the wrong way. HomeTab BUILDS the plan
// from a synchronous read of the cached spine at mount, while the spine is
// fetched by a fire-and-forget effect in App.tsx. The build therefore always
// precedes the data it needs: plan committed at 550ms, curriculum request not
// issued until 6474ms. The plan is then persisted and invalidated only by a date
// or CEFR change, so navigating away, returning, and a full reload all kept the
// lesson-less plan.
//
// THE TRIGGER IS THE SPINE'S OWN WRITE, and the first version of this fix got
// that wrong in a way worth recording. It listened to `poolWords`, on the
// reasoning that "the content load that populates the vocabulary pool is the one
// that writes the spine". It is not: `getContent()` fetches /api/content/core
// and `getCurriculumSpine()` fetches /api/content/curriculum — two calls, kicked
// off together, which is why they looked like one event in the timing trace (14ms
// apart). The retry never fired, and only re-running the browser walk showed it.
// Watching CURRICULUM_SPINE_EVENT watches the moment the fact becomes true.

import { useCallback, useEffect, useRef } from 'react';
import { localDateStr } from '../lib/dateUtils';
import { CURRICULUM_SPINE_EVENT, hasCurriculumSpine } from '../lib/curriculumProgress';
import { shouldRetryTeachingSlot } from '../lib/curriculumSlot';

interface RetryableSession {
  date: string;
  completedIds: string[];
  spineSeen?: boolean;
}

/**
 * Rebuild today's plan once, if it was committed before the curriculum arrived.
 *
 * Checks on mount (the spine may already be cached from an earlier visit) and
 * again whenever a spine is written. Fires at most once per mount; every clause
 * of the guard is a reason not to rebuild, and a started session is refused
 * outright — re-rolling one is the 2026-05-21 "I did my activities but the card
 * forgot" incident, which is strictly worse than a missing lesson.
 */
export function useTeachingSlotRetry(session: RetryableSession, rebuild: () => void): void {
  const retried = useRef(false);
  const latest = useRef({ session, rebuild });
  latest.current = { session, rebuild };

  const attempt = useCallback(() => {
    if (retried.current) return;
    const { session: s, rebuild: run } = latest.current;
    if (
      !shouldRetryTeachingSlot({
        spineSeen: s.spineSeen,
        sessionDate: s.date,
        today: localDateStr(),
        completedCount: s.completedIds.length,
        spineAvailable: hasCurriculumSpine,
      })
    ) {
      return;
    }
    retried.current = true;
    run();
  }, []);

  useEffect(() => {
    attempt();
    window.addEventListener(CURRICULUM_SPINE_EVENT, attempt);
    return () => window.removeEventListener(CURRICULUM_SPINE_EVENT, attempt);
  }, [attempt]);
}
