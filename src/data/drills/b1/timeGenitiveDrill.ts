// src/data/drills/b1/timeGenitiveDrill.ts
//
// B1 TIME IN THE GENITIVE — the drill for the `time-genitive` lesson.
//
// Prošle godine, svakog dana, petog ožujka: no preposition, both words in the
// genitive. The errors are the English nominative ("Prošla godina sam…"), a
// preposition in front ("u prošle godine"), the masculine ending on a feminine noun
// ("prošlog godine") and a nominative ordinal in a date. The accusative alternatives
// that Croatian also accepts (svaki dan, idući tjedan) never stand as distractors.
//
// Three modes:
//   proslost — last, that, one: memories
//   svaki    — every, this, next
//   datum    — dates

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TIME_GENITIVE_MODE_LABELS: Record<string, string> = {
  proslost: '📷 Sjećanja',
  svaki: '🔁 Svaki, ovaj, idući',
  datum: '📅 Datumi',
};

export const TIME_GENITIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── proslost ──────────────────────────────────────────────────────────────
  {
    mode: 'proslost',
    q: '____ sam bio u Dubrovniku.',
    en: 'Last year I was in Dubrovnik.',
    opts: ['Prošle godine', 'Prošla godina', 'Prošlog godine', 'U prošle godine'],
    answer: 'Prošle godine',
    tip: 'Godina is feminine: both words take -e, and no preposition.',
  },
  {
    mode: 'proslost',
    q: '____ smo bili na Visu.',
    en: 'Last summer we were on Vis.',
    opts: ['Prošlog ljeta', 'Prošlom ljetu', 'Prošle ljeta', 'Na prošlog ljeta'],
    answer: 'Prošlog ljeta',
    tip: 'Ljeto is neuter: prošlog ljeta.',
  },
  {
    mode: 'proslost',
    q: '____ je padao snijeg cijeli tjedan.',
    en: 'That winter it snowed for a whole week.',
    opts: ['Te zime', 'Ta zima', 'Tog zime', 'Toj zimi'],
    answer: 'Te zime',
    tip: 'Zima is feminine: te zime.',
  },
  {
    mode: 'proslost',
    q: '____ sam na tržnici srela svoju učiteljicu.',
    en: 'One day I met my teacher at the market.',
    opts: ['Jednog dana', 'Jedan dana', 'Jednom danu', 'Jedne dana'],
    answer: 'Jednog dana',
    tip: 'Dan is masculine: jednog dana.',
  },
  {
    mode: 'proslost',
    q: '____ nisam mogao spavati.',
    en: 'That night I couldn’t sleep.',
    opts: ['Te noći', 'Ta noć', 'Tog noći', 'Toj noći'],
    answer: 'Te noći',
    tip: 'Noć is feminine: te noći.',
  },
  {
    mode: 'proslost',
    q: '____ nitko nije bio na plaži.',
    en: 'That morning nobody was on the beach.',
    opts: ['Tog jutra', 'Ta jutra', 'Te jutra', 'Tom jutru'],
    answer: 'Tog jutra',
    tip: 'Jutro is neuter: tog jutra.',
  },
  {
    mode: 'proslost',
    q: '____ sam se preselila u Rijeku.',
    en: 'Last year I moved to Rijeka.',
    opts: ['Prošle godine', 'Prošloj godini', 'Prošlu godinom', 'U prošle godine'],
    answer: 'Prošle godine',
    tip: 'No preposition, feminine genitive.',
  },
  {
    mode: 'proslost',
    q: '____ imam jako puno posla.',
    en: 'These days I have a lot of work.',
    opts: ['Ovih dana', 'Ovi dana', 'Ovim danima', 'Ovog dani'],
    answer: 'Ovih dana',
    tip: 'A plural time phrase: the adjective ends in -ih.',
  },

  // ── svaki ─────────────────────────────────────────────────────────────────
  {
    mode: 'svaki',
    q: '____ baka dolazi k nama na more.',
    en: 'Every year Grandma comes to stay with us at the seaside.',
    opts: ['Svake godine', 'Svakog godine', 'Svaka godina', 'Svakoj godini'],
    answer: 'Svake godine',
    tip: 'Godina is feminine: svake godine.',
  },
  {
    mode: 'svaki',
    q: 'Baka nam je pričala priče ____.',
    en: 'Grandma told us stories every evening.',
    opts: ['svake večeri', 'svakog večeri', 'svaka večer', 'svakoj večeri'],
    answer: 'svake večeri',
    tip: 'Večer is feminine, like noć.',
  },
  {
    mode: 'svaki',
    q: '____ plivam u moru.',
    en: 'Every morning I swim in the sea.',
    opts: ['Svakog jutra', 'Svake jutra', 'Svakom jutru', 'Svako jutra'],
    answer: 'Svakog jutra',
    tip: 'Jutro is neuter: svakog jutra.',
  },
  {
    mode: 'svaki',
    q: 'Vidimo se ____.',
    en: 'See you next week.',
    opts: ['idućeg tjedna', 'idući tjedna', 'iduće tjedna', 'idućem tjednu'],
    answer: 'idućeg tjedna',
    tip: 'Tjedan is masculine: idućeg tjedna (tjedan loses its fleeting a).',
  },
  {
    mode: 'svaki',
    q: '____ dolaze nam gosti iz Kanade.',
    en: 'Next month we have guests coming from Canada.',
    opts: ['Sljedećeg mjeseca', 'Sljedećog mjeseca', 'Sljedeći mjeseca', 'Sljedećem mjesecu'],
    answer: 'Sljedećeg mjeseca',
    tip: 'After the soft ć the ending is spelt -eg.',
  },
  {
    mode: 'svaki',
    q: '____ idemo na skijanje.',
    en: 'This winter we are going skiing.',
    opts: ['Ove zime', 'Ova zima', 'Ovog zime', 'Ovoj zimi'],
    answer: 'Ove zime',
    tip: 'Zima is feminine: ove zime.',
  },
  {
    mode: 'svaki',
    q: '____ želim upisati fakultet.',
    en: 'Next year I want to enrol at university.',
    opts: ['Iduće godine', 'Idućeg godine', 'Iduća godina', 'U iduće godine'],
    answer: 'Iduće godine',
    tip: 'Feminine genitive, no preposition.',
  },
  {
    mode: 'svaki',
    q: '____ ljeta idemo na Hvar.',
    en: 'This summer we are going to Hvar.',
    opts: ['Ovog', 'Ove', 'Ovo', 'Ovom'],
    answer: 'Ovog',
    tip: 'Ljeto is neuter, so the masculine/neuter genitive: ovog.',
  },

  // ── datum ─────────────────────────────────────────────────────────────────
  {
    mode: 'datum',
    q: 'Rođena sam ____ ožujka.',
    en: 'I was born on the fifth of March.',
    opts: ['petog', 'peti', 'petom', 'peta'],
    answer: 'petog',
    tip: 'In a date the ordinal goes into the genitive.',
  },
  {
    mode: 'datum',
    q: 'Praznik rada slavi se ____ svibnja.',
    en: 'Labour Day is celebrated on the first of May.',
    opts: ['prvog', 'prvi', 'prvom', 'prva'],
    answer: 'prvog',
    tip: 'Ordinal in the genitive, month in the genitive.',
  },
  {
    mode: 'datum',
    q: 'Božić je dvadeset petog ____.',
    en: 'Christmas is on the twenty-fifth of December.',
    opts: ['prosinca', 'prosinac', 'prosincu', 'prosinci'],
    answer: 'prosinca',
    tip: 'Prosinac loses its fleeting a in the genitive.',
  },
  {
    mode: 'datum',
    q: 'Moj brat je rođen dvadesetog ____.',
    en: 'My brother was born on the twentieth of April.',
    opts: ['travnja', 'travanj', 'travnju', 'travanja'],
    answer: 'travnja',
    tip: 'Travanj loses its fleeting a: travnja.',
  },
  {
    mode: 'datum',
    q: 'Dan državnosti slavi se tridesetog ____.',
    en: 'Statehood Day is celebrated on the thirtieth of May.',
    opts: ['svibnja', 'svibanj', 'svibnju', 'svibanja'],
    answer: 'svibnja',
    tip: 'Svibanj → svibnja in the genitive.',
  },
  {
    mode: 'datum',
    q: 'Which sentence is correct?',
    en: 'Choose the correct sentence.',
    opts: [
      'Rođen sam trećeg siječnja.',
      'Rođen sam treći siječnja.',
      'Rođen sam na trećeg siječnja.',
      'Rođen sam trećem siječnju.',
    ],
    answer: 'Rođen sam trećeg siječnja.',
    tip: 'A date takes no preposition, and the ordinal is genitive.',
  },
  {
    mode: 'datum',
    q: 'Nova godina je ____ siječnja.',
    en: 'New Year’s Day is on the first of January.',
    opts: ['prvog', 'prvi', 'prva', 'prvom'],
    answer: 'prvog',
    tip: 'Ordinal in the genitive: prvog siječnja.',
  },
  {
    mode: 'datum',
    q: 'Which sentence is correct?',
    en: 'Choose the correct sentence.',
    opts: [
      'Vjenčali su se dvanaestog listopada.',
      'Vjenčali su se dvanaesti listopada.',
      'Vjenčali su se dvanaestog listopad.',
      'Vjenčali su se u dvanaestog listopada.',
    ],
    answer: 'Vjenčali su se dvanaestog listopada.',
    tip: 'Both the ordinal and the month in the genitive, no preposition.',
  },
];
