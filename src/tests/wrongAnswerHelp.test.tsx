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
import AppContext from '../context/AppContext';

/**
 * The panel reads `useApp()` for navigation, because its "learn this" link has
 * to reach the Learning Center and neither it nor `ModeDrill` is handed a
 * navigator. In production it is always inside the provider; here it needs one.
 */
const setScr = vi.fn();
function renderPanel(ui: React.ReactElement) {
  return render(
    <AppContext.Provider value={{ setScr, currentScreen: 'genitivdrill' } as never}>
      {ui}
    </AppContext.Provider>,
  );
}

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
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="Idem s ____." />);
    expect(screen.getByTestId('answer-contrast')).toBeTruthy();
    expect(screen.getByTestId('contrast-chosen').textContent).toContain('gradu');
    expect(screen.getByTestId('contrast-answer').textContent).toContain('gradom');
    expect(aiPost).not.toHaveBeenCalled();
  });

  it('the AI explanation fires ONLY when the learner asks for it', async () => {
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="Idem s ____." />);
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
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    expect(screen.queryByTestId('wrong-answer-why')).toBeNull();
  });

  it('an AI failure leaves the free contrast standing', async () => {
    aiPost.mockRejectedValue(new Error('offline'));
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await waitFor(() => expect(aiPost).toHaveBeenCalled());
    expect(screen.getByTestId('answer-contrast')).toBeTruthy();
  });

  it('a pair the rules cannot read still offers the AI route', () => {
    renderPanel(<WrongAnswerHelp chosen="zove se Ivan" answer="se zove Ivan" context="c" />);
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

// ───────────────────────────────────────────────────────────────────────────
// A FEEDBACK FAILURE MUST SAY SOMETHING (owner report, 2026-09-17)
// ───────────────────────────────────────────────────────────────────────────
//
// "Objektne zamjenice — Didn't load explanation of answer I got incorrect when
// selected." The hook set `null` on every failure, DrillExplainCard returned
// null for null, and the button had already been spent — so pressing "Explain
// this one to me" removed the control and produced nothing, forever.
//
// The feedback directive forbids both halves of that: no bare null from a
// feedback path without a named cause, and never render nothing on a failure.
// `lib/aiFailure` is the classifier built for it; it had reached the speaking
// coach, exam scorer and graded reader but never the DRILL explainer, which
// sits under all 109 engine-backed drills.
describe('a failed explanation says what happened', () => {
  it('names the cause instead of rendering nothing', async () => {
    aiPost.mockResolvedValue(
      new Response(JSON.stringify({ error: 'monthly_budget_exhausted' }), { status: 503 }),
    );
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    const card = await screen.findByTestId('drill-explain-failed');
    expect(card.textContent?.trim().length).toBeGreaterThan(10);
    // Not the silence the owner met.
    expect(screen.queryByTestId('drill-explain-card')).toBeNull();
  });

  it('offers a retry for a failure a retry can clear', async () => {
    aiPost.mockResolvedValue(new Response('boom', { status: 500 }));
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await screen.findByTestId('drill-explain-failed');
    const retry = screen.getByTestId('drill-explain-retry');

    // And the retry genuinely re-requests — a button that renders and does
    // nothing would be the same defect wearing a different face.
    aiPost.mockResolvedValue(
      new Response(
        JSON.stringify({ explanation: 'Because the verb takes the genitive.', rule: 'Genitive' }),
        { status: 200, headers: { 'content-type': 'application/json' } },
      ),
    );
    fireEvent.click(retry);
    await screen.findByTestId('drill-explain-card');
  });

  it('does NOT offer a retry for the learner’s own daily limit', async () => {
    // Retrying cannot clear it, so offering the button would be a lie about
    // what pressing it does.
    //
    // The CODE is the real one (`daily_quota_exceeded`) read out of
    // `classifyAiLimit`, not one invented here. The first draft used
    // `daily_limit`, which that function does not know, so it fell through to
    // the 429 default of `burst` — retryable, and rightly so. A test written
    // from memory pins the memory.
    aiPost.mockResolvedValue(
      new Response(JSON.stringify({ error: 'daily_quota_exceeded' }), { status: 429 }),
    );
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await screen.findByTestId('drill-explain-failed');
    expect(screen.queryByTestId('drill-explain-retry')).toBeNull();
  });

  it('leaves the free layers standing — an explanation is enrichment', async () => {
    aiPost.mockRejectedValue(new TypeError('Failed to fetch'));
    renderPanel(<WrongAnswerHelp chosen="gradu" answer="gradom" context="c" />);
    fireEvent.click(screen.getByTestId('wrong-answer-why'));
    await screen.findByTestId('drill-explain-failed');
    // The rule-based contrast costs nothing and must survive an AI failure.
    expect(screen.getByTestId('answer-contrast')).toBeTruthy();
  });
});
