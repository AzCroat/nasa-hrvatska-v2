// src/data/drills/timeClausesDrill.ts
//
// B1 TIME CLAUSES — the drill for the `time-clauses` lesson.
//
// `vremenske` exists but is B2 and tagged `subordination`, a category whose
// route is already spoken for — its easier route is `relpron`, so a B1 learner
// coupled through it would land on relative pronouns after a lesson about
// sequencing events. Its own category and its own B1 drill is the only honest
// wiring.
//
// The rule that earns the drill: **a future time clause takes the PRESENT.**
// *Kad dođem, javit ću ti* — I will tell you when I come, with "come" in the
// present. English uses the present here too, which sounds like good news, but
// English speakers still say *kad ću doći* because the sentence is about the
// future. The second trap is `dok`, which means both "while" and — with ne —
// "until", and the two readings are opposites.
//
// Three modes:
//   veznici — which connector
//   prezent — the present in a future time clause
//   dok     — dok vs dok ne, and aspect doing the sequencing

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const TIME_CLAUSES_MODE_LABELS: Record<string, string> = {
  veznici: '🔗 Veznici',
  prezent: '⏭️ Prezent za budućnost',
  dok: '⏳ Dok i dok ne',
};

export const TIME_CLAUSES_DRILL_DATA: ModeDrillItem[] = [
  // ── veznici ───────────────────────────────────────────────────────────────
  {
    mode: 'veznici',
    q: '____ stignem, javit ću ti.',
    en: 'As soon as I arrive, I will let you know.',
    opts: ['Čim', 'Dok', 'Otkako', 'Nakon'],
    answer: 'Čim',
    tip: 'Čim = as soon as — the immediate one.',
  },
  {
    mode: 'veznici',
    q: 'Nazovi me ____ dođeš.',
    en: 'Call me before you come.',
    opts: ['prije nego što', 'nakon što', 'čim', 'otkako'],
    answer: 'prije nego što',
    tip: 'Prije nego što = before. The whole three-word phrase is the connector.',
  },
  {
    mode: 'veznici',
    q: '____ smo jeli, izašli smo.',
    en: 'After we ate, we went out.',
    opts: ['Nakon što', 'Prije nego što', 'Dok', 'Čim'],
    answer: 'Nakon što',
    tip: 'Nakon što = after.',
  },
  {
    mode: 'veznici',
    q: '____ živim ovdje, sretan sam.',
    en: 'Since I have lived here, I have been happy.',
    opts: ['Otkako', 'Dok', 'Čim', 'Kad'],
    answer: 'Otkako',
    tip: 'Otkako = since (a starting point in time), not "because".',
  },
  {
    mode: 'veznici',
    q: '____ sam došao, spavala je.',
    en: 'When I arrived, she was asleep.',
    opts: ['Kad', 'Čim', 'Otkako', 'Prije nego što'],
    answer: 'Kad',
    tip: 'Kad(a) is the general-purpose "when".',
  },
  {
    mode: 'veznici',
    q: 'Gdje ide zarez?',
    en: 'Where does the comma go?',
    opts: [
      'iza vremenske surečenice na početku',
      'nikad',
      'uvijek prije veznika',
      'na kraju rečenice',
    ],
    answer: 'iza vremenske surečenice na početku',
    tip: 'Kad dođem, javit ću ti. Put it second and the comma usually disappears.',
  },
  {
    mode: 'veznici',
    q: '____ sam čekao, čitao sam.',
    en: 'While I was waiting, I read.',
    opts: ['Dok', 'Čim', 'Nakon što', 'Otkako'],
    answer: 'Dok',
    tip: 'Dok = while, for two things going on at once.',
  },
  {
    mode: 'veznici',
    q: 'Koji veznik znači "as soon as"?',
    en: 'Which one means as soon as?',
    opts: ['čim', 'dok', 'kad', 'otkako'],
    answer: 'čim',
    tip: 'Čim. Kad would be the neutral "when".',
  },

  // ── prezent ───────────────────────────────────────────────────────────────
  {
    mode: 'prezent',
    q: 'Kad ____, javit ću ti.',
    en: 'When I come, I will let you know.',
    opts: ['dođem', 'ću doći', 'dolazim', 'bih došao'],
    answer: 'dođem',
    tip: 'A future time clause takes the PRESENT, even though the meaning is future.',
  },
  {
    mode: 'prezent',
    q: 'Čim ____, nazvat ću te.',
    en: 'As soon as I arrive, I will call you.',
    opts: ['stignem', 'ću stići', 'stižem', 'bih stigao'],
    answer: 'stignem',
    tip: 'Same rule after čim.',
  },
  {
    mode: 'prezent',
    q: 'Koje vrijeme ide u buduću vremensku surečenicu?',
    en: 'Which tense goes in a future time clause?',
    opts: ['prezent', 'futur', 'perfekt', 'kondicional'],
    answer: 'prezent',
    tip: 'Present in the clause, future in the main sentence.',
  },
  {
    mode: 'prezent',
    q: 'Nakon što ____, idemo van.',
    en: 'After we eat, we are going out.',
    opts: ['jedemo', 'ćemo jesti', 'smo jeli', 'bismo jeli'],
    answer: 'jedemo',
    tip: 'Still the present: nakon što jedemo.',
  },
  {
    mode: 'prezent',
    q: 'Prije nego što ____, provjeri kartu.',
    en: 'Before you leave, check your ticket.',
    opts: ['odeš', 'ćeš otići', 'odlaziš', 'bi otišao'],
    answer: 'odeš',
    tip: 'Present after prije nego što as well.',
  },
  {
    mode: 'prezent',
    q: 'Koje vrijeme ide u glavnu rečenicu?',
    en: 'And which tense in the main clause?',
    opts: ['futur', 'prezent', 'perfekt', 'imperativ'],
    answer: 'futur',
    tip: 'Kad dođem (present), javit ću ti (future). The two halves differ on purpose.',
  },
  {
    mode: 'prezent',
    q: 'Kad ____ ispit, slavit ćemo.',
    en: 'When you pass the exam, we will celebrate.',
    opts: ['položiš', 'ćeš položiti', 'polažeš', 'bi položio'],
    answer: 'položiš',
    tip: 'Perfective present: položiš.',
  },
  {
    mode: 'prezent',
    q: 'Koja je uobičajena pogreška?',
    en: 'What is the common mistake?',
    opts: [
      'futur u vremenskoj surečenici',
      'prezent u glavnoj rečenici',
      'izostavljanje veznika',
      'krivi zarez',
    ],
    answer: 'futur u vremenskoj surečenici',
    tip: 'Kad ću doći — the meaning is future, so learners reach for the future tense.',
  },

  // ── dok ───────────────────────────────────────────────────────────────────
  {
    mode: 'dok',
    q: 'Čekaj ____ ne dođem.',
    en: 'Wait until I come.',
    opts: ['dok', 'čim', 'kad', 'otkako'],
    answer: 'dok',
    tip: 'dok + ne = UNTIL. The ne is not a negation here — do not translate it.',
  },
  {
    mode: 'dok',
    q: 'Što znači "dok ne dođem"?',
    en: 'What does it mean?',
    opts: ['dok ne stignem', 'dok me nema', 'jer ne dolazim', 'ako ne dođem'],
    answer: 'dok ne stignem',
    tip: 'Until I arrive. Without ne it would mean "while I am coming".',
  },
  {
    mode: 'dok',
    q: 'Dok ____ kavu, razgovarali smo.',
    en: 'While we were drinking coffee, we talked.',
    opts: ['smo pili', 'smo popili', 'pijemo', 'ćemo piti'],
    answer: 'smo pili',
    tip: 'Dok = while takes the IMPERFECTIVE — the ongoing background.',
  },
  {
    mode: 'dok',
    q: 'Koji vid nosi pozadinu radnje?',
    en: 'Which aspect carries the background?',
    opts: ['nesvršeni', 'svršeni', 'oba', 'nijedan'],
    answer: 'nesvršeni',
    tip: 'Imperfective for the background, perfective for the event that interrupts it.',
  },
  {
    mode: 'dok',
    q: 'Dok sam čitao, ____ je telefon.',
    en: 'While I was reading, the phone rang.',
    opts: ['zazvonio', 'zvonio', 'zvoni', 'zvonit će'],
    answer: 'zazvonio',
    tip: 'The interrupting event is PERFECTIVE: zazvonio.',
  },
  {
    mode: 'dok',
    q: 'Koliko značenja ima "dok"?',
    en: 'How many meanings does dok have?',
    opts: ['dva', 'jedno', 'tri', 'nijedno'],
    answer: 'dva',
    tip: 'While, and — with ne — until. They are close to opposites.',
  },
  {
    mode: 'dok',
    q: 'Ostani ____ ne prestane kiša.',
    en: 'Stay until the rain stops.',
    opts: ['dok', 'čim', 'otkako', 'nakon što'],
    answer: 'dok',
    tip: 'dok ne prestane — until it stops.',
  },
  {
    mode: 'dok',
    q: 'Je li "ne" u "dok ne dođem" niječnica?',
    en: 'Is the ne a real negation?',
    opts: ['ne, dio je veznika', 'da', 'samo u prošlosti', 'samo u pitanjima'],
    answer: 'ne, dio je veznika',
    tip: 'It belongs to the connector. Translating it as "not" produces nonsense.',
  },
];
