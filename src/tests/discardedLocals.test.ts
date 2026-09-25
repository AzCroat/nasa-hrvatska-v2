/**
 * SWEEP 119 — A DISCARDED PROP IS AN UNUSED PARAMETER; A DISCARDED LOCAL IS WORK
 * DONE FOR NOTHING.
 *
 * `void x;` is how this codebase silences the unused-variable rule, and the idiom
 * has hidden three real defects — every one of them a value the file COMPUTED and
 * then threw away:
 *
 *   `void _questXP`   HomeTab summed the XP printed on every daily-quest card and
 *                     discarded it. Not one quest had ever been paid (fixed
 *                     2026-09-14 in App.tsx; the dead sum is now gone from here).
 *   `void _dcOpen`    the daily challenge: state threaded through seven modules and
 *                     uploaded to Firestore with no producer and no UI (sweep 116).
 *   `void total`      MicroLessonScreen computed its quiz length, discarded it with
 *                     "suppress unused warning", and credited XP + `gc` + the
 *                     grammar quest on ANY score — 0 of 3 correct included.
 *
 * A discarded PROP is a different thing: the caller passes it, this component does
 * not need it, and nothing was computed to produce it. Those are left alone, which
 * is what keeps this guard's signal readable — the census found 18 voids and only
 * the two sweep-116 ones are locals.
 *
 * It also refuses a `void` on a name the file DOES use elsewhere: HomeTab voided
 * `pathData`, `currentDayIdx` and `allQuestsDone` under a comment reading "props
 * kept for API compatibility" while all three were live, so the block asserted
 * something false about itself and the genuinely dead names sat inside it unread.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, globSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const strip = (s: string) => s.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

interface Discard {
  file: string;
  name: string;
  local: boolean;
  used: boolean;
}

/**
 * `local` — the name is DECLARED in this file (`const`/`let`/`var`, plain or
 * destructured, which covers `const [a, setA] = useState(…)`). A parameter, a
 * destructured prop in the signature, or a renamed prop (`sh: _sh`) is not.
 *
 * `used` — the name appears somewhere other than its declaration and the `void`.
 */
/**
 * Does `name` appear anywhere that is not its own declaration and not the `void`?
 *
 * The declaration shapes are the ones this app actually writes: an interface or
 * inline-type field, a destructured prop with or without a default, a renamed one
 * (`sh: _sh`), a typed function parameter, and `const`/`let`/`var` including
 * destructuring. Anything else counts as a use.
 *
 * KNOWN LIMIT, stated: a shorthand property in a CALL (`f({ stats })`) reads as a
 * field and is therefore missed. That is the safe direction for this check — it can
 * fail to report a redundant `void`, never invent one.
 */
function usedOutsideDeclarations(src: string, name: string): boolean {
  const q = esc(name);
  const declaration = [
    new RegExp(`(?:^|[{,(;])\\s*${q}\\s*\\??\\s*[:,=)}]`),
    new RegExp(`\\w+\\s*:\\s*${q}\\s*[,}]`),
    new RegExp(`(?:const|let|var)\\s+${q}\\b`),
    new RegExp(`(?:const|let|var)\\s*[[{][^\\]}]*\\b${q}\\b`),
  ];
  const mention = new RegExp(`(?<![\\w$.])${q}(?![\\w$])`);
  const voidStmt = new RegExp(`^\\s*void\\s+${q}\\s*;`);
  return src
    .split('\n')
    .some((ln) => !voidStmt.test(ln) && mention.test(ln) && !declaration.some((d) => d.test(ln)));
}

function discards(files: string[]): Discard[] {
  const out: Discard[] = [];
  for (const file of files) {
    const s = strip(readFileSync(file, 'utf8'));
    for (const m of s.matchAll(/^[ \t]*void[ \t]+([A-Za-z_$][\w$]*)[ \t]*;/gm)) {
      const name = m[1]!;
      const q = esc(name);
      const plain = new RegExp(`(?:const|let|var)\\s+${q}\\b`);
      const destructured = new RegExp(
        `(?:const|let|var)\\s*[[{][^\\]}]*\\b${q}\\b[^\\]}]*[\\]}]\\s*=`,
      );
      const local = plain.test(s) || destructured.test(s);
      out.push({ file, name, local, used: usedOutsideDeclarations(s, name) });
    }
  }
  return out;
}

