// src/data/drills/a2/locativeAdjectivesDrill.ts
//
// A2 THE LOCATIVE OF ADJECTIVES — the drill for the `locative-adjectives` lesson.
//
// Three endings: -om for masculine and neuter (-em after a soft stem: c, č, ć, dž, đ,
// j, lj, nj, š, ž), -oj for feminine, -im in the plural. Demonstratives and
// possessives take the same endings, and svoj points back at the subject.
//
// Three modes:
//   pridjevi  — adjectives: velikom, velikoj, vrućem, velikim
//   zamjenice — taj, ovaj, moj, naš, njegov in the locative
//   svoj      — svoj against njegov / njezin after o, u, na

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const LOCATIVE_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  pridjevi: '🏙️ Pridjevi',
  zamjenice: '👉 Taj, moj, naš',
  svoj: '🪞 Svoj',
};

export const LOCATIVE_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── pridjevi ──────────────────────────────────────────────────────────────
  {
    mode: 'pridjevi',
    q: 'Živim u ____ gradu.',
    en: 'I live in a big city.',
    opts: ['velikom', 'veliki', 'velikoj', 'velikem'],
    answer: 'velikom',
    tip: 'Masculine locative, hard stem: -om.',
  },
  {
    mode: 'pridjevi',
    q: 'Stanujemo u ____ kući.',
    en: 'We live in a big house.',
    opts: ['velikoj', 'velikom', 'veliku', 'velika'],
    answer: 'velikoj',
    tip: 'Feminine locative: always -oj.',
  },
  {
    mode: 'pridjevi',
    q: 'Roditelji žive u ____ selu.',
    en: 'My parents live in a small village.',
    opts: ['malom', 'maloj', 'malo', 'malem'],
    answer: 'malom',
    tip: 'Neuter takes the same ending as masculine: -om.',
  },
  {
    mode: 'pridjevi',
    q: 'Djeca se igraju na ____ pijesku.',
    en: 'The children are playing on the hot sand.',
    opts: ['vrućem', 'vrućom', 'vrućoj', 'vruć'],
    answer: 'vrućem',
    tip: 'Vruć ends in ć, a soft consonant: -em.',
  },
  {
    mode: 'pridjevi',
    q: 'Kupamo se u ____ moru.',
    en: 'We swim in the warm sea.',
    opts: ['toplom', 'toploj', 'topao', 'toplem'],
    answer: 'toplom',
    tip: 'Neuter locative, hard stem: -om.',
  },
  {
    mode: 'pridjevi',
    q: 'Sjedimo na ____ plaži.',
    en: 'We are sitting on a beautiful beach.',
    opts: ['lijepoj', 'lijepom', 'lijepu', 'lijepa'],
    answer: 'lijepoj',
    tip: 'Plaža is feminine: -oj.',
  },
  {
    mode: 'pridjevi',
    q: 'Radim u ____ uredu.',
    en: 'I work in a new office.',
    opts: ['novom', 'novoj', 'novi', 'novem'],
    answer: 'novom',
    tip: 'Masculine, hard stem: -om.',
  },
  {
    mode: 'pridjevi',
    q: 'Živimo u ____ gradovima.',
    en: 'We live in big cities.',
    opts: ['velikim', 'velikom', 'velikoj', 'veliki'],
    answer: 'velikim',
    tip: 'In the plural every gender takes -im.',
  },
  {
    mode: 'pridjevi',
    q: 'Šetamo po ____ ulici.',
    en: 'We are walking along a quiet street.',
    opts: ['mirnoj', 'mirnom', 'mirnu', 'mirna'],
    answer: 'mirnoj',
    tip: 'Ulica is feminine: -oj.',
  },
  // ── zamjenice ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenice',
    q: 'Na ____ plaži ima puno ljudi.',
    en: 'There are a lot of people on that beach.',
    opts: ['toj', 'tom', 'taj', 'tu'],
    answer: 'toj',
    tip: 'Feminine locative of ta: toj.',
  },
  {
    mode: 'zamjenice',
    q: 'Što znaš o ____ gradu?',
    en: 'What do you know about this city?',
    opts: ['ovom', 'ovoj', 'ovaj', 'ovu'],
    answer: 'ovom',
    tip: 'Masculine locative of ovaj: ovom.',
  },
  {
    mode: 'zamjenice',
    q: 'U ____ stanu nema balkona.',
    en: 'There is no balcony in our flat.',
    opts: ['našem', 'našom', 'našoj', 'naš'],
    answer: 'našem',
    tip: 'Naš has a soft stem: -em.',
  },
  {
    mode: 'zamjenice',
    q: 'U ____ sobi spava beba.',
    en: 'The baby is sleeping in my room.',
    opts: ['mojoj', 'mom', 'moju', 'moja'],
    answer: 'mojoj',
    tip: 'Feminine locative of moja: mojoj.',
  },
  {
    mode: 'zamjenice',
    q: 'Na ____ stolu je puno papira.',
    en: 'There is a lot of paper on my desk.',
    opts: ['mom', 'mojoj', 'moj', 'mojom'],
    answer: 'mom',
    tip: 'Masculine locative of moj: mom (or mojem).',
  },
  {
    mode: 'zamjenice',
    q: 'Što misliš o ____ novom poslu?',
    en: 'What do you think about his new job?',
    opts: ['njegovom', 'njegovoj', 'njegov', 'njegovu'],
    answer: 'njegovom',
    tip: 'Posao is masculine: njegovom.',
  },
  {
    mode: 'zamjenice',
    q: 'Živite li u ____ zgradi?',
    en: 'Do you live in this building?',
    opts: ['ovoj', 'ovom', 'ova', 'ovu'],
    answer: 'ovoj',
    tip: 'Zgrada is feminine: ovoj.',
  },
  {
    mode: 'zamjenice',
    q: 'U ____ gradu ima puno parkova.',
    en: 'There are a lot of parks in your town. (to a group)',
    opts: ['vašem', 'vašom', 'vašoj', 'vaš'],
    answer: 'vašem',
    tip: 'Vaš has a soft stem: -em.',
  },
  {
    mode: 'zamjenice',
    q: 'Ručali smo na ____ otoku.',
    en: 'We had lunch on that island.',
    opts: ['tom', 'toj', 'taj', 'to'],
    answer: 'tom',
    tip: 'Masculine locative of taj: tom.',
  },
  // ── svoj ──────────────────────────────────────────────────────────────────
  {
    mode: 'svoj',
    q: 'Ana priča o ____ obitelji.',
    en: 'Ana is talking about her own family.',
    opts: ['svojoj', 'njezinoj', 'svoju', 'svom'],
    answer: 'svojoj',
    tip: 'The family is the subject’s own, feminine locative: svojoj.',
  },
  {
    mode: 'svoj',
    q: 'Petar priča o ____ poslu.',
    en: 'Petar is talking about his own job.',
    opts: ['svom', 'njegovom', 'svojoj', 'svoj'],
    answer: 'svom',
    tip: 'His own: svoj, masculine locative svom (or svojem).',
  },
  {
    mode: 'svoj',
    q: 'Ana priča o ____ obitelji.',
    en: 'Ana is talking about another woman’s family.',
    opts: ['njezinoj', 'svojoj', 'njezinu', 'svoju'],
    answer: 'njezinoj',
    tip: 'The owner is not the subject: njezin, feminine locative.',
  },
  {
    mode: 'svoj',
    q: 'Živim u ____ stanu, ne kod roditelja.',
    en: 'I live in my own flat, not with my parents.',
    opts: ['svom', 'svoj', 'svojoj', 'svoju'],
    answer: 'svom',
    tip: 'The subject owns the flat: svom (or svojem).',
  },
  {
    mode: 'svoj',
    q: 'Ivan priča o ____ prijateljima.',
    en: 'Ivan is talking about his own friends.',
    opts: ['svojim', 'svom', 'svoje', 'njegovim'],
    answer: 'svojim',
    tip: 'Plural locative: svojim.',
  },
  {
    mode: 'svoj',
    q: 'Petra piše o ____ putovanju.',
    en: 'Petra is writing about her own trip.',
    opts: ['svom', 'svojoj', 'svoje', 'njezinom'],
    answer: 'svom',
    tip: 'Putovanje is neuter: svom (or svojem).',
  },
];
