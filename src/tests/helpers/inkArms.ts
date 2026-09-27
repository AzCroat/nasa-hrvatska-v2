/**
 * The colour-VALUED operands of a style expression.
 *
 * Not every identifier in the expression: a nested ternary's CONDITION is not a colour,
 * and reading one as such reported `isActive`, `visited`, `isDone`, `syncReady` and
 * `exporting` as inks. A part qualifies only when the punctuation BEFORE it is `?` or `:`
 * and the punctuation AFTER it is `:` or nothing — which excludes a condition exactly.
 * `||` and `??` split too, because `k.color || 'var(--ink-strong)'` has two operands and
 * only the first is an accent.
 */
export function inkArms(expr: string): string[] {
  const parts: string[] = [];
  const delims: string[] = [];
  let depth = 0;
  let q: string | null = null;
  let cur = '';
  for (let i = 0; i < expr.length; i++) {
    const c = expr[i]!;
    const n = expr[i + 1];
    if (q) {
      cur += c;
      if (c === q && expr[i - 1] !== '\\') q = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') {
      q = c;
      cur += c;
      continue;
    }
    if ('([{'.includes(c)) depth++;
    else if (')]}'.includes(c)) depth--;
    if (depth === 0) {
      if (c === '?' && n === '.') {
        cur += c;
        continue;
      } // optional chaining
      if (c === '?' && n === '?') {
        parts.push(cur);
        delims.push('|');
        cur = '';
        i++;
        continue;
      }
      if (c === '|' && n === '|') {
        parts.push(cur);
        delims.push('|');
        cur = '';
        i++;
        continue;
      }
      if (c === '?' || c === ':') {
        parts.push(cur);
        delims.push(c);
        cur = '';
        continue;
      }
    }
    cur += c;
  }
  parts.push(cur);
  if (!delims.length) return [parts[0]!.trim()].filter(Boolean);
  const out: string[] = [];
  for (let i = 0; i < parts.length; i++) {
    const before = i === 0 ? null : delims[i - 1];
    const after = i < delims.length ? delims[i] : null;
    // a `|`-joined operand is a value wherever it sits; a ternary part is a value only
    // when it is not a condition.
    const isValue =
      before === '|' ||
      after === '|' ||
      ((before === '?' || before === ':') && (after === ':' || after === null));
    if (isValue) out.push(parts[i]!.trim());
  }
  // A PARENTHESISED ARM IS AN EXPRESSION, NOT A VALUE. `showState ? (isCorrect ? '#f0fdf4'
  // : '#fef2f2') : 'var(--card)'` came back as the one arm `(isCorrect ? … )`, which no
  // colour parser reads — so ModeDrill's answered-option slab, behind all 109 engine
  // drills, was invisible to every guard built on this helper while it rendered
  // near-white ink on a light tint in dark mode (2026-09-27).
  return [...new Set(out.flatMap(unwrapParens))].filter(Boolean);
}

/** `( … )` spanning the whole arm → the arms of what is inside; anything else → itself. */
function unwrapParens(arm: string): string[] {
  const a = arm.trim();
  if (!a.startsWith('(') || !a.endsWith(')')) return [a];
  let depth = 0;
  let q: string | null = null;
  for (let i = 0; i < a.length; i++) {
    const c = a[i]!;
    if (q) {
      if (c === q && a[i - 1] !== '\\') q = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') q = c;
    else if (c === '(') depth++;
    else if (c === ')') {
      depth--;
      // The opening paren closed before the end: `(a) + (b)`, not one wrapped arm.
      if (depth === 0 && i < a.length - 1) return [a];
    }
  }
  return inkArms(a.slice(1, -1));
}
