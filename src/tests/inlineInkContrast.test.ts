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
  isOpaqueSurface,
} from './helpers/inlineInkContrast';
import { escapeRegExp } from './helpers/emptyClaimSurfaces';

/** Read a token's value out of a named CSS block. */
function tokenIn(block: string, name: string): string | null {
  const m = new RegExp(`--${escapeRegExp(name)}\\s*:\\s*([^;]+);`).exec(block);
  return m ? m[1]!.replace(/\/\*[\s\S]*?\*\//g, '').trim() : null;
}
function cssBlock(css: string, selector: string): string {
  // `escapeRegExp` is a CORRECTNESS fix here, not only a CodeQL one: the selectors
  // passed in are `:root` and `.dark`, and an unescaped `.` matches ANY character, so
  // `.dark` would also match a rule named `Xdark`. Same class as the fifteen sites
  // sweep 157 escaped; these three were missed and CodeQL flagged one as high.
  const m = new RegExp(`\\n${escapeRegExp(selector)}\\s*\\{`).exec(css);
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

/**
 * Sites below AA for NORMAL text that are correct at the SIZE they render, each with the
 * measurement that says so. WCAG's own threshold is 3:1 for text at 18px, or 14px bold.
 *
 * The guard does not parse font sizes on purpose: it would have to resolve `fontSize`
 * and `fontWeight` out of the same object and decide what an inherited size is, and it
 * would buy one exemption. A list of one, with its numbers and both staleness directions
 * checked, is the honest mechanism at this size — and it stops being one the moment a
 * second entry needs a reason, which is when the parsing becomes worth writing.
 */
const LARGE_TEXT_OK: Record<string, string> = {
  // GrammarConstellation paints its own permanently-dark gradient in BOTH themes, so this
  // screen's inks are fixed and light BY DESIGN (see the note atop ConstellationDoneMode).
  // The answer feedback renders at `fontSize: 14, fontWeight: 700` — large text by WCAG —
  // so the bar is 3:1 and #ef4444 measures 3.89:1 on #1e293b. Its sibling #22c55e is
  // 6.42:1 and clears even the normal-text bar.
  'src/components/learn/ConstellationQuizMode.tsx': "'#ef4444'",
};

describe('an inline ink must read the theme', () => {
  it('no inline color literal is unreadable on the dark card', () => {
    const all = findDarkModeInk();
    const named = all
      .filter((f) => LARGE_TEXT_OK[f.file] !== f.literal)
      .map((f) => `${f.file}:${f.line} color: ${f.literal} — ${f.ratio.toFixed(2)}:1 on #1e293b`);
    expect(
      named,
      'A `color:` set inline lands on whatever the THEME painted — in dark mode that is ' +
        '--card (#1e293b). A hardcoded dark hex there is dark-on-dark and the screen ' +
        'looks perfectly fine in light mode, which is how 1,308 of these survived. Use ' +
        'one of the --ink-* tokens, or paint an opaque background on the same element so ' +
        'it owns both halves of its own contrast.',
    ).toEqual([]);

    // BOTH STALENESS DIRECTIONS. An exemption whose site has been fixed is guarding
    // nothing while suspending a check, and an exemption for a literal the guard no
    // longer reports cannot be distinguished from a typo in the list.
    for (const [file, literal] of Object.entries(LARGE_TEXT_OK)) {
      expect(
        all.some((f) => f.file === file && f.literal === literal),
        `LARGE_TEXT_OK lists ${file} ${literal} but the guard no longer reports it — ` +
          'delete the entry rather than leave it suspending a check.',
      ).toBe(true);
    }
  });

  it('every ink token is defined in BOTH themes and its dark value clears AA', () => {
    // The tokens ARE the fix, so a token that exists in :root and not in .dark would
    // leave every consumer exactly as broken as the literal it replaced — while the
    // assertion above passed, because `var(--…)` is not a literal.
    const css = readFileSync('src/index.css', 'utf8');
    const root = cssBlock(css, ':root');
    const dark = cssBlock(css, '.dark'); // RAW now — cssBlock escapes it itself
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

  it('a TRANSLUCENT background does not own its contrast; an opaque one does', () => {
    // THE CLAUSE THIS EXERCISES SURVIVED ITS OWN MUTATION, which by this repo's standard
    // makes it decoration until something exercises it. It is load-bearing in production:
    // the commonest chip in the app is a ~9% tint of its own ink
    // (`background:'rgba(14,116,144,0.09)'` with `color:'#0e7490'`), which has no `var(`
    // and so was read as an opaque own surface and exempted. That mistake hid the whole
    // remaining dark-mode tail — /readlist's level badges, /crmap's pills,
    // /croatia_today's topic chips, /personas, /immersion, /football's link cards. All of
    // them are fixed, which is exactly why the corpus no longer proves the clause and a
    // synthetic pair has to.
    const dir = mkdtempSync(join(tmpdir(), 'ink-alpha-'));
    const f = join(dir, 'Alpha.tsx');
    writeFileSync(
      f,
      `export const A = () => (
  <>
    <span style={{ background: 'rgba(14,116,144,0.09)', color: '#0e7490' }}>a 9% tint of itself</span>
    <span style={{ background: 'transparent', color: '#0e7490' }}>transparent is not a surface</span>
    <span style={{ background: 'none', color: '#0e7490' }}>nor is none</span>
    <span style={{ background: '#e0f2fe', color: '#0e7490' }}>an OPAQUE tint owns both halves</span>
  </>
);\n`,
    );
    // Three reported, and the opaque one exempted — so the clause is discriminating
    // rather than simply reporting everything.
    expect(findDarkModeInk([f]).length).toBe(3);

    const opaqueOnly = join(dir, 'OpaqueOnly.tsx');
    writeFileSync(
      opaqueOnly,
      `export const B = () => <span style={{ background: '#e0f2fe', color: '#0e7490' }}>ok</span>;\n`,
    );
    expect(findDarkModeInk([opaqueOnly])).toEqual([]);

    // And the predicate itself, at the boundary the 0.9 rule sets.
    expect(isOpaqueSurface("'rgba(14,116,144,0.09)'")).toBe(false);
    expect(isOpaqueSurface("'rgba(14,116,144,0.95)'")).toBe(true);
    expect(isOpaqueSurface("'transparent'")).toBe(false);
    expect(isOpaqueSurface("'#e0f2fe'")).toBe(true);
    // An 8-digit hex carries its own alpha.
    expect(isOpaqueSurface("'#0e749018'")).toBe(false);
    expect(isOpaqueSurface("'#0e7490ff'")).toBe(true);
    // A gradient is opaque, and an unparseable value is treated as opaque so this clause
    // cannot manufacture a finding on a shape it does not understand.
    expect(isOpaqueSurface("'linear-gradient(135deg,#fff,#eee)'")).toBe(true);
  });

  it('reads a background the way the code actually writes one', () => {
    // FOUR CLAUSES, FOUR CONTROLS, AND EVERY ONE OF THEM SURVIVED ITS MUTATION WITHOUT
    // THESE. That is not a sign they are redundant — each was added because a real route
    // stayed red after every other clause was right — it is a sign the corpus no longer
    // proves them, because all their real subjects are fixed. Same standard as the
    // opacity clause above: a clause nothing exercises is decoration.
    const dir = mkdtempSync(join(tmpdir(), 'ink-bg-'));
    const w = (name: string, body: string) => {
      const f = join(dir, name);
      writeFileSync(f, `export const X = () => (\n${body}\n);\n`);
      return f;
    };

    // (a) ALPHA APPENDED BY CONCATENATION — 58 sites write a tint of a DATA colour this
    //     way. `18` is 24/255, a 9% wash the theme shows straight through, but the base is
    //     a variable so the value is unparseable and the fallback called it opaque.
    //     /crmap's category pills were exempted on exactly this.
    expect(
      findDarkModeInk([
        w('Appended.tsx', `  <span style={{ background: c + '18', color: '#78716c' }}>x</span>`),
      ]),
    ).toHaveLength(1);
    // the same shape at full alpha genuinely owns its surface
    expect(
      findDarkModeInk([
        w(
          'AppendedOpaque.tsx',
          `  <span style={{ background: c + 'ff', color: '#78716c' }}>x</span>`,
        ),
      ]),
    ).toEqual([]);

    // (b) THE SAME IDIOM IN A TEMPLATE — 51 more sites. /croatiaathletes' stat lines were
    //     the last route left red, on `background: \`${p.schoolColor}0d\``.
    expect(
      findDarkModeInk([
        w('Templated.tsx', "  <span style={{ background: `${c}0d`, color: '#1e293b' }}>x</span>"),
      ]),
    ).toHaveLength(1);
    expect(
      findDarkModeInk([
        w(
          'TemplatedOpaque.tsx',
          "  <span style={{ background: `${c}ff`, color: '#1e293b' }}>x</span>",
        ),
      ]),
    ).toEqual([]);

    // (c) PER ARM, NOT PER EXPRESSION. A background can be a ternary, and reading the
    //     whole string as one value made the predicate say "opaque" on the strength of the
    //     arm that does NOT render.
    expect(
      findDarkModeInk([
        w(
          'Arms.tsx',
          `  <span style={{ background: on ? c + '18' : '#f3f4f6', color: '#78716c' }}>x</span>`,
        ),
      ]),
    ).toHaveLength(1);
    // and when EVERY arm is opaque the element really does own both halves
    expect(
      findDarkModeInk([
        w(
          'ArmsOpaque.tsx',
          `  <span style={{ background: on ? '#e0f2fe' : '#f3f4f6', color: '#78716c' }}>x</span>`,
        ),
      ]),
    ).toEqual([]);

    // (d) A COMMA ENDS A PROPERTY; A NEWLINE DOES NOT. Prettier wraps a long value across
    //     lines, and stopping at `\n` read HNLScreen's position-circle background as just
    //     its condition — unparseable, therefore "opaque", therefore exempt.
    expect(
      findDarkModeInk([
        w(
          'Wrapped.tsx',
          `  <span
    style={{
      background:
        i === 0
          ? '#f59e0b'
          : 'rgba(0,0,0,.08)',
      color: '#78716c',
    }}
  >x</span>`,
        ),
      ]),
    ).toHaveLength(1);
  });

  it('skips a literal inside accentInk() but not a sibling arm', () => {
    // POSITIONAL, NOT PER-EXPRESSION. `accentInk('#dc2626', 0.5)` is correct in both
    // themes, so its literal is not a finding — but a blanket "this expression mentions
    // accentInk" test would also hide the RAW arm beside it, which is the commonest way a
    // half-converted ternary looks.
    const dir = mkdtempSync(join(tmpdir(), 'ink-wrap-'));
    const w = (name: string, body: string) => {
      const f = join(dir, name);
      writeFileSync(f, `export const X = () => (\n${body}\n);\n`);
      return f;
    };
    expect(
      findDarkModeInk([
        w('Wrapped.tsx', `  <span style={{ color: accentInk('#dc2626', 0.5) }}>x</span>`),
      ]),
    ).toEqual([]);
    const half = findDarkModeInk([
      w('Half.tsx', `  <span style={{ color: on ? accentInk(c) : '#78716c' }}>x</span>`),
    ]);
    expect(half).toHaveLength(1);
    expect(half[0]!.literal).toBe("'#78716c'");
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
