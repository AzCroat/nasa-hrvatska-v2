// src/lib/speaking/whisperClaudeScorer.ts
import { _nativePost } from '../nativePost.js';
import { blobToBase64 } from '../audio.js';
import { recordMasteryEvent } from '../masteryLedger.js';
import type { CefrLevel } from '../cefr.js';
import {
  computeSpeakingOverall,
  type SpeakingScorer,
  type SpeakingAssessment,
} from './SpeakingScorer.js';
import {
  failureFromResponse,
  failureFromError,
  failureFromStatus,
  insufficientFailure,
  reportAiFailure,
  type AiFailure,
} from '../aiFailure.js';

/**
 * Below this transcript-sufficiency value we cannot fairly score; treat as "retry".
 * `transcriptSufficiency` is a transcript-LENGTH heuristic (word-count bucket) from the
 * server, NOT an acoustic/STT confidence.
 */
const MIN_TRANSCRIPT_SUFFICIENCY = 0.4;

// WHY A NULL IS NAMED (owner directive, 2026-09-07). The SpeakingScorer
// contract returns null for "not scored" — right, because a failed evaluation
// must never become a failing score. But one null used to stand for a dead
// transport, a signed-out learner, a monthly budget pause, an STT outage, a
// rubric 502 AND "you said three words", and the exam screen read every one
// of them back as "We couldn't score that clearly" — learner fault, for what
// was usually a server or billing condition. The scorer now records WHY it
// returned null; the screen reads it and says the true cause.
let _lastFailure: AiFailure | null = null;

/** The reason the most recent assess()/assessText() returned null, or null
 *  after a scored result. */
export function getLastSpeakingScoreFailure(): AiFailure | null {
  return _lastFailure;
}

function fail(f: AiFailure): null {
  _lastFailure = f;
  reportAiFailure('assess-speaking', f);
  return null;
}

// Shared response handling for both the audio and typed-text scoring paths.
// `body` is the assess-speaking request payload (audio or text variant).
async function postAndParse(body: Record<string, unknown>): Promise<SpeakingAssessment | null> {
  _lastFailure = null;
  try {
    // Route through the shared native-safe POST helper: it resolves the absolute
    // base URL on Capacitor native (relative URLs break there) and attaches the
    // Firebase bearer. Returns null on total transport failure.
    const r = await _nativePost('/api/assess-speaking', body);
    if (!r) return fail(await failureFromResponse(null)); // nothing answered
    if (!r.ok) return fail(await failureFromResponse(r));

    const data = (await r.json()) as {
      transcript?: string;
      scores?: Record<string, number>;
      // transcript-LENGTH heuristic (word-count bucket), NOT acoustic/STT confidence.
      transcriptSufficiency?: number;
    };
    const s = data.scores;
    if (
      !s ||
      typeof s.range !== 'number' ||
      typeof s.accuracy !== 'number' ||
      typeof s.fluency !== 'number' ||
      typeof s.task !== 'number'
    ) {
      return fail(failureFromStatus(200, 'rubric_failed'));
    }
    const transcriptSufficiency =
      typeof data.transcriptSufficiency === 'number' ? data.transcriptSufficiency : 0;
    if (transcriptSufficiency < MIN_TRANSCRIPT_SUFFICIENCY) return fail(insufficientFailure());

    const scores = { range: s.range, accuracy: s.accuracy, fluency: s.fluency, task: s.task };
    const overall = computeSpeakingOverall(scores);
    // Phase 2 mastery ledger: every successful speaking assessment — practice
    // or exam task — is spoken-production evidence at the assessed level.
    // (Best-effort; a ledger failure must never turn a scored assessment into
    // a null "not scored" result.)
    try {
      // recordMasteryEvent validates the level against CEFR_ORDER, so an
      // unexpected payload value is a silent no-op, not a crash.
      recordMasteryEvent({
        level: body.level as CefrLevel,
        skill: 'speaking',
        score: overall,
        weight: 1,
      });
    } catch {
      /* ledger unavailable — the assessment itself still succeeds */
    }
    return {
      transcript: data.transcript ?? '',
      scores,
      overall,
      transcriptSufficiency,
    };
  } catch (e) {
    return fail(failureFromError(e)); // network/parse failure → not scored
  }
}

export const whisperClaudeScorer: SpeakingScorer = {
  async assess(audio, ctx): Promise<SpeakingAssessment | null> {
    const audioBase64 = await blobToBase64(audio).catch(() => null);
    if (!audioBase64) return fail(failureFromStatus(400, 'bad_audio'));
    return postAndParse({
      level: ctx.level,
      prompt: ctx.prompt,
      audioBase64,
      mime: audio.type || 'audio/webm',
    });
  },

  // Typed-production fallback (mic-denied learners): score the written answer.
  async assessText(text, ctx): Promise<SpeakingAssessment | null> {
    if (!text || !text.trim()) return null;
    return postAndParse({ level: ctx.level, prompt: ctx.prompt, text: text.trim() });
  },
};
