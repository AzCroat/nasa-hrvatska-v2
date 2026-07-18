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

// ── 7c-ii: Krajevi regions ────────────────────────────────────────────────────
import { REGIONS } from '../../functions/api/content/_data/cultural/regions.js';

interface RegionShape {
  introHr?: unknown;
  sections: Array<{ hHr?: unknown; tHr?: unknown }>;
  timeline: Array<{ eventHr?: unknown }>;
  people: Array<{ roleHr?: unknown; storyHr?: unknown }>;
  facts: unknown[];
  factsHr?: unknown[];
}
const ALL_REGIONS = REGIONS as unknown as Record<string, RegionShape>;

describe('REGIONS — bilingual coverage (7c-ii)', () => {
  it('all 10 regions carry a complete Croatian layer', () => {
    const keys = Object.keys(ALL_REGIONS);
    expect(keys.length).toBeGreaterThanOrEqual(10);
    for (const k of keys) {
      const r = ALL_REGIONS[k]!;
      expect(nonEmpty(r.introHr), `${k}.introHr`).toBe(true);
      for (const [i, s] of r.sections.entries()) {
        expect(nonEmpty(s.hHr), `${k}.sections[${i}].hHr`).toBe(true);
        expect(nonEmpty(s.tHr), `${k}.sections[${i}].tHr`).toBe(true);
      }
      for (const [i, t] of r.timeline.entries()) {
        expect(nonEmpty(t.eventHr), `${k}.timeline[${i}].eventHr`).toBe(true);
      }
      for (const [i, p] of r.people.entries()) {
        expect(nonEmpty(p.roleHr), `${k}.people[${i}].roleHr`).toBe(true);
        expect(nonEmpty(p.storyHr), `${k}.people[${i}].storyHr`).toBe(true);
      }
      expect(Array.isArray(r.factsHr), `${k}.factsHr`).toBe(true);
      expect(r.factsHr!.length, `${k}.factsHr length`).toBe(r.facts.length);
    }
  });

  it('regions Croatian corpus has diacritics and no encoding bleed', () => {
    const allHr = Object.values(ALL_REGIONS)
      .flatMap((r) => [
        r.introHr,
        ...r.sections.flatMap((s) => [s.hHr, s.tHr]),
        ...r.timeline.map((t) => t.eventHr),
        ...r.people.flatMap((p) => [p.roleHr, p.storyHr]),
        ...(r.factsHr ?? []),
      ])
      .join(' ');
    expect(/[čćđšž]/.test(allHr)).toBe(true);
    expect(/Ä|Å¡|Å¾|Ä‡|â€/.test(allHr)).toBe(false);
  });

  it('client regions mirror is byte-identical to the server file', () => {
    const server = readFileSync('functions/api/content/_data/cultural/regions.js', 'utf8');
    const client = readFileSync('src/data/cultural/regions.js', 'utf8');
    expect(client).toBe(server);
  });
});
