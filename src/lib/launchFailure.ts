/**
 * launchFailure — visible-failure contract for exercise launches.
 *
 * P0 (2026-07-18): a Daily Session activity click could be a SILENT no-op —
 * launchSessionActivity awaits a lazy data chunk; on a stale tab across a
 * deploy (or a flaky connection) the dynamic import rejects, nothing catches
 * it, and the tap does nothing while nh_session_started stays pinned. The
 * contract now: a launch either navigates, or it visibly fails HERE.
 *
 * The launcher hook has no toast access, so failures are broadcast as a
 * window event; SessionCard listens and renders an inline error strip at the
 * exact button the user tapped.
 */
import { reportError } from './errorReporter';

export const LAUNCH_FAILED_EVENT = 'nh:launch-failed';

export type LaunchFailureReason = 'load-error' | 'empty-pool';

export function notifyLaunchFailure(reason: LaunchFailureReason, detail?: unknown): void {
  try {
    window.dispatchEvent(new CustomEvent(LAUNCH_FAILED_EVENT, { detail: { reason } }));
  } catch {
    /* non-browser env */
  }
  try {
    // No `resource` argument on purpose. reportError reads it off the error
    // itself (ContentOfflineError.resourceKey / ContentNotFoundError.id), so
    // every reporting call site gets it, not just this one — and this file
    // does not have to import a second symbol from errorReporter.
    //
    // That second import is not a style point: TEN suites mock
    // '../lib/errorReporter' with a factory listing only the functions they
    // use, so importing `resourceOf` here made it undefined under those mocks,
    // and the throw landed inside this very try — silently suppressing the
    // report the try exists to guarantee. session-launch-failure.test.tsx
    // caught it. Keep the lookup on the reporter's side of the boundary.
    reportError(
      detail instanceof Error ? detail : new Error(`launch failure: ${reason}`),
      'session-launch',
    );
  } catch {
    /* reporting must never throw */
  }
}
