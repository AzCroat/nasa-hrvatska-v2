// src/data/drills/regionalDrill.ts
//
// C1 REGIONAL VARIETIES — the drill for the `regional-varieties` lesson.
//
// The instruction the lesson closes on is the whole point of the drill:
// UNDERSTAND IT, DO NOT PERFORM IT. A learner who picks up *kaj* in Zagreb and
// starts using it has not become local; they have adopted one feature of a
// variety they do not otherwise speak, which is audible immediately. The
// listening half is genuinely useful; the speaking half is a trap.
//
// Two things are worth knowing precisely. ZAGREB SPEECH IS NOT KAJKAVIAN,
// QUITE — it is štokavian-based with kajkavian features (*kaj*, *buš*) and a
// layer of German words on top. And THE COAST BORROWED FROM VENETIAN: *pjat*,
// *škatula*, *kužina*, *gušt* are Italian, not Slavic, and standard Croatian
// has its own words for all of them.
//
// Ikavian replaces the *ije*/*je* reflex with *i* — *dite*, *misto*, *lipo*,
// *vrime* — which is a Croatian dialect feature and, once heard, places a
// speaker within about fifty kilometres.
//
// THE SAME OMISSION AS `languageHistoryDrill`. The ikavian mode drills the
// ijekavian and ikavian reflexes and never shows the EKAVIAN one, even though
// the three-way contrast places a speaker instantly. The ekavian form is
// homographic with Serbian and a drill option is CLICKABLE, so the distractor
// rule applies with no exception; the app teaches the three-way reflex in the
// C2 `dijalekti-dubinski` lesson, which holds the one sanctioned
// CONTRASTIVE_LESSONS carve-out. The lint caught this here too — the second
// time in two tranches, which is why it is now written down in both banks.
//
// Three modes:
//   narjecja  — where each variety is spoken
//   posudbe   — the Venetian layer on the coast
//   ikavica   — the i-reflex, and what to do with all of it

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const REGIONAL_MODE_LABELS: Record<string, string> = {
  narjecja: '🗺️ Tko kako govori',
  posudbe: '🇮🇹 Posudbe s obale',
  ikavica: '🔤 Ikavica',
};

