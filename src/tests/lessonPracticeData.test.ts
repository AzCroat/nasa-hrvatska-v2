// lessonPracticeData.test.ts — the data side of the exercise player: withPractice
// places a text step right after the intro and leaves a lesson without one
// untouched, and every validator rule fails on a minimally broken item and passes
// on the reviewed fixture.
import { describe, it, expect } from 'vitest';
import { withPractice, LESSON_PRACTICE } from '../../functions/api/content/_data/lessonPractice.js';
import {
  exerciseKindProblems,
  textSlideProblems,
  lessonDepthProblems,
  EXERCISE_KINDS,
} from '../../scripts/lessonDepthRules.mjs';
import { TEXT_FIXTURE, PRACTICE_FIXTURE } from '../../e2e/fixtures/exercise-kinds-fixture.js';

type Item = Record<string, unknown> & { type: string };
const clone = <T>(x: T): T => JSON.parse(JSON.stringify(x));
const fx = (t: string): Item => clone(PRACTICE_FIXTURE.find((x: Item) => x.type === t) as Item);

const base = (slides: unknown[]) => ({
  id: 'data-test',
  level: 'A1',
  title: 't',
  slides,
});
const slidesNoText = () => [
  { type: 'intro', title: 'Intro', body: 'b' },
  { type: 'rule', title: 'Rule', body: 'b' },
  { type: 'quiz', q: 'q', options: ['a', 'b'], correct: 0, explanation: 'e' },
  { type: 'check', items: [] },
  { type: 'summary', points: ['p'] },
];

describe('withPractice and the text step', () => {
  it('inserts the text slide immediately after the intro', () => {
    (LESSON_PRACTICE as Record<string, unknown>)['data-test'] = { text: TEXT_FIXTURE };
    const out = withPractice([base(slidesNoText())])[0]!;
    expect(out.slides.map((s: { type: string }) => s.type)).toEqual([
      'intro',
      'text',
      'rule',
      'quiz',
      'check',
      'summary',
    ]);
    expect(out.slides[1]).toEqual({ type: 'text', ...TEXT_FIXTURE });
    delete (LESSON_PRACTICE as Record<string, unknown>)['data-test'];
  });

  it('puts it at index 0 when the lesson has no intro slide', () => {
    (LESSON_PRACTICE as Record<string, unknown>)['data-test'] = { text: TEXT_FIXTURE };
    const slides = slidesNoText().slice(1);
    const out = withPractice([base(slides)])[0]!;
    expect(out.slides[0].type).toBe('text');
    delete (LESSON_PRACTICE as Record<string, unknown>)['data-test'];
  });

  it('a lesson without text is byte-identical to the same merge without the feature', () => {
    const worked = [{ problem: 'p', answer: 'a', en: 'e', steps: [{ text: '1' }] }];
    const practice = {
      items: [{ q: 'q', options: ['a', 'b', 'c', 'd'], correct: 0, hint: 'h', explanation: 'e' }],
    };
    (LESSON_PRACTICE as Record<string, unknown>)['data-test'] = { worked, practice };
    const out = withPractice([base(slidesNoText())])[0]!;
    expect(out.slides.map((s: { type: string }) => s.type)).toEqual([
      'intro',
      'rule',
      'worked',
      'quiz',
      'practice',
      'check',
      'summary',
    ]);
    expect(out.slides.some((s: { type: string }) => s.type === 'text')).toBe(false);
    delete (LESSON_PRACTICE as Record<string, unknown>)['data-test'];
  });
});

describe('the validator passes the reviewed fixture', () => {
  it('text', () => expect(textSlideProblems({ type: 'text', ...TEXT_FIXTURE })).toEqual([]));
  for (const k of EXERCISE_KINDS) {
    it(`${k}`, () => expect(exerciseKindProblems(fx(k), 'x')).toEqual([]));
  }
  it('a lesson carrying the text slide is judged by its rules at every level', () => {
    const l = base([{ type: 'text', ...TEXT_FIXTURE, lines: [] }]);
    expect(lessonDepthProblems(l).join('|')).toMatch(/text needs >= 3 lines/);
  });
});

