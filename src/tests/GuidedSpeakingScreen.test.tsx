// src/tests/GuidedSpeakingScreen.test.tsx
//
// The speaking ladder must actually ladder: listen → rehearse (never blocks) →
// free production gated on minWords → ONE graded submit that feeds the coach's
// loops. And it must fail soft: the learner did the speaking, so a dead coach
// names its cause and never strands the daily session.
//
// jsdom has no SpeechRecognition, which is exactly the mic-blocked learner's
// device. That path is the DEFAULT here on purpose — a screen whose only route
// to a transcript is a microphone would be unusable for them, and the typed
// transcript has to count identically.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

const coachMock = vi.fn();
const signalMock = vi.fn();
const practisedMock = vi.fn();
const speakMock = vi.fn();
let lastTtsFailure: unknown = null;

vi.mock('../lib/speakingCoach', () => ({
  requestSpeakingCoach: (...a: unknown[]) => coachMock(...a),
  COACH_MIN_WORDS: 5,
}));
vi.mock('../lib/sessionSignal', () => ({
  signalSessionCompleteIfActive: (...a: unknown[]) => signalMock(...a),
}));
vi.mock('../lib/teachPractice', () => ({
  recordScreenPractised: (...a: unknown[]) => practisedMock(...a),
}));
vi.mock('../lib/audio', () => ({
  speak: (...a: unknown[]) => speakMock(...a),
  getLastTtsFailure: () => lastTtsFailure,
  describeTtsFailure: () => 'Audio is paused for today.',
}));
vi.mock('../lib/cefrCertification', () => ({ getCurrentContentLevel: () => 'A1' }));
vi.mock('../hooks/useOnlineStatus', () => ({ useOnlineStatus: () => ({ isOnline: true }) }));

import GuidedSpeakingScreen, {
  phraseMatches,
  pickSpeakingUnit,
  countSpokenWords,
  checklistSatisfied,
} from '../components/practice/GuidedSpeakingScreen';
import { speakingUnitsForLevel } from '../data/speakingCurriculum';

const A1 = speakingUnitsForLevel('A1');
const UNIT = A1[0]!;
/** Long enough for the A1 floor and satisfying both word checks. */
const GOOD =
  'Zovem se Marko i dolazim iz Kanade i živim u Zagrebu i učim hrvatski svaki dan jer volim jezik';

const OK_COACH = {
  ok: true as const,
  data: {
    scores: { range: 0.8, accuracy: 0.7, fluency: 0.75, task: 0.9 },
    overall: 0.79,
    errors: [{ original: 'u Zagreb', corrected: 'u Zagrebu', note: 'locative', errorType: 'case' }],
    advice: 'After "živim u" put the place in the locative.',
    encouragement: 'Clear and easy to follow.',
  },
};

function renderScreen() {
  const award = vi.fn();
  const goBack = vi.fn();
  render(<GuidedSpeakingScreen goBack={goBack} award={award} />);
  return { award, goBack };
}

function advanceToSpeak() {
  fireEvent.click(screen.getByTestId('gs-to-rehearse'));
  for (;;) {
    const next = screen.queryByTestId('gs-phrase-next');
    if (!next) break;
    fireEvent.click(next);
  }
}

beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  lastTtsFailure = null;
  speakMock.mockResolvedValue('azure');
  coachMock.mockResolvedValue(OK_COACH);
});

describe('phraseMatches — the recogniser is not the judge', () => {
  it('accepts exact, case- and punctuation-insensitive answers', () => {
    expect(
      phraseMatches('Zovem se Ivana i dolazim iz Kanade.', 'Zovem se Ivana i dolazim iz Kanade.'),
    ).toBe(true);
    expect(
      phraseMatches('zovem se ivana i dolazim iz kanade', 'Zovem se Ivana i dolazim iz Kanade.'),
    ).toBe(true);
  });

  it('gives partial credit — a dropped word is not a failure', () => {
    expect(
      phraseMatches('Zovem se Ivana dolazim Kanade', 'Zovem se Ivana i dolazim iz Kanade.'),
    ).toBe(true);
  });

  it('still rejects an answer that is not the phrase', () => {
    expect(phraseMatches('Dobar dan kako ste', 'Zovem se Ivana i dolazim iz Kanade.')).toBe(false);
    expect(phraseMatches('', 'Zovem se Ivana.')).toBe(false);
  });
});

