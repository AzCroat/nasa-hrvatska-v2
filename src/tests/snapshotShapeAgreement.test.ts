/**
 * snapshotShapeAgreement.test.ts — a synced field must READ the shape the app
 * WRITES.
 *
 * THE CLASS. `buildProgressSnapshot` reads localStorage and coerces: `=== 'true'`
 * for a flag, `parseInt` for a number, `JSON.parse` for a structure. Nothing
 * checked that the coercion matches what the app actually stores under that key,
 * and when it does not the field does not throw — it quietly produces a constant.
 * `'["a1-questions"]' === 'true'` is `false`, every time, on every device. The
 * learner's progress is simply never sent, and no error is raised anywhere.
 *
 * THIS REPO HAS SHIPPED THE SAME DEFECT THREE TIMES, which is why it is worth a
 * mechanism rather than a fix:
 *
 *   nh_immersion_days       `parseInt` over a JSON array of date strings → NaN
 *                           → 0. Every device wrote 0; the immersion streak was
 *                           lost cross-device. (fixed, CLAUDE.md)
 *   maja_persona            `JSON.parse` over the raw form every writer produces
 *                           ('cabbie' is not valid JSON) → threw → null. The
 *                           learner's chosen tutor never synced. (fixed)
 *   nh_grammar_track_done   read as a flag; GrammarTrackScreen writes an array of
 *                           completed unit ids. 51 units across six levels, never
 *                           synced — and `applyRemoteProgress` wrote the literal
 *                           `'true'` back over them. (fixed here)
 *
 * All three were found by a person noticing, one at a time, years apart. The
 * shape mismatch is invisible from either side on its own: the writer looks
 * correct, the reader looks correct, and only holding them together shows it.
 *
 * DERIVED FROM BOTH SOURCES. The keys come from the snapshot's own `lsGet` calls
 * and the shapes from the app's own writes — never from a list, because a list is
 * what a fourth instance would be added without.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

type Coercion = 'flag' | 'int' | 'json' | 'raw';

/**
 * Marks a key part this scan could not resolve to a literal. A key containing it
 * is SKIPPED rather than compared under a name that is partly a guess.
 *
 * WRITTEN AS AN ESCAPE, NEVER AS A RAW BYTE, and that is not a style point. A
 * literal NUL in the source makes git classify the whole file as binary: `git
 * diff`, `git log -p`, GitHub's PR view and `git grep` then render it as "Binary
 * files differ" instead of its lines. This file spent its life in that state, so
 * every change to it was unreviewable in a diff — in a repo whose method is to
 * mutate a guard and read the diff. The runtime value is identical either way;
 * only the source encoding changes. `sourceIsText.test.ts` is the ratchet.
 */
const UNRESOLVED = '\u0000';

/** What the snapshot expects of each key it reads. */
function snapshotExpectations(): Map<string, Coercion> {
  const src = strip(readFileSync('src/lib/progressSnapshot.ts', 'utf8'));
  const out = new Map<string, Coercion>();
  for (const m of src.matchAll(/lsGet\('([^']+)'\)/g)) {
    const at = m.index! + m[0].length;
    const after = src.slice(at, at + 40);
    const before = src.slice(Math.max(0, m.index! - 40), m.index!);
    let kind: Coercion = 'raw';
    if (/^\s*===\s*'(true|1)'/.test(after)) kind = 'flag';
    else if (/parseInt\($/.test(before)) kind = 'int';
    else if (/JSON\.parse\($/.test(before)) kind = 'json';
    if (!out.has(m[1]!)) out.set(m[1]!, kind);
  }
  return out;
}

/** What the app writes under each key. */
function appWrites(): Map<string, Set<string>> {
  const files = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
    (f) =>
      !f.includes('/tests/') &&
      !f.includes('.test.') &&
      !f.endsWith('progressSnapshot.ts') &&
      // THE EXCLUSION THAT MAKES THIS TEST MEAN ANYTHING. applyRemoteProgress
      // writes back whatever shape the snapshot reads, BY CONSTRUCTION — the two
      // are the same contract seen from both ends. Include it and every field
      // agrees with itself: the first run of this sweep reported zero findings
      // on a key already known to be broken, because the sync path's own
      // `_safeSet(…, 'true')` looked like a flag writer.
      !f.endsWith('applyRemoteProgress.ts'),
  );
  const out = new Map<string, Set<string>>();
  const WRITE =
    /(?:localStorage\.setItem|lsSet|_safeSet)\(\s*((?:'[^']*'|[A-Za-z_$][\w$]*)(?:\s*\+\s*(?:'[^']*'|[A-Za-z_$][\w$]*))*)\s*,\s*([^\n]{0,70})/g;
  for (const file of files) {
    const src = strip(readFileSync(file, 'utf8'));
    const consts = new Map<string, string>();
    for (const m of src.matchAll(
      /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*'([^']*)'/g,
    ))
      consts.set(m[1]!, m[2]!);
    for (const m of src.matchAll(WRITE)) {
      // `PROGRESS_KEY + 'done'` is how the grammar track names its key, so the
      // concatenation branch is not a nicety — without it the one real finding
      // is filed under the prefix and never compared.
      const key = m[1]!
        .split('+')
        .map((p) => {
          const t = p.trim();
          return t.startsWith("'") ? t.slice(1, -1) : (consts.get(t) ?? UNRESOLVED);
        })
        .join('');
      if (key.includes(UNRESOLVED)) continue;
      const value = m[2]!.trim();
      const shape = /^JSON\.stringify/.test(value)
        ? 'json'
        : /^'(true|false|1|0)'/.test(value)
          ? 'flag'
          : 'other';
      if (!out.has(key)) out.set(key, new Set());
      out.get(key)!.add(`${shape} :: ${value.slice(0, 46)}  [${file}]`);
    }
  }
  return out;
}

