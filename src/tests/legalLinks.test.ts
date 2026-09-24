/**
 * legalLinks.test.ts — a link to one of our own pages must open that page.
 *
 * THE BUG. The signup screen renders "By continuing you agree to our Terms of
 * Service", and that link opened `https://nasahrvatska.com/privacy.html#terms`
 * — the PRIVACY POLICY, at an anchor `privacy.html` does not contain (it has no
 * `id=` attributes at all, so the fragment resolved to nothing and the browser
 * simply showed the top of the privacy policy). The actual Terms of Service is
 * a separate, complete document at `/terms.html` — Educational Use, No
 * Guarantee of Outcomes, User-Generated Content, Account Termination, Governing
 * Law — none of which the reader was shown.
 *
 * So the one place the app obtains agreement to its terms linked to a different
 * document. Not a crash, nothing in Sentry, and no test could see it: the URL
 * is a string in a `.tsx` and the target is a file in `public/`, a hand-kept
 * correspondence across two file types with no import, no type and no check
 * between them. Exactly the shape of the cron secret that drifted across a
 * Worker secret and a Pages env var for 79 failed runs.
 *
 * THE GUARD IS DERIVED FROM BOTH SIDES: the URLs come from `src/`, the pages
 * and their anchors from `public/`. Neither is restated here, so a link added
 * next month is covered without anyone remembering this file.
 *
 * SCOPE, stated: only OUR OWN origin. Outbound links to other sites cannot be
 * checked without a network call, and a unit test whose result depends on the
 * runner's network is not a unit test (the Edge-TTS lesson). `CroatiaAthletes`
 * links to sports-reference.com and espn.com; those are correctly out of scope.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ORIGIN = 'https://nasahrvatska.com';

function sourceFiles(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === 'node_modules' || e === 'tests') continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) sourceFiles(p, out);
    else if (/\.(ts|tsx)$/.test(p)) out.push(p);
  }
  return out;
}

/** Prose naming a URL is not a link to it. */
const stripComments = (s: string) =>
  s.replace(/(^|[^:])\/\/.*$/gm, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

type Link = { file: string; url: string; page: string; anchor: string | null };

/**
 * Every link to a page on our own origin.
 *
 * Matched on the ORIGIN, not on `.html`, because a bare `/terms.html` would be
 * ambiguous with the many outbound URLs that also end in `.html` — the athletes
 * roster alone carries four sports-reference.com ones, and a host-blind matcher
 * reports those as missing files.
 */
const LINKS: Link[] = (() => {
  const found: Link[] = [];
  const re = new RegExp(`${ORIGIN}(/[A-Za-z0-9_./-]*\\.html)(#[A-Za-z0-9_-]+)?`, 'g');
  for (const f of sourceFiles('src')) {
    for (const m of stripComments(readFileSync(f, 'utf8')).matchAll(re)) {
      found.push({ file: f, url: m[0], page: m[1]!, anchor: m[2] ? m[2].slice(1) : null });
    }
  }
  return found;
})();

/** The `id=` anchors a shipped page actually defines. */
function anchorsIn(page: string): Set<string> {
  const html = readFileSync(join('public', page.replace(/^\//, '')), 'utf8');
  return new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]!));
}

describe('the derivation is real', () => {
  it('finds the links in src/', () => {
    // If this comes back empty every assertion below passes vacuously — the
    // decorative-guard failure this repo keeps meeting.
    expect(LINKS.length).toBeGreaterThanOrEqual(2);
    expect(LINKS.map((l) => l.page)).toContain('/terms.html');
    expect(LINKS.map((l) => l.page)).toContain('/privacy.html');
  });

  it('reads anchors out of the shipped pages', () => {
    // Positive control for `anchorsIn`: offline.html has real ids, so a matcher
    // that silently stopped matching would show up here rather than as a
    // permanently-passing anchor check.
    expect(anchorsIn('/offline.html').size).toBeGreaterThan(0);
  });
});

describe('every link to our own origin resolves', () => {
  it.each(LINKS.map((l) => [l.url, l] as const))('%s', (_url, link) => {
    const path = join('public', link.page.replace(/^\//, ''));
    expect(
      existsSync(path),
      `${link.file} links to ${link.url}, but ${path} does not exist — the link 404s.`,
    ).toBe(true);

    if (link.anchor) {
      expect(
        anchorsIn(link.page),
        `${link.file} links to ${link.url}, but ${link.page} defines no id="${link.anchor}". ` +
          'The fragment resolves to nothing and the reader lands at the top of a ' +
          'document that may not be the one the link promised.',
      ).toContain(link.anchor);
    }
  });
});

describe('the consent line links to the terms, not to something else', () => {
  const login = stripComments(readFileSync('src/components/auth/LoginScreen.tsx', 'utf8'));

  it('signup offers both documents', () => {
    // The screen says "By continuing you agree to our Terms of Service and
    // Privacy Policy" — both halves must be openable, and must be DIFFERENT
    // documents. Pointing both at privacy.html is how this broke.
    expect(login).toContain(`${ORIGIN}/terms.html`);
    expect(login).toContain(`${ORIGIN}/privacy.html`);
  });

  it('never sends a reader to the privacy policy for the terms', () => {
    expect(login, 'the Terms of Service link points into privacy.html again').not.toMatch(
      /privacy\.html#terms/,
    );
  });
});

describe('the unreachable duplicate terms screen stays gone', () => {
  it('no TermsOfService component or route', () => {
    expect(existsSync('src/components/shared/TermsOfService.tsx')).toBe(false);
    const router = stripComments(readFileSync('src/components/AppRouter.tsx', 'utf8'));
    // It was rendered at `currentScreen === 'terms'` while NOTHING in the repo
    // ever set that screen, so its copy drifted unnoticed: dated March 2026
    // against terms.html's April, with a contact address on nasahrvatska.APP,
    // a domain this app does not use. Dead legal text that disagrees with the
    // live document is worse than no copy — someone updates it believing it
    // ships.
    expect(router).not.toMatch(/TermsOfService/);
    expect(router).not.toMatch(/currentScreen === 'terms'/);
  });

  it('the deprecated PrivacyPolicy component is gone too', () => {
    // Self-declared deprecated in its own first line, referenced by nothing.
    expect(existsSync('src/components/shared/PrivacyPolicy.tsx')).toBe(false);
  });
});
