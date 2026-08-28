// scripts/lintCroatianText.mjs
//
// CI lint that scans every Croatian text field in the content data files
// for non-Croatian-Latin characters. Catches the class of encoding-bleed
// bugs surfaced by the 2026-05-20 quality audit:
//   - Cyrillic chars mid-word (e.g. украшavamo)
//   - Cedilla-z `ţ` (Romanian/Turkish) where Croatian `ž` is expected
//   - Other Latin-with-accent confusions
//
// Croatian standard alphabet (Latin-only):
//   a b c č ć d đ e f g h i j k l m n o p r s š t u v z ž
//   plus loanword/proper-noun chars: q w x y
//   plus standard punctuation, digits, spaces, common typographic marks.
//
// Anything outside that whitelist in a `hr:`, `text:`, `paragraphs[]`, or
// other Croatian-text field is a lint error.
//
// Run: `node scripts/lintCroatianText.mjs`
//   exits 0 on clean, 1 on findings (CI fail).

import { readFile, readdir } from 'node:fs/promises';
import { resolve, relative, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

// Files to scan — server data is the canonical source; client data mirrors.
const TARGETS = [
  'functions/api/content/_data/scenarios.js',
  'functions/api/content/_data/lessons.js',
  // The A1 expansion (2026-08-28) lives in its own module. Adding it here is
  // not optional bookkeeping: a lesson file outside TARGETS is a file everyone
  // believes is linted and is not, which is precisely how exercises.js went 81
  // levelled exercises without ever being scanned.
  'functions/api/content/_data/lessonsA1.js',
  'functions/api/content/_data/lessonsA2.js',
  'functions/api/content/_data/lessonsB1.js',
  'functions/api/content/_data/lessonsB2.js',
  'functions/api/content/_data/lessonsC1.js',
  'functions/api/content/_data/lessonsC2.js',
  'functions/api/content/_data/gradedStories.js',
  'functions/api/content/_data/vocabulary.js',
  'functions/api/content/_data/vocabScenes.js',
  // exercises.js was absent from this list entirely — 81 levelled exercises
  // and 356 option arrays of authored Croatian, never once scanned. Found while
  // verifying the distractor pass on 2026-08-26.
  'functions/api/content/_data/exercises.js',
  'functions/api/content/_data/grammar.js',
  'functions/api/content/_data/grammarAdvanced.js',
  'functions/api/content/_data/learnPath.js',
  'functions/api/content/_data/core.js',
  'src/data/scenarios.js',
  'src/data/vocabulary.js',
  'src/data/cultural/proverbs.js',
  'src/data/cultural/history.js',
  'src/data/cultural/regions.js',
  'src/data/cultural/language.js',
  'src/data/cultural/events.js',
  'src/data/cultural/deepdives.js',
  'functions/api/content/_data/cultural/deepdives.js',
  // CEFR equivalency item bank — A1 inline (TypeScript) + A2–C1 JSON banks.
  // Included to catch encoding-bleed (Cyrillic homoglyphs, U+00AD soft hyphens,
  // mojibake, etc.) introduced by subagent authoring of the expanded 60/60/30 sets.
  'src/data/cefrEquivalencyItems.ts',
  'src/data/cefrEquivalencyItems/a2_to_b1.json',
  'src/data/cefrEquivalencyItems/b1_to_b2.json',
  'src/data/cefrEquivalencyItems/b2_to_c1.json',
  'src/data/cefrEquivalencyItems/c1_to_c2.json',
  'src/data/cefrEquivalencyItems/c2_mastery.json',
  // Guided-writing curriculum (2026-08-18): authored model texts, frames and
  // prompts — the largest single block of authored Croatian prose in src/.
  'src/data/writingCurriculum.ts',
  // ── 2026-08-26 sweep: everything else carrying authored Croatian ──────────
  'src/data/cultural/geography.js',
  'functions/api/content/_data/cultural/geography.js',
  'src/data/exercises.js',
  'functions/api/content/_data/cultural/regions.js',
  'functions/api/content/_data/cultural/history.js',
  'functions/api/content/_data/cultural/proverbs.js',
  'functions/api/content/_data/cultural/language.js',
  'src/data/bakaLetters.ts',
  'src/data/content.tsx',
  'src/data/daily-content.js',
  'src/data/writingTasks.ts',
  'src/data/speakingTasks.ts',
  'src/data/pitchAccentContent.js',
  'src/data/cultural/media.js',
];

// Whitelist: Croatian Latin + common punctuation + digits + typographic marks.
// We include q/w/x/y for loanwords (e.g. "wifi", "taxi") and proper nouns.
const ALLOWED_RE = /^[\sa-zA-ZČčĆćĐđŠšŽž0-9À-ſȘ-ț,.!?'":;\-—–…()\[\]\/&%@#=+*–—‘’“”]*$/;

// More targeted: a string is "suspicious" if it contains specific bad chars.
// We focus on the encoding-bleed classes from the audit.
const BAD_CHARS_RE = /[Ѐ-ӿԀ-ԯŢ-ţŞ-şĞ-ğİ-ı­]/g;
//  ^ Cyrillic blocks (Ѐ-ӿ already covers А-я) + Romanian Ţ/ţ + Turkish Ş/ş Ğ/ğ İ/ı
//  + U+00AD SOFT HYPHEN (invisible; breaks copy-paste and TTS in JSON item banks).

// Match `hr: '...'` / `hr: "..."` / `hr: \`...\``
// and similar fields that hold Croatian text.
const CRO_FIELD_RE =
  /(hr|text|paragraphs|q|a|prompt|response|tagline|intro|history|didYouKnow|name|title|en|note|exs?|ex)\s*:\s*(['"`])((?:[^\\]|\\.)*?)\2/g;

async function* walkTargets() {
  for (const rel of TARGETS) {
    const abs = resolve(REPO_ROOT, rel);
    let buf;
    try {
      buf = await readFile(abs, 'utf8');
    } catch {
      continue; // file may not exist on some setups
    }
    yield { rel, buf };
  }
}

function findBadInString(s) {
  if (!s) return null;
  const bad = [...s.matchAll(BAD_CHARS_RE)];
  if (bad.length === 0) return null;
  return bad.map((m) => ({ char: m[0], codePoint: m[0].codePointAt(0).toString(16) }));
}

// ── Serbism blocklist (owner directive, 2026-08-17) ──────────────────────────
// SINGLE SOURCE OF TRUTH: functions/api/_serbisms.js (output-observation
// directive, 2026-08-18) — the same rules screen the static content here AND
// the sampled live AI responses in /api/output-observatory. Add rules THERE.
// Standard Croatian only, high-precision, Unicode lookarounds (JS ASCII \b
// mis-fires around č/ć/đ/š/ž), bare-ekavica-only forms — see the module.
import { SERBISM_RULES } from '../functions/api/_serbisms.js';

/** English-gloss fields where a Serbian form may legitimately appear. */
const SERBISM_EXEMPT_FIELDS = new Set(['en', 'note']);

// ── The two checks are not the same check (2026-08-26) ───────────────────────
//
// ENCODING BLEED is always a defect. A Cyrillic homoglyph or a soft hyphen is a
// bug wherever it appears — including inside a deliberately WRONG multiple-choice
// option, which still has to render and still has to be copy-pasteable.
//
// A SERBISM is a defect in every string a learner can READ as Croatian — and
// that includes a distractor. Owner directive, 2026-08-26: no Serbian forms in
// content, full stop. A wrong answer is still rendered on screen as a clickable
// option, so a learner meets it whether or not they pick it; teaching the
// Croatian/Serbian contrast by putting the Serbian form in front of them is the
// one method this app does not use. Distractors must be wrong in some OTHER way
// — case, aspect, register, word order — of which there is no shortage.
//
// Only the ENGLISH fields (subtitle, en, tip) are exempt, as before.
//
// So the passes below separate them, and the classification is structural
// rather than regex-guessed wherever the data shape allows it.

function findSerbisms(fieldName, s) {
  if (!s || SERBISM_EXEMPT_FIELDS.has(fieldName)) return null;
  const hits = [];
  for (const rule of SERBISM_RULES) {
    const m = s.match(rule.re);
    if (m) hits.push({ word: m[0], use: rule.use });
  }
  return hits.length > 0 ? hits : null;
}

// ── Pass 2: distractor arrays, ENCODING ONLY ─────────────────────────────────
//
// CRO_FIELD_RE never matched `opts`/`options`/`choices`, so every
// multiple-choice array in every target file has been invisible to this lint —
// 356 arrays in exercises.js alone. A homoglyph in a wrong answer would have
// shipped unseen. Encoding only, for the reason above.
const ARRAY_FIELD_RE = /(opts|options|choices|distractors)\s*:\s*\[([^\]]*)\]/g;
const QUOTED_RE = /(['"`])((?:[^\\]|\\.)*?)\1/g;

function* arrayStrings(buf) {
  for (const m of buf.matchAll(ARRAY_FIELD_RE)) {
    for (const q of m[2].matchAll(QUOTED_RE)) {
      if (q[2].length > 0) yield { field: m[1], content: q[2], index: m.index };
    }
  }
}

// ── Pass 3: structured targets ───────────────────────────────────────────────
//
// dialogueScenarios.js could not be added to TARGETS at all: a regex cannot
// tell `opts[answer]` (correct Croatian) from `opts[1..3]` (deliberately
// wrong), so the whole file — the app's entire authored conversation bank, 38
// scenarios — was unlinted. Walking the real objects makes the distinction
// exact, because `answer` names which option is the correct one.
import { SCENARIOS } from '../src/components/practice/dialogueScenarios.js';

/** kind: 'croatian'/'distractor' → both checks · 'gloss' (English) → encoding only. */
function* dialogueStrings() {
  for (const s of SCENARIOS) {
    yield { loc: `${s.id}.title`, field: 'title', content: s.title, kind: 'croatian' };
    // Subtitles are English one-liners for the menu card.
    yield { loc: `${s.id}.subtitle`, field: 'subtitle', content: s.subtitle, kind: 'gloss' };
    for (let i = 0; i < s.turns.length; i++) {
      const t = s.turns[i];
      const at = `${s.id}.turns[${i}]`;
      yield { loc: `${at}.speaker`, field: 'speaker', content: t.speaker, kind: 'croatian' };
      yield { loc: `${at}.line`, field: 'line', content: t.line, kind: 'croatian' };
      yield { loc: `${at}.en`, field: 'en', content: t.en, kind: 'gloss' };
      // Tips are English teaching notes and may NAME a Serbian form in order to
      // contrast it — that is the lesson, not a leak.
      yield { loc: `${at}.tip`, field: 'tip', content: t.tip, kind: 'gloss' };
      for (let j = 0; j < t.opts.length; j++) {
        yield {
          loc: `${at}.opts[${j}]`,
          field: 'opts',
          content: t.opts[j],
          kind: j === t.answer ? 'croatian' : 'distractor',
        };
      }
    }
  }
}

// ── Lesson tables, highlights and summaries ──────────────────────────────────
//
// lessons.js has been in TARGETS for a long time, which made it look covered.
// It was covered only where CRO_FIELD_RE matches — `hr`, `title`, `q`, `note`.
// It never matched a TABLE, and the tables are where a lesson keeps most of its
// vocabulary: every `rows` cell in every lesson has been invisible. The A1
// expansion (2026-08-28) put roughly 150 new Croatian cells in tables and found
// the gap while mutation-testing the guard on its own content.
//
// Walked structurally rather than by regex for the same reason as the dialogue
// bank: only the data knows which cell is which. A `rows` cell is Croatian a
// learner reads, so it gets both checks; `headers` are column labels and
// `points` are summary bullets that mix both languages, so headers take the
// encoding check only.
import { LESSONS } from '../functions/api/content/_data/lessons.js';

// THE ONE CARVE-OUT, and it is deliberately a single lesson id rather than a
// field name or a pattern. `language-identity` (C1) is a contrastive lesson
// whose table has a column headed Serbian: naming the form IS the teaching,
// exactly as the dialogue bank's English `tip` field may name one in order to
// contrast it. The owner directive it sits against — never put a Serbian form
// in front of a learner — was written about DISTRACTORS, where the learner
// meets the form as a clickable answer with nothing marking it as foreign.
// A labelled comparison column is the opposite case, and this app's audience is
// a diaspora that grew up hearing both varieties mixed.
//
// Encoding is still checked here. Only the Serbism check is suspended, and only
// inside these lessons, so a homoglyph still fails the build.
// If the owner decides one of these lessons should not name the forms it names,
// delete the entry — nothing else depends on this set.
//
// `dijalekti-dubinski` (C2, added 2026-08-28) is the second entry and it is a
// DIFFERENT collision, worth stating so nobody generalises from the first.
// Kajkavian realises the old yat as e — lep, mleko — and that is a Croatian
// dialect form spoken across the north-west of the country, including Zagreb.
// It is homographic with Serbian ekavica and the blocklist cannot tell them
// apart by pattern, because there is no pattern to tell apart: the strings are
// identical. The lesson is the app's explanation of the three-way yat reflex
// (lijep / lep / lip), which is the single most useful diagnostic a learner has
// for placing a speaker, and every occurrence is explicitly labelled kajkavian.
// Flagging it as a Serbism would be the lint stating something false about
// Croatian, which is worse than the gap it leaves.
//
// The scope is the whole lesson rather than its tables because the same labelled
// contrast appears in a highlight and a summary point. That is a real cost: a
// genuine Serbism inside this one lesson would now pass. It is accepted here and
// should not be accepted casually — this list can only shrink.
const CONTRASTIVE_LESSONS = new Set(['language-identity', 'dijalekti-dubinski']);

function* lessonStrings() {
  for (const l of LESSONS) {
    for (let i = 0; i < (l.slides || []).length; i++) {
      const s = l.slides[i];
      const at = `${l.id}.slides[${i}]`;
      // 'gloss' = encoding checked, Serbism check suspended. Contrastive lessons
      // name non-standard forms as their subject matter, so every Croatian-kind
      // string in them is glossed; encoding still fails the build everywhere.
      const kind = CONTRASTIVE_LESSONS.has(l.id) ? 'gloss' : 'croatian';
      if (typeof s.highlight === 'string') {
        yield { loc: `${at}.highlight`, field: 'highlight', content: s.highlight, kind };
      }
      for (const h of Array.isArray(s.headers) ? s.headers : []) {
        yield { loc: `${at}.headers`, field: 'headers', content: h, kind: 'gloss' };
      }
      for (let r = 0; r < (Array.isArray(s.rows) ? s.rows : []).length; r++) {
        for (const cell of Array.isArray(s.rows[r]) ? s.rows[r] : []) {
          yield { loc: `${at}.rows[${r}]`, field: 'rows', content: cell, kind };
        }
      }
      for (const p of Array.isArray(s.points) ? s.points : []) {
        yield { loc: `${at}.points`, field: 'points', content: p, kind };
      }
    }
  }
}

const STRUCTURED = [
  { rel: 'src/components/practice/dialogueScenarios.js', strings: dialogueStrings },
  { rel: 'lessons.js + per-level lesson files (tables)', strings: lessonStrings },
];

function checkStructured() {
  const out = [];
  for (const { rel, strings } of STRUCTURED) {
    const findings = [];
    for (const { loc, field, content, kind } of strings()) {
      if (typeof content !== 'string' || content.length === 0) continue;
      const bad = findBadInString(content);
      if (bad) findings.push({ line: loc, field, snippet: content.slice(0, 80), badChars: bad });
      if (kind !== 'gloss') {
        const serbisms = findSerbisms(field, content);
        if (serbisms) findings.push({ line: loc, field, snippet: content.slice(0, 80), serbisms });
      }
    }
    out.push({ rel, findings });
  }
  return out;
}

async function main() {
  let totalFindings = 0;
  for await (const { rel, buf } of walkTargets()) {
    const findings = [];
    for (const m of buf.matchAll(CRO_FIELD_RE)) {
      // m[1] = field name, m[3] = string contents
      // Skip English-only fields by heuristic: `en` is the English translation,
      // but it CAN contain a Croatian word in the gloss (rare). Allow it.
      const fieldName = m[1];
      const content = m[3];
      // Skip very short non-text content
      if (content.length === 0) continue;
      const bad = findBadInString(content);
      if (bad) {
        const line = buf.slice(0, m.index).split('\n').length;
        findings.push({
          line,
          field: fieldName,
          snippet: content.slice(0, 80),
          badChars: bad,
        });
      }
      const serbisms = findSerbisms(fieldName, content);
      if (serbisms) {
        const line = buf.slice(0, m.index).split('\n').length;
        findings.push({
          line,
          field: fieldName,
          snippet: content.slice(0, 80),
          serbisms,
        });
      }
    }
    // Distractor arrays: encoding only (see ARRAY_FIELD_RE).
    for (const { field, content, index } of arrayStrings(buf)) {
      const bad = findBadInString(content);
      if (bad) {
        findings.push({
          line: buf.slice(0, index).split('\n').length,
          field,
          snippet: content.slice(0, 80),
          badChars: bad,
        });
      }
    }
    if (findings.length > 0) {
      console.error(`\n=== ${rel} ===`);
      for (const f of findings) {
        const chars = f.badChars
          ? f.badChars.map((b) => `${b.char} (U+${b.codePoint.toUpperCase()})`).join(', ')
          : f.serbisms.map((s) => `Serbism "${s.word}" → use ${s.use}`).join(', ');
        console.error(`  ${rel}:${f.line}  [${f.field}]  ${chars}`);
        console.error(`    "${f.snippet.replace(/\n/g, ' ')}..."`);
      }
      totalFindings += findings.length;
    }
  }
  for (const { rel, findings } of checkStructured()) {
    if (findings.length === 0) continue;
    console.error(`\n=== ${rel} ===`);
    for (const f of findings) {
      const chars = f.badChars
        ? f.badChars.map((b) => `${b.char} (U+${b.codePoint.toUpperCase()})`).join(', ')
        : f.serbisms.map((s) => `Serbism "${s.word}" → use ${s.use}`).join(', ');
      console.error(`  ${rel}  ${f.line}  [${f.field}]  ${chars}`);
      console.error(`    "${f.snippet.replace(/\n/g, ' ')}..."`);
    }
    totalFindings += findings.length;
  }

  if (totalFindings > 0) {
    console.error('');
    console.error(`✖ Croatian text lint: ${totalFindings} finding(s).`);
    console.error('  Encoding bleed: Croatian standard Latin is the only script allowed, in');
    console.error('  every string — a homoglyph in a wrong answer is still a bug.');
    console.error('  Serbism: reported in every Croatian string, distractors included.');
    process.exit(1);
  } else {
    console.log(
      '✓ Croatian text lint: 0 findings across',
      TARGETS.length + STRUCTURED.length,
      'files (' + STRUCTURED.length + ' walked structurally).',
    );
  }
}

await main();
