/**
 * ttsTextLength.test.js — the AI listening screen could never have produced
 * audio, and it had nothing to do with the voice chain.
 *
 * Owner, 2026-09-10, on Listening practice, in the first build where a TTS
 * failure could name itself: "This recording couldn't be generated."
 *
 * That is `describeTtsFailure`'s sentence for `invalid_text`, and
 * `_classifyHttpFailure` produces `invalid_text` from exactly one thing: a
 * 400. So the request never reached a backend at all. Azure, Edge, Google —
 * none of them were involved. `/api/tts` rejected the request itself.
 *
 * THE CAP WAS 500 CHARACTERS. `AIListeningScreen` generates a narrator
 * passage or an interleaved dialogue (the generator runs at max_tokens
 * 1500–2600) and sends the WHOLE thing in one request. It is always over 500.
 * So that screen was structurally incapable of playing audio for as long as it
 * has existed, and three rounds of voice-chain work could never have fixed it.
 *
 * WORTH RECORDING: every previous round reasoned about which BACKEND was
 * failing, because that is where a "no audio" report points. The instrument
 * that settled it in one message was the one added hours earlier — and the
 * reason it took so long to arrive is that the naming had been wired to
 * `speakAzure` while this screen uses `ttsFetch`. Diagnosis first, then the
 * cause names itself.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { describeTtsFailure } from '../lib/audio';

/**
 * Comments stripped — but NOT the `//` inside a URL. The naive
 * `replace(/\/\/.*$/gm, '')` every other guard in this repo uses truncates
 * `https://tts-cache.internal/v4/...` at the scheme, so the cache-key
 * assertion below failed against correct code on its first run. Only a `//`
 * that is not preceded by `:` starts a comment.
 */
const strip = (src) => src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
const TTS = strip(readFileSync('functions/api/tts.js', 'utf8'));

/** A request shaped the way every caller sends one. */
function ttsRequest(text) {
  return new Request('https://nasahrvatska.com/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://nasahrvatska.com' },
    body: JSON.stringify({ text, slow: false, voice: 'gabrijela' }),
  });
}

/**
 * THE AUTH GATE RUNS BEFORE VALIDATION, so without this mock the handler
 * returns 500 `server_misconfigured` and never reaches the length check at
 * all. The first draft of this file did exactly that, and its headline
 * assertion — `expect(res.status).not.toBe(400)` — PASSED, because 500 is not
 * 400. A decorative guard that would have shipped a claim the code never
 * demonstrated. Mocked so the assertions are about the cap and nothing else.
 */
vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: async () => ({ ok: true, uid: 'test-uid' }),
}));
// Quota and budget sit BETWEEN validation and the voice chain and both fail
// closed with no D1/KV bound, so they too have to stand aside for the
// assertion below to be about the length cap rather than about them.
vi.mock('../../functions/api/_aiQuota.js', () => ({
  checkAIQuota: async () => ({ allowed: true }),
}));
vi.mock('../../functions/api/_aiBudget.js', () => ({
  checkAndChargeBudget: async () => ({ allowed: true }),
}));

/** No backends configured: a request that PASSES validation ends at the 503. */
const ENV = {};

let onRequestPost;
beforeEach(async () => {
  vi.resetModules();
  // HERMETIC, and it was not on the first run. With no key configured the
  // chain still reaches the KEYLESS backends — Edge and Google Translate —
  // and CI's runner has real network, so the passage below was genuinely
  // synthesized and the handler returned 200 where this sandbox (whose proxy
  // blocks the voice host) returned 503. A unit test that behaves differently
  // depending on whether the runner can reach Microsoft is not a unit test;
  // it is slow, flaky, and it charges an external service on every CI run.
  // Stubbing fetch makes every keyless backend fail, so the 503 is the
  // handler's own decision rather than the network's.
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
  ({ onRequestPost } = await import('../../functions/api/tts.js'));
});
afterEach(() => vi.unstubAllGlobals());

