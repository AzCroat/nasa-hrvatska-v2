// An incident must say WHAT was contaminated. The stored sample is only the
// head of the body (1,536 chars), and the 2026-10-20 /api/news incident showed
// nothing but the first article's title: the Cyrillic was deeper in the payload.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { latinizeResponseBody } from '../../functions/api/_croatianGuard.js';

const run = async (chunks) => {
  const enc = new TextEncoder();
  const body = new ReadableStream({
    start(c) {
      for (const ch of chunks) c.enqueue(enc.encode(ch));
      c.close();
    },
  });
  let seen;
  const res = latinizeResponseBody(
    new Response(body, { headers: { 'content-type': 'application/json' } }),
    (o) => {
      seen = o;
    },
  );
  const out = await res.text();
  return { seen, out };
};

describe('observer reports where the Cyrillic is', () => {
  it('finds contamination far beyond the 1,536-character sample', async () => {
    const head = 'Latinica '.repeat(400); // 3,600 chars, well past the sample
    const { seen, out } = await run([head, ' i onda слово у tekstu ', ' kraj']);
    expect(seen.contaminated).toBe(true);
    expect(seen.text).not.toContain('слово'); // the old record could not see it
    expect(seen.context).toContain('слово');
    expect(seen.context).toContain('onda');
    expect(out).toContain('slovo'); // the learner-facing transliteration is unchanged
  });
  it('finds a word whose left context sits in the previous chunk', async () => {
    const { seen } = await run(['a'.repeat(300) + ' ključna ', 'реч je ovdje']);
    expect(seen.context).toContain('ključna');
    expect(seen.context).toContain('реч');
  });
  it('clean output carries no context', async () => {
    const { seen } = await run(['samo latinica ', 'bez problema']);
    expect(seen.contaminated).toBe(false);
    expect(seen.context).toBeUndefined();
  });
});

describe('the context reaches the incident the sweep prints', () => {
  const strip = (s) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  it('middleware stores it and the endpoint prefers it for the snippet', () => {
    expect(strip(readFileSync('functions/_middleware.js', 'utf8'))).toMatch(
      /if \(contaminated && context\) record\.cyrillicContext = context/,
    );
    expect(strip(readFileSync('functions/api/output-observatory.js', 'utf8'))).toMatch(
      /rec\.cyrillicContext \|\| rec\.text/,
    );
  });
});