describe('the derivation is real', () => {
  it('reads both sides', () => {
    // Either side empty makes the comparison below pass vacuously.
    const expectations = snapshotExpectations();
    expect(expectations.size).toBeGreaterThan(50);
    expect(appWrites().size).toBeGreaterThan(30);
    // And the coercions are actually being told apart, rather than everything
    // collapsing to 'raw'.
    const kinds = new Set(expectations.values());
    for (const k of ['flag', 'int', 'json'] as const) expect(kinds.has(k)).toBe(true);
  });

  it('resolves a key written as CONST + literal', () => {
    // The shape the real finding was hiding behind: GrammarTrackScreen writes to
    // `PROGRESS_KEY + 'done'`. A scan that stops at the identifier files it under
    // `nh_grammar_track_` and compares nothing.
    expect([...appWrites().keys()]).toContain('nh_grammar_track_done');
  });
});

describe('every synced field reads the shape the app writes', () => {
  it('has no field whose coercion can only ever produce a constant', () => {
    const expectations = snapshotExpectations();
    const writes = appWrites();
    const mismatches: string[] = [];

    for (const [key, kind] of expectations) {
      const written = [...(writes.get(key) ?? [])];
      // No writer found in app code means the key is written through an imported
      // constant or a helper module this scan cannot follow (customWords.ts,
      // mediaDone.ts, savedPhrases.ts all export their key). Absence of evidence,
      // so it is not reported as a mismatch — the guard covers the keys it can
      // see both ends of.
      if (written.length === 0) continue;
      const json = written.some((w) => w.startsWith('json'));
      const flag = written.some((w) => w.startsWith('flag'));
      let why = '';
      if (kind === 'flag' && json && !flag)
        why = "snapshot reads a flag (=== 'true'), app writes JSON";
      else if (kind === 'int' && json) why = 'snapshot parseInts a JSON structure (→ NaN → 0)';
      else if (kind === 'json' && flag && !json) why = 'snapshot JSON.parses a bare flag string';
      if (why) mismatches.push(`${key}: ${why}\n      ${written.join('\n      ')}`);
    }

    expect(
      mismatches,
      'These fields are written in one shape and read in another, so the snapshot ' +
        'sends a constant and the learner’s progress never syncs — silently, with ' +
        'no error on either side:\n  ' +
        mismatches.join('\n  '),
    ).toEqual([]);
  });
});

describe('the grammar track specifically', () => {
  const SNAP = strip(readFileSync('src/lib/progressSnapshot.ts', 'utf8'));
  const APPLY = strip(readFileSync('src/lib/applyRemoteProgress.ts', 'utf8'));

  it('is snapshotted as an id array, not a flag', () => {
    expect(SNAP).toMatch(/nh_grammar_track_done:\s*_strArrOrUndef\('nh_grammar_track_done'\)/);
  });

  it('is union-merged on the way in, like every other growing id set', () => {
    expect(APPLY).toMatch(/_unionStrArr\('nh_grammar_track_done'/);
  });

  it('no longer writes the literal true over the learner’s units', () => {
    // The clobber path: `_safeSet('nh_grammar_track_done', 'true')` turned the
    // array into a boolean, which the screen renders as NaN%.
    expect(APPLY).not.toMatch(/_safeSet\(\s*'nh_grammar_track_done'/);
  });
});
