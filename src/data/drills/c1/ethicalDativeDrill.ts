// src/data/drills/c1/ethicalDativeDrill.ts
//
// C1 ETHICAL DATIVE — the drill for the `ethical-dative` lesson.
//
// The etički dativ (Pazi mi se!, Kako ti je mama?, Nemoj mi plakati!): always a clitic, in
// the cluster after li and the future auxiliary, before je and se. And the dative of
// direction to a person, with or without k (ka before k and g).
//
// Idem liječniku and Idem k liječniku are BOTH standard, so no item offers one as the
// error of the other: the k items test only the spelling ka/k, a wrong case or a wrong
// preposition.
//
// Three modes:
//   eticki — recognise and use the ethical dative
//   red    — its place in the clitic cluster
//   smjer  — direction to a person: dative, k, ka

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ETHICAL_DATIVE_MODE_LABELS: Record<string, string> = {
  eticki: '💛 Etički dativ',
  red: '🔢 Red riječi',
  smjer: '➡️ K komu?',
};

export const ETHICAL_DATIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── eticki ────────────────────────────────────────────────────────────────
  {
    mode: 'eticki',
    q: 'U kojoj je rečenici etički dativ?',
    opts: ['Nemoj mi plakati!', 'Daj mi olovku.', 'Rekla mi je istinu.', 'Kupio mi je cvijeće.'],
    answer: 'Nemoj mi plakati!',
    tip: 'Drop mi from "Nemoj mi plakati" and the facts stay the same; in the others mi receives something.',
  },
  {
    mode: 'eticki',
    q: 'U kojoj je rečenici etički dativ?',
    opts: [
      'Pokazao mi je put.',
      'Kako ti je baka?',
      'Poslala mi je poruku.',
      'Vratio mi je knjigu.',
    ],
    answer: 'Kako ti je baka?',
    tip: 'ti adds concern; nobody receives anything.',
  },
  {
    mode: 'eticki',
    q: 'U kojoj je rečenici etički dativ?',
    opts: [
      'Ti ćeš mi sutra rano ustati!',
      'Dao mi je ključ.',
      'Napisao mi je pismo.',
      'Posudila mi je kišobran.',
    ],
    answer: 'Ti ćeš mi sutra rano ustati!',
    tip: 'A parent insisting: mi adds feeling, not a participant.',
  },
  {
    mode: 'eticki',
    q: 'Pazi ____ se na putu!',
    en: 'Take care of yourself on the road!',
    opts: ['mi', 'meni', 'me', 'moj'],
    answer: 'mi',
    tip: 'The ethical dative is always the clitic: Pazi mi se!',
  },
  {
    mode: 'eticki',
    q: 'Kako ____ je tata?',
    en: 'How is your dad? (to a friend)',
    opts: ['ti', 'tebi', 'te', 'tvoj'],
    answer: 'ti',
    tip: 'The dative clitic of ti, before je.',
  },
  {
    mode: 'eticki',
    q: 'Kako ____ je suprug?',
    en: 'How is your husband? (to a neighbour, politely)',
    opts: ['vam', 'vama', 'vas', 'vi'],
    answer: 'vam',
    tip: 'The polite dative clitic vam.',
  },
  {
    mode: 'eticki',
    q: 'Što nestaje ako iz "Pazi mi se!" izostavimo dativ?',
    opts: ['briga govornika', 'primatelj radnje', 'glagol', 'vrijeme radnje'],
    answer: 'briga govornika',
    tip: "That is the test: an ethical dative adds the speaker's involvement, not a participant.",
  },
  {
    mode: 'eticki',
    q: 'Da ____ više nisi zakasnio!',
    en: "Don't you dare be late again!",
    opts: ['mi', 'meni', 'me', 'moj'],
    answer: 'mi',
    tip: 'A warning with feeling: the clitic mi.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Ti ____ sutra ranije ustati!',
    en: "You'll get up earlier tomorrow, I'm telling you!",
    opts: ['ćeš mi', 'mi ćeš', 'ćeš meni', 'će mi'],
    answer: 'ćeš mi',
    tip: 'The future auxiliary comes first in the cluster, then the dative.',
  },
  {
    mode: 'red',
    q: 'Pazi ____!',
    en: 'Take care of yourself!',
    opts: ['mi se', 'se mi', 'meni se', 'se meni'],
    answer: 'mi se',
    tip: 'Dative clitics come before se.',
  },
  {
    mode: 'red',
    q: 'Kako ____ mama?',
    en: 'How is your mum?',
    opts: ['ti je', 'je ti', 'tebi je', 'ti si'],
    answer: 'ti je',
    tip: 'The dative clitic comes before je.',
  },
  {
    mode: 'red',
    q: 'Nemoj ____ ljutiti!',
    en: "Don't be angry!",
    opts: ['mi se', 'se mi', 'meni se', 'me se'],
    answer: 'mi se',
    tip: 'Dative before se: Nemoj mi se ljutiti!',
  },
  {
    mode: 'red',
    q: 'Jesi ____ se lijepo naspavao?',
    en: 'Did you have a good sleep? (to a child)',
    opts: ['li mi', 'mi li', 'li meni', 'meni li'],
    answer: 'li mi',
    tip: 'li comes first in the cluster, then the dative, then se.',
  },
  {
    mode: 'red',
    q: 'Gle ____ njega, opet spava!',
    en: 'Just look at him, asleep again!',
    opts: ['ti', 'tebi', 'te', 'tvoj'],
    answer: 'ti',
    tip: 'A fixed ethical dative: Gle ti njega!',
  },
  {
    mode: 'red',
    q: 'Vi ____ sutra doći na vrijeme!',
    en: 'You will come on time tomorrow, all of you!',
    opts: ['ćete mi', 'mi ćete', 'ćete meni', 'će mi'],
    answer: 'ćete mi',
    tip: 'Auxiliary first, then the dative clitic.',
  },
  {
    mode: 'red',
    q: 'Sad ____ lijepo jedi!',
    en: 'Now eat up nicely!',
    opts: ['mi', 'meni', 'me', 'moj'],
    answer: 'mi',
    tip: 'A parent coaxing: the clitic mi after the first word.',
  },

  // ── smjer ─────────────────────────────────────────────────────────────────
  {
    mode: 'smjer',
    q: 'Idemo ____ kumu na ručak.',
    en: 'We are going to our best man for lunch.',
    opts: ['ka', 'k', 'kod', 'kao'],
    answer: 'ka',
    tip: 'Before a word beginning with k, the preposition is ka.',
  },
  {
    mode: 'smjer',
    q: 'Sutra idem ____ liječniku.',
    en: 'Tomorrow I am going to the doctor.',
    opts: ['k', 'ka', 'kod', 'na'],
    answer: 'k',
    tip: 'k before l. (Idem liječniku, without a preposition, is standard too.)',
  },
  {
    mode: 'smjer',
    q: 'Krenuli smo ____ gradu.',
    en: 'We set off towards the city.',
    opts: ['ka', 'k', 'kod', 'u'],
    answer: 'ka',
    tip: 'Before g the preposition is ka: ka gradu.',
  },
  {
    mode: 'smjer',
    q: 'Dođi ____ kad stigneš.',
    en: 'Come to me when you arrive.',
    opts: ['k meni', 'k mi', 'ka mi', 'k mene'],
    answer: 'k meni',
    tip: 'After a preposition the pronoun is stressed: k meni.',
  },
  {
    mode: 'smjer',
    q: 'Večeras idemo ____ na rođendan.',
    cue: 'baka',
    en: "Tonight we are going to grandma's for her birthday.",
    opts: ['baki', 'baku', 'bake', 'bakom'],
    answer: 'baki',
    tip: 'Direction to a person: the dative, here without a preposition.',
  },
  {
    mode: 'smjer',
    q: 'Je li "Idem liječniku" pravilno?',
    opts: [
      'da, kao i "Idem k liječniku"',
      'ne, nužno je "k"',
      'ne, nužno je "ka"',
      'samo u pjesmama',
    ],
    answer: 'da, kao i "Idem k liječniku"',
    tip: 'Both are standard Croatian.',
  },
  {
    mode: 'smjer',
    q: 'Svratit ću ____ poslije posla.',
    en: "I'll drop in on you after work.",
    opts: ['k vama', 'k vam', 'ka vam', 'k vas'],
    answer: 'k vama',
    tip: 'k + the stressed dative: k vama.',
  },
  {
    mode: 'smjer',
    q: 'Otišla je ____ jer je boli zub.',
    cue: 'zubar',
    en: 'She went to the dentist because her tooth hurts.',
    opts: ['zubaru', 'zubar', 'zubara', 'zubarom'],
    answer: 'zubaru',
    tip: 'Direction to a person: the dative zubaru.',
  },
];
