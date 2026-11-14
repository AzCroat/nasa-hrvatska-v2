// src/data/drills/a1/coloursDrill.ts
//
// A1 COLOURS — the drill for the `colours` lesson (A1 position 22).
//
// Three modes, eight items each:
//   jednina — one thing: crven / crvena / crveno by the noun's gender (auto is
//             masculine; smeđ is soft, so its neuter is smeđe)
//   mnozina — many: crveni / crvene / crvena
//   boje    — the colour words themselves
//
// Nominative only, after je / su. Distractors are the right colour with the wrong
// gender or number ending. The masculine singular is only asked after je, where the
// short form is the standard one, so no correct alternative ever sits among the options.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COLOURS_MODE_LABELS: Record<string, string> = {
  jednina: '🎨 Jednina',
  mnozina: '🌈 Množina',
  boje: '🖍️ Boje',
};

export const COLOURS_DRILL_DATA: ModeDrillItem[] = [
  // ── jednina ───────────────────────────────────────────────────────────────
  {
    mode: 'jednina',
    q: 'Kuća je ____.',
    en: 'The house is red.',
    opts: ['crven', 'crvena', 'crveno', 'crvene'],
    answer: 'crvena',
    tip: 'kuća is feminine: -a.',
  },
  {
    mode: 'jednina',
    q: 'Nebo je ____.',
    en: 'The sky is blue.',
    opts: ['plav', 'plava', 'plave', 'plavo'],
    answer: 'plavo',
    tip: 'nebo is neuter: -o.',
  },
  {
    mode: 'jednina',
    q: 'Snijeg je ____.',
    en: 'Snow is white.',
    opts: ['bijel', 'bijela', 'bijelo', 'bijele'],
    answer: 'bijel',
    tip: 'snijeg is masculine: no ending.',
  },
  {
    mode: 'jednina',
    q: 'Auto je ____.',
    en: 'The car is green.',
    opts: ['zeleno', 'zelena', 'zelen', 'zelene'],
    answer: 'zelen',
    tip: 'auto ends in -o but is masculine: zelen.',
  },
  {
    mode: 'jednina',
    q: 'Trava je ____.',
    en: 'The grass is green.',
    opts: ['zelen', 'zelena', 'zeleno', 'zeleni'],
    answer: 'zelena',
    tip: 'trava is feminine: -a.',
  },
  {
    mode: 'jednina',
    q: 'Jaje je ____.',
    en: 'The egg is brown.',
    opts: ['smeđo', 'smeđa', 'smeđ', 'smeđe'],
    answer: 'smeđe',
    tip: 'smeđ ends in the soft đ, so the neuter is -e, not -o.',
  },
  {
    mode: 'jednina',
    q: 'Vino je ____.',
    en: 'The wine is white.',
    opts: ['bijel', 'bijela', 'bijelo', 'bijeli'],
    answer: 'bijelo',
    tip: 'vino is neuter: -o.',
  },
  {
    mode: 'jednina',
    q: 'Mačka je ____.',
    en: 'The cat is black.',
    opts: ['crna', 'crn', 'crno', 'crne'],
    answer: 'crna',
    tip: 'mačka is feminine: -a.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Jabuke su ____.',
    en: 'The apples are red.',
    opts: ['crveni', 'crvena', 'crvene', 'crven'],
    answer: 'crvene',
    tip: 'jabuke is a feminine plural: -e.',
  },
  {
    mode: 'mnozina',
    q: 'Oblaci su ____.',
    en: 'The clouds are grey.',
    opts: ['sivi', 'sive', 'siva', 'siv'],
    answer: 'sivi',
    tip: 'oblaci is a masculine plural: -i.',
  },
  {
    mode: 'mnozina',
    q: 'Banane su ____.',
    en: 'The bananas are yellow.',
    opts: ['žuti', 'žuta', 'žut', 'žute'],
    answer: 'žute',
    tip: 'banane is a feminine plural: -e.',
  },
  {
    mode: 'mnozina',
    q: 'Jaja su ____.',
    en: 'The eggs are white.',
    opts: ['bijeli', 'bijele', 'bijela', 'bijel'],
    answer: 'bijela',
    tip: 'jaja is a neuter plural: -a.',
  },
  {
    mode: 'mnozina',
    q: 'Krovovi su ____.',
    en: 'The roofs are red.',
    opts: ['crvene', 'crveni', 'crvena', 'crveno'],
    answer: 'crveni',
    tip: 'krovovi is a masculine plural: -i.',
  },
  {
    mode: 'mnozina',
    q: 'Oči su ____.',
    en: 'The eyes are brown.',
    opts: ['smeđi', 'smeđa', 'smeđ', 'smeđe'],
    answer: 'smeđe',
    tip: 'oči is a feminine plural: -e.',
  },
  {
    mode: 'mnozina',
    q: 'Psi su ____.',
    en: 'The dogs are black.',
    opts: ['crni', 'crne', 'crna', 'crn'],
    answer: 'crni',
    tip: 'psi is a masculine plural: -i.',
  },
  {
    mode: 'mnozina',
    q: 'Which sentence is correct?',
    en: 'The houses are white.',
    opts: ['Kuće su bijela.', 'Kuće je bijele.', 'Kuće su bijele.', 'Kuće su bijeli.'],
    answer: 'Kuće su bijele.',
    tip: 'Feminine plural noun, plural verb su, feminine plural colour -e.',
  },

  // ── boje ──────────────────────────────────────────────────────────────────
  {
    mode: 'boje',
    q: 'Što znači "žut"?',
    en: 'Choose the meaning.',
    opts: ['green', 'yellow', 'orange', 'brown'],
    answer: 'yellow',
    tip: 'žut = yellow, like a banana.',
  },
  {
    mode: 'boje',
    q: 'Što znači "siv"?',
    en: 'Choose the meaning.',
    opts: ['grey', 'blue', 'black', 'white'],
    answer: 'grey',
    tip: 'siv = grey, like a cloud before rain.',
  },
  {
    mode: 'boje',
    q: 'Which word means "purple"?',
    en: 'Which word means purple?',
    opts: ['ružičast', 'narančast', 'ljubičast', 'smeđ'],
    answer: 'ljubičast',
    tip: 'From ljubičica, the violet.',
  },
  {
    mode: 'boje',
    q: 'Which word means "pink"?',
    en: 'Which word means pink?',
    opts: ['ružičast', 'crven', 'ljubičast', 'narančast'],
    answer: 'ružičast',
    tip: 'From ruža, the rose.',
  },
  {
    mode: 'boje',
    q: 'Which word means "brown"?',
    en: 'Which word means brown?',
    opts: ['crn', 'siv', 'žut', 'smeđ'],
    answer: 'smeđ',
    tip: 'smeđ = brown; its đ is a soft consonant.',
  },
  {
    mode: 'boje',
    q: 'Hrvatska zastava je crvena, bijela i ____.',
    en: 'The Croatian flag is red, white and blue.',
    opts: ['plav', 'plava', 'plavo', 'plave'],
    answer: 'plava',
    tip: 'zastava is feminine, so every colour in the list ends in -a.',
  },
  {
    mode: 'boje',
    q: 'Što znači "plava kosa"?',
    en: 'Choose the meaning.',
    opts: ['blue hair', 'blond hair', 'black hair', 'grey hair'],
    answer: 'blond hair',
    tip: 'Said of hair, plav means fair, blond.',
  },
  {
    mode: 'boje',
    q: 'How do you ask "What colour is this?"',
    en: 'Choose the question.',
    opts: ['Koja je ovo boja?', 'Što je ovo?', 'Je li ovo boja?', 'Gdje je boja?'],
    answer: 'Koja je ovo boja?',
    tip: 'koja = which, boja = colour.',
  },
];
