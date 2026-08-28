import { readCached, writeCached, bumpValidated, isStale, isTooOldToServe } from './contentCache';
import { getFirebaseBearer } from './audio';
import { API_BASE } from './platform';
import { getCurrentUid } from './firebaseUid';
import type { CurriculumEntry } from './curriculum';
import { writeCurriculumSpine } from './curriculumProgress';
import {
  ContentAuthError,
  ContentNotFoundError,
  ContentRateLimitError,
  ContentOfflineError,
  ContentFetchError,
  type ContentCatalog,
  type StoryCatalogEntry,
  type GrammarCatalogEntry,
  type Story,
  type GrammarUnit,
  type Grammar,
  type Lesson,
  type Content,
} from '../types/content';

const ANON_NS = 'anon';

async function namespaceUid(): Promise<string> {
  return (await getCurrentUid()) || ANON_NS;
}

async function fetchAuthed(path: string, etag?: string): Promise<Response> {
  // On Capacitor native the app is served from https://localhost, which has no
  // Pages Functions. Capacitor's WebViewLocalServer routes any path whose last
  // segment has no dot back to the bundled index.html as text/html with status
  // 200 (html5mode, on by default) — so a relative '/api/content/...' did not
  // 404, it returned a web page that *looked* like a success. res.json() below
  // then threw a raw SyntaxError, past every typed ContentError branch.
  //
  // That took out the whole content layer in the native build: core (the
  // vocabulary map V, used by every vocab launch), lessons, grammar, the story
  // and grammar-unit catalogues, and each individual story/unit.
  //
  // API_BASE is '' off-native, so this is a no-op on web and in E2E.
  const url = path.startsWith('/') ? API_BASE + path : path;

  // First attempt — cached bearer (matches apiFetch.ts hot path).
  const bearer = await getFirebaseBearer();
  const headers: Record<string, string> = {};
  if (bearer) headers.Authorization = 'Bearer ' + bearer;
  if (etag) headers['If-None-Match'] = `"${etag}"`;
  // We intentionally fire the fetch even when there's no bearer. A previous
  // attempt to short-circuit with a synthetic 401 broke every e2e test that
  // mocks /api/content/* via page.route, because the mock route never sees
  // a request that's intercepted before fetch() runs. Letting the request
  // through preserves test contract; the bearer-race in audio.ts is fixed
  // separately so authenticated users no longer see cold-load 401s.
  let res = await fetch(url, { method: 'GET', headers });

  // 2026-05-21 BUG FIX: long-running tabs sit on a 1-hour Firebase ID token;
  // when it expires, /api/content/* returns 401 even though the user is
  // authenticated. apiFetch.ts already does this 401→force-refresh→retry
  // dance; content fetches need the same. One retry only — if the refresh
  // still produces a 401, the user is genuinely unauthenticated and we let
  // ContentAuthError propagate as before.
  if (res.status === 401 && bearer) {
    const fresh = await getFirebaseBearer(true);
    if (fresh && fresh !== bearer) {
      const retryHeaders: Record<string, string> = { Authorization: 'Bearer ' + fresh };
      if (etag) retryHeaders['If-None-Match'] = `"${etag}"`;
      res = await fetch(url, { method: 'GET', headers: retryHeaders });
    }
  }
  return res;
}

async function fetchAndCache<T>(uid: string, resourceKey: string, path: string): Promise<T> {
  const cached = await readCached(uid, resourceKey);

  // Fresh cache: short-circuit, no network
  if (cached && !isStale(cached)) {
    return cached.body as T;
  }

  let res: Response;
  try {
    res = await fetchAuthed(path, cached?.etag);
  } catch {
    if (cached && !isTooOldToServe(cached)) return cached.body as T;
    throw new ContentOfflineError();
  }

  if (res.status === 304 && cached) {
    await bumpValidated(uid, resourceKey);
    return cached.body as T;
  }

  if (res.status === 401) throw new ContentAuthError();

  if (res.status === 404) {
    throw new ContentNotFoundError(resourceKey);
  }

  if (res.status === 429) {
    if (cached && !isTooOldToServe(cached)) return cached.body as T;
    let retryAt = '';
    try {
      const json = (await res.json()) as { retryAt?: string };
      retryAt = json?.retryAt ?? '';
    } catch {
      /* ignore */
    }
    throw new ContentRateLimitError(retryAt);
  }

  if (!res.ok) {
    if (cached && !isTooOldToServe(cached)) return cached.body as T;
    throw new ContentFetchError(res.status);
  }

  // Server returns { data, etag }
  const json = (await res.json()) as { data: T; etag: string };
  await writeCached(uid, resourceKey, { etag: json.etag, body: json.data });
  return json.data;
}

export async function getStoryCatalog(): Promise<StoryCatalogEntry[]> {
  const uid = await namespaceUid();
  const cat = await fetchAndCache<ContentCatalog>(uid, 'catalog:all', '/api/content/catalog');
  return cat.stories;
}

export async function getGrammarUnitCatalog(): Promise<GrammarCatalogEntry[]> {
  const uid = await namespaceUid();
  const cat = await fetchAndCache<ContentCatalog>(uid, 'catalog:all', '/api/content/catalog');
  return cat.grammarUnits;
}

export async function getStory(id: string): Promise<Story> {
  const uid = await namespaceUid();
  return fetchAndCache<Story>(uid, `story:${id}`, `/api/content/stories/${encodeURIComponent(id)}`);
}

export async function getGrammarUnit(id: string): Promise<GrammarUnit> {
  const uid = await namespaceUid();
  return fetchAndCache<GrammarUnit>(
    uid,
    `grammar:${id}`,
    `/api/content/grammar-units/${encodeURIComponent(id)}`,
  );
}

export async function getGrammar(): Promise<Grammar> {
  const uid = await namespaceUid();
  return fetchAndCache<Grammar>(uid, 'grammar:all', '/api/content/grammar');
}

export async function getLessons(): Promise<Lesson[]> {
  const uid = await namespaceUid();
  return fetchAndCache<Lesson[]>(uid, 'lessons:all', '/api/content/lessons');
}

/**
 * The curriculum spine — order, prerequisites and objectives, with no slides.
 *
 * Fetched separately from the lesson bodies on purpose: /api/content/lessons
 * returns the whole catalog (220KB today, ~0.9MB at the 180 lessons this
 * curriculum targets) and the sequencer only needs the shape. See
 * functions/api/content/curriculum.js.
 *
 * The result is mirrored into localStorage so the SYNCHRONOUS session builder
 * and lesson picker can read it without becoming async. Cache failures are
 * swallowed: an absent spine is a defined state that degrades to the previous
 * rotation policy, never to a learner being taught nothing.
 */
export async function getCurriculumSpine(): Promise<CurriculumEntry[]> {
  const uid = await namespaceUid();
  const spine = await fetchAndCache<CurriculumEntry[]>(
    uid,
    'curriculum:spine',
    '/api/content/curriculum',
  );
  try {
    if (Array.isArray(spine) && spine.length > 0) writeCurriculumSpine(spine);
  } catch {
    /* the fetch still succeeded; the mirror is an optimisation */
  }
  return spine;
}

export async function getContent(): Promise<Content> {
  const uid = await namespaceUid();
  return fetchAndCache<Content>(uid, 'core:all', '/api/content/core');
}
