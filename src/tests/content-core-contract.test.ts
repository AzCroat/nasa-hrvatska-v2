/**
 * content-core-contract.test.ts — pins the lists that describe
 * /api/content/core and /api/content/grammar to each other.
 *
 * WHY (2026-07-25): the day's P0 was a content-boundary drift. Vocabulary `V`
 * moved server-side, data/content.tsx stopped re-exporting it, and eight
 * launchers in useScreenLauncher kept reading it off the client data barrel.
 * `undefined` there is not a type error and not a crash — it degrades to `{}`,
 * so every vocabulary pool in the app went silently empty and the Learn Path's
 * main lesson button did nothing for weeks.
 *
 * Three lists have to agree for that endpoint to work, and nothing checked that
 * they do:
 *
 *   1. KEYS in functions/api/content/core.js  — what the endpoint advertises
 *   2. the exports of functions/api/content/_data/core.js — what actually exists
 *   3. the Content interface in src/types/content.ts — what the client believes
 *
 * A name in (3) but not (1) is the V bug one layer up: TypeScript happily types
 * `content.X`, and at runtime it is `undefined`. A name in (1) but not (2) ships
 * a key the server drops on serialization. Neither produces an error anywhere.
 *
 * The lists are PARSED here, never restated. A test that hardcodes its own copy
 * of the key list cannot detect drift in the thing it is supposed to guard —
 * functions/api/content/__tests__/core.test.js has exactly that shape, which is
 * why this file exists alongside it rather than extending it.
 *
 * SCOPE, honestly: this catches drift between the endpoint, its data module and
 * the client type. It does NOT catch a consumer reading content from the wrong
 * SOURCE — that is what path-launch-vocab.test.tsx pins.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import * as CORE_DATA from '../../functions/api/content/_data/core.js';
import * as GRAMMAR_DATA from '../../functions/api/content/_data/grammar.js';

const root = resolve(__dirname, '../..');

/** Field names of an exported interface in src/types/content.ts. */
function interfaceFields(name: string): string[] {
  const src = readFileSync(resolve(root, 'src/types/content.ts'), 'utf8');
  const block = new RegExp(`export interface ${name} \\{([\\s\\S]*?)\\n\\}`).exec(src);
  if (!block) throw new Error(`could not locate the ${name} interface in types/content.ts`);
  return [...block[1]!.matchAll(/^\s*([A-Z][A-Z0-9_]*)\??\s*:/gm)].map((m) => m[1]!);
}

/** KEYS array literal from the endpoint — the list it advertises. */
function advertisedKeys(): string[] {
  const src = readFileSync(resolve(root, 'functions/api/content/core.js'), 'utf8');
  const block = /const KEYS = \[([\s\S]*?)\];/.exec(src);
  if (!block) throw new Error('could not locate the KEYS array in core.js');
  return [...block[1]!.matchAll(/'([A-Z][A-Z0-9_]*)'/g)].map((m) => m[1]!);
}

/**
 * Field names the grammar endpoint hand-assembles into its response body.
 *
 * Unlike core.js this endpoint has no KEYS array — buildBody() spells out
 * `GRAM: GRAMMAR.GRAM` fourteen times. That is MORE drift-prone, not less: a
 * renamed export in _data/grammar.js leaves `GRAMMAR.X` undefined, JSON drops
 * the key, and the client reads undefined with no error anywhere.
 */
function grammarServedPairs(): Array<{ key: string; ref: string }> {
  const src = readFileSync(resolve(root, 'functions/api/content/grammar.js'), 'utf8');
  const block = /data: \{([\s\S]*?)\n {4}\}/.exec(src);
  if (!block) throw new Error('could not locate the data object in grammar.js');
  // Capture BOTH sides. Reading only the key would miss the whole point: in
  // `PITCH_ACCENT: GRAMMAR.PITCHACCENT` the key is perfectly fine and the
  // reference is the typo, so a key-only check passes while the field ships
  // undefined. (Confirmed by mutation — a key-only version of this parser did
  // not fail on exactly that edit.)
  return [...block[1]!.matchAll(/^\s*([A-Z][A-Z0-9_]*)\s*:\s*GRAMMAR\.([A-Z][A-Z0-9_]*)/gm)].map(
    (m) => ({ key: m[1]!, ref: m[2]! }),
  );
}

const KEYS = advertisedKeys();
const FIELDS = interfaceFields('Content');
const GRAMMAR_PAIRS = grammarServedPairs();
const GRAMMAR_SERVED = GRAMMAR_PAIRS.map((p) => p.key);
const GRAMMAR_FIELDS = interfaceFields('Grammar');

