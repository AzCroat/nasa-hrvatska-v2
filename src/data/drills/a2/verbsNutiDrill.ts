// src/data/drills/a2/verbsNutiDrill.ts
//
// A2 VERBS WITH A HIDDEN STEM — the drill for the `verbs-nuti` lesson.
//
// Three groups whose present the infinitive does not show:
//   nuti — krenuti, skrenuti, maknuti, okrenuti: -nuti → -nem
//   nem  — stati, ostati, postati: an n appears in the present
//   doci — doći, naći, ući, izaći (đ), and otići → otiđem / odem; plus the commands
//
// Distractors are the forms learners actually build: -ujem by analogy with -ovati
// verbs, a dropped n, ć kept where the present has đ.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_NUTI_MODE_LABELS: Record<string, string> = {
  nuti: '🚦 -nuti → -nem',
  nem: '🛑 stati, ostati',
  doci: '🚪 doći, naći, ući',
};

export const VERBS_NUTI_DRILL_DATA: ModeDrillItem[] = [
  // ── nuti ──────────────────────────────────────────────────────────────────
  {
    mode: 'nuti',
    q: 'Ja obično ____ na posao u sedam.',
    en: 'I usually set off for work at seven.',
    opts: ['krenem', 'krenujem', 'krenam', 'krenim'],
    answer: 'krenem',
    tip: 'krenuti → kren- + -em. No -uj-, no -am.',
  },
  {
    mode: 'nuti',
    q: 'Oni ____ u osam sati.',
    en: 'They set off at eight.',
    opts: ['krene', 'krenu', 'krenuju', 'kreneju'],
    answer: 'krenu',
    tip: 'The oni ending is -u: krenu.',
  },
  {
    mode: 'nuti',
    q: 'Kod pošte ____ lijevo.',
    en: 'Turn left at the post office. (to a stranger)',
    opts: ['skrenite', 'skreni', 'skrenuli', 'skrenujte'],
    answer: 'skrenite',
    tip: 'A stranger gets the polite command: skren- + -ite.',
  },
  {
    mode: 'nuti',
    q: '____ torbu sa stola, molim te.',
    en: 'Move the bag off the table, please. (to a friend)',
    opts: ['Makni', 'Maknuj', 'Makneš', 'Maknuo'],
    answer: 'Makni',
    tip: 'The ti command: makn- + -i.',
  },
  {
    mode: 'nuti',
    q: 'Mi uvijek ____ desno kod crkve.',
    en: 'We always turn right at the church.',
    opts: ['skrenemo', 'skrenimo', 'skrenujemo', 'skrenamo'],
    answer: 'skrenemo',
    tip: 'The mi form of the present: skrenemo. Skrenimo is "let’s turn".',
  },
  {
    mode: 'nuti',
    q: 'Jučer je vlak ____ s pola sata kašnjenja.',
    en: 'Yesterday the train set off half an hour late.',
    opts: ['krenuo', 'krenio', 'krenao', 'krenu'],
    answer: 'krenuo',
    tip: 'The past is built from the infinitive: krenuti → krenuo.',
  },
  {
    mode: 'nuti',
    q: 'Čujem svoje ime, ____ se i vidim prijatelja.',
    en: 'I hear my name, turn round and see a friend.',
    opts: ['okrenem', 'okrenujem', 'okrećim', 'okrenam'],
    answer: 'okrenem',
    tip: 'okrenuti follows krenuti: okrenem.',
  },
  {
    mode: 'nuti',
    q: 'Ti uvijek ____ prvi.',
    en: 'You always set off first.',
    opts: ['kreneš', 'kreniš', 'krenuješ', 'krene'],
    answer: 'kreneš',
    tip: 'The ti ending is -eš: kreneš.',
  },
  // ── nem ───────────────────────────────────────────────────────────────────
  {
    mode: 'nem',
    q: 'Vikendom ____ kod kuće.',
    en: 'At weekends I stay at home.',
    opts: ['ostanem', 'ostam', 'ostanim', 'ostaem'],
    answer: 'ostanem',
    tip: 'ostati hides an n in its present: ostanem.',
  },
  {
    mode: 'nem',
    q: 'Autobus ____ ispred škole.',
    en: 'The bus stops in front of the school.',
    opts: ['stane', 'sta', 'stanu', 'stanuje'],
    answer: 'stane',
    tip: 'stati → stan- + -e. Stanuje is a different verb: "lives".',
  },
  {
    mode: 'nem',
    q: 'Oni nedjeljom ____ kod bake.',
    en: 'On Sundays they stay at their grandmother’s.',
    opts: ['ostane', 'ostanu', 'ostanete', 'ostanemo'],
    answer: 'ostanu',
    tip: 'The oni ending is -u.',
  },
  {
    mode: 'nem',
    q: '____! Crveno je!',
    en: 'Stop! It is red! (to a friend)',
    opts: ['Stani', 'Stoj se', 'Stanuj', 'Staj'],
    answer: 'Stani',
    tip: 'The command comes from the present stem stan-: stani.',
  },
  {
    mode: 'nem',
    q: 'Moj brat je ____ liječnik.',
    en: 'My brother became a doctor.',
    opts: ['postao', 'postanuo', 'postajo', 'postan'],
    answer: 'postao',
    tip: 'The past comes from the infinitive postati: postao.',
  },
  {
    mode: 'nem',
    q: 'Sutra ću ____ kod kuće.',
    en: 'Tomorrow I will stay at home.',
    opts: ['ostati', 'ostanem', 'ostat', 'ostanuti'],
    answer: 'ostati',
    tip: 'After ću the infinitive is written whole.',
  },
  {
    mode: 'nem',
    q: 'Koji je oblik ispravan?',
    en: 'Which form is correct?',
    opts: [
      'Ostat ću kod kuće.',
      'Ostati ću kod kuće.',
      'Ostanem ću kod kuće.',
      'Ću ostati kod kuće.',
    ],
    answer: 'Ostat ću kod kuće.',
    tip: 'An infinitive that opens the sentence loses its -i, and ću follows as a separate word.',
  },
  {
    mode: 'nem',
    q: 'Vi uvijek ____ do kraja.',
    en: 'You (plural) always stay until the end.',
    opts: ['ostanete', 'ostanite', 'ostanu', 'ostate'],
    answer: 'ostanete',
    tip: 'The vi form of the present: ostanete. Ostanite is the command.',
  },
  // ── doci ──────────────────────────────────────────────────────────────────
  {
    mode: 'doci',
    q: 'Moja sestra uvijek ____ kasno.',
    en: 'My sister always arrives late.',
    opts: ['dođe', 'doće', 'dođi', 'dođu'],
    answer: 'dođe',
    tip: 'doći → dođ- + -e. Dođi is the command.',
  },
  {
    mode: 'doci',
    q: 'Svaki petak ____ kod bake na ručak.',
    en: 'Every Friday I go round to my grandmother’s for lunch.',
    opts: ['odem', 'otijem', 'otićem', 'otim'],
    answer: 'odem',
    tip: 'otići is the odd one: it has two presents, otiđem and the short odem — both correct.',
  },
  {
    mode: 'doci',
    q: 'Uvijek ____ parking blizu ureda.',
    en: 'I always find a parking space near the office.',
    opts: ['nađem', 'naćem', 'nađim', 'najdem'],
    answer: 'nađem',
    tip: 'naći → nađ- + -em.',
  },
  {
    mode: 'doci',
    q: 'Djeca ____ u učionicu točno u osam.',
    en: 'The children go into the classroom at exactly eight.',
    opts: ['uđu', 'uđe', 'uću', 'uđeju'],
    answer: 'uđu',
    tip: 'ući → uđ- + -u for oni.',
  },
  {
    mode: 'doci',
    q: '____, molim vas!',
    en: 'Come in, please! (to guests)',
    opts: ['Uđite', 'Uđete', 'Ućite', 'Uđi'],
    answer: 'Uđite',
    tip: 'The polite command: uđ- + -ite.',
  },
  {
    mode: 'doci',
    q: 'Jučer smo ____ ključeve u autu.',
    en: 'Yesterday we found the keys in the car.',
    opts: ['našli', 'nađli', 'naćili', 'nađeli'],
    answer: 'našli',
    tip: 'naći has a short irregular past: našao, našla, našli.',
  },
  {
    mode: 'doci',
    q: 'Ana je ____ s posla u šest.',
    en: 'Ana left work at six.',
    opts: ['otišla', 'otićla', 'odila', 'otiđela'],
    answer: 'otišla',
    tip: 'otići has an irregular past: otišao, otišla.',
  },
  {
    mode: 'doci',
    q: 'Vi uvijek ____ na vrijeme.',
    en: 'You (plural) always arrive on time.',
    opts: ['dođete', 'doćete', 'dođu', 'dođeju'],
    answer: 'dođete',
    tip: 'The vi form of the present: dođete.',
  },
  {
    mode: 'doci',
    q: '____ k nama u nedjelju!',
    en: 'Come round to us on Sunday! (to a friend)',
    opts: ['Dođi', 'Doći', 'Dođeš', 'Dojdi'],
    answer: 'Dođi',
    tip: 'The ti command: dođ- + -i. Doći is the infinitive.',
  },
  {
    mode: 'doci',
    q: 'Svako jutro ____ iz kuće u sedam.',
    en: 'Every morning I go out of the house at seven.',
    opts: ['izađem', 'izaćem', 'izađim', 'izađu'],
    answer: 'izađem',
    tip: 'izaći follows doći: izađem.',
  },
];
