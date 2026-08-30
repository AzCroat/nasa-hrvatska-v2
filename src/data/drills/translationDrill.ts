// src/data/drills/translationDrill.ts
//
// C1 TRANSLATION TRAPS — the drill for the `translation-pitfalls` lesson.
//
// The learner this is for writes grammatical Croatian that a native reader can
// tell was thought in English. Three things do it.
//
// FALSE FRIENDS, and *eventualno* is the costly one: it means *possibly, if
// need be*, never *eventually*. "We will eventually finish" rendered with it
// says something close to the opposite. *Aktualan* is current, not actual;
// *simpatičan* is likeable, not sympathetic; *patetičan* is pompous, not
// pathetic.
//
// CALQUES, and *od strane* is the famous one. *Odluka je donesena od strane
// odbora* is grammatical and no Croatian editor would leave it standing:
// *Odbor je donio odluku*. Same for *vršiti analizu* where *analizirati*
// exists, and *na dnevnoj bazi* for *svakodnevno*.
//
// STRUCTURES THAT DO NOT TRANSFER: no progressive (*čitam* is both "I read"
// and "I am reading"), no possessive with body parts (*boli me glava*, not *moja
// glava*), and *ima/nema* for "there is".
//
// Three modes:
//   prijatelji — the false friends
//   kalkovi    — od strane, vršiti, and the padding
//   struktura  — what English shapes do not survive

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const TRANSLATION_MODE_LABELS: Record<string, string> = {
  prijatelji: '🎭 Lažni prijatelji',
  kalkovi: '🧱 Kalkovi',
  struktura: '🔧 Struktura',
};

