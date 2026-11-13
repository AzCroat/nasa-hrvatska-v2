// functions/api/content/_data/c1new/batch02.js
//
// New C1 lessons, batch 02 (Croaticum restructure, stage 6, 2026-11-12). See c1new/index.js.
//
// Razgovarajte s nama! B2-C1, lessons 2–3 ("Moderni bonton", "Današnji život i stari
// običaji"): the temporal accusative, adversative clauses and their connectors, the
// basic comma rules, the collective plural in -je, and the temporal locative with the
// fixed locative expressions.
//
// Where usage guides differ, both forms are taught and neither is tested:
//   - svaki dan / svakog dana, svaku večer / svake večeri, ovaj tjedan / ovoga tjedna
//     (accusative and genitive of time are both standard; items test the accusative and
//     never offer the genitive as wrong);
//   - na Božić / za Božić / o Božiću, u proljeće / na proljeće, po noći / noću;
//   - nego / već after a negation (već is a little more formal);
//   - the commas around međutim, which writers place differently.
// Several "locative-looking" fixed phrases are in fact ACCUSATIVE — na vrijeme, na sreću,
// na brzinu, u to vrijeme — and the lesson says so rather than filing them with u pravu.

/** Spine entries for this batch. `masterOrder` is the lesson's final C1 position. */
export const SPINE = [
  {
    id: 'temporal-accusative',
    masterOrder: 7,
    prerequisites: ['time-duration', 'time-genitive'],
    objectives: [
      'Say how long and how often with a bare accusative: cijelu noć, svaki dan, dva sata',
      'Place an event in time with u, na, za, pred and kroz plus the accusative',
      'Tell the actual length (godinu dana) from the planned one (na godinu dana) and from time ahead (za godinu dana)',
    ],
  },
  {
    id: 'adversative-clauses',
    masterOrder: 8,
    prerequisites: ['concession-contrast', 'complex-sentences'],
    objectives: [
      'Choose between a, ali, no, nego, već, međutim, ipak, pak and dok by the relation you mean',
      'Correct a denial with nego or već, never with ali',
      'Place pak after the first stressed word and put a comma before every adversative connector',
    ],
  },
  {
    id: 'comma-basics',
    masterOrder: 9,
    prerequisites: ['adversative-clauses'],
    objectives: [
      'Separate the items of a list with commas, with no comma before i or ili',
      'Set off a vocative, an interjection and an answering da or ne',
      'Close an apposition or an inserted phrase with a second comma, and comma before a, ali, nego, već, no',
    ],
  },
  {
    id: 'collective-plural',
    masterOrder: 11,
    prerequisites: ['genitive-plural-special', 'i-nouns-mati-kci'],
    objectives: [
      'Form the collective in -ad from the young in -e: pile → pilad, unuče → unučad, siroče → siročad',
      'Decline momčad and unučad as feminine i-nouns: dobre momčadi, s unučadi',
      'Make them agree as one feminine noun with a singular verb: Unučad je došla, Momčad je pobijedila',
    ],
  },
  {
    id: 'temporal-locative-idioms',
    masterOrder: 12,
    prerequisites: ['temporal-accusative', 'collective-plural'],
    objectives: [
      'Place events in periods with the locative: u prošlosti, u mladosti, u 19. stoljeću, u svibnju',
      'Use po and pri with the locative: po danu, po povratku, pri kraju',
      'Learn the fixed locative phrases (u pravu, u redu, na glasu, u žurbi) and the accusative look-alikes (na vrijeme, na sreću)',
    ],
  },
];

