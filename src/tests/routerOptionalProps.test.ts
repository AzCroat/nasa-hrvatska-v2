/**
 * routerOptionalProps.test.ts — a dead branch behind an optional prop (2026-09-23).
 *
 * THE CLASS, and it has bitten twice. A routed component declares `foo?:` and
 * branches on it (`foo && …`, `typeof foo === 'function'`, `foo?.()`). AppRouter
 * never passes it. The branch is unreachable, and **a dead branch behind an
 * optional-prop check is indistinguishable from a deliberate optional
 * dependency** — which is exactly why both instances survived so long:
 *
 *   AlphabetScreen.award   `<AlphabetScreen goBack={goBack} />` with no `award`,
 *                          so `if (typeof award === 'function')` was false and
 *                          the quiz's 20 XP was dead for the life of the screen.
 *                          Its own component tests passed `award` themselves,
 *                          which proves the screen works WHEN WIRED and says
 *                          nothing about whether it IS.
 *   LevelQuiz.onPass       `if (passed && onPass) onPass()`, never supplied.
 *                          Harmless — the pass is recorded in
 *                          `stats.levelQuizPasses`, which LearnPath consumes —
 *                          but dead in both directions. Removed with this file.
 *
 * `routerAwardProp.test.ts` already guards the FIRST one. It is scoped to the
 * name `award`, so it could never have found the second: the survey that
 * declared AlphabetScreen "the only one" was a survey of that one prop, not of
 * the class. This file asks the general question.
 *
 * THE ATTRIBUTE SCANNER IS THE LOAD-BEARING PART, and a naive one gets this
 * wrong in the dangerous direction. Matching props with `<Name([^>]*)>` stops at
 * the FIRST `>` — and AppRouter passes arrow functions
 * (`setTab={(id: string) => { … }}`), so the capture truncates mid-attribute and
 * every prop after it reads as "never passed". Measured: that version reported
 * `HomeTab.authUser` as dead when AppRouter passes it plainly. Truncation
 * shrinks the passed-set, so it can only ADD false positives — it fails loud
 * rather than silent, but it fails. `attrsOf` below balances braces and skips
 * strings so it reads the whole tag.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const strip = (s: string) =>
  s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');

const ROUTER = strip(readFileSync('src/components/AppRouter.tsx', 'utf8'));

function componentFiles(): Map<string, string> {
  const out = new Map<string, string>();
  const walk = (dir: string) => {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      if (statSync(p).isDirectory()) walk(p);
      else if (/\.(tsx|jsx)$/.test(e)) {
        const name = e.replace(/\.(tsx|jsx)$/, '');
        if (!out.has(name)) out.set(name, p);
      }
    }
  };
  walk('src/components');
  return out;
}
const FILES = componentFiles();

/** The attribute text of one JSX opening tag, balancing `{}` and skipping
 *  strings so an arrow function's `=>` cannot end the tag early. */
function attrsOf(src: string, from: number): string {
  let depth = 0;
  let quote = '';
  for (let i = from; i < src.length; i++) {
    const c = src[i]!;
    if (quote) {
      if (c === quote && src[i - 1] !== '\\') quote = '';
      continue;
    }
    if (c === '"' || c === "'" || c === '`') quote = c;
    else if (c === '{') depth++;
    else if (c === '}') depth--;
    else if (c === '>' && depth === 0) return src.slice(from, i);
  }
  return src.slice(from);
}

/** Every prop name AppRouter passes to <Name>, across all its usages. */
function propsPassedTo(name: string): Set<string> {
  const out = new Set<string>();
  const re = new RegExp(`<${name}\\b`, 'g');
  for (const m of ROUTER.matchAll(re)) {
    for (const a of attrsOf(ROUTER, m.index! + m[0].length).matchAll(/(\w+)\s*=/g)) {
      out.add(a[1]!);
    }
  }
  return out;
}

/** Optional props a component declares AND branches on. */
function optionalBranchedProps(file: string): string[] {
  const src = strip(readFileSync(file, 'utf8'));
  const iface = /(?:interface|type)\s+\w*Props\w*\s*=?\s*\{([\s\S]*?)\n\}/.exec(src);
  if (!iface) return [];
  const optional = [...iface[1]!.matchAll(/^\s*(\w+)\?\s*:/gm)].map((m) => m[1]!);
  return optional.filter((p) => BRANCHES_ON(p).test(src));
}

/**
 * THE PREDICATE MISSED TWO SHAPES, AND ONE OF THEM WAS LIVE (2026-09-24).
 *
 * The first version matched `&& p`, `p &&`, `typeof p === 'function'` and
 * `p?.(` — four ways of branching, and not the two commonest for a BOOLEAN:
 * `p || q` and `p ? x : y`. `McGame.challengeMode` was optional, passed by
 * nothing (not AppRouter, not one test), and used as
 * `challengeMode || heartsAlwaysOn`; it forwarded to `McGameOver`, whose two
 * `challengeMode` arms could therefore never render — one of them a refill
 * line contradicting `lives.ts`. The guard was written for exactly this class
 * the day before and reported it clean, because the class is defined by its
 * MATCHER and the matcher knew four spellings out of six.
 *
 * Widening is the direction that invents false positives, so it was censused
 * first: across 400 routed components the two added shapes yield exactly two
 * props, one real and one a deliberate test seam (see EXEMPT).
 */
