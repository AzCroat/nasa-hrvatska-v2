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
  /**
   * The same take transcribed with NO reference sentence, when the caller asked for it.
   * The scripted `recognized` hears to match the reference and cannot judge a case
   * ending; this can. `null` when it was asked for and could not be had.
   */
  unbiased?: string | null;
}

interface RawWordScore {
  word?: unknown;
  score?: unknown;
  error?: unknown;
  phonemes?: unknown;
}

/** Voiced obstruents a Croatian speaker commonly devoices at the end of a word. */
const DEVOICABLE_FINAL = /(?:b|d|g|z|ž|đ|dž)$/i;

/**
 * FINAL DEVOICING IS NOT A MISTAKE (2026-09-29). Many speakers say `Bog` as [bok] and
 * `grad` as [grat]; Azure scores the reference phoneme /g/ or /d/ and can mark the word
 * unclear for it. A word whose ONLY weak sound is its final voiced obstruent — every
 * earlier phoneme clear — is heard, not unclear. This can never excuse a case ending:
 * Croatian endings are vowels or end in a sonorant (-u, -a, -om, -ima, -ama), never a
 * voiced obstruent, so the rule does not touch what BUILD checks.
 */
export function onlyFinalDevoiced(word: string, phonemes: unknown): boolean {
  if (!DEVOICABLE_FINAL.test(word.trim()) || !Array.isArray(phonemes) || phonemes.length < 2)
    return false;
  const scores = (phonemes as { score?: unknown }[]).map((p) =>
    typeof p?.score === 'number' && Number.isFinite(p.score) ? p.score : 0,
  );
  return scores.slice(0, -1).every((x) => x >= UNCLEAR_BELOW);
}

/** Azure word scores → the readout. Unknown shapes are skipped, never guessed at. */
export function checkedWords(raw: unknown): CheckedWord[] {
  if (!Array.isArray(raw)) return [];
  const out: CheckedWord[] = [];
  for (const r of raw as RawWordScore[]) {
    if (!r || typeof r.word !== 'string' || !r.word.trim()) continue;
    // An ABSENT score is not a low one: the endpoint sends null when Azure did not
    // score the word (2026-09-29), and "unclear" must never be claimed on no
    // measurement. Such a word is judged by Azure's miscue verdict alone.
    const measured = typeof r.score === 'number' && Number.isFinite(r.score);
    const score = measured ? (r.score as number) : 0;
    const error = typeof r.error === 'string' ? r.error : 'None';
    const status: WordStatus =
      error === 'Omission'
        ? 'missing'
        : error === 'Insertion'
          ? 'extra'
          : (error === 'Mispronunciation' || (measured && score < UNCLEAR_BELOW)) &&
              !onlyFinalDevoiced(r.word, r.phonemes)
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
 * Words of the learner's own transcript the recording did not bear out (SPEAK). The
 * recogniser may have written a likelier, correct form that was not said; the coach is
 * told not to credit these, and the learner sees them marked before submitting.
 */
export function unconfirmedWords(check: SpokenCheck | null): string[] {
  if (!check) return [];
  return [
    ...new Set(
      check.words
        .filter((w) => (w.status === 'unclear' || w.status === 'missing') && w.word.length > 1)
        .map((w) => w.word),
    ),
  ].slice(0, 12);
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
