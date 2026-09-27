// src/tests/helpers/inkSurfaceAgreement.ts
//
// AN INK AND THE SURFACE UNDER IT MUST AGREE ABOUT THE THEME (2026-09-27).
//
// `inlineInkContrast` judges an ink against the DARK CARD and exempts any element that
// paints its own opaque background, because such an element owns both halves of its
// contrast. `themedInlineBackground` judges an opaque-light background under a THEMED
// CLASS. Between them sits the shape neither can see: the surface is painted by a
// PARENT and the ink by a CHILD, so each element is individually defensible and the
// pair is not.
//
// There are four combinations and two of them are defects:
//
//   surface        ink            verdict
//   ------------   ------------   ------------------------------------------------
//   themed         themed         both follow the theme — correct
//   fixed light    fixed dark     a self-consistent chip — correct in either theme
//   fixed light    THEMED         DEFECT: in dark mode the slab stays light and the
//                                 ink goes light. Measured 31 sites in 21 files; the
//                                 worst was GrammarConstellation's endings table at
//                                 1.13:1 — the point of the screen, invisible.
//   themed         FIXED DARK     DEFECT: in dark mode the slab goes dark and the ink
//                                 stays dark. 2 sites, both created by fixing the row
//                                 above — which is why they are one guard and not two.
//
// A THIRD CLAUSE WAS MEASURED AND DELIBERATELY LEFT OUT: a fixed-DARK surface with a
// themed ink (light mode paints dark-on-dark). It is real — `GrammarConstellation`
// paints its own permanently-dark gradient and three tokens inside it sat at 3.4:1 in
// light mode — but a component's dark HERO gradient does not make its whole subtree
// dark, and a subtree scan cannot tell a full-bleed background from a banner. Measured
// coarsely it reports 244 inks across 22 files, nearly all of them light cards below a
// dark header. A guard that is mostly false positives trains everyone to ignore it, so
// that case is answered by a note in the one file it affects instead.
//
// WHY A SUBTREE SCAN IS SOUND FOR THE TWO CLAUSES IT DOES MAKE: both are about a
// surface and text that lands ON it, and a light slab or a themed panel in this codebase
// is a leaf-ish container (a chip, a tint panel, a table cell) whose subtree is its own
// content. The measurement bears that out — 31 and 2 findings, every one confirmed by
// hand, zero false positives after the self-painting exemption was added. Omitting that
// exemption reported 30 where the truth was 2, and the 24 extras were all
// `background:'#f3f4f6'` chips with grey ink, correct in both themes.

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { inkArms } from './inkArms';

/** Tokens that are DARK in light mode and LIGHT in dark mode — i.e. they follow. */
const THEMED_INK =
  /var\(--(?:ink-muted|ink-muted-warm|ink-accent|ink-strong|ink-mode|ink-body|ink-ink|ink-warn|ink-info|ink-flag|ink-navy|ink-red|ink-green|heading|text|subtext|sh-c|rt-c)\)/;

/** Surface tokens that follow the theme (light tint in light mode, dark in dark). */
const THEMED_SURFACE =
  /var\(--(?:card|surface-mute|mode-bg|warning-bg|success-bg|error-bg|info-bg)\)/;

/** Luminance above which a surface counts as LIGHT for this rule. */
export const LIGHT_SURFACE_LUM = 0.75;
/** Luminance below which an ink counts as DARK for this rule. */
export const DARK_INK_LUM = 0.18;

function hexRgb(h: string): [number, number, number] | null {
  const m = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(h);
  if (!m) return null;
  const s =
    m[1]!.length === 3
      ? m[1]!
          .split('')
          .map((c) => c + c)
          .join('')
      : m[1]!;
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16)) as [number, number, number];
}

