// src/data/drills/a1/uNaMotionDrill.ts
//
// A1 U / NA FOR MOTION — the drill for the `u-na-motion` lesson.
//
// Three modes:
//   u     — into a building, a town or a country: u školu, u Zagreb, u Hrvatsku
//   na    — to an event, an activity, an open place or an island: na posao, na plažu, na Brač
//   oblik — the place after u / na takes the accusative when you go there
//
// Distractors offer a preposition that cannot express "to" here (iz, od, kod), the wrong
// one of u / na, or a form that is not the accusative. No item offers u where "u + noun"
// would also be real Croatian with another meaning (u more = into the sea, u kuću = into
// the house), and no accusative-plural form is offered as a wrong answer.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const U_NA_MOTION_MODE_LABELS: Record<string, string> = {
  u: '🏫 U',
  na: '🏖️ Na',
  oblik: '🎯 Oblik',
};

export const U_NA_MOTION_DRILL_DATA: ModeDrillItem[] = [
  // ── u ──────────────────────────────────────────────────────────────────
  {
    mode: 'u',
    q: 'Djeca idu ____ školu.',
    en: 'The children are going to school.',
    opts: ['u', 'na', 'iz', 'kod'],
    answer: 'u',
    tip: 'A school is a building: u školu.',
  },
  {
    mode: 'u',
    q: 'Idem ____ trgovinu.',
    en: 'I am going to the shop.',
    opts: ['u', 'na', 'iz', 'od'],
    answer: 'u',
    tip: 'A shop is a building you go into.',
  },
  {
    mode: 'u',
    q: 'Ana ide ____ banku.',
    en: 'Ana is going to the bank.',
    opts: ['u', 'na', 'iz', 'od'],
    answer: 'u',
    tip: 'A bank is a building: u banku.',
  },
  {
    mode: 'u',
    q: 'Sutra idemo ____ Zagreb.',
    en: 'Tomorrow we are going to Zagreb.',
    opts: ['u', 'na', 'iz', 'kod'],
    answer: 'u',
    tip: 'Towns take u.',
  },
  {
    mode: 'u',
    q: 'Ljeti idu ____ Hrvatsku.',
    en: 'In summer they go to Croatia.',
    opts: ['u', 'na', 'iz', 'od'],
    answer: 'u',
    tip: 'Countries take u.',
  },
  {
    mode: 'u',
    q: 'Idemo ____ kino.',
    en: 'We are going to the cinema.',
    opts: ['u', 'na', 'iz', 'od'],
    answer: 'u',
    tip: 'A cinema is a building: u kino.',
  },
  {
    mode: 'u',
    q: 'Idem ____ ured.',
    en: 'I am going to the office.',
    opts: ['u', 'na', 'iz', 'od'],
    answer: 'u',
    tip: 'An office is a room you go into.',
  },
  {
    mode: 'u',
    q: 'Marko ide ____ restoran.',
    en: 'Marko is going to a restaurant.',
    opts: ['u', 'na', 'iz', 'od'],
    answer: 'u',
    tip: 'A restaurant is a building: u restoran.',
  },
  // ── na ─────────────────────────────────────────────────────────────────
  {
    mode: 'na',
    q: 'Svaki dan idem ____ posao.',
    en: 'Every day I go to work.',
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'Work is an activity: na posao.',
  },
  {
    mode: 'na',
    q: 'U petak idemo ____ koncert.',
    en: 'On Friday we are going to a concert.',
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'A concert is an event.',
  },
  {
    mode: 'na',
    q: 'Ivana ide ____ sastanak.',
    en: 'Ivana is going to a meeting.',
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'A meeting is an event.',
  },
  {
    mode: 'na',
    q: 'Idemo ____ plažu!',
    en: "Let's go to the beach!",
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'A beach is an open place.',
  },
  {
    mode: 'na',
    q: 'Ljeti idemo ____ Brač.',
    en: 'In summer we go to the island of Brač.',
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'Islands take na.',
  },
  {
    mode: 'na',
    q: 'Moram ići ____ kolodvor.',
    en: 'I have to go to the station.',
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'Learn it as a pair: na kolodvor.',
  },
  {
    mode: 'na',
    q: 'Idete li ____ utakmicu?',
    en: 'Are you going to the match?',
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'A match is an event.',
  },
  {
    mode: 'na',
    q: 'Studenti idu ____ fakultet.',
    en: 'The students are going to university.',
    opts: ['na', 'u', 'iz', 'od'],
    answer: 'na',
    tip: 'Learn it as a pair: na fakultet.',
  },
  // ── oblik ──────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Idem u ____.',
    en: 'I am going to school.',
    opts: ['školu', 'škola', 'školi', 'školom'],
    answer: 'školu',
    tip: 'Going there: feminine -a becomes -u.',
  },
  {
    mode: 'oblik',
    q: 'Idemo na ____.',
    en: 'We are going to the beach.',
    opts: ['plažu', 'plaža', 'plaži', 'plažom'],
    answer: 'plažu',
    tip: 'Going there: feminine -a becomes -u.',
  },
  {
    mode: 'oblik',
    q: 'Ana ide u ____.',
    en: 'Ana is going to Germany.',
    opts: ['Njemačku', 'Njemačka', 'Njemačkoj', 'Njemačkom'],
    answer: 'Njemačku',
    tip: 'A country in -a takes -u when you go there.',
  },
  {
    mode: 'oblik',
    q: 'Idemo na ____.',
    en: 'We are going to the match.',
    opts: ['utakmicu', 'utakmica', 'utakmici', 'utakmicom'],
    answer: 'utakmicu',
    tip: 'Going there: feminine -a becomes -u.',
  },
  {
    mode: 'oblik',
    q: 'Sutra idem u ____.',
    en: 'Tomorrow I am going to Rijeka.',
    opts: ['Rijeku', 'Rijeka', 'Rijeci', 'Rijekom'],
    answer: 'Rijeku',
    tip: 'A town in -a takes -u when you go there.',
  },
  {
    mode: 'oblik',
    q: 'Oni idu u ____.',
    en: 'They are going to the cinema.',
    opts: ['kino', 'kinu', 'kinom', 'kinima'],
    answer: 'kino',
    tip: 'Neuter nouns do not change in the accusative.',
  },
  {
    mode: 'oblik',
    q: 'Djeca idu ____.',
    en: 'The children are going home.',
    opts: ['kući', 'u kući', 'na kuću', 'kuća'],
    answer: 'kući',
    tip: 'Home as a direction needs no preposition.',
  },
  {
    mode: 'oblik',
    q: 'Idem na ____.',
    en: 'I am going to work.',
    opts: ['posao', 'posla', 'poslu', 'poslom'],
    answer: 'posao',
    tip: 'posao is masculine and not alive, so it does not change.',
  },
];
