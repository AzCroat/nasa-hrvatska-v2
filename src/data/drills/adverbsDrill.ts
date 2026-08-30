// src/data/drills/adverbsDrill.ts
//
// A2 ADVERBS — the drill for the `adverbs` lesson.
//
// The pool has two entries with "prilozi" in the label — `prilozib2` and
// `glagolskiprilozi` — and neither is this. Both are GLAGOLSKI PRILOZI, the
// verbal adverbs (*radeći*, *pročitavši*), a B2 topic with its own lessons and
// its own categories. The app had no drill on ordinary adverb formation at all.
//
// The good news for a learner is how small the rule is:
//
//   THE ADVERB IS THE NEUTER ADJECTIVE, AND IT NEVER CHANGES. *brz → brzo*,
//   *lijep → lijepo*, *glasan → glasno*. There is nothing to decline and
//   nothing to agree with — after the whole adjective table, this is a gift.
//
//   THE SAME WORD DOES BOTH JOBS, and only its neighbour says which. *Vino je
//   dobro* is an adjective describing wine; *Govoriš dobro* is an adverb
//   describing speech. English splits good from well and Croatian does not.
//
//   NIKAD DEMANDS A NEGATED VERB — *Nikad ne pijem kavu*. The double negative
//   is compulsory, and leaving the *ne* out is the single commonest error in
//   this whole area for an English speaker.
//
// The irregular comparatives are worth drilling as a closed set, because they
// are exactly the ones learners reach for: *dobro → bolje*, *loše → gore*,
// *mnogo → više*, *malo → manje*.
//
// Three modes:
//   tvorba   — making the adverb, and the one form it has
//   ucestalost — how often, and the negative concord
//   stupanj  — comparing adverbs

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const ADVERBS_MODE_LABELS: Record<string, string> = {
  tvorba: '🔧 Tvorba priloga',
  ucestalost: '🔁 Učestalost',
  stupanj: '📈 Stupnjevanje',
};

