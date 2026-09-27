// src/tests/cssVarsDefined.test.ts — every fallback-less `var(--x)` names a property the
// app defines. The measurement and the reasons are in helpers/cssVarsDefined.ts.
import { describe, it, expect } from 'vitest';
import {
  cssVarCensus,
  definitionsIn,
  fallbacklessRefsIn,
  varRefsIn,
  HOOKS,
} from './helpers/cssVarsDefined';

const census = cssVarCensus();

describe('every var(--x) without a fallback resolves', () => {
  it('names no custom property the app never defines', () => {
    const missing = census.refs
      .filter((r) => !r.fallback && !census.defined.has(r.name))
      .map((r) => `${r.file}:${r.line} ${r.name}`);
    expect(missing).toEqual([]);
  });

  it('puts no fallback on a name nothing defines, unless it is a declared hook', () => {
    // A fallback on a never-defined name is the ONLY value that reference ever takes.
    const constants = census.refs
      .filter((r) => r.fallback && !census.defined.has(r.name) && !(r.name in HOOKS))
      .map((r) => `${r.file}:${r.line} ${r.name}`);
    expect(constants).toEqual([]);
  });

  it.each(Object.keys(HOOKS))('hook %s is still referenced and still undefined', (name) => {
    // Referenced: otherwise the entry guards nothing. Undefined: once something
    // defines it, it is an ordinary token and the exemption is moot.
    expect(census.refs.some((r) => r.name === name)).toBe(true);
    expect(census.defined.has(name)).toBe(false);
  });

  // A census that stopped reading files reports zero missing tokens too, and the two
  // are indistinguishable from a green run. Measured 2026-09-27: 999 source files,
  // 7,255 fallback-less references, 139 defined names. Floors sit under those.
  it('actually read the tree', () => {
    expect(census.files).toBeGreaterThan(900);
    expect(census.refs.length).toBeGreaterThan(6000);
    for (const t of ['--card', '--text', '--heading', '--card-b', '--ink-accent', '--bar-bg']) {
      expect(census.defined.has(t), t).toBe(true);
    }
  });

  it('reads a token set in an inline style object as a definition', () => {
    // `--stat-accent` is defined ONLY in StatsTab's inline style object — no stylesheet
    // declares it — so it is the one real subject proving that shape is read. If the
    // matcher lost it, every future inline-only token would read as missing.
    expect(census.defined.has('--stat-accent')).toBe(true);
  });
});

describe('the matchers', () => {
  it('reports a fallback-less reference and skips one with a fallback', () => {
    const src = `a { color: var(--nope); background: var(--also, #fff); }`;
    expect(fallbacklessRefsIn(src).map((r) => r.name)).toEqual(['--nope']);
  });

  it('marks which references carry a fallback', () => {
    expect(varRefsIn('a { color: var(--x, red); border-color: var(--y); }')).toEqual([
      { name: '--x', line: 1, fallback: true },
      { name: '--y', line: 1 },
    ]);
  });

  it('reads a var() nested inside a fallback as its own reference', () => {
    const src = `a { color: var(--outer, var(--inner)); }`;
    expect(fallbacklessRefsIn(src).map((r) => r.name)).toEqual(['--inner']);
  });

  it('skips a name built at runtime rather than guessing it', () => {
    expect(fallbacklessRefsIn('const c = `var(--${key})`;')).toEqual([]);
  });

  it('sees all three definition shapes', () => {
    const d = definitionsIn(
      `:root { --a: 1px; }\nconst s = { '--b': 2 };\nel.style.setProperty('--c', '3');`,
    );
    expect([...d].sort()).toEqual(['--a', '--b', '--c']);
  });

  it('does not let a COMMENT define a token or reference one', () => {
    const src = `/* --ghost: red; var(--ghost) */\n// var(--ghost2)\na{}`;
    expect([...definitionsIn(src)]).toEqual([]);
    expect(fallbacklessRefsIn(src)).toEqual([]);
  });

  it('reports the line the reference is actually on, after a multi-line comment', () => {
    const src = `/* one\ntwo\nthree */\na { color: var(--x); }`;
    expect(fallbacklessRefsIn(src)).toEqual([{ name: '--x', line: 4 }]);
  });

  it('reports the true line after a blank line followed by a line comment', () => {
    // `^\s*\/\/` would start on the blank line 2 and eat its newline.
    const src = `a {}\n\n  // note\nb { color: var(--x); }`;
    expect(fallbacklessRefsIn(src)).toEqual([{ name: '--x', line: 4 }]);
  });
});
