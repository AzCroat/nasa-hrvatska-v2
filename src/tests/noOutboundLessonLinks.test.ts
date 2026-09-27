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

const OUTBOUND: RegExp[] = [
  // any youtube.com / youtu.be address except the privacy-mode embed host
  /(?<![\w.-])(?:www\.|m\.)?youtube\.com(?!\/embed)/i,
  /(?<![\w.-])youtu\.be\b/i,
  /Open on YouTube/i,
  // language-learning services
  /\b(?:duolingo|babbel|italki|preply|lingopie|croatianpod101|innovativelanguage|memrise|busuu|pimsleur|rosettastone|mondly|lingq)\.com\b/i,
];

function outboundHits(src: string): string[] {
  const hits: string[] = [];
  src.split('\n').forEach((line, i) => {
    for (const re of OUTBOUND) {
      if (re.test(line)) {
        hits.push(`${i + 1}: ${line.trim().slice(0, 100)}`);
        break;
      }
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
