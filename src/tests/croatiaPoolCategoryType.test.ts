/**
 * croatiaPoolCategoryType — the Croatia pool's `category` is the real
 * `SessionCategory`, not a structural copy of it (sweep 50, 2026-09-23).
 *
 * Continuing sweeps 48 and 49's question — where does the app keep the same
 * fact twice, with only one copy having a reason to change? — pointed at TYPES
 * this time, and found one with a stated reason that had stopped being true.
 *
 * `CroatiaPoolEntry.category` was written out as
 * `SkillCategory | 'culture' | 'practical' | 'general'` with the comment
 * "Structural copy of SessionCategory (defined in useDailySession) — kept
 * inline here to avoid a hook→data→hook import cycle". That reason was correct
 * when written and false by the time anyone read it again: `SessionCategory`
 * moved out of the hook into `lib/dailySessionStore` in the 800-line split, so
 * both modules now sit in `lib/`, `dailySessionStore` imports nothing from
 * here, and madge confirms no cycle.
 *
 * A STRUCTURAL COPY OF A UNION IS THE SILENT KIND. Widen the real type and this
 * one still compiles, still accepts every old member, and rejects the new one
 * at a boundary nobody is looking at — a pool entry that the session builder
 * would happily carry simply cannot be written down. Nothing fails; the
 * category is just unavailable here.
 *
 * TypeScript erases at runtime, so the behavioural half of this guard is the
 * only half there can be: every entry's category must be a member the SHARED
 * type's own producers recognise. The source half is the ratchet.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CROATIA_POOL } from '../lib/croatiaPool';
import { ALL_CATEGORIES } from '../lib/adaptive';

const SRC = readFileSync(resolve(__dirname, '../lib/croatiaPool.ts'), 'utf8');

/** The non-SkillCategory members `SessionCategory` adds, read from its source. */
const EXTRA = (() => {
  const store = readFileSync(resolve(__dirname, '../lib/dailySessionStore.ts'), 'utf8');
  const decl = /export type SessionCategory\s*=\s*([^;]+);/.exec(store)?.[1] ?? '';
  return [...decl.matchAll(/'([^']+)'/g)].map((m) => m[1]!);
})();

describe('the pool declares the shared type', () => {
  it('imports SessionCategory and uses it bare', () => {
    expect(SRC).toMatch(/import type \{ SessionCategory \} from '\.\/dailySessionStore'/);
    expect(SRC).toMatch(/category:\s*SessionCategory;/);
  });

  it('does not restate the union inline', () => {
    expect(
      /category:\s*SkillCategory\s*\|/.test(SRC),
      'The structural copy is back. Widen SessionCategory and this one keeps ' +
        'compiling while silently refusing the new member.',
    ).toBe(false);
  });

  it('the derivation found the real union — not an empty list passing silently', () => {
    expect(EXTRA.length).toBeGreaterThanOrEqual(3);
    expect(EXTRA).toContain('culture');
  });
});

describe('every entry carries a category the shared type admits', () => {
  const allowed = new Set<string>([...ALL_CATEGORIES, ...EXTRA]);

  it('the subject is not empty', () => {
    expect(CROATIA_POOL.length).toBeGreaterThanOrEqual(20);
  });

  it.each(CROATIA_POOL.map((e) => [e.id, e.category] as const))('%s → %s', (_id, category) => {
    // Behavioural, because the type is erased at runtime: a category outside
    // the union is exactly what the inline copy could have hidden.
    expect(allowed.has(category as string)).toBe(true);
  });
});

/**
 * `ownAtLevels` is kept with NO holder, which is the correct state and not dead
 * code — but "correct" has to be checked rather than asserted, because a field
 * nothing sets and nothing can set is the other thing that looks like this.
 * `cityOfDayGraded.test.tsx` owns the decision (empty + adaptive once every
 * level is banded, else exactly the banded levels); this only pins that the
 * field still EXISTS for the next partially-banded screen, and that the prose
 * around it no longer claims a holder it does not have.
 */
describe('ownAtLevels survives as a capability, described honestly', () => {
  it('no entry sets it today', () => {
    expect(CROATIA_POOL.filter((e) => e.ownAtLevels && e.ownAtLevels.length > 0)).toHaveLength(0);
  });

  it('the field is still declared, so a partially-banded screen has it', () => {
    expect(SRC).toMatch(/ownAtLevels\?:\s*readonly string\[\];/);
  });

  it('no comment still calls cityofday NOT adaptive', () => {
    // A comment saying "NOT `adaptive`" sat four lines above `adaptive: true`.
    // It was true on 2026-09-06 and superseded on 2026-09-08, when the change
    // added its own note below instead of removing the one above.
    expect(
      /NOT `adaptive`/.test(SRC),
      'A comment contradicts the entry four lines below it. This file is where ' +
        'the nav-table lesson applies most directly: prose that was correct when ' +
        'written and was never moved with the code.',
    ).toBe(false);
  });

  it('no comment still describes the three-band corpus as current', () => {
    expect(
      /carries graded\s+\*?\s*Croatian in three bands/.test(SRC.replace(/\s+/g, ' ')),
      'The corpus has six bands (2026-09-08). A reader reasoning from this ' +
        'comment would conclude cityofday is own-tier at three levels.',
    ).toBe(false);
  });
});
