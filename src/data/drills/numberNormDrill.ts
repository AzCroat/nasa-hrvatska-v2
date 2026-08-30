// src/data/drills/numberNormDrill.ts
//
// C2 BROJEVI — NORMA — the drill for the `brojevi-norma` lesson.
//
// The punctuation is the exact REVERSE of English and gets past every spell
// checker: a dot separates thousands and a comma marks the decimal, so
// *1.500,75* is one and a half thousand. A text that gets this backwards is
// not merely inelegant; it states different numbers.
//
// Dates take ordinal dots and the month in the GENITIVE — *5. svibnja 2026.* —
// and there is a space before every unit and before the percent sign: *20 %*,
// *3 kg*.
//
// And *postotak* and *postotni bod* measure different things. A rate moving
// from 4 % to 5 % has risen by one PERCENTAGE POINT and by twenty-five per
// cent, and a text that conflates them has reported the wrong number.
//
// Three modes:
//   interpunkcija — the separators, the spaces and the dates
//   sklonidba     — declined against undeclined numbers, and the genitive
//   bodovi        — postotak against postotni bod

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const NUMBER_NORM_MODE_LABELS: Record<string, string> = {
  interpunkcija: '🔢 Zapis brojeva',
  sklonidba: '📐 Sklonidba i genitiv',
  bodovi: '📊 Postotak i bod',
};

