// src/data/drills/a1/postcardsWishesDrill.ts
//
// A1 POSTCARDS AND WISHES — the drill for the `postcards-wishes` lesson.
//
// Most of a card is fixed phrases; the grammar is in one adjective. Sretan agrees
// with the occasion (Sretan rođendan, Sretna Nova godina), sretno alone means good
// luck, and draga / dragi follows whether the person is a woman or a man — tata
// ends in -a and still takes dragi. Želim puts the person in the dative and the
// wish in the accusative (sretnu Novu godinu).
//
// No vocative here: the lesson sits before it, so every opening uses a word whose
// vocative is the same as the dictionary form (mama, tata, Ana, Marko).
//
// Three modes:
//   sretan      — sretan / sretna / sretno with the occasion
//   prilika     — which wish for which occasion
//   razglednica — opening, closing, and želim + dative

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const POSTCARDS_WISHES_MODE_LABELS: Record<string, string> = {
  sretan: '🎉 Sretan',
  prilika: '🎁 Prilika',
  razglednica: '💌 Razglednica',
};

export const POSTCARDS_WISHES_DRILL_DATA: ModeDrillItem[] = [
  // ── sretan ────────────────────────────────────────────────────────────────
  {
    mode: 'sretan',
    q: '____ rođendan!',
    en: 'Happy birthday!',
    opts: ['Sretna', 'Sretan', 'Sretno', 'Sretne'],
    answer: 'Sretan',
    tip: 'Rođendan is masculine.',
  },
  {
    mode: 'sretan',
    q: '____ Nova godina!',
    en: 'Happy New Year!',
    opts: ['Sretan', 'Sretno', 'Sretna', 'Sretni'],
    answer: 'Sretna',
    tip: 'Godina is feminine.',
  },
  {
    mode: 'sretan',
    q: '____ Božić!',
    en: 'Merry Christmas!',
    opts: ['Sretna', 'Sretno', 'Sretni', 'Sretan'],
    answer: 'Sretan',
    tip: 'Božić is masculine.',
  },
  {
    mode: 'sretan',
    q: '____ Uskrs!',
    en: 'Happy Easter!',
    opts: ['Sretan', 'Sretna', 'Sretno', 'Sretnu'],
    answer: 'Sretan',
    tip: 'Uskrs is masculine.',
  },
  {
    mode: 'sretan',
    q: '____ na ispitu!',
    en: 'Good luck in the exam!',
    opts: ['Sretan', 'Sretna', 'Sretno', 'Sretne'],
    answer: 'Sretno',
    tip: 'On its own, the neuter form means good luck.',
  },
  {
    mode: 'sretan',
    q: 'Želim vam ____ Novu godinu.',
    en: 'I wish you a Happy New Year.',
    opts: ['sretna', 'sretan', 'sretno', 'sretnu'],
    answer: 'sretnu',
    tip: 'The wish is the object of želim: feminine accusative -u.',
  },
  {
    mode: 'sretan',
    q: '____ put!',
    en: 'Have a good trip!',
    opts: ['Sretna', 'Sretan', 'Sretno', 'Sretnu'],
    answer: 'Sretan',
    tip: 'Put (journey) is masculine.',
  },
  {
    mode: 'sretan',
    q: '____ imendan!',
    en: 'Happy name day!',
    opts: ['Sretno', 'Sretna', 'Sretan', 'Sretni'],
    answer: 'Sretan',
    tip: 'Imendan is masculine, like rođendan.',
  },

  // ── prilika ───────────────────────────────────────────────────────────────
  {
    mode: 'prilika',
    q: 'Prijatelj sutra ima ispit. Što kažeš?',
    en: 'Your friend has an exam tomorrow. What do you say?',
    opts: ['Sretno!', 'Sretan put!', 'Sretan Božić!', 'Puno pozdrava!'],
    answer: 'Sretno!',
    tip: 'Before an exam you wish good luck.',
  },
  {
    mode: 'prilika',
    q: 'Sestra je položila ispit. Što kažeš?',
    en: 'Your sister passed her exam. What do you say?',
    opts: ['Sretan put!', 'Čestitam!', 'Sretno!', 'Sretan Uskrs!'],
    answer: 'Čestitam!',
    tip: 'For something achieved: congratulations.',
  },
  {
    mode: 'prilika',
    q: 'Prijatelj putuje u Australiju. Što kažeš?',
    en: 'Your friend is travelling to Australia. What do you say?',
    opts: ['Čestitam!', 'Sretna Nova godina!', 'Sretan put!', 'Sretan rođendan!'],
    answer: 'Sretan put!',
    tip: 'Put — a journey.',
  },
  {
    mode: 'prilika',
    q: 'Na čestitki je bor. Što piše?',
    en: 'The card has a Christmas tree on it. What does it say?',
    opts: ['Sretan Uskrs!', 'Sretan Božić!', 'Sretan imendan!', 'Sretno!'],
    answer: 'Sretan Božić!',
    tip: 'A Christmas tree on the card: Christmas.',
  },
  {
    mode: 'prilika',
    q: 'Ponoć je i svi slave. Što kažeš?',
    en: 'It is midnight on New Year’s Eve and everyone is celebrating. What do you say?',
    opts: ['Sretan Božić!', 'Sretan put!', 'Sretna Nova godina!', 'Sretan Uskrs!'],
    answer: 'Sretna Nova godina!',
    tip: 'At midnight the year changes.',
  },
  {
    mode: 'prilika',
    q: 'Sretan rođendan ____',
    en: 'Happy birthday and all the best!',
    opts: ['i sve najbolje!', 'i sretan put!', 'i čestitam na ispitu!', 'i dobar dan!'],
    answer: 'i sve najbolje!',
    tip: 'All the best — it goes on almost every birthday card.',
  },
  {
    mode: 'prilika',
    q: 'Tvoja prijateljica ima imendan. Što kažeš?',
    en: 'Your friend has her name day. What do you say?',
    opts: ['Sretna imendan!', 'Sretno imendan!', 'Sretan imendan!', 'Sretni imendan!'],
    answer: 'Sretan imendan!',
    tip: 'The adjective agrees with imendan (masculine), not with your friend.',
  },
  {
    mode: 'prilika',
    q: 'Kolegica ima novu bebu. Što pišeš?',
    en: 'Your colleague has a new baby. What do you write?',
    opts: ['Sretan put!', 'Sretno!', 'Čestitam!', 'Sretan Uskrs!'],
    answer: 'Čestitam!',
    tip: 'A new baby is something to congratulate.',
  },

  // ── razglednica ───────────────────────────────────────────────────────────
  {
    mode: 'razglednica',
    q: '____ tata,',
    en: 'Dear Dad,',
    opts: ['Draga', 'Dragi', 'Drago', 'Dragu'],
    answer: 'Dragi',
    tip: 'Tata ends in -a, but he is a man: masculine.',
  },
  {
    mode: 'razglednica',
    q: '____ mama,',
    en: 'Dear Mum,',
    opts: ['Dragi', 'Drago', 'Draga', 'Dragoj'],
    answer: 'Draga',
    tip: 'Your mum is a woman: feminine.',
  },
  {
    mode: 'razglednica',
    q: '____ Marko,',
    en: 'Dear Marko,',
    opts: ['Draga', 'Drago', 'Dragu', 'Dragi'],
    answer: 'Dragi',
    tip: 'Marko is a man.',
  },
  {
    mode: 'razglednica',
    q: 'Puno ____, tvoja Ana',
    en: 'Lots of love, your Ana',
    opts: ['pozdrav', 'pozdrava', 'pozdravi', 'pozdravu'],
    answer: 'pozdrava',
    tip: 'A fixed closing: Puno pozdrava.',
  },
  {
    mode: 'razglednica',
    q: 'Puno pozdrava, ____ Ivan',
    en: 'Lots of love, your Ivan',
    opts: ['tvoja', 'tvoj', 'tvoje', 'tvoju'],
    answer: 'tvoj',
    tip: 'Ivan is a man: tvoj.',
  },
  {
    mode: 'razglednica',
    q: 'Želim ____ sretan rođendan.',
    en: 'I wish you (a friend) a happy birthday.',
    opts: ['te', 'tebe', 'ti', 'tvoj'],
    answer: 'ti',
    tip: 'The person you wish it to is in the dative: ti.',
  },
  {
    mode: 'razglednica',
    q: 'Svaki dan plivam u ____.',
    en: 'Every day I swim in the sea.',
    opts: ['more', 'moru', 'mora', 'morem'],
    answer: 'moru',
    tip: 'Where you swim takes the locative: u moru.',
  },
  {
    mode: 'razglednica',
    q: 'Jučer smo ____ na Hvaru.',
    en: 'Yesterday we were on Hvar.',
    opts: ['bili', 'bio', 'smo', 'biti'],
    answer: 'bili',
    tip: 'Past tense for mi: smo bili.',
  },
];
