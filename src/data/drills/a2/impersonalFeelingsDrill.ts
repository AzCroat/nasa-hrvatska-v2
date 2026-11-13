// src/data/drills/a2/impersonalFeelingsDrill.ts
//
// A2 IMPERSONAL FEELINGS — the drill for the `impersonal-feelings` lesson.
//
// Hladno mi je: an adverb, the person in the dative, and je — no subject at all. The
// errors are the English shape ("Ja sam hladno"), a gendered past ("Bio mi je hladno"
// for the neuter bilo), and Treba mi with a verb that does not agree with the thing
// needed.
//
// Three modes:
//   osjecaj — which dative, which adverb; Spava mi se for what you feel like
//   vrijeme — past, future and negative
//   treba   — Treba mi / Trebaju mi and agreement with the thing

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const IMPERSONAL_FEELINGS_MODE_LABELS: Record<string, string> = {
  osjecaj: '🥶 Osjećaj',
  vrijeme: '⏳ Prije i poslije',
  treba: '🧤 Treba mi',
};

export const IMPERSONAL_FEELINGS_DRILL_DATA: ModeDrillItem[] = [
  // ── osjecaj ───────────────────────────────────────────────────────────────
  {
    mode: 'osjecaj',
    q: 'How do you say that you feel cold?',
    en: 'I am cold.',
    opts: ['Hladno mi je.', 'Ja sam hladno.', 'Hladno me je.', 'Hladna mi je.'],
    answer: 'Hladno mi je.',
    tip: 'The person who feels it goes in the dative, and the verb is je.',
  },
  {
    mode: 'osjecaj',
    q: 'Vruće ____ je.',
    en: 'He is hot.',
    opts: ['ga', 'on', 'mu', 'njega'],
    answer: 'mu',
    tip: 'The dative of on: mu.',
  },
  {
    mode: 'osjecaj',
    q: 'Dosadno ____ je.',
    en: 'We are bored.',
    opts: ['nas', 'mi', 'nam', 'smo'],
    answer: 'nam',
    tip: 'The dative of mi (we): nam.',
  },
  {
    mode: 'osjecaj',
    q: 'Djeci ____ dosadno.',
    en: 'The children are bored.',
    opts: ['su', 'je', 'smo', 'jesu'],
    answer: 'je',
    tip: 'djeci is a dative, not a subject; with no subject the verb is je.',
  },
  {
    mode: 'osjecaj',
    q: '____ je zlo.',
    en: 'Mum feels sick.',
    opts: ['Mama', 'Mamu', 'Mami', 'Mamom'],
    answer: 'Mami',
    tip: 'The person who feels it goes in the dative: mami.',
  },
  {
    mode: 'osjecaj',
    q: 'Meni je hladno, a ____?',
    en: 'I’m cold — and you?',
    opts: ['ti', 'te', 'tebe', 'tebi'],
    answer: 'tebi',
    tip: 'The long dative, for contrast.',
  },
  {
    mode: 'osjecaj',
    q: '____ mi je govoriti hrvatski na telefonu.',
    en: 'It is hard for me to speak Croatian on the phone.',
    opts: ['Teško', 'Lako', 'Žao', 'Drago'],
    answer: 'Teško',
    tip: 'Hard → teško, then the infinitive.',
  },
  {
    mode: 'osjecaj',
    q: 'What does the sentence below mean?',
    lead: 'Svejedno mi je.',
    en: 'Choose the English meaning.',
    opts: ['I don’t mind.', 'I am sorry.', 'I am glad.', 'I am bored.'],
    answer: 'I don’t mind.',
    tip: 'svejedno — all the same: it makes no difference to me.',
  },

  // ── vrijeme ───────────────────────────────────────────────────────────────
  {
    mode: 'vrijeme',
    q: '____ mi je hladno.',
    en: 'I was cold.',
    opts: ['Bio', 'Bila', 'Bilo', 'Bili'],
    answer: 'Bilo',
    tip: 'No subject, so the past is always the neuter bilo.',
  },
  {
    mode: 'vrijeme',
    q: 'Na izletu nam je ____ lijepo.',
    en: 'We had a lovely time on the trip.',
    opts: ['bili', 'bilo', 'bio', 'bila'],
    answer: 'bilo',
    tip: 'Always bilo, whoever had the nice time.',
  },
  {
    mode: 'vrijeme',
    q: 'Bit ____ ti vruće u tom džemperu.',
    en: 'You will be hot in that jumper.',
    opts: ['ćeš', 'ću', 'će', 'ćete'],
    answer: 'će',
    tip: 'No subject, so the third person: bit će.',
  },
  {
    mode: 'vrijeme',
    q: '____ mi hladno.',
    en: 'I am not cold.',
    opts: ['Nije', 'Nisam', 'Ne je', 'Nisu'],
    answer: 'Nije',
    tip: 'The negative of je: nije.',
  },
  {
    mode: 'vrijeme',
    q: 'Which sentence asks a friend if they are cold?',
    en: 'Are you cold?',
    opts: ['Jesi li hladno?', 'Je li ti hladno?', 'Je li te hladno?', 'Jesi li ti hladno?'],
    answer: 'Je li ti hladno?',
    tip: 'The question form of je, then the dative ti.',
  },
  {
    mode: 'vrijeme',
    q: 'Baki je jučer ____ loše.',
    en: 'Grandma was unwell yesterday.',
    opts: ['bila', 'bilo', 'bio', 'bile'],
    answer: 'bilo',
    tip: 'baki is a dative; with no subject, bilo.',
  },
  {
    mode: 'vrijeme',
    q: 'Bilo ____ je žao.',
    en: 'He was sorry.',
    opts: ['ga', 'on', 'mu', 'njemu'],
    answer: 'mu',
    tip: 'The short dative in second place: Bilo mu je žao.',
  },
  {
    mode: 'vrijeme',
    q: 'Which sentence says that you will not be bored?',
    en: 'You won’t be bored. (to a friend)',
    opts: [
      'Neće ti biti dosadno.',
      'Nećeš ti biti dosadno.',
      'Neće te biti dosadno.',
      'Neće mi biti dosadno.',
    ],
    answer: 'Neće ti biti dosadno.',
    tip: 'neće, then the dative ti for the person addressed.',
  },

  // ── treba ─────────────────────────────────────────────────────────────────
  {
    mode: 'treba',
    q: 'Treba ____ kišobran.',
    en: 'I need an umbrella.',
    opts: ['me', 'mi', 'ja', 'moj'],
    answer: 'mi',
    tip: 'The person who needs is in the dative.',
  },
  {
    mode: 'treba',
    q: '____ mi rukavice.',
    en: 'I need gloves.',
    opts: ['Treba', 'Trebaju', 'Trebam', 'Trebaš'],
    answer: 'Trebaju',
    tip: 'The gloves are the subject and plural: trebaju.',
  },
  {
    mode: 'treba',
    q: '____ mi je pomoć.',
    en: 'I needed help.',
    opts: ['Trebao', 'Trebalo', 'Trebala', 'Trebali'],
    answer: 'Trebala',
    tip: 'pomoć is feminine and the subject.',
  },
  {
    mode: 'treba',
    q: '____ mi je novi kaput.',
    en: 'I needed a new coat.',
    opts: ['Trebala', 'Trebao', 'Trebalo', 'Trebale'],
    answer: 'Trebao',
    tip: 'kaput is masculine and the subject.',
  },
  {
    mode: 'treba',
    q: 'Treba ____ odmor.',
    en: 'She needs a rest.',
    opts: ['ju', 'joj', 'ona', 'nju'],
    answer: 'joj',
    tip: 'The person who needs is in the dative: joj.',
  },
  {
    mode: 'treba',
    q: 'Djeci ____ nove knjige.',
    en: 'The children need new books.',
    opts: ['treba', 'trebaju', 'trebamo', 'trebate'],
    answer: 'trebaju',
    tip: 'The books are the subject and plural.',
  },
  {
    mode: 'treba',
    q: 'Trebaju ____ karte za vlak.',
    en: 'They need train tickets.',
    opts: ['ih', 'oni', 'im', 'njih'],
    answer: 'im',
    tip: 'The dative of oni is im.',
  },
  {
    mode: 'treba',
    q: 'Treba nam ____.',
    en: 'We need a car.',
    opts: ['autu', 'auta', 'autom', 'auto'],
    answer: 'auto',
    tip: 'The car is the subject — nominative.',
  },
  {
    mode: 'osjecaj',
    q: 'Spava ____ se, idem u krevet.',
    en: 'I feel sleepy, I am going to bed.',
    opts: ['mi', 'me', 'ja', 'moj'],
    answer: 'mi',
    tip: 'What you feel like doing: the person in the short dative, then se.',
  },
  {
    mode: 'osjecaj',
    q: 'Danas mi se ne ____.',
    en: 'I don’t feel like working today.',
    opts: ['radi', 'radim', 'raditi', 'radiš'],
    answer: 'radi',
    tip: 'With mi se the verb is always in its on form.',
  },
];
