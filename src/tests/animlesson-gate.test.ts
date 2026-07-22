// src/tests/animlesson-gate.test.ts
// Locks in the animated-lesson comprehension gate. The Learn Path launcher
// writes vs:[item.id] on the tap that OPENS a lesson, so any animlesson whose
// ckRule checks vsIncludes: <its own item.id> would be marked complete on that
// tap — before the learner sees the lesson. Every animlesson gate must instead
// key on the 'al_<lessonId>' completion signal that AnimatedLesson writes only
// when the summary slide is reached.
import { describe, it, expect } from 'vitest';
import { LEARN_PATH } from '../../functions/api/content/_data/learnPath.js';

type CkRule = { anyOf?: Array<{ vsIncludes?: string }> };
interface PathItem {
  id: string;
  go?: string;
  lessonId?: string;
  ckRule?: CkRule;
}
interface PathStage {
  items?: PathItem[];
}

// LEARN_PATH is an array of stages, each holding an items[] array.
const allItems = (LEARN_PATH as PathStage[]).flatMap((stage) => stage.items || []);
const animLessons = allItems.filter((i) => i.go === 'animlesson');

describe('animated-lesson Learn Path gates', () => {
  it('there are animlesson items to check', () => {
    expect(animLessons.length).toBeGreaterThan(0);
  });

  it('no animlesson gate is satisfiable by the open-tap vs:[item.id] write', () => {
    for (const item of animLessons) {
      const targets = (item.ckRule?.anyOf || [])
        .map((c) => c.vsIncludes)
        .filter((v): v is string => typeof v === 'string');
      // The gate must not check the item's own id (that fires on the opening tap).
      expect(targets, `${item.id} gate must not key on its own id`).not.toContain(item.id);
    }
  });

  it('each animlesson gates on the al_<lessonId> completion key its screen writes', () => {
    for (const item of animLessons) {
      const targets = (item.ckRule?.anyOf || [])
        .map((c) => c.vsIncludes)
        .filter((v): v is string => typeof v === 'string');
      expect(item.lessonId, `${item.id} must declare a lessonId`).toBeTruthy();
      expect(targets, `${item.id} must gate on al_${item.lessonId}`).toContain(
        'al_' + item.lessonId,
      );
    }
  });
});
