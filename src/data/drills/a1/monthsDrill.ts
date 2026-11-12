// src/data/drills/a1/monthsDrill.ts
//
// A1 THE MONTHS — the drill for the `months` lesson (new A1, 53).
//
// Croatian months have their own Slavic names, written with a small letter. "In" a
// month is u + the locative, and most month names carry a fleeting a that drops out
// (svibanj → u svibnju); veljača is the one feminine month (u veljači) and studeni
// takes an adjective ending (u studenom — u studenome is equally correct, so it is
// never offered as a distractor). Items whose options are English carry no gloss:
// the gloss would answer them.
//
// Three modes:
//   imena     — the names, both directions
//   lokativ   — u + the locative
//   pravopis  — small letters, and the order of the year

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const MONTHS_MODE_LABELS: Record<string, string> = {
  imena: '📅 Imena',
  lokativ: '📍 U kojem mjesecu',
  pravopis: '✏️ Pravopis i redoslijed',
};

export const MONTHS_DRILL_DATA: ModeDrillItem[] = [
  // ── imena ─────────────────────────────────────────────────────────────────
  {
    mode: 'imena',
    q: 'Koji je to mjesec: siječanj?',
    opts: ['January', 'February', 'November', 'December'],
    answer: 'January',
    tip: 'siječanj opens the year.',
  },
  {
    mode: 'imena',
    q: 'Koji je to mjesec: veljača?',
    opts: ['February', 'January', 'March', 'April'],
    answer: 'February',
    tip: 'veljača is the one feminine month.',
  },
  {
    mode: 'imena',
    q: 'Koji je to mjesec: ožujak?',
    opts: ['March', 'May', 'April', 'August'],
    answer: 'March',
    tip: 'ožujak → u ožujku.',
  },
  {
    mode: 'imena',
    q: 'Koji je to mjesec: travanj?',
    opts: ['April', 'March', 'May', 'June'],
    answer: 'April',
    tip: 'From trava, grass.',
  },
  {
    mode: 'imena',
    q: 'Koji je to mjesec: lipanj?',
    opts: ['June', 'July', 'May', 'April'],
    answer: 'June',
    tip: 'From lipa, the linden tree.',
  },
  {
    mode: 'imena',
    q: 'Koji je to mjesec: srpanj?',
    opts: ['July', 'June', 'August', 'September'],
    answer: 'July',
    tip: 'From srp, the harvest sickle.',
  },
  {
    mode: 'imena',
    q: 'Koji je to mjesec: kolovoz?',
    opts: ['August', 'July', 'October', 'September'],
    answer: 'August',
    tip: 'kolovoz → u kolovozu.',
  },
  {
    mode: 'imena',
    q: 'Koji je to mjesec: listopad?',
    opts: ['October', 'September', 'November', 'August'],
    answer: 'October',
    tip: 'list + padati: the leaves fall.',
  },
  {
    mode: 'imena',
    q: 'Kako se kaže "May"?',
    opts: ['svibanj', 'travanj', 'lipanj', 'ožujak'],
    answer: 'svibanj',
    tip: 'svibanj → u svibnju.',
  },
  {
    mode: 'imena',
    q: 'Kako se kaže "September"?',
    opts: ['rujan', 'studeni', 'listopad', 'kolovoz'],
    answer: 'rujan',
    tip: 'rujan → u rujnu.',
  },
  {
    mode: 'imena',
    q: 'Kako se kaže "November"?',
    opts: ['studeni', 'prosinac', 'listopad', 'rujan'],
    answer: 'studeni',
    tip: 'studeni → u studenom.',
  },
  {
    mode: 'imena',
    q: 'Kako se kaže "December"?',
    opts: ['prosinac', 'siječanj', 'studeni', 'veljača'],
    answer: 'prosinac',
    tip: 'prosinac → u prosincu.',
  },

  // ── lokativ ───────────────────────────────────────────────────────────────
  {
    mode: 'lokativ',
    q: 'Moj rođendan je u ____.',
    en: 'My birthday is in May.',
    opts: ['svibnju', 'svibanj', 'svibanju', 'svibnja'],
    answer: 'svibnju',
    tip: 'The fleeting a drops: u svibnju.',
  },
  {
    mode: 'lokativ',
    q: 'Božić je u ____.',
    en: 'Christmas is in December.',
    opts: ['prosincu', 'prosinac', 'prosinacu', 'prosinca'],
    answer: 'prosincu',
    tip: 'u prosincu.',
  },
  {
    mode: 'lokativ',
    q: 'Škola počinje u ____.',
    en: 'School starts in September.',
    opts: ['rujnu', 'rujan', 'rujanu', 'rujna'],
    answer: 'rujnu',
    tip: 'u rujnu.',
  },
  {
    mode: 'lokativ',
    q: 'Idemo na more u ____.',
    en: 'We go to the seaside in August.',
    opts: ['kolovozu', 'kolovoz', 'kolovoza', 'kolovozom'],
    answer: 'kolovozu',
    tip: 'kolovoz has no fleeting a: u kolovozu.',
  },
  {
    mode: 'lokativ',
    q: 'Valentinovo je u ____.',
    en: 'Valentine’s Day is in February.',
    opts: ['veljači', 'veljača', 'veljaču', 'veljače'],
    answer: 'veljači',
    tip: 'Feminine -a becomes -i.',
  },
  {
    mode: 'lokativ',
    q: 'Ispiti su u ____.',
    en: 'The exams are in June.',
    opts: ['lipnju', 'lipanj', 'lipanju', 'lipnja'],
    answer: 'lipnju',
    tip: 'u lipnju.',
  },
  {
    mode: 'lokativ',
    q: 'Baka dolazi u ____.',
    en: 'Grandma is coming in July.',
    opts: ['srpnju', 'srpanj', 'srpanju', 'srpnja'],
    answer: 'srpnju',
    tip: 'u srpnju.',
  },
  {
    mode: 'lokativ',
    q: 'Putujemo u ____.',
    en: 'We are travelling in March.',
    opts: ['ožujku', 'ožujak', 'ožujaku', 'ožujka'],
    answer: 'ožujku',
    tip: 'u ožujku.',
  },
  {
    mode: 'lokativ',
    q: 'Odmor je u ____.',
    en: 'The holiday is in October.',
    opts: ['listopadu', 'listopad', 'listopada', 'listopadom'],
    answer: 'listopadu',
    tip: 'u listopadu.',
  },
  {
    mode: 'lokativ',
    q: 'Sestra dolazi u ____.',
    en: 'My sister is coming in November.',
    opts: ['studenom', 'studeni', 'studenu', 'studenog'],
    answer: 'studenom',
    tip: 'studeni takes an adjective ending: u studenom (or u studenome).',
  },

  // ── pravopis ──────────────────────────────────────────────────────────────
  {
    mode: 'pravopis',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (in January)',
    opts: [
      'Putujem u siječnju.',
      'Putujem u Siječnju.',
      'Putujem u siječanju.',
      'Putujem u siječanj.',
    ],
    answer: 'Putujem u siječnju.',
    tip: 'A small letter and the locative without the fleeting a.',
  },
  {
    mode: 'pravopis',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct? (in April)',
    opts: ['Dolazim u travnju.', 'Dolazim u Travnju.', 'Dolazim u travanju.', 'Dolazim u travanj.'],
    answer: 'Dolazim u travnju.',
    tip: 'u travnju, with a small letter.',
  },
  {
    mode: 'pravopis',
    q: 'svibanj, ____, srpanj',
    en: 'May, …, July',
    opts: ['lipanj', 'travanj', 'kolovoz', 'ožujak'],
    answer: 'lipanj',
    tip: 'June comes between May and July.',
  },
  {
    mode: 'pravopis',
    q: 'rujan, ____, studeni',
    en: 'September, …, November',
    opts: ['listopad', 'kolovoz', 'prosinac', 'siječanj'],
    answer: 'listopad',
    tip: 'October comes between September and November.',
  },
  {
    mode: 'pravopis',
    q: 'siječanj, ____, ožujak',
    en: 'January, …, March',
    opts: ['veljača', 'travanj', 'prosinac', 'studeni'],
    answer: 'veljača',
    tip: 'February comes between January and March.',
  },
];
