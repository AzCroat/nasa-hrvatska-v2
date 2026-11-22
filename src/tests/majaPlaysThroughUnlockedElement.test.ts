// Maja fetches her reply before playing it, so she must play through the element the learner's
// tap unlocked. A `new Audio(url)` after the fetch is refused with NotAllowedError (Sentry
// tts_failed:playback, /maja). Guard: MajaScreen never constructs its own Audio.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const maja = readFileSync('src/components/croatia/MajaScreen.tsx', 'utf8');

describe('Maja playback', () => {
  it('uses the shared playback element, never new Audio(...)', () => {
    expect(maja).toMatch(/acquirePlaybackElement\(\)/);
    expect(maja).not.toMatch(/new Audio\(/);
  });
});
