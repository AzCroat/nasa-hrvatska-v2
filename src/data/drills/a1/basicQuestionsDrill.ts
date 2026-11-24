// src/data/drills/a1/basicQuestionsDrill.ts
//
// A1 BASIC QUESTIONS — the drill for the `basic-questions` lesson (A1, 9).
//
// Follows Hrvatski za početnike 1, pages 10–12, 14 and 16–17: "Kako si?" and "Tko ste vi?
// Tko su oni?", the classroom dialogues ("Jesi li ti Marija?" — "Da. Jesam." · "Jeste li
// Vi lektorica Ana Majić?"), the question table (Jesam li ja…? Jesi li ti…? Je li on…?),
// "Što je ovo/to/ono?", the rows "Je li Jerko policajac? — Ne, on nije policajac, nego
// poštar." and the taxi dialogue ("gdje je hotel Dubrovnik?" · "Vi ste stranac?"). The
// book answers "Je li on student?" with "Da. Jest."; the lesson teaches the short answers
// Jesam / Nisam / Nije, so those are used. Kada, Zašto, Koliko, Odakle and Koji are not
// taught on these pages; they come from the lesson. Only biti is used.
//
// Three modes:
//   upitne   — choosing the question word
//   jeLi     — yes/no questions with li
//   odgovori — short answers, and the answer that fits the question

import type { ModeDrillItem } from '../../../components/practice/ModeDrill';

export const BASIC_QUESTIONS_MODE_LABELS: Record<string, string> = {
  upitne: '❓ Tko? Što? Gdje?',
  jeLi: '🔁 Jesi li…?',
  odgovori: '💬 Jesam. Nisam.',
};

