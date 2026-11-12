// src/data/drills/a2/aspectPairsDrill.ts
//
// A2 ASPECT PAIRS — the drill for the `aspect-pairs` lesson.
//
// The common pairs, the three ways a pair is built (a prefix, a change of suffix, a
// different word), and the choice in context. The context items are written so that
// only ONE aspect fits: "right now" or a duration for the imperfective, a deadline or
// "the whole thing" for the perfective. Habitual contexts are deliberately not tested
// against a perfective present: an iterative perfective (Svako jutro popijem kavu) is
// correct Croatian, so such an item would mark a native sentence wrong.
//
// Three modes:
//   parovi — find the partner
//   tvorba — how the pair is built, which verb is which
//   izbor  — choose the aspect in context

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ASPECT_PAIRS_MODE_LABELS: Record<string, string> = {
  parovi: '🔗 Parovi',
  tvorba: '🛠️ Tvorba',
  izbor: '🎯 Izbor',
};

export const ASPECT_PAIRS_DRILL_DATA: ModeDrillItem[] = [
  // ── parovi ────────────────────────────────────────────────────────────────
  {
    mode: 'parovi',
    q: 'Svršeni parnjak glagola "pisati": ____',
    en: 'The perfective partner of the verb meaning to write.',
    opts: ['napisati', 'pisanje', 'pisao', 'pišem'],
    answer: 'napisati',
    tip: 'pisati takes the prefix na-.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni parnjak glagola "čitati": ____',
    en: 'The perfective partner of the verb meaning to read.',
    opts: ['pročitati', 'čitanje', 'čitao', 'čitam'],
    answer: 'pročitati',
    tip: 'čitati takes the prefix pro- — read it through.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni parnjak glagola "učiti": ____',
    en: 'The perfective partner of the verb meaning to learn.',
    opts: ['naučiti', 'učenje', 'učio', 'učim'],
    answer: 'naučiti',
    tip: 'učiti takes the prefix na-.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni parnjak glagola "piti": ____',
    en: 'The perfective partner of the verb meaning to drink.',
    opts: ['popiti', 'piće', 'pio', 'pijem'],
    answer: 'popiti',
    tip: 'piti takes the prefix po-.',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni parnjak glagola "kupiti": ____',
    en: 'The imperfective partner of the verb meaning to buy.',
    opts: ['kupovati', 'kupivati', 'kupujati', 'kupljati'],
    answer: 'kupovati',
    tip: 'The imperfective is the longer verb: kupovati (kupujem, kupuješ…).',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni parnjak glagola "dati": ____',
    en: 'The imperfective partner of the verb meaning to give.',
    opts: ['davati', 'dajati', 'dadati', 'davivati'],
    answer: 'davati',
    tip: 'dati is stretched with -va-: davati (dajem, daješ…).',
  },
  {
    mode: 'parovi',
    q: 'Nesvršeni parnjak glagola "doći": ____',
    en: 'The imperfective partner of the verb meaning to come.',
    opts: ['dolaziti', 'doćivati', 'dohoditi', 'dolaćati'],
    answer: 'dolaziti',
    tip: 'An irregular pair: dolaziti / doći.',
  },
  {
    mode: 'parovi',
    q: 'Svršeni parnjak glagola "govoriti": ____',
    en: 'The perfective partner of the verb meaning to speak, to say.',
    opts: ['reći', 'govorivati', 'govorati', 'govoreti'],
    answer: 'reći',
    tip: 'A pair of two different words: govoriti / reći.',
  },
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Kako je nastao par "čitati — pročitati"?',
    en: 'How is this pair built?',
    opts: ['a prefix', 'a change of suffix', 'a different word', 'no change at all'],
    answer: 'a prefix',
    tip: 'pro- is added in front of čitati.',
  },
  {
    mode: 'tvorba',
    q: 'Kako je nastao par "kupovati — kupiti"?',
    en: 'How is this pair built?',
    opts: ['a change of suffix', 'a prefix', 'a different word', 'no change at all'],
    answer: 'a change of suffix',
    tip: 'Same root, different ending: the longer verb is the imperfective.',
  },
  {
    mode: 'tvorba',
    q: 'Kako je nastao par "govoriti — reći"?',
    en: 'How is this pair built?',
    opts: ['a different word', 'a prefix', 'a change of suffix', 'no change at all'],
    answer: 'a different word',
    tip: 'No shared root: the pair must simply be learned.',
  },
  {
    mode: 'tvorba',
    q: 'Kako je nastao par "piti — popiti"?',
    en: 'How is this pair built?',
    opts: ['a prefix', 'a change of suffix', 'a different word', 'no change at all'],
    answer: 'a prefix',
    tip: 'po- is added in front of piti.',
  },
  {
    mode: 'tvorba',
    q: 'Kako je nastao par "otvarati — otvoriti"?',
    en: 'How is this pair built?',
    opts: ['a change of suffix', 'a prefix', 'a different word', 'no change at all'],
    answer: 'a change of suffix',
    tip: 'Same root, different ending, and the o turns to a in the imperfective.',
  },
  {
    mode: 'tvorba',
    q: 'Koji je glagol svršeni?',
    en: 'Which verb is perfective?',
    opts: ['popiti', 'pisati', 'kupovati', 'davati'],
    answer: 'popiti',
    tip: 'popiti is piti + the prefix po-; the others are imperfective.',
  },
  {
    mode: 'tvorba',
    q: 'Koji je glagol nesvršeni?',
    en: 'Which verb is imperfective?',
    opts: ['dolaziti', 'doći', 'dati', 'napisati'],
    answer: 'dolaziti',
    tip: 'dolaziti is the process; the others are perfective.',
  },
  {
    mode: 'tvorba',
    q: 'Koji je glagol svršeni?',
    en: 'Which verb is perfective?',
    opts: ['kupiti', 'čitati', 'učiti', 'dolaziti'],
    answer: 'kupiti',
    tip: 'In the pair kupovati / kupiti the shorter verb is perfective.',
  },
  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: 'Ne mogu sad razgovarati, ____ e-mail.',
    en: "I can't talk now, I'm in the middle of writing an email.",
    opts: ['pišem', 'napišem', 'napisati', 'napisao'],
    answer: 'pišem',
    tip: 'Right now = a process. A perfective present cannot mean "at this moment".',
  },
  {
    mode: 'izbor',
    q: 'Moram ____ cijelu knjigu do petka.',
    en: 'I have to finish reading the whole book by Friday.',
    opts: ['pročitati', 'čitati', 'čitam', 'pročitam'],
    answer: 'pročitati',
    tip: 'The whole book, finished by a deadline: the perfective infinitive.',
  },
  {
    mode: 'izbor',
    q: 'Djeca ____ već dva sata.',
    en: 'The children have been studying for two hours.',
    opts: ['uče', 'nauče', 'naučiti', 'naučila'],
    answer: 'uče',
    tip: 'A duration goes with the imperfective.',
  },
  {
    mode: 'izbor',
    q: 'Sutra ću ti ____ knjigu.',
    en: "Tomorrow I'll give you the book, once.",
    opts: ['dati', 'davati', 'dajem', 'dam'],
    answer: 'dati',
    tip: 'One act of giving after ću: the perfective infinitive.',
  },
  {
    mode: 'izbor',
    q: 'Tiho, molim te, sad ____ za ispit.',
    en: "Quiet, please — I'm studying for an exam right now.",
    opts: ['učim', 'naučim', 'naučiti', 'naučio'],
    answer: 'učim',
    tip: 'Right now: the imperfective present.',
  },
  {
    mode: 'izbor',
    q: 'Želim ____ sto novih riječi.',
    en: 'I want to learn a hundred new words, so that I know them.',
    opts: ['naučiti', 'učiti', 'učim', 'naučim'],
    answer: 'naučiti',
    tip: 'Learned and known — a result: the perfective infinitive.',
  },
  {
    mode: 'izbor',
    q: 'Upravo ____ ručak, nazvat ću te poslije.',
    en: "I'm eating lunch right now, I'll call you later.",
    opts: ['jedem', 'pojedem', 'pojesti', 'pojeo'],
    answer: 'jedem',
    tip: 'upravo here means at this very moment: the imperfective present.',
  },
  {
    mode: 'izbor',
    q: 'Moram ____ ovaj e-mail do pet sati.',
    en: 'I have to finish writing this email by five.',
    opts: ['napisati', 'pisati', 'pišem', 'napišem'],
    answer: 'napisati',
    tip: 'One email, finished by a deadline: the perfective infinitive.',
  },
];
