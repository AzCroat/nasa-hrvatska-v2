// src/data/drills/a1/reflexivePastFutureDrill.ts
//
// A1 SE IN THE PAST AND FUTURE — the drill for the `reflexive-past-future` lesson.
//
// Two small words now compete for second position, and the order is fixed: the
// short form of biti or htjeti first, se after it — sam se, smo se, ću se, ćemo se.
// In the third person singular past, standard Croatian drops je beside se
// (On se probudio). No item here offers "se je" as a wrong answer: it is heard in
// some regions, and a distractor must be wrong, not merely regional.
//
// Three modes:
//   proslo  — the past: sam se, si se, su se, and the participle
//   buduce  — the future: ću se, ćeš se, and the verb-first form (Probudit ću se)
//   red     — which sentence has the small words in order

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const REFLEXIVE_PAST_FUTURE_MODE_LABELS: Record<string, string> = {
  proslo: '⏪ Prošlo',
  buduce: '⏩ Buduće',
  red: '🔢 Red riječi',
};

export const REFLEXIVE_PAST_FUTURE_DRILL_DATA: ModeDrillItem[] = [
  // ── proslo ────────────────────────────────────────────────────────────────
  {
    mode: 'proslo',
    q: 'Jutros ____ probudio u sedam.',
    en: 'This morning I woke up at seven (a man speaking).',
    opts: ['se sam', 'sam se', 'sam', 'si se'],
    answer: 'sam se',
    tip: 'sam first, then se.',
  },
  {
    mode: 'proslo',
    q: 'Ana ____ tuširala navečer.',
    en: 'Ana showered in the evening.',
    opts: ['sam se', 'su se', 'se', 'si se'],
    answer: 'se',
    tip: 'Third person singular: standard Croatian keeps only se.',
  },
  {
    mode: 'proslo',
    q: 'Jako ____ umorili.',
    en: 'We got very tired.',
    opts: ['smo se', 'se smo', 'su se', 'ste se'],
    answer: 'smo se',
    tip: 'smo for mi, then se.',
  },
  {
    mode: 'proslo',
    q: 'Brat se ____ kući kasno.',
    en: 'My brother came home late.',
    opts: ['vratila', 'vratio', 'vratili', 'vratiti'],
    answer: 'vratio',
    tip: 'A man: the participle ends in -o.',
  },
  {
    mode: 'proslo',
    q: 'Jučer sam se brzo ____.',
    en: 'Yesterday I got dressed quickly (a woman speaking).',
    opts: ['obukao', 'obukla', 'obući', 'obukli'],
    answer: 'obukla',
    tip: 'obući → obukao (man), obukla (woman).',
  },
  {
    mode: 'proslo',
    q: 'Oni ____ dobro odmorili.',
    en: 'They had a good rest.',
    opts: ['se su', 'su se', 'se', 'smo se'],
    answer: 'su se',
    tip: 'In the plural su stays, before se.',
  },
  {
    mode: 'proslo',
    q: 'Kad ____ se probudila?',
    en: 'When did you wake up (to a woman)?',
    opts: ['sam', 'si', 'je', 'ste'],
    answer: 'si',
    tip: 'ti → si.',
  },
  {
    mode: 'proslo',
    q: 'Nisam ____ dobro osjećao.',
    en: 'I did not feel well.',
    opts: ['sam', 'se', 'si', 'me'],
    answer: 'se',
    tip: 'nisam already holds biti; osjećati se still needs se.',
  },

  // ── buduce ────────────────────────────────────────────────────────────────
  {
    mode: 'buduce',
    q: 'Sutra ____ probuditi rano.',
    en: 'Tomorrow I will wake up early.',
    opts: ['se ću', 'ću se', 'ću', 'sam se'],
    answer: 'ću se',
    tip: 'ću first, then se.',
  },
  {
    mode: 'buduce',
    q: 'Probudit ____ u šest.',
    en: 'I will wake up at six.',
    opts: ['se ću', 'ću se', 'sam se', 'ćeš se'],
    answer: 'ću se',
    tip: 'Verb first, then ću, then se.',
  },
  {
    mode: 'buduce',
    q: '____ ćemo se u subotu.',
    en: 'We will come back on Saturday.',
    opts: ['Vratiti', 'Vratit', 'Vratili', 'Vraćamo'],
    answer: 'Vratit',
    tip: 'A verb that opens the future drops its final -i in writing.',
  },
  {
    mode: 'buduce',
    q: 'Kad ćeš se ____?',
    en: 'When will you come back?',
    opts: ['vratit', 'vratio', 'vratiti', 'vraćaš'],
    answer: 'vratiti',
    tip: 'When ćeš comes first, the verb keeps its full infinitive.',
  },
  {
    mode: 'buduce',
    q: 'Ana ____ se tuširati navečer.',
    en: 'Ana will shower in the evening.',
    opts: ['ću', 'ćeš', 'će', 'ćemo'],
    answer: 'će',
    tip: 'ona → će.',
  },
  {
    mode: 'buduce',
    q: '____ se tuširati ujutro.',
    en: 'I will not shower in the morning.',
    opts: ['Nisam', 'Neću', 'Ne ću', 'Nije'],
    answer: 'Neću',
    tip: 'The negative future is one word: neću.',
  },
  {
    mode: 'buduce',
    q: 'Tuširat ____ navečer.',
    en: 'You will shower in the evening (to a friend).',
    opts: ['ćeš se', 'se ćeš', 'si se', 'će se'],
    answer: 'ćeš se',
    tip: 'ćeš for ti, then se.',
  },
  {
    mode: 'buduce',
    q: 'Sutra ____ se odmoriti.',
    en: 'Tomorrow you (plural) will have a rest.',
    opts: ['ćemo', 'ćete', 'ste', 'će'],
    answer: 'ćete',
    tip: 'vi → ćete.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'Yesterday I came back late (a man speaking).',
    opts: [
      'Jučer se sam vratio kasno.',
      'Jučer sam se vratio kasno.',
      'Jučer sam vratio se kasno.',
      'Se jučer sam vratio kasno.',
    ],
    answer: 'Jučer sam se vratio kasno.',
    tip: 'sam, then se, both in second position.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'Marko woke up at eight.',
    opts: [
      'Marko je probudio u osam.',
      'Marko se probudio u osam.',
      'Marko sam se probudio u osam.',
      'Marko su se probudili u osam.',
    ],
    answer: 'Marko se probudio u osam.',
    tip: 'probuditi se needs se, and the third person singular has only se.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'I will shower in the evening.',
    opts: [
      'Tuširati ću se navečer.',
      'Tuširat se ću navečer.',
      'Tuširat ću se navečer.',
      'Tuširat ću navečer se.',
    ],
    answer: 'Tuširat ću se navečer.',
    tip: 'Verb first without -i, then ću, then se.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'We will wake up early.',
    opts: [
      'Mi se ćemo probuditi rano.',
      'Mi ćemo probuditi se rano.',
      'Mi ćemo se probuditi rano.',
      'Se mi ćemo probuditi rano.',
    ],
    answer: 'Mi ćemo se probuditi rano.',
    tip: 'ćemo, then se, after the first element mi.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'Did you get some rest (to a woman)?',
    opts: [
      'Jesi li se odmorila?',
      'Li si se odmorila?',
      'Jesi se li odmorila?',
      'Se jesi li odmorila?',
    ],
    answer: 'Jesi li se odmorila?',
    tip: 'Jesi opens, li second, then se.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'This morning she woke up at six.',
    opts: [
      'Jutros sam se probudila u šest.',
      'Jutros se probudila u šest.',
      'Jutros je probudila u šest.',
      'Jutros su se probudila u šest.',
    ],
    answer: 'Jutros se probudila u šest.',
    tip: 'Third person singular: se alone, no je.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'I did not get dressed (a man speaking).',
    opts: ['Nisam se obukao.', 'Se nisam obukao.', 'Nisam obukao se.', 'Ne sam se obukao.'],
    answer: 'Nisam se obukao.',
    tip: 'nisam is a full word; se follows it.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'They will come back on Friday.',
    opts: [
      'Oni se će vratiti u petak.',
      'Oni će se vratiti u petak.',
      'Oni su se vratiti u petak.',
      'Oni će vratiti se u petak.',
    ],
    answer: 'Oni će se vratiti u petak.',
    tip: 'će first, then se.',
  },
];
