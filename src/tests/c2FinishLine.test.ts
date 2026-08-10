/**
 * c2FinishLine.test.ts — the C2 finish line (fluency initiative).
 *
 * Before this work, C2 was a dead end in four independent places:
 *   1. SPEAKING_TASKS had no C2 key → C2 checkpoints had no speaking section.
 *   2. The graded reader had no c2 bucket → the C2 reading path served C1 only.
 *   3. No C2 item bank existed → C2 checkpoints built with zero core questions.
 *   4. The placement test capped at C1 → nobody could ever place into C2.
 *
 * Each block pins one of those closures, plus the one thing that must NOT
 * change: getNextTestFor('C2') stays null so the Profile card's topped-out
 * state (no eternal "advance C2 → C2" CTA) is preserved.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { SPEAKING_TASKS, getSpeakingTasks } from '../data/speakingTasks';
import { READ } from '../data/exercises.js';
import { getReadingUnitsForLevel } from '../lib/readingCurriculum';
import { getNextTestFor, getCheckpointSetFor, C2_MASTERY_SET } from '../data/cefrEquivalencyItems';

describe('C2 speaking tasks', () => {
  it('exist, with the level-appropriate task shape', () => {
    const tasks = getSpeakingTasks('C2');
    expect(tasks.length).toBeGreaterThanOrEqual(4);
    for (const t of tasks) {
      expect(t.id.startsWith('c2-')).toBe(true);
      expect(t.prompt.length).toBeGreaterThan(20);
      expect(t.promptEn.length).toBeGreaterThan(20);
      expect(t.seconds).toBeGreaterThanOrEqual(60);
    }
  });

  it('every level A1–C2 now has tasks (no silent gaps)', () => {
    for (const lv of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const) {
      expect(SPEAKING_TASKS[lv]?.length ?? 0, lv).toBeGreaterThanOrEqual(4);
    }
  });
});

describe('C2 reader bucket', () => {
  it('has at least 5 passages with the reader contract (text, 5 vocab, 3 quiz questions)', () => {
    const c2 = (READ as Record<string, unknown[]>).c2 as Array<{
      title: string;
      text: string;
      vocab: unknown[];
      qs: Array<{ q: string; o: string[]; c: number }>;
    }>;
    expect(c2.length).toBeGreaterThanOrEqual(5);
    for (const p of c2) {
      expect(p.text.length, p.title).toBeGreaterThan(300);
      expect(p.vocab.length, p.title).toBeGreaterThanOrEqual(4);
      expect(p.qs.length, p.title).toBe(3);
      for (const q of p.qs) {
        expect(q.o.length, `${p.title}: ${q.q}`).toBe(3);
        expect(q.c, `${p.title}: ${q.q}`).toBeGreaterThanOrEqual(0);
        expect(q.c, `${p.title}: ${q.q}`).toBeLessThan(3);
      }
    }
  });

  it('the C2 reading path includes the c2 bucket after the c1 base', () => {
    const units = getReadingUnitsForLevel('C2');
    const buckets = [...new Set(units.map((u) => u.bucket))];
    expect(buckets).toEqual(['c1', 'c2']);
    const c2Units = units.filter((u) => u.bucket === 'c2');
    expect(c2Units.length).toBeGreaterThanOrEqual(5);
    expect(c2Units.every((u) => u.badge === 'C2')).toBe(true);
  });

  it('both data copies (client + serverless) carry the c2 bucket identically', () => {
    const client = readFileSync('src/data/exercises.js', 'utf8');
    const server = readFileSync('functions/api/content/_data/exercises.js', 'utf8');
    const grab = (s: string) => {
      const i = s.indexOf('c2: [');
      return s.slice(i, s.indexOf('\n};', i));
    };
    expect(client.indexOf('c2: [')).toBeGreaterThan(-1);
    expect(grab(client)).toBe(grab(server));
  });
});

describe('C2 mastery bank (checkpoints)', () => {
  it('loads with all three skills at healthy counts', () => {
    expect(C2_MASTERY_SET).not.toBeNull();
    const items = C2_MASTERY_SET!.items;
    expect(items.length).toBeGreaterThanOrEqual(40);
    const by = (s: string) => items.filter((i) => i.skill === s).length;
    expect(by('vocab')).toBeGreaterThanOrEqual(15);
    expect(by('grammar')).toBeGreaterThanOrEqual(15);
    expect(by('reading')).toBeGreaterThanOrEqual(6);
    for (const it of items.filter((i) => i.skill === 'reading')) {
      expect(typeof it.passage).toBe('string');
      expect((it.passage as string).length).toBeGreaterThan(50);
    }
  });

  it('getCheckpointSetFor serves it at C2 and matches getNextTestFor below C2', () => {
    expect(getCheckpointSetFor('C2')).toBe(C2_MASTERY_SET);
    for (const lv of ['A1', 'A2', 'B1', 'B2', 'C1'] as const) {
      expect(getCheckpointSetFor(lv)).toBe(getNextTestFor(lv));
    }
  });

  it('getNextTestFor(C2) STAYS null — the Profile topped-out card must not regress', () => {
    expect(getNextTestFor('C2')).toBeNull();
  });
});

describe('placement can reach C2', () => {
  const src = readFileSync('src/components/auth/PlacementTest.tsx', 'utf8');

  it('has a level-6 question block and C2 in the level maps', () => {
    expect((src.match(/level: 6,/g) || []).length).toBeGreaterThanOrEqual(4);
    expect(src).toContain("'C2 Majstor'");
    expect(src).toMatch(/LEVEL_TO_CEFR = \['', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'\]/);
    expect(src).toContain('lv <= 6');
  });

  it('placement pre-credit targets cover level 6', () => {
    const hook = readFileSync('src/hooks/usePlacement.ts', 'utf8');
    expect(hook).toContain('[0, 0, 5, 10, 15, 20, 25]');
  });
});
