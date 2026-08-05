/**
 * streamCancelRejection.test.ts — an aborted stream's cancel() is a PROMISE.
 *
 * THE BUG
 * -------
 * Three streaming screens released the body reader like this:
 *
 *     } finally {
 *       try { reader.cancel(); } catch { /* ignore *\/ }
 *     }
 *
 * `cancel()` returns a promise, so a *synchronous* try/catch can never catch its
 * rejection. Cancelling the reader of a stream that has already been errored —
 * which is what aborting a fetch does to its body — returns a promise rejected
 * with that stored error (Streams spec, ReadableStreamReaderGenericCancel). So a
 * single abort produced two rejections: `reader.read()`, which the surrounding
 * catch handled and deliberately suppressed as a benign abort, and `cancel()`,
 * which slipped past that catch entirely and surfaced as an UNHANDLED promise
 * rejection.
 *
 * In production that meant: a learner leaves Razgovor while Maja is still
 * replying, the teardown effect calls `streamAbortRef.current.abort()`, and
 * Sentry pages with `AbortError: Fetch is aborted` — the exact event the
 * isAbortFailure guard beside it existed to keep out.
 *
 * The first block proves the platform behaviour the fix rests on, so the reason
 * for the `.catch()` cannot be mistaken for superstition. The second pins the
 * three call sites, because this regresses by deleting five characters.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';

/** A stream whose body errors when the controller aborts, like a fetch body. */
function abortableStream(): { reader: ReadableStreamDefaultReader<Uint8Array>; abort: () => void } {
  let ctrl: ReadableStreamDefaultController<Uint8Array>;
  const stream = new ReadableStream<Uint8Array>({
    start(c) {
      ctrl = c;
    },
  });
  return {
    reader: stream.getReader(),
    abort: () => ctrl.error(new DOMException('Fetch is aborted', 'AbortError')),
  };
}

describe('why the sync try/catch could not work', () => {
  it('cancel() on an aborted stream REJECTS with the stored AbortError', async () => {
    const { reader, abort } = abortableStream();
    const read = reader.read().then(
      () => 'resolved',
      (e: Error) => e.name,
    );
    abort();
    expect(await read).toBe('AbortError');

    // This is the rejection that escaped: same error, second promise.
    await expect(reader.cancel()).rejects.toMatchObject({ name: 'AbortError' });
  });

  it('a synchronous try/catch around it catches NOTHING', async () => {
    const { reader, abort } = abortableStream();
    reader.read().catch(() => {});
    abort();

    let syncCaught = false;
    let promise: Promise<void> | undefined;
    try {
      // The old code, exactly. Captured so this test does not itself leak the
      // very unhandled rejection it is describing.
      promise = reader.cancel();
    } catch {
      syncCaught = true;
    }
    // The point of the whole change: the catch never runs, so without a .catch()
    // on the promise nothing anywhere handles this rejection.
    expect(syncCaught).toBe(false);
    await expect(promise).rejects.toMatchObject({ name: 'AbortError' });
  });

  it('attaching .catch() is what actually handles it', async () => {
    const { reader, abort } = abortableStream();
    reader.read().catch(() => {});
    abort();

    // The shipped form. Resolves quietly; nothing reaches onunhandledrejection.
    await expect(reader.cancel().catch(() => 'handled')).resolves.toBe('handled');
  });

  it('the guarded form is still correct on a healthy stream', async () => {
    // The fix must not break the normal path, where cancel() simply resolves.
    const stream = new ReadableStream<Uint8Array>({
      start(c) {
        c.enqueue(new Uint8Array([1]));
      },
    });
    const reader = stream.getReader();
    await expect(reader.cancel().catch(() => 'handled')).resolves.toBeUndefined();
  });
});

describe('every streaming screen releases its reader safely', () => {
  // These three are the sites that aborted a stream on teardown or timeout.
  const SITES = [
    'src/components/croatia/MajaScreen.tsx',
    'src/components/croatia/AIConversation.tsx',
    'src/components/croatia/LiveTutorScreen.tsx',
  ];

  it('no site calls reader.cancel() without handling the rejection', () => {
    for (const file of SITES) {
      const src = readFileSync(file, 'utf8');
      // Strip comments so the prose above these calls — which quotes the old
      // broken form on purpose — cannot be mistaken for live code.
      const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');

      const calls = [...code.matchAll(/\breader\.cancel\(\)/g)];
      // Non-vacuity: if a refactor renames the reader, this test must not quietly
      // start asserting nothing about that file.
      expect(calls.length, `${file} should still cancel its reader`).toBeGreaterThan(0);

      // Every call must be followed by .catch( — the only thing that can handle
      // a promise rejection here. `await` inside a try would also work, but no
      // site uses that form, so requiring .catch keeps the check unambiguous.
      for (const m of calls) {
        const after = code.slice(m.index! + m[0].length, m.index! + m[0].length + 20);
        expect(after, `${file}: reader.cancel() at index ${m.index} is unguarded`).toMatch(
          /^\s*\.catch\(/,
        );
      }
    }
  });
});
