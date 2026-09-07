// src/lib/croatianClosedClass.ts
//
// Closed-class words and the case each preposition governs, split out of
// `croatianMorphology.ts` at the 800-line lint cap. Data only.
//
// These are the highest-frequency taps in any Croatian text and the ones the
// rules could never guess, so they are listed exactly. A closed-class hit is
// the only kind of reading the analyser calls unambiguous on its own.

import type { Case, FormAnalysis, Number_ } from './croatianMorphologyTypes';

export interface Closed {
  pos: FormAnalysis['pos'];
  lemma?: string;
  case?: Case;
  number?: Number_;
  person?: 1 | 2 | 3;
  note: string;
}

export const CLOSED: Record<string, Closed[]> = {
  // Personal pronouns — full forms
  ja: [{ pos: 'pronoun', lemma: 'ja', case: 'N', number: 'sg', person: 1, note: 'I' }],
  ti: [
    { pos: 'pronoun', lemma: 'ti', case: 'N', number: 'sg', person: 2, note: 'you (informal)' },
    {
      pos: 'clitic',
      lemma: 'ti',
      case: 'D',
      number: 'sg',
      person: 2,
      note: 'to you — the short dative, which must sit in second position',
    },
  ],
  on: [
    {
      pos: 'pronoun',
      lemma: 'on',
      case: 'N',
      number: 'sg',
      person: 3,
      note: 'he / it (masculine)',
    },
  ],
  ona: [
    { pos: 'pronoun', lemma: 'ona', case: 'N', number: 'sg', person: 3, note: 'she' },
    {
      pos: 'pronoun',
      lemma: 'oni',
      case: 'N',
      number: 'pl',
      person: 3,
      note: 'they (neuter plural)',
    },
  ],
  ono: [{ pos: 'pronoun', lemma: 'ono', case: 'N', number: 'sg', person: 3, note: 'it (neuter)' }],
  mi: [
    { pos: 'pronoun', lemma: 'mi', case: 'N', number: 'pl', person: 1, note: 'we' },
    {
      pos: 'clitic',
      lemma: 'ja',
      case: 'D',
      number: 'sg',
      person: 1,
      note: 'to me — the short dative',
    },
  ],
  vi: [
    {
      pos: 'pronoun',
      lemma: 'vi',
      case: 'N',
      number: 'pl',
      person: 2,
      note: 'you (plural, or one person politely)',
    },
  ],
  oni: [{ pos: 'pronoun', lemma: 'oni', case: 'N', number: 'pl', person: 3, note: 'they' }],
  mene: [
    {
      pos: 'pronoun',
      lemma: 'ja',
      case: 'G',
      number: 'sg',
      person: 1,
      note: 'me — the long form, used after a preposition or when stressed',
    },
  ],
  tebe: [
    {
      pos: 'pronoun',
      lemma: 'ti',
      case: 'G',
      number: 'sg',
      person: 2,
      note: 'you — the long form',
    },
  ],
  njega: [
    {
      pos: 'pronoun',
      lemma: 'on',
      case: 'G',
      number: 'sg',
      person: 3,
      note: 'him — the long form',
    },
  ],
  nje: [
    {
      pos: 'pronoun',
      lemma: 'ona',
      case: 'G',
      number: 'sg',
      person: 3,
      note: 'her — the long form',
    },
  ],
  nas: [{ pos: 'pronoun', lemma: 'mi', case: 'G', number: 'pl', person: 1, note: 'us' }],
  vas: [{ pos: 'pronoun', lemma: 'vi', case: 'G', number: 'pl', person: 2, note: 'you (plural)' }],
  njih: [
    {
      pos: 'pronoun',
      lemma: 'oni',
      case: 'G',
      number: 'pl',
      person: 3,
      note: 'them — the long form',
    },
  ],
  meni: [
    {
      pos: 'pronoun',
      lemma: 'ja',
      case: 'D',
      number: 'sg',
      person: 1,
      note: 'to me — the long form',
    },
  ],
  tebi: [
    {
      pos: 'pronoun',
      lemma: 'ti',
      case: 'D',
      number: 'sg',
      person: 2,
      note: 'to you — the long form',
    },
  ],
  njemu: [
    {
      pos: 'pronoun',
      lemma: 'on',
      case: 'D',
      number: 'sg',
      person: 3,
      note: 'to him — the long form',
    },
  ],
  njoj: [
    {
      pos: 'pronoun',
      lemma: 'ona',
      case: 'D',
      number: 'sg',
      person: 3,
      note: 'to her — the long form',
    },
  ],
  nama: [
    {
      pos: 'pronoun',
      lemma: 'mi',
      case: 'D',
      number: 'pl',
      person: 1,
      note: 'to us — the long form',
    },
  ],
  vama: [
    {
      pos: 'pronoun',
      lemma: 'vi',
      case: 'D',
      number: 'pl',
      person: 2,
      note: 'to you — the long form',
    },
  ],
  njima: [
    {
      pos: 'pronoun',
      lemma: 'oni',
      case: 'D',
      number: 'pl',
      person: 3,
      note: 'to them — the long form',
    },
  ],
  // Enclitics — the second-position cluster, which is where learners go wrong
  me: [
    {
      pos: 'clitic',
      lemma: 'ja',
      case: 'A',
      number: 'sg',
      person: 1,
      note: 'me — the short form, second position in the clause',
    },
  ],
  te: [
    {
      pos: 'clitic',
      lemma: 'ti',
      case: 'A',
      number: 'sg',
      person: 2,
      note: 'you — the short accusative, second position',
    },
  ],
  ga: [
    {
      pos: 'clitic',
      lemma: 'on',
      case: 'A',
      number: 'sg',
      person: 3,
      note: 'him / it — the short accusative or genitive, second position',
    },
  ],
  ju: [
    {
      pos: 'clitic',
      lemma: 'ona',
      case: 'A',
      number: 'sg',
      person: 3,
      note: 'her — the short accusative used beside je, to avoid je je',
    },
  ],
  mu: [
    {
      pos: 'clitic',
      lemma: 'on',
      case: 'D',
      number: 'sg',
      person: 3,
      note: 'to him / to it — the short dative',
    },
  ],
  joj: [
    {
      pos: 'clitic',
      lemma: 'ona',
      case: 'D',
      number: 'sg',
      person: 3,
      note: 'to her — the short dative',
    },
  ],
  nam: [
    {
      pos: 'clitic',
      lemma: 'mi',
      case: 'D',
      number: 'pl',
      person: 1,
      note: 'to us — the short dative',
    },
  ],
  vam: [
    {
      pos: 'clitic',
      lemma: 'vi',
      case: 'D',
      number: 'pl',
      person: 2,
      note: 'to you — the short dative',
    },
  ],
  im: [
    {
      pos: 'clitic',
      lemma: 'oni',
      case: 'D',
      number: 'pl',
      person: 3,
      note: 'to them — the short dative',
    },
  ],
  ih: [
    {
      pos: 'clitic',
      lemma: 'oni',
      case: 'A',
      number: 'pl',
      person: 3,
      note: 'them — the short accusative or genitive',
    },
  ],
  se: [
    {
      pos: 'clitic',
      lemma: 'se',
      note: 'the reflexive particle — it makes the verb reflexive or impersonal, and it takes second position in the clause',
    },
  ],
  si: [
    {
      pos: 'clitic',
      lemma: 'ti',
      case: 'D',
      number: 'sg',
      person: 2,
      note: 'to you — the short dative; also the 2nd person of biti, as in ti si',
    },
  ],
  je: [
    {
      pos: 'clitic',
      lemma: 'biti',
      person: 3,
      number: 'sg',
      note: 'is — the short present of biti',
    },
    {
      pos: 'clitic',
      lemma: 'ona',
      case: 'A',
      number: 'sg',
      person: 3,
      note: 'her — the short accusative',
    },
  ],
  su: [
    {
      pos: 'clitic',
      lemma: 'biti',
      person: 3,
      number: 'pl',
      note: 'are — the short present of biti',
    },
  ],
  sam: [
    {
      pos: 'clitic',
      lemma: 'biti',
      person: 1,
      number: 'sg',
      note: 'am — the short present of biti. Stressed sȃm is a different word meaning alone.',
    },
  ],
  smo: [
    {
      pos: 'clitic',
      lemma: 'biti',
      person: 1,
      number: 'pl',
      note: 'are — the short present of biti',
    },
  ],
  ste: [
    {
      pos: 'clitic',
      lemma: 'biti',
      person: 2,
      number: 'pl',
      note: 'are — the short present of biti',
    },
  ],
  bih: [
    {
      pos: 'clitic',
      lemma: 'biti',
      person: 1,
      number: 'sg',
      note: 'would — the conditional auxiliary',
    },
  ],
  bi: [{ pos: 'clitic', lemma: 'biti', person: 3, note: 'would — the conditional auxiliary' }],
  ću: [
    {
      pos: 'clitic',
      lemma: 'htjeti',
      person: 1,
      number: 'sg',
      note: 'will — the future auxiliary',
    },
  ],
  ćeš: [
    {
      pos: 'clitic',
      lemma: 'htjeti',
      person: 2,
      number: 'sg',
      note: 'will — the future auxiliary',
    },
  ],
  će: [{ pos: 'clitic', lemma: 'htjeti', person: 3, note: 'will — the future auxiliary' }],
  ćemo: [
    {
      pos: 'clitic',
      lemma: 'htjeti',
      person: 1,
      number: 'pl',
      note: 'will — the future auxiliary',
    },
  ],
  ćete: [
    {
      pos: 'clitic',
      lemma: 'htjeti',
      person: 2,
      number: 'pl',
      note: 'will — the future auxiliary',
    },
  ],
  ne: [{ pos: 'other', lemma: 'ne', note: 'not — it always stands immediately before its verb' }],
  li: [
    {
      pos: 'other',
      lemma: 'li',
      note: 'the question particle — it always follows the verb it questions',
    },
  ],
};

