// src/tests/pronunciationAssessMiscue.test.js
//
// /api/pronunciation-assess forwards Azure's per-word miscue verdict (None / Omission /
// Insertion / Mispronunciation). Guided Speaking's word-by-word check (lib/spokenCheck)
// reads it; before 2026-09-29 Azure computed it and the endpoint dropped it. Driven through
// the real handler with the auth gate and Azure mocked.

import { describe, it, expect, vi, afterEach } from 'vitest';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: async () => ({ ok: true, origin: 'https://nasahrvatska.com' }),
}));

import { onRequestPost } from '../../functions/api/pronunciation-assess.js';

afterEach(() => vi.unstubAllGlobals());

describe('the assessment forwards what Azure marked each word as', () => {
  it('passes ErrorType through as `error`, and defaults to None', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(
        async () =>
          new Response(
            JSON.stringify({
              NBest: [
                {
                  Display: 'Imam sestra.',
                  PronunciationAssessment: { PronScore: 70, AccuracyScore: 70 },
                  Words: [
                    {
                      Word: 'imam',
                      PronunciationAssessment: { AccuracyScore: 95, ErrorType: 'None' },
                    },
                    {
                      Word: 'sestru',
                      PronunciationAssessment: { AccuracyScore: 0, ErrorType: 'Omission' },
                    },
                    {
                      Word: 'sestra',
                      PronunciationAssessment: { AccuracyScore: 80, ErrorType: 'Insertion' },
                    },
                    { Word: 'da', PronunciationAssessment: { AccuracyScore: 90 } },
                  ],
                },
              ],
            }),
            { status: 200 },
          ),
      ),
    );
    const request = new Request('https://x/api/pronunciation-assess', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ audioBase64: 'eA==', referenceText: 'Imam sestru.' }),
    });
    const res = await onRequestPost({
      request,
      env: { AZURE_TTS_KEY: 'k', AZURE_TTS_REGION: 'westeurope' },
    });
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.recognized).toBe('Imam sestra.');
    expect(body.word_scores.map((w) => w.error)).toEqual(['None', 'Omission', 'Insertion', 'None']);
  });
});

// ── The ledger records the audio Azure processed, not the one-minute ceiling ──
function ledger() {
  const refunds = [];
  return {
    refunds,
    db: {
      prepare: () => ({
        bind: (amount) => ({
          run: async () => {
            refunds.push(amount);
          },
        }),
      }),
    },
  };
}
function post(body) {
  return new Request('https://x/api/pronunciation-assess', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}
const azureOk = (extra) =>
  vi.fn(
    async () =>
      new Response(
        JSON.stringify({
          ...extra,
          NBest: [{ Display: 'Bog.', PronunciationAssessment: { PronScore: 90 }, Words: [] }],
        }),
        { status: 200 },
      ),
  );

describe('the assessment reconciles the budget ledger', () => {
  const env = (db) => ({ AZURE_TTS_KEY: 'k', AZURE_TTS_REGION: 'westeurope', AI_QUOTA_DB: db });

  it('refunds the ceiling minus the processed audio (5 s → 2,100 µ$ kept)', async () => {
    vi.stubGlobal('fetch', azureOk({ Duration: 5 * 1e7 }));
    const l = ledger();
    await onRequestPost({
      request: post({ audioBase64: 'eA==', referenceText: 'Bog.' }),
      env: env(l.db),
    });
    expect(l.refunds).toEqual([15_000 - 5 * 420]);
  });

  it('keeps the ceiling when Azure reports no duration (the safe direction)', async () => {
    vi.stubGlobal('fetch', azureOk({}));
    const l = ledger();
    await onRequestPost({
      request: post({ audioBase64: 'eA==', referenceText: 'Bog.' }),
      env: env(l.db),
    });
    expect(l.refunds).toEqual([]);
  });

  it('gives the whole pre-charge back when nothing reaches Azure', async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);
    const a = ledger();
    await onRequestPost({
      request: post({ audioBase64: 'eA==', referenceText: 'Bog.' }),
      env: { AI_QUOTA_DB: a.db },
    });
    expect(a.refunds).toEqual([15_000]); // not configured
    const b = ledger();
    const res = await onRequestPost({ request: post({ referenceText: 'Bog.' }), env: env(b.db) });
    expect(res.status).toBe(400);
    expect(b.refunds).toEqual([15_000]); // missing audio
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});

// ── A recording with no speech is named, not reported as a server fault ──
// Sentry ai_feedback_failed:guided-speaking-assess:server (2026-09-29): Azure's
// NoMatch / InitialSilenceTimeout answer carries no NBest, which read as an
// unexpected shape and a 502.
describe('no recognisable speech', () => {
  it.each(['NoMatch', 'InitialSilenceTimeout', 'BabbleTimeout'])(
    'Azure %s is a 422 no_speech, not a 502',
    async (RecognitionStatus) => {
      vi.stubGlobal(
        'fetch',
        vi.fn(
          async () =>
            new Response(JSON.stringify({ RecognitionStatus, Duration: 30000000 }), {
              status: 200,
            }),
        ),
      );
      const request = new Request('https://x/api/pronunciation-assess', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ audioBase64: 'eA==', referenceText: 'Imam sestru.' }),
      });
      const res = await onRequestPost({
        request,
        env: { AZURE_TTS_KEY: 'k', AZURE_TTS_REGION: 'westeurope' },
      });
      expect(res.status).toBe(422);
      expect((await res.json()).error).toBe('no_speech');
    },
  );

  it('the client files it under stt, with its own sentence', async () => {
    const { failureFromStatus } = await import('../lib/aiFailure');
    const f = failureFromStatus(422, 'no_speech');
    expect(f.kind).toBe('stt');
    expect(f.code).toBe('no_speech');
    expect(f.message).toMatch(/transcribe the recording/);
  });
});

