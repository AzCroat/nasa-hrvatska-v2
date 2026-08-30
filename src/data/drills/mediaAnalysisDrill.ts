// src/data/drills/mediaAnalysisDrill.ts
//
// C1 READING THE MEDIA CRITICALLY — the drill for the `media-analysis` lesson.
//
// The B1 news lesson taught how to READ a Croatian article. This one teaches how
// to read what it does not say, and the mechanisms are grammatical rather than
// political.
//
// WHO DISAPPEARED INTO THE PASSIVE. *Donesena je odluka* — by whom? The
// participial passive with no agent is the cleanest way in the language to
// report an action while declining to name who took it. Nominalisation does the
// same job one step further: *Došlo je do smanjenja* removes the actor AND the
// action, leaving only an event that occurred.
//
// THE EVIDENTIALS ARE NOT INTERCHANGEABLE. *Navodno* is neutral — the paper
// reports without vouching. *Tobože* and *takozvani* carry the writer's own
// doubt. Reading them as synonyms is reading a sceptical article as a neutral
// one.
//
// AND THE WORD THAT WAS NOT CHOSEN. *Mjere* or *rezovi*, *prosvjed* or *nemiri*
// — near-synonyms that frame before the sentence has said anything.
//
// Three modes:
//   agens    — who disappeared, and how
//   ograde   — navodno against tobože
//   izbor    — the near-synonym that takes a side

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const MEDIA_ANALYSIS_MODE_LABELS: Record<string, string> = {
  agens: '🕵️ Tko je nestao',
  ograde: '🏷️ Navodno ili tobože',
  izbor: '⚖️ Izbor riječi',
};

