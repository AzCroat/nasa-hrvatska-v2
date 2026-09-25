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
  'DailyCroatianSection.tsx':
    'Deleted by #682. Named here only to record that the same commit removed it ' +
    'from the tree, from the lint TARGETS, and from neither the directory diagram ' +
    'nor the coverage count that described it.',
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

describe('CLAUDE.md states the lint coverage the lint actually has', () => {
  // The figure sat at "525 files plus 2 walked structurally" while the lint
  // printed 521 — #682 deleted the unreachable modules five targets pointed at
  // and updated neither this number nor the directory diagram that named one of
  // the same files. A count in prose is a hand-maintained list of one.
  //
  // Derived from the lint's SOURCE rather than by running it, so this stays a
  // fast unit test: the lint walks hundreds of files.
  const LINT = readFileSync(join(root, 'scripts/lintCroatianText.mjs'), 'utf8');

  /** The body of a top-level `const <name> = [ … ]` in the lint. */
  function arrayBlock(name: string): string {
    const at = LINT.indexOf(`const ${name} = [`);
    expect(at, `${name} must still be an array literal in the lint`).toBeGreaterThan(-1);
    return LINT.slice(at, LINT.indexOf('\n];', at));
  }

  /**
   * TARGETS holds bare path strings. DEDUPED, and the duplicates were real: the
   * array carried 46 of them (sweep 136), so this test compared CLAUDE.md's
   * figure against an array LENGTH that overstated coverage by 46 files — and the
   * lint printed the same inflated number, so prose, output and guard agreed on a
   * count that was false. Consistency between copies is not truth (the CEFR-badge
   * lesson). `croatianLintTargets.test.ts` now fails on a duplicate entry; this
   * counts distinct files so the figure means what it says either way.
   */
  const targetPaths = (): string[] => [
    ...new Set(
      [...arrayBlock('TARGETS').matchAll(/'([^']+)'/g)]
        .map((m) => m[1])
        .filter((v) => v.includes('/')),
    ),
  ];

  /**
   * STRUCTURED holds `{ rel, strings }` objects, and one `rel` is a DESCRIPTION
   * rather than a path ('lessons.js + per-level lesson files (tables)'). So
   * counting quoted strings that look like paths returns 1 of 2 — which is what
   * the first draft of this test did, and it reported a discrepancy in CLAUDE.md
   * that did not exist. Count the ENTRIES.
   */
  const structuredCount = (): number => arrayBlock('STRUCTURED').match(/\brel:/g)?.length ?? 0;

  it('the stated file count is the one the lint reports', () => {
    const targets = targetPaths().length;
    const structured = structuredCount();
    // Guard the derivation: a regex that stopped matching would make the
    // comparison below trivially satisfiable at zero.
    expect(targets).toBeGreaterThan(100);
    expect(structured).toBeGreaterThan(0);

    const total = targets + structured;
    const claim = DOC.match(/Coverage is \*\*(\d+) files\*\*, (\d+) of them walked structurally/);
    expect(
      claim,
      'CLAUDE.md must state the Croatian lint coverage in the pinned form',
    ).not.toBeNull();
    expect(Number(claim![1]), `the lint covers ${total} files, CLAUDE.md says ${claim![1]}`).toBe(
      total,
    );
    expect(Number(claim![2]), 'the structurally-walked count must match too').toBe(structured);
  });

  it('every file the lint targets exists', () => {
    // A target that does not exist is a file everybody believes is linted and
    // is not — this repo's most-repeated failure, in its original form.
    const missing = targetPaths().filter((v) => !existsSync(join(root, v)));
    expect(missing, `lint TARGETS name files that do not exist: ${missing.join(', ')}`).toEqual([]);
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
        .replace(/(^|[^:])\/\/.*$/gm, '$1')
        .replace(/\/\*[\s\S]*?\*\//g, '');
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

describe('the standing CodeQL dismissals still describe live code', () => {
  // Every entry in the "Clear text storage of sensitive information" list is a
  // file whose storage write a scanner heuristic reads as a credential. A
  // dismissal for a file that no longer performs one is guarding nothing — the
  // `couplingClearingPath` lesson, applied to a list that lives half in this
  // document and half in GitHub's security tab.
  //
  // BE PLAIN ABOUT ITS REACH: this catches a deletion or a rewrite, and it
  // would NOT have caught #78, the alert that prompted it. That line moved out
  // of `useDailySession.ts` into `dailySessionStore.ts` and left four other
  // writes behind, so the file still satisfies every assertion here. Nothing in
  // the repo can catch that, because the alert's location is GitHub state.
  const list = (): string => {
    const at = DOC.indexOf('"Clear text storage of sensitive information" alerts');
    expect(at, 'the dismissal list must still be in CLAUDE.md').toBeGreaterThan(-1);
    // The phrase sits mid-sentence, so back up to the start of its paragraph —
    // slicing from the match itself would cut off the count that opens it.
    return DOC.slice(DOC.lastIndexOf('\n', at) + 1, DOC.indexOf('\n\n', at));
  };

  it('names a file for every dismissed alert number', () => {
    const entries = [...list().matchAll(/#(\d+)(?:\s*\+\s*#(\d+))?\s*\(`([^`]+)`/g)];
    // Guard the derivation: a reflow that broke this regex would make the
    // assertion below vacuously true at zero entries.
    expect(entries.length).toBeGreaterThanOrEqual(6);

    const stated = list().match(/\*\*(\w+) "Clear text storage/);
    expect(stated, 'the list must still state its own count in words').not.toBeNull();
    const WORDS: Record<string, number> = { Six: 6, Seven: 7, Eight: 8, Nine: 9, Ten: 10 };
    const claimed = WORDS[stated![1]];
    expect(claimed, `unrecognised count word "${stated![1]}" — extend WORDS`).toBeDefined();

    const numbers = new Set(entries.flatMap((m) => [m[1], m[2]].filter(Boolean)));
    expect(numbers.size, `the list says ${stated![1]} alerts and names ${numbers.size}`).toBe(
      claimed,
    );
  });

  it('every file named still performs a clear-text storage write', () => {
    const names = [...new Set([...list().matchAll(/\(`([A-Za-z]+\.tsx?)`/g)].map((m) => m[1]))];
    expect(names.length).toBeGreaterThanOrEqual(6);

    const dead: string[] = [];
    for (const name of names) {
      const paths = BY_NAME.get(name)?.filter((p) => !p.endsWith('.test.tsx')) ?? [];
      if (paths.length === 0) {
        dead.push(`${name} no longer exists`);
        continue;
      }
      const writes = paths.some((p) =>
        /(?:localStorage|sessionStorage)\.setItem/.test(readFileSync(join(root, p), 'utf8')),
      );
      if (!writes) dead.push(`${name} no longer writes localStorage/sessionStorage`);
    }
    expect(dead, `dismissals guarding nothing:\n  ${dead.join('\n  ')}`).toEqual([]);
  });

  it('no production file carries an inline codeql suppression for them', () => {
    // The section forbids these explicitly: they pollute a source file to
    // silence a heuristic the UI dismissal already records.
    const offenders = FILES.filter(
      (f) => /^(?:src|functions)\/.*\.(?:tsx?|jsx?)$/.test(f) && !f.includes('/tests/'),
    ).filter((f) => /codeql\s*\[/i.test(readFileSync(join(root, f), 'utf8')));
    expect(offenders, `inline codeql suppressions: ${offenders.join(', ')}`).toEqual([]);
  });
});

describe('every file path CLAUDE.md names actually exists', () => {
  // WHY THIS EXISTS (2026-09-22). CLAUDE.md is the orientation document — it is
  // read at the start of every session, and its own most-repeated lesson is that
  // "a hand-maintained list decays exactly like one in production". It had
  // decayed: three of the 79 paths it named pointed at files that are not there.
  //
  //   src/data/content.jsx              -> content.tsx
  //   src/components/profile/StatsTab.jsx -> StatsTab.tsx
  //   migrations/ai_month_spend.sql     -> never existed; the ai_month_spend
  //                                        schema is CREATE_LEDGER_SQL inside
  //                                        _aiBudget.js, and migrations/ holds
  //                                        ai_quota and ai_burst only
  //
  // The last one had propagated INTO production source: _aiBudget.js said the
  // file "remains as documentation of the schema" in two comments. None of this
  // breaks the app; all of it sends a reader looking for something that is not
  // there, which is how the nav-tab table stayed wrong for five months.
  //
  // WHAT THIS CANNOT SEE, so nobody over-trusts it: a filename mentioned WITHOUT
  // a directory. CLAUDE.md names `InsightsTab` bare, so a rename of that file
  // would not be caught here. Matching bare component names would drag every
  // prose noun into the check, so the honest scope is paths.
  const PATH_RE =
    /\b((?:src|functions|scripts|e2e|public|docs|migrations)\/[A-Za-z0-9_@./-]*\.[A-Za-z0-9]{1,5})/g;

  const named = [
    ...new Set(
      [...readFileSync(join(root, 'CLAUDE.md'), 'utf8').matchAll(PATH_RE)].map((m) =>
        m[1].replace(/[.,)]+$/, ''),
      ),
    ),
  ];

  it('finds a substantial set of paths to check (anti-vacuity)', () => {
    // A regex that stops matching would make the assertion below trivially
    // true — the exact failure mode this file keeps rediscovering.
    expect(named.length).toBeGreaterThan(60);
    expect(named).toContain('src/lib/nextStep.ts');
  });

  it('names no file that is missing from the repo', () => {
    const missing = named.filter((p) => !existsSync(join(root, p)));
    expect(
      missing,
      `CLAUDE.md points at files that do not exist:\n  ${missing.join('\n  ')}`,
    ).toEqual([]);
  });
});

// ── The project's own slash-commands name files too ──────────────────────────
//
// `.claude/commands/*.md` are instructions a future session FOLLOWS, so a path
// that no longer exists is worse than one in prose — it sends the reader to
// open a file that is not there, or, in `new-lesson.md`, to REGISTER A SCREEN
// in the wrong place. All three were stale on 2026-09-22, found by running
// `/audit-sync` and discovering step 2 pointed at `src/hooks/useSyncManager.js`
// when the function had moved to `src/lib/applyRemoteProgress.ts` and the hook
// had become `.ts`:
//
//   audit-sync.md        useSyncManager.js     -> lib/applyRemoteProgress.ts
//   audit-learn-path.md  useScreenLauncher.js  -> lib/blackHoleScreens.ts
//   new-lesson.md        useScreenLauncher.js  -> lib/blackHoleScreens.ts
//
// Exactly the decay CLAUDE.md's own path guard exists for, one directory over
// and unguarded. The same derivation now covers both, because a hand-checked
// list of two documents rots the same way the documents do.
//
// IT FOUND TWO MORE THAN THE HAND SEARCH DID. I grepped the commands for
// `\.js\b` and fixed three; the guard then named `src/data/content.jsx` twice,
// because `\.js\b` cannot match `.jsx` — `x` is a word character, so there is no
// boundary. A derived check beats a hand search written by the same person who
// decided what to search for.
//
// WHAT IT DOES NOT COVER, stated rather than implied: a filename written
// WITHOUT backticks. `new-lesson.md` said "Add to LEARN_PATH in content.jsx" in
// bare prose, still stale, and invisible here — found only by reading the file.
// Widening the regex to bare prose would match ordinary English ("the .ts
// migration"), so the trade is deliberate: this guards the paths a reader would
// copy, not every mention of a file.
describe('the slash-commands name files that exist', () => {
  const CMD_DIR = join(root, '.claude', 'commands');
  const cmdFiles = existsSync(CMD_DIR) ? readdirSync(CMD_DIR).filter((f) => f.endsWith('.md')) : [];

  it('there are commands to check (anti-vacuity)', () => {
    // Without this, deleting the directory would make every assertion below
    // pass by having nothing to say.
    expect(cmdFiles.length).toBeGreaterThanOrEqual(5);
  });

  it('every backticked path in every command resolves on disk', () => {
    const re = /`([^`\n ]+?\.(?:tsx|ts|jsx|js|mjs|yml|yaml|sql|rules|toml))`/g;
    const missing: string[] = [];
    let seen = 0;
    for (const f of cmdFiles) {
      const body = readFileSync(join(CMD_DIR, f), 'utf8');
      for (const m of body.matchAll(re)) {
        const token = m[1].replace(/^\.\//, '');
        if (token.includes('*') || token.includes('<')) continue;
        seen += 1;
        if (!(token in EXEMPT) && !resolves(token))
          missing.push(`${f}: \`${token}\` (L${body.slice(0, m.index).split('\n').length})`);
      }
    }
    // The derivation must actually be finding paths, or "none missing" means
    // "none looked at" — the decorative-guard failure this repo keeps hitting.
    // 7 is the measured count, not a guess — the first draft guessed 10 and the
    // floor fired on a clean tree, which is the floor doing its job in the least
    // useful direction. Set it from what is there.
    expect(seen, 'the command files name no paths at all — check the regex').toBeGreaterThanOrEqual(
      7,
    );
    expect(
      missing,
      `a slash-command sends the reader to a file that does not exist:\n  ${missing.join('\n  ')}`,
    ).toEqual([]);
  });
});

// A PRETTIER-UNSTABLE LIST ITEM GROWS ITS OWN INDENTATION FOR EVER
// (2026-09-25).
//
// Both of this repo's long-form documents are written and rewritten by
// `prettier --write`, and one markdown shape is NOT a fixed point of it: a
// SECOND paragraph inside a `- [x] ` checklist item, indented to align under
// the six-character marker instead of to the content column (2). Prettier
// preserves the item's FIRST paragraph — a lazy continuation of the marker
// line — and re-indents every later block by four more spaces on every run.
// Reproduced in seven lines and confirmed unbounded: 6 → 10 → 14 → 18 …
//
// AUDIT-STATE.md had two such blocks, 78 lines between them, at 115 spaces of
// indentation and +4 per write. It cost ~300 bytes a run and nothing noticed,
// because a document that still renders is a document nobody re-reads: the
// growth is invisible in the rendered output and invisible in a diff that is
// already all reflow. The fix is structural (put the block at the content
// column), and this is the mechanism that keeps it there — a max-indent bound
// outside fenced code blocks, which the runaway breaks long before it becomes
// unreadable.
//
// Fenced blocks are excluded because they legitimately hold aligned tables.
// The bound is 10 against a measured maximum of 8 (AUDIT-STATE) and 5
// (CLAUDE.md): loose enough for an honest nested list, far below anything the
// compounding shape reaches after one write.
describe('long-form docs are a prettier fixed point', () => {
  const MAX_INDENT = 10;

  for (const f of ['CLAUDE.md', 'AUDIT-STATE.md']) {
    it(`${f} has no runaway list indentation`, () => {
      const lines = readFileSync(join(root, f), 'utf8').split('\n');
      let inFence = false;
      const deep: string[] = [];
      lines.forEach((l, i) => {
        if (l.trim().startsWith('```')) {
          inFence = !inFence;
          return;
        }
        if (inFence || !l.trim()) return;
        const n = l.length - l.trimStart().length;
        if (n > MAX_INDENT) deep.push(`L${i + 1} indented ${n}: ${l.trim().slice(0, 60)}`);
      });
      expect(
        deep,
        `lines indented past ${MAX_INDENT} spaces — a second paragraph in a checklist ` +
          `item gains 4 spaces on every prettier run; move it to the content column (2):\n  ` +
          deep.join('\n  '),
      ).toEqual([]);
    });
  }
});
