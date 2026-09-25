/**
 * moduleGraph — the AST import graph of `src/`, and reachability over it.
 *
 * EXTRACTED FROM `noUnreachableModules.test.ts` (sweep 130, 2026-09-25) because a
 * SECOND guard needs it, and for a reason worth stating: `meteredEndpointsHaveCallers`
 * asks whether anything calls each metered AI endpoint, and **a caller that is
 * itself unreachable is not a caller.** Without this graph that guard credits
 * `/api/translate` to `hooks/useTranslator.ts`, which sweep 129 established was
 * reachable only from its own tests. Same shape as "a conduit is not a producer"
 * (sweep 111) and "a clear is not a producer" (sweep 117): the question is never
 * "does the name appear somewhere", it is "does a LIVE path reach it".
 *
 * WHY AN AST AND NOT `madge --orphans`, kept from the original docstring because
 * both halves cost a day to learn: madge does not follow `export { X } from './X'`,
 * so every module reached only through a barrel looks dead (it listed all seven
 * illustration components; the BUILD caught that, not the suite); and it reports
 * files with NO importer, which misses dead CLUSTERS (A imports B, both
 * unreachable). Only a reachability walk finds those. So imports, re-exports,
 * dynamic `import()` and `require()` are all edges, and a `.js` specifier resolves
 * to the literal file first (what the bundler does) and then to the `.ts` source
 * (what tsc does).
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { execFileSync } from 'node:child_process';

export const ROOT = path.join(__dirname, '..', '..', '..');
export const ENTRIES = ['src/main.tsx', 'src/sw.js'];
export const EXTS = ['.ts', '.tsx', '.js', '.jsx'];

export const isTest = (f: string) =>
  f.includes('/tests/') || f.includes('__tests__') || /\.test\.[jt]sx?$/.test(f);

/** A subject of a deadness question: production source, not a test, not a type decl. */
export const isSubject = (f: string) => !isTest(f) && !/\.d\.ts$/.test(f);

function resolveSpec(fromFile: string, spec: string): string | null {
  if (!spec.startsWith('.')) return null; // package import
  const base = path.normalize(path.join(path.dirname(fromFile), spec));
  const stems = [base];
  const m = base.match(/^(.*)\.(js|jsx)$/);
  if (m) stems.push(m[1]!); // TS bundler resolution: ".js" may mean ".ts"
  for (const s of stems) {
    for (const e of ['', ...EXTS]) {
      const p = s + e;
      if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
    }
    for (const e of EXTS) {
      const p = path.join(s, 'index' + e);
      if (fs.existsSync(p)) return p;
    }
  }
  return null;
}

/** Every module specifier `file` depends on — imports, re-exports, dynamic. */
export function edgesOf(file: string, text: string): string[] {
  const kind = file.endsWith('.tsx')
    ? ts.ScriptKind.TSX
    : file.endsWith('.ts')
      ? ts.ScriptKind.TS
      : ts.ScriptKind.JSX;
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, kind);
  const out = new Set<string>();
  const add = (spec: string) => {
    const r = resolveSpec(file, spec);
    if (r) out.add(r);
  };
  const visit = (n: ts.Node): void => {
    if (ts.isImportDeclaration(n) && ts.isStringLiteral(n.moduleSpecifier))
      add(n.moduleSpecifier.text);
    else if (
      ts.isExportDeclaration(n) &&
      n.moduleSpecifier &&
      ts.isStringLiteral(n.moduleSpecifier)
    )
      add(n.moduleSpecifier.text); // the edge madge misses
    else if (ts.isCallExpression(n)) {
      const dynamic = n.expression.kind === ts.SyntaxKind.ImportKeyword;
      const req = ts.isIdentifier(n.expression) && n.expression.text === 'require';
      const arg = n.arguments[0];
      if ((dynamic || req) && arg && ts.isStringLiteral(arg)) add(arg.text);
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return [...out];
}

export function srcFiles(): string[] {
  return execFileSync(
    'bash',
    [
      '-c',
      "find src -type f \\( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' \\)",
    ],
    { cwd: ROOT, encoding: 'utf8' },
  )
    .trim()
    .split('\n');
}

export function dependencyGraph(files: string[]): Map<string, string[]> {
  const deps = new Map<string, string[]>();
  for (const f of files) deps.set(f, edgesOf(f, fs.readFileSync(path.join(ROOT, f), 'utf8')));
  return deps;
}

export function reachableFrom(deps: Map<string, string[]>, seeds: string[]): Set<string> {
  const seen = new Set<string>();
  const queue = [...seeds];
  while (queue.length) {
    const f = queue.pop()!;
    if (seen.has(f)) continue;
    seen.add(f);
    for (const d of deps.get(f) ?? []) if (!seen.has(d)) queue.push(d);
  }
  return seen;
}

/** The files the APP can reach — no test seeds. Sweep 129's question. */
export function appReachable(): Set<string> {
  const files = srcFiles();
  return reachableFrom(dependencyGraph(files), ENTRIES);
}
