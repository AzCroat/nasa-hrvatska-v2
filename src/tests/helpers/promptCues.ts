/**
 * promptCues — find a multiple-choice item whose own prompt hands over its answer.
 *
 * THE OWNER REPORT THIS EXISTS TO KEEP CLOSED (2026-09-26): *"In objektne zamjenice you
 * are giving the answers in the questions. What the fuck. How is someone going to learn
 * if you give them the answers?"* — and then, separately, of the verb-aspect drill:
 * *"Verb aspect drill also gives the answer. You cannot learn if given the answers."*
 *
 * Both were the same defect. A parenthetical cue after the sentence, naming the word to
 * use — and naming it in the very FORM the item is asking for:
 *
 *     q: 'Nemoj ____ o tome. (govoriti)'   answer: 'govoriti'
 *     q: 'Sutra ću _____ (ići) u grad.'    answer: 'ići'
 *     q: 'Dao ____ je knjigu. (meni + nju)' answer: 'mi ju'   ← the cue gives the ORDER,
 *                                                                and order is the subject
 *
 * Measured across every bank in `src/data`, `src/components` and the served content:
 * **124 items**, in 52 files. Every one of them could be answered by copying the cue,
 * which means the item tested nothing at all.
 *
 * THE PREDICATE, AND WHY IT IS SCOPED TO PARENTHETICALS. An answer appearing in the
 * question's own prose is usually a legitimate question form and must not be flagged —
 * `Je li ova sklonidba dulja ili kraća od a-sklonidbe?` offers the alternatives on
 * purpose, `Vokativ imena „Marko” glasi:` has to name the word, and 29 such items exist.
 * The defect is specifically a CUE: something in brackets telling the learner which form
 * to produce.
 *
 * IT IS TOKEN CONTAINMENT, NOT SUBSTRING, AND BOTH HALVES OF THAT ARE LOAD-BEARING:
 *
 *  - Not SUBSTRING, because `Vidim ____. (njega)` → `ga` contains `ga` inside `njega`
 *    incidentally; converting a long pronoun to its short form is the exercise. A
 *    substring rule reported 255 items, over a hundred of them correct.
 *  - Not WHOLE-STRING either, because `(su + nas)` → `su nas` reads as one token to a
 *    whole-word match and slipped through the first pass; it had to be fixed by hand.
 *    Containment of every WORD of the answer catches it, and still passes the legitimate
 *    lemma cue — `(knjiga)` for answer `knjige` shares no whole word.
 *
 * A cue that names the PERSON or gives an English gloss is legitimate and stays:
 * `Treba ____ odmor. (ja)` → `mi` says whose rest it is without giving the dative form.
 *
 * Word boundaries are Unicode lookarounds. JS `\b` is ASCII-only and misfires around
 * č/ć/đ/š/ž — the same rule the Croatian lint records.
 */
import fs from 'node:fs';
import path from 'node:path';

