// src/data/drills/a1/numbersGenitiveDrill.ts
//
// A1 COUNTING THINGS — the drill for the `numbers-genitive` lesson (new A1, 84).
//
// The noun after a number depends on the number. One agrees like an adjective and
// leaves the noun alone; two, three and four take the genitive singular (dva stola,
// dvije knjige — and dvije is the feminine two); five and up, and every -naest number,
// take the genitive plural (pet stolova, dvanaest knjiga). In a long number only the
// last word decides. Items about the verb after five are deliberately absent: a plural
// verb there is heard from natives, so it is never offered as a wrong option.
//
// Three modes:
//   dva       — two, three, four
//   pet       — five and up
//   slozeni   — compound numbers: the last word decides
//   sati      — telling the time, prices and koliko dugo (moved here from lessons 14, 36
//               and 48, 2026-11-13: the book teaches them in L17, after the genitive)

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NUMBERS_GENITIVE_MODE_LABELS: Record<string, string> = {
  dva: '2️⃣ Dva, tri, četiri',
  pet: '5️⃣ Pet i više',
  slozeni: '🔢 Složeni brojevi',
  sati: '🕗 Sati i cijene',
};

export const NUMBERS_GENITIVE_DRILL_DATA: ModeDrillItem[] = [
  // ── dva ───────────────────────────────────────────────────────────────────
  {
    mode: 'dva',
    q: 'Imam ____ brata.',
    en: 'I have two brothers.',
    opts: ['dva', 'dvije', 'dvoje', 'dvaju'],
    answer: 'dva',
    tip: 'brat is masculine, so two is dva; dvije is only for feminine nouns.',
  },
  {
    mode: 'dva',
    q: 'Imam dvije ____.',
    en: 'I have two sisters.',
    opts: ['sestre', 'sestra', 'sestara', 'sestru'],
    answer: 'sestre',
    tip: 'After two, the genitive singular: feminine -a becomes -e.',
  },
  {
    mode: 'dva',
    q: 'Kava košta dva ____.',
    en: 'A coffee costs two euros.',
    opts: ['eura', 'euro', 'euri', 'eure'],
    answer: 'eura',
    tip: 'After two, the genitive singular of euro.',
  },
  {
    mode: 'dva',
    q: 'Ostajem tri ____.',
    en: 'I am staying for three days.',
    opts: ['dana', 'dan', 'dani', 'danima'],
    answer: 'dana',
    tip: 'After three, the genitive singular: masculine -a.',
  },
  {
    mode: 'dva',
    q: 'Tu su četiri ____.',
    en: 'Here are four chairs.',
    opts: ['stolice', 'stolica', 'stolicu', 'stolici'],
    answer: 'stolice',
    tip: 'After four, the genitive singular: feminine -e.',
  },
  {
    mode: 'dva',
    q: '____ kuće su nove.',
    en: 'Two houses are new.',
    opts: ['Dvije', 'Dva', 'Dvoje', 'Dvaju'],
    answer: 'Dvije',
    tip: 'kuća is feminine, so two is dvije.',
  },
  {
    mode: 'dva',
    q: 'U selu su tri ____.',
    en: 'There are three churches in the village.',
    opts: ['crkve', 'crkva', 'crkava', 'crkvu'],
    answer: 'crkve',
    tip: 'After three, the genitive singular: feminine -e. Crkava is for five and up.',
  },
  {
    mode: 'dva',
    q: 'Čekam četiri ____.',
    en: 'I have been waiting four hours.',
    opts: ['sata', 'sati', 'sat', 'satima'],
    answer: 'sata',
    tip: 'Two to four hours: sata. Five and up: sati.',
  },

  // ── pet ───────────────────────────────────────────────────────────────────
  {
    mode: 'pet',
    q: 'Ručak košta dvadeset ____.',
    en: 'Lunch costs twenty euros.',
    opts: ['eura', 'euro', 'eure', 'euri'],
    answer: 'eura',
    tip: 'A round ten counts like five: the genitive plural.',
  },
  {
    mode: 'pet',
    q: 'U gradu je šest ____.',
    en: 'There are six hotels in the town.',
    opts: ['hotela', 'hotel', 'hoteli', 'hotelu'],
    answer: 'hotela',
    tip: 'Five and up: the genitive plural, which for most masculine nouns ends in -a.',
  },
  {
    mode: 'pet',
    q: 'Imam pet ____.',
    en: 'I have five books.',
    opts: ['knjiga', 'knjige', 'knjigu', 'knjigama'],
    answer: 'knjiga',
    tip: 'Five and up: the genitive plural. Knjige is for two to four.',
  },
  {
    mode: 'pet',
    q: 'Spavam osam ____.',
    en: 'I sleep eight hours.',
    opts: ['sati', 'sata', 'sat', 'satu'],
    answer: 'sati',
    tip: 'Five and up hours: sati.',
  },
  {
    mode: 'pet',
    q: 'Na stolu je sedam ____.',
    en: 'There are seven glasses on the table.',
    opts: ['čaša', 'čaše', 'čašu', 'čašom'],
    answer: 'čaša',
    tip: 'Five and up: the genitive plural, which for feminine -a nouns ends in -a.',
  },
  {
    mode: 'pet',
    q: 'U razredu je dvanaest ____.',
    en: 'There are twelve pupils in the class.',
    opts: ['učenika', 'učenik', 'učenici', 'učenike'],
    answer: 'učenika',
    tip: 'Every -naest number counts like five: the genitive plural.',
  },
  {
    mode: 'pet',
    q: 'Grad ima devet ____.',
    en: 'The town has nine bridges.',
    opts: ['mostova', 'mosta', 'mostovi', 'most'],
    answer: 'mostova',
    tip: 'A short masculine noun adds -ov- in the genitive plural.',
  },
  {
    mode: 'pet',
    q: 'Trebam šest ____.',
    en: 'I need six eggs.',
    opts: ['jaja', 'jaje', 'jajeta', 'jajima'],
    answer: 'jaja',
    tip: 'Five and up: the genitive plural of jaje.',
  },

  // ── slozeni ───────────────────────────────────────────────────────────────
  {
    mode: 'slozeni',
    q: 'Hotel ima trideset dvije ____.',
    en: 'The hotel has thirty-two rooms.',
    opts: ['sobe', 'soba', 'sobu', 'sobi'],
    answer: 'sobe',
    tip: 'The last word is two: the genitive singular.',
  },
  {
    mode: 'slozeni',
    q: 'Sestra ima dvadeset i ____ godinu.',
    en: 'My sister is twenty-one.',
    opts: ['jednu', 'jedna', 'jednoj', 'jedne'],
    answer: 'jednu',
    tip: 'The last word is one, and after ima it is an object: feminine accusative.',
  },
  {
    mode: 'slozeni',
    q: 'Grad ima dvadeset i jedan ____.',
    en: 'The town has twenty-one parks.',
    opts: ['park', 'parka', 'parkova', 'parkovi'],
    answer: 'park',
    tip: 'The last word is one, so the noun stays in its plain form.',
  },
  {
    mode: 'slozeni',
    q: 'Imam trideset pet ____.',
    en: 'I am thirty-five years old.',
    opts: ['godina', 'godine', 'godinu', 'godini'],
    answer: 'godina',
    tip: 'The last word is five: the genitive plural.',
  },
  {
    mode: 'slozeni',
    q: 'Čekam već dvadeset dvije ____.',
    en: 'I have been waiting twenty-two minutes already.',
    opts: ['minute', 'minuta', 'minutu', 'minutom'],
    answer: 'minute',
    tip: 'The last word is two: the genitive singular.',
  },
  {
    mode: 'slozeni',
    q: 'U ulici su četrdeset četiri ____.',
    en: 'There are forty-four houses in the street.',
    opts: ['kuće', 'kuća', 'kuću', 'kući'],
    answer: 'kuće',
    tip: 'The last word is four: the genitive singular.',
  },
  {
    mode: 'slozeni',
    q: 'U zgradi živi pedeset ____.',
    en: 'Fifty people live in the building.',
    opts: ['ljudi', 'čovjeka', 'ljudima', 'čovjek'],
    answer: 'ljudi',
    tip: 'Two people is dva čovjeka; five and up is ljudi.',
  },
  {
    mode: 'slozeni',
    q: 'Autobus stiže za dvadeset ____.',
    en: 'The bus arrives in twenty minutes.',
    opts: ['minuta', 'minute', 'minutu', 'minuti'],
    answer: 'minuta',
    tip: 'A round ten counts like five: the genitive plural.',
  },

  // ── sati: telling the time and prices (book L17) ─────────────────────────────
  {
    mode: 'sati',
    q: 'Koliko je sati? — Dva su ____.',
    en: 'What time is it? — It is two o’clock.',
    opts: ['sata', 'sati', 'sat', 'satima'],
    answer: 'sata',
    tip: 'Two to four: the genitive singular, and the verb is su.',
  },
  {
    mode: 'sati',
    q: 'Pet ____ sati.',
    en: 'It is five o’clock.',
    opts: ['je', 'su', 'smo', 'ste'],
    answer: 'je',
    tip: 'With five and up the group counts as one: je.',
  },
  {
    mode: 'sati',
    q: 'Film počinje u osam ____.',
    en: 'The film starts at eight.',
    opts: ['sati', 'sata', 'sat', 'satom'],
    answer: 'sati',
    tip: 'Eight is five-or-more: the genitive plural of sat is sati.',
  },
  {
    mode: 'sati',
    q: 'Sastanak je u ____ devet. (8:30)',
    en: 'The meeting is at half past eight.',
    opts: ['pola', 'četvrt', 'podne', 'sat'],
    answer: 'pola',
    tip: 'Croatian counts the half hour towards the NEXT hour.',
  },
  {
    mode: 'sati',
    q: 'Kava košta dva eura i dvadeset dva ____.',
    en: 'The coffee costs 2.22 €.',
    opts: ['centa', 'centi', 'cent', 'centima'],
    answer: 'centa',
    tip: 'The last word is two: the genitive singular.',
  },
  {
    mode: 'sati',
    q: 'Koliko dugo učiš hrvatski? — Tri ____.',
    en: 'How long have you been learning Croatian? — Three months.',
    opts: ['mjeseca', 'mjeseci', 'mjesec', 'mjesecu'],
    answer: 'mjeseca',
    tip: 'Three: the genitive singular, masculine -a.',
  },
  {
    mode: 'sati',
    q: 'Na koncertu je pet ____ ljudi.',
    en: 'There are five thousand people at the concert.',
    opts: ['tisuća', 'tisuće', 'tisuću', 'tisuci'],
    answer: 'tisuća',
    tip: 'tisuća is a feminine noun: after five, the genitive plural.',
  },
];
