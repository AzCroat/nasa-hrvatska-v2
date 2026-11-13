// functions/api/content/_data/b2new/batch03.js
//
// New B2 lessons, batch 03 (Croaticum restructure, stage 5, 2026-11-12). See b2new/index.js.
//
// Razgovarajte s nama! B2, lessons 4–5: the predicate nominative and instrumental,
// comparative idioms, reading culture, indefinite pronouns in every case, and the
// grammatical peculiarities of body-part nouns.
//
// Two truths this batch is careful about. After biti the NOMINATIVE is the normal
// everyday choice (Ona je liječnica) and is never marked wrong; the instrumental after
// biti is correct but bookish. After postati both cases are standard, so no item ever
// offers the nominative beside the instrumental there. And the shorter / longer forms of
// the indefinites (nekoga / nekog, nekomu / nekome) are all standard, so no item offers
// two of them at once.

/** Spine entries for this batch. `masterOrder` is the lesson's final B2 position. */
export const SPINE = [
  {
    id: 'predicate-instrumental',
    masterOrder: 17,
    prerequisites: ['instrumental', 'adjective-agreement'],
    objectives: [
      'Say what someone is in the everyday way: Ona je liječnica',
      'Use the instrumental after postati, smatrati, proglasiti and imenovati: Smatram ga prijateljem',
      'Recognise the bookish instrumental after biti, and keep the nominative after kao and zvati se',
    ],
  },
  {
    id: 'comparative-idioms',
    masterOrder: 18,
    prerequisites: ['comparatives-a2', 'adjective-agreement'],
    objectives: [
      'Understand and use common comparative idioms: zdrav kao dren, gladan kao vuk, spava kao top',
      'Make the adjective agree with the person while the noun after kao stays the same',
      'Know that each adjective has its own fixed image, which English often does not share',
    ],
  },
  {
    id: 'reading-culture',
    masterOrder: 19,
    prerequisites: ['opinions-agreeing', 'comparative-idioms', 'predicate-instrumental'],
    objectives: [
      'Talk about reading: knjižnica and knjižara, e-knjige and tiskane knjige',
      'Know who Marko Marulić was and what Judita is',
      'Give and weigh an opinion: Po mom mišljenju… S jedne strane… s druge strane…',
    ],
  },
  {
    id: 'indefinite-pronouns-cases',
    masterOrder: 21,
    prerequisites: ['indefinites', 'genitive-deep', 'instrumental'],
    objectives: [
      'Put netko, nešto, nitko, ništa, svatko and svašta into every case: nekoga, nečega, nikomu',
      'Split nitko and ništa around a preposition: ni s kim, ni od koga, ni o čemu',
      'Use itko and išta for “anyone at all” in questions',
    ],
  },
  {
    id: 'body-part-nouns',
    masterOrder: 22,
    prerequisites: ['noun-peculiarities-e', 'numbers-nouns', 'comparative-idioms'],
    objectives: [
      'Use the irregular plurals oči and uši with feminine agreement: plave oči',
      'Say what hurts with boli or bole: Boli me oko, bole me oči',
      'Use the genitive plurals očiju, ušiju, ruku, nogu and common body-part expressions',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 17 · Predicate nominative and instrumental
// ─────────────────────────────────────────────────────────
const PREDICATE_INSTRUMENTAL = {
  id: 'predicate-instrumental',
  title: 'Bio je učitelj, postao je ravnateljem',
  subtitle: 'What someone is, becomes, or is considered — nominative or instrumental',
  icon: '🎓',
  level: 'B2',
  duration: '~8 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Is, Becomes, Is Considered',
      body: 'English says "She is a doctor", "He became president", "They consider him a genius" with the same plain noun every time. Croatian notices the difference between the three. With biti (to be) the noun naming what someone is normally stays in the nominative. With verbs of becoming, considering, declaring and appointing, it moves into the instrumental. This lesson shows which verb wants which, and where you have a choice.',
      icon: '🎓',
    },
    {
      type: 'rule',
      title: 'After biti: The Nominative Is Normal',
      body: 'The noun after biti that says what someone is — the predicate nominative — stays in the nominative: Ona je liječnica. Moj otac je bio učitelj. This is the everyday, natural form, and it is never wrong. You will also read the instrumental after biti: Bio je učiteljem dvadeset godina. That is correct too, but bookish — it sounds written, and often suggests a role held for a time. Say the nominative yourself; recognise the instrumental when you meet it.',
      highlight: 'Ona je liječnica',
    },
    {
      type: 'rule',
      title: 'Verbs That Want the Instrumental',
      body: 'Four verbs put what someone becomes or is taken to be into the instrumental — the predicate instrumental. smatrati (to consider): Smatram ga prijateljem. proglasiti (to declare): Proglašen je pobjednikom. imenovati (to appoint): Imenovana je ministricom. postati (to become): Postao je predsjednikom. With the first three the instrumental is the rule. With postati the nominative is also standard (Postao je predsjednik), so both are correct there.',
      highlight: 'Smatram ga prijateljem',
    },
    {
      type: 'table',
      title: 'Which Verb, Which Case',
      headers: ['Verb', 'Example', 'Case'],
      rows: [
        ['biti', 'Ona je liječnica.', 'nominative (everyday)'],
        ['biti', 'Bio je učiteljem.', 'instrumental (bookish)'],
        ['postati', 'Postao je predsjednikom.', 'instrumental or nominative'],
        ['smatrati', 'Smatram ga prijateljem.', 'instrumental'],
        ['proglasiti', 'Proglašen je pobjednikom.', 'instrumental'],
        ['imenovati', 'Imenovana je ministricom.', 'instrumental'],
        ['raditi kao', 'Radi kao konobar.', 'nominative'],
        ['zvati se', 'Zove se Marko.', 'nominative'],
      ],
    },
    {
      type: 'rule',
      title: 'An Adjective Comes Along',
      body: 'When the noun has an adjective, both go into the instrumental together: Smatram ga dobrim čovjekom. Proglašena je najboljom glumicom. In the plural the ending is -im for both: Smatramo ih pravim prijateljima. Leaving the adjective behind ("najbolji igračem") is the commonest slip.',
      highlight: 'Smatram ga dobrim čovjekom',
    },
    {
      type: 'rule',
      title: 'Where the Nominative Stays',
      body: 'Three places never take the predicate instrumental. After kao (as): Radi kao konobar — kao simply links, and the noun stays as it is. After zvati se (to be called): Zove se Marko. And an adjective on its own after biti: Ona je umorna, Bili smo sretni.',
      highlight: 'Radi kao konobar',
    },
    {
      type: 'example',
      title: 'Is and Was',
      items: [
        {
          hr: 'Moja majka je liječnica u splitskoj bolnici.',
          en: 'My mother is a doctor at the Split hospital.',
          note: 'liječnica — the everyday predicate nominative after je',
        },
        {
          hr: 'Djed je četrdeset godina bio učitelj u našem selu.',
          en: 'Grandfather was a teacher in our village for forty years.',
          note: 'učitelj — nominative after bio',
        },
        {
          hr: 'Bio je učiteljem u malom mjestu na otoku.',
          en: 'He was a teacher in a small place on the island.',
          note: 'učiteljem — instrumental after biti: correct, but bookish',
        },
        {
          hr: 'Ljeti radi kao konobar na Hvaru.',
          en: 'In summer he works as a waiter on Hvar.',
          note: 'konobar — nominative after kao',
        },
        {
          hr: 'Nakon izbora postao je predsjednikom stranke.',
          en: 'After the election he became president of the party.',
          note: 'predsjednikom — instrumental after postao',
        },
      ],
    },
    {
      type: 'example',
      title: 'Considered, Declared, Appointed',
      items: [
        {
          hr: 'Svi ga smatraju najboljim prevoditeljem u gradu.',
          en: 'Everyone considers him the best translator in town.',
          note: 'najboljim prevoditeljem — adjective and noun both instrumental after smatrati',
        },
        {
          hr: 'Proglašena je najboljom glumicom festivala.',
          en: 'She was declared the best actress of the festival.',
          note: 'najboljom glumicom — instrumental after proglasiti',
        },
        {
          hr: 'Vlada ga je imenovala veleposlanikom u Kanadi.',
          en: 'The government appointed him ambassador to Canada.',
          note: 'veleposlanikom — instrumental after imenovati',
        },
        {
          hr: 'Zbog te knjige postala je poznatom spisateljicom.',
          en: 'Because of that book she became a famous writer.',
          note: 'poznatom spisateljicom — adjective and noun both instrumental after postala',
        },
        {
          hr: 'Smatram te pravim prijateljem, zato ti sve govorim.',
          en: 'I consider you a true friend, so I tell you everything.',
          note: 'pravim prijateljem — instrumental after smatrati',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which is the everyday way to say "She is a doctor"?',
      options: ['Ona je liječnica.', 'Ona je liječnicu.', 'Ona je liječnice.'],
      correct: 0,
      explanation:
        'After biti the noun naturally stays in the nominative: liječnica. (Liječnicom would be correct but bookish; the other two are wrong.)',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Smatram ga ___." (a good man)',
      options: ['dobrog čovjeka', 'dobrim čovjekom', 'dobrom čovjeku', 'dobri čovjek'],
      correct: 1,
      explanation:
        'Smatrati wants the instrumental, and the adjective goes with the noun: dobrim čovjekom.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Forcing the instrumental after every biti: "Ja sam studentom" sounds odd in conversation — say Ja sam student. (2) The nominative after smatrati or proglasiti: "Smatram ga prijatelj" — it must be Smatram ga prijateljem. (3) Leaving the adjective in the nominative: "Proglašen je najbolji igračem" — both move: najboljim igračem. (4) The instrumental after kao: "Radi kao konobarom" — after kao the noun stays: Radi kao konobar.',
      highlight: 'Smatram ga prijateljem',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Svi je smatraju ___." (a great singer)',
          options: [
            'velika pjevačica',
            'velikom pjevačicom',
            'veliku pjevačicu',
            'velikoj pjevačici',
          ],
          correct: 1,
          explanation:
            'Smatrati takes the instrumental, adjective and noun together: velikom pjevačicom.',
        },
        {
          q: 'Which sentence is natural everyday Croatian?',
          options: [
            'Moj brat je inženjer.',
            'Moj brat je inženjera.',
            'Moj brat je inženjeru.',
            'Moj brat je inženjere.',
          ],
          correct: 0,
          explanation: 'After biti the predicate noun stays in the nominative: inženjer.',
        },
        {
          q: 'Complete: "Proglašen je ___ godine." (best player)',
          options: ['najbolji igrač', 'najboljeg igrača', 'najboljim igračem', 'najboljem igraču'],
          correct: 2,
          explanation: 'Proglasiti takes the instrumental: najboljim igračem.',
        },
        {
          q: 'Complete: "Ljeti radi kao ___." (a waiter)',
          options: ['konobarom', 'konobara', 'konobaru', 'konobar'],
          correct: 3,
          explanation: 'After kao the noun does not change: konobar.',
        },
        {
          q: 'With which verb is the instrumental the rule, not a choice?',
          options: ['zvati se', 'proglasiti', 'raditi kao', 'biti'],
          correct: 1,
          explanation:
            'Proglasiti always takes the instrumental: proglasiti pobjednikom. Biti takes the nominative in everyday speech; zvati se and raditi kao keep the nominative.',
        },
        {
          q: 'What is true of "Bio je učiteljem"?',
          options: [
            'It is wrong: biti never takes the instrumental.',
            'It is correct, but more bookish than "Bio je učitelj".',
            'It means "he became a teacher".',
            'It is the only correct form.',
          ],
          correct: 1,
          explanation:
            'The instrumental after biti is correct but bookish; the nominative is the everyday form.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Nominative or Instrumental — Key Takeaways',
      points: [
        'After biti the nominative is normal: Ona je liječnica',
        'The instrumental after biti is correct but bookish: Bio je učiteljem',
        'smatrati, proglasiti, imenovati + instrumental: Smatram ga prijateljem',
        'postati takes either: postao je predsjednikom / predsjednik',
        'An adjective moves with its noun: najboljim igračem',
        'After kao and zvati se the noun stays in the nominative',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 18 · Comparative idioms
// ─────────────────────────────────────────────────────────
const COMPARATIVE_IDIOMS = {
  id: 'comparative-idioms',
  title: 'Zdrav kao dren',
  subtitle: 'Comparative idioms — hungry as a wolf, silent as a fish, red as a crab',
  icon: '🦊',
  level: 'B2',
  duration: '~7 min',
  color: '#c2410c',
  bg: '#fff7ed',
  slides: [
    {
      type: 'intro',
      title: 'Healthy as a Cornel Tree',
      body: 'Every language describes people by comparing them with animals and things: English says "hungry as a horse" and "sleep like a log". Croatian has its own set, called poredbeni frazemi — comparative idioms. They are fixed: each adjective comes with its own image, and the image is often not the English one. A Croatian who has slept well slept like a cannon; one who is very healthy is as healthy as a cornel tree, whose wood is famously hard.',
      icon: '🦊',
    },
    {
      type: 'rule',
      title: 'The Shape: Adjective + kao + Noun',
      body: 'Most comparative idioms are an adjective, the word kao (like, as) and a noun: zdrav kao dren, gladan kao vuk, hladan kao led. The adjective describes the person, so it agrees with them: Marko je gladan kao vuk, Ana je gladna kao vuk. The noun after kao is part of the fixed image and stays in the nominative whoever you are talking about.',
      highlight: 'Ana je gladna kao vuk',
    },
    {
      type: 'rule',
      title: 'Some Are Built on a Verb',
      body: 'A few idioms are a verb + kao + noun: spavati kao top (to sleep very deeply — literally like a cannon), šutjeti kao riba (to say nothing at all — like a fish). The verb changes as usual: Beba spava kao top. Pitao sam ga, ali šutio je kao riba.',
      highlight: 'spavati kao top',
    },
    {
      type: 'table',
      title: 'Common Comparative Idioms',
      headers: ['Idiom', 'Literally', 'Meaning'],
      rows: [
        ['zdrav kao dren', 'healthy as a cornel tree', 'in excellent health'],
        ['gladan kao vuk', 'hungry as a wolf', 'very hungry'],
        ['spavati kao top', 'sleep like a cannon', 'sleep very deeply'],
        ['šutjeti kao riba', 'be silent as a fish', 'say nothing at all'],
        ['crven kao rak', 'red as a crab', 'very red (sun or shame)'],
        ['hladan kao led', 'cold as ice', 'cold, unfriendly'],
        ['mokar kao miš', 'wet as a mouse', 'soaked through'],
        ['lukav kao lisica', 'cunning as a fox', 'very cunning'],
        ['tvrdoglav kao mazga', 'stubborn as a mule', 'very stubborn'],
        ['spor kao puž', 'slow as a snail', 'very slow'],
        ['brz kao munja', 'fast as lightning', 'very fast'],
        ['sam kao prst', 'alone as a finger', 'completely alone'],
        ['blijed kao krpa', 'pale as a rag', 'very pale'],
      ],
    },
    {
      type: 'rule',
      title: 'Learn Them as One Word',
      body: 'Because the image is fixed, swapping it breaks the idiom: you are crven kao rak, never "crven kao vuk". Learn each one as a single unit, the way you learn a long word. And do not translate an English image word for word: English sleeps like a log and comes home like a drowned rat, Croatian spava kao top and dolazi kući mokar kao miš.',
      highlight: 'crven kao rak',
    },
    {
      type: 'example',
      title: 'Idioms About People',
      items: [
        {
          hr: 'Djed ima devedeset godina, a zdrav je kao dren.',
          en: 'Grandad is ninety, and he is in excellent health.',
          note: 'zdrav kao dren — very healthy',
        },
        {
          hr: 'Nakon planinarenja bila sam gladna kao vuk.',
          en: 'After the hike I was as hungry as a wolf.',
          note: 'gladna agrees with a woman speaking; vuk does not change',
        },
        {
          hr: 'Beba je cijelu noć spavala kao top.',
          en: 'The baby slept soundly all night.',
          note: 'spavala kao top — slept very deeply',
        },
        {
          hr: 'Pitao sam ga što se dogodilo, ali šutio je kao riba.',
          en: 'I asked him what had happened, but he said nothing at all.',
          note: 'šutio kao riba — kept completely silent',
        },
        {
          hr: 'Prvi dan na plaži izgorio je na suncu pa je bio crven kao rak.',
          en: 'On his first day at the beach he got sunburnt and was as red as a crab.',
          note: 'crven kao rak — very red',
        },
        {
          hr: 'Zaboravila sam kišobran i stigla sam kući mokra kao miš.',
          en: 'I forgot my umbrella and got home soaked through.',
          note: 'mokra agrees with the woman speaking; miš stays the same',
        },
      ],
    },
    {
      type: 'example',
      title: 'Character and Mood',
      items: [
        {
          hr: 'Pazi s njim, lukav je kao lisica.',
          en: 'Be careful with him, he is as cunning as a fox.',
          note: 'lukav kao lisica — very cunning',
        },
        {
          hr: 'Nova šefica je prema svima hladna kao led.',
          en: 'The new boss is as cold as ice towards everyone.',
          note: 'hladna agrees with šefica',
        },
        {
          hr: 'Moj brat je tvrdoglav kao mazga i nikad ne mijenja mišljenje.',
          en: 'My brother is as stubborn as a mule and never changes his mind.',
          note: 'tvrdoglav kao mazga — very stubborn',
        },
        {
          hr: 'Kad su se svi preselili, ostao je sam kao prst.',
          en: 'When everyone moved away, he was left completely alone.',
          note: 'sam kao prst — completely alone',
        },
        {
          hr: 'Kad je čula vijest, bila je blijeda kao krpa.',
          en: 'When she heard the news, she was as pale as a rag.',
          note: 'blijeda agrees with the woman; krpa stays the same',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What does "šuti kao riba" mean?',
      options: ['He says nothing at all.', 'He swims well.', 'He eats a lot.'],
      correct: 0,
      explanation: 'Šutjeti kao riba is to stay completely silent — fish make no sound.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Ana je gladna kao ___."',
      options: ['vuka', 'vuk', 'vukom', 'vuku'],
      correct: 1,
      explanation:
        'The noun after kao is part of the fixed image and stays in the nominative: kao vuk. Only the adjective (gladna) agrees with Ana.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Forgetting to make the adjective agree: "Ana je zdrav kao dren" — it is Ana je zdrava kao dren. (2) Changing the noun after kao: "gladna kao vuka" — it stays kao vuk. (3) Mixing the images: "šuti kao top" — each idiom has its own noun: šuti kao riba, spava kao top. (4) Translating the English image: Croatian does not sleep like a log; it spava kao top.',
      highlight: 'Ana je zdrava kao dren',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Djed je zdrav kao ___."',
          options: ['vuk', 'dren', 'rak', 'led'],
          correct: 1,
          explanation: 'The idiom is zdrav kao dren — healthy as a cornel tree.',
        },
        {
          q: 'What does "spavati kao top" mean?',
          options: [
            'to sleep very deeply',
            'to snore loudly',
            'to sleep badly',
            'to go to bed late',
          ],
          correct: 0,
          explanation: 'Spavati kao top is to sleep soundly, without waking.',
        },
        {
          q: 'Complete: "Marija je bila ___ kao miš."',
          options: ['mokar', 'mokri', 'mokra', 'mokro'],
          correct: 2,
          explanation: 'The adjective agrees with Marija, feminine singular: mokra.',
        },
        {
          q: 'Which idiom describes a cunning person?',
          options: ['hladan kao led', 'spor kao puž', 'sam kao prst', 'lukav kao lisica'],
          correct: 3,
          explanation: 'Lukav kao lisica — cunning as a fox.',
        },
        {
          q: 'Complete: "Nakon trčanja Ivan je bio ___ kao vuk."',
          options: ['gladan', 'zdrav', 'mokar', 'crven'],
          correct: 0,
          explanation: 'The wolf belongs to hunger: gladan kao vuk.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Ona je blijeda kao krpu.',
            'Ona je blijeda kao krpa.',
            'Ona je blijed kao krpa.',
            'Ona je blijeda kao krpom.',
          ],
          correct: 1,
          explanation:
            'The adjective agrees with ona (blijeda); the noun after kao stays nominative (krpa).',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Comparative Idioms — Key Takeaways',
      points: [
        'Shape: adjective + kao + noun — gladan kao vuk',
        'The adjective agrees with the person: gladna, gladni',
        'The noun after kao never changes',
        'Some use a verb: spavati kao top, šutjeti kao riba',
        'Each adjective has its own fixed image — learn them as units',
        'Do not translate English images word for word',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 19 · Reading culture
// ─────────────────────────────────────────────────────────
const READING_CULTURE = {
  id: 'reading-culture',
  title: 'Tko čita, ne skita',
  subtitle: 'Libraries and bookshops, e-books and paper, Marulić and the book fairs',
  icon: '📚',
  level: 'B2',
  duration: '~8 min',
  color: '#0f766e',
  bg: '#f0fdfa',
  slides: [
    {
      type: 'intro',
      title: 'Who Reads Does Not Loaf About',
      body: 'Tko čita, ne skita is an old Croatian saying: a person who reads does not wander about idly — reading keeps you out of mischief. This lesson gives you the words to talk about books and reading, a little of the history of Croatian literature, and the phrases you need to give and weigh an opinion — for example on whether the e-book will replace the printed one.',
      icon: '📚',
    },
    {
      type: 'rule',
      title: 'Library or Bookshop?',
      body: 'The classic trap: knjižnica is the LIBRARY, where you borrow books (posuditi knjigu) and return them (vratiti knjigu). Knjižara is the BOOKSHOP, where you buy them. A čitaonica is a reading room. The person who reads is a čitatelj (čitateljica); the device you read e-books on is a čitač. The person who works in a library is a knjižničar (knjižničarka).',
      highlight: 'knjižnica is the LIBRARY',
    },
    {
      type: 'rule',
      title: 'Words for Books',
      body: 'Roman is a NOVEL — any long work of fiction, not a love story. Pripovijetka is a short story, zbirka pjesama a collection of poems, ep an epic poem. The person who writes is a pisac or a spisateljica; the publishing house is a nakladnik. A book can be tiskana (printed) or an e-knjiga. In a Croatian title only the first word and any names take a capital letter: Priče iz davnine.',
      highlight: 'Roman is a NOVEL',
    },
    {
      type: 'rule',
      title: 'Marko Marulić and Judita',
      body: 'Marko Marulić (1450–1524) was born and lived in Split, and he is called the father of Croatian literature — otac hrvatske književnosti. In 1501 he finished Judita, an epic poem retelling the biblical story of Judith, who saves her city from an invading army. It was printed in Venice in 1521. Judita is the first great literary work written in Croatian, and Marulić says so himself: he wrote it u versih harvacki složena — composed in Croatian verse.',
      highlight: 'otac hrvatske književnosti',
    },
    {
      type: 'rule',
      title: 'Book Fairs',
      body: 'Croatia has two big book fairs. Interliber is held in Zagreb. The Sa(n)jam knjige u Istri is held every year in Pula, and its name is a play on words: sajam is a fair, sanjam means "I dream" — so the title reads both as "book fair" and "I dream of books". At a sajam knjiga readers meet writers, hear talks and buy new titles.',
      highlight: 'Sa(n)jam knjige u Istri',
    },
    {
      type: 'table',
      title: 'Giving and Weighing an Opinion',
      headers: ['Phrase', 'Meaning'],
      rows: [
        ['Po mom mišljenju…', 'In my opinion…'],
        ['Smatram da…', 'I believe that…'],
        ['S jedne strane… s druge strane…', 'On the one hand… on the other…'],
        ['Slažem se s tobom.', 'I agree with you.'],
        ['Ne slažem se s tim.', 'I do not agree with that.'],
        ['Meni je draža tiskana knjiga.', 'I prefer a printed book.'],
      ],
    },
    {
      type: 'example',
      title: 'Talking About Books',
      items: [
        {
          hr: 'Svaki tjedan posudim dvije knjige u gradskoj knjižnici.',
          en: 'Every week I borrow two books from the city library.',
          note: 'knjižnici — the library, where you borrow',
        },
        {
          hr: 'Novi roman kupila sam u knjižari na glavnom trgu.',
          en: 'I bought the new novel in the bookshop on the main square.',
          note: 'knjižari — the bookshop, where you buy',
        },
        {
          hr: 'Na putovanjima čitam e-knjige jer je čitač lagan.',
          en: 'When travelling I read e-books because the e-reader is light.',
          note: 'čitač — the device, not the person',
        },
        {
          hr: 'Marko Marulić napisao je Juditu 1501. godine u Splitu.',
          en: 'Marko Marulić wrote Judita in 1501 in Split.',
          note: 'Juditu — the title in the accusative, as the object',
        },
        {
          hr: 'Marulića zovu ocem hrvatske književnosti.',
          en: 'Marulić is called the father of Croatian literature.',
          note: 'ocem — instrumental: they call him something',
        },
        {
          hr: 'Svake godine u Puli održava se Sa(n)jam knjige u Istri.',
          en: 'Every year the Istria Book Fair is held in Pula.',
          note: 'održava se — is held',
        },
      ],
    },
    {
      type: 'example',
      title: 'Opinions on Reading',
      items: [
        {
          hr: 'Po mom mišljenju, tiskana knjiga ima dušu koju ekran nema.',
          en: 'In my opinion, a printed book has a soul that a screen does not.',
          note: 'po mom mišljenju — po + locative',
        },
        {
          hr: 'S jedne strane e-knjige su jeftinije, ali s druge strane mnogi radije listaju papir.',
          en: 'On the one hand e-books are cheaper, but on the other many people prefer turning paper pages.',
          note: 'radije — rather, preferably',
        },
        {
          hr: 'Smatram da djeca više čitaju ako im roditelji čitaju naglas.',
          en: 'I believe children read more if their parents read aloud to them.',
          note: 'naglas — aloud',
        },
        {
          hr: 'Na sajmu sam upoznala spisateljicu i dobila potpis u knjizi.',
          en: 'At the fair I met a writer and got her signature in my book.',
          note: 'sajmu — locative of sajam',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Where do you borrow a book?',
      options: ['u knjižari', 'u knjižnici', 'u tiskari'],
      correct: 1,
      explanation: 'You borrow in the knjižnica (library) and buy in the knjižara (bookshop).',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is Judita?',
      options: [
        'a novel by August Šenoa',
        'an epic poem by Marko Marulić',
        'a collection of fairy tales',
        'a modern play',
      ],
      correct: 1,
      explanation: 'Judita is Marulić’s epic poem, finished in 1501.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Confusing the two shops: "Kupio sam knjigu u knjižnici" — you buy in a knjižara; in a knjižnica you borrow. (2) Reading roman as "romance": Čitam roman means I am reading a novel of any kind. (3) Calling the device a čitatelj: the čitatelj is the person; the device is a čitač. (4) Capitalising every word of a title: "Priče Iz Davnine" — Croatian writes Priče iz davnine.',
      highlight: 'you buy in a knjižara',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Where do you borrow books?',
          options: ['u knjižari', 'u knjižnici', 'u tiskari', 'na kiosku'],
          correct: 1,
          explanation: 'Knjižnica is the library, where you borrow books.',
        },
        {
          q: 'Who is called the father of Croatian literature?',
          options: ['Ivan Gundulić', 'August Šenoa', 'Marko Marulić', 'Miroslav Krleža'],
          correct: 2,
          explanation: 'Marko Marulić, author of Judita, is called otac hrvatske književnosti.',
        },
        {
          q: 'What does "Tko čita, ne skita" say?',
          options: [
            'Reading keeps you from idleness and mischief.',
            'Readers travel a lot.',
            'Reading is only for children.',
            'Books are expensive.',
          ],
          correct: 0,
          explanation: 'Skitati is to wander about idly: a reader does not loaf about.',
        },
        {
          q: 'In which year did Marulić finish Judita?',
          options: ['1450', '1521', '1601', '1501'],
          correct: 3,
          explanation: 'Judita was finished in 1501 and printed in Venice in 1521.',
        },
        {
          q: 'Complete: "Po mom ___, tiskane knjige su ljepše."',
          options: ['mišljenje', 'mišljenja', 'mišljenju', 'mišljenjem'],
          correct: 2,
          explanation: 'Po takes the locative here: po mom mišljenju.',
        },
        {
          q: 'Where is the Sa(n)jam knjige u Istri held?',
          options: ['u Puli', 'u Splitu', 'u Osijeku', 'u Zadru'],
          correct: 0,
          explanation: 'The Istrian book fair is held every year in Pula.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Reading Culture — Key Takeaways',
      points: [
        'knjižnica = library (borrow); knjižara = bookshop (buy)',
        'roman = novel; čitatelj = reader; čitač = e-reader',
        'Marko Marulić of Split is the father of Croatian literature',
        'Judita, an epic poem, was finished in 1501',
        'Book fairs: Interliber in Zagreb, Sa(n)jam knjige u Istri in Pula',
        'Opinions: Po mom mišljenju… S jedne strane… s druge strane…',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 21 · Indefinite pronouns in every case
// ─────────────────────────────────────────────────────────
const INDEFINITE_CASES = {
  id: 'indefinite-pronouns-cases',
  title: 'Nekoga, ničega, ni s kim',
  subtitle: 'Someone, nothing, everyone, anything — in every case, and with prepositions',
  icon: '❓',
  level: 'B2',
  duration: '~8 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'Someone, No One, Everyone',
      body: 'You already know netko (someone) and nešto (something). At B2 they have to follow the sentence into every case: I am waiting for SOMEONE, I am afraid of SOMETHING, I talked to NO ONE. Good news: these words are built on tko and što and decline exactly like them. One thing is new and genuinely Croatian — with a preposition, nitko and ništa split in two: ni s kim, ni o čemu.',
      icon: '❓',
    },
    {
      type: 'rule',
      title: 'Four Prefixes',
      body: 'Each word is a prefix + tko (who) or što (what). ne- means some: netko, nešto. ni- means no: nitko, ništa. sva- means every / all sorts: svatko (everyone), svašta (all sorts of things). i- means any at all: itko, išta. The endings are the endings of tko and što: koga → nekoga, nikoga; čega → nečega, ničega.',
      highlight: 'ni- means no',
    },
    {
      type: 'table',
      title: 'Built on tko (people)',
      headers: ['Case', 'tko', 'netko', 'nitko', 'svatko'],
      rows: [
        ['nominative', 'tko', 'netko', 'nitko', 'svatko'],
        ['genitive', 'koga', 'nekoga', 'nikoga', 'svakoga'],
        ['dative', 'komu', 'nekomu', 'nikomu', 'svakomu'],
        ['accusative', 'koga', 'nekoga', 'nikoga', 'svakoga'],
        ['locative', 'o komu', 'o nekomu', 'ni o komu', 'o svakomu'],
        ['instrumental', 's kim', 's nekim', 'ni s kim', 'sa svakim'],
      ],
    },
    {
      type: 'table',
      title: 'Built on što (things)',
      headers: ['Case', 'što', 'nešto', 'ništa', 'svašta'],
      rows: [
        ['nominative', 'što', 'nešto', 'ništa', 'svašta'],
        ['genitive', 'čega', 'nečega', 'ničega', 'svačega'],
        ['dative', 'čemu', 'nečemu', 'ničemu', 'svačemu'],
        ['accusative', 'što', 'nešto', 'ništa', 'svašta'],
        ['locative', 'o čemu', 'o nečemu', 'ni o čemu', 'o svačemu'],
        ['instrumental', 'čime', 'nečim', 'ničim', 'svačim'],
      ],
    },
    {
      type: 'rule',
      title: 'Short and Long Forms',
      body: 'Several forms have a short and a long version, and all are standard: nekoga or nekog, nekomu or nekome or nekom, nikomu or nikome, svakoga or svakog. Use whichever you hear around you — they mean exactly the same.',
      highlight: 'nekoga or nekog',
    },
    {
      type: 'rule',
      title: 'The B2 Point: ni + Preposition + Pronoun',
      body: 'When nitko or ništa follows a preposition, standard Croatian splits the word and puts the preposition in the middle: ni s kim (with no one), ni od koga (from no one), ni o čemu (about nothing), ni za što (for nothing), ni u što (in nothing). Forms like "s nikim" are heard in casual speech but are not standard. The rest of the sentence is negated as usual: Ni s kim nisam razgovarao.',
      highlight: 'ni s kim',
    },
    {
      type: 'rule',
      title: 'Double Negation, and “Anyone at All”',
      body: 'Croatian negates twice: Nitko ne zna. Ništa ne vidim. Nikoga nisam sreo. — the ni- word AND the verb. For "anyone at all" in a question, use itko and išta: Je li itko zvao? Ima li išta za jelo? And svašta means "all sorts of things": Svašta se dogodilo.',
      highlight: 'Nitko ne zna',
    },
    {
      type: 'example',
      title: 'Someone and Something',
      items: [
        {
          hr: 'Netko te traži na telefonu.',
          en: 'Someone is asking for you on the phone.',
          note: 'netko — someone, the subject',
        },
        {
          hr: 'Čekam nekoga ispred kina.',
          en: 'I am waiting for someone in front of the cinema.',
          note: 'nekoga — accusative of netko',
        },
        {
          hr: 'Razgovarala sam s nekim iz tvoje firme.',
          en: 'I talked to someone from your company.',
          note: 'nekim — instrumental of netko after s',
        },
        {
          hr: 'Bojim se nečega, ali ne znam čega.',
          en: 'I am afraid of something, but I do not know what.',
          note: 'nečega — genitive of nešto after bojati se',
        },
        {
          hr: 'Svatko ima pravo na svoje mišljenje.',
          en: 'Everyone has the right to their own opinion.',
          note: 'svatko — everyone, the subject',
        },
        {
          hr: 'Na tržnici smo kupili svašta.',
          en: 'We bought all sorts of things at the market.',
          note: 'svašta — all sorts of things',
        },
      ],
    },
    {
      type: 'example',
      title: 'No One and Nothing',
      items: [
        {
          hr: 'Ne poznajem nikoga u ovom gradu.',
          en: 'I do not know anyone in this town.',
          note: 'nikoga — accusative of nitko, with ne on the verb',
        },
        {
          hr: 'Ni s kim nisam razgovarao o tome.',
          en: 'I have not talked to anyone about it.',
          note: 'ni s kim — the preposition sits between ni and kim',
        },
        {
          hr: 'Ni o čemu ne razmišljam, samo se odmaram.',
          en: 'I am not thinking about anything, just resting.',
          note: 'ni o čemu — the preposition sits between ni and čemu',
        },
        {
          hr: 'Ni od koga nisam dobio poruku.',
          en: 'I did not get a message from anyone.',
          note: 'ni od koga — split around od',
        },
        {
          hr: 'Je li itko vidio moje ključeve?',
          en: 'Has anyone seen my keys?',
          note: 'itko — anyone at all, in a question',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Nisam razgovarao ___." (with anyone)',
      options: ['s nikim', 'ni s kim', 's nikoga', 'ni s koga'],
      correct: 1,
      explanation: 'With a preposition, nitko splits: ni s kim — ni, the preposition, then kim.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Bojim se ___." (of something)',
      options: ['nešto', 'nečega', 'nečemu', 'nečim'],
      correct: 1,
      explanation: 'Bojati se takes the genitive: nečega.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving nitko whole after a preposition: "s nikim" — standard Croatian says ni s kim. (2) Forgetting the second negative: "Nitko zna" — it is Nitko ne zna. (3) Leaving the pronoun in the nominative: "Čekam netko" — the object takes the accusative: Čekam nekoga. (4) Using the wrong case after the verb: "Bojim se nešto" — bojati se takes the genitive: nečega.',
      highlight: 'ni s kim',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Ne poznajem ___ ovdje."',
          options: ['nitko', 'nikoga', 'nikomu', 'nikim'],
          correct: 1,
          explanation: 'The object of poznavati, a person, in the accusative: nikoga.',
        },
        {
          q: 'Complete: "Ni ___ nisam dobila poruku." (from anyone)',
          options: ['od koga', 'od nikoga', 'koga od', 'od kim'],
          correct: 0,
          explanation: 'Ni, then the preposition od, then the genitive koga.',
        },
        {
          q: 'Complete: "Razgovarala sam s ___ iz banke."',
          options: ['netko', 'nekoga', 'nekim', 'nekomu'],
          correct: 2,
          explanation: 'S + instrumental: nekim.',
        },
        {
          q: 'Which sentence is standard Croatian?',
          options: [
            'Ne razmišljam o ničemu.',
            'Razmišljam ni o čemu.',
            'Ne razmišljam o ništa.',
            'Ne razmišljam ni o čemu.',
          ],
          correct: 3,
          explanation:
            'The split form ni o čemu, with the verb negated too: Ne razmišljam ni o čemu.',
        },
        {
          q: 'Complete: "___ ne zna gdje su ključevi."',
          options: ['Nitko', 'Nikoga', 'Nikomu', 'Nikim'],
          correct: 0,
          explanation: 'The subject is in the nominative: Nitko ne zna.',
        },
        {
          q: 'Complete: "Je li ___ zvao dok me nije bilo?"',
          options: ['itko', 'ikoga', 'ikomu', 'ikim'],
          correct: 0,
          explanation: 'Itko — anyone at all — is the subject here, so nominative.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Indefinite Pronouns — Key Takeaways',
      points: [
        'ne- some, ni- no, sva- every, i- any: netko, nitko, svatko, itko',
        'They decline like tko and što: nekoga, ničega, svakomu',
        'Short and long forms are both standard: nekoga / nekog',
        'With a preposition, nitko and ništa split: ni s kim, ni o čemu',
        'Double negation: Nitko ne zna. Ništa ne vidim.',
        'itko and išta in questions: Je li itko zvao?',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 22 · Body-part nouns
// ─────────────────────────────────────────────────────────
const BODY_PART_NOUNS = {
  id: 'body-part-nouns',
  title: 'Oči, uši, ruke, noge',
  subtitle: 'The odd plurals of eye and ear, what hurts, and expressions with body parts',
  icon: '👁️',
  level: 'B2',
  duration: '~8 min',
  color: '#be123c',
  bg: '#fff1f2',
  slides: [
    {
      type: 'intro',
      title: 'Two Eyes Are Not Two "Oka"',
      body: 'Most nouns form their plural regularly. A few body parts do not, because we have two of them and the language kept an old way of counting pairs. Oko (eye) and uho (ear) are neuter in the singular, but their everyday plurals oči and uši behave like FEMININE nouns. Ruka (hand, arm) and noga (leg, foot) are regular, but their genitive plurals are ruku and nogu. This lesson sorts all of that out, and adds what you need at the doctor: what hurts.',
      icon: '👁️',
    },
    {
      type: 'rule',
      title: 'oko → oči, uho → uši',
      body: 'In the singular: oko (eye), uho (ear) — neuter: lijevo oko, desno uho. In the plural: oči, uši — and these are feminine, like stvari. So an adjective in the plural takes the feminine ending -e: plave oči, velike uši, and Oči su mi umorne. Saying "plavi oči" is the commonest slip.',
      highlight: 'plave oči',
    },
    {
      type: 'table',
      title: 'The Plurals in Every Case',
      headers: ['Case', 'oči (eyes)', 'uši (ears)', 'ruke (hands)', 'noge (legs)'],
      rows: [
        ['nominative', 'oči', 'uši', 'ruke', 'noge'],
        ['genitive', 'očiju', 'ušiju', 'ruku', 'nogu'],
        ['dative', 'očima', 'ušima', 'rukama', 'nogama'],
        ['accusative', 'oči', 'uši', 'ruke', 'noge'],
        ['locative', 'očima', 'ušima', 'rukama', 'nogama'],
        ['instrumental', 'očima', 'ušima', 'rukama', 'nogama'],
      ],
    },
    {
      type: 'rule',
      title: 'Counting Pairs: dva oka, dvije ruke',
      body: 'After dva, tri and četiri, eye and ear use the form you also find in the genitive singular: dva oka, dva uha. Hand and leg are feminine, so they take dvije: dvije ruke, dvije noge. So a face has dva oka, but you say Ima plave oči. Remember too the genitive plurals ruku and nogu — no extra -a: Padam s nogu.',
      highlight: 'dva oka',
    },
    {
      type: 'rule',
      title: 'What Hurts: boli or bole',
      body: 'Croatian says "it hurts me": the body part is the subject and the person is me, te, ga, je. One thing hurts → boli: Boli me glava. Boli me oko. Several things hurt → bole: Bole me oči. Bole me noge. In the past the participle agrees with the body part: Boljela me glava. Boljele su me noge.',
      highlight: 'Bole me oči',
    },
    {
      type: 'table',
      title: 'Expressions with Body Parts',
      headers: ['Expression', 'Meaning'],
      rows: [
        ['u četiri oka', 'in private, just the two of us'],
        ['zaljubljen do ušiju', 'head over heels in love'],
        ['imati zlatne ruke', 'to be very skilful with one’s hands'],
        ['padati s nogu', 'to be dead tired'],
        ['ne vjerovati svojim očima', 'not to believe one’s eyes'],
        ['ruku na srce', 'hand on heart, honestly'],
      ],
    },
    {
      type: 'example',
      title: 'Eyes, Ears and Pain',
      items: [
        {
          hr: 'Moja kći ima plave oči i duge trepavice.',
          en: 'My daughter has blue eyes and long eyelashes.',
          note: 'plave — feminine plural, agreeing with oči',
        },
        {
          hr: 'Oči su mi crvene jer sam cijelu noć čitao.',
          en: 'My eyes are red because I read all night.',
          note: 'crvene — feminine plural, agreeing with oči',
        },
        {
          hr: 'Boli me lijevo oko pa idem liječniku.',
          en: 'My left eye hurts, so I am going to the doctor.',
          note: 'boli — one eye, singular verb; lijevo agrees with neuter oko',
        },
        {
          hr: 'Nakon dugog izleta bole me noge.',
          en: 'After the long hike my legs hurt.',
          note: 'bole — several legs, plural verb',
        },
        {
          hr: 'Dijete je nacrtalo lice s dva oka, ali samo jednim uhom.',
          en: 'The child drew a face with two eyes but only one ear.',
          note: 'oka — the counting form after dva',
        },
        {
          hr: 'Jučer su me boljele uši od glasne glazbe.',
          en: 'Yesterday my ears hurt from the loud music.',
          note: 'boljele — feminine plural participle, agreeing with uši',
        },
      ],
    },
    {
      type: 'example',
      title: 'Expressions in Use',
      items: [
        {
          hr: 'Ne mogu vjerovati svojim očima!',
          en: 'I cannot believe my eyes!',
          note: 'očima — dative plural after vjerovati',
        },
        {
          hr: 'Djed ima zlatne ruke, sve popravi sam.',
          en: 'Grandad is very good with his hands; he fixes everything himself.',
          note: 'zlatne ruke — skilful hands',
        },
        {
          hr: 'O tome ćemo razgovarati u četiri oka.',
          en: 'We will talk about it in private.',
          note: 'u četiri oka — in private',
        },
        {
          hr: 'Zaljubljen je do ušiju u djevojku iz susjedstva.',
          en: 'He is head over heels in love with the girl next door.',
          note: 'ušiju — genitive plural after do',
        },
        {
          hr: 'Danas sam radila dvanaest sati i padam s nogu.',
          en: 'Today I worked twelve hours and I am dead tired.',
          note: 'nogu — genitive plural after s',
        },
        {
          hr: 'Ruku na srce, film mi se nije svidio.',
          en: 'Honestly, I did not like the film.',
          note: 'ruku na srce — hand on heart',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Ana ima ___ oči."',
      options: ['zeleni', 'zelene', 'zelena', 'zeleno'],
      correct: 1,
      explanation: 'Oči is a feminine plural, so the adjective takes -e: zelene oči.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Nakon trčanja ___ me noge."',
      options: ['boli', 'bole', 'boljeti', 'bolim'],
      correct: 1,
      explanation: 'Noge is plural, so the verb is plural too: bole.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) A masculine ending on the adjective: "plavi oči" — oči is feminine plural, so plave oči. (2) A singular verb for several body parts: "Boli me noge" — it is Bole me noge; for one leg, Boli me noga. (3) Using the counting form as the plural: "Oka su mi plava" — the plural is oči: Oči su mi plave; oka appears only after dva, tri, četiri. (4) Adding -a to the genitive plural: "Padam s noga" — it is Padam s nogu.',
      highlight: 'plave oči',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Marko ima ___ oči."',
          options: ['smeđi', 'smeđe', 'smeđa', 'smeđo'],
          correct: 1,
          explanation: 'Oči is feminine plural: smeđe oči.',
        },
        {
          q: 'Complete: "Jako me ___ glava."',
          options: ['bole', 'boli', 'bolim', 'boljeti'],
          correct: 1,
          explanation: 'One head hurts — singular verb: boli.',
        },
        {
          q: 'Complete: "Na crtežu lice ima dva ___."',
          options: ['oka', 'oči', 'očiju', 'oko'],
          correct: 0,
          explanation: 'After dva the eye takes the counting form: dva oka.',
        },
        {
          q: 'What does "u četiri oka" mean?',
          options: [
            'wearing glasses',
            'very carefully',
            'in private, just the two of us',
            'at first sight',
          ],
          correct: 2,
          explanation: 'Razgovarati u četiri oka is to talk privately, face to face.',
        },
        {
          q: 'Complete: "Zaljubljen je do ___."',
          options: ['uši', 'ušima', 'uha', 'ušiju'],
          correct: 3,
          explanation: 'Do takes the genitive; the genitive plural of uši is ušiju.',
        },
        {
          q: 'Which sentence is correct?',
          options: ['Bole me oči.', 'Boli me oči.', 'Bole me oko.', 'Boli me očiju.'],
          correct: 0,
          explanation: 'Two eyes — a plural subject — need the plural verb: Bole me oči.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Body-Part Nouns — Key Takeaways',
      points: [
        'oko → oči, uho → uši: feminine in the plural — plave oči',
        'Genitive plurals: očiju, ušiju, ruku, nogu',
        'Counting: dva oka, dva uha, dvije ruke, dvije noge',
        'One thing hurts: boli me; several: bole me',
        'Past: boljela me glava, boljele su me noge',
        'Expressions: u četiri oka, zlatne ruke, padati s nogu, ruku na srce',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsB2.js). */
export const LESSONS = [
  PREDICATE_INSTRUMENTAL,
  COMPARATIVE_IDIOMS,
  READING_CULTURE,
  INDEFINITE_CASES,
  BODY_PART_NOUNS,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'predicate-instrumental': {
    worked: [
      {
        title: 'Considered: Instrumental, With Its Adjective',
        problem: 'Prevedi: "Everyone considers her an excellent doctor."',
        en: 'Everyone considers her an excellent doctor.',
        steps: [
          { label: 'The verb', text: 'to consider = smatrati: svi smatraju.' },
          { label: 'Her', text: 'The object, as a clitic: je — second in the sentence.' },
          {
            label: 'What she is considered',
            text: 'smatrati wants the instrumental, adjective and noun together: odlična liječnica → odličnom liječnicom.',
          },
        ],
        answer: 'Svi je smatraju odličnom liječnicom.',
      },
      {
        title: 'Was, Then Became',
        problem: 'Prevedi: "My father was a teacher, and then he became headmaster."',
        en: 'My father was a teacher, and then he became headmaster.',
        steps: [
          {
            label: 'Was a teacher',
            text: 'After biti the everyday choice is the nominative: bio je učitelj.',
          },
          {
            label: 'Became headmaster',
            text: 'postati takes the instrumental: ravnatelj → ravnateljem.',
          },
          { label: 'Join them', text: 'a zatim — and then.' },
        ],
        answer: 'Moj otac je bio učitelj, a zatim je postao ravnateljem.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Svi ga smatraju ___. (a genius)',
          options: ['genij', 'genijem', 'genija', 'geniju'],
          correct: 1,
          hint: 'smatrati wants the instrumental.',
          explanation: 'genijem — the instrumental of genij.',
        },
        {
          q: 'Moja teta je ___. (a nurse)',
          options: [
            'medicinska sestra',
            'medicinsku sestru',
            'medicinske sestre',
            'medicinskoj sestri',
          ],
          correct: 0,
          hint: 'After je, the everyday choice is the subject form.',
          explanation: 'medicinska sestra — the predicate nominative after biti.',
        },
        {
          q: 'Proglasili su ga ___. (a hero)',
          options: ['junak', 'junaka', 'junakom', 'junaku'],
          correct: 2,
          hint: 'proglasiti wants the instrumental.',
          explanation: 'junakom — the instrumental of junak.',
        },
        {
          q: 'Radi kao ___. (a driver)',
          options: ['vozač', 'vozačem', 'vozača', 'vozaču'],
          correct: 0,
          hint: 'After kao nothing changes.',
          explanation: 'vozač — the noun after kao stays in the nominative.',
        },
        {
          q: 'Kad je postao ___, imao je trideset godina. (a father)',
          options: ['ocem', 'oca', 'ocu', 'oče'],
          correct: 0,
          hint: 'postati + instrumental; the vowel in the middle of otac drops.',
          explanation: 'ocem — the instrumental of otac.',
        },
        {
          q: 'Smatram je ___. (a reliable colleague)',
          options: [
            'pouzdana kolegica',
            'pouzdanom kolegicom',
            'pouzdanu kolegicu',
            'pouzdane kolegice',
          ],
          correct: 1,
          hint: 'Both words move into the instrumental.',
          explanation: 'pouzdanom kolegicom — adjective and noun in the instrumental.',
        },
        {
          q: 'Imenovali su je ___. (spokesperson)',
          options: ['glasnogovornicu', 'glasnogovornica', 'glasnogovornicom', 'glasnogovornici'],
          correct: 2,
          hint: 'imenovati wants the instrumental.',
          explanation: 'glasnogovornicom — the instrumental of glasnogovornica.',
        },
        {
          q: 'Which sentence uses the bookish instrumental after biti?',
          options: [
            'Bila je liječnica.',
            'Bila je liječnicom.',
            'Postala je liječnica.',
            'Radila je kao liječnica.',
          ],
          correct: 1,
          hint: 'Look for biti with an -om ending.',
          explanation: 'Bila je liječnicom — correct, but more written than Bila je liječnica.',
        },
        {
          type: 'type',
          q: 'Smatraju ga najboljim ____ u gradu. (pekar)',
          answer: 'pekarom',
          hint: 'The adjective is already instrumental — the noun follows it.',
          explanation: 'najboljim pekarom — instrumental after smatrati.',
        },
        {
          type: 'type',
          q: 'Proglašena je ____ godine. (sportašica)',
          answer: 'sportašicom',
          hint: 'proglasiti + instrumental; a feminine noun in -a takes -om.',
          explanation: 'sportašicom — the instrumental of sportašica.',
        },
        {
          type: 'type',
          q: 'Moj djed je bio ____. (a fisherman, everyday form)',
          answer: 'ribar',
          hint: 'After biti, the everyday form is the dictionary form.',
          explanation: 'ribar — the predicate nominative after biti.',
        },
        {
          type: 'type',
          q: 'Ljeti radi kao ____. (a waiter)',
          answer: 'konobar',
          hint: 'After kao the noun keeps its subject form.',
          explanation: 'konobar — nominative after kao.',
        },
        {
          type: 'type',
          q: 'Smatram te ____ prijateljem. (pravi)',
          answer: 'pravim',
          hint: 'The adjective takes the instrumental ending, like the noun after it.',
          explanation: 'pravim prijateljem — both in the instrumental.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Smatramo ih ___." (true friends)',
        options: [
          'pravim prijateljima',
          'pravi prijatelji',
          'prave prijatelje',
          'pravih prijatelja',
        ],
        correct: 0,
        explanation: 'Smatrati + instrumental plural: pravim prijateljima.',
      },
      {
        q: 'Complete: "Vlada ga je imenovala ___." (minister)',
        options: ['ministar', 'ministra', 'ministrom', 'ministru'],
        correct: 2,
        explanation: 'Imenovati takes the instrumental: ministrom.',
      },
      {
        q: 'Which sentence is natural everyday Croatian?',
        options: [
          'Ana je profesoricu.',
          'Ana je profesorice.',
          'Ana je profesorici.',
          'Ana je profesorica.',
        ],
        correct: 3,
        explanation: 'After biti the noun stays in the nominative: profesorica.',
      },
      {
        q: 'After which word does the noun stay in the nominative?',
        options: ['smatrati', 'proglasiti', 'imenovati', 'kao'],
        correct: 3,
        explanation: 'After kao the noun does not change: Radi kao konobar.',
      },
      {
        q: 'Complete: "Nakon izbora postala je ___ grada." (mayor)',
        options: ['gradonačelnicu', 'gradonačelnicom', 'gradonačelnice', 'gradonačelnici'],
        correct: 1,
        explanation:
          'Postati + instrumental: gradonačelnicom. (The nominative would also be correct.)',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Smatram ga dobar učitelj.',
          'Smatram ga dobrim učiteljem.',
          'Smatram ga dobrim učitelj.',
          'Smatram ga dobri učitelj.',
        ],
        correct: 1,
        explanation: 'Smatrati + instrumental, adjective and noun together: dobrim učiteljem.',
      },
    ],
    vocab: [
      ['zanimanje', 'occupation, profession', 'Koje je vaše zanimanje?'],
      ['postati', 'to become', 'Postao je liječnikom.'],
      ['smatrati', 'to consider', 'Smatram ga prijateljem.'],
      ['proglasiti', 'to declare, proclaim', 'Proglasili su ga pobjednikom.'],
      ['imenovati', 'to appoint', 'Imenovana je ministricom.'],
      ['ravnatelj', 'headmaster, director', 'Ravnatelj škole je strog.'],
      ['pobjednik', 'winner', 'Pobjednik dobiva nagradu.'],
      ['veleposlanik', 'ambassador', 'Veleposlanik živi u Zagrebu.'],
      ['glasnogovornik', 'spokesperson', 'Glasnogovornik je dao izjavu.'],
    ],
  },

  'comparative-idioms': {
    worked: [
      {
        title: 'Agreement Comes First',
        problem: 'Prevedi: "After the rain my sister was soaked through."',
        en: 'After the rain my sister was soaked through.',
        steps: [
          { label: 'The idiom', text: 'soaked through = mokar kao miš.' },
          { label: 'Agree', text: 'sestra is feminine, so the adjective becomes mokra.' },
          { label: 'The image', text: 'miš stays exactly as it is.' },
          { label: 'The past', text: 'was = bila je.' },
        ],
        answer: 'Poslije kiše moja sestra je bila mokra kao miš.',
      },
      {
        title: 'Choose the Right Image',
        problem: 'Prevedi: "The new boss is as cunning as a fox."',
        en: 'The new boss is as cunning as a fox.',
        steps: [
          { label: 'The adjective', text: 'cunning = lukav.' },
          { label: 'Its image', text: 'lukav goes with lisica — a fox, as in English.' },
          { label: 'Agree', text: 'šef is masculine: lukav stays as it is.' },
        ],
        answer: 'Novi šef je lukav kao lisica.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ana je bila ___ kao vuk.',
          options: ['gladna', 'gladan', 'gladno', 'gladni'],
          correct: 0,
          hint: 'The adjective agrees with Ana.',
          explanation: 'gladna kao vuk — feminine, agreeing with Ana.',
        },
        {
          q: 'Pitali smo ga, ali šutio je kao ___.',
          options: ['riba', 'vuk', 'rak', 'top'],
          correct: 0,
          hint: 'An animal that makes no sound.',
          explanation: 'šutjeti kao riba — to say nothing at all.',
        },
        {
          q: 'Dijete je spavalo kao ___.',
          options: ['riba', 'top', 'lisica', 'krpa'],
          correct: 1,
          hint: 'Literally, a cannon.',
          explanation: 'spavati kao top — to sleep very deeply.',
        },
        {
          q: 'Moj djed je zdrav kao ___.',
          options: ['led', 'dren', 'puž', 'miš'],
          correct: 1,
          hint: 'A tree with very hard wood.',
          explanation: 'zdrav kao dren — in excellent health.',
        },
        {
          q: 'Pazi s njom, lukava je kao ___.',
          options: ['mazga', 'lisica', 'krpa', 'munja'],
          correct: 1,
          hint: 'The clever red animal of fairy tales.',
          explanation: 'lukav kao lisica — cunning as a fox.',
        },
        {
          q: 'Nakon tri sata na suncu bio je crven kao ___.',
          options: ['vuk', 'dren', 'rak', 'led'],
          correct: 2,
          hint: 'An animal that turns red when it is cooked.',
          explanation: 'crven kao rak — very red.',
        },
        {
          q: 'Which idiom means "very stubborn"?',
          options: ['tvrdoglav kao mazga', 'brz kao munja', 'hladan kao led', 'sam kao prst'],
          correct: 0,
          hint: 'An animal famous for refusing to move.',
          explanation: 'tvrdoglav kao mazga — stubborn as a mule.',
        },
        {
          q: 'Which idiom means "very fast"?',
          options: ['spor kao puž', 'brz kao munja', 'mokar kao miš', 'zdrav kao dren'],
          correct: 1,
          hint: 'Something in a storm.',
          explanation: 'brz kao munja — fast as lightning.',
        },
        {
          type: 'type',
          q: 'Bila je blijeda kao ____. (a rag)',
          answer: 'krpa',
          hint: 'The noun after kao stays in the subject form.',
          explanation: 'blijeda kao krpa — very pale.',
        },
        {
          type: 'type',
          q: 'Zaboravio sam kišobran i bio sam mokar kao ____. (a mouse)',
          answer: 'miš',
          hint: 'A small animal; the noun does not change.',
          explanation: 'mokar kao miš — soaked through.',
        },
        {
          type: 'type',
          q: 'Ona je prema strancima hladna kao ____. (ice)',
          answer: 'led',
          hint: 'Frozen water.',
          explanation: 'hladna kao led — cold, unfriendly.',
        },
        {
          type: 'type',
          q: 'Djed ima devedeset godina, a zdrav je kao ____. (a cornel tree)',
          answer: 'dren',
          hint: 'The tree whose wood is famously hard.',
          explanation: 'zdrav kao dren — in excellent health.',
        },
        {
          type: 'type',
          q: 'Nakon puta Marta je bila ____ kao vuk. (hungry)',
          answer: 'gladna',
          hint: 'The adjective agrees with Marta.',
          explanation: 'gladna kao vuk — feminine singular.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Šef je prema nama hladan kao ___."',
        options: ['led', 'dren', 'puž', 'top'],
        correct: 0,
        explanation: 'hladan kao led — cold as ice.',
      },
      {
        q: 'What does "šutjeti kao riba" mean?',
        options: ['to swim well', 'to say nothing at all', 'to eat fish', 'to speak quietly'],
        correct: 1,
        explanation: 'Fish make no sound: šutjeti kao riba is to stay completely silent.',
      },
      {
        q: 'Complete: "Kad je čuo vijest, Petar je bio ___ kao krpa."',
        options: ['blijeda', 'blijedo', 'blijed', 'blijedi'],
        correct: 2,
        explanation: 'The adjective agrees with Petar, masculine singular: blijed.',
      },
      {
        q: 'Which idiom means "completely alone"?',
        options: ['spor kao puž', 'crven kao rak', 'tvrdoglav kao mazga', 'sam kao prst'],
        correct: 3,
        explanation: 'sam kao prst — alone as a single finger.',
      },
      {
        q: 'Complete: "Taj stari auto je spor kao ___."',
        options: ['munja', 'puž', 'vuk', 'dren'],
        correct: 1,
        explanation: 'spor kao puž — slow as a snail.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Bila je crvena kao raka.',
          'Bila je crven kao rak.',
          'Bila je crvena kao rak.',
          'Bila je crvena kao rakom.',
        ],
        correct: 2,
        explanation:
          'The adjective agrees with her (crvena); the noun after kao stays nominative (rak).',
      },
    ],
    vocab: [
      ['dren', 'cornel tree', 'Djed je zdrav kao dren.'],
      ['vuk', 'wolf', 'Gladan sam kao vuk.'],
      ['top', 'cannon', 'Beba spava kao top.'],
      ['rak', 'crab, crayfish', 'Nakon plaže bio je crven kao rak.'],
      ['lisica', 'fox', 'Lukav je kao lisica.'],
      ['mazga', 'mule', 'Tvrdoglav je kao mazga.'],
      ['puž', 'snail', 'Taj autobus je spor kao puž.'],
      ['munja', 'lightning', 'Trčao je brz kao munja.'],
      ['krpa', 'rag, cloth', 'Bila je blijeda kao krpa.'],
      ['poredbeni frazem', 'comparative idiom', 'Zdrav kao dren je poredbeni frazem.'],
    ],
  },

  'reading-culture': {
    worked: [
      {
        title: 'Library or Bookshop?',
        problem: 'Prevedi: "I borrow books in the library and buy them in the bookshop."',
        en: 'I borrow books in the library and buy them in the bookshop.',
        steps: [
          {
            label: 'Borrow',
            text: 'A habit, so the imperfective: posuđivati → posuđujem.',
          },
          { label: 'Library', text: 'knjižnica, and u + locative: u knjižnici.' },
          { label: 'Bookshop', text: 'knjižara: u knjižari.' },
          { label: 'Them', text: 'the books again, as a clitic: ih.' },
        ],
        answer: 'Knjige posuđujem u knjižnici, a kupujem ih u knjižari.',
      },
      {
        title: 'Building an Opinion',
        problem:
          'Prevedi: "In my opinion, e-books are practical, but printed books are more beautiful."',
        en: 'In my opinion, e-books are practical, but printed books are more beautiful.',
        steps: [
          { label: 'The opener', text: 'po + locative: po mom mišljenju.' },
          { label: 'First claim', text: 'e-knjige su praktične.' },
          { label: 'The comparison', text: 'lijep → ljepši, plural feminine: ljepše.' },
          { label: 'Join', text: 'but = ali.' },
        ],
        answer: 'Po mom mišljenju, e-knjige su praktične, ali tiskane knjige su ljepše.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Posudila sam knjigu u ___.',
          options: ['knjižari', 'knjižnici', 'tiskari', 'pošti'],
          correct: 1,
          hint: 'The place where you borrow and return.',
          explanation: 'knjižnici — the library.',
        },
        {
          q: 'Kupio sam novi roman u ___.',
          options: ['knjižnici', 'knjižari', 'čitaonici', 'arhivu'],
          correct: 1,
          hint: 'A shop.',
          explanation: 'knjižari — the bookshop.',
        },
        {
          q: 'Marulića zovu ___ hrvatske književnosti.',
          options: ['otac', 'oca', 'ocem', 'ocu'],
          correct: 2,
          hint: 'Calling someone something takes the instrumental.',
          explanation: 'ocem — the instrumental of otac.',
        },
        {
          q: 'Marulić je završio Juditu ___ godine.',
          options: ['1501.', '1521.', '1450.', '1601.'],
          correct: 0,
          hint: 'The poem was printed twenty years after it was finished.',
          explanation: 'Judita was finished in 1501 and printed in 1521.',
        },
        {
          q: 'Po mom ___, čitanje je najbolji odmor.',
          options: ['mišljenju', 'mišljenje', 'mišljenja', 'mišljenjem'],
          correct: 0,
          hint: 'po takes the locative here.',
          explanation: 'po mom mišljenju — in my opinion.',
        },
        {
          q: 'Sa(n)jam knjige u Istri održava se u ___.',
          options: ['Puli', 'Splitu', 'Zagrebu', 'Dubrovniku'],
          correct: 0,
          hint: 'The largest city in Istria.',
          explanation: 'u Puli — the fair is held in Pula every year.',
        },
        {
          q: 'Koja riječ znači "e-reader"?',
          options: ['čitatelj', 'čitač', 'čitanka', 'čitaonica'],
          correct: 1,
          hint: 'A device, not a person.',
          explanation: 'čitač — the device; čitatelj is the person who reads.',
        },
        {
          q: 'Što je čitaonica?',
          options: ['a reading room', 'a reader (person)', 'a schoolbook', 'a printing house'],
          correct: 0,
          hint: 'A room for doing what the word begins with.',
          explanation: 'čitaonica — a reading room.',
        },
        {
          type: 'type',
          q: 'Tko čita, ne ____.',
          answer: 'skita',
          hint: 'A verb meaning to wander about idly; it rhymes with the first verb.',
          explanation: 'Tko čita, ne skita — a reader does not loaf about.',
        },
        {
          type: 'type',
          q: 'Djeca više čitaju ako im roditelji čitaju ____. (aloud)',
          answer: 'naglas',
          hint: 'One word: on + voice.',
          explanation: 'naglas — aloud.',
        },
        {
          type: 'type',
          q: 'Novu knjigu prvo sam vidio na ____ knjiga u Zagrebu. (a fair)',
          answer: 'sajmu',
          hint: 'na + locative of the word for a fair.',
          explanation: 'na sajmu — locative of sajam.',
        },
        {
          type: 'type',
          q: 'Po mom ____, tiskana knjiga je ljepša. (opinion)',
          answer: 'mišljenju',
          hint: 'po + locative of the word for opinion.',
          explanation: 'po mom mišljenju — in my opinion.',
        },
        {
          type: 'type',
          q: 'Marko Marulić rođen je u ____. (Split)',
          answer: 'Splitu',
          hint: 'u + locative of the city.',
          explanation: 'u Splitu — Marulić was born in Split.',
        },
      ],
    },
    checkB: [
      {
        q: 'Where do you buy books?',
        options: ['u knjižnici', 'u knjižari', 'u čitaonici', 'u arhivu'],
        correct: 1,
        explanation: 'Knjižara is the bookshop.',
      },
      {
        q: 'What is Judita?',
        options: [
          'a novel by August Šenoa',
          'a modern film',
          'a collection of fairy tales',
          'an epic poem by Marko Marulić',
        ],
        correct: 3,
        explanation: 'Judita is Marulić’s epic poem, finished in 1501.',
      },
      {
        q: 'Which word means "novel"?',
        options: ['roman', 'romansa', 'pjesma', 'članak'],
        correct: 0,
        explanation: 'A roman is a novel of any kind.',
      },
      {
        q: 'Complete: "S jedne strane e-knjige su praktične, a s ___ strane mnogi vole papir."',
        options: ['drugom', 'druge', 'drugu', 'drugoj'],
        correct: 1,
        explanation: 'S jedne strane… s druge strane — both genitive.',
      },
      {
        q: 'Which title is capitalised correctly in Croatian?',
        options: ['Priče Iz Davnine', 'Priče iz Davnine', 'priče iz davnine', 'Priče iz davnine'],
        correct: 3,
        explanation: 'Only the first word of a title (and names) takes a capital.',
      },
      {
        q: 'Where was Marko Marulić from?',
        options: ['iz Splita', 'iz Pule', 'iz Osijeka', 'iz Rijeke'],
        correct: 0,
        explanation: 'Marulić was born and lived in Split.',
      },
    ],
    vocab: [
      ['knjižnica', 'library', 'Knjige posuđujem u gradskoj knjižnici.'],
      ['knjižara', 'bookshop', 'Novi roman kupila sam u knjižari.'],
      ['čitaonica', 'reading room', 'U čitaonici je uvijek tiho.'],
      ['čitatelj', 'reader', 'Ta knjiga ima puno čitatelja.'],
      ['čitač', 'e-reader', 'Na putovanje nosim čitač.'],
      ['roman', 'novel', 'Čitam dobar roman.'],
      ['spisateljica', 'writer (woman)', 'Na sajmu sam upoznala spisateljicu.'],
      ['nakladnik', 'publisher', 'Nakladnik je izdao novu zbirku pjesama.'],
      ['ep', 'epic poem', 'Judita je ep Marka Marulića.'],
      ['posuditi', 'to borrow, to lend', 'Mogu li posuditi ovu knjigu?'],
    ],
  },

  'indefinite-pronouns-cases': {
    worked: [
      {
        title: 'Splitting nitko',
        problem: 'Prevedi: "I did not talk with anyone."',
        en: 'I did not talk with anyone.',
        steps: [
          { label: 'Negative', text: 'Croatian uses the ni- word: nitko.' },
          { label: 'With', text: 's + instrumental: s kim.' },
          {
            label: 'Split',
            text: 'With a preposition, nitko splits: ni + s + kim → ni s kim.',
          },
          { label: 'The verb', text: 'Negated as well: nisam razgovarao.' },
        ],
        answer: 'Ni s kim nisam razgovarao.',
      },
      {
        title: 'Which Case for “Something”?',
        problem: 'Prevedi: "I am afraid of something, but I do not know what."',
        en: 'I am afraid of something, but I do not know what.',
        steps: [
          { label: 'The verb', text: 'bojati se takes the genitive.' },
          { label: 'Something', text: 'nešto → genitive nečega.' },
          { label: 'What', text: 'The same verb understood: što → čega.' },
        ],
        answer: 'Bojim se nečega, ali ne znam čega.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Čekamo ___ iz agencije.',
          options: ['netko', 'nekoga', 'nekomu', 'nekim'],
          correct: 1,
          hint: 'The object of čekati, a person.',
          explanation: 'nekoga — accusative of netko.',
        },
        {
          q: 'Ne vjerujem ___.',
          options: ['nitko', 'nikoga', 'nikomu', 'nikim'],
          correct: 2,
          hint: 'vjerovati takes the dative.',
          explanation: 'nikomu — dative of nitko.',
        },
        {
          q: 'Ni ___ nisam govorio o tome.',
          options: ['s kim', 's nikim', 'kim s', 's koga'],
          correct: 0,
          hint: 'The preposition goes in the middle, then the instrumental.',
          explanation: 'ni s kim — the standard split form.',
        },
        {
          q: 'Bavi se ___ zanimljivim.',
          options: ['nešto', 'nečim', 'nečega', 'nečemu'],
          correct: 1,
          hint: 'baviti se takes the instrumental.',
          explanation: 'nečim — instrumental of nešto.',
        },
        {
          q: 'Dali smo poklon ___ u razredu.',
          options: ['svatko', 'svakoga', 'svakome', 'svakim'],
          correct: 2,
          hint: 'To whom? — the dative.',
          explanation: 'svakome — dative of svatko.',
        },
        {
          q: 'Je li ___ vidio moj mobitel?',
          options: ['itko', 'ikoga', 'ikomu', 'ikim'],
          correct: 0,
          hint: 'The subject, in a question.',
          explanation: 'itko — anyone at all, nominative.',
        },
        {
          q: 'Nisam razmišljala ni ___.',
          options: ['o čemu', 'o ničemu', 'čemu o', 'o čega'],
          correct: 0,
          hint: 'ni, then the preposition, then the pronoun in the locative.',
          explanation: 'ni o čemu — the split form.',
        },
        {
          q: 'Ne bojim se ___.',
          options: ['nešto', 'ničega', 'ničemu', 'ničim'],
          correct: 1,
          hint: 'bojati se takes the genitive.',
          explanation: 'ničega — genitive of ništa.',
        },
        {
          type: 'type',
          q: 'Ne poznajem ____ u ovom gradu. (nobody)',
          answer: 'nikoga',
          accept: ['nikog'],
          hint: 'The object, a person, with ni-.',
          explanation: 'nikoga — accusative of nitko.',
        },
        {
          type: 'type',
          q: 'Razgovarala sam s ____ iz tvoje firme. (someone)',
          answer: 'nekim',
          hint: 's + instrumental of netko.',
          explanation: 's nekim — instrumental.',
        },
        {
          type: 'type',
          q: 'Ni s ____ nisam išao na more. (nobody)',
          answer: 'kim',
          hint: 'The instrumental of tko.',
          explanation: 'ni s kim — the split form.',
        },
        {
          type: 'type',
          q: 'Na sajmu smo kupili ____. (all sorts of things)',
          answer: 'svašta',
          hint: 'sva- + što.',
          explanation: 'svašta — all sorts of things.',
        },
        {
          type: 'type',
          q: 'Moram ____ reći tajnu. (to someone)',
          answer: 'nekome',
          accept: ['nekomu', 'nekom'],
          hint: 'To whom? — the dative of netko.',
          explanation: 'nekome (or nekomu, nekom) — dative.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Čekam ___ ispred škole."',
        options: ['netko', 'nekoga', 'nekomu', 'nekim'],
        correct: 1,
        explanation: 'The object, a person: nekoga.',
      },
      {
        q: 'Complete: "Nisam se svađao ni ___." (with anyone)',
        options: ['s kim', 's nikim', 'kim s', 's koga'],
        correct: 0,
        explanation: 'Ni, then s, then the instrumental kim.',
      },
      {
        q: 'Complete: "Moram ___ reći istinu." (to someone)',
        options: ['netko', 'nekoga', 'nekome', 'nekim'],
        correct: 2,
        explanation: 'To whom? — the dative: nekome.',
      },
      {
        q: 'Which sentence is standard Croatian?',
        options: [
          'Nisam to kupio za nikoga.',
          'Kupio sam to ni za koga.',
          'Nisam to kupio za nitko.',
          'Nisam to kupio ni za koga.',
        ],
        correct: 3,
        explanation: 'The split form ni za koga, with the verb negated too.',
      },
      {
        q: 'What does "svašta" mean?',
        options: ['all sorts of things', 'nothing', 'something', 'anyone at all'],
        correct: 0,
        explanation: 'Svašta — all sorts of things: Svašta se dogodilo.',
      },
      {
        q: 'Complete: "Ima li ___ za jelo?" (anything at all)',
        options: ['išta', 'ičemu', 'ičim', 'ništa'],
        correct: 0,
        explanation: 'Išta — anything at all, in a question.',
      },
    ],
    vocab: [
      ['netko', 'someone', 'Netko te traži.'],
      ['nitko', 'no one', 'Nitko ne zna odgovor.'],
      ['nešto', 'something', 'Želiš li nešto popiti?'],
      ['ništa', 'nothing', 'Ništa ne vidim.'],
      ['svatko', 'everyone', 'Svatko ima pravo na mišljenje.'],
      ['svašta', 'all sorts of things', 'Svašta se dogodilo ovaj tjedan.'],
      ['itko', 'anyone at all', 'Je li itko zvao?'],
      ['išta', 'anything at all', 'Ima li išta novo?'],
      ['nigdje', 'nowhere', 'Nigdje ne mogu naći ključeve.'],
    ],
  },

  'body-part-nouns': {
    worked: [
      {
        title: 'Agreement with oči',
        problem: 'Prevedi: "Her eyes are green."',
        en: 'Her eyes are green.',
        steps: [
          { label: 'Eyes', text: 'oči — feminine plural.' },
          { label: 'Green', text: 'zelen → feminine plural zelene.' },
          {
            label: 'Her',
            text: 'Croatian likes the dative clitic for body parts: joj, after su.',
          },
        ],
        answer: 'Oči su joj zelene.',
      },
      {
        title: 'Boli or Bole?',
        problem: 'Prevedi: "My head hurts, and my ears hurt too."',
        en: 'My head hurts, and my ears hurt too.',
        steps: [
          { label: 'Head', text: 'One thing hurts: boli me glava.' },
          { label: 'Ears', text: 'Several things hurt: bole me uši.' },
          { label: 'Too', text: 'a … i: a bole me i uši.' },
        ],
        answer: 'Boli me glava, a bole me i uši.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Beba ima ___ oči.',
          options: ['plavi', 'plave', 'plava', 'plavo'],
          correct: 1,
          hint: 'oči behaves as a feminine plural.',
          explanation: 'plave oči — feminine plural.',
        },
        {
          q: 'Boli me ___ uho.',
          options: ['desno', 'desni', 'desna', 'desne'],
          correct: 0,
          hint: 'In the singular, the ear is neuter.',
          explanation: 'desno uho — neuter singular.',
        },
        {
          q: 'Od kompjutora me ___ oči.',
          options: ['boli', 'bole', 'boljela', 'bolim'],
          correct: 1,
          hint: 'Two eyes — a plural verb.',
          explanation: 'bole me oči — plural verb.',
        },
        {
          q: 'Nacrtao je lice s dva ___.',
          options: ['oka', 'oči', 'očiju', 'oko'],
          correct: 0,
          hint: 'After dva, the eye has a special counting form.',
          explanation: 'dva oka — the counting form.',
        },
        {
          q: 'Zaljubljena je do ___.',
          options: ['uši', 'ušiju', 'ušima', 'uho'],
          correct: 1,
          hint: 'do + genitive plural.',
          explanation: 'do ušiju — genitive plural.',
        },
        {
          q: 'Ne vjerujem svojim ___.',
          options: ['ušima', 'uši', 'ušiju', 'uha'],
          correct: 0,
          hint: 'vjerovati takes the dative.',
          explanation: 'ušima — dative plural.',
        },
        {
          q: 'Danas sam umorna, padam s ___.',
          options: ['noge', 'nogu', 'nogama', 'noga'],
          correct: 1,
          hint: 's meaning "off" takes the genitive; no extra -a.',
          explanation: 's nogu — genitive plural.',
        },
        {
          q: 'Što znači "ruku na srce"?',
          options: ['honestly', 'be careful', 'shake hands', 'I promise to help'],
          correct: 0,
          hint: 'You put your hand on your heart when you mean it.',
          explanation: 'ruku na srce — hand on heart, honestly.',
        },
        {
          type: 'type',
          q: 'Oči su mi ____ jer sam plakala. (crven)',
          answer: 'crvene',
          hint: 'Feminine plural ending.',
          explanation: 'crvene oči — feminine plural.',
        },
        {
          type: 'type',
          q: 'Poslije maratona ____ me noge. (boljeti)',
          answer: 'bole',
          hint: 'Several legs — third person plural.',
          explanation: 'bole me noge — plural verb.',
        },
        {
          type: 'type',
          q: 'Ima lijepih ____. (eyes, genitive plural)',
          answer: 'očiju',
          hint: 'The genitive plural of oči ends in -iju.',
          explanation: 'lijepih očiju — genitive plural.',
        },
        {
          type: 'type',
          q: 'Djed sve popravi sam, ima zlatne ____. (hands)',
          answer: 'ruke',
          hint: 'The plural of ruka.',
          explanation: 'zlatne ruke — skilful hands.',
        },
        {
          type: 'type',
          q: 'Pas je imao dva crna ____. (ears)',
          answer: 'uha',
          hint: 'After dva, the same counting form as in dva oka.',
          explanation: 'dva crna uha — the counting form.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ima ___ uši."',
        options: ['velike', 'veliki', 'velika', 'veliko'],
        correct: 0,
        explanation: 'Uši is feminine plural: velike uši.',
      },
      {
        q: 'Complete: "Poslije planinarenja ___ me noge."',
        options: ['boli', 'bole', 'bolio', 'boljelo'],
        correct: 1,
        explanation: 'Several legs — plural verb: bole.',
      },
      {
        q: 'Complete: "Djed ima zlatne ___, sve popravi sam."',
        options: ['noge', 'oči', 'ruke', 'uši'],
        correct: 2,
        explanation: 'Imati zlatne ruke — to be very skilful with one’s hands.',
      },
      {
        q: 'Complete: "Ne mogu vjerovati svojim ___!"',
        options: ['oči', 'očiju', 'oka', 'očima'],
        correct: 3,
        explanation: 'Vjerovati takes the dative: svojim očima.',
      },
      {
        q: 'What does "padati s nogu" mean?',
        options: ['to trip over', 'to be dead tired', 'to dance badly', 'to walk fast'],
        correct: 1,
        explanation: 'Padati s nogu — to be so tired you could fall over.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Oči su mi plavi.', 'Oči su mi plave.', 'Oka su mi plava.', 'Oči je mi plave.'],
        correct: 1,
        explanation: 'Oči is a feminine plural subject: Oči su mi plave.',
      },
    ],
    vocab: [
      ['oko', 'eye', 'Boli me lijevo oko.'],
      ['oči', 'eyes', 'Ima plave oči.'],
      ['uho', 'ear', 'Desno uho mi je začepljeno.'],
      ['uši', 'ears', 'Bole me uši od buke.'],
      ['ruka', 'hand, arm', 'Daj mi ruku.'],
      ['noga', 'leg, foot', 'Slomio je nogu na skijanju.'],
      ['boljeti', 'to hurt', 'Bole me noge.'],
      ['trepavica', 'eyelash', 'Ima duge trepavice.'],
      ['lice', 'face', 'Ima lijepo lice.'],
    ],
  },
};
