/**
 * povijest-bilingual.test.ts — 7c-i guards: the Povijest culture data carries a
 * complete Croatian-first layer (additive *Hr fields), the bundled client
 * mirror stays byte-identical to the server file, and the Croatian text is
 * real Croatian (diacritics present, no encoding bleed).
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { HISTORY, KINGS } from '../../functions/api/content/_data/cultural/history.js';

type Rec = Record<string, unknown>;

const nonEmpty = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;

describe('HISTORY — bilingual coverage', () => {
  it('intro, every timeline entry, and every hero carry Croatian fields', () => {
    expect(nonEmpty((HISTORY as Rec).introHr)).toBe(true);
    for (const e of HISTORY.timeline as Rec[]) {
      expect(nonEmpty(e.titleHr), `timeline ${e.year} titleHr`).toBe(true);
      expect(nonEmpty(e.textHr), `timeline ${e.year} textHr`).toBe(true);
    }
    for (const h of HISTORY.heroes as Rec[]) {
      expect(nonEmpty(h.roleHr), `${h.name} roleHr`).toBe(true);
      expect(nonEmpty(h.descHr), `${h.name} descHr`).toBe(true);
    }
  });
});

describe('KINGS — bilingual coverage', () => {
  it('intro, eras, dukes, kings, and royal cities carry Croatian fields', () => {
    expect(nonEmpty((KINGS as Rec).introHr)).toBe(true);
    for (const e of KINGS.eras as Rec[]) {
      expect(nonEmpty(e.titleHr), `era ${e.title} titleHr`).toBe(true);
      expect(nonEmpty(e.textHr), `era ${e.title} textHr`).toBe(true);
    }
    for (const group of ['dukes', 'kings', 'royalCities'] as const) {
      for (const item of (KINGS as Rec)[group] as Rec[]) {
        expect(nonEmpty(item.descHr), `${group}: ${item.name} descHr`).toBe(true);
      }
    }
  });
});

describe('Croatian text quality gates', () => {
  const allHr = [
    (HISTORY as Rec).introHr,
    ...(HISTORY.timeline as Rec[]).flatMap((e) => [e.titleHr, e.textHr]),
    ...(HISTORY.heroes as Rec[]).flatMap((h) => [h.roleHr, h.descHr]),
    (KINGS as Rec).introHr,
    ...(KINGS.eras as Rec[]).flatMap((e) => [e.titleHr, e.textHr]),
    ...(KINGS.dukes as Rec[]).map((d) => d.descHr),
    ...(KINGS.kings as Rec[]).map((k) => k.descHr),
    ...(KINGS.royalCities as Rec[]).map((c) => c.descHr),
  ].join(' ');

  it('diacritics are present (the corpus is genuinely Croatian, not ASCII-flattened)', () => {
    expect(/[čćđšž]/.test(allHr)).toBe(true);
  });

  it('no encoding-bleed artifacts in the Croatian corpus', () => {
    expect(/Ä|Å¡|Å¾|Ä‡|â€/.test(allHr)).toBe(false);
  });
});

describe('client mirror stays in sync', () => {
  it('src/data/cultural/history.js is byte-identical to the server file', () => {
    const server = readFileSync('functions/api/content/_data/cultural/history.js', 'utf8');
    const client = readFileSync('src/data/cultural/history.js', 'utf8');
    expect(client).toBe(server);
  });
});
