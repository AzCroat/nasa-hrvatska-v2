// src/lib/aiFailure.ts
//
// ONE name and ONE honest sentence for every way a feedback request can fail
// (owner directive, 2026-09-07: "feedback on writing or any feedback provided
// on speech MUST work EVERY TIME"). The audio work of 2026-09-06 gave TTS a
// `TtsFailure` record because every refusal path used to be a bare `false`;
// the feedback surfaces had the same defect in more shapes: the speaking
// coach returned `null` for a budget pause, a 502 and a dropped connection
// alike and the screen rendered NOTHING; the exam speaking scorer folded
// "monthly budget reached" and "you mumbled" into one `null` that the screen
// read back as "We couldn't score that clearly"; the grammar explainer showed
// the literal string "API error 429"; the graded reader said "check your
// connection" for a signed-out learner. And none of it reached Sentry.
//
// Every feedback surface now classifies its failure here, shows the sentence
// this file writes, offers a retry when the cause is retryable, and reports
// it (capped) so the next occurrence names itself.

import { classifyAiLimit, formatAiResetTime, BUDGET_PAUSE_EN } from './aiLimit';
import { reportError } from './errorReporter';

export type AiFailureKind =
  | 'unauthenticated'
  | 'burst'
  | 'daily'
  | 'budget'
  | 'insufficient'
  | 'stt'
  | 'unusable_reply'
  | 'server'
  | 'timeout'
  | 'network'
  | 'not_configured';

export interface AiFailure {
  kind: AiFailureKind;
  status?: number;
  code?: string;
  /** True when trying again can reasonably succeed without waiting for a reset. */
  retryable: boolean;
  /** One learner-facing sentence. */
  message: string;
  /** For 'daily': ISO reset time from the server, when it sent one. */
  resetAt?: string;
}

// A reply that arrived and cannot be used — the retry genuinely clears it, so
// the learner is told that rather than "the service is unavailable". The last
// two joined when the speaking coach's six indistinguishable 502s were given
// codes (2026-09-10): an empty completion and a non-JSON envelope are the
// model misbehaving, not the service being down.
const UNUSABLE_CODES = new Set([
  'eval_unparseable',
  'parse_failed',
  'rubric_failed',
  'empty_reply',
  'upstream_not_json',
]);
const STT_CODES = new Set(['stt_failed', 'stt_not_configured', 'bad_audio']);

/** The sentence for a kind, in the app's one voice. */
export function describeAiFailure(f: Pick<AiFailure, 'kind' | 'resetAt'>): string {
  switch (f.kind) {
    case 'unauthenticated':
      return 'Sign in to get feedback — evaluation runs on your account.';
    case 'burst':
      return 'A little too fast — wait a moment and try again.';
    case 'daily': {
      const t = formatAiResetTime(f.resetAt);
      return `Daily AI limit reached — feedback resets at ${t ?? 'midnight UTC'}.`;
    }
    case 'budget':
      return BUDGET_PAUSE_EN;
    case 'insufficient':
      return 'We heard too little to score fairly — say a few more sentences and try again.';
    case 'stt':
      return "We couldn't transcribe the recording. Check the microphone and try again.";
    case 'unusable_reply':
      return 'The evaluator returned an unusable answer. Try again — this clears on a retry.';
    case 'timeout':
      return 'The evaluator took too long to answer. Try again.';
    case 'network':
      return 'No connection — reconnect to get feedback.';
    case 'not_configured':
      return 'This evaluator is not set up on the server yet.';
    case 'server':
    default:
      return 'The evaluation service is temporarily unavailable. Try again in a moment.';
  }
}

function build(kind: AiFailureKind, extra: Partial<AiFailure> = {}): AiFailure {
  const retryable = !['unauthenticated', 'daily', 'budget', 'not_configured'].includes(kind);
  const f: AiFailure = { kind, retryable, message: '', ...extra };
  f.message = describeAiFailure(f);
  return f;
}

