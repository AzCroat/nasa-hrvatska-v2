/**
 * gradedInputScreen.transport.test.tsx
 *
 * R4 Phase 2A — Task 4:
 * Verifies that assessPronunciation() in GradedInputScreen posts the CORRECT
 * backend keys { audioBase64, referenceText, locale, audioMimeType } via
 * _nativePost and does NOT use the old wrong keys { audio, text }.
 *
 * Coverage:
 *   1. _nativePost called with correct keys — no wrong { audio, text } keys.
 *   2. Successful response: parsed scores set on the paragraph result.
 *   3. _nativePost returns null → assessPronunciation throws → assessError shown.
 *   4. blobToBase64 (chunked encoder) is used instead of hand-rolled byte loop.
 */
import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';

// ── vi.hoisted — must be hoisted before vi.mock ──────────────────────────────
const mockNativePost = vi.hoisted(() => vi.fn());
const mockBlobToBase64 = vi.hoisted(() => vi.fn(async (_blob: Blob) => 'MOCK_BASE64'));

// ── _nativePost mock ──────────────────────────────────────────────────────────
vi.mock('../lib/nativePost.js', () => ({
  _nativePost: (...args: unknown[]) => mockNativePost(...args),
}));

// ── audio mock: blobToBase64 is the chunked encoder from audio.ts ─────────────
vi.mock('../lib/audio.js', () => ({
  unlockAudio: vi.fn(),
  ttsFetch: vi.fn(async () => null),
  blobToBase64: (...args: unknown[]) => mockBlobToBase64(...args),
}));

// ── Other deps ─────────────────────────────────────────────────────────────────
vi.mock('../data', () => ({ speak: vi.fn() }));
vi.mock('../lib/apiFetch.js', () => ({ apiFetch: vi.fn(async () => ({ ok: false })) }));
vi.mock('../lib/soundSettings.js', () => ({ getVoicePreference: () => 'female' }));
vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../lib/recentErrors', () => ({ appendRecentError: vi.fn() }));
vi.mock('../lib/recentReads', () => ({
  recordStoryRead: vi.fn(),
  getRecentReads: vi.fn(() => []),
  getRecentReadsExtended: vi.fn(() => []),
}));
vi.mock('../lib/platform', () => ({
  getMicPermissionPlatform: () => 'desktop',
}));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({
    stats: { vs: [] as string[], lc: 0, gc: 0, xp: 0 },
    setStats: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
    writeDelta: vi.fn(),
  }),
  StatsProvider: ({ children }: { children: React.ReactNode }) =>
    React.createElement(React.Fragment, null, children),
}));

const recorderMock = vi.fn();
vi.mock('../hooks/useRecorder', () => ({
  useRecorder: () => recorderMock(),
}));

vi.mock('../lib/contentClient', () => ({
  getStoryCatalog: vi.fn(async () => []),
  getStory: vi.fn(async () => {
    throw new Error('not_found');
  }),
}));

// ── Story fixture ─────────────────────────────────────────────────────────────
const SAMPLE_STORY = {
  id: 'transport_test',
  title: 'Transport Test',
  titleEn: 'Transport Test',
  level: 'A1' as const,
  focus: 'Testing',
  icon: '🔬',
  duration: 2,
  intro: 'Test story intro.',
  paragraphs: [{ hr: 'Ana ide.', en: 'Ana goes.' }],
  vocabulary: [],
  quiz: [],
};

function recorderState(overrides: Record<string, unknown> = {}) {
  return {
    state: 'idle' as const,
    micAvailable: null,
    audioBlob: null,
    audioUrl: null,
    countdown: 0,
    error: null,
    startRecording: vi.fn(),
    stopRecording: vi.fn(),
    playback: vi.fn(),
    reset: vi.fn(),
    ...overrides,
  };
}

/**
 * DRIVE THE REAL PATH — the reason this file's assertions were dead (2026-09-24).
 *
 * `assessPronunciation` runs from an effect that returns early unless
 * `recordingIdx !== null`, and `recordingIdx` is only set by clicking the
 * per-paragraph record button. Every test here used to flip the recorder mock
 * to 'done' WITHOUT that click, so the effect bailed, `_nativePost` was never
 * called, and each test's assertions — all of which sat behind
 * `if (mockNativePost.mock.calls.length > 0)` or a loop over the same empty
 * array — ran zero times. Three green tests, nothing checked, for as long as
 * the file existed.
 *
 * This helper performs the click first, so the state the effect requires is the
 * state a learner actually produces.
 */
