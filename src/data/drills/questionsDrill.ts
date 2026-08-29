// src/data/drills/questionsDrill.ts
//
// A1 QUESTIONS — the drill for the `basic-questions` lesson.
//
// CLAUDE.md named this lesson twice as one of the two left deliberately
// unmapped "because no drill teaches exactly those". That was the honest call
// while no drill existed; this is the drill.
//
// The lesson sits at order 6, TEN lessons above the `cases` primer, so nothing
// here may depend on knowing a case. That rules out the obvious advanced
// material (tko → koga → komu) and leaves the three things an A1 learner
// actually needs to get a question out of their mouth: the right question word,
// the `li` that turns a statement into a yes/no question, and the reply.
//
// Three modes:
//   rijeci   — which question word
//   li       — forming yes/no questions (verb + li, je li)
//   odgovori — answering, and the fixed questions worth memorising whole
//
// One authoring note, since it is invisible from the content: `da li` is
// deliberately absent, as both an answer and a distractor. It is widespread in
// speech but is not the Croatian standard, and the distractor rule forbids
// putting a form in front of a learner that they should not copy.

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const QUESTIONS_MODE_LABELS: Record<string, string> = {
  rijeci: '❓ Upitne riječi',
  li: '🔀 Da ili ne',
  odgovori: '💬 Odgovori',
};

