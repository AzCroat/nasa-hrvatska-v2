// Pronunciation guides (owner report, 2026-10-31: "NAH-slow" for naslov — an English
// word in a guide reads as English). Every `hr` + `ph` pair in the app is derived from
// source and held to the rules a guide must keep; a guide is a respelling for an
// English reader, so it may not contain a spelling that reads as something else.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';

const files: string[] = [];
const walk = (d: string) => {
  for (const f of readdirSync(d)) {
    const p = `${d}/${f}`;
    if (statSync(p).isDirectory()) {
      if (f !== 'tests') walk(p);
    } else if (/\.(js|ts|tsx)$/.test(f) && !/\.test\./.test(f)) files.push(p);
  }
};
walk('src');
walk('functions');

const Q = `(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)")`;
const RE = new RegExp(
  `\\b(?:hr|word|croatian|cro|text)\\s*:\\s*${Q}[^{}]{0,600}?\\bph\\s*:\\s*${Q}`,
  'g',
);
const pairs: Array<{ file: string; hr: string; ph: string }> = [];
for (const file of files) {
  const src = readFileSync(file, 'utf8');
  for (const m of src.matchAll(RE)) {
    const ph = m[3] ?? m[4] ?? '';
    if (ph && ph !== '—') pairs.push({ file, hr: m[1] ?? m[2] ?? '', ph });
  }
}
const bad = (pred: (p: { hr: string; ph: string }) => boolean) =>
  pairs.filter(pred).map((p) => `${p.hr} = ${p.ph}`);

describe('every pronunciation guide', () => {
  it('is found (a derivation that finds nothing guards nothing)', () => {
    expect(pairs.length).toBeGreaterThan(850);
  });
  it('contains no English word that changes the sound: slow, low, row, how…', () => {
    expect(
      bad((p) =>
        /(^|[-\s/])(slow|low|row|how|now|cow|know|show|owe|flow|glow)(?=[-\s/,]|$)/i.test(p.ph),
      ),
    ).toEqual([]);
  });
  it('writes the vowel pair e-u as eh-oo, never "eu" (which reads "you")', () => {
    expect(bad((p) => /(^|[-\s/])eu(?=[-\s/]|$)|(^|[-\s/])eu-/i.test(p.ph))).toEqual([]);
  });
  it('respells lj and nj (ly, ny); the Croatian digraph is not an English spelling', () => {
    expect(bad((p) => /lj|nj/i.test(p.ph))).toEqual([]);
  });
  it('shows č ć š ž as ch / sh / zh', () => {
    expect(bad((p) => /[čć]/i.test(p.hr) && !/ch|tch|ty/i.test(p.ph))).toEqual([]);
    expect(bad((p) => /š/i.test(p.hr) && !/sh/i.test(p.ph))).toEqual([]);
    expect(bad((p) => /ž/i.test(p.hr) && !/zh/i.test(p.ph))).toEqual([]);
  });
  it('teaches the greeting Bog as bohg (owner decision: never the bok spelling)', () => {
    expect(bad((p) => /^Bog!$/.test(p.hr) && !/^bohg$/i.test(p.ph))).toEqual([]);
  });
  it('the reported words are right', () => {
    const ph = (hr: string) => pairs.filter((p) => p.hr === hr).map((p) => p.ph);
    expect(ph('naslov')).toEqual(['NAH-slohv']);
    expect(ph('konj')).toEqual(['kohny']);
    expect(ph('Biti u banani')[0]).toMatch(/^BEE-tee /);
  });
});
