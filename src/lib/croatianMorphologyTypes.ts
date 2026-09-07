// src/lib/croatianMorphologyTypes.ts
//
// The shared vocabulary of the morphology engine. It exists so the two DATA
// modules (croatianIrregulars, croatianClosedClass) can be typed without
// importing the engine that imports them — the same 2-file cycle that
// `check:circular` caught on lessonSlideTypes, and madge counts a type-only
// import exactly like any other.

/** The seven cases, in the order Croatian grammars and this app teach them. */
export const CASES = ['N', 'G', 'D', 'A', 'V', 'L', 'I'] as const;
export type Case = (typeof CASES)[number];

export const CASE_NAME: Record<Case, string> = {
  N: 'nominative',
  G: 'genitive',
  D: 'dative',
  A: 'accusative',
  V: 'vocative',
  L: 'locative',
  I: 'instrumental',
};

/** The plain-English question each case answers — the app's teaching convention
 *  (see `src/data/caseConcepts.ts`), repeated here so a tapped word can explain
 *  itself without pulling the concept data onto every screen that uses this. */
export const CASE_QUESTION: Record<Case, string> = {
  N: 'who or what is doing it',
  G: 'whose, of what, or after a quantity',
  D: 'to whom, for whom',
  A: 'who or what receives the action',
  V: 'the person being addressed',
  L: 'where, or about what (always after a preposition)',
  I: 'with what, by what means',
};

export type Gender = 'm' | 'f' | 'n';
export type Number_ = 'sg' | 'pl';

export interface FormAnalysis {
  pos: 'noun' | 'adjective' | 'verb' | 'pronoun' | 'preposition' | 'clitic' | 'number' | 'other';
  case?: Case;
  number?: Number_;
  gender?: Gender;
  /** Verb only. */
  person?: 1 | 2 | 3;
  tense?: 'present' | 'past participle' | 'infinitive' | 'imperative';
  /** The dictionary form, when the rules can recover one with confidence. */
  lemma?: string;
  /** A short plain-English note. Never a claim the rules cannot support. */
  note?: string;
}

export interface WordReading {
  surface: string;
  /** Every reading the FORM permits, most likely first. Empty when unrecognised. */
  candidates: FormAnalysis[];
  /** True when exactly one reading is possible — a closed-class word, or an
   *  ending only one paradigm uses. The UI may state it flatly only then. */
  unambiguous: boolean;
}