describe('pickSpeakingUnit — rotation', () => {
  it('rotates through the level across visits, and falls back to A1 on an unknown level', () => {
    expect(pickSpeakingUnit('A1').id).toBe(A1[0]!.id);
    expect(pickSpeakingUnit('A1').id).toBe(A1[1]!.id);
    expect(pickSpeakingUnit('ZZ').id).toBe(A1[0]!.id);
  });
});

describe('helpers', () => {
  it('counts spoken words and evaluates a checklist over the transcript', () => {
    expect(countSpokenWords('  jedan   dva tri ')).toBe(3);
    expect(checklistSatisfied({ id: 'x', label: 'x', minWords: 3 }, 'jedan dva tri')).toBe(true);
    expect(checklistSatisfied({ id: 'x', label: 'x', words: ['zovem se'] }, 'Zovem SE Ana')).toBe(
      true,
    );
    expect(checklistSatisfied({ id: 'x', label: 'x' }, 'anything')).toBe(false);
  });
});

describe('stage 1 — listen', () => {
  it('shows the task and the model, and can toggle to English', () => {
    renderScreen();
    expect(screen.getByTestId('gs-task')).toHaveTextContent(UNIT.prompt);
    expect(screen.getByTestId('gs-model')).toHaveTextContent(UNIT.model.slice(0, 20));
    fireEvent.click(screen.getByTestId('gs-toggle-en'));
    expect(screen.getByTestId('gs-model')).toHaveTextContent(UNIT.modelEn.slice(0, 20));
  });

  it('plays the model on request', async () => {
    renderScreen();
    fireEvent.click(screen.getByTestId('gs-play-model'));
    await waitFor(() => expect(speakMock).toHaveBeenCalledWith(UNIT.model));
  });

  it('NAMES a playback failure and does NOT block the stage — the Croatian is on screen', async () => {
    speakMock.mockResolvedValue('failed');
    lastTtsFailure = { cause: 'budget' };
    renderScreen();
    fireEvent.click(screen.getByTestId('gs-play-model'));
    await waitFor(() => expect(screen.getByTestId('gs-tts-failed')).toBeTruthy());
    // The way forward is still there. A text-first screen must never gate on audio.
    expect(screen.getByTestId('gs-to-rehearse')).toBeTruthy();
  });
});

describe('stage 2 — rehearse teaches, it never blocks', () => {
  it('can always be advanced, with or without a microphone', () => {
    renderScreen();
    fireEvent.click(screen.getByTestId('gs-to-rehearse'));
    // jsdom has no SpeechRecognition — no record button, and Next is still there.
    expect(screen.queryByTestId('gs-record-phrase')).toBeNull();
    for (let i = 0; i < UNIT.rehearse.length; i++) {
      expect(screen.getByTestId('gs-phrase-next')).toBeTruthy();
      fireEvent.click(screen.getByTestId('gs-phrase-next'));
    }
    expect(screen.getByTestId('gs-your-turn')).toBeTruthy();
  });
});

