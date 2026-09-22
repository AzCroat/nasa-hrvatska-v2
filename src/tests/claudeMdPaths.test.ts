// src/tests/claudeMdPaths.test.ts
//
// THE SAME DEFECT AS `navTable.test.ts`, FOUND BY LOOKING FOR MORE OF IT.
//
// Fixing the nav table on 2026-09-22 raised the obvious next question: what
// else in CLAUDE.md does the tree disprove? Measured rather than guessed, and
// the Directory Structure diagram — the first orientation any reader gets —
// was stale in fourteen places at once:
//
//   * ten `.js`/`.jsx` names that are `.ts`/`.tsx` today (App, AppContext,
//     data, firebase, dateUtils, appUtils, srs, streak, useAuth,
//     useSyncManager) — the TypeScript migration the same file documents;
//   * `constants/timings.js`, deleted with no successor (#682); nothing in
//     `src/` exports `MS` or `TIMEOUTS` at all;
//   * `DailyCroatianSection` and `PathProgressCard`, also #682 — a PR whose
//     whole subject was deleting unreachable modules, which did not think to
//     look in the doc that named two of them;
//   * `CelebrationModal` (#48) and `CultureTab` (#59), gone for over a year;
//   * `GrammarTrack` / `CityOfDay`, which are `GrammarTrackScreen` and
//     `CityOfDayScreen`;
//   * `FriendsScreen` filed under `profile/` when it lives in `croatia/`;
//   * `Leaderboard`, `WeeklyLeague` and `functions/api/league.js`, removed in
//     #290 — and this is the sharp one: THE FILE ALREADY RECORDED THAT
//     REMOVAL six hundred lines further down ("There is no `leaderboard`
//     collection… the leaderboard feature was removed"), while the diagram and
//     the overview line went on advertising it. A document can contradict
//     itself for a year and no reader is obliged to notice.
//
// A name in this file is read as authoritative — that is the whole point of
// the file — so a name the tree disproves is worse than no name. These tests
// derive the check from the document and the disk, so the next rename fails
// CI instead of misleading a reader for another five months.

import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, basename, relative } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '../..');
// Test-only reads over repo-relative path literals — no user input reaches them.
const DOC = readFileSync(join(root, 'CLAUDE.md'), 'utf8');

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'coverage',
  'playwright-report',
  'test-results',
  '.wrangler',
  'android',
  'ios',
]);

/** Every file in the repo, repo-relative, minus build and vendor output. */
function allFiles(dir = root, acc: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) allFiles(p, acc);
    else acc.push(relative(root, p));
  }
  return acc;
}
const FILES = allFiles();
const BY_NAME = new Map<string, string[]>();
for (const f of FILES) {
  const b = basename(f);
  if (!BY_NAME.has(b)) BY_NAME.set(b, []);
  BY_NAME.get(b)!.push(f);
}

/** Does `token` name a file that exists — exactly, as a path suffix, or by basename? */
function resolves(token: string): boolean {
  if (existsSync(join(root, token))) return true;
  if (token.includes('/')) return FILES.some((f) => f.endsWith('/' + token));
  return BY_NAME.has(token);
}

// ── EXEMPTIONS ──────────────────────────────────────────────────────────────
// Three, each a name that is deliberately NOT a live file. Checked in BOTH
// staleness directions below, per this repo's `couplingClearingPath` lesson:
// an exemption that has stopped being needed is an exemption guarding nothing.
const EXEMPT: Record<string, string> = {
  'TabBar.jsx':
    'A dated historical reference: the nav-table postmortem states the file ' +
    'was `TabBar.jsx` on 2026-04-04, which it was. The live file is TabBar.tsx.',
  'geographyHr.js':
    'The single-module ancestor of src/data/cultural/cityHr/, named only to ' +
    'record that it was split per band. It is described in the past tense.',
  'PascalCase.jsx':
    'Not a filename — the illustration of the naming convention itself, in ' +
    'the Code Conventions section.',
};

/** Path-like tokens inside backticks. Globs and <placeholders> are not claims. */
function docPathTokens(): { token: string; line: number }[] {
  const re = /`([^`\n ]+?\.(?:tsx|ts|jsx|js|mjs|yml|yaml|sql|rules|toml))`/g;
  const out: { token: string; line: number }[] = [];
  const seen = new Set<string>();
  for (const m of DOC.matchAll(re)) {
    const token = m[1].replace(/^\.\//, '');
    if (token.includes('*') || token.includes('<')) continue;
    if (seen.has(token)) continue;
    seen.add(token);
    out.push({ token, line: DOC.slice(0, m.index).split('\n').length });
  }
  return out;
}

/** The ``` fence under the `## Directory Structure` heading. */
function diagram(): string {
  const at = DOC.indexOf('## Directory Structure');
  expect(at, 'the Directory Structure section must exist').toBeGreaterThan(-1);
  const open = DOC.indexOf('```', at);
  const close = DOC.indexOf('```', open + 3);
  expect(close, 'the Directory Structure code fence must be closed').toBeGreaterThan(open);
  return DOC.slice(open + 3, close);
}

