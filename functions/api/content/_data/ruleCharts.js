// functions/api/content/_data/ruleCharts.js
//
// THE SAME CHART, FOR THE OTHER RULES (2026-10-29). The owner's padeži charts
// (caseCharts.js) put one rule on one page: the ending marked in every cell. This
// file does that for the six other places where learners need a master table, not a
// scattering of small ones:
//
//   present-tense endings   past-tense endings    pronouns by case
//   adjective endings       clitic slots          number words with nouns
//   aspect pairs
//
// Every form here is checked against something the app already owns (the VERBS
// dataset, the declension engine, the pronoun table, the lessons' own tables) in
// src/tests/ruleCharts.test.tsx — a wrong ending in a chart is worse than no chart.
// The renderer is CaseChartVisual (`kind: 'ending-chart'`).
//
// Marks: { word, base, kind, end? } as in caseCharts.js; `start` marks the first
// letters instead (a verb's prefix); `cell` names the declension cell a noun stands
// in, where the row does not (a number row: dva DANA is the genitive singular).

import { N, A, L, GENDERS, SINGULAR_ROWS } from './caseCharts.js';

// A whole word picked out (a clitic, a different verb) — the same underline as an ending.
const W = (word) => ({ word, base: '', kind: 'a', end: word });
// Letters at the START of a word (a perfective prefix).
const S = (word, start) => ({ word, base: '', kind: 'a', start });
// A noun in a stated cell.
const Nc = (cell, word, base, end) => ({ ...N(word, base, end), cell });

const chart = ({ title, caption, highlight, alt, corner, numbered, colWidth, columns, rows }) => ({
  type: 'visual',
  kind: 'ending-chart',
  title,
  caption,
  highlight: highlight || null,
  alt,
  corner,
  numbered,
  colWidth,
  columns,
  rows,
});

// ─── Persons ──────────────────────────────────────────────────────────────────
const PERSONS = [
  { key: 'ja', name: 'ja', nameEn: 'I' },
  { key: 'ti', name: 'ti', nameEn: 'you' },
  { key: 'on', name: 'on · ona · ono', nameEn: 'he · she · it' },
  { key: 'mi', name: 'mi', nameEn: 'we' },
  { key: 'vi', name: 'vi', nameEn: 'you (plural or formal)' },
  { key: 'oni', name: 'oni · one · ona', nameEn: 'they' },
];
const PERSON_CORNER = { hr: 'Osoba', en: 'Person' };

// ─── 1. Present tense ─────────────────────────────────────────────────────────
// Four verbs, one per ending family. The stem is what the four persons share.
const PRESENT = [
  { stem: 'čit', forms: ['čitam', 'čitaš', 'čita', 'čitamo', 'čitate', 'čitaju'] },
  { stem: 'govor', forms: ['govorim', 'govoriš', 'govori', 'govorimo', 'govorite', 'govore'] },
  { stem: 'piš', forms: ['pišem', 'pišeš', 'piše', 'pišemo', 'pišete', 'pišu'] },
  { stem: 'kupuj', forms: ['kupujem', 'kupuješ', 'kupuje', 'kupujemo', 'kupujete', 'kupuju'] },
];
export const PRESENT_VERBS = ['čitati', 'govoriti', 'pisati', 'kupovati'];

export function presentChartSlide({ title, caption }) {
  return chart({
    title,
    caption,
    alt: 'A chart of the Croatian present tense. Each row is a person; the four columns are four verbs, one for each ending family (čitati, govoriti, pisati, kupovati), and each cell gives the verb with its personal ending marked.',
    corner: PERSON_CORNER,
    numbered: false,
    colWidth: 130,
    columns: [
      { key: 'am', hr: 'čitati', en: 'to read · -am' },
      { key: 'im', hr: 'govoriti', en: 'to speak · -im' },
      { key: 'em', hr: 'pisati', en: 'to write · -em' },
      { key: 'jem', hr: 'kupovati', en: 'to buy · -jem' },
    ],
    rows: PERSONS.map((p, i) => ({
      ...p,
      asks: [],
      cells: PRESENT.map((v) => [L(v.forms[i], A(v.forms[i], v.stem))]),
    })),
  });
}

