// src/data/drills/c1/accusativeMeasureMannerDrill.ts
//
// C1 THE ACCUSATIVE OF MEASURE AND MANNER — the drill for `accusative-measure-manner`.
//
// Three modes:
//   trajanje — duration and repetition in the bare accusative (cijelu noć, svaku subotu)
//   mjera    — distance, price, weight, size and age, with the number rules inside
//   nacin    — na/u + accusative of manner (na brzinu) against the instrumental (svom snagom)
//
// Genitive-of-time readings (cijele noći) are never offered as wrong: the noun in each
// sentence is fixed in the accusative, so only the agreeing form can fill the blank.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ACCUSATIVE_MEASURE_MANNER_MODE_LABELS: Record<string, string> = {
  trajanje: '⏳ Trajanje',
  mjera: '📏 Mjera i cijena',
  nacin: '🏃 Način',
};

export const ACCUSATIVE_MEASURE_MANNER_DRILL_DATA: ModeDrillItem[] = [
  // ── trajanje ──────────────────────────────────────────────────────────────
  {
    mode: 'trajanje',
    q: 'Kiša je padala ____ noć.',
    en: 'It rained all night.',
    opts: ['cijelu', 'cijela', 'cijeloj', 'cijelom'],
    answer: 'cijelu',
    tip: 'Duration takes the bare accusative; noć is feminine.',
  },
  {
    mode: 'trajanje',
    q: 'Čekali smo ga ____ vremena.',
    en: 'We waited for him for an hour.',
    opts: ['sat', 'sata', 'satom', 'satu'],
    answer: 'sat',
    tip: 'sat vremena: the unit in the accusative, then a fixed genitive.',
  },
  {
    mode: 'trajanje',
    q: 'U Zadru smo ostali ____ dana.',
    en: 'We stayed in Zadar for a week.',
    opts: ['tjedan', 'tjedna', 'tjednu', 'tjednom'],
    answer: 'tjedan',
    tip: 'tjedan dana — no preposition for "for".',
  },
  {
    mode: 'trajanje',
    q: 'Pričekajte ____ minutu, molim vas.',
    en: 'Please wait a minute.',
    opts: ['jednu', 'jedna', 'jednoj', 'jednom'],
    answer: 'jednu',
    tip: 'minuta is feminine, so the accusative is jednu minutu.',
  },
  {
    mode: 'trajanje',
    q: '____ subotu idemo na tržnicu.',
    en: 'Every Saturday we go to the market.',
    opts: ['Svaku', 'Svaka', 'Svakoj', 'Svakom'],
    answer: 'Svaku',
    tip: 'Repetition takes the accusative: svaku subotu.',
  },
  {
    mode: 'trajanje',
    q: 'Za taj je ispit učila ____ godinu.',
    en: 'She studied for that exam for a whole year.',
    opts: ['cijelu', 'cijela', 'cijeloj', 'cijelom'],
    answer: 'cijelu',
    tip: 'godina is feminine: cijelu godinu.',
  },
  {
    mode: 'trajanje',
    q: 'Sastanak je trajao ____ sata.',
    en: 'The meeting lasted two hours.',
    opts: ['dva', 'dvoje', 'dvama', 'dvaju'],
    answer: 'dva',
    tip: 'dva sata — the numeral does not change, the noun is in the genitive singular.',
  },
  {
    mode: 'trajanje',
    q: 'Ostao je u bolnici ____ dana.',
    en: 'He stayed in hospital for a month.',
    opts: ['mjesec', 'mjeseca', 'mjesecu', 'mjesecom'],
    answer: 'mjesec',
    tip: 'mjesec dana — like tjedan dana.',
  },

  // ── mjera ─────────────────────────────────────────────────────────────────
  {
    mode: 'mjera',
    q: 'Do posla pješačim tri ____.',
    en: 'I walk three kilometres to work.',
    opts: ['kilometra', 'kilometre', 'kilometar', 'kilometara'],
    answer: 'kilometra',
    tip: 'After tri, the genitive singular.',
  },
  {
    mode: 'mjera',
    q: 'Prepješačili smo dvadeset ____.',
    en: 'We hiked twenty kilometres.',
    opts: ['kilometara', 'kilometra', 'kilometre', 'kilometrima'],
    answer: 'kilometara',
    tip: 'After twenty, the genitive plural.',
  },
  {
    mode: 'mjera',
    q: 'Novi laptop košta ____ eura.',
    en: 'The new laptop costs a thousand euros.',
    opts: ['tisuću', 'tisuća', 'tisuće', 'tisući'],
    answer: 'tisuću',
    tip: 'Price takes the accusative, and tisuća is a feminine noun.',
  },
  {
    mode: 'mjera',
    q: 'Kava ovdje košta dva ____.',
    en: 'Coffee here costs two euros.',
    opts: ['eura', 'euro', 'eure', 'eurima'],
    answer: 'eura',
    tip: 'After dva, the genitive singular.',
  },
  {
    mode: 'mjera',
    q: 'Kofer teži dvadeset ____.',
    en: 'The suitcase weighs twenty kilograms.',
    opts: ['kilograma', 'kilogram', 'kilograme', 'kilogramima'],
    answer: 'kilograma',
    tip: 'After twenty, the genitive plural.',
  },
  {
    mode: 'mjera',
    q: 'Zid je visok dva ____.',
    en: 'The wall is two metres high.',
    opts: ['metra', 'metar', 'metre', 'metara'],
    answer: 'metra',
    tip: 'After dva, the genitive singular.',
  },
  {
    mode: 'mjera',
    q: 'Baka je stara devedeset ____.',
    en: 'Grandma is ninety years old.',
    opts: ['godina', 'godine', 'godinu', 'godinama'],
    answer: 'godina',
    tip: 'After devedeset, the genitive plural.',
  },
  {
    mode: 'mjera',
    q: 'Kamion teži jednu ____.',
    en: 'The lorry weighs one tonne.',
    opts: ['tonu', 'tona', 'toni', 'tone'],
    answer: 'tonu',
    tip: 'Weight in the accusative; tona is feminine.',
  },
  {
    mode: 'mjera',
    q: 'Kuća je udaljena pet ____ od mora.',
    en: 'The house is five minutes from the sea.',
    opts: ['minuta', 'minute', 'minutu', 'minutama'],
    answer: 'minuta',
    tip: 'After pet, the genitive plural.',
  },

  // ── nacin ─────────────────────────────────────────────────────────────────
  {
    mode: 'nacin',
    q: 'Ručak smo pojeli na ____.',
    en: 'We ate lunch in a hurry.',
    opts: ['brzinu', 'brzini', 'brzina', 'brzinom'],
    answer: 'brzinu',
    tip: 'na + accusative of manner.',
  },
  {
    mode: 'nacin',
    q: 'Stigli smo točno na ____.',
    en: 'We arrived exactly on time.',
    opts: ['vrijeme', 'vremenu', 'vremena', 'vremenom'],
    answer: 'vrijeme',
    tip: 'na + accusative; vrijeme is neuter, so the accusative is the same as the nominative.',
  },
  {
    mode: 'nacin',
    q: 'Zaljubio se na prvi ____.',
    en: 'He fell in love at first sight.',
    opts: ['pogled', 'pogledu', 'pogleda', 'pogledom'],
    answer: 'pogled',
    tip: 'na + accusative of an inanimate masculine noun.',
  },
  {
    mode: 'nacin',
    q: 'Izračun se slaže u ____.',
    en: 'The calculation matches to a hair.',
    opts: ['dlaku', 'dlaci', 'dlake', 'dlakom'],
    answer: 'dlaku',
    tip: 'u + accusative in a fixed phrase: exactly.',
  },
  {
    mode: 'nacin',
    q: 'Trčao je ____ snagom.',
    en: 'He ran with all his strength.',
    opts: ['svom', 'svu', 'sav', 'svoj'],
    answer: 'svom',
    tip: 'This is the INSTRUMENTAL of manner, with no preposition: svom snagom.',
  },
  {
    mode: 'nacin',
    q: 'Vlak je jurio punom ____.',
    en: 'The train was rushing at full steam.',
    opts: ['parom', 'paru', 'para', 'pari'],
    answer: 'parom',
    tip: 'Manner without a preposition is the instrumental.',
  },
  {
    mode: 'nacin',
    q: 'Na ____, nitko nije ozlijeđen.',
    en: 'Luckily, no one was hurt.',
    opts: ['sreću', 'sreći', 'sreća', 'srećom'],
    answer: 'sreću',
    tip: 'na + accusative: na sreću.',
  },
  {
    mode: 'nacin',
    q: 'Djeca su u jedan ____ viknula: „Bravo!“',
    en: 'The children shouted in unison: "Bravo!"',
    opts: ['glas', 'glasu', 'glasa', 'glasom'],
    answer: 'glas',
    tip: 'u + accusative: u jedan glas.',
  },
];
