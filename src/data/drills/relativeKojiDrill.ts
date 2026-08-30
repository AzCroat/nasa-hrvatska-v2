// src/data/drills/relativeKojiDrill.ts
//
// A2 THE WORD KOJI — the drill for the `relative-koji` lesson.
//
// The pool HAS a relative-pronoun drill: `relpron`, at B1. It could not serve
// this lesson for two independent reasons, and the second is the one that
// matters more:
//
//   1. It is B1, and this lesson is A2 — a coupling to it would resolve to a
//      screen the learner cannot open, which is the silent failure the
//      `gender → vocab-a2` case taught us to check for.
//   2. It carries `subordination`, a category already claimed by three B2
//      lessons, and `subordination`'s easier route is pinned TO `relpron` by
//      `b1Curriculum.test.ts`. Repointing it would break the B1 block.
//
// So: an A2 bank with its own pool-only category, and `relpron` untouched.
//
// The method the lesson gives is the whole drill, and it is two questions in a
// fixed order:
//
//   GENDER AND NUMBER COME FROM OUTSIDE — from the noun koji points back at.
//   CASE COMES FROM INSIDE — from the job koji does in its own clause.
//
// *Žena koja radi ovdje* — feminine from žena, nominative because it is the
// subject of radi. *Žena koju poznajem* — feminine still, accusative now,
// because it is the object of poznajem. Learners who get this wrong almost
// always take the case from outside too.
//
// Two smaller rules with real consequences: IT IS NEVER OMITTED (English drops
// "that" freely, Croatian never does), and THE PREPOSITION COMES FIRST and
// fixes the case — *grad u kojem živim*, never *grad koji živim u*.
//
// Three modes:
//   izvana — gender and number from the antecedent
//   iznutra — case from the job inside the clause
//   prijedlog — prepositions, omission and the comma

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const RELATIVE_KOJI_MODE_LABELS: Record<string, string> = {
  izvana: '⬅️ Rod izvana',
  iznutra: '➡️ Padež iznutra',
  prijedlog: '🔑 Prijedlog i zarez',
};

