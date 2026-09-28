// src/tests/helpers/courseSeed.ts
//
// Put a learner at a given COURSE position through the real stores, so a test
// drives the real builder / screens rather than a fixture that restates the course.
// Every unit before `unitIndex` (1-based, `CourseUnit.index`) is fully advanced —
// lessons read, test passed, both production halves done — and every FINISHED
// level's review is recorded, because the course serves a level review at the
// crossing (increment 6) and a test that wants "the lesson" at unit 7 would
// otherwise meet `levelreview`. Retention re-checks are dated so none is due.

import { writeCurriculumSpine, markLessonComplete } from '../../lib/curriculumProgress';
import {
  recordUnitTest,
  recordUnitProduction,
  recordLevelReview,
} from '../../lib/courseUnitProgress';
import { readCourseState } from '../../lib/courseStep';
import type { CurriculumEntry } from '../../lib/curriculum';
import { CURRICULUM } from '../../../functions/api/content/_data/curriculum.js';

export const REAL_SPINE = CURRICULUM as unknown as CurriculumEntry[];
const DAY = '2026-09-01';

/** Write the real 180-lesson spine and stand the learner on `unitIndex`. */
export function seedCourseAt(unitIndex: number): void {
  writeCurriculumSpine(REAL_SPINE);
  const { units } = readCourseState();
  const finishedLevels = new Set<string>();
  for (const u of units) {
    if (u.index >= unitIndex) break;
    for (const l of u.lessons) markLessonComplete(l.id, DAY);
    recordUnitTest(u.id, 20, 20, true, DAY);
    recordUnitProduction(u.id, 'write', 0.9, DAY);
    recordUnitProduction(u.id, 'speak', 0.9, DAY);
    finishedLevels.add(u.level);
  }
  const standing = units.find((u) => u.index === unitIndex);
  for (const lv of finishedLevels) {
    if (lv !== standing?.level) recordLevelReview(lv, 18, 18, DAY);
  }
}

/** Mark every lesson of the unit the learner stands on as read (a unit-test day). */
export function readWholeUnit(unitIndex: number): void {
  const unit = readCourseState().units.find((u) => u.index === unitIndex);
  if (!unit) throw new Error(`no course unit with index ${unitIndex}`);
  for (const l of unit.lessons) markLessonComplete(l.id, '2026-09-10');
}
