import { describe, it, expect } from 'vitest';
import ts from 'typescript';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Guard: no UNGUARDED localStorage access on a React render path.
 *
 * WHY
 * ---
 * localStorage.getItem THROWS SecurityError — it does not return null — when
 * cookies/site data are blocked for the origin, on supervised/managed profiles,
 * and in some privacy modes and embedded WebViews. A throw during render
 * escalates to the nearest ErrorBoundary, so the whole screen is replaced by the
 * error card. The same call in a click handler costs one action; on the render
 * path it costs the screen.
 *
 * WHY IT IS A TEST AND NOT A ONE-OFF SWEEP
 * ----------------------------------------
 * Two earlier regex sweeps of this class came out narrower than the class:
 *   1. matched only `useState(... localStorage ...)`, missing component bodies,
 *      IIFEs in JSX and inline JSX calls (TabBar, AppToasts, GoalFocusSection,
 *      DialectAwareness);
 *   2. tracked body-vs-callback but treated useMemo as a callback — useMemo runs
 *      DURING render, so it walked past HomeTab:235 and :292.
 * Three separate PRs fixed instances of one class. This walks the real AST so the
 * class is closed rather than sampled.
 *
 * WHAT COUNTS AS RENDER-REACHABLE
 *   - module top level (runs at import — equally fatal)
 *   - a component or custom hook body (PascalCase / use*)
 *   - an argument to useMemo / useState / useReducer (these run during render)
 *   - an IIFE inside any of the above, including `(() => {…})()` where a
 *     ParenthesizedExpression sits between the arrow and its call
 *   - a local helper DECLARED in a reachable region and CALLED there — e.g.
 *     `const q = id => localStorage.getItem(...)` invoked inside a useMemo
 *
 * NOT reported: useEffect / useLayoutEffect / useCallback bodies, event handlers,
 * .then() callbacks, and any site already inside a try block (several Today-tab
 * cards are legitimately wrapped that way — flagging them would overstate the
 * problem).
 *
 * THE FIX when this fails: route the call through `lsGet` / `lsSet` / `lsRemove`
 * from src/lib/safeStorage.ts. `lsGet`'s contract is `string | null`, identical
 * to getItem, so surrounding `!`, `=== '1'` and `parseInt(... || '0')` are
 * unaffected on a healthy profile.
 */

const RENDER_TIME_HOOKS = new Set(['useMemo', 'useState', 'useReducer']);
// Effect bodies reach an ErrorBoundary just like render does — see the comment
// at the EFFECT_HOOKS branch below.
const EFFECT_HOOKS = new Set(['useEffect', 'useLayoutEffect', 'useInsertionEffect']);
// useCallback only DEFINES a function; whether its body is boundary-caught
// depends on who calls it, so it stays deferred.
const DEFERRED_HOOKS = new Set(['useCallback']);
// Throws inside these are unhandled rejections / detached tasks, never an
// ErrorBoundary — even when the call sits inside an effect.
const ASYNC_BOUNDARIES = new Set([
  'then',
  'catch',
  'finally',
  'setTimeout',
  'setInterval',
  'requestAnimationFrame',
  'addEventListener',
  'queueMicrotask',
]);

function declaredNameOf(node: ts.Node): string {
  const fn = node as ts.FunctionLikeDeclaration;
  if (fn.name && ts.isIdentifier(fn.name)) return fn.name.text;
  const p = node.parent;
  if (!p) return '';
  if (ts.isVariableDeclaration(p) && ts.isIdentifier(p.name)) return p.name.text;
  if (ts.isPropertyAssignment(p) && ts.isIdentifier(p.name)) return p.name.text;
  return '';
}

/** `(() => {…})()` puts a ParenthesizedExpression between the arrow and its call. */
function isImmediatelyInvoked(fn: ts.Node): boolean {
  let n: ts.Node = fn;
  while (n.parent && ts.isParenthesizedExpression(n.parent)) n = n.parent;
  return !!(n.parent && ts.isCallExpression(n.parent) && n.parent.expression === n);
}

/** Inside a `try { }` block, without crossing a function boundary on the way out. */
function insideTryBlock(node: ts.Node): boolean {
  let n: ts.Node = node;
  while (n.parent) {
    const p = n.parent;
    if (ts.isTryStatement(p) && p.tryBlock === n) return true;
    if (ts.isFunctionLike(p)) return false;
    n = p;
  }
  return false;
}

