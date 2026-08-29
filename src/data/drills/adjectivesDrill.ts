// src/data/drills/adjectivesDrill.ts
//
// A1 ADJECTIVE AGREEMENT — the drill for the `adjectives-basic` lesson.
//
// The A1 `gender` lesson ends by promising that adjectives will change to match;
// `adjectives-basic` is where that promise is kept, and until now nothing asked
// the learner to do it. (This is also one of the two lessons CLAUDE.md recorded
// as deliberately unmapped because "no drill teaches exactly those" — a
// conservative call that was right while no drill existed, and that authoring
// one is what changes.)
//
// Three modes:
//   rod      — agreement in gender, singular
//   mnozina  — agreement in the plural
//   odredjen — the definite/indefinite pair (dobar čovjek vs dobri čovjek),
//              which English has no equivalent for and learners never guess

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ADJECTIVES_MODE_LABELS: Record<string, string> = {
  rod: '⚥ Slaganje u rodu',
  mnozina: '👥 Množina',
  odredjen: '🎯 Određeni i neodređeni',
};

export const ADJECTIVES_DRILL_DATA: ModeDrillItem[] = [
  // ── rod ───────────────────────────────────────────────────────────────────
  {
    mode: 'rod',
    q: '____ grad (velik)',
    en: 'a big city',
    opts: ['velik', 'velika', 'veliko', 'veliki'],
    answer: 'velik',
    tip: 'Grad is masculine, so the bare (indefinite) masculine form: velik grad.',
  },
  {
    mode: 'rod',
    q: '____ kuća (velik)',
    en: 'a big house',
    opts: ['velika', 'velik', 'veliko', 'veliki'],
    answer: 'velika',
    tip: 'Kuća is feminine → velika.',
  },
  {
    mode: 'rod',
    q: '____ selo (velik)',
    en: 'a big village',
    opts: ['veliko', 'velika', 'velik', 'veliki'],
    answer: 'veliko',
    tip: 'Selo is neuter → veliko.',
  },
  {
    mode: 'rod',
    q: '____ knjiga (dobar)',
    en: 'a good book',
    opts: ['dobra', 'dobar', 'dobro', 'dobri'],
    answer: 'dobra',
    tip: 'Dobar → dobra before a feminine noun. Note the a drops out.',
  },
  {
    mode: 'rod',
    q: '____ vino (crn)',
    en: 'black wine (i.e. red wine)',
    opts: ['crno', 'crna', 'crn', 'crni'],
    answer: 'crno',
    tip: 'Vino is neuter → crno. Croatian calls red wine crno vino.',
  },
  {
    mode: 'rod',
    q: '____ more (plav)',
    en: 'blue sea',
    opts: ['plavo', 'plava', 'plav', 'plavi'],
    answer: 'plavo',
    tip: 'More is neuter despite the -e ending → plavo.',
  },
  {
    mode: 'rod',
    q: '____ noć (dug)',
    en: 'a long night',
    opts: ['duga', 'dug', 'dugo', 'dugi'],
    answer: 'duga',
    tip: 'Noć ends in a consonant but is FEMININE → duga noć.',
  },
  {
    mode: 'rod',
    q: '____ pas (mal)',
    en: 'a small dog',
    opts: ['mali', 'mala', 'malo', 'mal'],
    answer: 'mali',
    tip: 'Mali is one of the few adjectives with no short form in use — mali pas.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: '____ gradovi (velik)',
    en: 'big cities',
    opts: ['veliki', 'velike', 'velika', 'velik'],
    answer: 'veliki',
    tip: 'Masculine plural takes -i: veliki gradovi.',
  },
  {
    mode: 'mnozina',
    q: '____ kuće (velik)',
    en: 'big houses',
    opts: ['velike', 'veliki', 'velika', 'veliko'],
    answer: 'velike',
    tip: 'Feminine plural takes -e: velike kuće.',
  },
  {
    mode: 'mnozina',
    q: '____ sela (velik)',
    en: 'big villages',
    opts: ['velika', 'veliki', 'velike', 'veliko'],
    answer: 'velika',
    tip: 'Neuter plural takes -a: velika sela.',
  },
  {
    mode: 'mnozina',
    q: '____ studenti (dobar)',
    en: 'good students',
    opts: ['dobri', 'dobre', 'dobra', 'dobar'],
    answer: 'dobri',
    tip: 'Masculine plural: dobri studenti.',
  },
  {
    mode: 'mnozina',
    q: '____ djevojke (mlad)',
    en: 'young women',
    opts: ['mlade', 'mladi', 'mlada', 'mlado'],
    answer: 'mlade',
    tip: 'Feminine plural: mlade djevojke.',
  },
  {
    mode: 'mnozina',
    q: '____ pitanja (težak)',
    en: 'difficult questions',
    opts: ['teška', 'teški', 'teške', 'težak'],
    answer: 'teška',
    tip: 'Pitanja is neuter plural → teška pitanja.',
  },
  {
    mode: 'mnozina',
    q: '____ ljudi (star)',
    en: 'old people',
    opts: ['stari', 'stare', 'stara', 'star'],
    answer: 'stari',
    tip: 'Ljudi takes masculine plural agreement: stari ljudi.',
  },
  {
    mode: 'mnozina',
    q: '____ djeca (mal)',
    en: 'small children',
    opts: ['mala', 'mali', 'male', 'malo'],
    answer: 'mala',
    tip: 'Djeca is a collective taking neuter plural agreement: mala djeca.',
  },

  // ── odredjen: the definite/indefinite pair ────────────────────────────────
  {
    mode: 'odredjen',
    q: 'To je ____ čovjek. (a good man — first mention)',
    en: 'That is a good man.',
    opts: ['dobar', 'dobri', 'dobra', 'dobro'],
    answer: 'dobar',
    tip: 'Indefinite (short) form for a first mention: dobar čovjek.',
  },
  {
    mode: 'odredjen',
    q: '____ čovjek o kojem smo govorili.',
    en: 'The good man we were talking about.',
    opts: ['Dobri', 'Dobar', 'Dobra', 'Dobro'],
    answer: 'Dobri',
    tip: 'Definite (long) form when the noun is already known: dobri čovjek.',
  },
  {
    mode: 'odredjen',
    q: 'Koji oblik ide uz "novi"?',
    en: 'Which reading does "novi" carry?',
    opts: ['određeni — taj poznati', 'neodređeni — bilo koji', 'množina', 'ženski rod'],
    answer: 'određeni — taj poznati',
    tip: 'Novi is the long form: the new one we both mean. Nov is any new one.',
  },
  {
    mode: 'odredjen',
    q: 'Imam ____ auto. (I bought some car)',
    en: 'I have a new car.',
    opts: ['nov', 'novi', 'nova', 'novo'],
    answer: 'nov',
    tip: 'First mention, indefinite: nov auto.',
  },
  {
    mode: 'odredjen',
    q: 'Gdje je ____ auto? (the one you know about)',
    en: 'Where is the new car?',
    opts: ['novi', 'nov', 'nova', 'novo'],
    answer: 'novi',
    tip: 'Known referent, definite: novi auto.',
  },
  {
    mode: 'odredjen',
    q: 'Nakon "ovaj" ide:',
    en: 'After "ovaj" the adjective is:',
    opts: ['određeni oblik', 'neodređeni oblik', 'množina', 'genitiv'],
    answer: 'određeni oblik',
    tip: 'A demonstrative already makes the noun definite: ovaj novi auto.',
  },
  {
    mode: 'odredjen',
    q: 'Koja je razlika: "velik grad" i "veliki grad"?',
    en: 'What is the difference?',
    opts: [
      'a big city / the big city',
      'ništa, isto je',
      'jednina / množina',
      'muški / ženski rod',
    ],
    answer: 'a big city / the big city',
    tip: 'Croatian has no articles; this pair is how it marks the difference.',
  },
  {
    mode: 'odredjen',
    q: 'U rječniku pridjev stoji u obliku:',
    en: 'A dictionary lists an adjective as:',
    opts: ['neodređenom (dobar)', 'određenom (dobri)', 'množini', 'ženskom rodu'],
    answer: 'neodređenom (dobar)',
    tip: 'Dictionaries give the short form, so that is the one to learn first.',
  },
];
