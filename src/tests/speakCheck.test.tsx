// src/tests/speakCheck.test.tsx
//
// The free-speaking answer checked against its own recording, final devoicing, one WAV
// format for Azure, and the Stop button that never came back (2026-09-29).

import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';

const postMock = vi.fn();
const coachMock = vi.fn();
const recorderStarts = { n: 0 };
const dataUrlMock = vi.fn(async (_b: Blob) => 'data:audio/webm;base64,eA==');
vi.mock('../lib/nativePost.js', () => ({
  _nativePost: (...a: unknown[]) => postMock(...a),
  getLastTransportFailure: () => null,
}));
vi.mock('../lib/audio', () => ({
  speak: vi.fn(async () => 'azure'),
  getLastTtsFailure: () => null,
  describeTtsFailure: () => '',
  blobToDataUrl: (b: Blob) => dataUrlMock(b),
}));
vi.mock('../lib/speakingCoach', () => ({
  requestSpeakingCoach: (...a: unknown[]) => coachMock(...a),
  COACH_MIN_WORDS: 5,
}));
vi.mock('../lib/sessionSignal', () => ({ signalSessionCompleteIfActive: vi.fn() }));
vi.mock('../lib/teachPractice', () => ({ recordScreenPractised: vi.fn() }));
vi.mock('../lib/cefrCertification', () => ({ getCurrentContentLevel: () => 'A1' }));
vi.mock('../hooks/useOnlineStatus', () => ({ useOnlineStatus: () => ({ isOnline: true }) }));
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
        startRecording: () => {
          recorderStarts.n += 1;
          setState('recording');
        },
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

import { encodeWav16, toWav16k, WAV_SAMPLE_RATE } from '../lib/audioWav';
import { checkedWords, onlyFinalDevoiced, unconfirmedWords } from '../lib/spokenCheck';
import GuidedSpeakingScreen from '../components/practice/GuidedSpeakingScreen';
import { _resetAssessedMic } from '../components/practice/AssessedMic';
import { _resetSpeakCheck } from '../components/practice/SpeakCheck';
import { assessTake } from '../lib/assessTake';

// ── A recogniser the test drives ────────────────────────────────────────────────────
class FakeRec {
  static last: FakeRec | null = null;
  static starts = 0;
  lang = '';
  continuous = false;
  interimResults = false;
  onresult: ((e: unknown) => void) | null = null;
  onerror: ((e: { error?: string }) => void) | null = null;
  onend: (() => void) | null = null;
  start() {
    FakeRec.last = this;
    FakeRec.starts += 1;
  }
  stop() {}
  abort() {}
  say(t: string) {
    this.onresult?.({ results: [[{ transcript: t }]] });
  }
}

const GOOD =
  'Zovem se Marko i dolazim iz Kanade i živim u Zagrebu i učim hrvatski svaki dan jer volim jezik';

function azureFor(text: string, flag: string) {
  return {
    ok: true,
    status: 200,
    json: async () => ({
      ok: true,
      recognized: text,
      word_scores: text.split(' ').map((w) => ({
        word: w,
        score: w === flag ? 30 : 90,
        error: w === flag ? 'Mispronunciation' : 'None',
      })),
    }),
  };
}

function toSpeak() {
  render(<GuidedSpeakingScreen goBack={vi.fn()} award={vi.fn()} />);
  fireEvent.click(screen.getByTestId('gs-to-rehearse'));
  for (const id of ['gs-phrase-next', 'gs-build-next']) {
    for (;;) {
      const n = screen.queryByTestId(id);
      if (!n) break;
      fireEvent.click(n);
    }
  }
  expect(screen.getByTestId('gs-your-turn')).toBeTruthy();
}

beforeEach(() => {
  localStorage.clear();
  postMock.mockReset();
  coachMock.mockReset();
  dataUrlMock.mockClear();
  coachMock.mockResolvedValue(null);
  recorderStarts.n = 0;
  FakeRec.last = null;
  FakeRec.starts = 0;
  _resetAssessedMic();
  _resetSpeakCheck();
  const w = window as unknown as Record<string, unknown>;
  w.webkitSpeechRecognition = FakeRec;
  w.MediaRecorder = class {};
  Object.defineProperty(navigator, 'mediaDevices', {
    configurable: true,
    value: { getUserMedia: vi.fn() },
  });
});

describe('one format for Azure: 16 kHz mono WAV', () => {
  it('encodes a valid PCM WAV header and clamps samples', () => {
    const wav = encodeWav16(new Float32Array([0, 1, -1, 2]));
    const v = new DataView(wav.buffer);
    const tag = (o: number) => String.fromCharCode(...wav.slice(o, o + 4));
    expect(tag(0)).toBe('RIFF');
    expect(tag(8)).toBe('WAVE');
    expect(v.getUint16(22, true)).toBe(1); // mono
    expect(v.getUint32(24, true)).toBe(WAV_SAMPLE_RATE);
    expect(v.getUint32(40, true)).toBe(8); // 4 samples × 2 bytes
    expect(v.getInt16(46, true)).toBe(0x7fff);
    expect(v.getInt16(50, true)).toBe(0x7fff); // 2 is clamped to 1
  });

  it('converts through Web Audio, and returns null where it cannot', async () => {
    expect(await toWav16k(new Blob(['x']))).toBeNull(); // jsdom: no OfflineAudioContext
    const w = window as unknown as Record<string, unknown>;
    w.OfflineAudioContext = FakeOffline;
    const out = await toWav16k(new Blob(['x'], { type: 'audio/mp4' }));
    delete w.OfflineAudioContext;
    expect(out?.type).toBe('audio/wav');
    expect(out?.size).toBe(44 + 0.5 * WAV_SAMPLE_RATE * 2);
  });

  it('the assessment is sent the converted WAV, labelled as such', async () => {
    const w = window as unknown as Record<string, unknown>;
    w.OfflineAudioContext = FakeOffline;
    postMock.mockResolvedValue(azureFor('Bog', ''));
    const out = await assessTake(new Blob(['x'], { type: 'audio/mp4' }), 'audio/mp4', 'Bog', 't');
    delete w.OfflineAudioContext;
    expect(out.ok).toBe(true);
    expect(dataUrlMock.mock.calls[0]![0].type).toBe('audio/wav');
    expect(postMock.mock.calls[0]![1]).toMatchObject({ audioMimeType: 'audio/wav' });
  });
});

