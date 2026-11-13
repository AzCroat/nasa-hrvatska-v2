// src/data/drills/c1/comparativeClausesDrill.ts
//
// C1 COMPARATIVE CLAUSES — the drill for the `comparative-clauses` lesson.
//
// kao što (a real comparison), kao da (as if — and the present stays after a past
// main verb), nego što before a clause after a comparative, the proportional pairs
// koliko… toliko and što… to, and the comma when the comparative clause comes first.
// Distractors are calques ("kao ako"), od before a clause, the wrong partner word or
// a misplaced comma — never a correct alternative. (kako for kao što and čim… tim for
// što… to are correct, so neither appears as a distractor.)
//
// Three modes:
//   kaoda   — kao što and kao da
//   nego    — nego što after a comparative
//   razmjer — koliko… toliko, što… to, and commas

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COMPARATIVE_CLAUSES_MODE_LABELS: Record<string, string> = {
  kaoda: '🎭 Kao što / kao da',
  nego: '📈 Nego što',
  razmjer: '⚖️ Što… to',
};

export const COMPARATIVE_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── kaoda ─────────────────────────────────────────────────────────────────
  {
    mode: 'kaoda',
    q: 'Ponaša se ____ je on ovdje šef.',
    en: 'He behaves as if he were the boss here.',
    opts: ['kao da', 'kao ako', 'nego da', 'od da'],
    answer: 'kao da',
    tip: 'An unreal comparison — only an appearance — takes kao da.',
  },
  {
    mode: 'kaoda',
    q: 'Izgleda ____ će padati kiša.',
    en: 'It looks as if it is going to rain.',
    opts: ['kao da', 'kao ako', 'koliko', 'nego što'],
    answer: 'kao da',
    tip: 'Izgleda kao da… — an appearance.',
  },
  {
    mode: 'kaoda',
    q: 'Ponašao se kao da ništa ne ____.',
    en: 'He behaved as if he knew nothing.',
    opts: ['zna', 'znao', 'znati', 'znajući'],
    answer: 'zna',
    tip: 'After kao da the present stays when the appearance is simultaneous.',
  },
  {
    mode: 'kaoda',
    q: 'Gledala me ____ me nikad nije vidjela.',
    en: 'She looked at me as if she had never seen me.',
    opts: ['kao da', 'kao ako', 'nego da', 'koliko da'],
    answer: 'kao da',
    tip: 'kao da + the perfect for something that would have happened earlier.',
  },
  {
    mode: 'kaoda',
    q: 'Sve je ispalo točno ____ smo planirali.',
    en: 'Everything turned out exactly as we had planned.',
    opts: ['kao što', 'nego da', 'od što', 'koliko da'],
    answer: 'kao što',
    tip: 'A comparison with what really happened: kao što.',
  },
  {
    mode: 'kaoda',
    q: 'Učinio sam ____ si mi rekao.',
    en: 'I did as you told me.',
    opts: ['kao što', 'kao ako', 'od što', 'nego da'],
    answer: 'kao što',
    tip: 'A real fact as the standard: kao što.',
  },
  {
    mode: 'kaoda',
    q: 'Govori hrvatski ____ je rođen u Zagrebu.',
    en: 'He speaks Croatian as if he had been born in Zagreb.',
    opts: ['kao da', 'kao ako', 'nego što', 'od što'],
    answer: 'kao da',
    tip: 'He was not born there — it only seems so: kao da.',
  },
  {
    mode: 'kaoda',
    q: '____ svi znate, ured je danas zatvoren.',
    en: 'As you all know, the office is closed today.',
    opts: ['Kao što', 'Kao da', 'Nego što', 'Koliko da'],
    answer: 'Kao što',
    tip: 'A real fact everyone knows: kao što, then a comma.',
  },

  // ── nego ──────────────────────────────────────────────────────────────────
  {
    mode: 'nego',
    q: 'Stan je skuplji ____ smo očekivali.',
    en: 'The flat is more expensive than we expected.',
    opts: ['nego što', 'od što', 'kao da', 'koliko'],
    answer: 'nego što',
    tip: 'A clause after a comparative needs nego što.',
  },
  {
    mode: 'nego',
    q: 'Put je trajao dulje ____ je pisalo u vodiču.',
    en: 'The trip took longer than the guidebook said.',
    opts: ['nego što', 'od što', 'kao što', 'toliko'],
    answer: 'nego što',
    tip: 'od cannot introduce a clause.',
  },
  {
    mode: 'nego',
    q: 'Zarada je bila manja ____ su obećali.',
    en: 'The pay was lower than they had promised.',
    opts: ['nego što', 'od što', 'kao da', 'to'],
    answer: 'nego što',
    tip: 'manja + a whole clause: nego što.',
  },
  {
    mode: 'nego',
    q: 'Radio je više ____ je trebalo.',
    en: 'He worked more than was necessary.',
    opts: ['nego što', 'od što', 'kao ako', 'koliko'],
    answer: 'nego što',
    tip: 'više + clause: nego što.',
  },
  {
    mode: 'nego',
    q: 'Ispit je bio lakši ____ sam se bojao.',
    en: 'The exam was easier than I had feared.',
    opts: ['nego što', 'od što', 'kao da', 'toliko'],
    answer: 'nego što',
    tip: 'A comparative followed by a clause: nego što.',
  },
  {
    mode: 'nego',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'The car is older than it looks.',
    opts: [
      'Auto je stariji nego što izgleda.',
      'Auto je stariji, nego što izgleda.',
      'Auto je, stariji nego što izgleda.',
      'Auto je stariji nego, što izgleda.',
    ],
    answer: 'Auto je stariji nego što izgleda.',
    tip: 'nego što follows the comparative it depends on: no comma.',
  },
  {
    mode: 'nego',
    q: 'Koja je rečenica točna?',
    en: 'It is better than I thought.',
    opts: [
      'Bolje je nego što sam mislio.',
      'Bolje je od što sam mislio.',
      'Bolje je kao što sam mislio.',
      'Bolje je kao da sam mislio.',
    ],
    answer: 'Bolje je nego što sam mislio.',
    tip: 'od takes a noun, not a clause.',
  },
  {
    mode: 'nego',
    q: 'Grad je bio ljepši ____ smo ga zamišljali.',
    en: 'The town was more beautiful than we had imagined it.',
    opts: ['nego što', 'od što', 'kao ako', 'koliko'],
    answer: 'nego što',
    tip: 'ljepši + clause: nego što.',
  },

  // ── razmjer ───────────────────────────────────────────────────────────────
  {
    mode: 'razmjer',
    q: 'Što prije, ____ bolje.',
    en: 'The sooner, the better.',
    opts: ['to', 'tako', 'toliko', 'nego'],
    answer: 'to',
    tip: 'Two comparatives in proportion: što… to.',
  },
  {
    mode: 'razmjer',
    q: '____ više čitaš, to bolje pišeš.',
    en: 'The more you read, the better you write.',
    opts: ['Što', 'Koliko', 'Kao', 'Nego'],
    answer: 'Što',
    tip: 'The partner of to with two comparatives is što.',
  },
  {
    mode: 'razmjer',
    q: 'Koliko radiš, ____ zaradiš.',
    en: 'You earn as much as you work.',
    opts: ['toliko', 'to', 'nego', 'kao'],
    answer: 'toliko',
    tip: 'koliko is answered by toliko.',
  },
  {
    mode: 'razmjer',
    q: '____ platiš, toliko dobiješ.',
    en: 'You get what you pay for.',
    opts: ['Koliko', 'Nego', 'Kao da', 'Od'],
    answer: 'Koliko',
    tip: 'toliko answers koliko: amount against amount.',
  },
  {
    mode: 'razmjer',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'You earn as much as you work.',
    opts: [
      'Koliko radiš, toliko zaradiš.',
      'Koliko radiš toliko zaradiš.',
      'Koliko, radiš toliko zaradiš.',
      'Koliko radiš toliko, zaradiš.',
    ],
    answer: 'Koliko radiš, toliko zaradiš.',
    tip: 'The comparative clause comes first, so a comma closes it.',
  },
  {
    mode: 'razmjer',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'As I said, the meeting is cancelled.',
    opts: [
      'Kao što sam rekao, sastanak je otkazan.',
      'Kao što sam rekao sastanak je otkazan.',
      'Kao, što sam rekao sastanak je otkazan.',
      'Kao što, sam rekao sastanak je otkazan.',
    ],
    answer: 'Kao što sam rekao, sastanak je otkazan.',
    tip: 'A clause that opens the sentence is closed with a comma.',
  },
  {
    mode: 'razmjer',
    q: 'Što smo se više približavali obali, ____ je vjetar bio jači.',
    en: 'The closer we got to the shore, the stronger the wind was.',
    opts: ['to', 'toliko', 'kao', 'nego'],
    answer: 'to',
    tip: 'što… to works in the past too.',
  },
  {
    mode: 'razmjer',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'The sooner we leave, the sooner we will arrive.',
    opts: [
      'Što prije krenemo, to ćemo prije stići.',
      'Što prije krenemo to ćemo prije stići.',
      'Što, prije krenemo to ćemo prije stići.',
      'Što prije krenemo to, ćemo prije stići.',
    ],
    answer: 'Što prije krenemo, to ćemo prije stići.',
    tip: 'The što-clause comes first: a comma before to.',
  },
];
