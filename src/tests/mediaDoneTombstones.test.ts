/**
 * mediaDoneTombstones.test.ts — un-ticking a media card must survive a sync.
 *
 * THE BUG
 * -------
 * `nh_media_done` is `{ mediaName: completedAt }`, and applyRemoteProgress
 * merged it as `{ ...remote, ...local }` — a union. Un-ticking an item removed
 * the key locally and the other device's copy put it straight back on the next
 * sync, so the toggle appeared not to work.
 *
 * Same shape as the My Words delete (#404), and fixed the same way: deletions
 * travel as their own additive record, so the union stays additive and the
 * never-reduce merge rule is untouched.
 *
 * WHY MEDIA QUALIFIES AND SAVED PHRASES DOES NOT
 * ----------------------------------------------
 * The mechanism needs a stable key and a per-entry timestamp. Media has both:
 * `m.name`, and the `Date.now()` stamped at completion. `nh_saved_phrases`
 * stores POSITIONAL INDICES into BAKA_PHRASES with no timestamps, so a tombstone
 * there would record "slot 4 was removed" — which means a different phrase the
 * moment that array is edited. It is deliberately not covered here.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  MEDIA_DONE_KEY,
  MEDIA_DONE_DELETED_KEY,
  parseMediaDone,
  mergeMediaDone,
} from '../lib/mediaDone';
import { mergeTombstones, parseTombstones, isTombstoned, MAX_TOMBSTONES } from '../lib/tombstones';

beforeEach(() => localStorage.clear());

describe('mergeMediaDone', () => {
  it('unions ticks from both devices when nothing was un-ticked', () => {
    const merged = mergeMediaDone({ a: 100 }, { b: 200 });
    expect(merged).toEqual({ a: 100, b: 200 });
  });

  it('keeps the later completion for an item ticked on both', () => {
    expect(mergeMediaDone({ a: 500 }, { a: 100 }).a).toBe(500);
    expect(mergeMediaDone({ a: 100 }, { a: 500 }).a).toBe(500);
  });

  it('drops an item the learner un-ticked — the actual bug', () => {
    // Local un-ticked `a` at t=300; remote still has it completed at t=100.
    // The old union restored it.
    const merged = mergeMediaDone({}, { a: 100 }, { a: 300 });
    expect(merged.a).toBeUndefined();
  });

  it('keeps an item re-ticked after the un-tick', () => {
    // Re-ticking stamps a fresh Date.now(), which beats the tombstone. This is
    // what removes the need for a separate "undelete" record.
    const merged = mergeMediaDone({ a: 400 }, { a: 100 }, { a: 300 });
    expect(merged.a).toBe(400);
  });

  it('treats a same-millisecond tie as still deleted', () => {
    expect(mergeMediaDone({ a: 300 }, {}, { a: 300 }).a).toBeUndefined();
  });

  it('never resurrects an un-ticked item from the remote side', () => {
    const merged = mergeMediaDone({}, { a: 100, b: 200 }, { a: 999 });
    expect(Object.keys(merged)).toEqual(['b']);
  });

  it('survives corrupt input without throwing', () => {
    expect(() => mergeMediaDone(null, undefined)).not.toThrow();
    expect(mergeMediaDone('nope' as unknown, ['also nope'] as unknown)).toEqual({});
  });

  it('preserves a legacy `true` byte-identically', () => {
    // NOT merely "keeps something truthy". Rewriting `true` to a number would
    // look harmless — the UI reads `!!done[name]` — but it rewrites the
    // learner's stored data and the next snapshot pushes that to Firestore.
    // sync-round-trip.test.ts pins exact round-tripping; an early version of
    // this merge normalised the value and broke it.
    expect(mergeMediaDone({ a: true }, {})).toEqual({ a: true });
    expect(mergeMediaDone({}, { a: true })).toEqual({ a: true });
  });

  it('a remote `false` never overwrites a local completion', () => {
    // `false` is the absence of a completion, not a newer one.
    expect(mergeMediaDone({ v1: true }, { v1: false, v2: true })).toEqual({ v1: true, v2: true });
  });

  it('a real timestamp beats a legacy `true`', () => {
    expect(mergeMediaDone({ a: 900 }, { a: true }).a).toBe(900);
  });
});

describe('parseMediaDone', () => {
  it('rejects non-object input', () => {
    expect(parseMediaDone(null)).toEqual({});
    expect(parseMediaDone([1, 2])).toEqual({});
    expect(parseMediaDone('x')).toEqual({});
  });

  it('drops entries with no usable completion time', () => {
    expect(parseMediaDone({ a: 0, b: -5, c: 'zz', d: 100 })).toEqual({ d: 100 });
  });
});

describe('tombstones (shared with My Words)', () => {
  it('keeps the LATER deletion per key', () => {
    expect(mergeTombstones({ a: 100 }, { a: 500 })).toEqual({ a: 500 });
    expect(mergeTombstones({ a: 500 }, { a: 100 })).toEqual({ a: 500 });
  });

  it('is a union — a deletion known to only one device still applies', () => {
    expect(mergeTombstones({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('caps growth, keeping the newest deletions', () => {
    const many: Record<string, number> = {};
    for (let i = 0; i < MAX_TOMBSTONES + 50; i++) many['k' + i] = i + 1;
    const capped = mergeTombstones({}, many);
    expect(Object.keys(capped)).toHaveLength(MAX_TOMBSTONES);
    // Newest kept, oldest dropped.
    expect(capped['k' + (MAX_TOMBSTONES + 49)]).toBeDefined();
    expect(capped.k0).toBeUndefined();
  });

  it('isTombstoned treats an equal timestamp as deleted', () => {
    expect(isTombstoned('a', 100, { a: 100 })).toBe(true);
    expect(isTombstoned('a', 101, { a: 100 })).toBe(false);
    expect(isTombstoned('a', 0, {})).toBe(false);
  });

  it('parseTombstones tolerates a corrupt blob', () => {
    expect(parseTombstones({ a: 'x', b: 5, c: null })).toEqual({ b: 5 });
  });
});

describe('the chain is actually wired', () => {
  // A tombstone written but never synced, or synced but never applied, is the
  // same silent no-op as the bug it replaces. These match CALL SHAPES, not
  // identifier names — the comments at each site mention the same names, and a
  // name match would pass with the call deleted.
  const read = (f: string) => readFileSync(f, 'utf8');

  it('un-ticking records a tombstone', () => {
    const src = read('src/components/croatia/MediaCard.tsx');
    expect(src).toMatch(/else markMediaNotDone\(m\.name\)/);
    expect(src).toMatch(/recordTombstone\(tombs, id, Date\.now\(\)\)/);
    // And no longer does a bare local delete that the union would undo.
    expect(src).not.toMatch(/delete d\[m\.name\]/);
  });

  it('the snapshot carries the tombstones to Firestore', () => {
    expect(read('src/lib/progressSnapshot.ts')).toMatch(/nh_media_done_deleted: \(\(\) =>/);
  });

  it('the restore applies them', () => {
    const src = read('src/lib/applyRemoteProgress.ts');
    expect(src).toMatch(/mergeMediaDone\(lMD, fp\.nh_media_done, tombs\)/);
    expect(src).toMatch(/parseTombstones\(fp\.nh_media_done_deleted\)/);
    // The old union is gone.
    expect(src).not.toMatch(/\{ \.\.\.fp\.nh_media_done, \.\.\.lMD \}/);
  });

  it('keys used by writer, snapshot and restore are the same constants', () => {
    expect(MEDIA_DONE_KEY).toBe('nh_media_done');
    expect(MEDIA_DONE_DELETED_KEY).toBe('nh_media_done_deleted');
    // nh_-prefixed, so clearUserScopedStorage's prefix sweep wipes it on sign-out.
    expect(MEDIA_DONE_DELETED_KEY.startsWith('nh_')).toBe(true);
  });
});
