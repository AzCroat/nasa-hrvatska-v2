// src/tests/spokenCheck.test.tsx
//
// WHAT THE LEARNER ACTUALLY SAID (owner report, 2026-09-29). Guided Speaking's REHEARSE
// and BUILD stages now check the RECORDING against the target (Azure scripted assessment
// with miscue detection) instead of trusting a recogniser transcript that can quietly
// correct a wrong ending. Pinned here: the pure rules, and the real screen driven with a
// fake recorder and a mocked assessment.

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';

const postMock = vi.fn();
vi.mock('../lib/nativePost.js', () => ({
  _nativePost: (...a: unknown[]) => postMock(...a),
  getLastTransportFailure: () => null,
}));
vi.mock('../lib/audio', () => ({
  speak: vi.fn(async () => 'azure'),
  getLastTtsFailure: () => null,
  describeTtsFailure: () => '',
  blobToDataUrl: async () => 'data:audio/webm;base64,eA==',
}));
vi.mock('../lib/speakingCoach', () => ({ requestSpeakingCoach: vi.fn(), COACH_MIN_WORDS: 5 }));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));
vi.mock('../lib/teachPractice', () => ({ recordScreenPractised: vi.fn() }));
vi.mock('../lib/cefrCertification', () => ({ getCurrentContentLevel: () => 'A1' }));
vi.mock('../hooks/useOnlineStatus', () => ({ useOnlineStatus: () => ({ isOnline: true }) }));
// A recorder that records on demand: start → recording, stop → one finished take.
vi.mock('../hooks/useRecorder', async () => {
  const R = await import('react');
  return {
    useRecorder: () => {
      const [state, setState] = R.useState('idle');
      const [blob, setBlob] = R.useState<Blob | null>(null);
      return {
        state,
        micAvailable: true,
        audioBlob: blob,
        audioUrl: null,
        mimeType: 'audio/webm',
        countdown: 0,
        error: null,
        startRecording: () => setState('recording'),
        stopRecording: () => {
          setBlob(new Blob(['x'], { type: 'audio/webm' }));
          setState('done');
        },
        playback: async () => {},
        reset: () => {},
      };
    },
  };
});

import {
  checkedWords,
  missingWords,
  rehearseRight,
  verifyBuild,
  type SpokenCheck,
} from '../lib/spokenCheck';
import { gradeBuild, type BuildSentence } from '../lib/sentenceBuild';
import GuidedSpeakingScreen from '../components/practice/GuidedSpeakingScreen';
import { _resetAssessedMic } from '../components/practice/AssessedMic';
import { speakingUnitsForLevel } from '../data/speakingCurriculum';

const UNIT = speakingUnitsForLevel('A1')[0]!;
const PHRASE = UNIT.rehearse[0]!.hr; // 'Zovem se Ivana i dolazim iz Kanade.'
const BUILD = (UNIT.build ?? [])[0] as BuildSentence; // Imam sestru. (sestra, accusative)

function azure(recognized: string, words: [string, number, string?][]) {
  return {
    ok: true,
    status: 200,
    json: async () => ({
      ok: true,
      recognized,
      word_scores: words.map(([word, score, error]) => ({ word, score, error: error ?? 'None' })),
    }),
  };
}

const check = (recognized: string, words: [string, number, string?][]): SpokenCheck => ({
  recognized,
  words: checkedWords(words.map(([word, score, error]) => ({ word, score, error }))),
});

beforeEach(() => {
  localStorage.clear();
  postMock.mockReset();
  _resetAssessedMic();
  (window as unknown as { MediaRecorder: unknown }).MediaRecorder = class {};
  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: { getUserMedia: vi.fn() },
  });
});

describe('the rules', () => {
  it('reads Azure miscues into four statuses; a low score is unclear; junk is skipped', () => {
    const w = checkedWords([
      { word: 'Imam', score: 95, error: 'None' },
      { word: 'sestru', score: 40, error: 'None' },
      { word: 'je', score: 0, error: 'Omission' },
      { word: 'sestra', score: 70, error: 'Insertion' },
      { word: 'ja', score: 80, error: 'Mispronunciation' },
      { word: '', score: 90 },
      null,
    ]);
    expect(w.map((x) => x.status)).toEqual(['good', 'unclear', 'missing', 'extra', 'unclear']);
    expect(checkedWords('nope')).toEqual([]);
  });

  it('REHEARSE: a word the learner left out cannot be filled in by the transcript', () => {
    const allHeard = check(PHRASE, [
      ['Zovem', 90],
      ['se', 90],
      ['Ivana', 90],
    ]);
    expect(rehearseRight(PHRASE, PHRASE, allHeard)).toBe(true);
    const leftOut = check(PHRASE, [
      ['Zovem', 90],
      ['dolazim', 0, 'Omission'],
    ]);
    expect(missingWords(leftOut)).toEqual(['dolazim']);
    expect(rehearseRight(PHRASE, PHRASE, leftOut)).toBe(false);
    // Without a recording the old transcript rule stands.
    expect(rehearseRight(PHRASE, PHRASE, null)).toBe(true);
  });

  it('BUILD: a pass on the required form must be heard in the recording', () => {
    const passed = gradeBuild('Imam sestru.', BUILD);
    expect(passed.ok).toBe(true);
    const unclear = verifyBuild(
      passed,
      check('Imam sestru.', [
        ['Imam', 90],
        ['sestru', 35, 'Mispronunciation'],
      ]),
      BUILD,
    );
    expect(unclear).toMatchObject({ ok: false, kind: 'unclear', required: 'sestru' });
    const heard = verifyBuild(
      passed,
      check('Imam sestru.', [
        ['Imam', 90],
        ['sestru', 88],
      ]),
      BUILD,
    );
    expect(heard.ok).toBe(true);
    // A typed answer (no check) and a failed verdict are returned unchanged.
    expect(verifyBuild(passed, null, BUILD)).toBe(passed);
    const wrong = gradeBuild('Imam sestra.', BUILD);
    expect(verifyBuild(wrong, check('Imam sestra.', [['sestra', 90]]), BUILD)).toBe(wrong);
  });
});

