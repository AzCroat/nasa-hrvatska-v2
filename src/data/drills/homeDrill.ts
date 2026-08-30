// src/data/drills/homeDrill.ts
//
// A2 HOUSE & HOME — the drill for the `house-home` lesson.
//
// The topic is rooms and furniture; the STRUCTURE under it is where Croatian
// puts a thing. Two prepositions, *u* and *na*, take the LOCATIVE when nothing
// is moving (*u kuhinji*, *na zidu*) and the accusative when something is —
// which is the distinction English marks with "in" against "into" and mostly
// does not mark at all. Every other position word in the lesson (*pored*,
// *ispod*, *iznad*, *iza*) takes the genitive instead, with no exceptions.
//
// The floor is the third thing that has to be met rather than derived: it is an
// ORDINAL, and it lives in the locative — *na trećem katu*, not *na tri kat*.
// The ground floor has its own word, *prizemlje*, and takes *u*.
//
// Three modes:
//   prostorije — the rooms, and kuća against stan against dom
//   kat        — floors as ordinals in the locative
//   smjestaj   — u/na + locative against the genitive position words

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const HOME_MODE_LABELS: Record<string, string> = {
  prostorije: '🏠 Prostorije',
  kat: '🪜 Na kojem katu',
  smjestaj: '📍 Gdje što stoji',
};

