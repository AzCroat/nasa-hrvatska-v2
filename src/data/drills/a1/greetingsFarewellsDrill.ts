// src/data/drills/a1/greetingsFarewellsDrill.ts
//
// A1 GREETINGS AND FAREWELLS — the drill for the `greetings-farewells` lesson (A1, 3).
//
// Follows Hrvatski za početnike 1, pages 9–10 (unit "Dobro došli!"): the greeting bubbles
// (Dobro jutro! · Dobar dan! · Dobra večer! · Laku noć! · Doviđenja! · Bog! · Vidimo se!),
// the friends' dialogue ("Bog! Kako si?" · "A kako si ti?"), the formal one ("Dobar dan,
// gospođo Perković. Kako ste?" · "Hvala na pitanju, dobro sam.") and the introduction
// ("Ja sam Petra. Drago mi je."). The book also gives Zbogom, Što je novo?, Dobar tek!,
// Živjeli!, Izvoli/Izvolite and Oprosti/Oprostite on these pages; the lesson leaves those
// for later, so they are not tested. Čao, Čujemo se, Sretno, Tako-tako and Nije loše come
// from the lesson, not from these pages.
//
// Three modes:
//   pozdravi — saying hello: time of day, and friend or stranger
//   kakoSi   — asking how someone is, and answering
//   rastanak — saying goodbye, and meeting someone new

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const GREETINGS_FAREWELLS_MODE_LABELS: Record<string, string> = {
  pozdravi: '👋 Dobar dan!',
  kakoSi: '🙂 Kako si?',
  rastanak: '🚪 Doviđenja!',
};

