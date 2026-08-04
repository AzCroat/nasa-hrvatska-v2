/**
 * savedPhrases — stable keys for the Heritage Mode phrase bookmarks.
 *
 * THE BUG
 * -------
 * `nh_saved_phrases` stored POSITIONAL INDICES. HeritageModeScreen renders
 * `BAKA_PHRASES.map((p, i) => ...)` and saved the loop counter, so the record of
 * what a learner bookmarked was "slot 4", not "this phrase".
 *
 * That is silently wrong the moment the content array changes. Insert one phrase
 * near the top and every saved bookmark below it now points at its neighbour —
 * the learner's list quietly rewrites itself, with no error and nothing to
 * notice until they open it. BAKA_PHRASES entries have carried a perfectly good
 * stable key all along (`hr`, the Croatian phrase itself, unique across all 12);
 * it simply was not used.
 *
 * It also blocked the deletion fix. A tombstone keyed on an index records "slot
 * 4 was removed", which means a different phrase after any edit — so un-saving
 * could not be made to survive a sync until the keying was fixed first. That is
 * why this lands before the tombstone rather than alongside it.
 *
 * MIGRATION IS BEST-EFFORT, AND HONESTLY SO
 * -----------------------------------------
 * Stored indices are resolved through the CURRENT BAKA_PHRASES. If the array has
 * already been edited since a learner saved, that index already pointed at the
 * wrong phrase and no migration can recover the original intent — the
 * information was lost when it was written, not when it is read. Resolving
 * against today's array is the best available answer, and an index outside the
 * array is dropped rather than guessed at.
 *
 * SHAPE
 * -----
 * `{ hr: savedAt }`, mirroring nh_media_done — a per-entry timestamp is what the
 * tombstone mechanism needs to let a re-save outrank an older un-save (see
 * lib/tombstones.ts). Migrated entries have no real timestamp and take 1, the
 * oldest possible, which is the same convention media uses for its legacy
 * `true` values.
 */
import { isTombstoned, type Tombstones } from './tombstones';

export const SAVED_PHRASES_KEY = 'nh_saved_phrases';
export const SAVED_PHRASES_DELETED_KEY = 'nh_saved_phrases_deleted';

/** Timestamp given to entries migrated from an index — oldest possible. */
export const MIGRATED_AT = 1;

export type SavedPhrases = Record<string, number>;

/**
 * Read stored bookmarks in either shape.
 *
 * Accepts the legacy array (of indices, or of phrases from a partially migrated
 * client) and the current map. `phrases` supplies the index→key resolution and
 * is passed in rather than imported so this module stays free of the component's
 * content and can be tested against a fixture.
 */
export function parseSavedPhrases(
  raw: unknown,
  phrases: ReadonlyArray<{ hr?: string }>,
): SavedPhrases {
  const out: SavedPhrases = {};
  if (!raw) return out;

  if (Array.isArray(raw)) {
    for (const v of raw) {
      if (typeof v === 'number' && Number.isInteger(v)) {
        const hr = phrases[v]?.hr;
        // Out of range: the phrase it referred to is gone. Dropping is the only
        // honest option — any other index would be a guess at a different phrase.
        if (hr) out[hr] = MIGRATED_AT;
      } else if (typeof v === 'string' && v.trim()) {
        out[v] = MIGRATED_AT;
      }
    }
    return out;
  }

  if (typeof raw === 'object') {
    for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
      if (!k.trim()) continue;
      const ts = typeof v === 'number' ? v : Number(v);
      out[k] = Number.isFinite(ts) && ts > 0 ? ts : MIGRATED_AT;
    }
  }
  return out;
}

/**
 * Merge two bookmark maps and apply un-saves.
 *
 * Later save wins per phrase; an entry survives a tombstone only if it was saved
 * after that un-save. Remote first then local, with `>=` on the tie, so equal
 * ranks resolve local-wins — matching how media done and custom words behave.
 */
export function mergeSavedPhrases(
  local: unknown,
  remote: unknown,
  phrases: ReadonlyArray<{ hr?: string }>,
  tombs: Tombstones = {},
): SavedPhrases {
  const l = parseSavedPhrases(local, phrases);
  const r = parseSavedPhrases(remote, phrases);
  const out: SavedPhrases = {};
  for (const [k, ts] of [...Object.entries(r), ...Object.entries(l)]) {
    if (isTombstoned(k, ts, tombs)) continue;
    if (!(k in out) || ts >= out[k]!) out[k] = ts;
  }
  return out;
}
