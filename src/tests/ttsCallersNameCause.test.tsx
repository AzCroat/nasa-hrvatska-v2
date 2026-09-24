/**
 * ttsCallersNameCause.test.tsx — the library recorded the cause and nine of
 * the ten screens threw it away.
 *
 * THE 2026-09-10 FIX WAS THE FIRST HALF OF ITS OWN RULE. It found that
 * `ttsFetch` — the other client path to /api/tts, used by AI Listening, Maja,
 * the live tutor, the news reader, Story Mode, Heritage Story, the graded
 * reader, Writing, Speaking Sprint and Phrase of the Day — recorded nothing,
 * and gave it `_classifyHttpFailure`, `getLastTtsFailure` and a Sentry report.
 * It then wrote the rule this file exists to finish enforcing:
 *
 *     NEVER: instrument one path to an endpoint and describe the endpoint as
 *     covered — enumerate the callers.
 *
 * The callers were enumerated for RECORDING. They were never enumerated for
 * TELLING, and recording is not telling. Measured 2026-09-23, all ten sites:
 *
 *   AIListeningScreen     names the cause inline            correct
 *   SpeakingSprintScreen  "Check your connection..."        WRONG — every cause
 *   LiveTutorScreen       "Check your ... headphones"       WRONG — every cause,
 *                                                           and the NATIVE branch
 *                                                           never counted a refusal
 *                                                           at all, so on device
 *                                                           the warning was
 *                                                           unreachable
 *   News, PhraseOfDay, HeritageStory, StoryMode,
 *   GradedInput, Writing, Maja                 silent
 *
 * The seven silences LOOKED deliberate: the audio directive does say a failed
 * play on a TEXT-FIRST surface "costs the sound and nothing else". But that
 * rule is about `speak()` callers, where `_completeSpeak` dispatches
 * `nh:tts-failed` and the site-wide toast names the cause. `ttsFetch` never
 * dispatched it, so on the fetch path there was no toast behind the silence —
 * the same quiet, with nothing underneath.
 *
 * The fix is one dispatch in the library plus the two screens that said
 * something FALSE, because a wrong sentence beside a correct toast is worse
 * than either alone.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import React from 'react';

vi.mock('../lib/quests.js', () => ({ markQuest: vi.fn() }));
vi.mock('../context/StatsContext', () => ({
  useStats: () => ({
    stats: { vs: [], xp: 0 },
    setStats: vi.fn(),
    writeDelta: vi.fn(),
    dispatch: vi.fn(),
    award: vi.fn(),
    level: 1,
  }),
}));
vi.mock('../hooks/useOnlineStatus', () => ({ useOnlineStatus: () => ({ isOnline: true }) }));
vi.mock('../lib/platform.js', () => ({
  isSpeechRecognitionSupported: vi.fn(() => false),
  isNative: vi.fn(() => false),
  isIos: vi.fn(() => false),
  isAndroid: vi.fn(() => false),
}));
vi.mock('../lib/soundSettings.js', () => ({
  getVoicePreference: vi.fn(() => 'hr-HR-SreckoNeural'),
  getSpeechRate: vi.fn(() => 1),
}));

import SpeakingSprintScreen from '../components/practice/SpeakingSprintScreen';
import { ttsFetch, getLastTtsFailure, describeTtsFailure } from '../lib/audio';

const realFetch = globalThis.fetch;

/** The refusal a learner meets after a heavy day of practice. */
const QUOTA_429 = () =>
  new Response(JSON.stringify({ error: 'daily_quota_exceeded' }), {
    status: 429,
    headers: { 'X-TTS-Backends': 'azure' },
  });

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn());
  // A real play is what clears the recorder; start each case from clean.
  (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
    new Response('x'.repeat(4000), { status: 200, headers: { 'X-TTS-Backends': 'edge' } }),
  );
});
afterEach(() => {
  vi.unstubAllGlobals();
  globalThis.fetch = realFetch;
  vi.useRealTimers();
});

