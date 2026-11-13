// src/data/drills/a1/nationalitiesDrill.ts
//
// A1 NATIONALITIES — the drill for the `nationalities` lesson.
//
// Three modes:
//   zena    — the female form: -ica, -ka or -kinja, learned with the word
//   jezik   — the language: -ski and a SMALL letter, never the person or the country
//   skupine — groups: Hrvati, Hrvatice; a mixed group takes the male plural
//
// No masculine form in -ac is put in the plural here (Amerikanci, Nijemci): the
// fleeting a is lesson 21.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NATIONALITIES_MODE_LABELS: Record<string, string> = {
  zena: '👩 Žena',
  jezik: '🗣️ Jezik',
  skupine: '👥 Skupine',
};

export const NATIONALITIES_DRILL_DATA: ModeDrillItem[] = [
  // ── zena ────────────────────────────────────────────────────────────────
  {
    mode: 'zena',
    q: 'Hrvat → ____',
    en: 'a Croatian woman',
    opts: ['Hrvatka', 'Hrvatica', 'Hrvatska', 'Hrvatkinja'],
    answer: 'Hrvatica',
    tip: 'Hrvat → Hrvatica. Hrvatska is the country.',
  },
  {
    mode: 'zena',
    q: 'Talijan → ____',
    en: 'an Italian woman',
    opts: ['Talijanica', 'Talijanka', 'Talijankinja', 'Italija'],
    answer: 'Talijanka',
    tip: 'Talijan → Talijanka.',
  },
  {
    mode: 'zena',
    q: 'Englez → ____',
    en: 'an Englishwoman',
    opts: ['Englezica', 'Englezka', 'Engleskinja', 'Engleska'],
    answer: 'Engleskinja',
    tip: 'Englez → Engleskinja, with -kinja.',
  },
  {
    mode: 'zena',
    q: 'Francuz → ____',
    en: 'a Frenchwoman',
    opts: ['Francuskinja', 'Francuzica', 'Francuzka', 'Francuska'],
    answer: 'Francuskinja',
    tip: 'Francuz → Francuskinja, like Engleskinja.',
  },
  {
    mode: 'zena',
    q: 'Nijemac → ____',
    en: 'a German woman',
    opts: ['Nijemka', 'Nijemica', 'Njemica', 'Njemačka'],
    answer: 'Njemica',
    tip: 'Nijemac loses its i: Njemica.',
  },
  {
    mode: 'zena',
    q: 'Mađar → ____',
    en: 'a Hungarian woman',
    opts: ['Mađarka', 'Mađarica', 'Mađarska', 'Mađarkinja'],
    answer: 'Mađarica',
    tip: 'Mađar → Mađarica, like Hrvatica.',
  },
  {
    mode: 'zena',
    q: 'Amerikanac → ____',
    en: 'an American woman',
    opts: ['Amerikanka', 'Amerikanica', 'Amerika', 'Amerikankinja'],
    answer: 'Amerikanka',
    tip: '-ac goes, -ka comes: Amerikanka.',
  },
  {
    mode: 'zena',
    q: 'Kanađanin → ____',
    en: 'a Canadian woman',
    opts: ['Kanađanica', 'Kanađaninka', 'Kanada', 'Kanađanka'],
    answer: 'Kanađanka',
    tip: '-in goes, -ka comes: Kanađanka.',
  },
  {
    mode: 'zena',
    q: 'Slovenac → ____',
    en: 'a Slovenian woman',
    opts: ['Slovenka', 'Slovenica', 'Slovenija', 'Slovenkinja'],
    answer: 'Slovenka',
    tip: 'Slovenac → Slovenka.',
  },
  // ── jezik ───────────────────────────────────────────────────────────────
  {
    mode: 'jezik',
    q: 'Govorim ____.',
    en: 'I speak Croatian.',
    opts: ['Hrvatski', 'Hrvat', 'hrvatski', 'Hrvatska'],
    answer: 'hrvatski',
    tip: 'A language takes a small letter.',
  },
  {
    mode: 'jezik',
    q: 'Govorim ____.',
    en: 'I speak German.',
    opts: ['Njemica', 'njemački', 'Njemački', 'Njemačka'],
    answer: 'njemački',
    tip: 'Language: -čki here, and a small letter.',
  },
  {
    mode: 'jezik',
    q: 'Govorim ____ i malo hrvatski.',
    en: 'I speak English and a little Croatian.',
    opts: ['Englez', 'Engleski', 'Engleska', 'engleski'],
    answer: 'engleski',
    tip: 'Small letter, -ski.',
  },
  {
    mode: 'jezik',
    q: 'Which is spelled correctly?',
    en: 'I am Croatian and I speak Croatian. (a man)',
    opts: [
      'Ja sam hrvat i govorim hrvatski.',
      'Ja sam Hrvat i govorim Hrvatski.',
      'Ja sam hrvat i govorim Hrvatski.',
      'Ja sam Hrvat i govorim hrvatski.',
    ],
    answer: 'Ja sam Hrvat i govorim hrvatski.',
    tip: 'Capital for the person, small letter for the language.',
  },
  {
    mode: 'jezik',
    q: 'Govorim ____.',
    en: 'I speak French.',
    opts: ['francuski', 'Francuz', 'Francuska', 'Francuski'],
    answer: 'francuski',
    tip: 'francuski, with a small letter.',
  },
  {
    mode: 'jezik',
    q: 'Ana je ____.',
    en: 'Ana is Croatian.',
    opts: ['Hrvatska', 'hrvatski', 'Hrvat', 'Hrvatica'],
    answer: 'Hrvatica',
    tip: 'A person is never the country or the language.',
  },
  {
    mode: 'jezik',
    q: 'Govorim ____.',
    en: 'I speak Hungarian.',
    opts: ['Mađar', 'Mađarski', 'mađarski', 'Mađarska'],
    answer: 'mađarski',
    tip: 'mađarski, small letter.',
  },
  {
    mode: 'jezik',
    q: 'Marko je ____.',
    en: 'Marko is Italian.',
    opts: ['talijanski', 'Talijan', 'Italija', 'Talijanka'],
    answer: 'Talijan',
    tip: 'Marko is a man: Talijan.',
  },
  // ── skupine ─────────────────────────────────────────────────────────────
  {
    mode: 'skupine',
    q: 'Ivan i Ana su ____.',
    en: 'Ivan and Ana are Croatians.',
    opts: ['Hrvatice', 'Hrvati', 'Hrvat', 'Hrvatska'],
    answer: 'Hrvati',
    tip: 'A mixed group: the male plural.',
  },
  {
    mode: 'skupine',
    q: 'Ana i Maja su ____.',
    en: 'Ana and Maja are Croatians.',
    opts: ['Hrvati', 'Hrvatica', 'Hrvatice', 'Hrvat'],
    answer: 'Hrvatice',
    tip: 'Two women: Hrvatica → Hrvatice.',
  },
  {
    mode: 'skupine',
    q: 'Oni su ____.',
    en: 'They (men) are Italians.',
    opts: ['Talijani', 'Talijanke', 'Talijan', 'talijanski'],
    answer: 'Talijani',
    tip: 'Talijan + -i.',
  },
  {
    mode: 'skupine',
    q: 'One su ____.',
    en: 'They (women) are German.',
    opts: ['Njemica', 'Nijemac', 'Njemice', 'njemački'],
    answer: 'Njemice',
    tip: 'Njemica → Njemice.',
  },
  {
    mode: 'skupine',
    q: 'Oni su ____.',
    en: 'They (men) are Canadians.',
    opts: ['Kanađanini', 'Kanađanke', 'Kanađanin', 'Kanađani'],
    answer: 'Kanađani',
    tip: '-in drops in the plural: Kanađani.',
  },
  {
    mode: 'skupine',
    q: 'One su ____.',
    en: 'They (women) are English.',
    opts: ['Englezi', 'Engleskinje', 'Engleskinja', 'Englez'],
    answer: 'Engleskinje',
    tip: 'Engleskinja → Engleskinje.',
  },
  {
    mode: 'skupine',
    q: 'Pierre i Marie su ____.',
    en: 'Pierre and Marie are French.',
    opts: ['Francuskinje', 'Francuzi', 'Francuz', 'francuski'],
    answer: 'Francuzi',
    tip: 'A mixed group: Francuzi.',
  },
  // People from a town (-anin / -čanin), book lesson 2.
  {
    mode: 'skupine',
    q: 'Marko je iz Splita. On je ____.',
    en: 'Marko is from Split.',
    opts: ['Splitanin', 'Splićanin', 'Splićanka', 'Splićani'],
    answer: 'Splićanin',
    tip: 'Split → Splićanin: the t becomes ć before -anin.',
  },
  {
    mode: 'zena',
    q: 'Zagrepčanin → ____',
    en: 'a woman from Zagreb',
    opts: ['Zagrepčanica', 'Zagrepčanka', 'Zagrebčanka', 'Zagrepčankinja'],
    answer: 'Zagrepčanka',
    tip: '-anin → -anka for a woman, and the b of Zagreb is written p before č.',
  },
];
