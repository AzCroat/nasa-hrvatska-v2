/**
 * noUnreachableModules.test.ts — every module in src/ must be reachable.
 *
 * WHAT THIS CLOSED (2026-09-16). 31 modules were reachable from nothing at
 * all — not the app, not even a test. Among them: `RegionScreens.tsx` (776
 * lines, three screens all superseded by live standalone files of the same
 * names), a second root `ErrorBoundary` (main.tsx defines and mounts its own
 * inline), `components/family/index.ts` left over from the removed Family
 * feature, and components CLAUDE.md's directory map lists as live parts of the
 * home screen — `DailyCroatianSection`, `PathProgressCard`, `CampaignBanner`,
 * `WeeklyRecapModal`. Dead files are not merely clutter here: a duplicate
 * `RegionScreen` invites editing the one nobody renders.
 *
 * THE GRAPH IS BUILT FROM THE AST, AND THAT IS LOAD-BEARING. `madge --orphans`
 * answered 41, and it was wrong twice over:
 *   - it does not follow `export { X } from './X'`, so every module reached
 *     only through a barrel looked dead. It listed all seven illustrations;
 *     `LessonScreen` imports them via `components/illustrations/index.js`. The
 *     BUILD caught that, not the test suite — deleting them broke rollup.
 *   - it reports files with NO importer, which misses dead CLUSTERS (A imports
 *     B, both unreachable). Only a reachability walk finds those.
 * So: imports, re-exports, dynamic `import()` and `require()` are all edges,
 * and a `.js` specifier resolves to the literal file first (what the bundler
 * does) and then to the `.ts` source (what tsc does).
 *
 * The walk seeds from the app entries AND from every test, so a module kept
 * alive only by its own tests still counts as reachable — that is a softer
 * problem than dead code and is not what this guard is for.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { execFileSync } from 'node:child_process';
import { describe, it, expect } from 'vitest';

const ROOT = path.join(__dirname, '..', '..');
const ENTRIES = ['src/main.tsx', 'src/sw.js'];

/**
 * Unreachable on purpose. Each entry states WHY, and both staleness directions
 * are checked below: the file must still exist, and it must still be
 * unreachable — an exemption guarding nothing is how the `idioms` dead end
 * survived a staleness test elsewhere in this suite.
 */
const KNOWN_UNREACHABLE: Record<string, string> = {
  'src/components/croatia/MediaCard.tsx':
    'Dead in the app, but mediaDoneTombstones.test.ts pins its source by path ' +
    '(readFileSync, not import), so deleting it means deciding the fate of the ' +
    'media-done tombstone chain — a separate call from a dead-file sweep.',
  'src/lib/constants/storage.ts':
    'A `.ts`/`.js` pair one specifier apart: attemptEvidence.ts imports ' +
    "'./constants/storage.js', which the BUNDLER resolves to storage.js and " +
    'tsc resolves to storage.ts. They differ only by `as const` today, so ' +
    'nothing diverges — but which file to keep is a deliberate decision.',
};

const EXTS = ['.ts', '.tsx', '.js', '.jsx'];
const isTest = (f: string) =>
  f.includes('/tests/') || f.includes('__tests__') || /\.test\.[jt]sx?$/.test(f);

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

function unreachableModules(): { files: string[]; dead: string[]; reachable: number } {
  const files = execFileSync(
    'bash',
    [
      '-c',
      "find src -type f \\( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' \\)",
    ],
    { cwd: ROOT, encoding: 'utf8' },
  )
    .trim()
    .split('\n');
  const deps = new Map<string, string[]>();
  for (const f of files) deps.set(f, edgesOf(f, fs.readFileSync(path.join(ROOT, f), 'utf8')));
  const seen = new Set<string>();
  const queue = [...ENTRIES, ...files.filter(isTest)];
  while (queue.length) {
    const f = queue.pop()!;
    if (seen.has(f)) continue;
    seen.add(f);
    for (const d of deps.get(f) ?? []) if (!seen.has(d)) queue.push(d);
  }
  const dead = files.filter((f) => !isTest(f) && !/\.d\.ts$/.test(f) && !seen.has(f)).sort();
  return { files, dead, reachable: seen.size };
}

describe('no unreachable modules in src/', () => {
  const { files, dead, reachable } = unreachableModules();

  it('the walk actually traverses the tree', () => {
    // Without this a broken resolver reaches nothing, calls everything dead,
    // and the exemption list below would be asked to cover the whole repo.
    expect(files.length).toBeGreaterThan(1000);
    expect(reachable).toBeGreaterThan(files.length / 2);
    for (const e of ENTRIES) expect(fs.existsSync(path.join(ROOT, e))).toBe(true);
  });

  it('follows re-export and dynamic-import edges (the detector)', () => {
    // Driven directly. `export … from` is the edge whose absence made madge
    // report seven live illustration components as dead.
    const tmp = path.join(__dirname, '__reach_probe.ts');
    fs.writeFileSync(tmp, 'export const x = 1;\n');
    try {
      expect(edgesOf('src/a.ts', `export { x } from './${path.basename(tmp, '.ts')}';`)).toEqual(
        [],
      );
      const here = `src/tests/${path.basename(tmp)}`;
      expect(edgesOf('src/tests/b.ts', `export { x } from './__reach_probe';`)).toContain(here);
      expect(edgesOf('src/tests/b.ts', `import './__reach_probe';`)).toContain(here);
      expect(edgesOf('src/tests/b.ts', `const p = import('./__reach_probe');`)).toContain(here);
    } finally {
      fs.unlinkSync(tmp);
    }
  });

  it('nothing is unreachable except the recorded exemptions', () => {
    expect(dead).toEqual(Object.keys(KNOWN_UNREACHABLE).sort());
  });

  it('every exemption still exists and is still unreachable', () => {
    for (const f of Object.keys(KNOWN_UNREACHABLE)) {
      expect(fs.existsSync(path.join(ROOT, f)), `${f} was deleted — drop its exemption`).toBe(true);
      expect(dead, `${f} is reachable now — drop its exemption`).toContain(f);
    }
    expect(Object.keys(KNOWN_UNREACHABLE)).toHaveLength(2);
  });
});
