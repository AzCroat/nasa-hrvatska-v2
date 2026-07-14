import { describe, it, expect } from 'vitest';
import {
  computeSilenceDelay,
  extractStreamingReply,
  extractSentences,
  SILENCE_BASE_MS,
  SILENCE_EXTENDED_MS,
} from './MajaScreenUtils.js';

describe('computeSilenceDelay — adaptive endpointing', () => {
  it('ends the turn quickly when the utterance looks complete', () => {
    expect(computeSilenceDelay('Ja sam danas dobro.')).toBe(SILENCE_BASE_MS);
    expect(computeSilenceDelay('Volim kavu')).toBe(SILENCE_BASE_MS);
  });

  it('waits longer when the speaker has barely started (1 word)', () => {
    expect(computeSilenceDelay('Ovaj')).toBe(SILENCE_EXTENDED_MS);
    expect(computeSilenceDelay('Bog')).toBe(SILENCE_EXTENDED_MS);
  });

  it('waits longer when the utterance ends on a connector (mid-thought)', () => {
    expect(computeSilenceDelay('Bio sam u trgovini i')).toBe(SILENCE_EXTENDED_MS); // "and…"
    expect(computeSilenceDelay('Htio sam doći ali')).toBe(SILENCE_EXTENDED_MS); // "but…"
    expect(computeSilenceDelay('Mislim da')).toBe(SILENCE_EXTENDED_MS); // "that…"
  });

  it('waits longer on a hesitation filler or trailing comma', () => {
    expect(computeSilenceDelay('Pa to je, znači')).toBe(SILENCE_EXTENDED_MS);
    expect(computeSilenceDelay('Kupio sam kruh, mlijeko,')).toBe(SILENCE_EXTENDED_MS);
  });

  it('is case/punctuation tolerant and never throws on empty input', () => {
    expect(computeSilenceDelay('Idemo I')).toBe(SILENCE_EXTENDED_MS); // uppercase connector
    expect(computeSilenceDelay('')).toBe(SILENCE_EXTENDED_MS);
    expect(computeSilenceDelay('   ')).toBe(SILENCE_EXTENDED_MS);
    // @ts-expect-error — defensive against a null transcript
    expect(computeSilenceDelay(null)).toBe(SILENCE_EXTENDED_MS);
  });
});

describe('extractStreamingReply — show words, never the JSON envelope', () => {
  it('extracts a complete reply field, ignoring trailing metadata', () => {
    expect(extractStreamingReply('{"reply":"Bog! Kako si?","emotion":"warm"}')).toBe(
      'Bog! Kako si?',
    );
  });

  it('extracts a PARTIAL reply whose closing quote has not streamed yet', () => {
    expect(extractStreamingReply('{"reply":"Bog, drago mi je')).toBe('Bog, drago mi je');
  });

  it('decodes escaped quotes and newlines inside the reply', () => {
    expect(extractStreamingReply('{"reply":"Rekla je \\"da\\" i')).toBe('Rekla je "da" i');
    expect(extractStreamingReply('{"reply":"Prvi red.\\nDrugi')).toBe('Prvi red.\nDrugi');
  });

  it('handles a leading ```json code fence', () => {
    expect(extractStreamingReply('```json\n{"reply":"Dobar dan')).toBe('Dobar dan');
  });

  it('shows nothing while the buffer is a JSON envelope with no reply field yet', () => {
    expect(extractStreamingReply('{"emo')).toBe('');
    expect(extractStreamingReply('```json\n{')).toBe('');
  });

  it('passes through a plain-text (non-JSON) reply as-is', () => {
    expect(extractStreamingReply('Bog! Kako si?')).toBe('Bog! Kako si?');
  });

  it('never throws on empty input', () => {
    expect(extractStreamingReply('')).toBe('');
  });
});

describe('extractSentences — incremental segmentation for streaming TTS', () => {
  it('emits complete sentences and keeps the incomplete tail buffered', () => {
    const r = extractSentences('Bog! Kako si danas? Ja sam dob', 0, false);
    expect(r.sentences).toEqual(['Bog!', 'Kako si danas?']);
    // cursor sits right after "Kako si danas? " — the tail "Ja sam dob" waits
    expect('Bog! Kako si danas? Ja sam dob'.slice(r.cursor)).toBe('Ja sam dob');
  });

  it('does NOT emit a sentence sitting at the very end of the buffer (may continue)', () => {
    // No trailing whitespace after "?", so it is not yet proven complete.
    const r = extractSentences('Kako si?', 0, false);
    expect(r.sentences).toEqual([]);
    expect(r.cursor).toBe(0);
  });

  it('flushes the trailing fragment when final=true', () => {
    const r = extractSentences('Ja sam dobro', 0, true);
    expect(r.sentences).toEqual(['Ja sam dobro']);
  });

  it('resumes from a cursor without re-emitting earlier sentences', () => {
    const text = 'Prva rečenica. Druga rečenica. Treća';
    const first = extractSentences(text, 0, false);
    expect(first.sentences).toEqual(['Prva rečenica.', 'Druga rečenica.']);
    const second = extractSentences(text, first.cursor, true);
    expect(second.sentences).toEqual(['Treća']);
  });

  it('does not split on ordinals or decimals', () => {
    const r = extractSentences('Cijena je 3.14 eura. Vidimo se u 5. mjesecu. ', 0, false);
    expect(r.sentences).toEqual(['Cijena je 3.14 eura.', 'Vidimo se u 5. mjesecu.']);
  });

  it('handles ellipsis and closing quotes as terminals', () => {
    const r = extractSentences('Rekla je "dobro". Pa dobro… Idemo dalje. ', 0, false);
    expect(r.sentences).toEqual(['Rekla je "dobro".', 'Pa dobro…', 'Idemo dalje.']);
  });

  it('never throws on empty input', () => {
    expect(extractSentences('', 0, true)).toEqual({ sentences: [], cursor: 0 });
  });
});
