// src/lib/spokenCheck.ts
//
// WHAT THE LEARNER ACTUALLY SAID, WORD BY WORD (owner report, 2026-09-29: "the speaking
// exercises are not properly recording to provide the user critical feedback that is
// accurate in what they said").
//
// Guided Speaking's REHEARSE and BUILD stages graded the browser recogniser's TRANSCRIPT.
// That recogniser is a language model: it writes the most likely Croatian sentence, and
// the most likely sentence is usually the grammatical one. A learner who says
// "vidim prijatelj" can read back "vidim prijatelja", and the grader then praises the
// case ending they did not produce — exactly the point the BUILD stage exists to check.
//
// Both stages KNOW the target, so the audio itself can be checked against it: Azure
// pronunciation assessment in scripted mode with miscue detection (`/api/pronunciation-
// assess`) scores every reference word acoustically and marks it `Omission`,
// `Mispronunciation` or — for a word not in the reference — `Insertion`. This module turns
// that into two things: a per-word readout the learner sees, and a verification that a
// passing verdict rests on a word that was really heard.
//
// It is pure and synchronous; the capture and the request live in `AssessedMic`.

import type { BuildSentence, BuildVerdict } from './sentenceBuild';
import { decline } from './croatianMorphology';
import { normaliseSpoken, phraseMatches } from './spokenMatch';

/** Azure's own threshold for a mispronounced word (HundredMark grading). */
export const UNCLEAR_BELOW = 60;

export type WordStatus = 'good' | 'unclear' | 'missing' | 'extra';

export interface CheckedWord {
  word: string;
  status: WordStatus;
  score: number;
}

export interface SpokenCheck {
  /** What Azure recognised — shown as "Heard", and graded. */
  recognized: string;
  words: CheckedWord[];
}

interface RawWordScore {
  word?: unknown;
  score?: unknown;
  error?: unknown;
}

/** Azure word scores → the readout. Unknown shapes are skipped, never guessed at. */
export function checkedWords(raw: unknown): CheckedWord[] {
  if (!Array.isArray(raw)) return [];
  const out: CheckedWord[] = [];
  for (const r of raw as RawWordScore[]) {
    if (!r || typeof r.word !== 'string' || !r.word.trim()) continue;
    const score = typeof r.score === 'number' && Number.isFinite(r.score) ? r.score : 0;
    const error = typeof r.error === 'string' ? r.error : 'None';
    const status: WordStatus =
      error === 'Omission'
        ? 'missing'
        : error === 'Insertion'
          ? 'extra'
          : error === 'Mispronunciation' || score < UNCLEAR_BELOW
            ? 'unclear'
            : 'good';
    out.push({ word: r.word, status, score });
  }
  return out;
}

/** Target words (longer than two letters) that were left out. */
export function missingWords(check: SpokenCheck | null): string[] {
  if (!check) return [];
  return check.words.filter((w) => w.status === 'missing' && w.word.length > 2).map((w) => w.word);
}

/**
 * The REHEARSE verdict. The transcript match is unchanged (partial credit stays: this
 * stage teaches); what the audio adds is that a word the learner LEFT OUT cannot be
 * papered over by a recogniser that filled it in.
 */
export function rehearseRight(heard: string, target: string, check: SpokenCheck | null): boolean {
  if (!phraseMatches(heard, target)) return false;
  return missingWords(check).length === 0;
}

/**
 * The BUILD verdict, verified against the audio. `gradeBuild` read the recognised text;
 * if it passed on the required form, that form must also have been HEARD — present in
 * the scored words and not unclear or missing. A form the scorer could not confirm is
 * sent back as `unclear` with the word named, never as a pass. Without a check (typed
 * input, or no assessment available) the verdict is returned unchanged.
 */
export function verifyBuild(
  v: BuildVerdict,
  check: SpokenCheck | null,
  item: BuildSentence,
): BuildVerdict {
  if (!v.ok || !check || !item.focus) return v;
  const f = item.focus;
  const forms = decline(f.lemma, f.gender)?.forms as Record<string, string> | undefined;
  const required = forms?.[`${f.requiredCase}${f.number ?? 'sg'}`];
  if (!required) return v;
  const want = normaliseSpoken(required);
  const scored = check.words.find((w) => normaliseSpoken(w.word) === want);
  if (!scored || scored.status === 'good' || scored.status === 'extra') return v;
  return {
    ok: false,
    kind: 'unclear',
    said: scored.word,
    required,
    message:
      `The recogniser wrote “${required}”, but the recording does not bear it out — ` +
      `that word ${scored.status === 'missing' ? 'was not heard' : 'was not clear'}, and its ` +
      `ending is the point of this sentence. Say it once more, clearly.`,
  };
}
