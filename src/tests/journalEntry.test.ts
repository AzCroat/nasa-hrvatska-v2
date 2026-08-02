/**
 * journalEntry.test.ts — the journal's shape contract.
 *
 * Four writers disagreed on the entry shape and a fifth (the remote merge) keyed
 * on a sixth shape nothing produced, which deleted every saved word on the next
 * sync. These pin the normalizer that now sits between them.
 */
import { describe, it, expect } from 'vitest';
import { normalizeJournalEntry, normalizeJournal, mergeJournals } from '../lib/journalEntry';

describe('normalizeJournalEntry', () => {
  it('passes through the canonical { hr, en } shape', () => {
    expect(normalizeJournalEntry({ hr: 'kuća', en: 'house' })).toEqual({ hr: 'kuća', en: 'house' });
  });

  it('accepts the AIConversation tooltip shape { w, t, added }', () => {
    expect(normalizeJournalEntry({ w: 'more', t: 'sea', added: 42 })).toEqual({
      hr: 'more',
      en: 'sea',
      date: 42,
    });
  });

  it('accepts { word, translation } — the shape the old merge assumed', () => {
    // No writer produced it, but a document written by another client might.
    expect(normalizeJournalEntry({ word: 'pas', translation: 'dog' })).toEqual({
      hr: 'pas',
      en: 'dog',
    });
  });

  it('returns null when there is no usable Croatian word', () => {
    expect(normalizeJournalEntry({ en: 'orphan' })).toBeNull();
    expect(normalizeJournalEntry({ hr: '   ' })).toBeNull();
    expect(normalizeJournalEntry(null)).toBeNull();
    expect(normalizeJournalEntry('kuća')).toBeNull();
    expect(normalizeJournalEntry({ hr: 5 })).toBeNull();
  });

  it('tolerates a missing translation rather than dropping the word', () => {
    expect(normalizeJournalEntry({ hr: 'kuća' })).toEqual({ hr: 'kuća', en: '' });
  });
});

describe('normalizeJournal', () => {
  it('drops unusable entries and keeps the rest', () => {
    expect(normalizeJournal([{ hr: 'a', en: '1' }, null, { en: 'x' }, { w: 'b', t: '2' }])).toEqual(
      [
        { hr: 'a', en: '1' },
        { hr: 'b', en: '2' },
      ],
    );
  });

  it('returns [] for a non-array', () => {
    expect(normalizeJournal(null)).toEqual([]);
    expect(normalizeJournal({ hr: 'a' })).toEqual([]);
  });
});

describe('mergeJournals', () => {
  it('unions both sides keyed on hr', () => {
    const out = mergeJournals([{ hr: 'a', en: '1' }], [{ hr: 'b', en: '2' }]);
    expect(new Set(out.map((e) => e.hr))).toEqual(new Set(['a', 'b']));
  });

  it('never loses a local word to an empty remote — the regression', () => {
    expect(mergeJournals([{ hr: 'kuća', en: 'house' }], [])).toHaveLength(1);
  });

  it('never loses a remote word on a fresh device', () => {
    expect(mergeJournals([], [{ hr: 'kuća', en: 'house' }])).toHaveLength(1);
  });

  it('lets the local copy win a conflict, preserving edits made on this device', () => {
    const out = mergeJournals([{ hr: 'kuća', en: 'my note' }], [{ hr: 'kuća', en: 'house' }]);
    expect(out).toHaveLength(1);
    expect(out[0]!.en).toBe('my note');
  });

  it('merges across shapes — a tooltip word and an { hr, en } word are one set', () => {
    const out = mergeJournals([{ w: 'more', t: 'sea' }], [{ hr: 'more', en: 'sea' }]);
    expect(out).toHaveLength(1);
  });
});
