// src/data/drills/scienceDrill.ts
//
// C1 SCIENTIFIC & TECHNICAL CROATIAN — the drill for the `science-technology`
// lesson.
//
// The panic this lesson removes is lexical, and the cure is structural: a
// coined Croatian technical term can usually be SPLIT rather than looked up.
// *Toplomjer* is heat-measurer, *zemljopis* is earth-writing, *vodovod* is
// water-conduit, *jezikoslovlje* is language-study. The pieces — *-mjer*,
// *-pis*, *-vod*, *-slov*, *samo-*, *među-* — are productive, so learning six
// of them unlocks dozens of words the reader has never seen.
//
// Usually BOTH words exist — *kisik* and *oksigen*, *zemljopis* and
// *geografija* — and the native one belongs in a Croatian scientific text while
// the international one is understood everywhere.
//
// Two more things a reader has to have: the register is impersonal
// (*Utvrđeno je da…*, *Mjerenja su provedena…*), and DECIMALS USE A COMMA. A
// paper reporting 3,14 is not reporting three hundred and fourteen.
//
// Three modes:
//   tvorba  — splitting a coined term
//   registar — the impersonal scientific voice, and its government
//   brojke  — measurements, units and the decimal comma

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const SCIENCE_MODE_LABELS: Record<string, string> = {
  tvorba: '🔬 Rastavi pojam',
  registar: '📝 Znanstveni registar',
  brojke: '📐 Mjere i brojke',
};

