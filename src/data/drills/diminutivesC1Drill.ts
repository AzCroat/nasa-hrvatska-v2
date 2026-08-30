// src/data/drills/diminutivesC1Drill.ts
//
// C1 DIMINUTIVES & AUGMENTATIVES — the drill for the
// `diminutives-augmentatives` lesson.
//
// A `diminutives` screen exists at B1 and is reachable from C1, and it is still
// the wrong partner: it is a short reference screen with no augmentative content
// at all, while half of this lesson is augmentatives and the attitude they
// carry. Mapping to it would have covered one side of the topic and claimed to
// cover both.
//
// What makes this a C1 lesson rather than a vocabulary list is that the suffixes
// are PRAGMATIC, not dimensional. *Kavica* is not a small coffee — it is a
// relaxed one, and offering someone a kavica is an invitation to sit down.
// Diminutives soften requests the way the conditional does; augmentatives in
// -urina and -etina carry a judgement the speaker may not intend to broadcast.
// Getting the size right and the attitude wrong is the C1 failure mode.
//
// Three modes:
//   umanjenice — the diminutive suffixes and what they really signal
//   uvecanice  — -ina, -etina, -urina, and where the attitude starts
//   pragmatika — softening, hypocoristics, and when NOT to use one

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const DIMINUTIVES_C1_MODE_LABELS: Record<string, string> = {
  umanjenice: '🐣 Umanjenice',
  uvecanice: '🐘 Uvećanice',
  pragmatika: '🎭 Što zapravo poručuju',
};

