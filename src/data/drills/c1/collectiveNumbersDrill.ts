// src/data/drills/c1/collectiveNumbersDrill.ts
//
// C1 COLLECTIVE NUMBERS — the drill for the `collective-numbers` lesson (book-vs-app fix,
// 2026-11-13). The lesson used to route to the clock drill, which practises nothing it
// teaches. Four modes, six items each:
//   zbirni    — dvoje / dvojica / dva, troje, oboje / obojica
//   slaganje  — the verb after a collective: Došlo je petero studenata, nas dvoje idemo
//   priblizni — desetak, petnaestak, stotinjak, dvjestotinjak, with the neuter singular
//   pluralia  — numeral adjectives with plural-only nouns: jedne hlače, dvoja vrata
//
// Every wrong option is real Croatian in the wrong slot or a form learners build by
// analogy; none is Serbian.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const COLLECTIVE_NUMBERS_MODE_LABELS: Record<string, string> = {
  zbirni: '👫 Zbirni brojevi',
  slaganje: '🔗 Slaganje',
  priblizni: '≈ Približni brojevi',
  pluralia: '👖 Jedne hlače',
};

export const COLLECTIVE_NUMBERS_DRILL_DATA: ModeDrillItem[] = [
  // ── zbirni ────────────────────────────────────────────────────────────────
  {
    mode: 'zbirni',
    q: 'Na izlet su otišli Ana i Marko. Na izlet je otišlo ____ prijatelja.',
    en: 'Two friends, a man and a woman, went on the trip.',
    opts: ['dvoje', 'dva', 'dvojica', 'dvije'],
    answer: 'dvoje',
    tip: 'A mixed pair is dvoje, and the noun after it is genitive plural.',
  },
  {
    mode: 'zbirni',
    q: 'Marko i Ivan su prijatelji. ____ su se upoznala u školi.',
    en: 'The two men met at school.',
    opts: ['Dvojica', 'Dvoje', 'Dva', 'Dvojice'],
    answer: 'Dvojica',
    tip: 'Two men counted as a group: dvojica, with the participle in -a.',
  },
  {
    mode: 'zbirni',
    q: 'Imaju ____ djece: sina i dvije kćeri.',
    en: 'They have three children: a son and two daughters.',
    opts: ['troje', 'tri', 'trojica', 'trojicu'],
    answer: 'troje',
    tip: 'Children of both sexes are counted with troje + the genitive plural djece.',
  },
  {
    mode: 'zbirni',
    q: 'U autu su sjedila ____ muškaraca.',
    en: 'Two men were sitting in the car.',
    opts: ['dvojica', 'dvoje', 'dva', 'dvije'],
    answer: 'dvojica',
    tip: 'muškaraca is genitive plural: after dva it would be muškarca, and dvoje is for a mixed group.',
  },
  {
    mode: 'zbirni',
    q: 'Ana i Ivan rade u bolnici. ____ su liječnici.',
    en: 'Both of them work as doctors.',
    opts: ['Oboje', 'Obojica', 'Oba', 'Obje'],
    answer: 'Oboje',
    tip: 'A man and a woman together: oboje.',
  },
  {
    mode: 'zbirni',
    q: 'Petar i Josip igraju nogomet. ____ su odlični igrači.',
    en: 'Both of them are excellent players.',
    opts: ['Obojica', 'Oboje', 'Oba', 'Obje'],
    answer: 'Obojica',
    tip: 'Two men: obojica.',
  },
  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Na predavanje je ____ petero studenata.',
    en: 'Five students came to the lecture.',
    opts: ['došlo', 'došao', 'došla', 'došle'],
    answer: 'došlo',
    tip: 'After a collective in -oje/-ero the verb is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Dvojica radnika ____ krov.',
    en: 'Two workers repaired the roof.',
    opts: ['su popravila', 'je popravilo', 'su popravile', 'je popravio'],
    answer: 'su popravila',
    tip: 'dvojica takes a plural verb, and the participle normally ends in -a.',
  },
  {
    mode: 'slaganje',
    q: 'Nas dvoje ____ zajedno na more.',
    en: 'The two of us are going to the seaside together.',
    opts: ['idemo', 'ide', 'idu', 'idete'],
    answer: 'idemo',
    tip: 'nas dvoje means "we": first person plural.',
  },
  {
    mode: 'slaganje',
    q: 'U parku ____ troje djece.',
    en: 'Three children were running in the park.',
    opts: ['je trčalo', 'je trčao', 'je trčala', 'su trčale'],
    answer: 'je trčalo',
    tip: 'troje djece takes the neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Četvero studenata ____ ispit.',
    en: 'Four students passed the exam.',
    opts: ['je položilo', 'je položio', 'je položila', 'su položile'],
    answer: 'je položilo',
    tip: 'A collective in -ero: neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Nas troje ____ u istom razredu.',
    en: 'The three of us were in the same class.',
    opts: ['smo bili', 'su bili', 'je bilo', 'ste bili'],
    answer: 'smo bili',
    tip: 'nas troje includes the speaker: first person plural.',
  },
  // ── priblizni ─────────────────────────────────────────────────────────────
  {
    mode: 'priblizni',
    q: 'Na sastanku je bilo ____ ljudi.',
    en: 'There were about ten people at the meeting.',
    opts: ['desetak', 'deset', 'desetero', 'desetorica'],
    answer: 'desetak',
    tip: '-ak makes a round number approximate.',
  },
  {
    mode: 'priblizni',
    q: 'Do grada ima ____ kilometara.',
    en: 'It is about fifteen kilometres to town.',
    opts: ['petnaestak', 'petnaest', 'petnaestero', 'petnaestica'],
    answer: 'petnaestak',
    tip: 'petnaest + -ak.',
  },
  {
    mode: 'priblizni',
    q: 'Prosvjedu se pridružilo ____ građana.',
    en: 'About a hundred citizens joined the protest.',
    opts: ['stotinjak', 'stotinu', 'stotinak', 'stotak'],
    answer: 'stotinjak',
    tip: 'For hundreds the suffix is -injak.',
  },
  {
    mode: 'priblizni',
    q: 'Na koncertu je bilo ____ posjetitelja.',
    en: 'There were about two hundred visitors at the concert.',
    opts: ['dvjestotinjak', 'dvije stotine', 'dvjestak', 'dvjestotinak'],
    answer: 'dvjestotinjak',
    tip: 'The hundreds take -tinjak.',
  },
  {
    mode: 'priblizni',
    q: 'Desetak studenata ____ na ispit.',
    en: 'About ten students came to the exam.',
    opts: ['je došlo', 'je došao', 'je došla', 'su došle'],
    answer: 'je došlo',
    tip: 'desetak behaves like nekoliko: genitive plural and a neuter singular verb.',
  },
  {
    mode: 'priblizni',
    q: 'U dvorani je ____ stotinjak ljudi.',
    en: 'About a hundred people were sitting in the hall.',
    opts: ['sjedilo', 'sjedio', 'sjedila', 'sjedile'],
    answer: 'sjedilo',
    tip: 'stotinjak takes the neuter singular.',
  },
  // ── pluralia ──────────────────────────────────────────────────────────────
  {
    mode: 'pluralia',
    q: 'Kupila sam ____ hlače.',
    en: 'I bought one pair of trousers.',
    opts: ['jedne', 'jedna', 'jednu', 'jedan'],
    answer: 'jedne',
    tip: 'hlače exists only in the plural, so it is counted with a plural form.',
  },
  {
    mode: 'pluralia',
    q: 'Kuća ima ____ vrata: ulazna i stražnja.',
    en: 'The house has two doors: the front door and the back door.',
    opts: ['dvoja', 'dva', 'dvije', 'dvoje'],
    answer: 'dvoja',
    tip: 'vrata is a neuter plural-only noun.',
  },
  {
    mode: 'pluralia',
    q: 'U ormaru su ____ hlače.',
    en: 'There are two pairs of trousers in the wardrobe.',
    opts: ['dvoje', 'dvije', 'dvoja', 'dva'],
    answer: 'dvoje',
    tip: 'A feminine plural-only noun takes the numeral adjective in -oje.',
  },
  {
    mode: 'pluralia',
    q: 'Jedne naočale ____ na stolu.',
    en: 'One pair of glasses was on the table.',
    opts: ['su bile', 'je bila', 'je bilo', 'su bili'],
    answer: 'su bile',
    tip: 'A plural-only noun keeps a plural verb, here feminine.',
  },
  {
    mode: 'pluralia',
    q: 'Dvoja vrata ____ otvorena.',
    en: 'Two doors were open.',
    opts: ['su bila', 'je bilo', 'su bili', 'je bila'],
    answer: 'su bila',
    tip: 'vrata is neuter plural.',
  },
  {
    mode: 'pluralia',
    q: 'Trebaju nam ____ kola za selidbu.',
    en: 'We need one car for the move.',
    opts: ['jedna', 'jedne', 'jedno', 'jedan'],
    answer: 'jedna',
    tip: 'kola is a neuter plural-only noun.',
  },
];
