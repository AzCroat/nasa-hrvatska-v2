// src/data/drills/c1/emphaticGenitiveStaloDrill.ts
//
// C1 THE EMPHATIC GENITIVE AND STALO MI JE DO… — the drill for the
// `emphatic-genitive-stalo` lesson (C1 position 21).
//
// Three modes:
//   izrazi    — žao mi je + G, stalo mi je do + G, nije mi do + G, držim do + G
//   slaganje  — the verb after a genitive subject or a quantity: Bilo je ljudi,
//               Došlo je mnogo ljudi
//   pun       — pun, prepun, sit, željan, svjestan + genitive
//
// Žao mi je zbog toga and žao mi je što… are correct Croatian, so neither is ever
// offered as a wrong answer.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const EMPHATIC_GENITIVE_STALO_MODE_LABELS: Record<string, string> = {
  izrazi: '💬 Stalo, žao, do',
  slaganje: '🔢 Glagol uz genitiv',
  pun: '🥛 Pun, sit, željan',
};

export const EMPHATIC_GENITIVE_STALO_DRILL_DATA: ModeDrillItem[] = [
  // ── izrazi ────────────────────────────────────────────────────────────────
  {
    mode: 'izrazi',
    q: 'Stalo mi je do ____.',
    en: 'I care about you.',
    opts: ['tebi', 'tebe', 'tobom', 'ti'],
    answer: 'tebe',
    tip: 'Do takes the genitive: do tebe.',
  },
  {
    mode: 'izrazi',
    q: 'Nije mu stalo do ____.',
    en: 'He does not care about money.',
    opts: ['novac', 'novcu', 'novca', 'novcem'],
    answer: 'novca',
    tip: 'Do + genitive: novca.',
  },
  {
    mode: 'izrazi',
    q: 'Danas mi nije do ____.',
    en: 'I am not in the mood for guests today.',
    opts: ['gostiju', 'gostima', 'goste', 'gosti'],
    answer: 'gostiju',
    tip: 'Nije mi do + genitive plural: gostiju.',
  },
  {
    mode: 'izrazi',
    q: 'Žao mi je ____ godina koje sam izgubio.',
    en: 'I regret the years I lost.',
    opts: ['onim', 'one', 'oni', 'onih'],
    answer: 'onih',
    tip: 'Žao mi je + genitive of what you regret: onih godina.',
  },
  {
    mode: 'izrazi',
    q: 'Žao mi je ____ vremena kad smo svi živjeli zajedno.',
    en: 'I miss the time when we all lived together.',
    opts: ['onoga', 'ono', 'onom', 'onim'],
    answer: 'onoga',
    tip: 'Žao + genitive: onoga vremena.',
  },
  {
    mode: 'izrazi',
    q: 'Mnogo držim do ____.',
    en: 'I set great store by punctuality.',
    opts: ['točnost', 'točnosti', 'točnošću', 'točnostima'],
    answer: 'točnosti',
    tip: 'Držati do + genitive; točnost is an i-noun, so točnosti.',
  },
  {
    mode: 'izrazi',
    q: 'Which word order is correct?',
    en: 'I feel sorry for you.',
    opts: ['Žao je mi te.', 'Žao te mi je.', 'Žao mi je te.', 'Žao mi te je.'],
    answer: 'Žao mi te je.',
    tip: 'Dative clitic first, then te, and je at the end.',
  },
  {
    mode: 'izrazi',
    q: 'Nikome nije bilo do ____ nakon poraza.',
    en: 'Nobody was in the mood for celebrating after the defeat.',
    opts: ['slavlje', 'slavlju', 'slavlja', 'slavljem'],
    answer: 'slavlja',
    tip: 'Do + genitive: slavlja.',
  },
  {
    mode: 'izrazi',
    q: 'Stalo nam je do ____ obitelji.',
    en: 'We care about our family.',
    opts: ['naše', 'našoj', 'našu', 'našom'],
    answer: 'naše',
    tip: 'Do + genitive, feminine singular: naše obitelji.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Na koncert je ____ više od tisuću ljudi.',
    en: 'More than a thousand people came to the concert.',
    opts: ['došli', 'došla', 'došlo', 'došle'],
    answer: 'došlo',
    tip: 'A quantity with the genitive: neuter singular, došlo je.',
  },
  {
    mode: 'slaganje',
    q: 'Na sastanku je ____ i onih koji su bili protiv.',
    en: 'At the meeting there were also those who were against it.',
    opts: ['bili', 'bila', 'bilo', 'bio'],
    answer: 'bilo',
    tip: 'The genitive onih takes a neuter singular verb: bilo je.',
  },
  {
    mode: 'slaganje',
    q: 'Which sentence is correct?',
    en: 'A lot of tourists came this summer.',
    opts: [
      'Ovog ljeta došli su mnogo turista.',
      'Ovog ljeta došlo je mnogo turista.',
      'Ovog ljeta došla je mnogo turista.',
      'Ovog ljeta došlo su mnogo turista.',
    ],
    answer: 'Ovog ljeta došlo je mnogo turista.',
    tip: 'Mnogo + genitive: the verb is neuter singular.',
  },
  {
    mode: 'slaganje',
    q: 'Which sentence is correct?',
    en: 'There are people who never travel.',
    opts: [
      'Imaju ljudi koji nikad ne putuju.',
      'Ima ljude koji nikad ne putuju.',
      'Ima ljudi koji nikad ne putuju.',
      'Ima ljudima koji nikad ne putuju.',
    ],
    answer: 'Ima ljudi koji nikad ne putuju.',
    tip: 'Ima + genitive plural, with ima in the singular.',
  },
  {
    mode: 'slaganje',
    q: 'Do kraja roka ____ je još malo vremena.',
    en: 'There is still a little time left before the deadline.',
    opts: ['ostalo', 'ostala', 'ostao', 'ostali'],
    answer: 'ostalo',
    tip: 'Malo + genitive: neuter singular, ostalo je.',
  },
  {
    mode: 'slaganje',
    q: 'Na svadbi je bilo ____: jela, pića i glazbe.',
    en: 'At the wedding there was everything: food, drink and music.',
    opts: ['sve', 'svemu', 'svima', 'svega'],
    answer: 'svega',
    tip: 'Bilo je svega — the genitive of sve.',
  },
  {
    mode: 'slaganje',
    q: 'Sutra ____ gužve na cestama.',
    en: 'There will be traffic jams on the roads tomorrow.',
    opts: ['bit će', 'bit ćemo', 'bit ćete', 'bit ću'],
    answer: 'bit će',
    tip: 'Bit će + genitive: third person singular.',
  },
  {
    mode: 'slaganje',
    q: 'Na ispitu se ____ dvadesetak kandidata.',
    en: 'About twenty candidates turned up for the exam.',
    opts: ['pojavili', 'pojavilo', 'pojavila', 'pojavile'],
    answer: 'pojavilo',
    tip: 'Dvadesetak + genitive: neuter singular, pojavilo se.',
  },

  // ── pun ───────────────────────────────────────────────────────────────────
  {
    mode: 'pun',
    q: 'Boca je puna ____.',
    en: 'The bottle is full of water.',
    opts: ['vodom', 'vode', 'vodu', 's vodom'],
    answer: 'vode',
    tip: 'Pun + genitive, no preposition: puna vode.',
  },
  {
    mode: 'pun',
    q: 'Trg je prepun ____.',
    en: 'The square is packed with people.',
    opts: ['ljudima', 'ljude', 'ljudi', 's ljudima'],
    answer: 'ljudi',
    tip: 'Prepun + genitive plural: ljudi.',
  },
  {
    mode: 'pun',
    q: 'Sit sam tvojih ____.',
    en: 'I am fed up with your promises.',
    opts: ['obećanja', 'obećanjima', 'obećanje', 's obećanjima'],
    answer: 'obećanja',
    tip: 'Sit + genitive plural: obećanja.',
  },
  {
    mode: 'pun',
    q: 'Nakon duge zime svi smo željni ____.',
    en: 'After a long winter we are all longing for the sun.',
    opts: ['sunce', 'suncu', 'suncem', 'sunca'],
    answer: 'sunca',
    tip: 'Željan + genitive: sunca.',
  },
  {
    mode: 'pun',
    q: 'Jesi li svjestan ____?',
    en: 'Are you aware of the risk?',
    opts: ['rizika', 'rizik', 'riziku', 'rizikom'],
    answer: 'rizika',
    tip: 'Svjestan + genitive: rizika.',
  },
  {
    mode: 'pun',
    q: 'Ormar je pun stare ____.',
    en: 'The wardrobe is full of old clothes.',
    opts: ['odjećom', 'odjeći', 'odjeću', 'odjeće'],
    answer: 'odjeće',
    tip: 'Pun + genitive: stare odjeće.',
  },
  {
    mode: 'pun',
    q: 'Grad je ljeti prepun ____.',
    en: 'In summer the town is packed with tourists.',
    opts: ['turista', 'turistima', 'turiste', 'turisti'],
    answer: 'turista',
    tip: 'Prepun + genitive plural: turista.',
  },
];
