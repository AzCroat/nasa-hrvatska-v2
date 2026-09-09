/**
 * emptyAudio.test.ts — a 200 is not proof of audio.
 *
 * Owner, 2026-09-09: "Audio did not play. Has not once yet." No error, no
 * toast, no Sentry event — just silence. The 2026-09-06 audio directive closed
 * four defects on this path and every one of them ANNOUNCED itself (a 429, a
 * 503, a decode error, a superseded play). This is the shape it did not cover:
 * the request SUCCEEDS and there is nothing in it.
 *
 * `functions/api/tts.js` guarded the serve path with `if (!buffer)`, and an
 * empty ArrayBuffer is TRUTHY. So a backend answering 200 with an empty or
 * token-sized body — Google Translate TTS returns a consent/token body to
 * datacenter IPs, and ElevenLabs was checked for `res.ok` and nothing else —
 * was served to the learner as `200 audio/mpeg` containing no audio, and
 * written to KV for 90 days.
 *
 * THE THRESHOLD WAS ALREADY IN THE FILE. The KV cache READ has skipped a hit
 * under 500 bytes since it was written; it was applied in one of the three
 * places that needed it. This is that number made into one constant used by
 * the chain, the serve gate, the cache write, the cache read, and the client.
 *
 * NOT CLAIMED: that this is what the owner hit. It cannot be established from
 * here — production is unreachable from the dev session and nothing recorded
 * the cause, which is the same gap CLAUDE.md already records for 2026-09-06.
 * What IS established is that this path could produce exactly that symptom,
 * and that it now names itself instead.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { MIN_AUDIO_BYTES, describeTtsFailure } from '../lib/audio';

/**
 * Comments stripped from BOTH files before matching. Each of them explains
 * this defect in prose that quotes `if (!buffer)` verbatim, so the negative
 * assertion below passed against the explanation on its first run. That is the
 * third time in one session a source pin was satisfied by its own comment —
 * offlineResourceKey, PopCultureScreen, and here.
 */
const strip = (src: string) => src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

const TTS = strip(readFileSync('functions/api/tts.js', 'utf8'));
const AUDIO = strip(readFileSync('src/lib/audio.ts', 'utf8'));

describe('the empty-buffer gap is closed on the server', () => {
  it('an empty ArrayBuffer is truthy — the reason `if (!buffer)` was not enough', () => {
    // The defect in one line. If this ever stops being true the guard could be
    // simplified; until then it is why the byteLength check has to exist.
    expect(!!new ArrayBuffer(0)).toBe(true);
  });

  it('serves, caches and chains on byteLength, never on truthiness', () => {
    expect(TTS).toMatch(/const MIN_AUDIO_BYTES = (\d+);/);
    expect(TTS).toMatch(/function isPlayableAudio\(buffer\)/);
    expect(TTS).toMatch(/buffer\.byteLength >= MIN_AUDIO_BYTES/);
    // The serve gate specifically — the site that produced the silence.
    expect(TTS).toMatch(/if \(!isPlayableAudio\(buffer\)\) \{/);
    // And no bare truthiness check survives on the buffer anywhere.
    expect(TTS, 'a bare `if (!buffer)` is back on the audio path').not.toMatch(/if \(!buffer[ )]/);
  });

  it('the cache read shares the constant instead of restating 500', () => {
    // It used to be a literal, which is how the number ended up applied in one
    // place out of three.
    expect(TTS).not.toMatch(/byteLength > 500/);
    expect(TTS).toMatch(/if \(isPlayableAudio\(hit\)\)/);
  });

  it('names the byte count in the 503 so the next one is diagnosable', () => {
    expect(TTS).toMatch(/empty\(\$\{buffer\.byteLength\}b\)/);
    expect(TTS).toMatch(/\$\{whyFailed\}\$\{emptyNote\}/);
  });
});

describe('the client refuses an empty body too', () => {
  it('guards on the blob size before decoding', () => {
    expect(AUDIO).toMatch(/freshBlob\.size < MIN_AUDIO_BYTES/);
    expect(AUDIO).toMatch(/cause: 'empty_audio'/);
  });

  it('says something true about it, and does not blame the device', () => {
    const msg = describeTtsFailure({ cause: 'empty_audio' });
    expect(msg).toMatch(/empty recording/i);
    // 'playback' is the cause that says "check the device isn't muted" — the
    // wrong sentence for a server that sent nothing.
    expect(msg).not.toMatch(/muted/i);
    expect(msg).not.toBe(describeTtsFailure({ cause: 'playback' }));
  });

  it('is a real failure — so it falls back, toasts and reports like the rest', () => {
    // _noteFailure feeds getLastTtsFailure/_completeSpeak, which is what
    // dispatches nh:tts-failed and reports to Sentry. Returning a bare false
    // here would be the 2026-09-06 defect all over again.
    expect(AUDIO).toMatch(/return _noteFailure\(\{ cause: 'empty_audio'/);
  });
});

describe('the E2E TTS mock still clears the threshold', () => {
  it('silentWav() is comfortably above MIN_AUDIO_BYTES', () => {
    // The client guard REJECTS a body under the threshold, so a mock below it
    // would fail every heard-gate spec — and the failure would look like the
    // gate breaking rather than the fixture shrinking. `silentWav()` defaults
    // to 60ms = 1004 bytes; at 20ms it would be 364 and every listening and
    // dictation spec would go red.
    //
    // CLAUDE.md already records the other half of this: the mock once served
    // an EMPTY body, "fine while nothing depended on audio, fatal once the
    // gate did". Same fixture, same class, opposite direction.
    const src = readFileSync('e2e/fixtures/seed-auth.js', 'utf8');
    const ms = Number(src.match(/export function silentWav\(ms = (\d+)\)/)![1]);
    const sampleRate = Number(src.match(/const sampleRate = (\d+);/)![1]);
    const bytes = 44 + Math.max(1, Math.round((sampleRate * ms) / 1000)) * 2;
    expect(
      bytes,
      `silentWav(${ms}) is ${bytes}b, under the ${MIN_AUDIO_BYTES}b floor the client enforces`,
    ).toBeGreaterThanOrEqual(MIN_AUDIO_BYTES);
    // And no caller may shorten it below the floor.
    expect(src).toMatch(/body: silentWav\(\)/);
  });
});

describe('the two constants must agree', () => {
  it('client and server hold the same threshold, read from source', () => {
    // Derived from both files rather than restated here: this is a
    // two-places-must-agree fact, the shape that took the cron secret down for
    // 79 consecutive runs behind a comment claiming they were shared.
    const server = Number(TTS.match(/const MIN_AUDIO_BYTES = (\d+);/)![1]);
    const client = Number(AUDIO.match(/export const MIN_AUDIO_BYTES = (\d+);/)![1]);
    expect(server).toBe(client);
    expect(MIN_AUDIO_BYTES).toBe(server);
    // Sanity: a real hr-HR utterance is several KB. A threshold near zero
    // would pass this test while guarding nothing.
    expect(MIN_AUDIO_BYTES).toBeGreaterThanOrEqual(200);
  });
});
