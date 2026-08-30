// src/data/drills/educationDrill.ts
//
// A2 SCHOOL & STUDYING — the drill for the `school-studies` lesson.
//
// English has one word where Croatian has three, and the split runs along a
// line English does not draw. *Učiti* is to learn or study anything at all;
// *studirati* is to be at university reading a subject; *predavati* is what the
// person at the front does. "I study Croatian" is *učim hrvatski* if you are
// working through it on your own and *studiram kroatistiku* only if you are
// enrolled — and *studiram hrvatski* is the sentence a learner produces for
// years without ever being corrected.
//
// The same split runs through the nouns: an *učenik* is at school, a *student*
// is at university, and the two are not interchangeable. Two more things have
// to be met rather than derived — *u školi* but *na fakultetu*, learned as
// phrases, and an exam is *ispit IZ* a subject, with the genitive.
//
// Three modes:
//   glagoli — učiti, studirati, predavati
//   tkogdje — učenik against student, and the stages of the system
//   ispiti  — u/na, ispit iz + genitive, and the words around studying

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const EDUCATION_MODE_LABELS: Record<string, string> = {
  glagoli: '📖 Učiti ili studirati',
  tkogdje: '🎓 Učenik ili student',
  ispiti: '📝 Ispiti i predmeti',
};