export const HOME_DRILL_DATA: ModeDrillItem[] = [
  // ── prostorije ────────────────────────────────────────────────────────────
  {
    mode: 'prostorije',
    q: 'Živim u ____. (stan)',
    en: 'I live in a flat.',
    opts: ['stanu', 'stan', 'stana', 'stanom'],
    answer: 'stanu',
    tip: 'Nothing is moving, so u takes the LOCATIVE: u stanu.',
  },
  {
    mode: 'prostorije',
    q: 'Živim u ____. (kuća)',
    en: 'I live in a house.',
    opts: ['kući', 'kuću', 'kuće', 'kućom'],
    answer: 'kući',
    tip: 'u kući. The feminine locative is -i.',
  },
  {
    mode: 'prostorije',
    q: 'Koja se riječ rabi za osjećaj, a ne za zgradu?',
    en: 'Which word is the emotional one?',
    opts: ['dom', 'kuća', 'stan', 'soba'],
    answer: 'dom',
    tip: 'Dom is home. Kuća is the building, stan is the flat.',
  },
  {
    mode: 'prostorije',
    q: 'Gdje se kuha?',
    en: 'Where do you cook?',
    opts: ['u kuhinji', 'u kupaonici', 'u hodniku', 'u spavaćoj sobi'],
    answer: 'u kuhinji',
    tip: 'kuhinja — from kuhati.',
  },
  {
    mode: 'prostorije',
    q: 'Što je "dnevni boravak"?',
    en: 'What is dnevni boravak?',
    opts: ['living room', 'dining room', 'bedroom', 'hallway'],
    answer: 'living room',
    tip: 'Literally "day stay". The dining room is blagovaonica.',
  },
  {
    mode: 'prostorije',
    q: 'Što je "ormar"?',
    en: 'What is ormar?',
    opts: ['wardrobe', 'shelf', 'table', 'carpet'],
    answer: 'wardrobe',
    tip: 'ormar. A shelf is polica.',
  },
  {
    mode: 'prostorije',
    q: 'Što je "perilica"?',
    en: 'What is perilica?',
    opts: ['washing machine', 'fridge', 'oven', 'sink'],
    answer: 'washing machine',
    tip: 'From prati, to wash. The fridge is hladnjak.',
  },
  {
    mode: 'prostorije',
    q: 'Kojeg je roda "vrata"?',
    en: 'What is vrata?',
    opts: ['uvijek množina', 'muški rod', 'ženski rod', 'srednji jednina'],
    answer: 'uvijek množina',
    tip: 'Vrata is always plural: Vrata su otvorena. Never "vrato".',
  },

  // ── kat ───────────────────────────────────────────────────────────────────
  {
    mode: 'kat',
    q: 'Stan je na ____ katu. (treći)',
    en: 'The flat is on the third floor.',
    opts: ['trećem', 'treći', 'trećeg', 'tri'],
    answer: 'trećem',
    tip: 'The floor is an ORDINAL in the locative: na trećem katu.',
  },
  {
    mode: 'kat',
    q: 'Stan je na ____ katu. (prvi)',
    en: 'on the first floor',
    opts: ['prvom', 'prvi', 'prvog', 'jedan'],
    answer: 'prvom',
    tip: 'na prvom katu.',
  },
  {
    mode: 'kat',
    q: 'Kako se kaže "on the ground floor"?',
    en: 'on the ground floor',
    opts: ['u prizemlju', 'na prizemlju', 'na nultom katu', 'u prizemlje'],
    answer: 'u prizemlju',
    tip: 'Prizemlje has its own word AND its own preposition: u prizemlju.',
  },
  {
    mode: 'kat',
    q: 'Koji je oblik broja u "na drugom katu"?',
    en: 'What form is the number?',
    opts: ['redni broj', 'glavni broj', 'imenica', 'prilog'],
    answer: 'redni broj',
    tip: 'An ordinal — and ordinals decline like adjectives.',
  },
  {
    mode: 'kat',
    q: 'Kako se pita za kat?',
    en: 'How do you ask which floor?',
    opts: ['Na kojem katu?', 'Koliko katu?', 'Kakav kat?', 'Gdje kat?'],
    answer: 'Na kojem katu?',
    tip: 'Na kojem katu živite?',
  },
  {
    mode: 'kat',
    q: 'Zgrada ____ pet katova.',
    en: 'The building has five floors.',
    opts: ['ima', 'je', 'stoji', 'nosi'],
    answer: 'ima',
    tip: 'Zgrada ima pet katova — genitive plural after the number.',
  },
  {
    mode: 'kat',
    q: 'Idem ____ (dizalo).',
    en: 'I am taking the lift.',
    opts: ['dizalom', 'dizalo', 'dizala', 'dizalu'],
    answer: 'dizalom',
    tip: 'The means is the instrumental — the same rule as vlakom.',
  },
  {
    mode: 'kat',
    q: 'Što je "stubište"?',
    en: 'What is stubište?',
    opts: ['staircase', 'balcony', 'garage', 'garden'],
    answer: 'staircase',
    tip: 'From stuba, a step.',
  },

  // ── smjestaj ──────────────────────────────────────────────────────────────
  {
    mode: 'smjestaj',
    q: 'Slika je na ____. (zid)',
    en: 'The picture is on the wall.',
    opts: ['zidu', 'zid', 'zida', 'zidom'],
    answer: 'zidu',
    tip: 'Nothing is moving → na takes the LOCATIVE: na zidu.',
  },
  {
    mode: 'smjestaj',
    q: 'Stol je pored ____. (prozor)',
    en: 'The table is by the window.',
    opts: ['prozora', 'prozor', 'prozoru', 'prozorom'],
    answer: 'prozora',
    tip: 'Pored is a position word → GENITIVE, always.',
  },
  {
    mode: 'smjestaj',
    q: 'Tepih je ispod ____. (stol)',
    en: 'The rug is under the table.',
    opts: ['stola', 'stol', 'stolu', 'stolom'],
    answer: 'stola',
    tip: 'ispod stola — genitive again.',
  },
  {
    mode: 'smjestaj',
    q: 'Koji padež traže pored, ispod, iznad i iza?',
    en: 'Which case do those take?',
    opts: ['genitiv', 'lokativ', 'akuzativ', 'instrumental'],
    answer: 'genitiv',
    tip: 'All of them, genitive. One rule for the whole group.',
  },
  {
    mode: 'smjestaj',
    q: 'Knjiga je u ____. (ormar)',
    en: 'The book is in the wardrobe.',
    opts: ['ormaru', 'ormar', 'ormara', 'ormarom'],
    answer: 'ormaru',
    tip: 'u ormaru — locative, because the book is not going anywhere.',
  },
  {
    mode: 'smjestaj',
    q: 'Stavljam knjigu u ____. (ormar)',
    en: 'I am putting the book in the wardrobe.',
    opts: ['ormar', 'ormaru', 'ormara', 'ormarom'],
    answer: 'ormar',
    tip: 'Now it IS moving → accusative. Same preposition, different case.',
  },
  {
    mode: 'smjestaj',
    q: 'Što odlučuje između "u ormaru" i "u ormar"?',
    en: 'What decides between them?',
    opts: ['ima li kretanja', 'rod imenice', 'broj', 'vrijeme'],
    answer: 'ima li kretanja',
    tip: 'Movement. Where it IS = locative; where it is GOING = accusative.',
  },
  {
    mode: 'smjestaj',
    q: 'Lampa stoji iznad ____. (krevet)',
    en: 'The lamp is above the bed.',
    opts: ['kreveta', 'krevet', 'krevetu', 'krevetom'],
    answer: 'kreveta',
    tip: 'iznad kreveta.',
  },
];
