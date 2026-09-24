#!/usr/bin/env node
/**
 * checkNewsFeeds.mjs — does every configured news source actually answer?
 *
 * WHY IT EXISTS. `/api/news` fans out over `RSS_FEEDS` and a source that never
 * answers is invisible: the surviving sources cover for it, the learner still
 * gets news, and nothing records that one of them has been dead for months.
 * That was true for as long as the endpoint existed. It matters more now that
 * the source list is an EDITORIAL decision (owner directive, 2026-09-24) — a
 * silently dead feed means the owner's choice is quietly not in effect.
 *
 * It also verifies what nobody working on this repo can verify locally: the
 * sandbox blocks outbound traffic to every Croatian host, so a feed URL cannot
 * be checked from a development machine at all. A GitHub runner can. This is
 * how a feed path gets confirmed rather than guessed.
 *
 * THE LIST IS READ FROM PRODUCTION SOURCE, not restated here — a checker with
 * its own copy of the URLs checks its own copy.
 *
 *   node scripts/checkNewsFeeds.mjs          # exits 1 if any SOURCE is dead
 *
 * A source with several candidate URLs passes when ANY of them answers; the
 * report names the one that did, so the list can be trimmed on evidence.
 */
import { RSS_FEEDS } from '../functions/api/news.js';

const TIMEOUT_MS = 20000;
const UA = 'NasaHrvatska/1.0 (Croatian language learning app; feed health check)';

function countItems(xml) {
  return (xml.match(/<item[\s>]/gi) || []).length;
}

async function tryUrl(url) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: ctl.signal });
    const body = res.ok ? await res.text() : '';
    return { url, status: res.status, items: countItems(body), bytes: body.length };
  } catch (e) {
    return { url, status: 0, items: 0, bytes: 0, error: String(e?.name || e).slice(0, 60) };
  } finally {
    clearTimeout(t);
  }
}

const dead = [];
for (const feed of RSS_FEEDS) {
  let winner = null;
  const tried = [];
  for (const url of feed.urls) {
    const r = await tryUrl(url);
    tried.push(r);
    if (r.status === 200 && r.items > 0) {
      winner = r;
      break;
    }
  }
  if (winner) {
    console.log(`OK    ${feed.name.padEnd(16)} ${winner.items} items  ${winner.url}`);
    for (const r of tried.slice(0, -1))
      console.log(
        `      (also tried ${r.url} -> ${r.error ? r.error : r.status + ', ' + r.items + ' items'})`,
      );
  } else {
    dead.push(feed.name);
    console.log(`DEAD  ${feed.name}`);
    for (const r of tried)
      console.log(
        `      ${r.url} -> ${r.error ? r.error : r.status + ', ' + r.items + ' items, ' + r.bytes + ' bytes'}`,
      );
  }
}

console.log(`\n${RSS_FEEDS.length - dead.length}/${RSS_FEEDS.length} sources answering.`);
if (dead.length) {
  console.log(
    `\nDead: ${dead.join(', ')}. A source that never answers is invisible to a learner — ` +
      `the others cover for it — so fix the URL or take the source out deliberately.`,
  );
  process.exit(1);
}
