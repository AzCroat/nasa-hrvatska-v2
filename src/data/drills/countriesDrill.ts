// src/data/drills/countriesDrill.ts
//
// A1 COUNTRIES & LANGUAGES — the drill for the `countries-languages` lesson.
//
// The structure underneath the topic is a three-way system English collapses:
// the COUNTRY, the NATIONALITY (which has separate male and female forms) and
// the LANGUAGE are three different words, and only one of them is capitalised.
// *Hrvatska*, *Hrvat* / *Hrvatica*, *hrvatski*. An English speaker has one word
// doing two of those jobs — "Croatian" is both the person and the language — so
// nothing in their first language signals that a choice is being made.
//
// The second half is the two cases these words live in: *iz* + genitive for
// where you are from, *u* + locative for where you live. They arrive together
// in the first conversation a learner ever has.
//
// Three modes:
//   tri     — country, nationality, language
//   rod     — Hrvat / Hrvatica, and the lower-case language
//   padezi  — iz + genitive, u + locative

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const COUNTRIES_MODE_LABELS: Record<string, string> = {
  tri: '🌍 Tri različite riječi',
  rod: '⚥ Muški i ženski oblik',
  padezi: '📍 Odakle i gdje',
};

export const COUNTRIES_DRILL_DATA: ModeDrillItem[] = [
  // ── tri ───────────────────────────────────────────────────────────────────
  {
    mode: 'tri',
    q: 'Država: ____',
    en: 'The country:',
    opts: ['Hrvatska', 'Hrvat', 'hrvatski', 'Hrvatica'],
    answer: 'Hrvatska',
    tip: 'The country is Hrvatska — capitalised, and grammatically an adjective.',
  },
  {
    mode: 'tri',
    q: 'Jezik: ____',
    en: 'The language:',
    opts: ['hrvatski', 'Hrvatska', 'Hrvat', 'Hrvatica'],
    answer: 'hrvatski',
    tip: 'Languages are LOWER CASE and end in -ski: hrvatski, engleski, njemački.',
  },
  {
    mode: 'tri',
    q: 'Osoba (muškarac): ____',
    en: 'The person (male):',
    opts: ['Hrvat', 'Hrvatska', 'hrvatski', 'Hrvatica'],
    answer: 'Hrvat',
    tip: 'Nationalities ARE capitalised — the opposite of languages.',
  },
  {
    mode: 'tri',
    q: 'Koje se od ovoga piše malim slovom?',
    en: 'Which is written lower case?',
    opts: ['jezik', 'država', 'narodnost', 'sve tri'],
    answer: 'jezik',
    tip: 'Only the language. Hrvatska and Hrvat take capitals; hrvatski does not.',
  },
  {
    mode: 'tri',
    q: 'Njemačka → jezik je ____.',
    en: 'Germany → the language is…',
    opts: ['njemački', 'Njemački', 'Nijemac', 'njemačka'],
    answer: 'njemački',
    tip: 'njemački, lower case.',
  },
  {
    mode: 'tri',
    q: 'Italija → osoba (muškarac) je ____.',
    en: 'Italy → the man is…',
    opts: ['Talijan', 'Italijan', 'talijanski', 'Italija'],
    answer: 'Talijan',
    tip: 'Talijan — and note the country keeps the I while the person loses it.',
  },
  {
    mode: 'tri',
    q: 'Engleska → jezik je ____.',
    en: 'England → the language is…',
    opts: ['engleski', 'Engleski', 'Englez', 'engleska'],
    answer: 'engleski',
    tip: 'engleski.',
  },
  {
    mode: 'tri',
    q: 'Koliko različitih riječi treba za jednu zemlju?',
    en: 'How many different words per country?',
    opts: ['najmanje tri', 'jedna', 'dvije', 'pet'],
    answer: 'najmanje tri',
    tip: 'Country, nationality (two genders) and language — four forms in practice.',
  },

  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: 'Ona je ____.',
    en: 'She is Croatian.',
    opts: ['Hrvatica', 'Hrvat', 'hrvatski', 'Hrvatska'],
    answer: 'Hrvatica',
    tip: 'Hrvatica — the feminine nationality, and it is capitalised too.',
  },
  {
    mode: 'rod',
    q: 'Ona je iz Engleske. Ona je ____.',
    en: 'She is English.',
    opts: ['Engleskinja', 'Englezica', 'Engleska', 'Englez'],
    answer: 'Engleskinja',
    tip: 'Engleskinja — the feminine suffix is not always -ica.',
  },
  {
    mode: 'rod',
    q: 'On je iz Njemačke. On je ____.',
    en: 'He is German.',
    opts: ['Nijemac', 'Njemac', 'Njemica', 'njemački'],
    answer: 'Nijemac',
    tip: 'Nijemac — with ije, unlike the country Njemačka.',
  },
  {
    mode: 'rod',
    q: 'Ona je iz Njemačke. Ona je ____.',
    en: 'She is German.',
    opts: ['Njemica', 'Nijemica', 'Nijemac', 'Njemačka'],
    answer: 'Njemica',
    tip: 'Njemica — the ije shortens in the feminine.',
  },
  {
    mode: 'rod',
    q: 'Ona je iz Italije. Ona je ____.',
    en: 'She is Italian.',
    opts: ['Talijanka', 'Talijanica', 'Talijan', 'Italijanka'],
    answer: 'Talijanka',
    tip: 'Talijanka — the -ka suffix is the commonest of the three.',
  },
  {
    mode: 'rod',
    q: 'Pišu li se narodnosti velikim slovom?',
    en: 'Are nationalities capitalised?',
    opts: ['da', 'ne', 'samo muški oblik', 'samo u pisanju'],
    answer: 'da',
    tip: 'Yes — Hrvat, Hrvatica, Nijemac. Only the LANGUAGE goes lower case.',
  },
  {
    mode: 'rod',
    q: 'Koji je nastavak najčešći za ženski oblik?',
    en: 'Which feminine suffix is commonest?',
    opts: ['-ka', '-ica', '-inja', '-a'],
    answer: '-ka',
    tip: 'Talijanka, Amerikanka, Poljakinja — the family is -ka / -ica / -kinja.',
  },
  {
    mode: 'rod',
    q: 'Govorim ____. (hrvatski jezik)',
    en: 'I speak Croatian.',
    opts: ['hrvatski', 'Hrvatski', 'Hrvat', 'hrvatska'],
    answer: 'hrvatski',
    tip: 'Govorim hrvatski — the language, lower case, no word for "language" needed.',
  },

  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'Ja sam iz ____. (Hrvatska)',
    en: 'I am from Croatia.',
    opts: ['Hrvatske', 'Hrvatska', 'Hrvatskoj', 'Hrvatsku'],
    answer: 'Hrvatske',
    tip: 'iz + GENITIVE: iz Hrvatske.',
  },
  {
    mode: 'padezi',
    q: 'Živim u ____. (Hrvatska)',
    en: 'I live in Croatia.',
    opts: ['Hrvatskoj', 'Hrvatska', 'Hrvatske', 'Hrvatsku'],
    answer: 'Hrvatskoj',
    tip: 'u + LOCATIVE: u Hrvatskoj. Different question, different case.',
  },
  {
    mode: 'padezi',
    q: 'Koji padež ide uz "iz"?',
    en: 'Which case after iz?',
    opts: ['genitiv', 'lokativ', 'akuzativ', 'dativ'],
    answer: 'genitiv',
    tip: 'Genitive, always — origin looks backwards.',
  },
  {
    mode: 'padezi',
    q: 'Ona je iz ____. (Njemačka)',
    en: 'She is from Germany.',
    opts: ['Njemačke', 'Njemačka', 'Njemačkoj', 'Njemačku'],
    answer: 'Njemačke',
    tip: 'iz Njemačke.',
  },
  {
    mode: 'padezi',
    q: 'Živi u ____. (Italija)',
    en: 'He lives in Italy.',
    opts: ['Italiji', 'Italija', 'Italije', 'Italiju'],
    answer: 'Italiji',
    tip: 'u Italiji — locative.',
  },
  {
    mode: 'padezi',
    q: 'Idem u ____. (Hrvatska)',
    en: 'I am going to Croatia.',
    opts: ['Hrvatsku', 'Hrvatskoj', 'Hrvatske', 'Hrvatska'],
    answer: 'Hrvatsku',
    tip: 'MOTION flips it to the accusative: idem u Hrvatsku.',
  },
  {
    mode: 'padezi',
    q: 'Zašto se "Hrvatska" mijenja kao pridjev?',
    en: 'Why does Hrvatska decline like an adjective?',
    opts: ['jer to i jest pridjev', 'jer je vlastito ime', 'jer je ženskoga roda', 'nema razloga'],
    answer: 'jer to i jest pridjev',
    tip: 'It is literally "the Croatian [land]" — hence Hrvatske, Hrvatskoj, Hrvatsku.',
  },
  {
    mode: 'padezi',
    q: 'Odakle si? — ____ sam iz Kanade.',
    en: 'Where are you from? — I am from Canada.',
    opts: ['Ja', 'Meni', 'Mene', 'Mi'],
    answer: 'Ja',
    tip: 'Ja sam iz + genitive. The whole exchange fits in five words.',
  },
];
