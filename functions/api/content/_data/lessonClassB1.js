// ─── B1 lessons in class order ───────────────────────────────────────────────
// Same contract and rules as lessonClassA1.js / lessonClassA2.js: per lesson, a `text`
// (the dialogue or short text the learner hears, reads and answers questions on) and a
// `mix` (the practice slide's items in order — a NUMBER is the index of an item the
// lesson already has in its practice data, an OBJECT is a new exercise).
//
// All 50 B1 lessons, two units per file in b1class/.

import { CLASS_B1_U01_02 } from './b1class/units01-02.js';
import { CLASS_B1_U03_04 } from './b1class/units03-04.js';
import { CLASS_B1_U05_06 } from './b1class/units05-06.js';
import { CLASS_B1_U07_08 } from './b1class/units07-08.js';
import { CLASS_B1_U09_10 } from './b1class/units09-10.js';

/** Every B1 lesson in class order. */
export const CLASS_B1 = {
  ...CLASS_B1_U01_02,
  ...CLASS_B1_U03_04,
  ...CLASS_B1_U05_06,
  ...CLASS_B1_U07_08,
  ...CLASS_B1_U09_10,
};
