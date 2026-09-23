/**
 * masterySkillsReachable.test.ts — a skill the ledger can never measure poisons
 * every decision that compares it with one it can.
 *
 * READING WAS THAT SKILL. `recordExerciseOutcome` fires only from
 * `completeExercise`, and no `EXERCISE_COMPLETION` row carried
 * `activityType: 'reading'` — both reading screens grade and award themselves
 * (the `writing_guided` / `relpron` shape) and passed `'reading'` to `award`,
 * which reaches the XP and quest path and nothing else. So
 * `getMasteryProfile().reading` stayed `undefined` forever.
 *
 * That is not a dormant gap, because `weakestReceptiveKind` OVERRIDES the
 * comprehension slot's alternation outright (`weakest ?? (alternation)`), and
 * an untested cell scores maximum need by design — correctly, since an
 * unmeasured skill deserves priority. With reading permanently unmeasurable,
 * the moment listening reached `tested` (MIN_SAMPLES, "a week of honest work")
 * the answer became 'reading' and could never change.
 *
 * MEASURED against the REAL slot, 40 sessions per level: before the fix,
 * listening 0/40 and reading 40/40 at A2, B1, B2 and C1. The comprehension
 * slot exists BECAUSE listening was running at 4-5% of sessions; this had
 * quietly taken it to zero — worse than what it was built to fix.
 *
 * The guard is the REACHABILITY question, not an assertion about reading:
 * every skill the ledger reports must have some production path that can
 * record it. A test naming `reading` goes stale the moment a seventh skill is
 * added with the same hole.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { EXERCISE_COMPLETION } from '../lib/completion/exerciseRegistry';
import {
  recordMasteryEvent,
  weakestReceptiveKind,
  getMasteryProfile,
  MIN_SAMPLES,
} from '../lib/masteryLedger';

/** The skills `ACTIVITY_TO_SKILL` can produce — the ledger's whole vocabulary. */
const SKILLS = ['grammar', 'vocab', 'reading', 'listening', 'speaking', 'writing'] as const;
/** activityType -> skill, mirrored from the ledger's own map. */
const ACTIVITY_FOR: Record<string, string> = {
  grammar: 'grammar',
  vocabulary: 'vocab',
  vocab: 'vocab',
  reading: 'reading',
  listening: 'listening',
  speaking: 'speaking',
  writing: 'writing',
};

function sourceFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === 'tests' || e === '__tests__' || e.startsWith('.')) continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) sourceFiles(p, out);
    else if (/\.(ts|tsx)$/.test(p) && !/\.test\./.test(p)) out.push(p);
  }
  return out;
}
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');

/**
 * Every skill some production file can actually record, by either route:
 * a registry row's activityType, or a direct `recordExerciseOutcome` /
 * `recordMasteryEvent` naming the skill. Comments are stripped first — this
 * file's own prose names every skill, and so does the registry's.
 */
function recordableSkills(): Map<string, string[]> {
  const found = new Map<string, string[]>();
  const note = (skill: string, where: string) =>
    found.set(skill, [...(found.get(skill) ?? []), where]);

  for (const [key, row] of Object.entries(EXERCISE_COMPLETION)) {
    const t = (row as { activityType?: string }).activityType;
    const skill = t ? ACTIVITY_FOR[t] : undefined;
    if (skill) note(skill, `registry:${key}`);
  }
  for (const f of sourceFiles('src')) {
    const src = strip(readFileSync(f, 'utf8'));
    if (!/recordMasteryEvent|recordExerciseOutcome/.test(src)) continue;
    if (f.endsWith('masteryLedger.ts')) continue; // declares them; records nothing
    for (const m of src.matchAll(/skill:\s*'(\w+)'/g)) {
      if ((SKILLS as readonly string[]).includes(m[1]!)) note(m[1]!, f);
    }
    for (const m of src.matchAll(/activityType:\s*'(\w+)'/g)) {
      const skill = ACTIVITY_FOR[m[1]!];
      if (skill) note(skill, f);
    }
  }
  return found;
}

describe('every skill the ledger reports can actually be measured', () => {
  const reachable = recordableSkills();

  it('the derivation finds real writers at all — anti-vacuity', () => {
    // Without this, a renamed helper makes every assertion below pass trivially.
    expect(Object.keys(EXERCISE_COMPLETION).length).toBeGreaterThan(200);
    expect([...reachable.values()].flat().length).toBeGreaterThan(200);
  });

  it.each(SKILLS)('%s has a production path that records it', (skill) => {
    const where = reachable.get(skill) ?? [];
    expect(
      where.length,
      `Nothing in src/ can record ${skill} evidence. An unmeasurable skill is ` +
        `permanently "untested", which scores MAXIMUM need — so every ` +
        `comparison against a measurable skill resolves to it forever.`,
    ).toBeGreaterThan(0);
  });

  it('reading is recordable from practice, not only from the Level Check', () => {
    // The specific hole, kept as its own assertion because the general one
    // above would be satisfied by an assessment-only path — which is exactly
    // what the speaking coach had when daily speech recorded nothing.
    const where = reachable.get('reading') ?? [];
    const fromPractice = where.filter((w) => w.includes('src/components'));
    expect(fromPractice.length, `reading is recorded only by: ${where.join(', ')}`).toBeGreaterThan(
      0,
    );
  });
});