async function recordParagraph(blob: Blob) {
  recorderMock.mockReturnValue(recorderState({ state: 'idle' }));
  const { StoryReader } = await import('../components/learn/GradedInputScreen');
  const view = render(
    <StoryReader story={SAMPLE_STORY as never} onStartQuiz={vi.fn()} goBack={vi.fn()} />,
  );

  // The click is what sets recordingIdx — without it the effect returns early.
  await act(async () => {
    fireEvent.click(screen.getByLabelText(/Record your pronunciation/i));
  });

  // Now the recorder finishes with audio.
  recorderMock.mockReturnValue(recorderState({ state: 'done', audioBlob: blob }));
  await act(async () => {
    view.rerender(
      <StoryReader story={SAMPLE_STORY as never} onStartQuiz={vi.fn()} goBack={vi.fn()} />,
    );
  });
  await act(async () => {}); // flush the async effect body

  return view;
}

// ── Import the exported StoryReader for direct testing ────────────────────────
// We import dynamically inside each test to pick up fresh mocks.

describe('assessPronunciation — correct keys via _nativePost (Task 4)', () => {
  beforeEach(() => {
    recorderMock.mockReset();
    mockNativePost.mockReset();
    mockBlobToBase64.mockReset();
    mockBlobToBase64.mockResolvedValue('MOCK_BASE64');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('_nativePost is called with { audioBase64, referenceText, locale, audioMimeType } — not old wrong keys', async () => {
    const fakeBlob = new Blob([new Uint8Array([1, 2, 3])], { type: 'audio/webm' });
    mockNativePost.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ overall: 78, accuracy: 80, fluency: 75, word_scores: [] }),
    });

    await recordParagraph(fakeBlob);

    // UNCONDITIONAL, and that is the point: a guarded version of this block
    // passed for as long as the call never happened.
    expect(mockNativePost).toHaveBeenCalledTimes(1);
    const [path, body] = mockNativePost.mock.calls[0] as [string, Record<string, unknown>];
    expect(path).toBe('/api/pronunciation-assess');
    expect(body).toHaveProperty('audioBase64');
    expect(body).toHaveProperty('referenceText', 'Ana ide.');
    expect(body).toHaveProperty('locale', 'hr-HR');
    expect(body).toHaveProperty('audioMimeType', 'audio/webm');
    // WRONG old keys must NOT be present
    expect(body.audio).toBeUndefined();
    expect(body.text).toBeUndefined();
    // blobToBase64 (the chunked encoder) is used, not a hand-rolled byte loop
    expect(mockBlobToBase64).toHaveBeenCalledWith(fakeBlob);
    expect(body.audioBase64).toBe('MOCK_BASE64');
  });

  it('_nativePost returns null → assessPronunciation throws → assessError state set', async () => {
    const fakeBlob = new Blob([new Uint8Array([4, 5, 6])], { type: 'audio/webm' });
    mockNativePost.mockResolvedValueOnce(null); // transport failure

    await recordParagraph(fakeBlob);

    expect(mockNativePost).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('reader-assess-failed')).toHaveTextContent(/connection/i);
  });

  it('StoryReader renders paragraph text and mic button without crashing when recorder is idle', async () => {
    recorderMock.mockReturnValue(recorderState({ state: 'idle' }));
    const { StoryReader } = await import('../components/learn/GradedInputScreen');

    render(<StoryReader story={SAMPLE_STORY as never} onStartQuiz={vi.fn()} goBack={vi.fn()} />);

    expect(screen.getByText('Ana ide.')).toBeInTheDocument();
    // Mic button should be present (aria-label includes 'Record' or 'pronunciation')
    expect(screen.getByLabelText(/Record your pronunciation/i)).toBeInTheDocument();
  });
});

/**
 * Unit-level contract: assessPronunciation posts correct keys.
 * This imports the module to call the function's behavior via StoryReader's
 * useEffect trigger — the key assertion is that _nativePost body never
 * contains the old { audio, text } keys from the pre-fix code.
 */
describe('assessPronunciation — backward-compatibility guard (old keys must not appear)', () => {
  it('payload never contains wrong key "audio" (was: { audio: base64 })', async () => {
    const fakeBlob = new Blob([new Uint8Array([7, 8, 9])], { type: 'audio/ogg' });
    mockNativePost.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ overall: 70, accuracy: 65, fluency: 75, word_scores: [] }),
    });

    await recordParagraph(fakeBlob);

    // A loop over mock.calls was the third dead assertion in this file: with
    // zero calls it iterated zero times and proved nothing. The floor is what
    // makes the loop mean something.
    expect(mockNativePost.mock.calls.length).toBeGreaterThan(0);
    for (const call of mockNativePost.mock.calls) {
      const body = call[1] as Record<string, unknown>;
      expect(body.audio).toBeUndefined();
      expect(body.text).toBeUndefined();
      expect(body).toHaveProperty('audioBase64');
      expect(body).toHaveProperty('referenceText');
      expect(body).toHaveProperty('audioMimeType', 'audio/ogg');
    }
  });
});
