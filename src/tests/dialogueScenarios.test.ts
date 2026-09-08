/**
 * dialogueScenarios.test.ts — structural validation for the guided-dialogue
 * content file. Every scenario the Dialogue Simulator serves must satisfy the
 * shape DialogueGuidedMode and the interaction curriculum rely on. Added with
 * the 2026-07 content expansions (10 → 26 scenarios, A1–C2) so malformed content can
 * never ship: a missing field or wrong answer-index here renders a broken
 * exercise, not a build error.
 */
import { readFileSync } from 'node:fs';
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
    // A1/A2 raised 7/8 → 12 on 2026-09-08. The 2026-09-05 expansion took B1+
    // to 12 each and left the beginner levels where they were, so the two
    // levels with the most learners had ~60% of the conversation practice of
    // every level above them — the exact imbalance this block records being
    // fixed in the other direction three weeks earlier.
    expect(byLevel['A1'] ?? 0).toBeGreaterThanOrEqual(12);
    expect(byLevel['A2'] ?? 0).toBeGreaterThanOrEqual(12);
    // Raised 2 → 6 by the 2026-08-25 expansion. B2/C1/C2 sat exactly ON the old
    // floor while A1/A2 had 7/8, so an upper-level learner exhausted every
    // authored conversation in two sessions and then repeated. Ratcheted here
    // so the gain cannot quietly regress — same rule as the coverage gate.
    // Raised again to 12 at B1+ on 2026-09-05 (content expansion item 5): the
    // CEFR descriptors from B1 up are about REGISTER, and every upper-level
    // scenario was V-form with a stranger or official. The new scenarios come
    // in pairs — the same situation once formally and once with a friend or
    // relative — so a learner meets the same act (invite, refuse, apologise,
    // negotiate, mediate) in both registers.
    expect(byLevel['B1'] ?? 0).toBeGreaterThanOrEqual(12);
    expect(byLevel['B2'] ?? 0).toBeGreaterThanOrEqual(12);
    expect(byLevel['C1'] ?? 0).toBeGreaterThanOrEqual(12);
    expect(byLevel['C2'] ?? 0).toBeGreaterThanOrEqual(12);
    expect(scenarios.length).toBeGreaterThanOrEqual(72);
  });

  it('EVERY level carries BOTH registers: informal (ti) scenarios and formal (Vi) ones', () => {
    // Register is detected from the learner's CORRECT lines (opts[0]) — the
    // model answers — not from the NPC, whose register is the prompt, not the
    // lesson. A level whose every model answer is V-form teaches one register.
    //
    // Two traps this went through on its first run, both worth keeping:
    //  - JS `\b` is ASCII-only, so `možeš\b` and `gospođo` never matched (the
    //    Croatian lint documents the same). Unicode lookarounds instead.
    //  - `te` is also the demonstrative ("te dvije točke"), so it flagged
    //    formal C2 scenarios as informal; `Vas dvoje` in an informal family
    //    scenario is plural, not polite. So the ti-marker is the pronoun
    //    itself (ti/tebi/tebe/tvoj) or a 2nd-person-singular present in -š
    //    (možeš, ljutiš, misliš — three or more letters before the š, which
    //    excludes naš/vaš/još), and a scenario is informal when MORE of its
    //    correct lines carry that than carry a Vi-marker; formal when it has
    //    a Vi-marker and no ti-marker at all.
    //
    // Extended from B1+ to ALL SIX levels on 2026-09-08. Measured first: across
    // all 15 A1/A2 scenarios and their 72 turns, ZERO correct lines carried a
    // ti-marker — every model answer a beginner had ever been shown addressed a
    // waiter, a clerk or an official. The nine new beginner scenarios are not
    // register PAIRS (that is the B1+ method, and A1/A2 cannot yet vary one act
    // two ways); the register simply follows the person, and telefonski_poziv
    // switches mid-call from the friend's mother to the friend. That mixed one
    // reads as informal here only because two of its five correct lines are to
    // Ivan and one to his mother — which is exactly what it teaches.
    const word = (alts: string) => new RegExp(`(?<!\\p{L})(?:${alts})(?!\\p{L})`, 'iu');
    const TI = word('ti|tebi|tebe|tvoj\\p{L}*|\\p{L}{3,}š');
    const VI = word(
      'vam|vas|vaš\\p{L}*|možete|dođite|izvolite|molim vas|hvala vam|poštovan\\p{L}*|gospođ\\p{L}*|gospodin\\p{L}*|profesor\\p{L}*',
    );
    const lines = (s: Scenario, re: RegExp) => s.turns.filter((t) => re.test(t.opts[0]!)).length;
    for (const level of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      const atLevel = scenarios.filter((s) => s.difficulty === level);
      const informal = atLevel
        .filter((s) => lines(s, TI) > 0 && lines(s, TI) > lines(s, VI))
        .map((s) => s.id);
      const formal = atLevel.filter((s) => lines(s, VI) > 0 && lines(s, TI) === 0).map((s) => s.id);
      expect(informal.length, `${level} informal: ${informal.join(', ')}`).toBeGreaterThanOrEqual(
        3,
      );
      expect(formal.length, `${level} formal: ${formal.join(', ')}`).toBeGreaterThanOrEqual(3);
    }
  });
});

describe('dialogueScenarios — the menu can split every title', () => {
  // DialogueScenarioMenu renders the leading emoji as the card icon and the
  // rest as the heading. It used `title.slice(2)` for the heading — 2 UTF-16
  // CODE UNITS, which is exactly one emoji only for the simple ones. A ZWJ
  // sequence is far longer, so the shipped B1 scenario '👨‍👩‍👧 Upoznavanje
  // roditelja' drew the family emoji whole in the icon slot and again,
  // decapitated, at the front of its heading. Found while adding a scenario
  // with the same emoji shape; verified by running both derivations over the
  // real titles rather than by reading the code.
  //
  // A ZWJ sequence contains no space, so splitting on the space is correct for
  // every emoji. Pinned by source because a component test that supplies its
  // own title cannot see which derivation the app is wired to.
  const MENU_SRC = readFileSync('src/components/practice/DialogueScenarioMenu.tsx', 'utf8');

  it('every title is an emoji, a space, then the heading', () => {
    for (const s of scenarios) {
      const [icon, ...rest] = s.title.split(' ');
      // The icon must be emoji and NOTHING else. A first draft only asked that
      // it CONTAIN an emoji, which a title written without the space satisfies
      // ('👵Kod bake' → icon '👵Kod', heading 'bake') — it survived the mutation
      // and was therefore guarding nothing.
      expect(/\p{Extended_Pictographic}/u.test(icon!), `${s.id} icon: ${icon}`).toBe(true);
      expect(/[\p{L}\p{N}]/u.test(icon!), `${s.id} icon has text in it: ${icon}`).toBe(false);
      expect(rest.join(' '), `${s.id} heading`).toBeTruthy();
      // The heading must not carry a fragment of the icon.
      expect(/\p{Extended_Pictographic}|‍/u.test(rest.join(' ')), `${s.id} heading`).toBe(false);
    }
  });

  it('the menu splits the title on the space, never by code units', () => {
    expect(MENU_SRC).toContain("s.title.split(' ').slice(1).join(' ')");
    expect(MENU_SRC).not.toMatch(/title\.slice\(/);
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
