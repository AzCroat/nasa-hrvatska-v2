// src/data/drills/b2/travelAndSportDrill.ts
//
// B2 FREE TIME, SPORT AND TRAVEL — the drill for the `travel-and-sport` lesson
// (B2 position 58).
//
// Three modes, eight items each:
//   sport      — baviti se + instrumental, igrati + accusative, navijati za
//   slobodno   — boredom (dosadno mi je, dosađivati se), rest, na- + se
//   putovanje  — aspect in a travel story, time words, Rostuhar and the Sport Day
//
// Facts used: Dražen Petrović was born in Šibenik and played basketball; Davor
// Rostuhar is a Croatian travel writer and photographer; the International Day of
// Sport for Development and Peace is 6 April.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const TRAVEL_AND_SPORT_MODE_LABELS: Record<string, string> = {
  sport: '🏀 Sport',
  slobodno: '🛋️ Slobodno vrijeme',
  putovanje: '🧳 Putovanje',
};

export const TRAVEL_AND_SPORT_DRILL_DATA: ModeDrillItem[] = [
  // ── sport ─────────────────────────────────────────────────────────────────
  {
    mode: 'sport',
    q: 'Bavim se ____.',
    en: 'I do swimming.',
    opts: ['plivanje', 'plivanja', 'plivanjem', 'plivanju'],
    answer: 'plivanjem',
    tip: 'Baviti se takes the instrumental.',
  },
  {
    mode: 'sport',
    q: 'Moja se sestra bavi ____.',
    en: 'My sister does photography.',
    opts: ['fotografija', 'fotografiju', 'fotografijom', 'fotografiji'],
    answer: 'fotografijom',
    tip: 'The feminine instrumental ends in -om.',
  },
  {
    mode: 'sport',
    q: 'Dečki ____ košarku iza škole.',
    en: 'The boys play basketball behind the school.',
    opts: ['igraju', 'igraju se', 'igraju u', 'igraju s'],
    answer: 'igraju',
    tip: 'Igrati + accusative, with no preposition and no se.',
  },
  {
    mode: 'sport',
    q: 'Subotom igramo ____.',
    en: 'On Saturdays we play tennis.',
    opts: ['tenis', 'tenisom', 'u tenis', 'tenisu'],
    answer: 'tenis',
    tip: 'The game is the direct object.',
  },
  {
    mode: 'sport',
    q: 'Navijam ____ Hajduk.',
    en: 'I support Hajduk.',
    opts: ['na', 'za', 'u', 's'],
    answer: 'za',
    tip: 'Navijati za + accusative.',
  },
  {
    mode: 'sport',
    q: '____ se baviš u slobodno vrijeme?',
    en: 'What do you do in your free time?',
    opts: ['Što', 'Čime', 'Čega', 'Čemu'],
    answer: 'Čime',
    tip: 'Baviti se asks for the instrumental question word.',
  },
  {
    mode: 'sport',
    q: 'Dražen Petrović igrao je ____.',
    en: 'Dražen Petrović played basketball.',
    opts: ['košarku', 'košarkom', 'košarci', 'košarka'],
    answer: 'košarku',
    tip: 'Igrati + accusative.',
  },
  {
    mode: 'sport',
    q: 'Dražen Petrović rođen je u ____.',
    en: 'Dražen Petrović was born in a Dalmatian town.',
    opts: ['Šibeniku', 'Osijeku', 'Varaždinu', 'Karlovcu'],
    answer: 'Šibeniku',
    tip: 'The only Dalmatian town among the options.',
  },

  // ── slobodno ──────────────────────────────────────────────────────────────
  {
    mode: 'slobodno',
    q: 'Kiša pada cijeli dan i ____ je dosadno.',
    en: 'It has been raining all day and I am bored.',
    opts: ['ja', 'meni', 'mene', 'mnom'],
    answer: 'meni',
    tip: 'The bored person is in the dative.',
  },
  {
    mode: 'slobodno',
    q: 'Djeci je bilo ____ pa su počela crtati.',
    en: 'The children were bored, so they started drawing.',
    opts: ['dosadan', 'dosadna', 'dosadno', 'dosadni'],
    answer: 'dosadno',
    tip: 'With the dative, the neuter form.',
  },
  {
    mode: 'slobodno',
    q: 'Kad ____, sviram gitaru.',
    en: 'When I get bored, I play the guitar.',
    opts: ['dosađujem se', 'dosadan sam', 'dosađujem', 'dosadim se'],
    answer: 'dosađujem se',
    tip: 'The reflexive way to be bored.',
  },
  {
    mode: 'slobodno',
    q: 'Napokon sam se ____.',
    en: 'I finally got enough sleep.',
    opts: ['spavao', 'naspavao', 'zaspao', 'prespavao'],
    answer: 'naspavao',
    tip: 'Na- + se: enough of it.',
  },
  {
    mode: 'slobodno',
    q: 'Na izletu smo se ____ domaćih kolača.',
    en: 'On the trip we ate our fill of homemade cakes.',
    opts: ['najeli', 'pojeli', 'jeli', 'izjeli'],
    answer: 'najeli',
    tip: 'Na- + se, with the genitive of what you ate.',
  },
  {
    mode: 'slobodno',
    q: 'Ljetos smo se ____ — obišli smo pola Europe.',
    en: 'This summer we travelled to our heart’s content — we saw half of Europe.',
    opts: ['putovali', 'naputovali', 'otputovali', 'proputovali'],
    answer: 'naputovali',
    tip: 'Na- + se: to do something a lot.',
  },
  {
    mode: 'slobodno',
    q: 'Nedjeljom idemo u ____ uz more.',
    en: 'On Sundays we go for a walk along the sea.',
    opts: ['šetnja', 'šetnju', 'šetnji', 'šetnjom'],
    answer: 'šetnju',
    tip: 'Where to? u + accusative.',
  },
  {
    mode: 'slobodno',
    q: 'Nakon posla volim se ____.',
    en: 'After work I like to rest.',
    opts: ['odmarati', 'odmaram', 'odmara', 'odmorim'],
    answer: 'odmarati',
    tip: 'Voljeti + the infinitive.',
  },

  // ── putovanje ─────────────────────────────────────────────────────────────
  {
    mode: 'putovanje',
    q: 'Koji glagol pomiče priču naprijed?',
    en: 'Which verb moves the story forward as a completed step?',
    opts: ['vozili smo', 'stigli smo', 'putovali smo', 'šetali smo'],
    answer: 'stigli smo',
    tip: 'Look for the perfective verb.',
  },
  {
    mode: 'putovanje',
    q: 'Koji glagol opisuje pozadinu priče?',
    en: 'Which verb paints the background of the story?',
    opts: ['krenuli smo', 'stigli smo', 'vozili smo', 'okupali smo se'],
    answer: 'vozili smo',
    tip: 'Look for the imperfective verb.',
  },
  {
    mode: 'putovanje',
    q: '____ smo spakirali torbe, a zatim smo krenuli.',
    en: 'First we packed our bags, and then we set off.',
    opts: ['Najprije', 'Zatim', 'Napokon', 'Dok'],
    answer: 'Najprije',
    tip: 'The time word for the first step.',
  },
  {
    mode: 'putovanje',
    q: 'Dok smo ____ uz obalu, sunce je izlazilo.',
    en: 'While we were driving along the coast, the sun was rising.',
    opts: ['vozili', 'odvezli', 'dovezli', 'izvozili'],
    answer: 'vozili',
    tip: 'Dok wants an activity in progress: the imperfective.',
  },
  {
    mode: 'putovanje',
    q: 'Davor Rostuhar hrvatski je ____ i fotograf.',
    en: 'Davor Rostuhar is a Croatian travel writer and photographer.',
    opts: ['putopisac', 'nogometaš', 'političar', 'pjevač'],
    answer: 'putopisac',
    tip: 'Someone who writes about journeys.',
  },
  {
    mode: 'putovanje',
    q: 'Volim gledati ____ fotografije.',
    en: 'I love looking at Rostuhar’s photographs.',
    opts: ['Rostuharove', 'Rostuharovi', 'Rostuharovih', 'Rostuharovim'],
    answer: 'Rostuharove',
    tip: 'A possessive adjective agreeing with a feminine plural object.',
  },
  {
    mode: 'putovanje',
    q: 'Međunarodni dan sporta za razvoj i mir obilježava se 6. ____.',
    en: 'The International Day of Sport for Development and Peace is on 6 April.',
    opts: ['ožujka', 'travnja', 'svibnja', 'lipnja'],
    answer: 'travnja',
    tip: 'The fourth month, in the genitive.',
  },
  {
    mode: 'putovanje',
    q: 'Putovanje je trajalo ____ tjedna.',
    en: 'The trip lasted two weeks.',
    opts: ['dva', 'dvije', 'dvoje', 'dvaju'],
    answer: 'dva',
    tip: 'Tjedan is masculine, so the masculine form of two.',
  },
];
