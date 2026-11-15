// ─── A1 lessons in class order ───────────────────────────────────────────────
// Owner directive, 2026-11-15: a lesson should run like a class — listen and read
// a short text, answer questions about it, learn the grammar, then practise with
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
// Unit 1 (lessons 1–5) is the pilot.

export const CLASS_A1 = {
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
          explanation: 'Croatian j is always the y of "yes": je is "ye", čaj ends in "ay".',
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
          ['džem', 'jam'],
          ['đak', 'pupil'],
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
        { hr: 'Đak je ovdje.', en: 'The pupil is here.' },
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
          q: 'Which of these words from the text has the SOFT sound ć?',
          options: ['noć', 'čaša', 'džep', 'đak'],
          correct: 0,
          hint: 'The soft one is written with a thin slanted mark, not a small hat.',
          explanation:
            'noć ends in the soft ć. čaša has the hard č; džep and đak are the voiced pair.',
        },
        {
          type: 'tf',
          q: 'Džep je pun.',
          answer: false,
          hint: 'Find džep in the text.',
          explanation:
            'The text says: džep je prazan — the pocket is empty. It is the glass that is full.',
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
        explanation: 'đak (pupil) starts with the soft voiced đ. jak means strong, čak means even.',
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
          en: 'Good morning, Mrs Horvat! How are you?',
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
        { who: 'Marko', hr: 'Doviđenja, gospođo Horvat!', en: 'Goodbye, Mrs Horvat!' },
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
            'He is being polite to an older neighbour',
            'Because it is morning',
            'He is talking to two people',
            'He is in a hurry',
          ],
          correct: 0,
          hint: 'Think about who he is talking to.',
          explanation:
            'Kako ste? is the polite form, for strangers and older people. Mrs Horvat answers a young man with Kako si?',
        },
        {
          type: 'tf',
          q: 'Gospođa Horvat: „Kako ste?”',
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
        groups: ['Casual — with friends', 'Polite — strangers and older people'],
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
      title: 'Ja sam Ana',
      lines: [
        { who: 'Ana', hr: 'Bog! Ja sam Ana. A ti?', en: 'Hi! I am Ana. And you?' },
        {
          who: 'Tom',
          hr: 'Bog, Ana! Ja sam Tom. Ja sam iz Kanade.',
          en: 'Hi, Ana! I am Tom. I am from Canada.',
        },
        {
          who: 'Ana',
          hr: 'Drago mi je, Tom. Ja sam iz Splita.',
          en: 'Nice to meet you, Tom. I am from Split.',
        },
        { who: 'Tom', hr: 'Jesi li ti studentica?', en: 'Are you a student?' },
        {
          who: 'Ana',
          hr: 'Jesam. Ivan je profesor, a Maja i ja smo studentice.',
          en: 'I am. Ivan is a professor, and Maja and I are students.',
        },
        { who: 'Tom', hr: 'Odlično! Vidimo se, Ana!', en: 'Great! See you, Ana!' },
      ],
      questions: [
        {
          type: 'tf',
          q: 'Tom je iz Splita.',
          answer: false,
          hint: "Read Tom's first line again.",
          explanation: 'Tom je iz Kanade. Ana je iz Splita.',
        },
        {
          type: 'tf',
          q: 'Ivan je profesor.',
          answer: true,
          hint: 'Ana talks about Ivan in her last line.',
          explanation: 'Ana says: Ivan je profesor.',
        },
        {
          q: 'Who are the students?',
          options: ['Ana and Maja', 'Tom and Ivan', 'Ivan and Maja', 'Only Ana'],
          correct: 0,
          hint: "Look at the end of Ana's last line.",
          explanation: 'Maja i ja smo studentice — Maja and I are students.',
        },
        {
          q: 'In "Maja i ja smo studentice", which word shows that it means "we are"?',
          options: ['smo', 'ja', 'i', 'studentice'],
          correct: 0,
          hint: 'It is the form of biti.',
          explanation: 'smo is the "we" form of biti: Maja and I — we are.',
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
          { hr: 'ona', group: 0 },
          { hr: 'one', group: 1 },
        ],
        explanation:
          'ja, ti and ona are one person. mi, oni and one are more than one — one is "they" for women only.',
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
        words: ['Oni', 'je', 'ovdje.'],
        wrong: 1,
        answer: 'su',
        hint: 'Which form of biti goes with oni?',
        explanation: 'Oni su ovdje. — they are here. je goes with on, ona and ono.',
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
      title: 'Je li Ana doma?',
      lines: [
        { who: 'Luka', hr: 'Dobar dan! Je li Ana doma?', en: 'Good day! Is Ana at home?' },
        {
          who: 'Gospođa Babić',
          hr: 'Dobar dan. Nije, Ana nije doma. Ana je u Zagrebu.',
          en: 'Good day. No, Ana is not at home. Ana is in Zagreb.',
        },
        { who: 'Luka', hr: 'A Petra? Je li Petra ovdje?', en: 'And Petra? Is Petra here?' },
        {
          who: 'Gospođa Babić',
          hr: 'Jest, Petra je ovdje. Jeste li Vi Marko?',
          en: 'Yes, Petra is here. Are you Marko?',
        },
        { who: 'Luka', hr: 'Nisam, ja sam Luka.', en: 'No, I am Luka.' },
        { who: 'Gospođa Babić', hr: 'Drago mi je, Luka.', en: 'Nice to meet you, Luka.' },
      ],
      questions: [
        {
          type: 'tf',
          q: 'Ana je doma.',
          answer: false,
          hint: "Read Mrs Babić's first answer.",
          explanation: 'Ana nije doma. Ana je u Zagrebu.',
        },
        {
          type: 'tf',
          q: 'Petra je ovdje.',
          answer: true,
          hint: 'Find the answer that starts with "Jest".',
          explanation: 'Jest, Petra je ovdje. — yes, Petra is here.',
        },
        {
          q: 'Mrs Babić asks "Jeste li Vi Marko?" What does Luka answer?',
          options: ['Nisam.', 'Nije.', 'Jesam.', 'Nisu.'],
          correct: 0,
          hint: 'He answers about himself — and he is not Marko.',
          explanation: 'Nisam. — "I am not." Croatian answers with the verb in your own person.',
        },
        {
          q: 'Where is Ana?',
          options: ['In Zagreb', 'At home', 'Here with Petra', 'With Marko'],
          correct: 0,
          hint: 'It is in the same line that says she is not at home.',
          explanation: 'Ana je u Zagrebu.',
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
        q: 'Turn it into a yes/no question.',
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
        q: 'Turn it into a yes/no question.',
        from: 'Marko je ovdje.',
        answer: 'Je li Marko ovdje?',
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
