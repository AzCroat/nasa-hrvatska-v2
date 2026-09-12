/**
 * azureTtsKeyChecked.test.js — the deploy-time checker must actually look at
 * AZURE_TTS_KEY, and must look for the name TTS actually reads.
 *
 * WHY THIS EXISTS. On 2026-09-12 the deploy log said "AZURE_TTS_KEY is not a
 * GitHub secret", and that is a DIFFERENT FACT from "not set on the Pages
 * project" — the Cloudflare dashboard can hold it directly, and CLAUDE.md's env
 * table says that is where the TTS_* names live. Meanwhile
 * `setup-cf-resources.mjs`, which DOES read the project's real env vars over
 * the Cloudflare API, said nothing about Azure — because the variable was not
 * in its list at all. So one source implied absent, another implied present,
 * and neither was evidence. That is verbatim the failure mode the comment above
 * `REQUIRED_ENV_VARS` was written about after FIREBASE_SERVICE_ACCOUNT_JSON sat
 * unset for years: "a variable not mentioned here at all".
 *
 * THE NAME IS THE SUBTLE PART. `tts.js` reads `env.AZURE_TTS_KEY` and nothing
 * else. `pronunciation-assess.js` accepts `AZURE_SPEECH_KEY || AZURE_TTS_KEY`.
 * A dashboard holding only AZURE_SPEECH_KEY therefore yields working
 * pronunciation scoring and a TTS chain with no Azure at all — indistinguishable
 * from "Azure is configured" unless you check the exact name. So this pins the
 * check to that name AND pins that tts.js still reads it, because a checker
 * whose subject has been renamed guards nothing while still looking diligent.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

const SETUP = readFileSync('scripts/setup-cf-resources.mjs', 'utf8');
const TTS = readFileSync('functions/api/tts.js', 'utf8');

/** The real list, sliced out of the script rather than restated here. */
const REQUIRED_BLOCK = SETUP.slice(
  SETUP.indexOf('const REQUIRED_ENV_VARS = ['),
  SETUP.indexOf('];', SETUP.indexOf('const REQUIRED_ENV_VARS = [')),
);

describe('the Pages env checker covers the Azure TTS key', () => {
  it('lists AZURE_TTS_KEY among the required vars', () => {
    expect(
      REQUIRED_BLOCK,
      'setup-cf-resources.mjs does not check AZURE_TTS_KEY, so its silence about ' +
        'Azure says nothing — the exact ambiguity this test was written for',
    ).toMatch(/'AZURE_TTS_KEY'/);
  });

  it('does NOT accept AZURE_SPEECH_KEY as a substitute for it', () => {
    // Widening the entry would make the check pass on a dashboard that gives
    // pronunciation scoring and no TTS voice — a false all-clear on the one
    // surface the key exists for.
    const azureEntry = REQUIRED_BLOCK.split('\n').find((l) => l.includes('AZURE_TTS_KEY')) || '';
    expect(
      azureEntry,
      'the Azure entry accepts AZURE_SPEECH_KEY, which /api/tts does not read',
    ).not.toMatch(/AZURE_SPEECH_KEY/);
  });

  it('the subject still exists: tts.js reads exactly that name', () => {
    // The staleness half. If tts.js is ever renamed onto another variable this
    // checker keeps passing while guarding a name nothing consumes.
    expect(TTS).toMatch(/env\.AZURE_TTS_KEY/);
    // And the asymmetry that motivates the exact-name rule is still real.
    const pron = readFileSync('functions/api/pronunciation-assess.js', 'utf8');
    expect(pron).toMatch(/env\.AZURE_SPEECH_KEY \|\| env\.AZURE_TTS_KEY/);
  });

  it('the warning names the TTS-only constraint, not just the variable', () => {
    // A remediation line that says "set AZURE_TTS_KEY" without saying why the
    // Speech name will not do sends the reader to the dashboard to make
    // precisely the substitution that fails silently.
    expect(SETUP).toMatch(/AZURE_SPEECH_KEY satisfies .* but NOT text-to-speech/);
  });
});