describe('each rule fails on a minimally broken item', () => {
  const fails = (it: unknown, re: RegExp) =>
    expect(exerciseKindProblems(it, 'x').join('|')).toMatch(re);
  const mut = (t: string, f: (i: Item) => void) => {
    const i = fx(t);
    f(i);
    return i;
  };

  it('every kind needs an explanation', () => {
    for (const k of EXERCISE_KINDS)
      fails(
        mut(k, (i) => delete i.explanation),
        /explanation missing/,
      );
  });
  it('tf answer must be a boolean', () =>
    fails(
      mut('tf', (i) => (i.answer = 'true')),
      /boolean/,
    ));
  it('match needs 3-5 pairs', () => {
    fails(
      mut('match', (i) => ((i.pairs as unknown[]).length = 2)),
      /3-5 pairs/,
    );
    fails(
      mut('match', (i) => (i.pairs = [...(i.pairs as string[][]), ['a', 'b'], ['c', 'd']])),
      /3-5 pairs/,
    );
  });
  it('match pairs must be distinct on both sides', () => {
    fails(
      mut('match', (i) => ((i.pairs as string[][])[1]![0] = 'č')),
      /left sides must be distinct/,
    );
    fails(
      mut('match', (i) => ((i.pairs as string[][])[1]![1] = 'čaj')),
      /right sides must be distinct/,
    );
  });
  it('sort uses every group, in range, with 4-8 items and 2-3 groups', () => {
    fails(
      mut(
        'sort',
        (i) => (i.items = (i.items as { group: number }[]).map((x) => ({ ...x, group: 0 }))),
      ),
      /every group/,
    );
    fails(
      mut('sort', (i) => ((i.items as { group: number }[])[0]!.group = 5)),
      /out of range/,
    );
    fails(
      mut('sort', (i) => ((i.items as unknown[]).length = 3)),
      /4-8 items/,
    );
    fails(
      mut('sort', (i) => (i.groups = ['only'])),
      /2-3 named groups/,
    );
  });
  it('order needs >= 3 words', () =>
    fails(
      mut('order', (i) => (i.words = ['Ja', 'sam'])),
      /3 words/,
    ));
  it('transform answer differs from from', () =>
    fails(
      mut('transform', (i) => (i.answer = i.from)),
      /differ from from/,
    ));
  it('fix: wrong in range and answer differs from the wrong word', () => {
    fails(
      mut('fix', (i) => (i.wrong = 9)),
      /out of range/,
    );
    fails(
      mut('fix', (i) => (i.answer = 'si')),
      /differ from the wrong word/,
    );
  });
  it('listen: 3-4 distinct options, correct in range, audio not in q', () => {
    fails(
      mut('listen', (i) => (i.options = ['a', 'b'])),
      /3-4 options/,
    );
    fails(
      mut('listen', (i) => ((i.options as string[])[1] = 'Nice to meet you.')),
      /duplicate options/,
    );
    fails(
      mut('listen', (i) => (i.correct = 7)),
      /correct index out of range/,
    );
    fails(
      mut('listen', (i) => (i.q = 'Što znači: Drago mi je.?')),
      /audio sentence/,
    );
  });
  it('dictate answer must be non-empty', () =>
    fails(
      mut('dictate', (i) => (i.answer = '  ')),
      /answer missing/,
    ));
  it('text lines need hr and en, and at least 3 of them', () => {
    const t = (f: (x: typeof TEXT_FIXTURE) => void) => {
      const c = clone(TEXT_FIXTURE);
      f(c);
      return textSlideProblems({ type: 'text', ...c }).join('|');
    };
    expect(t((c) => c.lines.pop())).toMatch(/>= 3 lines/);
    expect(t((c) => (c.lines[0]!.en = ''))).toMatch(/line 0: en missing/);
    expect(t((c) => (c.lines[1]!.hr = ''))).toMatch(/line 1: hr missing/);
    expect(t((c) => ((c.questions[1] as { options: string[] }).options.length = 2))).toMatch(
      /exactly 4 options/,
    );
  });
  it('an unknown kind is reported', () =>
    fails({ type: 'hologram', explanation: 'e' }, /unknown exercise type/));
});
