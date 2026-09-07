// wrongAnswerHelp.test.tsx — a wrong answer now says what YOU chose and why it
// does not fit (owner recommendation 7, 2026-09-07).
//
// The gap: the item's `tip` is the same line a learner sees when they get it
// RIGHT. It states the rule; it never names their choice. `/api/explain-error`
// does, and it reached 10 of ~170 practice screens — none of the 109
// ModeDrill-backed drills that are the whole practice programme.
//
// The layering is the load-bearing part and is pinned here: the free
// rule-based contrast renders immediately, and the CLAUDE call happens only
// when the learner presses the button. Firing it automatically would put a
// per-learner AI cost on the commonest event in the app, against a $10/month
// ceiling and a 300-turn daily quota.
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import fs from 'fs';
import path from 'path';

const aiPost = vi.fn();
vi.mock('../lib/aiPost', () => ({ _aiPost: (...a: unknown[]) => aiPost(...a) }));

import { contrastAnswers } from '../lib/answerContrast';
import WrongAnswerHelp from '../components/shared/WrongAnswerHelp';

beforeEach(() => {
  aiPost.mockReset();
  aiPost.mockResolvedValue({
    ok: true,
    json: async () => ({
      explanation: 'Because the verb takes the genitive.',
      rule: 'Genitive after negation',
      tip: 'Negate, then use the genitive.',
      example: 'Nemam knjige.',
    }),
  });
});

describe('the contrast is derived and never invents a difference', () => {
  it('names both forms and what each can be', () => {
    const c = contrastAnswers('knjigu', 'knjige')!;
    expect(c.chosen.word).toBe('knjigu');
    expect(c.answer.word).toBe('knjige');
    expect(c.chosen.readings.length).toBeGreaterThan(0);
    expect(c.answer.readings.length).toBeGreaterThan(0);
  });

  it('says the two endings can never be the same case, when that is true', () => {
    // -u and -om share no case reading at all.
    const c = contrastAnswers('gradu', 'gradom')!;
    expect(c.headline).toMatch(/never be the same case/);
  });

  it('does NOT claim a case difference when both endings permit the same cases', () => {
    const c = contrastAnswers('gradovima', 'ženama');
    // Both are D/L/I plural. Saying "wrong case" here would be false.
    expect(c!.headline).toMatch(/not what separates them/);
  });

  it('returns nothing at all for a multi-word option', () => {
    // The ending rules say nothing about word order or clitic position.
    expect(contrastAnswers('zove se Ivan', 'se zove Ivan')).toBeNull();
  });

  it('returns nothing when the two are the same word', () => {
    expect(contrastAnswers('grad', 'Grad')).toBeNull();
  });

  it('returns nothing when neither form can be read', () => {
    expect(contrastAnswers('!!', '??')).toBeNull();
  });

  it('caps the readings it lists rather than printing six lines of hedging', () => {
    const c = contrastAnswers('knjige', 'knjigu')!;
    expect(c.chosen.readings.length).toBeLessThanOrEqual(3);
  });
});

describe('the panel', () => {
  it('shows the contrast with NO AI call', () => {
    render(<WrongAnswerHelp chosen="gradu" answer="gradom" context="Idem s ____." />);
    expect(screen.getByTestId('answer-contrast')).toBeTruthy();
    expect(screen.getByTestId('contrast-chosen').textContent).toContain('gradu');
    expect(screen.getByTestId('contrast-answer').textContent).toContain('gradom');
    expect(aiPost).not.toHaveBeenCalled();
  });

  it('the AI explanation fires ONLY when the learner asks for it', async () => {
    render(<WrongAnswerHelp chosen="gradu" answer="gradom" context="Idem s ____." />);
    expect(aiPost).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await waitFor(() => expect(aiPost).toHaveBeenCalledTimes(1));
    expect(aiPost.mock.calls[0]![0]).toBe('/api/explain-error');
    expect(aiPost.mock.calls[0]![1]).toMatchObject({ wrong: 'gradu', correct: 'gradom' });
    await waitFor(() =>
      expect(screen.getByText(/Because the verb takes the genitive/)).toBeTruthy(),
    );
  });

  it('the button is spent once — one wrong answer cannot be re-charged by tapping', () => {
    render(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    expect(screen.queryByTestId('wrong-answer-why')).toBeNull();
  });

  it('an AI failure leaves the free contrast standing', async () => {
    aiPost.mockRejectedValue(new Error('offline'));
    render(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await waitFor(() => expect(aiPost).toHaveBeenCalled());
    expect(screen.getByTestId('answer-contrast')).toBeTruthy();
  });

  it('a pair the rules cannot read still offers the AI route', () => {
    render(<WrongAnswerHelp chosen="zove se Ivan" answer="se zove Ivan" context="c" />);
    expect(screen.queryByTestId('answer-contrast')).toBeNull();
    expect(screen.getByTestId('wrong-answer-why')).toBeTruthy();
  });
});

describe('ModeDrill is where it is mounted — all 109 engine drills at once', () => {
  const src = fs.readFileSync(path.join(__dirname, '../components/practice/ModeDrill.tsx'), 'utf8');

  it('renders it, and only on a WRONG answer', () => {
    expect(src).toMatch(/import WrongAnswerHelp from '\.\.\/shared\/WrongAnswerHelp'/);
    expect(src).toMatch(/answered && chosen !== cur\.answer && \(/);
    expect(src).toMatch(/<WrongAnswerHelp/);
  });

  it('hands it the learner’s pick, the answer and the prompt as context', () => {
    const block = src.slice(src.indexOf('<WrongAnswerHelp'), src.indexOf('<WrongAnswerHelp') + 400);
    expect(block).toMatch(/chosen=\{chosen!\}/);
    expect(block).toMatch(/answer=\{cur\.answer\}/);
    expect(block).toMatch(/context=\{cur\.q\}/);
  });

  it('the drill itself makes no AI call — the cost stays behind the button', () => {
    expect(src).not.toMatch(/_aiPost|useExplainError/);
  });

  it('reaches the whole engine-backed programme', () => {
    const dir = path.join(__dirname, '../components/practice/drills');
    const wrappers = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.tsx'))
      .filter((f) => fs.readFileSync(path.join(dir, f), 'utf8').includes('ModeDrill'));
    // One edit in the engine; this many screens gain the panel.
    expect(wrappers.length).toBeGreaterThan(100);
  });
});
