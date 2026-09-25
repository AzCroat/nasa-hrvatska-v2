/**
 * SWEEP 127 — AN `addInitScript` RUNS IN EVERY FRAME, INCLUDING ONE THAT FAILED
 * TO LOAD.
 *
 * `seedAuth` writes the learner's localStorage before navigation. Playwright runs
 * `page.addInitScript` in EVERY frame of the page, and `CrMap` embeds a
 * cross-origin Google Maps iframe. When that embed cannot load — a sandbox with
 * no egress to google.com, an offline runner, a blocked third party — the iframe's
 * document has an OPAQUE ORIGIN, and reading `localStorage` there throws
 * `SecurityError: Failed to read the 'localStorage' property from 'Window':
 * Access is denied for this document`.
 *
 * Playwright surfaces that on `page.on('pageerror')` **with no frame
 * attribution**, so `route-render-sweep.spec.js` reported it as
 *
 *     crmap: Failed to read the 'localStorage' property from 'Window' …
 *
 * under the message "these screens raise an uncaught exception with no boundary to
 * catch it, so nothing renders an error and nothing fails — it is simply wrong".
 * Reproduced 3 of 3 attempts, 17.6 minutes each, blaming the app for the fixture —
 * and ONLY where the embed fails, which is why CI, where google.com resolves, has
 * never seen it. That is the "establish which ARTIFACT produced the result" rule
 * from the other side: a red run that is not the product's fault.
 *
 * Measured in both directions before and after: with the fixture unguarded,
 * `/crmap` raises exactly one pageerror; with the top-frame bail it raises none,
 * and the main frame is still seeded (`uS` present, `nh_goal_set` = '1').
 *
 * WHY BAIL RATHER THAN CATCH: seeding the learner's storage is meaningful in the
 * main frame and nowhere else, and a swallowed throw would leave that frame
 * half-seeded while saying nothing. `forceCefr` already wraps its whole body in
 * try/catch and was never affected.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const FIXTURES = globSync('e2e/fixtures/*.js');

/**
 * COMMENTS STRIPPED, IN BOTH DIRECTIONS — line comments FIRST, blocks LAST
 * (sweep 72's ordering rule). The dangerous direction is prose NAMING the guard
 * satisfying the rule; the loud one bit immediately, because the comment written
 * ABOVE the bail explains the defect and mentions `localStorage`, so the
 * "bail before the first write" assertion failed on its own explanation.
 */
const decomment = (s: string) =>
  s
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/([^\S\n])\/\/(?:(?!\*\/)[^\n])*$/gm, '$1')
    .replace(/\/\*[\s\S]*?\*\//g, '');

/** The argument text of each `page.addInitScript(` call, brace/paren balanced. */
function initScripts(src: string): string[] {
  const out: string[] = [];
  for (const m of src.matchAll(/addInitScript\s*\(/g)) {
    let depth = 0;
    let quote = '';
    const from = m.index! + m[0].length - 1;
    for (let i = from; i < src.length; i++) {
      const c = src[i]!;
      if (quote) {
        if (c === quote && src[i - 1] !== '\\') quote = '';
        continue;
      }
      if (c === '"' || c === "'" || c === '`') quote = c;
      else if (c === '(' || c === '{' || c === '[') depth++;
      else if (c === ')' || c === '}' || c === ']') {
        depth--;
        if (depth === 0) {
          out.push(decomment(src.slice(from, i + 1)));
          break;
        }
      }
    }
  }
  return out;
}

const TOUCHES_STORAGE = /\b(?:localStorage|sessionStorage)\b/;
/** Either form is safe: bail outside the top frame, or catch. */
const FRAME_SAFE =
  /window\.top\s*!==\s*window|window\s*!==\s*window\.top|self\s*!==\s*top|\btry\s*\{/;

describe('a fixture init script cannot throw in a frame it does not own', () => {
  it('the derivation finds the real init scripts', () => {
    expect(FIXTURES.length).toBeGreaterThanOrEqual(4);
    const all = FIXTURES.flatMap((f) => initScripts(readFileSync(f, 'utf8')));
    expect(all.length).toBeGreaterThanOrEqual(4);
    // …and at least one of them really does touch storage, or the rule below is
    // about nothing.
    expect(all.filter((s) => TOUCHES_STORAGE.test(s)).length).toBeGreaterThanOrEqual(2);
  });

  it('every storage-touching init script is frame-safe', () => {
    const bad: string[] = [];
    for (const f of FIXTURES)
      for (const body of initScripts(readFileSync(f, 'utf8')))
        if (TOUCHES_STORAGE.test(body) && !FRAME_SAFE.test(body)) bad.push(f);
    expect(
      [...new Set(bad)],
      'an init script that reads or writes storage runs in EVERY frame, and a ' +
        'cross-origin iframe that failed to load has an opaque origin where that ' +
        'throws SecurityError. Playwright reports it on page.on("pageerror") with ' +
        'no frame attribution, so the route sweep blames whichever SCREEN embeds ' +
        'the iframe (sweep 127: crmap, 3 of 3 attempts, only where the embed fails).',
    ).toEqual([]);
  });

  it('seedAuth in particular bails outside the top frame', () => {
    // Named, because it is the one that failed and the one every spec depends on.
    // A generic rule satisfied by a stray `try {` elsewhere in the file would not
    // say this.
    const src = readFileSync('e2e/fixtures/seed-auth.js', 'utf8');
    const seed = initScripts(src).find((s) => s.includes("'uS'"));
    expect(seed, 'seedAuth no longer seeds uS in an init script').toBeTruthy();
    expect(seed!).toMatch(/window\.top\s*!==\s*window/);
    // The bail must come BEFORE the first storage write, or it protects nothing.
    expect(seed!.indexOf('window.top')).toBeLessThan(seed!.indexOf('localStorage'));
  });

  it('POSITIVE CONTROL: the matcher rejects an unguarded script and accepts both safe forms', () => {
    const unguarded = "page.addInitScript(() => { localStorage.setItem('a', '1'); })";
    const bailed =
      "page.addInitScript(() => { if (window.top !== window) return; localStorage.setItem('a', '1'); })";
    const caught = "page.addInitScript(() => { try { localStorage.setItem('a', '1'); } catch {} })";
    for (const [label, src, safe] of [
      ['unguarded', unguarded, false],
      ['bailed', bailed, true],
      ['caught', caught, true],
    ] as [string, string, boolean][]) {
      const body = initScripts(src)[0]!;
      expect(body, `${label}: the extractor found no body`).toBeTruthy();
      expect(TOUCHES_STORAGE.test(body)).toBe(true);
      expect(FRAME_SAFE.test(body), label).toBe(safe);
    }
  });
});
