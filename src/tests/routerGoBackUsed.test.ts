/**
 * routerGoBackUsed.test.ts — a screen the router gives `goBack` must use it.
 *
 * THE DEFECT THIS EXISTS TO KEEP CLOSED (2026-09-16). `HNLScreen`,
 * `RegionScreen` and `ProfileScreen` were each rendered as
 * `<X goBack={goBack} />` and none of the three referenced the prop. They
 * rendered their own hero headers and no back control, so the only way off
 * them was the bottom tab bar — while every sibling screen (BasketballScreen,
 * CityOfDayScreen, CroatiaAthletes, CultureDeepDiveScreen via `H()`) offers
 * one. `RegionScreen`'s error state was the worst of it: "Couldn't load —
 * please retry." with no content and no exit.
 *
 * This is the mirror of `routerAwardProp.test.ts`. That file guards the
 * FORWARD direction — a screen that CALLS `award` must be GIVEN it. This one
 * guards the reverse: a screen GIVEN `goBack` must actually use it. The two
 * failures look identical from inside a component's own tests, which pass the
 * prop themselves and so say nothing about either direction.
 *
 * ESLint cannot see it: `no-unused-vars` is configured `args: 'none'`
 * ("components often accept props they don't always use"), so a destructured
 * prop that is never referenced is invisible to the lint by design.
 *
 * The scan uses the TypeScript AST, not a regex. Three hand-rolled regex
 * versions each gave a different answer (16 / 35 / 31 for the general
 * unused-prop sweep) because a param type annotation, then a RETURN type
 * annotation, each look like a function body to a brace-counter.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { describe, it, expect } from 'vitest';

const COMPONENTS = path.join(__dirname, '..', 'components');
const ROUTER = path.join(COMPONENTS, 'AppRouter.tsx');
const routerSrc = fs.readFileSync(ROUTER, 'utf8');

/** component name → module specifier, over every import form AppRouter uses. */
function routerModules(src: string): Map<string, string> {
  const mods = new Map<string, string>();
  // lazyWithReload, including the multi-line form prettier produces
  for (const m of src.matchAll(/const (\w+) = lazyWithReload\(\s*\(\) =>\s*import\('([^']+)'\)/g))
    mods.set(m[1]!, m[2]!);
  for (const m of src.matchAll(/import\s+(\w+)\s+from\s*'([^']+)'/g)) mods.set(m[1]!, m[2]!);
  for (const m of src.matchAll(/import\s*\{([^}]*)\}\s*from\s*'([^']+)'/g))
    for (const n of m[1]!.split(',')) {
      const t = n.trim().split(/\s+as\s+/);
      const name = (t[1] || t[0] || '').trim();
      if (name) mods.set(name, m[2]!);
    }
  return mods;
}

/**
 * Components AppRouter renders, and which of them get a `goBack` prop.
 *
 * AST, NOT REGEX, AND THAT IS LOAD-BEARING. `<(\w+)[^>]*?\bgoBack=` cannot
 * cross a `>`, and real render sites contain `=>` arrows and generics before
 * their props (`React.ComponentProps<typeof X>['category']`). It silently
 * under-detected, which made the "given goBack" set too small — a guard that
 * checks fewer screens than it claims to.
 */
function routerJsx(src: string): { rendered: Set<string>; given: Set<string> } {
  const sf = ts.createSourceFile(
    'AppRouter.tsx',
    src,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const rendered = new Set<string>();
  const given = new Set<string>();
  const visit = (n: ts.Node): void => {
    if (ts.isJsxSelfClosingElement(n) || ts.isJsxOpeningElement(n)) {
      const tag = n.tagName.getText(sf);
      if (/^[A-Z]/.test(tag)) {
        rendered.add(tag);
        for (const a of n.attributes.properties)
          if (ts.isJsxAttribute(a) && a.name.getText(sf) === 'goBack') given.add(tag);
      }
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return { rendered, given };
}

function resolveModule(rel: string): string | null {
  const base = path.join(COMPONENTS, rel);
  for (const e of ['.tsx', '.ts', '.jsx', '.js']) if (fs.existsSync(base + e)) return base + e;
  return null;
}

/**
 * Does the component in `file` destructure `goBack` and then never reference
 * it? null when the file declares no such component.
 */
export function ignoresGoBack(file: string): boolean | null {
  const sf = ts.createSourceFile(
    file,
    fs.readFileSync(file, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  let verdict: boolean | null = null;
  const visit = (node: ts.Node): void => {
    const isFn =
      ts.isFunctionDeclaration(node) || ts.isArrowFunction(node) || ts.isFunctionExpression(node);
    if (isFn && node.body && node.parameters.length) {
      const p = node.parameters[0]!;
      if (ts.isObjectBindingPattern(p.name)) {
        const bound = p.name.elements
          .filter((e) => !e.dotDotDotToken && ts.isIdentifier(e.name))
          .map((e) => (e.name as ts.Identifier).text);
        if (bound.includes('goBack')) {
          const used = new Set<string>();
          const walk = (n: ts.Node): void => {
            if (ts.isIdentifier(n)) used.add(n.text);
            ts.forEachChild(n, walk);
          };
          walk(node.body);
          // A file may declare several components; one that uses it settles it.
          if (verdict !== false) verdict = !used.has('goBack');
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return verdict;
}

describe('every screen given goBack uses it', () => {
  const { rendered, given } = routerJsx(routerSrc);
  const names = [...given].sort();
  const mods = routerModules(routerSrc);
  const resolved = names
    .map((n) => ({ n, file: mods.has(n) ? resolveModule(mods.get(n)!) : null }))
    .filter((x) => x.file) as { n: string; file: string }[];

  it('resolves nearly every component the router hands goBack to', () => {
    // Without this the guard degrades silently: a broken resolver resolves
    // nothing, finds nothing, and passes. `ScreenGuard` is declared inside
    // AppRouter itself and has no module to resolve — it uses goBack.
    expect(names.length).toBeGreaterThan(300);
    expect(resolved.length).toBeGreaterThanOrEqual(names.length - 1);
  });

  it('flags a component that takes goBack and ignores it (the detector)', () => {
    // Driven directly in both directions — never trusted to a corpus that
    // happens to be clean.
    const tmp = path.join(__dirname, '__goback_probe.tsx');
    try {
      fs.writeFileSync(tmp, 'function P({ goBack, x }: Q) { return <div>{x}</div>; }\n');
      expect(ignoresGoBack(tmp)).toBe(true);
      fs.writeFileSync(tmp, 'function P({ goBack }: Q) { return <b onClick={goBack} />; }\n');
      expect(ignoresGoBack(tmp)).toBe(false);
      fs.writeFileSync(tmp, 'function P({ x }: Q) { return <div>{x}</div>; }\n');
      expect(ignoresGoBack(tmp)).toBe(null);
    } finally {
      fs.unlinkSync(tmp);
    }
  });

  it('a screen that USES goBack is actually given it by the router', () => {
    // The other direction, and it is NOT covered by tsc: `lazyWithReload` is
    // typed `(fn: () => Promise<any>)`, so every lazily-routed screen is
    // prop-unchecked — `<HNLScreen />` with a required `goBack` compiles
    // cleanly. That is the same structural hole that let AlphabetScreen ship
    // without its `award` prop (see routerAwardProp.test.ts).
    const givenSet = given;
    const missing: string[] = [];
    for (const [name, rel] of mods) {
      // only components the router actually renders
      if (!rendered.has(name)) continue;
      const file = resolveModule(rel);
      if (!file) continue;
      if (ignoresGoBack(file) === false && !givenSet.has(name)) missing.push(name);
    }
    expect(missing).toEqual([]);
  });

  it('no routed screen ignores it', () => {
    const offenders = resolved
      .filter(({ file }) => ignoresGoBack(file) === true)
      .map(({ n, file }) => `${n} (${path.relative(COMPONENTS, file)})`);
    expect(offenders).toEqual([]);
  });
});
