// src/tests/learnPathTapCompletion.test.ts
//
// A Learn Path item must not be satisfiable by the act of opening it.
//
// useScreenLauncher.launchPathItem writes `vs: [item.id]` the moment a tile is
// TAPPED (src/hooks/useScreenLauncher.ts:386-396), before the learner has done
// anything. So any item whose ckRule contains `{ vsIncludes: <its own id> }`
// ticks complete on the opening tap — the whole B2/C1 tail of the path (20
// items at levels 6-7) used to do exactly that, including the speaking,
// production-drill and pitch-mastery items where "opened it" plainly is not
// "did it".
//
// src/tests/animlesson-gate.test.ts already forbids this for go === 'animlesson'.
// This suite generalises the same invariant to EVERY item, so the pattern cannot
// come back anywhere in the path.
//
// Note on the sibling mechanism: launchPathItem ALSO writes `vs: [item.go]`
// immediately for items whose `go` is in BLACK_HOLE_SCREENS
// (useScreenLauncher.ts:531-547). That one is deliberate — informational reading
// screens have nothing to "do" but be read, and lc/gc credit plus XP still wait
// for the 20s dwell timer. This suite therefore does not forbid screen-key
// leaves; it forbids only the own-id gate, which bypasses every completion
// signal a screen has.
import { describe, it, expect } from 'vitest';
import { LEARN_PATH } from '../../functions/api/content/_data/learnPath.js';

type CkNode = {
  vsIncludes?: string;
  ctIncludes?: string;
  lcAtLeast?: number;
  gcAtLeast?: number;
  xpAtLeast?: number;
  spAtLeast?: number;
  anyOf?: CkNode[];
  allOf?: CkNode[];
};
interface PathItem {
  id: string;
  go?: string;
  ckRule?: CkNode;
}
interface PathStage {
  level?: number;
  items?: PathItem[];
}

const LEAF_KEYS = [
  'vsIncludes',
  'ctIncludes',
  'lcAtLeast',
  'gcAtLeast',
  'xpAtLeast',
  'spAtLeast',
] as const;

function collectLeaves(node: CkNode | undefined, out: CkNode[] = []): CkNode[] {
  if (!node || typeof node !== 'object') return out;
  if (LEAF_KEYS.some((k) => k in node)) out.push(node);
  for (const combinator of ['anyOf', 'allOf'] as const) {
    const children = node[combinator];
    if (Array.isArray(children)) children.forEach((c) => collectLeaves(c, out));
  }
  return out;
}

const allItems = (LEARN_PATH as PathStage[]).flatMap((stage) =>
  (stage.items || []).map((i) => ({ ...i, level: stage.level })),
);

describe('Learn Path tap-completion', () => {
  it('has items to check (guards against a rename silently emptying this suite)', () => {
    expect(allItems.length).toBeGreaterThan(0);
  });

  it('no item is gated on its own id', () => {
    const selfGated = allItems
      .filter((item) => collectLeaves(item.ckRule).some((l) => l.vsIncludes === item.id))
      .map((item) => `L${item.level} ${item.id} (go=${item.go})`);
    expect(selfGated).toEqual([]);
  });

  it('every item still declares at least one completion criterion', () => {
    // The counterpart risk to the fix above: stripping the own-id leaf must not
    // leave an item with no way to complete at all.
    const uncompletable = allItems
      .filter((item) => collectLeaves(item.ckRule).length === 0)
      .map((item) => `L${item.level} ${item.id} (go=${item.go})`);
    expect(uncompletable).toEqual([]);
  });
});
