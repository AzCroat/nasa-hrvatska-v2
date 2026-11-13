// src/data/drills/b2/genitiveOfNegationDrill.ts
//
// B2 GENITIVE OF NEGATION — the drill for the `genitive-of-negation` lesson
// (B2 position 51).
//
// Three modes, eight items each:
//   nema     — nema + the genitive, singular and plural, nouns and pronouns
//   proslost — nije bilo / neće biti, frozen in the neuter singular
//   izrazi   — the fixed genitive phrases, and the emphatic genitive after a negated verb
//
// After a negated transitive verb modern standard Croatian accepts BOTH the accusative
// and the genitive (Nisam dobio odgovor / odgovora), so no item ever offers both as
// competing options. One-answer items use nema, nije bilo, neće biti and fixed phrases,
// where only the genitive is standard.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GENITIVE_OF_NEGATION_MODE_LABELS: Record<string, string> = {
  nema: '🚫 Nema',
  proslost: '⏳ Nije bilo, neće biti',
  izrazi: '💬 Izrazi',
};

export const GENITIVE_OF_NEGATION_DRILL_DATA: ModeDrillItem[] = [
  // ── nema ──────────────────────────────────────────────────────────────────
  {
    mode: 'nema',
    q: 'U hladnjaku nema ____.',
    en: 'There is no cheese in the fridge.',
    opts: ['sir', 'sira', 'siru', 'sirom'],
    answer: 'sira',
    tip: 'Nema always takes the genitive.',
  },
  {
    mode: 'nema',
    q: 'Na stanici nema ____.',
    en: 'There are no taxis at the station.',
    opts: ['taksiji', 'taksija', 'taksijima', 'taksije'],
    answer: 'taksija',
    tip: 'The genitive plural after nema.',
  },
  {
    mode: 'nema',
    q: 'Danas nema ____ na cesti.',
    en: 'There is no traffic jam on the road today.',
    opts: ['gužva', 'gužvu', 'gužve', 'gužvom'],
    answer: 'gužve',
    tip: 'A feminine noun in -a takes -e in the genitive singular.',
  },
  {
    mode: 'nema',
    q: 'Gdje je Ana? — ____ nema.',
    en: 'Where is Ana? — She is not here.',
    opts: ['Ona', 'Nje', 'Njoj', 'Je'],
    answer: 'Nje',
    tip: 'The genitive, and at the start of a sentence the long form.',
  },
  {
    mode: 'nema',
    q: 'Nema ____ mjesta u vlaku.',
    en: 'There are no free seats on the train.',
    opts: ['slobodna', 'slobodne', 'slobodnih', 'slobodnim'],
    answer: 'slobodnih',
    tip: 'The adjective follows the noun into the genitive plural.',
  },
  {
    mode: 'nema',
    q: 'Nema ____ u uredu.',
    en: 'He is not in the office.',
    opts: ['on', 'njemu', 'ga', 'njim'],
    answer: 'ga',
    tip: 'After the verb the short genitive form is natural.',
  },
  {
    mode: 'nema',
    q: 'U ovom selu nema ____.',
    en: 'There is no school in this village.',
    opts: ['škola', 'školu', 'škole', 'školi'],
    answer: 'škole',
    tip: 'Nema + genitive singular.',
  },
  {
    mode: 'nema',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct?',
    opts: ['Nema voda.', 'Nema vode.', 'Nema vodu.', 'Nema vodom.'],
    answer: 'Nema vode.',
    tip: 'Only the genitive is standard after nema.',
  },

  // ── proslost ──────────────────────────────────────────────────────────────
  {
    mode: 'proslost',
    q: 'Jučer ____ struje cijeli dan.',
    en: 'Yesterday there was no electricity all day.',
    opts: ['nije bila', 'nisu bile', 'nije bilo', 'nije bio'],
    answer: 'nije bilo',
    tip: 'The past of nema is frozen in the neuter singular.',
  },
  {
    mode: 'proslost',
    q: 'Prošle zime nije bilo ____.',
    en: 'Last winter there was no snow.',
    opts: ['snijeg', 'snijega', 'snijegu', 'snijegom'],
    answer: 'snijega',
    tip: 'After nije bilo, the genitive.',
  },
  {
    mode: 'proslost',
    q: 'Sutra neće biti ____.',
    en: 'There will be no rain tomorrow.',
    opts: ['kiša', 'kišu', 'kiši', 'kiše'],
    answer: 'kiše',
    tip: 'The future of nema takes the genitive too.',
  },
  {
    mode: 'proslost',
    q: 'Zbog štrajka ____ autobusa.',
    en: 'Because of the strike there were no buses.',
    opts: ['nije bilo', 'nisu bili', 'nije bio', 'nisu bila'],
    answer: 'nije bilo',
    tip: 'Nothing is the subject, so the verb does not agree.',
  },
  {
    mode: 'proslost',
    q: 'Neće biti ____, obećavam.',
    en: 'There will be no problems, I promise.',
    opts: ['problemi', 'problema', 'problemima', 'probleme'],
    answer: 'problema',
    tip: 'The genitive plural after neće biti.',
  },
  {
    mode: 'proslost',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct?',
    opts: ['Nije bilo nikoga.', 'Nisu bili nikoga.', 'Nije bila nikoga.', 'Nije bilo nitko.'],
    answer: 'Nije bilo nikoga.',
    tip: 'Nije bilo + the genitive of nitko.',
  },
  {
    mode: 'proslost',
    q: 'U trgovini nije bilo ____.',
    en: 'There was no fresh bread in the shop.',
    opts: ['svježi kruh', 'svježeg kruha', 'svježem kruhu', 'svježim kruhom'],
    answer: 'svježeg kruha',
    tip: 'Adjective and noun both in the genitive.',
  },
  {
    mode: 'proslost',
    q: 'Na sastanku ____ ni direktora.',
    en: 'Not even the director was at the meeting.',
    opts: ['nije bilo', 'nije bio', 'nisu bili', 'nije bila'],
    answer: 'nije bilo',
    tip: 'With the genitive direktora the verb is the frozen nije bilo.',
  },

  // ── izrazi ────────────────────────────────────────────────────────────────
  {
    mode: 'izrazi',
    q: 'Gdje su mi ključevi? — Nemam ____.',
    en: 'Where are my keys? — I have no idea.',
    opts: ['pojam', 'pojma', 'pojmu', 'pojmom'],
    answer: 'pojma',
    tip: 'A fixed genitive phrase.',
  },
  {
    mode: 'izrazi',
    q: 'Od njega nema ni ____ ni glasa.',
    en: 'There is no sign of him at all.',
    opts: ['trag', 'tragu', 'traga', 'tragom'],
    answer: 'traga',
    tip: 'Not a trace, not a word — both in the genitive.',
  },
  {
    mode: 'izrazi',
    q: 'Na plaži nije bilo ni žive ____.',
    en: 'There was not a living soul on the beach.',
    opts: ['duša', 'duše', 'duši', 'dušu'],
    answer: 'duše',
    tip: 'A fixed phrase in the genitive.',
  },
  {
    mode: 'izrazi',
    q: 'Danas nemam ____ za kavu.',
    en: 'I have no time for coffee today.',
    opts: ['vrijeme', 'vremena', 'vremenu', 'vremenom'],
    answer: 'vremena',
    tip: 'Time is an amount: the genitive after nemati.',
  },
  {
    mode: 'izrazi',
    q: 'U kojem su paru oba oblika standardna?',
    en: 'Which pair is fully standard?',
    opts: [
      'Nisam dobio odgovor. / Nisam dobio odgovora.',
      'Nema kruh. / Nema kruha.',
      'Nije bilo vode. / Nisu bile vode.',
      'Nemam pojam. / Nemam pojma.',
    ],
    answer: 'Nisam dobio odgovor. / Nisam dobio odgovora.',
    tip: 'After a negated verb both cases are correct; after nema only the genitive.',
  },
  {
    mode: 'izrazi',
    q: 'Nisam dobio ____ odgovora.',
    en: 'I did not get any answer at all.',
    opts: ['nikakav', 'nikakvog', 'nikakvom', 'nikakvim'],
    answer: 'nikakvog',
    tip: 'The adjective agrees with the genitive noun.',
  },
  {
    mode: 'izrazi',
    q: 'Nema ____, doći ćeš drugi put.',
    en: 'Never mind, you will come another time.',
    opts: ['veza', 'veze', 'vezu', 'vezom'],
    answer: 'veze',
    tip: 'A fixed genitive phrase.',
  },
  {
    mode: 'izrazi',
    q: 'Nema ____ da stignemo na vrijeme.',
    en: 'There is no chance we will arrive on time.',
    opts: ['šansa', 'šanse', 'šansu', 'šansom'],
    answer: 'šanse',
    tip: 'Nema + the genitive singular.',
  },
];
