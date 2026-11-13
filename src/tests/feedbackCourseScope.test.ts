/**
 * feedbackCourseScope — AI feedback on writing and speech stays inside what the course has
 * taught (owner reports, 2026-11-13: "AI feedback, but you shouldn't be working with material
 * that would require padeži knowledge if it hasn't been taught"; "Words shouldn't be changing
 * if padeži isn't taught yet").
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { sanitizeTaught, taughtScopeRule } from '../../functions/api/_taughtScope.js';

describe('the course-scope rule', () => {
  it('adds nothing when no list is sent (the Level Check, or no course loaded)', () => {
    expect(taughtScopeRule(sanitizeTaught(undefined))).toBe('');
  });

  it('before any case is taught, no ending may change', () => {
    const rule = taughtScopeRule(sanitizeTaught(['singular', 'plural']));
    expect(rule).toMatch(/NOT been taught any case/);
    expect(rule).toMatch(/Do not change, correct or comment on any word ending/);
    expect(rule).toMatch(/only this grammar: singular, plural/);
  });

  it('with some cases taught, only those may be corrected', () => {
    const rule = taughtScopeRule(sanitizeTaught(['accusative', 'case']));
    expect(rule).toMatch(/only: accusative/);
    expect(rule).toMatch(/Never change an ending for nominative, genitive, dative/);
  });

  it('an empty list means nothing has been taught yet', () => {
    expect(taughtScopeRule(sanitizeTaught([]))).toMatch(/NO grammar yet/);
  });
});

describe('both endpoints apply it, and every practice screen sends the list', () => {
  it('the writing evaluator appends the rule at request time', () => {
    const src = readFileSync('functions/api/correct.js', 'utf8');
    expect(src).toMatch(/taughtScopeRule\(sanitizeTaught\(reqBody\.taught\)\)/);
  });

  it('the speaking coach puts the rule in the request', () => {
    const src = readFileSync('functions/api/speaking-coach.js', 'utf8');
    expect(src).toMatch(/taughtScopeRule\(sanitizeTaught\(reqBody\.taught\)\)/);
    expect(readFileSync('src/lib/speakingCoach.ts', 'utf8')).toMatch(/taught \? \{ taught \}/);
  });

  it.each([
    'src/components/learn/LessonProduceStep.tsx',
    'src/components/learn/UnitProductionScreen.tsx',
    'src/components/practice/GuidedWritingScreen.tsx',
    'src/components/practice/WritingScreen.tsx',
    'src/components/practice/GuidedSpeakingScreen.tsx',
  ])('%s sends the taught list', (file) => {
    expect(readFileSync(file, 'utf8')).toMatch(/taught: taughtTermsList\(\)/);
  });

  it('the Level Check does NOT scope its marking (it tests a whole level)', () => {
    expect(readFileSync('src/components/exam/WritingTaskScreen.tsx', 'utf8')).not.toMatch(
      /taughtTermsList/,
    );
  });
});