export const REGIONAL_DRILL_DATA: ModeDrillItem[] = [
  // ── narjecja ──────────────────────────────────────────────────────────────
  {
    mode: 'narjecja',
    q: 'Gdje se čuje "kaj"?',
    en: 'Where do you hear kaj?',
    opts: ['u Zagrebu i Zagorju', 'u Splitu', 'u Osijeku', 'u Istri'],
    answer: 'u Zagrebu i Zagorju',
    tip: 'The north-west. In Istria and on the islands it is ča.',
  },
  {
    mode: 'narjecja',
    q: 'Gdje se čuje "ča"?',
    en: 'Where do you hear ča?',
    opts: ['u Istri i na otocima', 'u Zagrebu', 'u Slavoniji', 'u Zagorju'],
    answer: 'u Istri i na otocima',
    tip: 'And along parts of the coast.',
  },
  {
    mode: 'narjecja',
    q: 'Je li zagrebački govor kajkavski?',
    en: 'Is Zagreb speech kajkavian?',
    opts: [
      'štokavski je s kajkavskim crtama',
      'da, u cijelosti',
      'ne, posve je standardan',
      'čakavski je',
    ],
    answer: 'štokavski je s kajkavskim crtama',
    tip: 'Štokavian underneath, kajkavian features on top, plus German loanwords.',
  },
  {
    mode: 'narjecja',
    q: 'Što znači "buš"?',
    en: 'What does buš mean?',
    opts: ['bit ćeš', 'budi', 'bio si', 'bih'],
    answer: 'bit ćeš',
    tip: 'The kajkavian future: kaj buš delal — što ćeš raditi.',
  },
  {
    mode: 'narjecja',
    q: 'Kako se "što ćeš raditi" kaže u Zagrebu neformalno?',
    en: 'Informally in Zagreb:',
    opts: ['kaj buš delal', 'ča ćeš delat', 'što ćeš raditi', 'kaj ćeš raditi'],
    answer: 'kaj buš delal',
    tip: 'And on the coast, ča ćeš delat.',
  },
  {
    mode: 'narjecja',
    q: 'Koje je narječje osnova standarda?',
    en: 'Which underlies the standard?',
    opts: ['štokavsko', 'kajkavsko', 'čakavsko', 'sva tri'],
    answer: 'štokavsko',
    tip: 'The other two are heritage varieties, and treasured ones.',
  },
  {
    mode: 'narjecja',
    q: 'Kako se "gdje" kaže na obali?',
    en: 'How is gdje said on the coast?',
    opts: ['di', 'kaj', 'ča', 'kade'],
    answer: 'di',
    tip: 'Di si? is the standard coastal greeting — and it means "how are you".',
  },
  {
    mode: 'narjecja',
    q: 'Odakle zagrebačkom govoru njemačke riječi?',
    en: 'Why the German layer in Zagreb?',
    opts: [
      'iz austrougarskog razdoblja',
      'iz turskog razdoblja',
      'iz mletačkog razdoblja',
      'iz novijeg doba',
    ],
    answer: 'iz austrougarskog razdoblja',
    tip: 'The coast got Venetian; the north-west got Vienna.',
  },

  // ── posudbe ───────────────────────────────────────────────────────────────
  {
    mode: 'posudbe',
    q: 'Što je "pjat"?',
    en: 'What is a pjat?',
    opts: ['tanjur', 'pladanj', 'zdjela', 'pribor'],
    answer: 'tanjur',
    tip: 'From Venetian. The standard word is tanjur.',
  },
  {
    mode: 'posudbe',
    q: 'Što je "kužina"?',
    en: 'What is a kužina?',
    opts: ['kuhinja', 'kuharica', 'ostava', 'blagovaonica'],
    answer: 'kuhinja',
    tip: 'Cucina, straight off the boat.',
  },
  {
    mode: 'posudbe',
    q: 'Što je "škatula"?',
    en: 'What is a škatula?',
    opts: ['kutija', 'škrinja', 'ladica', 'vrećica'],
    answer: 'kutija',
    tip: 'Scatola. The standard word is kutija.',
  },
  {
    mode: 'posudbe',
    q: 'Što znači "gušt"?',
    en: 'What does gušt mean?',
    opts: ['užitak', 'okus jela', 'nagađanje', 'običaj'],
    answer: 'užitak',
    tip: 'Gusto — pleasure. Baš mi je gušt.',
  },
  {
    mode: 'posudbe',
    q: 'Odakle obali toliko talijanskih riječi?',
    en: 'Why so many Italian words?',
    opts: ['iz mletačke uprave', 'iz turskog razdoblja', 'iz novijeg turizma', 'iz latinskog'],
    answer: 'iz mletačke uprave',
    tip: 'Centuries of Venetian rule along the Adriatic.',
  },
  {
    mode: 'posudbe',
    q: 'Ima li standardni hrvatski svoje riječi za sve to?',
    en: 'Does the standard have its own?',
    opts: ['da, za sve navedeno', 'ne', 'samo za neke', 'ovisi o kraju'],
    answer: 'da, za sve navedeno',
    tip: 'tanjur, kuhinja, kutija, užitak — and the regional forms live alongside them.',
  },
  {
    mode: 'posudbe',
    q: 'Jesu li te riječi pogrešne?',
    en: 'Are those words wrong?',
    opts: ['ne, regionalne su', 'da, treba ih izbjegavati', 'da, strane su', 'samo u pisanju'],
    answer: 'ne, regionalne su',
    tip: 'Regional rather than wrong — but not what you write in a formal text.',
  },
  {
    mode: 'posudbe',
    q: 'Što je "špica" u Zagrebu?',
    en: 'What is špica in Zagreb?',
    opts: ['subotnje ispijanje kave u centru', 'vrh nečega', 'gužva u prometu', 'početak filma'],
    answer: 'subotnje ispijanje kave u centru',
    tip: 'A local institution, and the word means several other things elsewhere.',
  },

  // ── ikavica ───────────────────────────────────────────────────────────────
  {
    mode: 'ikavica',
    q: 'Kako se "mjesto" kaže ikavski?',
    en: 'The ikavian form of mjesto:',
    opts: ['misto', 'mesto', 'mjasto', 'mistu'],
    answer: 'misto',
    tip: 'The reflex becomes i throughout.',
  },
  {
    mode: 'ikavica',
    q: 'Kako se "dijete" kaže ikavski?',
    en: 'The ikavian form of dijete:',
    opts: ['dite', 'dice', 'djite', 'ditje'],
    answer: 'dite',
    tip: 'dite, and the plural is dica.',
  },
  {
    mode: 'ikavica',
    q: 'Kako se "vrijeme" kaže ikavski?',
    en: 'The ikavian form of vrijeme:',
    opts: ['vrime', 'vrimena', 'vrijme', 'vrimen'],
    answer: 'vrime',
    tip: 'Heard across Dalmatia and parts of Slavonia.',
  },
  {
    mode: 'ikavica',
    q: 'Što ikavica zamjenjuje?',
    en: 'What does it replace?',
    opts: ['odraz -ije- ili -je-', 'naglasak', 'padežne nastavke', 'red riječi'],
    answer: 'odraz -ije- ili -je-',
    tip: 'One reflex of the same old vowel the standard renders as ije or je.',
  },
  {
    mode: 'ikavica',
    q: 'Je li ikavica hrvatska?',
    en: 'Is ikavian Croatian?',
    opts: ['da, domaći je odraz', 'ne, strana je', 'samo u pjesmama', 'samo povijesno'],
    answer: 'da, domaći je odraz',
    tip: 'A Croatian dialect reflex, spoken by a great many people today.',
  },
  {
    mode: 'ikavica',
    q: 'Što lekcija savjetuje s regionalnim govorom?',
    en: 'What does the lesson advise?',
    opts: [
      'razumjeti ga, ne izvoditi ga',
      'usvojiti govor mjesta',
      'izbjegavati ga posve',
      'miješati ga sa standardom',
    ],
    answer: 'razumjeti ga, ne izvoditi ga',
    tip: 'Understand it; do not perform it. One borrowed feature is audible at once.',
  },
  {
    mode: 'ikavica',
    q: 'Zašto je izvođenje narječja rizično?',
    en: 'Why is performing one risky?',
    opts: ['jedna crta bez ostalih zvuči izvedeno', 'nepristojno je', 'teško je', 'nije rizično'],
    answer: 'jedna crta bez ostalih zvuči izvedeno',
    tip: 'Varieties come as systems. Borrowing one word out of one is what shows.',
  },
  {
    mode: 'ikavica',
    q: 'Što je korisno prepoznati u vlastitu govoru?',
    en: 'What is worth spotting in your own speech?',
    opts: ['oblike koji pripadaju kraju, a ne standardu', 'brzinu govora', 'naglasak', 'ništa'],
    answer: 'oblike koji pripadaju kraju, a ne standardu',
    tip: 'Especially for heritage speakers, whose Croatian came from one region.',
  },
];
