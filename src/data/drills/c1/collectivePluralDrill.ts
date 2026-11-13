// src/data/drills/c1/collectivePluralDrill.ts
//
// C1 COLLECTIVE NOUNS IN -JE — the drill for the `collective-plural` lesson.
//
// Three modes, eight items each:
//   oblik    — the collective and its case forms: lišće, kamenja, perjem, grožđa
//   slaganje — agreement as a neuter singular: Lišće je požutjelo, ovo perje, stavi ga
//   razlika  — counted (tri cvijeta, pet listova, dva stabla) or taken as a mass
//
// Alternatives that are also standard (četiri drveta, to drveće beside ono drveće) are
// never offered as wrong options.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COLLECTIVE_PLURAL_MODE_LABELS: Record<string, string> = {
  oblik: '🍂 Zbirna imenica',
  slaganje: '🔗 Slaganje',
  razlika: '🔢 Brojivo ili zbirno',
};

export const COLLECTIVE_PLURAL_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Vjetar je raznio ____ po dvorištu.',
    en: 'The wind scattered the foliage around the yard.',
    opts: ['lišće', 'lišćeve', 'lisće', 'lišću'],
    answer: 'lišće',
    tip: 'The collective of list; its accusative looks like the nominative.',
  },
  {
    mode: 'oblik',
    q: 'Na plaži je puno ____.',
    en: 'There are a lot of stones on the beach.',
    opts: ['kamenja', 'kamenje', 'kamenjem', 'kamenju'],
    answer: 'kamenja',
    tip: 'After puno, the genitive singular of the collective.',
  },
  {
    mode: 'oblik',
    q: 'Jastuk je napunjen ____.',
    en: 'The pillow is filled with feathers.',
    opts: ['perjem', 'perje', 'perja', 'perju'],
    answer: 'perjem',
    tip: 'napunjen čime: the instrumental singular.',
  },
  {
    mode: 'oblik',
    q: 'Kupila sam kilogram ____.',
    en: 'I bought a kilogram of grapes.',
    opts: ['grožđa', 'grožđe', 'grožđem', 'grožđu'],
    answer: 'grožđa',
    tip: 'After kilogram, the genitive singular.',
  },
  {
    mode: 'oblik',
    q: 'Za potpalu skupljamo suho ____.',
    en: 'We gather dry brushwood for kindling.',
    opts: ['granje', 'grane', 'granja', 'granju'],
    answer: 'granje',
    tip: 'suho is neuter singular, so it needs the collective granje.',
  },
  {
    mode: 'oblik',
    q: 'Ruže su lijepe, ali pazi na ____.',
    en: 'Roses are lovely, but mind the thorns.',
    opts: ['trnje', 'trnja', 'trnju', 'trnjem'],
    answer: 'trnje',
    tip: 'paziti na + accusative; the collective looks like its nominative.',
  },
  {
    mode: 'oblik',
    q: 'Uz rijeku raste gusto ____.',
    en: 'Dense trees grow along the river.',
    opts: ['drveće', 'drva', 'drveća', 'drveću'],
    answer: 'drveće',
    tip: 'gusto is neuter singular: the collective drveće. drva is firewood.',
  },
  {
    mode: 'oblik',
    q: 'Donio joj je buket ____.',
    en: 'He brought her a bouquet of flowers.',
    opts: ['cvijeća', 'cvijeće', 'cvijećem', 'cvijeću'],
    answer: 'cvijeća',
    tip: 'After buket, the genitive singular.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Lišće ____ požutjelo.',
    en: 'The leaves have turned yellow.',
    opts: ['je', 'su', 'smo', 'ste'],
    answer: 'je',
    tip: 'A collective takes a singular verb.',
  },
  {
    mode: 'slaganje',
    q: 'Grožđe je ____.',
    en: 'The grapes are sweet.',
    opts: ['slatko', 'slatki', 'slatka', 'sladak'],
    answer: 'slatko',
    tip: 'The adjective is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Kamenje ____ sklisko.',
    en: 'The stones were slippery.',
    opts: ['je bilo', 'su bili', 'je bio', 'su bila'],
    answer: 'je bilo',
    tip: 'Neuter singular: je bilo.',
  },
  {
    mode: 'slaganje',
    q: 'Cvijeće u vrtu lijepo ____.',
    en: 'The flowers in the garden smell lovely.',
    opts: ['miriše', 'mirišu', 'mirišemo', 'mirišete'],
    answer: 'miriše',
    tip: 'A singular verb for a collective subject.',
  },
  {
    mode: 'slaganje',
    q: '____ drveće uz rijeku posadio je moj djed.',
    en: 'My grandfather planted those trees over there by the river.',
    opts: ['Ono', 'Oni', 'One', 'Onaj'],
    answer: 'Ono',
    tip: 'A neuter singular demonstrative.',
  },
  {
    mode: 'slaganje',
    q: 'Grožđe je oprano. Stavi ____ u zdjelu.',
    en: 'The grapes are washed. Put them in a bowl.',
    opts: ['ga', 'ih', 'je', 'im'],
    answer: 'ga',
    tip: 'The pronoun for a neuter singular noun in the accusative.',
  },
  {
    mode: 'slaganje',
    q: '____ perje je jako meko.',
    en: 'These feathers are very soft.',
    opts: ['Ovo', 'Ovi', 'Ova', 'Ovaj'],
    answer: 'Ovo',
    tip: 'perje is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Sve je lišće ____ s grana.',
    en: 'All the leaves have fallen from the branches.',
    opts: ['opalo', 'opali', 'opala', 'opao'],
    answer: 'opalo',
    tip: 'The participle is neuter singular.',
  },

  // ── razlika ───────────────────────────────────────────────────────────────
  {
    mode: 'razlika',
    q: 'Dijete je donijelo pet suhih ____.',
    en: 'The child brought five dry leaves.',
    opts: ['listova', 'lišća', 'lišće', 'lišćeva'],
    answer: 'listova',
    tip: 'Counted leaves need the countable noun list.',
  },
  {
    mode: 'razlika',
    q: 'U vazi su tri ____.',
    en: 'There are three flowers in the vase.',
    opts: ['cvijeta', 'cvijeća', 'cvijeće', 'cvjetovi'],
    answer: 'cvijeta',
    tip: 'After tri, the countable noun in the genitive singular.',
  },
  {
    mode: 'razlika',
    q: 'U dvorištu rastu dva ____.',
    en: 'Two trees grow in the yard.',
    opts: ['stabla', 'drveća', 'drveće', 'stablo'],
    answer: 'stabla',
    tip: 'A collective cannot be counted; use stablo.',
  },
  {
    mode: 'razlika',
    q: 'Na stolu leže tri ____.',
    en: 'Three feathers are lying on the table.',
    opts: ['pera', 'perja', 'perje', 'perju'],
    answer: 'pera',
    tip: 'Counted feathers: the countable pero.',
  },
  {
    mode: 'razlika',
    q: 'Kupio je ____ za kamin.',
    en: 'He bought firewood for the fireplace.',
    opts: ['drva', 'drveće', 'drveća', 'stabla'],
    answer: 'drva',
    tip: 'drvo has two plurals: drva (firewood) and drveće (trees).',
  },
  {
    mode: 'razlika',
    q: 'Ubrali smo tri ____ grožđa.',
    en: 'We picked three bunches of grapes.',
    opts: ['grozda', 'grožđa', 'grozdovi', 'grožđe'],
    answer: 'grozda',
    tip: 'A bunch is grozd; after tri, the genitive singular.',
  },
  {
    mode: 'razlika',
    q: 'Vjetar je slomio dvije ____.',
    en: 'The wind broke two branches.',
    opts: ['grane', 'granja', 'granje', 'grana'],
    answer: 'grane',
    tip: 'Counted branches: the countable grana; after dvije, the form grane.',
  },
  {
    mode: 'razlika',
    q: 'Kupila sam pet ____ za balkon.',
    en: 'I bought five plants for the balcony.',
    opts: ['biljaka', 'bilja', 'bilje', 'biljem'],
    answer: 'biljaka',
    tip: 'Counted plants: biljka, in the genitive plural after pet.',
  },
];
