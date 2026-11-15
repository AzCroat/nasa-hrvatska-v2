// exerciseKindsLint.test.ts — the Croatian lint walks EVERY new Croatian field of the
// exercise player. A positive control per field: plant the Serbian form `hleb` in it
// on a synthetic lesson and require the walk to yield it as a 'croatian' string (the
// kind that gets the Serbism check) — and the English-only fields as 'gloss'.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { exerciseStrings, textSlideStrings } from '../../scripts/lessonExerciseStrings.mjs';
import { SERBISM_RULES } from '../../functions/api/_serbisms.js';
import { TEXT_FIXTURE, PRACTICE_FIXTURE } from '../../e2e/fixtures/exercise-kinds-fixture.js';

type Str = { loc: string; field: string; content: string; kind: string };
const serbism = (s: string) => SERBISM_RULES.some((r: { re: RegExp }) => r.re.test(s));
const clone = <T>(x: T): T => JSON.parse(JSON.stringify(x));
const item = (t: string) => clone(PRACTICE_FIXTURE.find((x: { type: string }) => x.type === t));

/** Plant `hleb` at a path, walk, and return the strings the walk yields that carry it. */
function planted(
  root: Record<string, unknown>,
  path: (string | number)[],
  walk: (o: never) => Iterable<Str>,
) {
  const o = clone(root);
  let cur: Record<string | number, unknown> = o;
  for (const p of path.slice(0, -1)) cur = cur[p] as Record<string | number, unknown>;
  cur[path[path.length - 1]!] = 'hleb';
  return [...walk(o as never)].filter((s) => s.content === 'hleb');
}
const ex = (o: never) => exerciseStrings(o, 'x', 'croatian') as Iterable<Str>;
const tx = (o: never) => textSlideStrings(o, 'x', 'croatian') as Iterable<Str>;

describe('the Serbism rule would flag the control word', () => {
  it('hleb is a Serbism', () => expect(serbism('hleb')).toBe(true));
});

describe('every new Croatian field is walked with the Serbism check', () => {
  const croatian: [string, string, (string | number)[]][] = [
    ['tf', 'q', ['q']],
    ['match', 'left', ['pairs', 0, 0]],
    ['match', 'right', ['pairs', 0, 1]],
    ['sort', 'item', ['items', 0, 'hr']],
    ['order', 'word', ['words', 0]],
    ['transform', 'from', ['from']],
    ['transform', 'answer', ['answer']],
    ['fix', 'word', ['words', 0]],
    ['fix', 'answer', ['answer']],
    ['listen', 'audio', ['audio']],
    ['listen', 'option', ['options', 0]],
    ['dictate', 'audio', ['audio']],
    ['dictate', 'answer', ['answer']],
  ];
  for (const [t, name, path] of croatian) {
    it(`${t}.${name}`, () => {
      const got = planted(item(t), path, ex);
      expect(got.length).toBe(1);
      expect(got[0]!.kind).toBe('croatian');
    });
  }
  it('order.accept, transform.accept and dictate.accept', () => {
    for (const t of ['order', 'transform', 'dictate']) {
      const o = item(t);
      o.accept = ['fine'];
      const got = planted(o, ['accept', 0], ex);
      expect(got.length, t).toBe(1);
      expect(got[0]!.kind).toBe('croatian');
    }
  });
  it('text.title and text.lines[].hr', () => {
    for (const path of [['title'], ['lines', 1, 'hr']]) {
      const got = planted(TEXT_FIXTURE, path, tx);
      expect(got.length, path.join('.')).toBe(1);
      expect(got[0]!.kind).toBe('croatian');
    }
  });
  it('text questions go through the same walk', () => {
    const got = planted(TEXT_FIXTURE, ['questions', 0, 'q'], tx);
    expect(got.length).toBe(1);
    expect(got[0]!.kind).toBe('croatian');
  });
});

describe('English-only fields get the encoding check only', () => {
  it('text line en, speaker and sort group names are glosses', () => {
    expect(planted(TEXT_FIXTURE, ['lines', 0, 'en'], tx)[0]!.kind).toBe('gloss');
    expect(planted(TEXT_FIXTURE, ['lines', 0, 'who'], tx)[0]!.kind).toBe('gloss');
    expect(planted(item('sort'), ['groups', 0], ex)[0]!.kind).toBe('gloss');
  });
  it('hint and explanation are walked (English prose quoting Croatian: both checks)', () => {
    expect(planted(item('fix'), ['hint'], ex)[0]!.kind).toBe('croatian');
    expect(planted(item('fix'), ['explanation'], ex)[0]!.kind).toBe('croatian');
  });
});

describe('the lint script uses the walk', () => {
  const SRC = readFileSync('scripts/lintCroatianText.mjs', 'utf8');
  it('imports both generators and applies them to practice items and text slides', () => {
    expect(SRC).toMatch(
      /import \{ exerciseStrings, textSlideStrings \} from '\.\/lessonExerciseStrings\.mjs'/,
    );
    expect(SRC).toMatch(/yield\* exerciseStrings\(items\[k\]/);
    expect(SRC).toMatch(/s\.type === 'text'\) yield\* textSlideStrings\(s, at, kind\)/);
  });
});
