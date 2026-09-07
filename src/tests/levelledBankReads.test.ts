/**
 * levelledBankReads.test.ts — a bank that carries levels must be SERVED by them.
 *
 * The defect this ratchets against was found four separate times in four
 * places, each fix leaving the next one invisible: a practice bank carries a
 * per-item CEFR `level`, and the code that picks the round never reads it.
 * Two properties made every instance look fine from the inside — the level is
 * on the DATA, so the bank is levelled no matter what the consumer does; and
 * `shuffle(BANK).slice(0, 10)` is a perfectly ordinary line that simply does
 * not mention the field.
 *
 * So this does not list the screens. It DERIVES the levelled banks from source
 * and requires every SELECTING use of one to reach `levelledBank`. A hand-list
 * would decay exactly like the banks it describes (the lesson this repo has
 * recorded about `GRAMMAR_STRUCTURE_CATEGORIES` and about
 * `useDailySession.production.test.ts`'s own stale arrays).
 *
 * Two derivation traps, both real, both hit while writing this:
 *   - NAME COLLISION. `WritingScreen` and `SpeakingSprintScreen` each declare
 *     `PROMPTS`, and the second is an OBJECT KEYED BY LEVEL — already correct,
 *     and flagged as a violation by a name-only match. A bank is therefore
 *     (file, name), and a file declaring its own `const NAME` is not in another
 *     bank's scope.
 *   - BARREL RE-EXPORT. `GradTab` imports `LISTEN` from `../../data`, not from
 *     `data/exercises.js`. Scoping importers by module PATH silently dropped
 *     that file — which is where the third, unfixed LISTEN launch site lived,
 *     so the guard would have passed while missing the very thing it was
 *     written for. Importers are matched by NAME.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { levelledBank, LEVELLED_BANK_MIN } from '../lib/levelledBank';

const ROOT = join(__dirname, '..', '..');

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', 'tests', '__tests__'].includes(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(js|ts|tsx|jsx)$/.test(e.name) && !/\.test\.|\.spec\./.test(e.name)) out.push(p);
  }
  return out;
}

/** Comments are stripped: a doc comment describing the old line is not the line. */
const strip = (s: string) =>
  s
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split('\n')
    .filter((l) => !/^\s*(\/\/|\*)/.test(l))
    .join('\n');

const FILES: [string, string][] = walk(join(ROOT, 'src')).map((f) => [
  relative(ROOT, f),
  strip(readFileSync(f, 'utf8')),
]);

const LEVEL_ITEM = /level: *'(?:A1|A2|B1|B2|C1|C2)'/g;
/** A bank is a module-level array literal with this many levelled items. */
const MIN_LEVELLED = 8;

interface Bank {
  bank: string;
  file: string;
  items: number;
}

function deriveBanks(): Bank[] {
  const banks: Bank[] = [];
  for (const [rel, src] of FILES) {
    const re = /(?:export )?const ([A-Z][A-Z_0-9]{2,}) *(?::[^=]+)?= *\[/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(src))) {
      const nx = src.slice(m.index + 10).search(/\n(?:export )?const [A-Z]/);
      const body = src.slice(m.index, nx === -1 ? src.length : m.index + 10 + nx);
      const items = (body.match(LEVEL_ITEM) || []).length;
      if (items >= MIN_LEVELLED) banks.push({ bank: m[1]!, file: rel, items });
    }
  }
  return banks;
}

