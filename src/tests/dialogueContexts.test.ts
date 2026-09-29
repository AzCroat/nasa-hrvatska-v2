// src/tests/dialogueContexts.test.ts
//
// The parity test in dialogueScenarios.test.ts proves every guided scenario HAS
// an AI-mode context in functions/api/dialogue.js. Nothing checked the context
// was any good, and the 2026-09-29 review of all 144 found three classes that a
// learner would meet in the "✨ AI Conversation" mode:
//
//   1. 18 contexts named no register at all, so the NPC chose "ti" or "Vi" by
//      guesswork — on scenarios whose whole lesson is the register.
//   2. 81 contexts carried their own CEFR level ("Very simple A1 sentences"),
//      which contradicted the endpoint's level line whenever the learner's
//      level and the scenario's differed — an A1 learner who opened a C1
//      "stretch" scenario was told both "max 10 words" and "C1 nuanced register".
//   3. The prompt versioned its template but not the tables it draws from, so
//      an edit to any context left `dialogue-npc@<version>` standing still.
//
// These pin the fixes. The handler tests drive the REAL endpoint and read the
// system prompt it actually sends.
import { describe, it, expect, vi, afterEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

vi.mock('../../functions/api/_requireAuth.js', () => ({
  requireAuthedAI: vi.fn(async () => ({ ok: true, uid: 'u1', origin: '', isDev: false })),
}));

import { SCENARIOS } from '../components/practice/dialogueScenarios.js';
import { SCENARIO_CONTEXTS, onRequestPost as dialogue } from '../../functions/api/dialogue.js';
import { getPrompt, promptHash } from '../../functions/api/_promptRegistry.js';

type Ctx = { character: string; setting: string; role: string };
type Scenario = { id: string; turns: { opts: string[]; answer: number }[] };
const SCENARIO_LIST = SCENARIOS as unknown as Scenario[];
const CONTEXTS = SCENARIO_CONTEXTS as Record<string, Ctx>;

const L = '(?<![\\p{L}])';
const R = '(?![\\p{L}])';
const TI_MARK = new RegExp(
  `${L}(ti|tebi|te|tvoj\\p{L}*|možeš|imaš|hoćeš|jesi|znaš|dođi|javi|reci|daj|slušaj|oprosti)${R}`,
  'iu',
);
const VI_MARK = new RegExp(
  `${L}(vi|vas|vam|vaš\\p{L}*|možete|imate|hoćete|jeste|znate|izvolite|oprostite|gospodine|gospođo)${R}`,
  'iu',
);

function contextRegister(c: Ctx): 'ti' | 'Vi' | 'both' | 'none' {
  const all = `${c.character} ${c.setting} ${c.role}`;
  const vi = /V-form|"Vi"/.test(all);
  const ti = /"ti"|\bti\b/.test(all);
  if (vi && ti) return 'both';
  if (vi) return 'Vi';
  if (ti) return 'ti';
  return 'none';
}

function guidedRegister(s: Scenario): 'ti' | 'Vi' | '?' {
  const correct = s.turns.map((t) => t.opts[t.answer]);
  const nTi = correct.filter((c) => TI_MARK.test(c)).length;
  const nVi = correct.filter((c) => VI_MARK.test(c)).length;
  if (nTi > nVi) return 'ti';
  if (nVi > nTi) return 'Vi';
  return '?';
}

describe('SCENARIO_CONTEXTS — the AI mode plays the scene the guided mode teaches', () => {
  it('covers every scenario (non-vacuity for the checks below)', () => {
    expect(SCENARIOS.length).toBeGreaterThanOrEqual(144);
    for (const s of SCENARIO_LIST) expect(CONTEXTS[s.id], s.id).toBeTruthy();
  });

  it('every context names the register the NPC holds', () => {
    const missing = SCENARIO_LIST.filter((s) => contextRegister(CONTEXTS[s.id]) === 'none').map(
      (s) => s.id,
    );
    expect(missing, `contexts with no "ti"/"Vi" instruction: ${missing.join(', ')}`).toEqual([]);
  });

  it("the context's register agrees with the learner's model answers", () => {
    // A context that names BOTH is a scene that switches (the phone call where
    // the mother says Vi and the friend ti; the colleague proposing "ti").
    const wrong: string[] = [];
    for (const s of SCENARIO_LIST) {
      const ctx = contextRegister(CONTEXTS[s.id]);
      const guided = guidedRegister(s);
      if (ctx === 'both' || guided === '?') continue;
      if (ctx !== guided) wrong.push(`${s.id} (guided ${guided}, context ${ctx})`);
    }
    expect(wrong).toEqual([]);
  });

  it('no context carries its own CEFR level — the endpoint decides it', () => {
    const levelled = Object.entries(CONTEXTS)
      .filter(([, c]) => /\b[ABC][12]\b/.test(`${c.character} ${c.setting} ${c.role}`))
      .map(([id]) => id);
    expect(levelled).toEqual([]);
  });

  it('never tells the NPC the learner is a particular gender', () => {
    // The NPC cannot see the learner; "her father" made every Vi-form past
    // tense feminine for a learner who may be a man.
    // ("inviting her" in pozivnica_susjedi names the NPC, so the shape checked
    // is a possessive of the learner's own relative.)
    const aboutLearner = Object.entries(CONTEXTS)
      .filter(([, c]) =>
        /\bthe learner\b[^.;]*\b(her|his) (father|mother|own)\b/i.test(`${c.setting} ${c.role}`),
      )
      .map(([id]) => id);
    expect(aboutLearner).toEqual([]);
  });
});

describe('dialogue-npc versioning', () => {
  it('the version depends on more than the template (alsoVersion is carried)', () => {
    const p = getPrompt('dialogue-npc');
    expect(p).toBeTruthy();
    expect(p.version).not.toBe(promptHash(p.text));
  });

  it('what it carries is the contexts, the level guidance and the script rule', () => {
    const src = readFileSync(resolve(__dirname, '../../functions/api/dialogue.js'), 'utf8');
    const def = src.slice(src.indexOf("definePrompt(\n  'dialogue-npc'"));
    const block = def.slice(0, def.indexOf('\n);'));
    expect(block).toMatch(/contexts: JSON\.stringify\(SCENARIO_CONTEXTS\)/);
    expect(block).toMatch(/levels: JSON\.stringify\(LEVEL_GUIDANCE\)/);
    expect(block).toMatch(/scriptRule: CROATIAN_SCRIPT_RULE/);
  });
});

describe('/api/dialogue speaks at the lower of the learner and scenario level', () => {
  let captured: string[] = [];
  const realFetch = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = realFetch;
    captured = [];
  });

  async function systemFor(body: Record<string, unknown>): Promise<string> {
    globalThis.fetch = vi.fn(async (_url: unknown, init: RequestInit) => {
      captured.push(JSON.parse(String(init.body)).system);
      return new Response(
        JSON.stringify({ content: [{ type: 'text', text: 'Dobar dan!\nCOACHING: null' }] }),
        { status: 200, headers: { 'content-type': 'application/json' } },
      );
    }) as unknown as typeof fetch;
    const res = await dialogue({
      request: new Request('https://x/api/dialogue', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ scenario_id: 'cafe', userMessage: 'Dobar dan.', ...body }),
      }),
      env: { ANTHROPIC_API_KEY: 'k' },
    } as unknown as Parameters<typeof dialogue>[0]);
    expect(res.status).toBe(200);
    expect(captured).toHaveLength(1);
    return captured[0];
  }

  it('an A1 learner in a C1 scenario is spoken to at A1', async () => {
    const s = await systemFor({ level: 'A1', scenarioLevel: 'C1' });
    expect(s).toContain('studying Croatian at CEFR level A1');
    expect(s).toContain('Speak to them at CEFR level A1');
    expect(s).toContain('Max 10 words per sentence');
  });

  it('a C1 learner in an A1 scenario hears the scene at A1', async () => {
    const s = await systemFor({ level: 'C1', scenarioLevel: 'A1' });
    expect(s).toContain('studying Croatian at CEFR level C1');
    expect(s).toContain('Speak to them at CEFR level A1');
  });

  it('an older client with no scenarioLevel keeps the learner level', async () => {
    const s = await systemFor({ level: 'B2' });
    expect(s).toContain('Speak to them at CEFR level B2');
  });

  it('an invalid scenarioLevel is ignored', async () => {
    const s = await systemFor({ level: 'B1', scenarioLevel: 'Z9' });
    expect(s).toContain('Speak to them at CEFR level B1');
  });

  it('renders every placeholder and appends the script rule', async () => {
    const s = await systemFor({ level: 'A2', scenarioLevel: 'A1' });
    expect(s).not.toContain('{{');
    expect(s).toContain('Konobar (waiter)');
    expect(s).toMatch(/Oprosti, nisam te razumio/);
  });
});
