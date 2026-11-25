// B2 lessons whose practice is a drill built from Razgovarajte s nama B2 and the B2-C1 grammar
// book (Gramatika i pravopis). This holds the wiring and the format of each bank.
//
// clitics: the lesson keeps the shared `clitics` category (the adaptive picker uses it, and the A1
// object-pronouns and C1 clitics-advanced lessons share it). The screen keeps its id `clitic` (the
// Learn path, Practice tab and explainer use it); only its question bank is the B2 book drill. The A1
// book drill is the easier route.
import { describe, expect, it } from 'vitest';
import { LESSON_TAUGHT_CATEGORY } from '../lib/teachPractice';
import { CATEGORY_SCREEN_MAP, CATEGORY_EASIER_SCREEN, SCREEN_CEFR } from '../lib/categoryRoutes';
import { ALL_CATEGORIES } from '../lib/adaptive';

describe('B2 clitics', () => {
  it('keeps the clitics category: B2 book drill as the route, A1 book drill as the easier route', () => {
    expect(LESSON_TAUGHT_CATEGORY['clitics']).toBe('clitics');
    expect(CATEGORY_SCREEN_MAP['clitics']).toBe('clitic');
    expect(CATEGORY_EASIER_SCREEN['clitics']).toBe('a1objectpronouns');
    expect(SCREEN_CEFR['clitic']).toBe('B2');
    expect(SCREEN_CEFR['a1objectpronouns']).toBe('A1');
    expect((ALL_CATEGORIES as readonly string[]).includes('clitics')).toBe(true);
  });

  it('is well formed: 24-28 items, 3 modes of 6+, one right answer among 4 distinct options', async () => {
    const m = await import('../data/drills/b2/cliticsDrill');
    const data = m.CLITICS_DRILL_DATA as {
      mode: string;
      q: string;
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
      expect(new Set(d.opts).size, d.q).toBe(4);
      expect(d.opts, d.q).toContain(d.answer);
      expect(seen.has(d.q), `duplicate question: ${d.q}`).toBe(false);
      seen.add(d.q);
      expect(d.tip.length, `tip: ${d.q}`).toBeGreaterThanOrEqual(20);
    }
  });
});
