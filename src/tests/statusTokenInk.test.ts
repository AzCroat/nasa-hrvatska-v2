/**
 * A STATUS TOKEN IS A SURFACE COLOUR, NOT AN INK (2026-09-27).
 *
 * Measured over all 430 routes in the LIGHT theme with a real browser (ink composited
 * over the nearest opaque surface, size-appropriate AA threshold): 451 elements on 43
 * routes under the bar, and the largest single cause was not a literal at all — it was
 * `color: var(--success)`. `--success` (#16a34a) is 3.30:1 on white, `--warning`
 * (#d97706) 3.19:1, and `--error` (#dc2626) 3.95:1 on its own tint. About 190 of the 451
 * were those three, on the answer feedback of the drills a learner meets every day
 * (VocativeScreen's "Marijo!", ReflexiveScreen's "✗ WRONG", Boje's colour words).
 *
 * `inlineInkContrast` could not see it: it judges LITERALS, and a `var(--…)` is exactly
 * what that guard tells you to write. The token was right for a badge background and
 * wrong for the text on it, and the name does not say which.
 *
 * The fix is the pattern the ink tokens already use: each status token has an INK TWIN
 * whose light value clears AA and whose DARK value is the token's own, so dark mode
 * cannot move. What this pins:
 *
 *  1. every twin exists in both themes, dark == the status token's dark value, light
 *     clears 4.5:1 on white AND on the token's own tints;
 *  2. no `style={{…}}` block and no CSS rule uses a status token as `color`;
 *  3. a DATA field may still hold the surface token (StatsTab paints `cefr.color` as a
 *     background too) — but only in a file that renders it through `accentInk`, which
 *     maps it to the twin.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { STATUS_INK, accentInk } from '../lib/accentInk';
import { escapeRegExp } from './helpers/emptyClaimSurfaces';

const CSS = readFileSync('src/index.css', 'utf8');

function block(selectorRe: RegExp): string {
  const m = selectorRe.exec(CSS);
  if (!m) throw new Error(`no block for ${selectorRe}`);
  let d = 0;
  for (let k = m.index + m[0].length - 1; k < CSS.length; k++) {
    if (CSS[k] === '{') d++;
    else if (CSS[k] === '}') {
      d--;
      if (d === 0) return CSS.slice(m.index, k);
    }
  }
  throw new Error('unbalanced');
}
const ROOT = block(/^:root\s*\{/m);
const DARK = block(/^\.dark\s*\{/m);

function tokenValue(scope: string, name: string): string | undefined {
  const m = new RegExp(`(?:^|[\\s;{])${escapeRegExp(name)}\\s*:\\s*([^;]+);`, 'm').exec(scope);
  return m ? m[1]!.trim() : undefined;
}
const nameOf = (v: string) => /var\((--[\w-]+)\)/.exec(v)![1]!;

function lum(hex: string): number {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r!) + 0.7152 * f(g!) + 0.0722 * f(b!);
}
function ratio(a: string, b: string): number {
  const [x, y] = [lum(a), lum(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
const isHex = (v: string | undefined): v is string => !!v && /^#[0-9a-f]{6}$/i.test(v);
/** An `rgba(r,g,b,a)` tint painted over an opaque hex, as the browser composites it. */
function composite(tint: string, under: string): string | undefined {
  if (isHex(tint)) return tint;
  const m = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(tint);
  if (!m || !isHex(under)) return undefined;
  const a = parseFloat(m[4]!);
  const u = [1, 3, 5].map((i) => parseInt(under.slice(i, i + 2), 16));
  return (
    '#' +
    [1, 2, 3]
      .map((i, k) => Math.round(Number(m[i]) * a + u[k]! * (1 - a)))
      .map((v) => v.toString(16).padStart(2, '0'))
      .join('')
  );
}

describe('status tokens have ink twins that clear AA', () => {
  it('maps every status token, and accentInk returns the twin', () => {
    expect(Object.keys(STATUS_INK).sort()).toEqual(
      ['var(--accent)', 'var(--error)', 'var(--success)', 'var(--warning)'].sort(),
    );
    for (const [token, twin] of Object.entries(STATUS_INK)) {
      expect(accentInk(token)).toBe(twin);
      // the alpha form must not bypass the mapping — the token path never honoured alpha
      expect(accentInk(token, 0.6)).toBe(twin);
    }
  });

  it.each(Object.entries(STATUS_INK))(
    '%s → %s: defined in both themes, dark unchanged, light clears AA on white and its tints',
    (token, twin) => {
      const t = nameOf(token);
      const w = nameOf(twin);
      const light = tokenValue(ROOT, w);
      const dark = tokenValue(DARK, w);
      expect(light, `${w} missing from :root`).toBeTruthy();
      expect(dark, `${w} missing from .dark`).toBeTruthy();
      // DARK: the twin clears AA on the dark card AND on the status token's own tints
      // composited over it — which is where the ink actually sits. This used to pin
      // "dark equals the token's dark value", which kept dark mode from moving in the
      // sweep that introduced the twins, and it pinned --ink-error at #f87171: 3.93:1
      // on its own tint ("✗ WRONG", 24 elements, measured 2026-09-27). Pin the
      // measurement, not the value.
      expect(isHex(dark), `${w} dark value should be a hex`).toBe(true);
      const card = tokenValue(DARK, '--card');
      expect(isHex(card), '--card dark').toBe(true);
      const darkSurfaces = [
        card!,
        ...['-bg', '-bg-strong']
          .map((sfx) => tokenValue(DARK, t + sfx))
          .map((v) => (v ? composite(v, card!) : undefined)),
      ].filter(isHex);
      for (const bg of darkSurfaces) {
        expect(ratio(dark!, bg), `${w} dark ${dark} on ${bg}`).toBeGreaterThanOrEqual(4.5);
      }
      // Light value clears AA as small text on white and on the token's own light tints.
      expect(isHex(light), `${w} light value should be a hex`).toBe(true);
      const surfaces = [
        '#ffffff',
        ...['-bg', '-bg-strong'].map((s) => tokenValue(ROOT, t + s)),
      ].filter(isHex);
      for (const bg of surfaces) {
        expect(ratio(light!, bg), `${w} ${light} on ${bg}`).toBeGreaterThanOrEqual(4.5);
      }
    },
  );
});

