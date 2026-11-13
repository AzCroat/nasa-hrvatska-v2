// src/data/drills/b2/familyChangesDrill.ts
//
// B2 THE CHANGING FAMILY — the drill for the `family-changes` lesson.
//
// Family vocabulary (uža / šira obitelj, brak, vjenčati se, samohrani roditelj,
// kućanstvo, unuci), the trend construction sve + comparative with the agreement it brings
// (sve manje djece se rađa), and the phrases of a B2 discussion. Facts are stated
// qualitatively: no figures that could date or be wrong.
//
// Three modes:
//   obitelj  — family words
//   trend    — sve + comparative and quantity agreement
//   rasprava — discussing and giving opinions

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FAMILY_CHANGES_MODE_LABELS: Record<string, string> = {
  obitelj: '👪 Obitelj',
  trend: '📉 Trend',
  rasprava: '🗣️ Rasprava',
};

export const FAMILY_CHANGES_DRILL_DATA: ModeDrillItem[] = [
  // ── obitelj ──────────────────────────────────────────────────────────────
  {
    mode: 'obitelj',
    q: 'Roditelji i djeca čine ____ obitelj.',
    en: 'Parents and children make up the immediate family.',
    opts: ['širu', 'užu', 'veliku', 'staru'],
    answer: 'užu',
    tip: 'Uža obitelj is the narrow, immediate family.',
  },
  {
    mode: 'obitelj',
    q: 'Na vjenčanju je bila cijela ____ obitelj, s tetama i bratićima.',
    en: 'The whole extended family was at the wedding, with aunts and cousins.',
    opts: ['šira', 'uža', 'mala', 'nova'],
    answer: 'šira',
    tip: 'Šira obitelj is the extended family.',
  },
  {
    mode: 'obitelj',
    q: 'Vjenčali smo ____ prošlog ljeta.',
    en: 'We got married last summer.',
    opts: ['nas', 'se', 'si', 'sebe'],
    answer: 'se',
    tip: 'Vjenčati se is reflexive.',
  },
  {
    mode: 'obitelj',
    q: 'Ona sama odgaja kćer; ona je ____ majka.',
    en: 'She brings up her daughter alone; she is a single mother.',
    opts: ['samohrana', 'samohrani', 'samohranu', 'samohranom'],
    answer: 'samohrana',
    tip: 'The adjective agrees with majka.',
  },
  {
    mode: 'obitelj',
    q: 'Njihov ____ traje već četrdeset godina.',
    en: 'Their marriage has lasted forty years.',
    opts: ['brak', 'brata', 'brod', 'brat'],
    answer: 'brak',
    tip: 'Brak is marriage.',
  },
  {
    mode: 'obitelj',
    q: 'Baka svako jutro vodi ____ u vrtić.',
    en: 'Grandma takes the grandchildren to nursery every morning.',
    opts: ['unuci', 'unuke', 'unucima', 'unuka'],
    answer: 'unuke',
    tip: 'A direct object in the plural: accusative.',
  },
  {
    mode: 'obitelj',
    q: 'U našem ____ žive tri osobe.',
    en: 'Three people live in our household.',
    opts: ['kućanstvo', 'kućanstva', 'kućanstvu', 'kućanstvom'],
    answer: 'kućanstvu',
    tip: 'Where? u + locative: kućanstvu.',
  },
  {
    mode: 'obitelj',
    q: 'Par koji živi zajedno bez braka živi u ____ zajednici.',
    en: 'A couple living together without marriage.',
    opts: ['bračnoj', 'izvanbračnoj', 'obiteljskoj', 'roditeljskoj'],
    answer: 'izvanbračnoj',
    tip: 'Izvan = outside: outside marriage.',
  },
  // ── trend ────────────────────────────────────────────────────────────────
  {
    mode: 'trend',
    q: 'Mladi se vjenčavaju sve ____.',
    en: 'Young people get married later and later.',
    opts: ['kasno', 'kasnije', 'najkasnije', 'kasni'],
    answer: 'kasnije',
    tip: 'Sve + comparative.',
  },
  {
    mode: 'trend',
    q: 'Obitelji imaju sve manje ____.',
    en: 'Families have fewer and fewer children.',
    opts: ['djeca', 'djeci', 'djece', 'djecu'],
    answer: 'djece',
    tip: 'Manje is a quantity word: genitive.',
  },
  {
    mode: 'trend',
    q: 'Sve manje djece se ____ na selu.',
    en: 'Fewer and fewer children are born in the countryside.',
    opts: ['rađam', 'rađa', 'rađamo', 'rađaš'],
    answer: 'rađa',
    tip: 'After a quantity word: third person singular.',
  },
  {
    mode: 'trend',
    q: 'Sve ____ mladih odlazi u inozemstvo.',
    en: 'More and more young people go abroad.',
    opts: ['puno', 'više', 'mnogo', 'najviše'],
    answer: 'više',
    tip: 'A growing trend: sve + comparative.',
  },
  {
    mode: 'trend',
    q: 'Kako se kaže "more and more couples"?',
    en: 'How do you say this phrase?',
    opts: ['više i više parova', 'sve više parova', 'što više parova', 'mnogo više par'],
    answer: 'sve više parova',
    tip: 'Croatian does not double the comparative.',
  },
  {
    mode: 'trend',
    q: 'U kući su nekad živjele tri ____.',
    en: 'Three generations used to live in the house.',
    opts: ['generacija', 'generacije', 'generacijama', 'generaciju'],
    answer: 'generacije',
    tip: 'After tri the genitive-singular form, which ends in -e.',
  },
  {
    mode: 'trend',
    q: 'Danas je sve više ljudi koji ____ sami.',
    en: 'Today there are more and more people who live alone.',
    opts: ['živi', 'žive', 'živim', 'živiš'],
    answer: 'žive',
    tip: 'Koji (plural ljudi) is the subject of the clause: plural verb.',
  },
  {
    mode: 'trend',
    q: 'Mladi u Hrvatskoj napuštaju roditeljski dom relativno ____.',
    en: 'Young adults in Croatia leave the parental home relatively late.',
    opts: ['rano', 'kasno', 'brzo', 'često'],
    answer: 'kasno',
    tip: 'Compared with most of the EU, it happens late — often around thirty.',
  },
  // ── rasprava ─────────────────────────────────────────────────────────────
  {
    mode: 'rasprava',
    q: 'Po mom ____, obitelj je najvažnija.',
    en: 'In my opinion, family matters most.',
    opts: ['mišljenje', 'mišljenja', 'mišljenju', 'mišljenjem'],
    answer: 'mišljenju',
    tip: 'Po + locative.',
  },
  {
    mode: 'rasprava',
    q: 'To ovisi ____ tome koliko zarađuju.',
    en: 'It depends on how much they earn.',
    opts: ['od', 'o', 'na', 'iz'],
    answer: 'o',
    tip: 'Ovisiti takes o + locative.',
  },
  {
    mode: 'rasprava',
    q: 'S jedne strane mladi su slobodniji, a s ____ strane teže dolaze do stana.',
    en: 'On the one hand young people are freer, on the other it is harder for them to get a flat.',
    opts: ['druge', 'drugom', 'drugu', 'drugoj'],
    answer: 'druge',
    tip: 'S meaning from takes the genitive, as in the first half.',
  },
  {
    mode: 'rasprava',
    q: 'Ne ____ se s tim mišljenjem.',
    en: 'I do not agree with that opinion.',
    opts: ['slaže', 'slažem', 'slažu', 'slažeš'],
    answer: 'slažem',
    tip: 'First person singular of slagati se.',
  },
  {
    mode: 'rasprava',
    q: 'Što mjeri indeks sreće?',
    en: 'What does a happiness index measure?',
    opts: ['broj brakova', 'zadovoljstvo životom', 'broj djece', 'cijene stanova'],
    answer: 'zadovoljstvo životom',
    tip: 'Sreća is happiness: how satisfied people are with life.',
  },
  {
    mode: 'rasprava',
    q: 'Koja rečenica izražava neslaganje pristojno?',
    en: 'Which sentence disagrees politely?',
    opts: ['Nemaš pojma.', 'To je glupost.', 'Ne bih se složio s tobom.', 'Šuti.'],
    answer: 'Ne bih se složio s tobom.',
    tip: 'The conditional softens a disagreement.',
  },
  {
    mode: 'rasprava',
    q: 'Što je "baka servis"?',
    en: 'What does this joking expression mean?',
    opts: [
      'grandparents minding the grandchildren',
      'a nursing home',
      'a babysitting agency',
      'a pension fund',
    ],
    answer: 'grandparents minding the grandchildren',
    tip: 'A colloquial joke: the granny service.',
  },
  {
    mode: 'rasprava',
    q: 'Za mene je ____ vrijeme provedeno s obitelji.',
    en: 'For me happiness is time spent with family.',
    opts: ['sreća', 'sreću', 'sreće', 'sreći'],
    answer: 'sreća',
    tip: 'The subject complement after je: nominative.',
  },
];
