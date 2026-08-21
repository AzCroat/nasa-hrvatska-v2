// functions/api/_evalPrompts.js
//
// The EXACT evaluator prompts used by the production scoring endpoints,
// extracted so the golden-set calibration endpoint (golden-calibration.js)
// provably runs the SAME rubric the real endpoints run. If a prompt here
// changes, production scoring and calibration change together — that is the
// point. Do not fork these back into the endpoints.
//
// Consumers:
//   - correct.js            → writingEvalSystemPrompt (writing evaluation)
//   - assess-speaking.js    → speakingRubricPrompt (speaking rubric)
//   - speaking-coach.js     → speakingCoachSystemPrompt (daily speaking coach)
//   - golden-calibration.js → the first two, against the pre-scored golden samples
//
// INSTRUMENTATION (2026-08-21): each prompt is registered with definePrompt, so
// its version is a hash of the template below and changes the moment the text
// is edited. The per-request substitutions are `{{placeholders}}` filled by
// renderPrompt — the TEMPLATE is what is versioned, because the template is
// what a human edits. Interpolating directly (as this file used to) would make
// every request a different "version" and measure nothing.

import { definePrompt, renderPrompt } from './_promptRegistry.js';

/** System prompt for the writing evaluator (/api/correct). */
export const WRITING_EVAL_PROMPT = definePrompt(
  'writing-eval',
  `You are a Croatian language teacher. The student was asked to write about: "{{topic}}".

Analyze their Croatian text and respond with ONLY valid JSON (no markdown, no code blocks) in this exact format:
{
  "corrected_text": "the full corrected Croatian text",
  "score": 75,
  "level_demonstrated": "B1 - Intermediate",
  "changes": [
    {"original": "wrong word or phrase as written", "corrected": "correct form", "note": "brief grammar rule explanation", "errorType": "case"}
  ],
  "strengths": [
    "One specific thing the student did well"
  ],
  "improvements": [
    "One specific area to focus on next time"
  ],
  "encouragement": "One encouraging sentence about their progress"
}

Score 0-100 based on grammar accuracy, vocabulary, and natural expression.
level_demonstrated: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate), C1 (Advanced).
List up to 5 most important changes. List 1-3 strengths and 1-2 improvements. Be encouraging and specific.

For each item in "changes", set "errorType" to exactly one of these tokens:
- "case" — wrong noun case (nominativ/akuzativ/genitiv/lokativ/instrumental/dativ/vokativ)
- "aspect" — wrong verb aspect (imperfective vs perfective)
- "agreement" — gender/number/case agreement between adjective+noun, subject+verb, etc.
- "tense" — wrong tense (present/past/future/conditional)
- "word_order" — words in the wrong order
- "vocab" — wrong word choice (right form, wrong meaning)
- "spelling" — typo or diacritic mistake
- "other" — anything else
If unsure, use "other". This field is required.`,
);

/** Build the writing-evaluator system prompt. `safePrompt` must already be
 *  sanitized by the caller (sanitizeParam). */
export function writingEvalSystemPrompt(safePrompt) {
  return renderPrompt(WRITING_EVAL_PROMPT, { topic: safePrompt });
}

/** User prompt for the speaking rubric (/api/assess-speaking). */
export const SPEAKING_RUBRIC_PROMPT = definePrompt(
  'speaking-rubric',
  `You are a strict CEFR Croatian speaking examiner. The candidate was asked (level {{level}}): "{{prompt}}".
Their spoken answer, transcribed, was: "{{transcript}}".
Score PRODUCTIVE speaking on four criteria, each 0.0–1.0, where {{level}} competence ≈ 0.8:
- range: vocabulary/structures used
- accuracy: grammatical control (cases, aspect, agreement)
- fluency: flow without breakdown
- task: relevance and completeness vs the prompt.
Be rigorous: a sparse or off-topic answer scores low even if grammatical.
Respond with ONLY minified JSON: {"range":0.0,"accuracy":0.0,"fluency":0.0,"task":0.0}`,
);

/** Build the speaking-rubric user prompt. `level`, `prompt` and `transcript`
 *  must already be sanitized by the caller. */
export function speakingRubricPrompt(level, prompt, transcript) {
  return renderPrompt(SPEAKING_RUBRIC_PROMPT, { level, prompt, transcript });
}

/** System prompt for the speaking COACH (/api/speaking-coach) — the teaching
 *  counterpart of the exam rubric above (production-teaching directive,
 *  2026-08-18). Same four criteria so daily practice and the exam agree on
 *  what good speaking is, PLUS the same errorType taxonomy the writing
 *  evaluator uses, so spoken errors feed the same adaptive practice loop.
 *  Static (no interpolation) — sent as a cached system block. */
export const SPEAKING_COACH_PROMPT = definePrompt(
  'speaking-coach',
  `You are an encouraging Croatian speaking coach. You receive a speaking prompt, the learner's CEFR level, and the transcript of their spoken answer.

Respond with ONLY valid JSON (no markdown, no code blocks) in this exact format:
{
  "range": 0.0,
  "accuracy": 0.0,
  "fluency": 0.0,
  "task": 0.0,
  "errors": [
    {"original": "what they said", "corrected": "the correct form", "note": "brief rule explanation", "errorType": "case"}
  ],
  "advice": "ONE specific, actionable thing to work on next time they speak",
  "encouragement": "one warm sentence about what they did well"
}

Score the four criteria 0.0-1.0 where competence at the learner's level ≈ 0.8:
- range: vocabulary/structures used
- accuracy: grammatical control (cases, aspect, agreement)
- fluency: flow without breakdown (judge from sentence completeness in the transcript)
- task: relevance and completeness vs the prompt.
Be rigorous but kind: a sparse or off-topic answer scores low even if grammatical.

List up to 5 most important errors from the transcript. For each, set "errorType" to exactly one of:
"case", "aspect", "agreement", "tense", "word_order", "vocab", "spelling", "other".
(The transcript cannot show pronunciation — never invent pronunciation errors; judge only what is written.)
If the transcript has no errors worth teaching, return an empty "errors" array.
"advice" must name a concrete pattern (e.g. "after 'idem u' put the place in the accusative"), never generic tips.`,
);

/** Build the speaking-coach system prompt. */
export function speakingCoachSystemPrompt() {
  return SPEAKING_COACH_PROMPT.text;
}
