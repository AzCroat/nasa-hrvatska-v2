// src/tests/helpers/unitIndex.ts
//
// Course unit numbers DERIVED from the real spine, so a test that wants "a B1 unit"
// does not hardcode a number that a re-levelling silently turns into another level.
// (Units are numbered densely in CEFR then spine order; level sizes are not fixed.)

import { buildCourseUnits } from '../../lib/courseUnits';
import { REAL_SPINE } from './courseSeed';

const UNITS = buildCourseUnits(REAL_SPINE, {});

/** 1-based course index of the `nth` (0-based) unit of `level`. */
export function unitIndexAt(level: string, nth = 0): number {
  const at = UNITS.filter((u) => u.level === level)[nth];
  if (!at) throw new Error(`no unit ${nth} at ${level}`);
  return at.index;
}

export const TOTAL_UNITS = UNITS.length;

/** How many units `level` has (level sizes are not fixed). */
export function unitCountAt(level: string): number {
  return UNITS.filter((u) => u.level === level).length;
}
