import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

// A persona's prompt TELLS the model what to say. Ivo (a Split cabbie) was told
// to say "fakat", Zagreb colloquial slang, and the model obeyed (owner report,
// 2026-10-24). Dalmatian personas must not be handed another region's markers
// or a Serbian word. Known markers only: a ratchet, not a dialect checker.
const src = readFileSync('functions/api/maja.js', 'utf8')
  .replace(/^\s*\/\/.*$/gm, '')
  .replace(/\/\*[\s\S]*?\*\//g, '');

const block = (id: string) => {
  const start = src.indexOf(`'${id}'`);
  expect(start, `${id} prompt not found`).toBeGreaterThan(-1);
  const end = src.indexOf('definePrompt(', start);
  return src.slice(start, end === -1 ? undefined : end);
};

// Words that belong to another region than a Dalmatian persona's, or to Serbian.
const NOT_DALMATIAN = ['fakat', 'kaj', 'komšija', 'komšije', 'hleb', 'sused'];

describe.each(['maja-cabbie', 'maja-fisherman'])('%s speech is Dalmatian', (id) => {
  it('is never instructed to use another region’s words as its own speech', () => {
    const speech =
      block(id).split('YOUR SPEECH PATTERNS:')[1]?.split('CORRECTION APPROACH:')[0] ?? '';
    expect(speech.length).toBeGreaterThan(50);
    // The sentence that FORBIDS a word quotes it; judge only the "You say" list.
    const says = speech.split('Stay geographically honest')[0] ?? '';
    for (const w of NOT_DALMATIAN) {
      expect(says.toLowerCase(), `"${w}" in ${id}'s speech patterns`).not.toMatch(
        new RegExp(`(?<![\\p{L}])${w}(?![\\p{L}])`, 'u'),
      );
    }
  });
});

it('no persona text in maja.js uses the Serbian "komšija" (the tone tables sit outside the prompt blocks)', () => {
  expect(src).not.toMatch(/komšij/i);
});

it('the cabbie prompt tells the model to stay in Split speech', () => {
  expect(block('maja-cabbie')).toMatch(/never Zagreb or Kajkavian slang/);
});
