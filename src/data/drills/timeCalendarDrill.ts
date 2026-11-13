// src/data/drills/timeCalendarDrill.ts
//
// A1 DAYS, MONTHS AND SEASONS — the drill for the `time-calendar` lesson.
//
// A `datumi` drill already exists, but it is C1: ordinal declension, dates in
// the genitive, decade names. Nothing there is reachable — or useful — to the
// learner who has just met the days of the week, which is why this lesson sat
// uncoupled while a drill with almost the same name sat in the pool.
//
// A1 FOLLOWS THE BOOK (Hrvatski za početnike 1, owner 2026-11-13). The lesson now
// teaches the days with u + accusative (u subotu — the accusative is taught at
// lesson 29) and the months and seasons by name. Telling the time and the
// 1 / 2–4 / 5+ counting rule moved to numbers-genitive (84), after the genitive,
// as the book does in its Lesson 17 — so the old `sat` mode is gone, and no item
// here needs the genitive, the instrumental, the locative or the past tense.
//
// Three modes:
//   dani     — the day names and u + accusative (u subotu, u srijedu)
//   kalendar — the order of the days and months, and the capitalisation rule
//   prilozi  — danas, sutra, prekosutra, jutros, večeras

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const TIME_CALENDAR_MODE_LABELS: Record<string, string> = {
  dani: '📆 U koji dan?',
  kalendar: '📅 Dani i mjeseci',
  prilozi: '🕰️ Vremenski prilozi',
};

