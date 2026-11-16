#!/usr/bin/env node
// americanEnglish.mjs — every English string in the app is AMERICAN English.
//
// Owner rule, 2026-11-15: "this is made by American Croatians so the English should be
// based off of American English not British … a rule for the entire application".
// British spelling and vocabulary had spread through the lessons unnoticed, because no
// rule said otherwise and nothing checked. This is the check.
//
//   node scripts/americanEnglish.mjs            report every finding (file:line)
//   node scripts/americanEnglish.mjs --summary  counts by word and by directory
//   node scripts/americanEnglish.mjs --fix      rewrite the SPELLING findings in place
//
// TWO KINDS OF RULE:
//   SPELLING — one right answer whatever the sentence (colour → color). --fix applies them.
//   USAGE    — the American word depends on the sentence (flat → apartment, but a "flat"
//              tongue stays). Reported only; a person or a model reads each one.
//
// WHAT IS SCANNED: the text inside quotes and backticks, and JSX text — never
// identifiers, object keys, imports, or a lone lower-case token that is an id
// ('colours' as a lesson id or a route key is not English prose).
//
// src/tests/americanEnglish.test.ts runs this over the tree and fails the build on a
// finding that is not in ALLOW below.

import fs from 'node:fs';
import path from 'node:path';

export const ROOTS = ['src', 'functions', 'public/locales'];
const SKIP_DIR = /(^|\/)(node_modules|dist|tests|__tests__|\.claude|coverage)(\/|$)/;
const EXT = /\.(js|jsx|ts|tsx|mjs|json)$/;

/** [british, american] — applied to whole words, case preserved. */
export const SPELLING = [
  ['enrol', 'enroll'], ['enrols', 'enrolls'], ['enrolment', 'enrollment'], ['enrolments', 'enrollments'],
  ['practises', 'practices'], ['recognisable', 'recognizable'], ['recognising', 'recognizing'], ['recognises', 'recognizes'],
  ['flatmate', 'roommate'], ['flatmates', 'roommates'], ['aluminium', 'aluminum'], ['skilful', 'skillful'],
  ['fulfil', 'fulfill'], ['fulfils', 'fulfills'], ['fulfilment', 'fulfillment'], ['apologises', 'apologizes'], ['apologised', 'apologized'], ['apologising', 'apologizing'],
  ['realisation', 'realization'], 
  ['colour', 'color'], ['colours', 'colors'], ['coloured', 'colored'], ['colourful', 'colorful'],
  ['favourite', 'favorite'], ['favourites', 'favorites'],
  ['neighbour', 'neighbor'], ['neighbours', 'neighbors'], ['neighbourhood', 'neighborhood'],
  ['neighbouring', 'neighboring'],
  ['honour', 'honor'], ['honours', 'honors'], ['honoured', 'honored'],
  ['humour', 'humor'], ['flavour', 'flavor'], ['flavours', 'flavors'],
  ['behaviour', 'behavior'], ['behaviours', 'behaviors'], ['labour', 'labor'],
  ['harbour', 'harbor'], ['harbours', 'harbors'], ['rumour', 'rumor'], ['rumours', 'rumors'],
  ['centre', 'center'], ['centres', 'centers'], ['centred', 'centered'],
  ['theatre', 'theater'], ['theatres', 'theaters'],
  ['metre', 'meter'], ['metres', 'meters'], ['kilometre', 'kilometer'], ['kilometres', 'kilometers'],
  ['centimetre', 'centimeter'], ['centimetres', 'centimeters'],
  ['litre', 'liter'], ['litres', 'liters'], ['fibre', 'fiber'],
  ['grey', 'gray'],
  ['travelling', 'traveling'], ['travelled', 'traveled'], ['traveller', 'traveler'],
  ['travellers', 'travelers'], ['cancelled', 'canceled'], ['cancelling', 'canceling'],
  ['labelled', 'labeled'], ['labelling', 'labeling'], ['modelled', 'modeled'],
  ['modelling', 'modeling'], ['jewellery', 'jewelry'], ['marvellous', 'marvelous'],
  ['organise', 'organize'], ['organised', 'organized'], ['organises', 'organizes'],
  ['organising', 'organizing'], ['organisation', 'organization'], ['organisations', 'organizations'],
  ['recognise', 'recognize'], ['recognised', 'recognized'], ['recognises', 'recognizes'],
  ['recognising', 'recognizing'], ['realise', 'realize'], ['realised', 'realized'],
  ['realises', 'realizes'], ['realising', 'realizing'],
  ['apologise', 'apologize'], ['apologised', 'apologized'], ['apologising', 'apologizing'],
  ['emphasise', 'emphasize'], ['emphasised', 'emphasized'], ['emphasises', 'emphasizes'],
  ['memorise', 'memorize'], ['memorised', 'memorized'], ['memorising', 'memorizing'],
  ['summarise', 'summarize'], ['summarised', 'summarized'], ['specialise', 'specialize'],
  ['specialised', 'specialized'], ['criticise', 'criticize'], ['criticised', 'criticized'],
  ['practise', 'practice'], ['practised', 'practiced'], ['practising', 'practicing'],
  ['analyse', 'analyze'], ['analysed', 'analyzed'], ['analysing', 'analyzing'],
  ['defence', 'defense'], ['offence', 'offense'], ['licence', 'license'],
  ['programme', 'program'], ['programmes', 'programs'],
  ['cheque', 'check'], ['cheques', 'checks'], ['pyjamas', 'pajamas'],
  ['maths', 'math'], ['learnt', 'learned'], ['spelt', 'spelled'], ['dreamt', 'dreamed'],
  ['whilst', 'while'], ['towards', 'toward'], ['afterwards', 'afterward'],
  ['mum', 'mom'], ['mums', 'moms'], ['mummy', 'mommy'],
  ['tyre', 'tire'], ['tyres', 'tires'], ['aeroplane', 'airplane'], ['aeroplanes', 'airplanes'],
  ['catalogue', 'catalog'], ['dialogue', 'dialogue'], // dialogue is fine in American English
  ['yoghurt', 'yogurt'], ['moustache', 'mustache'], ['cosy', 'cozy'], ['storey', 'story'],
].filter(([a, b]) => a !== b);

