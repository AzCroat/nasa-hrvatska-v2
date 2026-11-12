// src/data/drills/a1/pastIrregularDrill.ts
//
// A1 THE IRREGULAR PAST — the drill for the `past-irregular` lesson (masterOrder 57).
//
// Four families instead of ten exceptions: going and coming (išao / išla), the hidden
// k and g (rekao, mogao), htjeti and the -jeti verbs (htio / htjela), and the short
// stems (jeo, pio, bio). Affirmative statements only — questions and negation in the
// past arrive at lesson 58.
//
// Three modes:
//   ici    — ići, doći, otići, naći
//   rekao  — reći and moći
//   htio   — htjeti, vidjeti, živjeti, jesti, piti, biti

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PAST_IRREGULAR_MODE_LABELS: Record<string, string> = {
  ici: '🚶 Išao, došao',
  rekao: '🗣️ Rekao, mogao',
  htio: '🍽️ Htio, jeo, pio',
};

export const PAST_IRREGULAR_DRILL_DATA: ModeDrillItem[] = [
  // ── ici ───────────────────────────────────────────────────────────────────
  {
    mode: 'ici',
    q: 'Jučer sam ____ u grad.',
    en: 'Yesterday I went to town. (a man speaking)',
    opts: ['išao', 'išla', 'ićio', 'išli'],
    answer: 'išao',
    tip: 'ići → išao for a man. There is no -ti to swap, so the regular rule cannot work.',
  },
  {
    mode: 'ici',
    q: 'Ana je ____ u Zagreb.',
    en: 'Ana came to Zagreb.',
    opts: ['došla', 'došao', 'doćila', 'došli'],
    answer: 'došla',
    tip: 'doći → došla for a woman; the a of došao drops out.',
  },
  {
    mode: 'ici',
    q: 'Gosti su ____ u osam.',
    en: 'The guests left at eight.',
    opts: ['otišli', 'otišao', 'otišla', 'otićili'],
    answer: 'otišli',
    tip: 'A group takes -li: otišli.',
  },
  {
    mode: 'ici',
    q: 'Marko je ____ ključ.',
    en: 'Marko found the key.',
    opts: ['našao', 'našla', 'naćio', 'našli'],
    answer: 'našao',
    tip: 'naći belongs to the same family as ići: našao, našla.',
  },
  {
    mode: 'ici',
    q: 'Ivana i Maja su ____ na more.',
    en: 'Ivana and Maja went to the seaside.',
    opts: ['išle', 'išli', 'išla', 'išao'],
    answer: 'išle',
    tip: 'A group of only women takes -le.',
  },
  {
    mode: 'ici',
    q: 'Mama i tata su ____ u subotu.',
    en: 'Mum and dad came on Saturday.',
    opts: ['došli', 'došle', 'došla', 'došao'],
    answer: 'došli',
    tip: 'A mixed group takes -li.',
  },
  {
    mode: 'ici',
    q: 'Otac je ____ na posao.',
    en: 'Father left for work.',
    opts: ['otišao', 'otišla', 'otišli', 'otićio'],
    answer: 'otišao',
    tip: 'One man: otišao.',
  },
  {
    mode: 'ici',
    q: 'Ti si ____ rano, Ana!',
    en: 'You came early, Ana!',
    opts: ['došla', 'došao', 'došli', 'doćila'],
    answer: 'došla',
    tip: 'Ana is a woman, so the participle ends in -la.',
  },

  // ── rekao ─────────────────────────────────────────────────────────────────
  {
    mode: 'rekao',
    q: 'Marko je ____ "dobar dan".',
    en: 'Marko said good afternoon.',
    opts: ['rekao', 'rekla', 'rečio', 'reko'],
    answer: 'rekao',
    tip: 'The hidden k of reći comes back: rekao. "Reko" is colloquial speech.',
  },
  {
    mode: 'rekao',
    q: 'Ana je ____ "hvala".',
    en: 'Ana said thank you.',
    opts: ['rekla', 'rekao', 'rečila', 'rekli'],
    answer: 'rekla',
    tip: 'A woman: rekla.',
  },
  {
    mode: 'rekao',
    q: 'Studenti su ____ "dobar dan".',
    en: 'The students said good afternoon.',
    opts: ['rekli', 'rekao', 'rekla', 'rečili'],
    answer: 'rekli',
    tip: 'A group: rekli.',
  },
  {
    mode: 'rekao',
    q: '____ sam doći rano.',
    en: 'I was able to come early. (a man speaking)',
    opts: ['Mogao', 'Mogla', 'Moćio', 'Mogo'],
    answer: 'Mogao',
    tip: 'The hidden g of moći comes back: mogao. "Mogo" is colloquial speech.',
  },
  {
    mode: 'rekao',
    q: 'Ivana je ____ doći.',
    en: 'Ivana was able to come.',
    opts: ['mogla', 'mogao', 'moćila', 'mogle'],
    answer: 'mogla',
    tip: 'One woman: mogla. "Mogle" is a group of women.',
  },
  {
    mode: 'rekao',
    q: 'Mi smo ____ ići na more.',
    en: 'We were able to go to the seaside.',
    opts: ['mogli', 'mogao', 'moćili', 'mogla'],
    answer: 'mogli',
    tip: 'mi takes -li: mogli.',
  },
  {
    mode: 'rekao',
    q: 'Koji je infinitiv od "rekao"?',
    en: 'Which infinitive does this past form come from?',
    opts: ['reći', 'rekati', 'rečiti', 'rekti'],
    answer: 'reći',
    tip: 'reći — the k hides inside the -ći and returns in the past.',
  },
  {
    mode: 'rekao',
    q: 'Koji je infinitiv od "mogla"?',
    en: 'Which infinitive does this past form come from?',
    opts: ['moći', 'mogati', 'mogliti', 'možiti'],
    answer: 'moći',
    tip: 'moći — the g hides inside the -ći and returns in the past.',
  },

  // ── htio ──────────────────────────────────────────────────────────────────
  {
    mode: 'htio',
    q: '____ sam kavu.',
    en: 'I wanted coffee. (a man speaking)',
    opts: ['Htio', 'Htjeo', 'Htjela', 'Htila'],
    answer: 'Htio',
    tip: 'The masculine of htjeti is short: htio.',
  },
  {
    mode: 'htio',
    q: 'Ana je ____ čaj.',
    en: 'Ana wanted tea.',
    opts: ['htjela', 'htio', 'htila', 'htjeo'],
    answer: 'htjela',
    tip: 'The feminine keeps the je of the infinitive: htjela.',
  },
  {
    mode: 'htio',
    q: 'Jučer smo ____ ribu.',
    en: 'Yesterday we ate fish.',
    opts: ['jeli', 'jestili', 'jedli', 'jeo'],
    answer: 'jeli',
    tip: 'jesti has a tiny stem: jeo, jela, jeli.',
  },
  {
    mode: 'htio',
    q: 'Petar je ____ juhu.',
    en: 'Petar ate soup.',
    opts: ['jeo', 'jestio', 'jela', 'jedio'],
    answer: 'jeo',
    tip: 'One man: jeo.',
  },
  {
    mode: 'htio',
    q: 'Ivana je ____ vodu.',
    en: 'Ivana drank water.',
    opts: ['pila', 'pio', 'pijela', 'pili'],
    answer: 'pila',
    tip: 'piti → pio, pila, pili.',
  },
  {
    mode: 'htio',
    q: 'Ja sam ____ u Splitu.',
    en: 'I was in Split. (a man speaking)',
    opts: ['bio', 'bila', 'bijo', 'bili'],
    answer: 'bio',
    tip: 'biti → bio for a man.',
  },
  {
    mode: 'htio',
    q: '____ sam more prvi put.',
    en: 'I saw the sea for the first time. (a man speaking)',
    opts: ['Vidio', 'Vidjeo', 'Vidjela', 'Vidila'],
    answer: 'Vidio',
    tip: 'vidjeti works like htjeti: vidio for a man, vidjela for a woman.',
  },
  {
    mode: 'htio',
    q: 'Moja baka je ____ u Zadru.',
    en: 'My grandmother lived in Zadar.',
    opts: ['živjela', 'živila', 'živio', 'živjeo'],
    answer: 'živjela',
    tip: 'živjeti → živjela for a woman, živio for a man.',
  },
];
