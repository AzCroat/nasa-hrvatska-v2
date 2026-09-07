// scripts/croatianLintCensus.mjs — what the Croatian lint does NOT see.
//
// `NH_LINT_CENSUS=1 node scripts/lintCroatianText.mjs` counts the strings the
// lint looks at. This script answers the other, harder question: how many
// Croatian strings sit OUTSIDE its TARGETS, and what share of them its matcher
// would actually match if they were swept in.
//
// It exists because "303 files in TARGETS" and "12% of the Croatian strings"
// were both true of the same lint on the same day (2026-09-01), and only the
// second number said anything about what was guarded. A list can only show you
// what it already knows about; this counts what it misses.
//
// Per candidate file outside TARGETS:
//   croatian  — quoted string literals that look like Croatian
//   seen      — how many of those the lint's own matchers would yield
//   ratio     — seen / croatian. THE SELECTION CRITERION: a file the matcher
//               sees most of is honestly linted once added; a file with 200
//               strings of which it sees three is the false-confidence trap
//               that `lessons.js` was for months.
//   findings  — what the shared Serbism + Cyrillic checks say about the WHOLE
//               file if it were swept in, so a wave is dry-run before it is
//               written (widening is the dangerous direction — the
//               123-false-positive lesson).
//
// The regexes are BUILT FROM THE LINT'S SOURCE rather than restated, so this
// measures the real matcher and cannot drift from it.
//
// Run: `node scripts/croatianLintCensus.mjs`

