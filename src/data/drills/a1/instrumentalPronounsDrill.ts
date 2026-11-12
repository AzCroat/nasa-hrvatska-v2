// src/data/drills/a1/instrumentalPronounsDrill.ts
//
// A1 INSTRUMENTAL PRONOUNS — the drill for the `instrumental-pronouns` lesson.
//
// sa mnom, s tobom, s njim, s njom, s nama, s vama, s njima, s kim. Distractors are
// the subject form, the accusative and the dative a learner reaches for. The
// non-standard "s mnom" is deliberately never offered as an option: it is heard in
// fast speech, and a distractor must be wrong, not merely informal. Long forms
// (njime, njome, mnome) are correct and are never offered as wrong answers either.
//
// Two modes:
//   oblik  — the instrumental form after s / sa
//   mjesto — the same forms after the place words, and the meaning of a phrase

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INSTRUMENTAL_PRONOUNS_MODE_LABELS: Record<string, string> = {
  oblik: '🤝 S kim?',
  mjesto: '🧭 Mjesto i značenje',
};

export const INSTRUMENTAL_PRONOUNS_DRILL_DATA: ModeDrillItem[] = [
  // ── oblik ─────────────────────────────────────────────────────────────────
  {
    mode: 'oblik',
    q: 'Hoćeš li ići u kino ____? (ja)',
    en: 'Do you want to go to the cinema with me?',
    opts: ['sa mnom', 'sa ja', 'sa mi', 'sa meni'],
    answer: 'sa mnom',
    tip: 'The instrumental of ja is mnom, and s becomes sa before it.',
  },
  {
    mode: 'oblik',
    q: 'Rado idem s ____. (ti)',
    en: 'I will gladly go with you.',
    opts: ['ti', 'tebi', 'tobom', 'tebe'],
    answer: 'tobom',
    tip: 'ti → tobom after s.',
  },
  {
    mode: 'oblik',
    q: 'Moj brat radi s ____. (on)',
    en: 'My brother works with him.',
    opts: ['on', 'njim', 'njemu', 'njega'],
    answer: 'njim',
    tip: 'After a preposition, on starts with nj-: njim.',
  },
  {
    mode: 'oblik',
    q: 'Razgovaram s ____ svaki dan. (ona)',
    en: 'I talk to her every day.',
    opts: ['nju', 'njoj', 'ona', 'njom'],
    answer: 'njom',
    tip: 'ona → njom; nju is the accusative, njoj the dative.',
  },
  {
    mode: 'oblik',
    q: 'Ana živi s ____ u Zagrebu. (mi)',
    en: 'Ana lives with us in Zagreb.',
    opts: ['nama', 'nas', 'mi', 'nam'],
    answer: 'nama',
    tip: 'mi → nama after s.',
  },
  {
    mode: 'oblik',
    q: 'Možemo li razgovarati s ____? (vi)',
    en: 'Can we talk to you?',
    opts: ['vas', 'vama', 'vi', 'vam'],
    answer: 'vama',
    tip: 'vi → vama after s.',
  },
  {
    mode: 'oblik',
    q: 'Moji roditelji idu na more, a ja idem s ____. (oni)',
    en: 'My parents are going to the seaside, and I am going with them.',
    opts: ['njih', 'oni', 'njima', 'ih'],
    answer: 'njima',
    tip: 'oni → njima after s.',
  },
  {
    mode: 'oblik',
    q: 'S ____ ideš na more? (tko)',
    en: 'Who are you going to the seaside with?',
    opts: ['tko', 'kim', 'koga', 'kome'],
    answer: 'kim',
    tip: 'The instrumental of tko is kim (or kime).',
  },
  {
    mode: 'oblik',
    q: 'Djeca se igraju s ____. (ona)',
    en: 'The children are playing with her.',
    opts: ['njom', 'nje', 'ona', 'njoj'],
    answer: 'njom',
    tip: 'ona → njom after s.',
  },
  {
    mode: 'oblik',
    q: 'Idemo zajedno! Ideš s ____. (mi)',
    en: 'Let us go together! You are coming with us.',
    opts: ['nas', 'nama', 'nam', 'mi'],
    answer: 'nama',
    tip: 'mi → nama after s.',
  },
  {
    mode: 'oblik',
    q: 'Igram tenis s ____. (on)',
    en: 'I play tennis with him.',
    opts: ['ga', 'njega', 'on', 'njim'],
    answer: 'njim',
    tip: 'Instrumental pronouns have no short forms like ga.',
  },
  {
    mode: 'oblik',
    q: 'Zašto tako razgovaraš sa ____? (ja)',
    en: 'Why are you talking to me like that?',
    opts: ['mnom', 'mene', 'meni', 'ja'],
    answer: 'mnom',
    tip: 'sa + mnom.',
  },
  {
    mode: 'oblik',
    q: 'Koji je oblik točan?',
    en: 'Which form is correct (with me)?',
    opts: ['sa mnom', 'sa meni', 'sa ja', 'sa mojom'],
    answer: 'sa mnom',
    tip: 'Always sa before mnom.',
  },
  // ── mjesto ────────────────────────────────────────────────────────────────
  {
    mode: 'mjesto',
    q: 'Pas uvijek ide za ____. (on)',
    en: 'The dog always walks behind him.',
    opts: ['njim', 'njemu', 'on', 'njega'],
    answer: 'njim',
    tip: 'za meaning "behind" takes the instrumental.',
  },
  {
    mode: 'mjesto',
    q: '____ mnom je cijeli slobodan dan. (in front of)',
    en: 'A whole free day is ahead of me.',
    opts: ['Preda', 'Nad', 'Sa', 'Za'],
    answer: 'Preda',
    tip: 'pred adds an a before mnom: preda mnom.',
  },
  {
    mode: 'mjesto',
    q: 'Avion leti nad ____. (mi)',
    en: 'A plane is flying over us.',
    opts: ['nas', 'nama', 'nam', 'mi'],
    answer: 'nama',
    tip: 'nad takes the instrumental, the same forms as s.',
  },
  {
    mode: 'mjesto',
    q: 'Sjedimo za stolom, a Ivan sjedi pred ____. (ti)',
    en: 'We are at the table, and Ivan is sitting in front of you.',
    opts: ['tebe', 'tobom', 'tebi', 'ti'],
    answer: 'tobom',
    tip: 'pred + instrumental: tobom.',
  },
  {
    mode: 'mjesto',
    q: 'Što znači "s nama"?',
    opts: ['with us', 'with you', 'with them', 'with me'],
    answer: 'with us',
    tip: 'nama is the instrumental of mi.',
  },
  {
    mode: 'mjesto',
    q: 'Što znači "s njima"?',
    opts: ['with them', 'with him', 'with her', 'with you'],
    answer: 'with them',
    tip: 'njima is the instrumental of oni.',
  },
  {
    mode: 'mjesto',
    q: 'Što znači "s vama"?',
    opts: ['with you (plural or polite)', 'with us', 'with them', 'with her'],
    answer: 'with you (plural or polite)',
    tip: 'vama is the instrumental of vi.',
  },
  {
    mode: 'mjesto',
    q: 'Što znači "za mnom"?',
    opts: ['behind me', 'for me', 'without me', 'in front of me'],
    answer: 'behind me',
    tip: 'za + instrumental is a place: behind.',
  },
  {
    mode: 'mjesto',
    q: 'Koja su dva oblika ista riječ?',
    en: 'Which two forms are the same word?',
    opts: ['njim i njime', 'njim i njima', 'nama i vama', 'tobom i nama'],
    answer: 'njim i njime',
    tip: 'njime is the longer form of njim; both are correct.',
  },
  {
    mode: 'mjesto',
    q: 'Što nije u redu: "Ana razgovara s on."?',
    en: 'What is wrong with this sentence?',
    opts: ['on should be njim', 's should be sa', 'razgovara should be razgovaram', 'Nothing'],
    answer: 'on should be njim',
    tip: 'After a preposition, the pronoun changes: s njim.',
  },
  {
    mode: 'mjesto',
    q: 'Što nije u redu: "Idem na more s njih."?',
    en: 'What is wrong with this sentence?',
    opts: ['njih should be njima', 's should be sa', 'more should be moru', 'Nothing'],
    answer: 'njih should be njima',
    tip: 'njih is the accusative; with s meaning "with", njima.',
  },
];
