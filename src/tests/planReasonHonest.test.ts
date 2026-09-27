/**
 * "Today leans into X" may only name an X today actually contains.
 *
 * Found walking a new learner's day in a browser (2026-09-27): after the day's
 * Genitive drill wrote its first ledger event, Home's card read "Today leans into
 * vocabulary — the least-practiced skill at A2." over a plan of a lesson, the Alphabet
 * quiz, Genitive, Shadowing and City of the Day — no vocabulary in it at all. Two
 * defects composed: the line was computed on every RENDER from the live ledger (so the
 * first graded activity rewrote a plan built that morning), and it named the weakest
 * skill ANYWHERE rather than one the plan serves. The next-step engine gave the same
 * sentence as its reason for a speaking or writing exercise.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { recordMasteryEvent, buildPlanReason, MIN_SAMPLES } from '../lib/masteryLedger';
import { newSession, type SessionActivity } from '../lib/dailySessionStore';

const PLAN: SessionActivity[] = [
  {
    id: 'curriculum_alphabet',
    label: 'Alphabet lesson',
    screen: 'animlesson',
    category: 'grammar-lesson',
  },
  { id: 'g', label: 'Genitive', screen: 'genitivedrill', category: 'genitive' },
  { id: 's', label: 'Shadowing', screen: 'shadowing', category: 'speaking' },
  { id: 'c', label: 'City of the Day', screen: 'cityofday', category: 'culture' },
] as SessionActivity[];

beforeEach(() => localStorage.clear());

describe('the plan reason names only a skill the plan contains', () => {
  it('the browser case: one grammar event must not produce "leans into vocabulary"', () => {
    recordMasteryEvent({ level: 'A2', skill: 'grammar', score: 0.4 });
    // Unrestricted, the ledger's first untested skill is vocabulary — the old line.
    expect(buildPlanReason('A2')).toContain('vocabulary');
    const s = newSession('A2', PLAN, []);
    expect(s.planReason ?? '').not.toContain('vocabulary');
    expect(s.planReason).toMatch(/grammar|speaking/);
  });

  it('a restricted reason never names a skill outside its set', () => {
    for (const skill of ['vocab', 'grammar', 'reading', 'listening', 'speaking', 'writing']) {
      for (let i = 0; i < MIN_SAMPLES + 2; i++) {
        recordMasteryEvent({
          level: 'B1',
          skill: skill as never,
          score: skill === 'vocab' ? 0.2 : 0.6,
        });
      }
    }
    // vocab is weakest overall; restricted to speaking it must say speaking or nothing.
    const r = buildPlanReason('B1', ['speaking']);
    expect(r).toContain('speaking');
    expect(r).not.toContain('vocabulary');
  });

  it('an empty set, or all-strong within the set, says nothing rather than generalise', () => {
    for (let i = 0; i < MIN_SAMPLES + 2; i++)
      recordMasteryEvent({ level: 'B1', skill: 'speaking', score: 0.95 });
    expect(buildPlanReason('B1', [])).toBeNull();
    expect(buildPlanReason('B1', [null])).toBeNull();
    expect(buildPlanReason('B1', ['speaking'])).toBeNull();
  });

  it('the reason is FROZEN on the plan: later practice does not rewrite it', () => {
    const s = newSession('A2', PLAN, []);
    expect(s.planReason).toBeUndefined(); // empty ledger at build → nothing claimed
    recordMasteryEvent({ level: 'A2', skill: 'grammar', score: 0.3 });
    expect(s.planReason).toBeUndefined(); // the stored plan did not change
  });

  it('Home reads the stored reason, not a live ledger computation', () => {
    const src = readFileSync('src/components/home/HomeTab.tsx', 'utf8');
    expect(src).toMatch(/planReason=\{session\.planReason \?\? null\}/);
    expect(src).not.toMatch(/buildPlanReason\(/);
  });

  it('the next-step production rung restricts its reason to the skill it recommends', () => {
    const src = readFileSync('src/lib/nextStep.ts', 'utf8');
    expect(src).toMatch(
      /buildPlanReason\(userCefr as CefrLevel, \[weak === 'speak' \? 'speaking' : 'writing'\]\)/,
    );
  });
});
