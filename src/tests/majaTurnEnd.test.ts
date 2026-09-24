/**
 * majaTurnEnd.test.ts — "wasn't always reading properly or picking up my full
 * sentences" (owner report, 2026-09-24).
 *
 * A Web Speech session ends for two quite different reasons and `MajaScreen`'s
 * `onend` treated them as one:
 *
 *   DELIBERATE  our silence timer called stop() because the utterance looked
 *               finished — computeSilenceDelay had already decided. Send.
 *   BY ITSELF   Chrome ends a `continuous` session on its own: a long pause, a
 *               service timeout, a network blip. The learner is mid-sentence.
 *
 * The old handler was `if (listening && transcript.length > 1) { send }`, which
 * produces BOTH reported symptoms and nothing else:
 *
 *   - ended mid-sentence  → half the sentence is sent and Baka Mara answers it,
 *                           while the learner is still talking.
 *   - ended before they   → the length guard skips the send, and NOTHING else
 *     said anything         runs: the recognizer is finished, `recRef` still
 *                           points at it, and the mic is dead until the learner
 *                           leaves the screen. Silence with no explanation.
 *
 * The second is the worse one and the reason a restart — not just a smarter
 * send — is the fix.
 *
 * ALSO: a restarted session's `event.results` is EMPTY, so the screen's old
 * `transcriptRef.current = full` would have thrown away everything said before
 * the restart. Restarting without accumulating would have replaced a truncation
 * bug with a different truncation bug.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { accumulateTranscript, decideOnRecognizerEnd, MAX_TURN_RESTARTS } from '../lib/speechTurn';

describe('what to do when the recognizer ends', () => {
  const base = { phase: 'listening', transcript: 'kupio sam kruh', restarts: 0 };

  it('sends when WE ended the turn', () => {
    expect(decideOnRecognizerEnd({ ...base, deliberate: true })).toBe('send');
  });

  it('RESTARTS when the service ended it, mid-sentence', () => {
    // The learner paused to find a word. Sending here is the truncation.
    expect(decideOnRecognizerEnd({ ...base, deliberate: false })).toBe('restart');
  });

  it('RESTARTS when the service ended it before a word was said', () => {
    // The old code did nothing at all here, and the mic stayed dead.
    expect(decideOnRecognizerEnd({ ...base, transcript: '', deliberate: false })).toBe('restart');
  });

  it('a deliberate end with nothing said is simply idle, not a send', () => {
    expect(decideOnRecognizerEnd({ ...base, transcript: '', deliberate: true })).toBe('idle');
    expect(decideOnRecognizerEnd({ ...base, transcript: 'a', deliberate: true })).toBe('idle');
  });

  it('gives up on restarting rather than spinning, and says so', () => {
    // A browser whose speech service refuses to run would otherwise loop for
    // ever, which is the same dead mic with more CPU.
    expect(decideOnRecognizerEnd({ ...base, deliberate: false, restarts: MAX_TURN_RESTARTS })).toBe(
      'fallback',
    );
    expect(MAX_TURN_RESTARTS).toBeGreaterThan(3);
  });

  it('does nothing once the turn is over', () => {
    for (const phase of ['thinking', 'maja-speaking', 'debrief', 'idle'])
      expect(decideOnRecognizerEnd({ ...base, phase, deliberate: false })).toBe('idle');
  });
});

describe('a restart must not lose the sentence so far', () => {
  it('joins the new session onto what earlier sessions heard', () => {
    expect(accumulateTranscript('Jučer sam bio', 'u dućanu s bakom')).toBe(
      'Jučer sam bio u dućanu s bakom',
    );
  });

  it('handles either side being empty without inventing a space', () => {
    expect(accumulateTranscript('', 'dobar dan')).toBe('dobar dan');
    expect(accumulateTranscript('dobar dan', '')).toBe('dobar dan');
    expect(accumulateTranscript('', '')).toBe('');
    expect(accumulateTranscript(null as never, undefined as never)).toBe('');
  });

  it('does not double the spacing the recognizer already supplies', () => {
    expect(accumulateTranscript('  Jučer  ', '  sam bio  ')).toBe('Jučer sam bio');
  });
});

describe('the screen is wired to the decision', () => {
  const SRC = readFileSync('src/components/croatia/MajaScreen.tsx', 'utf8');

  it('onend asks decideOnRecognizerEnd instead of re-implementing it', () => {
    // NOT sliced to `rec.start()` — the restart branch calls that, so the
    // window closed before the fallback branch and the assertion below passed
    // on a slice that could not contain it.
    const end = SRC.slice(SRC.indexOf('rec.onend = ()'), SRC.indexOf('}, [startWaveform'));
    expect(end).toContain('decideOnRecognizerEnd');
    expect(end).toContain("verdict === 'restart'");
    expect(end).toContain("verdict === 'fallback'");
    // The defect, spelled out: a bare length check standing in for the decision.
    expect(end).not.toMatch(/if \(phaseRef\.current === 'listening' &&\s*transcriptRef/);
  });

  it('only the silence timer marks an end deliberate', () => {
    // If anything else set this, a service-ended session would look like a
    // finished sentence again and the truncation would be back.
    const sets = (SRC.match(/turnEndingRef\.current = true/g) || []).length;
    expect(sets).toBe(1);
    const timer = SRC.slice(SRC.indexOf('const resetSilenceTimer'), SRC.indexOf('rec.onresult'));
    expect(timer).toContain('turnEndingRef.current = true');
  });

  it('a new turn clears the base, the flag and the restart count', () => {
    const start = SRC.slice(SRC.indexOf('const startListening'), SRC.indexOf('startWaveform();'));
    for (const reset of [
      "transcriptRef.current = ''",
      "transcriptBaseRef.current = ''",
      'turnEndingRef.current = false',
      'restartsRef.current = 0',
    ])
      expect(start, reset).toContain(reset);
  });

  it('onresult accumulates rather than replacing', () => {
    const res = SRC.slice(SRC.indexOf('rec.onresult = ('), SRC.indexOf('rec.onerror = ('));
    expect(res).toContain('accumulateTranscript(transcriptBaseRef.current');
    expect(res).not.toMatch(/transcriptRef\.current = full;/);
  });
});

describe('the same defect on the graded speaking screen', () => {
  // GuidedSpeakingScreen's SPEAK stage is the app's only rubric-graded free
  // production. Its recognizer is `continuous` too, and a DELIBERATE stop nulls
  // the handler first — so every `onend` that fires there is the service ending
  // the session, which the old code treated as "the learner finished".
  //
  // It is worse here than in a chat: the truncated answer is SCORED, and
  // measured against a word floor, so the learner is told they did not say
  // enough when they did. And pressing the mic again replaced the transcript
  // instead of continuing it, so the first half was lost outright.
  const SRC = readFileSync('src/components/practice/GuidedSpeakingScreen.tsx', 'utf8');
  // `stopRecognizer` is defined BEFORE `listenOnce`, so slicing between them
  // gave an EMPTY window that fell back to the whole file — the assertions
  // below read as scoped and were not. Slice to the next member instead.
  const from = SRC.indexOf('function listenOnce');
  const body = SRC.slice(from, SRC.indexOf('\n  function ', from + 10));

  it('asks the shared decision rather than ending the answer', () => {
    expect(body).toContain('decideOnRecognizerEnd');
    expect(body).toContain("verdict === 'restart'");
  });

  it('carries the answer so far across a restart', () => {
    expect(body).toContain('accumulateTranscript(base');
    // The defect, spelled out: the session's own text replacing the answer.
    expect(body).not.toMatch(/\bfull = out;/);
  });

  it('re-opens only on the long stage, not after a three-word phrase', () => {
    // REHEARSE and BUILD are one short phrase: a service-ended session there IS
    // the end of the answer, and re-opening would leave the mic running and
    // make the learner press Stop for nothing. Only SPEAK asks to keep going.
    expect(body).toMatch(/function listenOnce\([\s\S]{0,80}keepOpen = false\)/);
    expect(body).toMatch(/!keepOpen\s*\n?\s*\?\s*'idle'/);
    expect(SRC).toContain('listenOnce(setTranscript, true)');
    expect(SRC).toContain('listenOnce(checkPhrase)');
    expect(SRC).toContain('listenOnce(checkBuild)');
  });

  it('does not re-open after an error — that would spin on a refused mic', () => {
    expect(body).toMatch(/errored\s*=\s*true/);
    expect(body).toMatch(/errored\s*\n?\s*\?\s*'idle'/);
  });
});