// ─── 2. Past tense ────────────────────────────────────────────────────────────
// čitati, from the VERBS dataset's own past forms. The neuter singular is only ever
// said of a thing (it is shown for on/ono and the neuter plural), so ja/ti/mi/vi get a dash.
export const PAST = {
  m: ['čitao sam', 'čitao si', 'čitao je', 'čitali smo', 'čitali ste', 'čitali su'],
  f: ['čitala sam', 'čitala si', 'čitala je', 'čitale smo', 'čitale ste', 'čitale su'],
  n: [null, null, 'čitalo je', null, null, 'čitala su'],
};
const PAST_GENDERS = [
  { key: 'm', hr: 'Muški rod', en: 'Masculine' },
  { key: 'f', hr: 'Ženski rod', en: 'Feminine' },
  { key: 'n', hr: 'Srednji rod', en: 'Neuter' },
];
export function pastChartSlide({ title, caption }) {
  return chart({
    title,
    caption,
    alt: 'A chart of the Croatian past tense of čitati. Each row is a person; the three columns are masculine, feminine and neuter, and each cell gives the participle with its gender ending marked, followed by the auxiliary (sam, si, je, smo, ste, su).',
    corner: PERSON_CORNER,
    numbered: false,
    colWidth: 150,
    columns: PAST_GENDERS,
    rows: PERSONS.map((p, i) => ({
      ...p,
      asks: [],
      cells: PAST_GENDERS.map((g) => {
        const form = PAST[g.key][i];
        if (!form) return [L('—')];
        const participle = form.split(' ')[0];
        return [L(form, A(participle, 'čita'))];
      }),
    })),
  });
}