/** Lesson bodies (same shape as lessonsC1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // The Temporal Accusative
  // ─────────────────────────────────────────────────────────
  {
    id: 'temporal-accusative',
    title: 'Time in the Accusative',
    subtitle: 'Svaki dan, cijelu noć, u ponedjeljak, za tjedan dana',
    icon: '⏳',
    level: 'C1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'How Long, How Often, When',
        body: 'Croatian answers "how long?", "how often?" and "when?" with several cases. This lesson is the accusative: on its own for a length of time or a repetition (cijelu noć, svaki dan), and after u, na, za, pred and kroz for a point or a span (u ponedjeljak, na Božić, za tjedan dana). The prepositions are short, and each one means something different — the difference between za and na is the difference between "in a year" and "for a year".',
        icon: '⏳',
      },
      {
        type: 'table',
        title: 'Without a Preposition',
        headers: ['Meaning', 'Croatian', 'English'],
        rows: [
          ['duration', 'Cijelu noć nisam spavao.', 'I did not sleep all night.'],
          ['duration', 'Čekali smo dva sata.', 'We waited for two hours.'],
          ['duration', 'Živio je ondje godinu dana.', 'He lived there for a year.'],
          [
            'repetition',
            'Svaki dan pijem kavu na rivi.',
            'Every day I drink coffee on the waterfront.',
          ],
          ['repetition', 'Svaku večer zove majku.', 'Every evening she calls her mother.'],
          ['one occasion', 'Ovaj tjedan radim od kuće.', 'This week I am working from home.'],
        ],
      },
      {
        type: 'rule',
        title: 'A Length of Time Has No Preposition',
        body: 'English says "for two hours"; Croatian says simply dva sata, in the accusative, with nothing in front. Putting za there changes the meaning: za dva sata means "in two hours from now". So Čekali smo dva sata is how long you waited, and Vratit ću se za dva sata is when you will be back.',
        highlight: 'Čekali smo dva sata.',
      },
      {
        type: 'rule',
        title: 'Accusative or Genitive — Both Are Standard',
        body: 'For "every" and "this", Croatian also uses the genitive of time: svaki dan or svakog dana, svaku večer or svake večeri, ovaj tjedan or ovoga tjedna. Both are standard; the genitive sounds a little more formal. With godina the genitive is the usual form: svake godine, prošle godine, iduće godine. For one particular day the two can differ in meaning: Vidimo se (u) sljedeću nedjelju puts the meeting on Sunday itself, not on another day, while Vidimo se sljedeće nedjelje says it is some time during that day. This lesson practises the accusative and never marks the genitive wrong.',
        highlight: 'svaki dan / svakog dana',
      },
      {
        type: 'table',
        title: 'With a Preposition',
        headers: ['Preposition', 'Example', 'Meaning'],
        rows: [
          ['u', 'u ponedjeljak, u subotu, u podne, u osam sati', 'at a point: a day, an hour'],
          ['u', 'u proljeće, u jesen', 'in a season (but ljeti, zimi)'],
          ['na', 'na Božić, na Uskrs, na Badnjak', 'on a feast day'],
          ['na', 'na godinu dana', 'for a planned period'],
          ['za', 'za tjedan dana, za dva sata', 'in … from now'],
          ['pred', 'pred kraj, pred Božić, pred večer', 'towards, just before'],
          ['kroz', 'kroz povijest, kroz dan', 'throughout (lower style)'],
        ],
      },
      {
        type: 'rule',
        title: 'Bare, Na, Za, Kroz — Four Different Spans',
        body: 'The bare accusative is the length that actually passed: Živjela je u Irskoj godinu dana. Na + accusative is the length that was planned: Otišla je u Irsku na godinu dana. Za + accusative counts forward from now: Vraća se za godinu dana. Kroz + accusative runs across a period: Kroz povijest je bilo mnogo ratova. Temporal kroz belongs to the LOWER, everyday style. In higher style use tijekom + genitive for "throughout" (Tijekom povijesti bilo je mnogo ratova) and za + accusative for "in … from now" — Doći će za mjesec dana, not kroz mjesec dana.',
        highlight: 'na godinu dana / za godinu dana',
      },
      {
        type: 'rule',
        title: 'Days With u + Accusative, Months With u + Locative',
        body: 'The same preposition u takes different cases for different kinds of time. Days, hours and seasons are points, in the accusative: u subotu, u osam sati, u proljeće. Months and longer periods are containers, in the locative: u svibnju, u prošlosti — the subject of a later lesson. The ending tells you which you are using: subotu is accusative, svibnju is locative.',
        highlight: 'u subotu — u svibnju',
      },
      {
        type: 'example',
        title: 'Time Without a Preposition',
        items: [
          {
            hr: 'Cijelu noć je padala kiša pa smo jutro proveli kod kuće.',
            en: 'It rained all night, so we spent the morning at home.',
            note: 'cijelu noć: how long, with no preposition',
          },
          {
            hr: 'Svaki dan prolazim pokraj tržnice i kupim nešto svježe.',
            en: 'Every day I pass the market and buy something fresh.',
            note: 'svaki dan: a repetition',
          },
          {
            hr: 'Svaku nedjelju baka peče kolače za cijelu obitelj.',
            en: 'Every Sunday grandmother bakes cakes for the whole family.',
            note: 'svaku nedjelju: accusative; svake nedjelje is equally standard',
          },
          {
            hr: 'Ovaj tjedan imamo tri sastanka, a idući tjedan nijedan.',
            en: 'This week we have three meetings, and next week none.',
            note: 'ovaj tjedan, idući tjedan: one occasion each',
          },
          {
            hr: 'Na tom je projektu radila punih pet godina.',
            en: 'She worked on that project for five whole years.',
            note: 'pet godina: the length that actually passed',
          },
        ],
      },
      {
        type: 'example',
        title: 'Time With a Preposition',
        items: [
          {
            hr: 'U ponedjeljak u osam sati počinje novi tečaj hrvatskoga.',
            en: 'The new Croatian course begins on Monday at eight.',
            note: 'u ponedjeljak, u osam sati: u + accusative for a point in time',
          },
          {
            hr: 'Na Badnjak cijela obitelj dolazi k nama na večeru.',
            en: 'On Christmas Eve the whole family comes to us for dinner.',
            note: 'na Badnjak: na + accusative for a feast day',
          },
          {
            hr: 'Rezultati natječaja bit će objavljeni za tjedan dana.',
            en: 'The results of the competition will be published in a week.',
            note: 'za tjedan dana: counted forward from now',
          },
          {
            hr: 'Pred kraj ljeta otoci se isprazne i postane tiho.',
            en: 'Towards the end of summer the islands empty and it goes quiet.',
            note: 'pred kraj: approaching a point',
          },
          {
            hr: 'Kroz povijest je Dubrovnik živio od trgovine i diplomacije.',
            en: 'Throughout history Dubrovnik lived from trade and diplomacy.',
            note: 'kroz povijest: across a whole period — everyday style; formally, tijekom povijesti',
          },
          {
            hr: 'Otišla je u Berlin na šest mjeseci, a ostala je tri godine.',
            en: 'She went to Berlin for six months and stayed three years.',
            note: 'na šest mjeseci is the plan; tri godine is what happened',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which means "in two hours from now"?',
        options: ['dva sata', 'za dva sata', 'u dva sata', 'na dva sata'],
        correct: 1,
        explanation:
          "za + accusative counts forward from now. dva sata alone is a length (for two hours), u dva sata is a clock time (at two o'clock), and na dva sata a planned length.",
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Nisam spavala ___." (all night)',
        options: ['cijelu noć', 'cijeloj noći', 'u cijelu noć', 'za cijelu noć'],
        correct: 0,
        explanation:
          'A length of time is a bare accusative: cijelu noć. A preposition in front turns it into something else, or into nonsense.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is za for a length of time, copied from English "for": "Čekao sam za dva sata" does not say how long you waited — a length is the bare accusative, Čekao sam dva sata, and za means "in … from now". The second is the locative after u with a day: "u suboti" instead of u subotu. The third is na and za confused: Idem u Pariz na tjedan dana is how long you are going for; Idem u Pariz za tjedan dana is when you leave.',
        highlight: 'Čekao sam dva sata',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Vratit ću se ___." (in a week from now)',
            options: ['za tjedan dana', 'tjedna dana', 'tjedan dana', 'u tjedan dani'],
            correct: 0,
            explanation:
              'za + accusative counts forward from now. The bare tjedan dana would be a length (for a week), and the other two are broken forms.',
          },
          {
            q: 'Which sentence states how long something ACTUALLY lasted?',
            options: [
              'Otišao je u Split na mjesec dana.',
              'Bio je u Splitu mjesec dana.',
              'Vratit će se iz Splita za mjesec dana.',
              'Otišao je u Split pred kraj mjeseca.',
            ],
            correct: 1,
            explanation:
              'The bare accusative mjesec dana is the length that passed. na mjesec dana is the plan, za mjesec dana a point ahead, pred kraj mjeseca an approach to a point.',
          },
          {
            q: 'Complete: "Sastanak je ___ u devet." (on Wednesday)',
            options: ['u srijedi', 'na srijedi', 'u srijedu', 'srijede'],
            correct: 2,
            explanation:
              'Days of the week take u + accusative: u srijedu. The locative srijedi is the container case for months, not days.',
          },
          {
            q: 'Complete: "___ dolazi cijela obitelj." (On Christmas Day)',
            options: ['Na Božića', 'U Božiću', 'Božićem', 'Na Božić'],
            correct: 3,
            explanation: 'Feast days take na + accusative: na Božić, na Uskrs, na Badnjak.',
          },
          {
            q: 'What does "pred kraj godine" mean?',
            options: [
              'after the end of the year',
              'towards the end of the year',
              'for the whole year',
              'in a year from now',
            ],
            correct: 1,
            explanation:
              'pred + accusative describes approaching a point in time: pred kraj, pred Božić, pred večer.',
          },
          {
            q: 'Which is the natural way to say "We waited for an hour"?',
            options: [
              'Čekali smo za sat.',
              'Čekali smo u sat vremena.',
              'Čekali smo sat vremena.',
              'Čekali smo satu vremena.',
            ],
            correct: 2,
            explanation:
              'A length of time is a bare accusative: sat vremena. za sat would mean "in an hour from now".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Temporal Accusative — Key Takeaways',
        points: [
          'A length or a repetition takes a bare accusative: cijelu noć, dva sata, svaki dan',
          'The genitive of time is also standard: svakog dana, svake godine',
          'u + accusative for days, hours and seasons: u subotu, u osam sati, u proljeće',
          'na + accusative for feast days and planned lengths: na Božić, na godinu dana',
          'za + accusative counts forward from now; kroz runs across a period (lower style — tijekom + G in higher style); pred approaches a point',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Adversative Clauses
  // ─────────────────────────────────────────────────────────
  {
    id: 'adversative-clauses',
    title: 'But, Whereas, However',
    subtitle: 'Suprotne rečenice: a, ali, nego, već, no, međutim, ipak, pak, dok',
    icon: '⚖️',
    level: 'C1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Three Croatian Words for One English "But"',
        body: 'English "but" covers several relations that Croatian keeps apart. a sets two facts side by side; ali opposes, breaking an expectation; nego and već correct a denial; dok compares two parallel facts. Around them stand the adverbs međutim, ipak and pak. Choosing the right one is not style — a wrong choice can turn a correction into nonsense.',
        icon: '⚖️',
      },
      {
        type: 'table',
        title: 'The Adversative Connectors',
        headers: ['Connector', 'What it does', 'Example'],
        rows: [
          ['a', 'sets two facts side by side', 'Ja pijem kavu, a ona čaj.'],
          ['ali', 'opposes: the second fact breaks an expectation', 'Umoran je, ali radi.'],
          ['no', 'the same as ali, more bookish', 'Htio je doći, no nije stigao.'],
          ['nego / već', 'after a negation: replaces what was denied', 'Nije zvao, nego je pisao.'],
          ['međutim', 'however: a sentence adverb', 'Plan je dobar. Međutim, nema novca.'],
          ['ipak', 'nevertheless: the outcome holds', 'Kišilo je, ali smo ipak izašli.'],
          [
            'pak',
            'on the other hand: after the first stressed word',
            'Ja ostajem, a on pak odlazi.',
          ],
          [
            'dok',
            'whereas: two parallel facts compared',
            'Brat voli more, dok sestra voli planine.',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'A or Ali?',
        body: 'a contrasts two facts without any clash of expectation, very often with a change of subject: Ivan radi u Zagrebu, a Marija u Splitu. ali says that the second fact goes against what the first leads you to expect: Bio je bolestan, ali je došao na posao. A quick test: if you could add "even so", choose ali; if you could add "while", choose a.',
        highlight: 'Bio je bolestan, ali je došao na posao.',
      },
      {
        type: 'rule',
        title: 'Nego and Već Only After a Negation',
        body: 'When the first clause denies something and the second puts the right thing in its place, Croatian uses nego or već — "not X but Y": Nije Talijan, nego Hrvat. Nije riječ o novcu, već o poštenju. Both are standard; već is a little more formal. Without a negation in front, neither fits. Note that nego in a comparison — Stariji je nego ja — is a different use and takes no comma.',
        highlight: 'Nije Talijan, nego Hrvat.',
      },
      {
        type: 'rule',
        title: 'Međutim, Ipak, Pak',
        body: 'međutim means "however". It can open a new sentence or stand inside one: Plan je dobar. Međutim, nema novca. ipak means "nevertheless" and often joins ali or a: Bilo je skupo, ali smo ga ipak kupili. pak means "on the other hand" and stands after the first stressed word of its clause, never first: Ja ću kuhati, a ti pak operi suđe. Writers place the commas around međutim in more than one way; the one thing every guide agrees on is that it is not a conjunction like ali.',
        highlight: 'a ti pak operi suđe',
      },
      {
        type: 'rule',
        title: 'Dok: Time or Contrast, and the Comma',
        body: 'dok has two meanings. As "while" it is a time conjunction: Dok čitam, slušam glazbu. As "whereas" it compares two parallel facts: Sjever je ravan, dok je jug planinski. Every adversative connector — a, ali, no, nego, već, and dok in its contrastive sense — is preceded by a comma.',
        highlight: 'Sjever je ravan, dok je jug planinski.',
      },
      {
        type: 'rule',
        title: 'No Clitic Straight After a or no',
        body: 'A clitic (je, sam, ga, se…) cannot stand directly after a or no; after ali, nego and već it can. So: Ponudili su mu posao, ali ga je odbio — but after a or no, put a word before the clitic: Ponudili su mu posao, a on ga je odbio, or a odbio ga je. Ponudili su mu posao, a ga je odbio is wrong. Two more points from the norm: after a, ali and no a compound verb form must be complete (Nije nazvao, ali je došao — never ali došao), while after nego and već the auxiliary may drop (Nije nazvao, nego došao).',
        highlight: 'Ponudili su mu posao, a on ga je odbio',
      },
      {
        type: 'rule',
        title: 'Opening a New Sentence: naprotiv, nasuprot tome, za razliku od toga',
        body: 'Connectors of contrast can open a whole new sentence and set it against the one before: a, no, ali, međutim, naprotiv (on the contrary), nasuprot tome (in contrast) and za razliku od toga (unlike that). naprotiv corrects a statement just made: To nije dobra ideja. Naprotiv, to je velika pogreška. nasuprot tome and za razliku od toga set two people or things side by side: Iva se dobro pripremila za ispit. Nasuprot tome, Ana nije ništa učila.',
        highlight: 'To nije dobra ideja. Naprotiv, to je velika pogreška.',
      },
      {
        type: 'example',
        title: 'Choosing the Connector',
        items: [
          {
            hr: 'Ja radim u bolnici, a moj muž predaje u gimnaziji.',
            en: 'I work at a hospital, and my husband teaches at a grammar school.',
            note: 'a: two facts side by side',
          },
          {
            hr: 'Stan je malen, ali ima prekrasan pogled na more.',
            en: 'The flat is small, but it has a wonderful view of the sea.',
            note: 'ali: the second fact runs against the first',
          },
          {
            hr: 'Nismo putovali vlakom, nego smo cijeli put vozili autom.',
            en: 'We did not travel by train; we drove the whole way.',
            note: 'nego: corrects the denial',
          },
          {
            hr: 'Problem nije u novcu, već u lošoj organizaciji posla.',
            en: 'The problem is not money but poor organisation of the work.',
            note: 'već: the more formal twin of nego',
          },
          {
            hr: 'Htjeli smo stići prije mraka, no cesta je bila zatvorena.',
            en: 'We wanted to arrive before dark, but the road was closed.',
            note: 'no: a bookish ali',
          },
        ],
      },
      {
        type: 'example',
        title: 'More in Context',
        items: [
          {
            hr: 'Prijedlog je dobro zamišljen. Međutim, nitko ga ne želi platiti.',
            en: 'The proposal is well thought out. However, nobody wants to pay for it.',
            note: 'međutim opens the new sentence',
          },
          {
            hr: 'Cijeli je dan padala kiša, ali smo ipak otišli u šetnju.',
            en: 'It rained all day, but we went for a walk nevertheless.',
            note: 'ali + ipak: the outcome held despite the rain',
          },
          {
            hr: 'Stariji brat voli more, dok mlađi više voli planine.',
            en: 'The older brother loves the sea, whereas the younger prefers the mountains.',
            note: 'dok: two parallel facts compared',
          },
          {
            hr: 'Ja ću rezervirati hotel, a ti pak kupi karte za trajekt.',
            en: 'I will book the hotel, and you, for your part, buy the ferry tickets.',
            note: 'pak after the first stressed word, ti',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Nije otišao kući, ___ je ostao u uredu."',
        options: ['ali', 'nego', 'dok', 'ipak'],
        correct: 1,
        explanation:
          'The first clause denies, the second replaces: nego (or već). ali after a correcting negation is the English "but" carried across.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which connector simply sets two facts side by side?',
        options: ['ali', 'a', 'nego', 'ipak'],
        correct: 1,
        explanation:
          'a contrasts or shifts the topic without a clash of expectation: Ja pijem kavu, a ona čaj.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'English "but" covers three Croatian words, and that is the source of most errors. After a negation that is being corrected, "but" is nego or već: Nije Talijan, nego Hrvat — "Nije Talijan, ali Hrvat" is wrong. Where two facts simply stand side by side, Croatian prefers a: Ja radim, a ti spavaš. And pak in the sense "on the other hand" never opens its clause: not "Pak on odlazi" but On pak odlazi. Finally, no clitic straight after a or no: a on ga je odbio, not a ga je odbio.',
        highlight: 'Nije Talijan, nego Hrvat',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Nisam to rekla ja, ___ moj brat."',
            options: ['ali', 'dok', 'nego', 'ipak'],
            correct: 2,
            explanation:
              'A denial corrected: nego (or već). ali would leave the first part uncorrected.',
          },
          {
            q: 'Which sentence uses ali correctly?',
            options: [
              'Nije skup, ali jeftin.',
              'Skup je, ali kvalitetan.',
              'Nije došao vlakom, ali autobusom.',
              'Ne pije kavu, ali čaj.',
            ],
            correct: 1,
            explanation:
              'ali opposes two facts: expensive, but good quality. The other three correct a denial and need nego or već.',
          },
          {
            q: 'What does "međutim" mean?',
            options: ['however', 'therefore', 'meanwhile', 'for example'],
            correct: 0,
            explanation:
              'međutim is a sentence adverb meaning "however". "Meanwhile" is u međuvremenu.',
          },
          {
            q: 'Complete: "Brat živi u Osijeku, ___ sestra živi u Puli." (whereas)',
            options: ['nego', 'već', 'dok', 'pak'],
            correct: 2,
            explanation:
              'Two parallel facts compared: contrastive dok. nego and već need a negation in front; pak cannot open its clause.',
          },
          {
            q: 'Which sentence places pak correctly?',
            options: [
              'Pak ona ostaje kod kuće.',
              'Ona pak ostaje kod kuće.',
              'Ona ostaje kod pak kuće.',
              'Ona ostaje kod kuće, pak.',
            ],
            correct: 1,
            explanation: 'pak follows the first stressed word of its clause: Ona pak ostaje.',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Umoran je ali radi.',
              'Umoran je ali, radi.',
              'Umoran, je ali radi.',
              'Umoran je, ali radi.',
            ],
            correct: 3,
            explanation: 'An adversative connector is preceded by a comma: Umoran je, ali radi.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Adversative Clauses — Key Takeaways',
        points: [
          'a sets facts side by side; ali opposes; no is a bookish ali',
          'nego and već correct a denial: Nije X, nego Y',
          'međutim = however; ipak = nevertheless; pak = on the other hand, never first',
          'dok can mean "while" (time) or "whereas" (contrast)',
          'A comma goes before a, ali, no, nego, već and contrastive dok',
          'No clitic straight after a or no; naprotiv, nasuprot tome, za razliku od toga open a new sentence',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Comma Basics
  // ─────────────────────────────────────────────────────────
  {
    id: 'comma-basics',
    title: 'The Comma: Basic Rules',
    subtitle: 'Lists, vocatives, appositions, inserted phrases, adversative connectors',
    icon: '✏️',
    level: 'C1',
    duration: '~7 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'A Comma Follows Grammar, Not Breath',
        body: 'Croatian punctuation is set by Hrvatski pravopis, and the comma follows grammatical structure rather than where a speaker would pause. This lesson covers the basic rules: lists, the person addressed, interjections, appositions, inserted phrases and the adversative connectors. Commas in complex sentences with dependent clauses come in a later lesson. One rule matters above all for an English writer: no comma before i or ili in an ordinary list.',
        icon: '✏️',
      },
      {
        type: 'table',
        title: 'Where the Comma Goes',
        headers: ['Rule', 'Example'],
        rows: [
          ['between the items of a list', 'Kupi kruh, mlijeko, sir i jaja.'],
          ['no comma before i or ili in a list', '… sir i jaja; čaj, kavu ili sok'],
          ['around a vocative', 'Marko, dođi ovamo. Hvala vam, gospođo.'],
          [
            'after an interjection, or an answering da or ne',
            'Joj, zaboravio sam! Da, vidio sam ga.',
          ],
          ['around an apposition', 'Split, drugi najveći hrvatski grad, leži na moru.'],
          ['around an inserted phrase', 'To je, po mom mišljenju, najbolje rješenje.'],
          ['before a, ali, nego, već, no', 'Umoran sam, ali dolazim.'],
        ],
      },
      {
        type: 'rule',
        title: 'Lists — and the Comma That Is Not There',
        body: 'The items of a list are separated by commas, and the last two are joined by i or ili with no comma — Croatian has no serial comma. Kupili smo jabuke, kruške i šljive. Hoćeš li čaj, kavu ili sok? The same holds when i joins two whole clauses: Ana je kuhala i Marko je prao suđe.',
        highlight: 'jabuke, kruške i šljive',
      },
      {
        type: 'rule',
        title: 'Vocatives, Interjections, Da and Ne',
        body: 'The person or thing addressed is set off wherever it stands: Marko, dođi. Dođi, Marko, molim te. Hvala, mama. An interjection is separated from what follows: Joj, kasnim! Ah, to si ti. So is da or ne used as an answer: Da, slažem se. Ne, nisam bio ondje.',
        highlight: 'Dođi, Marko, molim te.',
      },
      {
        type: 'rule',
        title: 'Appositions and Inserted Phrases',
        body: 'A phrase that adds information about a noun already identified sits between two commas: Ivan Gundulić, dubrovački pjesnik, napisao je „Osmana“. Inserted words and phrases — naravno, dakle, naime, na primjer, po mom mišljenju — are set off in the same way: Mi smo, naravno, odmah pristali. The commas come in pairs: an apposition that is opened must also be closed.',
        highlight: 'Ivan Gundulić, dubrovački pjesnik, napisao je „Osmana“.',
      },
      {
        type: 'rule',
        title: 'Before the Adversative Connectors',
        body: 'A comma goes before a, ali, nego, već and no: Skupo je, ali vrijedi. Nije zvao, nego je pisao. Ja idem, a ti ostani. The exception is nego in a comparison, which is not adversative and takes no comma: Bolje je kasno nego nikad. Radije bih šetao nego vozio.',
        highlight: 'Bolje je kasno nego nikad.',
      },
      {
        type: 'example',
        title: 'Lists and Address',
        items: [
          {
            hr: 'Za izlet trebamo vodu, sendviče, kremu za sunčanje i šešir.',
            en: 'For the trip we need water, sandwiches, sunscreen and a hat.',
            note: 'a list: no comma before i',
          },
          {
            hr: 'Gospođo Horvat, vaš je paket stigao jutros.',
            en: 'Mrs Horvat, your parcel arrived this morning.',
            note: 'the vocative at the start, then a comma',
          },
          {
            hr: 'Slušaj, Ivana, ovo ti moram reći prije sastanka.',
            en: 'Listen, Ivana, I have to tell you this before the meeting.',
            note: 'the vocative in the middle: a comma on each side',
          },
          {
            hr: 'Joj, opet sam zaboravio ključeve u autu.',
            en: 'Oh no, I have left the keys in the car again.',
            note: 'an interjection set off',
          },
          {
            hr: 'Ne, nisam još pročitala tvoju poruku.',
            en: 'No, I have not read your message yet.',
            note: 'ne as an answer',
          },
        ],
      },
      {
        type: 'example',
        title: 'Insertions and Connectors',
        items: [
          {
            hr: 'Hvar, otok lavande, svakog ljeta privlači tisuće posjetitelja.',
            en: 'Hvar, the island of lavender, attracts thousands of visitors every summer.',
            note: 'an apposition between two commas',
          },
          {
            hr: 'Ovaj je prijedlog, po mom mišljenju, previše skup.',
            en: 'This proposal is, in my opinion, too expensive.',
            note: 'an inserted phrase',
          },
          {
            hr: 'Htjeli smo ići na koncert, ali karte su bile rasprodane.',
            en: 'We wanted to go to the concert, but the tickets were sold out.',
            note: 'a comma before ali',
          },
          {
            hr: 'Mi smo, naravno, odmah pristali na njihov prijedlog.',
            en: 'We, of course, agreed to their proposal at once.',
            note: 'naravno set off on both sides',
          },
          {
            hr: 'Radije bih ostala kod kuće nego išla na zabavu.',
            en: 'I would rather stay at home than go to the party.',
            note: 'nego in a comparison: no comma',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Kupila sam jaja, mlijeko, i kruh.',
          'Kupila sam jaja, mlijeko i kruh.',
          'Kupila sam, jaja, mlijeko i kruh.',
          'Kupila sam jaja mlijeko i kruh.',
        ],
        correct: 1,
        explanation:
          'Commas between the items, none before the i that joins the last two: jaja, mlijeko i kruh.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which version of "Thank you, Ana, for your help" is punctuated correctly?',
        options: [
          'Hvala ti, Ana, na pomoći.',
          'Hvala, ti Ana na pomoći.',
          'Hvala ti Ana, na pomoći.',
          'Hvala ti Ana na, pomoći.',
        ],
        correct: 0,
        explanation: 'The vocative Ana is set off on both sides: Hvala ti, Ana, na pomoći.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three habits carried over from English. The serial comma: "jabuke, kruške, i šljive" — Croatian writes no comma before i in a list. The half-closed apposition: "Zagreb, glavni grad Hrvatske leži na Savi" opens a pair of commas and never closes it; the correct form is Zagreb, glavni grad Hrvatske, leži na Savi. And the missing comma before ali, which in Croatian is required, not a matter of rhythm.',
        highlight: 'Zagreb, glavni grad Hrvatske, leži na Savi.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Imamo psa, mačku, i papigu.',
              'Imamo psa, mačku i papigu.',
              'Imamo, psa, mačku i papigu.',
              'Imamo psa mačku, i papigu.',
            ],
            correct: 1,
            explanation: 'Commas between items, no comma before the final i.',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Petre, dođi na večeru.',
              'Petre dođi na večeru.',
              'Petre dođi, na večeru.',
              'Petre, dođi, na večeru.',
            ],
            correct: 0,
            explanation: 'The vocative Petre is set off; nothing else needs a comma.',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Rijeka, najveća hrvatska luka ima dugu povijest.',
              'Rijeka najveća hrvatska luka, ima dugu povijest.',
              'Rijeka, najveća hrvatska luka, ima dugu povijest.',
              'Rijeka, najveća, hrvatska luka ima dugu povijest.',
            ],
            correct: 2,
            explanation: 'An apposition is opened and closed: Rijeka, najveća hrvatska luka, ima…',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Skupo je ali vrijedi.',
              'Skupo, je ali vrijedi.',
              'Skupo je ali, vrijedi.',
              'Skupo je, ali vrijedi.',
            ],
            correct: 3,
            explanation: 'A comma goes before ali.',
          },
          {
            q: 'Which sentence needs NO comma before its connector?',
            options: [
              'Bolje je kasno nego nikad.',
              'Nije zvao nego je pisao.',
              'Mali je ali jak.',
              'Ja radim a ti se odmaraš.',
            ],
            correct: 0,
            explanation:
              'nego in a comparison is not adversative and takes no comma. The other three need a comma before nego, ali and a.',
          },
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'Da vidio sam ga jučer.',
              'Da, vidio sam ga jučer.',
              'Da vidio, sam ga jučer.',
              'Da, vidio, sam ga jučer.',
            ],
            correct: 1,
            explanation: 'An answering da is followed by a comma.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Comma — Key Takeaways',
        points: [
          'Commas between list items; none before i or ili',
          'Set off a vocative, an interjection and an answering da or ne',
          'Appositions and inserted phrases take a pair of commas',
          'A comma before a, ali, nego, već and no',
          'No comma before nego in a comparison',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Collective Plural in -ad (workbook Lesson 3, p. 70 and 78)
  // ─────────────────────────────────────────────────────────
  {
    id: 'collective-plural',
    title: 'Momčad, Unučad, Pilad: the Collective in -ad',
    subtitle: 'Zbirna množina — a feminine singular that names a whole group of the young',
    icon: '🐣',
    level: 'C1',
    duration: '~7 min',
    color: '#15803d',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'A Whole Group in One Feminine Noun',
        body: 'You met momčad and telad briefly with the other collectives. Croatian grammar gives this group its own name, zbirna množina (the collective plural), and its own rules. It is formed with -ad from the neuter nouns in -e that name the young: pile → pilad (chicks), tele → telad (calves), unuče → unučad (grandchildren), siroče → siročad (orphans). Momčad (a team) comes from the old momče, a young man. However many members it has, every one of these nouns is grammatically ONE feminine noun of the stvar type.',
        icon: '🐣',
      },
      {
        type: 'table',
        title: 'Where the -ad Nouns Come From',
        headers: ['Countable plural', 'One young (-e)', 'Collective (-ad)'],
        rows: [
          ['unuci (grandsons)', 'unuče', 'unučad'],
          ['momci (young men)', 'momče (old)', 'momčad (team)'],
          ['pilići (chicks)', 'pile', 'pilad'],
          ['telići (calves)', 'tele', 'telad'],
          ['siročići (orphans)', 'siroče', 'siročad'],
          ['mačići (kittens)', 'mače', 'mačad'],
          ['pačići (ducklings)', 'pače', 'pačad'],
          ['—', 'novorođenče', 'novorođenčad (newborns)'],
        ],
      },
      {
        type: 'rule',
        title: 'Declined Like Stvar',
        body: 'An -ad noun declines like the feminine i-nouns you met at the start of C1 (stvar, radost): the nominative and accusative are the same, and the other cases end in -i. An adjective beside it is feminine singular: dobra momčad, dobre momčadi, dobroj momčadi, dobru momčad, s dobrom momčadi. In the instrumental -ju is also possible (s momčadju), and after an adjective the -i ending is the more usual: s mladom unučadi.',
        highlight: 'dobra momčad, dobre momčadi, dobroj momčadi',
      },
      {
        type: 'table',
        title: 'One Noun Through the Cases',
        headers: ['Case', 'Form', 'Example'],
        rows: [
          ['N', 'dobra momčad', 'Ovo je jako dobra momčad.'],
          ['G', 'dobre momčadi', 'Trener dobre momčadi je zadovoljan.'],
          ['D', 'dobroj momčadi', 'Čestitali smo dobroj momčadi.'],
          ['A', 'dobru momčad', 'Gledali smo dobru momčad.'],
          ['L', 'u dobroj momčadi', 'Igra u dobroj momčadi.'],
          ['I', 's dobrom momčadi', 'Trenirao je s dobrom momčadi.'],
        ],
      },
      {
        type: 'rule',
        title: 'Agreement: One Feminine Noun, a Singular Verb',
        body: 'Because the noun is a feminine singular, everything agrees with it as one: the verb is singular, an adjective is feminine singular, and a past participle is feminine singular. Momčad je dobro uvježbana. Momčad je pobijedila. Unučad je došla na ručak. Mala je mačad popila mlijeko. Štenad je cijelu noć lajala. English says "the grandchildren have come" in the plural; Croatian keeps the singular: Unučad je došla.',
        highlight: 'Unučad je došla na ručak.',
      },
      {
        type: 'rule',
        title: 'Only Momčad Has a Plural',
        body: 'The -ad nouns already mean a group, so they have no plural — with one exception. Momčad also means a single team, and teams can be counted: Sve momčadi trebaju doći na stadion. Igra u domaćim momčadima. Two teams are dvije momčadi. The others cannot be counted at all: to count grandchildren or chicks, use the countable noun — dva unuka, tri unuke, pet pilića.',
        highlight: 'Sve momčadi trebaju doći na stadion.',
      },
      {
        type: 'example',
        title: 'The Team',
        items: [
          {
            hr: 'Naša je rukometna momčad dobro uvježbana i pobijedila je u finalu.',
            en: 'Our handball team is well trained and won the final.',
            note: 'uvježbana, pobijedila — feminine singular',
          },
          {
            hr: 'U kojoj momčadi sada igra tvoj brat?',
            en: 'Which team does your brother play for now?',
            note: 'u kojoj momčadi — locative, like u stvari',
          },
          {
            hr: 'Sve momčadi trebaju doći na stadion pola sata prije početka natjecanja.',
            en: 'All the teams have to come to the stadium half an hour before the competition starts.',
            note: 'momčadi — the one -ad noun with a plural',
          },
          {
            hr: 'Trener je vrlo zadovoljan svojom mladom momčadi.',
            en: 'The coach is very pleased with his young team.',
            note: 'svojom mladom momčadi — instrumental after zadovoljan',
          },
          {
            hr: 'Za Božić se kod nas obično jede perad, a mačad se cijeli dan igra pod stolom.',
            en: 'At Christmas we usually eat poultry at home, and the kittens play under the table all day.',
            note: 'perad, mačad — collectives in -ad with a singular verb',
          },
        ],
      },
      {
        type: 'example',
        title: 'The Young of People and Animals',
        items: [
          {
            hr: 'Baka se cijelo poslijepodne igrala s unučadi u vrtu.',
            en: 'Grandma played with the grandchildren in the garden all afternoon.',
            note: 's unučadi — instrumental',
          },
          {
            hr: 'Seljak je na sajmu kupio mladu telad.',
            en: 'The farmer bought young calves at the fair.',
            note: 'mladu telad — feminine accusative, the noun unchanged',
          },
          {
            hr: 'Socijalni radnik brine se o napuštenoj siročadi.',
            en: 'The social worker looks after the abandoned orphans.',
            note: 'o napuštenoj siročadi — locative',
          },
          {
            hr: 'Ta je domaća pilad hranjena samo kukuruzom.',
            en: 'Those home-reared chicks are fed only on maize.',
            note: 'ta domaća pilad, hranjena — all feminine singular',
          },
          {
            hr: 'Novorođenčad je u rodilištu cijelu noć bila mirna.',
            en: 'The newborns in the maternity ward were quiet all night.',
            note: 'je bila mirna — singular verb, feminine adjective',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Unučad je jučer ___ na ručak."',
        options: ['došla', 'došli', 'došlo', 'došao'],
        correct: 0,
        explanation:
          'unučad is a feminine singular noun, so the participle is feminine singular: došla.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which -ad noun can also be used in the plural?',
        options: ['pilad', 'momčad', 'unučad', 'telad'],
        correct: 1,
        explanation: 'Only momčad, because it also names one team: sve momčadi, dvije momčadi.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) A plural verb: "Unučad su došli" is wrong — the noun is one feminine singular: Unučad je došla. (2) Neuter agreement, copied from tele or pile: "Telad je paslo" is wrong — telad is feminine: Telad je pasla. (3) Declining it like žena: "s momčadom", "o siročadu" are wrong — it declines like stvar: s momčadi, o siročadi. (4) A plural of the other -ad nouns: "dvije unučadi" is wrong — to count, use the countable noun: dva unuka.',
        highlight: 'Unučad je došla',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Naša je momčad sinoć ___." (won)',
            options: ['pobijedila', 'pobijedili', 'pobijedilo', 'pobijedio'],
            correct: 0,
            explanation: 'momčad is feminine singular: pobijedila.',
          },
          {
            q: 'Complete: "Trener je zadovoljan ___ momčadi."',
            options: ['svoju', 'svojom', 'svoje', 'svojim'],
            correct: 1,
            explanation:
              'zadovoljan takes the instrumental, and the adjective is feminine singular: svojom momčadi.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Štenad su lajali na prolaznike.',
              'Štenad je lajalo na prolaznike.',
              'Štenad je lajala na prolaznike.',
              'Štenad lajali su na prolaznike.',
            ],
            correct: 2,
            explanation: 'One feminine singular noun: Štenad je lajala.',
          },
          {
            q: 'Which -ad noun comes from "pile"?',
            options: ['pilad', 'pilići', 'pilež', 'pilevi'],
            correct: 0,
            explanation: 'pile → pilad; pilići is the countable plural of pilić.',
          },
          {
            q: 'Complete: "Baka se brine o ___ unučadi."',
            options: ['svojom', 'svoju', 'svoje', 'svojoj'],
            correct: 3,
            explanation:
              'brinuti se o + locative; the adjective is feminine singular: o svojoj unučadi.',
          },
          {
            q: 'How do you say "two teams"?',
            options: ['dva momčada', 'dvije momčadi', 'dvoje momčadi', 'dvije momčade'],
            correct: 1,
            explanation: 'momčad is feminine and is the one -ad noun with a plural: dvije momčadi.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Collective in -ad — Key Takeaways',
        points: [
          'From the young in -e: pile → pilad, tele → telad, unuče → unučad, siroče → siročad',
          'One feminine noun of the stvar type: dobra momčad, dobre momčadi, s dobrom momčadi',
          'Singular verb, feminine agreement: Unučad je došla, Momčad je pobijedila',
          'Only momčad has a plural: sve momčadi, dvije momčadi',
          'To count, use the countable noun: dva unuka, pet pilića',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Temporal Locative and Fixed Locative Phrases
  // ─────────────────────────────────────────────────────────
  {
    id: 'temporal-locative-idioms',
    title: 'Time and Fixed Phrases in the Locative',
    subtitle: 'U prošlosti, po danu, na kraju, biti u pravu',
    icon: '🕰️',
    level: 'C1',
    duration: '~7 min',
    color: '#be123c',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Periods and Fixed Phrases',
        body: 'The accusative places an event at a point (u subotu) or measures it (cijelu noć). The locative places it INSIDE a period: u prošlosti, u mladosti, u 19. stoljeću, u svibnju. The same case also fills a group of fixed phrases a learner meets every day — biti u pravu, u redu, na kraju, u žurbi — and beside them stand a few look-alikes that are actually accusative.',
        icon: '🕰️',
      },
      {
        type: 'table',
        title: 'The Temporal Locative',
        headers: ['Preposition', 'Example', 'Meaning'],
        rows: [
          ['u', 'u prošlosti, u budućnosti', 'in the past, in the future'],
          ['u', 'u djetinjstvu, u mladosti, u starosti', 'in childhood, youth, old age'],
          ['u', 'u 19. stoljeću, u srednjem vijeku', 'in the 19th century, in the Middle Ages'],
          ['u', 'u svibnju, u prosincu', 'in May, in December'],
          ['po', 'po danu, po noći', 'by day, at night'],
          ['po', 'po povratku, po dolasku', 'upon return, on arrival'],
          ['na', 'na početku, na kraju', 'at the beginning, at the end'],
          ['pri', 'pri kraju', 'near the end'],
        ],
      },
      {
        type: 'rule',
        title: 'A Point or a Period',
        body: 'After u, the accusative marks a point — days, hours and seasons: u subotu, u podne, u proljeće. The locative marks a period you are inside — months, centuries, stretches of life: u svibnju, u 19. stoljeću (read u devetnaestom stoljeću), u mladosti. The noun ending shows which case you have chosen.',
        highlight: 'u proljeće — u prošlosti',
      },
      {
        type: 'rule',
        title: 'Po and Pri With the Locative',
        body: 'po + locative gives "by day" and "at night": po danu, po noći (noću is equally standard). It also gives a formal "upon": po povratku, po dolasku, po završetku — Po povratku iz Zagreba javio se obitelji. This locative is rare and formal; the usual way to say it is nakon or poslije + genitive: Nakon povratka iz Zagreba javio se obitelji. pri + locative means "near": pri kraju, pri dnu. And na + locative gives na početku and na kraju.',
        highlight: 'Po povratku iz Zagreba javio se obitelji.',
      },
      {
        type: 'rule',
        title: 'Fixed Phrases in the Locative',
        body: 'These are learned as wholes: biti u pravu (to be right), u redu (all right), biti na glasu kao (to be known as), u žurbi (in a hurry), na kraju (in the end), u stvari (actually), na snazi (in force), u tijeku (under way), u kvaru (out of order), na odmoru (on holiday), u svakom slučaju (in any case).',
        highlight: 'biti u pravu',
      },
      {
        type: 'rule',
        title: 'Look-Alikes in the Accusative',
        body: 'Some phrases with na and u look as if they belong in the list above and are actually accusative: na vrijeme (on time), na sreću (luckily), na brzinu (in haste), u to vrijeme (at that time). Their nouns show it — the locatives would be vremenu, sreći and brzini. So u žurbi is locative while na brzinu, almost the same idea, is accusative.',
        highlight: 'na vrijeme — u žurbi',
      },
      {
        type: 'example',
        title: 'Time in the Locative',
        items: [
          {
            hr: 'U mladosti je moj djed radio kao pomorac i obišao pola svijeta.',
            en: 'In his youth my grandfather worked as a sailor and went round half the world.',
            note: 'u mladosti: a stretch of life',
          },
          {
            hr: 'U 19. stoljeću Rijeka je postala važna luka Srednje Europe.',
            en: 'In the 19th century Rijeka became an important port of Central Europe.',
            note: 'u 19. stoljeću: read u devetnaestom stoljeću',
          },
          {
            hr: 'Po danu radi u knjižnici, a po noći piše roman.',
            en: 'By day she works in the library, and at night she writes a novel.',
            note: 'po danu, po noći: po + locative',
          },
          {
            hr: 'Po povratku s puta nazvao je majku i sve joj ispričao.',
            en: 'On returning from the trip he called his mother and told her everything.',
            note: 'po povratku: rare and formal; the usual form is nakon povratka',
          },
          {
            hr: 'U prošlosti su se mnogi otočani selili u Ameriku i Australiju.',
            en: 'In the past many islanders emigrated to America and Australia.',
            note: 'u prošlosti: a period',
          },
        ],
      },
      {
        type: 'example',
        title: 'Fixed Phrases',
        items: [
          {
            hr: 'Moram priznati da si bio u pravu, a ja nisam.',
            en: 'I have to admit that you were right and I was not.',
            note: 'biti u pravu: to be right',
          },
          {
            hr: 'Restoran na rivi na glasu je kao najbolji u gradu.',
            en: 'The restaurant on the waterfront is known as the best in town.',
            note: 'biti na glasu kao: to be known as',
          },
          {
            hr: 'Izašla je u žurbi i zaboravila mobitel na stolu.',
            en: 'She left in a hurry and forgot her phone on the table.',
            note: 'u žurbi: locative',
          },
          {
            hr: 'Na kraju smo ipak stigli na vrijeme, iako je vlak kasnio.',
            en: 'In the end we arrived on time after all, although the train was late.',
            note: 'na kraju is locative; na vrijeme is accusative',
          },
          {
            hr: 'Lift je opet u kvaru pa idemo stepenicama.',
            en: 'The lift is out of order again, so we are taking the stairs.',
            note: 'u kvaru: out of order',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "___ je volio putovati." (In his youth)',
        options: ['U mladost', 'U mladosti', 'Na mladosti', 'Po mladost'],
        correct: 1,
        explanation: 'A stretch of life takes u + locative: u mladosti.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which phrase is NOT in the locative?',
        options: ['u pravu', 'na kraju', 'na vrijeme', 'u žurbi'],
        correct: 2,
        explanation:
          'na vrijeme is accusative — the locative of vrijeme would be vremenu. The other three are locatives.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips. "U svibanj" for "in May": months take the locative, u svibnju. "Biti na pravu" or "biti u pravo" for "to be right": the phrase is fixed — biti u pravu. And treating every na phrase as locative: "na vremenu" is wrong, because "on time" is na vrijeme, an accusative, like na sreću and na brzinu.',
        highlight: 'biti u pravu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Grad je osnovan ___." (in the Middle Ages)',
            options: [
              'u srednji vijek',
              'u srednjem vijeku',
              'na srednjem vijeku',
              'po srednjem vijeku',
            ],
            correct: 1,
            explanation: 'A period takes u + locative: u srednjem vijeku.',
          },
          {
            q: 'Complete: "Nazovi me ___." (upon your arrival)',
            options: ['po dolasku', 'na dolazak', 'u dolasku', 'pri dolazak'],
            correct: 0,
            explanation:
              'po + locative is a formal "upon": po dolasku, po povratku. The usual form is nakon dolaska.',
          },
          {
            q: 'Which sentence means "You are right"?',
            options: ['Imaš pravu.', 'Ti si u pravo.', 'Ti si u pravu.', 'Ti si na pravu.'],
            correct: 2,
            explanation: 'The fixed phrase is biti u pravu, with the locative of pravo.',
          },
          {
            q: 'Which phrase is in the ACCUSATIVE?',
            options: ['na kraju', 'u žurbi', 'u redu', 'na sreću'],
            correct: 3,
            explanation:
              'na sreću is accusative (the locative would be sreći); the others are locatives.',
          },
          {
            q: 'Complete: "Stigli smo točno ___." (on time)',
            options: ['na vremenu', 'u vremenu', 'na vrijeme', 'po vremenu'],
            correct: 2,
            explanation: 'On time is na vrijeme, an accusative.',
          },
          {
            q: 'Complete: "___ je bilo jako hladno." (In December)',
            options: ['U prosinac', 'U prosincu', 'Na prosincu', 'Po prosincu'],
            correct: 1,
            explanation: 'Months take u + locative: u prosincu.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Temporal Locative — Key Takeaways',
        points: [
          'u + locative for months, centuries and periods: u svibnju, u 19. stoljeću, u mladosti',
          'u + accusative for days, hours and seasons: u subotu, u podne, u proljeće',
          'po danu, po noći; po povratku = upon return (rare — usually nakon povratka); pri kraju = near the end',
          'Fixed locatives: u pravu, u redu, na glasu, u žurbi, na kraju, na snazi, u kvaru',
          'Accusative look-alikes: na vrijeme, na sreću, na brzinu, u to vrijeme',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'temporal-accusative': {
    worked: [
      {
        title: 'For, In or For-as-Planned?',
        problem:
          'Reci na tri načina: (a) I lived in Rijeka for a year. (b) I am going to Rijeka for a year (that is the plan). (c) I am going to Rijeka in a year.',
        en: 'Say it three ways: the actual length, the planned length, and the time from now.',
        steps: [
          {
            label: 'What actually passed',
            text: 'A length that really passed is a bare accusative: godinu dana, with no preposition.',
          },
          {
            label: 'What is planned',
            text: 'A planned length takes na + accusative: na godinu dana.',
          },
          {
            label: 'Time from now',
            text: 'A point counted forward from now takes za + accusative: za godinu dana.',
          },
        ],
        answer:
          '(a) Živio sam u Rijeci godinu dana. (b) Idem u Rijeku na godinu dana. (c) Idem u Rijeku za godinu dana.',
      },
      {
        title: 'A Day, a Feast, a Season',
        problem:
          'Reci: "On Saturday we are going to the islands, on Christmas Day we stay at home, and in spring we travel to Zagreb."',
        en: 'Say: On Saturday we go to the islands, on Christmas Day we stay at home, and in spring we travel to Zagreb.',
        steps: [
          {
            label: 'The day',
            text: 'A day of the week takes u + accusative: subota → u subotu.',
          },
          {
            label: 'The feast',
            text: 'A feast day takes na + accusative; Božić is masculine inanimate, so the form does not change.',
          },
          {
            label: 'The season',
            text: 'A season with u takes the accusative; proljeće is neuter, so it looks like the nominative. Join the last clause with a, two facts side by side.',
          },
        ],
        answer:
          'U subotu idemo na otoke, na Božić ostajemo kod kuće, a u proljeće putujemo u Zagreb.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Učila je ___." (the whole day)',
          options: ['cijeli dan', 'cijelom danu', 'u cijeli dan', 'cijelim danom'],
          correct: 0,
          hint: 'A length of time takes no preposition.',
          explanation: 'cijeli dan — a bare accusative of duration.',
        },
        {
          q: 'Complete: "Vlak polazi ___." (at seven o\'clock)',
          options: ['sedam sati', 'u sedam sati', 'za sedam sati', 'na sedam sati'],
          correct: 1,
          hint: 'A clock time is a point, introduced by the same preposition as a day of the week.',
          explanation:
            'u + accusative for a point in time. za sedam sati would be "in seven hours".',
        },
        {
          q: 'Which means "for a month" as a planned length?',
          options: ['mjesec dana', 'za mjesec dana', 'na mjesec dana', 'mjeseca dana'],
          correct: 2,
          hint: 'The planned length uses the preposition that also marks feast days.',
          explanation: 'na + accusative for a planned length: Otišao je na mjesec dana.',
        },
        {
          q: 'Complete: "Dolazimo vam ___." (on New Year\'s Day)',
          options: ['na Novu godinu', 'na Novoj godini', 'Novom godinom', 'Nove godine na'],
          correct: 0,
          hint: 'A feast day takes this preposition with the accusative.',
          explanation: 'na Novu godinu — na + accusative, like na Božić.',
        },
        {
          q: 'What does "pred večer" mean?',
          options: ['every evening', 'towards evening', 'the evening before', 'all evening'],
          correct: 1,
          hint: 'pred with the accusative describes approaching a point.',
          explanation: 'pred večer — as evening comes on.',
        },
        {
          q: 'Which sentence uses za correctly?',
          options: [
            'Spavao sam za osam sati.',
            'Bit će gotovo za pet minuta.',
            'Radim ovdje za dvije godine.',
            'Bio je bolestan za tjedan dana.',
          ],
          correct: 1,
          hint: 'za points forward from now; it never measures a length that has passed.',
          explanation:
            'za pet minuta — in five minutes from now. The others need the bare accusative of length.',
        },
        {
          q: 'Complete: "___ ide u teretanu." (every morning)',
          options: ['Svako jutro', 'Svakom jutru', 'U svako jutro', 'Za svako jutro'],
          correct: 0,
          hint: 'A repetition needs no preposition.',
          explanation: 'Svako jutro — a bare accusative; svakog jutra is equally standard.',
        },
        {
          q: 'Complete: "___ se jezik stalno mijenjao." (Throughout the centuries)',
          options: ['Za stoljeća', 'Kroz stoljeća', 'Na stoljeća', 'Pred stoljeća'],
          correct: 1,
          hint: 'You need the preposition for running across a whole stretch of time.',
          explanation:
            'kroz + accusative: across a period. That is everyday style; in formal writing use tijekom stoljeća.',
        },
        {
          type: 'type',
          q: 'Nismo spavali cijelu ____. (night)',
          answer: 'noć',
          hint: 'A feminine noun whose accusative looks like its nominative.',
          explanation: 'cijelu noć — duration in the accusative.',
        },
        {
          type: 'type',
          q: 'Vidimo se ____ subotu! (on — the preposition)',
          answer: 'u',
          hint: 'The preposition for days of the week.',
          explanation: 'u subotu — u + accusative.',
        },
        {
          type: 'type',
          q: 'Vratit ću se ____ tjedan dana. (in, counting forward from now)',
          answer: 'za',
          hint: 'The preposition that counts forward from the present.',
          explanation: 'za tjedan dana — in a week.',
        },
        {
          type: 'type',
          q: '____ Božić idemo baki. (On — the preposition for feast days)',
          answer: 'Na',
          hint: 'The same preposition is used for Easter and Christmas Eve.',
          explanation: 'Na Božić — na + accusative.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Rezultati će biti poznati ___." (in three days from now)',
        options: ['tri dana', 'na tri dana', 'za tri dana', 'tri dane'],
        correct: 2,
        explanation: 'za + accusative counts forward from now.',
      },
      {
        q: 'Which sentence states a PLANNED length?',
        options: [
          'Ostao je u Zadru tjedan dana.',
          'Došao je u Zadar na tjedan dana.',
          'Vratit će se u Zadar za tjedan dana.',
          'U Zadru je bio cijeli tjedan.',
        ],
        correct: 1,
        explanation: 'na + accusative is the plan: he came for a week.',
      },
      {
        q: 'Complete: "Trgovina se zatvara ___." (at noon)',
        options: ['u podne', 'u podnevu', 'na podne', 'podneva'],
        correct: 0,
        explanation: 'u + accusative for a point: u podne.',
      },
      {
        q: 'Complete: "___ idemo na misu." (On Easter Sunday)',
        options: ['Na Uskrsu', 'U Uskrs', 'Uskrsom', 'Na Uskrs'],
        correct: 3,
        explanation: 'Feast days take na + accusative: na Uskrs.',
      },
      {
        q: 'What does "kroz cijelo stoljeće" mean?',
        options: [
          'in a century from now',
          'throughout the whole century',
          'towards the end of the century',
          'for a planned century',
        ],
        correct: 1,
        explanation:
          'kroz + accusative runs across a period (lower style; formally tijekom cijeloga stoljeća).',
      },
      {
        q: 'Which sentence is correct for "I worked there for three years"?',
        options: [
          'Radio sam ondje za tri godine.',
          'Radio sam ondje tri godine.',
          'Radio sam ondje u tri godine.',
          'Radio sam ondje trima godinama.',
        ],
        correct: 1,
        explanation: 'A length that passed is the bare accusative: tri godine.',
      },
    ],
    vocab: [
      ['tjedan dana', 'a week', 'Vratit ću se za tjedan dana.'],
      ['godinu dana', 'for a year', 'Živio je u Irskoj godinu dana.'],
      ['Badnjak', 'Christmas Eve', 'Na Badnjak cijela obitelj dolazi na večeru.'],
      ['Uskrs', 'Easter', 'Na Uskrs se jedu šunka i pisanice.'],
      ['podne', 'noon', 'Nađimo se u podne ispred kazališta.'],
      ['ponoć', 'midnight', 'Kafić radi do ponoći.'],
      ['pred kraj', 'towards the end', 'Pred kraj ljeta otoci se isprazne.'],
      ['kroz povijest', 'throughout history', 'Kroz povijest se grad mnogo mijenjao.'],
      ['svaki dan', 'every day', 'Svaki dan pijem kavu na rivi.'],
    ],
  },

  'adversative-clauses': {
    worked: [
      {
        title: 'Three Kinds of "But"',
        problem:
          'Prevedi: (a) He is old, but he still swims every day. (b) He is not old but young. (c) He swims, and she runs.',
        en: 'Translate three sentences that English writes with "but" or "and".',
        steps: [
          {
            label: 'An expectation broken',
            text: 'Old people are not expected to swim daily, so the second fact opposes the first: ali.',
          },
          {
            label: 'A denial corrected',
            text: 'The first clause denies (nije star) and the second replaces it: nego or već.',
          },
          {
            label: 'Two facts side by side',
            text: 'No clash, a new subject: a. Every connector takes a comma before it.',
          },
        ],
        answer:
          '(a) Star je, ali još svaki dan pliva. (b) Nije star, nego mlad. (c) On pliva, a ona trči.',
      },
      {
        title: 'Whereas, Two Ways',
        problem:
          'Spoji dvaput: "Ja volim zimu." + "Moj brat voli ljeto." — once with dok, once with pak.',
        en: 'Join two sentences, once with dok and once with pak.',
        steps: [
          {
            label: 'With dok',
            text: 'Contrastive dok joins two parallel facts in one sentence, with a comma before it.',
          },
          {
            label: 'With pak',
            text: 'pak is an adverb, not a conjunction: it stands after the first stressed word of its own clause.',
          },
          {
            label: 'The join',
            text: 'Since pak does not join clauses, start a new sentence or add a in front.',
          },
        ],
        answer: 'Ja volim zimu, dok moj brat voli ljeto. / Ja volim zimu. Moj brat pak voli ljeto.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Kuća je stara, ___ dobro održavana."',
          options: ['nego', 'ali', 'dok', 'već'],
          correct: 1,
          hint: 'The second fact runs against what "old" leads you to expect.',
          explanation: 'ali opposes: old, but well kept. nego and već need a negation in front.',
        },
        {
          q: 'Complete: "Ne idemo na more, ___ u planine."',
          options: ['ali', 'ipak', 'nego', 'dok'],
          correct: 2,
          hint: 'The first clause denies; the second replaces.',
          explanation: 'nego after a negation: not the sea but the mountains.',
        },
        {
          q: 'Complete: "Ja sam iz Splita, ___ moj muž je iz Zagreba."',
          options: ['a', 'nego', 'već', 'ipak'],
          correct: 0,
          hint: 'No negation and no clash — just two facts side by side.',
          explanation: 'a sets two facts side by side.',
        },
        {
          q: 'Which word is a sentence adverb meaning "however"?',
          options: ['međutim', 'nego', 'dok', 'a'],
          correct: 0,
          hint: 'It can open a new sentence.',
          explanation: 'međutim — however.',
        },
        {
          q: 'Which sentence uses dok to mean "whereas"?',
          options: [
            'Dok jedem, ne gledam mobitel.',
            'Sjever je hladan, dok je jug topao.',
            'Ostani ovdje dok ne dođem.',
            'Dok sam bio mlad, puno sam putovao.',
          ],
          correct: 1,
          hint: 'Look for two parallel facts compared, not two events at the same time.',
          explanation: 'North and south compared: contrastive dok. The others are time clauses.',
        },
        {
          q: 'Complete: "Kiša je padala cijeli dan, ali smo ___ izašli u šetnju."',
          options: ['nego', 'ipak', 'dok', 'pak'],
          correct: 1,
          hint: 'Despite the rain, the outcome held.',
          explanation: 'ali … ipak — but nevertheless.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Pak ja ostajem.',
            'Ja pak ostajem.',
            'Ja ostajem kod pak kuće.',
            'Ostajem, pak.',
          ],
          correct: 1,
          hint: 'This particle follows the first stressed word.',
          explanation: 'Ja pak ostajem — I, on the other hand, am staying.',
        },
        {
          q: 'Which sentence needs a comma before its connector?',
          options: [
            'Bolji je nego prije.',
            'Volim more ali ne volim vrućinu.',
            'Više voli čaj nego kavu.',
            'Stariji je nego što izgleda.',
          ],
          correct: 1,
          hint: 'Adversative connectors take a comma; a comparison does not.',
          explanation: 'Volim more, ali ne volim vrućinu. The others are comparisons with nego.',
        },
        {
          type: 'type',
          q: 'Nije Talijanka, ____ Hrvatica. (but rather — after a negation)',
          answer: 'nego',
          accept: ['već'],
          hint: 'One of the two connectors that replace what was denied.',
          explanation: 'Nije Talijanka, nego (već) Hrvatica.',
        },
        {
          type: 'type',
          q: 'On voli more, ____ ona voli planine. (whereas)',
          answer: 'dok',
          accept: ['a'],
          hint: 'The contrastive use of a word that usually means "while".',
          explanation: 'Contrastive dok compares two parallel facts.',
        },
        {
          type: 'type',
          q: 'Bilo je skupo, ____ smo ga kupili. (but — against expectation)',
          answer: 'ali',
          hint: 'The commonest connector of opposition. (no cannot stand before a clitic.)',
          explanation: 'ali — expensive, but we bought it.',
        },
        {
          type: 'type',
          q: 'Plan je bio dobar. ____, nitko ga nije proveo. (However)',
          answer: 'Međutim',
          hint: 'A sentence adverb that can open the new sentence.',
          explanation: 'Međutim — however.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "To nije moj auto, ___ susjedov."',
        options: ['ali', 'nego', 'dok', 'ipak'],
        correct: 1,
        explanation: 'A denial corrected: nego (or već).',
      },
      {
        q: 'Which sentence uses a correctly?',
        options: [
          'Nije on kriv, a ona.',
          'Ana čita, a Ivan gleda televiziju.',
          'Ana čita a, Ivan gleda televiziju.',
          'Ana a čita, Ivan gleda televiziju.',
        ],
        correct: 1,
        explanation:
          'a sets two facts side by side, with a comma before it. A correction needs nego.',
      },
      {
        q: 'Which word says that the outcome holds DESPITE the first fact?',
        options: ['a', 'dok', 'nego', 'ipak'],
        correct: 3,
        explanation: 'ipak — nevertheless.',
      },
      {
        q: 'Complete with the formal alternative to nego: "Nije došao u utorak, ___ u četvrtak."',
        options: ['već', 'ali', 'dok', 'pak'],
        correct: 0,
        explanation: 'već corrects a denial, like nego, in a slightly more formal register.',
      },
      {
        q: 'Which sentence has dok in the sense "whereas"?',
        options: [
          'Dok je kuhao, slušao je radio.',
          'Čekaj dok se ne vratim.',
          'Ivan voli jazz, dok Petra voli rock.',
          'Dok ne završiš, ne izlaziš.',
        ],
        correct: 2,
        explanation: 'Two parallel facts compared. The others are time clauses.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Nije ostao kod kuće nego, je otišao na posao.',
          'Nije ostao kod kuće, nego je otišao na posao.',
          'Nije ostao, kod kuće nego je otišao na posao.',
          'Nije ostao kod kuće nego je, otišao na posao.',
        ],
        correct: 1,
        explanation: 'A comma goes before the adversative nego.',
      },
    ],
    vocab: [
      ['međutim', 'however', 'Plan je bio dobar. Međutim, nije uspio.'],
      ['ipak', 'nevertheless', 'Bilo je teško, ali smo ipak uspjeli.'],
      ['nego', 'but rather (after a negation)', 'Nije zvao, nego je pisao.'],
      ['već', 'but rather (after a negation, formal)', 'Nije riječ o novcu, već o poštenju.'],
      ['pak', 'on the other hand', 'Ja ostajem, a on pak odlazi.'],
      ['dok', 'whereas; while', 'Brat voli more, dok sestra voli planine.'],
      ['suprotna rečenica', 'adversative clause', 'Veznik ali uvodi suprotnu rečenicu.'],
      ['očekivanje', 'expectation', 'Rezultat je nadmašio sva očekivanja.'],
    ],
  },

  'comma-basics': {
    worked: [
      {
        title: 'Punctuate a Message',
        problem: 'Dodaj zareze: "Maja hvala ti na pozivu ali u subotu radim."',
        en: 'Add the commas: Maja, thanks for the invitation, but I am working on Saturday.',
        steps: [
          {
            label: 'Who is addressed',
            text: 'Maja is a vocative at the start of the sentence: a comma after it.',
          },
          {
            label: 'The connector',
            text: 'ali is adversative: a comma before it.',
          },
          {
            label: 'Nothing else',
            text: 'u subotu radim is an ordinary clause; it needs no further comma.',
          },
        ],
        answer: 'Maja, hvala ti na pozivu, ali u subotu radim.',
      },
      {
        title: 'An Apposition and a List',
        problem: 'Dodaj zareze: "Pula grad u Istri ima amfiteatar tržnicu i lijepu rivu."',
        en: 'Add the commas: Pula, a town in Istria, has an amphitheatre, a market and a lovely waterfront.',
        steps: [
          {
            label: 'The apposition',
            text: 'grad u Istri adds information about Pula: one comma before it and one after it.',
          },
          {
            label: 'The list',
            text: 'Three items: a comma between the first two.',
          },
          {
            label: 'The last item',
            text: 'The final item is joined with i, and there is no comma before i.',
          },
        ],
        answer: 'Pula, grad u Istri, ima amfiteatar, tržnicu i lijepu rivu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Učim hrvatski, njemački, i talijanski.',
            'Učim hrvatski, njemački i talijanski.',
            'Učim, hrvatski, njemački i talijanski.',
            'Učim hrvatski njemački, i talijanski.',
          ],
          correct: 1,
          hint: 'Look at what stands before the conjunction at the end of the list.',
          explanation: 'Commas between items, none before i.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Mama, gdje su moje cipele?',
            'Mama gdje, su moje cipele?',
            'Mama gdje su, moje cipele?',
            'Mama gdje su moje, cipele?',
          ],
          correct: 0,
          hint: 'The person addressed is set off.',
          explanation: 'Mama is a vocative.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'To je naravno, istina.',
            'To je, naravno, istina.',
            'To je, naravno istina.',
            'To, je naravno istina.',
          ],
          correct: 1,
          hint: 'An inserted word takes a comma on both sides.',
          explanation: 'To je, naravno, istina — the commas come in a pair.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Nismo išli na plažu nego, smo otišli u muzej.',
            'Nismo išli na plažu, nego smo otišli u muzej.',
            'Nismo, išli na plažu nego smo otišli u muzej.',
            'Nismo išli, na plažu nego smo otišli u muzej.',
          ],
          correct: 1,
          hint: 'The connector that replaces a denial is preceded by a comma.',
          explanation: 'A comma before adversative nego.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ne, nisam umoran.',
            'Ne nisam umoran.',
            'Ne nisam, umoran.',
            'Ne, nisam, umoran.',
          ],
          correct: 0,
          hint: 'An answer word stands apart from the sentence after it.',
          explanation: 'An answering ne is followed by a comma.',
        },
        {
          q: 'Which sentence must NOT have a comma before nego?',
          options: [
            'Više volim more nego planine.',
            'Nije spavao nego je čitao.',
            'Nije bio kod kuće nego je radio.',
            'Nije zvao nego je pisao.',
          ],
          correct: 0,
          hint: 'In a comparison this word is not an adversative connector.',
          explanation:
            'Više volim more nego planine is a comparison. The other three correct a denial and need a comma.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ivan Meštrović hrvatski kipar, rođen je 1883.',
            'Ivan Meštrović, hrvatski kipar, rođen je 1883.',
            'Ivan Meštrović, hrvatski kipar rođen je 1883.',
            'Ivan, Meštrović hrvatski kipar, rođen je 1883.',
          ],
          correct: 1,
          hint: 'An apposition is closed as well as opened.',
          explanation: 'hrvatski kipar sits between two commas.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Joj, kako je hladno!',
            'Joj kako, je hladno!',
            'Joj kako je, hladno!',
            'Joj, kako, je hladno!',
          ],
          correct: 0,
          hint: 'An interjection is separated from what follows.',
          explanation: 'Joj is set off with a comma.',
        },
        {
          type: 'type',
          q: 'Zarez se ne piše ispred veznika ____ u običnom nabrajanju. (and)',
          answer: 'i',
          hint: 'The commonest copulative conjunction.',
          explanation: 'No comma before i in a list: jabuke, kruške i šljive.',
        },
        {
          type: 'type',
          q: 'Imenica kojom se nekoga doziva stoji u ____ i odvaja se zarezom. (the case of address)',
          answer: 'vokativu',
          accept: ['vokativ'],
          hint: 'The name of the case of address, put in the locative after u.',
          explanation: 'The vocative is set off by commas.',
        },
        {
          type: 'type',
          q: 'Dodatak koji objašnjava imenicu, kao u "Zagreb, glavni grad Hrvatske, …", zove se ____.',
          answer: 'apozicija',
          hint: 'The grammatical term borrowed from Latin; in English, apposition.',
          explanation: 'An apposition takes a comma on each side.',
        },
        {
          type: 'type',
          q: 'Mali je, ____ jak. (but)',
          answer: 'ali',
          hint: 'The commonest connector of opposition. (no cannot stand before a clitic.)',
          explanation: 'Mali je, ali jak — the comma goes before the connector.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Posjetili smo Zadar, Šibenik i Trogir.',
          'Posjetili smo Zadar, Šibenik, i Trogir.',
          'Posjetili smo, Zadar, Šibenik i Trogir.',
          'Posjetili smo Zadar Šibenik, i Trogir.',
        ],
        correct: 0,
        explanation: 'Commas between items, none before the final i.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Hvala vam gospodine, na strpljenju.',
          'Hvala vam, gospodine, na strpljenju.',
          'Hvala vam gospodine na strpljenju.',
          'Hvala, vam gospodine na strpljenju.',
        ],
        correct: 1,
        explanation: 'The vocative gospodine is set off on both sides.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Taj je film po mom mišljenju, predug.',
          'Taj je film, po mom mišljenju predug.',
          'Taj je, film po mom mišljenju predug.',
          'Taj je film, po mom mišljenju, predug.',
        ],
        correct: 3,
        explanation: 'An inserted phrase takes a pair of commas.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Nije zvao nego, je poslao poruku.',
          'Nije, zvao nego je poslao poruku.',
          'Nije zvao, nego je poslao poruku.',
          'Nije zvao nego je, poslao poruku.',
        ],
        correct: 2,
        explanation: 'A comma goes before adversative nego.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: ['Ah to si ti.', 'Ah, to si ti.', 'Ah to, si ti.', 'Ah, to, si ti.'],
        correct: 1,
        explanation: 'An interjection is separated from what follows.',
      },
      {
        q: 'In which sentence is a comma WRONG?',
        options: [
          'Ana, Ivo i Lucija stigli su prvi.',
          'Ana, Ivo, i Lucija stigli su prvi.',
          'Ana je došla, ali Ivo nije.',
          'Ivo, brat moje prijateljice, živi u Splitu.',
        ],
        correct: 1,
        explanation: 'No comma before i in a list.',
      },
    ],
    vocab: [
      ['zarez', 'comma', 'Iza vokativa dolazi zarez.'],
      ['točka', 'full stop', 'Rečenica završava točkom.'],
      ['nabrajanje', 'listing, enumeration', 'U nabrajanju se riječi odvajaju zarezima.'],
      ['vokativ', 'vocative', 'Vokativ se odvaja zarezom.'],
      ['apozicija', 'apposition', 'Apozicija stoji između dvaju zareza.'],
      ['umetnuti dio', 'inserted phrase', 'Umetnuti dio odvaja se zarezima s obiju strana.'],
      ['uzvik', 'interjection', 'Uzvik joj izražava bol ili iznenađenje.'],
      ['pravopis', 'orthography', 'Hrvatski pravopis propisuje pravila pisanja zareza.'],
      ['interpunkcija', 'punctuation', 'Dobra interpunkcija olakšava čitanje.'],
    ],
  },

  'collective-plural': {
    worked: [
      {
        title: 'The Grandchildren Have Arrived',
        problem: 'Prevedi: "The grandchildren arrived yesterday and played in the garden."',
        en: 'The grandchildren arrived yesterday and played in the garden.',
        steps: [
          { label: 'The noun', text: 'All the grandchildren as one group: unučad.' },
          {
            label: 'Its gender and number',
            text: 'unučad is one feminine singular noun, whatever English says.',
          },
          {
            label: 'The verbs',
            text: 'Singular, with feminine participles: je stigla, igrala se.',
          },
        ],
        answer: 'Unučad je jučer stigla i igrala se u vrtu.',
      },
      {
        title: 'Two Teams',
        problem: 'Reci: "Two teams played in the final, and our team won."',
        en: 'Two teams played in the final, and our team won.',
        steps: [
          {
            label: 'Can it be counted?',
            text: 'momčad is the one -ad noun with a plural: dvije momčadi.',
          },
          { label: 'The first verb', text: 'dvije momčadi is plural: igrale su.' },
          {
            label: 'The second clause',
            text: 'naša momčad is one team, feminine singular: pobijedila je. No clitic can follow a directly, so naša comes first: a naša je momčad pobijedila.',
          },
        ],
        answer: 'U finalu su igrale dvije momčadi, a naša je momčad pobijedila.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Mala je mačad ___ mlijeko."',
          options: ['popila', 'popili', 'popilo', 'popio'],
          correct: 0,
          hint: 'One feminine singular noun.',
          explanation: 'mačad — feminine singular: popila.',
        },
        {
          q: 'Which noun is the collective of "tele"?',
          options: ['telići', 'telad', 'teleta', 'telež'],
          correct: 1,
          hint: 'The ending of the zbirna množina.',
          explanation: 'tele → telad.',
        },
        {
          q: 'Complete: "Seljak je kupio ___ telad."',
          options: ['mladi', 'mlade', 'mladu', 'mladom'],
          correct: 2,
          hint: 'Accusative, feminine singular.',
          explanation: 'mladu telad — the noun is unchanged, the adjective feminine accusative.',
        },
        {
          q: 'Complete: "Igra u jednoj od najboljih ___ u ligi."',
          options: ['momčadima', 'momčad', 'momčadi', 'momčadom'],
          correct: 2,
          hint: 'Genitive plural — this is the one -ad noun with a plural.',
          explanation: 'od najboljih momčadi — genitive plural.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Pilad su hranjeni kukuruzom.',
            'Pilad je hranjena kukuruzom.',
            'Pilad je hranjeno kukuruzom.',
            'Pilad je hranjen kukuruzom.',
          ],
          correct: 1,
          hint: 'Agreement as one feminine noun.',
          explanation: 'Pilad je hranjena — feminine singular.',
        },
        {
          q: 'Complete: "Socijalni radnik brine se o ___."',
          options: ['siročadu', 'siročadom', 'siročadi', 'siročad'],
          correct: 2,
          hint: 'Locative of a stvar-type noun.',
          explanation: 'o siročadi — locative in -i.',
        },
        {
          q: 'How do you count grandchildren?',
          options: ['dvije unučadi', 'dva unuka', 'dvoje unučad', 'dva unučada'],
          correct: 1,
          hint: 'The collective cannot be counted; use the countable noun.',
          explanation: 'dva unuka — the countable noun unuk.',
        },
        {
          q: 'Complete: "Novorođenčad je bila ___ cijelu noć."',
          options: ['mirni', 'mirno', 'mirna', 'mirne'],
          correct: 2,
          hint: 'The adjective agrees with one feminine noun.',
          explanation: 'mirna — feminine singular.',
        },
        {
          type: 'type',
          q: 'Naša je ____ pobijedila u finalu. (team)',
          answer: 'momčad',
          hint: 'The collective of the old momče, today simply "team".',
          explanation: 'momčad — a feminine -ad noun.',
        },
        {
          type: 'type',
          q: 'Unučad je jučer ____ na ručak. (came — past participle)',
          answer: 'došla',
          hint: 'Feminine singular of the participle of doći.',
          explanation: 'Unučad je došla.',
        },
        {
          type: 'type',
          q: 'Baka se cijeli dan igrala s ____. (the grandchildren — collective)',
          answer: 'unučadi',
          hint: 'Instrumental of a stvar-type noun, ending in -i.',
          explanation: 's unučadi — instrumental.',
        },
        {
          type: 'type',
          q: 'Na stadion su stigle sve ____. (teams)',
          answer: 'momčadi',
          hint: 'The plural of the one -ad noun that has one.',
          explanation: 'sve momčadi — nominative plural.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Štenad je cijelu noć ___."',
        options: ['lajali', 'lajala', 'lajalo', 'lajao'],
        correct: 1,
        explanation: 'štenad is feminine singular: lajala.',
      },
      {
        q: 'Which noun is the collective of "siroče"?',
        options: ['siročići', 'siročeta', 'siročad', 'siročevi'],
        correct: 2,
        explanation: 'siroče → siročad.',
      },
      {
        q: 'Complete: "U kojoj ___ igraš?"',
        options: ['momčadi', 'momčad', 'momčadu', 'momčadom'],
        correct: 0,
        explanation: 'Locative of a stvar-type noun: u kojoj momčadi.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Pačad su plivali za patkom.',
          'Pačad je plivalo za patkom.',
          'Pačad plivali su za patkom.',
          'Pačad je plivala za patkom.',
        ],
        correct: 3,
        explanation: 'One feminine singular noun: Pačad je plivala.',
      },
      {
        q: 'Complete: "Trener je ponosan na ___ momčad."',
        options: ['svojom', 'svoju', 'svojoj', 'svoje'],
        correct: 1,
        explanation: 'na + accusative, feminine singular: na svoju momčad.',
      },
      {
        q: 'Which -ad noun can stand in the plural?',
        options: ['telad', 'pilad', 'unučad', 'momčad'],
        correct: 3,
        explanation: 'Only momčad, because it also means one team.',
      },
    ],
    vocab: [
      ['momčad', 'team', 'Naša je momčad pobijedila.'],
      ['unučad', 'grandchildren', 'Unučad je došla na ručak.'],
      ['pilad', 'chicks', 'Pilad je hranjena kukuruzom.'],
      ['telad', 'calves', 'Telad je pasla na livadi.'],
      ['siročad', 'orphans', 'Brinu se o siročadi.'],
      ['mačad', 'kittens', 'Mačad je popila mlijeko.'],
      ['novorođenčad', 'newborns', 'Novorođenčad je spavala.'],
      ['perad', 'poultry', 'Za Božić se kod nas jede perad.'],
      ['zbirna množina', 'collective plural', 'Momčad je zbirna množina.'],
    ],
  },

  'temporal-locative-idioms': {
    worked: [
      {
        title: 'Accusative or Locative After u?',
        problem: 'Reci: "We got married in May, on a Saturday, at noon."',
        en: 'Say: We got married in May, on a Saturday, at noon.',
        steps: [
          {
            label: 'The month',
            text: 'A month is a period you are inside: u + locative, svibanj → u svibnju.',
          },
          {
            label: 'The day',
            text: 'A day of the week is a point: u + accusative, subota → u subotu.',
          },
          {
            label: 'The hour',
            text: 'Noon is a point as well: u + accusative; podne is neuter, so it does not change.',
          },
        ],
        answer: 'Vjenčali smo se u svibnju, u subotu, u podne.',
      },
      {
        title: 'Two Ways to Hurry',
        problem:
          'Prevedi: (a) He left in a hurry. (b) He ate quickly, standing up. (c) Luckily, he arrived on time.',
        en: 'Translate three sentences with fixed phrases of manner and time.',
        steps: [
          {
            label: 'In a hurry',
            text: 'u žurbi is a fixed locative.',
          },
          {
            label: 'In haste',
            text: 'na brzinu means much the same but is an accusative — brzinu, not brzini.',
          },
          {
            label: 'Luckily, on time',
            text: 'na sreću and na vrijeme are accusatives too; na sreću at the start is followed by a comma.',
          },
        ],
        answer:
          '(a) Otišao je u žurbi. (b) Jeo je na brzinu, stojeći. (c) Na sreću, stigao je na vrijeme.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "___ je živjela na selu." (In her childhood)',
          options: ['U djetinjstvo', 'U djetinjstvu', 'Na djetinjstvu', 'Po djetinjstvo'],
          correct: 1,
          hint: 'A stretch of life takes u with the locative.',
          explanation: 'U djetinjstvu — the locative of djetinjstvo.',
        },
        {
          q: 'Complete: "Javi se ___." (on your return)',
          options: ['po povratku', 'po povratak', 'pri povratak', 'u povratak'],
          correct: 0,
          hint: 'A formal "upon", with the locative.',
          explanation: 'po povratku — upon return.',
        },
        {
          q: 'Which phrase means "in the 20th century"?',
          options: ['u 20. stoljeće', 'u 20. stoljeću', 'na 20. stoljeću', 'po 20. stoljeću'],
          correct: 1,
          hint: 'Centuries take u with the locative.',
          explanation: 'u 20. stoljeću — read u dvadesetom stoljeću.',
        },
        {
          q: 'Complete: "Je li sve ___?" (all right)',
          options: ['u red', 'u redu', 'po redu', 'u reda'],
          correct: 1,
          hint: 'A fixed phrase with u and the locative of red.',
          explanation: 'u redu — all right.',
        },
        {
          q: 'Which phrase is in the accusative?',
          options: ['na brzinu', 'u žurbi', 'na kraju', 'u kvaru'],
          correct: 0,
          hint: 'Compare each noun with its locative form.',
          explanation: 'na brzinu — the locative would be brzini.',
        },
        {
          q: 'Complete: "Lift je opet ___." (out of order)',
          options: ['u kvar', 'na kvaru', 'u kvaru', 'po kvaru'],
          correct: 2,
          hint: 'A fixed phrase with u and the locative.',
          explanation: 'u kvaru — out of order.',
        },
        {
          q: 'Complete: "___ smo se ipak pomirili." (In the end)',
          options: ['Na kraj', 'U kraj', 'Po kraju', 'Na kraju'],
          correct: 3,
          hint: 'na with the locative of kraj.',
          explanation: 'Na kraju — in the end.',
        },
        {
          q: 'Complete: "On je ___ kao dobar majstor." (known)',
          options: ['na glasu', 'na glas', 'u glasu', 'po glasu'],
          correct: 0,
          hint: 'A fixed phrase with na and the locative of glas.',
          explanation: 'biti na glasu kao — to be known as.',
        },
        {
          type: 'type',
          q: 'Ti si bio u ____, a ja nisam. (right)',
          answer: 'pravu',
          hint: 'The locative of pravo.',
          explanation: 'biti u pravu — to be right.',
        },
        {
          type: 'type',
          q: 'Stigli smo točno na ____. (time)',
          answer: 'vrijeme',
          hint: 'An accusative; for this neuter noun it looks like the nominative.',
          explanation: 'na vrijeme — on time.',
        },
        {
          type: 'type',
          q: 'Rođena je u ____. (May — svibanj)',
          answer: 'svibnju',
          hint: 'Months take the locative, and the a of the stem drops.',
          explanation: 'u svibnju.',
        },
        {
          type: 'type',
          q: 'Izašla je u ____ i zaboravila ključeve. (a hurry)',
          answer: 'žurbi',
          hint: 'The locative of žurba.',
          explanation: 'u žurbi — in a hurry.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ su ljudi živjeli skromnije." (In the past)',
        options: ['U prošlost', 'U prošlosti', 'Na prošlosti', 'Po prošlost'],
        correct: 1,
        explanation: 'A period: u + locative.',
      },
      {
        q: 'Complete: "Sove love ___." (at night — with a preposition)',
        options: ['po noći', 'po noć', 'na noći', 'pri noć'],
        correct: 0,
        explanation: 'po + locative: po noći. noću is equally standard.',
      },
      {
        q: 'What does "Sve je u redu" mean?',
        options: [
          'Everything is in a queue.',
          'Everything is in a hurry.',
          'Everything is all right.',
          'Everything is at the end.',
        ],
        correct: 2,
        explanation: 'u redu — all right.',
      },
      {
        q: 'Which phrase means "in a hurry" and is in the locative?',
        options: ['na brzinu', 'u žurbi', 'na vrijeme', 'u to vrijeme'],
        correct: 1,
        explanation: 'u žurbi is a locative; na brzinu means "in haste" but is an accusative.',
      },
      {
        q: 'Complete: "Zakon je ___ od siječnja." (in force)',
        options: ['na snagu', 'u snazi', 'po snazi', 'na snazi'],
        correct: 3,
        explanation: 'na snazi — in force.',
      },
      {
        q: 'Complete: "Pri ___ utakmice pala je kiša." (near the end)',
        options: ['kraju', 'kraj', 'kraja', 'krajem'],
        correct: 0,
        explanation: 'pri + locative: pri kraju.',
      },
    ],
    vocab: [
      ['prošlost', 'the past', 'U prošlosti je ovdje bila tvornica.'],
      ['mladost', 'youth', 'U mladosti je puno putovao.'],
      ['stoljeće', 'century', 'Crkva je sagrađena u 15. stoljeću.'],
      ['po povratku', 'upon return', 'Po povratku me nazovi.'],
      ['biti u pravu', 'to be right', 'Bila si u pravu.'],
      ['biti na glasu', 'to have a reputation', 'Taj je liječnik na glasu kao stručnjak.'],
      ['u žurbi', 'in a hurry', 'Izašao je u žurbi.'],
      ['na snazi', 'in force', 'Zakon je na snazi od siječnja.'],
      ['u kvaru', 'out of order', 'Lift je u kvaru.'],
    ],
  },
};
