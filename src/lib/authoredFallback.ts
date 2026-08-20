// src/lib/authoredFallback.ts
//
// DEGRADE VISIBLY (recommender audit, 2026-08-20).
//
// The last residual weakness from the gating audit. When an AI-backed activity
// could not generate, the screen credited the daily session and showed an error.
// That was the right instinct — a dead endpoint must never strand the session at
// N-1/N, a real production incident class — but it bought safety with a lie: the
// learner got credit for an activity they never did, and no Croatian.
//
// The honest version is a SUBSTITUTE. Every AI-dependent activity that has an
// authored equivalent teaching the same skill now offers it, one tap, on the
// failure screen. The credit follows the substitute rather than the outage:
//
//   generation fails  → no credit; the authored equivalent is offered
//   learner taps it   → navigate; still no credit
//   they finish it    → completeExercise fires the session signal, which matches
//                       on the ORIGINAL launched screen and credits the slot
//
// So the session completes off real work. The anti-strand guarantee survives
// because the substitute is authored content that cannot itself fail — and for
// any AI screen with NO authored equivalent, the old credit-on-failure behaviour
// is kept deliberately, since there is nothing better to offer.

import { signalSessionCompleteIfActive } from './sessionSignal';

export interface AuthoredFallback {
  /** Screen id to navigate to. */
  screen: string;
  /** Button label — names the content, not the failure. */
  label: string;
  /** One line telling the learner what they are getting instead. */
  blurb: string;
}

/**
 * AI-dependent screen → authored equivalent teaching the SAME skill.
 *
 * Deliberately small. An entry belongs here only when the substitute practises
 * what the original would have practised; sending a learner from a failed
 * listening exercise to a vocabulary game would be a non-sequitur dressed up as
 * helpfulness. `ai_listening` and `listening_comprehension` are both the
 * listening category, which is exactly the bar.
 */
export const AUTHORED_FALLBACK: Readonly<Record<string, AuthoredFallback>> = {
  ai_listening: {
    screen: 'listening_comprehension',
    label: 'Do a listening exercise instead',
    blurb: 'Same skill, ready-made audio — no waiting on the generator.',
  },
};

export function authoredFallbackFor(screen: string): AuthoredFallback | undefined {
  return AUTHORED_FALLBACK[screen];
}

/**
 * Credit the daily-session slot ONLY when there is no authored substitute to
 * offer — the credit-or-strand case, where stranding is worse.
 *
 * Where a substitute DOES exist the session stays uncredited on purpose: the
 * learner is one tap from real practice, and finishing it credits this slot via
 * the completion signal. Keeping that rule here rather than in each screen means
 * a screen cannot half-adopt the policy by adding a fallback and forgetting to
 * stop crediting.
 */
export function creditIfNoAuthoredFallback(screen: string): void {
  if (!authoredFallbackFor(screen)) signalSessionCompleteIfActive(screen);
}