function scanSource(fileName: string, src: string): string[] {
  if (!src.includes('localStorage')) return [];
  const sf = ts.createSourceFile(fileName, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const out: string[] = [];
  const localFns = new Map<string, ts.Node>();
  const calledNames = new Set<string>();
  const visitedFns = new Set<string>();

  function visit(node: ts.Node, reachable: boolean): void {
    if (ts.isCallExpression(node)) {
      const callee = node.expression;
      const name = ts.isIdentifier(callee)
        ? callee.text
        : ts.isPropertyAccessExpression(callee)
          ? callee.name.text
          : '';

      if (
        ts.isPropertyAccessExpression(callee) &&
        ts.isIdentifier(callee.expression) &&
        callee.expression.text === 'localStorage'
      ) {
        if (reachable && !insideTryBlock(node)) {
          const { line } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
          out.push(`${fileName}:${line + 1} (localStorage.${callee.name.text})`);
        }
        return;
      }

      if (reachable && ts.isIdentifier(callee)) calledNames.add(callee.text);

      if (RENDER_TIME_HOOKS.has(name)) {
        // Descend THROUGH an inline function argument, not into it — otherwise
        // the function rule below would defer the body. Exactly what the earlier
        // sweep got wrong about useMemo.
        node.arguments.forEach((a) => {
          if (ts.isFunctionLike(a)) ts.forEachChild(a, (c) => visit(c, true));
          else visit(a, true);
        });
        return;
      }
      if (EFFECT_HOOKS.has(name)) {
        // Effect BODIES are boundary-caught too. React's documented exclusions
        // are event handlers, async code, SSR and the boundary itself — effects
        // are not on that list, so a synchronous throw in an effect body is
        // forwarded to the nearest ErrorBoundary exactly like a render throw,
        // one commit later. Descend through the inline callback, same as the
        // render-time hooks above.
        //
        // This is a correction: an earlier pass classified effect sites as
        // "costs one action, not the screen", which was only ever true of event
        // handlers.
        node.arguments.forEach((a) => {
          if (ts.isFunctionLike(a)) ts.forEachChild(a, (c) => visit(c, true));
          else visit(a, true);
        });
        return;
      }
      if (DEFERRED_HOOKS.has(name)) {
        node.arguments.forEach((a) => visit(a, false));
        return;
      }
      // Async continuations are NOT boundary-caught: a throw there becomes an
      // unhandled rejection and costs the one action, not the screen. Stop
      // treating anything inside them as reachable, even within an effect.
      // MUST be checked before the state-updater rule below — setTimeout and
      // setInterval both match /^set[A-Z]/ and would otherwise be misread as
      // React state setters.
      if (ASYNC_BOUNDARIES.has(name)) {
        node.arguments.forEach((a) => visit(a, false));
        return;
      }
    }

    if (ts.isFunctionLike(node) && isImmediatelyInvoked(node)) {
      ts.forEachChild(node, (c) => visit(c, reachable));
      return;
    }

    if (ts.isFunctionLike(node)) {
      const fnName = declaredNameOf(node);
      if (fnName && (/^[A-Z]/.test(fnName) || /^use[A-Z]/.test(fnName))) {
        ts.forEachChild(node, (c) => visit(c, true));
        return;
      }
      if (reachable && fnName) {
        if (!localFns.has(fnName)) localFns.set(fnName, node);
        return;
      }
      ts.forEachChild(node, (c) => visit(c, false));
      return;
    }

    ts.forEachChild(node, (c) => visit(c, reachable));
  }

  visit(sf, true);

  // Call-graph pass: a helper declared in a reachable region and invoked there
  // runs during render. Loop until it settles — one helper may call another.
  let changed = true;
  while (changed) {
    changed = false;
    for (const [name, fn] of localFns) {
      if (visitedFns.has(name) || !calledNames.has(name)) continue;
      visitedFns.add(name);
      changed = true;
      ts.forEachChild(fn, (c) => visit(c, true));
    }
  }

  // ── Independent pass: React state updaters ─────────────────────────────────
  // setX(prev => …) is invoked by React DURING the render phase, so a throw
  // inside the updater is a render crash — regardless of where the setX() call
  // itself sits. AspectDrillScreen calls setMistakeIds from a click handler, yet
  // the updater body still runs while rendering.
  //
  // This has to be its own pass rather than part of the reachability walk: the
  // walk deliberately does not descend into uncalled local helpers, so an
  // updater nested inside one would be missed.
  //
  // Identifier callees only (bare setX(...), per React convention) so unrelated
  // obj.setFoo() methods are not swept in, and setTimeout / setInterval are
  // excluded explicitly — both match /^set[A-Z]/ but are async, not render.
  (function updaterPass(node: ts.Node): void {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      /^set[A-Z]/.test(node.expression.text) &&
      !ASYNC_BOUNDARIES.has(node.expression.text)
    ) {
      for (const a of node.arguments) {
        if (ts.isFunctionLike(a)) ts.forEachChild(a, (c) => visit(c, true));
      }
    }
    ts.forEachChild(node, updaterPass);
  })(sf);

  return [...new Set(out)];
}

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) {
      if (e === 'tests' || e === '__tests__') continue;
      walk(full, out);
    } else if (/\.(tsx|jsx|ts|js)$/.test(e)) out.push(full);
  }
  return out;
}

