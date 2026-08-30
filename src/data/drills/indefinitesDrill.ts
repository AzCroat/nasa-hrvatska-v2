// src/data/drills/indefinitesDrill.ts
//
// A2 SOMEONE, NO ONE, EVERYONE — the drill for the `indefinites` lesson.
//
// The pool's `neodredjene` (B2) is the same subject, gated two levels above the
// lesson and tagged `word-order`, a category routed to `wordorderdrill` for A1.
// Gated and claimed, so a new A2 bank with its own category.
//
// What makes this teachable rather than a vocabulary list is that it is a GRID:
// three prefixes on the question words, and once the prefix is known the whole
// row follows.
//
//   ne- = some · ni- = no · sv- = every
//   tko → netko / nitko / svatko
//   što → nešto / ništa / svašta
//   gdje → negdje / nigdje / svugdje
//
// Two rules do the real work:
//
//   THE NI- FAMILY DEMANDS A NEGATED VERB. *Nitko ne zna* — literally "nobody
//   doesn't know", and it is the only correct form. English forbids the double
//   negative and Croatian requires it, so this needs drilling rather than
//   explaining once.
//
//   THEY DECLINE. *Ne vidim nikoga*, *Ne dam nikome*. Learners treat them as
//   fixed words because the English ones are, and then produce *Ne vidim
//   nitko*.
//
// *Neki* and *svaki* are ADJECTIVES, not members of the grid — they agree with
// a noun (*svaki dan*, *neka žena*), and confusing them with *netko*/*svatko*
// is the other predictable slip.
//
// Three modes:
//   mreza    — the grid, and reading a row off its prefix
//   nijekanje — the negative concord
//   oblici   — declension, and neki / svaki / bilo

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const INDEFINITES_MODE_LABELS: Record<string, string> = {
  mreza: '🔲 Mreža',
  nijekanje: '🚫 Dvostruka negacija',
  oblici: '🔀 Oblici',
};

