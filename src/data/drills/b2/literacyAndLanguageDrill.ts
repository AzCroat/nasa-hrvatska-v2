// src/data/drills/b2/literacyAndLanguageDrill.ts
//
// B2 LITERACY AND LANGUAGE — the drill for the `literacy-and-language` lesson.
//
// Three modes:
//   months   — the Croatian month names, u + locative (u travnju, u studenome), dates in the
//              genitive, and the origins the lesson states as received (trava, lipa, srp,
//              list + pasti, studen). Uncertain etymologies are never asked.
//   govoriti — izgovoriti, odgovoriti na, dogovoriti se, nagovoriti, prigovarati komu
//   words    — pismenost and its kinds; obljetnica, godišnjica, proslava
//
// English glosses never name the Croatian month: the month IS the answer.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const LITERACY_AND_LANGUAGE_MODE_LABELS: Record<string, string> = {
  months: '📅 The months',
  govoriti: '🗣️ govoriti and its family',
  words: '📜 Literacy and anniversaries',
};

export const LITERACY_AND_LANGUAGE_DRILL_DATA: ModeDrillItem[] = [
  // ── months ────────────────────────────────────────────────────────────────
  {
    mode: 'months',
    q: 'Rođen sam u ____.',
    en: 'I was born in April.',
    opts: ['travanj', 'travnju', 'travanju', 'travnja'],
    answer: 'travnju',
    tip: 'U + locative, and the fleeting a disappears: u travnju.',
  },
  {
    mode: 'months',
    q: 'Školska godina počinje u ____.',
    en: 'The school year begins in September.',
    opts: ['rujanu', 'rujna', 'rujnu', 'rujan'],
    answer: 'rujnu',
    tip: 'rujan → u rujnu.',
  },
  {
    mode: 'months',
    q: 'Prvi snijeg ponekad padne već u ____.',
    en: 'The first snow sometimes falls as early as November.',
    opts: ['studeniju', 'studenome', 'studeni', 'studena'],
    answer: 'studenome',
    tip: 'studeni declines like an adjective: u studenome (or u studenom).',
  },
  {
    mode: 'months',
    q: 'Božić slavimo dvadeset petog ____.',
    en: 'We celebrate Christmas on the twenty-fifth of December.',
    opts: ['prosinac', 'prosincu', 'prosinca', 'prosinci'],
    answer: 'prosinca',
    tip: 'A date takes the genitive: prosinca.',
  },
  {
    mode: 'months',
    q: 'Mjesec u kojem cvjeta lipa zove se ____.',
    en: 'The month in which the lime tree flowers is called ____.',
    opts: ['srpanj', 'lipanj', 'svibanj', 'travanj'],
    answer: 'lipanj',
    tip: 'lipanj comes from lipa, the lime tree.',
  },
  {
    mode: 'months',
    q: 'Mjesec kad lišće pada zove se ____.',
    en: 'The month when the leaves fall is called ____.',
    opts: ['rujan', 'listopad', 'studeni', 'kolovoz'],
    answer: 'listopad',
    tip: 'listopad: list (leaf) + pasti (to fall).',
  },
  {
    mode: 'months',
    q: 'Mjesec žetve, nazvan po srpu, je ____.',
    en: 'The harvest month, named after the sickle, is ____.',
    opts: ['srpanj', 'siječanj', 'svibanj', 'studeni'],
    answer: 'srpanj',
    tip: 'srpanj comes from srp, the sickle.',
  },
  {
    mode: 'months',
    q: 'Mjesec nazvan po travi je ____.',
    en: 'The month named after grass is ____.',
    opts: ['svibanj', 'lipanj', 'travanj', 'ožujak'],
    answer: 'travanj',
    tip: 'travanj comes from trava, grass.',
  },
  {
    mode: 'months',
    q: 'Na more idemo početkom ____.',
    en: 'We go to the seaside at the beginning of August.',
    opts: ['kolovozu', 'kolovoza', 'kolovoz', 'kolovozom'],
    answer: 'kolovoza',
    tip: 'početkom + genitive: početkom kolovoza.',
  },
  // ── govoriti ──────────────────────────────────────────────────────────────
  {
    mode: 'govoriti',
    q: 'Kako se ____ ova riječ?',
    en: 'How is this word pronounced?',
    opts: ['odgovara', 'izgovara', 'dogovara', 'nagovara'],
    answer: 'izgovara',
    tip: 'To pronounce is izgovarati / izgovoriti.',
  },
  {
    mode: 'govoriti',
    q: 'Nitko nije ____ na moje pitanje.',
    en: 'Nobody answered my question.',
    opts: ['dogovorio', 'odgovorio', 'izgovorio', 'nagovorio'],
    answer: 'odgovorio',
    tip: 'To answer is odgovoriti, with na + accusative.',
  },
  {
    mode: 'govoriti',
    q: '____ smo se da se nađemo u šest.',
    en: 'We agreed to meet at six.',
    opts: ['Odgovorili', 'Nagovorili', 'Dogovorili', 'Prigovorili'],
    answer: 'Dogovorili',
    tip: 'To agree, to arrange is dogovoriti se.',
  },
  {
    mode: 'govoriti',
    q: 'Prijateljica me je ____ da upišem tečaj.',
    en: 'My friend persuaded me to enrol in the course.',
    opts: ['nagovorila', 'odgovorila', 'prigovorila', 'izgovorila'],
    answer: 'nagovorila',
    tip: 'To persuade is nagovoriti.',
  },
  {
    mode: 'govoriti',
    q: 'Susjed stalno ____ djeci zbog buke.',
    en: 'The neighbour keeps complaining at the children about the noise.',
    opts: ['dogovara', 'izgovara', 'odgovara', 'prigovara'],
    answer: 'prigovara',
    tip: 'To complain at, to object is prigovarati, with the dative.',
  },
  {
    mode: 'govoriti',
    q: 'Molim vas, odgovorite ____.',
    en: 'Please answer the question.',
    opts: ['pitanje', 'na pitanje', 'pitanju', 'o pitanju'],
    answer: 'na pitanje',
    tip: 'odgovoriti na + accusative: odgovoriti na pitanje.',
  },
  {
    mode: 'govoriti',
    q: 'Satima smo ____ o knjigama i filmovima.',
    en: 'We talked about books and films for hours.',
    opts: ['razgovarali', 'dogovarali', 'izgovarali', 'nagovarali'],
    answer: 'razgovarali',
    tip: 'To have a conversation is razgovarati.',
  },
  {
    mode: 'govoriti',
    q: 'Djeca u prvom razredu uče ____ glasove č i ć.',
    en: 'First-grade children learn to pronounce two tricky Croatian sounds.',
    opts: ['odgovarati', 'izgovarati', 'prigovarati', 'dogovarati'],
    answer: 'izgovarati',
    tip: 'To pronounce is izgovarati.',
  },
  // ── words ─────────────────────────────────────────────────────────────────
  {
    mode: 'words',
    q: 'Danas je ____ pismenost jednako važna kao čitanje.',
    en: 'Today digital literacy is as important as reading.',
    opts: ['digitalna', 'digitalni', 'digitalno', 'digitalnu'],
    answer: 'digitalna',
    tip: 'pismenost is feminine: digitalna pismenost.',
  },
  {
    mode: 'words',
    q: 'Osoba koja ne zna ni čitati ni pisati je ____.',
    en: 'A person who can neither read nor write is illiterate.',
    opts: ['pismena', 'nepismena', 'nečitka', 'nemirna'],
    answer: 'nepismena',
    tip: 'nepismen = illiterate.',
  },
  {
    mode: 'words',
    q: 'Tko ne razumije upute za lijek, iako zna čitati, funkcionalno je ____.',
    en: 'Someone who can read but cannot understand the instructions for a medicine is functionally illiterate.',
    opts: ['pismen', 'nepismen', 'nepismenost', 'pismenost'],
    answer: 'nepismen',
    tip: 'funkcionalno nepismen = functionally illiterate.',
  },
  {
    mode: 'words',
    q: 'Moji roditelji slave tridesetu ____ braka.',
    en: 'My parents are celebrating their thirtieth wedding anniversary.',
    opts: ['proslavu', 'godišnjicu', 'rođendan', 'svečanost'],
    answer: 'godišnjicu',
    tip: 'A wedding anniversary is godišnjica braka.',
  },
  {
    mode: 'words',
    q: 'Škola slavi stotu ____ osnutka.',
    en: 'The school is celebrating the hundredth anniversary of its founding.',
    opts: ['obljetnicu', 'proslavu', 'pismenost', 'rođendan'],
    answer: 'obljetnicu',
    tip: 'The anniversary of an event is obljetnica.',
  },
  {
    mode: 'words',
    q: '____ je trajala do kasno u noć.',
    en: 'The celebration went on until late at night.',
    opts: ['Obljetnica', 'Proslava', 'Godišnjica', 'Pismenost'],
    answer: 'Proslava',
    tip: 'The celebration itself is proslava.',
  },
  {
    mode: 'words',
    q: 'Knjižnica nudi tečaj ____ pismenosti za starije.',
    en: 'The library offers a digital literacy course for older people.',
    opts: ['digitalnu', 'digitalna', 'digitalne', 'digitalnoj'],
    answer: 'digitalne',
    tip: 'tečaj + genitive: tečaj digitalne pismenosti.',
  },
];