const BRANCHES_ON = (p: string) =>
  new RegExp(
    `&&\\s*${p}\\b|\\b${p}\\s*&&|typeof\\s+${p}\\s*===\\s*['"]function|\\b${p}\\?\\.\\(` +
      // `p || q` / `q || p` — how an optional boolean is usually defaulted.
      `|\\b${p}\\s*\\|\\||\\|\\|\\s*${p}\\b` +
      // `p ? x : y`, excluding `p?.` (optional chaining) and `p?:` (a type).
      `|\\b${p}\\s*\\?[^.:]`,
  );

/**
 * Optional props a component branches on that the router legitimately omits.
 * The reason has to be that PRODUCTION omits it BY DESIGN and the component
 * supplies its own value — the `vocabPool.allCats` shape, an injection seam
 * kept for tests. "Nothing passes it" is the defect this file exists to find,
 * so it is never a reason to be here.
 */
const EXEMPT: Record<string, string> = {
  'RetentionCheckScreen.lessons':
    'Test-fixture injection. retentionWiring.test.tsx passes the lesson bodies; ' +
    'production omits it and the screen FETCHES them instead — `if (lessons) return undefined` ' +
    'skips the fetch when injected. The branch is reachable in both directions.',
};

const ROUTED = [...new Set([...ROUTER.matchAll(/<([A-Z]\w+)\b/g)].map((m) => m[1]!))].filter((n) =>
  FILES.has(n),
);

describe('AppRouter supplies every optional prop its screens branch on', () => {
  it('the sweep is real: it resolves a substantial number of routed components', () => {
    expect(ROUTED.length).toBeGreaterThan(100);
  });

  it('the attribute scanner reads a whole tag, arrow functions included', () => {
    // The exact shape that broke the naive version: a `>` inside an arrow
    // function, with the prop under test AFTER it.
    const tag = `<Foo a={(id: string) => { return id; }} bar={1} baz="x >" qux={2}>`;
    const attrs = attrsOf(tag, tag.indexOf('<Foo') + 4);
    const names = [...attrs.matchAll(/(\w+)\s*=/g)].map((m) => m[1]);
    expect(names).toContain('bar');
    expect(names).toContain('qux');
  });

  it('non-vacuity: a prop the router DOES pass is seen as passed', () => {
    // HomeTab.authUser is passed plainly, and is what the naive scanner missed.
    expect(propsPassedTo('HomeTab')).toContain('authUser');
  });

  it('no routed screen branches on an optional prop the router never passes', () => {
    const dead: string[] = [];
    for (const name of ROUTED) {
      const passed = propsPassedTo(name);
      for (const p of optionalBranchedProps(FILES.get(name)!)) {
        if (passed.has(p) || EXEMPT[`${name}.${p}`]) continue;
        dead.push(`${name}.${p}  (${FILES.get(name)})`);
      }
    }
    expect(
      dead,
      'these components branch on an optional prop AppRouter never supplies, so the branch is ' +
        'unreachable — either pass the prop or delete the branch. A dead branch behind an ' +
        'optional-prop check looks exactly like a deliberate optional dependency.',
    ).toEqual([]);
  });

  it('the widened shapes match what they were added for', () => {
    // Driven against the real matcher rather than asserted about it, so a
    // reworded regex that stops matching `||` fails here.
    expect(BRANCHES_ON('flag').test('const on = flag || pref;')).toBe(true);
    expect(BRANCHES_ON('flag').test('{flag ? a : b}')).toBe(true);
    // The original four still match: `p?.(` is a CALL of an optional callback,
    // which is not the same as `p?.foo` — writing the probe as `flag?.call()`
    // failed here first, correctly, because that is optional chaining.
    expect(BRANCHES_ON('flag').test('flag?.()')).toBe(true);
    // The type declaration itself must NOT read as a branch, or every optional
    // prop would match its own `?:` and the filter would select all of them.
    expect(BRANCHES_ON('flag').test('  flag?: boolean;')).toBe(false);
  });

  it('every exemption still names a real, still-exempt prop', () => {
    // Both staleness directions: the component must still exist and still
    // declare the prop as optional, and the router must still NOT pass it —
    // an exemption over a prop the router now supplies is guarding nothing.
    expect(Object.keys(EXEMPT).length).toBeGreaterThan(0);
    for (const [key, reason] of Object.entries(EXEMPT)) {
      const [comp, prop] = key.split('.') as [string, string];
      expect(reason.length, `${key} needs a stated reason`).toBeGreaterThan(40);
      const file = FILES.get(comp);
      expect(file, `${key}: component no longer exists`).toBeTruthy();
      expect(
        optionalBranchedProps(file!),
        `${key}: no longer an optional branched prop — drop the exemption`,
      ).toContain(prop);
      expect(
        propsPassedTo(comp).has(prop),
        `${key}: AppRouter now passes it — drop the exemption`,
      ).toBe(false);
    }
  });
});