// ─── 3. Pronouns by case ──────────────────────────────────────────────────────
// Long form first, the short (clitic) form beside it. The vocative has no pronoun
// forms of its own (ti! vi!) so it is left out; the chart says so.
export const PRONOUN_COLUMNS = [
  { key: 'ja', hr: 'ja', en: 'I' },
  { key: 'ti', hr: 'ti', en: 'you' },
  { key: 'on', hr: 'on · ono', en: 'he · it' },
  { key: 'ona', hr: 'ona', en: 'she' },
  { key: 'mi', hr: 'mi', en: 'we' },
  { key: 'vi', hr: 'vi', en: 'you (pl.)' },
  { key: 'oni', hr: 'oni · one · ona', en: 'they' },
];
// [long form(s), short form] per column, per case. `null` short = none.
export const PRONOUN_FORMS = {
  Nsg: [
    [['ja']],
    [['ti']],
    [['on', 'ono']],
    [['ona']],
    [['mi']],
    [['vi']],
    [['oni', 'one', 'ona']],
  ],
  Gsg: [
    [['mene'], 'me'],
    [['tebe'], 'te'],
    [['njega'], 'ga'],
    [['nje'], 'je'],
    [['nas']],
    [['vas']],
    [['njih'], 'ih'],
  ],
  Dsg: [
    [['meni'], 'mi'],
    [['tebi'], 'ti'],
    [['njemu'], 'mu'],
    [['njoj'], 'joj'],
    [['nama'], 'nam'],
    [['vama'], 'vam'],
    [['njima'], 'im'],
  ],
  Asg: [
    [['mene'], 'me'],
    [['tebe'], 'te'],
    [['njega'], 'ga'],
    [['nju'], 'je / ju'],
    [['nas']],
    [['vas']],
    [['njih'], 'ih'],
  ],
  Lsg: [[['meni']], [['tebi']], [['njemu']], [['njoj']], [['nama']], [['vama']], [['njima']]],
  Isg: [[['mnom']], [['tobom']], [['njim']], [['njom']], [['nama']], [['vama']], [['njima']]],
};
const PRONOUN_ROWS_META = ['Nsg', 'Gsg', 'Dsg', 'Asg', 'Lsg', 'Isg'];
export function pronounChartSlide({ title, caption, highlight }) {
  return chart({
    title,
    caption,
    highlight,
    alt: 'A chart of the Croatian personal pronouns in six cases. Each row is a case; the seven columns are ja, ti, on or ono, ona, mi, vi and oni. Each cell gives the full form and, in brackets where there is one, the short form.',
    corner: { hr: 'Padeži', en: 'Cases' },
    numbered: false, // six rows, so 1–6 would disagree with the seven-case chart's numbering
    colWidth: 104,
    columns: PRONOUN_COLUMNS,
    rows: PRONOUN_ROWS_META.map((key) => {
      const meta = SINGULAR_ROWS.find((r) => r.key === key);
      return {
        key,
        name: meta.name,
        nameEn: meta.nameEn,
        asks: meta.asks,
        cells: PRONOUN_FORMS[key].map(([longs, short]) => {
          // o + locative; s + instrumental, but sa before mnom (sa mnom).
          const prefix =
            key === 'Lsg' ? 'o ' : key === 'Isg' ? (longs[0] === 'mnom' ? 'sa ' : 's ') : '';
          const shown = longs.join(' · ') + (short ? ` (${short})` : '');
          return [L(`${prefix}${shown}`)];
        }),
      };
    }),
  });
}
// ─── 4. Adjective endings ─────────────────────────────────────────────────────
// 'nov' + ending, with a noun of each gender so the learner reads the PAIR agree.
// Accusative masculine has two forms: a thing (novi grad) and a person (novog prijatelja).
const ADJ_SG = {
  Nsg: [
    L('nova kuća', A('nova', 'nov'), N('kuća', 'kuća')),
    L('novo selo', A('novo', 'nov'), N('selo', 'selo')),
    L('novi grad', A('novi', 'nov'), N('grad', 'grad')),
  ],
  Gsg: [
    L('nove kuće', A('nove', 'nov'), N('kuće', 'kuća')),
    L('novog sela', A('novog', 'nov'), N('sela', 'selo')),
    L('novog grada', A('novog', 'nov'), N('grada', 'grad')),
  ],
  Dsg: [
    L('novoj kući', A('novoj', 'nov'), N('kući', 'kuća')),
    L('novom selu', A('novom', 'nov'), N('selu', 'selo')),
    L('novom gradu', A('novom', 'nov'), N('gradu', 'grad')),
  ],
  Asg: [
    L('novu kuću', A('novu', 'nov'), N('kuću', 'kuća')),
    L('novo selo', A('novo', 'nov'), N('selo', 'selo')),
    L('novi grad', A('novi', 'nov'), N('grad', 'grad')),
    L('novog prijatelja', A('novog', 'nov'), N('prijatelja', 'prijatelj')),
  ],
  Vsg: [
    L('nova kućo', A('nova', 'nov'), N('kućo', 'kuća')),
    L('novo selo', A('novo', 'nov'), N('selo', 'selo')),
    L('novi grade', A('novi', 'nov'), N('grade', 'grad')),
  ],
  Lsg: [
    L('novoj kući', A('novoj', 'nov'), N('kući', 'kuća')),
    L('novom selu', A('novom', 'nov'), N('selu', 'selo')),
    L('novom gradu', A('novom', 'nov'), N('gradu', 'grad')),
  ],
  Isg: [
    L('novom kućom', A('novom', 'nov'), N('kućom', 'kuća')),
    L('novim selom', A('novim', 'nov'), N('selom', 'selo')),
    L('novim gradom', A('novim', 'nov'), N('gradom', 'grad')),
  ],
};
export function adjectiveChartSlide({ title, caption, highlight }) {
  const rows = SINGULAR_ROWS.map((r) => {
    const lines = ADJ_SG[r.key];
    // Accusative masculine is the one cell with two lines; the others have one per gender.
    const cells =
      r.key === 'Asg' ? [[lines[0]], [lines[1]], [lines[2], lines[3]]] : lines.map((ln) => [ln]);
    return { key: r.key, name: r.name, nameEn: r.nameEn, asks: r.asks, cells };
  });
  return chart({
    title,
    caption,
    highlight,
    alt: 'A chart of Croatian adjective endings in the singular. Each row is a case; the three columns are feminine, neuter and masculine, and each cell gives the adjective nov- with a noun of that gender, with both endings marked.',
    corner: { hr: 'Padeži', en: 'Cases' },
    columns: GENDERS,
    rows,
  });
}

