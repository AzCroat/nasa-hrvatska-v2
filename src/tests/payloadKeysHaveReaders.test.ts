/**
 * payloadKeysHaveReaders.test.ts — every key in the core payload must be READ by
 * something the app can reach.
 *
 * THE LAYER NOBODY GUARDED. `corePayloadKeys.test.js` requires every entry of
 * `CORE_PAYLOAD_KEYS` to name a real EXPORT — the server half. `contentShapeSweep`
 * checks that a screen's field ACCESSES exist in the payload — the shape half.
 * Neither asks the reverse question: does anything read this key at all? So a key
 * keeps being composed, serialized and shipped to every client in the 1.4 MB
 * `/api/content/core` response after its last consumer goes away, and nothing says
 * so. That is `meteredEndpointsHaveCallers` (sweep 130) one layer over, and it has
 * the same cause: **removing a dead client is the right move whose side effect had
 * no observer.**
 *
 * TWO KEYS WERE ALREADY IN THAT STATE when this was written (sweep 137), and both
 * were stranded by a CORRECT action:
 *   - `LEVEL_NARRATIVE`: its one consumer was `HeroSection`, unrendered since
 *     2026-04-25 and deleted in sweep 136. #655 spent a September PR fixing how its
 *     level-7 rung was read.
 *   - `SCENES`: sweep 107 collapsed a feature that read the SAME dataset from two
 *     sources — `ScenePicker` off the payload, its own parent off the byte-identical
 *     static module — by pointing the picker at the static copy. Correct, and it left
 *     8.6 KB in every client's payload with no reader. That sweep's own note says
 *     "the key still has five other consumers", which is false: those five are
 *     CARRIERS (the type declaration, the E2E fixture, the key list, the endpoint,
 *     the etag generator). Sweep 118's rule, in the consumer direction — a conduit is
 *     not a consumer.
 *
 * WHAT COUNTS AS A READER, and the two traps:
 *   - A TYPE DECLARATION IS NOT A READER, and this needed MEASURING rather than
 *     exempting. `src/types/content.ts` names every key by construction, so the
 *     obvious move is to exclude the file — and measured, the matcher already refuses
 *     it: an interface member is `KEY: Record<…>`, which is neither a property access
 *     nor a destructure, so all 32 keys read as unread there. So there is no
 *     exclusion; a redundant exemption is the stale-exemption shape with its reason
 *     written in advance (sweep 135). The property is ASSERTED instead, on the real
 *     file, because it is what makes every finding here meaningful.
 *   - A READER THAT IS ITSELF UNREACHABLE IS NOT A READER (sweep 130's correction,
 *     which is exactly how `LEVEL_NARRATIVE` got here — `HeroSection` read it for
 *     five months after nothing rendered it). The reader set is filtered through
 *     `appReachable()`, and that filter is driven on a fabricated pair below rather
 *     than on whichever dead module happens to exist this month — a guard whose
 *     non-vacuity depends on a dead file STAYING dead breaks the moment somebody
 *     does the right thing.
 */
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, appReachable, isSubject, EXTS } from './helpers/moduleGraph';

const CORE = 'functions/api/content/_data/core.js';
const TYPES = 'src/types/content.ts';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

/** The payload's key list, read from the one array that defines it. */
function payloadKeys(): string[] {
  const src = fs.readFileSync(path.join(ROOT, CORE), 'utf8');
  const at = src.indexOf('CORE_PAYLOAD_KEYS = [');
  if (at < 0) throw new Error('CORE_PAYLOAD_KEYS is no longer an array literal');
  const block = src.slice(at, src.indexOf('\n];', at));
  return [...block.matchAll(/'([A-Z][A-Z0-9_]*)'/g)].map((m) => m[1]!);
}

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(path.join(ROOT, dir))) {
    const rel = path.join(dir, e);
    if (fs.statSync(path.join(ROOT, rel)).isDirectory()) walk(rel, out);
    else if (EXTS.some((x) => e.endsWith(x))) out.push(rel);
  }
  return out;
}

/**
 * A read of `KEY` off some object: `x.KEY`, `x?.KEY`, `x['KEY']`, or a destructure
 * `const { KEY } = …`. Deliberately object-blind — nearly every screen does
 * `const data = useContent()` and reads `data.KEY` later, and several go through one
 * more hop into state (sweep 121's finding), so following the useContent variable
 * itself sees almost nothing.
 */
const readsIt = (txt: string, key: string) =>
  new RegExp(
    `(?:\\??\\.\\s*${key}\\b|\\[\\s*['"\`]${key}['"\`]\\s*\\]|\\{[^}]{0,400}\\b${key}\\b[^}]{0,400}\\}\\s*=)`,
  ).test(txt);

const CLIENT_FILES: [string, string][] = walk('src')
  .filter(isSubject)
  .map((f) => [f, strip(fs.readFileSync(path.join(ROOT, f), 'utf8'))]);

const APP_REACHABLE = appReachable();

/** Readers of a key, with the inputs injectable so the filter can be driven. */
function readersOf(
  key: string,
  files: [string, string][] = CLIENT_FILES,
  reachable: Set<string> = APP_REACHABLE,
): string[] {
  return files.filter(([f, t]) => reachable.has(f) && readsIt(t, key)).map(([f]) => f);
}

/**
 * Keys with no reachable client reader, each with the reason. Both staleness
 * directions are checked below, per this repo's `couplingClearingPath` rule.
 */
