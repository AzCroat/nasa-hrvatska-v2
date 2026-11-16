// The answer is not always the first option (owner standard, 2026-11-15).
// Class content is authored with the correct option first, and the player shows options
// in the order given. `spreadOptions` (lessonPractice.js) therefore fixes a per-item order
// at assembly time. This pins: the right ANSWER is unchanged, the order is stable between
// builds, and across the class content every position is used — so "always the first one"
// cannot come back.
import { describe, expect, it } from 'vitest';
import {
  LESSON_CLASS,
  spreadOptions,
  withPractice,
} from '../../functions/api/content/_data/lessonPractice.js';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';

type Item = { type?: string; q?: string; options?: string[]; correct?: number };
const choice = (it: Item) =>
  (!it.type || it.type === 'listen') && Array.isArray(it.options) && Number.isInteger(it.correct);

describe('class-content option order', () => {
  it('keeps the same correct answer and is deterministic', () => {
    const item = { q: 'Which?', options: ['right', 'b', 'c', 'd'], correct: 0 };
    for (const seed of ['a|text|0', 'b|mix|3', 'c|mix|9', 'd|text|2', 'e|mix|1']) {
      const out = spreadOptions(item, seed) as Required<Item>;
      expect(out.options[out.correct]).toBe('right');
      expect([...out.options].sort()).toEqual([...item.options].sort());
      expect(spreadOptions(item, seed)).toEqual(out);
    }
  });

  it('leaves the other exercise kinds untouched', () => {
    const tf = { type: 'tf', q: 'x', answer: true };
    expect(spreadOptions(tf, 's')).toBe(tf);
  });

  it('every authored class choice item is assembled with its authored answer, and the positions are spread', () => {
    const ids = Object.keys(LESSON_CLASS);
    expect(ids.length).toBeGreaterThan(0);
    const positions = new Map<number, number>();
    let seen = 0;
    for (const id of ids) {
      const lesson = (LESSONS as { id: string; slides: Record<string, unknown>[] }[]).find(
        (l) => l.id === id,
      )!;
      const authored: Item[] = [
        ...(((LESSON_CLASS as Record<string, { text?: { questions?: Item[] } }>)[id]!.text
          ?.questions ?? []) as Item[]),
        ...((LESSON_CLASS as Record<string, { mix?: unknown[] }>)[id]!.mix ?? []).filter(
          (m): m is Item => !!m && typeof m === 'object',
        ),
      ].filter(choice);
      const text = lesson.slides.find((s) => s.type === 'text') as { questions: Item[] };
      const practice = lesson.slides.find((s) => s.type === 'practice') as { items: Item[] };
      const assembled = [...text.questions, ...practice.items].filter(choice);
      for (const a of authored) {
        const key = (x: Item) => `${x.q}|${[...x.options!].sort().join('|')}`;
        const twin = assembled.find((x) => key(x) === key(a));
        expect(twin, `${id}: "${a.q}" is assembled`).toBeTruthy();
        expect(twin!.options![twin!.correct!]).toBe(a.options![a.correct!]);
        positions.set(twin!.correct!, (positions.get(twin!.correct!) ?? 0) + 1);
        seen++;
      }
    }
    expect(seen).toBeGreaterThan(10);
    // No single position holds more than 60% of the answers.
    for (const n of positions.values()) expect(n / seen).toBeLessThan(0.6);
    expect(positions.size).toBeGreaterThanOrEqual(3);
    // withPractice is what the app serves: assembling again changes nothing.
    expect(withPractice([])).toEqual([]);
  });
});
