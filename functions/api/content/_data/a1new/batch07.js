// functions/api/content/_data/a1new/batch07.js
//
// New A1 lessons, batch 07 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// Six lessons: verbs-with-dative (67), postcards-wishes (68), daily-routine (70),
// reflexive-past-future (71), school-education (72), instrumental-means (75).
//
// What each one may assume (the owner's rule: never grammar a learner has not been
// taught). The genitive arrives at 78, so none of these uses it except as a fixed
// chunk an earlier lesson taught or this lesson labels as one (Pozdrav iz Splita,
// Puno pozdrava). Ordinals arrive at 85 and are avoided. The vocative arrives at 97,
// so a postcard opens only with names and words whose vocative is the same as the
// nominative (Ana, Marko, mama, tata). The instrumental is taught at 74 (company) and
// extended at 75 (means), so the earlier lessons in this batch do not use it.

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'verbs-with-dative',
    masterOrder: 67,
    prerequisites: ['dative-intro', 'object-pronouns'],
    objectives: [
      'Help, trust and answer someone with the dative: Pomažem mami, Vjerujem ti',
      'Say you like something with sviđati se, where the thing is the subject',
      'Put mi before se and make the verb agree with the thing liked',
    ],
  },
  {
    id: 'postcards-wishes',
    masterOrder: 68,
    prerequisites: ['verbs-with-dative'],
    objectives: [
      'Wish someone well: Sretan rođendan, Sretna Nova godina, Sretan put',
      'Make sretan agree with the occasion, and say Čestitam and Sve najbolje',
      'Write a short postcard from a holiday, from Draga mama to Puno pozdrava',
    ],
  },
  {
    id: 'daily-routine',
    masterOrder: 70,
    prerequisites: ['reflexive-verbs', 'numbers-time'],
    objectives: [
      'Describe your day in order: budim se, ustajem, tuširam se, idem spavati',
      'Tell a verb with se from the same verb with an object: perem se, perem zube',
      'Keep se in second position after prvo, onda and a time',
    ],
  },
  {
    id: 'reflexive-past-future',
    masterOrder: 71,
    prerequisites: ['daily-routine', 'past-tense', 'future-tense'],
    objectives: [
      'Say what you did with a se verb: Jutros sam se probudio u sedam',
      'Say what you will do: Sutra ću se probuditi rano, Probudit ću se',
      'Order the small words: sam se, ću se, and he or she with no je: On se vratio',
    ],
  },
  {
    id: 'school-education',
    masterOrder: 72,
    prerequisites: ['u-na-motion', 'za-accusative'],
    objectives: [
      'Say where and what you study: Idem u školu, Studiram na fakultetu',
      'Tell učiti from studirati: Učim za ispit, Studiram medicinu',
      'Talk about subjects, homework and exams',
    ],
  },
  {
    id: 'instrumental-means',
    masterOrder: 75,
    prerequisites: ['instrumental-intro'],
    objectives: [
      'Say how you travel with the bare instrumental: Idem vlakom, Putujem autobusom',
      'Say what you use: Pišem olovkom, Plaćam karticom',
      'Use -em after a soft consonant (tramvajem, nožem) and leave out s for a tool',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Verbs that take the dative
  // ─────────────────────────────────────────────────────────
  {
    id: 'verbs-with-dative',
    title: 'Verbs That Take the Dative',
    subtitle: 'pomagati, vjerovati, odgovarati and sviđati se',
    icon: '🤝',
    level: 'A1',
    duration: '~7 min',
    color: '#0d9488',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'The Person on the Receiving End',
        body: 'You know the dative — the "to whom" form: Dajem knjigu mami. Dajem ti knjigu. A small group of everyday verbs ALWAYS puts the person in the dative, even where English uses a plain object. Help, believe, answer — and the verb Croatians use most for liking something.',
        icon: '🤝',
      },
      {
        type: 'rule',
        title: 'Help, Trust, Answer: the Person Gets the Dative',
        body: 'In English "I help my mum" looks like "I see my mum". In Croatian the person you help RECEIVES the help, so the person is in the dative, not the accusative. pomagati (to help): Pomažem mami. vjerovati (to believe, to trust): Vjerujem ti. odgovarati (to answer, to reply): Odgovaram profesoru. Ask yourself "to whom?" and you will pick the right form: help given TO mum, an answer given TO the teacher.',
        highlight: 'Pomažem mami.',
      },
      {
        type: 'table',
        title: 'The Four Verbs',
        headers: ['Verb', 'I …', 'Example'],
        rows: [
          ['pomagati — to help', 'pomažem', 'Pomažem bratu.'],
          ['vjerovati — to believe, trust', 'vjerujem', 'Vjerujem prijatelju.'],
          ['odgovarati — to answer', 'odgovaram', 'Odgovaram profesorici.'],
          ['sviđati se — to be liked by', 'sviđa mi se', 'Sviđa mi se Zagreb.'],
        ],
      },
      {
        type: 'rule',
        title: 'Pomagati: the g Becomes ž',
        body: 'Pomagati changes its stem in the present: the g becomes ž, and the endings are the -em ones. pomažem, pomažeš, pomaže, pomažemo, pomažete, pomažu. Vjerovati is an -ovati verb, like kupovati: vjerujem, vjeruješ, vjeruje, vjerujemo, vjerujete, vjeruju. Odgovarati is regular: odgovaram, odgovaraš, odgovara… For a single act of helping there is also pomoći: Možete li mi pomoći? (Can you help me?)',
        highlight: 'pomažem, pomažeš, pomaže',
      },
      {
        type: 'rule',
        title: 'Sviđati Se: the Thing Does the Liking Work',
        body: 'The everyday way to say you like something turns the sentence around. Sviđa mi se Zagreb means, word for word, "Zagreb is pleasing to me". The THING is the subject; YOU are in the dative: mi, ti, mu, joj, nam, vam, im. The little word se belongs to the verb, the same se you know from Zovem se. Because the thing is the subject, the verb agrees with the thing: Sviđa mi se film (one film), Sviđaju mi se filmovi (several films).',
        highlight: 'Sviđa mi se Zagreb.',
      },
      {
        type: 'rule',
        title: 'Two Small Words: mi Comes Before se',
        body: 'mi and se are both small words that go to second position in the sentence. When both are there, the dative comes first and se right after it: sviđa mi se, never sviđa se mi. The order does not change in a question or with ne: Sviđa li ti se Zagreb? Ne sviđa mi se. Kako ti se sviđa Split? A full noun in the dative can open the sentence instead: Ivanu se ne sviđa kava.',
        highlight: 'Sviđa li ti se Zagreb?',
      },
      {
        type: 'example',
        title: 'Helping, Trusting, Answering',
        items: [
          {
            hr: 'Pomažem mami u kuhinji.',
            en: 'I help my mum in the kitchen.',
            note: 'mama → mami',
          },
          {
            hr: 'Ana pomaže bratu svaki dan.',
            en: 'Ana helps her brother every day.',
            note: 'brat → bratu',
          },
          { hr: 'Vjerujem ti.', en: 'I believe you.', note: 'ti — to you' },
          { hr: 'Ne vjerujem Marku.', en: 'I do not trust Marko.', note: 'Marko → Marku' },
          {
            hr: 'Učenici odgovaraju profesorici.',
            en: 'The pupils answer the teacher.',
            note: 'profesorica → profesorici',
          },
          {
            hr: 'Zašto mi ne odgovaraš?',
            en: 'Why are you not answering me?',
            note: 'mi in second position',
          },
          { hr: 'Možete li mi pomoći?', en: 'Can you help me?', note: 'pomoći — one act of help' },
          {
            hr: 'Odgovara li vam u pet?',
            en: 'Does five o’clock suit you?',
            note: 'odgovarati also means to suit',
          },
        ],
      },
      {
        type: 'example',
        title: 'Liking With Sviđati Se',
        items: [
          { hr: 'Sviđa mi se Zagreb.', en: 'I like Zagreb.', note: 'one thing → sviđa' },
          {
            hr: 'Sviđaju mi se ove cipele.',
            en: 'I like these shoes.',
            note: 'several things → sviđaju',
          },
          {
            hr: 'Sviđa li ti se moj stan?',
            en: 'Do you like my flat?',
            note: 'li, then ti, then se',
          },
          { hr: 'Ivanu se ne sviđa kava.', en: 'Ivan does not like coffee.', note: 'Ivan → Ivanu' },
          {
            hr: 'Mami se sviđaju cvijeće i knjige.',
            en: 'Mum likes flowers and books.',
            note: 'two things → sviđaju',
          },
          { hr: 'Kako vam se sviđa Split?', en: 'How do you like Split?', note: 'vam before se' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence is correct? (I like Zagreb.)',
        options: [
          'Sviđa se mi Zagreb.',
          'Sviđa mi se Zagreb.',
          'Sviđam se Zagreb.',
          'Mi sviđa se Zagreb.',
        ],
        correct: 1,
        explanation:
          'The dative mi comes first and se right after it, both in second position: Sviđa mi se Zagreb. The verb agrees with Zagreb, the thing liked.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Pomažem ___." (my brother)',
        options: ['brata', 'bratu', 'brat', 'bratovi'],
        correct: 1,
        explanation:
          'The person you help receives the help, so pomagati takes the dative: Pomažem bratu. Brata is the accusative — the form after vidim, not after pomažem.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the accusative after pomagati because English "help him" looks like a plain object: "Pomažem ga" — the person helped is in the dative: Pomažem mu. Second, se before the dative: "Sviđa se mi" — the dative goes first: Sviđa mi se. Third, the singular for everything: "Sviđa mi se ove cipele" — several shoes are the subject, so the verb is plural: Sviđaju mi se ove cipele.',
        highlight: 'Pomažem mu.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Vjerujem ___." (my friend Marko)',
            options: ['Marka', 'Marko', 'Marku', 'Markom'],
            correct: 2,
            explanation:
              'Vjerovati takes the dative for the person you trust: Vjerujem Marku. Marka is the accusative.',
          },
          {
            q: 'Which sentence is correct? (Do you like my flat?)',
            options: [
              'Sviđa li ti se moj stan?',
              'Sviđa li se ti moj stan?',
              'Sviđaš li se moj stan?',
              'Li ti se sviđa moj stan?',
            ],
            correct: 0,
            explanation:
              'li comes first among the small words, then the dative ti, then se: Sviđa li ti se moj stan? Li can never open a sentence.',
          },
          {
            q: 'Complete: "Sviđaju mi se ___."',
            options: ['ova kuća', 'ovaj film', 'ovo more', 'ove cipele'],
            correct: 3,
            explanation:
              'Sviđaju is plural, so the thing liked must be plural: ove cipele. The other three are singular and would need sviđa.',
          },
          {
            q: 'Complete: "Djeca ___ mami u vrtu." (help)',
            options: ['pomažu', 'pomagaju', 'pomaže', 'pomažemo'],
            correct: 0,
            explanation:
              'Pomagati turns g into ž in the present, and djeca takes the plural: pomažu.',
          },
          {
            q: 'How do you say "She is not answering me"?',
            options: [
              'Ona ne mi odgovara.',
              'Ona mi ne odgovara.',
              'Ona ne odgovara mene.',
              'Ona ne odgovara ja.',
            ],
            correct: 1,
            explanation:
              'Odgovarati takes the dative for the person answered: mi. Mene is the accusative, and the small word mi goes before ne, not after it.',
          },
          {
            q: 'What does "Ivanu se ne sviđa kava." mean?',
            options: [
              'Ivan does not like coffee.',
              'Coffee does not like Ivan.',
              'Ivan does not drink coffee.',
              'I do not give Ivan coffee.',
            ],
            correct: 0,
            explanation:
              'Ivanu is the dative: the coffee is not pleasing TO Ivan. Kava is the subject, but in English we say Ivan does not like coffee.',
          },
          {
            q: 'Complete: "Možete li mi ___?" (help me — once, now)',
            options: ['pomažem', 'pomaže', 'pomoći', 'pomagao'],
            correct: 2,
            explanation:
              'After možete li comes an infinitive, and for one act of help Croatian uses pomoći: Možete li mi pomoći?',
          },
          {
            q: 'Which word fills the gap? "Ne sviđa ___ se ovaj grad." (to her)',
            options: ['nju', 'je', 'ona', 'joj'],
            correct: 3,
            explanation:
              'The person who likes or dislikes is in the dative: joj. Je and nju are accusative forms, ona is the subject form.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Verbs With the Dative — Key Takeaways',
        points: [
          'pomagati, vjerovati and odgovarati put the PERSON in the dative',
          'pomagati: pomažem, pomažeš, pomaže… — the g becomes ž',
          'Sviđa mi se Zagreb = Zagreb is pleasing to me',
          'The verb agrees with the thing liked: sviđa (one), sviđaju (several)',
          'Small words in order: li, then the dative, then se — Sviđa li ti se?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Postcards and good wishes
  // ─────────────────────────────────────────────────────────
  {
    id: 'postcards-wishes',
    title: 'Postcards and Good Wishes',
    subtitle: 'Sretan rođendan, Čestitam, and a card from the coast',
    icon: '💌',
    level: 'A1',
    duration: '~6 min',
    color: '#e11d48',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Short Texts, Big Occasions',
        body: 'A birthday message, a Christmas card, a postcard from the sea — Croatians still send all three, and they are built from a small set of fixed phrases plus Croatian you already know. Learn the phrases, make one adjective agree, and you can write your first card today.',
        icon: '💌',
      },
      {
        type: 'rule',
        title: 'Sretan, Sretna, Sretno',
        body: '"Sretan" means happy, and it is an adjective, so it agrees with the occasion like any adjective agrees with its noun. Rođendan (birthday) is masculine: Sretan rođendan! Godina (year) is feminine: Sretna Nova godina! Božić (Christmas), Uskrs (Easter), imendan (name day) and put (journey) are masculine: Sretan Božić! Sretan Uskrs! Sretan imendan! Sretan put! On its own, the neuter form Sretno! means "Good luck!".',
        highlight: 'Sretna Nova godina!',
      },
      {
        type: 'table',
        title: 'The Wishes',
        headers: ['Occasion', 'Gender', 'The wish'],
        rows: [
          ['rođendan — birthday', 'masculine', 'Sretan rođendan!'],
          ['imendan — name day', 'masculine', 'Sretan imendan!'],
          ['Božić — Christmas', 'masculine', 'Sretan Božić!'],
          ['Uskrs — Easter', 'masculine', 'Sretan Uskrs!'],
          ['Nova godina — New Year', 'feminine', 'Sretna Nova godina!'],
          ['put — a journey', 'masculine', 'Sretan put!'],
          ['an exam, a match, a new job', '—', 'Sretno!'],
        ],
      },
      {
        type: 'rule',
        title: 'Čestitam and Sve Najbolje',
        body: '"Čestitam!" means "Congratulations!" — literally "I congratulate". Use it for a birthday, a passed exam, a wedding or a new baby: Čestitam ti rođendan! Čestitam na ispitu! "Sve najbolje!" means "All the best!" — learn it as one block; it goes on almost every birthday card: Sretan rođendan i sve najbolje!',
        highlight: 'Sve najbolje!',
      },
      {
        type: 'rule',
        title: 'Želim ti… — Wishing TO Someone',
        body: 'To wish someone something, use želim: the person is in the dative (ti, vam, mami) and the wish is the object, in the accusative. For a masculine occasion the accusative looks the same as the dictionary form: Želim ti sretan rođendan. For the feminine Nova godina it changes: Želim vam sretnu Novu godinu. A shorter way puts the dative right inside the wish: Sretan ti rođendan!',
        highlight: 'Želim ti sretan rođendan.',
      },
      {
        type: 'rule',
        title: 'Opening and Closing a Postcard',
        body: 'Open with draga for a woman and dragi for a man: Draga mama, Draga Ana, Dragi tata, Dragi Marko. Tata ends in -a but is a man, so it is dragi tata. Close with a fixed phrase: Puno pozdrava! (Lots of love — literally "many greetings") or Pozdrav iz Splita! (Greetings from Split). Learn both as blocks; why Split becomes Splita comes in a later lesson. Sign with tvoj (from a man) or tvoja (from a woman): Tvoja Ana.',
        highlight: 'Dragi tata,',
      },
      {
        type: 'example',
        title: 'A Postcard From the Coast',
        items: [
          { hr: 'Draga mama,', en: 'Dear Mum,', note: 'draga — she is a woman' },
          { hr: 'Pozdrav iz Splita!', en: 'Greetings from Split!', note: 'a fixed phrase' },
          { hr: 'Ovdje je prekrasno i jako toplo.', en: 'It is beautiful and very warm here.' },
          {
            hr: 'Svaki dan plivam u moru.',
            en: 'I swim in the sea every day.',
            note: 'u moru — where',
          },
          { hr: 'Jučer smo bili na Hvaru.', en: 'Yesterday we were on Hvar.', note: 'past tense' },
          {
            hr: 'Sutra idemo u Dubrovnik.',
            en: 'Tomorrow we are going to Dubrovnik.',
            note: 'u + where to',
          },
          {
            hr: 'Hrana je odlična, a more je čisto.',
            en: 'The food is excellent and the sea is clean.',
          },
          {
            hr: 'Puno pozdrava, tvoja Ana',
            en: 'Lots of love, your Ana',
            note: 'tvoja — from a woman',
          },
        ],
      },
      {
        type: 'example',
        title: 'Wishes for Every Occasion',
        items: [
          { hr: 'Sretan rođendan i sve najbolje!', en: 'Happy birthday and all the best!' },
          {
            hr: 'Želim ti sretan rođendan.',
            en: 'I wish you a happy birthday.',
            note: 'ti — to you',
          },
          { hr: 'Sretan Božić i sretna Nova godina!', en: 'Merry Christmas and a Happy New Year!' },
          {
            hr: 'Želim vam sretnu Novu godinu.',
            en: 'I wish you a Happy New Year.',
            note: 'feminine object → sretnu',
          },
          { hr: 'Čestitam na ispitu!', en: 'Congratulations on your exam!' },
          { hr: 'Sretno sutra!', en: 'Good luck tomorrow!' },
          { hr: 'Sretan put i vidimo se uskoro!', en: 'Have a good trip and see you soon!' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which wish is correct? (Happy New Year!)',
        options: [
          'Sretan Nova godina!',
          'Sretna Nova godina!',
          'Sretno Nova godina!',
          'Sretne Nova godina!',
        ],
        correct: 1,
        explanation:
          'Godina is feminine, so the adjective takes the feminine form: Sretna Nova godina!',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you begin a card to your dad?',
        options: ['Dragi tata,', 'Draga tata,', 'Drago tata,', 'Dragu tata,'],
        correct: 0,
        explanation:
          'Tata ends in -a, but your dad is a man, so the adjective is masculine: Dragi tata.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, one form of sretan for every occasion: "Sretan Nova godina" — godina is feminine: Sretna Nova godina. Second, draga for a man because the word ends in -a: "Draga tata" — your dad is a man: Dragi tata. Third, sretno in front of an occasion: "Sretno rođendan" — sretno on its own means good luck; for a birthday it is Sretan rođendan.',
        highlight: 'Dragi tata',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete the Christmas card: "___ Božić!"',
            options: ['Sretna', 'Sretno', 'Sretan', 'Sretni'],
            correct: 2,
            explanation: 'Božić is masculine, so the wish is Sretan Božić!',
          },
          {
            q: 'Your friend has an exam tomorrow. What do you say?',
            options: ['Sretan put!', 'Sretno!', 'Sretan rođendan!', 'Puno pozdrava!'],
            correct: 1,
            explanation: 'Sretno! on its own means good luck — the wish before an exam.',
          },
          {
            q: 'How do you open a postcard to your friend Marko?',
            options: ['Draga Marko,', 'Drago Marko,', 'Dragoj Marko,', 'Dragi Marko,'],
            correct: 3,
            explanation: 'Marko is a man, so the adjective is masculine: Dragi Marko.',
          },
          {
            q: 'Complete: "Želim ___ sretan rođendan." (to you, a friend)',
            options: ['ti', 'te', 'tebe', 'tvoj'],
            correct: 0,
            explanation:
              'The person you wish it to is in the dative: ti. Te and tebe are accusative forms.',
          },
          {
            q: 'What does "Puno pozdrava" mean at the end of a postcard?',
            options: [
              'See you tomorrow',
              'Happy holidays',
              'Lots of love — many greetings',
              'Good luck',
            ],
            correct: 2,
            explanation:
              'Puno pozdrava is the usual warm closing of a card or letter — literally "many greetings".',
          },
          {
            q: 'Complete: "Želim vam ___ Novu godinu."',
            options: ['sretna', 'sretan', 'sretno', 'sretnu'],
            correct: 3,
            explanation:
              'Nova godina is the object of želim, so it is in the accusative, and the feminine adjective changes too: sretnu Novu godinu.',
          },
          {
            q: 'Your cousin has just passed her driving test. What do you say?',
            options: ['Čestitam!', 'Sretan put!', 'Sretan Uskrs!', 'Draga!'],
            correct: 0,
            explanation: 'Čestitam! — congratulations — is for something achieved.',
          },
          {
            q: 'Ana is signing her postcard. Which closing fits?',
            options: ['Tvoj Ana', 'Tvoja Ana', 'Tvoje Ana', 'Tvoju Ana'],
            correct: 1,
            explanation: 'Ana is a woman, so the possessive is feminine: Tvoja Ana.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Postcards and Wishes — Key Takeaways',
        points: [
          'Sretan agrees with the occasion: Sretan rođendan, Sretna Nova godina',
          'Sretno! on its own = Good luck!',
          'Čestitam! = Congratulations!  Sve najbolje! = All the best!',
          'Želim ti sretan rođendan — the person in the dative',
          'Open with Draga / Dragi, close with Puno pozdrava and Tvoja / Tvoj',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Daily routine
  // ─────────────────────────────────────────────────────────
  {
    id: 'daily-routine',
    title: 'My Daily Routine',
    subtitle: 'budim se, ustajem, tuširam se — your day in order',
    icon: '⏰',
    level: 'A1',
    duration: '~7 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'From the Alarm to Bed',
        body: 'Describing your day is one of the first real conversations in any language. In Croatian it runs on the verbs with se you met in the last lesson — budim se, tuširam se, oblačim se — plus a few that do NOT take se. Here you put them in order, add the time, and learn when se belongs and when it does not.',
        icon: '⏰',
      },
      {
        type: 'rule',
        title: 'The Morning Verbs',
        body: 'buditi se — to wake up: Budim se u sedam. ustajati — to get up: Ustajem u sedam i deset (no se!). umivati se — to wash your face: Umivam se. tuširati se — to shower: Tuširam se. prati zube — to brush your teeth: Perem zube. oblačiti se — to get dressed: Oblačim se. doručkovati — to have breakfast: Doručkujem.',
        highlight: 'Ustajem u sedam i deset.',
      },
      {
        type: 'table',
        title: 'A Day in Verbs',
        headers: ['Verb', 'I …', 'Meaning'],
        rows: [
          ['buditi se', 'budim se', 'I wake up'],
          ['ustajati', 'ustajem', 'I get up'],
          ['tuširati se', 'tuširam se', 'I shower'],
          ['prati zube', 'perem zube', 'I brush my teeth'],
          ['oblačiti se', 'oblačim se', 'I get dressed'],
          ['doručkovati', 'doručkujem', 'I have breakfast'],
          ['ići na posao', 'idem na posao', 'I go to work'],
          ['vraćati se', 'vraćam se', 'I come back'],
          ['večerati', 'večeram', 'I have dinner'],
          ['odmarati se', 'odmaram se', 'I rest'],
          ['ići spavati', 'idem spavati', 'I go to bed'],
        ],
      },
      {
        type: 'rule',
        title: 'Se or an Object — Not Both',
        body: 'Se means the action lands on you. When it lands on something else, that thing is the object and se goes away. Perem se. (I wash — myself.) Perem zube. (I brush my teeth.) Perem kosu. (I wash my hair.) Oblačim se. (I get dressed.) Oblačim dijete. (I dress the child.) Budim se u sedam. (I wake up.) Budim sestru u sedam. (I wake my sister.) Ask: does the action land on me, or on something I name?',
        highlight: 'Perem zube.',
      },
      {
        type: 'rule',
        title: 'Putting the Day in Order',
        body: 'Link the steps with prvo (first), onda (then), zatim (after that), kasnije (later), and the time words ujutro, popodne, navečer, u sedam, u pola osam. Whatever opens the sentence, se still takes second position: Onda se tuširam. Zatim se oblačim. U sedam se budim. Ustajati has no se, so nothing moves: Onda ustajem. (Croatian also has dizati se — dižem se — which does carry se: learn each verb with its se or without it.)',
        highlight: 'Onda se tuširam.',
      },
      {
        type: 'rule',
        title: 'Posao: na posao, na poslu',
        body: 'Posao (work, a job) loses its a and turns its o back into l as soon as an ending is added: the stem is posl-. Going to work takes the accusative, which looks like the dictionary form: Idem na posao. Being at work takes the locative: Ja sam na poslu. Mama radi na poslu do kasno. Imam novi posao. (I have a new job.) The same thing happens to misao (thought) and to a few other words in -ao: the l comes back when the word grows.',
        highlight: 'Ja sam na poslu.',
      },
      {
        type: 'example',
        title: 'My Morning',
        items: [
          { hr: 'Budim se u sedam.', en: 'I wake up at seven.', note: 'buditi se' },
          { hr: 'Ustajem u sedam i deset.', en: 'I get up at ten past seven.', note: 'no se' },
          {
            hr: 'Prvo se umivam, onda perem zube.',
            en: 'First I wash my face, then I brush my teeth.',
          },
          { hr: 'Zatim se tuširam i oblačim se.', en: 'After that I shower and get dressed.' },
          {
            hr: 'Doručkujem u pola osam.',
            en: 'I have breakfast at half past seven.',
            note: 'doručkovati',
          },
          { hr: 'Idem na posao u osam.', en: 'I go to work at eight.' },
          { hr: 'Cijeli dan sam na poslu.', en: 'I am at work all day.', note: 'posao → na poslu' },
        ],
      },
      {
        type: 'example',
        title: 'The Rest of the Day',
        items: [
          {
            hr: 'Popodne se vraćam kući.',
            en: 'In the afternoon I come back home.',
            note: 'se after popodne',
          },
          {
            hr: 'Navečer večeram i gledam televiziju.',
            en: 'In the evening I have dinner and watch TV.',
          },
          { hr: 'Kasnije se odmaram.', en: 'Later I rest.' },
          { hr: 'Idem spavati u jedanaest.', en: 'I go to bed at eleven.' },
          { hr: 'Moja sestra se tušira navečer.', en: 'My sister showers in the evening.' },
          { hr: 'Kad ustaješ u subotu?', en: 'When do you get up on Saturday?' },
          {
            hr: 'Ujutro budim sina i oblačim ga.',
            en: 'In the morning I wake my son and dress him.',
            note: 'an object, so no se',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence is correct? (Then I shower.)',
        options: ['Onda tuširam se.', 'Onda se tuširam.', 'Se onda tuširam.', 'Onda tuširam sebe.'],
        correct: 1,
        explanation:
          'Onda opens the sentence, so se comes second, right after it: Onda se tuširam.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Ujutro ___ zube." (I brush)',
        options: ['se perem', 'perem se', 'perem', 'me perem'],
        correct: 2,
        explanation:
          'The action lands on your teeth — they are the object — so there is no se: Ujutro perem zube.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, se together with an object: "Perem se zube" — the teeth are what you wash, so se goes: Perem zube. Second, se on ustajati because English "get up" feels like the other morning verbs: "Ustajem se" — ustajati has no se: Ustajem u sedam. Third, se glued to the verb after a time word: "Onda tuširam se" — se is second: Onda se tuširam.',
        highlight: 'Perem zube.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "U sedam ___." (I wake up)',
            options: ['se budim', 'budim se', 'budim', 'me budim'],
            correct: 0,
            explanation: 'U sedam opens the sentence, so se comes second: U sedam se budim.',
          },
          {
            q: 'Which sentence is correct? (I get up at six.)',
            options: [
              'Ustajem se u šest.',
              'Se ustajem u šest.',
              'Ustajem u šest.',
              'U šest ustajem se.',
            ],
            correct: 2,
            explanation: 'Ustajati has no se: Ustajem u šest.',
          },
          {
            q: 'Complete: "Majka ___ dijete." (dresses)',
            options: ['se oblači', 'oblači se', 'oblačim', 'oblači'],
            correct: 3,
            explanation:
              'The child is the object, so there is no se, and majka takes the third person: Majka oblači dijete.',
          },
          {
            q: 'What does "Navečer se odmaram." mean?',
            options: [
              'In the evening I rest.',
              'In the evening I get dressed.',
              'In the morning I rest.',
              'In the evening I wake up.',
            ],
            correct: 0,
            explanation: 'navečer — in the evening; odmarati se — to rest.',
          },
          {
            q: 'Complete: "Ja ___ u pola osam." (have breakfast)',
            options: ['doručkovam', 'doručkujem', 'doručkam', 'doručkuje'],
            correct: 1,
            explanation: 'Doručkovati is an -ovati verb: the -ova- becomes -uj-: doručkujem.',
          },
          {
            q: 'Which sentence is correct? (After that I get dressed.)',
            options: [
              'Zatim oblačim se.',
              'Zatim se oblačim.',
              'Se zatim oblačim.',
              'Zatim oblačim sebe.',
            ],
            correct: 1,
            explanation: 'Zatim opens the sentence, so se follows it: Zatim se oblačim.',
          },
          {
            q: 'Complete: "Idem ___ u jedanaest." (to bed)',
            options: ['spavam', 'spava', 'spavati', 'spavanje'],
            correct: 2,
            explanation: 'ići spavati — to go to bed: idem plus the infinitive spavati.',
          },
          {
            q: 'Which one does NOT carry se?',
            options: ['tuširati se', 'buditi se', 'odmarati se', 'ustajati'],
            correct: 3,
            explanation: 'Ustajati — to get up — has no se: Ustajem u sedam.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Daily Routine — Key Takeaways',
        points: [
          'budim se, tuširam se, oblačim se, vraćam se, odmaram se — with se',
          'ustajem, perem zube, doručkujem, večeram, idem spavati — no se',
          'Se OR an object: perem se, but perem zube',
          'Order the day with prvo, onda, zatim, kasnije',
          'Se stays second: Onda se tuširam. U sedam se budim.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Se in the past and the future
  // ─────────────────────────────────────────────────────────
  {
    id: 'reflexive-past-future',
    title: 'Se in the Past and the Future',
    subtitle: 'Probudio sam se, Probudit ću se — and where the small words go',
    icon: '🔄',
    level: 'A1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Yesterday and Tomorrow',
        body: 'You can say Budim se u sedam. Now say what happened this morning — Jutros sam se probudio u sedam — and what will happen tomorrow — Sutra ću se probuditi u šest. The past and the future each bring a small word of their own (sam, ću), and now two small words compete for second place. Croatian has a fixed order for them, and it is the whole lesson.',
        icon: '🔄',
      },
      {
        type: 'rule',
        title: 'Past: sam se, si se, smo se…',
        body: 'You build the past with a short form of biti plus the -o / -la participle. With a se verb, the short form of biti comes FIRST and se right after it: Probudio sam se. Jutros sam se probudio. Ja sam se tuširala. The participle agrees with whoever is speaking: probudio for a man, probudila for a woman, probudili for a group.',
        highlight: 'Jutros sam se probudio.',
      },
      {
        type: 'rule',
        title: 'He and She: je Drops Out',
        body: 'In the third person singular, standard Croatian leaves out je when se is there: On se probudio. Ana se tuširala. Marko se vratio kući. You will hear "se je" in some regions, but the standard form, the one in books and news, has just se. In the plural nothing drops: Oni su se probudili.',
        highlight: 'Marko se vratio kući.',
      },
      {
        type: 'table',
        title: 'The Whole Picture',
        headers: ['Person', 'Past', 'Future'],
        rows: [
          ['ja', 'probudio / probudila sam se', 'probudit ću se'],
          ['ti', 'probudio / probudila si se', 'probudit ćeš se'],
          ['on / ona', 'probudio se / probudila se', 'probudit će se'],
          ['mi', 'probudili smo se', 'probudit ćemo se'],
          ['vi', 'probudili ste se', 'probudit ćete se'],
          ['oni / one', 'probudili su se / probudile su se', 'probudit će se'],
        ],
      },
      {
        type: 'rule',
        title: 'Future: ću se',
        body: 'The future works the same way: the short form of htjeti (ću, ćeš, će…) comes first and se right after it. Sutra ću se probuditi u šest. Ona će se vratiti u petak. When the verb opens the sentence, it drops its final -i in writing, as you learned for the future: Probudit ću se. Tuširat ću se navečer. Verbs ending in -ći keep their ending: Obući ću se.',
        highlight: 'Sutra ću se probuditi u šest.',
      },
      {
        type: 'rule',
        title: 'With ne, and in Questions',
        body: 'Nisam and neću are full words, so se simply follows them: Nisam se dobro osjećao. Neću se tuširati ujutro. In a question li comes first, then the short form of biti, then se: Jesi li se odmorila? Kad ćeš se vratiti? The rule never changes: the short form of biti or htjeti, then se.',
        highlight: 'Nisam se dobro osjećao.',
      },
      {
        type: 'example',
        title: 'What Happened',
        items: [
          {
            hr: 'Jutros sam se probudio u sedam.',
            en: 'This morning I woke up at seven.',
            note: 'a man speaking',
          },
          {
            hr: 'Jučer sam se tuširala navečer.',
            en: 'Yesterday I showered in the evening.',
            note: 'a woman speaking',
          },
          { hr: 'Brzo sam se obukao.', en: 'I got dressed quickly.', note: 'obući → obukao' },
          { hr: 'Brat se vratio kući kasno.', en: 'My brother came home late.', note: 'no je' },
          { hr: 'Ana se dobro odmorila.', en: 'Ana had a good rest.', note: 'odmoriti se' },
          { hr: 'Jako smo se umorili.', en: 'We got very tired.', note: 'umoriti se' },
          { hr: 'Nisam se dobro osjećao.', en: 'I did not feel well.' },
        ],
      },
      {
        type: 'example',
        title: 'What Will Happen',
        items: [
          { hr: 'Sutra ću se probuditi rano.', en: 'Tomorrow I will wake up early.' },
          {
            hr: 'Probudit ću se u šest.',
            en: 'I will wake up at six.',
            note: 'verb first, -i dropped',
          },
          { hr: 'Vratit ćemo se u subotu.', en: 'We will come back on Saturday.' },
          {
            hr: 'Neću se tuširati ujutro, nego navečer.',
            en: 'I will not shower in the morning, but in the evening.',
          },
          { hr: 'Kad ćeš se vratiti?', en: 'When will you come back?' },
          { hr: 'Jesi li se odmorila?', en: 'Did you get some rest?', note: 'to a woman' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Jutros ___ probudila u šest." (I woke up — a woman speaking)',
        options: ['se sam', 'sam se', 'sam si', 'smo se'],
        correct: 1,
        explanation:
          'The short form of biti comes first and se right after it: Jutros sam se probudila.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Sutra ___ probuditi u šest." (I will)',
        options: ['se ću', 'ću se', 'ću', 'sam se'],
        correct: 1,
        explanation:
          'Ću comes first and se after it: Sutra ću se probuditi. Without se, probuditi would mean waking somebody else.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, se before the short form of biti: "Jutros se sam probudio" — biti comes first: Jutros sam se probudio. Second, se before ću: "Sutra se ću probuditi" — ću comes first: Sutra ću se probuditi. Third, dropping se in the past because English has no word there: "Jutros sam probudio u sedam" — that means you woke someone up; to wake up yourself it is Jutros sam se probudio.',
        highlight: 'Jutros sam se probudio.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which sentence is correct? (Yesterday I came back late — a man speaking.)',
            options: [
              'Jučer se sam vratio kasno.',
              'Jučer sam vratio se kasno.',
              'Jučer sam se vratio kasno.',
              'Se jučer sam vratio kasno.',
            ],
            correct: 2,
            explanation: 'sam first, se right after it: Jučer sam se vratio kasno.',
          },
          {
            q: 'Complete: "Ana ___ tuširala navečer."',
            options: ['se', 'sam se', 'su se', 'si se'],
            correct: 0,
            explanation:
              'In the third person singular standard Croatian drops je next to se: Ana se tuširala.',
          },
          {
            q: 'Complete: "Mi ___ vratiti u nedjelju." (we will)',
            options: ['se ćemo', 'smo se', 'ćemo se', 'će se'],
            correct: 2,
            explanation: 'Ćemo for mi, and se after it: Mi ćemo se vratiti u nedjelju.',
          },
          {
            q: 'Which sentence is correct? (I will shower in the evening.)',
            options: [
              'Tuširati ću se navečer.',
              'Tuširat se ću navečer.',
              'Tuširat ću navečer se.',
              'Tuširat ću se navečer.',
            ],
            correct: 3,
            explanation:
              'With the verb first, it drops its -i in writing, then ću, then se: Tuširat ću se navečer.',
          },
          {
            q: 'Complete: "Oni ___ probudili rano."',
            options: ['se su', 'su se', 'se', 'smo se'],
            correct: 1,
            explanation:
              'In the plural su stays, and it comes before se: Oni su se probudili rano.',
          },
          {
            q: 'What does "Nisam se dobro osjećala." mean?',
            options: [
              'I did not feel well.',
              'I will not feel well.',
              'She did not feel well.',
              'I do not feel well.',
            ],
            correct: 0,
            explanation: 'Nisam + the past participle: I did not feel well (a woman speaking).',
          },
          {
            q: 'Complete: "Kad ćeš se ___?" (come back)',
            options: ['vratio', 'vratiti', 'vraćaš', 'vratit'],
            correct: 1,
            explanation:
              'When ćeš comes before the verb, the verb keeps its full infinitive: vratiti.',
          },
          {
            q: 'Which sentence is correct? (Marko woke up at eight.)',
            options: [
              'Marko je probudio u osam.',
              'Marko sam se probudio u osam.',
              'Marko su se probudili u osam.',
              'Marko se probudio u osam.',
            ],
            correct: 3,
            explanation:
              'Probuditi se needs se, and in the third person singular there is no je beside it: Marko se probudio u osam.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Se in the Past and Future — Key Takeaways',
        points: [
          'Past: sam se, si se, smo se, ste se, su se — biti first, then se',
          'He and she: no je — On se probudio. Ana se tuširala.',
          'Future: ću se, ćeš se, će se — Sutra ću se probuditi',
          'Verb first: Probudit ću se, Tuširat ću se',
          'Nisam se…, Neću se…, Jesi li se…?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // School and studying
  // ─────────────────────────────────────────────────────────
  {
    id: 'school-education',
    title: 'School and Studying',
    subtitle: 'učiti or studirati, u školi or na fakultetu',
    icon: '🎒',
    level: 'A1',
    duration: '~6 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Where and What You Study',
        body: 'Am I a pupil or a student? Do I learn or do I study? Am I IN the faculty or ON it? English and Croatian draw these lines in different places. This lesson gives you the words for school and university and the two or three choices that tell a Croatian you know what you are saying.',
        icon: '🎒',
      },
      {
        type: 'rule',
        title: 'Učiti or Studirati',
        body: 'Učiti means to learn or to study anything, anywhere: Učim hrvatski. Učim za ispit. Djeca uče u školi. Studirati means to study a subject at university, as your degree: Studiram medicinu. Moj brat studira pravo. In English both are "study"; in Croatian, studying FOR an exam is always učiti, even for a university student.',
        highlight: 'Učim za ispit.',
      },
      {
        type: 'table',
        title: 'People and Places',
        headers: ['Person', 'Meaning', 'Where'],
        rows: [
          ['učenik / učenica', 'pupil (school)', 'u školi'],
          ['student / studentica', 'university student', 'na fakultetu'],
          ['učitelj / učiteljica', 'primary-school teacher', 'u školi'],
          [
            'profesor / profesorica',
            'secondary-school teacher, professor',
            'u školi, na fakultetu',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'U Školi, Na Fakultetu',
        body: 'Škola (school) takes u: Idem u školu (where to). Ja sam u školi (where). Fakultet (faculty, the part of a university where you study) takes na, like posao: Idem na fakultet. Studiram na fakultetu. The same rule you already know: where something happens takes the locative, where you are going takes the accusative.',
        highlight: 'Studiram na fakultetu.',
      },
      {
        type: 'rule',
        title: 'Subjects, Homework and Exams',
        body: 'predmet — a school subject: matematika, hrvatski, engleski, povijest, biologija, kemija. Koji ti je omiljeni predmet? (What is your favourite subject?) Moj omiljeni predmet je povijest. domaća zadaća — homework: Pišem domaću zadaću. ispit — an exam: Imam ispit u petak. Položio sam ispit! (I passed the exam!) razred — a class, a year group: Moj razred ima izlet.',
        highlight: 'Imam ispit u petak.',
      },
      {
        type: 'rule',
        title: 'From School to a First Job',
        body: "Croatian children go to osnovna škola (primary school, eight years) and then to srednja škola (secondary school, usually four years). A gimnazija prepares you for university; a strukovna škola teaches a trade. Secondary school ends with the matura, the state school-leaving exam, and the maturalna zabava, the leavers' ball. Then you go na fakultet, or you look for a job: you write a životopis (a CV), you apply for an advertised post — prijavljuješ se na natječaj — and you go na razgovor za posao (a job interview), where they ask about your iskustvo (experience).",
        highlight: 'Sutra idem na razgovor za posao.',
      },
      {
        type: 'example',
        title: 'Matura, a CV and an Interview',
        items: [
          {
            hr: 'Moja kći ide u gimnaziju.',
            en: 'My daughter goes to a gimnazija (an academic secondary school).',
          },
          { hr: 'U lipnju imam maturu.', en: 'In June I have my school-leaving exam.' },
          { hr: 'Maturalna zabava je u petak.', en: "The leavers' ball is on Friday." },
          { hr: 'Večeras pišem životopis.', en: 'Tonight I am writing my CV.' },
          {
            hr: 'Prijavila sam se na natječaj.',
            en: 'I applied for an advertised job.',
            note: 'a woman speaking',
          },
          { hr: 'Sutra idem na razgovor za posao.', en: 'Tomorrow I am going to a job interview.' },
          {
            hr: 'Na razgovoru za posao pitaju me o iskustvu.',
            en: 'At a job interview they ask me about my experience.',
            note: 'o + locative',
          },
        ],
      },
      {
        type: 'example',
        title: 'At School',
        items: [
          { hr: 'Ja sam učenica. Idem u školu.', en: 'I am a pupil. I go to school.' },
          {
            hr: 'Djeca su sada u školi.',
            en: 'The children are at school now.',
            note: 'where → u školi',
          },
          { hr: 'Učiteljica nam daje domaću zadaću.', en: 'The teacher gives us homework.' },
          { hr: 'Moj omiljeni predmet je povijest.', en: 'My favourite subject is history.' },
          { hr: 'Večeras pišem domaću zadaću.', en: 'Tonight I am doing my homework.' },
          { hr: 'Matematika mi se ne sviđa.', en: 'I do not like maths.' },
        ],
      },
      {
        type: 'example',
        title: 'At University',
        items: [
          {
            hr: 'Moj brat je student. Studira pravo.',
            en: 'My brother is a student. He studies law.',
          },
          { hr: 'Studiram ekonomiju u Zagrebu.', en: 'I study economics in Zagreb.' },
          {
            hr: 'Svaki dan idem na fakultet.',
            en: 'I go to the faculty every day.',
            note: 'where to → na fakultet',
          },
          {
            hr: 'Večeras učim za ispit.',
            en: 'Tonight I am studying for an exam.',
            note: 'učiti, not studirati',
          },
          { hr: 'Imam ispit u petak.', en: 'I have an exam on Friday.' },
          { hr: 'Položila sam ispit!', en: 'I passed the exam!', note: 'a woman speaking' },
          { hr: 'Učim hrvatski svaki dan.', en: 'I learn Croatian every day.' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Djeca su sada u ___." (school)',
        options: ['školu', 'školi', 'škola', 'škole'],
        correct: 1,
        explanation: 'Where they ARE takes the locative: u školi. U školu is for going there.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Večeras ___ za ispit." (I am studying)',
        options: ['studiram', 'učim', 'studira', 'uči'],
        correct: 1,
        explanation:
          'Studying for an exam is always učiti: Večeras učim za ispit. Studirati is for your degree.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, studirati for any kind of studying: "Studiram za ispit" — studying for an exam is učiti: Učim za ispit. Second, u with fakultet: "Studiram u fakultetu" — fakultet takes na: Studiram na fakultetu. Third, the "where" form after going: "Idem u školi" — going there takes the accusative: Idem u školu.',
        highlight: 'Studiram na fakultetu.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Moja sestra ___ medicinu u Rijeci." (her degree)',
            options: ['uči', 'piše', 'studira', 'ide'],
            correct: 2,
            explanation: 'Medicine as a university degree is studirati: studira medicinu.',
          },
          {
            q: 'Complete: "Svaki dan idem ___ fakultet."',
            options: ['na', 'u', 'za', 's'],
            correct: 0,
            explanation: 'Fakultet takes na: idem na fakultet, studiram na fakultetu.',
          },
          {
            q: 'Complete: "Sutra ujutro idem u ___." (school)',
            options: ['školi', 'škola', 'škole', 'školu'],
            correct: 3,
            explanation: 'Going somewhere takes the accusative: idem u školu.',
          },
          {
            q: 'What is "domaća zadaća"?',
            options: ['an exam', 'homework', 'a school subject', 'a classroom'],
            correct: 1,
            explanation: 'domaća zadaća — homework, the task you do at home.',
          },
          {
            q: 'Which sentence is correct? (I am studying for an exam.)',
            options: ['Studiram za ispit.', 'Studiram ispit.', 'Učim za ispit.', 'Učim na ispit.'],
            correct: 2,
            explanation: 'Studying for an exam is učiti, with za: Učim za ispit.',
          },
          {
            q: 'A teacher in a Croatian secondary school is called…',
            options: ['profesor', 'učenik', 'student', 'razred'],
            correct: 0,
            explanation:
              'Secondary-school teachers in Croatia are profesor and profesorica. Učenik is a pupil.',
          },
          {
            q: 'Complete: "Moj omiljeni ___ je matematika." (subject)',
            options: ['ispit', 'predmet', 'razred', 'fakultet'],
            correct: 1,
            explanation: 'predmet — a school subject: Moj omiljeni predmet je matematika.',
          },
          {
            q: 'What does "Položio sam ispit!" mean?',
            options: [
              'I have an exam!',
              'I am studying for the exam!',
              'I passed the exam!',
              'I wrote the exam down!',
            ],
            correct: 2,
            explanation: 'položiti ispit — to pass an exam. Položio sam ispit! — a man speaking.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'School and Studying — Key Takeaways',
        points: [
          'učiti — learn, study anything; studirati — study a degree',
          'Studying FOR an exam is always učiti: Učim za ispit',
          'u školu / u školi, but na fakultet / na fakultetu',
          'učenik (pupil), student, učitelj (primary teacher), profesor',
          'predmet, domaća zadaća, ispit — Imam ispit u petak',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Instrumental of means
  // ─────────────────────────────────────────────────────────
  {
    id: 'instrumental-means',
    title: 'By Car, With a Pen',
    subtitle: 'The instrumental with no preposition: idem vlakom, pišem olovkom',
    icon: '🚆',
    level: 'A1',
    duration: '~7 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'One Case, Two Jobs',
        body: 'In the last lesson s bratom said who you are WITH. The same case — the instrumental — with NO little word in front says what you USE: Idem vlakom. (I go by train.) Pišem olovkom. (I write with a pencil.) Same endings, a different job, and the little word s is how you tell them apart.',
        icon: '🚆',
      },
      {
        type: 'rule',
        title: 'The Tool Takes No Preposition',
        body: 'Ask čime? — "by what? with what?". The answer is the bare instrumental: Idem vlakom. Putujem autobusom. Pišem olovkom. Plaćam karticom. English needs "by" or "with"; Croatian needs only the ending. This is how you say how you travel, what you write with, what you eat with and how you pay.',
        highlight: 'Pišem olovkom.',
      },
      {
        type: 'rule',
        title: 'The Endings',
        body: 'Masculine and neuter nouns add -om: vlak → vlakom, autobus → autobusom, auto → autom, avion → avionom, brod → brodom. After a SOFT consonant — j, č, ć, š, ž, lj, nj, c, đ, dž — the ending is -em: tramvaj → tramvajem, nož → nožem, ključ → ključem. Taksi adds a j: taksijem. Feminine nouns in -a change -a to -om: olovka → olovkom, žlica → žlicom, kartica → karticom.',
        highlight: 'tramvaj → tramvajem',
      },
      {
        type: 'table',
        title: 'Things You Use',
        headers: ['Thing', 'Instrumental', 'Example'],
        rows: [
          ['vlak — train', 'vlakom', 'Putujem vlakom.'],
          ['autobus — bus', 'autobusom', 'Idem autobusom.'],
          ['tramvaj — tram', 'tramvajem', 'Idem tramvajem.'],
          ['avion — plane', 'avionom', 'Putujem avionom.'],
          ['bicikl — bike', 'biciklom', 'Idem biciklom.'],
          ['olovka — pencil', 'olovkom', 'Pišem olovkom.'],
          ['žlica — spoon', 'žlicom', 'Jedem juhu žlicom.'],
          ['nož — knife', 'nožem', 'Režem kruh nožem.'],
          ['kartica — card', 'karticom', 'Plaćam karticom.'],
          ['gotovina — cash', 'gotovinom', 'Plaćam gotovinom.'],
        ],
      },
      {
        type: 'rule',
        title: 'With s or Without',
        body: 's + instrumental = TOGETHER WITH someone: Idem u kino s bratom. The bare instrumental = BY MEANS OF something: Idem u kino autom. Do not put s in front of a tool. Standard Croatian says Idem autom and Pišem olovkom. (In casual speech you will hear "s autom", but in writing and careful speech the tool has no s.)',
        highlight: 'Idem u kino autom.',
      },
      {
        type: 'rule',
        title: 'On Foot',
        body: 'Walking has its own word and no instrumental: Idem pješice. (I go on foot.) Pješke means the same. So: Kako ideš na posao? — Tramvajem. — Autom. — Pješice.',
        highlight: 'Idem pješice.',
      },
      {
        type: 'example',
        title: 'How Do You Get There?',
        items: [
          {
            hr: 'Svaki dan idem na posao tramvajem.',
            en: 'Every day I go to work by tram.',
            note: 'tramvaj → tramvajem',
          },
          { hr: 'Putujemo u Split vlakom.', en: 'We are travelling to Split by train.' },
          { hr: 'Ana ide u školu biciklom.', en: 'Ana goes to school by bike.' },
          { hr: 'Na Hvar idemo brodom.', en: 'We are going to Hvar by boat.' },
          { hr: 'U London putujem avionom.', en: 'I travel to London by plane.' },
          {
            hr: 'Kako ideš na fakultet? — Autobusom.',
            en: 'How do you get to the faculty? — By bus.',
          },
        ],
      },
      {
        type: 'example',
        title: 'What Do You Use?',
        items: [
          { hr: 'Pišem pismo olovkom.', en: 'I am writing a letter with a pencil.' },
          { hr: 'Jedem juhu žlicom.', en: 'I eat soup with a spoon.' },
          { hr: 'Režem kruh nožem.', en: 'I cut bread with a knife.', note: 'nož → nožem' },
          {
            hr: 'Otvaram vrata ključem.',
            en: 'I open the door with a key.',
            note: 'ključ → ključem',
          },
          { hr: 'Mogu li platiti karticom?', en: 'Can I pay by card?' },
          { hr: 'U trgovini uvijek plaćam gotovinom.', en: 'In the shop I always pay in cash.' },
          { hr: 'Čime pišeš?', en: 'What are you writing with?', note: 'čime — with what' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Idem na posao ___." (by tram)',
        options: ['tramvaj', 'tramvaju', 'tramvajem', 'tramvajom'],
        correct: 2,
        explanation:
          'The means of travel takes the instrumental, and after the soft j the ending is -em: tramvajem.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Mogu li platiti ___?" (by card)',
        options: ['karticu', 'karticom', 'kartica', 'kartici'],
        correct: 1,
        explanation: 'How you pay takes the bare instrumental: karticom. Feminine -a becomes -om.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, s in front of a tool: "Pišem s olovkom" — s means together with; the tool takes the bare instrumental: Pišem olovkom. Second, -om after a soft consonant: "tramvajom", "nožom" — after j, č, ć, š, ž, lj, nj, c and đ the ending is -em: tramvajem, nožem. Third, the accusative after a travel verb: "Putujem vlak" — the means of travel takes the instrumental: Putujem vlakom.',
        highlight: 'Pišem olovkom.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Putujem u Zadar ___." (by bus)',
            options: ['autobus', 'autobusom', 'autobusu', 'autobusem'],
            correct: 1,
            explanation:
              'The means of travel takes the instrumental; s is not soft, so the ending is -om: autobusom.',
          },
          {
            q: 'Complete: "Režem kruh ___." (with a knife)',
            options: ['nožom', 'nož', 'nožu', 'nožem'],
            correct: 3,
            explanation: 'Ž is a soft consonant, so the instrumental ending is -em: nožem.',
          },
          {
            q: 'Which sentence is correct? (I write with a pencil.)',
            options: ['Pišem olovkom.', 'Pišem olovku.', 'Pišem olovka.', 'Pišem olovki.'],
            correct: 0,
            explanation: 'The tool takes the bare instrumental: Pišem olovkom.',
          },
          {
            q: 'What does "Idem u kino s bratom." say?',
            options: [
              'I go to the cinema by my brother’s car.',
              'I go to the cinema instead of my brother.',
              'I go to the cinema with my brother.',
              'I go to the cinema for my brother.',
            ],
            correct: 2,
            explanation:
              's + instrumental means together with someone: with my brother. Without s, the instrumental is a means.',
          },
          {
            q: 'Complete: "Jedem juhu ___." (with a spoon)',
            options: ['žlicu', 'žlicom', 'žlica', 'žlici'],
            correct: 1,
            explanation: 'Feminine -a becomes -om in the instrumental: žlicom.',
          },
          {
            q: 'How do you say "I walk to work"?',
            options: [
              'Idem na posao nogom.',
              'Idem na posao pješice.',
              'Idem na posao s nogama.',
              'Idem na posao pješicom.',
            ],
            correct: 1,
            explanation: 'On foot is the word pješice (or pješke), with no instrumental.',
          },
          {
            q: 'Which question asks "With what?"',
            options: ['Što?', 'Kome?', 'Gdje?', 'Čime?'],
            correct: 3,
            explanation: 'Čime? is the instrumental of što — by what, with what.',
          },
          {
            q: 'Complete: "Na otok idemo ___." (by boat)',
            options: ['brodom', 'brod', 'brodem', 'brodu'],
            correct: 0,
            explanation: 'D is not soft, so brod takes -om: brodom.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Instrumental of Means — Key Takeaways',
        points: [
          'The bare instrumental = the means or the tool: Idem vlakom. Pišem olovkom.',
          's + instrumental = together with: s bratom',
          'Masculine and neuter -om; after a soft consonant -em: tramvajem, nožem',
          'Feminine -a → -om: olovkom, žlicom, karticom',
          'On foot: pješice. Ask with čime?',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'verbs-with-dative': {
    worked: [
      {
        title: 'Helping Someone',
        problem: '"I help my sister." (sestra)',
        en: 'I help my sister.',
        steps: [
          { label: 'The verb', text: 'pomagati — the g becomes ž: ja pomažem.' },
          {
            label: 'Who receives?',
            text: 'The help goes TO your sister, so she is in the dative, not the accusative.',
          },
          {
            label: 'The ending',
            text: 'A feminine noun in -a takes -i in the dative: sestra → sestri.',
          },
        ],
        answer: 'Pomažem sestri.',
      },
      {
        title: 'Liking Several Things',
        problem: '"I like these songs." (ove pjesme)',
        en: 'I like these songs.',
        steps: [
          {
            label: 'Turn it around',
            text: 'Say it as "these songs are pleasing to me": the songs are the subject.',
          },
          { label: 'The person', text: 'To me is the dative mi, and se follows it.' },
          { label: 'Agreement', text: 'Several songs, so the verb is plural: sviđaju.' },
        ],
        answer: 'Sviđaju mi se ove pjesme.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Vjerujem ___. (to you, a friend)',
          options: ['te', 'ti', 'tebe', 'tvoj'],
          correct: 1,
          hint: 'vjerovati takes the dative — the short "to you" form.',
          explanation: 'Vjerujem ti.',
        },
        {
          q: 'Which sentence is correct? (I do not like this film.)',
          options: [
            'Ne sviđa se mi ovaj film.',
            'Ne sviđam se ovaj film.',
            'Ne sviđa mi se ovaj film.',
            'Mi ne sviđa se ovaj film.',
          ],
          correct: 2,
          hint: 'The dative comes first among the small words, se after it.',
          explanation: 'Ne sviđa mi se ovaj film.',
        },
        {
          q: 'Sviđa ___ se ovaj grad. (to him)',
          options: ['mu', 'ga', 'on', 'njega'],
          correct: 0,
          hint: 'The person who likes is in the dative.',
          explanation: 'Sviđa mu se ovaj grad.',
        },
        {
          q: 'Učenici ___ profesoru. (answer)',
          options: ['odgovaram', 'odgovara', 'odgovarate', 'odgovaraju'],
          correct: 3,
          hint: 'Učenici is plural — third person plural of an -am verb.',
          explanation: 'Učenici odgovaraju profesoru.',
        },
        {
          q: '___ mi se ove cipele.',
          options: ['Sviđa', 'Sviđaju', 'Sviđam', 'Sviđamo'],
          correct: 1,
          hint: 'The verb agrees with the shoes — how many are there?',
          explanation: 'Sviđaju mi se ove cipele.',
        },
        {
          q: 'Which question is correct? (Do you like Split?)',
          options: [
            'Sviđa li se ti Split?',
            'Li ti se sviđa Split?',
            'Sviđa li ti se Split?',
            'Sviđaš li se Split?',
          ],
          correct: 2,
          hint: 'li first, then the dative, then se.',
          explanation: 'Sviđa li ti se Split?',
        },
        {
          q: 'Pomažemo ___. (Marko)',
          options: ['Marka', 'Marku', 'Marko', 'Markom'],
          correct: 1,
          hint: 'The person helped receives the help.',
          explanation: 'Pomažemo Marku.',
        },
        {
          q: 'What does "Odgovara li vam u pet?" ask?',
          options: [
            'Do you answer at five?',
            'Does five o’clock suit you?',
            'Are you coming at five?',
            'Did you reply at five?',
          ],
          correct: 1,
          hint: 'odgovarati has a second meaning: to suit.',
          explanation: 'Does five o’clock suit you?',
        },
        {
          type: 'type',
          q: 'Ona ____ mami svaki dan. (pomagati — she helps)',
          answer: 'pomaže',
          hint: 'The g turns into ž; third person singular of an -em verb.',
          explanation: 'Ona pomaže mami svaki dan.',
        },
        {
          type: 'type',
          q: 'Ja ti ____. (vjerovati — I believe)',
          answer: 'vjerujem',
          hint: 'An -ovati verb: -ova- becomes -uj-, then the ja ending.',
          explanation: 'Ja ti vjerujem.',
        },
        {
          type: 'type',
          q: 'Pomažem ____. (brat)',
          answer: 'bratu',
          hint: 'A masculine noun in the dative ends in -u.',
          explanation: 'Pomažem bratu.',
        },
        {
          type: 'type',
          q: 'Sviđa ____ se Zagreb. (to me)',
          answer: 'mi',
          hint: 'The short dative form for "to me".',
          explanation: 'Sviđa mi se Zagreb.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Pomažem ___ u kuhinji." (mama)',
        options: ['mamu', 'mama', 'mami', 'mamom'],
        correct: 2,
        explanation: 'pomagati takes the dative: Pomažem mami. Mamu is the accusative.',
      },
      {
        q: 'Which sentence is correct? (She likes Zagreb.)',
        options: [
          'Sviđa joj se Zagreb.',
          'Sviđa se joj Zagreb.',
          'Sviđa je se Zagreb.',
          'Ona sviđa se Zagreb.',
        ],
        correct: 0,
        explanation: 'joj (to her) in the dative, then se: Sviđa joj se Zagreb.',
      },
      {
        q: 'Complete: "___ nam se ovi gradovi."',
        options: ['Sviđa', 'Sviđamo', 'Sviđate', 'Sviđaju'],
        correct: 3,
        explanation: 'The cities are the subject and they are plural: Sviđaju nam se ovi gradovi.',
      },
      {
        q: 'Complete: "Zašto ___ ne vjeruješ?" (me)',
        options: ['me', 'mi', 'mene', 'ja'],
        correct: 1,
        explanation: 'vjerovati takes the dative: Zašto mi ne vjeruješ?',
      },
      {
        q: 'Complete: "Mi ___ susjedu." (help)',
        options: ['pomagamo', 'pomažu', 'pomažemo', 'pomažete'],
        correct: 2,
        explanation: 'pomagati → pomažemo for mi.',
      },
      {
        q: 'What does "Sviđa li vam se hrana?" ask?',
        options: [
          'Do you like the food?',
          'Do you eat the food?',
          'Is the food yours?',
          'Did you buy the food?',
        ],
        correct: 0,
        explanation: 'Sviđa li vam se hrana? — is the food pleasing to you: do you like the food?',
      },
    ],
    vocab: [
      ['pomagati', 'to help', 'Pomažem mami u kuhinji.'],
      ['pomoći', 'to help (once)', 'Možete li mi pomoći?'],
      ['vjerovati', 'to believe, to trust', 'Vjerujem ti.'],
      ['odgovarati', 'to answer; to suit', 'Zašto mi ne odgovaraš?'],
      ['sviđati se', 'to be liked by', 'Sviđa mi se Zagreb.'],
      ['susjed', 'neighbour', 'Pomažem susjedu.'],
      ['pitanje', 'question', 'Odgovaram na pitanje.'],
      ['cipele', 'shoes', 'Sviđaju mi se ove cipele.'],
      ['pjesma', 'song', 'Sviđa mi se ova pjesma.'],
    ],
  },

  'postcards-wishes': {
    worked: [
      {
        title: 'A New Year Wish',
        problem: '"I wish you a Happy New Year." (to a friend)',
        en: 'I wish you a Happy New Year.',
        steps: [
          { label: 'The verb', text: 'želim — I wish.' },
          { label: 'The person', text: 'To a friend: the dative ti.' },
          {
            label: 'The wish as object',
            text: 'Nova godina is feminine and it is the object, so it goes into the accusative, adjective and all: sretnu Novu godinu.',
          },
        ],
        answer: 'Želim ti sretnu Novu godinu.',
      },
      {
        title: 'Opening a Card',
        problem: 'Open a birthday card to your dad, tata.',
        en: 'Dear Dad, happy birthday!',
        steps: [
          {
            label: 'Man or woman?',
            text: 'Tata ends in -a, but your dad is a man, so the adjective is masculine: dragi.',
          },
          { label: 'The occasion', text: 'Rođendan is masculine: sretan rođendan.' },
          { label: 'Put it together', text: 'A comma after the opening, then the wish.' },
        ],
        answer: 'Dragi tata, sretan rođendan!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ Uskrs!',
          options: ['Sretna', 'Sretan', 'Sretno', 'Sretne'],
          correct: 1,
          hint: 'Uskrs is masculine.',
          explanation: 'Sretan Uskrs!',
        },
        {
          q: 'Your friend is leaving on a long trip. What do you say?',
          options: ['Sretan put!', 'Sretan rođendan!', 'Čestitam!', 'Sretna Nova godina!'],
          correct: 0,
          hint: 'put — a journey.',
          explanation: 'Sretan put! — have a good trip.',
        },
        {
          q: 'How do you open a card to your mum?',
          options: ['Dragi mama,', 'Drago mama,', 'Draga mama,', 'Dragu mama,'],
          correct: 2,
          hint: 'Your mum is a woman.',
          explanation: 'Draga mama,',
        },
        {
          q: 'Which closing means "Lots of love" on a postcard?',
          options: ['Sretno!', 'Sve najbolje!', 'Vidimo se!', 'Puno pozdrava!'],
          correct: 3,
          hint: 'Literally "many greetings".',
          explanation: 'Puno pozdrava!',
        },
        {
          q: 'Your colleague has a new baby. What do you write?',
          options: ['Sretan put!', 'Čestitam!', 'Sretno!', 'Pozdrav iz Splita!'],
          correct: 1,
          hint: 'You are congratulating them on something that has happened.',
          explanation: 'Čestitam!',
        },
        {
          q: 'Želim ___ sretan Božić. (to you, formal or plural)',
          options: ['vas', 'vi', 'vam', 'vaš'],
          correct: 2,
          hint: 'The person you wish it to is in the dative.',
          explanation: 'Želim vam sretan Božić.',
        },
        {
          q: 'Marko signs his card. Which closing fits?',
          options: ['Tvoja Marko', 'Tvoj Marko', 'Tvoje Marko', 'Tvoju Marko'],
          correct: 1,
          hint: 'Marko is a man.',
          explanation: 'Tvoj Marko',
        },
        {
          q: 'What does "Sve najbolje!" mean?',
          options: ['All the best!', 'See you soon!', 'Good luck!', 'Have a good trip!'],
          correct: 0,
          hint: 'It goes on almost every birthday card.',
          explanation: 'All the best!',
        },
        {
          type: 'type',
          q: '____ rođendan!',
          answer: 'Sretan',
          hint: 'The adjective for happy, in the masculine — rođendan is masculine.',
          explanation: 'Sretan rođendan!',
        },
        {
          type: 'type',
          q: 'Sretna Nova ____!',
          answer: 'godina',
          hint: 'The feminine word for year.',
          explanation: 'Sretna Nova godina!',
        },
        {
          type: 'type',
          q: '____ Ana, puno pozdrava!',
          answer: 'Draga',
          hint: 'The opening word for a woman.',
          explanation: 'Draga Ana, puno pozdrava!',
        },
        {
          type: 'type',
          q: 'Želim ____ sretan put. (to you, a friend)',
          answer: 'ti',
          hint: 'The short dative form for a friend.',
          explanation: 'Želim ti sretan put.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete the Easter card: "___ Uskrs!"',
        options: ['Sretno', 'Sretan', 'Sretna', 'Sretni'],
        correct: 1,
        explanation: 'Uskrs is masculine: Sretan Uskrs!',
      },
      {
        q: 'How do you open a card to your friend Ana?',
        options: ['Dragi Ana,', 'Drago Ana,', 'Draga Ana,', 'Dragu Ana,'],
        correct: 2,
        explanation: 'Ana is a woman: Draga Ana.',
      },
      {
        q: 'Your neighbour has a job interview tomorrow. What do you say?',
        options: ['Sretno!', 'Sretan Božić!', 'Puno pozdrava!', 'Sretan imendan!'],
        correct: 0,
        explanation: 'Sretno! — good luck.',
      },
      {
        q: 'Complete: "Želim ___ sretan Božić." (to you, formal)',
        options: ['vas', 'vi', 'vaš', 'vam'],
        correct: 3,
        explanation: 'The person is in the dative: vam.',
      },
      {
        q: 'Which wish is correct? (Happy New Year to you!)',
        options: [
          'Želim ti sretan Nova godina.',
          'Želim ti sretnu Novu godinu.',
          'Želim ti sretna Nova godina.',
          'Želim te sretnu Novu godinu.',
        ],
        correct: 1,
        explanation:
          'The dative ti, and the feminine object in the accusative: sretnu Novu godinu.',
      },
      {
        q: 'What does "Pozdrav iz Splita!" say?',
        options: [
          'See you in Split!',
          'I am going to Split!',
          'Greetings from Split!',
          'Split is beautiful!',
        ],
        correct: 2,
        explanation: 'Pozdrav iz Splita! — Greetings from Split! A fixed postcard phrase.',
      },
    ],
    vocab: [
      ['sretan', 'happy', 'Sretan rođendan!'],
      ['rođendan', 'birthday', 'Sutra je moj rođendan.'],
      ['Božić', 'Christmas', 'Sretan Božić!'],
      ['Uskrs', 'Easter', 'Sretan Uskrs!'],
      ['Nova godina', 'New Year', 'Sretna Nova godina!'],
      ['čestitati', 'to congratulate', 'Čestitam ti rođendan!'],
      ['razglednica', 'postcard', 'Pišem razglednicu mami.'],
      ['pozdrav', 'greeting', 'Puno pozdrava!'],
      ['dragi', 'dear', 'Dragi Marko,'],
      ['sretno', 'good luck', 'Sretno sutra!'],
    ],
  },

  'daily-routine': {
    worked: [
      {
        title: 'Se After a Time Word',
        problem: '"At seven I get dressed." (oblačiti se)',
        en: 'At seven I get dressed.',
        steps: [
          {
            label: 'The verb',
            text: 'oblačiti se — alone it is Oblačim se; with ja in front, se moves up: Ja se oblačim.',
          },
          { label: 'What opens?', text: 'U sedam opens the sentence.' },
          { label: 'Second position', text: 'Se comes right after u sedam, then the verb.' },
        ],
        answer: 'U sedam se oblačim.',
      },
      {
        title: 'Se or an Object?',
        problem: '"I wash my hair in the evening." (prati)',
        en: 'I wash my hair in the evening.',
        steps: [
          { label: 'The verb', text: 'prati — ja perem.' },
          {
            label: 'Where does it land?',
            text: 'The washing lands on your hair, not on "yourself", so kosu is the object.',
          },
          { label: 'No se', text: 'An object in the accusative means no se.' },
        ],
        answer: 'Navečer perem kosu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which sentence is correct? (I wake up at six.)',
          options: [
            'Budim u šest se.',
            'Budim se u šest.',
            'Se budim u šest.',
            'Budim sebe u šest.',
          ],
          correct: 1,
          hint: 'Se goes second, straight after the first word.',
          explanation: 'Budim se u šest.',
        },
        {
          q: 'Prvo se umivam, onda ___ zube.',
          options: ['se perem', 'perem se', 'perem', 'pere'],
          correct: 2,
          hint: 'The teeth are the object.',
          explanation: 'Prvo se umivam, onda perem zube.',
        },
        {
          q: 'Which sentence is correct? (Then I get up.)',
          options: ['Onda se ustajem.', 'Onda ustajem se.', 'Se onda ustajem.', 'Onda ustajem.'],
          correct: 3,
          hint: 'Does ustajati carry se?',
          explanation: 'Onda ustajem.',
        },
        {
          q: 'Moj brat se ___ navečer. (shower)',
          options: ['tušira', 'tuširam', 'tuširaju', 'tuširaš'],
          correct: 0,
          hint: 'Third person singular of an -am verb.',
          explanation: 'Moj brat se tušira navečer.',
        },
        {
          q: 'Popodne ___ kući. (I come back)',
          options: ['vraćam se', 'se vraćam', 'vraćam', 'se vraća'],
          correct: 1,
          hint: 'Popodne opens the sentence — where does se go?',
          explanation: 'Popodne se vraćam kući.',
        },
        {
          q: 'What does "Idem spavati u jedanaest." mean?',
          options: [
            'I go to bed at eleven.',
            'I sleep until eleven.',
            'I wake up at eleven.',
            'I go to work at eleven.',
          ],
          correct: 0,
          hint: 'ići spavati — go to …',
          explanation: 'I go to bed at eleven.',
        },
        {
          q: 'Ujutro budim sina i oblačim ___. (him)',
          options: ['se', 'mu', 'ga', 'on'],
          correct: 2,
          hint: 'He is the object — the accusative "him".',
          explanation: 'Ujutro budim sina i oblačim ga.',
        },
        {
          q: 'Kad ___ u subotu? (you get up)',
          options: ['ustaješ se', 'se ustaješ', 'ustajem', 'ustaješ'],
          correct: 3,
          hint: 'Ustajati has no se; ti form.',
          explanation: 'Kad ustaješ u subotu?',
        },
        {
          type: 'type',
          q: 'Ja ____ u pola osam. (doručkovati)',
          answer: 'doručkujem',
          hint: 'An -ovati verb: -ova- becomes -uj-.',
          explanation: 'Ja doručkujem u pola osam.',
        },
        {
          type: 'type',
          q: 'Zatim ____ tuširam.',
          answer: 'se',
          hint: 'The small word that tuširati carries, in second position.',
          explanation: 'Zatim se tuširam.',
        },
        {
          type: 'type',
          q: 'Ja ____ u sedam. (ustajati)',
          answer: 'ustajem',
          hint: 'The ja form ends in -jem, and there is no se.',
          explanation: 'Ja ustajem u sedam.',
        },
        {
          type: 'type',
          q: 'Mama nije doma, ona je na ____. (posao)',
          answer: 'poslu',
          hint: 'Being somewhere takes the locative, and posao gets its l back when an ending is added.',
          explanation: 'Ona je na poslu.',
        },
        {
          type: 'type',
          q: 'Navečer se ____. (odmarati se — I rest)',
          answer: 'odmaram',
          hint: 'The ja form of an -am verb.',
          explanation: 'Navečer se odmaram.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Navečer ___." (I rest)',
        options: ['odmaram se', 'se odmaram', 'odmaram', 'me odmaram'],
        correct: 1,
        explanation: 'Navečer opens the sentence, so se is second: Navečer se odmaram.',
      },
      {
        q: 'Which sentence is correct? (I brush my teeth.)',
        options: ['Perem se zube.', 'Se perem zube.', 'Perem zube.', 'Perem zubi.'],
        correct: 2,
        explanation: 'The teeth are the object, so there is no se: Perem zube.',
      },
      {
        q: 'Which one carries se?',
        options: ['ustajati', 'doručkovati', 'večerati', 'buditi se'],
        correct: 3,
        explanation: 'buditi se — to wake up — carries se: Budim se u sedam.',
      },
      {
        q: 'Complete: "Otac ___ djecu u sedam." (wakes)',
        options: ['budi', 'se budi', 'budi se', 'budim'],
        correct: 0,
        explanation: 'The children are the object, so no se: Otac budi djecu u sedam.',
      },
      {
        q: 'What does "Zatim se oblačim." mean?',
        options: [
          'Then I wake up.',
          'After that I get dressed.',
          'After that I shower.',
          'First I get dressed.',
        ],
        correct: 1,
        explanation: 'zatim — after that; oblačiti se — to get dressed.',
      },
      {
        q: 'Complete: "Mi ___ u pola osam." (have breakfast)',
        options: ['doručkovamo', 'doručkujemo', 'doručkuju', 'doručkujete'],
        correct: 1,
        explanation: 'doručkovati → doručkujemo for mi.',
      },
    ],
    vocab: [
      ['buditi se', 'to wake up', 'Budim se u sedam.'],
      ['ustajati', 'to get up', 'Ustajem u sedam i deset.'],
      ['umivati se', 'to wash your face', 'Prvo se umivam.'],
      ['prati zube', 'to brush your teeth', 'Onda perem zube.'],
      ['oblačiti se', 'to get dressed', 'Zatim se oblačim.'],
      ['doručkovati', 'to have breakfast', 'Doručkujem u pola osam.'],
      ['večerati', 'to have dinner', 'Navečer večeram.'],
      ['ići spavati', 'to go to bed', 'Idem spavati u jedanaest.'],
      ['onda', 'then', 'Onda se tuširam.'],
      ['zatim', 'after that', 'Zatim idem na posao.'],
      ['posao', 'work, a job', 'Ja sam na poslu.'],
    ],
  },

  'reflexive-past-future': {
    worked: [
      {
        title: 'Se in the Past',
        problem: '"Yesterday I got dressed quickly." (a woman speaking — obući se)',
        en: 'Yesterday I got dressed quickly.',
        steps: [
          { label: 'The participle', text: 'obući → obukla, for a woman.' },
          { label: 'The small words', text: 'sam for ja, then se right after it.' },
          {
            label: 'Second position',
            text: 'Jučer opens the sentence, so sam se follows it, then the participle.',
          },
        ],
        answer: 'Jučer sam se brzo obukla.',
      },
      {
        title: 'Se in the Future',
        problem: '"We will come back on Sunday." (vratiti se)',
        en: 'We will come back on Sunday.',
        steps: [
          { label: 'The future word', text: 'For mi it is ćemo.' },
          { label: 'Order', text: 'ćemo first, then se.' },
          {
            label: 'Verb first',
            text: 'If the verb opens the sentence it drops its -i in writing: vratit ćemo se.',
          },
        ],
        answer: 'Vratit ćemo se u nedjelju.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Jutros ___ probudio u šest. (I — a man)',
          options: ['se sam', 'sam se', 'sam', 'si se'],
          correct: 1,
          hint: 'The short form of biti goes before se.',
          explanation: 'Jutros sam se probudio u šest.',
        },
        {
          q: 'Marko ___ vratio kući kasno.',
          options: ['je', 'su se', 'se', 'sam se'],
          correct: 2,
          hint: 'Third person singular — standard Croatian leaves something out.',
          explanation: 'Marko se vratio kući kasno.',
        },
        {
          q: 'Sutra ___ probuditi rano. (I will)',
          options: ['se ću', 'ću se', 'ću', 'sam se'],
          correct: 1,
          hint: 'ću before se.',
          explanation: 'Sutra ću se probuditi rano.',
        },
        {
          q: 'Which sentence is correct? (I will shower in the evening.)',
          options: [
            'Tuširat ću se navečer.',
            'Tuširati ću se navečer.',
            'Tuširat se ću navečer.',
            'Se tuširat ću navečer.',
          ],
          correct: 0,
          hint: 'Verb first loses -i, then ću, then se.',
          explanation: 'Tuširat ću se navečer.',
        },
        {
          q: 'Oni ___ jako umorili.',
          options: ['se su', 'smo se', 'su se', 'se'],
          correct: 2,
          hint: 'In the plural the helper stays and comes first.',
          explanation: 'Oni su se jako umorili.',
        },
        {
          q: 'Which sentence is correct? (I did not feel well — a woman speaking.)',
          options: [
            'Nisam se dobro osjećala.',
            'Se nisam dobro osjećala.',
            'Nisam dobro se osjećala.',
            'Ne sam se dobro osjećala.',
          ],
          correct: 0,
          hint: 'Nisam is one full word; se follows it.',
          explanation: 'Nisam se dobro osjećala.',
        },
        {
          q: '___ li se odmorila? (you — to a woman)',
          options: ['Jesam', 'Je', 'Jeste', 'Jesi'],
          correct: 3,
          hint: 'The question form of si for ti.',
          explanation: 'Jesi li se odmorila?',
        },
        {
          q: 'Ana ___ vratiti u petak. (she will)',
          options: ['će se', 'se će', 'ćeš se', 'su se'],
          correct: 0,
          hint: 'Third person future, then se.',
          explanation: 'Ana će se vratiti u petak.',
        },
        {
          type: 'type',
          q: 'Jučer ____ se tuširala navečer. (I)',
          answer: 'sam',
          hint: 'The short form of biti for ja.',
          explanation: 'Jučer sam se tuširala navečer.',
        },
        {
          type: 'type',
          q: 'Sutra ____ se vratiti. (we will)',
          answer: 'ćemo',
          hint: 'The short future form for mi.',
          explanation: 'Sutra ćemo se vratiti.',
        },
        {
          type: 'type',
          q: 'Brat se ____ u sedam. (probuditi se — he woke up)',
          answer: 'probudio',
          hint: 'The past participle for a man ends in -o.',
          explanation: 'Brat se probudio u sedam.',
        },
        {
          type: 'type',
          q: 'Probudit ____ se u šest. (I will)',
          answer: 'ću',
          hint: 'The short future form for ja.',
          explanation: 'Probudit ću se u šest.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Jučer ___ odmorili." (we had a rest)',
        options: ['se smo', 'smo se', 'su se', 'se'],
        correct: 1,
        explanation: 'smo first, then se: Jučer smo se odmorili.',
      },
      {
        q: 'Which sentence is correct? (She came back home.)',
        options: [
          'Ona se vratila kući.',
          'Ona je vratila kući.',
          'Ona sam se vratila kući.',
          'Ona su se vratila kući.',
        ],
        correct: 0,
        explanation: 'Third person singular: se, with no je: Ona se vratila kući.',
      },
      {
        q: 'Complete: "Sutra ___ obući brzo." (I will get dressed)',
        options: ['se ću', 'sam se', 'ću', 'ću se'],
        correct: 3,
        explanation: 'ću before se: Sutra ću se obući brzo.',
      },
      {
        q: 'Which sentence is correct? (I will wake up at six.)',
        options: [
          'Probudit se ću u šest.',
          'Probuditi ću se u šest.',
          'Probudit ću se u šest.',
          'Probudit ću u šest se.',
        ],
        correct: 2,
        explanation: 'Verb first drops -i, then ću, then se: Probudit ću se u šest.',
      },
      {
        q: 'What does "Neću se tuširati ujutro." mean?',
        options: [
          'I did not shower in the morning.',
          'I do not shower in the morning.',
          'Do not shower in the morning.',
          'I will not shower in the morning.',
        ],
        correct: 3,
        explanation: 'Neću + infinitive is the negative future: I will not shower.',
      },
      {
        q: 'Complete: "Kad si ___ probudio?"',
        options: ['sam', 'se', 'ću', 'je'],
        correct: 1,
        explanation: 'si is already there; probuditi se needs se after it: Kad si se probudio?',
      },
    ],
    vocab: [
      ['probuditi se', 'to wake up', 'Jutros sam se probudio u sedam.'],
      ['vratiti se', 'to come back', 'Vratit ćemo se u subotu.'],
      ['odmoriti se', 'to have a rest', 'Ana se dobro odmorila.'],
      ['umoriti se', 'to get tired', 'Jako smo se umorili.'],
      ['obući se', 'to get dressed', 'Brzo sam se obukao.'],
      ['jutros', 'this morning', 'Jutros sam se probudila rano.'],
      ['rano', 'early', 'Sutra ću se probuditi rano.'],
      ['kasno', 'late', 'Brat se vratio kasno.'],
    ],
  },

  'school-education': {
    worked: [
      {
        title: 'Learn or Study?',
        problem: '"My sister studies law in Zagreb."',
        en: 'My sister studies law in Zagreb.',
        steps: [
          { label: 'Which verb?', text: 'Law as a university degree is studirati.' },
          { label: 'The form', text: 'For sestra: studira.' },
          {
            label: 'The object',
            text: 'pravo (law) is neuter, so the accusative looks the same: pravo.',
          },
        ],
        answer: 'Moja sestra studira pravo u Zagrebu.',
      },
      {
        title: 'Where To and Where',
        problem: '"I go to the faculty. I am at the faculty."',
        en: 'I go to the faculty. I am at the faculty.',
        steps: [
          { label: 'u or na?', text: 'Fakultet takes na, like posao.' },
          { label: 'Going there', text: 'Movement takes the accusative: na fakultet.' },
          { label: 'Being there', text: 'Location takes the locative: na fakultetu.' },
        ],
        answer: 'Idem na fakultet. Ja sam na fakultetu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moj brat je ___. Studira ekonomiju.',
          options: ['učenik', 'student', 'učitelj', 'razred'],
          correct: 1,
          hint: 'Someone who studies at university.',
          explanation: 'Moj brat je student.',
        },
        {
          q: 'Djeca ___ u školi. (learn)',
          options: ['studiraju', 'uče', 'studira', 'uči'],
          correct: 1,
          hint: 'Children at school do not study a degree; djeca is plural.',
          explanation: 'Djeca uče u školi.',
        },
        {
          q: 'Studiram ___ fakultetu.',
          options: ['u', 'za', 'na', 's'],
          correct: 2,
          hint: 'Fakultet goes with the same word as posao.',
          explanation: 'Studiram na fakultetu.',
        },
        {
          q: 'Idem u ___. (school — going there)',
          options: ['školi', 'školu', 'škola', 'škole'],
          correct: 1,
          hint: 'Going somewhere takes the accusative.',
          explanation: 'Idem u školu.',
        },
        {
          q: 'What is "ispit"?',
          options: ['a subject', 'a classroom', 'an exam', 'homework'],
          correct: 2,
          hint: 'You pass it or fail it.',
          explanation: 'ispit — an exam.',
        },
        {
          q: 'Koji ti je omiljeni ___? — Povijest.',
          options: ['predmet', 'ispit', 'fakultet', 'profesor'],
          correct: 0,
          hint: 'History is one of these at school.',
          explanation: 'Koji ti je omiljeni predmet?',
        },
        {
          q: 'A primary-school teacher (a woman) is…',
          options: ['učenica', 'studentica', 'profesorica', 'učiteljica'],
          correct: 3,
          hint: 'Primary school, a woman teaching.',
          explanation: 'učiteljica',
        },
        {
          q: 'Which sentence is correct? (I am doing my homework.)',
          options: [
            'Pišem domaću zadaću.',
            'Pišem domaća zadaća.',
            'Pišem domaćoj zadaći.',
            'Pišem domaći zadaću.',
          ],
          correct: 0,
          hint: 'The homework is the object — accusative, adjective and noun.',
          explanation: 'Pišem domaću zadaću.',
        },
        {
          type: 'type',
          q: 'Večeras ____ za ispit. (I am studying)',
          answer: 'učim',
          hint: 'Studying for an exam is never studirati.',
          explanation: 'Večeras učim za ispit.',
        },
        {
          type: 'type',
          q: 'Djeca su sada u ____. (škola — where)',
          answer: 'školi',
          hint: 'Where something is takes the locative: -a becomes -i.',
          explanation: 'Djeca su sada u školi.',
        },
        {
          type: 'type',
          q: 'Ja ____ medicinu. (studirati)',
          answer: 'studiram',
          hint: 'The ja form of an -am verb.',
          explanation: 'Ja studiram medicinu.',
        },
        {
          type: 'type',
          q: 'Imam ____ u petak. (an exam)',
          answer: 'ispit',
          hint: 'The word for a test you pass or fail.',
          explanation: 'Imam ispit u petak.',
        },
        {
          q: 'Secondary school in Croatia ends with the state school-leaving exam. What is it called?',
          options: ['razred', 'matura', 'fakultet', 'životopis'],
          correct: 1,
          hint: "The same word gives the name of the leavers' ball.",
          explanation:
            'matura — the state school-leaving exam; the ball after it is the maturalna zabava.',
        },
        {
          q: 'Sutra idem na ___ za posao. (an interview)',
          options: ['razgovor', 'razgovoru', 'razgovora', 'razgovore'],
          correct: 0,
          hint: 'Going TO it — the same form as going na fakultet.',
          explanation: 'Sutra idem na razgovor za posao.',
        },
        {
          type: 'type',
          q: 'Za razgovor za posao pišem ____. (a CV)',
          answer: 'životopis',
          hint: 'The document that lists your schooling and your jobs — literally a description of a life.',
          explanation: 'Za razgovor za posao pišem životopis.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Moj prijatelj ___ pravo." (his degree)',
        options: ['uči', 'studira', 'piše', 'ide'],
        correct: 1,
        explanation: 'A university degree is studirati: studira pravo.',
      },
      {
        q: 'Complete: "Ja sam sada na ___."',
        options: ['fakultet', 'fakulteta', 'fakultetu', 'fakultetom'],
        correct: 2,
        explanation: 'Where you are takes the locative: na fakultetu.',
      },
      {
        q: 'Which sentence is correct? (I go to school.)',
        options: ['Idem u školi.', 'Idem na školu.', 'Idem u škola.', 'Idem u školu.'],
        correct: 3,
        explanation: 'Going there: u + accusative: Idem u školu.',
      },
      {
        q: 'Complete: "Sutra imam ___, pa danas učim."',
        options: ['ispit', 'razred', 'predmet', 'fakultet'],
        correct: 0,
        explanation: 'You study today because there is an exam tomorrow: ispit.',
      },
      {
        q: 'What does "učenica" mean?',
        options: [
          'a female teacher',
          'a female pupil',
          'a female student at university',
          'a school',
        ],
        correct: 1,
        explanation: 'učenica — a girl at school, a pupil.',
      },
      {
        q: 'Which sentence is correct? (We are learning Croatian.)',
        options: [
          'Studiramo hrvatski.',
          'Učimo hrvatski.',
          'Učimo hrvatskog.',
          'Učimo na hrvatski.',
        ],
        correct: 1,
        explanation:
          'Learning a language is učiti, with the language as a plain object: Učimo hrvatski.',
      },
    ],
    vocab: [
      ['škola', 'school', 'Idem u školu.'],
      ['fakultet', 'faculty, university', 'Studiram na fakultetu.'],
      ['učiti', 'to learn, to study', 'Učim za ispit.'],
      ['studirati', 'to study (a degree)', 'Studiram medicinu.'],
      ['učenik', 'pupil', 'Ja sam učenik.'],
      ['student', 'university student', 'Moj brat je student.'],
      ['učitelj', 'primary-school teacher', 'Učitelj nam daje zadaću.'],
      ['predmet', 'school subject', 'Moj omiljeni predmet je povijest.'],
      ['ispit', 'exam', 'Imam ispit u petak.'],
      ['domaća zadaća', 'homework', 'Pišem domaću zadaću.'],
      ['gimnazija', 'academic secondary school', 'Moja kći ide u gimnaziju.'],
      ['matura', 'school-leaving exam', 'U lipnju imam maturu.'],
      ['životopis', 'CV, résumé', 'Večeras pišem životopis.'],
      ['razgovor za posao', 'job interview', 'Sutra idem na razgovor za posao.'],
      ['iskustvo', 'experience', 'Na razgovoru za posao pitaju me o iskustvu.'],
    ],
  },

  'instrumental-means': {
    worked: [
      {
        title: 'How Do You Travel?',
        problem: '"I travel to Zagreb by train." (vlak)',
        en: 'I travel to Zagreb by train.',
        steps: [
          { label: 'Means, not company', text: 'The train is how you travel, so no s.' },
          { label: 'The case', text: 'The means takes the instrumental.' },
          { label: 'The ending', text: 'Vlak is masculine and k is not soft: vlak → vlakom.' },
        ],
        answer: 'Putujem u Zagreb vlakom.',
      },
      {
        title: 'A Soft Consonant',
        problem: '"I go to work by tram." (tramvaj)',
        en: 'I go to work by tram.',
        steps: [
          { label: 'The case', text: 'The means of travel takes the instrumental.' },
          { label: 'Look at the last letter', text: 'Tramvaj ends in j, a soft consonant.' },
          { label: 'The ending', text: 'After a soft consonant the ending is -em, not -om.' },
        ],
        answer: 'Idem na posao tramvajem.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Idem u grad ___. (by bus)',
          options: ['autobus', 'autobusom', 'autobusem', 'autobusu'],
          correct: 1,
          hint: 'S is not a soft consonant.',
          explanation: 'Idem u grad autobusom.',
        },
        {
          q: 'Otvaram vrata ___. (with a key)',
          options: ['ključom', 'ključ', 'ključem', 'ključu'],
          correct: 2,
          hint: 'Č is soft.',
          explanation: 'Otvaram vrata ključem.',
        },
        {
          q: 'Which sentence is correct? (I write with a pencil.)',
          options: ['Pišem olovku.', 'Pišem olovkom.', 'Pišem olovka.', 'Pišem olovki.'],
          correct: 1,
          hint: 'The tool, feminine -a → ?',
          explanation: 'Pišem olovkom.',
        },
        {
          q: 'Plaćam ___. (in cash)',
          options: ['gotovinom', 'gotovinu', 'gotovina', 'gotovini'],
          correct: 0,
          hint: 'How you pay takes the bare instrumental.',
          explanation: 'Plaćam gotovinom.',
        },
        {
          q: 'Which word asks "by what? with what?"',
          options: ['Kome?', 'Što?', 'Kamo?', 'Čime?'],
          correct: 3,
          hint: 'The instrumental of što.',
          explanation: 'Čime?',
        },
        {
          q: 'Idem u kino ___. (with my sister)',
          options: ['sestrom', 'sa sestrom', 'sestru', 'sestri'],
          correct: 1,
          hint: 'Company, not a tool — it needs the little word.',
          explanation: 'Idem u kino sa sestrom.',
        },
        {
          q: 'Na Hvar idemo ___. (by boat)',
          options: ['brodem', 'brod', 'brodom', 'brodu'],
          correct: 2,
          hint: 'D is not soft.',
          explanation: 'Na Hvar idemo brodom.',
        },
        {
          q: 'How do you say "I go on foot"?',
          options: ['Idem nogom.', 'Idem pješice.', 'Idem nogama.', 'Idem pješicom.'],
          correct: 1,
          hint: 'Walking has its own word, with no instrumental.',
          explanation: 'Idem pješice.',
        },
        {
          type: 'type',
          q: 'Jedem juhu ____. (žlica)',
          answer: 'žlicom',
          hint: 'Feminine -a becomes -om.',
          explanation: 'Jedem juhu žlicom.',
        },
        {
          type: 'type',
          q: 'Režem kruh ____. (nož)',
          answer: 'nožem',
          hint: 'Ž is soft, so the ending is not -om.',
          explanation: 'Režem kruh nožem.',
        },
        {
          type: 'type',
          q: 'U London putujem ____. (avion)',
          answer: 'avionom',
          hint: 'Masculine, ending not soft: add -om.',
          explanation: 'U London putujem avionom.',
        },
        {
          type: 'type',
          q: 'Mogu li platiti ____? (kartica)',
          answer: 'karticom',
          hint: 'Feminine -a becomes -om.',
          explanation: 'Mogu li platiti karticom?',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ana ide u školu ___." (by bike)',
        options: ['bicikl', 'biciklom', 'biciklem', 'biciklu'],
        correct: 1,
        explanation: 'The means takes the instrumental; l is not soft: biciklom.',
      },
      {
        q: 'Complete: "Idem na posao ___." (by tram)',
        options: ['tramvajom', 'tramvaju', 'tramvaj', 'tramvajem'],
        correct: 3,
        explanation: 'After the soft j the ending is -em: tramvajem.',
      },
      {
        q: 'Which sentence is correct? (I pay by card.)',
        options: ['Plaćam karticom.', 'Plaćam karticu.', 'Plaćam kartica.', 'Plaćam kartici.'],
        correct: 0,
        explanation: 'How you pay takes the bare instrumental: karticom.',
      },
      {
        q: 'What does "Putujemo u Split vlakom." mean?',
        options: [
          'We are travelling to Split with the train driver.',
          'We are travelling to Split by train.',
          'We are waiting for the train to Split.',
          'We are buying a train ticket to Split.',
        ],
        correct: 1,
        explanation: 'vlakom — by train, the means of travel.',
      },
      {
        q: 'Which sentence is about COMPANY, not a tool?',
        options: ['Idem autom.', 'Pišem olovkom.', 'Idem s prijateljem.', 'Plaćam gotovinom.'],
        correct: 2,
        explanation: 's + instrumental means together with someone: s prijateljem.',
      },
      {
        q: 'Complete: "Kako ideš na fakultet? — ___." (by taxi)',
        options: ['Taksiom', 'Taksi', 'Taksiju', 'Taksijem'],
        correct: 3,
        explanation: 'Taksi adds a j and takes -em: taksijem.',
      },
    ],
    vocab: [
      ['vlak', 'train', 'Putujem vlakom.'],
      ['autobus', 'bus', 'Idem autobusom.'],
      ['tramvaj', 'tram', 'Idem na posao tramvajem.'],
      ['avion', 'plane', 'U London putujem avionom.'],
      ['brod', 'boat, ship', 'Na Hvar idemo brodom.'],
      ['bicikl', 'bicycle', 'Ana ide u školu biciklom.'],
      ['olovka', 'pencil', 'Pišem olovkom.'],
      ['žlica', 'spoon', 'Jedem juhu žlicom.'],
      ['nož', 'knife', 'Režem kruh nožem.'],
      ['kartica', 'card', 'Plaćam karticom.'],
      ['pješice', 'on foot', 'Idem pješice.'],
    ],
  },
};