/** British vocabulary and usage: the right American word depends on the sentence. */
export const USAGE = [
  ['cinema', 'the movies / movie theater'], ['flat', 'apartment (when it is a home)'],
  ['flats', 'apartments'], ['lift', 'elevator (in a building)'], ['trousers', 'pants'],
  ['jumper', 'sweater'], ['trainers', 'sneakers'], ['pupil', 'student'], ['pupils', 'students'],
  ['holiday', 'vacation (time off)'], ['holidays', 'vacation'], ['football', 'soccer'],
  ['footballer', 'soccer player'], ['footballers', 'soccer players'], ['autumn', 'fall'],
  ['fortnight', 'two weeks'], ['shop assistant', 'salesperson'], ['wardrobe', 'closet'],
  ['petrol', 'gas'], ['motorway', 'highway'], ['pavement', 'sidewalk'], ['car park', 'parking lot'],
  ['queue', 'line'], ['queues', 'lines'], ['queuing', 'waiting in line'], ['timetable', 'schedule'],
  ['rubbish', 'trash'], ['biscuit', 'cookie'], ['biscuits', 'cookies'], ['crisps', 'chips'],
  ['sweets', 'candy'], ['chemist', 'pharmacy'], ['postcode', 'zip code'],
  ['mobile phone', 'cell phone'], ['at university', 'in college'],
  ['secondary school', 'high school'], ['primary school', 'elementary school'],
  ['return ticket', 'round-trip ticket'], ['single ticket', 'one-way ticket'],
  ['at the weekend', 'on the weekend'], ['at weekends', 'on weekends'],
  ['full stop', 'period'], ['inverted commas', 'quotation marks'],
  ['booking', 'reservation'], ['lorry', 'truck'], ['nappy', 'diaper'], ['torch', 'flashlight'],
  ['cooker', 'stove'], ['rang', 'called'], ['ring me', 'call me'],
  ['surgery', "doctor's office (if a GP's)"], ['granny', 'grandma'], ['grandad', 'grandpa'],
  ['headmaster', 'principal'], ['Mr', 'Mr.'], ['Mrs', 'Mrs.'], ['Dr', 'Dr.'],
];

