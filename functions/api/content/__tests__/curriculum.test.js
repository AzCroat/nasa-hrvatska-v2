// functions/api/content/__tests__/curriculum.test.js
//
// THE PAYLOAD SPLIT (Wave 1, 2026-08-28).
//
// /api/content/lessons returns the whole LESSONS array — 220 KB at 45 lessons
// and heading for ~0.9 MB at the 180 this curriculum targets, shipped in full to
// render a list. These endpoints split it the way /api/content/catalog already
// splits stories: the spine carries shape, each lesson body is fetched on open.
//
// The assertions that matter are the ones a refactor could quietly undo: that no
// slide leaks into the spine, and that the spine stays small.

import { describe, it, expect, vi } from 'vitest';

vi.mock('../../_verifyToken.js', () => ({
  getFirebaseUid: vi.fn(async () => 'uid_test'),
}));

// Static imports, not top-level await: Cloudflare's Pages Functions build
// compiles everything under functions/ against ES2020, where top-level await is
// unavailable. Vitest accepts it and the Pages build does not, so the local
// suite passed while the deploy failed. vi.mock is hoisted, so static imports
// still see the mock — the same shape every other test in this directory uses.
import { onRequestGet as getCurriculum } from '../curriculum.js';
import { onRequestGet as getLesson } from '../lessons/[id].js';
import { LESSONS } from '../_data/lessons.js';
import { CURRICULUM } from '../_data/curriculum.js';
import { ETAGS } from '../_data/_etags.js';

const env = {
  FIREBASE_PROJECT_ID: 'nh-test',
  CONTENT_DAILY_CAP: '500',
  AI_QUOTA_DB: { get: async () => null, put: async () => {} },
};
const req = (path, headers = {}) =>
  new Request(`https://nasahrvatska.com${path}`, {
    headers: new Headers({
      origin: 'https://nasahrvatska.com',
      authorization: 'Bearer t',
      ...headers,
    }),
  });

async function spine() {
  const res = await getCurriculum({ request: req('/api/content/curriculum'), env });
  expect(res.status).toBe(200);
  return (await res.json()).data;
}

describe('the spine endpoint carries shape, never content', () => {
  it('returns one row per curriculum entry', async () => {
    const data = await spine();
    expect(data.length).toBe(CURRICULUM.length);
  });

  it('NO row contains slides — the whole point of the split', async () => {
    // One accidental `...lesson` spread here re-creates the 0.9 MB response the
    // split exists to prevent, and nothing else would notice.
    for (const row of await spine()) {
      expect(row, `${row.id} leaked slides`).not.toHaveProperty('slides');
    }
  });

  it('stays small — PER ENTRY, so the bound survives the catalog growing', async () => {
    // This was an absolute 40 KB cap sized against 45 lessons. The A1 and A2
    // expansions took the catalog to 88 and it fired on legitimate growth —
    // and would have fired again at every remaining level, training whoever hit
    // it to raise the number rather than read it. A cap that gets bumped once a
    // wave is not a guard.
    //
    // Per-entry is the bound that actually detects what this exists to detect.
    // A spine row is ~490 bytes; a row that leaked its lesson body would be
    // several KB, because a lesson averages ten slides of prose. The ratio is
    // an order of magnitude, so 1.5 KB catches a leak decisively and needs no
    // revisiting as levels are authored.
    const data = await spine();
    const bytes = Buffer.byteLength(JSON.stringify(data));
    expect(bytes / data.length).toBeLessThan(1536);
  });

  it('stays small in absolute terms too, at the full 180-lesson target', async () => {
    // The backstop against a regression that inflates every row equally, which
    // a per-entry average would happily accept. Sized for the whole programme
    // (180 entries at ~490 bytes is ~88 KB) rather than for today's catalog, so
    // it is a real ceiling and not a running total.
    const bytes = Buffer.byteLength(JSON.stringify(await spine()));
    expect(bytes).toBeLessThan(150 * 1024);
  });

  it('carries the sequencing fields the engine needs', async () => {
    for (const row of await spine()) {
      expect(typeof row.order).toBe('number');
      expect(Array.isArray(row.prerequisites)).toBe(true);
      expect(Array.isArray(row.objectives)).toBe(true);
      expect(row.objectives.length).toBeGreaterThan(0);
      expect(row.level).toMatch(/^[ABC][12]$/);
    }
  });

  it('carries a per-lesson etag so one body can be cached at a time', async () => {
    for (const row of await spine()) {
      expect(row.etag, `${row.id} has no body etag`).toBe(ETAGS.curriculumLessons[row.id]);
    }
  });

  it('takes display metadata from the lesson, so the two cannot disagree', async () => {
    const byId = new Map(LESSONS.map((l) => [l.id, l]));
    for (const row of await spine()) {
      expect(row.title).toBe(byId.get(row.id).title);
      expect(row.icon).toBe(byId.get(row.id).icon);
    }
  });
});

