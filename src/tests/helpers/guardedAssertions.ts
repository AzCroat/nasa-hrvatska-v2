/**
 * guardedAssertions.ts — the one definition of "this test can pass without
 * asserting anything".
 *
 * THE SHAPE. A test whose every `expect(...)` sits inside an `if` that has no
 * assertion-bearing `else`:
 *
 *     it('posts the right keys', async () => {
 *       await drive();
 *       if (mock.mock.calls.length > 0) {   // <- never true
 *         expect(mock.mock.calls[0][1]).toHaveProperty('audioBase64');
 *       }
 *     });
 *
 * When the condition is false the body runs zero assertions and the test
 * passes. It is indistinguishable, from a green run, from a test that checked
 * the thing — which is this repo's most-repeated finding, now landing on the
 * tests themselves.
 *
 * WHY THIS AND NOT "assertion-free path" IN GENERAL. Measured across the whole
 * suite, a general definition (loops, `&&`, try/catch, ternaries) reports 410
 * tests, almost all of them `for (const x of SOME_STATIC_DATASET)` — a real but
 * far weaker concern, and one that a repo-wide gate would drown the signal in.
 * The `if`-with-no-else shape is 14, every one of which was read by hand.
 *
 * WHAT IT CANNOT SEE, stated rather than implied:
 *   - a loop over a collection that can be empty (the 410 above);
 *   - `expect(...)` reached through a helper this analyser does resolve, but
 *     whose own body is guarded — helpers are resolved one level, by name;
 *   - a guard that fires today and stops firing tomorrow. That is exactly what
 *     happened to `pronunciation.spec.js`, and no static rule can catch it;
 *     the exemptions below therefore carry a MEASURED firing count, taken by
 *     instrumenting the condition and running the file.
 */
import ts from 'typescript';
import fs from 'node:fs';

const ASSERT = /^(expect|assert)$/;
/** `it`/`test`, but not `test.describe` / hooks / `.skip` / `.todo`. */
const NOT_A_TEST =
  /\.(skip|todo|fails|describe|beforeEach|afterEach|beforeAll|afterAll|step|use|slow|setTimeout)\b/;

export interface GuardedTest {
  file: string;
  line: number;
  /** The test's title — the stable key, since line numbers move on any edit. */
  name: string;
  /** The guarding condition(s), for the failure message. */
  conditions: string[];
}

function leftmost(e: ts.Node): ts.Node {
  let n = e;
  while (
    ts.isPropertyAccessExpression(n) ||
    ts.isCallExpression(n) ||
    ts.isElementAccessExpression(n) ||
    ts.isNonNullExpression(n)
  ) {
    n = (n as { expression: ts.Node }).expression;
  }
  return n;
}

function isTestCall(node: ts.Node): { body: ts.Block; name: string } | null {
  if (!ts.isCallExpression(node)) return null;
  const id = leftmost(node.expression);
  if (!ts.isIdentifier(id) || !/^(it|test)$/.test(id.text)) return null;
  if (NOT_A_TEST.test(node.expression.getText())) return null;
  const fn = node.arguments.find((a) => ts.isArrowFunction(a) || ts.isFunctionExpression(a)) as
    ts.ArrowFunction | ts.FunctionExpression | undefined;
  if (!fn || !fn.body || !ts.isBlock(fn.body)) return null;
  const first = node.arguments[0];
  const name = first && ts.isStringLiteralLike(first) ? first.text : '(dynamic)';
  return { body: fn.body, name };
}

/** Does executing this subtree run at least one assertion, on some path? */
function containsAssertion(n: ts.Node): boolean {
  let found = false;
  (function walk(x: ts.Node) {
    if (found) return;
    if (ts.isCallExpression(x)) {
      const id = leftmost(x.expression);
      if (ts.isIdentifier(id) && ASSERT.test(id.text)) {
        found = true;
        return;
      }
    }
    ts.forEachChild(x, walk);
  })(n);
  return found;
}

/** Analyse one source file. `text` is passed in so callers can analyse probes. */
export function findGuardedOnlyTests(file: string, text: string): GuardedTest[] {
  const kind = file.endsWith('.tsx')
    ? ts.ScriptKind.TSX
    : file.endsWith('.ts')
      ? ts.ScriptKind.TS
      : ts.ScriptKind.JS;
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, kind);
  const out: GuardedTest[] = [];

  (function visit(node: ts.Node) {
    const t = isTestCall(node);
    if (t) {
      let sawAssertion = false;
      let allGuarded = true;
      const conditions: string[] = [];

      (function walk(x: ts.Node, guard: string | null) {
        if (ts.isCallExpression(x)) {
          const id = leftmost(x.expression);
          if (ts.isIdentifier(id) && ASSERT.test(id.text)) {
            sawAssertion = true;
            if (guard === null) allGuarded = false;
            else conditions.push(guard);
          }
        }
        // A nested it()/test() body belongs to its own test.
        if (x !== t.body && isTestCall(x)) return;
        ts.forEachChild(x, (c) => {
          let g = guard;
          if (ts.isIfStatement(x)) {
            if (c === x.thenStatement) {
              g = g ?? x.expression.getText().replace(/\s+/g, ' ').slice(0, 90);
            }
            // An if/else where BOTH branches assert always runs one of them, so
            // the ELSE is only guarded when the THEN does not assert. That one
            // clause is what keeps `if (host) expect(portrait) else expect(null)`
            // off the list; a matching exclusion on the THEN branch would be
            // redundant, and was removed after a mutation showed its absence
            // changed nothing.
            if (c === x.elseStatement && !containsAssertion(x.thenStatement)) {
              g = g ?? `!(${x.expression.getText().replace(/\s+/g, ' ').slice(0, 80)})`;
            }
          }
          walk(c, g);
        });
      })(t.body, null);

      if (sawAssertion && allGuarded && conditions.length) {
        out.push({
          file,
          line: sf.getLineAndCharacterOfPosition(node.getStart()).line + 1,
          name: t.name,
          conditions: [...new Set(conditions)],
        });
      }
    }
    ts.forEachChild(node, visit);
  })(sf);

  return out;
}

export function scanFiles(files: readonly string[]): GuardedTest[] {
  return files.flatMap((f) => findGuardedOnlyTests(f, fs.readFileSync(f, 'utf8')));
}
