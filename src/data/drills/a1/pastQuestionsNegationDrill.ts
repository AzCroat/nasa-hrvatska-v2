// src/data/drills/a1/pastQuestionsNegationDrill.ts
//
// A1 QUESTIONS AND NEGATION IN THE PAST — the drill for the `past-questions-negation`
// lesson.
//
// Follows Hrvatski za početnike 1, pages 74–76: PERFEKT GLAGOLA biti — UPITNI OBLIK
// ("Jesi li bio u Varaždinu? Jeste li vi bili u Rijeci?"), the NIJEČNI OBLIK table, and
// the three rows of exercises on page 76: "Napišite niječni perfekt" (Marin nije kupio
// knjigu) and "Napišite pitanja" (Je li Marin kupio knjigu?). The placement rule for the
// short forms is the one the book sets out on page 143.
//
// Three modes:
//   pitanja — yes/no questions: Jesi li…? Je li…? Jesu li…?
//   upitne  — questions with gdje, što, kada, zašto (no li)
//   nijecno — nisam + participle, and one-word answers

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PAST_QUESTIONS_NEGATION_MODE_LABELS: Record<string, string> = {
  pitanja: '❓ Je li…?',
  upitne: '🔎 Gdje? Što?',
  nijecno: '🚫 Nisam',
};