/**
 * Classify a NON-OK response (or a null transport result). Reads the body
 * once for the server's error code; the response is consumed.
 */
export async function failureFromResponse(res: Response | null): Promise<AiFailure> {
  if (!res) return build('network');
  let code = '';
  let resetAt: string | undefined;
  let bodyOk: unknown;
  let nonJson = false;
  try {
    const body = (await res.json()) as { error?: unknown; resetAt?: unknown; ok?: unknown };
    if (body && typeof body.error === 'string') code = body.error;
    if (body && typeof body.resetAt === 'string') resetAt = body.resetAt;
    bodyOk = body?.ok;
  } catch {
    // NOT SILENT (2026-09-10). Every error this app's endpoints return is
    // `{ error: '<code>' }`, so a body that will not parse means the response
    // did NOT come from one of our handlers — it is Cloudflare's own error
    // page for a Function that threw or never returned. Swallowing that made
    // the two cases indistinguishable in Sentry: an
    // `ai_feedback_failed:speaking-coach:server status=502` with no `code=`
    // was consistent with SIX different `err(502, …)` returns in the endpoint
    // AND with the endpoint never running at all, and nothing recorded said
    // which. Naming it turns the absence of a code into a fact rather than a
    // gap. It does not change the KIND — a 5xx is still `server` — so no
    // learner-facing message moves.
    nonJson = true;
  }
  return failureFromStatus(res.status, code || (nonJson ? 'non_json_body' : ''), resetAt, bodyOk);
}

/** Classify from a status + code the caller already has in hand. */
export function failureFromStatus(
  status: number,
  code = '',
  resetAt?: string,
  bodyOk?: unknown,
): AiFailure {
  const extra = { status, ...(code ? { code } : {}), ...(resetAt ? { resetAt } : {}) };
  if (status === 401) return build('unauthenticated', extra);
  if (code === 'not_configured' || code === 'stt_not_configured' || code === 'AI_KEY_MISSING')
    return build('not_configured', extra);
  const limit = classifyAiLimit({ status, code });
  if (limit === 'budget') return build('budget', extra);
  if (limit === 'daily') return build('daily', extra);
  if (limit === 'burst') return build('burst', extra);
  if (STT_CODES.has(code)) return build('stt', extra);
  if (UNUSABLE_CODES.has(code)) return build('unusable_reply', extra);
  if (status === 504) return build('timeout', extra);
  if (status === 200 && bodyOk === false) return build('server', extra);
  return build('server', extra);
}

/** Classify a thrown error (network drop, abort/timeout, decode). */
export function failureFromError(e: unknown): AiFailure {
  const err = e as { name?: string; message?: string } | undefined;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return build('network');
  if (err?.name === 'AbortError' || err?.name === 'TimeoutError') return build('timeout');
  if (err instanceof TypeError) return build('network');
  return build('server');
}

export function insufficientFailure(): AiFailure {
  return build('insufficient');
}

// ── Reporting: capped per surface+kind per session, never a learner blocker ──
const _reported = new Map<string, number>();
const REPORT_CAP = 3;

export function reportAiFailure(surface: string, f: AiFailure, detail?: string): void {
  // A learner's own limits and a signed-out state are not defects.
  if (['insufficient', 'daily', 'burst', 'unauthenticated'].includes(f.kind)) return;
  const key = `${surface}:${f.kind}`;
  const n = _reported.get(key) ?? 0;
  if (n >= REPORT_CAP) return;
  _reported.set(key, n + 1);
  try {
    reportError(
      new Error(`ai_feedback_failed:${surface}:${f.kind}`),
      [
        `surface=${surface}`,
        `kind=${f.kind}`,
        f.status !== undefined ? `status=${f.status}` : '',
        f.code ? `code=${f.code}` : '',
        detail ? `detail=${detail.slice(0, 120)}` : '',
      ]
        .filter(Boolean)
        .join(' '),
    );
  } catch {
    /* reporting must never take feedback down */
  }
}

/** Test hook. */
export function _resetAiFailureReports(): void {
  _reported.clear();
}
