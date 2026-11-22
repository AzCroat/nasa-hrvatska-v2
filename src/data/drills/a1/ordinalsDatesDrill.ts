// src/data/drills/a1/ordinalsDatesDrill.ts
//
// A1 ORDINALS AND DATES — the drill for the `ordinals-dates` lesson.
//
// Follows Hrvatski za početnike 1, page 121: REDNI BROJEVI in three columns (prvi · prva ·
// prvo … deseti · deseta · deseto) with the rows "____ (7.) dan u tjednu zove se nedjelja"
// and "On je ____ (3.) dijete u obitelji", and page 122 ("Datumi"). The dated holidays on
// page 91 (6. siječnja, 15. kolovoza, 1. studenoga, 25. prosinca) supply the dates. The
// number in parentheses is the book's own cue. Years belong to the next lesson and are
// left out.
//
// Three modes:
//   redni — the ordinal and its gender ending
//   kat   — the ordinal after u and na, and as an object
//   datum — the months, and saying a date

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ORDINALS_DATES_MODE_LABELS: Record<string, string> = {
  redni: '🥇 Redni brojevi',
  kat: '🏢 Na petom katu',
  datum: '📅 Datum',
};

export const ORDINALS_DATES_DRILL_DATA: ModeDrillItem[] = [
  // ── redni ─────────────────────────────────────────────────────────────────
  {
    mode: 'redni',
    q: '____ dan u tjednu zove se subota. (6.)',
    en: 'The sixth day of the week is called Saturday.',
    opts: ['Šesti', 'Šest', 'Šesta', 'Šesto'],
    answer: 'Šesti',
    tip: 'An ordinal is an adjective and agrees with its noun: dan is masculine, so šesti. šest is the counting number; šesta and šesto are the feminine and neuter forms.',
  },
  {
    mode: 'redni',
    q: '____ mjesec u godini zove se listopad. (10.)',
    en: 'The tenth month of the year is called October.',
    opts: ['Deseti', 'Deset', 'Deseta', 'Deveti'],
    answer: 'Deseti',
    tip: 'mjesec is masculine: deseti. deset is the counting number, deseta is feminine, and deveti is the ninth.',
  },
  {
    mode: 'redni',
    q: 'Janica je bila ____ u slalomu. (1.)',
    en: 'Janica was first in the slalom.',
    opts: ['prva', 'prvi', 'prvo', 'jedna'],
    answer: 'prva',
    tip: 'The ordinal agrees with Janica, a woman: prva. prvi is for a man, prvo is neuter, and jedna means "one", not "first".',
  },
  {
    mode: 'redni',
    q: 'Luka je ____ dijete u obitelji. (2.)',
    en: 'Luka is the second child in the family.',
    opts: ['drugo', 'drugi', 'druga', 'dva'],
    answer: 'drugo',
    tip: 'The ordinal agrees with dijete, which is neuter: drugo dijete. It does not follow the boy Luka, so drugi is wrong; dva is the counting number.',
  },
  {
    mode: 'redni',
    q: 'Ovo je moj ____ dan u Zagrebu. (3.)',
    en: 'This is my third day in Zagreb.',
    opts: ['treći', 'treća', 'treće', 'tri'],
    answer: 'treći',
    tip: 'dan is masculine: treći dan. treća and treće are the feminine and neuter forms, and tri is the counting number.',
  },
  {
    mode: 'redni',
    q: 'Ovo je moja ____ godina u Hrvatskoj. (2.)',
    en: 'This is my second year in Croatia.',
    opts: ['druga', 'drugi', 'drugo', 'dvije'],
    answer: 'druga',
    tip: 'godina is feminine: druga godina. drugi and drugo are masculine and neuter; dvije godine would mean "two years".',
  },
  {
    mode: 'redni',
    q: 'Marko je ____ na redu kod liječnika. (5.)',
    en: "Marko is fifth in line at the doctor's.",
    opts: ['peti', 'peta', 'pet', 'peto'],
    answer: 'peti',
    tip: 'Marko is a man, so the masculine ordinal: peti. peta would be a woman, peto is neuter, and pet is the counting number.',
  },
  {
    mode: 'redni',
    q: '4. → ____ (masculine)',
    en: 'fourth',
    opts: ['četvrti', 'četiri', 'četiriti', 'četrti'],
    answer: 'četvrti',
    tip: 'četiri changes its stem in the ordinal: četvrti. "četiriti" just adds -ti to the number, and "četrti" drops the v.',
  },
  {
    mode: 'redni',
    q: '21. → ____',
    en: 'twenty-first',
    opts: ['dvadeset prvi', 'dvadeseti prvi', 'dvadeset jedan', 'dvadeseti jedan'],
    answer: 'dvadeset prvi',
    tip: 'In a compound number only the LAST word becomes an ordinal: dvadeset prvi. dvadeset jedan is the counting number 21.',
  },

  // ── kat ───────────────────────────────────────────────────────────────────
  {
    mode: 'kat',
    q: 'Stanujem na ____ katu. (5.)',
    en: 'I live on the fifth floor.',
    opts: ['petom', 'peti', 'petog', 'petoj'],
    answer: 'petom',
    tip: 'After na for a position, the ordinal takes the locative like any adjective: masculine -om, na petom katu. peti is the subject form, and petoj is feminine.',
  },
  {
    mode: 'kat',
    q: 'Apartman je na ____ katu. (3.)',
    en: 'The apartment is on the third floor.',
    opts: ['trećem', 'trećom', 'treći', 'trećoj'],
    answer: 'trećem',
    tip: 'treći ends in a soft sound, so its ending is -em, not -om: na trećem katu. trećoj is feminine, and treći is the subject form.',
  },
  {
    mode: 'kat',
    q: 'Moj brat je u ____ razredu. (2.)',
    en: 'My brother is in second grade.',
    opts: ['drugom', 'drugi', 'drugoj', 'drugog'],
    answer: 'drugom',
    tip: 'razred is masculine, and after u for a position the ending is -om: u drugom razredu. drugoj would need a feminine noun.',
  },
  {
    mode: 'kat',
    q: 'Pekarnica je u ____ ulici desno. (1.)',
    en: 'The bakery is in the first street on the right.',
    opts: ['prvoj', 'prvom', 'prva', 'prvu'],
    answer: 'prvoj',
    tip: 'ulica is feminine, and the feminine locative ending is -oj: u prvoj ulici. prvom is masculine, prva is the subject form, and prvu is the accusative.',
  },
  {
    mode: 'kat',
    q: 'Na koncertu sjedimo u ____ redu. (4.)',
    en: 'At the concert we are sitting in the fourth row.',
    opts: ['četvrtom', 'četvrti', 'četvrtoj', 'četvrtog'],
    answer: 'četvrtom',
    tip: 'red is masculine: u četvrtom redu. četvrti is the subject form, and četvrtoj is feminine.',
  },
  {
    mode: 'kat',
    q: 'Naša soba je na ____ katu. (1.)',
    en: 'Our room is on the first floor.',
    opts: ['prvom', 'prvoj', 'prvi', 'prvog'],
    answer: 'prvom',
    tip: 'kat is masculine: na prvom katu. prvoj would fit a feminine noun, as in u prvoj ulici.',
  },
  {
    mode: 'kat',
    q: 'Danas pijem već ____ kavu. (2.)',
    en: 'I am already drinking my second coffee today.',
    opts: ['drugu', 'druga', 'drugi', 'drugoj'],
    answer: 'drugu',
    tip: 'kavu is a feminine object, so the ordinal takes the accusative -u with it: drugu kavu. druga is the subject form, and drugoj is the locative.',
  },
  {
    mode: 'kat',
    q: 'Ovo su moji ____ dani u Hrvatskoj. (1.)',
    en: 'These are my first days in Croatia.',
    opts: ['prvi', 'prve', 'prva', 'prvo'],
    answer: 'prvi',
    tip: 'dani is a masculine plural, and the masculine plural of an adjective ends in -i: prvi dani. prve is for a feminine plural (prve godine).',
  },

  // ── datum ─────────────────────────────────────────────────────────────────
  {
    mode: 'datum',
    q: 'Danas je prvi ____. (svibanj)',
    en: 'Today is May 1.',
    opts: ['svibnja', 'svibanj', 'svibnju', 'svibanja'],
    answer: 'svibnja',
    tip: 'In a date the month goes into the genitive, "the first of May", and svibanj loses its a: svibnja. svibnju is the locative (u svibnju).',
  },
  {
    mode: 'datum',
    q: 'Božić je dvadeset petog ____. (prosinac)',
    en: 'Christmas is on December 25.',
    opts: ['prosinca', 'prosinac', 'prosincu', 'prosinaca'],
    answer: 'prosinca',
    tip: 'The month is always genitive after the day: prosinca, with the a dropped. prosincu is the locative (u prosincu).',
  },
  {
    mode: 'datum',
    q: 'Velika Gospa je petnaestog ____. (kolovoz)',
    en: 'The Feast of the Assumption is on August 15.',
    opts: ['kolovoza', 'kolovozu', 'kolovoz', 'kolovozom'],
    answer: 'kolovoza',
    tip: 'kolovoz + -a: petnaestog kolovoza. The dictionary form kolovoz cannot follow the day.',
  },
  {
    mode: 'datum',
    q: 'Sveta tri kralja su šestog ____. (siječanj)',
    en: 'Epiphany is on January 6.',
    opts: ['siječnja', 'siječanja', 'siječnju', 'siječanj'],
    answer: 'siječnja',
    tip: 'siječanj loses its a in the genitive: siječnja. "siječanja" keeps it, and siječnju is the locative.',
  },
  {
    mode: 'datum',
    q: 'Rođen sam ____ lipnja. (15.)',
    en: 'I was born on June 15.',
    opts: ['petnaestog', 'petnaesti', 'petnaest', 'petnaestom'],
    answer: 'petnaestog',
    tip: 'To say something happens ON a date, the ordinal goes into the genitive too: petnaestog lipnja. petnaesti only states what the date is.',
  },
  {
    mode: 'datum',
    q: '— Koji je danas datum? — Danas je ____ ožujka. (20.)',
    en: 'What is the date today? — Today is March 20.',
    opts: ['dvadeseti', 'dvadeset', 'dvadesetom', 'dvadeseta'],
    answer: 'dvadeseti',
    tip: 'To say what the date IS, use the plain masculine ordinal (it stands for dan): dvadeseti ožujka. dvadeset is the counting number, and dvadeseta is feminine.',
  },
  {
    mode: 'datum',
    q: 'Zabava je kod mene, ____ svibnja u osam sati. (3.)',
    en: 'The party is at my place, on May 3 at eight.',
    opts: ['trećeg', 'tri', 'trećem', 'treća'],
    answer: 'trećeg',
    tip: 'ON a date: genitive, and treći takes the soft ending -eg: trećeg svibnja. tri is the counting number, and trećem is the locative (na trećem katu).',
  },
  {
    mode: 'datum',
    q: 'Which month is "listopad"?',
    opts: ['October', 'November', 'September', 'July'],
    answer: 'October',
    tip: 'listopad is "leaf-fall": October. November is studeni, September is rujan, and July is srpanj.',
  },
  {
    mode: 'datum',
    q: 'Which month is "srpanj"?',
    opts: ['July', 'June', 'August', 'September'],
    answer: 'July',
    tip: 'srpanj, from the sickle, is July. June is lipanj, August is kolovoz, and September is rujan.',
  },
  {
    mode: 'datum',
    q: 'Which month comes right after "ožujak"?',
    opts: ['travanj', 'svibanj', 'veljača', 'lipanj'],
    answer: 'travanj',
    tip: 'ožujak is March, so April follows: travanj, the grass month. veljača is February, svibanj is May, and lipanj is June.',
  },
];
