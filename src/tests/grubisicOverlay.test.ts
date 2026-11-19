// The Grubišić "Croatian Grammar" additions (owner request, 2026-11-19): slides and practice
// placed in the lessons where level and topic fit (functions/api/content/_data/lessonGrammarBook.js).
import { describe, it, expect } from 'vitest';
import { LESSONS } from '../../functions/api/content/_data/lessons.js';
import {
  LESSON_GRAMMAR_BOOK,
  withGrammarBook,
} from '../../functions/api/content/_data/lessonGrammarBook.js';

type Slide = { type: string; title?: string; body?: string; items?: Item[]; rows?: string[][] };
type Item = {
  q?: string;
  options?: string[];
  correct?: number;
  answer?: string;
  hint?: string;
  type?: string;
};
type Lesson = { id: string; slides: Slide[] };

const lessons = (Array.isArray(LESSONS) ? LESSONS : Object.values(LESSONS)) as Lesson[];
const byId = new Map(lessons.map((l) => [l.id, l]));
const ids = Object.keys(LESSON_GRAMMAR_BOOK);

describe('Grubišić additions', () => {
  it('names a source paragraph for every addition', () => {
    for (const id of ids) {
      expect((LESSON_GRAMMAR_BOOK as Record<string, { source: string }>)[id]!.source, id).toMatch(
        /Grubišić §\d+/,
      );
    }
  });

  it('every addition lands in a lesson that exists, once, before its worked examples', () => {
    expect(ids.length).toBeGreaterThanOrEqual(3);
    for (const id of ids) {
      const l = byId.get(id);
      expect(l, `${id} exists`).toBeTruthy();
      const titles = (LESSON_GRAMMAR_BOOK as Record<string, { slides: Slide[] }>)[id]!.slides.map(
        (s) => s.title,
      );
      for (const t of titles) {
        expect(l!.slides.filter((s) => s.title === t).length, `${id}: "${t}" appears once`).toBe(1);
      }
      const firstNew = l!.slides.findIndex((s) => s.title === titles[0]);
      const firstWorked = l!.slides.findIndex((s) => s.type === 'worked');
      expect(firstNew, `${id}: before the worked examples`).toBeLessThan(firstWorked);
    }
  });

  it('adds its practice items to the lesson’s practice slide', () => {
    for (const id of ids) {
      const extra = (LESSON_GRAMMAR_BOOK as Record<string, { practice: Item[] }>)[id]!.practice;
      const practice = byId.get(id)!.slides.find((s) => s.type === 'practice')!;
      const qs = new Set((practice.items || []).map((i) => i.q));
      for (const item of extra) expect(qs.has(item.q), `${id}: ${item.q}`).toBe(true);
    }
  });

  it('no added question contains its own answer, and no hint does either', () => {
    const word = (hay: string, needle: string) =>
      needle.length >= 2 &&
      new RegExp(
        `(^|[^\\p{L}])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^\\p{L}])`,
        'iu',
      ).test(hay);
    for (const id of ids) {
      for (const it of (LESSON_GRAMMAR_BOOK as Record<string, { practice: Item[] }>)[id]!
        .practice) {
        const ans = it.options ? it.options[it.correct!]! : it.answer!;
        // An answer of one or two letters (s, k) is a preposition, not a word the question can give away.
        if (ans.length < 3) continue;
        expect(word(it.q!, ans), `${id}: the question gives away "${ans}": ${it.q}`).toBe(false);
        expect(word(it.hint || '', ans), `${id}: the hint gives away "${ans}"`).toBe(false);
      }
    }
  });

  it('every multiple-choice addition has four distinct options and a real answer index', () => {
    for (const id of ids) {
      for (const it of (LESSON_GRAMMAR_BOOK as Record<string, { practice: Item[] }>)[id]!
        .practice) {
        if (!it.options) continue;
        expect(new Set(it.options).size, `${id}: ${it.q}`).toBe(4);
        expect(it.correct).toBeGreaterThanOrEqual(0);
        expect(it.correct).toBeLessThan(4);
      }
    }
  });

  it('states the rules the book states (spot-pinned: one fact per addition)', () => {
    const text = (id: string) => JSON.stringify(byId.get(id));
    expect(text('prepositions-action')).toContain('ka gradu');
    expect(text('prepositions-action')).toContain('k selu');
    expect(text('noun-peculiarities-e')).toContain('bitki or bici');
    expect(text('verbs-with-dative-a2')).toContain('Kupila sam si novu torbu');
    expect(text('instrumental')).toContain('Ponedjeljkom imamo hrvatski');
    expect(text('tvorba-rijeci')).toContain('žutjeti = become yellow');
    expect(text('instrumental')).toContain('Morem plovi mali brod');
    const wf = text('word-formation-agents');
    for (const fact of [
      'rob → ropstvo',
      'svat → svadba',
      'glas → glazba',
      'ovca, novci, lovci',
      'otac → oca',
      'nosilac → nosioca',
      'nosilaca',
    ]) {
      expect(wf, fact).toContain(fact);
    }
  });

  it('is a no-op for a lesson it does not list', () => {
    const untouched = { id: 'zzz-not-listed', slides: [{ type: 'intro' }] };
    expect(withGrammarBook([untouched])).toEqual([untouched]);
  });
});
