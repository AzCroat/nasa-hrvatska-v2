// Exercise kinds usable inside an animated lesson's practice slide and text slide.
// Data shapes live in the lesson practice data (functions/api/content/_data); the
// rules for them are in scripts/lessonDepthRules.mjs and the lint walks every field.

/** How an item ended. Practice is never scored: all three count as settled. */
export type Settle = 'right' | 'shown' | 'skipped';

export interface ChoiceExercise {
  type?: 'choice';
  q: string;
  options: string[];
  correct: number;
  hint?: string;
  explanation: string;
}
export interface TypedExercise {
  type: 'type';
  q: string;
  answer: string;
  accept?: string[];
  hint: string;
  explanation: string;
}
export interface TrueFalseExercise {
  type: 'tf';
  q: string;
  answer: boolean;
  hint?: string;
  explanation: string;
}
export interface MatchExercise {
  type: 'match';
  q?: string;
  pairs: [string, string][];
  hint?: string;
  explanation: string;
}
export interface SortExercise {
  type: 'sort';
  q: string;
  groups: string[];
  items: { hr: string; group: number }[];
  hint?: string;
  explanation: string;
}
export interface OrderExercise {
  type: 'order';
  q: string;
  words: string[];
  accept?: string[];
  hint?: string;
  explanation: string;
}
export interface TransformExercise {
  type: 'transform';
  q: string;
  from: string;
  answer: string;
  accept?: string[];
  hint: string;
  explanation: string;
}
export interface FixExercise {
  type: 'fix';
  q?: string;
  words: string[];
  wrong: number;
  answer: string;
  hint: string;
  explanation: string;
}
export interface ListenExercise {
  type: 'listen';
  audio: string;
  q: string;
  options: string[];
  correct: number;
  hint?: string;
  explanation: string;
}
export interface DictateExercise {
  type: 'dictate';
  audio: string;
  answer: string;
  accept?: string[];
  hint: string;
  explanation: string;
}

export type Exercise =
  | ChoiceExercise
  | TypedExercise
  | TrueFalseExercise
  | MatchExercise
  | SortExercise
  | OrderExercise
  | TransformExercise
  | FixExercise
  | ListenExercise
  | DictateExercise;

export interface ItemProps<T> {
  item: T;
  onSettle: (result: Settle) => void;
  /** Small label above the prompt, e.g. "Guided practice · 2 of 8 · not scored". */
  eyebrow: string;
  /** Lesson accent colour (for the label). */
  color: string;
  /** Position in its sequence; seeds deterministic shuffles. */
  seed: number;
  /** Re-opened slide: show the item already settled (choice and typed only). */
  settled?: boolean;
}
