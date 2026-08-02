/**
 * negation.contract.test.tsx — Pattern Y
 *
 * NegationScreen's award auto-fires from handleAnswer when the last question is
 * answered. Its buttons use inline styles (no .ob class), so the generic helper
 * cannot drive the MC loop; the contract is verified at the source level.
 *
 * WHY THIS FILE WAS REWRITTEN
 * ---------------------------
 * It used to assert the literal completion expression:
 *
 *     expect(source).toMatch(/gc:\s*\(prev\.gc\s*\|\|\s*0\)\s*\+\s*1/);
 *
 * comprehensionGateBypass.contract.test.ts asserts the exact opposite for the
 * screens it covers:
 *
 *     expect(source).not.toMatch(/gc:\s*\(prev\.gc/);
 *
 * Both passed only because their file lists happen to be disjoint. They encode
 * the same policy — the registry's `gated` rule, credit only at >= 75% — and
 * disagree about what satisfies it, so this file would have failed the moment
 * NegationScreen was migrated to `completeExercise`. A test that breaks when the
 * code is corrected is worse than no test: it argues for the bug.
 *
 * The assertions below are therefore written to hold under BOTH shapes — the
 * current hand-rolled credit and the post-migration `completeExercise` call —
 * because what matters is that completion is credited once, under the screen's
 * own key, with the quest marked. How that is spelled is not the contract.
 *
 * KNOWN GAP, DELIBERATELY NOT ASSERTED HERE
 * -----------------------------------------
 * `negation` is registered `gated` (see the registry assertion below), but the
 * screen credits on `answeredCount + 1 >= shuffledQuiz.length` — every question
 * ANSWERED, not 75% correct. It computes `correctCount` and never reads it in
 * the completion branch, so answering everything wrong still earns gc + XP +
 * quest. That is one instance of the wider registry migration (40 of 47 gated
 * rows currently route through `completeExercise`), not something this file
 * should pin either way — which is precisely the mistake being corrected.
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { describe, it, expect } from 'vitest';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';

const source = readFileSync(
  join(__dirname, '../components/practice/exercises/NegationScreen.tsx'),
  'utf8',
);

/** True once the screen has been migrated to the single completion authority. */
const usesAuthority = /completeExercise\(\{/.test(source) && /key:\s*['"]negation['"]/.test(source);

describe('NegationScreen — contract clauses (Pattern Y)', () => {
  it('is registered in the completion registry as a gated exercise', () => {
    // Stable across the migration, and the thing that makes the gap above
    // visible rather than merely absent.
    expect(EXERCISE_COMPLETION['negation']?.policy.kind).toBe('gated');
  });

  it('marks the grammar quest on completion', () => {
    // Post-migration the quest comes from the registry's questKind via
    // completeExercise, so accept either spelling.
    expect(usesAuthority || /markQuest\(['"]grammar['"]\)/.test(source)).toBe(true);
  });

  it('credits gc and records the "negation" vs key exactly once', () => {
    const legacyCredit =
      /gc:\s*\(prev\.gc\s*\|\|\s*0\)\s*\+\s*1/.test(source) &&
      /vs:\s*\[\.\.\.\(prev\.vs\s*\|\|\s*\[\]\),\s*['"]negation['"]\]/.test(source) &&
      /writeDelta\(\s*\{\s*gc:\s*1,\s*vs:\s*\[\s*['"]negation['"]\s*\]/.test(source);
    expect(usesAuthority || legacyCredit).toBe(true);
  });

  it('guards against a duplicate award on replay', () => {
    // completeExercise owns the once-only guard after migration; before it, the
    // screen checks vs itself.
    expect(usesAuthority || /vs\?\.includes\(['"]negation['"]\)/.test(source)).toBe(true);
  });

  it('signals daily-session completion even on a zero-correct run', () => {
    // Independent of the gate: a finished activity must never strand the daily
    // session, which is why this is signalled explicitly rather than inferred
    // from award().
    expect(source).toMatch(/signalSessionCompleteIfActive\(['"]negation['"]\)/);
  });
});
