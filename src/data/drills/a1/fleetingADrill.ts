// src/data/drills/a1/fleetingADrill.ts
//
// A1 THE FLEETING A — the drill for the `fleeting-a` lesson (A1 position 21).
//
// Three modes, eight items each:
//   ac      — nouns in -ac lose the a: stranac → stranci
//   susret  — what happens when the consonants meet: vrabac → vrapci, momak → momci,
//             otac → očevi, san → snovi
//   ostaje  — telling a fleeting a from one that stays: korak → koraci, Hrvat → Hrvati
//
// Nominative plural only — the only case form taught at this point. Distractors keep
// the a, skip the consonant change, or add growth the noun does not take.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const FLEETING_A_MODE_LABELS: Record<string, string> = {
  ac: '🐕 Gubi a',
  susret: '🔀 Susret suglasnika',
  ostaje: '✋ A ostaje',
};

export const FLEETING_A_DRILL_DATA: ModeDrillItem[] = [
  // ── ac ────────────────────────────────────────────────────────────────────
  {
    mode: 'ac',
    q: 'Plural of "pas":',
    en: 'Plural of dog.',
    opts: ['pasi', 'psi', 'pasovi', 'pse'],
    answer: 'psi',
    tip: 'The a drops when the ending is added: ps- + -i.',
  },
  {
    mode: 'ac',
    q: 'Plural of "stranac":',
    en: 'Plural of foreigner.',
    opts: ['stranci', 'stranaci', 'strancovi', 'strance'],
    answer: 'stranci',
    tip: 'Nouns in -ac lose the a: stranci.',
  },
  {
    mode: 'ac',
    q: 'Plural of "kupac":',
    en: 'Plural of customer.',
    opts: ['kupaci', 'kupcovi', 'kupci', 'kupce'],
    answer: 'kupci',
    tip: 'The a drops: kupci.',
  },
  {
    mode: 'ac',
    q: 'Plural of "lonac":',
    en: 'Plural of pot.',
    opts: ['lonaci', 'loncovi', 'lonce', 'lonci'],
    answer: 'lonci',
    tip: 'The a drops: lonci.',
  },
  {
    mode: 'ac',
    q: 'Plural of "Nijemac":',
    en: 'Plural of German man.',
    opts: ['Nijemci', 'Nijemaci', 'Nijemcovi', 'Nijemce'],
    answer: 'Nijemci',
    tip: 'The a drops: Nijemci.',
  },
  {
    mode: 'ac',
    q: 'Plural of "lovac":',
    en: 'Plural of hunter.',
    opts: ['lovaci', 'lovci', 'lovcevi', 'lovce'],
    answer: 'lovci',
    tip: 'The a drops: lovci.',
  },
  {
    mode: 'ac',
    q: 'Plural of "Amerikanac":',
    en: 'Plural of American man.',
    opts: ['Amerikanaci', 'Amerikance', 'Amerikanci', 'Amerikancovi'],
    answer: 'Amerikanci',
    tip: 'The a drops: Amerikanci.',
  },
  {
    mode: 'ac',
    q: 'Which sentence is correct?',
    en: 'The dogs are there.',
    opts: ['Pasi su tamo.', 'Psi je tamo.', 'Pasovi su tamo.', 'Psi su tamo.'],
    answer: 'Psi su tamo.',
    tip: 'pas → psi, with the plural verb su.',
  },

  // ── susret ────────────────────────────────────────────────────────────────
  {
    mode: 'susret',
    q: 'Plural of "vrabac":',
    en: 'Plural of sparrow.',
    opts: ['vrabaci', 'vrabci', 'vrapci', 'vrabcovi'],
    answer: 'vrapci',
    tip: 'The a drops, and b becomes p beside c.',
  },
  {
    mode: 'susret',
    q: 'Plural of "momak":',
    en: 'Plural of lad.',
    opts: ['momci', 'momki', 'momaci', 'momakovi'],
    answer: 'momci',
    tip: 'The a drops, then k touches -i and becomes c.',
  },
  {
    mode: 'susret',
    q: 'Plural of "otac":',
    en: 'Plural of father.',
    opts: ['otaci', 'otcovi', 'očevi', 'otcevi'],
    answer: 'očevi',
    tip: 'The a and the t drop; the short stem grows -evi and c becomes č.',
  },
  {
    mode: 'susret',
    q: 'Plural of "san":',
    en: 'Plural of dream.',
    opts: ['sani', 'sanovi', 'sne', 'snovi'],
    answer: 'snovi',
    tip: 'The a drops and the short stem grows -ov-.',
  },
  {
    mode: 'susret',
    q: 'Zašto je "vrapci", a ne "vrabci"?',
    en: 'Why is it written with p?',
    opts: ['b becomes p beside c', 'the plural ending is -pi', 'vrabac is feminine', 'b is silent'],
    answer: 'b becomes p beside c',
    tip: 'Croatian spelling writes the sound you actually say.',
  },
  {
    mode: 'susret',
    q: 'Plural of "starac":',
    en: 'Plural of old man.',
    opts: ['staraci', 'starci', 'starcovi', 'starce'],
    answer: 'starci',
    tip: 'The a drops: starci.',
  },
  {
    mode: 'susret',
    q: 'Which sentence is correct?',
    en: 'The fathers and sons are here.',
    opts: [
      'Otci i sini su ovdje.',
      'Očevi i sinovi su ovdje.',
      'Otaci i sinovi su ovdje.',
      'Očevi i sini su ovdje.',
    ],
    answer: 'Očevi i sinovi su ovdje.',
    tip: 'otac → očevi, sin → sinovi.',
  },
  {
    mode: 'susret',
    q: 'Which sentence is correct?',
    en: 'The lads are there.',
    opts: ['Momki su tamo.', 'Momaci su tamo.', 'Momci su tamo.', 'Momci je tamo.'],
    answer: 'Momci su tamo.',
    tip: 'momak → momci, with su.',
  },

  // ── ostaje ────────────────────────────────────────────────────────────────
  {
    mode: 'ostaje',
    q: 'Plural of "korak":',
    en: 'Plural of step.',
    opts: ['korci', 'koraci', 'koraki', 'korakovi'],
    answer: 'koraci',
    tip: 'korak keeps its a; only the k changes before -i.',
  },
  {
    mode: 'ostaje',
    q: 'Which noun KEEPS its a in the plural?',
    en: 'Which noun keeps its a in the plural?',
    opts: ['pas', 'stranac', 'korak', 'kupac'],
    answer: 'korak',
    tip: 'korak → koraci. The others lose the a.',
  },
  {
    mode: 'ostaje',
    q: 'Plural of "Hrvat":',
    en: 'Plural of Croat.',
    opts: ['Hrvti', 'Hrvati', 'Hrvatovi', 'Hrvate'],
    answer: 'Hrvati',
    tip: 'The a in Hrvat is not fleeting: Hrvati.',
  },
  {
    mode: 'ostaje',
    q: 'Plural of "brat":',
    en: 'Plural of brother.',
    opts: ['brti', 'brati', 'braća', 'bratovi'],
    answer: 'braća',
    tip: 'brat has no fleeting a — and its plural is the irregular braća.',
  },
  {
    mode: 'ostaje',
    q: 'Plural of "grad":',
    en: 'Plural of city.',
    opts: ['grdovi', 'gradovi', 'gradi', 'grdi'],
    answer: 'gradovi',
    tip: 'The a in grad never drops: gradovi.',
  },
  {
    mode: 'ostaje',
    q: 'Which noun LOSES its a in the plural?',
    en: 'Which noun loses its a in the plural?',
    opts: ['grad', 'lonac', 'Hrvat', 'korak'],
    answer: 'lonac',
    tip: 'lonac → lonci. The others keep the a.',
  },
  {
    mode: 'ostaje',
    q: 'Plural of "konobar":',
    en: 'Plural of waiter.',
    opts: ['konobri', 'konobari', 'konobarovi', 'konobare'],
    answer: 'konobari',
    tip: 'The a in konobar stays: konobari.',
  },
  {
    mode: 'ostaje',
    q: 'Plural of "student":',
    en: 'Plural of student.',
    opts: ['studnti', 'studentovi', 'studente', 'studenti'],
    answer: 'studenti',
    tip: 'No fleeting vowel here: studenti.',
  },
];
