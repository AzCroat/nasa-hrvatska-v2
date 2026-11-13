// src/data/drills/a1/jobsProfessionsDrill.ts
//
// A1 JOBS — the drill for the `jobs-professions` lesson.
//
// Three modes:
//   zenski   — the female form: -telj/-ač + -ica, -ik → -ica, and the learned -ica/-ka
//   recenica — the job after biti, with no word for "a"
//   mnozina  — groups: men, women, and a mixed group in the male plural
//
// Distractors keep the k of -ik ("liječnikica"), put the wrong female ending on a
// word that has one fixed form, translate "a" as jedan, or pick the wrong plural.
// No plural of an -ik job is asked for: that needs sibilarization (lesson 20).

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const JOBS_PROFESSIONS_MODE_LABELS: Record<string, string> = {
  zenski: '👩 Ženski oblik',
  recenica: '💬 Ja sam…',
  mnozina: '👥 Množina',
};

export const JOBS_PROFESSIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── zenski ──────────────────────────────────────────────────────────────
  {
    mode: 'zenski',
    q: 'učitelj → ____',
    en: 'teacher (a woman)',
    opts: ['učiteljka', 'učiteljica', 'učitelja', 'učiteljkinja'],
    answer: 'učiteljica',
    tip: '-telj keeps the whole word and adds -ica.',
  },
  {
    mode: 'zenski',
    q: 'vozač → ____',
    en: 'driver (a woman)',
    opts: ['vozačica', 'vozačka', 'vozača', 'vozačinja'],
    answer: 'vozačica',
    tip: '-ač adds -ica.',
  },
  {
    mode: 'zenski',
    q: 'liječnik → ____',
    en: 'doctor (a woman)',
    opts: ['liječnikica', 'liječnika', 'liječnica', 'liječnička'],
    answer: 'liječnica',
    tip: '-ik drops, then -ica: the k goes.',
  },
  {
    mode: 'zenski',
    q: 'odvjetnik → ____',
    en: 'lawyer (a woman)',
    opts: ['odvjetnica', 'odvjetnikica', 'odvjetnika', 'odvjetnička'],
    answer: 'odvjetnica',
    tip: '-ik → -ica.',
  },
  {
    mode: 'zenski',
    q: 'konobar → ____',
    en: 'waiter (a woman)',
    opts: ['konobarka', 'konobara', 'konobarkinja', 'konobarica'],
    answer: 'konobarica',
    tip: 'This -ar job takes -ica.',
  },
  {
    mode: 'zenski',
    q: 'novinar → ____',
    en: 'journalist (a woman)',
    opts: ['novinarica', 'novinarka', 'novinara', 'novinarkinja'],
    answer: 'novinarka',
    tip: 'This -ar job takes -ka. Learn the pair.',
  },
  {
    mode: 'zenski',
    q: 'inženjer → ____',
    en: 'engineer (a woman)',
    opts: ['inženjerica', 'inženjera', 'inženjerka', 'inženjerkinja'],
    answer: 'inženjerka',
    tip: 'inženjer → inženjerka, like frizer → frizerka.',
  },
  {
    mode: 'zenski',
    q: 'prodavač → ____',
    en: 'shop assistant (a woman)',
    opts: ['prodavačka', 'prodavača', 'prodavačinja', 'prodavačica'],
    answer: 'prodavačica',
    tip: '-ač adds -ica.',
  },
  {
    mode: 'zenski',
    q: 'kuhar → ____',
    en: 'cook (a woman)',
    opts: ['kuharica', 'kuharka', 'kuhara', 'kuharkinja'],
    answer: 'kuharica',
    tip: 'kuhar → kuharica.',
  },
  // ── recenica ────────────────────────────────────────────────────────────
  {
    mode: 'recenica',
    q: 'Which sentence is right?',
    en: 'I am a cook. (a man)',
    opts: ['Ja sam jedan kuhar.', 'Ja sam kuhar.', 'Sam kuhar.', 'Ja kuhar.'],
    answer: 'Ja sam kuhar.',
    tip: 'No word for "a", and biti stays in.',
  },
  {
    mode: 'recenica',
    q: 'Ana je ____.',
    en: 'Ana is a doctor.',
    opts: ['liječnici', 'jedna liječnica', 'liječnica', 'liječnika'],
    answer: 'liječnica',
    tip: 'A woman, and no word for "a".',
  },
  {
    mode: 'recenica',
    q: 'Što ____ po zanimanju?',
    en: 'What do you do? (to a friend)',
    opts: ['ste', 'si', 'je', 'su'],
    answer: 'si',
    tip: 'A friend is ti → si.',
  },
  {
    mode: 'recenica',
    q: 'Što ____ po zanimanju?',
    en: 'What do you do? (politely)',
    opts: ['si', 'su', 'ste', 'smo'],
    answer: 'ste',
    tip: 'Polite Vi → ste.',
  },
  {
    mode: 'recenica',
    q: 'Marko je konobar, a Ana je ____.',
    en: 'Marko is a waiter, and Ana is a waitress.',
    opts: ['konobar', 'konobarica', 'konobari', 'konobarice'],
    answer: 'konobarica',
    tip: 'Ana is one woman: konobarica.',
  },
  {
    mode: 'recenica',
    q: 'Nisam studentica, ja sam ____.',
    en: 'I am not a student, I am an engineer. (a woman)',
    opts: ['inženjer', 'inženjerke', 'inženjerka', 'inženjeri'],
    answer: 'inženjerka',
    tip: 'One woman: inženjerka.',
  },
  {
    mode: 'recenica',
    q: 'Je li Petra ____? — Nije, ona je profesorica.',
    en: 'Is Petra a journalist? — No, she is a teacher.',
    opts: ['novinar', 'novinarka', 'novinari', 'novinarke'],
    answer: 'novinarka',
    tip: 'Petra is one woman: novinarka.',
  },
  {
    mode: 'recenica',
    q: 'Ivana je učiteljica, a Josip je ____.',
    en: 'Ivana is a teacher, and Josip is the head teacher.',
    opts: ['ravnateljica', 'ravnatelji', 'ravnatelj', 'ravnateljice'],
    answer: 'ravnatelj',
    tip: 'Josip is a man: ravnatelj.',
  },
  // ── mnozina ─────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: 'Ana i Marko su ____.',
    en: 'Ana and Marko are students.',
    opts: ['studentice', 'studenti', 'student', 'studentica'],
    answer: 'studenti',
    tip: 'A mixed group takes the male plural.',
  },
  {
    mode: 'mnozina',
    q: 'Ana i Petra su ____.',
    en: 'Ana and Petra are teachers.',
    opts: ['učitelji', 'učiteljica', 'učiteljice', 'učitelj'],
    answer: 'učiteljice',
    tip: 'Two women: učiteljica → učiteljice.',
  },
  {
    mode: 'mnozina',
    q: 'Oni su ____.',
    en: 'They (men) are drivers.',
    opts: ['vozačice', 'vozači', 'vozač', 'vozačica'],
    answer: 'vozači',
    tip: 'vozač + -i.',
  },
  {
    mode: 'mnozina',
    q: 'One su ____.',
    en: 'They (women) are waitresses.',
    opts: ['konobarice', 'konobari', 'konobarica', 'konobar'],
    answer: 'konobarice',
    tip: 'konobarica → konobarice.',
  },
  {
    mode: 'mnozina',
    q: 'Ivan i Luka su ____.',
    en: 'Ivan and Luka are cooks.',
    opts: ['kuharice', 'kuhar', 'kuhari', 'kuharica'],
    answer: 'kuhari',
    tip: 'kuhar + -i.',
  },
  {
    mode: 'mnozina',
    q: 'Maja i Ivan su ____.',
    en: 'Maja and Ivan are journalists.',
    opts: ['novinarke', 'novinarka', 'novinar', 'novinari'],
    answer: 'novinari',
    tip: 'A mixed group: the male plural novinari.',
  },
  {
    mode: 'mnozina',
    q: 'One su ____.',
    en: 'They (women) are doctors.',
    opts: ['liječnica', 'liječnice', 'liječnik', 'liječnici'],
    answer: 'liječnice',
    tip: 'liječnica → liječnice.',
  },
];
