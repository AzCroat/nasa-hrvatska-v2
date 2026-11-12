// src/data/drills/a1/schoolEducationDrill.ts
//
// A1 SCHOOL AND STUDYING — the drill for the `school-education` lesson.
//
// English has one verb, "study"; Croatian has two. Studirati is a university
// degree (Studiram medicinu), učiti is learning anything, and studying FOR an exam
// is always učiti, even at university. Then the place: škola takes u, fakultet
// takes na, and going there is the accusative while being there is the locative.
//
// Three modes:
//   uciti   — učiti or studirati
//   mjesto  — u školu / u školi, na fakultet / na fakultetu
//   rijeci  — people and things at school

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const SCHOOL_EDUCATION_MODE_LABELS: Record<string, string> = {
  uciti: '📖 Učiti ili studirati',
  mjesto: '🏫 Gdje?',
  rijeci: '🎒 Riječi',
};

export const SCHOOL_EDUCATION_DRILL_DATA: ModeDrillItem[] = [
  // ── uciti ─────────────────────────────────────────────────────────────────
  {
    mode: 'uciti',
    q: 'Večeras ____ za ispit.',
    en: 'Tonight I am studying for an exam.',
    opts: ['studiram', 'učim', 'studira', 'uči'],
    answer: 'učim',
    tip: 'Studying for an exam is always učiti.',
  },
  {
    mode: 'uciti',
    q: 'Moja sestra ____ medicinu.',
    en: 'My sister is studying medicine (her degree).',
    opts: ['uči', 'piše', 'studira', 'ide'],
    answer: 'studira',
    tip: 'A university degree is studirati.',
  },
  {
    mode: 'uciti',
    q: 'Djeca ____ u školi.',
    en: 'The children learn at school.',
    opts: ['studiraju', 'uče', 'studira', 'uči'],
    answer: 'uče',
    tip: 'Children at school do not study a degree; djeca takes the plural.',
  },
  {
    mode: 'uciti',
    q: 'Ja ____ hrvatski svaki dan.',
    en: 'I learn Croatian every day.',
    opts: ['studiram', 'učim', 'uči', 'učiš'],
    answer: 'učim',
    tip: 'Learning a language is učiti.',
  },
  {
    mode: 'uciti',
    q: 'Moj brat ____ pravo u Splitu.',
    en: 'My brother studies law in Split.',
    opts: ['studira', 'uči', 'studiram', 'studiraju'],
    answer: 'studira',
    tip: 'Law as a degree: studirati, third person singular.',
  },
  {
    mode: 'uciti',
    q: 'Što ____? — Ekonomiju.',
    en: 'What are you studying (your degree)? — Economics.',
    opts: ['učiš', 'studiram', 'studiraš', 'studira'],
    answer: 'studiraš',
    tip: 'A degree, and ti: studiraš.',
  },
  {
    mode: 'uciti',
    q: 'Studenti ____ za ispit cijelu noć.',
    en: 'The students study for the exam all night.',
    opts: ['studiraju', 'uči', 'uče', 'studira'],
    answer: 'uče',
    tip: 'Even students learn FOR an exam with učiti.',
  },
  {
    mode: 'uciti',
    q: 'Učim ____ ispit.',
    en: 'I am studying for the exam.',
    opts: ['na', 'u', 'za', 's'],
    answer: 'za',
    tip: 'For something: za + accusative.',
  },

  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Idem u ____.',
    en: 'I am going to school.',
    opts: ['školi', 'školu', 'škola', 'škole'],
    answer: 'školu',
    tip: 'Going there takes the accusative.',
  },
  {
    mode: 'mjesto',
    q: 'Djeca su sada u ____.',
    en: 'The children are at school now.',
    opts: ['školu', 'škola', 'školi', 'školom'],
    answer: 'školi',
    tip: 'Being there takes the locative: -a → -i.',
  },
  {
    mode: 'mjesto',
    q: 'Studiram ____ fakultetu.',
    en: 'I study at the faculty.',
    opts: ['u', 'na', 'za', 'od'],
    answer: 'na',
    tip: 'Fakultet takes na, like posao.',
  },
  {
    mode: 'mjesto',
    q: 'Svaki dan idem na ____.',
    en: 'I go to the faculty every day.',
    opts: ['fakultetu', 'fakultet', 'fakulteta', 'fakultetom'],
    answer: 'fakultet',
    tip: 'Going there: accusative, which for this masculine noun looks like the dictionary form.',
  },
  {
    mode: 'mjesto',
    q: 'Profesorica je sada na ____.',
    en: 'The professor is at the faculty now.',
    opts: ['fakultet', 'fakultetom', 'fakultetu', 'fakulteti'],
    answer: 'fakultetu',
    tip: 'Being there: locative -u.',
  },
  {
    mode: 'mjesto',
    q: 'Which sentence is correct?',
    en: 'I study at the faculty in Zagreb.',
    opts: [
      'Studiram u fakultetu u Zagrebu.',
      'Studiram na fakultetu u Zagrebu.',
      'Studiram na fakultet u Zagrebu.',
      'Studiram za fakultet u Zagrebu.',
    ],
    answer: 'Studiram na fakultetu u Zagrebu.',
    tip: 'na fakultetu — at the faculty.',
  },
  {
    mode: 'mjesto',
    q: 'Kamo ideš? — U ____.',
    en: 'Where are you going? — To school.',
    opts: ['školu', 'školi', 'škola', 'škole'],
    answer: 'školu',
    tip: 'Kamo asks where to: accusative.',
  },
  {
    mode: 'mjesto',
    q: 'Gdje si? — U ____.',
    en: 'Where are you? — At school.',
    opts: ['školu', 'školi', 'škola', 'škole'],
    answer: 'školi',
    tip: 'Gdje asks where: locative.',
  },

  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Moj omiljeni ____ je povijest.',
    en: 'My favourite subject is history.',
    opts: ['ispit', 'predmet', 'razred', 'fakultet'],
    answer: 'predmet',
    tip: 'A school subject is a predmet.',
  },
  {
    mode: 'rijeci',
    q: 'Imam ____ u petak.',
    en: 'I have an exam on Friday.',
    opts: ['ispit', 'predmet', 'učenik', 'razred'],
    answer: 'ispit',
    tip: 'ispit — an exam.',
  },
  {
    mode: 'rijeci',
    q: 'Pišem ____ zadaću.',
    en: 'I am doing my homework.',
    opts: ['domaća', 'domaću', 'domaćoj', 'domaći'],
    answer: 'domaću',
    tip: 'The homework is the object: feminine accusative -u.',
  },
  {
    mode: 'rijeci',
    q: 'Ona ide u školu. Ona je ____.',
    en: 'She goes to school. She is a pupil.',
    opts: ['studentica', 'učiteljica', 'učenica', 'profesorica'],
    answer: 'učenica',
    tip: 'A girl at school is a učenica.',
  },
  {
    mode: 'rijeci',
    q: 'On studira na fakultetu. On je ____.',
    en: 'He studies at the faculty. What is he?',
    opts: ['učenik', 'student', 'učitelj', 'razred'],
    answer: 'student',
    tip: 'At university: student.',
  },
  {
    mode: 'rijeci',
    q: 'Moja mama radi u školi i uči djecu. Ona je ____.',
    en: 'My mum works at a school and teaches children.',
    opts: ['učenica', 'studentica', 'učiteljica', 'ispit'],
    answer: 'učiteljica',
    tip: 'A woman who teaches children: učiteljica. Učiti can also mean to teach.',
  },
  {
    mode: 'rijeci',
    q: 'Položio sam ____!',
    en: 'I passed the exam!',
    opts: ['predmet', 'ispit', 'razred', 'zadaću'],
    answer: 'ispit',
    tip: 'položiti ispit — to pass an exam.',
  },
  {
    mode: 'rijeci',
    q: 'Matematika, hrvatski i povijest su ____.',
    en: 'Maths, Croatian and history are school subjects.',
    opts: ['ispiti', 'razredi', 'predmeti', 'fakulteti'],
    answer: 'predmeti',
    tip: 'predmet → predmeti in the plural.',
  },
];
