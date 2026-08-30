// src/data/drills/familyDrill.ts
//
// A1 FAMILY & PEOPLE — the drill for the `family-people` lesson.
//
// This is the first of the TOPICAL block, and the block was left uncoupled for
// a good reason: the only partner on offer was a topic-blind vocabulary game,
// and pairing a lesson about family words with a round of random nouns claims a
// connection the app cannot deliver. What makes these drills possible is that
// the lessons are not topic-blind either. Each one is a topic PLUS a structure,
// and the structure is what a drill can actually test.
//
// Here the structure is irregular plurals with plural agreement — *braća*,
// *djeca* and *ljudi* look singular and take a plural verb — plus possessive
// agreement, which follows the RELATIVE and not the speaker. A learner who says
// *moja brat* has not forgotten a word.
//
// Three modes:
//   rijeci   — the vocabulary, including the uncle distinction English lacks
//   mnozina  — braća / djeca / ljudi and the verbs they take
//   posvojno — moj brat, moja sestra: agreement with the relative

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const FAMILY_MODE_LABELS: Record<string, string> = {
  rijeci: '👨‍👩‍👧 Rodbina',
  mnozina: '👥 Nepravilna množina',
  posvojno: '🔗 Posvojno slaganje',
};

export const FAMILY_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: 'Očev brat je moj ____.',
    en: 'My father’s brother is my…',
    opts: ['stric', 'ujak', 'tetak', 'djed'],
    answer: 'stric',
    tip: 'Stric is the FATHER’s brother; ujak is the mother’s. English has one word for both.',
  },
  {
    mode: 'rijeci',
    q: 'Majčin brat je moj ____.',
    en: 'My mother’s brother is my…',
    opts: ['ujak', 'stric', 'tetak', 'unuk'],
    answer: 'ujak',
    tip: 'Ujak — and Croatian expects you to know which side of the family you mean.',
  },
  {
    mode: 'rijeci',
    q: 'Kako odrasli kažu "mother"?',
    en: 'What do adults say?',
    opts: ['mama', 'majkica', 'mamica', 'majčica'],
    answer: 'mama',
    tip: 'Mama and tata are ordinary adult words in Croatian, not childish ones.',
  },
  {
    mode: 'rijeci',
    q: 'Kći je ____.',
    en: 'A daughter is…',
    opts: ['žensko dijete', 'muško dijete', 'sestra', 'unuka'],
    answer: 'žensko dijete',
    tip: 'sin and kći — son and daughter. Kći is i-declension: genitive kćeri.',
  },
  {
    mode: 'rijeci',
    q: 'Kako se u Dalmaciji često kaže "baka"?',
    en: 'What is often said on the coast?',
    opts: ['nona', 'baba', 'majka', 'teta'],
    answer: 'nona',
    tip: 'nona and nono in Dalmatia and Istria — an Italian borrowing that stayed.',
  },
  {
    mode: 'rijeci',
    q: 'Roditelji su ____.',
    en: 'Parents are…',
    opts: ['majka i otac', 'baka i djed', 'braća', 'djeca'],
    answer: 'majka i otac',
    tip: 'Roditelji — from roditi, to give birth.',
  },
  {
    mode: 'rijeci',
    q: 'Dijete moga sina je moj ____.',
    en: 'My son’s child is my…',
    opts: ['unuk', 'nećak', 'sin', 'brat'],
    answer: 'unuk',
    tip: 'unuk / unuka — grandson and granddaughter.',
  },
  {
    mode: 'rijeci',
    q: 'Kojeg je roda "obitelj"?',
    en: 'What gender is obitelj?',
    opts: ['ženskoga', 'muškoga', 'srednjega', 'nema rod'],
    answer: 'ženskoga',
    tip: 'Feminine, and i-declension: consonant-final like stvar and noć.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Množina od "brat" je ____.',
    en: 'The plural of brat is…',
    opts: ['braća', 'brati', 'bratovi', 'bratci'],
    answer: 'braća',
    tip: 'Braća is a collective — irregular, and it takes a PLURAL verb.',
  },
  {
    mode: 'mnozina',
    q: 'Braća ____ došla.',
    en: 'The brothers arrived.',
    opts: ['su', 'je', 'sam', 'smo'],
    answer: 'su',
    tip: 'Braća su došla — plural agreement, however singular the word looks.',
  },
  {
    mode: 'mnozina',
    q: 'Djeca ____ u školi.',
    en: 'The children are at school.',
    opts: ['su', 'je', 'sam', 'si'],
    answer: 'su',
    tip: 'Djeca su — same collective pattern as braća.',
  },
  {
    mode: 'mnozina',
    q: 'Množina od "čovjek" je ____.',
    en: 'The plural of čovjek is…',
    opts: ['ljudi', 'čovjeci', 'čovjekovi', 'čovječad'],
    answer: 'ljudi',
    tip: 'A completely different root — ljudi. There is nothing to derive.',
  },
  {
    mode: 'mnozina',
    q: 'Koje tri imenice imaju nepravilnu množinu?',
    en: 'Which three are irregular?',
    opts: ['braća, djeca, ljudi', 'majka, otac, sin', 'baka, djed, unuk', 'stric, ujak, teta'],
    answer: 'braća, djeca, ljudi',
    tip: 'Those three, and they are the three you will need every day.',
  },
  {
    mode: 'mnozina',
    q: 'Imaš li ____ i sestara?',
    en: 'Do you have brothers and sisters?',
    opts: ['braće', 'braća', 'brata', 'braćom'],
    answer: 'braće',
    tip: 'Genitive after the negated-or-quantified question: imaš li braće i sestara?',
  },
  {
    mode: 'mnozina',
    q: 'Ljudi ____ na trgu.',
    en: 'People are in the square.',
    opts: ['su', 'je', 'sam', 'smo'],
    answer: 'su',
    tip: 'Ljudi su — plural throughout.',
  },
  {
    mode: 'mnozina',
    q: 'Množina od "sestra" je ____.',
    en: 'The plural of sestra is…',
    opts: ['sestre', 'sestra', 'sestri', 'sestara'],
    answer: 'sestre',
    tip: 'Sestra is perfectly regular — sestre. Only the three collectives misbehave.',
  },

  // ── posvojno ──────────────────────────────────────────────────────────────
  {
    mode: 'posvojno',
    q: '____ brat je liječnik.',
    en: 'My brother is a doctor.',
    opts: ['Moj', 'Moja', 'Moje', 'Moji'],
    answer: 'Moj',
    tip: 'Brat is masculine, so moj — whatever the speaker’s own gender.',
  },
  {
    mode: 'posvojno',
    q: '____ sestra živi u Splitu.',
    en: 'My sister lives in Split.',
    opts: ['Moja', 'Moj', 'Moje', 'Moji'],
    answer: 'Moja',
    tip: 'Agreement follows the RELATIVE, not you: moja sestra.',
  },
  {
    mode: 'posvojno',
    q: 'S čime se slaže posvojna zamjenica?',
    en: 'What does the possessive agree with?',
    opts: ['s rodbinom', 's govornikom', 's glagolom', 'ni s čim'],
    answer: 's rodbinom',
    tip: 'With the person owned, not the owner. English does the opposite.',
  },
  {
    mode: 'posvojno',
    q: '____ dijete ima pet godina.',
    en: 'Our child is five.',
    opts: ['Naše', 'Naš', 'Naša', 'Naši'],
    answer: 'Naše',
    tip: 'Dijete is neuter → naše dijete.',
  },
  {
    mode: 'posvojno',
    q: '____ roditelji su iz Zagreba.',
    en: 'My parents are from Zagreb.',
    opts: ['Moji', 'Moj', 'Moja', 'Moje'],
    answer: 'Moji',
    tip: 'Masculine plural: moji roditelji.',
  },
  {
    mode: 'posvojno',
    q: 'Vidim ____ brata.',
    en: 'I see my brother.',
    opts: ['svog', 'svoj', 'moja', 'svoju'],
    answer: 'svog',
    tip: 'The subject owns him, so svoj — and animate accusative equals genitive.',
  },
  {
    mode: 'posvojno',
    q: '____ baka ima osamdeset godina.',
    en: 'His grandmother is eighty.',
    opts: ['Njegova', 'Njegov', 'Njegovo', 'Njegovi'],
    answer: 'Njegova',
    tip: 'Baka is feminine → njegova baka, even though the owner is male.',
  },
  {
    mode: 'posvojno',
    q: 'Zašto je "moja brat" pogrešno?',
    en: 'Why is that wrong?',
    opts: ['brat je muškoga roda', 'moja je zastarjelo', 'treba genitiv', 'nije pogrešno'],
    answer: 'brat je muškoga roda',
    tip: 'The possessive takes its gender from brat, not from the speaker.',
  },
];
