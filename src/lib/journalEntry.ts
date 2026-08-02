/**
 * journalEntry — one shape for the vocabulary journal, and one way to key it.
 *
 * WHY THIS EXISTS
 * ---------------
 * Four places save a word to the journal and they did not agree on a shape:
 *
 *   StoriesTab, AIConversationResult, the word scanner   → { hr, en }
 *   AIConversation's tap-a-word tooltip                  → { w, t, added }
 *
 * and a fifth place — the remote merge in applyRemoteProgress — keyed the union
 * on `entry.word`, a shape NOTHING has ever written. Every entry therefore
 * failed its `if (e?.word)` filter, the merge produced an empty array, and that
 * empty array overwrote `uJournal` and replaced React state. The next progress
 * snapshot pushed `journal: []` to Firestore, so the loss propagated to the
 * cloud and to every other device. Sync runs every two minutes, so a saved word
 * survived at most one cycle.
 *
 * It stayed invisible because the only place using `{ word, translation }` was
 * the merge's own unit test — the fixture encoded the merge's assumption rather
 * than what the app writes, so the test agreed with the bug.
 *
 * `hr` (the Croatian word) is the identity. It is what every reader displays
 * and what SRS keys on (VocabJournal marks cards with srMark(word.hr)), so it
 * is the only field that can serve as the dedup key.
 */

export interface JournalEntry {
  hr: string;
  en: string;
  date?: number;
}

/** Legacy shapes still present in stored blobs and in older remote documents. */
interface RawEntry {
  hr?: unknown;
  en?: unknown;
  date?: unknown;
  // AIConversation tooltip: w = word, t = translation, added = timestamp.
  w?: unknown;
  t?: unknown;
  added?: unknown;
  // The shape the old merge assumed. No writer produced it, but accept it so a
  // document written by any future/other client is not silently discarded.
  word?: unknown;
  translation?: unknown;
}

function str(v: unknown): string | null {
  return typeof v === 'string' && v.trim() ? v.trim() : null;
}

/**
 * Coerce any stored journal entry to the canonical shape.
 * Returns null when there is no usable Croatian word — the one field without
 * which an entry cannot be displayed, deduped or sent to SRS.
 */
export function normalizeJournalEntry(raw: unknown): JournalEntry | null {
  if (!raw || typeof raw !== 'object') return null;
  const e = raw as RawEntry;
  const hr = str(e.hr) ?? str(e.w) ?? str(e.word);
  if (!hr) return null;
  const en = str(e.en) ?? str(e.t) ?? str(e.translation) ?? '';
  const date =
    typeof e.date === 'number' ? e.date : typeof e.added === 'number' ? e.added : undefined;
  return date === undefined ? { hr, en } : { hr, en, date };
}

/** Normalize a whole list, dropping entries with no usable word. */
export function normalizeJournal(raw: unknown): JournalEntry[] {
  if (!Array.isArray(raw)) return [];
  return raw.map(normalizeJournalEntry).filter((e): e is JournalEntry => e !== null);
}

/**
 * Union two journals, keyed on `hr`.
 *
 * Local is applied second so a word edited on this device wins over an older
 * remote copy — the same precedence the original merge intended. This is a
 * growing set: a word saved on either device must survive, which is why it is a
 * union rather than a latest-wins replace.
 */
export function mergeJournals(local: unknown, remote: unknown): JournalEntry[] {
  const byWord = new Map<string, JournalEntry>();
  for (const e of normalizeJournal(remote)) byWord.set(e.hr, e);
  for (const e of normalizeJournal(local)) byWord.set(e.hr, e);
  return Array.from(byWord.values());
}
