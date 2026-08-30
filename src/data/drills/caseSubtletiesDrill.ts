// src/data/drills/caseSubtletiesDrill.ts
//
// C2 PADEŽNE SUPTILNOSTI — the drill for the `padezne-suptilnosti` lesson.
//
// Four case uses that are grammatical either way, so nothing corrects you and
// the difference is meaning rather than correctness.
//
// THE GENITIVE OF NEGATION marks total absence: *Nemam vremena* says there is
// none, *Nemam vrijeme* points at a particular one. THE PARTITIVE does the same
// job positively: *Kupi kruha* is some bread, *Kupi kruh* is the loaf.
//
// TIME TAKES BARE CASES with no preposition at all: *prošle godine* (genitive,
// a point), *subotom* (instrumental, repeated), *cijeli dan* (accusative,
// duration). Three cases, three kinds of time, no prepositions anywhere.
//
// And THE DATIVE MARKS THE PERSON AFFECTED, doing the work English gives to a
// possessive: *Umro mu je otac* — his father died, and the dative says it
// happened TO him.
//
// Three modes:
//   nijekanje — the genitive of negation and the partitive
//   vrijeme   — the bare temporal cases
//   pogodjeni — the dative of the affected person, and the bare instrumental

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const CASE_SUBTLETIES_MODE_LABELS: Record<string, string> = {
  nijekanje: '🚫 Genitiv nijekanja',
  vrijeme: '🕰️ Vrijeme bez prijedloga',
  pogodjeni: '💠 Dativ i instrumental',
};

