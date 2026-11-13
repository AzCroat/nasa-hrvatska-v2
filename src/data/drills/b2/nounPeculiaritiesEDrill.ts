// src/data/drills/b2/nounPeculiaritiesEDrill.ts
//
// B2 PECULIARITIES OF E-TYPE NOUNS — the drill for the `noun-peculiarities-e` lesson.
//
// Three modes:
//   genpl    — the genitive plural: an inserted a (sestara, djevojaka, olovaka) or -i
//              (majki, molbi, šetnji). Only nouns with ONE standard form are asked.
//   datloc   — k, g → c, z before the -i of the dative and locative (ruci, nozi, knjizi,
//              majci), and the nouns that keep the consonant (baki, mački, patki)
//   vocative — -o (sestro, gospođo) and -ica → -ice (učiteljice)
//
// Forms checked against decline(). Distractors are the forms learners build: no inserted a,
// a k left before -i, a change applied to a family word.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NOUN_PECULIARITIES_E_MODE_LABELS: Record<string, string> = {
  genpl: '👭 sestara, majki',
  datloc: '✋ ruci, knjizi, baki',
  vocative: '📣 sestro, učiteljice',
};

export const NOUN_PECULIARITIES_E_DRILL_DATA: ModeDrillItem[] = [
  // ── genpl ─────────────────────────────────────────────────────────────────
  {
    mode: 'genpl',
    q: 'Moj otac ima pet ____.',
    en: 'My father has five sisters.',
    opts: ['sestra', 'sestara', 'sestre', 'sestri'],
    answer: 'sestara',
    tip: 'After pet the genitive plural, with an a between t and r.',
  },
  {
    mode: 'genpl',
    q: 'Na plaži je bilo mnogo ____.',
    en: 'There were a lot of girls on the beach.',
    opts: ['djevojka', 'djevojke', 'djevojaka', 'djevojkama'],
    answer: 'djevojaka',
    tip: 'An a slips in between v and k: djevojaka.',
  },
  {
    mode: 'genpl',
    q: 'Kupila sam deset ____ za školu.',
    en: 'I bought ten pencils for school.',
    opts: ['olovaka', 'olovka', 'olovke', 'olovci'],
    answer: 'olovaka',
    tip: 'olovka → olovaka.',
  },
  {
    mode: 'genpl',
    q: 'Ova zbirka ima stotinu ____.',
    en: 'This collection has a hundred poems.',
    opts: ['pjesma', 'pjesmi', 'pjesme', 'pjesama'],
    answer: 'pjesama',
    tip: 'pjesma → pjesama.',
  },
  {
    mode: 'genpl',
    q: 'Na priredbi je bilo dvadesetak ____.',
    en: 'About twenty mothers were at the school show.',
    opts: ['majke', 'majki', 'majkama', 'majci'],
    answer: 'majki',
    tip: 'majka takes -i in the genitive plural: majki.',
  },
  {
    mode: 'genpl',
    q: 'Ured svaki dan dobiva stotine ____.',
    en: 'The office receives hundreds of requests every day.',
    opts: ['molba', 'molbe', 'molbi', 'molbama'],
    answer: 'molbi',
    tip: 'molba → molbi.',
  },
  {
    mode: 'genpl',
    q: 'Nakon dugih ____ uz more, napokon smo sjeli.',
    en: 'After long walks by the sea, we finally sat down.',
    opts: ['šetnja', 'šetnji', 'šetnjama', 'šetnje'],
    answer: 'šetnji',
    tip: 'šetnja takes -i in the genitive plural: šetnji.',
  },
  {
    mode: 'genpl',
    q: 'Djeca su igrala puno ____ na rođendanu.',
    en: 'The children played lots of games at the birthday party.',
    opts: ['igra', 'igri', 'igre', 'igara'],
    answer: 'igara',
    tip: 'igra → igara: an a between g and r.',
  },
  // ── datloc ────────────────────────────────────────────────────────────────
  {
    mode: 'datloc',
    q: 'Uvijek drži mobitel u ____.',
    en: 'He always holds his phone in his hand.',
    opts: ['ruki', 'ruci', 'ruke', 'ruku'],
    answer: 'ruci',
    tip: 'Before -i, k becomes c: ruci.',
  },
  {
    mode: 'datloc',
    q: 'Imam modricu na ____.',
    en: 'I have a bruise on my leg.',
    opts: ['nogi', 'noge', 'nozi', 'nogu'],
    answer: 'nozi',
    tip: 'Before -i, g becomes z: nozi.',
  },
  {
    mode: 'datloc',
    q: 'Pročitala sam to u jednoj staroj ____.',
    en: 'I read that in an old book.',
    opts: ['knjizi', 'knjigi', 'knjige', 'knjigu'],
    answer: 'knjizi',
    tip: 'Before -i, g becomes z: knjizi.',
  },
  {
    mode: 'datloc',
    q: 'Svaki dan pišem poruku ____.',
    en: 'Every day I write a message to my mother.',
    opts: ['majki', 'majke', 'majku', 'majci'],
    answer: 'majci',
    tip: 'Before the dative -i, k becomes c: majci.',
  },
  {
    mode: 'datloc',
    q: 'Ljeti se kupamo u ____.',
    en: 'In summer we swim in the river.',
    opts: ['rijeki', 'rijeci', 'rijeke', 'rijeku'],
    answer: 'rijeci',
    tip: 'U + locative, k → c: u rijeci.',
  },
  {
    mode: 'datloc',
    q: 'Moja teta već dvadeset godina živi u ____.',
    en: 'My aunt has been living in America for twenty years.',
    opts: ['Amerike', 'Ameriki', 'Ameriku', 'Americi'],
    answer: 'Americi',
    tip: 'U + locative, k → c: u Americi.',
  },
  {
    mode: 'datloc',
    q: 'Svake nedjelje šaljem razglednicu ____.',
    en: 'Every Sunday I send my grandmother a postcard.',
    opts: ['baci', 'baki', 'bake', 'baku'],
    answer: 'baki',
    tip: 'A family word keeps its k: baki.',
  },
  {
    mode: 'datloc',
    q: 'Daj ____ malo mlijeka.',
    en: 'Give the cat a little milk.',
    opts: ['mačci', 'mačke', 'mački', 'mačku'],
    answer: 'mački',
    tip: 'Nouns in -čka keep the k: mački.',
  },
  {
    mode: 'datloc',
    q: 'Djeca bacaju kruh ____ na jezeru.',
    en: 'The children throw bread to the duck on the lake.',
    opts: ['patci', 'patki', 'patke', 'patku'],
    answer: 'patki',
    tip: 'Nouns in -tka keep the k: patki.',
  },
  {
    mode: 'datloc',
    q: 'Kupio sam ____ poklon za rođendan.',
    en: 'I bought my little sister a birthday present.',
    opts: ['seci', 'seke', 'seki', 'seku'],
    answer: 'seki',
    tip: 'A family word keeps its k: seki.',
  },
  // ── vocative ──────────────────────────────────────────────────────────────
  {
    mode: 'vocative',
    q: '____, dođi ovamo!',
    en: 'Sister, come here!',
    opts: ['Sestrom', 'Sestri', 'Sestro', 'Sestre'],
    answer: 'Sestro',
    tip: 'Most feminine nouns in -a take -o: sestro.',
  },
  {
    mode: 'vocative',
    q: '____ Kovač, izvolite sjesti.',
    en: 'Mrs Kovač, please sit down.',
    opts: ['Gospođi', 'Gospođe', 'Gospođu', 'Gospođo'],
    answer: 'Gospođo',
    tip: 'gospođa → gospođo.',
  },
  {
    mode: 'vocative',
    q: '____, mogu li nešto pitati?',
    en: 'Miss, may I ask something? (to a woman teacher)',
    opts: ['Učiteljice', 'Učiteljico', 'Učiteljicom', 'Učiteljicu'],
    answer: 'Učiteljice',
    tip: 'Nouns in -ica take -ice: učiteljice.',
  },
  {
    mode: 'vocative',
    q: 'Draga ____, hvala ti na pomoći.',
    en: 'Dear friend, thank you for your help. (to a woman)',
    opts: ['prijateljico', 'prijateljice', 'prijateljicom', 'prijateljicu'],
    answer: 'prijateljice',
    tip: 'prijateljica → prijateljice.',
  },
  {
    mode: 'vocative',
    q: '____, kad ćeš nam ispeći kolače?',
    en: 'Grandma, when will you bake us some cakes?',
    opts: ['Baki', 'Bako', 'Bake', 'Baku'],
    answer: 'Bako',
    tip: 'baka → bako.',
  },
  {
    mode: 'vocative',
    q: '____, imate li trenutak?',
    en: 'Have you got a moment? (to a woman colleague)',
    opts: ['Kolegico', 'Kolegicom', 'Kolegice', 'Kolegicu'],
    answer: 'Kolegice',
    tip: 'kolegica → kolegice.',
  },
];
