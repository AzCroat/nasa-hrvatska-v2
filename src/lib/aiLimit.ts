/**
 * aiLimit — single source of truth for the two DIFFERENT 429s the AI endpoints
 * return.
 *
 * `requireAuthedAI` (functions/api/_requireAuth.js) checks two independent
 * limits, in this order, and both answer with HTTP 429:
 *
 *   1. `rate_limited`             — per-minute burst limiter. Wait a moment.
 *   2. `daily_quota_exceeded`     — the daily ceiling. Carries `resetAt`.
 *   3. `monthly_budget_exhausted` — the GLOBAL monthly spend governor
 *      (functions/api/_aiBudget.js). Not the user's fault and not resolved by
 *      waiting a minute or a day; live generation resumes on the 1st. Every
 *      surface must present this as a calm pause with everything non-AI still
 *      working — never as an error the user should retry.
 *
 * Client code that keyed on `res.status === 429` alone told burst-limited
 * users their day was over, so the natural response (send two messages
 * quickly) read as a lockout until tomorrow. Classify with this helper
 * instead of matching the status or the code strings by hand.
 */
export type AiLimitKind = 'burst' | 'daily' | 'budget' | null;

/** One consistent voice for the budget pause, English surfaces. */
export const BUDGET_PAUSE_EN =
  "This month's AI allowance is used up — live AI returns on the 1st. Lessons, reviews, and saved content all keep working.";

/** Ista poruka za hrvatska sučelja (Maja). */
export const BUDGET_PAUSE_HR =
  'Mjesečni AI limit je dosegnut — AI se vraća 1. u mjesecu. Lekcije, vježbe i spremljeni sadržaji rade i dalje.';

export function classifyAiLimit(input: { status?: number; code?: string }): AiLimitKind {
  const code = (input.code || '').trim();
  if (code === 'monthly_budget_exhausted') return 'budget';
  if (code === 'daily_quota_exceeded') return 'daily';
  if (code === 'rate_limited') return 'burst';
  // A 429 with no recognisable code (an endpoint's own limiter, a proxy, a
  // non-JSON body). Default to 'burst': it is checked first server-side and is
  // far the more common of the two, and guessing 'daily' is the worse error —
  // it sends a user away for the day when they only needed to wait a minute.
  if (input.status === 429 || code.includes('429')) return 'burst';
  return null;
}

/**
 * Format a `resetAt` from a `daily_quota_exceeded` body as a local wall-clock
 * time. Returns null for a missing or unparseable value so the caller can pick
 * its own wording rather than rendering "Invalid Date".
 */
export function formatAiResetTime(resetAt?: string | number | null): string | null {
  if (resetAt === null || resetAt === undefined || resetAt === '') return null;
  const d = new Date(resetAt);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
