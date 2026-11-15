// ─── A1 lessons in class order — Units 6 to 9 ────────────────────────────────
// Same shape and the same rules as lessonClassA1.js (the Unit 1 pilot):
//
//   text — the dialogue the learner hears, then reads, and its questions.
//   mix  — the practice slide's items, in order. A NUMBER is the index of an item
//          the lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what the lesson, and the lessons before it, have taught. A typed answer is
// never shown earlier on the same slide. Standard Croatian; the greeting is "Bog".

export const CLASS_A1_U06_09 = {
  // ══ Unit 6 ═════════════════════════════════════════════════════════════════

  // ── negation ───────────────────────────────────────────────────────────────
  negation: {
    text: {
      kind: 'dialogue',
      title: 'Ne znam',
      lines: [
        {
          who: 'Gospođa',
          hr: 'Dobar dan! Znate li gdje je pošta?',
          en: 'Good day! Do you know where the post office is?',
        },
        {
          who: 'Tom',
          hr: 'Ne znam. Nisam iz Zagreba.',
          en: 'I do not know. I am not from Zagreb.',
        },
        { who: 'Gospođa', hr: 'Govorite li hrvatski?', en: 'Do you speak Croatian?' },
        {
          who: 'Tom',
          hr: 'Govorim malo, ali ne razumijem dobro.',
          en: 'I speak a little, but I do not understand well.',
        },
        {
          who: 'Gospođa',
          hr: 'Nema problema. A Vaš prijatelj? Zna li on gdje je pošta?',
          en: 'No problem. And your friend? Does he know where the post office is?',
        },
        {
          who: 'Marko',
          hr: 'Ne znam. Nitko ovdje nije iz Zagreba.',
          en: 'I do not know. Nobody here is from Zagreb.',
        },
        {
          who: 'Gospođa',
          hr: 'Nitko ništa ne zna, a ja nemam vremena! Doviđenja.',
          en: 'Nobody knows anything, and I have no time! Goodbye.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why can Tom and Marko not help the woman?',
          options: [
            'They do not know where the post office is — they are not from Zagreb',
            'They do not speak any Croatian at all',
            'They have no time',
            'They do not want to talk to her',
          ],
          correct: 0,
          hint: 'Think of what Tom says about where he is from.',
          explanation:
            'Neither of them knows where the post office is, because nobody there is from Zagreb. It is the woman who has no time.',
        },
        {
          q: 'Marko says "Nitko ovdje nije iz Zagreba." English says "Nobody here IS from Zagreb". Why does Croatian say "nije" (is not)?',
          options: [
            'After nitko the verb must be negative too',
            'It is a slip — it should be "je"',
            'Because Marko is talking about himself',
            'Because the sentence is a question',
          ],
          correct: 0,
          hint: 'Look at the woman\'s last line too: "Nitko ništa ne zna."',
          explanation:
            'Croatian needs the "not" on the verb as well: with nitko (nobody) or ništa (nothing) the verb is always negative. Two negatives are correct here, not a mistake.',
        },
        {
          type: 'type',
          q: 'Now you. Someone in the street asks YOU: "Znate li gdje je kolodvor?" You have no idea. Answer: Ne ____.',
          answer: 'znam',
          hint: 'Use the "I" form of znati, the way Tom does. The word for "not" stays separate.',
          explanation:
            'Ne znam. — "I do not know." ne stands in front of the verb, as its own word.',
        },
        {
          type: 'type',
          q: 'A friend asks you: "Imaš li telefon?" You do not. Answer in one word, with the verb: ____.',
          answer: 'Nemam',
          hint: 'The woman says this word about her time. With imati, the "not" is joined on to the verb.',
          explanation:
            'Nemam. — "I do not." ne + imam is written as one word, just as ne + sam gives nisam.',
        },
        {
          type: 'transform',
          q: 'Make the sentence negative.',
          from: 'Marko razumije hrvatski.',
          answer: 'Marko ne razumije hrvatski.',
          hint: 'This verb does not fuse: put the little word for "not" straight in front of it.',
          explanation:
            'Marko ne razumije hrvatski. Only biti, imati and htjeti fuse (nije, nema, neće); every other verb keeps ne as a separate word.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Which verbs join with "ne" into one word, and which keep "ne" as a separate word?',
        groups: ['One word — the verb fuses with ne', 'Two words — ne stays separate'],
        items: [
          { hr: 'biti', group: 0 },
          { hr: 'znati', group: 1 },
          { hr: 'imati', group: 0 },
          { hr: 'raditi', group: 1 },
          { hr: 'htjeti', group: 0 },
          { hr: 'govoriti', group: 1 },
        ],
        explanation:
          'Only three verbs fuse with ne into one word: biti, imati and htjeti. Every other verb keeps ne apart, as a word of its own.',
      },
      1,
      {
        type: 'match',
        q: 'Match each negative word to its meaning.',
        pairs: [
          ['nitko', 'nobody'],
          ['ništa', 'nothing'],
          ['nikad', 'never'],
          ['nigdje', 'nowhere'],
        ],
        explanation:
          'All four start with ni-. With any of them, the verb in the sentence is negative as well.',
      },
      5,
      {
        type: 'tf',
        q: 'Tom: „Nemam auto.“ — True or false: Tom ima auto.',
        answer: false,
        hint: 'Nemam is imam with "ne" joined on.',
        explanation: 'Nemam auto. — "I do not have a car." So Tom nema auto.',
      },
      7,
      {
        type: 'transform',
        q: 'Make the sentence negative.',
        from: 'Oni su ovdje.',
        answer: 'Oni nisu ovdje.',
        hint: 'biti fuses with ne: the result is one word beginning with ni-.',
        explanation: 'Oni nisu ovdje. — "They are not here." su becomes nisu.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Nobody knows anything."',
        words: ['Nitko', 'ništa', 'ne', 'zna.'],
        explanation:
          'Nitko ništa ne zna. Word for word: "Nobody nothing not knows" — every part is negative, and ne stands directly in front of the verb.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Marko', 'i', 'Ana', 'nema', 'auto.'],
        wrong: 3,
        answer: 'nemaju',
        hint: 'Marko and Ana are two people — "they". Which form of the verb goes with oni?',
        explanation: 'Marko i Ana nemaju auto. — two people take the "they" form: nemaju.',
      },
      8,
      {
        type: 'listen',
        audio: 'Nemamo vremena.',
        q: 'What did you hear?',
        options: [
          'We do not have time.',
          'I do not have time.',
          'They do not have time.',
          'We have time.',
        ],
        correct: 0,
        explanation: 'Nemamo vremena. — nemamo is the "we" form: we do not have time.',
      },
      9,
      {
        type: 'transform',
        q: 'Make the sentence negative.',
        from: 'Hoćemo čaj.',
        answer: 'Nećemo čaj.',
        hint: 'htjeti fuses with ne. Keep the "we" ending.',
        explanation: 'Nećemo čaj. — "We do not want tea." hoćemo becomes nećemo, in one word.',
      },
      {
        type: 'dictate',
        audio: 'Danas ne radim.',
        answer: 'Danas ne radim.',
        hint: 'Three words. The "not" is written as a word of its own.',
        explanation: 'Danas ne radim. — "I am not working today." ne and radim are two words.',
      },
    ],
  },

  // ── verbs-ati-irati ────────────────────────────────────────────────────────
  'verbs-ati-irati': {
    text: {
      kind: 'dialogue',
      title: 'Što studiraš?',
      lines: [
        { who: 'Ana', hr: 'Bog, Tom! Što studiraš?', en: 'Hi, Tom! What do you study?' },
        { who: 'Tom', hr: 'Studiram pravo. A ti?', en: 'I study law. And you?' },
        {
          who: 'Ana',
          hr: 'Ja ne studiram, ja radim. Ali učim engleski svaki dan.',
          en: 'I do not study, I work. But I learn English every day.',
        },
        {
          who: 'Tom',
          hr: 'A tvoj brat? Studira li i on?',
          en: 'And your brother? Does he study too?',
        },
        {
          who: 'Ana',
          hr: 'Ne, Ivan trenira tenis. On i tata treniraju svaki dan.',
          en: 'No, Ivan trains at tennis. He and Dad train every day.',
        },
        {
          who: 'Tom',
          hr: 'Moji prijatelji i ja sutra organiziramo izlet.',
          en: 'My friends and I are organizing a trip tomorrow.',
        },
        {
          who: 'Ana',
          hr: 'Odlično! Vi organizirate, a ja fotografiram!',
          en: 'Great! You organize, and I take the photos!',
        },
        { who: 'Tom', hr: 'Dobro! Telefoniram večeras.', en: 'Fine! I am phoning tonight.' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who studies, and who works?',
          options: [
            'Tom studies law; Ana works and is learning English',
            'Ana studies law; Tom works',
            'Both of them study law',
            'Tom studies English; Ana trains at tennis',
          ],
          correct: 0,
          hint: 'Ana says what she does NOT do, and then what she does.',
          explanation:
            'Tom studies law (Studiram pravo). Ana does not study — she works, and she learns English every day.',
        },
        {
          q: 'Ana says "Ivan trenira tenis" but "On i tata treniraju". Why does the verb end in -ju the second time?',
          options: [
            'Two people are training — it is the "they" form',
            'Because it happens every day',
            'Because tata is an older person',
            'Because the sentence is negative',
          ],
          correct: 0,
          hint: 'Count who is training in each sentence.',
          explanation:
            'One person: trenira. Two or more ("they"): treniraju. The -a- stays, and the "they" ending -ju is added.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Treniraš li tenis?" You do. Answer with the verb: Da, ____ tenis.',
          answer: 'treniram',
          hint: 'The "I" form: the same ending Tom uses when he says what he studies.',
          explanation: 'Da, treniram tenis. — the "I" form ends in -m: studiram, treniram.',
        },
        {
          type: 'type',
          q: 'Tell Ana that you and your friends are reserving a table tonight: Večeras ____ stol. (rezervirati)',
          answer: 'rezerviramo',
          hint: 'You and your friends are "we". Listen again to how Tom says "my friends and I are organizing".',
          explanation:
            'Večeras rezerviramo stol. — the "we" form ends in -mo, like organiziramo. The -ir- stays in the middle.',
        },
        {
          type: 'transform',
          q: 'Ask ONE friend the same thing: change the "vi" form to the "ti" form.',
          from: 'Organizirate li izlet?',
          answer: 'Organiziraš li izlet?',
          hint: "Only the ending of the verb changes: think of Ana's first question to Tom.",
          explanation: 'Organiziraš li izlet? — the "ti" form ends in -š, like studiraš.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each person to its form of studirati.',
        pairs: [
          ['ja', 'studiram'],
          ['ti', 'studiraš'],
          ['mi', 'studiramo'],
          ['vi', 'studirate'],
          ['oni', 'studiraju'],
        ],
        explanation:
          'studiram, studiraš, studira, studiramo, studirate, studiraju — every -irati verb takes exactly these endings.',
      },
      0,
      {
        type: 'sort',
        q: 'Who is doing it: one person, or more than one?',
        groups: ['One person', 'More than one'],
        items: [
          { hr: 'rezerviram', group: 0 },
          { hr: 'treniramo', group: 1 },
          { hr: 'telefoniraš', group: 0 },
          { hr: 'kontroliraju', group: 1 },
          { hr: 'studira', group: 0 },
          { hr: 'fotografiraju', group: 1 },
        ],
        explanation:
          '-m (I), -š (you) and no ending (he, she) are one person. -mo (we) and -ju (they) are more than one.',
      },
      4,
      {
        type: 'tf',
        q: 'Ivan: „Ne studiram, radim.“ — True or false: Ivan je student.',
        answer: false,
        hint: 'What does Ivan say he does NOT do?',
        explanation: 'Ne studiram — "I do not study". Ivan works, so he is not a student.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Where do you park the car?"',
        words: ['Gdje', 'parkiraš', 'auto?'],
        explanation: 'Gdje parkiraš auto? The question word comes first, then the verb.',
      },
      8,
      {
        type: 'transform',
        q: 'Change "ja" to "oni".',
        from: 'Ja treniram svaki dan.',
        answer: 'Oni treniraju svaki dan.',
        hint: 'The "they" form keeps the -a- and adds two letters.',
        explanation: 'Oni treniraju svaki dan. — after -a- the "they" ending is always -ju.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'telefoniraš', 'svaki', 'dan.'],
        wrong: 2,
        answer: 'telefonira',
        hint: 'My sister is "she". The "she" form has no ending after the -a.',
        explanation:
          'Moja sestra telefonira svaki dan. — telefoniraš is the "ti" form; for on and ona the verb ends in -a.',
      },
      10,
      {
        type: 'listen',
        audio: 'Oni organiziraju koncert.',
        q: 'What did you hear?',
        options: [
          'They are organizing a concert.',
          'We are organizing a concert.',
          'He is organizing a concert.',
          'You are organizing a concert.',
        ],
        correct: 0,
        explanation: 'Oni organiziraju koncert. — the ending -ju is the "they" form.',
      },
      7,
      3,
      {
        type: 'transform',
        q: 'Turn it into a yes/no question with li.',
        from: 'Ti studiraš pravo.',
        answer: 'Studiraš li pravo?',
        accept: ['Studiraš li ti pravo?'],
        hint: 'The verb comes first, and li comes straight after it.',
        explanation: 'Studiraš li pravo? — verb first, then li. The pronoun ti can be left out.',
      },
      {
        type: 'dictate',
        audio: 'Studiram hrvatski i engleski.',
        answer: 'Studiram hrvatski i engleski.',
        hint: 'Four words. Languages are written with a small letter.',
        explanation: 'Studiram hrvatski i engleski. — "I study Croatian and English."',
      },
    ],
  },

  // ── cases ──────────────────────────────────────────────────────────────────
  cases: {
    text: {
      kind: 'dialogue',
      title: 'Tko je to?',
      lines: [
        { who: 'Tom', hr: 'Tko je to?', en: 'Who is that?' },
        {
          who: 'Ana',
          hr: 'To je moj brat Ivan. Ivan studira pravo.',
          en: 'That is my brother Ivan. Ivan studies law.',
        },
        { who: 'Tom', hr: 'A tko su oni?', en: 'And who are they?' },
        {
          who: 'Ana',
          hr: 'To su moji roditelji. Mama radi, a tata kuha.',
          en: 'Those are my parents. Mom is working, and Dad is cooking.',
        },
        { who: 'Tom', hr: 'Što je ovo?', en: 'What is this?' },
        {
          who: 'Ana',
          hr: 'To je naša kuća. Kuća je stara, ali lijepa.',
          en: 'That is our house. The house is old, but beautiful.',
        },
        { who: 'Tom', hr: 'A tko spava tamo?', en: 'And who is sleeping over there?' },
        {
          who: 'Ana',
          hr: 'To je naš pas Reks. Reks spava, a mi radimo!',
          en: 'That is our dog Reks. Reks sleeps, and we work!',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: what are Ana's parents doing in the photo?",
          options: [
            'Mom is working and Dad is cooking',
            'Mom is cooking and Dad is sleeping',
            'Both of them are sleeping',
            'Mom is studying and Dad is working',
          ],
          correct: 0,
          hint: 'Ana says one short sentence about each of them.',
          explanation:
            'Mama radi, a tata kuha. — Mom works, Dad cooks. The one who sleeps is the dog.',
        },
        {
          q: 'Tom asks about Ivan and about the dog with one question word, and about the house with another. Why?',
          options: [
            'One word asks about people and animals, the other about things',
            'One word is polite and the other is casual',
            'One word is for one person, the other for several',
            'One word is for men, the other for women',
          ],
          correct: 0,
          hint: 'Ivan and Reks are alive. The house is not.',
          explanation:
            'Croatian asks "who?" about people and animals, and "what?" about things. The answer to either question is the subject of the sentence.',
        },
        {
          type: 'type',
          q: 'Now you. Tom points at a photo of your sister and asks who it is. Answer: To je moja ____.',
          answer: 'sestra',
          hint: 'The family word for "sister", in its dictionary form.',
          explanation:
            'To je moja sestra. — the word stands in its dictionary form, the nominative: it names who the sentence is about.',
        },
        {
          type: 'type',
          q: 'Then he points at your car and asks what it is. Answer: To je moj ____.',
          answer: 'auto',
          hint: 'The thing you drive. The word is almost the same as in English.',
          explanation:
            'To je moj auto. — again the dictionary form. auto is masculine, so: moj auto.',
        },
        {
          type: 'type',
          q: 'In "Mama radi", mama does the action. Now say that the students are working: ____ rade. (student — more than one)',
          answer: 'Studenti',
          hint: 'The one who does the action stays in the dictionary case. Make it plural.',
          explanation:
            'Studenti rade. — the subject is in the nominative, here in the plural: student → studenti. The verb agrees with it: rade.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Which question asks about each of these: Tko? (a person or an animal) or Što? (a thing)?',
        groups: ['Tko? — a person or an animal', 'Što? — a thing'],
        items: [
          { hr: 'brat', group: 0 },
          { hr: 'kuća', group: 1 },
          { hr: 'pas', group: 0 },
          { hr: 'more', group: 1 },
          { hr: 'profesorica', group: 0 },
          { hr: 'auto', group: 1 },
          { hr: 'prijatelj', group: 0 },
          { hr: 'pismo', group: 1 },
        ],
        explanation:
          'Tko? is for people and animals (brat, pas, profesorica, prijatelj). Što? is for things (kuća, more, auto, pismo).',
      },
      0,
      8,
      {
        type: 'tf',
        q: 'In the sentence "More je toplo.", the subject is the word "toplo".',
        answer: false,
        hint: 'Ask "Što je toplo?" — the answer is the subject.',
        explanation: 'Što je toplo? — More. The subject is more; toplo only describes it.',
      },
      10,
      {
        type: 'match',
        q: 'Match each grammar word to its meaning.',
        pairs: [
          ['padež', 'case'],
          ['rečenica', 'sentence'],
          ['riječ', 'word'],
          ['završetak', 'ending'],
          ['rječnik', 'dictionary'],
        ],
        explanation:
          'A rečenica (sentence) is made of words; each riječ (word) has a završetak (ending) that shows its padež (case).',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "My sister is a student."',
        words: ['Moja', 'sestra', 'je', 'studentica.'],
        accept: ['Moja je sestra studentica.'],
        explanation: 'Moja sestra je studentica. — moja sestra is the subject.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'i', 'Marko', 'čita.'],
        wrong: 3,
        answer: 'čitaju',
        hint: 'The subject is two people. The verb has to agree with it.',
        explanation:
          'Ana i Marko čitaju. — the verb agrees with the subject: one person čita, two čitaju.',
      },
      11,
      {
        type: 'transform',
        q: 'Make the subject plural — more than one teacher.',
        from: 'Profesorica govori.',
        answer: 'Profesorice govore.',
        hint: 'Two words change: the subject, and the verb that agrees with it.',
        explanation:
          'Profesorice govore. — the plural subject is still in the nominative (-a becomes -e), and the verb follows it: govori → govore.',
      },
      {
        type: 'listen',
        audio: 'Tko je to?',
        q: 'What is the speaker asking about?',
        options: ['A person', 'A thing', 'A place', 'A time'],
        correct: 0,
        explanation: 'Tko je to? — "Who is that?" Tko asks about a person (or an animal).',
      },
      5,
      12,
      {
        type: 'dictate',
        audio: 'Što je ovo?',
        answer: 'Što je ovo?',
        hint: 'Three short words, and a question mark. The first letter has a small hook on top.',
        explanation: 'Što je ovo? — "What is this?"',
      },
    ],
  },

  // ── accusative-intro ───────────────────────────────────────────────────────
  'accusative-intro': {
    text: {
      kind: 'dialogue',
      title: 'Što radiš?',
      lines: [
        { who: 'Tom', hr: 'Bog, Ana! Što radiš?', en: 'Hi, Ana! What are you doing?' },
        {
          who: 'Ana',
          hr: 'Pijem kavu i čitam knjigu. A ti?',
          en: 'I am drinking coffee and reading a book. And you?',
        },
        {
          who: 'Tom',
          hr: 'Čekam autobus. Je li knjiga dobra?',
          en: 'I am waiting for the bus. Is the book good?',
        },
        {
          who: 'Ana',
          hr: 'Dobra je! A kava je vruća. Voliš li kavu?',
          en: 'It is good! And the coffee is hot. Do you like coffee?',
        },
        {
          who: 'Tom',
          hr: 'Ne volim kavu. Ja pijem čaj.',
          en: 'I do not like coffee. I drink tea.',
        },
        {
          who: 'Ana',
          hr: 'Što radiš večeras? Gledaš li utakmicu?',
          en: 'What are you doing tonight? Are you watching the match?',
        },
        {
          who: 'Tom',
          hr: 'Ne gledam televiziju. Večeras pišem pismo.',
          en: 'I do not watch television. Tonight I am writing a letter.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is each of them doing right now?',
          options: [
            'Ana is drinking coffee and reading; Tom is waiting for the bus',
            'Ana is waiting for the bus; Tom is drinking tea',
            'Both of them are watching the match',
            'Ana is writing a letter; Tom is reading a book',
          ],
          correct: 0,
          hint: 'Think of the first thing each of them answers.',
          explanation:
            'Ana drinks coffee and reads a book; Tom waits for the bus. The letter is for tonight.',
        },
        {
          q: 'Ana says "čitam knjigu", but Tom asks "Je li knjiga dobra?" Why does the same word have two endings?',
          options: [
            "In Ana's sentence the book is what she reads — the object; in Tom's it is the subject",
            'Ana is talking about several books',
            'Tom makes a mistake',
            'The ending changes because Tom is asking a question',
          ],
          correct: 0,
          hint: 'Ask who or what does something in each sentence — and what it is done to.',
          explanation:
            'When a feminine word in -a is the object — the thing that is read, drunk, watched — its -a becomes -u. As the subject it keeps -a: Knjiga je dobra.',
        },
        {
          type: 'type',
          q: 'Now you. You are eating a salad. Say it: Jedem ____. (salata)',
          answer: 'salatu',
          hint: 'The salad is what you eat — the object. Do what Ana does with kava and knjiga.',
          explanation: 'Jedem salatu. — the object of a feminine word in -a ends in -u.',
        },
        {
          type: 'type',
          q: 'You are calling your aunt. Say it: Zovem ____. (teta)',
          answer: 'tetu',
          hint: 'Your aunt is the one being called — the object.',
          explanation: 'Zovem tetu. — teta becomes tetu, for people just as for things.',
        },
        {
          type: 'transform',
          q: 'Change the drink from tea to coffee (kava).',
          from: 'Pijem čaj.',
          answer: 'Pijem kavu.',
          hint: 'čaj did not change as an object, but a word in -a does.',
          explanation:
            'Pijem kavu. — čaj is a masculine thing and stays the same; kava is feminine and takes -u.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'What happens to each word when it is the object (after Vidim …)?',
        groups: ['It changes: -a becomes -u', 'It stays the same'],
        items: [
          { hr: 'knjiga', group: 0 },
          { hr: 'stol', group: 1 },
          { hr: 'sestra', group: 0 },
          { hr: 'more', group: 1 },
          { hr: 'salata', group: 0 },
          { hr: 'film', group: 1 },
        ],
        explanation:
          'Feminine words in -a change (knjigu, sestru, salatu). Masculine things (stol, film) and neuter words (more) stay as they are.',
      },
      0,
      {
        type: 'match',
        q: 'Match each verb to its meaning.',
        pairs: [
          ['gledati', 'to watch'],
          ['vidjeti', 'to see'],
          ['čekati', 'to wait for'],
          ['kupovati', 'to buy'],
          ['čitati', 'to read'],
        ],
        explanation:
          'All five take an object: gledam film, vidim more, čekam autobus, kupujem kruh, čitam pismo.',
      },
      5,
      {
        type: 'tf',
        q: 'Ana: „Ne gledam film, čitam knjigu.“ — True or false: Ana čita knjigu.',
        answer: true,
        hint: 'Read the second half of what Ana says.',
        explanation: 'Čitam knjigu. — Ana is reading a book; she is not watching a movie.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "I love this house."',
        words: ['Volim', 'ovu', 'kuću.'],
        explanation:
          'Volim ovu kuću. — ova kuća → ovu kuću: the word in front changes together with the noun.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Čitam', 'nova', 'knjigu.'],
        wrong: 1,
        answer: 'novu',
        hint: 'The book is an object, and the word describing it has to change with it.',
        explanation:
          'Čitam novu knjigu. — nova knjiga → novu knjigu: the whole phrase changes together.',
      },
      9,
      {
        type: 'transform',
        q: 'Say that you SEE it. Start with "Vidim".',
        from: 'Kuća je velika.',
        answer: 'Vidim veliku kuću.',
        hint: 'The house becomes the object, and its adjective changes with it.',
        explanation:
          'Vidim veliku kuću. — velika kuća → veliku kuću: the whole phrase moves together.',
      },
      7,
      {
        type: 'listen',
        audio: 'Gledamo film.',
        q: 'What are the speakers doing?',
        options: ['Watching a movie', 'Reading a book', 'Waiting for a bus', 'Writing a letter'],
        correct: 0,
        explanation:
          'Gledamo film. — "We are watching a movie." film is a masculine thing, so it does not change.',
      },
      10,
      {
        type: 'transform',
        q: 'Change the object to "moja sestra".',
        from: 'Volim moj grad.',
        answer: 'Volim moju sestru.',
        hint: 'Both words end in -a, and both change.',
        explanation:
          'Volim moju sestru. — moja sestra → moju sestru. moj grad did not change, because grad is a masculine thing.',
      },
      {
        type: 'dictate',
        audio: 'Kupujem kruh i mlijeko.',
        answer: 'Kupujem kruh i mlijeko.',
        hint: 'Four words. Neither of the two things changes its ending as an object.',
        explanation:
          'Kupujem kruh i mlijeko. — kruh is a masculine thing and mlijeko is neuter, so both stay as they are.',
      },
    ],
  },

  // ── accusative-animate ─────────────────────────────────────────────────────
  'accusative-animate': {
    text: {
      kind: 'dialogue',
      title: 'Koga čekaš?',
      lines: [
        { who: 'Ana', hr: 'Bog, Tom! Koga čekaš?', en: 'Hi, Tom! Who are you waiting for?' },
        {
          who: 'Tom',
          hr: 'Čekam brata i njegovog prijatelja.',
          en: 'I am waiting for my brother and his friend.',
        },
        { who: 'Ana', hr: 'Poznajem li tvog brata?', en: 'Do I know your brother?' },
        {
          who: 'Tom',
          hr: 'Ne znam. Poznaješ li Marka Horvata?',
          en: 'I do not know. Do you know Marko Horvat?',
        },
        {
          who: 'Ana',
          hr: 'Marka ne poznajem, ali poznajem Ivu Horvat. Ona je moja profesorica.',
          en: 'I do not know Marko, but I know Iva Horvat. She is my teacher.',
        },
        {
          who: 'Tom',
          hr: 'Iva je Markova sestra! A ti, što tražiš?',
          en: "Iva is Marko's sister! And you, what are you looking for?",
        },
        {
          who: 'Ana',
          hr: 'Tražim konobara. On ima moj mobitel!',
          en: 'I am looking for the waiter. He has my cell phone!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is Tom waiting for, and who is Ana looking for?',
          options: [
            "Tom: his brother and the brother's friend. Ana: the waiter",
            'Tom: his sister. Ana: her teacher',
            'Tom: the waiter. Ana: her brother',
            'Tom: Iva Horvat. Ana: Marko Horvat',
          ],
          correct: 0,
          hint: 'Tom is waiting for two people; Ana needs the person who has her phone.',
          explanation:
            "Tom waits for his brother and his brother's friend. Ana is looking for the waiter, because he has her phone.",
        },
        {
          q: 'In Ana\'s last line the waiter gets an extra -a ("Tražim konobara"), but the phone does not change ("ima moj mobitel"). Both are masculine objects. Why the difference?',
          options: [
            'A waiter is alive; a phone is a thing',
            'The waiter is far away and the phone is near',
            'Words for jobs always end in -a',
            'It is a slip — it should be "mobitela"',
          ],
          correct: 0,
          hint: 'Ana asks Tom "Koga čekaš?" about people, and Tom asks her "Što tražiš?".',
          explanation:
            'A masculine noun for a person or an animal adds -a as an object: konobar → konobara, brat → brata. A masculine thing stays as it is: mobitel.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Koga tražiš?" You are looking for the doctor. Answer: Tražim ____. (liječnik)',
          answer: 'liječnika',
          hint: 'A doctor is a person, so do what Ana does with the waiter.',
          explanation: 'Tražim liječnika. — a living masculine noun adds -a as an object.',
        },
        {
          type: 'type',
          q: 'You know Ana Kovač, but today you are calling her husband, Ivan Kovač. Say it: Zovem Ivana ____.',
          answer: 'Kovača',
          hint: 'Compare "Marka Horvata" with "Ivu Horvat" in the dialogue: whose surname changes?',
          explanation:
            "Zovem Ivana Kovača. — a man's surname changes like any masculine noun. A woman's surname does not: Zovem Anu Kovač.",
        },
        {
          type: 'transform',
          q: 'Change the object from the car to "novi susjed" (a new neighbor).',
          from: 'Vidim novi auto.',
          answer: 'Vidim novog susjeda.',
          accept: ['Vidim novoga susjeda.'],
          hint: 'A neighbor is alive: the noun adds -a, and the adjective changes too — as in "njegovog prijatelja".',
          explanation:
            'Vidim novog susjeda. — for a living masculine noun the adjective takes -og and the noun takes -a. A car is a thing, so novi auto stays.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'As an object, does the masculine word add -a (it is alive) or stay the same (it is a thing)?',
        groups: ['Alive — adds -a', 'A thing — stays the same'],
        items: [
          { hr: 'brat', group: 0 },
          { hr: 'stol', group: 1 },
          { hr: 'konobar', group: 0 },
          { hr: 'film', group: 1 },
          { hr: 'pas', group: 0 },
          { hr: 'mobitel', group: 1 },
          { hr: 'liječnik', group: 0 },
          { hr: 'grad', group: 1 },
        ],
        explanation:
          'People and animals add -a: brata, konobara, psa, liječnika. Things do not change: stol, film, mobitel, grad.',
      },
      3,
      {
        type: 'match',
        q: 'Match each question to the answer that fits it.',
        pairs: [
          ['Koga čekaš?', 'Susjeda.'],
          ['Tko čeka?', 'Susjed.'],
          ['Što čitaš?', 'Pismo.'],
        ],
        explanation:
          'Koga? asks about a person as the object: Susjeda. Tko? asks about the subject: Susjed. Što? asks about a thing: Pismo.',
      },
      5,
      {
        type: 'tf',
        q: 'Ivan: „Volim psa, a ne mačku.“ — True or false: Ivan voli mačku.',
        answer: false,
        hint: '"a ne" means "and not".',
        explanation: 'Ivan loves the dog, not the cat. pas is alive, so as an object it is psa.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Do you know my neighbor?"',
        words: ['Poznaješ', 'li', 'mog', 'susjeda?'],
        explanation: 'Poznaješ li mog susjeda? — moj susjed → mog susjeda: both words change.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Danas', 'čekam', 'Marko.'],
        wrong: 2,
        answer: 'Marka',
        hint: 'Marko is a person, and here he is the one being waited for.',
        explanation:
          "Danas čekam Marka. — a man's name adds -a as an object, like any living masculine noun: Marko → Marka.",
      },
      {
        type: 'transform',
        q: 'You are not waiting for the bus but for "novi kolega" (a new colleague). Change the object.',
        from: 'Čekam autobus.',
        answer: 'Čekam novog kolegu.',
        accept: ['Čekam novoga kolegu.'],
        hint: 'kolega ends in -a, so the noun changes like a feminine word — but the adjective is still masculine and alive.',
        explanation:
          'Čekam novog kolegu. — kolega changes -a to -u, like sestra → sestru; the adjective takes the living masculine ending -og.',
      },
      2,
      {
        type: 'listen',
        audio: 'Koga zoveš?',
        q: 'What is the speaker asking about?',
        options: ['A person', 'A thing', 'A place', 'A time'],
        correct: 0,
        explanation:
          'Koga zoveš? — "Whom are you calling?" Koga asks about a person or an animal as the object.',
      },
      8,
      12,
      {
        type: 'transform',
        q: 'Now you are calling her husband, Marko Kovač. Change the sentence.',
        from: 'Zovem Anu Kovač.',
        answer: 'Zovem Marka Kovača.',
        hint: "A man's first name and surname both change.",
        explanation:
          'Zovem Marka Kovača. — Marko → Marka, Kovač → Kovača. For a woman only the first name changes: Anu Kovač.',
      },
      13,
      {
        type: 'dictate',
        audio: 'Vidim brata i sestru.',
        answer: 'Vidim brata i sestru.',
        hint: 'Four words: two members of the family, both as objects.',
        explanation: 'Vidim brata i sestru. — brat adds -a (alive), sestra changes -a to -u.',
      },
    ],
  },

  // ══ Unit 7 ═════════════════════════════════════════════════════════════════

  // ── imati-nemati ───────────────────────────────────────────────────────────
  'imati-nemati': {
    text: {
      kind: 'dialogue',
      title: 'Imaš li brata?',
      lines: [
        {
          who: 'Ana',
          hr: 'Tom, imaš li brata ili sestru?',
          en: 'Tom, do you have a brother or a sister?',
        },
        {
          who: 'Tom',
          hr: 'Imam sestru, ali nemam brata. A ti?',
          en: 'I have a sister, but I do not have a brother. And you?',
        },
        {
          who: 'Ana',
          hr: 'Imam brata. Zove se Ivan i ima osamnaest godina.',
          en: 'I have a brother. His name is Ivan and he is eighteen.',
        },
        { who: 'Tom', hr: 'A koliko ti imaš godina?', en: 'And how old are you?' },
        {
          who: 'Ana',
          hr: 'Imam dvadeset godina. Imate li ti i sestra psa?',
          en: 'I am twenty. Do you and your sister have a dog?',
        },
        {
          who: 'Tom',
          hr: 'Nemamo psa, ali imamo mačku. Ima li ovdje kavana?',
          en: 'We do not have a dog, but we have a cat. Is there a café here?',
        },
        {
          who: 'Ana',
          hr: 'Ima, tamo. Ali ja nemam vremena!',
          en: 'There is, over there. But I do not have time!',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: what do we learn about Tom's family?",
          options: [
            'He has a sister and a cat, but no brother and no dog',
            'He has a brother and a dog',
            'He has a sister and a dog, but no cat',
            'He has neither a brother nor a sister',
          ],
          correct: 0,
          hint: 'Tom says no about one person and about one animal.',
          explanation: 'Tom has a sister and a cat. He has no brother, and the family has no dog.',
        },
        {
          q: 'Tom asks "Ima li ovdje kavana?" Who "has" something in this sentence?',
          options: [
            'Nobody — here ima means "there is"',
            'Ana has a café',
            'Tom has a café',
            'The brother, Ivan',
          ],
          correct: 0,
          hint: 'Look at the English line: there is no "have" in it at all.',
          explanation:
            'ima, the he/she/it form of imati, also means "there is": Ima li ovdje kavana? — "Is there a café here?" The answer is simply Ima.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU how old you are. Begin your answer, then add your own number: ____ … godina.',
          answer: 'Imam',
          hint: 'In Croatian you "have" your years. Use the "I" form.',
          explanation:
            'Imam … godina. — literally "I have … years". Croatian never says "I am twenty": age is something you have.',
        },
        {
          type: 'type',
          q: 'Ana asks: "Imate li ti i tvoja obitelj auto?" You do not. Answer for the whole family in one word, with the verb: ____.',
          answer: 'Nemamo',
          hint: 'You are answering for "we". The verb joins with "ne" into one word.',
          explanation: 'Nemamo. — "We do not." ne + imamo is written as one word.',
        },
        {
          type: 'transform',
          q: 'Now ask a stranger, politely (Vi), instead of a friend.',
          from: 'Imaš li kartu?',
          answer: 'Imate li kartu?',
          hint: 'Only the ending of the verb changes — the form Ana uses for "you and your sister".',
          explanation:
            'Imate li kartu? — the "vi" form is used for several people and for one person you address politely.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each person to the form of nemati (not to have).',
        pairs: [
          ['ja', 'nemam'],
          ['ti', 'nemaš'],
          ['on', 'nema'],
          ['mi', 'nemamo'],
          ['oni', 'nemaju'],
        ],
        explanation:
          'nemam, nemaš, nema, nemamo, nemate, nemaju — the forms of imati with ne- joined on the front.',
      },
      0,
      4,
      {
        type: 'tf',
        q: 'Tom: „Imam psa, ali nemam mačku.“ — True or false: Tom ima psa i mačku.',
        answer: false,
        hint: 'Which of the two animals does Tom say "nemam" about?',
        explanation: 'Tom has a dog, but no cat: nemam mačku.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "We do not have a car, but we have a bike."',
        words: ['Nemamo', 'auto,', 'ali', 'imamo', 'bicikl.'],
        explanation:
          'Nemamo auto, ali imamo bicikl. — a car and a bike are masculine things, so neither changes as an object.',
      },
      6,
      7,
      {
        type: 'sort',
        q: 'What does "ima" mean in each sentence: "has", or "there is"?',
        groups: ['Somebody has something', 'There is …'],
        items: [
          { hr: 'Ana ima mačku.', group: 0 },
          { hr: 'Ima li ovdje hotel?', group: 1 },
          { hr: 'Moj brat ima auto.', group: 0 },
          { hr: 'Ima li ovdje restoran?', group: 1 },
          { hr: 'Tom ima bicikl.', group: 0 },
          { hr: 'Ima li ovdje kavana?', group: 1 },
        ],
        explanation:
          'With an owner in front (Ana, moj brat, Tom), ima means "has". With no owner — Ima li ovdje …? — it means "is there".',
      },
      3,
      {
        type: 'transform',
        q: 'Make the sentence negative.',
        from: 'Imamo veliku kuću.',
        answer: 'Nemamo veliku kuću.',
        hint: 'imati fuses with ne into one word. Nothing else in the sentence moves.',
        explanation: 'Nemamo veliku kuću. — what you do not have is still an object: veliku kuću.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Imam', 'mala', 'sobu.'],
        wrong: 1,
        answer: 'malu',
        hint: 'What you have is an object, and the word describing it changes with it.',
        explanation: 'Imam malu sobu. — mala soba → malu sobu: both words take -u.',
      },
      8,
      11,
      {
        type: 'listen',
        audio: 'Koliko imate godina?',
        q: 'What does the speaker want to know?',
        options: ['Your age', 'Your name', 'Your address', 'How many children you have'],
        correct: 0,
        explanation:
          'Koliko imate godina? — "How old are you?", asked politely. Literally: how many years do you have?',
      },
      {
        type: 'dictate',
        audio: 'Nemam kišobran.',
        answer: 'Nemam kišobran.',
        hint: 'Two words. The second is the thing you hold over your head in the rain.',
        explanation:
          'Nemam kišobran. — "I do not have an umbrella." A masculine thing does not change as an object.',
      },
    ],
  },

  // ── at-the-hotel ───────────────────────────────────────────────────────────
  'at-the-hotel': {
    text: {
      kind: 'dialogue',
      title: 'Imam rezervaciju',
      lines: [
        {
          who: 'Recepcionarka',
          hr: 'Dobar dan! Imate li rezervaciju?',
          en: 'Good afternoon! Do you have a reservation?',
        },
        {
          who: 'Tom',
          hr: 'Dobar dan. Imam rezervaciju.',
          en: 'Good afternoon. I have a reservation.',
        },
        { who: 'Recepcionarka', hr: 'Na koje ime?', en: 'Under what name?' },
        { who: 'Tom', hr: 'Na ime Brown.', en: 'Under the name Brown.' },
        {
          who: 'Recepcionarka',
          hr: 'Hvala. Vašu putovnicu, molim. Ostajete jednu noć?',
          en: 'Thank you. Your passport, please. Are you staying one night?',
        },
        {
          who: 'Tom',
          hr: 'Ne, ostajem cijeli tjedan. Imate li wifi?',
          en: 'No, I am staying the whole week. Do you have wifi?',
        },
        {
          who: 'Recepcionarka',
          hr: 'Imamo. Doručak je uključen. Izvolite ključ. Ugodan boravak!',
          en: 'We do. Breakfast is included. Here is your key. Enjoy your stay!',
        },
        { who: 'Tom', hr: 'Hvala!', en: 'Thank you!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how long is Tom staying, and what does he get with the room?',
          options: [
            'The whole week, with breakfast and wifi',
            'One night, with breakfast',
            'The whole week, but without breakfast',
            'One night, and there is no wifi',
          ],
          correct: 0,
          hint: 'The receptionist guesses the length of the stay, and Tom corrects her.',
          explanation:
            'Tom stays the whole week (cijeli tjedan). The hotel has wifi, and breakfast is included.',
        },
        {
          q: 'The receptionist says "Vašu putovnicu, molim." The dictionary forms are "Vaša putovnica". Why do both words end in -u here?',
          options: [
            'The passport is what she is asking for — an object, so -a becomes -u',
            'Because she is speaking politely',
            'Because Tom is a man',
            'Because she means several passports',
          ],
          correct: 0,
          hint: 'Compare "Imam rezervaciju" — the dictionary form is rezervacija.',
          explanation:
            'What you ask for or have is an object. A feminine word in -a takes -u, and the word in front of it changes with it: Vašu putovnicu.',
        },
        {
          type: 'type',
          q: 'Now you. You and a friend arrive together. The receptionist asks: "Ostajete jednu noć?" No — the whole week. Answer for both of you: Ne, ____ cijeli tjedan.',
          answer: 'ostajemo',
          hint: 'Tom says "ostajem" about himself, and the receptionist says "ostajete". For "we", swap the ending for -mo, as in imamo.',
          explanation: 'Ne, ostajemo cijeli tjedan. — "No, we are staying the whole week."',
        },
        {
          type: 'type',
          q: 'You want a double room, not a single one. Ask: Imate li ____ sobu? (dvokrevetna)',
          answer: 'dvokrevetnu',
          hint: 'The room is an object, and the word that describes it changes with it.',
          explanation:
            'Imate li dvokrevetnu sobu? — dvokrevetna soba → dvokrevetnu sobu: both words take -u.',
        },
        {
          type: 'transform',
          q: 'Something is broken. Tell reception that it does NOT work.',
          from: 'Lift radi.',
          answer: 'Lift ne radi.',
          hint: 'Put the word for "not" straight in front of the verb.',
          explanation:
            'Lift ne radi. — "The elevator does not work." raditi means to work, for people and for machines.',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'match',
        q: 'Match each reception phrase to its meaning.',
        pairs: [
          ['Na koje ime?', 'Under what name?'],
          ['Izvolite ključ.', 'Here is your key.'],
          ['Ugodan boravak!', 'Enjoy your stay!'],
          ['Račun, molim.', 'The check, please.'],
          ['Kada je odjava?', 'When is checkout?'],
        ],
        explanation:
          'The first three you will hear from the receptionist; the last two are yours to say.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Imate', 'li', 'slobodna', 'sobu?'],
        wrong: 2,
        answer: 'slobodnu',
        hint: 'The room is an object. The word describing it has to change with it.',
        explanation: 'Imate li slobodnu sobu? — slobodna soba → slobodnu sobu.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Do you have a free room tonight?"',
        words: ['Imate', 'li', 'večeras', 'slobodnu', 'sobu?'],
        explanation: 'Imate li večeras slobodnu sobu? — the verb first, then li.',
      },
      5,
      {
        type: 'tf',
        q: 'Tom: „Ostajem cijeli tjedan.“ — True or false: Tom is staying for one night only.',
        answer: false,
        hint: 'tjedan is seven days.',
        explanation: 'cijeli tjedan — the whole week. One night would be jednu noć.',
      },
      6,
      {
        type: 'listen',
        audio: 'Vašu putovnicu, molim.',
        q: 'What should you hand over?',
        options: ['Your passport', 'Your key', 'Your check', 'Your password'],
        correct: 0,
        explanation: 'Vašu putovnicu, molim. — "Your passport, please."',
      },
      {
        type: 'sort',
        q: 'Who says it: the guest, or the receptionist?',
        groups: ['The guest', 'The receptionist'],
        items: [
          { hr: 'Imam rezervaciju.', group: 0 },
          { hr: 'Na koje ime?', group: 1 },
          { hr: 'Kada je odjava?', group: 0 },
          { hr: 'Ugodan boravak!', group: 1 },
          { hr: 'Imate li wifi?', group: 0 },
          { hr: 'Doručak je uključen.', group: 1 },
        ],
        explanation:
          'The guest has a reservation and asks about checkout and wifi. The receptionist asks for the name, says what is included and wishes you a pleasant stay.',
      },
      {
        type: 'transform',
        q: 'You are not alone: say it for the two of you — change "ja" to "mi".',
        from: 'Ostajem jednu noć.',
        answer: 'Ostajemo jednu noć.',
        hint: 'Only the verb changes: the "we" ending is -mo.',
        explanation: 'Ostajemo jednu noć. — "We are staying one night." ostajem → ostajemo.',
      },
      9,
      8,
      {
        type: 'dictate',
        audio: 'Oprostite, lift ne radi.',
        answer: 'Oprostite, lift ne radi.',
        hint: 'Four words. It starts with the polite word for "excuse me".',
        explanation: 'Oprostite, lift ne radi. — "Excuse me, the elevator does not work."',
      },
    ],
  },

  // ── modals-basic ───────────────────────────────────────────────────────────
  'modals-basic': {
    text: {
      kind: 'dialogue',
      title: 'Možeš li doći?',
      lines: [
        {
          who: 'Ana',
          hr: 'Tom, večeras gledamo film. Možeš li doći?',
          en: 'Tom, we are watching a movie tonight. Can you come?',
        },
        {
          who: 'Tom',
          hr: 'Ne mogu, večeras moram raditi.',
          en: 'I cannot, I have to work tonight.',
        },
        {
          who: 'Ana',
          hr: 'A sutra? Želim naučiti kuhati, a ti znaš kuhati!',
          en: 'And tomorrow? I want to learn to cook, and you know how to cook!',
        },
        {
          who: 'Tom',
          hr: 'Sutra mogu. Što želiš kuhati?',
          en: 'Tomorrow I can. What do you want to cook?',
        },
        {
          who: 'Ana',
          hr: 'Hoću kuhati juhu. Ali moramo kupiti kruh.',
          en: 'I want to cook soup. But we have to buy bread.',
        },
        { who: 'Tom', hr: 'Može! Ja mogu kupiti kruh.', en: 'Sure! I can buy the bread.' },
        {
          who: 'Ana',
          hr: 'Odlično! Može li i tvoja sestra doći?',
          en: 'Great! Can your sister come too?',
        },
        { who: 'Tom', hr: 'Ne može, ona mora učiti.', en: 'She cannot, she has to study.' },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: when is Tom coming to Ana's, and why not tonight?",
          options: [
            'Tomorrow — tonight he has to work',
            'Tonight — tomorrow he has to work',
            'Tomorrow — tonight he has to study',
            'He is not coming at all',
          ],
          correct: 0,
          hint: 'It is his sister who has to study.',
          explanation: 'Tonight Tom has to work (moram raditi); tomorrow he can (Sutra mogu).',
        },
        {
          q: 'Look at "moram raditi", "mogu kupiti", "želim naučiti". What do the second verbs have in common?',
          options: [
            'They stay in the dictionary form, ending in -ti',
            'They are all in the "I" form',
            'They are all negative',
            'They all come before the first verb',
          ],
          correct: 0,
          hint: 'Only the first verb in each pair changes for the person.',
          explanation:
            'After can, must and want, the second verb stays in its dictionary form: moram raditi, never "moram radim". English does the same: I must GO.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Znaš li kuhati?" You do know how. Answer in one word, with the verb: ____.',
          answer: 'Znam',
          hint: 'Answer about yourself with the "I" form of the verb in her question.',
          explanation:
            'Znam. — "I do (know how)." For a skill you have learned, Croatian uses znati, not moći.',
        },
        {
          type: 'type',
          q: 'Tom and his sister cannot come: they have to work. Say it: Oni ____ raditi.',
          answer: 'moraju',
          hint: 'Tom says "moram" about himself. The "they" form keeps the -a- and adds the "they" ending you know from imaju.',
          explanation:
            'Oni moraju raditi. — morati goes like imati: moram, moraš, mora, moramo, morate, moraju.',
        },
        {
          type: 'transform',
          q: 'Say that you WANT to do it — add "želim".',
          from: 'Učim hrvatski.',
          answer: 'Želim učiti hrvatski.',
          hint: "želim takes the person ending. The other verb goes back to its dictionary form, like učiti in Tom's last line.",
          explanation:
            'Želim učiti hrvatski. — only želim changes for the person; učiti stays in the dictionary form.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each verb to its meaning.',
        pairs: [
          ['moći', 'to be able to'],
          ['morati', 'to have to'],
          ['htjeti', 'to want'],
          ['trebati', 'to need'],
          ['znati', 'to know how to'],
        ],
        explanation:
          'All five can be followed by a second verb, and that second verb stays in its dictionary form.',
      },
      0,
      {
        type: 'sort',
        q: 'Is it the dictionary form (the one that follows a modal verb), or a form for one particular person?',
        groups: ['Dictionary form', 'A person form'],
        items: [
          { hr: 'raditi', group: 0 },
          { hr: 'radim', group: 1 },
          { hr: 'doći', group: 0 },
          { hr: 'možemo', group: 1 },
          { hr: 'kupiti', group: 0 },
          { hr: 'želiš', group: 1 },
          { hr: 'ići', group: 0 },
          { hr: 'moraju', group: 1 },
        ],
        explanation:
          'The dictionary form ends in -ti or -ći: raditi, doći, kupiti, ići. The others carry a person ending.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "I want to reserve a table."',
        words: ['Želim', 'rezervirati', 'stol.'],
        explanation: 'Želim rezervirati stol. — first the modal verb, then the dictionary form.',
      },
      6,
      {
        type: 'tf',
        q: 'Tom: „Znam plivati, ali danas ne mogu.“ — True or false: Tom ne zna plivati.',
        answer: false,
        hint: 'znati is about a skill; moći is about being able to right now.',
        explanation: 'Tom knows how to swim (Znam plivati) — he just cannot today (danas ne mogu).',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Želim', 'gledam', 'film.'],
        wrong: 1,
        answer: 'gledati',
        hint: 'After želim, the second verb must not have a person ending.',
        explanation:
          'Želim gledati film. — only the first verb changes; the second stays in the dictionary form.',
      },
      7,
      {
        type: 'transform',
        q: 'Say that you HAVE TO do it — add "moram".',
        from: 'Danas radim.',
        answer: 'Danas moram raditi.',
        accept: ['Moram raditi danas.', 'Moram danas raditi.'],
        hint: 'moram carries the person; the other verb goes back to its dictionary form.',
        explanation: 'Danas moram raditi. — radim becomes raditi after moram.',
      },
      {
        type: 'listen',
        audio: 'Mogu li platiti, molim?',
        q: 'What does the speaker want to do?',
        options: ['Pay', 'Sit down', 'Come in', 'Repeat something'],
        correct: 0,
        explanation: 'Mogu li platiti, molim? — "Can I pay, please?"',
      },
      {
        type: 'transform',
        q: 'Ask a stranger, politely (Vi), instead of a friend.',
        from: 'Možeš li ponoviti?',
        answer: 'Možete li ponoviti?',
        hint: 'Only the ending of the first verb changes.',
        explanation:
          'Možete li ponoviti? — "Could you repeat that?" One of the most useful questions you can learn.',
      },
      8,
      11,
      {
        type: 'dictate',
        audio: 'Djeca moraju učiti.',
        answer: 'Djeca moraju učiti.',
        hint: 'Three words: who has to do it, the modal verb, and the dictionary form.',
        explanation: 'Djeca moraju učiti. — "Children have to study."',
      },
    ],
  },

  // ── trebati-need ───────────────────────────────────────────────────────────
  'trebati-need': {
    text: {
      kind: 'dialogue',
      title: 'Što trebate?',
      lines: [
        {
          who: 'Prodavačica',
          hr: 'Dobar dan! Što trebate?',
          en: 'Good afternoon! What do you need?',
        },
        {
          who: 'Tom',
          hr: 'Dobar dan. Trebam kruh i mlijeko.',
          en: 'Good afternoon. I need bread and milk.',
        },
        {
          who: 'Prodavačica',
          hr: 'Izvolite. Trebate li vrećicu?',
          en: 'Here you are. Do you need a bag?',
        },
        {
          who: 'Tom',
          hr: 'Ne treba, hvala. Ana, trebamo li kavu?',
          en: 'No need, thanks. Ana, do we need coffee?',
        },
        {
          who: 'Ana',
          hr: 'Ne trebamo kavu, ali trebamo čaj. I treba kupiti meso.',
          en: 'We do not need coffee, but we need tea. And we need to buy meat.',
        },
        { who: 'Prodavačica', hr: 'Trebate li pomoć?', en: 'Do you need help?' },
        {
          who: 'Ana',
          hr: 'Ne trebamo ništa, hvala. Djeca trebaju jesti, moramo ići!',
          en: 'We do not need anything, thanks. The children need to eat, we have to go!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: Tom asks for bread and milk. What else do he and Ana still need?',
          options: ['Tea and meat', 'Coffee and a bag', 'Coffee and tea', 'Nothing at all'],
          correct: 0,
          hint: 'Ana says what they do NOT need, and then two things they do.',
          explanation:
            'They do not need coffee or a bag. They need tea (trebamo čaj), and meat has to be bought (treba kupiti meso).',
        },
        {
          q: 'Ana says "I treba kupiti meso." There is no "ja" or "mi" form here — just "treba". What does it mean?',
          options: [
            'It is necessary to buy meat — nobody in particular is named',
            'She needs to buy meat, and only she',
            'Tom needs meat',
            'The salesperson has to buy meat',
          ],
          correct: 0,
          hint: 'Compare it with "trebamo čaj" in the same line, where the "we" is in the ending.',
          explanation:
            'treba on its own, with no person, means "it is necessary" or "one should": Treba kupiti meso. — meat needs buying.',
        },
        {
          type: 'type',
          q: 'Now you. The salesperson asks YOU: "Što trebate?" You need a ticket. Answer: Trebam ____. (karta)',
          answer: 'kartu',
          hint: 'What you need is an object, exactly like what you have.',
          explanation: 'Trebam kartu. — karta → kartu: the thing you need takes the object form.',
        },
        {
          type: 'type',
          q: 'A friend looks lost. Ask whether he or she needs help: ____ li pomoć?',
          answer: 'Trebaš',
          hint: 'The salesperson asks politely, with -te. To a friend, use the "ti" ending.',
          explanation:
            'Trebaš li pomoć? — "Do you need help?", said to a friend. pomoć never changes.',
        },
        {
          type: 'transform',
          q: 'Say that you NEED TO do it — add "trebam".',
          from: 'Čekam autobus.',
          answer: 'Trebam čekati autobus.',
          hint: 'trebam carries the person; the other verb goes back to its dictionary form, like "jesti" in Ana\'s last line.',
          explanation:
            'Trebam čekati autobus. — after trebati the second verb stays in the dictionary form.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['karta', 'ticket'],
          ['odmor', 'rest'],
          ['vrećica', 'bag'],
          ['brzo', 'quickly'],
          ['taksi', 'taxi'],
        ],
        explanation:
          'Things you may need: Trebam kartu. Trebam odmor. Trebam vrećicu. Trebam taksi — brzo!',
      },
      {
        type: 'sort',
        q: 'What does the speaker need: a THING, or TO DO something?',
        groups: ['A thing', 'To do something'],
        items: [
          { hr: 'Trebam kartu.', group: 0 },
          { hr: 'Trebam spavati.', group: 1 },
          { hr: 'Trebamo taksi.', group: 0 },
          { hr: 'Trebaš učiti.', group: 1 },
          { hr: 'Trebam odmor.', group: 0 },
          { hr: 'Trebamo rezervirati stol.', group: 1 },
        ],
        explanation:
          'A thing you need is an object (kartu, taksi, odmor). Something you need to do is a verb in its dictionary form (spavati, učiti, rezervirati).',
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "Do you need help?"',
        words: ['Trebaš', 'li', 'pomoć?'],
        explanation: 'Trebaš li pomoć? — the verb first, then li.',
      },
      5,
      {
        type: 'tf',
        q: 'Ana: „Hvala, ne trebam ništa.“ — True or false: Ana needs help.',
        answer: false,
        hint: 'ništa means "nothing" — and the verb is negative too.',
        explanation: 'Ne trebam ništa. — "I do not need anything."',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'trebam', 'taksi.'],
        wrong: 2,
        answer: 'treba',
        hint: 'My sister is "she". Which form of the verb goes with ona?',
        explanation:
          'Moja sestra treba taksi. — trebam is the "I" form; for on and ona it is treba.',
      },
      3,
      6,
      {
        type: 'transform',
        q: 'You do not need a new phone but a new ticket (nova karta). Change the object.',
        from: 'Trebam novi mobitel.',
        answer: 'Trebam novu kartu.',
        hint: 'karta is feminine and ends in -a: both words change.',
        explanation:
          'Trebam novu kartu. — nova karta → novu kartu. novi mobitel did not change, because a phone is a masculine thing.',
      },
      9,
      8,
      {
        type: 'listen',
        audio: 'Što trebate?',
        q: 'Who would say this to you?',
        options: ['A salesperson', 'A close friend', 'A small child', 'Your brother'],
        correct: 0,
        explanation:
          'Što trebate? is the polite form — what a salesperson asks a customer. A friend would ask: Što trebaš?',
      },
      11,
      {
        type: 'transform',
        q: 'Say it without naming a person: "it is necessary to …".',
        from: 'Moramo kupiti kruh.',
        answer: 'Treba kupiti kruh.',
        hint: 'Use the one form of trebati that needs no person in front of it.',
        explanation: 'Treba kupiti kruh. — "Bread needs buying." No person is named.',
      },
      {
        type: 'dictate',
        audio: 'Trebam kavu, a ne čaj.',
        answer: 'Trebam kavu, a ne čaj.',
        hint: 'Five words. The first drink changes its ending as an object; the second does not.',
        explanation: 'Trebam kavu, a ne čaj. — "I need a coffee, not tea."',
      },
    ],
  },

  // ── smjeti-permission ──────────────────────────────────────────────────────
  'smjeti-permission': {
    text: {
      kind: 'dialogue',
      title: 'Smijem li ući?',
      lines: [
        { who: 'Tom', hr: 'Dobar dan! Smijem li ući?', en: 'Good afternoon! May I come in?' },
        {
          who: 'Čuvar',
          hr: 'Naravno, izvolite. Ali pas ne smije ući.',
          en: 'Of course, please do. But the dog is not allowed in.',
        },
        { who: 'Tom', hr: 'A smijem li fotografirati?', en: 'And may I take photos?' },
        {
          who: 'Čuvar',
          hr: 'Ne, ne smijete. Ovdje je zabranjeno fotografirati.',
          en: 'No, you may not. Taking photos is forbidden here.',
        },
        { who: 'Ana', hr: 'Smijemo li sjesti ovdje?', en: 'May we sit down here?' },
        {
          who: 'Čuvar',
          hr: 'Smijete. Ali ne smijete pušiti.',
          en: 'You may. But you may not smoke.',
        },
        {
          who: 'Ana',
          hr: 'Nema problema, ne pušimo. A djeca? Smiju li djeca ući?',
          en: 'No problem, we do not smoke. And children? Are children allowed in?',
        },
        { who: 'Čuvar', hr: 'Smiju, naravno!', en: 'They are, of course!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is allowed in this place, and what is not?',
          options: [
            'You may come in and sit down, but not take photos or smoke',
            'You may take photos, but not sit down',
            'You may smoke, but not bring children',
            'Nothing is allowed — nobody may come in',
          ],
          correct: 0,
          hint: 'The guard says "ne" to two things people want to do, and to one animal.',
          explanation:
            'Coming in and sitting down are fine, and children are welcome. Photos and smoking are forbidden, and the dog has to stay outside.',
        },
        {
          q: 'The guard says "pas ne smije ući", but about the children he says "Smiju". Why are the two forms different?',
          options: [
            'There is one dog, but the children are "they"',
            'Dogs and people take different verbs',
            'One sentence is negative and the other is not',
            'One of them is the polite form',
          ],
          correct: 0,
          hint: 'How many dogs? How many children?',
          explanation:
            'smije is the he/she/it form, for one dog. smiju is the "they" form — and djeca always takes the "they" form.',
        },
        {
          type: 'type',
          q: 'Now you. It is hot in a waiting room. Ask whether you may open the window: ____ li otvoriti prozor?',
          answer: 'Smijem',
          hint: 'Ask about yourself, the way Tom asks at the door.',
          explanation:
            'Smijem li otvoriti prozor? — "May I open the window?" The second verb stays in its dictionary form.',
        },
        {
          type: 'type',
          q: 'A friend asks you: "Smijem li ovdje pušiti?" It is forbidden. Answer your friend: Ne, ne ____.',
          answer: 'smiješ',
          hint: 'The guard answers Tom politely, with -te. To a friend, use the "ti" ending.',
          explanation: 'Ne, ne smiješ. — "No, you may not", said to a friend.',
        },
        {
          type: 'transform',
          q: 'Say what the sign means as a full sentence about "us". Start with "Ovdje".',
          from: 'Zabranjeno parkirati.',
          answer: 'Ovdje ne smijemo parkirati.',
          hint: 'Use "ne" and the "we" form — the one Ana uses when she asks about sitting down.',
          explanation:
            'Ovdje ne smijemo parkirati. — "We are not allowed to park here." The sign and the sentence say the same thing.',
        },
      ],
    },
    mix: [
      {
        type: 'fix',
        q: 'One word is spelled wrong. Tap it.',
        words: ['Smjem', 'li', 'sjesti', 'ovdje?'],
        wrong: 0,
        answer: 'Smijem',
        hint: 'The dictionary form has "je", but in the present it grows longer.',
        explanation:
          'Smijem li sjesti ovdje? — smjeti, but smijem, smiješ, smije: the present is written with ije.',
      },
      5,
      {
        type: 'match',
        q: 'Match each question to its meaning.',
        pairs: [
          ['Smijem li ući?', 'May I come in?'],
          ['Smijem li sjesti?', 'May I sit down?'],
          ['Smijem li otvoriti prozor?', 'May I open the window?'],
          ['Smijem li pušiti?', 'May I smoke?'],
        ],
        explanation: 'Smijem li + a verb in its dictionary form: ući, sjesti, otvoriti, pušiti.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "You must not drive fast."',
        words: ['Ne', 'smiješ', 'voziti', 'brzo.'],
        explanation:
          'Ne smiješ voziti brzo. — ne stands in front of smiješ, and voziti stays in the dictionary form.',
      },
      {
        type: 'sort',
        q: 'Is it forbidden (must not), or simply not necessary (need not)?',
        groups: ['Forbidden — must not', 'Not necessary — need not'],
        items: [
          { hr: 'Ne smiješ pušiti.', group: 0 },
          { hr: 'Ne moraš doći.', group: 1 },
          { hr: 'Ne smije voziti.', group: 0 },
          { hr: 'Ne moramo čekati.', group: 1 },
          { hr: 'Ne smijem jesti meso.', group: 0 },
          { hr: 'Ne morate platiti.', group: 1 },
        ],
        explanation:
          'ne smjeti forbids: you must not. ne morati only takes the duty away: you do not have to, but you may.',
      },
      4,
      {
        type: 'tf',
        q: 'Mama: „Ne moraš doći, ali smiješ.“ — True or false: you are allowed to come.',
        answer: true,
        hint: 'Read the second half: what does smiješ mean?',
        explanation: 'You do not have to come (ne moraš), but you may (smiješ).',
      },
      6,
      {
        type: 'listen',
        audio: 'Ovdje ne smijete pušiti.',
        q: 'What are you being told?',
        options: [
          'You must not smoke here.',
          'You do not have to smoke here.',
          'You may smoke here.',
          'You must not park here.',
        ],
        correct: 0,
        explanation: 'Ovdje ne smijete pušiti. — "You are not allowed to smoke here."',
      },
      2,
      7,
      {
        type: 'transform',
        q: 'Ask about "we" instead of "I".',
        from: 'Smijem li fotografirati?',
        answer: 'Smijemo li fotografirati?',
        hint: 'Only the ending of the first verb changes.',
        explanation: 'Smijemo li fotografirati? — "Are we allowed to take photos?"',
      },
      10,
      13,
      12,
      {
        type: 'dictate',
        audio: 'Pas ne smije ući.',
        answer: 'Pas ne smije ući.',
        hint: 'Four words: an animal, and what it is not allowed to do.',
        explanation: 'Pas ne smije ući. — "The dog is not allowed in."',
      },
    ],
  },

  // ══ Unit 8 ═════════════════════════════════════════════════════════════════

  // ── money-exchange ─────────────────────────────────────────────────────────
  'money-exchange': {
    text: {
      kind: 'dialogue',
      title: 'Trebam promijeniti novac',
      lines: [
        {
          who: 'Tom',
          hr: 'Dobar dan. Trebam promijeniti novac. Imam dolare.',
          en: 'Good afternoon. I need to change money. I have dollars.',
        },
        {
          who: 'Službenica',
          hr: 'Dobar dan. Nema problema. Koliko trebate?',
          en: 'Good afternoon. No problem. How much do you need?',
        },
        {
          who: 'Tom',
          hr: 'Ne znam. Kakav je tečaj danas?',
          en: 'I do not know. What is the exchange rate today?',
        },
        {
          who: 'Službenica',
          hr: 'Tečaj je dobar, a provizija je mala.',
          en: 'The rate is good, and the fee is small.',
        },
        {
          who: 'Tom',
          hr: 'Odlično. Želim promijeniti ovu novčanicu.',
          en: 'Great. I want to change this banknote.',
        },
        {
          who: 'Službenica',
          hr: 'Izvolite novac i račun.',
          en: 'Here are your money and your receipt.',
        },
        {
          who: 'Tom',
          hr: 'Hvala. Ima li ovdje bankomat?',
          en: 'Thank you. Is there a ATM here?',
        },
        {
          who: 'Službenica',
          hr: 'Ima, tamo. Ali danas ne radi!',
          en: 'There is, over there. But it is not working today!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Tom do at the counter, and what does he learn about the ATM?',
          options: [
            'He changes a banknote; the ATM is not working today',
            'He buys dollars; the ATM is next door',
            'He pays a bill by card; there is no ATM',
            'He changes nothing, because the fee is too big',
          ],
          correct: 0,
          hint: 'He leaves with money and a receipt, and with bad news about a machine.',
          explanation:
            'Tom changes one banknote and gets his money and a receipt. There is a ATM, but today it does not work.',
        },
        {
          q: 'Tom says "Želim promijeniti ovu novčanicu." The dictionary forms are "ova novčanica". Why do both words end in -u?',
          options: [
            'The banknote is what he wants to change — an object, so -a becomes -u',
            'Because he has several banknotes',
            'Because he is speaking politely',
            'Because the word comes last in the sentence',
          ],
          correct: 0,
          hint: 'It is the same change as kava → kavu.',
          explanation:
            'The banknote is the object of promijeniti. A feminine word in -a takes -u, and the word in front of it changes with it: ovu novčanicu.',
        },
        {
          type: 'type',
          q: 'Now you. A store takes only cash, and you have only your card. Say that you have no cash: Nemam ____. (gotovina)',
          answer: 'gotovinu',
          hint: 'What you do not have is an object — the same change as in "ovu novčanicu".',
          explanation:
            'Nemam gotovinu. — gotovina → gotovinu: what you have, need or do not have is an object.',
        },
        {
          type: 'type',
          q: 'You have paid in a store and you need the receipt. Ask for it: Trebam ____, molim.',
          answer: 'račun',
          hint: 'The clerk hands Tom two things: his money, and this.',
          explanation:
            'Trebam račun, molim. — račun is the receipt or the check. It is a masculine thing, so it does not change as an object.',
        },
        {
          type: 'transform',
          q: 'You are not alone: say that WE want to change it.',
          from: 'Želim promijeniti ovu novčanicu.',
          answer: 'Želimo promijeniti ovu novčanicu.',
          hint: 'Only the first verb changes. The "we" ending is the one in imamo and trebamo.',
          explanation:
            'Želimo promijeniti ovu novčanicu. — only želim changes for the person; promijeniti stays in its dictionary form.',
        },
      ],
    },
    mix: [
      2,
      {
        type: 'match',
        q: 'Match each money word to its meaning.',
        pairs: [
          ['novac', 'money'],
          ['kartica', 'card'],
          ['novčanica', 'banknote'],
          ['tečaj', 'exchange rate'],
          ['provizija', 'fee'],
        ],
        explanation:
          'novac is money in general; a novčanica is one paper note. At the exchange office you ask about the tečaj and the provizija.',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order: "Where is the exchange office?"',
        words: ['Gdje', 'je', 'mjenjačnica?'],
        explanation: 'Gdje je mjenjačnica? — the question word first.',
      },
      4,
      {
        type: 'tf',
        q: 'Hrvatska danas koristi kunu.',
        answer: false,
        hint: 'koristi means "uses". Think of the € sign on a Croatian price tag.',
        explanation:
          'Hrvatska danas koristi euro. Kuna je stara valuta — the kuna is the old currency.',
      },
      5,
      {
        type: 'sort',
        q: 'Is it money itself, or a place where you get money?',
        groups: ['Money', 'A place'],
        items: [
          { hr: 'novčanica', group: 0 },
          { hr: 'banka', group: 1 },
          { hr: 'kovanica', group: 0 },
          { hr: 'mjenjačnica', group: 1 },
          { hr: 'euro', group: 0 },
          { hr: 'bankomat', group: 1 },
        ],
        explanation:
          'A novčanica (note), a kovanica (coin) and the euro are money. A banka, a mjenjačnica and a bankomat are where you get it.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Koliko', 'koštam', 'kava?'],
        wrong: 1,
        answer: 'košta',
        hint: 'The coffee is "it" — the verb must not be in the "I" form.',
        explanation:
          'Koliko košta kava? — "How much does a coffee cost?" The verb agrees with kava: košta.',
      },
      6,
      {
        type: 'transform',
        q: 'Change "ja" to "mi".',
        from: 'Trebam promijeniti novac.',
        answer: 'Trebamo promijeniti novac.',
        hint: 'Only the first verb changes; the second stays in the dictionary form.',
        explanation: 'Trebamo promijeniti novac. — "We need to change money."',
      },
      9,
      {
        type: 'listen',
        audio: 'Kartica ili gotovina?',
        q: 'What are you being asked?',
        options: [
          'How you want to pay',
          'How much you want to change',
          'Where the bank is',
          'Whether you have small change',
        ],
        correct: 0,
        explanation: 'Kartica ili gotovina? — "Card or cash?"',
      },
      7,
      {
        type: 'dictate',
        audio: 'Koliko je to?',
        answer: 'Koliko je to?',
        hint: 'Three short words: what you ask at the till.',
        explanation: 'Koliko je to? — "How much is that?"',
      },
    ],
  },

  // ── time-calendar ──────────────────────────────────────────────────────────
  'time-calendar': {
    text: {
      kind: 'dialogue',
      title: 'Koji je danas dan?',
      lines: [
        { who: 'Ana', hr: 'Tom, koji je danas dan?', en: 'Tom, what day is it today?' },
        {
          who: 'Tom',
          hr: 'Danas je srijeda. Sutra je četvrtak.',
          en: 'Today is Wednesday. Tomorrow is Thursday.',
        },
        {
          who: 'Ana',
          hr: 'U srijedu uvijek učim hrvatski. A što radiš u petak?',
          en: 'On Wednesday I always study Croatian. And what are you doing on Friday?',
        },
        {
          who: 'Tom',
          hr: 'U petak imam ispit. Ali u subotu ne radim.',
          en: 'On Friday I have an exam. But on Saturday I am not working.',
        },
        {
          who: 'Ana',
          hr: 'Odlično! U subotu gledamo utakmicu. Možeš li doći?',
          en: 'Great! On Saturday we are watching the match. Can you come?',
        },
        {
          who: 'Tom',
          hr: 'Mogu. U subotu nikad ne radim.',
          en: 'I can. I never work on Saturday.',
        },
        {
          who: 'Ana',
          hr: 'A ja ljeti nikad ne radim. Ljeti plivam, a zimi skijam!',
          en: 'And I never work in summer. In summer I swim, and in winter I ski!',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: what day is it today, and when is Tom's exam?",
          options: [
            'Today is Wednesday; the exam is on Friday',
            'Today is Thursday; the exam is on Saturday',
            'Today is Friday; the exam is tomorrow',
            'Today is Wednesday; the exam is on Saturday',
          ],
          correct: 0,
          hint: 'Saturday is the day of the match.',
          explanation:
            'Today is Wednesday (srijeda). Tom has his exam on Friday, and on Saturday they watch the match.',
        },
        {
          q: 'Tom says "Danas je srijeda", but Ana says "U srijedu učim hrvatski". Why does the day end in -u the second time?',
          options: [
            'After "u" (on a day), the day takes the object form: -a becomes -u',
            'Because Ana is a woman',
            'Because she studies every week',
            'It is a different day of the week',
          ],
          correct: 0,
          hint: 'Only days that end in -a change after "u". A day that ends in a consonant stays the same.',
          explanation:
            'To say ON a day, Croatian uses u with the object form. A day in -a changes to -u; a masculine day, which ends in a consonant, does not change.',
        },
        {
          type: 'type',
          q: "Now you. Imagine today is the day of Tom's exam. Ana asks YOU what day it is. Answer: Danas je ____.",
          answer: 'petak',
          hint: 'In the dialogue Tom names this day after "U". A day that ends in a consonant has the same form here.',
          explanation: 'Danas je petak. — "Today is Friday." Days are written with a small letter.',
        },
        {
          type: 'type',
          q: 'Now imagine today is the day Ana and Tom watch the match. Say what day it is: Danas je ____.',
          answer: 'subota',
          hint: 'In the dialogue you only met this day after "u", ending in -u. As the subject it ends like srijeda.',
          explanation:
            'Danas je subota. — after u it is u subotu, but as the subject of the sentence the day keeps its -a.',
        },
        {
          type: 'transform',
          q: 'The exam has been moved to Saturday. Change the sentence.',
          from: 'U petak imam ispit.',
          answer: 'U subotu imam ispit.',
          hint: 'After u, this day does not end in -a.',
          explanation: 'U subotu imam ispit. — "On Saturday I have an exam."',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Is it a day of the week, a month, or a season?',
        groups: ['A day of the week', 'A month', 'A season'],
        items: [
          { hr: 'četvrtak', group: 0 },
          { hr: 'svibanj', group: 1 },
          { hr: 'jesen', group: 2 },
          { hr: 'srijeda', group: 0 },
          { hr: 'kolovoz', group: 1 },
          { hr: 'zima', group: 2 },
        ],
        explanation:
          'četvrtak and srijeda are days; svibanj (May) and kolovoz (August) are months; jesen (fall) and zima (winter) are seasons.',
      },
      5,
      8,
      {
        type: 'match',
        q: 'Match each month to its English name.',
        pairs: [
          ['siječanj', 'January'],
          ['travanj', 'April'],
          ['srpanj', 'July'],
          ['listopad', 'October'],
          ['studeni', 'November'],
        ],
        explanation:
          'Croatian months have Slavic names: travanj from trava (grass), srpanj from srp (sickle), listopad is "leaf-fall", studeni is "the cold one".',
      },
      {
        type: 'tf',
        q: 'Danas je petak. — True or false: sutra je subota.',
        answer: true,
        hint: 'Count on one day from Friday.',
        explanation: 'petak, subota, nedjelja — Friday, Saturday, Sunday.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "On Saturday I have an exam."',
        words: ['U', 'subotu', 'imam', 'ispit.'],
        explanation: 'U subotu imam ispit. — u + the day comes first here.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['U', 'srijeda', 'imam', 'ispit.'],
        wrong: 1,
        answer: 'srijedu',
        hint: 'After u, a day in -a changes like any feminine object.',
        explanation: 'U srijedu imam ispit. — srijeda → u srijedu.',
      },
      10,
      {
        type: 'transform',
        q: 'Change the day to Friday.',
        from: 'U srijedu učim hrvatski.',
        answer: 'U petak učim hrvatski.',
        hint: 'A day that ends in a consonant does not change after u.',
        explanation:
          'U petak učim hrvatski. — "On Friday I study Croatian." petak is masculine, so after u it stays as it is.',
      },
      3,
      {
        type: 'listen',
        audio: 'Vidimo se u petak!',
        q: 'When will you meet?',
        options: ['On Friday', 'On Thursday', 'On Saturday', 'Tomorrow'],
        correct: 0,
        explanation: 'Vidimo se u petak! — "See you on Friday!"',
      },
      11,
      {
        type: 'dictate',
        audio: 'Ljeti plivam, zimi skijam.',
        answer: 'Ljeti plivam, zimi skijam.',
        hint: 'Four words: what the speaker does in summer, and what in winter.',
        explanation: 'Ljeti plivam, zimi skijam. — "In summer I swim, in winter I ski."',
      },
    ],
  },

  // ── ici-going ──────────────────────────────────────────────────────────────
  'ici-going': {
    text: {
      kind: 'dialogue',
      title: 'Kamo ideš?',
      lines: [
        { who: 'Ana', hr: 'Bog, Tom! Kamo ideš?', en: 'Hi, Tom! Where are you going?' },
        {
          who: 'Tom',
          hr: 'Idem kući. Umoran sam, idem spavati.',
          en: 'I am going home. I am tired, I am going to bed.',
        },
        {
          who: 'Ana',
          hr: 'Ivan i ja idemo u grad. Ideš li i ti?',
          en: 'Ivan and I are going into town. Are you going too?',
        },
        { who: 'Tom', hr: 'Ne idem. A gdje je Ivan?', en: 'I am not going. And where is Ivan?' },
        {
          who: 'Ana',
          hr: 'Ivan je tamo. Čeka autobus.',
          en: 'Ivan is over there. He is waiting for the bus.',
        },
        {
          who: 'Tom',
          hr: 'Idete li sutra na more?',
          en: 'Are you going to the seaside tomorrow?',
        },
        {
          who: 'Ana',
          hr: 'Idemo! Ide i Maja, ali moji roditelji ne idu.',
          en: 'We are! Maja is going too, but my parents are not going.',
        },
        { who: 'Tom', hr: 'Sutra mogu. Idem i ja!', en: 'Tomorrow I can. I am going too!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is everybody going right now?',
          options: [
            'Tom is going home to sleep; Ana and Ivan are going into town',
            'Tom is going into town; Ana is going home',
            'All three are going to the seaside',
            'Tom and Ivan are waiting for the bus home',
          ],
          correct: 0,
          hint: 'The seaside is for tomorrow.',
          explanation:
            "Tom is going home to bed. Ana and Ivan are going into town. The seaside is tomorrow's plan.",
        },
        {
          q: 'Ana asks "Kamo ideš?", but Tom asks "A gdje je Ivan?" Both mean "where" in English. Why two different words?',
          options: [
            'Kamo asks where someone is GOING; gdje asks where someone IS',
            'Kamo is polite and gdje is casual',
            'Kamo is for one person, gdje for several',
            'Kamo is for towns, gdje for people',
          ],
          correct: 0,
          hint: 'Look at the verb in each question: one is about moving, the other is not.',
          explanation:
            'Kamo? goes with movement: Kamo ideš? Gdje? asks about a place where someone or something is: Gdje je Ivan?',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks you and your friend: "Idete li u grad?" You both are. Answer for the two of you in one word, with the verb: ____.',
          answer: 'Idemo',
          hint: 'You are answering for "we" — the form Ana uses about herself and Ivan.',
          explanation: 'Idemo. — "We are." On its own, Idemo! also means "Let\'s go!"',
        },
        {
          type: 'type',
          q: 'Say that your friends are going into town: Moji prijatelji ____ u grad.',
          answer: 'idu',
          hint: 'Friends are "they" — the form Ana uses about her parents.',
          explanation: 'Moji prijatelji idu u grad. — the "they" form of ići ends in -u: idu.',
        },
        {
          type: 'transform',
          q: 'Ask ONE friend the same thing: change the "vi" form to the "ti" form.',
          from: 'Idete li u kino?',
          answer: 'Ideš li u kino?',
          hint: "Only the ending of the verb changes — think of Ana's first question.",
          explanation: 'Ideš li u kino? — "Are you going to the movies?", said to one friend.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'order',
        q: 'Put the words in order: "I have to go home."',
        words: ['Moram', 'ići', 'kući.'],
        explanation: 'Moram ići kući. — after moram, the verb stays in its dictionary form: ići.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'i', 'ja', 'idem', 'na', 'more.'],
        wrong: 3,
        answer: 'idemo',
        hint: 'Ana and I — that is "we".',
        explanation: 'Ana i ja idemo na more. — two people including me take the "we" form.',
      },
      {
        type: 'tf',
        q: 'Tom: „Danas ne idem van, bolestan sam.“ — True or false: Tom is going out today.',
        answer: false,
        hint: 'Look for the little word "ne".',
        explanation:
          'Danas ne idem van. — "I am not going out today." bolestan sam means "I am sick".',
      },
      12,
      {
        type: 'match',
        q: 'Match each question to its answer.',
        pairs: [
          ['Kamo ideš?', 'Idem kući.'],
          ['Gdje je Ana?', 'Ana je tamo.'],
          ['Ideš li van?', 'Ne idem.'],
          ['Tko je umoran?', 'Tom.'],
        ],
        explanation:
          'Kamo? is answered with a direction (kući), Gdje? with a place (tamo), a yes/no question with the verb, and Tko? with a person.',
      },
      4,
      10,
      {
        type: 'transform',
        q: 'Change "ja" to "oni".',
        from: 'Ja idem na kavu.',
        answer: 'Oni idu na kavu.',
        accept: ['Idu na kavu.'],
        hint: 'The "they" form of ići ends in one vowel — and it is not -e.',
        explanation: 'Oni idu na kavu. — the "they" form of ići ends in -u, not in -e.',
      },
      13,
      {
        type: 'sort',
        q: 'Is the sentence about where someone IS (Gdje?), or where someone is GOING (Kamo?)',
        groups: ['Gdje? — where someone is', 'Kamo? — where someone is going'],
        items: [
          { hr: 'Ana je tamo.', group: 0 },
          { hr: 'Idem kući.', group: 1 },
          { hr: 'Tom je ovdje.', group: 0 },
          { hr: 'Idemo van.', group: 1 },
          { hr: 'Roditelji su tamo.', group: 0 },
          { hr: 'Ideš u grad.', group: 1 },
        ],
        explanation:
          'With biti the sentence says where someone is. With ići it says where someone is going: kući, van, u grad.',
      },
      {
        type: 'listen',
        audio: 'Kamo idete?',
        q: 'What is the speaker asking?',
        options: ['Where you are going', 'Where you are', 'When you are going', 'Who is going'],
        correct: 0,
        explanation: 'Kamo idete? — "Where are you going?", to several people or politely to one.',
      },
      8,
      {
        type: 'dictate',
        audio: 'Djeca idu kući.',
        answer: 'Djeca idu kući.',
        hint: 'Three words: who is going, the verb, and the one-word direction "home".',
        explanation:
          'Djeca idu kući. — "The children are going home." djeca takes the "they" form.',
      },
    ],
  },

  // ── u-na-motion ────────────────────────────────────────────────────────────
  'u-na-motion': {
    text: {
      kind: 'dialogue',
      title: 'Kamo idemo?',
      lines: [
        { who: 'Ana', hr: 'Tom, kamo ideš sutra?', en: 'Tom, where are you going tomorrow?' },
        {
          who: 'Tom',
          hr: 'Ujutro idem na posao, a navečer idem na koncert.',
          en: 'In the morning I am going to work, and in the evening I am going to a concert.',
        },
        {
          who: 'Ana',
          hr: 'A u subotu? Idemo li na plažu?',
          en: 'And on Saturday? Are we going to the beach?',
        },
        {
          who: 'Tom',
          hr: 'U subotu ne mogu. Idem u Rijeku, na utakmicu.',
          en: 'On Saturday I cannot. I am going to Rijeka, to a match.',
        },
        {
          who: 'Ana',
          hr: 'A u nedjelju? Maja i ja idemo na Krk.',
          en: 'And on Sunday? Maja and I are going to Krk.',
        },
        { who: 'Tom', hr: 'Na Krk? Odlično! Idem i ja.', en: 'To Krk? Great! I am going too.' },
        {
          who: 'Ana',
          hr: 'Super. Ali ujutro moram ići u banku i u trgovinu.',
          en: 'Super. But in the morning I have to go to the bank and to the store.',
        },
        {
          who: 'Tom',
          hr: 'Nema problema. A navečer idemo kući!',
          en: 'No problem. And in the evening we go home!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is Tom going on Saturday, and where on Sunday?',
          options: [
            'Saturday: to Rijeka, to a match. Sunday: to Krk with Ana and Maja',
            'Saturday: to the beach. Sunday: to Rijeka',
            'Saturday: to Krk. Sunday: to a concert',
            'Saturday: to work. Sunday: to the bank',
          ],
          correct: 0,
          hint: 'He says no to the beach because of a match.',
          explanation:
            'On Saturday Tom goes to Rijeka for a match. On Sunday he joins Ana and Maja on Krk.',
        },
        {
          q: 'Tom goes "u Rijeku" and Ana goes "u banku", but they go "na koncert", "na plažu" and "na Krk". When is it "na"?',
          options: [
            'For events, open places and islands — "u" is for going INTO a town or a building',
            '"na" is for places far away, "u" for places nearby',
            '"na" is for the weekend, "u" for working days',
            'There is no difference — both always work',
          ],
          correct: 0,
          hint: 'Rijeka is a town and a bank is a building. What kind of thing is a concert, a beach, or Krk?',
          explanation:
            'u means going INTO something with walls or borders: a town, a country, a building. na is for an event (koncert, utakmica), an open place (plaža) and an island (Krk).',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Kamo ideš?" You are going to Italy. Answer: Idem u ____. (Italija)',
          answer: 'Italiju',
          hint: 'Do what Tom does with Rijeka: the place you are going to takes the object form.',
          explanation:
            'Idem u Italiju. — going somewhere takes the object form: Italija → u Italiju.',
        },
        {
          type: 'transform',
          q: 'The children are not going to the movies but to school (škola). Change the destination.',
          from: 'Djeca idu u kino.',
          answer: 'Djeca idu u školu.',
          hint: 'kino did not change, but a place that ends in -a does.',
          explanation:
            'Djeca idu u školu. — škola → u školu. kino is neuter, so it stayed as it was.',
        },
        {
          type: 'transform',
          q: 'You are not going into town but to an island (otok). Change the destination.',
          from: 'Idemo u grad.',
          answer: 'Idemo na otok.',
          hint: 'An island does not take the same little word as a town — think of Krk.',
          explanation:
            'Idemo na otok. — islands take na: na otok, na Krk. otok is a masculine thing, so its ending does not change.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Going there: is it "u" or "na"?',
        groups: [
          'u — into a building, a town, a country',
          'na — an event, an open place, an island',
        ],
        items: [
          { hr: 'škola', group: 0 },
          { hr: 'koncert', group: 1 },
          { hr: 'banka', group: 0 },
          { hr: 'plaža', group: 1 },
          { hr: 'Zagreb', group: 0 },
          { hr: 'Brač', group: 1 },
          { hr: 'trgovina', group: 0 },
          { hr: 'utakmica', group: 1 },
        ],
        explanation:
          'A school, a bank, a store and a town have walls or borders: u. A concert and a match are events, a beach is an open place and Brač is an island: na.',
      },
      6,
      5,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['na izlet', 'on a trip'],
          ['na more', 'to the seaside'],
          ['u trgovinu', 'to the store'],
          ['na kolodvor', 'to the station'],
          ['kući', 'home'],
        ],
        explanation: 'kući is the one direction with no little word in front of it: Idem kući.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Ivana is going to Germany."',
        words: ['Ivana', 'ide', 'u', 'Njemačku.'],
        explanation: 'Ivana ide u Njemačku. — a country takes u, and Njemačka → Njemačku.',
      },
      {
        type: 'tf',
        q: 'Ana: „Sutra idem na Krk.“ — True or false: Ana is going to an island.',
        answer: true,
        hint: 'Which little word does Ana use — the one for towns, or the other one?',
        explanation: 'Krk is an island, which is why Ana says na Krk and not "u Krk".',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Idem', 'u', 'banka.'],
        wrong: 2,
        answer: 'banku',
        hint: 'Going somewhere takes the object form.',
        explanation: 'Idem u banku. — banka → u banku.',
      },
      4,
      11,
      {
        type: 'transform',
        q: 'You are not going into town but to the beach (plaža). Change the destination.',
        from: 'Idemo u grad.',
        answer: 'Idemo na plažu.',
        hint: 'Two things change: the little word, and the ending of the place.',
        explanation: 'Idemo na plažu. — a beach is an open place, so na; and plaža → plažu.',
      },
      {
        type: 'listen',
        audio: 'Idemo na more!',
        q: 'Where are the speakers going?',
        options: ['To the seaside', 'To the movies', 'Home', 'To work'],
        correct: 0,
        explanation:
          'Idemo na more! — "Let\'s go to the seaside!" more is neuter, so it does not change.',
      },
      9,
      {
        type: 'dictate',
        audio: 'Sutra idemo u Split.',
        answer: 'Sutra idemo u Split.',
        hint: 'Four words. The name of the town does not change its ending.',
        explanation: 'Sutra idemo u Split. — a town takes u, and a masculine place stays as it is.',
      },
    ],
  },

  // ── za-accusative ──────────────────────────────────────────────────────────
  'za-accusative': {
    text: {
      kind: 'dialogue',
      title: 'Poklon za mamu',
      lines: [
        { who: 'Ana', hr: 'Bog, Tom! Što kupuješ?', en: 'Hi, Tom! What are you buying?' },
        {
          who: 'Tom',
          hr: 'Kupujem poklon za mamu. Sutra ima rođendan.',
          en: 'I am buying a present for Mom. It is her birthday tomorrow.',
        },
        {
          who: 'Ana',
          hr: 'Lijepo! A za koga je ova knjiga?',
          en: 'Nice! And who is this book for?',
        },
        {
          who: 'Tom',
          hr: 'Knjiga je za tatu, a cvijeće je za sestru.',
          en: 'The book is for Dad, and the flowers are for my sister.',
        },
        {
          who: 'Ana',
          hr: 'A za brata? Nemaš ništa za brata?',
          en: 'And for your brother? Do you have nothing for your brother?',
        },
        {
          who: 'Tom',
          hr: 'Imam! Za brata imam kartu za Split.',
          en: 'I do! For my brother I have a ticket to Split.',
        },
        { who: 'Ana', hr: 'Zašto za Split?', en: 'Why to Split?' },
        {
          who: 'Tom',
          hr: 'U subotu ide po baku. Baka živi u Splitu.',
          en: 'On Saturday he is going to fetch Grandma. Grandma lives in Split.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who gets what?',
          options: [
            'Mom a present, Dad a book, the sister flowers, the brother a ticket',
            'Mom flowers, Dad a ticket, the sister a book, the brother nothing',
            'Mom a book, Dad flowers, the brother a present, Grandma a ticket',
            'Everything is for Grandma in Split',
          ],
          correct: 0,
          hint: 'The ticket has something to do with Split and with Grandma.',
          explanation:
            'The present is for Mom, the book for Dad, the flowers for the sister, and the brother gets a ticket to Split.',
        },
        {
          q: 'Tom says "za mamu", "za tatu", "za sestru" and "za brata". What does "za" do to the word after it?',
          options: [
            'It puts it in the object form: -a becomes -u, and a living masculine word adds -a',
            'Nothing — these are the dictionary forms',
            'It makes the word plural',
            'It adds -u to every word',
          ],
          correct: 0,
          hint: 'The dictionary forms are mama, tata, sestra and brat.',
          explanation:
            'After za the noun takes the same form as an object: mama → mamu, tata → tatu, sestra → sestru, and brat (alive) → brata.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Za koga je ovaj poklon?" It is for your grandfather. Answer: Za ____. (djed)',
          answer: 'djeda',
          hint: 'A grandfather is alive — do what Tom does with brat.',
          explanation: 'Za djeda. — after za a living masculine noun adds -a.',
        },
        {
          type: 'type',
          q: 'At the station you want a ticket to Pula. Ask: Imate li kartu za ____? (Pula)',
          answer: 'Pulu',
          hint: 'The name of the town ends in -a. Tom\'s ticket "za Split" did not change — this one does.',
          explanation:
            'Imate li kartu za Pulu? — a ticket is FOR a place: za + the object form, Pula → Pulu.',
        },
        {
          type: 'transform',
          q: 'The present is not for your sister after all — it is for Marko. Change the sentence.',
          from: 'Poklon je za sestru.',
          answer: 'Poklon je za Marka.',
          hint: 'Marko is a man, so his name changes the way a living masculine noun does.',
          explanation: 'Poklon je za Marka. — Marko → za Marka.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['poklon', 'present'],
          ['cvijeće', 'flowers'],
          ['vlak', 'train'],
          ['rođendan', 'birthday'],
          ['večera', 'dinner'],
        ],
        explanation:
          'A poklon and cvijeće are things you give; a vlak takes you somewhere; a rođendan and a večera are occasions.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Who is this present for?"',
        words: ['Za', 'koga', 'je', 'ovaj', 'poklon?'],
        explanation: 'Za koga je ovaj poklon? — koga is the object form of tko, so it follows za.',
      },
      {
        type: 'sort',
        q: 'What is it for: a person, a place, or a day or meal?',
        groups: ['For a person', 'For a place', 'For a day or a meal'],
        items: [
          { hr: 'za brata', group: 0 },
          { hr: 'za Split', group: 1 },
          { hr: 'za subotu', group: 2 },
          { hr: 'za mamu', group: 0 },
          { hr: 'za Zagreb', group: 1 },
          { hr: 'za doručak', group: 2 },
        ],
        explanation:
          'za names who something is for (za brata, za mamu), where a ticket or a train goes (za Split, za Zagreb), and the day or meal it is meant for (za subotu, za doručak).',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ovo', 'je', 'poklon', 'za', 'Ana.'],
        wrong: 4,
        answer: 'Anu',
        hint: 'After za, a name changes too.',
        explanation: 'Ovo je poklon za Anu. — za takes the object form: Ana → Anu.',
      },
      10,
      {
        type: 'transform',
        q: 'The book is not for your sister but for your grandfather (djed). Change the sentence.',
        from: 'Kupujem knjigu za sestru.',
        answer: 'Kupujem knjigu za djeda.',
        hint: 'A grandfather is alive.',
        explanation: 'Kupujem knjigu za djeda. — a living masculine noun adds -a after za.',
      },
      5,
      11,
      12,
      {
        type: 'listen',
        audio: 'Vlak za Split je tamo.',
        q: 'Which train is over there?',
        options: [
          'The train to Split',
          'The train from Split',
          'The train to Zagreb',
          'The bus to Split',
        ],
        correct: 0,
        explanation: 'Vlak za Split je tamo. — a train is named by where it goes, with za.',
      },
      14,
      {
        type: 'tf',
        q: 'Tom: „Idem po kruh.“ — True or false: Tom is going out to get bread.',
        answer: true,
        hint: 'After a verb of going, po means fetching something.',
        explanation:
          'Idem po kruh. — "I am going to get bread." po + the object form means going to fetch.',
      },
      15,
      6,
      {
        type: 'dictate',
        audio: 'Za doručak imam kruh i sir.',
        answer: 'Za doručak imam kruh i sir.',
        hint: 'Six words: what the speaker has for the first meal of the day.',
        explanation: 'Za doručak imam kruh i sir. — "For breakfast I have bread and cheese."',
      },
    ],
  },

  // ══ Unit 9 ═════════════════════════════════════════════════════════════════

  // ── accusative-pronouns ────────────────────────────────────────────────────
  'accusative-pronouns': {
    text: {
      kind: 'dialogue',
      title: 'Poznaješ li ih?',
      lines: [
        {
          who: 'Ana',
          hr: 'Tom, poznaješ li Marka i Maju?',
          en: 'Tom, do you know Marko and Maja?',
        },
        {
          who: 'Tom',
          hr: 'Marka poznajem, vidim ga svaki dan. Ali nju ne poznajem.',
          en: 'I know Marko, I see him every day. But her I do not know.',
        },
        {
          who: 'Ana',
          hr: 'Čekam ih ovdje. Idemo na koncert.',
          en: 'I am waiting for them here. We are going to a concert.',
        },
        { who: 'Tom', hr: 'Tamo su! Vidiš li ih?', en: 'There they are! Do you see them?' },
        {
          who: 'Ana',
          hr: 'Vidim ih. Marko! Maja! Čekamo vas!',
          en: 'I see them. Marko! Maja! We are waiting for you!',
        },
        {
          who: 'Marko',
          hr: 'Bog, Tom! Zanima li te glazba?',
          en: 'Hi, Tom! Are you interested in music?',
        },
        {
          who: 'Tom',
          hr: 'Zanima me, ali nemam kartu.',
          en: 'I am, but I do not have a ticket.',
        },
        {
          who: 'Maja',
          hr: 'Nema problema — imamo kartu i za tebe!',
          en: 'No problem — we have a ticket for you too!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which of the two does Tom already know?',
          options: [
            'Marko — he sees him every day — but not Maja',
            'Maja, but not Marko',
            'Both of them',
            'Neither of them',
          ],
          correct: 0,
          hint: 'Tom says "ne poznajem" about only one of them.',
          explanation: 'Tom knows Marko and sees him every day. Maja he does not know yet.',
        },
        {
          q: 'Tom says "vidim ga" with a tiny word for "him", but for "her" he uses a longer word and puts it first: "Ali nju ne poznajem." Why?',
          options: [
            'He is stressing the contrast — HER, as opposed to him — and that needs the long form',
            'Words for women are always longer',
            'After "ne" you must always use a long form',
            'It is a slip — the short form would have to stand first',
          ],
          correct: 0,
          hint: 'The short forms can never stand first and can never be stressed.',
          explanation:
            'The short forms (like ga) are the normal ones, but they cannot be stressed or start a clause. For a contrast Croatian uses the long form: nju, as opposed to him.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Vidiš li Marka i Maju?" You do. Answer: Da, vidim ____.',
          answer: 'ih',
          hint: 'Two people — "them". It is the little word Ana uses after "Čekam".',
          explanation:
            'Da, vidim ih. — ih is the short form for "them", and it comes right after the verb.',
        },
        {
          type: 'type',
          q: 'You have a present for your friend Ana. Hand it to her and say: Ovo je za ____. (ti)',
          answer: 'tebe',
          hint: 'After a little word like za you cannot use the short form. Listen again to the last line of the dialogue.',
          explanation:
            'Ovo je za tebe. — after a preposition Croatian uses the long form: za mene, za tebe, za njega, za nju.',
        },
        {
          type: 'transform',
          q: 'Replace "Marka" with a short pronoun.',
          from: 'Poznajem Marka.',
          answer: 'Poznajem ga.',
          hint: 'Marko is "him". Find the tiny word Tom uses for him after "vidim".',
          explanation:
            'Poznajem ga. — ga is the short form for "him", and it comes right after the verb.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'Match each person to its short object form.',
        pairs: [
          ['ja', 'me'],
          ['ti', 'te'],
          ['on', 'ga'],
          ['mi', 'nas'],
          ['oni', 'ih'],
        ],
        explanation: 'ja → me, ti → te, on → ga, ona → je, mi → nas, vi → vas, oni → ih.',
      },
      {
        type: 'tf',
        q: 'Ana: „Marko me zove.“ — True or false: Ana is calling Marko.',
        answer: false,
        hint: 'Who is the subject, and who is "me"?',
        explanation:
          'Marko me zove. — "Marko is calling me." Marko calls; Ana (me) is the one being called.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ovo', 'je', 'za', 'ga.'],
        wrong: 3,
        answer: 'njega',
        hint: 'After a little word like za, a short form is not possible.',
        explanation: 'Ovo je za njega. — after a preposition use the long form.',
      },
      9,
      {
        type: 'sort',
        q: 'Short form (the normal one, never first, never stressed) or long form (after za, or for emphasis)?',
        groups: ['Short form', 'Long form'],
        items: [
          { hr: 'me', group: 0 },
          { hr: 'mene', group: 1 },
          { hr: 'ga', group: 0 },
          { hr: 'njega', group: 1 },
          { hr: 'ih', group: 0 },
          { hr: 'njih', group: 1 },
          { hr: 'te', group: 0 },
          { hr: 'nju', group: 1 },
        ],
        explanation:
          'Short: me, te, ga, ih. Long: mene, njega, njih, nju. The long forms follow a preposition or carry the stress.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Do you see me?"',
        words: ['Vidiš', 'li', 'me?'],
        explanation: 'Vidiš li me? — in a question li comes first, then the short pronoun.',
      },
      3,
      {
        type: 'transform',
        q: 'Replace the name with a short pronoun.',
        from: 'Čekam Marka.',
        answer: 'Čekam ga.',
        hint: 'Marko is "him". The short form comes right after the verb.',
        explanation: 'Čekam ga. — "I am waiting for him."',
      },
      11,
      6,
      {
        type: 'transform',
        q: 'Say the same sentence, but start it with "Ja".',
        from: 'Volim te.',
        answer: 'Ja te volim.',
        hint: 'The short pronoun must stay in second place.',
        explanation:
          'Ja te volim. — the short form always sits in second place: after Ja, and before the verb.',
      },
      {
        type: 'listen',
        audio: 'Čekamo vas ovdje.',
        q: 'Who is being waited for?',
        options: ['You (several people, or polite)', 'Us', 'Them', 'Him'],
        correct: 0,
        explanation:
          'Čekamo vas ovdje. — "We are waiting for you here." vas is "you" for several people or for polite Vi.',
      },
      14,
      13,
      15,
      {
        type: 'dictate',
        audio: 'Zanima me glazba.',
        answer: 'Zanima me glazba.',
        hint: 'Three words: the speaker is interested in music.',
        explanation: 'Zanima me glazba. — literally "Music interests me."',
      },
    ],
  },

  // ── travel-agency ──────────────────────────────────────────────────────────
  'travel-agency': {
    text: {
      kind: 'dialogue',
      title: 'Kartu za Zadar, molim',
      lines: [
        { who: 'Agentica', hr: 'Dobar dan, izvolite.', en: 'Good afternoon, how can I help?' },
        {
          who: 'Tom',
          hr: 'Dobar dan. Želim ići u Zadar u subotu. Kada ide autobus za Zadar?',
          en: 'Good afternoon. I want to go to Zadar on Saturday. When does the bus to Zadar go?',
        },
        {
          who: 'Agentica',
          hr: 'Autobus ide ujutro i navečer.',
          en: 'The bus goes in the morning and in the evening.',
        },
        {
          who: 'Tom',
          hr: 'Odlično. Molim Vas povratnu kartu.',
          en: 'Great. A round-trip ticket, please.',
        },
        { who: 'Agentica', hr: 'Za jednu osobu?', en: 'For one person?' },
        {
          who: 'Tom',
          hr: 'Ne, za mene i moju sestru. Koliko košta karta?',
          en: 'No, for me and my sister. How much does a ticket cost?',
        },
        {
          who: 'Agentica',
          hr: 'Karta nije skupa. Trebate li i hotel?',
          en: 'The ticket is not expensive. Do you need a hotel too?',
        },
        {
          who: 'Tom',
          hr: 'Da, želim rezervirati sobu za subotu i nedjelju.',
          en: 'Yes, I want to reserve a room for Saturday and Sunday.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Tom want from the agency?',
          options: [
            'Round-trip bus tickets to Zadar for himself and his sister, and a room for the weekend',
            'A one-way ferry ticket for one person',
            'A room in Zadar for a whole week, but no tickets',
            'Bus tickets for Friday and a hotel in Zagreb',
          ],
          correct: 0,
          hint: 'He is not traveling alone, and he also needs somewhere to sleep.',
          explanation:
            'Tom wants round-trip tickets to Zadar for two — himself and his sister — and a room for Saturday and Sunday.',
        },
        {
          q: 'Tom says "Želim ići u Zadar", but he asks about the "autobus za Zadar". Why two different little words before the same town?',
          options: [
            'You GO "u" a town, but a bus or a ticket is "za" (for) a town',
            '"u" is for the weekend and "za" for working days',
            '"za" is more polite than "u"',
            'There is no difference at all',
          ],
          correct: 0,
          hint: 'One of them follows the verb "to go"; the other names which bus it is.',
          explanation:
            'With a verb of going the town takes u: ići u Zadar. A bus, a train or a ticket is named by its destination with za: autobus za Zadar, karta za Zadar.',
        },
        {
          type: 'type',
          q: 'Now you. At the counter you want a one-way ticket. Say: Molim Vas ____ kartu. (jednosmjerna)',
          answer: 'jednosmjernu',
          hint: 'Do what Tom does with "povratna": the word in front of kartu changes with it.',
          explanation: 'Molim Vas jednosmjernu kartu. — jednosmjerna karta → jednosmjernu kartu.',
        },
        {
          type: 'type',
          q: 'The agent asks YOU: "Za jednu osobu?" No — it is for you and your brother. Answer: Ne, za mene i mog ____.',
          answer: 'brata',
          hint: 'A brother is alive, and he comes after za.',
          explanation: 'Ne, za mene i mog brata. — after za: moj brat → mog brata.',
        },
        {
          type: 'transform',
          q: 'You have changed your plans: you are going on Wednesday. Change the day.',
          from: 'Idemo u Zadar u subotu.',
          answer: 'Idemo u Zadar u srijedu.',
          hint: 'The day is srijeda — and after u it changes just as subota did.',
          explanation:
            'Idemo u Zadar u srijedu. — on a day is u + the object form: srijeda → u srijedu.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each travel word to its meaning.',
        pairs: [
          ['jednosmjerna karta', 'one-way ticket'],
          ['povratna karta', 'round-trip ticket'],
          ['trajekt', 'ferry'],
          ['putovanje', 'journey'],
          ['izlet', 'day trip'],
        ],
        explanation:
          'A putovanje is a journey; an izlet is a short outing. For the way back as well, you need a povratna karta.',
      },
      4,
      {
        type: 'sort',
        q: 'Does the phrase say WHEN, or WHERE TO?',
        groups: ['When?', 'Where to?'],
        items: [
          { hr: 'u petak', group: 0 },
          { hr: 'u Zadar', group: 1 },
          { hr: 'ujutro', group: 0 },
          { hr: 'na Hvar', group: 1 },
          { hr: 'navečer', group: 0 },
          { hr: 'na kolodvor', group: 1 },
        ],
        explanation:
          'u + a day says when (u petak); u + a town says where to (u Zadar). ujutro and navečer are parts of the day; na Hvar and na kolodvor are destinations.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Želim', 'povratna', 'kartu.'],
        wrong: 1,
        answer: 'povratnu',
        hint: 'The ticket is an object, and the word describing it has to change with it.',
        explanation: 'Želim povratnu kartu. — povratna karta → povratnu kartu.',
      },
      9,
      11,
      {
        type: 'tf',
        q: 'Tom: „Molim Vas jednosmjernu kartu za Zagreb.“ — True or false: Tom can come back with the same ticket.',
        answer: false,
        hint: 'Which kind of ticket is good for the way back too?',
        explanation:
          'A jednosmjerna karta is one-way. For the way back Tom would need a povratna karta.',
      },
      {
        type: 'transform',
        q: 'You are going to Pula instead. Change the destination.',
        from: 'Želim kartu za Split.',
        answer: 'Želim kartu za Pulu.',
        hint: 'Split did not change after za, but a town in -a does.',
        explanation: 'Želim kartu za Pulu. — Pula → za Pulu.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "When does the ferry to Hvar go?"',
        words: ['Kada', 'ide', 'trajekt', 'za', 'Hvar?'],
        explanation:
          'Kada ide trajekt za Hvar? — the question word, then the verb, then which ferry.',
      },
      {
        type: 'listen',
        audio: 'Trajekt ide ujutro i popodne.',
        q: 'When does the ferry go?',
        options: [
          'In the morning and in the afternoon',
          'Only in the evening',
          'In the morning and in the evening',
          'On Friday',
        ],
        correct: 0,
        explanation:
          'Trajekt ide ujutro i popodne. — ujutro is in the morning, popodne in the afternoon.',
      },
      7,
      6,
      {
        type: 'dictate',
        audio: 'Idemo na izlet na Krk.',
        answer: 'Idemo na izlet na Krk.',
        hint: 'Five words: a day trip to an island. The same little word appears twice.',
        explanation: 'Idemo na izlet na Krk. — na for the trip, and na again for the island.',
      },
    ],
  },

  // ── jesti-piti ─────────────────────────────────────────────────────────────
  'jesti-piti': {
    text: {
      kind: 'dialogue',
      title: 'Što jedeš za doručak?',
      lines: [
        {
          who: 'Ana',
          hr: 'Dobro jutro, Tom! Što jedeš za doručak?',
          en: 'Good morning, Tom! What are you eating for breakfast?',
        },
        {
          who: 'Tom',
          hr: 'Jedem kruh i sir. I pijem kavu.',
          en: 'I am eating bread and cheese. And I am drinking coffee.',
        },
        {
          who: 'Ana',
          hr: 'Ja ne pijem kavu, kava je gorka. Pijem slatki čaj.',
          en: 'I do not drink coffee, coffee is bitter. I drink sweet tea.',
        },
        { who: 'Tom', hr: 'A Ivan? Što on jede?', en: 'And Ivan? What does he eat?' },
        {
          who: 'Ana',
          hr: 'Ivan ujutro ništa ne jede. Samo pije sok.',
          en: 'Ivan does not eat anything in the morning. He only drinks juice.',
        },
        { who: 'Tom', hr: 'A što jedete za ručak?', en: 'And what do you (all) eat for lunch?' },
        {
          who: 'Ana',
          hr: 'Za ručak jedemo juhu i ribu. Jedeš li ribu?',
          en: 'For lunch we eat soup and fish. Do you eat fish?',
        },
        {
          who: 'Tom',
          hr: 'Jedem, ali ne jedem meso. Moji roditelji jedu meso svaki dan.',
          en: 'I do, but I do not eat meat. My parents eat meat every day.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does each of the three have in the morning?',
          options: [
            'Tom: bread, cheese and coffee. Ana: sweet tea. Ivan: only juice',
            'Tom: sweet tea. Ana: coffee. Ivan: bread and cheese',
            'All three eat soup and fish',
            'Tom: juice. Ana: bread and cheese. Ivan: coffee',
          ],
          correct: 0,
          hint: 'One of them finds coffee bitter, and one of them eats nothing at all.',
          explanation:
            'Tom eats bread and cheese and drinks coffee. Ana drinks sweet tea. Ivan eats nothing in the morning — he only drinks juice.',
        },
        {
          q: 'The dictionary form is "jesti". Look at the forms in the dialogue: jedem, jedeš, jede, jedemo, jedete, jedu. What happens to the verb?',
          options: [
            'The present is built on jed- — the "s" of the dictionary form disappears',
            'Nothing — the forms are built straight from "jesti"',
            'These are forms of "biti", like jesam',
            'Only the "I" form is irregular',
          ],
          correct: 0,
          hint: 'Compare the letters before the ending in each form.',
          explanation:
            'jesti hides a d: every present form is built on jed-. Do not mix jedem (I eat) up with jesam (I am).',
        },
        {
          type: 'type',
          q: 'Now you. Ask Ana what she is drinking: Što ____?',
          answer: 'piješ',
          hint: 'Tom and Ana say "pijem" about themselves. Give the same verb the "ti" ending — the one in "jedeš".',
          explanation: 'Što piješ? — "What are you drinking?" piti: pijem, piješ, pije.',
        },
        {
          type: 'type',
          q: "Tom's parents eat meat. Now say that your parents drink tea: Moji roditelji ____ čaj.",
          answer: 'piju',
          hint: 'Parents are "they". The ending is the same as in "jedu".',
          explanation: 'Moji roditelji piju čaj. — the "they" form of piti is piju.',
        },
        {
          type: 'transform',
          q: 'Change "ja" to "mi".',
          from: 'Pijem sok.',
          answer: 'Pijemo sok.',
          hint: 'The "we" ending is the one in "jedemo".',
          explanation: 'Pijemo sok. — "We are drinking juice."',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'What do you do with it: eat it (jesti) or drink it (piti)?',
        groups: ['jesti — you eat it', 'piti — you drink it'],
        items: [
          { hr: 'kruh', group: 0 },
          { hr: 'sok', group: 1 },
          { hr: 'riba', group: 0 },
          { hr: 'mlijeko', group: 1 },
          { hr: 'sladoled', group: 0 },
          { hr: 'čaj', group: 1 },
          { hr: 'juha', group: 0 },
          { hr: 'pivo', group: 1 },
        ],
        explanation:
          'Jedem kruh, ribu, sladoled — and juhu: in Croatian soup is eaten, not drunk. Pijem sok, mlijeko, čaj, pivo.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "What do you eat for breakfast?"',
        words: ['Što', 'jedeš', 'za', 'doručak?'],
        explanation: 'Što jedeš za doručak? — za names the meal.',
      },
      11,
      {
        type: 'tf',
        q: 'Ana: „Ne jedem meso, jedem ribu.“ — True or false: Ana jede ribu.',
        answer: true,
        hint: 'Read the second half of what Ana says.',
        explanation: 'Ana does not eat meat, but she eats fish: jedem ribu.',
      },
      9,
      {
        type: 'listen',
        audio: 'Što pijete?',
        q: 'What is the speaker asking?',
        options: [
          'What you are drinking',
          'What you are eating',
          'What you are cooking',
          'What you are reading',
        ],
        correct: 0,
        explanation:
          'Što pijete? — "What are you drinking?", to several people or politely to one.',
      },
      7,
      {
        type: 'transform',
        q: 'Change "on" to "oni".',
        from: 'On pije mlijeko.',
        answer: 'Oni piju mlijeko.',
        hint: 'The "they" form of piti ends in -u.',
        explanation: 'Oni piju mlijeko. — not "pijeju": the "they" form is piju.',
      },
      10,
      13,
      {
        type: 'match',
        q: 'Match each taste to its meaning.',
        pairs: [
          ['sladak', 'sweet'],
          ['slan', 'salty'],
          ['ljut', 'spicy'],
          ['kiseo', 'sour'],
          ['gorak', 'bitter'],
        ],
        explanation:
          'Five tastes. Each of these words agrees with the food it describes, like any adjective.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Riba', 'je', 'slan.'],
        wrong: 2,
        answer: 'slana',
        hint: 'The taste word has to agree with the food — and riba is feminine.',
        explanation: 'Riba je slana. — the adjective agrees with riba: slan, slana, slano.',
      },
      14,
      15,
      {
        type: 'dictate',
        audio: 'Limun je kiseo.',
        answer: 'Limun je kiseo.',
        hint: 'Three words: a yellow fruit, and how it tastes.',
        explanation: 'Limun je kiseo. — "A lemon is sour."',
      },
    ],
  },

  // ── food-drink ─────────────────────────────────────────────────────────────
  'food-drink': {
    text: {
      kind: 'dialogue',
      title: 'Izvolite?',
      lines: [
        { who: 'Konobar', hr: 'Dobar dan! Izvolite?', en: 'Good afternoon! What can I get you?' },
        {
          who: 'Ana',
          hr: 'Dobar dan. Molim Vas jednu kavu.',
          en: 'Good afternoon. One coffee, please.',
        },
        {
          who: 'Tom',
          hr: 'Za mene čaj, molim. Imate li juhu?',
          en: 'Tea for me, please. Do you have soup?',
        },
        {
          who: 'Konobar',
          hr: 'Imamo. Juha je danas jako dobra.',
          en: 'We do. The soup is very good today.',
        },
        {
          who: 'Tom',
          hr: 'Dobro, želim juhu i salatu.',
          en: 'Good, I would like soup and a salad.',
        },
        { who: 'Ana', hr: 'A ja želim ribu i kruh.', en: 'And I would like fish and bread.' },
        {
          who: 'Konobar',
          hr: 'Izvolite: juha, salata, riba i kruh.',
          en: 'Here you are: soup, salad, fish and bread.',
        },
        { who: 'Ana', hr: 'Hvala! I račun, molim.', en: 'Thank you! And the check, please.' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who orders what?',
          options: [
            'Ana: coffee, fish and bread. Tom: tea, soup and a salad',
            'Ana: tea and soup. Tom: coffee and fish',
            'Both order soup and a salad',
            'Ana: coffee and a salad. Tom: tea, fish and bread',
          ],
          correct: 0,
          hint: 'The one who asks about the soup is the one who orders it.',
          explanation: 'Ana has coffee, fish and bread. Tom has tea, soup and a salad.',
        },
        {
          q: 'Tom asks "Imate li juhu?" and the waiter answers "Juha je danas jako dobra." Why does the word end differently?',
          options: [
            "Tom asks FOR soup — an object; in the waiter's sentence the soup is the subject",
            'The waiter is speaking politely',
            'Tom means several soups',
            'The waiter makes a mistake',
          ],
          correct: 0,
          hint: 'It is the same difference as between kavu and kava.',
          explanation:
            'What you ask for, order, eat or drink is an object: juhu. When the soup is what the sentence is about, it stays juha. The waiter also lists the dishes by their names: juha, salata, riba.',
        },
        {
          type: 'type',
          q: 'Now you. The waiter asks YOU: "Izvolite?" Order water, politely: Molim Vas ____. (voda)',
          answer: 'vodu',
          hint: "What you order changes the way Ana's coffee does.",
          explanation:
            'Molim Vas vodu. — voda → vodu: a feminine word in -a changes when you order it.',
        },
        {
          type: 'type',
          q: 'You are eating with a friend. Ask your FRIEND to pass the salt: Molim ____ sol.',
          answer: 'te',
          hint: 'To a waiter it is "molim Vas". To a friend, use the short object form of "ti".',
          explanation: 'Molim te sol. — molim Vas to a waiter or a stranger, molim te to a friend.',
        },
        {
          type: 'transform',
          q: 'Order the same way, but a salad (salata) instead of tea.',
          from: 'Za mene čaj, molim.',
          answer: 'Za mene salatu, molim.',
          hint: 'čaj did not change, but a word in -a does when you order it.',
          explanation:
            'Za mene salatu, molim. — čaj is masculine and stays; salata is feminine: salatu.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['voće', 'fruit'],
          ['povrće', 'vegetables'],
          ['sir', 'cheese'],
          ['kolač', 'cake'],
          ['rakija', 'fruit brandy'],
        ],
        explanation:
          'voće and povrće are both neuter and stand for the whole group: fruit, vegetables.',
      },
      0,
      {
        type: 'sort',
        q: 'What happens to the word when you order it (Molim Vas …)?',
        groups: ['It changes: -a becomes -u', 'It stays the same'],
        items: [
          { hr: 'kava', group: 0 },
          { hr: 'čaj', group: 1 },
          { hr: 'riba', group: 0 },
          { hr: 'pivo', group: 1 },
          { hr: 'voda', group: 0 },
          { hr: 'kruh', group: 1 },
          { hr: 'juha', group: 0 },
          { hr: 'vino', group: 1 },
        ],
        explanation:
          'Only the feminine words in -a change. čaj and kruh (masculine things) and pivo and vino (neuter) stay as they are.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Pijemo', 'hladna', 'vodu.'],
        wrong: 1,
        answer: 'hladnu',
        hint: 'The water is an object, and the word describing it has to change with it.',
        explanation: 'Pijemo hladnu vodu. — hladna voda → hladnu vodu.',
      },
      {
        type: 'transform',
        q: 'Now say it to a friend, not to a waiter.',
        from: 'Molim Vas kavu.',
        answer: 'Molim te kavu.',
        hint: 'To a friend, use the short object form of "ti" in place of Vas.',
        explanation: 'Molim te kavu. — molim Vas to a waiter, molim te to a friend.',
      },
      5,
      10,
      {
        type: 'tf',
        q: 'Ana: „Hvala, ne jedem meso.“ — True or false: Ana jede meso.',
        answer: false,
        hint: 'Look for the little word "ne".',
        explanation: 'Ne jedem meso. — "I do not eat meat."',
      },
      3,
      11,
      {
        type: 'order',
        q: 'Put the words in order: "One coffee, please."',
        words: ['Jednu', 'kavu,', 'molim.'],
        explanation: 'Jednu kavu, molim. — jedna kava → jednu kavu: both words change.',
      },
      {
        type: 'listen',
        audio: 'Račun, molim.',
        q: 'What does the speaker want?',
        options: ['The check', 'The menu', 'A glass of water', 'Another coffee'],
        correct: 0,
        explanation: 'Račun, molim. — "The check, please."',
      },
      9,
      {
        type: 'dictate',
        audio: 'Voda je hladna, a kava je vruća.',
        answer: 'Voda je hladna, a kava je vruća.',
        hint: 'Seven words: one drink is cold, and the other is hot.',
        explanation:
          'Voda je hladna, a kava je vruća. — both drinks are subjects here, so they keep -a.',
      },
    ],
  },

  // ── at-the-restaurant ──────────────────────────────────────────────────────
  'at-the-restaurant': {
    text: {
      kind: 'dialogue',
      title: 'Mogu li dobiti jelovnik?',
      lines: [
        {
          who: 'Ana',
          hr: 'Dobra večer. Mogu li dobiti jelovnik, molim vas?',
          en: 'Good evening. Can I have the menu, please?',
        },
        {
          who: 'Konobar',
          hr: 'Izvolite. Što želite piti?',
          en: 'Here you are. What would you like to drink?',
        },
        {
          who: 'Ana',
          hr: 'Za mene vodu, a za njega pivo.',
          en: 'Water for me, and a beer for him.',
        },
        {
          who: 'Tom',
          hr: 'Mogu li dobiti juhu i piletinu?',
          en: 'Can I have soup and chicken?',
        },
        {
          who: 'Ana',
          hr: 'A za mene ribu i salatu, molim.',
          en: 'And fish and a salad for me, please.',
        },
        { who: 'Konobar', hr: 'Izvolite. Dobar tek!', en: 'Here you are. Enjoy your meal!' },
        {
          who: 'Tom',
          hr: 'Hvala, sve je odlično. Mogu li dobiti račun?',
          en: 'Thank you, everything is excellent. Can I have the check?',
        },
        { who: 'Konobar', hr: 'Zajedno ili odvojeno?', en: 'Together or separately?' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who has what?',
          options: [
            'Ana: water, fish and a salad. Tom: beer, soup and chicken',
            'Ana: beer and chicken. Tom: water and fish',
            'Both have soup and fish',
            'Ana: water and soup. Tom: beer, fish and a salad',
          ],
          correct: 0,
          hint: 'Ana orders the drinks for both of them, and Tom orders his own food.',
          explanation: 'Ana has water, fish and a salad. Tom has a beer, soup and chicken.',
        },
        {
          q: 'Ana orders for Tom and says "za njega pivo". Why "njega", and not the short "ga"?',
          options: [
            'After a preposition like za, Croatian uses the long form',
            'Because Tom is sitting far away',
            'Because pivo is neuter',
            'Because she is speaking to a waiter',
          ],
          correct: 0,
          hint: 'Compare "za mene" in the same line: that is a long form too.',
          explanation:
            'A short form cannot follow a preposition. After za it is always the long form: za mene, za tebe, za njega, za nju.',
        },
        {
          type: 'type',
          q: 'Now you. The waiter asks you the last question of the dialogue. You are paying for everything. Answer in one word: ____, molim.',
          answer: 'Zajedno',
          hint: 'He offers two words. Choose the one that means "together".',
          explanation:
            'Zajedno, molim. — "Together, please." If each of you pays your own, the answer is Odvojeno, molim.',
        },
        {
          type: 'type',
          q: 'You are ordering for the whole table. Say "water for us": Za ____ vodu, molim. (mi)',
          answer: 'nas',
          hint: 'The object form of "mi". For "we" the short and the long form are the same word.',
          explanation: 'Za nas vodu, molim. — after za: za mene, za njega, za nju, za nas.',
        },
        {
          type: 'transform',
          q: 'Ask for it politely, the way Ana asks for the menu.',
          from: 'Želim kavu.',
          answer: 'Mogu li dobiti kavu?',
          accept: ['Mogu li dobiti kavu, molim?', 'Mogu li dobiti kavu, molim vas?'],
          hint: 'Three words replace "Želim": I can + the question word li + the verb "to get" in its dictionary form.',
          explanation:
            'Mogu li dobiti kavu? — "Can I have a coffee?" The coffee is still an object, so it stays kavu.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'Match what the waiter says to its meaning.',
        pairs: [
          ['Što želite piti?', 'What would you like to drink?'],
          ['Želite li još nešto?', 'Would you like anything else?'],
          ['Dobar tek!', 'Enjoy your meal!'],
          ['Zajedno ili odvojeno?', 'Together or separately?'],
        ],
        explanation:
          'Four things you will hear in every restaurant. A short "Hvala" answers Dobar tek!',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Mogu', 'li', 'dobiti', 'jednu', 'juha?'],
        wrong: 4,
        answer: 'juhu',
        hint: 'What you ask for is an object.',
        explanation: 'Mogu li dobiti jednu juhu? — jedna juha → jednu juhu.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Can I have the check, please?"',
        words: ['Mogu', 'li', 'dobiti', 'račun,', 'molim?'],
        explanation:
          'Mogu li dobiti račun, molim? — račun is a masculine thing, so it does not change.',
      },
      9,
      {
        type: 'sort',
        q: 'Who says it: the guest, or the waiter?',
        groups: ['The guest', 'The waiter'],
        items: [
          { hr: 'Mogu li dobiti jelovnik?', group: 0 },
          { hr: 'Što želite piti?', group: 1 },
          { hr: 'Račun, molim.', group: 0 },
          { hr: 'Dobar tek!', group: 1 },
          { hr: 'Za mene juhu, molim.', group: 0 },
          { hr: 'Želite li još nešto?', group: 1 },
        ],
        explanation:
          'The guest asks for the menu, orders and asks for the check. The waiter asks what you would like and wishes you a good meal.',
      },
      3,
      {
        type: 'tf',
        q: 'Tom: „Zajedno, molim. Ja plaćam.“ — True or false: Tom is paying for everybody.',
        answer: true,
        hint: 'Ja plaćam means "I am paying".',
        explanation: 'Zajedno — together: one check, and Tom pays it.',
      },
      10,
      1,
      {
        type: 'listen',
        audio: 'Za njega piletinu i salatu.',
        q: 'Who are the chicken and the salad for?',
        options: ['For him', 'For her', 'For me', 'For us'],
        correct: 0,
        explanation: 'Za njega piletinu i salatu. — za njega: for him.',
      },
      {
        type: 'transform',
        q: 'Ask for it politely with "Mogu li dobiti …?"',
        from: 'Želim salatu.',
        answer: 'Mogu li dobiti salatu?',
        accept: ['Mogu li dobiti salatu, molim?', 'Mogu li dobiti salatu, molim vas?'],
        hint: 'The verb after mogu stays in its dictionary form, and the salad is still an object.',
        explanation: 'Mogu li dobiti salatu? — "Can I have a salad?"',
      },
      12,
      {
        type: 'dictate',
        audio: 'Sve je odlično, hvala.',
        answer: 'Sve je odlično, hvala.',
        hint: 'Four words: you tell the waiter that everything is excellent, and thank him.',
        explanation: 'Sve je odlično, hvala. — "Everything is excellent, thank you."',
      },
    ],
  },
};
