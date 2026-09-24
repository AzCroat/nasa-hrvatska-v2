// src/tests/placementLevelReaders.test.ts
//
// `nh_level` IS THE DAY-ONE PLACEMENT RESULT, NOT THE LEARNER'S LEVEL (2026-09-24).
//
// It is written in exactly two places, both inside `PlacementTest`, and never
// advances as a learner earns their way up. `getGenerationCefr` exists precisely
// for that and says so in its own docstring — "generators that read it serve
// placement-level content to learners who have since reached C1/C2" — yet four
// screens still read it raw, each with its own invented default:
//
//   SpeakingSprintScreen  x2  -> 'B1'   prompt POOL, and the level SHOWN on setup
//   VideoLessonScreen         -> 'B1'   initial level (a picker can override it)
//   VocabJournal              -> 'A2'   level attached to a saved word
//   AspectScreen              -> 'A1'   how much scaffolding the lesson shows
//
// So a learner placed at A2 who has since reached C1 drew A2 sprint prompts for
// ever, and one who skipped placement drew B1 whoever they were.
//
// THE FOUR WERE NOT EQUIVALENT AND THE FIRST WRITE-UP SAID THEY WERE. Reading
// what each actually does with the value is what separated them: the sprint
// screen gates content with no way to change it (real), AspectScreen picks an
// explanation depth (real, milder), VocabJournal attaches metadata to an API
// call (milder still, different in kind), and VideoLessonScreen's value is a
// DEFAULT the learner can override with its own picker. Report the census, not
// the grep.
//
// This guard is about CONTENT decisions. The sync and wire layers legitimately
// read the raw key — that is the value they carry — so they are listed with
// reasons and checked in both staleness directions.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve(__dirname, '..');
const EXTS = ['.ts', '.tsx', '.js', '.jsx'];

function walk(dir: string, out: string[] = []): string[] {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name !== 'tests') walk(p, out);
    } else if (ent.isFile() && EXTS.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

const stripComments = (s: string): string =>
  s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');

/**
 * Files allowed to read the raw key, each with the reason. These CARRY the
 * placement value rather than deciding content from it.
 */
const RAW_READ_ALLOWED: Record<string, string> = {
  'lib/cefrCertification.ts':
    'Declares getGenerationCefr — this is the ONE place the raw value is read and ' +
    'reconciled against the earned level. Every other reader should call it.',
  'lib/progressSnapshot.ts': 'Puts the placement value on the wire; it is the field being synced.',
  'lib/firebase.ts': 'Reads/writes the synced field, and falls back to it for the top-level level.',
  'lib/applyRemoteProgress.ts': 'Merges the remote placement value by CEFR rank.',
  'components/auth/PlacementTest.tsx': 'WRITES it — the placement result itself.',
};

describe('no screen decides content from the placement-only nh_level', () => {
  const files = walk(SRC);

  it('finds the corpus — a derivation that scans nothing must fail loudly', () => {
    expect(files.length).toBeGreaterThan(400);
    const helper = fs.readFileSync(path.join(SRC, 'lib/cefrCertification.ts'), 'utf8');
    expect(
      helper.includes("localStorage.getItem('nh_level')"),
      'getGenerationCefr no longer reads nh_level — this whole guard is about a key ' +
        'that would then have no reader at all. Re-read it before changing this.',
    ).toBe(true);
  });

  it('every raw reader is the sync/wire layer, with its reason recorded', () => {
    const offenders: string[] = [];
    for (const file of files) {
      const rel = path.relative(SRC, file).split(path.sep).join('/');
      const src = stripComments(fs.readFileSync(file, 'utf8'));
      // The quiz key is unrelated storage that merely shares a prefix.
      const reads = [...src.matchAll(/['"`]nh_level['"`]/g)].length;
      if (!reads) continue;
      if (rel in RAW_READ_ALLOWED) continue;
      offenders.push(rel);
    }
    expect(
      offenders,
      `These read the raw placement key. If the value decides what a learner SEES, ` +
        `call getGenerationCefr() instead — it takes no argument, reads the persisted ` +
        `profile itself, and returns the HIGHER of placement and earned, so it can ` +
        `never lower anyone's level. If the file genuinely carries the synced field, ` +
        `add it to RAW_READ_ALLOWED with the reason:\n  ${offenders.join('\n  ')}`,
    ).toEqual([]);
  });

  it.each(Object.keys(RAW_READ_ALLOWED))(
    '%s still reads the raw key (no stale exemption)',
    (rel) => {
      const file = path.join(SRC, rel);
      expect(fs.existsSync(file), `${rel} is allow-listed but does not exist`).toBe(true);
      const src = stripComments(fs.readFileSync(file, 'utf8'));
      expect(
        /['"`]nh_level['"`]/.test(src),
        `${rel} no longer reads nh_level, so this exemption suspends the rule over a ` +
          `file that does not need it. Delete the entry.`,
      ).toBe(true);
    },
  );

  it('the four fixed screens call the helper rather than the key', () => {
    for (const rel of [
      'components/practice/SpeakingSprintScreen.tsx',
      'components/practice/VideoLessonScreen.tsx',
      'components/profile/VocabJournal.tsx',
      'components/learn/AspectScreen.tsx',
    ]) {
      const src = stripComments(fs.readFileSync(path.join(SRC, rel), 'utf8'));
      expect(src, `${rel} should resolve its level through getGenerationCefr`).toMatch(
        /getGenerationCefr\s*\(/,
      );
    }
  });
});

describe('the property the fix relies on: the helper never lowers a level', () => {
  // Every comment written for this change asserts that swapping the raw key for
  // getGenerationCefr can only RAISE a learner's level, so no one loses access.
  // That is a real claim about the function and is checked here rather than
  // trusted — it is the whole reason the change is safe to make in four places
  // at once.
  it('returns at least the stored placement level', async () => {
    const { getGenerationCefr } = await import('../lib/cefrCertification');
    const { cefrRank } = await import('../lib/cefr');
    for (const placement of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      localStorage.clear();
      localStorage.setItem('nh_level', placement);
      const got = getGenerationCefr({ xp: 0, lc: 0, gc: 0 });
      expect(
        cefrRank(got),
        `placement ${placement} but the helper returned ${got} for a zero-XP learner — ` +
          `the no-regression property every call site of this change relies on`,
      ).toBeGreaterThanOrEqual(cefrRank(placement));
    }
    localStorage.clear();
  });
});
