// src/data/drills/verbalAdverbsDrill.ts
//
// B2 VERBAL ADVERBS — the drill for the `verbal-adverbs` lesson.
//
// `gerunddrill` covers exactly this and is excellent, but it is C2, so a B2
// learner cannot open it. This is the B2-reachable bank.
//
// These are the forms that separate reading Croatian from reading it
// comfortably: *čitajući*, *došavši*. They are far commoner in writing than in
// speech, so a learner meets them first on a page, with no context to guess
// from — and the one rule that governs them is invisible until someone states
// it: **the adverb and the main verb must share a subject.** Break that and the
// sentence is not merely clumsy, it is wrong, and the fix is a full clause with
// dok.
//
// Three modes:
//   tvorba  — building -ći and -vši
//   izbor   — present or past, which is really imperfective or perfective
//   pravila — the shared-subject rule and the register

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const VERBAL_ADVERBS_MODE_LABELS: Record<string, string> = {
  tvorba: '🔧 Tvorba',
  izbor: '⚖️ Sadašnji ili prošli',
  pravila: '📏 Pravila i registar',
};

export const VERBAL_ADVERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'čitati (oni čitaju) → ____',
    en: 'reading',
    opts: ['čitajući', 'čitavši', 'čitaći', 'čitajuć'],
    answer: 'čitajući',
    tip: 'Take the oni-form čitaju, drop -u, add -ći: čitajući.',
  },
  {
    mode: 'tvorba',
    q: 'raditi (oni rade) → ____',
    en: 'working',
    opts: ['radeći', 'radivši', 'radajući', 'radući'],
    answer: 'radeći',
    tip: 'rade → radeći.',
  },
  {
    mode: 'tvorba',
    q: 'govoriti (oni govore) → ____',
    en: 'speaking',
    opts: ['govoreći', 'govorivši', 'govorajući', 'govoruć'],
    answer: 'govoreći',
    tip: 'govore → govoreći. The rule never changes: oni-form minus -u, plus -ći.',
  },
  {
    mode: 'tvorba',
    q: 'napisati → ____ (prošli)',
    en: 'having written',
    opts: ['napisavši', 'napisajući', 'napisući', 'napisavš'],
    answer: 'napisavši',
    tip: 'The past adverb is built from the infinitive stem: napisa- + -vši.',
  },
  {
    mode: 'tvorba',
    q: 'doći → ____ (prošli)',
    en: 'having arrived',
    opts: ['došavši', 'dolazeći', 'došivši', 'došući'],
    answer: 'došavši',
    tip: 'The stem is the one from the l-participle: došao → došavši.',
  },
  {
    mode: 'tvorba',
    q: 'Od kojeg oblika tvorimo sadašnji prilog?',
    en: 'Which form is the present adverb built from?',
    opts: ['oni-oblika prezenta', 'infinitiva', 'ja-oblika', 'participa'],
    answer: 'oni-oblika prezenta',
    tip: 'Third person plural of the present — the same starting point as the imperative.',
  },
  {
    mode: 'tvorba',
    q: 'vidjeti → ____ (prošli)',
    en: 'having seen',
    opts: ['vidjevši', 'videći', 'vidivši', 'vidjeći'],
    answer: 'vidjevši',
    tip: 'vidje- + -vši.',
  },
  {
    mode: 'tvorba',
    q: 'biti → ____ (sadašnji)',
    en: 'being',
    opts: ['budući', 'bivši', 'bijući', 'bućeći'],
    answer: 'budući',
    tip: 'budu → budući. Note bivši exists too, but as an adjective: "former".',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: '____ knjigu, zaspao je. (čitati, istodobno)',
    en: 'Reading the book, he fell asleep.',
    opts: ['Čitajući', 'Pročitavši', 'Čitavši', 'Pročitajući'],
    answer: 'Čitajući',
    tip: 'Simultaneous action → present adverb, from the imperfective.',
  },
  {
    mode: 'izbor',
    q: '____ knjigu, otišao je spavati. (pročitati, prije)',
    en: 'Having read the book, he went to bed.',
    opts: ['Pročitavši', 'Čitajući', 'Pročitajući', 'Čitavši'],
    answer: 'Pročitavši',
    tip: 'Completed FIRST → past adverb, from the perfective.',
  },
  {
    mode: 'izbor',
    q: 'Od kojeg vida se tvori sadašnji prilog?',
    en: 'Which aspect gives the present adverb?',
    opts: ['nesvršenoga', 'svršenoga', 'oba', 'nijednoga'],
    answer: 'nesvršenoga',
    tip: 'Imperfective only. A perfective has no ongoing action to describe.',
  },
  {
    mode: 'izbor',
    q: 'Od kojeg vida se tvori prošli prilog?',
    en: 'And the past adverb?',
    opts: ['svršenoga', 'nesvršenoga', 'oba', 'nijednoga'],
    answer: 'svršenoga',
    tip: 'Perfective — it names an action finished before the main verb.',
  },
  {
    mode: 'izbor',
    q: '____ na posao, sreo je prijatelja. (ići, usput)',
    en: 'Going to work, he met a friend.',
    opts: ['Idući', 'Otišavši', 'Išavši', 'Odlazeći'],
    answer: 'Idući',
    tip: 'On the way — simultaneous, so the present adverb.',
  },
  {
    mode: 'izbor',
    q: '____ pismo, poslao ga je. (napisati)',
    en: 'Having written the letter, he sent it.',
    opts: ['Napisavši', 'Pišući', 'Napisujući', 'Pisavši'],
    answer: 'Napisavši',
    tip: 'Writing finished before sending → past adverb.',
  },
  {
    mode: 'izbor',
    q: 'Što izriče sadašnji prilog?',
    en: 'What does the present adverb express?',
    opts: ['istodobnu radnju', 'prethodnu radnju', 'buduću radnju', 'uvjet'],
    answer: 'istodobnu radnju',
    tip: 'Something happening at the same time as the main verb.',
  },
  {
    mode: 'izbor',
    q: '____ da nema novca, nije ništa kupio. (znati)',
    en: 'Knowing he had no money, he bought nothing.',
    opts: ['Znajući', 'Saznavši', 'Znavši', 'Znajuć'],
    answer: 'Znajući',
    tip: 'A state that holds throughout — imperfective, present adverb.',
  },

  // ── pravila ───────────────────────────────────────────────────────────────
  {
    mode: 'pravila',
    q: 'Koje je glavno pravilo?',
    en: 'What is the main rule?',
    opts: [
      'prilog i glavni glagol dijele subjekt',
      'prilog stoji na kraju',
      'prilog traži zarez',
      'prilog mijenja rod',
    ],
    answer: 'prilog i glavni glagol dijele subjekt',
    tip: 'One subject for both. This is the rule the form itself never announces.',
  },
  {
    mode: 'pravila',
    q: 'Različiti subjekti — što onda?',
    en: 'Different subjects — then what?',
    opts: ['puna surečenica s "dok"', 'ipak prilog', 'infinitiv', 'imperativ'],
    answer: 'puna surečenica s "dok"',
    tip: 'Dok sam čitao, zazvonio je telefon — a full clause, because the subjects differ.',
  },
  {
    mode: 'pravila',
    q: 'Koja je rečenica ispravna?',
    en: 'Which sentence is correct?',
    opts: [
      'Čitajući knjigu, zaspao sam.',
      'Čitajući knjigu, zazvonio je telefon.',
      'Čitajući knjigu, majka je ušla.',
      'Čitajući knjigu, pao je mrak.',
    ],
    answer: 'Čitajući knjigu, zaspao sam.',
    tip: 'Only here do the reading and the falling asleep share a subject.',
  },
  {
    mode: 'pravila',
    q: 'Kojem registru pripada "-vši"?',
    en: 'Which register does -vši belong to?',
    opts: ['pisanome i književnome', 'razgovornome', 'dječjem', 'službenome samo'],
    answer: 'pisanome i književnome',
    tip: 'Markedly literary. You will read it far more often than you will say it.',
  },
  {
    mode: 'pravila',
    q: 'Mijenjaju li se glagolski prilozi po rodu i broju?',
    en: 'Do verbal adverbs inflect?',
    opts: ['ne', 'da, po rodu', 'da, po broju', 'da, po padežu'],
    answer: 'ne',
    tip: 'They are adverbs — one form, always. That is what makes them easy once formed.',
  },
  {
    mode: 'pravila',
    q: 'Zašto su važni za čitanje?',
    en: 'Why do they matter for reading?',
    opts: [
      'česti su u pisanome jeziku',
      'rabe se samo u govoru',
      'zamjenjuju padeže',
      'nose naglasak',
    ],
    answer: 'česti su u pisanome jeziku',
    tip: 'Written Croatian leans on them to compress two clauses into one.',
  },
  {
    mode: 'pravila',
    q: 'Treba li zarez uz prilog na početku?',
    en: 'Comma after an initial verbal-adverb phrase?',
    opts: ['da', 'ne', 'samo uz "-vši"', 'samo u dugim rečenicama'],
    answer: 'da',
    tip: 'Čitajući knjigu, zaspao sam. The phrase is fenced off like any insertion.',
  },
  {
    mode: 'pravila',
    q: 'Što je "budući da"?',
    en: 'What is budući da?',
    opts: ['veznik uzroka', 'glagolski prilog', 'prijedlog', 'zamjenica'],
    answer: 'veznik uzroka',
    tip: 'It began as this adverb and has frozen into a causal connector meaning "since".',
  },
];
