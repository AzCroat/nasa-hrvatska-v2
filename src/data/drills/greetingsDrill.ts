// src/data/drills/greetingsDrill.ts
//
// A1 GREETINGS & FAREWELLS — the drill for the `greetings-farewells` lesson.
//
// This looks like the topical block — the lessons left unmapped because their
// subject is vocabulary and pairing them with a topic-blind vocab game would
// claim a connection the app cannot deliver. It is not. Croatian greeting is
// RULE-GOVERNED in two dimensions at once: the time of day picks the greeting
// (dobro jutro / dobar dan / dobra večer) and the relationship picks the form
// (kako si / kako ste). A learner who greets a shopkeeper with ćao has not
// forgotten a word; they have broken a rule, and a drill can test a rule.
//
// The lesson is order 2, so a learner reaching this drill knows almost nothing
// else. Everything here is answerable from the lesson alone.
//
// Three modes:
//   doba     — which greeting for which hour
//   registar — ti or Vi, casual or formal
//   odgovori — replies, introductions and farewells

import type { ModeDrillItem } from '../../components/practice/ModeDrill';

export const GREETINGS_MODE_LABELS: Record<string, string> = {
  doba: '🌅 Doba dana',
  registar: '🤝 Ti ili Vi',
  odgovori: '💬 Odgovori i rastanak',
};

