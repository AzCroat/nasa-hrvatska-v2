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
import { inkArms } from './inkArms';

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

/** The `[start, end)` spans of every `accentInk(` argument list in an expression. */
function accentInkSpans(expr: string): [number, number][] {
  const out: [number, number][] = [];
  for (const m of expr.matchAll(/accentInk\s*\(/g)) {
    let i = m.index! + m[0].length;
    let depth = 1;
    let quote: string | null = null;
    while (i < expr.length && depth > 0) {
      const c = expr[i]!;
      if (quote) {
        if (c === quote && expr[i - 1] !== '\\') quote = null;
      } else if (c === '"' || c === "'" || c === '`') quote = c;
      else if (c === '(') depth++;
      else if (c === ')') depth--;
      i++;
    }
    out.push([m.index! + m[0].length, i]);
  }
  return out;
}

/**
 * The value of a style property starting at `from`, up to the comma that ends it.
 *
 * `[^,\n]+` CANNOT DO THIS and the suite's own planted-defect fixture is what proved it:
 * `color: 'rgb(22, 163, 74)'` contains two commas, so a comma-terminated match returns
 * `'rgb(22` and the literal is silently unparseable — reported as no finding. That
 * fixture carries an rgb() form precisely because an earlier codemod's pattern missed it.
 * Quote- and paren-aware, stopping only at a comma at depth 0 outside a string.
 */
export function valueOf(body: string, from: number): string {
  let i = from;
  let quote: string | null = null;
  let depth = 0;
  while (i < body.length) {
    const c = body[i]!;
    if (quote) {
      if (c === quote && body[i - 1] !== '\\') quote = null;
    } else if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth--;
    // A COMMA ENDS A PROPERTY; A NEWLINE DOES NOT. Prettier wraps a long value across
    // lines routinely, and stopping at `\n` read HNLScreen's position circle background
    //     background:
    //       i === 0 ? '#f59e0b' : … : 'rgba(0,0,0,.08)'
    // as just `i === 0`, which is unparseable and so counted as OPAQUE — exempting the
    // element and hiding a #78716c ink at 3.05:1. Same family as the comma truncation
    // above, and as the reason-union matcher Prettier broke in sweep 130: never let a
    // matcher depend on where the formatter chose to wrap.
    else if (c === ',' && depth === 0) break;
    i++;
  }
  return body.slice(from, i);
}

/**
 * Does this background value paint an OPAQUE surface of its own?
 *
 * A gradient or a solid hex does; an `rgba()`/`hsla()` under 0.9 alpha and the keywords
 * `none`/`transparent` do not — they let the theme through, so the element does NOT own
 * both halves of its contrast. Anything unparseable is treated as opaque, which keeps
 * this clause from manufacturing findings on a shape it does not understand.
 */
export function isOpaqueSurface(raw: string): boolean {
  const v = raw.replace(/['"]/g, '').trim();
  if (/^(?:none|transparent|inherit|initial|unset)$/i.test(v)) return false;
  const fn = /^(?:rgba|hsla)\(([^)]+)\)$/i.exec(v);
  if (fn) {
    const parts = fn[1]!.split(/[,/]/).map((x) => parseFloat(x));
    const a = parts[3];
    return !(Number.isFinite(a) && a! < 0.9);
  }
  // A bare 8-digit hex carries its own alpha: #RRGGBBAA.
  const hex8 = /^#[0-9a-f]{6}([0-9a-f]{2})$/i.exec(v);
  if (hex8) return parseInt(hex8[1]!, 16) >= 230;
  // AND THE ALPHA CAN BE APPENDED BY CONCATENATION, which is how this codebase writes a
  // tint of a DATA colour: `catInfo.color + '18'`, `t.color + '15'`, `accent + '99'` — 58
  // such sites. The base is a variable, so the value is unparseable as a colour and the
  // fallback below reads it as opaque; but `18` is 24/255, a 9% wash that the theme shows
  // straight through. /crmap's category pills were exempted on exactly this and stayed
  // dark-on-dark after every other clause was right.
  const appended = /\+\s*['"]([0-9a-f]{2})['"]\s*$/i.exec(raw.trim());
  if (appended) return parseInt(appended[1]!, 16) >= 230;
  // THE SAME IDIOM IN A TEMPLATE, which is how 51 more sites write it:
  // `background: \`${p.schoolColor}0d\`` — 0d is 13/255, a 5% wash. /croatiaathletes' stat
  // lines were the last route left red after every other clause was right, on exactly this.
  const templated = /^`[^`]*\}([0-9a-f]{2})`$/i.exec(raw.trim());
  if (templated) return parseInt(templated[1]!, 16) >= 230;
  return true;
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
      //
      // THE VALUE IS SCANNED, NOT JUST A LEADING LITERAL (2026-09-27). The first version
      // required a quote immediately after `color:`, so a CONDITIONAL ink was invisible:
      // `color: passed ? '#16a34a' : '#dc2626'` matched nothing, and fourteen such sites
      // sat outside the guard while it read green — including /learn's correct/incorrect
      // feedback and LearnPath's checkpoint markers. Every quoted colour the expression
      // can resolve to is judged, because a ternary paints BOTH of them.
      // THE ES6 SHORTHAND HAS NO COLON AT ALL. `{ background: color + '18', color }` is
      // `color: color`, and 54 sites in the app write it that way — the category chip on
      // /croatia_today, the level badges on /immersion, the phrase pills on /phraseofday.
      // A matcher looking for `color:` finds nothing there, which is why those routes
      // stayed red while this guard reported clean. A shorthand is an IDENTIFIER value, so
      // it is reported the same way a bare identifier would be: as a site the guard cannot
      // resolve to literals and must therefore leave to `accentInk`.
      const cm = /(?:^|[,{\s])(?<![a-zA-Z])color:\s*/.exec(body);
      if (!cm) continue;
      const value = valueOf(body, cm.index! + cm[0].length);
      // A LITERAL INSIDE `accentInk(...)` IS ALREADY HANDLED — that helper mixes it toward
      // white by the theme's own lift, so `accentInk('#dc2626', 0.5)` is correct in both
      // themes. The skip is POSITIONAL, not per-expression: `cond ? accentInk(c) : '#78716c'`
      // must still report the raw arm, and a blanket "contains accentInk" test would hide it.
      const wrapped = accentInkSpans(value);
      const literals = [...value.matchAll(/'[^']*'|"[^"]*"/g)]
        .filter((m) => !wrapped.some(([a, b]) => m.index! >= a && m.index! < b))
        .map((x) => x[0]!);
      if (!literals.length) continue;
      let worst: { ink: [number, number, number]; literal: string; ratio: number } | null = null;
      for (const lit of literals) {
        const ink = parseColor(lit);
        if (!ink) continue;
        const r = contrast(ink, DARK_CARD);
        if (r >= AA_NORMAL) continue;
        if (!worst || r < worst.ratio) worst = { ink, literal: lit, ratio: r };
      }
      if (!worst) continue;
      const ratio = worst.ratio;
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
      //
      // A TRANSLUCENT BACKGROUND IS NOT AN OWN SURFACE, AND READING IT AS ONE IS WHAT
      // LET ~170 SITES THROUGH (2026-09-27). The commonest chip in this app is
      // `background: 'rgba(14,116,144,0.09)'` with `color: '#0e7490'` — a 9% tint of the
      // ink itself. That has no `var(`, so this clause exempted it; but a 9% tint
      // COMPOSITES over whatever the theme painted, so in dark mode the chip is dark and
      // the ink is dark. Measured over all 430 routes in dark mode, that shape is the
      // whole remaining tail: /readlist's level badges, /crmap's category pills,
      // /croatia_today's topic chips, /personas, /immersion, /football's link cards.
      // Only an OPAQUE background owns both halves, which is the same 0.9-alpha rule
      // `parseColor` already applies to inks.
      // `valueOf` HERE TOO, and for the same reason it was needed above: the commonest
      // translucent tint is `rgba(14,116,144,0.09)`, which a comma-terminated match
      // returns as `'rgba(14` — unparseable, so `isOpaqueSurface` fell back to "opaque"
      // and exempted the very shape this clause exists to catch. The synthetic control in
      // the test is what found it; the corpus could not, because every real site was
      // already fixed by then.
      // PER ARM, NOT PER EXPRESSION, and this was the last hole. A background can be a
      // ternary — `background: catInfo ? catInfo.color + '18' : '#f3f4f6'` — and reading
      // the WHOLE string as one value made `isOpaqueSurface` say "opaque" on the strength
      // of the `#f3f4f6` arm, while the arm that actually renders is an 8%-alpha tint. The
      // element is exempt only when EVERY arm it can paint is opaque; one translucent arm
      // means the theme shows through and the element does not own its contrast.
      const bm = /(?:^|[,{\s])(?:background|backgroundColor):\s*/.exec(body);
      const bgValue = bm ? valueOf(body, bm.index! + bm[0].length) : null;
      if (bgValue && !/var\(/.test(bgValue)) {
        const bgArms = inkArms(bgValue);
        if (bgArms.length && bgArms.every((a) => isOpaqueSurface(a))) continue;
      }
      findings.push({
        file: f,
        line: src.slice(0, index).split('\n').length,
        literal: worst.literal,
        ratio,
      });
    }
  }
  return findings;
}
