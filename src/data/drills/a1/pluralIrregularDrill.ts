// src/data/drills/a1/pluralIrregularDrill.ts
//
// A1 IRREGULAR PLURALS — the drill for the `plural-irregular` lesson.
//
// Three modes:
//   oblici   — the eight plurals: ljudi, djeca, braća, gospoda, oči, uši, kćeri, imena
//   glagol   — djeca, braća, gospoda end in -a but take the PLURAL verb su
//   pokazni  — the pointing word in front: ovi ljudi, but ova djeca, ove oči
//
// Distractors apply a regular ending to a noun that does not take it ("čovjeci"),
// give a group noun a singular verb, or put the wrong pointing word in front.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PLURAL_IRREGULAR_MODE_LABELS: Record<string, string> = {
  oblici: '👥 Oblici',
  glagol: '🔗 Je ili su',
  pokazni: '👉 Ovi, ova, ove',
};

export const PLURAL_IRREGULAR_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ──────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Množina: čovjek → ____',
    en: 'person → people',
    opts: ['čovjeci', 'čovjeki', 'ljudi', 'čovjekovi'],
    answer: 'ljudi',
    tip: 'A different word for many, like person → people.',
  },
  {
    mode: 'oblici',
    q: 'Množina: dijete → ____',
    en: 'child → children',
    opts: ['dijeti', 'djeca', 'dijeta', 'djetovi'],
    answer: 'djeca',
    tip: 'A different word for many, like child → children.',
  },
  {
    mode: 'oblici',
    q: 'Množina: brat → ____',
    en: 'brother → brothers',
    opts: ['brati', 'bratovi', 'brate', 'braća'],
    answer: 'braća',
    tip: 'A group word ending in -a.',
  },
  {
    mode: 'oblici',
    q: 'Množina: gospodin → ____',
    en: 'gentleman → gentlemen',
    opts: ['gospoda', 'gospodini', 'gospodinovi', 'gospodi'],
    answer: 'gospoda',
    tip: 'A group word ending in -a, like braća.',
  },
  {
    mode: 'oblici',
    q: 'Množina: oko → ____',
    en: 'eye → eyes',
    opts: ['oka', 'oči', 'oki', 'okovi'],
    answer: 'oči',
    tip: 'A feminine plural of its own.',
  },
  {
    mode: 'oblici',
    q: 'Množina: uho → ____',
    en: 'ear → ears',
    opts: ['uha', 'uhi', 'uši', 'uhovi'],
    answer: 'uši',
    tip: 'Like oko → oči.',
  },
  {
    mode: 'oblici',
    q: 'Množina: kći → ____',
    en: 'daughter → daughters',
    opts: ['kćeri', 'kćije', 'kći', 'kćovi'],
    answer: 'kćeri',
    tip: 'Add -eri.',
  },
  {
    mode: 'oblici',
    q: 'Množina: ime → ____',
    en: 'name → names',
    opts: ['imi', 'imenovi', 'ime', 'imena'],
    answer: 'imena',
    tip: '-en- before the neuter plural -a.',
  },
  {
    mode: 'oblici',
    q: 'Množina: rame → ____',
    en: 'shoulder → shoulders',
    opts: ['ramena', 'rami', 'ramovi', 'rama'],
    answer: 'ramena',
    tip: 'Like ime: -en- before the -a.',
  },
  // ── glagol ──────────────────────────────────────────────────────────────
  {
    mode: 'glagol',
    q: 'Djeca ____ ovdje.',
    en: 'The children are here.',
    opts: ['je', 'su', 'smo', 'si'],
    answer: 'su',
    tip: 'The children are many: su.',
  },
  {
    mode: 'glagol',
    q: 'Braća ____ tamo.',
    en: 'The brothers are over there.',
    opts: ['su', 'je', 'ste', 'sam'],
    answer: 'su',
    tip: 'braća ends in -a, but means several people: su.',
  },
  {
    mode: 'glagol',
    q: 'Dijete ____ ovdje.',
    en: 'The child is here.',
    opts: ['su', 'smo', 'je', 'ste'],
    answer: 'je',
    tip: 'One child: je.',
  },
  {
    mode: 'glagol',
    q: 'Ova gospoda ____ iz Zagreba.',
    en: 'These gentlemen are from Zagreb.',
    opts: ['je', 'si', 'sam', 'su'],
    answer: 'su',
    tip: 'gospoda means several men: su.',
  },
  {
    mode: 'glagol',
    q: 'Gdje ____ djeca?',
    en: 'Where are the children?',
    opts: ['je', 'su', 'jesi', 'smo'],
    answer: 'su',
    tip: 'Gdje su djeca?',
  },
  {
    mode: 'glagol',
    q: 'Which sentence is correct?',
    en: 'The children are not here.',
    opts: ['Djeca nije ovdje.', 'Djeca nisu ovdje.', 'Dijete nisu ovdje.', 'Djeca nisam ovdje.'],
    answer: 'Djeca nisu ovdje.',
    tip: 'Many children: nisu.',
  },
  {
    mode: 'glagol',
    q: 'Ljudi ____ ovdje.',
    en: 'The people are here.',
    opts: ['je', 'su', 'si', 'jest'],
    answer: 'su',
    tip: 'ljudi is plural: su.',
  },
  {
    mode: 'glagol',
    q: 'Ivan i Marko ____ braća.',
    en: 'Ivan and Marko are brothers.',
    opts: ['je', 'smo', 'su', 'ste'],
    answer: 'su',
    tip: 'Two people: su.',
  },
  // ── pokazni ─────────────────────────────────────────────────────────────
  {
    mode: 'pokazni',
    q: '____ djeca su ovdje.',
    en: 'These children are here.',
    opts: ['Ovi', 'Ove', 'Ova', 'Ovaj'],
    answer: 'Ova',
    tip: 'djeca looks feminine: ova djeca.',
  },
  {
    mode: 'pokazni',
    q: '____ ljudi su studenti.',
    en: 'These people are students.',
    opts: ['Ova', 'Ovi', 'Ove', 'Ovo'],
    answer: 'Ovi',
    tip: 'ljudi is a masculine plural: ovi ljudi.',
  },
  {
    mode: 'pokazni',
    q: '____ oči su tamo.',
    en: 'Those eyes are over there.',
    opts: ['Ti', 'Ta', 'Taj', 'Te'],
    answer: 'Te',
    tip: 'oči is a feminine plural: te oči.',
  },
  {
    mode: 'pokazni',
    q: '____ braća su iz Splita.',
    en: 'Those brothers are from Split.',
    opts: ['Ta', 'Ti', 'Te', 'Taj'],
    answer: 'Ta',
    tip: 'braća looks feminine: ta braća.',
  },
  {
    mode: 'pokazni',
    q: '____ uši su ovdje.',
    en: 'These ears are here.',
    opts: ['Ovi', 'Ova', 'Ove', 'Ovaj'],
    answer: 'Ove',
    tip: 'uši is a feminine plural: ove uši.',
  },
  {
    mode: 'pokazni',
    q: '____ imena su ovdje.',
    en: 'These names are here.',
    opts: ['Ova', 'Ovi', 'Ove', 'Ovo'],
    answer: 'Ova',
    tip: 'imena is a neuter plural: ova imena.',
  },
  {
    mode: 'pokazni',
    q: '____ gospoda su tamo.',
    en: 'Those gentlemen are over there.',
    opts: ['Oni', 'One', 'Onaj', 'Ona'],
    answer: 'Ona',
    tip: 'gospoda looks feminine: ona gospoda.',
  },
];