/** British spellings that are ALSO Croatian word forms (pola litre, dva metra → metre,
 *  centre grada, licence): only an English sentence is touched. */
export const ALSO_CROATIAN = new Set([
  'metre', 'litre', 'centre', 'kilometre', 'centimetre', 'licence', 'programme', 'post',
]);

/** Is this literal English prose? Two or more English function words. */
const EN_WORD = /(?<![\p{L}])(the|a|an|of|is|are|was|to|and|in|for|with|from|it|this|that|you|your|at|on|not|or|by|as|be|we|they|he|she|has|have|do|does|what|which|when|how)(?![\p{L}])/giu;
export const looksEnglish = (text) => (text.match(EN_WORD) || []).length >= 2;

/**
 * Findings that are correct as they stand. Key: "file::matched text::the literal".
 * Add an entry only with a reason a reader can check.
 */
export const ALLOW = new Set([]);

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordRe = (w) => new RegExp(`(?<![\\p{L}\\p{N}_-])${esc(w)}(?![\\p{L}\\p{N}_-])`, 'giu');
// "Mr" / "Mrs" / "Dr" only when a period does not already follow and a name does.
const TITLE = /(?<![\p{L}\p{N}])(Mr|Mrs|Dr)(?=\s+\p{Lu})/gu;

export function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (SKIP_DIR.test(p)) continue;
    if (e.isDirectory()) walk(p, out);
    else if (EXT.test(e.name) && !/\.test\./.test(e.name)) out.push(p);
  }
  return out;
}

