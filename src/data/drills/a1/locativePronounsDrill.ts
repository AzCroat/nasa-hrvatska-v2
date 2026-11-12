// src/data/drills/a1/locativePronounsDrill.ts
//
// A1 LOCATIVE PRONOUNS — the drill for the `locative-pronouns` lesson (new A1, 51).
//
// meni, tebi, njemu, njoj, nama, vama, njima — only long forms, always after a
// preposition. The interference error is the accusative the learner met first with
// za (o njega, o nju), so the third mode puts the two cases side by side.
// The shortened locative "njem" is real Croatian and is never offered as a distractor.
//
// Three modes:
//   oblici     — o + the locative pronoun
//   prijedlozi — u njoj, na njemu: "in it", "on it" by the noun's gender
//   razlika    — accusative after za / a verb, locative after o

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const LOCATIVE_PRONOUNS_MODE_LABELS: Record<string, string> = {
  oblici: '💬 O kome?',
  prijedlozi: '📦 U njoj, na njemu',
  razlika: '⚖️ Akuzativ ili lokativ',
};

export const LOCATIVE_PRONOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Mislim o ____.',
    en: 'I am thinking about you. (one friend)',
    opts: ['tebi', 'tebe', 'ti', 'tobom'],
    answer: 'tebi',
    tip: 'ti → o tebi.',
  },
  {
    mode: 'oblici',
    q: 'Pričamo o ____.',
    en: 'We are talking about him.',
    opts: ['njemu', 'njega', 'on', 'njim'],
    answer: 'njemu',
    tip: 'on → o njemu.',
  },
  {
    mode: 'oblici',
    q: 'Razgovaraju o ____.',
    en: 'They are talking about her.',
    opts: ['njoj', 'nju', 'ona', 'njom'],
    answer: 'njoj',
    tip: 'ona → o njoj.',
  },
  {
    mode: 'oblici',
    q: 'Što misliš o ____?',
    en: 'What do you think about me?',
    opts: ['meni', 'mene', 'ja', 'mnom'],
    answer: 'meni',
    tip: 'ja → o meni.',
  },
  {
    mode: 'oblici',
    q: 'Baka priča o ____.',
    en: 'Grandma is talking about us.',
    opts: ['nama', 'nas', 'mi', 'nami'],
    answer: 'nama',
    tip: 'mi → o nama.',
  },
  {
    mode: 'oblici',
    q: 'Pišem o ____.',
    en: 'I am writing about them.',
    opts: ['njima', 'njih', 'oni', 'ih'],
    answer: 'njima',
    tip: 'Every "they" → o njima.',
  },
  {
    mode: 'oblici',
    q: 'Razgovaramo o ____.',
    en: 'We are talking about you. (plural)',
    opts: ['vama', 'vas', 'vi', 'vami'],
    answer: 'vama',
    tip: 'vi → o vama.',
  },
  {
    mode: 'oblici',
    q: 'Ovo je selo. Čitam o ____.',
    en: 'This is the village. I am reading about it.',
    opts: ['njemu', 'njega', 'ono', 'njoj'],
    answer: 'njemu',
    tip: 'Neuter ono shares njemu with on.',
  },
  {
    mode: 'oblici',
    q: 'Uvijek pričaš o ____.',
    en: 'You always talk about her.',
    opts: ['njoj', 'njom', 'nje', 'ona'],
    answer: 'njoj',
    tip: 'The locative of ona is njoj.',
  },
  {
    mode: 'oblici',
    q: 'Znaš li nešto o ____?',
    en: 'Do you know anything about him?',
    opts: ['njemu', 'njega', 'njim', 'on'],
    answer: 'njemu',
    tip: 'znati nešto o + locative.',
  },
  {
    mode: 'oblici',
    q: 'Mama misli o ____.',
    en: 'Mum is thinking about us.',
    opts: ['nama', 'nas', 'mi', 'nami'],
    answer: 'nama',
    tip: 'misliti o + locative.',
  },

  // ── prijedlozi ────────────────────────────────────────────────────────────
  {
    mode: 'prijedlozi',
    q: 'Ovo je soba. U ____ spavam.',
    en: 'This is the room. I sleep in it.',
    opts: ['njoj', 'nju', 'njemu', 'njima'],
    answer: 'njoj',
    tip: 'soba is feminine, and nothing is moving: u njoj.',
  },
  {
    mode: 'prijedlozi',
    q: 'Ovo je stol. Na ____ je knjiga.',
    en: 'This is the table. The book is on it.',
    opts: ['njemu', 'njega', 'njoj', 'on'],
    answer: 'njemu',
    tip: 'stol is masculine: na njemu.',
  },
  {
    mode: 'prijedlozi',
    q: 'Ovo je kuća. U ____ živi baka.',
    en: 'This is the house. Grandma lives in it.',
    opts: ['njoj', 'nju', 'njemu', 'ona'],
    answer: 'njoj',
    tip: 'kuća is feminine: u njoj.',
  },
  {
    mode: 'prijedlozi',
    q: 'Ovo je torba. U ____ su ključevi.',
    en: 'This is the bag. The keys are in it.',
    opts: ['njoj', 'nju', 'njemu', 'njom'],
    answer: 'njoj',
    tip: 'torba is feminine: u njoj.',
  },
  {
    mode: 'prijedlozi',
    q: 'Ovo je selo. U ____ živi djed.',
    en: 'This is the village. Grandpa lives in it.',
    opts: ['njemu', 'njoj', 'ono', 'njega'],
    answer: 'njemu',
    tip: 'selo is neuter: u njemu.',
  },
  {
    mode: 'prijedlozi',
    q: 'Koji padež dolazi iza "o" kad znači "about"?',
    en: 'Which case follows o when it means "about"?',
    opts: ['lokativ', 'akuzativ', 'nominativ', 'genitiv'],
    answer: 'lokativ',
    tip: 'o + locative: o meni, o filmu.',
  },
  {
    mode: 'prijedlozi',
    q: 'Razmišljam ____ tebi.',
    en: 'I am thinking about you.',
    opts: ['o', 'za', 'iz', 'od'],
    answer: 'o',
    tip: 'o is the preposition for a topic.',
  },
  {
    mode: 'prijedlozi',
    q: 'Ovo je ormar. U ____ je odjeća.',
    en: 'This is the wardrobe. The clothes are in it.',
    opts: ['njemu', 'njega', 'njoj', 'on'],
    answer: 'njemu',
    tip: 'ormar is masculine: u njemu.',
  },

  // ── razlika ───────────────────────────────────────────────────────────────
  {
    mode: 'razlika',
    q: 'Volim ____.',
    en: 'I love you. (one person)',
    opts: ['tebe', 'tebi', 'ti', 'tobom'],
    answer: 'tebe',
    tip: 'An object of a verb is accusative: tebe.',
  },
  {
    mode: 'razlika',
    q: 'Čekam ____.',
    en: 'I am waiting for him.',
    opts: ['njega', 'njemu', 'on', 'njim'],
    answer: 'njega',
    tip: 'čekati takes the accusative: njega.',
  },
  {
    mode: 'razlika',
    q: 'Pričamo o ____, a ne o tebi.',
    en: 'We are talking about him, not about you.',
    opts: ['njemu', 'njega', 'on', 'njim'],
    answer: 'njemu',
    tip: 'After o: the locative.',
  },
  {
    mode: 'razlika',
    q: 'Ovo je za ____.',
    en: 'This is for her.',
    opts: ['nju', 'njoj', 'ona', 'njom'],
    answer: 'nju',
    tip: 'za takes the accusative: za nju.',
  },
  {
    mode: 'razlika',
    q: 'Film je o ____.',
    en: 'The film is about them.',
    opts: ['njima', 'njih', 'oni', 'ih'],
    answer: 'njima',
    tip: 'o + locative: njima.',
  },
  {
    mode: 'razlika',
    q: 'Vidim ____.',
    en: 'I see you. (plural)',
    opts: ['vas', 'vama', 'vi', 'vami'],
    answer: 'vas',
    tip: 'An object: accusative vas. After o it would be vama.',
  },
  {
    mode: 'razlika',
    q: 'Pitam ____.',
    en: 'I am asking her.',
    opts: ['nju', 'njoj', 'ona', 'njom'],
    answer: 'nju',
    tip: 'pitati takes the accusative: nju.',
  },
];
