// src/data/drills/b2/nounPeculiaritiesADrill.ts
//
// B2 PECULIARITIES OF A-TYPE NOUNS — the drill for the `noun-peculiarities-a` lesson.
//
// Three modes:
//   plural   — the long plural -ovi/-evi and the short nouns that refuse it; čovjek → ljudi,
//              oko → oči, dijete → djeca
//   fleeting — the fleeting a (momak → momka, pas → psa) and sibilarization before -i
//   vocative — k, g, h, c → č, ž, š, č before -e; -u after a soft consonant
//
// Forms checked against decline(). Distractors are the forms learners build by analogy:
// -ovi on a noun that refuses it, a kept a, a consonant changed where no -i follows.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const NOUN_PECULIARITIES_A_MODE_LABELS: Record<string, string> = {
  plural: '🏙️ -ovi, -evi and irregular plurals',
  fleeting: '💨 fleeting a, k → c',
  vocative: '📣 the vocative',
};

export const NOUN_PECULIARITIES_A_DRILL_DATA: ModeDrillItem[] = [
  // ── plural ────────────────────────────────────────────────────────────────
  {
    mode: 'plural',
    q: 'Moji ____ žive u Njemačkoj.',
    en: 'My sons live in Germany.',
    opts: ['sinovi', 'sini', 'sinevi', 'sinova'],
    answer: 'sinovi',
    tip: 'A short noun ending in a hard consonant takes -ov-.',
  },
  {
    mode: 'plural',
    q: 'Svi ____ su došli na roditeljski sastanak.',
    en: 'All the husbands came to the parents’ meeting.',
    opts: ['muževi', 'mužovi', 'muži', 'muževe'],
    answer: 'muževi',
    tip: 'After the soft ž the insert is -ev-.',
  },
  {
    mode: 'plural',
    q: 'Na ploči su napisani svi ____ od jedan do sto.',
    en: 'All the numbers from one to a hundred are written on the board.',
    opts: ['brojovi', 'brojevi', 'broji', 'brojeva'],
    answer: 'brojevi',
    tip: 'Broj ends in the soft j: brojevi.',
  },
  {
    mode: 'plural',
    q: 'Ljeti su ____ dugi i topli.',
    en: 'In summer the days are long and warm.',
    opts: ['danovi', 'dane', 'dani', 'danevi'],
    answer: 'dani',
    tip: 'Dan is one of the short nouns that refuse the long plural.',
  },
  {
    mode: 'plural',
    q: 'Na vjenčanju je bilo dvjesto ____.',
    en: 'There were two hundred guests at the wedding.',
    opts: ['gostova', 'gosti', 'gosta', 'gostiju'],
    answer: 'gostiju',
    tip: 'Gost has no -ovi, and its genitive plural ends in -iju.',
  },
  {
    mode: 'plural',
    q: 'Radim osam ____ dnevno.',
    en: 'I work eight hours a day.',
    opts: ['sata', 'sati', 'sate', 'satima'],
    answer: 'sati',
    tip: 'Hours are sati; satovi are clocks and watches.',
  },
  {
    mode: 'plural',
    q: 'Na koncertu je bilo mnogo ____.',
    en: 'There were a lot of people at the concert.',
    opts: ['čovjeka', 'ljude', 'čovjeki', 'ljudi'],
    answer: 'ljudi',
    tip: 'The plural of čovjek is ljudi, and its genitive plural is the same.',
  },
  {
    mode: 'plural',
    q: 'Ana ima velike zelene ____.',
    en: 'Ana has big green eyes.',
    opts: ['oči', 'oke', 'oka', 'očiju'],
    answer: 'oči',
    tip: 'The plural of oko is oči — and it is feminine: zelene oči.',
  },
  {
    mode: 'plural',
    q: '____ se igraju u dvorištu.',
    en: 'The children are playing in the yard.',
    opts: ['Djece', 'Djetete', 'Djeca', 'Djeci'],
    answer: 'Djeca',
    tip: 'The plural of dijete is djeca, with a plural verb.',
  },
  // ── fleeting ──────────────────────────────────────────────────────────────
  {
    mode: 'fleeting',
    q: 'Upoznala sam simpatičnog ____ iz Splita.',
    en: 'I met a nice young man from Split.',
    opts: ['momaka', 'momka', 'momak', 'momku'],
    answer: 'momka',
    tip: 'One young man: the a disappears — momka. Momaka is the genitive plural.',
  },
  {
    mode: 'fleeting',
    q: 'Naš susjed ima dva ____.',
    en: 'Our neighbour has two dogs.',
    opts: ['pasa', 'psa', 'pas', 'psi'],
    answer: 'psa',
    tip: 'After dva the genitive singular form: psa, without the a.',
  },
  {
    mode: 'fleeting',
    q: 'U parku se igra deset ____.',
    en: 'Ten dogs are playing in the park.',
    opts: ['psa', 'psi', 'pasa', 'pse'],
    answer: 'pasa',
    tip: 'The a comes back in the genitive plural: pasa.',
  },
  {
    mode: 'fleeting',
    q: 'Danas nema ni malo ____.',
    en: 'Today there is not even a little wind.',
    opts: ['vjetara', 'vjetar', 'vjetru', 'vjetra'],
    answer: 'vjetra',
    tip: 'Vjetar loses its a in the genitive: vjetra.',
  },
  {
    mode: 'fleeting',
    q: 'Moja baka je iz ____.',
    en: 'My grandmother is from Zadar.',
    opts: ['Zadara', 'Zadra', 'Zadru', 'Zadar'],
    answer: 'Zadra',
    tip: 'Zadar has a fleeting a: iz Zadra.',
  },
  {
    mode: 'fleeting',
    q: 'Svi ____ u razredu znaju odgovor.',
    en: 'All the pupils in the class know the answer.',
    opts: ['učeniki', 'učenici', 'učenike', 'učenika'],
    answer: 'učenici',
    tip: 'Before the plural -i, k becomes c.',
  },
  {
    mode: 'fleeting',
    q: 'Učiteljica razgovara s ____.',
    en: 'The teacher is talking with the pupils.',
    opts: ['učenicima', 'učenikima', 'učenike', 'učenika'],
    answer: 'učenicima',
    tip: 'The change happens before -ima too.',
  },
  {
    mode: 'fleeting',
    q: 'Na izletu smo vidjeli dvadeset ____.',
    en: 'On the trip we saw twenty pupils.',
    opts: ['učenici', 'učenicima', 'učenika', 'učenice'],
    answer: 'učenika',
    tip: 'The genitive plural has no -i, so the k stays.',
  },
  {
    mode: 'fleeting',
    q: 'Liječnik kaže da su mi ____ zdravi.',
    en: 'The doctor says my kidneys are healthy.',
    opts: ['bubregi', 'bubreze', 'bubrezi', 'bubrega'],
    answer: 'bubrezi',
    tip: 'Before -i, g becomes z.',
  },
  // ── vocative ──────────────────────────────────────────────────────────────
  {
    mode: 'vocative',
    q: '____, gdje si bio cijeli dan?',
    en: 'Mate, where have you been all day?',
    opts: ['Drugu', 'Druže', 'Druge', 'Drugom'],
    answer: 'Druže',
    tip: 'Before the vocative -e, g becomes ž.',
  },
  {
    mode: 'vocative',
    q: '____, ne mogu vjerovati!',
    en: 'Man, I cannot believe it!',
    opts: ['Čovjeku', 'Čovjekom', 'Čovječe', 'Čovjeke'],
    answer: 'Čovječe',
    tip: 'Before the vocative -e, k becomes č.',
  },
  {
    mode: 'vocative',
    q: '____, pomozi mi, molim te.',
    en: 'Father, help me, please.',
    opts: ['Ocem', 'Ocu', 'Oca', 'Oče'],
    answer: 'Oče',
    tip: 'Otac loses its a and t, and c becomes č: oče.',
  },
  {
    mode: 'vocative',
    q: '____, hvala ti na svemu.',
    en: 'My friend, thank you for everything.',
    opts: ['Prijatelju', 'Prijatelje', 'Prijateljem', 'Prijateljče'],
    answer: 'Prijatelju',
    tip: 'After a soft consonant the vocative ends in -u.',
  },
  {
    mode: 'vocative',
    q: '____, kako ste?',
    en: 'Uncle, how are you? (father’s brother, polite)',
    opts: ['Stricu', 'Strice', 'Striče', 'Stricem'],
    answer: 'Striče',
    tip: 'Before the vocative -e, c becomes č: striče.',
  },
  {
    mode: 'vocative',
    q: '____, stani!',
    en: 'Soldier, stop!',
    opts: ['Vojniku', 'Vojniče', 'Vojnikom', 'Vojnike'],
    answer: 'Vojniče',
    tip: 'k becomes č before the vocative -e.',
  },
];
