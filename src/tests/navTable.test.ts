// src/tests/navTable.test.ts
//
// CLAUDE.md's navigation table was wrong for five months (2026-04-26 →
// 2026-09-22) under a heading that read "never get these wrong".
//
// NOBODY WROTE A FALSE CLAIM. It was correct on 2026-04-04, when `TabBar.jsx`
// really did say `Culture`. Then `Croatia` replaced it (2026-04-26), an
// `AI Tutor` tab arrived (2026-05-20), and `Me` left the bottom bar for the
// app header (2026-06-18). Three reasonable UI changes, and a paragraph of
// prose going quietly stale with nothing able to notice — which is this repo's
// own most-repeated lesson ("a hand-maintained list decays exactly like one in
// production") landing on the document that teaches it.
//
// It cost real time: a walk of the learner surfaces on 2026-09-22 used these
// names, hit a tab that does not exist, and reported a product defect that was
// nothing of the kind.
//
// So the table is DERIVED here rather than trusted. These tests read the
// components and the router, and fail when the prose disagrees.

import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '../..');
// Test-only reads over repo-relative path literals — no user input reaches them.
const DOC = readFileSync(join(root, 'CLAUDE.md'), 'utf8');
const TABBAR = readFileSync(join(root, 'src/components/shared/TabBar.tsx'), 'utf8');
const SIDEBAR = readFileSync(join(root, 'src/components/shared/Sidebar.tsx'), 'utf8');
const ROUTER = readFileSync(join(root, 'src/components/AppRouter.tsx'), 'utf8');

/** The `label:` values of a nav component's TABS array, in source order. */
function labelsOf(src: string): string[] {
  const at = src.indexOf('const TABS = [');
  if (at === -1) return [];
  const block = src.slice(at, src.indexOf('];', at));
  return [...block.matchAll(/label:\s*'([^']+)'/g)].map((m) => m[1]);
}

/** A pipe-delimited backticked run from the doc, e.g. `Today` | `Learn`. */
function docRun(afterHeading: string): string[] {
  const at = DOC.indexOf(afterHeading);
  if (at === -1) return [];
  const line = DOC.slice(at)
    .split('\n')
    .find((l) => /^`[^`]+`(\s*\|\s*`[^`]+`)+\s*$/.test(l.trim()));
  return line ? [...line.matchAll(/`([^`]+)`/g)].map((m) => m[1]) : [];
}

describe('the nav table in CLAUDE.md is derived, not remembered', () => {
  it('the bottom bar run matches TabBar.tsx exactly, in order', () => {
    const real = labelsOf(TABBAR);
    expect(real.length).toBeGreaterThan(0);
    expect(docRun('**Bottom bar (`TabBar.tsx`')).toEqual(real);
  });

  it('the desktop run matches Sidebar.tsx exactly, in order', () => {
    const real = labelsOf(SIDEBAR);
    expect(real.length).toBeGreaterThan(0);
    expect(docRun('**Desktop rail (`Sidebar.tsx`')).toEqual(real);
  });

  it('records that Me is desktop-only, for as long as that is true', () => {
    // The asymmetry is the part a spec author gets wrong: a `Me` tab click
    // passes on desktop and fails on a phone. Pinned in BOTH directions so the
    // warning is deleted if the bars ever agree.
    const inBar = labelsOf(TABBAR).includes('Me');
    const inRail = labelsOf(SIDEBAR).includes('Me');
    if (!inBar && inRail) {
      expect(DOC).toMatch(/`Me` IS NOT IN THE BOTTOM BAR/);
    } else {
      expect(DOC, 'the bars now agree — delete the mobile/desktop warning').not.toMatch(
        /`Me` IS NOT IN THE BOTTOM BAR/,
      );
    }
  });
});

describe('the spec-to-component mapping names things that exist', () => {
  /** Backticked identifiers in the mapping table's left column. */
  const rows = (() => {
    const at = DOC.indexOf('| If you change...');
    const block = DOC.slice(at, DOC.indexOf('### Nav tab names', at));
    return block
      .split('\n')
      .filter((l) => l.startsWith('|') && !/^\|\s*-+/.test(l) && !l.includes('If you change'))
      .map((l) =>
        l
          .split('|')
          .slice(1, 3)
          .map((c) => c.trim()),
      );
  })();

  it('finds the table', () => {
    expect(rows.length).toBeGreaterThanOrEqual(8);
  });

  it('every component it names exists on disk', () => {
    // FOUR OF EIGHT ROWS FAILED THIS WHEN IT WAS WRITTEN: PracticeTab,
    // CultureTab and CroatiaTab were never the names, and LearnPathWidget was
    // retired in #690. A left column that cannot be grepped is worse than no
    // table — it sends the reader after a file that was never there.
    const missing: string[] = [];
    for (const [left] of rows) {
      for (const [, name] of left.matchAll(/`([A-Z]\w+)`/g)) {
        const found = ['tsx', 'jsx', 'ts'].some((ext) =>
          [
            'home',
            'learn',
            'grad',
            'razgovor',
            'hrvatska',
            'profile',
            'shared',
            'auth',
            'practice',
          ].some((d) => existsSync(join(root, `src/components/${d}/${name}.${ext}`))),
        );
        if (!found) missing.push(name);
      }
    }
    expect(missing, `named in CLAUDE.md but not on disk: ${missing.join(', ')}`).toEqual([]);
  });

  it('every spec file it names exists in e2e/', () => {
    const missing: string[] = [];
    for (const [, right] of rows) {
      for (const [, spec] of right.matchAll(/`([\w.-]+\.spec\.js)`/g)) {
        if (!existsSync(join(root, 'e2e', spec))) missing.push(spec);
      }
    }
    expect(missing, `named in CLAUDE.md but not in e2e/: ${missing.join(', ')}`).toEqual([]);
  });

  it('names the component the router actually renders for each tab', () => {
    // The doc calls GradTab "the Practice tab" and HrvatskaTab "the Croatia
    // tab". Those are claims about the ROUTER, so they are checked against it.
    for (const [id, comp] of [
      ['home', 'HomeTab'],
      ['learn', 'LearnTab'],
      ['practice', 'GradTab'],
      ['ai', 'RazgovorTab'],
      ['croatia', 'HrvatskaTab'],
    ] as const) {
      const at = ROUTER.indexOf(`tab === '${id}'`);
      expect(at, `router has no branch for tab '${id}'`).toBeGreaterThan(-1);
      expect(ROUTER.slice(at, at + 400), `tab '${id}' does not render ${comp}`).toContain(
        `<${comp}`,
      );
      expect(DOC, `CLAUDE.md never names ${comp}`).toContain(`\`${comp}\``);
    }
  });
});
