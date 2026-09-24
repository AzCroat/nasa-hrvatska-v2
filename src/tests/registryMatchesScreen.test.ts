// src/tests/registryMatchesScreen.test.ts
//
// THE REGISTRY DESCRIBES SCREENS THAT DO NOT READ IT (2026-09-23).
//
// `exerciseRegistry.ts` calls itself the single source of truth for screen
// completion policy and carries `questKind` + `activityType` per key. A screen
// that HAND-ROLLS `award(..., type)` / `markQuest(id)` states those same two
// facts itself. Where a screen does both, the two copies must agree — and only
// one of them is exercised, which is the inert-copy shape this repo keeps
// rediscovering (the CEFR badge formula, the two pools' `dictation` category,
// the nav-tab table).
//
// Sweep 57 found four disagreements BY HAND and recorded them; nothing stopped
// a fifth. This is that mechanism. It found one real defect on its first run
// after the sweep's own fixes, and the defect was in the harness rather than
// the app — see the route-block note below, which is why that note is here
// rather than in a commit message.
//
// WHY THE ROWS MATTER EVEN WHEN NOTHING CALLS THEM. `completeExercise` reads
// `args.activityType ?? entry?.activityType`, so a row is consulted only when
// that key is passed to it. `writing` and `story-comprehension` are not: they
// are among the 20 rows no static key, no ModeDrill id and no lesson screenId
// reaches. They were still corrected, because the registry's own header
// describes migrating screens onto `completeExercise` as in progress, and a
// wrong row would land the moment its screen migrates.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const EXTS = ['', '.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts'];

const stripComments = (s: string): string =>
  s.replace(/(^|[^:])\/\/.*$/gm, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

/**
 * No `existsSync`-then-`statSync` here, and no `statSync`-then-`readFileSync`
 * below: CodeQL flags both as file-system race conditions (js/file-system-race),
 * and it is right about the shape even in a test — the check and the use are two
 * syscalls with a window between them. Asking once and handling the failure is
 * both correct and simpler, so this is fixed rather than dismissed.
 */
function statOrNull(p: string): fs.Stats | null {
  try {
    return fs.statSync(p);
  } catch {
    return null;
  }
}

function resolveModule(dir: string, spec: string): string | null {
  const base = path.resolve(dir, spec);
  for (const e of EXTS) {
    const c = base + e;
    if (statOrNull(c)?.isFile()) return c;
  }
  const swapped = base.replace(/\.js$/, '.ts');
  return statOrNull(swapped)?.isFile() ? swapped : null;
}

const routerSrc = fs.readFileSync(path.join(SRC, 'components/AppRouter.tsx'), 'utf8');

/** Lazy component name -> module file, from the REAL router. */
const componentFile = new Map<string, string>();
for (const [, name, spec] of routerSrc.matchAll(
  /const (\w+) = lazy\w*\(\(\) => import\('([^']+)'\)\)/g,
)) {
  const f = resolveModule(path.join(SRC, 'components'), spec!);
  if (f) componentFile.set(name!, f);
}

/**
 * The module that renders a screen key.
 *
 * THE WINDOW IS BOUNDED BY THE NEXT ROUTE, AND A FIXED ONE PRODUCED A FALSE
 * FINDING. A first draft scanned 700 characters from the match; the first
 * `<Component>` inside a route block is often `ScreenErrorBoundary`, which is
 * not lazy and so not in the map, and the scan then ran past the end of the
 * block into the NEXT screen's JSX and attributed a neighbour's `award` kind to
 * this key. It reported `listening_comprehension` as disagreeing with a screen
 * that contains no `award(` call at all — which is what made it obvious, and
 * only because the reported value was checked against the file by hand.
 */
function fileForScreen(key: string): string | null {
  const at = routerSrc.indexOf(`currentScreen === '${key}'`);
  if (at === -1) return null;
  const next = routerSrc.indexOf(`currentScreen === '`, at + 10);
  const block = routerSrc.slice(at, next === -1 ? at + 700 : next);
  for (const m of block.matchAll(/<([A-Z]\w+)[\s/>]/g)) {
    const f = componentFile.get(m[1]!);
    if (f) return f;
  }
  return null;
}

/**
 * Some registry keys are not routes at all: they are `vs` keys a screen writes
 * on completion. `story-comprehension` is one — the GRADED READER writes it, and
 * nothing renders a screen under that name — so a router-only resolution covers
 * its row with nothing. Measured: restoring that row's original wrong value left
 * the router-only version of this suite fully green, which is the whole reason
 * this second path exists.
 *
 * The row is still live: `appUtils`'s `distinctExercisesDone` counts `vs`
 * entries that are registry KEYS for the badge thresholds.
 */
function fileWritingVsKey(key: string): string | null {
  const needle = `vs: ['${key}']`;
  const stack = [SRC];
  while (stack.length) {
    const dir = stack.pop()!;
    // `withFileTypes` answers "directory or file" from the SAME syscall that
    // listed the entry, so there is no separate stat to race against; the read
    // is guarded rather than preconditioned on a check made earlier.
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        if (ent.name !== 'tests') stack.push(p);
      } else if (ent.isFile() && /\.(tsx|ts|jsx|js)$/.test(p)) {
        let src = '';
        try {
          src = fs.readFileSync(p, 'utf8');
        } catch {
          continue;
        }
        if (src.includes(needle)) return p;
      }
    }
  }
  return null;
}

