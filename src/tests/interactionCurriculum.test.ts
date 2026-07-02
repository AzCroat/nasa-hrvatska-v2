// src/tests/interactionCurriculum.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import {
  INTERACTION_CURRICULUM,
  getNextInteractionUnit,
  getInteractionProgress,
  getInteractionDone,
  markInteractionUnitDone,
  findInteractionUnit,
  isInteractionPathComplete,
} from '../lib/interactionCurriculum';
import { SCENARIOS } from '../components/practice/dialogueScenarios.js';

const VALID_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

describe('interactionCurriculum data integrity', () => {
  it('is a pointer layer over the real guided scenarios (no authored content)', () => {
    expect(INTERACTION_CURRICULUM.length).toBe(SCENARIOS.length);
    const scenarioIds = new Set(SCENARIOS.map((s: { id: string }) => s.id));
    for (const u of INTERACTION_CURRICULUM) {
      expect(scenarioIds.has(u.id), u.id).toBe(true);
      expect(VALID_LEVELS, u.id).toContain(u.level);
      expect(u.title.length).toBeGreaterThan(0);
      expect(u.subtitle.length).toBeGreaterThan(0);
    }
  });

  it('unit ids are unique', () => {
    const ids = INTERACTION_CURRICULUM.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('interactionCurriculum progression', () => {
  beforeEach(() => localStorage.clear());

  it('recommends a level-appropriate unit first when nothing is done', () => {
    // A B1 learner should be recommended a B1 scenario (at/closest to level)
    // before the A1 café dialogue — reusing the Content-Rec #4 sort.
    const next = getNextInteractionUnit('B1');
    expect(next).not.toBeNull();
    expect(next!.level).toBe('B1');
  });

  it('recommends the first A1 scenario for an A1 learner', () => {
    const next = getNextInteractionUnit('A1');
    expect(next).not.toBeNull();
    expect(next!.level).toBe('A1');
  });

  it('advances past a unit once it is marked done', () => {
    const first = getNextInteractionUnit('A2')!;
    markInteractionUnitDone(first.id);
    const second = getNextInteractionUnit('A2')!;
    expect(second.id).not.toBe(first.id);
  });

  it('returns null when the whole guided path is complete', () => {
    for (const u of INTERACTION_CURRICULUM) markInteractionUnitDone(u.id);
    expect(getNextInteractionUnit('B1')).toBeNull();
    expect(isInteractionPathComplete()).toBe(true);
  });

  it('getInteractionProgress reflects completed count across the whole path', () => {
    const total = INTERACTION_CURRICULUM.length;
    expect(getInteractionProgress()).toEqual({ done: 0, total });
    markInteractionUnitDone(INTERACTION_CURRICULUM[0]!.id);
    expect(getInteractionProgress()).toEqual({ done: 1, total });
    expect(isInteractionPathComplete()).toBe(false);
  });

  it('markInteractionUnitDone is idempotent and ignores empty ids', () => {
    const first = getNextInteractionUnit('A1')!;
    markInteractionUnitDone(first.id);
    markInteractionUnitDone(first.id);
    markInteractionUnitDone(null);
    markInteractionUnitDone(undefined);
    expect(getInteractionDone().filter((id) => id === first.id)).toHaveLength(1);
  });

  it('an unknown / empty level still yields a recommendation (falls back to A1 sort)', () => {
    expect(getNextInteractionUnit('')).not.toBeNull();
    expect(getNextInteractionUnit('Z9')).not.toBeNull();
  });
});

describe('findInteractionUnit', () => {
  it('matches a unit by scenario id', () => {
    const u = INTERACTION_CURRICULUM[0]!;
    expect(findInteractionUnit(u.id)!.id).toBe(u.id);
  });

  it('returns undefined for a scenario that is not on the path', () => {
    expect(findInteractionUnit('not_a_real_scenario')).toBeUndefined();
  });
});

describe('interactionCurriculum resilience', () => {
  beforeEach(() => localStorage.clear());

  it('getInteractionDone never throws on corrupt storage', () => {
    localStorage.setItem('nh_interaction_track_done', '{not json');
    expect(getInteractionDone()).toEqual([]);
  });

  it('getInteractionDone ignores non-string entries', () => {
    localStorage.setItem(
      'nh_interaction_track_done',
      JSON.stringify([INTERACTION_CURRICULUM[0]!.id, 5, null]),
    );
    expect(getInteractionDone()).toEqual([INTERACTION_CURRICULUM[0]!.id]);
  });
});
