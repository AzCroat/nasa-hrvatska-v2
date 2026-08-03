/**
 * gatedCreditSites.contract.test.ts — the migration's closing invariant.
 *
 * WHAT THIS GUARDS
 * ----------------
 * `EXERCISE_COMPLETION` declares a policy per completion key, and `gated` means
 * "credited only at >= 75%". That promise is only real if the screen actually
 * routes its completion through `completeExercise`. A screen that hand-rolls the
 * write —
 *
 *     setStats((prev) => ({ ...prev, gc: (prev.gc||0)+1, vs: [...(prev.vs||[]), 'x'] }));
 *     writeDelta({ gc: 1, vs: ['x'] });
 *
 * — is credited on a plain finish however low the score, and the registry row
 * saying `gated` is decoration. Sixteen keys were in that state; every one has
 * been migrated. This test is what stops the seventeenth.
 *
 * WHY A SOURCE SCAN, WHEN SOURCE-PINNING TESTS ARE THE THING WE JUST DELETED
 * -------------------------------------------------------------------------
 * The per-screen Pattern-Y specs pinned an exact spelling of the CORRECT code,
 * which is why they failed the moment the code improved. This scans for the
 * BYPASS — the one shape that must never reappear — and says nothing about how a
 * compliant screen is written. Getting greener by deleting a hand-rolled credit
 * is exactly the outcome we want; there is no way to satisfy this test except by
 * routing through the authority (or by declaring the row non-gated on purpose).
 *
 * Per-screen behaviour (a passing run credits, a failing run does not) is
 * asserted in each screen's own contract test; the gate itself is unit-tested in
 * useExerciseCompletion.test.ts.
 */
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { describe, it, expect } from 'vitest';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

const COMPONENTS = join(__dirname, '../components');

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(tsx|jsx)$/.test(name)) out.push(p);
  }
  return out;
}

/** The hand-rolled credit signature: a vs push, or a writeDelta carrying vs. */
function handRolledKeys(source: string): Set<string> {
  const keys = new Set<string>();
  for (const m of source.matchAll(
    /vs:\s*\[\s*\.\.\.\(\s*prev\.vs\s*\|\|\s*\[\]\s*\),\s*'([^']+)'/g,
  ))
    keys.add(m[1]!);
  for (const m of source.matchAll(/writeDelta\(\s*\{[^}]*\bvs:\s*\[\s*'([^']+)'\s*\]/g))
    keys.add(m[1]!);
  return keys;
}

const FILES = walk(COMPONENTS);

describe('no gated exercise hand-rolls its completion credit', () => {
  it('scans a non-trivial number of component files (guards against a broken walk)', () => {
    // Without this, a bad path would make every assertion below pass vacuously.
    expect(FILES.length).toBeGreaterThan(100);
  });

  it('finds hand-rolled credit sites at all (the scanner still matches real code)', () => {
    // Effort/passive screens legitimately still hand-roll, so this set is not
    // empty — which proves the regexes above have not silently stopped matching.
    const all = new Set<string>();
    for (const f of FILES) for (const k of handRolledKeys(readFileSync(f, 'utf8'))) all.add(k);
    expect(all.size).toBeGreaterThan(5);
  });

  it('every gated registry key routes completion through completeExercise', () => {
    const gated = new Set(
      Object.entries(EXERCISE_COMPLETION)
        .filter(([, entry]) => entry.policy.kind === 'gated')
        .map(([key]) => key),
    );
    expect(gated.size).toBeGreaterThan(30);

    const offenders: string[] = [];
    for (const file of FILES) {
      const source = readFileSync(file, 'utf8');
      for (const key of handRolledKeys(source)) {
        if (gated.has(key)) offenders.push(`${key} @ ${file.slice(file.indexOf('/src/') + 1)}`);
      }
    }
    expect(offenders).toEqual([]);
  });
});
