// src/data/drills/a1/alphabetDrill.ts
//
// A1 THE ALPHABET — the drill for the `alphabet` lesson.
//
// Follows Hrvatski za početnike 1, page 7 ("Upoznajmo hrvatsku abecedu", the picture
// alphabet: gitara, šešir, džep, ljubica, mačka, zastava…) and the phonetic appendix on
// page 140. No sentences: the learner has no grammar yet, only letters and sounds.
//
// Three modes:
//   slova   — the 30 letters, their order, and the three two-part letters
//   glasovi — what each letter sounds like
//   pisanje — spelling a word with the right hooks

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ALPHABET_MODE_LABELS: Record<string, string> = {
  slova: '🔤 Slova',
  glasovi: '🔊 Glasovi',
  pisanje: '✏️ Pisanje',
};

export const ALPHABET_DRILL_DATA: ModeDrillItem[] = [
  // ── slova ─────────────────────────────────────────────────────────────────
  {
    mode: 'slova',
    q: 'How many letters does the Croatian alphabet have?',
    opts: ['30', '26', '28', '32'],
    answer: '30',
    tip: 'Croatian has 30 letters. 26 is the English count; Croatian drops q, w, x and y and adds č, ć, dž, đ, lj, nj, š and ž.',
  },
  {
    mode: 'slova',
    q: 'Which of these is NOT a letter of the Croatian alphabet?',
    opts: ['W', 'Ž', 'Đ', 'Lj'],
    answer: 'W',
    tip: 'Croatian has no q, w, x or y. Ž, Đ and Lj are all Croatian letters, and Lj counts as one letter.',
  },
  {
    mode: 'slova',
    q: 'Which of these counts as ONE letter in Croatian?',
    opts: ['nj', 'st', 'tr', 'ks'],
    answer: 'nj',
    tip: 'nj, lj and dž are single letters written with two signs. st, tr and ks are just two separate letters side by side.',
  },
  {
    mode: 'slova',
    q: 'Which letter comes right after C in the Croatian alphabet?',
    opts: ['Č', 'Ć', 'D', 'Š'],
    answer: 'Č',
    tip: 'The order is C, Č, Ć, D. Each hooked letter follows its plain partner, and the hard Č comes before the soft Ć. Š comes much later, after S.',
  },
  {
    mode: 'slova',
    q: 'Which letter comes right after D in the Croatian alphabet?',
    opts: ['Dž', 'Đ', 'E', 'Ć'],
    answer: 'Dž',
    tip: 'The order is D, Dž, Đ, E. Dž is a letter of its own and sits between D and Đ. Ć comes before D, not after it.',
  },
  {
    mode: 'slova',
    q: 'Which letter comes right after L in the Croatian alphabet?',
    opts: ['Lj', 'M', 'Nj', 'K'],
    answer: 'Lj',
    tip: 'The order is K, L, Lj, M, N, Nj. Lj is its own letter and follows L; M comes only after it.',
  },
  {
    mode: 'slova',
    q: 'Which letter comes right after S in the Croatian alphabet?',
    opts: ['Š', 'T', 'Z', 'Ž'],
    answer: 'Š',
    tip: 'The order is S, Š, T. A hooked letter always follows its plain partner, so T has to wait. Z and Ž close the alphabet.',
  },
  {
    mode: 'slova',
    q: 'Counting the Croatian way, how many letters are in the word "ljubica"?',
    en: 'ljubica = a violet',
    opts: ['6', '7', '5', '8'],
    answer: '6',
    tip: 'lj-u-b-i-c-a: six letters, because lj is one letter. Counting 7 treats l and j as two letters.',
  },
  {
    mode: 'slova',
    q: 'Counting the Croatian way, how many letters are in the word "džep"?',
    en: 'džep = a pocket',
    opts: ['3', '4', '2', '5'],
    answer: '3',
    tip: 'dž-e-p: three letters, because dž is one letter. Counting 4 splits dž into d and ž.',
  },

  // ── glasovi ───────────────────────────────────────────────────────────────
  {
    mode: 'glasovi',
    q: 'The letter c in "ulica" sounds like…',
    en: 'ulica = a street',
    opts: ['ts in "cats"', 'k in "cat"', 's in "sun"', 'ch in "church"'],
    answer: 'ts in "cats"',
    tip: 'Croatian c is always "ts". It is never "k" or "s" as in English, and the "ch" sound needs a hook: č.',
  },
  {
    mode: 'glasovi',
    q: 'The letter j in "jaje" sounds like…',
    en: 'jaje = an egg',
    opts: ['y in "yes"', 'j in "jam"', 's in "treasure"', 'h in "hat"'],
    answer: 'y in "yes"',
    tip: 'Croatian j is always "y": jaje sounds like "ya-ye". The English "j" of "jam" is written dž, and the "treasure" sound is ž.',
  },
  {
    mode: 'glasovi',
    q: 'The letter š in "šešir" sounds like…',
    en: 'šešir = a hat',
    opts: ['sh in "ship"', 's in "sun"', 'ch in "church"', 's in "treasure"'],
    answer: 'sh in "ship"',
    tip: 'š is "sh". Without the hook, s is the plain "s" of "sun"; "ch" is č, and the "treasure" sound is ž.',
  },
  {
    mode: 'glasovi',
    q: 'The letter ž in "život" sounds like…',
    en: 'život = life',
    opts: ['s in "treasure"', 'z in "zoo"', 'sh in "ship"', 'j in "jam"'],
    answer: 's in "treasure"',
    tip: 'ž is the buzzing sound in "treasure". Plain z is the "z" of "zoo", š is "sh", and the "j" of "jam" is dž.',
  },
  {
    mode: 'glasovi',
    q: 'The letter dž in "džep" sounds like…',
    en: 'džep = a pocket',
    opts: ['j in "jam"', 'd and then z, two sounds', 'y in "yes"', 'sh in "ship"'],
    answer: 'j in "jam"',
    tip: 'dž is one sound, the "j" of "jam" or "judge". It is not d followed by z, and the "y" sound is the letter j.',
  },
  {
    mode: 'glasovi',
    q: 'The letter lj in "ljubica" sounds like…',
    en: 'ljubica = a violet',
    opts: ['lli in "million", one sound', 'l and then j as in "jam"', 'y in "yes"', 'a plain l'],
    answer: 'lli in "million", one sound',
    tip: 'lj is one soft sound, as in "million". It is not l plus an English j, not just "y", and not a plain l.',
  },
  {
    mode: 'glasovi',
    q: 'The letter nj in "knjiga" sounds like…',
    en: 'knjiga = a book',
    opts: ['ny in "canyon", one sound', 'n and then j as in "jam"', 'ng in "sing"', 'a plain n'],
    answer: 'ny in "canyon", one sound',
    tip: 'nj is one soft sound, as in "canyon". It is not n plus an English j, not "ng", and not a plain n.',
  },
  {
    mode: 'glasovi',
    q: 'Which word begins with the hard "ch" of "church"?',
    opts: ['čaj', 'ćevapi', 'cipela', 'šešir'],
    answer: 'čaj',
    tip: 'č is the hard "ch", so čaj (tea). ć in ćevapi is the softer one, c in cipela is "ts", and š in šešir is "sh".',
  },
  {
    mode: 'glasovi',
    q: 'Which word has the SOFT "ch", made with the tongue low, close to "ty"?',
    opts: ['kuća', 'mačka', 'čaj', 'džep'],
    answer: 'kuća',
    tip: 'The soft one is ć, as in kuća (house). mačka and čaj have the hard č, and dž in džep is the "j" of "jam".',
  },
  {
    mode: 'glasovi',
    q: 'The word "prst" has no a, e, i, o or u. Which letter carries the syllable?',
    en: 'prst = a finger',
    opts: ['r', 's', 'p', 't'],
    answer: 'r',
    tip: 'A rolled r can do the job of a vowel: p-r-st. The letters p, s and t cannot carry a syllable.',
  },
  {
    mode: 'glasovi',
    q: 'How many silent letters are there in "tramvaj"?',
    en: 'tramvaj = a streetcar',
    opts: ['None: every letter is said', 'One: the j', 'One: the v', 'Two: the v and the j'],
    answer: 'None: every letter is said',
    tip: 'Croatian has no silent letters. Every letter is said, always the same way: the v is "v" and the final j is "y".',
  },

  // ── pisanje ───────────────────────────────────────────────────────────────
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "a hat"?',
    opts: ['šešir', 'sesir', 'šesir', 'sešir'],
    answer: 'šešir',
    tip: 'Both sounds are "sh", so both letters need the hook: šešir. Leaving off one or both hooks writes "s" where "sh" is said.',
  },
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "a pocket"?',
    opts: ['džep', 'dzep', 'đep', 'žep'],
    answer: 'džep',
    tip: 'The hard "j" of "jam" is dž: džep. dz has lost its hook, đ is the softer sound, and ž alone is the "treasure" sound.',
  },
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "tea"?',
    opts: ['čaj', 'caj', 'ćaj', 'šaj'],
    answer: 'čaj',
    tip: 'Tea starts with the hard "ch": čaj. caj would be said "tsay", ć is the soft sound, and š is "sh".',
  },
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "a house"?',
    opts: ['kuća', 'kuča', 'kuca', 'kuša'],
    answer: 'kuća',
    tip: 'House has the soft ć: kuća. kuča uses the hard č, kuca has no hook and is said "kutsa", and š is "sh".',
  },
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "a cat"?',
    opts: ['mačka', 'maćka', 'macka', 'maška'],
    answer: 'mačka',
    tip: 'Cat has the hard č: mačka. ć is the soft sound, c without a hook is "ts", and š is "sh".',
  },
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "a flag"?',
    opts: ['zastava', 'žastava', 'zaštava', 'zastawa'],
    answer: 'zastava',
    tip: 'This word has plain z and plain s, so no hooks: zastava. Do not add hooks that are not said, and Croatian has no w.',
  },
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "a street"?',
    opts: ['ulica', 'ulitsa', 'ulika', 'uliča'],
    answer: 'ulica',
    tip: 'The "ts" sound is written with the single letter c: ulica. It is never spelled ts, c is never "k", and č would be "ch".',
  },
  {
    mode: 'pisanje',
    q: 'Which spelling is correct for "an egg"?',
    opts: ['jaje', 'yaye', 'jaye', 'đaje'],
    answer: 'jaje',
    tip: 'The "y" sound is always written j: jaje. Croatian has no letter y, and đ is a different, "j"-like sound.',
  },
];
