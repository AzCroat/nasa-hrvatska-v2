// src/data/drills/a2/agreeingDisagreeingDrill.ts
//
// A2 AGREEING AND DISAGREEING — the drill for the `agreeing-disagreeing` lesson.
//
// Three modes:
//   slaganje    — agreeing: slagati se, s tobom / s Vama, U pravu si, Imaš pravo, Tako je
//   neslaganje  — disagreeing, softening and not being sure
//   red         — word order: se in second place, li before se, s jedne strane…
//
// Distractors are a missing or misplaced se, a mix of the two "right" phrases, a wrong case
// or a wrong agreement. Both U pravu si and Imaš pravo are correct and are never set
// against each other.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const AGREEING_DISAGREEING_MODE_LABELS: Record<string, string> = {
  slaganje: '👍 Slaganje',
  neslaganje: '👎 Neslaganje',
  red: '🔀 Red riječi',
};

export const AGREEING_DISAGREEING_DRILL_DATA: ModeDrillItem[] = [
  // ── slaganje ───────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: '____ se s tobom.',
    en: 'I agree with you.',
    opts: ['Slažem', 'Slažeš', 'Slagati', 'Slaže'],
    answer: 'Slažem',
    tip: 'The ja form of slagati se.',
  },
  {
    mode: 'slaganje',
    q: 'Slažem se ____.',
    en: 'I agree with you. (to a friend)',
    opts: ['s tobom', 's ti', 'sa tebe', 's tebi'],
    answer: 's tobom',
    tip: 's + the instrumental: s tobom.',
  },
  {
    mode: 'slaganje',
    q: 'Slažem se s ____.',
    en: 'I agree with you. (polite)',
    opts: ['Vama', 'Vas', 'Vam', 'Vi'],
    answer: 'Vama',
    tip: 's + the instrumental of Vi: s Vama.',
  },
  {
    mode: 'slaganje',
    q: 'U ____ si.',
    en: 'You are right.',
    opts: ['pravu', 'pravo', 'prava', 'pravom'],
    answer: 'pravu',
    tip: 'u + locative: u pravu.',
  },
  {
    mode: 'slaganje',
    q: 'Imaš ____.',
    en: 'You are right.',
    opts: ['pravo', 'pravu', 'pravom', 'pravi'],
    answer: 'pravo',
    tip: 'imati pravo: the object stays pravo.',
  },
  {
    mode: 'slaganje',
    q: 'Tako ____!',
    en: 'That is right!',
    opts: ['je', 'si', 'su', 'sam'],
    answer: 'je',
    tip: 'Tako je — literally "so it is".',
  },
  {
    mode: 'slaganje',
    q: '____ tako!',
    en: 'Exactly so!',
    opts: ['Upravo', 'Uprav', 'Upravno', 'Upravu'],
    answer: 'Upravo',
    tip: 'Upravo tako — just so.',
  },
  {
    mode: 'slaganje',
    q: 'Imate pravo, to je ____.',
    en: 'You are right, that is true.',
    opts: ['točno', 'točan', 'točna', 'točni'],
    answer: 'točno',
    tip: 'to je takes the neuter form: točno.',
  },

  // ── neslaganje ─────────────────────────────────────────────────────────
  {
    mode: 'neslaganje',
    q: 'Ne ____ se s tobom.',
    en: 'I do not agree with you.',
    opts: ['slažem', 'slažeš', 'slaže', 'slagati'],
    answer: 'slažem',
    tip: 'The ja form: ne slažem se.',
  },
  {
    mode: 'neslaganje',
    q: 'To nije ____.',
    en: 'That is not true.',
    opts: ['točno', 'točan', 'točnu', 'točnog'],
    answer: 'točno',
    tip: 'to takes the neuter form: točno.',
  },
  {
    mode: 'neslaganje',
    q: 'Ne bih ____.',
    en: 'I would not say so. (a man speaking)',
    opts: ['rekao', 'rekla', 'reći', 'rečem'],
    answer: 'rekao',
    tip: 'bih + the participle; a man says rekao.',
  },
  {
    mode: 'neslaganje',
    q: 'Nisi u ____.',
    en: 'You are not right.',
    opts: ['pravu', 'pravo', 'prava', 'pravi'],
    answer: 'pravu',
    tip: 'The same phrase as u pravu si, negated.',
  },
  {
    mode: 'neslaganje',
    q: 'Nisam ____.',
    en: 'I am not sure. (a woman speaking)',
    opts: ['sigurna', 'siguran', 'sigurno', 'sigurni'],
    answer: 'sigurna',
    tip: 'The word agrees with the woman speaking.',
  },
  {
    mode: 'neslaganje',
    q: 'Djelomično ____ slažem.',
    en: 'I partly agree.',
    opts: ['se', 'si', 'sam', 'ga'],
    answer: 'se',
    tip: 'slagati se keeps its se, in second place.',
  },
  {
    mode: 'neslaganje',
    q: 'Ne bih se ____.',
    en: 'I would not agree. (a woman speaking)',
    opts: ['složila', 'složio', 'složiti', 'slažem'],
    answer: 'složila',
    tip: 'The participle agrees with the woman speaking.',
  },
  {
    mode: 'neslaganje',
    q: 'Po mom ____, to je preskupo.',
    en: 'In my opinion, that is too expensive.',
    opts: ['mišljenju', 'mišljenje', 'mišljenja', 'mišljenjem'],
    answer: 'mišljenju',
    tip: 'po + locative: po mom mišljenju.',
  },

  // ── red ────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Do you agree?',
    opts: ['Slažeš li se?', 'Slažeš se li?', 'Se slažeš li?', 'Li se slažeš?'],
    answer: 'Slažeš li se?',
    tip: 'The verb, then li, then se.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'I agree with that.',
    opts: ['Slažem se s tim.', 'Se slažem s tim.', 'Slažem s tim se.', 'Slažem s tim.'],
    answer: 'Slažem se s tim.',
    tip: 'se goes straight after the verb and is never left out.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Do you agree with me? (polite)',
    opts: [
      'Slažete li se sa mnom?',
      'Slažete se li sa mnom?',
      'Se slažete li sa mnom?',
      'Li se slažete sa mnom?',
    ],
    answer: 'Slažete li se sa mnom?',
    tip: 'li comes straight after the verb, then se.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'I would not agree with you. (a man speaking)',
    opts: [
      'Ne bih se složio s tobom.',
      'Ne se bih složio s tobom.',
      'Ne bih složio se s tobom.',
      'Bih se ne složio s tobom.',
    ],
    answer: 'Ne bih se složio s tobom.',
    tip: 'ne bih, then se, then the participle.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'On the one hand, it is practical.',
    opts: [
      'S jedne strane, to je praktično.',
      'S jednu stranu, to je praktično.',
      'Sa jedna strana, to je praktično.',
      'S jednom stranom, to je praktično.',
    ],
    answer: 'S jedne strane, to je praktično.',
    tip: 's jedne strane is a fixed phrase with the genitive.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'Besides that, it is expensive.',
    opts: [
      'Osim toga, to je skupo.',
      'Osim to, to je skupo.',
      'Osim tome, to je skupo.',
      'Osim tim, to je skupo.',
    ],
    answer: 'Osim toga, to je skupo.',
    tip: 'osim takes the genitive: osim toga.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'What do you think about that?',
    opts: ['Što misliš o tome?', 'Što misliš o to?', 'Što misliš o toga?', 'Što misliš od tome?'],
    answer: 'Što misliš o tome?',
    tip: 'o + locative: o tome.',
  },
  {
    mode: 'red',
    q: 'Koja je rečenica točna?',
    en: 'I am not sure. (a man speaking)',
    opts: ['Nisam siguran.', 'Ne sam siguran.', 'Nisam sigurno.', 'Sam nisam siguran.'],
    answer: 'Nisam siguran.',
    tip: 'nisam is one word, and the adjective agrees with the man speaking.',
  },
];
