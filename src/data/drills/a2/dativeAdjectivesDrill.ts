// src/data/drills/a2/dativeAdjectivesDrill.ts
//
// A2 ADJECTIVES IN THE DATIVE — the drill for the `dative-adjectives` lesson.
//
// Three modes:
//   muski     — masculine and neuter singular: -om (starom), -em after a soft consonant
//               (lošem), mojem / svojem, tom, našem
//   zenski    — feminine singular: always -oj (toj ljubaznoj ženi, svojoj majci)
//   mnozina   — plural: -im (našim gostima, tim ljudima)
//
// mojem, mom and mome (likewise svojem / svom, tom / tome / tomu) are all standard, so only
// one of them is ever offered in a set. Distractors are another case of the same word
// (genitive, accusative, instrumental), the plural for the singular, or the reverse.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DATIVE_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  muski: '👨 Muški i srednji rod',
  zenski: '👩 Ženski rod',
  mnozina: '👥 Množina',
};

export const DATIVE_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── muski ──────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: 'Pišem pismo ____ prijatelju.',
    en: 'I am writing a letter to an old friend.',
    opts: ['starom', 'starog', 'stari', 'starim'],
    answer: 'starom',
    tip: 'Masculine dative singular: -om.',
  },
  {
    mode: 'muski',
    q: 'Reci to ____ čovjeku.',
    en: 'Say that to that man.',
    opts: ['tom', 'taj', 'toga', 'tim'],
    answer: 'tom',
    tip: 'taj → tom in the masculine dative.',
  },
  {
    mode: 'muski',
    q: 'Ivan pomaže ____ bratu.',
    en: 'Ivan helps his (own) brother.',
    opts: ['svojem', 'svoj', 'svojeg', 'svojim'],
    answer: 'svojem',
    tip: 'Masculine dative: svojem (svom is just as correct).',
  },
  {
    mode: 'muski',
    q: 'Dao sam ključ ____ susjedu.',
    en: 'I gave the key to our neighbour.',
    opts: ['našem', 'našeg', 'naš', 'našim'],
    answer: 'našem',
    tip: 'naš → našem in the masculine dative.',
  },
  {
    mode: 'muski',
    q: 'Ne vjerujem ____ mehaničaru.',
    en: 'I do not trust a bad mechanic.',
    opts: ['lošem', 'lošom', 'loši', 'lošeg'],
    answer: 'lošem',
    tip: 'š is soft, so the ending is -em.',
  },
  {
    mode: 'muski',
    q: 'Kupila sam igračku ____ djetetu.',
    en: 'I bought a toy for the little child.',
    opts: ['malom', 'malo', 'malog', 'malim'],
    answer: 'malom',
    tip: 'dijete is neuter; neuter dative is -om, like masculine.',
  },
  {
    mode: 'muski',
    q: 'Idem prema ____ trgu.',
    en: 'I am walking towards the main square.',
    opts: ['glavnom', 'glavni', 'glavnog', 'glavnim'],
    answer: 'glavnom',
    tip: 'prema takes the dative: glavnom.',
  },
  {
    mode: 'muski',
    q: 'Odgovorio sam ____ kolegi.',
    en: 'I answered the new colleague. (a man)',
    opts: ['novom', 'novoj', 'novog', 'novim'],
    answer: 'novom',
    tip: 'kolega ends in -a but is masculine: novom.',
  },

  // ── zenski ─────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Kupio sam cvijeće ____ majci.',
    en: 'I bought flowers for my (own) mother.',
    opts: ['svojoj', 'svoju', 'svoja', 'svojom'],
    answer: 'svojoj',
    tip: 'Feminine dative: -oj.',
  },
  {
    mode: 'zenski',
    q: 'Zahvalila sam ____ ženi.',
    en: 'I thanked that woman.',
    opts: ['toj', 'tu', 'ta', 'tom'],
    answer: 'toj',
    tip: 'taj → toj in the feminine dative.',
  },
  {
    mode: 'zenski',
    q: 'Pomažem ____ susjedi.',
    en: 'I help my old neighbour. (a woman)',
    opts: ['staroj', 'staru', 'starom', 'stara'],
    answer: 'staroj',
    tip: 'susjedi is feminine dative: staroj.',
  },
  {
    mode: 'zenski',
    q: 'Pišem ____ prijateljici.',
    en: 'I am writing to a new friend. (a woman)',
    opts: ['novoj', 'novu', 'nova', 'novom'],
    answer: 'novoj',
    tip: 'Feminine dative: -oj.',
  },
  {
    mode: 'zenski',
    q: 'Sutra idem k ____ baki.',
    en: "Tomorrow I am going to my grandmother's.",
    opts: ['svojoj', 'svoju', 'svoja', 'svoje'],
    answer: 'svojoj',
    tip: 'k takes the dative: svojoj baki.',
  },
  {
    mode: 'zenski',
    q: 'Dajem knjigu ____ sestri.',
    en: "I am giving the book to her (another woman's) sister.",
    opts: ['njezinoj', 'njezinu', 'njezina', 'njezinom'],
    answer: 'njezinoj',
    tip: 'Feminine dative of njezin: njezinoj.',
  },
  {
    mode: 'zenski',
    q: 'Dodaj sol ____ juhi.',
    en: 'Add salt to the hot soup.',
    opts: ['vrućoj', 'vruću', 'vruća', 'vrućem'],
    answer: 'vrućoj',
    tip: 'Feminine is always -oj, soft stem or not.',
  },
  {
    mode: 'zenski',
    q: 'Vjerujem ____ liječnici.',
    en: 'I trust our doctor. (a woman)',
    opts: ['našoj', 'našu', 'naša', 'našem'],
    answer: 'našoj',
    tip: 'liječnica is feminine: našoj.',
  },

  // ── mnozina ────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Pokazali smo grad ____ gostima.',
    en: 'We showed the town to our guests.',
    opts: ['našim', 'našem', 'naše', 'našoj'],
    answer: 'našim',
    tip: 'Plural dative: -im.',
  },
  {
    mode: 'mnozina',
    q: 'Pomažem ____ ljudima.',
    en: 'I help those people.',
    opts: ['tim', 'tom', 'te', 'toj'],
    answer: 'tim',
    tip: 'Plural dative of taj: tim.',
  },
  {
    mode: 'mnozina',
    q: 'Pišem ____ prijateljima.',
    en: 'I am writing to my (own) friends.',
    opts: ['svojim', 'svojem', 'svoje', 'svojoj'],
    answer: 'svojim',
    tip: 'Plural dative: svojim.',
  },
  {
    mode: 'mnozina',
    q: 'Zahvalio sam ____ susjedima.',
    en: 'I thanked the kind neighbours.',
    opts: ['ljubaznim', 'ljubaznom', 'ljubazne', 'ljubaznoj'],
    answer: 'ljubaznim',
    tip: 'Plural dative: -im, and the fleeting a drops.',
  },
  {
    mode: 'mnozina',
    q: 'Djed priča priče svojim ____ unucima.',
    en: 'Grandad tells stories to his little grandchildren.',
    opts: ['malim', 'malom', 'male', 'maloj'],
    answer: 'malim',
    tip: 'unucima is plural: malim.',
  },
  {
    mode: 'mnozina',
    q: 'Kupili smo poklone ____ roditeljima.',
    en: 'We bought presents for our parents.',
    opts: ['našim', 'naše', 'našem', 'naših'],
    answer: 'našim',
    tip: 'Plural dative: našim.',
  },
  {
    mode: 'mnozina',
    q: 'Učiteljica daje savjete ____ učenicima.',
    en: 'The teacher gives advice to the new pupils.',
    opts: ['novim', 'novom', 'nove', 'novih'],
    answer: 'novim',
    tip: 'Plural dative: -im.',
  },
  {
    mode: 'mnozina',
    q: 'Ne vjerujem ____ obećanjima.',
    en: 'I do not trust those promises.',
    opts: ['tim', 'tom', 'te', 'toj'],
    answer: 'tim',
    tip: 'obećanja is plural: tim.',
  },
];