import { readFile, readdir } from 'node:fs/promises';
import { resolve, relative, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { findSerbism } from '../functions/api/_serbisms.js';
import { containsCyrillic } from '../functions/api/_croatianGuard.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const LINT = await readFile(join(REPO_ROOT, 'scripts/lintCroatianText.mjs'), 'utf8');

function reFromSource(name, flags = 'g') {
  const m = LINT.match(new RegExp(`const ${name} =\\s*\\n?\\s*/(.*)/[a-z]*;`));
  if (!m) throw new Error(`cannot build ${name} from source`);
  return new RegExp(m[1], flags);
}
const CRO_FIELD_RE = reFromSource('CRO_FIELD_RE');
const ARRAY_FIELD_RE = reFromSource('ARRAY_FIELD_RE');
const QUOTED_RE = /(['"`])((?:[^\\\n]|\\.)*?)\1/g;

/** Current TARGETS, read from the lint source. */
const TARGETS = new Set(
  [...LINT.matchAll(/^\s*'([^']+\.(?:js|ts|tsx|jsx|json))',(?:\s*\/\/.*)?$/gm)].map((m) => m[1]),
);

// Croatian markers: diacritics, or a run of common Croatian function words.
const DIACRITIC = /[čćđšžČĆĐŠŽ]/;
const CRO_WORDS =
  /(?:^|\s)(?:je|su|se|na|za|koji|koja|nije|kako|što|ali|ili|sam|nas|vam|ovo|ovaj|ova|jedan|jedna|imam|ima|nema|biti|bio|bila|kad|gdje|zato|jer|vrlo|puno|dobro)(?=\s|$|[.,!?;:])/gi;

function looksCroatian(s) {
  if (s.length < 6) return false;
  if (DIACRITIC.test(s)) return true;
  const hits = (s.match(CRO_WORDS) || []).length;
  return hits >= 2;
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.git' || e.name === 'dist') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(js|ts|tsx|jsx)$/.test(e.name)) yield p;
  }
}

/**
 * Files whose ratio is high but which are deliberately NOT in TARGETS, each
 * with the reason. Checked in both directions by croatianLintTargets.test.ts:
 * an entry that no longer exists, or that has since been added to TARGETS, is
 * a stale exemption — the shape that let `couplingClearingPath` assert a dead
 * end that had already been fixed.
 */
export const CENSUS_EXEMPT = new Map([
  [
    'src/components/practice/dialogueScenarios.js',
    'walked STRUCTURALLY by lessonStrings-style traversal, because only the data knows which option is the correct one',
  ],
  [
    'functions/api/_serbisms.js',
    'the Serbism rules themselves: the Serbian forms live in regex literals and in `use:` fields that hold the Croatian replacement',
  ],
  [
    'functions/api/_croatianGuard.js',
    'CROATIAN_SCRIPT_RULE quotes the forbidden forms by name — naming them IS the rule',
  ],
]);

export async function censusRows() {
  const rows = [];
  for (const roots of ['src', 'functions']) {
    for await (const abs of walk(join(REPO_ROOT, roots))) {
      const rel = relative(REPO_ROOT, abs);
      if (TARGETS.has(rel)) continue;
      if (/(^|\/)(tests?|__tests__)\//.test(rel) || /\.test\.|\.spec\./.test(rel)) continue;
      const buf = await readFile(abs, 'utf8');
      if (!DIACRITIC.test(buf)) continue;

      // Every quoted literal that looks Croatian.
      const all = new Set();
      for (const m of buf.matchAll(QUOTED_RE)) if (looksCroatian(m[2])) all.add(m[2]);
      if (all.size === 0) continue;

      // What the lint's matchers would yield.
      const seen = new Set();
      for (const m of buf.matchAll(CRO_FIELD_RE)) if (looksCroatian(m[3])) seen.add(m[3]);
      for (const m of buf.matchAll(ARRAY_FIELD_RE))
        for (const q of m[2].matchAll(QUOTED_RE)) if (looksCroatian(q[2])) seen.add(q[2]);

      // What a sweep would report, over EVERY Croatian-looking literal.
      const findings = [];
      for (const s of all) {
        if (containsCyrillic(s)) findings.push(['cyrillic', s.slice(0, 60)]);
        const sb = findSerbism(s);
        if (sb)
          findings.push([
            `serbism:${sb.term ?? sb.use ?? JSON.stringify(sb).slice(0, 40)}`,
            s.slice(0, 60),
          ]);
      }

      rows.push({
        rel,
        croatian: all.size,
        seen: seen.size,
        ratio: seen.size / all.size,
        findings,
      });
    }
  }
  rows.sort((a, b) => b.croatian - a.croatian);
  return rows;
}

/**
 * Files the matcher sees at least `min` of that are NOT yet in TARGETS and
 * carry no recorded exemption — the ratchet. Empty is the passing state.
 */
export async function unratchetedFiles(min = 0.5) {
  return (await censusRows()).filter((r) => r.ratio >= min && !CENSUS_EXEMPT.has(r.rel));
}

// ── CLI ─────────────────────────────────────────────────────────────────────
if (import.meta.url === `file://${process.argv[1]}`) await report();

async function report() {
  const rows = await censusRows();
  const tot = rows.reduce((n, r) => n + r.croatian, 0);
  const totSeen = rows.reduce((n, r) => n + r.seen, 0);
  console.log(`candidates: ${rows.length} files`);
  console.log(`croatian strings outside TARGETS: ${tot}`);
  console.log(`of those the matcher sees: ${totSeen} (${((totSeen / tot) * 100).toFixed(1)}%)`);
  console.log(`files at ratio >= 0.5: ${rows.filter((r) => r.ratio >= 0.5).length}`);
  console.log('');
  console.log('rel | croatian | seen | ratio | findings');
  for (const r of rows.slice(0, 60)) {
    console.log(
      `${r.rel} | ${r.croatian} | ${r.seen} | ${r.ratio.toFixed(2)} | ${r.findings.length}`,
    );
  }
  console.log('');
  const withFindings = rows.filter((r) => r.findings.length > 0);
  console.log(`FILES WITH FINDINGS: ${withFindings.length}`);
  for (const r of withFindings) {
    console.log(`\n=== ${r.rel} (${r.findings.length})`);
    for (const [what, snip] of r.findings.slice(0, 8)) console.log(`   ${what} :: ${snip}`);
  }

  console.log('\n--- ADD LIST (ratio >= 0.5, minus the recorded exemptions) ---');
  const add = (await unratchetedFiles()).sort((a, b) => a.rel.localeCompare(b.rel));
  for (const r of add)
    console.log(`  '${r.rel}', // ${r.croatian} strings, ${(r.ratio * 100).toFixed(0)}% seen`);
  console.log(
    `total files: ${add.length}, strings they add: ${add.reduce((n, r) => n + r.seen, 0)}`,
  );
}
