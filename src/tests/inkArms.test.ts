/**
 * `inkArms` is what every contrast guard uses to decide which colours an expression can
 * paint. It had no test of its own, and it returned a parenthesised ternary arm as one
 * unparseable string — so ModeDrill's answered-option slab (`showState ? (isCorrect ?
 * '#f0fdf4' : '#fef2f2') : 'var(--card)'`, behind all 109 engine drills) was invisible to
 * all three guards while it rendered near-white ink on a light tint in dark mode.
 * Mutation-verified: restoring that slab fails `inkSurfaceAgreement` and names the line.
 */
import { describe, it, expect } from 'vitest';
import { inkArms } from './helpers/inkArms';

describe('inkArms', () => {
  it('descends into a parenthesised arm', () => {
    expect(inkArms("showState ? (isCorrect ? '#f0fdf4' : '#fef2f2') : 'var(--card)'")).toEqual([
      "'#f0fdf4'",
      "'#fef2f2'",
      "'var(--card)'",
    ]);
  });

  it('does not unwrap parens that do not span the whole arm', () => {
    expect(inkArms("a ? (x) + (y) : 'red'")).toEqual(['(x) + (y)', "'red'"]);
  });

  it('still excludes a ternary condition', () => {
    expect(inkArms("isActive ? '#fff' : '#000'")).toEqual(["'#fff'", "'#000'"]);
  });

  it('a string containing a paren does not confuse the matcher', () => {
    expect(inkArms("a ? (b ? ')' : '#111') : '#222'")).toEqual(["')'", "'#111'", "'#222'"]);
  });
});
