// src/data/drills/b1/nounsEnEtDrill.ts
//
// B1 NOUNS WITH -en- AND -et- — the drill for the `nouns-en-et` lesson.
//
// ime → imena, vrijeme → vremena, rame → ramena; dijete → djeteta, tele → teleta.
// The errors are dropping the extension ("djetu", "na ramu"), keeping the long ije
// before it ("dijeteta", "vrijemena"), and a plural verb with a collective in -ad
// ("telad su").
//
// Three modes:
//   en      — ime, vrijeme, rame, pleme
//   et      — dijete and the young animals
//   mnozina — djeca, the collectives, and the plural of the -me nouns

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NOUNS_EN_ET_MODE_LABELS: Record<string, string> = {
  en: '🏷️ Ime, vrijeme',
  et: '🍼 Dijete, tele',
  mnozina: '👨‍👩‍👧 Množina',
};

export const NOUNS_EN_ET_DRILL_DATA: ModeDrillItem[] = [
  // ── en ────────────────────────────────────────────────────────────────────
  {
    mode: 'en',
    q: 'Nažalost, danas nemam ____ za kavu.',
    en: 'Unfortunately I have no time for coffee today.',
    opts: ['vremena', 'vrijeme', 'vrijemena', 'vremenu'],
    answer: 'vremena',
    tip: 'Nemati takes the genitive; vrijeme shortens ije to je and adds -en-.',
  },
  {
    mode: 'en',
    q: 'Ne sjećam se njegova ____.',
    en: 'I don’t remember his name.',
    opts: ['imena', 'ime', 'imenu', 'ima'],
    answer: 'imena',
    tip: 'Genitive after sjećati se: ime → imena.',
  },
  {
    mode: 'en',
    q: 'Pod kojim ____ ste rezervirali stol?',
    en: 'Under what name did you book the table?',
    opts: ['imenom', 'ime', 'imom', 'imenu'],
    answer: 'imenom',
    tip: 'Instrumental, with -en-: imenom.',
  },
  {
    mode: 'en',
    q: 'Nosi torbu na lijevom ____.',
    en: 'He carries his bag on his left shoulder.',
    opts: ['ramenu', 'ramu', 'rame', 'ramenom'],
    answer: 'ramenu',
    tip: 'Na + locative, with -en-: ramenu.',
  },
  {
    mode: 'en',
    q: 'Po lijepom ____ idemo na izlet.',
    en: 'In nice weather we go on a trip.',
    opts: ['vremenu', 'vrijemenu', 'vrijemu', 'vremenom'],
    answer: 'vremenu',
    tip: 'Po + locative; ije becomes je before -en-.',
  },
  {
    mode: 'en',
    q: 'Napiši svoje ____ i prezime.',
    en: 'Write your first name and surname.',
    opts: ['ime', 'imena', 'imenu', 'imenom'],
    answer: 'ime',
    tip: 'The accusative singular is the bare word: ime.',
  },
  {
    mode: 'en',
    q: 'Za ____ ručka nitko ne razgovara.',
    en: 'During lunch nobody talks.',
    opts: ['vrijeme', 'vremenom', 'vremenu', 'vrijemena'],
    answer: 'vrijeme',
    tip: 'Za vrijeme + genitive means "during"; vrijeme itself is the accusative after za.',
  },
  {
    mode: 'en',
    q: 'Stigli smo točno na ____.',
    en: 'We arrived exactly on time.',
    opts: ['vrijeme', 'vremena', 'vremenu', 'vrijemenu'],
    answer: 'vrijeme',
    tip: 'Na vrijeme: na + accusative, and the accusative singular is the bare word.',
  },

  // ── et ────────────────────────────────────────────────────────────────────
  {
    mode: 'et',
    q: 'Daj ____ malo vode, žedno je.',
    en: 'Give the child some water, it’s thirsty.',
    opts: ['djetetu', 'djetu', 'dijetetu', 'dijete'],
    answer: 'djetetu',
    tip: 'Dative of dijete: shorten ije to je and add -et-.',
  },
  {
    mode: 'et',
    q: 'Došla je na sastanak s ____.',
    en: 'She came to the meeting with her child.',
    opts: ['djetetom', 'djetom', 'dijetetom', 'djecom'],
    answer: 'djetetom',
    tip: 'S + instrumental: djetetom.',
  },
  {
    mode: 'et',
    q: 'Majka je zabrinuta zbog bolesnog ____.',
    en: 'The mother is worried about her sick child.',
    opts: ['djeteta', 'dijeteta', 'djete', 'djetetu'],
    answer: 'djeteta',
    tip: 'Zbog + genitive: djeteta.',
  },
  {
    mode: 'et',
    q: 'Krava stoji pokraj svog ____.',
    en: 'The cow is standing next to her calf.',
    opts: ['teleta', 'tela', 'teletu', 'tele'],
    answer: 'teleta',
    tip: 'Pokraj + genitive, and tele adds -et-.',
  },
  {
    mode: 'et',
    q: 'Djevojčica se igra s malim ____.',
    en: 'The little girl is playing with a small kitten.',
    opts: ['mačetom', 'mačom', 'mačetu', 'mače'],
    answer: 'mačetom',
    tip: 'S + instrumental, with -et-.',
  },
  {
    mode: 'et',
    q: 'Ovo je soba mog ____.',
    en: 'This is my grandchild’s room.',
    opts: ['unučeta', 'unuča', 'unuče', 'unučetu'],
    answer: 'unučeta',
    tip: 'Genitive, with -et-: unučeta.',
  },
  {
    mode: 'et',
    q: 'Seljak je došao na sajam s ____.',
    en: 'The farmer came to the fair with a lamb.',
    opts: ['janjetom', 'janjom', 'janjetu', 'janje'],
    answer: 'janjetom',
    tip: 'Instrumental of janje: janjetom.',
  },
  {
    mode: 'et',
    q: 'Što si kupio ____?',
    en: 'What did you buy for the child?',
    opts: ['djetetu', 'djetu', 'dijete', 'djeteta'],
    answer: 'djetetu',
    tip: 'Buying for someone: the dative, djetetu.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Oni imaju troje ____.',
    en: 'They have three children.',
    opts: ['djece', 'djeca', 'djeteta', 'djecom'],
    answer: 'djece',
    tip: 'Troje takes the genitive of djeca: djece.',
  },
  {
    mode: 'mnozina',
    q: 'Djeca se ____ u vrtu.',
    en: 'The children are playing in the garden.',
    opts: ['igraju', 'igra', 'igramo', 'igraš'],
    answer: 'igraju',
    tip: 'Djeca means many children: plural verb.',
  },
  {
    mode: 'mnozina',
    q: 'Telad ____ na livadi.',
    en: 'The calves are in the meadow.',
    opts: ['je', 'su', 'smo', 'jesu'],
    answer: 'je',
    tip: 'Telad is a collective — one feminine noun with a singular verb.',
  },
  {
    mode: 'mnozina',
    q: 'Učiteljica zna ____ svih učenika.',
    en: 'The teacher knows the names of all the pupils.',
    opts: ['imena', 'imenu', 'imenima', 'imene'],
    answer: 'imena',
    tip: 'The plural of ime is imena — also in the accusative.',
  },
  {
    mode: 'mnozina',
    q: 'U stara ____ ljudi su putovali pješice.',
    en: 'In the old days people travelled on foot.',
    opts: ['vremena', 'vrijemena', 'vremenu', 'vrijeme'],
    answer: 'vremena',
    tip: 'Plural vremena, with ije shortened to je.',
  },
  {
    mode: 'mnozina',
    q: 'Na ____ nosi teški ruksak.',
    en: 'He carries a heavy rucksack on his shoulders.',
    opts: ['ramenima', 'ramima', 'ramena', 'ramenom'],
    answer: 'ramenima',
    tip: 'Na + locative plural: ramenima.',
  },
  {
    mode: 'mnozina',
    q: 'Which sentence is correct?',
    en: 'Choose the correct sentence.',
    opts: [
      'Janjad pase na livadi.',
      'Janjad pasu na livadi.',
      'Janjeta pasu na livadi.',
      'Janje pasu na livadi.',
    ],
    answer: 'Janjad pase na livadi.',
    tip: 'The collective janjad takes a singular verb.',
  },
  {
    mode: 'mnozina',
    q: 'Na farmi je bilo puno ____.',
    en: 'There were a lot of piglets on the farm.',
    opts: ['prasadi', 'praseta', 'prasad', 'prasama'],
    answer: 'prasadi',
    tip: 'Puno takes the genitive; the collective prasad gives prasadi.',
  },
];
