/**
 * newsSources.test.ts — the news sources are an editorial decision (2026-09-24).
 *
 * Owner directive: Index.hr is out; Dnevnik.hr is what the app should carry,
 * with 24sata and Zadarski list acceptable alongside it. That makes `RSS_FEEDS`
 * the one list in this repo whose CONTENT is not a technical judgement, so it
 * gets a test that says so — a drive-by "let's add a feed" is the failure mode.
 *
 * TWO DEFECTS WERE FOUND WHILE MAKING THAT CHANGE, and both made the decision
 * unenforceable rather than merely wrong:
 *
 *   SILENT DEATH   the fan-out was `catch { return [] }` with a bare `!res.ok`
 *                  return. A source whose URL is wrong contributes nothing, the
 *                  surviving sources cover for it, the learner still gets news,
 *                  and NOTHING records it. A chosen source could be absent for
 *                  months and look exactly like a source with no story today.
 *   CONCATENATION  `feedResults.flat().slice(0, 6)` took the first source's five
 *                  items and then one of the second's. The third and fourth
 *                  sources never reached a learner at all, so adding a source
 *                  to this list changed nothing.
 *
 * The URLs themselves cannot be checked here — every Croatian host answers 403
 * at the sandbox's egress proxy, including the two that have worked in
 * production for months. `scripts/checkNewsFeeds.mjs` checks them on a GitHub
 * runner, which can reach them, and fails red.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { RSS_FEEDS, interleave, fetchFeed } from '../../functions/api/news.js';

describe('the source list is what the owner asked for', () => {
  it('carries Dnevnik.hr', () => {
    expect(RSS_FEEDS.map((f: { name: string }) => f.name)).toContain('Dnevnik.hr');
  });

  it('carries no source the owner removed', () => {
    const REMOVED = ['Index.hr'];
    const names = RSS_FEEDS.map((f: { name: string }) => f.name);
    for (const r of REMOVED) expect(names, `${r} was removed on request`).not.toContain(r);
  });

  it('mentions no removed source anywhere a learner can read it', () => {
    // The endpoint's own comment records the removal; that is the record, not a
    // mention. Everything else — the media catalogue, the reading-practice
    // prompt on CivicScreen, the offline fallback's attributions — is copy.
    const files = [
      'src/data/cultural/media.js',
      'src/components/croatia/CivicScreen.tsx',
      'src/components/croatia/CroatianNewsScreen.tsx',
    ];
    const offenders = files.filter((f) => {
      const body = readFileSync(f, 'utf8')
        .split('\n')
        .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
        .join('\n');
      return /Index\.hr/.test(body);
    });
    expect(offenders).toEqual([]);
  });

  it('gives every source at least one candidate URL', () => {
    for (const f of RSS_FEEDS as Array<{ name: string; urls: string[] }>) {
      expect(Array.isArray(f.urls), f.name).toBe(true);
      expect(f.urls.length, f.name).toBeGreaterThan(0);
      for (const u of f.urls) expect(u, f.name).toMatch(/^https:\/\//);
    }
  });
});

describe('the offline fallback attributes its own writing', () => {
  it('names no real newsroom as the author of text this app wrote', () => {
    const src = readFileSync('src/components/croatia/CroatianNewsScreen.tsx', 'utf8');
    const start = src.indexOf('const FALLBACK_ARTICLES');
    const block = src.slice(start, src.indexOf('\n];', start));
    const sources = [...block.matchAll(/source:\s*'([^']+)'/g)].map((m) => m[1]);
    expect(sources.length).toBeGreaterThan(0);
    for (const s of sources) expect(s).toBe('Naša Hrvatska');
  });
});

describe('every chosen source can actually reach a learner', () => {
  it('interleaves sources instead of concatenating them', () => {
    const out = interleave([['a1', 'a2', 'a3'], ['b1', 'b2'], ['c1']]);
    // The old `flat()` produced a1 a2 a3 b1 b2 c1, so a six-item cut was five
    // items of source A and one of B, and source C never appeared.
    expect(out).toEqual(['a1', 'b1', 'c1', 'a2', 'b2', 'a3']);
  });

  it('handles an empty source without dropping the others', () => {
    expect(interleave([[], ['b1'], ['c1', 'c2']])).toEqual(['b1', 'c1', 'c2']);
    expect(interleave([])).toEqual([]);
  });
});

describe('a dead feed is reported, not swallowed', () => {
  const RSS = (n: number) =>
    '<rss><channel>' +
    Array.from(
      { length: n },
      (_, i) => `<item><title>T${i}</title><description>D${i}</description></item>`,
    ).join('') +
    '</channel></rss>';

  it('falls through to the next candidate URL and says which one won', async () => {
    const calls: string[] = [];
    const res = await fetchFeed({ name: 'X', urls: ['https://a/one', 'https://a/two'] }, (async (
      url: string,
    ) => {
      calls.push(url);
      return url.endsWith('two')
        ? { ok: true, status: 200, text: async () => RSS(3) }
        : { ok: false, status: 404, text: async () => '' };
    }) as never);
    expect(calls).toEqual(['https://a/one', 'https://a/two']);
    expect(res.ok).toBe(true);
    expect(res.url).toBe('https://a/two');
    expect(res.items).toHaveLength(3);
  });

  it('reports ok:false when no candidate answers, rather than an empty success', async () => {
    const res = await fetchFeed({ name: 'X', urls: ['https://a/one'] }, (async () => {
      throw new Error('boom');
    }) as never);
    expect(res.ok).toBe(false);
    expect(res.items).toEqual([]);
    expect(res.attempts).toHaveLength(1);
    expect(res.attempts[0].url).toBe('https://a/one');
  });

  it('a 200 with no items is not a working feed', async () => {
    // A publisher serving an HTML error page with status 200 is the common
    // shape of a moved feed; counting that as success is how a dead source
    // stays invisible.
    const res = await fetchFeed({ name: 'X', urls: ['https://a/one'] }, (async () => ({
      ok: true,
      status: 200,
      text: async () => '<html>not a feed</html>',
    })) as never);
    expect(res.ok).toBe(false);
  });
});
