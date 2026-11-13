// src/data/drills/a1/possessiveAdjectivesDrill.ts
//
// A1 POSSESSIVE ADJECTIVES — the drill for the `possessive-adjectives` lesson (A1
// position 24).
//
// Three modes, eight items each:
//   in        — owners in -a take -in: Ana → Anin, Luka → Lukin, majka → majčin
//   ov        — owners in a consonant take -ov, soft ones -ev: Ivanov, prijateljev, očev
//   slaganje  — the ending follows the THING owned: Anin brat, Anina sestra, Anino pismo
//
// Nominative only. Distractors are the wrong suffix (-ov for -in, -ov after a soft
// consonant) or the right suffix with the wrong agreement — the owner's gender instead
// of the thing's, which is the mistake English speakers make.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const POSSESSIVE_ADJECTIVES_MODE_LABELS: Record<string, string> = {
  in: '👩 -in',
  ov: '👨 -ov / -ev',
  slaganje: '🔗 Slaganje',
};

export const POSSESSIVE_ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── in ────────────────────────────────────────────────────────────────────
  {
    mode: 'in',
    q: 'Ovo je ____ brat.',
    en: "This is Ana's brother.",
    opts: ['Anin', 'Anina', 'Anino', 'Anov'],
    answer: 'Anin',
    tip: 'Ana ends in -a → -in; brat is masculine, so nothing is added.',
  },
  {
    mode: 'in',
    q: 'Ovo je ____ pas.',
    en: "This is Luka's dog.",
    opts: ['Lukov', 'Lukin', 'Lučin', 'Lukev'],
    answer: 'Lukin',
    tip: 'Luka ends in -a, so it takes -in even though Luka is a man.',
  },
  {
    mode: 'in',
    q: 'Ovo je ____ stan.',
    en: "This is the sister's flat.",
    opts: ['sestrov', 'sestrina', 'sestrin', 'sestrino'],
    answer: 'sestrin',
    tip: 'sestra → sestrin; stan is masculine.',
  },
  {
    mode: 'in',
    q: 'Ovo je ____ kuća.',
    en: "This is mother's house.",
    opts: ['majčin', 'majčina', 'majkova', 'majčino'],
    answer: 'majčina',
    tip: 'majka → majčin (k → č), and kuća is feminine.',
  },
  {
    mode: 'in',
    q: 'Ovo je ____ auto.',
    en: "This is Dad's car.",
    opts: ['tatov', 'tatina', 'tatin', 'tatino'],
    answer: 'tatin',
    tip: 'tata ends in -a → -in; auto is masculine.',
  },
  {
    mode: 'in',
    q: 'Ovo je ____ vrt.',
    en: "This is Grandmother's garden.",
    opts: ['bakin', 'bakov', 'bakina', 'bačin'],
    answer: 'bakin',
    tip: 'baka → bakin. Unlike majka, the k does not change.',
  },
  {
    mode: 'in',
    q: 'Ovo je ____ knjiga.',
    en: "This is Marija's book.",
    opts: ['Marijov', 'Marijin', 'Marijina', 'Marijino'],
    answer: 'Marijina',
    tip: 'Marija → Marijin, and knjiga is feminine.',
  },
  {
    mode: 'in',
    q: 'Which form is spelled correctly?',
    en: "Ana's brother.",
    opts: ['anin brat', 'Anin brat', 'Anin Brat', 'ANIN brat'],
    answer: 'Anin brat',
    tip: 'From a name, so it keeps the capital; the noun after it does not.',
  },

  // ── ov ────────────────────────────────────────────────────────────────────
  {
    mode: 'ov',
    q: 'Ovo je ____ auto.',
    en: "This is Ivan's car.",
    opts: ['Ivanin', 'Ivanova', 'Ivanov', 'Ivanovo'],
    answer: 'Ivanov',
    tip: 'Ivan ends in a consonant → -ov; auto is masculine.',
  },
  {
    mode: 'ov',
    q: 'Ovo je ____ mačka.',
    en: "This is Marko's cat.",
    opts: ['Markov', 'Markina', 'Markova', 'Markove'],
    answer: 'Markova',
    tip: 'Marko drops its -o → Markov; mačka is feminine.',
  },
  {
    mode: 'ov',
    q: 'Ovo je ____ pas.',
    en: "This is the friend's dog.",
    opts: ['prijateljov', 'prijateljev', 'prijateljin', 'prijateljeva'],
    answer: 'prijateljev',
    tip: 'lj is soft → -ev; pas is masculine.',
  },
  {
    mode: 'ov',
    q: 'Ovo je ____ kuća.',
    en: "This is Matej's house.",
    opts: ['Matejova', 'Matejina', 'Matejev', 'Matejeva'],
    answer: 'Matejeva',
    tip: 'j is soft → -ev; kuća is feminine.',
  },
  {
    mode: 'ov',
    q: 'Ovo je ____ brat.',
    en: "This is Father's brother.",
    opts: ['otčev', 'otacov', 'očev', 'očeva'],
    answer: 'očev',
    tip: 'otac → očev: the a and t drop, c becomes č before -ev.',
  },
  {
    mode: 'ov',
    q: 'To su ____ knjige.',
    en: "Those are Petar's books.",
    opts: ['Petarove', 'Petrove', 'Petrova', 'Petrovi'],
    answer: 'Petrove',
    tip: 'Petar loses its fleeting a → Petrov; knjige is feminine plural.',
  },
  {
    mode: 'ov',
    q: 'Ovo je ____ kuća.',
    en: "This is Grandfather's house.",
    opts: ['djedin', 'djedova', 'djedov', 'djedeva'],
    answer: 'djedova',
    tip: 'djed → djedov; kuća is feminine.',
  },
  {
    mode: 'ov',
    q: 'Ovo je ____ stan.',
    en: "This is Josip's flat.",
    opts: ['Josipev', 'Josipin', 'Josipova', 'Josipov'],
    answer: 'Josipov',
    tip: 'p is a hard consonant → -ov; stan is masculine.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Ovo je ____ sestra.',
    en: "This is Ana's sister.",
    opts: ['Anin', 'Anina', 'Anino', 'Anine'],
    answer: 'Anina',
    tip: 'sestra is feminine: -a.',
  },
  {
    mode: 'slaganje',
    q: 'Ovo je ____ pismo.',
    en: "This is Ana's letter.",
    opts: ['Anin', 'Anina', 'Anino', 'Anini'],
    answer: 'Anino',
    tip: 'pismo is neuter: -o.',
  },
  {
    mode: 'slaganje',
    q: 'Ovo su ____ prijatelji.',
    en: "These are Ana's friends.",
    opts: ['Anine', 'Anini', 'Anina', 'Anin'],
    answer: 'Anini',
    tip: 'prijatelji is a masculine plural: -i.',
  },
  {
    mode: 'slaganje',
    q: 'Ovo su ____ sestre.',
    en: "These are Marko's sisters.",
    opts: ['Markovi', 'Markova', 'Markove', 'Markov'],
    answer: 'Markove',
    tip: 'sestre is a feminine plural: -e.',
  },
  {
    mode: 'slaganje',
    q: 'Ovo su ____ pisma.',
    en: "These are Marko's letters.",
    opts: ['Markove', 'Markovi', 'Markovo', 'Markova'],
    answer: 'Markova',
    tip: 'pisma is a neuter plural: -a.',
  },
  {
    mode: 'slaganje',
    q: 'Which phrase is correct?',
    en: "Ana's brother.",
    opts: ['Anina brat', 'Anin brat', 'Ana brat', 'Anino brat'],
    answer: 'Anin brat',
    tip: 'The ending follows brat (masculine), not Ana.',
  },
  {
    mode: 'slaganje',
    q: 'Which phrase is correct?',
    en: "Ivan's sister.",
    opts: ['Ivanov sestra', 'Ivan sestra', 'Ivanova sestra', 'Ivanin sestra'],
    answer: 'Ivanova sestra',
    tip: 'The ending follows sestra (feminine), not Ivan.',
  },
  {
    mode: 'slaganje',
    q: 'Which phrase is correct?',
    en: "Mother's letters.",
    opts: ['majčine pisma', 'majčina pisma', 'majčini pisma', 'majka pisma'],
    answer: 'majčina pisma',
    tip: 'pisma is a neuter plural: -a.',
  },
];
