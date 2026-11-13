// src/data/drills/b1/croatsAbroadDrill.ts
//
// B1 CROATS IN THE WORLD — the drill for the `croats-abroad` lesson.
//
// Leaving and returning (u inozemstvo / u inozemstvu, iseliti se iz + G u + A), a few
// Croats the world knows (only facts that are well established), and weighing life
// abroad: s jedne strane… s druge strane, prednost / nedostatak, nedostaje mi.
//
// Three modes:
//   smjer  — going there and being there
//   ljudi  — famous Croats
//   strane — pros and cons, missing home, quantities

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CROATS_ABROAD_MODE_LABELS: Record<string, string> = {
  smjer: '✈️ Kamo i gdje',
  ljudi: '🌟 Poznati Hrvati',
  strane: '⚖️ Za i protiv',
};

export const CROATS_ABROAD_DRILL_DATA: ModeDrillItem[] = [
  // ── smjer ─────────────────────────────────────────────────────────────────
  {
    mode: 'smjer',
    q: 'Preselio se u ____.',
    en: 'He moved abroad.',
    opts: ['inozemstvo', 'inozemstvu', 'inozemstva', 'inozemstvom'],
    answer: 'inozemstvo',
    tip: 'Moving is a direction: u + the accusative.',
  },
  {
    mode: 'smjer',
    q: 'Živi u ____ već deset godina.',
    en: 'She has been living abroad for ten years.',
    opts: ['inozemstvu', 'inozemstvo', 'inozemstva', 'inozemstvom'],
    answer: 'inozemstvu',
    tip: 'Living somewhere is a place: u + the locative.',
  },
  {
    mode: 'smjer',
    q: 'Djed se iselio u ____.',
    en: 'Grandfather emigrated to Canada.',
    opts: ['Kanadu', 'Kanadi', 'Kanada', 'Kanade'],
    answer: 'Kanadu',
    tip: 'A direction: u + the accusative.',
  },
  {
    mode: 'smjer',
    q: 'Moji rođaci žive u ____.',
    en: 'My relatives live in Canada.',
    opts: ['Kanadi', 'Kanadu', 'Kanada', 'Kanadom'],
    answer: 'Kanadi',
    tip: 'A place: u + the locative.',
  },
  {
    mode: 'smjer',
    q: 'Iselili su se iz ____.',
    en: 'They emigrated from Croatia.',
    opts: ['Hrvatske', 'Hrvatsku', 'Hrvatskoj', 'Hrvatska'],
    answer: 'Hrvatske',
    tip: 'iz + the genitive.',
  },
  {
    mode: 'smjer',
    q: 'Velika hrvatska zajednica živi u ____.',
    en: 'A large Croatian community lives in Chile.',
    opts: ['Čileu', 'Čilu', 'Čile', 'Čilom'],
    answer: 'Čileu',
    tip: 'A foreign name in -e keeps its e: u Čileu.',
  },
  {
    mode: 'smjer',
    q: 'Nakon dvadeset godina vratio se u ____.',
    en: 'After twenty years he returned to his homeland.',
    opts: ['domovinu', 'domovini', 'domovina', 'domovinom'],
    answer: 'domovinu',
    tip: 'Returning is a direction: u + the accusative.',
  },
  {
    mode: 'smjer',
    q: 'Mnogo Hrvata radi u ____.',
    en: 'Many Croats work in Germany.',
    opts: ['Njemačkoj', 'Njemačku', 'Njemačka', 'Njemačke'],
    answer: 'Njemačkoj',
    tip: 'A place: u + the locative.',
  },

  // ── ljudi ─────────────────────────────────────────────────────────────────
  {
    mode: 'ljudi',
    q: 'Nikola Tesla rođen je u ____, u Lici.',
    en: 'Nikola Tesla was born in a village in Lika.',
    opts: ['Smiljanu', 'Smiljan', 'Smiljana', 'Smiljanom'],
    answer: 'Smiljanu',
    tip: 'u + the locative: Smiljanu.',
  },
  {
    mode: 'ljudi',
    q: 'Ivan Vučetić rođen je ____ Hvaru.',
    en: 'Ivan Vučetić was born on Hvar.',
    opts: ['na', 'u', 'iz', 's'],
    answer: 'na',
    tip: 'Islands take na: na Hvaru.',
  },
  {
    mode: 'ljudi',
    q: 'Tko je opisao rani padobran?',
    en: 'Who described an early parachute?',
    opts: ['Faust Vrančić', 'Nikola Tesla', 'Luka Modrić', 'Ivan Vučetić'],
    answer: 'Faust Vrančić',
    tip: 'Faust Vrančić from Šibenik, in his book of new machines.',
  },
  {
    mode: 'ljudi',
    q: 'Vučetić je u Argentini razvio identifikaciju pomoću otisaka ____.',
    en: 'In Argentina Vučetić developed identification by fingerprints.',
    opts: ['prstiju', 'prsti', 'prstima', 'prste'],
    answer: 'prstiju',
    tip: 'otisci prstiju — the genitive plural of prst.',
  },
  {
    mode: 'ljudi',
    q: 'Luka Modrić osvojio je Zlatnu ____ 2018. godine.',
    en: 'Luka Modrić won the Ballon d’Or in 2018.',
    opts: ['loptu', 'lopta', 'lopti', 'loptom'],
    answer: 'loptu',
    tip: 'What he won is the direct object: the accusative.',
  },
  {
    mode: 'ljudi',
    q: 'Faust Vrančić rodom je iz ____.',
    en: 'Faust Vrančić came from Šibenik.',
    opts: ['Šibenika', 'Šibeniku', 'Šibenikom', 'Šibenike'],
    answer: 'Šibenika',
    tip: 'iz + the genitive.',
  },
  {
    mode: 'ljudi',
    q: 'Slavoljub Penkala, rođen u Slovačkoj, u Zagrebu je usavršio mehaničku ____.',
    en: 'Slavoljub Penkala, born in Slovakia, improved the mechanical pencil in Zagreb.',
    opts: ['olovku', 'olovka', 'olovci', 'olovkom'],
    answer: 'olovku',
    tip: 'The direct object: the accusative.',
  },
  {
    mode: 'ljudi',
    q: 'Tesla je veći dio života proveo u ____.',
    en: 'Tesla spent most of his life in America.',
    opts: ['Americi', 'Ameriku', 'Amerika', 'Amerikom'],
    answer: 'Americi',
    tip: 'A place: u + the locative.',
  },

  // ── strane ────────────────────────────────────────────────────────────────
  {
    mode: 'strane',
    q: 'S jedne strane plaće su veće, a s ____ strane sve je skuplje.',
    en: 'On the one hand salaries are higher; on the other, everything is more expensive.',
    opts: ['druge', 'drugu', 'drugoj', 'drugom'],
    answer: 'druge',
    tip: 's + the genitive, like s jedne strane.',
  },
  {
    mode: 'strane',
    q: 'Najveći ____ je daljina od obitelji.',
    en: 'The biggest disadvantage is the distance from family.',
    opts: ['nedostatak', 'nedostatka', 'nedostatku', 'nedostatkom'],
    answer: 'nedostatak',
    tip: 'The subject, in the nominative.',
  },
  {
    mode: 'strane',
    q: 'Velika ____ je bolja plaća.',
    en: 'A big advantage is the better salary.',
    opts: ['prednost', 'prednosti', 'prednošću', 'nedostatak'],
    answer: 'prednost',
    tip: 'prednost is feminine: velika prednost.',
  },
  {
    mode: 'strane',
    q: 'Nedostaje ____ obitelj.',
    en: 'I miss my family.',
    opts: ['mi', 'me', 'ja', 'moja'],
    answer: 'mi',
    tip: 'The one who misses is in the dative.',
  },
  {
    mode: 'strane',
    q: 'Nedostaju mi ____.',
    en: 'I miss my friends.',
    opts: ['prijatelji', 'prijatelje', 'prijateljima', 'prijatelja'],
    answer: 'prijatelji',
    tip: 'What you miss is the subject: the nominative plural.',
  },
  {
    mode: 'strane',
    q: 'Nedostaje ____ more.',
    en: 'She misses the sea.',
    opts: ['joj', 'ju', 'ona', 'nju'],
    answer: 'joj',
    tip: 'The one who misses is in the dative: joj.',
  },
  {
    mode: 'strane',
    q: 'Mnogo ____ živi u Njemačkoj.',
    en: 'Many Croats live in Germany.',
    opts: ['Hrvata', 'Hrvati', 'Hrvate', 'Hrvatima'],
    answer: 'Hrvata',
    tip: 'mnogo takes the genitive plural.',
  },
  {
    mode: 'strane',
    q: 'Sve više ____ dolazi raditi u Hrvatsku.',
    en: 'More and more foreigners come to work in Croatia.',
    opts: ['stranaca', 'stranci', 'strance', 'strancima'],
    answer: 'stranaca',
    tip: 'sve više takes the genitive plural.',
  },
  {
    mode: 'strane',
    q: 'Kao ____, morao je sve ponovno naučiti.',
    en: 'As a returnee, he had to learn everything again.',
    opts: ['povratnik', 'povratnika', 'povratniku', 'povratnikom'],
    answer: 'povratnik',
    tip: 'kao + the nominative here: the same case as the subject.',
  },
];
