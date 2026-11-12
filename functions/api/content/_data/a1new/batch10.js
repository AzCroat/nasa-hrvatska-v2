// functions/api/content/_data/a1new/batch10.js
//
// New A1 lessons, batch 10 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// abstract-ost (92) · feelings (93) · imperative-negative (95) · infinitive-ci (96) ·
// formal-address (98) · travel-croatia (100, the A1 capstone).
//
// Each lesson uses only grammar taught at or before its own masterOrder: abstract-ost and
// feelings come before the imperative (94) and use none; imperative-negative and
// infinitive-ci come before the vocative (97) and use none.

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'abstract-ost',
    masterOrder: 92,
    prerequisites: ['adjectives-basic', 'genitive-intro'],
    objectives: [
      'Turn a quality into a noun with -ost: mlad → mladost, hrabar → hrabrost',
      'Use -ost nouns as the feminine i-nouns they are, in every case you know',
      'Know the everyday words that do not use -ost: sreća, sloboda, brzina',
    ],
  },
  {
    id: 'feelings',
    masterOrder: 93,
    prerequisites: ['adjectives-basic', 'reflexive-verbs', 'genitive-intro', 'dative-intro'],
    objectives: [
      'Say how you feel — sretan sam, umorna sam — with the right ending for you',
      'Use osjećam se, and the "it is … to me" pattern: dosadno mi je, žao mi je',
      'Say what you are afraid of and what you are looking forward to',
    ],
  },
  {
    id: 'imperative-negative',
    masterOrder: 95,
    prerequisites: ['imperative-basic', 'object-pronouns'],
    objectives: [
      'Tell someone not to do something with nemoj, nemojte and nemojmo + infinitive',
      'Recognise and use ne + imperative for quick warnings: Ne diraj! Ne brini!',
      'Put the little words in the right place: Nemoj mi reći, Nemojte se brinuti',
    ],
  },
  {
    id: 'infinitive-ci',
    masterOrder: 96,
    prerequisites: ['present-tense-verbs', 'modals-basic', 'past-tense', 'future-tense'],
    objectives: [
      'Use the verbs whose infinitive ends in -ći: ići, doći, otići, moći, pomoći, reći, peći',
      'Know their present forms (idem, dođem, odem, mogu, pomognem, pečem) and past (išao, došla)',
      'Write their future correctly — Doći ću — and use kažem for everyday "I say"',
    ],
  },
  {
    id: 'formal-address',
    masterOrder: 98,
    prerequisites: ['vocative-intro', 'imperative-basic', 'greetings-farewells'],
    objectives: [
      'Choose between ti and Vi, and switch every verb and pronoun with it',
      'Address people as gospodine, gospođo and gospođice',
      'Open and close a polite letter or email, with the courtesy capital Vi',
    ],
  },
  {
    id: 'travel-croatia',
    masterOrder: 100,
    prerequisites: [
      'directions-town',
      'prepositions-place',
      'instrumental-intro',
      'past-tense',
      'future-tense',
      'weather-seasons',
    ],
    objectives: [
      'Say where you are going and where you are: u Split / u Splitu, na Hvar / na Hvaru',
      'Say how you travel: vlakom, autobusom, trajektom',
      'Tell the story of a trip in the past and plan the next one in the future',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 92 · Qualities as Nouns: -ost
// ─────────────────────────────────────────────────────────
const ABSTRACT_OST = {
  id: 'abstract-ost',
  title: 'Qualities as Nouns',
  subtitle: 'From "young" to "youth" — nouns in -ost',
  icon: '💡',
  level: 'A1',
  duration: '~6 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Talking About Qualities',
      body: 'English turns "young" into "youth", "brave" into "bravery", "kind" into "kindness". Croatian does the same job with one ending far more often than English does: -ost. mlad (young) → mladost (youth), star (old) → starost (old age), hrabar (brave) → hrabrost (courage). Learn the ending and you can understand dozens of words you have never been taught.',
      icon: '💡',
    },
    {
      type: 'rule',
      title: 'How to Build It',
      body: 'Start from the FEMININE form of the adjective, the one you use with a woman or a feminine noun: mlada, hrabra, ljubazna. Take off the final -a and add -ost. mlada → mlad- → mladost. hrabra → hrabr- → hrabrost. ljubazna → ljubazn- → ljubaznost. Starting from the feminine form matters, because it has already lost the fleeting a you met earlier: hrabar becomes hrabra, so the noun is hrabrost, never "hrabarost".',
      highlight: 'hrabra → hrabrost',
    },
    {
      type: 'table',
      title: 'Adjective → Noun',
      headers: ['Adjective', 'Feminine form', 'Noun in -ost', 'Meaning'],
      rows: [
        ['mlad (young)', 'mlada', 'mladost', 'youth'],
        ['star (old)', 'stara', 'starost', 'old age'],
        ['slab (weak)', 'slaba', 'slabost', 'weakness'],
        ['iskren (honest)', 'iskrena', 'iskrenost', 'honesty'],
        ['hrabar (brave)', 'hrabra', 'hrabrost', 'courage'],
        ['mudar (wise)', 'mudra', 'mudrost', 'wisdom'],
        ['ljubazan (kind)', 'ljubazna', 'ljubaznost', 'kindness'],
        ['važan (important)', 'važna', 'važnost', 'importance'],
        ['točan (exact)', 'točna', 'točnost', 'accuracy, punctuality'],
      ],
    },
    {
      type: 'rule',
      title: 'Every -ost Noun Is Feminine',
      body: 'A noun is a naming word, and every Croatian noun has a gender. Nouns in -ost end in a consonant, so they look masculine, but every one of them is FEMININE. They are i-nouns, like noć and stvar, which you already know: radost (joy) → bez radosti (without joy), hvala na ljubaznosti (thanks for the kindness), s radošću (with joy). Everything around them is feminine too: moja mladost, velika hrabrost, iskrenost je važna, mladost je bila lijepa.',
      highlight: 'Moja mladost je bila lijepa.',
    },
    {
      type: 'table',
      title: 'One -ost Noun in Every Case',
      headers: ['Case (job in the sentence)', 'Form', 'Example'],
      rows: [
        ['nominative (the subject)', 'radost', 'Radost je velika.'],
        ['genitive (of, without)', 'radosti', 'Puno je radosti u kući.'],
        ['dative (to, for)', 'radosti', 'Veselim se toj radosti.'],
        ['accusative (the object)', 'radost', 'Osjećam veliku radost.'],
        ['locative (in, on, about)', 'radosti', 'Pričamo o radosti.'],
        ['instrumental (with)', 'radošću', 'Dočekali su nas s radošću.'],
        ['plural (more than one)', 'radosti', 'Male radosti života.'],
      ],
    },
    {
      type: 'rule',
      title: 'Not Every Quality Takes -ost',
      body: 'Some qualities have their own everyday word, and those are the ones to use: sretan (happy) → sreća (happiness, also luck). slobodan (free) → sloboda (freedom). brz (fast) → brzina (speed). dobar (good) → dobrota (goodness). And three common nouns came FIRST, with the adjective built from them, so the direction is reversed: radost (joy) → radostan (joyful), žalost (sadness) → žalostan, bolest (illness) → bolestan (ill). Mogućnost (possibility) is simply worth learning as a word.',
      highlight: 'sretan → sreća',
    },
    {
      type: 'example',
      title: '-ost Nouns in Sentences',
      items: [
        {
          hr: 'Mladost je lijepa, ali kratka.',
          en: 'Youth is beautiful, but short.',
          note: 'mladost is feminine: lijepa, kratka',
        },
        {
          hr: 'U starosti moj djed živi na selu.',
          en: 'In his old age my grandfather lives in the village.',
          note: 'u + locative: starosti',
        },
        {
          hr: 'Hvala na ljubaznosti.',
          en: 'Thank you for your kindness.',
          note: 'hvala na + locative',
        },
        {
          hr: 'Za ovaj posao treba puno hrabrosti.',
          en: 'This job takes a lot of courage.',
          note: 'puno + genitive: hrabrosti',
        },
        {
          hr: 'Iskrenost je za mene jako važna.',
          en: 'Honesty is very important to me.',
          note: 'feminine adjective: važna',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Imamo dvije mogućnosti: vlak ili autobus.',
          en: 'We have two options: the train or the bus.',
          note: 'after dvije, the same form as the plural',
        },
        {
          hr: 'To je pitanje velike važnosti.',
          en: 'That is a question of great importance.',
          note: 'genitive: velike važnosti',
        },
        {
          hr: 'Djeca su nas dočekala s velikom radošću.',
          en: 'The children greeted us with great joy.',
          note: 'instrumental: s velikom radošću',
        },
        {
          hr: 'Njegova mudrost dolazi iz iskustva.',
          en: 'His wisdom comes from experience.',
          note: 'njegova — feminine, to match mudrost',
        },
        {
          hr: 'Točnost je na poslu jako važna.',
          en: 'Punctuality is very important at work.',
          note: 'točan → točna → točnost',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'The feminine form of "mudar" (wise) is "mudra". Which noun means "wisdom"?',
      options: ['mudraost', 'mudrost', 'mudarost', 'mudrota'],
      correct: 1,
      explanation:
        'Take mudra, drop the -a and add -ost: mudrost. "Mudarost" keeps the fleeting a, and "mudraost" keeps the -a.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is correct?',
      options: [
        'Ta važnost je velik.',
        'Ta važnost je velika.',
        'Taj važnost je velik.',
        'To važnost je veliko.',
      ],
      correct: 1,
      explanation: 'Važnost is feminine, so both ta and velika are feminine: Ta važnost je velika.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, treating an -ost noun as masculine because it ends in a consonant: "Moj mladost je bio lijep". Every -ost noun is feminine: Moja mladost je bila lijepa. Second, keeping the fleeting a: "hrabarost". Build from the feminine form, hrabra, so the noun is hrabrost. Third, giving it masculine endings: "bez hrabrosta". It is an i-noun, so the genitive is bez hrabrosti.',
      highlight: 'Moja mladost je bila lijepa',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which noun is made from "hrabar" (brave)?',
          options: ['hrabarost', 'hrabrost', 'hrabrota', 'hrabrstvo'],
          correct: 1,
          explanation:
            'The feminine form is hrabra; drop the -a and add -ost: hrabrost. "Hrabarost" keeps the fleeting a.',
        },
        {
          q: 'Complete: "Hvala na tvojoj ___." (honesty)',
          options: ['iskrenost', 'iskrenosti', 'iskrenošću', 'iskrenosta'],
          correct: 1,
          explanation:
            'Hvala na takes the locative, and an i-noun ends in -i there: iskrenosti. Iskrenost is the subject form, iskrenošću the instrumental.',
        },
        {
          q: 'What gender are all nouns in -ost?',
          options: ['masculine', 'neuter', 'feminine', 'it depends on the adjective'],
          correct: 2,
          explanation:
            'All of them are feminine, though they end in a consonant: moja mladost, velika radost.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Moja mladost je bio lijep.',
            'Moj mladost je bio lijep.',
            'Moje mladost je bilo lijepo.',
            'Moja mladost je bila lijepa.',
          ],
          correct: 3,
          explanation:
            'Mladost is feminine, so moja, bila and lijepa all take the feminine ending.',
        },
        {
          q: 'Which word is the everyday Croatian for "happiness"?',
          options: ['sreća', 'sretan', 'sretno', 'sretna'],
          correct: 0,
          explanation:
            'Sreća is the noun. Sretan and sretna are the adjective "happy", and sretno means "good luck" or "happily".',
        },
        {
          q: 'Complete: "On je čovjek velike ___." (wisdom)',
          options: ['mudrost', 'mudrošću', 'mudrosti', 'mudrostu'],
          correct: 2,
          explanation:
            '"A man of great wisdom" uses the genitive, and an i-noun ends in -i: velike mudrosti. "Mudrostu" is a masculine ending.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Nouns in -ost — Key Takeaways',
      points: [
        'Feminine adjective minus -a, plus -ost: mlada → mladost, hrabra → hrabrost',
        'Every -ost noun is feminine: moja mladost, velika važnost',
        'They are i-nouns: radosti in the genitive, dative and locative, radošću with s',
        'Some qualities have their own word: sreća, sloboda, brzina, dobrota',
        'radost, žalost and bolest came first; radostan, žalostan, bolestan are built from them',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 93 · How Do You Feel?
// ─────────────────────────────────────────────────────────
const FEELINGS = {
  id: 'feelings',
  title: 'How Do You Feel?',
  subtitle: 'Happy, tired, worried, bored — and saying so correctly',
  icon: '😊',
  level: 'A1',
  duration: '~6 min',
  color: '#db2777',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'Saying How You Are',
      body: 'Beyond "dobro sam", you need to say that you are tired, happy, worried, bored, sorry or scared. Croatian uses three patterns for this, and each one is built from grammar you already know: an adjective with biti, the verb osjećati se, and the "it is … to me" pattern with the dative. This lesson puts them together.',
      icon: '😊',
    },
    {
      type: 'rule',
      title: 'Pattern 1: biti + an Adjective',
      body: 'Most feelings are adjectives (describing words), and an adjective agrees with the person it describes. A man says Sretan sam (I am happy); a woman says Sretna sam. Many of these words have a fleeting a, which disappears in the feminine and the plural: sretan → sretna → sretni, umoran → umorna, tužan → tužna. In the past and future the same agreement holds: Bio sam umoran. Bila sam umorna. Bit ću sretan.',
      highlight: 'Sretan sam. · Sretna sam.',
    },
    {
      type: 'table',
      title: 'Feelings, Masculine and Feminine',
      headers: ['English', 'Man', 'Woman', 'Group'],
      rows: [
        ['happy', 'sretan', 'sretna', 'sretni'],
        ['sad', 'tužan', 'tužna', 'tužni'],
        ['tired', 'umoran', 'umorna', 'umorni'],
        ['angry', 'ljut', 'ljuta', 'ljuti'],
        ['nervous', 'nervozan', 'nervozna', 'nervozni'],
        ['worried', 'zabrinut', 'zabrinuta', 'zabrinuti'],
        ['calm', 'miran', 'mirna', 'mirni'],
        ['excited', 'uzbuđen', 'uzbuđena', 'uzbuđeni'],
      ],
    },
    {
      type: 'rule',
      title: 'Pattern 2: osjećati se',
      body: 'Osjećati se means "to feel", and like zvati se it always carries se (see the lesson on reflexive verbs). Se goes in second place in the sentence. Osjećam se dobro. (I feel good.) Osjećam se loše. (I feel bad.) Osjećam se bolje. (I feel better.) Kako se osjećaš? (How do you feel?) Without se the verb means "to sense" something, so "Osjećam dobro" does not mean "I feel good".',
      highlight: 'Osjećam se dobro.',
    },
    {
      type: 'rule',
      title: 'Pattern 3: … mi je',
      body: 'Some feelings are said as "it is … to me", with the dative pronoun mi: Dosadno mi je. (I am bored — literally "it is boring to me".) Žao mi je. (I am sorry.) Drago mi je. (I am glad; also "nice to meet you".) Hladno mi je. (I am cold.) Teško mi je. (It is hard for me.) For other people, change the pronoun: Dosadno mu je. (He is bored.) Žao nam je. (We are sorry.)',
      highlight: 'Dosadno mi je.',
    },
    {
      type: 'rule',
      title: 'Afraid Of, Looking Forward To',
      body: 'Bojati se (to be afraid) takes the genitive, the case you learned for "of": Bojim se mraka. (I am afraid of the dark.) Ne bojim se liječnika. (I am not afraid of the doctor.) Veseliti se (to look forward to, to be glad about) takes the dative: Veselim se ljetu. (I am looking forward to the summer.) Both carry se: Bojim se, Veselim se.',
      highlight: 'Bojim se mraka. · Veselim se ljetu.',
    },
    {
      type: 'example',
      title: 'Feelings in Sentences',
      items: [
        {
          hr: 'Danas sam jako sretna.',
          en: 'I am very happy today.',
          note: 'a woman speaking: sretna',
        },
        { hr: 'Zašto si tužan?', en: 'Why are you sad?', note: 'to a man or a boy' },
        {
          hr: 'Umoran sam, radio sam cijeli dan.',
          en: 'I am tired, I worked all day.',
          note: 'a man speaking',
        },
        {
          hr: 'Mama je ljuta jer nisam oprao suđe.',
          en: "Mum is angry because I didn't wash the dishes.",
          note: 'mama → ljuta',
        },
        {
          hr: 'Osjećam se puno bolje, hvala.',
          en: 'I feel much better, thank you.',
          note: 'osjećati se + bolje',
        },
        {
          hr: 'Malo sam nervozna prije ispita.',
          en: 'I am a bit nervous before the exam.',
          note: 'prije + genitive',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Dosadno mi je, nemam što raditi.',
          en: 'I am bored, I have nothing to do.',
          note: 'it is boring to me',
        },
        {
          hr: 'Žao mi je, ne mogu doći.',
          en: "I am sorry, I can't come.",
          note: 'the everyday apology',
        },
        { hr: 'Bojim se mraka.', en: 'I am afraid of the dark.', note: 'bojati se + genitive' },
        {
          hr: 'Veselim se ljetu i moru.',
          en: 'I am looking forward to the summer and the sea.',
          note: 'veseliti se + dative',
        },
        {
          hr: 'Jučer sam bio zabrinut, ali sada sam miran.',
          en: 'Yesterday I was worried, but now I am calm.',
          note: 'past and present together',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What does "Dosadan sam" mean?',
      options: ['I am bored', 'I am boring', 'I am tired', 'I am busy'],
      correct: 1,
      explanation:
        '"Dosadan sam" describes YOU: "I am boring". To say you are bored, use the "to me" pattern: Dosadno mi je.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Veselim se ___." (the summer)',
      options: ['ljeto', 'ljeta', 'ljetu', 'ljetom'],
      correct: 2,
      explanation:
        'Veseliti se takes the dative: ljetu. Ljeto is the subject form and ljeta the genitive.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, "Dosadan sam" for "I am bored". That sentence means "I am boring". Bored is Dosadno mi je. Second, a woman saying "Sretan sam": the adjective agrees with the speaker, so she says Sretna sam. Third, dropping se: "Osjećam dobro" is not "I feel good". The verb needs se: Osjećam se dobro.',
      highlight: 'Dosadno mi je',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'A woman says "I am tired." Which is right?',
          options: ['Umoran sam.', 'Umorna sam.', 'Umorno sam.', 'Umorni sam.'],
          correct: 1,
          explanation:
            'The adjective agrees with the speaker. Umoran loses its fleeting a in the feminine: umorna.',
        },
        {
          q: 'Complete: "Osjećam ___ dobro."',
          options: ['se', 'si', 'me', 'sebe'],
          correct: 0,
          explanation: 'Osjećati se always carries se, whoever is speaking: Osjećam se dobro.',
        },
        {
          q: 'You have nothing to do and you are bored. What do you say?',
          options: ['Dosadan sam.', 'Dosadno sam.', 'Dosadno mi je.', 'Dosadna mi je.'],
          correct: 2,
          explanation:
            'Bored is "it is boring to me": Dosadno mi je. "Dosadan sam" means "I am boring".',
        },
        {
          q: 'Complete: "Bojim se ___." (the dark)',
          options: ['mrak', 'mraku', 'mrakom', 'mraka'],
          correct: 3,
          explanation: 'Bojati se takes the genitive: mraka.',
        },
        {
          q: 'Which sentence means "I am looking forward to the holiday"?',
          options: [
            'Veselim se odmoru.',
            'Veselim se odmor.',
            'Veselim odmoru.',
            'Veselim se odmora.',
          ],
          correct: 0,
          explanation:
            'Veseliti se keeps its se and takes the dative: Veselim se odmoru. Odmora would be the genitive.',
        },
        {
          q: 'A man says "I was worried yesterday." Which is right?',
          options: [
            'Jučer sam bila zabrinuta.',
            'Jučer sam bio zabrinut.',
            'Jučer sam bio zabrinuta.',
            'Jučer bio sam zabrinut.',
          ],
          correct: 1,
          explanation:
            'A man uses bio and zabrinut, and sam stays in second place, straight after jučer.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Feelings — Key Takeaways',
      points: [
        'biti + adjective, agreeing with the speaker: Sretan sam / Sretna sam',
        'osjećati se + dobro, loše, bolje: Osjećam se dobro.',
        'the "to me" pattern: Dosadno mi je, Žao mi je, Drago mi je, Hladno mi je',
        'bojati se + genitive (Bojim se mraka), veseliti se + dative (Veselim se ljetu)',
        '"Dosadan sam" means "I am boring", not "I am bored"',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 95 · Don't! — Negative Commands
// ─────────────────────────────────────────────────────────
const IMPERATIVE_NEGATIVE = {
  id: 'imperative-negative',
  title: "Don't! Negative Commands",
  subtitle: 'Nemoj, nemojte, nemojmo — and ne + imperative',
  icon: '✋',
  level: 'A1',
  duration: '~6 min',
  color: '#b91c1c',
  bg: '#fef2f2',
  slides: [
    {
      type: 'intro',
      title: 'Telling Someone Not To',
      body: 'You can already ask people to do things: Čitaj! Dođite! Now the other half — telling someone NOT to: do not worry, do not forget, do not touch that. Croatian has two ways, and you will hear both every day. The first, nemoj + infinitive, is the one to reach for first, because it works with every verb in the language.',
      icon: '✋',
    },
    {
      type: 'rule',
      title: 'Way 1: nemoj + Infinitive',
      body: 'Nemoj means "do not". It has the same three forms as any imperative: nemoj (to one person you call ti), nemojte (to a group, or politely to one person), nemojmo (let us not). After it comes the infinitive — the dictionary form of the verb, the one ending in -ti or -ći. Nemoj ići! (Do not go!) Nemojte kasniti. (Do not be late.) Nemojmo zaboraviti. (Let us not forget.) The verb itself never changes; only nemoj does.',
      highlight: 'Nemoj ići! · Nemojte kasniti.',
    },
    {
      type: 'table',
      title: 'nemoj With Any Verb',
      headers: ['Verb', 'to a friend', 'polite / a group', 'let us not'],
      rows: [
        ['ići (go)', 'Nemoj ići!', 'Nemojte ići!', 'Nemojmo ići!'],
        ['kasniti (be late)', 'Nemoj kasniti!', 'Nemojte kasniti!', 'Nemojmo kasniti!'],
        ['piti (drink)', 'Nemoj piti!', 'Nemojte piti!', 'Nemojmo piti!'],
        ['zaboraviti (forget)', 'Nemoj zaboraviti!', 'Nemojte zaboraviti!', 'Nemojmo zaboraviti!'],
        ['brinuti se (worry)', 'Nemoj se brinuti!', 'Nemojte se brinuti!', 'Nemojmo se brinuti!'],
      ],
    },
    {
      type: 'rule',
      title: 'Where the Little Words Go',
      body: 'The short unstressed words — se, and object pronouns like mi, ga, ih — go straight after nemoj, because nemoj is the first word: Nemoj mi reći! (Do not tell me!) Nemojte se brinuti. (Do not worry.) Nemoj ga zvati. (Do not call him.) It is the same second-place rule you know from Ujutro se perem.',
      highlight: 'Nemoj mi reći!',
    },
    {
      type: 'rule',
      title: 'Way 2: ne + Imperative',
      body: 'You can also put ne in front of an ordinary imperative: Ne diraj! (Do not touch!) Ne brini! (Do not worry!) Ne plači! (Do not cry!) Ne viči! (Do not shout!) This is short and direct, so it is typical of quick warnings and reassurance, especially to children and friends. Both ways are correct Croatian; in ordinary speech nemoj is the more common choice, and it never requires you to know the imperative of the verb.',
      highlight: 'Ne diraj! · Ne brini!',
    },
    {
      type: 'rule',
      title: 'Signs and Being Polite',
      body: 'On public signs you will often see ne + the infinitive, with no one addressed at all: Ne dirati! Ne naginjati se kroz prozor. That is the style of notices; when you speak to a person, use nemoj / nemojte or ne + imperative. To a stranger, add molim vas and use the -te forms: Molim vas, nemojte pušiti ovdje. (Please do not smoke here.)',
      highlight: 'Molim vas, nemojte pušiti ovdje.',
    },
    {
      type: 'example',
      title: 'Saying "Don\'t"',
      items: [
        {
          hr: 'Nemoj ići sam noću.',
          en: "Don't go alone at night.",
          note: 'nemoj + infinitive',
        },
        {
          hr: 'Nemojte se brinuti, sve je u redu.',
          en: "Don't worry, everything is fine.",
          note: 'polite, se right after nemojte',
        },
        {
          hr: 'Nemoj mi reći kraj filma!',
          en: "Don't tell me the end of the film!",
          note: 'mi right after nemoj',
        },
        {
          hr: 'Nemojmo kasniti, film počinje u osam.',
          en: "Let's not be late, the film starts at eight.",
          note: 'nemojmo = let us not',
        },
        {
          hr: 'Nemoj zaboraviti kupiti kruh.',
          en: "Don't forget to buy bread.",
          note: 'two infinitives in a row',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        { hr: 'Ne diraj, vruće je!', en: "Don't touch, it's hot!", note: 'ne + imperative' },
        {
          hr: 'Ne brini, stići ćemo na vrijeme.',
          en: "Don't worry, we'll get there on time.",
          note: 'reassurance',
        },
        {
          hr: 'Ne plači, sve će biti dobro.',
          en: "Don't cry, everything will be fine.",
          note: 'to a child or a friend',
        },
        {
          hr: 'Molim vas, nemojte pušiti ovdje.',
          en: 'Please do not smoke here.',
          note: 'to a stranger',
        },
        {
          hr: 'Nemojte ga zvati prije devet sati.',
          en: "Don't call him before nine o'clock.",
          note: 'ga right after nemojte',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Nemoj ___ kasno." (Don\'t come late — to a friend; doći)',
      options: ['dođeš', 'doći', 'dođi', 'dolazi'],
      correct: 1,
      explanation:
        'Nemoj takes the infinitive: Nemoj doći kasno. Dođeš is the present tense and dođi the imperative.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: '"Ne diraj!" is…',
      options: [
        'a statement about someone',
        'a negative command to one person',
        'a polite request to a stranger',
        'a question',
      ],
      correct: 1,
      explanation:
        'Ne + the imperative diraj tells one person not to touch. To a stranger it would be Ne dirajte or Nemojte dirati.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, conjugating the verb after nemoj: "Nemoj ideš!" After nemoj the verb stays in the infinitive: Nemoj ići! Second, putting the imperative after nemoj: "Nemoj idi!" Either say Nemoj ići! or use ne alone: Ne idi! Third, saying nemoj to a stranger. The polite form is nemojte: Nemojte se brinuti.',
      highlight: 'Nemoj ići!',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Nemoj ___!" (Don\'t go! — to a friend)',
          options: ['ideš', 'ići', 'idi', 'idem'],
          correct: 1,
          explanation:
            'Nemoj takes the infinitive: Nemoj ići! Ideš and idem are the present, idi is the imperative.',
        },
        {
          q: 'Which is right, said to a stranger: "Please do not smoke here."',
          options: [
            'Molim te, nemoj pušiti ovdje.',
            'Molim vas, nemojte pušiti ovdje.',
            'Molim vas, nemojte pušite ovdje.',
            'Molim vas, nemojte pušiš ovdje.',
          ],
          correct: 1,
          explanation:
            'A stranger gets molim vas and nemojte, and the verb stays in the infinitive: pušiti.',
        },
        {
          q: 'Which sentence means "Don\'t tell me!"?',
          options: ['Mi nemoj reći!', 'Nemoj reći mi!', 'Nemoj mi reći!', 'Nemoj meni mi reći!'],
          correct: 2,
          explanation:
            'The short word mi goes straight after nemoj, the first word: Nemoj mi reći!',
        },
        {
          q: 'Complete: "Ne ___, vruće je!" (Don\'t touch — to a child)',
          options: ['diraj', 'diraju', 'diraš', 'dirajmo'],
          correct: 0,
          explanation:
            'Ne + the imperative: diraj. Diraš and diraju are the present tense, dirajmo means "let us touch".',
        },
        {
          q: 'What does "nemojmo" mean?',
          options: ['do not (to one friend)', 'let us not', 'do not (polite)', 'we do not'],
          correct: 1,
          explanation: 'Like -imo in the imperative, nemojmo includes you: let us not.',
        },
        {
          q: 'What is wrong with "Nemoj zaboravi kruh!"?',
          options: [
            'nemoj should be nemojte',
            'Nothing is wrong',
            'kruh should be kruha',
            'zaboravi should be zaboraviti — nemoj takes the infinitive',
          ],
          correct: 3,
          explanation:
            'After nemoj comes the infinitive: Nemoj zaboraviti kruh! (Ne zaboravi kruh! is the other way to say it.)',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Negative Commands — Key Takeaways',
      points: [
        'nemoj / nemojte / nemojmo + the infinitive: Nemoj ići!',
        'the verb after nemoj never changes; only nemoj does',
        'little words go right after nemoj: Nemoj mi reći, Nemojte se brinuti',
        'ne + imperative for quick warnings: Ne diraj! Ne brini!',
        'to a stranger: Molim vas, nemojte …',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 96 · Verbs in -ći
// ─────────────────────────────────────────────────────────
const INFINITIVE_CI = {
  id: 'infinitive-ci',
  title: 'Verbs Ending in -ći',
  subtitle: 'ići, doći, moći, reći, peći — and their hidden stems',
  icon: '🔑',
  level: 'A1',
  duration: '~7 min',
  color: '#0f766e',
  bg: '#f0fdfa',
  slides: [
    {
      type: 'intro',
      title: 'A Small Group You Use All Day',
      body: 'Almost every infinitive ends in -ti: čitati, govoriti, piti. A small group ends in -ći instead: ići (go), doći (come), otići (leave), moći (can), pomoći (help), reći (say), peći (bake). They are few, but they are among the commonest verbs in the language, and their infinitive hides the stem you need for the present tense. This lesson shows each one in full.',
      icon: '🔑',
    },
    {
      type: 'rule',
      title: 'The Stem Is Hidden',
      body: 'With čitati you can see the present: čitam. With -ći verbs you cannot, because the -ći has swallowed a consonant. moći hides a g: mogu (I can), but možeš, može (the g softens to ž before -e). peći hides a k: pečem, pečeš, but peku (they bake). pomoći hides gn: pomognem. ići, doći and otići are built on the same going verb: idem, dođem, odem. There is no shortcut — learn the ja form and the rest follows.',
      highlight: 'moći → mogu, možeš',
    },
    {
      type: 'table',
      title: 'Present and Past',
      headers: ['Infinitive', 'ja', 'ti', 'oni', 'past (man / woman)'],
      rows: [
        ['ići (go)', 'idem', 'ideš', 'idu', 'išao / išla'],
        ['doći (come)', 'dođem', 'dođeš', 'dođu', 'došao / došla'],
        ['otići (leave)', 'odem', 'odeš', 'odu', 'otišao / otišla'],
        ['moći (can)', 'mogu', 'možeš', 'mogu', 'mogao / mogla'],
        ['pomoći (help)', 'pomognem', 'pomogneš', 'pomognu', 'pomogao / pomogla'],
        ['peći (bake)', 'pečem', 'pečeš', 'peku', 'pekao / pekla'],
        ['reći (say, tell)', 'kažem *', 'kažeš *', 'kažu *', 'rekao / rekla'],
      ],
    },
    {
      type: 'rule',
      title: 'reći and kažem',
      body: 'Reći has its own present (rečem, rečeš), but for everyday "I say, you say" Croatians use the present of a different verb, kazati: kažem, kažeš, kaže. Što kažeš? (What do you say?) Kažem ti istinu. (I am telling you the truth.) Reći itself is used all the time in the infinitive, the past and the future: Moram ti nešto reći. Rekao sam ti. Reći ću ti sutra. So learn the pair: reći for "to tell", kažem for "I say".',
      highlight: 'Što kažeš? · Rekao sam ti.',
    },
    {
      type: 'rule',
      title: 'The Past: -ao and -la',
      body: 'The past participle of a -ći verb shows the hidden consonant again and ends in -ao for a man, -la for a woman, -li for a group: moći → mogao, mogla, mogli; reći → rekao, rekla; peći → pekao, pekla; pomoći → pomogao. The going verbs change their stem to iš- / šl-: išao, išla, išli; došao, došla; otišao, otišla. Jučer smo išli na izlet. Ana je došla kasno.',
      highlight: 'išao · došla · rekao',
    },
    {
      type: 'rule',
      title: 'The Future Keeps the Whole Infinitive',
      body: 'With -ti verbs, when the infinitive comes before ću, the final -i drops in writing: čitat ću. With -ći verbs nothing drops: Doći ću sutra. Ići ćemo na more. Reći ću ti. Pomoći ću ti. And after modal verbs the -ći infinitive stays just as it is: Ne mogu doći. Moram otići. Možeš li mi pomoći?',
      highlight: 'Doći ću sutra.',
    },
    {
      type: 'example',
      title: '-ći Verbs in Sentences',
      items: [
        {
          hr: 'Danas ne mogu doći, imam puno posla.',
          en: "I can't come today, I have a lot of work.",
          note: 'mogu + infinitive doći',
        },
        {
          hr: 'Moram otići ranije, oprostite.',
          en: 'I have to leave early, excuse me.',
          note: 'moram + otići',
        },
        {
          hr: 'Možeš li mi pomoći s torbom?',
          en: 'Can you help me with the bag?',
          note: 'možeš — g becomes ž',
        },
        {
          hr: 'Baka peče kruh svake subote.',
          en: 'Grandma bakes bread every Saturday.',
          note: 'peći → peče',
        },
        {
          hr: 'Što kažeš na kino večeras?',
          en: 'How about the cinema tonight?',
          note: 'literally "what do you say to"',
        },
      ],
    },
    {
      type: 'example',
      title: 'Past and Future',
      items: [
        {
          hr: 'Jučer smo išli na izlet.',
          en: 'Yesterday we went on a trip.',
          note: 'ići → išli',
        },
        { hr: 'Ana je došla kasno.', en: 'Ana came late.', note: 'doći → došla' },
        {
          hr: 'Rekao sam ti istinu.',
          en: 'I told you the truth.',
          note: 'reći → rekao, a man speaking',
        },
        {
          hr: 'Sutra ću ti pomoći.',
          en: 'I will help you tomorrow.',
          note: 'the infinitive stays whole',
        },
        {
          hr: 'Doći ću u osam, ako mogu.',
          en: "I'll come at eight, if I can.",
          note: 'future + present of moći',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which is the ja form of "doći"?',
      options: ['doćem', 'dođem', 'dođim', 'doćim'],
      correct: 1,
      explanation: 'Doći → dođem, dođeš, dođe. The present has đ, not ć.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What does "Što kažeš na kino?" mean?',
      options: [
        'How about the cinema?',
        'What did you say at the cinema?',
        'Where is the cinema?',
        'I said cinema.',
      ],
      correct: 0,
      explanation: '"Što kažeš na …?" is the everyday way to suggest something: how about …?',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, "Ja možem": moći is irregular, and the ja form is mogu. Second, the future in writing: "Doć ću sutra" is how it can sound, but -ći verbs keep the whole infinitive: Doći ću sutra. Third, a woman saying "Išao sam": the past agrees with the speaker, so she says Išla sam.',
      highlight: 'Doći ću sutra',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Ja ne ___ doći." (can)',
          options: ['možem', 'mogu', 'moći', 'može'],
          correct: 1,
          explanation: 'The ja form of moći is mogu. Može is the on/ona form, moći the infinitive.',
        },
        {
          q: 'Complete: "Nazovi me kada ___ kući." (you get — doći)',
          options: ['doći', 'dođeš', 'dođe', 'dođem'],
          correct: 1,
          explanation: 'The ti form of doći is dođeš.',
        },
        {
          q: 'A woman says "I went to the market." Which is right?',
          options: [
            'Išao sam na tržnicu.',
            'Išla sam na tržnici.',
            'Išla sam na tržnicu.',
            'Išlo sam na tržnicu.',
          ],
          correct: 2,
          explanation: 'A woman uses išla, and going somewhere takes the accusative: na tržnicu.',
        },
        {
          q: 'Which future is written correctly?',
          options: ['Doć ću sutra.', 'Dođem ću sutra.', 'Doći ćem sutra.', 'Doći ću sutra.'],
          correct: 3,
          explanation: '-ći verbs keep the whole infinitive, written apart from ću: Doći ću.',
        },
        {
          q: 'In everyday speech, "I say" is usually…',
          options: ['kažem', 'rekao', 'reći', 'kazati'],
          correct: 0,
          explanation:
            'Kažem, from kazati, is the everyday present. Reći is the infinitive and rekao the past.',
        },
        {
          q: 'Complete: "Baka ___ kolače." (bakes)',
          options: ['peći', 'peka', 'peče', 'pečem'],
          correct: 2,
          explanation: 'Peći → baka peče. Pečem is the ja form and peći the infinitive.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Verbs in -ći — Key Takeaways',
      points: [
        'ići → idem, doći → dođem, otići → odem',
        'moći → mogu, možeš; pomoći → pomognem; peći → pečem, peku',
        'everyday "I say" is kažem; reći is used in the infinitive, past and future',
        'past: išao/išla, došao/došla, mogao/mogla, rekao/rekla',
        'future keeps the whole infinitive: Doći ću, Ići ćemo, Reći ću ti',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 98 · Ti or Vi? Formal Address
// ─────────────────────────────────────────────────────────
const FORMAL_ADDRESS = {
  id: 'formal-address',
  title: 'Ti or Vi?',
  subtitle: 'Formal address in speech and in writing',
  icon: '🎩',
  level: 'A1',
  duration: '~6 min',
  color: '#1e3a8a',
  bg: '#eff6ff',
  slides: [
    {
      type: 'intro',
      title: 'Two Words for "You"',
      body: 'English has one "you". Croatian has two: ti for people you know well, and Vi for people you should treat with respect. Choosing the right one is part of being polite, and once you choose, the verbs, the pronouns, the greetings and even the way you address the person all change with it. This lesson gathers everything you have learned about politeness into one system.',
      icon: '🎩',
    },
    {
      type: 'rule',
      title: 'Who Gets ti, Who Gets Vi',
      body: 'Use ti with family, friends, children, classmates and people of your own age in relaxed settings. Use Vi with strangers, older people, shop and office staff, doctors, teachers, officials and anyone you would call sir or madam. When unsure, use Vi: it is never rude, and the other person can offer ti. To suggest it yourself, ask: Možemo li prijeći na ti? (Can we switch to ti?)',
      highlight: 'Možemo li prijeći na ti?',
    },
    {
      type: 'rule',
      title: 'Vi Takes the Plural Verb',
      body: 'Vi is grammatically plural, even when you speak to one person. The verb takes the vi form: Kako ste? (How are you?) Odakle ste? (Where are you from?) Govorite li engleski? (Do you speak English?) The pronouns change too: vam (to you), vas (you), vaš / vaša (your). And requests use the -te forms of the imperative: Izvolite, Oprostite, Sjednite.',
      highlight: 'Kako ste? · Odakle ste?',
    },
    {
      type: 'table',
      title: 'The Same Sentence, Two Ways',
      headers: ['ti (informal)', 'Vi (polite)', 'English'],
      rows: [
        ['Bog!', 'Dobar dan!', 'Hello!'],
        ['Kako si?', 'Kako ste?', 'How are you?'],
        ['Odakle si?', 'Odakle ste?', 'Where are you from?'],
        ['Možeš li mi pomoći?', 'Možete li mi pomoći?', 'Can you help me?'],
        ['Hvala ti.', 'Hvala vam.', 'Thank you.'],
        ['Je li ovo tvoja torba?', 'Je li ovo vaša torba?', 'Is this your bag?'],
        ['Izvoli. · Oprosti.', 'Izvolite. · Oprostite.', 'Here you are. · Excuse me.'],
      ],
    },
    {
      type: 'rule',
      title: 'Gospodin, Gospođa, Gospođica',
      body: "Gospodin is Mr or sir, gospođa is Mrs or madam, gospođica is Miss (a young unmarried woman, a more traditional word). When you speak TO someone, use the vocative, the calling form you have just learned: gospodine, gospođo, gospođice. Oprostite, gospodine! Dobar dan, gospođo. A woman's surname does not change: Dobar dan, gospođo Kovač.",
      highlight: 'gospodine · gospođo · gospođice',
    },
    {
      type: 'rule',
      title: 'In Writing: the Courtesy Capital',
      body: 'In letters and emails, many people write Vi, Vas, Vam and Vaš with a capital letter as a mark of respect toward the reader. It is a courtesy, not a grammar rule, and it has no place in speech, where nobody can hear a capital. A formal letter opens with Poštovani gospodine, or Poštovana gospođo Kovač, (poštovani agrees with the person, like an adjective) and closes with S poštovanjem, followed by your name.',
      highlight: 'Poštovana gospođo Kovač,',
    },
    {
      type: 'example',
      title: 'Polite Speech',
      items: [
        {
          hr: 'Dobar dan, gospođo Kovač, kako ste?',
          en: 'Good afternoon, Mrs Kovač, how are you?',
          note: 'vocative gospođo + ste',
        },
        {
          hr: 'Oprostite, gospodine, govorite li engleski?',
          en: 'Excuse me, sir, do you speak English?',
          note: 'polite verb ends in -te',
        },
        {
          hr: 'Izvolite, sjednite.',
          en: 'Please, take a seat.',
          note: 'polite imperatives',
        },
        {
          hr: 'Možete li mi pomoći, molim vas?',
          en: 'Could you help me, please?',
          note: 'možete + molim vas',
        },
        {
          hr: 'Gospođice, je li ovo vaša torba?',
          en: 'Miss, is this your bag?',
          note: 'no capital in speech',
        },
        {
          hr: 'Bog, Marko! Kako si?',
          en: 'Hi, Marko! How are you?',
          note: 'the informal version, for a friend',
        },
      ],
    },
    {
      type: 'example',
      title: 'Polite Writing and Switching',
      items: [
        {
          hr: 'Poštovana gospođo Kovač, zahvaljujem Vam na odgovoru.',
          en: 'Dear Mrs Kovač, thank you for your reply.',
          note: 'opening of a formal email',
        },
        {
          hr: 'Molim Vas da mi pošaljete raspored.',
          en: 'Please send me the timetable.',
          note: 'courtesy capital in writing',
        },
        {
          hr: 'S poštovanjem, Ivana Horvat',
          en: 'Yours sincerely, Ivana Horvat',
          note: 'formal closing',
        },
        {
          hr: 'Možemo li prijeći na ti?',
          en: 'Shall we switch to ti?',
          note: 'offering the informal you',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Možete li mi ___, molim vas?" (help)',
      options: ['pomoći', 'pomogneš', 'pomažeš', 'pomozi'],
      correct: 0,
      explanation:
        'After možete comes the infinitive: pomoći. The other three are ti forms, which clash with možete.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which person would you normally address with ti?',
      options: ['a bank clerk', 'your doctor', 'your cousin', 'a police officer'],
      correct: 2,
      explanation: 'Family and friends get ti. Staff, doctors and officials get Vi.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, mixing the two in one sentence: "Vi si ljubazni". Vi takes the plural verb: Vi ste jako ljubazni. Second, addressing someone with the subject form: "Dobar dan, gospođa". When you speak to her, use the vocative: Dobar dan, gospođo. Third, "Kako si?" to a shop assistant or an older stranger. Use Kako ste? until they offer ti.',
      highlight: 'Vi ste',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: "You meet your neighbour's elderly mother. Which greeting fits?",
          options: [
            'Bog, kako si?',
            'Dobar dan, kako ste?',
            'Dobar dan, kako si?',
            'Bog, što ima?',
          ],
          correct: 1,
          explanation:
            'An older person you do not know well gets Dobar dan and the polite verb: kako ste?',
        },
        {
          q: 'Complete: "Oprostite, ___, gdje je pošta?" (addressing a man)',
          options: ['gospodin', 'gospodine', 'gospodina', 'gospodinu'],
          correct: 1,
          explanation: 'Speaking to him uses the vocative: gospodine.',
        },
        {
          q: 'Complete: "Vi ___ jako ljubazni." (are)',
          options: ['si', 'je', 'ste', 'smo'],
          correct: 2,
          explanation: 'Vi takes the plural verb: Vi ste.',
        },
        {
          q: 'Which opening of a formal letter is correct?',
          options: [
            'Poštovana gospođa Kovač,',
            'Poštovani gospođo Kovač,',
            'Poštovana gospođe Kovač,',
            'Poštovana gospođo Kovač,',
          ],
          correct: 3,
          explanation:
            'Poštovana agrees with a woman, and gospođa takes the vocative: Poštovana gospođo Kovač.',
        },
        {
          q: 'Why do people often write "Vi" with a capital letter in letters?',
          options: [
            'As a courtesy toward the reader',
            'It is required in every sentence',
            'It means "you" plural only',
            'It shows a question',
          ],
          correct: 0,
          explanation: 'The capital is a mark of respect in writing, not a grammar rule.',
        },
        {
          q: 'Complete: "Hvala ___ na pomoći." (to a stranger, spoken)',
          options: ['ti', 'vam', 'te', 'vas'],
          correct: 1,
          explanation: 'Hvala takes the dative, and the polite dative is vam.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Formal Address — Key Takeaways',
      points: [
        'ti for family and friends, Vi for strangers, older people and officials',
        'Vi takes the plural verb and the -te imperative: Kako ste? Izvolite.',
        'speak to people in the vocative: gospodine, gospođo, gospođice',
        'letters: Poštovani gospodine / Poštovana gospođo … S poštovanjem',
        'the capital Vi is a written courtesy, never heard in speech',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 100 · A Trip Around Croatia (A1 capstone)
// ─────────────────────────────────────────────────────────
const TRAVEL_CROATIA = {
  id: 'travel-croatia',
  title: 'A Trip Around Croatia',
  subtitle: 'Places, transport, past and future — A1 all together',
  icon: '🧳',
  level: 'A1',
  duration: '~8 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'Everything You Know, on One Trip',
      body: 'This is the last lesson of A1, and it asks you to use almost everything at once: where you are going and where you are, how you travel, what you did, what you will do, and what the weather was like. The places are real, and so is the trip — it is the route many visitors take from Zagreb down to the coast.',
      icon: '🧳',
    },
    {
      type: 'rule',
      title: 'Where To and Where: u / na',
      body: 'Going somewhere takes the accusative; being somewhere takes the locative. Cities and regions take u: Idem u Split. (I am going to Split.) Bio sam u Splitu. (I was in Split.) Islands take na: Idemo na Hvar. Bili smo na Hvaru. Watch the fleeting a you learned: Zadar → u Zadru. And Plitvice, which is plural only: na Plitvice, na Plitvicama.',
      highlight: 'u Split / u Splitu · na Hvar / na Hvaru',
    },
    {
      type: 'rule',
      title: 'How You Travel: the Instrumental',
      body: 'The means of transport goes in the instrumental, with no preposition: vlakom (by train), autobusom (by bus), autom (by car), trajektom (by ferry), brodom (by boat), avionom (by plane), biciklom (by bike). Iz Zagreba smo išli autobusom. Na Hvar smo išli trajektom. On foot is the adverb pješice.',
      highlight: 'vlakom · autobusom · trajektom',
    },
    {
      type: 'table',
      title: 'Places on the Route',
      headers: ['Place', 'Going there', 'Being there', 'Known for'],
      rows: [
        ['Zagreb', 'u Zagreb', 'u Zagrebu', 'the capital city'],
        ['Plitvice', 'na Plitvice', 'na Plitvicama', 'national park: lakes and waterfalls'],
        ['Zadar', 'u Zadar', 'u Zadru', 'the sea organ (morske orgulje)'],
        ['Split', 'u Split', 'u Splitu', "Diocletian's Palace"],
        ['Hvar', 'na Hvar', 'na Hvaru', 'an island, reached by ferry'],
        ['Dubrovnik', 'u Dubrovnik', 'u Dubrovniku', 'the city walls (gradske zidine)'],
        ['Pula', 'u Pulu', 'u Puli', 'the Roman amphitheatre, the Arena'],
        ['Istra', 'u Istru', 'u Istri', 'the peninsula in the north-west'],
      ],
    },
    {
      type: 'rule',
      title: 'Telling It and Planning It',
      body: 'Tell the trip in the past, with sam / smo + the participle: Bili smo u Zagrebu. Vidjeli smo jezera. Plan the next one in the future, with ću / ćemo + the infinitive: Sljedeće godine ćemo ići u Dubrovnik. When ćemo comes after another word it takes second place and the infinitive stays whole. Weather uses the neuter form after je: Bilo je vruće i sunčano.',
      highlight: 'Bili smo … · Ići ćemo …',
    },
    {
      type: 'example',
      title: 'Our Trip',
      items: [
        {
          hr: 'Prošlog ljeta putovali smo po Hrvatskoj.',
          en: 'Last summer we travelled around Croatia.',
          note: 'past, po + locative',
        },
        {
          hr: 'Prvo smo bili tri dana u Zagrebu.',
          en: 'First we spent three days in Zagreb.',
          note: 'u + locative',
        },
        {
          hr: 'Iz Zagreba smo išli autobusom na Plitvice.',
          en: 'From Zagreb we went to Plitvice by bus.',
          note: 'iz + genitive, instrumental, na + accusative',
        },
        {
          hr: 'Na Plitvicama smo vidjeli jezera i slapove.',
          en: 'At Plitvice we saw lakes and waterfalls.',
          note: 'locative plural',
        },
        {
          hr: 'U Zadru smo slušali morske orgulje.',
          en: 'In Zadar we listened to the sea organ.',
          note: 'Zadar → u Zadru',
        },
        {
          hr: 'U Splitu smo šetali po Dioklecijanovoj palači.',
          en: "In Split we walked around Diocletian's Palace.",
          note: 'po + locative',
        },
      ],
    },
    {
      type: 'example',
      title: 'The Island, and Next Year',
      items: [
        {
          hr: 'Trajektom smo išli na Hvar.',
          en: 'We went to Hvar by ferry.',
          note: 'island: na',
        },
        {
          hr: 'Na Hvaru je bilo vruće i sunčano.',
          en: 'It was hot and sunny on Hvar.',
          note: 'weather in the past',
        },
        {
          hr: 'Sljedeće godine ćemo ići u Dubrovnik.',
          en: 'Next year we will go to Dubrovnik.',
          note: 'future',
        },
        {
          hr: 'Hodat ćemo po gradskim zidinama.',
          en: 'We will walk along the city walls.',
          note: 'hodati → hodat ćemo',
        },
        {
          hr: 'U Puli ćemo vidjeti Arenu.',
          en: 'In Pula we will see the Arena.',
          note: 'vidjeti + accusative',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Where is the Roman amphitheatre called the Arena?',
      options: ['in Pula', 'in Zadar', 'in Zagreb', 'on Hvar'],
      correct: 0,
      explanation: 'The Arena is in Pula, in Istria. Zadar has the sea organ.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Bili smo ___ Hvaru."',
      options: ['u', 'na', 'iz', 's'],
      correct: 1,
      explanation: 'Islands take na: na Hvar, na Hvaru.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, "u Hvaru": islands take na, so it is na Hvaru, na Hvar. Second, "Idem u Splitu": going takes the accusative, so Idem u Split; Splitu is for where you are. Third, adding s to transport: "s vlakom" is heard in casual speech, but standard Croatian uses the bare instrumental: vlakom, autobusom.',
      highlight: 'na Hvaru',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Idemo ___ Hvar." (to the island)',
          options: ['u', 'na', 'iz', 's'],
          correct: 1,
          explanation: 'Islands take na: Idemo na Hvar.',
        },
        {
          q: 'Complete: "Putovali smo ___ u Split." (by train)',
          options: ['vlak', 'vlaku', 'vlakom', 'vlaka'],
          correct: 2,
          explanation: 'Transport goes in the instrumental: vlakom.',
        },
        {
          q: 'Complete: "Bili smo tri dana u ___." (Zadar)',
          options: ['Zadar', 'Zadaru', 'Zadru', 'Zadra'],
          correct: 2,
          explanation: 'Locative, and Zadar loses its fleeting a: u Zadru.',
        },
        {
          q: 'Which sentence is about the future?',
          options: [
            'Bili smo u Puli.',
            'Sljedeće godine ćemo ići u Pulu.',
            'Jučer smo išli u Pulu.',
            'U Puli je vruće.',
          ],
          correct: 1,
          explanation: 'Ćemo + the infinitive ići is the future.',
        },
        {
          q: 'What is Dubrovnik famous for?',
          options: [
            'its city walls',
            'the sea organ',
            'a Roman amphitheatre',
            'its lakes and waterfalls',
          ],
          correct: 0,
          explanation:
            'Dubrovnik is famous for its city walls. The sea organ is in Zadar, the Arena in Pula, the lakes at Plitvice.',
        },
        {
          q: 'Complete: "Na Plitvicama smo ___ jezera." (we saw)',
          options: ['vidimo', 'vidjeti', 'vidjet ćemo', 'vidjeli'],
          correct: 3,
          explanation: 'Smo + the past participle: vidjeli smo, here after Na Plitvicama.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Travelling in Croatia — Key Takeaways',
      points: [
        'going: u / na + accusative (u Split, na Hvar); being: + locative (u Splitu, na Hvaru)',
        'islands take na; cities and regions take u',
        'transport in the bare instrumental: vlakom, autobusom, trajektom',
        'the past tells the trip (Bili smo …), the future plans it (Ići ćemo …)',
        'Zagreb, Plitvice, Zadar, Split, Hvar, Dubrovnik, Pula — and what each is known for',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  ABSTRACT_OST,
  FEELINGS,
  IMPERATIVE_NEGATIVE,
  INFINITIVE_CI,
  FORMAL_ADDRESS,
  TRAVEL_CROATIA,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'abstract-ost': {
    worked: [
      {
        title: 'Building the Noun',
        problem: 'Make the noun "honesty" from "iskren" (honest).',
        en: 'Make the noun honesty from the adjective honest.',
        steps: [
          { label: 'Feminine form', text: 'iskren → iskrena.' },
          { label: 'Take off -a', text: 'iskrena → iskren-.' },
          { label: 'Add -ost', text: 'iskren- + ost. The new noun is feminine.' },
        ],
        answer: 'iskrenost',
      },
      {
        title: 'Using It in a Case',
        problem: 'Say: "This job takes a lot of courage." (hrabar)',
        en: 'This job takes a lot of courage.',
        steps: [
          { label: 'Build the noun', text: 'hrabar → hrabra → hrabr- + ost.' },
          { label: 'puno + genitive', text: '"A lot of" takes the genitive.' },
          { label: 'i-noun ending', text: 'An i-noun ends in -i in the genitive.' },
        ],
        answer: 'Za ovaj posao treba puno hrabrosti.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which noun is made from "mlad" (young)?',
          options: ['mladost', 'mladaost', 'mladstvo', 'mladeost'],
          correct: 0,
          hint: 'The feminine form is mlada: take off the -a and add the ending.',
          explanation: 'mlada → mlad- → mladost (youth).',
        },
        {
          q: 'Which noun is made from "ljubazan" (kind)?',
          options: ['ljubazanost', 'ljubaznost', 'ljubazost', 'ljubazanstvo'],
          correct: 1,
          hint: 'Start from the feminine form, ljubazna, which has lost the fleeting a.',
          explanation: 'ljubazna → ljubazn- → ljubaznost (kindness).',
        },
        {
          q: 'Moja mladost je ___ lijepa.',
          options: ['bio', 'bila', 'bilo', 'bili'],
          correct: 1,
          hint: 'Every noun in -ost is feminine.',
          explanation: 'Moja mladost je bila lijepa.',
        },
        {
          q: 'Hvala na ___. (kindness)',
          options: ['ljubaznost', 'ljubaznosti', 'ljubaznošću', 'ljubazan'],
          correct: 1,
          hint: 'Hvala na takes the locative; i-nouns end in -i there.',
          explanation: 'Hvala na ljubaznosti.',
        },
        {
          q: 'Which word is the everyday Croatian for "freedom"?',
          options: ['slobodan', 'sloboda', 'slobodno', 'slobodna'],
          correct: 1,
          hint: 'Not every quality takes -ost; this noun ends in -a.',
          explanation: 'Sloboda is freedom; slobodan is the adjective "free".',
        },
        {
          q: 'Imamo tri ___. (options)',
          options: ['mogućnost', 'mogućnosti', 'mogućnošću', 'mogućnostima'],
          correct: 1,
          hint: 'After tri, a feminine noun takes the same form as its plural.',
          explanation: 'Imamo tri mogućnosti.',
        },
        {
          type: 'type',
          q: 'Za ovaj posao treba puno ____. (courage)',
          answer: 'hrabrosti',
          hint: 'Puno takes the genitive; the noun is built from hrabar, and i-nouns end in -i.',
          explanation: 'Za ovaj posao treba puno hrabrosti.',
        },
        {
          type: 'type',
          q: 'To je pitanje velike ____. (importance)',
          answer: 'važnosti',
          hint: 'From važan: feminine važna, stem važn-, then the genitive ending -i.',
          explanation: 'To je pitanje velike važnosti.',
        },
        {
          type: 'type',
          q: '____ je za mene jako važna. (honesty)',
          answer: 'Iskrenost',
          hint: 'From iskren, plus the ending for qualities.',
          explanation: 'Iskrenost je za mene jako važna.',
        },
        {
          type: 'type',
          q: 'Njegova ____ dolazi iz iskustva. (wisdom)',
          answer: 'mudrost',
          hint: 'From mudar: feminine mudra, stem mudr-.',
          explanation: 'Njegova mudrost dolazi iz iskustva.',
        },
        {
          type: 'type',
          q: 'U ____ djed živi na selu. (old age)',
          answer: 'starosti',
          hint: 'u + locative here, built from star; i-nouns end in -i.',
          explanation: 'U starosti djed živi na selu.',
        },
        {
          q: 'Djeca su nas dočekala s velikom ___. (joy)',
          options: ['radost', 'radošću', 'radostom', 'radostima'],
          correct: 1,
          hint: 'Instrumental singular after s; i-nouns take a -ju ending that turns st into šć.',
          explanation: 'Djeca su nas dočekala s velikom radošću.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which noun is made from "važan" (important)?',
        options: ['važanost', 'važnost', 'važina', 'važstvo'],
        correct: 1,
        explanation: 'važna → važn- → važnost. "Važanost" keeps the fleeting a.',
      },
      {
        q: 'Complete: "Treba mi malo ___." (courage)',
        options: ['hrabrost', 'hrabrosti', 'hrabrošću', 'hrabrostu'],
        correct: 1,
        explanation: 'Malo takes the genitive, and an i-noun ends in -i: hrabrosti.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Iskrenost je važan.',
          'Iskrenost je važno.',
          'Iskrenost je važna.',
          'Iskrenost su važni.',
        ],
        correct: 2,
        explanation: 'Iskrenost is feminine and singular: važna.',
      },
      {
        q: 'What does "starost" mean?',
        options: ['old age', 'an old town', 'an old man', 'the elders'],
        correct: 0,
        explanation: 'star (old) → starost (old age).',
      },
      {
        q: 'Complete: "Djeca su nas dočekala s velikom ___." (joy)',
        options: ['radost', 'radošću', 'radostom', 'radostima'],
        correct: 1,
        explanation:
          'Instrumental singular of an i-noun: radošću. Radostom is a masculine ending, radostima a plural.',
      },
      {
        q: 'What is wrong with "Imamo dvije mogućnost."?',
        options: [
          'dvije should be dva',
          'mogućnost should be mogućnosti',
          'imamo should be ima',
          'Nothing is wrong',
        ],
        correct: 1,
        explanation: 'After dvije a feminine noun takes the plural-looking form: dvije mogućnosti.',
      },
    ],
    vocab: [
      ['mladost', 'youth', 'Mladost je lijepa, ali kratka.'],
      ['starost', 'old age', 'U starosti djed živi na selu.'],
      ['hrabrost', 'courage', 'Za ovaj posao treba puno hrabrosti.'],
      ['iskrenost', 'honesty', 'Iskrenost je za mene jako važna.'],
      ['ljubaznost', 'kindness', 'Hvala na ljubaznosti.'],
      ['važnost', 'importance', 'To je pitanje velike važnosti.'],
      ['mogućnost', 'possibility, option', 'Imamo dvije mogućnosti.'],
      ['mudrost', 'wisdom', 'Njegova mudrost dolazi iz iskustva.'],
      ['radost', 'joy', 'Dočekali su nas s radošću.'],
      ['sreća', 'happiness; luck', 'Sreća je u malim stvarima.'],
    ],
  },

  feelings: {
    worked: [
      {
        title: 'Agreeing With Yourself',
        problem: 'A woman says: "I am tired today."',
        en: 'I am tired today.',
        steps: [
          { label: 'Pattern', text: 'A feeling is an adjective with biti.' },
          {
            label: 'Agree with the speaker',
            text: 'umoran in the feminine drops its fleeting a: umorna.',
          },
          { label: 'Word order', text: 'Danas first, sam in second place.' },
        ],
        answer: 'Danas sam umorna.',
      },
      {
        title: 'Afraid Of Something',
        problem: 'Say: "I am afraid of the dark."',
        en: 'I am afraid of the dark.',
        steps: [
          { label: 'The verb', text: 'bojati se → ja se bojim.' },
          { label: 'Its case', text: 'bojati se takes the genitive, the case for "of".' },
          { label: 'The noun', text: 'mrak → mraka.' },
        ],
        answer: 'Bojim se mraka.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'A woman says "I am sad." Which is right?',
          options: ['Tužan sam.', 'Tužna sam.', 'Tužno sam.', 'Tužana sam.'],
          correct: 1,
          hint: 'Drop the fleeting a and add the feminine ending.',
          explanation: 'Tužna sam.',
        },
        {
          q: 'Kako se ___ danas? (do you feel — to a friend)',
          options: ['osjećaš', 'osjećam', 'osjeća', 'osjećati'],
          correct: 0,
          hint: 'The ti form of the verb for feeling.',
          explanation: 'Kako se osjećaš danas?',
        },
        {
          q: '___ mi je, ne mogu doći. (I am sorry)',
          options: ['Drago', 'Žao', 'Dosadno', 'Hladno'],
          correct: 1,
          hint: 'The fixed phrase for apologising.',
          explanation: 'Žao mi je, ne mogu doći.',
        },
        {
          q: 'Ne bojim se ___. (the doctor)',
          options: ['liječnik', 'liječnika', 'liječniku', 'liječnikom'],
          correct: 1,
          hint: 'Bojati se takes the genitive.',
          explanation: 'Ne bojim se liječnika.',
        },
        {
          q: 'You are bored. What do you say?',
          options: ['Dosadan sam.', 'Dosadno mi je.', 'Dosadno sam.', 'Dosadna sam.'],
          correct: 1,
          hint: 'Use the "it is … to me" pattern with the dative.',
          explanation: 'Dosadno mi je. ("Dosadan sam" means "I am boring".)',
        },
        {
          q: 'Veselim se ___. (the holiday)',
          options: ['odmor', 'odmora', 'odmoru', 'odmorom'],
          correct: 2,
          hint: 'Veseliti se takes the dative.',
          explanation: 'Veselim se odmoru.',
        },
        {
          type: 'type',
          q: 'Osjećam se puno ____, hvala. (better)',
          answer: 'bolje',
          hint: 'The comparative of dobro.',
          explanation: 'Osjećam se puno bolje, hvala.',
        },
        {
          type: 'type',
          q: 'Danas sam jako ____. (happy — a woman speaking)',
          answer: 'sretna',
          hint: 'sretan loses its fleeting a in the feminine.',
          explanation: 'Danas sam jako sretna.',
        },
        {
          type: 'type',
          q: 'Mama je ____ jer nisam oprao suđe. (angry)',
          answer: 'ljuta',
          hint: 'Mama is feminine; the masculine form is ljut.',
          explanation: 'Mama je ljuta jer nisam oprao suđe.',
        },
        {
          type: 'type',
          q: '____ se mraka. (I am afraid)',
          answer: 'Bojim',
          hint: 'bojati se, the ja form.',
          explanation: 'Bojim se mraka.',
        },
        {
          type: 'type',
          q: 'Jučer sam ____ zabrinut. (was — a man speaking)',
          answer: 'bio',
          hint: 'The past participle of biti, masculine.',
          explanation: 'Jučer sam bio zabrinut.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Osjećam dobro.',
            'Osjećam se dobro.',
            'Se osjećam dobro.',
            'Osjećam se dobar.',
          ],
          correct: 1,
          hint: 'The verb comes with se, and se cannot stand first.',
          explanation: 'Osjećam se dobro.',
        },
      ],
    },
    checkB: [
      {
        q: 'A man says "I am happy." Which is right?',
        options: ['Sretna sam.', 'Sretan sam.', 'Sretno sam.', 'Sretana sam.'],
        correct: 1,
        explanation: 'A man uses the masculine form: Sretan sam.',
      },
      {
        q: 'Complete: "Žao ___ je, ne mogu doći."',
        options: ['me', 'mi', 'se', 'mene'],
        correct: 1,
        explanation: 'The "to me" pattern uses the dative mi: Žao mi je.',
      },
      {
        q: 'Complete: "Malo sam nervozna prije ___." (the exam)',
        options: ['ispit', 'ispitu', 'ispita', 'ispitom'],
        correct: 2,
        explanation: 'Prije takes the genitive: prije ispita.',
      },
      {
        q: 'What does "Drago mi je" mean?',
        options: ['I am sorry', 'I am glad; nice to meet you', 'I am bored', 'I am cold'],
        correct: 1,
        explanation: 'Drago mi je: I am glad, and the usual "nice to meet you".',
      },
      {
        q: 'Which question asks "How do you feel?"',
        options: ['Kako se osjećaš?', 'Kako osjećaš?', 'Kako si se osjećaš?', 'Kako se osjećati?'],
        correct: 0,
        explanation: 'Osjećati se keeps its se: Kako se osjećaš?',
      },
      {
        q: 'What is wrong with "Ona je tužan."?',
        options: [
          'ona should be ono',
          'je should be su',
          'Nothing is wrong',
          'tužan should be tužna — she is a woman',
        ],
        correct: 3,
        explanation: 'The adjective agrees with ona: Ona je tužna.',
      },
    ],
    vocab: [
      ['sretan', 'happy', 'Danas sam jako sretna.'],
      ['tužan', 'sad', 'Zašto si tužan?'],
      ['umoran', 'tired', 'Umoran sam, radio sam cijeli dan.'],
      ['ljut', 'angry', 'Mama je ljuta.'],
      ['nervozan', 'nervous', 'Malo sam nervozna prije ispita.'],
      ['zabrinut', 'worried', 'Jučer sam bio zabrinut.'],
      ['miran', 'calm', 'Sada sam miran.'],
      ['osjećati se', 'to feel', 'Osjećam se puno bolje.'],
      ['bojati se', 'to be afraid', 'Bojim se mraka.'],
      ['veseliti se', 'to look forward to', 'Veselim se ljetu.'],
    ],
  },

  'imperative-negative': {
    worked: [
      {
        title: "Don't, to a Friend",
        problem: 'Tell a friend: "Don\'t drink that!" (piti)',
        en: "Don't drink that!",
        steps: [
          { label: 'One friend', text: 'Use nemoj, the form for one person you call ti.' },
          {
            label: 'Then the infinitive',
            text: 'After nemoj the verb stays in its dictionary form: piti.',
          },
          { label: 'The object', text: 'To (that) can sit before the infinitive.' },
        ],
        answer: 'Nemoj to piti!',
      },
      {
        title: "Don't, Politely",
        problem: 'Say politely to a guest: "Please don\'t worry."',
        en: "Please don't worry.",
        steps: [
          { label: 'Polite form', text: 'A guest gets nemojte and molim vas.' },
          { label: 'The verb', text: 'brinuti se carries se.' },
          {
            label: 'Where se goes',
            text: 'se goes straight after nemojte, the first word of the command.',
          },
        ],
        answer: 'Molim vas, nemojte se brinuti.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: "Nemoj ___! (Don't shout!)",
          options: ['vičeš', 'vikati', 'viči', 'vikao'],
          correct: 1,
          hint: 'After nemoj, the dictionary form.',
          explanation: 'Nemoj vikati!',
        },
        {
          q: '___ pušiti ovdje, molim vas.',
          options: ['Nemoj', 'Nemojte', 'Nemojmo', 'Nemam'],
          correct: 1,
          hint: 'Molim vas tells you this is polite.',
          explanation: 'Nemojte pušiti ovdje, molim vas.',
        },
        {
          q: "Ne ___, sve će biti dobro. (Don't cry — to a friend)",
          options: ['plakao', 'plači', 'plačeš', 'plaču'],
          correct: 1,
          hint: 'After ne alone, use the imperative itself.',
          explanation: 'Ne plači, sve će biti dobro.',
        },
        {
          q: 'Nemoj ___ reći kraj filma! (me)',
          options: ['mene', 'mi', 'me', 'moj'],
          correct: 1,
          hint: 'The short form for "to me".',
          explanation: 'Nemoj mi reći kraj filma!',
        },
        {
          q: '"Nemojmo" is used when…',
          options: [
            'you tell one friend not to',
            'you suggest that we do not',
            'you tell a stranger not to',
            'you say what you do not do',
          ],
          correct: 1,
          hint: 'It ends like the "let us" imperative.',
          explanation: 'Nemojmo = let us not: Nemojmo kasniti.',
        },
        {
          q: 'Which one is NOT correct?',
          options: ['Nemoj ići!', 'Ne idi!', 'Nemoj ideš!', 'Nemojte ići!'],
          correct: 2,
          hint: 'One of these conjugates the verb after nemoj.',
          explanation: '"Nemoj ideš" is wrong: after nemoj comes the infinitive.',
        },
        {
          type: 'type',
          q: 'Nemoj ____ kupiti kruh. (to forget)',
          answer: 'zaboraviti',
          hint: 'The dictionary form follows nemoj.',
          explanation: 'Nemoj zaboraviti kupiti kruh.',
        },
        {
          type: 'type',
          q: "____ se brinuti, sve je u redu. (don't — politely)",
          answer: 'Nemojte',
          hint: 'The polite or plural form, ending in -te.',
          explanation: 'Nemojte se brinuti, sve je u redu.',
        },
        {
          type: 'type',
          q: 'Ne ____, vruće je! (touch — to a child)',
          answer: 'diraj',
          hint: 'The oni form ends in -aju, so the imperative ends in -j.',
          explanation: 'Ne diraj, vruće je!',
        },
        {
          type: 'type',
          q: 'Nemoj ____ zvati prije devet. (him)',
          answer: 'ga',
          hint: 'The short form for "him", right after nemoj.',
          explanation: 'Nemoj ga zvati prije devet.',
        },
        {
          type: 'type',
          q: 'Nemojmo ____, film počinje u osam. (to be late)',
          answer: 'kasniti',
          hint: 'The infinitive of the verb for being late.',
          explanation: 'Nemojmo kasniti, film počinje u osam.',
        },
        {
          q: 'Nemoj ___ sam noću. (to go)',
          options: ['idi', 'ideš', 'ići', 'idem'],
          correct: 2,
          hint: 'The infinitive, which ends in -ći.',
          explanation: 'Nemoj ići sam noću.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Nemojte ___." (Don\'t worry — politely)',
        options: ['se brinete', 'se brinuti', 'brinite se', 'se brini'],
        correct: 1,
        explanation: 'Nemojte + se + the infinitive: Nemojte se brinuti.',
      },
      {
        q: 'Which sentence tells one friend not to cry?',
        options: ['Ne plači!', 'Ne plačeš!', 'Nemoj plači!', 'Nemoj plačeš!'],
        correct: 0,
        explanation: 'Ne + the imperative plači. (Nemoj plakati! also works.)',
      },
      {
        q: 'Complete: "___ kasniti, film počinje u osam." (Let us not be late)',
        options: ['Nemoj', 'Nemojte', 'Nemojmo', 'Ne'],
        correct: 2,
        explanation: 'Nemojmo means "let us not".',
      },
      {
        q: 'Which sentence means "Don\'t call him" (politely)?',
        options: [
          'Ga nemojte zvati.',
          'Nemojte ga zvati.',
          'Nemojte njega ga zvati.',
          'Nemojte zvati njemu.',
        ],
        correct: 1,
        explanation: 'The short word ga goes straight after nemojte.',
      },
      {
        q: 'You are speaking to your teacher: "Don\'t forget the books!"',
        options: [
          'Nemoj zaboraviti knjige!',
          'Nemojte zaboraviti knjige!',
          'Nemojte zaboravite knjige!',
          'Nemoj zaboravi knjige!',
        ],
        correct: 1,
        explanation: 'A teacher gets the polite nemojte, followed by the infinitive.',
      },
      {
        q: 'Which is a natural way to say "Don\'t worry!" to a friend?',
        options: ['Ne brineš!', 'Ne brini!', 'Nemoj brini!', 'Nemoj se brineš!'],
        correct: 1,
        explanation: 'Ne + the imperative brini. (Nemoj se brinuti! also works.)',
      },
    ],
    vocab: [
      ['nemoj', "don't (to one person)", 'Nemoj ići sam noću.'],
      ['nemojte', "don't (polite or plural)", 'Nemojte se brinuti.'],
      ['nemojmo', "let's not", 'Nemojmo kasniti.'],
      ['dirati', 'to touch', 'Ne diraj, vruće je!'],
      ['brinuti se', 'to worry', 'Ne brini, sve je u redu.'],
      ['plakati', 'to cry', 'Ne plači, sve će biti dobro.'],
      ['vikati', 'to shout', 'Nemoj vikati!'],
      ['kasniti', 'to be late', 'Nemojmo kasniti na film.'],
      ['pušiti', 'to smoke', 'Molim vas, nemojte pušiti ovdje.'],
    ],
  },

  'infinitive-ci': {
    worked: [
      {
        title: 'A Modal and a -ći Verb',
        problem: 'Say: "I can\'t come today." (moći, doći)',
        en: "I can't come today.",
        steps: [
          { label: 'moći for ja', text: 'moći is irregular: ja mogu.' },
          { label: 'Negative', text: 'ne goes in front of the verb: ne mogu.' },
          { label: 'The second verb', text: 'After mogu, doći stays in the infinitive.' },
        ],
        answer: 'Danas ne mogu doći.',
      },
      {
        title: 'The Past of doći',
        problem: 'A woman says: "I came late yesterday."',
        en: 'I came late yesterday.',
        steps: [
          { label: 'Past tense', text: 'sam + the past participle.' },
          { label: 'The participle', text: 'doći → došao for a man, došla for a woman.' },
          { label: 'Word order', text: 'Jučer first, sam in second place.' },
        ],
        answer: 'Jučer sam došla kasno.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ li doći sutra? (Can you — to a friend)',
          options: ['Možeš', 'Mogeš', 'Moći', 'Mogu'],
          correct: 0,
          hint: 'In the ti form, the hidden g of moći softens to ž.',
          explanation: 'Možeš li doći sutra?',
        },
        {
          q: 'Kad ___ gosti, idemo na večeru. (come — doći)',
          options: ['dođe', 'dođu', 'doću', 'dođemo'],
          correct: 1,
          hint: 'Gosti are oni, and the oni form ends in -u.',
          explanation: 'Kad dođu gosti, idemo na večeru.',
        },
        {
          q: 'Baka ___ kruh. (bakes)',
          options: ['peće', 'peče', 'peka', 'pečem'],
          correct: 1,
          hint: 'peći shows č in most present forms.',
          explanation: 'Baka peče kruh.',
        },
        {
          q: 'Što ___ na pizzu večeras? (How about pizza — to a friend)',
          options: ['kaže', 'kažeš', 'kazaš', 'kažem'],
          correct: 1,
          hint: 'The ti form of the everyday verb for "say".',
          explanation: 'Što kažeš na pizzu večeras?',
        },
        {
          q: 'A woman says "I could not sleep." Which is right?',
          options: [
            'Nisam mogao spavati.',
            'Nisam mogla spavati.',
            'Nisam mogla spavala.',
            'Nisam možla spavati.',
          ],
          correct: 1,
          hint: 'The past of moći keeps the g, then the feminine ending.',
          explanation: 'Nisam mogla spavati.',
        },
        {
          q: 'Which future is written correctly?',
          options: ['Pomoć ću ti.', 'Pomoći ću ti.', 'Pomognem ću ti.', 'Ću ti pomoći.'],
          correct: 1,
          hint: '-ći verbs keep the whole infinitive, and ću cannot stand first.',
          explanation: 'Pomoći ću ti.',
        },
        {
          type: 'type',
          q: 'Danas ne ____ doći. (I can)',
          answer: 'mogu',
          hint: 'moći is irregular; its ja form ends in -u.',
          explanation: 'Danas ne mogu doći.',
        },
        {
          type: 'type',
          q: 'Možeš li mi ____ s torbom? (help)',
          answer: 'pomoći',
          hint: 'After možeš, the dictionary form, ending in -ći.',
          explanation: 'Možeš li mi pomoći s torbom?',
        },
        {
          type: 'type',
          q: 'Jučer smo ____ na izlet. (went — we)',
          answer: 'išli',
          hint: 'The past of ići changes its stem; add the plural ending.',
          explanation: 'Jučer smo išli na izlet.',
        },
        {
          type: 'type',
          q: '____ sam ti istinu. (I told — a man speaking)',
          answer: 'Rekao',
          hint: 'In the past of reći the k comes back, and a man takes -ao.',
          explanation: 'Rekao sam ti istinu.',
        },
        {
          type: 'type',
          q: 'Moram ____ ranije, oprostite. (leave)',
          answer: 'otići',
          hint: 'The infinitive of the verb for leaving, built on the verb for going.',
          explanation: 'Moram otići ranije, oprostite.',
        },
        {
          type: 'type',
          q: 'Ana je ____ kasno. (came)',
          answer: 'došla',
          hint: 'The past of doći, feminine.',
          explanation: 'Ana je došla kasno.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Možeš li mi ___?" (help)',
        options: ['pomogneš', 'pomognem', 'pomoći', 'pomoć'],
        correct: 2,
        explanation:
          'After možeš comes the infinitive: pomoći. Pomoć without -i is the noun "help".',
      },
      {
        q: 'Complete: "Moram ___ ranije." (leave)',
        options: ['odem', 'otići', 'otić', 'odlazim'],
        correct: 1,
        explanation: 'After moram comes the infinitive: otići.',
      },
      {
        q: 'What is the past of "reći" for a man?',
        options: ['rekao', 'rečao', 'rekal', 'rečio'],
        correct: 0,
        explanation: 'The hidden k comes back: rekao (rekla for a woman).',
      },
      {
        q: 'Complete: "Oni ___ na posao vlakom." (go)',
        options: ['ide', 'idemo', 'idu', 'idete'],
        correct: 2,
        explanation: 'The oni form of ići is idu.',
      },
      {
        q: 'Complete: "___ ćemo na more u srpnju." (go — future)',
        options: ['Ić', 'Idemo', 'Ići', 'Išli'],
        correct: 2,
        explanation: 'The future keeps the whole infinitive: Ići ćemo.',
      },
      {
        q: 'What is wrong with "Ja možem pomoći."?',
        options: [
          'pomoći should be pomognem',
          'Nothing is wrong',
          'možem should be mogu',
          'ja should be mi',
        ],
        correct: 2,
        explanation: 'The ja form of moći is mogu: Ja mogu pomoći.',
      },
    ],
    vocab: [
      ['ići', 'to go', 'Jučer smo išli na izlet.'],
      ['doći', 'to come', 'Doći ću u osam.'],
      ['otići', 'to leave', 'Moram otići ranije.'],
      ['moći', 'to be able to, can', 'Danas ne mogu doći.'],
      ['pomoći', 'to help', 'Možeš li mi pomoći?'],
      ['reći', 'to say, to tell', 'Rekao sam ti istinu.'],
      ['kazati', 'to say (everyday present: kažem)', 'Što kažeš na kino?'],
      ['peći', 'to bake', 'Baka peče kruh svake subote.'],
      ['stići', 'to arrive, to make it', 'Stići ćemo na vrijeme.'],
    ],
  },

  'formal-address': {
    worked: [
      {
        title: 'Asking a Stranger',
        problem: 'Ask an older man you do not know where the station is.',
        en: 'Excuse me, sir, where is the station?',
        steps: [
          { label: 'Choose Vi', text: 'A stranger, and older: use the polite forms.' },
          { label: 'Open politely', text: 'The polite imperative: Oprostite.' },
          { label: 'Address him', text: 'The vocative of gospodin: gospodine.' },
        ],
        answer: 'Oprostite, gospodine, gdje je kolodvor?',
      },
      {
        title: 'Opening an Email',
        problem: 'Open an email to Mrs Kovač and thank her for her reply.',
        en: 'Dear Mrs Kovač, thank you for your reply.',
        steps: [
          {
            label: 'The opening',
            text: 'Poštovana agrees with a woman; gospođa goes into the vocative; the surname stays.',
          },
          {
            label: 'Thanking',
            text: 'zahvaljujem + the dative Vam, capitalised as a courtesy in writing.',
          },
          { label: 'For what', text: 'na + locative: odgovor → odgovoru.' },
        ],
        answer: 'Poštovana gospođo Kovač, zahvaljujem Vam na odgovoru.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kako ___? (to your boss)',
          options: ['si', 'ste', 'je', 'smo'],
          correct: 1,
          hint: 'The polite you takes the plural verb.',
          explanation: 'Kako ste?',
        },
        {
          q: 'Oprostite, ___, je li ovo vaša torba? (to a woman)',
          options: ['gospođa', 'gospođo', 'gospođu', 'gospođom'],
          correct: 1,
          hint: 'Calling to someone uses the vocative, where the final -a changes.',
          explanation: 'Oprostite, gospođo, je li ovo vaša torba?',
        },
        {
          q: 'Which phrase closes a formal letter?',
          options: ['S poštovanjem', 'Bog', 'Pusa', 'Vidimo se'],
          correct: 0,
          hint: 'It contains the word for respect.',
          explanation: 'S poštovanjem, followed by your name.',
        },
        {
          q: 'Hvala ___ na pomoći. (to a friend)',
          options: ['vam', 'ti', 'te', 'tebe'],
          correct: 1,
          hint: 'Informal, dative "to you".',
          explanation: 'Hvala ti na pomoći.',
        },
        {
          q: '___ li engleski? (Do you speak — to a stranger)',
          options: ['Govoriš', 'Govorite', 'Govori', 'Govorimo'],
          correct: 1,
          hint: 'The polite form ends in -te.',
          explanation: 'Govorite li engleski?',
        },
        {
          q: 'Is "vaša" written with a capital in a spoken conversation?',
          options: [
            'Yes, always',
            'No — the capital is a courtesy in writing',
            'Only with older people',
            'Only in questions',
          ],
          correct: 1,
          hint: 'Nobody can hear a capital letter.',
          explanation: 'The capital belongs to letters and emails.',
        },
        {
          type: 'type',
          q: 'Dobar dan, ____ Kovač. (addressing a woman)',
          answer: 'gospođo',
          hint: 'gospođa in the vocative: the final -a changes.',
          explanation: 'Dobar dan, gospođo Kovač.',
        },
        {
          type: 'type',
          q: 'Oprostite, ____, gdje je kolodvor? (addressing a man)',
          answer: 'gospodine',
          hint: 'gospodin in the vocative takes -e.',
          explanation: 'Oprostite, gospodine, gdje je kolodvor?',
        },
        {
          type: 'type',
          q: 'Odakle ____? (are you — politely)',
          answer: 'ste',
          hint: 'The plural form of biti.',
          explanation: 'Odakle ste?',
        },
        {
          type: 'type',
          q: '____, sjednite. (please — what a host says, politely)',
          answer: 'Izvolite',
          hint: 'The polite word a host says when offering something.',
          explanation: 'Izvolite, sjednite.',
        },
        {
          type: 'type',
          q: 'Poštovani gospodine, zahvaljujem ____ na pozivu. (you — in a letter)',
          answer: 'Vam',
          hint: 'The dative "to you", written with a capital as a courtesy.',
          explanation: 'Poštovani gospodine, zahvaljujem Vam na pozivu.',
        },
        {
          type: 'type',
          q: 'Možemo li prijeći na ____? (the informal you)',
          answer: 'ti',
          hint: 'The pronoun you use with friends.',
          explanation: 'Možemo li prijeći na ti?',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Dobar dan, ___ Horvat." (addressing a woman)',
        options: ['gospođa', 'gospođo', 'gospođi', 'gospođu'],
        correct: 1,
        explanation: "The vocative gospođo; a woman's surname does not change.",
      },
      {
        q: 'Which is the polite "here you are"?',
        options: ['Izvoli', 'Izvolite', 'Izvolim', 'Izvolio'],
        correct: 1,
        explanation: 'Izvolite is polite; izvoli is for a friend.',
      },
      {
        q: 'Complete: "Odakle ___?" (are you — to a professor)',
        options: ['si', 'je', 'ste', 'su'],
        correct: 2,
        explanation: 'A professor gets Vi, with the plural verb ste.',
      },
      {
        q: 'You want to switch from Vi to ti. You ask:',
        options: [
          'Možemo li prijeći na ti?',
          'Možemo li prijeći na Vi?',
          'Možeš li prijeći na Vi?',
          'Možemo li biti ti?',
        ],
        correct: 0,
        explanation: 'Možemo li prijeći na ti? — "can we move to ti?"',
      },
      {
        q: 'How do you address a young woman you call "Miss"?',
        options: ['gospođo', 'gospodine', 'gospođice', 'gospođa'],
        correct: 2,
        explanation: 'Gospođica in the vocative: gospođice.',
      },
      {
        q: 'What is wrong with "Vi si jako ljubazni."?',
        options: [
          'ljubazni should be ljubazan',
          'Nothing is wrong',
          'si should be ste — Vi takes the plural verb',
          'jako should be jaka',
        ],
        correct: 2,
        explanation: 'Vi takes the plural verb: Vi ste jako ljubazni.',
      },
    ],
    vocab: [
      ['gospodin', 'Mr; sir', 'Oprostite, gospodine!'],
      ['gospođa', 'Mrs; madam', 'Dobar dan, gospođo Kovač.'],
      ['gospođica', 'Miss', 'Gospođice, je li ovo vaše?'],
      ['poštovani', 'dear (opening a formal letter)', 'Poštovani gospodine,'],
      ['s poštovanjem', 'yours sincerely', 'S poštovanjem, Ivana Horvat'],
      ['zahvaljivati', 'to thank (formal)', 'Zahvaljujem Vam na odgovoru.'],
      ['ljubazan', 'kind, polite', 'Vi ste jako ljubazni.'],
      ['prijeći na ti', 'to switch to the informal you', 'Možemo li prijeći na ti?'],
      ['oprostite', 'excuse me (polite)', 'Oprostite, gdje je pošta?'],
    ],
  },

  'travel-croatia': {
    worked: [
      {
        title: 'Going, and How',
        problem: 'Say: "We went to Split by train."',
        en: 'We went to Split by train.',
        steps: [
          { label: 'Past for mi', text: 'smo + the participle of ići: išli.' },
          { label: 'Where to', text: 'A city takes u + accusative: u Split.' },
          { label: 'How', text: 'Transport in the bare instrumental: vlak → vlakom.' },
        ],
        answer: 'Išli smo vlakom u Split.',
      },
      {
        title: 'Planning the Island',
        problem: 'Say: "Next year we will be on Hvar."',
        en: 'Next year we will be on Hvar.',
        steps: [
          {
            label: 'Future',
            text: 'ćemo + the infinitive biti; ćemo takes second place after the time phrase.',
          },
          { label: 'An island', text: 'Islands take na.' },
          { label: 'Being there', text: 'Location takes the locative: Hvar → Hvaru.' },
        ],
        answer: 'Sljedeće godine ćemo biti na Hvaru.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Idemo ___ Zagreb.',
          options: ['u', 'na', 'po', 'iz'],
          correct: 0,
          hint: 'Cities take one preposition, islands another.',
          explanation: 'Idemo u Zagreb.',
        },
        {
          q: 'Bili smo ___ Hvaru.',
          options: ['u', 'na', 'iz', 'kod'],
          correct: 1,
          hint: 'Islands do not take the city preposition.',
          explanation: 'Bili smo na Hvaru.',
        },
        {
          q: 'Putujemo ___ u Zadar. (by car)',
          options: ['auto', 'autom', 'autu', 'auta'],
          correct: 1,
          hint: 'Transport goes in the instrumental, with no preposition.',
          explanation: 'Putujemo autom u Zadar.',
        },
        {
          q: "U Splitu smo vidjeli ___ palaču. (Diocletian's)",
          options: ['Dioklecijanova', 'Dioklecijanovu', 'Dioklecijanovoj', 'Dioklecijanovom'],
          correct: 1,
          hint: 'Vidjeti takes the accusative, and the adjective agrees with palaču.',
          explanation: 'U Splitu smo vidjeli Dioklecijanovu palaču.',
        },
        {
          q: 'Na Hvaru je ljeti ___. (hot)',
          options: ['vruć', 'vruće', 'vruća', 'vrući'],
          correct: 1,
          hint: 'Weather uses the neuter form after je.',
          explanation: 'Na Hvaru je ljeti vruće.',
        },
        {
          q: 'Which of these places is an island?',
          options: ['Zagreb', 'Hvar', 'Pula', 'Zadar'],
          correct: 1,
          hint: 'You reach it by ferry.',
          explanation: 'Hvar is an island; the others are cities.',
        },
        {
          type: 'type',
          q: 'Trajektom smo išli ____ Hvar.',
          answer: 'na',
          hint: 'Islands take this preposition.',
          explanation: 'Trajektom smo išli na Hvar.',
        },
        {
          type: 'type',
          q: 'Prvo smo bili tri dana u ____. (Zagreb)',
          answer: 'Zagrebu',
          hint: 'Where you were: the locative.',
          explanation: 'Prvo smo bili tri dana u Zagrebu.',
        },
        {
          type: 'type',
          q: 'Iz Zagreba smo išli ____ na Plitvice. (by bus)',
          answer: 'autobusom',
          hint: 'Transport: the instrumental, no preposition.',
          explanation: 'Iz Zagreba smo išli autobusom na Plitvice.',
        },
        {
          type: 'type',
          q: 'Sljedeće godine ____ ići u Dubrovnik. (we will)',
          answer: 'ćemo',
          hint: 'The future helper for mi.',
          explanation: 'Sljedeće godine ćemo ići u Dubrovnik.',
        },
        {
          type: 'type',
          q: 'U Zadru smo ____ morske orgulje. (listened to)',
          answer: 'slušali',
          hint: 'The past participle of slušati, plural.',
          explanation: 'U Zadru smo slušali morske orgulje.',
        },
        {
          type: 'type',
          q: 'Na Plitvicama smo vidjeli jezera i ____. (waterfalls)',
          answer: 'slapove',
          hint: 'The accusative plural of slap.',
          explanation: 'Na Plitvicama smo vidjeli jezera i slapove.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Na ___ je bilo sunčano." (Hvar)',
        options: ['Hvar', 'Hvara', 'Hvaru', 'Hvarom'],
        correct: 2,
        explanation: 'Na + locative: na Hvaru.',
      },
      {
        q: 'Complete: "Sutra idemo ___ Dubrovnik."',
        options: ['u', 'na', 'po', 'kod'],
        correct: 0,
        explanation: 'A city takes u: u Dubrovnik.',
      },
      {
        q: 'Complete: "Na Hvar smo išli ___." (by ferry)',
        options: ['trajekt', 'trajektom', 'trajektu', 'trajekta'],
        correct: 1,
        explanation: 'Transport goes in the instrumental: trajektom.',
      },
      {
        q: 'Which city is the capital of Croatia?',
        options: ['Split', 'Zadar', 'Zagreb', 'Rijeka'],
        correct: 2,
        explanation: 'Zagreb is the capital.',
      },
      {
        q: 'Complete: "Sljedeće godine ___ ići u Istru." (we will)',
        options: ['smo', 'ćemo', 'ćete', 'bismo'],
        correct: 1,
        explanation: 'The future for mi uses ćemo.',
      },
      {
        q: 'What is wrong with "Idem u Splitu."?',
        options: [
          'Nothing is wrong',
          'u should be na',
          'idem should be idemo',
          'Splitu should be Split — going somewhere takes the accusative',
        ],
        correct: 3,
        explanation: 'Going takes the accusative: Idem u Split. Splitu is for being there.',
      },
    ],
    vocab: [
      ['putovati', 'to travel', 'Putovali smo po Hrvatskoj.'],
      ['otok', 'island', 'Hvar je otok.'],
      ['trajekt', 'ferry', 'Trajektom smo išli na Hvar.'],
      ['obala', 'coast', 'Split je na obali.'],
      ['jezero', 'lake', 'Na Plitvicama ima puno jezera.'],
      ['slap', 'waterfall', 'Vidjeli smo jezera i slapove.'],
      ['zidine', 'city walls', 'Hodat ćemo po gradskim zidinama.'],
      ['palača', 'palace', 'U Splitu je Dioklecijanova palača.'],
      ['izlet', 'trip, outing', 'Jučer smo išli na izlet.'],
    ],
  },
};
