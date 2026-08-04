/**
 * customWords.test.ts — a deleted word must stay deleted.
 *
 * THE BUG
 * -------
 * MyWordsScreen has an explicit trash button, but `applyRemoteProgress` unioned
 * the local and remote word lists. Deleting on one device removed it locally and
 * the other device's copy put it straight back on the next sync, so a deliberate
 * delete silently undid itself. The union is not the mistake — it is the
 * additive-merge rule the whole sync layer depends on — so the fix is a deletion
 * record that merges additively too, not an exception to the rule.
 *
 * The same block also deduplicated on `w?.word || JSON.stringify(w)`, and a
 * CustomWord has no `word` field; it has `hr`. Every key therefore fell through
 * to the JSON of the entire object, `addedAt` included, so the same word saved on
 * two devices produced two entries instead of one.
 *
 * WHY NOT INTERSECTION
 * --------------------
 * The obvious alternative — prune whatever the other side no longer has — has
 * already failed here. `fbWatchProgress` used to do exactly that for favourites
 * and "silently dropped offline-added favourites when another device's toggle was
 * more recent" (see the NOTE in firebase.ts). Intersection cannot tell a deletion
 * from an addition it has not seen yet. A tombstone can, which is the whole point
 * of these tests.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  wordKey,
  parseTombstones,
  mergeTombstones,
  mergeCustomWords,
  MAX_TOMBSTONES,
  type CustomWord,
} from '../lib/customWords';

const w = (hr: string, en: string, addedAt: number): CustomWord => ({ hr, en, addedAt });
const keys = (list: CustomWord[]) => list.map((x) => `${x.hr}|${x.en}`).sort();

describe('wordKey — entry identity', () => {
  it('is hr + en, normalized', () => {
    expect(wordKey(w('kuća', 'house', 1))).toBe('kuća|house');
    expect(wordKey({ hr: '  Kuća ', en: 'HOUSE' })).toBe('kuća|house');
  });

  it('keeps two meanings of one word distinct', () => {
    // There is no edit UI, so two entries sharing `hr` are two things the learner
    // deliberately saved. Keying on `hr` alone would delete one of them during an
    // ordinary merge.
    expect(wordKey(w('sat', 'hour', 1))).not.toBe(wordKey(w('sat', 'clock', 1)));
  });

  it('survives malformed entries without throwing', () => {
    expect(() => wordKey(null)).not.toThrow();
    expect(() => wordKey({} as CustomWord)).not.toThrow();
  });
});

describe('mergeTombstones', () => {
  it('unions both sides', () => {
    expect(mergeTombstones({ 'a|a': 10 }, { 'b|b': 20 })).toEqual({ 'a|a': 10, 'b|b': 20 });
  });

  it('keeps the LATER deletion when both sides know the key', () => {
    // Later wins so a deletion made after a re-add still takes effect.
    expect(mergeTombstones({ 'a|a': 10 }, { 'a|a': 99 })['a|a']).toBe(99);
    expect(mergeTombstones({ 'a|a': 99 }, { 'a|a': 10 })['a|a']).toBe(99);
  });

  it('is order-independent — merging either way gives the same result', () => {
    const a = { 'x|x': 5, 'y|y': 30 };
    const b = { 'y|y': 10, 'z|z': 1 };
    expect(mergeTombstones(a, b)).toEqual(mergeTombstones(b, a));
  });

  it('caps the record, keeping the newest deletions', () => {
    // The progress blob is capped at 200 KB by Firestore rules and a breach fails
    // the whole atomic write, so this cannot grow without limit.
    const many: Record<string, number> = {};
    for (let i = 0; i < MAX_TOMBSTONES + 50; i++) many[`k${i}|e`] = i + 1;
    const capped = mergeTombstones(many, {});
    expect(Object.keys(capped)).toHaveLength(MAX_TOMBSTONES);
    expect(capped['k0|e']).toBeUndefined(); // oldest dropped
    expect(capped[`k${MAX_TOMBSTONES + 49}|e`]).toBe(MAX_TOMBSTONES + 50); // newest kept
  });

  it('parseTombstones rejects anything that is not a positive timestamp', () => {
    expect(parseTombstones({ 'a|a': 5, 'b|b': 'nope', 'c|c': 0, 'd|d': -1 })).toEqual({ 'a|a': 5 });
    for (const junk of [null, undefined, [], 'str', 42]) expect(parseTombstones(junk)).toEqual({});
  });
});

describe('mergeCustomWords', () => {
  it('unions both sides when nothing is deleted', () => {
    const merged = mergeCustomWords([w('pas', 'dog', 1)], [w('mačka', 'cat', 2)]);
    expect(keys(merged)).toEqual(['mačka|cat', 'pas|dog']);
  });

  it('deduplicates the same entry saved on two devices', () => {
    // The old key was `w.word || JSON.stringify(w)`; CustomWord has no `word`, so
    // differing addedAt made these two separate entries.
    const merged = mergeCustomWords([w('pas', 'dog', 100)], [w('pas', 'dog', 200)]);
    expect(merged).toHaveLength(1);
    expect(merged[0]!.addedAt).toBe(200); // newer entry wins
  });

  it('drops a deleted word — the actual bug', () => {
    // Local deleted it (so it is absent locally and recorded in the tombstone);
    // remote still holds its copy. It must not come back.
    const merged = mergeCustomWords([], [w('pas', 'dog', 100)], { 'pas|dog': 150 });
    expect(merged).toEqual([]);
  });

  it('keeps a word re-added after its deletion', () => {
    // Survival is a timestamp comparison, so re-adding needs no undelete record.
    const merged = mergeCustomWords([w('pas', 'dog', 300)], [], { 'pas|dog': 150 });
    expect(keys(merged)).toEqual(['pas|dog']);
  });

  it('deletes only the entry that was deleted, not its homograph', () => {
    const merged = mergeCustomWords([], [w('sat', 'hour', 10), w('sat', 'clock', 10)], {
      'sat|hour': 50,
    });
    expect(keys(merged)).toEqual(['sat|clock']);
  });

  it('never drops an addition the other side has not seen — the intersection trap', () => {
    // Remote has no idea this word exists and carries no tombstone for it. An
    // intersection-style prune would delete it; the tombstone must not.
    const merged = mergeCustomWords([w('offline', 'added while offline', 5)], [], {});
    expect(keys(merged)).toEqual(['offline|added while offline']);
  });

  it('drops primitives but never an object it cannot parse', () => {
    // An entry this merge cannot read is still the learner's data, and the next
    // snapshot would push the pruned list to Firestore — so an unreadable entry
    // must be carried, not discarded. Only non-objects go.
    const merged = mergeCustomWords(
      [null, undefined, 42, 'str', {}, { en: 'no hr' }] as unknown[],
      [w('pas', 'dog', 1)],
    );
    expect(merged).toHaveLength(3); // {}, {en:'no hr'}, and pas|dog
    expect(keys(merged)).toContain('pas|dog');
  });

  it('preserves the legacy {word, meaning} shape', () => {
    // The shape the OLD merge keyed on (`w?.word`). Real notebooks may still
    // hold these; dropping them would erase them from the cloud on next sync.
    const legacy = { word: 'kuća', meaning: 'house' } as unknown;
    const merged = mergeCustomWords([legacy], []);
    expect(merged).toEqual([legacy]);
    // and it shares an identity with the modern shape of the same entry
    expect(wordKey(legacy as never)).toBe(wordKey(w('Kuća', 'House', 1)));
  });

  it('returns entries byte-identical — no field is added or rewritten', () => {
    // Stamping a default addedAt would rewrite every legacy entry and push the
    // rewrite to Firestore. Round-trip equality is what sync-round-trip asserts.
    const entry = { word: 'kruh', hr: 'kruh', en: 'bread' } as unknown;
    expect(mergeCustomWords([entry], [])[0]).toEqual(entry);
  });
});

describe('the round trip a learner actually performs', () => {
  /** One sync: each side merges the union of both, with the union of tombstones. */
  function sync(
    a: { words: CustomWord[]; tombs: Record<string, number> },
    b: { words: CustomWord[]; tombs: Record<string, number> },
  ) {
    const tombs = mergeTombstones(a.tombs, b.tombs);
    return {
      words: mergeCustomWords(a.words, b.words, tombs),
      tombs,
    };
  }

  it('delete on the phone stays deleted after the laptop syncs back', () => {
    const phone = { words: [w('pas', 'dog', 100), w('mačka', 'cat', 100)], tombs: {} };
    const laptop = { words: [w('pas', 'dog', 100), w('mačka', 'cat', 100)], tombs: {} };

    // Learner taps the trash on the phone.
    const afterDelete = {
      words: phone.words.filter((x) => x.hr !== 'pas'),
      tombs: { 'pas|dog': 200 },
    };

    // Phone pushes, laptop pulls.
    const laptopAfter = sync(laptop, afterDelete);
    expect(keys(laptopAfter.words)).toEqual(['mačka|cat']);

    // And the laptop pushing back does not resurrect it on the phone — the
    // failure the learner actually saw.
    const phoneAfter = sync(afterDelete, laptopAfter);
    expect(keys(phoneAfter.words)).toEqual(['mačka|cat']);
  });

  it('converges no matter which device syncs first', () => {
    const a = { words: [w('pas', 'dog', 100)], tombs: { 'pas|dog': 200 } };
    const b = { words: [w('pas', 'dog', 100), w('nov', 'new', 300)], tombs: {} };
    expect(keys(sync(a, b).words)).toEqual(keys(sync(b, a).words));
    expect(keys(sync(a, b).words)).toEqual(['nov|new']);
  });

  it('re-adding on one device brings it back everywhere', () => {
    const deleted = { words: [] as CustomWord[], tombs: { 'pas|dog': 200 } };
    const readded = { words: [w('pas', 'dog', 500)], tombs: { 'pas|dog': 200 } };
    expect(keys(sync(deleted, readded).words)).toEqual(['pas|dog']);
  });
});

