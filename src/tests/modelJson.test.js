// modelJson.test.js — the ONE tolerant parser for model JSON (2026-09-07).
//
// The owner's report: feedback on writing or speech "hasn't worked yet".
// /api/correct — the writing evaluator — parsed the model's reply with a bare
// JSON.parse while three sibling endpoints stripped ```json fences with their
// own regex and the golden calibration stripped them with a fourth, under a
// comment claiming "same tolerance as the production parsers". A fenced or
// prose-wrapped evaluation was a 502 for the learner and a pass for the
// calibration. Every structured endpoint now parses through parseModelJson,
// and the calibration parses through the SAME function.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { parseModelJson, stripFence } from '../../functions/api/_modelJson.js';

const OBJ = { corrected_text: 'Imam mamu i tatu.', score: 82, changes: [] };
const JSON_TEXT = JSON.stringify(OBJ);

describe('parseModelJson', () => {
  it('parses clean JSON', () => {
    expect(parseModelJson(JSON_TEXT)).toEqual(OBJ);
  });

  it('parses a ```json fence, a bare ``` fence, and surrounding whitespace', () => {
    expect(parseModelJson('```json\n' + JSON_TEXT + '\n```')).toEqual(OBJ);
    expect(parseModelJson('```\n' + JSON_TEXT + '\n```')).toEqual(OBJ);
    expect(parseModelJson('\n\n  ```JSON  \n' + JSON_TEXT + '  ```  \n')).toEqual(OBJ);
  });

  it('parses JSON wrapped in prose — the "Here is the evaluation:" case', () => {
    expect(parseModelJson('Here is the evaluation:\n' + JSON_TEXT + '\n\nLet me know!')).toEqual(
      OBJ,
    );
  });

  it('keeps braces INSIDE strings intact (outermost span, not first-closer)', () => {
    const tricky = { corrected_text: 'Rekao je: "{to je} sve".', score: 70 };
    const text = 'Sure:\n```json\n' + JSON.stringify(tricky) + '\n```\nDone.';
    expect(parseModelJson(text)).toEqual(tricky);
  });

  it('parses a top-level array', () => {
    expect(parseModelJson('```json\n[{"a":1},{"a":2}]\n```')).toEqual([{ a: 1 }, { a: 2 }]);
  });

  it('returns null — never throws, never fabricates — when no JSON can be recovered', () => {
    expect(parseModelJson('')).toBeNull();
    expect(parseModelJson(null)).toBeNull();
    expect(parseModelJson('The essay is good.')).toBeNull();
    expect(parseModelJson('{"score": 8')).toBeNull(); // truncated
    expect(parseModelJson('42')).toBeNull(); // a primitive is not a payload
  });

  it('stripFence handles a language tag and no tag', () => {
    expect(stripFence('```json\n{}\n```')).toBe('{}');
    expect(stripFence('```\n{}\n```')).toBe('{}');
    expect(stripFence('{}')).toBe('{}');
  });
});

