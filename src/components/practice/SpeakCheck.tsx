// src/components/practice/SpeakCheck.tsx
//
// THE FREE-SPEAKING ANSWER, CHECKED AGAINST ITS OWN RECORDING (2026-09-29).
//
// Guided Speaking's SPEAK stage has no target sentence — the learner answers in their own
// words — so there is nothing to score the audio against except the transcript the
// browser recogniser wrote. That is exactly the useful question: the recogniser is a
// language model and writes the likeliest Croatian, which can be the correct ending the
// learner did not say. While the recogniser listens this records the same answer; when
// it stops, Azure scores the recording against the transcript (lib/assessTake), and every
// word the recording does not bear out is marked for the learner and handed to the coach
// as UNCONFIRMED, so it is never praised.
//
// NEVER A GATE, and never a second failure. No recorder, a blocked mic, an unconfigured
// or failing assessment: the stage works exactly as before and says the check is off.
// Recording alongside the recogniser can, on some devices, take the microphone from it;
// if the recogniser fails while this is recording, this stops recording alongside for
// the rest of the session and discards the take.

import React, { useEffect, useRef, useState } from 'react';
import { useRecorder } from '../../hooks/useRecorder';
import { AZURE_MIME_PRIORITY } from '../shared/PronunciationScorer';
import { assessTake, assessUnconfigured, canRecordTakes } from '../../lib/assessTake';
import { unconfirmedWords, type SpokenCheck } from '../../lib/spokenCheck';
import { HeardWords } from './AssessedMic';

const SURFACE = 'guided-speaking-speak-check';
/** Azure's short-audio limit is 60 s; a SPEAK answer is 8–30 words. */
const MAX_TAKE_MS = 60000;

let alongsideBroke = false;
/** Test seam. */
export function _resetSpeakCheck(): void {
  alongsideBroke = false;
}

interface Props {
  /** The screen's recogniser is running. */
  listening: boolean;
  /** The answer as it stands in the text box. */
  transcript: string;
  /** The recogniser reported an error during this answer. */
  recognizerFailed: boolean;
  /** The current check, or null when there is none (or it no longer applies). */
  onCheck: (check: SpokenCheck | null) => void;
}

export default function SpeakCheck({ listening, transcript, recognizerFailed, onCheck }: Props) {
  const rec = useRecorder();
  const [enabled] = useState(() => canRecordTakes() && !assessUnconfigured() && !alongsideBroke);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [checked, setChecked] = useState<{ ref: string; check: SpokenCheck } | null>(null);
  const sentRef = useRef<Blob | null>(null);
  const discardRef = useRef(false);
  const mountedRef = useRef(true);
  const transcriptRef = useRef(transcript);
  transcriptRef.current = transcript;
  const onCheckRef = useRef(onCheck);
  onCheckRef.current = onCheck;
  const recording = rec.state === 'recording' || rec.state === 'requesting';

  useEffect(
    () => () => {
      mountedRef.current = false;
    },
    [],
  );

  // Record while the recogniser listens.
  useEffect(() => {
    if (!enabled || alongsideBroke) return;
    if (listening && !recording) {
      discardRef.current = false;
      sentRef.current = null;
      setChecked(null);
      onCheckRef.current(null);
      rec.startRecording({
        countdown: 0,
        maxDurationMs: MAX_TAKE_MS,
        mimePriority: AZURE_MIME_PRIORITY,
      });
    } else if (!listening && recording) {
      rec.stopRecording();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);

  // Recording alongside broke the recogniser: stop doing it, and do not assess this take.
  useEffect(() => {
    if (!recognizerFailed || !recording) return;
    alongsideBroke = true;
    discardRef.current = true;
    rec.stopRecording();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recognizerFailed]);

  // A finished take is checked once, against the transcript as the recogniser left it.
  useEffect(() => {
    const blob = rec.audioBlob;
    if (rec.state !== 'done' || !blob || sentRef.current === blob) return;
    sentRef.current = blob;
    if (discardRef.current) return;
    const ref = transcriptRef.current.trim();
    if (ref.split(/\s+/).filter(Boolean).length < 2) return;
    setBusy(true);
    void assessTake(blob, rec.mimeType || blob.type || 'audio/webm', ref, SURFACE).then((out) => {
      if (!mountedRef.current) return;
      setBusy(false);
      if (!out.ok) {
        setNotice(`Recording check unavailable — ${out.message}`);
        return;
      }
      setNotice(null);
      setChecked({ ref, check: out.check });
      onCheckRef.current(out.check);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rec.state, rec.audioBlob]);

  // An edit after the check means the check no longer describes the text.
  const stale = !!checked && checked.ref !== transcript.trim();
  useEffect(() => {
    if (stale) onCheckRef.current(null);
  }, [stale]);

  if (!enabled) return null;
  if (busy) {
    return (
      <div
        data-testid="gs-speak-checking"
        style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 6 }}
      >
        Checking your recording against the text…
      </div>
    );
  }
  if (notice) {
    return (
      <div
        data-testid="gs-speak-check-notice"
        style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 6 }}
      >
        {notice}
      </div>
    );
  }
  if (!checked) return null;
  if (stale) {
    return (
      <div
        data-testid="gs-speak-check-stale"
        style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 6 }}
      >
        You changed the text after the recording was checked, so the check no longer applies.
      </div>
    );
  }
  const unsure = unconfirmedWords(checked.check);
  return (
    <div style={{ marginTop: 8 }}>
      <HeardWords check={checked.check} testId="gs-speak-words" />
      {unsure.length > 0 && (
        <div data-testid="gs-speak-unconfirmed" style={{ fontSize: 13, color: 'var(--ink-warn)' }}>
          {unsure.length === 1 ? 'One word was' : `${unsure.length} words were`} not clear in your
          recording — the text may show a form you did not say. Check{' '}
          {unsure.length === 1 ? 'it' : 'them'}, then say {unsure.length === 1 ? 'it' : 'them'}{' '}
          again or fix the text.
        </div>
      )}
    </div>
  );
}