export const TRANSLATION_DRILL_DATA: ModeDrillItem[] = [
  // ── prijatelji ────────────────────────────────────────────────────────────
  {
    mode: 'prijatelji',
    q: 'Što znači "eventualno"?',
    en: 'What does eventualno mean?',
    opts: ['possibly, if need be', 'eventually', 'finally', 'occasionally'],
    answer: 'possibly, if need be',
    tip: 'The costly one. "Eventually" is naposljetku or na kraju.',
  },
  {
    mode: 'prijatelji',
    q: 'Što znači "aktualan"?',
    en: 'What does aktualan mean?',
    opts: ['current, topical', 'actual, real', 'active', 'up to date only'],
    answer: 'current, topical',
    tip: '"Actual" is stvaran.',
  },
  {
    mode: 'prijatelji',
    q: 'Što znači "simpatičan"?',
    en: 'What does simpatičan mean?',
    opts: ['likeable, nice', 'sympathetic', 'compassionate', 'agreeable to a cause'],
    answer: 'likeable, nice',
    tip: '"Sympathetic" is suosjećajan.',
  },
  {
    mode: 'prijatelji',
    q: 'Što znači "patetičan"?',
    en: 'What does patetičan mean?',
    opts: ['pompous, overblown', 'pathetic, pitiful', 'emotional', 'tragic'],
    answer: 'pompous, overblown',
    tip: 'Calling a speech patetičan says it was grandiose, not feeble.',
  },
  {
    mode: 'prijatelji',
    q: 'Što znači "kontrola" u hrvatskom?',
    en: 'What does kontrola mean?',
    opts: ['a check, an inspection', 'control, power over', 'a remote', 'a checkpoint only'],
    answer: 'a check, an inspection',
    tip: 'Control in the sense of power is nadzor or vlast.',
  },
  {
    mode: 'prijatelji',
    q: 'Što znači "fabula"?',
    en: 'What does fabula mean?',
    opts: ['the plot of a work', 'a fable', 'a factory', 'a fabrication'],
    answer: 'the plot of a work',
    tip: 'A factory is tvornica.',
  },
  {
    mode: 'prijatelji',
    q: 'Što znači "pretendirati"?',
    en: 'What does pretendirati mean?',
    opts: ['to lay claim to', 'to pretend', 'to intend', 'to aspire vaguely'],
    answer: 'to lay claim to',
    tip: 'To pretend is pretvarati se.',
  },
  {
    mode: 'prijatelji',
    q: 'Kako se kaže "eventually" na hrvatskom?',
    en: 'eventually',
    opts: ['naposljetku', 'eventualno', 'konačno tek', 'vremenom eventualno'],
    answer: 'naposljetku',
    tip: 'naposljetku or na kraju — never eventualno.',
  },

  // ── kalkovi ───────────────────────────────────────────────────────────────
  {
    mode: 'kalkovi',
    q: 'Popravite: "Odluka je donesena od strane odbora."',
    en: 'Fix the calque.',
    opts: [
      'Odbor je donio odluku.',
      'Odluka je od odbora donesena.',
      'Odluku je donio od strane odbor.',
      'Donesena je odluka od odbora.',
    ],
    answer: 'Odbor je donio odluku.',
    tip: 'Make the agent the subject. Od strane is the famous one.',
  },
  {
    mode: 'kalkovi',
    q: 'Popravite: "vršiti analizu".',
    en: 'Fix the light verb.',
    opts: ['analizirati', 'izvršiti analizu', 'raditi analizu', 'praviti analizu'],
    answer: 'analizirati',
    tip: 'Where a plain verb exists, the noun-plus-vršiti is padding.',
  },
  {
    mode: 'kalkovi',
    q: 'Popravite: "po pitanju cijene".',
    en: 'Fix the bureaucratic calque.',
    opts: ['što se tiče cijene', 'na pitanje cijene', 'o pitanju cijene', 'za pitanje cijene'],
    answer: 'što se tiče cijene',
    tip: 'Or kad je riječ o cijeni.',
  },
  {
    mode: 'kalkovi',
    q: 'Popravite: "na dnevnoj bazi".',
    en: 'Fix the calque from English.',
    opts: ['svakodnevno', 'na dnevnoj razini', 'dnevno na bazi', 'po danu'],
    answer: 'svakodnevno',
    tip: 'One adverb replaces three words borrowed from English.',
  },
  {
    mode: 'kalkovi',
    q: 'Popravite: "u slučaju da treba".',
    en: 'Fix the padding.',
    opts: ['ako treba', 'u slučaju potrebe da', 'ako u slučaju treba', 'kad treba u slučaju'],
    answer: 'ako treba',
    tip: 'Two words do the whole job.',
  },
  {
    mode: 'kalkovi',
    q: 'Zašto lektor briše "od strane"?',
    en: 'Why does an editor delete it?',
    opts: ['agens se može učiniti subjektom', 'nije gramatično', 'predugo je', 'strana je riječ'],
    answer: 'agens se može učiniti subjektom',
    tip: 'It is grammatical and it is still wrong for Croatian prose.',
  },
  {
    mode: 'kalkovi',
    q: 'Kada je pasiv u hrvatskom u redu?',
    en: 'When is the passive fine?',
    opts: ['kad agens nije poznat ili nije važan', 'nikad', 'uvijek', 'samo u pravnom tekstu'],
    answer: 'kad agens nije poznat ili nije važan',
    tip: 'The se-passive is native and everywhere. The od strane agent is not.',
  },
  {
    mode: 'kalkovi',
    q: 'Popravite: "izvršiti plaćanje".',
    en: 'Fix it.',
    opts: ['platiti', 'vršiti plaćanje', 'napraviti plaćanje', 'dati plaćanje'],
    answer: 'platiti',
    tip: 'The same empty-light-verb pattern.',
  },

  // ── struktura ─────────────────────────────────────────────────────────────
  {
    mode: 'struktura',
    q: 'Kako se kaže "I am reading"?',
    en: 'I am reading.',
    opts: ['Čitam.', 'Ja sam čitajući.', 'Jesam čitam.', 'Bivam čitati.'],
    answer: 'Čitam.',
    tip: 'There is no progressive. Čitam covers both English tenses.',
  },
  {
    mode: 'struktura',
    q: 'Kako se kaže "my head hurts"?',
    en: 'My head hurts.',
    opts: ['Boli me glava.', 'Moja glava boli.', 'Boli moja glava.', 'Imam bol glave.'],
    answer: 'Boli me glava.',
    tip: 'No possessive with body parts — the accusative object carries it.',
  },
  {
    mode: 'struktura',
    q: 'Kako se kaže "there is no bread"?',
    en: 'There is no bread.',
    opts: ['Nema kruha.', 'Nije kruh.', 'Ne postoji kruh.', 'Tu nije kruh.'],
    answer: 'Nema kruha.',
    tip: 'ima/nema, and nema takes the genitive.',
  },
  {
    mode: 'struktura',
    q: 'Kako se kaže "I washed my hands"?',
    en: 'I washed my hands.',
    opts: [
      'Oprao sam ruke.',
      'Oprao sam moje ruke.',
      'Oprao sam si moje ruke.',
      'Moje ruke sam oprao.',
    ],
    answer: 'Oprao sam ruke.',
    tip: 'The possessive is redundant and marks the sentence as translated.',
  },
  {
    mode: 'struktura',
    q: 'Kako se kaže "there is a problem"?',
    en: 'There is a problem.',
    opts: ['Ima problem.', 'To je problem tamo.', 'Postoji se problem.', 'Bude problem.'],
    answer: 'Ima problem.',
    tip: 'Or simply Problem je u tome što… — the B2 frame.',
  },
  {
    mode: 'struktura',
    q: 'Zašto se posvojna zamjenica često izostavlja?',
    en: 'Why drop the possessive?',
    opts: ['pripadnost je već jasna', 'zabranjena je', 'predugo je', 'ne izostavlja se'],
    answer: 'pripadnost je već jasna',
    tip: 'And where it is genuinely ambiguous, svoj resolves it.',
  },
  {
    mode: 'struktura',
    q: 'Kako se kaže "he was reading when I came in"?',
    en: 'He was reading when I came in.',
    opts: [
      'Čitao je kad sam ušao.',
      'Bio je čitajući kad sam ušao.',
      'Čitajući je bio kad sam ušao.',
      'Je čitao kad sam ušao.',
    ],
    answer: 'Čitao je kad sam ušao.',
    tip: 'ASPECT carries what the English progressive carried — imperfective čitao.',
  },
  {
    mode: 'struktura',
    q: 'Što nosi razliku koju engleski nosi trajnim vremenom?',
    en: 'What carries the progressive meaning?',
    opts: ['vid', 'vrijeme', 'red riječi', 'čestica'],
    answer: 'vid',
    tip: 'Aspect. Croatian marks it in the verb rather than in an auxiliary.',
  },
];
