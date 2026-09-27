// src/tests/inlineInkContrast.test.ts
//
// See helpers/inlineInkContrast.ts. 1,308 inline `color` literals were hardcoded dark
// brand hexes, so in dark mode they sat on --card (#1e293b) at 1.0–4.4:1 against the
// 4.5:1 AA floor. This is the ratchet that stops the 1,309th.

import { describe, it, expect } from 'vitest';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  findDarkModeInk,
  parseColor,
  contrast,
  DARK_CARD,
  AA_NORMAL,
} from './helpers/inlineInkContrast';

/** Read a token's value out of a named CSS block. */
function tokenIn(block: string, name: string): string | null {
  const m = new RegExp(`--${name}\\s*:\\s*([^;]+);`).exec(block);
  return m ? m[1]!.replace(/\/\*[\s\S]*?\*\//g, '').trim() : null;
}
function cssBlock(css: string, selector: string): string {
  const m = new RegExp(`\\n${selector}\\s*\\{`).exec(css);
  if (!m) return '';
  let i = m.index + m[0].length;
  let depth = 1;
  while (i < css.length && depth > 0) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}') depth--;
    i++;
  }
  return css.slice(m.index + m[0].length, i - 1);
}

const INK_TOKENS = [
  'ink-muted',
  'ink-muted-warm',
  'ink-accent',
  'ink-strong',
  'ink-mode',
  'ink-body',
  'ink-ink',
  'ink-warn',
  'ink-info',
  'ink-flag',
  'ink-green',
];

describe('an inline ink must read the theme', () => {
  it('no inline color literal is unreadable on the dark card', () => {
    const named = findDarkModeInk().map(
      (f) => `${f.file}:${f.line} color: ${f.literal} — ${f.ratio.toFixed(2)}:1 on #1e293b`,
    );
    expect(
      named,
      'A `color:` set inline lands on whatever the THEME painted — in dark mode that is ' +
        '--card (#1e293b). A hardcoded dark hex there is dark-on-dark and the screen ' +
        'looks perfectly fine in light mode, which is how 1,308 of these survived. Use ' +
        'one of the --ink-* tokens, or paint an opaque background on the same element so ' +
        'it owns both halves of its own contrast.',
    ).toEqual([]);
  });

  it('every ink token is defined in BOTH themes and its dark value clears AA', () => {
    // The tokens ARE the fix, so a token that exists in :root and not in .dark would
    // leave every consumer exactly as broken as the literal it replaced — while the
    // assertion above passed, because `var(--…)` is not a literal.
    const css = readFileSync('src/index.css', 'utf8');
    const root = cssBlock(css, ':root');
    const dark = cssBlock(css, '\\.dark');
    expect(root.length, ':root block not found').toBeGreaterThan(100);
    expect(dark.length, '.dark block not found').toBeGreaterThan(100);
    for (const t of INK_TOKENS) {
      const lv = tokenIn(root, t);
      const dv = tokenIn(dark, t);
      expect(lv, `--${t} must be defined in :root`).toBeTruthy();
      expect(dv, `--${t} must be defined in .dark — without it the token is the bug`).toBeTruthy();
      const d = parseColor(dv!);
      expect(d, `--${t}'s dark value must be a resolvable colour`).toBeTruthy();
      expect(
        contrast(d!, DARK_CARD),
        `--${t} dark (${dv}) must clear ${AA_NORMAL}:1 on the dark card`,
      ).toBeGreaterThanOrEqual(AA_NORMAL);
    }
  });

  it('the derivation finds a planted defect and is not vacuous', () => {
    const dir = mkdtempSync(join(tmpdir(), 'ink-'));
    const bad = join(dir, 'Bad.tsx');
    writeFileSync(
      bad,
      `export const A = () => (
  <>
    <div style={{ fontSize: 13, color: '#0e7490' }}>teal ink on the theme's surface</div>
    <span style={{ color: '#888' }}>a three-digit hex counts too</span>
    <b style={{ color: 'rgb(22, 163, 74)', fontWeight: 700 }}>so does an rgb() form</b>
  </>
);\n`,
    );
    const hits = findDarkModeInk([bad]);
    // All three shapes must be caught. The rgb() and the 3-digit hex are here because
    // the codemod's own pattern matched neither, and the two sites it therefore left
    // behind were found only by re-measuring afterwards.
    expect(hits.map((h) => h.literal).sort()).toEqual([
      "'#0e7490'",
      "'#888'",
      "'rgb(22, 163, 74)'",
    ]);
  });

  it('flags a dark ink on a THEMED background — the shape the surface pass created', () => {
    // An element that paints an opaque LIGHT background owns both halves and is
    // exempt. An element that paints a THEMED one does not: its surface goes dark
    // with the theme, so a dark ink on it is dark-on-dark. Converting 166 light
    // container backgrounds to themed tints made 19 routes WORSE for exactly this
    // reason, and 58 sites had to be repaired — found by the browser, not by source.
    const dir = mkdtempSync(join(tmpdir(), 'ink-pair-'));
    const f = join(dir, 'Pair.tsx');
    writeFileSync(
      f,
      `export const A = () => (
  <span style={{ background: 'var(--info-bg)', color: '#0369a1', fontSize: 11 }}>hrvatski</span>
);\n`,
    );
    const hits = findDarkModeInk([f]);
    expect(hits.length, 'a themed background does not excuse a dark ink').toBe(1);
    expect(hits[0]!.literal).toBe("'#0369a1'");
  });

  it('does NOT flag an ink that tracks the theme, or one on a surface it paints itself', () => {
    const dir = mkdtempSync(join(tmpdir(), 'ink-ok-'));
    const f = join(dir, 'Ok.tsx');
    writeFileSync(
      f,
      `export const A = () => (
  <>
    <div style={{ color: 'var(--ink-accent)' }}>a token</div>
    <div style={{ color: '#166534', background: '#dcfce7' }}>owns both halves</div>
    <div style={{ color: 'rgba(255,255,255,.7)' }}>translucent — composites</div>
    <div style={{ color: '#e2e8f0' }}>already light enough for the dark card</div>
    <div style={{ borderColor: '#0e7490' }}>a border is a different question</div>
    <div style={{ backgroundColor: '#0e7490' }}>and so is a background</div>
  </>
);\n`,
    );
    expect(findDarkModeInk([f])).toEqual([]);
  });

  it('the light half of every token is a colour that still reads on white', () => {
    // The fix must not trade a dark-mode failure for a light-mode one. Nothing else
    // checks this: the assertion above only ever looks at the dark card.
    const css = readFileSync('src/index.css', 'utf8');
    const root = cssBlock(css, ':root');
    for (const t of INK_TOKENS) {
      const lv = parseColor(tokenIn(root, t)!);
      expect(lv, `--${t} light value must resolve`).toBeTruthy();
      expect(
        contrast(lv!, [255, 255, 255]),
        `--${t} light (${tokenIn(root, t)}) must clear ${AA_NORMAL}:1 on white`,
      ).toBeGreaterThanOrEqual(AA_NORMAL);
    }
  });
});