/** Prepositions and the case each one governs. The case is the fact a learner
 *  needs, and it is fixed — so it can be stated flatly. */
export const PREPOSITION_CASE: Record<string, { cases: Case[]; note: string }> = {
  u: { cases: ['A', 'L'], note: 'accusative for movement into, locative for being inside' },
  na: { cases: ['A', 'L'], note: 'accusative for movement onto, locative for being on' },
  o: { cases: ['L'], note: 'about' },
  po: { cases: ['L'], note: 'around, according to' },
  pri: { cases: ['L'], note: 'at, near' },
  od: { cases: ['G'], note: 'from, made of' },
  do: { cases: ['G'], note: 'up to, until' },
  iz: { cases: ['G'], note: 'out of' },
  s: { cases: ['G', 'I'], note: 'genitive for off/down from, instrumental for with' },
  sa: {
    cases: ['G', 'I'],
    note: 'the same word as s, spelled sa before s, š, z, ž and awkward clusters',
  },
  kod: { cases: ['G'], note: "at someone's place" },
  bez: { cases: ['G'], note: 'without' },
  za: { cases: ['A', 'I'], note: 'accusative for purpose or destination, instrumental for behind' },
  pred: {
    cases: ['A', 'I'],
    note: 'accusative for movement in front of, instrumental for position',
  },
  nad: { cases: ['A', 'I'], note: 'above' },
  pod: { cases: ['A', 'I'], note: 'under' },
  među: { cases: ['A', 'I'], note: 'among' },
  k: { cases: ['D'], note: 'towards' },
  ka: { cases: ['D'], note: 'towards — the form used before k and g' },
  prema: { cases: ['D'], note: 'towards, according to' },
  unatoč: { cases: ['D'], note: 'despite — and it takes the dative, not the genitive' },
  usprkos: { cases: ['D'], note: 'despite — dative' },
  zbog: { cases: ['G'], note: 'because of' },
  radi: { cases: ['G'], note: 'for the sake of' },
  poslije: { cases: ['G'], note: 'after' },
  prije: { cases: ['G'], note: 'before' },
  tijekom: { cases: ['G'], note: 'during' },
  između: { cases: ['G'], note: 'between' },
  ispred: { cases: ['G'], note: 'in front of' },
  iza: { cases: ['G'], note: 'behind' },
  iznad: { cases: ['G'], note: 'above' },
  ispod: { cases: ['G'], note: 'below' },
  blizu: { cases: ['G'], note: 'near' },
  oko: { cases: ['G'], note: 'around — the same spelling as the noun for eye' },
  kroz: { cases: ['A'], note: 'through' },
  niz: { cases: ['A'], note: 'down along' },
  uz: { cases: ['A'], note: 'alongside, up' },
};