export const GREETINGS_DRILL_DATA: ModeDrillItem[] = [
  // ── doba ──────────────────────────────────────────────────────────────────
  {
    mode: 'doba',
    q: 'U 8 ujutro kažemo: ____',
    en: 'At 8 in the morning we say:',
    opts: ['Dobro jutro', 'Dobar dan', 'Dobra večer', 'Laku noć'],
    answer: 'Dobro jutro',
    tip: 'Dobro jutro until about 11.',
  },
  {
    mode: 'doba',
    q: 'U 14 sati kažemo: ____',
    en: 'At 2 in the afternoon we say:',
    opts: ['Dobar dan', 'Dobro jutro', 'Dobra večer', 'Laku noć'],
    answer: 'Dobar dan',
    tip: 'Dobar dan covers the whole middle of the day, roughly 11 to 18.',
  },
  {
    mode: 'doba',
    q: 'U 20 sati kažemo: ____',
    en: 'At 8 in the evening we say:',
    opts: ['Dobra večer', 'Dobar dan', 'Dobro jutro', 'Laku noć'],
    answer: 'Dobra večer',
    tip: 'Dobra večer from about 18 onwards.',
  },
  {
    mode: 'doba',
    q: 'Kada kažemo "laku noć"?',
    en: 'When do we say "laku noć"?',
    opts: ['pri rastanku navečer', 'pri dolasku navečer', 'ujutro', 'poslije podne'],
    answer: 'pri rastanku navečer',
    tip: 'Laku noć is a PARTING, not a greeting. You arrive with dobra večer and leave with laku noć.',
  },
  {
    mode: 'doba',
    q: 'Koji pozdrav vrijedi u svako doba?',
    en: 'Which greeting works at any hour?',
    opts: ['Bog', 'Dobro jutro', 'Dobra večer', 'Laku noć'],
    answer: 'Bog',
    tip: 'Bog is the everyday casual greeting and works as both hello and goodbye.',
  },
  {
    mode: 'doba',
    q: 'Koji pozdrav NE ovisi o dobu dana?',
    en: 'Which one does not depend on the time?',
    opts: ['Ćao', 'Dobro jutro', 'Dobar dan', 'Dobra večer'],
    answer: 'Ćao',
    tip: 'Ćao, like Bog, is time-free — but it is only for friends.',
  },
  {
    mode: 'doba',
    q: 'Ulazite u dućan u 9 ujutro. Kažete: ____',
    en: 'You enter a shop at 9am. You say:',
    opts: ['Dobro jutro', 'Ćao', 'Laku noć', 'Dobra večer'],
    answer: 'Dobro jutro',
    tip: 'To a stranger, always the time-of-day greeting — never ćao.',
  },
  {
    mode: 'doba',
    q: 'Koliko vremenskih pozdrava ima hrvatski?',
    en: 'How many time-of-day greetings are there?',
    opts: ['tri', 'dva', 'četiri', 'jedan'],
    answer: 'tri',
    tip: 'Three: jutro, dan, večer. Laku noć is a farewell, not a fourth greeting.',
  },

  // ── registar ──────────────────────────────────────────────────────────────
  {
    mode: 'registar',
    q: 'Prijatelju kažete: ____',
    en: 'To a friend you say:',
    opts: ['Kako si?', 'Kako ste?', 'Kako je?', 'Kako su?'],
    answer: 'Kako si?',
    tip: 'Kako si? to anyone you address as ti.',
  },
  {
    mode: 'registar',
    q: 'Profesoru kažete: ____',
    en: 'To your teacher you say:',
    opts: ['Kako ste?', 'Kako si?', 'Kako je?', 'Kako sam?'],
    answer: 'Kako ste?',
    tip: 'Kako ste? — the polite Vi form, and also the plural.',
  },
  {
    mode: 'registar',
    q: 'Koji je uljudni oblik od "ti"?',
    en: 'What is the polite form of "ti"?',
    opts: ['Vi', 'ti', 'oni', 'mi'],
    answer: 'Vi',
    tip: 'Vi, written with a capital when addressing one person politely.',
  },
  {
    mode: 'registar',
    q: 'Nepoznatoj osobi u uredu kažete: ____',
    en: 'To a stranger in an office you say:',
    opts: ['Dobar dan', 'Ćao', 'Bog', 'Kako si?'],
    answer: 'Dobar dan',
    tip: 'Default to the formal greeting; the other person can invite you to relax it.',
  },
  {
    mode: 'registar',
    q: 'Koji je pozdrav samo za bliske prijatelje?',
    en: 'Which greeting is for close friends only?',
    opts: ['Ćao', 'Dobar dan', 'Doviđenja', 'Dobra večer'],
    answer: 'Ćao',
    tip: 'Ćao is borrowed from Italian and is the most informal of them all.',
  },
  {
    mode: 'registar',
    q: 'Vraćate pitanje uljudno: A ____?',
    en: 'Returning the question politely: and you?',
    opts: ['Vi', 'ti', 'on', 'mi'],
    answer: 'Vi',
    tip: 'A ti? informally, A Vi? politely. Always return it — not returning it sounds cold.',
  },
  {
    mode: 'registar',
    q: 'Kako se uljudno pita za ime?',
    en: 'How do you politely ask someone’s name?',
    opts: ['Kako se zovete?', 'Kako se zoveš?', 'Tko si ti?', 'Što si ti?'],
    answer: 'Kako se zovete?',
    tip: 'The -te ending carries the politeness, exactly as in kako ste.',
  },
  {
    mode: 'registar',
    q: 'Kada prelazimo s "Vi" na "ti"?',
    en: 'When do you switch from Vi to ti?',
    opts: ['kad druga osoba predloži', 'nakon prvog susreta', 'nikada', 'čim znamo ime'],
    answer: 'kad druga osoba predloži',
    tip: 'Wait to be invited — usually with "možemo na ti".',
  },

  // ── odgovori ──────────────────────────────────────────────────────────────
  {
    mode: 'odgovori',
    q: 'Kako si? — ____ sam, hvala.',
    en: 'How are you? — I am well, thanks.',
    opts: ['Dobro', 'Dobar', 'Dobra', 'Dobri'],
    answer: 'Dobro',
    tip: 'Dobro sam — the adverb, whatever your gender.',
  },
  {
    mode: 'odgovori',
    q: 'Upoznali ste nekoga. Kažete: ____',
    en: 'You have just met someone. You say:',
    opts: ['Drago mi je', 'Laku noć', 'Sretno', 'Vidimo se'],
    answer: 'Drago mi je',
    tip: 'Drago mi je = pleased to meet you. Say it every single time.',
  },
  {
    mode: 'odgovori',
    q: 'Uljudni rastanak: ____',
    en: 'A formal goodbye:',
    opts: ['Doviđenja', 'Ćao', 'Bog', 'Sretno'],
    answer: 'Doviđenja',
    tip: 'Doviđenja — literally "until seeing again".',
  },
  {
    mode: 'odgovori',
    q: 'Znate da ćete se opet vidjeti: ____',
    en: 'You know you will meet again:',
    opts: ['Vidimo se', 'Doviđenja', 'Laku noć', 'Drago mi je'],
    answer: 'Vidimo se',
    tip: 'Vidimo se = see you. Čujemo se is its telephone twin — talk soon.',
  },
  {
    mode: 'odgovori',
    q: 'Prijatelj ide na ispit. Kažete: ____',
    en: 'A friend is off to an exam. You say:',
    opts: ['Sretno', 'Doviđenja', 'Drago mi je', 'Laku noć'],
    answer: 'Sretno',
    tip: 'Sretno! = good luck, before anything that matters.',
  },
  {
    mode: 'odgovori',
    q: 'Rastajete se preko telefona: ____',
    en: 'Parting on the phone:',
    opts: ['Čujemo se', 'Vidimo se', 'Drago mi je', 'Dobro jutro'],
    answer: 'Čujemo se',
    tip: 'Čujemo se — we will HEAR each other. The verb follows the medium.',
  },
  {
    mode: 'odgovori',
    q: 'Netko vam kaže hvala. Odgovarate: ____',
    en: 'Someone thanks you. You reply:',
    opts: ['Nema na čemu', 'Drago mi je', 'Sretno', 'Doviđenja'],
    answer: 'Nema na čemu',
    tip: 'Nema na čemu = you are welcome. Molim also works on its own.',
  },
  {
    mode: 'odgovori',
    q: 'Što kažete kad odlazite kasno navečer?',
    en: 'What do you say leaving late at night?',
    opts: ['Laku noć', 'Dobra večer', 'Dobro jutro', 'Drago mi je'],
    answer: 'Laku noć',
    tip: 'Laku noć closes the day — the mirror of dobro jutro opening it.',
  },
];
