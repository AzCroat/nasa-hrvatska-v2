// src/tests/sw-migration-keep.test.ts
// The cache-migration script must KEEP the Workbox precache ('workbox-*'), which
// holds the offline app shell. The old prefix-only check kept just
// 'nasa-hrvatska-v*' and deleted the precache on every page load, breaking
// cold-start offline navigation and leaving the offline UI unstyled. This guards
// against a regression to a single-prefix keep-list (a past prod-incident class).
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(resolve(here, '../../public/sw-migration.js'), 'utf8');

describe('sw-migration keep-list', () => {
  it('keeps both the app runtime caches and the Workbox precache', () => {
    expect(src).toContain("'nasa-hrvatska-v'");
    expect(src).toContain("'workbox-'");
  });

  it('only ever deletes caches NOT on the keep-list (no unconditional delete)', () => {
    // caches.delete must be guarded by a negated keep check.
    expect(src).toMatch(/if\s*\(\s*!keep\s*\)\s*caches\.delete/);
  });
});
