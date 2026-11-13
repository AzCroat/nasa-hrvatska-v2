// src/data/drills/b1/numbersNounsDrill.ts
//
// B1 numbers and nouns — the drill for the `numbers-nouns` lesson.
//
// Until 2026-11-13 this lesson was drilled by NumTime, which practises numerals and clock
// time only and never asks for the noun after a number — the whole point of the lesson
// (book-order audit, B1 report section 2). Everything here is taught in that lesson or
// before it: the three-way rule (1 nominative singular, 2–4 genitive singular, 5+ genitive
// plural), the teens, compound numbers ending in 1–4, the collective numbers with djeca,
// the special genitive plurals from `genitive-plural-special` (sestara, djevojaka, ljudi),
// and the verb after a number of 5 or more.
//
// Three modes:
//   pravilo  — 1 / 2–4 / 5+
//   slozeni  — the teens and compound numbers (21, 22, 25…)
//   zbirni   — dvoje / troje djece, and the verb after a number

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NUMBERS_NOUNS_MODE_LABELS: Record<string, string> = {
  pravilo: '🔢 1 · 2–4 · 5+',
  slozeni: '🧮 11–14 i 21, 22…',
  zbirni: '👶 dvoje djece',
};

export const NUMBERS_NOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── pravilo ───────────────────────────────────────────────────────────────
  {
    mode: 'pravilo',
    q: 'Imam tri ____.',
    en: 'I have three sisters.',
    opts: ['sestre', 'sestra', 'sestara', 'sestri'],
    answer: 'sestre',
    tip: 'After 2, 3 and 4 the noun takes the genitive singular.',
  },
  {
    mode: 'pravilo',
    q: 'U grupi je pet ____.',
    en: 'There are five girls in the group.',
    opts: ['djevojaka', 'djevojke', 'djevojka', 'djevojki'],
    answer: 'djevojaka',
    tip: 'After 5 and above: the genitive plural, with the slipped-in a.',
  },
  {
    mode: 'pravilo',
    q: 'Ostajemo jedan ____.',
    en: 'We are staying one day.',
    opts: ['dan', 'dana', 'dani', 'danu'],
    answer: 'dan',
    tip: 'After jedan the noun stays in its basic form.',
  },
  {
    mode: 'pravilo',
    q: 'Čekao sam četiri ____.',
    en: 'I waited four hours.',
    opts: ['sata', 'sati', 'sat', 'satova'],
    answer: 'sata',
    tip: '2–4 take the genitive singular: četiri sata.',
  },
  {
    mode: 'pravilo',
    q: 'Na sastanku je bilo osam ____.',
    en: 'There were eight people at the meeting.',
    opts: ['ljudi', 'čovjeka', 'ljudova', 'čovjeci'],
    answer: 'ljudi',
    tip: 'From 5 up, čovjek is counted with ljudi.',
  },
  {
    mode: 'pravilo',
    q: 'Kupila sam dvije ____.',
    en: 'I bought two bottles.',
    opts: ['boce', 'boca', 'bocu', 'boci'],
    answer: 'boce',
    tip: 'dvije for a feminine noun, and the genitive singular after it.',
  },
  {
    mode: 'pravilo',
    q: 'Treba mi ____ minuta.',
    en: 'I need ten minutes.',
    opts: ['deset', 'dvije', 'tri', 'četiri'],
    answer: 'deset',
    tip: 'minuta here is the genitive plural, so only a number from 5 up fits.',
  },
  {
    mode: 'pravilo',
    q: 'Ima samo ____ dijete.',
    en: 'She has only one child.',
    opts: ['jedno', 'jedan', 'jedna', 'jednog'],
    answer: 'jedno',
    tip: 'jedan agrees with its noun, and dijete is neuter.',
  },

  // ── slozeni ───────────────────────────────────────────────────────────────
  {
    mode: 'slozeni',
    q: 'Radio sam dvanaest ____.',
    en: 'I worked twelve hours.',
    opts: ['sati', 'sata', 'sat', 'satova'],
    answer: 'sati',
    tip: '11 to 19 always take the genitive plural, even though they end in 1–4.',
  },
  {
    mode: 'slozeni',
    q: 'Godišnji odmor traje dvadeset jedan ____.',
    en: 'The holiday lasts twenty-one days.',
    opts: ['dan', 'dana', 'dani', 'danima'],
    answer: 'dan',
    tip: 'The last word, jedan, decides: the basic form, dan.',
  },
  {
    mode: 'slozeni',
    q: 'U razredu su dvadeset dva ____.',
    en: 'There are twenty-two pupils in the class.',
    opts: ['učenika', 'učenici', 'učenik', 'učenicima'],
    answer: 'učenika',
    tip: 'The number ends in dva, so the genitive singular.',
  },
  {
    mode: 'slozeni',
    q: 'Čekali smo četrnaest ____.',
    en: 'We waited fourteen days.',
    opts: ['dana', 'dan', 'danu', 'dani'],
    answer: 'dana',
    tip: 'The teens take the genitive plural, and for dan it is dana.',
  },
  {
    mode: 'slozeni',
    q: 'Na vjenčanju je bilo trideset četiri ____.',
    en: 'There were thirty-four guests at the wedding.',
    opts: ['gosta', 'gosti', 'gostiju', 'gost'],
    answer: 'gosta',
    tip: 'Ending in četiri: the genitive singular, gosta.',
  },
  {
    mode: 'slozeni',
    q: 'Imam jedanaest ____.',
    en: 'I have eleven cousins.',
    opts: ['rođaka', 'rođak', 'rođake', 'rođaci'],
    answer: 'rođaka',
    tip: 'jedanaest is a teen: the genitive plural, not the form after jedan.',
  },
  {
    mode: 'slozeni',
    q: 'Čekali smo četrdeset jednu ____.',
    en: 'We waited forty-one minutes.',
    opts: ['minutu', 'minute', 'minuta', 'minuti'],
    answer: 'minutu',
    tip: 'Ending in jedan: the singular — here in the accusative, because it is how long you waited.',
  },
  {
    mode: 'slozeni',
    q: 'Which is correct for 25 days?',
    en: 'Choose the correct phrase.',
    opts: ['dvadeset pet dana', 'dvadeset pet dan', 'dvadeset pet dani', 'dvadeset pet danu'],
    answer: 'dvadeset pet dana',
    tip: 'Ending in pet: the genitive plural.',
  },

  // ── zbirni ────────────────────────────────────────────────────────────────
  {
    mode: 'zbirni',
    q: 'Imam ____ djece.',
    en: 'I have two children.',
    opts: ['dvoje', 'dva', 'dvije', 'dvoja'],
    answer: 'dvoje',
    tip: 'djeca is counted with the collective numbers: dvoje, troje, četvero…',
  },
  {
    mode: 'zbirni',
    q: 'Imaju troje ____.',
    en: 'They have three children.',
    opts: ['djece', 'djeca', 'djeci', 'djetetu'],
    answer: 'djece',
    tip: 'A collective number takes the genitive: djece.',
  },
  {
    mode: 'zbirni',
    q: 'U parku se igra ____ djece.',
    en: 'Five children are playing in the park.',
    opts: ['petero', 'pet', 'peti', 'petoga'],
    answer: 'petero',
    tip: 'The collective number for five is petero (also petoro).',
  },
  {
    mode: 'zbirni',
    q: 'Pet studenata ____ položilo ispit.',
    en: 'Five students passed the exam.',
    opts: ['je', 'su', 'smo', 'ste'],
    answer: 'je',
    tip: 'After a number from 5 up the verb is singular and neuter: je položilo.',
  },
  {
    mode: 'zbirni',
    q: 'Na zabavu je ____ deset ljudi.',
    en: 'Ten people came to the party.',
    opts: ['došlo', 'došli', 'došla', 'došao'],
    answer: 'došlo',
    tip: 'The number 5+ makes the verb neuter singular: je došlo.',
  },
  {
    mode: 'zbirni',
    q: 'Dva brata ____ u istoj tvrtki.',
    en: 'Two brothers work in the same company.',
    opts: ['rade', 'radi', 'radimo', 'radiš'],
    answer: 'rade',
    tip: 'After 2–4 the verb is plural: dva brata rade.',
  },
  {
    mode: 'zbirni',
    q: 'Došlo je ____ studenata, dva mladića i dvije djevojke.',
    en: 'Four students came, two young men and two young women.',
    opts: ['četvero', 'četvera', 'četvrti', 'četiri'],
    answer: 'četvero',
    tip: 'A mixed group: the collective number četvero (or četvoro) with the genitive plural.',
  },
  {
    mode: 'zbirni',
    q: 'Which phrase means "three children"?',
    en: 'Choose the correct phrase.',
    opts: ['troje djece', 'tri djece', 'troje djeca', 'tri djeca'],
    answer: 'troje djece',
    tip: 'The collective number plus the genitive of djeca.',
  },
];
