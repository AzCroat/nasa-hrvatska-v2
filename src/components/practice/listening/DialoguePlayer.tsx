import React, { useEffect, useRef, useState } from 'react';
import { speak, stopAudio } from '../../../lib/audio.ts';

export interface DialogueLine {
  /** Speaker tag — 'A' plays in the set narrator's voice, 'B' in the other native voice. */
  s: 'A' | 'B';
  hr: string;
}

/**
 * DialoguePlayer — two-voice sequential playback for graded listening
 * dialogues (listening-depth, 2026-08-14).
 *
 * Plays each line with its speaker's narrator (Gabrijela/Srećko), awaiting
 * end-of-playback between lines (speak() resolves when audio ENDS, so plain
 * sequential awaits give natural turn-taking). A generation counter guards
 * cancellation: Stop, replay, or unmount invalidates the running loop, and
 * stopAudio() halts the currently sounding line immediately.
 *
 * At B2+ a "native pace" toggle plays lines at true native rate ('0%' SSML
 * prosody) instead of the default study pace — the toggle re-generates
 * nothing on repeat listens (rate is part of every TTS cache identity).
 */
export default function DialoguePlayer({
  lines,
  voiceA,
  voiceB,
  accentColor,
  allowNativePace,
}: {
  lines: DialogueLine[];
  voiceA?: string;
  voiceB?: string;
  accentColor: string;
  allowNativePace?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [lineIdx, setLineIdx] = useState<number | null>(null);
  const [nativePace, setNativePace] = useState(false);
  const genRef = useRef(0);

  useEffect(() => {
    // Capture the (stable) ref object per the exhaustive-deps rule — the
    // cleanup invalidates any running playback loop and halts current audio.
    const gen = genRef;
    return () => {
      gen.current++;
      stopAudio();
    };
  }, []);

  async function play() {
    if (playing) return;
    const myGen = ++genRef.current;
    setPlaying(true);
    try {
      for (let i = 0; i < lines.length; i++) {
        if (genRef.current !== myGen) return;
        setLineIdx(i);
        const line = lines[i]!;
        const voice = line.s === 'A' ? voiceA : voiceB;
        const opts: { voice?: string; rate?: string } = {};
        if (voice) opts.voice = voice;
        if (nativePace) opts.rate = '0%';
        const result = await speak(line.hr, opts);
        if (genRef.current !== myGen) return;
        if (result === 'failed') break; // toast already dispatched by speak()
      }
    } finally {
      if (genRef.current === myGen) {
        setPlaying(false);
        setLineIdx(null);
      }
    }
  }

  function stop() {
    genRef.current++;
    stopAudio();
    setPlaying(false);
    setLineIdx(null);
  }

  return (
    <div
      style={{
        background: 'var(--card)',
        border: `1.5px dashed ${accentColor}`,
        borderRadius: 14,
        padding: '12px 16px',
        marginBottom: 14,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, fontSize: 12, fontWeight: 700, color: 'var(--subtext)' }}>
          🎭 Two-voice conversation — listen to the whole exchange, then answer line by line
          {playing && lineIdx !== null && (
            <span style={{ marginLeft: 6, color: accentColor }}>
              ({lineIdx + 1}/{lines.length})
            </span>
          )}
        </div>
        <button
          className="b bp"
          data-testid="play-dialogue"
          style={{ fontSize: 12, padding: '8px 14px', flexShrink: 0 }}
          onClick={playing ? stop : play}
        >
          {playing ? '⏹ Stop' : '▶ Play'}
        </button>
      </div>
      {allowNativePace && (
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginTop: 8,
            fontSize: 11,
            color: 'var(--subtext)',
            cursor: 'pointer',
            width: 'fit-content',
          }}
        >
          <input
            type="checkbox"
            data-testid="native-pace-toggle"
            checked={nativePace}
            onChange={(e) => setNativePace(e.target.checked)}
            disabled={playing}
          />
          Native pace (no slowdown)
        </label>
      )}
    </div>
  );
}
