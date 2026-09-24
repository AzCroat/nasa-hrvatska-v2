/**
 * e2eContentFixtureMatchesServer.test.ts — the E2E content fixture is a FOURTH
 * copy of the server's payload projections, and until now one key was checked.
 *
 * THE CLASS
 * ---------
 * Under `vite preview` the Cloudflare Functions are not served, so
 * `e2e/fixtures/content-fixture.js` re-builds each `/api/content/*` payload and
 * Playwright replies with it. The fixture imports the REAL `_data` modules, so
 * the inner shapes cannot drift — but the PROJECTIONS are hand-mirrored field
 * lists, four of them, and they are exercised only by E2E while the server side
 * is exercised by production. Nothing compared them.
 *
 * A fixture that omits a key is the dangerous direction and it is SILENT: the
 * consumer optional-chains, renders its degrade path, and the spec passes. A
 * fixture that carries a key the server does not send is worse — E2E then
 * proves a field production never ships.
 *
 * WHAT IT FOUND (2026-09-24)
 * --------------------------
 * `CULTURE_DEEP_DIVES` was served by `/api/content/core` and ABSENT from the
 * fixture, so under E2E every `CultureDeepDiveScreen` route rendered its
 * stale-payload hint ("New culture essays are on their way…") instead of the
 * essays — 24 pool entries covered only in their degrade state.
 *
 * It is the SAME KEY the 2026-09-23 consolidation was about. That change found
 * three hand-written copies of the core key list, one of which was missing
 * exactly this key, and replaced them with `CORE_PAYLOAD_KEYS`. It recorded the
 * fixture as "a genuinely separate carrier, still checked as a file" — and the
 * file check was one `toMatch(/\bV_LEVELS,/)`, i.e. one key of thirty-two. The
 * fourth copy kept the very omission the first three were repaired for.
 * **Consolidating the copies you found is not the same as finding them all.**
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { CORE_PAYLOAD_KEYS } from '../../functions/api/content/_data/core.js';
import {
  CONTENT_FIXTURE,
  GRAMMAR_FIXTURE,
  CATALOG_FIXTURE,
  CURRICULUM_FIXTURE,
} from '../../e2e/fixtures/content-fixture.js';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');
const read = (f: string) => strip(readFileSync(f, 'utf8'));

/** Field names of the first object literal following `marker` in `src`. */
function projectedFields(src: string, marker: string): string[] {
  const at = src.indexOf(marker);
  if (at < 0) return [];
  const open = src.indexOf('{', at);
  if (open < 0) return [];
  let depth = 0;
  let end = -1;
  for (let i = open; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) return [];
  const body = src.slice(open + 1, end);
  // Only depth-0 keys of this literal.
  const out: string[] = [];
  let d = 0;
  for (const line of body.split('\n')) {
    const m = d === 0 ? line.match(/^\s*([A-Za-z_$][\w$]*)\??\s*:/) : null;
    if (m) out.push(m[1]!);
    for (const ch of line) {
      if (ch === '{' || ch === '[' || ch === '(') d++;
      else if (ch === '}' || ch === ']' || ch === ')') d--;
    }
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────────
// /api/content/core — checked BY VALUE, which is what caught the real defect.
// ─────────────────────────────────────────────────────────────────────────────
describe('the E2E core fixture carries the whole payload', () => {
  const fixtureKeys = Object.keys(CONTENT_FIXTURE);

  it('the derivation is real', () => {
    expect(CORE_PAYLOAD_KEYS.length).toBeGreaterThan(25);
    expect(fixtureKeys.length).toBeGreaterThan(25);
  });

  it('every key the server serves is in the fixture', () => {
    const missing = CORE_PAYLOAD_KEYS.filter((k) => !fixtureKeys.includes(k));
    expect(
      missing,
      'E2E serves no value for these, so every consumer runs its degrade path ' +
        'and the spec passes without ever rendering the real content',
    ).toEqual([]);
  });

  it('the fixture invents nothing the server does not serve', () => {
    const extra = fixtureKeys.filter((k) => !CORE_PAYLOAD_KEYS.includes(k));
    expect(extra, 'E2E would prove a field production never ships — the worse direction').toEqual(
      [],
    );
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// The THIRD carrier of the same key list: the client's own type.
//
// Measured clean in both directions when this guard was written — only the
// fixture had drifted. Ratcheted anyway, because `Content` is what every
// `useContent` consumer typechecks against: a key served but not typed makes a
// real field a type error, and a key typed but not served lets a consumer read
// `undefined` with the compiler's blessing. That second direction is the
// `scene.qs` class, which shipped and threw on every open for three weeks.
// ─────────────────────────────────────────────────────────────────────────────
describe('the client Content type matches the payload', () => {
  const typed = projectedFields(read('src/types/content.ts'), 'export interface Content ');

  it('the parse is real', () => {
    expect(typed.length).toBeGreaterThan(25);
  });

  it('every key the server serves is typed', () => {
    expect(CORE_PAYLOAD_KEYS.filter((k) => !typed.includes(k))).toEqual([]);
  });

  it('the type declares nothing the server does not serve', () => {
    expect(typed.filter((k) => !CORE_PAYLOAD_KEYS.includes(k))).toEqual([]);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// The three projection endpoints — read from the handlers' own source, because
// their builders are module-private. Each parse carries a non-vacuity floor: a
// regex that silently matched nothing would make every comparison below pass.
// ─────────────────────────────────────────────────────────────────────────────
describe('the E2E projection fixtures match their handlers', () => {
  it('grammar: the fixture names exactly the keys buildBody emits', () => {
    const served = projectedFields(read('functions/api/content/grammar.js'), 'data: {');
    expect(served.length).toBeGreaterThan(10);
    expect(served.sort()).toEqual(Object.keys(GRAMMAR_FIXTURE).sort());
  });

  it('catalog: stories and grammarUnits project the same fields', () => {
    const src = read('functions/api/content/catalog.js');
    const stories = projectedFields(src, 'const stories =');
    const units = projectedFields(src, 'const grammarUnits =');
    expect(stories.length).toBeGreaterThan(5);
    expect(units.length).toBeGreaterThan(3);
    expect(Object.keys(CATALOG_FIXTURE.stories[0]!).sort()).toEqual(stories.sort());
    expect(Object.keys(CATALOG_FIXTURE.grammarUnits[0]!).sort()).toEqual(units.sort());
  });

  it('curriculum: the spine entry projects the same fields', () => {
    const served = projectedFields(read('functions/api/content/curriculum.js'), 'data.push(');
    expect(served.length).toBeGreaterThan(8);
    expect(Object.keys(CURRICULUM_FIXTURE[0]!).sort()).toEqual(served.sort());
  });
});