export const RELATIVE_KOJI_DRILL_DATA: ModeDrillItem[] = [
  // ── izvana ────────────────────────────────────────────────────────────────
  {
    mode: 'izvana',
    q: 'Žena ____ radi ovdje.',
    en: 'The woman who works here.',
    opts: ['koja', 'koji', 'koje', 'koju'],
    answer: 'koja',
    tip: 'Feminine from žena, nominative because it is the subject of radi.',
  },
  {
    mode: 'izvana',
    q: 'Čovjek ____ radi ovdje.',
    en: 'The man who works here.',
    opts: ['koji', 'koja', 'koje', 'kojeg'],
    answer: 'koji',
    tip: 'Masculine from čovjek — the gender is read off the noun outside.',
  },
  {
    mode: 'izvana',
    q: 'Dijete ____ se igra.',
    en: 'The child who is playing.',
    opts: ['koje', 'koji', 'koja', 'kojeg'],
    answer: 'koje',
    tip: 'Dijete is neuter, so koje.',
  },
  {
    mode: 'izvana',
    q: 'Ljudi ____ ovdje žive.',
    en: 'The people who live here.',
    opts: ['koji', 'koje', 'koja', 'kojima'],
    answer: 'koji',
    tip: 'Masculine plural.',
  },
  {
    mode: 'izvana',
    q: 'Odakle dolazi rod?',
    en: 'Where does gender come from?',
    opts: ['od imenice ispred', 'od glagola', 'od padeža', 'od reda riječi'],
    answer: 'od imenice ispred',
    tip: 'Gender and number from OUTSIDE. Only the case comes from inside.',
  },
  {
    mode: 'izvana',
    q: 'Knjige ____ su na stolu.',
    en: 'The books that are on the table.',
    opts: ['koje', 'koji', 'koja', 'kojima'],
    answer: 'koje',
    tip: 'Feminine plural, and the subject of su.',
  },
  {
    mode: 'izvana',
    q: 'Koliko engleskih riječi pokriva "koji"?',
    en: 'How many English words does koji cover?',
    opts: ['tri: who, which, that', 'jednu', 'dvije', 'pet'],
    answer: 'tri: who, which, that',
    tip: 'One word for all three, and it does not care whether the thing is human.',
  },
  {
    mode: 'izvana',
    q: 'Grad ____ mi se sviđa.',
    en: 'The city that I like.',
    opts: ['koji', 'koja', 'koje', 'kojem'],
    answer: 'koji',
    tip: 'Masculine, and the subject of sviđa se.',
  },

  // ── iznutra ───────────────────────────────────────────────────────────────
  {
    mode: 'iznutra',
    q: 'Žena ____ poznajem.',
    en: 'The woman I know.',
    opts: ['koju', 'koja', 'kojoj', 'koje'],
    answer: 'koju',
    tip: 'Feminine still — but the OBJECT of poznajem, so the accusative.',
  },
  {
    mode: 'iznutra',
    q: 'Žena ____ sam pisao.',
    en: 'The woman I wrote to.',
    opts: ['kojoj', 'koju', 'koja', 'koje'],
    answer: 'kojoj',
    tip: 'Pisati takes the dative, so the relative does too.',
  },
  {
    mode: 'iznutra',
    q: 'Odakle dolazi padež?',
    en: 'Where does case come from?',
    opts: ['od posla u vlastitoj rečenici', 'od imenice ispred', 'od roda', 'proizvoljan je'],
    answer: 'od posla u vlastitoj rečenici',
    tip: 'This is the half learners get wrong — they take the case from outside too.',
  },
  {
    mode: 'iznutra',
    q: 'Knjiga ____ čitam.',
    en: 'The book I am reading.',
    opts: ['koju', 'koja', 'kojoj', 'kojom'],
    answer: 'koju',
    tip: 'Feminine accusative — the object of čitam.',
  },
  {
    mode: 'iznutra',
    q: 'Čovjek ____ sam vidio.',
    en: 'The man I saw.',
    opts: ['kojeg', 'koji', 'kojem', 'kojim'],
    answer: 'kojeg',
    tip: 'Masculine ANIMATE accusative — the same -eg the adjectives take.',
  },
  {
    mode: 'iznutra',
    q: 'Auto ____ sam kupio.',
    en: 'The car I bought.',
    opts: ['koji', 'kojeg', 'kojem', 'kojim'],
    answer: 'koji',
    tip: 'Inanimate, so the accusative looks like the nominative.',
  },
  {
    mode: 'iznutra',
    q: 'Prijatelj ____ vjerujem.',
    en: 'The friend I trust.',
    opts: ['kojem', 'kojeg', 'koji', 'kojim'],
    answer: 'kojem',
    tip: 'Vjerovati takes the dative — the verb inside decides.',
  },
  {
    mode: 'iznutra',
    q: 'Kojim se redom postavljaju dva pitanja?',
    en: 'In which order do you ask?',
    opts: ['prvo rod izvana, pa padež iznutra', 'prvo padež', 'svejedno', 'samo jedno pitanje'],
    answer: 'prvo rod izvana, pa padež iznutra',
    tip: 'Outside first, then inside. Doing it in that order makes the form fall out.',
  },

  // ── prijedlog ─────────────────────────────────────────────────────────────
  {
    mode: 'prijedlog',
    q: 'Grad ____ živim.',
    en: 'The city I live in.',
    opts: ['u kojem', 'koji', 'koji u', 'kojim'],
    answer: 'u kojem',
    tip: 'THE PREPOSITION COMES FIRST, and it fixes the case — u plus locative.',
  },
  {
    mode: 'prijedlog',
    q: 'Djevojka ____ sam došao.',
    en: 'The girl I came with.',
    opts: ['s kojom', 'koju', 'koja s', 'kojoj'],
    answer: 's kojom',
    tip: 's plus the instrumental, and the preposition leads.',
  },
  {
    mode: 'prijedlog',
    q: 'Smije li se "koji" izostaviti?',
    en: 'Can koji be left out?',
    opts: ['ne, nikad', 'da, kao u engleskom', 'da, u govoru', 'samo uz prijedlog'],
    answer: 'ne, nikad',
    tip: 'English drops "that" freely. Croatian never does.',
  },
  {
    mode: 'prijedlog',
    q: 'Kako se kaže "the book I read"?',
    en: 'the book I read',
    opts: ['knjiga koju čitam', 'knjiga čitam', 'knjiga koja čitam', 'knjiga što čitam ju'],
    answer: 'knjiga koju čitam',
    tip: 'The relative has to be there even though English has dropped it.',
  },
  {
    mode: 'prijedlog',
    q: 'Stol ____ je knjiga.',
    en: 'The table the book is on.',
    opts: ['na kojem', 'koji', 'na koji', 'kojem'],
    answer: 'na kojem',
    tip: 'Nothing is moving, so na plus the locative.',
  },
  {
    mode: 'prijedlog',
    q: 'Kada NE ide zarez ispred "koji"?',
    en: 'When is there no comma?',
    opts: [
      'kad rečenica određuje koji je to',
      'nikad ne ide',
      'uvijek ide',
      'kad je rečenica duga',
    ],
    answer: 'kad rečenica određuje koji je to',
    tip: 'Essential clause, no comma. Extra information, commas around it.',
  },
  {
    mode: 'prijedlog',
    q: 'Moj brat, ____ živi u Splitu, dolazi sutra.',
    en: 'My brother, who lives in Split, is coming tomorrow.',
    opts: ['koji', 'kojeg', 'kojem', 'kojim'],
    answer: 'koji',
    tip: 'Here the commas are right — you have only one brother, so it is extra information.',
  },
  {
    mode: 'prijedlog',
    q: 'Razlog ____ sam došao.',
    en: 'The reason I came.',
    opts: ['zbog kojeg', 'koji', 'kojem', 'kojim'],
    answer: 'zbog kojeg',
    tip: 'zbog takes the genitive, and again the preposition leads.',
  },
];
