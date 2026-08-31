/**
 * croatianLintTargets.test.ts — the lint's coverage list and its one carve-out
 * (2026-08-31).
 *
 * `scripts/lintCroatianText.mjs` guards authored Croatian, and its recorded
 * failure mode is not a wrong rule but a MISSING FILE: exercises.js sat outside
 * TARGETS with 81 levelled exercises and 356 option arrays, never once scanned,
 * and lessons.js sat INSIDE TARGETS while its tables went unmatched. Both were
 * files everybody believed were linted.
 *
 * The 2026-08-31 expansion brought in the hand-written drill components — the
 * 100+ drills that predate the ModeDrill engine and are data wearing a .tsx
 * extension (q / answer / opts / tip, the same shape as src/data/drills/* which
 * has been linted since 2026-08-29). Coverage went 157 files to 258.
 *
 * Two things need guarding, and neither is the rules themselves:
 *
 *   1. THE COHORT STAYS COMPLETE. A new hand-written drill added next month
 *      must not quietly land outside TARGETS. Derived, not listed — the same
 *      reason GRAMMAR_STRUCTURE_CATEGORIES is derived from SKILL_GROUP.
 *   2. THE CARVE-OUT STAYS HONEST. CONTRASTIVE_FILES suspends the Serbism half
 *      for a drill whose subject IS the standard/non-standard contrast. An
 *      exemption nobody re-checks is how couplingClearingPath came to assert a
 *      dead end that no longer existed.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { globSync } from 'node:fs';

const LINT_SRC = readFileSync('scripts/lintCroatianText.mjs', 'utf8');

/** Every quoted path in the TARGETS array literal. */
function lintTargets(): string[] {
  const block = LINT_SRC.match(/const TARGETS = \[([\s\S]*?)\n\];/);
  if (!block) throw new Error('could not find the TARGETS array in lintCroatianText.mjs');
  return [...block[1]!.matchAll(/'([^']+)'/g)].map((m) => m[1]!);
}

function contrastiveFiles(): string[] {
  const block = LINT_SRC.match(/const CONTRASTIVE_FILES = new Set\(\[([\s\S]*?)\]\);/);
  if (!block) throw new Error('could not find CONTRASTIVE_FILES in lintCroatianText.mjs');
  return [...block[1]!.matchAll(/'([^']+)'/g)].map((m) => m[1]!);
}

describe('the lint actually covers what it claims to', () => {
  const targets = new Set(lintTargets());

  it('has a non-trivial target list', () => {
    // A parse that silently returned [] would make every assertion below vacuous.
    expect(targets.size).toBeGreaterThan(150);
  });

  it('every target still exists on disk', () => {
    // A renamed or deleted file leaves a TARGETS entry that scans nothing. The
    // lint itself skips unreadable targets rather than failing, which is right
    // for a content lint and wrong for the list's own integrity.
    const missing = [...targets].filter((t) => !existsSync(t));
    expect(missing, `TARGETS names files that no longer exist: ${missing.join(', ')}`).toEqual([]);
  });

  it('every hand-written drill component is covered', () => {
    // DERIVED, so the cohort cannot rot. The pre-engine drills are the largest
    // block of authored Croatian outside src/data, and they were invisible to
    // the lint until 2026-08-31. A new one must not reopen that hole.
    const drills = globSync('src/components/practice/*Drill.tsx');
    expect(drills.length, 'the drill glob matched nothing — check the path').toBeGreaterThan(90);
    const uncovered = drills.filter((f) => !targets.has(f));
    expect(
      uncovered,
      `these hand-written drills carry authored Croatian and are NOT linted: ` +
        `${uncovered.join(', ')}. Add them to TARGETS in scripts/lintCroatianText.mjs.`,
    ).toEqual([]);
  });
});

describe('the contrastive carve-out stays honest', () => {
  const files = contrastiveFiles();

  it('is exactly the one file it is documented as', () => {
    // A count, so the list cannot absorb new exemptions one at a time. Raising
    // this is a decision about what a learner is shown, and should read like one
    // in the diff.
    expect(files.length).toBe(1);
  });

  it.each(files)('%s still exists', (f) => {
    expect(existsSync(f), `${f} is exempted but is not in the repo any more`).toBe(true);
  });

  it.each(files)('%s is still LOAD-BEARING — it would be flagged without the carve-out', (f) => {
    // The staleness half, and the direction that actually rots: if the file were
    // rewritten to stop naming non-standard forms, the exemption would sit there
    // suspending a check over content that no longer needs it — silently
    // covering the next real Serbism in that file.
    //
    // Deliberately checks a couple of the forms the drill exists to contrast
    // rather than re-running the whole rule set: this asserts the exemption has
    // a subject, not that the rules work (croatianGuard.test.js owns that).
    const src = readFileSync(f, 'utf8');
    const contrasted = ['hiljada', 'hljeb', 'voz', 'pasoš'].filter((w) => src.includes(w));
    expect(
      contrasted.length,
      `${f} is in CONTRASTIVE_FILES but no longer contains any non-standard form for the ` +
        `lint to have flagged. The carve-out now guards nothing while still suspending the ` +
        `Serbism check over the whole file — delete the entry.`,
    ).toBeGreaterThan(0);
  });

  it('suspends Serbisms only — encoding is never carved out', () => {
    // Mutation-verified separately (a Cyrillic homoglyph injected into the
    // exempted file still fails the build). Pinned in source here so a future
    // edit cannot widen the carve-out to cover findBadInString by accident.
    expect(LINT_SRC).toMatch(/serbismsOff\s*\?\s*null\s*:\s*findSerbisms/);
    expect(LINT_SRC).not.toMatch(/serbismsOff\s*\?\s*null\s*:\s*findBadInString/);
  });
});
