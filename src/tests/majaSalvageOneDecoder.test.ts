/**
 * The parse-failure salvage path in MajaScreen must use ONE decoder.
 *
 * WHY THIS FILE EXISTS, AND WHY IT IS A SOURCE PIN. `MajaScreen`'s bubble sets its
 * `content` from `replyText`, while the TTS flush thirty lines below already called
 * `extractStreamingReply`. So while the JSON-parse `catch` decoded the escapes
 * itself there were TWO live decoders on one reply, feeding two different senses:
 * on a truncated reply containing a backslash the learner READ one string and Maja
 * SPOKE another. Measured before the fix, from a file rather than a shell (nested
 * quoting silently mangles backslash fixtures): `C:\Users\nada` came out
 * `C:\Users\ ada` — the n of "nada" eaten and replaced with a space — `\n`
 * (backslash then the letter n) lost its n outright, and `\t` leaked raw. The
 * chain unescaped backslashes LAST, so ordering bit. CodeQL reports it as
 * js/incomplete-sanitization (alert on PR #753, head 602088f2); the real defect is
 * that a duplicate decoder existed at all.
 *
 * A BEHAVIOURAL TEST CANNOT SAY THIS. `extractStreamingReply` had seven passing
 * tests throughout, and the salvage chain had none — a unit test on the util cannot
 * see a private copy inside the screen, which is exactly how this survived from
 * 2026-07-22 (`e3f530f7`). Only reading the screen's source can assert the absence
 * of a second decoder. The behaviour of the surviving decoder is pinned next to it,
 * in MajaScreenUtils.test.ts.
 *
 * It lives in src/tests rather than beside the screen because `node:fs` is outside
 * the src/components tsconfig scope — `tsc` says "Cannot find name 'node:fs'" there.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

describe('the parse-failure salvage path uses ONE decoder', () => {
  // WHY A SOURCE PIN. The bubble's `content` is set from `replyText`, while the TTS
  // flush thirty lines below already called `extractStreamingReply` — so when the
  // catch block decoded escapes itself there were two live decoders on one reply,
  // feeding two different senses, and the learner READ one string while Maja SPOKE
  // another. Only a source pin can say "there is no second decoder": a behavioural
  // test on the util cannot see a private copy inside the screen, which is exactly
  // how this survived — extractStreamingReply had seven passing tests throughout
  // and the salvage chain had none.
  //
  // COMMENTS ARE STRIPPED, and here that is load-bearing rather than defensive:
  // the fix's own comment QUOTES the chain it replaced, so an unstripped matcher
  // fails on the explanation instead of the code — the way fixtureInitScriptFrames
  // failed on the prose above its bail. Line comments first, then blocks (sweep
  // 72's order; reversing it re-opens the runaway-block hole).
  // Plain repo-root-relative path — the convention every other source pin here uses
  // (`readFileSync('src/index.css', ...)`); import.meta.url is not a file: URL under vitest.
  const src = readFileSync('src/components/croatia/MajaScreen.tsx', 'utf8');
  const code = src.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');

  it('strips comments before matching, or this suite proves nothing', () => {
    expect(src).toMatch(/incomplete-sanitization/);
    expect(code).not.toMatch(/incomplete-sanitization/);
  });

  it('decodes nothing itself — no private escape-unescaping chain', () => {
    const privateUnescape = code.match(/\.replace\(\s*\/\\\\/g) ?? [];
    expect(privateUnescape).toEqual([]);
  });

  it('calls the shared decoder on the parse-failure path', () => {
    expect(code).toMatch(/const salvaged = extractStreamingReply\(streamedText\)/);
  });

  it('still strips the ```json fence before parsing — that is not a decode', () => {
    expect(code).toMatch(/replace\(\/\^```/);
  });
});