function lum([r, g, b]: readonly [number, number, number]): number {
  const f = (x: number) => {
    const c = x / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/**
 * The source span of the JSX element whose `<` sits at `lt`, brace- and quote-aware.
 *
 * A regex cannot do this: a style object holds arrow functions and strings containing
 * `>` and `}`, and the codemod that fixed the ink class orphaned a brace in 25 files at
 * once by trying. Self-closing tags end at their own `/>`.
 */
export function elementSpan(src: string, lt: number): string {
  let i = lt;
  let quote: string | null = null;
  let depth = 0;
  while (i < src.length) {
    const c = src[i]!;
    if (quote) {
      if (c === quote && src[i - 1] !== '\\') quote = null;
    } else if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (c === '>' && depth === 0) {
      if (src[i - 1] === '/') return src.slice(lt, i + 1);
      break;
    }
    i++;
  }
  const tag = /^<([A-Za-z][\w.]*)/.exec(src.slice(lt));
  if (!tag) return src.slice(lt, i + 1);
  const e = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const open = new RegExp(`<${e(tag[1]!)}(?=[\\s/>])`, 'g');
  const close = new RegExp(`</${e(tag[1]!)}\\s*>`, 'g');
  let j = i + 1;
  let level = 1;
  while (j < src.length && level > 0) {
    open.lastIndex = j;
    close.lastIndex = j;
    const o = open.exec(src);
    const c = close.exec(src);
    if (!c) break;
    if (o && o.index < c.index) {
      level++;
      j = o.index + 1;
    } else {
      level--;
      j = c.index + c[0].length;
    }
  }
  return src.slice(lt, j);
}

/** Every brace-matched `style={{ … }}` body in a span. */
export function styleBodies(span: string): string[] {
  const out: string[] = [];
  for (const m of span.matchAll(/style=\{\{/g)) {
    let i = m.index! + m[0].length;
    let d = 2;
    let q: string | null = null;
    while (i < span.length && d > 0) {
      const c = span[i]!;
      if (q) {
        if (c === q && span[i - 1] !== '\\') q = null;
      } else if (c === '"' || c === "'" || c === '`') q = c;
      else if (c === '{') d++;
      else if (c === '}') d--;
      i++;
    }
    out.push(span.slice(m.index! + m[0].length, i - 2));
  }
  return out;
}

/** Line comments FIRST, then blocks — sweep 72's order; reversing it re-opens the
 *  runaway-block hole. The trailing pass refuses a body containing `*\/` so a one-line
 *  `/* a // b *\/` keeps its own terminator. */
function stripComments(src: string): string {
  return src
    .replace(/^[ \t]*\/\/[^\n]*$/gm, '')
    .replace(/\/\/(?![^\n]*\*\/)[^\n]*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');
}

/**
 * The value of a style property starting at `from` in RAW SOURCE.
 *
 * Ends at a comma at depth 0 — NOT at a newline, because Prettier wraps a long value
 * across lines and stopping there reads a wrapped ternary as just its condition.
 */
function valueOfProperty(src: string, from: number): string {
  let i = from;
  let quote: string | null = null;
  let depth = 0;
  while (i < src.length) {
    const c = src[i]!;
    if (quote) {
      if (c === quote && src[i - 1] !== '\\') quote = null;
    } else if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']') depth--;
    else if (c === '}') {
      if (depth === 0) break; // the end of the style object
      depth--;
    } else if (c === ',' && depth === 0) break;
    i++;
  }
  return src.slice(from, i);
}

export interface AgreementFinding {
  file: string;
  line: number;
  surface: string;
  inks: string[];
  kind: 'light-slab-themed-ink' | 'themed-slab-dark-ink';
}

function files(list?: string[]): string[] {
  return (
    list ??
    execSync('git ls-files "src/**/*.tsx"', { encoding: 'utf8' }).trim().split('\n').filter(Boolean)
  );
}

/** Clause 1 — a hardcoded opaque-LIGHT inline background with a THEMED ink inside. */
export function findLightSlabThemedInk(list?: string[]): AgreementFinding[] {
  const out: AgreementFinding[] = [];
  for (const f of files(list)) {
    const src = readFileSync(f, 'utf8');
    // A TERNARY ARM COUNTS. This required a bare quoted hex right after `background:`, so
    // `background: catInfo ? catInfo.color + '18' : '#f3f4f6'` matched nothing — and its
    // inactive arm IS an opaque light slab, with a light token as its ink after the ink
    // sweep. Found by spot-checking a site this guard had just declared clean, which is
    // the same per-arm lesson `inlineInkContrast` learned two clauses earlier.
    for (const m of src.matchAll(/(?:background|backgroundColor)\s*:\s*/g)) {
      const raw = valueOfProperty(src, m.index! + m[0].length);
      const lightHex = inkArms(raw)
        .map((a) => /^(['"])(#[0-9a-fA-F]{3,6})\1$/.exec(a.trim())?.[2])
        .find((h) => h && lum(hexRgb(h)!) >= LIGHT_SURFACE_LUM);
      if (!lightHex) continue;
      const lt = src.lastIndexOf('<', m.index!);
      if (lt < 0) continue;
      const span = elementSpan(src, lt);
      if (span.length > 20000) continue;
      // AN ELEMENT THAT PAINTS A LIGHT SLAB AND SETS ITS OWN INK OWNS BOTH HALVES, so its
      // subtree is not this clause's business. Without this the scan reaches a SIBLING:
      // `WritingScreen`'s level badge is five opaque tints each with its own measured dark
      // ink (7.15, 6.49, 4.58, 4.51, 7.57 — the comments record the measurements), and it
      // was reported because a neighbouring `prompt.focus` span uses `var(--subtext)`.
      // Theming that slab would have broken a correct, measured pair. Same exemption
      // clause 2 already carries, and the mirror of it.
      // ARM-AWARE, because the badge's own ink is a five-arm ternary that Prettier wraps —
      // a matcher wanting a quote right after `color:` finds nothing there and reports a
      // correct pair anyway.
      // COMMENTS STRIPPED FIRST. The badge's own ink carries `// blue-800 on #dbeafe,
      // 7.15:1` between its arms, and a comma inside a comment ends the value scan — so
      // the exemption saw a truncated expression, found no bare hex, and reported a
      // correct pair. Line comments before block comments, per sweep 72.
      const ownStyle = stripComments(styleBodies(span)[0] ?? '');
      const ownColour = /(?:^|[,{\s])(?<![a-zA-Z])color:\s*/.exec(ownStyle);
      if (ownColour) {
        const ownArms = inkArms(valueOfProperty(ownStyle, ownColour.index! + ownColour[0].length));
        if (ownArms.some((a) => /^(['"])#[0-9a-fA-F]{3,6}\1$/.test(a.trim()))) continue;
      }
      const inks = [
        ...new Set([...span.matchAll(new RegExp(THEMED_INK.source, 'g'))].map((x) => x[0]!)),
      ];
      if (!inks.length) continue;
      out.push({
        file: f,
        line: src.slice(0, m.index!).split('\n').length,
        surface: lightHex,
        inks,
        kind: 'light-slab-themed-ink',
      });
    }
  }
  return out;
}

/** Clause 2 — a THEMED inline background with a hardcoded DARK ink inside. */
export function findThemedSlabDarkInk(list?: string[]): AgreementFinding[] {
  const out: AgreementFinding[] = [];
  for (const f of files(list)) {
    const src = readFileSync(f, 'utf8');
    for (const m of src.matchAll(
      /(?:background|backgroundColor)\s*:\s*(['"])(var\(--[a-z-]+\))\1/g,
    )) {
      if (!THEMED_SURFACE.test(m[2]!)) continue;
      const lt = src.lastIndexOf('<', m.index!);
      if (lt < 0) continue;
      const span = elementSpan(src, lt);
      if (span.length > 20000) continue;
      const inks: string[] = [];
      for (const body of styleBodies(span)) {
        const cm = /(?:^|[,{\s])(?<![a-zA-Z])color:\s*(['"])(#[0-9a-fA-F]{3,6})\1/.exec(body);
        if (!cm) continue;
        const rgb = hexRgb(cm[2]!);
        if (!rgb || lum(rgb) >= DARK_INK_LUM) continue;
        // THE EXEMPTION THAT MAKES THIS MEASURABLE: an element painting its OWN opaque
        // background owns both halves. Without it this reported 30 where the truth was 2.
        const bm = /(?:^|[,{\s])(?:background|backgroundColor):\s*([^,\n]+)/.exec(body);
        if (bm && !/var\(/.test(bm[1]!)) continue;
        inks.push(cm[2]!);
      }
      if (!inks.length) continue;
      out.push({
        file: f,
        line: src.slice(0, m.index!).split('\n').length,
        surface: m[2]!,
        inks: [...new Set(inks)],
        kind: 'themed-slab-dark-ink',
      });
    }
  }
  return out;
}