function productionFiles(): string[] {
  return globSync('src/**/*.{ts,tsx,js,jsx}').filter(
    (f) => !/(^|\/)(tests|__tests__|__mocks__)\//.test(f) && !/\.(test|spec)\./.test(f),
  );
}

/**
 * Computed values the app deliberately discards. Each reason is measured; both
 * staleness directions are checked below.
 */
const DISCARDED_LOCALS: Record<string, string> = {
  'src/components/home/HomeTab.tsx:_dcOpen':
    'the daily challenge is VESTIGIAL (sweep 116): no UI in src/components renders it and no producer outside the sync layer sets the state it reads. Left in place because unpicking the plumbing touches seven modules including the root component, for no learner-visible gain',
  'src/components/home/HomeTab.tsx:_setDcOpen':
    'as _dcOpen — the other half of the same vestigial useState pair (sweep 116)',
};

describe('a discarded local is work done for nothing', () => {
  const found = discards(productionFiles());

  it('the census is derived and non-empty, and most voids are props', () => {
    expect(found.length).toBeGreaterThanOrEqual(12);
    expect(found.some((d) => !d.local)).toBe(true);
    // Real-data pin on the classifier: a destructured useState pair is LOCAL, a
    // renamed prop in the signature (`sh: _sh`) is not. If these two ever swap the
    // guard silently changes subject.
    expect(found.find((d) => d.name === '_dcOpen')?.local).toBe(true);
    expect(found.find((d) => d.name === '_sh')?.local).toBe(false);
    expect(found.find((d) => d.name === 'correct')?.local).toBe(false);
  });

  it('every discarded LOCAL is listed with a reason', () => {
    const unlisted = found
      .filter((d) => d.local && !(`${d.file}:${d.name}` in DISCARDED_LOCALS))
      .map((d) => `${d.file}:${d.name}`);
    expect(
      unlisted,
      'A `void` on a value this file COMPUTED means the work is done and thrown ' +
        'away — three defects have hidden exactly there (_questXP unpaid quests, ' +
        '_dcOpen the dead daily challenge, `total` the lesson gate that never ran). ' +
        'Remove the computation, or list it here with what it is waiting for.\n' +
        unlisted.map((u) => `  - ${u}`).join('\n'),
    ).toEqual([]);
  });

  it('no void names a value the file actually uses', () => {
    const lying = found.filter((d) => d.used).map((d) => `${d.file}:${d.name}`);
    expect(
      lying,
      'HomeTab voided pathData, currentDayIdx and allQuestsDone while using all ' +
        'three, so a block claiming "props kept for API compatibility" described ' +
        'none of itself and the dead names inside it went unread.\n' +
        lying.map((l) => `  - ${l}`).join('\n'),
    ).toEqual([]);
  });

  it('POSITIVE CONTROL — a computed-and-discarded local is caught, a prop is not', () => {
    const dir = mkdtempSync(join(tmpdir(), 'discards-'));
    const localFile = join(dir, 'local.ts');
    writeFileSync(
      localFile,
      'export function f() {\n  const sum = 1 + 1;\n  void sum;\n  return 0;\n}\n',
    );
    const propFile = join(dir, 'prop.ts');
    writeFileSync(
      propFile,
      'export function g({ a }: { a: number }) {\n  void a;\n  return 0;\n}\n',
    );
    const [l] = discards([localFile]);
    const [p] = discards([propFile]);
    expect(l?.local, 'a const the file computes must classify as local').toBe(true);
    expect(p?.local, 'a destructured parameter must not').toBe(false);
    // And a comment mentioning the void must not create one.
    const commentFile = join(dir, 'comment.ts');
    writeFileSync(commentFile, '// void sum;\nexport const x = 1;\n');
    expect(discards([commentFile])).toEqual([]);
  });

  it('every DISCARDED_LOCALS entry still exists and is still discarded', () => {
    for (const [key, reason] of Object.entries(DISCARDED_LOCALS)) {
      expect(reason.length, `${key} needs a measured reason`).toBeGreaterThan(60);
      const [file, name] = key.split(':') as [string, string];
      const hit = found.find((d) => d.file === file && d.name === name);
      expect(hit, `${key} no longer voids that name — drop the entry`).toBeTruthy();
      expect(hit?.local, `${key} is no longer a local — drop the entry`).toBe(true);
    }
    expect(Object.keys(DISCARDED_LOCALS)).toHaveLength(2);
  });
});
