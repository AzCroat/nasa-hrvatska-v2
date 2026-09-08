/**
 * alphabetData.test.ts — the Croatian alphabet chart is the first screen a
 * beginner opens, and it shipped two example words that do not begin with the
 * letter they illustrate: `F f → boca` (a B word — the residue of a Serbism
 * correction that replaced `flaša` with the correct Croatian `boca` and left
 * it filed under F, the gloss still reading "bottle") and `Ć ć → kuća`
 * (medial, not initial). Tapping either played a word starting with a
 * different sound, which is exactly what a learner reports as "the audio is
 * nothing like the letter".
 *
 * Nothing checked this. The screen's own component tests drive the quiz and
 * the award; they say nothing about whether the DATA teaches the letter it
 * claims to. This file is that check, and it is the whole alphabet rather
 * than the two rows that were wrong.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { ALPHA } from '../data/vocabulary.js';

const rows = ALPHA as string[][];

// The digraphs are two characters; `letter[0]` is the display form "Dž dž",
// so the initial to match is everything before the space.
const initialOf = (display: string) => (display.split(' ')[0] ?? '').toLowerCase();

describe('ALPHA — the chart teaches the letter it names', () => {
  it('has all 30 letters of the Croatian alphabet, in order, no duplicates', () => {
    expect(rows).toHaveLength(30);
    const initials = rows.map((r) => initialOf(r[0] ?? ''));
    expect(new Set(initials).size).toBe(30);
    // gajica order — a reorder would put Č before C, or Dž before D.
    expect(initials).toEqual([
      'a',
      'b',
      'c',
      'č',
      'ć',
      'd',
      'dž',
      'đ',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'lj',
      'm',
      'n',
      'nj',
      'o',
      'p',
      'r',
      's',
      'š',
      't',
      'u',
      'v',
      'z',
      'ž',
    ]);
  });

  it('every example word BEGINS with its own letter', () => {
    for (const r of rows) {
      const [display, , word] = r;
      const bad = `${display} illustrated by "${word}"`;
      expect(word, bad).toBeTruthy();
      expect((word ?? '').toLowerCase().startsWith(initialOf(display ?? '')), bad).toBe(true);
    }
  });

  it('every row carries a Croatian letter name, an English hint and a gloss', () => {
    for (const r of rows) {
      const at = r[0] ?? '';
      expect(r, at).toHaveLength(5);
      // [display, English respelling, example, gloss, Croatian name]
      r.forEach((field, i) => expect(field, `${at} field ${i}`).toBeTruthy());
      // The Croatian name is what TTS speaks, so it must be Croatian letters
      // only — an English respelling here ("beh") would be read aloud as
      // English and is the defect this column exists to end.
      expect(r[4], `${at} name`).toMatch(/^[a-zčćđšž]+$/u);
    }
  });

  it('the letter name is not the English respelling column', () => {
    // They coincide legitimately for a/e/i/o/u/ef/el/em/en/es. If they
    // coincided everywhere, someone copied the column instead of writing the
    // Croatian names.
    const same = rows.filter((r) => r[4] === r[1]).length;
    expect(same, 'name column duplicates the English hint').toBeLessThan(rows.length / 2);
  });
});

describe('AlphabetScreen — tapping a letter pronounces the letter', () => {
  const SRC = readFileSync('src/components/learn/AlphabetScreen.tsx', 'utf8');

  it('the reference card speaks the letter name AND the example word', () => {
    // Pinned by source: a component test that renders the card and stubs
    // speak() proves the button fires, not WHAT it says. The screen is titled
    // "Alphabet and Pronunciation" and for the life of the screen it spoke
    // only l[2] — the example — so the letter itself was never pronounced
    // anywhere in the app.
    expect(SRC).toMatch(/speak\(\[l\[4\], l\[2\]\]\.filter\(Boolean\)\.join\('\. '\)\)/);
    expect(SRC).not.toMatch(/speak\(l\[2\] \?\? ''\)/);
  });

  it('the QUIZ still speaks the word alone — the letter is the answer there', () => {
    // Naming the letter in the quiz prompt would give the answer away. Both
    // quiz call sites read q.prompt, which buildAlphaQuiz sets to the example
    // word (letter[2]) and never to the name.
    expect(SRC).toMatch(/prompt: letter\[2\] \?\? ''/);
    expect(SRC).not.toMatch(/prompt: letter\[4\]/);
  });
});
