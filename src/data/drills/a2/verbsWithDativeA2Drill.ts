// src/data/drills/a2/verbsWithDativeA2Drill.ts
//
// A2 VERBS WITH THE DATIVE — the drill for the `verbs-with-dative-a2` lesson.
//
// Two kinds of verb. With nedostajati, smetati, odgovarati ("suit") and pripadati the
// THING is the subject and the person is in the dative, so the verb agrees with the
// thing: Nedostaju mi prijatelji. With zahvaliti, čestitati, vjerovati and odgovoriti
// the learner acts on someone, and that someone is in the dative. The interference
// error is the English accusative: "Nedostajem te", "Vjerujem te".
//
// Three modes:
//   nedostajati — the turned-round verbs and their agreement
//   dativ       — the person in the dative after the verb
//   red         — the dative inside the clitic cluster

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const VERBS_WITH_DATIVE_A2_MODE_LABELS: Record<string, string> = {
  nedostajati: '💭 Nedostaješ mi',
  dativ: '🎁 Dativ',
  red: '🔀 Red riječi',
};

export const VERBS_WITH_DATIVE_A2_DRILL_DATA: ModeDrillItem[] = [
  // ── nedostajati ───────────────────────────────────────────────────────────
  {
    mode: 'nedostajati',
    q: 'How do you tell a friend that you miss them?',
    en: 'I miss you.',
    opts: ['Nedostaješ mi.', 'Nedostajem te.', 'Nedostajem ti.', 'Nedostaješ me.'],
    answer: 'Nedostaješ mi.',
    tip: 'The one who is missed is the subject (you → nedostaješ); the one who misses is in the dative (mi).',
  },
  {
    mode: 'nedostajati',
    q: '____ mi more.',
    en: 'I miss the sea.',
    opts: ['Nedostajem', 'Nedostaje', 'Nedostaju', 'Nedostaješ'],
    answer: 'Nedostaje',
    tip: 'The sea is the subject, third person singular.',
  },
  {
    mode: 'nedostajati',
    q: '____ mi prijatelji.',
    en: 'I miss my friends.',
    opts: ['Nedostaje', 'Nedostajem', 'Nedostaju', 'Nedostajemo'],
    answer: 'Nedostaju',
    tip: 'prijatelji is plural and the subject, so the verb is plural.',
  },
  {
    mode: 'nedostajati',
    q: 'Nedostaje nam ____.',
    en: 'We miss our grandmother.',
    opts: ['baku', 'baki', 'baka', 'bakom'],
    answer: 'baka',
    tip: 'The one who is missed is the subject — nominative.',
  },
  {
    mode: 'nedostajati',
    q: 'Smeta li vam ____?',
    en: 'Does the music bother you?',
    opts: ['glazbu', 'glazba', 'glazbi', 'glazbom'],
    answer: 'glazba',
    tip: 'With smetati the thing that bothers is the subject.',
  },
  {
    mode: 'nedostajati',
    q: 'Na moru mi je ____ obitelj.',
    en: 'At the seaside I missed my family.',
    opts: ['nedostajao', 'nedostajala', 'nedostajalo', 'nedostajali'],
    answer: 'nedostajala',
    tip: 'The participle agrees with obitelj, which is feminine.',
  },
  {
    mode: 'nedostajati',
    q: '____ li vam sutra u deset?',
    en: 'Does tomorrow at ten suit you?',
    opts: ['Odgovarate', 'Odgovaram', 'Odgovara', 'Odgovaraju'],
    answer: 'Odgovara',
    tip: 'The time is the subject: it suits you — odgovara.',
  },
  {
    mode: 'nedostajati',
    q: 'Who misses whom in the sentence below?',
    lead: 'Nedostajem ti.',
    en: 'Choose the English meaning.',
    opts: ['You miss me.', 'I miss you.', 'I miss him.', 'We miss you.'],
    answer: 'You miss me.',
    tip: 'I am the subject — the one who is missed — and you feel it.',
  },

  // ── dativ ─────────────────────────────────────────────────────────────────
  {
    mode: 'dativ',
    q: 'Zahvalio sam ____ na pomoći.',
    en: 'I thanked her for the help.',
    opts: ['ju', 'nju', 'joj', 'ona'],
    answer: 'joj',
    tip: 'zahvaliti takes the dative.',
  },
  {
    mode: 'dativ',
    q: 'Čestitam ____ rođendan!',
    en: 'Happy birthday to you! (to a friend)',
    opts: ['te', 'tebe', 'tvoj', 'ti'],
    answer: 'ti',
    tip: 'čestitati takes the dative.',
  },
  {
    mode: 'dativ',
    q: 'Ne vjerujem ____.',
    en: 'I don’t believe him.',
    opts: ['ga', 'mu', 'on', 'njega'],
    answer: 'mu',
    tip: 'vjerovati takes the dative.',
  },
  {
    mode: 'dativ',
    q: 'Ova kuća pripada ____.',
    en: 'This house belongs to my family.',
    opts: ['mojoj obitelji', 'moja obitelj', 'moju obitelj', 'mojom obitelji'],
    answer: 'mojoj obitelji',
    tip: 'pripadati takes the dative.',
  },
  {
    mode: 'dativ',
    q: 'Čestitam ____ na diplomi!',
    en: 'Congratulations on your degree! (polite)',
    opts: ['Vas', 'Vam', 'Vi', 'Vaš'],
    answer: 'Vam',
    tip: 'čestitati + dative, and na + locative for the achievement.',
  },
  {
    mode: 'dativ',
    q: 'Hvala ti ____ savjetu.',
    en: 'Thanks for the advice.',
    opts: ['za', 'na', 'u', 'o'],
    answer: 'na',
    tip: 'Thanking for something: na + locative.',
  },
  {
    mode: 'dativ',
    q: 'Djeci smeta ____.',
    en: 'The noise bothers the children.',
    opts: ['buka', 'buku', 'buci', 'bukom'],
    answer: 'buka',
    tip: 'buka is the subject; the children are in the dative.',
  },
  {
    mode: 'dativ',
    q: 'Odgovorio sam ____ na poruku.',
    en: 'I answered his message.',
    opts: ['ga', 'mu', 'njegov', 'on'],
    answer: 'mu',
    tip: 'odgovoriti takes the person in the dative.',
  },

  // ── red ───────────────────────────────────────────────────────────────────
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'I missed you. (a woman speaking to a man)',
    opts: ['Nedostajao si mi.', 'Nedostajao mi si.', 'Mi si nedostajao.', 'Nedostajala si mi.'],
    answer: 'Nedostajao si mi.',
    tip: 'He was missed, so nedostajao; si comes before the dative.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'We thanked them.',
    opts: ['Zahvalili im smo.', 'Zahvalili smo im.', 'Im smo zahvalili.', 'Zahvalili smo ih.'],
    answer: 'Zahvalili smo im.',
    tip: 'smo before the dative im.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'Does the smoke bother you? (polite)',
    opts: ['Smeta vam li dim?', 'Li vam smeta dim?', 'Smeta li vam dim?', 'Vam smeta li dim?'],
    answer: 'Smeta li vam dim?',
    tip: 'li straight after the verb, then the dative.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'The noise bothered him.',
    opts: [
      'Smetala je mu buka.',
      'Mu je smetala buka.',
      'Smetala mu je buka.',
      'Smetala buka je mu.',
    ],
    answer: 'Smetala mu je buka.',
    tip: 'mu first in the cluster, je last.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'We wished her a happy birthday.',
    opts: [
      'Čestitali smo joj rođendan.',
      'Čestitali joj smo rođendan.',
      'Joj smo čestitali rođendan.',
      'Čestitali smo ju rođendan.',
    ],
    answer: 'Čestitali smo joj rođendan.',
    tip: 'smo, then the dative joj.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'I missed Split.',
    opts: [
      'Nedostajao je mi Split.',
      'Nedostajao mi je Split.',
      'Mi je nedostajao Split.',
      'Nedostajao sam Split.',
    ],
    answer: 'Nedostajao mi je Split.',
    tip: 'Split is the subject; mi before je.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'I didn’t believe her. (a woman speaking)',
    opts: [
      'Nisam joj vjerovala.',
      'Nisam ju vjerovala.',
      'Joj nisam vjerovala.',
      'Nisam vjerovala ju.',
    ],
    answer: 'Nisam joj vjerovala.',
    tip: 'nisam first, then the dative joj.',
  },
  {
    mode: 'red',
    q: 'Which word order is right?',
    en: 'Does Saturday suit you? (to a friend)',
    opts: [
      'Odgovara ti li subota?',
      'Odgovara li ti subota?',
      'Ti odgovara li subota?',
      'Odgovara li te subota?',
    ],
    answer: 'Odgovara li ti subota?',
    tip: 'li after the verb, then ti.',
  },
];
