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

// THE KINDS ARE A RUNTIME VALUE, NOT ONLY A TYPE, and that is deliberate.
// `aiFailure.test.ts` asserts every kind has a distinct sentence — from a
// hand-written list, which covered ten of eleven the moment an eleventh was
// added and would have said nothing. A TS union does not exist at runtime, so
// the list has to be the value and the type derived from it.
export const AI_FAILURE_KINDS = [
  'unauthenticated',
  'burst',
  'daily',
  'budget',
  'insufficient',
  'stt',
  'unusable_reply',
  'bad_request',
  'server',
  'timeout',
  'network',
  'not_configured',
] as const;

export type AiFailureKind = (typeof AI_FAILURE_KINDS)[number];

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
    case 'bad_request':
      return 'Something in this request was wrong on our side, so it was rejected. It has been reported — trying again will not change it.';
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
  const retryable = ![
    'unauthenticated',
    'daily',
    'budget',
    'not_configured',
    'bad_request',
  ].includes(kind);
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
  // A 4xx IS OUR DEFECT, AND FOR NINETEEN DAYS IT READ AS AN OUTAGE
  // (2026-09-25). There was no 4xx branch at all, so every client error fell
  // to `server` — "the evaluation service is temporarily unavailable, try
  // again in a moment". `/api/explain-error` rejected the `type` that all 109
  // engine-backed drills send, and that 400 reached the learner as an outage
  // they should retry and reached Sentry as
  // `ai_feedback_failed:drill-explain-error:server`. Nobody looks for a
  // client/endpoint contract mismatch under a tag that says the server is
  // down, which is the whole reason the owner found it in the field instead.
  //
  // Every 4xx these endpoints return is a malformed request, a blocked origin
  // or a missing route — enumerated, none of them a legitimate learner
  // condition (the learner's own limits are 401/429 and are classified
  // above, and `bad_audio` is an `stt` code matched before this line). So it
  // is NOT retryable: a malformed request is malformed again, and before the
  // pre-charge refund landed each retry also spent a quota turn and booked
  // budget for a call that never happened.
  if (status >= 400 && status < 500) return build('bad_request', extra);
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

/**
 * NOTHING ANSWERED — and `code` says why, from the transport's own record.
 *
 * `failureFromResponse(null)` has always meant this and always classified it
 * `network`, which is the honest kind: no status exists, so no handler refused
 * anything. What it could not do is carry a REASON, so every one of
 * `_nativePost`'s 20+ callers reported the same contentless event.
 *
 * NOTE A CORRECTION. Earlier today I reported this case with
 * `failureFromStatus(0, 'transport_null')` — and status 0 is not 4xx, so it fell
 * through to `server`: "the evaluation service is temporarily unavailable", the
 * exact misreport that fix existed to end. A dead transport is not a server
 * fault, and 0 is not a status.
 */
export function transportFailure(code?: string): AiFailure {
  return build('network', code ? { code } : {});
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
