/**
 * Phase 3 journey engine — the mastery ledger steers the daily session.
 *
 * Contracts pinned here:
 *  1. skillForCategory glue maps the session-pool taxonomy onto ledger skills.
 *  2. The fill-sort boost prioritises untested/developing skills but ONLY as a
 *     tie-break behind difficulty distance (the B2-no-tier-1 contract in
 *     useDailySession.test.ts stays authoritative and untouched).
 *  3. With an empty ledger everything degrades to pre-Phase-3 behaviour.
 *  4. weakestProductionKind picks the less-demonstrated of speaking/writing.
 *  5. buildPlanReason never fabricates a reason from an empty ledger.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  recordMasteryEvent,
  skillForCategory,
  makeSessionSkillBoost,
  weakestProductionKind,
  buildPlanReason,
  MIN_SAMPLES,
} from '../lib/masteryLedger';
import { buildSessionActivities } from '../hooks/useDailySession';

function train(level: 'A2' | 'B1' | 'B2', skill: string, score: number, times = MIN_SAMPLES + 3) {
  for (let i = 0; i < times; i++) {
    recordMasteryEvent({ level, skill: skill as never, score });
  }
}

beforeEach(() => {
  localStorage.clear();
});

describe('skillForCategory glue', () => {
  it('maps the taxonomy onto ledger skills', () => {
    expect(skillForCategory('speaking')).toBe('speaking');
    expect(skillForCategory('listening')).toBe('listening');
    expect(skillForCategory('reading')).toBe('reading');
    expect(skillForCategory('vocab-b1')).toBe('vocab');
    expect(skillForCategory('genitive')).toBe('grammar');
    expect(skillForCategory('aspect-imperfective')).toBe('grammar');
    expect(skillForCategory('grammar-lesson')).toBe('grammar');
  });

  it('Croatia-pool tags carry no skill signal', () => {
    expect(skillForCategory('culture')).toBeNull();
    expect(skillForCategory('practical')).toBeNull();
    expect(skillForCategory('general')).toBeNull();
  });
});

describe('makeSessionSkillBoost', () => {
  it('untested pulls hardest, strong adds nothing, developing pulls by gap', () => {
    train('B1', 'grammar', 0.95); // strong
    train('B1', 'vocab', 0.5); // developing
    const boost = makeSessionSkillBoost('B1');
    expect(boost('genitive')).toBe(0); // strong grammar
    expect(boost('vocab-b1')).toBeGreaterThan(0.3); // developing vocab
    expect(boost('listening')).toBe(1); // untested
    expect(boost('culture')).toBe(0); // no skill signal
  });

  it('empty ledger boosts everything equally (degrades to random tiebreak)', () => {
    const boost = makeSessionSkillBoost('B1');
    expect(boost('genitive')).toBe(1);
    expect(boost('vocab-b1')).toBe(1);
    expect(boost('listening')).toBe(1);
  });
});

describe('session composition under ledger weighting', () => {
  it('keeps the session length envelope and difficulty contract intact', () => {
    // Extreme ledger state: everything strong except listening untested.
    for (const skill of ['grammar', 'vocab', 'reading', 'speaking', 'writing']) {
      train('B2', skill, 0.95);
    }
    for (let i = 0; i < 5; i++) {
      localStorage.removeItem('nh_daily_session');
      const acts = buildSessionActivities('B2');
      expect(acts.length).toBeGreaterThanOrEqual(4);
      expect(acts.length).toBeLessThanOrEqual(8);
      // The difficulty contract from useDailySession.test.ts: no tier-1 games
      // in a B2 session. The boost is a tie-break and must never break this.
      const tier1 = ['flashcards', 'mcgame', 'match'];
      expect(acts.some((a) => tier1.includes(a.screen))).toBe(false);
    }
  });
});

describe('weakestProductionKind', () => {
  it('prefers the untested production skill', () => {
    train('B1', 'speaking', 0.9);
    expect(weakestProductionKind('B1')).toBe('write'); // writing untested
  });

  it('prefers the lower-scoring developing skill', () => {
    train('B1', 'speaking', 0.5);
    train('B1', 'writing', 0.7);
    expect(weakestProductionKind('B1')).toBe('speak');
  });

  it('returns null when both are strong (variety wins)', () => {
    train('B1', 'speaking', 0.95);
    train('B1', 'writing', 0.95);
    expect(weakestProductionKind('B1')).toBeNull();
  });

  it('with no data at all, biases toward speaking (both untested, speak >= write)', () => {
    expect(weakestProductionKind('B1')).toBe('speak');
  });
});

describe('buildPlanReason', () => {
  it('returns null on an empty ledger — never fabricate', () => {
    expect(buildPlanReason('B1')).toBeNull();
  });

  it('names the lowest developing skill first', () => {
    train('B1', 'grammar', 0.6);
    train('B1', 'vocab', 0.4);
    expect(buildPlanReason('B1')).toContain('vocabulary');
  });

  it('falls back to the first untested skill, then to the all-strong line', () => {
    train('B1', 'vocab', 0.95);
    expect(buildPlanReason('B1')).toContain('grammar'); // first untested in order
    for (const skill of ['grammar', 'reading', 'listening', 'speaking', 'writing']) {
      train('B1', skill, 0.95);
    }
    expect(buildPlanReason('B1')).toContain('strong');
  });
});
