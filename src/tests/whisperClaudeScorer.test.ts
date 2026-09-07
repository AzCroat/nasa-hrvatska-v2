// whisperClaudeScorer.test.ts — the exam speaking scorer records WHY it
// returned null (owner directive, 2026-09-07).
//
// The SpeakingScorer contract returns null for "not scored", which is right:
// a failed evaluation must never become a failing score. But one null used to
// stand for a dead transport, a signed-out learner, a budget pause, an STT
// outage, a rubric 502 AND "you said three words" — and the exam screen read
// every one of them as "We couldn't score that clearly". The mutation that
// made the scorer forget the cause passed every other suite (the screen test
// mocks this module), so this file drives the REAL scorer.
import { describe, it, expect, vi, beforeEach } from 'vitest';

const nativePost = vi.fn();
vi.mock('../lib/nativePost.js', () => ({ _nativePost: (...a: unknown[]) => nativePost(...a) }));
vi.mock('../lib/audio.js', () => ({ blobToBase64: vi.fn(async () => 'AAAA') }));
const recordMasteryEvent = vi.fn();
vi.mock('../lib/masteryLedger.js', () => ({
  recordMasteryEvent: (...a: unknown[]) => recordMasteryEvent(...a),
}));
vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn() }));
import { reportError } from '../lib/errorReporter';
import {
  whisperClaudeScorer,
  getLastSpeakingScoreFailure,
} from '../lib/speaking/whisperClaudeScorer';
import { _resetAiFailureReports } from '../lib/aiFailure';

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
const blob = new Blob([new Uint8Array([1])], { type: 'audio/webm' });
const ctx = { level: 'B1' as const, prompt: 'Opišite putovanje.' };
const GOOD = {
  transcript: 'Putovao sam u Split prošlog ljeta.',
  scores: { range: 0.8, accuracy: 0.7, fluency: 0.8, task: 0.9 },
  transcriptSufficiency: 0.9,
};

beforeEach(() => {
  nativePost.mockReset();
  recordMasteryEvent.mockClear();
  vi.mocked(reportError).mockClear();
  _resetAiFailureReports();
});

describe('whisperClaudeScorer names its nulls', () => {
  it('a scored answer clears the failure and feeds the ledger', async () => {
    nativePost.mockResolvedValue(json(200, GOOD));
    const r = await whisperClaudeScorer.assess(blob, ctx);
    expect(r?.overall).toBeCloseTo(0.8, 5);
    expect(getLastSpeakingScoreFailure()).toBeNull();
    expect(recordMasteryEvent).toHaveBeenCalledWith(
      expect.objectContaining({ skill: 'speaking', level: 'B1' }),
    );
  });

  it('a monthly budget pause → null, cause "budget", not retryable, REPORTED', async () => {
    nativePost.mockResolvedValue(json(429, { error: 'monthly_budget_exhausted' }));
    expect(await whisperClaudeScorer.assess(blob, ctx)).toBeNull();
    const f = getLastSpeakingScoreFailure();
    expect(f?.kind).toBe('budget');
    expect(f?.retryable).toBe(false);
    expect(reportError).toHaveBeenCalledTimes(1);
    expect(recordMasteryEvent).not.toHaveBeenCalled();
  });

  it('a signed-out session → "unauthenticated"; a rubric 502 → "unusable_reply"; STT 504 → "stt"', async () => {
    nativePost.mockResolvedValueOnce(json(401, { error: 'unauthenticated' }));
    await whisperClaudeScorer.assess(blob, ctx);
    expect(getLastSpeakingScoreFailure()?.kind).toBe('unauthenticated');

    nativePost.mockResolvedValueOnce(json(502, { error: 'rubric_failed' }));
    await whisperClaudeScorer.assess(blob, ctx);
    expect(getLastSpeakingScoreFailure()?.kind).toBe('unusable_reply');

    nativePost.mockResolvedValueOnce(json(504, { error: 'stt_failed' }));
    await whisperClaudeScorer.assess(blob, ctx);
    expect(getLastSpeakingScoreFailure()?.kind).toBe('stt');
  });

  it('nothing answered (transport null) → "network"; a thrown TypeError → "network"', async () => {
    nativePost.mockResolvedValueOnce(null);
    await whisperClaudeScorer.assess(blob, ctx);
    expect(getLastSpeakingScoreFailure()?.kind).toBe('network');

    nativePost.mockRejectedValueOnce(new TypeError('Failed to fetch'));
    await whisperClaudeScorer.assess(blob, ctx);
    expect(getLastSpeakingScoreFailure()?.kind).toBe('network');
  });

  it('a thin transcript → null with cause "insufficient" — the ONE null that is the learner’s to fix', async () => {
    nativePost.mockResolvedValue(json(200, { ...GOOD, transcriptSufficiency: 0.3 }));
    expect(await whisperClaudeScorer.assess(blob, ctx)).toBeNull();
    expect(getLastSpeakingScoreFailure()?.kind).toBe('insufficient');
    expect(reportError).not.toHaveBeenCalled(); // not a defect
  });

  it('a 200 with malformed scores → "unusable_reply", never a fabricated score', async () => {
    nativePost.mockResolvedValue(json(200, { transcript: 't', scores: { range: 'x' } }));
    expect(await whisperClaudeScorer.assess(blob, ctx)).toBeNull();
    expect(getLastSpeakingScoreFailure()?.kind).toBe('unusable_reply');
  });

  it('the typed-production path records causes the same way', async () => {
    nativePost.mockResolvedValue(json(429, { error: 'daily_quota_exceeded', resetAt: 'x' }));
    expect(await whisperClaudeScorer.assessText!('Putovao sam u Split.', ctx)).toBeNull();
    expect(getLastSpeakingScoreFailure()?.kind).toBe('daily');
  });
});
