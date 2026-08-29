// src/data/drills/aspectVerbsDrill.ts
//
// B2 ASPECT AFTER GOVERNING VERBS — the drill for the `aspect-with-verbs` lesson.
//
// Every existing aspect drill teaches aspect from the INSIDE: what the pair
// means, how the prefix or suffix builds it, which one narrates. This lesson is
// the other direction — aspect forced from OUTSIDE, by the verb in front of it.
// *Počeo sam čitati* can only be imperfective; *uspio sam pročitati* can only be
// perfective. The learner is not choosing a meaning here, they are obeying a
// governing verb, and no drill in the app asked for that.
//
// Three modes:
//   faza     — početi / nastaviti / prestati always take the imperfective
//   ishod    — uspjeti / zaboraviti / stići are about results → perfective
//   modalni  — modals take either, and the choice changes activity into result

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ASPECT_VERBS_MODE_LABELS: Record<string, string> = {
  faza: '▶️ Faza radnje',
  ishod: '🏁 Ishod',
  modalni: '🎚️ Modalni glagoli',
};

export const ASPECT_VERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── faza ──────────────────────────────────────────────────────────────────
  {
    mode: 'faza',
    q: 'Počeo sam ____ knjigu.',
    en: 'I started reading the book.',
    opts: ['čitati', 'pročitati', 'čitajući', 'čitam'],
    answer: 'čitati',
    tip: 'Početi ALWAYS takes the imperfective — you cannot begin a completed action.',
  },
  {
    mode: 'faza',
    q: 'Prestao je ____.',
    en: 'He stopped smoking.',
    opts: ['pušiti', 'popušiti', 'pušeći', 'puši'],
    answer: 'pušiti',
    tip: 'Prestati + imperfective, for the same reason.',
  },
  {
    mode: 'faza',
    q: 'Nastavili smo ____.',
    en: 'We carried on working.',
    opts: ['raditi', 'uraditi', 'odraditi', 'radeći'],
    answer: 'raditi',
    tip: 'Nastaviti + imperfective.',
  },
  {
    mode: 'faza',
    q: 'Koji vid traže početi, nastaviti i prestati?',
    en: 'Which aspect do the phase verbs take?',
    opts: ['nesvršeni', 'svršeni', 'oba', 'ovisi'],
    answer: 'nesvršeni',
    tip: 'Always imperfective. No exceptions worth learning.',
  },
  {
    mode: 'faza',
    q: 'Zašto je "počeo sam pročitati" pogrešno?',
    en: 'Why is that wrong?',
    opts: [
      'ne može se početi dovršena radnja',
      'krivo vrijeme',
      'krivi red riječi',
      'nije pogrešno',
    ],
    answer: 'ne može se početi dovršena radnja',
    tip: 'The phase verb names a point inside an action, so the action must have an inside.',
  },
  {
    mode: 'faza',
    q: 'Počelo je ____.',
    en: 'It started raining.',
    opts: ['padati', 'pasti', 'popadati', 'padnuti'],
    answer: 'padati',
    tip: 'padati (imperfective), not pasti.',
  },
  {
    mode: 'faza',
    q: 'Nemoj ____ o tome. (govoriti)',
    en: 'Do not talk about it.',
    opts: ['govoriti', 'reći', 'kazati', 'izgovoriti'],
    answer: 'govoriti',
    tip: 'nemoj + infinitive is normally imperfective — the same logic as a prohibition.',
  },
  {
    mode: 'faza',
    q: 'Svaki dan ____ novine. (čitati)',
    en: 'Every day I read the paper.',
    opts: ['čitam', 'pročitam', 'pročitat ću', 'čitajući'],
    answer: 'čitam',
    tip: 'Anything REPEATED goes imperfective, whatever the surrounding frame.',
  },

  // ── ishod ─────────────────────────────────────────────────────────────────
  {
    mode: 'ishod',
    q: 'Uspio sam ____ knjigu.',
    en: 'I managed to read the book.',
    opts: ['pročitati', 'čitati', 'čitajući', 'čitam'],
    answer: 'pročitati',
    tip: 'Uspjeti is about an OUTCOME, so the action must be complete.',
  },
  {
    mode: 'ishod',
    q: 'Zaboravio sam ____ mlijeko.',
    en: 'I forgot to buy milk.',
    opts: ['kupiti', 'kupovati', 'kupujući', 'kupujem'],
    answer: 'kupiti',
    tip: 'Zaboraviti + perfective — the thing that did not get done was a completed act.',
  },
  {
    mode: 'ishod',
    q: 'Nisam stigao ____ pismo.',
    en: 'I did not manage to write the letter.',
    opts: ['napisati', 'pisati', 'pišući', 'pišem'],
    answer: 'napisati',
    tip: 'Stići (manage to) is an outcome verb: perfective.',
  },
  {
    mode: 'ishod',
    q: 'Koji vid traže uspjeti, zaboraviti i stići?',
    en: 'Which aspect do the outcome verbs take?',
    opts: ['svršeni', 'nesvršeni', 'oba', 'ovisi o vremenu'],
    answer: 'svršeni',
    tip: 'Perfective. They report whether something got finished.',
  },
  {
    mode: 'ishod',
    q: 'Odlučio je ____ posao.',
    en: 'He decided to change jobs.',
    opts: ['promijeniti', 'mijenjati', 'mijenjajući', 'mijenja'],
    answer: 'promijeniti',
    tip: 'A decision points at a completed change: perfective.',
  },
  {
    mode: 'ishod',
    q: 'Što je zajedničko tim glagolima?',
    en: 'What do those verbs have in common?',
    opts: ['govore o rezultatu', 'govore o trajanju', 'traže dativ', 'svi su povratni'],
    answer: 'govore o rezultatu',
    tip: 'They all ask whether the action reached its end.',
  },
  {
    mode: 'ishod',
    q: 'Uspjela je ____ na vrijeme.',
    en: 'She managed to arrive on time.',
    opts: ['stići', 'stizati', 'stižući', 'stiže'],
    answer: 'stići',
    tip: 'Perfective: stići.',
  },
  {
    mode: 'ishod',
    q: 'Zaboravio sam ____ ključeve. (ponijeti)',
    en: 'I forgot to bring the keys.',
    opts: ['ponijeti', 'nositi', 'noseći', 'nosim'],
    answer: 'ponijeti',
    tip: 'Perfective again — the bringing was a single completed act.',
  },

  // ── modalni ───────────────────────────────────────────────────────────────
  {
    mode: 'modalni',
    q: 'Moram ____ ovu knjigu do petka.',
    en: 'I must read this book by Friday.',
    opts: ['pročitati', 'čitati', 'čitajući', 'čitam'],
    answer: 'pročitati',
    tip: 'A deadline demands a RESULT, so the perfective.',
  },
  {
    mode: 'modalni',
    q: 'Moram ____ svaki dan.',
    en: 'I have to read every day.',
    opts: ['čitati', 'pročitati', 'čitajući', 'čitam'],
    answer: 'čitati',
    tip: 'Same modal, repeated activity — imperfective. The modal does not decide; the meaning does.',
  },
  {
    mode: 'modalni',
    q: 'Koji vid traže modalni glagoli?',
    en: 'Which aspect do modals take?',
    opts: ['oba', 'samo svršeni', 'samo nesvršeni', 'nijedan'],
    answer: 'oba',
    tip: 'Either — and that is what makes them the interesting case.',
  },
  {
    mode: 'modalni',
    q: 'Što mijenja izbor vida uz modalni glagol?',
    en: 'What does the choice change?',
    opts: ['radnju ili rezultat', 'vrijeme', 'osobu', 'uljudnost'],
    answer: 'radnju ili rezultat',
    tip: 'Imperfective names the activity; perfective names reaching its end.',
  },
  {
    mode: 'modalni',
    q: 'Mogu ti ____ ako želiš. (pomoći)',
    en: 'I can help you if you want.',
    opts: ['pomoći', 'pomagati', 'pomažući', 'pomažem'],
    answer: 'pomoći',
    tip: 'One offer of help, complete: perfective.',
  },
  {
    mode: 'modalni',
    q: 'Ne mogu ti ____ svaki dan. (pomoći)',
    en: 'I cannot help you every day.',
    opts: ['pomagati', 'pomoći', 'pomažući', 'pomognem'],
    answer: 'pomagati',
    tip: 'Repeated → imperfective, even under the same modal.',
  },
  {
    mode: 'modalni',
    q: 'Želim ____ hrvatski. (naučiti)',
    en: 'I want to learn Croatian.',
    opts: ['naučiti', 'učiti', 'učeći', 'učim'],
    answer: 'naučiti',
    tip: 'The goal is the finished state of knowing it: perfective.',
  },
  {
    mode: 'modalni',
    q: 'Volim ____ hrvatski. (učiti)',
    en: 'I enjoy learning Croatian.',
    opts: ['učiti', 'naučiti', 'učeći', 'naučim'],
    answer: 'učiti',
    tip: 'Enjoyment is of the ongoing activity: imperfective.',
  },
];
