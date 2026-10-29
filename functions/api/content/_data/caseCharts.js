// functions/api/content/_data/caseCharts.js
//
// THE OWNER'S CASE CHART as a lesson picture (2026-10-29). The owner supplied
// "Padezi Graphs - Singular" (Dropbox) and asked for charts and tables rather than a
// drawing: seven cases down the side, Feminine / Neuter / Masculine across (the
// chart's own column order), the question words in Croatian and English, and example
// sentences with the noun's ending marked. This is that chart, line for line.
//
// Every example is { hr, word, base }: the whole sentence, the noun as it stands in
// that case, and its dictionary form. The renderer marks the ENDING by comparing
// `word` with `base`, so the highlighted letters can never drift from the word.
// src/tests/lessonVisuals.test.tsx asserts `word` against decline(base, gender) for
// every cell — a wrong ending in a chart is worse than no chart.

// A line is { hr, marks }: the whole sentence plus every word whose ENDING the chart
// marks, in reading order. A mark is { word, base, kind, end? }:
//   kind 'n' - a noun; `base` is its nominative singular, and the engine's decline()
//              must produce `word` for that case (asserted in lessonVisuals.test.tsx);
//   kind 'a' - an adjective (plural chart); `base` is the STEM ('nov'), so the marked
//              ending is simply what follows it. The engine does not decline adjectives,
//              so the test carries a hand-written full paradigm to check them against.
// `end` is only needed where the ending is longer than the letters after the shared
// stem (more -> morem is -em on the stem mor-, though the strings share "more") or where
// the form equals the nominative singular (zgrada -> gen. pl. zgrada: the ending is -a).
export const N = (word, base, end) =>
  end ? { word, base, kind: 'n', end } : { word, base, kind: 'n' };
export const A = (word, base, end) =>
  end ? { word, base, kind: 'a', end } : { word, base, kind: 'a' };
export const L = (hr, ...marks) => ({ hr, marks });

export const GENDERS = [
  { key: 'f', hr: 'Ženski rod', en: 'Feminine' },
  { key: 'n', hr: 'Srednji rod', en: 'Neuter' },
  { key: 'm', hr: 'Muški rod', en: 'Masculine' },
];

