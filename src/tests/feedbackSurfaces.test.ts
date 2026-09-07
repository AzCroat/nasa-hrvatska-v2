// feedbackSurfaces.test.ts — every surface that promises feedback on WRITING
// or SPEECH names its failures (owner directive, 2026-09-07).
//
// The census that day found the silent shapes: the speaking coach card
// rendered nothing on any failure; the exam speaking scorer folded a budget
// pause into "We couldn't score that clearly"; the grammar explainer showed
// "API error 429"; the graded reader said "check your connection" to a
// signed-out learner; the live tutor's mic vanished with no banner; Maja's
// Whisper path had `onError: () => {}`; the pronunciation scorer silently
// switched to on-device recognition; the postcard said "check your
// connection" for everything. None reported to Sentry.
//
// These are SOURCE pins on the wiring — the component tests cover behaviour,
// and a component test that supplies its own props cannot see whether the
// real screen is wired. Each pin names the string or identifier a learner (or
// Sentry) actually meets.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const read = (p: string) => readFileSync(join(__dirname, '..', p), 'utf8');

describe('writing feedback surfaces', () => {
  it('GrammarExplainer calls /api/correct through _aiPost and names failures (no "API error N")', () => {
    const src = read('components/learn/GrammarExplainer.tsx');
    expect(src).toMatch(/_aiPost\('\/api\/correct'/);
    expect(src).not.toMatch(/apiFetch\('\/api\/correct'/);
    expect(src).not.toContain("'API error ' + res.status");
    expect(src).toMatch(/failureFromResponse\(res\)/);
    expect(src).toMatch(/reportAiFailure\('grammar-explainer-writing'/);
  });

  it('the Level Check writing task names the cause instead of one "unavailable right now"', () => {
    const src = read('components/exam/WritingTaskScreen.tsx');
    expect(src).not.toContain('Evaluation is unavailable right now.');
    expect(src).toMatch(/failureFromStatus\(/);
    expect(src).toMatch(/reportAiFailure\('level-check-writing'/);
  });

  it('the postcard names the cause and never shows the learner’s own text as "corrected"', () => {
    const src = read('components/croatia/PostcardScreen.tsx');
    expect(src).not.toContain('Could not reach the AI correction service.');
    expect(src).toMatch(/failureFromResponse\(res\)/);
    expect(src).toMatch(/typeof data\.corrected_text !== 'string'/);
    expect(src).not.toMatch(/data\.corrected_text \|\| userText/);
  });
});

describe('speech feedback surfaces', () => {
  it('the daily speaking coach renders the cause with a retry, never silence', () => {
    const src = read('components/practice/SpeakingScreen.tsx');
    expect(src).toContain('data-testid="coach-failed"');
    expect(src).toContain('data-testid="coach-retry"');
    expect(src).toMatch(/setCoachFailure\(res\.failure\)/);
  });

  it('the exam speaking task reads the scorer’s recorded cause', () => {
    const src = read('components/exam/SpeakingTaskScreen.tsx');
    expect(src).toMatch(/getLastSpeakingScoreFailure\(\)/);
    expect(src).toContain('data-failure-kind={failure?.kind');
    expect(src).toMatch(/nothing counts against you/);
  });

  it('the scorer records WHY it returned null and reports it', () => {
    const src = read('lib/speaking/whisperClaudeScorer.ts');
    expect(src).toMatch(/export function getLastSpeakingScoreFailure/);
    expect(src).toMatch(/reportAiFailure\('assess-speaking'/);
    expect(src).toMatch(/insufficientFailure\(\)/);
  });

  it('the graded reader has a timeout and names the cause', () => {
    const src = read('components/learn/GradedInputScreen.tsx');
    expect(src).toMatch(/ASSESS_TIMEOUT_MS/);
    expect(src).not.toContain('Assessment unavailable — check your connection and try again.');
    expect(src).toContain('data-testid="reader-assess-failed"');
    expect(src).toMatch(/reportAiFailure\('graded-reader-pronunciation'/);
  });

  it('the live tutor explains a failed transcription instead of silently swapping the mic for a text box', () => {
    const src = read('components/croatia/LiveTutorScreen.tsx');
    expect(src).toContain('data-testid="live-tutor-stt-notice"');
    expect(src).toMatch(/setSttNotice\(failure\.message\)/);
  });

  it('Maja shows a transcription error instead of swallowing it', () => {
    const src = read('components/croatia/MajaScreen.tsx');
    expect(src).not.toMatch(/onError:\s*\(\)\s*=>\s*\{\}/);
    expect(src).toMatch(/onError: \(msg: string\) => \{\s*if \(msg\) setErrorMsg\(msg\);/);
  });

  it('the pronunciation scorer says when detailed scoring fell back to on-device recognition', () => {
    const src = read('components/shared/PronunciationScorer.tsx');
    expect(src).toContain('data-testid="pronunciation-service-notice"');
    expect(src).toMatch(/reportAiFailure\('pronunciation-assess'/);
    expect(src).not.toContain("console.warn(\n        'PronunciationScorer: Azure assess failed");
  });
});

describe('the transport', () => {
  it('_aiPost carries a default timeout so no feedback spinner can run forever', () => {
    const src = read('lib/aiPost.ts');
    expect(src).toMatch(/export const AI_POST_TIMEOUT_MS = 35_000/);
    expect(src).toMatch(/setTimeout\(\(\) => controller\.abort\(\), AI_POST_TIMEOUT_MS\)/);
  });
});