function toRehearse() {
  render(<GuidedSpeakingScreen goBack={vi.fn()} award={vi.fn()} />);
  fireEvent.click(screen.getByTestId('gs-to-rehearse'));
}

async function sayIt(testId: string) {
  fireEvent.click(screen.getByTestId(testId)); // start
  fireEvent.click(screen.getByTestId(testId)); // stop → assessed
  await act(async () => {});
}

describe('the screen, recording checked against the target', () => {
  it('REHEARSE: shows the word-by-word readout and holds back "right" for a missed word', async () => {
    postMock.mockResolvedValue(
      azure(PHRASE, [
        ['Zovem', 92],
        ['se', 90],
        ['Ivana', 88],
        ['i', 90],
        ['dolazim', 0, 'Omission'],
        ['iz', 85],
        ['Kanade', 80],
      ]),
    );
    toRehearse();
    await sayIt('gs-assess-phrase');
    await waitFor(() => expect(screen.getByTestId('gs-heard-words')).toBeTruthy());
    const missed = screen
      .getByTestId('gs-heard-words')
      .querySelector('[data-status="missing"]') as HTMLElement;
    expect(missed.textContent).toMatch(/dolazim/);
    expect(screen.getByTestId('gs-heard').textContent).toContain('Zovem se Ivana');
    expect(screen.queryByText('Točno! ✓')).toBeNull();
    // The audio was scored against the phrase the learner was asked to say.
    expect(postMock.mock.calls[0]![0]).toBe('/api/pronunciation-assess');
    expect(postMock.mock.calls[0]![1]).toMatchObject({ referenceText: PHRASE, locale: 'hr-HR' });
  });

  it('BUILD: a form the recogniser wrote but the recording did not bear out is sent back', async () => {
    postMock.mockResolvedValue(
      azure('Imam sestru.', [
        ['Imam', 90],
        ['sestru', 30, 'Mispronunciation'],
      ]),
    );
    toRehearse();
    for (;;) {
      const n = screen.queryByTestId('gs-phrase-next');
      if (!n) break;
      fireEvent.click(n);
    }
    await sayIt('gs-assess-build');
    await waitFor(() => expect(screen.getByTestId('gs-build-contrast')).toBeTruthy());
    expect(screen.getByTestId('gs-build-contrast').textContent).toMatch(/does not bear it out/);
    expect(screen.queryByTestId('gs-build-right')).toBeNull();
    expect(postMock.mock.calls[0]![1]).toMatchObject({ referenceText: BUILD.answer });
  });

  it('BUILD: a clearly heard required form passes', async () => {
    postMock.mockResolvedValue(
      azure('Imam sestru.', [
        ['Imam', 90],
        ['sestru', 91],
      ]),
    );
    toRehearse();
    for (;;) {
      const n = screen.queryByTestId('gs-phrase-next');
      if (!n) break;
      fireEvent.click(n);
    }
    await sayIt('gs-assess-build');
    await waitFor(() => expect(screen.getByTestId('gs-build-right')).toBeTruthy());
  });

  it('an unconfigured service falls back to the old path, says so, and is not retried', async () => {
    postMock.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ ok: false, error: 'not_configured' }),
    });
    toRehearse();
    await sayIt('gs-assess-phrase');
    await waitFor(() => expect(screen.getByTestId('gs-assess-phrase-notice')).toBeTruthy());
    expect(screen.getByTestId('gs-assess-phrase-notice').textContent).toMatch(
      /Word-by-word check unavailable/,
    );
    // The next phrase does not offer the assessed mic again…
    fireEvent.click(screen.getByTestId('gs-phrase-next'));
    expect(screen.queryByTestId('gs-assess-phrase')).toBeNull();
    // …and neither does the BUILD stage's freshly mounted one: the answer is remembered
    // for the session, not only by the component that received it.
    for (;;) {
      const n = screen.queryByTestId('gs-phrase-next');
      if (!n) break;
      fireEvent.click(n);
    }
    expect(screen.getByTestId('gs-build')).toBeTruthy();
    expect(screen.queryByTestId('gs-assess-build')).toBeNull();
    expect(postMock).toHaveBeenCalledTimes(1);
  });

  it('a device that cannot record keeps the old path and never calls the service', () => {
    delete (window as unknown as { MediaRecorder?: unknown }).MediaRecorder;
    toRehearse();
    expect(screen.queryByTestId('gs-assess-phrase')).toBeNull();
    expect(postMock).not.toHaveBeenCalled();
  });
});
