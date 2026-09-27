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
  return [...new Set(out)].filter(Boolean);
}
