// src/data/drills/a1/pronounsBitiDrill.ts
//
// A1 PRONOUNS AND BITI — the drill for the `pronouns-biti` lesson.
//
// Follows Hrvatski za početnike 1, pages 8–11: "Ja sam Tom. Ja sam iz Amerike.", then
// LIČNE ZAMJENICE and GLAGOL biti in the short form, in the book's order (ja sam, ti si,
// on/ona je, mi smo, vi/Vi ste, oni/one su) with its student / studentica sentences.
// Only biti is used. Questions and negation belong to the next lesson and are left out.
//
// Three modes:
//   zamjenice — choosing the pronoun
//   biti      — choosing the form of biti
//   red       — the short form never comes first, and the pronoun can be dropped

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PRONOUNS_BITI_MODE_LABELS: Record<string, string> = {
  zamjenice: '👤 Zamjenice',
  biti: '🔗 Biti',
  red: '↔️ Red riječi',
};

export const PRONOUNS_BITI_DRILL_DATA: ModeDrillItem[] = [
  // ── zamjenice ─────────────────────────────────────────────────────────────
  {
    mode: 'zamjenice',
    q: '____ sam student.',
    en: 'I am a student.',
    opts: ['Ja', 'Ti', 'On', 'Mi'],
    answer: 'Ja',
    tip: 'sam goes only with ja. Ti needs si, on needs je, and mi needs smo.',
  },
  {
    mode: 'zamjenice',
    q: '____ si studentica.',
    en: 'You are a student. (to one woman, a friend)',
    opts: ['Ti', 'Ja', 'Ona', 'Vi'],
    answer: 'Ti',
    tip: 'si goes only with ti. Ja needs sam, ona needs je, and vi needs ste.',
  },
  {
    mode: 'zamjenice',
    q: 'Ivan je iz Splita. ____ je student.',
    en: 'Ivan is from Split. He is a student.',
    opts: ['On', 'Ona', 'Oni', 'Ti'],
    answer: 'On',
    tip: 'Ivan is one man, so on. Ona is for a woman, oni is for several people and needs su, and ti needs si.',
  },
  {
    mode: 'zamjenice',
    q: 'Petra je iz Samobora. ____ je studentica.',
    en: 'Petra is from Samobor. She is a student.',
    opts: ['Ona', 'On', 'One', 'Vi'],
    answer: 'Ona',
    tip: 'Petra is one woman, so ona. On is for a man, one is for several women and needs su, and vi needs ste.',
  },
  {
    mode: 'zamjenice',
    q: 'Tom i Mariano su iz Amerike. ____ su studenti.',
    en: 'Tom and Mariano are from America. They are students.',
    opts: ['Oni', 'One', 'On', 'Mi'],
    answer: 'Oni',
    tip: 'Two men are oni. One is only for a group of women, on is one man and needs je, and mi needs smo.',
  },
  {
    mode: 'zamjenice',
    q: 'Marija i Jasna su studentice. ____ su iz Zagreba.',
    en: 'Marija and Jasna are students. They are from Zagreb.',
    opts: ['One', 'Oni', 'Ona', 'Vi'],
    answer: 'One',
    tip: 'A group of women only is one. Oni is for men or a mixed group, ona is one woman and needs je, and vi needs ste.',
  },
  {
    mode: 'zamjenice',
    q: 'Ana i Ivan → ____',
    en: 'A woman and a man together.',
    opts: ['oni', 'one', 'ona', 'vi'],
    answer: 'oni',
    tip: 'A mixed group is always oni. One is used only when everyone is a woman; ona is one woman; vi is the people you are talking to.',
  },
  {
    mode: 'zamjenice',
    q: 'Ana i ja → ____',
    en: 'Ana and I together.',
    opts: ['mi', 'vi', 'oni', 'one'],
    answer: 'mi',
    tip: 'Someone else plus me is "we": mi. Vi is "you", and oni and one are "they", which leaves the speaker out.',
  },
  {
    mode: 'zamjenice',
    q: '____ ste profesorica Ivana Horvat.',
    en: 'You are Professor Ivana Horvat. (politely, to one person)',
    opts: ['Vi', 'Ti', 'Ona', 'Mi'],
    answer: 'Vi',
    tip: 'ste goes with vi, and the polite Vi for one person is written with a capital. Ti is informal and needs si, ona needs je, and mi needs smo.',
  },

  // ── biti ──────────────────────────────────────────────────────────────────
  {
    mode: 'biti',
    q: 'Ja ____ Marko.',
    en: 'I am Marko.',
    opts: ['sam', 'si', 'je', 'smo'],
    answer: 'sam',
    tip: 'ja → sam. si is for ti, je for on or ona, and smo for mi.',
  },
  {
    mode: 'biti',
    q: 'Ti ____ student.',
    en: 'You are a student.',
    opts: ['si', 'sam', 'ste', 'je'],
    answer: 'si',
    tip: 'ti → si. sam is for ja, ste is for vi (several people, or one person politely), and je is for on or ona.',
  },
  {
    mode: 'biti',
    q: 'Ona ____ iz Kine.',
    en: 'She is from China.',
    opts: ['je', 'su', 'si', 'sam'],
    answer: 'je',
    tip: 'on, ona → je. su is for oni and one, si for ti, and sam for ja.',
  },
  {
    mode: 'biti',
    q: 'Mi ____ iz Zagreba.',
    en: 'We are from Zagreb.',
    opts: ['smo', 'ste', 'su', 'sam'],
    answer: 'smo',
    tip: 'mi → smo. ste is for vi, su for oni, and sam is for one person, ja.',
  },
  {
    mode: 'biti',
    q: 'Vi ____ studenti.',
    en: 'You are students. (to several people)',
    opts: ['ste', 'smo', 'su', 'si'],
    answer: 'ste',
    tip: 'vi → ste. smo is for mi, su for oni, and si is for ti, one person.',
  },
  {
    mode: 'biti',
    q: 'Oni ____ iz Argentine.',
    en: 'They are from Argentina.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'oni, one → su. je is for one person (on, ona), smo for mi, and ste for vi.',
  },
  {
    mode: 'biti',
    q: 'Marija i Petra ____ studentice.',
    en: 'Marija and Petra are students.',
    opts: ['su', 'je', 'ste', 'smo'],
    answer: 'su',
    tip: 'Two people you are talking about are "they" (one), so su. je would fit only one of them; ste is for vi and smo for mi.',
  },
  {
    mode: 'biti',
    q: 'Tom i ja ____ iz Amerike.',
    en: 'Tom and I are from America.',
    opts: ['smo', 'su', 'sam', 'ste'],
    answer: 'smo',
    tip: 'Tom and I are "we" (mi), so smo. su would leave the speaker out, sam covers only ja, and ste is for vi.',
  },
  {
    mode: 'biti',
    q: 'Vi ____ student.',
    en: 'You are a student. (politely, to one man)',
    opts: ['ste', 'si', 'je', 'su'],
    answer: 'ste',
    tip: 'The polite Vi takes ste even for one person; only the noun stays singular. si belongs to the informal ti, je to on, and su to oni.',
  },
  {
    mode: 'biti',
    q: 'Ivan ____ profesor.',
    en: 'Ivan is a professor.',
    opts: ['je', 'si', 'sam', 'su'],
    answer: 'je',
    tip: 'A name of one person works like on or ona, so je. si is for ti, sam for ja, and su for several people.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which sentence is correct for "I am a student"?',
    opts: ['Student sam.', 'Sam student.', 'Ja student.', 'Student ja.'],
    answer: 'Student sam.',
    tip: 'The short form sam can never open a sentence, so it follows the first word: Student sam. The two versions without sam have no verb, which Croatian does not allow.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "We are from Zagreb"?',
    opts: ['Iz Zagreba smo.', 'Smo iz Zagreba.', 'Mi iz Zagreba.', 'Iz smo Zagreba.'],
    answer: 'Iz Zagreba smo.',
    tip: 'smo cannot come first, and it cannot split iz from Zagreba, so it follows the whole phrase. "Mi iz Zagreba" has no verb.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "She is from Rijeka"?',
    opts: ['Ona je iz Rijeke.', 'Je ona iz Rijeke.', 'Ona iz Rijeke.', 'Ona si iz Rijeke.'],
    answer: 'Ona je iz Rijeke.',
    tip: 'ona → je, placed second. je cannot open the sentence, the verb cannot be left out, and si belongs to ti.',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "We are students"?',
    opts: ['Studenti smo.', 'Smo studenti.', 'Mi studenti.', 'Studenti ste.'],
    answer: 'Studenti smo.',
    tip: 'mi → smo, and with the pronoun dropped smo follows the first word. It cannot come first, it cannot be left out, and ste would mean "you are".',
  },
  {
    mode: 'red',
    q: 'Which sentence is correct for "I am Petra"?',
    opts: ['Ja sam Petra.', 'Sam Petra.', 'Ja Petra.', 'Ja je Petra.'],
    answer: 'Ja sam Petra.',
    tip: 'ja → sam, in second place. Without ja, sam would be first, which is impossible; the verb cannot be dropped; and je belongs to on or ona.',
  },
  {
    mode: 'red',
    q: '"Umoran sam." Who is tired?',
    opts: ['I am', 'You are', 'He is', 'We are'],
    answer: 'I am',
    tip: 'The pronoun is dropped, but sam already says "I". "You are" would be si, "he is" je, and "we are" smo.',
  },
  {
    mode: 'red',
    q: '"Iz Splita su." Who is from Split?',
    opts: ['They are', 'We are', 'You are', 'She is'],
    answer: 'They are',
    tip: 'su goes with oni or one, so "they". "We are" would be smo, "you are" si or ste, and "she is" je.',
  },
  {
    mode: 'red',
    q: '"Studentica si." Who is a student?',
    opts: ['You are (one person)', 'I am', 'She is', 'You are (several people)'],
    answer: 'You are (one person)',
    tip: 'si goes with ti, one person you know well. "I am" would be sam, "she is" je, and several people would need ste.',
  },
  {
    mode: 'red',
    q: '"Profesor je." Who is a professor?',
    opts: ['He is', 'I am', 'You are', 'They are'],
    answer: 'He is',
    tip: 'je goes with on (or ona), so "he is". "I am" would be sam, "you are" si, and "they are" su.',
  },
];
