// src/tests/versionJsonCommit.test.js
//
// `/version.json` names the COMMIT the artifact was built from (2026-09-22).
//
// A CORRECTION FIRST, because the change was proposed on a claim that was
// wrong. I reported that CLAUDE.md's "`/version.json` carries the build id" was
// "looser than the file is". It is not: `v` IS the build id — vite.config names
// the constant `BUILD_ID`, and the identical value becomes `__BUILD_ID__`,
// `CACHE_VER` in sw.js and the Sentry `release`. The wording was exactly right
// and matched the codebase's own naming.
//
// The real gap was narrower, and it only shows up in the use CLAUDE.md cites it
// for — "when production and CI disagree, establish WHICH ARTIFACT the browser
// is running", written after hours went into pipeline theories for a browser
// that was simply serving an older bundle. A timestamp identifies a BUILD but
// not a COMMIT: you learned "build 1788822322863" and then had to find the CI
// run carrying it to learn what code that was. The sha beside it answers the
// question by opening the file.
//
// WHAT MUST NOT MOVE, and is pinned below: `v`. Three mechanisms compare or
// bake that exact value — `isStaleBuild` (string equality against the running
// `__BUILD_ID__`), ci.yml (proves it is the Sentry `release` in a bundle
// chunk), and sw.js (`CACHE_VER`). `commit` is ADDITIVE and diagnostic: nothing
// reads it to make a decision, which is what makes a `null` on a .git-less
// source tarball harmless rather than a new failure mode.

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '../..');

// Test-only reads over repo-relative path literals — no user input reaches them.
const viteConfig = readFileSync(join(root, 'vite.config.js'), 'utf8');
const versionJson = readFileSync(join(root, 'public/version.json'), 'utf8');

/** The single `writeFileSync(... version.json ...)` call, as source text. */
function writeCall() {
  const at = viteConfig.indexOf("'./public/version.json'");
  if (at === -1) return null;
  const end = viteConfig.indexOf(');', at);
  return end === -1 ? null : viteConfig.slice(at, end);
}

describe('version.json identifies the artifact', () => {
  it('the derivation finds the write call at all', () => {
    // Without this, a moved or renamed write would make every assertion below
    // vacuously true — the failure mode this repo keeps rediscovering.
    expect(writeCall(), 'vite.config must still write ./public/version.json').not.toBeNull();
    expect(viteConfig).toMatch(/const BUILD_ID\s*=/);
  });

  it('`v` is still the BUILD_ID — the value three mechanisms depend on', () => {
    // Derived from source rather than restated: asserting the literal timestamp
    // would pin a value that legitimately changes every build, and asserting
    // "some string" would not notice `v` being repointed at the commit, which
    // would break stale-build detection, CACHE_VER and the Sentry release at
    // once. What matters is that the key carries the BUILD_ID identifier.
    expect(writeCall()).toMatch(/\bv:\s*BUILD_ID\b/);
  });

  it('the file also names the commit', () => {
    expect(writeCall()).toMatch(/\bcommit:\s*COMMIT\b/);
    const parsed = JSON.parse(versionJson);
    expect(Object.keys(parsed)).toEqual(expect.arrayContaining(['v', 'commit']));
    expect(typeof parsed.v).toBe('string');
    expect(parsed.v.length).toBeGreaterThan(0);
    // `commit` is a sha or null — never a placeholder, never undefined. null is
    // an honest "unknown" for a checkout with no .git; a made-up value would be
    // worse than the absence it replaces.
    expect(parsed.commit === null || /^[0-9a-f]{7,40}$/.test(parsed.commit)).toBe(true);
  });

  it('resolving the commit can never fail a build', () => {
    // A diagnostic that can break a deploy is a bad trade. The chain must have
    // the env branch, a guarded git call, and a fallthrough.
    const fn = viteConfig.slice(
      viteConfig.indexOf('function resolveCommit'),
      viteConfig.indexOf('const COMMIT'),
    );
    expect(fn.length, 'resolveCommit must still exist above COMMIT').toBeGreaterThan(50);
    expect(fn).toMatch(/process\.env\.GITHUB_SHA/);
    expect(fn).toMatch(/\btry\b[\s\S]*\bcatch\b/);
    expect(fn).toMatch(/return null/);
  });

  it('nothing that reads version.json makes a decision on `commit`', () => {
    // The whole reason a null commit is safe. If a consumer ever gates on it, a
    // .git-less build stops being a cosmetic unknown and becomes a live defect —
    // so the rule is enforced against the REAL fetchers, derived from source.
    const files = [];
    (function walk(dir) {
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test walks repo sources
      for (const e of readdirSync(dir)) {
        if (e === 'node_modules' || e === 'tests' || e.startsWith('.')) continue;
        const p = join(dir, e);
        // eslint-disable-next-line security/detect-non-literal-fs-filename -- test walks repo sources
        if (statSync(p).isDirectory()) walk(p);
        else if (/\.(ts|tsx|js|jsx)$/.test(p)) files.push(p);
      }
    })(join(root, 'src'));

    const fetchers = files.filter((f) =>
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test walks repo sources
      readFileSync(f, 'utf8').includes('/version.json'),
    );
    // Anti-vacuity: main.tsx fetches it. An empty set would pass trivially.
    expect(fetchers.length, 'something in src/ must still read /version.json').toBeGreaterThan(0);

    const offenders = fetchers.filter((f) =>
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test walks repo sources
      /\.commit\b|\[['"]commit['"]\]/.test(readFileSync(f, 'utf8')),
    );
    expect(
      offenders.map((f) => relative(root, f)),
      'version.json consumers must treat `commit` as diagnostic only',
    ).toEqual([]);
  });
});
