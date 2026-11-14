// src/data/drills/a1/bitiQuestionsNegationDrill.ts
//
// A1 BITI — the drill for the `biti-questions-negation` lesson.
//
// Three modes:
//   nijecanje — the fused negative: nisam, nisi, nije, nismo, niste, nisu
//   pitanja   — the question: long form + li (Jesi li…?), and Je li for he/she/it
//   odgovori  — the one-word answer, in the answerer's own person
//
// Distractors are wrong by person, by splitting the negative into two words that do
// not exist ("ne sam"), or by opening with the short clitic form.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const BITI_QUESTIONS_NEGATION_MODE_LABELS: Record<string, string> = {
  nijecanje: '🚫 Niječanje',
  pitanja: '❓ Pitanja',
  odgovori: '💬 Odgovori',
};

export const BITI_QUESTIONS_NEGATION_DRILL_DATA: ModeDrillItem[] = [
  // ── nijecanje ───────────────────────────────────────────────────────────
  {
    mode: 'nijecanje',
    q: 'Ja ____ ovdje.',
    en: 'I am not here.',
    opts: ['nisam', 'ne sam', 'nije', 'nisi'],
    answer: 'nisam',
    tip: 'ni- joins sam: nisam. "Ne sam" does not exist.',
  },
  {
    mode: 'nijecanje',
    q: 'Ana ____ doma.',
    en: 'Ana is not at home.',
    opts: ['nisu', 'ne je', 'nije', 'nisam'],
    answer: 'nije',
    tip: 'For he, she and it: nije.',
  },
  {
    mode: 'nijecanje',
    q: 'Ti ____ tamo.',
    en: 'You are not there.',
    opts: ['niste', 'nisi', 'nisam', 'ne si'],
    answer: 'nisi',
    tip: 'ti → nisi.',
  },
  {
    mode: 'nijecanje',
    q: 'Mi ____ doma.',
    en: 'We are not at home.',
    opts: ['nismo', 'nisu', 'niste', 'ne smo'],
    answer: 'nismo',
    tip: 'mi → nismo.',
  },
  {
    mode: 'nijecanje',
    q: 'Vi ____ gospodin Horvat?',
    en: 'You are not Mr Horvat?',
    opts: ['nisi', 'nismo', 'niste', 'nije'],
    answer: 'niste',
    tip: 'vi and polite Vi → niste.',
  },
  {
    mode: 'nijecanje',
    q: 'Oni ____ tamo.',
    en: 'They are not over there.',
    opts: ['nije', 'nisu', 'nismo', 'ne su'],
    answer: 'nisu',
    tip: 'oni → nisu.',
  },
  {
    mode: 'nijecanje',
    q: 'Which sentence is correct?',
    en: 'I am not a student.',
    opts: ['Sam nisam student.', 'Ne sam student.', 'Nisam student.', 'Student ne sam.'],
    answer: 'Nisam student.',
    tip: 'The negative is a full word, so it can open the sentence.',
  },
  {
    mode: 'nijecanje',
    q: 'Ivan ____ ovdje, a Petra je.',
    en: 'Ivan is not here, but Petra is.',
    opts: ['nisam', 'nije', 'nisi', 'nisu'],
    answer: 'nije',
    tip: 'Ivan is he → nije.',
  },
  // ── pitanja ─────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: '____ li ti student?',
    en: 'Are you a student?',
    opts: ['Si', 'Jesi', 'Je', 'Jeste'],
    answer: 'Jesi',
    tip: 'The question takes the long form first: Jesi li.',
  },
  {
    mode: 'pitanja',
    q: '____ li Marko doma?',
    en: 'Is Marko at home?',
    opts: ['Jesmo', 'Jesi', 'Je', 'Jesu'],
    answer: 'Je',
    tip: 'For he, she and it the question is Je li.',
  },
  {
    mode: 'pitanja',
    q: '____ li Vi gospođa Kovač?',
    en: 'Are you Mrs Kovač?',
    opts: ['Jesi', 'Jesu', 'Ste', 'Jeste'],
    answer: 'Jeste',
    tip: 'Polite Vi → Jeste li.',
  },
  {
    mode: 'pitanja',
    q: '____ li oni ovdje?',
    en: 'Are they here?',
    opts: ['Jesu', 'Su', 'Je', 'Jesmo'],
    answer: 'Jesu',
    tip: 'oni → Jesu li.',
  },
  {
    mode: 'pitanja',
    q: '____ li sada u Splitu?',
    en: 'Are we in Split now?',
    opts: ['Smo', 'Jesmo', 'Jeste', 'Jesu'],
    answer: 'Jesmo',
    tip: 'mi → Jesmo li.',
  },
  {
    mode: 'pitanja',
    q: 'Which question is correct?',
    en: 'Are you Ana?',
    opts: ['Li si ti Ana?', 'Si li ti Ana?', 'Jesi li ti Ana?', 'Ti li si Ana?'],
    answer: 'Jesi li ti Ana?',
    tip: 'Long form first, li straight after it.',
  },
  {
    mode: 'pitanja',
    q: 'Which question is correct?',
    en: 'Is Petra here?',
    opts: [
      'Je li Petra ovdje?',
      'Li je Petra ovdje?',
      'Jesu li Petra ovdje?',
      'Je Petra li ovdje?',
    ],
    answer: 'Je li Petra ovdje?',
    tip: 'Je li, then the person, then the rest.',
  },
  {
    mode: 'pitanja',
    q: 'Where does li go?',
    en: 'In a yes/no question with biti.',
    opts: ['at the end', 'straight after the verb', 'at the start', 'after the person'],
    answer: 'straight after the verb',
    tip: 'Jesi li…? Je li…? — li follows the verb.',
  },
  // ── odgovori ────────────────────────────────────────────────────────────
  {
    mode: 'odgovori',
    q: 'Jesi li ti student? — (yes) ____.',
    en: 'Answer about yourself.',
    opts: ['Jesi', 'Jest', 'Jesam', 'Jesu'],
    answer: 'Jesam',
    tip: 'You answer in your own person: Jesam.',
  },
  {
    mode: 'odgovori',
    q: 'Jesi li doma? — (no) ____.',
    en: 'Answer about yourself.',
    opts: ['Nisam', 'Nisi', 'Nije', 'Ne sam'],
    answer: 'Nisam',
    tip: 'No, I am not: Nisam.',
  },
  {
    mode: 'odgovori',
    q: 'Je li Ana ovdje? — (no) ____.',
    en: 'Answer about her.',
    opts: ['Nisam', 'Nisu', 'Nisi', 'Nije'],
    answer: 'Nije',
    tip: 'About her: Nije.',
  },
  {
    mode: 'odgovori',
    q: 'Je li Marko u Rijeci? — (yes) ____.',
    en: 'Answer about him.',
    opts: ['Jesam', 'Jest', 'Jesi', 'Jesu'],
    answer: 'Jest',
    tip: 'The answer about he, she or it is Jest.',
  },
  {
    mode: 'odgovori',
    q: 'Jeste li Vi profesor? — (yes) ____.',
    en: 'Answer about yourself, politely asked.',
    opts: ['Jeste', 'Jesmo', 'Jesam', 'Jest'],
    answer: 'Jesam',
    tip: 'Even to a polite question, you answer about yourself: Jesam.',
  },
  {
    mode: 'odgovori',
    q: 'Jesu li oni tamo? — (no) ____.',
    en: 'Answer about them.',
    opts: ['Nismo', 'Nisu', 'Nije', 'Niste'],
    answer: 'Nisu',
    tip: 'About them: Nisu.',
  },
  {
    mode: 'odgovori',
    q: 'Jeste li vi u Zagrebu? (to two friends) — (yes) ____.',
    en: 'Answer for both of you.',
    opts: ['Jeste', 'Jesmo', 'Jesu', 'Jesam'],
    answer: 'Jesmo',
    tip: 'Answering for "we": Jesmo.',
  },
  {
    mode: 'odgovori',
    q: 'Jesi li ti Maja? — No, I am Ana: ____, ja sam Ana.',
    en: 'Correct the question.',
    opts: ['Nije', 'Nisi', 'Nisam', 'Nismo'],
    answer: 'Nisam',
    tip: 'Nisam, ja sam Ana.',
  },
];