describe('render-path localStorage guard', () => {
  // ── Self-test ──────────────────────────────────────────────────────────────
  // An earlier version of this scanner reported "0 sites" on a file with three
  // known render-path reads, because it treated the component function itself as
  // a deferred boundary. A silent false-clean is the worst outcome for a guard,
  // so the scanner proves it can still see each shape before the real assertion
  // is allowed to mean anything.
  const SAMPLE = `
    import { useMemo, useState, useEffect } from 'react';
    export default function Sample() {
      const a = !!localStorage.getItem('body');                     // component body
      const [b] = useState(() => localStorage.getItem('initialiser'));
      const c = useMemo(() => {
        const q = (id: string) => localStorage.getItem('helper_' + id);
        return q('x');
      }, []);
      const d = (() => localStorage.getItem('iife'))();
      useEffect(() => { localStorage.getItem('effect'); }, []);
      useEffect(() => { fetch('/x').then(() => localStorage.getItem('async_in_effect')); }, []);
      const e = () => setThing((prev) => { localStorage.setItem('updater', '1'); return prev; });
      const onClick = () => localStorage.getItem('handler');
      const safe = (() => { try { return localStorage.getItem('guarded'); } catch { return null; } })();
      return <div onClick={onClick}>{localStorage.getItem('jsx')}{a}{b}{c}{d}{safe}</div>;
    }
  `;

  // Resolve each reported "sample.tsx:N (...)" back to the storage key on that
  // line, so the assertions name shapes rather than line numbers.
  function flaggedKeys(): string[] {
    const srcLines = SAMPLE.split('\n');
    return scanSource('sample.tsx', SAMPLE)
      .map((hit) => {
        const n = Number(/sample\.tsx:(\d+)/.exec(hit)![1]);
        return /(?:getItem|setItem)\('([^']+)'/.exec(srcLines[n - 1]!)?.[1] ?? '?';
      })
      .sort();
  }

  it('self-test: detects every boundary-reaching shape', () => {
    // body       — bare read in the component body
    // initialiser— useState initialiser (runs during render)
    // helper_    — helper declared AND called inside a useMemo (call-graph pass)
    // iife       — (() => …)() with parentheses between arrow and call
    // jsx        — inline call in returned JSX
    // effect     — synchronous throw in a useEffect body IS boundary-caught
    // updater    — setX(prev => …) is invoked during the render phase
    expect(flaggedKeys()).toEqual(
      ['body', 'effect', 'helper_', 'iife', 'initialiser', 'jsx', 'updater'].sort(),
    );
  });

  it('self-test: does NOT flag handlers, async continuations, or guarded access', () => {
    const keys = flaggedKeys();
    // React does not route these to an ErrorBoundary — its documented
    // exclusions are event handlers, async code, SSR and the boundary itself.
    // A throw here costs the one action, not the screen, so flagging them would
    // make the guard noisy enough to be switched off.
    expect(keys).not.toContain('handler');
    expect(keys).not.toContain('async_in_effect'); // .then() inside an effect
    expect(keys).not.toContain('guarded'); // already inside try/catch
  });

  // ── The real assertion ─────────────────────────────────────────────────────
  it('no source file has unguarded localStorage access on a render path', () => {
    const files = walk('src');
    expect(files.length, 'walker returned nothing — a vacuous pass').toBeGreaterThan(200);
    const offenders: string[] = [];
    for (const f of files) offenders.push(...scanSource(f, readFileSync(f, 'utf8')));
    expect(offenders).toEqual([]);
  });
});
