// src/components/practice/AssessedMic.tsx
//
// The microphone for a stage that KNOWS its target (Guided Speaking's REHEARSE and
// BUILD). It records the take and has `/api/pronunciation-assess` score the audio against
// the target — Azure scripted assessment with miscue detection — so the learner is told
// what they actually said, word by word, rather than what a recogniser's language model
// thought they probably meant (lib/spokenCheck explains why that difference is the
// whole point).
//
// NEVER A GATE. When the device cannot record, the learner has blocked the mic, or the
// assessment does not answer, this renders `children` — the browser-recogniser button
// the stage always had — and names why the word-by-word check is off. A service that
// reports itself unconfigured is remembered for the session, so the learner is not sent
// through a failed request on every sentence.

import React, { useEffect, useRef, useState } from 'react';
import { useRecorder } from '../../hooks/useRecorder';
import { AZURE_MIME_PRIORITY } from '../shared/PronunciationScorer';
import { blobToDataUrl } from '../../lib/audio';
import { _nativePost, getLastTransportFailure } from '../../lib/nativePost.js';
import { failureFromStatus, reportAiFailure, transportFailure } from '../../lib/aiFailure';
import { heardCroatian } from '../../lib/heardCroatian';
import { checkedWords, type SpokenCheck, type WordStatus } from '../../lib/spokenCheck';

const SURFACE = 'guided-speaking-assess';
/** A REHEARSE phrase or BUILD sentence is one short sentence. */
const MAX_TAKE_MS = 15000;

let unconfigured = false;
/** Test seam: forget a remembered "not configured" answer. */
export function _resetAssessedMic(): void {
  unconfigured = false;
}

function canRecord(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof (window as { MediaRecorder?: unknown }).MediaRecorder !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia
  );
}

interface Props {
  /** The sentence the learner is trying to say. */
  reference: string;
  /** What was heard (already `bog`-normalised) and the per-word check. */
  onHeard: (text: string, check: SpokenCheck) => void;
  /** The stage's own recogniser button, used whenever this path is unavailable. */
  children?: React.ReactNode;
  testId: string;
}

export default function AssessedMic({ reference, onHeard, children, testId }: Props) {
  const rec = useRecorder();
  const [fallback, setFallback] = useState(() => unconfigured || !canRecord());
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const sentRef = useRef<Blob | null>(null);
  const mountedRef = useRef(true);
  const onHeardRef = useRef(onHeard);
  onHeardRef.current = onHeard;
  const refText = useRef(reference);
  refText.current = reference;

  useEffect(
    () => () => {
      mountedRef.current = false;
    },
    [],
  );

  // A blocked or missing microphone is the stage's old path, not a dead end.
  useEffect(() => {
    if (rec.state === 'denied' || rec.state === 'unsupported' || rec.state === 'error') {
      setFallback(true);
    }
  }, [rec.state]);

  // A finished take is assessed exactly once.
  useEffect(() => {
    const blob = rec.audioBlob;
    if (rec.state !== 'done' || !blob || sentRef.current === blob) return;
    sentRef.current = blob;
    void assess(blob, rec.mimeType || blob.type || 'audio/webm');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rec.state, rec.audioBlob]);

  function giveUp(message: string) {
    if (!mountedRef.current) return;
    setBusy(false);
    setNotice(`Word-by-word check unavailable — ${message}`);
    setFallback(true);
  }

  async function assess(blob: Blob, mimeType: string) {
    setBusy(true);
    const dataUrl = await blobToDataUrl(blob);
    const audioBase64 = dataUrl ? dataUrl.slice(dataUrl.indexOf(',') + 1) : '';
    if (!audioBase64) return giveUp('the recording could not be read.');
    const res = await _nativePost('/api/pronunciation-assess', {
      audioBase64,
      referenceText: refText.current,
      locale: 'hr-HR',
      audioMimeType: mimeType,
    });
    if (!res) {
      const t = getLastTransportFailure();
      const failure = transportFailure(t ? t.reason : 'transport_null');
      reportAiFailure(SURFACE, failure, t ? `attempts=${t.attempts}` : undefined);
      return giveUp(failure.message);
    }
    let data: Record<string, unknown> = {};
    try {
      data = (await res.json()) as Record<string, unknown>;
    } catch {
      /* an unreadable body is classified by its status below */
    }
    if (!res.ok || !data['ok']) {
      const code = typeof data['error'] === 'string' ? (data['error'] as string) : '';
      if (code === 'not_configured') unconfigured = true;
      const failure = failureFromStatus(
        res.status,
        code,
        typeof data['resetAt'] === 'string' ? (data['resetAt'] as string) : undefined,
        data['ok'],
      );
      reportAiFailure(SURFACE, failure);
      return giveUp(failure.message);
    }
    if (!mountedRef.current) return;
    const check: SpokenCheck = {
      recognized: heardCroatian(typeof data['recognized'] === 'string' ? data['recognized'] : ''),
      words: checkedWords(data['word_scores']),
    };
    setBusy(false);
    setNotice(null);
    onHeardRef.current(check.recognized, check);
  }

  if (fallback) {
    return (
      <>
        {children}
        {notice && (
          <div
            data-testid={`${testId}-notice`}
            style={{ flexBasis: '100%', fontSize: 12, color: 'var(--ink-muted)' }}
          >
            {notice}
          </div>
        )}
      </>
    );
  }

  const recording = rec.state === 'recording' || rec.state === 'requesting';
  return (
    <button
      className="b bp"
      data-testid={testId}
      disabled={busy}
      onClick={() => {
        if (recording) rec.stopRecording();
        else {
          sentRef.current = null;
          rec.startRecording({
            countdown: 0,
            maxDurationMs: MAX_TAKE_MS,
            mimePriority: AZURE_MIME_PRIORITY,
          });
        }
      }}
      style={{ flex: 1, padding: '10px 0', fontWeight: 800 }}
    >
      {busy ? 'Listening back…' : recording ? '■ Stop' : '🎙️ Say it'}
    </button>
  );
}

const STATUS_STYLE: Record<WordStatus, { color: string; label: string }> = {
  good: { color: 'var(--ink-green)', label: 'clear' },
  unclear: { color: 'var(--ink-warn)', label: 'not clear' },
  missing: { color: 'var(--ink-error)', label: 'not heard' },
  extra: { color: 'var(--ink-muted)', label: 'extra' },
};

/** The word-by-word readout of one assessed take. Renders nothing without one. */
export function HeardWords({ check }: { check: SpokenCheck | null }) {
  if (!check || check.words.length === 0) return null;
  const flagged = check.words.filter((w) => w.status !== 'good').length;
  return (
    <div data-testid="gs-heard-words" style={{ marginBottom: 8 }}>
      <div style={{ fontSize: 12, color: 'var(--ink-muted)', marginBottom: 4 }}>
        {flagged === 0
          ? 'Word by word, from your recording: every word came through clearly.'
          : 'Word by word, from your recording:'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {check.words.map((w, i) => (
          <span
            key={`${w.word}-${i}`}
            lang="hr"
            data-status={w.status}
            title={STATUS_STYLE[w.status].label}
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: STATUS_STYLE[w.status].color,
              textDecoration: w.status === 'missing' ? 'line-through' : 'none',
            }}
          >
            {w.word}
            {w.status !== 'good' && (
              <span style={{ fontSize: 11, fontWeight: 600 }}>
                {' '}
                ({STATUS_STYLE[w.status].label})
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
