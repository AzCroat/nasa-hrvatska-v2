// src/data/drills/a1/masculinePluralOviDrill.ts
//
// A1 THE -OVI / -EVI PLURAL — the drill for the `masculine-plural-ovi` lesson (A1
// position 19).
//
// Three modes, eight items each:
//   ovi      — one-syllable masculine nouns after a hard consonant: grad → gradovi
//   evi      — after a soft consonant (č ć đ j lj nj š ž): ključ → ključevi
//   iznimke  — what does NOT grow: long nouns (studenti) and the short exceptions
//              (dani, gosti, zubi, konji, prsti)
//
// Nominative plural only: no other plural case is taught yet. Every distractor is a
// real ending put in the wrong place — the bare -i on a short noun, -ovi after a soft
// consonant, growth on a long noun — never Serbian, never gibberish.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MASCULINE_PLURAL_OVI_MODE_LABELS: Record<string, string> = {
  ovi: '🏙️ -ovi',
  evi: '🔑 -evi',
  iznimke: '⚡ Bez -ov-',
};

export const MASCULINE_PLURAL_OVI_DRILL_DATA: ModeDrillItem[] = [
  // ── ovi ───────────────────────────────────────────────────────────────────
  {
    mode: 'ovi',
    q: 'Plural of "stol":',
    en: 'Plural of table.',
    opts: ['stolovi', 'stoli', 'stolevi', 'stola'],
    answer: 'stolovi',
    tip: 'One syllable, hard l: -ovi.',
  },
  {
    mode: 'ovi',
    q: 'Plural of "brod":',
    en: 'Plural of ship.',
    opts: ['brodi', 'brodevi', 'brodovi', 'broda'],
    answer: 'brodovi',
    tip: 'One syllable, hard d: -ovi.',
  },
  {
    mode: 'ovi',
    q: 'Plural of "most":',
    en: 'Plural of bridge.',
    opts: ['mosti', 'mostovi', 'mostevi', 'moste'],
    answer: 'mostovi',
    tip: 'One syllable, hard t: -ovi.',
  },
  {
    mode: 'ovi',
    q: 'Ovo su ____.',
    en: 'These are sons.',
    opts: ['sini', 'sinevi', 'sina', 'sinovi'],
    answer: 'sinovi',
    tip: 'sin is short with a hard n: sinovi.',
  },
  {
    mode: 'ovi',
    q: 'Plural of "zid":',
    en: 'Plural of wall.',
    opts: ['zidovi', 'zidi', 'zidevi', 'zida'],
    answer: 'zidovi',
    tip: 'One syllable, hard d: -ovi.',
  },
  {
    mode: 'ovi',
    q: 'Jesu li to ____?',
    en: 'Are those trains?',
    opts: ['vlaki', 'vlakevi', 'vlakovi', 'vlaka'],
    answer: 'vlakovi',
    tip: 'vlak is short with a hard k: vlakovi.',
  },
  {
    mode: 'ovi',
    q: 'Plural of "vrt":',
    en: 'Plural of garden.',
    opts: ['vrti', 'vrtovi', 'vrtevi', 'vrta'],
    answer: 'vrtovi',
    tip: 'One syllable, hard t: -ovi.',
  },
  {
    mode: 'ovi',
    q: 'Which sentence is correct?',
    en: 'The cities are here.',
    opts: ['Gradi su ovdje.', 'Gradovi je ovdje.', 'Gradovi su ovdje.', 'Gradevi su ovdje.'],
    answer: 'Gradovi su ovdje.',
    tip: 'grad → gradovi, and a plural takes su.',
  },

  // ── evi ───────────────────────────────────────────────────────────────────
  {
    mode: 'evi',
    q: 'Plural of "ključ":',
    en: 'Plural of key.',
    opts: ['ključovi', 'ključevi', 'ključi', 'ključa'],
    answer: 'ključevi',
    tip: 'č is soft: -evi.',
  },
  {
    mode: 'evi',
    q: 'Plural of "nož":',
    en: 'Plural of knife.',
    opts: ['noževi', 'nožovi', 'noži', 'noža'],
    answer: 'noževi',
    tip: 'ž is soft: -evi.',
  },
  {
    mode: 'evi',
    q: 'Plural of "muž":',
    en: 'Plural of husband.',
    opts: ['mužovi', 'muži', 'muževi', 'muža'],
    answer: 'muževi',
    tip: 'ž is soft: -evi.',
  },
  {
    mode: 'evi',
    q: 'Plural of "broj":',
    en: 'Plural of number.',
    opts: ['brojovi', 'broji', 'broja', 'brojevi'],
    answer: 'brojevi',
    tip: 'j is soft: -evi.',
  },
  {
    mode: 'evi',
    q: 'Plural of "kralj":',
    en: 'Plural of king.',
    opts: ['kraljevi', 'kraljovi', 'kralji', 'kralja'],
    answer: 'kraljevi',
    tip: 'lj is soft: -evi.',
  },
  {
    mode: 'evi',
    q: 'Plural of "čaj":',
    en: 'Plural of tea.',
    opts: ['čajovi', 'čajevi', 'čaji', 'čaja'],
    answer: 'čajevi',
    tip: 'j is soft: -evi.',
  },
  {
    mode: 'evi',
    q: 'Which noun takes -evi?',
    en: 'Which noun takes -evi?',
    opts: ['grad', 'stol', 'ključ', 'most'],
    answer: 'ključ',
    tip: 'Only ključ ends in a soft consonant.',
  },
  {
    mode: 'evi',
    q: 'Which noun takes -ovi?',
    en: 'Which noun takes -ovi?',
    opts: ['nož', 'brod', 'broj', 'muž'],
    answer: 'brod',
    tip: 'brod ends in a hard d; the others end in a soft consonant.',
  },

  // ── iznimke ───────────────────────────────────────────────────────────────
  {
    mode: 'iznimke',
    q: 'Plural of "student":',
    en: 'Plural of student.',
    opts: ['studentovi', 'studenti', 'studentevi', 'studente'],
    answer: 'studenti',
    tip: 'Two syllables: a plain -i, no growth.',
  },
  {
    mode: 'iznimke',
    q: 'Plural of "profesor":',
    en: 'Plural of teacher.',
    opts: ['profesorovi', 'profesorevi', 'profesori', 'profesora'],
    answer: 'profesori',
    tip: 'A long noun takes a plain -i.',
  },
  {
    mode: 'iznimke',
    q: 'Plural of "dan":',
    en: 'Plural of day.',
    opts: ['danovi', 'dani', 'danevi', 'dana'],
    answer: 'dani',
    tip: 'dan is short but does not grow: dani.',
  },
  {
    mode: 'iznimke',
    q: 'Plural of "gost":',
    en: 'Plural of guest.',
    opts: ['gostovi', 'gostevi', 'goste', 'gosti'],
    answer: 'gosti',
    tip: 'gost is one of the short nouns that do not grow.',
  },
  {
    mode: 'iznimke',
    q: 'Plural of "zub":',
    en: 'Plural of tooth.',
    opts: ['zubi', 'zubovi', 'zubevi', 'zube'],
    answer: 'zubi',
    tip: 'zub does not grow: zubi.',
  },
  {
    mode: 'iznimke',
    q: 'Plural of "konj":',
    en: 'Plural of horse.',
    opts: ['konjevi', 'konji', 'konjovi', 'konja'],
    answer: 'konji',
    tip: 'konj ends in a soft nj but still does not grow: konji.',
  },
  {
    mode: 'iznimke',
    q: 'Plural of "konobar":',
    en: 'Plural of waiter.',
    opts: ['konobarovi', 'konobarevi', 'konobare', 'konobari'],
    answer: 'konobari',
    tip: 'Three syllables: a plain -i.',
  },
  {
    mode: 'iznimke',
    q: 'Plural of "prst":',
    en: 'Plural of finger.',
    opts: ['prstovi', 'prsti', 'prstevi', 'prsta'],
    answer: 'prsti',
    tip: 'prst does not grow: prsti.',
  },
];
