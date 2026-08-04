/**
 * tombstones — how a deletion travels through an additive merge.
 *
 * The sync layer merges additively on purpose: `Math.max` for counters, union
 * for sets, never a reduction (CLAUDE.md rule 4). That is what stops a device
 * that has been offline from erasing progress earned elsewhere. The cost is that
 * a union cannot express "the user deleted this" — the other device's copy just
 * puts it back, so a delete button silently undoes itself.
 *
 * A tombstone resolves that without weakening the rule, because the deletion
 * record is ITSELF additive:
 *
 *   - the map only ever grows
 *   - merging two maps keeps the LATER deletion per key
 *   - nothing is subtracted during a merge; a tombstone simply outranks an
 *     older copy of the same entry
 *
 * DO NOT REACH FOR INTERSECTION INSTEAD
 * -------------------------------------
 * The obvious alternative — prune the union against a timestamped "current"
 * list — has already failed in this codebase. `fbWatchProgress` did exactly that
 * for favourites and "silently dropped offline-added favourites when another
 * device's toggle was more recent" (see the NOTE in firebase.ts). Intersection
 * cannot distinguish a deletion from an addition it has not seen yet. A
 * tombstone can: an addition with no matching deletion always survives.
 *
 * WHAT A COLLECTION NEEDS BEFORE IT CAN USE THIS
 * ----------------------------------------------
 * 1. A STABLE KEY per entry. Tombstoning a positional array index records "slot
 *    4 was deleted", which means something different the moment the underlying
 *    content list changes. `nh_saved_phrases` stores indices into BAKA_PHRASES
 *    and is NOT eligible until it is re-keyed.
 * 2. A PER-ENTRY TIMESTAMP. Survival is `addedAt > deletedAt`, which is what
 *    lets a re-add beat an old deletion without a second "undelete" record that
 *    would itself need merging. Collections without one (a plain Set) cannot use
 *    this as-is.
 *
 * `nh_custom_words` (addedAt, keyed hr|en) and `nh_media_done` (Date.now() per
 * media name) both qualify.
 */

export type Tombstones = Record<string, number>;

/**
 * Cap on stored deletions, so the progress blob cannot grow without limit — it
 * is capped at 200 KB by Firestore rules and a breach fails the whole atomic
 * users/{id} write, killing all cloud sync. Newest deletions are kept: dropping
 * the oldest can only resurrect an entry deleted long ago AND still present on a
 * device that has not synced since, which is rare next to that cost.
 */
export const MAX_TOMBSTONES = 500;

/** Parse a stored map, tolerating anything a corrupt blob might hold. */
export function parseTombstones(raw: unknown): Tombstones {
  const out: Tombstones = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    const ts = typeof v === 'number' ? v : Number(v);
    if (Number.isFinite(ts) && ts > 0) out[k] = ts;
  }
  return out;
}

/**
 * Union two maps, keeping the LATER deletion per key.
 *
 * Later wins because a deletion made after a re-add must still take effect;
 * keeping the earlier time would let a stale record be beaten by an entry that
 * was re-added before it.
 */
export function mergeTombstones(a: Tombstones, b: Tombstones, max = MAX_TOMBSTONES): Tombstones {
  const out: Tombstones = { ...a };
  for (const [k, ts] of Object.entries(b)) {
    if (!out[k] || ts > out[k]!) out[k] = ts;
  }
  const keys = Object.keys(out);
  if (keys.length <= max) return out;
  const kept = keys.sort((x, y) => out[y]! - out[x]!).slice(0, max);
  const capped: Tombstones = {};
  for (const k of kept) capped[k] = out[k]!;
  return capped;
}

/**
 * Was this entry deleted and not re-added since?
 *
 * `addedAt <= deletedAt` rather than `<`: an entry stamped in the same
 * millisecond as its own deletion is the deletion winning, which is the safe
 * reading — the alternative resurrects it.
 */
export function isTombstoned(key: string, addedAt: number, tombs: Tombstones): boolean {
  const deletedAt = tombs[key];
  return deletedAt !== undefined && addedAt <= deletedAt;
}

/** Record a deletion at `when`, merged into the existing map and capped. */
export function recordTombstone(tombs: Tombstones, key: string, when: number): Tombstones {
  return mergeTombstones(tombs, { [key]: when });
}
