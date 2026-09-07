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
    const kinds = [
      'unauthenticated',
      'burst',
      'daily',
      'budget',
      'insufficient',
      'stt',
      'unusable_reply',
      'server',
      'timeout',
      'network',
      'not_configured',
    ] as const;
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
    for (const kind of ['budget', 'server', 'unusable_reply', 'timeout', 'network'] as const) {
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
