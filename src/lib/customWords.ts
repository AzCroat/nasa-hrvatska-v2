/**
 * customWords — identity, merging and deletion for the My Words notebook.
 *
 * TWO DEFECTS THIS OWNS
 * ---------------------
 * 1. DELETE DID NOT SURVIVE A SYNC. MyWordsScreen has an explicit trash button,
 *    but `applyRemoteProgress` unions the local and remote lists. A word deleted
 *    on one device was simply re-added from the other's copy, so a deliberate
 *    delete silently came back. This is the additive-merge rule (never reduce a
 *    stat on merge) meeting a legitimate user deletion — the fix is a tombstone,
 *    not an exception to the rule.
 *
 * 2. THE MERGE KEY DID NOT EXIST. The union deduplicated on
 *    `w?.word || JSON.stringify(w)`, and a CustomWord has no `word` field — it
 *    has `hr`. Every key therefore fell through to the JSON of the whole object,
 *    which includes `addedAt`, so the same word saved on two devices produced two
 *    entries rather than one. The "dedup union keyed on word.word" comment
 *    described something the code could not do.
 *
 * WHY TOMBSTONES ARE SAFE HERE
 * ----------------------------
 * A tombstone is itself additive: the set only grows, and merging two sets keeps
 * the LATER deletion time per key. So the deletion record obeys exactly the same
 * merge discipline as the data, and nothing has to be subtracted during a merge.
 *
 * This matters because the obvious alternative has already failed in this
 * codebase. `fbWatchProgress` used to prune favourites by intersecting against a
 * timestamped list; it "silently dropped offline-added favourites when another
 * device's toggle was more recent" and was removed (see the NOTE in
 * firebase.ts). Intersection loses additions. A tombstone does not: an addition
 * with no matching deletion always survives.
 *
 * RE-ADDING WORKS WITHOUT CLEARING ANYTHING
 * -----------------------------------------
 * Survival is a timestamp comparison, not set membership: a word lives if it was
 * added AFTER the most recent deletion of that same word. Re-adding stamps a
 * fresh `addedAt` (MyWordsScreen), which is newer than the tombstone, so the word
 * returns — on every device — without needing a second "undelete" record that
 * would itself need merging.
 */

// The deletion machinery is shared with nh_media_done — see lib/tombstones.ts,
// which also documents what a collection must have before it can use this
// (a stable key and a per-entry timestamp). Re-exported so existing importers
// and tests keep working against one implementation rather than a copy.
export {
  parseTombstones,
  mergeTombstones,
  isTombstoned,
  MAX_TOMBSTONES,
  type Tombstones,
} from './tombstones';
import { isTombstoned, type Tombstones } from './tombstones';

export const CUSTOM_WORDS_KEY = 'nh_custom_words';
export const CUSTOM_WORDS_DELETED_KEY = 'nh_custom_words_deleted';

export interface CustomWord {
  hr: string;
  en: string;
  phonetic?: string;
  example?: string;
  addedAt: number;
}

/** Legacy notebook entries used `{ word, meaning }` before `{ hr, en }`. */
interface LegacyWord {
  word?: string;
  meaning?: string;
}

/**
 * Identity of a notebook entry.
 *
 * `hr` + `en`, not `hr` alone. There is no edit UI, so two entries sharing a
 * Croatian word are two different meanings the learner deliberately saved;
 * collapsing them on `hr` would delete one of them during a routine merge. This
 * key merges only what is genuinely the same entry.
 *
 * `word`/`meaning` are accepted as fallbacks because that is the older shape —
 * the very reason the previous merge keyed on `w?.word`. Real notebooks may
 * still hold entries in that form, and an entry this function cannot read is an
 * entry the merge would drop and the next snapshot would erase from the cloud.
 * Anything unrecognisable keys on its own JSON, which is what the old code did:
 * it dedupes nothing, but it never loses the entry.
 */
export function wordKey(w: (Partial<CustomWord> & LegacyWord) | null | undefined): string {
  const hr = String(w?.hr ?? w?.word ?? '')
    .trim()
    .toLowerCase();
  const en = String(w?.en ?? w?.meaning ?? '')
    .trim()
    .toLowerCase();
  if (!hr && !en) {
    try {
      return `raw:${JSON.stringify(w)}`;
    } catch {
      return 'raw:unserializable';
    }
  }
  return `${hr}|${en}`;
}

/** Anything object-like is kept. Only primitives and null are discarded. */
function isEntry(w: unknown): w is CustomWord {
  return !!w && typeof w === 'object' && !Array.isArray(w);
}

/** Comparison timestamp. Legacy entries predate `addedAt` and sort as oldest. */
function entryTime(w: unknown): number {
  const t = (w as CustomWord | null)?.addedAt;
  return typeof t === 'number' && Number.isFinite(t) ? t : 0;
}

/**
 * Merge two word lists and apply deletions.
 *
 * Per entry the newer `addedAt` wins, which is the "union of ids, latest-wins
 * per item" strategy the sync rules prescribe for per-item records. An entry
 * survives a tombstone only if it was added after that deletion.
 */
export function mergeCustomWords(
  local: unknown[],
  remote: unknown[],
  tombs: Tombstones = {},
): CustomWord[] {
  const byKey = new Map<string, CustomWord>();
  for (const w of [...(remote || []), ...(local || [])]) {
    if (!isEntry(w)) continue;
    const key = wordKey(w);
    const addedAt = entryTime(w);
    // Deleted, and not re-added since — drop it.
    if (isTombstoned(key, addedAt, tombs)) continue;
    const seen = byKey.get(key);
    // Entries are stored exactly as found. Normalising them here (stamping a
    // default addedAt, say) would rewrite every legacy entry in the notebook and
    // push the rewrite to Firestore on the next snapshot.
    if (!seen || addedAt > entryTime(seen)) byKey.set(key, w);
  }
  return [...byKey.values()];
}
