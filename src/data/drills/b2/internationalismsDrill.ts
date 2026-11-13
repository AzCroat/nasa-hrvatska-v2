// src/data/drills/b2/internationalismsDrill.ts
//
// B2 INTERNATIONALISMS — the drill for the `internationalisms` lesson.
//
//   gender — the ending tells the gender: -cija/-ura/-ika feminine, -izam/-ment/-tet masculine
//   forms  — the cases: u turizmu (the a drops), na informaciji, -irati → -iram
//   native — the native word beside an international one: računalo, zrakoplov, kazalište
//
// Only one native/international pair ever appears in one item, so no correct
// alternative is marked wrong.

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const INTERNATIONALISMS_MODE_LABELS: Record<string, string> = {
  gender: '⚧ Gender from the ending',
  forms: '🔤 Endings in the cases',
  native: '🇭🇷 The native word',
};

export const INTERNATIONALISMS_DRILL_DATA: ModeDrillItem[] = [
  // ── gender ───────────────────────────────────────────────────────────────
  {
    mode: 'gender',
    q: '____ organizacija pomaže djeci.',
    en: 'That organisation helps children.',
    opts: ['Taj', 'Ta', 'To', 'Te'],
    answer: 'Ta',
    tip: '-cija words are feminine: ta organizacija.',
  },
  {
    mode: 'gender',
    q: '____ dokument je važan.',
    en: 'That document is important.',
    opts: ['Ta', 'To', 'Taj', 'Ti'],
    answer: 'Taj',
    tip: '-ment words are masculine: taj dokument.',
  },
  {
    mode: 'gender',
    q: 'Hrvatski turizam je jako ____.',
    en: 'Croatian tourism is very developed.',
    opts: ['razvijena', 'razvijeno', 'razvijeni', 'razvijen'],
    answer: 'razvijen',
    tip: '-izam words are masculine: razvijen.',
  },
  {
    mode: 'gender',
    q: 'Matematika mi je uvijek bila ____.',
    en: 'Maths has always been difficult for me.',
    opts: ['teška', 'težak', 'teško', 'teški'],
    answer: 'teška',
    tip: '-ika words are feminine: teška.',
  },
  {
    mode: 'gender',
    q: 'Naš fakultet je ____.',
    en: 'Our faculty is new.',
    opts: ['nova', 'novo', 'nov', 'nove'],
    answer: 'nov',
    tip: '-tet words are masculine: nov.',
  },
  {
    mode: 'gender',
    q: 'Ovo je bila ____ situacija.',
    en: 'This was an awkward situation.',
    opts: ['neugodan', 'neugodno', 'neugodni', 'neugodna'],
    answer: 'neugodna',
    tip: 'situacija is feminine: neugodna.',
  },
  {
    mode: 'gender',
    q: 'Moja sestra je ____.',
    en: 'My sister is a cyclist.',
    opts: ['biciklizam', 'biciklistica', 'bicikl', 'biciklistu'],
    answer: 'biciklistica',
    tip: 'A woman in an -ist role: -istica.',
  },
  {
    mode: 'gender',
    q: 'Parlament je ____ novi zakon.',
    en: 'Parliament passed a new law.',
    opts: ['donijela', 'donio', 'donijelo', 'donijeli'],
    answer: 'donio',
    tip: 'parlament is masculine: donio.',
  },
  // ── forms ────────────────────────────────────────────────────────────────
  {
    mode: 'forms',
    q: 'Radim u ____.',
    en: 'I work in tourism.',
    opts: ['turizamu', 'turizmu', 'turizam', 'turizma'],
    answer: 'turizmu',
    tip: 'u + locative, and the a before m drops.',
  },
  {
    mode: 'forms',
    q: 'Hvala na ____!',
    en: 'Thanks for letting me know!',
    opts: ['informacija', 'informaciju', 'informaciji', 'informacijom'],
    answer: 'informaciji',
    tip: 'hvala na + locative: na informaciji.',
  },
  {
    mode: 'forms',
    q: 'Gledam na budućnost s ____.',
    en: 'I look at the future with optimism.',
    opts: ['optimizamom', 'optimizmom', 'optimizmu', 'optimizam'],
    answer: 'optimizmom',
    tip: 's + instrumental, and the a drops.',
  },
  {
    mode: 'forms',
    q: 'Ljeti u gradu ima puno ____.',
    en: 'In summer there are lots of tourists in town.',
    opts: ['turisti', 'turistima', 'turiste', 'turista'],
    answer: 'turista',
    tip: 'After puno: the genitive plural of turist.',
  },
  {
    mode: 'forms',
    q: 'Studiram na Filozofskom ____.',
    en: 'I study at the Faculty of Philosophy.',
    opts: ['fakultet', 'fakulteta', 'fakultetu', 'fakultetom'],
    answer: 'fakultetu',
    tip: 'na + locative: na fakultetu.',
  },
  {
    mode: 'forms',
    q: 'Govorili smo o ____ u Hrvatskoj.',
    en: 'We talked about democracy in Croatia.',
    opts: ['demokracija', 'demokraciju', 'demokracijom', 'demokraciji'],
    answer: 'demokraciji',
    tip: 'o + locative of a feminine noun in -a.',
  },
  {
    mode: 'forms',
    q: 'Oni ____ tečaj hrvatskog jezika.',
    en: 'They are organising a Croatian language course.',
    opts: ['organiziraju', 'organiziravaju', 'organiziruju', 'organizire'],
    answer: 'organiziraju',
    tip: '-irati verbs are regular: -iram, -iraju.',
  },
  {
    mode: 'forms',
    q: 'Ja ne ____ dobro na stres.',
    en: 'I don’t react well to stress.',
    opts: ['reagiravam', 'reagiruem', 'reagiram', 'reagirem'],
    answer: 'reagiram',
    tip: '-irati → -iram.',
  },
  // ── native ───────────────────────────────────────────────────────────────
  {
    mode: 'native',
    q: 'Za pisanje zadaće koristim ____.',
    en: 'I use a computer for my homework.',
    opts: ['zrakoplov', 'računalo', 'kazalište', 'tvrtku'],
    answer: 'računalo',
    tip: 'računalo — the native word, from računati (to calculate).',
  },
  {
    mode: 'native',
    q: '____ za London kasni dva sata.',
    en: 'The plane to London is two hours late.',
    opts: ['Računalo', 'Kazalište', 'Zrakoplov', 'Zemljopis'],
    answer: 'Zrakoplov',
    tip: 'zrakoplov — literally "air-sailer".',
  },
  {
    mode: 'native',
    q: 'Večeras idemo u ____ na predstavu.',
    en: 'Tonight we are going to the theatre to see a play.',
    opts: ['kazalište', 'računalo', 'zrakoplov', 'glazbu'],
    answer: 'kazalište',
    tip: 'kazalište — the native word for a theatre.',
  },
  {
    mode: 'native',
    q: 'Volim slušati klasičnu ____.',
    en: 'I like listening to classical music.',
    opts: ['tvrtku', 'kazalište', 'zrakoplov', 'glazbu'],
    answer: 'glazbu',
    tip: 'glazba — the native word for music.',
  },
  {
    mode: 'native',
    q: 'Radim u maloj ____.',
    en: 'I work for a small company.',
    opts: ['tvrtka', 'tvrtku', 'tvrtki', 'tvrtkom'],
    answer: 'tvrtki',
    tip: 'u + locative: u tvrtki.',
  },
  {
    mode: 'native',
    q: 'Koja je hrvatska riječ za avion?',
    en: 'Which is the native Croatian word for an aeroplane?',
    opts: ['računalo', 'zrakoplov', 'tvrtka', 'glazba'],
    answer: 'zrakoplov',
    tip: 'avion — zrakoplov.',
  },
  {
    mode: 'native',
    q: 'Koja je hrvatska riječ za teatar?',
    en: 'Which is the native Croatian word for a theatre?',
    opts: ['zemljopis', 'glazba', 'računalo', 'kazalište'],
    answer: 'kazalište',
    tip: 'teatar — kazalište.',
  },
  {
    mode: 'native',
    q: 'Na satu ____ učimo o rijekama i planinama.',
    en: 'In geography class we learn about rivers and mountains.',
    opts: ['glazbe', 'zemljopisa', 'kazališta', 'računala'],
    answer: 'zemljopisa',
    tip: 'zemljopis — the native word for geography.',
  },
];