/** Picking a subset: a shuffle, a slice, or a random index. */
const SELECTS = /\bsh\(|\bshLocal\(|\.slice\(|\brnd\(\)|Math\.random\(\)/;
/** Reaching the shared rule, directly or through a screen's named wrapper. */
const LEVELLED = /levelledBank|_levelled|unitsForLevel|ForLevel\(/;

interface Use {
  bank: string;
  file: string;
  line: number;
  levelled: boolean;
}

function deriveSelectingUses(banks: Bank[]): Use[] {
  const uses: Use[] = [];
  for (const b of banks) {
    // Scope: the declaring file, plus every file that mentions the name and
    // does NOT bind its own. Requiring an `import` of the name was too tight in
    // two ways that each hid a real site — `GradTab` imports LISTEN through the
    // `data` barrel, and `useScreenLauncher` never imports it at all, taking it
    // from `_getData()` at runtime.
    const scope = FILES.filter(
      ([rel, src]) => rel === b.file || !new RegExp(`const +${b.bank} *(?::[^=]+)?=`).test(src),
    );
    for (const [rel, src] of scope) {
      const re = new RegExp(`\\b${b.bank}\\b`, 'g');
      let m: RegExpExecArray | null;
      while ((m = re.exec(src))) {
        const before = src.slice(Math.max(0, m.index - 40), m.index);
        if (/const +$|const +[A-Z_0-9]* *(?::[^=]*)?= *$/.test(before)) continue; // the declaration
        const w = src.slice(Math.max(0, m.index - 180), m.index + 180);
        if (!SELECTS.test(w)) continue;
        uses.push({
          bank: b.bank,
          file: rel,
          line: src.slice(0, m.index).split('\n').length,
          levelled: LEVELLED.test(w),
        });
      }
    }
  }
  return uses;
}

/**
 * Selecting uses that are deliberately NOT levelled, each with its reason.
 * Checked in BOTH staleness directions: the use must still exist, and it must
 * still be unlevelled — an exemption over a use that has since been fixed is
 * the `couplingClearingPath` shape, guarding nothing while asserting a defect.
 */
const NOT_A_ROUND = new Map<string, string>([
  [
    'MEDIA@src/components/croatia/MediaTab.tsx',
    'a browse catalogue of real Croatian radio, TV and podcasts with its own filter chips — the learner chooses what to open, the flagged use is the recently-opened "Continue" row looked up by name, and an item\'s level is advisory metadata on a card rather than a question\'s difficulty',
  ],
]);

const banks = deriveBanks();
const uses = deriveSelectingUses(banks);

describe('the levelled banks are derived, not listed', () => {
  it('finds the banks (a derivation that finds nothing must fail loudly)', () => {
    expect(banks.length).toBeGreaterThanOrEqual(12);
    const names = banks.map((b) => `${b.bank}@${b.file}`);
    // The five the 2026-09-07 sweep fixed, plus the two fixed before it.
    for (const n of [
      'LISTEN@src/data/exercises.js',
      'DICTATION_DATA@src/components/practice/DictationScreen.tsx',
      'TRANSFORMS@src/components/practice/ProductionDrillScreen.tsx',
      'TRANSLATE_PROD@src/components/practice/ProductionDrillScreen.tsx',
      'TRANSLATE_DRILLS@src/data/exercises.js',
      'PROMPTS@src/components/practice/WritingScreen.tsx',
    ])
      expect(names).toContain(n);
  });

  it('scopes a bank to its own file — PROMPTS is declared twice, differently', () => {
    // SpeakingSprintScreen's PROMPTS is an object keyed BY level and is already
    // correct; a name-only match reported it as three violations.
    const sprint = uses.filter((u) => u.file.includes('SpeakingSprintScreen'));
    expect(sprint).toHaveLength(0);
  });

  it('a comment cannot launder an unlevelled line', () => {
    // The dangerous direction: prose NEAR a raw shuffle mentioning the helper
    // would read as compliance. Stripping is what makes the window mean the
    // code. (Every current call site passes either way, so this drives the
    // mechanism directly rather than trusting the corpus to exercise it.)
    const src = ['// levelledBank handles this elsewhere', 'const r = sh(BANK).slice(0, 10);'].join(
      '\n',
    );
    expect(LEVELLED.test(src)).toBe(true);
    expect(LEVELLED.test(strip(src))).toBe(false);
  });

  it('reaches importers through the data barrel, not by module path', () => {
    // GradTab imports LISTEN from '../../data'. Scoping by path dropped this
    // file, and this file held the third, then-unfixed LISTEN launch site.
    const grad = uses.filter((u) => u.bank === 'LISTEN' && u.file.includes('GradTab'));
    expect(grad.length).toBeGreaterThan(0);
  });
});

describe('every selecting use of a levelled bank serves it at level', () => {
  it('has no unlevelled selecting use outside the recorded exemptions', () => {
    const bad = uses
      .filter((u) => !u.levelled && !NOT_A_ROUND.has(`${u.bank}@${u.file}`))
      .map((u) => `${u.bank} @ ${u.file}:${u.line}`);
    expect(bad).toEqual([]);
  });

  it('covers the five screens this sweep fixed', () => {
    const levelled = uses.filter((u) => u.levelled).map((u) => `${u.bank}@${u.file}`);
    for (const n of [
      'LISTEN@src/components/grad/GradTab.tsx',
      'LISTEN@src/hooks/useScreenLauncher.ts',
      'DICTATION_DATA@src/components/practice/DictationScreen.tsx',
      'TRANSFORMS@src/components/practice/ProductionDrillScreen.tsx',
      'TRANSLATE_PROD@src/components/practice/ProductionDrillScreen.tsx',
      'TRANSLATE_DRILLS@src/components/practice/TranslateDrillsScreen.tsx',
      'PROMPTS@src/components/practice/WritingScreen.tsx',
    ])
      expect(levelled).toContain(n);
  });
});

describe('the exemptions stay honest', () => {
  it('every exemption names a use that still exists and is still unlevelled', () => {
    for (const [key, reason] of NOT_A_ROUND) {
      const [bank, file] = key.split('@') as [string, string];
      const matching = uses.filter((u) => u.bank === bank && u.file === file);
      expect(matching.length, `${key}: no such selecting use any more`).toBeGreaterThan(0);
      expect(
        matching.some((u) => !u.levelled),
        `${key}: now goes through levelledBank — drop the exemption`,
      ).toBe(true);
      expect(reason.length).toBeGreaterThan(40);
    }
  });

  it('is one entry, so a growing list is a visible decision', () => {
    expect(NOT_A_ROUND.size).toBe(1);
  });
});

describe('levelledBank', () => {
  const bank = [
    { level: 'A1', id: 1 },
    { level: 'A2', id: 2 },
    { level: 'B1', id: 3 },
    { level: 'B2', id: 4 },
    { level: 'C1', id: 5 },
    { level: 'C2', id: 6 },
  ];

  it('keeps at-or-below and preserves source order', () => {
    expect(levelledBank(bank, 'B1', 1).map((x) => x.id)).toEqual([1, 2, 3]);
    expect(levelledBank(bank, 'C2', 1)).toHaveLength(6);
  });

  it('keeps an unlevelled item at every level', () => {
    const mixed = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { level: 'C2', id: 5 }];
    expect(levelledBank(mixed, 'A1')).toHaveLength(4);
  });

  it('serves the whole bank below the floor rather than a two-item round', () => {
    expect(levelledBank(bank, 'A1')).toHaveLength(6);
    expect(levelledBank(bank, 'A1', 1).map((x) => x.id)).toEqual([1]);
    expect(LEVELLED_BANK_MIN).toBe(4);
  });

  it('does not mutate or alias the bank it was given', () => {
    const out = levelledBank(bank, 'A1');
    expect(out).not.toBe(bank);
    expect(bank).toHaveLength(6);
  });
});
