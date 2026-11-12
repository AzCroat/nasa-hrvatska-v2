// functions/api/content/_data/b1new/batch02.js
//
// New B1 lessons, batch 02 (Croaticum restructure, stage 4, 2026-11-12). See b1new/index.js.
//
// Five lessons from Razgovarajte s nama! A2-B1, lessons 7 and 8:
//   instrumental-adjectives (14) · verbs-with-instrumental (15) · job-application (17)
//   · satisfaction-disappointment (18) · genitive-adjectives (22)
// Nothing here uses grammar the learner has not met: adjectives in the genitive appear
// only from lesson 22 on; no koji-clauses, no indefinite pronouns, no future II.
// Drill banks for each lesson live in src/data/drills/b1/.

// ─────────────────────────────────────────────────────────────────────────────
// 14 · instrumental-adjectives — s mojim starim prijateljem, s tom ženom, -im plural
// ─────────────────────────────────────────────────────────────────────────────
const L_INSTRUMENTAL_ADJECTIVES = {
  id: 'instrumental-adjectives',
  title: 'S mojim starim prijateljem — Adjectives in the Instrumental',
  subtitle: 'With whom, with what: every word in front of the noun follows it',
  icon: '🤝',
  level: 'B1',
  duration: '~7 min',
  color: '#0f766e',
  bg: '#f0fdfa',
  slides: [
    {
      type: 'intro',
      title: 'Not Just "With a Friend"',
      body: 'You can already say s prijateljem (with a friend), autom (by car) and pred kućom (in front of the house). But real sentences say WHICH friend and WHOSE house: with my old friend, in front of our new house, with that kind woman. In the instrumental case — the case of "with whom" and "by what" — every adjective, every "this" and "that" and every "my" in front of the noun follows it. There are only two endings to learn, and one of them you already know from the noun.',
      icon: '🤝',
    },
    {
      type: 'rule',
      title: 'Masculine and Neuter: -im',
      body: 'In front of a masculine or neuter noun in the instrumental, the adjective ends in -im: star → sa starim prijateljem (with an old friend), nov → s novim autom (with a new car), topao → s toplim mlijekom (with warm milk). Unlike the locative, a soft stem changes nothing here: naš → s našim susjedom, vruć → s vrućim čajem. It is -im every time.',
      highlight: 'sa starim prijateljem',
    },
    {
      type: 'rule',
      title: 'Feminine: -om',
      body: 'In front of a feminine noun the adjective ends in -om — the same ending the noun itself takes: mlada → s mladom ženom, velika → s velikom torbom, naša → s našom učiteljicom, svježa → sa svježom ribom. So in the feminine both words rhyme: crvenom olovkom (with a red pencil).',
      highlight: 's mladom ženom',
    },
    {
      type: 'rule',
      title: 'This, That, My, Your',
      body: 'Demonstratives and possessives take the same two endings. Taj → s tim čovjekom, s tom ženom. Ovaj → ovim, ovom. Onaj → onim, onom. Moj → s mojim bratom, s mojom sestrom; tvoj the same. Naš, vaš → s našim, s našom. Njegov, njezin, njihov → s njegovim, s njezinom, s njihovim. Watch the small word s: it becomes sa in front of s, z, š and ž, so it is sa svojim, sa starim, sa ženom — but s mojim, s tim, s našom.',
      highlight: 's tim čovjekom, s tom ženom',
    },
    {
      type: 'rule',
      title: 'Svoj: Your Own',
      body: 'Svoj points back at the subject of the sentence and declines like moj: Marko ide na more sa svojom djevojkom — with HIS OWN girlfriend. Marko ide na more s njegovom djevojkom would mean some other man’s girlfriend. With ja, ti, mi and vi both are fine (Idem s mojim bratom / sa svojim bratom), but with on, ona and oni the difference changes the meaning.',
      highlight: 'sa svojom djevojkom',
    },
    {
      type: 'rule',
      title: 'The Plural: -im for Every Gender',
      body: 'In the plural, every adjective in the instrumental ends in -im, whatever the gender: s mojim starim prijateljima, s našim novim susjedama, pred tim visokim zgradama. Masculine singular and every plural share -im, and the noun tells them apart: s mojim prijateljem (one friend), s mojim prijateljima (friends).',
      highlight: 's mojim starim prijateljima',
    },
    {
      type: 'table',
      title: 'The Instrumental Endings at a Glance',
      headers: ['Word', 'masc. / neut.', 'feminine', 'plural (all)'],
      rows: [
        ['star (old)', 'starim', 'starom', 'starim'],
        ['vruć (hot)', 'vrućim', 'vrućom', 'vrućim'],
        ['taj / ta / to', 'tim', 'tom', 'tim'],
        ['ovaj', 'ovim', 'ovom', 'ovim'],
        ['onaj', 'onim', 'onom', 'onim'],
        ['moj', 'mojim', 'mojom', 'mojim'],
        ['svoj', 'svojim', 'svojom', 'svojim'],
        ['naš', 'našim', 'našom', 'našim'],
        ['njegov', 'njegovim', 'njegovom', 'njegovim'],
        ['njezin', 'njezinim', 'njezinom', 'njezinim'],
      ],
    },
    {
      type: 'rule',
      title: 'Where You Meet These Forms',
      body: 'Everywhere the instrumental appears. Company with s/sa: s našim novim susjedom. The means, with no preposition: Putujem noćnim vlakom. Pišem crvenom olovkom. The place words pred, za, nad, pod and među: pred našom zgradom, pod onim starim stolom. Do not mix this up with the locative you learned in A2: u velikom gradu is WHERE (locative), s velikim psom is WITH WHOM (instrumental).',
      highlight: 'Putujem noćnim vlakom.',
    },
    {
      type: 'example',
      title: 'Company: With Whom?',
      items: [
        {
          hr: 'Ljeto provodim sa svojim starim prijateljem iz škole.',
          en: 'I spend the summer with my old friend from school.',
          note: 'svojim starim — masculine -im; s becomes sa before svojim',
        },
        {
          hr: 'Ana je došla na zabavu s novom kolegicom.',
          en: 'Ana came to the party with a new colleague.',
          note: 'novom — feminine -om, like kolegicom',
        },
        {
          hr: 'Razgovarao sam s tom ljubaznom ženom na šalteru.',
          en: 'I talked to that kind woman at the counter.',
          note: 'tom ljubaznom — feminine -om',
        },
        {
          hr: 'Moj brat živi s našim djedom u Splitu.',
          en: 'My brother lives with our grandfather in Split.',
          note: 'našim — -im, even though naš has a soft stem',
        },
        {
          hr: 'Marko ide na more sa svojom djevojkom.',
          en: 'Marko is going to the seaside with his girlfriend.',
          note: 'svojom — his own; points back at Marko',
        },
        {
          hr: 'Ljeti se družimo s našim novim susjedima.',
          en: 'In summer we spend time with our new neighbours.',
          note: 'našim novim — the plural -im',
        },
      ],
    },
    {
      type: 'example',
      title: 'Means and Place',
      items: [
        {
          hr: 'Najradije putujem tim malim žutim autobusom.',
          en: 'I most like travelling on that little yellow bus.',
          note: 'tim malim žutim — the means, masculine -im, no preposition',
        },
        {
          hr: 'Pišem pismo crvenom olovkom.',
          en: 'I am writing the letter with a red pencil.',
          note: 'crvenom — feminine -om, the tool',
        },
        {
          hr: 'Volim kavu s toplim mlijekom.',
          en: 'I like coffee with warm milk.',
          note: 'toplim — mlijeko is neuter, so -im',
        },
        {
          hr: 'Djeca se igraju pred našom zgradom.',
          en: 'The children play in front of our building.',
          note: 'našom — feminine -om after pred',
        },
        {
          hr: 'Mačka spava pod onim starim stolom.',
          en: 'The cat sleeps under that old table.',
          note: 'onim starim — masculine -im after pod',
        },
        {
          hr: 'Kći je otišla na izlet sa svojim prijateljicama.',
          en: 'My daughter went on a trip with her friends.',
          note: 'svojim — the plural -im, even with a feminine noun',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Idem u kino s ___ sestrom." (my)',
      options: ['mojom', 'mojim', 'mojoj', 'moja'],
      correct: 0,
      explanation:
        'Sestra is feminine, so in the instrumental the possessive takes -om: s mojom sestrom. Mojoj is the dative or locative.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which phrase means "with my old friend" (a man)?',
      options: [
        's mojom starom prijateljem',
        's mojem starem prijateljem',
        's mojim starim prijateljem',
        's moj stari prijatelj',
      ],
      correct: 2,
      explanation:
        'Prijatelj is masculine: both words in front of it end in -im. -em belongs to the locative, -om to the feminine.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Giving a masculine noun the feminine ending: "s mojom bratom" — the possessive follows the noun’s gender, s mojim bratom. (2) Bringing in the locative endings you learned last: "s mojem prijateljem", "s velikoj torbom" — the instrumental has only -im and -om: s mojim prijateljem, s velikom torbom. (3) Leaving the adjective in the nominative after s: "s moj stari prijatelj" — s governs every word of the phrase: s mojim starim prijateljem.',
      highlight: 's mojim starim prijateljem',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Razgovarao sam s ___ profesorom." (that)',
          options: ['tom', 'tim', 'toj', 'taj'],
          correct: 1,
          explanation:
            'Profesor is masculine: taj becomes tim. Tom is the feminine instrumental (or the masculine locative).',
        },
        {
          q: 'Complete: "Ivana putuje ___ sestrom." (with her own)',
          options: ['sa svojom', 'sa svojim', 'sa svoja', 'sa svojoj'],
          correct: 0,
          explanation: 'Sestra is feminine, and svoj points back at Ivana: sa svojom sestrom.',
        },
        {
          q: 'Complete: "Djeca se igraju pred ___ kućom." (our)',
          options: ['našem', 'našoj', 'našom', 'našim'],
          correct: 2,
          explanation: 'Pred takes the instrumental; kuća is feminine, so naš → našom.',
        },
        {
          q: 'Complete: "Ljeto provodimo s ___ prijateljima." (our old)',
          options: ['našim starom', 'naših starih', 'našem starem', 'našim starim'],
          correct: 3,
          explanation:
            'In the instrumental plural every adjective ends in -im: s našim starim prijateljima.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Volim čaj s toplom mlijekom.',
            'Volim čaj s toplim mlijekom.',
            'Volim čaj s toplem mlijekom.',
            'Volim čaj s topli mlijekom.',
          ],
          correct: 1,
          explanation: 'Mlijeko is neuter, and neuter takes -im: s toplim mlijekom.',
        },
        {
          q: 'Complete: "Putujem ___ autobusom." (this blue)',
          options: ['ovom plavom', 'ovim plavom', 'ovim plavim', 'ovoj plavoj'],
          correct: 2,
          explanation:
            'Autobus is masculine and here it is the means: both words take -im — ovim plavim autobusom.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Adjectives in the Instrumental — Key Takeaways',
      points: [
        'Masculine and neuter: -im — s novim autom, s toplim mlijekom',
        'Feminine: -om — s mladom ženom, crvenom olovkom',
        'Plural, every gender: -im — s mojim prijateljima, s našim susjedama',
        'taj → tim / tom, ovaj → ovim / ovom, moj → mojim / mojom',
        'svoj points back at the subject: Marko je sa svojom djevojkom',
        'sa before s, z, š, ž: sa svojim, sa starim — otherwise s',
      ],
    },
  ],
};

const P_INSTRUMENTAL_ADJECTIVES = {
  worked: [
    {
      title: 'Company, With Two Adjectives',
      problem: 'Prevedi: "I am going to the seaside with my younger brother."',
      en: 'I am going to the seaside with my younger brother.',
      steps: [
        {
          label: 'Which case?',
          text: 'A person you are with takes s/sa and the instrumental. Brat is masculine: bratom.',
        },
        {
          label: 'The words in front',
          text: 'Masculine in the instrumental means -im on every word in front: svoj → svojim, mlađi → mlađim. (Mojim is also correct, because the subject is ja.)',
        },
        {
          label: 'S or sa?',
          text: 'The next word, svojim, begins with s, so the preposition becomes sa.',
        },
      ],
      answer: 'Idem na more sa svojim mlađim bratom.',
    },
    {
      title: 'A Place Word With a Feminine Noun',
      problem: 'Prevedi: "We are sitting in front of that big white building."',
      en: 'We are sitting in front of that big white building.',
      steps: [
        {
          label: 'Which case?',
          text: 'Pred (in front of) takes the instrumental. Zgrada is feminine: zgradom.',
        },
        {
          label: 'The words in front',
          text: 'Feminine in the instrumental means -om on every word: ta → tom, velika → velikom, bijela → bijelom.',
        },
        {
          label: 'The verb',
          text: 'We are sitting is sjedimo, the mi form of sjediti.',
        },
      ],
      answer: 'Sjedimo pred tom velikom bijelom zgradom.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Idem u grad s ___ prijateljicom. (my new)',
        options: ['mojom novom', 'mojim novim', 'mojoj novoj', 'moja nova'],
        correct: 0,
        hint: 'Prijateljica is feminine; in the instrumental the feminine words rhyme with the noun.',
        explanation: 's mojom novom prijateljicom — feminine -om on both words.',
      },
      {
        q: 'Razgovaram s ___ čovjekom. (that tall)',
        options: ['tom visokom', 'tim visokim', 'toj visokoj', 'taj visoki'],
        correct: 1,
        hint: 'Čovjek is masculine: every word in front of it takes the masculine instrumental ending.',
        explanation: 's tim visokim čovjekom — -im on both words.',
      },
      {
        q: 'Kava s ___ mlijekom, molim. (cold)',
        options: ['hladnom', 'hladnoj', 'hladnim', 'hladnog'],
        correct: 2,
        hint: 'Mlijeko is neuter, and neuter shares its ending with the masculine.',
        explanation: 's hladnim mlijekom. Hladnom would be the locative or the feminine.',
      },
      {
        q: 'Putujemo ___ vlakom. (the night)',
        options: ['noćnom', 'noćnim', 'noćnem', 'noćni'],
        correct: 1,
        hint: 'The train is the means; vlak is masculine.',
        explanation: 'noćnim vlakom — masculine -im, and no preposition for a means.',
      },
      {
        q: 'Ona živi sa ___ roditeljima. (her own)',
        options: ['svojim', 'svojom', 'svojih', 'svoje'],
        correct: 0,
        hint: 'Roditelji is plural; the plural instrumental has one ending for every gender.',
        explanation: 'sa svojim roditeljima — the plural -im.',
      },
      {
        q: 'Mačka je pod ___ autom. (our)',
        options: ['našom', 'našim', 'našem', 'naših'],
        correct: 1,
        hint: 'Pod takes the instrumental; auto is masculine.',
        explanation: 'pod našim autom — masculine -im, soft stem or not.',
      },
      {
        q: 'Dobro se slažem s ___ kolegicama. (my new)',
        options: ['mojom novom', 'mojim novim', 'mojih novih', 'mojoj novoj'],
        correct: 1,
        hint: 'Kolegicama is plural, and in the plural the feminine does not keep its singular ending.',
        explanation: 's mojim novim kolegicama — the plural -im for every gender.',
      },
      {
        q: 'Pišemo ___ olovkama. (these green)',
        options: ['ovom zelenom', 'ovih zelenih', 'ove zelene', 'ovim zelenim'],
        correct: 3,
        hint: 'Olovkama is a plural instrumental: one ending for every word in front of it.',
        explanation: 'ovim zelenim olovkama — the plural -im.',
      },
      {
        type: 'type',
        q: 'Sjedim s ____ sestrom. (my younger)',
        answer: 'mojom mlađom',
        accept: ['svojom mlađom'],
        hint: 'Sestra is feminine, so both words take the feminine instrumental ending.',
        explanation: 's mojom mlađom sestrom — -om on both words.',
      },
      {
        type: 'type',
        q: 'Igram tenis s ____ prijateljem. (my old)',
        answer: 'mojim starim',
        accept: ['svojim starim'],
        hint: 'Prijatelj is masculine: -im on both words.',
        explanation: 's mojim starim prijateljem.',
      },
      {
        type: 'type',
        q: 'Djeca trče pred ____ školom. (that new)',
        answer: 'tom novom',
        hint: 'Škola is feminine; ta and nova both take the feminine instrumental.',
        explanation: 'pred tom novom školom.',
      },
      {
        type: 'type',
        q: 'Ljeto provodimo s ____ susjedima. (our kind)',
        answer: 'našim ljubaznim',
        accept: ['svojim ljubaznim', 'našim dobrim', 'svojim dobrim'],
        hint: 'Susjedima is plural: the same ending on both words, whatever the gender.',
        explanation: 's našim ljubaznim susjedima — the plural -im.',
      },
      {
        type: 'type',
        q: 'Idem na posao ____ autom. (my own)',
        answer: 'svojim',
        accept: ['mojim'],
        hint: 'The car is the means; auto is masculine, and the possessive points back at ja.',
        explanation: 'svojim autom (mojim autom is also correct with ja).',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Kava je sa ___ šećerom." (brown)',
      options: ['smeđom', 'smeđim', 'smeđem', 'smeđi'],
      correct: 1,
      explanation: 'Šećer is masculine: smeđim šećerom. -em belongs to the locative.',
    },
    {
      q: 'Complete: "Marko živi sa ___ bakom." (his own)',
      options: ['svojom', 'svojim', 'svoju', 'svojoj'],
      correct: 0,
      explanation: 'Baka is feminine and svoj points back at Marko: sa svojom bakom.',
    },
    {
      q: 'Complete: "Mačka spava pod ___ stolom." (that old)',
      options: ['onom starom', 'onoj staroj', 'onim starim', 'onaj stari'],
      correct: 2,
      explanation: 'Stol is masculine: onim starim stolom.',
    },
    {
      q: 'Complete: "Upoznala sam se s ___ susjedama." (your new)',
      options: ['tvojom novom', 'tvojih novih', 'tvojoj novoj', 'tvojim novim'],
      correct: 3,
      explanation: 'Susjedama is plural: every word in front takes -im — s tvojim novim susjedama.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Idem u kino s mojom bratom.',
        'Idem u kino s mojim bratom.',
        'Idem u kino s mojem bratom.',
        'Idem u kino s moj brat.',
      ],
      correct: 1,
      explanation: 'Brat is masculine: s mojim bratom.',
    },
    {
      q: 'Complete: "Pišem ___ olovkom." (this red)',
      options: ['ovim crvenim', 'ovom crvenom', 'ovoj crvenoj', 'ova crvena'],
      correct: 1,
      explanation: 'Olovka is feminine and it is the tool: ovom crvenom olovkom.',
    },
  ],
  vocab: [
    ['prijateljica', 'friend (a woman)', 'Idem u kino s novom prijateljicom.'],
    ['susjed', 'neighbour', 'Družimo se s našim novim susjedom.'],
    ['zgrada', 'building', 'Djeca se igraju pred našom zgradom.'],
    ['olovka', 'pencil', 'Pišem crvenom olovkom.'],
    ['družiti se', 'to spend time (with someone)', 'Družim se sa starim prijateljima.'],
    ['provoditi', 'to spend (time)', 'Ljeto provodim sa svojim bratom.'],
    ['ljubazan', 'kind, friendly', 'Razgovarao sam s ljubaznom ženom.'],
    ['mlađi', 'younger', 'Idem na more s mlađim bratom.'],
    ['pred', 'in front of', 'Čekam te pred tom zgradom.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 15 · verbs-with-instrumental — baviti se, služiti se, ponositi se, upravljati;
//      zadovoljan / oduševljen + instr.; the present of čuti (čujem)
// ─────────────────────────────────────────────────────────────────────────────
const L_VERBS_WITH_INSTRUMENTAL = {
  id: 'verbs-with-instrumental',
  title: 'Čime se baviš? — Verbs That Take the Instrumental',
  subtitle: 'What you do, what you use, what you are proud of — and the present of čuti',
  icon: '🧰',
  level: 'B1',
  duration: '~7 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'The Question Every Croatian Asks',
      body: 'Meet someone new in Croatia and you will soon hear: Čime se baviš? — What do you do? Čime is the instrumental of što, and the answer comes in the instrumental too: Bavim se glazbom. A small group of verbs and adjectives take the instrumental directly, with no preposition at all. They are among the most useful words for talking about work, skills and feelings.',
      icon: '🧰',
    },
    {
      type: 'rule',
      title: 'Baviti se: to Do, to Be Occupied With',
      body: 'Baviti se (bavim se, baviš se…) says what you spend your time on — a job, a sport, a hobby: Bavim se sportom. Moj otac se bavi poljoprivredom (farming). Sestra se bavi fotografijom. The question is Čime se baviš? to a friend and Čime se bavite? to a stranger. The thing you do goes straight into the instrumental.',
      highlight: 'Bavim se glazbom.',
    },
    {
      type: 'rule',
      title: 'Služiti se: to Use',
      body: 'Služiti se (služim se) means to use or to handle: Svaki dan se služim računalom. Služite li se engleskim jezikom? — Do you speak English? (literally, do you use it). Croatian has a second verb for "to use", koristiti, and that one takes the accusative: Koristim računalo. Same meaning, different case — the verb decides.',
      highlight: 'Služim se računalom. / Koristim računalo.',
    },
    {
      type: 'rule',
      title: 'Ponositi se, Hvaliti se, Upravljati',
      body: 'Ponositi se (ponosim se) — to be proud of: Baka se ponosi svojim unucima. Hvaliti se (hvalim se) — to boast about: Stalno se hvali novim autom. Upravljati (upravljam) — to run, to manage, to steer: Ana upravlja malom tvrtkom. Tko upravlja ovim brodom? Note that the adjective ponosan works differently: it takes na + the accusative — Ponosna sam na svoju djecu.',
      highlight: 'Ponosim se svojim sinom. / Ponosan sam na svojeg sina.',
    },
    {
      type: 'rule',
      title: 'Adjectives That Take It: zadovoljan, oduševljen',
      body: 'Zadovoljan (satisfied, pleased) and oduševljen (thrilled, delighted) take the instrumental too: Zadovoljan sam svojim poslom. Oduševljena sam novim stanom. Their opposite nezadovoljan works the same way. The adjective itself agrees with the person who feels it: a man is zadovoljan, a woman zadovoljna, a group zadovoljni, a group of women zadovoljne.',
      highlight: 'Zadovoljan sam svojim poslom.',
    },
    {
      type: 'table',
      title: 'Verbs and Adjectives With the Instrumental',
      headers: ['Word', 'Meaning', 'Example'],
      rows: [
        ['baviti se', 'to do (as a job or hobby)', 'Bavim se fotografijom.'],
        ['služiti se', 'to use', 'Služim se računalom.'],
        ['ponositi se', 'to be proud of', 'Ponosim se svojom obitelji.'],
        ['hvaliti se', 'to boast about', 'Hvali se novim mobitelom.'],
        ['upravljati', 'to run, to steer', 'Upravlja velikom tvrtkom.'],
        ['zadovoljan', 'satisfied with', 'Zadovoljna sam rezultatom.'],
        ['oduševljen', 'thrilled with', 'Oduševljeni smo izletom.'],
      ],
    },
    {
      type: 'rule',
      title: 'A Present to Know: čuti → čujem',
      body: 'Čuti (to hear) puts a j into its present: čujem, čuješ, čuje, čujemo, čujete, čuju. Čuješ li me? — Can you hear me? A handful of short verbs follow the same pattern: piti (to drink) → pijem, šiti (to sew) → šijem, kriti (to hide) → krijem, obuti (to put on shoes) → obujem, izuti (to take off shoes) → izujem. The past still comes from the infinitive: čuo / čula, pio / pila, obuo / obula.',
      highlight: 'čuti → čujem',
    },
    {
      type: 'example',
      title: 'Work, Skills and Pride',
      items: [
        {
          hr: 'Čime se baviš? — Bavim se fotografijom i pomalo glazbom.',
          en: 'What do you do? — I do photography and a little music.',
          note: 'fotografijom, glazbom — instrumental after baviti se',
        },
        {
          hr: 'Moj otac se cijeli život bavi poljoprivredom.',
          en: 'My father has worked in farming all his life.',
          note: 'poljoprivredom — instrumental, no preposition',
        },
        {
          hr: 'Svaki dan se služim računalom i mobitelom.',
          en: 'Every day I use a computer and a mobile phone.',
          note: 'računalom, mobitelom — instrumental after služiti se',
        },
        {
          hr: 'Služite li se engleskim jezikom?',
          en: 'Do you speak English?',
          note: 'engleskim jezikom — masculine -im on the adjective',
        },
        {
          hr: 'Baka se ponosi svojim unucima.',
          en: 'Grandma is proud of her grandchildren.',
          note: 'svojim unucima — plural instrumental after ponositi se',
        },
        {
          hr: 'Ana upravlja malom obiteljskom tvrtkom.',
          en: 'Ana runs a small family company.',
          note: 'malom obiteljskom tvrtkom — feminine -om after upravljati',
        },
      ],
    },
    {
      type: 'example',
      title: 'Feelings and the Present of čuti',
      items: [
        {
          hr: 'Brat se stalno hvali svojim novim mobitelom.',
          en: 'My brother keeps boasting about his new mobile phone.',
          note: 'svojim novim mobitelom — instrumental after hvaliti se',
        },
        {
          hr: 'Jako sam zadovoljan svojim novim stanom.',
          en: 'I am very pleased with my new flat.',
          note: 'zadovoljan — a man speaking; stanom is instrumental',
        },
        {
          hr: 'Djeca su oduševljena velikim bazenom.',
          en: 'The children are thrilled with the big pool.',
          note: 'velikim bazenom — instrumental after oduševljen',
        },
        {
          hr: 'Ne čujem te dobro, nazovi me kasnije.',
          en: 'I can’t hear you well, call me later.',
          note: 'čujem — the ja form of čuti',
        },
        {
          hr: 'Ujutro pijem kavu, a navečer čaj.',
          en: 'In the morning I drink coffee, and in the evening tea.',
          note: 'pijem — the ja form of piti, same pattern as čujem',
        },
        {
          hr: 'Brzo obujem cipele i izađem iz kuće.',
          en: 'I quickly put on my shoes and go out of the house.',
          note: 'obujem — the ja form of obuti',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Čime se baviš?" — "Bavim se ___." (photography)',
      options: ['fotografijom', 'fotografiju', 'fotografija', 'fotografiji'],
      correct: 0,
      explanation:
        'Baviti se takes the instrumental with no preposition: fotografija → fotografijom.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which is the mi form of čuti?',
      options: ['čuemo', 'čujemo', 'čujimo', 'čuvamo'],
      correct: 1,
      explanation:
        'Čuti puts a j into the present: čujem, čuješ, čuje, čujemo. Čuvamo is a different verb (čuvati, to keep).',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Putting a preposition in front: "Bavim se sa sportom" — these verbs need no preposition at all: Bavim se sportom. (2) Using the accusative because English says "use something": "Služim se računalo" — with služiti se it is računalom; the accusative belongs to koristiti (Koristim računalo). (3) Leaving the thing in the nominative after zadovoljan: "Zadovoljan sam moj posao" — say Zadovoljan sam svojim poslom. And for the present of čuti, keep the j: čujem, never "čuem".',
      highlight: 'Zadovoljan sam svojim poslom.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Moja sestra se bavi ___." (journalism)',
          options: ['novinarstvo', 'novinarstva', 'novinarstvom', 'novinarstvu'],
          correct: 2,
          explanation: 'Baviti se takes the instrumental: novinarstvo → novinarstvom.',
        },
        {
          q: 'Complete: "Služim se ___ svaki dan." (a computer)',
          options: ['računalom', 'računalo', 'računala', 'računalu'],
          correct: 0,
          explanation:
            'Služiti se takes the instrumental: računalom. Računalo would follow koristiti.',
        },
        {
          q: 'Complete: "Roditelji se ponose ___." (their own son)',
          options: ['svoj sin', 'svojeg sina', 'svojem sinu', 'svojim sinom'],
          correct: 3,
          explanation:
            'Ponositi se takes the instrumental: svojim sinom. The accusative svojeg sina goes with ponosan na.',
        },
        {
          q: 'Complete: "Jesi li zadovoljna ___?" (your new job)',
          options: [
            'tvoj novi posao',
            'tvojim novim poslom',
            'tvojem novom poslu',
            'tvoju novu poslu',
          ],
          correct: 1,
          explanation:
            'Zadovoljan takes the instrumental, and posao is masculine: tvojim novim poslom.',
        },
        {
          q: 'Complete: "Oni ___ glazbu kroz zid." (hear)',
          options: ['čuju', 'čuje', 'čujemo', 'čuvaju'],
          correct: 0,
          explanation: 'The oni form of čuti is čuju. Čuvaju is a different verb, "they keep".',
        },
        {
          q: 'Complete: "Tko ___ ovom tvrtkom?" (runs)',
          options: ['upravljam', 'upravljaju', 'upravlja', 'upravljati'],
          correct: 2,
          explanation:
            'Tko takes the on form: upravlja. The company is in the instrumental: ovom tvrtkom.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Verbs With the Instrumental — Key Takeaways',
      points: [
        'baviti se + instr.: Čime se baviš? — Bavim se glazbom',
        'služiti se + instr. (Služim se računalom) = koristiti + acc. (Koristim računalo)',
        'ponositi se, hvaliti se, upravljati + instr., with no preposition',
        'but ponosan na + acc.: Ponosna sam na svoju djecu',
        'zadovoljan, oduševljen + instr., agreeing with the speaker',
        'čuti → čujem, čuješ, čuju; piti → pijem; obuti → obujem',
      ],
    },
  ],
};

const P_VERBS_WITH_INSTRUMENTAL = {
  worked: [
    {
      title: 'Two Ways to Be Proud',
      problem: 'Prevedi: "Grandma is proud of her grandchildren."',
      en: 'Grandma is proud of her grandchildren.',
      steps: [
        {
          label: 'Choose the verb',
          text: 'To be proud of is ponositi se, and it takes the instrumental with no preposition.',
        },
        {
          label: 'The grandchildren',
          text: 'Unuci is the plural of unuk; in the instrumental plural it is unucima, and svoj (her own) becomes svojim.',
        },
        {
          label: 'Another way',
          text: 'With the adjective ponosan you need na + accusative instead: Baka je ponosna na svoje unuke. Both sentences are correct.',
        },
      ],
      answer: 'Baka se ponosi svojim unucima.',
    },
    {
      title: 'A Question With zadovoljan',
      problem: 'Prevedi, to a woman friend: "Are you happy with your new flat?"',
      en: 'Say to a woman friend: Are you happy with your new flat?',
      steps: [
        {
          label: 'The adjective',
          text: 'Happy with something is zadovoljan + instrumental. She is a woman, so zadovoljna.',
        },
        {
          label: 'The question',
          text: 'A yes–no question with biti: Jesi li …? and the adjective follows.',
        },
        {
          label: 'The flat',
          text: 'Stan is masculine: svojim novim stanom (tvojim novim stanom is also fine with ti).',
        },
      ],
      answer: 'Jesi li zadovoljna svojim novim stanom?',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Čime se ___? (do you do — to a friend)',
        options: ['baviš', 'bavim', 'bavi', 'bave'],
        correct: 0,
        hint: 'You are asking ti; the ti ending of this verb is -iš.',
        explanation: 'Čime se baviš? — the ti form.',
      },
      {
        q: 'On se bavi ___. (cooking)',
        options: ['kuhanje', 'kuhanjem', 'kuhanju', 'kuhanja'],
        correct: 1,
        hint: 'Kuhanje is neuter; baviti se wants the instrumental.',
        explanation: 'kuhanjem — the neuter instrumental -em.',
      },
      {
        q: 'Kako se služiš ovim ___? (mobile phone)',
        options: ['mobitel', 'mobitelu', 'mobitelom', 'mobitela'],
        correct: 2,
        hint: 'Ovim already shows the case: the noun has to match it.',
        explanation: 'ovim mobitelom — instrumental after služiti se.',
      },
      {
        q: 'Oni ___ cijeli razgovor. (hear)',
        options: ['čuje', 'čujemo', 'čuju', 'čuli'],
        correct: 2,
        hint: 'The present of čuti has a j; find the oni ending.',
        explanation: 'čuju — the oni form.',
      },
      {
        q: 'Ponosimo se ___ djecom. (our)',
        options: ['našim', 'našom', 'našoj', 'naših'],
        correct: 1,
        hint: 'Djeca declines like a feminine singular noun: djecom.',
        explanation: 'našom djecom — the feminine instrumental -om.',
      },
      {
        q: 'Zadovoljna sam ___ učiteljem. (my new)',
        options: ['mojim novim', 'mojom novom', 'mojem novom', 'moj novi'],
        correct: 0,
        hint: 'Učitelj is masculine: both words take the masculine instrumental.',
        explanation: 'mojim novim učiteljem.',
      },
      {
        q: 'Navečer ___ čaj. (we drink)',
        options: ['pijemo', 'pimo', 'pijamo', 'pijete'],
        correct: 0,
        hint: 'Piti behaves like čuti: a j appears before the ending.',
        explanation: 'pijemo — the mi form of piti.',
      },
      {
        q: 'Moji roditelji su ___ tvojim poklonom. (thrilled)',
        options: ['oduševljen', 'oduševljena', 'oduševljeni', 'oduševljene'],
        correct: 2,
        hint: 'The adjective agrees with roditelji — a masculine plural.',
        explanation: 'oduševljeni — masculine plural.',
      },
      {
        type: 'type',
        q: 'Moj djed se bavi ____. (fishing)',
        answer: 'ribolovom',
        hint: 'Ribolov is masculine; put it into the instrumental.',
        explanation: 'ribolovom — instrumental after baviti se.',
      },
      {
        type: 'type',
        q: 'Tko ____ ovim brodom? (steers)',
        answer: 'upravlja',
        hint: 'The verb means to run or to steer; tko takes the on form.',
        explanation: 'upravlja — on form of upravljati.',
      },
      {
        type: 'type',
        q: '____ li me? (can you hear — to a friend)',
        answer: 'čuješ',
        hint: 'The verb is čuti; its present has a j, and ti ends in -eš.',
        explanation: 'Čuješ li me? — the ti form.',
      },
      {
        type: 'type',
        q: 'Ne služim se ____. (a car)',
        answer: 'autom',
        hint: 'Auto is masculine, and služiti se wants the instrumental.',
        explanation: 'autom — instrumental after služiti se.',
      },
      {
        type: 'type',
        q: 'Jesi li zadovoljan ____? (your work — posao)',
        answer: 'svojim poslom',
        accept: ['tvojim poslom'],
        hint: 'Posao loses its a in the other cases; the possessive takes the masculine instrumental.',
        explanation: 'svojim poslom (tvojim poslom is also correct with ti).',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Čime se bavi tvoj brat?" — "Bavi se ___." (football)',
      options: ['nogomet', 'nogometom', 'nogometa', 'nogometu'],
      correct: 1,
      explanation: 'Baviti se + instrumental: nogometom.',
    },
    {
      q: 'Complete: "Djeca su oduševljena ___." (the new park)',
      options: ['novi park', 'novom parku', 'novim parkom', 'novom parkom'],
      correct: 2,
      explanation: 'Oduševljen + instrumental; park is masculine: novim parkom.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Ponosna sam na svojom kćeri.',
        'Ponosna sam na svoju kćer.',
        'Ponosna sam svoja kći.',
        'Ponosna sam na svoja kći.',
      ],
      correct: 1,
      explanation: 'The adjective ponosan takes na + accusative: na svoju kćer.',
    },
    {
      q: 'Complete: "Ujutro ___ kavu s mlijekom." (I drink)',
      options: ['pijem', 'pim', 'pijim', 'pijam'],
      correct: 0,
      explanation: 'Piti → pijem, like čuti → čujem.',
    },
    {
      q: 'Complete: "Služite li se ___?" (English)',
      options: ['engleski jezik', 'engleskom jeziku', 'engleskom jezikom', 'engleskim jezikom'],
      correct: 3,
      explanation: 'Služiti se + instrumental; jezik is masculine, so -im on the adjective.',
    },
    {
      q: 'Complete: "Nisam zadovoljan ___." (this result)',
      options: ['ovim rezultatom', 'ovaj rezultat', 'ovom rezultatu', 'ovom rezultatom'],
      correct: 0,
      explanation: 'Zadovoljan + instrumental; rezultat is masculine: ovim rezultatom.',
    },
  ],
  vocab: [
    ['baviti se', 'to do (as a job or hobby)', 'Čime se baviš? Bavim se glazbom.'],
    ['služiti se', 'to use', 'Služim se računalom svaki dan.'],
    ['ponositi se', 'to be proud of', 'Baka se ponosi svojim unucima.'],
    ['hvaliti se', 'to boast about', 'Stalno se hvali novim autom.'],
    ['upravljati', 'to run, to manage, to steer', 'Ana upravlja malom tvrtkom.'],
    ['zadovoljan', 'satisfied, pleased', 'Zadovoljan sam svojim poslom.'],
    ['oduševljen', 'thrilled, delighted', 'Oduševljena sam novim stanom.'],
    ['čuti', 'to hear', 'Ne čujem te dobro.'],
    ['obuti', 'to put on (shoes)', 'Obujem cipele i izađem.'],
    ['tvrtka', 'company, firm', 'Radim u maloj tvrtki.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 17 · job-application — the written application letter
// ─────────────────────────────────────────────────────────────────────────────
const L_JOB_APPLICATION = {
  id: 'job-application',
  title: 'Prijava na natječaj — Writing a Job Application',
  subtitle: 'Poštovani, javljam se na… S poštovanjem: the formal letter, line by line',
  icon: '📝',
  level: 'B1',
  duration: '~7 min',
  color: '#1d4ed8',
  bg: '#eff6ff',
  slides: [
    {
      type: 'intro',
      title: 'A Letter With Fixed Rules',
      body: 'In Croatia a job usually starts with a written application: a molba (or zamolba) za posao, or a prijava na natječaj when the post is advertised publicly. It is short, formal and built from a set of fixed phrases. Learn the frame once — the greeting, the opening sentence, the closing lines — and you only have to fill in your own story in the middle.',
      icon: '📝',
    },
    {
      type: 'table',
      title: 'The Parts of the Letter',
      headers: ['Part', 'What goes there', 'Example'],
      rows: [
        [
          'your details',
          'ime i prezime, adresa, broj mobitela, e-mail',
          'Ivana Horvat, Ilica 10, Zagreb',
        ],
        ['place and date', 'mjesto i datum', 'U Zagrebu, 12. studenoga 2026.'],
        ['subject line', 'Predmet:', 'Predmet: Prijava na natječaj za radno mjesto prodavača'],
        ['greeting', 'Poštovani / Poštovana …,', 'Poštovana gospođo Kovač,'],
        ['opening', 'why you are writing', 'Javljam se na Vaš natječaj za …'],
        [
          'body',
          'education, experience, skills, motivation',
          'Imam tri godine iskustva u prodaji.',
        ],
        ['closing', 'attachments, availability, hope', 'U prilogu šaljem životopis.'],
        ['sign-off', 'S poštovanjem, + your name', 'S poštovanjem, Ivana Horvat'],
      ],
    },
    {
      type: 'rule',
      title: 'The Greeting',
      body: 'Poštovani, on its own is the safe neutral greeting when you do not know who will read the letter. If you know the name, use the vocative you learned in A1: Poštovani gospodine Babiću, (Babić → Babiću). A woman’s surname does not change: Poštovana gospođo Kovač. Dragi and draga belong to personal letters, not to an application.',
      highlight: 'Poštovani gospodine Babiću,',
    },
    {
      type: 'rule',
      title: 'Vi With a Capital V',
      body: 'In a letter to one person, Croatians usually write the polite pronoun with a capital letter: Vi, Vam, Vaš, Vašoj. It is a courtesy rather than a rule of grammar, and you will see letters written either way — but in an application the capital is the polite choice.',
      highlight: 'Vaš natječaj',
    },
    {
      type: 'rule',
      title: 'The Opening Sentence',
      body: 'Javljati se na (to respond to, to apply for) takes the accusative: Javljam se na Vaš natječaj. The post is radno mjesto, and the job title after it goes into the genitive: radno mjesto prodavača (of a shop assistant), konobara (of a waiter), vozača (of a driver), kuhara (of a cook). Together: Javljam se na Vaš natječaj za radno mjesto prodavača.',
      highlight: 'Javljam se na Vaš natječaj za radno mjesto prodavača.',
    },
    {
      type: 'rule',
      title: 'Education, Experience, Skills',
      body: 'Your past is told in the past tense, and every participle shows whether you are a man or a woman: Završio / Završila sam srednju ekonomsku školu. Radio / Radila sam dvije godine kao prodavač / prodavačica. Experience is counted with the genitive: Imam tri godine iskustva. And skills use the instrumental verbs from the last lessons: Dobro se služim računalom. Služim se engleskim i njemačkim jezikom.',
      highlight: 'Dobro se služim računalom.',
    },
    {
      type: 'rule',
      title: 'Why You — Politely, With the Conditional',
      body: 'The conditional you know from A2 is what makes a request sound polite: Želio / Željela bih raditi u Vašoj tvrtki jer volim rad s ljudima. Mogao / Mogla bih početi raditi od 1. prosinca. A reason with jer makes the motivation believable — one or two sentences are enough.',
      highlight: 'Željela bih raditi u Vašoj tvrtki',
    },
    {
      type: 'rule',
      title: 'The Closing Lines',
      body: 'Four fixed phrases close almost every application. U prilogu šaljem životopis i presliku diplome (Attached I send my CV and a copy of my diploma). Za sve dodatne informacije stojim Vam na raspolaganju (I am at your disposal for any further information). Zahvaljujem na pažnji (Thank you for your attention). Nadam se Vašem pozitivnom odgovoru (I hope for a positive reply). Then: S poštovanjem, and your name.',
      highlight: 'S poštovanjem,',
    },
    {
      type: 'example',
      title: 'A Model Letter: the Start',
      items: [
        {
          hr: 'Predmet: Prijava na natječaj za radno mjesto prodavača',
          en: 'Subject: Application for the post of shop assistant',
          note: 'prodavača — the job title in the genitive',
        },
        {
          hr: 'Poštovana gospođo Kovač,',
          en: 'Dear Mrs Kovač,',
          note: 'Kovač — a woman’s surname does not change',
        },
        {
          hr: 'Javljam se na Vaš natječaj za radno mjesto prodavača u knjižari u Zadru.',
          en: 'I am applying for your vacancy for a shop assistant in the bookshop in Zadar.',
          note: 'na Vaš natječaj — accusative after javljati se na',
        },
        {
          hr: 'Završila sam srednju ekonomsku školu u Zadru.',
          en: 'I finished the secondary school of economics in Zadar.',
          note: 'završila — the writer is a woman',
        },
        {
          hr: 'Radila sam tri godine kao prodavačica u maloj trgovini u centru grada.',
          en: 'I worked for three years as a shop assistant in a small shop in the town centre.',
          note: 'prodavačica — the feminine job title after kao',
        },
        {
          hr: 'Dobro se služim računalom, a služim se i engleskim jezikom.',
          en: 'I am good with computers, and I also speak English.',
          note: 'računalom, engleskim jezikom — instrumental after služiti se',
        },
      ],
    },
    {
      type: 'example',
      title: 'A Model Letter: the End',
      items: [
        {
          hr: 'Željela bih raditi u Vašoj knjižari jer volim knjige i rad s ljudima.',
          en: 'I would like to work in your bookshop because I love books and working with people.',
          note: 'željela bih — the polite conditional',
        },
        {
          hr: 'Mogla bih početi raditi od 1. prosinca.',
          en: 'I could start work from 1 December.',
          note: 'mogla bih — conditional of moći',
        },
        {
          hr: 'U prilogu šaljem životopis i presliku svjedodžbe.',
          en: 'Attached I send my CV and a copy of my school certificate.',
          note: 'u prilogu — literally "in the attachment"',
        },
        {
          hr: 'Za sve dodatne informacije stojim Vam na raspolaganju.',
          en: 'I am at your disposal for any further information.',
          note: 'stojim Vam na raspolaganju — a fixed phrase',
        },
        {
          hr: 'Nadam se Vašem pozitivnom odgovoru.',
          en: 'I hope for a positive reply.',
          note: 'Vašem pozitivnom odgovoru — dative after nadati se',
        },
        {
          hr: 'S poštovanjem, Ivana Horvat',
          en: 'Yours sincerely, Ivana Horvat',
          note: 'S poštovanjem — the formal sign-off',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'How does a formal application end?',
      options: ['Pozdrav!', 'S poštovanjem,', 'Bok,', 'Puno pusa,'],
      correct: 1,
      explanation:
        'S poštovanjem is the formal sign-off. Pozdrav, Bok and Puno pusa belong to friends and family.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Javljam se ___ natječaj za radno mjesto konobara."',
      options: ['na Vaš', 'na Vašem', 'na Vašeg', 'na Vašim'],
      correct: 0,
      explanation:
        'Javljati se na takes the accusative, and natječaj is masculine and not alive: na Vaš natječaj.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) A participle or job title that does not match the writer: a woman who writes "Radio sam kao prodavač" has made herself a man in the first line — Radila sam kao prodavačica. (2) The locative after javljati se na: "Javljam se na Vašem natječaju" — it is the accusative, na Vaš natječaj. (3) An informal ending: "Pozdrav" or "Lijep pozdrav" is for e-mails between colleagues who know each other; an application closes with S poštovanjem.',
      highlight: 'S poštovanjem',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which greeting opens a formal letter to Mr Babić?',
          options: [
            'Dragi Babić,',
            'Poštovani gospodine Babiću,',
            'Bok Babiću,',
            'Poštovani gospodin Babić,',
          ],
          correct: 1,
          explanation:
            'Poštovani + the vocative: gospodine Babiću. The nominative gospodin Babić is not used to address someone.',
        },
        {
          q: 'Complete: "Javljam se na Vaš ___ za radno mjesto kuhara."',
          options: ['natječaj', 'natječaja', 'natječaju', 'natječajem'],
          correct: 0,
          explanation: 'After javljati se na comes the accusative: na Vaš natječaj.',
        },
        {
          q: 'A woman writes: "___ sam dvije godine kao konobarica."',
          options: ['Radio', 'Radili', 'Radila', 'Radilo'],
          correct: 2,
          explanation: 'The participle agrees with the writer: a woman writes radila.',
        },
        {
          q: 'Complete: "U prilogu ___ životopis."',
          options: ['šalju', 'šalji', 'šaljite', 'šaljem'],
          correct: 3,
          explanation: 'The writer is ja: šaljem. Šalji and šaljite are commands.',
        },
        {
          q: 'Complete: "Dobro se služim ___." (a computer)',
          options: ['računalo', 'računalom', 'računala', 'računalu'],
          correct: 1,
          explanation: 'Služiti se takes the instrumental: računalom.',
        },
        {
          q: 'Which line belongs at the end of a formal application?',
          options: ['Vidimo se!', 'Javi se!', 'Nadam se Vašem pozitivnom odgovoru.', 'Čekam te.'],
          correct: 2,
          explanation:
            'Nadam se Vašem pozitivnom odgovoru is the polite closing. The others speak to a friend with ti.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Writing a Job Application — Key Takeaways',
      points: [
        'Greeting: Poštovani, — or Poštovani gospodine Babiću, / Poštovana gospođo Kovač,',
        'Opening: Javljam se na Vaš natječaj za radno mjesto + the job in the genitive',
        'Past tense agrees with you: radio / radila, završio / završila',
        'Skills: služim se računalom, engleskim jezikom',
        'Motivation politely: Željela bih raditi… jer…',
        'Closing: U prilogu šaljem… Nadam se Vašem pozitivnom odgovoru. S poštovanjem,',
      ],
    },
  ],
};

const P_JOB_APPLICATION = {
  worked: [
    {
      title: 'The Opening Sentence',
      problem: 'Napiši uvodnu rečenicu: you are applying for the advertised post of waiter.',
      en: 'Write the opening sentence: you are applying for the advertised post of waiter.',
      steps: [
        {
          label: 'The verb',
          text: 'To apply for an advertised post is javljati se na + accusative: Javljam se na Vaš natječaj.',
        },
        {
          label: 'The post',
          text: 'The post is za radno mjesto, and the job title that follows goes into the genitive.',
        },
        {
          label: 'The job',
          text: 'Konobar (waiter) in the genitive is konobara.',
        },
      ],
      answer: 'Javljam se na Vaš natječaj za radno mjesto konobara.',
    },
    {
      title: 'Experience, Written by a Woman',
      problem: 'Prevedi (a woman writing): "I worked for three years as a shop assistant."',
      en: 'A woman writes: I worked for three years as a shop assistant.',
      steps: [
        {
          label: 'The past tense',
          text: 'Raditi in the past, written by a woman: radila sam.',
        },
        {
          label: 'Three years',
          text: 'After tri the noun takes the genitive singular: tri godine.',
        },
        {
          label: 'As what?',
          text: 'Kao is followed by the nominative, and the job title is feminine: prodavačica.',
        },
      ],
      answer: 'Radila sam tri godine kao prodavačica.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'A letter to Mrs Ana Horvat. Which greeting is correct?',
        options: [
          'Poštovana gospođo Horvat,',
          'Poštovana gospođo Horvatu,',
          'Poštovana gospođa Horvat,',
          'Draga Ana,',
        ],
        correct: 0,
        hint: 'Gospođa goes into the vocative; a woman’s surname stays as it is.',
        explanation: 'Poštovana gospođo Horvat, — vocative gospođo, surname unchanged.',
      },
      {
        q: 'Complete: "Javljam se ___ natječaj za radno mjesto vozača."',
        options: ['na Vašem', 'na Vaša', 'na Vaš', 'na Vašim'],
        correct: 2,
        hint: 'Javljati se na wants the accusative, and natječaj is masculine and not alive.',
        explanation: 'na Vaš natječaj — accusative.',
      },
      {
        q: 'A man writes: "___ sam pet godina kao vozač."',
        options: ['Radila', 'Radio', 'Radili', 'Radilo'],
        correct: 1,
        hint: 'The participle shows one man.',
        explanation: 'Radio sam — masculine singular.',
      },
      {
        q: 'Complete: "Imam pet godina ___ u prodaji."',
        options: ['iskustvo', 'iskustva', 'iskustvom', 'iskustvu'],
        correct: 1,
        hint: 'Experience is counted: the thing counted goes into the genitive.',
        explanation: 'pet godina iskustva — genitive.',
      },
      {
        q: 'Complete: "Željela ___ raditi u Vašoj tvrtki."',
        options: ['bih', 'bi', 'bismo', 'bude'],
        correct: 0,
        hint: 'The writer is ja; you need the ja form of the conditional.',
        explanation: 'Željela bih — the conditional for ja.',
      },
      {
        q: 'Which line says your documents are attached?',
        options: [
          'U prilogu šaljem životopis.',
          'Šalji mi životopis.',
          'Imaš li životopis?',
          'Životopis je dosadan.',
        ],
        correct: 0,
        hint: 'Look for the fixed phrase that means "in the attachment".',
        explanation: 'U prilogu šaljem životopis.',
      },
      {
        q: 'Complete: "Za sve dodatne informacije stojim Vam na ___."',
        options: ['raspolaganje', 'raspolaganju', 'raspolaganja', 'raspolaganjem'],
        correct: 1,
        hint: 'Stajati na — standing ON something, a place: na with the locative.',
        explanation: 'stojim Vam na raspolaganju — a fixed phrase with the locative.',
      },
      {
        q: 'Which subject line is right for an application?',
        options: [
          'Predmet: Bok!',
          'Predmet: Pitanje za tebe',
          'Predmet: Hitno!!!',
          'Predmet: Prijava na natječaj',
        ],
        correct: 3,
        hint: 'The subject line names the document in neutral, formal words.',
        explanation: 'Predmet: Prijava na natječaj.',
      },
      {
        type: 'type',
        q: '____ se na Vaš natječaj za radno mjesto kuhara. (I am applying)',
        answer: 'javljam',
        hint: 'The verb is javljati se, in the ja form.',
        explanation: 'Javljam se na Vaš natječaj…',
      },
      {
        type: 'type',
        q: 'S ____, Marko Kovač (the formal sign-off)',
        answer: 'poštovanjem',
        hint: 'The noun is poštovanje (respect), here in the instrumental after s.',
        explanation: 'S poštovanjem, Marko Kovač',
      },
      {
        type: 'type',
        q: 'U ____ šaljem životopis. (in the attachment)',
        answer: 'prilogu',
        hint: 'Prilog (attachment) in the locative after u.',
        explanation: 'U prilogu šaljem životopis.',
      },
      {
        type: 'type',
        q: 'Dobro se služim ____. (a computer)',
        answer: 'računalom',
        hint: 'Služiti se wants the instrumental; računalo is neuter.',
        explanation: 'Dobro se služim računalom.',
      },
      {
        type: 'type',
        q: 'Nadam se Vašem ____ odgovoru. (positive)',
        answer: 'pozitivnom',
        hint: 'Nadati se takes the dative; the adjective agrees with odgovoru.',
        explanation: 'Nadam se Vašem pozitivnom odgovoru.',
      },
    ],
  },
  checkB: [
    {
      q: 'Which line closes a formal letter?',
      options: ['S poštovanjem,', 'Pozdrav, vidimo se!', 'Ljubim te,', 'Tvoj,'],
      correct: 0,
      explanation: 'S poštovanjem is the formal sign-off.',
    },
    {
      q: 'Complete: "Predmet: Prijava ___ natječaj"',
      options: ['u', 's', 'na', 'od'],
      correct: 2,
      explanation: 'A prijava, like javljati se, goes na + accusative: prijava na natječaj.',
    },
    {
      q: 'A man writes: "___ sam srednju školu u Osijeku."',
      options: ['Završila', 'Završio', 'Završili', 'Završilo'],
      correct: 1,
      explanation: 'One man: završio sam.',
    },
    {
      q: 'Complete: "Služim se engleskim i njemačkim ___."',
      options: ['jezik', 'jezika', 'jeziku', 'jezikom'],
      correct: 3,
      explanation: 'Služiti se + instrumental: jezikom.',
    },
    {
      q: 'Complete: "Nadam se Vašem pozitivnom ___."',
      options: ['odgovor', 'odgovoru', 'odgovorom', 'odgovora'],
      correct: 1,
      explanation: 'Nadati se takes the dative: odgovoru.',
    },
    {
      q: 'Which is a polite way to say when you could start?',
      options: [
        'Moram početi odmah.',
        'Mogla bih početi od 1. prosinca.',
        'Počni od prosinca!',
        'Počet ćeš u prosincu.',
      ],
      correct: 1,
      explanation: 'The conditional makes it an offer: Mogla bih početi…',
    },
  ],
  vocab: [
    ['natječaj', 'public job advertisement, vacancy', 'Javljam se na Vaš natječaj.'],
    ['radno mjesto', 'post, position', 'Tražimo radno mjesto vozača.'],
    ['prijava', 'application', 'Poslala sam prijavu na natječaj.'],
    ['molba', 'application letter, request', 'Napisao je molbu za posao.'],
    ['životopis', 'CV', 'U prilogu šaljem životopis.'],
    ['prilog', 'attachment', 'Životopis je u prilogu.'],
    ['svjedodžba', 'school certificate', 'Šaljem presliku svjedodžbe.'],
    ['iskustvo', 'experience', 'Imam tri godine iskustva.'],
    ['poštovanje', 'respect', 'S poštovanjem, Ivana Horvat'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 18 · satisfaction-disappointment — zadovoljan, oduševljen, razočaran + instr.
// ─────────────────────────────────────────────────────────────────────────────
const L_SATISFACTION_DISAPPOINTMENT = {
  id: 'satisfaction-disappointment',
  title: 'Zadovoljan, oduševljen, razočaran — How Did It Go?',
  subtitle: 'Saying you are pleased, thrilled or disappointed — and how much',
  icon: '🎭',
  level: 'B1',
  duration: '~6 min',
  color: '#be185d',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'How Was It?',
      body: 'Kako je bilo? — How was it? The hotel, the new job, the concert, the exam result. In this lesson you learn to answer with feeling: pleased or not pleased, thrilled, disappointed — and how strongly. The grammar is the instrumental you have just practised: Zadovoljna sam rezultatom. Oduševljeni smo koncertom.',
      icon: '🎭',
    },
    {
      type: 'rule',
      title: 'Satisfied — or Not: zadovoljan + Instrumental',
      body: 'Zadovoljan sam … (I am satisfied with …) puts the thing into the instrumental: Zadovoljan sam novim poslom. Šef je zadovoljan našim radom. For the opposite, either negate it — Nisam zadovoljan uslugom — or use nezadovoljan: Kupci su nezadovoljni cijenama. In speech you will also hear zadovoljan s poslom; in writing use the instrumental on its own.',
      highlight: 'Nisam zadovoljan uslugom.',
    },
    {
      type: 'rule',
      title: 'Thrilled and Disappointed',
      body: 'Oduševljen (thrilled, delighted) and razočaran (disappointed) work the same way: Oduševljena sam tvojim prijedlogom (with your suggestion). Bili smo razočarani rezultatom (with the result). Razočaran can also take a što-clause: Razočarana sam što nisi došao — I am disappointed that you didn’t come.',
      highlight: 'Oduševljena sam tvojim prijedlogom.',
    },
    {
      type: 'rule',
      title: 'The Adjective Agrees With You',
      body: 'All three words are adjectives, so they agree with the person who feels: a man is zadovoljan, a woman zadovoljna, a mixed group or men zadovoljni, a group of women zadovoljne. The same goes for oduševljen / oduševljena / oduševljeni / oduševljene and razočaran / razočarana / razočarani / razočarane. Check this every time — it is the first thing a Croatian ear notices.',
      highlight: 'zadovoljan / zadovoljna / zadovoljni / zadovoljne',
    },
    {
      type: 'table',
      title: 'How Much?',
      headers: ['Croatian', 'English'],
      rows: [
        ['Potpuno sam zadovoljan.', 'I am completely satisfied.'],
        ['Jako / Vrlo sam zadovoljan.', 'I am very satisfied.'],
        ['Prilično sam zadovoljan.', 'I am fairly satisfied.'],
        ['Nisam baš zadovoljan.', 'I am not very satisfied.'],
        ['Nisam nimalo zadovoljan.', 'I am not at all satisfied.'],
        ['Oduševljen sam!', 'I am thrilled!'],
      ],
    },
    {
      type: 'table',
      title: 'Quick Reactions',
      headers: ['Croatian', 'English', 'Mood'],
      rows: [
        ['Odlično! / Super!', 'Excellent! / Great!', 'enthusiasm'],
        ['Prekrasno!', 'Wonderful!', 'enthusiasm'],
        ['Baš mi je drago!', 'I’m really glad!', 'pleasure'],
        ['Nije loše.', 'Not bad.', 'mild satisfaction'],
        ['Očekivao / Očekivala sam više.', 'I expected more.', 'disappointment'],
        ['Kakva šteta! / Šteta!', 'What a pity! / Pity!', 'disappointment'],
        ['Nije mi se svidjelo.', 'I didn’t like it.', 'dissatisfaction'],
      ],
    },
    {
      type: 'rule',
      title: 'Saying Why',
      body: 'A feeling sounds real when it has a reason. Use jer: Nisam zadovoljna hotelom jer je soba bila mala i bučna. Use što after drago, žao and šteta: Drago mi je što ste došli. Šteta što nisi bio s nama. And remember svidjeti se from A2, with the person in the dative: Film mi se svidio. Predstava nam se nije svidjela.',
      highlight: 'Drago mi je što ste došli.',
    },
    {
      type: 'example',
      title: 'Pleased and Thrilled',
      items: [
        {
          hr: 'Jako sam zadovoljan svojim novim poslom.',
          en: 'I am very pleased with my new job.',
          note: 'svojim novim poslom — instrumental after zadovoljan',
        },
        {
          hr: 'Moja mama je oduševljena tvojim poklonom.',
          en: 'My mum is thrilled with your present.',
          note: 'oduševljena — agrees with mama',
        },
        {
          hr: 'Bili smo oduševljeni koncertom u Puli.',
          en: 'We were thrilled with the concert in Pula.',
          note: 'oduševljeni — masculine plural, agrees with mi',
        },
        {
          hr: 'Šef je zadovoljan našim radom.',
          en: 'The boss is pleased with our work.',
          note: 'našim radom — instrumental',
        },
        {
          hr: 'Djeca su bila oduševljena morem i plažom.',
          en: 'The children were thrilled with the sea and the beach.',
          note: 'morem, plažom — two nouns, both instrumental',
        },
        {
          hr: 'Drago mi je što ste došli!',
          en: 'I am glad you came!',
          note: 'drago mi je što — the reason after što',
        },
      ],
    },
    {
      type: 'example',
      title: 'Not Pleased and Disappointed',
      items: [
        {
          hr: 'Nisam baš zadovoljna ovim hotelom jer je soba mala i bučna.',
          en: 'I am not very happy with this hotel because the room is small and noisy.',
          note: 'zadovoljna — a woman speaking; nisam baš means "not very"',
        },
        {
          hr: 'Nisam nimalo zadovoljan uslugom u tom restoranu.',
          en: 'I am not at all satisfied with the service in that restaurant.',
          note: 'uslugom — instrumental; nimalo means "not at all"',
        },
        {
          hr: 'Navijači su razočarani rezultatom utakmice.',
          en: 'The fans are disappointed with the result of the match.',
          note: 'razočarani — agrees with navijači',
        },
        {
          hr: 'Kakva šteta! Ulaznice za koncert su rasprodane.',
          en: 'What a pity! The concert tickets are sold out.',
        },
        {
          hr: 'Film mi se nije svidio, kraj je bio dosadan.',
          en: 'I didn’t like the film, the ending was boring.',
          note: 'svidio — masculine, because film is masculine',
        },
        {
          hr: 'Razočarana sam što nisi došao na moj rođendan.',
          en: 'I am disappointed that you didn’t come to my birthday.',
          note: 'razočarana sam što — the reason as a clause',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'A woman says: "___ sam svojim poslom."',
      options: ['Zadovoljan', 'Zadovoljna', 'Zadovoljni', 'Zadovoljno'],
      correct: 1,
      explanation: 'The adjective agrees with the speaker: a woman is zadovoljna.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which reaction shows disappointment?',
      options: ['Odlično!', 'Super!', 'Kakva šteta!', 'Baš mi je drago!'],
      correct: 2,
      explanation: 'Kakva šteta! — What a pity! The others are glad or enthusiastic.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The thing in the nominative or accusative: "Zadovoljan sam moj posao", "Oduševljen sam tvoj prijedlog" — the instrumental is needed: Zadovoljna sam svojim poslom, Oduševljen sam tvojim prijedlogom. (2) The adjective not matching the speaker: a woman who says "Zadovoljan sam" has spoken as a man. (3) Nimalo without the negation: "Nimalo sam zadovoljan" — Croatian needs both: Nisam nimalo zadovoljan.',
      highlight: 'Zadovoljna sam svojim poslom',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Oduševljen sam ___." (your idea)',
          options: ['tvoja ideja', 'tvojom idejom', 'tvojoj ideji', 'tvoju ideju'],
          correct: 1,
          explanation: 'Oduševljen + instrumental; ideja is feminine: tvojom idejom.',
        },
        {
          q: 'Two women say: "Nismo ___ hotelom."',
          options: ['zadovoljan', 'zadovoljna', 'zadovoljni', 'zadovoljne'],
          correct: 3,
          explanation: 'A group of women: zadovoljne.',
        },
        {
          q: 'Complete: "Navijači su razočarani ___." (the result)',
          options: ['rezultat', 'rezultatu', 'rezultatom', 'rezultata'],
          correct: 2,
          explanation: 'Razočaran + instrumental: rezultatom.',
        },
        {
          q: 'Which sentence says "I am not at all satisfied"?',
          options: [
            'Nisam nimalo zadovoljan.',
            'Nimalo sam zadovoljan.',
            'Jako sam zadovoljan.',
            'Nisam baš zadovoljan.',
          ],
          correct: 0,
          explanation:
            'Nimalo needs the negation: nisam nimalo. Nisam baš means "not very", which is milder.',
        },
        {
          q: 'Complete: "Film mi se nije ___." (liked)',
          options: ['svidio', 'svidjela', 'svidjeti', 'sviđa'],
          correct: 0,
          explanation:
            'Film is masculine, so the past participle is svidio. Svidjela would agree with a feminine noun.',
        },
        {
          q: 'Complete: "Šef je zadovoljan ___ radom." (our)',
          options: ['naš', 'našem', 'našim', 'našom'],
          correct: 2,
          explanation: 'Rad is masculine, in the instrumental: našim radom.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Satisfaction and Disappointment — Key Takeaways',
      points: [
        'zadovoljan, nezadovoljan, oduševljen, razočaran + instrumental',
        'The adjective agrees with the speaker: zadovoljan / zadovoljna / zadovoljni / zadovoljne',
        'How much: potpuno, jako, prilično, nisam baš, nisam nimalo',
        'Reactions: Odlično! Prekrasno! — Kakva šteta! Očekivao sam više.',
        'Reasons with jer, and što after drago, žao, šteta: Drago mi je što ste došli',
        'svidjeti se + dative: Film mi se (nije) svidio',
      ],
    },
  ],
};

const P_SATISFACTION_DISAPPOINTMENT = {
  worked: [
    {
      title: 'Enthusiasm, Spoken by a Woman',
      problem: 'Prevedi (a woman speaking): "I am thrilled with your new flat!"',
      en: 'A woman says: I am thrilled with your new flat!',
      steps: [
        {
          label: 'The adjective',
          text: 'Thrilled is oduševljen. The speaker is a woman: oduševljena sam.',
        },
        {
          label: 'Which case?',
          text: 'Oduševljen takes the instrumental with no preposition.',
        },
        {
          label: 'The flat',
          text: 'Stan is masculine: tvojim novim stanom, with -im on both words in front.',
        },
      ],
      answer: 'Oduševljena sam tvojim novim stanom!',
    },
    {
      title: 'A Complaint With a Reason',
      problem:
        'Prevedi (a man speaking): "I am not very happy with the service, because the waiter was rude."',
      en: 'A man says: I am not very happy with the service, because the waiter was rude.',
      steps: [
        {
          label: 'How much',
          text: 'Not very is nisam baš; a man says zadovoljan.',
        },
        {
          label: 'The service',
          text: 'Usluga is feminine; after zadovoljan it goes into the instrumental: uslugom.',
        },
        {
          label: 'The reason',
          text: 'Jer + the past tense: jer je konobar bio nepristojan — je comes second in its clause.',
        },
      ],
      answer: 'Nisam baš zadovoljan uslugom jer je konobar bio nepristojan.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Ana: "Jako sam ___ svojim novim poslom."',
        options: ['zadovoljan', 'zadovoljna', 'zadovoljni', 'zadovoljno'],
        correct: 1,
        hint: 'Ana is one woman; the adjective agrees with her.',
        explanation: 'zadovoljna — feminine singular.',
      },
      {
        q: 'Mi smo oduševljeni ___. (the trip)',
        options: ['izlet', 'izletu', 'izletom', 'izleta'],
        correct: 2,
        hint: 'After oduševljen the thing goes into the instrumental.',
        explanation: 'izletom — masculine instrumental.',
      },
      {
        q: 'Nisam zadovoljan ___. (the service)',
        options: ['usluga', 'uslugom', 'uslugu', 'usluzi'],
        correct: 1,
        hint: 'Usluga is feminine; which ending does the feminine take in the instrumental?',
        explanation: 'uslugom.',
      },
      {
        q: 'Razočarani smo ___ rezultatom. (this)',
        options: ['ovom', 'ovim', 'ovoj', 'ovaj'],
        correct: 1,
        hint: 'Rezultat is masculine, in the instrumental.',
        explanation: 'ovim rezultatom.',
      },
      {
        q: 'Your friend can’t come to your party. Which reaction fits?',
        options: ['Odlično!', 'Super!', 'Kakva šteta!', 'Prekrasno!'],
        correct: 2,
        hint: 'You are sorry about it, not pleased.',
        explanation: 'Kakva šteta! — What a pity!',
      },
      {
        q: 'Which means "not very satisfied"?',
        options: [
          'nisam baš zadovoljan',
          'jako sam zadovoljan',
          'potpuno sam zadovoljan',
          'nisam nimalo zadovoljan',
        ],
        correct: 0,
        hint: 'One of these is "not at all" — you want the milder one.',
        explanation: 'nisam baš zadovoljan — not very; nisam nimalo — not at all.',
      },
      {
        q: 'Film mi se nije ___. (liked)',
        options: ['svidio', 'svidjelo', 'svidjela', 'svidjeti'],
        correct: 0,
        hint: 'The participle agrees with film, a masculine noun.',
        explanation: 'svidio.',
      },
      {
        q: 'Moji roditelji su ___ tvojim poklonom. (thrilled)',
        options: ['oduševljen', 'oduševljena', 'oduševljeni', 'oduševljene'],
        correct: 2,
        hint: 'Roditelji is masculine plural.',
        explanation: 'oduševljeni.',
      },
      {
        type: 'type',
        q: 'Šef je zadovoljan ____ radom. (your — polite vi)',
        answer: 'vašim',
        hint: 'Rad is masculine, in the instrumental; the possessive comes from vi.',
        explanation: 'Vašim radom.',
      },
      {
        type: 'type',
        q: 'Nisam ____ zadovoljna. (at all)',
        answer: 'nimalo',
        hint: 'The word that makes "not" into "not at all".',
        explanation: 'Nisam nimalo zadovoljna.',
      },
      {
        type: 'type',
        q: 'Bili smo oduševljeni ____. (the concert)',
        answer: 'koncertom',
        hint: 'Koncert is masculine; oduševljen wants the instrumental.',
        explanation: 'koncertom.',
      },
      {
        type: 'type',
        q: 'Razočarana sam ____. (the film)',
        answer: 'filmom',
        hint: 'Film is masculine, and razočaran takes the instrumental.',
        explanation: 'filmom.',
      },
      {
        type: 'type',
        q: 'Kakva ____! Nisi došao. (pity)',
        answer: 'šteta',
        hint: 'The noun for "pity" in its basic form.',
        explanation: 'Kakva šteta!',
      },
    ],
  },
  checkB: [
    {
      q: 'A man says: "Jako sam ___ novim stanom."',
      options: ['zadovoljna', 'zadovoljan', 'zadovoljne', 'zadovoljno'],
      correct: 1,
      explanation: 'One man: zadovoljan.',
    },
    {
      q: 'Complete: "Djeca su oduševljena ___." (the sea)',
      options: ['more', 'moru', 'morem', 'mora'],
      correct: 2,
      explanation: 'Oduševljen + instrumental: more → morem.',
    },
    {
      q: 'Which reaction shows enthusiasm?',
      options: ['Kakva šteta!', 'Očekivao sam više.', 'Nije mi se svidjelo.', 'Prekrasno!'],
      correct: 3,
      explanation: 'Prekrasno! — Wonderful! The others show disappointment.',
    },
    {
      q: 'Complete: "Razočarana sam ___ filmom." (that)',
      options: ['tim', 'tom', 'toj', 'taj'],
      correct: 0,
      explanation: 'Film is masculine: tim filmom.',
    },
    {
      q: 'Complete: "Nisam zadovoljan hotelom ___ je soba bila prljava."',
      options: ['jer', 'ali', 'ili', 'nego'],
      correct: 0,
      explanation: 'The dirty room is the reason: jer.',
    },
    {
      q: 'Complete: "Kakva ___! Koncert je otkazan."',
      options: ['šteta', 'štete', 'štetu', 'štetom'],
      correct: 0,
      explanation: 'Kakva šteta! — the nominative, agreeing with kakva.',
    },
  ],
  vocab: [
    ['zadovoljan', 'satisfied, pleased', 'Zadovoljna sam svojim poslom.'],
    ['nezadovoljan', 'dissatisfied', 'Kupci su nezadovoljni cijenama.'],
    ['oduševljen', 'thrilled, delighted', 'Oduševljeni smo koncertom.'],
    ['razočaran', 'disappointed', 'Razočaran sam rezultatom.'],
    ['usluga', 'service', 'Nisam zadovoljan uslugom.'],
    ['šteta', 'pity, shame', 'Kakva šteta!'],
    ['očekivati', 'to expect', 'Očekivala sam više.'],
    ['nimalo', 'not at all (with a negation)', 'Nisam nimalo zadovoljan.'],
    ['prijedlog', 'suggestion', 'Oduševljena sam tvojim prijedlogom.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 22 · genitive-adjectives — iz mojeg starog grada, bez tvoje pomoći, -ih plural
// ─────────────────────────────────────────────────────────────────────────────
const L_GENITIVE_ADJECTIVES = {
  id: 'genitive-adjectives',
  title: 'Iz mojeg starog grada — Adjectives in the Genitive',
  subtitle: 'From, without, near, at someone’s: the words in front of the noun follow it',
  icon: '🏘️',
  level: 'B1',
  duration: '~7 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'The Busiest Case, With Its Adjectives',
      body: 'The genitive is everywhere: after iz, od, do, bez, kod, blizu, ispred and nakon, after nema, after quantities, and for "of". You can already say iz grada and bez pomoći. Now the words in front: iz mojeg starog grada (from my old town), bez tvoje pomoći (without your help), kod svoje sestre (at her own sister’s). Three endings cover everything.',
      icon: '🏘️',
    },
    {
      type: 'rule',
      title: 'Masculine and Neuter: -og (or -eg)',
      body: 'In front of a masculine or neuter noun in the genitive the adjective ends in -og: star → iz starog grada, nov → do novog stana, velik → blizu velikog parka, malo → iz malog sela. After a soft stem — c, č, ć, dž, đ, j, lj, nj, š, ž — it is -eg: naš → kod našeg susjeda, vruć → malo vrućeg čaja, svjež → bez svježeg zraka. A fleeting a drops as usual: dobar → dobrog.',
      highlight: 'iz starog grada',
    },
    {
      type: 'rule',
      title: 'The Longer Forms',
      body: 'Every one of these has a longer twin with an extra -a: starog / staroga, našeg / našega, tog / toga. Both are correct; the short form is more common in speech. Moj, tvoj and svoj have three correct forms: mojeg, mog and moga (likewise tvojeg / tvog, svojeg / svog). You may use any of them.',
      highlight: 'mojeg, mog, moga',
    },
    {
      type: 'rule',
      title: 'Feminine: -e',
      body: 'In front of a feminine noun the adjective ends in -e — just like the noun: stara → iz stare kuće, velika → blizu velike škole, naša → kod naše bake, ta → bez te knjige, jaka → bez jake kave. Soft stem or not, it is always -e.',
      highlight: 'bez tvoje pomoći',
    },
    {
      type: 'rule',
      title: 'This, That, My, Your — and Svoj',
      body: 'Taj → tog / te, ovaj → ovog / ove, onaj → onog / one. Moj → mojeg / moje, tvoj the same, naš → našeg / naše, vaš → vašeg / vaše. Njegov → njegovog / njegove, njezin → njezinog / njezine, njihov → njihovog / njihove. Svoj points back at the subject: Ana je kod svoje sestre means her OWN sister; Ana je kod njezine sestre means another woman’s.',
      highlight: 'Ana je kod svoje sestre.',
    },
    {
      type: 'rule',
      title: 'The Plural: -ih, for Every Gender',
      body: 'In the genitive plural every adjective ends in -ih: puno dobrih prijatelja (a lot of good friends), pet starih knjiga, bez ovih ključeva, kod naših roditelja. Do not confuse it with the instrumental plural -im you met earlier: s dobrim prijateljima (with good friends) — but puno dobrih prijatelja.',
      highlight: 'puno dobrih prijatelja',
    },
    {
      type: 'table',
      title: 'The Genitive Endings at a Glance',
      headers: ['Word', 'masc. / neut.', 'feminine', 'plural (all)'],
      rows: [
        ['star (old)', 'starog', 'stare', 'starih'],
        ['naš (soft)', 'našeg', 'naše', 'naših'],
        ['taj / ta / to', 'tog', 'te', 'tih'],
        ['ovaj', 'ovog', 'ove', 'ovih'],
        ['moj', 'mojeg / mog', 'moje', 'mojih'],
        ['svoj', 'svojeg / svog', 'svoje', 'svojih'],
        ['njegov', 'njegovog', 'njegove', 'njegovih'],
        ['njezin', 'njezinog', 'njezine', 'njezinih'],
      ],
    },
    {
      type: 'example',
      title: 'From, Without, Near, At',
      items: [
        {
          hr: 'Ja sam iz malog sela blizu Osijeka.',
          en: 'I am from a small village near Osijek.',
          note: 'malog — neuter -og after iz',
        },
        {
          hr: 'Ne mogu ovo napraviti bez tvoje pomoći.',
          en: 'I can’t do this without your help.',
          note: 'tvoje — feminine -e after bez',
        },
        {
          hr: 'Vikendom smo uvijek kod svoje bake na selu.',
          en: 'At weekends we are always at our grandmother’s in the village.',
          note: 'svoje — feminine -e; points back at mi',
        },
        {
          hr: 'Živimo blizu našeg starog parka.',
          en: 'We live near our old park.',
          note: 'našeg starog — -eg after the soft stem naš, -og after star',
        },
        {
          hr: 'Ispred naše zgrade stoji crveni auto.',
          en: 'A red car is standing in front of our building.',
          note: 'naše — feminine -e after ispred',
        },
        {
          hr: 'Nakon tog dugog dana bila sam jako umorna.',
          en: 'After that long day I was very tired.',
          note: 'tog dugog — masculine -og after nakon',
        },
      ],
    },
    {
      type: 'example',
      title: 'Of, Nema and Quantities',
      items: [
        {
          hr: 'Ovo je kuća mojeg djeda.',
          en: 'This is my grandfather’s house.',
          note: 'mojeg — possession: the owner in the genitive',
        },
        {
          hr: 'Kraj ovog filma je jako tužan.',
          en: 'The end of this film is very sad.',
          note: 'ovog — masculine -og',
        },
        {
          hr: 'U hladnjaku nema hladnog piva.',
          en: 'There is no cold beer in the fridge.',
          note: 'hladnog — neuter -og after nema',
        },
        {
          hr: 'Popij malo toplog čaja prije spavanja.',
          en: 'Have a little warm tea before bed.',
          note: 'toplog — masculine -og after malo',
        },
        {
          hr: 'Imam puno dobrih prijatelja u Splitu.',
          en: 'I have a lot of good friends in Split.',
          note: 'dobrih — the plural -ih after puno',
        },
        {
          hr: 'Na stolu je pet starih knjiga.',
          en: 'There are five old books on the table.',
          note: 'starih — the plural -ih after pet',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Ja sam iz ___ grada." (a small)',
      options: ['malog', 'malom', 'mali', 'male'],
      correct: 0,
      explanation: 'Iz takes the genitive, and grad is masculine: malog grada.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Ne mogu bez ___ pomoći." (your)',
      options: ['tvoju', 'tvoje', 'tvojom', 'tvoja'],
      correct: 1,
      explanation:
        'Bez takes the genitive, and pomoć is feminine: tvoje pomoći. Tvoju is the accusative.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving the adjective in the nominative: "iz moj stari grad" — every word follows the noun: iz mojeg starog grada. (2) The accusative after bez: "bez tvoju pomoć" — bez takes the genitive: bez tvoje pomoći. (3) Mixing up the two plural endings: "pet velikim kuća" — after a quantity it is the genitive -ih: pet velikih kuća. And after a soft stem it is -eg, never "našog": kod našeg susjeda.',
      highlight: 'bez tvoje pomoći',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Živim blizu ___ parka." (a big)',
          options: ['velikom', 'veliki', 'velikog', 'velikim'],
          correct: 2,
          explanation: 'Blizu takes the genitive; park is masculine: velikog parka.',
        },
        {
          q: 'Complete: "Kod ___ susjeda je zabava." (our)',
          options: ['našeg', 'našog', 'našem', 'naš'],
          correct: 0,
          explanation: 'Naš has a soft stem, so the genitive is našeg, never "našog".',
        },
        {
          q: 'Complete: "Imam puno ___ prijatelja." (good)',
          options: ['dobrim', 'dobri', 'dobre', 'dobrih'],
          correct: 3,
          explanation: 'After puno comes the genitive plural: dobrih prijatelja.',
        },
        {
          q: 'Complete: "Marko je kod ___ sestre." (his own)',
          options: ['svoja', 'svoje', 'svojoj', 'svoju'],
          correct: 1,
          explanation: 'Kod takes the genitive; sestra is feminine: svoje sestre.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Ne mogu bez tvoju pomoć.',
            'Ne mogu bez tvoja pomoć.',
            'Ne mogu bez tvoje pomoći.',
            'Ne mogu bez tvojom pomoći.',
          ],
          correct: 2,
          explanation: 'Bez + genitive: tvoje pomoći.',
        },
        {
          q: 'Complete: "Nakon ___ dana idem spavati." (that long)',
          options: ['tim dugim', 'toj dugoj', 'tog dugog', 'taj dugi'],
          correct: 2,
          explanation: 'Nakon takes the genitive; dan is masculine: tog dugog dana.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Adjectives in the Genitive — Key Takeaways',
      points: [
        'Masculine and neuter: -og, or -eg after a soft stem — starog, našeg',
        'Longer twins are also correct: staroga; moj → mojeg / mog / moga',
        'Feminine: -e — bez tvoje pomoći, iz stare kuće',
        'Plural, every gender: -ih — puno dobrih prijatelja',
        'svoj points back at the subject: kod svoje sestre',
        'Genitive plural -ih, instrumental plural -im: don’t mix them up',
      ],
    },
  ],
};

const P_GENITIVE_ADJECTIVES = {
  worked: [
    {
      title: 'Where You Come From',
      problem: 'Prevedi: "I am from a small village near Zadar."',
      en: 'I am from a small village near Zadar.',
      steps: [
        {
          label: 'From where?',
          text: 'Iz takes the genitive. Selo is neuter: sela.',
        },
        {
          label: 'The adjective',
          text: 'Neuter in the genitive: malo → malog. So: iz malog sela.',
        },
        {
          label: 'Near what?',
          text: 'Blizu also takes the genitive. Zadar loses its fleeting a: Zadra.',
        },
      ],
      answer: 'Ja sam iz malog sela blizu Zadra.',
    },
    {
      title: 'A Quantity With an Adjective',
      problem: 'Prevedi: "We have a lot of good neighbours."',
      en: 'We have a lot of good neighbours.',
      steps: [
        {
          label: 'After puno',
          text: 'Puno (a lot of) is followed by the genitive plural.',
        },
        {
          label: 'The noun',
          text: 'Susjed in the genitive plural is susjeda.',
        },
        {
          label: 'The adjective',
          text: 'Dobar loses its fleeting a and takes the plural -ih: dobrih.',
        },
      ],
      answer: 'Imamo puno dobrih susjeda.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Stan je blizu ___ trga. (the main)',
        options: ['glavnom', 'glavnog', 'glavni', 'glavnim'],
        correct: 1,
        hint: 'Blizu takes the genitive, and trg is masculine.',
        explanation: 'glavnog trga.',
      },
      {
        q: 'Ovo je kuća ___ bake. (my)',
        options: ['mojoj', 'moju', 'moje', 'moja'],
        correct: 2,
        hint: 'The owner goes in the genitive; baka is feminine.',
        explanation: 'kuća moje bake.',
      },
      {
        q: 'Ne mogu živjeti bez ___ glazbe. (good)',
        options: ['dobru', 'dobre', 'dobroj', 'dobra'],
        correct: 1,
        hint: 'Bez wants the genitive; glazba is feminine.',
        explanation: 'bez dobre glazbe.',
      },
      {
        q: 'Vratio se iz ___ grada. (a big)',
        options: ['velikog', 'velikom', 'velikim', 'veliki'],
        correct: 0,
        hint: 'Iz takes the genitive; grad is masculine.',
        explanation: 'iz velikog grada.',
      },
      {
        q: 'Na stolu je deset ___ čaša. (empty)',
        options: ['praznim', 'prazne', 'praznih', 'prazni'],
        correct: 2,
        hint: 'After deset comes the genitive plural.',
        explanation: 'deset praznih čaša.',
      },
      {
        q: 'Ivana je kod ___ prijateljice. (her own)',
        options: ['svojoj', 'svoje', 'svoju', 'svoja'],
        correct: 1,
        hint: 'Kod takes the genitive; prijateljica is feminine.',
        explanation: 'kod svoje prijateljice.',
      },
      {
        q: 'Nema ___ sira. (fresh)',
        options: ['svježeg', 'svježog', 'svježem', 'svježi'],
        correct: 0,
        hint: 'Nema takes the genitive, and svjež has a soft stem.',
        explanation: 'svježeg sira — -eg after ž.',
      },
      {
        q: 'Blizu ___ zgrade je park. (our)',
        options: ['našoj', 'našom', 'naše', 'našu'],
        correct: 2,
        hint: 'Blizu takes the genitive; zgrada is feminine.',
        explanation: 'blizu naše zgrade.',
      },
      {
        type: 'type',
        q: 'Ja sam iz ____ sela. (a small)',
        answer: 'malog',
        accept: ['maloga'],
        hint: 'Selo is neuter; neuter shares its genitive ending with the masculine.',
        explanation: 'iz malog sela.',
      },
      {
        type: 'type',
        q: 'Kod ____ susjeda je zabava. (our)',
        answer: 'našeg',
        accept: ['našega'],
        hint: 'Naš has a soft stem, which changes the vowel of the ending.',
        explanation: 'kod našeg susjeda.',
      },
      {
        type: 'type',
        q: 'Ne mogu bez ____ pomoći. (your — to a friend)',
        answer: 'tvoje',
        hint: 'Pomoć is feminine, and bez takes the genitive.',
        explanation: 'bez tvoje pomoći.',
      },
      {
        type: 'type',
        q: 'Imam puno ____ prijatelja. (old)',
        answer: 'starih',
        hint: 'After puno comes the genitive plural.',
        explanation: 'puno starih prijatelja.',
      },
      {
        type: 'type',
        q: 'Kraj ____ filma je tužan. (this)',
        answer: 'ovog',
        accept: ['ovoga'],
        hint: 'Film is masculine; ovaj goes into the genitive.',
        explanation: 'kraj ovog filma.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Ovo je auto ___ brata." (my)',
      options: ['mojem', 'mojeg', 'moj', 'mojim'],
      correct: 1,
      explanation: 'The owner is in the genitive: mojeg brata (mog brata is also correct).',
    },
    {
      q: 'Complete: "U hladnjaku nema ___ mlijeka." (fresh)',
      options: ['svježog', 'svježem', 'svježeg', 'svježi'],
      correct: 2,
      explanation: 'Nema + genitive; svjež has a soft stem: svježeg.',
    },
    {
      q: 'Complete: "Na polici je pet ___ knjiga." (old)',
      options: ['starih', 'starim', 'stare', 'staroj'],
      correct: 0,
      explanation: 'After pet comes the genitive plural: starih knjiga.',
    },
    {
      q: 'Complete: "Djeca se igraju ispred ___ škole." (the new)',
      options: ['nova', 'novom', 'novu', 'nove'],
      correct: 3,
      explanation: 'Ispred takes the genitive; škola is feminine: nove škole.',
    },
    {
      q: 'Complete: "Dolazim iz ___ kraja." (that)',
      options: ['toj', 'tog', 'tom', 'taj'],
      correct: 1,
      explanation: 'Iz + genitive; kraj is masculine: tog kraja.',
    },
    {
      q: 'Complete: "Imamo puno ___ susjeda." (kind)',
      options: ['ljubaznim', 'ljubaznih', 'ljubazni', 'ljubazne'],
      correct: 1,
      explanation: 'After puno: the genitive plural ljubaznih.',
    },
  ],
  vocab: [
    ['bez', 'without (+ genitive)', 'Ne mogu bez tvoje pomoći.'],
    ['blizu', 'near (+ genitive)', 'Živimo blizu našeg parka.'],
    ['nakon', 'after (+ genitive)', 'Nakon tog dana bila sam umorna.'],
    ['ispred', 'in front of (+ genitive)', 'Ispred naše zgrade je park.'],
    ['pomoć', 'help', 'Hvala na pomoći.'],
    ['selo', 'village', 'Ja sam iz malog sela.'],
    ['trg', 'square', 'Stan je blizu glavnog trga.'],
    ['prazan', 'empty', 'Na stolu je pet praznih čaša.'],
    ['svjež', 'fresh', 'Nema svježeg kruha.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

/** Spine entries for this batch. `masterOrder` is the lesson's final B1 position. */
export const SPINE = [
  {
    id: 'instrumental-adjectives',
    masterOrder: 14,
    prerequisites: ['instrumental', 'instrumental-pronouns', 'locative-adjectives', 'svoj'],
    objectives: [
      'Put adjectives into the instrumental: -im for masculine and neuter, -om for feminine',
      'Decline taj, ovaj, onaj, moj, naš and njegov in the instrumental: s tim, s tom, s mojim',
      'Use svoj in the instrumental: sa svojom sestrom',
      'Use the plural -im for every gender: s mojim starim prijateljima',
    ],
  },
  {
    id: 'verbs-with-instrumental',
    masterOrder: 15,
    prerequisites: ['instrumental-adjectives', 'jesti-piti', 'reflexive-verbs'],
    objectives: [
      'Ask and answer Čime se baviš? with baviti se + instrumental',
      'Use služiti se, ponositi se, hvaliti se and upravljati + instrumental',
      'Say you are zadovoljan or oduševljen with something, agreeing with the speaker',
      'Form the present of čuti and its type: čujem, pijem, obujem',
    ],
  },
  {
    id: 'job-application',
    masterOrder: 17,
    prerequisites: ['job-interview', 'formal-address', 'vocative-intro', 'verbs-with-instrumental'],
    objectives: [
      'Lay out a formal application: place and date, subject line, greeting, sign-off',
      'Open with Javljam se na Vaš natječaj za radno mjesto + genitive',
      'Describe education, experience and skills with the right gender and case',
      'Close with U prilogu šaljem…, Nadam se Vašem pozitivnom odgovoru, S poštovanjem',
    ],
  },
  {
    id: 'satisfaction-disappointment',
    masterOrder: 18,
    prerequisites: ['verbs-with-instrumental', 'impersonal-feelings', 'conjunctions'],
    objectives: [
      'Say you are zadovoljan, nezadovoljan, oduševljen or razočaran + instrumental',
      'Make the adjective agree with the speaker: zadovoljan / zadovoljna / zadovoljni / zadovoljne',
      'Grade a feeling: potpuno, jako, prilično, nisam baš, nisam nimalo',
      'React with Odlično! Kakva šteta! Očekivao sam više. and give a reason with jer or što',
    ],
  },
  {
    id: 'genitive-adjectives',
    masterOrder: 22,
    prerequisites: [
      'genitive-deep',
      'genitive-prepositions',
      'locative-adjectives',
      'instrumental-adjectives',
    ],
    objectives: [
      'Put adjectives into the genitive: -og (-eg after a soft stem), feminine -e',
      'Decline taj, ovaj, moj, naš and njegov in the genitive: tog, te, mojeg / mog, našeg',
      'Use svoj in the genitive: kod svoje sestre',
      'Use the plural -ih for every gender: puno dobrih prijatelja',
    ],
  },
];

/** Lesson bodies (same shape as lessonsB1.js). */
export const LESSONS = [
  L_INSTRUMENTAL_ADJECTIVES,
  L_VERBS_WITH_INSTRUMENTAL,
  L_JOB_APPLICATION,
  L_SATISFACTION_DISAPPOINTMENT,
  L_GENITIVE_ADJECTIVES,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'instrumental-adjectives': P_INSTRUMENTAL_ADJECTIVES,
  'verbs-with-instrumental': P_VERBS_WITH_INSTRUMENTAL,
  'job-application': P_JOB_APPLICATION,
  'satisfaction-disappointment': P_SATISFACTION_DISAPPOINTMENT,
  'genitive-adjectives': P_GENITIVE_ADJECTIVES,
};