describe('the receptive picker cannot latch on an unmeasurable skill', () => {
  beforeEach(() => localStorage.clear());

  it('answers null once BOTH receptive skills are measured and strong', () => {
    for (let i = 0; i < MIN_SAMPLES; i++) {
      recordMasteryEvent({ level: 'B1', skill: 'listening', score: 0.8 });
      recordMasteryEvent({ level: 'B1', skill: 'reading', score: 0.8 });
    }
    const p = getMasteryProfile('B1');
    expect(p.listening?.tested).toBe(true);
    expect(p.reading?.tested, 'reading never became tested — the hole is back').toBe(true);
    // null hands the slot back to its own alternation, which is the behaviour
    // the comprehension guarantee was measured against.
    expect(weakestReceptiveKind('B1')).toBeNull();
  });

  it('still names the genuinely weaker skill when the evidence says so', () => {
    // The other direction: the override must keep working. Replacing the latch
    // with "always null" would pass the test above and destroy the feature.
    for (let i = 0; i < MIN_SAMPLES; i++) {
      recordMasteryEvent({ level: 'B1', skill: 'listening', score: 0.2 });
      recordMasteryEvent({ level: 'B1', skill: 'reading', score: 0.95 });
    }
    expect(weakestReceptiveKind('B1')).toBe('listening');
  });
});

// ───────────────────────────────────────────────────────────────────────────
// THE EFFECT, NOT THE MENTION
// ───────────────────────────────────────────────────────────────────────────
//
// MUTATION-FOUND. The source-derived guard above passes as long as the file
// CONTAINS `recordExerciseOutcome({ activityType: 'reading', … })`. Dropping
// `score`/`total` at the `onComplete` boundary — which is exactly the shape
// the bug had — leaves the call in place, makes the adapter return early on a
// missing score, and records nothing. Suite stayed green.
//
// That is `couplingClearingPath`'s trap one level deeper: there an IMPORT
// satisfied a guard written about a CALL; here a CALL satisfies a guard
// written about an EFFECT. So this block finishes the REAL quiz and asks the
// REAL ledger whether it learned anything.
import {
  render as rtlRender,
  screen as rtlScreen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import React from 'react';

const STORY = {
  id: 'ledger_probe',
  title: 'Ledger Probe',
  titleEn: 'Ledger Probe',
  level: 'A1' as const,
  focus: 'Testing',
  icon: '🔬',
  duration: 2,
  intro: 'Intro.',
  paragraphs: [{ hr: 'Ana ide.', en: 'Ana goes.' }],
  vocabulary: [],
  quiz: [{ q: 'Who goes?', opts: ['Ana', 'Ivan'], correct: 0 }],
};

vi.mock('../lib/contentClient', () => ({
  getStoryCatalog: vi.fn(async () => [STORY]),
  getStory: vi.fn(async () => STORY),
}));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/recentReads', () => ({
  recordStoryRead: vi.fn(),
  getRecentReads: vi.fn(() => []),
  getRecentReadsExtended: vi.fn(() => []),
}));
vi.mock('../lib/audio.js', () => ({
  unlockAudio: vi.fn(),
  ttsFetch: vi.fn(async () => null),
  blobToBase64: vi.fn(async () => ''),
  getLastTtsFailure: vi.fn(() => null),
  describeTtsFailure: vi.fn(() => ''),
}));
vi.mock('../data', () => ({ speak: vi.fn() }));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({
    stats: { vs: [] as string[], lc: 0, gc: 0, xp: 0 },
    setStats: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
    writeDelta: vi.fn(),
  }),
}));

describe('finishing a graded read actually teaches the ledger', () => {
  beforeEach(() => localStorage.clear());

  it('records reading evidence with the score the learner earned', async () => {
    expect(getMasteryProfile('A1').reading).toBeUndefined();
    const GradedInputScreen = (await import('../components/learn/GradedInputScreen')).default;
    rtlRender(
      React.createElement(GradedInputScreen, { goBack: vi.fn(), initialStoryId: STORY.id }),
    );
    fireEvent.click(await rtlScreen.findByTestId('graded-story-start-quiz', {}, { timeout: 5000 }));
    fireEvent.click(await rtlScreen.findByTestId('graded-story-quiz-option-0'));
    // One question, so the advance button reads "See Results"; the done screen
    // is what carries Continue, which is the control that calls onComplete.
    fireEvent.click(await rtlScreen.findByRole('button', { name: /see results/i }));
    fireEvent.click(await rtlScreen.findByRole('button', { name: /continue/i }));

    await waitFor(() => {
      const r = getMasteryProfile('A1').reading;
      expect(r, 'the graded reader finished and the ledger learned nothing').toBeDefined();
      // The SCORE has to survive the onComplete boundary, not just the call.
      expect(r!.score).toBe(1);
      expect(r!.samples).toBe(1);
    });
  });
});
