// ─── C1 lessons in class order ───────────────────────────────────────────────
// Same contract and rules as lessonClassA1.js … lessonClassB2.js: per lesson, a `text`
// (the dialogue or short text the learner hears, reads and answers questions on) and a
// `mix` (the practice slide's items in order — a NUMBER is the index of an item the
// lesson already has in its practice data, an OBJECT is a new exercise).
//
// C1 began with ONE sample lesson for the owner's review (clitics-advanced, 2026-11-17);
// the remaining lessons are added to c1class/ block by block.

import { CLASS_C1_U01_02 } from './c1class/units01-02.js';

/** Every C1 lesson that has been put into class order so far. */
export const CLASS_C1 = {
  ...CLASS_C1_U01_02,
};
