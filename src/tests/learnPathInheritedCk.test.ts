// src/tests/learnPathInheritedCk.test.ts
//
// A Learn Path item must not be satisfied by having done a DIFFERENT item.
//
// THE THIRD END OF THE SAME INVARIANT. `learnPathTapCompletion` forbids an item
// gated on its OWN id (ticked by the opening tap); `learnPathReachableCk`
// forbids a `vsIncludes` key nothing writes (never tickable at all). Neither
// asks the question between them: **is this key already written by a tile the
// learner passed two levels ago?** `stats.vs` is append-only and global, so a
// key written once is set for ever — a second item testing it is complete
// before the learner reaches it, and nothing anywhere says so.
//
// Nine destinations are visited twice by the served path. Seven of them drop the
// `vsIncludes` leaf on the repeat and re-gate on a higher counter (lp53, lp55,
// lp56, lp57, lp62, lp63, lp66). THREE did not, and all three were live:
//
//   listening    lp_listen_basics@L1 → lp17@L3   a day-two beginner (40 XP,
//                                                lc 2) had a level-3 tile done
//   history      lp31@L5            → lp61@L6
//   pitchaccent  lp50@L6            → lp70@L7    and lp70 is the (B) case too:
//                                                its leaf named `pitchaccent`,
//                                                copied from lp50, so the PITCH
//                                                ACCENT drill ticked "Tongue
//                                                Twisters: Expert" while the
//                                                tongue twisters never did.
//
// The harm is not cosmetic. `evalCk` feeds three consumers: LearnPath renders
// the tile done, the 80% threshold that unlocks the NEXT level counts it, and
// HomeTab/LearnTab pick the next path item by skipping completed ones — so the
// app never recommends a tile it wrongly believes is finished.
//
// TWO CLAUSES, BOTH DERIVED, because they fail differently:
//   (A) no `vsIncludes` key is tested by more than one item — the inheritance;
//   (B) an item's `vsIncludes` key IS its own destination key (`go`, or
//       `al_<lessonId>` for animlesson) — the wrong-screen copy, which clause A
//       cannot see when the other owner is a repeat that was already fixed.
//
// And an EFFECT assertion driving the real `evalCk`, because a structural pin
// on the DSL's spelling survives the DSL changing underneath it.
import { describe, it, expect } from 'vitest';
import { LEARN_PATH } from '../../functions/api/content/_data/learnPath.js';
import { evalCk, type CkRule, type Stats } from '../lib/learnPathRules';

interface PathItem {
  id: string;
  go?: string;
  lessonId?: string;
  ckRule?: CkRule;
}
interface PathStage {
  level?: number;
  items?: PathItem[];
}

const items = (LEARN_PATH as PathStage[]).flatMap((s) =>
  (s.items || []).map((i) => ({ ...i, level: s.level ?? 0 })),
);

/** Every `vsIncludes` value in a rule, at any nesting depth. */
function vsLeaves(rule: unknown): string[] {
  if (!rule || typeof rule !== 'object') return [];
  const r = rule as Record<string, unknown>;
  const out: string[] = [];
  for (const branch of ['anyOf', 'allOf'] as const) {
    if (Array.isArray(r[branch])) for (const n of r[branch] as unknown[]) out.push(...vsLeaves(n));
  }
  if (typeof r.vsIncludes === 'string') out.push(r.vsIncludes);
  return out;
}

/** The key this item's OWN destination writes into `stats.vs`. */
const ownKey = (it: PathItem) => (it.go === 'animlesson' ? `al_${it.lessonId}` : it.go);

describe('the derivation is real', () => {
  it('reads the served path and finds its vsIncludes leaves', () => {
    expect(items.length).toBeGreaterThanOrEqual(90);
    const leaves = items.flatMap((i) => vsLeaves(i.ckRule));
    expect(leaves.length).toBeGreaterThanOrEqual(50);
    // Nesting must be followed: every leaf here sits inside an `anyOf`.
    expect(vsLeaves({ anyOf: [{ allOf: [{ vsIncludes: 'x' }] }] })).toEqual(['x']);
  });

  it('still sees repeat destinations, or clause A guards nothing', () => {
    const seen = new Map<string, number>();
    for (const it of items) {
      const k = `${it.go}|${it.lessonId ?? ''}`;
      seen.set(k, (seen.get(k) ?? 0) + 1);
    }
    const repeats = [...seen.values()].filter((n) => n > 1).length;
    expect(repeats).toBeGreaterThanOrEqual(5);
  });
});

describe('no Learn Path item inherits another item’s completion', () => {
  it('(A) no vsIncludes key is tested by more than one item', () => {
    const owners = new Map<string, string[]>();
    for (const it of items)
      for (const v of vsLeaves(it.ckRule)) {
        if (!owners.has(v)) owners.set(v, []);
        owners.get(v)!.push(`${it.id}@L${it.level}`);
      }
    const shared = [...owners.entries()].filter(([, ids]) => ids.length > 1);
    expect(
      shared.map(([k, ids]) => `${k} tested by ${ids.join(' and ')}`),
      'a vs key is append-only and global: the later tile is complete before the learner reaches it. Re-gate the repeat on a higher counter, as lp62/lp63/lp66 do.',
    ).toEqual([]);
  });

  it('(B) every vsIncludes key is the item’s own destination key', () => {
    const wrong = items.flatMap((it) =>
      vsLeaves(it.ckRule)
        .filter((v) => v !== ownKey(it))
        .map((v) => `${it.id}@L${it.level} (go=${it.go}) tests '${v}', own key is '${ownKey(it)}'`),
    );
    expect(
      wrong,
      'an item gated on a screen it does not open completes for work done elsewhere, and never for its own',
    ).toEqual([]);
  });

  it('completing a destination does not tick a LATER item sharing it', () => {
    // Source order is path order, so the first item with a destination is the
    // one that teaches it. Drive the REAL evaluator with only that key set and
    // every counter at zero: the repeat must still read false.
    const firstFor = new Map<string, (typeof items)[number]>();
    const repeats: { first: (typeof items)[number]; later: (typeof items)[number] }[] = [];
    for (const it of items) {
      const k = `${it.go}|${it.lessonId ?? ''}`;
      const first = firstFor.get(k);
      if (first) repeats.push({ first, later: it });
      else firstFor.set(k, it);
    }
    expect(repeats.length).toBeGreaterThanOrEqual(5);

    const ticked: string[] = [];
    for (const { first, later } of repeats) {
      const key = ownKey(first);
      if (!key) continue;
      const st: Stats = { xp: 0, lc: 0, gc: 0, sp: 0, ct: [], vs: [key] };
      if (evalCk(later.ckRule, st))
        ticked.push(`${later.id}@L${later.level} ticks on '${key}' (${first.id})`);
    }
    expect(ticked).toEqual([]);
  });
});
