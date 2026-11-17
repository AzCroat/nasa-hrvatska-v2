// ─── A2 lessons in class order ───────────────────────────────────────────────
// Same contract and rules as lessonClassA1.js: per lesson, a `text` (the dialogue or
// short text the learner hears, reads and answers questions on) and a `mix` (the
// practice slide's items in order — a NUMBER is the index of an item the lesson
// already has in lessonPracticeA2 / a2new, an OBJECT is a new exercise).
//
// All 50 A2 lessons, two units per file in a2class/ (owner directive, 2026-11-16:
// "begin A2 in class order, same as A1").

import { CLASS_A2_U01_02 } from './a2class/units01-02.js';
import { CLASS_A2_U03_04 } from './a2class/units03-04.js';
import { CLASS_A2_U05_06 } from './a2class/units05-06.js';
import { CLASS_A2_U07_08 } from './a2class/units07-08.js';
import { CLASS_A2_U09_10 } from './a2class/units09-10.js';

/** Every A2 lesson in class order. */
export const CLASS_A2 = {
  ...CLASS_A2_U01_02,
  ...CLASS_A2_U03_04,
  ...CLASS_A2_U05_06,
  ...CLASS_A2_U07_08,
  ...CLASS_A2_U09_10,
};