// ─── 5. Clitic slots ──────────────────────────────────────────────────────────
// The fixed order of the small words that sit in second position. Position 2 holds
// whichever auxiliary the sentence has (they never occur together); je is last.
export const CLITIC_SLOTS = [
  {
    key: 'li',
    name: 'li',
    nameEn: 'the question word',
    words: [L('li')],
    examples: [L('Govoriš li hrvatski?', W('li'))],
  },
  {
    key: 'aux',
    name: 'sam · si · smo · ste · su',
    nameEn: 'the auxiliary (or bih · bi · bismo · biste)',
    words: [L('sam, si, smo, ste, su'), L('bih, bi, bismo, biste')],
    examples: [L('Jučer sam radio.', W('sam')), L('Ja bih došao.', W('bih'))],
  },
  {
    key: 'dat',
    name: 'mi · ti · mu · joj · nam · vam · im',
    nameEn: 'the dative (to me, to you…)',
    words: [L('mi, ti, mu, joj, nam, vam, im')],
    examples: [L('Kupio sam mu knjigu.', W('mu'))],
  },
  {
    key: 'acc',
    name: 'me · te · ga · je · nas · vas · ih',
    nameEn: 'the accusative (me, you…)',
    words: [L('me, te, ga, je (ju), nas, vas, ih')],
    examples: [L('Vidio sam ga.', W('ga'))],
  },
  {
    key: 'se',
    name: 'se',
    nameEn: 'the reflexive',
    words: [L('se')],
    examples: [L('Zovem se Ivan.', W('se'))],
  },
  {
    key: 'je',
    name: 'je',
    nameEn: 'the 3rd-person auxiliary — always last',
    words: [L('je')],
    examples: [L('Ona mu ga je dala.', W('je'))],
  },
];
export function cliticChartSlide({ title, caption }) {
  return chart({
    title,
    caption,
    alt: 'A chart of the Croatian clitic order. Each row is a slot, numbered in the order the words must appear: li, the auxiliary, the dative, the accusative, se, and finally je. Each row lists the words that fill the slot and gives an example sentence with that word marked.',
    corner: { hr: 'Mjesto', en: 'Slot' },
    colWidth: 190,
    columns: [
      { key: 'words', hr: 'Riječi', en: 'Words' },
      { key: 'ex', hr: 'Primjer', en: 'Example' },
    ],
    rows: CLITIC_SLOTS.map((s) => ({
      key: s.key,
      name: s.name,
      nameEn: s.nameEn,
      asks: [],
      cells: [s.words, s.examples],
    })),
  });
}

// ─── 6. Numbers with nouns ────────────────────────────────────────────────────
// One rule, three behaviours: 1 (and 21, 31…) keeps the noun as it is; 2–4 (22–24…)
// puts it in the genitive SINGULAR; 5 and up (and 11–14) in the genitive PLURAL.
// Each noun is checked against the engine in the cell named by `cell`.
const NUM_COLUMNS = [
  { key: 'm', hr: 'dan', en: 'day · masculine' },
  { key: 'f', hr: 'minuta', en: 'minute · feminine' },
  { key: 'n', hr: 'selo', en: 'village · neuter' },
];
// A genitive that equals the dictionary form (minuta → minuta, plural) IS the ending -a.
const numNoun = (cell, word, base) =>
  Nc(cell, word, base, word === base && cell !== 'Nsg' ? word.slice(-1) : undefined);
