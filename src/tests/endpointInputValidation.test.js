// src/tests/endpointInputValidation.test.js
//
// Regression tests for malformed-request handling in functions/api/*.
//
// Every case below reproduces a body an authenticated client could actually
// send — a stale localStorage array with a `null` hole, a numeric field where a
// string was expected, a truncated JSON payload — that previously threw an
// uncaught TypeError/DOMException *after* requireAuthedAI had already charged
// the user's AI quota. The learner then saw an opaque 500 ("something went
// wrong") for input the server could have rejected with a 400, and retried,
// paying again each time.
//
// The assertion style is deliberate:
//   • For guards that skip bad entries, we assert the upstream `fetch` WAS
//     reached. Pre-fix the throw happened before the fetch, so the spy was
//     never called — that is the precise proof, independent of whatever the
//     endpoint does with the (stubbed) upstream response.
//   • For guards that reject, we assert the specific 4xx status and body code.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: vi.fn(async () => ({ ok: true, uid: 'u1', origin: '', isDev: false })),
}));
vi.mock('../../functions/api/_rateLimit.js', () => ({
  checkRateLimit: vi.fn(async () => true),
}));
vi.mock('../../functions/api/_verifyToken.js', () => ({
  getFirebaseUid: vi.fn(async () => 'u1'),
}));

import { onRequestPost as adaptiveInsights } from '../../functions/api/adaptive-insights.js';
import { onRequestPost as contact } from '../../functions/api/contact.js';
import { onRequestPost as conversation } from '../../functions/api/conversation.js';
import { onRequestPost as conversationalTutor } from '../../functions/api/conversational-tutor.js';
import { onRequestPost as dailyPlan } from '../../functions/api/daily-plan.js';
import { onRequestPost as dialogue } from '../../functions/api/dialogue.js';
import { onRequestPost as microLesson } from '../../functions/api/micro-lesson.js';
import { onRequestPost as stt } from '../../functions/api/stt.js';
import { onRequestPost as translate } from '../../functions/api/translate.js';
import { onRequestPost as tts } from '../../functions/api/tts.js';

const AI_ENV = { ANTHROPIC_API_KEY: 'k' };

function jsonReq(url, body, extraHeaders = {}) {
  return new Request(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...extraHeaders },
    // Allow a raw string so we can send deliberately truncated JSON.
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}

