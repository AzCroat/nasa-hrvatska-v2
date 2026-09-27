/**
 * NO LINK OUT TO YOUTUBE OR TO ANOTHER LANGUAGE SERVICE — ANYWHERE (owner directive,
 * 2026-09-09, restated 2026-09-27: "Remove YouTube").
 *
 * The 2026-09-09 removal (#631) was real and was scoped to the MEDIA PAGE: its guard,
 * `mediaLinks.test.ts`, reads `MEDIA` / `POPCULTURE` and nothing else. So a second screen
 * it never looked at, Grammar Videos (`grammarvideos`, Learn tab), kept five YouTube links
 * for eighteen days — two playlists of someone else's Croatian lessons, a teacher's
 * channel, a "Find videos" YouTube search on every grammar topic, and a search for
 * CroatianPod101, a paid competitor. A guard over one data file reads exactly like a guard
 * over the app, which is the whole reason this one scans every source file instead.
 *
 * WHAT IS ALLOWED, and why: `youtube-nocookie.com/embed/` — the in-app player
 * `MediaDetailDrawer` uses for Croatian songs and documentaries. It plays INSIDE the app
 * and sends nobody anywhere; #631 kept it deliberately. Every other YouTube address is a
 * way out.
 *
 * Competitor DOMAINS are banned too. Their NAMES may appear in code comments (a handful
 * say "DuoLingo best practice"), which no learner sees; a URL is the thing that sends one.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

// HOSTS ARE MATCHED BY SCANNING, NOT BY A HOST REGEX. The first version was an
// unanchored `youtube\.com` pattern, and CodeQL flags that shape
// (js/regex/missing-regexp-anchor, alert #94): used to VALIDATE a URL it would accept
// `evil.example/youtube.com`. Here it only ever SEARCHES a line of source, where
// "anywhere in the line" is the point — but a regex that reads like a URL check invites
// someone to reuse it as one, so the boundaries are written out instead.
const COMPETITORS = [
  'duolingo',
  'babbel',
  'italki',
  'preply',
  'lingopie',
  'croatianpod101',
  'innovativelanguage',
  'memrise',
  'busuu',
  'pimsleur',
  'rosettastone',
  'mondly',
  'lingq',
];
const isWord = (c: string | undefined) => !!c && /\w/.test(c);

/** Every index at which `needle` occurs in `hay`. */
function occurrences(hay: string, needle: string): number[] {
  const out: number[] = [];
  for (let i = hay.indexOf(needle); i >= 0; i = hay.indexOf(needle, i + 1)) out.push(i);
  return out;
}

/** A YouTube host that is not the in-app embed: youtube.com (optionally www./m.) or youtu.be. */
function youtubeLink(l: string): boolean {
  for (const host of ['youtube.com', 'youtu.be']) {
    for (const i of occurrences(l, host)) {
      const before = l.slice(0, i);
      const pre = before.endsWith('www.') ? 4 : before.endsWith('m.') ? 2 : 0;
      const prev = l[i - pre - 1];
      if (isWord(prev) || prev === '.' || prev === '-') continue; // part of another host
      const after = l.slice(i + host.length);
      if (isWord(after[0])) continue; // youtube.community, youtu.bet …
      if (host === 'youtube.com' && after.startsWith('/embed')) continue; // plays in the app
      return true;
    }
  }
  return false;
}

/** A link to a competing language service's .com domain (any subdomain). */
function competitorLink(l: string): boolean {
  return COMPETITORS.some((c) =>
    occurrences(l, `${c}.com`).some(
      (i) => !isWord(l[i - 1]) && !isWord(l[i + c.length + '.com'.length]),
    ),
  );
}

function outboundHits(src: string): string[] {
  const hits: string[] = [];
  src.split('\n').forEach((line, i) => {
    const l = line.toLowerCase();
    if (youtubeLink(l) || competitorLink(l) || l.includes('open on youtube')) {
      hits.push(`${i + 1}: ${line.trim().slice(0, 100)}`);
    }
  });
  return hits;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (e === 'tests' || e === 'node_modules') continue;
      walk(p, out);
    } else if (/\.(tsx?|jsx?|mjs|json)$/.test(e)) out.push(p);
  }
  return out;
}

const FILES = [...walk('src'), ...walk('functions')];

describe('no link out to YouTube or another language service', () => {
  it('scans the whole app, not one data file', () => {
    expect(FILES.length, 'the walk found almost nothing — the scan proves nothing').toBeGreaterThan(
      800,
    );
    expect(FILES).toContain(join('src', 'components', 'croatia', 'MediaDetailDrawer.tsx'));
    expect(FILES).toContain(join('src', 'data', 'cultural', 'media.js'));
  });

  it('catches the shapes it must, and allows the in-app embed (positive control)', () => {
    expect(outboundHits(`url: 'https://www.youtube.com/playlist?list=PL1'`)).toHaveLength(1);
    expect(
      outboundHits('const u = `https://www.youtube.com/results?search_query=${q}`;'),
    ).toHaveLength(1);
    expect(outboundHits(`href="https://youtu.be/abc"`)).toHaveLength(1);
    expect(outboundHits(`<button>Open on YouTube →</button>`)).toHaveLength(1);
    expect(outboundHits(`window.open('https://www.italki.com/teachers/croatian')`)).toHaveLength(1);
    expect(outboundHits('const src = `https://www.youtube-nocookie.com/embed/${id}`;')).toEqual([]);
    expect(outboundHits(`src="https://www.youtube.com/embed/abc"`)).toEqual([]);
    // boundaries: a subdomain of a competitor is still a link; a longer host is not ours
    expect(outboundHits(`src: 'https://app.duolingo.com/'`)).toHaveLength(1);
    expect(outboundHits(`href="https://m.youtube.com/watch?v=x"`)).toHaveLength(1);
    expect(outboundHits(`'https://notyoutube.com/'`)).toEqual([]);
    expect(outboundHits(`'https://youtube.community/'`)).toEqual([]);
    expect(outboundHits(`'https://notbabbel.com/'`)).toEqual([]);
  });

  it('no source file links to YouTube or to a language service', () => {
    const bad: string[] = [];
    for (const f of FILES) {
      for (const h of outboundHits(readFileSync(f, 'utf8'))) bad.push(`${f}:${h}`);
    }
    expect(
      bad,
      'The app teaches Croatian itself — it never sends a learner out to be taught.',
    ).toEqual([]);
  });

  it('the removed Grammar Videos screen stays removed', () => {
    const router = readFileSync('src/components/AppRouter.tsx', 'utf8');
    expect(router).not.toMatch(/grammarvideos|GrammarVideos/);
  });
});