const W = '\\p{L}\\p{N}_';
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Decode the \uXXXX escapes some served banks use for their Croatian. */
export function decodeEscapes(s: string): string {
  return s
    .replace(/\\u([0-9a-fA-F]{4})/g, (_m, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"');
}

export function containsWord(haystack: string, word: string): boolean {
  return new RegExp(`(?<![${W}])${esc(word)}(?![${W}])`, 'u').test(haystack);
}

const words = (s: string): string[] => s.split(/[^\p{L}\p{N}]+/u).filter(Boolean);

/**
 * The cue hands over the answer: the answer's words appear in the cue as a CONTIGUOUS
 * run, in the same order.
 *
 * ORDER IS THE WHOLE REFINEMENT, and it is what separates a giveaway from a legitimate
 * exercise. `EnklitikeDrill` teaches CLITIC ORDER, so listing the clitics as ingredients
 * is the task — `Predstavila ____ jučer. (je + mu + ih)` answered `mu ih je` requires the
 * learner to order them, and that is the skill. The same drill's `(mi + je)` answered
 * `mi je` is a giveaway, because copying the cue and deleting the plus is the answer.
 * A predicate that only asked whether the words were PRESENT flagged all eleven and
 * could not tell the two apart.
 *
 * A cue offering explicit `/`-separated ALTERNATIVES is a scaffold, not an answer: it
 * narrows four options to two and still makes the learner choose
 * (`Želim ____ do petka. (čitati/pročitati)`).
 */
export function cueGivesAnswer(cue: string, answer: string, opts?: readonly string[]): boolean {
  if (cue.includes('/')) return false;
  // WHEN THE ITEM IS ABOUT CAPITALISATION, CASE IS THE ANSWER. `VelikoSlovoDrill` offers
  // `Sveučilište | sveučilište | SVEUČILIŠTE | Sve Učilište` — two of those are the same
  // word differing only in case, which is how you can tell the subject is the capital
  // letter. A lowercase cue then gives the WORD and withholds the thing being tested, so
  // the comparison has to be case-sensitive there and case-insensitive everywhere else
  // (a sentence-initial capital is incidental: `(tijekom …)`→ `Tijekom` IS a giveaway).
  const folded = (opts ?? []).map((o) => o.toLowerCase().replace(/\s+/g, ''));
  const caseIsTheSubject = new Set(folded).size < folded.length;
  const norm = (x: string) => (caseIsTheSubject ? x : x.toLowerCase());
  const a = words(norm(answer));
  const c = words(norm(cue));
  if (!a.length || a.join('').length < 2) return false;
  for (let i = 0; i + a.length <= c.length; i++) {
    if (a.every((w, k) => c[i + k] === w)) return true;
  }
  return false;
}

/**
 * Croatian long (stressed) pronoun forms and their clitic counterparts. Closed set.
 *
 * WHY THIS IS HERE. The owner's first example was
 * `Dao ____ je knjigu. (meni + nju)` answered `mi ju` — and no surface word is shared,
 * so the order check above cannot see it. But `redanje` mode tests exactly one thing,
 * dative-before-accusative, and the cue lists them in that order. Mapping the long forms
 * to their clitics makes the leak visible.
 *
 * SCOPED TO MULTI-WORD ANSWERS, and that scope is the whole point: converting ONE long
 * form to its clitic is a legitimate exercise the app runs deliberately
 * (`Vidim ____. (njega)` → `ga`, `Nenaglašeni oblik od „njemu” glasi:` → `mu`). Only a
 * cue that hands over the ORDER of two or more is a giveaway.
 */
const CLITIC_OF: Record<string, string> = {
  mene: 'me',
  tebe: 'te',
  njega: 'ga',
  nje: 'je',
  nju: 'ju',
  nas: 'nas',
  vas: 'vas',
  njih: 'ih',
  meni: 'mi',
  tebi: 'ti',
  njemu: 'mu',
  njoj: 'joj',
  nama: 'nam',
  vama: 'vam',
  njima: 'im',
  sebe: 'se',
  sebi: 'si',
};

/** True when `short` appears inside `long` in the same relative order. */
function inOrder(short: readonly string[], long: readonly string[]): boolean {
  let k = 0;
  for (const w of long) {
    if (w === short[k]) k++;
    if (k === short.length) return true;
  }
  return false;
}

/**
 * The cue gives away the ORDER of a multi-word answer, after mapping long pronoun forms
 * to their clitics. `(meni + nju)` → `mi ju`; `(njemu + njega)` → `mu ga je`.
 */
export function cueGivesOrder(cue: string, answer: string): boolean {
  if (cue.includes('/')) return false;
  const a = words(answer.toLowerCase());
  if (a.length < 2) return false;
  const c = words(cue.toLowerCase()).map((w) => CLITIC_OF[w] ?? w);
  if (c.length < 2) return false;
  return inOrder(c, a);
}

/**
 * The ENGLISH GLOSS naming the Croatian answer, in the one shape that is unambiguous:
 * `en: '<English> → <the answer>'`.
 *
 * WHY THE GLOSS IS A CARRIER AT ALL. `ModeDrill` and every hand-written `*Drill.tsx`
 * render `{cur.en}` unconditionally, directly under the question and ABOVE the options —
 * so a gloss reading `money → lova` hands the learner the answer before they choose.
 * Eleven items did exactly that; `RazgovorniDrill`, a slang drill, held six of them.
 *
 * WHY ONLY THE ARROW SHAPE IS GUARDED, measured rather than assumed. 89 of the 5,166
 * items whose gloss contains their answer as a whole word are CORRECT and must not be
 * flagged: the answer is a loanword or a proper noun English shares (`internet`, `euro`,
 * `film`, `park`, `laptop`, `referendum`, `London`, `Zagreb`, `m²`), or a clitic that
 * coincides with its English pronoun (`Uhvatila ____ je fjaka.` → `me`). You cannot
 * translate the sentence without using the word. A blunt rule would report all 89 and
 * name no defect, which is how a guard earns the reputation that gets it ignored.
 *
 * ONE CLUSTER LOOKED LIKE THE BIGGEST INSTANCE AND IS A NON-DEFECT: `CollocationsGame`
 * stores the full Croatian collocation in `en` (`en: 'napraviti grešku'`, answer
 * `napraviti`) — but it renders that block inside `{answered && (…)}`, so it is FEEDBACK.
 * Ask when a field is rendered, not only whether it contains the answer.
 */
export function glossGivesAnswer(en: string, answer: string): boolean {
  const m = en.match(/(?:→|->)\s*(.+)$/);
  if (!m) return false;
  const tail = m[1]!.replace(/\s*\(.*?\)\s*$/, '').trim();
  return tail.toLowerCase() === answer.trim().toLowerCase();
}

export interface CueLeak {
  file: string;
  line: number;
  q: string;
  answer: string;
  cue: string;
  /** 'cue' — a parenthetical in the question; 'gloss' — the English `en` line. */
  via?: 'cue' | 'gloss';
}

function walk(root: string, dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(path.join(root, dir))) {
    const rel = path.join(dir, e);
    if (fs.statSync(path.join(root, rel)).isDirectory()) walk(root, rel, out);
    else out.push(rel);
  }
  return out;
}

/** Brace-matched object literals, string-aware so a `{` inside Croatian text is safe. */
function objectLiterals(src: string): { text: string; at: number }[] {
  const out: { text: string; at: number }[] = [];
  for (let i = 0; i < src.length; i++) {
    if (src[i] !== '{') continue;
    let depth = 0;
    let j = i;
    let inStr: string | null = null;
    for (; j < src.length; j++) {
      const c = src[j]!;
      if (inStr) {
        if (c === '\\') j++;
        else if (c === inStr) inStr = null;
        continue;
      }
      if (c === "'" || c === '"' || c === '`') {
        inStr = c;
        continue;
      }
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) break;
      }
    }
    if (j < src.length && j - i < 4000) {
      out.push({ text: src.slice(i, j + 1), at: i });
      i = j;
    }
  }
  return out;
}