class FakeOffline {
  length: number;
  constructor(_c: number, length: number) {
    this.length = length;
  }
  decodeAudioData = async () => ({ duration: 0.5 });
  createBufferSource = () => ({ buffer: null, connect: () => {}, start: () => {} });
  destination = {};
  startRendering = async () => ({ getChannelData: () => new Float32Array(this.length) });
}

describe('final devoicing is not a mistake', () => {
  it('a word weak only in its final voiced consonant is clear', () => {
    const p = (...s: number[]) => s.map((score) => ({ score }));
    expect(onlyFinalDevoiced('Bog', p(92, 90, 20))).toBe(true);
    expect(onlyFinalDevoiced('grad', p(90, 90, 88, 15))).toBe(true);
    expect(onlyFinalDevoiced('Bog', p(30, 90, 20))).toBe(false); // an earlier sound was weak
    expect(onlyFinalDevoiced('sestru', p(90, 90, 90, 90, 90, 10))).toBe(false); // a vowel ending
    const w = checkedWords([
      { word: 'Bog', score: 55, error: 'Mispronunciation', phonemes: p(92, 90, 20) },
      { word: 'sestru', score: 55, error: 'Mispronunciation', phonemes: p(90, 90, 90, 90, 90, 10) },
    ]);
    expect(w.map((x) => x.status)).toEqual(['good', 'unclear']);
  });

  it('unconfirmed words are the unclear and missing ones, once each', () => {
    const check = {
      recognized: '',
      words: checkedWords([
        { word: 'u', score: 90 },
        { word: 'Zagrebu', score: 20 },
        { word: 'Zagrebu', score: 20 },
        { word: 'jer', score: 0, error: 'Omission' },
        { word: 'da', score: 70, error: 'Insertion' },
      ]),
    };
    expect(unconfirmedWords(check)).toEqual(['Zagrebu', 'jer']);
  });
});

describe('SPEAK: the transcript is checked against its own recording', () => {
  async function speakAndStop(text: string) {
    fireEvent.click(screen.getByTestId('gs-record')); // start
    act(() => FakeRec.last!.say(text));
    fireEvent.click(screen.getByTestId('gs-record')); // stop
    await act(async () => {});
  }

  it('marks what the recording did not bear out and tells the coach', async () => {
    postMock.mockResolvedValue(azureFor(GOOD, 'Zagrebu'));
    toSpeak();
    await speakAndStop(GOOD);
    await waitFor(() => expect(screen.getByTestId('gs-speak-words')).toBeTruthy());
    expect(screen.getByTestId('gs-speak-unconfirmed').textContent).toMatch(/One word was/);
    // The reference is the learner's own transcript.
    expect(postMock.mock.calls[0]![1]).toMatchObject({ referenceText: GOOD });
    fireEvent.click(screen.getByTestId('gs-submit'));
    await waitFor(() => expect(coachMock).toHaveBeenCalled());
    expect(coachMock.mock.calls[0]![0]).toMatchObject({ unconfirmed: ['Zagrebu'] });
  });

  it('an edit after the check withdraws it, from the screen and from the coach', async () => {
    postMock.mockResolvedValue(azureFor(GOOD, 'Zagrebu'));
    toSpeak();
    await speakAndStop(GOOD);
    await waitFor(() => expect(screen.getByTestId('gs-speak-words')).toBeTruthy());
    fireEvent.change(screen.getByTestId('gs-transcript'), { target: { value: `${GOOD} opet` } });
    expect(screen.getByTestId('gs-speak-check-stale')).toBeTruthy();
    fireEvent.click(screen.getByTestId('gs-submit'));
    await waitFor(() => expect(coachMock).toHaveBeenCalled());
    expect(coachMock.mock.calls[0]![0]).toMatchObject({ unconfirmed: [] });
  });

  it('if recording alongside breaks the recogniser, the take is dropped and not repeated', async () => {
    toSpeak();
    fireEvent.click(screen.getByTestId('gs-record'));
    expect(recorderStarts.n).toBe(1);
    act(() => FakeRec.last!.onerror!({ error: 'audio-capture' }));
    await act(async () => {});
    expect(postMock).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId('gs-record'));
    expect(FakeRec.starts).toBe(2); // the recogniser still works…
    expect(recorderStarts.n).toBe(1); // …without a recording beside it
  });

  it('Stop brings the button back, so the learner can take it again', async () => {
    postMock.mockResolvedValue(azureFor(GOOD, ''));
    toSpeak();
    fireEvent.click(screen.getByTestId('gs-record'));
    expect(screen.getByTestId('gs-record').textContent).toMatch(/Stop/);
    fireEvent.click(screen.getByTestId('gs-record'));
    expect(screen.getByTestId('gs-record').textContent).toMatch(/Start speaking/);
    fireEvent.click(screen.getByTestId('gs-record'));
    expect(FakeRec.starts).toBe(2);
  });
});
