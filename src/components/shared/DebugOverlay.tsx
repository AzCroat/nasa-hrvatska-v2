/**
 * DebugOverlay — the on-device diagnostic for "audio did not play".
 *
 * THIS FILE WAS A STUB RETURNING null, with the comment "DISABLED. Tablet
 * TTS/mascot issues resolved as of v2.2.0." They were not resolved. The owner
 * reported on 2026-09-09 that audio "has not once" played, which is the same
 * complaint as the 2026-09-06 Level Check listening failure — and CLAUDE.md
 * records the honest limit of that fix: "What was NOT established: which of
 * the refusal paths fired for the owner that day. Nothing recorded it."
 *
 * Nothing recorded it because the recorder was deleted. `audio.ts` writes a
 * detailed [Audio]/[TTS] trace through `debugLog` on every single play —
 * backend chain, HTTP status, decode path, playback events — and the only
 * consumer of that log was this component. It has been write-only ever since.
 *
 * This app's users are a diaspora on phones. "Open DevTools and read the
 * console" is not a diagnostic they can run; `nh_debug` console mirroring
 * already existed and was useless for the same reason. The log has to be
 * readable ON the device, which is what this renders.
 *
 * OFF BY DEFAULT and gated on localStorage `nh_debug === '1'`, so it costs a
 * normal learner nothing. Setting that key is safe and reversible — it is a
 * write, never a clear (NEVER-DO 1/9: nothing here may touch stored progress).
 */
import React, { useEffect, useState } from 'react';
import { getEntries, clearEntries, type LogEntry } from '../../lib/debugLog';

const LEVEL_COLOR: Record<string, string> = {
  info: '#93c5fd',
  warn: '#fcd34d',
  error: '#fca5a5',
};

function debugEnabled(): boolean {
  try {
    return typeof localStorage !== 'undefined' && localStorage.getItem('nh_debug') === '1';
  } catch {
    // Private mode / blocked storage — the overlay simply stays off.
    return false;
  }
}

export default function DebugOverlay() {
  const [on] = useState(debugEnabled);
  const [open, setOpen] = useState(false);
  const [entries, setEntries] = useState<readonly LogEntry[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!on) return;
    const sync = () => setEntries([...getEntries()]);
    sync();
    window.addEventListener('nh:debuglog', sync);
    return () => window.removeEventListener('nh:debuglog', sync);
  }, [on]);

  if (!on) return null;

  const text = entries
    .map((e) => `${new Date(e.t).toISOString().slice(11, 23)} ${e.level.toUpperCase()} ${e.msg}`)
    .join('\n');

  const errors = entries.filter((e) => e.level === 'error').length;

  return (
    <div
      data-testid="debug-overlay"
      style={{
        position: 'fixed',
        left: 8,
        bottom: 76,
        zIndex: 9999,
        maxWidth: 'calc(100vw - 16px)',
        pointerEvents: 'auto',
      }}
    >
      <button
        data-testid="debug-overlay-toggle"
        onClick={() => setOpen((v) => !v)}
        style={{
          fontSize: 11,
          fontWeight: 700,
          padding: '6px 10px',
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,.25)',
          background: errors > 0 ? '#7f1d1d' : '#1f2937',
          color: '#f9fafb',
          cursor: 'pointer',
        }}
      >
        🐞 {open ? 'Hide' : 'Debug'} ({entries.length}
        {errors > 0 ? ` · ${errors} err` : ''})
      </button>

      {open && (
        <div
          style={{
            marginTop: 6,
            width: 'min(92vw, 460px)',
            maxHeight: '46vh',
            overflow: 'auto',
            background: 'rgba(17,24,39,.97)',
            color: '#e5e7eb',
            border: '1px solid rgba(255,255,255,.18)',
            borderRadius: 10,
            padding: 10,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: 10,
            lineHeight: 1.45,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
            <button
              data-testid="debug-overlay-copy"
              onClick={() => {
                try {
                  void navigator.clipboard?.writeText(text);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                } catch {
                  /* clipboard unavailable — the text is on screen to read */
                }
              }}
              style={{
                fontSize: 10,
                padding: '4px 8px',
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,.25)',
                background: '#374151',
                color: '#f9fafb',
                cursor: 'pointer',
              }}
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
            <button
              onClick={() => {
                clearEntries();
                setEntries([]);
              }}
              style={{
                fontSize: 10,
                padding: '4px 8px',
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,.25)',
                background: '#374151',
                color: '#f9fafb',
                cursor: 'pointer',
              }}
            >
              Clear
            </button>
          </div>
          {entries.length === 0 ? (
            <div style={{ opacity: 0.7 }}>
              No entries yet. Tap a speaker icon — every play writes an [Audio]/[TTS] trace here.
            </div>
          ) : (
            entries.map((e, i) => (
              <div key={i} style={{ color: LEVEL_COLOR[e.level] || '#e5e7eb' }}>
                {new Date(e.t).toISOString().slice(11, 19)} {e.msg}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
