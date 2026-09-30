// src/tests/speakingMicFailures.test.tsx
//
// WHAT A LEARNER SEES WHEN THE MICROPHONE DOES NOT WORK (speaking microphone walk,
// 2026-09-30). Found by driving the speaking screens on Chromium's fake microphone
// (e2e/speaking-microphone.spec.js); pinned here so the rule is cheap to keep:
//
//   1. The unit production and lesson produce speaking steps said NOTHING when the
//      browser recogniser failed — a blocked mic turned "Speak" straight back and the
//      tap simply did nothing. They now name the cause and the typed path.
//   2. `recognizerErrorMessage` gives one sentence per SpeechRecognition error code,
//      each ending in the typed path, because both screens count typed Croatian.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { CURRICULUM } from '../../functions/api/content/_data/curriculum.js';

vi.mock('../lib/aiPost', () => ({ _aiPost: vi.fn() }));
vi.mock('../lib/speakingCoach', () => ({ requestSpeakingCoach: vi.fn() }));
vi.mock('../lib/errorReporter', () => ({ reportError: vi.fn(), reportBoundaryError: vi.fn() }));

import LessonProduceStep from '../components/learn/LessonProduceStep';
import UnitProductionScreen from '../components/learn/UnitProductionScreen';
import { recognizerErrorMessage } from '../lib/recognizerError';
import type { CurriculumEntry } from '../lib/curriculum';

/** A recogniser that fails the way Chrome does when the microphone is blocked. */
class BlockedRec {
  static last: BlockedRec | null = null;
  lang = '';
  continuous = false;
  interimResults = false;
  onresult: ((e: unknown) => void) | null = null;
  onerror: ((e: { error: string }) => void) | null = null;
  onend: (() => void) | null = null;
  start() {
    BlockedRec.last = this;
  }
  stop() {
    this.onend?.();
  }
  abort() {}
  fail(code: string) {
    this.onerror?.({ error: code });
    this.onend?.();
  }
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  BlockedRec.last = null;
  (window as unknown as { webkitSpeechRecognition: unknown }).webkitSpeechRecognition = BlockedRec;
});

describe('recognizerErrorMessage', () => {
  it('names a blocked mic, silence and a missing device, and always the typed path', () => {
    expect(recognizerErrorMessage('not-allowed')).toMatch(/No microphone access/);
    expect(recognizerErrorMessage('service-not-allowed')).toMatch(/No microphone access/);
    expect(recognizerErrorMessage('no-speech')).toMatch(/did not hear anything/);
    expect(recognizerErrorMessage('audio-capture')).toMatch(/No microphone was found/);
    expect(recognizerErrorMessage('network')).toMatch(/could not be reached/);
    for (const code of [
      'not-allowed',
      'no-speech',
      'audio-capture',
      'network',
      'weird',
      undefined,
    ]) {
      expect(recognizerErrorMessage(code)).toMatch(/type/i);
    }
  });
});

describe('the spoken production steps name a failed recogniser', () => {
  it('the lesson produce step says the mic is blocked and keeps the typed box', () => {
    render(
      <LessonProduceStep
        lessonId="alphabet"
        lessonTitle="Alphabet"
        level="A1"
        objectives={['Say hello.']}
        onDone={vi.fn()}
        kind="speak"
      />,
    );
    expect(screen.queryByTestId('produce-mic-error')).toBeNull();
    fireEvent.click(screen.getByTestId('produce-mic'));
    act(() => BlockedRec.last!.fail('not-allowed'));
    expect(screen.getByTestId('produce-mic-error').textContent).toMatch(/No microphone access/);
    // The typed path is right there and counts.
    expect((screen.getByTestId('produce-input') as HTMLTextAreaElement).disabled).toBe(false);
    // A fresh start clears the message.
    fireEvent.click(screen.getByTestId('produce-mic'));
    expect(screen.queryByTestId('produce-mic-error')).toBeNull();
  });

  it('the unit production spoken task says the mic is blocked and keeps the typed box', async () => {
    localStorage.setItem('nh_curriculum_spine', JSON.stringify(CURRICULUM as CurriculumEntry[]));
    sessionStorage.setItem('nh_unit_production', 'A1-1|speak');
    render(<UnitProductionScreen goBack={vi.fn()} award={vi.fn()} />);
    await screen.findByTestId('unit-production');
    fireEvent.click(screen.getByTestId('unit-production-mic'));
    act(() => BlockedRec.last!.fail('not-allowed'));
    expect(screen.getByTestId('unit-production-mic-error').textContent).toMatch(
      /No microphone access/,
    );
    expect((screen.getByTestId('unit-production-input') as HTMLTextAreaElement).disabled).toBe(
      false,
    );
  });
});
