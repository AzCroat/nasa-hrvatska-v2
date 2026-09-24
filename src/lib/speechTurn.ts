/**
 * speechTurn.ts — when a Web Speech session ending means the learner is done.
 *
 * Lifted out of MajaScreenUtils when a SECOND screen needed it
 * (GuidedSpeakingScreen). Pure, no React, no browser APIs — the decision can be
 * tested without a recognizer.
 */
/**
 * How many times one turn may re-open a recognizer that ended by itself before
 * we stop trying and offer the typed / Whisper fallback instead. High enough
 * that an ordinary pause-heavy answer never exhausts it, low enough that a
 * browser whose speech service is refusing to run cannot spin forever.
 */
export const MAX_TURN_RESTARTS = 8;

/**
 * Join what a NEW recognizer session heard onto what earlier sessions in the
 * same turn already produced.
 *
 * `onresult` reads `event.results`, which belongs to the CURRENT session and is
 * empty again after a restart. Assigning it straight to the turn's transcript —
 * which is what the screen used to do — silently discards everything said
 * before the restart.
 */
export function accumulateTranscript(base: string, sessionText: string): string {
  const b = String(base || '').trim();
  const s = String(sessionText || '').trim();
  if (!b) return s;
  if (!s) return b;
  return b + ' ' + s;
}

/**
 * What to do when the recognizer fires `onend`.
 *
 * THE DEFECT THIS EXISTS FOR (owner report, 2026-09-24: "wasn't always reading
 * properly or picking up my full sentences"). `onend` used to mean one thing:
 * send whatever we have. But a Web Speech session ends for TWO quite different
 * reasons, and the screen could not tell them apart:
 *
 *   DELIBERATE  our own silence timer called stop() because the utterance
 *               looked finished. Sending is right.
 *   BY ITSELF   Chrome's speech service ends a `continuous` session on its own
 *               — on a long pause, on a service timeout, on a network blip.
 *               The learner is mid-sentence and has said nothing wrong.
 *
 * Treating the second as the first produces exactly the two symptoms reported:
 * a half-sentence is sent while the learner is still speaking, and — when the
 * session ends before they have said anything at all — NOTHING happens and the
 * mic is quietly dead, because the old handler's `transcript.length > 1` guard
 * skipped the send and nothing restarted the recognizer. The learner keeps
 * talking to a screen that stopped listening.
 *
 * Pure so the decision can be tested without a browser.
 */
export type RecognizerEndVerdict = 'send' | 'restart' | 'fallback' | 'idle';

export function decideOnRecognizerEnd({
  deliberate,
  phase,
  transcript,
  restarts,
  maxRestarts = MAX_TURN_RESTARTS,
}: {
  deliberate: boolean;
  phase: string;
  transcript: string;
  restarts: number;
  maxRestarts?: number;
}): RecognizerEndVerdict {
  if (phase !== 'listening') return 'idle';
  if (deliberate) return String(transcript || '').trim().length > 1 ? 'send' : 'idle';
  if (restarts >= maxRestarts) return 'fallback';
  return 'restart';
}
