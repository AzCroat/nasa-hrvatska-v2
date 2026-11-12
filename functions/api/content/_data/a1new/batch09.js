// functions/api/content/_data/a1new/batch09.js
//
// New A1 lessons, batch 09 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// numbers-genitive (84) · dates-years (86) · boljeti (88) · i-nouns-intro (89) ·
// pluralia-tantum (90) · sports-free-time (91). Each lesson uses only grammar taught at
// or before its own position; the drill for each is src/data/drills/a1/<id>Drill.ts.

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'numbers-genitive',
    masterOrder: 84,
    prerequisites: ['quantity'],
    objectives: [
      'Count things with two to four: dva stola, dvije knjige, tri kuće',
      'Count with five and up: pet stolova, deset knjiga, dvadeset eura',
      'Read a compound number by its last word: dvadeset i jedan dan, trideset dvije sobe',
    ],
  },
  {
    id: 'dates-years',
    masterOrder: 86,
    prerequisites: ['ordinals-dates', 'numbers-genitive'],
    objectives: [
      'Read a year aloud as an ordinal: dvije tisuće dvadeset šesta',
      'Say when something happened: Rođena sam trećeg svibnja tisuću devetsto devedeset četvrte',
      'Ask and answer Koje godine? and Kad si rođen?',
    ],
  },
  {
    id: 'boljeti',
    masterOrder: 88,
    prerequisites: ['body-health'],
    objectives: [
      'Say what hurts for every person: Boli me glava, Bole ih oči',
      'Choose boli or bole by counting the body part',
      'Ask Što te boli?, say Ništa me ne boli, and say what hurt yesterday',
    ],
  },
  {
    id: 'i-nouns-intro',
    masterOrder: 89,
    prerequisites: ['genitive-intro', 'locative-intro'],
    objectives: [
      'Recognise feminine nouns that end in a consonant: stvar, noć, ljubav, radost',
      'Use the bare noun as subject and object, and -i after bez, od, o and u',
      'Let the describing word show the case: laku noć, o toj stvari',
    ],
  },
  {
    id: 'pluralia-tantum',
    masterOrder: 90,
    prerequisites: ['clothes-appearance', 'body-health'],
    objectives: [
      'Recognise nouns that exist only in the plural: hlače, novine, vrata, naočale, škare, leđa',
      'Make the verb and the describing words plural: Moje hlače su nove, Vrata su otvorena',
      'Say "one" and count pairs: jedne hlače, dva para traperica',
    ],
  },
  {
    id: 'sports-free-time',
    masterOrder: 91,
    prerequisites: ['likes-preferences', 'instrumental-intro'],
    objectives: [
      'Name sports and say which you play: Igram nogomet, Igramo košarku',
      'Say what you do regularly with baviti se: Bavim se plivanjem',
      'Say what you like doing and how often: Volim trčati, dva puta tjedno',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // 84 · Counting Things — the noun follows the number
  // ─────────────────────────────────────────────────────────
  {
    id: 'numbers-genitive',
    title: 'Counting Things',
    subtitle: 'dva stola, dvije knjige, pet stolova — the noun follows the number',
    icon: '🔢',
    level: 'A1',
    duration: '~7 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'The Noun Listens to the Number',
        body: 'You can count, and you know that words of quantity — puno, malo, nekoliko — are followed by the genitive. Numbers work the same way, with one twist: the ending of the noun depends on WHICH number comes before it. There are only three groups to learn: one, two to four, and five and up.',
        icon: '🔢',
      },
      {
        type: 'rule',
        title: 'Group One: jedan',
        body: 'Jedan (one) behaves like a describing word: it agrees with the noun, and the noun stays in its ordinary subject form. jedan stol (one table), jedna knjiga (one book), jedno selo (one village). Nothing new here — you have been saying jedan dan and jedna kava since your first lessons.',
        highlight: 'jedan stol · jedna knjiga · jedno selo',
      },
      {
        type: 'rule',
        title: 'Group Two: dva, tri, četiri',
        body: 'After two, three and four the noun takes the GENITIVE SINGULAR ending — the -a and -e you learned in the genitive lesson. Masculine and neuter: dva stola, tri brata, četiri sela. Feminine: dvije knjige, tri kuće, četiri sestre. Two has two forms: dva for masculine and neuter nouns, dvije for feminine ones. Tri and četiri never change.',
        highlight: 'dva stola · dvije knjige',
      },
      {
        type: 'rule',
        title: 'Group Three: pet and Up',
        body: 'From five upwards the noun takes the GENITIVE PLURAL — exactly the form you used after puno and nekoliko. pet stolova, šest gradova, sedam knjiga, osam kuća, deset sela, dvadeset eura. The numbers eleven to nineteen (jedanaest, dvanaest … devetnaest) belong here too: they end in -naest, not in a small number, so dvanaest knjiga, petnaest dana.',
        highlight: 'pet stolova · sedam knjiga',
      },
      {
        type: 'table',
        title: 'Three Nouns, Three Groups',
        headers: ['Number', 'stol (m)', 'knjiga (f)', 'selo (n)'],
        rows: [
          ['1', 'jedan stol', 'jedna knjiga', 'jedno selo'],
          ['2', 'dva stola', 'dvije knjige', 'dva sela'],
          ['3', 'tri stola', 'tri knjige', 'tri sela'],
          ['4', 'četiri stola', 'četiri knjige', 'četiri sela'],
          ['5', 'pet stolova', 'pet knjiga', 'pet sela'],
          ['12', 'dvanaest stolova', 'dvanaest knjiga', 'dvanaest sela'],
        ],
      },
      {
        type: 'rule',
        title: 'The Last Word Decides',
        body: 'In a longer number, only the LAST word matters. 21 ends in one, so it counts like one: dvadeset i jedan dan, dvadeset i jedna godina. 22 ends in two: dvadeset dva stola, dvadeset dvije knjige. 25 ends in five: dvadeset pet stolova. Round numbers — deset, dvadeset, sto — count like five: dvadeset eura, sto godina.',
        highlight: 'dvadeset i jedan dan · dvadeset dva stola · dvadeset pet stolova',
      },
      {
        type: 'rule',
        title: 'Words You Will Count Every Day',
        body: 'A few everyday nouns are worth learning as ready pairs. dan (day): dva dana, pet dana. sat (hour): dva sata, pet sati. godina (year): dvije godine, pet godina. euro: dva eura, pet eura. čovjek (person): dva čovjeka, but pet ljudi. And the verb: with two to four it is plural — Dva studenta uče. With five and up the group counts as one, so the verb is usually singular — Pet studenata uči.',
        highlight: 'pet sati · pet ljudi',
      },
      {
        type: 'example',
        title: 'Two, Three, Four',
        items: [
          {
            hr: 'Imam dva brata i dvije sestre.',
            en: 'I have two brothers and two sisters.',
            note: 'brat → brata; sestra is feminine, so dvije sestre',
          },
          {
            hr: 'Kava košta dva eura.',
            en: 'A coffee costs two euros.',
            note: 'euro → eura after dva',
          },
          {
            hr: 'Ostajem u Splitu četiri dana.',
            en: 'I am staying in Split for four days.',
            note: 'dan → dana',
          },
          {
            hr: 'Naš hotel ima trideset dvije sobe.',
            en: 'Our hotel has thirty-two rooms.',
            note: 'the last word is dvije, so sobe',
          },
          {
            hr: 'Tri prijatelja čekaju ispred kina.',
            en: 'Three friends are waiting in front of the cinema.',
            note: 'two to four: the verb is plural',
          },
          {
            hr: 'Vlak stiže za dva sata.',
            en: 'The train arrives in two hours.',
            note: 'sat → sata after dva',
          },
        ],
      },
      {
        type: 'example',
        title: 'Five and Up',
        items: [
          {
            hr: 'U razredu je dvanaest studenata.',
            en: 'There are twelve students in the class.',
            note: 'eleven to nineteen count like five',
          },
          {
            hr: 'Ručak košta dvadeset pet eura.',
            en: 'Lunch costs twenty-five euros.',
            note: 'the last word is pet: genitive plural',
          },
          {
            hr: 'Na stolu su tri knjige i pet bilježnica.',
            en: 'On the table there are three books and five notebooks.',
            note: 'two groups in one sentence',
          },
          {
            hr: 'Pet prijatelja čeka ispred kina.',
            en: 'Five friends are waiting in front of the cinema.',
            note: 'five and up: the group counts as one',
          },
          {
            hr: 'Moja sestra ima dvadeset i jednu godinu.',
            en: 'My sister is twenty-one.',
            note: 'the last word is jedna, here in the accusative after ima',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "two books"? ("knjiga" is feminine.)',
        options: ['dva knjige', 'dvije knjige', 'dvije knjiga', 'dva knjiga'],
        correct: 1,
        explanation:
          'A feminine noun takes dvije, and after two the noun takes the genitive singular: dvije knjige. "Knjiga" after a number is the genitive plural, which belongs to five and up.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is correct for "six cities"?',
        options: ['šest grada', 'šest gradovi', 'šest gradova', 'šest grad'],
        correct: 2,
        explanation:
          'Six belongs to the five-and-up group, so the noun takes the genitive plural: šest gradova. "Grada" is for two to four, "gradovi" is the plain plural.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, dva with a feminine noun: "dva knjige" — feminine nouns take dvije, so dvije knjige. Second, the two-to-four ending after five: "pet stola" — five and up take the genitive plural, pet stolova. Third, treating twelve like two because it starts with dva: "dvanaest stola" — every -naest number counts like five, dvanaest stolova.',
        highlight: 'dvije knjige',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Imam ___ i jednu sestru." (two brothers)',
            options: ['dva brat', 'dva brata', 'dvije brata', 'dva braća'],
            correct: 1,
            explanation:
              'Brat is masculine, so two is dva, and after two the noun takes the genitive singular: dva brata.',
          },
          {
            q: 'Which phrase means "three houses"?',
            options: ['tri kuća', 'tri kuću', 'tri kuće', 'tri kućama'],
            correct: 2,
            explanation:
              'After three the noun takes the genitive singular, and feminine -a becomes -e: tri kuće. "Kuća" after a number is the genitive plural, for five and up.',
          },
          {
            q: 'Complete: "Kupujem sedam ___." (apples)',
            options: ['jabuke', 'jabuka', 'jabuku', 'jabukom'],
            correct: 1,
            explanation:
              'Seven is five or more, so the genitive plural: sedam jabuka. "Jabuke" is the two-to-four form.',
          },
          {
            q: 'Complete: "Ostajemo ___ dana." (twenty-two)',
            options: ['dvadeset dva', 'dvadeset dvije', 'dvadeset dvoje', 'dvadeset druga'],
            correct: 0,
            explanation:
              'The last word decides, and dan is masculine, so two is dva: dvadeset dva dana. Dvije is only for feminine nouns.',
          },
          {
            q: 'Why is it "dvanaest stolova" and not "dvanaest stola"?',
            options: [
              'stol is feminine',
              'dvanaest takes the subject form',
              'dvanaest ends in a small number, like dva',
              'eleven to nineteen count like five: genitive plural',
            ],
            correct: 3,
            explanation:
              'Every -naest number belongs to the five-and-up group, so the genitive plural: dvanaest stolova.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Pet studenata uči hrvatski.',
              'Pet studenta uče hrvatski.',
              'Pet studenti uče hrvatski.',
              'Pet student uči hrvatski.',
            ],
            correct: 0,
            explanation:
              'Five and up take the genitive plural, studenata, and the group counts as one, so the verb is singular: uči.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Counting — Key Takeaways',
        points: [
          'jedan, jedna, jedno agree with the noun, which stays in the subject form',
          'dva / dvije, tri, četiri + genitive singular: dva stola, dvije knjige',
          'pet and up, and every -naest number + genitive plural: pet stolova, dvanaest knjiga',
          'In a long number only the last word decides: dvadeset dvije sobe, dvadeset pet eura',
          'Ready pairs: dva sata / pet sati, dvije godine / pet godina, dva eura / pet eura',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 86 · Years and Full Dates
  // ─────────────────────────────────────────────────────────
  {
    id: 'dates-years',
    title: 'Years and Full Dates',
    subtitle: 'Rođen sam… · Koje godine? · the dates Croatia remembers',
    icon: '📅',
    level: 'A1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'A Date You Can Say Out Loud',
        body: 'You can already say the day and the month: prvi svibnja, petnaesti lipnja. This lesson adds the year — which in Croatian is not a plain number but an ordinal, "the two-thousand-twenty-sixth" — and puts all three together for birthdays and for the dates every Croatian knows.',
        icon: '📅',
      },
      {
        type: 'rule',
        title: 'A Year Is "the …th Year"',
        body: 'English reads 2026 as a plain number. Croatian reads it as an ordinal (a "first, second, third" number) that agrees with godina (year), which is feminine: 2026. = dvije tisuće dvadeset šesta (godina). As with every long ordinal, only the LAST word becomes an ordinal: dvije tisuće dvadeset stays as it is, and šest becomes šesta.',
        highlight: 'dvije tisuće dvadeset šesta',
      },
      {
        type: 'rule',
        title: 'Thousands and Hundreds',
        body: 'One thousand in a year is tisuću; two thousand is dvije tisuće, because tisuća is a feminine noun. The hundreds are one word each: osamsto (800), devetsto (900). So 1991. is tisuću devetsto devedeset prva, 1856. is tisuću osamsto pedeset šesta, and 2013. is dvije tisuće trinaesta.',
        highlight: 'tisuću devetsto devedeset prva',
      },
      {
        type: 'rule',
        title: 'The Dot Is the "th"',
        body: 'In writing, Croatian puts a full stop after a number read as an ordinal: 2026., 5. svibnja, 25. 6. 1991. There is no "th" — the dot does that job, and it stays even in the middle of a sentence: Rođen sam 1998. u Zadru.',
        highlight: '25. 6. 1991.',
      },
      {
        type: 'rule',
        title: 'When? Put the Year in the Genitive',
        body: 'To say WHEN something happened, the year goes into the genitive, just as the day did in the last lesson. The feminine ordinal changes -a to -e. Koje godine? (In which year?) — Dvije tisuće trinaeste. You can add the word itself: dvije tisuće trinaeste godine. You will also hear u with the locative: U kojoj godini? — U dvije tisuće trinaestoj. Both mean "in 2013".',
        highlight: 'Koje godine?',
      },
      {
        type: 'table',
        title: 'Saying the Year',
        headers: ['Year', 'What year? (subject form)', 'When? (genitive)'],
        rows: [
          ['1856.', 'tisuću osamsto pedeset šesta', 'tisuću osamsto pedeset šeste'],
          ['1991.', 'tisuću devetsto devedeset prva', 'tisuću devetsto devedeset prve'],
          ['2013.', 'dvije tisuće trinaesta', 'dvije tisuće trinaeste'],
          ['2020.', 'dvije tisuće dvadeseta', 'dvije tisuće dvadesete'],
          ['2023.', 'dvije tisuće dvadeset treća', 'dvije tisuće dvadeset treće'],
          ['2026.', 'dvije tisuće dvadeset šesta', 'dvije tisuće dvadeset šeste'],
        ],
      },
      {
        type: 'rule',
        title: 'The Whole Date',
        body: 'For WHEN something happened, all three go into the genitive: the day ordinal takes -og, the month its genitive, the year -e. Rođena sam dvadeset trećeg ožujka tisuću devetsto devedeset osme. (I was born on 23 March 1998.) To say what a date IS, the day stays in the subject form and the month and year are genitive: Danas je prvi svibnja dvije tisuće dvadeset šeste.',
        highlight: 'dvadeset trećeg ožujka tisuću devetsto devedeset osme',
      },
      {
        type: 'rule',
        title: 'Asking About Birthdays',
        body: 'Kad si rođen? (to a man) · Kad si rođena? (to a woman) · Kad ste rođeni? (polite). Koje si godine rođen? asks only for the year. Answer with Rođen sam (a man) or Rođena sam (a woman) — rođen is a describing word, so it agrees with the speaker, just like the past tense does.',
        highlight: 'Rođen sam / Rođena sam',
      },
      {
        type: 'example',
        title: 'Dates Croatia Remembers',
        items: [
          {
            hr: 'Nikola Tesla je rođen desetog srpnja tisuću osamsto pedeset šeste u Smiljanu.',
            en: 'Nikola Tesla was born on 10 July 1856 in Smiljan.',
            note: 'day -og, srpanj → srpnja, year -e',
          },
          {
            hr: 'Hrvatski sabor proglasio je neovisnost dvadeset petog lipnja tisuću devetsto devedeset prve.',
            en: 'The Croatian Parliament declared independence on 25 June 1991.',
            note: 'a full date of an event: all genitive',
          },
          {
            hr: 'Hrvatska je ušla u Europsku uniju prvog srpnja dvije tisuće trinaeste.',
            en: 'Croatia joined the European Union on 1 July 2013.',
          },
          {
            hr: 'Hrvatska je uvela euro prvog siječnja dvije tisuće dvadeset treće.',
            en: 'Croatia introduced the euro on 1 January 2023.',
          },
          {
            hr: 'U Zagrebu je bio jak potres dvadeset drugog ožujka dvije tisuće dvadesete.',
            en: 'There was a strong earthquake in Zagreb on 22 March 2020.',
          },
          {
            hr: 'Hrvatska je igrala u finalu Svjetskog prvenstva u nogometu dvije tisuće osamnaeste.',
            en: 'Croatia played in the final of the football World Cup in 2018.',
            note: 'only the year: genitive -e',
          },
        ],
      },
      {
        type: 'example',
        title: 'Talking About Yourself',
        items: [
          {
            hr: 'Kad si rođena? — Rođena sam četrnaestog veljače tisuću devetsto osamdeset devete.',
            en: 'When were you born? — I was born on 14 February 1989.',
          },
          {
            hr: 'Koje godine si došao u Hrvatsku? — Dvije tisuće dvadeset prve.',
            en: 'In which year did you come to Croatia? — In 2021.',
          },
          {
            hr: 'Moja baka je rođena tisuću devetsto četrdeset osme.',
            en: 'My grandmother was born in 1948.',
          },
          {
            hr: 'U kojoj godini si završio školu? — U dvije tisuće desetoj.',
            en: 'In which year did you finish school? — In 2010.',
            note: 'desetoj: u + locative, feminine -oj (agreeing with godini)',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you read "2026." when saying what year it is?',
        options: [
          'dvije tisuće dvadeset šest',
          'dvije tisuće dvadeset šesta',
          'dvije tisuće dvadeset šeste',
          'dva tisuće dvadeset šesti',
        ],
        correct: 1,
        explanation:
          'A year is a feminine ordinal, and only the last word becomes one: dvije tisuće dvadeset šesta. "Šeste" is the genitive, for WHEN something happened.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Rođen sam tisuću devetsto devedeset ___." (in 1995)',
        options: ['peta', 'pet', 'pete', 'petog'],
        correct: 2,
        explanation:
          'When something happened, the year goes into the genitive, and the feminine ordinal takes -e: devedeset pete. "Peta" says what year it is; "petog" is the masculine genitive used for the day.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, reading the year as a plain number: "dvije tisuće dvadeset šest" — a year is an ordinal, dvije tisuće dvadeset šesta. Second, forgetting the genitive for "when": "Rođena sam tisuću devetsto devedeset osma" — the year of an event takes -e, devedeset osme. Third, writing "th" or leaving out the dot: 25th June is written 25. lipnja.',
        highlight: 'dvije tisuće dvadeset šesta',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Hrvatska je ušla u Europsku uniju dvije tisuće ___." (2013)',
            options: ['trinaest', 'trinaesta', 'trinaeste', 'trinaestog'],
            correct: 2,
            explanation:
              'When something happened, the year is a feminine ordinal in the genitive: dvije tisuće trinaeste.',
          },
          {
            q: 'Which reading of 1856. says "in 1856"?',
            options: [
              'tisuću osamsto pedeset šeste',
              'tisuću osamsto pedeset šest',
              'tisuću osamsto pedeset šesta',
              'tisuću osamsto pedeset šestog',
            ],
            correct: 0,
            explanation:
              '"In" a year is the genitive: the last word is a feminine ordinal ending in -e, šeste.',
          },
          {
            q: 'What does "Koje godine si rođen?" ask?',
            options: [
              'How old are you?',
              'In which year were you born?',
              'What is the date today?',
              'Which month were you born in?',
            ],
            correct: 1,
            explanation: 'Koje godine? asks in which year; rođen means born.',
          },
          {
            q: 'How is "25 June 1991" written in Croatian?',
            options: [
              '25 lipanj 1991.',
              '25th lipanj 1991',
              'lipnja 25., 1991.',
              '25. lipnja 1991.',
            ],
            correct: 3,
            explanation:
              'The dot marks the ordinal, the month follows the day in the genitive, and the year also takes a dot: 25. lipnja 1991.',
          },
          {
            q: 'A woman says she was born in 1990. Which sentence is correct?',
            options: [
              'Rođen sam tisuću devetsto devedesete.',
              'Rođena sam tisuću devetsto devedesete.',
              'Rođena sam tisuću devetsto devedeseta.',
              'Rođena sam tisuću devetsto devedeset.',
            ],
            correct: 1,
            explanation:
              'A woman says rođena, and the year of an event is a genitive ordinal: devedesete.',
          },
          {
            q: 'Complete: "Nikola Tesla je rođen ___ srpnja 1856." (on the 10th)',
            options: ['desetog', 'deseti', 'desete', 'deset'],
            correct: 0,
            explanation:
              'The day on which something happened takes the masculine genitive ordinal: desetog srpnja.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Years and Dates — Key Takeaways',
        points: [
          'A year is a feminine ordinal: 2026. = dvije tisuće dvadeset šesta',
          'Only the last word becomes an ordinal; 1000 is tisuću, 2000 is dvije tisuće',
          'A dot marks the ordinal in writing: 25. 6. 1991.',
          'When? — the genitive: Koje godine? Dvije tisuće trinaeste.',
          'A full date of an event: trećeg svibnja tisuću devetsto devedeset četvrte',
          'Rođen sam (man), Rođena sam (woman)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 88 · boljeti — What Hurts?
  // ─────────────────────────────────────────────────────────
  {
    id: 'boljeti',
    title: 'What Hurts? — boljeti',
    subtitle: 'Boli me glava · Bole me noge · Što te boli?',
    icon: '🤕',
    level: 'A1',
    duration: '~6 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'One Verb, the Whole Way Round',
        body: 'In the last lesson you learned to say Boli me glava. This lesson takes the verb boljeti (to hurt, to ache) all the way: every person, one sore thing or several, asking what hurts, saying nothing hurts, and saying what hurt yesterday.',
        icon: '🤕',
      },
      {
        type: 'rule',
        title: 'The Body Part Does the Hurting',
        body: 'In Croatian the body part is the SUBJECT — the one doing the verb — and the person is the OBJECT, in the short accusative form you know from Vidim te and Volim ga. Boli me glava is literally "the head hurts me". English agrees halfway: in "my head hurts" the head is the subject too. Croatian simply adds whom it hurts.',
        highlight: 'Boli me glava.',
      },
      {
        type: 'table',
        title: 'Who Is Hurting?',
        headers: ['Person', 'Short form', 'Example', 'English'],
        rows: [
          ['ja', 'me', 'Boli me glava.', 'I have a headache.'],
          ['ti', 'te', 'Boli li te glava?', 'Does your head hurt?'],
          ['on', 'ga', 'Boli ga zub.', 'He has toothache.'],
          ['ona', 'je', 'Boli je grlo.', 'She has a sore throat.'],
          ['mi', 'nas', 'Bole nas noge.', 'Our legs hurt.'],
          ['vi', 'vas', 'Bole li vas leđa?', 'Does your back hurt?'],
          ['oni / one', 'ih', 'Bole ih oči.', 'Their eyes hurt.'],
        ],
      },
      {
        type: 'rule',
        title: 'Boli or Bole? Count the Body Part',
        body: 'The verb agrees with the body part, not with you. One thing hurts: boli me noga, boli me zub, boli me uho. Several things hurt: bole me noge, bole me zubi, bole me uši. Leđa (back) only exists in the plural, so it always takes bole: Bole me leđa.',
        highlight: 'Bole me noge.',
      },
      {
        type: 'rule',
        title: "Someone Else's Pain",
        body: 'With a name or a noun instead of me or te, that person also goes into the accusative. Mariju boli glava. (Marija → Mariju.) A man is a living masculine noun, so his accusative ends in -a: Ivana bole leđa. Moju mamu boli koljeno. Tvoga brata boli zub.',
        highlight: 'Mariju boli glava.',
      },
      {
        type: 'rule',
        title: 'Asking, and Saying No',
        body: 'Što te boli? (What hurts?) Gdje vas boli? (Where does it hurt? — polite.) Boli li te još? (Does it still hurt?) For no, ne goes right before the verb, and the short pronoun still sits in second place: Ne boli me. Više me ne boli. (It does not hurt any more.) Ništa me ne boli. (Nothing hurts.)',
        highlight: 'Ništa me ne boli.',
      },
      {
        type: 'rule',
        title: 'Yesterday: the Past Agrees with the Body Part',
        body: 'The past of boljeti agrees with the body part, like any past: boljela (glava, feminine), bolio (zub, masculine), boljelo (grlo, neuter), boljele or boljeli (plural). Word order: with one thing, je comes AFTER the short pronoun — Jučer me je boljela glava. With several, su comes BEFORE it — Jučer su me boljele noge.',
        highlight: 'Jučer me je boljela glava.',
      },
      {
        type: 'example',
        title: 'In the Present',
        items: [
          {
            hr: 'Boli me glava, idem kući.',
            en: 'I have a headache, I am going home.',
          },
          {
            hr: 'Bole me zubi kad pijem hladnu vodu.',
            en: 'My teeth hurt when I drink cold water.',
            note: 'several teeth: bole',
          },
          {
            hr: 'Što te boli? — Boli me trbuh.',
            en: 'What hurts? — My stomach hurts.',
          },
          {
            hr: 'Mariju boli grlo, pa ne može pjevati.',
            en: 'Marija has a sore throat, so she cannot sing.',
            note: 'Marija → Mariju: the person is the object',
          },
          {
            hr: 'Ivana bole leđa od posla.',
            en: "Ivan's back hurts from work.",
            note: 'Ivan → Ivana; leđa is plural',
          },
          {
            hr: 'Boli li vas još noga? — Ne, više me ne boli.',
            en: 'Does your leg still hurt? — No, it does not hurt any more.',
          },
        ],
      },
      {
        type: 'example',
        title: 'Yesterday and Today',
        items: [
          {
            hr: 'Jučer me je boljela glava, a danas me ništa ne boli.',
            en: 'Yesterday I had a headache, and today nothing hurts.',
            note: 'glava is feminine: boljela',
          },
          {
            hr: 'Poslije utakmice su me boljele noge.',
            en: 'After the match my legs hurt.',
            note: 'several: su comes before me',
          },
          {
            hr: 'Djeda je cijeli dan bolio zub.',
            en: 'Grandad had toothache all day.',
            note: 'zub is masculine: bolio',
          },
          {
            hr: 'Boljelo me je uho, pa sam bila kod liječnika.',
            en: 'My ear hurt, so I went to the doctor.',
            note: 'uho is neuter: boljelo',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence says "My legs hurt"?',
        options: ['Boli me noge.', 'Bole me noge.', 'Bole mi noge.', 'Bolim noge.'],
        correct: 1,
        explanation:
          'Two legs hurt, so the verb is plural, bole, and the person is the accusative me: Bole me noge.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ boli glava." (Ana has a headache.)',
        options: ['Ana', 'Ani', 'Anu', 'Anom'],
        correct: 2,
        explanation:
          'The person who hurts is the object, in the accusative: Ana → Anu. The head is the subject.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the dative instead of the accusative: "Boli mi glava" is heard, but the standard is Boli me glava — boljeti takes me, te, ga, je. Second, a singular verb with a plural body part: "Boli me noge" — several legs hurt, so Bole me noge. Third, making yourself the subject: "Ja bolim glavu" — the body part does the hurting.',
        highlight: 'Bole me noge',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ me zubi." (My teeth hurt.)',
            options: ['Boli', 'Bole', 'Bolim', 'Boliš'],
            correct: 1,
            explanation: 'Zubi is plural, so the verb is plural: Bole me zubi.',
          },
          {
            q: 'Which is correct for "Does your back hurt?" (to a friend)',
            options: ['Boli li te leđa?', 'Bole li ti leđa?', 'Bole li te leđa?', 'Boliš li leđa?'],
            correct: 2,
            explanation:
              'Leđa is plural, so bole; a friend is ti, and boljeti takes the accusative te.',
          },
          {
            q: 'Complete: "___ boli uho." (Petar\'s ear hurts.)',
            options: ['Petar', 'Petru', 'Petra', 'Petrom'],
            correct: 2,
            explanation:
              'The person is the object in the accusative, and Petar is a living masculine noun: Petra. Petru is the dative.',
          },
          {
            q: 'How do you say "Nothing hurts"?',
            options: [
              'Ništa me ne boli.',
              'Ništa me boli.',
              'Ne ništa me boli.',
              'Ništa ne boli mi.',
            ],
            correct: 0,
            explanation:
              'Ništa still needs ne before the verb, and me sits in second place: Ništa me ne boli.',
          },
          {
            q: 'Complete: "Jučer me je ___ glava."',
            options: ['bolio', 'boljelo', 'boljela', 'boljeli'],
            correct: 2,
            explanation: 'The past agrees with the body part, and glava is feminine: boljela.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Jučer me su boljele noge.',
              'Jučer su me boljele noge.',
              'Jučer me je boljele noge.',
              'Jučer su mi boljela noge.',
            ],
            correct: 1,
            explanation:
              'Several legs: the auxiliary is su, which comes before the short pronoun, and the past is boljele.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'boljeti — Key Takeaways',
        points: [
          'The body part is the subject; the person is the object: Boli me glava',
          'me, te, ga, je, nas, vas, ih — the short accusative forms',
          'Count the body part: boli for one, bole for several (bole me leđa)',
          'Another person goes into the accusative: Mariju boli glava, Ivana bole leđa',
          'Što te boli? · Ništa me ne boli. · Više me ne boli.',
          'Past: Jučer me je boljela glava · Jučer su me boljele noge',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 89 · Feminine Nouns Without -a
  // ─────────────────────────────────────────────────────────
  {
    id: 'i-nouns-intro',
    title: 'Feminine Nouns Without -a',
    subtitle: 'stvar, noć, ljubav, radost — the -i group',
    icon: '🌙',
    level: 'A1',
    duration: '~6 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'The Group That Breaks the -a Rule',
        body: 'You learned early on that feminine nouns end in -a: kuća, sestra, knjiga. Most do. A smaller group are feminine and end in a consonant instead: stvar (thing), noć (night), ljubav (love), radost (joy), kost (bone), riječ (word), sol (salt), večer (evening). They are common words, and their endings are simpler than you might fear.',
        icon: '🌙',
      },
      {
        type: 'rule',
        title: 'How Do You Know It Is Feminine?',
        body: 'The noun itself will not tell you, so the words around it do: ta stvar, dobra noć, velika ljubav, moja riječ. Learn each of these nouns together with a word that shows its gender. One useful shortcut: every noun ending in -ost is feminine — radost, mladost (youth), starost (old age).',
        highlight: 'ta stvar · dobra noć',
      },
      {
        type: 'rule',
        title: 'One Ending Does Most of the Work',
        body: 'The subject form and the object form (the accusative) are both the bare noun: Ta stvar je nova. Volim tu stvar. The genitive and the locative simply add -i: bez soli (genitive), od radosti (genitive), o ljubavi (locative), u noći (locative). Compare kuća, which changes to kuću, kuće, kući — this group only ever adds one letter.',
        highlight: 'bez soli · o ljubavi',
      },
      {
        type: 'table',
        title: 'The Endings',
        headers: ['Case', 'stvar', 'noć', 'radost', 'In a phrase'],
        rows: [
          ['Subject (nominative)', 'stvar', 'noć', 'radost', 'Ta stvar je skupa.'],
          ['Object (accusative)', 'stvar', 'noć', 'radost', 'Laku noć!'],
          ['Genitive', 'stvari', 'noći', 'radosti', 'plakati od radosti'],
          ['Locative', 'stvari', 'noći', 'radosti', 'o toj stvari'],
        ],
      },
      {
        type: 'rule',
        title: 'The Describing Words Do the Changing',
        body: 'Because the noun barely moves, the describing word shows the case — with the feminine endings you already know. Subject: dobra noć, ta stvar. Object: Laku noć! Kupujem tu stvar. Genitive: bez te stvari. Locative: u toj noći, o mojoj ljubavi. So in laku noć the -u on laku is the accusative, and noć does not change at all.',
        highlight: 'Laku noć!',
      },
      {
        type: 'rule',
        title: 'Two More to Recognise',
        body: "The plural also ends in -i: stvari (things), noći (nights), riječi (words) — Imam puno stvari. And a letter often ends S ljubavlju, Ana (With love, Ana): -ju is one of this group's instrumental endings. For now just recognise it; the subject, object, genitive and locative are what to practise.",
        highlight: 'S ljubavlju',
      },
      {
        type: 'example',
        title: 'Every Day',
        items: [
          {
            hr: 'Laku noć, mama!',
            en: 'Good night, Mum!',
            note: 'laka → laku: only the describing word changes',
          },
          { hr: 'Dobra večer!', en: 'Good evening!', note: 'večer is feminine too' },
          { hr: 'Ne znam tu riječ.', en: 'I do not know that word.', note: 'object: tu riječ' },
          { hr: 'Ta stvar je jako stara.', en: 'That thing is very old.' },
          {
            hr: 'Juha je bez soli.',
            en: 'The soup is without salt.',
            note: 'bez + genitive: soli',
          },
          {
            hr: 'Moja sestra je plakala od radosti.',
            en: 'My sister cried with joy.',
            note: 'od + genitive: radosti',
          },
        ],
      },
      {
        type: 'example',
        title: 'Love, Life and Night',
        items: [
          {
            hr: 'Pričamo o ljubavi i o mladosti.',
            en: 'We are talking about love and about youth.',
            note: 'o + locative: -i',
          },
          { hr: 'U noći je padala kiša.', en: 'It rained in the night.' },
          { hr: 'Pas jede veliku kost.', en: 'The dog is eating a big bone.' },
          { hr: 'Imam puno stvari u torbi.', en: 'I have a lot of things in my bag.' },
          {
            hr: 'Ova pjesma je o velikoj ljubavi.',
            en: 'This song is about a great love.',
            note: 'velikoj shows the locative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is correct for "good night"?',
        options: ['Laka noć!', 'Laku noć!', 'Lakog noći!', 'Laku noću!'],
        correct: 1,
        explanation:
          'Good night is wished in the accusative: the describing word takes -u and noć stays bare — Laku noć!',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Juha je bez ___." (salt)',
        options: ['sol', 'sole', 'soli', 'solu'],
        correct: 2,
        explanation: 'Bez takes the genitive, and this group adds -i: bez soli.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, treating them as masculine because they end in a consonant: "dobar noć" — they are feminine, so dobra noć, ta stvar. Second, giving them an -a noun\'s object ending: "Volim tu stvaru" — the object form is the bare noun, tu stvar. Third, a genitive in -e: "bez sole" — this group always takes -i, bez soli.',
        highlight: 'bez soli',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which is correct?',
            options: [
              'Ta stvar je nova.',
              'Taj stvar je nov.',
              'Ta stvar je nov.',
              'Taj stvar je nova.',
            ],
            correct: 0,
            explanation: 'Stvar is feminine, so both ta and nova are feminine.',
          },
          {
            q: 'Complete: "Ne razumijem ovu ___." (word)',
            options: ['riječi', 'riječu', 'riječ', 'riječa'],
            correct: 2,
            explanation: 'The object form of this group is the bare noun: ovu riječ.',
          },
          {
            q: 'Complete: "Pričamo o ___." (love)',
            options: ['ljubav', 'ljubava', 'ljubavu', 'ljubavi'],
            correct: 3,
            explanation: 'O takes the locative, and this group adds -i: o ljubavi.',
          },
          {
            q: 'How do you know that "noć" is feminine?',
            options: [
              'It ends in a consonant',
              'The words around it: dobra noć, laku noć',
              'All short words are feminine',
              'Every word ending in -ć is feminine',
            ],
            correct: 1,
            explanation:
              'The noun does not show it; the describing words do. Plenty of masculine nouns end in a consonant too.',
          },
          {
            q: 'Complete: "Plakala je od ___." (joy)',
            options: ['radost', 'radosti', 'radostu', 'radošću'],
            correct: 1,
            explanation: 'Od takes the genitive, and this group adds -i: od radosti.',
          },
          {
            q: 'Complete: "U ___ je padala kiša." (the night)',
            options: ['noć', 'noći', 'noću', 'noćom'],
            correct: 1,
            explanation: 'U with no movement takes the locative, and this group adds -i: u noći.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The -i Group — Key Takeaways',
        points: [
          'Some feminine nouns end in a consonant: stvar, noć, ljubav, riječ, sol, večer',
          'Every noun ending in -ost is feminine: radost, mladost',
          'Subject and object are the bare noun: Ta stvar je nova. Volim tu stvar.',
          'Genitive and locative add -i: bez soli, od radosti, o ljubavi, u noći',
          'The describing word shows the case: laku noć, o toj stvari',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 90 · Words That Are Only Plural
  // ─────────────────────────────────────────────────────────
  {
    id: 'pluralia-tantum',
    title: 'Words That Are Only Plural',
    subtitle: 'hlače, novine, vrata, naočale, škare, leđa',
    icon: '👖',
    level: 'A1',
    duration: '~6 min',
    color: '#0d9488',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'One Thing, Plural Word',
        body: 'English has a few nouns that exist only in the plural: trousers, scissors, glasses. There is no "a trouser". Croatian has the same idea — with a few surprises: a door (vrata), a newspaper (novine) and your back (leđa) are plural too. One object, plural word, and everything around it plural.',
        icon: '👖',
      },
      {
        type: 'rule',
        title: 'The Common Ones',
        body: 'Plural with the feminine -e: hlače (trousers), traperice (jeans), naočale (glasses), škare (scissors), novine (newspaper). Plural with the neuter -a: vrata (door), leđa (back), usta (mouth). Each names ONE thing — one pair of trousers, one door — but the word is plural.',
        highlight: 'hlače · novine · vrata · leđa',
      },
      {
        type: 'table',
        title: 'Plural-Only Nouns',
        headers: ['Word', 'English', 'Type', 'With a describing word'],
        rows: [
          ['hlače', 'trousers', 'feminine plural', 'nove hlače'],
          ['traperice', 'jeans', 'feminine plural', 'plave traperice'],
          ['naočale', 'glasses', 'feminine plural', 'moje naočale'],
          ['škare', 'scissors', 'feminine plural', 'oštre škare'],
          ['novine', 'newspaper', 'feminine plural', 'današnje novine'],
          ['vrata', 'door', 'neuter plural', 'velika vrata'],
          ['leđa', 'back (of the body)', 'neuter plural', 'moja leđa'],
          ['usta', 'mouth', 'neuter plural', 'velika usta'],
        ],
      },
      {
        type: 'rule',
        title: 'Everything Agrees in the Plural',
        body: 'The verb is plural: Moje hlače su nove. Vrata su otvorena. Gdje su moje naočale? The describing words are plural too, with the endings you know: -e for the hlače group (moje nove hlače, ove novine), -a for the vrata group (ova velika vrata, moja leđa).',
        highlight: 'Moje hlače su nove.',
      },
      {
        type: 'rule',
        title: 'In the Past Too',
        body: 'The past tense is plural as well. Novine su bile na stolu. (The newspaper was on the table.) Vrata su bila zatvorena. (The door was closed.) English says "was"; Croatian says su bile for the hlače group and su bila for the vrata group.',
        highlight: 'Novine su bile na stolu.',
      },
      {
        type: 'rule',
        title: 'As an Object, and in the Genitive',
        body: 'As an object (the accusative) these words do not change: Nosim crne hlače. Tražim naočale. Otvaram vrata. In the genitive the -e words drop their -e: bez naočala (without glasses), nema novina (there is no newspaper), par hlača (a pair of trousers). Vrata, leđa and usta stay the same.',
        highlight: 'bez naočala',
      },
      {
        type: 'rule',
        title: 'One, and More Than One',
        body: 'To say "one", jedan takes its plural form: jedne hlače (one pair of trousers), jedna vrata (one door), jedne novine (one newspaper). For clothes, count pairs — par: dva para hlača, tri para traperica. The pairs follow the counting rule you know (dva para), and the clothes go into the genitive plural.',
        highlight: 'jedne hlače · dva para hlača',
      },
      {
        type: 'example',
        title: 'Plural Everywhere',
        items: [
          { hr: 'Moje hlače su nove.', en: 'My trousers are new.' },
          { hr: 'Gdje su moje naočale?', en: 'Where are my glasses?' },
          { hr: 'Vrata su otvorena.', en: 'The door is open.', note: 'neuter plural: -a' },
          {
            hr: 'Ove novine su jučerašnje.',
            en: "This newspaper is yesterday's.",
            note: 'one newspaper, plural word',
          },
          { hr: 'Poslije posla me uvijek bole leđa.', en: 'After work my back always hurts.' },
          {
            hr: 'Trebam škare, ali ne znam gdje su.',
            en: 'I need the scissors, but I do not know where they are.',
          },
        ],
      },
      {
        type: 'example',
        title: 'Counting, the Past and the Genitive',
        items: [
          {
            hr: 'Kupio sam jedne plave traperice.',
            en: 'I bought a pair of blue jeans.',
            note: 'jedne: the plural form of jedan',
          },
          {
            hr: 'Bez naočala ne vidim ništa.',
            en: 'Without glasses I cannot see anything.',
            note: 'bez + genitive: naočala',
          },
          { hr: 'Novine su bile na stolu.', en: 'The newspaper was on the table.' },
          {
            hr: 'U ormaru imam tri para hlača.',
            en: 'I have three pairs of trousers in the wardrobe.',
          },
          { hr: 'Zatvaram vrata jer je hladno.', en: 'I am closing the door because it is cold.' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence is correct?',
        options: [
          'Moje hlače je nova.',
          'Moja hlača je nova.',
          'Moje hlače su nove.',
          'Moje hlače su nova.',
        ],
        correct: 2,
        explanation:
          'Hlače is plural, so the verb is su and the describing words are feminine plural: Moje hlače su nove.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Vrata su ___." (open)',
        options: ['otvoren', 'otvorena', 'otvorene', 'otvoreno'],
        correct: 1,
        explanation: 'Vrata is a neuter plural, so the describing word ends in -a: otvorena.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, a singular verb: "Hlače je nova" — the word is plural, so Hlače su nove. Second, the feminine ending on a vrata word: "Vrata su otvorene" — vrata, leđa and usta are neuter, so -a: Vrata su otvorena. Third, a singular "one": "jedna hlača" — one pair is jedne hlače.',
        highlight: 'Hlače su nove.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Gdje ___ moje naočale?"',
            options: ['je', 'su', 'si', 'sam'],
            correct: 1,
            explanation: 'Naočale is plural, so the verb is plural: Gdje su moje naočale?',
          },
          {
            q: 'Which is correct?',
            options: [
              'Ova vrata su velika.',
              'Ovo vrata je veliko.',
              'Ove vrata su velike.',
              'Ova vrata je velika.',
            ],
            correct: 0,
            explanation: 'Vrata is a neuter plural: ova, su, velika.',
          },
          {
            q: 'Complete: "Ne vidim ništa bez ___." (glasses)',
            options: ['naočale', 'naočali', 'naočala', 'naočalama'],
            correct: 2,
            explanation: 'Bez takes the genitive, and the -e drops off: bez naočala.',
          },
          {
            q: 'How do you say "one pair of jeans"?',
            options: ['jedna traperica', 'jedan traperice', 'jedno traperice', 'jedne traperice'],
            correct: 3,
            explanation:
              'Jedan takes its plural form to match a plural-only word: jedne traperice.',
          },
          {
            q: 'Complete: "Novine ___ na stolu." (were)',
            options: ['je bila', 'su bile', 'su bila', 'je bilo'],
            correct: 1,
            explanation: 'Novine is a feminine plural: su bile.',
          },
          {
            q: 'Which of these words is used only in the plural?',
            options: ['knjiga', 'vrata', 'stol', 'kuća'],
            correct: 1,
            explanation: 'Vrata (door) exists only in the plural: Vrata su otvorena.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Plural-Only Words — Key Takeaways',
        points: [
          'hlače, traperice, naočale, škare, novine take feminine plural agreement',
          'vrata, leđa, usta take neuter plural agreement',
          'The verb is always plural: Hlače su nove. Vrata su bila zatvorena.',
          'As an object they do not change; in the genitive -e drops: bez naočala',
          'One: jedne hlače, jedna vrata · pairs: dva para hlača',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 91 · Sport and Free Time
  // ─────────────────────────────────────────────────────────
  {
    id: 'sports-free-time',
    title: 'Sport and Free Time',
    subtitle: 'Igram nogomet · Bavim se plivanjem · Volim trčati',
    icon: '⚽',
    level: 'A1',
    duration: '~6 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'What Do You Do in Your Free Time?',
        body: 'U slobodno vrijeme… (In my free time…) Croatians love sport — doing it and watching it — so this is one of the first things a new friend will ask about. Three verbs carry almost every answer: igrati (to play), baviti se (to do, to go in for) and voljeti (to love, to like).',
        icon: '⚽',
      },
      {
        type: 'rule',
        title: 'igrati + an Object',
        body: 'Games and ball sports are played: igrati, with the game as an ordinary object in the accusative. Igram nogomet. Igraš li tenis? Igramo košarku i odbojku (košarka → košarku, odbojka → odbojku). Moj djed igra šah.',
        highlight: 'Igram nogomet.',
      },
      {
        type: 'rule',
        title: 'baviti se + the Instrumental',
        body: 'For a sport or activity you do regularly, Croatian says baviti se — roughly "to busy yourself with" — and "with" is the instrumental. Bavim se sportom. Bavim se plivanjem. Sestra se bavi tenisom. Do not forget se, which sits in second place. The question is Čime se baviš? (What do you do?) — and people ask it about your job, too.',
        highlight: 'Bavim se sportom.',
      },
      {
        type: 'table',
        title: 'Three Ways to Say It',
        headers: ['Sport', 'igrati', 'baviti se', 'voljeti'],
        rows: [
          ['football', 'Igram nogomet.', 'Bavim se nogometom.', 'Volim igrati nogomet.'],
          ['basketball', 'Igram košarku.', 'Bavim se košarkom.', 'Volim igrati košarku.'],
          ['tennis', 'Igram tenis.', 'Bavim se tenisom.', 'Volim igrati tenis.'],
          ['swimming', '—', 'Bavim se plivanjem.', 'Volim plivati.'],
          ['running', '—', 'Bavim se trčanjem.', 'Volim trčati.'],
          ['hiking', '—', 'Bavim se planinarenjem.', 'Volim planinariti.'],
        ],
      },
      {
        type: 'rule',
        title: 'voljeti + a Second Verb',
        body: 'To say what you like doing, voljeti takes a second verb in the infinitive (the -ti form). Volim plivati. Volimo trčati u parku. Ne volim skijati. Only the first verb changes for the person; the second always stays in the -ti form.',
        highlight: 'Volim plivati.',
      },
      {
        type: 'rule',
        title: 'How Often, Where, and for Whom',
        body: 'How often: svaki dan (every day), vikendom (at weekends), subotom (on Saturdays), dva puta tjedno (twice a week). Going to sport: ići na + accusative — Idem na trening. Idemo na utakmicu. Idem na bazen. And the team you support: navijati za — Navijam za Hajduk. Navijaš li za Dinamo?',
        highlight: 'dva puta tjedno',
      },
      {
        type: 'example',
        title: 'Doing Sport',
        items: [
          {
            hr: 'U slobodno vrijeme igram nogomet s bratom.',
            en: 'In my free time I play football with my brother.',
          },
          {
            hr: 'Moja sestra se bavi plivanjem.',
            en: 'My sister swims (as her sport).',
            note: 'baviti se + instrumental',
          },
          {
            hr: 'Subotom igramo košarku u parku.',
            en: 'On Saturdays we play basketball in the park.',
          },
          { hr: 'Dva puta tjedno idem na trening.', en: 'I go to training twice a week.' },
          { hr: 'Moj djed igra šah svaki dan.', en: 'My grandad plays chess every day.' },
          {
            hr: 'Čime se baviš? — Bavim se tenisom.',
            en: 'What do you do? — I play tennis.',
          },
        ],
      },
      {
        type: 'example',
        title: 'Liking and Watching',
        items: [
          { hr: 'Ujutro volim trčati u parku.', en: 'In the morning I like running in the park.' },
          {
            hr: 'Ne volim skijati, ali volim planinariti.',
            en: 'I do not like skiing, but I like hiking.',
          },
          {
            hr: 'Navijam za Hajduk, a moj prijatelj za Dinamo.',
            en: 'I support Hajduk, and my friend supports Dinamo.',
          },
          {
            hr: 'Vikendom gledamo utakmicu na televiziji.',
            en: 'At weekends we watch a match on television.',
          },
          {
            hr: 'Vaterpolo je u Hrvatskoj jako popularan.',
            en: 'Water polo is very popular in Croatia.',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Igram ___." (basketball)',
        options: ['košarka', 'košarku', 'košarkom', 'košarke'],
        correct: 1,
        explanation: 'Igrati takes an ordinary object in the accusative: košarka → košarku.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Bavim se ___." (swimming)',
        options: ['plivanje', 'plivati', 'plivanjem', 'plivanju'],
        correct: 2,
        explanation: 'Baviti se takes the instrumental: plivanje → plivanjem.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, swapping the two cases: "igram nogometom" and "bavim se nogomet" — igrati takes the accusative (Igram nogomet) and baviti se the instrumental (Bavim se nogometom). Second, dropping se: "Bavim sportom" — the verb is baviti se, so Bavim se sportom. Third, two conjugated verbs: "Volim plivam" — the second verb stays in the -ti form, Volim plivati.',
        highlight: 'Bavim se sportom.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Igramo ___." (volleyball)',
            options: ['odbojka', 'odbojkom', 'odbojku', 'odbojci'],
            correct: 2,
            explanation: 'Igrati takes the accusative: odbojka → odbojku.',
          },
          {
            q: 'Complete: "Moj brat se bavi ___." (football)',
            options: ['nogomet', 'nogometom', 'nogometa', 'nogometu'],
            correct: 1,
            explanation: 'Baviti se takes the instrumental: nogometom.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Volim trčati.', 'Volim trčim.', 'Volim trčanje se.', 'Volim se trčati.'],
            correct: 0,
            explanation: 'After volim the second verb stays in the -ti form: Volim trčati.',
          },
          {
            q: 'What does "Čime se baviš?" ask?',
            options: [
              'Where are you going?',
              'What do you do (as a sport, a hobby or a job)?',
              'Who do you support?',
              'How often do you train?',
            ],
            correct: 1,
            explanation: 'Čime is the instrumental of što, the case baviti se needs.',
          },
          {
            q: 'Complete: "Navijam ___ Hajduk."',
            options: ['na', 'u', 'za', 's'],
            correct: 2,
            explanation: 'You support a team with navijati za + accusative.',
          },
          {
            q: 'Which word is missing in "Bavim sportom."?',
            options: ['sam', 'je', 'me', 'se'],
            correct: 3,
            explanation: 'The verb is baviti se: Bavim se sportom.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Sport and Free Time — Key Takeaways',
        points: [
          'igrati + accusative: Igram nogomet, Igramo košarku',
          'baviti se + instrumental: Bavim se plivanjem — and never without se',
          'voljeti + infinitive: Volim trčati, Ne volim skijati',
          'Čime se baviš? asks about your sport, hobby or job',
          'How often: svaki dan, vikendom, dva puta tjedno · Idem na trening · Navijam za Hajduk',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'numbers-genitive': {
    worked: [
      {
        title: 'Two of Something Feminine',
        problem: '"two cups of coffee" — šalica (cup)',
        en: 'two cups of coffee',
        steps: [
          {
            label: 'Which group',
            text: 'Two is in the two-to-four group: the noun takes the genitive singular.',
          },
          {
            label: 'The gender',
            text: 'šalica is feminine, so two is dvije and -a becomes -e: dvije šalice.',
          },
          { label: 'The coffee', text: 'What fills the cups is a quantity: kava → kave.' },
        ],
        answer: 'dvije šalice kave',
      },
      {
        title: 'A -naest Number',
        problem: '"twelve tables" — stol (table)',
        en: 'twelve tables',
        steps: [
          { label: 'Which group', text: 'dvanaest ends in -naest, so it counts like five.' },
          {
            label: 'The case',
            text: 'Five and up take the genitive plural; a short masculine noun adds -ov-.',
          },
          { label: 'The ending', text: 'stol → stolova.' },
        ],
        answer: 'dvanaest stolova',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'tri ___ (three brothers)',
          options: ['brat', 'brata', 'brati', 'brate'],
          correct: 1,
          hint: 'Two to four take the genitive singular: masculine adds -a.',
          explanation: 'tri brata.',
        },
        {
          q: '___ kuće (two houses)',
          options: ['dva', 'dvije', 'dvoje', 'dvaju'],
          correct: 1,
          hint: 'kuća is feminine, and two has a feminine form.',
          explanation: 'dvije kuće.',
        },
        {
          q: 'pet ___ (five cities)',
          options: ['grada', 'gradovi', 'gradova', 'grad'],
          correct: 2,
          hint: 'Five and up: genitive plural. Short masculine nouns add -ov-.',
          explanation: 'pet gradova.',
        },
        {
          q: 'četiri ___ (four villages)',
          options: ['sela', 'selo', 'selu', 'selima'],
          correct: 0,
          hint: 'A neuter noun after four takes the genitive singular, which ends in -a.',
          explanation: 'četiri sela.',
        },
        {
          q: 'dvadeset i ___ knjiga (twenty-one books)',
          options: ['jedan', 'jedna', 'jedno', 'jedne'],
          correct: 1,
          hint: 'The last word decides, and it agrees with a feminine noun.',
          explanation: 'dvadeset i jedna knjiga.',
        },
        {
          q: 'Pet prijatelja ___ ispred kina. (are waiting)',
          options: ['čekam', 'čekamo', 'čeka', 'čekate'],
          correct: 2,
          hint: 'After five the whole group counts as one: third person singular.',
          explanation: 'Pet prijatelja čeka ispred kina.',
        },
        {
          q: 'Which number takes the genitive plural?',
          options: ['dva', 'tri', 'četiri', 'dvanaest'],
          correct: 3,
          hint: 'Numbers ending in -naest count like five.',
          explanation: 'dvanaest — eleven to nineteen all count like five.',
        },
        {
          q: 'Imam ___ (thirty-three euros)',
          options: [
            'trideset tri eura',
            'trideset tri euro',
            'trideset tri eure',
            'trideset tri eurima',
          ],
          correct: 0,
          hint: 'The last word is three: genitive singular.',
          explanation: 'trideset tri eura.',
        },
        {
          type: 'type',
          q: 'Ostajem u Zagrebu tri ____. (days — dan)',
          answer: 'dana',
          hint: 'Two to four: genitive singular, masculine -a.',
          explanation: 'tri dana.',
        },
        {
          type: 'type',
          q: 'Kupujem dvije ____. (bottles — boca)',
          answer: 'boce',
          hint: 'After two, feminine -a becomes -e.',
          explanation: 'dvije boce.',
        },
        {
          type: 'type',
          q: 'Čekam već dvadeset ____. (minutes)',
          answer: 'minuta',
          hint: 'Twenty takes the genitive plural; for a feminine noun it ends in -a.',
          explanation: 'dvadeset minuta.',
        },
        {
          type: 'type',
          q: 'Imam ____ godine. (two)',
          answer: 'dvije',
          hint: 'godina is feminine.',
          explanation: 'Imam dvije godine — I am two.',
        },
        {
          type: 'type',
          q: 'Hotel ima pet ____. (floors — kat)',
          answer: 'katova',
          hint: 'Five and up: genitive plural; a short masculine noun adds -ov- before the -a.',
          explanation: 'pet katova.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Imam ___." (two sisters)',
        options: ['dva sestre', 'dvije sestre', 'dvije sestara', 'dva sestara'],
        correct: 1,
        explanation: 'dvije sestre — feminine two, and the genitive singular -e.',
      },
      {
        q: 'Which phrase means "four cities"?',
        options: ['četiri grad', 'četiri gradova', 'četiri grada', 'četiri gradovi'],
        correct: 2,
        explanation: 'četiri grada — four takes the genitive singular.',
      },
      {
        q: 'Complete: "Ručak košta trideset ___." (euros)',
        options: ['eura', 'euro', 'eure', 'euri'],
        correct: 0,
        explanation: 'trideset eura — a round ten counts like five: genitive plural.',
      },
      {
        q: 'Which phrase means "twenty-one days"?',
        options: [
          'dvadeset i jedan dan',
          'dvadeset i jedan dana',
          'dvadeset i jedna dana',
          'dvadeset i jedan dani',
        ],
        correct: 0,
        explanation:
          'The last word is one, so the noun stays in the subject form: dvadeset i jedan dan.',
      },
      {
        q: 'What decides the form of the noun after "trideset četiri"?',
        options: [
          'the first word, trideset',
          'the gender of the speaker',
          'the last word, četiri',
          'nothing — it is always the genitive plural',
        ],
        correct: 2,
        explanation: 'Only the last word decides: trideset četiri stola.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Dva studenti čekaju vlak.',
          'Dva studenata čekaju vlak.',
          'Dva student čekaju vlak.',
          'Dva studenta čekaju vlak.',
        ],
        correct: 3,
        explanation: 'Dva studenta — two takes the genitive singular, and the verb is plural.',
      },
    ],
    vocab: [
      ['dvije', 'two (with feminine nouns)', 'Imam dvije sestre.'],
      ['tri', 'three', 'Tri prijatelja čekaju.'],
      ['četiri', 'four', 'Ostajem četiri dana.'],
      ['dvanaest', 'twelve', 'U razredu je dvanaest studenata.'],
      ['dvadeset', 'twenty', 'Ručak košta dvadeset eura.'],
      ['euro', 'euro', 'Kava košta dva eura.'],
      ['bilježnica', 'notebook', 'Trebam tri bilježnice.'],
      ['soba', 'room', 'Hotel ima trideset dvije sobe.'],
      ['razred', 'class, classroom', 'U razredu je dvanaest studenata.'],
    ],
  },

  'dates-years': {
    worked: [
      {
        title: 'Reading a Year',
        problem: 'Kako se čita 2026.?',
        en: 'How is 2026 read?',
        steps: [
          {
            label: 'An ordinal',
            text: 'A year is "the …th year", and godina is feminine.',
          },
          { label: 'Split it', text: 'dvije tisuće · dvadeset · šest' },
          { label: 'Last word only', text: 'Only šest becomes an ordinal, feminine: šesta.' },
        ],
        answer: 'dvije tisuće dvadeset šesta',
      },
      {
        title: 'A Birthday',
        problem: '"I was born on 3 May 1994." (said by a woman)',
        en: 'I was born on 3 May 1994.',
        steps: [
          { label: 'The verb', text: 'A woman says Rođena sam.' },
          {
            label: 'The day',
            text: 'For when something happened, the day ordinal is genitive: treći → trećeg.',
          },
          {
            label: 'Month and year',
            text: 'svibanj → svibnja; the year ordinal takes -e: devedeset četvrte.',
          },
        ],
        answer: 'Rođena sam trećeg svibnja tisuću devetsto devedeset četvrte.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Hrvatska je proglasila neovisnost tisuću devetsto devedeset ___. (1991)',
          options: ['prva', 'prve', 'prvi', 'jedan'],
          correct: 1,
          hint: 'When something happened, the feminine ordinal takes -e.',
          explanation: 'tisuću devetsto devedeset prve.',
        },
        {
          q: 'Which is the year 2020, said as "what year it is"?',
          options: [
            'dvije tisuće dvadeset',
            'dvije tisuće dvadesete',
            'dvije tisuće dvadeseta',
            'dvije tisuće dvadesetog',
          ],
          correct: 2,
          hint: 'The subject form of a feminine ordinal ends in -a.',
          explanation: 'dvije tisuće dvadeseta.',
        },
        {
          q: 'Kad si ___? (to a woman)',
          options: ['rođen', 'rođena', 'rođeni', 'rođeno'],
          correct: 1,
          hint: 'The describing word agrees with a woman: feminine ending.',
          explanation: 'Kad si rođena?',
        },
        {
          q: 'How is the 1st of July written?',
          options: ['1. srpnja', '1th srpanj', '1 srpanj', 'prvi srpanj.'],
          correct: 0,
          hint: 'A dot marks the ordinal, and the month is in the genitive.',
          explanation: '1. srpnja.',
        },
        {
          q: 'Koje godine si došao u Zagreb? — Dvije tisuće dvadeset ___. (2024)',
          options: ['četvrta', 'četiri', 'četvrte', 'četvrtog'],
          correct: 2,
          hint: '"Koje godine?" asks when, so the answer is genitive: feminine -e.',
          explanation: 'Dvije tisuće dvadeset četvrte.',
        },
        {
          q: 'Which one says "in 1848"?',
          options: [
            'tisuću osamsto četrdeset osme',
            'tisuću osamsto četrdeset osam',
            'tisuću osamsto četrdeset osma',
            'tisuću osamsto četrdeset osmi',
          ],
          correct: 0,
          hint: 'When: the last word is a feminine ordinal in the genitive.',
          explanation: 'tisuću osamsto četrdeset osme.',
        },
        {
          q: 'What does "devetsto" mean?',
          options: ['nine', 'ninety', 'nine hundred', 'nine thousand'],
          correct: 2,
          hint: 'sto is a hundred.',
          explanation: 'devetsto = 900.',
        },
        {
          q: 'Rođen sam ___ siječnja. (on the 5th)',
          options: ['peti', 'petog', 'pete', 'pet'],
          correct: 1,
          hint: 'The day of an event takes the genitive: masculine ordinal ending in -og.',
          explanation: 'Rođen sam petog siječnja.',
        },
        {
          type: 'type',
          q: 'Danas je prvi ____ 2026. (May)',
          answer: 'svibnja',
          hint: 'The month after the day is in the genitive; May is svibanj.',
          explanation: 'prvi svibnja.',
        },
        {
          type: 'type',
          q: 'Tesla je rođen tisuću osamsto pedeset ____. (in 1856)',
          answer: 'šeste',
          hint: 'When: a feminine ordinal in the genitive, ending in -e.',
          explanation: 'tisuću osamsto pedeset šeste.',
        },
        {
          type: 'type',
          q: 'Godina je dvije tisuće dvadeset ____. (2025)',
          answer: 'peta',
          hint: 'What year it is: the subject form of a feminine ordinal, ending in -a.',
          explanation: 'dvije tisuće dvadeset peta.',
        },
        {
          type: 'type',
          q: 'Rođena sam dvadesetog ____. (October)',
          answer: 'listopada',
          hint: 'October is listopad; after the day it takes the genitive.',
          explanation: 'dvadesetog listopada.',
        },
        {
          type: 'type',
          q: 'Koje ____ si rođen? (year)',
          answer: 'godine',
          hint: '"In which year?" — the word for year in the genitive.',
          explanation: 'Koje godine si rođen?',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Hrvatska je uvela euro dvije tisuće dvadeset ___." (2023)',
        options: ['tri', 'treća', 'treće', 'trećeg'],
        correct: 2,
        explanation: 'When: a genitive feminine ordinal — dvadeset treće.',
      },
      {
        q: 'How do you say "in 2010" with the genitive?',
        options: [
          'dvije tisuće deseta',
          'dvije tisuće desete',
          'dvije tisuće deset',
          'dvije tisuće desetog',
        ],
        correct: 1,
        explanation: 'dvije tisuće desete — the year of an event takes -e.',
      },
      {
        q: 'What does "U kojoj godini?" ask?',
        options: ['In which year?', 'How many years?', 'What time is it?', 'Which day?'],
        correct: 0,
        explanation: 'U kojoj godini? — in which year; the answer is u + locative.',
      },
      {
        q: 'A man says he was born in 1985. Which sentence is correct?',
        options: [
          'Rođena sam tisuću devetsto osamdeset pete.',
          'Rođen sam tisuću devetsto osamdeset peta.',
          'Rođen sam tisuću devetsto osamdeset pet.',
          'Rođen sam tisuću devetsto osamdeset pete.',
        ],
        correct: 3,
        explanation: 'A man says rođen, and the year of an event takes -e: osamdeset pete.',
      },
      {
        q: 'In a year like 2026., which part becomes an ordinal?',
        options: [
          'every word',
          'only the first word',
          'only the last word',
          'none — a year is a plain number',
        ],
        correct: 2,
        explanation: 'Only the last word: dvije tisuće dvadeset šesta.',
      },
      {
        q: 'Complete: "U Zagrebu je bio potres dvadeset ___ ožujka 2020." (on the 22nd)',
        options: ['drugi', 'drugog', 'druge', 'dva'],
        correct: 1,
        explanation: 'The day of an event takes the genitive: dvadeset drugog ožujka.',
      },
    ],
    vocab: [
      ['godina', 'year', 'Koje godine si rođen?'],
      ['tisuća', 'thousand', 'Dvije tisuće dvadeset šesta.'],
      ['rođen', 'born', 'Rođen sam u Splitu.'],
      ['rođendan', 'birthday', 'Moj rođendan je petog svibnja.'],
      ['datum', 'date', 'Koji je danas datum?'],
      ['neovisnost', 'independence', 'Hrvatska je proglasila neovisnost 1991.'],
      ['potres', 'earthquake', 'U Zagrebu je bio potres.'],
      ['povijest', 'history', 'Volim hrvatsku povijest.'],
      ['devetsto', 'nine hundred', 'Tisuću devetsto devedeset prva.'],
    ],
  },

  boljeti: {
    worked: [
      {
        title: 'One Thing or Several?',
        problem: '"My eyes hurt."',
        en: 'My eyes hurt.',
        steps: [
          { label: 'The subject', text: 'The eyes do the hurting: oči is the subject.' },
          { label: 'Count', text: 'Two eyes are plural, so the verb is bole.' },
          { label: 'Who', text: 'I am the object: me, in second place.' },
        ],
        answer: 'Bole me oči.',
      },
      {
        title: 'Yesterday',
        problem: '"Yesterday my throat hurt."',
        en: 'Yesterday my throat hurt.',
        steps: [
          { label: 'Gender', text: 'grlo is neuter, so the past is boljelo.' },
          {
            label: 'The auxiliary',
            text: 'One thing hurt: je, which comes after the short pronoun.',
          },
          { label: 'Order', text: 'Jučer first, then me je, then the verb and the subject.' },
        ],
        answer: 'Jučer me je boljelo grlo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ me uši. (My ears hurt.)',
          options: ['Boli', 'Bole', 'Bolim', 'Bolio'],
          correct: 1,
          hint: 'Count the body part: two ears.',
          explanation: 'Bole me uši.',
        },
        {
          q: 'Boli ___ trbuh. (She has a stomach ache.)',
          options: ['je', 'joj', 'ona', 'njoj'],
          correct: 0,
          hint: 'The short accusative form for ona.',
          explanation: 'Boli je trbuh.',
        },
        {
          q: "___ boli koljeno. (Marko's knee hurts.)",
          options: ['Marko', 'Markom', 'Marku', 'Marka'],
          correct: 3,
          hint: 'The person who hurts is the object, and Marko is a living masculine noun.',
          explanation: 'Marka boli koljeno.',
        },
        {
          q: 'Gdje vas ___? (Where does it hurt? — polite)',
          options: ['bolite', 'boli', 'bole', 'bolim'],
          correct: 1,
          hint: 'No body part is named, so the verb is third person singular.',
          explanation: 'Gdje vas boli?',
        },
        {
          q: 'Which sentence means "My back hurts"?',
          options: ['Boli me leđa.', 'Bole mi leđa.', 'Bole me leđa.', 'Bolim leđa.'],
          correct: 2,
          hint: 'leđa only exists in the plural, and the person is in the accusative.',
          explanation: 'Bole me leđa.',
        },
        {
          q: 'Jučer ga je ___ zub.',
          options: ['bolio', 'boljela', 'boljelo', 'boljeli'],
          correct: 0,
          hint: 'zub is masculine singular.',
          explanation: 'Jučer ga je bolio zub.',
        },
        {
          q: 'Ništa me ___ boli.',
          options: ['ne', 'ni', 'nije', 'nisam'],
          correct: 0,
          hint: 'ništa still needs the plain negative right before the verb.',
          explanation: 'Ništa me ne boli.',
        },
        {
          q: 'Which word order is correct?',
          options: [
            'Jučer su me boljele noge.',
            'Jučer me su boljele noge.',
            'Jučer me boljele su noge.',
            'Su me jučer boljele noge.',
          ],
          correct: 0,
          hint: 'The plural auxiliary comes before the short pronoun.',
          explanation: 'Jučer su me boljele noge.',
        },
        {
          type: 'type',
          q: 'Boli ____ glava. (I have a headache.)',
          answer: 'me',
          hint: 'The short accusative form for ja.',
          explanation: 'Boli me glava.',
        },
        {
          type: 'type',
          q: '____ me noge. (My legs hurt.)',
          answer: 'Bole',
          hint: 'Several legs: the plural verb.',
          explanation: 'Bole me noge.',
        },
        {
          type: 'type',
          q: '____ boli zub. (Ana has toothache.)',
          answer: 'Anu',
          hint: 'The person is in the accusative: feminine -a becomes -u.',
          explanation: 'Anu boli zub.',
        },
        {
          type: 'type',
          q: 'Jučer me je ____ glava. (hurt)',
          answer: 'boljela',
          hint: 'glava is feminine: the past ends in -la.',
          explanation: 'Jučer me je boljela glava.',
        },
        {
          type: 'type',
          q: 'Što ____ boli? (to a friend)',
          answer: 'te',
          hint: 'The short accusative form for ti.',
          explanation: 'Što te boli?',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ me glava." (My head hurts.)',
        options: ['Bole', 'Boli', 'Bolim', 'Boliš'],
        correct: 1,
        explanation: 'One head: Boli me glava.',
      },
      {
        q: 'How do you ask a friend "What hurts?"',
        options: ['Što ti boli?', 'Što boliš?', 'Tko te boli?', 'Što te boli?'],
        correct: 3,
        explanation: 'Što te boli? — boljeti takes the accusative te.',
      },
      {
        q: 'Complete: "___ bole leđa." (My mum\'s back hurts.)',
        options: ['Moja mama', 'Moju mamu', 'Mojoj mami', 'Mojom mamom'],
        correct: 1,
        explanation: 'The person is in the accusative: Moju mamu bole leđa.',
      },
      {
        q: 'Complete: "Boli ___ zub." (He has toothache.)',
        options: ['ga', 'mu', 'on', 'njemu'],
        correct: 0,
        explanation: 'The short accusative for on: Boli ga zub.',
      },
      {
        q: 'Complete: "Jučer ___ boljeli zubi." (My teeth hurt yesterday.)',
        options: ['me su', 'su me', 'me je', 'je me'],
        correct: 1,
        explanation: 'Several teeth: su, which comes before me — Jučer su me boljeli zubi.',
      },
      {
        q: 'Complete: "Više me ___ boli." (It does not hurt any more.)',
        options: ['ne', 'ni', 'nije', 'nema'],
        correct: 0,
        explanation: 'Više me ne boli. — ne goes right before the verb.',
      },
    ],
    vocab: [
      ['boljeti', 'to hurt, to ache', 'Boli me glava.'],
      ['glava', 'head', 'Boli me glava.'],
      ['zub', 'tooth', 'Boli ga zub.'],
      ['grlo', 'throat', 'Boli je grlo.'],
      ['trbuh', 'stomach', 'Boli me trbuh.'],
      ['noga', 'leg, foot', 'Bole me noge.'],
      ['uho', 'ear', 'Boli me uho.'],
      ['koljeno', 'knee', 'Boli ga koljeno.'],
      ['ništa', 'nothing', 'Ništa me ne boli.'],
      ['liječnik', 'doctor', 'Bila sam kod liječnika.'],
    ],
  },

  'i-nouns-intro': {
    worked: [
      {
        title: 'The Object Form',
        problem: '"I love that thing."',
        en: 'I love that thing.',
        steps: [
          { label: 'Gender', text: 'stvar is feminine — you can see it in ta stvar.' },
          {
            label: 'The object',
            text: 'The object of volim is the accusative, and this noun stays bare.',
          },
          { label: 'The describing word', text: 'ta becomes tu, as for any feminine object.' },
        ],
        answer: 'Volim tu stvar.',
      },
      {
        title: 'After a Preposition',
        problem: '"a song about love"',
        en: 'a song about love',
        steps: [
          { label: 'The preposition', text: 'o (about) takes the locative.' },
          { label: 'The ending', text: 'This group adds -i in the locative.' },
          { label: 'Put it together', text: 'pjesma + o + the locative of ljubav.' },
        ],
        answer: 'pjesma o ljubavi',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dobra ___! (Good evening!)',
          options: ['večer', 'večeri', 'večerom', 'večeru'],
          correct: 0,
          hint: 'A greeting like this is the subject form: the bare noun.',
          explanation: 'Dobra večer!',
        },
        {
          q: 'Pričamo o ___. (youth)',
          options: ['mladost', 'mladosti', 'mladostu', 'mladoste'],
          correct: 1,
          hint: 'o takes the locative; this group adds -i.',
          explanation: 'Pričamo o mladosti.',
        },
        {
          q: 'Laku ___!',
          options: ['noći', 'noću', 'noć', 'noćom'],
          correct: 2,
          hint: 'In the accusative the noun stays bare; only the describing word changes.',
          explanation: 'Laku noć!',
        },
        {
          q: 'Which is correct?',
          options: ['taj radost', 'ta radost', 'to radost', 'te radost'],
          correct: 1,
          hint: 'Every noun in -ost is feminine.',
          explanation: 'ta radost.',
        },
        {
          q: 'Ne znam ___ riječ. (that)',
          options: ['ta', 'tu', 'toj', 'te'],
          correct: 1,
          hint: 'riječ is the object here: the feminine accusative of ta.',
          explanation: 'Ne znam tu riječ.',
        },
        {
          q: 'Plakao je od ___. (joy)',
          options: ['radost', 'radosti', 'radostu', 'radošću'],
          correct: 1,
          hint: 'od takes the genitive.',
          explanation: 'od radosti.',
        },
        {
          q: 'Imam puno ___. (things)',
          options: ['stvar', 'stvara', 'stvari', 'stvaru'],
          correct: 2,
          hint: 'puno needs the plural genitive, and this group ends in -i there.',
          explanation: 'Imam puno stvari.',
        },
        {
          q: 'What does "S ljubavlju" at the end of a letter mean?',
          options: ['With love', 'Without love', 'About love', 'My love'],
          correct: 0,
          hint: 's means "with".',
          explanation: 'With love.',
        },
        {
          type: 'type',
          q: 'Juha je bez ____. (salt)',
          answer: 'soli',
          hint: 'bez takes the genitive, and this group adds -i.',
          explanation: 'bez soli.',
        },
        {
          type: 'type',
          q: 'U ____ je padala kiša. (the night)',
          answer: 'noći',
          hint: 'u + locative; this group adds -i.',
          explanation: 'U noći je padala kiša.',
        },
        {
          type: 'type',
          q: 'Volim ____ stvar. (that)',
          answer: 'tu',
          hint: 'The feminine accusative of ta.',
          explanation: 'Volim tu stvar.',
        },
        {
          type: 'type',
          q: 'Ova pjesma je o velikoj ____. (love)',
          answer: 'ljubavi',
          hint: 'o + locative: add -i.',
          explanation: 'o velikoj ljubavi.',
        },
        {
          type: 'type',
          q: '____ noć, mama! (Good night, Mum!)',
          answer: 'Laku',
          accept: ['laku'],
          hint: 'Good night is wished in the accusative: the describing word laka takes -u.',
          explanation: 'Laku noć, mama!',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is correct?',
        options: [
          'Moj ljubav je velika.',
          'Moja ljubav je velik.',
          'Moja ljubav je velika.',
          'Moj ljubav je velik.',
        ],
        correct: 2,
        explanation: 'Ljubav is feminine: moja ljubav, velika.',
      },
      {
        q: 'Complete: "Kupujem tu ___." (thing)',
        options: ['stvar', 'stvari', 'stvaru', 'stvara'],
        correct: 0,
        explanation: 'The object form is the bare noun: tu stvar.',
      },
      {
        q: 'Complete: "Govorimo o toj ___." (thing)',
        options: ['stvar', 'stvari', 'stvaru', 'stvare'],
        correct: 1,
        explanation: 'o + locative: o toj stvari.',
      },
      {
        q: 'What does the -u in "laku noć" show?',
        options: [
          'that noć is masculine',
          'the plural',
          'the accusative, on the describing word',
          'the genitive',
        ],
        correct: 2,
        explanation: 'The describing word carries the accusative ending; noć stays bare.',
      },
      {
        q: 'Which group are "radost", "mladost" and "starost" in?',
        options: ['masculine', 'neuter', 'plural only', 'feminine — every noun in -ost is'],
        correct: 3,
        explanation: 'Every noun ending in -ost is feminine.',
      },
      {
        q: 'Complete: "Laku ___!" (Good night!)',
        options: ['noći', 'noć', 'noću', 'noća'],
        correct: 1,
        explanation: 'Laku noć! — the noun stays bare in the accusative.',
      },
    ],
    vocab: [
      ['stvar', 'thing', 'Ta stvar je nova.'],
      ['noć', 'night', 'Laku noć!'],
      ['ljubav', 'love', 'Pričamo o ljubavi.'],
      ['radost', 'joy', 'Plakala je od radosti.'],
      ['riječ', 'word', 'Ne znam tu riječ.'],
      ['sol', 'salt', 'Juha je bez soli.'],
      ['kost', 'bone', 'Pas jede kost.'],
      ['večer', 'evening', 'Dobra večer!'],
      ['mladost', 'youth', 'U mladosti sam puno putovao.'],
    ],
  },

  'pluralia-tantum': {
    worked: [
      {
        title: 'Agreement',
        problem: '"The door is closed."',
        en: 'The door is closed.',
        steps: [
          { label: 'The noun', text: 'vrata is a neuter plural word.' },
          { label: 'The verb', text: 'Plural: su, not je.' },
          { label: 'The describing word', text: 'Neuter plural ends in -a: zatvorena.' },
        ],
        answer: 'Vrata su zatvorena.',
      },
      {
        title: 'Counting Pairs',
        problem: '"I have two pairs of jeans."',
        en: 'I have two pairs of jeans.',
        steps: [
          {
            label: 'Count the pairs',
            text: 'par after dva takes the genitive singular: dva para.',
          },
          { label: 'Of what', text: 'The jeans go into the genitive plural.' },
          { label: 'The ending', text: 'traperice drops its -e: traperica.' },
        ],
        answer: 'Imam dva para traperica.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moje naočale ___ nove.',
          options: ['je', 'su', 'si', 'smo'],
          correct: 1,
          hint: 'naočale is a plural word.',
          explanation: 'Moje naočale su nove.',
        },
        {
          q: 'Ova ___ su velika. (door)',
          options: ['vrata', 'vrati', 'vrate', 'vrato'],
          correct: 0,
          hint: 'A neuter plural word ending in -a.',
          explanation: 'Ova vrata su velika.',
        },
        {
          q: 'Gdje su ___ hlače? (my)',
          options: ['moj', 'moja', 'moje', 'mojih'],
          correct: 2,
          hint: 'hlače takes feminine plural describing words.',
          explanation: 'Gdje su moje hlače?',
        },
        {
          q: 'Bez ___ ne vidim. (glasses)',
          options: ['naočale', 'naočala', 'naočalu', 'naočali'],
          correct: 1,
          hint: 'bez takes the genitive, and this word loses its -e.',
          explanation: 'Bez naočala ne vidim.',
        },
        {
          q: 'Kupila sam ___ traperice. (one pair of)',
          options: ['jednu', 'jedna', 'jedne', 'jedan'],
          correct: 2,
          hint: 'jedan has a plural form to go with a plural-only word.',
          explanation: 'Kupila sam jedne traperice.',
        },
        {
          q: 'What does "Novine su bile na stolu." mean?',
          options: [
            'The newspaper was on the table.',
            'The newspapers are on the table.',
            'The newspaper is on the table.',
            'The newspaper will be on the table.',
          ],
          correct: 0,
          hint: 'su bile is the past tense.',
          explanation: 'One newspaper, plural word, past tense.',
        },
        {
          q: 'Leđa me ___. (My back hurts.)',
          options: ['boli', 'bole', 'bolim', 'bolu'],
          correct: 1,
          hint: 'leđa is plural.',
          explanation: 'Leđa me bole.',
        },
        {
          q: 'Which word is NOT plural-only?',
          options: ['hlače', 'škare', 'novine', 'košulja'],
          correct: 3,
          hint: 'One of these names one thing with a singular word.',
          explanation: 'košulja (shirt) is an ordinary singular noun.',
        },
        {
          type: 'type',
          q: 'Vrata ____ otvorena.',
          answer: 'su',
          hint: 'vrata is plural.',
          explanation: 'Vrata su otvorena.',
        },
        {
          type: 'type',
          q: 'Nosim nove ____. (trousers)',
          answer: 'hlače',
          hint: 'The plural-only word for trousers, in the object form.',
          explanation: 'Nosim nove hlače.',
        },
        {
          type: 'type',
          q: 'Danas nema ____. (newspaper)',
          answer: 'novina',
          hint: 'nema takes the genitive; the -e drops off.',
          explanation: 'Danas nema novina.',
        },
        {
          type: 'type',
          q: 'U ormaru imam tri para ____. (trousers)',
          answer: 'hlača',
          hint: 'After par, the genitive plural: the -e drops off.',
          explanation: 'tri para hlača.',
        },
        {
          type: 'type',
          q: 'Moja ____ su jaka. (back)',
          answer: 'leđa',
          hint: 'The plural-only word for your back.',
          explanation: 'Moja leđa su jaka.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Moje traperice ___ plave."',
        options: ['je', 'sam', 'su', 'si'],
        correct: 2,
        explanation: 'Traperice is plural: su.',
      },
      {
        q: 'Which is correct?',
        options: [
          'Moja leđa su jaka.',
          'Moje leđa su jake.',
          'Moje leđa je jako.',
          'Moja leđa je jaka.',
        ],
        correct: 0,
        explanation: 'Leđa is a neuter plural: moja, su, jaka.',
      },
      {
        q: 'Complete: "Danas nema ___." (newspaper)',
        options: ['novine', 'novina', 'novini', 'novinama'],
        correct: 1,
        explanation: 'Nema takes the genitive: novina.',
      },
      {
        q: 'Complete: "U ormaru imam dva ___ hlača."',
        options: ['par', 'pari', 'parova', 'para'],
        correct: 3,
        explanation: 'After dva, the genitive singular: dva para.',
      },
      {
        q: 'Complete: "Vrata su bila ___." (closed)',
        options: ['zatvoren', 'zatvorene', 'zatvorena', 'zatvoreno'],
        correct: 2,
        explanation: 'Neuter plural: zatvorena.',
      },
      {
        q: 'What is wrong with "Škare je oštra."?',
        options: [
          'škare is plural: Škare su oštre.',
          'oštra should be oštar',
          'je should be sam',
          'Nothing is wrong',
        ],
        correct: 0,
        explanation: 'Škare is a plural-only word, so su and oštre.',
      },
    ],
    vocab: [
      ['hlače', 'trousers', 'Moje hlače su nove.'],
      ['traperice', 'jeans', 'Nosim plave traperice.'],
      ['naočale', 'glasses', 'Gdje su moje naočale?'],
      ['škare', 'scissors', 'Trebam škare.'],
      ['novine', 'newspaper', 'Novine su na stolu.'],
      ['vrata', 'door', 'Vrata su otvorena.'],
      ['leđa', 'back (of the body)', 'Bole me leđa.'],
      ['usta', 'mouth', 'Ima velika usta.'],
      ['par', 'pair', 'Imam dva para traperica.'],
    ],
  },

  'sports-free-time': {
    worked: [
      {
        title: 'Play or Do?',
        problem: '"I play basketball."',
        en: 'I play basketball.',
        steps: [
          { label: 'The verb', text: 'A ball game is played: igrati → igram.' },
          { label: 'The case', text: 'igrati takes an ordinary object: the accusative.' },
          { label: 'The ending', text: 'košarka is feminine: -a becomes -u.' },
        ],
        answer: 'Igram košarku.',
      },
      {
        title: 'A Regular Activity',
        problem: '"My sister does swimming."',
        en: 'My sister does swimming.',
        steps: [
          {
            label: 'The verb',
            text: 'baviti se, with se in second place: Moja sestra se bavi…',
          },
          { label: 'The case', text: 'baviti se takes the instrumental.' },
          { label: 'The ending', text: 'plivanje is neuter: -e becomes -em.' },
        ],
        answer: 'Moja sestra se bavi plivanjem.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Igramo ___. (football)',
          options: ['nogometom', 'nogomet', 'nogometa', 'nogometu'],
          correct: 1,
          hint: 'igrati takes the accusative; a masculine thing looks like the subject form.',
          explanation: 'Igramo nogomet.',
        },
        {
          q: 'Moj tata se bavi ___. (tennis)',
          options: ['tenis', 'tenisa', 'tenisom', 'tenisu'],
          correct: 2,
          hint: 'baviti se takes the instrumental: masculine -om.',
          explanation: 'Moj tata se bavi tenisom.',
        },
        {
          q: 'Volim ___. (to swim)',
          options: ['plivam', 'plivati', 'plivanjem', 'pliva'],
          correct: 1,
          hint: 'After volim the second verb stays in the -ti form.',
          explanation: 'Volim plivati.',
        },
        {
          q: '___ se baviš? (What do you do?)',
          options: ['Što', 'Čime', 'Koga', 'Kome'],
          correct: 1,
          hint: 'baviti se needs the instrumental, so the question word is the instrumental of što.',
          explanation: 'Čime se baviš?',
        },
        {
          q: 'Navijam za ___. (Croatia)',
          options: ['Hrvatska', 'Hrvatsku', 'Hrvatske', 'Hrvatskoj'],
          correct: 1,
          hint: 'za takes the accusative.',
          explanation: 'Navijam za Hrvatsku.',
        },
        {
          q: 'Idem ___ utakmicu.',
          options: ['u', 'za', 'na', 's'],
          correct: 2,
          hint: 'A match is an event: you go to it with the "on" preposition.',
          explanation: 'Idem na utakmicu.',
        },
        {
          q: 'Bavim ___ sportom.',
          options: ['se', 'sam', 'me', 'si'],
          correct: 0,
          hint: 'baviti always brings its little reflexive word.',
          explanation: 'Bavim se sportom.',
        },
        {
          q: 'Moj djed igra ___. (chess)',
          options: ['šahom', 'šahu', 'šah', 'šaha'],
          correct: 2,
          hint: 'igrati takes the accusative.',
          explanation: 'Moj djed igra šah.',
        },
        {
          type: 'type',
          q: 'Igram ____ s prijateljem. (basketball)',
          answer: 'košarku',
          hint: 'igrati + accusative: feminine -a becomes -u.',
          explanation: 'Igram košarku s prijateljem.',
        },
        {
          type: 'type',
          q: 'Sestra se bavi ____. (swimming — plivanje)',
          answer: 'plivanjem',
          hint: 'baviti se + instrumental: neuter -e becomes -em.',
          explanation: 'Sestra se bavi plivanjem.',
        },
        {
          type: 'type',
          q: 'Ne volim ____. (to ski)',
          answer: 'skijati',
          hint: 'After volim, the infinitive (the -ti form).',
          explanation: 'Ne volim skijati.',
        },
        {
          type: 'type',
          q: 'Dva ____ tjedno idem na trening. (times — put)',
          answer: 'puta',
          hint: 'After dva, the genitive singular.',
          explanation: 'Dva puta tjedno idem na trening.',
        },
        {
          type: 'type',
          q: 'Navijam ____ Dinamo. (for)',
          answer: 'za',
          hint: 'The preposition for supporting a team.',
          explanation: 'Navijam za Dinamo.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Igraš li ___?" (tennis)',
        options: ['tenisom', 'tenis', 'tenisa', 'tenisu'],
        correct: 1,
        explanation: 'Igrati takes the accusative: tenis.',
      },
      {
        q: 'Complete: "Bavim se ___." (running)',
        options: ['trčati', 'trčanje', 'trčanjem', 'trčim'],
        correct: 2,
        explanation: 'Baviti se takes the instrumental: trčanjem.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Ne volim skijam.',
          'Ne volim skijati.',
          'Ne volim se skijati.',
          'Ne volim skijanjem.',
        ],
        correct: 1,
        explanation: 'After volim, the infinitive: Ne volim skijati.',
      },
      {
        q: 'Complete: "Idem ___ trening."',
        options: ['na', 'u', 'za', 's'],
        correct: 0,
        explanation: 'Idem na trening — na + accusative for going to an event.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Igram šahom.', 'Bavim šah.', 'Igram šah.', 'Igram se šah.'],
        correct: 2,
        explanation: 'Igrati + accusative, with no se: Igram šah.',
      },
      {
        q: 'What does "dva puta tjedno" mean?',
        options: ['two weeks ago', 'every two days', 'two hours a week', 'twice a week'],
        correct: 3,
        explanation: 'puta = times, tjedno = weekly.',
      },
    ],
    vocab: [
      ['nogomet', 'football', 'Igram nogomet.'],
      ['košarka', 'basketball', 'Igramo košarku.'],
      ['odbojka', 'volleyball', 'Igramo odbojku na plaži.'],
      ['plivanje', 'swimming', 'Bavim se plivanjem.'],
      ['trening', 'training session', 'Idem na trening.'],
      ['utakmica', 'match, game', 'Gledamo utakmicu.'],
      ['baviti se', 'to do, to go in for', 'Čime se baviš?'],
      ['navijati', 'to support (a team)', 'Navijam za Hajduk.'],
      ['slobodno vrijeme', 'free time', 'U slobodno vrijeme igram šah.'],
      ['šah', 'chess', 'Djed igra šah.'],
    ],
  },
};
