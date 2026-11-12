/**
 * courseUnitTitles — the authored names, held to the lessons they describe.
 *
 * THE DRIFT THIS EXISTS TO CATCH, and it is the reason the units themselves are
 * derived rather than listed. A unit's membership comes from chunking the spine,
 * so a reorder moves membership silently — and a TITLE is a claim about five
 * specific lessons. "The Cases Begin" over a unit that no longer contains
 * `cases` is the CEFR-badge failure in miniature: a sentence consistent with
 * nothing that matters, with nothing able to notice.
 *
 * So BOUNDARIES is a frozen literal: the first and last lesson of every unit as
 * the course stands. It is deliberately NOT derived — a derivation would agree
 * with whatever the spine says today, which is precisely the thing under test
 * ("a test that restates production data cannot check production data", from the
 * other side: here the restatement IS the assertion). A reorder fails and names
 * the unit whose title has to be re-read, which is a decision for a person.
 */
import { describe, it, expect } from 'vitest';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';
import { buildCourseUnits } from '../lib/courseUnits';
import { COURSE_UNIT_TITLES } from '../data/courseUnitTitles';
import type { CurriculumEntry } from '../lib/curriculum';

const units = buildCourseUnits(CURRICULUM as unknown as CurriculumEntry[], COURSE_UNIT_TITLES);

/** [first lesson id, last lesson id] per unit — re-frozen on 2026-11-12 for the Croaticum-baseline restructure. */
const BOUNDARIES: Readonly<Record<string, readonly [string, string]>> = {
  'A1-1': ['alphabet', 'demonstratives'],
  'A1-2': ['basic-questions', 'possessives'],
  'A1-3': ['family-people', 'cases'],
  'A1-4': ['accusative-intro', 'food-drink'],
  'A1-5': ['clothes-appearance', 'past-tense'],
  'A1-6': ['past-questions-negation', 'object-pronouns'],
  'A1-7': ['reflexive-verbs', 'quantity'],
  'A1-8': ['ordinals-dates', 'directions-town'],
  'A2-1': ['present', 'accusative-deep'],
  'A2-2': ['plural-cases', 'house-home'],
  'A2-3': ['describing-people', 'modal-verbs-a2'],
  'A2-4': ['comparatives-a2', 'hobbies-free-time'],
  'A2-5': ['travel-transport', 'impersonal'],
  'B1-1': ['genitive-deep', 'aspect-imperfective'],
  'B1-2': ['aspect-perfective', 'infinitive-vs-da'],
  'B1-3': ['time-clauses', 'relative-deep'],
  'B1-4': ['telling-a-story', 'bureaucracy'],
  'B1-5': ['renting-flat', 'environment-nature'],
  'B1-6': ['food-cooking', 'food-cooking'],
  'B2-1': ['clitics', 'aspect-negation'],
  'B2-2': ['participial-adjectives', 'unreal-conditions'],
  'B2-3': ['wishes-regrets', 'prepositions-advanced'],
  'B2-4': ['degrees-intensity', 'abstract-topics'],
  'B2-5': ['writing-registers', 'business-economy'],
  'B2-6': ['politics-society', 'literature-canon'],
  'C1-1': ['clitics-advanced', 'aorist-imperfekt'],
  'C1-2': ['verbal-nouns', 'collective-numbers'],
  'C1-3': ['clause-types', 'discourse-particles'],
  'C1-4': ['idioms-register', 'debate-persuasion'],
  'C1-5': ['formal-speech', 'law-administration'],
  'C1-6': ['science-technology', 'diaspora-identity'],
  'C2-1': ['norma-i-uzus', 'brojevi-norma'],
  'C2-2': ['slaganje-suptilnosti', 'kondicional-drugi'],
  'C2-3': ['glagolski-nacini', 'humor-jezicni'],
  'C2-4': ['administrativni-stil', 'razgovorni-stil'],
  'C2-5': ['stari-tekstovi', 'spontani-govor'],
  'C2-6': ['prevodjenje-strucno', 'jezik-i-drustvo'],
};

describe('every derived unit has exactly one authored title', () => {
  it('has no unit without a title', () => {
    const missing = units.filter((u) => !COURSE_UNIT_TITLES[u.id]).map((u) => u.id);
    expect(missing, 'author a title in src/data/courseUnitTitles.ts for these units').toEqual([]);
  });

  // The other staleness direction: a title for a unit that no longer exists is
  // guarding nothing while reading like coverage.
  it('has no title for a unit that does not exist', () => {
    const ids = new Set(units.map((u) => u.id));
    const orphans = Object.keys(COURSE_UNIT_TITLES).filter((k) => !ids.has(k));
    expect(orphans, 'these titles describe units the spine no longer produces').toEqual([]);
  });

  it('gives each unit a distinct title', () => {
    const titles = units.map((u) => u.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('writes subtitles as what the learner will be able to DO', () => {
    for (const u of units) {
      expect(u.subtitle, u.id).toMatch(/\.$/);
      // Learner-facing plain English, the spine's `objectives` voice. Grammar
      // jargon is allowed; an unglossed abbreviation is not.
      expect(u.subtitle.length, u.id).toBeLessThan(160);
    }
  });
});

describe('a title still describes the lessons it spans', () => {
  it('covers every unit', () => {
    expect(Object.keys(BOUNDARIES).sort()).toEqual(units.map((u) => u.id).sort());
  });

  it.each(units.map((u) => [u.id, u] as const))('%s spans the same lessons', (id, unit) => {
    const pinned = BOUNDARIES[id];
    expect(pinned, `no boundary pinned for ${id}`).toBeTruthy();
    const actual: [string, string] = [
      unit.lessons[0]!.id,
      unit.lessons[unit.lessons.length - 1]!.id,
    ];
    expect(
      actual,
      `unit ${id} ("${unit.title}") now spans ${actual[0]}…${actual[1]} instead of ` +
        `${pinned![0]}…${pinned![1]}. Re-read the title and subtitle against the five ` +
        `lessons it actually covers, then update BOUNDARIES.`,
    ).toEqual([pinned![0], pinned![1]]);
  });
});
