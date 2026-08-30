// src/data/drills/healthDrill.ts
//
// A2 BODY & HEALTH — the drill for the `body-health` lesson.
//
// The structure here is the second sentence in this curriculum that turns
// English inside out, and the learner meets it at the worst possible moment —
// at a pharmacy counter, feeling ill. *Boli me glava* is not "I hurt my head":
// the HEAD is the subject and does the hurting, and the person is an accusative
// object. So the verb counts the body part, not you — *boli glava* but *bole
// leđa*, and *bole* is the form a learner almost never produces unprompted.
//
// Which matters more than it looks, because five of the commonest body words
// are plural-only or naturally paired: *leđa*, *usta*, *oči*, *uši*, *zubi*.
// Say *boli me oči* and the sentence is wrong in the one place a doctor is
// listening.
//
// Three modes:
//   boli       — the construction itself
//   mnozina    — the body parts that are plural, and the verb that follows
//   lijecnik   — feeling unwell, and the cases the two destinations take

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const HEALTH_MODE_LABELS: Record<string, string> = {
  boli: '🤕 Boli me',
  mnozina: '👀 Množina',
  lijecnik: '🩺 Kod liječnika',
};

export const HEALTH_DRILL_DATA: ModeDrillItem[] = [
  // ── boli ──────────────────────────────────────────────────────────────────
  {
    mode: 'boli',
    q: 'Boli ____ glava. (mene)',
    en: 'I have a headache.',
    opts: ['me', 'mi', 'ja', 'moja'],
    answer: 'me',
    tip: 'The person is the ACCUSATIVE object: boli me, boli te, boli ga.',
  },
  {
    mode: 'boli',
    q: 'Tko je subjekt u "Boli me glava"?',
    en: 'What is the subject?',
    opts: ['glava', 'ja', 'nema ga', 'boli'],
    answer: 'glava',
    tip: 'The head is. It does the hurting; you are on the receiving end.',
  },
  {
    mode: 'boli',
    q: 'Boli ____ grlo. (tebe)',
    en: 'You have a sore throat.',
    opts: ['te', 'ti', 'tebi', 'tvoje'],
    answer: 'te',
    tip: 'te — accusative. Ti would be the dative and belongs to sviđa ti se.',
  },
  {
    mode: 'boli',
    q: 'Zašto je "Ja bolim glavu" pogrešno?',
    en: 'Why is that wrong?',
    opts: ['glava mora biti subjekt', 'treba dativ', 'nedostaje "se"', 'nije pogrešno'],
    answer: 'glava mora biti subjekt',
    tip: 'It says "I am hurting the head". The sentence is built backwards.',
  },
  {
    mode: 'boli',
    q: 'Boli ____ zub. (njega)',
    en: 'He has toothache.',
    opts: ['ga', 'mu', 'njemu', 'njegov'],
    answer: 'ga',
    tip: 'ga — accusative, like me and te.',
  },
  {
    mode: 'boli',
    q: 'S čime se slaže glagol "boljeti"?',
    en: 'What does the verb agree with?',
    opts: ['s dijelom tijela', 's osobom', 'ni s čim', 's oboje'],
    answer: 's dijelom tijela',
    tip: 'With the body part, which is the grammatical subject.',
  },
  {
    mode: 'boli',
    q: 'Boli ____ trbuh. (nju)',
    en: 'She has a stomach ache.',
    opts: ['je', 'joj', 'nju', 'njezin'],
    answer: 'je',
    tip: 'je — the accusative clitic. Joj is the dative.',
  },
  {
    mode: 'boli',
    q: 'Jučer ____ glava. (boljeti, mene)',
    en: 'My head hurt yesterday.',
    opts: ['me boljela', 'sam bolio', 'me bolio', 'sam boljela'],
    answer: 'me boljela',
    tip: 'The participle agrees with glava, which is feminine: boljela me glava.',
  },

  // ── mnozina ───────────────────────────────────────────────────────────────
  {
    mode: 'mnozina',
    q: '____ me leđa.',
    en: 'My back hurts.',
    opts: ['Bole', 'Boli', 'Bolim', 'Boljeti'],
    answer: 'Bole',
    tip: 'Leđa is PLURAL in Croatian, so the verb is plural: bole me leđa.',
  },
  {
    mode: 'mnozina',
    q: '____ me oči.',
    en: 'My eyes hurt.',
    opts: ['Bole', 'Boli', 'Bolim', 'Bolju'],
    answer: 'Bole',
    tip: 'Two eyes → bole. This is the form learners almost never reach for.',
  },
  {
    mode: 'mnozina',
    q: 'Koja je množina od "oko"?',
    en: 'What is the plural of oko?',
    opts: ['oči', 'oka', 'okovi', 'okna'],
    answer: 'oči',
    tip: 'oko → oči, uho → uši. Both are irregular and both are everyday words.',
  },
  {
    mode: 'mnozina',
    q: 'Koja je množina od "uho"?',
    en: 'What is the plural of uho?',
    opts: ['uši', 'uha', 'uhovi', 'ušta'],
    answer: 'uši',
    tip: 'uši.',
  },
  {
    mode: 'mnozina',
    q: 'Kojeg je broja "usta"?',
    en: 'What number is usta?',
    opts: ['uvijek množina', 'jednina', 'oboje', 'nema broj'],
    answer: 'uvijek množina',
    tip: 'Usta is plural-only: Usta su suha. There is no singular form.',
  },
  {
    mode: 'mnozina',
    q: '____ me zubi.',
    en: 'My teeth hurt.',
    opts: ['Bole', 'Boli', 'Bolim', 'Boljeli'],
    answer: 'Bole',
    tip: 'zub → zubi, plural → bole.',
  },
  {
    mode: 'mnozina',
    q: '____ me ruka.',
    en: 'My arm hurts.',
    opts: ['Boli', 'Bole', 'Bolim', 'Bolio'],
    answer: 'Boli',
    tip: 'One arm → singular. The rule cuts both ways.',
  },
  {
    mode: 'mnozina',
    q: 'Kako reći "my legs hurt"?',
    en: 'my legs hurt',
    opts: ['Bole me noge.', 'Boli me noge.', 'Bolim noge.', 'Bole mi noge.'],
    answer: 'Bole me noge.',
    tip: 'Plural noun, plural verb, accusative person.',
  },

  // ── lijecnik ──────────────────────────────────────────────────────────────
  {
    mode: 'lijecnik',
    q: 'Idem kod ____. (liječnik)',
    en: 'I am going to the doctor.',
    opts: ['liječnika', 'liječnik', 'liječniku', 'liječnikom'],
    answer: 'liječnika',
    tip: 'kod takes the GENITIVE: kod liječnika, kod zubara.',
  },
  {
    mode: 'lijecnik',
    q: 'Idem u ____. (ljekarna)',
    en: 'I am going to the pharmacy.',
    opts: ['ljekarnu', 'ljekarni', 'ljekarne', 'ljekarnom'],
    answer: 'ljekarnu',
    tip: 'You are GOING there → u plus the accusative: u ljekarnu.',
  },
  {
    mode: 'lijecnik',
    q: 'Kako se kaže "I do not feel well"?',
    en: 'I do not feel well.',
    opts: ['Ne osjećam se dobro.', 'Ne osjećam dobro.', 'Nisam dobar.', 'Ne čujem se dobro.'],
    answer: 'Ne osjećam se dobro.',
    tip: 'Osjećati SE — the reflexive is not optional here.',
  },
  {
    mode: 'lijecnik',
    q: 'Imam ____. (a temperature)',
    en: 'I have a temperature.',
    opts: ['temperaturu', 'temperatura', 'temperature', 'temperaturom'],
    answer: 'temperaturu',
    tip: 'Imati takes the accusative: imam temperaturu.',
  },
  {
    mode: 'lijecnik',
    q: 'Kako žena kaže "I have a cold"?',
    en: 'A woman says:',
    opts: ['Prehlađena sam.', 'Prehlađen sam.', 'Prehlada sam.', 'Prehladim se.'],
    answer: 'Prehlađena sam.',
    tip: 'The adjective agrees with the speaker: prehlađen / prehlađena.',
  },
  {
    mode: 'lijecnik',
    q: 'Što znači "Muka mi je"?',
    en: 'What does it mean?',
    opts: ['I feel sick', 'I am tired', 'I am cold', 'I am hungry'],
    answer: 'I feel sick',
    tip: 'Another dative sentence — the feeling is TO me.',
  },
  {
    mode: 'lijecnik',
    q: 'Što se kaže bolesnoj osobi?',
    en: 'What do you say to someone ill?',
    opts: ['Brzo ozdravi!', 'Sretno!', 'Živjeli!', 'Čestitam!'],
    answer: 'Brzo ozdravi!',
    tip: 'Brzo ozdravi! — get well soon. To an adult you address with Vi: ozdravite.',
  },
  {
    mode: 'lijecnik',
    q: 'Trebam ____ za glavobolju. (lijek)',
    en: 'I need something for a headache.',
    opts: ['lijek', 'lijeka', 'lijeku', 'lijekom'],
    answer: 'lijek',
    tip: 'Trebati takes the accusative: trebam lijek.',
  },
];
