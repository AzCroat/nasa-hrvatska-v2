// src/lib/sessionLaunchDay.ts
//
// A PENDING SESSION COMPLETION BELONGS TO THE DAY IT WAS EARNED (course walk,
// 2026-09-30).
//
// Home credits a daily-session activity through two sessionStorage markers:
// `nh_session_started` (written when an activity is launched) and
// `nh_session_completed` (written when it finishes). Home applies them on its next
// mount. Nothing said WHICH DAY they were written, and sessionStorage lives as long
// as the tab — so a learner who opened today's lesson from Home, finished it, and left
// by any door but Home (the Learn tab, the course map, closing the app to the
// background) carried the pending completion into tomorrow. Tomorrow's Home built a
// new plan, applied yesterday's `animlesson` completion to it, and showed tomorrow's
// lesson ✓ done before it was opened — Begin then went straight to the drill.
//
// The launch now stamps the day beside the marker, and Home drops a marker stamped on
// another day instead of applying it. A marker with no stamp (written by a build
// before this one, still in an open tab) is applied as before.
//
// Its own module, not `sessionSignal`: fourteen test files partially `vi.mock` that
// one, and a new named import from a partially mocked module is `undefined` there.

import { localDateStr } from './dateUtils';

const STARTED_KEY = 'nh_session_started';
const COMPLETED_KEY = 'nh_session_completed';
export const SESSION_LAUNCH_DAY_KEY = 'nh_session_started_on';

/** Record a launched daily-session activity, stamped with today's date. */
export function markSessionLaunch(screen: string): void {
  try {
    sessionStorage.setItem(STARTED_KEY, screen);
    sessionStorage.setItem(SESSION_LAUNCH_DAY_KEY, localDateStr());
  } catch {
    /* sessionStorage unavailable — the marker is best-effort */
  }
}

export interface PendingSessionActivity {
  /** The activity to credit, or null when there is none (or it is from another day). */
  activity: string | null;
  /** The activity that fired the completion signal, when one did. */
  completed: string | null;
}

/**
 * Read and CLEAR the pending markers. Returns nothing to credit when they were
 * stamped on a day other than today.
 */
export function takePendingSessionActivity(): PendingSessionActivity {
  try {
    const pending = sessionStorage.getItem(STARTED_KEY);
    const completed = sessionStorage.getItem(COMPLETED_KEY);
    const day = sessionStorage.getItem(SESSION_LAUNCH_DAY_KEY);
    sessionStorage.removeItem(STARTED_KEY);
    sessionStorage.removeItem(COMPLETED_KEY);
    sessionStorage.removeItem(SESSION_LAUNCH_DAY_KEY);
    if (day && day !== localDateStr()) return { activity: null, completed: null };
    // `pending` is gone when the learner left by a tab after finishing (App.tsx
    // setTab clears it); `completed` still names the finished activity then.
    return { activity: pending || completed, completed };
  } catch {
    return { activity: null, completed: null };
  }
}
