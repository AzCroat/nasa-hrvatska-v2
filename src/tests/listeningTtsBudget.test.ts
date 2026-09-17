/**
 * listeningTtsBudget.test.ts — the client must not give up before the server
 * has finished trying.
 *
 * Owner report + Sentry `tts_failed:timeout` (6a279c7c, 2026-09-17) on
 * /ai_listening. `AIListeningScreen` allowed 20s; /api/tts tries its backends
 * in SEQUENCE, each with its own timeout, and the ones that can speak a long
 * passage already sum to more than that. So the abort was not a slow network —
 * it was the client abandoning work the server had not finished attempting.
 *
 * TWO NUMBERS ON OPPOSITE SIDES OF A NETWORK BOUNDARY, which is the shape that
 * took the cron secret down for 79 consecutive runs behind a comment claiming
 * the halves were shared. A comment is not a mechanism, so this DERIVES the
 * server's budget from its source and fails when the two drift.
 *
 * It deliberately does NOT assert an exact client value: the point is the
 * relationship, not the constant. Raising a backend timeout or adding a
 * backend should fail this, and the fix is to think about the client budget —
 * not to edit a number restated here.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { TTS_FETCH_TIMEOUT_MS } from '../lib/audio';
import { GTRANSLATE_MAX_CHARS, TTS_TEXT_BUDGET } from '../../functions/api/_ttsLimits.js';

const TTS_SRC = 'functions/api/tts.js';

/** Every per-backend timeout, attributed to the function it sits in. */
function backendTimeouts(src: string): Record<string, number> {
  const fnRe = /(?:async\s+)?function\s+(try[A-Za-z]+)\s*\(/g;
  const starts: { name: string; at: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = fnRe.exec(src))) starts.push({ name: m[1]!, at: m.index });
  const out: Record<string, number> = {};
  starts.forEach((st, i) => {
    const body = src.slice(st.at, starts[i + 1]?.at ?? src.length);
    const nums = [
      ...body.matchAll(/(?:AbortSignal\.timeout\(\s*(\d{4,6})\s*\)|,\s*(\d{4,6})\s*\)\s*;)/g),
    ].map((x) => Number(x[1] || x[2]));
    // A backend's own worst case is the SUM of its internal waits: Azure pays
    // a token fetch and then a synthesis fetch before it gives up.
    if (nums.length) out[st.name] = nums.reduce((a, b) => a + b, 0);
  });
  return out;
}

const ATTEMPT_TO_FN: Record<string, string> = {
  elevenlabs: 'tryElevenLabs',
  azure: 'tryAzure',
  edge: 'tryEdgeTTS',
  gtranslate: 'tryGoogleTranslateTTS',
  google: 'tryGoogle',
};

/**
 * The backends each VOICE PATH attempts, derived from the chain's own branches.
 *
 * Summing all five would over-count — ElevenLabs is only on the `charlotte`
 * path and never runs in the same request as Edge or Google. My first draft of
 * this test did exactly that, produced 47s against a 45s budget, and failed
 * correct code. The chain is two alternative sequences; the budget has to
 * cover the longer one, not their union.
 */
