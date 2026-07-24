// src/tests/tts.prosody.test.js
import { describe, it, expect, vi } from 'vitest';
vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: vi.fn(async () => ({
    ok: true,
    uid: 'u',
    origin: 'https://nasahrvatska.com',
    isDev: false,
  })),
}));
import { buildAzureSsml } from '../../functions/api/tts.js';

describe('buildAzureSsml prosody', () => {
  it('default: rate -8%, no pitch/contour', () => {
    const s = buildAzureSsml('grad', { slow: false });
    expect(s).toContain('rate="-8%"');
    expect(s).not.toContain('pitch=');
  });
  it('applies pitch + contour + rate when prosody given', () => {
    const s = buildAzureSsml('grad', {
      prosody: { pitch: '+15%', contour: '(0%,+20%) (100%,-10%)', rate: '-20%' },
    });
    expect(s).toContain('pitch="+15%"');
    expect(s).toContain('contour="(0%,+20%) (100%,-10%)"');
    expect(s).toContain('rate="-20%"');
  });
  it('escapes text and ignores non-whitelisted prosody values', () => {
    const s = buildAzureSsml('a<b', { prosody: { pitch: 'javascript:evil', rate: 'DROP TABLE' } });
    expect(s).toContain('a&lt;b');
    expect(s).not.toContain('evil');
    expect(s).not.toContain('DROP');
  });
  it('rejects contour injection / overflow / empty (no contour attr emitted)', () => {
    const inj = buildAzureSsml('x', { prosody: { contour: '(0%,+20%)" onload="bad' } });
    expect(inj).not.toContain('onload');
    expect(inj).not.toContain('contour=');
    const overflow = buildAzureSsml('x', {
      prosody: { contour: '(0%,+1%) (10%,+1%) (20%,+1%) (30%,+1%) (40%,+1%) (50%,+1%) (60%,+1%)' },
    });
    expect(overflow).not.toContain('contour=');
    const empty = buildAzureSsml('x', { prosody: { contour: '' } });
    expect(empty).not.toContain('contour=');
  });
  it('rejects a malicious voice value, falling back to the default voice', () => {
    const s = buildAzureSsml('x', { voice: 'evil"><inject', prosody: null });
    expect(s).not.toContain('inject');
    expect(s).toContain('hr-HR-GabrijelaNeural');
  });
});

describe('buildAzureSsml phoneme (IPA)', () => {
  it('wraps text in an IPA <phoneme> when a valid pronunciation is given', () => {
    const s = buildAzureSsml('Odjebi', { phoneme: 'ˈodjebi' });
    expect(s).toContain('<phoneme alphabet="ipa" ph="ˈodjebi">Odjebi</phoneme>');
  });
  it('accepts IPA symbols, stress marks and syllable dots', () => {
    const s = buildAzureSsml('Jebačina', { phoneme: 'jeˈbatʃina' });
    expect(s).toContain('ph="jeˈbatʃina"');
    expect(s).toContain('>Jebačina</phoneme>');
  });
  it('emits plain text (no phoneme tag) when none is given', () => {
    const s = buildAzureSsml('grad', { slow: false });
    expect(s).not.toContain('<phoneme');
    expect(s).toContain('>grad</prosody>');
  });
  it('rejects an injection attempt in the phoneme (no phoneme tag emitted)', () => {
    const s = buildAzureSsml('x', { phoneme: 'a"><inject onload="bad' });
    expect(s).not.toContain('<phoneme');
    expect(s).not.toContain('inject');
    expect(s).not.toContain('onload');
  });
  it('rejects an over-long phoneme string', () => {
    const s = buildAzureSsml('x', { phoneme: 'a'.repeat(200) });
    expect(s).not.toContain('<phoneme');
  });
});
