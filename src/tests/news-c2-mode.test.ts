/**
 * news-c2-mode.test.ts — guards the C2 news mode (audit follow-up).
 *
 * The audit found a double downgrade: the news simplifier's complexity map
 * ended at C1 (`complexity[safeLevel] || complexity['B1']` silently served B1
 * rules to a C2 request), and the news screen offered no C2 chip (a C2 user's
 * default fell to B1). A C2 learner therefore had no authentic reading path.
 * Source-derived, like session-routes.test.ts, so a regression in either half
 * cannot pass unnoticed.
 */
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

const serverSrc = readFileSync('functions/api/news.js', 'utf8');
const screenSrc = readFileSync('src/components/croatia/CroatianNewsScreen.tsx', 'utf8');

describe('C2 news mode', () => {
  it('server complexity map has an explicit C2 rule (no silent B1 fallback)', () => {
    expect(/C2:\s*['"`]/.test(serverSrc)).toBe(true);
  });

  it('server has the authentic-register C2 prompt branch', () => {
    expect(serverSrc.includes("safeLevel === 'C2'")).toBe(true);
    expect(serverSrc.includes('novinski stil')).toBe(true);
    // The C2 branch must keep the SAME JSON contract as every other level —
    // the client parses simplified_title/simplified_text regardless of level.
    const c2Block = serverSrc.slice(serverSrc.indexOf("safeLevel === 'C2'"));
    expect(c2Block.includes('"simplified_title"')).toBe(true);
    expect(c2Block.includes('"key_vocabulary"')).toBe(true);
  });

  it('news screen offers the C2 level chip', () => {
    const m = screenSrc.match(/const LEVELS = \[([^\]]+)\]/);
    expect(m, 'LEVELS array not found').toBeTruthy();
    expect(m![1]).toContain("'C2'");
  });

  it('endpoint still validates the full CEFR range', () => {
    expect(serverSrc.includes("['A1', 'A2', 'B1', 'B2', 'C1', 'C2']")).toBe(true);
  });
});
