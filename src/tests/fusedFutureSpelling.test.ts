/**
 * fusedFutureSpelling.test.ts — futur I of a `-ti` verb is TWO words in Croatian
 * (`pisat ću`, `tuširat ću se`); the fused `pisaću` / `tuširaću` / `čitaću` is Serbian
 * and Bosnian orthography, so it may not reach a learner — not even as a distractor or
 * a "bad" example (NEVER-DO 17). Sweep 176 found four such forms in drills and lesson
 * data, all in options or error examples, where the Serbism lint cannot see them.
 *
 * WHY THIS IS NOT A LINT RULE: `[aei]ću` matches `neću`, `sreću`, `plaću`, `noću` …
 * (see grammarReferenceContent.test.ts, which measured 97 such false alarms). The
 * precision here comes from a DERIVATION: a fused form is flagged only when the corpus
 * itself spells the same stem as a two-word future (`pisat ću` makes `pisaću` a
 * finding), so an ordinary noun or adjective can only be caught if it happens to share
 * a stem with a verb. Measured on the whole content tree: four real findings and five
 * such collisions, listed below with what each word actually is.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { globSync } from 'node:fs';

const ROOTS = [
  'src/data/**/*.{js,ts,tsx}',
  'src/components/**/*.{js,ts,tsx}',
  'functions/api/content/_data/**/*.js',
];

/** Real Croatian words whose stem collides with a verb stem in the corpus. */
const HOMONYMS: Record<string, string> = {
  noću: 'adverb "at night" (noć + instrumental), not no + ću',
  noće: 'plural of noć',
  gradiću: 'dative/locative of gradić, "small town"',
  svijeće: 'genitive/plural of svijeća, "candle"',
  svijeću: 'accusative of svijeća',
  kupaće: 'adjective kupaći, "bathing" (kupaće gaće)',
  piće: 'noun "a drink"',
  piću: 'dative/locative of piće',
};

function corpus(): Map<string, string> {
  const out = new Map<string, string>();
  for (const pat of ROOTS) for (const f of globSync(pat)) out.set(f, readFileSync(f, 'utf8'));
  return out;
}

// JS `\b` is ASCII-only and fires inside `noću` (before the č-class letter), so word
// edges are Unicode lookarounds — the first draft of this file used `\b` and flagged
// half the corpus.
const FUSED = /(?<!\p{L})(\p{L}+?)(ću|ćeš|će|ćemo|ćete)(?!\p{L})/gu;
const TWO_WORD = /(?<!\p{L})(\p{L}+)t (?:ću|ćeš|će|ćemo|ćete)(?!\p{L})/gu;

export function fusedFutures(files: Map<string, string>): string[] {
  const stems = new Set<string>();
  for (const t of files.values())
    for (const m of t.matchAll(TWO_WORD)) stems.add(m[1]!.toLowerCase());
  const hits: string[] = [];
  for (const [f, t] of files) {
    for (const m of t.matchAll(FUSED)) {
      const word = m[0].toLowerCase();
      if (!stems.has(m[1]!.toLowerCase()) || word in HOMONYMS) continue;
      hits.push(`${f}:${t.slice(0, m.index).split('\n').length}: ${m[0]}`);
    }
  }
  return hits;
}

describe('futur I is never written as one word', () => {
  const files = corpus();

  it('reads the whole content tree (non-vacuity)', () => {
    expect(files.size).toBeGreaterThan(400);
    const stems = [...[...files.values()].join('\n').matchAll(TWO_WORD)].length;
    expect(stems, 'two-word futures found in the corpus').toBeGreaterThan(300);
  });

  it('finds no fused future anywhere a learner can read', () => {
    const hits = fusedFutures(files);
    expect(hits, `Serbian fused future:\n${hits.join('\n')}`).toEqual([]);
  });

  it('catches the shape it exists for (positive control)', () => {
    const probe = new Map(files);
    probe.set('probe.ts', "opts: ['pisat ću', 'pisaću']");
    expect(fusedFutures(probe)).toEqual(['probe.ts:1: pisaću']);
  });

  it('every homonym exemption still names a word the corpus contains', () => {
    const all = [...files.values()].join('\n').toLowerCase();
    for (const w of Object.keys(HOMONYMS))
      expect(new RegExp(`(?<!\\p{L})${w}(?!\\p{L})`, 'u').test(all), `stale exemption: ${w}`).toBe(
        true,
      );
  });
});