describe('CLAUDE.md names files that exist', () => {
  it('every backticked path in the document resolves on disk', () => {
    const tokens = docPathTokens();
    // Guard the derivation itself: a regex that stopped matching would make
    // every assertion below vacuously true.
    expect(tokens.length).toBeGreaterThan(150);
    const missing = tokens
      .filter(({ token }) => !(token in EXEMPT))
      .filter(({ token }) => !resolves(token))
      .map(({ token, line }) => `L${line} \`${token}\``);
    expect(missing, `CLAUDE.md names files that do not exist:\n  ${missing.join('\n  ')}`).toEqual(
      [],
    );
  });

  it('every filename in the Directory Structure diagram exists', () => {
    const names = [
      ...new Set(
        [...diagram().matchAll(/[A-Za-z_][A-Za-z0-9_.-]*\.(?:tsx|ts|jsx|js)\b/g)].map((m) => m[0]),
      ),
    ];
    expect(names.length).toBeGreaterThan(15);
    const missing = names.filter((n) => !(n in EXEMPT)).filter((n) => !BY_NAME.has(n));
    expect(missing, `the diagram names files that do not exist: ${missing.join(', ')}`).toEqual([]);
  });

  it('every component the diagram lists exists in the directory it lists it under', () => {
    // Lines like `├── croatia/   # CityOfDayScreen, EasterScreen, etc.` are a
    // claim about BOTH the name and its home. `FriendsScreen` was filed under
    // profile/ while living in croatia/, which no whole-tree search would flag.
    const rows = [...diagram().matchAll(/([a-z]+)\/\s+#\s*(.+)/g)].filter(([, dir]) =>
      existsSync(join(root, 'src/components', dir)),
    );
    expect(rows.length, 'the components/ rows must still be parseable').toBeGreaterThanOrEqual(5);

    const wrong: string[] = [];
    for (const [, dir, comment] of rows) {
      const here = new Set(
        readdirSync(join(root, 'src/components', dir)).map((f) => f.replace(/\.\w+$/, '')),
      );
      for (const name of comment.match(/\b[A-Z][A-Za-z0-9]{3,}\b/g) ?? []) {
        // Only judge names that ARE components somewhere — prose capitals
        // ("All lesson screens", "Croatian") are not claims about a file.
        if (!here.has(name) && BY_NAME.has(`${name}.tsx`)) {
          wrong.push(
            `${name} is listed under ${dir}/ but lives in ` +
              `${dirname(BY_NAME.get(`${name}.tsx`)![0])}`,
          );
        } else if (!here.has(name) && /Screen$|Tab$|Card$|Modal$|Panel$/.test(name)) {
          wrong.push(`${name} is listed under ${dir}/ and does not exist`);
        }
      }
    }
    expect(wrong, `the diagram misfiles components:\n  ${wrong.join('\n  ')}`).toEqual([]);
  });
});

describe('the exemptions stay honest', () => {
  it('each exempted name is still mentioned in the document', () => {
    // Otherwise it is an exemption guarding nothing, quietly suspending the
    // check for a name nobody reads any more.
    const stale = Object.keys(EXEMPT).filter((n) => !DOC.includes(n));
    expect(stale, `exempted but no longer in CLAUDE.md: ${stale.join(', ')}`).toEqual([]);
  });

  it('each exempted name would otherwise fail', () => {
    // The other direction: if `TabBar.jsx` were ever restored on disk, the
    // exemption is moot and must go rather than sit here suspending a check.
    const moot = Object.keys(EXEMPT).filter((n) => resolves(n));
    expect(moot, `exempted but resolves on disk — delete the entry: ${moot.join(', ')}`).toEqual(
      [],
    );
  });

  it('every exemption carries a reason', () => {
    for (const [name, why] of Object.entries(EXEMPT)) {
      expect(why.length, `${name} needs a stated reason`).toBeGreaterThan(40);
    }
  });
});

describe('the removed leaderboard is gone from the prose too', () => {
  // #290 deleted the endpoint, the components and the Firestore writes. The
  // doc recorded that in one section and advertised the feature in two others
  // for a year. A claim that contradicts another claim in the same file is the
  // failure mode this suite exists for.
  it('no live component or endpoint backs a leaderboard or league claim', () => {
    for (const name of ['WeeklyLeague', 'Leaderboard']) {
      expect(BY_NAME.has(`${name}.tsx`), `${name}.tsx exists again — update CLAUDE.md`).toBe(false);
    }
    expect(existsSync(join(root, 'functions/api/league.js'))).toBe(false);
  });

  it('no E2E spec probes for them either', () => {
    // The audit specs hunted for a Leaderboard/league button for a year after
    // #290 removed it. Most degraded to `info()`, but two reported the absence
    // of a deliberately removed feature as a DEFECT — one of them aborting the
    // rest of its test — and `sync-live-proof` wrote to a `leaderboard`
    // collection that firestore.rules denies, without checking the status, so
    // it failed silently on every run. A false bug in an audit report is worse
    // than no audit.
    //
    // Comments are stripped first: the removals left explanatory notes that
    // name the feature, and matching those would make this assertion pass for
    // the wrong reason — the same trap the Croatian lint's comment-stripping
    // exists for.
    const specs = readdirSync(join(root, 'e2e')).filter((f) => f.endsWith('.spec.js'));
    expect(specs.length).toBeGreaterThan(20);
    const offenders: string[] = [];
    for (const f of specs) {
      const code = readFileSync(join(root, 'e2e', f), 'utf8')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|[^:])\/\/.*$/gm, '$1');
      if (/leaderboard|weekly league/i.test(code)) offenders.push(f);
    }
    expect(offenders, `specs still probe the removed leaderboard: ${offenders.join(', ')}`).toEqual(
      [],
    );
  });

  it('CLAUDE.md does not name them as if they shipped', () => {
    const overview = DOC.slice(0, DOC.indexOf('## Development Commands'));
    expect(overview).not.toMatch(/\bleagues\b/);
    expect(diagram()).not.toMatch(/WeeklyLeague|Leaderboard|league\.js/);
  });
});
