// src/data/drills/agreementSubtletiesDrill.ts
//
// C2 SLAGANJE — SUPTILNOSTI — the drill for the `slaganje-suptilnosti` lesson.
//
// The rule that surprises everyone: A QUANTITY SUBJECT TAKES A NEUTER SINGULAR
// VERB. *Mnogo ljudi JE DOŠLO*, not *su došli*. *Pet studenata je došlo*. The
// subject looks plural, means plural, and the verb goes neuter singular anyway,
// because grammatically the quantity word is the head.
//
// Two, three and four break away from that — *dva studenta su došla* — because
// they kept a plural-looking form from the old dual. So five is not "more of
// the same" than four; it is a different construction.
//
// Coordinated subjects take the masculine plural once any member is masculine:
// *Ivan i Ana su došli*. And the recurring error underneath all of it is the
// verb drifting to the NEAREST noun instead of agreeing with the whole subject.
//
// Three modes:
//   kolicina  — quantity subjects and the neuter singular
//   dvapet    — two, three, four against five and above
//   sastavljeno — coordinated and collective subjects

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const AGREEMENT_SUBTLETIES_MODE_LABELS: Record<string, string> = {
  kolicina: '🔢 Količina',
  dvapet: '✌️ Dva i pet',
  sastavljeno: '➕ Složeni subjekt',
};

