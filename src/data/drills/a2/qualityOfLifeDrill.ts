// src/data/drills/a2/qualityOfLifeDrill.ts
//
// A2 QUALITY OF LIFE — the drill for the `quality-of-life` lesson.
//
// The vocabulary of work, money and rest, and three opinion frames: mislim da…,
// po mom mišljenju…, čini mi se da… The grammar inside them is small and exact:
// je / su come straight after da, po and o take the locative, zadovoljan takes the
// instrumental.
//
// Three modes:
//   rijeci   — the words of the topic
//   misljenje — the opinion frames and their word order
//   padezi   — the cases inside the frames

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const QUALITY_OF_LIFE_MODE_LABELS: Record<string, string> = {
  rijeci: '💼 Riječi',
  misljenje: '💬 Mišljenje',
  padezi: '🔤 Padeži',
};

export const QUALITY_OF_LIFE_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Svaki mjesec za svoj posao dobivam ____.',
    en: 'Every month I get my salary for my work.',
    opts: ['plaću', 'cijenu', 'račun', 'najam'],
    answer: 'plaću',
    tip: 'Plaća — salary.',
  },
  {
    mode: 'rijeci',
    q: 'Troškovi ____ u Zagrebu su visoki.',
    en: 'The cost of living in Zagreb is high.',
    opts: ['života', 'život', 'životu', 'životom'],
    answer: 'života',
    tip: 'Troškovi života — genitive: "costs of life".',
  },
  {
    mode: 'rijeci',
    q: 'Imam dobru plaću, ali nemam ____ vremena.',
    en: 'I have a good salary, but I have no free time.',
    opts: ['slobodnog', 'slobodno', 'slobodnom', 'slobodnim'],
    answer: 'slobodnog',
    tip: 'After nemam, the genitive: slobodnog vremena.',
  },
  {
    mode: 'rijeci',
    q: 'Imam puno ____ na poslu.',
    en: 'I have a lot of stress at work.',
    opts: ['stresa', 'stres', 'stresu', 'stresom'],
    answer: 'stresa',
    tip: 'After puno, the genitive.',
  },
  {
    mode: 'rijeci',
    q: 'Autobusi i tramvaji su javni ____.',
    en: 'Buses and trams are public transport.',
    opts: ['prijevoz', 'prijevoza', 'put', 'prijevozi'],
    answer: 'prijevoz',
    tip: 'Javni prijevoz — public transport.',
  },
  {
    mode: 'rijeci',
    q: '____ je jako važno.',
    en: 'Health is very important.',
    opts: ['Zdravlje', 'Zdrav', 'Zdravo', 'Zdravlja'],
    answer: 'Zdravlje',
    tip: 'Zdravlje — health, a neuter noun.',
  },
  {
    mode: 'rijeci',
    q: 'Ovdje je zrak ____, a priroda je blizu.',
    en: 'Here the air is clean and nature is close by.',
    opts: ['čist', 'čista', 'čisto', 'čisti'],
    answer: 'čist',
    tip: 'Zrak is masculine: čist.',
  },
  {
    mode: 'rijeci',
    q: 'Kvaliteta života ovdje je ____.',
    en: 'The quality of life here is good.',
    opts: ['dobra', 'dobar', 'dobro', 'dobri'],
    answer: 'dobra',
    tip: 'Kvaliteta is feminine: dobra.',
  },
  // ── misljenje ─────────────────────────────────────────────────────────────
  {
    mode: 'misljenje',
    q: 'Mislim ____ je život ovdje skup.',
    en: 'I think life here is expensive.',
    opts: ['da', 'li', 'to', 'i'],
    answer: 'da',
    tip: 'The frame is mislim da + an ordinary sentence.',
  },
  {
    mode: 'misljenje',
    q: 'Koja je rečenica ispravna?',
    en: 'Which sentence is correct?',
    opts: [
      'Mislim da je skupo.',
      'Mislim da skupo je.',
      'Mislim je da skupo.',
      'Mislim skupo da je.',
    ],
    answer: 'Mislim da je skupo.',
    tip: 'Je comes straight after da.',
  },
  {
    mode: 'misljenje',
    q: 'Čini ____ se da ljudi ovdje rade previše.',
    en: 'It seems to me that people here work too much.',
    opts: ['mi', 'me', 'meni', 'moj'],
    answer: 'mi',
    tip: 'The frame is čini mi se — the short dative of ja.',
  },
  {
    mode: 'misljenje',
    q: 'Mislim da ____ dobro raditi vikendom.',
    en: 'I don’t think it is good to work at weekends.',
    opts: ['nije', 'ne je', 'je ne', 'nisu'],
    answer: 'nije',
    tip: 'Croatian puts the negative after da: mislim da nije.',
  },
  {
    mode: 'misljenje',
    q: 'Po mom ____, plaće su male.',
    en: 'In my opinion, salaries are low.',
    opts: ['mišljenju', 'mišljenje', 'mišljenja', 'mišljenjem'],
    answer: 'mišljenju',
    tip: 'Po takes the locative.',
  },
  {
    mode: 'misljenje',
    q: 'Mislim da ____ troškovi života visoki.',
    en: 'I think the cost of living is high.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'Troškovi is plural: su, straight after da.',
  },
  {
    mode: 'misljenje',
    q: 'Što ____ o životu na selu?',
    en: 'What do you think about life in the countryside? (to a friend)',
    opts: ['misliš', 'mislim', 'mislite', 'misli'],
    answer: 'misliš',
    tip: 'To a friend: the ti form.',
  },
  {
    mode: 'misljenje',
    q: 'Mislim da ____ pravo.',
    en: 'I think you are right. (to a friend)',
    opts: ['imaš', 'si', 'imaju', 'jesi'],
    answer: 'imaš',
    tip: 'To be right is imati pravo.',
  },
  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'Što misliš o ____ u Splitu?',
    en: 'What do you think about life in Split?',
    opts: ['životu', 'život', 'života', 'životom'],
    answer: 'životu',
    tip: 'O takes the locative.',
  },
  {
    mode: 'padezi',
    q: 'Po ____ mišljenju, zdravlje je jako važno.',
    en: 'In my opinion, health is very important.',
    opts: ['mom', 'moje', 'moj', 'mojim'],
    answer: 'mom',
    tip: 'Po + locative: mom mišljenju.',
  },
  {
    mode: 'padezi',
    q: 'Jesi li zadovoljna ____?',
    en: 'Are you satisfied with your job?',
    opts: ['poslom', 'posao', 'posla', 'poslu'],
    answer: 'poslom',
    tip: 'Zadovoljan takes the instrumental: poslom.',
  },
  {
    mode: 'padezi',
    q: 'Zadovoljan sam ____.',
    en: 'I am satisfied with my salary.',
    opts: ['plaćom', 'plaća', 'plaću', 'plaći'],
    answer: 'plaćom',
    tip: 'Instrumental after zadovoljan: plaćom.',
  },
  {
    mode: 'padezi',
    q: 'Za ____ su obitelj i prijatelji jako važni.',
    en: 'For me, family and friends are very important.',
    opts: ['mene', 'meni', 'mi', 'ja'],
    answer: 'mene',
    tip: 'Za takes the accusative: za mene.',
  },
  {
    mode: 'padezi',
    q: 'U ____ gradu ima puno parkova.',
    en: 'There are a lot of parks in my town.',
    opts: ['mom', 'moj', 'moja', 'mojoj'],
    answer: 'mom',
    tip: 'Masculine locative: mom (or mojem) gradu.',
  },
  {
    mode: 'padezi',
    q: 'Život na ____ je miran.',
    en: 'Life in the countryside is peaceful.',
    opts: ['selu', 'selo', 'sela', 'selom'],
    answer: 'selu',
    tip: 'Na + locative: na selu.',
  },
  {
    mode: 'padezi',
    q: 'Mislim da je ____ u malom gradu jeftin.',
    en: 'I think life in a small town is cheap.',
    opts: ['život', 'života', 'životu', 'životom'],
    answer: 'život',
    tip: 'It is the subject of je: the basic form.',
  },
];
