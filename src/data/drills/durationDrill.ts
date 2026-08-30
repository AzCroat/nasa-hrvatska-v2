// src/data/drills/durationDrill.ts
//
// B1 TIME AND DURATION — the drill for the `time-duration` lesson.
//
// Distinct from both time drills the app already has: `vrijemea1` is the A1
// calendar (days, months, telling the clock) and is claimed by its own lesson,
// and `vrijemeklauze` is B1 time CLAUSES (kad, dok, čim), also claimed. Neither
// touches this, which is placing an event on a timeline and saying how long
// something lasted.
//
// The case work is mechanical once the pairing is seen:
//
//   PRIJE TAKES THE GENITIVE, ZA TAKES THE ACCUSATIVE. *Prije dva dana* is two
//   days ago; *za dva dana* is in two days' time. One preposition looks
//   backwards and one forwards, and nothing but the case marks it.
//
//   DURATION IS THE BARE ACCUSATIVE, with no preposition at all —
//   *Čekao sam dva sata*. Learners reach for *za* here, from English "for".
//
// And the tense trap, which is the real one for an English speaker:
//
//   SOMETHING STILL GOING ON TAKES THE PRESENT. *Učim hrvatski dvije godine*
//   is "I have been learning Croatian for two years". English uses a perfect;
//   using a past tense in Croatian says you have stopped.
//
// *Već* does double duty — already, and "for … now" with a duration
// (*Već pet godina živim ovdje*), which is how the thought is usually phrased.
//
// Three modes:
//   prijeza  — placing the event, and the two cases
//   trajanje — how long, and the tense it needs
//   jos      — još, već, tek and više ne

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DURATION_MODE_LABELS: Record<string, string> = {
  prijeza: '↔️ Prije i za',
  trajanje: '⏳ Koliko dugo',
  jos: '🔔 Još, već, tek',
};