export const SCIENCE_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Što doslovno znači "toplomjer"?',
    en: 'What does toplomjer literally mean?',
    opts: ['mjerač topline', 'topli metar', 'toplinski broj', 'grijač'],
    answer: 'mjerač topline',
    tip: 'toplina + mjeriti. Split it before reaching for a dictionary.',
  },
  {
    mode: 'tvorba',
    q: 'Što znači nastavak "-mjer"?',
    en: 'What does -mjer mean?',
    opts: ['mjerilo, mjerač', 'granica', 'omjer', 'metar'],
    answer: 'mjerilo, mjerač',
    tip: 'toplomjer, tlakomjer, brzinomjer — a productive ending.',
  },
  {
    mode: 'tvorba',
    q: 'Što znači "-pis" u "zemljopis"?',
    en: 'What does -pis mean?',
    opts: ['pisanje, opis', 'popis', 'pismo', 'zapisnik'],
    answer: 'pisanje, opis',
    tip: 'zemljopis, životopis, pravopis — writing or describing.',
  },
  {
    mode: 'tvorba',
    q: 'Što znači "-vod" u "vodovod"?',
    en: 'What does -vod mean?',
    opts: ['vođenje, provod', 'voda', 'vodstvo', 'vodič'],
    answer: 'vođenje, provod',
    tip: 'vodovod, plinovod, naftovod — a conduit. The vod is not voda.',
  },
  {
    mode: 'tvorba',
    q: 'Što znači prefiks "samo-"?',
    en: 'What does samo- mean?',
    opts: ['self-', 'only', 'alone', 'same'],
    answer: 'self-',
    tip: 'samostalan, samoglasnik, samoodrživ.',
  },
  {
    mode: 'tvorba',
    q: 'Što znači prefiks "među-"?',
    en: 'What does među- mean?',
    opts: ['inter-', 'mid-', 'multi-', 'meta-'],
    answer: 'inter-',
    tip: 'međunarodni, međuovisnost, međuprostor.',
  },
  {
    mode: 'tvorba',
    q: 'Što je "jezikoslovlje"?',
    en: 'What is jezikoslovlje?',
    opts: ['lingvistika', 'prevoditeljstvo', 'književnost', 'govorništvo'],
    answer: 'lingvistika',
    tip: 'jezik + slovo — language-study. Both words exist.',
  },
  {
    mode: 'tvorba',
    q: 'Koja je domaća riječ za "oxygen"?',
    en: 'oxygen',
    opts: ['kisik', 'oksigen', 'zrakotvor', 'kiselina'],
    answer: 'kisik',
    tip: 'From kiseo — and oksigen is understood but not the Croatian term.',
  },

  // ── registar ──────────────────────────────────────────────────────────────
  {
    mode: 'registar',
    q: '____ je da uzorak nije reprezentativan.',
    en: 'It was established that the sample was not representative.',
    opts: ['Utvrđeno', 'Utvrdili', 'Utvrdio', 'Utvrđen'],
    answer: 'Utvrđeno',
    tip: 'Neuter passive participle — the impersonal scientific voice.',
  },
  {
    mode: 'registar',
    q: 'Mjerenja ____ provedena u tri navrata.',
    en: 'Measurements were carried out three times.',
    opts: ['su', 'je', 'se', 'će'],
    answer: 'su',
    tip: 'mjerenja is neuter plural, so su.',
  },
  {
    mode: 'registar',
    q: 'Zašto se izbjegava prvo lice?',
    en: 'Why avoid the first person?',
    opts: ['rezultat ne ovisi o istraživaču', 'radi kratkoće', 'iz uljudnosti', 'ne izbjegava se'],
    answer: 'rezultat ne ovisi o istraživaču',
    tip: 'The convention says the finding, not the finder, is the claim.',
  },
  {
    mode: 'registar',
    q: 'Uzorak se sastoji ____ dvjesto ispitanika.',
    en: 'The sample consists of two hundred subjects.',
    opts: ['od', 'iz', 'sa', 'u'],
    answer: 'od',
    tip: 'sastojati se OD plus the genitive.',
  },
  {
    mode: 'registar',
    q: 'Iz toga proizlazi ____ zaključak. (sljedeći)',
    en: 'The following conclusion follows from this.',
    opts: ['sljedeći', 'sljedećeg', 'sljedećem', 'sljedećim'],
    answer: 'sljedeći',
    tip: 'proizlaziti IZ plus the genitive — and the subject stays nominative.',
  },
  {
    mode: 'registar',
    q: 'Što je "pogreška" u mjerenju?',
    en: 'What is a pogreška here?',
    opts: ['odstupanje mjerenja', 'krivnja', 'tipfeler', 'kvar uređaja'],
    answer: 'odstupanje mjerenja',
    tip: 'Measurement error — a technical term, not a reproach.',
  },
  {
    mode: 'registar',
    q: 'Što je "hipoteza"?',
    en: 'What is a hipoteza?',
    opts: ['pretpostavka koja se ispituje', 'zaključak', 'teorija', 'nagađanje'],
    answer: 'pretpostavka koja se ispituje',
    tip: 'And potvrditi or opovrgnuti hipotezu is what the paper does with it.',
  },
  {
    mode: 'registar',
    q: 'Što su "podaci"?',
    en: 'What are podaci?',
    opts: ['data', 'details', 'submissions', 'findings'],
    answer: 'data',
    tip: 'Plural, and the singular podatak is a single data point.',
  },

  // ── brojke ────────────────────────────────────────────────────────────────
  {
    mode: 'brojke',
    q: 'Kako se piše broj pi u hrvatskom?',
    en: 'How is 3.14 written?',
    opts: ['3,14', '3.14', '3·14', '3 14'],
    answer: '3,14',
    tip: 'A COMMA marks the decimal. This trips English readers instantly.',
  },
  {
    mode: 'brojke',
    q: 'Što onda razdvaja tisućice?',
    en: 'What separates thousands?',
    opts: ['točka ili razmak', 'zarez', 'apostrof', 'ništa'],
    answer: 'točka ili razmak',
    tip: '1.000 or 1 000 — the exact mirror of the English convention.',
  },
  {
    mode: 'brojke',
    q: 'Što je "omjer"?',
    en: 'What is an omjer?',
    opts: ['ratio', 'measure', 'amount', 'scale'],
    answer: 'ratio',
    tip: 'omjer 2:1. Mjerilo is a scale.',
  },
  {
    mode: 'brojke',
    q: 'Rezultat iznosi ____ posto. (37)',
    en: 'The result is 37 per cent.',
    opts: ['trideset sedam', 'trideset sedmi', 'trideset sedma', 'trideseti sedmi'],
    answer: 'trideset sedam',
    tip: 'A cardinal — the ordinal would name a position, not a quantity.',
  },
  {
    mode: 'brojke',
    q: 'Što znači "iznositi" o broju?',
    en: 'What does iznositi mean of a figure?',
    opts: ['amount to', 'exceed', 'estimate', 'record'],
    answer: 'amount to',
    tip: 'Rezultat iznosi… — the standard reporting verb.',
  },
  {
    mode: 'brojke',
    q: 'Što je "uzorak"?',
    en: 'What is an uzorak?',
    opts: ['sample', 'pattern only', 'specimen jar', 'trial'],
    answer: 'sample',
    tip: 'It also means a pattern on cloth. Context decides instantly.',
  },
  {
    mode: 'brojke',
    q: 'Što je "dokaz" u znanstvenom tekstu?',
    en: 'What is dokaz here?',
    opts: ['evidence or proof', 'a document', 'a demonstration', 'a witness'],
    answer: 'evidence or proof',
    tip: 'The same word the debate lesson used, in a stricter sense.',
  },
  {
    mode: 'brojke',
    q: 'Zašto je rastavljanje pojma brže od rječnika?',
    en: 'Why split rather than look up?',
    opts: [
      'dijelovi se ponavljaju u desecima riječi',
      'rječnik je nepotpun',
      'brže se piše',
      'nije brže',
    ],
    answer: 'dijelovi se ponavljaju u desecima riječi',
    tip: 'Six building blocks unlock dozens of words you have never seen.',
  },
];