export const NUMBER_NORM_DRILL_DATA: ModeDrillItem[] = [
  // ── interpunkcija ─────────────────────────────────────────────────────────
  {
    mode: 'interpunkcija',
    q: 'Kako se piše tisuću petsto i 75 lipa?',
    en: '1500.75 in Croatian:',
    opts: ['1.500,75', '1,500.75', '1 500.75', '1500,75 kn.'],
    answer: '1.500,75',
    tip: 'Dot for thousands, comma for the decimal — the reverse of English.',
  },
  {
    mode: 'interpunkcija',
    q: 'Kako se piše 5 May 2026?',
    en: '5 May 2026:',
    opts: ['5. svibnja 2026.', '5 svibanj 2026', '5.svibnja 2026', '05/05/2026.'],
    answer: '5. svibnja 2026.',
    tip: 'Ordinal dots, and the month in the GENITIVE.',
  },
  {
    mode: 'interpunkcija',
    q: 'Kako se piše 20 percent?',
    en: '20 percent:',
    opts: ['20 %', '20%', '20 posto%', '%20'],
    answer: '20 %',
    tip: 'A space before the sign — the same rule as before a unit.',
  },
  {
    mode: 'interpunkcija',
    q: 'Kako se piše 3 kilograms?',
    en: '3 kilograms:',
    opts: ['3 kg', '3kg', '3-kg', 'kg 3'],
    answer: '3 kg',
    tip: 'Space before every unit, without exception.',
  },
  {
    mode: 'interpunkcija',
    q: 'Kako se u tekstu piše "the thirties"?',
    en: 'the thirties, in prose:',
    opts: ['tridesetih godina', '30-ih godina', "30'ih godina", '30ih godina'],
    answer: 'tridesetih godina',
    tip: 'Decades are written out in prose.',
  },
  {
    mode: 'interpunkcija',
    q: 'Kako se piše vrijeme "at 2 pm"?',
    en: 'at 2 pm:',
    opts: ['u 14 sati', 'u 14:00 sati', 'u 14h', 'u 2 popodne sati'],
    answer: 'u 14 sati',
    tip: 'The word sati replaces the second half of the clock reading.',
  },
  {
    mode: 'interpunkcija',
    q: 'Smije li rečenica početi brojkom?',
    en: 'May a sentence open with a numeral?',
    opts: ['ne', 'da', 'samo u tablici', 'samo velikim brojem'],
    answer: 'ne',
    tip: 'Write it out, or restructure the sentence.',
  },
  {
    mode: 'interpunkcija',
    q: 'Kada se piše riječ, a kada brojka?',
    en: 'Words or numerals?',
    opts: [
      'riječi za male brojeve, brojke za velike',
      'uvijek brojke',
      'uvijek riječi',
      'ovisi o registru',
    ],
    answer: 'riječi za male brojeve, brojke za velike',
    tip: 'And never a numeral at the start of a sentence.',
  },

  // ── sklonidba ─────────────────────────────────────────────────────────────
  {
    mode: 'sklonidba',
    q: 'Pet ____. (kuna)',
    en: 'five kuna',
    opts: ['kuna', 'kune', 'kunu', 'kunama'],
    answer: 'kuna',
    tip: 'Five and above take the GENITIVE PLURAL.',
  },
  {
    mode: 'sklonidba',
    q: 'Dvije ____. (kuna)',
    en: 'two kuna',
    opts: ['kune', 'kuna', 'kunu', 'kunama'],
    answer: 'kune',
    tip: 'Two, three and four take the genitive SINGULAR. The contrast is the rule.',
  },
  {
    mode: 'sklonidba',
    q: 'Koji je oblik formalniji?',
    en: 'Which is more formal?',
    opts: ['s dvama prijedlozima', 's dva prijedloga', 'jednako su', 'ni jedan'],
    answer: 's dvama prijedlozima',
    tip: 'The declined number belongs to documents; s dva prijedloga is neutral.',
  },
  {
    mode: 'sklonidba',
    q: 'Je li genitiv nakon količine izboran?',
    en: 'Is the genitive optional?',
    opts: ['ne', 'da, u govoru', 'da, s malim brojevima', 'samo u pisanju'],
    answer: 'ne',
    tip: 'The lesson says so flatly, and it is the commonest advanced slip.',
  },
  {
    mode: 'sklonidba',
    q: 'Rok je 30 ____ od primitka. (dan)',
    en: '30 days from receipt',
    opts: ['dana', 'dani', 'danima', 'dan'],
    answer: 'dana',
    tip: 'Genitive plural — and dana is both the paucal and the plural here.',
  },
  {
    mode: 'sklonidba',
    q: 'Cijena iznosi 1.250,00 ____. (euro)',
    en: 'The price is 1,250.00 euros.',
    opts: ['eura', 'euro', 'eure', 'eurima'],
    answer: 'eura',
    tip: 'Genitive plural after a number above four.',
  },
  {
    mode: 'sklonidba',
    q: 'Površina je 120 ____.',
    en: 'The area is 120 m².',
    opts: ['m²', 'm2', 'kvadrata m', 'm ²'],
    answer: 'm²',
    tip: 'With a space before it: 120 m².',
  },
  {
    mode: 'sklonidba',
    q: 'Sastanak počinje u ____ i trideset.',
    en: 'The meeting starts at nine thirty.',
    opts: ['devet', 'devetu', 'devetom', 'devete'],
    answer: 'devet',
    tip: 'u devet i trideset, or u pola deset — which is HALF PAST NINE.',
  },

  // ── bodovi ────────────────────────────────────────────────────────────────
  {
    mode: 'bodovi',
    q: 'Stopa je porasla s 4 % na 5 %. Za koliko postotnih bodova?',
    en: 'By how many percentage points?',
    opts: ['jedan', 'dvadeset pet', 'pet', 'četiri'],
    answer: 'jedan',
    tip: 'One percentage point — and twenty-five per cent. Two numbers, both true.',
  },
  {
    mode: 'bodovi',
    q: 'Za koliko posto je porasla?',
    en: 'By what percentage did it rise?',
    opts: ['dvadeset pet posto', 'jedan posto', 'pet posto', 'četiri posto'],
    answer: 'dvadeset pet posto',
    tip: 'From 4 to 5 is a quarter more of what there was.',
  },
  {
    mode: 'bodovi',
    q: 'Što mjeri "postotni bod"?',
    en: 'What does a percentage point measure?',
    opts: [
      'razliku između dvaju postotaka',
      'stoti dio cjeline',
      'relativni porast',
      'apsolutni iznos',
    ],
    answer: 'razliku između dvaju postotaka',
    tip: 'The gap between two rates, not a share of anything.',
  },
  {
    mode: 'bodovi',
    q: 'Udio je porastao za 3,5 ____.',
    en: 'The share rose by 3.5 percentage points.',
    opts: ['postotna boda', 'postotnih bodova', 'posto', 'postotka'],
    answer: 'postotna boda',
    tip: 'Three and a half takes the paucal: 3,5 postotna boda.',
  },
  {
    mode: 'bodovi',
    q: 'Zašto je razlika ozbiljna u novinskom tekstu?',
    en: 'Why does it matter in a news text?',
    opts: ['brojevi se razlikuju višestruko', 'zvuči stručnije', 'radi duljine', 'nije ozbiljna'],
    answer: 'brojevi se razlikuju višestruko',
    tip: 'One and twenty-five are not a rounding difference.',
  },
  {
    mode: 'bodovi',
    q: 'Kako se čita "3,14"?',
    en: 'How is 3,14 read?',
    opts: [
      'tri cijela četrnaest',
      'tristo četrnaest',
      'tri i četrnaest tisuća',
      'tri zarez četrnaest',
    ],
    answer: 'tri cijela četrnaest',
    tip: 'tri cijela četrnaest — and it is pi, not three hundred and fourteen.',
  },
  {
    mode: 'bodovi',
    q: 'Što je "promil"?',
    en: 'What is a promil?',
    opts: ['tisućina', 'stotina', 'desetina', 'milijuntina'],
    answer: 'tisućina',
    tip: 'One part in a thousand — and it appears in blood-alcohol limits.',
  },
  {
    mode: 'bodovi',
    q: 'Koji zapis je točan?',
    en: 'Which is correctly written?',
    opts: ['porast od 3,5 %', 'porast od 3.5%', 'porast od 3,5%', 'porast od 3.5 %'],
    answer: 'porast od 3,5 %',
    tip: 'Comma for the decimal, and a space before the sign.',
  },
];