describe('EVERY Claude endpoint parses through the shared parser', () => {
  // SWEEP 120 — THE RULE WAS GENERAL AND THE GUARD WAS A LIST OF SEVEN.
  //
  // CLAUDE.md states it without qualification: "NEVER parse a model reply with a
  // private fence regex or a bare JSON.parse (use parseModelJson)". The block that
  // used to stand here named the seven FEEDBACK endpoints — the ones the 2026-09-07
  // census was about — and computed the full Claude-caller list only to check those
  // seven were still live. Measured on 2026-09-25: **17 of the other 24 callers
  // carried their own `.replace(/^```(?:json)?\s*/i, '')` pair and a bare
  // JSON.parse**, i.e. every AI surface except the feedback path — the micro-lesson,
  // AI Listening, Maja, the news simplifier, Story/Heritage/Postcard/Phrase-of-the-Day
  // through ai-chat, the daily culture card, the live-tutor summary, srs-sync.
  //
  // A fence strip is NOT the same tolerance. parseModelJson tries the exact text,
  // then the fence-stripped text, then the OUTERMOST `{…}`/`[…]` span — so it is the
  // only one of the two that recovers "Here is the lesson:\n{…}" or a trailing
  // remark, which is precisely the shape the 2026-09-07 report was about. Each of
  // those 17 answered a recoverable reply with a 502 instead.
  //
  // Two of them said so in their own comments: news.js called its fence strip "the
  // same guard every other AI endpoint applies", and ai-chat.js recorded that a
  // fenced object had once fallen through to `{ text }` and shown the learner their
  // UNCORRECTED postcard. True of the fence, false of the parser.
  //
  // So the demand is DERIVED over every Claude caller now, and the seven-name list
  // is gone. A list cannot know about an endpoint authored next month.
  const dir = 'functions/api';
  // Comments are stripped before every source check below. These files now EXPLAIN
  // themselves in prose that names the parser and the regex it replaced, and this
  // file's own history says what that costs: `speakingCoach.ts`'s header comment
  // satisfied a writer check, and a comment mentioning `content.SCENES` failed a
  // source pin in the other direction (sweeps 107, 114).
  const decomment = (src) => src.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

  const claudeCallers = readdirSync(dir).filter(
    (f) =>
      f.endsWith('.js') &&
      !f.startsWith('_') &&
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
      readFileSync(`${dir}/${f}`, 'utf8').includes('api.anthropic.com/v1/messages'),
  );

  /**
   * A Claude caller that recovers no JSON from the model at all. `dialogue.js`'s
   * reply is the NPC's spoken Croatian line — free text — and its own prompt
   * (`dialogue-npc`) declares no JSON example; its two JSON.parse calls are the
   * ANTHROPIC ENVELOPE (`rawBody`), which every caller parses and which is not a
   * model reply. Checked in both staleness directions below.
   */
  const NO_MODEL_JSON = {
    'dialogue.js':
      "the model's reply is the NPC's free-text Croatian line, not JSON — its prompt declares no JSON example, and its JSON.parse calls are the Anthropic envelope",
  };

  it('the caller census is real and covers the feedback endpoints it started from', () => {
    expect(claudeCallers.length).toBeGreaterThanOrEqual(20);
    for (const f of [
      'correct.js',
      'assess-speaking.js',
      'speaking-coach.js',
      'explain-error.js',
      'pronunciation-coach.js',
      'grammar-diagnosis.js',
      'golden-calibration.js',
    ])
      expect(claudeCallers).toContain(f);
  });

  it('no Claude caller keeps a private fence-stripping regex', () => {
    const offenders = claudeCallers.filter((f) => {
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
      const src = readFileSync(`${dir}/${f}`, 'utf8');
      return /replace\(\s*\/\^(?:\\s\*)?```/.test(decomment(src));
    });
    expect(
      offenders,
      'A private fence strip is not the shared parser: it cannot recover a reply ' +
        'with prose around the JSON, so the endpoint answers 502 for a reply that ' +
        'parseModelJson reads. Use parseModelJson(raw).\n' +
        offenders.map((o) => `  - ${o}`).join('\n'),
    ).toEqual([]);
  });

  it('every Claude caller that reads model JSON goes through parseModelJson', () => {
    const missing = claudeCallers.filter((f) => {
      if (f in NO_MODEL_JSON) return false;
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
      const src = readFileSync(`${dir}/${f}`, 'utf8');
      const code = decomment(src);
      return !(code.includes("from './_modelJson.js'") && /parseModelJson\(/.test(code));
    });
    expect(
      missing,
      'The parser is the contract with the model. An endpoint outside it is one ' +
        'reworded reply away from a 502 nothing records.\n' +
        missing.map((m) => `  - ${m}`).join('\n'),
    ).toEqual([]);
  });

  it('every NO_MODEL_JSON entry is still a Claude caller and still parses no model JSON', () => {
    for (const [f, reason] of Object.entries(NO_MODEL_JSON)) {
      expect(reason.length, `${f} needs a measured reason`).toBeGreaterThan(60);
      expect(claudeCallers, `${f} no longer calls Claude — drop the entry`).toContain(f);
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
      const src = readFileSync(`${dir}/${f}`, 'utf8');
      expect(
        /parseModelJson\(/.test(decomment(src)),
        `${f} now uses the shared parser — drop the entry`,
      ).toBe(false);
      // The positive half of the reason: its prompt declares no JSON example.
      expect(src).not.toMatch(/"[A-Za-z_$][\w$]*"\s*:/);
    }
    expect(Object.keys(NO_MODEL_JSON)).toHaveLength(1);
  });

  it('the writing evaluator never returns a result without a numeric score and corrected text', () => {
    const src = readFileSync(`${dir}/correct.js`, 'utf8');
    expect(src).toMatch(
      /typeof result\.score !== 'number' \|\| typeof result\.corrected_text !== 'string'/,
    );
  });
});
