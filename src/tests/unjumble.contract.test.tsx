/**
 * Unjumble — contract test (source-level), and a correction.
 *
 * This file used to open: "tiles persist after clicking, so a generic render-driver
 * cannot reliably build the CORRECT sentence to clear the 75% completion gate. We
 * therefore verify the contract at the source level." That premise was FALSE, and it
 * is what kept this screen's real behaviour untested for as long as the file existed:
 * the bank's own `correct` string gives the tile order, so a driver that reads the
 * English prompt, finds its entry and taps the tiles in that order clears the gate
 * every time. `creditSurvivesLeavingResults.test.tsx` does exactly that and drives
 * this screen end to end — which is how sweep 139's defect was found, a defect this
 * source pin was standing next to and could not see: completion was reached through
 * the onClick of "Continue →" while the results view also carried a Back button, so
 * every learner who left the other way lost the whole round.
 *
 * What remains here is the part a render test genuinely cannot state — that
 * completion goes through the single authority under the right key, with the XP the
 * results view promises. The gate and idempotency themselves are unit-tested in
 * useExerciseCompletion.test.ts.
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, it, expect } from 'vitest';

const source = readFileSync(join(__dirname, '../components/practice/Unjumble.tsx'), 'utf8');

describe('Unjumble contract', () => {
  it('routes completion through completeExercise with key "unjumble"', () => {
    expect(source).toMatch(/completeExercise\(\{/);
    expect(source).toMatch(/key:\s*['"]unjumble['"]/);
  });

  it('passes score, total and the XP the results view promises', () => {
    expect(source).toMatch(/score:\s*ujS/);
    expect(source).toMatch(/total,/);
    // The screen prints `+{xp} XP` on the results view from `ujS * 3 + 10`; the same
    // expression must be what is actually paid, or the promise is decoration.
    expect(source).toMatch(/xp:\s*ujS \* 3 \+ 10/);
    expect(source).toMatch(/const xp = ujS \* 3 \+ 10/);
  });

  it('no longer hand-rolls the vs/gc/award write (single authority)', () => {
    expect(source).not.toMatch(/markQuest\(/);
    expect(source).not.toMatch(/vs:\s*\[\.\.\.\(prev\.vs/);
  });
});