export const ADVERBS_DRILL_DATA: ModeDrillItem[] = [
  // ── tvorba ────────────────────────────────────────────────────────────────
  {
    mode: 'tvorba',
    q: 'Od pridjeva "brz" nastaje prilog ____.',
    en: 'fast → quickly',
    opts: ['brzo', 'brzi', 'brza', 'brzom'],
    answer: 'brzo',
    tip: 'The adverb is the NEUTER form of the adjective.',
  },
  {
    mode: 'tvorba',
    q: 'Od "glasan" nastaje prilog ____.',
    en: 'loud → loudly',
    opts: ['glasno', 'glasni', 'glasna', 'glasnom'],
    answer: 'glasno',
    tip: 'And the a drops out: glasan → glasno.',
  },
  {
    mode: 'tvorba',
    q: 'Hodaš ____. (brz)',
    en: 'You walk fast.',
    opts: ['brzo', 'brz', 'brzi', 'brza'],
    answer: 'brzo',
    tip: 'It describes the walking, not the walker.',
  },
  {
    mode: 'tvorba',
    q: 'Mijenja li se prilog po rodu?',
    en: 'Does the adverb change for gender?',
    opts: ['ne', 'da', 'samo u množini', 'samo uz ženski rod'],
    answer: 'ne',
    tip: 'One form, always. Nothing to agree with.',
  },
  {
    mode: 'tvorba',
    q: 'Vino je ____. (dobar)',
    en: 'The wine is good.',
    opts: ['dobro', 'dobar', 'dobra', 'dobri'],
    answer: 'dobro',
    tip: 'Here it is an ADJECTIVE agreeing with vino, which is neuter.',
  },
  {
    mode: 'tvorba',
    q: 'Govoriš ____ hrvatski. (dobar)',
    en: 'You speak Croatian well.',
    opts: ['dobro', 'dobar', 'dobri', 'dobru'],
    answer: 'dobro',
    tip: 'Same word, now an ADVERB. English needs good and well; Croatian does not.',
  },
  {
    mode: 'tvorba',
    q: 'Kako se zna je li "dobro" pridjev ili prilog?',
    en: 'How do you tell which job it is doing?',
    opts: ['po onome uz što stoji', 'po naglasku', 'po redu riječi', 'ne zna se'],
    answer: 'po onome uz što stoji',
    tip: 'Next to a noun it describes the noun; next to a verb it describes the action.',
  },
  {
    mode: 'tvorba',
    q: 'Od "loš" nastaje prilog ____.',
    en: 'bad → badly',
    opts: ['loše', 'loši', 'loša', 'lošom'],
    answer: 'loše',
    tip: 'Spavao sam loše — I slept badly.',
  },

  // ── ucestalost ────────────────────────────────────────────────────────────
  {
    mode: 'ucestalost',
    q: 'Što znači "uvijek"?',
    en: 'uvijek',
    opts: ['always', 'often', 'usually', 'sometimes'],
    answer: 'always',
    tip: 'The top of the frequency scale.',
  },
  {
    mode: 'ucestalost',
    q: 'Što znači "rijetko"?',
    en: 'rijetko',
    opts: ['rarely', 'often', 'always', 'never'],
    answer: 'rarely',
    tip: 'Rarely — and it does not need a negative verb.',
  },
  {
    mode: 'ucestalost',
    q: 'Što znači "obično"?',
    en: 'obično',
    opts: ['usually', 'always', 'never', 'rarely'],
    answer: 'usually',
    tip: 'From običaj, a custom.',
  },
  {
    mode: 'ucestalost',
    q: 'Nikad ____ kavu.',
    en: 'I never drink coffee.',
    opts: ['ne pijem', 'pijem', 'popijem', 'ne pijim'],
    answer: 'ne pijem',
    tip: 'NIKAD DEMANDS A NEGATED VERB. The double negative is compulsory.',
  },
  {
    mode: 'ucestalost',
    q: 'Zašto je "Nikad pijem kavu" pogrešno?',
    en: 'Why is that wrong?',
    opts: [
      'nikad traži niječni glagol',
      'nikad ide na kraj',
      'nedostaje zamjenica',
      'nije pogrešno',
    ],
    answer: 'nikad traži niječni glagol',
    tip: 'Croatian agrees with itself twice; English forbids exactly that.',
  },
  {
    mode: 'ucestalost',
    q: '____ idem u kino. (sometimes)',
    en: 'I sometimes go to the cinema.',
    opts: ['Ponekad', 'Nikad', 'Uvijek', 'Rijetko'],
    answer: 'Ponekad',
    tip: 'ponekad — now and then.',
  },
  {
    mode: 'ucestalost',
    q: 'Koji prilog učestalosti traži "ne" uz glagol?',
    en: 'Which one needs a negative verb?',
    opts: ['nikad', 'rijetko', 'ponekad', 'obično'],
    answer: 'nikad',
    tip: 'Only the ni- word. Rarely is not the same as never.',
  },
  {
    mode: 'ucestalost',
    q: 'Što znači "često"?',
    en: 'često',
    opts: ['often', 'rarely', 'never', 'always'],
    answer: 'often',
    tip: 'Često idem — I go often.',
  },

  // ── stupanj ───────────────────────────────────────────────────────────────
  {
    mode: 'stupanj',
    q: 'Komparativ od "dobro" glasi ____.',
    en: 'well → better',
    opts: ['bolje', 'dobrije', 'najbolje', 'više dobro'],
    answer: 'bolje',
    tip: 'Irregular, and worth memorising outright.',
  },
  {
    mode: 'stupanj',
    q: 'Komparativ od "loše" glasi ____.',
    en: 'badly → worse',
    opts: ['gore', 'lošije', 'najgore', 'više loše'],
    answer: 'gore',
    tip: 'gore — and it is also the word for up there, in another life.',
  },
  {
    mode: 'stupanj',
    q: 'Komparativ od "mnogo" glasi ____.',
    en: 'much → more',
    opts: ['više', 'mnogije', 'najviše', 'mnogo više'],
    answer: 'više',
    tip: 'mnogo → više, and malo → manje beside it.',
  },
  {
    mode: 'stupanj',
    q: 'Komparativ od "malo" glasi ____.',
    en: 'little → less',
    opts: ['manje', 'maloije', 'najmanje', 'više malo'],
    answer: 'manje',
    tip: 'The fourth of the closed irregular set.',
  },
  {
    mode: 'stupanj',
    q: 'Danas govoriš ____ nego jučer. (dobro)',
    en: 'You speak better today than yesterday.',
    opts: ['bolje', 'dobro', 'najbolje', 'dobrije'],
    answer: 'bolje',
    tip: 'And nego is what introduces the thing compared against.',
  },
  {
    mode: 'stupanj',
    q: 'Superlativ od "bolje" glasi ____.',
    en: 'the best',
    opts: ['najbolje', 'najdobrije', 'više bolje', 'bolje svega'],
    answer: 'najbolje',
    tip: 'naj- goes straight onto the comparative.',
  },
  {
    mode: 'stupanj',
    q: 'Kako se tvori superlativ priloga?',
    en: 'How is the superlative formed?',
    opts: ['naj- na komparativ', 'naj- na osnovni oblik', 'posebnom riječju', 'ne tvori se'],
    answer: 'naj- na komparativ',
    tip: 'brže → najbrže, bolje → najbolje. One prefix and you are done.',
  },
  {
    mode: 'stupanj',
    q: 'Komparativ od "brzo" glasi ____.',
    en: 'fast → faster',
    opts: ['brže', 'brzije', 'više brzo', 'najbrže'],
    answer: 'brže',
    tip: 'Regular: -je onto the stem, and z plus j gives ž.',
  },
];
