// src/lib/retentionSlot.ts
//
// The daily session's LESSON RETENTION slot (P1.2, 2026-09-07). Lives here
// rather than in useDailySession.ts for the same reason sessionPools,
// croatiaPool, categoryRoutes and inputSlot do: that file is at its 800-line
// cap, and the cap was not raised.
//
// The scheduling itself is lib/lessonRetention; this is only the slot.

import { retentionStatus } from './lessonRetention';
import { retentionReason, withReason } from './activityReason';

export interface RetentionSlotActivity {
  id: string;
  label: string;
  screen: string;
  category: 'general';
  reason?: string;
}

/**
 * One Lesson Review slot when anything is due — a re-check of a passed lesson,
 * an item missed before, or the weekly cumulative mix — and null when nothing
 * is. Placed beside the SRS word slot and before every discretionary pick for
 * the same reason word reviews are: decay is time-sensitive, and a re-check
 * that keeps slipping is a lesson quietly being forgotten. Costs a fill slot
 * rather than adding one (the fill loop caps on activities.length), so session
 * length does not move. An unreadable store returns null — the day's plan must
 * never depend on this.
 */
export function selectRetentionSlot(): RetentionSlotActivity | null {
  try {
    const ret = retentionStatus();
    if (!ret.any) return null;
    return {
      id: 'lessonreview',
      label: 'Lesson Review',
      screen: 'lessonreview',
      category: 'general',
      ...withReason(
        retentionReason({
          rechecks: ret.rechecks.length,
          cards: ret.cardsDue,
          cumulative: ret.cumulativeDue,
        }),
      ),
    };
  } catch {
    return null;
  }
}