/**
 * The merge above is worth nothing if the three call sites are not wired to it.
 * A tombstone that is written but never synced, or synced but never applied, is
 * the same silent no-op as the bug it replaces — this repo has shipped that
 * shape more than once.
 *
 * Matched on call shapes rather than names, because the comments at each site
 * mention these identifiers and a name match would pass with the call deleted.
 */
describe('the deletion record is wired end to end', () => {
  const read = (f: string) => readFileSync(f, 'utf8');

  it('the trash button records the deletion before dropping the word', () => {
    const src = read('src/components/practice/MyWordsScreen.tsx');
    expect(src).toMatch(/if \(removed\) recordDeletion\(removed\)/);
    expect(src).toMatch(/localStorage\.setItem\(CUSTOM_WORDS_DELETED_KEY/);
  });

  it('the snapshot carries it to Firestore', () => {
    expect(read('src/lib/progressSnapshot.ts')).toMatch(/nh_custom_words_deleted:\s*\(\(\)/);
  });

  it('the restore path reads it and feeds it to the merge', () => {
    const src = read('src/lib/applyRemoteProgress.ts');
    expect(src).toMatch(/parseTombstones\(fp\.nh_custom_words_deleted\)/);
    expect(src).toMatch(/mergeCustomWords\(lCW, remoteWords, tombs\)/);
    // The old union — dedup on a field CustomWord does not have — must be gone.
    expect(src).not.toMatch(/w\?\.word \|\| JSON\.stringify\(w\)/);
  });

  it('a remote payload of pure deletions still applies', () => {
    // The old guard was `nh_custom_words.length > 0`, which would skip a sync
    // that carried only a deletion — the exact case this feature exists for.
    const src = read('src/lib/applyRemoteProgress.ts');
    expect(src).toMatch(/remoteWords\.length > 0 \|\| Object\.keys\(remoteTombs\)\.length > 0/);
  });
});
