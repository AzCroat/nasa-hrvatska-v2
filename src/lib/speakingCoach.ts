// src/lib/speakingCoach.ts
//
// Client side of /api/speaking-coach (production-teaching directive,
// 2026-08-18). One call per completed open-ended speaking attempt: sends the
// transcript the recognizer already produced (no STT cost), gets back rubric
// scores + a taught error list + one concrete piece of advice, and feeds the
// SAME loops writing feedback feeds:
//
//   - mastery ledger: recordMasteryEvent(skill 'speaking', weight 2) — before
//     this, NO daily practice wrote a speaking cell, so weakestProductionKind
//     biased toward 'speak' forever without ever converging (2026-08-18 audit).
//   - adaptive scheduler: errorTypes → applyWritingErrorsToAdaptive (the
//     taxonomy is shared; a spoken case error reschedules case practice
//     exactly like a written one).
//   - nh_speaking_mistakes: mirror of nh_writing_mistakes for diagnosis.
//
// FAIL-SOFT BY CONTRACT: every failure path returns null. The coach is
// enrichment — a quota limit, budget pause, offline state or server error must
// never block or degrade the speaking practice itself.

import { _aiPost } from './aiPost';
import { recordMasteryEvent } from './masteryLedger';
import { applyWritingErrorsToAdaptive } from './adaptiveFeedback';
import type { CefrLevel } from './cefr.js';

export interface CoachError {
  original: string;
  corrected: string;
  note: string;
  errorType: string;
}

export interface CoachResult {
  scores: { range: number; accuracy: number; fluency: number; task: number };
  overall: number;
  errors: CoachError[];
  advice: string;
  encouragement: string;
}

const MISTAKES_KEY = 'nh_speaking_mistakes';

/** Minimum words before a transcript is worth coaching (matches the
 *  open-ended participation threshold in SpeakingScreen). */
export const COACH_MIN_WORDS = 5;

export function transcriptWorthCoaching(transcript: string): boolean {
  return transcript.trim().split(/\s+/).filter(Boolean).length >= COACH_MIN_WORDS;
}

/**
 * Request coaching for one spoken answer and apply the feedback loops.
 * Returns the coach payload for display, or null on ANY failure (fail-soft).
 */
export async function requestSpeakingCoach(opts: {
  prompt: string;
  transcript: string;
  level: CefrLevel | string;
}): Promise<CoachResult | null> {
  const { prompt, transcript, level } = opts;
  if (!transcriptWorthCoaching(transcript)) return null;
  try {
    const res = await _aiPost('/api/speaking-coach', {
      prompt,
      transcript: transcript.trim(),
      level,
    });
    if (!res.ok) return null; // limits/budget/auth — practice continues uncoached
    const data = (await res.json()) as CoachResult;
    if (!data || typeof data.overall !== 'number' || !data.scores) return null;

    // 1 — mastery ledger: rubric-graded free speech is strong evidence (the
    // same weight a graded writing submission carries).
    recordMasteryEvent({
      level: level as CefrLevel,
      skill: 'speaking',
      score: Math.max(0, Math.min(1, data.overall)),
      weight: 2,
    });

    // 2 — spoken errors reschedule the matching adaptive practice.
    const errors = Array.isArray(data.errors) ? data.errors : [];
    if (errors.length > 0) {
      applyWritingErrorsToAdaptive(errors.map((e) => e.errorType));
      // 3 — mistake log for diagnosis surfaces (mirror of nh_writing_mistakes).
      try {
        const wm = JSON.parse(localStorage.getItem(MISTAKES_KEY) || '[]');
        errors.forEach((e) => {
          wm.push({ wrong: e.original || '', correct: e.corrected || '', type: e.errorType });
        });
        localStorage.setItem(MISTAKES_KEY, JSON.stringify(wm.slice(-50)));
      } catch {
        /* storage unavailable — the ledger + adaptive still got the signal */
      }
    }
    return data;
  } catch {
    return null; // network/timeout — fail-soft
  }
}