function chainsByVoicePath(src: string): string[][] {
  const at = src.indexOf("if (voice === 'charlotte')");
  expect(at).toBeGreaterThan(-1);
  const tail = src.slice(at);
  const elseAt = tail.indexOf('} else {');
  expect(elseAt).toBeGreaterThan(-1);
  const names = (chunk: string) =>
    [...chunk.matchAll(/attempt\('([a-z]+)'/g)].map((x) => ATTEMPT_TO_FN[x[1]!]!).filter(Boolean);
  return [names(tail.slice(0, elseAt)), names(tail.slice(elseAt, elseAt + 3000))];
}

describe('the AI Listening TTS budget covers the server chain', () => {
  const src = readFileSync(TTS_SRC, 'utf8');
  const timeouts = backendTimeouts(src);
  const paths = chainsByVoicePath(src);

  it('finds the backends and the paths in source, so the sums are not vacuous', () => {
    // If either parse returns nothing the comparison below passes trivially.
    expect(Object.keys(timeouts).length).toBeGreaterThanOrEqual(4);
    expect(timeouts.tryEdgeTTS).toBeGreaterThan(0);
    expect(timeouts.tryGoogle).toBeGreaterThan(0);
    expect(paths.length).toBe(2);
    for (const p of paths) expect(p.length).toBeGreaterThan(0);
  });

  it('exceeds the longest path that can actually speak a long passage', () => {
    // Google Translate is excluded BY ITS OWN LIMIT, not by preference: it
    // refuses anything over GTRANSLATE_MAX_CHARS, and this screen's text is
    // far longer, so it can never serve this request.
    expect(TTS_TEXT_BUDGET).toBeGreaterThan(GTRANSLATE_MAX_CHARS);
    const worst = Math.max(
      ...paths.map((p) =>
        p
          .filter((fn) => fn !== 'tryGoogleTranslateTTS')
          .reduce((sum, fn) => sum + (timeouts[fn] ?? 0), 0),
      ),
    );
    expect(worst).toBeGreaterThan(0);
    expect(TTS_FETCH_TIMEOUT_MS).toBeGreaterThan(worst);
  });

  it('is the budget ttsFetch actually applies, for every caller', () => {
    // MUTATION-FOUND: the assertions above read the exported CONSTANT, so a
    // call site could hardcode 20000 again and the suite would stay green — a
    // budget that is tested and not used.
    const audio = readFileSync('src/lib/audio.ts', 'utf8');
    const at = audio.indexOf('export async function ttsFetch');
    expect(at).toBeGreaterThan(-1);
    expect(audio.slice(at, at + 700)).toMatch(/TTS_FETCH_TIMEOUT_MS/);

    // And the TTS call re-introduces no literal budget of its own. Scoped to
    // that call: the screen also times out /api/listening (the text GENERATION
    // request) at 30s, which is a different and legitimate deadline — a first
    // draft of this assertion forbade every literal and failed on it.
    const screen = readFileSync('src/components/practice/AIListeningScreen.tsx', 'utf8');
    const call = screen.indexOf('await ttsFetch(');
    expect(call).toBeGreaterThan(-1);
    expect(screen.slice(call, call + 300)).not.toMatch(/AbortSignal\.timeout/);
  });

  it('covers the eleven callers that previously had NO timeout at all', () => {
    // `new AbortController().signal` never aborts, so every ttsFetch caller
    // that passed no signal could hang forever with nothing recorded.
    const audio = readFileSync('src/lib/audio.ts', 'utf8');
    const at = audio.indexOf('export async function ttsFetch');
    const body = audio.slice(at, at + 700);
    expect(body).not.toMatch(/_ttsPost\(body, signal \?\? new AbortController\(\)\.signal\)/);
  });

  it('is still bounded — a learner is never left waiting indefinitely', () => {
    // The other direction matters too: the fix for "too short" is not "no
    // limit". A spinner with no end is its own failure.
    expect(TTS_FETCH_TIMEOUT_MS).toBeLessThanOrEqual(60000);
  });
});

describe('a backend that cannot speak the whole text refuses it', () => {
  it('Google Translate returns null instead of truncating', () => {
    const src = readFileSync(TTS_SRC, 'utf8');
    const at = src.indexOf('async function tryGoogleTranslateTTS');
    expect(at).toBeGreaterThan(-1);
    const body = src.slice(at, at + 1200);
    // The defect, by its exact shape: slice to the cap and speak it anyway.
    // `isPlayableAudio` only checks byte LENGTH, so the chain credited that
    // as a success and the learner got the first 200 characters of an 1,800
    // character passage, presented as the whole recording.
    expect(body).not.toMatch(/text\.slice\(0,\s*200\)/);
    expect(body).toMatch(/if\s*\(text\.length > GTRANSLATE_MAX_CHARS\)\s*return null;/);
    // And it speaks the text it was given, not a trimmed copy.
    expect(body).toMatch(/encodeURIComponent\(text\)/);
  });
});
