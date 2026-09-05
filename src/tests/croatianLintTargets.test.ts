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

  it('every ModeDrill wrapper is covered', () => {
    // The OTHER half of every engine-backed drill (2026-09-01). The bank in
    // src/data/drills/ has been linted since 2026-08-29 and the wrapper had
    // never been: it owns the title, the subtitle and the three praise lines,
    // and a learner reads one of those praise lines every single time they
    // finish a drill. Derived for the same reason as the cohort above — this is
    // the directory the practice programme grows in.
    const wrappers = globSync('src/components/practice/drills/*.tsx');
    expect(wrappers.length, 'the wrapper glob matched nothing — check the path').toBeGreaterThan(
      100,
    );
    const uncovered = wrappers.filter((f) => !targets.has(f));
    expect(
      uncovered,
      `these ModeDrill wrappers carry a title, subtitle and praise lines and are NOT ` +
        `linted: ${uncovered.join(', ')}. Add them to TARGETS in scripts/lintCroatianText.mjs.`,
    ).toEqual([]);
  });
});

describe('the matcher sees the shapes the content is actually written in', () => {
  // THE FINDING OF 2026-09-01, and the reason this block exists at all: the
  // TARGET LIST had stopped being the binding constraint and nobody had
  // measured it. A census of every candidate outside TARGETS found 1,159
  // Croatian strings of which the field regex saw 137 — twelve per cent. Adding
  // files was buying almost nothing; the matcher was the gap.
  //
  // Both additions below are mutation-verified in the commit, and the SEPARATOR
  // one is the sharper result: with JSX support removed, a Cyrillic homoglyph
  // injected into a wrapper's `subtitle=` attribute passes the lint clean.

  it('matches the JSX attribute form, not just object fields', () => {
    // `title="🔢 Množina"` is how all 109 wrappers present every string they
    // own. `\s*:\s*` never matched an attribute, so the whole cohort could have
    // been in TARGETS for months and stayed invisible — the exercises.js
    // finding, arrived at from the opposite direction.
    expect(LINT_SRC).toMatch(/\)\\s\*\(\?::\|=\)\\s\*/);
  });

  it('matches the ModeDrill praise triple', () => {
    // perfect / good / more are the lines shown at the END of a drill. 109 of
    // each, and the most-read Croatian in the practice programme, because a
    // learner meets one on every single completion.
    const fields = LINT_SRC.match(/const CRO_FIELD_RE =\s*\/\(([^)]*)\)/)![1]!.split('|');
    for (const key of ['perfect', 'good', 'more', 'subtitle', 'label']) {
      expect(fields, `CRO_FIELD_RE no longer matches \`${key}\``).toContain(key);
    }
  });

  /** The field names ARRAY_FIELD_RE scans — derived from the source, not restated. */
  const arrayFields = () =>
    LINT_SRC.match(/const ARRAY_FIELD_RE =\s*\/\(([^)]*)\)/)![1]!.split('|');

  it('scans the curriculum spine objectives', () => {
    // A bare string array, so neither the field regex nor the distractor pass
    // reached it: 55 Croatian strings, none scanned. Worth pinning BOTH halves
    // — the pass and the file — because shipping one without the other is
    // precisely what the mutation run caught here.
    expect(arrayFields()).toContain('objectives');
    expect([...lintTargets()]).toContain('functions/api/content/_data/curriculum.js');
  });

  // THE FINDING OF 2026-09-05: the writing curriculum had been in TARGETS since
  // the day it was authored (2026-08-18) and its header said "keep it clean" —
  // and the lint saw roughly a sixth of it. Mutation settled it: a Serbism in a
  // structure `hr` was caught; the same word in a MODEL text, a frame `after`
  // or the connectives array passed clean. Three shapes, pinned separately
  // because each failed on its own.
  it('matches the writing-curriculum field names (model / before / after)', () => {
    const fields = LINT_SRC.match(/const CRO_FIELD_RE =\s*\/\(([^)]*)\)/)![1]!.split('|');
    for (const key of ['model', 'before', 'after']) {
      expect(fields, `CRO_FIELD_RE no longer matches \`${key}\``).toContain(key);
    }
    expect([...lintTargets()]).toContain('src/data/writingCurriculum.ts');
  });

  it('scans the writing-curriculum arrays (connectives / accept)', () => {
    for (const key of ['connectives', 'accept']) {
      expect(arrayFields(), `ARRAY_FIELD_RE no longer matches \`${key}\``).toContain(key);
    }
  });

  // THE BILINGUAL `*Hr` LAYER (2026-09-05, item 6). The culture data marks its
  // Croatian half by SUFFIX — introHr, textHr, titleHr, descHr, roleHr,
  // storyHr, eventHr, tHr, hHr, qHr, aHr, and the arrays factsHr / alHr: 1,156
  // field occurrences, none a name the regex listed, and `hr` is case-sensitive
  // so it never matched the `Hr` inside them. history.js and regions.js had been
  // in TARGETS since the first wave. Found by mutation: `hleb` in a `textHr`
  // passed clean while the same word in a drill `q` was caught.
  //
  // Asserted by BUILDING the regexes from the lint's own source and running
  // them, not by looking for the text of the alternative — a mention in a
  // comment would satisfy a text match and guard nothing.
  const regexFromSource = (name: string): RegExp => {
    const lit = LINT_SRC.match(new RegExp(`const ${name} =\\s*(\\/.*\\/[a-z]*);`))![1]!;
    return new Function(`return ${lit}`)() as RegExp;
  };

  it('matches every bilingual *Hr field, including the graded siblings (textHrA1 … textHrC2)', () => {
    const re = regexFromSource('CRO_FIELD_RE');
    for (const probe of [
      "textHr: 'x'",
      'introHr:\n    "x"',
      "titleHr: 'x'",
      "descHr: 'x'",
      "roleHr: 'x'",
      "storyHr: 'x'",
      "eventHr: 'x'",
      "tHr: 'x'",
      "qHr: 'x'",
      "textHrA1: 'x'",
      "textHrB2: 'x'",
      "introHrC2: 'x'",
    ]) {
      expect(!!probe.match(re), `CRO_FIELD_RE misses ${JSON.stringify(probe)}`).toBe(true);
    }
    // and the suffix rule stays a suffix rule — a lowercase `hr` prefix is not it
    expect(!!"hrvatski: 'x'".match(re)).toBe(false);
  });

  it('decodes \\uXXXX / \\xXX escapes before checking — KINGS writes its Croatian that way', () => {
    // The regex passes scan SOURCE text; a literal may spell any character as
    // an escape, and the rules then see `\`, `u`, `0`… instead of the letter.
    // 117 escapes in history.js alone. Asserted by running the lint's own
    // decoder (built from source) and by checking BOTH generators feed
    // through it — one without the other leaves half the strings undecoded.
    const fn = LINT_SRC.match(/function decodeEscapes\(s\) \{[\s\S]*?\n\}/)![0]!;
    const decode = new Function(`${fn}; return decodeEscapes;`)() as (s: string) => string;
    expect(decode('\\u0161\\u0107 i \\x68leb')).toBe('šć i hleb');
    expect(decode('\\ud83d\\udc51')).toBe('👑'); // surrogate pairs survive
    expect(LINT_SRC).toMatch(/content: decodeEscapes\(m\[3\]\)/);
    expect(LINT_SRC).toMatch(/content: decodeEscapes\(c\[2\]\)/);
    expect(LINT_SRC).toMatch(/content: decodeEscapes\(q\[2\]\)/);
  });

  it('scans the bilingual *Hr ARRAYS (factsHr, alHr)', () => {
    const re = regexFromSource('ARRAY_FIELD_RE');
    for (const probe of ["factsHr: ['x', 'y']", 'alHr: ["x"]']) {
      expect(!!probe.match(re), `ARRAY_FIELD_RE misses ${JSON.stringify(probe)}`).toBe(true);
    }
    for (const file of ['src/data/cultural/history.js', 'src/data/cultural/regions.js']) {
      expect([...lintTargets()]).toContain(file);
    }
  });

  it('follows concatenated string literals, not just the first', () => {
    // A model is written as `'…' +\n'…' +\n'…'` and the field regex captured
    // the FIRST literal only — 222 such joins across TARGETS, every
    // continuation line invisible. The main loop must iterate `fieldStrings`
    // (which walks the `+ '…'` chain with a sticky CONCAT_RE), not the raw
    // regex. Both halves pinned: the helper exists and is what the loop reads.
    expect(LINT_SRC).toMatch(/const CONCAT_RE = \/[^\n]*\/y;/);
    expect(LINT_SRC).toMatch(/function\* fieldStrings\(buf\)/);
    expect(LINT_SRC).toMatch(/for \(const \{[^}]*\} of fieldStrings\(buf\)\)/);
    expect(LINT_SRC).not.toMatch(
      /for \(const m of buf\.matchAll\(CRO_FIELD_RE\)\) \{\n\s*\/\/ m\[1\]/,
    );
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

  it('the foreign-etymon carve-out is Turkish-only and English-field-only', () => {
    // The second wave (2026-08-31) added 45 more files and hit exactly one
    // false positive: `en: 'Enemies — from Turkish "düşman"'` beside the
    // Croatian `Dušmani`. Turkish letters are in BAD_CHARS_RE because inside
    // CROATIAN they are mojibake for š/g/i; inside an English gloss quoting an
    // etymon they are correct spelling.
    //
    // Two things must stay true, and both are mutation-checked in the commit:
    // Cyrillic in an `en` field still fails (M3), and a Turkish letter in an
    // `hr` field still fails (M4). Pinned in source so neither can be widened
    // by an edit that looks harmless.
    expect(LINT_SRC).toMatch(/const TURKISH_LETTERS_RE = \/\[[^/]*\]\//);
    expect(LINT_SRC).toMatch(/const FOREIGN_ETYMON_FIELDS = new Set\(\['en', 'note'\]\)/);
    // The filter must subtract from the Turkish class specifically — not from
    // the whole BAD_CHARS_RE result, which would carve Cyrillic out too.
    expect(LINT_SRC).toMatch(/bad\.filter\(\(m\) => !TURKISH_LETTERS_RE\.test\(m\[0\]\)\)/);
    // Cyrillic must not appear in the exempted class.
    const turkish = LINT_SRC.match(/const TURKISH_LETTERS_RE = \/\[([^/]*)\]\//)![1]!;
    expect(turkish, 'the Turkish exemption class must not contain Cyrillic').not.toMatch(/[Ѐ-ӿ]/);
  });

  it('every encoding call site passes a field name', () => {
    // The carve-out is field-scoped, so a call site that forgets the field
    // silently applies the STRICTEST behaviour — which is safe — but one that
    // passes the wrong field would silently apply the loosest. Neither is
    // visible at runtime, so it is asserted here: no bare call survives.
    expect(LINT_SRC).not.toMatch(/findBadInString\(content\)/);
    expect(LINT_SRC).not.toMatch(/findBadInString\([a-zA-Z]+\)\s*;/);
  });

  it('suspends Serbisms only — encoding is never carved out', () => {
    // Mutation-verified separately (a Cyrillic homoglyph injected into the
    // exempted file still fails the build). Pinned in source here so a future
    // edit cannot widen the carve-out to cover findBadInString by accident.
    expect(LINT_SRC).toMatch(/serbismsOff\s*\?\s*null\s*:\s*findSerbisms/);
    expect(LINT_SRC).not.toMatch(/serbismsOff\s*\?\s*null\s*:\s*findBadInString/);
  });
});
