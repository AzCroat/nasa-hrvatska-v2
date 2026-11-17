// ─── B2 lessons in class order ───────────────────────────────────────────────
// Same contract and rules as lessonClassA1.js … lessonClassB1.js: per lesson, a `text`
// (the dialogue or short text the learner hears, reads and answers questions on) and a
// `mix` (the practice slide's items in order — a NUMBER is the index of an item the
// lesson already has in its practice data, an OBJECT is a new exercise).
//
// All 65 B2 lessons, two units per file in b2class/ (the last file holds Unit 13).

import { CLASS_B2_U01_02 } from './b2class/units01-02.js';
import { CLASS_B2_U03_04 } from './b2class/units03-04.js';
import { CLASS_B2_U05_06 } from './b2class/units05-06.js';
import { CLASS_B2_U07_08 } from './b2class/units07-08.js';
import { CLASS_B2_U09_10 } from './b2class/units09-10.js';
import { CLASS_B2_U11_12 } from './b2class/units11-12.js';
import { CLASS_B2_U13 } from './b2class/units13.js';

/** Every B2 lesson in class order. */
export const CLASS_B2 = {
  ...CLASS_B2_U01_02,
  ...CLASS_B2_U03_04,
  ...CLASS_B2_U05_06,
  ...CLASS_B2_U07_08,
  ...CLASS_B2_U09_10,
  ...CLASS_B2_U11_12,
  ...CLASS_B2_U13,
};
