// src/data/drills/a1/datesYearsDrill.ts
//
// A1 YEARS AND FULL DATES — the drill for the `dates-years` lesson (new A1, 86).
//
// A year is a feminine ordinal agreeing with godina, and only its last word is an
// ordinal: 2026. = dvije tisuće dvadeset šesta. For WHEN something happened the year
// goes into the genitive (-e), the day ordinal takes -og and the month its genitive.
// Every historical date here is true: Tesla 10. 7. 1856., independence 25. 6. 1991.,
// the EU 1. 7. 2013., the euro 1. 1. 2023., the Zagreb earthquake 22. 3. 2020.
// Items whose options are English carry no gloss: the gloss would answer them.
//
// Three modes:
//   godina   — reading a year (what year it is)
//   kada     — when: the genitive, rođen / rođena, u + locative
//   datum    — the full date, the day and the month

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DATES_YEARS_MODE_LABELS: Record<string, string> = {
  godina: '📆 Koja je godina?',
  kada: '🕰️ Koje godine?',
  datum: '🗓️ Cijeli datum',
};

export const DATES_YEARS_DRILL_DATA: ModeDrillItem[] = [
  // ── godina ────────────────────────────────────────────────────────────────
  {
    mode: 'godina',
    q: 'Godina je dvije tisuće dvadeset ____.',
    en: 'The year is 2026.',
    opts: ['šesta', 'šest', 'šeste', 'šestog'],
    answer: 'šesta',
    tip: 'What year it is: a feminine ordinal in the subject form, ending in -a.',
  },
  {
    mode: 'godina',
    q: 'Godina je tisuću devetsto devedeset ____.',
    en: 'The year is 1991.',
    opts: ['prva', 'prvi', 'prve', 'jedan'],
    answer: 'prva',
    tip: 'godina is feminine, so the ordinal is feminine: -a.',
  },
  {
    mode: 'godina',
    q: 'Godina je dvije tisuće ____.',
    en: 'The year is 2013.',
    opts: ['trinaesta', 'trinaest', 'trinaeste', 'trinaestog'],
    answer: 'trinaesta',
    tip: 'Only the last word becomes an ordinal.',
  },
  {
    mode: 'godina',
    q: '____ tisuće dvadeset šesta.',
    en: 'The year 2026.',
    opts: ['Dvije', 'Dva', 'Druge', 'Dvoje'],
    answer: 'Dvije',
    tip: 'tisuća is feminine: two thousand is dvije tisuće, and it is not an ordinal.',
  },
  {
    mode: 'godina',
    q: 'Godina je tisuću ____ pedeset šesta.',
    en: 'The year is 1856.',
    opts: ['osamsto', 'osam', 'osmi', 'osamdeset'],
    answer: 'osamsto',
    tip: 'Eight hundred is one word: sto is a hundred.',
  },
  {
    mode: 'godina',
    q: 'Koja je godina? — Dvije tisuće dvadeset ____.',
    en: 'What year is it? — 2025.',
    opts: ['peta', 'pet', 'pete', 'petog'],
    answer: 'peta',
    tip: 'What year it is: the subject form, -a.',
  },
  {
    mode: 'godina',
    q: 'Što znači "devetsto"?',
    opts: ['nine hundred', 'ninety', 'nine', 'nine thousand'],
    answer: 'nine hundred',
    tip: 'devet + sto: nine hundreds.',
  },
  {
    mode: 'godina',
    q: 'Koja je godina? — Dvije tisuće ____.',
    en: 'What year is it? — 2010.',
    opts: ['deseta', 'deset', 'desete', 'desetog'],
    answer: 'deseta',
    tip: 'A feminine ordinal in the subject form.',
  },

  // ── kada ──────────────────────────────────────────────────────────────────
  {
    mode: 'kada',
    q: 'Rođen sam tisuću devetsto devedeset ____.',
    en: 'I was born in 1995.',
    opts: ['pete', 'peta', 'pet', 'petog'],
    answer: 'pete',
    tip: 'When: the year goes into the genitive, feminine -e.',
  },
  {
    mode: 'kada',
    q: 'Hrvatska je ušla u Europsku uniju dvije tisuće ____.',
    en: 'Croatia joined the European Union in 2013.',
    opts: ['trinaeste', 'trinaesta', 'trinaest', 'trinaestoj'],
    answer: 'trinaeste',
    tip: 'When, without u: the genitive. The -oj form needs u in front of it.',
  },
  {
    mode: 'kada',
    q: '____ godine si rođena?',
    en: 'In which year were you born?',
    opts: ['Koje', 'Koja', 'Kojoj', 'Koju'],
    answer: 'Koje',
    tip: 'The question for when is in the genitive, like the answer.',
  },
  {
    mode: 'kada',
    q: 'Baka je rođena tisuću devetsto četrdeset ____.',
    en: 'Grandma was born in 1948.',
    opts: ['osme', 'osma', 'osam', 'osmog'],
    answer: 'osme',
    tip: 'When: feminine genitive ordinal, -e.',
  },
  {
    mode: 'kada',
    q: 'U kojoj godini? — U dvije tisuće dvadeset ____.',
    en: 'In which year? — In 2021.',
    opts: ['prvoj', 'prva', 'prve', 'prvi'],
    answer: 'prvoj',
    tip: 'u + the locative: the feminine ordinal ends in -oj.',
  },
  {
    mode: 'kada',
    q: 'Hrvatska je uvela euro dvije tisuće dvadeset ____.',
    en: 'Croatia introduced the euro in 2023.',
    opts: ['treće', 'treća', 'tri', 'trećoj'],
    answer: 'treće',
    tip: 'When, without u: the genitive, -e.',
  },
  {
    mode: 'kada',
    q: 'Ana je ____ tisuću devetsto osamdeset devete.',
    en: 'Ana was born in 1989.',
    opts: ['rođena', 'rođen', 'rođeni', 'rođeno'],
    answer: 'rođena',
    tip: 'Born agrees with the person: a woman is rođena.',
  },
  {
    mode: 'kada',
    q: 'Kad si ____? — Tisuću devetsto devedeset prve.',
    en: 'When were you born? (to a man)',
    opts: ['rođen', 'rođena', 'rođeni', 'rođeno'],
    answer: 'rođen',
    tip: 'A man is rođen.',
  },

  // ── datum ─────────────────────────────────────────────────────────────────
  {
    mode: 'datum',
    q: 'Rođena sam ____ ožujka.',
    en: 'I was born on the third of March.',
    opts: ['trećeg', 'treći', 'treće', 'tri'],
    answer: 'trećeg',
    tip: 'The day on which something happened: masculine genitive ordinal, -og.',
  },
  {
    mode: 'datum',
    q: 'Danas je prvi ____.',
    en: 'Today is the first of May.',
    opts: ['svibnja', 'svibanj', 'svibnju', 'svibnjem'],
    answer: 'svibnja',
    tip: 'The month after the day is always in the genitive.',
  },
  {
    mode: 'datum',
    q: 'Kako se piše taj datum?',
    en: 'How is 25 June 1991 written?',
    opts: ['25. lipnja 1991.', '25 lipanj 1991', '25th lipnja 1991.', 'lipanj 25. 1991'],
    answer: '25. lipnja 1991.',
    tip: 'A dot marks each ordinal, and the month is in the genitive.',
  },
  {
    mode: 'datum',
    q: 'Tesla je rođen desetog ____ 1856.',
    en: 'Tesla was born on the tenth of July 1856.',
    opts: ['srpnja', 'srpanj', 'srpnju', 'srpnjem'],
    answer: 'srpnja',
    tip: 'srpanj → srpnja: the a drops out in the genitive.',
  },
  {
    mode: 'datum',
    q: 'Hrvatski sabor proglasio je neovisnost dvadeset ____ lipnja 1991.',
    en: 'The Croatian Parliament declared independence on 25 June 1991.',
    opts: ['petog', 'peti', 'pete', 'pet'],
    answer: 'petog',
    tip: 'The day of an event: -og.',
  },
  {
    mode: 'datum',
    q: 'U Zagrebu je bio potres dvadeset drugog ____ 2020.',
    en: 'There was an earthquake in Zagreb on 22 March 2020.',
    opts: ['ožujka', 'ožujak', 'ožujku', 'ožujkom'],
    answer: 'ožujka',
    tip: 'ožujak → ožujka in the genitive.',
  },
  {
    mode: 'datum',
    q: 'Koji je danas ____?',
    en: 'What is the date today?',
    opts: ['datum', 'datuma', 'datumu', 'datumom'],
    answer: 'datum',
    tip: 'The subject of je stays in the subject form.',
  },
  {
    mode: 'datum',
    q: 'Hrvatska je ušla u Europsku uniju ____ srpnja 2013.',
    en: 'Croatia joined the European Union on the first of July 2013.',
    opts: ['prvog', 'prvi', 'prve', 'prva'],
    answer: 'prvog',
    tip: 'The day on which something happened: -og.',
  },
];
