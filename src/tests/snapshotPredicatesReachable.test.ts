/**
 * snapshotPredicatesReachable — can a LOCAL device ever send `true`? (2026-09-23)
 *
 * THE DEFECT THIS RATCHETS. `buildProgressSnapshot` publishes ~14 booleans of
 * the shape `field: lsGet('key') === 'literal'`. Each is a question asked of
 * localStorage, and the question only means something if some code on the same
 * device can put that exact literal in that exact key. Twice now it could not:
 *
 *   nh_grammar_track_done  the key holds a JSON ARRAY of unit ids, read here as
 *                          `=== 'true'`. Fixed earlier; the block above line 124
 *                          of progressSnapshot.ts tells the story.
 *   nh_heritage_saved      WelcomeScreen — the ONLY local writer — sets 'true';
 *                          this line demanded '1'. The only writer of '1' is
 *                          applyRemoteProgress, whose input is this snapshot's
 *                          own output. A closed loop: the flag could never leave
 *                          the device that earned it.
 *
 * Both were silent. No type error (both sides are strings), no crash, no test —
 * the snapshot just sent `false` forever, and "the learner has not done this"
 * is a perfectly ordinary thing for a snapshot to say.
 *
 * WHY applyRemoteProgress IS EXCLUDED FROM THE WRITER SET. It writes these keys
 * FROM the snapshot. Counting it would let a field prove its own reachability:
 * every `=== 'x'` here has a matching `_safeSet(key, 'x')` there, so the loop
 * always closes and the guard would pass on the exact defect it exists to find.
 * The question is specifically whether a device can reach `true` on its OWN.
 *
 * GROUPING IS BY FIELD, NOT BY COMPARISON. `nh_placement_done` reads two keys
 * and accepts either; one of them (`placement_done`, the legacy key) is written
 * only as '1' and so can never satisfy `=== 'true'`. That is harmless — the
 * other alternative works — and a per-comparison guard would fail on it and
 * teach everyone to add exemptions. A field is reachable if ANY alternative is.
 *
 * WHAT THIS MATCHER CAN AND CANNOT SEE — stated because a guard that is trusted
 * beyond its reach is worse than none:
 *   - writes it knows: lsSet / ssSet / _safeSet / LS_SET / localStorage.setItem
 *     / sessionStorage.setItem, with the key quoted or a single-file `const`
 *     holding a quoted string (EasterScreen and streak.ts both do this).
 *   - a non-literal second argument (`v.toString()`, `v ? 'true' : 'false'`,
 *     `next`) is recorded as `<expr>` and CLEARS the field. It cannot be proven
 *     unreachable, so it is not reported. Three keys rely on this today and all
 *     three are genuinely fine: JSON.stringify(boolean) and String(boolean) both
 *     produce exactly 'true'.
 *   - it does NOT see `localStorage[key] = v`, a key built from a template
 *     literal, or a constant imported from another module. Such a key arrives
 *     here as NO-WRITER, which this test fails on — see the message below, which
 *     names that possibility first, because widening the matcher is the right
 *     fix in that case and wiring a writer is the right fix in the other.
 *
 * Positive control below: the real `nh_heritage_saved` fix, reverted in memory,
 * must be reported. A derivation that cannot re-find the defect it was written
 * for is measuring nothing — the first draft of this one could not, because a
 * zero-width `\s*` before a lookahead made every literal write register as an
 * expression, and it passed on the known-broken tree.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(__dirname, '../..');
const SNAPSHOT = path.join(ROOT, 'src/lib/progressSnapshot.ts');
/** Writes these keys FROM the snapshot — see the header. */
const CIRCULAR_WRITER = path.join(ROOT, 'src/lib/applyRemoteProgress.ts');

function strip(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:'"`\\])\/\/[^\n]*/g, '$1');
}

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'tests' || e.name === 'node_modules') continue;
      walk(p, out);
    } else if (/\.(ts|tsx|js|jsx)$/.test(e.name)) out.push(p);
  }
  return out;
}