export const QUESTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── rijeci ────────────────────────────────────────────────────────────────
  {
    mode: 'rijeci',
    q: '____ je to?',
    en: 'Who is that?',
    opts: ['Tko', 'Što', 'Gdje', 'Kako'],
    answer: 'Tko',
    tip: 'Tko asks about a PERSON. Što asks about a thing.',
  },
  {
    mode: 'rijeci',
    q: '____ radiš?',
    en: 'What are you doing?',
    opts: ['Što', 'Tko', 'Kada', 'Zašto'],
    answer: 'Što',
    tip: 'Što = what. Što radiš? is one of the ten most useful sentences you know.',
  },
  {
    mode: 'rijeci',
    q: '____ živiš?',
    en: 'Where do you live?',
    opts: ['Gdje', 'Kada', 'Kako', 'Koliko'],
    answer: 'Gdje',
    tip: 'Gdje = where.',
  },
  {
    mode: 'rijeci',
    q: '____ kasniš?',
    en: 'Why are you late?',
    opts: ['Zašto', 'Kako', 'Koliko', 'Tko'],
    answer: 'Zašto',
    tip: 'Zašto = why. The answer usually starts with zato što (because).',
  },
  {
    mode: 'rijeci',
    q: '____ košta?',
    en: 'How much does it cost?',
    opts: ['Koliko', 'Kako', 'Što', 'Koji'],
    answer: 'Koliko',
    tip: 'Koliko = how much / how many. Koliko košta? in every shop, every time.',
  },
  {
    mode: 'rijeci',
    q: '____ dolaziš?',
    en: 'When are you coming?',
    opts: ['Kada', 'Gdje', 'Kako', 'Tko'],
    answer: 'Kada',
    tip: 'Kada = when. Kad is the shorter form and just as standard.',
  },
  {
    mode: 'rijeci',
    q: '____ se zoveš?',
    en: 'What is your name?',
    opts: ['Kako', 'Tko', 'Što', 'Koji'],
    answer: 'Kako',
    tip: 'Croatian asks HOW you are called, not what: kako se zoveš?',
  },
  {
    mode: 'rijeci',
    q: '____ autobus ide u centar?',
    en: 'Which bus goes to the centre?',
    opts: ['Koji', 'Tko', 'Kako', 'Koliko'],
    answer: 'Koji',
    tip: 'Koji = which, and it agrees like an adjective: koji, koja, koje.',
  },

  // ── li ────────────────────────────────────────────────────────────────────
  {
    mode: 'li',
    q: 'Govoriš ____ engleski?',
    en: 'Do you speak English?',
    opts: ['li', 'je', 'da', 'se'],
    answer: 'li',
    tip: 'Li turns a statement into a yes/no question, and it goes straight after the verb.',
  },
  {
    mode: 'li',
    q: 'Koji je red riječi ispravan?',
    en: 'Which word order is correct?',
    opts: ['Imaš li vremena?', 'Li imaš vremena?', 'Imaš vremena li?', 'Vremena li imaš?'],
    answer: 'Imaš li vremena?',
    tip: 'Li is never first in the sentence — it clings to the word in front of it.',
  },
  {
    mode: 'li',
    q: '____ ovo tvoja torba?',
    en: 'Is this your bag?',
    opts: ['Je li', 'Li je', 'Jesi li', 'Je'],
    answer: 'Je li',
    tip: 'For "is it …?" the pair is je li — the verb je, then li.',
  },
  {
    mode: 'li',
    q: '____ umoran?',
    en: 'Are you tired?',
    opts: ['Jesi li', 'Je li', 'Si li', 'Jesu li'],
    answer: 'Jesi li',
    tip: 'The li question takes the LONG form of biti: jesam, jesi, je, jesmo, jeste, jesu.',
  },
  {
    mode: 'li',
    q: '____ oni kod kuće?',
    en: 'Are they at home?',
    opts: ['Jesu li', 'Je li', 'Jesi li', 'Su li'],
    answer: 'Jesu li',
    tip: 'Third person plural: jesu li.',
  },
  {
    mode: 'li',
    q: 'Kako se pita bez "li"?',
    en: 'How do you ask without "li"?',
    opts: ['uzlaznom intonacijom', 'obaveznim "li"', 'promjenom reda riječi', 'dodavanjem "ne"'],
    answer: 'uzlaznom intonacijom',
    tip: 'In speech, rising intonation alone does it: Imaš vremena? Both are correct.',
  },
  {
    mode: 'li',
    q: '____ znaš gdje je kolodvor?',
    en: 'Do you know where the station is?',
    opts: ['Znaš li', 'Li znaš', 'Je li znaš', 'Znaš da'],
    answer: 'Znaš li',
    tip: 'Verb first, then li — the pattern never changes.',
  },
  {
    mode: 'li',
    q: 'Gdje stoji "li" u rečenici?',
    en: 'Where does "li" sit?',
    opts: ['na drugome mjestu', 'na početku', 'na kraju', 'bilo gdje'],
    answer: 'na drugome mjestu',
    tip: 'Second position — the same rule that governs every Croatian clitic.',
  },

  // ── odgovori ──────────────────────────────────────────────────────────────
  {
    mode: 'odgovori',
    q: 'Kako si? — ____, hvala.',
    en: 'How are you? — Fine, thanks.',
    opts: ['Dobro', 'Dobar', 'Dobra', 'Dobri'],
    answer: 'Dobro',
    tip: 'The reply is the adverb dobro, not the adjective dobar.',
  },
  {
    mode: 'odgovori',
    q: 'Govoriš li hrvatski? — ____, malo.',
    en: 'Do you speak Croatian? — Yes, a little.',
    opts: ['Da', 'Ne', 'Jesam', 'Nije'],
    answer: 'Da',
    tip: 'Da = yes, ne = no. Both work as a complete answer on their own.',
  },
  {
    mode: 'odgovori',
    q: 'Kako se kaže "što znači …?"',
    en: 'How do you ask what something means?',
    opts: ['Što znači …?', 'Kako znači …?', 'Tko znači …?', 'Koliko znači …?'],
    answer: 'Što znači …?',
    tip: 'Što znači …? is the question that gets you through every conversation while learning.',
  },
  {
    mode: 'odgovori',
    q: 'Dobro sam, hvala. ____?',
    en: 'I am well, thanks. And you?',
    opts: ['A ti', 'A ja', 'A on', 'A to'],
    answer: 'A ti',
    tip: 'Always return the question: A ti? informally, A Vi? politely.',
  },
  {
    mode: 'odgovori',
    q: 'Ne razumijem. Možeš li ____?',
    en: 'I do not understand. Can you repeat?',
    opts: ['ponoviti', 'ponavljam', 'ponovi', 'ponavljati'],
    answer: 'ponoviti',
    tip: 'After možeš li the verb stays in the infinitive: možeš li ponoviti?',
  },
  {
    mode: 'odgovori',
    q: 'Kako se pita za nečije ime?',
    en: 'How do you ask someone their name?',
    opts: ['Kako se zoveš?', 'Što se zoveš?', 'Tko se zoveš?', 'Koji se zoveš?'],
    answer: 'Kako se zoveš?',
    tip: 'Kako se zoveš? to a friend, kako se zovete? to anyone else.',
  },
  {
    mode: 'odgovori',
    q: 'Odakle si? — ____ iz Kanade.',
    en: 'Where are you from? — I am from Canada.',
    opts: ['Ja sam', 'Ja imam', 'Meni je', 'Ja se'],
    answer: 'Ja sam',
    tip: 'Odakle si? asks origin; the answer is biti + iz.',
  },
  {
    mode: 'odgovori',
    q: 'Što je suprotno od "da"?',
    en: 'What is the opposite of "da"?',
    opts: ['ne', 'nije', 'nema', 'niti'],
    answer: 'ne',
    tip: 'Ne is the bare no. Nije means "is not" and answers a different question.',
  },
];
