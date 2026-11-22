// src/lib/playbackElement.ts
//
// The element to play a FETCHED recording through. `unlockAudio()` unlocks one persistent
// element on the learner's tap; a fresh element made after an async fetch does not inherit
// that activation on iOS Safari and several Android WebViews, so `play()` is refused with
// NotAllowedError (Sentry `tts_failed:playback`, code=NotAllowedError, /maja). Callers that
// fetch first and play later take the element from here instead of constructing their own.
import { getUnlockedAudioElement } from './audio.js';

/** Paused, rewound, handlers cleared. A fresh element only if unlock never ran (SSR/tests). */
export function acquirePlaybackElement(): HTMLAudioElement {
  const a: HTMLAudioElement = getUnlockedAudioElement() ?? new Audio();
  try {
    a.pause();
    a.currentTime = 0;
  } catch {
    /* nothing loaded yet */
  }
  a.onended = null;
  a.onerror = null;
  a.volume = 1.0;
  return a;
}
