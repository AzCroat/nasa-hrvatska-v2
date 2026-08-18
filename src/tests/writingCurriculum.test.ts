// src/tests/writingCurriculum.test.ts
//
// Structural + language-hygiene pins for the guided-writing curriculum
// (production-teaching directive, 2026-08-18). The teaching promise this file
// protects: every CEFR level A1–C2 has real writing instruction (A1 had NONE
// before this curriculum existed), every unit's three stages are servable
// (model, frames, checklist), and the Croatian is clean script.

import { describe, it, expect } from 'vitest';
import { WRITING_CURRICULUM, unitsForLevel } from '../data/writingCurriculum';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
const CYRILLIC_RE = /[Ѐ-ӿԀ-ԯ]/;

describe('writingCurriculum — CEFR completeness', () => {
  it('every level A1–C2 has at least 3 units (A1 especially — it had no writing content before)', () => {
    for (const level of LEVELS) {
      expect(unitsForLevel(level).length, `${level} units`).toBeGreaterThanOrEqual(3);
    }
  });

  it('unit ids are unique', () => {
    const ids = WRITING_CURRICULUM.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('writingCurriculum — every stage is servable', () => {
  for (const unit of WRITING_CURRICULUM) {
    it(`${unit.id}: model, structures, frames, checklist all well-formed`, () => {
      // Stage 1 — study
      expect(unit.prompt.length).toBeGreaterThan(10);
      expect(unit.promptEn.length).toBeGreaterThan(10);
      expect(unit.model.length).toBeGreaterThan(50);
      expect(unit.modelEn.length).toBeGreaterThan(50);
      expect(unit.structures.length).toBeGreaterThanOrEqual(2);
      for (const st of unit.structures) {
        expect(st.hr.length, `${unit.id} structure hr`).toBeGreaterThan(0);
        expect(st.why.length, `${unit.id} structure why`).toBeGreaterThan(10);
      }
      // Stage 2 — frames: answers non-empty, hints teach
      expect(unit.frames.length).toBeGreaterThanOrEqual(2);
      for (const f of unit.frames) {
        expect(f.answer.trim().length, `${unit.id} frame answer`).toBeGreaterThan(0);
        expect(f.hint.length, `${unit.id} frame hint`).toBeGreaterThan(10);
      }
      // Stage 3 — write: submittable and checkable
      expect(unit.minWords).toBeGreaterThanOrEqual(15);
      expect(unit.connectives.length).toBeGreaterThanOrEqual(3);
      expect(unit.checklist.length).toBeGreaterThanOrEqual(2);
      const wordCountItem = unit.checklist.find((c) => typeof c.minWords === 'number');
      expect(wordCountItem, `${unit.id} needs a minWords checklist item`).toBeTruthy();
      // Every checklist item must be auto-checkable (minWords OR words list).
      for (const c of unit.checklist) {
        const checkable =
          typeof c.minWords === 'number' || (Array.isArray(c.words) && c.words.length > 0);
        expect(checkable, `${unit.id} checklist '${c.id}' must be auto-checkable`).toBe(true);
      }
    });
  }

  it('minWords grows with level (scaffold difficulty is real)', () => {
    const maxAt = (lvl: (typeof LEVELS)[number]) =>
      Math.max(...unitsForLevel(lvl).map((u) => u.minWords));
    expect(maxAt('A1')).toBeLessThan(maxAt('B2'));
    expect(maxAt('A2')).toBeLessThan(maxAt('C1'));
  });
});

describe('writingCurriculum — Croatian hygiene (script guard companion)', () => {
  it('no Cyrillic anywhere in the curriculum', () => {
    const whole = JSON.stringify(WRITING_CURRICULUM);
    expect(CYRILLIC_RE.test(whole)).toBe(false);
  });

  it('Croatian model texts actually carry diacritics (mojibake/ASCII-flattening guard)', () => {
    // Genuine Croatian prose of this length statistically must contain
    // č/ć/đ/š/ž. A model with none was flattened somewhere in the pipeline.
    for (const unit of WRITING_CURRICULUM) {
      expect(/[čćđšž]/i.test(unit.model), `${unit.id} model has no diacritics`).toBe(true);
    }
  });

  it('structures quote the model text they claim to highlight', () => {
    // Each structure's hr must appear in the unit's model (verbatim substring)
    // so the STUDY stage can genuinely point at it — allowing the composite
    // "A ... B" teaching entries that quote two model fragments joined by
    // an ellipsis.
    for (const unit of WRITING_CURRICULUM) {
      for (const st of unit.structures) {
        const parts = st.hr.split('...').map((p) => p.trim());
        for (const part of parts) {
          expect(
            unit.model.includes(part),
            `${unit.id}: structure fragment "${part}" not found in model`,
          ).toBe(true);
        }
      }
    }
  });
});
