// ─── A1 lessons in class order ───────────────────────────────────────────────
// Owner directive, 2026-11-15: a lesson should run like a class — listen and read
// a short text, answer questions about it, learn the grammar, then practice with
// MIXED exercise kinds. This file carries that content, per lesson:
//
//   text — the dialogue or text (placed after the intro by withPractice) and its
//          questions.
//   mix  — the practice slide's items, in order. A NUMBER is the index of an item
//          the lesson already has in its practice data (so nothing is restated);
//          an OBJECT is a new exercise (match, sort, order, transform, fix, listen,
//          dictate, tf).
//
// THE RULES THIS CONTENT IS HELD TO:
//   • Only what the lesson, and the lessons before it, have taught. Fixed phrases
//     the lesson itself uses (iz Kanade, u Zagrebu) stay phrases — never a rule.
//   • A match tests meaning or grammar, never something solvable from the letters.
//   • A sort says in plain words what the groups are.
//   • A typed or spoken answer is never shown earlier on the same slide.
//   • Standard Croatian; the greeting is "bog".
//
// Unit 1 (lessons 1–5) was the pilot; Units 2–20 live in a1class/, one file per block.

import { CLASS_A1_U02_05 } from './a1class/units02-05.js';
import { CLASS_A1_U06_09 } from './a1class/units06-09.js';
import { CLASS_A1_U10_13 } from './a1class/units10-13.js';
import { CLASS_A1_U14_17 } from './a1class/units14-17.js';
import { CLASS_A1_U18_20 } from './a1class/units18-20.js';