const NUM = (cell) => [
  (word) => numNoun(cell, word, 'dan'),
  (word) => numNoun(cell, word, 'minuta'),
  (word) => numNoun(cell, word, 'selo'),
];
// [row key, label, rule in English, cell, [m, f, n] phrases, [m, f, n] nouns]
export const NUMBER_ROWS_SPEC = [
  [
    '1',
    '1',
    'nominative singular',
    'Nsg',
    ['jedan dan', 'jedna minuta', 'jedno selo'],
    ['dan', 'minuta', 'selo'],
  ],
  [
    '2-4',
    '2 · 3 · 4',
    'genitive singular',
    'Gsg',
    ['dva dana', 'dvije minute', 'dva sela'],
    ['dana', 'minute', 'sela'],
  ],
  [
    '5-10',
    '5 – 10',
    'genitive plural',
    'Gpl',
    ['pet dana', 'pet minuta', 'pet sela'],
    ['dana', 'minuta', 'sela'],
  ],
  [
    '11-14',
    '11 – 14',
    'genitive plural — the exception',
    'Gpl',
    ['jedanaest dana', 'jedanaest minuta', 'jedanaest sela'],
    ['dana', 'minuta', 'sela'],
  ],
  [
    '21',
    '21 · 31 …',
    'nominative singular',
    'Nsg',
    ['dvadeset jedan dan', 'dvadeset jedna minuta', 'dvadeset jedno selo'],
    ['dan', 'minuta', 'selo'],
  ],
  [
    '22-24',
    '22 – 24 …',
    'genitive singular',
    'Gsg',
    ['dvadeset dva dana', 'dvadeset dvije minute', 'dvadeset dva sela'],
    ['dana', 'minute', 'sela'],
  ],
  [
    '25+',
    '25 – 30 …',
    'genitive plural',
    'Gpl',
    ['dvadeset pet dana', 'dvadeset pet minuta', 'dvadeset pet sela'],
    ['dana', 'minuta', 'sela'],
  ],
];
export function numberChartSlide({ title, caption }) {
  return chart({
    title,
    caption,
    alt: 'A chart of how Croatian counts nouns. Each row is a group of numbers; the three columns are a masculine, a feminine and a neuter noun. The noun stays as it is after 1, takes the genitive singular after 2 to 4, and the genitive plural after 5 and above, with 11 to 14 the exception.',
    corner: { hr: 'Broj', en: 'Number' },
    numbered: false,
    colWidth: 168,
    columns: NUM_COLUMNS,
    rows: NUMBER_ROWS_SPEC.map(([key, name, nameEn, cell, phrases, nouns]) => ({
      key,
      name,
      nameEn,
      asks: [],
      cells: phrases.map((ph, i) => [L(ph, NUM(cell)[i](nouns[i]))]),
    })),
  });
}

// ─── 7. Aspect pairs ──────────────────────────────────────────────────────────
// Three ways a pair is made. Every pair is one the aspect lessons already teach, or
// that the VERBS dataset records (checked in ruleCharts.test.tsx).
export const ASPECT_PAIRS = {
  prefix: [
    ['pisati', 'napisati', 'to write', 'na'],
    ['čitati', 'pročitati', 'to read', 'pro'],
    ['gledati', 'pogledati', 'to watch', 'po'],
  ],
  ending: [
    ['kupovati', 'kupiti', 'to buy', 'kup'],
    ['uzimati', 'uzeti', 'to take', 'uz'],
    ['davati', 'dati', 'to give', 'da'],
  ],
  other: [
    ['govoriti', 'reći', 'to say · speak'],
    ['dolaziti', 'doći', 'to come'],
  ],
};
export function aspectChartSlide({ title, caption }) {
  return chart({
    title,
    caption,
    alt: 'A chart of Croatian aspect pairs. Each row is a way a pair is made: a prefix is added, the ending changes, or the verbs are different words. The left column gives the imperfective verb, the right column its perfective partner, with the letters that make the difference marked.',
    corner: { hr: 'Kako nastaje', en: 'How it is made' },
    numbered: false,
    colWidth: 190,
    columns: [
      { key: 'impf', hr: 'Nesvršeni', en: 'Imperfective — the process' },
      { key: 'pf', hr: 'Svršeni', en: 'Perfective — the result' },
    ],
    rows: [
      {
        key: 'prefix',
        name: 'Dodaje se prefiks',
        nameEn: 'A prefix is added',
        asks: [],
        cells: [
          ASPECT_PAIRS.prefix.map(([i, , en]) => ({ ...L(i, A(i, i)), en })),
          ASPECT_PAIRS.prefix.map(([, p, en, pre]) => ({ ...L(p, S(p, pre)), en })),
        ],
      },
      {
        key: 'ending',
        name: 'Mijenja se nastavak',
        nameEn: 'The ending changes',
        asks: [],
        cells: [
          ASPECT_PAIRS.ending.map(([i, , en, base]) => ({ ...L(i, A(i, base)), en })),
          ASPECT_PAIRS.ending.map(([, p, en, base]) => ({ ...L(p, A(p, base)), en })),
        ],
      },
      {
        key: 'other',
        name: 'Druga riječ',
        nameEn: 'A different verb',
        asks: [],
        cells: [
          ASPECT_PAIRS.other.map(([i, , en]) => ({ ...L(i, W(i)), en })),
          ASPECT_PAIRS.other.map(([, p, en]) => ({ ...L(p, W(p)), en })),
        ],
      },
    ],
  });
}

