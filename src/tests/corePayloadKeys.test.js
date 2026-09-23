/**
 * corePayloadKeys — the /api/content/core key list is written down once
 * (sweep 51, 2026-09-23).
 *
 * Fourth run at sweep 48's question, and this one was already NAMED in
 * CLAUDE.md: "Three copies of the payload key list must agree: core.js KEYS,
 * core.test.js ALL_KEYS, and generate-content-etags.mjs CORE_KEYS (the etag
 * must move when the payload does)." Knowing they must agree is not a
 * mechanism, so the first thing was to measure whether they did.
 *
 * THEY DID NOT.
 *
 *     endpoint  KEYS        32
 *     etags     CORE_KEYS   32
 *     test      ALL_KEYS    31   ← missing CULTURE_DEEP_DIVES
 *
 * So the test's "every export is present" assertion covered **31 of the 32 keys
 * the endpoint actually serves**, and the missing one is the payload for the 24
 * culture deep-dive essays. Drop `CULTURE_DEEP_DIVES` from the endpoint and the
 * suite stays green while `CultureDeepDiveScreen` receives nothing.
 *
 * WHICH COPY WENT STALE IS THE PATTERN, not an accident: the endpoint and the
 * etag generator are edited when a key is added, because nothing works
 * otherwise. The test is the copy with no reason to change — so it is the one
 * that silently stops covering what it names.
 *
 * Its title said "all 27 named exports" while the list held 31, which is the
 * nav-table shape inside a test: a number that was right when written and was
 * never moved with the code.
 *
 * `_data/core.js` now holds `CORE_PAYLOAD_KEYS` and all three read it. The etag
 * was re-generated afterwards and is UNCHANGED (`core(1a4e3e6f…)` before and
 * after), which is the check that this is a de-duplication and not a payload
 * change.
 *
 * WHAT DERIVATION DOES NOT BUY, stated because the mutation showed it. Removing
 * a key from the shared array now removes it from the endpoint's assertion too,
 * so the endpoint test stays green — measured: dropping `CULTURE_DEEP_DIVES`
 * fails ONE test here and NONE there. That is the honest trade. A hand-written
 * copy catches REMOVALS (it keeps asserting a key that has gone) and misses
 * ADDITIONS; a derived one is the other way round, and drift was the live
 * failure. The removal side is covered here by NAMING `CULTURE_DEEP_DIVES` —
 * a key with a known consumer (`CultureDeepDiveScreen`) and the one that was
 * actually unguarded — and by requiring every listed key to have an export
 * behind it. Neither half is claimed to be a general removal guard; that would
 * need the consumer side, which `contentShapeSweep` owns.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as CORE from '../../functions/api/content/_data/core.js';

// Literal paths, read once: a `read(path)` helper trips the security plugin's
// non-literal-fs-filename rule, and suppressing a real rule to keep a helper is
// the wrong trade in a repo whose CI runs with --max-warnings=0.
const ENDPOINT = readFileSync(resolve(__dirname, '../../functions/api/content/core.js'), 'utf8');
const GENERATOR = readFileSync(
  resolve(__dirname, '../../scripts/generate-content-etags.mjs'),
  'utf8',
);
const TEST = readFileSync(
  resolve(__dirname, '../../functions/api/content/__tests__/core.test.js'),
  'utf8',
);

/** Strip line comments so a literal list cannot hide behind a comment line. */
const stripComments = (src) =>
  src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');

describe('the key list is one array', () => {
  it('the subject is not empty — a rename would otherwise pass silently', () => {
    expect(Array.isArray(CORE.CORE_PAYLOAD_KEYS)).toBe(true);
    expect(CORE.CORE_PAYLOAD_KEYS.length).toBeGreaterThanOrEqual(30);
  });

  it('every key names a real export — the behavioural half', () => {
    // A key in the list with nothing behind it ships `undefined` to every
    // client, which is the failure a list-vs-list comparison cannot see.
    const missing = CORE.CORE_PAYLOAD_KEYS.filter((k) => CORE[k] === undefined);
    expect(missing, `no export for: ${missing.join(', ')}`).toEqual([]);
  });

  it('CULTURE_DEEP_DIVES is in it — the key the stale copy lacked', () => {
    expect(CORE.CORE_PAYLOAD_KEYS).toContain('CULTURE_DEEP_DIVES');
  });

  it('holds no duplicates', () => {
    expect(new Set(CORE.CORE_PAYLOAD_KEYS).size).toBe(CORE.CORE_PAYLOAD_KEYS.length);
  });
});

describe('all three readers derive rather than restate', () => {
  it.each([
    ['the endpoint', ENDPOINT, /const KEYS = CORE\.CORE_PAYLOAD_KEYS;/],
    ['the etag generator', GENERATOR, /const CORE_KEYS = coreMod\.CORE_PAYLOAD_KEYS;/],
    ['the endpoint test', TEST, /const ALL_KEYS = CORE_PAYLOAD_KEYS;/],
  ])('%s reads the shared array', (_label, src, pattern) => {
    expect(src).toMatch(pattern);
  });

  it.each([
    ['the endpoint', ENDPOINT],
    ['the etag generator', GENERATOR],
    ['the endpoint test', TEST],
  ])('%s declares no literal list of its own', (label, src) => {
    // Comments are stripped FIRST so the match is a plain `[ 'V',` — the
    // comment-tolerant version of this pattern nested a quantifier and the
    // security plugin was right to flag it.
    expect(
      /\[\s*'V',/.test(stripComments(src)),
      `${label} has a hand-written key list again. Three copies of this list ` +
        `had already diverged by one key, and the one that went stale was the ` +
        `test — the copy nobody has to edit for the app to work.`,
    ).toBe(false);
  });

  it('no stale count survives in the test name', () => {
    expect(
      /all \d+ named exports/.test(TEST),
      'The test title claimed "all 27 named exports" while asserting 31.',
    ).toBe(false);
  });
});
