// src/tests/helpers/inlineInkContrast.ts
//
// AN INLINE `color:` LANDS ON WHATEVER THE THEME PAINTED (2026-09-26).
//
// The mirror of `themedInlineBackground`. There an element painted a BACKGROUND and
// inherited the text colour; here it sets a COLOUR and inherits the background. In
// dark mode that background is `--card` (#1e293b), so a hardcoded DARK brand hex is
// dark-on-dark. Measured with axe's color-contrast rule over all 430 routes in both
// themes before the fix: **dark 4,354 failing nodes across 348 routes; light 932
// across 236** — 3,429 extra nodes attributable to dark mode alone.
//
// 1,308 inline `color` literals across 288 files were of this shape and every one now
// reads a `--ink-*` token. Each token's `:root` value IS the literal it replaced
// wherever one literal owned a family, so light mode is byte-identical for the top
// twelve (1,084 uses); the tail of 49 literals was folded into the same ten families,
// which shifts 194 uses to a different shade of the SAME hue in light mode and was
// checked to keep every one of them at or above 4.5:1 on white.
//
// WHAT IS OUT OF SCOPE, AND MEASURED RATHER THAN ASSUMED. An element that paints its
// own OPAQUE background owns both halves of its contrast: a green chip with dark green
// ink is correct in either theme, and rewriting its ink would put a light colour on a
// light chip. 251 such sites exist; 25 of them fail their own size-appropriate AA
// threshold regardless of theme, which is a separate and much milder class (3.3:1
// badges, not 1.2:1 invisible ink) recorded in AUDIT-STATE rather than fixed here.

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

/** The dark theme's card surface — what an un-painted element sits on. */
export const DARK_CARD: readonly [number, number, number] = [30, 41, 59];

/** WCAG AA for normal-size text. */
export const AA_NORMAL = 4.5;

export function parseColor(raw: string): [number, number, number] | null {
  const v = raw.replace(/['"]/g, '').trim();
  if (/^white$/i.test(v)) return [255, 255, 255];
  if (/^black$/i.test(v)) return [0, 0, 0];
  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(v);
  if (hex) {
    const h =
      hex[1]!.length === 3
        ? hex[1]!
            .split('')
            .map((c) => c + c)
            .join('')
        : hex[1]!;
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number];
  }
  const fn = /^rgba?\(([^)]+)\)$/i.exec(v);
  if (fn) {
    const p = fn[1]!.split(',').map((x) => parseFloat(x));
    // A TRANSLUCENT colour composites over whatever the class painted and therefore
    // tracks the theme; it is not a hardcoded ink and must not be reported as one.
    if (p.length >= 3 && p.every((x) => Number.isFinite(x)) && (p.length < 4 || p[3]! >= 0.9)) {
      return [p[0]!, p[1]!, p[2]!];
    }
  }
  return null;
}

function relLuminance([r, g, b]: readonly [number, number, number]): number {
  const f = (x: number) => {
    const c = x / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export function contrast(
  a: readonly [number, number, number],
  b: readonly [number, number, number],
): number {
  const [hi, lo] = [relLuminance(a), relLuminance(b)].sort((x, y) => y - x);
  return (hi! + 0.05) / (lo! + 0.05);
}

export interface InkFinding {
  file: string;
  line: number;
  literal: string;
  ratio: number;
}

/**
 * Every `style={{ … }}` object in a file, BRACE-MATCHED and quote-aware.
 *
 * A style object holds arrow functions, nested objects and strings containing braces,
 * so a regex cannot find its end. (The codemod that fixed this class orphaned a brace
 * in 25 files at once on its first attempt for exactly this reason.)
 */
function styleObjects(src: string): { index: number; body: string }[] {
  const out: { index: number; body: string }[] = [];
  for (const m of src.matchAll(/style=\{\{/g)) {
    const start = m.index! + m[0].length;
    let i = start;
    let depth = 2;
    let quote: string | null = null;
    while (i < src.length && depth > 0) {
      const c = src[i]!;
      if (quote) {
        if (c === quote && src[i - 1] !== '\\') quote = null;
      } else if (c === '"' || c === "'" || c === '`') quote = c;
      else if (c === '{') depth++;
      else if (c === '}') depth--;
      i++;
    }
    out.push({ index: m.index!, body: src.slice(start, i - 2) });
  }
  return out;
}

/**
 * Inline `color` literals that would fail AA on the dark card, on an element that
 * paints no opaque background of its own.
 */
export function findDarkModeInk(files?: string[]): InkFinding[] {
  const list =
    files ??
    execSync('git ls-files "src/**/*.tsx"', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(Boolean);
  const findings: InkFinding[] = [];
  for (const f of list) {
    const src = readFileSync(f, 'utf8');
    for (const { index, body } of styleObjects(src)) {
      // `(?<![a-zA-Z])` is what keeps `borderColor:` and `backgroundColor:` out. It is
      // load-bearing: without it every border colour in the app is reported, and
      // sweep 156 already settled that a border is a different question.
      const cm = /(?:^|[,{\s])(?<![a-zA-Z])color:\s*('[^']*'|"[^"]*")/.exec(body);
      if (!cm) continue;
      const ink = parseColor(cm[1]!);
      if (!ink) continue;
      const ratio = contrast(ink, DARK_CARD);
      if (ratio >= AA_NORMAL) continue;
      // Does it paint its own OPAQUE background? Then it owns both halves — but a
      // THEMED background is not opaque-light, it goes dark with the theme, so a dark
      // ink on one is the same defect.
      //
      // THIS CLAUSE WAS THE THIRD SHAPE AND THE CENSUS IS WHAT FOUND IT. Converting the
      // light container backgrounds to themed tints made 19 routes WORSE, because the
      // elements exempted here for painting a light background kept their dark ink and
      // their surface had just gone dark underneath it. Two codemods that are each
      // correct alone can compose into a regression; only measuring the rendered page
      // shows it.
      const bm = /(?:^|[,{\s])(?:background|backgroundColor):\s*([^,\n]+)/.exec(body);
      if (bm && !/var\(/.test(bm[1]!)) continue;
      findings.push({
        file: f,
        line: src.slice(0, index).split('\n').length,
        literal: cm[1]!,
        ratio,
      });
    }
  }
  return findings;
}