// IDENTIFIERS ARE NOT PROSE. 'colours' is a lesson id, 'football' a route key, 'autumn' a
// season key: rewriting one breaks the app. A lone lower-case token is an identifier when
// the SAME token is used somewhere in an unmistakable identifier position (id: 'x',
// === 'x', case 'x', setScr('x') …). Those tokens are collected first, over the whole tree,
// and then skipped wherever they stand alone — so a list of lesson ids is safe too.
const ID_POSITION =
  /(?:\b(?:id|key|screen|scr|go|lessonId|route|currentScreen|curEx|category|cat|topic|kind|season|tab)\s*(?::|===|!==|==|=)\s*|\bcase\s+|\b(?:setScr|sCurEx|navigate|launch[A-Za-z]*|setTab|requestUnitTest|includes)\(\s*|[|]\s*)$/;
const TOKEN = /^[a-z][a-z0-9]*$/;

export function collectIds(files) {
  const ids = new Set();
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8');
    const re = /(['"`])([a-z][a-z0-9]*)\1/g;
    let m;
    while ((m = re.exec(src))) {
      const lineStart = src.lastIndexOf('\n', m.index) + 1;
      if (ID_POSITION.test(src.slice(lineStart, m.index))) ids.add(m[2]);
      else if (/^\s*:/.test(src.slice(m.index + m[0].length, m.index + m[0].length + 3))) ids.add(m[2]);
    }
  }
  return ids;
}
let IDS = new Set();
export const setIds = (ids) => (IDS = ids);

/** Every prose literal of a source text: { text, index }. */
export function literals(src) {
  const out = [];
  const re = /'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"|`((?:[^`\\]|\\.)*)`|>([^<>{}\n]{2,})</g;
  let m;
  while ((m = re.exec(src))) {
    const text = m[1] ?? m[2] ?? m[3] ?? m[4];
    if (!text) continue;
    const isJsxText = m[4] !== undefined;
    const lineStart = src.lastIndexOf('\n', m.index) + 1;
    const before = src.slice(lineStart, m.index);
    if (/^\s*(import|export)\b.*\bfrom\s*$/.test(before) || /^\s*import\s*$/.test(before)) continue;
    if (/\brequire\(\s*$|\bimport\(\s*$/.test(before)) continue;
    // A lone token that is used as an identifier somewhere is never prose.
    if (!isJsxText && TOKEN.test(text) && IDS.has(text)) continue;
    if (!isJsxText && !/\s/.test(text)) {
      if (/[/.]/.test(text) && /\.(js|ts|tsx|png|jpg|svg|json|css|mp3|wav)$|^\.{0,2}\//.test(text)) continue;
    }
    out.push({ text, index: m.index + (m[0].length - text.length - (isJsxText ? 1 : 1)) });
  }
  return out;
}

export function scanFile(file, src = fs.readFileSync(file, 'utf8')) {
  const findings = [];
  for (const lit of literals(src)) {
    const line = src.slice(0, lit.index).split('\n').length;
    const push = (kind, match, use) => {
      const key = `${file}::${match}::${lit.text}`;
      if (!ALLOW.has(key)) findings.push({ file, line, kind, match, use, literal: lit.text });
    };
    const english = looksEnglish(lit.text);
    for (const [uk, us] of SPELLING) {
      const shared = ALSO_CROATIAN.has(uk);
      if (shared && !english) continue;
      const re = wordRe(uk);
      let m;
      // A spelling that is also a Croatian form is never rewritten blindly: an English
      // explanation may be QUOTING the Croatian ("pola litre mlijeka — two genitives").
      while ((m = re.exec(lit.text))) push(shared ? 'usage' : 'spelling', m[0], us);
    }
    // Vocabulary is judged only in English prose: "lift", "flat", "post" are Croatian words too.
    if (!english) continue;
    for (const [uk, us] of USAGE) {
      if (uk === 'Mr' || uk === 'Mrs' || uk === 'Dr') continue;
      const re = wordRe(uk);
      let m;
      while ((m = re.exec(lit.text))) push('usage', m[0], us);
    }
    let t;
    TITLE.lastIndex = 0;
    while ((t = TITLE.exec(lit.text))) push('usage', t[0], `${t[0]}.`);
  }
  return findings;
}

const caseLike = (from, to) =>
  from === from.toUpperCase() && from.length > 1
    ? to.toUpperCase()
    : from[0] === from[0].toUpperCase()
      ? to[0].toUpperCase() + to.slice(1)
      : to;

/** Rewrite the SPELLING findings of one file, inside literals only. Returns the count. */
export function fixFile(file) {
  let src = fs.readFileSync(file, 'utf8');
  const lits = literals(src).sort((a, b) => b.index - a.index);
  let n = 0;
  for (const lit of lits) {
    let text = lit.text;
    for (const [uk, us] of SPELLING) {
      if (ALSO_CROATIAN.has(uk)) continue; // read in context, never by script
      text = text.replace(wordRe(uk), (m) => {
        n++;
        return caseLike(m, us);
      });
    }
    if (text !== lit.text) src = src.slice(0, lit.index) + text + src.slice(lit.index + lit.text.length);
  }
  if (n) fs.writeFileSync(file, src);
  return n;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const files = ROOTS.flatMap((r) => walk(r));
  setIds(collectIds(files));
  if (process.argv.includes('--fix')) {
    let total = 0;
    for (const f of files) total += fixFile(f);
    console.log(`fixed ${total} spelling findings`);
    process.exit(0);
  }
  const all = files.flatMap((f) => scanFile(f));
  if (process.argv.includes('--summary')) {
    const by = (fn) => Object.entries(all.reduce((a, x) => ((a[fn(x)] = (a[fn(x)] || 0) + 1), a), {})).sort((a, b) => b[1] - a[1]);
    console.log('BY KIND', JSON.stringify(by((x) => x.kind)));
    console.log('BY WORD', by((x) => `${x.kind}:${x.match.toLowerCase()}`).slice(0, 60).map(([k, n]) => `${k}×${n}`).join('  '));
    console.log('BY DIR', by((x) => x.file.split('/').slice(0, 4).join('/')).slice(0, 25).map(([k, n]) => `${k}×${n}`).join('  '));
  } else for (const f of all) console.log(`${f.file}:${f.line}  [${f.kind}] ${f.match} → ${f.use}   «${f.literal.slice(0, 90)}»`);
  console.log(`\n${all.length} findings in ${files.length} files`);
  process.exit(all.length ? 1 : 0);
}
