// src/data/drills/b2/concessionContrastDrill.ts
//
// B2 CONCESSION AND CONTRAST — the drill for the `concession-contrast` lesson (B2
// position 43).
//
// The lesson used to be served by the subordination drill and the relative-pronoun
// screen, neither of which practises its core: UNATOČ and USPRKOS take the DATIVE
// (unatoč kiši, usprkos problemima), where the genitive feels right to a learner and
// is wrong (B2 book comparison, 2026-11-13). This bank drills that, plus the rest of
// the lesson's tables: iako / premda … ipak, bez obzira na + accusative, doduše,
// međutim, naprotiv, s druge strane, and dok meaning "whereas".
//
// Three modes, eight items each:
//   unatoc — unatoč / usprkos + dative, bez obzira na + accusative
//   iako   — iako / premda clauses, and ipak closing the concession
//   suprot — contrasting: doduše, dok, međutim, naprotiv, s druge strane

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const CONCESSION_CONTRAST_MODE_LABELS: Record<string, string> = {
  unatoc: '🌧️ Unatoč kiši',
  iako: '🤝 Iako…, ipak…',
  suprot: '⚖️ S druge strane',
};

export const CONCESSION_CONTRAST_DRILL_DATA: ModeDrillItem[] = [
  // ── unatoc ────────────────────────────────────────────────────────────────
  {
    mode: 'unatoc',
    q: 'Unatoč lošem ____, izlet je bio odličan.',
    en: 'Despite the bad weather, the trip was excellent.',
    opts: ['vremenu', 'vremena', 'vrijeme', 'vremenom'],
    answer: 'vremenu',
    tip: 'unatoč takes the DATIVE: unatoč lošem vremenu.',
  },
  {
    mode: 'unatoc',
    q: 'Unatoč ____, nastavili smo raditi.',
    en: 'Despite the rain, we kept working.',
    opts: ['kiši', 'kiše', 'kišu', 'kišom'],
    answer: 'kiši',
    tip: 'unatoč kiši — the dative, not the genitive kiše.',
  },
  {
    mode: 'unatoc',
    q: 'Usprkos visokim ____, turisti i dalje dolaze.',
    en: 'In spite of the high prices, tourists keep coming.',
    opts: ['cijenama', 'cijena', 'cijene', 'cijenom'],
    answer: 'cijenama',
    tip: 'usprkos also takes the dative: the dative plural is cijenama.',
  },
  {
    mode: 'unatoc',
    q: 'Usprkos ____, nije odustao.',
    en: 'In spite of everything, he did not give up.',
    opts: ['svemu', 'svega', 'sve', 'svim'],
    answer: 'svemu',
    tip: 'The fixed phrase usprkos svemu — dative.',
  },
  {
    mode: 'unatoc',
    q: 'Unatoč ____ problemima, završili smo projekt na vrijeme.',
    en: 'Despite numerous problems, we finished the project on time.',
    opts: ['brojnim', 'brojnih', 'brojne', 'brojni'],
    answer: 'brojnim',
    tip: 'The adjective follows its noun into the dative plural: brojnim problemima.',
  },
  {
    mode: 'unatoc',
    q: 'Unatoč mojoj ____, nitko nije odgovorio.',
    en: 'Despite my complaint, nobody answered.',
    opts: ['pritužbi', 'pritužbe', 'pritužbu', 'pritužba'],
    answer: 'pritužbi',
    tip: 'Feminine dative singular: mojoj pritužbi.',
  },
  {
    mode: 'unatoc',
    q: 'Bez obzira na ____, uvijek pijemo kavu na terasi.',
    en: 'Regardless of the weather, we always have coffee on the terrace.',
    opts: ['vrijeme', 'vremenu', 'vremena', 'vremenom'],
    answer: 'vrijeme',
    tip: 'bez obzira na takes the ACCUSATIVE: na vrijeme.',
  },
  {
    mode: 'unatoc',
    q: 'Koja je rečenica ispravna?',
    en: 'Despite the problems, we stayed.',
    opts: [
      'Unatoč problemima, ostali smo.',
      'Unatoč problema, ostali smo.',
      'Unatoč probleme, ostali smo.',
      'Unatoč problemom, ostali smo.',
    ],
    answer: 'Unatoč problemima, ostali smo.',
    tip: 'The signature error is the genitive (problema). unatoč takes the dative plural.',
  },

  // ── iako ──────────────────────────────────────────────────────────────────
  {
    mode: 'iako',
    q: '____ je skupo, ipak ću kupiti.',
    en: 'Although it is expensive, I will buy it all the same.',
    opts: ['Iako', 'Jer', 'Unatoč', 'Ipak'],
    answer: 'Iako',
    tip: 'iako opens the concession, ipak closes it.',
  },
  {
    mode: 'iako',
    q: 'Iako je vlak kasnio sat vremena, ____ smo stigli na svadbu.',
    en: 'Although the train was an hour late, we still made it to the wedding.',
    opts: ['ipak', 'jer', 'iako', 'unatoč'],
    answer: 'ipak',
    tip: 'ipak = nevertheless, all the same — the second half of iako…, ipak….',
  },
  {
    mode: 'iako',
    q: '____ nikad nije igrao nogomet, o utakmici govori kao trener.',
    en: 'Although he has never played football, he talks about the match like a coach.',
    opts: ['Premda', 'Jer', 'Pa', 'Ipak'],
    answer: 'Premda',
    tip: 'premda = although, a shade more formal than iako.',
  },
  {
    mode: 'iako',
    q: 'Iako ____ bolestan, došao je na posao.',
    en: 'Although he was ill, he came to work.',
    opts: ['je bio', 'bio je', 'bi bio', 'će biti'],
    answer: 'je bio',
    tip: 'After iako the clitic je comes right away, in second position: iako je bio.',
  },
  {
    mode: 'iako',
    q: 'Iako ____ kiša, išli smo u šetnju.',
    en: 'Although it was raining, we went for a walk.',
    opts: ['je padala', 'padala je', 'bi padala', 'pada je'],
    answer: 'je padala',
    tip: 'iako counts as the first word: the auxiliary follows it directly.',
  },
  {
    mode: 'iako',
    q: 'Premda ____ nije svidjelo, ništa nije rekla.',
    en: 'Although she did not like it, she said nothing.',
    opts: ['joj se', 'se joj', 'joj je', 'se'],
    answer: 'joj se',
    tip: 'The dative clitic comes before se: joj se nije svidjelo.',
  },
  {
    mode: 'iako',
    q: 'Što znači "ipak"?',
    en: 'What does this word mean?',
    opts: ['nevertheless', 'because', 'although', 'whereas'],
    answer: 'nevertheless',
    tip: 'Iako je skupo, ipak ću kupiti.',
  },
  {
    mode: 'iako',
    q: 'Koji je veznik formalniji?',
    en: 'Which conjunction is more formal?',
    opts: ['premda', 'iako', 'ali', 'jer'],
    answer: 'premda',
    tip: 'premda and iako mean the same; premda sounds more formal.',
  },

  // ── suprot ────────────────────────────────────────────────────────────────
  {
    mode: 'suprot',
    q: '____, stan je malen, ali pogled je nevjerojatan.',
    en: 'Admittedly, the flat is small, but the view is incredible.',
    opts: ['Doduše', 'Unatoč', 'Jer', 'Dok'],
    answer: 'Doduše',
    tip: 'doduše grants a point before you make yours: Doduše, …, ali….',
  },
  {
    mode: 'suprot',
    q: 'Zagreb je kontinentalan, ____ je Split mediteranski.',
    en: 'Zagreb is continental, whereas Split is Mediterranean.',
    opts: ['dok', 'jer', 'koji', 'unatoč'],
    answer: 'dok',
    tip: 'dok also means "whereas" when it compares two different things.',
  },
  {
    mode: 'suprot',
    q: 'Ovo je rješenje jeftinije. S druge ____, traje kraće.',
    en: 'This solution is cheaper. On the other hand, it does not last as long.',
    opts: ['strane', 'strani', 'stranu', 'stranom'],
    answer: 'strane',
    tip: 's druge strane — s + genitive in a fixed phrase.',
  },
  {
    mode: 'suprot',
    q: 'Plan je dobar. ____, nemamo dovoljno novca.',
    en: 'The plan is good. However, we do not have enough money.',
    opts: ['Međutim', 'Jer', 'Iako', 'Dok'],
    answer: 'Međutim',
    tip: 'međutim starts a new sentence and is set off by a comma.',
  },
  {
    mode: 'suprot',
    q: 'Nije bio umoran, ____, bio je pun energije.',
    en: 'He was not tired; on the contrary, he was full of energy.',
    opts: ['naprotiv', 'unatoč', 'jer', 'iako'],
    answer: 'naprotiv',
    tip: 'naprotiv corrects a negative with its opposite.',
  },
  {
    mode: 'suprot',
    q: 'Bez obzira ____ cijenu, kupit ću ga.',
    en: 'Regardless of the price, I will buy it.',
    opts: ['na', 'o', 'za', 'u'],
    answer: 'na',
    tip: 'bez obzira na + accusative.',
  },
  {
    mode: 'suprot',
    q: 'Koji je od ovih veznika obilježen kao pisani i formalni?',
    en: 'Which one is marked as written and formal?',
    opts: ['međutim', 'ipak', 'ali', 'dok'],
    answer: 'međutim',
    tip: 'ali and ipak are everyday, dok neutral; međutim belongs to formal writing.',
  },
  {
    mode: 'suprot',
    q: 'Bez obzira na ____ vrijeme, idemo.',
    en: 'Regardless of the bad weather, we are going.',
    opts: ['loše', 'lošem', 'lošeg', 'lošim'],
    answer: 'loše',
    tip: 'bez obzira na takes the accusative: na loše vrijeme.',
  },
];