const NO_CLIENT_READER: Record<string, string> = {
  LEVEL_NARRATIVE:
    'STRANDED since 2026-04-25 and confirmed in sweep 137. Its only consumer was ' +
    'home/HeroSection, unrendered from that date (sweep 129) and deleted in sweep 136 — ' +
    'so #655 (2026-09-12) fixed the reading of its level-7 rung in a component nobody ' +
    'could see. 704 bytes. RECORDED rather than removed because the payload is the only ' +
    'copy that reaches a client at all: the goal narrative is authored English copy a ' +
    'future Home surface may want, and GoalSelectorSection still names it in prose. ' +
    'Removing it is a decision, queued in AUDIT-STATE.',
  SCENES:
    'STRANDED by sweep 107, which was RIGHT: one feature read the same dataset from ' +
    'two sources (ScenePicker off the payload, its own parent off the byte-identical ' +
    'static src/components/learn/VocabSceneData.js) and collapsing it onto the static ' +
    'copy is what makes the drift unrepresentable and keeps an offline game offline. ' +
    'What the collapse left is 8,626 bytes of duplicate data in every payload with no ' +
    'reader. RECORDED rather than removed because removing the key also deletes the ' +
    'server twin, which is the one DIFFERENTLY-NAMED pair payloadTwinParity pins as ' +
    'its own non-vacuity proof — so the removal has to move that proof first. Queued.',
};

describe('every core payload key is read by something the app can reach', () => {
  const keys = payloadKeys();

  it('the subject list is the real key array', () => {
    // A floor, so a slice that silently stops matching cannot make this vacuous.
    expect(keys.length).toBeGreaterThan(25);
    for (const known of ['V', 'LEARN_PATH', 'CULTURE_DEEP_DIVES'])
      expect(keys, `${known} must be in CORE_PAYLOAD_KEYS`).toContain(known);
  });

  it('non-vacuity: keys the app plainly reads are seen as read', () => {
    // If these read as unread the matcher is broken, and it would then fail in the
    // SILENT direction for every other key.
    expect(readersOf('V').length).toBeGreaterThan(3);
    expect(readersOf('LEARN_PATH').length).toBeGreaterThan(0);
    expect(readersOf('CULTURE_DEEP_DIVES').length).toBeGreaterThan(0);
    // And the corpus is real.
    expect(CLIENT_FILES.length).toBeGreaterThan(500);
  });

  it('a TYPE DECLARATION is not a reader — measured, not exempted', () => {
    // src/types/content.ts declares every key. The matcher must see none of them as
    // a read, or this guard is vacuous for the entire payload; the file is therefore
    // left IN the corpus rather than exempted. Driven over all 32 keys, and the
    // non-vacuity is that the declarations really are in there.
    const types = strip(fs.readFileSync(path.join(ROOT, TYPES), 'utf8'));
    for (const k of keys) {
      expect(types, `${TYPES} no longer declares ${k}`).toMatch(new RegExp(`\\b${k}\\s*[?:]`));
      expect(readsIt(types, k), `${TYPES} reads as a consumer of ${k}`).toBe(false);
    }
    expect(
      CLIENT_FILES.some(([f]) => f === TYPES),
      'the type file must be IN the corpus',
    ).toBe(true);
  });

  it('a reader that is itself unreachable does not count', () => {
    // Driven on a fabricated pair against the REAL reachable set: one file the app
    // genuinely reaches, one path that exists nowhere. Both "read" the key. This is
    // how LEVEL_NARRATIVE reached this list — HeroSection read it for five months
    // after HomeTab stopped rendering it.
    const live = 'src/components/learn/CountriesScreen.tsx';
    const dead = 'src/components/home/__not_a_real_module.tsx';
    const files: [string, string][] = [
      [live, 'const { COUNTRIES } = content;'],
      [dead, 'const { COUNTRIES } = content;'],
    ];
    expect(APP_REACHABLE.has(live), 'fixture moved: CountriesScreen is unreachable').toBe(true);
    expect(APP_REACHABLE.has(dead)).toBe(false);

    expect(readersOf('COUNTRIES', files)).toEqual([live]);
    // With the filter defeated the dead module counts — which is the bug.
    expect(readersOf('COUNTRIES', files, new Set([live, dead]))).toEqual([live, dead]);
  });

  it('every key has a reachable reader, or is recorded with its reason', () => {
    const unread = keys.filter((k) => !readersOf(k).length && !NO_CLIENT_READER[k]);
    expect(
      unread,
      'these keys are composed, serialized and shipped to every client in the core payload, ' +
        'and nothing the app can reach reads them. Wire a consumer, remove the key, or record ' +
        'it in NO_CLIENT_READER with the reason — deleting a dead client module is how both ' +
        'of the existing entries acquired this state, and nothing noticed either time.',
    ).toEqual([]);
  });

  it('every recorded key still exists and still has no reader', () => {
    expect(Object.keys(NO_CLIENT_READER).length).toBeGreaterThan(0);
    for (const [key, reason] of Object.entries(NO_CLIENT_READER)) {
      expect(reason.length, `${key} needs a stated reason`).toBeGreaterThan(80);
      expect(keys, `${key} is no longer a payload key — drop its entry`).toContain(key);
      expect(
        readersOf(key),
        `${key} has a reachable reader now — drop the entry and let the check judge it`,
      ).toEqual([]);
    }
  });
});