// ── the source ratchet ──────────────────────────────────────────────────────────────

const RAW = /var\(--(success|warning|error|accent)\)/;

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (e !== 'tests') walk(p, out);
    } else if (/\.(tsx|ts)$/.test(e)) out.push(p);
  }
  return out;
}
/** index of the brace matching the one before `i`, string-aware */
function matchBrace(s: string, i: number): number {
  let d = 1;
  for (let k = i; k < s.length; k++) {
    const c = s[k];
    if (c === "'" || c === '"' || c === '`') {
      const q = c;
      k++;
      while (k < s.length && s[k] !== q) {
        if (s[k] === '\\') k++;
        k++;
      }
      continue;
    }
    if (c === '{' || c === '(' || c === '[') d++;
    else if (c === '}' || c === ')' || c === ']') {
      d--;
      if (d === 0) return k;
    }
  }
  return -1;
}
/** end of a property value: the next top-level ',' or the closing brace */
function valueEnd(s: string, i: number): number {
  let d = 0;
  for (let k = i; k < s.length; k++) {
    const c = s[k];
    if (c === "'" || c === '"' || c === '`') {
      const q = c;
      k++;
      while (k < s.length && s[k] !== q) {
        if (s[k] === '\\') k++;
        k++;
      }
      continue;
    }
    if (c === '{' || c === '(' || c === '[') d++;
    else if (c === '}' || c === ')' || c === ']') {
      if (d === 0) return k;
      d--;
    } else if (c === ',' && d === 0) return k;
  }
  return s.length;
}

/** Every `color:` value inside a `style={{…}}` block that names a raw status token. */
function styleBlockStatusInk(src: string): string[] {
  const hits: string[] = [];
  const re = /style=\{\{/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    const open = m.index + m[0].length;
    const close = matchBrace(src, open);
    if (close < 0) continue;
    const blockSrc = src.slice(open, close);
    const cre = /(?<![\w-])color\s*:/g;
    let cm: RegExpExecArray | null;
    while ((cm = cre.exec(blockSrc))) {
      const vs = cm.index + cm[0].length;
      const v = blockSrc.slice(vs, valueEnd(blockSrc, vs));
      if (RAW.test(v)) hits.push(v.trim().slice(0, 80));
    }
  }
  return hits;
}

const FILES = walk('src');

describe('no status token is painted as text', () => {
  it('scans a real corpus', () => {
    const blocks = FILES.reduce(
      (n, f) => n + (readFileSync(f, 'utf8').match(/style=\{\{/g) || []).length,
      0,
    );
    expect(
      blocks,
      'the style-block walk found almost nothing — the scan proves nothing',
    ).toBeGreaterThan(3000);
  });

  it('the scanner finds the shapes it must (positive control)', () => {
    expect(styleBlockStatusInk(`<b style={{ color: 'var(--success)' }}/>`)).toHaveLength(1);
    expect(
      styleBlockStatusInk(`<b style={{ fontSize: 3,
        color: ok ? 'var(--ink-green)' : 'var(--error)' }}/>`),
    ).toHaveLength(1);
    // a background or border using the SURFACE token is correct and must not be flagged
    expect(
      styleBlockStatusInk(
        `<b style={{ background: 'var(--success)', borderColor: 'var(--error)', color: '#fff' }}/>`,
      ),
    ).toEqual([]);
  });

  it('no style={{…}} block uses --success/--warning/--error/--accent as `color`', () => {
    const bad: string[] = [];
    for (const f of FILES) {
      for (const v of styleBlockStatusInk(readFileSync(f, 'utf8'))) bad.push(`${f}: color: ${v}`);
    }
    expect(bad, 'Use the ink twin (--ink-green / --ink-warn / --ink-error / --ink-accent)').toEqual(
      [],
    );
  });

  it('no CSS rule uses a status token as `color`', () => {
    const bad = [...CSS.matchAll(/(?<![\w-])color\s*:\s*([^;}]*)/g)]
      .map((m) => m[1]!)
      .filter((v) => RAW.test(v));
    expect(bad).toEqual([]);
  });

  it('a data field holding a status token is rendered through accentInk', () => {
    const offenders: string[] = [];
    let dataFields = 0;
    for (const f of FILES) {
      const src = readFileSync(f, 'utf8');
      const stripped = src.replace(/style=\{\{[\s\S]*?\}\}/g, '');
      const n = [
        ...stripped.matchAll(/(?<![\w-])color\s*:\s*'var\(--(success|warning|error|accent)\)'/g),
      ].length;
      if (!n) continue;
      dataFields += n;
      if (!/accentInk\(/.test(src)) offenders.push(`${f} (${n})`);
    }
    // Measured 2026-09-27: 11 such fields in 3 files (GoalFocusSection, LearningInsights,
    // StatsTab), each rendered as text through accentInk and — in StatsTab — also as a
    // badge background, which is why the data keeps the surface token.
    expect(dataFields).toBeGreaterThan(0);
    expect(offenders).toEqual([]);
  });
});
