/**
 * listeningGate.test.tsx — the Listening quiz cannot be answered blind
 * (2026-09-06, the practice half of the Level Check listening finding).
 *
 * The audio IS the question here: the Croatian is hidden until after the
 * answer. So answers lock until the sentence has played; a failed play names
 * its cause and offers retry or a skip that does NOT score; a session in which
 * nothing could be played awards and credits nothing.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { StatsProvider } from '../context/StatsContext';
import type { Stats, StatsContextValue } from '../types';

vi.mock('../lib/random.js', () => ({ rnd: () => 0.9999 }));
const markQuestMock = vi.fn();
vi.mock('../lib/quests.js', () => ({ markQuest: (...a: unknown[]) => markQuestMock(...a) }));
vi.mock('../lib/knightSpeak.js', () => ({ knightSpeak: vi.fn(), knightFlash: vi.fn() }));
vi.mock('../data', async (importOriginal) => {
  const actual = await importOriginal();
  return { ...(actual as object), sh: (arr: unknown[]) => [...arr] };
});
const recordTopicResult = vi.fn();
vi.mock('../lib/adaptive.js', () => ({
  recordTopicResult: (...a: unknown[]) => recordTopicResult(...a),
}));

const audio = vi.hoisted(() => ({
  speak: vi.fn(async () => 'azure' as string),
  speakSlow: vi.fn(async () => 'azure' as string),
  lastFailure: null as null | { cause: string },
}));
vi.mock('../lib/audio', () => ({
  speak: (...a: unknown[]) => audio.speak(...(a as [])),
  speakSlow: (...a: unknown[]) => audio.speakSlow(...(a as [])),
  getLastTtsFailure: () => audio.lastFailure,
  describeTtsFailure: (f: { cause: string } | null) => `desc:${f?.cause ?? 'none'}`,
}));

import ListeningScreen from '../components/practice/ListeningScreen';

const QUESTIONS = [
  { hr: 'Dobar dan.', en: 'Good day.', opts: ['Good day.', 'Good night.', 'Hello.', 'Goodbye.'] },
  { hr: 'Hvala.', en: 'Thank you.', opts: ['Thank you.', 'Please.', 'Sorry.', 'Excuse me.'] },
];

function makeCtx() {
  const setStats = vi.fn();
  const writeDelta = vi.fn();
  const award = vi.fn();
  const stats = {
    xp: 0,
    lc: 0,
    gc: 0,
    sp: 0,
    de: 0,
    rc: 0,
    pf: 0,
    mv: 0,
    hi: 0,
    str: 0,
    authLoading: 0,
    diff: 'beginner',
    ct: [],
    vs: [],
    rs: [],
    badges: [],
  } as unknown as Stats;
  const value: StatsContextValue = {
    stats,
    setStats,
    writeDelta,
    dispatch: vi.fn(),
    award,
    level: 1,
  };
  return { value, setStats, writeDelta, award };
}

function renderScreen() {
  const ctx = makeCtx();
  const goBack = vi.fn();
  render(
    <StatsProvider value={ctx.value}>
      <ListeningScreen questions={QUESTIONS} goBack={goBack} award={ctx.award} />
    </StatsProvider>,
  );
  return { ...ctx, goBack };
}

const options = () => Array.from(document.querySelectorAll('button.ob')) as HTMLButtonElement[];
const playStatus = () => screen.getByTestId('listening-play').getAttribute('data-audio-status');

beforeEach(() => {
  audio.speak.mockReset().mockResolvedValue('azure');
  audio.speakSlow.mockReset().mockResolvedValue('azure');
  audio.lastFailure = null;
  recordTopicResult.mockClear();
  markQuestMock.mockClear();
});

describe('ListeningScreen — heard gate', () => {
  it('options are locked until the sentence has played; a click on a locked option scores nothing', async () => {
    renderScreen();
    expect(screen.getByTestId('listening-hint')).toBeInTheDocument();
    for (const b of options()) expect(b).toBeDisabled();
    fireEvent.click(options()[0]!);
    expect(recordTopicResult).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('listening-play'));
    expect(audio.speak).toHaveBeenCalledWith('Dobar dan.', undefined);
    await waitFor(() => expect(playStatus()).toBe('played'));
    expect(screen.queryByTestId('listening-hint')).toBeNull();
    for (const b of options()) expect(b).not.toBeDisabled();
    fireEvent.click(options()[0]!);
    expect(recordTopicResult).toHaveBeenCalledWith('listening', true);
  });

  it('the slow play unlocks too', async () => {
    renderScreen();
    fireEvent.click(screen.getByTestId('listening-play-slow'));
    expect(audio.speakSlow).toHaveBeenCalledWith('Dobar dan.', undefined);
    await waitFor(() => expect(playStatus()).toBe('played'));
    for (const b of options()) expect(b).not.toBeDisabled();
  });

  it('a failed play names the cause, keeps the options locked, and retry plays again', async () => {
    audio.speak.mockResolvedValueOnce('failed');
    audio.lastFailure = { cause: 'no_fallback_voice' };
    renderScreen();
    fireEvent.click(screen.getByTestId('listening-play'));
    await waitFor(() => expect(screen.getByTestId('listening-audio-failed')).toBeInTheDocument());
    expect(screen.getByTestId('listening-audio-failed')).toHaveTextContent(
      'desc:no_fallback_voice',
    );
    for (const b of options()) expect(b).toBeDisabled();
    fireEvent.click(screen.getByTestId('listening-audio-failed-retry'));
    expect(audio.speak).toHaveBeenCalledTimes(2);
    await waitFor(() => expect(playStatus()).toBe('played'));
    for (const b of options()) expect(b).not.toBeDisabled();
  });

  it('skipping an unplayable sentence scores nothing and the result counts only what was heard', async () => {
    audio.speak.mockResolvedValueOnce('failed');
    const { award, writeDelta } = renderScreen();
    fireEvent.click(screen.getByTestId('listening-play'));
    await waitFor(() => expect(screen.getByTestId('listening-audio-failed')).toBeInTheDocument());
    fireEvent.click(screen.getByTestId('listening-audio-failed-skip'));
    expect(recordTopicResult).not.toHaveBeenCalled();
    // Item 2: locked again (fresh gate), then heard and answered correctly.
    for (const b of options()) expect(b).toBeDisabled();
    fireEvent.click(screen.getByTestId('listening-play'));
    await waitFor(() => expect(playStatus()).toBe('played'));
    fireEvent.click(options()[0]!);
    fireEvent.click(screen.getByRole('button', { name: /see results/i }));
    // 1 of 1 administered — the skipped item is not in the denominator.
    expect(screen.getByText('1 / 1')).toBeInTheDocument();
    expect(screen.getByText(/Perfect ear/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /finish/i }));
    expect(award).toHaveBeenCalledTimes(1);
    expect(writeDelta).toHaveBeenCalledWith(
      expect.objectContaining({ lc: 1, vs: expect.arrayContaining(['listening']) }),
    );
  });

  it('when NOTHING could be played, nothing is awarded or credited', async () => {
    audio.speak.mockResolvedValue('failed');
    const { award, writeDelta, setStats, goBack } = renderScreen();
    for (let i = 0; i < QUESTIONS.length; i++) {
      fireEvent.click(screen.getByTestId('listening-play'));
      await waitFor(() => expect(screen.getByTestId('listening-audio-failed')).toBeInTheDocument());
      fireEvent.click(screen.getByTestId('listening-audio-failed-skip'));
    }
    expect(screen.getByTestId('listening-no-audio')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /finish/i })).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /back/i }));
    expect(goBack).toHaveBeenCalled();
    expect(award).not.toHaveBeenCalled();
    expect(writeDelta).not.toHaveBeenCalled();
    expect(setStats).not.toHaveBeenCalled();
    expect(markQuestMock).not.toHaveBeenCalled();
  });
});