export const SINGULAR_ROWS = [
  {
    key: 'Nsg',
    name: 'Nominativ',
    nameEn: 'Nominative',
    asks: [{ hr: 'Tko, što?', en: 'Who, what?' }],
    cells: [
      [L('Ovo je kuća.', N('kuća', 'kuća')), L('Ovo je voda.', N('voda', 'voda'))],
      [
        L('Ovo je more.', N('more', 'more')),
        L('Ovo je računalo.', N('računalo', 'računalo')),
        L('Ovo je mlijeko.', N('mlijeko', 'mlijeko')),
      ],
      [
        L('Ovo je bicikl.', N('bicikl', 'bicikl')),
        L('Ovo je moj susjed.', N('susjed', 'susjed')),
        L('Ovo je moj brat.', N('brat', 'brat')),
      ],
    ],
  },
  {
    key: 'Gsg',
    name: 'Genitiv',
    nameEn: 'Genitive',
    asks: [
      { hr: 'Koga, čega nema?', en: 'Who, what is missing?' },
      { hr: 'Odakle si?', en: 'Where are you from?' },
    ],
    cells: [
      [L('Nema vode.', N('vode', 'voda'))],
      [L('Nema računala.', N('računala', 'računalo')), L('Nema mlijeka.', N('mlijeka', 'mlijeko'))],
      [L('Nema bicikla.', N('bicikla', 'bicikl')), L('Ja sam iz Zagreba.', N('Zagreba', 'Zagreb'))],
    ],
  },
  {
    key: 'Dsg',
    name: 'Dativ',
    nameEn: 'Dative',
    asks: [{ hr: 'Prema komu, čemu idem?', en: 'Towards whom, towards what am I going?' }],
    cells: [
      [L('Idem prema kući.', N('kući', 'kuća'))],
      [L('Idem prema moru.', N('moru', 'more'))],
      [
        L('Idem prema biciklu.', N('biciklu', 'bicikl')),
        L('Idem prema Zagrebu.', N('Zagrebu', 'Zagreb')),
        L('Dao sam ključ bratu.', N('bratu', 'brat')),
        L('Dao sam auto bratu.', N('bratu', 'brat')),
      ],
    ],
  },
  {
    key: 'Asg',
    name: 'Akuzativ',
    nameEn: 'Accusative',
    asks: [
      { hr: 'Koga, što vidim?', en: 'Who or what do I see?' },
      { hr: 'Kamo ideš?', en: 'Where are you going to?' },
      { hr: '+ glagol imati', en: '+ the verb to have' },
    ],
    cells: [
      [L('Vidim kuću.', N('kuću', 'kuća'))],
      [
        L('Vidim more.', N('more', 'more')),
        L('Imam računalo.', N('računalo', 'računalo')),
        L('Volim mlijeko.', N('mlijeko', 'mlijeko')),
      ],
      [
        L('Imam bicikl.', N('bicikl', 'bicikl')),
        L('Imam susjeda.', N('susjeda', 'susjed')),
        L('Imam brata.', N('brata', 'brat')),
      ],
    ],
  },
  {
    key: 'Vsg',
    name: 'Vokativ',
    nameEn: 'Vocative',
    asks: [{ hr: 'Hej!', en: 'Hey! (calling someone)' }],
    cells: [
      [L('Hej, kućo!', N('kućo', 'kuća'))],
      [L('Hej, more!', N('more', 'more'))],
      [L('Hej, brate!', N('brate', 'brat'))],
    ],
  },
  {
    key: 'Lsg',
    name: 'Lokativ',
    nameEn: 'Locative',
    asks: [
      { hr: 'Gdje sam ja?', en: 'Where am I?' },
      { hr: 'O komu, o čemu pričam?', en: 'About whom, about what am I talking about?' },
    ],
    cells: [
      [L('Živim u kući.', N('kući', 'kuća')), L('Mislim o vodi.', N('vodi', 'voda'))],
      [
        L('Pričam o računalu.', N('računalu', 'računalo')),
        L('Pričam o mlijeku.', N('mlijeku', 'mlijeko')),
        L('Živim u selu.', N('selu', 'selo')),
      ],
      [
        L('Pričam o biciklu.', N('biciklu', 'bicikl')),
        L('Pričam o bratu.', N('bratu', 'brat')),
        L('Živim u Zagrebu.', N('Zagrebu', 'Zagreb')),
      ],
    ],
  },
  {
    key: 'Isg',
    name: 'Instrumental',
    nameEn: 'Instrumental',
    asks: [
      { hr: 'S kim?', en: 'With whom?' },
      { hr: 'Čime?', en: 'By what?' },
    ],
    cells: [
      [
        L('Idem u grad s prijateljicom.', N('prijateljicom', 'prijateljica')),
        L('Zadovoljan sam s kućom.', N('kućom', 'kuća')),
      ],
      [
        L('Plovim morem.', N('morem', 'more', 'em')),
        L('Zadovoljan sam s računalom.', N('računalom', 'računalo')),
      ],
      [
        L('Idem na posao biciklom.', N('biciklom', 'bicikl')),
        L('Razgovaram sa susjedom.', N('susjedom', 'susjed')),
        L('Idem u grad s bratom.', N('bratom', 'brat')),
      ],
    ],
  },
];

/** The picture slide for one lesson. `highlight` is a row key ('Lsg') or omitted. */
export function singularChartSlide({ title, highlight, caption }) {
  return {
    type: 'visual',
    kind: 'case-chart',
    number: 'singular',
    title,
    highlight: highlight || null,
    alt: 'A chart of the seven Croatian cases in the singular. Each row is a case with its question words; the three columns are feminine, neuter and masculine, and each cell gives example sentences with the noun ending marked.',
    caption,
    columns: GENDERS,
    rows: SINGULAR_ROWS,
  };
}

// ── The plural chart ("Padezi Graphs - Plural": adjectives + nouns) ─────────────────
// Same seven rows and the same question words as the singular chart; the cells carry a
// noun phrase, so BOTH the adjective ending and the noun ending are marked. Column order
// is the owner's: Ženski, Srednji, Muški.

