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

// `end` is only needed where the ending is longer than the letters after the shared
// stem: more -> morem is the ending -em on the stem mor-, though the strings share 'more'.
const L = (hr, word, base, end) => (end ? { hr, word, base, end } : { hr, word, base });

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
      [L('Ovo je kuća.', 'kuća', 'kuća'), L('Ovo je voda.', 'voda', 'voda')],
      [
        L('Ovo je more.', 'more', 'more'),
        L('Ovo je računalo.', 'računalo', 'računalo'),
        L('Ovo je mlijeko.', 'mlijeko', 'mlijeko'),
      ],
      [
        L('Ovo je bicikl.', 'bicikl', 'bicikl'),
        L('Ovo je moj susjed.', 'susjed', 'susjed'),
        L('Ovo je moj brat.', 'brat', 'brat'),
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
      [L('Nema vode.', 'vode', 'voda')],
      [L('Nema računala.', 'računala', 'računalo'), L('Nema mlijeka.', 'mlijeka', 'mlijeko')],
      [L('Nema bicikla.', 'bicikla', 'bicikl'), L('Ja sam iz Zagreba.', 'Zagreba', 'Zagreb')],
    ],
  },
  {
    key: 'Dsg',
    name: 'Dativ',
    nameEn: 'Dative',
    asks: [{ hr: 'Prema komu, čemu idem?', en: 'Towards whom, towards what am I going?' }],
    cells: [
      [L('Idem prema kući.', 'kući', 'kuća')],
      [L('Idem prema moru.', 'moru', 'more')],
      [
        L('Idem prema biciklu.', 'biciklu', 'bicikl'),
        L('Idem prema Zagrebu.', 'Zagrebu', 'Zagreb'),
        L('Dao sam ključ bratu.', 'bratu', 'brat'),
        L('Dao sam auto bratu.', 'bratu', 'brat'),
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
      [L('Vidim kuću.', 'kuću', 'kuća')],
      [
        L('Vidim more.', 'more', 'more'),
        L('Imam računalo.', 'računalo', 'računalo'),
        L('Volim mlijeko.', 'mlijeko', 'mlijeko'),
      ],
      [
        L('Imam bicikl.', 'bicikl', 'bicikl'),
        L('Imam susjeda.', 'susjeda', 'susjed'),
        L('Imam brata.', 'brata', 'brat'),
      ],
    ],
  },
  {
    key: 'Vsg',
    name: 'Vokativ',
    nameEn: 'Vocative',
    asks: [{ hr: 'Hej!', en: 'Hey! (calling someone)' }],
    cells: [
      [L('Hej, kućo!', 'kućo', 'kuća')],
      [L('Hej, more!', 'more', 'more')],
      [L('Hej, brate!', 'brate', 'brat')],
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
      [L('Živim u kući.', 'kući', 'kuća'), L('Mislim o vodi.', 'vodi', 'voda')],
      [
        L('Pričam o računalu.', 'računalu', 'računalo'),
        L('Pričam o mlijeku.', 'mlijeku', 'mlijeko'),
        L('Živim u selu.', 'selu', 'selo'),
      ],
      [
        L('Pričam o biciklu.', 'biciklu', 'bicikl'),
        L('Pričam o bratu.', 'bratu', 'brat'),
        L('Živim u Zagrebu.', 'Zagrebu', 'Zagreb'),
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
        L('Idem u grad s prijateljicom.', 'prijateljicom', 'prijateljica'),
        L('Zadovoljan sam s kućom.', 'kućom', 'kuća'),
      ],
      [
        L('Plovim morem.', 'morem', 'more', 'em'),
        L('Zadovoljan sam s računalom.', 'računalom', 'računalo'),
      ],
      [
        L('Idem na posao biciklom.', 'biciklom', 'bicikl'),
        L('Razgovaram sa susjedom.', 'susjedom', 'susjed'),
        L('Idem u grad s bratom.', 'bratom', 'brat'),
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
