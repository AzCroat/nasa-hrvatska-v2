// A picker category (ALL_CATEGORIES) is served to a learner from the level of the first lesson that
// teaches it. If every route of that category sits ABOVE that level, the course gate treats the
// category as reached but the learner can never be served a drill for it. This fails when a
// picker category has no route at the level it claims to serve.
import { describe, expect, it } from 'vitest';
import { ALL_CATEGORIES } from '../lib/adaptive';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';

const { CURRICULUM } = await import('../../functions/api/content/_data/curriculum.js');

const RANK: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };

// Known gaps, each owned by a later step (cityloc, dative and sibil are fixed with their B1/B2
// lessons). A category leaves this list when it is fixed; the test below fails if one is fixed
// and still listed, so the list cannot go stale.
const KNOWN_UNREACHABLE: readonly string[] = [];

function unreachable(): string[] {
  const levelOf = new Map<string, number>(
    (CURRICULUM as { id: string; level: string }[]).map((e) => [e.id, RANK[e.level] ?? 9]),
  );
  const out: string[] = [];
  for (const category of ALL_CATEGORIES) {
    let lowest = 9;
    for (const [lesson, cat] of Object.entries(LESSON_TAUGHT_CATEGORY)) {
      if (cat === category) lowest = Math.min(lowest, levelOf.get(lesson) ?? 9);
    }
    if (lowest === 9) continue; // no lesson teaches it: nothing claims a level
    const routes = [CATEGORY_SCREEN_MAP[category], CATEGORY_EASIER_SCREEN[category]].filter(
      Boolean,
    ) as string[];
    // A screen with no CEFR entry is a skill screen that serves the learner's own level.
    const ok = routes.some((s) => (RANK[SCREEN_CEFR[s]] ?? 0) <= lowest);
    if (!ok) out.push(category);
  }
  return out;
}

describe('picker categories are reachable at the level they claim to serve', () => {
  it('every picker category has a route at or below its first lesson level', () => {
    const bad = unreachable().filter((c) => !KNOWN_UNREACHABLE.includes(c));
    expect(bad).toEqual([]);
  });
  it('the known-gap list holds only categories that are still unreachable', () => {
    const now = unreachable();
    expect(KNOWN_UNREACHABLE.filter((c) => !now.includes(c))).toEqual([]);
  });
  it('dative-locative is reached at A1 through the A1 book drill', () => {
    expect(CATEGORY_EASIER_SCREEN['dative-locative']).toBe('a1locativeintro');
    expect(SCREEN_CEFR['a1locativeintro']).toBe('A1');
  });
});
