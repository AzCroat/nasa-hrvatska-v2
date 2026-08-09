/**
 * speechEndpointing.test.js — users must not be cut off while speaking.
 *
 * THE INCIDENT (owner report, 2026-08-08): "when a user is trying to speak
 * with AI, they are cut off." The diagnosis found four mechanisms; this file
 * pins the fixed values and the two load-bearing semantics so they cannot
 * silently regress:
 *
 *  1. Maja's Web Speech endpointing fired after 900 ms — shorter than an L2
 *     learner's thinking pause — anchored to interim-result arrival (which
 *     Chrome stalls mid-speech), and then called abort(), which DISCARDS
 *     un-finalized words. Now: 1500/2600 ms, and the timer path calls
 *     rec.stop() so pending words are flushed and sent.
 *
 *  2. The VAD hook (Razgovor + Maja-on-iOS) endpointed at a fixed 1800 ms,
 *     counted soft trailing speech (RMS < 0.008) as silence, dropped all
 *     speech during its 'processing' state, and clipped the first ~250 ms of
 *     every utterance. Now: 2600 ms, exit hysteresis at 0.005, concurrent
 *     transcription (no 'processing' state in the machine), speculative
 *     capture from the first threshold crossing.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  SILENCE_BASE_MS,
  SILENCE_EXTENDED_MS,
  computeSilenceDelay,
} from '../components/croatia/MajaScreenUtils.js';
import { VAD_TUNING } from '../hooks/useWhisperSTT.js';

describe("Maja's adaptive endpointing", () => {
  it('gives a learner at least 1.5s of thinking pause, 2.5s mid-thought', () => {
    // 900 ms fired during normal L2 pauses AND during Chrome interim stalls.
    expect(SILENCE_BASE_MS).toBeGreaterThanOrEqual(1500);
    expect(SILENCE_EXTENDED_MS).toBeGreaterThanOrEqual(2500);
    expect(SILENCE_EXTENDED_MS).toBeGreaterThan(SILENCE_BASE_MS);
  });

  it('waits longer when the utterance is clearly unfinished', () => {
    expect(computeSilenceDelay('')).toBe(SILENCE_EXTENDED_MS); // nothing yet
    expect(computeSilenceDelay('dobar')).toBe(SILENCE_EXTENDED_MS); // barely started
    expect(computeSilenceDelay('išao sam u trgovinu i')).toBe(SILENCE_EXTENDED_MS); // conjunction
    expect(computeSilenceDelay('kupio sam kruh,')).toBe(SILENCE_EXTENDED_MS); // trailing comma
    expect(computeSilenceDelay('htio bih ovaj')).toBe(SILENCE_EXTENDED_MS); // hesitation filler
    expect(computeSilenceDelay('kupio sam kruh danas')).toBe(SILENCE_BASE_MS); // complete
  });

  it('the silence-timer path FLUSHES via stop(), never abort() — abort discards words', () => {
    // Source pin: inside resetSilenceTimer, the graceful path must call
    // rec.stop(); stopMic() (which aborts) may appear only in the backstop
    // that fires when a WebView never delivers onend.
    const src = readFileSync('src/components/croatia/MajaScreen.tsx', 'utf8');
    const timer = src
      .slice(src.indexOf('const resetSilenceTimer'), src.indexOf('rec.onresult'))
      // Strip comments so prose ABOUT stopMic doesn't count as a call.
      .replace(/^\s*\/\/.*$/gm, '');
    expect(timer).toMatch(/recRef\.current\?\.stop\(\)/);
    // The backstop exists and is the ONLY stopMic in the timer path.
    const stopMicCount = (timer.match(/stopMic\(\)/g) || []).length;
    expect(stopMicCount).toBe(1);
    expect(timer).toContain('1200');
  });
});

describe('the VAD endpointing invariants', () => {
  const T = VAD_TUNING;

  it('silence window absorbs a learner thinking pause (>= 2.5s)', () => {
    expect(T.SILENCE_DURATION_MS).toBeGreaterThanOrEqual(2500);
  });

  it('exit hysteresis: leaving speech takes a LOWER level than entering it', () => {
    // Equal thresholds count soft trailing speech as silence — the "cut off
    // while still speaking" failure. The gap is the fix.
    expect(T.SILENCE_THRESHOLD).toBeLessThan(T.SPEECH_THRESHOLD);
    expect(T.SPEECH_THRESHOLD / T.SILENCE_THRESHOLD).toBeGreaterThanOrEqual(2);
  });

  it('a hard utterance cap exists — the lower exit threshold must not let a noisy room record forever', () => {
    expect(T.MAX_UTTERANCE_MS).toBeGreaterThanOrEqual(30_000);
    expect(T.MAX_UTTERANCE_MS).toBeLessThanOrEqual(120_000);
  });

  it('speech during transcription is captured, not dropped', () => {
    // Semantics pin: the state machine has NO 'processing' state (ending an
    // utterance returns to waiting immediately), chunks live per-recorder so
    // overlapping recorders cannot clobber each other, and delivery order is
    // preserved by a chain.
    const src = readFileSync('src/hooks/useWhisperSTT.js', 'utf8');
    expect(src).not.toMatch(/vadStateRef\.current = 'processing'/);
    expect(src).toMatch(/sttChainRef/);
    expect(src).toMatch(/const chunks = \[\];/);
  });

  it('capture starts at the first threshold crossing — no front-clip', () => {
    const src = readFileSync('src/hooks/useWhisperSTT.js', 'utf8');
    const waiting = src.slice(
      src.indexOf("if (state === 'waiting')"),
      src.indexOf("} else if (state === 'recording')"),
    );
    // startRecorder is called in the same branch that FIRST sets speechStartRef,
    // i.e. before the MIN_SPEECH_MS confirmation, so the first word is on tape.
    expect(waiting).toMatch(
      /speechStartRef\.current = now;\s*\n[\s\S]{0,400}?startRecorder\(now\)/,
    );
  });
});
