// src/data/drills/b2/readingCultureDrill.ts
//
// B2 READING CULTURE — the drill for the `reading-culture` lesson.
//
// The vocabulary of books (and the knjižnica / knjižara trap), the phrases for giving
// and weighing an opinion, and a few facts that are certain: Marko Marulić of Split,
// Judita finished in 1501, the Istrian book fair in Pula, Priče iz davnine by Ivana
// Brlić-Mažuranić.
//
// Three modes:
//   rijeci     — words for books and reading
//   misljenje  — giving and weighing an opinion
//   kultura    — writers, works and book fairs

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const READING_CULTURE_MODE_LABELS: Record<string, string> = {
  rijeci: '📚 Riječi',
  misljenje: '💬 Mišljenje',
  kultura: '🏛️ Kultura',
};

export const READING_CULTURE_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Knjige posuđujem u ____.',
    en: 'I borrow books at the library.',
    opts: ['knjižnici', 'knjižari', 'tiskari', 'pekari'],
    answer: 'knjižnici',
    tip: 'The library is where you borrow.',
  },
  {
    mode: 'rijeci',
    q: 'Novi roman kupila sam u ____.',
    en: 'I bought the new novel at the bookshop.',
    opts: ['knjižari', 'knjižnici', 'čitaonici', 'arhivu'],
    answer: 'knjižari',
    tip: 'The bookshop is where you buy.',
  },
  {
    mode: 'rijeci',
    q: 'Uređaj za čitanje e-knjiga zove se ____.',
    en: 'What is the device for reading e-books called?',
    opts: ['čitač', 'čitatelj', 'čitanka', 'čitaonica'],
    answer: 'čitač',
    tip: 'The device, not the person.',
  },
  {
    mode: 'rijeci',
    q: 'Osoba koja čita je ____.',
    en: 'What is a person who reads called?',
    opts: ['čitatelj', 'čitač', 'čitanka', 'čitaonica'],
    answer: 'čitatelj',
    tip: 'The person, not the device.',
  },
  {
    mode: 'rijeci',
    q: 'Tvrtka koja izdaje knjige je ____.',
    en: 'What is a company that publishes books called?',
    opts: ['nakladnik', 'knjižničar', 'čitatelj', 'knjižar'],
    answer: 'nakladnik',
    tip: 'The publishing house.',
  },
  {
    mode: 'rijeci',
    q: 'Osoba koja radi u knjižnici je ____.',
    en: 'What is a person who works in a library called?',
    opts: ['knjižničar', 'knjižar', 'nakladnik', 'pisac'],
    answer: 'knjižničar',
    tip: 'From the word for library.',
  },
  {
    mode: 'rijeci',
    q: 'Koja riječ znači "novel"?',
    en: 'Which word means a long work of fiction?',
    opts: ['roman', 'romansa', 'pjesma', 'članak'],
    answer: 'roman',
    tip: 'A roman is any novel, not only a love story.',
  },
  {
    mode: 'rijeci',
    q: 'Zbirka ____ ima stotinu stranica.',
    en: 'The collection of poems has a hundred pages.',
    opts: ['pjesama', 'pjesme', 'pjesmama', 'pjesmi'],
    answer: 'pjesama',
    tip: 'A collection OF poems: genitive plural.',
  },
  {
    mode: 'rijeci',
    q: 'Knjiga je tiskana na kvalitetnom ____.',
    en: 'The book is printed on good-quality paper.',
    opts: ['papiru', 'papir', 'papira', 'papirom'],
    answer: 'papiru',
    tip: 'na + locative.',
  },
  {
    mode: 'rijeci',
    q: 'Pročitao sam knjigu u jednom ____.',
    en: 'I read the book in one go.',
    opts: ['dahu', 'dah', 'daha', 'dahom'],
    answer: 'dahu',
    tip: 'u jednom dahu — in one breath; u + locative.',
  },
  // ── misljenje ─────────────────────────────────────────────────────────────
  {
    mode: 'misljenje',
    q: 'Po mom ____, čitanje je najbolji odmor.',
    en: 'In my opinion, reading is the best rest.',
    opts: ['mišljenju', 'mišljenje', 'mišljenja', 'mišljenjem'],
    answer: 'mišljenju',
    tip: 'po + locative.',
  },
  {
    mode: 'misljenje',
    q: 'S jedne strane e-knjige su jeftinije, a s ____ strane ljudi vole papir.',
    en: 'On the one hand e-books are cheaper, on the other people love paper.',
    opts: ['druge', 'drugu', 'drugoj', 'drugom'],
    answer: 'druge',
    tip: 's + genitive, like s jedne strane.',
  },
  {
    mode: 'misljenje',
    q: '____ da djeca premalo čitaju.',
    en: 'I believe that children read too little.',
    opts: ['Smatram', 'Smatraju', 'Smatrati', 'Smatran'],
    answer: 'Smatram',
    tip: 'First person singular of smatrati.',
  },
  {
    mode: 'misljenje',
    q: 'Ne slažem se s ____ mišljenjem.',
    en: 'I do not agree with your opinion.',
    opts: ['tvojim', 'tvoje', 'tvojem', 'tvoja'],
    answer: 'tvojim',
    tip: 's + instrumental: tvojim mišljenjem.',
  },
  {
    mode: 'misljenje',
    q: 'Meni je tiskana knjiga ____ od e-knjige.',
    en: 'To me a printed book is nicer than an e-book.',
    opts: ['ljepša', 'lijepa', 'ljepše', 'ljepši'],
    answer: 'ljepša',
    tip: 'The comparative, feminine, agreeing with knjiga.',
  },
  {
    mode: 'misljenje',
    q: 'Čitanje ____ maštu.',
    en: 'Reading develops the imagination.',
    opts: ['razvija', 'razvijaju', 'razvijati', 'razvijen'],
    answer: 'razvija',
    tip: 'Čitanje is singular: third person singular.',
  },
  {
    mode: 'misljenje',
    q: 'Djeca više čitaju ako im roditelji čitaju ____.',
    en: 'Children read more if their parents read to them aloud.',
    opts: ['naglas', 'glasan', 'glasa', 'glasovi'],
    answer: 'naglas',
    tip: 'One adverb: aloud.',
  },
  {
    mode: 'misljenje',
    q: 'Slažem se ____ tobom, e-knjige su praktične.',
    en: 'I agree with you, e-books are practical.',
    opts: ['s', 'na', 'o', 'u'],
    answer: 's',
    tip: 'slagati se s nekim — to agree with someone.',
  },
  // ── kultura ───────────────────────────────────────────────────────────────
  {
    mode: 'kultura',
    q: 'Tko je "otac hrvatske književnosti"?',
    en: 'Who is called the father of Croatian literature?',
    opts: ['Marko Marulić', 'August Šenoa', 'Ivan Gundulić', 'Miroslav Krleža'],
    answer: 'Marko Marulić',
    tip: 'The author of Judita.',
  },
  {
    mode: 'kultura',
    q: 'Marulić je Juditu završio ____ godine.',
    en: 'In which year did Marulić finish Judita?',
    opts: ['1501.', '1521.', '1450.', '1601.'],
    answer: '1501.',
    tip: 'It was printed in Venice twenty years later.',
  },
  {
    mode: 'kultura',
    q: 'Marko Marulić bio je iz ____.',
    en: 'Which city did Marulić come from?',
    opts: ['Splita', 'Pule', 'Rijeke', 'Osijeka'],
    answer: 'Splita',
    tip: 'He was born and lived in Dalmatia’s largest city.',
  },
  {
    mode: 'kultura',
    q: 'Judita je ____.',
    en: 'What kind of work is Judita?',
    opts: ['ep', 'roman', 'drama', 'zbirka priča'],
    answer: 'ep',
    tip: 'A long narrative poem.',
  },
  {
    mode: 'kultura',
    q: 'Sa(n)jam knjige u Istri održava se u ____.',
    en: 'In which city is the Istria book fair held?',
    opts: ['Puli', 'Zadru', 'Osijeku', 'Varaždinu'],
    answer: 'Puli',
    tip: 'The largest city in Istria.',
  },
  {
    mode: 'kultura',
    q: 'Priče iz davnine napisala je ____.',
    en: 'Who wrote Tales of Long Ago?',
    opts: ['Ivana Brlić-Mažuranić', 'Marko Marulić', 'August Šenoa', 'Ivan Gundulić'],
    answer: 'Ivana Brlić-Mažuranić',
    tip: 'The verb napisala tells you the author is a woman.',
  },
  {
    mode: 'kultura',
    q: 'Što znači poslovica "Tko čita, ne skita"?',
    en: 'What does the proverb about reading mean?',
    opts: [
      'Čitanje čuva od besposlice.',
      'Čitatelji puno putuju.',
      'Knjige su skupe.',
      'Čitaju samo djeca.',
    ],
    answer: 'Čitanje čuva od besposlice.',
    tip: 'skitati — to wander about idly.',
  },
  {
    mode: 'kultura',
    q: 'U hrvatskom naslovu velikim slovom piše se samo ____ riječ (i imena).',
    en: 'In a Croatian title, which word takes a capital letter (besides names)?',
    opts: ['prva', 'zadnja', 'svaka', 'najduža'],
    answer: 'prva',
    tip: 'Priče iz davnine.',
  },
];
