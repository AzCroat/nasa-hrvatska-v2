// src/lib/recognizerError.ts
//
// ONE SENTENCE FOR A BROWSER RECOGNISER THAT STOPPED (speaking microphone walk,
// 2026-09-30). The unit production and lesson produce speaking steps noted a recogniser
// error only as a flag for SpeakCheck, so a learner whose microphone was blocked pressed
// "Speak", saw the button turn straight back, and was told nothing. Both screens take
// typed Croatian identically, so every message ends by naming that path.

/** The learner-facing sentence for a SpeechRecognition `error` code. */
export function recognizerErrorMessage(code: unknown): string {
  if (code === 'not-allowed' || code === 'permission-denied' || code === 'service-not-allowed') {
    return 'No microphone access — type your Croatian below instead. It counts the same.';
  }
  if (code === 'no-speech') {
    return 'I did not hear anything. Try again a little closer to the mic, or type it below.';
  }
  if (code === 'audio-capture') {
    return 'No microphone was found — type your Croatian below instead. It counts the same.';
  }
  if (code === 'network') {
    return 'The speech service could not be reached — type your Croatian below instead.';
  }
  return 'The microphone stopped. Try again, or type your Croatian below instead.';
}
