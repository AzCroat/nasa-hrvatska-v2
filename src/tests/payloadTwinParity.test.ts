/**
 * SWEEP 108 — the served half of a twinned data module must agree.
 *
 * Sweep 107 closed ONE two-copies-must-agree pair by collapsing it and ended by
 * naming the rest as uncensused. This is that census, turned into a mechanism.
 *
 * `functions/api/content/_data/core.js` composes `/api/content/core` out of
 * thirteen data modules, **eleven of which have a byte-level twin under `src/`**
 * that the app imports statically. Four of those eleven were byte-identical with
 * NOTHING enforcing it (`cultural/events`, `cultural/proverbs`, `scenarios`, and
 * `cultural/geography` — which a test reads without ever comparing), and one
 * pair's two halves are not even named alike (`vocabScenes` ↔ `VocabSceneData`),
 * so a basename census misses it. This repo has already watched this exact class
 * drift three times: `CORE_PAYLOAD_KEYS` (three copies, one stale for the key
 * `CULTURE_DEEP_DIVES`), `dictation`'s pool category (two copies, one stale five
 * weeks), and — measured below — `exercises.js`.
 *
 * **BYTE-IDENTITY IS THE WRONG CONTRACT, and that is the point of this file.**
 * Three of the eleven twins legitimately differ:
 *
 * - `vocabulary.js` — the server copy carries `V_B2`/`V_C1`/`V_C2`, which the
 *   client deliberately does NOT have: the tiers reach the client through the
 *   payload, never through the bundle. A byte-identity rule would forbid the
 *   design.
 * - `exercises.js` — `core.js` imports exactly **2 of its 46 exports**, so the
 *   server copy is a 44-export dead fork, and **ten of those dead exports are
 *   already stale**: `LISTEN` is 45 items in the client and 21 in the server,
 *   `UNJUMBLE` 40 v 15, `PREPDRILL` 40 v 15, `COMPQUIZ`/`ORDQUIZ` 30 v 15,
 *   `PREPS` 25 v 15, `COMPARE` 24 v 15, `ORDINALS` 20 v 15, plus `RELPRON` and
 *   `VOCATIVE`. The client copy is the live one for all ten (none is in the
 *   payload at all), so **there is no live defect** — a 2026-07 authoring pass
 *   edited one copy and nothing noticed, because nothing needed to.
 * - `scenarios.js` — 8 of 19 exports served.
 *
 * So the contract is **the SERVED names only**, derived from `core.js`'s own
 * import statements rather than listed here. That admits every legitimate
 * divergence above while catching the one that actually reaches a learner:
 * extending `IDIOMS` or `BRZALICE` in the client copy alone would serve the old
 * data from the payload in silence — which is precisely what already happened to
 * the other ten exports of that very file.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';

const CORE = 'functions/api/content/_data/core.js';

/**
 * A twin whose two halves are not named alike. `vocabScenes.js` ↔
 * `VocabSceneData.js` — the reason a basename census cannot find this class, and
 * the pair sweep 107 was about. Kept in the derivation although
 * `content.SCENES` now has no PRODUCTION reader (sweep 107 pointed the only one
 * at the static copy): the key is still served, so a future reader inherits the
 * guarantee instead of having to notice it is missing.
 */
const ALIAS: Record<string, string> = {
  vocabScenes: 'src/components/learn/VocabSceneData.js',
};

/**
 * Names `core.js` serves that the client copy deliberately does not carry. A
 * value present on one side only is otherwise a divergence, and these three are
 * the documented design: the B2/C1/C2 tiers reach the client through the payload
 * so the bundle never pays for them.
 */
const SERVER_ONLY: Record<string, string> = {
  V_B2: 'tier vocabulary — payload only, deliberately not in the bundle',
  V_C1: 'tier vocabulary — payload only, deliberately not in the bundle',
  V_C2: 'tier vocabulary — payload only, deliberately not in the bundle',
};

type Twin = { mod: string; client: string; server: string; names: string[] };

