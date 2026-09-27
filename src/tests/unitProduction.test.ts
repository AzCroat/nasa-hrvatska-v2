/**
 * unitProduction — the brief, the floors, and what "done" means.
 *
 * NOTHING IS AUTHORED FOR THIS, which is the property most worth pinning: the
 * brief comes from the unit's five lessons' own `objectives`, so a unit authored
 * next month gets a correct brief on the day it lands. A second statement of what
 * each unit teaches is the hand-maintained-list decay this codebase keeps
 * rediscovering.
 */
import { describe, it, expect } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { buildCourseUnits } from '../lib/courseUnits';
import { COURSE_UNIT_TITLES } from '../data/courseUnitTitles';
import {
  UNIT_SPEAK_FLOOR,
  UNIT_WRITE_FLOOR,
  briefPrompt,
  countWords,
  floorFor,
  meetsFloor,
  unitProductionBrief,
} from '../lib/unitProduction';
import type { CurriculumEntry } from '../lib/curriculum';

const UNITS = buildCourseUnits(CURRICULUM as unknown as CurriculumEntry[], COURSE_UNIT_TITLES);
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

describe('the floors', () => {
  it('rise with the level, in both modes', () => {
    for (const table of [UNIT_WRITE_FLOOR, UNIT_SPEAK_FLOOR]) {
      for (let i = 1; i < LEVELS.length; i++) {
        expect(table[LEVELS[i]!]!, LEVELS[i]).toBeGreaterThan(table[LEVELS[i - 1]!]!);
      }
    }
  });

  // SPOKEN IS LOWER AT EVERY LEVEL. Speech is produced under time pressure with no
  // chance to revise — `speakingCurriculum`'s own floors sit below the writing
  // curriculum's for the same reason.
  it('asks for fewer spoken words than written ones at every level', () => {
    for (const lv of LEVELS) {
      expect(UNIT_SPEAK_FLOOR[lv]!, lv).toBeLessThan(UNIT_WRITE_FLOOR[lv]!);
    }
  });

  it('falls back to A1 for an unknown level rather than to zero', () => {
    expect(floorFor('write', 'ZZ')).toBe(UNIT_WRITE_FLOOR.A1);
    expect(floorFor('speak', '')).toBe(UNIT_SPEAK_FLOOR.A1);
  });
});

describe('the brief, over the real curriculum', () => {
  it('gives every one of the 36 units a usable brief in both modes', () => {
    for (const unit of UNITS) {
      for (const kind of ['write', 'speak'] as const) {
        const b = unitProductionBrief(unit, kind);
        expect(b.objectives.length, `${unit.id}/${kind}`).toBeGreaterThan(0);
        expect(b.objectives.length, `${unit.id}/${kind}`).toBeLessThanOrEqual(6);
        expect(b.minWords, `${unit.id}/${kind}`).toBe(floorFor(kind, unit.level));
        expect(b.task, `${unit.id}/${kind}`).toContain(String(b.minWords));
        expect(b.level).toBe(unit.level);
        expect(b.unitId).toBe(unit.id);
      }
    }
  });

  it('takes objectives from the unit’s own lessons, in course order', () => {
    const unit = UNITS[0]!;
    const b = unitProductionBrief(unit, 'write');
    const first = unit.lessons[0]!.objectives!;
    expect(b.objectives[0]).toBe(first[0]!.trim());
    const all = unit.lessons.flatMap((l) => l.objectives ?? []).map((o) => o.trim());
    for (const o of b.objectives) expect(all).toContain(o);
  });

  it('deduplicates, and drops blanks', () => {
    const unit = {
      ...UNITS[0]!,
      lessons: [
        { ...UNITS[0]!.lessons[0]!, objectives: ['Say hello', '  ', 'Say hello'] },
        { ...UNITS[0]!.lessons[1]!, objectives: ['Say goodbye'] },
      ],
    };
    expect(unitProductionBrief(unit, 'write').objectives).toEqual(['Say hello', 'Say goodbye']);
  });

  // A FIFTEEN-POINT BRIEF IS A WALL NOBODY READS, and it is a worse PROMPT too —
  // the evaluator grades against what the brief asked for.
  it('caps the brief at six lines even for a unit with fifteen objectives', () => {
    const many = {
      ...UNITS[0]!,
      lessons: UNITS[0]!.lessons.map((l, i) => ({
        ...l,
        objectives: [`o${i}a`, `o${i}b`, `o${i}c`],
      })),
    };
    expect(unitProductionBrief(many, 'write').objectives).toHaveLength(6);
  });

  it('survives a unit whose lessons carry no objectives', () => {
    const bare = {
      ...UNITS[0]!,
      lessons: UNITS[0]!.lessons.map((l) => ({ ...l, objectives: [] })),
    };
    const b = unitProductionBrief(bare, 'speak');
    expect(b.objectives).toEqual([]);
    expect(briefPrompt(b)).toContain(b.task);
  });

  it('builds a prompt that states the task and every objective', () => {
    const b = unitProductionBrief(UNITS[3]!, 'write');
    const prompt = briefPrompt(b);
    expect(prompt).toContain(b.task);
    for (const o of b.objectives) expect(prompt).toContain(o);
  });

  it('asks for speech in the spoken brief and writing in the written one', () => {
    expect(unitProductionBrief(UNITS[0]!, 'write').task).toMatch(/^Write/);
    expect(unitProductionBrief(UNITS[0]!, 'speak').task).toMatch(/^Speak/);
  });
});

describe('the floor check', () => {
  it('counts words, not characters', () => {
    expect(countWords('  jedan   dva tri ')).toBe(3);
    expect(countWords('')).toBe(0);
    expect(countWords('   ')).toBe(0);
  });

  it('passes at the floor and fails one below it', () => {
    const text = Array.from({ length: 25 }, (_, i) => `r${i}`).join(' ');
    expect(meetsFloor(text, 25)).toBe(true);
    expect(meetsFloor(text, 26)).toBe(false);
  });
});