export const BASIC_QUESTIONS_DRILL_DATA: ModeDrillItem[] = [
  // ── upitne ────────────────────────────────────────────────────────────────
  {
    mode: 'upitne',
    q: '____ je ovo? — Ovo je poklon.',
    opts: ['Što', 'Tko', 'Gdje', 'Kada'],
    answer: 'Što',
    tip: 'The answer names a thing (poklon, a present), so the question word is Što, "what". Tko asks about a person, Gdje asks where, and Kada asks when.',
  },
  {
    mode: 'upitne',
    q: '____ je ona? — Ona je Petra.',
    opts: ['Tko', 'Što', 'Gdje', 'Kada'],
    answer: 'Tko',
    tip: 'The answer names a person, so the question word is Tko, "who". Što asks about a thing, Gdje asks where, and Kada asks when.',
  },
  {
    mode: 'upitne',
    q: '____ je hotel Dubrovnik? — Hotel je blizu.',
    opts: ['Gdje', 'Tko', 'Kada', 'Zašto'],
    answer: 'Gdje',
    tip: 'The answer gives a place (blizu, nearby), so the question word is Gdje, "where". Tko asks about a person, Kada asks when, and Zašto asks why.',
  },
  {
    mode: 'upitne',
    q: '____ si? — Hvala, dobro sam.',
    opts: ['Kako', 'Tko', 'Odakle', 'Koliko'],
    answer: 'Kako',
    tip: 'dobro sam ("I am fine") answers Kako si?, "how are you?" Tko asks who you are, Odakle asks where you are from, and Koliko asks how much.',
  },
  {
    mode: 'upitne',
    q: '____ je konferencija? — Sutra.',
    opts: ['Kada', 'Gdje', 'Tko', 'Što'],
    answer: 'Kada',
    tip: 'Sutra ("tomorrow") is a time, so the question word is Kada, "when". Gdje asks for a place, Tko for a person, and Što for a thing.',
  },
  {
    mode: 'upitne',
    q: '____ ste? — Iz Argentine.',
    opts: ['Odakle', 'Gdje', 'Kada', 'Tko'],
    answer: 'Odakle',
    tip: 'Iz Argentine ("from Argentina") answers Odakle, "where from". Gdje asks where someone is now, Kada asks when, and Tko asks who.',
  },
  {
    mode: 'upitne',
    q: '____ si ovdje? — Ja sam student.',
    opts: ['Zašto', 'Što', 'Kada', 'Koliko'],
    answer: 'Zašto',
    tip: 'The answer gives a reason for being here, so the question word is Zašto, "why". Što asks about a thing, Kada asks when, and Koliko asks how much.',
  },
  {
    mode: 'upitne',
    q: '____ je dva i tri? — Pet.',
    opts: ['Koliko', 'Kako', 'Koji', 'Tko'],
    answer: 'Koliko',
    tip: 'The answer is a number, so the question word is Koliko, "how much". Kako asks how, Koji asks which one, and Tko asks about a person.',
  },
  {
    mode: 'upitne',
    q: '____ je ovo hotel? — Ovo je hotel Dubrovnik.',
    opts: ['Koji', 'Koja', 'Koje', 'Tko'],
    answer: 'Koji',
    tip: 'The question asks "which hotel", and hotel is masculine, so the form is Koji. Koja is for feminine nouns, Koje for neuter nouns, and Tko asks about a person, not a hotel.',
  },

  // ── jeLi ──────────────────────────────────────────────────────────────────
  {
    mode: 'jeLi',
    q: '____ li ti Marija? — Da, ja sam Marija.',
    opts: ['Jesi', 'Je', 'Jeste', 'Jesu'],
    answer: 'Jesi',
    tip: 'A question to ti opens with the full form Jesi: Jesi li ti Marija? Je is for on or ona, Jeste is for Vi or a group, and Jesu is for oni.',
  },
  {
    mode: 'jeLi',
    q: '____ li Vi lektorica? — Da, ja sam lektorica.',
    opts: ['Jeste', 'Jesi', 'Je', 'Jesmo'],
    answer: 'Jeste',
    tip: 'The polite Vi takes Jeste: Jeste li Vi lektorica? Jesi is for a friend (ti), Je is for on or ona, and Jesmo is for mi.',
  },
  {
    mode: 'jeLi',
    q: '____ li Jerko poštar? — Da.',
    opts: ['Je', 'Jesi', 'Jesu', 'Jeste'],
    answer: 'Je',
    tip: 'Jerko is one person you are talking about (on), so the question opens with Je li. Jesi is for ti, Jesu is for several people, and Jeste is for Vi or a group.',
  },
  {
    mode: 'jeLi',
    q: '____ li oni profesori? — Ne, oni su studenti.',
    opts: ['Jesu', 'Je', 'Jeste', 'Jesmo'],
    answer: 'Jesu',
    tip: 'oni takes the full form Jesu: Jesu li oni profesori? Je is for one person, Jeste is for Vi or a group you speak to, and Jesmo is for mi.',
  },
  {
    mode: 'jeLi',
    q: '____ li mi prijatelji? — Da, naravno!',
    opts: ['Jesmo', 'Jeste', 'Jesu', 'Jesi'],
    answer: 'Jesmo',
    tip: 'mi takes the full form Jesmo: Jesmo li mi prijatelji? Jeste is for vi, Jesu is for oni, and Jesi is for ti.',
  },
  {
    mode: 'jeLi',
    q: 'Jesi ____ ti studentica?',
    opts: ['li', 'je', 'si', 'da'],
    answer: 'li',
    tip: 'A yes/no question puts the little word li straight after the verb: Jesi li…? je and si are forms of biti, which the sentence already has in Jesi, and da means "yes".',
  },
  {
    mode: 'jeLi',
    lead: 'Ti si Hrvat.',
    q: '____ Hrvat?',
    cue: 'Turn the sentence into a yes/no question.',
    opts: ['Jesi li', 'Si li', 'Li si', 'Jeste li'],
    answer: 'Jesi li',
    tip: 'The question uses the full form first and li right after it: Jesi li Hrvat? The short form si cannot open a question, li can never come first, and Jeste li would be the polite Vi, not ti.',
  },
  {
    mode: 'jeLi',
    q: 'Koje je pitanje točno?',
    en: 'Which question is correct?',
    opts: [
      'Je li Ana studentica?',
      'Li je Ana studentica?',
      'Ana li je studentica?',
      'Je Ana li studentica?',
    ],
    answer: 'Je li Ana studentica?',
    tip: 'The verb comes first and li follows it at once: Je li Ana studentica? li can never open the sentence, and it cannot stand after the name or later in the sentence either.',
  },
  {
    mode: 'jeLi',
    q: 'Što znači "Jeste li Vi stranac?"',
    opts: [
      'Are you a foreigner?',
      'Is he a foreigner?',
      'You are not a foreigner.',
      'Who is the foreigner?',
    ],
    answer: 'Are you a foreigner?',
    tip: 'Jeste li Vi…? is the polite "Are you…?" "Is he" would be Je li on, a negative would need niste, and "who" would need Tko.',
  },

  // ── odgovori ──────────────────────────────────────────────────────────────
  {
    mode: 'odgovori',
    q: 'Jesi li ti Petra? — ____. Drago mi je.',
    opts: ['Jesam', 'Jesi', 'Je', 'Jesmo'],
    answer: 'Jesam',
    tip: 'You answer about yourself with Jesam, "I am". Jesi would say "you are", Je is "he or she is", and Jesmo is "we are".',
  },
  {
    mode: 'odgovori',
    q: 'Je li Ana pjevačica? — Ne, ____.',
    opts: ['nije', 'nisam', 'nisu', 'nisi'],
    answer: 'nije',
    tip: 'The question is about Ana (ona), so the short answer is nije, "she is not". nisam is "I am not", nisu is "they are not", and nisi is "you are not".',
  },
  {
    mode: 'odgovori',
    q: 'Jeste li vi studenti? — Da, ____.',
    cue: 'Two students answer together.',
    opts: ['jesmo', 'jeste', 'jesam', 'jesu'],
    answer: 'jesmo',
    tip: 'Two people answering for themselves say jesmo, "we are". jeste repeats the question form, jesam is only one person, and jesu is about other people.',
  },
  {
    mode: 'odgovori',
    q: 'Jesu li Hrvoje i Goran profesori? — Ne, ____.',
    opts: ['nisu', 'nismo', 'niste', 'nije'],
    answer: 'nisu',
    tip: 'Hrvoje and Goran are oni, so the short answer is nisu, "they are not". nismo is "we are not", niste is "you are not", and nije is for one person only.',
  },
  {
    mode: 'odgovori',
    q: 'Jesi li ti Hrvat? — Ne, ____. Ja sam Brazilac.',
    opts: ['nisam', 'nisi', 'nije', 'nismo'],
    answer: 'nisam',
    tip: 'You deny something about yourself with nisam, "I am not". nisi is "you are not", nije is "he or she is not", and nismo is "we are not".',
  },
  {
    mode: 'odgovori',
    q: 'Tko je to? — ____',
    opts: ['To je Marija.', 'To je knjiga.', 'Dobro, hvala.', 'Sutra.'],
    answer: 'To je Marija.',
    tip: 'Tko asks about a person, so the answer names one: To je Marija. "To je knjiga" answers Što, "Dobro, hvala" answers Kako si, and Sutra answers Kada.',
  },
  {
    mode: 'odgovori',
    q: 'Gdje je taksi? — ____',
    opts: ['Tu, blizu.', 'Sutra.', 'Jesam.', 'Iz Kanade.'],
    answer: 'Tu, blizu.',
    tip: 'Gdje asks for a place, and a short answer is enough: Tu, blizu. Sutra answers Kada, Jesam answers a Jesi li question, and Iz Kanade answers Odakle.',
  },
  {
    mode: 'odgovori',
    q: 'Kako se zoveš? — ____',
    opts: ['Anita. A ti?', 'Dobro, hvala.', 'Iz Zagreba.', 'Jesam.'],
    answer: 'Anita. A ti?',
    tip: 'Kako se zoveš? asks for your name, so the answer is a name. "Dobro, hvala" answers Kako si, Iz Zagreba answers Odakle si, and Jesam answers a Jesi li question.',
  },
  {
    mode: 'odgovori',
    q: 'Što znači "Odakle si?"',
    opts: ['Where are you from?', 'Where are you?', 'Who are you?', 'How are you?'],
    answer: 'Where are you from?',
    tip: 'Odakle means "from where". "Where are you?" is Gdje si?, "Who are you?" is Tko si?, and "How are you?" is Kako si?',
  },
];
