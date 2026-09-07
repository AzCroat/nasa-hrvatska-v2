// src/hooks/useHeardGate.ts
//
// "Heard" gate for audio-first practice (2026-09-06). A listening item whose
// recording never played must not be answered blind and scored — the Level
// Check learned this the hard way (ExamRunner). The same rule now covers the
// practice screens where the AUDIO IS THE QUESTION: the Listening quiz and
// Dictation. Text-first screens (the Croatian is on screen and the speaker
// icon is a supplement) do not need it — a failed play there costs nothing
// but the sound, and the site-wide toast now names why.
//
// The hook owns one item's audio state. `play`/`playSlow` resolve to speak()'s
// result and move the state: 'played' only when the recording played to the
// end, 'failed' with the recorded cause otherwise. A superseded play (the
// learner tapped again mid-fetch) leaves the state to the newer play. `reset`
// is called when the item advances so the next one starts locked.
import { useCallback, useRef, useState } from 'react';
import { speak, speakSlow, getLastTtsFailure, type TtsFailure } from '../lib/audio';

export type HeardStatus = 'idle' | 'playing' | 'played' | 'failed';

export interface HeardGate {
  status: HeardStatus;
  failure: TtsFailure | null;
  /** True once the recording has played to the end at least once. */
  heard: boolean;
  play: (text: string, opts?: { voice?: string; rate?: string }) => Promise<string>;
  playSlow: (text: string, opts?: { voice?: string }) => Promise<string>;
  reset: () => void;
}

export function useHeardGate(): HeardGate {
  const [status, setStatus] = useState<HeardStatus>('idle');
  const [failure, setFailure] = useState<TtsFailure | null>(null);
  const genRef = useRef(0);

  const run = useCallback(async (fn: () => Promise<string>): Promise<string> => {
    const gen = ++genRef.current;
    setStatus((s) => (s === 'played' ? 'played' : 'playing'));
    setFailure(null);
    let result: string;
    try {
      result = await fn();
    } catch {
      result = 'failed';
    }
    if (genRef.current !== gen) return result; // reset or a newer play won
    if (result === 'superseded') return result; // the newer play reports
    if (result === 'failed') {
      setStatus('failed');
      setFailure(getLastTtsFailure());
      return result;
    }
    setStatus('played');
    return result;
  }, []);

  const play = useCallback(
    (text: string, opts?: { voice?: string; rate?: string }) => run(() => speak(text, opts)),
    [run],
  );
  const playSlow = useCallback(
    (text: string, opts?: { voice?: string }) => run(() => speakSlow(text, opts)),
    [run],
  );
  const reset = useCallback(() => {
    genRef.current++;
    setStatus('idle');
    setFailure(null);
  }, []);

  return { status, failure, heard: status === 'played', play, playSlow, reset };
}
