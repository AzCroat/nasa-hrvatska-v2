// src/lib/audioWav.ts
//
// ONE RECORDING FORMAT FOR THE SPEECH ASSESSMENT (2026-09-29).
//
// Azure's short-audio REST API is documented for WAV (PCM) and OGG/Opus. The browsers
// record something else: Chrome and Firefox WebM/Opus, iOS Safari ONLY audio/mp4 (AAC).
// `/api/pronunciation-assess` forwarded whatever arrived and hoped — so an iPhone take was
// at best a format Azure is not documented to accept. Every browser can DECODE its own
// recording through Web Audio, so the take is decoded, mixed to mono, resampled to 16 kHz
// and re-encoded as 16-bit PCM WAV, the format Azure's speech services are specified
// around. 16 kHz mono is 32 KB per second: a 30-second answer is under 1 MB, well within
// the endpoint's 8 MB cap.
//
// Conversion is best-effort: any failure returns null and the caller sends the original
// recording, which is exactly what happened before.

export const WAV_SAMPLE_RATE = 16000;

/** Mono float samples (−1…1) → a 16-bit PCM WAV file. Pure. */
export function encodeWav16(
  samples: Float32Array,
  sampleRate = WAV_SAMPLE_RATE,
): Uint8Array<ArrayBuffer> {
  const dataBytes = samples.length * 2;
  const buf = new ArrayBuffer(44 + dataBytes);
  const v = new DataView(buf);
  const ascii = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i));
  };
  ascii(0, 'RIFF');
  v.setUint32(4, 36 + dataBytes, true);
  ascii(8, 'WAVE');
  ascii(12, 'fmt ');
  v.setUint32(16, 16, true); // PCM chunk size
  v.setUint16(20, 1, true); // PCM
  v.setUint16(22, 1, true); // mono
  v.setUint32(24, sampleRate, true);
  v.setUint32(28, sampleRate * 2, true); // byte rate
  v.setUint16(32, 2, true); // block align
  v.setUint16(34, 16, true); // bits per sample
  ascii(36, 'data');
  v.setUint32(40, dataBytes, true);
  for (let i = 0; i < samples.length; i++) {
    const x = Math.max(-1, Math.min(1, samples[i]!));
    v.setInt16(44 + i * 2, x < 0 ? x * 0x8000 : x * 0x7fff, true);
  }
  return new Uint8Array(buf);
}

type OfflineCtor = new (channels: number, length: number, rate: number) => OfflineAudioContext;

/** A recording in any format the browser can decode → 16 kHz mono WAV, or null. */
export async function toWav16k(blob: Blob): Promise<Blob | null> {
  try {
    const w = window as unknown as {
      OfflineAudioContext?: OfflineCtor;
      webkitOfflineAudioContext?: OfflineCtor;
    };
    const Offline = w.OfflineAudioContext || w.webkitOfflineAudioContext;
    if (!Offline || typeof blob.arrayBuffer !== 'function') return null;
    const bytes = await blob.arrayBuffer();
    // Decoding needs a context; a one-frame offline one avoids opening an audio device.
    const decoded = await new Offline(1, 1, 44100).decodeAudioData(bytes);
    const length = Math.ceil(decoded.duration * WAV_SAMPLE_RATE);
    if (!Number.isFinite(length) || length <= 0) return null;
    const ctx = new Offline(1, length, WAV_SAMPLE_RATE);
    const src = ctx.createBufferSource();
    src.buffer = decoded; // multichannel is down-mixed by the mono destination
    src.connect(ctx.destination);
    src.start(0);
    const rendered = await ctx.startRendering();
    const wav = encodeWav16(rendered.getChannelData(0), WAV_SAMPLE_RATE);
    return new Blob([wav], { type: 'audio/wav' });
  } catch {
    return null;
  }
}
