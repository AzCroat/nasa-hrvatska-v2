/**
 * viteDefineReads.test.ts — a Vite `define` constant must be read as a BARE
 * IDENTIFIER, never off `globalThis`/`window`.
 *
 * THE BUG THIS EXISTS FOR, and it disabled two separate systems for the life
 * of the code while both failed silently and closed.
 *
 * `define` is a TEXTUAL substitution of an IDENTIFIER. `__BUILD_ID__` is
 * replaced; `globalThis.__BUILD_ID__` is a MEMBER EXPRESSION and is not — it
 * stays a runtime property lookup on an object nothing ever assigns, so it is
 * permanently `undefined`. `main.tsx` read it that way in two places:
 *
 *   1. the Sentry `release`. A client with no release DISCARDS every session
 *      inside `sendSession` before an envelope is even built ("Discarded
 *      session because of missing or non-string release" — warned only in
 *      DEBUG builds, so production says nothing). Measured in the real
 *      artifact with a real browser: 0 session envelopes before, 1–2 after.
 *      That is why Sentry reported zero sessions over 90 days while errors and
 *      traces flowed normally.
 *   2. `_RUNNING_BUILD`, which feeds `isStaleBuild()`. That function returns
 *      false on a null running build BY DESIGN ("if either side is unknown we
 *      can't safely conclude staleness"), so the seamless auto-update never
 *      fired once and a returning user on a stale cached bundle stayed on it.
 *
 * WHY THE EXISTING TESTS COULD NOT SEE IT. `versionCheck.test.ts` passes
 * `runningBuild` in as a parameter, so it proves the function works WHEN
 * WIRED — the component-test/wiring-test split this repo has been bitten by
 * before (AlphabetScreen's `award`, the unreachable speaking coach). Nothing
 * asserted that `main.tsx` hands it a real value. `src/sw.js` used the bare
 * form all along, which is why SW cache versioning kept working and made the
 * breakage even harder to see.
 *
 * THE LIST IS DERIVED FROM `vite.config`, not restated here: a second define
 * added next month is covered without anyone remembering this file.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const VITE_CONFIG = readFileSync('vite.config.js', 'utf8');

/** Every identifier Vite substitutes, read out of the real `define` block. */
const DEFINED: string[] = (() => {
  const start = VITE_CONFIG.indexOf('define: {');
  const block = VITE_CONFIG.slice(start, VITE_CONFIG.indexOf('}', start));
  return [...block.matchAll(/^\s*(__[A-Z0-9_]+__)\s*:/gm)].map((m) => m[1]);
})();

/**
 * Comments stripped before scanning. Load-bearing in BOTH directions, and the
 * first run of this file proved it: the two files that carry the EXPLANATION
 * of the bug were reported as offenders, because prose describing
 * `globalThis.__BUILD_ID__` reads exactly like code doing it. Left unstripped
 * the guard is unusable; stripped without a control it could silently stop
 * matching anything. `matchesBadRead` below is driven by both cases.
 */
function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
}

/** The one matcher, so the probes below test what the scan actually runs. */
function badReadRe(name: string): RegExp {
  return new RegExp(
    String.raw`(globalThis|window|self)\b[^\n]{0,40}?(\.\s*${name}\b|\[\s*['"\`]${name}['"\`]\s*\])`,
  );
}

function matchesBadRead(src: string, name: string): string | null {
  const m = stripComments(src).match(badReadRe(name));
  return m ? m[0].trim() : null;
}

function sourceFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === 'node_modules' || e === 'tests') continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) sourceFiles(p, out);
    else if (/\.(ts|tsx|js|jsx)$/.test(p)) out.push(p);
  }
  return out;
}

describe('the define list is real', () => {
  it('derives the substituted identifiers from vite.config', () => {
    // A hand-written list here would decay exactly like the 56-category
    // vocabulary list did — quietly, at whatever rate it still covered.
    expect(DEFINED.length).toBeGreaterThan(0);
    expect(DEFINED).toContain('__BUILD_ID__');
  });
});

describe('a defined constant is never read off an object', () => {
  it('the matcher catches real reads and is not fooled by prose', () => {
    // The positive control. Without the first pair the scan is decorative;
    // without the second it reports every file that merely EXPLAINS the bug —
    // which is what its own first run did.
    expect(matchesBadRead('const x = globalThis.__BUILD_ID__;', '__BUILD_ID__')).toBeTruthy();
    expect(
      matchesBadRead('const x = (globalThis as any).__BUILD_ID__;', '__BUILD_ID__'),
    ).toBeTruthy();
    expect(matchesBadRead("const x = window['__BUILD_ID__'];", '__BUILD_ID__')).toBeTruthy();
    expect(matchesBadRead('// never read globalThis.__BUILD_ID__ here', '__BUILD_ID__')).toBeNull();
    expect(matchesBadRead('/* globalThis.__BUILD_ID__ is undefined */', '__BUILD_ID__')).toBeNull();
    // And the CORRECT form must not trip it, or the guard forbids the fix.
    expect(
      matchesBadRead(
        "typeof __BUILD_ID__ !== 'undefined' ? __BUILD_ID__ : undefined",
        '__BUILD_ID__',
      ),
    ).toBeNull();
  });

  it('no source file reads one through globalThis/window/self', () => {
    const offenders: string[] = [];
    for (const file of sourceFiles('src')) {
      const src = readFileSync(file, 'utf8');
      for (const name of DEFINED) {
        // `(globalThis as any).__BUILD_ID__`, `globalThis.__BUILD_ID__`,
        // `window.__BUILD_ID__`, `self.__BUILD_ID__`, and the bracket forms —
        // all of them survive `define` untouched and read `undefined`.
        const hit = matchesBadRead(src, name);
        if (hit) offenders.push(`${file}: ${hit}`);
      }
    }
    expect(
      offenders,
      'Vite `define` substitutes the bare IDENTIFIER only. Read off an object ' +
        'these are permanently undefined and fail silently:\n' +
        offenders.join('\n'),
    ).toEqual([]);
  });

  it('main.tsx still reads the build id, bare — the two consumers that broke', () => {
    // Not decoration: the offender scan above passes just as happily if the
    // read is DELETED. These are the two call sites whose silent `undefined`
    // cost 90 days of session telemetry and every auto-update.
    const main = readFileSync('src/main.tsx', 'utf8');
    expect(main, 'the Sentry release no longer reads the build id').toMatch(
      /release:\s*typeof __BUILD_ID__ !== 'undefined' \? __BUILD_ID__ : undefined/,
    );
    expect(main, 'the stale-build check no longer reads the build id').toMatch(
      /_RUNNING_BUILD\s*=\s*typeof __BUILD_ID__ !== 'undefined'/,
    );
  });

  it('a release-less Sentry client is what the SDK actually discards', () => {
    // The claim above rests on SDK behaviour, so assert the SDK still behaves
    // that way rather than trusting a sentence in a comment. If Sentry ever
    // stops requiring a release, this fails and the reasoning gets re-read.
    const client = readFileSync('node_modules/@sentry/core/build/esm/client.js', 'utf8');
    expect(client).toMatch(/Discarded session because of missing or non-string release/);
    expect(client).toMatch(/if \(!session\.release && !clientReleaseOption\)/);
  });
});
