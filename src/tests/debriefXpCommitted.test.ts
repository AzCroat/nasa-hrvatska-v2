/**
 * debriefXpCommitted.test.ts — both ways out of the Maja debrief must pay.
 *
 * THE DEFECT THIS EXISTS TO KEEP CLOSED. The debrief screen ends with two
 * buttons: "+N XP · Natrag" (onBack) and "Nastavi razgovor" (onContinue).
 * Only `handleDebriefBack` awarded. `handleContinue` cleared `debrief` and
 * `conversation` and dropped straight back to idle — it ends the finished
 * conversation just as finally as the other button does — so a learner who
 * chose to keep talking FORFEITED the XP the screen had just shown them, and
 * the `markQuest('culture')` credit with it.
 *
 * It is the exact inverse of the LEARN_PATH gate work: there, credit was paid
 * for work not done; here, work done was never credited. Both are the same
 * failure to make the record match what the learner actually did.
 *
 * HOW IT HID. `MajaDebrief` was handed an `award` prop and never called it, so
 * the screen that displays "+30 XP" looked like the thing that pays it. It is
 * not, and it never was — the parent pays, and it only paid on one exit.
 * `routerAwardProp.test.ts` could not see this: it guards the FORWARD
 * direction (a component that CALLS `award` must be GIVEN it) and scopes
 * itself to components that declare AND call. A component given `award` that
 * never calls it falls in the gap between the two guards. That gap is the
 * second half of this file.
 *
 * ESLint cannot cover it either: `no-unused-vars` is configured `args: 'none'`
 * ("components often accept props they don't always use"), so a destructured
 * prop that is never referenced is invisible to the lint by design.
 *
 * Source assertions run against WHITESPACE-NORMALISED source — a pin that
 * depends on where prettier chose to break a line is testing the formatter.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { describe, it, expect } from 'vitest';

const SRC = path.join(__dirname, '..');
const read = (p: string) => fs.readFileSync(path.join(SRC, p), 'utf8');

/** Strip comments, then collapse whitespace runs to one space. */
export function strip(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1 ')
    .replace(/\s+/g, ' ');
}

/** The body of `const <name> = useCallback(() => { ... }`, brace-matched. */
function callbackBody(norm: string, name: string): string {
  const start = norm.indexOf(`const ${name} = useCallback(`);
  expect(start, `${name} not found`).toBeGreaterThan(-1);
  const open = norm.indexOf('{', start);
  let depth = 0;
  for (let i = open; i < norm.length; i++) {
    if (norm[i] === '{') depth++;
    else if (norm[i] === '}') {
      depth--;
      if (depth === 0) return norm.slice(open, i + 1);
    }
  }
  throw new Error(`unbalanced braces in ${name}`);
}

describe('Maja debrief — both exits commit the XP', () => {
  const norm = strip(read('components/croatia/MajaScreen.tsx'));

  it('the continue button commits the debrief XP', () => {
    expect(callbackBody(norm, 'handleContinue')).toContain('commitDebriefXp()');
  });

  it('the back button commits the debrief XP', () => {
    expect(callbackBody(norm, 'handleDebriefBack')).toContain('commitDebriefXp()');
  });

  it('the ONLY award call for the debrief lives inside the commit helper', () => {
    // Two payers would double-award; a payer outside the helper would be a
    // third exit nobody checked.
    const calls = [...norm.matchAll(/award\(debrief\.xpEarned/g)];
    expect(calls).toHaveLength(1);
    const body = callbackBody(norm, 'commitDebriefXp');
    expect(body).toContain('award(debrief.xpEarned');
  });

  it('the commit is latched, so one conversation cannot pay twice', () => {
    const body = callbackBody(norm, 'commitDebriefXp');
    expect(body).toContain('debriefXpFired.current');
    expect(body).toContain('debriefXpFired.current = true');
  });

  it('continuing re-arms the latch, so the NEXT conversation still earns', () => {
    // handleContinue is the one path that keeps the component mounted across
    // two conversations; without this the second one would pay nothing.
    expect(callbackBody(norm, 'handleContinue')).toContain('debriefXpFired.current = false');
  });

  it('the debrief screen is not handed an awarder it does not use', () => {
    expect(strip(read('components/croatia/MajaDebrief.tsx'))).not.toMatch(/\baward\b/);
  });
});

// ── the class guard ────────────────────────────────────────────────────────
/** Components that destructure `award` in their props but never reference it. */
export function awardIgnorers(files: string[]): string[] {
  const out: string[] = [];
  for (const file of files) {
    const text = strip(fs.readFileSync(file, 'utf8'));
    for (const m of text.matchAll(/function\s+[A-Za-z0-9_]+\s*\(\s*\{([^}]*)\}/g)) {
      const names = m[1]!.split(',').map((s) => s.trim().split(/[:=]/)[0]!.trim());
      if (!names.includes('award')) continue;
      const body = text.slice(m.index! + m[0].length);
      if (!/\baward\b/.test(body)) out.push(file);
    }
  }
  return out;
}

describe('no component is handed an awarder it ignores', () => {
  const files = execFileSync(
    'bash',
    ['-c', "find src/components -type f -name '*.tsx' | grep -v __tests__"],
    { encoding: 'utf8' },
  )
    .trim()
    .split('\n');

  it('scans a non-trivial number of components', () => {
    // A find that returned nothing would make the next assertion vacuous.
    expect(files.length).toBeGreaterThan(100);
  });

  it('flags a component that destructures award and never uses it', () => {
    // The detector driven directly, both directions — never trusted to the
    // corpus, or a corpus that happens to be clean proves nothing about it.
    const tmp = path.join(__dirname, '__award_probe.tsx');
    fs.writeFileSync(tmp, 'function Probe({ award, x }: P) { return x; }\n');
    try {
      expect(awardIgnorers([tmp])).toEqual([tmp]);
      fs.writeFileSync(tmp, 'function Probe({ award, x }: P) { award(1); return x; }\n');
      expect(awardIgnorers([tmp])).toEqual([]);
      // forwarding it to a child counts as using it
      fs.writeFileSync(tmp, 'function Probe({ award }: P) { return <K award={award} />; }\n');
      expect(awardIgnorers([tmp])).toEqual([]);
    } finally {
      fs.unlinkSync(tmp);
    }
  });

  it('finds none in the real component tree', () => {
    expect(awardIgnorers(files)).toEqual([]);
  });
});
