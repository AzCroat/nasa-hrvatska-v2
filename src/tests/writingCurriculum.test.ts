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
  it('every level A1–C2 has at least 8 units (3 → 8 on 2026-09-05; A1 had no writing content before 2026-08-18)', () => {
    // At three units a level's writing was exhausted in three sessions and the
    // rotation served the same model again on the fourth. Eight is the floor
    // of the "8–10 per level" target from the 2026-09-04 content census.
    for (const level of LEVELS) {
      expect(unitsForLevel(level).length, `${level} units`).toBeGreaterThanOrEqual(8);
    }
  });

  it('unit ids are unique', () => {
    const ids = WRITING_CURRICULUM.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every unit id is prefixed with its own level (a unit filed at the wrong level is invisible to pickUnit)', () => {
    for (const u of WRITING_CURRICULUM) {
      expect(u.id.startsWith(`${u.level.toLowerCase()}-`), `${u.id} is level ${u.level}`).toBe(
        true,
      );
    }
  });

  it('titles are unique within a level (the header shows "level · title", so two alike read as a repeat)', () => {
    for (const level of LEVELS) {
      const titles = unitsForLevel(level).map((u) => u.title);
      expect(new Set(titles).size, `${level} titles`).toBe(titles.length);
    }
  });

  it('a level is not eight variations on one register: formal AND personal address at B1–C1, formal at C2', () => {
    // Formal register shows in the model's frame; personal in the address. C2
    // is exempt from the personal half on purpose: its spread is essay,
    // analysis, portrait, expert opinion and literary miniature — the level's
    // descriptor is register and nuance, not letters to friends.
    const FORMAL = /Poštovani|S poštovanjem|Predmet ocjene/;
    const PERSONAL = /\b(Draga|Dragi|Bog)\b/;
    for (const level of ['B1', 'B2', 'C1', 'C2'] as const) {
      const models = unitsForLevel(level).map((u) => u.model);
      expect(
        models.some((m) => FORMAL.test(m)),
        `${level} has a formal unit`,
      ).toBe(true);
      if (level !== 'C2')
        expect(
          models.some((m) => PERSONAL.test(m)),
          `${level} has a personal unit`,
        ).toBe(true);
    }
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
      // The minWords checklist item must agree with the unit's own gate, or the
      // learner sees a ticked box on a disabled submit button.
      expect(wordCountItem!.minWords).toBe(unit.minWords);
      // Checklist ids unique within the unit (they are React keys).
      const cids = unit.checklist.map((c) => c.id);
      expect(new Set(cids).size, `${unit.id} checklist ids`).toBe(cids.length);
    });
  }

  it('the model text itself passes its own checklist (the model is the proof the task is doable)', () => {
    // Mirrors GuidedWritingScreen.checklistDone: minWords by whitespace split,
    // words by case-insensitive substring. A model that fails its own checklist
    // sets the learner a bar the exemplar does not clear.
    for (const unit of WRITING_CURRICULUM) {
      const low = unit.model.toLowerCase();
      const wc = unit.model.trim().split(/\s+/).filter(Boolean).length;
      for (const c of unit.checklist) {
        if (typeof c.minWords === 'number') {
          expect(
            wc,
            `${unit.id}: model has ${wc} words, checklist wants ${c.minWords}`,
          ).toBeGreaterThanOrEqual(c.minWords);
        } else {
          expect(
            c.words!.some((w) => low.includes(w.toLowerCase())),
            `${unit.id}: model does not satisfy checklist '${c.id}' (${c.words!.join(' | ')})`,
          ).toBe(true);
        }
      }
    }
  });

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