describe('/api/content/core — the three lists agree', () => {
  it('the parsers actually found the lists (guards against a silent regex miss)', () => {
    expect(KEYS.length).toBeGreaterThan(25);
    expect(FIELDS.length).toBeGreaterThan(25);
  });

  it('every advertised KEY is really exported by _data/core.js', () => {
    const missing = KEYS.filter((k) => (CORE_DATA as Record<string, unknown>)[k] === undefined);
    expect(missing, `advertised but not exported: ${missing.join(', ')}`).toEqual([]);
  });

  it('every field the client type declares is advertised by the endpoint', () => {
    // A field here but not in KEYS types as present and arrives undefined — the
    // exact shape of the V regression.
    const undelivered = FIELDS.filter((f) => !KEYS.includes(f));
    expect(undelivered, `declared in Content but never sent: ${undelivered.join(', ')}`).toEqual(
      [],
    );
  });

  it('every advertised KEY is declared in the client type', () => {
    const undeclared = KEYS.filter((k) => !FIELDS.includes(k));
    expect(undeclared, `sent but missing from Content: ${undeclared.join(', ')}`).toEqual([]);
  });
});

describe('/api/content/core — every key carries real content', () => {
  it.each(KEYS)('%s is non-empty', (key) => {
    const value = (CORE_DATA as Record<string, unknown>)[key];
    expect(value, `${key} is undefined`).toBeDefined();
    expect(value, `${key} is null`).not.toBeNull();
    if (Array.isArray(value)) {
      expect(value.length, `${key} is an empty array`).toBeGreaterThan(0);
    } else if (typeof value === 'object') {
      expect(Object.keys(value as object).length, `${key} is an empty object`).toBeGreaterThan(0);
    } else {
      // A function (or any non-serializable value) becomes undefined on the wire.
      expect(typeof value, `${key} is a ${typeof value}, which does not survive JSON`).toBe(
        'object',
      );
    }
  });

  it('the whole payload survives a JSON round-trip without losing a key', () => {
    const body: Record<string, unknown> = {};
    for (const k of KEYS) body[k] = (CORE_DATA as Record<string, unknown>)[k];
    const roundTripped = JSON.parse(JSON.stringify(body)) as Record<string, unknown>;
    const lossy = KEYS.filter((k) => JSON.stringify(roundTripped[k]) !== JSON.stringify(body[k]));
    expect(lossy, `changed shape through JSON: ${lossy.join(', ')}`).toEqual([]);
  });
});

describe('/api/content/grammar — the same three lists agree', () => {
  it('the parsers actually found the lists', () => {
    expect(GRAMMAR_SERVED.length).toBeGreaterThan(10);
    expect(GRAMMAR_FIELDS.length).toBeGreaterThan(10);
  });

  it('every GRAMMAR.X that buildBody() references is really exported', () => {
    const broken = GRAMMAR_PAIRS.filter(
      ({ ref }) => (GRAMMAR_DATA as Record<string, unknown>)[ref] === undefined,
    ).map(({ key, ref }) => `${key} -> GRAMMAR.${ref}`);
    expect(broken, `references a non-existent export: ${broken.join(', ')}`).toEqual([]);
  });

  it('no field is wired to a differently-named export (silent mis-mapping)', () => {
    const crossed = GRAMMAR_PAIRS.filter(({ key, ref }) => key !== ref).map(
      ({ key, ref }) => `${key} -> GRAMMAR.${ref}`,
    );
    expect(crossed, `key does not match the export it reads: ${crossed.join(', ')}`).toEqual([]);
  });

  it('the Grammar type and the response body describe the same fields', () => {
    const undelivered = GRAMMAR_FIELDS.filter((f) => !GRAMMAR_SERVED.includes(f));
    const undeclared = GRAMMAR_SERVED.filter((k) => !GRAMMAR_FIELDS.includes(k));
    expect(undelivered, `declared in Grammar but never sent: ${undelivered.join(', ')}`).toEqual(
      [],
    );
    expect(undeclared, `sent but missing from Grammar: ${undeclared.join(', ')}`).toEqual([]);
  });

  it.each(GRAMMAR_SERVED)('%s is non-empty', (key) => {
    const value = (GRAMMAR_DATA as Record<string, unknown>)[key];
    expect(value, `${key} is undefined`).toBeDefined();
    expect(typeof value, `${key} is a ${typeof value}, which does not survive JSON`).toBe('object');
    const size = Array.isArray(value)
      ? value.length
      : Object.keys(value as Record<string, unknown>).length;
    expect(size, `${key} is empty`).toBeGreaterThan(0);
  });
});
