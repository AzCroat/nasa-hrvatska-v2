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
import { CLASS_A1 } from './lessonClassA1.js';

/** lesson id → { worked, practice, checkB?, vocab?, text? } */
export const LESSON_PRACTICE = {
  ...PRACTICE_A1,
  ...PRACTICE_A2,
  ...PRACTICE_B1,
  ...PRACTICE_B2,
  ...PRACTICE_C1,
  ...PRACTICE_C2,
};

/** lesson id → { text, mix } — the class-order content (dialogue + mixed exercise kinds). */
export const LESSON_CLASS = { ...CLASS_A1 };

// THE ANSWER IS NOT ALWAYS THE FIRST OPTION. Class content is authored with the correct
// option first (it reads naturally and reviews easily), and the player shows options in
// the order it is given — so a learner would soon notice "always the first one". The
// options of every new multiple-choice and listening exercise are therefore put in a
// fixed, per-item order here, and `correct` follows. Deterministic: the same lesson always
// ships the same order (the content etag depends on it), and the first option is the
// answer for roughly one item in n, as it should be.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
export function spreadOptions(item, seedText) {
  if (!item || typeof item !== 'object') return item;
  if (item.type && item.type !== 'listen') return item;
  if (!Array.isArray(item.options) || !Number.isInteger(item.correct)) return item;
  const n = item.options.length;
  if (n < 2) return item;
  // Rotate by a per-item amount: every position is used across items, and one item's
  // order never changes between builds.
  const shift = hash(`${seedText}|${item.q}`) % n;
  if (shift === 0) return item;
  const options = item.options.map((_, i) => item.options[(i + shift) % n]);
  return { ...item, options, correct: (item.correct - shift + n) % n };
}

export function withPractice(lessons) {
  return lessons.map((lesson) => {
    const extra = LESSON_PRACTICE[lesson.id];
    if (!extra) return lesson;
    const slides = [...lesson.slides];
    // A short dialogue or text with questions (exercise player, 2026-11-15): right
    // after the intro, so the learner reads before the rules. Optional.
    const classText = LESSON_CLASS[lesson.id]?.text;
    const text = classText
      ? {
          ...classText,
          questions: (classText.questions || []).map((q, i) =>
            spreadOptions(q, `${lesson.id}|text|${i}`),
          ),
        }
      : extra.text;
    if (text) {
      const introAt = slides.findIndex((s) => s.type === 'intro');
      slides.splice(introAt >= 0 ? introAt + 1 : 0, 0, { type: 'text', ...text });
    }
    const worked = (extra.worked || []).map((w) => ({ type: 'worked', ...w }));
    const firstQuiz = slides.findIndex((s) => s.type === 'quiz');
    const checkAt = slides.findIndex((s) => s.type === 'check');
    const workedAt = firstQuiz >= 0 ? firstQuiz : checkAt >= 0 ? checkAt : slides.length;
    slides.splice(workedAt, 0, ...worked);
    if (extra.practice) {
      const at = slides.findIndex((s) => s.type === 'check');
      // THE CLASS MIX: a lesson rebuilt in class order names its practice as a list that
      // mixes the lesson's existing items (by index) with new exercise kinds (as objects),
      // so no existing item is restated in a second file.
      const mix = LESSON_CLASS[lesson.id]?.mix;
      const items = Array.isArray(mix)
        ? mix
            .map((m, i) =>
              typeof m === 'number'
                ? extra.practice.items[m]
                : spreadOptions(m, `${lesson.id}|mix|${i}`),
            )
            .filter(Boolean)
        : extra.practice.items;
      slides.splice(at >= 0 ? at : slides.length, 0, {
        type: 'practice',
        ...extra.practice,
        items,
      });
    }
    // FORM B of the mastery check (academic recommendation 2, 2026-09-29): a parallel
    // paper on the same objectives, served on the next opening after a fail.
    if (Array.isArray(extra.checkB) && extra.checkB.length) {
      const at = slides.findIndex((s) => s.type === 'check');
      if (at >= 0) slides[at] = { ...slides[at], itemsB: extra.checkB };
    }
    // The lesson's own target words (recommendation 3): enrolled in review on a pass.
    return Array.isArray(extra.vocab) && extra.vocab.length
      ? { ...lesson, slides, vocab: extra.vocab }
      : { ...lesson, slides };
  });
}
