// ─── A1 lessons in class order — Units 14–17 ─────────────────────────────────
// Same shape and same rules as lessonClassA1.js (the Unit 1 pilot):
//
//   text — the dialogue or text the learner listens to, reads, and answers
//          questions about, BEFORE the lesson's explanation.
//   mix  — the practice items in order: a NUMBER keeps an item the lesson
//          already has in its practice data; an OBJECT is a new exercise.
//
// Only what the lesson and the lessons before it have taught. Reflexive verbs
// from `reflexive-verbs` on, the instrumental from `instrumental-intro` on, the
// genitive from `genitive-intro` on. The greeting is "Bog".

export const CLASS_A1_U14_17 = {
  // ══ Unit 14 ═══════════════════════════════════════════════════════════

  // ── giving-and-sending ──
  'giving-and-sending': {
    text: {
      kind: 'dialogue',
      title: 'Poklon za baku',
      lines: [
        {
          who: 'Ivan',
          hr: 'Sutra je bakin rođendan. Što ćeš joj dati?',
          en: "Tomorrow is grandma's birthday. What will you give her?",
        },
        { who: 'Maja', hr: 'Kupila sam joj knjigu. A ti?', en: 'I bought her a book. And you?' },
        {
          who: 'Ivan',
          hr: 'Ja joj šaljem cvijeće. Mama mi je dala novac za poklon.',
          en: 'I am sending her flowers. Mom gave me money for the present.',
        },
        {
          who: 'Maja',
          hr: 'Lijepo! Jesi li joj poslao i razglednicu iz Splita?',
          en: 'Nice! Did you also send her a postcard from Split?',
        },
        {
          who: 'Ivan',
          hr: 'Jesam. Poslao sam joj je jučer.',
          en: 'I did. I sent it to her yesterday.',
        },
        {
          who: 'Maja',
          hr: 'A knjiga? Hoćeš li je vidjeti? Pokazat ću ti je.',
          en: 'And the book? Do you want to see it? I will show it to you.',
        },
        {
          who: 'Ivan',
          hr: 'Hoću, hvala. Sutra ćemo joj je dati zajedno.',
          en: 'I do, thanks. Tomorrow we will give it to her together.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does grandma get, and from whom?',
          options: [
            'A book from Maja, flowers and a postcard from Ivan',
            'Flowers from Maja, a book from Ivan',
            'Money from Maja, a postcard from Ivan',
            'A book and flowers from Maja, nothing from Ivan',
          ],
          correct: 0,
          hint: 'Maja bought one thing. Ivan is sending one thing now and sent another one yesterday.',
          explanation:
            'Maja bought a book. Ivan is sending flowers, and he sent a postcard from Split yesterday.',
        },
        {
          q: 'Ivan says "Poslao sam joj je jučer." What do the two short words after "sam" stand for?',
          options: [
            'joj = to grandma, je = the postcard',
            'joj = the postcard, je = to grandma',
            'joj = to Maja, je = the book',
            'joj = to grandma, je = "is"',
          ],
          correct: 0,
          hint: 'The receiver comes first, the thing comes second. Razglednica is a feminine word.',
          explanation:
            'joj is the receiver (to her — to grandma), je is the thing (it — the postcard). The receiver always stands before the thing.',
        },
        {
          type: 'type',
          q: 'Now you. A friend asks YOU: "Hoćeš li tati dati ključ?" You will. Answer: Hoću, dat ću ____ ga.',
          answer: 'mu',
          hint: 'You need the short word for "to him".',
          explanation:
            'Dat ću mu ga. — I will give it to him. First ću, then the receiver, then the thing.',
        },
        {
          type: 'type',
          q: 'Now you. Say that you are buying your brother a book: Kupujem ____ knjigu. (brat)',
          answer: 'bratu',
          hint: 'Your brother receives the book. A masculine receiver ends in -u.',
          explanation: 'Kupujem bratu knjigu. — the receiver is in the dative: brat → bratu.',
        },
        {
          type: 'transform',
          q: 'Say it with two short words instead of "Ani" and "sliku".',
          from: 'Pokazat ću Ani sliku.',
          answer: 'Pokazat ću joj je.',
          accept: ['Pokazat ću joj ju.'],
          hint: 'Ana becomes "to her"; slika is feminine, so it becomes the feminine "it". The receiver comes first.',
          explanation:
            'Pokazat ću joj je. — exactly like Maja\'s "Pokazat ću ti je": first ću, then the receiver, then the thing.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Dajem baki knjigu.', 'I am giving grandma a book.'],
          ['Dala sam baki knjigu.', 'I gave grandma a book.'],
          ['Dat ću baki knjigu.', 'I will give grandma a book.'],
          ['Baka mi je dala knjigu.', 'Grandma gave me a book.'],
        ],
        explanation:
          'dajem is now, dala sam is the past, dat ću is the future. In the last sentence grandma is the giver, and mi — to me — is the receiver.',
      },
      8,
      {
        type: 'sort',
        q: 'In a sentence like "I am sending X to Y": is the word the person who receives, or the thing that is sent?',
        groups: ['The receiver', 'The thing'],
        items: [
          { hr: 'baki', group: 0 },
          { hr: 'poruku', group: 1 },
          { hr: 'tati', group: 0 },
          { hr: 'sliku', group: 1 },
          { hr: 'profesoru', group: 0 },
          { hr: 'istinu', group: 1 },
          { hr: 'Ani', group: 0 },
          { hr: 'razglednicu', group: 1 },
        ],
        explanation:
          'The receiver is in the dative: -i for baka, tata and Ana, -u for profesor. The thing is in the accusative: a feminine word in -a takes -u.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dajem', 'mamu', 'cvijeće.'],
        wrong: 1,
        answer: 'mami',
        hint: 'Mom is not the thing being given — she receives the flowers.',
        explanation:
          'Dajem mami cvijeće. The receiver is in the dative, the thing in the accusative.',
      },
      10,
      {
        type: 'listen',
        audio: 'Komu šalješ poruku?',
        q: 'What is the speaker asking?',
        options: [
          'Who are you sending a message to?',
          'Who is sending you a message?',
          'What are you sending?',
          'When are you sending the message?',
        ],
        correct: 0,
        explanation: 'Komu šalješ poruku? — komu asks for the receiver: to whom?',
      },
      11,
      12,
      5,
      {
        type: 'order',
        q: 'Put the words in order: "She sent it to me."',
        words: ['Poslala', 'mi', 'ga', 'je.'],
        explanation:
          'Poslala mi ga je. The receiver (mi) stands before the thing (ga), and je — "she has" — comes last of all.',
      },
      {
        type: 'tf',
        q: '"Dao sam ga mu." — the two short words are in the right order.',
        answer: false,
        hint: 'Which comes first: the one who receives, or the thing?',
        explanation: 'The receiver comes first: Dao sam mu ga.',
      },
      {
        type: 'transform',
        q: 'Say it in the future.',
        from: 'Kažem ti istinu.',
        answer: 'Reći ću ti istinu.',
        accept: ['Ja ću ti reći istinu.', 'Kazat ću ti istinu.', 'Ja ću ti kazati istinu.'],
        hint: 'The future uses the other verb of the pair kazati / … — and a verb in -ći keeps its ending before ću.',
        explanation:
          'Reći ću ti istinu. — kazati gives the present (kažem); reći gives the future.',
      },
      4,
      {
        type: 'transform',
        q: 'Say it with two short words instead of "sestri" and "torbu".',
        from: 'Kupila sam sestri torbu.',
        answer: 'Kupila sam joj je.',
        accept: ['Kupila sam joj ju.'],
        hint: 'Sister becomes "to her"; torba is feminine, so it becomes the feminine "it". The receiver comes first.',
        explanation: 'Kupila sam joj je. — sam, then the receiver, then the thing.',
      },
      {
        type: 'dictate',
        audio: 'Šaljem mu poruku.',
        answer: 'Šaljem mu poruku.',
        hint: 'Three words. The short word in the middle means "to him".',
        explanation: 'Šaljem mu poruku. — I am sending him a message.',
      },
    ],
  },

  // ── verbs-with-dative ──
  'verbs-with-dative': {
    text: {
      kind: 'dialogue',
      title: 'U dućanu',
      lines: [
        {
          who: 'Prodavačica',
          hr: 'Dobar dan! Mogu li vam pomoći?',
          en: 'Good day! Can I help you?',
        },
        {
          who: 'Ana',
          hr: 'Dobar dan. Da, molim. Sviđaju mi se ove crne cipele.',
          en: 'Good day. Yes, please. I like these black shoes.',
        },
        {
          who: 'Prodavačica',
          hr: 'Izvolite. Sviđaju li vam se i ove smeđe?',
          en: 'Here you are. Do you like these brown ones too?',
        },
        {
          who: 'Ana',
          hr: 'Ne, smeđa boja mi se ne sviđa. Iva, sviđaju li ti se crne?',
          en: 'No, I do not like the color brown. Iva, do you like the black ones?',
        },
        {
          who: 'Iva',
          hr: 'Sviđaju mi se. Lijepe su i nisu skupe.',
          en: 'I like them. They are pretty and they are not expensive.',
        },
        {
          who: 'Ana',
          hr: 'Vjerujem ti. Ti mi uvijek pomažeš u dućanu.',
          en: 'I trust you. You always help me in the store.',
        },
        { who: 'Prodavačica', hr: 'Odgovara li vam ovaj broj?', en: 'Does this size suit you?' },
        { who: 'Ana', hr: 'Odgovara mi, hvala!', en: 'It suits me, thank you!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which shoes does Ana like, and what does Iva think of them?',
          options: [
            'Ana likes the black ones; Iva likes them too and says they are not expensive',
            'Ana likes the brown ones; Iva says they are expensive',
            'Ana likes the black ones; Iva prefers the brown ones',
            'Ana likes both pairs; Iva does not like either',
          ],
          correct: 0,
          hint: 'Ana says no to one color. Iva says two good things about the other pair.',
          explanation:
            'Ana likes the black shoes and not the brown ones. Iva likes them too: they are pretty and not expensive.',
        },
        {
          q: 'Ana says "Sviđaju mi se ove crne cipele" — the verb ends in -ju. Why?',
          options: [
            'The shoes are the subject, and there are several of them',
            'Because Ana is talking to two people',
            'Because Ana is being polite',
            'Because the verb always ends in -ju after "mi"',
          ],
          correct: 0,
          hint: 'In this kind of sentence the thing liked does the work of the subject.',
          explanation:
            'The sentence says "these shoes are pleasing to me". The shoes are the subject, and they are plural, so the verb is plural too.',
        },
        {
          type: 'type',
          q: 'Now you. You are in a store with a friend. Ask her whether she likes these shoes: Sviđaju li ____ se ove cipele?',
          answer: 'ti',
          hint: 'The short word for "to you" — for a friend.',
          explanation: 'Sviđaju li ti se ove cipele? — li, then ti, then se, always in that order.',
        },
        {
          type: 'type',
          q: 'Now you. Your neighbor is carrying a lot. Say that you are helping him: Pomažem ____. (susjed)',
          answer: 'susjedu',
          hint: 'The person you help receives the help — the same ending as "bratu".',
          explanation: 'Pomažem susjedu. — after pomagati the person is in the dative.',
        },
        {
          type: 'transform',
          q: 'Now it is several songs that you like. Change the sentence.',
          from: 'Sviđa mi se ova pjesma.',
          answer: 'Sviđaju mi se ove pjesme.',
          hint: 'Three words change: the verb, "this" and the noun all become plural.',
          explanation:
            "Sviđaju mi se ove pjesme. — the songs are the subject, so the verb is plural, just like Ana's shoes.",
        },
      ],
    },
    mix: [
      11,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Pomažem mu.', 'I help him.'],
          ['Vjeruješ joj.', 'You trust her.'],
          ['Odgovaram im.', 'I answer them.'],
          ['Sviđa mi se.', 'I like it.'],
          ['Odgovara nam.', 'It suits us.'],
        ],
        explanation:
          'With all of these verbs the person is in the dative: mu, joj, im, mi, nam. Odgovarati means both to answer and to suit.',
      },
      8,
      {
        type: 'sort',
        q: 'One thing or several? Which beginning does each need?',
        groups: ['Sviđa mi se …', 'Sviđaju mi se …'],
        items: [
          { hr: 'ovaj grad', group: 0 },
          { hr: 'ove cipele', group: 1 },
          { hr: 'tvoja pjesma', group: 0 },
          { hr: 'hrvatski filmovi', group: 1 },
          { hr: 'more', group: 0 },
          { hr: 'tvoje knjige', group: 1 },
        ],
        explanation:
          'The thing liked is the subject. One thing takes sviđa; several things take sviđaju.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'pomaže', 'sestru', 'u', 'kuhinji.'],
        wrong: 2,
        answer: 'sestri',
        hint: 'Who receives the help? After this verb the person is not a plain object.',
        explanation: 'Ana pomaže sestri u kuhinji. — the person helped is in the dative.',
      },
      10,
      {
        type: 'listen',
        audio: 'Ivanu se ne sviđa kava.',
        q: 'What do you learn about Ivan?',
        options: [
          'He does not like coffee',
          'He likes coffee',
          'He is making coffee',
          'He has no coffee',
        ],
        correct: 0,
        explanation:
          'Ivanu se ne sviđa kava. — Ivanu is the dative: coffee is not pleasing to Ivan.',
      },
      6,
      {
        type: 'transform',
        q: 'Say it with a short word instead of the name.',
        from: 'Vjerujem Marku.',
        answer: 'Vjerujem mu.',
        hint: 'You need the short word for "to him".',
        explanation: 'Vjerujem mu. — I trust him.',
      },
      {
        type: 'tf',
        q: 'In "Mami se sviđa more", it is mom who likes the sea.',
        answer: true,
        hint: 'Which word is in the dative?',
        explanation:
          'True. Mami is the dative — the person who likes. More is the subject: the sea is pleasing to mom.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "Do you like Zagreb?"',
        words: ['Sviđa', 'li', 'ti', 'se', 'Zagreb?'],
        explanation: 'Sviđa li ti se Zagreb? — the small words line up: li, then ti, then se.',
      },
      7,
      {
        type: 'transform',
        q: 'Make the sentence negative.',
        from: 'Sviđaju mi se ove cipele.',
        answer: 'Ne sviđaju mi se ove cipele.',
        accept: ['Ove cipele mi se ne sviđaju.', 'Ove mi se cipele ne sviđaju.'],
        hint: 'Ne goes right in front of the verb. The small words keep their order.',
        explanation:
          'Ne sviđaju mi se ove cipele. — ne and the verb together count as the first element.',
      },
      {
        type: 'dictate',
        audio: 'Sviđaju mi se tvoje cipele.',
        answer: 'Sviđaju mi se tvoje cipele.',
        hint: 'Five words. Two small words follow the verb.',
        explanation: 'Sviđaju mi se tvoje cipele. — I like your shoes.',
      },
    ],
  },

  // ── postcards-wishes ──
  'postcards-wishes': {
    text: {
      kind: 'text',
      title: 'Razglednica iz Splita',
      lines: [
        { hr: 'Draga mama,', en: 'Dear Mom,' },
        {
          hr: 'pozdrav iz Splita! Ovdje je prekrasno i jako toplo.',
          en: 'greetings from Split! It is beautiful and very warm here.',
        },
        {
          hr: 'Jučer smo bili na otoku, a sutra idemo u Dubrovnik.',
          en: 'Yesterday we were on an island, and tomorrow we are going to Dubrovnik.',
        },
        { hr: 'Marku se jako sviđa more.', en: 'Marko likes the sea very much.' },
        {
          hr: 'Sutra je tvoj rođendan. Sretan rođendan i sve najbolje!',
          en: 'Tomorrow is your birthday. Happy birthday and all the best!',
        },
        {
          hr: 'Tata sutra putuje u Zagreb. Želim mu sretan put!',
          en: 'Dad is traveling to Zagreb tomorrow. I wish him a good journey!',
        },
        { hr: 'Puno pozdrava, tvoja Ana', en: 'Lots of love, your Ana' },
      ],
      questions: [
        {
          q: 'Without looking back at the postcard: who is writing to whom, and what happens tomorrow?',
          options: [
            'Ana writes to her mom; tomorrow is mom’s birthday and they go to Dubrovnik',
            'Ana writes to her dad; tomorrow is his birthday',
            'Marko writes to his mom; tomorrow they go to an island',
            'Ana writes to her mom; tomorrow is Christmas',
          ],
          correct: 0,
          hint: 'Look at how the card opens, how it is signed, and what is wished.',
          explanation:
            'Ana writes to her mom from Split. Tomorrow is mom’s birthday, and Ana and Marko are going to Dubrovnik.',
        },
        {
          q: 'Ana opens with "Draga mama" and signs "tvoja Ana". What would Marko write to his dad?',
          options: [
            'Dragi tata, … tvoj Marko',
            'Draga tata, … tvoja Marko',
            'Dragi tata, … tvoja Marko',
            'Draga tata, … tvoj Marko',
          ],
          correct: 0,
          hint: 'Both words follow the person, not the last letter of the word: dad is a man, and so is Marko.',
          explanation:
            'Dragi tata — tata ends in -a but is a man. And a man signs tvoj Marko; a woman signs tvoja Ana.',
        },
        {
          type: 'type',
          q: 'Now you. It is 31 December. Wish your neighbors a happy New Year: ____ Nova godina!',
          answer: 'Sretna',
          hint: 'It is the word Ana uses for the birthday — but godina is feminine, so its ending changes.',
          explanation: 'Sretna Nova godina! — sretan agrees with the occasion: godina is feminine.',
        },
        {
          type: 'type',
          q: 'Now you. Ana writes about her dad: "Želim mu sretan put!" This time it is your MOM who is traveling. Write: Želim ____ sretan put!',
          answer: 'joj',
          hint: 'Ana uses the short word for "to him". You need the short word for "to her".',
          explanation: 'Želim joj sretan put! — mu is "to him", joj is "to her".',
        },
        {
          type: 'transform',
          q: 'Change the occasion from Christmas to the New Year.',
          from: 'Želim ti sretan Božić.',
          answer: 'Želim ti sretnu Novu godinu.',
          hint: 'The wish is the object here, and Nova godina is feminine: all three words take the object ending.',
          explanation:
            'Želim ti sretnu Novu godinu. — after želim the wish is in the accusative: sretna Nova godina → sretnu Novu godinu.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['Sretno!', 'Good luck!'],
          ['Sve najbolje!', 'All the best!'],
          ['Čestitam!', 'Congratulations!'],
          ['Puno pozdrava!', 'Lots of love (many greetings)'],
          ['Vidimo se uskoro!', 'See you soon!'],
        ],
        explanation:
          'Sretno! on its own wishes luck. Puno pozdrava! closes a postcard. Čestitam! is for an achievement or a happy event.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Draga', 'tata,', 'sretan', 'rođendan!'],
        wrong: 0,
        answer: 'Dragi',
        hint: 'The word ends in -a, but who is he?',
        explanation: 'Dragi tata — your dad is a man, so the word for "dear" is the masculine one.',
      },
      {
        type: 'sort',
        q: 'You are opening a postcard. Which "dear" does each person need?',
        groups: ['Dragi …', 'Draga …'],
        items: [
          { hr: 'mama', group: 1 },
          { hr: 'tata', group: 0 },
          { hr: 'Ana', group: 1 },
          { hr: 'Marko', group: 0 },
          { hr: 'baka', group: 1 },
          { hr: 'djed', group: 0 },
        ],
        explanation: 'Dragi for a man (tata, Marko, djed), draga for a woman (mama, Ana, baka).',
      },
      9,
      1,
      {
        type: 'listen',
        audio: 'Sretno sutra!',
        q: 'What is the speaker doing?',
        options: [
          'Wishing someone luck for tomorrow',
          'Wishing someone a happy birthday',
          'Saying goodbye until tomorrow',
          'Congratulating someone on yesterday',
        ],
        correct: 0,
        explanation: 'Sretno sutra! — good luck tomorrow, for an exam, a match, an interview.',
      },
      {
        type: 'tf',
        q: 'On a friend’s birthday you can say "Sretno rođendan!"',
        answer: false,
        hint: 'Rođendan is a masculine noun. Which form of the adjective goes with it?',
        explanation:
          'Sretno on its own means "Good luck!". With rođendan, the adjective takes its masculine form: Sretan rođendan!',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "I wish you a happy birthday."',
        words: ['Želim', 'ti', 'sretan', 'rođendan.'],
        explanation:
          'Želim ti sretan rođendan. — the small word ti comes second, right after the verb.',
      },
      4,
      {
        type: 'transform',
        q: 'Say it to two friends at once (or politely, to one person).',
        from: 'Čestitam ti rođendan!',
        answer: 'Čestitam vam rođendan!',
        accept: ['Čestitam Vam rođendan!'],
        hint: 'Only the small word for "to you" changes.',
        explanation:
          'Čestitam vam rođendan! — vam is "to you" for several people, or the polite form.',
      },
      {
        type: 'transform',
        q: 'Now Marko is signing the card, not Ana.',
        from: 'Puno pozdrava, tvoja Ana',
        answer: 'Puno pozdrava, tvoj Marko',
        hint: 'Two words change: the name, and the word that shows whether a man or a woman is signing.',
        explanation: 'Tvoj Marko — a man signs with tvoj, a woman with tvoja.',
      },
      {
        type: 'dictate',
        audio: 'Sretan Božić i sretna Nova godina!',
        answer: 'Sretan Božić i sretna Nova godina!',
        hint: 'Six words. The two holidays are written with capital letters.',
        explanation:
          'Sretan Božić i sretna Nova godina! — Božić is masculine, godina is feminine, and the adjective follows each.',
      },
    ],
  },

  // ── reflexive-verbs ──
  'reflexive-verbs': {
    text: {
      kind: 'dialogue',
      title: 'Kako se osjećaš?',
      lines: [
        {
          who: 'Luka',
          hr: 'Dobro jutro, Ema! Kako se osjećaš?',
          en: 'Good morning, Ema! How do you feel?',
        },
        {
          who: 'Ema',
          hr: 'Ne osjećam se dobro. Jako sam umorna.',
          en: 'I do not feel well. I am very tired.',
        },
        { who: 'Luka', hr: 'Zašto? Kad se budiš?', en: 'Why? When do you wake up?' },
        {
          who: 'Ema',
          hr: 'Svaki dan se budim u šest, a kući se vraćam navečer.',
          en: 'Every day I wake up at six, and I come back home in the evening.',
        },
        {
          who: 'Luka',
          hr: 'To je puno. Ali danas je subota — danas se odmaramo!',
          en: 'That is a lot. But today is Saturday — today we rest!',
        },
        { who: 'Ema', hr: 'Istina. A zašto se ti smiješ?', en: 'True. And why are you laughing?' },
        { who: 'Luka', hr: 'Veselim se vikendu!', en: 'I am looking forward to the weekend!' },
        {
          who: 'Ema',
          hr: 'I ja se veselim. Vidimo se navečer!',
          en: 'I am looking forward to it too. See you in the evening!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why is Ema tired, and why does it not matter today?',
          options: [
            'She wakes up at six and comes home in the evening; today is Saturday',
            'She came home late last night; today she has no work',
            'She did not sleep; today is Sunday',
            'She wakes up at eight and works at night; today is Saturday',
          ],
          correct: 0,
          hint: 'Think of the two times of day Ema names, and of the day Luka names.',
          explanation:
            'Ema wakes up at six every day and gets home in the evening. Today is Saturday, so they can rest.',
        },
        {
          q: 'Ema says "Ne osjećam se dobro" but "kući se vraćam". Why is the small word after the verb once, and before it the next time?',
          options: [
            'It always takes second place, after whatever comes first',
            'It stands before the verb in the evening and after it in the morning',
            'It stands after the verb only in a negative sentence',
            'Ema made a slip the second time',
          ],
          correct: 0,
          hint: 'Look at what opens each sentence: "Ne osjećam" in one, "kući" in the other.',
          explanation:
            'The small word takes second place. After "Ne osjećam" it follows the verb; when "kući" comes first, it follows "kući".',
        },
        {
          type: 'type',
          q: 'Now you. Luka asks YOU: "Kad se budiš?" You wake up at seven. Answer: ____ se u sedam.',
          answer: 'Budim',
          hint: 'Luka asked with the "you" form. Answer with the "I" form of the same verb.',
          explanation:
            'Budim se u sedam. — only the verb changes for the person; the small word stays the same.',
        },
        {
          type: 'type',
          q: 'Say that Ema and Luka are resting today: Ema i Luka se danas ____.',
          answer: 'odmaraju',
          hint: 'In the dialogue Luka uses the "we" form of this verb. You need the "they" form.',
          explanation: 'Ema i Luka se danas odmaraju. — odmaram se, odmaraš se, … odmaraju se.',
        },
        {
          type: 'transform',
          q: 'Start the sentence with "Navečer".',
          from: 'Vraćam se kući.',
          answer: 'Navečer se vraćam kući.',
          hint: 'The small word keeps second place: it follows whatever comes first.',
          explanation:
            'Navečer se vraćam kući. — when navečer opens the sentence, se comes right after it.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ja', 'me', 'zovem', 'Ana.'],
        wrong: 1,
        answer: 'se',
        hint: 'This little word is the same for every person — it does not change to match "I".',
        explanation: 'Ja se zovem Ana. — se never changes: zovem se, zoveš se, zove se.',
      },
      {
        type: 'match',
        q: 'Match each verb to its meaning.',
        pairs: [
          ['buditi se', 'to wake up'],
          ['oblačiti se', 'to get dressed'],
          ['smijati se', 'to laugh'],
          ['bojati se', 'to be afraid'],
          ['vraćati se', 'to come back'],
        ],
        explanation:
          'Learn each of these verbs together with its se, the way you learn a noun with its gender.',
      },
      6,
      {
        type: 'sort',
        q: 'Is the little word "se" in the right place?',
        groups: ['Correct', 'Not Croatian'],
        items: [
          { hr: 'Zovem se Ana.', group: 0 },
          { hr: 'Se zovem Ana.', group: 1 },
          { hr: 'Kako se zoveš?', group: 0 },
          { hr: 'Kako zoveš se?', group: 1 },
          { hr: 'Danas se odmaram.', group: 0 },
          { hr: 'Danas odmaram se.', group: 1 },
        ],
        explanation:
          'Se takes second place: after the verb when the verb is first, after kako or danas when they are first. It can never open a sentence.',
      },
      9,
      {
        type: 'transform',
        q: 'Start the sentence with "Ujutro".',
        from: 'Tuširam se.',
        answer: 'Ujutro se tuširam.',
        hint: 'Whatever opens the sentence, the small word comes right after it.',
        explanation: 'Ujutro se tuširam. — in the morning I shower.',
      },
      7,
      {
        type: 'listen',
        audio: 'Što se dogodilo?',
        q: 'What is the speaker asking?',
        options: ['What happened?', 'What is your name?', 'Where is it?', 'Why are you laughing?'],
        correct: 0,
        explanation:
          'Što se dogodilo? — what happened? Dogoditi se is one of the verbs that always carry se.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Where is the station?"',
        words: ['Gdje', 'se', 'nalazi', 'kolodvor?'],
        explanation: 'Gdje se nalazi kolodvor? — gdje is first, so se comes second.',
      },
      8,
      {
        type: 'tf',
        q: 'In "Zoveš se Marko" the word "se" has changed to match "you".',
        answer: false,
        hint: 'Compare: zovem se, zoveš se, zove se.',
        explanation: 'Se is the same for every person. Only the verb changes: zovem, zoveš, zove.',
      },
      {
        type: 'transform',
        q: 'Say the same about Ana.',
        from: 'Budim se u sedam.',
        answer: 'Ana se budi u sedam.',
        accept: ['Ona se budi u sedam.'],
        hint: 'The verb takes the "she" ending, and the small word moves to second place, after the name.',
        explanation: 'Ana se budi u sedam. — Ana is first, so se follows her name.',
      },
      3,
      {
        type: 'dictate',
        audio: 'Djeca se igraju u dvorištu.',
        answer: 'Djeca se igraju u dvorištu.',
        hint: 'Five words. The small word comes second, right after "the children".',
        explanation: 'Djeca se igraju u dvorištu. — the children are playing in the yard.',
      },
    ],
  },

  // ── daily-routine ──
  'daily-routine': {
    text: {
      kind: 'dialogue',
      title: 'Kad ustaješ?',
      lines: [
        { who: 'Petra', hr: 'Marko, kad ti ustaješ?', en: 'Marko, when do you get up?' },
        {
          who: 'Marko',
          hr: 'Budim se u šest, ali ustajem u pola sedam.',
          en: 'I wake up at six, but I get up at half past six.',
        },
        { who: 'Petra', hr: 'U šest?! Što onda radiš?', en: 'At six?! What do you do then?' },
        {
          who: 'Marko',
          hr: 'Prvo se tuširam, onda perem zube i oblačim se.',
          en: 'First I shower, then I brush my teeth and get dressed.',
        },
        { who: 'Petra', hr: 'A doručak?', en: 'And breakfast?' },
        {
          who: 'Marko',
          hr: 'Doručkujem u sedam, a zatim idem na posao.',
          en: 'I have breakfast at seven, and after that I go to work.',
        },
        {
          who: 'Petra',
          hr: 'Ja ustajem u osam, a navečer idem spavati u jedanaest.',
          en: 'I get up at eight, and in the evening I go to bed at eleven.',
        },
        {
          who: 'Marko',
          hr: 'Ja se navečer odmaram, večeram i idem spavati u deset.',
          en: 'In the evening I rest, have dinner and go to bed at ten.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: in which order does Marko do things in the morning?',
          options: [
            'shower → teeth → get dressed → breakfast → work',
            'breakfast → shower → teeth → get dressed → work',
            'teeth → shower → breakfast → get dressed → work',
            'shower → get dressed → breakfast → teeth → work',
          ],
          correct: 0,
          hint: 'He names three things with "prvo … onda … i", and breakfast comes after them.',
          explanation:
            'First he showers, then he brushes his teeth and gets dressed. At seven he has breakfast, and after that he goes to work.',
        },
        {
          q: 'Marko says "oblačim se" but "perem zube" — with no "se". Why?',
          options: [
            'The teeth are the object, and se and an object do not go together',
            'Because se is never used twice in one sentence',
            'Because prati is never used with se',
            'Because se is dropped after "onda"',
          ],
          correct: 0,
          hint: 'Ask where the action lands: on Marko himself, or on something he names?',
          explanation:
            'Se means the action lands on you. With "zube" it lands on the teeth, so there is no se.',
        },
        {
          type: 'type',
          q: 'Now you. Petra asks YOU: "Kad doručkuješ?" You have breakfast at eight. Answer: ____ u osam.',
          answer: 'Doručkujem',
          hint: 'Marko says this word in the dialogue, about seven o’clock.',
          explanation:
            'Doručkujem u osam. — doručkovati is an -ovati verb: doručkujem, doručkuješ …',
        },
        {
          type: 'type',
          q: 'Say when Petra gets up: Petra ____ u osam.',
          answer: 'ustaje',
          hint: 'Take the "I" form from the dialogue and give it the ending for "she". This verb has no se.',
          explanation: 'Petra ustaje u osam. — ustajem, ustaješ, ustaje. No se with this verb.',
        },
        {
          type: 'transform',
          q: 'Now you are washing your hair (kosa), not yourself. Change the sentence.',
          from: 'Perem se.',
          answer: 'Perem kosu.',
          hint: 'The hair becomes the object, so the small word goes. Kosa is feminine: its object ending is -u.',
          explanation: 'Perem kosu. — like Marko\'s "perem zube": an object, so no se.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['perem zube', 'I brush my teeth'],
          ['idem spavati', 'I go to bed'],
          ['umivam se', 'I wash my face'],
          ['večeram', 'I have dinner'],
          ['vraćam se', 'I come back'],
        ],
        explanation: 'Five steps of a day. Notice which ones carry se and which do not.',
      },
      {
        type: 'sort',
        q: 'An ordinary working day: does this happen in the morning or in the evening?',
        groups: ['Ujutro', 'Navečer'],
        items: [
          { hr: 'Budim se.', group: 0 },
          { hr: 'Večeram.', group: 1 },
          { hr: 'Idem spavati.', group: 1 },
          { hr: 'Doručkujem.', group: 0 },
        ],
        explanation: 'Ujutro: budim se, doručkujem. Navečer: večeram, idem spavati.',
      },
      10,
      {
        type: 'tf',
        q: '"Ustajem se u sedam." is correct Croatian.',
        answer: false,
        hint: 'Learn each morning verb with its se — or without it.',
        explanation:
          'Ustajati has no se: Ustajem u sedam. It is buditi se, to wake up, that carries se.',
      },
      2,
      {
        type: 'listen',
        audio: 'Idem spavati u jedanaest.',
        q: 'What does the speaker do at eleven?',
        options: ['Goes to bed', 'Gets up', 'Goes to work', 'Has dinner'],
        correct: 0,
        explanation: 'Idem spavati u jedanaest. — I go to bed at eleven.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'se', 'tuširam', 'navečer.'],
        wrong: 3,
        answer: 'tušira',
        hint: 'Who showers? The verb has to match her, not "I".',
        explanation:
          'The subject is "my sister", so the verb takes the ending for "she". The small word stays the same for every person.',
      },
      12,
      {
        type: 'transform',
        q: 'Start the sentence with "Zatim".',
        from: 'Oblačim se.',
        answer: 'Zatim se oblačim.',
        hint: 'The small word takes second place, right after the first word.',
        explanation: 'Zatim se oblačim. — after that I get dressed.',
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "First I wash my face, then I brush my teeth."',
        words: ['Prvo', 'se', 'umivam,', 'onda', 'perem', 'zube.'],
        explanation:
          'Prvo se umivam, onda perem zube. — se follows prvo; perem zube has an object, so it has no se.',
      },
      6,
      {
        type: 'transform',
        q: 'Now it is you who wakes up, not your son. Change the sentence.',
        from: 'Budim sina u sedam.',
        answer: 'Budim se u sedam.',
        hint: 'Take out the person you wake, and put in the small word that means the action lands on you.',
        explanation: 'Budim se u sedam. — with no object, the action lands on you: se.',
      },
      {
        type: 'dictate',
        audio: 'Perem zube i idem spavati.',
        answer: 'Perem zube i idem spavati.',
        hint: 'Five words. The first two are what you do with a toothbrush.',
        explanation: 'Perem zube i idem spavati. — I brush my teeth and go to bed.',
      },
    ],
  },

  // ══ Unit 15 ═══════════════════════════════════════════════════════════

  // ── reflexive-past-future ──
  'reflexive-past-future': {
    text: {
      kind: 'dialogue',
      title: 'Što se dogodilo?',
      lines: [
        {
          who: 'Nina',
          hr: 'Bog, Dino! Kasniš. Što se dogodilo?',
          en: 'Hi, Dino! You are late. What happened?',
        },
        {
          who: 'Dino',
          hr: 'Jutros sam se kasno probudio. Jučer sam se jako umorio.',
          en: 'This morning I woke up late. Yesterday I got very tired.',
        },
        {
          who: 'Nina',
          hr: 'Zašto? Kad si se vratio kući?',
          en: 'Why? When did you get back home?',
        },
        {
          who: 'Dino',
          hr: 'Vratio sam se u jedanaest. Bio sam na utakmici.',
          en: 'I got back at eleven. I was at a match.',
        },
        {
          who: 'Nina',
          hr: 'A ja sam se jučer dobro odmorila.',
          en: 'And I had a good rest yesterday.',
        },
        {
          who: 'Dino',
          hr: 'Lijepo! Večeras ću se i ja odmoriti.',
          en: 'Nice! Tonight I will have a rest too.',
        },
        {
          who: 'Nina',
          hr: 'A sutra? Hoćeš li se sutra probuditi rano?',
          en: 'And tomorrow? Will you wake up early tomorrow?',
        },
        {
          who: 'Dino',
          hr: 'Hoću. Sutra neću kasniti — probudit ću se u šest!',
          en: 'I will. Tomorrow I will not be late — I will wake up at six!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why is Dino late today, and what does he promise?',
          options: [
            'He came home at eleven from a match and woke up late; tomorrow he will wake up at six',
            'He was working until eleven; tomorrow he will stay at home',
            'He had a good rest yesterday; tomorrow he will come at eleven',
            'He missed the tram; tomorrow he will wake up at seven',
          ],
          correct: 0,
          hint: 'Think of where he was yesterday evening, and of the last thing he says.',
          explanation:
            'Dino was at a match, got home at eleven and woke up late. Tomorrow he will wake up at six.',
        },
        {
          q: 'Nina says "A ja sam se jučer dobro odmorila" and Dino says "Vratio sam se u jedanaest." What do the two sentences have in common?',
          options: [
            'The helping word of the past comes first, and the small word of the verb right after it',
            'The small word of the verb comes first, and the helping word of the past after it',
            'Both small words stand at the very end',
            'The two small words can stand in any order',
          ],
          correct: 0,
          hint: 'Look at the two small words that stand side by side in both sentences.',
          explanation:
            'In the past, the short form of biti comes first and the small word of the verb follows it — always in that order.',
        },
        {
          type: 'type',
          q: 'Now you. A colleague asks YOU politely: "Kad ste se jutros probudili?" You woke up at seven. Answer: ____ sam se u sedam.',
          answer: 'Probudio',
          accept: ['Probudila'],
          hint: 'Your colleague used the polite plural form. Answer about yourself: the form ends in -o for a man, -la for a woman.',
          explanation: 'Probudio sam se u sedam. (a man) / Probudila sam se u sedam. (a woman)',
        },
        {
          type: 'type',
          q: 'Now you. Tell Nina that tomorrow you will come back at five: Sutra ____ se vratiti u pet.',
          answer: 'ću',
          hint: 'The short future word for "I" — Dino uses it twice in the dialogue.',
          explanation:
            'Sutra ću se vratiti u pet. — in the future, ću comes first and se right after it.',
        },
        {
          type: 'transform',
          q: 'Say the same about your brother: start with "Brat". Look first at Nina\'s question "Što se dogodilo?" — about "he" or "it" there is no helping word next to se.',
          from: 'Vratio sam se kasno.',
          answer: 'Brat se vratio kasno.',
          accept: ['Brat se kasno vratio.'],
          hint: '"Brat" comes first, the small word of the verb takes second place, and "sam" goes — with nothing in its place.',
          explanation:
            "Brat se vratio kasno. — with on and ona, je drops out when se is there. Compare Nina's question: Što se dogodilo?",
        },
      ],
    },
    mix: [
      8,
      11,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Vraćam se.', 'I am coming back.'],
          ['Vratio sam se.', 'I came back.'],
          ['Vratit ću se.', 'I will come back.'],
          ['Vratila se.', 'She came back.'],
          ['Vratili smo se.', 'We came back.'],
        ],
        explanation:
          'sam se and smo se mark the past, ću se marks the future. About "she" the past has only se — no je.',
      },
      9,
      {
        type: 'sort',
        q: 'Has it already happened, or is it still to come?',
        groups: ['Already happened', 'Still to come'],
        items: [
          { hr: 'Odmorila sam se.', group: 0 },
          { hr: 'Odmorit ću se.', group: 1 },
          { hr: 'Jeste li se umorili?', group: 0 },
          { hr: 'Kad ćeš se vratiti?', group: 1 },
          { hr: 'Nismo se tuširali.', group: 0 },
          { hr: 'Neću se tuširati.', group: 1 },
        ],
        explanation:
          'Forms of biti (sam, jeste, nismo) with the -o / -la / -li form are the past. Forms of htjeti (ću, ćeš, neću) with the dictionary form are the future.',
      },
      {
        type: 'tf',
        q: 'In standard Croatian you say "Marko se je vratio."',
        answer: false,
        hint: 'What happens to je next to se when you talk about "he" or "she"?',
        explanation: 'About one person, je drops out next to se: Marko se vratio.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sutra', 'ću', 'se', 'probudim', 'rano.'],
        wrong: 3,
        answer: 'probuditi',
        hint: 'After the short future word, the verb is in its dictionary form.',
        explanation: 'Sutra ću se probuditi rano. — ću + the dictionary form of the verb.',
      },
      10,
      {
        type: 'listen',
        audio: 'Kad ćeš se vratiti?',
        q: 'What does the speaker want to know?',
        options: [
          'When you will come back',
          'When you came back',
          'Whether you are tired',
          'Where you are going',
        ],
        correct: 0,
        explanation: 'Kad ćeš se vratiti? — ćeš is the future: when will you come back?',
      },
      {
        type: 'order',
        q: 'Put the words in order: "This morning I woke up at seven." (a woman is speaking)',
        words: ['Jutros', 'sam', 'se', 'probudila', 'u', 'sedam.'],
        explanation:
          'Jutros sam se probudila u sedam. — after jutros come sam and se, in that order.',
      },
      4,
      {
        type: 'transform',
        q: 'Say it in the future.',
        from: 'Tuširam se navečer.',
        answer: 'Tuširat ću se navečer.',
        accept: ['Navečer ću se tuširati.', 'Ja ću se tuširati navečer.'],
        hint: 'When the verb comes first, it loses its final -i in front of the short future word.',
        explanation: 'Tuširat ću se navečer. — or, with navečer first: Navečer ću se tuširati.',
      },
      6,
      {
        type: 'transform',
        q: 'Make the sentence negative.',
        from: 'Ana se dobro odmorila.',
        answer: 'Ana se nije dobro odmorila.',
        accept: ['Ana se nije odmorila dobro.', 'Ana se dobro nije odmorila.'],
        hint: 'The negative past needs the full word for "is not" — and the small word stays in second place.',
        explanation:
          'Ana se nije dobro odmorila. — je drops out next to se, but nije is a full word and stays.',
      },
      {
        type: 'dictate',
        audio: 'Brat se vratio kući kasno.',
        answer: 'Brat se vratio kući kasno.',
        hint: 'Five words. It is about "he" — so do not expect a helping word.',
        explanation: 'Brat se vratio kući kasno. — my brother came home late.',
      },
    ],
  },

  // ── school-education ──
  'school-education': {
    text: {
      kind: 'dialogue',
      title: 'Što studiraš?',
      lines: [
        { who: 'Tin', hr: 'Bog! Jesi li ti studentica?', en: 'Hi! Are you a college student?' },
        {
          who: 'Lea',
          hr: 'Jesam. Studiram medicinu na fakultetu u Zagrebu. A ti?',
          en: 'I am. I study medicine at the faculty in Zagreb. And you?',
        },
        {
          who: 'Tin',
          hr: 'Ja sam učenik. Idem u gimnaziju.',
          en: 'I am a student. I go to a gimnazija (an academic high school).',
        },
        { who: 'Lea', hr: 'Koji ti je omiljeni predmet?', en: 'What is your favorite subject?' },
        {
          who: 'Tin',
          hr: 'Povijest. Matematika mi se ne sviđa.',
          en: 'History. I do not like math.',
        },
        { who: 'Lea', hr: 'A što radiš večeras?', en: 'And what are you doing tonight?' },
        {
          who: 'Tin',
          hr: 'Učim za ispit. Imam ispit u petak.',
          en: 'I am studying for an exam. I have an exam on Friday.',
        },
        {
          who: 'Lea',
          hr: 'Sretno! Ja sam jučer položila ispit.',
          en: 'Good luck! I passed an exam yesterday.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who goes where, and who has an exam on Friday?',
          options: [
            'Lea is in college, Tin is at high school; Tin has the exam',
            'Tin is in college, Lea is at high school; Lea has the exam',
            'Both are in college; Lea has the exam',
            'Both are at high school; Tin has the exam',
          ],
          correct: 0,
          hint: 'One of them studies medicine. The other one is studying tonight.',
          explanation:
            'Lea studies medicine at the faculty. Tin is a student at a gimnazija, and his exam is on Friday.',
        },
        {
          q: 'Lea and Tin each use a different verb that English translates as "study". What is the difference?',
          options: [
            'studirati is for your subject in college; učiti is for learning anything, also for an exam',
            'studirati is for women, učiti is for men',
            'studirati is for the evening, učiti is for the daytime',
            'There is no difference; they can always be swapped',
          ],
          correct: 0,
          hint: 'Lea names her degree subject. Tin talks about one evening of studying.',
          explanation:
            'Studirati is to take a college degree in something. Učiti is to learn or review — in school, at home, for an exam.',
        },
        {
          type: 'type',
          q: 'Now you. Tell Lea that you are learning Croatian: ____ hrvatski.',
          answer: 'Učim',
          hint: 'It is not your college degree — so use the verb Tin uses about his evening.',
          explanation:
            'Učim hrvatski. — learning a language, a skill or for an exam is always učiti.',
        },
        {
          type: 'type',
          q: 'Lea has a class in ten minutes. She says she is going to the faculty: Idem na ____.',
          answer: 'fakultet',
          hint: 'Going there takes the form that looks like the dictionary form — as in "na posao".',
          explanation:
            'Idem na fakultet. — going there: the form that looks like the dictionary form.',
        },
        {
          type: 'transform',
          q: 'Now she has arrived. Say where Lea is.',
          from: 'Lea ide na fakultet.',
          answer: 'Lea je na fakultetu.',
          hint: 'The verb becomes "is", and the place takes the "where" ending.',
          explanation: 'Lea je na fakultetu. — being there takes the locative, as in "na poslu".',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'match',
        q: 'Match each word to what it means.',
        pairs: [
          ['učenik', 'a student at school'],
          ['student', 'someone who studies in college'],
          ['učiteljica', 'a woman who teaches in elementary school'],
          ['profesor', 'a teacher in high school or in college'],
          ['predmet', 'a school subject'],
        ],
        explanation:
          'A Croatian student is always in college. In school you are an učenik, and your teacher is an učitelj or a profesor.',
      },
      9,
      {
        type: 'sort',
        q: 'Is the speaker already there, or on the way there?',
        groups: ['Where I am', 'Where I am going'],
        items: [
          { hr: 'u školi', group: 0 },
          { hr: 'u školu', group: 1 },
          { hr: 'na fakultetu', group: 0 },
          { hr: 'na fakultet', group: 1 },
          { hr: 'na poslu', group: 0 },
          { hr: 'na posao', group: 1 },
        ],
        explanation:
          'Being there takes the locative (u školi, na fakultetu, na poslu). Going there takes the accusative (u školu, na fakultet, na posao).',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Studiram', 'za', 'ispit.'],
        wrong: 0,
        answer: 'Učim',
        hint: 'Studying for an exam is never this verb — not even for a college student.',
        explanation:
          'Učim za ispit. — studirati is only for your degree subject: Studiram medicinu.',
      },
      12,
      {
        type: 'tf',
        q: 'A boy who goes to a gimnazija is called a "student" in Croatian.',
        answer: false,
        hint: 'Think of what Croatian calls someone who is still at school.',
        explanation: 'He is an učenik. In Croatian, student means a college student only.',
      },
      13,
      {
        type: 'listen',
        audio: 'Sutra idem na razgovor za posao.',
        q: 'Where is the speaker going tomorrow?',
        options: ['To a job interview', 'To school', 'To an exam', 'To the faculty'],
        correct: 0,
        explanation: 'Sutra idem na razgovor za posao. — razgovor za posao is a job interview.',
      },
      14,
      {
        type: 'order',
        q: 'Put the words in order: "My favorite subject is history."',
        words: ['Moj', 'omiljeni', 'predmet', 'je', 'povijest.'],
        accept: ['Moj je omiljeni predmet povijest.'],
        explanation: 'Moj omiljeni predmet je povijest.',
      },
      7,
      {
        type: 'transform',
        q: 'You have arrived. Say that you are there now.',
        from: 'Idem u školu.',
        answer: 'U školi sam.',
        accept: ['Ja sam u školi.', 'Sad sam u školi.', 'Sada sam u školi.'],
        hint: 'The verb becomes "I am" — which cannot stand first — and the place takes the "where" ending.',
        explanation: 'U školi sam. — where: u školi. The short word sam cannot open the sentence.',
      },
      {
        type: 'transform',
        q: 'Say the same about Lea.',
        from: 'Položio sam ispit.',
        answer: 'Lea je položila ispit.',
        accept: ['Položila je ispit.', 'Ona je položila ispit.'],
        hint: 'Two things change: the helping word, and the ending of the verb — Lea is a woman.',
        explanation: 'Lea je položila ispit. — Lea passed the exam.',
      },
      {
        type: 'dictate',
        audio: 'Moj brat studira pravo.',
        answer: 'Moj brat studira pravo.',
        hint: 'Four words. The last one is what he studies: law.',
        explanation: 'Moj brat studira pravo. — my brother studies law.',
      },
    ],
  },

  // ── likes-preferences ──
  'likes-preferences': {
    text: {
      kind: 'dialogue',
      title: 'Kava ili čaj?',
      lines: [
        {
          who: 'Sara',
          hr: 'Što ćeš piti? Voliš li kavu?',
          en: 'What will you drink? Do you like coffee?',
        },
        {
          who: 'Leo',
          hr: 'Ne volim kavu. Više volim čaj.',
          en: 'I do not like coffee. I prefer tea.',
        },
        { who: 'Sara', hr: 'Ja više volim kavu nego čaj.', en: 'I prefer coffee to tea.' },
        { who: 'Leo', hr: 'Sviđa li ti se ova kavana?', en: 'Do you like this café?' },
        {
          who: 'Sara',
          hr: 'Sviđa mi se. Sviđaju mi se i ovi kolači!',
          en: 'I like it. I like these cakes too!',
        },
        {
          who: 'Leo',
          hr: 'Kolači mi se ne sviđaju. Više volim sladoled.',
          en: 'I do not like cakes. I prefer ice cream.',
        },
        {
          who: 'Sara',
          hr: 'A more? Voliš li more ili planine?',
          en: 'And the sea? Do you like the sea or the mountains?',
        },
        {
          who: 'Leo',
          hr: 'Više volim more nego planine. I mrzim zimu!',
          en: 'I prefer the sea to the mountains. And I hate winter!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do Leo and Sara each prefer?',
          options: [
            'Leo prefers tea and ice cream; Sara prefers coffee and likes the cakes',
            'Leo prefers coffee and cakes; Sara prefers tea and ice cream',
            'Both prefer coffee; only Sara likes the cakes',
            'Leo prefers tea and cakes; Sara prefers coffee and ice cream',
          ],
          correct: 0,
          hint: 'Leo says no twice: once to a drink and once to something sweet.',
          explanation:
            'Leo prefers tea and ice cream. Sara prefers coffee, and she likes the café and its cakes.',
        },
        {
          q: 'Leo says "Ne volim kavu" — with -u — but then he asks "Sviđa li ti se ova kavana?" — with no change at the end. Why?',
          options: [
            'With voljeti the thing is the object; with sviđati se the thing is the subject',
            'Kavana never changes its ending',
            'Because Leo does not like coffee',
            'Because a question never changes the noun',
          ],
          correct: 0,
          hint: 'Look at which verb each sentence uses.',
          explanation:
            'With voljeti you are the subject and the thing is a plain object: kava → kavu. With sviđati se the thing is the subject, so it keeps its dictionary form: ova kavana.',
        },
        {
          type: 'type',
          q: 'Now you. Say that you love fish (riba): Volim ____.',
          answer: 'ribu',
          hint: 'The thing you love is the object — the same ending Leo puts on coffee.',
          explanation: 'Volim ribu. — riba → ribu, the accusative.',
        },
        {
          type: 'type',
          q: 'Now you. A friend shows you two movies, and you like both. Say so: ____ mi se ovi filmovi.',
          answer: 'Sviđaju',
          hint: 'The movies are the subject, and there are two of them — Sara says the same about the cakes.',
          explanation: 'Sviđaju mi se ovi filmovi. — several things: sviđaju.',
        },
        {
          type: 'transform',
          q: 'Say the same with sviđati se.',
          from: 'Volim ovu pjesmu.',
          answer: 'Sviđa mi se ova pjesma.',
          accept: ['Ova pjesma mi se sviđa.', 'Ova mi se pjesma sviđa.'],
          hint: 'The song becomes the subject, so it goes back to its dictionary form — and you become "to me".',
          explanation:
            'Sviđa mi se ova pjesma. — ovu pjesmu was the object of volim; ova pjesma is the subject of sviđa se.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Volim čaj.', 'I love tea.'],
          ['Ne volim čaj.', 'I do not like tea.'],
          ['Više volim čaj.', 'I prefer tea.'],
          ['Mrzim čaj.', 'I hate tea.'],
          ['Sviđa mi se čaj.', 'I like tea.'],
        ],
        explanation:
          'From strongest dislike to liking: mrzim, ne volim, sviđa mi se, volim — and više volim for a preference.',
      },
      6,
      {
        type: 'sort',
        q: 'Which beginning fits the form? One needs an object form, the other the dictionary form.',
        groups: ['Volim …', 'Sviđa mi se …'],
        items: [
          { hr: 'kavu', group: 0 },
          { hr: 'kava', group: 1 },
          { hr: 'ovu pjesmu', group: 0 },
          { hr: 'ova pjesma', group: 1 },
          { hr: 'Hrvatsku', group: 0 },
          { hr: 'Hrvatska', group: 1 },
        ],
        explanation:
          'After volim the thing is the object, in the accusative. With sviđa mi se the thing is the subject and keeps its dictionary form.',
      },
      8,
      {
        type: 'listen',
        audio: 'Moja baka ne voli zimu.',
        q: 'What do you learn about grandma?',
        options: [
          'She does not like winter',
          'She loves winter',
          'She prefers winter to summer',
          'She does not like the sea',
        ],
        correct: 0,
        explanation: 'Moja baka ne voli zimu. — ne voli: she does not like it.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sviđa', 'mi', 'se', 'ovi', 'filmovi.'],
        wrong: 0,
        answer: 'Sviđaju',
        hint: 'How many movies are there? The verb counts the thing, not the person.',
        explanation:
          'Sviđaju mi se ovi filmovi. — several things are the subject, so the verb is plural.',
      },
      5,
      {
        type: 'tf',
        q: 'In "Sviđaju mi se planine", the word "planine" is the subject of the sentence.',
        answer: true,
        hint: 'Who or what does the pleasing?',
        explanation:
          'True. The mountains are pleasing to me: they are the subject, and "mi" is the receiver.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "She likes these shoes."',
        words: ['Sviđaju', 'joj', 'se', 'ove', 'cipele.'],
        explanation: 'Sviđaju joj se ove cipele. — joj first, then se.',
      },
      10,
      {
        type: 'transform',
        q: 'Say the same with voljeti.',
        from: 'Sviđa mi se ovaj grad.',
        answer: 'Volim ovaj grad.',
        hint: 'Now you are the subject and the town is the object. A masculine thing looks the same as an object.',
        explanation: 'Volim ovaj grad. — I love this town.',
      },
      9,
      {
        type: 'transform',
        q: 'Turn it into a yes/no question.',
        from: 'Sviđa ti se more.',
        answer: 'Sviđa li ti se more?',
        hint: 'One small question word goes right after the verb, in front of the other small words.',
        explanation: 'Sviđa li ti se more? — li, then ti, then se.',
      },
      {
        type: 'dictate',
        audio: 'Volim kavu, ali ne volim čaj.',
        answer: 'Volim kavu, ali ne volim čaj.',
        hint: 'Six words, with a comma in the middle. The first drink has the object ending.',
        explanation: 'Volim kavu, ali ne volim čaj. — I love coffee, but I do not like tea.',
      },
    ],
  },

  // ── instrumental-intro ──
  'instrumental-intro': {
    text: {
      kind: 'dialogue',
      title: 'Kako ideš na posao?',
      lines: [
        { who: 'Maja', hr: 'Kako ideš na posao? Autom?', en: 'How do you get to work? By car?' },
        { who: 'Ivan', hr: 'Ne, idem tramvajem. A ti?', en: 'No, I go by tram. And you?' },
        { who: 'Maja', hr: 'Ja idem biciklom ili autobusom.', en: 'I go by bike or by bus.' },
        {
          who: 'Ivan',
          hr: 'Ideš li u subotu na more?',
          en: 'Are you going to the seaside on Saturday?',
        },
        {
          who: 'Maja',
          hr: 'Idem. Putujem vlakom, sa sestrom i s prijateljem.',
          en: 'I am. I am traveling by train, with my sister and with a friend.',
        },
        {
          who: 'Ivan',
          hr: 'Lijepo! Ja u subotu treniram s bratom. Bavimo se sportom.',
          en: 'Nice! On Saturday I am training with my brother. We do sport.',
        },
        {
          who: 'Maja',
          hr: 'I ja se bavim sportom. Svaki dan plivam s Anom.',
          en: 'I do sport too. I swim with Ana every day.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how does each of them get to work, and who is Maja going to the seaside with?',
          options: [
            'Ivan by tram, Maja by bike or bus; she is going with her sister and a friend',
            'Ivan by car, Maja by tram; she is going with her brother',
            'Ivan by bike, Maja by train; she is going with Ana',
            'Ivan by tram, Maja by car; she is going alone',
          ],
          correct: 0,
          hint: 'Ivan says no to the car. Maja names two ways of getting to work and two people.',
          explanation:
            'Ivan goes by tram, Maja by bike or bus. On Saturday she travels by train with her sister and a friend.',
        },
        {
          q: 'Maja says "vlakom" with nothing in front, but "sa sestrom" with a small word in front. Why?',
          options: [
            'The train is how she travels; her sister is who she travels with',
            'The train is masculine and the sister is feminine',
            'A small word is only needed before the letter s',
            'There is no reason; both are possible for both',
          ],
          correct: 0,
          hint: 'One of them is a means of transport. The other is company.',
          explanation:
            'A means — by train — takes the ending alone. Company — together with someone — takes s (or sa) as well.',
        },
        {
          type: 'type',
          q: 'Now you. Maja asks how you travel to London. You go by plane (avion): Putujem ____.',
          answer: 'avionom',
          hint: 'A means of transport: add the same ending you hear on the train and the bus, with no small word in front.',
          explanation: 'Putujem avionom. — avion → avionom.',
        },
        {
          type: 'type',
          q: 'Now you. Say who you are going to the movies with — your mom: Idem u kino s ____. (mama)',
          answer: 'mamom',
          hint: 'A feminine word in -a takes the same ending as the sister in the dialogue.',
          explanation: 'Idem u kino s mamom. — mama → mamom, and s because she is your company.',
        },
        {
          type: 'transform',
          q: 'You are not going by car after all — you are going together with Ivan. Change the end of the sentence.',
          from: 'Idem u grad autom.',
          answer: 'Idem u grad s Ivanom.',
          hint: 'A person you go with needs the small word for "with", and the name takes the same ending as the car did.',
          explanation: 'Idem u grad s Ivanom. — company: s + the ending -om.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['vlakom', 'by train'],
          ['brodom', 'by boat'],
          ['avionom', 'by plane'],
          ['biciklom', 'by bike'],
          ['autobusom', 'by bus'],
        ],
        explanation: 'The ending alone says "by": no small word in front of a means of transport.',
      },
      6,
      {
        type: 'sort',
        q: 'Is it a means (how? with what?) or company (together with whom?)',
        groups: ['A means — no "s"', 'Company — with "s"'],
        items: [
          { hr: 'autom', group: 0 },
          { hr: 's bratom', group: 1 },
          { hr: 'olovkom', group: 0 },
          { hr: 's mamom', group: 1 },
          { hr: 'karticom', group: 0 },
          { hr: 's kolegom', group: 1 },
        ],
        explanation:
          'A tool or a means of transport stands alone: autom, olovkom, karticom. A person you are with takes s: s bratom, s mamom, s kolegom.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Idem', 'na', 'posao', 'tramvajom.'],
        wrong: 3,
        answer: 'tramvajem',
        hint: 'This word ends in a soft sound, and soft sounds take a different ending.',
        explanation: 'After a soft consonant such as j the ending is -em, not -om.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "I am traveling by train with a friend."',
        words: ['Putujem', 'vlakom', 's', 'prijateljem.'],
        explanation:
          'Putujem vlakom s prijateljem. — the train is the means (no small word); the friend is company (s).',
      },
      1,
      {
        type: 'listen',
        audio: 'Pijem kavu s mlijekom.',
        q: 'How does the speaker drink coffee?',
        options: ['With milk', 'Without milk', 'With sugar', 'With honey'],
        correct: 0,
        explanation: 'Pijem kavu s mlijekom. — s + mlijeko → mlijekom: with milk.',
      },
      {
        type: 'transform',
        q: 'Now you are going with your sister (sestra), not with your brother.',
        from: 'Idem u kino s bratom.',
        answer: 'Idem u kino sa sestrom.',
        hint: 'Two things change: the noun — and the small word in front of it, because of the sound that follows.',
        explanation: 'Idem u kino sa sestrom. — before s, š, z and ž the small word is sa.',
      },
      8,
      {
        type: 'tf',
        q: 'In "Idem autom s bratom", the car is the means and the brother is the company.',
        answer: true,
        hint: 'Which of the two has a small word in front of it?',
        explanation: 'True. Autom — by car, no small word. S bratom — together with my brother.',
      },
      3,
      {
        type: 'transform',
        q: 'Say that you do it too — about yourself.',
        from: 'Brat se bavi sportom.',
        answer: 'Bavim se sportom.',
        accept: ['I ja se bavim sportom.', 'Ja se bavim sportom.'],
        hint: 'The verb takes the "I" ending, and the small word of the verb must not stand first.',
        explanation:
          'Bavim se sportom. — baviti se takes the instrumental with no small word in front.',
      },
      10,
      {
        type: 'dictate',
        audio: 'Putujem u Split vlakom.',
        answer: 'Putujem u Split vlakom.',
        hint: 'Four words. The last one tells you how.',
        explanation: 'Putujem u Split vlakom. — I am traveling to Split by train.',
      },
    ],
  },

  // ── instrumental-means ──
  'instrumental-means': {
    text: {
      kind: 'dialogue',
      title: 'Čime putujemo?',
      lines: [
        {
          who: 'Ana',
          hr: 'Sutra idemo na Hvar. Čime putujemo?',
          en: 'Tomorrow we are going to Hvar. How (by what) are we traveling?',
        },
        {
          who: 'Marko',
          hr: 'Prvo autobusom u Split, a onda brodom na Hvar.',
          en: 'First by bus to Split, and then by boat to Hvar.',
        },
        {
          who: 'Ana',
          hr: 'A kako idemo na kolodvor? Taksijem?',
          en: 'And how do we get to the station? By taxi?',
        },
        {
          who: 'Marko',
          hr: 'Ne, taksi je skup. Idemo tramvajem ili pješice.',
          en: 'No, a taxi is expensive. We will go by tram or on foot.',
        },
        {
          who: 'Ana',
          hr: 'Dobro. Mogu li karte platiti karticom?',
          en: 'Fine. Can I pay for the tickets by card?',
        },
        { who: 'Marko', hr: 'Možeš, karticom ili gotovinom.', en: 'You can, by card or in cash.' },
        { who: 'Ana', hr: 'Odlično, plaćam karticom!', en: 'Great, I am paying by card!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how will Ana and Marko get from home to Hvar?',
          options: [
            'By tram or on foot to the station, by bus to Split, by boat to Hvar',
            'By taxi to the station, by train to Split, by boat to Hvar',
            'By bus to the station, by boat to Split, on foot to Hvar',
            'By tram to the station, by plane to Split, by bus to Hvar',
          ],
          correct: 0,
          hint: 'There are three parts of the journey. Marko says no to the taxi.',
          explanation:
            'They go to the station by tram or on foot, then by bus to Split, then by boat to Hvar.',
        },
        {
          q: 'Marko says "autobusom" and "brodom" with -om, but "tramvajem" with -em. Why?',
          options: [
            'Tramvaj ends in a soft sound, j',
            'Because a tram is smaller than a bus',
            'Because tramvaj is feminine',
            'Because it comes after "idemo"',
          ],
          correct: 0,
          hint: 'Look at the last letter of each word in its dictionary form.',
          explanation:
            'After a soft consonant — j, č, ć, š, ž, lj, nj, c, đ — the ending is -em: tramvaj → tramvajem.',
        },
        {
          type: 'type',
          q: 'Now you. A friend asks YOU: "Čime ideš u grad?" You go by bike (bicikl). Answer in one word: ____.',
          answer: 'Biciklom',
          hint: 'Just the means, with its ending. No small word in front.',
          explanation: 'Biciklom. — by bike. The ending alone answers the question čime?',
        },
        {
          type: 'type',
          q: 'Now you. You have a pencil (olovka) in your hand. Say what you write with: Pišem ____.',
          answer: 'olovkom',
          hint: 'A tool works like a means of transport: change the final -a to the ending you hear on "karticom".',
          explanation:
            'Pišem olovkom. — olovka → olovkom, with no small word in front of the tool.',
        },
        {
          type: 'transform',
          q: 'Today the bus is not running, so you walk. Change the sentence.',
          from: 'Idem na posao autobusom.',
          answer: 'Idem na posao pješice.',
          accept: ['Idem na posao pješke.', 'Na posao idem pješice.', 'Na posao idem pješke.'],
          hint: 'Walking has its own word, with no ending to add — Marko uses it in the dialogue.',
          explanation: 'Idem na posao pješice. — on foot: pješice (or pješke).',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Which thing do you use for each action?',
        pairs: [
          ['olovka', 'Pišem pismo.'],
          ['nož', 'Režem kruh.'],
          ['žlica', 'Jedem juhu.'],
          ['ključ', 'Otvaram vrata.'],
          ['kartica', 'Plaćam u trgovini.'],
        ],
        explanation:
          'You write with a pencil, cut with a knife, eat soup with a spoon, open with a key and pay with a card.',
      },
      8,
      {
        type: 'sort',
        q: 'Which ending does the word take when it is the means or the company: -om or -em?',
        groups: ['-om', '-em'],
        items: [
          { hr: 'vlak', group: 0 },
          { hr: 'tramvaj', group: 1 },
          { hr: 'brod', group: 0 },
          { hr: 'prijatelj', group: 1 },
          { hr: 'bicikl', group: 0 },
          { hr: 'čaj', group: 1 },
        ],
        explanation:
          'After a soft consonant (here j and lj) the ending is -em: tramvajem, s prijateljem, s čajem. Otherwise it is -om.',
      },
      10,
      {
        type: 'tf',
        q: 'In standard Croatian you write "Pišem s olovkom."',
        answer: false,
        hint: 'Is the pencil your company, or your tool?',
        explanation:
          'A tool takes no s. The small word s means "together with" — and a pencil is not company.',
      },
      6,
      {
        type: 'transform',
        q: 'Ask a friend the question that this sentence answers.',
        from: 'Putujem vlakom.',
        answer: 'Čime putuješ?',
        accept: ['Čime ti putuješ?', 'Čime putujete?'],
        hint: 'Start with the question word for "by what?", and change the verb to "you".',
        explanation: 'Čime putuješ? — Vlakom.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Otvaram', 'vrata', 'ključom.'],
        wrong: 2,
        answer: 'ključem',
        hint: 'Look at the last sound of the dictionary form: is it hard or soft?',
        explanation: 'The dictionary form ends in č, a soft sound, so the ending is -em.',
      },
      3,
      {
        type: 'listen',
        audio: 'Na posao idem pješice.',
        q: 'How does the speaker get to work?',
        options: ['On foot', 'By tram', 'By car', 'By bike'],
        correct: 0,
        explanation: 'Na posao idem pješice. — pješice: on foot.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Can I pay in cash?"',
        words: ['Mogu', 'li', 'platiti', 'gotovinom?'],
        explanation: 'Mogu li platiti gotovinom? — li comes right after the first word.',
      },
      5,
      {
        type: 'transform',
        q: 'Now say HOW you go — by bus — instead of with whom.',
        from: 'Idem u školu s bratom.',
        answer: 'Idem u školu autobusom.',
        hint: 'A means of transport takes no small word in front — only the ending.',
        explanation: 'Idem u školu autobusom. — no s: the bus is the means, not company.',
      },
      {
        type: 'dictate',
        audio: 'Pišem pismo olovkom.',
        answer: 'Pišem pismo olovkom.',
        hint: 'Three words. The last one is the tool.',
        explanation: 'Pišem pismo olovkom. — I am writing a letter with a pencil.',
      },
    ],
  },

  // ══ Unit 16 ═══════════════════════════════════════════════════════════

  // ── instrumental-place ──
  'instrumental-place': {
    text: {
      kind: 'dialogue',
      title: 'Gdje je mačka?',
      lines: [
        {
          who: 'Iva',
          hr: 'Gdje je mačka? Nije u kuhinji.',
          en: 'Where is the cat? She is not in the kitchen.',
        },
        { who: 'Marko', hr: 'Je li pod stolom?', en: 'Is she under the table?' },
        {
          who: 'Iva',
          hr: 'Nije. I nije pred kućom — pred kućom je samo naš auto.',
          en: 'No. And she is not in front of the house — only our car is in front of the house.',
        },
        {
          who: 'Marko',
          hr: 'Vidim je! Spava pod krevetom.',
          en: 'I see her! She is sleeping under the bed.',
        },
        {
          who: 'Iva',
          hr: 'Odlično. A ti cijeli dan sjediš za računalom!',
          en: 'Great. And you sit at the computer all day!',
        },
        { who: 'Marko', hr: 'Istina. Idemo u grad?', en: 'True. Should we go into town?' },
        {
          who: 'Iva',
          hr: 'Idemo! Kuda idemo — parkom ili ulicom?',
          en: 'Let us go! Which way should we go — through the park or along the street?',
        },
        {
          who: 'Marko',
          hr: 'Idemo parkom. Park je lijep u proljeće.',
          en: 'Let us go through the park. The park is beautiful in spring.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is the cat, and what is in front of the house?',
          options: [
            'The cat is under the bed; the car is in front of the house',
            'The cat is under the table; the car is in front of the house',
            'The cat is in front of the house; the car is in town',
            'The cat is in the kitchen; nothing is in front of the house',
          ],
          correct: 0,
          hint: 'They look in three places before Marko sees her.',
          explanation:
            'She is not in the kitchen, not under the table and not in front of the house — she is asleep under the bed. The car is in front of the house.',
        },
        {
          q: 'Iva and Marko say "pod stolom", "pred kućom", "pod krevetom". Where have you met this ending before?',
          options: [
            'In "s bratom" and "vlakom" — it is the same case',
            'In "u kuhinji" — it is the "where" ending after u',
            'In "u grad" — it is the ending for movement',
            'Nowhere — it is only used for furniture',
          ],
          correct: 0,
          hint: 'Think of how you say who you go with, and what you travel by.',
          explanation:
            'After pod, pred, nad and za, a thing that IS in that place takes the instrumental: the same -om as in s bratom and vlakom.',
        },
        {
          type: 'type',
          q: 'Now you. Marko asks YOU: "Gdje je tvoja torba?" It is under the chair (stolica). Answer: Pod ____.',
          answer: 'stolicom',
          hint: 'A feminine word in -a takes the same ending as "kuća" does in the dialogue.',
          explanation: 'Pod stolicom. — stolica → stolicom.',
        },
        {
          type: 'type',
          q: 'Now you. Tell a friend that you are waiting in front of the hotel: Čekam pred ____. (hotel)',
          answer: 'hotelom',
          hint: 'A masculine word simply adds the ending — as "stol" and "krevet" do in the dialogue.',
          explanation: 'Čekam pred hotelom. — hotel → hotelom.',
        },
        {
          type: 'transform',
          q: 'Marko says "Idemo parkom." Say that you are going through the town (grad) instead.',
          from: 'Idemo parkom.',
          answer: 'Idemo gradom.',
          hint: 'The route takes the same ending, with no small word in front.',
          explanation:
            'Idemo gradom. — the way you go: the instrumental alone. It answers the question kuda?',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['pod stolom', 'under the table'],
          ['nad stolom', 'above the table'],
          ['pred kućom', 'in front of the house'],
          ['za kućom', 'behind the house'],
          ['za stolom', 'at the table'],
        ],
        explanation:
          'pod — under, nad — above, pred — in front of. Za is "behind" a building, and "at" a table or a desk.',
      },
      10,
      3,
      {
        type: 'sort',
        q: 'Is the thing already in that place, or is it on its way there?',
        groups: ['It is there', 'It is moving there'],
        items: [
          { hr: 'Knjiga je pod krevetom.', group: 0 },
          { hr: 'Stavljam knjigu pod krevet.', group: 1 },
          { hr: 'Ključ je pod tepihom.', group: 0 },
          { hr: 'Stavljam ključ pod tepih.', group: 1 },
          { hr: 'Mačka je pod stolom.', group: 0 },
          { hr: 'Mačka ide pod stol.', group: 1 },
        ],
        explanation:
          'Already there: the instrumental (pod krevetom). On its way there: the accusative (pod krevet) — the same pairing as u školi and u školu.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Čekam', 'te', 'pred', 'škola.'],
        wrong: 3,
        answer: 'školom',
        hint: 'You are standing there, not moving. The noun cannot keep its dictionary form after this small word.',
        explanation:
          'After pred, a place where you ARE takes the instrumental: a feminine word changes -a to -om.',
      },
      11,
      {
        type: 'listen',
        audio: 'Vrt je za kućom.',
        q: 'Where is the garden?',
        options: [
          'Behind the house',
          'In front of the house',
          'Above the house',
          'Inside the house',
        ],
        correct: 0,
        explanation: 'Vrt je za kućom. — za + the instrumental: behind the house.',
      },
      7,
      {
        type: 'transform',
        q: 'Now the bag is already there. Say where it is.',
        from: 'Stavljam torbu pod stolicu.',
        answer: 'Torba je pod stolicom.',
        hint: 'The bag becomes the subject, and the place takes the "it is there" ending.',
        explanation: 'Torba je pod stolicom. — it is there: the instrumental.',
      },
      {
        type: 'tf',
        q: '"Šetamo gradom" means "We are walking through the town" — with no small word before "gradom".',
        answer: true,
        hint: 'How does Croatian answer the question kuda?',
        explanation: 'True. The route is the instrumental on its own: gradom, parkom, obalom.',
      },
      13,
      {
        type: 'order',
        q: 'Put the words in order: "The whole family is sitting at the table."',
        words: ['Cijela', 'obitelj', 'sjedi', 'za', 'stolom.'],
        explanation: 'Cijela obitelj sjedi za stolom. — za stolom: at the table.',
      },
      4,
      {
        type: 'transform',
        q: 'Now you are driving the car there. Start with "Vozim auto".',
        from: 'Auto je pred kućom.',
        answer: 'Vozim auto pred kuću.',
        hint: 'Movement to a place takes the object form: a feminine word in -a ends in -u.',
        explanation: 'Vozim auto pred kuću. — it is moving there: the accusative.',
      },
      {
        type: 'dictate',
        audio: 'Mačka spava pod stolom.',
        answer: 'Mačka spava pod stolom.',
        hint: 'Four words. The first one has č in it.',
        explanation: 'Mačka spava pod stolom. — the cat is sleeping under the table.',
      },
    ],
  },

  // ── instrumental-pronouns ──
  'instrumental-pronouns': {
    text: {
      kind: 'dialogue',
      title: 'Hoćeš li ići sa mnom?',
      lines: [
        {
          who: 'Lana',
          hr: 'Večeras idem u kino. Hoćeš li ići sa mnom?',
          en: 'I am going to the movies tonight. Do you want to go with me?',
        },
        {
          who: 'Petar',
          hr: 'S tobom? Rado! Ide li i Ana s nama?',
          en: 'With you? Gladly! Is Ana going with us too?',
        },
        {
          who: 'Lana',
          hr: 'Ne ide. Ana večeras uči s Ivanom. Uvijek uči s njim.',
          en: 'She is not. Ana is studying with Ivan tonight. She always studies with him.',
        },
        { who: 'Petar', hr: 'A tvoja sestra?', en: 'And your sister?' },
        {
          who: 'Lana',
          hr: 'Ona ide s nama. Jučer sam razgovarala s njom.',
          en: 'She is going with us. I talked to her yesterday.',
        },
        {
          who: 'Petar',
          hr: 'Odlično. I moji prijatelji idu u kino. Možemo ići s njima.',
          en: 'Great. My friends are going to the movies too. We can go with them.',
        },
        {
          who: 'Lana',
          hr: 'Dobro, idemo s njima. Vidimo se pred kinom u osam!',
          en: 'Fine, let us go with them. See you in front of the movie theater at eight!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is going to the movies tonight?',
          options: [
            'Lana, Petar, Lana’s sister and Petar’s friends — but not Ana',
            'Lana, Petar, Ana and Ivan',
            'Only Lana and Petar',
            'Lana, her sister and Ana — but not Petar',
          ],
          correct: 0,
          hint: 'One person is busy studying with someone else.',
          explanation:
            'Lana, Petar, Lana’s sister and Petar’s friends are going. Ana is studying with Ivan.',
        },
        {
          q: 'Lana says "sa mnom", but Petar answers "s tobom". Why is the small word "sa" once and "s" the next time?',
          options: [
            'Before "mnom" an extra a is added, because s + mn is too hard to say',
            'Because Lana is a woman and Petar is a man',
            'Because "sa" is used in questions and "s" in answers',
            'Because "sa" is more polite',
          ],
          correct: 0,
          hint: 'You have seen the same thing in "sa sestrom".',
          explanation:
            'It is only about being easy to say: sa mnom, like sa sestrom. Everywhere else it is plain s: s tobom, s nama.',
        },
        {
          type: 'type',
          q: 'Now you. A friend asks YOU: "Ideš li u kino s Ivanom?" You are. Answer without his name: Idem s ____.',
          answer: 'njim',
          accept: ['njime'],
          hint: 'Lana uses this word when she says that Ana always studies with Ivan.',
          explanation: 'Idem s njim. — with him. After a small word like s, "he" starts with nj-.',
        },
        {
          type: 'type',
          q: 'Now you. Ana and Ivan are going for a coffee. Say that you are going with them: Idem s ____.',
          answer: 'njima',
          hint: 'Petar uses this word about his friends.',
          explanation: 'Idem s njima. — with them.',
        },
        {
          type: 'transform',
          q: 'Say it from Petar’s side: "Lana is going to the movies with me."',
          from: 'Lana ide u kino s Petrom.',
          answer: 'Lana ide u kino sa mnom.',
          hint: 'In front of this pronoun the small word needs an extra vowel — as in Lana’s first line.',
          explanation: 'Lana ide u kino sa mnom. — with me: sa mnom.',
        },
      ],
    },
    mix: [
      8,
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Idem', 'u', 'kino', 's', 'on.'],
        wrong: 4,
        answer: 'njim',
        hint: 'After a small word like s, the pronoun cannot keep its subject form.',
        explanation: 'After s the pronoun changes, and for "he" it starts with nj-.',
      },
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['sa mnom', 'with me'],
          ['s tobom', 'with you'],
          ['s njim', 'with him'],
          ['s njom', 'with her'],
          ['s nama', 'with us'],
        ],
        explanation: 'After s, he and she start with nj-. And before mnom the small word is sa.',
      },
      9,
      {
        type: 'sort',
        q: 'Is the speaker with one person, or with more than one?',
        groups: ['With one person', 'With more than one'],
        items: [
          { hr: 's njom', group: 0 },
          { hr: 's njima', group: 1 },
          { hr: 'sa mnom', group: 0 },
          { hr: 's nama', group: 1 },
          { hr: 's tobom', group: 0 },
          { hr: 's djecom', group: 1 },
        ],
        explanation:
          'One person: with her, with me, with you. More than one: with them, with us, with the children.',
      },
      5,
      {
        type: 'transform',
        q: 'Now say it politely, to a person you call "vi".',
        from: 'Rado idem s tobom.',
        answer: 'Rado idem s vama.',
        accept: ['Rado idem s Vama.'],
        hint: 'Only the pronoun changes. The polite "you" is the same word as "you" for several people.',
        explanation: 'Rado idem s vama. — s vama: with you, politely or to several people.',
      },
      4,
      {
        type: 'listen',
        audio: 'S kim ideš na more?',
        q: 'What does the speaker want to know?',
        options: [
          'Who you are going to the seaside with',
          'When you are going to the seaside',
          'How you are traveling to the seaside',
          'Why you are going to the seaside',
        ],
        correct: 0,
        explanation: 'S kim ideš na more? — s kim: with whom?',
      },
      13,
      {
        type: 'tf',
        q: '"Preda mnom" means "in front of me".',
        answer: true,
        hint: 'Pred, like s, gets an extra a before this pronoun.',
        explanation: 'True. pred + mnom → preda mnom, just as s + mnom → sa mnom.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I talk to her every day."',
        words: ['Svaki', 'dan', 'razgovaram', 's', 'njom.'],
        explanation: 'Svaki dan razgovaram s njom. — razgovarati s: to talk to, with.',
      },
      12,
      {
        type: 'transform',
        q: 'A friend says this to you. Say the same thing back from your side: "You are going with me."',
        from: 'Idem s tobom.',
        answer: 'Ideš sa mnom.',
        accept: ['Ti ideš sa mnom.'],
        hint: 'The verb takes the "you" ending, and the pronoun becomes "me" — with the longer small word in front.',
        explanation: 'Ideš sa mnom. — you are going with me.',
      },
      {
        type: 'dictate',
        audio: 'Ljeti idemo na more s djecom.',
        answer: 'Ljeti idemo na more s djecom.',
        hint: 'Six words. The last word means "the children", with the ending for company.',
        explanation:
          'Ljeti idemo na more s djecom. — in summer we go to the seaside with the children.',
      },
    ],
  },

  // ── genitive-intro ──
  'genitive-intro': {
    text: {
      kind: 'dialogue',
      title: 'U kavani',
      lines: [
        { who: 'Konobar', hr: 'Dobar dan! Izvolite?', en: 'Good day! What would you like?' },
        {
          who: 'Ana',
          hr: 'Dobar dan. Molim šalicu kave i čašu vode.',
          en: 'Good day. A cup of coffee and a glass of water, please.',
        },
        {
          who: 'Konobar',
          hr: 'Kavu s mlijekom ili bez mlijeka?',
          en: 'Coffee with milk or without milk?',
        },
        {
          who: 'Ana',
          hr: 'Bez mlijeka i bez šećera, molim.',
          en: 'Without milk and without sugar, please.',
        },
        {
          who: 'Konobar',
          hr: 'Izvolite. Jeste li vi iz Zagreba?',
          en: 'Here you are. Are you from Zagreb?',
        },
        {
          who: 'Ana',
          hr: 'Nisam. Ja sam iz Kanade, ali moja mama je iz Hrvatske.',
          en: 'I am not. I am from Canada, but my mom is from Croatia.',
        },
        {
          who: 'Ana',
          hr: 'Je li ovo torba moje sestre? Jučer je bila ovdje.',
          en: "Is this my sister's bag? She was here yesterday.",
        },
        {
          who: 'Konobar',
          hr: 'Jest, to je torba vaše sestre. Izvolite!',
          en: "It is, that is your sister's bag. Here you are!",
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what exactly does Ana order, and what does she get back?',
          options: [
            'A cup of coffee without milk or sugar and a glass of water; her sister’s bag',
            'A cup of coffee with milk and a glass of water; her own bag',
            'A cup of tea without sugar; her sister’s bag',
            'A glass of milk and a cup of coffee with sugar; her mom’s bag',
          ],
          correct: 0,
          hint: 'She says "bez" twice. And somebody left something in the café yesterday.',
          explanation:
            'Ana orders a cup of coffee — no milk, no sugar — and a glass of water. The waiter gives her the bag her sister left there.',
        },
        {
          q: 'Kava, voda, Kanada, Hrvatska and sestra all appear with a new ending: šalicu kave, čašu vode, iz Kanade, iz Hrvatske, torba moje sestre. What do the five have in common?',
          options: [
            'Each answers "of what?", "from where?" or "whose?" — and a feminine word changes -a to -e',
            'Each is the object of a verb',
            'Each is in the plural',
            'Each says where something is',
          ],
          correct: 0,
          hint: 'Try putting the English word "of" or "from" in front of each one.',
          explanation:
            'A cup OF coffee, FROM Canada, the bag OF my sister: this is the genitive. A feminine word in -a takes -e.',
        },
        {
          type: 'type',
          q: 'Now you. The waiter asks where YOU are from. You are from Italy (Italija): Ja sam iz ____.',
          answer: 'Italije',
          hint: 'A feminine word in -a: do what Ana does with Canada and Croatia.',
          explanation: 'Ja sam iz Italije. — after iz comes the genitive: Italija → Italije.',
        },
        {
          type: 'type',
          q: 'Now you. Order a glass of juice (sok): Molim čašu ____.',
          answer: 'soka',
          hint: 'A masculine word adds the ending you hear in "bez šećera".',
          explanation: 'Molim čašu soka. — masculine and neuter words take -a: sok → soka.',
        },
        {
          type: 'transform',
          q: 'Now the bag belongs to your brother (brat), not your sister. "Of my" for a man is "moga".',
          from: 'Ovo je torba moje sestre.',
          answer: 'Ovo je torba moga brata.',
          accept: [
            'Ovo je torba mog brata.',
            'Ovo je torba mojeg brata.',
            'Ovo je torba mojega brata.',
          ],
          hint: 'Put "moga" where "moje" was, and give the masculine owner the ending you hear in "bez šećera".',
          explanation:
            'Ovo je torba moga brata. — the owner comes second, in the genitive: brat → brata.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['čaša vode', 'a glass of water'],
          ['šalica kave', 'a cup of coffee'],
          ['kava bez šećera', 'coffee without sugar'],
          ['centar grada', 'the center of the town'],
          ['kuća moje bake', "my grandmother's house"],
        ],
        explanation:
          'Where English says "of", "without" or uses the apostrophe-s, Croatian changes the ending of the second noun: the genitive.',
      },
      4,
      {
        type: 'sort',
        q: 'Which job is the genitive doing: naming the owner, naming what is measured, or following a small word such as iz or bez?',
        groups: ['The owner', 'What is measured', 'After a small word'],
        items: [
          { hr: 'knjiga moje mame', group: 0 },
          { hr: 'čaša vode', group: 1 },
          { hr: 'iz Zagreba', group: 2 },
          { hr: 'kuća moje bake', group: 0 },
          { hr: 'malo šećera', group: 1 },
          { hr: 'bez vode', group: 2 },
          { hr: 'kilogram jabuka', group: 1 },
          { hr: 'poslije posla', group: 2 },
        ],
        explanation:
          'Three jobs, one case: whose it is (knjiga moje mame), how much of something (čaša vode, malo šećera), and after iz, bez, poslije and other small words.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moji', 'roditelji', 'su', 'iz', 'Hrvatskoj.'],
        wrong: 4,
        answer: 'Hrvatske',
        hint: 'After iz the ending is not the "where" ending of "u Hrvatskoj".',
        explanation:
          'Iz always takes the genitive. The -oj ending says where you are, not where you are from.',
      },
      {
        type: 'tf',
        q: '"Iz Hrvatske" and "u Hrvatskoj" mean the same thing.',
        answer: false,
        hint: 'One is where you come from, the other is where you are.',
        explanation: 'Iz Hrvatske — from Croatia (genitive). U Hrvatskoj — in Croatia (locative).',
      },
      1,
      5,
      {
        type: 'order',
        q: 'Put the words in order: "This is my grandmother’s house."',
        words: ['Ovo', 'je', 'kuća', 'moje', 'bake.'],
        explanation: 'Ovo je kuća moje bake. — the thing first, the owner second.',
      },
      7,
      {
        type: 'listen',
        audio: 'Nema mlijeka u hladnjaku.',
        q: 'What is the problem?',
        options: [
          'There is no milk',
          'The milk is cold',
          'The fridge is full',
          'There is no fridge',
        ],
        correct: 0,
        explanation: 'Nema mlijeka u hladnjaku. — what is missing after nema is in the genitive.',
      },
      {
        type: 'transform',
        q: 'Say the opposite: without honey.',
        from: 'Pijem čaj s medom.',
        answer: 'Pijem čaj bez meda.',
        hint: 'The opposite of s is bez — and after bez a masculine word ends in -a.',
        explanation: 'Pijem čaj bez meda. — s takes the instrumental, bez takes the genitive.',
      },
      2,
      {
        type: 'transform',
        q: 'Now the car belongs to "moja teta" (my aunt).',
        from: 'Ovo je auto moje sestre.',
        answer: 'Ovo je auto moje tete.',
        hint: 'Only the owner changes — and a feminine owner in -a takes the ending the sister has.',
        explanation: 'Ovo je auto moje tete. — teta → tete.',
      },
      11,
      {
        type: 'dictate',
        audio: 'Molim čašu vode.',
        answer: 'Molim čašu vode.',
        hint: 'Three words. The glass is what you ask for; the last word says what is in it.',
        explanation: 'Molim čašu vode. — a glass of water, please.',
      },
    ],
  },

  // ── genitive-partitive ──
  'genitive-partitive': {
    text: {
      kind: 'dialogue',
      title: 'Na ručku',
      lines: [
        { who: 'Baka', hr: 'Hoćeš li juhe, Luka?', en: 'Would you like some soup, Luka?' },
        {
          who: 'Luka',
          hr: 'Hoću, hvala. Malo juhe, molim.',
          en: 'I would, thank you. A little soup, please.',
        },
        {
          who: 'Baka',
          hr: 'A kruha? Ima i sira.',
          en: 'And some bread? There is some cheese too.',
        },
        {
          who: 'Luka',
          hr: 'Molim krišku kruha i malo sira.',
          en: 'A slice of bread and a little cheese, please.',
        },
        {
          who: 'Baka',
          hr: 'Što ćeš piti? Čašu soka ili čašu vode?',
          en: 'What will you drink? A glass of juice or a glass of water?',
        },
        {
          who: 'Luka',
          hr: 'Čašu vode, molim. Jučer sam popio previše soka.',
          en: 'A glass of water, please. Yesterday I drank too much juice.',
        },
        {
          who: 'Baka',
          hr: 'Poslije ručka imamo tortu. Hoćeš li komad torte?',
          en: 'After lunch we have cake. Would you like a piece of cake?',
        },
        {
          who: 'Luka',
          hr: 'Naravno! Veliki komad torte, molim — i šalicu kave.',
          en: 'Of course! A big piece of cake, please — and a cup of coffee.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Luka have at grandma’s lunch?',
          options: [
            'A little soup, a slice of bread, a little cheese and a glass of water — then cake and coffee',
            'A plate of soup, a slice of bread and a glass of juice — then cake',
            'Bread and cheese and a glass of juice — no soup and no cake',
            'A little soup and a glass of water — he says no to the cake',
          ],
          correct: 0,
          hint: 'He says no to one drink, because of yesterday.',
          explanation:
            'A little soup, a slice of bread with a little cheese, a glass of water — and after lunch a big piece of cake and a cup of coffee.',
        },
        {
          q: 'Grandma asks "Hoćeš li juhe?" — with no word like "čašu" or "malo" in front. What does the form "juhe" on its own tell you?',
          options: [
            'She means "some soup" — an amount, not counted',
            'She means "the whole pot of soup"',
            'She is talking about several soups',
            'She is asking whether Luka likes soup in general',
          ],
          correct: 0,
          hint: 'It is the same form as after "malo" in Luka’s answer.',
          explanation:
            'The genitive on its own means "some": Hoćeš li juhe? — Would you like some soup? This is how food and drink are offered at home.',
        },
        {
          type: 'type',
          q: 'Now you. Grandma asks YOU: "Što ćeš piti?" You want a glass of milk (mlijeko). Answer: Čašu ____, molim.',
          answer: 'mlijeka',
          hint: 'What is in the glass goes into the "of" form. A neuter word takes -a.',
          explanation: 'Čašu mlijeka, molim. — mlijeko → mlijeka.',
        },
        {
          type: 'type',
          q: 'Now you. You want only a little rice (riža): Malo ____, molim.',
          answer: 'riže',
          hint: 'A feminine word in -a: the same change as in "malo juhe".',
          explanation: 'Malo riže, molim. — riža → riže.',
        },
        {
          type: 'transform',
          q: 'Say that you are drinking a glass of it.',
          from: 'Pijem vodu.',
          answer: 'Pijem čašu vode.',
          hint: 'The glass (čaša) becomes the object and takes the object ending; the water goes into the "of" form.',
          explanation:
            'Pijem čašu vode. — the container takes the ending the sentence needs (čašu); what is in it stays in the genitive (vode).',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['kriška sira', 'a slice of cheese'],
          ['boca soka', 'a bottle of juice'],
          ['tanjur riže', 'a plate of rice'],
          ['šalica čaja', 'a cup of tea'],
          ['litra vode', 'a liter of water'],
        ],
        explanation: 'The container or piece comes first; what it holds follows in the genitive.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Would you like some coffee?"',
        words: ['Hoćeš', 'li', 'kave?'],
        explanation: 'Hoćeš li kave? — the genitive on its own means "some".',
      },
      9,
      6,
      {
        type: 'sort',
        q: 'Does the speaker mean some of it — an amount — or the whole thing?',
        groups: ['Some of it', 'The whole thing'],
        items: [
          { hr: 'Kupio sam kruha.', group: 0 },
          { hr: 'Kupio sam kruh.', group: 1 },
          { hr: 'Popio sam vode.', group: 0 },
          { hr: 'Popio sam vodu.', group: 1 },
          { hr: 'Kupila sam mlijeka.', group: 0 },
          { hr: 'Kupila sam mlijeko.', group: 1 },
        ],
        explanation:
          'The genitive (kruha, vode, mlijeka) is an amount: some. The accusative (kruh, vodu, mlijeko) is the whole thing: the loaf, the water, the milk.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Pijem', 'čaša', 'vode.'],
        wrong: 1,
        answer: 'čašu',
        hint: 'The container is what you drink, so it needs the object ending.',
        explanation:
          'The container is an ordinary noun: as the object of pijem it takes the accusative.',
      },
      {
        type: 'tf',
        q: 'In "Na stolu je čaša vode" and "Pijem čašu vode", the word "vode" stays the same.',
        answer: true,
        hint: 'Which of the two nouns takes the ending the sentence needs?',
        explanation:
          'True. Only the container changes (čaša, čašu). What is in it stays in the genitive every time.',
      },
      10,
      {
        type: 'transform',
        q: 'The speaker drank only some of the juice, not all of it. Change the sentence.',
        from: 'Popila sam sok.',
        answer: 'Popila sam soka.',
        accept: ['Popila sam malo soka.'],
        hint: 'For "some", the drink goes into the "of" form: a masculine word adds -a.',
        explanation: 'Popila sam soka. — some juice. Popila sam sok. — the juice, all of it.',
      },
      1,
      {
        type: 'listen',
        audio: 'Na stolu je boca vina.',
        q: 'What is on the table?',
        options: ['A bottle of wine', 'A glass of wine', 'A bottle of water', 'A piece of cake'],
        correct: 0,
        explanation: 'Na stolu je boca vina. — boca: a bottle; vina: of wine.',
      },
      11,
      {
        type: 'transform',
        q: 'Now there is too much of it. Use "previše".',
        from: 'Jedem šećer.',
        answer: 'Jedem previše šećera.',
        hint: 'After an amount word, the thing goes into the "of" form: a masculine word adds -a.',
        explanation:
          'Jedem previše šećera. — malo, puno, dosta and previše are all followed by the genitive.',
      },
      7,
      {
        type: 'dictate',
        audio: 'Molim vas, čašu vode i šalicu čaja.',
        answer: 'Molim vas, čašu vode i šalicu čaja.',
        hint: 'Seven words, with a comma after the second. Both containers have the object ending.',
        explanation:
          'Molim vas, čašu vode i šalicu čaja. — a glass of water and a cup of tea, please.',
      },
    ],
  },

  // ── nemati-genitive ──
  'nemati-genitive': {
    text: {
      kind: 'dialogue',
      title: 'Nema mlijeka!',
      lines: [
        {
          who: 'Ana',
          hr: 'Ima li mlijeka? Želim kavu s mlijekom.',
          en: 'Is there any milk? I want coffee with milk.',
        },
        {
          who: 'Marko',
          hr: 'Nema. I kruha nema.',
          en: 'There is none. And there is no bread either.',
        },
        {
          who: 'Ana',
          hr: 'Idem u dućan. Imaš li novca?',
          en: 'I am going to the store. Do you have any money?',
        },
        {
          who: 'Marko',
          hr: 'Nemam novca, ali imam karticu.',
          en: 'I have no money, but I have a card.',
        },
        {
          who: 'Ana',
          hr: 'Dobro. A Ivan? Ide li on sa mnom?',
          en: 'Fine. And Ivan? Is he coming with me?',
        },
        {
          who: 'Marko',
          hr: 'Nema Ivana. Otišao je na posao.',
          en: 'Ivan is not here. He has gone to work.',
        },
        {
          who: 'Ana',
          hr: 'Jučer u dućanu nije bilo kruha.',
          en: 'Yesterday there was no bread in the store.',
        },
        { who: 'Marko', hr: 'Nemam pojma zašto!', en: 'I have no idea why!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is missing at home, and how can Ana pay in the store?',
          options: [
            'There is no milk and no bread; Marko has no money, but he has a card',
            'There is no coffee; Marko gives her money',
            'There is no milk; Ivan will pay',
            'There is no bread and no card; Ana pays in cash',
          ],
          correct: 0,
          hint: 'Two things are missing in the kitchen, and one thing is missing in Marko’s pocket.',
          explanation:
            'There is no milk and no bread. Marko has no money, but he does have a card.',
        },
        {
          q: 'Marko says "Nema Ivana." What does it mean, and why "Ivana"?',
          options: [
            'Ivan is not here — whatever is missing takes the genitive, even a person',
            'Ivana, a woman, is not here',
            'Ivan has nothing — Ivana is the object',
            'Ivan does not want to — Ivana is a polite form',
          ],
          correct: 0,
          hint: 'Compare it with the two things that are missing in the kitchen.',
          explanation:
            'Whatever is not there goes into the genitive: mlijeko → mlijeka, kruh → kruha, Ivan → Ivana. For a person it means "he is not here".',
        },
        {
          type: 'type',
          q: 'Now you. A guest wants coffee, but there is none in the house. Tell him: Nema ____. (kava)',
          answer: 'kave',
          hint: 'What is missing takes the "of" form. A feminine word changes -a to -e.',
          explanation: 'Nema kave. — there is no coffee.',
        },
        {
          type: 'type',
          q: 'Now you. A friend invites you for a coffee, but you have no time (vrijeme → vremen-): Nemam ____.',
          answer: 'vremena',
          hint: 'You have known this as a fixed phrase since the lesson on "ne". Add the neuter genitive ending to the stem.',
          explanation: 'Nemam vremena. — vrijeme grows to vremen- and takes -a.',
        },
        {
          type: 'transform',
          q: 'Say it about yesterday — as Ana does about the bread in the store.',
          from: 'Nema mlijeka.',
          answer: 'Nije bilo mlijeka.',
          accept: ['Jučer nije bilo mlijeka.', 'Mlijeka nije bilo.'],
          hint: 'In the past, nema becomes two words, and the second is always the neuter form.',
          explanation: 'Nije bilo mlijeka. — always bilo, whatever is missing.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Nema kruha.', 'There is no bread.'],
          ['Ima kruha.', 'There is some bread.'],
          ['Nije bilo kruha.', 'There was no bread.'],
          ['Neće biti kruha.', 'There will be no bread.'],
          ['Kruh nije dobar.', 'The bread is not good.'],
        ],
        explanation:
          'nema — now, nije bilo — in the past, neće biti — in the future. Nije on its own only describes bread that is there.',
      },
      8,
      {
        type: 'sort',
        q: 'Is the thing not there at all, or is it there and only being described?',
        groups: ['It is not there at all', 'It is there — it is just not like that'],
        items: [
          { hr: 'Nema vode.', group: 0 },
          { hr: 'Voda nije hladna.', group: 1 },
          { hr: 'Nema autobusa.', group: 0 },
          { hr: 'Autobus nije nov.', group: 1 },
          { hr: 'Nema sira.', group: 0 },
          { hr: 'Sir nije skup.', group: 1 },
        ],
        explanation:
          'Nema + the genitive: it is missing. Nije: it is there, and the sentence says what it is not like.',
      },
      9,
      {
        type: 'tf',
        q: '"Nije kruha." is a correct way to say "There is no bread."',
        answer: false,
        hint: 'Which word says that something is not there at all?',
        explanation:
          'For something that is not there, use nema: Nema kruha. Nije only describes: Kruh nije dobar.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['U', 'hladnjaku', 'nema', 'sok.'],
        wrong: 3,
        answer: 'soka',
        hint: 'What is missing cannot stay in its dictionary form.',
        explanation: 'After nema the missing thing is in the genitive: a masculine word adds -a.',
      },
      10,
      {
        type: 'listen',
        audio: 'Nemam auto, pa idem tramvajem.',
        q: 'How does the speaker get around, and why?',
        options: [
          'By tram, because they have no car',
          'By car, because there is no tram',
          'On foot, because they have no money',
          'By tram, because the car is new',
        ],
        correct: 0,
        explanation: 'Nemam auto, pa idem tramvajem. — I do not have a car, so I go by tram.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "I have no idea where the stop is."',
        words: ['Nemam', 'pojma', 'gdje', 'je', 'stanica.'],
        explanation:
          'Nemam pojma gdje je stanica. — nemam pojma is a fixed phrase: I have no idea.',
      },
      11,
      {
        type: 'transform',
        q: 'Say it about tomorrow.',
        from: 'Nema struje.',
        answer: 'Neće biti struje.',
        accept: ['Sutra neće biti struje.'],
        hint: 'In the future, nema becomes two words: "will not" and "be".',
        explanation: 'Neće biti struje. — there will be no electricity.',
      },
      5,
      {
        type: 'transform',
        q: 'Say the same with "nema".',
        from: 'Ivan nije ovdje.',
        answer: 'Nema Ivana.',
        accept: ['Ivana nema.'],
        hint: 'The person who is missing goes into the genitive — a masculine name adds -a.',
        explanation:
          'Nema Ivana. — Ivan is not here. For a person, the two sentences mean the same.',
      },
      {
        type: 'dictate',
        audio: 'Danas nemam vremena za kavu.',
        answer: 'Danas nemam vremena za kavu.',
        hint: 'Five words. "I do not have" is written as one word.',
        explanation: 'Danas nemam vremena za kavu. — I have no time for coffee today.',
      },
    ],
  },

  // ══ Unit 17 ═══════════════════════════════════════════════════════════

  // ── genitive-prepositions ──
  'genitive-prepositions': {
    text: {
      kind: 'dialogue',
      title: 'Gdje je pošta?',
      lines: [
        {
          who: 'Turist',
          hr: 'Oprostite, gdje je pošta? Je li blizu?',
          en: 'Excuse me, where is the post office? Is it near?',
        },
        {
          who: 'Žena',
          hr: 'Jest. Pošta je između banke i ljekarne.',
          en: 'It is. The post office is between the bank and the pharmacy.',
        },
        { who: 'Turist', hr: 'A kako mogu doći do banke?', en: 'And how can I get to the bank?' },
        {
          who: 'Žena',
          hr: 'Banka je iza hotela, pokraj kina.',
          en: 'The bank is behind the hotel, beside the movie theater.',
        },
        {
          who: 'Turist',
          hr: 'Hvala! Jeste li vi iz Zagreba?',
          en: 'Thank you! Are you from Zagreb?',
        },
        {
          who: 'Žena',
          hr: 'Nisam, ja sam iz Splita. Ovdje sam kod sestre.',
          en: "I am not, I am from Split. I am staying at my sister's here.",
        },
        {
          who: 'Turist',
          hr: 'Ja sam iz Kanade. Sutra putujem od Zagreba do Splita — vlakom, bez auta.',
          en: 'I am from Canada. Tomorrow I am traveling from Zagreb to Split — by train, without a car.',
        },
        { who: 'Žena', hr: 'Sretan put!', en: 'Have a good trip!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is the post office, and why is the woman in Zagreb?',
          options: [
            'Between the bank and the pharmacy; she is staying at her sister’s',
            'Behind the hotel; she lives in Zagreb',
            'Beside the movies; she is traveling to Split',
            'Between the bank and the hotel; she works at the post office',
          ],
          correct: 0,
          hint: 'The post office has a neighbor on each side. And the woman is not from Zagreb.',
          explanation:
            'The post office is between the bank and the pharmacy. The woman is from Split and is staying at her sister’s.',
        },
        {
          q: 'The woman says "Ovdje sam kod sestre." What does kod + a person tell you?',
          options: [
            'She is at that person’s home',
            'She is walking together with that person',
            'She got something from that person',
            'She lives near that person',
          ],
          correct: 0,
          hint: 'She is from Split, and she is in Zagreb only for a while. Where does she sleep?',
          explanation:
            'Kod + a person means at their place: kod sestre — at my sister’s. Like the other small words in this dialogue, kod takes the genitive: sestra → sestre.',
        },
        {
          type: 'type',
          q: 'Now you. The tourist asks YOU: "Odakle ste?" You are from Rijeka. Answer: Ja sam iz ____.',
          answer: 'Rijeke',
          hint: 'After iz comes the genitive. A feminine name in -a changes like "Kanada" in the dialogue.',
          explanation: 'Ja sam iz Rijeke. — Rijeka → Rijeke.',
        },
        {
          type: 'type',
          q: 'Now you. Your hotel is near the sea (more). Say so: Hotel je blizu ____.',
          answer: 'mora',
          hint: 'Blizu takes the genitive too. A neuter word takes -a.',
          explanation: 'Hotel je blizu mora. — more → mora.',
        },
        {
          type: 'transform',
          q: 'Change the journey: from Split to Osijek.',
          from: 'Putujem od Zagreba do Splita.',
          answer: 'Putujem od Splita do Osijeka.',
          hint: 'After od and after do, each town takes the genitive ending -a.',
          explanation:
            'Putujem od Splita do Osijeka. — od … do …: from … to …, both with the genitive.',
        },
      ],
    },
    mix: [
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Pismo', 'je', 'iz', 'mame.'],
        wrong: 2,
        answer: 'od',
        hint: 'Mom is a person, not a place you can come out of.',
        explanation: 'Iz is for places; from a person takes a different small word.',
      },
      9,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['ispred škole', 'in front of the school'],
          ['iza škole', 'behind the school'],
          ['iznad škole', 'above the school'],
          ['pokraj škole', 'beside the school'],
          ['oko škole', 'around the school'],
        ],
        explanation: 'All five small words take the genitive: škola → škole.',
      },
      8,
      {
        type: 'sort',
        q: 'You are coming back from there. Which "from" does the place need — iz (you were IN it, with u) or s (you were AT it, with na)?',
        groups: ['iz …', 's …'],
        items: [
          { hr: 'škole', group: 0 },
          { hr: 'plaže', group: 1 },
          { hr: 'banke', group: 0 },
          { hr: 'koncerta', group: 1 },
          { hr: 'Splita', group: 0 },
          { hr: 'otoka', group: 1 },
        ],
        explanation:
          'u školi → iz škole, u banci → iz banke, u Splitu → iz Splita. na plaži → s plaže, na koncertu → s koncerta, na otoku → s otoka.',
      },
      2,
      10,
      {
        type: 'listen',
        audio: 'Ne idemo na plažu zbog kiše.',
        q: 'Why are they not going to the beach?',
        options: [
          'Because of the rain',
          'Because of work',
          'Because it is too far',
          'Because they have no car',
        ],
        correct: 0,
        explanation: 'Ne idemo na plažu zbog kiše. — zbog: because of; kiša → kiše.',
      },
      7,
      {
        type: 'tf',
        q: 'After "kod", the word for the person or place is in the genitive: kod kuće, kod Ane.',
        answer: true,
        hint: 'Look at the endings: kuća → kuće, Ana → Ane.',
        explanation:
          "True. kod always takes the genitive: kod kuće (at home), kod Ane (at Ana's), kod liječnika (at the doctor's).",
      },
      {
        type: 'transform',
        q: 'Now you are coming back from there. Start with "Vraćam se".',
        from: 'Idem u trgovinu.',
        answer: 'Vraćam se iz trgovine.',
        hint: 'You were IN the store (u), so you come OUT of it — and the store takes the genitive.',
        explanation: 'Vraćam se iz trgovine. — u trgovinu, u trgovini, iz trgovine.',
      },
      15,
      {
        type: 'order',
        q: 'Put the words in order: "I come back from work at six."',
        words: ['Vraćam', 'se', 's', 'posla', 'u', 'šest.'],
        explanation: 'Vraćam se s posla u šest. — na poslu → s posla.',
      },
      12,
      {
        type: 'transform',
        q: 'Say the same with "ispred" instead of "pred".',
        from: 'Auto je pred kućom.',
        answer: 'Auto je ispred kuće.',
        hint: 'Ispred does the same job as pred, but it takes the genitive.',
        explanation: 'Auto je ispred kuće. — pred kućom and ispred kuće mean the same.',
      },
      17,
      {
        type: 'dictate',
        audio: 'Radim od ponedjeljka do petka.',
        answer: 'Radim od ponedjeljka do petka.',
        hint: 'Five words. Two days of the week, each with the ending -a.',
        explanation: 'Radim od ponedjeljka do petka. — I work from Monday to Friday.',
      },
    ],
  },

  // ── genitive-pronouns ──
  'genitive-pronouns': {
    text: {
      kind: 'dialogue',
      title: 'Zabava kod mene',
      lines: [
        {
          who: 'Maja',
          hr: 'Večeras je zabava kod mene. Dolaziš li?',
          en: 'There is a party at my place tonight. Are you coming?',
        },
        {
          who: 'Ivan',
          hr: 'Naravno! Bez mene nema zabave.',
          en: 'Of course! There is no party without me.',
        },
        {
          who: 'Maja',
          hr: 'A Ana? Danas je nema na poslu.',
          en: 'And Ana? She is not at work today.',
        },
        {
          who: 'Ivan',
          hr: 'Bolesna je. Jučer sam bio kod nje. Ali Marko i Luka dolaze.',
          en: 'She is sick. I was at her place yesterday. But Marko and Luka are coming.',
        },
        {
          who: 'Maja',
          hr: 'Odlično. Bez njih nema glazbe!',
          en: 'Great. There is no music without them!',
        },
        {
          who: 'Ivan',
          hr: 'Marko stanuje u centru. Stanuješ li ti blizu njega?',
          en: 'Marko lives in the center. Do you live near him?',
        },
        {
          who: 'Maja',
          hr: 'Da, blizu njega. On do mene dolazi pješice.',
          en: 'Yes, near him. He comes to my place on foot.',
        },
        {
          who: 'Ivan',
          hr: 'Dobro. A sutra ste svi kod nas na ručku!',
          en: 'Good. And tomorrow you are all at our place for lunch!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is the party tonight, and who is not coming?',
          options: [
            'At Maja’s place; Ana is not coming because she is sick',
            'At Ivan’s place; Marko is not coming',
            'At Marko’s place; Ana and Luka are not coming',
            'At Maja’s place; everybody is coming',
          ],
          correct: 0,
          hint: 'One person was not at work today.',
          explanation: 'The party is at Maja’s. Ana is sick; Ivan, Marko and Luka are coming.',
        },
        {
          q: 'Maja says "Danas je nema na poslu." What is the word "je" doing here?',
          options: [
            'It means "her" — Ana is the one who is missing',
            'It is the verb "is"',
            'It means "it" — the job',
            'It turns the sentence into a question',
          ],
          correct: 0,
          hint: 'After nema, whatever is missing is in the genitive — also when it is a short pronoun.',
          explanation:
            'With nema, a person who is missing becomes a short pronoun: for Ana it is the short form of "her". Like all short words it stands second: Danas je nema.',
        },
        {
          type: 'type',
          q: 'Now you. A friend asks YOU: "Ideš li na more bez Marka?" You are not. Answer without his name: Ne idem bez ____.',
          answer: 'njega',
          hint: 'Ivan uses this word when he asks Maja where she lives.',
          explanation: 'Ne idem bez njega. — after bez, kod, od, blizu and do comes the long form.',
        },
        {
          type: 'type',
          q: 'Now you. Marko and Luka are away. Say that they are not here, with the short word: Nema ____.',
          answer: 'ih',
          hint: 'The short word for "them" is the one you already use in "Vidim ___."',
          explanation:
            'Nema ih. — they are not here. The short forms are the same as in the accusative.',
        },
        {
          type: 'transform',
          q: 'Say it with a pronoun instead of the name.',
          from: 'Stanujem blizu Ane.',
          answer: 'Stanujem blizu nje.',
          hint: 'Ivan uses the form you need when he says where he was yesterday. It is NOT the "nju" of "Vidim nju".',
          explanation:
            'Stanujem blizu nje. — the one pronoun that differs: accusative nju, genitive nje.',
        },
      ],
    },
    mix: [
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Večeras', 'smo', 'kod', 'me.'],
        wrong: 3,
        answer: 'mene',
        hint: 'After a small word like kod, a short form cannot stand.',
        explanation: 'After kod, bez, od, do and blizu the pronoun takes its long form.',
      },
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['kod mene', 'at my place'],
          ['bez tebe', 'without you'],
          ['do mene', 'to my place'],
          ['od mene', 'from me'],
          ['kod koga?', 'at whose place?'],
        ],
        explanation:
          'After these small words the pronoun is always the long form: mene, tebe — and koga for "whom".',
      },
      {
        type: 'transform',
        q: 'Lunch is not at my place — it is at YOUR place. You are talking to two friends.',
        from: 'Ručak je kod mene.',
        answer: 'Ručak je kod vas.',
        accept: ['Ručak je kod Vas.'],
        hint: 'Only the pronoun changes — to the long form of "you" for more than one person.',
        explanation: 'Ručak je kod vas. — kod vas: at your place.',
      },
      8,
      7,
      9,
      {
        type: 'tf',
        q: 'After "bez", the pronoun for "she" is "nju": bez nju.',
        answer: false,
        hint: 'This is the one pronoun whose genitive differs from its accusative.',
        explanation: 'Nju is the accusative (Vidim nju). The genitive is nje: bez nje.',
      },
      10,
      {
        type: 'listen',
        audio: 'Kod koga spavaš večeras?',
        q: 'What is the speaker asking?',
        options: [
          'Whose place you are sleeping at tonight',
          'Who is sleeping at your place tonight',
          'When you are going to sleep tonight',
          'Why you are not sleeping tonight',
        ],
        correct: 0,
        explanation: 'Kod koga spavaš večeras? — kod koga: at whose place?',
      },
      11,
      {
        type: 'sort',
        q: 'Who is not here: one person, or several people?',
        groups: ['One person is missing', 'Several people are missing'],
        items: [
          { hr: 'Nema ga.', group: 0 },
          { hr: 'Nema ih.', group: 1 },
          { hr: 'Nema je.', group: 0 },
          { hr: 'Nema djece.', group: 1 },
          { hr: 'Nema Ivana.', group: 0 },
          { hr: 'Danas ih nema.', group: 1 },
        ],
        explanation:
          'ga — him, je — her, ih — them. With nema the short form is used, and it stands second.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Tonight you are all at my place."',
        words: ['Večeras', 'ste', 'svi', 'kod', 'mene.'],
        explanation: 'Večeras ste svi kod mene. — the short word ste comes second.',
      },
      {
        type: 'transform',
        q: 'Say it with a pronoun instead of the name.',
        from: 'Poklon je od Marka.',
        answer: 'Poklon je od njega.',
        hint: 'After od comes the long form of "him".',
        explanation: 'Poklon je od njega. — the present is from him.',
      },
      {
        type: 'dictate',
        audio: 'Ne idem na more bez tebe.',
        answer: 'Ne idem na more bez tebe.',
        hint: 'Six words. The last one is the long form of "you".',
        explanation: 'Ne idem na more bez tebe. — I am not going to the seaside without you.',
      },
    ],
  },

  // ── quantity ──
  quantity: {
    text: {
      kind: 'dialogue',
      title: 'Na tržnici',
      lines: [
        { who: 'Prodavač', hr: 'Dobar dan! Izvolite?', en: 'Good day! What would you like?' },
        {
          who: 'Ana',
          hr: 'Dobar dan. Molim kilogram jabuka i malo sira.',
          en: 'Good day. A kilo of apples and a little cheese, please.',
        },
        {
          who: 'Prodavač',
          hr: 'Izvolite. Imamo danas i puno ribe.',
          en: 'Here you are. We also have a lot of fish today.',
        },
        {
          who: 'Ana',
          hr: 'Ne, hvala. Nemam puno novca. Koliko košta litra mlijeka?',
          en: 'No, thank you. I do not have a lot of money. How much is a liter of milk?',
        },
        { who: 'Prodavač', hr: 'Jedan euro.', en: 'One euro.' },
        {
          who: 'Ana',
          hr: 'Dobro, molim litru mlijeka. Danas je ovdje previše ljudi!',
          en: 'Fine, a liter of milk, please. There are too many people here today!',
        },
        {
          who: 'Prodavač',
          hr: 'Da, u subotu uvijek dolazi puno ljudi i nekoliko turista.',
          en: 'Yes, on Saturday a lot of people and a few tourists always come.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Ana buy at the market?',
          options: [
            'A kilo of apples, a little cheese and a liter of milk',
            'A kilo of apples, a lot of fish and a liter of milk',
            'A little cheese and a lot of fish',
            'A kilo of cheese and a little milk',
          ],
          correct: 0,
          hint: 'She says "Ne, hvala" to one thing — and gives a reason.',
          explanation:
            'A kilo of apples, a little cheese and a liter of milk. She does not take the fish: she does not have a lot of money.',
        },
        {
          q: 'The seller says "dolazi puno ljudi" — with the verb in the form for ONE person. Why?',
          options: [
            'An amount such as "puno ljudi" counts as one unit, so the verb is singular',
            'Because only one person comes on Saturday',
            'Because "ljudi" is a singular word',
            'It is a slip — it has to be the plural form',
          ],
          correct: 0,
          hint: 'The verb does not look at the people. It looks at the amount word in front of them.',
          explanation:
            'A quantity phrase behaves as a single unit, so the standard form of the verb is the third person singular: Puno ljudi dolazi.',
        },
        {
          type: 'type',
          q: 'Now you. Ask the seller for a little bread (kruh): Molim malo ____.',
          answer: 'kruha',
          hint: 'After an amount word comes the genitive. You cannot count bread, so it is singular — like "malo sira".',
          explanation: 'Molim malo kruha. — kruh → kruha.',
        },
        {
          type: 'type',
          q: 'Now you. Say that you have a lot of friends (prijatelj): Imam puno ____.',
          answer: 'prijatelja',
          hint: 'You can count friends, so the word is plural — and here its ending is -a, as in "nekoliko turista".',
          explanation: 'Imam puno prijatelja. — countable things take the genitive plural.',
        },
        {
          type: 'transform',
          q: 'Say the same about books (knjiga) instead of time.',
          from: 'Imam malo vremena.',
          answer: 'Imam malo knjiga.',
          hint: 'Books can be counted, so the word goes into the plural "of" form — which for a feminine word in -a ends in -a.',
          explanation:
            'Imam malo knjiga. — time cannot be counted (singular: vremena); books can (plural: knjiga).',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each amount word to its meaning.',
        pairs: [
          ['puno', 'a lot'],
          ['malo', 'a little'],
          ['nekoliko', 'several'],
          ['dosta', 'enough'],
          ['previše', 'too much'],
        ],
        explanation: 'Every one of them is followed by the genitive.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Imam', 'puno', 'knjige.'],
        wrong: 2,
        answer: 'knjiga',
        hint: 'You can count them, so after the amount word you need the plural "of" form.',
        explanation:
          'Countable things take the genitive plural after puno, and for a feminine word in -a that form ends in -a.',
      },
      {
        type: 'sort',
        q: 'After "puno": can you count the thing (the word is plural) or not (the word is singular)?',
        groups: ['You can count them — plural', 'You cannot count it — singular'],
        items: [
          { hr: 'ljudi', group: 0 },
          { hr: 'vode', group: 1 },
          { hr: 'knjiga', group: 0 },
          { hr: 'novca', group: 1 },
          { hr: 'turista', group: 0 },
          { hr: 'šećera', group: 1 },
        ],
        explanation:
          'puno ljudi, puno knjiga, puno turista — things you can count, in the genitive plural. puno vode, puno novca, puno šećera — the genitive singular.',
      },
      5,
      {
        type: 'listen',
        audio: 'Na plaži je bilo previše ljudi.',
        q: 'What was the beach like?',
        options: ['Too crowded', 'Empty', 'Too cold', 'Too far away'],
        correct: 0,
        explanation: 'Na plaži je bilo previše ljudi. — previše ljudi: too many people.',
      },
      7,
      {
        type: 'tf',
        q: '"Puno posla" and "puno poslova" mean the same thing.',
        answer: false,
        hint: 'One of them is in the plural.',
        explanation: 'Puno posla is a lot of work. Puno poslova means many separate jobs.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "I have a few questions."',
        words: ['Imam', 'nekoliko', 'pitanja.'],
        explanation: 'Imam nekoliko pitanja. — nekoliko + the genitive plural.',
      },
      6,
      {
        type: 'transform',
        q: 'Say the same about sisters (sestra) instead of friends.',
        from: 'Imam nekoliko prijatelja.',
        answer: 'Imam nekoliko sestara.',
        hint: 'The stem ends in two consonants, so an extra a slips in between them.',
        explanation: 'Imam nekoliko sestara. — sestra → sestara, like student → studenata.',
      },
      11,
      {
        type: 'transform',
        q: 'Ask a friend about the amount. Start with "Koliko".',
        from: 'Imaš puno novca.',
        answer: 'Koliko novca imaš?',
        accept: ['Koliko imaš novca?'],
        hint: 'Koliko takes the place of the amount word, and the thing stays in the genitive.',
        explanation: 'Koliko novca imaš? — koliko is followed by the genitive too.',
      },
      10,
      {
        type: 'dictate',
        audio: 'Imam puno posla danas.',
        answer: 'Imam puno posla danas.',
        hint: 'Four words. The third is "work", in the form that follows an amount word.',
        explanation: 'Imam puno posla danas. — I have a lot of work today.',
      },
    ],
  },

  // ── numbers-genitive ──
  'numbers-genitive': {
    text: {
      kind: 'dialogue',
      title: 'Na kolodvoru',
      lines: [
        {
          who: 'Ana',
          hr: 'Dobar dan. Molim dvije karte za Split.',
          en: 'Good day. Two tickets to Split, please.',
        },
        {
          who: 'Prodavač',
          hr: 'Izvolite. Dvije karte koštaju trideset eura.',
          en: 'Here you are. Two tickets cost thirty euros.',
        },
        { who: 'Ana', hr: 'U koliko sati polazi vlak?', en: 'At what time does the train leave?' },
        {
          who: 'Prodavač',
          hr: 'U tri sata. Sada su dva sata — imate jedan sat.',
          en: 'At three o’clock. It is two o’clock now — you have one hour.',
        },
        { who: 'Ana', hr: 'Koliko dugo putujemo?', en: 'How long is the journey?' },
        {
          who: 'Prodavač',
          hr: 'Šest sati. U Splitu ste u devet sati.',
          en: 'Six hours. You are in Split at nine o’clock.',
        },
        {
          who: 'Ana',
          hr: 'Hvala. U Splitu ostajemo četiri dana.',
          en: 'Thank you. We are staying in Split for four days.',
        },
        { who: 'Prodavač', hr: 'Sretan put!', en: 'Have a good trip!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: when does the train leave, how long is the journey, and how long are they staying in Split?',
          options: [
            'At three; six hours; four days',
            'At two; three hours; six days',
            'At three; nine hours; two days',
            'At nine; six hours; four days',
          ],
          correct: 0,
          hint: 'It is two o’clock now, and they have one hour.',
          explanation:
            'The train leaves at three, the journey takes six hours, and they stay four days.',
        },
        {
          q: 'The seller uses three different forms of the word "sat" — one after jedan, one after dva and tri, one after šest and devet. Why?',
          options: [
            'The number decides the form: one, two-to-four, and five-and-up each take their own',
            'The forms change with the time of day',
            'One form is for trains, the others for people',
            'There is no rule; any of the three can follow any number',
          ],
          correct: 0,
          hint: 'Sort the numbers in the dialogue into three groups by size.',
          explanation:
            'After one, the dictionary form. After two, three and four, the form in -a (the genitive singular). From five up, the genitive plural.',
        },
        {
          type: 'type',
          q: 'Now you. You need five tickets (karta): Molim pet ____.',
          answer: 'karata',
          hint: 'Five and up take the plural "of" form. The stem ends in two consonants, so an a slips in — as in "sestara".',
          explanation: 'Molim pet karata. — karta → karata, the genitive plural.',
        },
        {
          type: 'type',
          q: 'Now you. Someone asks YOU: "Koliko je sati?" It is four o’clock. Answer: Četiri su ____.',
          answer: 'sata',
          hint: 'Four belongs with two and three. Use the form the seller uses after those numbers.',
          explanation: 'Četiri su sata. — two, three and four take sata; five and up take sati.',
        },
        {
          type: 'transform',
          q: 'Change the number to five.',
          from: 'Imam dvije knjige.',
          answer: 'Imam pet knjiga.',
          hint: 'From five up, the noun takes the plural "of" form you use after "puno".',
          explanation: 'Imam pet knjiga. — dvije knjige, but pet knjiga.',
        },
      ],
    },
    mix: [
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dan', 'ima', 'dvadeset', 'četiri', 'sati.'],
        wrong: 4,
        answer: 'sata',
        hint: 'In a long number only the last word decides — and here the last word is four.',
        explanation: 'The number ends in four, so the noun takes the two-to-four form in -a.',
      },
      13,
      {
        type: 'match',
        q: 'Match each sentence to the time it tells.',
        pairs: [
          ['Dva su sata.', '2:00'],
          ['Pet je sati.', '5:00'],
          ['Pola devet.', '8:30'],
          ['Četvrt do devet.', '8:45'],
          ['Osam i deset.', '8:10'],
        ],
        explanation: 'Careful with pola: pola devet is half an hour BEFORE nine.',
      },
      11,
      {
        type: 'sort',
        q: 'Which form of the noun does each number need — as in "dva stola", or as in "pet stolova"?',
        groups: ['like "dva stola"', 'like "pet stolova"'],
        items: [
          { hr: 'tri', group: 0 },
          { hr: 'sedam', group: 1 },
          { hr: 'dvanaest', group: 1 },
          { hr: 'četiri', group: 0 },
          { hr: 'dvadeset dva', group: 0 },
          { hr: 'dvadeset pet', group: 1 },
          { hr: 'sto', group: 1 },
        ],
        explanation:
          'Two, three, four — and any number that ENDS in them, like dvadeset dva — go with dva stola. Five and up, all the -naest numbers and round numbers go with pet stolova.',
      },
      9,
      {
        type: 'tf',
        q: '"Dvanaest stola" is correct, because twelve starts with "dva".',
        answer: false,
        hint: 'Which group do the numbers in -naest belong to?',
        explanation: 'Every -naest number counts like five: dvanaest stolova.',
      },
      4,
      {
        type: 'listen',
        audio: 'Film počinje u pola osam.',
        q: 'When does the movie start?',
        options: ['At 7:30', 'At 8:30', 'At 8:00', 'At 7:15'],
        correct: 0,
        explanation: 'Film počinje u pola osam. — pola osam is half an hour before eight: 7:30.',
      },
      16,
      {
        type: 'order',
        q: 'Put the words in order: "The train arrives in two hours."',
        words: ['Vlak', 'stiže', 'za', 'dva', 'sata.'],
        explanation: 'Vlak stiže za dva sata. — za dva sata: in two hours.',
      },
      {
        type: 'transform',
        q: 'Change the number to five.',
        from: 'Čekam dvije minute.',
        answer: 'Čekam pet minuta.',
        hint: 'From five up, the noun takes its plural "of" form — for a feminine word in -a that form ends in plain -a.',
        explanation: 'Čekam pet minuta. — dvije minute, but pet minuta.',
      },
      5,
      12,
      {
        type: 'transform',
        q: 'Now there is only one book on the table.',
        from: 'Na stolu su tri knjige.',
        answer: 'Na stolu je jedna knjiga.',
        hint: 'One works like a describing word: it agrees with the noun, the noun keeps its dictionary form — and the verb is singular.',
        explanation: 'Na stolu je jedna knjiga. — jedan, jedna, jedno agree with the noun.',
      },
      17,
      {
        type: 'dictate',
        audio: 'Sendvič košta tri eura i dvadeset centi.',
        answer: 'Sendvič košta tri eura i dvadeset centi.',
        hint: 'Seven words. A price: the euros first, then the cents.',
        explanation:
          'Sendvič košta tri eura i dvadeset centi. — tri eura (two to four), dvadeset centi (a round number).',
      },
    ],
  },

  // ── ordinals-dates ──
  'ordinals-dates': {
    text: {
      kind: 'dialogue',
      title: 'Koji je danas datum?',
      lines: [
        { who: 'Iva', hr: 'Koji je danas datum?', en: 'What is the date today?' },
        { who: 'Luka', hr: 'Danas je prvi svibnja.', en: 'Today is the first of May.' },
        {
          who: 'Iva',
          hr: 'Već? Moj rođendan je trećeg svibnja!',
          en: 'Already? My birthday is on the third of May!',
        },
        {
          who: 'Luka',
          hr: 'A moj je petog lipnja. Je li ovo tvoj prvi rođendan u Zagrebu?',
          en: 'And mine is on the fifth of June. Is this your first birthday in Zagreb?',
        },
        { who: 'Iva', hr: 'Nije, ovo je drugi.', en: 'No, this is the second.' },
        {
          who: 'Luka',
          hr: 'Gdje stanuješ? Na prvom katu?',
          en: 'Where do you live? On the first floor?',
        },
        {
          who: 'Iva',
          hr: 'Ne, na trećem. Zabava je kod mene, trećeg svibnja u osam sati!',
          en: 'No, on the third. The party is at my place, on the third of May at eight o’clock!',
        },
        { who: 'Luka', hr: 'Odlično, dolazim!', en: 'Great, I am coming!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is the date today, when is Iva’s birthday, and on which floor does she live?',
          options: [
            'Today is May 1; her birthday is on May 3; she lives on the third floor',
            'Today is May 3; her birthday is on June 5; she lives on the first floor',
            'Today is May 1; her birthday is on June 5; she lives on the third floor',
            'Today is June 1; her birthday is on June 3; she lives on the second floor',
          ],
          correct: 0,
          hint: 'The number three belongs to Iva twice: her birthday and her floor, counted the Croatian way.',
          explanation:
            'Today is the first of May. Iva’s birthday is on the third of May, and she lives on the third floor — treći kat. (In Croatia the street-level floor is prizemlje, so prvi kat is one flight up.) The fifth of June is Luka’s birthday.',
        },
        {
          q: 'Luka says "Danas je prvi svibnja", but Iva says "Moj rođendan je trećeg svibnja" — the number ends differently. Why?',
          options: [
            'Luka says what the date IS; Iva says ON which date something happens',
            'Luka is a man and Iva is a woman',
            'One and three never take the same ending',
            'Because Iva is talking about the future',
          ],
          correct: 0,
          hint: 'Try putting the English word "on" into each sentence.',
          explanation:
            'What the date is: the plain ordinal. When something happens — "on" a date: the ordinal goes into the genitive. The month is in the genitive both times: svibanj → svibnja.',
        },
        {
          type: 'type',
          q: 'Now you. A friend asks YOU: "Koji je danas datum?" It is the second of May. Answer: Danas je ____ svibnja.',
          answer: 'drugi',
          hint: 'You are saying what the date IS, so use the plain form — the one Iva uses about her birthday in Zagreb.',
          explanation: 'Danas je drugi svibnja. — the plain ordinal says what the date is.',
        },
        {
          type: 'type',
          q: 'Now you. Say that the concert is ON the first of June: Koncert je ____ lipnja.',
          answer: 'prvog',
          accept: ['prvoga'],
          hint: 'Something happens ON that date, so the ordinal takes the ending Luka uses for his own birthday.',
          explanation: 'Koncert je prvog lipnja. — on a date: prvi → prvog, like peti → petog.',
        },
        {
          type: 'transform',
          q: 'You live one floor lower: on the second floor.',
          from: 'Stanujem na trećem katu.',
          answer: 'Stanujem na drugom katu.',
          hint: 'After na for a place the ordinal ends in -om — unless its stem is soft, as in "trećem".',
          explanation: 'Stanujem na drugom katu. — na prvom, na drugom, but na trećem katu.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each ordinal to its number.',
        pairs: [
          ['prvi', '1.'],
          ['četvrti', '4.'],
          ['sedmi', '7.'],
          ['deseti', '10.'],
          ['dvadeseti', '20.'],
        ],
        explanation:
          'Most ordinals are the number plus -i: sedam → sedmi, deset → deseti. Prvi is one to learn by heart.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Danas', 'je', 'peti', 'lipanj.'],
        wrong: 3,
        answer: 'lipnja',
        hint: 'In a date, the month does not keep its dictionary form: it is "the fifth OF June".',
        explanation:
          'After the day, the month is always in the genitive — and this month loses the a of its last syllable.',
      },
      5,
      {
        type: 'sort',
        q: 'Does the sentence say what the date IS, or WHEN something happens?',
        groups: ['What the date is', 'When something happens'],
        items: [
          { hr: 'Danas je peti lipnja.', group: 0 },
          { hr: 'Rođen sam petog lipnja.', group: 1 },
          { hr: 'Sutra je deseti svibnja.', group: 0 },
          { hr: 'Ispit je desetog svibnja.', group: 1 },
          { hr: 'Jučer je bio prvi rujna.', group: 0 },
          { hr: 'Škola počinje prvog rujna.', group: 1 },
        ],
        explanation:
          'What the date is: the plain ordinal (peti, deseti, prvi). When something happens: the ordinal in the genitive (petog, desetog, prvog).',
      },
      0,
      {
        type: 'tf',
        q: 'In "dvadeset prvi" (twenty-first), both words take the ordinal ending.',
        answer: false,
        hint: 'Look at the first word: has it changed?',
        explanation: 'Only the last word becomes an ordinal: dvadeset prvi, trideset drugi.',
      },
      6,
      {
        type: 'listen',
        audio: 'Božić je dvadeset petog prosinca.',
        q: 'When is Christmas?',
        options: ['On 25 December', 'On 25 November', 'On 24 December', 'On 5 December'],
        correct: 0,
        explanation: 'Božić je dvadeset petog prosinca. — on the twenty-fifth of December.',
      },
      7,
      2,
      {
        type: 'transform',
        q: 'Now say that the concert is ON that date. Start with "Koncert je".',
        from: 'Danas je šesti srpnja.',
        answer: 'Koncert je šestog srpnja.',
        accept: ['Koncert je šestoga srpnja.'],
        hint: 'When something happens on a date, the ordinal goes into the genitive too.',
        explanation: 'Koncert je šestog srpnja. — on the sixth of July.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "My birthday is on the twenty-third of March."',
        words: ['Rođendan', 'mi', 'je', 'dvadeset', 'trećeg', 'ožujka.'],
        explanation:
          'Rođendan mi je dvadeset trećeg ožujka. — mi and je stand second; only the last word of the number is an ordinal.',
      },
      11,
      {
        type: 'transform',
        q: 'Say the same about a year (godina) instead of a day.',
        from: 'Ovo je moj prvi dan u Zagrebu.',
        answer: 'Ovo je moja prva godina u Zagrebu.',
        hint: 'Godina is feminine: both "my" and "first" change to match it.',
        explanation:
          'Ovo je moja prva godina u Zagrebu. — an ordinal agrees like any adjective: prvi dan, prva godina.',
      },
      {
        type: 'dictate',
        audio: 'Moja kći ide u drugi razred.',
        answer: 'Moja kći ide u drugi razred.',
        hint: 'Six words. The fifth is "second".',
        explanation: 'Moja kći ide u drugi razred. — my daughter is in the second year.',
      },
    ],
  },
};
