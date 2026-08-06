/**
 * savedPhrases.test.ts — bookmarks keyed on the phrase, not its position.
 *
 * THE BUG
 * -------
 * `nh_saved_phrases` stored POSITIONAL INDICES. HeritageModeScreen rendered
 * `BAKA_PHRASES.map((p, i) => ...)` and saved the loop counter, so what was
 * recorded was "slot 4", not "this phrase". Insert one phrase near the top and
 * every bookmark below it silently points at its neighbour — the learner's list
 * rewrites itself with no error and nothing to notice until they open it.
 *
 * The entries have carried a unique stable key all along (`hr`); it was simply
 * unused. Re-keying also unblocks the deletion fix: a tombstone on an index
 * records "slot 4 was removed", which means a different phrase after any edit,
 * so un-saving could not be made to survive a sync until this was fixed.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  SAVED_PHRASES_KEY,
  SAVED_PHRASES_DELETED_KEY,
  MIGRATED_AT,
  parseSavedPhrases,
  mergeSavedPhrases,
} from '../lib/savedPhrases';
import { BAKA_PHRASES } from '../data/bakaPhrases';

const P = [...BAKA_PHRASES];

describe('BAKA_PHRASES is fit to be keyed on', () => {
  it('every entry has a non-empty hr', () => {
    for (const p of P) expect(typeof p.hr === 'string' && p.hr.trim().length > 0).toBe(true);
  });

  it('hr values are unique — they are now the storage key', () => {
    const hrs = P.map((p) => p.hr);
    expect(new Set(hrs).size).toBe(hrs.length);
  });

  it('non-vacuity: the list is actually populated', () => {
    expect(P.length).toBeGreaterThanOrEqual(10);
  });
});

describe('migration from positional indices', () => {
  it('resolves stored indices through the current array', () => {
    const migrated = parseSavedPhrases([0, 2], P);
    expect(Object.keys(migrated)).toEqual([P[0]!.hr, P[2]!.hr]);
  });

  it('stamps migrated entries as the oldest possible save', () => {
    // They have no real timestamp, and pretending otherwise would let a migrated
    // entry outrank a genuine later un-save.
    expect(parseSavedPhrases([1], P)[P[1]!.hr]).toBe(MIGRATED_AT);
  });

  it('drops an index outside the array rather than guessing', () => {
    // The phrase it referred to is gone; any other index would silently bookmark
    // a different phrase, which is the bug this change exists to end.
    expect(parseSavedPhrases([999, -1], P)).toEqual({});
  });

  it('accepts the already-migrated map shape unchanged', () => {
    const now = Date.now();
    expect(parseSavedPhrases({ [P[0]!.hr]: now }, P)).toEqual({ [P[0]!.hr]: now });
  });

  it('accepts an array of phrase strings (partially migrated client)', () => {
    expect(parseSavedPhrases([P[3]!.hr], P)).toEqual({ [P[3]!.hr]: MIGRATED_AT });
  });

  it('survives corrupt input without throwing', () => {
    expect(() => parseSavedPhrases(null, P)).not.toThrow();
    expect(parseSavedPhrases('nope', P)).toEqual({});
    expect(parseSavedPhrases([null, undefined, {}], P)).toEqual({});
  });
});

describe('mergeSavedPhrases', () => {
  const A = P[0]!.hr;
  const B = P[1]!.hr;

  it('unions bookmarks from both devices', () => {
    expect(mergeSavedPhrases({ [A]: 100 }, { [B]: 200 }, P)).toEqual({ [A]: 100, [B]: 200 });
  });

  it('migrates BOTH sides — a remote still on the old build sends indices', () => {
    // Merging raw would mix "slot 0" and the phrase text as separate keys.
    const merged = mergeSavedPhrases({}, [0], P);
    expect(merged).toEqual({ [A]: MIGRATED_AT });
  });

  it('does not double-count a phrase saved as an index remotely and a key locally', () => {
    const merged = mergeSavedPhrases({ [A]: 500 }, [0], P);
    expect(Object.keys(merged)).toEqual([A]);
    expect(merged[A]).toBe(500);
  });

  it('drops a phrase the learner un-saved — the deletion fix', () => {
    expect(mergeSavedPhrases({}, { [A]: 100 }, P, { [A]: 300 })[A]).toBeUndefined();
  });

  it('keeps a phrase re-saved after the un-save', () => {
    expect(mergeSavedPhrases({ [A]: 400 }, { [A]: 100 }, P, { [A]: 300 })[A]).toBe(400);
  });

  it('a migrated entry cannot outrank a real un-save', () => {
    // MIGRATED_AT is 1, so an old index-shaped bookmark never beats a tombstone.
    expect(mergeSavedPhrases([0], {}, P, { [A]: 50 })[A]).toBeUndefined();
  });

  it('treats a same-millisecond tie as still un-saved', () => {
    expect(mergeSavedPhrases({ [A]: 300 }, {}, P, { [A]: 300 })[A]).toBeUndefined();
  });
});

describe('the chain is actually wired', () => {
  // Call shapes, not identifier names — the comments at each site name the same
  // functions, so a name match would pass with the call deleted.
  const read = (f: string) => readFileSync(f, 'utf8');
  const SCREEN = 'src/components/learn/HeritageModeScreen.tsx';

  it('the screen keys on the phrase, never the index', () => {
    const src = read(SCREEN);
    expect(src).toMatch(/const isSaved = !!savedPhrases\[p\.hr\]/);
    expect(src).toMatch(/next\[p\.hr\] = Date\.now\(\)/);
    expect(src).toMatch(/delete next\[p\.hr\]/);
    // The index-keyed Set is gone.
    expect(src).not.toMatch(/savedPhrases\.has\(i\)/);
    expect(src).not.toMatch(/next\.(add|delete)\(i\)/);
  });

  it('un-saving records a tombstone', () => {
    expect(read(SCREEN)).toMatch(/recordTombstone\(tombs, p\.hr, Date\.now\(\)\)/);
  });

  it('the snapshot carries bookmarks and their deletions', () => {
    const src = read('src/lib/progressSnapshot.ts');
    expect(src).toMatch(/nh_saved_phrases_deleted: \(\(\) =>/);
    // Reads the map shape now, not the array.
    expect(src).toMatch(/lsGet\('nh_saved_phrases'\) \|\| '\{\}'/);
  });

  it('the restore migrates and applies them', () => {
    const src = read('src/lib/applyRemoteProgress.ts');
    expect(src).toMatch(
      /mergeSavedPhrases\(lSP, fp\.nh_saved_phrases, LEGACY_SAVED_PHRASE_INDEX, tombs\)/,
    );
    expect(src).toMatch(/parseTombstones\(fp\.nh_saved_phrases_deleted\)/);
    // The old index union is gone.
    expect(src).not.toMatch(/new Set\(\[\.\.\.lSP, \.\.\.fp\.nh_saved_phrases\]\)/);
  });

  it('keys are shared constants and sweepable on sign-out', () => {
    expect(SAVED_PHRASES_KEY).toBe('nh_saved_phrases');
    expect(SAVED_PHRASES_DELETED_KEY).toBe('nh_saved_phrases_deleted');
    expect(SAVED_PHRASES_DELETED_KEY.startsWith('nh_')).toBe(true);
  });
});
