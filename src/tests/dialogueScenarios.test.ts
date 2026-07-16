/**
 * dialogueScenarios.test.ts — structural validation for the guided-dialogue
 * content file. Every scenario the Dialogue Simulator serves must satisfy the
 * shape DialogueGuidedMode and the interaction curriculum rely on. Added with
 * the 2026-07 content expansion (10 → 22 scenarios) so malformed content can
 * never ship: a missing field or wrong answer-index here renders a broken
 * exercise, not a build error.
 */
import { describe, it, expect } from 'vitest';
import { SCENARIOS } from '../components/practice/dialogueScenarios.js';

interface Turn {
  speaker: string;
  line: string;
  en: string;
  opts: string[];
  answer: number;
  tip: string;
}
interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  difficulty: string;
  turns: Turn[];
}

const scenarios = SCENARIOS as Scenario[];

describe('dialogueScenarios — structural integrity', () => {
  it('has unique, non-empty ids', () => {
    const ids = scenarios.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id) => expect(id).toMatch(/^[a-z_]+$/));
  });

  it('every scenario has title, subtitle, and a supported difficulty', () => {
    for (const s of scenarios) {
      expect(s.title, s.id).toBeTruthy();
      expect(s.subtitle, s.id).toBeTruthy();
      // DialogueScenarioMenu's DIFF_COLORS supports exactly these levels.
      expect(['A1', 'A2', 'B1', 'B2'], `${s.id} difficulty`).toContain(s.difficulty);
    }
  });

  it('every turn is complete: speaker, line, en, tip, exactly 4 distinct opts, answer 0', () => {
    for (const s of scenarios) {
      expect(s.turns.length, `${s.id} turn count`).toBeGreaterThanOrEqual(4);
      s.turns.forEach((t, i) => {
        const at = `${s.id}[${i}]`;
        expect(t.speaker, at).toBeTruthy();
        expect(t.line, at).toBeTruthy();
        expect(t.en, at).toBeTruthy();
        expect(t.tip, at).toBeTruthy();
        expect(t.opts, at).toHaveLength(4);
        t.opts.forEach((o) => expect(o, at).toBeTruthy());
        expect(new Set(t.opts).size, `${at} duplicate opts`).toBe(4);
        // House convention: the correct option is ALWAYS index 0 in source;
        // DialogueGuidedMode shuffles at render. A non-zero answer here means
        // someone broke the convention and the shuffle math silently grades
        // the wrong option as correct.
        expect(t.answer, at).toBe(0);
      });
    }
  });

  it('level coverage never regresses below the 2026-07 expansion floor', () => {
    const byLevel = scenarios.reduce<Record<string, number>>((acc, s) => {
      acc[s.difficulty] = (acc[s.difficulty] || 0) + 1;
      return acc;
    }, {});
    expect(byLevel['A1'] ?? 0).toBeGreaterThanOrEqual(7);
    expect(byLevel['A2'] ?? 0).toBeGreaterThanOrEqual(8);
    expect(byLevel['B1'] ?? 0).toBeGreaterThanOrEqual(5);
    expect(byLevel['B2'] ?? 0).toBeGreaterThanOrEqual(2);
    expect(scenarios.length).toBeGreaterThanOrEqual(22);
  });
});
