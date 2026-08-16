/**
 * src/components/shared/NextStepPrompt.tsx
 *
 * THE CONSTANT PROMPT (owner directive, 2026-08-16): the moment any graded
 * exercise completes — anywhere in the app — a compact "Next up" bar rises
 * above the tab bar recommending exactly ONE next action (from
 * lib/nextStep.ts). ~117 practice screens end in a "← Back" dead end; this
 * component turns every one of them into a fork: continue with the
 * recommendation, or navigate away (where the landing surface — SessionCard,
 * VerificationGateCard — takes over the prompting). No per-screen edits:
 * completeExercise dispatches EXERCISE_COMPLETE_EVENT and this single
 * App-mounted listener does the rest.
 *
 * Behavior contract:
 *   - appears ~700ms after completion (lets the screen's own done-state land)
 *   - hides on ANY navigation (screen or tab change) — the prompt follows the
 *     user, it never stacks with the landing surface's own recommendations
 *   - tapping it launches via launchSessionActivity (the only launcher that
 *     safely opens arbitrary screens); kind 'session' also sets the session
 *     markers so completion credits today's plan; kind 'browse' opens the
 *     Learn-tab library via the one-shot nh_open_browse handoff
 *   - the wrapper is pointer-events:none — ONLY the pill itself is clickable,
 *     so it can never intercept taps meant for content or the tab bar
 */

import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import AppContext from '../../context/AppContext.jsx';
import { getNextStep, type NextStep } from '../../lib/nextStep.js';
import { EXERCISE_COMPLETE_EVENT, REQUEST_NEXT_STEP_EVENT } from '../../lib/sessionSignal.js';
import { setSessionCategory } from '../../lib/sessionCategory.js';
import { getUserCefr } from '../../lib/cefr.js';
import { getContentUnlockLevel } from '../../lib/cefrCertification.js';
import { useContent } from '../../hooks/useContent.js';

const SHOW_DELAY_MS = 700;

/** Same servable-vocab pool HomeTab builds — used for the SRS due count.
 *  Content is lazy-loaded (useContent); until it arrives the SRS rung of the
 *  ladder simply doesn't fire, which only reorders the recommendation. */
function buildPoolWords(vocab: Record<string, unknown[][]> | undefined): Set<string> {
  const s = new Set<string>();
  try {
    const pool = vocab ?? {};
    for (const cat of Object.keys(pool)) {
      for (const row of pool[cat] || []) {
        if (Array.isArray(row) && typeof row[0] === 'string') s.add(row[0] as string);
      }
    }
  } catch {
    /* vocab unreadable — SRS rung just won't fire */
  }
  return s;
}

export default function NextStepPrompt() {
  const ctx = useContext(AppContext) as {
    st?: { xp?: number; lc?: number; gc?: number };
    currentScreen?: string;
    tab?: string;
    setScr?: (s: string) => void;
    setTab?: (t: string) => void;
    launchSessionActivity?: (screen: string, category?: string) => Promise<void> | void;
  } | null;

  const [step, setStep] = useState<NextStep | null>(null);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { content } = useContent();
  const poolWords = useMemo(
    () => buildPoolWords(content?.V as Record<string, unknown[][]> | undefined),
    [content?.V],
  );

  const st = ctx?.st;
  const currentScreen = ctx?.currentScreen;
  const tab = ctx?.tab;

  // Listen for completions. Recompute the recommendation at FIRE time (state
  // has just changed) — never cache across completions.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onComplete = () => {
      if (showTimer.current) clearTimeout(showTimer.current);
      showTimer.current = setTimeout(() => {
        try {
          const cefr = getContentUnlockLevel(getUserCefr(st?.xp ?? 0, st?.lc ?? 0, st?.gc ?? 0));
          setStep(getNextStep({ userCefr: cefr, poolWords }));
        } catch {
          /* recommendation unavailable — show nothing rather than break */
        }
      }, SHOW_DELAY_MS);
    };
    window.addEventListener(EXERCISE_COMPLETE_EVENT, onComplete);
    window.addEventListener(REQUEST_NEXT_STEP_EVENT, onComplete);
    return () => {
      window.removeEventListener(EXERCISE_COMPLETE_EVENT, onComplete);
      window.removeEventListener(REQUEST_NEXT_STEP_EVENT, onComplete);
      if (showTimer.current) clearTimeout(showTimer.current);
    };
  }, [st, poolWords]);

  // Any navigation dismisses the prompt — the landing surface takes over.
  const navKey = `${tab ?? ''}|${currentScreen ?? ''}`;
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
    setStep(null);
    try {
      if (s.kind === 'browse') {
        try {
          sessionStorage.setItem('nh_open_browse', '1');
        } catch {
          /* one-shot handoff only */
        }
        ctx?.setTab?.('learn');
        return;
      }
      if (s.kind === 'verification') {
        ctx?.setScr?.('equivalency');
        return;
      }
      if (s.kind === 'session' && s.activityId) {
        // Credit today's plan on return — same markers HomeTab's start sets.
        try {
          sessionStorage.setItem('nh_session_started', s.screen);
        } catch {
          /* marker is best-effort */
        }
        setSessionCategory(s.activityId);
      }
      if (ctx?.launchSessionActivity) {
        void ctx.launchSessionActivity(s.screen, s.category);
      } else {
        ctx?.setScr?.(s.screen);
      }
    } catch {
      /* navigation failed — the user still has the normal UI */
    }
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
            Next up: {step.label}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 11,
              fontWeight: 500,
              opacity: 0.85,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {step.reason}
          </span>
        </span>
      </button>
    </div>
  );
}
