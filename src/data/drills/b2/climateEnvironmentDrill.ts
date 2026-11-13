// src/data/drills/b2/climateEnvironmentDrill.ts
//
// B2 CLIMATE AND ENVIRONMENT — the drill for the `climate-environment` lesson
// (B2 position 54).
//
// Three modes, eight items each:
//   priroda  — natural disasters, climate change, exoticisms
//   otpad    — sorting waste, the days the world marks, typical Croatian products
//   negacija — where ne goes, zar questions, the zar ne tag, the Čega sve nema! exclamation
//
// Facts used: the Zagreb earthquake of 22 March 2020, the Petrinja earthquake of
// 29 December 2020, Earth Day on 22 April, World Food Day on 16 October, Pag cheese
// made from sheep's milk, kulen from Slavonia.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CLIMATE_ENVIRONMENT_MODE_LABELS: Record<string, string> = {
  priroda: '🌋 Priroda',
  otpad: '♻️ Otpad i hrana',
  negacija: '🚫 Gdje ide ne',
};

export const CLIMATE_ENVIRONMENT_DRILL_DATA: ModeDrillItem[] = [
  // ── priroda ───────────────────────────────────────────────────────────────
  {
    mode: 'priroda',
    q: 'Zemlja se tresla — bio je to jak ____.',
    en: 'The ground shook — it was a strong earthquake.',
    opts: ['potres', 'poplava', 'suša', 'požar'],
    answer: 'potres',
    tip: 'The shaking of the ground.',
  },
  {
    mode: 'priroda',
    q: 'Rijeka se izlila i počela je ____.',
    en: 'The river burst its banks and a flood began.',
    opts: ['oluja', 'poplava', 'tuča', 'suša'],
    answer: 'poplava',
    tip: 'Too much water: a flood.',
  },
  {
    mode: 'priroda',
    q: 'Mjesecima nije bilo kiše, pa je nastupila ____.',
    en: 'There was no rain for months, so a drought set in.',
    opts: ['poplava', 'suša', 'tuča', 'magla'],
    answer: 'suša',
    tip: 'No rain for a long time.',
  },
  {
    mode: 'priroda',
    q: 'Kanaderi gase šumski ____.',
    en: 'Firefighting planes are putting out a forest fire.',
    opts: ['potres', 'požar', 'otpad', 'spremnik'],
    answer: 'požar',
    tip: 'What firefighting planes put out.',
  },
  {
    mode: 'priroda',
    q: 'Zbog ____ ljeta su sve toplija.',
    en: 'Because of climate change, summers are getting hotter.',
    opts: [
      'klimatske promjene',
      'klimatskih promjena',
      'klimatskim promjenama',
      'klimatsku promjenu',
    ],
    answer: 'klimatskih promjena',
    tip: 'Zbog takes the genitive; here the plural.',
  },
  {
    mode: 'priroda',
    q: 'Nakon potresa mnogi ljudi spavali su u ____.',
    en: 'After the earthquake many people slept in tents.',
    opts: ['šatori', 'šatore', 'šatorima', 'šatora'],
    answer: 'šatorima',
    tip: 'Where? u + locative plural.',
  },
  {
    mode: 'priroda',
    q: 'Koja je riječ egzotizam?',
    en: 'Which word is an exoticism?',
    opts: ['potres', 'cunami', 'oluja', 'poplava'],
    answer: 'cunami',
    tip: 'A borrowed word for something typical of a distant place.',
  },
  {
    mode: 'priroda',
    q: 'Ljudi su bježali pred ____.',
    en: 'People were fleeing from the typhoon.',
    opts: ['tajfun', 'tajfuna', 'tajfunom', 'tajfunu'],
    answer: 'tajfunom',
    tip: 'Pred takes the instrumental here; an exoticism declines like any noun.',
  },

  // ── otpad ─────────────────────────────────────────────────────────────────
  {
    mode: 'otpad',
    q: 'Staklo bacamo u ____ za staklo.',
    en: 'We throw glass into the glass container.',
    opts: ['spremnik', 'spremniku', 'spremnika', 'spremnikom'],
    answer: 'spremnik',
    tip: 'Where to? u + accusative; a masculine thing does not change.',
  },
  {
    mode: 'otpad',
    q: 'Kod kuće odvajamo ____.',
    en: 'We sort waste at home.',
    opts: ['otpad', 'otpada', 'otpadu', 'otpadom'],
    answer: 'otpad',
    tip: 'A direct object: the accusative of a masculine thing.',
  },
  {
    mode: 'otpad',
    q: 'Prazne boce vraćamo u ____.',
    en: 'We return empty bottles to the shop.',
    opts: ['trgovina', 'trgovini', 'trgovinu', 'trgovine'],
    answer: 'trgovinu',
    tip: 'Where to? u + accusative.',
  },
  {
    mode: 'otpad',
    q: 'Dan planeta Zemlje obilježava se 22. ____.',
    en: 'Earth Day is marked on 22 April.',
    opts: ['ožujka', 'travnja', 'svibnja', 'listopada'],
    answer: 'travnja',
    tip: 'The fourth month, in the genitive.',
  },
  {
    mode: 'otpad',
    q: 'Svjetski dan hrane obilježava se 16. ____.',
    en: 'World Food Day is marked on 16 October.',
    opts: ['rujna', 'studenoga', 'listopada', 'travnja'],
    answer: 'listopada',
    tip: 'The tenth month, in the genitive.',
  },
  {
    mode: 'otpad',
    q: 'Paški sir radi se od ____ mlijeka.',
    en: 'Pag cheese is made from sheep’s milk.',
    opts: ['kozjeg', 'kravljeg', 'ovčjeg', 'magarećeg'],
    answer: 'ovčjeg',
    tip: 'The animal that grazes on the salty pastures of Pag.',
  },
  {
    mode: 'otpad',
    q: 'Kulen je ljuta kobasica iz ____.',
    en: 'Kulen is a spicy sausage from Slavonia.',
    opts: ['Slavonija', 'Slavonije', 'Slavoniji', 'Slavoniju'],
    answer: 'Slavonije',
    tip: 'Iz takes the genitive.',
  },
  {
    mode: 'otpad',
    q: 'Nažalost, u dućanu nije bilo ____.',
    en: 'Unfortunately there was no Pag cheese in the shop.',
    opts: ['paški sir', 'paškog sira', 'paškom siru', 'paški sira'],
    answer: 'paškog sira',
    tip: 'Nije bilo + the genitive, adjective included.',
  },

  // ── negacija ──────────────────────────────────────────────────────────────
  {
    mode: 'negacija',
    q: 'Koja je rečenica točna?',
    en: 'Which sentence is correct?',
    opts: ['Se ne bojim oluje.', 'Ne bojim se oluje.', 'Ne se bojim oluje.', 'Bojim ne se oluje.'],
    answer: 'Ne bojim se oluje.',
    tip: 'Ne + the verb first, then the short word se.',
  },
  {
    mode: 'negacija',
    q: '____ ne znaš da se boce mogu vratiti?',
    en: 'Don’t you know bottles can be returned?',
    opts: ['Zar', 'Li', 'Ni', 'Pa li'],
    answer: 'Zar',
    tip: 'The word that opens a surprised negative question.',
  },
  {
    mode: 'negacija',
    q: 'Vruće je, ____?',
    en: 'It is hot, isn’t it?',
    opts: ['zar ne', 'ne li', 'li ne', 'zar li'],
    answer: 'zar ne',
    tip: 'The tag that asks for agreement.',
  },
  {
    mode: 'negacija',
    q: '"Čega sve nema na tržnici!" znači:',
    en: 'What does the exclamation mean?',
    opts: [
      'Tržnica je prazna.',
      'Na tržnici ima svega.',
      'Tržnica je zatvorena.',
      'Na tržnici nema voća.',
    ],
    answer: 'Na tržnici ima svega.',
    tip: 'In this exclamation the negation stresses abundance.',
  },
  {
    mode: 'negacija',
    q: 'Taj plan ____ ne sviđa.',
    en: 'I do not like that plan.',
    opts: ['mi se', 'se mi', 'me se', 'mi'],
    answer: 'mi se',
    tip: 'The dative comes before se; ne stays by the verb.',
  },
  {
    mode: 'negacija',
    q: 'Ne ____ tu bocu, nego je vrati!',
    en: 'Do not throw that bottle away, take it back instead!',
    opts: ['bacaj', 'bacaš', 'bacao', 'bacala'],
    answer: 'bacaj',
    tip: 'A command needs the imperative.',
  },
  {
    mode: 'negacija',
    q: 'Mi ____ hranu.',
    en: 'We would not throw food away.',
    opts: ['ne bismo bacili', 'nebismo bacili', 'ne bi smo bacili', 'bismo ne bacili'],
    answer: 'ne bismo bacili',
    tip: 'With the conditional ne is a separate word, and bismo is one word.',
  },
  {
    mode: 'negacija',
    q: 'Plastiku ____ u smeće.',
    en: 'I do not throw plastic into the rubbish.',
    opts: ['ne bacam', 'bacam ne', 'nebacam', 'ni bacam'],
    answer: 'ne bacam',
    tip: 'Ne is a separate word directly before the verb.',
  },
];
