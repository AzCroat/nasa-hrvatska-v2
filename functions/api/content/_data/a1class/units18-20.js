// ─── A1 lessons in class order — Units 18–20 ─────────────────────────────────
// Same shape and rules as lessonClassA1.js (the Unit 1 pilot):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what the lesson and the lessons before it have taught. No conditional, no
// comparatives, no reported speech. The imperative appears only from
// imperative-basic, the vocative of names only from vocative-intro (before it,
// people are addressed only by names left as they are — Ana, Marko, Luka, Tom;
// from vocative-intro on, Tom is called Tome, as that lesson teaches). The title
// gospođo is known from greetings-farewells.
// Spoken dialogues write vi / vas / vam / vaš without the courtesy capital, which
// is what formal-address teaches: the capital belongs to letters and emails and
// has no place in speech. A typed answer accepts the capital too.

export const CLASS_A1_U18_20 = {
  // ══ UNIT 18 ════════════════════════════════════════════════════════════════

  // ── Years and full dates ───────────────────────────────────────────────────
  'dates-years': {
    text: {
      kind: 'dialogue',
      title: 'Koje si godine rođena?',
      lines: [
        { who: 'Ana', hr: 'Marko, kad je tvoj rođendan?', en: 'Marko, when is your birthday?' },
        {
          who: 'Marko',
          hr: 'Petog svibnja. Rođen sam petog svibnja tisuću devetsto devedeset osme.',
          en: 'On the fifth of May. I was born on the fifth of May 1998.',
        },
        {
          who: 'Ana',
          hr: 'I moj brat je rođen tisuću devetsto devedeset osme!',
          en: 'My brother was born in 1998 too!',
        },
        {
          who: 'Marko',
          hr: 'A ti? Koje si godine rođena?',
          en: 'And you? In which year were you born?',
        },
        {
          who: 'Ana',
          hr: 'Dvije tisuće prve. Rođena sam dvanaestog ožujka dvije tisuće prve u Splitu.',
          en: 'In 2001. I was born on the twelfth of March 2001 in Split.',
        },
        {
          who: 'Marko',
          hr: 'A koje si godine došla u Zagreb?',
          en: 'And in which year did you come to Zagreb?',
        },
        {
          who: 'Ana',
          hr: 'Dvije tisuće dvadesete. Sada je dvije tisuće dvadeset šesta — ovdje sam već šest godina.',
          en: 'In 2020. Now it is 2026 — I have been here for six years already.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is older, and when did Ana come to Zagreb?',
          options: [
            'Marko is older; Ana came in 2020',
            'Ana is older; she came in 2020',
            'Marko is older; Ana came in 2026',
            'They were born in the same year; Ana came in 2001',
          ],
          correct: 0,
          hint: 'Marko was born in 1998. Think of the year Ana gives for herself, and the year she gives for Zagreb.',
          explanation:
            'Marko was born in 1998 and Ana in 2001, so Marko is older. She came to Zagreb in 2020 — 2026 is the year it is now.',
        },
        {
          q: 'Ana says "Rođena sam … dvije tisuće prve", but "Sada je dvije tisuće dvadeset šesta". Why does the last word end in -e the first time and in -a the second?',
          options: [
            'The first says WHEN something happened; the second names the year itself',
            'The first is about a woman; the second is about a man',
            'The first is the past; the second is the future',
            'There is no reason — both endings are always possible',
          ],
          correct: 0,
          hint: 'Ask of each sentence: is it answering "in which year?" or "what year is it?"',
          explanation:
            'A year is an ordinal that agrees with godina. Naming the year, it is the subject form: šesta. Saying when something happened, it is the genitive: prve.',
        },
        {
          type: 'type',
          q: 'Now you. Someone asks you: "Koje ste godine bili u Hrvatskoj?" You were there in 2023. Answer: Dvije tisuće dvadeset ____.',
          answer: 'treće',
          hint: 'It says WHEN, so the last word is an ordinal with the same ending as in Ana\'s "dvije tisuće prve".',
          explanation:
            'Dvije tisuće dvadeset treće. — only the last word is an ordinal, and for "when" it takes the genitive -e.',
        },
        {
          type: 'type',
          q: 'Now name a year itself — 1999: Tisuću devetsto devedeset ____ je bila dobra godina.',
          answer: 'deveta',
          hint: 'Here the year is the subject of the sentence, as in "Sada je dvije tisuće dvadeset šesta".',
          explanation:
            'Tisuću devetsto devedeset deveta je bila dobra godina. — the year is the subject, so the ordinal ends in -a, like godina.',
        },
        {
          type: 'transform',
          q: 'This names the year 2015. Change it so that it answers "Koje godine?" (in which year?).',
          from: 'dvije tisuće petnaesta',
          answer: 'dvije tisuće petnaeste',
          accept: ['dvije tisuće petnaeste godine'],
          hint: 'Only the last word changes — one letter.',
          explanation:
            'dvije tisuće petnaeste — "in 2015". The feminine ordinal changes -a to -e in the genitive.',
        },
      ],
    },
    mix: [
      6,
      12,
      {
        type: 'match',
        q: 'Match each year to the way it is read.',
        pairs: [
          ['1991.', 'tisuću devetsto devedeset prva'],
          ['2013.', 'dvije tisuće trinaesta'],
          ['1856.', 'tisuću osamsto pedeset šesta'],
          ['2020.', 'dvije tisuće dvadeseta'],
        ],
        explanation:
          'One thousand in a year is tisuću, two thousand is dvije tisuće, and only the last word is an ordinal.',
      },
      2,
      {
        type: 'sort',
        q: 'Does it NAME the year ("what year is it?"), or does it say WHEN something happened ("in which year?")?',
        groups: ['Names the year', 'Says when something happened'],
        items: [
          { hr: 'dvije tisuće dvadeseta', group: 0 },
          { hr: 'dvije tisuće dvadesete', group: 1 },
          { hr: 'tisuću devetsto devedeset prva', group: 0 },
          { hr: 'tisuću devetsto devedeset prve', group: 1 },
          { hr: 'dvije tisuće trinaeste', group: 1 },
          { hr: 'dvije tisuće osamnaesta', group: 0 },
        ],
        explanation:
          'The subject form ends in -a, like godina, and names the year. The genitive ends in -e and says when.',
      },
      8,
      {
        type: 'listen',
        audio: 'Rođen sam tisuću devetsto osamdeset devete.',
        q: 'In which year was the speaker born?',
        options: ['1989', '1998', '1979', '1999'],
        correct: 0,
        explanation: 'tisuću devetsto osamdeset devete — 1989. osamdeset is 80, devedeset is 90.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "I was born in 1995."',
        words: ['Rođen', 'sam', 'tisuću', 'devetsto', 'devedeset', 'pete.'],
        explanation:
          'Rođen sam tisuću devetsto devedeset pete. The number is read from the biggest part down.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moj', 'brat', 'je', 'rođen', 'dvije', 'tisuće', 'treća', 'godine.'],
        wrong: 6,
        answer: 'treće',
        hint: 'The sentence says WHEN he was born. Which case does the ordinal need?',
        explanation:
          'Moj brat je rođen dvije tisuće treće godine. — "when" takes the genitive, and the ordinal agrees with godine.',
      },
      10,
      {
        type: 'tf',
        q: 'Hrvatska je uvela euro dvije tisuće trinaeste.',
        answer: false,
        hint: 'Two dates from this lesson: joining the European Union, and introducing the euro.',
        explanation:
          'Croatia introduced the euro dvije tisuće dvadeset treće (2023). Dvije tisuće trinaeste (2013) is the year it joined the European Union.',
      },
      11,
      {
        type: 'transform',
        q: 'Marija is speaking now, not Marko. Change the sentence.',
        from: 'Rođen sam u Zadru tisuću devetsto devedeset devete.',
        answer: 'Rođena sam u Zadru tisuću devetsto devedeset devete.',
        hint: 'One word is a describing word and agrees with the speaker.',
        explanation:
          'Rođena sam… — rođen agrees with the speaker, like the past tense does. The year does not change.',
      },
      {
        type: 'listen',
        audio: 'Danas je petnaesti kolovoza dvije tisuće dvadeset šeste.',
        q: 'What is the date today?',
        options: ['15 August 2026', '5 August 2026', '15 October 2026', '15 August 2016'],
        correct: 0,
        explanation:
          'petnaesti kolovoza dvije tisuće dvadeset šeste — the fifteenth of August 2026. The day is in the subject form; the month and the year are genitive.',
      },
      {
        type: 'dictate',
        audio: 'Rođena sam dvije tisuće prve.',
        answer: 'Rođena sam dvije tisuće prve.',
        hint: 'Five words. A woman is speaking, and the last word of the year says "when".',
        explanation: 'Rođena sam dvije tisuće prve. — I was born in 2001.',
      },
    ],
  },

  // ── The body and feeling unwell ────────────────────────────────────────────
  'body-health': {
    text: {
      kind: 'dialogue',
      title: 'U ljekarni',
      lines: [
        { who: 'Ljekarnica', hr: 'Dobar dan! Izvolite?', en: 'Good day! Can I help you?' },
        {
          who: 'Luka',
          hr: 'Dobar dan. Ne osjećam se dobro. Boli me glava i bole me noge.',
          en: 'Good day. I do not feel well. My head hurts and my legs hurt.',
        },
        { who: 'Ljekarnica', hr: 'Imate li temperaturu?', en: 'Do you have a temperature?' },
        {
          who: 'Luka',
          hr: 'Mislim da imam. I jako kašljem.',
          en: 'I think I do. And I am coughing a lot.',
        },
        {
          who: 'Ljekarnica',
          hr: 'Prehlađeni ste. Imam dobar lijek za grlo.',
          en: 'You have a cold. I have a good medicine for the throat.',
        },
        {
          who: 'Luka',
          hr: 'Hvala. Imate li nešto i za glavobolju?',
          en: 'Thank you. Do you have something for a headache as well?',
        },
        {
          who: 'Ljekarnica',
          hr: 'Imam. Ali sutra morate ići liječniku.',
          en: 'I do. But tomorrow you must go to the doctor.',
        },
        { who: 'Luka', hr: 'Dobro. Hvala vam, doviđenja!', en: 'All right. Thank you, goodbye!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is wrong with Luka, and what must he do tomorrow?',
          options: [
            'His head and legs hurt and he has a cough; he must go to the doctor',
            'He has toothache; he must go to the dentist',
            'His back hurts; he must stay at home',
            'He only has a cough; he must come back to the pharmacy',
          ],
          correct: 0,
          hint: 'He names two things that hurt, then one more problem. The pharmacist ends with advice.',
          explanation:
            'His head and his legs hurt, he thinks he has a temperature and he is coughing. The pharmacist says he must go to the doctor tomorrow.',
        },
        {
          q: 'Luka says "Boli me glava" but "bole me noge". Why does the verb change?',
          options: [
            'The verb agrees with what hurts: one head, but several legs',
            'The first is the present and the second is the past',
            'The first is polite and the second is casual',
            'The verb agrees with Luka, and he says it twice in two ways',
          ],
          correct: 0,
          hint: 'Look at the word after "me" each time. One thing, or more than one?',
          explanation:
            'The body part is the subject, so the verb counts it: glava is one thing, noge are several. Luka is the object — the small word me.',
        },
        {
          type: 'type',
          q: 'Now you. Your friend Ana is sick and you are in the pharmacy for her. Say that her throat hurts: Boli ____ grlo.',
          answer: 'je',
          accept: ['ju'],
          hint: 'The person in pain is the object. Use the short object form for "her" — the one you would put after "Vidim".',
          explanation:
            'Boli je grlo. — the throat hurts her. The short accusative of ona is je (also ju).',
        },
        {
          type: 'type',
          q: 'The pharmacist asks about your throat. It is fine — say that it does NOT hurt: Grlo me ____ boli.',
          answer: 'ne',
          hint: 'The small word for "not" goes right before the verb, as with every verb.',
          explanation: 'Grlo me ne boli. — my throat does not hurt.',
        },
        {
          type: 'transform',
          q: 'It is Luka who has the headache. Say it about him.',
          from: 'Boli me glava.',
          answer: 'Boli ga glava.',
          accept: ['Glava ga boli.'],
          hint: 'Only the small object word changes: "me" becomes "him".',
          explanation: 'Boli ga glava. — the head hurts him. ga is the short accusative of on.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each part of the body to its meaning.',
        pairs: [
          ['glava', 'head'],
          ['grlo', 'throat'],
          ['trbuh', 'stomach'],
          ['zub', 'tooth'],
          ['leđa', 'back'],
        ],
        explanation: 'Five words from the body table. Leđa is the odd one: it is always plural.',
      },
      0,
      5,
      {
        type: 'sort',
        q: 'One thing hurts, or several? Sort each body part by the verb it takes.',
        groups: ['Boli me … (one thing)', 'Bole me … (several)'],
        items: [
          { hr: 'glava', group: 0 },
          { hr: 'noge', group: 1 },
          { hr: 'grlo', group: 0 },
          { hr: 'oči', group: 1 },
          { hr: 'zub', group: 0 },
          { hr: 'leđa', group: 1 },
          { hr: 'uši', group: 1 },
          { hr: 'trbuh', group: 0 },
        ],
        explanation:
          'The verb counts the body part. Noge, oči and uši are plurals, and leđa exists only in the plural.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "My throat hurts."',
        words: ['Boli', 'me', 'grlo.'],
        explanation: 'Boli me grlo. The short word me stands in second place.',
      },
      4,
      2,
      {
        type: 'listen',
        audio: 'Bole ga oči.',
        q: 'What is the problem?',
        options: ['His eyes hurt', 'His ears hurt', 'Her eyes hurt', 'My eyes hurt'],
        correct: 0,
        explanation: 'Bole ga oči. — ga is "him", and oči are the eyes. Ears are uši.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'je', 'prehlađen', 'i', 'kašlje.'],
        wrong: 2,
        answer: 'prehlađena',
        hint: 'The describing word has to agree with Ana.',
        explanation: 'Ana je prehlađena i kašlje. — a woman is prehlađena, a man is prehlađen.',
      },
      10,
      {
        type: 'transform',
        q: 'Now several teeth hurt, not one. Change "zub" to "zubi".',
        from: 'Boli me zub.',
        answer: 'Bole me zubi.',
        accept: ['Zubi me bole.'],
        hint: 'Two words change: the body part, and the verb that counts it.',
        explanation: 'Bole me zubi. — several things hurt, so the verb is bole.',
      },
      {
        type: 'tf',
        q: 'U ljekarni kupujemo lijek.',
        answer: true,
        hint: 'Ljekarna and lijek are in the lesson: one is a place, the other is what you get there.',
        explanation: 'True — a ljekarna is a pharmacy, and lijek is medicine.',
      },
      8,
      {
        type: 'listen',
        audio: 'Imate li nešto protiv kašlja?',
        q: 'Where would you most likely say this?',
        options: ['In a pharmacy', 'At a bus station', 'In a restaurant', 'At a hotel reception'],
        correct: 0,
        explanation:
          'Imate li nešto protiv kašlja? — do you have anything for a cough? You ask it in a ljekarna.',
      },
      {
        type: 'dictate',
        audio: 'Ne osjećam se dobro.',
        answer: 'Ne osjećam se dobro.',
        hint: 'Four words. One of them is the small word that always travels with this verb.',
        explanation: 'Ne osjećam se dobro. — I do not feel well.',
      },
    ],
  },

  // ── boljeti ────────────────────────────────────────────────────────────────
  boljeti: {
    text: {
      kind: 'dialogue',
      title: 'Kod liječnice',
      lines: [
        { who: 'Liječnica', hr: 'Dobar dan. Što vas boli?', en: 'Good day. What hurts?' },
        { who: 'Ivan', hr: 'Dobar dan. Bole me leđa.', en: 'Good day. My back hurts.' },
        { who: 'Liječnica', hr: 'Boli li vas i glava?', en: 'Does your head hurt too?' },
        {
          who: 'Ivan',
          hr: 'Ne, glava me ne boli. Ali jučer me je boljelo koljeno.',
          en: 'No, my head does not hurt. But yesterday my knee hurt.',
        },
        { who: 'Liječnica', hr: 'A danas? Boli li vas još?', en: 'And today? Does it still hurt?' },
        {
          who: 'Ivan',
          hr: 'Ne, danas me koljeno ne boli. Ali leđa su me boljela cijeli tjedan.',
          en: 'No, today my knee does not hurt. But my back hurt all week.',
        },
        { who: 'Liječnica', hr: 'Sjedite li puno na poslu?', en: 'Do you sit a lot at work?' },
        {
          who: 'Ivan',
          hr: 'Da, sjedim cijeli dan. I moju ženu bole leđa — i ona radi u uredu.',
          en: 'Yes, I sit all day. My wife has a sore back too — she works in an office as well.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what hurts Ivan today, and what hurt him yesterday?',
          options: [
            'His back hurts today; his knee hurt yesterday',
            'His head hurts today; his back hurt yesterday',
            'His knee hurts today; his head hurt yesterday',
            'Nothing hurts today; his back hurt yesterday',
          ],
          correct: 0,
          hint: 'He comes in with one problem, says no to a second, and mentions a third that is over.',
          explanation:
            'His back hurts — and has hurt all week. His head does not hurt. His knee hurt yesterday, but not today.',
        },
        {
          q: 'Ivan says "moju ženu bole leđa". Why "moju ženu", and not "moja žena"?',
          options: [
            'The person in pain is the object of the verb, so she is in the accusative',
            'Because he is speaking about the past',
            'Because leđa is a plural word',
            'Because he is speaking politely to a doctor',
          ],
          correct: 0,
          hint: 'In this sentence, what is doing the hurting — the wife or the back?',
          explanation:
            'The back is the subject; it hurts HER. A noun in that place takes the accusative, just like the short words me and vas: moja žena → moju ženu.',
        },
        {
          type: 'type',
          q: 'Now you. Your friend Marko has toothache and you are speaking for him. Tell the doctor: ____ boli zub.',
          answer: 'Marka',
          hint: 'Marko is the object. A man\'s name takes the object ending of a living masculine noun, as in "Vidim Ivana".',
          explanation: 'Marka boli zub. — the tooth hurts Marko. Marko → Marka in the accusative.',
        },
        {
          type: 'type',
          q: 'Yesterday it was your tooth. Zub is masculine: Jučer me je ____ zub.',
          answer: 'bolio',
          hint: 'The past form agrees with the body part. Ivan says "boljelo" for koljeno, which is neuter. For a masculine word, boljeti does what voljeti does: voljelo, but volio.',
          explanation: 'Jučer me je bolio zub. — zub is masculine, so the past form is bolio.',
        },
        {
          type: 'transform',
          q: 'Good news: it has stopped. Make the sentence negative.',
          from: 'Boli me koljeno.',
          answer: 'Ne boli me koljeno.',
          accept: ['Koljeno me ne boli.'],
          hint: 'The "not" goes right before the verb. The short word me keeps second place.',
          explanation: 'Ne boli me koljeno. — or, starting with the knee: Koljeno me ne boli.',
        },
      ],
    },
    mix: [
      8,
      12,
      1,
      {
        type: 'match',
        q: 'Whom does it hurt? Match each person to the short form used with "boli".',
        pairs: [
          ['ja', 'me'],
          ['ti', 'te'],
          ['on', 'ga'],
          ['mi', 'nas'],
          ['oni', 'ih'],
        ],
        explanation:
          'These are the short accusative forms: Boli me, Boli te, Boli ga, Boli nas, Boli ih. For ona it is je, for vi it is vas.',
      },
      9,
      3,
      {
        type: 'order',
        q: 'Put the words in order: "Nothing hurts."',
        words: ['Ništa', 'me', 'ne', 'boli.'],
        explanation:
          'Ništa me ne boli. The short word me is second, and ne stands right before the verb.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'mamu', 'boli', 'koljeno.'],
        wrong: 0,
        answer: 'Moju',
        hint: 'The person in pain is the object — and so is the word that describes her.',
        explanation:
          'Moju mamu boli koljeno. — both words are in the accusative: moja mama → moju mamu.',
      },
      {
        type: 'listen',
        audio: 'Boli li te još zub?',
        q: 'What is the speaker asking?',
        options: [
          'Does your tooth still hurt?',
          'Did your tooth hurt yesterday?',
          'Does his tooth still hurt?',
          'Where does it hurt?',
        ],
        correct: 0,
        explanation: 'Boli li te još zub? — te is "you" (a friend), and još means "still".',
      },
      11,
      {
        type: 'sort',
        q: 'Yesterday it hurt. Which past form goes with each body part?',
        groups: ['boljela', 'bolio', 'boljelo'],
        items: [
          { hr: 'glava', group: 0 },
          { hr: 'zub', group: 1 },
          { hr: 'grlo', group: 2 },
          { hr: 'noga', group: 0 },
          { hr: 'trbuh', group: 1 },
          { hr: 'koljeno', group: 2 },
          { hr: 'uho', group: 2 },
        ],
        explanation:
          'The past agrees with the body part: feminine glava and noga take boljela, masculine zub and trbuh take bolio, neuter grlo, koljeno and uho take boljelo.',
      },
      4,
      {
        type: 'transform',
        q: 'Put it in the past: this was yesterday.',
        from: 'Bole me noge.',
        answer: 'Boljele su me noge.',
        accept: ['Noge su me boljele.', 'Jučer su me boljele noge.', 'Jučer su me noge boljele.'],
        hint: 'Noge is feminine plural. With several things, the helping verb stands before the short word me.',
        explanation: 'Boljele su me noge. — plural past, and su comes before me.',
      },
      {
        type: 'tf',
        q: '"Ivana bole leđa" means that a woman called Ivana has a sore back.',
        answer: false,
        hint: "The person in pain is in the accusative. What is the accusative of the man's name Ivan?",
        explanation:
          'Ivana is here the accusative of Ivan: his back hurts. About a woman called Ivana it would be "Ivanu bole leđa".',
      },
      {
        type: 'dictate',
        audio: 'Više me ne boli.',
        answer: 'Više me ne boli.',
        hint: 'Four words: "It does not hurt any more."',
        explanation: 'Više me ne boli. — više … ne means "not any more".',
      },
    ],
  },

  // ── Feminine nouns without -a ──────────────────────────────────────────────
  'i-nouns-intro': {
    text: {
      kind: 'dialogue',
      title: 'Dobra večer!',
      lines: [
        {
          who: 'Ana',
          hr: 'Dobra večer, Tom! Večera je na stolu.',
          en: 'Good evening, Tom! Dinner is on the table.',
        },
        {
          who: 'Tom',
          hr: 'Hvala! Juha je dobra, ali je bez soli.',
          en: 'Thank you! The soup is good, but it has no salt.',
        },
        {
          who: 'Ana',
          hr: 'Da? Sol je u kuhinji. A što čitaš?',
          en: 'Really? The salt is in the kitchen. And what are you reading?',
        },
        {
          who: 'Tom',
          hr: 'Knjigu o ljubavi. Ali ne znam ovu riječ: „mladost”.',
          en: 'A book about love. But I do not know this word: "mladost".',
        },
        {
          who: 'Ana',
          hr: 'To je lijepa riječ. Moja baka uvijek priča o mladosti.',
          en: 'That is a beautiful word. My grandmother always talks about her youth.',
        },
        {
          who: 'Tom',
          hr: 'Hrvatski je teška stvar! Svaki dan učim puno novih riječi.',
          en: 'Croatian is a hard thing! Every day I learn a lot of new words.',
        },
        {
          who: 'Ana',
          hr: 'Ali svaka nova riječ je mala radost.',
          en: 'But every new word is a small joy.',
        },
        {
          who: 'Tom',
          hr: 'Da! Ali sad je kasno. Laku noć, Ana!',
          en: 'Yes! But it is late now. Good night, Ana!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is missing from the soup, and what is Tom reading?',
          options: [
            'Salt is missing; he is reading a book about love',
            'Nothing is missing; he is reading a newspaper',
            'Salt is missing; he is reading a book about his grandmother',
            'The soup is cold; he is reading a book about love',
          ],
          correct: 0,
          hint: 'Tom praises the soup and adds a "but". Then Ana asks what he is reading.',
          explanation:
            'Juha je bez soli — without salt. And he is reading a book o ljubavi, about love.',
        },
        {
          q: 'Ana says "lijepa riječ" and "svaka nova riječ"; Tom says "ovu riječ". What do the words around "riječ" tell you about it?',
          options: [
            'It is feminine, although it does not end in -a',
            'It is masculine, because it ends in a consonant',
            'It is a plural word',
            'It is neuter',
          ],
          correct: 0,
          hint: 'lijepa, nova, ovu — which gender has these endings?',
          explanation:
            'The noun itself does not show its gender, so the words around it do: lijepa, nova and ovu are feminine. Večer, sol, stvar, ljubav, radost and noć are feminine in the same way.',
        },
        {
          type: 'type',
          q: 'Now you. Tom is reading a book about love. YOUR book is about the night (noć): Čitam knjigu o ____.',
          answer: 'noći',
          hint: 'After "o", these nouns add one letter — look at what happens to ljubav and mladost in the dialogue.',
          explanation: 'Čitam knjigu o noći. — the locative of this group simply adds -i.',
        },
        {
          type: 'type',
          q: 'Tom calls Croatian "teška stvar". You think it is a GOOD thing: Hrvatski je ____ stvar.',
          answer: 'dobra',
          hint: 'Look at the word Tom puts in front of "stvar". Which gender is it — and which form of "dobar" goes with that gender?',
          explanation:
            'Hrvatski je dobra stvar. — stvar is feminine, so the describing word ends in -a.',
        },
        {
          type: 'transform',
          q: 'Say that you do not know it: begin with "Ne znam".',
          from: 'To je nova riječ.',
          answer: 'Ne znam novu riječ.',
          accept: ['Ne znam tu novu riječ.', 'Ne znam tu riječ.', 'Ne znam ovu novu riječ.'],
          hint: 'As an object the noun stays exactly as it is. Only the describing word takes the feminine object ending, as in Tom\'s "ovu riječ".',
          explanation:
            'Ne znam novu riječ. — the object form of riječ is the bare noun; nova becomes novu and shows the case.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['stvar', 'thing'],
          ['riječ', 'word'],
          ['sol', 'salt'],
          ['kost', 'bone'],
          ['radost', 'joy'],
        ],
        explanation: 'All five end in a consonant, and all five are feminine.',
      },
      8,
      9,
      {
        type: 'sort',
        q: 'All of these end in a consonant. Which are feminine (ta …) and which are masculine (taj …)?',
        groups: ['Feminine: ta …', 'Masculine: taj …'],
        items: [
          { hr: 'noć', group: 0 },
          { hr: 'grad', group: 1 },
          { hr: 'stvar', group: 0 },
          { hr: 'most', group: 1 },
          { hr: 'ljubav', group: 0 },
          { hr: 'gost', group: 1 },
          { hr: 'sol', group: 0 },
          { hr: 'stol', group: 1 },
        ],
        explanation:
          'Noć, stvar, ljubav and sol are feminine: ta noć, ta stvar. Grad, most, gost and stol are ordinary masculine nouns. The ending does not tell you — learn each with a word that shows its gender.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dobar', 'večer,', 'Ana!'],
        wrong: 0,
        answer: 'Dobra',
        hint: 'Večer is feminine. The greeting has to agree with it.',
        explanation:
          'Dobra večer! — večer is feminine, so it is dobra, not the masculine form of "Dobar dan".',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "I do not know that word."',
        words: ['Ne', 'znam', 'tu', 'riječ.'],
        explanation:
          'Ne znam tu riječ. The describing word tu shows the object; riječ itself does not change.',
      },
      3,
      {
        type: 'listen',
        audio: 'Pas jede veliku kost.',
        q: 'What is the dog eating?',
        options: ['A big bone', 'A big fish', 'A small bone', 'Bread without salt'],
        correct: 0,
        explanation:
          'Pas jede veliku kost. — kost is a bone; veliku shows that it is a feminine object.',
      },
      11,
      {
        type: 'transform',
        q: 'Make a sentence that starts with "Pričamo o" (we are talking about).',
        from: 'velika radost',
        answer: 'Pričamo o velikoj radosti.',
        hint: 'After "o" the describing word takes the feminine ending -oj, and the noun adds one letter.',
        explanation: 'Pričamo o velikoj radosti. — velikoj shows the locative, and radost adds -i.',
      },
      6,
      {
        type: 'tf',
        q: '"Gost" (guest) is feminine, like "radost".',
        answer: false,
        hint: 'Is "gost" built from a describing word with -ost, or does it only happen to end in those letters?',
        explanation:
          'False. Radost is feminine; gost and most are short everyday words that are masculine: taj gost, taj most.',
      },
      7,
      {
        type: 'dictate',
        audio: 'To je teška riječ.',
        answer: 'To je teška riječ.',
        hint: 'Four words. The describing word is in its feminine form.',
        explanation: 'To je teška riječ. — that is a hard word.',
      },
    ],
  },

  // ── Words that are only plural ─────────────────────────────────────────────
  'pluralia-tantum': {
    text: {
      kind: 'dialogue',
      title: 'Gdje su moje naočale?',
      lines: [
        {
          who: 'Marko',
          hr: 'Ana, gdje su moje naočale? Bez naočala ne vidim ništa!',
          en: 'Ana, where are my glasses? Without my glasses I cannot see anything!',
        },
        {
          who: 'Ana',
          hr: 'Na stolu su. Tamo su i današnje novine.',
          en: "They are on the table. Today's newspaper is there too.",
        },
        {
          who: 'Marko',
          hr: 'Hvala. A gdje su moje crne hlače?',
          en: 'Thank you. And where are my black pants?',
        },
        {
          who: 'Ana',
          hr: 'Hlače su u ormaru. Ali zašto ne nosiš nove traperice?',
          en: 'The pants are in the closet. But why are you not wearing your new jeans?',
        },
        {
          who: 'Marko',
          hr: 'Traperice nosim samo u subotu i nedjelju.',
          en: 'I only wear jeans on Saturday and Sunday.',
        },
        {
          who: 'Ana',
          hr: 'Dobro. Ali vrata su otvorena, a vani je hladno!',
          en: 'All right. But the door is open, and it is cold outside!',
        },
        { who: 'Marko', hr: 'Vrata su bila zatvorena!', en: 'The door was closed!' },
        {
          who: 'Ana',
          hr: 'Nisu. Bila su otvorena cijelu noć.',
          en: 'It was not. It was open all night.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where are the glasses, and where are the black pants?',
          options: [
            'The glasses are on the table; the pants are in the closet',
            'The glasses are in the closet; the pants are on the table',
            'Both are on the table, with the newspaper',
            'The glasses are by the door; the pants are in the closet',
          ],
          correct: 0,
          hint: 'Ana answers two "where" questions. The newspaper is in the same place as one of the two things.',
          explanation:
            'The glasses are on the table, where the newspaper is. The pants are in the closet.',
        },
        {
          q: 'Marko and Ana are talking about ONE door. What do the words around "vrata" show?',
          options: [
            'That vrata is a plural word: the verb and the describing words are plural too',
            'That vrata is a feminine singular word, like kuća',
            'That there are really two doors',
            'That the door is very big',
          ],
          correct: 0,
          hint: 'Compare with one window: "Prozor je otvoren." What is different in the sentences about the door?',
          explanation:
            'Vrata names one door, but the word exists only in the plural — so everything that goes with it is plural: otvorena, bila zatvorena.',
        },
        {
          type: 'type',
          q: "Now you. You cannot find today's newspaper. Ask: Gdje ____ današnje novine?",
          answer: 'su',
          hint: 'One newspaper — but novine is a plural word, like naočale and hlače. Which form of biti do they take in the dialogue?',
          explanation: 'Gdje su današnje novine? — the verb is plural, because the word is.',
        },
        {
          type: 'type',
          q: 'Your jeans are old (star). Say it: Moje traperice su ____.',
          answer: 'stare',
          hint: 'Traperice is in the same group as hlače: the describing word ends like "moje" and "crne".',
          explanation: 'Moje traperice su stare. — feminine plural: -e.',
        },
        {
          type: 'transform',
          q: 'Put it in the past.',
          from: 'Novine su na stolu.',
          answer: 'Novine su bile na stolu.',
          accept: ['Novine su bile na stolu'],
          hint: 'Marko says "su bila" for vrata. Novine is in the other group — the one with hlače — so the past form ends differently.',
          explanation:
            'Novine su bile na stolu. — su bile for the hlače group, su bila for the vrata group.',
        },
      ],
    },
    mix: [
      8,
      9,
      12,
      1,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['naočale', 'glasses'],
          ['škare', 'scissors'],
          ['novine', 'newspaper'],
          ['vrata', 'door'],
          ['usta', 'mouth'],
        ],
        explanation:
          'Each of these names ONE thing in English, and each is a plural word in Croatian.',
      },
      {
        type: 'sort',
        q: 'Which group does each word belong to: the one that takes "moje … su nove", or the one that takes "moja … su nova"?',
        groups: ['Like hlače: moje … su nove', 'Like vrata: moja … su nova'],
        items: [
          { hr: 'naočale', group: 0 },
          { hr: 'leđa', group: 1 },
          { hr: 'novine', group: 0 },
          { hr: 'usta', group: 1 },
          { hr: 'škare', group: 0 },
          { hr: 'traperice', group: 0 },
        ],
        explanation:
          'Naočale, novine, škare and traperice are feminine plurals, like hlače. Leđa and usta are neuter plurals, like vrata.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Novine', 'su', 'bila', 'na', 'stolu.'],
        wrong: 2,
        answer: 'bile',
        hint: 'Which group is novine in — the one with hlače, or the one with vrata?',
        explanation:
          'Novine su bile na stolu. — novine is a feminine plural, like hlače, so the past form ends in -e.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Where are my glasses?"',
        words: ['Gdje', 'su', 'moje', 'naočale?'],
        explanation: 'Gdje su moje naočale?',
      },
      3,
      10,
      {
        type: 'listen',
        audio: 'Kupila sam jedne plave traperice.',
        q: 'What did she buy?',
        options: [
          'One pair of blue jeans',
          'Two pairs of blue jeans',
          'One pair of black pants',
          'Blue glasses',
        ],
        correct: 0,
        explanation:
          'jedne plave traperice — one pair of blue jeans. "One" takes its plural form: jedne.',
      },
      11,
      {
        type: 'transform',
        q: 'Say the same about the door instead of the pants.',
        from: 'Hlače su bile nove.',
        answer: 'Vrata su bila nova.',
        hint: 'Vrata is in the other group: the past form and the describing word both change their last letter.',
        explanation: 'Vrata su bila nova. — neuter plural: bila, nova.',
      },
      7,
      {
        type: 'tf',
        q: '"Današnje novine" can mean ONE newspaper.',
        answer: true,
        hint: 'Think of how Ana uses the word in the dialogue.',
        explanation:
          'True. Novine is plural in form, but it is the ordinary word for one newspaper.',
      },
      {
        type: 'listen',
        audio: 'Bez naočala ne vidim ništa.',
        q: "What is the speaker's problem?",
        options: [
          'They cannot see without their glasses',
          'They cannot find the newspaper',
          'Their back hurts',
          'The door is closed',
        ],
        correct: 0,
        explanation: 'Bez naočala ne vidim ništa. — without glasses I see nothing.',
      },
      {
        type: 'dictate',
        audio: 'Moje hlače su u ormaru.',
        answer: 'Moje hlače su u ormaru.',
        hint: 'Five words. One pair of pants — but listen to the verb.',
        explanation: 'Moje hlače su u ormaru. — my pants are in the closet.',
      },
    ],
  },

  // ══ UNIT 19 ════════════════════════════════════════════════════════════════

  // ── Sport and free time ────────────────────────────────────────────────────
  'sports-free-time': {
    text: {
      kind: 'dialogue',
      title: 'Čime se baviš?',
      lines: [
        {
          who: 'Ivan',
          hr: 'Petra, čime se baviš u slobodno vrijeme?',
          en: 'Petra, what do you do in your free time?',
        },
        {
          who: 'Petra',
          hr: 'Bavim se plivanjem. Dva puta tjedno idem na bazen. A ti?',
          en: 'I swim. Twice a week I go to the pool. And you?',
        },
        {
          who: 'Ivan',
          hr: 'Ja igram nogomet. Subotom igramo u parku.',
          en: 'I play soccer. On Saturdays we play in the park.',
        },
        { who: 'Petra', hr: 'Igraš li i košarku?', en: 'Do you play basketball too?' },
        {
          who: 'Ivan',
          hr: 'Ne, ne volim igrati košarku. Ali volim gledati utakmice na televiziji.',
          en: 'No, I do not like playing basketball. But I like watching matches on television.',
        },
        { who: 'Petra', hr: 'Za koga navijaš?', en: 'Who do you support?' },
        { who: 'Ivan', hr: 'Navijam za Hajduk. A ti?', en: 'I support Hajduk. And you?' },
        {
          who: 'Petra',
          hr: 'Ja navijam za Dinamo. Ali u subotu idem s tobom na utakmicu!',
          en: 'I support Dinamo. But on Saturday I am going to the match with you!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does each of them do in their free time?',
          options: [
            'Petra swims; Ivan plays soccer',
            'Petra plays basketball; Ivan swims',
            'Both of them play soccer in the park',
            'Petra plays soccer; Ivan only watches television',
          ],
          correct: 0,
          hint: 'One of them goes to the pool twice a week. The other plays in the park on Saturdays.',
          explanation:
            'Petra swims — bavi se plivanjem. Ivan plays soccer, and he also likes watching matches.',
        },
        {
          q: 'Ivan\'s sport is "nogomet" with no ending, but Petra\'s is "plivanjem" with -em. Why?',
          options: [
            'After igrati the sport is a plain object; after baviti se it is in the "with" case',
            'Because Ivan is a man and Petra is a woman',
            'Because soccer is a game for many people and swimming is not',
            'Because Petra is speaking about the past',
          ],
          correct: 0,
          hint: 'Look at the verb each of them uses just before the sport.',
          explanation:
            'Igrati takes the accusative: nogomet, košarku. Baviti se means "to busy yourself WITH", so it takes the instrumental: plivanjem.',
        },
        {
          type: 'type',
          q: 'Now you. Petra asks YOU: "Čime se baviš?" Your sport is tennis (tenis). Answer: Bavim se ____.',
          answer: 'tenisom',
          hint: 'After "bavim se" comes the "with" case. Tenis is masculine: it takes the ending you know from "s bratom".',
          explanation: 'Bavim se tenisom. — baviti se + instrumental.',
        },
        {
          type: 'type',
          q: 'Your sister plays volleyball (odbojka) on Saturdays: Subotom igra ____.',
          answer: 'odbojku',
          hint: 'After igrati the game is a plain object. Odbojka changes the way košarka does in the dialogue.',
          explanation: 'Subotom igra odbojku. — igrati + accusative: odbojka → odbojku.',
        },
        {
          type: 'transform',
          q: 'Say that you LIKE doing it: use "volim".',
          from: 'Igram tenis.',
          answer: 'Volim igrati tenis.',
          hint: 'After "volim" the second verb goes back to its dictionary form, as in Ivan\'s "volim gledati".',
          explanation:
            'Volim igrati tenis. — only volim changes for the person; igrati stays in the -ti form.',
        },
      ],
    },
    mix: [
      12,
      6,
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Igram', 'nogometom', 's', 'bratom.'],
        wrong: 1,
        answer: 'nogomet',
        hint: 'What form does the game take after igrati?',
        explanation:
          'Igram nogomet s bratom. — igrati takes a plain object. The "with" ending belongs after baviti se.',
      },
      {
        type: 'sort',
        q: 'Which verb goes in front: "Igram …" or "Bavim se …"?',
        groups: ['Igram …', 'Bavim se …'],
        items: [
          { hr: 'nogomet', group: 0 },
          { hr: 'nogometom', group: 1 },
          { hr: 'tenis', group: 0 },
          { hr: 'tenisom', group: 1 },
          { hr: 'odbojku', group: 0 },
          { hr: 'trčanjem', group: 1 },
        ],
        explanation:
          'Igram takes the accusative (nogomet, tenis, odbojku). Bavim se takes the instrumental (nogometom, tenisom, trčanjem).',
      },
      3,
      9,
      {
        type: 'order',
        q: 'Put the words in order: "My brother does tennis (as his sport)."',
        words: ['Brat', 'se', 'bavi', 'tenisom.'],
        accept: ['Brat se tenisom bavi.'],
        explanation:
          'Brat se bavi tenisom. The little word se stands in second place, before the verb.',
      },
      {
        type: 'listen',
        audio: 'Vikendom gledamo utakmicu na televiziji.',
        q: 'When do they watch the match?',
        options: ['At weekends', 'Every day', 'On Saturdays', 'Twice a week'],
        correct: 0,
        explanation: 'vikendom — at weekends. Subotom would be "on Saturdays".',
      },
      10,
      {
        type: 'match',
        q: 'Match each verb to its meaning.',
        pairs: [
          ['plivati', 'to swim'],
          ['trčati', 'to run'],
          ['skijati', 'to ski'],
          ['planinariti', 'to hike'],
          ['navijati', 'to support a team'],
        ],
        explanation: 'After volim and ne volim these verbs stay in this -ti form: Volim plivati.',
      },
      5,
      {
        type: 'transform',
        q: 'Say the same with "baviti se" instead of "igrati".',
        from: 'Igram košarku.',
        answer: 'Bavim se košarkom.',
        hint: 'Do not forget the little word that belongs to this verb — and change the ending of the sport to the "with" case.',
        explanation: 'Bavim se košarkom. — se in second place, and košarka in the instrumental.',
      },
      11,
      {
        type: 'tf',
        q: '"Volim plivam." is a correct sentence.',
        answer: false,
        hint: 'How many verbs in it change for the person?',
        explanation: 'False. After volim the second verb stays in the -ti form: Volim plivati.',
      },
      {
        type: 'listen',
        audio: 'Navijaš li za Dinamo?',
        q: 'What is the question about?',
        options: [
          'Which team you support',
          'Which sport you play',
          'When the match is',
          'Where the pool is',
        ],
        correct: 0,
        explanation: 'Navijaš li za Dinamo? — do you support Dinamo? navijati za + the team.',
      },
      {
        type: 'dictate',
        audio: 'Igramo odbojku na plaži.',
        answer: 'Igramo odbojku na plaži.',
        hint: 'Four words. The game is the object of the verb.',
        explanation: 'Igramo odbojku na plaži. — we play volleyball on the beach.',
      },
    ],
  },

  // ── Qualities as nouns: -ost ───────────────────────────────────────────────
  'abstract-ost': {
    text: {
      kind: 'text',
      title: 'Moja baka',
      lines: [
        {
          hr: 'Moja baka ima osamdeset godina. „Starost nije teška”, kaže ona.',
          en: 'My grandmother is eighty. "Old age is not hard," she says.',
        },
        { hr: 'Često priča o mladosti.', en: 'She often talks about her youth.' },
        {
          hr: '„Moja mladost je bila lijepa, ali kratka”, kaže baka.',
          en: '"My youth was beautiful, but short," says Grandma.',
        },
        {
          hr: 'Bila je liječnica. Za taj posao treba puno hrabrosti.',
          en: 'She was a doctor. That job takes a lot of courage.',
        },
        {
          hr: 'Svi vole njezinu ljubaznost i iskrenost.',
          en: 'Everyone loves her kindness and honesty.',
        },
        { hr: 'Mi smo njezina velika radost.', en: 'We are her great joy.' },
        {
          hr: '„Mudrost ne dolazi brzo”, kaže baka.',
          en: '"Wisdom does not come quickly," says Grandma.',
        },
      ],
      questions: [
        {
          q: "Without looking back at the text: what was the grandmother's job, and what does she say about her youth?",
          options: [
            'She was a doctor; her youth was beautiful but short',
            'She was a teacher; her youth was hard',
            'She was a doctor; her youth was long and sad',
            'She was a cook; she never talks about her youth',
          ],
          correct: 0,
          hint: 'Her job needed a lot of courage. About her youth she says two things, joined by "but".',
          explanation:
            'Bila je liječnica — a doctor. And: Moja mladost je bila lijepa, ali kratka.',
        },
        {
          q: 'Grandma says "Moja mladost je bila lijepa". What do "moja", "bila" and "lijepa" show about the word "mladost"?',
          options: [
            'It is feminine, although it ends in a consonant',
            'It is masculine, like most',
            'It is a plural word',
            'It is neuter, like ljeto',
          ],
          correct: 0,
          hint: 'Which gender ends in -a in all three of those words?',
          explanation:
            'Every noun built with -ost is feminine, so everything around it is feminine too: moja, bila, lijepa.',
        },
        {
          type: 'type',
          q: 'The text builds "mladost" from mlad (young) and "starost" from star (old). Build the noun from slab (weak): ____',
          answer: 'slabost',
          hint: 'Take the feminine form, slaba, remove its last letter and add the same three letters that the other two nouns end in.',
          explanation: 'slab → slaba → slabost (weakness).',
        },
        {
          type: 'type',
          q: 'Now you. Someone was very kind to you. Thank them for their kindness: Hvala na ____.',
          answer: 'ljubaznosti',
          hint: 'The text has the bare noun for "kindness". After "hvala na" an -ost noun adds one letter, as in "o mladosti".',
          explanation: 'Hvala na ljubaznosti. — hvala na + locative, and -ost nouns add -i.',
        },
        {
          type: 'transform',
          q: 'Put it in the past.',
          from: 'Moja radost je velika.',
          answer: 'Moja radost je bila velika.',
          accept: ['Moja je radost bila velika.'],
          hint: 'Use the past form that agrees with a feminine noun — the one Grandma uses about her youth.',
          explanation:
            'Moja radost je bila velika. — radost is feminine, so the past form is bila.',
        },
      ],
    },
    mix: [
      0,
      {
        type: 'match',
        q: 'Match each noun to its meaning.',
        pairs: [
          ['hrabrost', 'courage'],
          ['mudrost', 'wisdom'],
          ['slabost', 'weakness'],
          ['točnost', 'punctuality'],
          ['mogućnost', 'possibility'],
        ],
        explanation: 'Five qualities, all feminine nouns in -ost.',
      },
      {
        type: 'sort',
        q: 'None of these ends in -a. Which are feminine (ta …) and which are masculine (taj …)?',
        groups: ['Feminine: ta …', 'Masculine: taj …'],
        items: [
          { hr: 'mladost', group: 0 },
          { hr: 'gost', group: 1 },
          { hr: 'radost', group: 0 },
          { hr: 'most', group: 1 },
          { hr: 'misao', group: 0 },
          { hr: 'posao', group: 1 },
          { hr: 'bolest', group: 0 },
        ],
        explanation:
          'Mladost, radost and bolest are feminine, and so is misao. Gost and most only happen to end in -ost and are masculine; posao is masculine too.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moj', 'mladost', 'je', 'bila', 'lijepa.'],
        wrong: 0,
        answer: 'Moja',
        hint: 'Everything around an -ost noun has to agree with its gender.',
        explanation: 'Moja mladost je bila lijepa. — mladost is feminine: moja, bila, lijepa.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Youth is beautiful, but short."',
        words: ['Mladost', 'je', 'lijepa,', 'ali', 'kratka.'],
        explanation: 'Mladost je lijepa, ali kratka.',
      },
      4,
      8,
      {
        type: 'listen',
        audio: 'Imamo dvije mogućnosti: vlak ili autobus.',
        q: 'What are the two options?',
        options: [
          'The train or the bus',
          'The car or the bus',
          'The train or the plane',
          'Today or tomorrow',
        ],
        correct: 0,
        explanation:
          'Imamo dvije mogućnosti: vlak ili autobus. — we have two options: the train or the bus.',
      },
      7,
      {
        type: 'transform',
        q: 'Say "without …": begin with "bez".',
        from: 'velika radost',
        answer: 'bez velike radosti',
        hint: 'Bez takes the genitive: the describing word takes the feminine genitive ending, and the noun adds one letter.',
        explanation: 'bez velike radosti — velika → velike, radost → radosti.',
      },
      11,
      {
        type: 'tf',
        q: 'The everyday Croatian word for "happiness" is "sreća", not a noun in -ost.',
        answer: true,
        hint: 'Think of the list of qualities that have their own everyday word.',
        explanation:
          'True: sretan → sreća. Not every quality takes -ost — also sloboda, brzina, dobrota.',
      },
      13,
      {
        type: 'dictate',
        audio: 'Hvala na ljubaznosti.',
        answer: 'Hvala na ljubaznosti.',
        hint: 'Three words: "Thank you for your kindness."',
        explanation: 'Hvala na ljubaznosti. — hvala na + locative: ljubaznost adds -i.',
      },
    ],
  },

  // ── Feelings ───────────────────────────────────────────────────────────────
  feelings: {
    text: {
      kind: 'dialogue',
      title: 'Kako se osjećaš?',
      lines: [
        {
          who: 'Maja',
          hr: 'Bog, Marko! Kako se osjećaš? Zašto si tužan?',
          en: 'Hi, Marko! How do you feel? Why are you sad?',
        },
        {
          who: 'Marko',
          hr: 'Nisam tužan, samo sam umoran. I malo sam nervozan — sutra imam ispit.',
          en: 'I am not sad, I am just tired. And I am a bit nervous — I have an exam tomorrow.',
        },
        { who: 'Maja', hr: 'Bojiš li se ispita?', en: 'Are you afraid of the exam?' },
        {
          who: 'Marko',
          hr: 'Malo se bojim. A ti? Ti si danas jako sretna!',
          en: 'I am a little afraid. And you? You are very happy today!',
        },
        { who: 'Maja', hr: 'Jesam! Zaljubljena sam.', en: 'I am! I am in love.' },
        { who: 'Marko', hr: 'U koga?', en: 'With whom?' },
        {
          who: 'Maja',
          hr: 'U Luku. Hodam s Lukom već dva mjeseca i veselim se vikendu — idemo na more.',
          en: 'With Luka. I have been going out with Luka for two months and I am looking forward to the weekend — we are going to the seaside.',
        },
        {
          who: 'Marko',
          hr: 'Drago mi je! Sad se i ja osjećam dobro.',
          en: 'I am glad! Now I feel good too.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how does Marko feel at the start, and how does Maja feel?',
          options: [
            'Marko is tired and a bit nervous; Maja is happy and in love',
            'Marko is sad; Maja is angry',
            'Marko is happy; Maja is nervous about an exam',
            'Both of them are tired and bored',
          ],
          correct: 0,
          hint: "Marko corrects Maja's guess and names two feelings. Maja gives one piece of big news.",
          explanation:
            'Marko is not sad: he is umoran and a little nervozan before his exam. Maja is sretna, because she is zaljubljena.',
        },
        {
          q: 'Marko says "umoran sam" and "nervozan sam", but Maja says "zaljubljena sam", and Marko calls her "sretna". Why are the endings different?',
          options: [
            'A feeling word agrees with the person it describes: a man or a woman',
            'Maja is speaking about the past',
            'Marko is speaking politely and Maja is not',
            'The words for good feelings end in -a',
          ],
          correct: 0,
          hint: 'Who is each word describing?',
          explanation:
            'Feeling words are adjectives. About a man: umoran, nervozan, sretan. About a woman: umorna, nervozna, sretna, zaljubljena.',
        },
        {
          type: 'type',
          q: 'Now you. Maja is looking forward to the weekend. YOU are looking forward to the summer (ljeto): Veselim se ____.',
          answer: 'ljetu',
          hint: 'Maja says "veselim se vikendu". Ljeto is neuter, and here it takes the same last letter as vikend does.',
          explanation: 'Veselim se ljetu. — veseliti se takes the dative: vikendu, ljetu.',
        },
        {
          type: 'type',
          q: 'Maja is in love "u Luku". Say that Marko is in love with Ana: Marko je zaljubljen u ____.',
          answer: 'Anu',
          hint: 'After "zaljubljen u" the person is an object. Ana changes exactly as Luka does in the dialogue.',
          explanation: 'Marko je zaljubljen u Anu. — u + accusative: Ana → Anu.',
        },
        {
          type: 'transform',
          q: 'Maja is speaking now, not Marko. Change the sentence.',
          from: 'Umoran sam i nervozan.',
          answer: 'Umorna sam i nervozna.',
          hint: 'Both feeling words change. Each has a fleeting a that disappears when the feminine ending is added.',
          explanation: 'Umorna sam i nervozna. — umoran → umorna, nervozan → nervozna.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each feeling to its meaning.',
        pairs: [
          ['sretan', 'happy'],
          ['tužan', 'sad'],
          ['ljut', 'angry'],
          ['zabrinut', 'worried'],
          ['miran', 'calm'],
        ],
        explanation: 'These are the forms a man uses about himself. A woman changes the ending.',
      },
      1,
      9,
      {
        type: 'sort',
        q: 'Who is speaking — a man or a woman?',
        groups: ['A man', 'A woman'],
        items: [
          { hr: 'Umoran sam.', group: 0 },
          { hr: 'Nervozna sam.', group: 1 },
          { hr: 'Zaljubljen sam.', group: 0 },
          { hr: 'Tužna sam.', group: 1 },
          { hr: 'Bio sam zabrinut.', group: 0 },
          { hr: 'Bila sam mirna.', group: 1 },
        ],
        explanation:
          'The feeling word agrees with the speaker, and so does the past form: a man says umoran, bio; a woman says umorna, bila.',
      },
      10,
      2,
      {
        type: 'listen',
        audio: 'Hladno mi je.',
        q: 'How does the speaker feel?',
        options: ['Cold', 'Bored', 'Sorry', 'Tired'],
        correct: 0,
        explanation: 'Hladno mi je. — I am cold: literally "it is cold to me".',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Today I feel very good."',
        words: ['Danas', 'se', 'osjećam', 'jako', 'dobro.'],
        accept: ['Danas se jako dobro osjećam.'],
        explanation:
          'Danas se osjećam jako dobro. The little word se stands in second place, right after Danas.',
      },
      4,
      {
        type: 'transform',
        q: 'Now say it about him: HE is bored.',
        from: 'Dosadno mi je.',
        answer: 'Dosadno mu je.',
        hint: 'Change only the small dative word: "to me" becomes "to him".',
        explanation: 'Dosadno mu je. — he is bored. The pattern stays; only the pronoun changes.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'je', 'zaljubljen', 'u', 'Marka.'],
        wrong: 2,
        answer: 'zaljubljena',
        hint: 'The describing word has to agree with the person who is in love.',
        explanation: 'Ana je zaljubljena u Marka. — a woman is zaljubljena.',
      },
      5,
      8,
      {
        type: 'tf',
        q: '"Dosadan sam." means "I am bored."',
        answer: false,
        hint: 'Compare it with the pattern "… mi je".',
        explanation:
          'False. "Dosadan sam" means "I am boring". Bored is said with the dative pattern, "… mi je".',
      },
      {
        type: 'dictate',
        audio: 'Veselim se vikendu.',
        answer: 'Veselim se vikendu.',
        hint: 'Three words. The little word that belongs to the verb comes second.',
        explanation: 'Veselim se vikendu. — I am looking forward to the weekend.',
      },
    ],
  },

  // ── Giving instructions ────────────────────────────────────────────────────
  'imperative-basic': {
    text: {
      kind: 'dialogue',
      title: 'Izvolite, sjednite!',
      lines: [
        {
          who: 'Gospođa Horvat',
          hr: 'Dobar dan, Tom! Izvolite, sjednite.',
          en: 'Good day, Tom! Please, take a seat.',
        },
        { who: 'Tom', hr: 'Hvala, gospođo Horvat.', en: 'Thank you, Mrs. Horvat.' },
        {
          who: 'Gospođa Horvat',
          hr: 'Ana, daj Tomu čašu vode!',
          en: 'Ana, give Tom a glass of water!',
        },
        {
          who: 'Ana',
          hr: 'Izvoli, Tom. Pij polako, voda je hladna.',
          en: 'Here you are, Tom. Drink slowly, the water is cold.',
        },
        {
          who: 'Tom',
          hr: 'Gospođo Horvat, govorite polako, molim vas. Još učim hrvatski.',
          en: 'Mrs. Horvat, speak slowly, please. I am still learning Croatian.',
        },
        {
          who: 'Gospođa Horvat',
          hr: 'Dobro, dobro. Čitajte hrvatske novine i gledajte televiziju!',
          en: 'All right, all right. Read Croatian newspapers and watch television!',
        },
        {
          who: 'Ana',
          hr: 'Tom, dođi sutra s nama na izlet! I nemoj zaboraviti jaknu.',
          en: 'Tom, come on a trip with us tomorrow! And do not forget your jacket.',
        },
        {
          who: 'Tom',
          hr: 'Hvala! Čekaj me u osam kod kuće.',
          en: 'Thank you! Wait for me at eight at home.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Ana invite Tom to, and what must he not forget?',
          options: [
            'A trip tomorrow; his jacket',
            'Dinner tonight; a book',
            'A trip tomorrow; the tickets',
            'A movie at eight; his glasses',
          ],
          correct: 0,
          hint: "Ana's invitation is for tomorrow. Right after it she adds one thing to remember.",
          explanation:
            'Dođi sutra s nama na izlet — a trip. And: nemoj zaboraviti jaknu — do not forget your jacket.',
        },
        {
          q: 'Mrs. Horvat says "sjednite" to Tom but "daj" to her daughter Ana. Why are the two forms different?',
          options: [
            'To Tom she uses the polite form in -te; to Ana the form for one person she calls ti',
            'The first is a question and the second is an order',
            'The first is about the future and the second about now',
            'Tom is a man and Ana is a woman',
          ],
          correct: 0,
          hint: 'Think of "Kako ste?" and "Kako si?"',
          explanation:
            'An instruction has a short form for one person you call ti (daj, pij, dođi) and a form in -te for a group or for politeness (sjednite, govorite, čitajte).',
        },
        {
          type: 'type',
          q: 'Now you. Your friend is reading aloud much too fast. Ask him to read slowly: ____ polako, molim te.',
          answer: 'Čitaj',
          hint: 'Mrs. Horvat tells Tom, politely, to read. To a friend the same word has no -te.',
          explanation: 'Čitaj polako, molim te. — čitajte without -te is the form for a friend.',
        },
        {
          type: 'type',
          q: 'You want your teacher, whom you call Vi, to come tomorrow: ____ sutra, molim vas.',
          answer: 'Dođite',
          hint: 'Ana invites Tom, a friend, with the short form. The polite form adds the ending you see in "sjednite".',
          explanation: 'Dođite sutra, molim vas. — dođi for a friend, dođite politely.',
        },
        {
          type: 'transform',
          q: 'Say it politely, to an older person.',
          from: 'Čekaj me u osam!',
          answer: 'Čekajte me u osam!',
          hint: 'Only the verb changes: add the polite ending.',
          explanation:
            'Čekajte me u osam! — the -te form is for a group, or for one person you call Vi.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'sort',
        q: 'Who is being spoken to: one friend, or a stranger / a group?',
        groups: ['One friend (ti)', 'Polite, or a group (Vi)'],
        items: [
          { hr: 'Čitaj!', group: 0 },
          { hr: 'Gledajte!', group: 1 },
          { hr: 'Pij!', group: 0 },
          { hr: 'Idite!', group: 1 },
          { hr: 'Sjedni!', group: 0 },
          { hr: 'Slušajte!', group: 1 },
        ],
        explanation:
          'The form in -te speaks to a group or politely to one person. Without -te it speaks to one friend.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Give me some water, please."',
        words: ['Daj', 'mi', 'vode,', 'molim', 'te.'],
        explanation: 'Daj mi vode, molim te. The little word mi comes straight after the verb.',
      },
      0,
      5,
      {
        type: 'match',
        q: 'Match each phrase to the moment you would say it.',
        pairs: [
          ['Izvolite.', 'You hand something to a customer'],
          ['Oprostite.', 'You stop a stranger in the street'],
          ['Pij polako!', 'You tell a friend not to rush a drink'],
          ['Krenimo!', 'You want everyone, yourself included, to set off'],
        ],
        explanation:
          'Izvolite and Oprostite are polite -te forms. Pij is the short form for one friend. The ending -imo means "let us".',
      },
      {
        type: 'transform',
        q: 'Say it politely, to someone you call Vi.',
        from: 'Dođi sutra ujutro.',
        answer: 'Dođite sutra ujutro.',
        hint: 'Add the polite ending to the verb.',
        explanation: 'Dođite sutra ujutro. — the polite form.',
      },
      6,
      {
        type: 'listen',
        audio: 'Idi ravno pa skreni lijevo.',
        q: 'What are you told to do?',
        options: [
          'Go straight on, then turn left',
          'Go straight on, then turn right',
          'Turn left, then go straight on',
          'Wait here',
        ],
        correct: 0,
        explanation:
          'Idi ravno pa skreni lijevo. — go straight on, then turn left. Both verbs are in the form for a friend.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Molim', 'te,', 'nemoj', 'kasniš', 'sutra.'],
        wrong: 3,
        answer: 'kasniti',
        hint: 'After nemoj the verb does not change for the person.',
        explanation:
          'Molim te, nemoj kasniti sutra. — nemoj is always followed by the dictionary form.',
      },
      11,
      {
        type: 'transform',
        q: 'Tell your friend NOT to do it: use "nemoj".',
        from: 'Idi!',
        answer: 'Nemoj ići!',
        hint: 'After nemoj the verb goes back to its dictionary form. For this verb, that form ends in -ći.',
        explanation: 'Nemoj ići! — do not go!',
      },
      8,
      1,
      {
        type: 'tf',
        q: '"Sjedni!" is the right thing to say to an older stranger.',
        answer: false,
        hint: 'Which form does Mrs. Horvat use when she is being polite to Tom?',
        explanation:
          'False. To a stranger or an older person the form is polite: Sjednite! The short form sounds curt.',
      },
      {
        type: 'dictate',
        audio: 'Govorite polako, molim vas.',
        answer: 'Govorite polako, molim vas.',
        hint: 'Four words. The first is a polite instruction; the last two make it a request.',
        explanation: 'Govorite polako, molim vas. — speak slowly, please.',
      },
    ],
  },

  // ── Negative commands ──────────────────────────────────────────────────────
  'imperative-negative': {
    text: {
      kind: 'dialogue',
      title: 'Nemoj kasniti!',
      lines: [
        {
          who: 'Mama',
          hr: 'Luka, sutra imaš ispit. Nemoj kasniti!',
          en: 'Luka, you have an exam tomorrow. Do not be late!',
        },
        {
          who: 'Luka',
          hr: 'Ne brini, mama. Neću kasniti.',
          en: 'Do not worry, Mom. I will not be late.',
        },
        { who: 'Mama', hr: 'I nemoj zaboraviti doručak.', en: 'And do not forget breakfast.' },
        {
          who: 'Luka',
          hr: 'Dobro, dobro. Nemoj mi to govoriti svaki dan!',
          en: 'All right, all right. Do not tell me that every day!',
        },
        {
          who: 'Mama',
          hr: 'A tvoja sestra? Ona još spava?',
          en: 'And your sister? Is she still asleep?',
        },
        {
          who: 'Luka',
          hr: 'Spava. Nemojmo je buditi, neka spava.',
          en: 'She is. Let us not wake her, let her sleep.',
        },
        {
          who: 'Mama',
          hr: 'Dobro, neka spava. Ali ti ne gledaj televiziju do jedanaest!',
          en: 'All right, let her sleep. But you — do not watch television until eleven!',
        },
        { who: 'Luka', hr: 'Neću! Laku noć, mama.', en: 'I will not! Good night, Mom.' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Luka have tomorrow, and which two things does his mother first tell him NOT to do?',
          options: [
            'An exam; not to be late and not to forget breakfast',
            'A match; not to forget his bag and not to be late',
            'An exam; not to wake his sister and not to go out',
            'A trip; not to be late and not to forget his jacket',
          ],
          correct: 0,
          hint: 'Both of them come in her first two lines, and both start with the same word.',
          explanation:
            'He has an ispit. Nemoj kasniti — do not be late. Nemoj zaboraviti doručak — do not forget breakfast.',
        },
        {
          q: 'Look at the verb after "nemoj" each time it appears. What form is it in?',
          options: [
            'The dictionary form in -ti — it never changes',
            'The "ti" form of the present',
            'The past form',
            'The form in -te',
          ],
          correct: 0,
          hint: 'Compare with what Luka says about himself: "Neću kasniti."',
          explanation:
            'After nemoj the verb stays in the infinitive, the dictionary form. Only the word nemoj itself changes with the person you are speaking to.',
        },
        {
          type: 'type',
          q: 'Now you. A friend is standing outside in the cold for you. Tell them not to wait: Nemoj ____.',
          answer: 'čekati',
          hint: 'After nemoj: the dictionary form of the verb "to wait".',
          explanation: 'Nemoj čekati. — do not wait.',
        },
        {
          type: 'type',
          q: 'Now say "do not be late" politely, to a new colleague: ____ kasniti, molim vas.',
          answer: 'Nemojte',
          hint: 'The mother\'s word for Luka gets the polite ending — the same ending as in "Izvolite" and "Oprostite".',
          explanation:
            'Nemojte kasniti, molim vas. — nemoj for a friend, nemojte politely or to a group.',
        },
        {
          type: 'transform',
          q: 'Say the same thing with "nemoj" instead of "ne".',
          from: 'Ne gledaj televiziju!',
          answer: 'Nemoj gledati televiziju!',
          hint: 'After nemoj the verb goes back to its dictionary form.',
          explanation:
            'Nemoj gledati televiziju! — both ways are correct; nemoj takes the infinitive.',
        },
      ],
    },
    mix: [
      {
        type: 'transform',
        q: 'Say it politely, to a stranger.',
        from: 'Nemoj čekati ovdje.',
        answer: 'Nemojte čekati ovdje.',
        hint: 'Only the first word changes.',
        explanation: 'Nemojte čekati ovdje. — the polite form; the verb after it does not change.',
      },
      {
        type: 'sort',
        q: 'Who is being told "do not"? One friend, a stranger or a group, or all of us together?',
        groups: ['One friend (ti)', 'A stranger or a group (Vi)', 'All of us (mi)'],
        items: [
          { hr: 'Nemoj ići!', group: 0 },
          { hr: 'Nemojte pušiti.', group: 1 },
          { hr: 'Nemojmo čekati.', group: 2 },
          { hr: 'Ne brini!', group: 0 },
          { hr: 'Nemojte se brinuti.', group: 1 },
          { hr: 'Nemojmo piti kavu.', group: 2 },
        ],
        explanation:
          'Nemoj speaks to one friend, nemojte to a group or politely, nemojmo means "let us not".',
      },
      2,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['Ne viči!', "Don't shout!"],
          ['Ne brini!', "Don't worry!"],
          ['Nemoj pušiti!', "Don't smoke!"],
          ['Neka čeka.', 'Let him wait.'],
          ['Nemojmo ići.', "Let's not go."],
        ],
        explanation:
          'Ne + an instruction is short and direct; nemoj + the dictionary form works with every verb.',
      },
      6,
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Do not worry, everything is fine."',
        words: ['Nemojte', 'se', 'brinuti,', 'sve', 'je', 'u', 'redu.'],
        explanation:
          'Nemojte se brinuti, sve je u redu. The little word se comes straight after nemojte.',
      },
      5,
      8,
      {
        type: 'listen',
        audio: 'Ne diraj, vruće je!',
        q: 'Why should you not touch it?',
        options: ['It is hot', 'It is cold', 'It is expensive', 'It is not yours'],
        correct: 0,
        explanation: 'Ne diraj, vruće je! — do not touch, it is hot!',
      },
      {
        type: 'transform',
        q: 'Say the same thing with "nemoj" instead of "ne".',
        from: 'Ne viči!',
        answer: 'Nemoj vikati!',
        hint: 'After nemoj comes the dictionary form of this verb. It is in the word list of this lesson, and it does not have a č.',
        explanation: 'Nemoj vikati! — viči comes from vikati; after nemoj the infinitive returns.',
      },
      9,
      12,
      13,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Neka', 'djeca', 'igrati', 'vani.'],
        wrong: 2,
        answer: 'igraju',
        hint: 'After neka comes the ordinary present tense — here, the form for "they".',
        explanation: 'Neka djeca igraju vani. — neka + the present: let the children play outside.',
      },
      {
        type: 'tf',
        q: '"Neka čeka." tells YOU to wait.',
        answer: false,
        hint: 'Who does neka speak about — you, or someone else?',
        explanation:
          'False. Neka čeka means "let him (or her) wait". To you it would be Čekaj! or Čekajte!',
      },
      {
        type: 'dictate',
        audio: 'Nemoj mi reći kraj filma!',
        answer: 'Nemoj mi reći kraj filma!',
        hint: 'Five words. The little word for "to me" comes straight after the first word.',
        explanation: 'Nemoj mi reći kraj filma! — do not tell me the end of the movie!',
      },
    ],
  },

  // ══ UNIT 20 ════════════════════════════════════════════════════════════════

  // ── Verbs ending in -ći ────────────────────────────────────────────────────
  'infinitive-ci': {
    text: {
      kind: 'dialogue',
      title: 'Možeš li doći?',
      lines: [
        {
          who: 'Ana',
          hr: 'Marko, možeš li sutra doći na večeru? Baka peče kruh.',
          en: 'Marko, can you come to dinner tomorrow? Grandma is baking bread.',
        },
        {
          who: 'Marko',
          hr: 'Mogu, ali ne mogu doći prije osam. Moram pomoći bratu.',
          en: 'I can, but I cannot come before eight. I have to help my brother.',
        },
        { who: 'Ana', hr: 'A Petra? Može li i ona doći?', en: 'And Petra? Can she come too?' },
        {
          who: 'Marko',
          hr: 'Ne može. Jučer je otišla u Split.',
          en: 'She cannot. She left for Split yesterday.',
        },
        {
          who: 'Ana',
          hr: 'Žao mi je. A kad je došao tvoj brat?',
          en: 'I am sorry. And when did your brother come?',
        },
        {
          who: 'Marko',
          hr: 'Došao je jučer. Išli smo na utakmicu.',
          en: 'He came yesterday. We went to a match.',
        },
        {
          who: 'Ana',
          hr: 'Dobro. Onda dođite u osam, ti i brat!',
          en: 'Good. Then come at eight, you and your brother!',
        },
        {
          who: 'Marko',
          hr: 'Doći ćemo. I pomoći ćemo ti u kuhinji!',
          en: 'We will come. And we will help you in the kitchen!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is coming to dinner, and at what time?',
          options: [
            'Marko and his brother, at eight',
            'Marko and Petra, at eight',
            'Only Marko, before eight',
            'Petra and her brother, in the morning',
          ],
          correct: 0,
          hint: "One person cannot come, because she has left town. Ana's last line gives the time and the guests.",
          explanation:
            'Petra has gone to Split. Marko and his brother will come at eight: Dođite u osam, ti i brat!',
        },
        {
          q: '"Možeš li", "mogu", "može li", "ne može" — all four are forms of moći. What happens inside the verb?',
          options: [
            'Its hidden g shows in "mogu" and turns into ž before -e',
            'It has two different stems, one for men and one for women',
            'The ž belongs to questions and the g to answers',
            'Nothing — these are four different verbs',
          ],
          correct: 0,
          hint: 'Compare the "I" form with the "you" and "she" forms.',
          explanation:
            'The -ći of moći hides a g: ja mogu. Before the ending -e the g softens to ž: možeš, može.',
        },
        {
          type: 'type',
          q: 'Now you. Ask Ana AND her grandmother — two people — whether they can come too: ____ li i vi doći?',
          answer: 'Možete',
          hint: 'Ana asks one friend with "možeš". For vi, the ending changes as in every verb — the stem stays.',
          explanation: 'Možete li i vi doći? — moći: možeš, može, možemo, možete.',
        },
        {
          type: 'type',
          q: 'Marko says about his brother: "Došao je jučer." Say the same about Petra: Petra je ____ jučer.',
          answer: 'došla',
          hint: 'For a woman the past form ends as in "otišla", which Marko uses about Petra.',
          explanation: 'Petra je došla jučer. — došao for a man, došla for a woman.',
        },
        {
          type: 'transform',
          q: 'Put it in the future, starting with the verb — as Marko does in his last line.',
          from: 'Idemo na more.',
          answer: 'Ići ćemo na more.',
          accept: ['Mi ćemo ići na more.'],
          hint: 'The dictionary form of "idemo" ends in -ći. Before ćemo it stays whole.',
          explanation:
            'Ići ćemo na more. — a -ći verb keeps its whole infinitive before ću, ćeš, ćemo.',
        },
      ],
    },
    mix: [
      6,
      0,
      2,
      {
        type: 'match',
        q: 'Match each dictionary form to its "ja" form in the present.',
        pairs: [
          ['ići', 'idem'],
          ['doći', 'dođem'],
          ['moći', 'mogu'],
          ['peći', 'pečem'],
        ],
        explanation:
          'The -ći hides the stem, so each "ja" form has to be learned: idem, dođem, mogu, pečem.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'je', 'došao', 'kasno.'],
        wrong: 2,
        answer: 'došla',
        hint: 'The past form has to agree with the person who came.',
        explanation:
          'Ana je došla kasno. — the past of doći is došao for a man and došla for a woman.',
      },
      8,
      {
        type: 'sort',
        q: 'Who did it — a man, a woman, or a group?',
        groups: ['A man', 'A woman', 'A group'],
        items: [
          { hr: 'Otišao je.', group: 0 },
          { hr: 'Otišla je.', group: 1 },
          { hr: 'Došli su.', group: 2 },
          { hr: 'Mogao je.', group: 0 },
          { hr: 'Pekla je.', group: 1 },
          { hr: 'Pomogli su.', group: 2 },
        ],
        explanation: 'The past ends in -ao for a man, -la for a woman and -li for a group.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "I will help you tomorrow."',
        words: ['Sutra', 'ću', 'ti', 'pomoći.'],
        explanation:
          'Sutra ću ti pomoći. The little words ću and ti stand in second place, in that order.',
      },
      3,
      {
        type: 'listen',
        audio: 'Doći ću u osam, ako mogu.',
        q: 'When will the speaker come?',
        options: [
          'At eight, if they can',
          'At eight, for certain',
          'Tomorrow morning',
          'Not at all',
        ],
        correct: 0,
        explanation: 'Doći ću u osam, ako mogu. — I will come at eight, if I can.',
      },
      9,
      {
        type: 'transform',
        q: 'A woman is speaking. Change the sentence.',
        from: 'Nisam mogao doći.',
        answer: 'Nisam mogla doći.',
        hint: 'The past form agrees with the speaker.',
        explanation: 'Nisam mogla doći. — mogao for a man, mogla for a woman.',
      },
      10,
      {
        type: 'tf',
        q: '"Doć ću sutra" is the correct way to WRITE the future of doći.',
        answer: false,
        hint: 'What happens to the final -i of a -ti verb before ću — and does a -ći verb do the same?',
        explanation: 'False. A -ći verb keeps the whole infinitive in writing: Doći ću sutra.',
      },
      {
        type: 'transform',
        q: 'Put it in the future, starting with the verb. Remember which -ći verb "kažem" belongs with.',
        from: 'Kažem ti istinu.',
        answer: 'Reći ću ti istinu.',
        accept: ['Ja ću ti reći istinu.'],
        hint: 'The infinitive you need is the -ći verb for "to tell". It stays whole in front of the small future word.',
        explanation:
          'Reći ću ti istinu. — kažem is the everyday present; the infinitive, past and future use reći.',
      },
      {
        type: 'dictate',
        audio: 'Što kažeš na kino večeras?',
        answer: 'Što kažeš na kino večeras?',
        hint: 'Five words: "How about the movies tonight?"',
        explanation:
          'Što kažeš na kino večeras? — literally "what do you say to the movies tonight?"',
      },
    ],
  },

  // ── The vocative ───────────────────────────────────────────────────────────
  'vocative-intro': {
    text: {
      kind: 'dialogue',
      title: 'Ivane, gdje si?',
      lines: [
        { who: 'Luka', hr: 'Dobar dan, profesore!', en: 'Good day, professor!' },
        {
          who: 'Profesor',
          hr: 'Dobar dan, Luka! Gdje je Ivan?',
          en: 'Good day, Luka! Where is Ivan?',
        },
        {
          who: 'Luka',
          hr: 'Ne znam. Ivane! Ivane, gdje si?',
          en: 'I do not know. Ivan! Ivan, where are you?',
        },
        {
          who: 'Ivan',
          hr: 'Ovdje sam! Oprostite, profesore, kasnim.',
          en: 'I am here! Sorry, professor, I am late.',
        },
        {
          who: 'Profesor',
          hr: 'U redu, Ivane. Sjedni. A gdje je tvoja sestra?',
          en: 'All right, Ivan. Sit down. And where is your sister?',
        },
        {
          who: 'Ivan',
          hr: 'Ana! Ana, dođi! Profesor te čeka.',
          en: 'Ana! Ana, come! The professor is waiting for you.',
        },
        {
          who: 'Ana',
          hr: 'Dolazim! Dobar dan, profesore.',
          en: 'I am coming! Good day, professor.',
        },
        {
          who: 'Profesor',
          hr: 'Dobar dan, Ana. A sada čitaj, Marko!',
          en: 'Good day, Ana. And now read, Marko!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is late, and who is called in after him?',
          options: [
            'Ivan is late; then his sister Ana is called',
            'Luka is late; then the professor calls Ivan',
            'Ana is late; Ivan is already in the room',
            'Marko is late; then Luka is called',
          ],
          correct: 0,
          hint: 'The one who is late says sorry. Then the professor asks about a member of his family.',
          explanation:
            'Ivan says "Oprostite, profesore, kasnim." Then he calls his sister: Ana, dođi!',
        },
        {
          q: 'Luka calls "Ivane!" — but Ivan calls "Ana!" and the professor says "Marko". Why does only Ivan\'s name change?',
          options: [
            'When you call a man whose name ends in a consonant, the name adds -e; names ending in a vowel stay as they are here',
            'Ivan is being told off, and the others are not',
            'Only the names of late people change',
            'Luka is speaking politely, and the others are not',
          ],
          correct: 0,
          hint: 'Look at the last letter of each name as it is normally written: Ivan, Ana, Marko.',
          explanation:
            "This is the calling form. Ivan ends in a consonant and adds -e, just like profesor → profesore. Marko already ends in a vowel, and a woman's first name such as Ana normally stays as it is.",
        },
        {
          type: 'type',
          q: 'Now you. Your friend Josip is on the other side of the street. Call him: ____, dođi!',
          answer: 'Josipe',
          hint: "A man's name that ends in a consonant — do what Luka does when he calls Ivan.",
          explanation: 'Josipe, dođi! — Josip adds -e when you call him.',
        },
        {
          type: 'type',
          q: 'You walk into the doctor’s office. Greet the doctor (doktor): Dobar dan, ____!',
          answer: 'doktore',
          hint: 'The word ends the same way as the one Luka uses to greet his teacher.',
          explanation: 'Dobar dan, doktore! — doktor → doktore, like profesor → profesore.',
        },
        {
          type: 'type',
          q: 'A waiter speaks to a man he does not know. He uses the calling form of gospodin: Izvolite, ____.',
          answer: 'gospodine',
          hint: 'Gospodin ends in a consonant, like Ivan and profesor. Do to it what Luka does to them.',
          explanation:
            'Izvolite, gospodine. — gospodin → gospodine: the polite way to speak to a man.',
        },
      ],
    },
    mix: [
      0,
      {
        type: 'sort',
        q: 'You are calling each of these people by name. Does the name add -e, or does it stay as it is?',
        groups: ['Adds -e', 'Stays as it is'],
        items: [
          { hr: 'Ivan', group: 0 },
          { hr: 'Marko', group: 1 },
          { hr: 'Josip', group: 0 },
          { hr: 'Luka', group: 1 },
          { hr: 'Filip', group: 0 },
          { hr: 'Hrvoje', group: 1 },
          { hr: 'Marija', group: 1 },
        ],
        explanation:
          "A man's name ending in a hard consonant adds -e: Ivane, Josipe, Filipe. Names already ending in a vowel — Marko, Luka, Hrvoje — stay, and so does a woman's first name like Marija.",
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "Ivan, come here!"',
        words: ['Ivane,', 'dođi', 'ovamo!'],
        explanation: 'Ivane, dođi ovamo! The name you call out comes first, in its calling form.',
      },
      5,
      {
        type: 'match',
        q: 'Each of these is a calling form. Match it to the person being called.',
        pairs: [
          ['Bože!', 'God'],
          ['brate!', 'a brother'],
          ['sine!', 'a son'],
          ['oče!', 'a father'],
          ['kralju!', 'a king'],
        ],
        explanation:
          'Bog → Bože (g softens to ž), brat → brate, sin → sine, otac → oče, kralj → kralju (a soft consonant takes -u).',
      },
      2,
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dobar', 'dan,', 'gospođa', 'Horvat!'],
        wrong: 2,
        answer: 'gospođo',
        hint: "You are speaking TO her, not about her. A woman's surname does not change.",
        explanation: 'Dobar dan, gospođo Horvat! — gospođa → gospođo when you speak to her.',
      },
      {
        type: 'listen',
        audio: 'Bako, kad je ručak?',
        q: 'Who is the speaker talking to?',
        options: ['Their grandmother', 'Their mother', 'Their aunt', 'A waiter'],
        correct: 0,
        explanation:
          'Bako, kad je ručak? — baka → bako: a feminine noun in -a takes -o when you call the person.',
      },
      6,
      {
        type: 'transform',
        q: 'Write the form you use to CALL this person.',
        from: 'prijatelj',
        answer: 'prijatelju',
        accept: ['Prijatelju!', 'prijatelju!', 'Prijatelju'],
        hint: 'The word ends in a soft consonant, so the ending is not -e.',
        explanation:
          'prijatelju! — after a soft consonant (lj, nj, j, č, ć, đ, š, ž) the calling form ends in -u.',
      },
      11,
      7,
      {
        type: 'listen',
        audio: 'Gospodine Kovaču, imate li trenutak?',
        q: 'Who is being spoken to?',
        options: [
          'A man called Mr. Kovač',
          'A woman called Mrs. Kovač',
          'A close friend',
          'A child',
        ],
        correct: 0,
        explanation:
          'Gospodine Kovaču — both words are in the calling form: gospodin → gospodine, Kovač → Kovaču. A woman would be "gospođo Kovač".',
      },
      {
        type: 'tf',
        q: '"Ivano!" is how you call a man named Ivan.',
        answer: false,
        hint: 'Which nouns take -o when you call someone?',
        explanation:
          'False. The -o is for feminine nouns such as gospođo and majko. A man named Ivan is called Ivane!',
      },
      {
        type: 'dictate',
        audio: 'Hvala vam, doktore!',
        answer: 'Hvala vam, doktore!',
        hint: 'Three words. The last one is a calling form.',
        explanation: 'Hvala vam, doktore! — thank you, doctor!',
      },
    ],
  },

  // ── Ti or Vi? ──────────────────────────────────────────────────────────────
  'formal-address': {
    text: {
      kind: 'dialogue',
      title: 'Možemo li prijeći na ti?',
      lines: [
        {
          who: 'Tom',
          hr: 'Dobar dan, gospođo Kovač. Kako ste?',
          en: 'Good day, Mrs. Kovač. How are you?',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Dobar dan. Dobro, hvala. A vi? Odakle ste?',
          en: 'Good day. Fine, thank you. And you? Where are you from?',
        },
        {
          who: 'Tom',
          hr: 'Iz Kanade sam. Oprostite, govorite li engleski?',
          en: 'I am from Canada. Excuse me, do you speak English?',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Govorim malo. Ali vi dobro govorite hrvatski!',
          en: 'I speak a little. But you speak Croatian well!',
        },
        { who: 'Tom', hr: 'Hvala vam. Je li ovo vaš ured?', en: 'Thank you. Is this your office?' },
        {
          who: 'Gospođa Kovač',
          hr: 'Jest. Izvolite, sjednite. Možemo li prijeći na ti? Ja sam Vesna.',
          en: 'It is. Please, take a seat. Should we switch to "ti"? I am Vesna.',
        },
        {
          who: 'Tom',
          hr: 'Možemo! Ja sam Tom. Kako si, Vesna?',
          en: 'We can! I am Tom. How are you, Vesna?',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Odlično. A ti, Tome — jesi li gladan? Idemo na ručak!',
          en: 'Great. And you, Tom — are you hungry? Let us go to lunch!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what has changed between Tom and Mrs. Kovač by the end?',
          options: [
            'They have switched from the polite form to first names and "ti", and they go to lunch',
            'They have started speaking English',
            'Tom has left her office',
            'She has asked Tom to come back tomorrow',
          ],
          correct: 0,
          hint: 'She makes an offer and tells him her first name. The last line is an invitation.',
          explanation:
            'She offers "ti" — Možemo li prijeći na ti? — gives her first name, Vesna, and they go to lunch.',
        },
        {
          q: 'At the start Tom asks "Kako ste?"; at the end he asks "Kako si?" — the same woman both times. Why?',
          options: [
            'First he uses the polite form with someone he does not know; after her offer he uses the familiar form',
            'First he is asking about two people; then about one',
            'The first is a morning greeting and the second an evening one',
            'He makes a mistake the first time',
          ],
          correct: 0,
          hint: 'What happens between those two questions?',
          explanation:
            'Kako ste? is the Vi form: polite, with the plural verb. Once she offers "ti", Tom can say Kako si? — but not before.',
        },
        {
          type: 'type',
          q: 'Now you. Stop a salesperson politely and ask whether he has a moment: Oprostite, ____ li trenutak?',
          answer: 'Imate',
          hint: 'Vi takes the plural verb — the "vi" form of imati.',
          explanation:
            'Oprostite, imate li trenutak? — polite address uses the vi form of the verb.',
        },
        {
          type: 'type',
          q: 'You are speaking to your teacher, whom you call Vi. Ask whether this is HER book: Je li ovo ____ knjiga?',
          answer: 'vaša',
          accept: ['Vaša'],
          hint: 'Tom asks about "vaš ured". Knjiga is feminine, so the word needs the feminine ending.',
          explanation:
            'Je li ovo vaša knjiga? — vaš ured, but vaša knjiga. In speech there is no capital letter to hear.',
        },
        {
          type: 'transform',
          q: 'Say it politely, to a stranger.',
          from: 'Možeš li mi pomoći?',
          answer: 'Možete li mi pomoći?',
          hint: 'Only the verb changes: it takes the "vi" form.',
          explanation: 'Možete li mi pomoći? — the polite question, with the plural verb.',
        },
      ],
    },
    mix: [
      11,
      0,
      {
        type: 'sort',
        q: 'Who would you say it to: a friend, or a stranger or an older person?',
        groups: ['A friend (ti)', 'A stranger or an older person (Vi)'],
        items: [
          { hr: 'Kako si?', group: 0 },
          { hr: 'Odakle ste?', group: 1 },
          { hr: 'Oprosti.', group: 0 },
          { hr: 'Imate li trenutak?', group: 1 },
          { hr: 'Hvala ti.', group: 0 },
          { hr: 'Sjednite, molim vas.', group: 1 },
        ],
        explanation:
          'The ti forms are singular: si, oprosti, ti. The polite forms are plural, even to one person: Odakle ste?, Imate li…?, Sjednite.',
      },
      2,
      {
        type: 'match',
        q: 'Match each word or phrase to its meaning.',
        pairs: [
          ['gospodin', 'Mr.'],
          ['gospođa', 'Mrs.'],
          ['gospođica', 'Miss'],
          ['S poštovanjem', 'Yours sincerely'],
          ['Poštovani', 'Dear (opening a formal letter)'],
        ],
        explanation: 'The three titles, and the opening and closing of a formal letter.',
      },
      6,
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Oprostite,', 'gospodine,', 'govoriš', 'li', 'engleski?'],
        wrong: 2,
        answer: 'govorite',
        hint: 'The speaker is being polite to a man he does not know. Which form of the verb goes with that?',
        explanation:
          'Oprostite, gospodine, govorite li engleski? — polite address takes the vi form of the verb all the way through the sentence.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Could you help me, please?"',
        words: ['Možete', 'li', 'mi', 'pomoći,', 'molim', 'vas?'],
        explanation:
          'Možete li mi pomoći, molim vas? The little words li and mi follow the verb, in that order.',
      },
      9,
      {
        type: 'transform',
        q: 'Now you are asking a friend. Say it in the ti form.',
        from: 'Odakle ste?',
        answer: 'Odakle si?',
        hint: 'Only the form of biti changes.',
        explanation: 'Odakle si? — where are you from? (to a friend)',
      },
      {
        type: 'listen',
        audio: 'Oprostite, gospodine, je li ovo vaša torba?',
        q: 'What does the speaker want to know?',
        options: [
          'Whether the bag belongs to the man',
          'Where the man is from',
          'Whether the man speaks English',
          'What time it is',
        ],
        correct: 0,
        explanation: 'Je li ovo vaša torba? — is this your bag? Polite: vaša, not tvoja.',
      },
      5,
      10,
      {
        type: 'tf',
        q: 'In a formal letter, many people write "Vam" and "Vas" with a capital V.',
        answer: true,
        hint: 'Think of the opening of a formal email in this lesson.',
        explanation:
          'True. The capital is a courtesy in writing — not a grammar rule, and not something you can hear in speech.',
      },
      {
        type: 'transform',
        q: 'Say it politely, to an older neighbor.',
        from: 'Je li ovo tvoj pas?',
        answer: 'Je li ovo vaš pas?',
        accept: ['Je li ovo Vaš pas?'],
        hint: 'Only the word for "your" changes.',
        explanation: 'Je li ovo vaš pas? — tvoj for a friend, vaš politely.',
      },
      {
        type: 'dictate',
        audio: 'Dobar dan, gospođo Kovač, kako ste?',
        answer: 'Dobar dan, gospođo Kovač, kako ste?',
        hint: 'Six words. Listen for the form of the title used when you speak TO a woman.',
        explanation:
          'Dobar dan, gospođo Kovač, kako ste? — the calling form of the title, and the polite verb.',
      },
    ],
  },

  // ── Finding your way ───────────────────────────────────────────────────────
  'directions-town': {
    text: {
      kind: 'dialogue',
      title: 'Gdje je kolodvor?',
      lines: [
        {
          who: 'Tom',
          hr: 'Oprostite, gdje je glavni kolodvor?',
          en: 'Excuse me, where is the main station?',
        },
        {
          who: 'Gospođa',
          hr: 'Kolodvor? Idite ravno do trga pa skrenite desno.',
          en: 'The station? Go straight on as far as the square, then turn right.',
        },
        { who: 'Tom', hr: 'Je li daleko?', en: 'Is it far?' },
        {
          who: 'Gospođa',
          hr: 'Nije. Deset minuta pješice. Kolodvor je preko puta pošte.',
          en: 'It is not. Ten minutes on foot. The station is across from the post office.',
        },
        { who: 'Tom', hr: 'A gdje se nalazi ljekarna?', en: 'And where is the pharmacy?' },
        {
          who: 'Gospođa',
          hr: 'Ljekarna je blizu, pored banke, na uglu.',
          en: 'The pharmacy is near, next to the bank, on the corner.',
        },
        { who: 'Tom', hr: 'Hvala vam! Mogu li ići tramvajem?', en: 'Thank you! Can I go by tram?' },
        {
          who: 'Gospođa',
          hr: 'Možete, ali nije daleko. Idite pješice!',
          en: 'You can, but it is not far. Go on foot!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how does Tom get to the station?',
          options: [
            'Straight on to the square, then right — ten minutes on foot',
            'Left at the bank, then straight on — by tram',
            'Straight on to the post office, then left',
            'By bus, because it is far',
          ],
          correct: 0,
          hint: 'She gives two instructions joined by "pa", then says how long it takes.',
          explanation: 'Idite ravno do trga pa skrenite desno — and it is deset minuta pješice.',
        },
        {
          q: 'The woman says "preko puta pošte" and "pored banke". The words are pošta and banka — why do they end in -e here?',
          options: [
            'Position words such as "preko puta" and "pored" take the genitive',
            'Because there are several post offices and banks',
            'Because the woman is speaking politely',
            'Because Tom is going there',
          ],
          correct: 0,
          hint: 'Think of "kod liječnika" and "bez soli": some small words always ask for the same case.',
          explanation:
            'Pored, blizu, ispred, iza and preko puta are followed by the genitive: pošta → pošte, banka → banke.',
        },
        {
          type: 'type',
          q: 'Now you. A stranger asks YOU about the pharmacy. It is near the school (škola): Ljekarna je blizu ____.',
          answer: 'škole',
          hint: 'A position word takes the genitive — do with škola what the woman does with banka.',
          explanation: 'Ljekarna je blizu škole. — blizu + genitive.',
        },
        {
          type: 'type',
          q: 'Your FRIEND is driving and asks the way. Tell him to turn right: ____ desno.',
          answer: 'Skreni',
          hint: 'The woman uses the polite form with Tom, a stranger. To a friend, the same word has no -te.',
          explanation: 'Skreni desno. — skrenite politely, skreni to a friend.',
        },
        {
          type: 'transform',
          q: 'Now a stranger is asking, not a friend. Make both instructions polite.',
          from: 'Idi ravno pa skreni lijevo.',
          answer: 'Idite ravno pa skrenite lijevo.',
          hint: 'Both verbs take the polite ending.',
          explanation: 'Idite ravno pa skrenite lijevo. — go straight on, then turn left.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'Match each place to its meaning.',
        pairs: [
          ['kolodvor', 'station'],
          ['muzej', 'museum'],
          ['bolnica', 'hospital'],
          ['crkva', 'church'],
          ['trg', 'square'],
        ],
        explanation: 'Five places you will ask for in any Croatian town.',
      },
      2,
      {
        type: 'sort',
        q: 'Does the phrase say WHERE something is, or HOW you travel?',
        groups: ['Where it is', 'How you travel'],
        items: [
          { hr: 'na uglu', group: 0 },
          { hr: 'tramvajem', group: 1 },
          { hr: 'preko puta pošte', group: 0 },
          { hr: 'autom', group: 1 },
          { hr: 'iza banke', group: 0 },
          { hr: 'pješice', group: 1 },
        ],
        explanation:
          'Na uglu, preko puta pošte and iza banke give a position. Tramvajem and autom are the means of travel, in the instrumental; pješice means "on foot".',
      },
      5,
      {
        type: 'transform',
        q: 'A stranger is asking, not a friend. Make both instructions polite.',
        from: 'Prijeđi ulicu i idi lijevo.',
        answer: 'Prijeđite ulicu i idite lijevo.',
        hint: 'Both verbs take the polite ending.',
        explanation: 'Prijeđite ulicu i idite lijevo. — cross the street and go left.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Go straight on, then turn right."',
        words: ['Idite', 'ravno', 'pa', 'skrenite', 'desno.'],
        explanation: 'Idite ravno pa skrenite desno. Pa means "and then".',
      },
      9,
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Bolnica', 'je', 'preko', 'puta', 'park', 'u', 'centru.'],
        wrong: 4,
        answer: 'parka',
        hint: 'Which case follows "preko puta"?',
        explanation: 'Bolnica je preko puta parka u centru. — preko puta + genitive: park → parka.',
      },
      6,
      {
        type: 'listen',
        audio: 'Kolodvor je daleko, idite autobusom.',
        q: 'What does the speaker advise?',
        options: ['Take the bus', 'Go on foot', 'Take the tram', 'Turn left'],
        correct: 0,
        explanation: 'Kolodvor je daleko, idite autobusom. — the station is far, go by bus.',
      },
      11,
      8,
      {
        type: 'tf',
        q: '"Idem s tramvajem" is the standard way to say "I go by tram".',
        answer: false,
        hint: 'Does the means of travel need a preposition in Croatian?',
        explanation:
          'False. The means of travel is the bare instrumental, with no preposition: Idem tramvajem.',
      },
      {
        type: 'listen',
        audio: 'Koji tramvaj ide do glavnog trga?',
        q: 'What does the speaker want to know?',
        options: [
          'Which tram goes to the main square',
          'Where the tram stop is',
          'How far the square is',
          'When the tram leaves',
        ],
        correct: 0,
        explanation: 'Koji tramvaj ide do glavnog trga? — which tram goes to the main square?',
      },
      {
        type: 'dictate',
        audio: 'Oprostite, gdje je tržnica?',
        answer: 'Oprostite, gdje je tržnica?',
        hint: 'Four words. The last one is the place where you buy fruit and vegetables.',
        explanation: 'Oprostite, gdje je tržnica? — excuse me, where is the market?',
      },
    ],
  },

  // ── A trip around Croatia ──────────────────────────────────────────────────
  'travel-croatia': {
    text: {
      kind: 'dialogue',
      title: 'Naše putovanje',
      lines: [
        {
          who: 'Ana',
          hr: 'Tome, gdje ste bili na odmoru?',
          en: 'Tom, where were you on vacation?',
        },
        {
          who: 'Tom',
          hr: 'Putovali smo po Hrvatskoj. Prvo smo bili u Zagrebu, a onda smo išli autobusom na Plitvice.',
          en: 'We traveled around Croatia. First we were in Zagreb, and then we went to Plitvice by bus.',
        },
        { who: 'Ana', hr: 'Jeste li bili i na moru?', en: 'Were you at the seaside too?' },
        {
          who: 'Tom',
          hr: 'Jesmo. Iz Zadra smo išli u Split, a iz Splita trajektom na Brač.',
          en: 'We were. From Zadar we went to Split, and from Split by ferry to Brač.',
        },
        { who: 'Ana', hr: 'Kako je bilo na Braču?', en: 'What was it like on Brač?' },
        {
          who: 'Tom',
          hr: 'Bilo je vruće i sunčano. Svaki dan smo plivali.',
          en: 'It was hot and sunny. We swam every day.',
        },
        {
          who: 'Ana',
          hr: 'A Dubrovnik? Jeste li vidjeli zidine?',
          en: 'And Dubrovnik? Did you see the city walls?',
        },
        {
          who: 'Tom',
          hr: 'Nismo. Sljedeće godine ćemo ići u Dubrovnik — avionom!',
          en: 'We did not. Next year we will go to Dubrovnik — by plane!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which places did Tom visit, and which one is still to come?',
          options: [
            'Zagreb, Plitvice, Zadar, Split and Brač — Dubrovnik is for next year',
            'Zagreb, Split and Dubrovnik — Brač is for next year',
            'Only Zagreb and Plitvice — the seaside is for next year',
            'Dubrovnik and Brač — Zagreb is for next year',
          ],
          correct: 0,
          hint: 'Ana\'s last question gets the answer "Nismo".',
          explanation:
            'They were in Zagreb, at Plitvice, in Zadar and Split, and on Brač. They did not see Dubrovnik: Sljedeće godine ćemo ići u Dubrovnik.',
        },
        {
          q: 'Tom says "u Split" but "na Brač". Why is it "na" with Brač?',
          options: [
            'Brač is an island, and islands take na',
            'Brač is further away than Split',
            'They went there by ferry, and ferries take na',
            'Because Brač is a short word',
          ],
          correct: 0,
          hint: 'What kind of place do you reach by ferry?',
          explanation:
            'Cities and regions take u: u Split, u Zagrebu. Islands take na: na Brač, na Braču.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Gdje ste bili?" You were on the island of Krk: Bili smo na ____.',
          answer: 'Krku',
          hint: 'Being somewhere takes the locative — the same ending as in "na Braču".',
          explanation: 'Bili smo na Krku. — an island: na, and the locative for where you were.',
        },
        {
          type: 'type',
          q: 'You went from Split to Zagreb by train (vlak): Išli smo ____.',
          answer: 'vlakom',
          hint: 'The means of travel has no preposition, only an ending — as in "autobusom" and "trajektom".',
          explanation: 'Išli smo vlakom. — the bare instrumental says how you traveled.',
        },
        {
          type: 'transform',
          q: 'That was last year. Now say it about NEXT year: put it in the future, starting with the verb.',
          from: 'Išli smo u Dubrovnik.',
          answer: 'Ići ćemo u Dubrovnik.',
          accept: ['Mi ćemo ići u Dubrovnik.', 'Sljedeće godine ćemo ići u Dubrovnik.'],
          hint: 'The future is the small word Tom uses in his last line, plus the dictionary form. A -ći verb stays whole in front of it.',
          explanation:
            'Ići ćemo u Dubrovnik. — ćemo + the infinitive; first in the sentence, ići stays whole.',
        },
      ],
    },
    mix: [
      0,
      5,
      {
        type: 'sort',
        q: 'You are going there. Is it "Idemo u …" or "Idemo na …"?',
        groups: ['Idemo u …', 'Idemo na …'],
        items: [
          { hr: 'Split', group: 0 },
          { hr: 'Hvar', group: 1 },
          { hr: 'Zagreb', group: 0 },
          { hr: 'Plitvice', group: 1 },
          { hr: 'Pulu', group: 0 },
          { hr: 'Brač', group: 1 },
          { hr: 'Istru', group: 0 },
        ],
        explanation:
          'Cities and regions take u: u Split, u Zagreb, u Pulu, u Istru. Islands take na — na Hvar, na Brač — and so does Plitvice.',
      },
      7,
      {
        type: 'match',
        q: 'Match each place to what it is known for.',
        pairs: [
          ['Split', "Diocletian's Palace"],
          ['Zadar', 'the sea organ'],
          ['Dubrovnik', 'the city walls'],
          ['Pula', 'the Roman Arena'],
          ['Plitvice', 'lakes and waterfalls'],
        ],
        explanation: 'Five stops on the route — and five reasons to go there.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "We went to Hvar by ferry."',
        words: ['Trajektom', 'smo', 'išli', 'na', 'Hvar.'],
        explanation: 'Trajektom smo išli na Hvar. The little word smo stands in second place.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Na', 'Hvar', 'je', 'bilo', 'vruće.'],
        wrong: 1,
        answer: 'Hvaru',
        hint: 'The sentence says where it was hot, not where someone is going.',
        explanation:
          'Na Hvaru je bilo vruće. — being somewhere takes the locative: na Hvaru. Na Hvar is for going there.',
      },
      {
        type: 'transform',
        q: 'You are back home. Say where you WERE: begin with "Bili smo".',
        from: 'Idemo u Zadar.',
        answer: 'Bili smo u Zadru.',
        hint: 'Being somewhere takes the locative — and this town loses a letter before the ending.',
        explanation: 'Bili smo u Zadru. — Zadar has a fleeting a: u Zadru.',
      },
      {
        type: 'listen',
        audio: 'U Splitu je bilo toplo i sunčano.',
        q: 'What was the weather like in Split?',
        options: ['Warm and sunny', 'Cold and rainy', 'Hot and windy', 'Cloudy'],
        correct: 0,
        explanation: 'U Splitu je bilo toplo i sunčano. — it was warm and sunny in Split.',
      },
      10,
      2,
      9,
      {
        type: 'listen',
        audio: 'U Puli ćemo vidjeti Arenu.',
        q: 'Is this about the past or the future?',
        options: [
          'The future — they will see the Arena',
          'The past — they saw the Arena',
          'The present — they are in the Arena now',
        ],
        correct: 0,
        explanation:
          'U Puli ćemo vidjeti Arenu. — the small future word plus the infinitive: we will see the Arena.',
      },
      11,
      {
        type: 'tf',
        q: 'Hvar je otok, a Split je grad na obali.',
        answer: true,
        hint: 'Otok is an island; obala is the coast.',
        explanation: 'True — Hvar is an island, and Split is a city on the coast.',
      },
      {
        type: 'dictate',
        audio: 'Putovali smo po Hrvatskoj.',
        answer: 'Putovali smo po Hrvatskoj.',
        hint: 'Four words: "We traveled around Croatia."',
        explanation: 'Putovali smo po Hrvatskoj. — we traveled around Croatia.',
      },
    ],
  },
};
