/**
 * verificationNextRung.test.ts — the gate offers the next rung, not the cliff.
 *
 * Field report, 2026-09-09: "It is asking me to verify C1 yet says A1 in upper
 * right corner on Dom (Home) page. What is going on? Didn't we address this?"
 *
 * Both numbers were produced by this file's own logic and both were, in their
 * own terms, correct. `getDisplayLevel` (2026-09-08) made the badge show the
 * VERIFIED level — A1, because no check has ever been passed. `getVerificationGate`
 * sorted the provisional stack DESCENDING and offered `options[0]`, the top of
 * it — C1, because the grandfather migration writes a provisional pass for
 * every level up to the learner's XP-derived level. Two numbers, one screen,
 * four levels apart.
 *
 * Offering C1 to a learner verified at A1 is not a step, it is a cliff. Worse,
 * it is a trap: a failed verification runs `rollbackProvisionalOnFail`, so the
 * app would hand them an exam they cannot pass and then demote them for
 * failing it.
 *
 * THE FIX IS A SPLIT, and the half that does NOT move is the important one.
 * `target` still gates CONTENT via `isBlockedByVerificationGate`, so a
 * grandfathered learner keeps every door they had. Pointing the content gate at
 * the new `nextCheck` would block everything from A2 up for a learner who holds
 * provisional C1 — the access regression CLAUDE.md names as the dangerous
 * direction of the 2026-09-08 change. A claim, a door, and a next step are
 * three different questions.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import {
  getVerificationGate,
  getDisplayLevel,
  getContentUnlockLevel,
  isBlockedByVerificationGate,
  getCertifiedLevel,
} from '../lib/cefrCertification';

const KEY = 'nh_cefr_certifications';

/** The reported learner: nothing ever passed, grandfathered up to C1. */
function seedGrandfathered(top: string) {
  const order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const passes: Record<string, unknown> = {};
  for (const l of order.slice(0, order.indexOf(top) + 1)) {
    passes[l] = { level: l, score: 0.8, passedAt: Date.now() - 86400000, provisional: true };
  }
  // `v` is REQUIRED: getCertificationState discards a blob with no version
  // outright, so a seed without it silently reads as a brand-new learner.
  localStorage.setItem(KEY, JSON.stringify({ v: 2, passes, checkpoints: { demotions: [] } }));
}

beforeEach(() => localStorage.clear());

describe('the gate offers the rung above what was demonstrated', () => {
  it('an A1-verified learner grandfathered to C1 is asked for A2, not C1', () => {
    seedGrandfathered('C1');
    const gate = getVerificationGate();
    expect(gate.required).toBe(true);
    expect(gate.verified, 'nothing was ever really passed').toBe('A1');
    // THE REPORTED BUG, in one assertion.
    expect(gate.nextCheck, 'the gate is offering the top of the stack again').toBe('A2');
    expect(gate.nextCheck).not.toBe('C1');
  });

  it('the badge and the offered check are now one step apart, not four', () => {
    seedGrandfathered('C1');
    const gate = getVerificationGate();
    const shown = getDisplayLevel('C1');
    const order = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    expect(shown).toBe('A1');
    expect(
      order.indexOf(gate.nextCheck!) - order.indexOf(shown),
      `badge says ${shown} and the gate offers ${gate.nextCheck}`,
    ).toBe(1);
  });

  it('CONTENT access is untouched — target still the top of the stack', () => {
    seedGrandfathered('C1');
    const gate = getVerificationGate();
    expect(gate.target, 'the content gate moved — grandfathered access was taken away').toBe('C1');
    // The doors that were open stay open: everything below C1 is still allowed.
    expect(isBlockedByVerificationGate('B2')).toBe(false);
    expect(isBlockedByVerificationGate('C1')).toBe(true);
    expect(getCertifiedLevel(), 'certified standing must still count provisional').toBe('C1');
    // MEASURED, not taken from the prose. CLAUDE.md says the gate "caps NEW
    // content one level below the gate target"; in this state
    // getContentUnlockLevel is the identity at every level, so the cap does not
    // live here. Asserting 'B2' failed on the first run and the doc was wrong,
    // not the code. What matters for THIS change is that the values are
    // unchanged by it — `nextCheck` is additive and no unlock reads it.
    for (const l of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const) {
      expect(getContentUnlockLevel(l)).toBe(l);
    }
  });

  it('the ladder moves up as rungs are earned', () => {
    seedGrandfathered('C1');
    // Simulate a real A2 pass landing on top of the provisional stack.
    const state = JSON.parse(localStorage.getItem(KEY)!);
    state.passes.A2 = { level: 'A2', score: 0.86, passedAt: Date.now() };
    localStorage.setItem(KEY, JSON.stringify(state));
    const gate = getVerificationGate();
    expect(gate.verified).toBe('A2');
    expect(gate.nextCheck, 'the ladder did not advance after a real pass').toBe('B1');
    expect(gate.target, 'the content gate should not move on a rung').toBe('C1');
  });

  it('a single-level stack asks for that level — nextCheck equals target', () => {
    // The common non-grandfathered case, and the shape the existing quiet-period
    // fixture uses: one provisional level, so the rung IS the top.
    seedGrandfathered('A2');
    const gate = getVerificationGate();
    expect(gate.verified).toBe('A1');
    expect(gate.nextCheck).toBe('A2');
    expect(gate.target).toBe('A2');
  });

  it('no gate, no rung', () => {
    localStorage.setItem(
      KEY,
      JSON.stringify({
        v: 2,
        passes: { A1: { level: 'A1', score: 0.9, passedAt: Date.now() } },
        checkpoints: { demotions: [] },
      }),
    );
    const gate = getVerificationGate();
    expect(gate.required).toBe(false);
    expect(gate.nextCheck).toBeNull();
    expect(gate.target).toBeNull();
  });
});
