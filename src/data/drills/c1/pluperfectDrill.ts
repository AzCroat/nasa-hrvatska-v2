// src/data/drills/c1/pluperfectDrill.ts
//
// C1 PLUPERFECT — the drill for the `pluskvamperfekt` lesson (book-vs-app fix, 2026-11-13).
// The lesson used to route to `cloze`, which has no pluperfect item at all. Three modes,
// eight items each:
//   tvorba    — bio sam / bila je + l-participle, both agreeing with the subject
//   knjizevni — the literary form bijah / bijaše + l-participle
//   uporaba   — which event takes the pluperfect: the EARLIER one
//
// The aorist forms in the literary mode (uđosmo, pozvaše, zazvoni, stigosmo) come after
// the aorist-imperfekt lesson, which precedes this one.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const PLUPERFECT_MODE_LABELS: Record<string, string> = {
  tvorba: '🧱 Tvorba',
  knjizevni: '📜 Književni oblik',
  uporaba: '⏮️ Uporaba',
};

export const PLUPERFECT_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Kad smo stigli, vlak je već ____ otišao.',
    en: 'When we arrived, the train had already left.',
    opts: ['bio', 'bila', 'bilo', 'biti'],
    answer: 'bio',
    tip: 'The participle of biti agrees with the subject: vlak is masculine.',
  },
  {
    mode: 'tvorba',
    q: 'Kad smo stigli, predstava je već bila ____.',
    en: 'When we arrived, the performance had already started.',
    opts: ['počela', 'počeo', 'počelo', 'počeli'],
    answer: 'počela',
    tip: 'predstava is feminine, so both participles end in -a.',
  },
  {
    mode: 'tvorba',
    q: 'Djeca su već ____ zaspala kad smo došli.',
    en: 'The children had already fallen asleep when we came.',
    opts: ['bila', 'bili', 'bilo', 'bile'],
    answer: 'bila',
    tip: 'djeca takes plural forms in -a.',
  },
  {
    mode: 'tvorba',
    q: 'Ana je vratila knjigu koju je bila ____.',
    en: 'Ana returned the book she had borrowed.',
    opts: ['posudila', 'posudio', 'posuđivala', 'posudi'],
    answer: 'posudila',
    tip: 'A completed earlier action: perfective, feminine.',
  },
  {
    mode: 'tvorba',
    q: 'Ivan i Marko ____ već bili otišli.',
    en: 'Ivan and Marko had already left.',
    opts: ['su', 'je', 'smo', 'ste'],
    answer: 'su',
    tip: 'Third person plural auxiliary.',
  },
  {
    mode: 'tvorba',
    q: 'Lopovi su već ____ pobjegli kad je stigla policija.',
    en: 'The thieves had already fled when the police arrived.',
    opts: ['bili', 'bile', 'bila', 'bio'],
    answer: 'bili',
    tip: 'lopovi: masculine plural.',
  },
  {
    mode: 'tvorba',
    q: 'Ja ____ to bio rekao prije tebe.',
    en: 'I had said that before you.',
    opts: ['sam', 'je', 'si', 'bih'],
    answer: 'sam',
    tip: 'First person singular auxiliary, in second position.',
  },
  {
    mode: 'tvorba',
    q: 'Majka nam je bila ____ ručak prije nego što smo stigli.',
    en: 'Mother had cooked lunch for us before we arrived.',
    opts: ['skuhala', 'skuhao', 'kuhala bi', 'skuhati'],
    answer: 'skuhala',
    tip: 'majka: feminine participle.',
  },
  // ── knjizevni ─────────────────────────────────────────────────────────────
  {
    mode: 'knjizevni',
    q: '____ zaspao kad zazvoni telefon.',
    en: 'I had fallen asleep when the telephone rang.',
    opts: ['Bijah', 'Bih', 'Bjeh', 'Bijaše'],
    answer: 'Bijah',
    tip: 'The literary pluperfect uses the imperfect of biti; the first person singular ends in -h.',
  },
  {
    mode: 'knjizevni',
    q: 'Kako ____ obećao, vratio se u zoru.',
    en: 'As he had promised, he came back at dawn.',
    opts: ['bijaše', 'bijah', 'bi', 'bješe'],
    answer: 'bijaše',
    tip: 'Third person singular imperfect of biti.',
  },
  {
    mode: 'knjizevni',
    q: 'Bijahu već ____ kad stigosmo.',
    en: 'They had already left when we arrived.',
    opts: ['otišli', 'otišle', 'otišao', 'otišlo'],
    answer: 'otišli',
    tip: 'bijahu + the masculine plural participle.',
  },
  {
    mode: 'knjizevni',
    q: 'Koji je oblik književni pluskvamperfekt za „ona je bila otišla“?',
    en: 'The literary pluperfect of "she had left".',
    opts: ['bijaše otišla', 'bila je otišla', 'bi otišla', 'otide'],
    answer: 'bijaše otišla',
    tip: 'The imperfect of biti + the l-participle.',
  },
  {
    mode: 'knjizevni',
    q: 'Pluskvamperfekt se tvori od perfekta ili imperfekta glagola ____ i glagolskoga pridjeva radnoga.',
    en: 'The pluperfect is built from the perfect or imperfect of one auxiliary and the l-participle.',
    opts: ['biti', 'htjeti', 'imati', 'morati'],
    answer: 'biti',
    tip: 'bio sam rekao, bijah rekao.',
  },
  {
    mode: 'knjizevni',
    q: 'Bijaše se već ____ kad uđosmo u grad.',
    en: 'It had already grown dark when we entered the town.',
    opts: ['smračilo', 'smračio', 'smračila', 'smračiti'],
    answer: 'smračilo',
    tip: 'An impersonal verb takes the neuter singular.',
  },
  {
    mode: 'knjizevni',
    q: 'Mi bijasmo već ____ posao kad nas pozvaše.',
    en: 'We had already finished the work when they called us.',
    opts: ['završili', 'završila', 'završio', 'završile'],
    answer: 'završili',
    tip: 'mi: masculine or mixed plural.',
  },
  {
    mode: 'knjizevni',
    q: 'Koji je glagolski oblik „bijaše otišao“?',
    en: 'Which tense is this form?',
    opts: ['pluskvamperfekt', 'aorist', 'imperfekt', 'perfekt'],
    answer: 'pluskvamperfekt',
    tip: 'The imperfect of biti + the l-participle: the literary pluperfect.',
  },
  // ── uporaba ───────────────────────────────────────────────────────────────
  {
    mode: 'uporaba',
    q: 'Koja rečenica kaže da je vlak otišao PRIJE našega dolaska?',
    en: 'Which sentence says the train left before we arrived?',
    opts: [
      'Kad smo stigli, vlak je već bio otišao.',
      'Kad smo bili stigli, vlak je otišao.',
      'Kad smo stigli, vlak će otići.',
      'Kad bismo stigli, vlak bi otišao.',
    ],
    answer: 'Kad smo stigli, vlak je već bio otišao.',
    tip: 'The pluperfect marks the EARLIER event.',
  },
  {
    mode: 'uporaba',
    q: 'Policija je uhitila čovjeka koji ____ opljačkao banku.',
    en: 'The police arrested a man who had robbed the bank.',
    opts: ['je bio', 'bi bio', 'će biti', 'bude'],
    answer: 'je bio',
    tip: 'The robbery came first, so it takes the pluperfect.',
  },
  {
    mode: 'uporaba',
    q: 'Tek tada je shvatio što je ____ učinio.',
    en: 'Only then did he realise what he had done.',
    opts: ['bio', 'bi', 'će', 'bude'],
    answer: 'bio',
    tip: 'The deed came before the realisation.',
  },
  {
    mode: 'uporaba',
    q: 'Nisam znao da je ona već bila ____.',
    en: 'I did not know that she had already left.',
    opts: ['otputovala', 'otputovao', 'otputovati', 'otputuje'],
    answer: 'otputovala',
    tip: 'A feminine participle after bila.',
  },
  {
    mode: 'uporaba',
    q: 'Snijeg je već bio ____ krovove kad smo se probudili.',
    en: 'Snow had already covered the roofs when we woke up.',
    opts: ['prekrio', 'prekrila', 'prekrilo', 'prekriti'],
    answer: 'prekrio',
    tip: 'snijeg is masculine.',
  },
  {
    mode: 'uporaba',
    q: 'Koji događaj nosi pluskvamperfekt u rečenici „Kad je stigla policija, lopovi su već bili pobjegli“?',
    en: 'Which event takes the pluperfect in this sentence?',
    opts: [
      'bijeg lopova, raniji događaj',
      'dolazak policije, kasniji događaj',
      'oba događaja',
      'nijedan događaj',
    ],
    answer: 'bijeg lopova, raniji događaj',
    tip: 'Only the earlier event is marked.',
  },
  {
    mode: 'uporaba',
    q: 'Sve što je bio ____, propalo je u jednom danu.',
    en: 'Everything he had planned fell apart in a single day.',
    opts: ['planirao', 'planirala bi', 'planirati', 'planira'],
    answer: 'planirao',
    tip: 'The planning came before the collapse.',
  },
  {
    mode: 'uporaba',
    q: 'Kuća koju su ____ kupili srušena je u potresu.',
    en: 'The house they had bought was destroyed in the earthquake.',
    opts: ['bili', 'bila', 'bio', 'bile'],
    answer: 'bili',
    tip: 'The buyers: masculine plural.',
  },
];
