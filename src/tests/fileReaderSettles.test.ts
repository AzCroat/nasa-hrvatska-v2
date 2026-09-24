/**
 * fileReaderSettles.test.ts — the promise that never settles (2026-09-24).
 *
 * Owner report on Baka Mara: "wasn't always reading properly." One of the two
 * causes was a turn-end misjudgement (see `majaTurnEnd.test.ts`). The other was
 * this, and it is worse, because nothing about it looks like a failure:
 *
 *   const url = await new Promise<string>((resolve) => {
 *     const r = new FileReader();
 *     r.onload = () => resolve(r.result as string);
 *     r.readAsDataURL(blob);          // ← no onerror, no onabort
 *   });
 *
 * A FileReader that errors never settles that promise. The `await` hangs for
 * ever: the audio never plays, the screen never leaves the state it was in, and
 * there is no exception, no timeout, no boundary and no console line. Baka Mara
 * simply stops talking and the mic never comes back.
 *
 * TEN SCREENS CARRIED THIS BLOCK, byte-identical, and exactly ONE of them
 * (Maja's streaming TTS queue) had the `onerror`. That is what a copy-pasted
 * primitive does, and it is why the fix is `blobToDataUrl` in `lib/audio.ts`
 * rather than nine more `onerror` lines: the next screen to need a data URL
 * gets the settled-promise guarantee by construction.
 *
 * THE RULE IS ABOUT PROMISES, NOT ABOUT FileReader. A reader whose `onload`
 * only sets state (`PhotoVocabScanner`, `useRecorder`, `SpeakingScreen`) cannot
 * hang anything — it just does nothing on error, which is a different and much
 * milder defect. Flagging those would make this guard noise, and a noisy guard
 * gets ignored. So it fires only where a `readAs*` sits inside a `new Promise`
 * whose settle path is an event handler.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync } from 'node:fs';
import { blobToDataUrl } from '../lib/audio';

const strip = (s: string) =>
  s.replace(/(^|[^:])\/\/[^\n]*/g, '$1').replace(/\/\*[\s\S]*?\*\//g, '');

const FILES = globSync('src/**/*.{ts,tsx,js,jsx}').filter((f) => !/[\\/]tests[\\/]/.test(f));

/** `readAs*` calls that sit inside a `new Promise`, with where they settle. */
function readersInsidePromises() {
  const out: Array<{ file: string; line: number; hasErrorPath: boolean }> = [];
  for (const file of FILES) {
    const s = strip(readFileSync(file, 'utf8'));
    for (const m of s.matchAll(/\breadAs(?:DataURL|ArrayBuffer|Text)\s*\(/g)) {
      const i = m.index!;
      const open = s.lastIndexOf('new Promise', i);
      if (open < 0) continue;
      const reader = s.lastIndexOf('new FileReader', i);
      // The reader must be created INSIDE this promise for the promise's
      // settlement to depend on it.
      if (reader < open) continue;
      const win = s.slice(open, i + 200);
      out.push({
        file,
        line: s.slice(0, i).split('\n').length,
        hasErrorPath: /\.onerror\s*=/.test(win) || /\.onabort\s*=/.test(win),
      });
    }
  }
  return out;
}

const READERS = readersInsidePromises();

describe('the scan is real', () => {
  it('finds the FileReader-inside-a-promise shape at all', () => {
    // If this went to zero the assertion below would be vacuous — and it WOULD
    // go to zero if every call site moved to the helper, which is the intended
    // end state. At that point delete this clause, do not weaken the next one.
    expect(READERS.length + 1).toBeGreaterThan(1);
  });
});

describe('no promise can be left unsettled by a failed read', () => {
  it('every FileReader a promise waits on has an error path', () => {
    const bad = READERS.filter((r) => !r.hasErrorPath).map((r) => `${r.file}:${r.line}`);
    expect(
      bad,
      'a FileReader error here never settles the enclosing promise, so the await ' +
        'hangs for ever with no error anywhere — use blobToDataUrl() from ' +
        'lib/audio.ts, or give this reader onerror AND onabort',
    ).toEqual([]);
  });
});

describe('blobToDataUrl always settles', () => {
  it('resolves the data URL on a successful read', async () => {
    const url = await blobToDataUrl(new Blob(['hello'], { type: 'text/plain' }));
    expect(url).toMatch(/^data:text\/plain/);
  });

  it('resolves null — never hangs — when the reader errors', async () => {
    const real = globalThis.FileReader;
    class Failing {
      onerror: (() => void) | null = null;
      onabort: (() => void) | null = null;
      onload: (() => void) | null = null;
      result: string | null = null;
      readAsDataURL() {
        setTimeout(() => this.onerror?.(), 0);
      }
    }
    (globalThis as { FileReader: unknown }).FileReader = Failing;
    try {
      // The point of the test is that this RETURNS. Before the helper, the
      // equivalent code never resolved and the caller waited for ever.
      await expect(blobToDataUrl(new Blob(['x']))).resolves.toBeNull();
    } finally {
      (globalThis as { FileReader: unknown }).FileReader = real;
    }
  });

  it('resolves null when the constructor itself throws', async () => {
    const real = globalThis.FileReader;
    (globalThis as { FileReader: unknown }).FileReader = function () {
      throw new Error('no FileReader here');
    };
    try {
      await expect(blobToDataUrl(new Blob(['x']))).resolves.toBeNull();
    } finally {
      (globalThis as { FileReader: unknown }).FileReader = real;
    }
  });
});
