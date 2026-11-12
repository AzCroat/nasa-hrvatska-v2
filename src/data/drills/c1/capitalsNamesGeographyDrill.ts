// src/data/drills/c1/capitalsNamesGeographyDrill.ts
//
// C1 CAPITAL LETTERS IN NAMES — the drill for the `capitals-names-geography` lesson
// (C1 position 28), following Hrvatski pravopis (Institut za hrvatski jezik i
// jezikoslovlje).
//
// Three modes, eight items each:
//   osobe     — personal names, nicknames, rulers' numerals; titles with a small letter
//   naselja   — towns, villages and states: every word but prepositions and conjunctions
//   zemljopis — seas, lakes, regions, islands, parts of the world: the first word only,
//               plus any word that is itself a name; a common noun before a name is small
//
// The English gloss never spells the name being asked for, so the options carry it.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CAPITALS_NAMES_GEOGRAPHY_MODE_LABELS: Record<string, string> = {
  osobe: '👑 Osobe',
  naselja: '🏘️ Naselja i države',
  zemljopis: '🗺️ Zemljopis',
};

export const CAPITALS_NAMES_GEOGRAPHY_DRILL_DATA: ModeDrillItem[] = [
  // ── osobe ─────────────────────────────────────────────────────────────────
  {
    mode: 'osobe',
    q: 'Franački car poznat po nadimku. Kako se piše?',
    en: 'The Frankish emperor known by his nickname.',
    opts: ['Karlo Veliki', 'Karlo veliki', 'karlo Veliki', 'Karlo-Veliki'],
    answer: 'Karlo Veliki',
    tip: 'A nickname that is part of a name is capitalised.',
  },
  {
    mode: 'osobe',
    q: 'Hrvatsko-ugarski kralj s nadimkom. Kako se piše?',
    en: 'The Croatian-Hungarian king with a nickname.',
    opts: ['Ludovik Veliki', 'Ludovik veliki', 'ludovik Veliki', 'Ludovik-Veliki'],
    answer: 'Ludovik Veliki',
    tip: 'Every part of a personal name is capitalised.',
  },
  {
    mode: 'osobe',
    q: 'Hrvatski kralj iz 11. stoljeća. Kako se piše?',
    en: 'A Croatian king of the eleventh century, the fourth of his name.',
    opts: ['Petar Krešimir IV.', 'Petar Krešimir IV', 'Petar krešimir IV.', 'petar Krešimir IV.'],
    answer: 'Petar Krešimir IV.',
    tip: 'An ordinal Roman numeral takes a full stop.',
  },
  {
    mode: 'osobe',
    q: 'Na trgu stoji spomenik ____.',
    en: 'A monument to King Tomislav stands in the square.',
    opts: ['kralju Tomislavu', 'Kralju Tomislavu', 'kralju tomislavu', 'Kralju tomislavu'],
    answer: 'kralju Tomislavu',
    tip: 'The title is small; the name is capitalised.',
  },
  {
    mode: 'osobe',
    q: 'Dubrovčani slave ____.',
    en: 'The people of Dubrovnik celebrate St Blaise.',
    opts: ['svetoga Vlaha', 'Svetoga Vlaha', 'svetoga vlaha', 'Svetoga vlaha'],
    answer: 'svetoga Vlaha',
    tip: 'sveti before a saint’s name behaves like a title.',
  },
  {
    mode: 'osobe',
    q: 'Kip ____ stoji na glavnom zagrebačkom trgu.',
    en: 'The statue of Ban Jelačić stands on the main square of Zagreb.',
    opts: ['bana Jelačića', 'Bana Jelačića', 'bana jelačića', 'Bana jelačića'],
    answer: 'bana Jelačića',
    tip: 'ban is a title, so it is small.',
  },
  {
    mode: 'osobe',
    q: 'Hrvatsku je 1994. posjetio ____.',
    en: 'The pope who visited Croatia in 1994.',
    opts: [
      'papa Ivan Pavao II.',
      'Papa Ivan Pavao II.',
      'papa Ivan pavao II.',
      'papa Ivan Pavao II',
    ],
    answer: 'papa Ivan Pavao II.',
    tip: 'A small title, a capitalised name, and a numeral with a full stop.',
  },
  {
    mode: 'osobe',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is spelled correctly?',
    opts: [
      'Ivan Gundulić napisao je Osmana.',
      'Ivan gundulić napisao je Osmana.',
      'ivan Gundulić napisao je Osmana.',
      'Ivan Gundulić napisao je osmana.',
    ],
    answer: 'Ivan Gundulić napisao je Osmana.',
    tip: 'Every part of a personal name, and a work’s title, begins with a capital.',
  },
  // ── naselja ───────────────────────────────────────────────────────────────
  {
    mode: 'naselja',
    q: 'Grad na Savi u Slavoniji. Kako se piše?',
    en: 'The town on the Sava in Slavonia.',
    opts: ['Slavonski Brod', 'Slavonski brod', 'slavonski Brod', 'Slavonski-Brod'],
    answer: 'Slavonski Brod',
    tip: 'A settlement capitalises every word.',
  },
  {
    mode: 'naselja',
    q: 'Mjesto na moru kod Zadra. Kako se piše?',
    en: 'The seaside town near Zadar.',
    opts: ['Biograd na Moru', 'Biograd Na Moru', 'Biograd na moru', 'biograd na Moru'],
    answer: 'Biograd na Moru',
    tip: 'Every word but the preposition.',
  },
  {
    mode: 'naselja',
    q: 'Mjesto na Korčuli. Kako se piše?',
    en: 'The town on the island of Korčula.',
    opts: ['Vela Luka', 'Vela luka', 'vela Luka', 'Vela-Luka'],
    answer: 'Vela Luka',
    tip: 'A settlement capitalises every word.',
  },
  {
    mode: 'naselja',
    q: 'Grad na Hvaru. Kako se piše?',
    en: 'The town on the island of Hvar.',
    opts: ['Stari Grad', 'Stari grad', 'stari Grad', 'Stari-Grad'],
    answer: 'Stari Grad',
    tip: 'As the name of a town, both words are capitalised.',
  },
  {
    mode: 'naselja',
    q: 'Grad u Vinodolu. Kako se piše?',
    en: 'The coastal town in the Vinodol area.',
    opts: ['Novi Vinodolski', 'Novi vinodolski', 'novi Vinodolski', 'Novi-Vinodolski'],
    answer: 'Novi Vinodolski',
    tip: 'Every word of a settlement name.',
  },
  {
    mode: 'naselja',
    q: 'Službeni naziv naše države. Kako se piše?',
    en: 'The official name of our state.',
    opts: ['Republika Hrvatska', 'Republika hrvatska', 'republika Hrvatska', 'Republika-Hrvatska'],
    answer: 'Republika Hrvatska',
    tip: 'A state name capitalises every word.',
  },
  {
    mode: 'naselja',
    q: 'Država u Sjevernoj Americi. Kako se piše?',
    en: 'The state in North America.',
    opts: [
      'Sjedinjene Američke Države',
      'Sjedinjene američke države',
      'Sjedinjene Američke države',
      'sjedinjene Američke Države',
    ],
    answer: 'Sjedinjene Američke Države',
    tip: 'Every word of a state name.',
  },
  {
    mode: 'naselja',
    q: 'Susjedna država. Kako se piše?',
    en: 'A neighbouring state of two lands.',
    opts: [
      'Bosna i Hercegovina',
      'Bosna I Hercegovina',
      'Bosna i hercegovina',
      'bosna i Hercegovina',
    ],
    answer: 'Bosna i Hercegovina',
    tip: 'Every word but the conjunction.',
  },
  // ── zemljopis ─────────────────────────────────────────────────────────────
  {
    mode: 'zemljopis',
    q: 'More uz hrvatsku obalu. Kako se piše?',
    en: 'The sea off the Croatian coast.',
    opts: ['Jadransko more', 'Jadransko More', 'jadransko more', 'Jadransko-more'],
    answer: 'Jadransko more',
    tip: 'A sea capitalises only its first word.',
  },
  {
    mode: 'zemljopis',
    q: 'Nacionalni park u Lici. Kako se piše?',
    en: 'The national park in Lika, famous for its lakes.',
    opts: ['Plitvička jezera', 'Plitvička Jezera', 'plitvička jezera', 'Plitvičkajezera'],
    answer: 'Plitvička jezera',
    tip: 'Lakes: only the first word.',
  },
  {
    mode: 'zemljopis',
    q: 'Kraj dvoraca sjeverno od Zagreba. Kako se piše?',
    en: 'The region of castles north of Zagreb.',
    opts: ['Hrvatsko zagorje', 'Hrvatsko Zagorje', 'hrvatsko zagorje', 'Hrvatsko-zagorje'],
    answer: 'Hrvatsko zagorje',
    tip: 'A region: only the first word.',
  },
  {
    mode: 'zemljopis',
    q: 'Planinski kraj između Zagreba i Rijeke. Kako se piše?',
    en: 'The mountain region between Zagreb and Rijeka.',
    opts: ['Gorski kotar', 'Gorski Kotar', 'gorski kotar', 'Gorski-kotar'],
    answer: 'Gorski kotar',
    tip: 'A region: only the first word.',
  },
  {
    mode: 'zemljopis',
    q: 'Dugačak otok zapadno od Zadra. Kako se piše?',
    en: 'The long island west of Zadar.',
    opts: ['Dugi otok', 'Dugi Otok', 'dugi otok', 'Dugi-otok'],
    answer: 'Dugi otok',
    tip: 'An island: only the first word.',
  },
  {
    mode: 'zemljopis',
    q: 'Kontinent s Kanadom i SAD-om. Kako se piše?',
    en: 'The continent with Canada and the USA.',
    opts: ['Sjeverna Amerika', 'Sjeverna amerika', 'sjeverna Amerika', 'SJEVERNA Amerika'],
    answer: 'Sjeverna Amerika',
    tip: 'The first word, and Amerika because it is a name itself.',
  },
  {
    mode: 'zemljopis',
    q: 'Koja je rečenica pravilno napisana?',
    en: 'Which sentence is spelled correctly?',
    opts: [
      'Zagreb leži na rijeci Savi.',
      'Zagreb leži na Rijeci Savi.',
      'Zagreb leži na rijeci savi.',
      'Zagreb leži na Rijeci savi.',
    ],
    answer: 'Zagreb leži na rijeci Savi.',
    tip: 'A common noun before a name stays small.',
  },
  {
    mode: 'zemljopis',
    q: 'Županija oko Splita. Kako se piše?',
    en: 'The county around Split.',
    opts: [
      'Splitsko-dalmatinska županija',
      'Splitsko-Dalmatinska županija',
      'Splitsko-dalmatinska Županija',
      'splitsko-dalmatinska županija',
    ],
    answer: 'Splitsko-dalmatinska županija',
    tip: 'Only the first word, and the second half of the hyphenated adjective stays small.',
  },
];
