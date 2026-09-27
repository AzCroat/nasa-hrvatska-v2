// src/lib/unitProductionRequest.ts
//
// WHICH UNIT (AND WHICH HALF) THE PRODUCTION SCREEN IS ABOUT.
//
// EPHEMERAL NAVIGATION STATE, never progress — sessionStorage, read
// NON-DESTRUCTIVELY like `nh_unit_test`'s handoff and for the same reason: a
// learner halfway through writing forty words must not lose the screen to a
// remount. Cleared when they leave.
//
// It lives in its own module rather than beside the store because
// `curriculumSlot` (on the first-paint path) writes it and the SCREEN reads it:
// putting it in `courseUnitProgress` would be fine today and is one import away
// from being the wrong thing tomorrow, since that module is the progress store and
// this is navigation.

import type { ProductionKind } from './unitProduction';

export const UNIT_PRODUCTION_REQUEST_KEY = 'nh_unit_production';

export function requestUnitProduction(unitId: string, kind: ProductionKind): void {
  if (!unitId) return;
  try {
    sessionStorage.setItem(UNIT_PRODUCTION_REQUEST_KEY, `${unitId}|${kind}`);
  } catch {
    /* the screen reports that it has no unit rather than crashing */
  }
}

export function readUnitProductionRequest(): { unitId: string; kind: ProductionKind } | null {
  try {
    const raw = sessionStorage.getItem(UNIT_PRODUCTION_REQUEST_KEY);
    if (!raw) return null;
    const [unitId, kind] = raw.split('|');
    if (!unitId || (kind !== 'write' && kind !== 'speak')) return null;
    return { unitId, kind };
  } catch {
    return null;
  }
}

export function clearUnitProductionRequest(): void {
  try {
    sessionStorage.removeItem(UNIT_PRODUCTION_REQUEST_KEY);
  } catch {
    /* nothing more to do */
  }
}
