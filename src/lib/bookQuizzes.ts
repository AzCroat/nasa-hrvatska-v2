// src/lib/bookQuizzes.ts
//
// BOOK QUIZZES FOR LESSONS THAT PRACTISE ON AN INTERACTIVE SCREEN (owner, 2026-11-22).
//
// Ten A1 lessons practise on a full interactive screen (the alphabet trainer, the gender drill,
// the numbers trainer ...). Each also has a quiz built from Hrvatski za početnike 1. The owner
// keeps the interactive screen as the lesson's practice and wants the quiz alongside it.
//
// A lesson has ONE practice slot (LESSON_TAUGHT_CATEGORY is one category per lesson) and the
// daily session picks pool entries without knowing which lesson they belong to, so the quiz is
// neither coupled nor in the pool. Keep Learning offers it instead: it only ever lists lessons
// the learner has taught, and it alternates the two (see keepLearning `drillFor`).
export interface BookQuiz {
  /** Pool-only category the quiz completes under (stamps "drilled" for Keep Learning). */
  category: string;
  /** The drill's screen id. */
  screen: string;
}

export const BOOK_QUIZ_LESSONS = [
  'alphabet',
  'gender',
  'possessives',
  'numbers-time',
  'shopping-prices',
  'ordinals-dates',
  'vocative-intro',
  'past-tense',
  'past-questions-negation',
  'future-tense',
] as const;

const LESSON_SET: ReadonlySet<string> = new Set(BOOK_QUIZ_LESSONS);

/** The book quiz for this lesson, or null when its practice is the only one. */
export function bookQuizFor(lessonId: string): BookQuiz | null {
  if (!LESSON_SET.has(lessonId)) return null;
  return { category: `a1-${lessonId}`, screen: `a1${lessonId.replace(/-/g, '')}` };
}
