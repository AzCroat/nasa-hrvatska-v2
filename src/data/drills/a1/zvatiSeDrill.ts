// src/data/drills/a1/zvatiSeDrill.ts
//
// A1 ZVATI SE — the drill for the `zvati-se` lesson (A1 position 16).
//
// Three modes, eight items each:
//   oblici  — the six forms: zovem, zoveš, zove, zovemo, zovete, zovu
//   red     — se in second place, never first and never third
//   pitanja — asking: ti or vi, people or places, and surnames
//
// Only biti, the demonstratives and the question words come before this lesson, so
// every sentence is built from those and zvati se / prezivati se. Distractors are a
// wrong person ending, a misplaced or missing se, or the wrong register — never
// Serbian, and never a sentence a native would say.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const ZVATI_SE_MODE_LABELS: Record<string, string> = {
  oblici: '🔤 Oblici',
  red: '↔️ Red riječi',
  pitanja: '❓ Pitanja',
};

export const ZVATI_SE_DRILL_DATA: ModeDrillItem[] = [
  // ── oblici ────────────────────────────────────────────────────────────────
  {
    mode: 'oblici',
    q: 'Ja se ____ Ivana.',
    en: 'My name is Ivana.',
    opts: ['zovem', 'zove', 'zoveš', 'zovu'],
    answer: 'zovem',
    tip: 'ja → zovem. The -m ending already says "I".',
  },
  {
    mode: 'oblici',
    q: 'Ti se ____ Marko?',
    en: 'Is your name Marko?',
    opts: ['zovem', 'zoveš', 'zove', 'zovete'],
    answer: 'zoveš',
    tip: 'ti → zoveš. The ti form ends in -š.',
  },
  {
    mode: 'oblici',
    q: 'On se ____ Tomislav.',
    en: 'His name is Tomislav.',
    opts: ['zovu', 'zovem', 'zove', 'zovemo'],
    answer: 'zove',
    tip: 'on, ona and ono all take zove.',
  },
  {
    mode: 'oblici',
    q: 'Mi se ____ Ana i Petra.',
    en: 'Our names are Ana and Petra.',
    opts: ['zovemo', 'zovete', 'zovu', 'zove'],
    answer: 'zovemo',
    tip: 'mi → zovemo. The mi form ends in -mo.',
  },
  {
    mode: 'oblici',
    q: 'Vi se ____ Ivana i Marta?',
    en: 'Are your names Ivana and Marta?',
    opts: ['zoveš', 'zovemo', 'zovete', 'zovu'],
    answer: 'zovete',
    tip: 'vi → zovete — the polite form, and the form for several people.',
  },
  {
    mode: 'oblici',
    q: 'Oni se ____ Luka i Josip.',
    en: 'Their names are Luka and Josip.',
    opts: ['zove', 'zovu', 'zovete', 'zovemo'],
    answer: 'zovu',
    tip: 'oni → zovu.',
  },
  {
    mode: 'oblici',
    q: 'Ona se ____ Marija.',
    en: 'Her name is Marija.',
    opts: ['zovem', 'zoveš', 'zovu', 'zove'],
    answer: 'zove',
    tip: 'ona takes the same form as on: zove.',
  },
  {
    mode: 'oblici',
    q: 'Ja se ____ Horvat.',
    en: 'My surname is Horvat.',
    opts: ['prezivam', 'preziva', 'prezivaš', 'prezivaju'],
    answer: 'prezivam',
    tip: 'prezivati se works like zvati se: ja → prezivam.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'My name is Ana.',
    opts: ['Zovem se Ana.', 'Se zovem Ana.', 'Zovem Ana se.', 'Zovem si Ana.'],
    answer: 'Zovem se Ana.',
    tip: 'se never opens a sentence: verb first, se second.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'My name is Josip.',
    opts: ['Ja zovem se Josip.', 'Ja se zovem Josip.', 'Se ja zovem Josip.', 'Ja zovem Josip se.'],
    answer: 'Ja se zovem Josip.',
    tip: 'With ja first, se moves to second place, before the verb.',
  },
  {
    mode: 'red',
    q: 'Which question is correct?',
    en: 'What is your name?',
    opts: ['Kako zoveš se?', 'Se kako zoveš?', 'Kako se zoveš?', 'Kako zoveš?'],
    answer: 'Kako se zoveš?',
    tip: 'In a question se comes straight after the question word.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'This city is called Zadar.',
    opts: [
      'Ovaj grad zove si Zadar.',
      'Se ovaj grad zove Zadar.',
      'Ovaj grad se zove Zadar.',
      'Ovaj grad zove Zadar.',
    ],
    answer: 'Ovaj grad se zove Zadar.',
    tip: 'ovaj grad is one unit; se follows it in second place.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'Her name is Petra.',
    opts: ['Ona zove se Petra.', 'Ona se zove Petra.', 'Se zove ona Petra.', 'Ona zove Petra.'],
    answer: 'Ona se zove Petra.',
    tip: 'Ona first, se second. Without se the verb would mean calling someone.',
  },
  {
    mode: 'red',
    q: 'What is missing from the sentence "Zovem Ivan."?',
    en: 'What is missing if you want to give your name?',
    opts: ['se', 'je', 'sam', 'ja'],
    answer: 'se',
    tip: 'Giving your name needs se: Zovem se Ivan.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct?',
    en: 'Our names are Ivo and Ana.',
    opts: [
      'Zovemo se Ivo i Ana.',
      'Se zovemo Ivo i Ana.',
      'Zovemo Ivo i Ana se.',
      'Mi zovemo se Ivo i Ana.',
    ],
    answer: 'Zovemo se Ivo i Ana.',
    tip: 'Verb first, se straight after it.',
  },
  {
    mode: 'red',
    q: 'Which question is correct?',
    en: 'What is your surname? (polite)',
    opts: ['Kako prezivate se?', 'Kako se prezivate?', 'Se kako prezivate?', 'Kako prezivate?'],
    answer: 'Kako se prezivate?',
    tip: 'Same order as with zvati se: kako, se, then the verb.',
  },

  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: 'Pitate dijete kako se zove. Kažete:',
    en: 'You ask a child his name.',
    opts: ['Kako se zoveš?', 'Kako se zovete?', 'Kako se zove?', 'Kako se zovu?'],
    answer: 'Kako se zoveš?',
    tip: 'A child gets the ti form.',
  },
  {
    mode: 'pitanja',
    q: 'Pitate profesoricu kako se zove. Kažete:',
    en: 'You ask a teacher her name.',
    opts: ['Kako se zoveš?', 'Kako se zove?', 'Kako se zovete?', 'Kako se zovem?'],
    answer: 'Kako se zovete?',
    tip: 'An adult you do not know gets the polite vi form.',
  },
  {
    mode: 'pitanja',
    q: 'Pitate kako se zove ulica. Kažete:',
    en: 'You ask what the street is called.',
    opts: [
      'Kako se zove ova ulica?',
      'Kako se zoveš ova ulica?',
      'Kako se zovu ova ulica?',
      'Kako ova ulica?',
    ],
    answer: 'Kako se zove ova ulica?',
    tip: 'One street is "it": zove.',
  },
  {
    mode: 'pitanja',
    q: '"Kako se zovu?" — odgovor:',
    en: 'The answer to: What are their names?',
    opts: [
      'Zove se Ana i Iva.',
      'Zovu se Ana i Iva.',
      'Zovemo se Ana i Iva.',
      'Zovem se Ana i Iva.',
    ],
    answer: 'Zovu se Ana i Iva.',
    tip: 'The question is about them, so the answer keeps zovu.',
  },
  {
    mode: 'pitanja',
    q: '"Kako se zove ovaj grad?" — odgovor:',
    en: 'The answer to: What is this city called?',
    opts: ['Zovem se Split.', 'Zove se Split.', 'Zovu se Split.', 'Zoveš se Split.'],
    answer: 'Zove se Split.',
    tip: 'A city is "it": zove se.',
  },
  {
    mode: 'pitanja',
    q: 'Što znači "Kako se prezivaš?"',
    en: 'Choose the meaning.',
    opts: [
      'What is your surname?',
      'What is your first name?',
      'Where are you from?',
      'How are you?',
    ],
    answer: 'What is your surname?',
    tip: 'prezime is a surname; prezivati se asks for it.',
  },
  {
    mode: 'pitanja',
    q: 'Što znači "Zovu se Marko i Luka."?',
    en: 'Choose the meaning.',
    opts: [
      'Their names are Marko and Luka.',
      'Call Marko and Luka.',
      'Our names are Marko and Luka.',
      'Marko and Luka are calling.',
    ],
    answer: 'Their names are Marko and Luka.',
    tip: 'zovu se is the oni form of zvati se.',
  },
  {
    mode: 'pitanja',
    q: '"Kako se zovete?" — you are asking…',
    en: 'Who are you asking?',
    opts: ['a stranger, politely', 'a small child', 'yourself', 'a close friend'],
    answer: 'a stranger, politely',
    tip: 'zovete is the vi form: polite, or several people.',
  },
];
