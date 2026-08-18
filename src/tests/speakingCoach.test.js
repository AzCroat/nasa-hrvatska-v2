// src/tests/speakingCoach.test.js
//
// Pins for the speaking coach (production-teaching directive, 2026-08-18):
// the endpoint's cost-architecture invariants (source pins, same style as
// aiBudget.test.js) and the client lib's feedback-loop contract — a coached
// answer MUST feed the mastery ledger and the adaptive scheduler, and every
// failure path MUST be silent (the coach is enrichment, never a blocker).

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const endpointSrc = readFileSync(join(__dir, '../../functions/api/speaking-coach.js'), 'utf8');

describe('speaking-coach endpoint — cost & safety architecture (source pins)', () => {
  it('goes through requireAuthedAI — the budget choke point', () => {
    expect(endpointSrc).toContain('requireAuthedAI(');
  });

  it('caches its static system block (removing cache_control 10x-es input cost)', () => {
    expect(endpointSrc).toContain('cache_control');
  });

  it('appends CROATIAN_SCRIPT_RULE like every Croatian-generating endpoint', () => {
    expect(endpointSrc).toContain('CROATIAN_SCRIPT_RULE');
  });

  it('reconciles the pre-charged ceiling down to actual usage', () => {
    expect(endpointSrc).toContain("reconcileBudget(env, '/api/speaking-coach'");
  });

  it('shares its evaluator prompt via _evalPrompts (never forked inline)', () => {
    expect(endpointSrc).toContain('speakingCoachSystemPrompt');
    expect(endpointSrc).toContain("from './_evalPrompts.js'");
  });

  it('validates errorType against the shared taxonomy before returning it', () => {
    for (const t of ['case', 'aspect', 'agreement', 'tense', 'word_order', 'vocab']) {
      expect(endpointSrc).toContain(`'${t}'`);
    }
  });
});

// ── Client lib behavior ───────────────────────────────────────────────────────

const aiPostMock = vi.fn();
const recordMasteryEventMock = vi.fn();
const applyErrorsMock = vi.fn();

vi.mock('../lib/aiPost', () => ({ _aiPost: (...a) => aiPostMock(...a) }));
vi.mock('../lib/masteryLedger', () => ({
  recordMasteryEvent: (...a) => recordMasteryEventMock(...a),
}));
vi.mock('../lib/adaptiveFeedback', () => ({
  applyWritingErrorsToAdaptive: (...a) => applyErrorsMock(...a),
}));

const { requestSpeakingCoach, transcriptWorthCoaching } = await import('../lib/speakingCoach');

const GOOD_PAYLOAD = {
  scores: { range: 0.7, accuracy: 0.6, fluency: 0.8, task: 0.9 },
  overall: 0.75,
  errors: [
    {
      original: 'ja idem u škola',
      corrected: 'idem u školu',
      note: 'accusative',
      errorType: 'case',
    },
  ],
  advice: 'After "u" with motion, put the place in the accusative.',
  encouragement: 'Full sentences — well done.',
};

describe('requestSpeakingCoach — the closed loop', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });
  afterEach(() => vi.clearAllMocks());

  it('a coached answer feeds ledger + adaptive + mistake log and returns the payload', async () => {
    aiPostMock.mockResolvedValue({ ok: true, json: async () => GOOD_PAYLOAD });
    const res = await requestSpeakingCoach({
      prompt: 'Opišite svoj dan.',
      transcript: 'ja idem u škola svaki dan i učim puno',
      level: 'B1',
    });
    expect(res).toEqual(GOOD_PAYLOAD);
    // Mastery: rubric-graded speech is weight-2 evidence — the signal whose
    // absence made weakestProductionKind bias 'speak' forever (2026-08-18 audit).
    expect(recordMasteryEventMock).toHaveBeenCalledWith({
      level: 'B1',
      skill: 'speaking',
      score: 0.75,
      weight: 2,
    });
    // Adaptive: spoken case error reschedules case practice like a written one.
    expect(applyErrorsMock).toHaveBeenCalledWith(['case']);
    const wm = JSON.parse(localStorage.getItem('nh_speaking_mistakes') || '[]');
    expect(wm).toHaveLength(1);
    expect(wm[0].correct).toBe('idem u školu');
  });

  it('a quota/budget refusal is SILENT — returns null, records nothing', async () => {
    aiPostMock.mockResolvedValue({ ok: false, status: 429, json: async () => ({}) });
    const res = await requestSpeakingCoach({
      prompt: 'p',
      transcript: 'one two three four five six',
      level: 'A2',
    });
    expect(res).toBeNull();
    expect(recordMasteryEventMock).not.toHaveBeenCalled();
    expect(applyErrorsMock).not.toHaveBeenCalled();
  });

  it('a network failure is SILENT — returns null', async () => {
    aiPostMock.mockRejectedValue(new TypeError('fetch failed'));
    const res = await requestSpeakingCoach({
      prompt: 'p',
      transcript: 'one two three four five six',
      level: 'A2',
    });
    expect(res).toBeNull();
    expect(recordMasteryEventMock).not.toHaveBeenCalled();
  });

  it('too-short transcripts are never sent (below the participation threshold)', async () => {
    const res = await requestSpeakingCoach({ prompt: 'p', transcript: 'da ne', level: 'A1' });
    expect(res).toBeNull();
    expect(aiPostMock).not.toHaveBeenCalled();
    expect(transcriptWorthCoaching('da ne')).toBe(false);
    expect(transcriptWorthCoaching('idem u školu svaki dan')).toBe(true);
  });

  it('a malformed payload records nothing (no fabricated evidence)', async () => {
    aiPostMock.mockResolvedValue({ ok: true, json: async () => ({ nonsense: true }) });
    const res = await requestSpeakingCoach({
      prompt: 'p',
      transcript: 'one two three four five six',
      level: 'B1',
    });
    expect(res).toBeNull();
    expect(recordMasteryEventMock).not.toHaveBeenCalled();
  });
});