describe('the length cap admits a real listening passage', () => {
  it('the reported sentence is what a 400 produces — the trail back to the cap', () => {
    // Ties the owner's words to the code path, so the next person reading this
    // does not have to rediscover which failure says what.
    expect(describeTtsFailure({ cause: 'invalid_text' })).toBe(
      "This recording couldn't be generated.",
    );
  });

  it('the cap is a named constant well above a generated passage', () => {
    const cap = Number(TTS.match(/const MAX_TTS_CHARS = (\d+);/)[1]);
    expect(cap).toBeGreaterThanOrEqual(2000);
    // Still BOUNDED. An unbounded cap turns one request into an unbounded
    // synthesis bill the moment a per-character backend is configured.
    expect(cap).toBeLessThanOrEqual(5000);
    expect(TTS).toMatch(/text\.length > MAX_TTS_CHARS/);
    expect(TTS, 'the 500-character cap is back').not.toMatch(/text\.length > 500/);
  });

  it('ACCEPTS a passage of the length AI Listening actually sends', async () => {
    // ~1,400 characters: a mid-length B1 narrator passage. Under the old cap
    // this was a 400 every single time.
    const passage = 'Ana svako jutro šeta uz more i gleda brodove kako polaze. '.repeat(24);
    expect(passage.length).toBeGreaterThan(500);
    const res = await onRequestPost({
      request: ttsRequest(passage),
      env: ENV,
      waitUntil: () => {},
    });
    expect(res.status, 'a real listening passage is still refused as invalid text').not.toBe(400);
    // ASSERTED POSITIVELY, not as "anything but 400": with no backends
    // configured a request that CLEARS validation must reach the end of the
    // voice chain and 503 there. "not 400" was satisfied by the 500 the auth
    // gate returned before validation even ran.
    expect(res.status, 'the passage did not reach the voice chain').toBe(503);
    expect(await res.text()).toMatch(/TTS unavailable/);
  });

  it('still refuses empty text and text past the cap', async () => {
    const empty = await onRequestPost({
      request: ttsRequest('   '),
      env: ENV,
      waitUntil: () => {},
    });
    expect(empty.status).toBe(400);
    const cap = Number(TTS.match(/const MAX_TTS_CHARS = (\d+);/)[1]);
    const tooLong = await onRequestPost({
      request: ttsRequest('a'.repeat(cap + 1)),
      env: ENV,
      waitUntil: () => {},
    });
    expect(tooLong.status, 'the cap stopped being a cap').toBe(400);
  });
});

describe('the edge cache key cannot collide once long text is allowed', () => {
  it('hashes the full request identity instead of the first 400 characters', () => {
    // RAISING THE CAP AND FIXING THIS KEY ARE ONE CHANGE. Two different
    // passages that open with the same 400 characters — a shared dialogue
    // opening, a repeated scene-setting line — would have served each other's
    // audio: a learner hearing the wrong recording, with no error anywhere.
    expect(TTS, 'the edge key is truncating the text again').not.toMatch(/text\.slice\(0, 400\)/);
    expect(TTS).toMatch(
      /const identity = `\$\{voice\}\|\$\{slow\}\|\$\{prosodyKey\}\|\$\{phonemeKey\}\|\$\{text\}`/,
    );
    expect(TTS).toMatch(/tts-cache\.internal\/v4\/\$\{identityHash\}/);
  });

  it('keeps the DURABLE KV key format, so 90 days of cached audio survives', () => {
    // The KV half already hashed the full text. Changing its format would
    // silently regenerate every cached phrase — real provider spend for no
    // gain. Only the transient edge key moves.
    expect(TTS).toMatch(/kvKey = 'tts:v3:' \+ identityHash;/);
  });

  it('no hash means no caching, never caching under an ambiguous key', () => {
    expect(TTS).toMatch(/edgeCache = cacheKey \? caches\.default : null;/);
    expect(TTS).toMatch(/if \(kv && identityHash\)/);
  });
});
