// B1 lessons whose practice is a drill built from Razgovarajte s nama A2-B1. Each lesson has its own
// category (b1-<lesson>) and screen (b1<lesson>); this holds the wiring and the format of each bank.
import { describe, expect, it } from 'vitest';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, SCREEN_CEFR } from '../lib/categoryRoutes';

// Batch 1: eleven B1 lessons.
const OWN = [
  'comparatives-a2',
  'time-clauses',
  'real-conditions',
  'conjunctions',
  'position-placement',
  'time-duration',
  'relative-koji',
  'indefinites',
  'infinitive-vs-da',
  'cause-purpose',
  'reported-speech',
] as const;
const camel = (id: string) => id.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());
const upper = (id: string) => id.toUpperCase().replace(/-/g, '_');

describe.each(OWN)('B1 book drill for %s', (id) => {
  it('is wired: the lesson practises its own category, routed to its own B1 screen', () => {
    const cat = `b1-${id}`;
    const screen = `b1${id.replace(/-/g, '')}`;
    expect(LESSON_TAUGHT_CATEGORY[id]).toBe(cat);
    expect(CATEGORY_SCREEN_MAP[cat as keyof typeof CATEGORY_SCREEN_MAP]).toBe(screen);
    expect(SCREEN_CEFR[screen]).toBe('B1');
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import(`../data/drills/b1/${camel(id)}Drill.ts`);
    const data = m[`${upper(id)}_DRILL_DATA`] as {
      mode: string;
      q: string;
      lead?: string;
      opts: string[];
      answer: string;
      tip: string;
    }[];
    expect(data.length).toBeGreaterThanOrEqual(24);
    expect(data.length).toBeLessThanOrEqual(28);
    const modes = new Map<string, number>();
    for (const d of data) modes.set(d.mode, (modes.get(d.mode) ?? 0) + 1);
    expect(modes.size).toBe(3);
    for (const n of modes.values()) expect(n).toBeGreaterThanOrEqual(6);
    const seen = new Set<string>();
    for (const d of data) {
      const key = `${d.lead ?? ''}${d.q}`;
      expect(new Set(d.opts).size, d.q).toBe(4);
      expect(d.opts, d.q).toContain(d.answer);
      expect(seen.has(key), `duplicate question: ${d.q}`).toBe(false);
      seen.add(key);
      expect(d.tip.length, `tip: ${d.q}`).toBeGreaterThanOrEqual(20);
    }
  });
});
