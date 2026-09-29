// src/data/courseUnitCanDo.ts
//
// WHAT EACH UNIT PROMISES THE LEARNER CAN DO (academic recommendation 6, 2026-09-29).
// One index over the six per-level files in ./canDo, keyed by unit id ('A1-1' … 'C2-6').
// Rendered on the course map's expanded unit row and as the "Show that you can" list of
// the unit production brief. The grader's prompt still reads the spine objectives; these
// are the learner-facing version of the same promise.

import { CAN_DO_A1 } from './canDo/A1';
import { CAN_DO_A2 } from './canDo/A2';
import { CAN_DO_B1 } from './canDo/B1';
import { CAN_DO_B2 } from './canDo/B2';
import { CAN_DO_C1 } from './canDo/C1';
import { CAN_DO_C2 } from './canDo/C2';

export const COURSE_UNIT_CAN_DO: Readonly<Record<string, readonly string[]>> = {
  ...CAN_DO_A1,
  ...CAN_DO_A2,
  ...CAN_DO_B1,
  ...CAN_DO_B2,
  ...CAN_DO_C1,
  ...CAN_DO_C2,
};

/** The unit's can-do statements, or an empty list for an unknown id. */
export function canDoFor(unitId: string): readonly string[] {
  return COURSE_UNIT_CAN_DO[unitId] ?? [];
}
