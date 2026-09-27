/**
 * The alphabet quiz must not print its own answer.
 *
 * Every ALPHA row's example word STARTS WITH the letter the question asks for, and the
 * quiz used to print that word in full: "The word čokolada … starts with the sound
 * cheh (hard)", options Č / Ć / C / Š — the answer was the first character of the
 * question, on every item, on the drill the day-one lesson hands a learner next.
 * Found by walking Unit 1 in a browser as a learner (2026-09-27).
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ALPHA } from '../data/vocabulary.js';
import { buildAlphaQuiz, maskOpening } from '../lib/alphaQuiz';

vi.mock('../context/StatsContext.tsx', () => ({
  useStats: () => ({ stats: { vs: [] }, setStats: vi.fn(), dispatch: vi.fn() }),
}));

const identity = <T,>(a: T[]): T[] => a;

describe('alphabet quiz — no answer in the question', () => {
  it('every ALPHA example word opens with its own letter, so every one is masked', () => {
    // If a row's word stopped opening with its letter, maskOpening would return it
    // unchanged — the fallback that must never become the common case silently.
    for (const row of ALPHA as string[][]) {
      const masked = maskOpening(row[2]!, row[0]!);
      expect(masked, `${row[0]} / ${row[2]} was not masked`).not.toBe(row[2]);
      expect(masked.startsWith('_'), `${row[0]} / ${row[2]}`).toBe(true);
    }
  });

  it('a digraph blanks both characters', () => {
    expect(maskOpening('džep', 'Dž dž')).toBe('__ep');
    expect(maskOpening('ljubav', 'Lj lj')).toBe('__ubav');
    expect(maskOpening('Europa', 'E e')).toBe('_uropa');
  });

  it('no built question shows the letter it asks for at the start of its word', () => {
    const qs = buildAlphaQuiz(ALPHA as string[][], identity);
    expect(qs.length).toBe(10);
    for (const q of qs) {
      const lower = q.correct.split(' ')[1]!;
      expect(q.masked.toLowerCase().startsWith(lower), q.correct).toBe(false);
      expect(q.opts).toContain(q.correct);
    }
  });

  it('the rendered question does not contain the full word', async () => {
    vi.resetModules();
    const { default: AlphabetScreen } = await import('../components/learn/AlphabetScreen');
    render(<AlphabetScreen goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(screen.getByText(/Test the Alphabet/));
    const card = screen.getByText(/WHICH LETTER SOUNDS LIKE THIS/).parentElement!;
    const text = card.textContent ?? '';
    const shownWord = /The word\s+(\S+)/.exec(text)?.[1] ?? '';
    expect(shownWord.startsWith('_'), `question shows "${shownWord}"`).toBe(true);
    const row = (ALPHA as string[][]).find((r) => maskOpening(r[2]!, r[0]!) === shownWord);
    expect(row, `no ALPHA row masks to "${shownWord}"`).toBeTruthy();
    expect(text).not.toContain(row![2]!);
  });
});