export const PAST_QUESTIONS_NEGATION_DRILL_DATA: ModeDrillItem[] = [
  // ── pitanja ───────────────────────────────────────────────────────────────
  {
    mode: 'pitanja',
    q: '____ li ti bio u Osijeku?',
    en: 'Were you in Osijek?',
    opts: ['Jesi', 'Si', 'Jesam', 'Je'],
    answer: 'Jesi',
    tip: 'A yes/no question opens with the LONG form of biti plus li: ti → Jesi li. The short si cannot come first; jesam is ja, and je is on or ona.',
  },
  {
    mode: 'pitanja',
    q: '____ li ona bila u kupovini?',
    en: 'Was she out shopping?',
    opts: ['Je', 'Jesu', 'Jesi', 'Jesam'],
    answer: 'Je',
    tip: 'The third person singular is the special one: simply Je li…? Jesu is for oni, jesi for ti, and jesam for ja.',
  },
  {
    mode: 'pitanja',
    q: '____ li oni bili u kinu?',
    en: 'Were they at the movies?',
    opts: ['Jesu', 'Su', 'Je', 'Jeste'],
    answer: 'Jesu',
    tip: 'oni → Jesu li. The short su cannot open a sentence; je is singular, and jeste goes with vi.',
  },
  {
    mode: 'pitanja',
    q: '____ li vi bili u Puli?',
    en: 'Were you in Pula? (to several people)',
    opts: ['Jeste', 'Ste', 'Jesu', 'Jesmo'],
    answer: 'Jeste',
    tip: 'vi → Jeste li. Ste is the short form and cannot come first; jesu is for oni and jesmo for mi.',
  },
  {
    mode: 'pitanja',
    q: '____ li mi bili u Zagrebu?',
    en: 'Were we in Zagreb?',
    opts: ['Jesmo', 'Smo', 'Jeste', 'Jesu'],
    answer: 'Jesmo',
    tip: 'mi → Jesmo li. Smo is the short form and cannot open the question; jeste is vi and jesu is oni.',
  },
  {
    mode: 'pitanja',
    q: 'Damir je kupio kartu. → ____ Damir kupio kartu?',
    en: 'Damir bought a ticket. → Did Damir buy a ticket?',
    opts: ['Je li', 'Li je', 'Jest', 'Jesu li'],
    answer: 'Je li',
    tip: 'To turn the statement into a question, put Je li in front. li never comes first, Jest is the one-word answer "yes", and Jesu li is for several people.',
  },
  {
    mode: 'pitanja',
    q: 'Which question is correct for "Did you study all day?" (to several people)',
    opts: [
      'Jeste li učili cijeli dan?',
      'Ste li učili cijeli dan?',
      'Jeste učili li cijeli dan?',
      'Li ste učili cijeli dan?',
    ],
    answer: 'Jeste li učili cijeli dan?',
    tip: 'Long form first, li right after it, then the participle. The short ste cannot open the question, and li cannot move behind the participle or to the front.',
  },
  {
    mode: 'pitanja',
    q: 'Je li dijete ____ cijelu noć? (spavati)',
    en: 'Did the child sleep all night?',
    opts: ['spavalo', 'spavao', 'spavala', 'spavali'],
    answer: 'spavalo',
    tip: 'A question changes the word order, not the participle: dijete is neuter, so spavalo, just as in a statement. spavao and spavala follow masculine and feminine subjects, and spavali is plural.',
  },
  {
    mode: 'pitanja',
    q: 'Ana, jesi li jučer ____ na koncertu?',
    en: 'Ana, were you at the concert yesterday?',
    opts: ['bila', 'bio', 'bili', 'bilo'],
    answer: 'bila',
    tip: 'You are asking one woman, so the participle is feminine: bila. bio is for a man, bili for several people, and bilo for a neuter subject.',
  },

  // ── upitne ────────────────────────────────────────────────────────────────
  {
    mode: 'upitne',
    q: 'Gdje ____ bio? (ti)',
    en: 'Where were you?',
    opts: ['si', 'jesi li', 'li si', 'jesi'],
    answer: 'si',
    tip: 'After a question word there is no li, and the SHORT form follows directly: Gdje si bio? The long form with li is only for yes/no questions.',
  },
  {
    mode: 'upitne',
    q: 'Kada ____ došli? (oni)',
    en: 'When did they arrive?',
    opts: ['su', 'jesu li', 'je', 'ste'],
    answer: 'su',
    tip: 'Question word + short form: Kada su došli? "jesu li" belongs to yes/no questions, je is singular, and ste goes with vi.',
  },
  {
    mode: 'upitne',
    q: 'Gdje ____ bili Petra i Ivan?',
    en: 'Where were Petra and Ivan?',
    opts: ['su', 'je', 'ste', 'jesu li'],
    answer: 'su',
    tip: 'Two people are "they": su, placed right after Gdje. je is singular, ste is for vi, and li is never added after a question word.',
  },
  {
    mode: 'upitne',
    q: 'Što ____ kupila? (ona)',
    en: 'What did she buy?',
    opts: ['je', 'jest', 'je li', 'su'],
    answer: 'je',
    tip: 'Što + the short form je. jest is the emphatic one-word answer, "je li" is for yes/no questions, and su is plural.',
  },
  {
    mode: 'upitne',
    q: 'Zašto ____ došao?',
    en: 'Why did you not come?',
    opts: ['nisi', 'ne si', 'nisi li', 'nije'],
    answer: 'nisi',
    tip: 'The negative form is one word and goes right after the question word: Zašto nisi došao? "ne si" does not exist, li is not used here, and nije is on or ona.',
  },
  {
    mode: 'upitne',
    q: '____ si radila jučer? — Radila sam cijeli dan.',
    en: '… did you do yesterday? — I worked all day.',
    opts: ['Što', 'Tko', 'Je li', 'Jesi'],
    answer: 'Što',
    tip: 'The answer says what she did, so the question word is Što. Tko asks who; "Je li" and Jesi start yes/no questions and cannot be followed by si.',
  },
  {
    mode: 'upitne',
    q: 'Which question is correct for "What did you say?" (to a man)',
    opts: ['Što si rekao?', 'Što si li rekao?', 'Što jesi li rekao?', 'Što rekao si?'],
    answer: 'Što si rekao?',
    tip: 'Question word, short form, participle: Što si rekao? No li after a question word, no long form, and si cannot trail behind the participle.',
  },
  {
    mode: 'upitne',
    q: 'Which question is correct for "When did she arrive?"',
    opts: ['Kada je došla?', 'Kada je li došla?', 'Kada došla je?', 'Je kada došla?'],
    answer: 'Kada je došla?',
    tip: 'Kada takes second-place je straight after it. li is only for yes/no questions, je cannot follow the participle here, and it can never come first.',
  },
  {
    mode: 'upitne',
    q: 'In which kind of question does "li" appear?',
    opts: [
      'Only in yes/no questions',
      'Only after gdje, što and kada',
      'In every question about the past',
      'Only in negative questions',
    ],
    answer: 'Only in yes/no questions',
    tip: 'li marks a yes/no question: Jesi li radio? A question that opens with gdje, što, kada or zašto never takes it: Gdje si bio?',
  },

  // ── nijecno ───────────────────────────────────────────────────────────────
  {
    mode: 'nijecno',
    q: '— Marko, jesi li bio na koncertu? — ____.',
    en: 'Marko, were you at the concert? — No, I was not.',
    opts: ['Nisam', 'Nisi', 'Ne sam', 'Nije'],
    answer: 'Nisam',
    tip: 'Answer for yourself with the ja form: Nisam. Nisi repeats "you", "Ne sam" is not a word, and Nije is about him or her.',
  },
  {
    mode: 'nijecno',
    q: '— A ti, jesi li ti bila? — ____!',
    en: 'And you, were you there? — Yes, I was!',
    opts: ['Jesam', 'Sam', 'Jesi', 'Je'],
    answer: 'Jesam',
    tip: 'A one-word "yes" uses the LONG form: Jesam. The short sam cannot stand alone; Jesi and Je are about other people.',
  },
  {
    mode: 'nijecno',
    q: '— Je li Petra došla? — ____ došla. Bila je bolesna.',
    en: 'Did Petra come? — She did not come. She was sick.',
    opts: ['Nije', 'Nisu', 'Ne je', 'Nisi'],
    answer: 'Nije',
    tip: 'Petra is "she": nije, one word, in front of the participle. "Ne je" is not Croatian, nisu is plural, and nisi is the ti form.',
  },
  {
    mode: 'nijecno',
    q: 'Someone asks whether Ivan and Luka came. Which one-word answer means "Yes, they did"?',
    opts: ['Jesu', 'Su', 'Jest', 'Jeste'],
    answer: 'Jesu',
    tip: 'The short answer is the long form of biti for oni: Jesu. Su is too weak to stand alone, Jest is singular, and Jeste is the vi form.',
  },
  {
    mode: 'nijecno',
    q: '— Je li Josip kupio kruh? — ____.',
    en: 'Did Josip buy bread? — Yes, he did.',
    opts: ['Jest', 'Jesam', 'Jesu', 'Jesi'],
    answer: 'Jest',
    tip: 'For on or ona the one-word "yes" is Jest. Jesam would mean "I did", Jesu "they did", and Jesi "you did".',
  },
  {
    mode: 'nijecno',
    q: 'Djeca ____ gledala film.',
    en: 'The children did not watch the movie.',
    opts: ['nisu', 'nije', 'nismo', 'ne su'],
    answer: 'nisu',
    tip: 'djeca takes a plural verb, so nisu. nije is singular, nismo is "we", and "ne su" wrongly splits the word.',
  },
  {
    mode: 'nijecno',
    q: 'Vi ____ čekali autobus.',
    en: 'You did not wait for the bus. (to several people)',
    opts: ['niste', 'nisu', 'nismo', 'ne ste'],
    answer: 'niste',
    tip: 'vi → niste. nisu is for oni, nismo for mi, and the negative is always one word, never "ne ste".',
  },
  {
    mode: 'nijecno',
    q: 'Which sentence is correct for "I did not see anything" (a man speaking)?',
    opts: ['Nisam ništa vidio.', 'Ne sam ništa vidio.', 'Sam ništa vidio.', 'Ništa sam vidio.'],
    answer: 'Nisam ništa vidio.',
    tip: 'Croatian keeps both negatives: nisam … ništa. "Ne sam" is not a word, the short sam cannot open a sentence, and "Ništa sam vidio" has lost the negative verb.',
  },
  {
    mode: 'nijecno',
    q: 'Which of these words CAN open a sentence?',
    opts: ['Nisam', 'sam', 'si', 'smo'],
    answer: 'Nisam',
    tip: 'The negative forms are full words, so they can come first: Nisam radio. The short forms sam, si and smo always need something in front of them.',
  },
];
