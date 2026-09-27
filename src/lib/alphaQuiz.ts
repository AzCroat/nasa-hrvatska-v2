// src/lib/alphaQuiz.ts
//
// The alphabet quiz — "which letter makes this sound?" — built from ALPHA rows
// `[letter, sound, word, gloss, name]`.
//
// A QUESTION MUST NOT CONTAIN ITS OWN ANSWER (owner report, 2026-09-26), and this one
// did on every item: each ALPHA row's example word STARTS WITH the letter being asked
// for, and the quiz printed that word in full — "The word **čokolada** (chocolate)
// starts with the sound: cheh (hard)", options Č / Ć / C / Š. The answer was the first
// character of the question. This is the drill the day-one alphabet lesson hands a
// learner straight after, so it taught them nothing but how to copy.
//
// The word is now shown with its opening letter BLANKED (`__okolada`), beside the sound
// and the English meaning. What is left to do is the skill itself: hear or read the
// sound and pick the letter that spells it — including the Č/Ć and Dž/Đ contrasts the
// lesson calls the hardest pairs. The full word is still what the 🔊 button SAYS: the
// audio is how the sound reaches the learner, and speech is not the printed answer.

export interface AlphaQuizQuestion {
  /** The example word with its opening letter blanked — what the learner READS. */
  masked: string;
  /** The full word — what the 🔊 button speaks, and what the feedback names. */
  word: string;
  promptEn: string;
  ipa: string;
  correct: string;
  opts: string[];
}

/**
 * The word with the letter it opens with replaced by one `_` per character, so a
 * digraph (Dž, Lj, Nj) blanks two: `džep` → `__ep`. The blank's width tells a learner
 * whether the letter is one character or two, and that is accepted — the options
 * already show D beside Dž, so the width narrows nothing they cannot see anyway.
 * A word that does NOT open with its letter is returned unchanged; the test pins
 * that every ALPHA row does, so that fallback cannot quietly re-open the leak.
 */
export function maskOpening(word: string, letterLabel: string): string {
  const lower = (letterLabel.split(' ')[1] ?? letterLabel).toLowerCase();
  if (!word.toLowerCase().startsWith(lower)) return word;
  return '_'.repeat(lower.length) + word.slice(lower.length);
}

/** Ten questions: a sound and a blanked word → pick the letter. */
export function buildAlphaQuiz(
  alpha: readonly string[][],
  shuffle: <T>(a: T[]) => T[],
): AlphaQuizQuestion[] {
  const pool = shuffle([...alpha]).slice(0, 10);
  return pool.map((letter) => {
    const distractors = shuffle(alpha.filter((l) => l[0] !== letter[0])).slice(0, 3);
    const word = letter[2] ?? '';
    return {
      masked: maskOpening(word, letter[0] ?? ''),
      word,
      promptEn: letter[3] ?? '',
      ipa: letter[1] ?? '',
      correct: letter[0] ?? '',
      opts: shuffle([letter[0] ?? '', ...distractors.map((d) => d[0] ?? '')]),
    };
  });
}
