/**
 * grammarReferenceContent.test.ts — the Croatian on the grammar reference is
 * correct Croatian.
 *
 * This screen is where a learner goes to find out what IS right, so an error
 * here is worse than the same error in a drill distractor. Two shipped bugs,
 * both found by reading the file rather than by any tool:
 *
 *   1. `Dajem knjgu prijatelju.` — `knjigu` misspelt. The Croatian lint checks
 *      Serbisms and Cyrillic, not spelling, so it passed clean.
 *
 *   2. `'Govorit ću. / Govoriću.'` — the merged spelling offered as a co-equal
 *      Croatian variant, with a tip calling it the form used "in speech".
 *      Croatian writes futur I of a `-ti` verb as TWO words; `govoriću`,
 *      `pisaću`, `radiću` are Serbian and Bosnian orthography. That is NEVER-DO
 *      17 — a Serbian form in front of a learner — on the one screen whose job
 *      is to be authoritative.
 *
 * WHY THERE IS NO LINT RULE FOR THE MERGED FUTURE, measured rather than assumed
 * so nobody re-derives it: the obvious pattern `[aei]ću` matches 97 occurrences
 * of ordinary Croatian in the content today — `neću` (76), `sreću` (9),
 * `plaću` (9), `nesreću` (2), `smeću` (1) — which are the accusative of
 * `sreća`/`plaća`, the dative of `smeće`, and the negated `htjeti`. A rule that
 * noisy trains people to ignore the lint, which is the 123-false-positive
 * lesson. Precision is only available inside a file whose Croatian is known, so
 * the check lives here and is scoped to this file.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const SRC = readFileSync('src/components/shared/GrammarReference.tsx', 'utf8');
/** Only the authored strings — not identifiers or English prose around them. */
const CROATIAN_FIELDS = [...SRC.matchAll(/\b(?:example|tip|desc|summary):\s*(['"])([\s\S]*?)\1/g)]
  .map((m) => m[2]!)
  .join('\n');

describe('the grammar reference says true things in Croatian', () => {
  it('found the authored strings at all', () => {
    // Without this the assertions below pass vacuously if the file is restructured.
    expect(CROATIAN_FIELDS.length).toBeGreaterThan(1000);
    expect(CROATIAN_FIELDS).toContain('Pas trči.');
  });

  it('spells knjigu correctly in the dative example', () => {
    expect(CROATIAN_FIELDS).toContain('Dajem knjigu prijatelju.');
    expect(CROATIAN_FIELDS).not.toContain('knjgu');
  });

  it('never writes futur I as one word', () => {
    // Scoped to this file, where every Croatian string is known, so the pattern
    // can be exact without the false positives that rule out a global lint.
    const merged = [...CROATIAN_FIELDS.matchAll(/\b\w*[aei]ć(?:u|eš|e|emo|ete)\b/g)]
      .map((m) => m[0])
      .filter((w) => !/^(ne|sre|nesre|pla|sme|vo)ć/.test(w));
    expect(merged, `merged futur I is Serbian orthography: ${merged.join(', ')}`).toEqual([]);
    // and the two-word form IS taught
    expect(CROATIAN_FIELDS).toContain('Govorit ću.');
  });

  it('teaches the rule behind the two words, not just an example', () => {
    // A learner who has met `govoriću` elsewhere needs to know which is right
    // and why, or the example reads as one arbitrary choice among two.
    expect(CROATIAN_FIELDS).toMatch(/TWO words/i);
    expect(CROATIAN_FIELDS).toMatch(/govoriti → govorit ću/);
  });
});
