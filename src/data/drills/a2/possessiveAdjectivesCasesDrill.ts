// src/data/drills/a2/possessiveAdjectivesCasesDrill.ts
//
// A2 POSSESSIVE ADJECTIVES IN THE CASES — the drill for the
// `possessive-adjectives-cases` lesson (A2 position 6).
//
// Three modes, eight items each:
//   zenski  — Anina, Markova with a feminine noun, in every case
//   muski   — Anin, Markov with a masculine or neuter noun
//   mnozina — the plural: Markovih, Markovim, Anine
//
// The masculine and neuter genitive, dative and locative singular have TWO standard
// forms (Markova / Markovog, Markovu / Markovom). No item ever offers both, so a
// correct form is never marked wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const POSSESSIVE_ADJECTIVES_CASES_MODE_LABELS: Record<string, string> = {
  zenski: '👩 Ženski rod',
  muski: '👨 Muški i srednji rod',
  mnozina: '👪 Množina',
};

export const POSSESSIVE_ADJECTIVES_CASES_DRILL_DATA: ModeDrillItem[] = [
  // ── zenski ────────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'Spavam u ____ sobi.',
    en: "I sleep in Ana's room.",
    opts: ['Anina', 'Aninoj', 'Aninu', 'Anine'],
    answer: 'Aninoj',
    tip: 'U + locative, feminine: -oj.',
  },
  {
    mode: 'zenski',
    q: 'Ovo je auto ____ sestre.',
    en: "This is Marko's sister's car.",
    opts: ['Markova', 'Markove', 'Markovoj', 'Markovu'],
    answer: 'Markove',
    tip: 'Sestre is a feminine genitive.',
  },
  {
    mode: 'zenski',
    q: 'Volim ____ juhu.',
    en: "I love grandma's soup.",
    opts: ['bakina', 'bakine', 'bakinoj', 'bakinu'],
    answer: 'bakinu',
    tip: 'Juhu is a feminine accusative.',
  },
  {
    mode: 'zenski',
    q: 'Pišem ____ majci.',
    en: "I am writing to Ivan's mother.",
    opts: ['Ivanova', 'Ivanove', 'Ivanovoj', 'Ivanovim'],
    answer: 'Ivanovoj',
    tip: 'To whom? Feminine dative: -oj.',
  },
  {
    mode: 'zenski',
    q: 'Šetam s ____ sestrom.',
    en: "I am walking with Luka's sister.",
    opts: ['Lukina', 'Lukinom', 'Lukinim', 'Lukinu'],
    answer: 'Lukinom',
    tip: 'Feminine instrumental: -om.',
  },
  {
    mode: 'zenski',
    q: 'Ovdje nema ____ torbe.',
    en: "Maja's bag is not here.",
    opts: ['Majina', 'Majine', 'Majinoj', 'Majinu'],
    answer: 'Majine',
    tip: 'Nema takes the genitive.',
  },
  {
    mode: 'zenski',
    q: 'Sjedimo u ____ kuhinji.',
    en: "We are sitting in mum's kitchen.",
    opts: ['mamina', 'maminu', 'maminoj', 'mamine'],
    answer: 'maminoj',
    tip: 'U + locative, feminine.',
  },
  {
    mode: 'zenski',
    q: 'Upoznao sam ____ prijateljicu.',
    en: "I met Petar's friend.",
    opts: ['Petrova', 'Petrovu', 'Petrovoj', 'Petrove'],
    answer: 'Petrovu',
    tip: 'Petar loses its a; prijateljicu is a feminine accusative.',
  },
  // ── muski ─────────────────────────────────────────────────────────────────
  {
    mode: 'muski',
    q: 'Putujem s ____ bratom.',
    en: "I am travelling with Marko's brother.",
    opts: ['Markov', 'Markovim', 'Markovu', 'Markova'],
    answer: 'Markovim',
    tip: 'Masculine instrumental: -im.',
  },
  {
    mode: 'muski',
    q: 'Ovo je ____ bicikl.',
    en: "This is dad's bike.",
    opts: ['tatin', 'tatina', 'tatinog', 'tatinim'],
    answer: 'tatin',
    tip: 'The subject form of a masculine noun.',
  },
  {
    mode: 'muski',
    q: 'Pomažem ____ susjedu.',
    en: "I help Ana's neighbour.",
    opts: ['Anin', 'Anina', 'Aninom', 'Aninim'],
    answer: 'Aninom',
    tip: 'To whom? Masculine dative.',
  },
  {
    mode: 'muski',
    q: 'Igram se s ____ psom.',
    en: "I am playing with grandpa's dog.",
    opts: ['djedov', 'djedovim', 'djedovu', 'djedova'],
    answer: 'djedovim',
    tip: 'Masculine instrumental: -im.',
  },
  {
    mode: 'muski',
    q: 'Kupujem kruh za ____ doručak.',
    en: "I am buying bread for dad's breakfast.",
    opts: ['tatin', 'tatinog', 'tatina', 'tatinim'],
    answer: 'tatin',
    tip: 'Za + accusative; a masculine thing does not change.',
  },
  {
    mode: 'muski',
    q: 'Vidiš li ____ brata?',
    en: "Do you see Ana's brother?",
    opts: ['Anin', 'Aninog', 'Aninom', 'Aninim'],
    answer: 'Aninog',
    tip: 'A living masculine object.',
  },
  {
    mode: 'muski',
    q: 'Govorimo o ____ autu.',
    en: "We are talking about Ivan's car.",
    opts: ['Ivanov', 'Ivanovog', 'Ivanovom', 'Ivanovim'],
    answer: 'Ivanovom',
    tip: 'O + locative, masculine.',
  },
  {
    mode: 'muski',
    q: 'Volim ____ selo.',
    en: "I love grandpa's village.",
    opts: ['djedov', 'djedova', 'djedovo', 'djedove'],
    answer: 'djedovo',
    tip: 'A neuter object does not change.',
  },
  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Gledam ____ fotografije.',
    en: "I am looking at mum's photos.",
    opts: ['mamina', 'mamine', 'maminih', 'maminim'],
    answer: 'mamine',
    tip: 'Feminine plural object: -e.',
  },
  {
    mode: 'mnozina',
    q: 'Nema ____ ključeva.',
    en: "Marko's keys are not here.",
    opts: ['Markovi', 'Markove', 'Markovih', 'Markovim'],
    answer: 'Markovih',
    tip: 'Genitive plural: -ih.',
  },
  {
    mode: 'mnozina',
    q: 'Idem na izlet s ____ prijateljima.',
    en: "I am going on a trip with Ivan's friends.",
    opts: ['Ivanovi', 'Ivanove', 'Ivanovih', 'Ivanovim'],
    answer: 'Ivanovim',
    tip: 'Instrumental plural: -im.',
  },
  {
    mode: 'mnozina',
    q: '____ roditelji žive u Splitu.',
    en: "Ana's parents live in Split.",
    opts: ['Anin', 'Anini', 'Anine', 'Aninih'],
    answer: 'Anini',
    tip: 'Masculine plural subject: -i.',
  },
  {
    mode: 'mnozina',
    q: 'Svi vole ____ kolače.',
    en: "Everyone loves grandma's cakes.",
    opts: ['bakini', 'bakine', 'bakinih', 'bakinim'],
    answer: 'bakine',
    tip: 'Masculine plural object: -e.',
  },
  {
    mode: 'mnozina',
    q: 'Pričamo o ____ psima.',
    en: "We are talking about Luka's dogs.",
    opts: ['Lukini', 'Lukine', 'Lukinih', 'Lukinim'],
    answer: 'Lukinim',
    tip: 'O + locative plural: -im.',
  },
  {
    mode: 'mnozina',
    q: '____ knjige su na stolu.',
    en: "My brother's books are on the table.",
    opts: ['Bratov', 'Bratove', 'Bratovi', 'Bratovih'],
    answer: 'Bratove',
    tip: 'Feminine plural subject: -e.',
  },
  {
    mode: 'mnozina',
    q: 'Pomažem ____ sestrama.',
    en: "I help Petar's sisters.",
    opts: ['Petrove', 'Petrovih', 'Petrovim', 'Petrova'],
    answer: 'Petrovim',
    tip: 'Dative plural: -im.',
  },
];