export const EDUCATION_DRILL_DATA: ModeDrillItem[] = [
  // ── glagoli ───────────────────────────────────────────────────────────────
  {
    mode: 'glagoli',
    q: '____ hrvatski. (sam, kod kuće)',
    en: 'I am learning Croatian.',
    opts: ['Učim', 'Studiram', 'Predajem', 'Znam'],
    answer: 'Učim',
    tip: 'Učiti covers learning anything, anywhere.',
  },
  {
    mode: 'glagoli',
    q: '____ medicinu na fakultetu.',
    en: 'I am studying medicine at university.',
    opts: ['Studiram', 'Učim', 'Predajem', 'Idem'],
    answer: 'Studiram',
    tip: 'Studirati is specifically university study.',
  },
  {
    mode: 'glagoli',
    q: 'Što radi profesor?',
    en: 'What does a professor do?',
    opts: ['predaje', 'uči', 'studira', 'sluša'],
    answer: 'predaje',
    tip: 'Predavati — to teach, to lecture.',
  },
  {
    mode: 'glagoli',
    q: 'Zašto "studiram hrvatski" često zvuči krivo?',
    en: 'Why does that often sound wrong?',
    opts: [
      'studirati znači biti na fakultetu',
      'hrvatski se ne studira',
      'treba genitiv',
      'nije krivo',
    ],
    answer: 'studirati znači biti na fakultetu',
    tip: 'If you are not enrolled, the verb is učiti.',
  },
  {
    mode: 'glagoli',
    q: '____ za ispit cijeli tjedan.',
    en: 'I have been revising for the exam all week.',
    opts: ['Učim', 'Studiram', 'Predajem', 'Čitam'],
    answer: 'Učim',
    tip: 'Učiti za ispit — revising is učiti, whatever your level.',
  },
  {
    mode: 'glagoli',
    q: 'Koji padež traži "učiti" ovdje: učim ____?',
    en: 'Učim ____ (hrvatski)',
    opts: ['hrvatski', 'hrvatskog', 'hrvatskom', 'hrvatskim'],
    answer: 'hrvatski',
    tip: 'A direct object in the accusative, and this one looks like the nominative.',
  },
  {
    mode: 'glagoli',
    q: 'Što znači "diplomirati"?',
    en: 'What does diplomirati mean?',
    opts: ['to graduate', 'to enrol', 'to sit an exam', 'to apply'],
    answer: 'to graduate',
    tip: 'Diplomirao sam / diplomirala sam.',
  },
  {
    mode: 'glagoli',
    q: 'Što znači "upisati se"?',
    en: 'What does upisati se mean?',
    opts: ['to enrol', 'to graduate', 'to drop out', 'to revise'],
    answer: 'to enrol',
    tip: 'Upisao sam se na fakultet.',
  },

  // ── tkogdje ───────────────────────────────────────────────────────────────
  {
    mode: 'tkogdje',
    q: 'Dijete u osnovnoj školi je ____.',
    en: 'A child at primary school is…',
    opts: ['učenik', 'student', 'polaznik', 'slušatelj'],
    answer: 'učenik',
    tip: 'Učenik is a school pupil. Student means university, and only university.',
  },
  {
    mode: 'tkogdje',
    q: 'Osoba na fakultetu je ____.',
    en: 'A person at university is…',
    opts: ['student', 'učenik', 'đak', 'polaznik'],
    answer: 'student',
    tip: 'student / studentica.',
  },
  {
    mode: 'tkogdje',
    q: 'Ona je ____ na fakultetu.',
    en: 'She is a student at university.',
    opts: ['studentica', 'student', 'učenica', 'studentkinja'],
    answer: 'studentica',
    tip: 'The female form is standard here too.',
  },
  {
    mode: 'tkogdje',
    q: 'Što dolazi poslije osnovne škole?',
    en: 'What follows primary school?',
    opts: ['srednja škola', 'vrtić', 'fakultet', 'sveučilište'],
    answer: 'srednja škola',
    tip: 'vrtić → osnovna škola → srednja škola → fakultet.',
  },
  {
    mode: 'tkogdje',
    q: 'Što je "gimnazija"?',
    en: 'What is a gimnazija?',
    opts: ['grammar school', 'gym', 'primary school', 'college of art'],
    answer: 'grammar school',
    tip: 'A type of srednja škola — a false friend for English speakers.',
  },
  {
    mode: 'tkogdje',
    q: 'Koja je razlika između fakulteta i sveučilišta?',
    en: 'Faculty against university?',
    opts: [
      'fakultet je dio sveučilišta',
      'isto su',
      'sveučilište je dio fakulteta',
      'fakultet je srednja škola',
    ],
    answer: 'fakultet je dio sveučilišta',
    tip: 'The sveučilište is the whole institution; the fakultet is your part of it.',
  },
  {
    mode: 'tkogdje',
    q: 'Što je "vrtić"?',
    en: 'What is vrtić?',
    opts: ['nursery', 'playground', 'small garden', 'after-school club'],
    answer: 'nursery',
    tip: 'Literally "little garden" — the same idea as Kindergarten.',
  },
  {
    mode: 'tkogdje',
    q: 'Idem u ____ razred.',
    en: 'I am in the third year.',
    opts: ['treći', 'trećem', 'trećeg', 'tri'],
    answer: 'treći',
    tip: 'u plus the accusative here, and the ordinal declines like an adjective.',
  },

  // ── ispiti ────────────────────────────────────────────────────────────────
  {
    mode: 'ispiti',
    q: 'Ona je ____ školi.',
    en: 'She is at school.',
    opts: ['u', 'na', 'kod', 'za'],
    answer: 'u',
    tip: 'u školi but na fakultetu. Learn them as phrases; there is no rule.',
  },
  {
    mode: 'ispiti',
    q: 'On je ____ fakultetu.',
    en: 'He is at university.',
    opts: ['na', 'u', 'kod', 'za'],
    answer: 'na',
    tip: 'na fakultetu.',
  },
  {
    mode: 'ispiti',
    q: 'Imam ispit ____ matematike.',
    en: 'I have a maths exam.',
    opts: ['iz', 'od', 'za', 'na'],
    answer: 'iz',
    tip: 'ispit IZ a subject, and iz takes the genitive.',
  },
  {
    mode: 'ispiti',
    q: 'Ispit iz ____. (povijest)',
    en: 'a history exam',
    opts: ['povijesti', 'povijest', 'povijestu', 'poviješću'],
    answer: 'povijesti',
    tip: 'Genitive: iz povijesti. Povijest is i-declension.',
  },
  {
    mode: 'ispiti',
    q: 'Što je "zadaća"?',
    en: 'What is zadaća?',
    opts: ['homework', 'exam', 'lecture', 'timetable'],
    answer: 'homework',
    tip: 'Pišem zadaću.',
  },
  {
    mode: 'ispiti',
    q: 'Što je "ocjena"?',
    en: 'What is ocjena?',
    opts: ['mark, grade', 'exam', 'certificate', 'subject'],
    answer: 'mark, grade',
    tip: 'Ocjene run 1 to 5, with 5 the best.',
  },
  {
    mode: 'ispiti',
    q: 'Što je "predavanje"?',
    en: 'What is predavanje?',
    opts: ['lecture', 'homework', 'seminar room', 'presentation'],
    answer: 'lecture',
    tip: 'From predavati.',
  },
  {
    mode: 'ispiti',
    q: 'Učim u ____. (knjižnica)',
    en: 'I study in the library.',
    opts: ['knjižnici', 'knjižnicu', 'knjižnice', 'knjižnicom'],
    answer: 'knjižnici',
    tip: 'Locative: u knjižnici. A knjižara is a bookshop.',
  },
];
