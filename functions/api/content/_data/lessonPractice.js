// functions/api/content/_data/lessonPractice.js
//
// WORKED EXAMPLES AND GUIDED PRACTICE, placed into every lesson at one point
// (owner request, 2026-09-27: "more learning and then reaffirming testing at every
// level").
//
// Authored per level in lessonPracticeA1.js … C2.js, keyed by lesson id, so the
// 180 existing lesson bodies are untouched and a level can be written, checked and
// shipped on its own. The placement is the pedagogy, so it lives here and nowhere
// else:
//
//   rules / tables / examples  →  WORKED EXAMPLES  →  formative quiz slides
//                              →  GUIDED PRACTICE  →  mastery check  →  summary
//
// Worked examples go before the first formative quiz, because a problem solved in
// front of the learner is what makes the first attempt of their own possible.
// Guided practice goes immediately before the check: last help, then the measure.
// The check stays immediately before the summary (lessonDepthRules pins both).

import { PRACTICE_A1 } from './lessonPracticeA1.js';
import { PRACTICE_A2 } from './lessonPracticeA2.js';
import { PRACTICE_B1 } from './lessonPracticeB1.js';
import { PRACTICE_B2 } from './lessonPracticeB2.js';
import { PRACTICE_C1 } from './lessonPracticeC1.js';
import { PRACTICE_C2 } from './lessonPracticeC2.js';

/** lesson id → { worked: WorkedSlide[], practice: PracticeSlide } */
export const LESSON_PRACTICE = {
  ...PRACTICE_A1,
  ...PRACTICE_A2,
  ...PRACTICE_B1,
  ...PRACTICE_B2,
  ...PRACTICE_C1,
  ...PRACTICE_C2,
};

export function withPractice(lessons) {
  return lessons.map((lesson) => {
    const extra = LESSON_PRACTICE[lesson.id];
    if (!extra) return lesson;
    const slides = [...lesson.slides];
    const worked = (extra.worked || []).map((w) => ({ type: 'worked', ...w }));
    const firstQuiz = slides.findIndex((s) => s.type === 'quiz');
    const checkAt = slides.findIndex((s) => s.type === 'check');
    const workedAt = firstQuiz >= 0 ? firstQuiz : checkAt >= 0 ? checkAt : slides.length;
    slides.splice(workedAt, 0, ...worked);
    if (extra.practice) {
      const at = slides.findIndex((s) => s.type === 'check');
      slides.splice(at >= 0 ? at : slides.length, 0, { type: 'practice', ...extra.practice });
    }
    return { ...lesson, slides };
  });
}
