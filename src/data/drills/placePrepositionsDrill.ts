// src/data/drills/placePrepositionsDrill.ts
//
// A1 PREPOSITIONS OF PLACE — the drill for the `prepositions-place` lesson.
//
// This is the lesson where the case system stops being theory. It sits at order
// 20, after `cases` (16), `accusative-intro` (17) and `locative-intro` (19), and
// the single thing it teaches that nothing else in the level does is that u and
// na SWITCH CASE with meaning: u gradu is where you are, u grad is where you are
// going. A learner who has met both cases separately still gets this wrong for
// months, because English marks the difference with a different preposition
// ("in" vs "into") and Croatian marks it with a different ending.
//
// Three modes:
//   izbor     — u or na (idiomatic, and there is no rule to derive it from)
//   kretanje  — locative for position, accusative for motion
//   genitiv   — the kod / pored / blizu / ispred / iza group

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const PLACE_PREPOSITIONS_MODE_LABELS: Record<string, string> = {
  izbor: '🏙️ U ili na',
  kretanje: '➡️ Mjesto ili cilj',
  genitiv: '📍 Genitivna skupina',
};

export const PLACE_PREPOSITIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: 'Živim ____ gradu.',
    en: 'I live in the city.',
    opts: ['u', 'na', 'kod', 'do'],
    answer: 'u',
    tip: 'Grad takes u: u gradu.',
  },
  {
    mode: 'izbor',
    q: 'Ljeti smo ____ moru.',
    en: 'In summer we are at the seaside.',
    opts: ['na', 'u', 'kod', 'iza'],
    answer: 'na',
    tip: 'More takes na — na moru. There is no logic to derive; it is learnt as a pair.',
  },
  {
    mode: 'izbor',
    q: 'Ona je ____ poslu.',
    en: 'She is at work.',
    opts: ['na', 'u', 'kod', 'pored'],
    answer: 'na',
    tip: 'Posao takes na: na poslu, na posao.',
  },
  {
    mode: 'izbor',
    q: 'Djeca su ____ školi.',
    en: 'The children are at school.',
    opts: ['u', 'na', 'kod', 'iza'],
    answer: 'u',
    tip: 'Škola takes u: u školi.',
  },
  {
    mode: 'izbor',
    q: 'Kupujem povrće ____ tržnici.',
    en: 'I buy vegetables at the market.',
    opts: ['na', 'u', 'kod', 'do'],
    answer: 'na',
    tip: 'Tržnica takes na — an open-air place, like most na words.',
  },
  {
    mode: 'izbor',
    q: 'Knjiga je ____ kući.',
    en: 'The book is in the house.',
    opts: ['u', 'na', 'kod', 'blizu'],
    answer: 'u',
    tip: 'Kuća takes u. Note kod kuće is a separate fixed phrase meaning "at home".',
  },
  {
    mode: 'izbor',
    q: 'Zašto "u gradu", a "na moru"?',
    en: 'Why the different prepositions?',
    opts: ['tako se ustalilo', 'more je veće', 'grad je muški rod', 'na se rabi za daleko'],
    answer: 'tako se ustalilo',
    tip: 'It is idiomatic. Learn each place together with its preposition, like a two-word noun.',
  },
  {
    mode: 'izbor',
    q: 'Bio sam ____ koncertu.',
    en: 'I was at a concert.',
    opts: ['na', 'u', 'kod', 'iza'],
    answer: 'na',
    tip: 'Events take na: na koncertu, na utakmici, na svadbi.',
  },

  // ── kretanje ──────────────────────────────────────────────────────────────
  {
    mode: 'kretanje',
    q: 'Idem u ____. (grad)',
    en: 'I am going to town.',
    opts: ['grad', 'gradu', 'grada', 'gradom'],
    answer: 'grad',
    tip: 'MOTION → accusative: idem u grad.',
  },
  {
    mode: 'kretanje',
    q: 'Ja sam u ____. (grad)',
    en: 'I am in town.',
    opts: ['gradu', 'grad', 'grada', 'gradom'],
    answer: 'gradu',
    tip: 'POSITION → locative: ja sam u gradu.',
  },
  {
    mode: 'kretanje',
    q: 'Putujemo na ____. (more)',
    en: 'We are travelling to the seaside.',
    opts: ['more', 'moru', 'mora', 'morem'],
    answer: 'more',
    tip: 'Motion after na → accusative: na more.',
  },
  {
    mode: 'kretanje',
    q: 'Odmaramo se na ____. (more)',
    en: 'We are relaxing at the seaside.',
    opts: ['moru', 'more', 'mora', 'morem'],
    answer: 'moru',
    tip: 'Position after na → locative: na moru.',
  },
  {
    mode: 'kretanje',
    q: 'Koji padež ide uz kretanje?',
    en: 'Which case goes with motion?',
    opts: ['akuzativ', 'lokativ', 'genitiv', 'dativ'],
    answer: 'akuzativ',
    tip: 'Where are you GOING → accusative. Where ARE you → locative.',
  },
  {
    mode: 'kretanje',
    q: 'Stavi tanjur na ____. (stol)',
    en: 'Put the plate on the table.',
    opts: ['stol', 'stolu', 'stola', 'stolom'],
    answer: 'stol',
    tip: 'Putting something somewhere is motion: na stol.',
  },
  {
    mode: 'kretanje',
    q: 'Tanjur je na ____. (stol)',
    en: 'The plate is on the table.',
    opts: ['stolu', 'stol', 'stola', 'stolom'],
    answer: 'stolu',
    tip: 'Already there — position: na stolu.',
  },
  {
    mode: 'kretanje',
    q: 'Koja je razlika: "u školu" i "u školi"?',
    en: 'What is the difference?',
    opts: ['cilj / mjesto', 'jednina / množina', 'sadašnjost / prošlost', 'nema razlike'],
    answer: 'cilj / mjesto',
    tip: 'U školu = to school (going). U školi = at school (being).',
  },

  // ── genitiv ───────────────────────────────────────────────────────────────
  {
    mode: 'genitiv',
    q: 'Večeras sam kod ____. (kuća)',
    en: 'I am at home this evening.',
    opts: ['kuće', 'kuću', 'kući', 'kućom'],
    answer: 'kuće',
    tip: 'Kod always takes the genitive: kod kuće = at home.',
  },
  {
    mode: 'genitiv',
    q: 'Čekam te ispred ____. (kino)',
    en: 'I am waiting for you in front of the cinema.',
    opts: ['kina', 'kino', 'kinu', 'kinom'],
    answer: 'kina',
    tip: 'Ispred + genitive: ispred kina.',
  },
  {
    mode: 'genitiv',
    q: 'Trgovina je blizu ____. (kolodvor)',
    en: 'The shop is near the station.',
    opts: ['kolodvora', 'kolodvor', 'kolodvoru', 'kolodvorom'],
    answer: 'kolodvora',
    tip: 'Blizu + genitive: blizu kolodvora.',
  },
  {
    mode: 'genitiv',
    q: 'Auto je iza ____. (zgrada)',
    en: 'The car is behind the building.',
    opts: ['zgrade', 'zgradu', 'zgradi', 'zgradom'],
    answer: 'zgrade',
    tip: 'Iza + genitive: iza zgrade.',
  },
  {
    mode: 'genitiv',
    q: 'Sjedim pored ____. (prozor)',
    en: 'I am sitting next to the window.',
    opts: ['prozora', 'prozor', 'prozoru', 'prozorom'],
    answer: 'prozora',
    tip: 'Pored + genitive: pored prozora.',
  },
  {
    mode: 'genitiv',
    q: 'Idem kod ____. (liječnik)',
    en: 'I am going to the doctor.',
    opts: ['liječnika', 'liječnik', 'liječniku', 'liječnikom'],
    answer: 'liječnika',
    tip: 'Kod stays genitive even for motion — that is what makes it worth memorising.',
  },
  {
    mode: 'genitiv',
    q: 'Koji padež traže kod, pored, blizu, ispred, iza?',
    en: 'Which case do they all take?',
    opts: ['genitiv', 'lokativ', 'akuzativ', 'dativ'],
    answer: 'genitiv',
    tip: 'All of them, always. One rule covers the whole group.',
  },
  {
    mode: 'genitiv',
    q: 'Ključevi su ispod ____. (stol)',
    en: 'The keys are under the table.',
    opts: ['stola', 'stol', 'stolu', 'stolom'],
    answer: 'stola',
    tip: 'Ispod + genitive: ispod stola.',
  },
];
