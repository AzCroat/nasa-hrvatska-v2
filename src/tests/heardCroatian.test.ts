// src/tests/heardCroatian.test.ts
//
// "I SAID BOG AND IT WROTE BOK" (owner report, 2026-09-29). Every recogniser writes
// the greeting `bok`; this app's greeting is `bog`. See src/lib/heardCroatian.ts.
//
// Three things are pinned: the rule itself (both copies, the same cases, so the
// browser and the server cannot spell a learner's greeting two ways); that EVERY
// place a browser recogniser's transcript is read passes it through the rule; and
// that the server returns every provider's text through its twin.

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { heardCroatian as client } from '../lib/heardCroatian';
// @ts-expect-error — plain JS module without types
import { heardCroatian as server } from '../../functions/api/_heardCroatian.js';

const CASES: Array<[string, string]> = [
  ['bok', 'bog'],
  ['Bok!', 'Bog!'],
  ['BOK', 'BOG'],
  ['Bok, kako si?', 'Bog, kako si?'],
  ['Pa bok, vidimo se.', 'Pa bog, vidimo se.'],
  // The idiom the owner's decision keeps.
  ['Stajali su bok uz bok.', 'Stajali su bok uz bok.'],
  ['Bok uz bok i bok!', 'Bok uz bok i bog!'],
  // The noun "side" in its inflected forms is not the greeting.
  ['Bol u boku.', 'Bol u boku.'],
  ['S boka na bok.', 'S boka na bog.'], // bare `bok` is read as the greeting — stated cost
  // Nothing else is touched.
  ['bokal vina', 'bokal vina'],
  ['Bog, kako si?', 'Bog, kako si?'],
  ['', ''],
];

describe('the rule, in both copies', () => {
  it.each(CASES)('%j → %j', (input, want) => {
    expect(client(input)).toBe(want);
    expect(server(input)).toBe(want);
  });
});

const strip = (s: string) =>
  s
    .replace(/^\s*\/\/.*$/gm, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'tests') continue;
      walk(p, out);
    } else if (/\.(ts|tsx|js|jsx)$/.test(e.name) && !/\.test\./.test(e.name)) out.push(p);
  }
  return out;
}

describe('every browser recogniser transcript passes through it', () => {
  // A site is any line reading a recogniser result's `.transcript`. Derived, so a
  // speaking screen written next month is covered without being named here.
  const sites = walk('src').flatMap((f) =>
    strip(fs.readFileSync(f, 'utf8'))
      .split('\n')
      .filter((l) => /\.transcript\b/.test(l) && /results?\b|\balt\b|\br\b/.test(l))
      .filter((l) =>
        /\[\s*\w*\s*\]\s*(?:\?\.\[0\]|\[0\])?!?\.transcript|\balt\.transcript|\br\.transcript/.test(
          l,
        ),
      )
      .map((l) => ({ f, l: l.trim() })),
  );

  it('finds the sites (non-vacuous)', () => {
    expect(sites.length).toBeGreaterThanOrEqual(8);
  });

  it('each one wraps the transcript in heardCroatian', () => {
    const bare = sites.filter((s) => !/heardCroatian\(/.test(s.l));
    expect(bare.map((s) => `${s.f}: ${s.l}`)).toEqual([]);
  });
});

describe('the server returns every provider through its twin', () => {
  const src = strip(fs.readFileSync('functions/api/_transcribe.js', 'utf8'));
  it('no provider returns bare text', () => {
    const returns = [...src.matchAll(/return\s*\{\s*text\b[^}]*provider:\s*'([\w-]+)'/g)];
    const providers = returns.map((m) => m[1]).filter((p) => p !== 'none');
    expect(providers.sort()).toEqual(['deepgram', 'whisper', 'workers-ai']);
    for (const m of returns.filter((r) => r[1] !== 'none'))
      expect(m[0], `${m[1]} returns its text bare`).toMatch(/text:\s*heardCroatian\(/);
  });
});
