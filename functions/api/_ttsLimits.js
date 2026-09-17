/**
 * _ttsLimits — the one definition of how much text /api/tts will synthesise.
 *
 * It lives in its own module because it has TWO consumers that must agree and
 * neither should import the other: `/api/tts` enforces it, and
 * `/api/listening` has to generate Croatian that fits under it. Importing
 * tts.js from listening.js for one number would pull the whole voice-chain
 * module graph — auth, quota, budget, four backends — into an endpoint that
 * synthesises nothing.
 *
 * WHY THE SECOND CONSUMER EXISTS. `AIListeningScreen` posts the entire
 * generated passage to /api/tts in ONE request, so a passage over this cap is
 * a 400 and the learner gets "This recording couldn't be generated." with a
 * transcript and no audio — on one of the app's two AUDIO-FIRST screens,
 * where the recording is the whole question. Before this module the listening
 * prompt stated no length at all and the only ceiling was `max_tokens`, which
 * is counted in tokens, covers the whole JSON envelope, and at 2600 is worth
 * several thousand characters of Croatian.
 *
 * Keep it a FIXED cap. An unbounded one turns a single request into an
 * unbounded synthesis bill the moment a per-character backend is configured.
 */
export const MAX_TTS_CHARS = 3000;

/**
 * What a GENERATOR may produce, as opposed to what the endpoint will accept.
 *
 * Derived from the cap rather than written beside it, so the two cannot drift
 * — the cron-secret lesson applied to a number. The headroom absorbs a model
 * overshooting a stated budget, which it will.
 */
export const TTS_TEXT_BUDGET = Math.floor(MAX_TTS_CHARS * 0.6);

/**
 * The most text Google Translate's unofficial endpoint can speak.
 *
 * It is not a policy choice — it is what that service accepts. The backend
 * used to `slice()` to this and return the audio anyway, and the chain credits
 * any playable buffer as success (`isPlayableAudio` checks byte LENGTH), so a
 * 1,800-character passage came back as a recording of its first 200 characters
 * presented as complete. On AI Listening, where the recording IS the question,
 * that is a learner quizzed on content they were never played.
 *
 * Refusing is the honest behaviour: the chain then moves to a backend that can
 * speak the whole thing. The cap only ever mattered once /api/tts started
 * accepting long text (MAX_TTS_CHARS 500 -> 3000, 2026-09-10); until then no
 * caller could exceed it, which is why the truncation sat here harmlessly.
 */
export const GTRANSLATE_MAX_CHARS = 200;
