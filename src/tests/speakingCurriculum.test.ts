// src/tests/speakingCurriculum.test.ts
//
// The guided-speaking curriculum's data contract (2026-09-07).
//
// Two of these assertions are here because the WRITING curriculum taught them
// the hard way, and both were real findings on their first run there:
//
//   * THE MODEL MUST PASS ITS OWN CHECKLIST. An exemplar that fails the bar it
//     sets the learner teaches them the bar is decorative. In the writing
//     curriculum the first run of this assertion found two C1 models SHORTER
//     than the minimum they demanded.
//   * A STRUCTURE MUST BE FINDABLE IN THE MODEL. "What to steal from it" is a
//     lie if the thing is not in there — the learner looks for it and it is
//     absent. Discontinuous patterns are allowed and are the honest way to name
//     a structure that spans a clause ("ili … ili …"), but every segment either
//     side of the ellipsis must appear, in order. Eight structures failed this
//     on its first run here and were rewritten against the model.

import { describe, it, expect } from 'vitest';
import {
  SPEAKING_CURRICULUM,
  speakingUnitsForLevel,
  type SpeakingUnit,
} from '../data/speakingCurriculum';
import { checklistSatisfied, countSpokenWords } from '../components/practice/GuidedSpeakingScreen';
import { COACH_MIN_WORDS } from '../lib/speakingCoach';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

/** Verbatim, or an ellipsis pattern whose segments appear in order. */
function modelShows(model: string, hr: string): boolean {
  if (model.includes(hr)) return true;
  if (!hr.includes('…')) return false;
  let at = 0;
  for (const seg of hr
    .split('…')
    .map((s) => s.trim())
    .filter(Boolean)) {
    const i = model.indexOf(seg, at);
    if (i === -1) return false;
    at = i + seg.length;
  }
  return true;
}

describe('speaking curriculum — coverage', () => {
  it('has at least 8 units at every CEFR level', () => {
    for (const level of LEVELS) {
      const units = speakingUnitsForLevel(level);
      expect(units.length, `${level} has ${units.length} units`).toBeGreaterThanOrEqual(8);
    }
  });

  it('every unit id is unique and names its level', () => {
    const ids = SPEAKING_CURRICULUM.map((u) => u.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const u of SPEAKING_CURRICULUM) {
      expect(u.id.startsWith(u.level.toLowerCase() + '-'), `${u.id} vs ${u.level}`).toBe(true);
    }
  });

  it('has no level outside the six', () => {
    for (const u of SPEAKING_CURRICULUM) expect(LEVELS).toContain(u.level);
  });
});

describe('speaking curriculum — every unit is teachable', () => {
  const each = (fn: (u: SpeakingUnit) => void) => SPEAKING_CURRICULUM.forEach(fn);

  it('carries a task in both languages', () => {
    each((u) => {
      expect(u.prompt.length, u.id).toBeGreaterThan(20);
      expect(u.promptEn.length, u.id).toBeGreaterThan(20);
      expect(u.title.length, u.id).toBeGreaterThan(3);
    });
  });

  it('carries a spoken model in both languages', () => {
    each((u) => {
      expect(u.model.length, u.id).toBeGreaterThan(40);
      expect(u.modelEn.length, u.id).toBeGreaterThan(40);
    });
  });

  it('names at least three structures, three rehearsal phrases and three checklist items', () => {
    each((u) => {
      expect(u.structures.length, u.id).toBeGreaterThanOrEqual(3);
      expect(u.rehearse.length, u.id).toBeGreaterThanOrEqual(3);
      expect(u.checklist.length, u.id).toBeGreaterThanOrEqual(3);
      expect(u.usefulPhrases.length, u.id).toBeGreaterThanOrEqual(4);
    });
  });

  it('every structure explains WHY, not just what', () => {
    each((u) =>
      u.structures.forEach((s) => {
        expect(s.hr.length, u.id).toBeGreaterThan(3);
        expect(s.en.length, u.id).toBeGreaterThan(3);
        expect(s.why.length, `${u.id} · ${s.hr}`).toBeGreaterThan(30);
      }),
    );
  });

  it('every rehearsal phrase says what it drills', () => {
    each((u) =>
      u.rehearse.forEach((r) => {
        expect(r.hr.length, u.id).toBeGreaterThan(10);
        expect(r.en.length, u.id).toBeGreaterThan(5);
        expect(r.why.length, `${u.id} · ${r.hr}`).toBeGreaterThan(20);
      }),
    );
  });

  it('every checklist item is checkable — words or a word count, never neither', () => {
    each((u) =>
      u.checklist.forEach((c) => {
        const checkable = typeof c.minWords === 'number' || (c.words?.length ?? 0) > 0;
        expect(checkable, `${u.id} · ${c.id} can never be satisfied`).toBe(true);
        expect(c.label.length, `${u.id} · ${c.id}`).toBeGreaterThan(5);
      }),
    );
  });
});

describe('speaking curriculum — the model holds itself to the same bar', () => {
  it('every model passes its own checklist', () => {
    for (const u of SPEAKING_CURRICULUM) {
      for (const item of u.checklist) {
        expect(
          checklistSatisfied(item, u.model),
          `${u.id}: the model fails its own checklist item "${item.id}" — an exemplar that ` +
            `misses the bar it sets teaches the learner the bar is decorative`,
        ).toBe(true);
      }
    }
  });

  it('every model is at least as long as the floor it sets', () => {
    for (const u of SPEAKING_CURRICULUM) {
      expect(countSpokenWords(u.model), `${u.id} model`).toBeGreaterThanOrEqual(u.minWords);
    }
  });

  it('every named structure is findable in the model', () => {
    for (const u of SPEAKING_CURRICULUM) {
      for (const s of u.structures) {
        expect(
          modelShows(u.model, s.hr),
          `${u.id}: "${s.hr}" is presented as something to steal FROM THE MODEL and is not in it`,
        ).toBe(true);
      }
    }
  });
});

describe('speaking curriculum — the word floors', () => {
  it('never sets a floor below the coach’s own participation threshold', () => {
    // Below COACH_MIN_WORDS `requestSpeakingCoach` returns null without asking,
    // so a unit with a lower floor would offer a submit button that grades
    // nothing — the screen's null branch would fire on a perfectly good answer.
    for (const u of SPEAKING_CURRICULUM) {
      expect(u.minWords, u.id).toBeGreaterThanOrEqual(COACH_MIN_WORDS);
    }
  });

  it('the floor rises with the level, because spoken depth should', () => {
    const floorFor = (level: (typeof LEVELS)[number]) =>
      Math.min(...speakingUnitsForLevel(level).map((u) => u.minWords));
    for (let i = 1; i < LEVELS.length; i++) {
      const lower = floorFor(LEVELS[i - 1]!);
      const higher = floorFor(LEVELS[i]!);
      expect(
        higher,
        `${LEVELS[i]} floor ${higher} vs ${LEVELS[i - 1]} floor ${lower}`,
      ).toBeGreaterThan(lower);
    }
  });
});
