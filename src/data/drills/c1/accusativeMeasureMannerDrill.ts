// src/data/drills/c1/accusativeMeasureMannerDrill.ts
//
// C1 THE ACCUSATIVE OF MEASURE AND MANNER — the drill for `accusative-measure-manner`.
//
// Three modes:
//   kolicina — quantity and price: litru vina, po milijun eura, za jedan euro (workbook p. 20–21).
//              Duration and repetition (cijelu noć, svake subote) are NOT drilled here: they
//              belong to the temporal accusative, taught later in `temporal-accusative`.
//   mjera    — distance, price, weight, size and age, with the number rules inside
//   nacin    — na/u + accusative of manner (na brzinu) against the instrumental (svom snagom)
//

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ACCUSATIVE_MEASURE_MANNER_MODE_LABELS: Record<string, string> = {
  kolicina: '🍷 Količina, po i za',
  mjera: '📏 Mjera i cijena',
  nacin: '🏃 Način',
};

export const ACCUSATIVE_MEASURE_MANNER_DRILL_DATA: ModeDrillItem[] = [
  // ── kolicina ──────────────────────────────────────────────────────────────
  {
    mode: 'kolicina',
    q: 'Kupili su ____ vina za večeru.',
    en: 'They bought a litre of wine for dinner.',
    opts: ['litru', 'litra', 'litri', 'litrom'],
    answer: 'litru',
    tip: 'A quantity in the bare accusative: litru vina.',
  },
  {
    mode: 'kolicina',
    q: 'Popili su ____ rakije.',
    en: 'They drank a bottle of rakija.',
    opts: ['bocu', 'boca', 'boci', 'bocom'],
    answer: 'bocu',
    tip: 'The amount is an accusative of measure; boca is feminine, so bocu.',
  },
  {
    mode: 'kolicina',
    q: 'Daj mi ____ vode, molim te.',
    en: 'Give me a glass of water, please.',
    opts: ['čašu', 'čaša', 'čaši', 'čašom'],
    answer: 'čašu',
    tip: 'How much water? čašu vode — accusative of measure.',
  },
  {
    mode: 'kolicina',
    q: 'Pojedi ____ juhe, molim te.',
    en: 'Eat a plateful of soup, please.',
    opts: ['tanjur', 'tanjura', 'tanjuru', 'tanjurom'],
    answer: 'tanjur',
    tip: 'tanjur is masculine and inanimate: the accusative is the same as the nominative.',
  },
  {
    mode: 'kolicina',
    q: 'Te kuće koštaju po ____ eura.',
    en: 'Those houses cost a million euros each.',
    opts: ['milijun', 'milijuna', 'milijunu', 'milijunom'],
    answer: 'milijun',
    tip: 'po + accusative gives the price of each of several things: po milijun eura.',
  },
  {
    mode: 'kolicina',
    q: 'Ulaznice su prodavali po ____ eura.',
    en: 'They sold the tickets at a thousand euros each.',
    opts: ['tisuću', 'tisući', 'tisućom', 'tisućama'],
    answer: 'tisuću',
    tip: 'po + accusative for a price per item; tisuća is feminine, so tisuću.',
  },
  {
    mode: 'kolicina',
    q: 'Za ____ euro danas ne možeš ništa kupiti.',
    en: 'For one euro you cannot buy anything today.',
    opts: ['jedan', 'jednog', 'jednom', 'jednim'],
    answer: 'jedan',
    tip: 'za + accusative gives the price of a single thing; euro is inanimate, so jedan.',
  },
  {
    mode: 'kolicina',
    q: 'Ne bih prodao vikendicu ni po ____ cijenu.',
    en: 'I would not sell the holiday house at any price.',
    opts: ['koju', 'koja', 'kojoj', 'kojom'],
    answer: 'koju',
    tip: 'po + accusative of price: ni po koju cijenu.',
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
    q: 'Kupili smo stan na ____.',
    en: 'We bought the flat on credit.',
    opts: ['kredit', 'kreditu', 'kredita', 'kreditom'],
    answer: 'kredit',
    tip: 'A fixed manner phrase: na kredit, na rate — na + accusative.',
  },
  {
    mode: 'nacin',
    q: 'Šetali su uz more ruku pod ____.',
    en: 'They walked along the sea arm in arm.',
    opts: ['ruku', 'rukom', 'ruci', 'ruka'],
    answer: 'ruku',
    tip: 'A fixed manner accusative: ruku pod ruku, like rame uz rame and oči u oči.',
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
