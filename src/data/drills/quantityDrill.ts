// src/data/drills/quantityDrill.ts
//
// A2 QUANTITY — the drill for the `quantity` lesson.
//
// A `kolicina` drill exists but is B2, so the A2 lesson could not reach it. That
// matters more here than usual: quantity-subject agreement is named in the C2
// curriculum as the commonest advanced error in the language, and the reason it
// survives to C2 is that nobody drills it at A2, where it is one rule with no
// exceptions — every quantity word takes the genitive, and the verb stays
// singular however many people are involved.
//
// Three modes:
//   padez    — quantity + genitive
//   brojivo  — countable takes the genitive plural, uncountable the singular
//   slaganje — the verb stays singular, and the 1 / 2–4 / 5+ split

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const QUANTITY_MODE_LABELS: Record<string, string> = {
  padez: '📦 Količina + genitiv',
  brojivo: '🔢 Brojivo ili nebrojivo',
  slaganje: '🤝 Slaganje s glagolom',
};

export const QUANTITY_DRILL_DATA: ModeDrillItem[] = [
  // ── padez ─────────────────────────────────────────────────────────────────
  {
    mode: 'padez',
    q: 'Imam puno ____. (posao)',
    en: 'I have a lot of work.',
    opts: ['posla', 'posao', 'poslu', 'poslom'],
    answer: 'posla',
    tip: 'Puno takes the genitive: puno posla.',
  },
  {
    mode: 'padez',
    q: 'Malo ____. (voda)',
    en: 'a little water',
    opts: ['vode', 'voda', 'vodu', 'vodom'],
    answer: 'vode',
    tip: 'Malo + genitive: malo vode.',
  },
  {
    mode: 'padez',
    q: 'Nekoliko ____. (knjiga)',
    en: 'a few books',
    opts: ['knjiga', 'knjige', 'knjigu', 'knjigama'],
    answer: 'knjiga',
    tip: 'Nekoliko + genitive plural: nekoliko knjiga.',
  },
  {
    mode: 'padez',
    q: 'Previše ____. (turisti)',
    en: 'too many tourists',
    opts: ['turista', 'turisti', 'turiste', 'turistima'],
    answer: 'turista',
    tip: 'Previše + genitive plural: previše turista.',
  },
  {
    mode: 'padez',
    q: 'Koliko ____ imaš? (novac)',
    en: 'How much money do you have?',
    opts: ['novca', 'novac', 'novcu', 'novcem'],
    answer: 'novca',
    tip: 'Koliko is a quantity word too: koliko novca.',
  },
  {
    mode: 'padez',
    q: 'Koji padež traže sve riječi za količinu?',
    en: 'Which case do all quantity words take?',
    opts: ['genitiv', 'akuzativ', 'lokativ', 'nominativ'],
    answer: 'genitiv',
    tip: 'Every one of them, with no exceptions. One rule, whole topic.',
  },
  {
    mode: 'padez',
    q: 'Dosta ____. (gosti)',
    en: 'plenty of guests',
    opts: ['gostiju', 'gosti', 'goste', 'gostima'],
    answer: 'gostiju',
    tip: 'Gost has an irregular genitive plural: gostiju.',
  },
  {
    mode: 'padez',
    q: 'Kilogram ____. (jabuke)',
    en: 'a kilo of apples',
    opts: ['jabuka', 'jabuke', 'jabukama', 'jabuku'],
    answer: 'jabuka',
    tip: 'Measures behave exactly like quantity words: kilogram jabuka, litra mlijeka.',
  },

  // ── brojivo ───────────────────────────────────────────────────────────────
  {
    mode: 'brojivo',
    q: 'Puno ____. (ljudi)',
    en: 'a lot of people',
    opts: ['ljudi', 'ljude', 'ljudima', 'čovjeka'],
    answer: 'ljudi',
    tip: 'Countable → genitive PLURAL. Ljudi is already that form.',
  },
  {
    mode: 'brojivo',
    q: 'Puno ____. (vrijeme)',
    en: 'a lot of time',
    opts: ['vremena', 'vrijeme', 'vremenu', 'vremenom'],
    answer: 'vremena',
    tip: 'Uncountable → genitive SINGULAR: puno vremena.',
  },
  {
    mode: 'brojivo',
    q: 'Malo ____. (prijatelji)',
    en: 'few friends',
    opts: ['prijatelja', 'prijatelje', 'prijatelji', 'prijateljima'],
    answer: 'prijatelja',
    tip: 'Countable → genitive plural: malo prijatelja.',
  },
  {
    mode: 'brojivo',
    q: 'Dosta ____. (kruh)',
    en: 'enough bread',
    opts: ['kruha', 'kruhovi', 'kruhove', 'kruhom'],
    answer: 'kruha',
    tip: 'Uncountable → genitive singular: dosta kruha.',
  },
  {
    mode: 'brojivo',
    q: 'Što odlučuje jedninu ili množinu?',
    en: 'What decides singular or plural?',
    opts: [
      'je li imenica brojiva',
      'rod imenice',
      'koja je riječ za količinu',
      'mjesto u rečenici',
    ],
    answer: 'je li imenica brojiva',
    tip: 'Countable things you could number; uncountable things you could only measure.',
  },
  {
    mode: 'brojivo',
    q: 'Previše ____. (sol)',
    en: 'too much salt',
    opts: ['soli', 'sol', 'solju', 'solima'],
    answer: 'soli',
    tip: 'Uncountable → genitive singular: previše soli.',
  },
  {
    mode: 'brojivo',
    q: 'Nekoliko ____. (put)',
    en: 'a few times',
    opts: ['puta', 'putovi', 'putove', 'putu'],
    answer: 'puta',
    tip: 'Nekoliko puta — the fixed way to say "a few times".',
  },
  {
    mode: 'brojivo',
    q: 'Više ____ nego prošle godine. (snijeg)',
    en: 'more snow than last year',
    opts: ['snijega', 'snijeg', 'snijegu', 'snjegovi'],
    answer: 'snijega',
    tip: 'Više is a quantity word as well: više snijega.',
  },

  // ── slaganje ──────────────────────────────────────────────────────────────
  {
    mode: 'slaganje',
    q: 'Puno ljudi ____. (dolaziti)',
    en: 'A lot of people are coming.',
    opts: ['dolazi', 'dolaze', 'dolazimo', 'dolaziti'],
    answer: 'dolazi',
    tip: 'The verb stays SINGULAR after a quantity word, however many people there are.',
  },
  {
    mode: 'slaganje',
    q: 'Nekoliko studenata ____ na ispit. (doći)',
    en: 'A few students came to the exam.',
    opts: ['je došlo', 'su došli', 'smo došli', 'dođu'],
    answer: 'je došlo',
    tip: 'Singular, and NEUTER in the past: nekoliko studenata je došlo.',
  },
  {
    mode: 'slaganje',
    q: 'Jedan ____. (student)',
    en: 'one student',
    opts: ['student', 'studenta', 'studenti', 'studenata'],
    answer: 'student',
    tip: 'One takes the plain nominative singular.',
  },
  {
    mode: 'slaganje',
    q: 'Tri ____. (student)',
    en: 'three students',
    opts: ['studenta', 'studenti', 'studenata', 'studente'],
    answer: 'studenta',
    tip: 'Two, three and four take the special counted form: dva/tri/četiri studenta.',
  },
  {
    mode: 'slaganje',
    q: 'Sedam ____. (student)',
    en: 'seven students',
    opts: ['studenata', 'studenta', 'studenti', 'studente'],
    answer: 'studenata',
    tip: 'Five and up switch to the genitive plural: sedam studenata.',
  },
  {
    mode: 'slaganje',
    q: 'Koji je glagolski broj uz "mnogo"?',
    en: 'Which verb number after mnogo?',
    opts: ['jednina', 'množina', 'oba su točna', 'ovisi o rodu'],
    answer: 'jednina',
    tip: 'Mnogo turista dolazi — never dolaze. This is the error that survives to C1.',
  },
  {
    mode: 'slaganje',
    q: 'Dvadeset i jedan ____. (student)',
    en: 'twenty-one students',
    opts: ['student', 'studenta', 'studenata', 'studenti'],
    answer: 'student',
    tip: 'Any number ending in one behaves like one: dvadeset i jedan student.',
  },
  {
    mode: 'slaganje',
    q: 'Dvadeset i dva ____. (student)',
    en: 'twenty-two students',
    opts: ['studenta', 'student', 'studenata', 'studente'],
    answer: 'studenta',
    tip: 'And any number ending in two, three or four behaves like those: dvadeset i dva studenta.',
  },
];
