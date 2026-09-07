// localMorphologyWiring.test.tsx — the declension engine is WIRED into the
// tap-a-word reader, and a tap costs nothing (owner recommendation 6,
// 2026-09-07).
//
// The engine has its own tests. This one drives the REAL screen, because a
// module that computes the right answer and is never called is the same as no
// module at all (the `award` finding, CLAUDE.md). Three things it pins that the
// engine's own tests cannot see:
//   1. Tapping a word opens the sheet WITHOUT any network call. Every tap used
//      to be one Claude turn, charged against the daily quota and the monthly
//      budget, and showed nothing at all when either was unavailable.
//   2. The readings shown are the engine's, not a second implementation.
//   3. The AI path still exists, as an explicit second step, and its failure
//      leaves the local reading standing.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import fs from 'fs';
import path from 'path';

const apiFetch = vi.fn();
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: (...a: unknown[]) => apiFetch(...a) }));

import { LocalOnlySheet } from '../components/learn/LocalMorphology';
import { analyzeForm, describeReading } from '../lib/croatianMorphology';

beforeEach(() => apiFetch.mockReset());
afterEach(() => vi.restoreAllMocks());

describe('the sheet a tap opens', () => {
  it('shows a reading with NO network call at all', () => {
    render(<LocalOnlySheet word="knjige" onClose={vi.fn()} explaining={false} />);
    expect(screen.getByTestId('local-morphology')).toBeTruthy();
    expect(screen.getAllByTestId('local-reading').length).toBeGreaterThan(1);
    expect(apiFetch).not.toHaveBeenCalled();
  });

  it('the lines it prints are the ENGINE’s, not a second implementation', () => {
    render(<LocalOnlySheet word="knjige" onClose={vi.fn()} explaining={false} />);
    const shown = screen.getAllByTestId('local-reading').map((n) => n.textContent || '');
    for (const c of analyzeForm('knjige').candidates.slice(0, 6)) {
      expect(shown.some((t) => t.startsWith(describeReading(c)))).toBe(true);
    }
  });

  it('an ambiguous ending is headed as ambiguous, a closed-class word is not', () => {
    const { unmount } = render(
      <LocalOnlySheet word="knjige" onClose={vi.fn()} explaining={false} />,
    );
    expect(screen.getByTestId('local-morphology').textContent).toContain('What this ending can be');
    unmount();
    render(<LocalOnlySheet word="ga" onClose={vi.fn()} explaining={false} />);
    expect(screen.getByTestId('local-morphology').textContent).toContain('What this is');
  });

  it('offers the full declension when a lemma is recoverable, marked as computed', () => {
    render(<LocalOnlySheet word="grad" onClose={vi.fn()} explaining={false} />);
    const table = screen.getByTestId('local-declension');
    expect(table.textContent).toContain('regular pattern');
    expect(table.textContent).toContain('gradovima');
  });

  it('a word the rules cannot read shows nothing rather than a guess', () => {
    render(<LocalOnlySheet word="!!!" onClose={vi.fn()} explaining={false} />);
    expect(screen.queryByTestId('local-morphology')).toBeNull();
  });

  it('the AI path is a SECOND step the learner asks for', () => {
    const onExplain = vi.fn();
    render(
      <LocalOnlySheet word="knjige" onClose={vi.fn()} onExplain={onExplain} explaining={false} />,
    );
    fireEvent.click(screen.getByTestId('explain-in-sentence'));
    expect(onExplain).toHaveBeenCalledTimes(1);
  });

  it('without an explain handler there is no AI button, and the reading still shows', () => {
    render(<LocalOnlySheet word="knjige" onClose={vi.fn()} explaining={false} />);
    expect(screen.queryByTestId('explain-in-sentence')).toBeNull();
    expect(screen.getByTestId('local-morphology')).toBeTruthy();
  });
});

describe('GrammarReader is the screen that uses it', () => {
  const src = fs.readFileSync(
    path.join(__dirname, '../components/learn/GrammarReader.tsx'),
    'utf8',
  );

  it('renders the local sheet instead of nothing when there is no AI answer', () => {
    expect(src).toMatch(/import \{ LocalOnlySheet \} from '\.\/LocalMorphology'/);
    expect(src).toMatch(/if \(!data\) return <LocalOnlySheet/);
  });

  it('the TAP handler makes no request — it only opens the sheet', () => {
    const tap = src.slice(
      src.indexOf('const handleWordTap'),
      src.indexOf('const explainInSentence'),
    );
    expect(tap).not.toMatch(/apiFetch|await/);
    expect(tap).toMatch(/setActiveWord/);
  });

  it('the request lives in the explain handler, behind the button', () => {
    const explain = src.slice(src.indexOf('const explainInSentence'));
    expect(explain.slice(0, 2000)).toMatch(/apiFetch\('\/api\/ai-chat'/);
    expect(src).toMatch(/onExplain=\{\(\) => explainInSentence\(activeWord\.word\)\}/);
  });

  it('a failed explain says the local reading still holds, and does not blame the learner', () => {
    expect(src).toMatch(/The endings above still hold/);
    expect(src).not.toMatch(/Could not analyze word\. Try again\./);
  });
});