export const DURATION_DRILL_DATA: ModeDrillItem[] = [
  // ── prijeza ───────────────────────────────────────────────────────────────
  {
    mode: 'prijeza',
    q: 'Stigao sam prije ____. (dva dana)',
    en: 'I arrived two days ago.',
    opts: ['dva dana', 'dva dane', 'dvama danima', 'dva danom'],
    answer: 'dva dana',
    tip: 'prije plus the genitive — and dana is the genitive after dva.',
  },
  {
    mode: 'prijeza',
    q: 'Vraćam se za ____. (tjedan dana)',
    en: 'I am coming back in a week.',
    opts: ['tjedan dana', 'tjedna dana', 'tjednu dana', 'tjednom'],
    answer: 'tjedan dana',
    tip: 'za plus the ACCUSATIVE — looking forward from now.',
  },
  {
    mode: 'prijeza',
    q: 'Što znači "prije"?',
    en: 'prije',
    opts: ['ago, before', 'in, from now', 'during', 'until'],
    answer: 'ago, before',
    tip: 'Backwards from now, and genitive.',
  },
  {
    mode: 'prijeza',
    q: 'Što znači "za" uz vrijeme?',
    en: 'za, with time:',
    opts: ['in, from now', 'ago', 'during', 'for how long'],
    answer: 'in, from now',
    tip: 'Forwards, and accusative. The pair is the whole lesson.',
  },
  {
    mode: 'prijeza',
    q: 'Nakon ____ idemo van. (ručak)',
    en: 'After lunch we are going out.',
    opts: ['ručka', 'ručak', 'ručku', 'ručkom'],
    answer: 'ručka',
    tip: 'nakon and poslije both take the genitive.',
  },
  {
    mode: 'prijeza',
    q: 'Tijekom ____ ne radim. (ljeto)',
    en: 'During the summer I do not work.',
    opts: ['ljeta', 'ljeto', 'ljetu', 'ljetom'],
    answer: 'ljeta',
    tip: 'tijekom plus the genitive.',
  },
  {
    mode: 'prijeza',
    q: 'Koji od ovih NE traži genitiv?',
    en: 'Which is not genitive?',
    opts: ['za', 'prije', 'do', 'tijekom'],
    answer: 'za',
    tip: 'za is the accusative one, which is exactly why it contrasts with prije.',
  },
  {
    mode: 'prijeza',
    q: 'Radim od ____ do ____. (devet, pet)',
    en: 'I work from nine to five.',
    opts: ['devet do pet', 'devet do peti', 'devetu do pet', 'devetom do petom'],
    answer: 'devet do pet',
    tip: 'od and do both take the genitive; the numerals here do not decline.',
  },

  // ── trajanje ──────────────────────────────────────────────────────────────
  {
    mode: 'trajanje',
    q: 'Čekao sam ____. (dva sata)',
    en: 'I waited two hours.',
    opts: ['dva sata', 'za dva sata', 'dvama satima', 'do dva sata'],
    answer: 'dva sata',
    tip: 'DURATION IS THE BARE ACCUSATIVE — no preposition at all.',
  },
  {
    mode: 'trajanje',
    q: 'Zašto ne "za dva sata"?',
    en: 'Why not za?',
    opts: [
      'za znači za koliko, ne koliko dugo',
      'za je neformalno',
      'nema razloga',
      'oboje vrijedi',
    ],
    answer: 'za znači za koliko, ne koliko dugo',
    tip: 'Za dva sata means in two hours from now. English "for" is the trap.',
  },
  {
    mode: 'trajanje',
    q: 'Učim hrvatski dvije godine. Koje je to vrijeme?',
    en: 'Which tense is that?',
    opts: ['prezent', 'perfekt', 'futur', 'aorist'],
    answer: 'prezent',
    tip: 'SOMETHING STILL GOING ON TAKES THE PRESENT, where English uses a perfect.',
  },
  {
    mode: 'trajanje',
    q: 'Što bi značilo "Učio sam hrvatski dvije godine"?',
    en: 'What would the past tense mean?',
    opts: ['prestao sam', 'još učim', 'isto', 'počinjem'],
    answer: 'prestao sam',
    tip: 'The past says you stopped. That is the whole difference, and it is a big one.',
  },
  {
    mode: 'trajanje',
    q: 'Kako se kaže "I have lived here for five years"?',
    en: 'I have lived here for five years.',
    opts: [
      'Živim ovdje pet godina.',
      'Živio sam ovdje pet godina.',
      'Za pet godina živim ovdje.',
      'Živim ovdje od pet godina.',
    ],
    answer: 'Živim ovdje pet godina.',
    tip: 'Present tense, bare accusative, no preposition.',
  },
  {
    mode: 'trajanje',
    q: 'Spavao sam ____. (cijela noć)',
    en: 'I slept the whole night.',
    opts: ['cijelu noć', 'cijele noći', 'cijeloj noći', 'cijelom noći'],
    answer: 'cijelu noć',
    tip: 'Accusative for duration — and noć is i-declension feminine.',
  },
  {
    mode: 'trajanje',
    q: 'Koje pitanje traži goli akuzativ?',
    en: 'Which question takes the bare accusative?',
    opts: ['koliko dugo?', 'kada?', 'za koliko?', 'otkad?'],
    answer: 'koliko dugo?',
    tip: 'How long. The other three take prepositions.',
  },
  {
    mode: 'trajanje',
    q: 'Radim ovdje ____ 2019. godine.',
    en: 'I have worked here since 2019.',
    opts: ['od', 'za', 'do', 'prije'],
    answer: 'od',
    tip: 'od plus the genitive for a starting point — and the verb stays present.',
  },

  // ── jos ───────────────────────────────────────────────────────────────────
  {
    mode: 'jos',
    q: 'Što znači "još radim"?',
    en: 'još radim',
    opts: ['I am still working', 'I already work', 'I have just worked', 'I no longer work'],
    answer: 'I am still working',
    tip: 'još = still, and it is the ordinary way to say it.',
  },
  {
    mode: 'jos',
    q: 'Što znači "Već sam gotov"?',
    en: 'Već sam gotov.',
    opts: ['I am already done', 'I am still going', 'I have just started', 'I am not done'],
    answer: 'I am already done',
    tip: 'već = already.',
  },
  {
    mode: 'jos',
    q: 'Što znači "Tek sam stigao"?',
    en: 'Tek sam stigao.',
    opts: ['I have only just arrived', 'I arrived long ago', 'I am arriving', 'I did not arrive'],
    answer: 'I have only just arrived',
    tip: 'tek = only just, and it always points at how recent something is.',
  },
  {
    mode: 'jos',
    q: 'Kako se kaže "I do not smoke any more"?',
    en: 'not any more',
    opts: ['Više ne pušim.', 'Ne pušim još.', 'Već ne pušim.', 'Tek ne pušim.'],
    answer: 'Više ne pušim.',
    tip: 'više ne — and the ne is obligatory.',
  },
  {
    mode: 'jos',
    q: '____ pet godina živim ovdje.',
    en: 'I have lived here for five years now.',
    opts: ['Već', 'Još', 'Tek', 'Više'],
    answer: 'Već',
    tip: 'VEĆ DOES DOUBLE DUTY — already, and "for … now" with a duration.',
  },
  {
    mode: 'jos',
    q: 'Što znači "još ne"?',
    en: 'još ne',
    opts: ['not yet', 'not any more', 'never', 'already not'],
    answer: 'not yet',
    tip: 'Još ne znam — I do not know yet.',
  },
  {
    mode: 'jos',
    q: 'Koja je razlika između "još ne" i "više ne"?',
    en: 'još ne against više ne:',
    opts: [
      'još ne je prije, više ne je poslije',
      'nema razlike',
      'jedno je formalno',
      'jedno je za prošlost',
    ],
    answer: 'još ne je prije, više ne je poslije',
    tip: 'Not yet against not any more — opposite ends of the same event.',
  },
  {
    mode: 'jos',
    q: 'Koja riječ znači "only just"?',
    en: 'only just',
    opts: ['tek', 'već', 'još', 'više'],
    answer: 'tek',
    tip: 'Tek sam došao — I have only just got here.',
  },
];
