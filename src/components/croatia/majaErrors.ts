/**
 * majaErrors — status-aware failure messages for Razgovor (MajaScreen).
 *
 * WHY THIS EXISTS
 * ---------------
 * MajaScreen had two failure paths with very different quality:
 *
 *   startSession  (/api/maja, isSessionStart) — mapped 401 / 429 / 5xx to
 *                 specific, actionable Croatian messages.
 *   sendTurn      (/api/maja, stream: true)  — threw `new Error("API " + status)`,
 *                 then caught it with a bare `catch {}` that discarded the status
 *                 and always showed "Nešto je pošlo po krivu. Pokušaj ponovo."
 *
 * So the *first* message of a conversation told the learner the truth ("daily AI
 * limit exceeded", "session expired"), and every message after it told them
 * nothing. Mid-conversation quota exhaustion in particular reads as a transient
 * glitch, so the learner retries into the same wall.
 *
 * Both paths now share this mapping. The strings are the ones startSession
 * already shipped, reused verbatim — this is a routing fix, not new copy.
 */

import { classifyAiLimit, BUDGET_PAUSE_HR } from '../../lib/aiLimit';

/**
 * Shape both call sites throw: an Error carrying the HTTP status, and the
 * server's error code when the body could be read.
 */
export interface MajaApiError extends Error {
  _status?: number;
  _code?: string;
}

/**
 * Map an HTTP status (and the server's error code, when we have it) to the
 * learner-facing Croatian message.
 *
 * `fallback` is the caller's own default for "something failed but we have no
 * status" — a transport error, an aborted stream, a JSON parse failure. The two
 * call sites keep their existing distinct defaults deliberately: failing to
 * *open* a session is a connection problem, while failing mid-conversation is
 * not necessarily.
 *
 * The 429 branch used to be unconditional: any 429 was reported as the DAILY
 * limit ("Pokušaj sutra"). /api/maja goes through requireAuthedAI, which
 * answers 429 for two unrelated reasons — `rate_limited`, the per-minute burst
 * limiter, and `daily_quota_exceeded`, the real daily ceiling. So a learner who
 * simply typed two messages quickly was told to come back tomorrow, and the
 * obvious response to that message (stop trying) was exactly wrong.
 * classifyAiLimit is the single source of truth for the distinction; when no
 * code reaches us it deliberately assumes 'burst', because guessing 'daily' is
 * the more damaging error.
 */
export function majaErrorMessage(
  status: number | undefined,
  fallback: string,
  code?: string,
): string {
  if (status === 401) return 'Sesija je istekla. Odjavi se i prijavi ponovo.';
  if (status === 429) {
    const limit = classifyAiLimit({ status, code });
    if (limit === 'budget') return BUDGET_PAUSE_HR;
    return limit === 'daily'
      ? 'Prekoračen dnevni limit AI razgovora. Pokušaj sutra.'
      : 'Šalješ poruke prebrzo. Pričekaj trenutak i pokušaj ponovo.';
  }
  if (status !== undefined && status >= 500) return 'Serverska greška. Pokušaj za koji trenutak.';
  return fallback;
}

/** Default when a session cannot be opened at all. */
export const MAJA_START_FALLBACK = 'Nije moguće spojiti se s Majom. Provjeri internetsku vezu.';

/** Default when a turn fails mid-conversation. */
export const MAJA_TURN_FALLBACK = 'Nešto je pošlo po krivu. Pokušaj ponovo.';

/**
 * True when a failure is the user's own abort (navigating away, ending the
 * session, or the caller's timeout) rather than something worth reporting.
 * Razgovor aborts its stream on teardown, so without this check every normal
 * exit would page as an error.
 */
export function isAbortFailure(err: unknown): boolean {
  return (err as Error | undefined)?.name === 'AbortError';
}
