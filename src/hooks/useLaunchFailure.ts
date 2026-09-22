/**
 * useLaunchFailure — one subscription to the launch-failure broadcast.
 *
 * `lib/launchFailure.ts` exists because "a launch either navigates, or it
 * visibly fails HERE" (P0, 2026-07-18). It broadcasts; something has to
 * RENDER. Until 2026-09-22 exactly one thing did — SessionCard's fresh /
 * in-progress CTA — and the launch surfaces built AFTER it did not:
 *
 *   SessionCard STATE C (`next-up-primary`)  the complete-state hero, which
 *                                            the owner's 2026-08-17 directive
 *                                            made the primary guided path
 *   NextUpCard                               pinned atop the Practice tab
 *   NextStepPrompt                           the pill after every completion
 *
 * All three route through `useNextStepEngine`, so the app's whole "what next"
 * mechanism was the silent half. Tapping any of them on a failed lazy chunk or
 * an empty pool did nothing at all, with nothing on screen to say why — which
 * is the dead end the next-step directive exists to abolish.
 *
 * The hook keeps the REASON rather than a boolean, because the two reasons
 * need different sentences and the one surface that did render told every
 * learner to check their connection — including for `empty-pool`, which is a
 * content gap and has nothing to do with the network.
 */
import { useEffect, useState, useCallback } from 'react';
import {
  LAUNCH_FAILED_EVENT,
  type LaunchFailureReason,
  type LaunchFailureScope,
} from '../lib/launchFailure';

export interface LaunchFailureState {
  reason: LaunchFailureReason | null;
  /** Call when the learner retries, so the strip does not outlive its cause. */
  clear: () => void;
}

export function useLaunchFailure(scope: LaunchFailureScope = 'session'): LaunchFailureState {
  const [reason, setReason] = useState<LaunchFailureReason | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const onFail = (e: Event) => {
      const d = (e as CustomEvent)?.detail ?? {};
      // An event with no scope predates the field; treat it as 'session',
      // which is where every broadcaster lived when it was written.
      if ((d.scope ?? 'session') !== scope) return;
      const r = d.reason;
      // An unrecognised reason still means the launch failed. Falling back to
      // 'load-error' shows the retry wording, which is the safer of the two:
      // it never claims there is no content when there may be.
      setReason(r === 'empty-pool' || r === 'load-error' ? r : 'load-error');
    };
    window.addEventListener(LAUNCH_FAILED_EVENT, onFail);
    return () => window.removeEventListener(LAUNCH_FAILED_EVENT, onFail);
  }, [scope]);

  const clear = useCallback(() => setReason(null), []);
  return { reason, clear };
}