export const GREETINGS_FAREWELLS_DRILL_DATA: ModeDrillItem[] = [
  // ── pozdravi ──────────────────────────────────────────────────────────────
  {
    mode: 'pozdravi',
    q: '____ jutro, mama!',
    en: 'Good morning, Mom!',
    opts: ['Dobro', 'Dobar', 'Dobra', 'Laku'],
    answer: 'Dobro',
    tip: 'The morning greeting is Dobro jutro. Dobar belongs with dan, Dobra belongs with večer, and Laku is only used with noć.',
  },
  {
    mode: 'pozdravi',
    q: '____ dan, gospođo Perković!',
    en: 'Good afternoon, Mrs. Perković!',
    opts: ['Dobar', 'Dobro', 'Dobra', 'Laku'],
    answer: 'Dobar',
    tip: 'The daytime greeting is Dobar dan. Dobro belongs with jutro, Dobra belongs with večer, and Laku is only used with noć.',
  },
  {
    mode: 'pozdravi',
    q: '____ večer! Molim Vas, gdje je hotel?',
    en: 'Good evening! Excuse me, where is the hotel?',
    opts: ['Dobra', 'Dobar', 'Dobro', 'Laku'],
    answer: 'Dobra',
    tip: 'The evening greeting is Dobra večer. Dobar belongs with dan, Dobro belongs with jutro, and Laku is only used with noć, when you part for the night.',
  },
  {
    mode: 'pozdravi',
    q: 'Dobar ____!',
    cue: 'It is two in the afternoon.',
    opts: ['dan', 'jutro', 'večer', 'noć'],
    answer: 'dan',
    tip: 'Dobar pairs only with dan: Dobar dan. jutro takes Dobro, večer takes Dobra, and noć takes Laku.',
  },
  {
    mode: 'pozdravi',
    q: 'Marko: ____, Ana!',
    cue: 'Two friends meet in town.',
    opts: ['Bog', 'Doviđenja', 'Laku noć', 'Drago mi je'],
    answer: 'Bog',
    tip: 'Friends greet each other with Bog. Doviđenja and Laku noć are said when leaving, not when meeting, and Drago mi je is for someone you are meeting for the first time.',
  },
  {
    mode: 'pozdravi',
    q: '____, gospodine Mikulić. Kako ste?',
    cue: 'An office, three in the afternoon.',
    opts: ['Dobar dan', 'Bog', 'Čao', 'Laku noć'],
    answer: 'Dobar dan',
    tip: 'gospodine and Kako ste show a formal relationship, so the greeting is Dobar dan. Bog and Čao are for friends, and Laku noć is a farewell at bedtime.',
  },
  {
    mode: 'pozdravi',
    q: '____!',
    cue: 'You walk into a restaurant at 8 in the evening and greet the waiter.',
    opts: ['Dobra večer', 'Laku noć', 'Dobro jutro', 'Čao'],
    answer: 'Dobra večer',
    tip: 'On arriving in the evening you say Dobra večer. Laku noć looks similar but is only a farewell at night, Dobro jutro is for the morning, and Čao is too casual for a waiter you do not know.',
  },
  {
    mode: 'pozdravi',
    q: 'Čao, ____!',
    cue: 'Who can you greet this way?',
    opts: ['Petra', 'gospodine Mikulić', 'gospođo Perković', 'profesorice Jurić'],
    answer: 'Petra',
    tip: 'Čao is very casual and goes with a first name: Čao, Petra! The titles gospodine, gospođo and profesorice mark people you address formally, and they get Dobar dan.',
  },
  {
    mode: 'pozdravi',
    q: 'Što znači "Dobra večer"?',
    opts: ['Good evening.', 'Good night.', 'Good morning.', 'Goodbye.'],
    answer: 'Good evening.',
    tip: 'večer is "evening", so Dobra večer is the greeting "Good evening". "Good night" is Laku noć, "Good morning" is Dobro jutro, and "Goodbye" is Doviđenja.',
  },

  // ── kakoSi ────────────────────────────────────────────────────────────────
  {
    mode: 'kakoSi',
    q: 'Bog, Margareta! Kako ____?',
    en: 'Hi, Margareta! How are you?',
    opts: ['si', 'ste', 'sam', 'je'],
    answer: 'si',
    tip: 'Bog and a first name mean you are talking to a friend, so the question is Kako si? ste is for someone you address formally or for a group, sam means "I am", and je means "he or she is".',
  },
  {
    mode: 'kakoSi',
    q: 'Dobar dan, gospođo Perković. Kako ____?',
    en: 'Good afternoon, Mrs. Perković. How are you?',
    opts: ['ste', 'si', 'smo', 'su'],
    answer: 'ste',
    tip: 'gospođo marks a formal relationship, so the question is Kako ste? si is only for a friend, smo means "we are", and su means "they are".',
  },
  {
    mode: 'kakoSi',
    q: 'Bog, Ana i Marko! Kako ____?',
    cue: 'You are asking two friends at once.',
    opts: ['ste', 'si', 'sam', 'je'],
    answer: 'ste',
    tip: 'Two people at once always get Kako ste?, even when they are friends. si is for one friend, sam means "I am", and je means "he or she is".',
  },
  {
    mode: 'kakoSi',
    q: 'Kako si? — ____, hvala. A ti?',
    cue: 'Answer that you are very well.',
    opts: ['Odlično', 'Tako-tako', 'Doviđenja', 'Laku noć'],
    answer: 'Odlično',
    tip: 'Odlično means "excellent", the very positive answer. Tako-tako means only "so-so", and Doviđenja and Laku noć are farewells, not answers to Kako si?',
  },
  {
    mode: 'kakoSi',
    q: 'Kako si, Ana? — Dobro sam. A kako si ____?',
    en: 'How are you, Ana? — I am fine. And how are you?',
    opts: ['ti', 'Vi', 'ja', 'mi'],
    answer: 'ti',
    tip: 'Kako si goes with ti, the word for one friend: A kako si ti? Vi would need Kako ste, ja means "I", and mi means "we".',
  },
  {
    mode: 'kakoSi',
    q: '____ — Nije loše, hvala.',
    cue: 'Pick the line that gets this answer.',
    opts: ['Kako si?', 'Laku noć!', 'Drago mi je.', 'Doviđenja!'],
    answer: 'Kako si?',
    tip: 'Nije loše ("not bad") answers the question Kako si? Laku noć and Doviđenja are farewells, and Drago mi je is said when you meet someone new.',
  },
  {
    mode: 'kakoSi',
    q: 'Dobro jutro, gospodine Mikulić! ____',
    cue: 'Ask how he is.',
    opts: ['Kako ste?', 'Kako si?', 'A ti?', 'Čao!'],
    answer: 'Kako ste?',
    tip: 'A man you call gospodine is addressed formally: Kako ste? Kako si? and A ti? are for friends, and Čao is a very casual greeting, not a question.',
  },
  {
    mode: 'kakoSi',
    q: 'Kako ste? — Dobro, ____. A Vi?',
    en: 'How are you? — Fine, … And you?',
    opts: ['hvala', 'molim', 'bog', 'sretno'],
    answer: 'hvala',
    tip: 'You thank the person for asking: Dobro, hvala. molim means "please", bog is a greeting, and sretno means "good luck".',
  },
  {
    mode: 'kakoSi',
    q: 'Što znači "Tako-tako"?',
    opts: ['So-so.', 'Very well.', 'Thank you.', 'See you.'],
    answer: 'So-so.',
    tip: 'Tako-tako is the neutral answer, "so-so". "Very well" is Odlično, "Thank you" is Hvala, and "See you" is Vidimo se.',
  },

  // ── rastanak ──────────────────────────────────────────────────────────────
  {
    mode: 'rastanak',
    q: '____, profesorice! Vidimo se sutra.',
    cue: 'You are leaving the classroom after the lesson.',
    opts: ['Doviđenja', 'Dobro jutro', 'Drago mi je', 'Laku noć'],
    answer: 'Doviđenja',
    tip: 'Doviđenja is the polite goodbye. Dobro jutro is a greeting on arrival, Drago mi je is for a first meeting, and Laku noć is only for parting at night or going to bed.',
  },
  {
    mode: 'rastanak',
    q: '____, mama!',
    cue: 'You are going to bed.',
    opts: ['Laku noć', 'Dobra večer', 'Dobro jutro', 'Dobar dan'],
    answer: 'Laku noć',
    tip: 'Laku noć is what you say at bedtime. Dobra večer is the greeting when you arrive in the evening, and Dobro jutro and Dobar dan are greetings for the morning and the day.',
  },
  {
    mode: 'rastanak',
    q: 'Ja sam Petra. — ____, Petra. Ja sam Mariano.',
    en: 'I am Petra. — …, Petra. I am Mariano.',
    opts: ['Drago mi je', 'Laku noć', 'Doviđenja', 'Sretno'],
    answer: 'Drago mi je',
    tip: 'When someone tells you their name you answer Drago mi je, "nice to meet you". Laku noć and Doviđenja are farewells, and Sretno wishes someone luck.',
  },
  {
    mode: 'rastanak',
    q: 'Drago ____ je.',
    en: 'Nice to meet you.',
    opts: ['mi', 'ti', 'se', 'si'],
    answer: 'mi',
    tip: 'The phrase is Drago mi je, word for word "it is pleasant to me", and mi is the "to me". ti would say it is pleasant to you, and se and si do not belong in this phrase.',
  },
  {
    mode: 'rastanak',
    q: 'Vidimo se sutra. ____!',
    cue: 'Two friends part after coffee.',
    opts: ['Bog', 'Dobar dan', 'Dobro jutro', 'Drago mi je'],
    answer: 'Bog',
    tip: 'Bog works for hello and for goodbye between friends. Dobar dan and Dobro jutro are only greetings on arrival, and Drago mi je is for a first meeting.',
  },
  {
    mode: 'rastanak',
    q: 'Što znači "Vidimo se sutra"?',
    opts: ['See you tomorrow.', 'Talk to you tomorrow.', 'Good night.', 'Good luck tomorrow.'],
    answer: 'See you tomorrow.',
    tip: 'Vidimo se is "see you", and sutra is "tomorrow". "Talk to you" is Čujemo se, "Good night" is Laku noć, and "Good luck" is Sretno.',
  },
  {
    mode: 'rastanak',
    q: 'Što znači "Sretno"?',
    opts: ['Good luck!', 'Goodbye!', 'Good night!', 'Nice to meet you!'],
    answer: 'Good luck!',
    tip: 'Sretno is what you wish someone before an exam or a trip: "Good luck!" "Goodbye" is Doviđenja, "Good night" is Laku noć, and "Nice to meet you" is Drago mi je.',
  },
  {
    mode: 'rastanak',
    q: 'Što znači "Čujemo se"?',
    opts: ['Talk to you soon.', 'See you.', 'Nice to meet you.', 'Good evening.'],
    answer: 'Talk to you soon.',
    tip: 'Čujemo se is the goodbye for phone calls and messages: "talk to you soon". "See you" is Vidimo se, "Nice to meet you" is Drago mi je, and "Good evening" is Dobra večer.',
  },
  {
    mode: 'rastanak',
    q: 'Koji pozdrav nije za odlazak?',
    en: 'Which one is not said when leaving?',
    opts: ['Dobar dan', 'Doviđenja', 'Vidimo se', 'Laku noć'],
    answer: 'Dobar dan',
    tip: 'Dobar dan is a greeting for arriving, never for leaving. Doviđenja, Vidimo se and Laku noć are all said when you part.',
  },
];