// ─── Placement ────────────────────────────────────────────────────────────────
// lesson id -> [{ after: <title of the slide it follows>, slide }]. Applied by
// withVisuals (lessonVisuals.js).
export const LESSON_RULE_CHARTS = {
  'present-tense-verbs': [
    {
      after: 'The Three Conjugation Classes',
      slide: presentChartSlide({
        title: 'The Present Tense — The Endings Chart',
        caption:
          'Read down a column to see one verb through all six persons, and across a row to see how the same person ends in each family. The marked letters are the personal ending; the part before it, the stem, stays put.',
      }),
    },
  ],
  present: [
    {
      after: 'Three Conjugation Classes',
      slide: presentChartSlide({
        title: 'The Present Tense — The Endings Chart',
        caption:
          'Read down a column to see one verb through all six persons, and across a row to see how the same person ends in each family. The marked letters are the personal ending; the part before it, the stem, stays put. Pisati and kupovati belong to the -em family: the stem changes (piš-, kupuj-), the endings do not.',
      }),
    },
  ],
  'past-tense': [
    {
      after: 'Gender Endings of the L-Participle',
      slide: pastChartSlide({
        title: 'The Past Tense — The Endings Chart',
        caption:
          'The participle agrees with the person speaking or spoken about: -o for a man, -la for a woman, -lo for a thing; -li, -le, -la in the plural. The auxiliary (sam, si, je…) never changes with gender. A mixed group takes the masculine plural.',
      }),
    },
  ],
  'object-pronouns': [
    {
      after: 'The Short Forms — Dative',
      slide: pronounChartSlide({
        title: 'The Pronouns — The Cases Chart',
        caption:
          'The short form in brackets is the one that sits in second position; the full form is for emphasis and after a preposition. Nas and vas have no separate short form. The vocative needs no row: it is just ti and vi. With mnom the preposition is sa (sa mnom), otherwise s.',
      }),
    },
  ],
  'adjective-agreement': [
    {
      after: 'Adjective Endings — Key Cases',
      slide: adjectiveChartSlide({
        title: 'Adjectives — The Endings Chart',
        caption:
          'The adjective takes the gender and case of its noun, so both endings change together. The marked letters are the adjective ending and the noun ending. In the accusative, a masculine PERSON or animal takes the genitive form (novog prijatelja); a masculine thing keeps the nominative (novi grad).',
      }),
    },
  ],
  clitics: [
    {
      after: 'The Clitic Chain — Fixed Order',
      slide: cliticChartSlide({
        title: 'The Clitic Chain — The Slots Chart',
        caption:
          'Put several together and the order never changes: Ona mu ga je dala. The slots are li, the auxiliary, the dative, the accusative, se, and last of all je.',
      }),
    },
  ],
  'clitics-advanced': [
    {
      after: 'The Internal Order of Clitics',
      slide: cliticChartSlide({
        title: 'The Clitic Chain — The Slots Chart',
        caption:
          'The whole chain at a glance: li, the auxiliary, the dative, the accusative, se, and je last. Only one auxiliary occupies the second slot, and je is the one that moves to the end.',
      }),
    },
  ],
  'word-order-emphasis': [
    {
      after: 'The Clitic Anchor Never Moves',
      slide: cliticChartSlide({
        title: 'The Clitic Chain — The Slots Chart',
        caption:
          'However you reorder the stressed words, this chain stays together, in this order, after the first stressed unit.',
      }),
    },
  ],
  'numbers-nouns': [
    {
      after: 'The Three-Way Counting Rule',
      slide: numberChartSlide({
        title: 'Counting — The Endings Chart',
        caption:
          'One keeps the noun as it is; two to four take the genitive singular; five and above take the genitive plural. The teens (11–14) always take the genitive plural, even 12, 13 and 14, and the rule starts again at 21. The marked letter is the noun ending in that row.',
      }),
    },
  ],
  aspect: [
    {
      after: 'Aspect Pairs — Patterns',
      slide: aspectChartSlide({
        title: 'Aspect Pairs — The Patterns Chart',
        caption:
          'Left: the verb for the process, the habit, the attempt. Right: its partner for the finished result. The underlined letters are what makes the difference: a prefix, a new ending, or a different verb altogether.',
      }),
    },
  ],
};