const Q_FIELDS = ['q', 'question', 'prompt', 'sentence', 'stem'];
const A_FIELDS = ['answer', 'a', 'correct', 'ans'];

function field(text: string, names: string[]): string | null {
  for (const n of names) {
    const m = text.match(
      new RegExp(`(?:^|[{,\\s])${n}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1)[^\\\\])*)\\1`),
    );
    if (m) return decodeEscapes(m[2]!);
  }
  return null;
}

/**
 * How many multiple-choice items with a question AND an answer the scan actually reaches.
 * Exported so the guard can prove it is not vacuous: a walk, literal parser or field
 * matcher that quietly stopped matching would report zero leaks for ever, and zero leaks
 * is what a healthy tree also reports. The two are indistinguishable without this.
 */
export function countScannedItems(
  root: string,
  roots = ['src/data', 'src/components', 'functions/api/content/_data'],
): number {
  let n = 0;
  const files = roots
    .flatMap((r) => {
      try {
        return walk(root, r);
      } catch {
        return [];
      }
    })
    .filter((f) => /\.(ts|tsx|js|jsx)$/.test(f) && !/\.test\./.test(f));
  for (const f of files) {
    const src = fs.readFileSync(path.join(root, f), 'utf8');
    for (const lit of objectLiterals(src)) {
      if (!/(?:^|[{,\s])(opts|options|choices)\s*:\s*\[/.test(lit.text)) continue;
      if (field(lit.text, Q_FIELDS) && field(lit.text, A_FIELDS)) n++;
    }
  }
  return n;
}

/** Scan the content tree for items whose parenthetical cue hands over the answer. */
export function findCueLeaks(
  root: string,
  roots = ['src/data', 'src/components', 'functions/api/content/_data'],
): CueLeak[] {
  const files = roots
    .flatMap((r) => {
      try {
        return walk(root, r);
      } catch {
        return [];
      }
    })
    .filter((f) => /\.(ts|tsx|js|jsx)$/.test(f) && !/\.test\./.test(f));

  const leaks: CueLeak[] = [];
  for (const f of files) {
    const src = fs.readFileSync(path.join(root, f), 'utf8');
    for (const lit of objectLiterals(src)) {
      // Multiple choice only: an item with no options is not this class.
      if (!/(?:^|[{,\s])(opts|options|choices)\s*:\s*\[/.test(lit.text)) continue;
      const q = field(lit.text, Q_FIELDS);
      const a = field(lit.text, A_FIELDS);
      if (!q || !a || a.length < 2 || /^\d+$/.test(a)) continue;
      const om = lit.text.match(/(?:^|[{,\s])(?:opts|options|choices)\s*:\s*\[([\s\S]*?)\]/);
      const opts = om
        ? [...om[1]!.matchAll(/(['"`])((?:\\.|(?!\1)[^\\])*)\1/g)].map((x) => decodeEscapes(x[2]!))
        : [];
      const line = src.slice(0, lit.at).split('\n').length;
      let found = false;
      for (const m of q.matchAll(/\(([^)]*)\)/g)) {
        const cue = m[1]!;
        if (cueGivesAnswer(cue, a, opts) || cueGivesOrder(cue, a)) {
          leaks.push({ file: f, line, q, answer: a, cue, via: 'cue' });
          found = true;
          break;
        }
      }
      if (found) continue;
      const en = field(lit.text, ['en']);
      if (en && glossGivesAnswer(en, a)) {
        leaks.push({ file: f, line, q, answer: a, cue: en, via: 'gloss' });
      }
    }
  }
  return leaks;
}
