// ─── C1 lessons in class order ───────────────────────────────────────────────
// Same contract and rules as lessonClassA1.js … lessonClassB2.js: per lesson, a `text`
// (the dialogue or short text the learner hears, reads and answers questions on) and a
// `mix` (the practice slide's items in order — a NUMBER is the index of an item the
// lesson already has in its practice data, an OBJECT is a new exercise).
//
// The 65 original C1 lessons, two units per file in c1class/ (units13.js holds the unit
// that ends the course — Unit 16 since 2026-11-18). units13-15.js holds the fifteen
// lessons that came in from C2; only its first lesson is written so far (owner sample).

import { CLASS_C1_U01_02 } from './c1class/units01-02.js';
import { CLASS_C1_U03_04 } from './c1class/units03-04.js';
import { CLASS_C1_U05_06 } from './c1class/units05-06.js';
import { CLASS_C1_U07_08 } from './c1class/units07-08.js';
import { CLASS_C1_U09_10 } from './c1class/units09-10.js';
import { CLASS_C1_U11_12 } from './c1class/units11-12.js';
import { CLASS_C1_U13 } from './c1class/units13.js';
import { CLASS_C1_U13_15 } from './c1class/units13-15.js';

/** Every C1 lesson in class order. */
export const CLASS_C1 = {
  ...CLASS_C1_U01_02,
  ...CLASS_C1_U03_04,
  ...CLASS_C1_U05_06,
  ...CLASS_C1_U07_08,
  ...CLASS_C1_U09_10,
  ...CLASS_C1_U11_12,
  ...CLASS_C1_U13,
  ...CLASS_C1_U13_15,
};