/** The screen whose completion this row describes, however it is reached. */
function screenFileFor(key: string): string | null {
  return fileForScreen(key) ?? fileWritingVsKey(key);
}

interface Row {
  questKind?: string;
  activityType?: string;
}

/** Every `e(...)`/`g(...)` registry row, read from the real source. */
function registryRows(): Map<string, Row> {
  const src = fs.readFileSync(path.join(SRC, 'lib/completion/exerciseRegistry.ts'), 'utf8');
  const body = stripComments(
    src.slice(src.indexOf('const RAW'), src.indexOf('export const EXERCISE_COMPLETION')),
  );
  const rows = new Map<string, Row>();
  for (const m of body.matchAll(/^\s{2}'?([a-zA-Z0-9_-]+)'?:\s*([ge])\(([^)]*)\)/gm)) {
    const args = m[3]!.split(',').map((a) => a.trim().replace(/^'|'$/g, ''));
    rows.set(m[1]!, { questKind: args[1] || undefined, activityType: args[2] || undefined });
  }
  return rows;
}

/**
 * The one disagreement that is a DECISION, with the reason, and checked in both
 * staleness directions below.
 */
const DELIBERATE: Record<string, string> = {
  shadowing:
    "The ROW says activityType 'speaking' and the screen awards 'listening', on purpose. " +
    "`useAward` keys `recordListeningRep()` off the award's activityType and its own comment " +
    'names this screen, so retyping the award would silently drop a displayed Fluency Snapshot ' +
    'metric. Shadowing is genuinely both halves and the app counts it both ways: a PRODUCTION ' +
    'rep by SCREEN id, a LISTENING rep by activityType, a speaking LEDGER write, and — since ' +
    '2026-09-23 — the speak QUEST whenever the session actually scored speech. Only the award ' +
    'kind disagrees, and it is the half with a consumer that would lose a metric.',
};