describe('the per-lesson endpoint', () => {
  it('returns the full lesson, slides included', async () => {
    const res = await getLesson({
      request: req('/api/content/lessons/alphabet'),
      env,
      params: { id: 'alphabet' },
    });
    expect(res.status).toBe(200);
    const { data } = await res.json();
    expect(data.id).toBe('alphabet');
    expect(Array.isArray(data.slides)).toBe(true);
    expect(data.slides.length).toBeGreaterThan(0);
  });

  it('404s on an unknown id rather than serving something adjacent', async () => {
    const res = await getLesson({
      request: req('/api/content/lessons/no-such-lesson'),
      env,
      params: { id: 'no-such-lesson' },
    });
    expect(res.status).toBe(404);
    expect((await res.json()).error).toBe('not_found');
  });

  it('serves every lesson the spine advertises', async () => {
    // A spine row pointing at a body that 404s is a learner staring at a spinner.
    for (const e of CURRICULUM) {
      const res = await getLesson({
        request: req(`/api/content/lessons/${e.id}`),
        env,
        params: { id: e.id },
      });
      expect(res.status, `${e.id} is advertised but does not resolve`).toBe(200);
    }
  });
});

describe('etag caching', () => {
  it('the spine etag is stable across calls', async () => {
    const a = await getCurriculum({ request: req('/api/content/curriculum'), env });
    const b = await getCurriculum({ request: req('/api/content/curriculum'), env });
    const ja = await a.json();
    const jb = await b.json();
    expect(ja.etag).toMatch(/^[0-9a-f]{40}$/);
    expect(ja.etag).toBe(jb.etag);
  });

  it('304s when the client already has the spine', async () => {
    const first = await getCurriculum({ request: req('/api/content/curriculum'), env });
    const { etag } = await first.json();
    const second = await getCurriculum({
      request: req('/api/content/curriculum', { 'if-none-match': etag }),
      env,
    });
    expect(second.status).toBe(304);
  });

  it('the spine etag MOVES when the syllabus is resequenced', async () => {
    // It is computed over the order AND the body hashes, so a pure reordering —
    // which changes no lesson at all — must still invalidate the client's copy.
    const { computeEtag } = await import('../../../../scripts/generate-content-etags.mjs');
    const reordered = CURRICULUM.map((e, i) => (i === 0 ? { ...e, order: 99 } : e));
    const before = await computeEtag({ spine: CURRICULUM, bodies: ETAGS.curriculumLessons });
    const after = await computeEtag({ spine: reordered, bodies: ETAGS.curriculumLessons });
    expect(after).not.toBe(before);
    expect(before).toBe(ETAGS.curriculum);
  });

  it('per-lesson etags differ between lessons', async () => {
    // A shared etag would mean changing one lesson invalidates every cached body.
    const tags = Object.values(ETAGS.curriculumLessons);
    expect(new Set(tags).size).toBe(tags.length);
  });
});