export const AGREEMENT_SUBTLETIES_DRILL_DATA: ModeDrillItem[] = [
  // ── kolicina ──────────────────────────────────────────────────────────────
  {
    mode: 'kolicina',
    q: 'Mnogo ljudi ____ došlo.',
    en: 'Many people came.',
    opts: ['je', 'su', 'jesu', 'će'],
    answer: 'je',
    tip: 'A quantity subject takes a NEUTER SINGULAR verb.',
  },
  {
    mode: 'kolicina',
    q: 'Nekoliko studenata ____ pitalo.',
    en: 'Several students asked.',
    opts: ['je', 'su', 'jesu', 'bi'],
    answer: 'je',
    tip: 'nekoliko behaves exactly like mnogo.',
  },
  {
    mode: 'kolicina',
    q: 'Koji je oblik participa uz količinu?',
    en: 'Which participle form?',
    opts: ['srednji jednine', 'muški množine', 'ženski množine', 'srednji množine'],
    answer: 'srednji jednine',
    tip: 'došlo, pitalo, javilo — neuter singular throughout.',
  },
  {
    mode: 'kolicina',
    q: 'Zašto tako, kad je značenje množinsko?',
    en: 'Why, when the meaning is plural?',
    opts: ['riječ za količinu je gramatička glava', 'radi kratkoće', 'iz navike', 'nema razloga'],
    answer: 'riječ za količinu je gramatička glava',
    tip: 'The quantity word is the subject; the noun after it is its genitive.',
  },
  {
    mode: 'kolicina',
    q: 'Malo ljudi to ____.',
    en: 'Few people know that.',
    opts: ['zna', 'znaju', 'znadu', 'znao'],
    answer: 'zna',
    tip: 'Present tense follows the same rule: third person singular.',
  },
  {
    mode: 'kolicina',
    q: 'Pet studenata ____ položilo.',
    en: 'Five students passed.',
    opts: ['je', 'su', 'jesu', 'bi'],
    answer: 'je',
    tip: 'Five and above is a quantity, and quantities take the neuter singular.',
  },
  {
    mode: 'kolicina',
    q: 'Većina ljudi ____ suglasna.',
    en: 'Most people agree.',
    opts: ['je', 'su', 'jesu', 'bila'],
    answer: 'je',
    tip: 'Većina is a singular noun, so the verb is singular — and feminine here.',
  },
  {
    mode: 'kolicina',
    q: 'Koliko ____ došlo?',
    en: 'How many came?',
    opts: ['ih je', 'su', 'oni su', 'je ih'],
    answer: 'ih je',
    tip: 'Koliko ih je došlo? — the clitic order is fixed.',
  },

  // ── dvapet ────────────────────────────────────────────────────────────────
  {
    mode: 'dvapet',
    q: 'Dva studenta ____ došla.',
    en: 'Two students came.',
    opts: ['su', 'je', 'jesu', 'bi'],
    answer: 'su',
    tip: 'Two, three and four take a PLURAL verb — the old dual survives here.',
  },
  {
    mode: 'dvapet',
    q: 'Pet studenata ____ došlo.',
    en: 'Five students came.',
    opts: ['je', 'su', 'jesu', 'bi'],
    answer: 'je',
    tip: 'And five switches to the quantity pattern. That break is the whole rule.',
  },
  {
    mode: 'dvapet',
    q: 'Gdje je granica?',
    en: 'Where does the behaviour change?',
    opts: ['između četiri i pet', 'između dva i tri', 'između pet i šest', 'nema granice'],
    answer: 'između četiri i pet',
    tip: 'Four is the last of the old dual; five begins the quantities.',
  },
  {
    mode: 'dvapet',
    q: 'Tri žene ____ stigle.',
    en: 'Three women arrived.',
    opts: ['su', 'je', 'jesu', 'bila'],
    answer: 'su',
    tip: 'Feminine paucal: tri žene su stigle.',
  },
  {
    mode: 'dvapet',
    q: 'Četiri prijedloga ____ prihvaćena.',
    en: 'Four proposals were accepted.',
    opts: ['su', 'je', 'jesu', 'bila je'],
    answer: 'su',
    tip: 'Four still takes the plural.',
  },
  {
    mode: 'dvapet',
    q: 'Dvadeset i dva čovjeka ____ prisutna.',
    en: 'Twenty-two people were present.',
    opts: ['su', 'je', 'jesu', 'bilo'],
    answer: 'su',
    tip: 'The behaviour follows the LAST digit — 22 ends in two.',
  },
  {
    mode: 'dvapet',
    q: 'Dvadeset i pet ljudi ____ prisutno.',
    en: 'Twenty-five people were present.',
    opts: ['je', 'su', 'jesu', 'bili'],
    answer: 'je',
    tip: 'And 25 ends in five, so it is back to the quantity pattern.',
  },
  {
    mode: 'dvapet',
    q: 'Što određuje ponašanje složenog broja?',
    en: 'What decides for a compound number?',
    opts: ['zadnja znamenka', 'prva znamenka', 'ukupna veličina', 'rod imenice'],
    answer: 'zadnja znamenka',
    tip: 'Which is why 102 behaves like two and 105 like five.',
  },

  // ── sastavljeno ───────────────────────────────────────────────────────────
  {
    mode: 'sastavljeno',
    q: 'Ivan i Ana ____ došli.',
    en: 'Ivan and Ana came.',
    opts: ['su', 'je', 'jesu', 'bi'],
    answer: 'su',
    tip: 'And the participle is MASCULINE plural once any member is masculine.',
  },
  {
    mode: 'sastavljeno',
    q: 'Ana i Marija su ____.',
    en: 'Ana and Marija came.',
    opts: ['došle', 'došli', 'došla', 'doš'],
    answer: 'došle',
    tip: 'All feminine → feminine plural.',
  },
  {
    mode: 'sastavljeno',
    q: 'Ivan i Ana su ____.',
    en: 'Ivan and Ana came.',
    opts: ['došli', 'došle', 'došla', 'došlo'],
    answer: 'došli',
    tip: 'Mixed gender takes the masculine plural.',
  },
  {
    mode: 'sastavljeno',
    q: 'Djeca su ____.',
    en: 'The children came.',
    opts: ['došla', 'došli', 'došle', 'došlo'],
    answer: 'došla',
    tip: 'The collective takes neuter plural agreement in the participle.',
  },
  {
    mode: 'sastavljeno',
    q: 'S čime se glagol slaže?',
    en: 'What does the verb agree with?',
    opts: ['s cijelim subjektom', 's najbližom imenicom', 's prvom imenicom', 's najduljom'],
    answer: 's cijelim subjektom',
    tip: 'The nearest noun does not win. That drift is the error this pins.',
  },
  {
    mode: 'sastavljeno',
    q: 'Braća su ____ ranije.',
    en: 'The brothers arrived earlier.',
    opts: ['stigla', 'stigli', 'stigle', 'stiglo'],
    answer: 'stigla',
    tip: 'Braća behaves like djeca — a collective, not an ordinary plural.',
  },
  {
    mode: 'sastavljeno',
    q: 'Ni Ivan ni Ana ____ došli.',
    en: 'Neither Ivan nor Ana came.',
    opts: ['nisu', 'nije', 'ne', 'niti su'],
    answer: 'nisu',
    tip: 'ni… ni… with two subjects still takes the plural.',
  },
  {
    mode: 'sastavljeno',
    q: 'Zašto se glagol "otkliza" na najbližu imenicu?',
    en: 'Why does the verb drift?',
    opts: [
      'jer je ta imenica posljednja čuta',
      'jer je najvažnija',
      'jer je u nominativu',
      'ne otklizava',
    ],
    answer: 'jer je ta imenica posljednja čuta',
    tip: 'Proximity, not grammar — and it is the commonest agreement error at C2.',
  },
];
