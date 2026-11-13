// src/data/drills/b2/presentAtiTrickyDrill.ts
//
// B2 -ATI VERBS WITH AN -EM PRESENT — the drill for the `present-ati-tricky` lesson.
//
// Three modes:
//   soften — s → š, z → ž, k → č, g → ž before -em: pišem, kažem, plačem, lažem
//   stem   — the three that change more: slati → šaljem, zvati → zovem, brati → berem
//   tenses — prefixed verbs, commands (built on the present) and the past (built on the
//            infinitive)
//
// Distractors are the forms learners build by analogy with čitati (-am), and the change
// carried into the past where it does not belong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PRESENT_ATI_TRICKY_MODE_LABELS: Record<string, string> = {
  soften: '✍️ pišem, kažem, plačem',
  stem: '📨 šaljem, zovem, berem',
  tenses: '🔁 prefixes, commands, past',
};

export const PRESENT_ATI_TRICKY_DRILL_DATA: ModeDrillItem[] = [
  // ── soften ────────────────────────────────────────────────────────────────
  {
    mode: 'soften',
    q: 'Svaki tjedan ____ baki pismo.',
    en: 'Every week I write my grandmother a letter.',
    opts: ['pisam', 'pišem', 'pisem', 'pišam'],
    answer: 'pišem',
    tip: 'pisati → pišem: s becomes š, the ending is -em.',
  },
  {
    mode: 'soften',
    q: 'Kako se to ____ na hrvatskom?',
    en: 'How do you say that in Croatian?',
    opts: ['kaza', 'kaže', 'kazi', 'kaža'],
    answer: 'kaže',
    tip: 'kazati → kažem: z becomes ž.',
  },
  {
    mode: 'soften',
    q: 'Zašto beba stalno ____?',
    en: 'Why does the baby keep crying?',
    opts: ['plače', 'plaka', 'plaće', 'plakaje'],
    answer: 'plače',
    tip: 'plakati → plačem: k becomes č.',
  },
  {
    mode: 'soften',
    q: 'Djeca ____ u more s mola.',
    en: 'The children jump into the sea from the pier.',
    opts: ['skakaju', 'skače', 'skaču', 'skačeju'],
    answer: 'skaču',
    tip: 'skakati → skačem; the oni form ends in -u.',
  },
  {
    mode: 'soften',
    q: 'Nakon nastave učiteljica ____ ploču.',
    en: 'After class the teacher wipes the board.',
    opts: ['brisa', 'brišu', 'brise', 'briše'],
    answer: 'briše',
    tip: 'brisati → brišem: s becomes š.',
  },
  {
    mode: 'soften',
    q: 'Znam da mi ____, vidi ti se na licu.',
    en: 'I know you are lying to me, it shows on your face.',
    opts: ['lagaš', 'lažeš', 'lageš', 'lažaš'],
    answer: 'lažeš',
    tip: 'lagati → lažem: g becomes ž.',
  },
  {
    mode: 'soften',
    q: 'Prije puta uvijek ____ bicikl na auto.',
    en: 'Before a trip we always tie the bike onto the car.',
    opts: ['vezamo', 'vežemo', 'vezemo', 'vežamo'],
    answer: 'vežemo',
    tip: 'vezati → vežem: z becomes ž.',
  },
  {
    mode: 'soften',
    q: 'Što ____ u tom pismu?',
    en: 'What are you writing in that letter? (to a friend)',
    opts: ['pišeš', 'pisaš', 'pišaš', 'piseš'],
    answer: 'pišeš',
    tip: 'pisati → pišem, pišeš.',
  },
  // ── stem ──────────────────────────────────────────────────────────────────
  {
    mode: 'stem',
    q: 'Sutra vam ____ sve dokumente.',
    en: 'Tomorrow I am sending you all the documents.',
    opts: ['slam', 'šalem', 'šaljem', 'slajem'],
    answer: 'šaljem',
    tip: 'slati → šaljem: s becomes š and lj appears.',
  },
  {
    mode: 'stem',
    q: 'Moji roditelji mi svaki mjesec ____ paket.',
    en: 'My parents send me a parcel every month.',
    opts: ['šalju', 'slaju', 'šalje', 'šaliju'],
    answer: 'šalju',
    tip: 'The oni form of slati is šalju.',
  },
  {
    mode: 'stem',
    q: 'Kako se ____ tvoja sestra?',
    en: 'What is your sister’s name?',
    opts: ['zva', 'zvaje', 'zove', 'zovu'],
    answer: 'zove',
    tip: 'zvati → zovem: an o appears. One sister: zove.',
  },
  {
    mode: 'stem',
    q: 'Prijatelji me ____ Pepa.',
    en: 'My friends call me Pepa.',
    opts: ['zvaju', 'zovu', 'zove', 'zovaju'],
    answer: 'zovu',
    tip: 'zvati → zovem; the oni form is zovu.',
  },
  {
    mode: 'stem',
    q: 'U rujnu ____ grožđe u vinogradu.',
    en: 'In September we pick grapes in the vineyard.',
    opts: ['bramo', 'beramo', 'bremo', 'beremo'],
    answer: 'beremo',
    tip: 'brati → berem: an e appears.',
  },
  {
    mode: 'stem',
    q: 'Baka ____ cvijeće u vrtu.',
    en: 'Grandmother is picking flowers in the garden.',
    opts: ['bere', 'bra', 'brae', 'beru'],
    answer: 'bere',
    tip: 'brati → berem, bere.',
  },
  {
    mode: 'stem',
    q: 'Subotom ____ auto ispred kuće.',
    en: 'On Saturdays I wash the car in front of the house.',
    opts: ['pram', 'praem', 'perem', 'perim'],
    answer: 'perem',
    tip: 'prati → perem works like brati → berem.',
  },
  {
    mode: 'stem',
    q: 'Zašto me nikad ne ____?',
    en: 'Why do you never call me? (to a friend)',
    opts: ['zvaš', 'zoveš', 'zovaš', 'zvaješ'],
    answer: 'zoveš',
    tip: 'zvati → zovem, zoveš.',
  },
  // ── tenses ────────────────────────────────────────────────────────────────
  {
    mode: 'tenses',
    q: 'Jučer sam ____ cijeli dan.',
    en: 'Yesterday I was writing all day. (a man speaking)',
    opts: ['pišao', 'pisao', 'pisal', 'pisio'],
    answer: 'pisao',
    tip: 'The past is built on the infinitive pisati — no š.',
  },
  {
    mode: 'tenses',
    q: 'Prošli tjedan smo ____ mnogo razglednica.',
    en: 'Last week we sent a lot of postcards.',
    opts: ['šaljali', 'slali', 'šalili', 'slaljali'],
    answer: 'slali',
    tip: 'The past comes from slati: slali.',
  },
  {
    mode: 'tenses',
    q: 'Ne ____, sve će biti u redu.',
    en: 'Do not cry, everything will be all right. (to a friend)',
    opts: ['plakaj', 'plači', 'plaći', 'plačaj'],
    answer: 'plači',
    tip: 'The command is built on the present stem plač-.',
  },
  {
    mode: 'tenses',
    q: '____ mi poruku kad stigneš!',
    en: 'Send me a message when you arrive! (to a friend)',
    opts: ['Pošalji', 'Poslaj', 'Pošali', 'Posli'],
    answer: 'Pošalji',
    tip: 'poslati → pošaljem, so the command is pošalji.',
  },
  {
    mode: 'tenses',
    q: 'Molim vas, ____ ovaj obrazac.',
    en: 'Please sign this form.',
    opts: ['potpisajte', 'potpisite', 'potpišite', 'potpišajte'],
    answer: 'potpišite',
    tip: 'potpisati keeps the š of pisati: potpišite.',
  },
  {
    mode: 'tenses',
    q: 'Ako ih ____, sigurno će doći.',
    en: 'If we invite them, they will certainly come.',
    opts: ['pozvamo', 'pozovemo', 'pozivimo', 'pozovamo'],
    answer: 'pozovemo',
    tip: 'pozvati follows zvati: pozovem, pozovemo.',
  },
  {
    mode: 'tenses',
    q: '____ što god želiš s jelovnika.',
    en: 'Choose whatever you like from the menu. (to a friend)',
    opts: ['Izabraj', 'Izaberi', 'Izbiri', 'Izabri'],
    answer: 'Izaberi',
    tip: 'izabrati follows brati: izaberem, izaberi.',
  },
  {
    mode: 'tenses',
    q: 'Mama je ____ kad je čula vijest.',
    en: 'Mum cried when she heard the news.',
    opts: ['plačela', 'plakla', 'plačila', 'plakala'],
    answer: 'plakala',
    tip: 'The past comes from plakati — no č.',
  },
];
