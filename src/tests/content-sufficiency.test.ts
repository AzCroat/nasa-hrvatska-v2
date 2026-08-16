/**
 * Phase 4 (mastery directive, 2026-08-16) — CONTENT SUFFICIENCY FLOORS.
 *
 * Mastery at every CEFR level requires enough content in EVERY skill to (a)
 * practice it daily and (b) measure it in the Level Check. This suite pins
 * the per-level × per-skill coverage matrix so sufficiency can never silently
 * regress — the same discipline as the drill-breadth floors, applied to the
 * whole content system.
 *
 * The floors assert the audited 2026-08-16 state. Raising content should
 * raise a floor in the same PR; lowering one requires an owner decision.
 */
import { describe, it, expect } from 'vitest';
import type { CefrLevel } from '../lib/cefr';
import { CEFR_ORDER } from '../lib/cefr';
import { CEFR_EXERCISE_POOL } from '../lib/sessionPools';
import { skillForCategory } from '../lib/masteryLedger';
import { SPEAKING_TASKS } from '../data/speakingTasks';
import { WRITING_TASKS } from '../data/writingTasks';
import {
  EQUIVALENCY_TESTS,
  C2_MASTERY_SET,
  type EquivalencyTestSet,
} from '../data/cefrEquivalencyItems';

const LEVELS = CEFR_ORDER as readonly CefrLevel[];

function countBySkill(set: EquivalencyTestSet): Record<string, number> {
  const c: Record<string, number> = {};
  for (const it of set.items) c[it.skill] = (c[it.skill] ?? 0) + 1;
  return c;
}

describe('Level Check banks measure every certifiable skill', () => {
  const EXAM_FLOORS = { vocab: 60, grammar: 60, reading: 30, listening: 10 };

  it.each(['A1', 'A2', 'B1', 'B2', 'C1'] as const)(
    'the %s set meets the per-skill item floors',
    (levelFrom) => {
      const set = EQUIVALENCY_TESTS[levelFrom];
      expect(set, `${levelFrom} set must exist`).toBeTruthy();
      const c = countBySkill(set!);
      for (const [skill, floor] of Object.entries(EXAM_FLOORS)) {
        expect(c[skill] ?? 0, `${levelFrom} ${skill} items`).toBeGreaterThanOrEqual(floor);
      }
    },
  );

  it('the C2 mastery bank includes listening', () => {
    expect(C2_MASTERY_SET).toBeTruthy();
    const c = countBySkill(C2_MASTERY_SET!);
    expect(c.listening ?? 0).toBeGreaterThanOrEqual(6);
    expect(c.vocab ?? 0).toBeGreaterThanOrEqual(18);
    expect(c.grammar ?? 0).toBeGreaterThanOrEqual(18);
    expect(c.reading ?? 0).toBeGreaterThanOrEqual(9);
  });

  it('every listening item carries spoken text and never leaks it into the question', () => {
    const sets = [...Object.values(EQUIVALENCY_TESTS), C2_MASTERY_SET].filter(
      (s): s is EquivalencyTestSet => !!s,
    );
    for (const set of sets) {
      for (const item of set.items) {
        if (item.skill !== 'listening') continue;
        expect(item.audioText, `${set.levelFrom}: "${item.q}"`).toBeTruthy();
        // The answer must come from the EAR: the spoken text must not appear
        // verbatim inside the question stem.
        expect(item.q.includes(item.audioText!)).toBe(false);
        expect(new Set(item.o).size, `${set.levelFrom}: "${item.q}" options unique`).toBe(4);
      }
    }
  });
});

describe('production task banks', () => {
  it('speaking tasks: at least 4 per level, A1 through C2', () => {
    for (const lvl of LEVELS) {
      expect((SPEAKING_TASKS[lvl] ?? []).length, `speaking tasks at ${lvl}`).toBeGreaterThanOrEqual(
        4,
      );
    }
  });

  it('writing tasks: at least 3 per level, A2 through C2 (retakes must not repeat prompts)', () => {
    for (const lvl of ['A2', 'B1', 'B2', 'C1', 'C2'] as const) {
      expect((WRITING_TASKS[lvl] ?? []).length, `writing tasks at ${lvl}`).toBeGreaterThanOrEqual(
        3,
      );
    }
  });
});

describe('daily practice covers every skill at every level', () => {
  // An `adaptive` pool entry levels its own content to the user, so it serves
  // EVERY level at or above its tag (getGenerationCefr). The production slot
  // (speaking/writing/conversation) is guaranteed separately by
  // useDailySession.production tests — here we assert the receptive skills
  // plus grammar/vocab from the fill pool.
  const RECEPTIVE_FLOORS: Record<string, number> = {
    vocab: 1,
    grammar: 3,
    reading: 1,
    listening: 1,
  };

  it.each(LEVELS)('%s has serving practice content per skill', (level) => {
    const rank = LEVELS.indexOf(level);
    const counts: Record<string, number> = { vocab: 0, grammar: 0, reading: 0, listening: 0 };
    for (const ex of CEFR_EXERCISE_POOL) {
      const skill = skillForCategory(ex.category);
      if (!skill || !(skill in counts)) continue;
      const tagRank = LEVELS.indexOf(ex.cefr as CefrLevel);
      const serves = ex.adaptive ? tagRank <= rank : ex.cefr === level;
      if (serves) counts[skill]!++;
    }
    for (const [skill, floor] of Object.entries(RECEPTIVE_FLOORS)) {
      expect(counts[skill], `${level} ${skill} practice entries`).toBeGreaterThanOrEqual(floor);
    }
  });
});