const ALT = /lsGet\(\s*'([^']+)'\s*\)\s*===\s*'([^']*)'/g;

type Alt = { key: string; want: string };

/** Fields of the form `name: lsGet('k') === 'v'` (optionally `|| …` more of the same). */
function booleanPredicateFields(snapshotSrc: string): Map<string, Alt[]> {
  const fields = new Map<string, Alt[]>();
  for (const line of strip(snapshotSrc).split('\n')) {
    const m = /^\s*([A-Za-z_$][\w$]*)\s*:\s*(.+?),\s*$/.exec(line);
    if (!m) continue;
    const [, field, value] = m;
    const alts: Alt[] = [...value!.matchAll(ALT)].map(([, k, v]) => ({ key: k!, want: v! }));
    if (!alts.length) continue;
    // Only a pure chain of those comparisons joined by `||`. Anything else
    // (a ternary, a call, a mix) is out of scope rather than guessed at.
    const skeleton = value!.replace(ALT, 'X').replace(/\s|\|\|/g, '');
    if (skeleton !== 'X'.repeat(alts.length)) continue;
    fields.set(field!, alts);
  }
  return fields;
}

// The value is captured by LOOKAHEAD so a match does not swallow the next
// write. A CONSUMING window advances lastIndex past everything it read, so the
// second of two nearby writes is invisible — which is how the first run of this
// derivation reported the already-confirmed nh_heritage_saved writer as absent
// (its window was 80 chars then, and WelcomeScreen's preceding lsSet sits ~58
// chars away). Narrowing the window would hide that rather than fix it, so the
// lookahead is the form, and the probe test below proves the difference on a
// fixture instead of depending on how close today's real call sites happen
// to be.
const WRITE =
  /(?:lsSet|ssSet|_safeSet|LS_SET|localStorage\s*\.\s*setItem|sessionStorage\s*\.\s*setItem)\s*\(\s*(?:'([^']+)'|([A-Za-z_$][\w$]*))\s*,\s*(?=([\s\S]{0,60}))/g;
const CONST_DEF = /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=\n]+)?=\s*'([^']+)'/g;

/** key → the set of literals written to it, or `<expr>` for a computed value. */
function localWriters(excluded: string[] = [CIRCULAR_WRITER]): Map<string, Set<string>> {
  const writers = new Map<string, Set<string>>();
  for (const file of walk(path.join(ROOT, 'src'))) {
    if (excluded.includes(file)) continue;
    const src = strip(fs.readFileSync(file, 'utf8'));
    const consts = new Map<string, string>();
    for (const [, n, v] of src.matchAll(CONST_DEF)) consts.set(n!, v!);
    for (const [, quotedKey, identKey, rest] of src.matchAll(WRITE)) {
      const key = quotedKey ?? consts.get(identKey!);
      if (!key) continue;
      const lit = /^'([^']*)'\s*\)/.exec(rest!) ?? /^"([^"]*)"\s*\)/.exec(rest!);
      if (!writers.has(key)) writers.set(key, new Set());
      writers.get(key)!.add(lit ? lit[1]! : '<expr>');
    }
  }
  return writers;
}

type Verdict = 'OK' | 'EXPR' | 'UNREACHABLE' | 'NO-WRITER';

function verdictFor(alt: Alt, writers: Map<string, Set<string>>): Verdict {
  const ws = writers.get(alt.key);
  if (!ws || !ws.size) return 'NO-WRITER';
  if (ws.has('<expr>')) return 'EXPR';
  return ws.has(alt.want) ? 'OK' : 'UNREACHABLE';
}

function report(fields: Map<string, Alt[]>, writers: Map<string, Set<string>>) {
  const unreachable: string[] = [];
  const noWriter: string[] = [];
  for (const [field, alts] of fields) {
    const verdicts = alts.map((a) => verdictFor(a, writers));
    if (verdicts.some((v) => v === 'OK' || v === 'EXPR')) continue;
    const detail = alts
      .map(
        (a, i) =>
          `${a.key} === '${a.want}' → ${verdicts[i]} (local writers: ${JSON.stringify([...(writers.get(a.key) ?? [])])})`,
      )
      .join('; ');
    (verdicts.every((v) => v === 'NO-WRITER') ? noWriter : unreachable).push(`${field}: ${detail}`);
  }
  return { unreachable, noWriter };
}

const SNAPSHOT_SRC = fs.readFileSync(SNAPSHOT, 'utf8');
const FIELDS = booleanPredicateFields(SNAPSHOT_SRC);
const WRITERS = localWriters();