export const INDEFINITES_DRILL_DATA: ModeDrillItem[] = [
  // ── mreza ─────────────────────────────────────────────────────────────────
  {
    mode: 'mreza',
    q: 'Što znači prefiks "ne-" u ovoj skupini?',
    en: 'What does ne- mean here?',
    opts: ['neki, some', 'nijedan', 'svaki', 'ništa'],
    answer: 'neki, some',
    tip: 'netko, nešto, negdje — the some- row.',
  },
  {
    mode: 'mreza',
    q: 'Što znači prefiks "ni-"?',
    en: 'What does ni- mean?',
    opts: ['nijedan, no', 'neki', 'svaki', 'bilo koji'],
    answer: 'nijedan, no',
    tip: 'nitko, ništa, nigdje — the no- row, and the one with the verb rule.',
  },
  {
    mode: 'mreza',
    q: 'Što znači prefiks "sv-"?',
    en: 'What does sv- mean?',
    opts: ['svaki, every', 'neki', 'nijedan', 'malo'],
    answer: 'svaki, every',
    tip: 'svatko, svašta, svugdje.',
  },
  {
    mode: 'mreza',
    q: 'Someone is at the door: ____ je na vratima.',
    en: 'Someone is at the door.',
    opts: ['Netko', 'Nitko', 'Svatko', 'Nešto'],
    answer: 'Netko',
    tip: 'ne- plus tko.',
  },
  {
    mode: 'mreza',
    q: '____ to zna. (everyone)',
    en: 'Everyone knows that.',
    opts: ['Svatko', 'Netko', 'Nitko', 'Svašta'],
    answer: 'Svatko',
    tip: 'And svatko takes a singular verb, like English "everyone".',
  },
  {
    mode: 'mreza',
    q: 'Imam ____ za tebe. (something)',
    en: 'I have something for you.',
    opts: ['nešto', 'ništa', 'svašta', 'netko'],
    answer: 'nešto',
    tip: 'ne- plus što.',
  },
  {
    mode: 'mreza',
    q: 'Ključevi su ____. (somewhere)',
    en: 'The keys are somewhere.',
    opts: ['negdje', 'nigdje', 'svugdje', 'nekad'],
    answer: 'negdje',
    tip: 'The grid extends to place, time and manner: negdje, nekad, nekako.',
  },
  {
    mode: 'mreza',
    q: 'Na čemu se gradi cijela mreža?',
    en: 'What is the grid built on?',
    opts: ['na upitnim riječima', 'na glagolima', 'na padežima', 'na rodu'],
    answer: 'na upitnim riječima',
    tip: 'tko, što, gdje, kad, kako — a prefix on each and the row is done.',
  },

  // ── nijekanje ─────────────────────────────────────────────────────────────
  {
    mode: 'nijekanje',
    q: 'Nitko ____ zna.',
    en: 'Nobody knows.',
    opts: ['ne', 'je', 'se', '—'],
    answer: 'ne',
    tip: 'THE NI- FAMILY DEMANDS A NEGATED VERB. Nitko ne zna, always.',
  },
  {
    mode: 'nijekanje',
    q: 'Zašto je "Nitko zna" pogrešno?',
    en: 'Why is that wrong?',
    opts: [
      'ni- riječi traže "ne" uz glagol',
      'red riječi je kriv',
      'nedostaje zamjenica',
      'nije pogrešno',
    ],
    answer: 'ni- riječi traže "ne" uz glagol',
    tip: 'English forbids the double negative; Croatian requires it.',
  },
  {
    mode: 'nijekanje',
    q: 'Ništa ____ razumijem.',
    en: 'I understand nothing.',
    opts: ['ne', 'je', 'sam', '—'],
    answer: 'ne',
    tip: 'Same rule for ništa.',
  },
  {
    mode: 'nijekanje',
    q: 'Nigdje ____ mogu naći ključeve.',
    en: 'I cannot find the keys anywhere.',
    opts: ['ne', 'se', 'je', '—'],
    answer: 'ne',
    tip: 'And it holds for the place and time words too.',
  },
  {
    mode: 'nijekanje',
    q: 'Koliko negacija smije stajati u jednoj hrvatskoj rečenici?',
    en: 'How many negatives may a Croatian sentence carry?',
    opts: ['koliko treba', 'najviše jedna', 'najviše dvije', 'nijedna'],
    answer: 'koliko treba',
    tip: 'Nikad nikome ništa ne govorim is perfectly good Croatian.',
  },
  {
    mode: 'nijekanje',
    q: 'Traži li "netko" niječni glagol?',
    en: 'Does netko need a negated verb?',
    opts: ['ne', 'da', 'samo u pitanju', 'ovisi'],
    answer: 'ne',
    tip: 'Only the ni- row. Netko zna is fine.',
  },
  {
    mode: 'nijekanje',
    q: 'Nikad ____ kasnim.',
    en: 'I am never late.',
    opts: ['ne', 'se', 'sam', '—'],
    answer: 'ne',
    tip: 'nikad belongs to the ni- family and behaves like the rest of it.',
  },
  {
    mode: 'nijekanje',
    q: 'Koja je rečenica točna?',
    en: 'Which is correct?',
    opts: ['Nitko ništa ne zna.', 'Nitko ništa zna.', 'Netko ništa ne zna.', 'Nitko nešto ne zna.'],
    answer: 'Nitko ništa ne zna.',
    tip: 'Two ni- words and the negated verb — three negatives, one meaning.',
  },

  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ne vidim ____. (nitko)',
    en: 'I see nobody.',
    opts: ['nikoga', 'nitko', 'nikome', 'nikim'],
    answer: 'nikoga',
    tip: 'THEY DECLINE. Accusative of nitko is nikoga.',
  },
  {
    mode: 'oblici',
    q: 'Ne dam ovo ____. (nitko)',
    en: 'I am giving this to nobody.',
    opts: ['nikome', 'nikoga', 'nitko', 'nikim'],
    answer: 'nikome',
    tip: 'Dative — dati takes it.',
  },
  {
    mode: 'oblici',
    q: 'Ne bojim se ____. (ništa)',
    en: 'I am afraid of nothing.',
    opts: ['ničega', 'ništa', 'ničemu', 'ničim'],
    answer: 'ničega',
    tip: 'Bojati se takes the genitive, and ništa has one.',
  },
  {
    mode: 'oblici',
    q: 'Zašto učenici griješe ovdje?',
    en: 'Why is this a common slip?',
    opts: ['engleske riječi se ne mijenjaju', 'oblici su rijetki', 'nema pravila', 'ne griješe'],
    answer: 'engleske riječi se ne mijenjaju',
    tip: 'Nobody and nothing are fixed in English, so learners freeze them here too.',
  },
  {
    mode: 'oblici',
    q: 'Vidim ____ ženu. (some)',
    en: 'I see some woman.',
    opts: ['neku', 'netko', 'nekoga', 'neka'],
    answer: 'neku',
    tip: 'NEKI IS AN ADJECTIVE — it agrees with the noun, accusative feminine here.',
  },
  {
    mode: 'oblici',
    q: 'Radim ____ dan. (every)',
    en: 'I work every day.',
    opts: ['svaki', 'svatko', 'svakog', 'svako'],
    answer: 'svaki',
    tip: 'svaki is an adjective too. Svatko is the pronoun.',
  },
  {
    mode: 'oblici',
    q: 'Po čemu se "svaki" razlikuje od "svatko"?',
    en: 'svaki against svatko:',
    opts: [
      'svaki ide uz imenicu, svatko stoji sam',
      'svaki je formalniji',
      'isto su',
      'svatko je množina',
    ],
    answer: 'svaki ide uz imenicu, svatko stoji sam',
    tip: 'Adjective against pronoun — the same split as neki against netko.',
  },
  {
    mode: 'oblici',
    q: 'Nazovi ____. (anyone at all)',
    en: 'Call anyone at all.',
    opts: ['bilo koga', 'nikoga', 'nekoga', 'svakoga'],
    answer: 'bilo koga',
    tip: 'bilo tko, bilo što, bilo gdje — and bilo declines with the word after it.',
  },
];
