/**
 * firestoreRulesCoverClientPaths.test.ts — every collection the client touches
 * must have a rule, or the write hits deny-all and fails silently.
 *
 * THE PAIR
 * --------
 * `firestore.rules` ends with `match /{document=**}` denying everything, so a
 * collection with no `match` block of its own is not a permission error the
 * developer sees — it is a Firestore write that rejects asynchronously, usually
 * with nobody awaiting it. Local tests mock the SDK and never consult the rules;
 * the emulator suite exercises the rules it knows about. Neither asks whether
 * the two SETS agree.
 *
 * CLAUDE.md anticipates this failure in prose — "if you are adding a Family
 * feature, you are building it from scratch, and it needs a new rules match or
 * every write hits deny-all" — and `fbJoinFamily`/`memberXP` were documented as
 * live long after they were deleted. Prose is not a mechanism.
 *
 * MEASURED CLEAN when written: the client touches `users`, `srs`, `profiles`,
 * and the `xpAudit` / `conversationMemory` subcollections; all five are matched.
 * **This is a ratchet, not a fix** — said plainly, because a guard added after a
 * clean measurement reads like a repair.
 *
 * WHAT IT DOES NOT CHECK, stated: collection NAMES, not nesting or the
 * allow-rules themselves. A name matched at the wrong depth, or matched with
 * the wrong `allow`, passes here — the emulator suite is what covers those.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const PROD = globSync('src/**/*.{ts,tsx,js,jsx}').filter(
  (f) => !/[\\/](tests|__tests__)[\\/]/.test(f),
);

/**
 * Collection names the client names in a `doc(…)` / `collection(…)` call.
 *
 * THE ACCESSOR NAMES ARE DERIVED FROM EACH FILE'S OWN IMPORT, not guessed. The
 * first draft matched `doc\s*\(\s*(?:db|_db|firestore)` and found TWO
 * collections: `firebase.ts` imports `doc as fsDoc` and holds the handle in
 * `_fbDb`, so `srs` and `profiles` were invisible while the guard read as
 * covering the whole client. That is this repo's own rule — a name that matches
 * nothing guards nothing — met while writing a guard about exactly that.
 *
 * Firestore alternates collection/document, so taking EVERY string literal in
 * those calls is the safe direction: it can only demand more rules, never fewer.
 */
const FIRESTORE_IMPORT = /import\s*\{([^}]+)\}\s*from\s*['"]firebase\/firestore['"]/g;
const clientCollections = new Set<string>();
/** Files that reach Firestore at all — reported so the guard cannot go quiet. */
const firestoreFiles: string[] = [];
for (const f of PROD) {
  const src = strip(readFileSync(f, 'utf8'));
  const aliases: string[] = [];
  for (const imp of src.matchAll(FIRESTORE_IMPORT))
    for (const raw of imp[1]!.split(',')) {
      const [orig, local] = raw.trim().split(/\s+as\s+/);
      if (orig === 'doc' || orig === 'collection') aliases.push((local ?? orig).trim());
    }
  if (!aliases.length) continue;
  firestoreFiles.push(f);
  // Balanced-paren, because the arguments contain calls:
  // `collection(db, 'users', toDocId(uid), 'conversationMemory')`. A `[^)]*`
  // body stops at `toDocId(`'s close and loses every literal after it — which
  // is how the first run reported 4 collections and missed the fifth.
  const open = new RegExp(String.raw`\b(?:${aliases.join('|')})\s*\(`, 'g');
  for (const m of src.matchAll(open)) {
    let depth = 0;
    let end = -1;
    for (let i = m.index! + m[0].length - 1; i < src.length; i++) {
      if (src[i] === '(') depth++;
      else if (src[i] === ')') {
        depth--;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }
    if (end < 0) continue;
    const args = src.slice(m.index! + m[0].length, end);
    for (const lit of args.matchAll(/['"]([A-Za-z][\w-]*)['"]/g)) clientCollections.add(lit[1]!);
  }
}

/**
 * Path segments that carry a `match` block, at ANY depth. The first draft
 * captured only the segment after `match /`, so the nested `xpAudit` and
 * `conversationMemory` blocks were missed and the guard reported a live
 * collection as unruled. Take every segment of the path.
 */
const RULES = strip(readFileSync('firestore.rules', 'utf8'));
const ruleSegments = new Set<string>();
for (const m of RULES.matchAll(/match\s+(\/\S+)/g))
  for (const seg of m[1]!.matchAll(/\/([A-Za-z][\w-]*)/g)) ruleSegments.add(seg[1]!);

describe('firestore.rules covers every collection the client touches', () => {
  it('the derivation is real on both sides', () => {
    // A matcher that found nothing would make the comparison below vacuous.
    expect(PROD.length).toBeGreaterThan(400);
    // The three production files that reach Firestore: firebase.ts plus the two
    // sanctioned exceptions (offlineAwardQueue, useConversationMemory).
    expect(firestoreFiles.length).toBeGreaterThanOrEqual(3);
    expect(clientCollections.size).toBeGreaterThanOrEqual(5);
    expect(ruleSegments.size).toBeGreaterThanOrEqual(6);
  });

  it('non-vacuity: the rules parse finds the collections we know are matched', () => {
    expect(ruleSegments.has('users')).toBe(true);
    expect(ruleSegments.has('srs')).toBe(true);
    // Nested — the segment the first draft's parse could not see.
    expect(ruleSegments.has('xpAudit')).toBe(true);
    // Aliased import — the collection the first draft's parse could not see.
    expect(clientCollections.has('profiles')).toBe(true);
    // Behind a nested call — the collection the second draft's parse could not see.
    expect(clientCollections.has('conversationMemory')).toBe(true);
  });

  it('every collection the client names has a match block', () => {
    const unruled = [...clientCollections].filter((c) => !ruleSegments.has(c));
    expect(
      unruled,
      'these hit the deny-all catch-all: the write rejects asynchronously, ' +
        'usually with nobody awaiting it, so the feature silently does nothing',
    ).toEqual([]);
  });
});
