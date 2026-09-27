/**
 * WHITE TEXT OWNS ITS SURFACE (2026-09-27).
 *
 * The census that closed the ink half of the contrast work (430 routes, both themes, a
 * real browser) left one large group standing, and it is the mirror image of the ink
 * class: WHITE text on a surface the DATA supplies.
 *
 *     <span style={{ background: level.color, color: 'white' }}>A2</span>
 *
 * The level palettes, the case colours on the grammar map, the scenario and dialect
 * colours are each correctly a pale-ish accent somewhere else, and under white text most
 * of them fail: `#16a34a` 3.30:1, `#ca8a04` 2.94, `#f97316` 2.80, the vocative green
 * 2.43. `inlineInkContrast` cannot see it — the ink is white, which is fine, and the
 * surface is a variable. `accentFill` answers it at the render site, the way `accentInk`
 * answers the ink question: the least darkening, same hue, that puts white at 5.5:1.
 *
 * What this pins, over every `style={{…}}` block whose text is UNCONDITIONALLY white
 * (the case where every arm of the background sits under that white):
 *
 *  1. a background arm that is a data value (an identifier or member expression) goes
 *     through `accentFill`;
 *  2. a background arm that is a hex literal clears 4.5:1 against white;
 *  3. `accentFill` itself does what it says for every hex a data module in `src/`
 *     declares as a `color:` — and leaves translucent values and tokens alone.
 *
 * Blocks whose text colour is itself a ternary are out of scope for the source rule: an
 * arm there may carry dark text, and darkening its surface would make it worse. The
 * browser census covers them.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { accentFill } from '../lib/accentInk';

function walk(dir: string, out: string[] = []): string[] {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) {
      if (n !== 'tests') walk(p, out);
    } else if (/\.tsx$/.test(n)) out.push(p);
  }
  return out;
}

function luminance(hex: string): number {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const f = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r!) + 0.7152 * f(g!) + 0.0722 * f(b!);
}
const onWhite = (hex: string) => 1.05 / (luminance(hex) + 0.05);

/** The body of every `style={{ … }}` block, brace-matched and string-aware. */
function styleBlocks(src: string): string[] {
  const out: string[] = [];
  let i = 0;
  for (;;) {
    const m = src.indexOf('style={{', i);
    if (m < 0) return out;
    let j = m + 8;
    let d = 1;
    while (j < src.length && d) {
      const c = src[j]!;
      if (c === "'" || c === '"' || c === '`') {
        const q = c;
        j++;
        while (j < src.length && src[j] !== q) {
          if (src[j] === '\\') j++;
          j++;
        }
      } else if (c === '{') d++;
      else if (c === '}') d--;
      j++;
    }
    out.push(src.slice(m + 8, j - 1));
    i = j;
  }
}

/** The value of a top-level `key:` in a style block, up to the next top-level comma. */
function valueOf(block: string, key: RegExp): string | null {
  const m = new RegExp(`(?:^|[{,])\\s*${key.source}\\s*:`, 'm').exec(block);
  if (!m) return null;
  let j = m.index + m[0].length;
  let d = 0;
  let q: string | null = null;
  const start = j;
  for (; j < block.length; j++) {
    const c = block[j]!;
    if (q) {
      if (c === '\\') j++;
      else if (c === q) q = null;
    } else if (c === "'" || c === '"' || c === '`') q = c;
    else if ('([{'.includes(c)) d++;
    else if (')]}'.includes(c)) d--;
    else if (c === ',' && d === 0) break;
  }
  return block.slice(start, j).trim();
}

/** The value arms of a (possibly right-nested) ternary; a non-ternary is one arm. */
export function armsOf(v: string): string[] {
  const toks: string[] = [];
  let cur = '';
  let d = 0;
  let q: string | null = null;
  for (let i = 0; i < v.length; i++) {
    const c = v[i]!;
    if (q) {
      cur += c;
      if (c === '\\') cur += v[++i] ?? '';
      else if (c === q) q = null;
    } else if (c === "'" || c === '"' || c === '`') {
      q = c;
      cur += c;
    } else if ('([{'.includes(c)) {
      d++;
      cur += c;
    } else if (')]}'.includes(c)) {
      d--;
      cur += c;
    } else if (d === 0 && c === '?' && v[i + 1] !== '.' && v[i + 1] !== '?' && v[i - 1] !== '?') {
      toks.push(cur.trim(), '?');
      cur = '';
    } else if (d === 0 && c === ':') {
      toks.push(cur.trim(), ':');
      cur = '';
    } else cur += c;
  }
  toks.push(cur.trim());
  if (toks.length === 1) return [toks[0]!];
  const arms: string[] = [];
  let k = 0;
  while (k < toks.length) {
    if (toks[k + 1] === '?') {
      arms.push(toks[k + 2]!);
      k += 4;
    } else {
      arms.push(toks[k]!);
      k++;
    }
  }
  return arms;
}