describe('progressSnapshot boolean predicates are reachable from the device', () => {
  it('finds the predicate fields at all (the derivation has a subject)', () => {
    // A matcher that silently matches nothing passes every assertion below.
    expect(FIELDS.size).toBeGreaterThanOrEqual(10);
    expect([...FIELDS.keys()]).toContain('nh_heritage_saved');
    expect([...FIELDS.keys()]).toContain('nh_placement_done');
  });

  it('the writer scan does not swallow a nearby second write (regex form)', () => {
    // The real spacing in WelcomeScreen: two writes about 58 characters apart,
    // with an `if` line between them.
    const fixture = [
      "      lsSet('nh_daily_goal_xp', String(dailyMin * 2));",
      '    }',
      "    if (lsGet('nh_heritage_region')) {",
      "      lsSet('nh_heritage_saved', 'true');",
    ].join('\n');
    const HEAD = "lsSet\\s*\\(\\s*'([^']+)'\\s*,\\s*";
    const keysFrom = (re: RegExp) => [...fixture.matchAll(re)].map((m) => m[1]);

    // Consuming, at the 80-character window this was first written with: the
    // first match eats past the second call and the second key vanishes.
    expect(keysFrom(new RegExp(HEAD + '([\\s\\S]{0,80})', 'g'))).not.toContain('nh_heritage_saved');
    // Lookahead, same window: both keys survive. This is the shipped form.
    expect(keysFrom(new RegExp(HEAD + '(?=([\\s\\S]{0,80}))', 'g'))).toContain('nh_heritage_saved');
    // ...and the scan above really does use it, so the demonstration applies.
    expect(WRITE.source).toContain('(?=(');
  });

  it('no field demands a literal that no local writer ever writes', () => {
    const { unreachable } = report(FIELDS, WRITERS);
    expect(
      unreachable,
      unreachable.length
        ? `These snapshot fields can only ever send false. Every key they read IS written locally, ` +
            `but never with the value they compare against — so the flag is stuck off on the device ` +
            `that earned it and the progress it represents never syncs. Align the comparison with what ` +
            `the writer actually stores (accept BOTH values if installs already hold the old one), or ` +
            `change the writer. Do not "fix" this by pointing at applyRemoteProgress — that is the ` +
            `snapshot's own output coming back.\n  ${unreachable.join('\n  ')}`
        : undefined,
    ).toEqual([]);
  });

  it('every key a predicate reads has a local writer this scan can see', () => {
    const { noWriter } = report(FIELDS, WRITERS);
    expect(
      noWriter,
      noWriter.length
        ? `No local write to these keys was found. TWO different causes, check which:\n` +
            `  (a) the write uses a form this scan does not know — a bracket assignment, a template-` +
            `literal key, or a constant imported from another module. Then widen WRITE/CONST_DEF above ` +
            `and re-run; the header lists what it currently sees.\n` +
            `  (b) nothing writes it, and the field is dead on arrival like stats.heritage was.\n` +
            `  ${noWriter.join('\n  ')}`
        : undefined,
    ).toEqual([]);
  });

  it('POSITIVE CONTROL — the real nh_heritage_saved defect is re-found when reverted', () => {
    // The shipped line accepts '1' or 'true'. Before 2026-09-23 it accepted only
    // '1', which WelcomeScreen has never written. Revert it in memory: the
    // derivation must say so, or it is not measuring anything.
    const reverted = SNAPSHOT_SRC.replace(
      /nh_heritage_saved:.*$/m,
      "nh_heritage_saved: lsGet('nh_heritage_saved') === '1',",
    );
    expect(reverted).not.toEqual(SNAPSHOT_SRC); // the mutation LANDED
    const { unreachable } = report(booleanPredicateFields(reverted), WRITERS);
    expect(unreachable.join('\n')).toMatch(/nh_heritage_saved/);
  });

  it('POSITIVE CONTROL — a fabricated impossible literal is reported', () => {
    const fake = SNAPSHOT_SRC.replace(
      /nh_placement_done:.*$/m,
      "nh_placement_done: lsGet('nh_placement_done') === 'definitely-not-a-value-anyone-writes',",
    );
    expect(fake).not.toEqual(SNAPSHOT_SRC);
    const { unreachable } = report(booleanPredicateFields(fake), WRITERS);
    expect(unreachable.join('\n')).toMatch(/nh_placement_done/);
  });

  it('NEGATIVE CONTROL — one dead alternative does not condemn a reachable field', () => {
    // nh_placement_done reads the legacy `placement_done` key, which is only
    // ever written as '1' and so can never satisfy `=== 'true'`. The field is
    // still fine, because its other alternative works. If this ever starts
    // failing, the guard has become per-comparison and will demand exemptions.
    const legacy = verdictFor({ key: 'placement_done', want: 'true' }, WRITERS);
    expect(legacy).toBe('UNREACHABLE');
    const { unreachable, noWriter } = report(FIELDS, WRITERS);
    expect([...unreachable, ...noWriter].join('\n')).not.toMatch(/nh_placement_done/);
  });

  it('NEGATIVE CONTROL — applyRemoteProgress alone cannot make a field look reachable', () => {
    // Including it would close the loop on every field. Prove it: with the
    // exclusion dropped, the reverted-heritage tree reports clean.
    const withCircular = localWriters([]);
    const reverted = SNAPSHOT_SRC.replace(
      /nh_heritage_saved:.*$/m,
      "nh_heritage_saved: lsGet('nh_heritage_saved') === '1',",
    );
    const { unreachable } = report(booleanPredicateFields(reverted), withCircular);
    expect(unreachable.join('\n')).not.toMatch(/nh_heritage_saved/);
  });
});