const PLURAL_CELLS = {
  Npl: [
    [
      L('Ovo su nove kuće.', A('nove', 'nov'), N('kuće', 'kuća')),
      L('Ovo su velike zgrade.', A('velike', 'velik'), N('zgrade', 'zgrada')),
      L('Ovo su nove majice.', A('nove', 'nov'), N('majice', 'majica')),
    ],
    [
      L('Ovo su velika jezera.', A('velika', 'velik'), N('jezera', 'jezero')),
      L('Ovo su nova računala.', A('nova', 'nov'), N('računala', 'računalo')),
    ],
    [
      L('Ovo su skupi satovi.', A('skupi', 'skup'), N('satovi', 'sat')),
      L('Ovo su moji novi susjedi.', A('novi', 'nov'), N('susjedi', 'susjed')),
    ],
  ],
  Gpl: [
    [
      L('Ovdje nema novih kuća.', A('novih', 'nov'), N('kuća', 'kuća', 'a')),
      L('Ovdje nema velikih zgrada.', A('velikih', 'velik'), N('zgrada', 'zgrada', 'a')),
    ],
    [
      L('Ovdje nema velikih jezera.', A('velikih', 'velik'), N('jezera', 'jezero')),
      L('Ovdje nema novih računala.', A('novih', 'nov'), N('računala', 'računalo')),
    ],
    [
      L('Ovdje nema skupih satova.', A('skupih', 'skup'), N('satova', 'sat')),
      L('Ovdje nema novih susjeda.', A('novih', 'nov'), N('susjeda', 'susjed', 'a')),
    ],
  ],
  Dpl: [
    [
      L('Idem prema novim kućama.', A('novim', 'nov'), N('kućama', 'kuća', 'ama')),
      L('Idem prema velikim zgradama.', A('velikim', 'velik'), N('zgradama', 'zgrada', 'ama')),
    ],
    [L('Idem prema velikim jezerima.', A('velikim', 'velik'), N('jezerima', 'jezero'))],
    [L('Idem prema novim susjedima.', A('novim', 'nov'), N('susjedima', 'susjed'))],
  ],
  Apl: [
    [
      L('Ljudi imaju nove kuće.', A('nove', 'nov'), N('kuće', 'kuća')),
      L('Vidim velike zgrade.', A('velike', 'velik'), N('zgrade', 'zgrada')),
      L('Imam moderne majice.', A('moderne', 'modern'), N('majice', 'majica')),
    ],
    [
      L('Ljudi imaju nova računala.', A('nova', 'nov'), N('računala', 'računalo')),
      L('Ljudi idu na velika jezera.', A('velika', 'velik'), N('jezera', 'jezero')),
    ],
    [
      L('Ljudi kupuju skupe satove.', A('skupe', 'skup'), N('satove', 'sat')),
      L('Imam nove susjede.', A('nove', 'nov'), N('susjede', 'susjed')),
      L('Ljudi putuju u zanimljive gradove.', A('zanimljive', 'zanimljiv'), N('gradove', 'grad')),
    ],
  ],
  Vpl: [
    [L('Hej, velike zgrade!', A('velike', 'velik'), N('zgrade', 'zgrada'))],
    [L('Hej, velika jezera!', A('velika', 'velik'), N('jezera', 'jezero'))],
    [L('Hej, novi susjedi!', A('novi', 'nov'), N('susjedi', 'susjed'))],
  ],
  Lpl: [
    [
      L('Ljudi žive u novim kućama.', A('novim', 'nov'), N('kućama', 'kuća', 'ama')),
      L('Pričam o velikim zgradama.', A('velikim', 'velik'), N('zgradama', 'zgrada', 'ama')),
      L('Pričam o modernim majicama.', A('modernim', 'modern'), N('majicama', 'majica', 'ama')),
    ],
    [
      L('Ljudi se kupaju u velikim jezerima.', A('velikim', 'velik'), N('jezerima', 'jezero')),
      L('Pričam o novim računalima.', A('novim', 'nov'), N('računalima', 'računalo')),
    ],
    [
      L('Pričam o skupim satovima.', A('skupim', 'skup'), N('satovima', 'sat')),
      L('Pričam o novim susjedima.', A('novim', 'nov'), N('susjedima', 'susjed')),
    ],
  ],
  Ipl: [
    [
      L(
        'Razgovaram s dobrim prijateljicama.',
        A('dobrim', 'dobr'),
        N('prijateljicama', 'prijateljica', 'ama'),
      ),
      L(
        'Zadovoljna sam s modernim majicama.',
        A('modernim', 'modern'),
        N('majicama', 'majica', 'ama'),
      ),
    ],
    [
      L('Plovimo velikim morima.', A('velikim', 'velik'), N('morima', 'more')),
      L('Zadovoljni smo s novim računalima.', A('novim', 'nov'), N('računalima', 'računalo')),
    ],
    [
      L('Zadovoljan sam s novim satovima.', A('novim', 'nov'), N('satovima', 'sat')),
      L('Pričam s novim susjedima.', A('novim', 'nov'), N('susjedima', 'susjed')),
      L('Ljudi putuju modernim autobusima.', A('modernim', 'modern'), N('autobusima', 'autobus')),
    ],
  ],
};

export const PLURAL_ROWS = SINGULAR_ROWS.map((r) => {
  const key = r.key.replace('sg', 'pl');
  return { key, name: r.name, nameEn: r.nameEn, asks: r.asks, cells: PLURAL_CELLS[key] };
});

export function pluralChartSlide({ title, highlight, caption }) {
  return {
    type: 'visual',
    kind: 'case-chart',
    number: 'plural',
    title,
    highlight: highlight || null,
    alt: 'A chart of the seven Croatian cases in the plural, with adjectives. Each row is a case with its question words; the three columns are feminine, neuter and masculine, and each cell gives example sentences with the adjective and noun endings marked.',
    caption,
    columns: GENDERS,
    rows: PLURAL_ROWS,
  };
}
