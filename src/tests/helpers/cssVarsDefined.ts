// src/tests/helpers/cssVarsDefined.ts
//
// A `var(--x)` WITH NO DEFINITION IS NOT AN ERROR ANYWHERE BUT HERE (2026-09-27).
//
// CSS treats a reference to an undefined custom property as INVALID AT COMPUTED-VALUE
// TIME, which is silent and property-dependent: an inherited property (`color`) falls
// back to whatever the parent had, and a non-inherited one (`background`, `border`)
// falls back to its INITIAL value — transparent, none. Nothing logs, nothing throws,
// and the element renders; it simply renders something other than what was written.
//
// Measured on the day this was written: 63 references to SIX names this app never
// defines — `--bg`, `--body`, `--border`, `--card-bg`, `--primary`, `--text-3` — in 23
// files. Most were harmless by accident (`--body` on `color` inherits `--text` anyway),
// and some were not: GrammarUnitDetail's "next drill" button drew `color: '#fff'` on
// `background: var(--primary)`, i.e. white text on NO background, which on a white
// card is a button nobody can see; and HeritageModeScreen's copy toast painted
// `background: var(--heading)` under `color: var(--bg)`, which inherits `--text` — and
// `--heading` and `--text` are the same value in BOTH themes, so the toast's text sat
// at exactly 1:1 on its own background.
//
// `--text` itself was the first instance, recorded in index.css: 104 references to a
// token nobody had defined, fixed by defining it. `--text-2` was the second, found in
// the ink sweep five months later. Two fixes of one token each, and no rule — which is
// how six more names accumulated. This is the rule.
//
// THE RULE: every `var(--name)` with no fallback must name a property something in
// the app defines — a `--name:` declaration in a stylesheet, a `'--name':` key in an
// inline style object (the per-element tokens: `--bar-target`, `--ring-clr`, `--mx`…),
// or a `setProperty('--name', …)` call.
//
// WHAT IT DELIBERATELY DOES NOT CHECK:
//   (A reference WITH a fallback IS checked, and that was a second measurement, not
//   a first assumption. `var(--card-bg, #f8fafc)` reads as "a token, with a default",
//   but `--card-bg` is defined NOWHERE, so the default is the only value it ever has:
//   a hardcoded light slab in dark mode, under text that follows the theme. 38 such
//   references to 16 never-defined names were live, including Home's daily-input
//   button (`var(--bg, #fafafa)`) and four "could not start" error lines in a dark
//   red that sat on the dark card (`var(--danger, #b91c1c)`). A fallback on a name
//   nothing defines is a constant wearing a token's clothes.
//   The one legitimate shape is an OVERRIDE HOOK: a name deliberately left undefined
//   so a single element can set it inline, with the fallback as the design. Those are
//   listed in HOOKS with their reason, and checked in both staleness directions.)
//   - A NAME BUILT AT RUNTIME (`var(--${key})`). There is nothing static to check;
//     the regex requires a literal name, so these are skipped rather than guessed.
//   - Whether a defined token is defined in the right SCOPE (e.g. only under `.dark`).
//     `inlineInkContrast` already requires every ink token in both blocks.
//   - Test files, as REFERENCES: a fixture (`accentInk.test.ts`'s `--fallback`) is not
//     rendered. Test files are not DEFINITIONS either, so a test cannot make an
//     undefined app token look defined.

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const SOURCE = /\.(css|ts|tsx|js|jsx)$/;
const isTest = (f: string) => f.startsWith('src/tests/') || /\.test\.[jt]sx?$/.test(f);

/** Block comments always; line comments only when they START a line, so a `//` inside
 *  a URL string survives (the shared convention — see commentStripOrder.test.ts).
 *  `[ \t]*`, NOT the shared idiom's `\s*`: with the `m` flag `\s` also matches a
 *  newline, so `^\s*\/\/` starting on a blank line swallows it and every line number
 *  after it reads one low. Harmless for a yes/no matcher, wrong for one that reports
 *  `file:line` — the mutation that restored `--primary` on line 314 was reported on 313. */
export function stripComments(src: string): string {
  // Newlines inside a block comment are kept so reported line numbers stay true.
  return src
    .replace(/^[ \t]*\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, (c) => c.replace(/[^\n]/g, ''));
}

/** Every custom property a source text DEFINES. */
export function definitionsIn(src: string): Set<string> {
  const out = new Set<string>();
  const code = stripComments(src);
  for (const m of code.matchAll(/(^|[\s;{'"(,])(--[a-zA-Z0-9-]+)\s*['"]?\s*:/g)) out.add(m[2]!);
  for (const m of code.matchAll(/setProperty\(\s*[`'"](--[a-zA-Z0-9-]+)/g)) out.add(m[1]!);
  return out;
}

export interface VarRef {
  name: string;
  line: number;
  /** true for `var(--x, …)` */
  fallback?: boolean;
}

/** Override hooks: never defined on purpose, set per element inline (or not at all),
 *  the fallback being the design. Name → why it is allowed to stay undefined. */
export const HOOKS: Record<string, string> = {
  '--bar-target': 'barFill keyframes: the width a bar animates to, 100% unless an element sets it',
  '--ring-offset': 'ringFill keyframes: the stroke offset a ring stops at, 0 (full) unless set',
  '--ring-clr': 'pulse-ring keyframes: the pulse colour, the brand blue unless set',
  '--mx': 'the pointer-follow shine: x of the highlight, centred unless a handler sets it',
  '--my': 'the pointer-follow shine: y of the highlight, centred unless a handler sets it',
};

/** Every `var(--name)` with a literal name, bracket-matched so a nested `var()` inside
 *  a fallback is read as its own reference. */
export function varRefsIn(src: string): VarRef[] {
  const out: VarRef[] = [];
  const code = stripComments(src);
  let at = 0;
  while ((at = code.indexOf('var(', at)) >= 0) {
    let depth = 0;
    let j = at + 3;
    for (; j < code.length; j++) {
      if (code[j] === '(') depth++;
      else if (code[j] === ')') {
        depth--;
        if (depth === 0) break;
      }
    }
    const inner = code.slice(at + 4, j);
    const m = inner.match(/^\s*(--[a-zA-Z0-9-]+)\s*(,)?/);
    if (m) {
      const ref: VarRef = { name: m[1]!, line: code.slice(0, at).split('\n').length };
      if (m[2]) ref.fallback = true;
      out.push(ref);
    }
    at += 4;
  }
  return out;
}

/** The fallback-less subset (kept as its own export for the matcher tests). */
export function fallbacklessRefsIn(src: string): VarRef[] {
  return varRefsIn(src).filter((r) => !r.fallback);
}

export interface Census {
  defined: Set<string>;
  refs: Array<VarRef & { file: string }>;
  files: number;
}

export function cssVarCensus(): Census {
  const files = execSync('git ls-files src', { encoding: 'utf8' })
    .split('\n')
    .filter((f) => SOURCE.test(f) && !isTest(f));
  const defined = new Set<string>();
  const refs: Census['refs'] = [];
  for (const f of files) {
    const src = readFileSync(f, 'utf8');
    for (const d of definitionsIn(src)) defined.add(d);
    for (const r of varRefsIn(src)) refs.push({ ...r, file: f });
  }
  return { defined, refs, files: files.length };
}
