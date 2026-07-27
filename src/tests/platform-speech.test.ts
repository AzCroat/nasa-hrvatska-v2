/**
 * platform-speech.test.ts — isDuckDuckGo() + isSpeechRecognitionSupported().
 *
 * Regression guard for the razgovor "can't speak on DuckDuckGo" bug: DDG's
 * WebKit exposes window.webkitSpeechRecognition as a non-functional stub, so a
 * bare presence check wrongly reports Web Speech as usable and voice dies on a
 * dead SpeechRecognition path. isSpeechRecognitionSupported() must return false
 * on DuckDuckGo so callers fall back to MediaRecorder→Whisper (or the keyboard).
 */
import { describe, it, expect, afterEach } from 'vitest';
import { isDuckDuckGo, isSpeechRecognitionSupported } from '../lib/platform';

const DDG_MOBILE_IOS =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 ' +
  '(KHTML, like Gecko) Version/18.6 Mobile/15E148 DuckDuckGo/26 Safari/605.1.15';
const CHROME_DESKTOP =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';

function setUA(ua: string) {
  Object.defineProperty(navigator, 'userAgent', { configurable: true, value: ua });
}

describe('isDuckDuckGo', () => {
  const originalUA = navigator.userAgent;
  afterEach(() => {
    Object.defineProperty(navigator, 'userAgent', { configurable: true, value: originalUA });
  });

  it('is true for the DuckDuckGo Mobile UA', () => {
    expect(isDuckDuckGo(DDG_MOBILE_IOS)).toBe(true);
  });
  it('is false for a normal Chrome UA', () => {
    expect(isDuckDuckGo(CHROME_DESKTOP)).toBe(false);
  });
  it('reads navigator.userAgent when no argument is passed', () => {
    setUA(DDG_MOBILE_IOS);
    expect(isDuckDuckGo()).toBe(true);
  });
});

describe('isSpeechRecognitionSupported', () => {
  const originalUA = navigator.userAgent;
  const w = window as unknown as Record<string, unknown>;
  const hadWebkit = 'webkitSpeechRecognition' in window;

  afterEach(() => {
    Object.defineProperty(navigator, 'userAgent', { configurable: true, value: originalUA });
    if (!hadWebkit) delete w.webkitSpeechRecognition;
  });

  it('is true when a SpeechRecognition impl exists on a non-DDG browser', () => {
    setUA(CHROME_DESKTOP);
    w.webkitSpeechRecognition = function () {};
    expect(isSpeechRecognitionSupported()).toBe(true);
  });

  it('is FALSE on DuckDuckGo even though webkitSpeechRecognition is present (dead stub)', () => {
    setUA(DDG_MOBILE_IOS);
    w.webkitSpeechRecognition = function () {}; // the non-functional stub DDG ships
    expect(isSpeechRecognitionSupported()).toBe(false);
  });

  it('is false when no SpeechRecognition impl exists at all', () => {
    setUA(CHROME_DESKTOP);
    delete w.webkitSpeechRecognition;
    delete w.SpeechRecognition;
    expect(isSpeechRecognitionSupported()).toBe(false);
  });
});
