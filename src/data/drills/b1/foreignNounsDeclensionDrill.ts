// src/data/drills/b1/foreignNounsDeclensionDrill.ts
//
// B1 FOREIGN NAMES AND WORDS IN THE CASES — the drill for `foreign-nouns-declension`.
//
// Croatian keeps the foreign spelling and adds its own endings: an i sound takes a j
// (Tonyja, taksijem, hobiju), a final -o drops (Huga, Otta), a pronounced -e or -u stays
// (Goethea, u intervjuu), -io turns its o into j (na radiju, u studiju, Mario → Marija).
// A woman's name not ending in -a does not change, and the native dio is dijela.
//
// Three modes:
//   j   — words ending in an i sound
//   kraj — names and words in -o, -e, -u and -io
//   dio — dio → dijela, and women's names that stay unchanged

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FOREIGN_NOUNS_DECLENSION_MODE_LABELS: Record<string, string> = {
  j: '🅹 Umetnuti j',
  kraj: '🔚 -o, -e, -u, -io',
  dio: '🧩 Dio i ženska imena',
};

export const FOREIGN_NOUNS_DECLENSION_DRILL_DATA: ModeDrillItem[] = [
  // ── j ───────────────────────────────────────────────────────────────────
  {
    mode: 'j',
    q: 'Sutra idem na kavu s ____.',
    en: 'Tomorrow I am going for coffee with Tony.',
    opts: ['Tonyjem', 'Tonyem', 'Tonyom', 'Tonyjom'],
    answer: 'Tonyjem',
    tip: 'An i sound takes a j before the ending: Tonyjem.',
  },
  {
    mode: 'j',
    q: 'Upoznala sam ____ na moru.',
    en: 'I met Harry at the seaside.',
    opts: ['Harryja', 'Harrya', 'Harryju', 'Harryjem'],
    answer: 'Harryja',
    tip: 'The animate accusative looks like the genitive, with j.',
  },
  {
    mode: 'j',
    q: 'Došli smo ____.',
    en: 'We came by taxi.',
    opts: ['taksijem', 'taksiem', 'taksiom', 'taksija'],
    answer: 'taksijem',
    tip: 'The instrumental of means, with j: taksijem.',
  },
  {
    mode: 'j',
    q: 'Čekam ____ već pola sata.',
    en: 'I have been waiting for a taxi for half an hour.',
    opts: ['taksi', 'taksija', 'taksiju', 'taksijem'],
    answer: 'taksi',
    tip: 'A thing is inanimate: the accusative stays as the nominative.',
  },
  {
    mode: 'j',
    q: 'Pričaj mi o svom novom ____.',
    en: 'Tell me about your new hobby.',
    opts: ['hobiju', 'hobiu', 'hobiji', 'hobijem'],
    answer: 'hobiju',
    tip: 'o + the locative, with j: hobiju.',
  },
  {
    mode: 'j',
    q: 'Odluka ____ bila je jednoglasna.',
    en: 'The jury’s decision was unanimous.',
    opts: ['žirija', 'žiria', 'žiriju', 'žirijem'],
    answer: 'žirija',
    tip: 'The genitive, with j: žirija.',
  },
  {
    mode: 'j',
    q: 'Dao sam knjigu ____.',
    en: 'I gave the book to Johnny.',
    opts: ['Johnnyju', 'Johnnyu', 'Johnnyja', 'Johnnyjem'],
    answer: 'Johnnyju',
    tip: 'The dative, with j: Johnnyju.',
  },
  {
    mode: 'j',
    q: 'Ovo je pismo od ____.',
    en: 'This is a letter from Tony.',
    opts: ['Tonyja', 'Tonya', 'Tonyju', 'Tonyjem'],
    answer: 'Tonyja',
    tip: 'od + the genitive, with j: Tonyja.',
  },

  // ── kraj ──────────────────────────────────────────────────────────────────
  {
    mode: 'kraj',
    q: 'Sutra idem kod ____ na ručak.',
    en: 'Tomorrow I am going to Hugo’s for lunch.',
    opts: ['Huga', 'Hugoa', 'Hugu', 'Hugoja'],
    answer: 'Huga',
    tip: 'kod + the genitive; the -o drops, as in Marko → Marka.',
  },
  {
    mode: 'kraj',
    q: 'Razgovarala sam s ____.',
    en: 'I talked with Otto.',
    opts: ['Ottom', 'Ottoom', 'Ottoem', 'Ottu'],
    answer: 'Ottom',
    tip: 's + the instrumental; the -o drops: Ottom.',
  },
  {
    mode: 'kraj',
    q: 'Ne znam ništa o ____.',
    en: 'I do not know anything about Bruno.',
    opts: ['Brunu', 'Brunou', 'Bruna', 'Brunom'],
    answer: 'Brunu',
    tip: 'o + the locative; the -o drops: Brunu.',
  },
  {
    mode: 'kraj',
    q: 'Na satu njemačkog čitamo ____.',
    en: 'In German class we are reading Goethe.',
    opts: ['Goethea', 'Goethu', 'Goetheja', 'Goetha'],
    answer: 'Goethea',
    tip: 'A pronounced -e stays and the ending follows.',
  },
  {
    mode: 'kraj',
    q: 'U ____ je govorio o obitelji.',
    en: 'In the interview he talked about his family.',
    opts: ['intervjuu', 'intervjuju', 'intervju', 'intervjuom'],
    answer: 'intervjuu',
    tip: 'A final -u takes no j: intervjuu.',
  },
  {
    mode: 'kraj',
    q: 'Svako jutro slušam vijesti na ____.',
    en: 'Every morning I listen to the news on the radio.',
    opts: ['radiju', 'radiu', 'radiom', 'radiou'],
    answer: 'radiju',
    tip: 'In -io words the o becomes j: radiju.',
  },
  {
    mode: 'kraj',
    q: 'Bend snima pjesmu u ____.',
    en: 'The band is recording a song in the studio.',
    opts: ['studiju', 'studiu', 'studiou', 'studijom'],
    answer: 'studiju',
    tip: 'u + the locative; the o becomes j.',
  },
  {
    mode: 'kraj',
    q: 'Jučer sam u gradu vidio ____.',
    en: 'Yesterday in town I saw Mario.',
    opts: ['Marija', 'Mariju', 'Marioa', 'Marijom'],
    answer: 'Marija',
    tip: 'Mario becomes Marija — the man, not the woman (Mariju).',
  },
  {
    mode: 'kraj',
    q: 'Idem na izlet s ____.',
    en: 'I am going on a trip with Mario.',
    opts: ['Marijem', 'Marijom', 'Mariom', 'Mariojem'],
    answer: 'Marijem',
    tip: 'The instrumental of Mario: Marijem. Marijom is the woman.',
  },

  // ── dio ───────────────────────────────────────────────────────────────────
  {
    mode: 'dio',
    q: 'Najbolji ____ filma je kraj.',
    en: 'The best part of the film is the ending.',
    opts: ['dio', 'dijel', 'dijela', 'dijelo'],
    answer: 'dio',
    tip: 'The nominative singular is dio.',
  },
  {
    mode: 'dio',
    q: 'U drugom ____ knjige junak putuje.',
    en: 'In the second part of the book the hero travels.',
    opts: ['dijelu', 'diju', 'dijelom', 'diou'],
    answer: 'dijelu',
    tip: 'u + the locative on the long stem: dijelu.',
  },
  {
    mode: 'dio',
    q: 'Bez ovog ____ stroj ne radi.',
    en: 'Without this part the machine does not work.',
    opts: ['dijela', 'dija', 'dioa', 'dijelu'],
    answer: 'dijela',
    tip: 'bez + the genitive: dijela.',
  },
  {
    mode: 'dio',
    q: 'Tramvaj povezuje sve ____ grada.',
    en: 'The tram connects all parts of the city.',
    opts: ['dijelove', 'dijelovi', 'dioe', 'dijelovima'],
    answer: 'dijelove',
    tip: 'The object in the plural: the accusative plural.',
  },
  {
    mode: 'dio',
    q: 'Ovo su rezervni ____.',
    en: 'These are spare parts.',
    opts: ['dijelovi', 'dijelove', 'diovi', 'dijeli'],
    answer: 'dijelovi',
    tip: 'The nominative plural: dijelovi.',
  },
  {
    mode: 'dio',
    q: 'Idem na kavu sa svojom prijateljicom ____.',
    opts: ['Ingrid', 'Ingridom', 'Ingridu', 'Ingride'],
    answer: 'Ingrid',
    tip: 'A woman’s name not ending in -a does not change.',
  },
  {
    mode: 'dio',
    q: 'Ovo pismo je za moju kolegicu ____.',
    opts: ['Ruth', 'Ruthu', 'Ruthom', 'Ruthe'],
    answer: 'Ruth',
    tip: 'A woman’s name not ending in -a stays as it is.',
  },
  {
    mode: 'dio',
    q: 'Razgovarao sam o filmu sa susjedom ____.',
    opts: ['Carmen', 'Carmenom', 'Carmenu', 'Carmena'],
    answer: 'Carmen',
    tip: 'susjeda is feminine, and a woman’s name not in -a does not change.',
  },
];
