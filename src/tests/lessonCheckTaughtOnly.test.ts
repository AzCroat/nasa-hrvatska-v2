// A mastery check may only ask what the course has taught by that lesson.
//
// The greetings check (lesson 3) once asked "Dobar dan, kako ___?" with the options
// si / ste / je / su and explained the wrong ones as "third person": a choice among the
// forms of biti and a grammar term, one lesson before biti and the persons are taught.
// The greeting lessons teach "Kako si?" and "Kako ste?" as WHOLE phrases, so a check can
// ask which phrase fits, never which verb form. This keeps every check before the pronouns
// lesson (alphabet, sounds, numbers, greetings) free of bare biti forms and of grammar terms.
import { describe, expect, it } from 'vitest';
import { LESSONS_FIXTURE } from '../../e2e/fixtures/content-fixture.js';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

const BITI = new Set(['sam', 'si', 'je', 'smo', 'ste', 'su', 'jesam', 'jesi', 'jesmo', 'jeste']);
const GRAMMAR_TERMS =
  /\b(first|second|third) person\b|\b(nominative|genitive|dative|accusative|locative|instrumental|vocative)\b|\bconjugat|\bclitic\b/i;

const order = (id: string) => CURRICULUM.find((e: { id: string }) => e.id === id)?.order ?? 999;
const BEFORE_BITI = LESSONS_FIXTURE.filter(
  (l: { id: string; level: string }) => l.level === 'A1' && order(l.id) < order('pronouns-biti'),
);

describe('checks before biti is taught', () => {
  it('covers the lessons before pronouns-biti (alphabet, sounds, numbers, greetings)', () => {
    expect(BEFORE_BITI.map((l: { id: string }) => l.id).sort()).toEqual(
      ['alphabet', 'greetings-farewells', 'numbers-time', 'sounds-palatals'].sort(),
    );
  });

  it('none offers two bare biti forms as options, or names a grammar term', () => {
    for (const lesson of BEFORE_BITI) {
      for (const s of lesson.slides ?? []) {
        if (s.type !== 'check') continue;
        for (const it of [...(s.items ?? []), ...(s.itemsB ?? [])]) {
          const forms = (it.options ?? []).filter((o: string) => BITI.has(String(o).trim()));
          expect(forms.length, `${lesson.id}: ${it.q}`).toBeLessThan(2);
          expect(GRAMMAR_TERMS.test(it.explanation ?? ''), `${lesson.id}: ${it.explanation}`).toBe(
            false,
          );
        }
      }
    }
  });
});