export const CASE_SUBTLETIES_DRILL_DATA: ModeDrillItem[] = [
  // ── nijekanje ─────────────────────────────────────────────────────────────
  {
    mode: 'nijekanje',
    q: 'Koji oblik naglašava potpunu odsutnost?',
    en: 'Which emphasises total absence?',
    opts: ['Nemam vremena.', 'Nemam vrijeme.', 'Jednako su.', 'Nijedan.'],
    answer: 'Nemam vremena.',
    tip: 'The genitive of negation says there is none at all.',
  },
  {
    mode: 'nijekanje',
    q: 'Što znači "Nemam novac"?',
    en: 'What does that mean?',
    opts: [
      'nemam taj određeni novac',
      'nemam nimalo novca',
      'isto kao nemam novca',
      'ništa posebno',
    ],
    answer: 'nemam taj određeni novac',
    tip: 'The accusative points at a particular sum. The genitive denies any.',
  },
  {
    mode: 'nijekanje',
    q: 'Kupi ____. (some bread)',
    en: 'Buy some bread.',
    opts: ['kruha', 'kruh', 'kruhu', 'kruhom'],
    answer: 'kruha',
    tip: 'The partitive genitive: some of it.',
  },
  {
    mode: 'nijekanje',
    q: 'Kupi ____. (the loaf)',
    en: 'Buy the loaf.',
    opts: ['kruh', 'kruha', 'kruhu', 'kruhom'],
    answer: 'kruh',
    tip: 'Accusative — a whole definite thing. The pair is the point.',
  },
  {
    mode: 'nijekanje',
    q: 'Popio je ____. (some water)',
    en: 'He drank some water.',
    opts: ['vode', 'vodu', 'voda', 'vodom'],
    answer: 'vode',
    tip: 'Popio je vode — a quantity of it.',
  },
  {
    mode: 'nijekanje',
    q: 'Bojim se ____. (pas)',
    en: 'I am afraid of the dog.',
    opts: ['psa', 'pas', 'psu', 'psom'],
    answer: 'psa',
    tip: 'Here there is no choice — bojati se governs the genitive outright.',
  },
  {
    mode: 'nijekanje',
    q: 'Koja je razlika između rekcije i izbora?',
    en: 'Government against choice?',
    opts: ['rekcija nema alternativu', 'nema razlike', 'izbor je formalniji', 'rekcija je starija'],
    answer: 'rekcija nema alternativu',
    tip: 'bojati se + genitive is fixed. Nemam vremena/vrijeme is a decision.',
  },
  {
    mode: 'nijekanje',
    q: 'Daj mi ____. (some bread)',
    en: 'Give me some bread.',
    opts: ['kruha', 'kruh', 'kruhom', 'kruhu'],
    answer: 'kruha',
    tip: 'And daj mi kruh would ask for the loaf on the table.',
  },

  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: 'Vidjeli smo se ____ godine. (last)',
    en: 'We met last year.',
    opts: ['prošle', 'prošlu', 'prošloj', 'prošlom'],
    answer: 'prošle',
    tip: 'A bare GENITIVE for a point in time — no preposition at all.',
  },
  {
    mode: 'vrijeme',
    q: 'Idem u teretanu ____. (on Saturdays)',
    en: 'I go to the gym on Saturdays.',
    opts: ['subotom', 'u subotu', 'subote', 'na subotu'],
    answer: 'subotom',
    tip: 'A bare INSTRUMENTAL for repeated time.',
  },
  {
    mode: 'vrijeme',
    q: 'Radio sam ____ dan. (all)',
    en: 'I worked all day.',
    opts: ['cijeli', 'cijelog', 'cijelom', 'cijelim'],
    answer: 'cijeli',
    tip: 'A bare ACCUSATIVE for duration.',
  },
  {
    mode: 'vrijeme',
    q: 'Koliko padeža nose vrijeme bez prijedloga?',
    en: 'How many cases carry bare time?',
    opts: ['tri', 'jedan', 'dva', 'svi'],
    answer: 'tri',
    tip: 'Genitive for a point, instrumental for repetition, accusative for duration.',
  },
  {
    mode: 'vrijeme',
    q: 'Dolazi ____ tjedna. (this)',
    en: 'He is coming this week.',
    opts: ['ovoga', 'ovaj', 'ovome', 'ovim'],
    answer: 'ovoga',
    tip: 'Genitive again: ovoga tjedna.',
  },
  {
    mode: 'vrijeme',
    q: 'Čekam te već ____ sat. (a whole)',
    en: 'I have been waiting a whole hour.',
    opts: ['cijeli', 'cijelog', 'cijelim', 'cijelom'],
    answer: 'cijeli',
    tip: 'Duration → accusative, and već marks that it is still going on.',
  },
  {
    mode: 'vrijeme',
    q: 'Putujem ____. (in the mornings)',
    en: 'I travel in the mornings.',
    opts: ['jutrom', 'ujutro', 'u jutro', 'jutra'],
    answer: 'jutrom',
    tip: 'The instrumental again for a repeated time; ujutro is one morning.',
  },
  {
    mode: 'vrijeme',
    q: 'Zašto se prijedlog izostavlja?',
    en: 'Why is there no preposition?',
    opts: ['padež sam nosi vrijeme', 'radi kratkoće', 'zbog registra', 'iz starine'],
    answer: 'padež sam nosi vrijeme',
    tip: 'The case itself is the marker — which is why the right one matters.',
  },

  // ── pogodjeni ─────────────────────────────────────────────────────────────
  {
    mode: 'pogodjeni',
    q: 'Umro ____ je otac.',
    en: 'His father died.',
    opts: ['mu', 'ga', 'njegov', 'njemu je'],
    answer: 'mu',
    tip: 'The dative of the affected person does what English gives to a possessive.',
  },
  {
    mode: 'pogodjeni',
    q: 'Zašto ne "Njegov otac je umro"?',
    en: 'Why not the possessive?',
    opts: ['gramatično je, ali hladnije', 'nije gramatično', 'dulje je', 'nema razlike'],
    answer: 'gramatično je, ali hladnije',
    tip: 'The dative says it happened TO him. The possessive only says whose.',
  },
  {
    mode: 'pogodjeni',
    q: 'Slomio sam ____ ruku.',
    en: 'I broke my arm.',
    opts: ['si', 'se', 'mi', 'mu'],
    answer: 'si',
    tip: 'The reflexive dative si — the arm belongs to the subject.',
  },
  {
    mode: 'pogodjeni',
    q: 'Putujem ____. (by train)',
    en: 'I travel by train.',
    opts: ['vlakom', 's vlakom', 'vlaka', 'na vlaku'],
    answer: 'vlakom',
    tip: 'A BARE instrumental is the means.',
  },
  {
    mode: 'pogodjeni',
    q: 'Putujem ____. (with my brother)',
    en: 'I travel with my brother.',
    opts: ['s bratom', 'bratom', 'brata', 'bratu'],
    answer: 's bratom',
    tip: 'And s marks accompaniment. The presence of s is the whole distinction.',
  },
  {
    mode: 'pogodjeni',
    q: 'Što znači "Pišem olovkom"?',
    en: 'What does it mean?',
    opts: ['sredstvo', 'društvo', 'mjesto', 'vrijeme'],
    answer: 'sredstvo',
    tip: 'Means. Pišem s olovkom would say the pencil came along.',
  },
  {
    mode: 'pogodjeni',
    q: 'Ukrali ____ su auto.',
    en: 'They stole her car.',
    opts: ['joj', 'je', 'nju', 'njezin'],
    answer: 'joj',
    tip: 'Dative — and the sentence is about what happened to her.',
  },
  {
    mode: 'pogodjeni',
    q: 'Koji se padež često prevodi engleskim posvojnim?',
    en: 'Which case often renders an English possessive?',
    opts: ['dativ', 'genitiv', 'instrumental', 'lokativ'],
    answer: 'dativ',
    tip: 'And rendering it back with a possessive is what makes a text read as translated.',
  },
];