export const MEDIA_ANALYSIS_DRILL_DATA: ModeDrillItem[] = [
  // ── agens ─────────────────────────────────────────────────────────────────
  {
    mode: 'agens',
    q: '"Donesena je odluka." Što nedostaje?',
    en: 'What is missing?',
    opts: ['tko ju je donio', 'kada', 'koja odluka', 'ništa'],
    answer: 'tko ju je donio',
    tip: 'The first question to ask of any passive in a news text.',
  },
  {
    mode: 'agens',
    q: '"Došlo je do smanjenja broja zaposlenih." Što je uklonjeno?',
    en: 'What has been removed?',
    opts: ['i vršitelj i radnja', 'samo vršitelj', 'samo vrijeme', 'ništa'],
    answer: 'i vršitelj i radnja',
    tip: 'Nominalisation goes further than the passive — nobody did anything.',
  },
  {
    mode: 'agens',
    q: 'Kako se ta rečenica raspakira?',
    en: 'Unpacked, it says:',
    opts: [
      'netko je otpustio ljude',
      'ljudi su otišli sami',
      'broj se sam smanjio',
      'ništa se nije dogodilo',
    ],
    answer: 'netko je otpustio ljude',
    tip: 'Someone made a decision. The sentence is built so you do not ask who.',
  },
  {
    mode: 'agens',
    q: 'Koji je pasiv u hrvatskom najneutralniji?',
    en: 'Which passive is most neutral?',
    opts: ['se-pasiv', 'biti + particip', 'od strane', 'nema neutralnog'],
    answer: 'se-pasiv',
    tip: 'It is native and everywhere; od strane is a calque and marks a text.',
  },
  {
    mode: 'agens',
    q: '"Zakon je izmijenjen." Kako se vraća agens?',
    en: 'Restoring the agent:',
    opts: [
      'Sabor je izmijenio zakon.',
      'Zakon se izmijenio.',
      'Došlo je do izmjene.',
      'Zakon je izmijenjen tada.',
    ],
    answer: 'Sabor je izmijenio zakon.',
    tip: 'Name the actor and the sentence commits to something.',
  },
  {
    mode: 'agens',
    q: 'Zašto novinski stil rabi pasiv?',
    en: 'Why does journalism use it?',
    opts: [
      'ponekad agens nije poznat, ponekad se ne želi imenovati',
      'uvijek zbog nepoznatog agensa',
      'radi kratkoće',
      'iz navike',
    ],
    answer: 'ponekad agens nije poznat, ponekad se ne želi imenovati',
    tip: 'Both are legitimate. Noticing which one is in play is the whole skill.',
  },
  {
    mode: 'agens',
    q: 'Što je "bez komentara" u tekstu?',
    en: 'What does bez komentara tell you?',
    opts: ['netko je odbio odgovoriti', 'novinar nema stav', 'nema izvora', 'tekst je nedovršen'],
    answer: 'netko je odbio odgovoriti',
    tip: 'It is information, and it is usually placed deliberately.',
  },
  {
    mode: 'agens',
    q: 'Što znači "kako doznajemo"?',
    en: 'What does kako doznajemo signal?',
    opts: ['neimenovani izvor', 'službena objava', 'novinarov stav', 'citat'],
    answer: 'neimenovani izvor',
    tip: 'An unnamed source — and the paper is telling you so.',
  },

  // ── ograde ────────────────────────────────────────────────────────────────
  {
    mode: 'ograde',
    q: 'Što izriče "navodno"?',
    en: 'What does navodno convey?',
    opts: [
      'list ne jamči za tvrdnju',
      'list smatra da je netočno',
      'list potvrđuje',
      'novinar sumnja',
    ],
    answer: 'list ne jamči za tvrdnju',
    tip: 'Neutral: reported, not vouched for.',
  },
  {
    mode: 'ograde',
    q: 'Što izriče "tobože"?',
    en: 'What does tobože convey?',
    opts: ['pisac drži da je netočno', 'neutralno prenošenje', 'potvrdu', 'nesigurnost izvora'],
    answer: 'pisac drži da je netočno',
    tip: 'Scepticism, and it is the writer speaking, not the source.',
  },
  {
    mode: 'ograde',
    q: 'Što signalizira "takozvani"?',
    en: 'What does takozvani signal?',
    opts: ['pisac odbacuje naziv', 'naziv je službeni', 'naziv je nov', 'naziv je stran'],
    answer: 'pisac odbacuje naziv',
    tip: 'So-called — it rejects the label while using it.',
  },
  {
    mode: 'ograde',
    q: 'Zašto je razlika važna?',
    en: 'Why does it matter?',
    opts: [
      'inače se pristran tekst čita kao neutralan',
      'radi stila',
      'radi gramatike',
      'nije važna',
    ],
    answer: 'inače se pristran tekst čita kao neutralan',
    tip: 'One word decides whether you are reading reporting or commentary.',
  },
  {
    mode: 'ograde',
    q: 'Što znači "prema neslužbenim informacijama"?',
    en: 'What does it mean?',
    opts: ['neslužbeno i neprovjereno', 'službeno', 'iz priopćenja', 'iz suda'],
    answer: 'neslužbeno i neprovjereno',
    tip: 'Unofficial and unverified — a stronger hedge than navodno.',
  },
  {
    mode: 'ograde',
    q: 'Koji izraz NE nosi piščevu sumnju?',
    en: 'Which does NOT carry doubt?',
    opts: ['navodno', 'tobože', 'takozvani', 'kobajagi'],
    answer: 'navodno',
    tip: 'The other three do, in ascending order of scorn.',
  },
  {
    mode: 'ograde',
    q: 'Prema ____ , broj raste. (izvještaj)',
    en: 'According to the report…',
    opts: ['izvještaju', 'izvještaja', 'izvještaj', 'izvještajem'],
    answer: 'izvještaju',
    tip: 'prema takes the dative — and it attributes rather than hedges.',
  },
  {
    mode: 'ograde',
    q: 'Razlika između prenošenja i komentara vidi se ____.',
    en: 'Reporting against commentary shows in:',
    opts: ['u jeziku samom', 'u naslovu', 'u duljini', 'u rubrici'],
    answer: 'u jeziku samom',
    tip: 'Which is why this is a language skill and not a media-studies one.',
  },

  // ── izbor ─────────────────────────────────────────────────────────────────
  {
    mode: 'izbor',
    q: '"Mjere" ili "rezovi" — koja riječ je nepovoljnija?',
    en: 'Which frames it negatively?',
    opts: ['rezovi', 'mjere', 'jednake su', 'ovisi o padežu'],
    answer: 'rezovi',
    tip: 'Cuts against measures. Same policy, two verdicts.',
  },
  {
    mode: 'izbor',
    q: '"Prosvjed" ili "nemiri" — koja je neutralnija?',
    en: 'Which is more neutral?',
    opts: ['prosvjed', 'nemiri', 'jednake su', 'nijedna'],
    answer: 'prosvjed',
    tip: 'Nemiri says disorder before it says anything else.',
  },
  {
    mode: 'izbor',
    q: 'Što je "reforma" naspram "rezanja"?',
    en: 'reforma against rezanje:',
    opts: ['povoljniji okvir', 'isti okvir', 'nepovoljniji okvir', 'tehnički pojam'],
    answer: 'povoljniji okvir',
    tip: 'Reform is something done for you; cutting is something done to you.',
  },
  {
    mode: 'izbor',
    q: 'Što treba primijetiti uz odabranu riječ?',
    en: 'What else should you notice?',
    opts: ['riječ koja NIJE odabrana', 'duljinu rečenice', 'padež', 'izvor'],
    answer: 'riječ koja NIJE odabrana',
    tip: 'The available neutral word that was passed over is the finding.',
  },
  {
    mode: 'izbor',
    q: '"Skupina" ili "banda" — što bira novinar bez stava?',
    en: 'Which would a neutral reporter use?',
    opts: ['skupina', 'banda', 'oboje', 'nijedno'],
    answer: 'skupina',
    tip: 'Banda convicts before the court does.',
  },
  {
    mode: 'izbor',
    q: 'Što znači "priopćenje"?',
    en: 'What is a priopćenje?',
    opts: ['a press release', 'a statement in court', 'a rumour', 'an editorial'],
    answer: 'a press release',
    tip: 'And a text built from one usually reads like one.',
  },
  {
    mode: 'izbor',
    q: 'Što je "kolumna"?',
    en: 'What is a kolumna?',
    opts: ['a signed opinion column', 'a news report', 'a table', 'a headline'],
    answer: 'a signed opinion column',
    tip: 'Signed, and therefore openly commentary.',
  },
  {
    mode: 'izbor',
    q: 'Zašto je ovo jezična, a ne politička vještina?',
    en: 'Why is this a language skill?',
    opts: [
      'okvir se gradi gramatikom i leksikom',
      'jer se uči u školi',
      'jer je tekst na hrvatskom',
      'nije jezična',
    ],
    answer: 'okvir se gradi gramatikom i leksikom',
    tip: 'Passive, nominalisation and near-synonym — three grammatical choices.',
  },
];
