/**
 * mediaDone — merging the "watched / listened" ticks on the Croatia media cards.
 *
 * The map is `{ mediaName: completedAt }`, and `applyRemoteProgress` used to
 * merge it as `{ ...remote, ...local }`. That is a union, so un-ticking an item
 * on one device was undone by the other device's copy on the next sync: the
 * tick came back and the toggle looked broken.
 *
 * Deletions now travel as an additive tombstone (lib/tombstones.ts), so the
 * union stays additive and the never-reduce merge rule is untouched.
 *
 * Media qualifies for that mechanism where `nh_saved_phrases` does not: it is
 * keyed on `m.name`, a stable identifier, and every entry already carries the
 * `Date.now()` it was completed at — which is exactly what lets a re-tick beat
 * an older un-tick.
 */
import { isTombstoned, type Tombstones } from './tombstones';

export const MEDIA_DONE_KEY = 'nh_media_done';
export const MEDIA_DONE_DELETED_KEY = 'nh_media_done_deleted';

/**
 * A completion is either the `Date.now()` the current writer stamps, or the
 * bare `true` older data holds. Both are kept exactly as found.
 */
export type MediaDoneValue = number | true;
export type MediaDone = Record<string, MediaDoneValue>;

/**
 * Comparison time for an entry. Legacy `true` sorts as the oldest possible
 * completion, so a real timestamp always beats it; anything falsy is "not done".
 *
 * This exists so the merge can order entries WITHOUT rewriting them. Converting
 * `true` to a number here would look harmless — the UI only reads `!!done[name]`
 * — but it rewrites the learner's stored data and the next buildProgressSnapshot
 * pushes that rewrite to Firestore. sync-round-trip.test.ts asserts exact
 * round-tripping for precisely this reason.
 */
function doneTime(v: unknown): number {
  if (typeof v === 'number' && Number.isFinite(v) && v > 0) return v;
  return v === true ? 1 : 0;
}

/** Parse a stored map, tolerating anything a corrupt blob might hold. */
export function parseMediaDone(raw: unknown): MediaDone {
  const out: MediaDone = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    // Values are preserved as found; only "not done" entries are dropped. A
    // remote `false` must not overwrite a local `true` — it is the absence of a
    // completion, not a newer one.
    if (doneTime(v) > 0) out[k] = v as MediaDoneValue;
  }
  return out;
}

/**
 * Merge two completion maps and apply un-ticks.
 *
 * The later completion wins per item — "union of ids, latest-wins per item",
 * the strategy the sync rules prescribe for per-item records. An item survives
 * a tombstone only if it was completed after that un-tick.
 */
export function mergeMediaDone(local: unknown, remote: unknown, tombs: Tombstones = {}): MediaDone {
  const l = parseMediaDone(local);
  const r = parseMediaDone(remote);
  const out: MediaDone = {};
  // Remote first, then local, with `>=` on the tie — so equal-ranked entries
  // resolve local-wins, which is the behaviour applyRemoteProgress.test.ts pins
  // (a legacy `true` on both sides must stay the local one).
  for (const [k, v] of [...Object.entries(r), ...Object.entries(l)]) {
    const t = doneTime(v);
    if (isTombstoned(k, t, tombs)) continue;
    if (!(k in out) || t >= doneTime(out[k])) out[k] = v;
  }
  return out;
}
