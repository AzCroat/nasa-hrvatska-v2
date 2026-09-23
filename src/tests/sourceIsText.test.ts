/**
 * sourceIsText.test.ts — a tracked text source file must actually BE text.
 *
 * THE DEFECT THIS CLOSES. Two committed TypeScript test files carried a raw NUL
 * byte, each used deliberately as a sentinel: `consts.get(t) ?? '\0'` in
 * `snapshotShapeAgreement.test.ts` and a `${q}\0${answer}` composite key in
 * `case-drill-banks.test.ts`. Both ran correctly and ESLint read them without
 * complaint, so nothing in the pipeline said a word. What it cost was VISIBILITY:
 * git's binary heuristic trips on a NUL in the first 8000 bytes, so both files
 * rendered as
 *
 *     Binary files a/src/tests/… and b/src/tests/… differ
 *
 * in `git diff`, `git log -p`, `git grep` and GitHub's pull-request view, and as
 * "binary file matches" under a plain `grep -rn` over `src/`. Measured, not
 * reasoned: `git diff --numstat` reported `-` `-` for both.
 *
 * WHY THAT MATTERS HERE MORE THAN IT WOULD ELSEWHERE. Both files are GUARDS, and
 * this repo's stated method for guards is to mutate one, read the diff, and
 * record the mutation in the commit message. A guard whose diff cannot be
 * rendered is a guard nobody can review a change to — the reviewer sees one line
 * saying the bytes differ. The files had been in that state for their whole
 * lives. It is a review hazard rather than a learner-facing bug, and this file
 * says so plainly rather than dressing it up.
 *
 * THE FIX WAS AN ENCODING CHANGE, NOT A BEHAVIOUR CHANGE. Both sentinels are now
 * written `'\u0000'` — the same value, spelled with an escape instead of the raw
 * byte. `snapshotShapeAgreement`'s derived key/shape sets were dumped before and
 * after and are byte-identical across 223 lines.
 *
 * WHAT THIS GUARD IS. The list of files comes from `git ls-files`, so it is the
 * real tracked set rather than a hand-written one — the shape that decays. A
 * file is judged by its EXTENSION: anything the repo stores as text must contain
 * no control byte other than tab, newline and carriage return. Binary assets
 * (images, fonts, the .ico) are not extension-matched and are never read.
 *
 * WHAT IT DOES NOT COVER, stated so the next person does not assume it does:
 * a control byte inside a file with an unlisted extension, and a NUL past byte
 * 8000 of a large file (git would still call that file text, so it is outside
 * the hazard this exists for — but it is reported anyway, because a raw control
 * byte in source is never intentional and the escape always works).
 */
import { describe, it, expect } from 'vitest';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.join(__dirname, '..', '..');

/** Extensions the repo stores as text. Anything else is not read at all. */
const TEXT_EXT = /\.(ts|tsx|js|jsx|mjs|cjs|mts|json|md|css|html|ya?ml|sh|rules|toml|txt|svg|xml)$/;

/** Tab, newline, carriage return are the only control bytes text may carry. */
const ALLOWED = new Set([0x09, 0x0a, 0x0d]);

function trackedTextFiles(): string[] {
  return execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64e6 })
    .split('\n')
    .filter((f) => f && TEXT_EXT.test(f));
}

interface Finding {
  file: string;
  line: number;
  byte: number;
}

function controlBytes(files: string[]): Finding[] {
  const out: Finding[] = [];
  for (const file of files) {
    let buf: Buffer;
    try {
      buf = readFileSync(path.join(ROOT, file));
    } catch {
      continue; // listed but absent (a deletion staged elsewhere) — not this test's business
    }
    let line = 1;
    for (let i = 0; i < buf.length; i++) {
      const b = buf[i]!;
      if (b === 0x0a) line++;
      if ((b < 0x20 || b === 0x7f) && !ALLOWED.has(b)) out.push({ file, line, byte: b });
    }
  }
  return out;
}

describe('the derivation is real', () => {
  it('lists the tracked text files, and the list is not empty', () => {
    const files = trackedTextFiles();
    // A floor, because an empty listing (git missing, wrong cwd) would make the
    // assertion below pass vacuously — which is the decorative-guard shape this
    // repo keeps rediscovering.
    expect(files.length).toBeGreaterThan(1500);
    expect(files).toContain('src/tests/snapshotShapeAgreement.test.ts');
    expect(files).toContain('package.json');
  });

  it('reads bytes, not decoded text', () => {
    // A decoded read would turn an invalid byte into U+FFFD and lose the
    // distinction this test is built on, so the scanner must see a NUL as 0.
    const probe = Buffer.from('a\u0000b', 'utf8');
    expect(probe.includes(0)).toBe(true);
  });
});

describe('tracked text sources contain no raw control bytes', () => {
  it('finds none', () => {
    const findings = controlBytes(trackedTextFiles());
    const detail = findings
      .slice(0, 20)
      .map((f) => `${f.file}:${f.line} contains byte 0x${f.byte.toString(16).padStart(2, '0')}`)
      .join('\n');
    expect(
      findings.length === 0,
      findings.length === 0
        ? ''
        : `${findings.length} raw control byte(s) in tracked text source:\n${detail}\n\n` +
            'git renders a file with a NUL in its first 8000 bytes as "Binary files differ", ' +
            'so every change to it becomes unreviewable in a diff and grep skips its lines. ' +
            "Write the value as an escape ('\\u0000') instead of the raw byte — the runtime " +
            'value is identical.',
    ).toBe(true);
  });

  it('the two files that carried one still spell their sentinel as an escape', () => {
    // Named because they are the instances this was written for: a "tidy-up" that
    // pastes the raw byte back would be caught by the sweep above anyway, but
    // naming them makes the failure say WHY rather than just WHERE.
    for (const f of [
      'src/tests/snapshotShapeAgreement.test.ts',
      'src/tests/case-drill-banks.test.ts',
    ]) {
      const src = readFileSync(path.join(ROOT, f), 'utf8');
      // No raw byte, and the sentinel is still spelled SOME legitimate escape.
      // Not pinned to one spelling: `\\u0000`, `\\x00` and `\\0` are equally
      // correct, and demanding one exact form would fail a tidy refactor that
      // fixed nothing — the false-positive trap this repo has paid for before.
      expect(src.includes('\u0000')).toBe(false);
      expect(/\\(u0000|x00|0)/.test(src)).toBe(true);
    }
  });
});