export const TIME_CALENDAR_DRILL_DATA: ModeDrillItem[] = [
  // ── dani ──────────────────────────────────────────────────────────────────
  {
    mode: 'dani',
    q: 'Idemo na more u ____.',
    en: 'We are going to the seaside on Saturday.',
    opts: ['subotu', 'subota', 'subote', 'suboti'],
    answer: 'subotu',
    tip: 'u + a day takes the accusative: a day ending in -a changes it to -u.',
  },
  {
    mode: 'dani',
    q: 'Sastanak je u ____.',
    en: 'The meeting is on Monday.',
    opts: ['ponedjeljak', 'ponedjeljku', 'ponedjeljka', 'ponedjeljkom'],
    answer: 'ponedjeljak',
    tip: 'A masculine day does not change after u: u ponedjeljak, u utorak, u petak.',
  },
  {
    mode: 'dani',
    q: 'Vidimo se u ____!',
    en: 'See you on Wednesday!',
    opts: ['srijedu', 'srijeda', 'srijedi', 'srijede'],
    answer: 'srijedu',
    tip: 'srijeda ends in -a, so after u it becomes srijedu.',
  },
  {
    mode: 'dani',
    q: 'Kino je u ____.',
    en: 'The cinema is on Sunday.',
    opts: ['nedjelju', 'nedjelja', 'nedjelji', 'nedjelje'],
    answer: 'nedjelju',
    tip: 'nedjelja → u nedjelju, like subota → u subotu.',
  },
  {
    mode: 'dani',
    q: 'Imam hrvatski u ____.',
    en: 'I have Croatian on Thursday.',
    opts: ['četvrtak', 'četvrtka', 'četvrtku', 'četvrtakom'],
    answer: 'četvrtak',
    tip: 'četvrtak is masculine and a thing, so the accusative looks like the dictionary form.',
  },
  {
    mode: 'dani',
    q: 'Koji je dan danas? — Danas je ____.',
    en: 'What day is it today? — Today is Friday.',
    opts: ['petak', 'petku', 'petka', 'u petak'],
    answer: 'petak',
    tip: 'After je the day is the subject complement, so it stays in its dictionary form.',
  },
  {
    mode: 'dani',
    q: 'Radim u ____ i u nedjelju.',
    en: 'I work on Saturday and on Sunday.',
    opts: ['subotu', 'subota', 'subote', 'subotom'],
    answer: 'subotu',
    tip: 'Each day after u takes its own accusative: u subotu i u nedjelju.',
  },
  {
    mode: 'dani',
    q: 'Kada je koncert? — U ____.',
    en: 'When is the concert? — On Tuesday.',
    opts: ['utorak', 'utorku', 'utorka', 'utorkom'],
    answer: 'utorak',
    tip: 'utorak does not change: u utorak.',
  },

  // ── kalendar ──────────────────────────────────────────────────────────────
  {
    mode: 'kalendar',
    q: 'ponedjeljak, ____, srijeda',
    en: 'Monday, ____, Wednesday',
    opts: ['utorak', 'četvrtak', 'petak', 'subota'],
    answer: 'utorak',
    tip: 'ponedjeljak, utorak, srijeda, četvrtak, petak, subota, nedjelja.',
  },
  {
    mode: 'kalendar',
    q: 'Koji dan je u sredini tjedna?',
    en: 'Which day is in the middle of the week?',
    opts: ['srijeda', 'utorak', 'četvrtak', 'petak'],
    answer: 'srijeda',
    tip: 'Srijeda is related to sredina — the middle. The names are transparent once you see it.',
  },
  {
    mode: 'kalendar',
    q: 'Pišu li se dani velikim slovom?',
    en: 'Are day names capitalised?',
    opts: ['ne', 'da', 'samo nedjelja', 'samo u pismima'],
    answer: 'ne',
    tip: 'Days and months are written in lower case in Croatian: vidimo se u petak.',
  },
  {
    mode: 'kalendar',
    q: 'Koji je prvi mjesec u godini?',
    en: 'Which is the first month?',
    opts: ['siječanj', 'veljača', 'ožujak', 'prosinac'],
    answer: 'siječanj',
    tip: 'Croatian keeps the old Slavic month names — siječanj, not "januar".',
  },
  {
    mode: 'kalendar',
    q: 'ožujak, travanj, ____, lipanj',
    en: 'March, April, ____, June',
    opts: ['svibanj', 'srpanj', 'kolovoz', 'veljača'],
    answer: 'svibanj',
    tip: 'ožujak, travanj, svibanj, lipanj — March to June.',
  },
  {
    mode: 'kalendar',
    q: 'Koji je zadnji mjesec u godini?',
    en: 'Which is the last month?',
    opts: ['prosinac', 'studeni', 'listopad', 'siječanj'],
    answer: 'prosinac',
    tip: 'listopad, studeni, prosinac — October, November, December.',
  },
  {
    mode: 'kalendar',
    q: 'Što znači ime "listopad"?',
    en: 'What does the name "listopad" mean?',
    opts: ['leaf-fall', 'list of dates', 'turning pages', 'lime tree'],
    answer: 'leaf-fall',
    tip: 'list (leaf) + pad (fall) — October. Many month names describe what nature or the farm year is doing.',
  },
  {
    mode: 'kalendar',
    q: 'Zima, proljeće, ljeto, ____',
    en: 'Winter, spring, summer, ____',
    opts: ['jesen', 'tjedan', 'mjesec', 'godina'],
    answer: 'jesen',
    tip: 'The four seasons: zima, proljeće, ljeto, jesen.',
  },

  // ── prilozi ───────────────────────────────────────────────────────────────
  {
    mode: 'prilozi',
    q: '____ je petak.',
    en: 'Today is Friday.',
    opts: ['Danas', 'Sinoć', 'Sutra', 'Jutros'],
    answer: 'Danas',
    tip: 'Danas = today.',
  },
  {
    mode: 'prilozi',
    q: 'Danas je petak, a ____ je subota.',
    en: 'Today is Friday, and tomorrow is Saturday.',
    opts: ['sutra', 'danas', 'sinoć', 'jutros'],
    answer: 'sutra',
    tip: 'Sutra = tomorrow.',
  },
  {
    mode: 'prilozi',
    q: '____ idemo u Zagreb.',
    en: 'Tomorrow we are going to Zagreb.',
    opts: ['Sutra', 'Sinoć', 'Jutros', 'Danas je'],
    answer: 'Sutra',
    tip: 'Sutra = tomorrow; the present tense often talks about a plan.',
  },
  {
    mode: 'prilozi',
    q: 'Što znači "prekosutra"?',
    en: 'What does "prekosutra" mean?',
    opts: ['the day after tomorrow', 'the day before yesterday', 'this evening', 'next week'],
    answer: 'the day after tomorrow',
    tip: 'preko + sutra = the day after tomorrow. Its mirror is prekjučer.',
  },
  {
    mode: 'prilozi',
    q: 'Što znači "jutros"?',
    en: 'What does "jutros" mean?',
    opts: ['this morning', 'tomorrow morning', 'every morning', 'last night'],
    answer: 'this morning',
    tip: 'Jutros = this morning (today). Ujutro = in the morning, generally.',
  },
  {
    mode: 'prilozi',
    q: '____ idemo u kino.',
    en: 'This evening we are going to the cinema.',
    opts: ['Večeras', 'Sinoć', 'Jutros', 'Ljeto'],
    answer: 'Večeras',
    tip: 'Večeras = this evening, still to come. Sinoć = last night, already gone.',
  },
  {
    mode: 'prilozi',
    q: 'Što znači "sinoć"?',
    en: 'What does "sinoć" mean?',
    opts: ['last night', 'this evening', 'tomorrow evening', 'this morning'],
    answer: 'last night',
    tip: 'Pairing sinoć with večeras is the quickest way to keep them apart.',
  },
  {
    mode: 'prilozi',
    q: 'Radim ____.',
    en: 'I work every day.',
    opts: ['svaki dan', 'svakog dana ne', 'sve dane', 'dan svaki'],
    answer: 'svaki dan',
    tip: 'Svaki dan = every day.',
  },
];
