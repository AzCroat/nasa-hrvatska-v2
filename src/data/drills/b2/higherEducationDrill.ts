// src/data/drills/b2/higherEducationDrill.ts
//
// B2 HIGHER EDUCATION — the drill for the `higher-education` lesson.
//
// The Bologna cycles, ECTS credits, titles and the state matura (facts only, as the
// lesson states them), the words of student life, and two usage contrasts the lesson
// teaches: polagati / položiti and studirati / učiti. The first cycle is officially
// prijediplomski since 2022; that name is never offered as a distractor.
//
// Three modes:
//   sustav    — how the system works
//   rijeci    — the words of student life
//   upotreba  — using them in a sentence

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const HIGHER_EDUCATION_MODE_LABELS: Record<string, string> = {
  sustav: '🏛️ Sustav',
  rijeci: '📚 Riječi',
  upotreba: '✍️ Upotreba',
};

export const HIGHER_EDUCATION_DRILL_DATA: ModeDrillItem[] = [
  // ── sustav ────────────────────────────────────────────────────────────────
  {
    mode: 'sustav',
    q: 'Prvi ciklus sveučilišnog studija zove se ____ studij.',
    en: 'The first cycle of university study.',
    opts: ['preddiplomski', 'diplomski', 'doktorski', 'srednjoškolski'],
    answer: 'preddiplomski',
    tip: 'Since 2022 it is officially called prijediplomski; both names are heard.',
  },
  {
    mode: 'sustav',
    q: 'Nakon prvog ciklusa upisuje se ____ studij.',
    en: 'The second cycle, which follows the first.',
    opts: ['diplomski', 'preddiplomski', 'srednjoškolski', 'osnovnoškolski'],
    answer: 'diplomski',
    tip: 'The second Bologna cycle usually lasts two years.',
  },
  {
    mode: 'sustav',
    q: 'Jedna akademska godina nosi ____ ECTS bodova.',
    en: 'The number of credits in one academic year.',
    opts: ['šezdeset', 'trideset', 'sto dvadeset', 'deset'],
    answer: 'šezdeset',
    tip: 'One year carries 60 credits.',
  },
  {
    mode: 'sustav',
    q: 'Trogodišnji prvi ciklus nosi ____ ECTS bodova.',
    en: 'The credits for a three-year first cycle.',
    opts: ['sto osamdeset', 'šezdeset', 'tristo', 'devedeset'],
    answer: 'sto osamdeset',
    tip: 'Three years of 60 credits each.',
  },
  {
    mode: 'sustav',
    q: 'Na državnoj maturi obvezni su hrvatski jezik, matematika i ____.',
    en: 'The third compulsory subject of the school-leaving exam.',
    opts: ['strani jezik', 'povijest', 'fizika', 'biologija'],
    answer: 'strani jezik',
    tip: 'Croatian, mathematics and a foreign language; the rest are electives.',
  },
  {
    mode: 'sustav',
    q: 'Najstarije hrvatsko sveučilište nalazi se u ____.',
    en: 'The city of the oldest Croatian university, founded in 1669.',
    opts: ['Zagrebu', 'Splitu', 'Osijeku', 'Puli'],
    answer: 'Zagrebu',
    tip: 'The University of Zagreb dates from 1669.',
  },
  {
    mode: 'sustav',
    q: 'Titula nakon prvog ciklusa je ____.',
    en: 'The title after the first cycle.',
    opts: ['prvostupnik', 'magistar', 'doktor znanosti', 'maturant'],
    answer: 'prvostupnik',
    tip: 'sveučilišni prvostupnik, abbreviated bacc.',
  },
  {
    mode: 'sustav',
    q: 'Titula nakon drugog ciklusa je ____.',
    en: 'The title after the second cycle.',
    opts: ['magistar', 'prvostupnik', 'maturant', 'apsolvent'],
    answer: 'magistar',
    tip: 'magistar or magistra, abbreviated mag.',
  },

  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Test tijekom semestra zove se ____.',
    en: 'A test taken during the semester.',
    opts: ['kolokvij', 'ispitni rok', 'završni rad', 'upis'],
    answer: 'kolokvij',
    tip: 'A kolokvij can count towards the final exam.',
  },
  {
    mode: 'rijeci',
    q: 'Studentski restoran zove se ____.',
    en: 'The restaurant where students eat cheaply.',
    opts: ['menza', 'dvorana', 'knjižnica', 'referada'],
    answer: 'menza',
    tip: 'The student canteen; the referada is the student office.',
  },
  {
    mode: 'rijeci',
    q: 'Novac koji dobivaju najbolji studenti je ____.',
    en: 'Money that the best students receive.',
    opts: ['stipendija', 'plaća', 'mirovina', 'kredit'],
    answer: 'stipendija',
    tip: 'A scholarship, often for excellence or for students in need.',
  },
  {
    mode: 'rijeci',
    q: 'Razdoblje kad se polažu ispiti je ____.',
    en: 'The period when exams are taken.',
    opts: ['ispitni rok', 'kolokvij', 'semestar', 'upis'],
    answer: 'ispitni rok',
    tip: 'Exams are held in set periods.',
  },
  {
    mode: 'rijeci',
    q: 'Rad koji pišeš na kraju drugog ciklusa je ____.',
    en: 'The thesis written at the end of the second cycle.',
    opts: ['diplomski rad', 'seminarski rad', 'domaća zadaća', 'kolokvij'],
    answer: 'diplomski rad',
    tip: 'A seminarski rad is a term paper; the final thesis has its own name.',
  },
  {
    mode: 'rijeci',
    q: 'Učenje kroz cijeli život zove se ____ učenje.',
    en: 'Learning through the whole of life.',
    opts: ['cjeloživotno', 'svakodnevno', 'osnovno', 'strano'],
    answer: 'cjeloživotno',
    tip: 'The official term for learning at every age.',
  },
  {
    mode: 'rijeci',
    q: 'Zgrada u kojoj stanuju studenti je studentski ____.',
    en: 'The building where students live.',
    opts: ['dom', 'grad', 'rok', 'rad'],
    answer: 'dom',
    tip: 'A student hall of residence.',
  },
  {
    mode: 'rijeci',
    q: 'Tečajevi za starije ljude zovu se sveučilište za treću životnu ____.',
    en: 'Courses for older people.',
    opts: ['dob', 'godinu', 'generaciju', 'klasu'],
    answer: 'dob',
    tip: 'životna dob — stage of life, age.',
  },

  // ── upotreba ──────────────────────────────────────────────────────────────
  {
    mode: 'upotreba',
    q: 'Sutra ____ ispit iz kemije.',
    en: 'Tomorrow I am sitting a chemistry exam.',
    opts: ['polažem', 'položim', 'položio', 'položen'],
    answer: 'polažem',
    tip: 'Sitting an exam is imperfective; položiti means to pass.',
  },
  {
    mode: 'upotreba',
    q: 'Napokon sam ____ sve ispite!',
    en: 'I have finally passed all my exams!',
    opts: ['položio', 'polažem', 'polagati', 'položen'],
    answer: 'položio',
    tip: 'A completed result: the perfective past.',
  },
  {
    mode: 'upotreba',
    q: '____ pravo na Sveučilištu u Splitu.',
    en: 'I study law at the University of Split.',
    opts: ['Studiram', 'Studira', 'Studiraju', 'Studiramo'],
    answer: 'Studiram',
    tip: 'The degree subject takes studirati; first person singular.',
  },
  {
    mode: 'upotreba',
    q: 'Ne mogu večeras van, ____ za ispit.',
    en: "I can't go out tonight, I am studying for an exam.",
    opts: ['učim', 'studiram', 'studira', 'uče'],
    answer: 'učim',
    tip: 'Preparing for an exam is učiti za ispit.',
  },
  {
    mode: 'upotreba',
    q: 'Upisala je ____ na Filozofskom fakultetu.',
    en: 'She enrolled in the psychology programme at the Faculty of Humanities and Social Sciences.',
    opts: ['psihologiju', 'psihologija', 'psihologijom', 'psihologiji'],
    answer: 'psihologiju',
    tip: 'upisati + the accusative.',
  },
  {
    mode: 'upotreba',
    q: 'Studenti s invaliditetom mogu tražiti ____ uvjeta na ispitu.',
    en: 'Students with disabilities can ask for the exam conditions to be adapted.',
    opts: ['prilagodbu', 'prilagođen', 'prilagoditi', 'prilagodba'],
    answer: 'prilagodbu',
    tip: 'tražiti takes an accusative object.',
  },
  {
    mode: 'upotreba',
    q: 'Rezultati mature važni su za ____ na fakultet.',
    en: 'The exam results matter for getting into university.',
    opts: ['upis', 'upisati', 'upisan', 'upisuje'],
    answer: 'upis',
    tip: 'After za you need a noun.',
  },
  {
    mode: 'upotreba',
    q: 'Hrvatska je ušla u Bolonjski proces ____ godine.',
    en: 'The year Croatia joined the Bologna Process.',
    opts: ['2001.', '1991.', '2013.', '1669.'],
    answer: '2001.',
    tip: 'Croatia joined in 2001; the new system started in 2005/2006.',
  },
];
