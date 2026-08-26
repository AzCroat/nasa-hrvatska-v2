/**
 * dialogueScenarios.test.ts — structural validation for the guided-dialogue
 * content file. Every scenario the Dialogue Simulator serves must satisfy the
 * shape DialogueGuidedMode and the interaction curriculum rely on. Added with
 * the 2026-07 content expansions (10 → 26 scenarios, A1–C2) so malformed content can
 * never ship: a missing field or wrong answer-index here renders a broken
 * exercise, not a build error.
 */
import { describe, it, expect, vi } from 'vitest';
import { SCENARIOS } from '../components/practice/dialogueScenarios.js';

// Importing the Pages Function only to read its exported scenario allowlist;
// stub the auth helper so the module import has no side effects.
vi.mock('../../functions/api/_requireAuth.js', () => ({ requireAuthedAI: vi.fn() }));
import { VALID_SCENARIO_IDS } from '../../functions/api/dialogue.js';

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
      expect(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], `${s.id} difficulty`).toContain(s.difficulty);
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
    // Raised 2 → 6 by the 2026-08-25 expansion. B2/C1/C2 sat exactly ON the old
    // floor while A1/A2 had 7/8, so an upper-level learner exhausted every
    // authored conversation in two sessions and then repeated. Ratcheted here
    // so the gain cannot quietly regress — same rule as the coverage gate.
    expect(byLevel['B2'] ?? 0).toBeGreaterThanOrEqual(6);
    expect(byLevel['C1'] ?? 0).toBeGreaterThanOrEqual(6);
    expect(byLevel['C2'] ?? 0).toBeGreaterThanOrEqual(6);
    expect(scenarios.length).toBeGreaterThanOrEqual(38);
  });
});

describe('dialogueScenarios — client/server parity', () => {
  // Every scenario the menu offers must have a server-side AI context in
  // dialogue.js, otherwise its "✨ AI Conversation" mode hard-fails with
  // HTTP 400 'Invalid scenario'. Regression guard for the 16/26 breakage.
  it('every client scenario id is a valid server scenario id', () => {
    const serverIds = new Set(VALID_SCENARIO_IDS);
    const missing = scenarios.map((s) => s.id).filter((id) => !serverIds.has(id));
    expect(missing, `client scenarios with no server AI context: ${missing.join(', ')}`).toEqual(
      [],
    );
  });

  it('has no orphaned server scenario id (not offered to the user)', () => {
    const clientIds = new Set(scenarios.map((s) => s.id));
    const orphaned = VALID_SCENARIO_IDS.filter((id) => !clientIds.has(id));
    expect(orphaned, `server scenarios not in the client menu: ${orphaned.join(', ')}`).toEqual([]);
  });
});
