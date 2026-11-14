// A1 FOLLOWS THE BOOK (Hrvatski za početnike 1, owner 2026-11-13): a learner never meets a
// grammar word before the lesson that teaches it. Two places say when that is, and they
// were out of step — `taughtTerms.ts` said "genitive" first came at genitive-intro (78)
// while lessons 12, 14, 31, 44 and 50 already named it. The explain-this-to-me feature
// hides untaught grammar words, so a lesson naming one early is the same defect seen from
// the other side.
//
// This holds every A1 lesson's learner-facing text to the table: no word from
// ALL_GRAMMAR_TERMS before the lesson TERMS_INTRODUCED_BY says introduces it. The ONE
// exemption is `cases` (28), which names all seven cases once as a map of what is coming.
import { describe, it, expect } from 'vitest';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { ALL_GRAMMAR_TERMS, TERMS_INTRODUCED_BY } from '../lib/taughtTerms';

type Entry = { id: string; level: string; order: number };
type Lesson = { id: string; level: string; slides: unknown[]; vocab?: unknown };

const order = new Map(
  (CURRICULUM as Entry[]).filter((e) => e.level === 'A1').map((e) => [e.id, e.order]),
);
const a1 = (LESSONS as Lesson[])
  .filter((l) => l.level === 'A1' && order.has(l.id))
  .sort((a, b) => order.get(a.id)! - order.get(b.id)!);

/** The A1 order at which each term is first allowed. */
function introducedAt(term: string): number {
  let at = Infinity;
  for (const [id, terms] of Object.entries(TERMS_INTRODUCED_BY))
    if (terms.includes(term) && order.has(id)) at = Math.min(at, order.get(id)!);
  return at;
}

/** Learner-facing English: every string in the lesson except the Croatian-only fields. */
function text(l: Lesson): string {
  return JSON.stringify({ slides: l.slides, vocab: l.vocab })
    .toLowerCase()
    .replace(/\b(lower|upper)[ -]case\b/g, ''); // "lower case" is about letters
}

const MAP_LESSON = 'cases';

function earlyTerms(lessons: Lesson[]): string[] {
  const out: string[] = [];
  for (const l of lessons) {
    if (l.id === MAP_LESSON) continue;
    const here = order.get(l.id)!;
    const t = text(l);
    for (const term of ALL_GRAMMAR_TERMS) {
      const at = introducedAt(term);
      if (here >= at) continue;
      if (new RegExp(`\\b${term}\\b`).test(t))
        out.push(`${here} ${l.id}: "${term}" (taught at ${at})`);
    }
  }
  return out;
}

describe('A1 lessons name a grammar word only once it is taught', () => {
  it('reaches every A1 lesson (non-vacuous)', () => {
    expect(a1.length).toBe(100);
  });
  it('every A1 introducing lesson in the table is a real A1 lesson in the spine', () => {
    for (const [id] of Object.entries(TERMS_INTRODUCED_BY)) {
      const l = (LESSONS as Lesson[]).find((x) => x.id === id);
      expect(l, id).toBeTruthy();
    }
  });
  it('no A1 lesson names a grammar word before the lesson that introduces it', () => {
    expect(earlyTerms(a1)).toEqual([]);
  });
  it('the check fires on a lesson that names a later word (synthetic control)', () => {
    const probe: Lesson = {
      id: 'pronouns-biti',
      level: 'A1',
      slides: [{ type: 'rule', body: 'iz takes the genitive' }],
    };
    expect(earlyTerms([probe])).toEqual(['4 pronouns-biti: "genitive" (taught at 78)']);
  });
});
