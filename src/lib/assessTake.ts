// src/lib/assessTake.ts
//
// One recorded take → Azure pronunciation assessment against a reference → the per-word
// check (lib/spokenCheck). Shared by Guided Speaking's target-known stages (the reference
// is the phrase or model answer) and its SPEAK stage (the reference is the learner's own
// transcript, so the audio can confirm or contradict what the recogniser wrote).
//
// The take is converted to 16 kHz WAV first (lib/audioWav), because Azure's short-audio
// API is documented for WAV/OGG and an iPhone records only audio/mp4. If conversion
// fails the original recording is sent, as before.
//
// Failures are named and reported, never thrown. A `not_configured` answer is
// remembered for the session so no surface keeps sending takes to a service that is off.

import { blobToDataUrl } from './audio';
import { toWav16k } from './audioWav';
import { _nativePost, getLastTransportFailure } from './nativePost.js';
import { failureFromStatus, reportAiFailure, transportFailure } from './aiFailure';
import { heardCroatian } from './heardCroatian';
import { checkedWords, type SpokenCheck } from './spokenCheck';

let unconfigured = false;

/** Whether an earlier take this session was told the assessment is not configured. */
export function assessUnconfigured(): boolean {
  return unconfigured;
}

/** Test seam: forget a remembered "not configured" answer. */
export function _resetAssessTake(): void {
  unconfigured = false;
}

/** Can this device record a take at all? */
export function canRecordTakes(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof (window as { MediaRecorder?: unknown }).MediaRecorder !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia
  );
}

export type TakeOutcome = { ok: true; check: SpokenCheck } | { ok: false; message: string };

export async function assessTake(
  blob: Blob,
  mimeType: string,
  reference: string,
  surface: string,
  opts: { unbiased?: boolean } = {},
): Promise<TakeOutcome> {
  const wav = await toWav16k(blob);
  const audio = wav ?? blob;
  const dataUrl = await blobToDataUrl(audio);
  const audioBase64 = dataUrl ? dataUrl.slice(dataUrl.indexOf(',') + 1) : '';
  if (!audioBase64) return { ok: false, message: 'the recording could not be read.' };
  const res = await _nativePost('/api/pronunciation-assess', {
    audioBase64,
    referenceText: reference,
    locale: 'hr-HR',
    audioMimeType: wav ? 'audio/wav' : mimeType,
    ...(opts.unbiased ? { unbiased: true } : {}),
  });
  if (!res) {
    const t = getLastTransportFailure();
    const failure = transportFailure(t ? t.reason : 'transport_null');
    reportAiFailure(surface, failure, t ? `attempts=${t.attempts}` : undefined);
    return { ok: false, message: failure.message };
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
    reportAiFailure(surface, failure);
    return { ok: false, message: failure.message };
  }
  return {
    ok: true,
    check: {
      recognized: heardCroatian(typeof data['recognized'] === 'string' ? data['recognized'] : ''),
      words: checkedWords(data['word_scores']),
      ...(opts.unbiased
        ? {
            unbiased:
              typeof data['unbiased'] === 'string' && data['unbiased'].trim()
                ? heardCroatian(data['unbiased'])
                : null,
          }
        : {}),
    },
  };
}
