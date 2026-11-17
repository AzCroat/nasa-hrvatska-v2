// ─── A2 lessons in class order — Units 7–8 (lessons 31–40) ───────────────────
// Same shape and rules as the A1 class files (a1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, the A2 lessons before each lesson, and the lesson itself have
// taught. No comparatives or superlatives (B1), no impersonal se, no relative
// clauses. The conditional appears only from conditional-forms on.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.

export const CLASS_A2_U07_08 = {
  // ══ UNIT 7 ═════════════════════════════════════════════════════════════════

  // ── Adverbs ────────────────────────────────────────────────────────────────
  adverbs: {
    text: {
      kind: 'dialogue',
      title: 'Glasni susjedi',
      lines: [
        {
          who: 'Maja',
          hr: 'Luka, zašto si tako umoran? Jesi li loše spavao?',
          en: 'Luka, why are you so tired? Did you sleep badly?',
        },
        {
          who: 'Luka',
          hr: 'Jako loše. Novi susjedi gore uvijek glasno slušaju glazbu.',
          en: 'Very badly. The new neighbors upstairs always play their music loudly.',
        },
        {
          who: 'Maja',
          hr: 'Stvarno? Moji susjedi govore tiho i rijetko imaju goste.',
          en: 'Really? My neighbors speak quietly and rarely have guests.',
        },
        {
          who: 'Luka',
          hr: 'Blago tebi! Moji nikad ne idu rano spavati.',
          en: 'Lucky you! Mine never go to bed early.',
        },
        { who: 'Maja', hr: 'Jesi li razgovarao s njima?', en: 'Have you talked to them?' },
        {
          who: 'Luka',
          hr: 'Jesam, jučer. Bili su ljubazni, ali danas opet glasno pjevaju.',
          en: 'I have, yesterday. They were kind, but today they are singing loudly again.',
        },
        {
          who: 'Maja',
          hr: 'A pjevaju li barem lijepo?',
          en: 'And do they at least sing nicely?',
        },
        {
          who: 'Luka',
          hr: 'Ne, pjevaju jako loše! Sutra ću ustati rano i glasno pjevati — u šest ujutro.',
          en: 'No, they sing very badly! Tomorrow I will get up early and sing loudly — at six in the morning.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is Luka’s problem, and how are Maja’s neighbors different?',
          options: [
            'His neighbors have too many guests; hers are never at home',
            'His upstairs neighbors play loud music; hers speak quietly and rarely have guests',
            'His neighbors get up too early; hers go to bed late',
            'His downstairs neighbors sing badly; hers sing beautifully',
          ],
          correct: 1,
          hint: 'Think of where Luka’s neighbors live and what they do with their music. Then recall two things Maja says about hers.',
          explanation:
            'Luka’s neighbors live upstairs (gore) and always play music loudly. Maja’s speak quietly and rarely have guests.',
        },
        {
          q: 'The neighbors are several people, yet Luka says "glasno slušaju glazbu" and "glasno pjevaju" — not "glasni". Why?',
          options: [
            'Because glazba is a feminine noun',
            'Because Luka is speaking about the past',
            'Because the word describes HOW they do it, and such a word never changes',
            'Because glasni is used only for men',
          ],
          correct: 2,
          hint: 'Ask what the word describes: the neighbors themselves, or the way they listen and sing?',
          explanation:
            'It describes the verb — how they listen and sing — so it is an adverb: the neuter form of the adjective, which never agrees with anyone. "Susjedi su glasni" would describe the neighbors themselves.',
        },
        {
          type: 'type',
          q: 'Now you. Your friend Ana is a good singer — dobra pjevačica. Say how she sings: Ana ____ pjeva.',
          answer: 'dobro',
          hint: 'It says how she sings, so take the adjective dobar and use its neuter form.',
          explanation:
            'Ana dobro pjeva. — the adverb is the neuter form of the adjective, and it does not agree with Ana.',
        },
        {
          type: 'type',
          q: 'Someone asks Maja how often she has guests. Her honest answer is "rarely": ____ imam goste.',
          answer: 'Rijetko',
          hint: 'A frequency word — the opposite of često.',
          explanation: 'Rijetko imam goste. — rijetko means "rarely" and stands before the verb.',
        },
        {
          type: 'transform',
          q: 'Luka’s neighbors ALWAYS go to bed late. Say that they NEVER do.',
          from: 'Susjedi uvijek idu kasno spavati.',
          answer: 'Susjedi nikad ne idu kasno spavati.',
          accept: [
            'Susjedi nikada ne idu kasno spavati.',
            'Susjedi nikad ne idu spavati kasno.',
            'Susjedi nikada ne idu spavati kasno.',
          ],
          hint: 'Swapping the frequency word is not enough: a negative word needs something from the verb too.',
          explanation:
            'Susjedi nikad ne idu kasno spavati. — nikad is a negative word, so the verb must be negated as well: nikad ne idu.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'How often? Match each word to its meaning.',
        pairs: [
          ['uvijek', 'always'],
          ['često', 'often'],
          ['ponekad', 'sometimes'],
          ['rijetko', 'rarely'],
          ['obično', 'usually'],
        ],
        explanation:
          'Five frequency adverbs. They never change, and they usually stand before the verb: Često idemo na more.',
      },
      8,
      {
        type: 'sort',
        q: 'Does the last word describe a THING, or does it say HOW something is done?',
        groups: ['Describes a thing', 'Says how it is done'],
        items: [
          { hr: 'Vino je dobro.', group: 0 },
          { hr: 'Govoriš dobro.', group: 1 },
          { hr: 'Selo je tiho.', group: 0 },
          { hr: 'Djeca govore tiho.', group: 1 },
          { hr: 'More je mirno.', group: 0 },
          { hr: 'Baka vozi mirno.', group: 1 },
        ],
        explanation:
          'The same form does two jobs. After je it agrees with a neuter noun (vino, selo, more) and is an adjective; after another verb it says how, and is an adverb.',
      },
      4,
      3,
      {
        type: 'order',
        q: 'Put the words in order: "On Sundays I never get up early."',
        words: ['Nedjeljom', 'nikad', 'ne', 'ustajem', 'rano.'],
        accept: [
          'Nikad ne ustajem rano nedjeljom.',
          'Nedjeljom nikad rano ne ustajem.',
          'Nedjeljom rano nikad ne ustajem.',
          'Nikad nedjeljom ne ustajem rano.',
          'Rano nedjeljom nikad ne ustajem.',
        ],
        explanation:
          'Nedjeljom nikad ne ustajem rano. The frequency word stands before the verb, and after nikad the verb is negated.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'vozi', 'pažljiva', 'i', 'polako.'],
        wrong: 3,
        answer: 'pažljivo',
        hint: 'The word says HOW she drives, so it must not agree with sestra.',
        explanation:
          'Moja sestra vozi pažljivo i polako. — an adverb is the neuter form of the adjective and never agrees with the person.',
      },
      6,
      {
        type: 'tf',
        q: 'Ako uvijek kasniš, nikad ne dolaziš na vrijeme.',
        answer: true,
        hint: 'kasniti is "to be late"; na vrijeme is "on time".',
        explanation:
          'True — if you are always late, you never arrive on time. Note the negated verb after nikad: nikad ne dolaziš.',
      },
      10,
      {
        type: 'transform',
        q: 'Say the opposite: swap both adverbs for their opposites.',
        from: 'Marko govori tiho i hoda sporo.',
        answer: 'Marko govori glasno i hoda brzo.',
        accept: ['Marko glasno govori i brzo hoda.'],
        hint: 'You need the opposite of "quietly" and the opposite of "slowly".',
        explanation: 'Marko govori glasno i hoda brzo. — tiho ↔ glasno, sporo ↔ brzo.',
      },
      7,
      1,
      {
        type: 'listen',
        audio: 'Baka je dolje, a djeca su vani.',
        q: 'Where is Grandma?',
        options: ['Upstairs', 'Outside', 'Downstairs', 'Far away'],
        correct: 2,
        explanation:
          'Baka je dolje — Grandma is downstairs. The children are vani, outside. Upstairs would be gore.',
      },
      {
        type: 'dictate',
        audio: 'Uvijek dolazim rano.',
        answer: 'Uvijek dolazim rano.',
        hint: 'Three words: "I always come early."',
        explanation: 'Uvijek dolazim rano. — two adverbs, one of frequency and one of time.',
      },
    ],
  },

  // ── Conditional I: the forms ───────────────────────────────────────────────
  'conditional-forms': {
    text: {
      kind: 'dialogue',
      title: 'Subota na Sljemenu?',
      lines: [
        {
          who: 'Petra',
          hr: 'Ivane, što bi ti radio u subotu? Ja bih išla na izlet, ali ne sama.',
          en: 'Ivan, what would you do on Saturday? I would go on a trip, but not alone.',
        },
        {
          who: 'Ivan',
          hr: 'Ja bih ostao kod kuće. Rado bih se odmorio.',
          en: 'I would stay at home. I would gladly rest.',
        },
        {
          who: 'Petra',
          hr: 'Ali cijeli tjedan sjediš u uredu! Bi li išao sa mnom na Sljeme?',
          en: 'But you sit in the office all week! Would you go up Sljeme with me?',
        },
        {
          who: 'Ivan',
          hr: 'Na Sljeme? Ne bih išao pješice. Autom bih došao.',
          en: 'Up Sljeme? I would not go on foot. I would come by car.',
        },
        {
          who: 'Petra',
          hr: 'Marta i Dino bi sigurno išli s nama. Oni bi hodali cijeli dan.',
          en: 'Marta and Dino would surely go with us. They would walk all day.',
        },
        { who: 'Ivan', hr: 'Dobro, a što bismo jeli?', en: 'All right, and what would we eat?' },
        {
          who: 'Petra',
          hr: 'Gore bismo ručali grah i štrukle.',
          en: 'Up there we would have beans and štrukli for lunch.',
        },
        {
          who: 'Ivan',
          hr: 'Štrukle? Onda bih i ja išao pješice!',
          en: 'Štrukli? Then I would go on foot too!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what would Ivan rather do on Saturday, and what changes his mind?',
          options: [
            'He would rather work; Marta and Dino change his mind',
            'He would rather go by car; the weather changes his mind',
            'He would rather stay home and rest; the food on Sljeme changes his mind',
            'He would rather go to the movies; Petra’s car changes his mind',
          ],
          correct: 2,
          hint: 'His first answer is about home. His last line is about something on a plate.',
          explanation:
            'Ivan would stay at home and rest (Rado bih se odmorio). When he hears about štrukli, he would even go on foot.',
        },
        {
          q: 'Petra says "Ja bih išla", and Ivan says "Autom bih došao" and "Ne bih išao". What do the three have in common?',
          options: [
            'The short word bih always stands right after the verb',
            'The short word bih is never first: it follows the first word, or ne',
            'The short word bih always stands at the end of the sentence',
            'The short word bih always stands right after ja',
          ],
          correct: 1,
          hint: 'Look at what stands before bih each time: a pronoun, a noun, a negative word.',
          explanation:
            'bih is a clitic and takes second place: after Ja, after Autom, and right after ne. It can never open the sentence — never "Bih išao".',
        },
        {
          type: 'type',
          q: 'Now you. Petra asks Marta and Dino together: ____ li išli s nama na Sljeme?',
          answer: 'Biste',
          hint: 'Two people are addressed, so you need the auxiliary for vi — and in a question it comes first.',
          explanation:
            'Biste li išli s nama na Sljeme? — the vi form opens the question, and li follows it.',
        },
        {
          type: 'transform',
          q: 'Ivan would stay at home. Now Petra says the same about herself.',
          from: 'Ja bih ostao kod kuće.',
          answer: 'Ja bih ostala kod kuće.',
          accept: ['Ostala bih kod kuće.', 'I ja bih ostala kod kuće.'],
          hint: 'The auxiliary stays. The other verb form agrees with the speaker, as in the past tense.',
          explanation:
            'Ja bih ostala kod kuće. — the participle agrees with the speaker: ostao for a man, ostala for a woman.',
        },
        {
          type: 'transform',
          q: 'Say it without the pronoun "mi". Mind where the short word goes.',
          from: 'Mi bismo ručali gore.',
          answer: 'Ručali bismo gore.',
          accept: ['Gore bismo ručali.'],
          hint: 'The auxiliary cannot open the sentence, so something else has to come first.',
          explanation:
            'Ručali bismo gore. — without the pronoun, the participle comes first and bismo takes second place.',
        },
      ],
    },
    mix: [
      8,
      10,
      9,
      11,
      {
        type: 'match',
        q: 'Who would help? Match each subject to the rest of its sentence.',
        pairs: [
          ['Ja (Marko)', 'bih pomogao.'],
          ['Moja sestra', 'bi pomogla.'],
          ['Moji roditelji', 'bi pomogli.'],
          ['Brat i ja', 'bismo pomogli.'],
          ['Ti i Ana (two women)', 'biste pomogle.'],
        ],
        explanation:
          'Two things must fit the subject: the auxiliary (bih, bi, bismo, biste) and the ending of the participle (-o, -la, -li, -le).',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Petra', 'bi', 'rado', 'došao', 'na', 'izlet.'],
        wrong: 3,
        answer: 'došla',
        hint: 'Who would come? That form has to agree with her.',
        explanation:
          'Petra bi rado došla na izlet. — as in the past tense, the participle agrees with the subject.',
      },
      3,
      {
        type: 'sort',
        q: 'Who would do it? Sort by the form of the verb.',
        groups: ['One man', 'One woman', 'Several people (or polite Vi)'],
        items: [
          { hr: 'Pisao bih.', group: 0 },
          { hr: 'Kupila bi.', group: 1 },
          { hr: 'Radili bismo.', group: 2 },
          { hr: 'Čekala bih.', group: 1 },
          { hr: 'Ostao bi.', group: 0 },
          { hr: 'Čekali biste.', group: 2 },
        ],
        explanation:
          'The participle shows who: -o for a man, -la for a woman, -li for several people — and for polite Vi, even to one person.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "We would not go without an umbrella."',
        words: ['Ne', 'bismo', 'išli', 'bez', 'kišobrana.'],
        accept: ['Bez kišobrana ne bismo išli.'],
        explanation:
          'Ne bismo išli bez kišobrana. The negative word stands right before the auxiliary, as a separate word.',
      },
      {
        type: 'tf',
        q: 'In standard Croatian, "Ne bi došli" can be about "oni" — but not about "mi".',
        answer: true,
        hint: 'Which auxiliary does "mi" need?',
        explanation:
          'True. bi goes with ti, on, ona and oni. For mi the standard form is bismo: Ne bismo došli.',
      },
      6,
      {
        type: 'transform',
        q: 'Make it negative.',
        from: 'Kupila bih taj stan.',
        answer: 'Ne bih kupila taj stan.',
        accept: ['Taj stan ne bih kupila.', 'Ja ne bih kupila taj stan.'],
        hint: 'The negative word and the auxiliary stay together, so the auxiliary no longer follows the participle.',
        explanation: 'Ne bih kupila taj stan. — ne + bih, two words, and then the participle.',
      },
      12,
      7,
      {
        type: 'listen',
        audio: 'Bi li mi pomogla sutra?',
        q: 'Who is being asked?',
        options: ['A man, a friend', 'Several people', 'A woman, a friend', 'A stranger, politely'],
        correct: 2,
        explanation:
          'Bi li … pomogla — bi is the ti form, and pomogla is the form for a woman. To a stranger it would be Biste li mi pomogli?',
      },
      {
        type: 'dictate',
        audio: 'Rado bih došla.',
        answer: 'Rado bih došla.',
        hint: 'Three words. A woman says she would gladly come.',
        explanation: 'Rado bih došla. — rado is first, so bih takes second place.',
      },
    ],
  },

  // ── Wishes and polite requests ─────────────────────────────────────────────
  'conditional-wishes': {
    text: {
      kind: 'dialogue',
      title: 'U kafiću',
      lines: [
        {
          who: 'Konobar',
          hr: 'Dobar dan! Što biste željeli?',
          en: 'Good day! What would you like?',
        },
        {
          who: 'Nina',
          hr: 'Dobar dan. Htjela bih čaj s limunom, molim Vas.',
          en: 'Good day. I would like a tea with lemon, please.',
        },
        {
          who: 'Filip',
          hr: 'A ja bih htio kavu s mlijekom. Biste li nam mogli donijeti i čašu vode?',
          en: 'And I would like a coffee with milk. Could you bring us a glass of water as well?',
        },
        {
          who: 'Konobar',
          hr: 'Naravno. Želite li nešto pojesti?',
          en: 'Of course. Would you like something to eat?',
        },
        {
          who: 'Nina',
          hr: 'Voljela bih probati kolač od čokolade.',
          en: 'I would love to try the chocolate cake.',
        },
        {
          who: 'Filip',
          hr: 'Nina, trebala bi probati i štrudlu. Ovdje je odlična.',
          en: 'Nina, you should try the strudel too. It is excellent here.',
        },
        {
          who: 'Nina',
          hr: 'Dobra ideja! Mogli bismo naručiti i kolač i štrudlu.',
          en: 'Good idea! We could order both the cake and the strudel.',
        },
        { who: 'Konobar', hr: 'Odmah stiže!', en: 'Coming right up!' },
        {
          who: 'Filip',
          hr: 'Hvala Vam. Kasnije bismo htjeli platiti karticom.',
          en: 'Thank you. Later we would like to pay by card.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do Nina and Filip order to drink, and what does Filip advise Nina to try?',
          options: [
            'Coffee with milk for Nina, tea for Filip; the chocolate cake',
            'Two coffees and a glass of juice; the strudel',
            'Tea with lemon for both; the chocolate cake',
            'Tea with lemon for Nina, coffee with milk for Filip; the strudel',
          ],
          correct: 3,
          hint: 'One drink comes with lemon, one with milk. Filip’s advice is about a second dessert.',
          explanation:
            'Nina would like tea with lemon, Filip coffee with milk (and a glass of water). Filip says: trebala bi probati i štrudlu.',
        },
        {
          q: 'The waiter asks two guests "Što biste željeli?". What would he say to Nina alone, addressing her politely?',
          options: [
            'Što bi željela?',
            'Exactly the same: Što biste željeli?',
            'Što bih željela?',
            'Što biste željela?',
          ],
          correct: 1,
          hint: 'Polite Vi to one person behaves like the plural — in the auxiliary and in the participle.',
          explanation:
            'With polite Vi both words stay plural, even for one woman: Što biste željeli? "Što bi željela?" is correct only to a friend.',
        },
        {
          type: 'type',
          q: 'Now you. Your sister does not speak Croatian, so you order for her: Moja sestra bi ____ sok od jabuke. (htjeti)',
          answer: 'htjela',
          accept: ['željela'],
          hint: 'The participle of htjeti has to agree with your sister.',
          explanation:
            'Moja sestra bi htjela sok od jabuke. — htio for a man, htjela for a woman; the thing wanted is in the accusative.',
        },
        {
          type: 'transform',
          q: 'You said this to a friend. Now say it to a stranger — politely.',
          from: 'Bi li mi mogao pomoći?',
          answer: 'Biste li mi mogli pomoći?',
          hint: 'Two words change: polite Vi takes the plural of both the auxiliary and the participle.',
          explanation:
            'Biste li mi mogli pomoći? — biste for Vi, and the participle in the plural: mogli.',
        },
        {
          type: 'transform',
          q: 'Too blunt for a café! You are Filip: turn the demand into a polite wish.',
          from: 'Hoću kavu.',
          answer: 'Htio bih kavu.',
          accept: [
            'Ja bih htio kavu.',
            'Htio bih kavu, molim.',
            'Htio bih kavu, molim Vas.',
            'Ja bih htio kavu, molim.',
            'Želio bih kavu.',
            'Ja bih želio kavu.',
            'Želio bih kavu, molim.',
          ],
          hint: 'Use the same verb in the conditional. Filip is a man, and the short word cannot come first.',
          explanation:
            'Htio bih kavu. — the conditional of htjeti is how you order. Hoću kavu is correct grammar, but it sounds like a demand.',
        },
      ],
    },
    mix: [
      8,
      10,
      11,
      {
        type: 'match',
        q: 'What is the speaker doing? Match each sentence to its purpose.',
        pairs: [
          ['Htio bih sok.', 'ordering a drink'],
          ['Volio bih putovati po svijetu.', 'telling a dream'],
          ['Biste li mi pomogli?', 'asking a stranger for help'],
          ['Mogli bismo naručiti pizzu.', 'making a suggestion'],
          ['Trebala bi više spavati.', 'giving advice to a friend'],
        ],
        explanation:
          'The conditional does all the polite work: ordering (htio bih), dreaming (volio bih), asking (biste li…?), suggesting (mogli bismo) and advising (trebala bi).',
      },
      2,
      {
        type: 'sort',
        q: 'Who is the speaker talking to — a friend, or someone addressed politely?',
        groups: ['One friend (ti)', 'Politely (Vi) — or several people'],
        items: [
          { hr: 'Bi li mi mogao pomoći?', group: 0 },
          { hr: 'Biste li mi rekli koliko je sati?', group: 1 },
          { hr: 'Trebala bi jesti više voća.', group: 0 },
          { hr: 'Biste li htjeli sjesti ovdje?', group: 1 },
          { hr: 'Bi li mi dodala sol?', group: 0 },
          { hr: 'Biste li bili tako ljubazni?', group: 1 },
        ],
        explanation:
          'bi + a singular participle is for one friend; biste + a plural participle is the polite form — and the form for several people.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order — to a friend, a man: "Could you open the window for me?"',
        words: ['Bi', 'li', 'mi', 'mogao', 'otvoriti', 'prozor?'],
        explanation:
          'Bi li mi mogao otvoriti prozor? The auxiliary opens the question, li follows it, then the short word mi.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Marko,', 'trebala', 'bi', 'nazvati', 'mamu.'],
        wrong: 1,
        answer: 'trebao',
        hint: 'The advice is for Marko, so that form has to agree with him.',
        explanation:
          'Marko, trebao bi nazvati mamu. — the participle agrees with the person you are advising.',
      },
      6,
      7,
      {
        type: 'tf',
        q: 'A waiter can say "Što biste željeli?" only when there are two or more guests.',
        answer: false,
        hint: 'Think of how a waiter addresses one guest he does not know.',
        explanation:
          'False. One guest addressed as Vi hears exactly the same words: polite Vi takes biste and a plural participle, even for one person.',
      },
      {
        type: 'transform',
        q: 'Turn the call into a softer suggestion: "We could go to the coast."',
        from: 'Idemo na more!',
        answer: 'Mogli bismo ići na more.',
        accept: ['Mogli bismo otići na more.', 'Mi bismo mogli ići na more.'],
        hint: 'Use moći in the conditional for mi, and put the other verb in its dictionary form.',
        explanation: 'Mogli bismo ići na more. — mogli bismo + the infinitive means "we could".',
      },
      12,
      {
        type: 'listen',
        audio: 'Voljela bih jednog dana vidjeti Dubrovnik.',
        q: 'What is the speaker saying?',
        options: [
          'She saw Dubrovnik one day',
          'She would love to see Dubrovnik one day',
          'He would love to see Dubrovnik one day',
          'She wants you to see Dubrovnik',
        ],
        correct: 1,
        explanation:
          'Voljela bih … vidjeti — a wish, and voljela shows that a woman is speaking. A man would say Volio bih.',
      },
      {
        type: 'dictate',
        audio: 'Htjela bih platiti.',
        answer: 'Htjela bih platiti.',
        hint: 'Three words. A woman politely says she would like to pay.',
        explanation: 'Htjela bih platiti. — after htjela bih, the verb is in the infinitive.',
      },
    ],
  },

  // ── Kad bih… bih / da + present ────────────────────────────────────────────
  'conditional-if': {
    text: {
      kind: 'dialogue',
      title: 'Milijun eura',
      lines: [
        {
          who: 'Sara',
          hr: 'Tine, što bi radio kad bi dobio na lotu?',
          en: 'Tin, what would you do if you won the lottery?',
        },
        {
          who: 'Tin',
          hr: 'Kad bih dobio milijun eura, kupio bih kuću na moru. A ti?',
          en: 'If I won a million euros, I would buy a house by the sea. And you?',
        },
        {
          who: 'Sara',
          hr: 'Ja bih putovala. Kad bih imala novca, vidjela bih cijeli svijet.',
          en: 'I would travel. If I had money, I would see the whole world.',
        },
        {
          who: 'Tin',
          hr: 'A posao? Bi li radila kad bi bila bogata?',
          en: 'And work? Would you work if you were rich?',
        },
        {
          who: 'Sara',
          hr: 'Radila bih, ali samo tri dana u tjednu. Da imam vremena, učila bih japanski.',
          en: 'I would, but only three days a week. If I had time, I would study Japanese.',
        },
        {
          who: 'Tin',
          hr: 'Da sam na tvom mjestu, prvo bih naučio kuhati!',
          en: 'If I were you, I would learn to cook first!',
        },
        {
          who: 'Sara',
          hr: 'Vrlo smiješno. Da znam kuhati, ne bih svaki dan jela kod tebe.',
          en: 'Very funny. If I knew how to cook, I would not eat at your place every day.',
        },
        {
          who: 'Tin',
          hr: 'Istina. Ali kad ne bi dolazila, jeo bih sam.',
          en: 'True. But if you did not come, I would eat alone.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what would Tin and Sara each do with a lot of money?',
          options: [
            'Tin would travel; Sara would buy a house by the sea',
            'Tin would stop working; Sara would buy a restaurant',
            'Tin would buy a house by the sea; Sara would travel',
            'Tin would learn Japanese; Sara would learn to cook',
          ],
          correct: 2,
          hint: 'One of them thinks of a place to live, the other of seeing the world.',
          explanation:
            'Tin: kupio bih kuću na moru. Sara: Ja bih putovala … vidjela bih cijeli svijet.',
        },
        {
          q: 'Sara says: "Da znam kuhati, ne bih svaki dan jela kod tebe." What does this tell us about real life?',
          options: [
            'Sara cooks for Tin every day',
            'Sara cannot cook, and she eats at Tin’s every day',
            'Sara can cook, but she likes Tin’s food',
            'Sara used to eat at Tin’s, but not anymore',
          ],
          correct: 1,
          hint: 'da + the present describes a condition that is NOT true right now.',
          explanation:
            'Da znam… means "if I knew (but I do not)". So she cannot cook — and the result, not eating at Tin’s, is not real either: she eats there every day.',
        },
        {
          type: 'type',
          q: 'Now you. A woman is dreaming: Kad bih ____ bogata, ne bih radila. (biti)',
          answer: 'bila',
          hint: 'After bih comes the participle of biti, and it agrees with the woman speaking.',
          explanation:
            'Kad bih bila bogata, ne bih radila. — both halves are imagined, so both carry bih and a participle.',
        },
        {
          type: 'type',
          q: 'It is raining, so there is no trip today: Da ne ____ kiša, išli bismo na izlet. (padati)',
          answer: 'pada',
          hint: 'In this frame da takes the plain present tense, not the conditional.',
          explanation:
            'Da ne pada kiša, išli bismo na izlet. — da + the present for a condition that is not true now; the result is still conditional.',
        },
        {
          type: 'transform',
          q: 'Say the same with the other frame: da + the present.',
          from: 'Kad bih imao auto, vozio bih te na posao.',
          answer: 'Da imam auto, vozio bih te na posao.',
          hint: 'Only the first half changes: da takes the ordinary present of imati. The result stays as it is.',
          explanation:
            'Da imam auto, vozio bih te na posao. — da + present makes it clear that he has no car. Never "da bih imao" in this frame.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each condition to the result that makes sense.',
        pairs: [
          ['Da nije tako kasno,', 'nazvao bih baku.'],
          ['Kad bismo imali brod,', 'vozili bismo se po moru.'],
          ['Da znam kuhati,', 'ne bih jela u restoranu.'],
          ['Kad bi padao snijeg,', 'djeca bi se igrala vani.'],
        ],
        explanation:
          'Each result is a conditional that fits the condition in meaning — and in person: bismo with bismo, a woman’s jela with her own da znam.',
      },
      3,
      {
        type: 'sort',
        q: 'Is the speaker stating a FACT, or only IMAGINING something?',
        groups: ['A fact', 'Only imagined'],
        items: [
          { hr: 'Imam vremena i putujem.', group: 0 },
          { hr: 'Kad bih imao vremena, putovao bih.', group: 1 },
          { hr: 'Ana je bolesna i ne ide na posao.', group: 0 },
          { hr: 'Da Ana nije bolesna, došla bi na posao.', group: 1 },
          { hr: 'Pada kiša i ostajemo kod kuće.', group: 0 },
          { hr: 'Da ne pada kiša, šetali bismo.', group: 1 },
        ],
        explanation:
          'A plain present states a fact. kad + conditional and da + present, followed by a conditional result, describe something that is not happening.',
      },
      4,
      7,
      {
        type: 'order',
        q: 'Put the words in order: "If we had time, we would come." (We have no time.)',
        words: ['Da', 'imamo', 'vremena,', 'došli', 'bismo.'],
        accept: ['Došli bismo da imamo vremena.'],
        explanation:
          'Da imamo vremena, došli bismo. da + the plain present for what is not true now; in the result the participle comes first, so bismo takes second place.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Kad', 'bih', 'znam', 'odgovor,', 'rekao', 'bih', 'ti.'],
        wrong: 2,
        answer: 'znao',
        hint: 'What form follows bih? And look at the second half to see who is speaking.',
        explanation:
          'Kad bih znao odgovor, rekao bih ti. — after bih comes the participle, never the present. A man is speaking: znao, rekao.',
      },
      6,
      {
        type: 'tf',
        q: '"Da imam psa, šetala bih svaki dan" tells you that the speaker has a dog.',
        answer: false,
        hint: 'What does da + the present say about the condition?',
        explanation:
          'False. Da imam psa means "if I had a dog" — she does not have one. With a dog she would simply say: Imam psa i šetam svaki dan.',
      },
      9,
      {
        type: 'transform',
        q: 'Start with the result instead of the condition. Mind the comma.',
        from: 'Kad bismo živjeli na moru, plivali bismo svaki dan.',
        answer: 'Plivali bismo svaki dan kad bismo živjeli na moru.',
        accept: ['Svaki dan bismo plivali kad bismo živjeli na moru.'],
        hint: 'The two halves swap places — and Croatian writes no comma before kad.',
        explanation:
          'Plivali bismo svaki dan kad bismo živjeli na moru. — the meaning is the same; with the result first there is no comma.',
      },
      11,
      {
        type: 'listen',
        audio: 'Da imam novca, kupio bih ti auto.',
        q: 'What do we learn about the speaker?',
        options: [
          'He bought you a car',
          'He will buy you a car tomorrow',
          'She has money, but no car',
          'He does not have the money for a car',
        ],
        correct: 3,
        explanation:
          'Da imam novca — "if I had money", so he does not have it. kupio shows that a man is speaking.',
      },
      {
        type: 'dictate',
        audio: 'Što bi radio kad bi imao milijun eura?',
        answer: 'Što bi radio kad bi imao milijun eura?',
        hint: 'Eight words — a question to a friend (a man) about a million euros.',
        explanation:
          'Što bi radio kad bi imao milijun eura? — the ti form bi in both halves, and no comma before kad.',
      },
    ],
  },

  // ── The imperative revisited ───────────────────────────────────────────────
  'imperative-review': {
    text: {
      kind: 'dialogue',
      title: 'Selidba',
      lines: [
        {
          who: 'Iva',
          hr: 'Karlo, pomozi mi, molim te! Ova kutija je teška.',
          en: 'Karlo, help me, please! This box is heavy.',
        },
        {
          who: 'Karlo',
          hr: 'Evo me. Daj mi je! Kamo ide?',
          en: 'Here I am. Give it to me! Where does it go?',
        },
        {
          who: 'Iva',
          hr: 'U kuhinju. Polako, unutra su čaše. Nemoj trčati!',
          en: 'Into the kitchen. Slowly, there are glasses inside. Do not run!',
        },
        {
          who: 'Karlo',
          hr: 'Dobro, dobro. A gdje je ključ od podruma?',
          en: 'All right, all right. And where is the key to the basement?',
        },
        {
          who: 'Iva',
          hr: 'Kod susjeda je. Gospodine Horvat, dajte nam ključ od podruma, molim Vas!',
          en: 'The neighbor has it. Mr. Horvat, give us the key to the basement, please!',
        },
        {
          who: 'Susjed',
          hr: 'Izvolite. Nemojte žuriti, vratite mi ga sutra.',
          en: 'Here you are. Do not hurry, give it back to me tomorrow.',
        },
        {
          who: 'Iva',
          hr: 'Hvala Vam! Karlo, tata zove. Želi nam pomoći.',
          en: 'Thank you! Karlo, Dad is calling. He wants to help us.',
        },
        {
          who: 'Karlo',
          hr: 'Neka dođe! I neka donese pizzu.',
          en: 'Let him come! And let him bring pizza.',
        },
        {
          who: 'Iva',
          hr: 'Odlična ideja. A sada budi dobar i uzmi još jednu kutiju.',
          en: 'Great idea. And now be good and take one more box.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who has the basement key, and what should Dad bring?',
          options: [
            'Karlo has it; Dad should bring glasses',
            'The neighbor has it; Dad should bring pizza',
            'Dad has it; the neighbor should bring pizza',
            'Iva has it; Dad should bring one more box',
          ],
          correct: 1,
          hint: 'Iva has to ask a third person for the key. Karlo is thinking about food.',
          explanation:
            'The key is with the neighbor, Mr. Horvat. About Dad, Karlo says: Neka donese pizzu.',
        },
        {
          q: 'Iva says "pomozi mi, molim te" to Karlo, but "dajte nam ključ, molim Vas" to Mr. Horvat. Why does the second command end in -te?',
          options: [
            'Because Iva is asking for two things',
            'Because dati is a verb that always takes -te',
            'Because she calls the neighbor Vi, and the polite command is the -te form',
            'Because the command is negative',
          ],
          correct: 2,
          hint: 'Look at the "please" that goes with each command.',
          explanation:
            'Karlo is her brother (ti): pomozi, molim te. The neighbor is Vi, so the command takes -te and the please changes too: dajte, molim Vas.',
        },
        {
          type: 'type',
          q: 'Now you. Karlo is holding a book (knjiga) that you want. Tell him: Daj mi ____!',
          answer: 'je',
          accept: ['ju'],
          hint: 'A short "it" for a feminine thing — the one Karlo uses for the box.',
          explanation:
            'Daj mi je! — knjiga is feminine, so "it" is je (also ju). The "to whom" word mi comes first.',
        },
        {
          type: 'transform',
          q: 'Iva said this to her brother. Say it to Mr. Horvat — politely.',
          from: 'Pomozi mi, molim te!',
          answer: 'Pomozite mi, molim Vas!',
          hint: 'Two things change: the ending of the command, and the word after molim.',
          explanation:
            'Pomozite mi, molim Vas! — the -te form is for anyone you call Vi, and molim te becomes molim Vas.',
        },
        {
          type: 'type',
          q: 'The movers are tired. Say "let them rest": Neka se ____. (odmoriti se — oni)',
          answer: 'odmore',
          hint: 'After neka comes the ordinary present tense — here in the oni form.',
          explanation:
            'Neka se odmore. — neka + the present is the command for people who are not in the conversation.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Who would you say it to? Match each command to the situation.',
        pairs: [
          ['Sjednite, molim Vas.', 'to a guest you call Vi'],
          ['Govori glasno!', 'to a friend who speaks too quietly'],
          ['Neka uđe!', 'about someone waiting outside'],
          ['Idemo!', 'to your group, yourself included'],
          ['Nemoj kasniti!', 'to a friend who is often late'],
        ],
        explanation:
          'The form shows who is meant: -te for Vi, the bare form for ti, neka + present for a third person, the mi form for "let us".',
      },
      4,
      {
        type: 'sort',
        q: 'Does the command ask for one finished action, or for a habit or a way of doing something?',
        groups: ['One finished action', 'A habit, or a way of doing it'],
        items: [
          { hr: 'Zatvori prozor.', group: 0 },
          { hr: 'Piši mi često.', group: 1 },
          { hr: 'Napiši mi poruku.', group: 0 },
          { hr: 'Uči svaki dan.', group: 1 },
          { hr: 'Pričekajte trenutak.', group: 0 },
          { hr: 'Govorite polako.', group: 1 },
        ],
        explanation:
          'A perfective command (zatvori, napiši, pričekajte) asks for one finished action. An imperfective one (piši, uči, govorite) asks for a habit or a way of doing things.',
      },
      6,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Do not send it to him!"',
        words: ['Nemoj', 'mu', 'ga', 'poslati!'],
        explanation:
          'Nemoj mu ga poslati! After nemoj the short words follow at once — the "to whom" word mu before the "what" word ga — and the verb stays in the infinitive.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Gospođo,', 'čekaj', 'ovdje,', 'molim', 'Vas.'],
        wrong: 1,
        answer: 'čekajte',
        hint: 'She is addressed with Vas. The command has to match.',
        explanation:
          'Gospođo, čekajte ovdje, molim Vas. — with Vi the command takes -te. Čekaj goes with molim te.',
      },
      7,
      {
        type: 'tf',
        q: '"Neka pričekaju" says that THEY should wait.',
        answer: true,
        hint: 'Look at the ending of the verb after neka.',
        explanation:
          'True. neka + the oni form of the present: let them wait. About one person it would be Neka pričeka.',
      },
      8,
      {
        type: 'transform',
        q: 'Replace the noun with a short word for "it".',
        from: 'Pokaži mi fotografiju!',
        answer: 'Pokaži mi je!',
        accept: ['Pokaži mi ju!'],
        hint: 'fotografija is feminine. The short word goes after mi.',
        explanation:
          'Pokaži mi je! — the "to whom" word mi first, then the "what" word je (also ju) for a feminine noun.',
      },
      13,
      1,
      14,
      10,
      {
        type: 'listen',
        audio: 'Nemojte pušiti ovdje, molim Vas.',
        q: 'What is the speaker doing?',
        options: [
          'Inviting you to smoke outside',
          'Asking a friend for a cigarette',
          'Politely forbidding smoking here',
          'Saying that smoking is allowed here',
        ],
        correct: 2,
        explanation:
          'Nemojte + the infinitive is a polite ban: please do not smoke here. Bans usually take the imperfective verb, pušiti.',
      },
      {
        type: 'dictate',
        audio: 'Javi mi se sutra!',
        answer: 'Javi mi se sutra!',
        hint: 'Four words: "Get in touch with me tomorrow!" Two short words follow the command.',
        explanation:
          'Javi mi se sutra! — the short words come right after the command: mi, then se.',
      },
    ],
  },

  // ══ UNIT 8 ═════════════════════════════════════════════════════════════════

  // ── The vocative revisited ─────────────────────────────────────────────────
  'vocative-review': {
    text: {
      kind: 'dialogue',
      title: 'Bakin rođendan',
      lines: [
        {
          who: 'Petar',
          hr: 'Konobaru, molim Vas! Imamo rezervaciju za osam osoba.',
          en: 'Waiter, please! We have a reservation for eight people.',
        },
        {
          who: 'Konobar',
          hr: 'Dobra večer, gospodine! Izvolite, Vaš stol je kod prozora.',
          en: 'Good evening, sir! This way, your table is by the window.',
        },
        {
          who: 'Petar',
          hr: 'Hvala. Djeco, dođite! Bako, sjedni ovdje, kod mene.',
          en: 'Thank you. Children, come! Grandma, sit here, by me.',
        },
        {
          who: 'Baka',
          hr: 'Hvala, Petre. A gdje je tvoja sestra?',
          en: 'Thank you, Petar. And where is your sister?',
        },
        {
          who: 'Marija',
          hr: 'Evo me! Oprosti, bako. Oprosti, brate, opet kasnim.',
          en: 'Here I am! Sorry, Grandma. Sorry, brother, I am late again.',
        },
        {
          who: 'Petar',
          hr: 'Kao uvijek, sestro. Dečki, ostavite mobitele, jedemo!',
          en: 'As always, sister. Guys, put your phones away, we are eating!',
        },
        { who: 'Konobar', hr: 'Gospođo, želite li juhu?', en: 'Madam, would you like soup?' },
        {
          who: 'Baka',
          hr: 'Rado, mladiću! I donesite djeci sok, molim Vas.',
          en: 'Gladly, young man! And bring the children some juice, please.',
        },
        {
          who: 'Petar',
          hr: 'Dragi moji, živjeli! Sretan rođendan, bako!',
          en: 'My dear ones, cheers! Happy birthday, Grandma!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: whose birthday is it, and who arrives late?',
          options: [
            'Petar’s birthday; Grandma arrives late',
            'Marija’s birthday; the children arrive late',
            'Grandma’s birthday; Marija arrives late',
            'The waiter’s birthday; Petar arrives late',
          ],
          correct: 2,
          hint: 'The last line names the birthday person. The late one apologizes twice.',
          explanation:
            'Petar ends with: Sretan rođendan, bako! And Marija says: Oprosti … opet kasnim.',
        },
        {
          q: 'Grandma calls Petar "Petre", but Petar calls the waiter "Konobaru". Why -e for one and -u for the other?',
          options: [
            'Petre is for family, and -u is for strangers',
            'Petar is a name and names never take -u',
            'Konobaru is the polite form that goes with Vi',
            'Most masculine words take -e, but job words in -ar usually take -u',
          ],
          correct: 3,
          hint: 'Both words end in -ar. One is a first name, the other names a person doing a job.',
          explanation:
            'Petar loses its fleeting a and takes the usual -e: Petre. Words for a person doing a job that end in -ar usually take -u: konobaru. (You will also hear konobare.)',
        },
        {
          type: 'type',
          q: 'Now you. The waiter is called Josip, and Petar knows him: Hvala, ____!',
          answer: 'Josipe',
          hint: 'The name ends in a hard consonant, like Ivan.',
          explanation: 'Hvala, Josipe! — a masculine name in a hard consonant adds -e.',
        },
        {
          type: 'type',
          q: 'Grandma calls her grandson Juraj to the table: ____, dođi!',
          answer: 'Juraju',
          hint: 'j is a soft consonant, so the ending is not -e.',
          explanation: 'Juraju, dođi! — after a soft consonant the masculine ending is -u.',
        },
        {
          type: 'transform',
          q: 'Marija says it to her uncle (stric) instead of her brother. Mind the consonant.',
          from: 'Oprosti, brate!',
          answer: 'Oprosti, striče!',
          hint: 'Before the ending -e, c changes — the same way it does in otac → oče.',
          explanation: 'Oprosti, striče! — c becomes č before -e: stric → striče.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'You are calling each of these men. What happens to the word?',
        groups: ['Add -e', 'Add -u', 'Stays as it is'],
        items: [
          { hr: 'Josip', group: 0 },
          { hr: 'učitelj', group: 1 },
          { hr: 'Marko', group: 2 },
          { hr: 'profesor', group: 0 },
          { hr: 'vozač', group: 1 },
          { hr: 'Hrvoje', group: 2 },
          { hr: 'doktor', group: 0 },
          { hr: 'Mate', group: 2 },
        ],
        explanation:
          'A hard consonant takes -e (Josipe, profesore, doktore). A soft consonant such as lj or č takes -u (učitelju, vozaču). A man’s name that ends in -o or -e does not change.',
      },
      5,
      {
        type: 'match',
        q: 'Who is being called? Match each call to the person.',
        pairs: [
          ['Bako!', 'your grandmother'],
          ['Brate!', 'your brother'],
          ['Učiteljice!', 'your teacher, a woman'],
          ['Oče!', 'your father, formally'],
          ['Dame i gospodo!', 'an audience'],
        ],
        explanation:
          'baka → bako, brat → brate, učiteljica → učiteljice, otac → oče (c becomes č, and the a drops), gospoda → gospodo.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Sir, is this your umbrella?"',
        words: ['Gospodine,', 'je', 'li', 'ovo', 'Vaš', 'kišobran?'],
        accept: ['Je li ovo Vaš kišobran, gospodine?'],
        explanation:
          'Gospodine, je li ovo Vaš kišobran? The person you call is set off by a comma, at the start or at the end.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Djeca', 'moja,', 'dođite', 'na', 'ručak!'],
        wrong: 0,
        answer: 'Djeco',
        hint: 'You are calling them. This group word behaves like a feminine noun in -a.',
        explanation:
          'Djeco moja, dođite na ručak! — djeca, braća and gospoda take -o when you call them, like sestra → sestro.',
      },
      8,
      {
        type: 'tf',
        q: '"Ana!" and "Ano!" are both correct ways to call a woman named Ana.',
        answer: true,
        hint: 'The lesson says usage varies for first names in -a.',
        explanation:
          'True. In everyday speech many names in -a are called out unchanged (Ana!), and the traditional -o form (Ano!) is also correct.',
      },
      4,
      {
        type: 'transform',
        q: 'This opens a letter, but the name is still in its dictionary form. Put it right.',
        from: 'Dragi Petar,',
        answer: 'Dragi Petre,',
        hint: 'The describing word stays as it is. The name drops its fleeting a and takes the hard-consonant ending.',
        explanation:
          'Dragi Petre, — the name goes into the vocative; dragi keeps its ordinary form.',
      },
      9,
      10,
      11,
      {
        type: 'listen',
        audio: 'Čovječe, što radiš?',
        q: 'How does the speaker address the other person?',
        options: [
          'Politely, as "sir"',
          'Casually, as "man"',
          'By his job, as "waiter"',
          'As a group of children',
        ],
        correct: 1,
        explanation:
          'Čovječe is the calling form of čovjek — k becomes č before -e. It is casual: "Man, what are you doing?"',
      },
      {
        type: 'dictate',
        audio: 'Dobar dan, gospođo Kovač!',
        answer: 'Dobar dan, gospođo Kovač!',
        hint: 'Four words. A polite greeting to Mrs. Kovač — a woman’s surname does not change.',
        explanation: 'Dobar dan, gospođo Kovač! — gospođa → gospođo; Kovač stays as it is.',
      },
    ],
  },

  // ── Modal verbs ────────────────────────────────────────────────────────────
  'modal-verbs-a2': {
    text: {
      kind: 'dialogue',
      title: 'Smijem li na koncert?',
      lines: [
        {
          who: 'Jakov',
          hr: 'Mama, smijem li večeras ići na koncert?',
          en: 'Mom, may I go to the concert tonight?',
        },
        {
          who: 'Mama',
          hr: 'Smiješ, ali prvo moraš napisati zadaću.',
          en: 'You may, but first you have to do your homework.',
        },
        {
          who: 'Jakov',
          hr: 'Ne moram, sutra je subota! Mogu je napisati u nedjelju.',
          en: 'I do not have to, tomorrow is Saturday! I can do it on Sunday.',
        },
        {
          who: 'Mama',
          hr: 'Dobro. Ali ne smiješ doći kasno. Moraš biti kod kuće do jedanaest.',
          en: 'All right. But you must not come home late. You have to be home by eleven.',
        },
        {
          who: 'Jakov',
          hr: 'Do jedanaest? Koncert počinje u devet! Ne mogu doći tako rano.',
          en: 'By eleven? The concert starts at nine! I cannot come that early.',
        },
        {
          who: 'Mama',
          hr: 'Onda do ponoći. I trebaš uzeti jaknu, vani je hladno.',
          en: 'By midnight, then. And you should take a jacket, it is cold outside.',
        },
        {
          who: 'Jakov',
          hr: 'Neću jaknu, mama! Hoćeš li mi dati novac za kartu?',
          en: 'I do not want a jacket, Mom! Will you give me money for the ticket?',
        },
        {
          who: 'Mama',
          hr: 'Mogu, ali sutra moraš oprati auto.',
          en: 'I can, but tomorrow you have to wash the car.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: by when must Jakov be home in the end, and what must he do tomorrow?',
          options: [
            'By eleven; do his homework',
            'By midnight; wash the car',
            'By nine; buy a jacket',
            'By midnight; do his homework',
          ],
          correct: 1,
          hint: 'Mom gives a time, then changes it. Her last line names tomorrow’s job.',
          explanation:
            'First do jedanaest, then do ponoći — by midnight. And tomorrow: moraš oprati auto. The homework can wait until Sunday.',
        },
        {
          q: 'Jakov says "Ne moram" about the homework, and Mom says "ne smiješ doći kasno". What is the difference?',
          options: [
            'None — both mean that something is forbidden',
            'Ne moram is polite, ne smiješ is rude',
            'Ne moram is about the past, ne smiješ about the future',
            'Ne moram means there is no need; ne smiješ means it is forbidden',
          ],
          correct: 3,
          hint: 'Is anyone forbidding Jakov to do his homework today?',
          explanation:
            'Negated morati only removes the obligation: I do not have to. A ban needs smjeti: ne smiješ — you must not.',
        },
        {
          type: 'type',
          q: 'Now you. Jakov and his sister ask together for permission: ____ li ići na koncert?',
          answer: 'Smijemo',
          accept: ['Možemo'],
          hint: 'They are asking permission, and the subject is "we".',
          explanation:
            'Smijemo li ići na koncert? — smjeti asks whether something is allowed; the mi form ends in -emo. (In everyday speech Možemo li…? asks the same.)',
        },
        {
          type: 'type',
          q: 'Mom is telling Dad about the jacket. Jakov does not want to take it: Jakov ____ uzeti jaknu.',
          answer: 'neće',
          accept: ['ne želi'],
          hint: 'The negative of htjeti is one word. You need the on form of the word Jakov uses about himself.',
          explanation:
            'Jakov neće uzeti jaknu. — neću, nećeš, neće: the negative of htjeti is written as one word.',
        },
        {
          type: 'transform',
          q: 'This only says he does not have to. Change it so that it FORBIDS him to come late.',
          from: 'Jakov ne mora doći kasno.',
          answer: 'Jakov ne smije doći kasno.',
          hint: 'A ban needs the verb of permission, in the on form.',
          explanation:
            'Jakov ne smije doći kasno. — ne smije is "must not". ne mora would leave the choice to him.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'What does each one say about him? Match the verb to its meaning.',
        pairs: [
          ['Može.', 'He is able to.'],
          ['Mora.', 'He has to.'],
          ['Smije.', 'He is allowed to.'],
          ['Hoće.', 'He wants to.'],
          ['Ne mora.', 'He does not have to.'],
        ],
        explanation:
          'moći is ability, morati obligation, smjeti permission, htjeti wanting. Negated morati removes the obligation — it does not forbid.',
      },
      4,
      0,
      {
        type: 'sort',
        q: 'Is it forbidden, or just not necessary?',
        groups: ['It is forbidden', 'It is not necessary'],
        items: [
          { hr: 'Ne smiješ pušiti ovdje.', group: 0 },
          { hr: 'Ne moraš platiti danas.', group: 1 },
          { hr: 'Ne smijemo kasniti.', group: 0 },
          { hr: 'Ne moramo ustati rano.', group: 1 },
          { hr: 'Djeca ne smiju sama na ulicu.', group: 0 },
          { hr: 'Ne morate čekati.', group: 1 },
        ],
        explanation:
          'ne smjeti forbids; ne morati only says there is no obligation. English "must not" is always ne smjeti.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "May I sit here?"',
        words: ['Smijem', 'li', 'sjesti', 'ovdje?'],
        accept: ['Smijem li ovdje sjesti?'],
        explanation:
          'Smijem li sjesti ovdje? The modal opens the question, li follows it, and the second verb is an infinitive.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moramo', 'kupimo', 'kruh', 'i', 'mlijeko.'],
        wrong: 1,
        answer: 'kupiti',
        hint: 'After a modal, the second verb does not take a person ending.',
        explanation:
          'Moramo kupiti kruh i mlijeko. — only the modal is conjugated; the second verb stays in the infinitive.',
      },
      6,
      7,
      {
        type: 'tf',
        q: '"Ne moraš doći" forbids someone to come.',
        answer: false,
        hint: 'Which verb is negated here — the one for obligation, or the one for permission?',
        explanation:
          'False. Ne moraš doći means "you do not have to come". To forbid it you would say Ne smiješ doći.',
      },
      8,
      {
        type: 'transform',
        q: 'Too blunt. Turn the order into a question with moći — to a friend.',
        from: 'Daj mi vodu!',
        answer: 'Možeš li mi dati vodu?',
        accept: ['Možeš li mi dati vode?', 'Možeš li mi dati vodu, molim te?'],
        hint: 'Start with the ti form of moći and li. The short word comes next, and the second verb goes into its dictionary form.',
        explanation:
          'Možeš li mi dati vodu? — a modal question softens the request; dati is the infinitive of daj.',
      },
      2,
      9,
      3,
      {
        type: 'listen',
        audio: 'Ovdje ne smijete parkirati.',
        q: 'What does the speaker tell you?',
        options: [
          'You do not have to park here',
          'You cannot find a parking space here',
          'You should park here',
          'You are not allowed to park here',
        ],
        correct: 3,
        explanation:
          'ne smijete — it is forbidden. "You do not have to park here" would be Ovdje ne morate parkirati.',
      },
      {
        type: 'dictate',
        audio: 'Moram učiti za ispit.',
        answer: 'Moram učiti za ispit.',
        hint: 'Four words: "I have to study for the exam."',
        explanation: 'Moram učiti za ispit. — the modal, then the infinitive.',
      },
    ],
  },

  // ── Volunteering ───────────────────────────────────────────────────────────
  volunteering: {
    text: {
      kind: 'text',
      title: 'Zašto volontiram',
      lines: [
        {
          hr: 'Zovem se Ema i volonterka sam u skloništu za životinje.',
          en: 'My name is Ema and I am a volunteer at an animal shelter.',
        },
        {
          hr: 'Svake subote šetam pse i čistim sklonište.',
          en: 'Every Saturday I walk the dogs and clean the shelter.',
        },
        {
          hr: 'Prijavila sam se prije dvije godine, kad sam vidjela oglas udruge.',
          en: 'I signed up two years ago, when I saw the association’s ad.',
        },
        {
          hr: 'Prošli mjesec smo skupili tristo kilograma hrane za pse i mačke.',
          en: 'Last month we collected three hundred kilograms of food for dogs and cats.',
        },
        {
          hr: 'Moj brat Leon ne voli pse, ali i on pomaže ljudima: dvaput godišnje daruje krv.',
          en: 'My brother Leon does not like dogs, but he helps people too: he gives blood twice a year.',
        },
        {
          hr: 'Naša baka kaže: „Kad bih imala dvadeset godina, i ja bih volontirala!”',
          en: 'Our grandma says: "If I were twenty, I would volunteer too!"',
        },
        {
          hr: 'Ali ona već pomaže: svaki tjedan kuha za pučku kuhinju.',
          en: 'But she already helps: every week she cooks for the soup kitchen.',
        },
        {
          hr: 'Za volontiranje ne dobivam novac, ali sam dobila puno prijatelja.',
          en: 'I do not get money for volunteering, but I have gained a lot of friends.',
        },
        {
          hr: 'A vi? Biste li htjeli pomoći? Prijavite se!',
          en: 'And you? Would you like to help? Sign up!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what does Ema do every Saturday, and how does her brother help?',
          options: [
            'She cooks for the soup kitchen; he walks dogs',
            'She collects food; he cleans the shelter',
            'She walks dogs and cleans the shelter; he gives blood',
            'She gives blood; he works at the shelter',
          ],
          correct: 2,
          hint: 'Ema is with animals. Leon does not like dogs, so he helps people in a different way.',
          explanation:
            'Ema: šetam pse i čistim sklonište. Leon: dvaput godišnje daruje krv. The cooking is Grandma’s.',
        },
        {
          q: 'Ema writes "Svake subote šetam pse" but "Prošli mjesec smo skupili tristo kilograma hrane" — skupili, not skupljali. Why the perfective verb?',
          options: [
            'Because it happened in the past, and the past always takes the perfective',
            'Because it is one finished job with a counted result',
            'Because several people did it together',
            'Because hrana is a feminine noun',
          ],
          correct: 1,
          hint: 'One sentence describes a habit. What does the other describe — and what number is in it?',
          explanation:
            'Walking the dogs is a habit: imperfective. The collection is done and counted — three hundred kilograms — so it takes the perfective skupiti.',
        },
        {
          type: 'type',
          q: 'Now you. Say whom Ema helps: Ema pomaže ____. (životinje)',
          answer: 'životinjama',
          hint: 'pomagati takes the "to whom" case. For a feminine noun in the plural, think of the ending in "ženama".',
          explanation:
            'Ema pomaže životinjama. — the one you help is in the dative: životinje → životinjama.',
        },
        {
          type: 'type',
          q: 'Grandpa has the same dream as Grandma: Kad bih imao vremena, ____ bih u udruzi. (volontirati)',
          answer: 'volontirao',
          hint: 'The result half of an imagined condition needs the participle — and Grandpa is a man.',
          explanation:
            'Kad bih imao vremena, volontirao bih u udruzi. — both halves take the conditional, and the participle agrees with the speaker.',
        },
        {
          type: 'transform',
          q: 'Leon did it yesterday. Put his sentence in the past.',
          from: 'Prijavit ću se na akciju.',
          answer: 'Prijavio sam se na akciju.',
          accept: ['Jučer sam se prijavio na akciju.', 'Prijavio sam se na akciju jučer.'],
          hint: 'The participle agrees with Leon, and the helping verb stands before the small word that travels with this verb.',
          explanation:
            'Prijavio sam se na akciju. — prijaviti se always keeps its se, and sam comes before se.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['udruga', 'association'],
          ['sklonište', 'shelter'],
          ['pučka kuhinja', 'soup kitchen'],
          ['humanitarna akcija', 'charity drive'],
          ['potvrda', 'certificate'],
        ],
        explanation:
          'Five words from the volunteering table. Mind the locative of udruga: u udruzi.',
      },
      7,
      {
        type: 'sort',
        q: 'A habit, or one finished job?',
        groups: ['A habit', 'One finished job'],
        items: [
          { hr: 'Svake subote šetam pse.', group: 0 },
          { hr: 'Jučer smo očistili plažu.', group: 1 },
          { hr: 'Darujem krv dvaput godišnje.', group: 0 },
          { hr: 'Prošli tjedan smo skupili odjeću.', group: 1 },
          { hr: 'Često posjećujemo dom za starije osobe.', group: 0 },
          { hr: 'Jučer sam darovala krv.', group: 1 },
        ],
        explanation:
          'A habit takes an imperfective verb, often with a word for how often. A job that is done and finished takes a perfective verb in the past.',
      },
      5,
      6,
      {
        type: 'order',
        q: 'Put the words in order — a woman speaking: "I signed up as a volunteer."',
        words: ['Prijavila', 'sam', 'se', 'kao', 'volonterka.'],
        accept: ['Kao volonterka sam se prijavila.'],
        explanation:
          'Prijavila sam se kao volonterka. The short words stand in second place, sam before se.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Svake', 'nedjelje', 'pomažem', 'baku', 'u', 'vrtu.'],
        wrong: 3,
        answer: 'baki',
        hint: 'The person helped is not a direct object: pomagati asks "to whom?"',
        explanation:
          'Svake nedjelje pomažem baki u vrtu. — pomagati takes the dative: baka → baki.',
      },
      4,
      {
        type: 'tf',
        q: 'Volonter za svoj rad dobiva plaću.',
        answer: false,
        hint: 'plaća is the money you get for a job.',
        explanation:
          'False — a volunteer works without pay. Many associations give a potvrda o volontiranju, a certificate of the hours worked.',
      },
      9,
      {
        type: 'transform',
        q: 'Now it is a wish, not a fact: a woman says she would love to do it.',
        from: 'Pomažem u pučkoj kuhinji.',
        answer: 'Voljela bih pomagati u pučkoj kuhinji.',
        accept: [
          'Ja bih voljela pomagati u pučkoj kuhinji.',
          'Voljela bih pomoći u pučkoj kuhinji.',
          'Rado bih pomagala u pučkoj kuhinji.',
          'Htjela bih pomagati u pučkoj kuhinji.',
        ],
        hint: 'Open with the conditional of voljeti in the form for a woman. The verb of the wish then goes into its dictionary form.',
        explanation:
          'Voljela bih pomagati u pučkoj kuhinji. — the conditional of voljeti + the infinitive, never the present.',
      },
      1,
      {
        type: 'listen',
        audio: 'U subotu čistimo plažu. Hoćeš li doći?',
        q: 'What is the speaker doing?',
        options: [
          'Inviting you to a beach clean-up',
          'Telling you that the beach is closed',
          'Asking whether you went to the beach',
          'Saying they cleaned the beach last Saturday',
        ],
        correct: 0,
        explanation:
          'čistimo plažu — we are cleaning the beach; Hoćeš li doći? — will you come? It is an invitation.',
      },
      {
        type: 'dictate',
        audio: 'Udruga treba nove volontere.',
        answer: 'Udruga treba nove volontere.',
        hint: 'Four words: "The association needs new volunteers."',
        explanation:
          'Udruga treba nove volontere. — trebati + the accusative plural: novi volonteri → nove volontere.',
      },
    ],
  },

  // ── Agreeing and disagreeing ───────────────────────────────────────────────
  'agreeing-disagreeing': {
    text: {
      kind: 'dialogue',
      title: 'Rad od kuće',
      lines: [
        {
          who: 'Dora',
          hr: 'Po mom mišljenju, rad od kuće je odličan. Što ti misliš, Borna?',
          en: 'In my opinion, working from home is great. What do you think, Borna?',
        },
        {
          who: 'Borna',
          hr: 'Djelomično se slažem. S jedne strane, ne moraš putovati na posao.',
          en: 'I partly agree. On the one hand, you do not have to commute.',
        },
        {
          who: 'Dora',
          hr: 'Tako je! Ne gubim dva sata u tramvaju.',
          en: 'That is right! I do not lose two hours on the tram.',
        },
        {
          who: 'Borna',
          hr: 'S druge strane, kod kuće si sama. Ja volim raditi s ljudima.',
          en: 'On the other hand, at home you are alone. I like working with people.',
        },
        {
          who: 'Dora',
          hr: 'Razumijem, ali u uredu je glasno i ne mogu raditi.',
          en: 'I understand, but the office is loud and I cannot work.',
        },
        {
          who: 'Borna',
          hr: 'Ne bih rekao. Naš ured je miran.',
          en: 'I would not say so. Our office is quiet.',
        },
        {
          who: 'Dora',
          hr: 'Miran? Ivan cijeli dan telefonira!',
          en: 'Quiet? Ivan is on the phone all day!',
        },
        {
          who: 'Borna',
          hr: 'Dobro, u pravu si. Ali kavu volim piti s kolegama.',
          en: 'OK, you are right. But I like drinking coffee with my colleagues.',
        },
        { who: 'Dora', hr: 'S tim se slažem!', en: 'That I agree with!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Borna see as good and as bad about working from home?',
          options: [
            'Good: it is quiet; bad: the coffee',
            'Good: more money; bad: the long day',
            'Good: working with people; bad: the tram',
            'Good: no commute; bad: you are alone',
          ],
          correct: 3,
          hint: 'He weighs it up with "s jedne strane" and "s druge strane".',
          explanation:
            'S jedne strane, ne moraš putovati na posao — no commute. S druge strane, kod kuće si sama — you are alone.',
        },
        {
          q: 'Dora says the office is loud. Borna answers "Ne bih rekao" rather than "To nije točno". What does his choice do?',
          options: [
            'It shows that he was not listening',
            'It turns his answer into a question',
            'It softens the disagreement: "I would not say so"',
            'It makes the disagreement stronger',
          ],
          correct: 2,
          hint: 'Which verb form is "bih rekao"? Think of what that form does to wishes and requests.',
          explanation:
            'The conditional softens: Ne bih rekao is a polite way to disagree. To nije točno flatly says the other person is wrong.',
        },
        {
          type: 'type',
          q: 'Now you. Dora disagrees just as gently — and she is a woman: Ne bih ____.',
          answer: 'rekla',
          hint: 'The same phrase as Borna’s, but the participle agrees with a woman.',
          explanation: 'Ne bih rekla. — rekao for a man, rekla for a woman.',
        },
        {
          type: 'type',
          q: 'Tell Dora and Borna together that they are right: U pravu ____.',
          answer: 'ste',
          hint: 'The phrase is built with biti. Two people need the vi form.',
          explanation: 'U pravu ste. — u pravu + biti: u pravu sam, u pravu si, u pravu ste.',
        },
        {
          type: 'transform',
          q: 'Dora is not sure Borna agrees. Turn the statement into a question.',
          from: 'Slažeš se sa mnom.',
          answer: 'Slažeš li se sa mnom?',
          hint: 'The question word li comes straight after the verb, and the small word that travels with this verb comes after li.',
          explanation: 'Slažeš li se sa mnom? — verb, li, se. Never "Slažeš se li".',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'What is the speaker doing?',
        groups: ['Agreeing', 'Disagreeing', 'Not sure'],
        items: [
          { hr: 'Tako je.', group: 0 },
          { hr: 'To nije točno.', group: 1 },
          { hr: 'Ovisi.', group: 2 },
          { hr: 'Imaš pravo.', group: 0 },
          { hr: 'Ne bih rekao.', group: 1 },
          { hr: 'Ne znam baš.', group: 2 },
          { hr: 'Upravo tako.', group: 0 },
          { hr: 'Možda.', group: 2 },
        ],
        explanation:
          'Tako je, Imaš pravo and Upravo tako agree. To nije točno and Ne bih rekao disagree. Ovisi, Ne znam baš and Možda leave it open.',
      },
      4,
      5,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['Po meni…', 'As I see it…'],
          ['Osim toga…', 'Besides that…'],
          ['S druge strane…', 'On the other hand…'],
          ['Ovisi o cijeni.', 'It depends on the price.'],
          ['Svakako.', 'Definitely.'],
        ],
        explanation:
          'Po meni gives your view, Osim toga adds a point, S druge strane brings the other side.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I partly agree with you."',
        words: ['Djelomično', 'se', 'slažem', 's', 'tobom.'],
        accept: ['S tobom se djelomično slažem.'],
        explanation:
          'Djelomično se slažem s tobom. The small word se takes second place, so here it stands before the verb.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Marija', 'nije', 'siguran', 'u', 'to.'],
        wrong: 2,
        answer: 'sigurna',
        hint: 'The word agrees with the person who is not sure.',
        explanation: 'Marija nije sigurna u to. — siguran for a man, sigurna for a woman.',
      },
      7,
      {
        type: 'tf',
        q: '"Nisi u pravu" means "You have no right to do that".',
        answer: false,
        hint: 'Think of what "U pravu si" means, and negate it.',
        explanation:
          'False. Nisi u pravu means "you are wrong". It is Nemaš pravo that can mean "you have no right".',
      },
      {
        type: 'transform',
        q: 'Soften it with the conditional — a man speaks: "I would not agree."',
        from: 'Ne slažem se.',
        answer: 'Ne bih se složio.',
        accept: ['Ja se ne bih složio.'],
        hint: 'Use the perfective partner, složiti se: the auxiliary, then the small word, then the participle.',
        explanation:
          'Ne bih se složio. — bih, then se, then the participle. A woman says Ne bih se složila.',
      },
      8,
      {
        type: 'listen',
        audio: 'S jedne strane, stan je lijep. S druge strane, preskup je.',
        q: 'What does the speaker think of the apartment?',
        options: [
          'It is perfect',
          'It is cheap, but small',
          'It is nice, but too expensive',
          'It is ugly and expensive',
        ],
        correct: 2,
        explanation:
          'S jedne strane … lijep — on the one hand it is nice. S druge strane, preskup je — on the other hand, it is too expensive.',
      },
      {
        type: 'dictate',
        audio: 'Imate pravo, ali nisam sigurna.',
        answer: 'Imate pravo, ali nisam sigurna.',
        hint: 'Five words. A woman politely tells someone they are right — but she has her doubts.',
        explanation:
          'Imate pravo, ali nisam sigurna. — granting the point first, then the doubt, softens a disagreement.',
      },
    ],
  },

  // ── Adjectives in the dative ───────────────────────────────────────────────
  'dative-adjectives': {
    text: {
      kind: 'dialogue',
      title: 'Pokloni za sve',
      lines: [
        {
          who: 'Tea',
          hr: 'Sutra putujemo u Split. Što ćemo kupiti tvojoj obitelji?',
          en: 'Tomorrow we are going to Split. What shall we buy for your family?',
        },
        {
          who: 'Vito',
          hr: 'Mojoj mami čokoladu, a mom starom djedu knjigu o povijesti.',
          en: 'Chocolate for my mom, and a history book for my old grandpa.',
        },
        { who: 'Tea', hr: 'A tvojoj maloj sestri?', en: 'And for your little sister?' },
        {
          who: 'Vito',
          hr: 'Njoj ne znam. Ona nikad ne vjeruje mom ukusu.',
          en: 'For her, I do not know. She never trusts my taste.',
        },
        {
          who: 'Tea',
          hr: 'Onda vjeruj mojem! Tvojoj maloj sestri kupit ćemo šal, a tvojim bakama cvijeće.',
          en: 'Then trust mine! We will buy your little sister a scarf, and your grandmas flowers.',
        },
        {
          who: 'Vito',
          hr: 'Dobra ideja. I moram zahvaliti našem dobrom susjedu — on čuva našu mačku.',
          en: 'Good idea. And I have to thank our good neighbor — he is looking after our cat.',
        },
        {
          who: 'Tea',
          hr: 'Tom ljubaznom čovjeku kupit ćemo vino.',
          en: 'We will buy that kind man some wine.',
        },
        { who: 'Vito', hr: 'A što ćeš kupiti meni?', en: 'And what will you buy for me?' },
        {
          who: 'Tea',
          hr: 'Svom dragom mužu? Ništa — ti nosiš sve torbe!',
          en: 'For my dear husband? Nothing — you are carrying all the bags!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what will Vito’s grandpa get, and what will the neighbor get?',
          options: [
            'Grandpa a scarf; the neighbor chocolate',
            'Grandpa a history book; the neighbor wine',
            'Grandpa wine; the neighbor flowers',
            'Grandpa chocolate; the neighbor a history book',
          ],
          correct: 1,
          hint: 'One present is something to read, the other something to drink.',
          explanation:
            'mom starom djedu knjigu o povijesti — a history book for Grandpa. Tom ljubaznom čovjeku kupit ćemo vino — wine for the neighbor.',
        },
        {
          q: 'Vito says "mom starom djedu", and Tea says "tvojoj maloj sestri". Both answer "for whom?" — so why are the endings different?',
          options: [
            'Djed is older than the sister',
            'The first is dative and the second is locative',
            'Djed is masculine and sestra is feminine, and each gender has its own dative ending',
            'Vito is a man and Tea is a woman',
          ],
          correct: 2,
          hint: 'The endings follow the noun, not the speaker. Compare the two nouns.',
          explanation:
            'Both are dative. Words in front of a masculine noun take -om (mom starom djedu); in front of a feminine noun they take -oj (tvojoj maloj sestri).',
        },
        {
          type: 'type',
          q: 'Now you. Vito also writes to a new colleague, a man: Pišem ____ kolegi. (nov)',
          answer: 'novom',
          accept: ['novome', 'novomu'],
          hint: 'kolega ends in -a, but he is a man — so the describing word takes the masculine ending.',
          explanation:
            'Pišem novom kolegi. — kolega declines like a noun in -a, but the words in front of it are masculine.',
        },
        {
          type: 'type',
          q: 'The flowers are for both grandmas — and they are good grandmas: Kupujemo cvijeće ____ bakama. (dobar)',
          answer: 'dobrim',
          hint: 'bakama is plural, and all genders share one plural ending. Drop the fleeting a first.',
          explanation:
            'Kupujemo cvijeće dobrim bakama. — the dative plural ending is -im: dobar → dobr- → dobrim.',
        },
        {
          type: 'transform',
          q: 'It turns out Vito has two little sisters. Make the person plural.',
          from: 'Kupujem šal svojoj maloj sestri.',
          answer: 'Kupujem šal svojim malim sestrama.',
          accept: ['Svojim malim sestrama kupujem šal.', 'Kupujem svojim malim sestrama šal.'],
          hint: 'Three words change: the possessive, the describing word and the noun.',
          explanation:
            'Kupujem šal svojim malim sestrama. — plural dative: -im on the words in front, -ama on the noun.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'To whom? Sort each noun by the form of "star" that goes in front of it.',
        groups: ['starom …', 'staroj …', 'starim …'],
        items: [
          { hr: 'prijatelju', group: 0 },
          { hr: 'sestri', group: 1 },
          { hr: 'gostima', group: 2 },
          { hr: 'kolegi', group: 0 },
          { hr: 'majci', group: 1 },
          { hr: 'roditeljima', group: 2 },
          { hr: 'djedu', group: 0 },
          { hr: 'teti', group: 1 },
        ],
        explanation:
          'Masculine nouns take starom — kolegi too, because a kolega is a man. Feminine nouns take staroj, and every plural takes starim.',
      },
      4,
      5,
      {
        type: 'match',
        q: 'To whom? Match each phrase to its meaning.',
        pairs: [
          ['mom bratu', 'to my brother'],
          ['mojoj sestri', 'to my sister'],
          ['mojim roditeljima', 'to my parents'],
          ['našem liječniku', 'to our doctor, a man'],
          ['našoj liječnici', 'to our doctor, a woman'],
        ],
        explanation:
          'The ending shows gender and number: -om or -em for a man, -oj for a woman, -im for the plural.',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order — a woman speaking: "I bought a present for my good friend."',
        words: ['Kupila', 'sam', 'poklon', 'svojoj', 'dobroj', 'prijateljici.'],
        accept: [
          'Svojoj dobroj prijateljici kupila sam poklon.',
          'Poklon sam kupila svojoj dobroj prijateljici.',
          'Kupila sam svojoj dobroj prijateljici poklon.',
        ],
        explanation:
          'Kupila sam poklon svojoj dobroj prijateljici. The possessive, the adjective and the noun are all in the dative.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Pišem', 'svojoj', 'dragom', 'sestri', 'u', 'Zadar.'],
        wrong: 2,
        answer: 'dragoj',
        hint: 'sestri is feminine, and every word in front of it has to agree.',
        explanation: 'Pišem svojoj dragoj sestri u Zadar. — feminine dative is always -oj.',
      },
      7,
      {
        type: 'tf',
        q: 'In "Živim u starom stanu" and "Pomažem starom susjedu", the word "starom" has the same ending but a different job.',
        answer: true,
        hint: 'One follows u and names a place. The other answers "to whom?"',
        explanation:
          'True. The dative and locative singular look the same. After u it is the locative (a place); after pomagati it is the dative (to whom).',
      },
      9,
      {
        type: 'transform',
        q: 'The neighbor is a woman now — susjeda. Change the sentence.',
        from: 'Pomažem našem starom susjedu.',
        answer: 'Pomažem našoj staroj susjedi.',
        accept: ['Našoj staroj susjedi pomažem.'],
        hint: 'Three words change. Both describing words take the same feminine ending.',
        explanation:
          'Pomažem našoj staroj susjedi. — feminine dative: -oj, -oj, and susjeda → susjedi.',
      },
      8,
      10,
      {
        type: 'listen',
        audio: 'Poslala sam poruku svojim starim prijateljima.',
        q: 'Who got the message?',
        options: [
          'Her old friend, a man',
          'Her old friend, a woman',
          'His old friends',
          'Her old friends',
        ],
        correct: 3,
        explanation:
          'svojim starim prijateljima — -im and -ima are plural. Poslala shows that a woman sent it.',
      },
      {
        type: 'dictate',
        audio: 'Vjerujem svom liječniku.',
        answer: 'Vjerujem svom liječniku.',
        hint: 'Three words: "I trust my doctor."',
        explanation: 'Vjerujem svom liječniku. — vjerovati takes the dative: svom liječniku.',
      },
    ],
  },
};
