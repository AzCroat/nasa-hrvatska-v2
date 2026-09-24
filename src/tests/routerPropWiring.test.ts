/**
 * routerPropWiring.test.ts — a prop the router passes must exist at the other end.
 *
 * THE DEFECTS THIS CLOSED (2026-09-16), both invisible to every existing gate:
 *
 *   ProfileScreen declares `au: AuthUser | null`; AppRouter passed
 *   `authUser={authUser}`. The name appears NOWHERE in ProfileScreen, so `au`
 *   was always undefined — which meant its account-deletion path ran
 *   `const uid = au?.u || ''` and called `fbDeleteAccount('')`, and the row
 *   that renders the signed-in email never rendered.
 *
 *   PhotoVocabScanner declares `level?: string` (a CEFR band) and POSTs it to
 *   /api/photo-vocab; AppRouter handed it the NUMERIC level, so the generator
 *   was told `3` instead of `'B1'`. The call site's own comment already said
 *   "the lazy import erases prop types, which is why the mismatch never failed
 *   typecheck" — written after a DIFFERENT prop on the same component bit
 *   someone. Third time at one call site.
 *
 * WHY NOTHING CAUGHT THEM. `lazyWithReload(fn: () => Promise<any>)` returns a
 * lazy component typed `any`, so every lazily-routed screen is prop-unchecked:
 * wrong names and wrong types both compile clean. Typing it generically was
 * measured — it yields 320 errors, of which 315 are one pre-existing
 * `award` signature mismatch (screens declare `activityType?: string`, the
 * awarder takes the narrower `AwardActivityType`, which fails on
 * contravariance). So the `any` cannot simply be removed; unifying that
 * signature across ~310 declaration sites has to come first. ZERO of the 320
 * were missing-required-prop errors.
 *
 * THE RULE HERE IS DELIBERATELY WEAKER THAN A TYPE CHECK, and that is what
 * makes it shippable: an attribute the router passes must at least be
 * MENTIONED in the target's source. A repo-wide check of destructured names
 * only produced 8 flags of which 6 were benign — a prop declared in an
 * interface but not destructured, a component with its own internal `goBack`,
 * one taking `award` from `useApp()`, and one where resolving "the default
 * export" picked the wrong function in a multi-component file. Exempting six
 * things, some of which are my own resolver's bugs, is how a guard becomes
 * decorative. "Mentioned somewhere" clears all six honestly and still catches
 * a name the component has never heard of.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { describe, it, expect } from 'vitest';

const COMPONENTS = path.join(__dirname, '..', 'components');
const ROUTER = path.join(COMPONENTS, 'AppRouter.tsx');
const routerSrc = fs.readFileSync(ROUTER, 'utf8');

/** Attributes never forwarded to the component itself. */
const REACT_ONLY = new Set(['key', 'ref']);

/**
 * Passed but never mentioned, on purpose. Both staleness directions are
 * checked below.
 */
const KNOWN_UNUSED: Record<string, string> = {
  'OppositesScreen.award':
    'A browse list of adjective pairs — no quiz, no score, nothing to award. ' +
    'The prop is redundant at the call site rather than a lost XP payment.',
};

function routerModules(src: string): Map<string, string> {
  const mods = new Map<string, string>();
  for (const m of src.matchAll(/const (\w+) = lazyWithReload\(\s*\(\) =>\s*import\('([^']+)'\)/g))
    mods.set(m[1]!, m[2]!);
  for (const m of src.matchAll(/import\s+(\w+)\s+from\s*'([^']+)'/g)) mods.set(m[1]!, m[2]!);
  return mods;
}

function resolveModule(rel: string): string | null {
  const base = path.join(COMPONENTS, rel);
  for (const e of ['.tsx', '.ts', '.jsx', '.js']) if (fs.existsSync(base + e)) return base + e;
  return null;
}

const strip = (t: string) =>
  t.replace(/(^|[^:])\/\/[^\n]*/g, '$1 ').replace(/\/\*[\s\S]*?\*\//g, ' ');

/** Every `<Component attr={…}>` the router renders, as [tag, attr] pairs. */
export function routerAttributes(src: string): Array<[string, string]> {
  const sf = ts.createSourceFile(
    'AppRouter.tsx',
    src,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const out: Array<[string, string]> = [];
  const visit = (n: ts.Node): void => {
    if (ts.isJsxSelfClosingElement(n) || ts.isJsxOpeningElement(n)) {
      const tag = n.tagName.getText(sf);
      if (/^[A-Z]/.test(tag))
        for (const a of n.attributes.properties)
          if (ts.isJsxAttribute(a)) {
            const name = a.name.getText(sf);
            if (!REACT_ONLY.has(name)) out.push([tag, name]);
          }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return out;
}

describe('router prop wiring', () => {
  const mods = routerModules(routerSrc);
  const attrs = routerAttributes(routerSrc);

  it('reads a non-trivial number of render sites', () => {
    // A broken JSX walk would find nothing and pass everything below.
    expect(attrs.length).toBeGreaterThan(500);
    expect(mods.size).toBeGreaterThan(200);
  });

  it('every prop the router passes is mentioned by the component it goes to', () => {
    const orphans: string[] = [];
    for (const [tag, attr] of attrs) {
      const rel = mods.get(tag);
      if (!rel) continue; // locally-defined helper, not a routed module
      const file = resolveModule(rel);
      if (!file) continue;
      if (KNOWN_UNUSED[`${tag}.${attr}`]) continue;
      const text = strip(fs.readFileSync(file, 'utf8'));
      if (!new RegExp(`\\b${attr}\\b`).test(text)) orphans.push(`${tag} <- '${attr}' (${rel})`);
    }
    expect([...new Set(orphans)]).toEqual([]);
  });

  it('ProfileScreen is given `au`, the name it actually reads', () => {
    // It uses `au?.u` as the uid for account deletion; under the old
    // `authUser={…}` that was an empty string.
    const s = strip(routerSrc).replace(/\s+/g, ' ');
    expect(s).toMatch(/<ProfileScreen[^>]*\bau=\{authUser\}/);
    expect(s).not.toMatch(/<ProfileScreen[^>]*\bauthUser=/);
    expect(
      strip(fs.readFileSync(path.join(COMPONENTS, 'profile', 'ProfileScreen.tsx'), 'utf8')),
    ).toMatch(/\bau\b/);
  });

  it('PhotoVocabScanner is given a CEFR band, not the numeric level', () => {
    // The value is POSTed to /api/photo-vocab as the learner's level.
    const s = strip(routerSrc).replace(/\s+/g, ' ');
    expect(s).toMatch(/<PhotoVocabScanner[^>]*\blevel=\{getGenerationCefr\(/);
    expect(s).not.toMatch(/<PhotoVocabScanner[^>]*\blevel=\{level\}/);
  });

  it('every exemption still exists and is still unmentioned', () => {
    for (const key of Object.keys(KNOWN_UNUSED)) {
      const [tag, attr] = key.split('.') as [string, string];
      const rel = mods.get(tag);
      expect(rel, `${tag} is no longer routed — drop its exemption`).toBeTruthy();
      const file = resolveModule(rel!)!;
      expect(
        new RegExp(`\\b${attr}\\b`).test(strip(fs.readFileSync(file, 'utf8'))),
        `${key} is used now — drop its exemption`,
      ).toBe(false);
      expect(
        attrs.some(([t, a]) => t === tag && a === attr),
        `${key} is no longer passed — drop its exemption`,
      ).toBe(true);
    }
    expect(Object.keys(KNOWN_UNUSED)).toHaveLength(1);
  });
});