const WHITE = /^['"](?:#fff|#ffffff|white)['"]$/i;
const DATA_ARM = /^[A-Za-z_$][\w$]*(?:\??\.[A-Za-z_$][\w$]*)*$/;
const HEX_ARM = /^'(#[0-9a-f]{6}|#[0-9a-f]{3})'$/i;

interface Finding {
  file: string;
  arm: string;
  why: string;
}

export function whiteTextFindings(file: string, src: string): { subjects: number; bad: Finding[] } {
  let subjects = 0;
  const bad: Finding[] = [];
  for (const blk of styleBlocks(src)) {
    const color = valueOf(blk, /color/);
    if (!color || !WHITE.test(color)) continue;
    const bg = valueOf(blk, /background(?:Color)?/);
    if (!bg) continue;
    subjects++;
    for (const arm of armsOf(bg.replace(/\s+/g, ' '))) {
      if (DATA_ARM.test(arm) && arm !== 'undefined' && !/_GRAD$/.test(arm)) {
        bad.push({ file, arm, why: 'a data colour under white text must go through accentFill' });
      }
      const hex = HEX_ARM.exec(arm);
      if (hex && onWhite(hex[1]!) < 4.5) {
        bad.push({
          file,
          arm,
          why: `white on ${hex[1]} is ${onWhite(hex[1]!).toFixed(2)}:1`,
        });
      }
    }
  }
  return { subjects, bad };
}

const FILES = walk('src/components');

describe('white text owns its surface', () => {
  it('no white-text block paints a raw data colour or a pale literal under it', () => {
    let subjects = 0;
    const bad: string[] = [];
    for (const f of FILES) {
      const r = whiteTextFindings(f, readFileSync(f, 'utf8'));
      subjects += r.subjects;
      for (const b of r.bad) bad.push(`${b.file}: ${b.arm} — ${b.why}`);
    }
    // Non-vacuity: the block walker must actually reach the population. Measured 2026-09-27.
    expect(subjects).toBeGreaterThan(250);
    expect(bad).toEqual([]);
  });

  it('the rule fires on both shapes and accepts the fix (synthetic control)', () => {
    const probe = `
      <span style={{ background: level.color, color: 'white' }} />
      <span style={{ background: on ? '#16a34a' : 'var(--card)', color: '#fff' }} />
      <span style={{ background: accentFill(level.color), color: 'white' }} />
      <span style={{ background: on ? '#15803d' : '#0e7490', color: '#fff' }} />
      <span style={{ background: level.color, color: on ? '#fff' : 'var(--text)' }} />`;
    const r = whiteTextFindings('probe.tsx', probe);
    expect(r.subjects).toBe(4);
    expect(r.bad.map((b) => b.arm)).toEqual(['level.color', "'#16a34a'"]);
  });
});

describe('accentFill', () => {
  // Every hex a data module in src/ declares as a colour — the population the render sites draw on.
  const dataHexes = new Set<string>();
  const dataFiles: string[] = [];
  (function collect(dir: string) {
    for (const n of readdirSync(dir)) {
      const p = join(dir, n);
      if (statSync(p).isDirectory()) collect(p);
      else if (/\.(js|ts|tsx)$/.test(n)) dataFiles.push(p);
    }
  })('src/data');
  (function collect(dir: string) {
    for (const n of readdirSync(dir)) {
      const p = join(dir, n);
      if (statSync(p).isDirectory()) collect(p);
      else if (/\.(js|ts|tsx)$/.test(n)) dataFiles.push(p);
    }
  })('functions/api/content/_data');
  // Component files hold per-item data tables too (level palettes, scenario lists).
  dataFiles.push(...walk('src/components'));
  for (const f of dataFiles) {
    for (const m of readFileSync(f, 'utf8').matchAll(/\bcolor\s*:\s*'(#[0-9a-fA-F]{6})'/g)) {
      dataHexes.add(m[1]!.toLowerCase());
    }
  }

  it('puts white at 5.5:1 or better on every data colour, and never lightens one', () => {
    expect(dataHexes.size).toBeGreaterThan(50);
    for (const hex of dataHexes) {
      const out = accentFill(hex);
      expect(onWhite(out), `${hex} → ${out}`).toBeGreaterThanOrEqual(5.4);
      expect(luminance(out), hex).toBeLessThanOrEqual(luminance(hex) + 1e-9);
    }
  });

  it('returns a colour that already reads unchanged, and leaves tints and tokens alone', () => {
    expect(accentFill('#164e63')).toBe('#164e63');
    expect(accentFill('#16a34a')).not.toBe('#16a34a');
    expect(accentFill('#16a34a1a')).toBe('#16a34a1a');
    expect(accentFill('rgba(22,163,74,.1)')).toBe('rgba(22,163,74,.1)');
    expect(accentFill('var(--fill-success)')).toBe('var(--fill-success)');
    expect(accentFill(undefined)).toBeUndefined();
  });
});
