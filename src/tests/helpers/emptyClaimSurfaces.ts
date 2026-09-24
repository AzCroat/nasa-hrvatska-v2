/**
 * emptyClaimSurfaces — derives the surfaces that render a CLAIM (or bail) on a
 * content-derived collection being empty.
 *
 * "Empty" and "the payload has not arrived" are the same expression, so every
 * such render is a place the app can tell a learner something false about their
 * own deck. Sweep 101 found four live instances of it — "All caught up!" on
 * Review, "Complete a few vocabulary lessons first" on HOME, "No words match
 * your search." on the advanced lists, and a Start button that did nothing at
 * all — and the shared classifier `poolLaunchBlock` already existed.
 *
 * FOUR SHAPES, and each was added only after it was found to hide a member the
 * previous shape could not see (the sweep-99 rule: a derivation that misses a
 * known member is an unfinished tool, not a negative result):
 *   1. `X.length === 0 && <…>`                     — the obvious one
 *   2. `if (X.length === 0) return (<…>)`          — hid Review's "All caught up!"
 *   3. `const flag = X.length === 0` then `flag ?` — hid LearnPath's
 *   4. `if (X.length < 4) setFlag(true)`           — hid SpeedChallenge's, whose
 *      pool lives in a REF (`pool.current = buildQuestionPool(V)`), an assignment
 *      rather than a declaration, so the whole screen was invisible.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (!['node_modules', 'tests', '__tests__'].includes(e)) walk(p, out);
    } else if (/\.tsx$/.test(e) && !/\.test\./.test(e)) out.push(p);
  }
  return out;
}

const EMPTY_TEST =
  /\.length\s*(?:===\s*0|==\s*0|<\s*\d+|<=\s*0)|^\s*!\s*[A-Za-z_$][\w$.]*\.length|Object\.keys\([^)]*\)\.length\s*(?:===\s*0|<\s*\d+)/;

/** Names holding content-derived data, closed over declarations AND assignments. */
function contentDerived(src: string): Set<string> {
  const derived = new Set<string>();
  for (const m of src.matchAll(/const\s*\{([^}]*)\}\s*=\s*useContent\s*\(\s*\)/g))
    for (const part of m[1]!.split(',')) {
      const t = part.trim();
      if (t) derived.add((t.includes(':') ? t.split(':')[1]! : t).trim());
    }
  if (!derived.size) return derived;
  const mentions = (txt: string) =>
    [...derived].some((d) => new RegExp(`\\b${d.replace(/\$/g, '\\$')}\\b`).test(txt));
  const DECL = /(?:const|let)\s+([A-Za-z_$][\w$]*)\s*(?::\s*[^=]{0,160})?=\s*([\s\S]{0,500}?);\n/g;
  const ASSIGN = /([A-Za-z_$][\w$]*)(?:\.current)?\s*=\s*([^;\n]{0,300});/g;
  for (let i = 0; i < 8; i++) {
    for (const m of src.matchAll(DECL)) if (mentions(m[2]!)) derived.add(m[1]!);
    for (const m of src.matchAll(ASSIGN)) if (mentions(m[2]!)) derived.add(m[1]!);
  }
  return derived;
}

export type EmptyClaimSurface = { file: string; conditions: string[] };

/** Every component file whose render or handler branches on content-derived emptiness. */
export function emptyClaimSurfaces(root = 'src/components'): EmptyClaimSurface[] {
  const out: EmptyClaimSurface[] = [];
  for (const f of walk(root)) {
    const raw = readFileSync(f, 'utf8');
    if (!/useContent\s*\(\s*\)/.test(raw)) continue;
    const src = strip(raw);
    const derived = contentDerived(src);
    if (!derived.size) continue;
    const mentions = (txt: string) =>
      [...derived].some((d) => new RegExp(`\\b${d.replace(/\$/g, '\\$')}\\b`).test(txt));

    const conditions = new Set<string>();
    const add = (c: string) => conditions.add(c.replace(/\s+/g, ' ').trim());

    // flags whose initializer is itself an emptiness test over derived data
    const flags = new Set<string>();
    const DECL =
      /(?:const|let)\s+([A-Za-z_$][\w$]*)\s*(?::\s*[^=]{0,160})?=\s*([\s\S]{0,500}?);\n/g;
    for (let i = 0; i < 3; i++)
      for (const m of src.matchAll(DECL))
        if (
          EMPTY_TEST.test(m[2]!) &&
          (mentions(m[2]!) || [...flags].some((fl) => new RegExp(`\\b${fl}\\b`).test(m[2]!)))
        )
          flags.add(m[1]!);

    // 1 + 2: inline conditional render, and early return
    for (const m of src.matchAll(
      /(?:if\s*\(|\{)\s*([^;{}]{1,200}?)\s*\)?\s*(?:&&|\?|\)\s*\{?\s*return)/g,
    )) {
      const cond = m[1]!;
      if (!EMPTY_TEST.test(cond)) continue;
      if (!mentions(cond)) continue;
      add(cond);
    }
    // 3: a named emptiness flag that reaches the render
    for (const fl of flags) if (new RegExp(`\\b${fl}\\b\\s*(?:&&|\\?)`).test(src)) add(fl);
    // 4: a state flag set from an emptiness test
    for (const m of src.matchAll(/if\s*\(([^;{}]{1,200}?)\)\s*\{([\s\S]{0,240}?)\}/g)) {
      if (!EMPTY_TEST.test(m[1]!) || !mentions(m[1]!)) continue;
      if (/set[A-Z][\w$]*\s*\(\s*true\s*\)|set[A-Z][\w$]*\s*\(\s*['"]/.test(m[2]!)) add(m[1]!);
      if (/^\s*return\s*;/m.test(m[2]!)) add(m[1]!);
    }
    // a bare silent bail
    for (const m of src.matchAll(/if\s*\(([^;{}]{1,200}?)\)\s*return\s*;/g)) {
      if (EMPTY_TEST.test(m[1]!) && mentions(m[1]!)) add(m[1]!);
    }

    if (conditions.size) out.push({ file: f, conditions: [...conditions] });
  }
  return out;
}

/** Does this file consult the shared three-way classifier? */
export function consultsClassifier(file: string): boolean {
  return /\bpoolLaunchBlock\s*\(/.test(strip(readFileSync(file, 'utf8')));
}
