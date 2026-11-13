// src/data/drills/b1/loveAndMarriageDrill.ts
//
// B1 LOVE AND MARRIAGE — the drill for the `love-and-marriage` lesson.
//
// The verb depends on who is marrying: a man oženi se + instrumental (oženio se Anom),
// a woman uda se za + accusative (udala se za Marka), a couple vjenča se. Falling in love
// is u + accusative, going out is s + instrumental, and svidjeti se puts the one who
// likes in the dative.
//
// Three modes:
//   brak   — oženiti se / udati se / vjenčati se, and married or not
//   padezi — the cases these verbs take
//   izrazi — the wedding and the idioms of love

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const LOVE_AND_MARRIAGE_MODE_LABELS: Record<string, string> = {
  brak: '💍 Brak',
  padezi: '❤️ Tko koga',
  izrazi: '🥂 Izrazi',
};

export const LOVE_AND_MARRIAGE_DRILL_DATA: ModeDrillItem[] = [
  // ── brak ──────────────────────────────────────────────────────────────────
  {
    mode: 'brak',
    q: 'Ana se ____ za Marka.',
    en: 'Ana married Marko.',
    opts: ['udala', 'oženila', 'vjenčala', 'zaljubila'],
    answer: 'udala',
    tip: 'A woman marries with udati se za + the accusative.',
  },
  {
    mode: 'brak',
    q: 'Marko se ____ Anom.',
    en: 'Marko married Ana.',
    opts: ['oženio', 'udao', 'zaljubio', 'svidio'],
    answer: 'oženio',
    tip: 'A man marries with oženiti se + the instrumental.',
  },
  {
    mode: 'brak',
    q: 'Ivan se oženio ____.',
    en: 'Ivan married Petra.',
    opts: ['Petrom', 'za Petru', 'Petri', 's Petru'],
    answer: 'Petrom',
    tip: 'oženiti se takes the instrumental with no preposition.',
  },
  {
    mode: 'brak',
    q: 'Petra se udala ____.',
    en: 'Petra married Ivan.',
    opts: ['za Ivana', 'Ivanom', 'za Ivanom', 'Ivanu'],
    answer: 'za Ivana',
    tip: 'udati se za + the accusative.',
  },
  {
    mode: 'brak',
    q: 'Moja sestra je ____.',
    en: 'My sister is married.',
    opts: ['udana', 'oženjena', 'oženjen', 'udan'],
    answer: 'udana',
    tip: 'Of a woman: udana. Of a man: oženjen.',
  },
  {
    mode: 'brak',
    q: 'Moj brat je još ____.',
    en: 'My brother is still single.',
    opts: ['neoženjen', 'neudana', 'neudan', 'neoženjena'],
    answer: 'neoženjen',
    tip: 'Of a man: neoženjen.',
  },
  {
    mode: 'brak',
    q: 'Ana i Marko ____ su se u lipnju.',
    en: 'Ana and Marko got married in June.',
    opts: ['vjenčali', 'udali', 'vjenčale', 'vjenčala'],
    answer: 'vjenčali',
    tip: 'A couple: vjenčati se, masculine plural for a mixed pair.',
  },
  {
    mode: 'brak',
    q: 'Nakon pet godina braka ____ su se.',
    en: 'After five years of marriage they got divorced.',
    opts: ['razveli', 'razveo', 'razvela', 'razvesti'],
    answer: 'razveli',
    tip: 'razvesti se; the plural past participle is razveli.',
  },

  // ── padezi ────────────────────────────────────────────────────────────────
  {
    mode: 'padezi',
    q: 'Zaljubio se ____ Anu.',
    en: 'He fell in love with Ana.',
    opts: ['u', 's', 'za', 'na'],
    answer: 'u',
    tip: 'Falling in love is movement into: u + the accusative.',
  },
  {
    mode: 'padezi',
    q: 'Zaljubila se u ____.',
    en: 'She fell in love with Marko.',
    opts: ['Marka', 'Marku', 'Markom', 'Marke'],
    answer: 'Marka',
    tip: 'u + the accusative; Marko is animate.',
  },
  {
    mode: 'padezi',
    q: 'Hoda s ____ već godinu dana.',
    en: 'She has been going out with Luka for a year.',
    opts: ['Lukom', 'Luku', 'Luke', 'Luki'],
    answer: 'Lukom',
    tip: 'hodati s + the instrumental.',
  },
  {
    mode: 'padezi',
    q: 'Ana se svidjela ____.',
    en: 'Marko liked Ana.',
    opts: ['Marku', 'Marka', 'Markom', 'Marke'],
    answer: 'Marku',
    tip: 'With svidjeti se the one who likes is in the dative.',
  },
  {
    mode: 'padezi',
    q: 'Svidio ____ se čim ga je vidjela.',
    en: 'She liked him as soon as she saw him.',
    opts: ['joj', 'ju', 'je', 'nju'],
    answer: 'joj',
    tip: 'The one who likes is in the dative: joj, before se.',
  },
  {
    mode: 'padezi',
    q: 'Prekinula je s ____.',
    en: 'She broke up with her boyfriend.',
    opts: ['dečkom', 'dečka', 'dečku', 'dečki'],
    answer: 'dečkom',
    tip: 'prekinuti s + the instrumental.',
  },
  {
    mode: 'padezi',
    q: 'Zaručila se s ____.',
    en: 'She got engaged to Tomislav.',
    opts: ['Tomislavom', 'Tomislava', 'Tomislavu', 'Tomislave'],
    answer: 'Tomislavom',
    tip: 'zaručiti se s + the instrumental.',
  },
  {
    mode: 'padezi',
    q: 'Zaljubljen je ____ nju do ušiju.',
    en: 'He is head over heels in love with her.',
    opts: ['u', 'za', 's', 'na'],
    answer: 'u',
    tip: 'The state keeps the case of the verb: u + the accusative.',
  },

  // ── izrazi ────────────────────────────────────────────────────────────────
  {
    mode: 'izrazi',
    q: 'Konačno je uplovio u bračnu ____.',
    en: 'He finally got married.',
    opts: ['luku', 'luka', 'luci', 'lukom'],
    answer: 'luku',
    tip: 'uploviti u + the accusative: sailing into the harbour.',
  },
  {
    mode: 'izrazi',
    q: 'Bila je to ljubav na prvi ____.',
    en: 'It was love at first sight.',
    opts: ['pogled', 'pogleda', 'pogledu', 'pogledom'],
    answer: 'pogled',
    tip: 'na + the accusative in this fixed phrase.',
  },
  {
    mode: 'izrazi',
    q: 'Slomio joj je ____.',
    en: 'He broke her heart.',
    opts: ['srce', 'srca', 'srcu', 'srcem'],
    answer: 'srce',
    tip: 'The direct object, neuter: srce.',
  },
  {
    mode: 'izrazi',
    q: 'Na vjenčanju je ____ bio njegov najbolji prijatelj.',
    en: 'His best friend was the best man at the wedding.',
    opts: ['kum', 'kumu', 'kumom', 'kuma'],
    answer: 'kum',
    tip: 'The subject, masculine: kum.',
  },
  {
    mode: 'izrazi',
    q: 'Svadba je bila u hotelu, a ____ u crkvi.',
    en: 'The reception was in a hotel, and the ceremony in a church.',
    opts: ['vjenčanje', 'vjenčanja', 'vjenčanju', 'vjenčanjem'],
    answer: 'vjenčanje',
    tip: 'The subject of the second clause, in the nominative.',
  },
  {
    mode: 'izrazi',
    q: 'Mladenci su plesali prvi ____.',
    en: 'The newlyweds danced the first dance.',
    opts: ['ples', 'plesa', 'plesu', 'plesom'],
    answer: 'ples',
    tip: 'The direct object: ples.',
  },
  {
    mode: 'izrazi',
    q: 'Na vjenčanju se mladoženja ženi, a ____ se udaje.',
    en: 'At the wedding the groom takes a wife, and the bride takes a husband.',
    opts: ['mladenka', 'mladenci', 'kuma', 'svekrva'],
    answer: 'mladenka',
    tip: 'mladenka — the bride; mladenci are the couple.',
  },
  {
    mode: 'izrazi',
    q: 'Muževa majka je ženi ____.',
    en: 'To the wife, her husband’s mother is her mother-in-law.',
    opts: ['svekrva', 'punica', 'kuma', 'sestrična'],
    answer: 'svekrva',
    tip: 'svekrva on the husband’s side; punica is the wife’s mother.',
  },
  {
    mode: 'izrazi',
    q: 'Kad se zaljubiš, imaš leptiriće u ____.',
    en: 'When you fall in love, you have butterflies in your stomach.',
    opts: ['trbuhu', 'trbuh', 'trbuha', 'trbuhom'],
    answer: 'trbuhu',
    tip: 'u + the locative: trbuhu.',
  },
];
