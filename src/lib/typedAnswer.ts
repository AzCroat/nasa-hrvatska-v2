// src/lib/typedAnswer.ts
//
// JUDGING A TYPED ANSWER (academic recommendation 2, 2026-09-29).
//
// Recognition is not production: picking `žene` from four options is not the same as
// writing it. Guided practice now carries TYPED items — the learner writes the form —
// and this is the one definition of whether what they wrote is the answer.
//
// Three verdicts, because Croatian spelling carries grammar:
//   right   — the answer, or one of the item's `accept` alternatives, ignoring case,
//             surrounding punctuation and repeated spaces;
//   accents — right except for the diacritics (zene for žene, cuca for kuća). A
//             missing hook is a different WORD in Croatian (kuca is "to knock"), so
//             it is not right; but it is not the same error as a wrong ending, and
//             the learner is told exactly that;
//   wrong   — anything else.
// No fuzzy distance: an edit-distance threshold would accept the wrong case ending,
// which is the one thing a grammar item exists to catch.

export type TypedVerdict = 'right' | 'accents' | 'wrong';

const FOLD: Record<string, string> = { č: 'c', ć: 'c', đ: 'd', š: 's', ž: 'z' };

/** Lower-cased, trimmed, inner spaces collapsed, surrounding punctuation dropped,
 *  typographic quotes and apostrophes unified. */
export function normalizeTyped(s: string): string {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[‘’‚‛]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^[\s.,!?;:"'()«»„“”-]+|[\s.,!?;:"'()«»„“”-]+$/g, '');
}

/** Diacritics removed (after normalising). `dj` and `đ` both fold to `d`/`dj`. */
export function foldAccents(s: string): string {
  return normalizeTyped(s)
    .replace(/[čćđšž]/g, (c) => FOLD[c] ?? c)
    .replace(/dj/g, 'd');
}

export function judgeTyped(
  input: string,
  answer: string,
  accept: readonly string[] = [],
): TypedVerdict {
  const said = normalizeTyped(input);
  if (!said) return 'wrong';
  const targets = [answer, ...accept].map(normalizeTyped).filter(Boolean);
  if (targets.includes(said)) return 'right';
  const folded = foldAccents(said);
  if (targets.some((t) => foldAccents(t) === folded)) return 'accents';
  return 'wrong';
}