describe('a registry row agrees with the screen that states the same facts itself', () => {
  const rows = registryRows();

  it('finds rows and screens — a derivation that finds nothing must fail loudly', () => {
    expect(rows.size).toBeGreaterThan(200);
    expect(componentFile.size).toBeGreaterThan(200);
    expect(fileForScreen('shadowing')).toContain('ShadowingScreen');
    expect(
      fileWritingVsKey('story-comprehension'),
      'the vs-key fallback resolves nothing — a row reached only that way is uncovered',
    ).toContain('GradedInputScreen');
  });

  it('no routed hand-rolling screen contradicts its own registry row', () => {
    const bad: string[] = [];
    for (const [key, row] of rows) {
      if (key in DELIBERATE) continue;
      const file = screenFileFor(key);
      if (!file) continue;
      const src = stripComments(fs.readFileSync(file, 'utf8'));
      const awards = new Set(
        [...src.matchAll(/\baward\s*\([^;]{0,160}?,\s*'([a-z_]+)'/g)].map((m) => m[1]!),
      );
      const quests = new Set([...src.matchAll(/markQuest\(\s*'([a-z0-9_]+)'/g)].map((m) => m[1]!));
      if (!awards.size && !quests.size) continue;
      if (row.activityType && awards.size && !awards.has(row.activityType))
        bad.push(`${key}: row activityType '${row.activityType}', screen awards [${[...awards]}]`);
      if (row.questKind && quests.size && !quests.has(row.questKind))
        bad.push(`${key}: row questKind '${row.questKind}', screen marks [${[...quests]}]`);
    }
    expect(
      bad,
      `A screen states its own questKind/activityType AND has a registry row saying otherwise. ` +
        `Only one copy is exercised — whichever the screen happens to use — so the other is an ` +
        `inert copy waiting for the screen to migrate onto completeExercise. Fix the wrong one, ` +
        `or record it in DELIBERATE with the reason:\n  ${bad.join('\n  ')}`,
    ).toEqual([]);
  });

  it.each(Object.keys(DELIBERATE))(
    '%s is still a real, still-deliberate disagreement (both staleness directions)',
    (key) => {
      const row = rows.get(key);
      expect(
        row,
        `${key} is in DELIBERATE but has no registry row — the exemption guards nothing`,
      ).toBeTruthy();
      const file = screenFileFor(key);
      expect(file, `${key} is in DELIBERATE but resolves to no screen`).toBeTruthy();
      const src = stripComments(fs.readFileSync(file!, 'utf8'));
      const awards = new Set(
        [...src.matchAll(/\baward\s*\([^;]{0,160}?,\s*'([a-z_]+)'/g)].map((m) => m[1]!),
      );
      const quests = new Set([...src.matchAll(/markQuest\(\s*'([a-z0-9_]+)'/g)].map((m) => m[1]!));
      const disagrees =
        (!!row!.activityType && awards.size > 0 && !awards.has(row!.activityType)) ||
        (!!row!.questKind && quests.size > 0 && !quests.has(row!.questKind));
      expect(
        disagrees,
        `${key} no longer disagrees with its row, so this exemption suspends a check over a ` +
          `screen that is now consistent. Delete the entry.`,
      ).toBe(true);
      // The reason names the QUEST half as fixed; if the screen stopped marking
      // the speak quest the recorded reason would be false.
      if (key === 'shadowing')
        expect(
          quests.has('speak'),
          'The shadowing exemption is written on the basis that ONLY the award kind disagrees ' +
            'and the speak quest is credited on measured speech. It no longer marks speak, so ' +
            'the reason is stale.',
        ).toBe(true);
    },
  );

  it('the badge argument in appUtils rests on an inequality that still holds', () => {
    // `distinctExercisesDone` is deliberately not keyed on activityType because
    // a type-keyed count would cap below the 10- and 15-exercise badges. The
    // comment there used to assert "the registry's 72 rows" (it is 267); the
    // COUNT was stale and the ARGUMENT was not, because the argument rests on
    // the number of distinct TYPES. Pin the inequality, not either number.
    const types = new Set(
      [...registryRows().values()].map((r) => r.activityType).filter(Boolean) as string[],
    );
    expect(types.size).toBeGreaterThan(0);
    expect(
      types.size,
      `The registry now carries ${types.size} distinct activity types. appUtils explains ` +
        `distinctExercisesDone by saying a type-keyed count "would cap" below the 10 and 15 ` +
        `badges — which stops being true at 10. Re-read that comment before raising this.`,
    ).toBeLessThan(10);
  });
});
