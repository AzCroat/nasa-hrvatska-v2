// src/data/drills/a2/aspectInPastDrill.ts
//
// A2 ASPECT IN THE PAST — the drill for the `aspect-in-past` lesson.
//
// Čitao sam knjigu (I did some reading) against Pročitao sam knjigu (I finished it).
// Every context item carries a signal that leaves only one aspect correct: a duration
// (dva sata, cijeli dan, dugo) for the imperfective; za + time, a whole thing finished,
// or a chain of events for the perfective. Frequency contexts (često, svaki dan) are not
// tested against a perfective, because the iterative perfective is real Croatian.
//
// Three modes:
//   trajanje — how long: the activity
//   rezultat — the result, and how long it took
//   niz      — a chain of finished events

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ASPECT_IN_PAST_MODE_LABELS: Record<string, string> = {
  trajanje: '⏳ Trajanje',
  rezultat: '✅ Rezultat',
  niz: '➡️ Niz',
};

export const ASPECT_IN_PAST_DRILL_DATA: ModeDrillItem[] = [
  // ── trajanje ──────────────────────────────────────────────────────────────
  {
    mode: 'trajanje',
    q: 'Jučer sam cijeli dan ____.',
    en: 'Yesterday I was studying all day. (a man speaking)',
    opts: ['učio', 'naučio', 'učim', 'naučiti'],
    answer: 'učio',
    tip: 'cijeli dan is how long, so the imperfective past.',
  },
  {
    mode: 'trajanje',
    q: '____ je e-mailove dva sata.',
    en: 'She was writing emails for two hours.',
    opts: ['Pisala', 'Napisala', 'Piše', 'Napisat'],
    answer: 'Pisala',
    tip: 'dva sata is how long: the activity, imperfective.',
  },
  {
    mode: 'trajanje',
    q: 'Kiša je ____ cijelo jutro.',
    en: 'It was raining all morning.',
    opts: ['padala', 'pala', 'pada', 'pasti'],
    answer: 'padala',
    tip: 'All morning: the imperfective padati. pala is a single fall.',
  },
  {
    mode: 'trajanje',
    q: 'Dugo smo ____ za ispit.',
    en: 'We studied for the exam for a long time.',
    opts: ['učili', 'naučili', 'učimo', 'naučiti'],
    answer: 'učili',
    tip: 'dugo (for a long time) goes with the imperfective.',
  },
  {
    mode: 'trajanje',
    q: 'Cijelu večer smo ____ televiziju.',
    en: 'We watched TV all evening.',
    opts: ['gledali', 'pogledali', 'gledamo', 'pogledati'],
    answer: 'gledali',
    tip: 'All evening: the imperfective gledati.',
  },
  {
    mode: 'trajanje',
    q: 'Što si radio sinoć? — ____ sam knjigu, ali nisam je završio.',
    en: "What did you do last night? — I was reading a book, but I didn't finish it.",
    opts: ['Čitao', 'Pročitao', 'Čitam', 'Pročitam'],
    answer: 'Čitao',
    tip: 'Not finished, so the activity: the imperfective.',
  },
  {
    mode: 'trajanje',
    q: 'Koja je rečenica pogrešna?',
    en: 'Which sentence is wrong?',
    opts: [
      'Pročitao sam knjigu dva sata.',
      'Čitao sam knjigu dva sata.',
      'Pročitao sam knjigu za dva sata.',
      'Čitao sam cijelu večer.',
    ],
    answer: 'Pročitao sam knjigu dva sata.',
    tip: 'A finished result cannot last two hours; the time it took needs za.',
  },
  {
    mode: 'trajanje',
    q: 'Igrali smo nogomet ____.',
    en: 'We played football all afternoon.',
    opts: ['cijelo popodne', 'za cijelo popodne', 'na cijelo popodne', 'u cijelom popodnevu'],
    answer: 'cijelo popodne',
    tip: 'How long an activity lasted: the bare accusative, no preposition.',
  },
  // ── rezultat ──────────────────────────────────────────────────────────────
  {
    mode: 'rezultat',
    q: '____ sam cijelu knjigu za tri dana.',
    en: 'I read the whole book in three days.',
    opts: ['Pročitao', 'Čitao', 'Čitam', 'Pročitam'],
    answer: 'Pročitao',
    tip: 'The whole book, done, and za tri dana is how long it took: perfective.',
  },
  {
    mode: 'rezultat',
    q: 'Konačno smo ____ novi auto.',
    en: 'We finally bought a new car.',
    opts: ['kupili', 'kupovali', 'kupujemo', 'kupiti'],
    answer: 'kupili',
    tip: 'konačno announces a result: perfective.',
  },
  {
    mode: 'rezultat',
    q: 'Napisala je e-mail ____.',
    en: 'She wrote the email in one hour.',
    opts: ['za jedan sat', 'jedan sat', 'na jedan sat', 'od jednog sata'],
    answer: 'za jedan sat',
    tip: 'With a finished result, how long it took is za + accusative.',
  },
  {
    mode: 'rezultat',
    q: 'Jesi li ____ nove riječi?',
    en: 'Have you learned the new words — do you know them now?',
    opts: ['naučio', 'učio', 'učiš', 'učiti'],
    answer: 'naučio',
    tip: 'Asking about the result: the perfective.',
  },
  {
    mode: 'rezultat',
    q: 'Ivan je ____ pismo i poslao ga.',
    en: 'Ivan wrote the letter and sent it.',
    opts: ['napisao', 'pisao', 'piše', 'pisati'],
    answer: 'napisao',
    tip: 'The letter was finished before it was sent: perfective.',
  },
  {
    mode: 'rezultat',
    q: '____ sam cijelu bocu vode.',
    en: 'I drank up the whole bottle of water.',
    opts: ['Popio', 'Pio', 'Pijem', 'Piti'],
    answer: 'Popio',
    tip: 'The whole bottle, finished: the perfective popiti.',
  },
  {
    mode: 'rezultat',
    q: 'Što znači "Pročitao sam knjigu"?',
    opts: [
      'I read the book to the end.',
      'I was in the middle of the book.',
      'I often read books.',
      'I will read the book.',
    ],
    answer: 'I read the book to the end.',
    tip: 'The perfective past states the result: the book is finished.',
  },
  {
    mode: 'rezultat',
    q: 'Što znači "Čitao sam knjigu"?',
    opts: [
      'I spent some time reading the book.',
      'I finished the book.',
      'I will finish the book.',
      'I have never seen the book.',
    ],
    answer: 'I spent some time reading the book.',
    tip: 'The imperfective past states the activity, not the end.',
  },
  // ── niz ───────────────────────────────────────────────────────────────────
  {
    mode: 'niz',
    q: 'Došao je kući, ____ čašu mlijeka i otišao spavati.',
    en: 'He came home, drank a glass of milk and went to bed.',
    opts: ['popio', 'pio', 'pije', 'piti'],
    answer: 'popio',
    tip: 'A chain of finished events: every verb perfective.',
  },
  {
    mode: 'niz',
    q: 'Ušla je, ____ kaput i sjela.',
    en: 'She came in, took off her coat and sat down.',
    opts: ['skinula', 'skidala', 'skida', 'skinuti'],
    answer: 'skinula',
    tip: 'One finished event after another: perfective.',
  },
  {
    mode: 'niz',
    q: 'Ušli smo, sjeli i ____ pizzu.',
    en: 'We came in, sat down and ordered a pizza.',
    opts: ['naručili', 'naručivali', 'naručujemo', 'naručiti'],
    answer: 'naručili',
    tip: 'A chain of finished events: naručiti, perfective.',
  },
  {
    mode: 'niz',
    q: 'Probudio sam se, ____ se i otišao na posao.',
    en: 'I woke up, got dressed and went to work.',
    opts: ['obukao', 'oblačio', 'oblačim', 'obući'],
    answer: 'obukao',
    tip: 'Each step finished before the next: obući → obukao.',
  },
  {
    mode: 'niz',
    q: 'Koja rečenica priča događaje jedan za drugim u prošlosti?',
    en: 'Which sentence tells finished events one after another, in the past?',
    opts: [
      'Došao je, sjeo i otvorio knjigu.',
      'Dolazi, sjeda i otvara knjigu.',
      'Doći će, sjesti i otvoriti knjigu.',
      'Dolazit će i otvarati knjigu.',
    ],
    answer: 'Došao je, sjeo i otvorio knjigu.',
    tip: 'Past and perfective: one finished event after another.',
  },
  {
    mode: 'niz',
    q: 'Došla je u osam, ____ do devet i otišla.',
    en: 'She came at eight, stayed until nine and left.',
    opts: ['ostala', 'ostajala', 'ostaje', 'ostati'],
    answer: 'ostala',
    tip: 'A chain of finished events: ostati, perfective.',
  },
  {
    mode: 'niz',
    q: 'Kupio sam kruh i ____ kući.',
    en: 'I bought bread and went home.',
    opts: ['otišao', 'odlazio', 'odlazim', 'otići'],
    answer: 'otišao',
    tip: 'Two finished events in a row: otići → otišao.',
  },
  {
    mode: 'niz',
    q: 'Napisala je pismo, ____ ga i poslala.',
    en: 'She wrote the letter, read it through and sent it.',
    opts: ['pročitala', 'čitala', 'čita', 'pročitati'],
    answer: 'pročitala',
    tip: 'Each step finished before the next: perfective.',
  },
];
