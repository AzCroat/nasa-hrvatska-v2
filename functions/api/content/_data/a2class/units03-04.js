// ─── A2 lessons in class order — Units 3–4 (lessons 11–20) ───────────────────
// Same shape and rules as the A1 class files (a1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what the lesson, the A2 lessons before it and all of A1 have taught. No
// conditional, no comparatives, no aspect teaching, no impersonal se. Plural case
// endings on nouns appear freely only from plural-cases (the last lesson here).
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.
// Where a typed item of the lesson is kept by index, it stands BEFORE any new
// exercise that prints its answer.

export const CLASS_A2_U03_04 = {
  // ══ UNIT 3 ═════════════════════════════════════════════════════════════════

  // ── The order of the small words ───────────────────────────────────────────
  'clitic-order': {
    text: {
      kind: 'dialogue',
      title: 'Gdje je ključ?',
      lines: [
        {
          who: 'Maja',
          hr: 'Ivane, gdje je ključ od auta? Jesi li ga vidio?',
          en: 'Ivan, where is the car key? Have you seen it?',
        },
        { who: 'Ivan', hr: 'Dao sam ti ga jutros.', en: 'I gave it to you this morning.' },
        {
          who: 'Maja',
          hr: 'Nisi mi ga dao! Dao si ga tati.',
          en: 'You did not give it to me! You gave it to Dad.',
        },
        {
          who: 'Ivan',
          hr: 'Istina! Tata mi ga je vratio, a onda sam ga stavio u svoju torbu.',
          en: 'True! Dad gave it back to me, and then I put it in my bag.',
        },
        { who: 'Maja', hr: 'A gdje je torba?', en: 'And where is the bag?' },
        {
          who: 'Ivan',
          hr: 'Uzela ju je Petra. Rekla mi je da ide na trening.',
          en: 'Petra took it. She told me she was going to practice.',
        },
        {
          who: 'Maja',
          hr: 'Onda ću joj poslati poruku: „Petra, ključ je u Ivanovoj torbi. Hoćeš li nam ga donijeti?”',
          en: 'Then I will send her a message: "Petra, the key is in Ivan\'s bag. Will you bring it to us?"',
        },
        {
          who: 'Ivan',
          hr: 'Evo, već mi je odgovorila: „Ostavila sam vam ga na stolu u kuhinji!”',
          en: 'Look, she has already answered me: "I left it for you on the kitchen table!"',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who took the bag, and where is the key in the end?',
          options: [
            'Dad took the bag; the key is in the car',
            'Petra took the bag; the key is on the kitchen table',
            'Petra took the bag; the key is still in the bag at practice',
            'Maja took the bag; the key is on the kitchen table',
          ],
          correct: 1,
          hint: 'The key travels: Ivan, Dad, Ivan again, a bag — and then the last message says where it was left.',
          explanation:
            'Petra took the bag, but she writes that she left the key on the table in the kitchen.',
        },
        {
          q: 'Ivan says "Dao sam ti ga" but "Tata mi ga je vratio". Why does "sam" stand BEFORE the two short pronouns and "je" AFTER them?',
          options: [
            'Because "tata" is a noun and "ja" is not said',
            'Because "ga" means the key the first time and Dad the second time',
            'Sam, si, smo, ste, su open the group of small words; je always closes it',
            'There is no rule — both helpers can stand in either place',
          ],
          correct: 2,
          hint: 'Think of the order table: one helper has a place of its own at the very end.',
          explanation:
            'The helpers sam, si, smo, ste, su (and ću) come first in the group. Only je — "he or she has" — goes to the end: mi ga je.',
        },
        {
          type: 'type',
          q: 'Now you. Maja cannot find her book (knjiga — feminine). Tell her that Dad saw it in the kitchen: Tata ____ vidio u kuhinji.',
          answer: 'ju je',
          hint: 'Two small words: "it" for a feminine thing, then the helper that goes last. The usual short word for "her" changes its vowel when it would stand next to its twin.',
          explanation:
            'Tata ju je vidio u kuhinji. — the short "her / it" is normally je, but next to the helper je it becomes ju.',
        },
        {
          type: 'type',
          q: 'A friend asks whether you gave Maja the key. Answer (a man speaking): Da, dao sam ____.',
          answer: 'joj ga',
          hint: 'To whom first, then what. Maja is "to her"; ključ is masculine.',
          explanation:
            'Da, dao sam joj ga. — the dative (to her) stands before the accusative (it). English has it the other way round.',
        },
        {
          type: 'transform',
          q: 'It was not you — it was Ivan who gave it. Begin with "Ivan".',
          from: 'Dao sam joj ga.',
          answer: 'Ivan joj ga je dao.',
          hint: 'The helper for "he" does not stand where "sam" stood. Where does it go in the group?',
          explanation:
            'Ivan joj ga je dao. — the small words follow the first word, Ivan, and je closes the group.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'Match each meaning to its short word.',
        pairs: [
          ['to her', 'joj'],
          ['to him', 'mu'],
          ['them', 'ih'],
          ['to us', 'nam'],
          ['him / it', 'ga'],
        ],
        explanation:
          'The "to whom" words are dative; ga and ih are accusative. You need to know which is which before you can put them in order.',
      },
      11,
      0,
      {
        type: 'sort',
        q: 'Which place does each small word take in the group?',
        groups: ['First: the helper', 'Then: to whom', 'Then: what or whom'],
        items: [
          { hr: 'sam', group: 0 },
          { hr: 'mu', group: 1 },
          { hr: 'ga', group: 2 },
          { hr: 'ću', group: 0 },
          { hr: 'nam', group: 1 },
          { hr: 'ih', group: 2 },
          { hr: 'ste', group: 0 },
          { hr: 'me', group: 2 },
        ],
        explanation:
          'Helper, then the person who receives, then the thing: Dao sam mu ga. Pokazat ću vam ih.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Will you send it to me?"',
        words: ['Hoćeš', 'li', 'mi', 'ga', 'poslati?'],
        explanation:
          'Hoćeš li mi ga poslati? — li opens the group, then to whom (mi), then what (ga).',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. (The sentence should mean: "I gave it to her.")',
        words: ['Dao', 'sam', 'je', 'ga.'],
        wrong: 2,
        answer: 'joj',
        hint: 'She is the one who receives. Which form says "to her", not "her"?',
        explanation:
          'Dao sam joj ga. — the receiver is in the dative. Je would be the accusative, "her" as an object.',
      },
      10,
      {
        type: 'tf',
        q: '„Pokazao nam ih je.” means "He showed us to them."',
        answer: false,
        hint: 'Which of the two pronouns is the "to whom" form?',
        explanation:
          'Nam is dative (to us) and ih is accusative (them): "He showed them to us." The dative always stands first.',
      },
      {
        type: 'transform',
        q: 'Replace both nouns with short words: bratu → "to him", slike → "them".',
        from: 'Poslala sam bratu slike.',
        answer: 'Poslala sam mu ih.',
        hint: 'One short word for the person who receives, one for the pictures. To whom comes before what.',
        explanation:
          'Poslala sam mu ih. — helper, then the dative (to him), then the accusative (them).',
      },
      7,
      {
        type: 'listen',
        audio: 'Jesi li joj ga dao?',
        q: 'What is the speaker asking?',
        options: [
          'Did she give it to you?',
          'Will you give it to her?',
          'Did you give it to her?',
          'Did you give it to him?',
        ],
        correct: 2,
        explanation:
          'Jesi li joj ga dao? — jesi li makes a past question to "you", joj is "to her", ga is "it".',
      },
      {
        type: 'dictate',
        audio: 'Mama mi ga je kupila.',
        answer: 'Mama mi ga je kupila.',
        hint: 'Five words: "Mom bought it for me." Three of them are small words in a fixed order.',
        explanation: 'Mama mi ga je kupila. — to whom, then what, and je at the end of the group.',
      },
    ],
  },

  // ── krenuti, ostati, doći ──────────────────────────────────────────────────
  'verbs-nuti': {
    text: {
      kind: 'dialogue',
      title: 'Kako ću naći tvoju ulicu?',
      lines: [
        {
          who: 'Tom',
          hr: 'Lea, sutra dolazim k tebi. Kako ću naći tvoju ulicu?',
          en: 'Lea, I am coming to your place tomorrow. How will I find your street?',
        },
        {
          who: 'Lea',
          hr: 'Lako! Kreni od trga i idi ravno do pošte.',
          en: 'Easy! Set off from the square and go straight to the post office.',
        },
        { who: 'Tom', hr: 'A kod pošte?', en: 'And at the post office?' },
        {
          who: 'Lea',
          hr: 'Kod pošte skreni desno. Kad dođeš do male crkve, stani — moja zgrada je odmah iza crkve.',
          en: 'At the post office turn right. When you get to the small church, stop — my building is right behind the church.',
        },
        {
          who: 'Tom',
          hr: 'Dobro. Obično krenem s posla u pet, pa ću doći oko šest.',
          en: 'Good. I usually leave work at five, so I will get there around six.',
        },
        {
          who: 'Lea',
          hr: 'Super. Kad uđeš u zgradu, nazovi me.',
          en: 'Great. When you come into the building, call me.',
        },
        {
          who: 'Tom',
          hr: 'Hoću. A ako ne nađem zgradu?',
          en: 'I will. And if I do not find the building?',
        },
        {
          who: 'Lea',
          hr: 'Onda ostani kod crkve — ja ću doći po tebe!',
          en: 'Then stay by the church — I will come and get you!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where must Tom turn, and which way?',
          options: [
            'At the post office, to the right',
            'At the church, to the right',
            'At the post office, to the left',
            'At the square, to the left',
          ],
          correct: 0,
          hint: 'He goes straight from the square to one building, turns there, and stops at another.',
          explanation:
            'Kod pošte skreni desno — at the post office, turn right. The church is where he stops.',
        },
        {
          q: 'Tom will arrive TOMORROW, yet Lea says "Kad dođeš do male crkve…" with the present. Why?',
          options: [
            'Because doći has no future tense',
            'Because she is talking about what Tom does every day',
            'Because "dođeš" is a command',
            'After kad, a single step that comes first is said in the present of these verbs',
          ],
          correct: 3,
          hint: 'The same thing happens after čim and ako — look at Tom\'s "ako ne nađem".',
          explanation:
            'After kad, čim and ako, Croatian uses the present of verbs like doći, ući and naći for one step that has to happen first: Kad dođeš, stani.',
        },
        {
          type: 'type',
          q: 'Now you. Tom and his wife usually set off at eight. He says: Obično ____ u osam.',
          answer: 'krenemo',
          accept: ['krećemo'],
          hint: 'Keep the n of the infinitive krenuti and add the ending for "we".',
          explanation: 'Obično krenemo u osam. — krenuti → kren- + -emo.',
        },
        {
          type: 'type',
          q: 'Lea tells one friend where to wait. Now TWO friends are coming. Tell them to stay by the church: ____ kod crkve!',
          answer: 'Ostanite',
          hint: 'The command comes from the present stem — the one with the hidden n. A group gets a longer ending than one friend.',
          explanation: 'Ostanite kod crkve! — ostan-em → ostani (one friend), ostanite (a group).',
        },
        {
          type: 'transform',
          q: 'This is a habit. Turn it into ONE plan for tomorrow: begin with "Sutra" and use the future.',
          from: 'Obično dođem oko šest.',
          answer: 'Sutra ću doći oko šest.',
          accept: ['Sutra ću doći oko šest sati.', 'Sutra ću oko šest doći.'],
          hint: 'The little future word must come second, and an infinitive in -ći keeps its whole form.',
          explanation:
            'Sutra ću doći oko šest. — one plain plan takes the future: ću in second place, then the infinitive.',
        },
      ],
    },
    mix: [
      6,
      {
        type: 'match',
        q: 'Five presents that look alike. Match each to its meaning.',
        pairs: [
          ['krenem', 'I set off'],
          ['skrenem', 'I turn (off the road)'],
          ['stanem', 'I stop'],
          ['ostanem', 'I stay'],
          ['postanem', 'I become'],
        ],
        explanation:
          'Krenuti and skrenuti keep their n; stati, ostati and postati gain one that the infinitive does not show.',
      },
      {
        type: 'sort',
        q: 'Does the form say what someone does, or does it tell someone to do it?',
        groups: ['Present: what someone does', 'Command: do it!'],
        items: [
          { hr: 'dođeš', group: 0 },
          { hr: 'skrenite', group: 1 },
          { hr: 'stane', group: 0 },
          { hr: 'dođi', group: 1 },
          { hr: 'skrenete', group: 0 },
          { hr: 'stani', group: 1 },
          { hr: 'uđemo', group: 0 },
          { hr: 'uđite', group: 1 },
        ],
        explanation:
          'Both come from the same stem. The present adds -em, -eš, -e, -emo, -ete, -u; the command adds -i for one friend and -ite for a group or a stranger.',
      },
      7,
      12,
      {
        type: 'order',
        q: 'Put the words in order: "If you turn left, you will see the sea."',
        words: ['Ako', 'skreneš', 'lijevo,', 'vidjet', 'ćeš', 'more.'],
        explanation:
          'Ako skreneš lijevo, vidjet ćeš more. — after ako, the present of skrenuti; the result is in the future.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moj', 'brat', 'uvijek', 'doće', 'kasno.'],
        wrong: 3,
        answer: 'dođe',
        hint: 'The present of this verb does not keep the consonant of its infinitive.',
        explanation: 'Moj brat uvijek dođe kasno. — doći has đ in every person of the present.',
      },
      14,
      {
        type: 'tf',
        q: '„Sutra krenem u sedam.” is the natural way to tell a friend about one plan for tomorrow.',
        answer: false,
        hint: 'The present of krenuti on its own sounds like a routine. What does one plain plan need?',
        explanation:
          'For a single plan, use the future: Sutra ću krenuti u sedam. The present krenem is for habits (Obično krenem u sedam) and after kad, čim, ako.',
      },
      {
        type: 'transform',
        q: 'You said this to a friend. Now say it politely to a stranger.',
        from: 'Uđi i nađi mjesto!',
        answer: 'Uđite i nađite mjesto!',
        hint: 'Both commands get the longer ending that goes with Vi.',
        explanation: 'Uđite i nađite mjesto! — the stem stays, and -i becomes -ite.',
      },
      10,
      4,
      {
        type: 'listen',
        audio: 'Kod banke skrenite lijevo, a zatim idite ravno.',
        q: 'What should you do at the bank?',
        options: ['Go straight on', 'Turn right', 'Turn left', 'Stop and wait'],
        correct: 2,
        explanation:
          'Kod banke skrenite lijevo — turn left at the bank. Going straight (idite ravno) comes after that.',
      },
      {
        type: 'dictate',
        audio: 'Kad dođeš, nazovi me.',
        answer: 'Kad dođeš, nazovi me.',
        hint: 'Four words: "When you arrive, call me."',
        explanation: 'Kad dođeš, nazovi me. — the present of doći after kad, then a command.',
      },
    ],
  },

  // ── Weekend plans and booking a room ───────────────────────────────────────
  'weekend-plans': {
    text: {
      kind: 'dialogue',
      title: 'Vikend na moru',
      lines: [
        {
          who: 'Nina',
          hr: 'Dobar dan! Imate li slobodnu sobu za ovaj vikend?',
          en: 'Hello! Do you have a room available for this weekend?',
        },
        {
          who: 'Gospodin Babić',
          hr: 'Dobar dan! Imam dvokrevetnu sobu i mali apartman s kuhinjom.',
          en: 'Hello! I have a double room and a small apartment with a kitchen.',
        },
        {
          who: 'Nina',
          hr: 'Dolazimo u petak navečer, moj muž i ja. Koliko košta noćenje u apartmanu?',
          en: 'We are coming on Friday evening, my husband and I. How much is one night in the apartment?',
        },
        {
          who: 'Gospodin Babić',
          hr: 'Sedamdeset eura. Doručak nije uključen u cijenu, ali kuhinja je velika.',
          en: 'Seventy euros. Breakfast is not included in the price, but the kitchen is big.',
        },
        {
          who: 'Nina',
          hr: 'Odlično. Uzet ćemo apartman. Ima li pogled na more?',
          en: 'Great. We will take the apartment. Does it have a sea view?',
        },
        {
          who: 'Gospodin Babić',
          hr: 'Ima! A što planirate za vikend?',
          en: 'It does! And what are you planning for the weekend?',
        },
        {
          who: 'Nina',
          hr: 'U subotu idemo na izlet brodom, a u nedjelju ćemo se odmarati na plaži.',
          en: 'On Saturday we are going on a boat trip, and on Sunday we will relax on the beach.',
        },
        {
          who: 'Gospodin Babić',
          hr: 'Lijepo! Vidimo se u petak. Ključ ću Vam dati kad dođete.',
          en: 'Lovely! See you on Friday. I will give you the key when you arrive.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Nina book, and what is NOT included in the price?',
          options: [
            'The double room; the sea view',
            'The double room; breakfast',
            'The apartment; breakfast',
            'The apartment; the kitchen',
          ],
          correct: 2,
          hint: 'Mr. Babić offers two things. She picks the one with a kitchen — and he mentions one thing the price does not cover.',
          explanation:
            'Uzet ćemo apartman — they take the apartment. Doručak nije uključen u cijenu: breakfast is not included.',
        },
        {
          q: 'Nina asks for "slobodnu sobu", and Mr. Babić has "dvokrevetnu sobu" but "mali apartman". Why do the first two describing words end in -u while "mali" does not change?',
          options: [
            'All three are objects: a feminine adjective takes -u with its noun, but a masculine thing that is not alive keeps its basic form',
            'Only the two rooms are objects; "mali apartman" is the subject of its sentence, so it stays in the basic form',
            'Feminine adjectives end in -u in every case, while masculine adjectives never change their ending at all',
            'The ending -u marks ONE room; "mali" is the form for several apartments',
          ],
          correct: 0,
          hint: 'Each is the object of imati. Think about what the accusative does to feminine words — and to masculine things that are not alive.',
          explanation:
            'The object is in the accusative. Feminine: slobodna soba → slobodnu sobu. Masculine and not alive: mali apartman looks the same as the basic form.',
        },
        {
          type: 'type',
          q: 'Now you. You want a QUIET room (quiet: mirna). Ask: Imate li ____ sobu?',
          answer: 'mirnu',
          hint: 'The room is the object, and the describing word copies its ending.',
          explanation: 'Imate li mirnu sobu? — both words take the feminine accusative -u.',
        },
        {
          type: 'type',
          q: 'Nina tells her husband the plan for Sunday, and she starts with the verb "odmarati se": ____ ćemo se na plaži.',
          answer: 'Odmarat',
          hint: 'When the infinitive stands first, it loses one letter before the future word.',
          explanation:
            'Odmarat ćemo se na plaži. — an infinitive in -ti drops its final -i when ću, ćeš, ćemo… follows it.',
        },
        {
          type: 'transform',
          q: 'The plan is arranged, so the present is fine. Say the same thing with the future.',
          from: 'U petak navečer putujemo na Krk.',
          answer: 'U petak navečer ćemo putovati na Krk.',
          accept: [
            'Putovat ćemo na Krk u petak navečer.',
            'U petak ćemo navečer putovati na Krk.',
            'U petak navečer putovat ćemo na Krk.',
            'Na Krk ćemo putovati u petak navečer.',
          ],
          hint: 'The future word for "we" goes right after the time phrase, and the verb goes back to its infinitive.',
          explanation:
            'U petak navečer ćemo putovati na Krk. — ćemo stands second, after the time phrase.',
        },
      ],
    },
    mix: [
      6,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['noćenje', "one night's stay"],
          ['smještaj', 'accommodation'],
          ['izlet', 'trip, outing'],
          ['pogled', 'view'],
          ['doručak', 'breakfast'],
        ],
        explanation: 'The words you need to book a weekend away: Koliko košta noćenje s doručkom?',
      },
      2,
      {
        type: 'sort',
        q: 'Where would you expect it — in a hotel, or in private accommodation?',
        groups: ['Typical of a hotel', 'Typical of private accommodation'],
        items: [
          { hr: 'recepcija', group: 0 },
          { hr: 'apartman s kuhinjom', group: 1 },
          { hr: 'bazen', group: 0 },
          { hr: 'soba u privatnoj kući', group: 1 },
          { hr: 'doručak u cijeni', group: 0 },
          { hr: 'nema recepcije', group: 1 },
        ],
        explanation:
          'A hotel has a reception, often a pool, and breakfast in the price. In privatni smještaj there is no reception — the owner gives you the key — and an apartman usually has its own kitchen.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "We will rest on Sunday."',
        words: ['Odmorit', 'ćemo', 'se', 'u', 'nedjelju.'],
        explanation:
          'Odmorit ćemo se u nedjelju. — the infinitive first, without its -i; then ćemo, then se.',
      },
      9,
      {
        type: 'tf',
        q: '„Vikendom idem na more.” means "This weekend I am going to the sea."',
        answer: false,
        hint: 'One word means "every weekend"; two words mean "this weekend".',
        explanation:
          'Vikendom means on weekends, regularly. "This weekend" is ovaj vikend: Ovaj vikend idem na more.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Rezervirali', 'smo', 'mala', 'sobu', 's', 'balkonom.'],
        wrong: 2,
        answer: 'malu',
        hint: 'The room is the object. The describing word has to follow it.',
        explanation:
          'Rezervirali smo malu sobu s balkonom. — mala soba → malu sobu in the accusative.',
      },
      1,
      8,
      {
        type: 'transform',
        q: 'Say the same thing, but begin with the verb.',
        from: 'U subotu ću ostati kod kuće.',
        answer: 'Ostat ću kod kuće u subotu.',
        accept: ['Ostat ću u subotu kod kuće.'],
        hint: 'When the infinitive comes first, it loses its last letter and the future word follows it.',
        explanation: 'Ostat ću kod kuće u subotu. — ostati + ću is written ostat ću.',
      },
      10,
      {
        type: 'listen',
        audio: 'Koliko košta noćenje s doručkom za dvije osobe?',
        q: 'What does the speaker want to know?',
        options: [
          'Whether breakfast is included',
          'The price of one night with breakfast for two people',
          'Whether there is a free room for two nights',
          'What time breakfast is served',
        ],
        correct: 1,
        explanation:
          'Koliko košta…? asks for a price: one night (noćenje) with breakfast (s doručkom) for two people (za dvije osobe).',
      },
      {
        type: 'dictate',
        audio: 'Što radiš za vikend?',
        answer: 'Što radiš za vikend?',
        hint: 'Four words — the question everyone asks on a Friday.',
        explanation: 'Što radiš za vikend? — "on the weekend" is za vikend.',
      },
    ],
  },

  // ── Free time and hobbies ──────────────────────────────────────────────────
  'hobbies-free-time': {
    text: {
      kind: 'text',
      title: 'Slobodno vrijeme moje obitelji',
      lines: [
        {
          hr: 'Bog! Zovem se Karla. U slobodno vrijeme sviram gitaru i puno čitam.',
          en: 'Hi! My name is Karla. In my free time I play the guitar and read a lot.',
        },
        {
          hr: 'Moj brat Filip ne svira ništa, ali se bavi sportom: subotom igra nogomet s prijateljima.',
          en: 'My brother Filip does not play any instrument, but he is into sports: on Saturdays he plays soccer with his friends.',
        },
        {
          hr: 'Naša mala sestra Iva ima pet godina. Ona se cijeli dan igra u dvorištu.',
          en: 'Our little sister Iva is five. She plays in the yard all day.',
        },
        {
          hr: 'Tata se bavi planinarenjem već dvadeset godina.',
          en: 'Dad has been hiking for twenty years.',
        },
        {
          hr: 'Mama obožava kuhati, a nedjeljom svi zajedno igramo karte.',
          en: 'Mom loves to cook, and on Sundays we all play cards together.',
        },
        {
          hr: 'Ljeti plivamo u moru, a zimi skijamo.',
          en: 'In summer we swim in the sea, and in winter we ski.',
        },
        {
          hr: 'A ti? Čime se baviš u slobodno vrijeme?',
          en: 'And you? What do you do in your free time?',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: who does what?',
          options: [
            'Karla plays soccer, Filip plays the guitar, Dad cooks',
            'Karla sings, Filip skis, Dad plays cards',
            'Karla plays the guitar, Filip hikes, Dad plays soccer',
            'Karla plays the guitar, Filip plays soccer, Dad hikes',
          ],
          correct: 3,
          hint: 'One instrument, one sport on Saturdays, and one activity in the mountains.',
          explanation:
            'Karla has her guitar (gitara), Filip igra nogomet, and tata se bavi planinarenjem — he hikes.',
        },
        {
          q: 'Karla writes "sviram gitaru", "igra nogomet" and "Iva se igra". English says "play" all three times. What decides which Croatian verb it is?',
          options: [
            'Who is playing: a girl, a boy or a small child',
            'What is played: an instrument, a sport or game, or nothing in particular',
            'When it happens: every day, on Saturdays, or all day',
            'Nothing — the three verbs mean exactly the same',
          ],
          correct: 1,
          hint: 'Look at the word after each verb: a guitar, soccer — and after the third verb, no object at all.',
          explanation:
            'An instrument takes svirati, a sport or a game takes igrati, and playing in general — what children do — is igrati se.',
        },
        {
          type: 'type',
          q: 'Now you. Your friend Dora has a piano at home and uses it every day. Say what she does: Dora ____ klavir.',
          answer: 'svira',
          hint: 'A piano is an instrument. Use the verb Karla uses for her guitar, in the form for "she".',
          explanation: 'Dora svira klavir. — svirati for instruments; ona takes the ending -a.',
        },
        {
          type: 'type',
          q: 'Karla\'s dad "se bavi planinarenjem". Your serious hobby is photography (fotografija): Bavim se ____.',
          answer: 'fotografijom',
          hint: 'Baviti se takes the instrumental. A feminine noun in -a takes the ending you know from "s Anom".',
          explanation: 'Bavim se fotografijom. — fotografija → fotografijom, instrumental.',
        },
        {
          type: 'transform',
          q: 'Say "every Friday" in ONE word, the way Karla does with Saturday and Sunday.',
          from: 'Svaki petak idemo u kino.',
          answer: 'Petkom idemo u kino.',
          accept: ['Idemo u kino petkom.', 'U kino idemo petkom.', 'Petkom u kino idemo.'],
          hint: 'Put the day itself into the instrumental. No preposition, and no "svaki".',
          explanation:
            'Petkom idemo u kino. — a day in the instrumental means "on that day, regularly": petkom, subotom, nedjeljom.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each activity to its meaning.',
        pairs: [
          ['planinariti', 'to go hiking'],
          ['plivati', 'to swim'],
          ['slikati', 'to paint'],
          ['šetati', 'to walk, to stroll'],
          ['trčati', 'to run'],
        ],
        explanation:
          'After volim or obožavam these stay in the infinitive: Volim šetati. Obožavam planinariti.',
      },
      4,
      5,
      {
        type: 'sort',
        q: 'Which verb does each one take — the one for sports and games, or the one for instruments?',
        groups: ['igrati (a sport or a game)', 'svirati (an instrument)'],
        items: [
          { hr: 'nogomet', group: 0 },
          { hr: 'gitaru', group: 1 },
          { hr: 'šah', group: 0 },
          { hr: 'klavir', group: 1 },
          { hr: 'karte', group: 0 },
          { hr: 'violinu', group: 1 },
          { hr: 'košarku', group: 0 },
          { hr: 'bubnjeve', group: 1 },
        ],
        explanation:
          'Soccer, chess, cards and basketball are played with igrati; a guitar, a piano, a violin and drums with svirati.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "The children are playing in the park."',
        words: ['Djeca', 'se', 'igraju', 'u', 'parku.'],
        explanation:
          'Djeca se igraju u parku. — with no game named, the verb needs se, and se stands in second place.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'već', 'pet', 'godina', 'igra', 'gitaru.'],
        wrong: 5,
        answer: 'svira',
        hint: 'A guitar is not a game.',
        explanation:
          'Moja sestra već pet godina svira gitaru. — an instrument takes svirati, never igrati.',
      },
      1,
      7,
      {
        type: 'tf',
        q: '„Zimi skijamo.” means "We are skiing this winter."',
        answer: false,
        hint: 'Zimi and ljeti talk about the season in general, not about one particular year.',
        explanation:
          'Zimi means "in winter", every winter: Zimi skijamo — in winter we ski. "This winter" would be ove zime.',
      },
      {
        type: 'transform',
        q: 'Swimming is her regular sport. Say it with "baviti se" and the noun "plivanje".',
        from: 'Ana pliva.',
        answer: 'Ana se bavi plivanjem.',
        hint: 'The small word of this verb goes in second place, and the activity goes into the instrumental.',
        explanation:
          'Ana se bavi plivanjem. — baviti se + instrumental; a neuter noun in -e takes -em.',
      },
      8,
      10,
      {
        type: 'listen',
        audio: 'Moja kći svira violinu, a sin igra košarku.',
        q: 'What does the son do?',
        options: [
          'He plays the violin',
          'He plays basketball',
          'He plays chess',
          'He goes swimming',
        ],
        correct: 1,
        explanation:
          'Sin igra košarku — the son plays basketball. It is the daughter (kći) who plays the violin.',
      },
      {
        type: 'dictate',
        audio: 'U slobodno vrijeme volim čitati.',
        answer: 'U slobodno vrijeme volim čitati.',
        hint: 'Five words: "In my free time I like to read."',
        explanation: 'U slobodno vrijeme volim čitati. — after volim, the infinitive.',
      },
    ],
  },

  // ── School and studying ────────────────────────────────────────────────────
  'school-studies': {
    text: {
      kind: 'dialogue',
      title: 'Učiš ili studiraš?',
      lines: [
        {
          who: 'Dino',
          hr: 'Sara, ti jako dobro govoriš hrvatski! Studiraš li hrvatski na fakultetu?',
          en: 'Sara, you speak Croatian really well! Are you majoring in Croatian in college?',
        },
        {
          who: 'Sara',
          hr: 'Ne, ne studiram. Učim hrvatski na tečaju, utorkom i četvrtkom. A ti?',
          en: 'No, I am not. I am learning Croatian in a course, on Tuesdays and Thursdays. And you?',
        },
        {
          who: 'Dino',
          hr: 'Ja studiram povijest na Filozofskom fakultetu. Sutra imam ispit iz povijesti.',
          en: 'I study history at the Faculty of Humanities. Tomorrow I have a history exam.',
        },
        {
          who: 'Sara',
          hr: 'Sretno! A tvoja sestra? Je li i ona studentica?',
          en: 'Good luck! And your sister? Is she a college student too?',
        },
        {
          who: 'Dino',
          hr: 'Ne, Maja je još učenica. Ide u srednju školu, u treći razred.',
          en: 'No, Maja is still a school student. She is in high school, in her third year.',
        },
        { who: 'Sara', hr: 'Koji predmet voli?', en: 'Which subject does she like?' },
        {
          who: 'Dino',
          hr: 'Voli matematiku. Naša mama predaje matematiku u gimnaziji, pa Maja uvijek ima dobre ocjene!',
          en: 'She likes math. Our mom teaches math at a high school, so Maja always has good grades!',
        },
        {
          who: 'Sara',
          hr: 'Blago njoj! Ja večeras moram napisati zadaću iz hrvatskog.',
          en: 'Lucky her! I have to do my Croatian homework tonight.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who does what?',
          options: [
            'Dino teaches history, Maja studies math in college, their mom is in a Croatian course',
            'Dino studies history in college, Maja is in high school, their mom teaches math',
            'Dino is in high school, Maja studies history, their mom teaches Croatian',
            'Dino studies math, Maja is in high school, their mom teaches history',
          ],
          correct: 1,
          hint: 'One of them has an exam tomorrow, one is in her third year, and one stands in front of a class.',
          explanation:
            'Dino studira povijest na fakultetu, Maja ide u srednju školu, and their mom predaje matematiku u gimnaziji.',
        },
        {
          q: 'Dino asks "Studiraš li hrvatski?" and Sara answers "Ne… Učim hrvatski". Why does she change the verb?',
          options: [
            'Studirati means a degree course in college; learning in a course or on your own is učiti',
            'Učiti is the verb for languages; studirati is the verb for every other subject',
            'Studirati is what a teacher does; učiti is what a learner does',
            'Učiti is for things you do in the evening; studirati is for things you do during the day',
          ],
          correct: 0,
          hint: 'Where does Sara learn Croatian — in college, or somewhere else?',
          explanation:
            'Studirati is only for a subject you take in college: Dino studira povijest. Sara goes to a course, so she says učim.',
        },
        {
          type: 'type',
          q: 'Now you. Dino has a history exam. YOUR exam tomorrow is in physics (fizika): Sutra imam ispit iz ____.',
          answer: 'fizike',
          hint: 'Iz takes the genitive. A feminine noun in -a gets the ending you know from "čaša vode".',
          explanation: 'Sutra imam ispit iz fizike. — an exam IN a subject is iz + genitive.',
        },
        {
          type: 'type',
          q: "Dino's cousin Luka is ten and goes to elementary school: Luka ide u osnovnu školu. On je ____.",
          answer: 'učenik',
          accept: ['đak', 'osnovnoškolac'],
          hint: 'English says "student" for both. Croatian has a separate word for someone who is still at school — Maja is the feminine one.',
          explanation:
            'On je učenik. — a boy at school is an učenik, a girl an učenica. Student and studentica are only for college.',
        },
        {
          type: 'transform',
          q: 'Now say it about Dino, who goes to his college (fakultet). Mind the small word before the place.',
          from: 'Maja ide u školu.',
          answer: 'Dino ide na fakultet.',
          hint: 'School pairs with u. This institution pairs with a different preposition.',
          explanation:
            'Dino ide na fakultet. — it is u školu, u školi, but na fakultet, na fakultetu. Each institution keeps its own preposition.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['predmet', 'subject'],
          ['ocjena', 'grade'],
          ['zadaća', 'homework'],
          ['ispit', 'exam'],
          ['knjižnica', 'library'],
        ],
        explanation:
          'Knjižnica is where you borrow and read books — a library. A bookstore is a knjižara.',
      },
      6,
      4,
      0,
      {
        type: 'sort',
        q: 'Does the word belong to school, or to college?',
        groups: ['School', 'College'],
        items: [
          { hr: 'učenik', group: 0 },
          { hr: 'student', group: 1 },
          { hr: 'razred', group: 0 },
          { hr: 'predavanje', group: 1 },
          { hr: 'učiteljica', group: 0 },
          { hr: 'studentica', group: 1 },
          { hr: 'učenica', group: 0 },
          { hr: 'diplomirati', group: 1 },
        ],
        explanation:
          'At school there are učenici, razredi and učitelji. In college there are studenti, lectures (predavanja), and at the end you graduate: diplomirati.',
      },
      {
        type: 'tf',
        q: '„Moj sin je student.” tells you that the son goes to elementary school.',
        answer: false,
        hint: 'Remember who is called "student" in Croatian.',
        explanation: 'A student is in college. A child at school is an učenik: Moj sin je učenik.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "My daughter is in the third grade."',
        words: ['Moja', 'kći', 'ide', 'u', 'treći', 'razred.'],
        explanation:
          'Moja kći ide u treći razred. — Croatian says she "goes into" the third grade: u + accusative.',
      },
      5,
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Brat', 'studira', 'medicinu', 'u', 'fakultetu.'],
        wrong: 3,
        answer: 'na',
        hint: 'Each institution pairs with its own preposition.',
        explanation:
          'Brat studira medicinu na fakultetu. — a school takes u (u školi), but fakultet takes na.',
      },
      11,
      {
        type: 'transform',
        q: 'This is the answer. Ask a friend the question that gets it.',
        from: 'Studiram povijest.',
        answer: 'Što studiraš?',
        accept: ['Što ti studiraš?', 'A što ti studiraš?', 'A što studiraš?'],
        hint: 'Begin with the question word for "what", and put the verb in the form for ti.',
        explanation: 'Što studiraš? — Studiram povijest.',
      },
      3,
      {
        type: 'listen',
        audio: 'Djeca pišu zadaću poslije ručka.',
        q: 'When do the children do their homework?',
        options: ['Before school', 'After dinner', 'In the library', 'After lunch'],
        correct: 3,
        explanation: 'Poslije ručka — after lunch. Zadaća is homework.',
      },
      {
        type: 'dictate',
        audio: 'Moja sestra ide u srednju školu.',
        answer: 'Moja sestra ide u srednju školu.',
        hint: 'Six words: "My sister goes to high school."',
        explanation:
          'Moja sestra ide u srednju školu. — srednja škola in the accusative after u: srednju školu.',
      },
    ],
  },

  // ══ UNIT 4 ═════════════════════════════════════════════════════════════════

  // ── At the store and at the market ─────────────────────────────────────────
  'grocery-shopping': {
    text: {
      kind: 'dialogue',
      title: 'Na tržnici',
      lines: [
        { who: 'Prodavačica', hr: 'Dobar dan! Izvolite?', en: 'Hello! What can I get you?' },
        {
          who: 'Gospodin Horvat',
          hr: 'Dobar dan! Koliko košta kilogram rajčica?',
          en: 'Hello! How much is a kilo of tomatoes?',
        },
        {
          who: 'Prodavačica',
          hr: 'Dva eura. Jako su svježe!',
          en: 'Two euros. They are very fresh!',
        },
        {
          who: 'Gospodin Horvat',
          hr: 'Dajte mi kilu rajčica i pola kile sira, molim Vas.',
          en: 'Give me a kilo of tomatoes and half a kilo of cheese, please.',
        },
        {
          who: 'Prodavačica',
          hr: 'Evo, izvolite. Imam i domaći med. Želite li staklenku meda?',
          en: 'Here you are. I also have homemade honey. Would you like a jar of honey?',
        },
        {
          who: 'Gospodin Horvat',
          hr: 'Može! I još deset jaja. Ne, čekajte — uzet ću dvije kutije jaja. Sutra nam dolaze gosti.',
          en: 'Sure! And ten eggs as well. No, wait — I will take two boxes of eggs. We have guests coming tomorrow.',
        },
        { who: 'Prodavačica', hr: 'Je li to sve?', en: 'Is that everything?' },
        {
          who: 'Gospodin Horvat',
          hr: 'To je sve, hvala. Mogu li platiti karticom?',
          en: 'That is everything, thank you. Can I pay by card?',
        },
        {
          who: 'Prodavačica',
          hr: 'Nažalost, ne. Ovdje možete platiti samo gotovinom.',
          en: 'Unfortunately not. You can only pay cash here.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Mr. Horvat buy in the end?',
          options: [
            'Two kilos of tomatoes, a kilo of cheese and ten eggs',
            'A kilo of tomatoes, half a kilo of cheese and ten eggs — no honey',
            'A kilo of tomatoes, half a kilo of cheese, a jar of honey and two boxes of eggs',
            'Half a kilo of tomatoes, a kilo of cheese, a jar of honey and two boxes of eggs',
          ],
          correct: 2,
          hint: 'He changes his mind about one thing — the eggs. And he says yes to something the seller offers.',
          explanation:
            'Kilu rajčica, pola kile sira, staklenku meda — and not ten eggs but dvije kutije jaja.',
        },
        {
          q: 'He asks "Koliko košta kilogram rajčica?" and then says "Dajte mi kilu rajčica". Kila is the everyday word for kilogram — but why "kilu", not "kila"?',
          options: [
            'Because kilu is the plural of kila',
            'Because he is speaking politely',
            'Because tomatoes are things you count',
            'Because the amount word is now the object of "dajte", so it takes the accusative',
          ],
          correct: 3,
          hint: 'In the first sentence the amount is the subject of "košta". What is it in the second?',
          explanation:
            'The food is always in the genitive, but the amount word does its own job in the sentence. As the object of Dajte mi… it is accusative: kila → kilu.',
        },
        {
          type: 'type',
          q: 'Now you. You want a bottle of water. Boca is the object here: Dajte mi ____ vode, molim Vas.',
          answer: 'bocu',
          hint: 'A feminine noun in -a, and it is what you are asking to be given.',
          explanation: 'Dajte mi bocu vode. — boca → bocu (accusative); voda → vode (genitive).',
        },
        {
          type: 'type',
          q: 'You also want half a kilo of lemons. Lemons (limun, plural limuni) are things you count: Dajte mi pola kile ____.',
          answer: 'limuna',
          hint: 'Things you count take the genitive PLURAL after an amount. For this masculine noun it ends in a long -a.',
          explanation:
            'Dajte mi pola kile limuna. — counted things take the genitive plural: kilogram jabuka, kutija jaja, pola kile limuna.',
        },
        {
          type: 'transform',
          q: 'More guests are coming! He takes FIVE boxes, not two.',
          from: 'Uzet ću dvije kutije jaja.',
          answer: 'Uzet ću pet kutija jaja.',
          hint: 'After five, the amount word changes its form. The eggs stay as they are.',
          explanation:
            'Uzet ću pet kutija jaja. — dvije, tri, četiri kutije, but pet kutija: from five up, the genitive plural.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['staklenka', 'jar'],
          ['limenka', 'can'],
          ['kutija', 'box'],
          ['vrećica', 'bag'],
          ['košarica', 'shopping basket'],
        ],
        explanation:
          'Staklenka meda, limenka soka, kutija jaja — and at the checkout: Trebate li vrećicu?',
      },
      6,
      0,
      {
        type: 'sort',
        q: 'After an amount word: do you count it (genitive plural) or not (genitive singular)?',
        groups: ['You count them: kilogram …', 'You do not count it: litra, komad, paket …'],
        items: [
          { hr: 'jabuke', group: 0 },
          { hr: 'mlijeko', group: 1 },
          { hr: 'jaja', group: 0 },
          { hr: 'brašno', group: 1 },
          { hr: 'rajčice', group: 0 },
          { hr: 'sir', group: 1 },
          { hr: 'banane', group: 0 },
          { hr: 'ulje', group: 1 },
        ],
        explanation:
          'Counted things go into the genitive plural: kilogram jabuka, rajčica, banana; kutija jaja. Milk, flour, cheese and oil are not counted: litra mlijeka, paket brašna, komad sira, boca ulja.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "I will pay by card at the checkout."',
        words: ['Platit', 'ću', 'karticom', 'na', 'blagajni.'],
        explanation:
          'Platit ću karticom na blagajni. — karticom is the instrumental (by what means), and blagajna is the checkout.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Kupila', 'sam', 'litra', 'soka', 'i', 'kruh.'],
        wrong: 2,
        answer: 'litru',
        hint: 'The amount word is the object of "kupila sam".',
        explanation:
          'Kupila sam litru soka i kruh. — as an object, the amount word takes the accusative: litra → litru.',
      },
      9,
      4,
      {
        type: 'tf',
        q: '„Pola kile sira” and „pedeset deka sira” are the same amount of cheese.',
        answer: true,
        hint: 'How many grams are there in one deka — and in half a kilo?',
        explanation:
          'True — one deka is ten grams, so pedeset deka is 500 grams, and that is half a kilo. At the deli counter Croatians count in deka.',
      },
      {
        type: 'transform',
        q: 'One is not enough. Ask for TWO.',
        from: 'Dajte mi limenku soka.',
        answer: 'Dajte mi dvije limenke soka.',
        hint: 'After two, the amount word takes the short plural. The juice does not change.',
        explanation: 'Dajte mi dvije limenke soka. — dvije, tri, četiri limenke; but pet limenki.',
      },
      10,
      {
        type: 'listen',
        audio: 'Trebate li vrećicu?',
        q: 'Where are you, and what are you being asked?',
        options: [
          'At the market: is that everything?',
          'At the checkout: do you need a bag?',
          'At the checkout: will you pay by card?',
          'At the market: how much would you like?',
        ],
        correct: 1,
        explanation:
          'Trebate li vrećicu? — do you need a bag? You hear it at the blagajna in a supermarket.',
      },
      {
        type: 'dictate',
        audio: 'Koliko košta kilogram jabuka?',
        answer: 'Koliko košta kilogram jabuka?',
        hint: 'Four words: you are asking the price of a kilo of apples.',
        explanation:
          'Koliko košta kilogram jabuka? — apples are counted, so jabuka is the genitive plural.',
      },
    ],
  },

  // ── Being a guest ──────────────────────────────────────────────────────────
  'visiting-customs': {
    text: {
      kind: 'dialogue',
      title: 'Na večeri kod gospođe Kovač',
      lines: [
        {
          who: 'Emma',
          hr: 'Dobra večer! Oprostite što kasnim — na cesti je bila velika gužva.',
          en: 'Good evening! Sorry I am late — there was heavy traffic on the road.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Nema problema! Dobro došli, uđite!',
          en: 'No problem! Welcome, come in!',
        },
        {
          who: 'Emma',
          hr: 'Hvala. Ovo je za Vas — malo cvijeća i bombonijera. Trebam li se izuti?',
          en: 'Thank you. This is for you — some flowers and a box of chocolates. Should I take my shoes off?',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Kako lijepo, hvala! Ne treba, slobodno uđite. Večera je već na stolu.',
          en: 'How lovely, thank you! No need, come right in. Dinner is already on the table.',
        },
        {
          who: 'Emma',
          hr: 'Dobar tek! Mmm, sarma je jako ukusna.',
          en: 'Enjoy your meal! Mmm, the sarma is really delicious.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Drago mi je! Poslužite se, uzmite još!',
          en: 'I am glad! Help yourself, have some more!',
        },
        {
          who: 'Emma',
          hr: 'Hvala, ali stvarno sam sita.',
          en: 'Thank you, but I am really full.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Onda samo još mali komad kolača!',
          en: 'Then just one more small piece of cake!',
        },
        {
          who: 'Emma',
          hr: 'Dobro, ali onda moram ići. Hvala Vam na večeri, bilo je jako lijepo!',
          en: 'All right, but then I have to go. Thank you for dinner, it was really lovely!',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Hvala što ste došli! Pozdravite svoju obitelj!',
          en: 'Thank you for coming! Give my regards to your family!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Emma bring, and does she take her shoes off?',
          options: [
            'Flowers and a box of chocolates; no — the host says there is no need',
            'A bottle of wine and a cake; yes',
            'Flowers and a bottle of wine; no — the host says there is no need',
            'A box of chocolates only; yes — she is given slippers',
          ],
          correct: 0,
          hint: 'Two gifts, neither of them a drink. And listen to the answer to "Trebam li se izuti?"',
          explanation:
            'Malo cvijeća i bombonijera — flowers and chocolates. To the shoe question the host answers Ne treba, slobodno uđite.',
        },
        {
          q: 'Emma says "stvarno sam sita", and Mrs. Kovač still offers her cake. What is going on?',
          options: [
            'Mrs. Kovač did not hear her',
            '"Sita" means "hungry"',
            'Offering again is simply good hosting — a Croatian host offers more than once',
            'Emma asked for dessert earlier',
          ],
          correct: 2,
          hint: 'Think about what the lesson says a host does at the table — again and again.',
          explanation:
            'Sita means full. But hosts offer food several times (Poslužite se! Uzmite još! Samo još malo!), and accepting a little more is polite.',
        },
        {
          type: 'type',
          q: 'Now you. Emma thanks for the dinner: "Hvala Vam na večeri." You were invited to a party (zabava): Hvala Vam na ____.',
          answer: 'zabavi',
          hint: 'After hvala na, the locative. A feminine noun in -a ends the way it does in "u školi".',
          explanation:
            'Hvala Vam na zabavi. — hvala na + locative: na večeri, na pozivu, na zabavi.',
        },
        {
          type: 'type',
          q: 'Emma is a woman, so she says "sita sam". Her husband Mark is offered more too. He says: Hvala, ____ sam.',
          answer: 'sit',
          hint: 'The describing word agrees with the speaker. The masculine form has no ending at all.',
          explanation: 'Hvala, sit sam. — a man is sit, a woman is sita.',
        },
        {
          type: 'transform',
          q: 'Next week Emma is at her friend Ana\'s, and they say "ti" to each other. Change the sentence.',
          from: 'Hvala Vam na pozivu.',
          answer: 'Hvala ti na pozivu.',
          hint: 'Only the small word for "to you" changes.',
          explanation: 'Hvala ti na pozivu. — Vam is the polite "to you"; to a friend it is ti.',
        },
      ],
    },
    mix: [
      7,
      {
        type: 'match',
        q: 'When do you say it? Match each phrase to its moment.',
        pairs: [
          ['Dobar tek!', 'just before eating'],
          ['Živjeli!', 'raising your glasses'],
          ['Izvolite, uđite!', 'opening the door to guests'],
          ['Moram ići.', 'when you want to leave'],
          ['Sita sam.', 'when you cannot eat any more'],
        ],
        explanation:
          'A small script everybody knows: one phrase for the door, one for the food, one for the glass, one for the way out.',
      },
      6,
      10,
      8,
      {
        type: 'sort',
        q: 'Who says it — the guest or the host?',
        groups: ['The guest', 'The host'],
        items: [
          { hr: 'Oprostite što kasnim.', group: 0 },
          { hr: 'Dobro došli!', group: 1 },
          { hr: 'Trebam li se izuti?', group: 0 },
          { hr: 'Poslužite se!', group: 1 },
          { hr: 'Hvala na pozivu.', group: 0 },
          { hr: 'Uzmite još!', group: 1 },
          { hr: 'Jako je ukusno!', group: 0 },
          { hr: 'Evo Vam papuče.', group: 1 },
        ],
        explanation:
          'The guest apologizes, asks about shoes, praises the food and gives thanks. The host welcomes, offers slippers and keeps offering food.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "I brought a cake for the children." (a woman speaking)',
        words: ['Donijela', 'sam', 'kolač', 'za', 'djecu.'],
        explanation: 'Donijela sam kolač za djecu. — never arrive empty-handed.',
      },
      9,
      {
        type: 'tf',
        q: 'You are invited for seven. Arriving at a quarter past seven is perfectly normal.',
        answer: true,
        hint: 'Remember what the lesson says about arriving early — and about the host still getting ready.',
        explanation:
          'True — guests usually come about fifteen minutes after the invited time. Arriving early is the awkward thing. If you are really late: Oprostite što kasnim.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Hvala', 'na', 'večera', 'i', 'na', 'kolaču.'],
        wrong: 2,
        answer: 'večeri',
        hint: 'After hvala na, the noun cannot keep its basic form.',
        explanation: 'Hvala na večeri i na kolaču. — hvala na + locative: večera → večeri.',
      },
      {
        type: 'transform',
        q: 'You are the host, and your guest is a close friend. Say it with "ti".',
        from: 'Poslužite se, ima još kolača!',
        answer: 'Posluži se, ima još kolača!',
        hint: 'The command for one friend is shorter than the polite one.',
        explanation: 'Posluži se! — one friend. Poslužite se! — a group, or someone you call Vi.',
      },
      5,
      {
        type: 'listen',
        audio: 'Hvala, jako je ukusno, ali stvarno sam sita.',
        q: 'What is the guest doing?',
        options: [
          'Asking for a second helping',
          'Saying the food is cold',
          'Saying that she must leave',
          'Politely refusing more food',
        ],
        correct: 3,
        explanation:
          'Jako je ukusno — it is delicious; ali stvarno sam sita — but I am really full. A polite no.',
      },
      {
        type: 'dictate',
        audio: 'Hvala što ste došli!',
        answer: 'Hvala što ste došli!',
        hint: 'Four words — what the host says when you leave.',
        explanation: 'Hvala što ste došli! — thank you for coming.',
      },
    ],
  },

  // ── The locative of adjectives ─────────────────────────────────────────────
  'locative-adjectives': {
    text: {
      kind: 'dialogue',
      title: 'U malom selu ili u velikom gradu?',
      lines: [
        { who: 'Lana', hr: 'Jure, gdje ti živiš?', en: 'Jure, where do you live?' },
        {
          who: 'Jure',
          hr: 'Živim u malom selu na otoku Braču. A ti?',
          en: 'I live in a small village on the island of Brač. And you?',
        },
        {
          who: 'Lana',
          hr: 'Ja živim u velikom gradu, u Zagrebu. Stanujem u staroj zgradi u centru.',
          en: 'I live in a big city, in Zagreb. I live in an old building downtown.',
        },
        { who: 'Jure', hr: 'Je li mirno u tvojoj ulici?', en: 'Is it quiet on your street?' },
        {
          who: 'Lana',
          hr: 'Nije! Ali u našem stanu je lijepo. A što radiš na otoku?',
          en: 'It is not! But it is nice in our apartment. And what do you do on the island?',
        },
        {
          who: 'Jure',
          hr: 'Ljeti radim na jednom velikom brodu, a zimi pomažem tati u njegovom restoranu.',
          en: 'In summer I work on a big ship, and in winter I help Dad in his restaurant.',
        },
        {
          who: 'Lana',
          hr: 'Lijepo! Moja mama stalno priča o životu na toplom moru.',
          en: 'Nice! My mom is always talking about life by the warm sea.',
        },
        {
          who: 'Jure',
          hr: 'Onda dođite k nama! U ovom mjesecu na našim plažama nema puno ljudi.',
          en: 'Then come and visit us! This month there are not many people on our beaches.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where do Jure and Lana live?',
          options: [
            'Jure in a big city; Lana in a small village',
            'Jure on a ship; Lana in a new apartment in Split',
            'Both of them on the island of Brač',
            'Jure in a small village on an island; Lana in an old building in a big city',
          ],
          correct: 3,
          hint: 'One of them has the sea all around; the other has a noisy street.',
          explanation:
            'Jure živi u malom selu na otoku Braču. Lana živi u velikom gradu — she lives u staroj zgradi in the center of Zagreb.',
        },
        {
          q: 'Lana says "u velikom gradu" but "u našem stanu". Grad and stan are both masculine — so why -om once and -em once?',
          options: [
            'Because stan is really a neuter noun',
            'Because naš ends in a soft consonant (š), and after a soft stem the ending is -em',
            'Because -em is used for things that belong to somebody',
            'Because naš is a plural word',
          ],
          correct: 1,
          hint: 'Look at the last consonant before the ending: k in velik-, š in naš-.',
          explanation:
            'The masculine and neuter locative ending is -om, but after c, č, ć, đ, j, lj, nj, š, ž it is -em: u velikom gradu, u našem stanu.',
        },
        {
          type: 'type',
          q: 'Now you. Lana lives in an OLD building. You live in a NEW one (new: nova): Stanujem u ____ zgradi.',
          answer: 'novoj',
          hint: 'Zgrada is feminine. Use the ending Lana uses when she describes her building.',
          explanation: 'Stanujem u novoj zgradi. — feminine locative is always -oj.',
        },
        {
          type: 'type',
          q: 'Jure helps Dad "u njegovom restoranu" — in HIS restaurant. Say that you work in your OWN office (ured): Radim u ____ uredu.',
          answer: 'svom',
          accept: ['svojem', 'mom', 'mojem'],
          hint: 'The office belongs to the subject of the sentence. Use the word that points back at the subject, in the masculine locative.',
          explanation:
            'Radim u svom uredu. — svoj points back at the subject and declines like moj: u svom (or svojem) uredu.',
        },
        {
          type: 'transform',
          q: 'Not one beach but several. Put the whole phrase into the plural.',
          from: 'na našoj lijepoj plaži',
          answer: 'na našim lijepim plažama',
          hint: 'In the plural, every word before the noun takes one and the same ending, whatever the gender.',
          explanation:
            'na našim lijepim plažama — in the plural the locative of adjectives is -im for every gender, before a noun in -ama or -ima.',
        },
      ],
    },
    mix: [
      6,
      {
        type: 'match',
        q: 'Whose city, or which one? Match each phrase to its meaning.',
        pairs: [
          ['u ovom gradu', 'in this city'],
          ['u tom gradu', 'in that city'],
          ['u mom gradu', 'in my city'],
          ['u vašem gradu', 'in your city (you all)'],
          ['u njihovom gradu', 'in their city'],
        ],
        explanation:
          'The small pointing and owning words take the same locative endings as adjectives: ovom, tom, mom, vašem, njihovom.',
      },
      1,
      8,
      10,
      {
        type: 'sort',
        q: 'In front of a masculine or neuter noun in the locative: which ending does each word take?',
        groups: ['-om, like „u velikom”', '-em, after a soft consonant'],
        items: [
          { hr: 'nov', group: 0 },
          { hr: 'vruć', group: 1 },
          { hr: 'star', group: 0 },
          { hr: 'naš', group: 1 },
          { hr: 'mali', group: 0 },
          { hr: 'loš', group: 1 },
          { hr: 'lijep', group: 0 },
          { hr: 'vaš', group: 1 },
        ],
        explanation:
          'Ć and š are soft consonants, so vruć, naš, loš and vaš take -em. Nov, star, mali and lijep have hard stems and take -om.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "There is no balcony in my room."',
        words: ['U', 'mojoj', 'sobi', 'nema', 'balkona.'],
        explanation: 'U mojoj sobi nema balkona. — soba is feminine, so moja becomes mojoj.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ljeti', 'se', 'kupamo', 'u', 'toploj', 'moru.'],
        wrong: 4,
        answer: 'toplom',
        hint: 'Check the gender of the noun at the end.',
        explanation: 'Ljeti se kupamo u toplom moru. — more is neuter, so the ending is -om.',
      },
      9,
      3,
      {
        type: 'tf',
        q: '„Ivan priča o njegovoj sestri.” means that Ivan is talking about his own sister.',
        answer: false,
        hint: 'Which word points back at the subject of the sentence?',
        explanation:
          "Njegovoj means another man's sister. For Ivan's own sister, Croatian uses svoj: Ivan priča o svojoj sestri.",
      },
      {
        type: 'transform',
        q: 'Say that you live in it: begin with "Živim u".',
        from: 'ovaj mali stan',
        answer: 'Živim u ovom malom stanu.',
        accept: ['Živim u ovome malom stanu.', 'Živim u ovom malome stanu.'],
        hint: 'Both words before the noun take the same masculine ending, and the noun takes its own locative ending.',
        explanation: 'Živim u ovom malom stanu. — ovaj → ovom, mali → malom, stan → stanu.',
      },
      12,
      13,
      {
        type: 'listen',
        audio: 'Moji roditelji žive u maloj kući u jednom selu blizu Osijeka.',
        q: 'Where do the parents live?',
        options: [
          'In a big house in Osijek',
          'In a small house in a village near Osijek',
          'In a small apartment in Osijek',
          'In a village on an island',
        ],
        correct: 1,
        explanation:
          'U maloj kući — in a small house; u jednom selu blizu Osijeka — in a village near Osijek.',
      },
      {
        type: 'dictate',
        audio: 'Stanujemo u ovoj zgradi.',
        answer: 'Stanujemo u ovoj zgradi.',
        hint: 'Four words: "We live in this building."',
        explanation: 'Stanujemo u ovoj zgradi. — zgrada is feminine: ova → ovoj.',
      },
    ],
  },

  // ── Dative and locative ────────────────────────────────────────────────────
  'dative-locative': {
    text: {
      kind: 'dialogue',
      title: 'Poklon za baku',
      lines: [
        {
          who: 'Luka',
          hr: 'Sara, sutra je bakin rođendan. Što ćemo pokloniti baki?',
          en: "Sara, tomorrow is Grandma's birthday. What are we going to give Grandma?",
        },
        {
          who: 'Sara',
          hr: 'Već sam joj kupila knjigu o Dalmaciji. A ti?',
          en: 'I have already bought her a book about Dalmatia. And you?',
        },
        {
          who: 'Luka',
          hr: 'Ja ću joj pokloniti cvijeće. Gdje je knjiga? Mogu li je vidjeti?',
          en: 'I will give her flowers. Where is the book? Can I see it?',
        },
        {
          who: 'Sara',
          hr: 'U ladici je, u mojoj sobi. Ali nemoj ništa reći baki!',
          en: 'It is in the drawer, in my room. But do not say anything to Grandma!',
        },
        {
          who: 'Luka',
          hr: 'Neću, vjeruj mi. Jesi li pisala teti u Rijeci?',
          en: 'I will not, trust me. Did you write to our aunt in Rijeka?',
        },
        {
          who: 'Sara',
          hr: 'Jesam. Poslala sam joj poruku, ali mi još nije odgovorila.',
          en: 'I did. I sent her a message, but she has not answered me yet.',
        },
        {
          who: 'Luka',
          hr: 'Onda ću joj ja telefonirati. Baka se jako raduje teti i tetku.',
          en: 'Then I will phone her. Grandma is really looking forward to seeing our aunt and uncle.',
        },
        {
          who: 'Sara',
          hr: 'Dobro. A ja ću pomoći mami u kuhinji — radimo tortu!',
          en: 'Good. And I will help Mom in the kitchen — we are making a cake!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who gives Grandma what, and where is the book now?',
          options: [
            'Sara gives flowers, Luka a book; the book is in the kitchen',
            "Both give her a book; it is at their aunt's in Rijeka",
            "Sara gives a book, Luka flowers; the book is in a drawer in Sara's room",
            'Sara gives a book, Luka a cake; the book is on a shelf',
          ],
          correct: 2,
          hint: 'One present is already bought and hidden; the other one cannot be hidden in a drawer.',
          explanation:
            'Sara je kupila knjigu, Luka će pokloniti cvijeće. The book is u ladici, u Sarinoj sobi.',
        },
        {
          q: 'The dialogue has "pokloniti baki" and "u ladici". Both nouns end in -i. Are they doing the same job?',
          options: [
            'No — baki is the receiver (dative, no preposition); ladici says where, after u (locative)',
            'Yes — both say where something is',
            'Yes — both are receivers of a present',
            'No — baki is plural and ladici is singular',
          ],
          correct: 0,
          hint: 'Ask "to whom?" of one and "where?" of the other. Which one needs a preposition?',
          explanation:
            'The endings are the same, the jobs are not. The dative names the receiver and stands alone: pokloniti baki. The locative always follows a preposition: u ladici.',
        },
        {
          type: 'type',
          q: 'Now you. Sara will help Mom. You will help your BROTHER (brat): Pomoći ću ____.',
          answer: 'bratu',
          hint: 'Pomoći takes the dative. A masculine noun takes the ending you know from "u gradu".',
          explanation: 'Pomoći ću bratu. — the person you help is in the dative: brat → bratu.',
        },
        {
          type: 'type',
          q: "The book is in the drawer. Sara's keys are in her BAG (torba): Ključevi su u ____.",
          answer: 'torbi',
          hint: 'Where something is: u + locative. A feminine noun in -a changes its last letter.',
          explanation: 'Ključevi su u torbi. — torba → torbi, locative after u.',
        },
        {
          type: 'transform',
          q: 'Replace "baki" with the short word for "to her".',
          from: 'Poklonit ću baki cvijeće.',
          answer: 'Poklonit ću joj cvijeće.',
          hint: 'One short dative word, standing right after the future word.',
          explanation:
            'Poklonit ću joj cvijeće. — joj is the short dative of ona, and it stays in the group of small words.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'These verbs all take the dative. Match each to its meaning.',
        pairs: [
          ['pomoći', 'to help'],
          ['vjerovati', 'to believe, to trust'],
          ['zahvaliti', 'to thank'],
          ['pokazati', 'to show'],
          ['radovati se', 'to look forward to'],
        ],
        explanation:
          'English says "help him" and "thank him"; Croatian helps and thanks TO someone — the person is in the dative.',
      },
      5,
      {
        type: 'sort',
        q: 'Look at the last word of each sentence: is it a receiver (to whom?) or a place (where?)',
        groups: ['Receiver — dative', 'Place — locative'],
        items: [
          { hr: 'Pišem prijatelju.', group: 0 },
          { hr: 'Živim u Zagrebu.', group: 1 },
          { hr: 'Pomažem mami.', group: 0 },
          { hr: 'Knjiga je na stolu.', group: 1 },
          { hr: 'Vjerujem sestri.', group: 0 },
          { hr: 'Večeramo u kuhinji.', group: 1 },
          { hr: 'Dajem ključ bratu.', group: 0 },
          { hr: 'Šetamo po parku.', group: 1 },
        ],
        explanation:
          'Same endings, two jobs. The dative stands without a preposition and names who receives. The locative always comes after u, na, o or po.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "I gave my sister the book." (a man speaking)',
        words: ['Dao', 'sam', 'sestri', 'knjigu.'],
        explanation:
          'Dao sam sestri knjigu. — the receiver is dative (sestri), the thing is accusative (knjigu).',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. (The sentence should mean: "Can you help me tomorrow?")',
        words: ['Možeš', 'li', 'me', 'pomoći', 'sutra?'],
        wrong: 2,
        answer: 'mi',
        hint: 'This verb does not take the "whom" form. It takes the "to whom" form.',
        explanation: 'Možeš li mi pomoći sutra? — pomoći takes the dative, so "me" is mi here.',
      },
      3,
      9,
      {
        type: 'tf',
        q: '„Radujem se moru.” means "I am happy at the seaside."',
        answer: false,
        hint: 'There is no preposition before "moru". Which case stands alone, and what does radovati se mean?',
        explanation:
          'Moru is the dative here: "I am looking forward to the sea." Being at the seaside needs a preposition and the locative: na moru.',
      },
      {
        type: 'transform',
        q: 'She is not on her way any more — she is there. Say where Ana IS.',
        from: 'Ana ide u školu.',
        answer: 'Ana je u školi.',
        hint: 'Going somewhere takes the accusative after u. Being there takes a different case.',
        explanation:
          'Ana je u školi. — u školu (accusative) is the way there; u školi (locative) is the place.',
      },
      7,
      {
        type: 'listen',
        audio: 'Rekla sam mu istinu, ali mi ne vjeruje.',
        q: 'What is the problem?',
        options: [
          'She did not tell him the truth',
          'She does not believe him',
          'He told her the truth too late',
          'He does not believe her',
        ],
        correct: 3,
        explanation:
          'Rekla sam mu istinu — I told him the truth; ali mi ne vjeruje — but he does not believe me.',
      },
      {
        type: 'dictate',
        audio: 'Ključ je u ladici.',
        answer: 'Ključ je u ladici.',
        hint: 'Four words: "The key is in the drawer."',
        explanation: 'Ključ je u ladici. — ladica → ladici, locative after u.',
      },
    ],
  },

  // ── The plural cases ───────────────────────────────────────────────────────
  'plural-cases': {
    text: {
      kind: 'text',
      title: 'Pozdrav s Hvara',
      lines: [
        { hr: 'Draga Ivana, pozdrav s Hvara!', en: 'Dear Ivana, greetings from Hvar!' },
        {
          hr: 'Ovdje sam s prijateljima već pet dana.',
          en: 'I have been here with friends for five days now.',
        },
        {
          hr: 'Posjetili smo tri otoka i vidjeli puno gradova i sela.',
          en: 'We have visited three islands and seen lots of towns and villages.',
        },
        {
          hr: 'Na plažama ima puno turista, ali u selima je mirno.',
          en: 'There are lots of tourists on the beaches, but it is quiet in the villages.',
        },
        {
          hr: 'Svaki dan kupujemo jabuke i breskve na tržnici i šetamo ulicama.',
          en: 'Every day we buy apples and peaches at the market and walk through the streets.',
        },
        {
          hr: 'Jučer sam napisala deset razglednica — pišem svim prijateljima i sestrama!',
          en: 'Yesterday I wrote ten postcards — I am writing to all my friends and sisters!',
        },
        {
          hr: 'Kupila sam i poklone za roditelje.',
          en: 'I have also bought presents for my parents.',
        },
        { hr: 'Vidimo se za sedam dana! Tvoja Maja', en: 'See you in seven days! Yours, Maja' },
      ],
      questions: [
        {
          q: 'Without looking back at the text: how long has Maja been on Hvar, and how many postcards did she write yesterday?',
          options: [
            'Seven days; ten postcards',
            'Five days; ten postcards',
            'Five days; seven postcards',
            'Ten days; five postcards',
          ],
          correct: 1,
          hint: 'There are three numbers in the text. One of them is about the future — when she comes back.',
          explanation:
            'Već pet dana — five days already. Deset razglednica — ten postcards. Seven days is when they will see each other.',
        },
        {
          q: 'Maja writes "s prijateljima" (WITH friends) and "pišem prijateljima" (TO friends). The noun has exactly the same form. Why?',
          options: [
            'Because both are the accusative plural',
            'Because prijatelj is an irregular noun',
            'Because the preposition s and the verb pisati always take the same case',
            'Because in the plural the dative, the locative and the instrumental share one ending',
          ],
          correct: 3,
          hint: 'Company is one case, the receiver is another — in the singular they would look different.',
          explanation:
            'In the plural three cases collapse into one form: -ima for masculine and neuter, -ama for feminine. S prijateljima (instrumental), prijateljima (dative), u selima (locative).',
        },
        {
          type: 'type',
          q: 'Now you. Maja wrote ten postcards. You bought five books (knjige): Kupio sam pet ____.',
          answer: 'knjiga',
          hint: 'From five up: the genitive plural, with its long -a.',
          explanation:
            'Kupio sam pet knjiga. — the genitive plural of a feminine noun in -a looks like the basic form, but it is said with a long final a.',
        },
        {
          type: 'type',
          q: 'Maja bought presents "za roditelje". You are waiting for your friends (prijatelji): Čekam ____.',
          answer: 'prijatelje',
          hint: 'A masculine plural object changes its last letter.',
          explanation: 'Čekam prijatelje. — masculine accusative plural: -i becomes -e.',
        },
        {
          type: 'transform',
          q: 'Make everything plural: several tourists, several postcards.',
          from: 'Turist kupuje razglednicu.',
          answer: 'Turisti kupuju razglednice.',
          hint: 'Three words change: the subject, the verb and the object. A feminine plural object looks just like a feminine plural subject.',
          explanation:
            'Turisti kupuju razglednice. — turist → turisti (subject), kupuje → kupuju, razglednicu → razglednice (object).',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'Which form of "student" (plural) fits each gap?',
        pairs: [
          ['To su …', 'studenti'],
          ['Vidim …', 'studente'],
          ['Na predavanju ima pet …', 'studenata'],
          ['Razgovaram sa …', 'studentima'],
        ],
        explanation:
          'Subject: studenti. Object: studente. After five and above: studenata. With s, u, na or as a receiver: studentima.',
      },
      0,
      {
        type: 'sort',
        q: 'Which gap does each plural form fit?',
        groups: ['Vidim … (object)', 'pet, puno … (genitive)', 's, u, na … (shared form)'],
        items: [
          { hr: 'gradove', group: 0 },
          { hr: 'gradova', group: 1 },
          { hr: 'gradovima', group: 2 },
          { hr: 'sestara', group: 1 },
          { hr: 'sestrama', group: 2 },
          { hr: 'filmove', group: 0 },
          { hr: 'studenata', group: 1 },
          { hr: 'morima', group: 2 },
        ],
        explanation:
          'The masculine object ends in -e. The genitive plural ends in a long -a, sometimes with a helping a before it. Dative, locative and instrumental share -ima and -ama.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "There are many islands in Croatia."',
        words: ['U', 'Hrvatskoj', 'ima', 'mnogo', 'otoka.'],
        explanation:
          'U Hrvatskoj ima mnogo otoka. — after mnogo, the genitive plural: otok → otoka.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Vidjeli', 'smo', 'pet', 'filmovi', 'u', 'kinu.'],
        wrong: 3,
        answer: 'filmova',
        hint: 'What does a number from five up do to the noun after it?',
        explanation: 'Vidjeli smo pet filmova u kinu. — from five up, the genitive plural.',
      },
      2,
      7,
      {
        type: 'tf',
        q: '„Čitam knjige.” and „Knjige su na stolu.” use the same form of the noun, although it is an object in the first and a subject in the second.',
        answer: true,
        hint: 'Think about which gender changes between subject and object in the plural — and which do not.',
        explanation:
          'True — feminine and neuter plurals look the same as subject and as object. Only masculine nouns change: studenti → studente.',
      },
      {
        type: 'transform',
        q: 'Not one letter — five. Change the number, and the noun with it.',
        from: 'Imam jedno pismo za tebe.',
        answer: 'Imam pet pisama za tebe.',
        hint: 'From five up the noun is in the genitive plural, and this noun needs a helping vowel between its last two consonants.',
        explanation:
          'Imam pet pisama za tebe. — pismo → pisama: a helping a breaks up s and m, as in sestra → sestara.',
      },
      8,
      11,
      {
        type: 'listen',
        audio: 'Idemo na izlet s prijateljima i njihovim psima.',
        q: 'Who is going on the trip with the speaker?',
        options: [
          'A friend and his dog',
          'Friends and their children',
          'Friends and their dogs',
          'Neighbors and their dogs',
        ],
        correct: 2,
        explanation:
          'S prijateljima i njihovim psima — with friends and their dogs. Both nouns are in the instrumental plural.',
      },
      {
        type: 'dictate',
        audio: 'U razredu ima dvadeset učenika.',
        answer: 'U razredu ima dvadeset učenika.',
        hint: 'Five words: "There are twenty students in the class."',
        explanation:
          'U razredu ima dvadeset učenika. — after dvadeset, the genitive plural: učenik → učenika.',
      },
    ],
  },
};
