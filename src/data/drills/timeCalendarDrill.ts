// src/data/drills/timeCalendarDrill.ts
//
// A1 TIME & CALENDAR — the drill for the `time-calendar` lesson.
//
// A `datumi` drill already exists, but it is C1: ordinal declension, dates in
// the genitive, decade names. Nothing there is reachable — or useful — to the
// learner who has just met the days of the week, which is why this lesson sat
// uncoupled while a drill with almost the same name sat in the pool.
//
// The lesson is order 15, one below the `cases` primer, so this bank asks for no
// case knowledge. What it does ask for is the one piece of arithmetic Croatian
// puts on a clock: sat / sata / sati changes with the number in front of it, and
// a learner who has not drilled it says "pet sat" for years.
//
// Three modes:
//   sat      — telling the time, and the 1 / 2–4 / 5+ counting rule
//   kalendar — days and months, including the capitalisation rule
//   prilozi  — danas, jučer, sutra and the ones either side of them

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const TIME_CALENDAR_MODE_LABELS: Record<string, string> = {
  sat: '⏰ Koliko je sati',
  kalendar: '📅 Dani i mjeseci',
  prilozi: '🕰️ Vremenski prilozi',
};

export const TIME_CALENDAR_DRILL_DATA: ModeDrillItem[] = [
  // ── sat ───────────────────────────────────────────────────────────────────
  {
    mode: 'sat',
    q: 'Kako se pita za vrijeme?',
    en: 'How do you ask the time?',
    opts: ['Koliko je sati?', 'Kako je sati?', 'Što je sati?', 'Gdje je sati?'],
    answer: 'Koliko je sati?',
    tip: 'Koliko je sati? — literally "how many is hours".',
  },
  {
    mode: 'sat',
    q: 'Pet je ____.',
    en: 'It is five o’clock.',
    opts: ['sati', 'sat', 'sata', 'satu'],
    answer: 'sati',
    tip: 'From five upwards the word becomes sati: pet sati, deset sati.',
  },
  {
    mode: 'sat',
    q: 'Dva su ____.',
    en: 'It is two o’clock.',
    opts: ['sata', 'sati', 'sat', 'satu'],
    answer: 'sata',
    tip: 'Two, three and four take sata: dva sata, tri sata, četiri sata.',
  },
  {
    mode: 'sat',
    q: 'Jedan ____.',
    en: 'One o’clock.',
    opts: ['sat', 'sata', 'sati', 'satu'],
    answer: 'sat',
    tip: 'One takes the bare form: jedan sat.',
  },
  {
    mode: 'sat',
    q: '3:30 → tri i ____',
    en: 'half past three',
    opts: ['pol', 'pola', 'polovica', 'četvrt'],
    answer: 'pol',
    tip: 'Tri i pol = 3:30. Careful: pola četiri also means 3:30 — half OF the fourth hour.',
  },
  {
    mode: 'sat',
    q: '6:15 → šest i ____',
    en: 'quarter past six',
    opts: ['četvrt', 'pol', 'petnaest', 'četvrti'],
    answer: 'četvrt',
    tip: 'Šest i četvrt. Šest i petnaest is also heard and also correct.',
  },
  {
    mode: 'sat',
    q: 'Koliko je sati ako je "pola osam"?',
    en: 'What time is "pola osam"?',
    opts: ['7:30', '8:30', '8:00', '7:00'],
    answer: '7:30',
    tip: 'Half of the EIGHTH hour, so 7:30 — an hour earlier than English speakers expect.',
  },
  {
    mode: 'sat',
    q: 'Vlak polazi u ____ sati.',
    en: 'The train leaves at nine.',
    opts: ['devet', 'devetog', 'deveti', 'devetu'],
    answer: 'devet',
    tip: 'The plain number for the hour: u devet sati.',
  },

  // ── kalendar ──────────────────────────────────────────────────────────────
  {
    mode: 'kalendar',
    q: 'Koji je dan poslije ponedjeljka?',
    en: 'Which day follows Monday?',
    opts: ['utorak', 'srijeda', 'četvrtak', 'subota'],
    answer: 'utorak',
    tip: 'ponedjeljak, utorak, srijeda, četvrtak, petak, subota, nedjelja.',
  },
  {
    mode: 'kalendar',
    q: 'Koji je dan u sredini tjedna?',
    en: 'Which day sits in the middle of the week?',
    opts: ['srijeda', 'utorak', 'četvrtak', 'petak'],
    answer: 'srijeda',
    tip: 'Srijeda comes from sredina — the middle. The names are transparent once you see it.',
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
    q: 'Koji mjesec dolazi poslije travnja?',
    en: 'Which month follows April?',
    opts: ['svibanj', 'lipanj', 'ožujak', 'srpanj'],
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
    q: 'Od čega dolazi ime "listopad"?',
    en: 'Where does "listopad" come from?',
    opts: ['list + pad', 'lista + podaci', 'listati', 'lipa'],
    answer: 'list + pad',
    tip: 'Leaf-fall — October. Every month name describes what nature is doing.',
  },
  {
    mode: 'kalendar',
    q: 'Koliko dana ima tjedan?',
    en: 'How many days in a week?',
    opts: ['sedam', 'šest', 'osam', 'pet'],
    answer: 'sedam',
    tip: 'Tjedan = week; sedam dana.',
  },

  // ── prilozi ───────────────────────────────────────────────────────────────
  {
    mode: 'prilozi',
    q: '____ je petak.',
    en: 'Today is Friday.',
    opts: ['Danas', 'Jučer', 'Sutra', 'Sinoć'],
    answer: 'Danas',
    tip: 'Danas = today.',
  },
  {
    mode: 'prilozi',
    q: '____ sam bio na moru.',
    en: 'Yesterday I was at the seaside.',
    opts: ['Jučer', 'Sutra', 'Danas', 'Večeras'],
    answer: 'Jučer',
    tip: 'Jučer = yesterday.',
  },
  {
    mode: 'prilozi',
    q: '____ idemo u Zagreb.',
    en: 'Tomorrow we are going to Zagreb.',
    opts: ['Sutra', 'Jučer', 'Sinoć', 'Jutros'],
    answer: 'Sutra',
    tip: 'Sutra = tomorrow.',
  },
  {
    mode: 'prilozi',
    q: 'Što znači "prekosutra"?',
    en: 'What does "prekosutra" mean?',
    opts: ['dan poslije sutra', 'dan prije jučer', 'danas navečer', 'sljedeći tjedan'],
    answer: 'dan poslije sutra',
    tip: 'preko + sutra = the day after tomorrow. Its mirror is prekjučer.',
  },
  {
    mode: 'prilozi',
    q: '____ sam ustao rano.',
    en: 'This morning I got up early.',
    opts: ['Jutros', 'Večeras', 'Sinoć', 'Sutra'],
    answer: 'Jutros',
    tip: 'Jutros = this morning (already past). Ujutro = in the mornings, generally.',
  },
  {
    mode: 'prilozi',
    q: '____ idemo u kino.',
    en: 'This evening we are going to the cinema.',
    opts: ['Večeras', 'Sinoć', 'Jutros', 'Jučer'],
    answer: 'Večeras',
    tip: 'Večeras = this evening, still to come. Sinoć = last night, already gone.',
  },
  {
    mode: 'prilozi',
    q: 'Što znači "sinoć"?',
    en: 'What does "sinoć" mean?',
    opts: ['prošle večeri', 'večeras', 'sutra navečer', 'jutros'],
    answer: 'prošle večeri',
    tip: 'Last night. Pairing sinoć with večeras is the quickest way to keep them apart.',
  },
  {
    mode: 'prilozi',
    q: 'Radim ____. (svaki dan)',
    en: 'I work every day.',
    opts: ['svaki dan', 'svakog dana ne', 'sve dane', 'dan svaki'],
    answer: 'svaki dan',
    tip: 'Svaki dan = every day; vikendom = at weekends; ponedjeljkom = on Mondays.',
  },
];
