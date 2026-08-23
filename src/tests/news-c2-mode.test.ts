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

  it('server has the authentic-register C2 prompt branch', async () => {
    expect(serverSrc.includes("safeLevel === 'C2'")).toBe(true);
    expect(serverSrc.includes('novinski stil')).toBe(true);

    // The C2 branch must keep the SAME JSON contract as every other level —
    // the client parses simplified_title/simplified_text regardless of level.
    //
    // Asserted against the REGISTERED prompt rather than a slice of the source
    // after the ternary (2026-08-23). The prompts moved into definePrompt calls
    // above the ternary, so the old positional slice stopped containing them —
    // it was locating the contract by text adjacency, which was never the thing
    // that mattered. This checks the prompt a C2 request actually runs.
    const { promptForLevel } = await import('../../functions/api/news.js');
    const c2 = promptForLevel('C2');
    expect(c2.id).toBe('news-simplify-c2');
    expect(c2.text).toContain('novinski stil');
    expect(c2.text).toContain('"simplified_title"');
    expect(c2.text).toContain('"key_vocabulary"');

    // ...and every other level runs the other prompt, with the same contract.
    const b1 = promptForLevel('B1');
    expect(b1.id).toBe('news-simplify');
    expect(b1.text).toContain('"simplified_title"');
    expect(b1.text).toContain('"key_vocabulary"');
  });

  it('news screen offers the C2 level chip', () => {
    const m = screenSrc.match(/const LEVELS = \[([^\]]+)\]/);
    expect(m, 'LEVELS array not found').toBeTruthy();
    expect(m![1]).toContain("'C2'");
  });

  it('endpoint still validates the full CEFR range', () => {
    expect(serverSrc.includes("['A1', 'A2', 'B1', 'B2', 'C1', 'C2']")).toBe(true);
  });

  it('strips a json code fence before parsing the model payload (no silent article drop)', () => {
    // news.js was the sole AI endpoint missing this guard: a fenced-but-valid
    // response threw in JSON.parse → simplifyArticle returned null → the article
    // was dropped and the News screen rendered nothing. Assert the fence-strip +
    // that the parse now runs on the cleaned string, not the raw text.
    expect(serverSrc).toMatch(/replace\(\/\^\\s\*```\(\?:json\)\?\\s\*\/i, ''\)/);
    expect(serverSrc).toContain('JSON.parse(cleaned)');
  });
});
