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

describe('every FEEDBACK endpoint parses through the shared parser', () => {
  // The endpoints whose reply IS the learner's feedback on writing or speech,
  // plus the calibration that claims to measure them. Each must go through
  // parseModelJson, not a private regex — a private fence-stripper is how
  // /api/correct ended up with none at all. Every listed file must still be
  // a Claude caller, or the list has gone stale.
  const dir = 'functions/api';
  const claudeCallers = readdirSync(dir).filter(
    (f) =>
      f.endsWith('.js') &&
      !f.startsWith('_') &&
      // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
      readFileSync(`${dir}/${f}`, 'utf8').includes('api.anthropic.com/v1/messages'),
  );

  it('the list is live (every entry still calls Claude)', () => {
    for (const f of [
      'correct.js',
      'assess-speaking.js',
      'speaking-coach.js',
      'explain-error.js',
      'pronunciation-coach.js',
      'grammar-diagnosis.js',
      'golden-calibration.js',
    ]) {
      expect(claudeCallers).toContain(f);
    }
  });

  it.each([
    'correct.js',
    'assess-speaking.js',
    'speaking-coach.js',
    'explain-error.js',
    'pronunciation-coach.js',
    'grammar-diagnosis.js',
    'golden-calibration.js',
  ])('%s imports parseModelJson and keeps no private fence regex', (f) => {
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- test reads repo sources under functions/
    const src = readFileSync(`${dir}/${f}`, 'utf8');
    expect(src).toContain("from './_modelJson.js'");
    expect(src).toMatch(/parseModelJson\(/);
    expect(src).not.toMatch(/replace\(\/\^\\s\*```/);
    expect(src).not.toMatch(/replace\(\/\^```/);
  });

  it('the writing evaluator never returns a result without a numeric score and corrected text', () => {
    const src = readFileSync(`${dir}/correct.js`, 'utf8');
    expect(src).toMatch(
      /typeof result\.score !== 'number' \|\| typeof result\.corrected_text !== 'string'/,
    );
  });
});
