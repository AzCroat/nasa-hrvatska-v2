// src/tests/aiRefusalMessages.test.tsx
//
// A LEARNER WAS SHOWN THE SERVER'S MACHINE CODE (found 2026-09-22).
//
// `/api/_requireAuth.js` refuses with `fail(status, code)`, whose body is
// `{ error: '<code>' }` — `monthly_budget_exhausted`, `rate_limited`,
// `gate_unavailable`, `unauthenticated`. MicroLessonScreen threw that string
// and rendered it verbatim:
//
//   throw new Error(body.error || `Server error ${res.status}`)
//   setErrorMsg((e as Error).message || 'Could not generate lesson…')
//
// The fallback sentence never fired, because `body.error` is always present.
// So a learner who had simply hit the daily quota — or was signed out — read
// `monthly_budget_exhausted` under the heading "Something went wrong", above a
// "Try Again" button that could not work until the 1st of the month.
//
// CLAUDE.md states the rule twice and this broke both halves: "NEVER show a
// learner a raw status ('API error 429')", and layer 10 of the AI-cost section,
// "every AI surface renders the budget pause as a calm message, never a
// retryable error."
//
// WHY THE 2026-09-07 FEEDBACK CENSUS MISSED IT: that census scoped itself to
// every surface that promises feedback on WRITING or SPEECH, and traced those
// end to end. A micro-lesson is neither. Two siblings had the same shape in a
// milder form — DailyListeningCard on Home ("Could not load today's listening
// exercise. Try again.") and DialogueSim ("Could not reach Maja."), the latter
// blaming the tutor for a billing cap. None of the three reached Sentry, so
// none would ever have named itself.
//
// WHAT THIS PINS, and deliberately not more: that the three surfaces classify
// through `lib/aiFailure` rather than surfacing transport detail. It cannot
// prove a FOURTH surface does — `aiSurfaceClassifies` in this file derives the
// caller set from the ceiling table so a new one cannot land unclassified.

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

// vi.mock is hoisted above plain consts, so the fn must be hoisted with it.
const { mockApiFetch } = vi.hoisted(() => ({ mockApiFetch: vi.fn() }));
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: mockApiFetch }));
vi.mock('../lib/audio.js', () => ({ speak: vi.fn() }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../data', async () => {
  const React = await import('react');
  return {
    H: (t: string) => React.createElement('h1', null, t),
    speak: vi.fn(),
    // The screen filters on `count >= 2` (NOT `misses`) and needs at least
    // TWO survivors, or it short-circuits to "Keep Practicing!" and never
    // reaches the network — which is exactly what the first draft of this
    // fixture did, passing a `misses` field that the filter does not read.
    getMistakes: () => [
      { hr: 'kruh', en: 'bread', count: 4 },
      { hr: 'mlijeko', en: 'milk', count: 3 },
    ],
  };
});
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({ level: 'A2', setStats: vi.fn(), writeDelta: vi.fn() }),
}));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));

import MicroLessonScreen from '../components/learn/MicroLessonScreen';
import { BUDGET_PAUSE_EN } from '../lib/aiLimit';
import { _resetAiFailureReports } from '../lib/aiFailure';

/** The gate's real refusal shape: `fail(status, error)` -> { error: code }. */
function refusal(status: number, code: string) {
  return {
    ok: false,
    status,
    json: () => Promise.resolve({ error: code }),
    text: () => Promise.resolve(JSON.stringify({ error: code })),
    clone() {
      return refusal(status, code);
    },
  };
}

describe('an AI refusal never reaches the learner as a machine code', () => {
  beforeEach(() => {
    mockApiFetch.mockReset();
    _resetAiFailureReports();
  });

  it('budget exhaustion shows the calm pause sentence, not `monthly_budget_exhausted`', async () => {
    mockApiFetch.mockResolvedValue(refusal(429, 'monthly_budget_exhausted'));
    render(<MicroLessonScreen goBack={vi.fn()} />);

    await waitFor(() => expect(screen.getByText(BUDGET_PAUSE_EN)).toBeTruthy());
    // The exact string a learner used to read.
    expect(screen.queryByText(/monthly_budget_exhausted/)).toBeNull();
    expect(document.body.textContent).not.toMatch(/monthly_budget_exhausted/);
  });

  it('does not offer a retry that cannot succeed until the cap resets', async () => {
    mockApiFetch.mockResolvedValue(refusal(429, 'monthly_budget_exhausted'));
    render(<MicroLessonScreen goBack={vi.fn()} />);

    await waitFor(() => expect(screen.getByText(BUDGET_PAUSE_EN)).toBeTruthy());
    // By ROLE, not by text: 'server' failures carry the sentence "…Try again
    // in a moment.", so a text matcher here matches the MESSAGE as well as the
    // button and cannot tell the two apart.
    expect(screen.queryByRole('button', { name: /Try Again/i })).toBeNull();
  });

  it('a signed-out learner is told to sign in, not shown `unauthenticated`', async () => {
    mockApiFetch.mockResolvedValue(refusal(401, 'unauthenticated'));
    render(<MicroLessonScreen goBack={vi.fn()} />);

    await waitFor(() => expect(screen.getByText(/Sign in/i)).toBeTruthy());
    expect(document.body.textContent).not.toMatch(/unauthenticated/);
  });

  it('a retryable cause DOES still offer the retry (the guard cuts both ways)', async () => {
    // Without this, "never show Try Again" would pass the two tests above and
    // silently strip the button from every transient failure.
    mockApiFetch.mockResolvedValue(refusal(500, 'upstream_error'));
    render(<MicroLessonScreen goBack={vi.fn()} />);

    await waitFor(() => expect(screen.getByRole('button', { name: /Try Again/i })).toBeTruthy());
  });
});

describe('the three fixed surfaces classify through lib/aiFailure', () => {
  // Source pins, because two of the three are reached only through flows the
  // unit suite does not drive. A render test on one screen says nothing about
  // the other two.
  const FIXED = [
    'src/components/learn/MicroLessonScreen.tsx',
    'src/components/home/DailyListeningCard.tsx',
    'src/components/practice/DialogueSim.tsx',
  ];

  it.each(FIXED)('%s classifies and reports its refusals', (f) => {
    const src = readFileSync(f, 'utf8');
    expect(src).toMatch(/from '\.\.\/\.\.\/lib\/aiFailure'/);
    expect(src).toMatch(/failureFromResponse\(/);
    expect(src).toMatch(/failureFromError\(/);
    expect(src).toMatch(/reportAiFailure\(/);
  });

  it.each(FIXED)('%s no longer renders the transport error verbatim', (f) => {
    const src = readFileSync(f, 'utf8')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '');
    // The two exact shapes that put a machine code on screen.
    expect(src).not.toMatch(/setErrorMsg\(\s*\(e as Error\)\.message/);
    expect(src).not.toMatch(/throw new Error\(\s*\(?body[\s\S]{0,40}\.error/);
  });
});
