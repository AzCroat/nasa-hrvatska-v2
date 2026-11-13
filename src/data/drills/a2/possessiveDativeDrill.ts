// src/data/drills/a2/possessiveDativeDrill.ts
//
// A2 POSSESSIVE DATIVE — the drill for the `possessive-dative` lesson.
//
// The owner goes in the dative: Majka mi je liječnica. Three things go wrong: the case
// (me/ga instead of mi/mu), the place in the cluster (before je, after su), and the
// dative of a noun owner (Ani, Marku, sestri).
//
// Three modes:
//   zamjenica — which short dative pronoun
//   red       — its place in the clitic cluster
//   imenica   — a noun as the owner, and things that happened to it

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const POSSESSIVE_DATIVE_MODE_LABELS: Record<string, string> = {
  zamjenica: '👤 Zamjenica',
  red: '🔀 Red riječi',
  imenica: '🏷️ Imenica',
};

export const POSSESSIVE_DATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── zamjenica ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenica',
    q: 'Majka ____ je liječnica.',
    en: 'My mother is a doctor.',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'The owner goes in the dative: mi. me is the accusative.',
  },
  {
    mode: 'zamjenica',
    q: 'Otac ____ je kuhar.',
    en: 'His father is a cook.',
    opts: ['ga', 'on', 'mu', 'joj'],
    answer: 'mu',
    tip: 'His → the short dative of on, mu.',
  },
  {
    mode: 'zamjenica',
    q: 'Kuća ____ je na Hvaru.',
    en: 'Her house is on Hvar.',
    opts: ['ju', 'joj', 'ona', 'mu'],
    answer: 'joj',
    tip: 'Her → joj. ju is the accusative.',
  },
  {
    mode: 'zamjenica',
    q: 'Stan ____ je mali.',
    en: 'Our flat is small.',
    opts: ['nas', 'mi', 'nam', 'naš'],
    answer: 'nam',
    tip: 'Our → the short dative of mi (we), nam.',
  },
  {
    mode: 'zamjenica',
    q: 'Kako ____ je mama?',
    en: 'How is your mum? (to a friend)',
    opts: ['te', 'ti', 'tebe', 'tvoj'],
    answer: 'ti',
    tip: 'The short dative of ti is also ti.',
  },
  {
    mode: 'zamjenica',
    q: 'Kako ____ je obitelj?',
    en: 'How is your family? (polite)',
    opts: ['vas', 'Vi', 'vam', 'vaš'],
    answer: 'vam',
    tip: 'The short dative of vi is vam.',
  },
  {
    mode: 'zamjenica',
    q: 'Sin ____ je u školi.',
    en: 'Their son is at school.',
    opts: ['ih', 'im', 'oni', 'njih'],
    answer: 'im',
    tip: 'Their → im. ih is the accusative.',
  },
  {
    mode: 'zamjenica',
    q: 'Ukrali su ____ novčanik.',
    en: 'Someone stole my wallet.',
    opts: ['me', 'ja', 'moj', 'mi'],
    answer: 'mi',
    tip: 'The person it happened to is in the dative: mi.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'My parents are in Split.',
    opts: [
      'Roditelji su mi u Splitu.',
      'Roditelji mi su u Splitu.',
      'Mi su roditelji u Splitu.',
      'Roditelji u Splitu mi su.',
    ],
    answer: 'Roditelji su mi u Splitu.',
    tip: 'su comes before the dative in the cluster.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'My brother is a student.',
    opts: [
      'Brat je mi student.',
      'Mi je brat student.',
      'Brat mi je student.',
      'Brat student mi je.',
    ],
    answer: 'Brat mi je student.',
    tip: 'mi in second place, and je comes after it.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'My phone broke.',
    opts: [
      'Razbio se mi mobitel.',
      'Razbio mi se mobitel.',
      'Mi se razbio mobitel.',
      'Razbio mobitel se mi.',
    ],
    answer: 'Razbio mi se mobitel.',
    tip: 'The dative comes before se: mi se.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'Her bag fell.',
    opts: ['Pala je joj torba.', 'Joj je pala torba.', 'Pala torba joj je.', 'Pala joj je torba.'],
    answer: 'Pala joj je torba.',
    tip: 'joj in second place, je last.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'Our children are at the sea.',
    opts: [
      'Djeca nam su na moru.',
      'Djeca su nam na moru.',
      'Nam su djeca na moru.',
      'Djeca su na nam moru.',
    ],
    answer: 'Djeca su nam na moru.',
    tip: 'su before nam.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'They stole his bike.',
    opts: [
      'Ukrali mu su bicikl.',
      'Mu su ukrali bicikl.',
      'Ukrali su mu bicikl.',
      'Ukrali su bicikl mu.',
    ],
    answer: 'Ukrali su mu bicikl.',
    tip: 'su is the auxiliary and comes first in the cluster; mu follows it.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'Their grandfather died.',
    opts: ['Umro im je djed.', 'Umro je im djed.', 'Im je umro djed.', 'Umro djed im je.'],
    answer: 'Umro im je djed.',
    tip: 'im in second place, je last.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'Where is your bag? (to a friend)',
    opts: ['Gdje je ti torba?', 'Gdje ti je torba?', 'Ti je gdje torba?', 'Gdje torba ti je?'],
    answer: 'Gdje ti je torba?',
    tip: 'ti straight after gdje, then je.',
  },

  // ── imenica ───────────────────────────────────────────────────────────────
  {
    mode: 'imenica',
    q: '____ je auto u servisu.',
    en: 'Ana’s car is at the garage.',
    opts: ['Ana', 'Anu', 'Ani', 'Anom'],
    answer: 'Ani',
    tip: 'The owner in the dative: Ana → Ani.',
  },
  {
    mode: 'imenica',
    q: '____ je brat u Londonu.',
    en: 'Marko’s brother is in London.',
    opts: ['Marko', 'Marka', 'Markom', 'Marku'],
    answer: 'Marku',
    tip: 'Masculine nouns take -u in the dative: Marku.',
  },
  {
    mode: 'imenica',
    q: '____ je kći bolesna.',
    en: 'My sister’s daughter is ill.',
    opts: ['Sestra', 'Sestri', 'Sestru', 'Sestrom'],
    answer: 'Sestri',
    tip: 'sestra in the dative is sestri.',
  },
  {
    mode: 'imenica',
    q: '____ se pokvario bicikl.',
    en: 'Dad’s bike broke down.',
    opts: ['Tata', 'Tatu', 'Tati', 'Tatom'],
    answer: 'Tati',
    tip: 'tata declines like a feminine noun: dative tati.',
  },
  {
    mode: 'imenica',
    q: '____ baki je kuća na selu.',
    en: 'My grandmother’s house is in the country.',
    opts: ['Moja', 'Mojoj', 'Moju', 'Mojom'],
    answer: 'Mojoj',
    tip: 'The adjective agrees with baki in the dative: mojoj.',
  },
  {
    mode: 'imenica',
    q: 'Pala ____ je torba u more.',
    en: 'My bag fell into the sea.',
    opts: ['me', 'mi', 'moja', 'ja'],
    answer: 'mi',
    tip: 'The person it happened to is in the dative.',
  },
  {
    mode: 'imenica',
    q: 'Probušila ____ se guma.',
    en: 'His tyre went flat.',
    opts: ['ga', 'njega', 'mu', 'on'],
    answer: 'mu',
    tip: 'His → mu, before se.',
  },
  {
    mode: 'imenica',
    q: 'What does the sentence below mean?',
    lead: 'Umro joj je djed.',
    en: 'Choose the English meaning.',
    opts: [
      'Her grandfather died.',
      'My grandfather died.',
      'His grandfather died.',
      'Her grandfather is ill.',
    ],
    answer: 'Her grandfather died.',
    tip: 'joj — hers; umro je — died.',
  },
];
