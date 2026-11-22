// src/data/drills/a1/possessivesDrill.ts
//
// A1 POSSESSIVES — the drill for the `possessives` lesson.
//
// Follows Hrvatski za početnike 1, pages 20–21: the Anić family text ("Ovo su naši
// roditelji…", "Martin je njezin muž. Danijela je njegova žena."), the POSVOJNE
// ZAMJENICE table (moj, tvoj, njegov, njezin, naš, vaš, njihov in singular and plural)
// and the čiji / čija / čije questions ("Čiji je ovo kofer?"). Everything stays in the
// subject form; the owner is given in parentheses the way the book gives it.
//
// Three modes:
//   oblik   — the ending follows the thing owned
//   vlasnik — the owner picks the word: njegov, njezin, njihov…
//   ciji    — asking and answering "whose?"

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const POSSESSIVES_MODE_LABELS: Record<string, string> = {
  oblik: '🔤 Oblik',
  vlasnik: '👪 Vlasnik',
  ciji: '❓ Čiji?',
};

export const POSSESSIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Ovo je ____ brat. (ja)',
    en: 'This is my brother.',
    opts: ['moj', 'moja', 'moje', 'moji'],
    answer: 'moj',
    tip: 'brat is masculine, so moj, whoever is speaking. moja is for a feminine noun, moje for a neuter one, and moji for a masculine plural.',
  },
  {
    mode: 'oblik',
    q: 'Ovo je ____ sestra. (ja)',
    en: 'This is my sister.',
    opts: ['moja', 'moj', 'moje', 'moji'],
    answer: 'moja',
    tip: 'sestra is feminine, so moja. The -a comes from sestra, not from the speaker: a man says moja sestra too.',
  },
  {
    mode: 'oblik',
    q: 'To je ____ selo. (mi)',
    en: 'That is our village.',
    opts: ['naše', 'naš', 'naša', 'naši'],
    answer: 'naše',
    tip: 'selo is neuter, so naše. naš is for a masculine noun, naša for a feminine one, and naši for a masculine plural.',
  },
  {
    mode: 'oblik',
    q: 'Ovo je ____ torba. (ti)',
    en: 'This is your bag.',
    opts: ['tvoja', 'tvoj', 'tvoje', 'tvoji'],
    answer: 'tvoja',
    tip: 'torba is feminine, so tvoja. tvoj would fit a masculine noun like ključ, and tvoje a neuter one like pismo.',
  },
  {
    mode: 'oblik',
    q: 'Ovo su ____ profesori. (mi)',
    en: 'These are our professors.',
    opts: ['naši', 'naše', 'naša', 'naš'],
    answer: 'naši',
    tip: 'profesori is a masculine plural, so naši. naše is for a feminine plural, naša for a neuter plural, and naš is singular.',
  },
  {
    mode: 'oblik',
    q: 'To su ____ knjige. (ja)',
    en: 'Those are my books.',
    opts: ['moje', 'moji', 'moja', 'moj'],
    answer: 'moje',
    tip: 'knjige is a feminine plural, so moje. moji is for a masculine plural (moji prijatelji), and moja here would be the singular form.',
  },
  {
    mode: 'oblik',
    q: 'Ovo je ____ auto. (mi)',
    en: 'This is our car.',
    opts: ['naš', 'naše', 'naša', 'naši'],
    answer: 'naš',
    tip: 'auto is masculine, although it ends in -o, so naš. naše is the trap: it would be right for a real neuter like selo.',
  },
  {
    mode: 'oblik',
    q: 'To su ____ pisma. (ti)',
    en: 'Those are your letters.',
    opts: ['tvoja', 'tvoje', 'tvoji', 'tvoj'],
    answer: 'tvoja',
    tip: 'pisma is a neuter plural, and the neuter plural takes -a: tvoja pisma. tvoje is for one letter (tvoje pismo) or a feminine plural; tvoji is masculine plural.',
  },
  {
    mode: 'oblik',
    q: 'Ovo su ____ prijatelji. (ti)',
    en: 'These are your friends.',
    opts: ['tvoji', 'tvoje', 'tvoja', 'tvoj'],
    answer: 'tvoji',
    tip: 'prijatelji is a masculine plural, so tvoji. tvoje is for a feminine plural, tvoja for a neuter plural, and tvoj is singular.',
  },

  // ── vlasnik ───────────────────────────────────────────────────────────────
  {
    mode: 'vlasnik',
    q: 'Davor je muž. Maja je ____ žena.',
    en: 'Davor is a husband. Maja is his wife.',
    opts: ['njegova', 'njezina', 'njegov', 'njihova'],
    answer: 'njegova',
    tip: 'The owner is a man, so njegov-, and žena is feminine, so njegova. njezina means "her", njihova means "their", and njegov lacks the feminine ending.',
  },
  {
    mode: 'vlasnik',
    q: 'Maja je žena. Davor je ____ muž.',
    en: 'Maja is a wife. Davor is her husband.',
    opts: ['njezin', 'njegov', 'njezina', 'njihov'],
    answer: 'njezin',
    tip: 'The owner is a woman, so njezin-, and muž is masculine, so njezin. njegov means "his", njihov "their", and njezina would need a feminine noun.',
  },
  {
    mode: 'vlasnik',
    q: 'Davor i Maja su roditelji. Luka i Ema su ____ djeca.',
    en: 'Davor and Maja are parents. Luka and Ema are their children.',
    opts: ['njihova', 'njegova', 'njezina', 'naša'],
    answer: 'njihova',
    tip: 'Two owners make it "their": njihova djeca. njegova would be only his, njezina only hers, and naša would be "our".',
  },
  {
    mode: 'vlasnik',
    q: 'Ovo je Ana. Ovo je ____ brat.',
    en: 'This is Ana. This is her brother.',
    opts: ['njezin', 'njegov', 'njihov', 'njezina'],
    answer: 'njezin',
    tip: 'Ana is the owner, so "her": njezin. brat is masculine, so no -a. njegov would mean "his", and njihov "their".',
  },
  {
    mode: 'vlasnik',
    q: 'Ovo je Ivan. To je ____ knjiga.',
    en: 'This is Ivan. That is his book.',
    opts: ['njegova', 'njezina', 'njegov', 'njihova'],
    answer: 'njegova',
    tip: 'Ivan is the owner, so njegov-, and knjiga is feminine, so njegova. The -a does not make it "her": njezina would mean a woman owns it.',
  },
  {
    mode: 'vlasnik',
    q: 'Ti si Marko? Je li ovo ____ ključ?',
    en: 'You are Marko? Is this your key?',
    opts: ['tvoj', 'moj', 'njegov', 'tvoja'],
    answer: 'tvoj',
    tip: 'You are speaking to Marko as ti, so "your" is tvoj. moj is "my", njegov is "his", and tvoja would need a feminine noun.',
  },
  {
    mode: 'vlasnik',
    q: 'Ana i Ivan su ovdje. Ovo je ____ pas.',
    en: 'Ana and Ivan are here. This is their dog.',
    opts: ['njihov', 'njezin', 'njegov', 'njihova'],
    answer: 'njihov',
    tip: "Two owners: njihov. njezin would be only Ana's and njegov only Ivan's. pas is masculine, so njihova does not fit.",
  },
  {
    mode: 'vlasnik',
    q: 'Ovo je Petra. Ovo su ____ sestre.',
    en: 'This is Petra. These are her sisters.',
    opts: ['njezine', 'njegove', 'njezini', 'njezina'],
    answer: 'njezine',
    tip: 'Petra is the owner (njezin-), and sestre is a feminine plural, so njezine. njegove means "his"; njezini is for a masculine plural; njezina is singular.',
  },
  {
    mode: 'vlasnik',
    q: 'Mi smo brat i sestra. Ovo je ____ mama.',
    en: 'We are brother and sister. This is our mom.',
    opts: ['naša', 'vaša', 'njihova', 'naš'],
    answer: 'naša',
    tip: 'The owners are "we", so naš-, and mama is feminine: naša. vaša is "your", njihova is "their", and naš would need a masculine noun.',
  },

  // ── ciji ──────────────────────────────────────────────────────────────────
  {
    mode: 'ciji',
    q: '____ je ovo ključ?',
    en: 'Whose key is this?',
    opts: ['Čiji', 'Čija', 'Čije', 'Tko'],
    answer: 'Čiji',
    tip: 'ključ is masculine, so Čiji. Čija is for a feminine noun, Čije for a neuter one, and Tko asks "who", not "whose".',
  },
  {
    mode: 'ciji',
    q: '____ je ovo torba?',
    en: 'Whose bag is this?',
    opts: ['Čija', 'Čiji', 'Čije', 'Tko'],
    answer: 'Čija',
    tip: 'torba is feminine, so Čija. The question word agrees with the thing, just like moj, moja, moje.',
  },
  {
    mode: 'ciji',
    q: '____ je ovo pismo?',
    en: 'Whose letter is this?',
    opts: ['Čije', 'Čiji', 'Čija', 'Što'],
    answer: 'Čije',
    tip: 'pismo is neuter, so Čije. Čiji is for a masculine noun, Čija for a feminine one, and Što asks "what".',
  },
  {
    mode: 'ciji',
    q: '____ je ovo auto?',
    en: 'Whose car is this?',
    opts: ['Čiji', 'Čije', 'Čija', 'Što'],
    answer: 'Čiji',
    tip: 'auto is masculine in spite of its -o, so Čiji. Čije is the trap: it is for true neuters such as pismo and selo.',
  },
  {
    mode: 'ciji',
    q: '____ su ovo rječnici?',
    en: 'Whose dictionaries are these?',
    opts: ['Čiji', 'Čije', 'Čija', 'Tko'],
    answer: 'Čiji',
    tip: 'rječnici is a masculine plural, and the masculine plural form is also Čiji. Čije is for a feminine plural and Čija for a neuter plural.',
  },
  {
    mode: 'ciji',
    q: '____ su ovo olovke?',
    en: 'Whose pencils are these?',
    opts: ['Čije', 'Čiji', 'Čija', 'Što'],
    answer: 'Čije',
    tip: 'olovke is a feminine plural, so Čije. Čiji is for a masculine plural (Čiji su ovo rječnici?), and Čija here would be for a neuter plural.',
  },
  {
    mode: 'ciji',
    q: 'Čija je ovo bilježnica? — ____.',
    en: 'Whose notebook is this? — Mine.',
    opts: ['Moja', 'Moj', 'Moje', 'Moji'],
    answer: 'Moja',
    tip: 'The answer copies the question: Čija? — Moja, because bilježnica is feminine. Moj, moje and moji answer Čiji? and Čije?',
  },
  {
    mode: 'ciji',
    q: 'Čiji je ovo rječnik? — To je ____ rječnik. (ona)',
    en: 'Whose dictionary is this? — It is her dictionary.',
    opts: ['njezin', 'njezina', 'njegov', 'njezino'],
    answer: 'njezin',
    tip: 'The owner is ona, so njezin-, and rječnik is masculine, so njezin with no extra ending. njegov would be "his"; njezina and njezino need a feminine or neuter noun.',
  },
  {
    mode: 'ciji',
    q: 'Čije su ovo knjige? — ____. (mi)',
    en: 'Whose books are these? — Ours.',
    opts: ['Naše', 'Naši', 'Naša', 'Naš'],
    answer: 'Naše',
    tip: 'knjige is a feminine plural, so Naše. Naši is for a masculine plural, naša for one feminine thing or a neuter plural, and naš for one masculine thing.',
  },
];