// A plausible non-streaming Anthropic reply. Content doesn't matter — these
// tests only care about whether the handler got far enough to call out.
function stubUpstream() {
  const spy = vi.fn(
    async () =>
      new Response(JSON.stringify({ content: [{ type: 'text', text: '{}' }] }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
  );
  vi.stubGlobal('fetch', spy);
  return spy;
}

beforeEach(() => {
  vi.restoreAllMocks();
});
afterEach(() => {
  vi.unstubAllGlobals();
});

describe('null holes in client-supplied arrays do not crash the endpoint', () => {
  it('micro-lesson survives a [null] entry in weakWords', async () => {
    const upstream = stubUpstream();
    const res = await microLesson({
      request: jsonReq('https://x/api/micro-lesson', {
        weakWords: [null, { hr: 'kuća', en: 'house' }],
        level: 'A2',
      }),
      env: AI_ENV,
    });
    expect(upstream).toHaveBeenCalled();
    expect(res.status).not.toBe(500);
  });

  it('adaptive-insights survives [null] entries in errorLog and srsWeakWords', async () => {
    const upstream = stubUpstream();
    const res = await adaptiveInsights({
      request: jsonReq('https://x/api/adaptive-insights', {
        level: 'B1',
        errorLog: [null, { type: 'case', context: 'genitive' }],
        srsWeakWords: [null, { word: 'pas', missCount: 3 }],
      }),
      env: AI_ENV,
    });
    expect(upstream).toHaveBeenCalled();
    expect(res.status).not.toBe(500);
  });

  it('dialogue survives a [null] entry in history', async () => {
    const upstream = stubUpstream();
    const res = await dialogue({
      request: jsonReq('https://x/api/dialogue', {
        scenario_id: 'cafe',
        userMessage: 'Dobar dan, htio bih kavu.',
        history: [null, { role: 'user', content: 'Bog!' }],
        level: 'A2',
      }),
      env: AI_ENV,
    });
    expect(upstream).toHaveBeenCalled();
    expect(res.status).not.toBe(500);
  });

  it('conversation survives a [null] entry in messages', async () => {
    const upstream = stubUpstream();
    const res = await conversation({
      request: jsonReq('https://x/api/conversation', {
        messages: [null, { role: 'user', content: 'Kako si?' }],
        level: 'A2',
        turnCount: 1,
      }),
      env: AI_ENV,
    });
    expect(upstream).toHaveBeenCalled();
    expect(res.status).not.toBe(500);
  });

  it('daily-plan survives a non-array stylePreferences.preferredTypes', async () => {
    const upstream = stubUpstream();
    // daily-plan has no outer try/catch, so pre-fix this call REJECTED with a
    // TypeError rather than returning any Response at all.
    const res = await dailyPlan({
      request: jsonReq('https://x/api/daily-plan', {
        level: 'A2',
        goal: 'fluent',
        // dataPoints >= 5 is the gate that lets these two reach .slice().map()
        stylePreferences: { dataPoints: 9, preferredTypes: 123, avoidedTypes: { a: 1 } },
      }),
      env: AI_ENV,
    });
    expect(res).toBeInstanceOf(Response);
    // Reaching the upstream call is the proof; the status here reflects the
    // stubbed (planless) upstream body, not the input guard.
    expect(upstream).toHaveBeenCalled();
  });
});

describe('malformed JSON is a 400, not a 500 charged against quota', () => {
  it('translate rejects a truncated body with invalid_json', async () => {
    const upstream = stubUpstream();
    const res = await translate({
      request: jsonReq('https://x/api/translate', '{"text":'),
      env: AI_ENV,
    });
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'invalid_json' });
    expect(upstream).not.toHaveBeenCalled();
  });

  it('conversational-tutor rejects a truncated body with invalid_json', async () => {
    const upstream = stubUpstream();
    const res = await conversationalTutor({
      request: jsonReq('https://x/api/conversational-tutor', '{"messages":'),
      env: AI_ENV,
    });
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'invalid_json' });
    expect(upstream).not.toHaveBeenCalled();
  });

  it('tts rejects a truncated body with 400, not the outer catch 500', async () => {
    const upstream = stubUpstream();
    const res = await tts({
      request: jsonReq('https://x/api/tts', '{"text":'),
      env: { AZURE_TTS_KEY: 'k', AZURE_TTS_REGION: 'westeurope' },
    });
    expect(res.status).toBe(400);
    expect(upstream).not.toHaveBeenCalled();
  });
});

describe('undecodable audio is a 400, not an opaque 500', () => {
  it('stt returns bad_audio for a non-base64 audioBase64', async () => {
    const upstream = stubUpstream();
    const res = await stt({
      request: jsonReq('https://x/api/stt', {
        audioBase64: 'not!!valid!!base64!!',
        mimeType: 'audio/webm',
      }),
      env: { DEEPGRAM_API_KEY: 'k' },
    });
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: 'bad_audio' });
    expect(upstream).not.toHaveBeenCalled();
  });
});

describe('contact requires string fields instead of throwing on them', () => {
  const CONTACT_ENV = { ADMIN_EMAIL: 'admin@x.com', RESEND_API_KEY: 'k' };

  it('returns 400 for a numeric description rather than crashing on .trim()', async () => {
    const upstream = stubUpstream();
    const res = await contact({
      request: jsonReq('https://x/api/contact', {
        type: 'bug',
        subject: 'Broken',
        description: 1234567890123,
      }),
      env: CONTACT_ENV,
    });
    expect(res.status).toBe(400);
    expect((await res.json()).error).toBe('Missing required fields.');
    expect(upstream).not.toHaveBeenCalled();
  });

  it('tolerates a numeric replyEmail when an authed email is available', async () => {
    const upstream = stubUpstream();
    // Unsigned JWT-shaped token: getFirebaseUid is mocked, contact.js only
    // base64-decodes the payload to read the email claim.
    const payload = btoa(JSON.stringify({ email: 'learner@x.com' }));
    const res = await contact({
      request: jsonReq(
        'https://x/api/contact',
        {
          type: 'bug',
          subject: 'Broken',
          description: 'The flashcards stopped flipping after the update.',
          replyEmail: 5551234,
        },
        { authorization: `Bearer h.${payload}.s` },
      ),
      env: { ...CONTACT_ENV, FIREBASE_PROJECT_ID: 'p' },
    });
    // The verified auth email replaces the junk value, so the ticket is sent.
    expect(res.status).not.toBe(500);
    expect(upstream).toHaveBeenCalled();
  });
});
