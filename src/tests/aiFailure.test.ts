// aiFailure.test.ts — one name and one honest sentence per feedback failure
// (owner directive, 2026-09-07: feedback MUST work every time, and when it
// cannot, the learner is told the true cause and offered a retry).
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn() }));
import { reportError } from '../lib/errorReporter';
import {
  failureFromResponse,
  failureFromStatus,
  failureFromError,
  insufficientFailure,
  describeAiFailure,
  reportAiFailure,
  _resetAiFailureReports,
  AI_FAILURE_KINDS,
} from '../lib/aiFailure';
import { BUDGET_PAUSE_EN } from '../lib/aiLimit';

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

beforeEach(() => {
  _resetAiFailureReports();
  vi.mocked(reportError).mockClear();
});

describe('classification', () => {
  it('names every gate refusal by its server code', async () => {
    expect((await failureFromResponse(json(401, { error: 'unauthenticated' }))).kind).toBe(
      'unauthenticated',
    );
    expect((await failureFromResponse(json(429, { error: 'rate_limited' }))).kind).toBe('burst');
    const daily = await failureFromResponse(
      json(429, { error: 'daily_quota_exceeded', resetAt: '2026-09-08T00:00:00Z' }),
    );
    expect(daily.kind).toBe('daily');
    expect(daily.resetAt).toBe('2026-09-08T00:00:00Z');
    expect((await failureFromResponse(json(429, { error: 'monthly_budget_exhausted' }))).kind).toBe(
      'budget',
    );
  });

  it('names an unusable evaluator reply as retryable — the writing evaluator’s eval_unparseable', async () => {
    const f = await failureFromResponse(json(502, { error: 'eval_unparseable' }));
    expect(f.kind).toBe('unusable_reply');
    expect(f.retryable).toBe(true);
    expect(f.message).toMatch(/Try again/);
    expect((await failureFromResponse(json(502, { error: 'rubric_failed' }))).kind).toBe(
      'unusable_reply',
    );
    expect((await failureFromResponse(json(502, { error: 'parse_failed' }))).kind).toBe(
      'unusable_reply',
    );
  });

  it('names STT and configuration failures', async () => {
    expect((await failureFromResponse(json(502, { error: 'stt_failed' }))).kind).toBe('stt');
    expect((await failureFromResponse(json(503, { error: 'stt_not_configured' }))).kind).toBe(
      'not_configured',
    );
    expect(failureFromStatus(200, 'not_configured', undefined, false).kind).toBe('not_configured');
    expect(failureFromStatus(503, 'AI_KEY_MISSING').kind).toBe('not_configured');
  });

  it('a null transport result is a network failure; a 504 is a timeout; a bare 5xx is server', async () => {
    expect((await failureFromResponse(null)).kind).toBe('network');
    expect((await failureFromResponse(new Response('gateway', { status: 504 }))).kind).toBe(
      'timeout',
    );
    expect((await failureFromResponse(new Response('oops', { status: 500 }))).kind).toBe('server');
  });

  it('thrown errors: abort/timeout → timeout, TypeError → network, anything else → server', () => {
    const abort = new Error('aborted');
    abort.name = 'AbortError';
    expect(failureFromError(abort).kind).toBe('timeout');
    const to = new Error('timed out');
    to.name = 'TimeoutError';
    expect(failureFromError(to).kind).toBe('timeout');
    expect(failureFromError(new TypeError('Failed to fetch')).kind).toBe('network');
    expect(failureFromError(new Error('weird')).kind).toBe('server');
  });

  it('retryable is false only where waiting is the answer', () => {
    for (const k of ['unauthenticated', 'daily', 'budget', 'not_configured'] as const) {
      expect(failureFromStatus(k === 'unauthenticated' ? 401 : 429, codeFor(k)).retryable).toBe(
        false,
      );
    }
    expect(insufficientFailure().retryable).toBe(true);
    expect(failureFromStatus(500).retryable).toBe(true);
  });
});

