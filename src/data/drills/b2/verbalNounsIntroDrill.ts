// src/data/drills/b2/verbalNounsIntroDrill.ts
//
// B2 VERBAL NOUNS — the drill for the `verbal-nouns-intro` lesson.
//
// Building the noun (-nje, -enje with softening, -će), its object in the genitive,
// and the verbal noun in its case after a preposition. Distractors are other forms
// of the same family (the agent noun, the participle, the infinitive), never a
// second correct verbal noun of the same verb.
//
// Three modes:
//   tvorba — build the verbal noun
//   dopuna — the object in the genitive
//   padez  — the verbal noun after a preposition, and its neuter agreement

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBAL_NOUNS_INTRO_MODE_LABELS: Record<string, string> = {
  tvorba: '🛠️ Tvorba',
  dopuna: '➕ Dopuna',
  padez: '🔤 Padež',
};

export const VERBAL_NOUNS_INTRO_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "čitati": ____',
    en: 'The verbal noun of the verb meaning to read.',
    opts: ['čitanje', 'čitatelj', 'čitao', 'čitajući'],
    answer: 'čitanje',
    tip: '-ati verbs keep the a and add -nje.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "pisati": ____',
    en: 'The verbal noun of the verb meaning to write.',
    opts: ['pisanje', 'pisac', 'pismo', 'pisao'],
    answer: 'pisanje',
    tip: 'pisati → pisanje; pisac is the writer, pismo a letter.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "učiti": ____',
    en: 'The verbal noun of the verb meaning to learn.',
    opts: ['učenje', 'učanje', 'učenik', 'učio'],
    answer: 'učenje',
    tip: '-iti verbs end in -enje.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "putovati": ____',
    en: 'The verbal noun of the verb meaning to travel.',
    opts: ['putovanje', 'putnik', 'putovao', 'putujući'],
    answer: 'putovanje',
    tip: '-ovati verbs keep -ova- and add -nje.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "misliti": ____',
    en: 'The verbal noun of the verb meaning to think; it also means an opinion.',
    opts: ['mišljenje', 'mislenje', 'mislilac', 'mislio'],
    answer: 'mišljenje',
    tip: 'Before -enje, sl softens to šlj.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "roditi": ____',
    en: 'The noun meaning birth.',
    opts: ['rođenje', 'rodenje', 'roditelj', 'rodio'],
    answer: 'rođenje',
    tip: 'Before -enje, d softens to đ.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "otkriti": ____',
    en: 'The noun meaning a discovery.',
    opts: ['otkriće', 'otkrivač', 'otkrio', 'otkriven'],
    answer: 'otkriće',
    tip: 'A few verbs in a vowel + -ti take -će.',
  },
  {
    mode: 'tvorba',
    q: 'Glagolska imenica od glagola "plivati": ____',
    en: 'The verbal noun of the verb meaning to swim.',
    opts: ['plivanje', 'plivač', 'plivao', 'plivajući'],
    answer: 'plivanje',
    tip: 'plivati → plivanje; plivač is the swimmer.',
  },

  // ── dopuna ────────────────────────────────────────────────────────────────
  {
    mode: 'dopuna',
    q: 'Učenje ____ traje cijeli život.',
    en: 'Learning foreign languages lasts a whole lifetime.',
    opts: ['stranih jezika', 'strane jezike', 'stranim jezicima', 'strani jezici'],
    answer: 'stranih jezika',
    tip: 'The object of a verbal noun goes into the genitive plural.',
  },
  {
    mode: 'dopuna',
    q: 'Čitanje ____ razvija maštu.',
    en: 'Reading novels develops the imagination.',
    opts: ['romana', 'romane', 'romanima', 'romani'],
    answer: 'romana',
    tip: 'Genitive plural of roman.',
  },
  {
    mode: 'dopuna',
    q: 'Rješavanje ____ traži strpljenje.',
    en: 'Solving problems requires patience.',
    opts: ['problema', 'probleme', 'problemima', 'problemi'],
    answer: 'problema',
    tip: 'The object of rješavanje is in the genitive.',
  },
  {
    mode: 'dopuna',
    q: 'Pisanje ____ oduzima mi puno vremena.',
    en: 'Writing reports takes me a lot of time.',
    opts: ['izvještaja', 'izvještaje', 'izvještajima', 'izvještaji'],
    answer: 'izvještaja',
    tip: 'Genitive plural, the object of pisanje.',
  },
  {
    mode: 'dopuna',
    q: 'Kuhanje ____ njegova je strast.',
    en: 'Cooking traditional dishes is his passion.',
    opts: [
      'tradicionalnih jela',
      'tradicionalna jela',
      'tradicionalnim jelima',
      'tradicionalnog jelom',
    ],
    answer: 'tradicionalnih jela',
    tip: 'Adjective and noun both in the genitive plural.',
  },
  {
    mode: 'dopuna',
    q: '____ sportom pomaže protiv stresa.',
    en: 'Doing sport helps against stress.',
    opts: ['Bavljenje', 'Baviti', 'Bavljenja', 'Bavljenjem'],
    answer: 'Bavljenje',
    tip: 'baviti se drops its se; the instrumental sportom stays.',
  },
  {
    mode: 'dopuna',
    q: 'Glasno ____ pomaže kod izgovora.',
    en: 'Reading aloud helps with pronunciation.',
    opts: ['čitanje', 'čitati', 'čitanja', 'čitanjem'],
    answer: 'čitanje',
    tip: 'The subject: the nominative of the verbal noun, with an agreeing adjective.',
  },
  {
    mode: 'dopuna',
    q: 'Gledanje ____ do kasno u noć nije zdravo.',
    en: 'Watching television late into the night is not healthy.',
    opts: ['televizije', 'televiziju', 'televizijom', 'televizija'],
    answer: 'televizije',
    tip: 'The object of gledanje: the genitive.',
  },

  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Prije ____ uvijek pročitam nekoliko stranica.',
    en: 'Before going to sleep I always read a few pages.',
    opts: ['spavanja', 'spavanje', 'spavanju', 'spavati'],
    answer: 'spavanja',
    tip: 'prije takes the genitive.',
  },
  {
    mode: 'padez',
    q: 'Uživam u ____ s prijateljima.',
    en: 'I enjoy cooking with friends.',
    opts: ['kuhanju', 'kuhanje', 'kuhanja', 'kuhati'],
    answer: 'kuhanju',
    tip: 'u + the locative.',
  },
  {
    mode: 'padez',
    q: 'Nakon ____ idemo na kavu.',
    en: 'After studying we go for coffee.',
    opts: ['učenja', 'učenje', 'učenju', 'učiti'],
    answer: 'učenja',
    tip: 'nakon takes the genitive.',
  },
  {
    mode: 'padez',
    q: 'Bez ____ nema napretka.',
    en: 'Without practice there is no progress.',
    opts: ['vježbanja', 'vježbanje', 'vježbanju', 'vježbati'],
    answer: 'vježbanja',
    tip: 'bez takes the genitive.',
  },
  {
    mode: 'padez',
    q: 'Moja se sestra bavi ____.',
    en: 'My sister is into writing.',
    opts: ['pisanjem', 'pisanje', 'pisanja', 'pisati'],
    answer: 'pisanjem',
    tip: 'baviti se + the instrumental.',
  },
  {
    mode: 'padez',
    q: 'Treba mi mir za ____.',
    en: 'I need peace and quiet for studying.',
    opts: ['učenje', 'učenja', 'učenju', 'učiti'],
    answer: 'učenje',
    tip: 'za + the accusative; never za + infinitive.',
  },
  {
    mode: 'padez',
    q: 'Putovanje u Dubrovnik bilo je ____.',
    en: 'The trip to Dubrovnik was long.',
    opts: ['dugo', 'dug', 'duga', 'dugi'],
    answer: 'dugo',
    tip: 'Verbal nouns are neuter.',
  },
  {
    mode: 'padez',
    q: 'Pušenje je ____ u ovoj zgradi.',
    en: 'Smoking is forbidden in this building.',
    opts: ['zabranjeno', 'zabranjen', 'zabranjena', 'zabranjeni'],
    answer: 'zabranjeno',
    tip: 'A neuter participle for a neuter noun.',
  },
];