function twins(): Twin[] {
  const core = readFileSync(CORE, 'utf8');
  const out: Twin[] = [];
  for (const m of core.matchAll(/import\s*\{([^}]+)\}\s*from\s*'\.\/([A-Za-z0-9_/]+)\.js'/g)) {
    const mod = m[2]!;
    const names = m[1]!
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const base = mod.split('/').pop()!;
    const candidate = [ALIAS[mod], `src/data/${mod}.js`, `src/data/cultural/${base}.js`].find(
      (c) => c && existsSync(c),
    );
    if (!candidate) continue; // genuinely server-only module (learnPath, seasonalCampaigns)
    out.push({
      mod,
      client: candidate,
      server: `functions/api/content/_data/${mod}.js`,
      names,
    });
  }
  return out;
}

describe('a twinned data module agrees on every export the payload actually serves', () => {
  const found = twins();

  it('the derivation has subjects, and finds the differently-named pair', () => {
    // Eleven of thirteen imported modules have a client twin. A floor, because a
    // matcher that stopped matching `core.js`'s import syntax would otherwise
    // pass by finding nothing at all.
    expect(found.length).toBeGreaterThanOrEqual(11);
    // 34 served names across the eleven twins, counted rather than estimated —
    // my first figure said 35 because it included the two untwinned modules.
    expect(found.reduce((n, t) => n + t.names.length, 0)).toBeGreaterThanOrEqual(34);
    const scenes = found.find((t) => t.mod === 'vocabScenes');
    expect(scenes, 'the alias pair left the derivation').toBeTruthy();
    expect(scenes!.client).toBe('src/components/learn/VocabSceneData.js');
  });

  it('every twin resolves to two files that exist', () => {
    for (const t of found) {
      expect(existsSync(t.client), `${t.mod}: missing client copy ${t.client}`).toBe(true);
      expect(existsSync(t.server), `${t.mod}: missing server copy ${t.server}`).toBe(true);
    }
  });

  it('every SERVED export is deep-equal across the two copies', async () => {
    const bad: string[] = [];
    for (const t of found) {
      const c = (await import(`../../${t.client}`)) as Record<string, unknown>;
      const s = (await import(`../../${t.server}`)) as Record<string, unknown>;
      for (const n of t.names) {
        if (SERVER_ONLY[n]) continue;
        if (JSON.stringify(c[n]) !== JSON.stringify(s[n])) {
          bad.push(`${t.mod}.${n}`);
        }
      }
    }
    expect(
      bad,
      'these exports are SERVED by /api/content/core and differ from the copy the ' +
        'app imports — the payload and the bundle would show a learner different ' +
        'data, and nothing else in the tree would say so',
    ).toEqual([]);
  });

  it('SERVER_ONLY names are genuinely served and genuinely absent from the client', async () => {
    // Both staleness directions. An entry that is no longer served, or that the
    // client has grown, is an exemption suspending a real check.
    for (const [name, reason] of Object.entries(SERVER_ONLY)) {
      expect(reason.length, `${name} needs a reason`).toBeGreaterThan(10);
      const t = found.find((x) => x.names.includes(name));
      expect(t, `${name} is exempted but no longer served — delete the entry`).toBeTruthy();
      const c = (await import(`../../${t!.client}`)) as Record<string, unknown>;
      expect(
        c[name],
        `${name} now exists in the client copy — it must be compared, not exempted`,
      ).toBe(undefined);
      const s = (await import(`../../${t!.server}`)) as Record<string, unknown>;
      expect(s[name], `${name} is exempted but the server does not have it either`).toBeTruthy();
    }
  });

  it('the two genuinely server-only modules are NOT silently dropped as twins', () => {
    // `learnPath` and `seasonalCampaigns` have no client copy, so `continue`
    // skips them — which is correct and is also how a RENAMED twin would vanish
    // from this guard without a word. Pinned by name so a client copy appearing
    // for either, or a third module losing its twin, fails here.
    const core = readFileSync(CORE, 'utf8');
    const imported = [
      ...core.matchAll(/import\s*\{[^}]+\}\s*from\s*'\.\/([A-Za-z0-9_/]+)\.js'/g),
    ].map((m) => m[1]!);
    const untwinned = imported.filter((m) => !found.some((t) => t.mod === m));
    expect(untwinned.sort()).toEqual(['learnPath', 'seasonalCampaigns']);
  });
});