export const DIMINUTIVES_C1_DRILL_DATA: ModeDrillItem[] = [
  // ── umanjenice ────────────────────────────────────────────────────────────
  {
    mode: 'umanjenice',
    q: 'stol → ____',
    en: 'little table',
    opts: ['stolić', 'stolica', 'stolina', 'stolce'],
    answer: 'stolić',
    tip: '-ić is the masculine diminutive: stolić, prozorčić, komadić.',
  },
  {
    mode: 'umanjenice',
    q: 'ruka → ____',
    en: 'little hand',
    opts: ['ručica', 'rukić', 'ručina', 'rukce'],
    answer: 'ručica',
    tip: '-ica is the feminine one, and k softens to č before it: ruka → ručica.',
  },
  {
    mode: 'umanjenice',
    q: 'kamen → ____',
    en: 'pebble',
    opts: ['kamenčić', 'kamenić', 'kamenica', 'kamenina'],
    answer: 'kamenčić',
    tip: '-čić appears where -ić alone would be awkward: kamenčić, prozorčić.',
  },
  {
    mode: 'umanjenice',
    q: 'jezero → ____',
    en: 'small lake',
    opts: ['jezerce', 'jezerić', 'jezerica', 'jezerina'],
    answer: 'jezerce',
    tip: '-ce is the neuter diminutive: jezerce, pisamce, sunašce.',
  },
  {
    mode: 'umanjenice',
    q: 'Koji sufiks tvori umanjenicu srednjega roda?',
    en: 'Which suffix for neuter diminutives?',
    opts: ['-ce', '-ić', '-ica', '-ina'],
    answer: '-ce',
    tip: 'Neuter takes -ce; masculine -ić; feminine -ica.',
  },
  {
    mode: 'umanjenice',
    q: 'knjiga → ____',
    en: 'little book',
    opts: ['knjižica', 'knjigić', 'knjižina', 'knjigce'],
    answer: 'knjižica',
    tip: 'g softens to ž: knjiga → knjižica.',
  },
  {
    mode: 'umanjenice',
    q: 'Nose li umanjenice uvijek značenje "malo"?',
    en: 'Do diminutives always mean small?',
    opts: ['ne, često znače naklonost', 'da, uvijek', 'samo u množini', 'samo za predmete'],
    answer: 'ne, često znače naklonost',
    tip: 'Usually warmth rather than size — which is the whole point of the lesson.',
  },
  {
    mode: 'umanjenice',
    q: 'Što znači "kavica"?',
    en: 'What does kavica mean?',
    opts: ['opuštena kava', 'mala kava', 'loša kava', 'jaka kava'],
    answer: 'opuštena kava',
    tip: 'Not a small coffee — a relaxed one. Idemo na kavicu is an invitation to sit.',
  },

  // ── uvecanice ─────────────────────────────────────────────────────────────
  {
    mode: 'uvecanice',
    q: 'kuća → ____ (velika)',
    en: 'a big house',
    opts: ['kućerina', 'kućica', 'kućce', 'kućić'],
    answer: 'kućerina',
    tip: '-erina/-ina builds augmentatives: kućerina.',
  },
  {
    mode: 'uvecanice',
    q: 'nos → ____ (velik)',
    en: 'a big nose',
    opts: ['nosina', 'nosić', 'nosica', 'nosce'],
    answer: 'nosina',
    tip: '-ina is the plainest augmentative and the least judgemental.',
  },
  {
    mode: 'uvecanice',
    q: 'Koji sufiks nosi najviše prijezira?',
    en: 'Which suffix carries the most contempt?',
    opts: ['-urina', '-ina', '-ić', '-ica'],
    answer: '-urina',
    tip: '-urina and -etina lean pejorative; -ina on its own is closer to neutral.',
  },
  {
    mode: 'uvecanice',
    q: 'Je li "-ina" uvijek pogrdno?',
    en: 'Is -ina always pejorative?',
    opts: ['ne, može biti i divljenje', 'da, uvijek', 'samo za ljude', 'samo u govoru'],
    answer: 'ne, može biti i divljenje',
    tip: 'Ljudina is admiring — a big man in the sense of a fine one.',
  },
  {
    mode: 'uvecanice',
    q: 'Što znači "ljudina"?',
    en: 'What does ljudina mean?',
    opts: ['čovjek vrijedan divljenja', 'krupan i nespretan', 'gomila ljudi', 'stranac'],
    answer: 'čovjek vrijedan divljenja',
    tip: 'The augmentative is admiring here, which is why the suffix cannot be read mechanically.',
  },
  {
    mode: 'uvecanice',
    q: 'knjiga → ____ (velika i teška)',
    en: 'a great heavy tome',
    opts: ['knjižurina', 'knjižica', 'knjigina', 'knjigce'],
    answer: 'knjižurina',
    tip: 'knjižurina — and it is not a compliment to the book.',
  },
  {
    mode: 'uvecanice',
    q: 'Koliko sufiksa za uvećanice treba znati?',
    en: 'How many augmentative suffixes matter?',
    opts: ['tri', 'jedan', 'šest', 'deset'],
    answer: 'tri',
    tip: '-ina, -etina, -urina. The scale of attitude runs in that order.',
  },
  {
    mode: 'uvecanice',
    q: 'Zašto uvećanice treba rabiti oprezno?',
    en: 'Why use augmentatives carefully?',
    opts: ['nose stav, ne samo veličinu', 'nisu standardne', 'preduge su', 'nemaju množinu'],
    answer: 'nose stav, ne samo veličinu',
    tip: 'You may broadcast a judgement you did not intend.',
  },

  // ── pragmatika ────────────────────────────────────────────────────────────
  {
    mode: 'pragmatika',
    q: 'Kako umanjenica djeluje na molbu?',
    en: 'What does a diminutive do to a request?',
    opts: ['ublažava je', 'pojačava je', 'čini je službenom', 'ne mijenja ništa'],
    answer: 'ublažava je',
    tip: 'It softens, exactly as the conditional does: Može jedno pitanjce?',
  },
  {
    mode: 'pragmatika',
    q: 'Ivan → ____ (od milja)',
    en: 'affectionate form of Ivan',
    opts: ['Ivica', 'Ivanina', 'Ivanić', 'Ivance'],
    answer: 'Ivica',
    tip: 'A hypocoristic. It signals closeness — so wait until you are invited to use it.',
  },
  {
    mode: 'pragmatika',
    q: 'Kada NE rabiti hipokoristik?',
    en: 'When should you not use one?',
    opts: ['prije nego što vas pozovu', 'među prijateljima', 'u obitelji', 'nikada nije problem'],
    answer: 'prije nego što vas pozovu',
    tip: 'Same social rule as switching from Vi to ti.',
  },
  {
    mode: 'pragmatika',
    q: 'Što signalizira "Idemo na pivicu"?',
    en: 'What does that signal?',
    opts: ['opuštenost', 'malu količinu', 'žurbu', 'formalnost'],
    answer: 'opuštenost',
    tip: 'Ease, not volume — and it is an invitation, not a measurement.',
  },
  {
    mode: 'pragmatika',
    q: 'Odgovara li umanjenica službenom dopisu?',
    en: 'Does a diminutive fit an official letter?',
    opts: ['ne', 'da', 'samo u naslovu', 'samo na kraju'],
    answer: 'ne',
    tip: 'It carries warmth, and warmth is out of register in administrative Croatian.',
  },
  {
    mode: 'pragmatika',
    q: 'Što je zajedničko umanjenici i kondicionalu?',
    en: 'What do diminutives share with the conditional?',
    opts: ['oboje ublažavaju', 'oboje niječu', 'oboje su prošlost', 'nemaju veze'],
    answer: 'oboje ublažavaju',
    tip: 'Both are softeners, and Croatian often uses them together.',
  },
  {
    mode: 'pragmatika',
    q: 'Ana → ____ (od milja)',
    en: 'affectionate form of Ana',
    opts: ['Anica', 'Anina', 'Anić', 'Ance'],
    answer: 'Anica',
    tip: 'The feminine -ica does hypocoristic duty as well as diminutive duty.',
  },
  {
    mode: 'pragmatika',
    q: 'Što je glavna pogreška na razini C1?',
    en: 'What is the C1 failure mode here?',
    opts: ['pogoditi veličinu, promašiti stav', 'krivi padež', 'krivi rod', 'predugačke riječi'],
    answer: 'pogoditi veličinu, promašiti stav',
    tip: 'The form is easy; the attitude it broadcasts is what has to be learned.',
  },
];
