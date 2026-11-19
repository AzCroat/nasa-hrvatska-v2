// src/lib/drillStamps.ts
//
// A PASSED DRILL COUNTS (owner, 2026-11-19): "If a user is demonstrating over and over
// they know the material, why are we giving them the same material?" Keep Learning's
// tier 4 re-served a passed-but-not-yet-re-checked concept's coupled drill every day
// until its scheduled check-up, whatever the learner scored. A drill finished at the
// pass mark now stamps its category with the date, and tier 4 skips a concept whose
// category was drilled since its last check. Tiers 1-3 never read this.
//
// LOCAL-ONLY ON PURPOSE. The stamp is a per-device cadence concern: a second device
// showing the drill once more is the harmless direction, and the retention record that
// syncs holds no suitable field. Syncing it would need the full four-point change
// (snapshot, remote apply, additive merge, types) for no learner benefit.
import { localDateStr } from './dateUtils';

const KEY = 'nh_drilled_categories';

function read(): Record<string, string> {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || '{}');
    return v && typeof v === 'object' ? (v as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/** Stamp these categories as drilled today. Never throws. */
export function stampDrilled(categories: Iterable<string>, today = localDateStr()): void {
  try {
    const all = read();
    for (const c of categories) all[c] = today;
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    /* a cadence hint must never break completion accounting */
  }
}

/** The date a category's drill was last passed on this device, or null. */
export function drilledOn(category: string): string | null {
  const d = read()[category];
  return typeof d === 'string' ? d : null;
}

/** True when the category was drilled on or after `since` (YYYY-MM-DD). */
export function drilledSince(category: string, since: string): boolean {
  const d = drilledOn(category);
  return d !== null && d >= since;
}