const CLASS_A1_U01 = {
  // ── Lesson 1 — the alphabet ────────────────────────────────────────────────
  alphabet: {
    text: {
      kind: 'text',
      title: 'Hrvatska',
      lines: [
        { hr: 'Hrvatska je lijepa zemlja.', en: 'Croatia is a beautiful country.' },
        { hr: 'Zagreb je glavni grad.', en: 'Zagreb is the capital city.' },
        { hr: 'Trg je velik i lijep.', en: 'The square is big and beautiful.' },
        { hr: 'Čaj je vruć, a džem je sladak.', en: 'The tea is hot, and the jam is sweet.' },
        { hr: 'Život je ovdje dobar.', en: 'Life is good here.' },
      ],
      questions: [
        {
          q: 'Listen again. Which word in the text has the "ch" of "church"?',
          options: ['čaj', 'džem', 'trg', 'život'],
          correct: 0,
          hint: 'Look for the letter c with a small hat on top.',
          explanation:
            'čaj — č is the hard "ch". džem starts with the "j" of "jam", život with "zh".',
        },
        {
          type: 'tf',
          q: 'Čaj je sladak.',
          answer: false,
          hint: 'Find čaj in the text and read the word after "je".',
          explanation: 'The text says: Čaj je vruć. It is the jam that is sweet: džem je sladak.',
        },
        {
          q: 'How is the letter "j" said in "čaj" and "je"?',
          options: [
            'Like the English y in "yes"',
            'Like the English j in "jam"',
            'It is silent',
            'Like the English h',
          ],
          correct: 0,
          hint: 'Croatian j never sounds like the j in "jam".',
          explanation: 'Croatian j is always the y of "yes": je is "ye", čaj rhymes with "eye".',
        },
      ],
    },
    mix: [
      0,
      {
        type: 'sort',
        q: 'How is the c-letter said in each word: "ts" or "ch"?',
        groups: ['"ts" — plain c', '"ch" — č or ć'],
        items: [
          { hr: 'cipela', group: 0 },
          { hr: 'čaj', group: 1 },
          { hr: 'cvijet', group: 0 },
          { hr: 'kuća', group: 1 },
          { hr: 'crven', group: 0 },
          { hr: 'čovjek', group: 1 },
        ],
        explanation:
          'Plain c is always "ts" (cipela, cvijet, crven) — never "k" or "s". With a mark on top (č, ć) it becomes a "ch" sound.',
      },
      4,
      {
        type: 'listen',
        audio: 'šuma',
        q: 'Which word did you hear?',
        options: ['šuma', 'suma', 'guma', 'šum'],
        correct: 0,
        explanation:
          'šuma (forest) — š is the "sh" of "ship". With a plain s, suma is a different word.',
      },
      5,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['trg', 'square'],
          ['kuća', 'house'],
          ['život', 'life'],
          ['đak', 'student'],
          ['prst', 'finger'],
        ],
        explanation: 'All five are words from this lesson. Say each one aloud as you match it.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is spelled wrong. Tap it.',
        words: ['Caj', 'je', 'vruć.'],
        wrong: 0,
        answer: 'Čaj',
        hint: 'One letter has lost the mark on top of it.',
        explanation: 'Čaj is written with č. Without the mark the letter is read "ts".',
      },
      6,
      {
        type: 'listen',
        audio: 'kuća',
        q: 'Which word did you hear?',
        options: ['kuća', 'kuca', 'kula', 'kuga'],
        correct: 0,
        explanation:
          'kuća (house) has the soft ć. kuca, with a plain c, is said "kutsa" and is a different word.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "The tea is hot."',
        words: ['Čaj', 'je', 'vruć.'],
        explanation: 'Čaj je vruć.',
      },
      {
        type: 'dictate',
        audio: 'Hvala!',
        answer: 'Hvala!',
        hint: 'Five letters, and every one of them is pronounced — including the first.',
        explanation: 'Hvala! — thank you. The h at the start is said.',
      },
      {
        type: 'dictate',
        audio: 'Dobar dan.',
        answer: 'Dobar dan.',
        hint: 'Two words. Write exactly the sounds you hear: Croatian has no silent letters.',
        explanation: 'Dobar dan. — good day.',
      },
      11,
    ],
  },

  // ── Lesson 2 — the special sounds ──────────────────────────────────────────
  'sounds-palatals': {
    text: {
      kind: 'text',
      title: 'Đak i kuća',
      lines: [
        { hr: 'Đak je ovdje.', en: 'The student is here.' },
        { hr: 'Knjiga je nova.', en: 'The book is new.' },
        {
          hr: 'Čaša je puna, a džep je prazan.',
          en: 'The glass is full, and the pocket is empty.',
        },
        {
          hr: 'Ljeto je vruće, a noć je kratka.',
          en: 'The summer is hot, and the night is short.',
        },
        { hr: 'Kuća je velika i lijepa.', en: 'The house is big and beautiful.' },
      ],
      questions: [
        {
          q: 'Think of the Croatian word for each of these. Which one ENDS in the soft ch-sound?',
          options: ['night', 'glass', 'pocket', 'student'],
          correct: 0,
          hint: 'All four words are in the text. Say each Croatian word aloud and listen to its last sound.',
          explanation:
            'noć (night) ends in the soft ć. čaša (glass) starts with the hard č; džep (pocket) starts with dž, the voiced partner of č; đak (student) starts with đ, the voiced partner of ć.',
        },
        {
          type: 'tf',
          q: 'Kuća je nova.',
          answer: false,
          hint: 'Find kuća in the text, and find the word nova.',
          explanation:
            'The text says: Kuća je velika i lijepa. It is the book that is new: Knjiga je nova.',
        },
        {
          q: 'How many letters does the word "knjiga" have?',
          options: ['5', '6', '4', '7'],
          correct: 0,
          hint: 'One pair of signs in this word counts as a single letter.',
          explanation: 'Five: k – nj – i – g – a. nj is one letter and one sound.',
        },
      ],
    },
    mix: [
      0,
      6,
      {
        type: 'sort',
        q: 'Hard pair or soft pair? Sort each word by its marked letter.',
        groups: ['Hard — č or dž', 'Soft — ć or đ'],
        items: [
          { hr: 'čaša', group: 0 },
          { hr: 'kuća', group: 1 },
          { hr: 'džep', group: 0 },
          { hr: 'đak', group: 1 },
          { hr: 'ključ', group: 0 },
          { hr: 'noć', group: 1 },
        ],
        explanation:
          'č and dž are the hard pair (church, jam). ć and đ are the soft pair, said with the tongue flat and forward.',
      },
      {
        type: 'listen',
        audio: 'noć',
        q: 'Which word did you hear?',
        options: ['noć', 'nož', 'nos', 'noj'],
        correct: 0,
        explanation: 'noć (night). nož is a knife, nos is a nose — one letter changes the word.',
      },
      1,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['ključ', 'key'],
          ['noć', 'night'],
          ['džep', 'pocket'],
          ['čaša', 'glass'],
          ['prijatelj', 'friend'],
        ],
        explanation: 'Five words from this lesson, each with one of the special letters.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is spelled wrong. Tap it.',
        words: ['Kuca', 'je', 'velika.'],
        wrong: 0,
        answer: 'Kuća',
        hint: 'Without its mark, this word means "he knocks".',
        explanation: 'Kuća je velika. — the house is big. The mark on ć is part of the word.',
      },
      5,
      {
        type: 'dictate',
        audio: 'Bog!',
        answer: 'Bog!',
        hint: 'The last sound may seem close to a k. Write the letter the word is spelled with.',
        explanation: 'Bog! — written with g, however the end of the word sounds.',
      },
      8,
      {
        type: 'listen',
        audio: 'đak',
        q: 'Which word did you hear?',
        options: ['đak', 'jak', 'čak', 'mak'],
        correct: 0,
        explanation:
          'đak (student) starts with the soft voiced đ. jak means strong, čak means even.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "The night is short."',
        words: ['Noć', 'je', 'kratka.'],
        explanation: 'Noć je kratka.',
      },
      9,
      {
        type: 'dictate',
        audio: 'knjiga',
        answer: 'knjiga',
        hint: 'Five letters. One of them is written with two signs.',
        explanation: 'knjiga (book): k – nj – i – g – a.',
      },
    ],
  },

  // ── Lesson 3 — greetings and farewells ─────────────────────────────────────
  'greetings-farewells': {
    text: {
      kind: 'dialogue',
      title: 'Dobro jutro!',
      lines: [
        {
          who: 'Marko',
          hr: 'Dobro jutro, gospođo Horvat! Kako ste?',
          en: 'Good morning, Mrs. Horvat! How are you?',
        },
        {
          who: 'Gospođa Horvat',
          hr: 'Dobro jutro, Marko. Dobro, hvala. A ti? Kako si?',
          en: 'Good morning, Marko. Fine, thank you. And you? How are you?',
        },
        { who: 'Marko', hr: 'Odlično, hvala!', en: 'Great, thank you!' },
        {
          who: 'Gospođa Horvat',
          hr: 'Doviđenja, Marko. Vidimo se!',
          en: 'Goodbye, Marko. See you!',
        },
        { who: 'Marko', hr: 'Doviđenja, gospođo Horvat!', en: 'Goodbye, Mrs. Horvat!' },
      ],
      questions: [
        {
          q: 'What time of day is it?',
          options: ['Morning', 'Afternoon', 'Evening', 'Night'],
          correct: 0,
          hint: 'Look at the very first two words.',
          explanation: 'Dobro jutro is said in the morning, until about eleven.',
        },
        {
          q: 'Why does Marko ask "Kako ste?" and not "Kako si?"',
          options: [
            'He is being polite to an older neighbor',
            'Because it is morning',
            'He is talking to two people',
            'He is in a hurry',
          ],
          correct: 0,
          hint: 'Think about who he is talking to.',
          explanation: 'Kako ste? is the polite form, for strangers and older people.',
        },
        {
          type: 'tf',
          q: 'Mrs. Horvat says "Kako ste?" to Marko.',
          answer: false,
          hint: 'Read her line again: which form does she use to Marko?',
          explanation:
            'She asks Marko "Kako si?" — the familiar form. It is Marko who says "Kako ste?"',
        },
        {
          q: 'How is Marko?',
          options: ['Great', 'So-so', 'Not bad', 'Tired'],
          correct: 0,
          hint: 'Find his answer to "Kako si?"',
          explanation: 'Odlično! — great, excellent.',
        },
        {
          type: 'type',
          q: 'Now you. It is eight in the morning and you walk into a store. Greet the salesperson: Dobro ____!',
          answer: 'jutro',
          hint: 'It is the same greeting Marko uses at the start of the dialogue.',
          explanation: 'Dobro jutro! — good morning, until about eleven.',
        },
        {
          type: 'type',
          q: 'Now you. An older neighbor asks you: "Kako ste?" You are fine. Answer: ____, hvala.',
          answer: 'Dobro',
          accept: ['Odlično', 'Super'],
          hint: 'The usual short answer that means "fine".',
          explanation: 'Dobro, hvala. — fine, thank you. Then ask back politely: A Vi?',
        },
      ],
    },
    mix: [
      0,
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dobra', 'jutro!'],
        wrong: 0,
        answer: 'Dobro',
        hint: 'The morning greeting does not start the same way as the evening one.',
        explanation: 'Dobro jutro — but Dobar dan and Dobra večer. Learn each greeting as a whole.',
      },
      4,
      {
        type: 'sort',
        q: 'Casual or polite? Put each phrase where it belongs.',
        groups: ['Casual — with friends', 'Polite — safe with anyone'],
        items: [
          { hr: 'Kako si?', group: 0 },
          { hr: 'Kako ste?', group: 1 },
          { hr: 'Bog!', group: 0 },
          { hr: 'Dobar dan!', group: 1 },
          { hr: 'Čao!', group: 0 },
          { hr: 'Doviđenja!', group: 1 },
        ],
        explanation:
          'Bog, Čao and Kako si? are for friends. Dobar dan, Doviđenja and Kako ste? are safe with anyone you do not know well.',
      },
      5,
      {
        type: 'transform',
        q: 'Say it politely, to someone you do not know.',
        from: 'Kako si?',
        answer: 'Kako ste?',
        hint: 'Only the last word changes.',
        explanation: 'Kako ste? — the polite form.',
      },
      8,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['Dobra večer', 'Good evening'],
          ['Laku noć', 'Good night'],
          ['Vidimo se', 'See you'],
          ['Čujemo se', 'Talk soon'],
          ['Hvala', 'Thank you'],
        ],
        explanation:
          'Dobra večer greets someone in the evening; Laku noć is only said when parting for the night.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Nice to meet you."',
        words: ['Drago', 'mi', 'je.'],
        explanation: 'Drago mi je. The little words mi and je always come in this order.',
      },
      {
        type: 'listen',
        audio: 'Kako ste?',
        q: 'Who is being asked?',
        options: ['A teacher', 'A close friend', 'A child', 'A classmate'],
        correct: 0,
        explanation:
          'Kako ste? is the polite form — for a teacher, a stranger, an older person. Friends and children hear Kako si?',
      },
      {
        type: 'listen',
        audio: 'Laku noć!',
        q: 'When would you say this?',
        options: [
          'Going to bed',
          'Arriving in the morning',
          'Meeting someone new',
          'Starting a phone call',
        ],
        correct: 0,
        explanation:
          'Laku noć! — good night, said when parting at night or going to bed. It is never a greeting.',
      },
      {
        type: 'dictate',
        audio: 'Dobra večer!',
        answer: 'Dobra večer!',
        hint: 'Two words. The second one has a letter with a small hat.',
        explanation: 'Dobra večer! — good evening.',
      },
      9,
    ],
  },

  // ── Lesson 4 — pronouns and biti ───────────────────────────────────────────
  'pronouns-biti': {
    text: {
      kind: 'dialogue',
      title: 'Novi student',
      lines: [
        {
          who: 'Ana',
          hr: 'Bog! Ja sam Ana. Ti si novi student?',
          en: 'Hi! I am Ana. You are the new student?',
        },
        {
          who: 'Tom',
          hr: 'Jesam. Ja sam Tom. Iz Kanade sam.',
          en: 'I am. I am Tom. I am from Canada.',
        },
        {
          who: 'Ana',
          hr: 'Drago mi je, Tom. Maja i ja smo studentice, a Ivan je profesor.',
          en: 'Nice to meet you, Tom. Maja and I are students, and Ivan is a professor.',
        },
        { who: 'Tom', hr: 'Jeste li vi iz Zagreba?', en: 'Are you (two) from Zagreb?' },
        {
          who: 'Ana',
          hr: 'Nismo. Mi smo iz Splita, a Ivan je iz Zagreba.',
          en: 'We are not. We are from Split, and Ivan is from Zagreb.',
        },
        { who: 'Tom', hr: 'Jesu li Maja i Ivan ovdje?', en: 'Are Maja and Ivan here?' },
        {
          who: 'Ana',
          hr: 'Jesu, oni su ovdje. A ti, jesi li umoran?',
          en: 'They are, they are here. And you, are you tired?',
        },
        { who: 'Tom', hr: 'Nisam umoran, ali sam gladan!', en: 'I am not tired, but I am hungry!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is Tom from, and where is Ana from?',
          options: [
            'Tom is from Canada, Ana is from Split',
            'Tom is from Split, Ana is from Zagreb',
            'Both are from Zagreb',
            'Tom is from Canada, Ana is from Zagreb',
          ],
          correct: 0,
          hint: "Think of Tom's second line, and of what Ana answers when he asks about Zagreb.",
          explanation: 'Tom is from Canada and Ana is from Split — it is Ivan who is from Zagreb.',
        },
        {
          q: 'Tom says "Iz Kanade sam." Why is there no "ja"?',
          options: [
            'The form sam already shows it is "I"',
            'Tom made a mistake',
            'Because it is a question',
            'Because ja is only used by women',
          ],
          correct: 0,
          hint: 'Each form of biti belongs to one person.',
          explanation:
            'sam can only mean "I am", so ja is usually left out. Notice that sam is not the first word: it never is.',
        },
        {
          type: 'type',
          q: 'Now you. Tom asks YOU: "Jesi li iz Splita?" Say that you are — one word, with the verb: ____.',
          answer: 'Jesam',
          hint: 'Answer with the long form of biti for "I".',
          explanation:
            'Jesam. — "I am." Croatian usually answers with the verb; "Da, jesam" is also fine.',
        },
        {
          type: 'type',
          q: 'Say that you and Tom are here: Tom i ja ____ ovdje.',
          answer: 'smo',
          hint: 'Tom and I together are "we".',
          explanation:
            'Tom i ja smo ovdje. Two people including you take the "we" form, just like Maja i ja smo studentice.',
        },
        {
          type: 'transform',
          q: 'Say it the way Tom does — without "ja".',
          from: 'Ja sam iz Splita.',
          answer: 'Iz Splita sam.',
          hint: 'Drop ja. The short form sam cannot be the first word, so it moves.',
          explanation:
            'Iz Splita sam. With ja gone, sam comes after the first phrase (Iz Splita) — it is never the first word.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each person to its form of biti.',
        pairs: [
          ['ja', 'sam'],
          ['ti', 'si'],
          ['ona', 'je'],
          ['mi', 'smo'],
          ['oni', 'su'],
        ],
        explanation: 'ja sam, ti si, on/ona/ono je, mi smo, vi ste, oni su.',
      },
      4,
      {
        type: 'sort',
        q: 'One person, or more than one?',
        groups: ['One person', 'More than one'],
        items: [
          { hr: 'ja', group: 0 },
          { hr: 'mi', group: 1 },
          { hr: 'ti', group: 0 },
          { hr: 'oni', group: 1 },
          { hr: 'on', group: 0 },
          { hr: 'one', group: 1 },
        ],
        explanation:
          'ja, ti and on are one person. mi, oni and one are more than one — one is "they" for an all-female group.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "I am from Canada."',
        words: ['Ja', 'sam', 'iz', 'Kanade.'],
        explanation: 'Ja sam iz Kanade.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Maja', 'i', 'ja', 'je', 'ovdje.'],
        wrong: 3,
        answer: 'smo',
        hint: 'Maja and I — that is "we". Which form of biti goes with it?',
        explanation:
          'Maja i ja smo ovdje. — Maja and I are here. Two people including me is "we": smo.',
      },
      5,
      {
        type: 'transform',
        q: 'Say it without the pronoun, the way Croatians usually do.',
        from: 'Ja sam student.',
        answer: 'Student sam.',
        hint: 'The short form sam cannot be the first word.',
        explanation: 'Student sam. — sam already shows it is "I", and it moves to second place.',
      },
      10,
      {
        type: 'listen',
        audio: 'Mi smo iz Zagreba.',
        q: 'Who is from Zagreb?',
        options: ['We are', 'I am', 'They are', 'She is'],
        correct: 0,
        explanation: 'Mi smo iz Zagreba. — we are from Zagreb.',
      },
      6,
      {
        type: 'transform',
        q: 'Change "ja" to "mi".',
        from: 'Ja sam ovdje.',
        answer: 'Mi smo ovdje.',
        hint: 'The form of biti changes with the person.',
        explanation: 'Mi smo ovdje. — we are here.',
      },
      9,
      8,
      {
        type: 'dictate',
        audio: 'Ona je liječnica.',
        answer: 'Ona je liječnica.',
        hint: 'Three words. The last one has a letter with a small hat.',
        explanation: 'Ona je liječnica. — she is a doctor.',
      },
    ],
  },

  // ── Lesson 5 — questions and "not" with biti ───────────────────────────────
  'biti-questions-negation': {
    text: {
      kind: 'dialogue',
      title: 'Je li Ana ovdje?',
      lines: [
        { who: 'Profesor', hr: 'Dobar dan! Je li Ana ovdje?', en: 'Good day! Is Ana here?' },
        { who: 'Ana', hr: 'Jesam, ovdje sam.', en: 'I am, I am here.' },
        { who: 'Profesor', hr: 'Jesu li Marko i Petra ovdje?', en: 'Are Marko and Petra here?' },
        {
          who: 'Ana',
          hr: 'Marko je ovdje, ali Petra nije. Petra je doma.',
          en: 'Marko is here, but Petra is not. Petra is at home.',
        },
        { who: 'Profesor', hr: 'A Tom? Je li i Tom doma?', en: 'And Tom? Is Tom at home too?' },
        {
          who: 'Marko',
          hr: 'Nije. Tom nije doma, Tom je u Zagrebu.',
          en: 'No. Tom is not at home, Tom is in Zagreb.',
        },
        {
          who: 'Profesor',
          hr: 'Marko, jeste li ti i Ana iz Zagreba?',
          en: 'Marko, are you and Ana from Zagreb?',
        },
        { who: 'Marko', hr: 'Nismo. Mi smo iz Splita.', en: 'We are not. We are from Split.' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which of the students are in the room?',
          options: ['Ana and Marko', 'Ana and Petra', 'Marko and Tom', 'All four of them'],
          correct: 0,
          hint: 'Two of the four are missing. One of them is at home.',
          explanation:
            'Ana and Marko are there. Petra nije — she is at home — and Tom is in Zagreb.',
        },
        {
          q: 'The professor asks "Je li Ana ovdje?" and Ana answers "Jesam." Why not "Jest"?',
          options: [
            'She is answering about herself, so she uses the "I" form',
            'Jest is only used about men',
            'Jest is not polite',
            'It is a slip — she should say Jest',
          ],
          correct: 0,
          hint: 'The one-word answer is in the person of whoever is answering.',
          explanation:
            'The question is about "she", but Ana answers for herself: Jesam — I am. Someone else would answer: Jest.',
        },
        {
          type: 'type',
          q: 'Now you. The professor asks YOU: "Jeste li Vi iz Zagreba?" You are not. Answer in one word, with the verb: ____.',
          answer: 'Nisam',
          hint: 'Answer about yourself: one word for "I am not".',
          explanation:
            'Nisam. — "I am not." The question is in the Vi form, the answer is in your own person.',
        },
        {
          type: 'type',
          q: 'A classmate asks you: "Je li Petra ovdje?" She is at home. Answer in one word, with the verb: ____.',
          answer: 'Nije',
          hint: 'You are answering about her: one word for "she is not".',
          explanation:
            'Nije. — "She is not." About someone else, the answer uses that person\'s form.',
        },
        {
          type: 'transform',
          q: 'Your turn to ask. Turn this into a yes/no question with li.',
          from: 'Tom je u Zagrebu.',
          answer: 'Je li Tom u Zagrebu?',
          accept: ['Jest li Tom u Zagrebu?'],
          hint: 'With on and ona, the short form stands first, then li.',
          explanation: 'Je li Tom u Zagrebu? — exactly how the professor asks: Je li Ana ovdje?',
        },
      ],
    },
    mix: [
      0,
      {
        type: 'sort',
        q: 'Is the one-word answer a yes or a no?',
        groups: ['Yes — it is so', 'No — it is not'],
        items: [
          { hr: 'Jesam.', group: 0 },
          { hr: 'Nisam.', group: 1 },
          { hr: 'Jest.', group: 0 },
          { hr: 'Nije.', group: 1 },
          { hr: 'Jesu.', group: 0 },
          { hr: 'Nisu.', group: 1 },
        ],
        explanation:
          'The long forms (jesam, jest, jesu) answer yes. The forms with ni- (nisam, nije, nisu) answer no.',
      },
      6,
      {
        type: 'transform',
        q: 'Make the sentence negative.',
        from: 'Ana je doma.',
        answer: 'Ana nije doma.',
        hint: 'The "not" joins the verb and makes one word.',
        explanation: 'Ana nije doma. — je becomes nije.',
      },
      7,
      {
        type: 'match',
        q: 'Match each question to its answer.',
        pairs: [
          ['Jesi li ti Ana?', 'Nisam, ja sam Maja.'],
          ['Je li Marko doma?', 'Nije, Marko je u Splitu.'],
          ['Jeste li vi ovdje?', 'Jesmo.'],
          ['Jesu li oni tamo?', 'Jesu.'],
        ],
        explanation:
          'The answer uses the verb in the person who is answering: Jesi li ti…? — Nisam. Jeste li vi…? — Jesmo.',
      },
      5,
      {
        type: 'transform',
        q: 'Turn it into a yes/no question with li.',
        from: 'Ti si student.',
        answer: 'Jesi li ti student?',
        accept: ['Jesi li student?'],
        hint: 'Start with the long form of biti, then add li.',
        explanation: 'Jesi li ti student? — long form first, li straight after it.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Are they here?"',
        words: ['Jesu', 'li', 'oni', 'ovdje?'],
        explanation: 'Jesu li oni ovdje?',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sam', 'li', 'ja', 'ovdje?'],
        wrong: 0,
        answer: 'Jesam',
        hint: 'A question starts with the long form.',
        explanation: 'Jesam li ja ovdje? — the short form sam cannot start a question.',
      },
      9,
      {
        type: 'transform',
        q: 'Turn it into a yes/no question with li.',
        from: 'Marko je ovdje.',
        answer: 'Je li Marko ovdje?',
        accept: ['Jest li Marko ovdje?'],
        hint: 'This is the one person where the short form stands before li.',
        explanation: 'Je li Marko ovdje? — with on, ona and ono the question is Je li…?',
      },
      {
        type: 'listen',
        audio: 'Nismo doma.',
        q: 'What did you hear?',
        options: [
          'We are not at home.',
          'I am not at home.',
          'They are not at home.',
          'He is not at home.',
        ],
        correct: 0,
        explanation: 'Nismo doma. — nismo is the "we" form: we are not at home.',
      },
      10,
      {
        type: 'dictate',
        audio: 'Jeste li Vi profesor?',
        answer: 'Jeste li Vi profesor?',
        hint: 'Four words: the long form of biti comes first.',
        explanation: 'Jeste li Vi profesor? — the polite question, with capital Vi.',
      },
    ],
  },
};

/** Every A1 lesson in class order: Unit 1 above, the rest in a1class/ (one file per block). */
export const CLASS_A1 = {
  ...CLASS_A1_U01,
  ...CLASS_A1_U02_05,
  ...CLASS_A1_U06_09,
  ...CLASS_A1_U10_13,
  ...CLASS_A1_U14_17,
  ...CLASS_A1_U18_20,
};
