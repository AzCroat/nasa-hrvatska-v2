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
  'A1-1': ['alphabet', 'biti-questions-negation'],
  'A1-2': ['gender', 'plural-irregular'],
  'A1-3': ['jobs-professions', 'numbers-11-1000'],
  'A1-4': ['zvati-se', 'sibilarization'],
  'A1-5': ['fleeting-a', 'present-tense-verbs'],
  'A1-6': ['negation', 'accusative-animate'],
  'A1-7': ['imati-nemati', 'smjeti-permission'],
  'A1-8': ['money-exchange', 'za-accusative'],
  'A1-9': ['accusative-pronouns', 'at-the-restaurant'],
  'A1-10': ['verbs-iti-jeti', 'prepositions-place'],
  'A1-11': ['locative-pronouns', 'phone-call'],
  'A1-12': ['past-tense', 'weather-seasons'],
  'A1-13': ['future-tense', 'object-pronouns'],
  'A1-14': ['giving-and-sending', 'daily-routine'],
  'A1-15': ['reflexive-past-future', 'instrumental-means'],
  'A1-16': ['instrumental-place', 'nemati-genitive'],
  'A1-17': ['genitive-prepositions', 'ordinals-dates'],
  'A1-18': ['dates-years', 'pluralia-tantum'],
  'A1-19': ['sports-free-time', 'imperative-negative'],
  'A1-20': ['infinitive-ci', 'travel-croatia'],
  'A2-1': ['present', 'relational-adjectives'],
  'A2-2': ['possessive-adjectives-cases', 'svoj'],
  'A2-3': ['clitic-order', 'school-studies'],
  'A2-4': ['grocery-shopping', 'plural-cases'],
  'A2-5': ['prepositions-action', 'informal-email'],
  'A2-6': ['house-home', 'aspect-in-past'],
  'A2-7': ['adverbs', 'imperative-review'],
  'A2-8': ['vocative-review', 'dative-adjectives'],
  'A2-9': ['possessive-dative', 'car-and-traffic'],
  'A2-10': ['travel-transport', 'celebrations-holidays'],
  'B1-1': ['comparatives-a2', 'appearance-compliments'],
  'B1-2': ['aspect-imperfective', 'time-clauses'],
  'B1-3': ['real-conditions', 'verbs-with-instrumental'],
  'B1-4': ['job-interview', 'position-placement'],
  'B1-5': ['genitive-deep', 'time-genitive'],
  'B1-6': ['time-duration', 'feelings-inner-life'],
  'B1-7': ['nouns-en-et', 'relative-koji'],
  'B1-8': ['relative-deep', 'verbs-vati-jem'],
  'B1-9': ['croats-abroad', 'complaints-problems'],
  'B1-10': ['bureaucracy', 'food-cooking'],
  'B2-1': ['noun-peculiarities-a', 'literacy-and-language'],
  'B2-2': ['noun-peculiarities-e', 'language-history'],
  'B2-3': ['internationalisms', 'politics-society'],
  'B2-4': ['relative-pronouns-cases', 'literature-canon'],
  'B2-5': ['indefinite-pronouns-cases', 'health-prevention'],
  'B2-6': ['agreement-special-nouns', 'small-talk-fluency'],
  'B2-7': ['reflexive-sebe', 'higher-education'],
  'B2-8': ['conditional', 'business-economy'],
  'B2-9': ['coordinate-clauses', 'prepositions-advanced'],
  'B2-10': ['dependent-clauses-b2', 'modal-nuance'],
  'B2-11': ['genitive-of-negation', 'hedging-precision'],
  'B2-12': ['reported-speech-b2', 'argument-structure'],
  'B2-13': ['abstract-topics', 'meetings-negotiation'],
  'C1-1': ['clitics-advanced', 'abbreviations'],
  'C1-2': ['brojevi-norma', 'comma-basics'],
  'C1-3': ['word-order-emphasis', 'verb-government'],
  'C1-4': ['aspect-nuance', 'text-connectors'],
  'C1-5': ['clause-types', 'multi-subject-agreement'],
  'C1-6': ['slaganje-suptilnosti', 'ethnonyms'],
  'C1-7': ['objective-genitive', 'hypocoristics-dvojica'],
  'C1-8': ['sklonidba-iznimke', 'diminutives-augmentatives'],
  'C1-9': ['indefinite-adjectives', 'idioms-register'],
  'C1-10': ['depersonalization', 'academic-writing'],
  'C1-11': ['aorist-imperfekt', 'debate-persuasion'],
  'C1-12': ['formal-speech', 'law-administration'],
  'C1-13': ['science-technology', 'diaspora-identity'],
  'C2-1': ['norma-i-uzus', 'glagolski-nacini'],
  'C2-2': ['stilske-figure', 'administrativni-stil'],
  'C2-3': ['publicisticki-stil', 'stari-tekstovi'],
  'C2-4': ['sinteza-izvora', 'prevodjenje-strucno'],
  'C2-5': ['uredjivanje-teksta', 'jezik-i-drustvo'],
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
