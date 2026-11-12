// src/data/drills/a1/numbers11To1000Drill.ts
//
// A1 NUMBERS 11–1000 — the drill for the `numbers-11-1000` lesson.
//
// Three modes:
//   naest — the teens, incl. the two shortened ones (četrnaest, šesnaest)
//   deset — the tens, incl. the spellings that follow the sound (pedeset, šezdeset,
//           devedeset), and numbers between the tens
//   sto   — the hundreds as one word, a thousand, and reading a big number
//
// No noun is counted after a number: that needs the genitive (lesson 84). Every
// distractor is a misspelling or a neighbouring number (90 for 900, 15 for 50).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NUMBERS_11_1000_MODE_LABELS: Record<string, string> = {
  naest: '🔢 11–19',
  deset: '🔟 Desetice',
  sto: '💯 Stotine',
};

export const NUMBERS_11_1000_DRILL_DATA: ModeDrillItem[] = [
  // ── naest ───────────────────────────────────────────────────────────────
  {
    mode: 'naest',
    q: '11 = ____',
    en: 'eleven',
    opts: ['jedanaest', 'jedandeset', 'jedannaest', 'jedenaest'],
    answer: 'jedanaest',
    tip: 'jedan + -naest, with one n.',
  },
  {
    mode: 'naest',
    q: '12 = ____',
    en: 'twelve',
    opts: ['dvadeset', 'dvanaest', 'dvjenaest', 'dvasto'],
    answer: 'dvanaest',
    tip: 'dva + -naest.',
  },
  {
    mode: 'naest',
    q: '14 = ____',
    en: 'fourteen',
    opts: ['četirinaest', 'četrdeset', 'četrnaest', 'četiristo'],
    answer: 'četrnaest',
    tip: 'četiri shortens to četr- before -naest.',
  },
  {
    mode: 'naest',
    q: '16 = ____',
    en: 'sixteen',
    opts: ['šestnaest', 'šesnaest', 'šezdeset', 'šesto'],
    answer: 'šesnaest',
    tip: 'The t of šest disappears: šesnaest.',
  },
  {
    mode: 'naest',
    q: '17 = ____',
    en: 'seventeen',
    opts: ['sedamdeset', 'sedamsto', 'sedmonaest', 'sedamnaest'],
    answer: 'sedamnaest',
    tip: 'sedam + -naest.',
  },
  {
    mode: 'naest',
    q: '19 = ____',
    en: 'nineteen',
    opts: ['devetnaest', 'devedeset', 'devetsto', 'devenaest'],
    answer: 'devetnaest',
    tip: 'devet keeps its t before -naest.',
  },
  {
    mode: 'naest',
    q: '"petnaest" = ____',
    en: 'Read the number.',
    opts: ['50', '15', '500', '5'],
    answer: '15',
    tip: '-naest is a teen: 15.',
  },
  {
    mode: 'naest',
    q: '"osamnaest" = ____',
    en: 'Read the number.',
    opts: ['80', '800', '18', '8'],
    answer: '18',
    tip: '-naest is a teen: 18.',
  },
  // ── deset ───────────────────────────────────────────────────────────────
  {
    mode: 'deset',
    q: '50 = ____',
    en: 'fifty',
    opts: ['petdeset', 'pedeset', 'petnaest', 'petsto'],
    answer: 'pedeset',
    tip: 'pet loses its t before -deset.',
  },
  {
    mode: 'deset',
    q: '60 = ____',
    en: 'sixty',
    opts: ['šestdeset', 'šesnaest', 'šezdeset', 'šesdeset'],
    answer: 'šezdeset',
    tip: 'šest becomes šez- before -deset.',
  },
  {
    mode: 'deset',
    q: '90 = ____',
    en: 'ninety',
    opts: ['devetdeset', 'devetsto', 'devetnaest', 'devedeset'],
    answer: 'devedeset',
    tip: 'devet becomes deve- before -deset.',
  },
  {
    mode: 'deset',
    q: '40 = ____',
    en: 'forty',
    opts: ['četrdeset', 'četirideset', 'četrnaest', 'četiristo'],
    answer: 'četrdeset',
    tip: 'četr- + -deset.',
  },
  {
    mode: 'deset',
    q: '30 = ____',
    en: 'thirty',
    opts: ['trinaest', 'trideset', 'tristo', 'tridest'],
    answer: 'trideset',
    tip: 'tri + -deset.',
  },
  {
    mode: 'deset',
    q: '75 = ____',
    en: 'seventy-five',
    opts: ['pet sedamdeset', 'sedamnaest pet', 'sedamsto pet', 'sedamdeset pet'],
    answer: 'sedamdeset pet',
    tip: 'The ten first, then the unit.',
  },
  {
    mode: 'deset',
    q: '21 = ____',
    en: 'twenty-one',
    opts: ['dvadeset i jedan', 'jedan i dvadeset', 'dvanaest i jedan', 'dvjesto i jedan'],
    answer: 'dvadeset i jedan',
    tip: 'Ten first; the i is optional.',
  },
  {
    mode: 'deset',
    q: '"osamdeset osam" = ____',
    en: 'Read the number.',
    opts: ['818', '88', '808', '18'],
    answer: '88',
    tip: 'osamdeset (80) + osam (8).',
  },
  // ── sto ─────────────────────────────────────────────────────────────────
  {
    mode: 'sto',
    q: '200 = ____',
    en: 'two hundred',
    opts: ['dvasto', 'dvadeset', 'dvjesto', 'dvjeststo'],
    answer: 'dvjesto',
    tip: 'Two hundred is dvjesto.',
  },
  {
    mode: 'sto',
    q: '300 = ____',
    en: 'three hundred',
    opts: ['tristo', 'trideset', 'tri sto', 'trinaest'],
    answer: 'tristo',
    tip: 'One word: tristo.',
  },
  {
    mode: 'sto',
    q: '900 = ____',
    en: 'nine hundred',
    opts: ['devedeset', 'devetsto', 'devetnaest', 'devesto'],
    answer: 'devetsto',
    tip: 'devet + sto, and devet keeps its t.',
  },
  {
    mode: 'sto',
    q: '1000 = ____',
    en: 'a thousand',
    opts: ['desetsto', 'tisuća', 'stotina', 'deset sto'],
    answer: 'tisuća',
    tip: 'A thousand has its own word.',
  },
  {
    mode: 'sto',
    q: '"tristo četrdeset pet" = ____',
    en: 'Read the number.',
    opts: ['345', '3045', '435', '354'],
    answer: '345',
    tip: '300 + 40 + 5, left to right.',
  },
  {
    mode: 'sto',
    q: '"sedamsto osam" = ____',
    en: 'Read the number.',
    opts: ['78', '780', '718', '708'],
    answer: '708',
    tip: '700 + 8.',
  },
  {
    mode: 'sto',
    q: '"devetsto" = ____',
    en: 'Read the number.',
    opts: ['90', '900', '19', '9000'],
    answer: '900',
    tip: '-sto makes hundreds; ninety is devedeset.',
  },
  {
    mode: 'sto',
    q: '412 = ____',
    en: 'four hundred and twelve',
    opts: ['četiristo dvanaest', 'četrdeset dvanaest', 'četrnaest dvanaest', 'četiristo dvadeset'],
    answer: 'četiristo dvanaest',
    tip: 'četiristo (400) + dvanaest (12).',
  },
  {
    mode: 'sto',
    q: 'Koliko je petsto i petsto?',
    en: 'How much is five hundred and five hundred?',
    opts: ['sto', 'tisuća', 'deset', 'petsto'],
    answer: 'tisuća',
    tip: '500 + 500 = 1000.',
  },
];