function codeFor(k: string): string {
  return (
    {
      unauthenticated: 'unauthenticated',
      daily: 'daily_quota_exceeded',
      budget: 'monthly_budget_exhausted',
      not_configured: 'not_configured',
    } as Record<string, string>
  )[k]!;
}

describe('the sentences', () => {
  it('every kind has a distinct, non-empty sentence, and budget uses the app’s one voice', () => {
    // DERIVED, NOT RESTATED. This list was hand-written and would have passed
    // unchanged when `bad_request` was added — eleven of twelve kinds checked,
    // and the missing one silently outside the "every kind has a distinct
    // sentence" claim. `AI_FAILURE_KINDS` is the runtime value the type comes
    // from, so a kind added without a sentence fails here.
    const kinds = AI_FAILURE_KINDS;
    const seen = new Set<string>();
    for (const kind of kinds) {
      const m = describeAiFailure({ kind });
      expect(m.length).toBeGreaterThan(10);
      seen.add(m);
    }
    expect(seen.size).toBe(kinds.length);
    expect(describeAiFailure({ kind: 'budget' })).toBe(BUDGET_PAUSE_EN);
  });

  it('the daily sentence carries the reset time when the server sent one', () => {
    const m = describeAiFailure({ kind: 'daily', resetAt: '2026-09-08T00:00:00Z' });
    expect(m).toMatch(/resets at \d/);
    expect(describeAiFailure({ kind: 'daily' })).toMatch(/midnight UTC/);
  });

  it('never blames the learner for a server condition', () => {
    for (const kind of [
      'budget',
      'server',
      'unusable_reply',
      'bad_request',
      'timeout',
      'network',
    ] as const) {
      expect(describeAiFailure({ kind })).not.toMatch(/clearly|louder|mumbl/i);
    }
  });
});

describe('reporting', () => {
  it('reports defects to Sentry, capped at three per surface and kind', () => {
    const f = failureFromStatus(502, 'eval_unparseable');
    for (let i = 0; i < 5; i++) reportAiFailure('writing', f);
    expect(reportError).toHaveBeenCalledTimes(3);
    const [err, ctx] = vi.mocked(reportError).mock.calls[0]!;
    expect((err as Error).message).toBe('ai_feedback_failed:writing:unusable_reply');
    expect(String(ctx)).toContain('status=502');
    expect(String(ctx)).toContain('code=eval_unparseable');
  });

  it('does NOT report the learner’s own limits or a signed-out state — those are not defects', () => {
    reportAiFailure('writing', failureFromStatus(429, 'daily_quota_exceeded'));
    reportAiFailure('writing', failureFromStatus(429, 'rate_limited'));
    reportAiFailure('writing', failureFromStatus(401));
    reportAiFailure('speaking', insufficientFailure());
    expect(reportError).not.toHaveBeenCalled();
  });

  it('DOES report a budget pause — the owner needs to know the ledger hit the cap', () => {
    reportAiFailure('writing', failureFromStatus(429, 'monthly_budget_exhausted'));
    expect(reportError).toHaveBeenCalledTimes(1);
  });
});