// ───────────────────────────────────────────────────────────────────────────
// THE LIBRARY: the event that was raised on one path and not the other
// ───────────────────────────────────────────────────────────────────────────
describe('ttsFetch raises the same failure event speak() does', () => {
  it('dispatches nh:tts-failed carrying the NAMED reason, not a bare flag', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(QUOTA_429());
    const seen: Array<{ message?: string; cause?: string }> = [];
    const on = (e: Event) => seen.push((e as CustomEvent).detail);
    window.addEventListener('nh:tts-failed', on);
    await ttsFetch({ text: 'Dobar dan' });
    window.removeEventListener('nh:tts-failed', on);

    expect(
      seen.length,
      'nine screens depend on this event for their only word about a refusal',
    ).toBe(1);
    expect(seen[0]!.cause).toBe('daily_quota');
    // The toast reads `detail.message` — a missing one renders the bare
    // "Audio unavailable" this whole area exists to abolish.
    expect(seen[0]!.message).toMatch(/allowance is used up/i);
  });

  it('a SUCCESSFUL play raises nothing', async () => {
    const seen: Event[] = [];
    const on = (e: Event) => seen.push(e);
    window.addEventListener('nh:tts-failed', on);
    await ttsFetch({ text: 'Dobar dan' });
    window.removeEventListener('nh:tts-failed', on);
    expect(seen).toHaveLength(0);
  });

  it('a caller CANCELLING is not a failure and raises nothing', async () => {
    // `_nativePost` re-throws an AbortError rather than returning null, so a
    // superseded or abandoned play never reaches the classification. That is
    // the speak() path's `superseded` rule holding here by construction; it is
    // asserted because a future `catch` around that throw would break it
    // silently and start toasting every screen a learner walks away from.
    const c = new AbortController();
    c.abort();
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(
      new DOMException('Aborted.', 'AbortError'),
    );
    const seen: Event[] = [];
    const on = (e: Event) => seen.push(e);
    window.addEventListener('nh:tts-failed', on);
    await expect(ttsFetch({ text: 'Dobar dan' }, c.signal)).rejects.toThrow();
    window.removeEventListener('nh:tts-failed', on);
    expect(seen).toHaveLength(0);
  });

  it('both raisers go through ONE function, so the wording cannot fork', () => {
    // Three copies of an XP-band formula agreed with each other and with
    // nothing that mattered (2026-09-06). Two copies of a dispatch would do
    // the same: reword a cause and half the app keeps the old sentence.
    const src = readFileSync('src/lib/audio.ts', 'utf8')
      .replace(/\/\/[^\n]*/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');
    const raw = [...src.matchAll(/new CustomEvent\(\s*'nh:tts-failed'/g)];
    expect(raw.length, 'a second inline dispatch has appeared — route it through the helper').toBe(
      1,
    );
    expect([...src.matchAll(/_dispatchTtsFailed\(/g)].length).toBeGreaterThanOrEqual(3);
  });
});

// ───────────────────────────────────────────────────────────────────────────
// THE SCREEN THAT BLAMED THE CONNECTION
// ───────────────────────────────────────────────────────────────────────────
describe('Speaking Sprint names the cause instead of the connection', () => {
  /** setup -> countdown -> speaking -> (skip) -> model, all real components. */
  async function reachModelPhase() {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    render(<SpeakingSprintScreen goBack={vi.fn()} award={vi.fn()} />);
    fireEvent.click(await screen.findByRole('button', { name: /start/i }));
    // One tick per second, each one a state update the next effect depends on:
    // a single 4 s jump fires the first timer and then has nothing scheduled.
    for (let i = 0; i < 4; i++) {
      await act(async () => {
        vi.advanceTimersByTime(1000);
      });
    }
    fireEvent.click(await screen.findByRole('button', { name: /skip/i }));
  }

  it('a used-up daily allowance does not read as a bad connection', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(QUOTA_429());
    await reachModelPhase();
    await waitFor(() => expect(screen.getByText(/allowance is used up/i)).toBeTruthy());
    // THE REPORTED STRING, asserted as absent. This is the sentence that was
    // there for every cause: it sends a learner to fix something that is fine.
    expect(screen.queryByText(/check your connection/i)).toBeNull();
  });

  it('a paused monthly budget says so, and says when it returns', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(
      new Response(JSON.stringify({ error: 'monthly_budget_exhausted' }), {
        status: 429,
        headers: { 'X-TTS-Backends': 'azure' },
      }),
    );
    await reachModelPhase();
    await waitFor(() => expect(screen.getByText(/returns on the 1st/i)).toBeTruthy());
  });

  it('a failure AFTER a good fetch is named as playback, never left nameless', async () => {
    // jsdom has no `HTMLMediaElement.play`, so a 200 reaches the playback code
    // and throws there — the real shape of "the audio arrived and would not
    // play". `_lastTtsFailure` is null on that path, and the default sentence
    // is the one this whole area exists to abolish.
    await reachModelPhase();
    await waitFor(() => expect(screen.getByText(/isn't muted/i)).toBeTruthy());
    expect(screen.queryByText("The audio couldn't be played.")).toBeNull();
  });

  it('a genuinely dropped connection still says connection', async () => {
    // The other direction, and the one that keeps the fix honest: replacing a
    // wrong sentence with a different wrong sentence is not an improvement.
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new TypeError('fetch failed'));
    await reachModelPhase();
    await waitFor(() => expect(screen.getByText(/check your connection/i)).toBeTruthy());
  });
});

// ───────────────────────────────────────────────────────────────────────────
// THE LIVE TUTOR: a warning that blamed the headphones, unreachable on native
// ───────────────────────────────────────────────────────────────────────────
describe('the live tutor warning', () => {
  const SRC = readFileSync('src/components/croatia/LiveTutorScreen.tsx', 'utf8');
  const code = SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

  it('says the recorded cause when there is one, and the device advice only when there is not', () => {
    expect(code).toMatch(/audioWarningCause\s*\n?\s*\?\s*describeTtsFailure\(audioWarningCause\)/);
    expect(code).toMatch(/:\s*'Not hearing Marija\?/);
  });

  it('counts a refusal on BOTH branches, through one function', () => {
    // The native branch returned early past the counter, so on Capacitor — the
    // only branch that runs there, MediaSource being absent — the warning could
    // never appear however many replies went unheard.
    // The declaration is `const noteTtsFailure = useCallback(`, so these two
    // are the CALL sites — one per branch, which is the whole point.
    expect([...code.matchAll(/noteTtsFailure\(\)/g)].length).toBe(2);
    expect(
      [...code.matchAll(/ttsFailCountRef\.current\s*\+=\s*1/g)].length,
      'a branch is counting by hand again — the two will drift',
    ).toBe(1);
  });

  it('captures the cause when the warning goes UP, not at render', () => {
    // A later successful play clears the module-level recorder. Read at render,
    // a warning still on screen would silently revert to the device advice.
    // Asserted as a RELATION, not as one line: the recorder is read where the
    // warning is raised, and the render reads only the captured state. A pin on
    // the literal call broke the moment the read was wrapped to be fail-soft.
    const raise = code.slice(code.indexOf('const noteTtsFailure'));
    expect(raise.slice(0, raise.indexOf('}, []);'))).toMatch(/getLastTtsFailure\(\)/);
    const render = code.slice(code.indexOf('showAudioWarning && ('));
    expect(
      render,
      'the render reads the live recorder — a later success clears it and the warning reverts',
    ).not.toMatch(/getLastTtsFailure\(\)/);
  });
});

// ───────────────────────────────────────────────────────────────────────────
// ANTI-VACUITY — the shape above measures nothing if the cause is nameless
// ───────────────────────────────────────────────────────────────────────────
describe('the causes these screens report are real sentences', () => {
  it('the quota refusal is classified, not defaulted', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValue(QUOTA_429());
    await ttsFetch({ text: 'Dobar dan' });
    const f = getLastTtsFailure();
    expect(f?.cause).toBe('daily_quota');
    expect(describeTtsFailure(f)).not.toBe("The audio couldn't be played.");
  });
});
