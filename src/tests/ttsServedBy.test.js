/**
 * ttsServedBy.test.js — a success is as worth naming as a failure.
 *
 * The 2026-09-10 audio incident ended with the voice working and nobody able
 * to say WHICH voice. The evidence that Edge synthesizes a full listening
 * passage came from a CI unit test that accidentally hit the real network and
 * returned 200 where this sandbox returned 503 — and even then, which backend
 * answered had to be INFERRED by elimination, because the response did not
 * say. The fresh 200 set no `X-TTS-Backends` at all; the KV hit set the
 * CONFIGURED list, which is the same string a healthy deploy sends and
 * therefore says nothing.
 *
 * That matters beyond tidiness. The chain has four backends and the learner
 * hears whichever answers first. If Edge is carrying every play today — the
 * free, unkeyed, unaccountable one — that is a fact worth knowing BEFORE it
 * stops, not after. The 503 already names what failed (same incident); this
 * is the other half.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// See ttsTextLength.test.js: the gate, quota and budget all sit in front of
// the voice chain and fail closed with an empty env.
vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: async () => ({ ok: true, uid: 'test-uid' }),
}));
vi.mock('../../functions/api/_aiQuota.js', () => ({
  checkAIQuota: async () => ({ allowed: true }),
}));
vi.mock('../../functions/api/_aiBudget.js', () => ({
  checkAndChargeBudget: async () => ({ allowed: true }),
}));

/** Comments stripped, preserving `//` inside URLs. */
const strip = (src) => src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
const TTS = strip(readFileSync('functions/api/tts.js', 'utf8'));

function ttsRequest(text, voice = 'gabrijela') {
  return new Request('https://nasahrvatska.com/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://nasahrvatska.com' },
    body: JSON.stringify({ text, slow: false, voice }),
  });
}

/** Enough bytes to clear MIN_AUDIO_BYTES. */
const AUDIO = new Uint8Array(2000).fill(7).buffer;

let onRequestPost;
beforeEach(async () => {
  vi.resetModules();
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
  ({ onRequestPost } = await import('../../functions/api/tts.js'));
});
afterEach(() => vi.unstubAllGlobals());

describe('the 200 names the backend that actually spoke', () => {
  it('reports azure when Azure answered — driven, not asserted by source', async () => {
    // A real success through the real chain: Azure issues a token, then
    // returns audio. Asserting the string is present in the file would only
    // prove the string is present in the file.
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url) =>
        String(url).includes('issueToken')
          ? new Response('token-abc', { status: 200 })
          : new Response(AUDIO, { status: 200 }),
      ),
    );
    const res = await onRequestPost({
      request: ttsRequest('Dobar dan'),
      env: { AZURE_TTS_KEY: 'k', AZURE_TTS_REGION: 'eastus' },
      waitUntil: () => {},
    });
    expect(res.status).toBe(200);
    expect(res.headers.get('X-TTS-Backends'), 'the 200 does not say who spoke').toBe('azure');
  });

  it('every backend in the chain records a name when it succeeds', () => {
    // DERIVED from the chain rather than restated: each try* call must go
    // through `attempt`, which is the only thing that sets servedBy. A new
    // backend added with a bare `buffer = await tryX()` would serve audio the
    // response cannot account for.
    const chain = TTS.slice(
      TTS.indexOf('let servedBy = null;'),
      TTS.indexOf('if (!isPlayableAudio(buffer)) {\n      const emptyNote'),
    );
    const bareCalls = chain.match(/buffer = await try[A-Za-z]+\(/g) || [];
    expect(bareCalls, `backend(s) bypass attempt(): ${bareCalls.join(', ')}`).toHaveLength(0);
    for (const name of ['edge', 'gtranslate', 'azure']) {
      expect(chain, `${name} is not routed through attempt()`).toContain(`attempt('${name}'`);
    }
  });

  it('attempt() only claims a backend that produced PLAYABLE audio', () => {
    // A backend returning an empty body must not be credited — that is the
    // 2026-09-09 empty-ArrayBuffer defect in a new place.
    expect(TTS).toMatch(/if \(isPlayableAudio\(buffer\)\) servedBy = name;/);
  });

  it('a chain with nothing configured says unknown, never a guess', async () => {
    // With fetch stubbed every keyless backend fails, so this 503s — and the
    // point is that it does NOT invent a name.
    const res = await onRequestPost({
      request: ttsRequest('Dobar dan'),
      env: {},
      waitUntil: () => {},
    });
    expect(res.status).toBe(503);
    expect(res.headers.get('X-TTS-Backends')).toMatch(/edge-failed/);
  });
});

describe('a cache hit says cache, not a provider', () => {
  it('the KV hit reports kv-cache', async () => {
    expect(TTS).toMatch(/'X-TTS-Backends': 'kv-cache'/);
    const kv = {
      get: async () => AUDIO,
      put: async () => {},
    };
    const res = await onRequestPost({
      request: ttsRequest('Dobar dan'),
      env: { KV: kv },
      waitUntil: () => {},
    });
    expect(res.status).toBe(200);
    // NOT a provider name. The store does not record what generated the audio
    // 90 days ago, so naming one would be a guess presented as a fact.
    expect(res.headers.get('X-TTS-Backends')).toBe('kv-cache');
  });
});
