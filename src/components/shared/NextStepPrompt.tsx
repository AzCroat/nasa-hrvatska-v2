/**
 * src/components/shared/NextStepPrompt.tsx
 *
 * THE CONSTANT PROMPT (owner directive, 2026-08-16): the moment any graded
 * exercise completes — anywhere in the app — a compact "Next up" bar rises
 * above the tab bar recommending exactly ONE next action (from
 * lib/nextStep.ts). ~117 practice screens end in a "← Back" dead end; this
 * component turns every one of them into a fork: continue with the
 * recommendation, or navigate away (where the landing surface — SessionCard,
 * VerificationGateCard, NextUpCard — takes over the prompting). No per-screen
 * edits: completeExercise dispatches EXERCISE_COMPLETE_EVENT and this single
 * App-mounted listener does the rest.
 *
 * Behavior contract:
 *   - appears ~700ms after completion (lets the screen's own done-state land)
 *   - hides on ANY navigation (screen or tab change) — the prompt follows the
 *     user, it never stacks with the landing surface's own recommendations
 *   - launching goes through useNextStepEngine (shared with NextUpCard):
 *     launchSessionActivity routing, session credit markers, browse handoff
 *   - the wrapper is pointer-events:none — ONLY the pill itself is clickable,
 *     so it can never intercept taps meant for content or the tab bar
 */

import { useEffect, useRef, useState } from 'react';
import { type NextStep } from '../../lib/nextStep.js';
import { EXERCISE_COMPLETE_EVENT, REQUEST_NEXT_STEP_EVENT } from '../../lib/sessionSignal.js';
import { useNextStepEngine } from '../../hooks/useNextStepEngine.js';
import { useLaunchFailure } from '../../hooks/useLaunchFailure';
import { LAUNCH_FAILURE_COPY } from './LaunchFailureNotice';

const SHOW_DELAY_MS = 700;

export default function NextStepPrompt() {
  const { computeStep, launch, navKey } = useNextStepEngine();
  const [step, setStep] = useState<NextStep | null>(null);
  // THE PILL CLEARED ITSELF BEFORE LAUNCHING, so a failed launch removed the
  // fork and restored the "← Back" dead end this component exists to abolish —
  // the learner tapped, the pill vanished, and nothing happened. Keeping the
  // step and showing the cause in place is the smallest fix that preserves the
  // pointer-events contract: the wrapper stays pointer-events:none and only
  // this same button is clickable.
  const { reason: launchError, clear: clearLaunchError } = useLaunchFailure();
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Listen for completions. Recompute the recommendation at FIRE time (state
  // has just changed) — never cache across completions.
  const computeRef = useRef(computeStep);
  computeRef.current = computeStep;
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onComplete = () => {
      if (showTimer.current) clearTimeout(showTimer.current);
      showTimer.current = setTimeout(() => {
        setStep(computeRef.current());
      }, SHOW_DELAY_MS);
    };
    window.addEventListener(EXERCISE_COMPLETE_EVENT, onComplete);
    window.addEventListener(REQUEST_NEXT_STEP_EVENT, onComplete);
    return () => {
      window.removeEventListener(EXERCISE_COMPLETE_EVENT, onComplete);
      window.removeEventListener(REQUEST_NEXT_STEP_EVENT, onComplete);
      if (showTimer.current) clearTimeout(showTimer.current);
    };
  }, []);

  // Any navigation dismisses the prompt — the landing surface takes over.
  const lastNavKey = useRef(navKey);
  useEffect(() => {
    if (navKey !== lastNavKey.current) {
      lastNavKey.current = navKey;
      if (showTimer.current) clearTimeout(showTimer.current);
      setStep(null);
    }
  }, [navKey]);

  if (!step) return null;

  function go() {
    const s = step!;
    // Do NOT clear the step here. A successful launch navigates and the navKey
    // effect above dismisses the pill; a FAILED one leaves it in place so the
    // learner still has somewhere to tap.
    clearLaunchError();
    launch(s);
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 'calc(76px + env(safe-area-inset-bottom, 0px))',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 850, // below the nav bar / modals
        padding: '0 12px',
      }}
    >
      <button
        data-testid="next-up-bar"
        data-launch-failure={launchError ?? undefined}
        onClick={go}
        style={{
          pointerEvents: 'auto',
          maxWidth: 420,
          width: '100%',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          background: 'linear-gradient(135deg,#0e7490,#0a5c73)',
          color: '#fff',
          border: 'none',
          borderRadius: 14,
          cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(10,92,115,0.35)',
        }}
      >
        <span style={{ fontSize: 20, flexShrink: 0 }}>▶</span>
        <span style={{ minWidth: 0 }}>
          <span
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 800,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {launchError ? "That didn't start" : `Next up: ${step.label}`}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 11,
              fontWeight: 500,
              opacity: 0.85,
              // A failure is a sentence; nowrap would ellipsis it to nothing useful.
              whiteSpace: launchError ? 'normal' : 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {launchError ? LAUNCH_FAILURE_COPY[launchError] : step.reason}
          </span>
        </span>
      </button>
    </div>
  );
}
