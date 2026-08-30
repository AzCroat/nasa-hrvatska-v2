/**
 * routerAwardProp.test.ts — a screen that awards XP must be GIVEN the awarder.
 *
 * THE BUG THIS EXISTS FOR (2026-08-30). `AlphabetScreen` had contained
 * `if (typeof award === 'function') award(20, false, 'vocabulary')` since it
 * shipped, and AppRouter rendered it as `<AlphabetScreen goBack={goBack} />`.
 * The prop never arrived, so the guard was always false and the call was dead:
 * the quiz credited its lesson completion and its daily quest and paid no XP.
 *
 * Nothing failed, and nothing could have. A dead branch behind a `typeof`
 * check is indistinguishable from a deliberate optional dependency, and the
 * component's own tests pass `award` themselves — which is the right way to
 * test the component and says nothing at all about the wiring.
 *
 * That is the same shape as the other guards in this codebase that read as
 * covering a thing while covering something adjacent to it: verified by
 * mutation here too, deleting the prop from AppRouter leaves
 * `AlphabetScreenAward.test.tsx` fully green, because it renders the component
 * directly. This file walks the REAL router instead.
 *
 * WHAT COUNTS AS NEEDING THE PROP: the component declares `award` among its
 * props AND calls it. A screen that takes `award` from `useStats()` instead
 * (AIConversation does) declares no prop and is correctly ignored.
 */
import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

const ROUTER = path.join(__dirname, '..', 'components', 'AppRouter.tsx');
const routerSrc = fs.readFileSync(ROUTER, 'utf8');
const EXTS = ['.tsx', '.ts', '.jsx', '.js'];

/** component name → module file, from either import form AppRouter uses. */
const componentFiles = new Map<string, string>();
for (const m of routerSrc.matchAll(
  /const (\w+) = lazyWithReload\(\(\) => import\('([^']+)'\)\)/g,
)) {
  componentFiles.set(m[1]!, m[2]!);
}
for (const m of routerSrc.matchAll(/^import (\w+) from '(\.[^']+)'/gm)) {
  componentFiles.set(m[1]!, m[2]!);
}

function resolveModule(spec: string): string | null {
  const base = path.resolve(path.dirname(ROUTER), spec);
  for (const ext of EXTS) if (fs.existsSync(base + ext)) return base + ext;
  return null;
}

/**
 * The full props text of a JSX opening tag, newlines and nested braces included.
 *
 * A naive `<Name([^>]*)>` stops at the first `>` — which lands inside an arrow
 * function or a generic in half the render sites here, and silently reports the
 * props as empty. That is how the first version of this survey produced two
 * false positives (`levelquiz` and `graded_input` DO pass the prop). Counting
 * brace depth is what makes the answer trustworthy.
 */
function propsOfTag(src: string, at: number): string {
  let i = at;
  let depth = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (c === '>' && depth === 0) return src.slice(at, i);
    i++;
  }
  return '';
}

/** Does this component declare an `award` prop and actually call it? */
function needsAwardProp(file: string): boolean {
  const src = fs.readFileSync(file, 'utf8');
  const calls = /\baward\s*\(/.test(src);
  if (!calls) return false;
  // Declared as a prop: either in a Props type/interface, or destructured out
  // of the component's parameter object. Both forms are used in this codebase.
  const inPropsType = /(interface|type)\s+Props[\s\S]{0,600}?\baward\s*\??\s*:/.test(src);
  const destructured = /function\s+\w+\s*\(\s*\{[^}]*\baward\b[^}]*\}/.test(src);
  return inPropsType || destructured;
}

/** Every render site in AppRouter of a component we can resolve to a file. */
function renderSites(): { component: string; props: string; file: string }[] {
  const out: { component: string; props: string; file: string }[] = [];
  for (const [component, spec] of componentFiles) {
    const file = resolveModule(spec);
    if (!file) continue;
    for (const m of routerSrc.matchAll(new RegExp(`<${component}[\\s/>]`, 'g'))) {
      out.push({ component, props: propsOfTag(routerSrc, m.index!), file });
    }
  }
  return out;
}

describe('AppRouter hands the awarder to every screen that awards', () => {
  const sites = renderSites();

  it('found render sites to check', () => {
    // Non-vacuity: if the router is refactored so these patterns stop matching,
    // this file would pass by examining nothing.
    expect(sites.length).toBeGreaterThan(50);
  });

  it('resolves the alphabet screen, the case this was written for', () => {
    // Pins the fixture rather than trusting the walk: if AlphabetScreen ever
    // stops being found, the assertion below would go quiet about it.
    const alpha = sites.filter((s) => s.component === 'AlphabetScreen');
    expect(alpha.length).toBeGreaterThan(0);
    expect(needsAwardProp(alpha[0]!.file)).toBe(true);
  });

  it('passes award wherever the screen declares and calls it', () => {
    const missing = sites
      .filter((s) => needsAwardProp(s.file) && !/\baward=\{/.test(s.props))
      .map((s) => `<${s.component}> (${path.relative(process.cwd(), s.file)})`);
    expect(
      [...new Set(missing)],
      'these screens call award() but AppRouter never gives them one, so the call is dead ' +
        'and the learner is paid nothing for finishing. Pass award={award} at the render site.',
    ).toEqual([]);
  });
});