// A 4xx IS OUR DEFECT AND IT USED TO READ AS AN OUTAGE (2026-09-25).
//
// `failureFromStatus` had no branch between 401 and 504, so every client error
// became `server`: the learner was told the evaluation service was temporarily
// unavailable and to try again in a moment, for a request that could never
// succeed, and Sentry filed it as
// `ai_feedback_failed:<surface>:server`. `/api/explain-error` rejecting the
// `type` all 109 engine-backed drills send sat there for nineteen days under
// exactly that tag.
describe('a 4xx is classified as our defect, not an outage', () => {
  it('a plain 400 is bad_request, is not retryable, and keeps its code', () => {
    const f = failureFromStatus(400, 'Invalid type');
    expect(f.kind).toBe('bad_request');
    expect(f.retryable).toBe(false);
    expect(f.status).toBe(400);
    expect(f.code).toBe('Invalid type');
    expect(f.message).not.toMatch(/try again/i);
  });

  it('403, 404 and 413 are the same class', () => {
    for (const s of [403, 404, 413, 422]) {
      expect(failureFromStatus(s).kind, `status ${s}`).toBe('bad_request');
    }
  });

  // ORDER IS LOAD-BEARING. The learner's own limits and the codes that name a
  // cause are all 4xx too, and every one of them must still win over the
  // status branch — otherwise this change would turn a daily-limit message,
  // a budget pause and a failed transcription into "wrong on our side".
  it('the kinds that already had a 4xx meaning still win', () => {
    expect(failureFromStatus(401).kind).toBe('unauthenticated');
    expect(failureFromStatus(429, 'daily_quota_exceeded').kind).toBe('daily');
    expect(failureFromStatus(429, 'monthly_budget_exhausted').kind).toBe('budget');
    expect(failureFromStatus(429).kind).toBe('burst');
    expect(failureFromStatus(400, 'bad_audio').kind).toBe('stt');
    expect(failureFromStatus(400, 'not_configured').kind).toBe('not_configured');
    expect(failureFromStatus(400, 'eval_unparseable').kind).toBe('unusable_reply');
  });

  it('a 5xx and a dead transport are unchanged', () => {
    expect(failureFromStatus(500).kind).toBe('server');
    expect(failureFromStatus(503).kind).toBe('server');
    expect(failureFromStatus(504).kind).toBe('timeout');
    // status 0 is `_nativePost` returning null — nothing answered, which is
    // not a 4xx and must not be reported as our request being malformed.
    expect(failureFromStatus(0, 'transport_null').kind).toBe('server');
  });

  it('it is reported, because it is a defect', () => {
    expect(['insufficient', 'daily', 'burst', 'unauthenticated']).not.toContain('bad_request');
  });
});

// THE DERIVATION GUARDS ONE DIRECTION ONLY, AND MUTATION SAID SO.
//
// Deriving the test's kind list from `AI_FAILURE_KINDS` catches a kind ADDED
// without a sentence — it falls to `default`, duplicates the server sentence,
// and the distinctness assertion fails. It does NOT catch a kind REMOVED from
// the list while the classifier still produces it: the list simply gets
// shorter and every remaining member still has a sentence. Removing
// `'bad_request'` from the array left the whole suite green.
//
// So this asserts the EFFECT instead of the spelling: every kind the
// classifiers can actually PRODUCE must be a declared kind. A member deleted
// from the list fails here even though nothing else notices.
describe('the declared kinds cover what the classifiers produce', () => {
  it('every produced kind is declared', () => {
    const produced = new Set<string>([
      insufficientFailure().kind,
      failureFromError(new TypeError('net')).kind,
      failureFromError(Object.assign(new Error('x'), { name: 'AbortError' })).kind,
      failureFromError(new Error('weird')).kind,
      failureFromStatus(401).kind,
      failureFromStatus(400).kind,
      failureFromStatus(400, 'bad_audio').kind,
      failureFromStatus(400, 'not_configured').kind,
      failureFromStatus(400, 'eval_unparseable').kind,
      failureFromStatus(429).kind,
      failureFromStatus(429, 'daily_quota_exceeded').kind,
      failureFromStatus(429, 'monthly_budget_exhausted').kind,
      failureFromStatus(500).kind,
      failureFromStatus(504).kind,
    ]);
    // Every kind in the union is reachable by SOME input, so the matrix above
    // should produce all of them — a kind nothing can produce is dead.
    expect([...produced].sort()).toEqual([...AI_FAILURE_KINDS].sort());
    for (const k of produced) {
      expect(AI_FAILURE_KINDS as readonly string[], `produced kind ${k} is not declared`).toContain(
        k,
      );
    }
  });
});