// ── The REST answer is flat, and a Croatian reference must not crash the header ──
// First calibration run, 2026-09-29: every word scored 0 (the parser read the SDK's
// nested shape) and `Živim u Zagrebu` threw in btoa() (Latin-1 only).
import { parseAzureResponse, utf8Base64 } from '../../functions/api/pronunciation-assess.js';
import { checkedWords } from '../lib/spokenCheck';

describe('Azure REST shape and Croatian references', () => {
  it('reads the flat REST scores and ErrorType', () => {
    const p = parseAzureResponse({
      NBest: [
        {
          Display: 'Imam sestra.',
          AccuracyScore: 72,
          PronScore: 70,
          FluencyScore: 90,
          CompletenessScore: 100,
          Words: [
            {
              Word: 'imam',
              AccuracyScore: 96,
              ErrorType: 'None',
              Phonemes: [{ Phoneme: 'i', AccuracyScore: 99 }],
            },
            { Word: 'sestru', AccuracyScore: 31, ErrorType: 'Mispronunciation' },
          ],
        },
      ],
    });
    expect(p.overall).toBe(70);
    expect(p.word_scores.map((w) => [w.score, w.error])).toEqual([
      [96, 'None'],
      [31, 'Mispronunciation'],
    ]);
    expect(p.word_scores[0].phonemes[0].score).toBe(99);
    expect(p.scored).toBe(true);
  });

  it('an absent score is null, and the client does not call that word unclear', () => {
    const p = parseAzureResponse({
      NBest: [{ Display: 'Imam sestru.', Words: [{ Word: 'sestru' }] }],
    });
    expect(p.word_scores[0].score).toBeNull();
    expect(p.scored).toBe(false);
    expect(checkedWords(p.word_scores)[0].status).toBe('good');
  });

  it('a measured low score still reads as unclear', () => {
    expect(checkedWords([{ word: 'sestru', score: 20, error: 'None' }])[0].status).toBe('unclear');
  });

  it('the assessment header encodes Croatian as UTF-8 instead of throwing', () => {
    const json = JSON.stringify({ ReferenceText: 'Živim u Zagrebu, čekam, đak, šuma, žaba' });
    const b64 = utf8Base64(json);
    const back = new TextDecoder().decode(Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)));
    expect(back).toBe(json);
  });

  it('the handler survives a reference with diacritics', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (_u, init) => {
        expect(() => atob(init.headers['Pronunciation-Assessment'])).not.toThrow();
        return new Response(
          JSON.stringify({
            RecognitionStatus: 'Success',
            NBest: [{ Display: 'Živim u Zagrebu.', Words: [] }],
          }),
          { status: 200 },
        );
      }),
    );
    const request = new Request('https://x/api/pronunciation-assess', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ audioBase64: 'eA==', referenceText: 'Živim u Zagrebu.' }),
    });
    const res = await onRequestPost({
      request,
      env: { AZURE_TTS_KEY: 'k', AZURE_TTS_REGION: 'westeurope' },
    });
    expect(res.status).toBe(200);
  });
});
