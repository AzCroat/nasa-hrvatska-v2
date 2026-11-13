// src/data/drills/c1/directSpeechSpellingDrill.ts
//
// C1 WRITING DIRECT SPEECH — the drill for the `direct-speech-spelling` lesson.
//
// Hrvatski pravopis on direct speech: quotation marks that open low and close high
// („…“), single marks for a quotation inside a quotation, a colon and a capital after
// a reporting clause that comes first, the comma OUTSIDE the closing mark when the
// reporting clause follows, no comma after ? or !, lower case in the continuation of a
// split sentence, and the full stop outside a quoted fragment. Every distractor breaks
// exactly one of those rules. The glyph shape of the inner single marks varies between
// printers, so no item tests it — only that the inner pair is single.
//
// Three modes:
//   ispred  — reporting clause before the quotation
//   iza     — reporting clause after the quotation
//   sredina — reporting clause in the middle, fragments, quotes within quotes

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const DIRECT_SPEECH_SPELLING_MODE_LABELS: Record<string, string> = {
  ispred: '➡️ Najava ispred',
  iza: '⬅️ Najava iza',
  sredina: '↔️ Najava u sredini',
};

export const DIRECT_SPEECH_SPELLING_DRILL_DATA: ModeDrillItem[] = [
  // ── ispred ────────────────────────────────────────────────────────────────
  {
    mode: 'ispred',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'She said: "Come."',
    opts: ['Rekla je: „Dođi.“', 'Rekla je „Dođi.“', 'Rekla je: „dođi.“', 'Rekla je, „Dođi.“'],
    answer: 'Rekla je: „Dođi.“',
    tip: 'Colon after the reporting clause, capital letter, full stop inside.',
  },
  {
    mode: 'ispred',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'He asked: "Where are you?"',
    opts: [
      'Upitao je: „Gdje si?“',
      'Upitao je: „gdje si?“',
      'Upitao je „Gdje si?“',
      'Upitao je, „Gdje si?“',
    ],
    answer: 'Upitao je: „Gdje si?“',
    tip: 'Colon, capital, and the question mark inside the closing mark.',
  },
  {
    mode: 'ispred',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'Mum shouted: "Close the window!"',
    opts: [
      'Mama je viknula: „Zatvori prozor!“',
      'Mama je viknula: „zatvori prozor!“',
      'Mama je viknula „Zatvori prozor!“',
      'Mama je viknula, „Zatvori prozor!“',
    ],
    answer: 'Mama je viknula: „Zatvori prozor!“',
    tip: 'The exclamation mark belongs to the quotation and stays inside.',
  },
  {
    mode: 'ispred',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'The teacher said: "Read the third chapter."',
    opts: [
      'Učiteljica je rekla: „Pročitajte treće poglavlje.“',
      'Učiteljica je rekla: „pročitajte treće poglavlje.“',
      'Učiteljica je rekla „Pročitajte treće poglavlje.“',
      'Učiteljica je rekla, „Pročitajte treće poglavlje.“',
    ],
    answer: 'Učiteljica je rekla: „Pročitajte treće poglavlje.“',
    tip: 'A full quoted sentence after a colon opens with a capital.',
  },
  {
    mode: 'ispred',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'The driver announced: "We have arrived."',
    opts: [
      'Vozač je objavio: „Stigli smo.“',
      'Vozač je objavio „stigli smo.“',
      'Vozač je objavio: „stigli smo“.',
      'Vozač je objavio, „Stigli smo.“',
    ],
    answer: 'Vozač je objavio: „Stigli smo.“',
    tip: 'Colon, capital, full stop inside.',
  },
  {
    mode: 'ispred',
    q: 'Koji su znakovi hrvatski navodnici?',
    en: 'Choose the Croatian quotation marks.',
    opts: ['„…“', '“…„', '‟…„', '‚…„'],
    answer: '„…“',
    tip: 'Croatian quotation marks open low and close high.',
  },
  {
    mode: 'ispred',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'Ana wrote: "He said \'never\' and left."',
    opts: [
      'Ana je napisala: „Rekao je ‚nikad‘ i otišao.“',
      'Ana je napisala: „Rekao je „nikad“ i otišao.“',
      'Ana je napisala: „Rekao je (nikad) i otišao.“',
      'Ana je napisala: „Rekao je - nikad - i otišao.“',
    ],
    answer: 'Ana je napisala: „Rekao je ‚nikad‘ i otišao.“',
    tip: 'A quotation inside a quotation takes single marks.',
  },
  {
    mode: 'ispred',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'The guide asked: "Has everyone got a ticket?"',
    opts: [
      'Vodič je upitao: „Imaju li svi kartu?“',
      'Vodič je upitao: „imaju li svi kartu?“',
      'Vodič je upitao „Imaju li svi kartu?“',
      'Vodič je upitao: „Imaju li svi kartu“?',
    ],
    answer: 'Vodič je upitao: „Imaju li svi kartu?“',
    tip: 'The question belongs to the quotation, so the question mark stays inside.',
  },

  // ── iza ───────────────────────────────────────────────────────────────────
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"Come," she said.',
    opts: ['„Dođi“, rekla je.', '„Dođi,“ rekla je.', '„Dođi.“ rekla je.', '„Dođi“, Rekla je.'],
    answer: '„Dođi“, rekla je.',
    tip: 'No full stop inside; the comma comes after the closing mark; lower case follows.',
  },
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"I\'ll be late," he said.',
    opts: [
      '„Kasnit ću“, rekao je.',
      '„Kasnit ću,“ rekao je.',
      '„Kasnit ću.“ rekao je.',
      '„Kasnit ću“, Rekao je.',
    ],
    answer: '„Kasnit ću“, rekao je.',
    tip: 'Croatian puts the comma outside the quotation marks.',
  },
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"Are you coming?" Ana asked.',
    opts: [
      '„Dolaziš li?“ upitala je Ana.',
      '„Dolaziš li?“, upitala je Ana.',
      '„Dolaziš li“, upitala je Ana?',
      '„Dolaziš li?“ Upitala je Ana.',
    ],
    answer: '„Dolaziš li?“ upitala je Ana.',
    tip: 'The question mark stays inside and no comma follows it.',
  },
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"Stop!" she shouted.',
    opts: [
      '„Stani!“ viknula je.',
      '„Stani!“, viknula je.',
      '„Stani“! viknula je.',
      '„Stani!“ Viknula je.',
    ],
    answer: '„Stani!“ viknula je.',
    tip: 'An exclamation mark inside replaces the comma.',
  },
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"I\'m tired," said Ivan.',
    opts: [
      '„Umoran sam“, rekao je Ivan.',
      '„Umoran sam,“ rekao je Ivan.',
      '„Umoran sam.“ rekao je Ivan.',
      '„Umoran sam“ rekao je Ivan.',
    ],
    answer: '„Umoran sam“, rekao je Ivan.',
    tip: 'Comma after the closing mark, verb before the speaker.',
  },
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"Have you been to Dubrovnik?" the neighbour asked me.',
    opts: [
      '„Jesi li bila u Dubrovniku?“ upitala me susjeda.',
      '„Jesi li bila u Dubrovniku?“, upitala me susjeda.',
      '„Jesi li bila u Dubrovniku“, upitala me susjeda?',
      '„Jesi li bila u Dubrovniku?“ Upitala me susjeda.',
    ],
    answer: '„Jesi li bila u Dubrovniku?“ upitala me susjeda.',
    tip: 'Question mark inside, no comma, lower case.',
  },
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"We\'ll see each other tomorrow," said Marko.',
    opts: [
      '„Vidimo se sutra“, rekao je Marko.',
      '„Vidimo se sutra.“, rekao je Marko.',
      '„Vidimo se sutra,“ rekao je Marko.',
      '„Vidimo se sutra“ – Rekao je Marko.',
    ],
    answer: '„Vidimo se sutra“, rekao je Marko.',
    tip: 'The full stop drops and the comma stands outside the marks.',
  },
  {
    mode: 'iza',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"How wonderful!" exclaimed Grandma.',
    opts: [
      '„Kako divno!“ uskliknula je baka.',
      '„Kako divno!“, uskliknula je baka.',
      '„Kako divno“! uskliknula je baka.',
      '„Kako divno!“ Uskliknula je baka.',
    ],
    answer: '„Kako divno!“ uskliknula je baka.',
    tip: 'Exclamation mark inside, no comma, lower case.',
  },

  // ── sredina ───────────────────────────────────────────────────────────────
  {
    mode: 'sredina',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"Come," she said, "and bring bread."',
    opts: [
      '„Dođi“, rekla je, „i donesi kruh.“',
      '„Dođi“, rekla je, „I donesi kruh.“',
      '„Dođi,“ rekla je „i donesi kruh.“',
      '„Dođi“ rekla je „i donesi kruh.“',
    ],
    answer: '„Dođi“, rekla je, „i donesi kruh.“',
    tip: 'One sentence split: commas on both sides, lower case in the continuation.',
  },
  {
    mode: 'sredina',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"Tomorrow," she said, "we leave early."',
    opts: [
      '„Sutra“, rekla je, „krećemo rano.“',
      '„Sutra,“ rekla je, „krećemo rano.“',
      '„Sutra“, rekla je, „Krećemo rano.“',
      '„Sutra“ rekla je „krećemo rano.“',
    ],
    answer: '„Sutra“, rekla je, „krećemo rano.“',
    tip: 'Commas outside the marks on both sides of the reporting clause.',
  },
  {
    mode: 'sredina',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"I don\'t know," she said quietly, "where I left my keys."',
    opts: [
      '„Ne znam“, rekla je tiho, „gdje sam ostavila ključeve.“',
      '„Ne znam“, rekla je tiho, „Gdje sam ostavila ključeve.“',
      '„Ne znam.“ rekla je tiho „gdje sam ostavila ključeve.“',
      '„Ne znam,“ rekla je tiho, „gdje sam ostavila ključeve.“',
    ],
    answer: '„Ne znam“, rekla je tiho, „gdje sam ostavila ključeve.“',
    tip: 'The same sentence continues, so lower case after the second comma.',
  },
  {
    mode: 'sredina',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"We have arrived," said the driver. "Don\'t forget anything."',
    opts: [
      '„Stigli smo“, rekao je vozač. „Ne zaboravite ništa.“',
      '„Stigli smo“, rekao je vozač, „Ne zaboravite ništa.“',
      '„Stigli smo“, rekao je vozač. „ne zaboravite ništa.“',
      '„Stigli smo,“ rekao je vozač. „Ne zaboravite ništa.“',
    ],
    answer: '„Stigli smo“, rekao je vozač. „Ne zaboravite ništa.“',
    tip: 'A new sentence after the reporting clause: full stop, then a capital.',
  },
  {
    mode: 'sredina',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'The minister called it "a historic day".',
    opts: [
      'Ministar ga je nazvao „povijesnim danom“.',
      'Ministar ga je nazvao „Povijesnim danom.“',
      'Ministar ga je nazvao: „povijesnim danom“.',
      'Ministar ga je nazvao, „povijesnim danom“.',
    ],
    answer: 'Ministar ga je nazvao „povijesnim danom“.',
    tip: "A quoted fragment keeps lower case; the sentence's full stop goes outside.",
  },
  {
    mode: 'sredina',
    q: 'Koja je rečenica pravopisno točna?',
    en: 'He said it was "the last chance".',
    opts: [
      'Rekao je da je to „posljednja prilika“.',
      'Rekao je da je to „Posljednja prilika.“',
      'Rekao je da je to: „posljednja prilika“.',
      'Rekao je da je to, „posljednja prilika“.',
    ],
    answer: 'Rekao je da je to „posljednja prilika“.',
    tip: 'Reported speech with a quoted fragment: no colon, lower case.',
  },
  {
    mode: 'sredina',
    q: 'Koji je redak književnoga dijaloga s crtama točan?',
    en: 'Come, she said.',
    opts: [
      '— Dođi — rekla je.',
      '— Dođi, — rekla je.',
      '— Dođi. — Rekla je.',
      'Dođi — rekla je —.',
    ],
    answer: '— Dođi — rekla je.',
    tip: 'With dashes the reporting clause is set off without a comma.',
  },
  {
    mode: 'sredina',
    q: 'Koja je rečenica pravopisno točna?',
    en: '"If you can," he said, "call me tonight."',
    opts: [
      '„Ako možeš“, rekao je, „nazovi me večeras.“',
      '„Ako možeš,“ rekao je, „nazovi me večeras.“',
      '„Ako možeš“, rekao je, „Nazovi me večeras.“',
      '„Ako možeš“ rekao je „nazovi me večeras.“',
    ],
    answer: '„Ako možeš“, rekao je, „nazovi me večeras.“',
    tip: 'One sentence broken in two: commas outside, lower case after.',
  },
];