describe('stage 3 — speak', () => {
  it('offers the typed transcript when there is no microphone, and gates on the floor', () => {
    renderScreen();
    advanceToSpeak();
    const box = screen.getByTestId('gs-transcript') as HTMLTextAreaElement;
    expect(box.placeholder).toMatch(/No microphone/i);
    const submit = screen.getByTestId('gs-submit') as HTMLButtonElement;
    expect(submit.disabled).toBe(true);
    fireEvent.change(box, { target: { value: 'Zovem se Marko' } });
    expect((screen.getByTestId('gs-submit') as HTMLButtonElement).disabled).toBe(true);
    fireEvent.change(box, { target: { value: GOOD } });
    expect((screen.getByTestId('gs-submit') as HTMLButtonElement).disabled).toBe(false);
  });

  it('ticks the checklist as the transcript satisfies it', () => {
    renderScreen();
    advanceToSpeak();
    expect(screen.getByTestId('gs-checklist').textContent).not.toContain('✅');
    fireEvent.change(screen.getByTestId('gs-transcript'), { target: { value: GOOD } });
    expect(screen.getByTestId('gs-checklist').textContent).toContain('✅');
  });

  it('grades with ONE coach call, at the unit’s level, and feeds the loops', async () => {
    const { award } = renderScreen();
    advanceToSpeak();
    fireEvent.change(screen.getByTestId('gs-transcript'), { target: { value: GOOD } });
    fireEvent.click(screen.getByTestId('gs-submit'));

    await waitFor(() => expect(screen.getByTestId('gs-result')).toBeTruthy());
    expect(coachMock).toHaveBeenCalledTimes(1);
    expect(coachMock.mock.calls[0]![0]).toMatchObject({
      level: UNIT.level,
      prompt: UNIT.promptEn,
      transcript: GOOD,
    });
    expect(signalMock).toHaveBeenCalledWith('speaking_guided');
    expect(practisedMock).toHaveBeenCalledWith('speaking_guided');
    expect(award).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('gs-result').textContent).toContain('79/100');
    expect(screen.getByTestId('gs-advice')).toBeTruthy();
    expect(screen.getByTestId('gs-errors')).toBeTruthy();
  });

  it('names a coach failure, offers the way forward, and still credits the session', async () => {
    coachMock.mockResolvedValue({
      ok: false,
      failure: { kind: 'budget', retryable: false, message: 'Feedback is paused until tomorrow.' },
    });
    const { award, goBack } = renderScreen();
    advanceToSpeak();
    fireEvent.change(screen.getByTestId('gs-transcript'), { target: { value: GOOD } });
    fireEvent.click(screen.getByTestId('gs-submit'));

    await waitFor(() => expect(screen.getByTestId('gs-coach-failed')).toBeTruthy());
    expect(screen.getByTestId('gs-coach-failed').textContent).toContain(
      'Feedback is paused until tomorrow.',
    );
    // The session is credited (the learner DID speak) but the coupling is not
    // cleared and nothing was awarded from a score that does not exist.
    expect(signalMock).toHaveBeenCalledWith('speaking_guided');
    expect(practisedMock).not.toHaveBeenCalled();
    expect(award).not.toHaveBeenCalled();

    fireEvent.click(screen.getByTestId('gs-continue-anyway'));
    expect(award).toHaveBeenCalledTimes(1);
    expect(goBack).toHaveBeenCalled();
  });

  it('a retry after a failure does not double-award', async () => {
    coachMock.mockResolvedValueOnce({
      ok: false,
      failure: { kind: 'network', retryable: true, message: 'No connection.' },
    });
    coachMock.mockResolvedValueOnce(OK_COACH);
    const { award } = renderScreen();
    advanceToSpeak();
    fireEvent.change(screen.getByTestId('gs-transcript'), { target: { value: GOOD } });
    fireEvent.click(screen.getByTestId('gs-submit'));
    await waitFor(() => expect(screen.getByTestId('gs-coach-failed')).toBeTruthy());
    fireEvent.click(screen.getByTestId('gs-submit'));
    await waitFor(() => expect(screen.getByTestId('gs-result')).toBeTruthy());
    expect(award).toHaveBeenCalledTimes(1);
  });
});

describe('the microphone path, when the browser has one', () => {
  it('uses the recogniser transcript and never charges an STT endpoint for it', async () => {
    // A recogniser that immediately reports a final result and ends.
    class FakeRec {
      lang = '';
      continuous = false;
      interimResults = false;
      onresult: ((e: unknown) => void) | null = null;
      onerror: ((e: unknown) => void) | null = null;
      onend: (() => void) | null = null;
      start() {
        this.onresult?.({ results: [[{ transcript: GOOD }]] });
        this.onend?.();
      }
      stop() {}
      abort() {}
    }
    (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition = FakeRec;
    try {
      renderScreen();
      advanceToSpeak();
      fireEvent.click(screen.getByTestId('gs-record'));
      await waitFor(() =>
        expect((screen.getByTestId('gs-transcript') as HTMLTextAreaElement).value).toBe(GOOD),
      );
      // The transcript is editable — the learner fixes what the recogniser got wrong.
      fireEvent.change(screen.getByTestId('gs-transcript'), { target: { value: GOOD + ' puno' } });
      expect((screen.getByTestId('gs-transcript') as HTMLTextAreaElement).value).toContain('puno');
    } finally {
      delete (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition;
    }
  });
});
