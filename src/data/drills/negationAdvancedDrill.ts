// src/data/drills/negationAdvancedDrill.ts
//
// B2 ADVANCED NEGATION — the drill for the `negation-advanced` lesson.
//
// A1's `negacija` teaches that Croatian negates a verb and that ne fuses with
// four of them. Nothing anywhere teaches what happens once a sentence has more
// than one thing to deny, and that is where English habits do real damage:
// English forbids double negatives, Croatian REQUIRES them. *Nitko ne zna* has
// two negatives and is the only correct form; *nitko zna* is not a stronger or
// more formal variant, it is broken.
//
// The other half is scope. Croatian moves the negated element next to the
// negated verb, so word order alone decides what is being denied — *Ne idem ja
// sutra* and *Ja ne idem sutra* deny different things, and both are ordinary.
//
// Three modes:
//   nini        — ni…ni, and the obligatory double negative
//   opseg       — what exactly is being denied
//   konstrukcije — nikakav, ne samo…nego i, a da ne

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const NEGATION_ADVANCED_MODE_LABELS: Record<string, string> = {
  nini: '➖ Ni… ni…',
  opseg: '🎯 Opseg niječnosti',
  konstrukcije: '🧩 Konstrukcije',
};

export const NEGATION_ADVANCED_DRILL_DATA: ModeDrillItem[] = [
  // ── nini ──────────────────────────────────────────────────────────────────
  {
    mode: 'nini',
    q: 'Nitko ____ zna.',
    en: 'Nobody knows.',
    opts: ['ne', 'ni', 'niti', '—'],
    answer: 'ne',
    tip: 'Croatian REQUIRES the double negative: nitko ne zna. "Nitko zna" is wrong.',
  },
  {
    mode: 'nini',
    q: 'Ne volim ____ čaj ____ kavu.',
    en: 'I like neither tea nor coffee.',
    opts: ['ni… ni', 'i… i', 'ili… ili', 'niti… i'],
    answer: 'ni… ni',
    tip: 'ni… ni… lists the absences, and the verb stays negated as well.',
  },
  {
    mode: 'nini',
    q: 'Nikad ____ kasnim.',
    en: 'I am never late.',
    opts: ['ne', 'ni', 'niti', '—'],
    answer: 'ne',
    tip: 'nikad ne kasnim — the negative adverb does not replace the verb negation.',
  },
  {
    mode: 'nini',
    q: 'Nemam ____.',
    en: 'I have nothing.',
    opts: ['ništa', 'nešto', 'išta', 'sve'],
    answer: 'ništa',
    tip: 'Nemam ništa — two negatives, one meaning.',
  },
  {
    mode: 'nini',
    q: 'Zašto engleski govornici griješe ovdje?',
    en: 'Why do English speakers get this wrong?',
    opts: [
      'engleski zabranjuje dvostruku niječnicu',
      'hrvatski nema niječnicu',
      'redoslijed je slobodan',
      'nema razloga',
    ],
    answer: 'engleski zabranjuje dvostruku niječnicu',
    tip: 'The habit transfers and produces a sentence Croatian simply does not allow.',
  },
  {
    mode: 'nini',
    q: 'Nigdje ga ____ vidim.',
    en: 'I do not see him anywhere.',
    opts: ['ne', 'ni', 'niti', '—'],
    answer: 'ne',
    tip: 'Every ni-word keeps the verb negated: nigdje ne, nikako ne, nikamo ne.',
  },
  {
    mode: 'nini',
    q: 'Koliko niječnica smije stajati u hrvatskoj rečenici?',
    en: 'How many negatives may a Croatian sentence carry?',
    opts: ['koliko treba', 'najviše jedna', 'najviše dvije', 'nijedna'],
    answer: 'koliko treba',
    tip: 'Nikad nikome ništa ne govori — four, and perfectly standard.',
  },
  {
    mode: 'nini',
    q: 'Nije došao, ____ je javio.',
    en: 'He did not come, nor did he let us know.',
    opts: ['niti', 'ni', 'ali', 'nego'],
    answer: 'niti',
    tip: 'Niti joins whole negated clauses; ni joins the items inside one.',
  },

  // ── opseg ─────────────────────────────────────────────────────────────────
  {
    mode: 'opseg',
    q: '"Ne idem ja sutra." Što se niječe?',
    en: 'What is being denied?',
    opts: ['da idem ja', 'da je sutra', 'cijela rečenica', 'ništa'],
    answer: 'da idem ja',
    tip: 'What sits beside the negated verb is what is denied — here, that it is ME going.',
  },
  {
    mode: 'opseg',
    q: '"Ne idem sutra, nego u petak." Što se niječe?',
    en: 'And here?',
    opts: ['vrijeme', 'osoba', 'radnja', 'mjesto'],
    answer: 'vrijeme',
    tip: 'The nego half tells you: the day is what is being corrected.',
  },
  {
    mode: 'opseg',
    q: 'Što određuje opseg niječnosti?',
    en: 'What decides the scope?',
    opts: ['red riječi', 'naglasak samo', 'padež', 'vrsta glagola'],
    answer: 'red riječi',
    tip: 'Word order, which is why moving one word changes the claim.',
  },
  {
    mode: 'opseg',
    q: 'Nisam rekao ____ nego da razmislim. (da neću)',
    en: 'I did not say I would not, but that I would think about it.',
    opts: ['da neću', 'da ne', 'ne', 'niti'],
    answer: 'da neću',
    tip: 'The negation applies to the reported clause, not to rekao.',
  },
  {
    mode: 'opseg',
    q: '"Svi nisu došli" i "Nisu svi došli" — je li isto?',
    en: 'Are those the same?',
    opts: ['nije isto', 'isto je', 'oba su pogrešna', 'ovisi o naglasku'],
    answer: 'nije isto',
    tip: 'Nisu svi došli = not all came. Svi nisu došli = none came. Position decides.',
  },
  {
    mode: 'opseg',
    q: 'Ne zbog ____, nego zbog vremena. (novac)',
    en: 'Not because of money, but because of the weather.',
    opts: ['novca', 'novac', 'novcu', 'novcem'],
    answer: 'novca',
    tip: 'Zbog keeps its genitive under negation; only the scope moves.',
  },
  {
    mode: 'opseg',
    q: 'Kako se ističe što se niječe?',
    en: 'How do you mark what is denied?',
    opts: ['stavi se uz zanijekani glagol', 'stavi se na kraj', 'ponovi se', 'stavi se u genitiv'],
    answer: 'stavi se uz zanijekani glagol',
    tip: 'Next to the negated verb. Everything else in the sentence stays affirmed.',
  },
  {
    mode: 'opseg',
    q: '"Nije on kriv." Što se poriče?',
    en: 'What is denied?',
    opts: ['da je on', 'da je kriv', 'cijela tvrdnja', 'ništa'],
    answer: 'da je on',
    tip: 'Someone is to blame — just not him. On sits beside the negated verb.',
  },

  // ── konstrukcije ──────────────────────────────────────────────────────────
  {
    mode: 'konstrukcije',
    q: 'Nemam ____ plan. (baš nikakav)',
    en: 'I have no plan whatsoever.',
    opts: ['nikakav', 'nijedan', 'nikoji', 'nijedanput'],
    answer: 'nikakav',
    tip: 'Nikakav denies the whole CATEGORY — stronger than nijedan, which counts.',
  },
  {
    mode: 'konstrukcije',
    q: 'Koja je razlika: "nikakav" i "nijedan"?',
    en: 'What is the difference?',
    opts: ['vrsta / broj', 'formalno / neformalno', 'prošlost / sadašnjost', 'nema razlike'],
    answer: 'vrsta / broj',
    tip: 'Nikakav = no kind of. Nijedan = not one of them.',
  },
  {
    mode: 'konstrukcije',
    q: '____ je došao, nego i pomogao.',
    en: 'He not only came, but also helped.',
    opts: ['Ne samo da', 'Ne samo', 'Nije samo', 'Niti'],
    answer: 'Ne samo da',
    tip: 'ne samo da… nego i… — an argument move, not a denial.',
  },
  {
    mode: 'konstrukcije',
    q: 'Otišao je ____ ništa rekao.',
    en: 'He left without saying anything.',
    opts: ['a da nije', 'bez da je', 'bez', 'niti'],
    answer: 'a da nije',
    tip: 'a da ne… is how Croatian says "without doing"; "bez da" is not standard.',
  },
  {
    mode: 'konstrukcije',
    q: 'Nemoj otići ____ se pozdraviš.',
    en: 'Do not leave without saying goodbye.',
    opts: ['a da se ne', 'bez da', 'niti', 'ni'],
    answer: 'a da se ne',
    tip: 'Same construction in the negative imperative.',
  },
  {
    mode: 'konstrukcije',
    q: 'Što izriče "ne samo… nego i…"?',
    en: 'What does it express?',
    opts: ['dodavanje', 'poricanje', 'uzrok', 'vrijeme'],
    answer: 'dodavanje',
    tip: 'It adds. The ne is structural, and nothing is actually being denied.',
  },
  {
    mode: 'konstrukcije',
    q: 'Nije bilo ____ problema. (baš nijednoga)',
    en: 'There were no problems at all.',
    opts: ['nikakvih', 'nikakve', 'nikakav', 'nijedan'],
    answer: 'nikakvih',
    tip: 'Genitive plural after the negated existential: nije bilo nikakvih problema.',
  },
  {
    mode: 'konstrukcije',
    q: 'Zašto "bez da" treba izbjegavati?',
    en: 'Why avoid "bez da"?',
    opts: ['nije standardno', 'predugo je', 'preformalno je', 'mijenja značenje'],
    answer: 'nije standardno',
    tip: 'A calque. Standard Croatian uses a da ne + present, or bez + a verbal noun.',
  },
];
