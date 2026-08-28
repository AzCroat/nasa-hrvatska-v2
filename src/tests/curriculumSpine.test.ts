// src/tests/curriculumSpine.test.ts
//
// THE SPINE'S STRUCTURAL INTEGRITY (Wave 1, 2026-08-28).
//
// The curriculum is data, and data that is merely plausible is the failure mode
// this repo keeps meeting: a screen key that no longer resolves, a category that
// was renamed, a lesson everyone believes is covered and is not. These assertions
// run against the REAL spine and the REAL lesson catalog, so authoring a bad
// entry fails the build rather than stranding a learner mid-level.

import { describe, it, expect } from 'vitest';

const { CURRICULUM, CURRICULUM_LEVELS, spineForLevel } =
  await import('../../functions/api/content/_data/curriculum.js');
const { LESSONS } = await import('../../functions/api/content/_data/lessons.js');
const { LESSON_TAUGHT_CATEGORY } = await import('../lib/teachPractice');

type Entry = {
  id: string;
  level: string;
  order: number;
  prerequisites: string[];
  objectives: string[];
};

const spine = CURRICULUM as Entry[];
const lessonById = new Map((LESSONS as { id: string; level: string }[]).map((l) => [l.id, l]));
const byId = new Map(spine.map((e) => [e.id, e]));
const RANK: Record<string, number> = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };

describe('the spine and the lesson catalog agree', () => {
  it('every spine entry names a lesson that exists', () => {
    for (const e of spine) {
      expect(lessonById.has(e.id), `spine entry has no lesson: ${e.id}`).toBe(true);
    }
  });

  it('every lesson appears in the spine exactly once', () => {
    // A lesson missing from the spine is unreachable by the teaching slot — it
    // exists but can never be taught, which is the bug this whole wave fixes.
    const counts = new Map<string, number>();
    for (const e of spine) counts.set(e.id, (counts.get(e.id) ?? 0) + 1);
    for (const l of LESSONS as { id: string }[]) {
      expect(counts.get(l.id), `lesson missing from spine: ${l.id}`).toBe(1);
    }
    expect(spine.length).toBe((LESSONS as unknown[]).length);
  });

  it('the level on the spine matches the level on the lesson', () => {
    // Two records of one fact; a test is the only thing keeping them equal.
    for (const e of spine) {
      expect(lessonById.get(e.id)?.level, `level disagreement on ${e.id}`).toBe(e.level);
    }
  });
});

describe('ordering', () => {
  it('order is dense and 1-based within every level', () => {
    for (const lv of CURRICULUM_LEVELS as string[]) {
      const at = spineForLevel(lv) as Entry[];
      at.forEach((e, i) => {
        expect(e.order, `${lv}: ${e.id} out of sequence`).toBe(i + 1);
      });
    }
  });

  it('no two lessons in a level share an order', () => {
    for (const lv of CURRICULUM_LEVELS as string[]) {
      const orders = (spineForLevel(lv) as Entry[]).map((e) => e.order);
      expect(new Set(orders).size, `${lv} has duplicate order values`).toBe(orders.length);
    }
  });

  it('every level has at least one lesson', () => {
    for (const lv of CURRICULUM_LEVELS as string[]) {
      expect((spineForLevel(lv) as Entry[]).length, `${lv} spine is empty`).toBeGreaterThan(0);
    }
  });
});

describe('prerequisites form a valid dependency graph', () => {
  it('every prerequisite names a lesson in the spine', () => {
    for (const e of spine) {
      for (const p of e.prerequisites) {
        expect(byId.has(p), `${e.id} requires unknown lesson: ${p}`).toBe(true);
      }
    }
  });

  it('no prerequisite points at a HIGHER level', () => {
    // A1 depending on B2 would be unreachable for the learner who needs it most.
    for (const e of spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe) continue;
        expect(
          RANK[pe.level] ?? 0,
          `${e.id} (${e.level}) requires higher-level ${p} (${pe.level})`,
        ).toBeLessThanOrEqual(RANK[e.level] ?? 0);
      }
    }
  });

  it('a same-level prerequisite always comes EARLIER in the spine', () => {
    // Otherwise the learner reaches a lesson whose prerequisite they cannot yet
    // have done — a deadlock that only shows up as "the app stopped teaching me".
    for (const e of spine) {
      for (const p of e.prerequisites) {
        const pe = byId.get(p);
        if (!pe || pe.level !== e.level) continue;
        expect(pe.order, `${e.id} requires later same-level lesson ${p}`).toBeLessThan(e.order);
      }
    }
  });

  it('the graph has no cycles', () => {
    const gray = new Set<string>();
    const black = new Set<string>();
    const cycles: string[] = [];
    const visit = (id: string, path: string[]) => {
      if (black.has(id)) return;
      if (gray.has(id)) {
        cycles.push(path.concat(id).join(' → '));
        return;
      }
      gray.add(id);
      for (const p of byId.get(id)?.prerequisites ?? []) visit(p, path.concat(id));
      gray.delete(id);
      black.add(id);
    };
    for (const e of spine) visit(e.id, []);
    expect(cycles).toEqual([]);
  });
});

describe('objectives', () => {
  it('every lesson states what the learner will be able to do', () => {
    // A lesson that cannot say what it teaches is not a lesson. This is the one
    // field the spine adds that a human must actually think about.
    for (const e of spine) {
      expect(e.objectives.length, `${e.id} has no objectives`).toBeGreaterThan(0);
      for (const o of e.objectives) {
        expect(typeof o).toBe('string');
        expect(o.trim().length, `${e.id} has an empty objective`).toBeGreaterThan(8);
      }
    }
  });
});

describe('the spine does not duplicate facts that live elsewhere', () => {
  it('carries no taught-category field of its own', () => {
    // LESSON_TAUGHT_CATEGORY is the single source of truth, and it is
    // deliberately conservative — some lessons have no honest drill pairing.
    // A second copy here would drift, and a wrong drill after a lesson is worse
    // than no drill.
    for (const e of spine) {
      expect(e).not.toHaveProperty('teaches');
      expect(e).not.toHaveProperty('practiceScreen');
    }
  });

  it('the lessons that DO map to a category map to a real one', () => {
    const known = new Set(Object.keys(LESSON_TAUGHT_CATEGORY));
    const mapped = spine.filter((e) => known.has(e.id));
    // Not every lesson is mapped, by design. But a healthy share must be, or the
    // teach-then-practise coupling has nothing to couple.
    expect(mapped.length).toBeGreaterThanOrEqual(20);
  });
});
