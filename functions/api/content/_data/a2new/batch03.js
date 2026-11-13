// functions/api/content/_data/a2new/batch03.js
//
// New A2 lessons, batch 03 (Croaticum restructure, stage 3, 2026-11-12). See a2new/index.js.
//
// Six lessons from Razgovarajte s nama! A2-B1, lessons 3–4: problems at work and at
// home, the informal email, aspect pairs, aspect in the past, and conditional I (forms,
// then wishes and polite requests). Everything here uses only grammar the learner has
// met before the lesson's masterOrder: no comparatives, no koji-clauses, no conjunction
// clauses (ako, kad, jer, da), no indefinite pronouns — those are B1.
//
// Aspect tests are written so that only ONE aspect fits: a duration (dva sata, cijeli
// dan) or "right now" for the imperfective; a deadline, "the whole", za + time or a
// chain of finished events for the perfective. Habitual contexts are never tested
// against a perfective distractor, because an iterative perfective (Svako jutro popijem
// kavu) is correct Croatian.

/** Spine entries for this batch. `masterOrder` is the lesson's final A2 position. */
export const SPINE = [
  {
    id: 'problems-at-work',
    masterOrder: 24,
    prerequisites: ['work-jobs', 'feelings'],
    objectives: [
      'Say what is going wrong at work or at home: Imam problem sa šefom, Računalo ne radi',
      'Complain mildly about the workload, the pay or the neighbours',
      'Answer a friend with sympathy: Žao mi je, Razumijem te, To je grozno',
    ],
  },
  {
    id: 'informal-email',
    masterOrder: 25,
    prerequisites: ['postcards-wishes', 'vocative-intro'],
    objectives: [
      'Open an email or letter to a friend: Dragi Ivane, Draga Ana',
      'Tell your news in the past, present and future, in the ti-form',
      'Close warmly and sign: Javi se!, Puno pozdrava, Tvoj Marko / Tvoja Ana',
    ],
  },
  {
    id: 'aspect-pairs',
    masterOrder: 29,
    prerequisites: ['aspect'],
    objectives: [
      'Know the common pairs: pisati/napisati, čitati/pročitati, kupovati/kupiti, dolaziti/doći, davati/dati, učiti/naučiti, piti/popiti',
      'See the three ways a pair is built: a prefix, a change of suffix, a different word',
      'Use the imperfective for "right now" and for how long; the perfective for one finished result',
    ],
  },
  {
    id: 'aspect-in-past',
    masterOrder: 30,
    prerequisites: ['aspect-pairs', 'past-tense'],
    objectives: [
      'Tell an activity from a result in the past: Čitao sam knjigu / Pročitao sam knjigu',
      'Use the imperfective for how long something went on: Pisala je dva sata',
      'Use the perfective for what got done and for a chain of events: Došao je, sjeo i naručio kavu',
    ],
  },
  {
    id: 'conditional-forms',
    masterOrder: 32,
    prerequisites: ['aspect-in-past', 'past-tense'],
    objectives: [
      'Build conditional I: bih, bi, bi, bismo, biste, bi + the -o / -la form of the verb',
      'Say it with and without the pronoun: Ja bih išao / Išao bih',
      'Make it negative and ask with it: Ne bih išao. Bi li išao? Biste li došli?',
    ],
  },
  {
    id: 'conditional-wishes',
    masterOrder: 33,
    prerequisites: ['conditional-forms'],
    objectives: [
      'Say what you would like: Htio / Htjela bih kavu. Volio / Voljela bih putovati.',
      'Ask politely: Bi li mi mogao pomoći? Biste li mi mogli pomoći?',
      'Suggest and advise: Mogli bismo ići u kino. Trebao bi se odmoriti.',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA2.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Problems at Work and at Home
  // ─────────────────────────────────────────────────────────
  {
    id: 'problems-at-work',
    title: 'Problems at Work and at Home',
    subtitle: 'Imam problem s… — saying what is wrong, and answering with sympathy',
    icon: '😩',
    level: 'A2',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Kako je na poslu?',
        body: 'Sooner or later every conversation with a friend reaches "How is work?" — and the honest answer is often a problem: too much work, a difficult boss, a computer that will not start, neighbours who play music all night. This lesson gives you the words to say what is wrong, and the words a good friend uses to answer.',
        icon: '😩',
      },
      {
        type: 'rule',
        title: 'Naming the Problem: Imam problem s…',
        body: 'The problem is WITH someone or something, so Croatian uses s + the instrumental (the "with" case): Imam problem s računalom. (I have a problem with the computer.) Imam problem sa šefom. (… with my boss.) Before a word starting with s, š, z or ž the preposition becomes sa: sa šefom, sa susjedima, sa ženom.',
        highlight: 'Imam problem sa šefom.',
      },
      {
        type: 'rule',
        title: 'Something Does Not Work, Something Is Missing',
        body: 'For a machine: Računalo ne radi. Printer opet ne radi. Auto je u kvaru (out of order). For something missing, use nema + the genitive, exactly as you learned in A1: U stanu nema tople vode. (There is no hot water in the flat.) Nema struje. (There is no electricity.) And for where it happens, the locative adjectives you just learned: u našem uredu, u novom stanu, na prošlom poslu.',
        highlight: 'nema + genitive',
      },
      {
        type: 'rule',
        title: 'What Somebody Did to You: the Dative Pronoun',
        body: 'Complaints are often about what someone did TO you, and "to me" is the dative pronoun mi, which sits in second place: Šef mi je dao previše posla. (My boss gave me too much work.) Kolega mi nije vratio novac. (My colleague did not give me back the money.) Kolege mi ne pomažu. (My colleagues do not help me.)',
        highlight: 'Šef mi je dao previše posla.',
      },
      {
        type: 'table',
        title: 'A Problem and a Friendly Answer',
        headers: ['Problem', 'English', 'A friend answers'],
        rows: [
          ['Imam previše posla.', 'I have too much work.', 'Joj, to je teško.'],
          ['Opet radim prekovremeno.', 'I am working overtime again.', 'Žao mi je.'],
          ['Plaća je jako mala.', 'The pay is very low.', 'Razumijem te.'],
          ['Imam problem s kolegom.', 'I have a problem with a colleague.', 'Što se dogodilo?'],
          ['Računalo opet ne radi.', "The computer isn't working again.", 'Nazovi informatičara!'],
          ['Boli me glava od stresa.', 'My head hurts from stress.', 'Odmori se malo.'],
          ['Susjedi su glasni svaku noć.', 'The neighbours are loud every night.', 'To je grozno!'],
        ],
      },
      {
        type: 'rule',
        title: 'Showing Sympathy',
        body: 'Žao mi je. (I am sorry — literally "it is a pity to me", with the dative mi.) Razumijem te. (I understand you.) Joj, to je grozno! (Oh, that is awful!) Što se dogodilo? (What happened?) Kako ti mogu pomoći? (How can I help you?) Nemoj se brinuti. (Do not worry.) Sve će biti u redu. (It will all be fine.)',
        highlight: 'Žao mi je.',
      },
      {
        type: 'example',
        title: 'At Work',
        items: [
          {
            hr: 'Imam problem sa šefom. Stalno je nervozan.',
            en: 'I have a problem with my boss. He is always on edge.',
            note: 'sa before š: sa šefom',
          },
          {
            hr: 'Šef mi je dao previše posla i moram raditi vikendom.',
            en: 'My boss gave me too much work and I have to work at weekends.',
            note: 'mi = to me, the dative pronoun',
          },
          {
            hr: 'Računalo u našem uredu opet ne radi.',
            en: "The computer in our office isn't working again.",
            note: 'u našem uredu — a locative adjective',
          },
          {
            hr: 'Kolega nikad ne dolazi na sastanke na vrijeme.',
            en: 'My colleague never comes to meetings on time.',
            note: 'na sastanke — going to, so the accusative',
          },
          {
            hr: 'Plaća je mala, a radim deset sati na dan.',
            en: 'The pay is low, and I work ten hours a day.',
            note: 'a sets two facts against each other',
          },
        ],
      },
      {
        type: 'example',
        title: 'At Home, and a Friend Answers',
        items: [
          {
            hr: 'Imam problem sa susjedima. Svaku noć slušaju glasnu glazbu.',
            en: 'I have a problem with the neighbours. Every night they listen to loud music.',
            note: 'sa susjedima — instrumental plural',
          },
          {
            hr: 'U našem stanu nema tople vode već tri dana.',
            en: 'There has been no hot water in our flat for three days.',
            note: 'nema + genitive: tople vode',
          },
          {
            hr: 'Auto je opet u kvaru.',
            en: 'The car has broken down again.',
            note: 'u kvaru = out of order',
          },
          {
            hr: 'Ne mogu spavati i stalno sam umorna.',
            en: "I can't sleep and I am always tired.",
            note: 'a woman speaking: umorna',
          },
          {
            hr: 'Žao mi je. Kako ti mogu pomoći?',
            en: "I'm sorry. How can I help you?",
            note: 'ti = to you, the dative of ti',
          },
          {
            hr: 'Razumijem te. I ja imam problem sa šefom.',
            en: 'I understand you. I have a problem with my boss too.',
            note: 'i ja = me too',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You want to say "I have a problem with my colleague." Which is correct?',
        options: ['Imam problem s kolegom.', 'Imam problem s kolega.', 'Imam problem na kolegu.'],
        correct: 0,
        explanation:
          'The problem is WITH someone, so s + the instrumental: kolega → kolegom. Na kolegu is "onto the colleague", and kolega is the subject form.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A friend says: "Opet radim prekovremeno." Which answer shows sympathy?',
        options: ['Drago mi je!', 'Žao mi je, to je teško.', 'Čestitam!', 'Baš lijepo!'],
        correct: 1,
        explanation:
          'Žao mi je means "I am sorry". Drago mi je (I am glad), Čestitam (congratulations) and Baš lijepo (how nice) would sound as if you were pleased.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) Leaving out the preposition: "Imam problem šefom". The problem is WITH somebody, so s + instrumental: Imam problem sa šefom. (2) Translating "I am sorry" word for word as "Ja sam žao". Croatian says it with the dative: Žao mi je. (3) Using s before s, š, z or ž: say sa šefom and sa susjedom, not s šefom. (4) "Nema topla voda": after nema, the missing thing goes into the genitive — Nema tople vode.',
        highlight: 'Žao mi je.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Imam problem ___ šefom."',
            options: ['s', 'sa', 'na', 'u'],
            correct: 1,
            explanation:
              'The problem is with the boss, so s + instrumental — and before š the preposition becomes sa: sa šefom.',
          },
          {
            q: 'Complete: "U uredu nema ___." (hot water)',
            options: ['topla voda', 'toplu vodu', 'tople vode', 'toplom vodom'],
            correct: 2,
            explanation:
              'After nema the missing thing is in the genitive, and the adjective follows the noun: tople vode.',
          },
          {
            q: 'How do you say "I am sorry" to a friend with a problem?',
            options: ['Ja sam žao.', 'Žao mi je.', 'Žao sam ti.', 'Žao je ja.'],
            correct: 1,
            explanation:
              'Croatian says it with the dative: Žao mi je — literally "it is a pity to me". The other three copy English word order or use the wrong case.',
          },
          {
            q: 'Which sentence says "My boss gave me too much work"?',
            options: [
              'Šef mi je dao previše posla.',
              'Šef je mi dao previše posla.',
              'Šef me je dao previše posla.',
              'Šef mi dao je previše posla.',
            ],
            correct: 0,
            explanation:
              'mi (to me) is the dative, and the clitics sit together in second place with je last: Šef mi je dao. me is the accusative — "gave me away".',
          },
          {
            q: 'Your friend says: "Ne mogu spavati, susjedi su jako glasni." What fits best?',
            options: ['Čestitam!', 'Sretan put!', 'To je grozno! Razumijem te.', 'Dobar tek!'],
            correct: 2,
            explanation:
              'Only To je grozno! Razumijem te. answers a complaint. The others are for good news, a journey and a meal.',
          },
          {
            q: 'Complete: "Računalo u ___ uredu ne radi." (our)',
            options: ['naš', 'našim', 'našeg', 'našem'],
            correct: 3,
            explanation: 'u + locative for where, and ured is masculine: u našem uredu.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Problems — Key Takeaways',
        points: [
          'Imam problem s + instrumental: s računalom, sa šefom (sa before s, š, z, ž)',
          'Something broken: Računalo ne radi. Auto je u kvaru.',
          'Something missing: nema + genitive — Nema tople vode.',
          'What someone did to you: Šef mi je dao previše posla.',
          'Sympathy: Žao mi je. Razumijem te. To je grozno! Kako ti mogu pomoći?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Writing to a Friend
  // ─────────────────────────────────────────────────────────
  {
    id: 'informal-email',
    title: 'Writing to a Friend',
    subtitle: 'An informal email, from Dragi Ivane to Tvoja Ana',
    icon: '✉️',
    level: 'A2',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'An Email to a Friend',
        body: "An email to a friend has a shape: a warm opening with the friend's name, a line asking how they are, your news, and a friendly goodbye with your name. Each part has two or three set phrases, and each phrase uses grammar you already know — the vocative, hvala na + locative, the past and the future.",
        icon: '✉️',
      },
      {
        type: 'rule',
        title: 'The Opening: Dragi + the Vocative',
        body: 'Dragi (to a man) or Draga (to a woman) means "dear". The NAME is in the vocative, the form for calling someone that you met in A1: Dragi Ivane, Dragi Petre, Dragi Tomislave. Names like Ana, Marija or Marko look the same in the vocative: Draga Ana, Dragi Marko. Family: Draga mama, Dragi tata, Draga bako. More casual: Bog, Ana!',
        highlight: 'Dragi Ivane,',
      },
      {
        type: 'rule',
        title: 'The First Lines',
        body: 'Kako si? (How are you?) Što ima novo? (What is new?) Hvala na poruci! / Hvala na pismu! — hvala na takes the locative. If you have been quiet for a while: Dugo ti se nisam javio. (a man) / Dugo ti se nisam javila. (a woman) — "I haven\'t been in touch with you for a long time". Everything is in the ti-form, written with a small letter.',
        highlight: 'Hvala na poruci!',
      },
      {
        type: 'rule',
        title: 'Your News',
        body: 'Use the past for what happened (Prošli mjesec sam promijenila posao.), the present for how things are (Posao je zanimljiv.) and the future for plans (U kolovozu ću doći u Zagreb.). Locative adjectives say where: u novom stanu, u maloj firmi.',
        highlight: 'U kolovozu ću doći u Zagreb.',
      },
      {
        type: 'table',
        title: 'To a Friend vs a Formal Letter',
        headers: ['', 'To a friend', 'Formal'],
        rows: [
          ['Opening', 'Dragi Ivane, / Draga Ana,', 'Poštovana gospođo Kovač,'],
          ['First line', 'Kako si? Hvala na poruci!', 'Zahvaljujem na Vašem pismu.'],
          ['Asking for a reply', 'Javi se! / Piši mi!', 'Molim Vas za odgovor.'],
          ['Closing', 'Puno pozdrava! / Pozdrav!', 'S poštovanjem,'],
          ['Signature', 'Tvoj Marko / Tvoja Ana', 'Marko Horvat'],
        ],
      },
      {
        type: 'rule',
        title: 'The Goodbye',
        body: 'Javi se! (Get in touch!) Piši mi! (Write to me!) Vidimo se uskoro! (See you soon!) Pozdravi mamu i tatu! (Say hi to your mum and dad! — pozdraviti takes the accusative.) Then the closing: Pozdrav! or Puno pozdrava! (literally "many greetings"), Grlim te! (a hug). Sign with tvoj or tvoja — it agrees with YOU, the writer: Tvoj Marko, Tvoja Ana.',
        highlight: 'Puno pozdrava!',
      },
      {
        type: 'example',
        title: 'Ana Writes to Marija',
        items: [
          {
            hr: 'Draga Marija, hvala na poruci!',
            en: 'Dear Marija, thanks for your message!',
            note: 'hvala na + locative: poruci',
          },
          {
            hr: 'Dugo ti se nisam javila, ali imam puno novosti.',
            en: "I haven't been in touch for a long time, but I have lots of news.",
            note: 'a woman writing: javila',
          },
          {
            hr: 'Prošli mjesec sam počela raditi u maloj firmi u Splitu.',
            en: 'Last month I started working at a small company in Split.',
            note: 'u maloj firmi — a locative adjective',
          },
          {
            hr: 'Posao je zanimljiv, a ljudi su jako ljubazni.',
            en: 'The job is interesting, and the people are very kind.',
            note: 'the present for how things are now',
          },
          {
            hr: 'U kolovozu ću doći u Zagreb. Imaš li vremena?',
            en: 'In August I will come to Zagreb. Do you have time?',
            note: 'ću doći — the future for a plan',
          },
          {
            hr: 'Javi se! Puno pozdrava, tvoja Ana',
            en: 'Get in touch! Lots of love, your Ana',
            note: 'tvoja — Ana is a woman',
          },
        ],
      },
      {
        type: 'example',
        title: 'Marko Writes to Ivan',
        items: [
          {
            hr: 'Dragi Ivane, kako si? Što ima novo?',
            en: "Dear Ivan, how are you? What's new?",
            note: 'Ivane — the vocative of Ivan',
          },
          {
            hr: 'Ja sam dobro, ali imam puno posla.',
            en: "I'm fine, but I have a lot of work.",
            note: 'puno + genitive: posla',
          },
          {
            hr: 'Prošli vikend smo bili na moru, na Korčuli.',
            en: 'Last weekend we were at the seaside, on Korčula.',
            note: 'na + locative: na moru, na Korčuli',
          },
          {
            hr: 'Pozdravi mamu i tatu i piši mi!',
            en: 'Say hi to your mum and dad, and write to me!',
            note: 'pozdravi — the imperative of pozdraviti',
          },
          {
            hr: 'Vidimo se uskoro! Tvoj Marko',
            en: 'See you soon! Your Marko',
            note: 'tvoj — Marko is a man',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are writing to your friend Petar. How do you open?',
        options: ['Dragi Petar,', 'Dragi Petre,', 'Draga Petre,', 'Poštovani Petre,'],
        correct: 1,
        explanation:
          'The name goes into the vocative (Petar → Petre) and dragi stays masculine. Poštovani is for formal letters.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Ana is signing an email to her best friend. Which closing fits?',
        options: ['Tvoj Ana', 'Tvoja Ana', 'S poštovanjem, Ana', 'Tvoje Ana'],
        correct: 1,
        explanation:
          'tvoja agrees with the writer, and Ana is a woman. S poštovanjem belongs in a formal letter.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) The name left in its basic form: "Dragi Ivan,". In an address the name takes the vocative: Dragi Ivane. (2) Tvoj or tvoja not matching the writer: a woman signs Tvoja Ana, a man Tvoj Marko — it agrees with you, not with the friend. (3) Mixing registers: Poštovani to a friend, or Bog and ti to someone you call gospođo. (4) Forgetting the locative after hvala na: it is hvala na poruci, not hvala na poruka.',
        highlight: 'Dragi Ivane',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'You are writing to your friend Tomislav. Which opening is correct?',
            options: [
              'Dragi Tomislav,',
              'Draga Tomislave,',
              'Dragi Tomislave,',
              'Dragi Tomislava,',
            ],
            correct: 2,
            explanation:
              'Masculine names like Tomislav add -e in the vocative, and dragi agrees with a man: Dragi Tomislave.',
          },
          {
            q: 'Complete: "Hvala na ___!" (your message)',
            options: ['poruka', 'poruku', 'poruke', 'poruci'],
            correct: 3,
            explanation: 'hvala na takes the locative; poruka → poruci (k changes to c before -i).',
          },
          {
            q: 'Marko (a man) is signing an email to a friend. Which is right?',
            options: ['Tvoj Marko', 'Tvoja Marko', 'Tvoje Marko', 'Tvojeg Marko'],
            correct: 0,
            explanation: 'tvoj agrees with the writer, and Marko is a man.',
          },
          {
            q: 'Which closing belongs in a FORMAL letter, not an email to a friend?',
            options: ['Puno pozdrava!', 'Javi se!', 'S poštovanjem,', 'Grlim te!'],
            correct: 2,
            explanation:
              'S poštovanjem (with respect) closes a formal letter. The other three are for friends.',
          },
          {
            q: 'Complete: "Dugo ___ se nisam javila." (to you — a friend)',
            options: ['Vam', 'ti', 'te', 'tebe'],
            correct: 1,
            explanation:
              'javiti se takes the dative, and a friend is ti: Dugo ti se nisam javila. Vam is formal; te and tebe are accusative.',
          },
          {
            q: 'What does "Pozdravi mamu!" mean at the end of an email?',
            options: [
              'Say hi to your mum!',
              'Call your mum!',
              'Mum says hi!',
              'Write to your mum!',
            ],
            correct: 0,
            explanation:
              'pozdraviti = to greet, so Pozdravi mamu! asks your friend to pass your greetings on.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Writing to a Friend — Key Takeaways',
        points: [
          'Open with Dragi / Draga + the name in the vocative: Dragi Ivane, Draga Ana',
          'First lines: Kako si? Hvala na poruci! Dugo ti se nisam javio / javila.',
          'News: the past for what happened, the future for plans',
          'Close: Javi se! Pozdravi mamu! Puno pozdrava!',
          'Sign with tvoj or tvoja, agreeing with yourself',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Aspect Pairs
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-pairs',
    title: 'Aspect Pairs',
    subtitle: 'Pisati / napisati — how one verb finds its partner',
    icon: '🔗',
    level: 'A2',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Every Verb Has a Partner',
        body: 'In the last lesson you met aspect: the imperfective verb (nesvršeni glagol) describes the process — doing it, how long, right now; the perfective verb (svršeni glagol) describes one finished result. Most verbs come as a pair. This lesson is about the practical part: the pairs you need every day, and how to recognise which partner is which.',
        icon: '🔗',
      },
      {
        type: 'rule',
        title: 'Way 1: Add a Prefix',
        body: 'The commonest pattern. The plain verb is imperfective, and a short prefix in front makes it perfective: pisati → napisati, čitati → pročitati, učiti → naučiti, piti → popiti, jesti → pojesti, gledati → pogledati. The prefix is different from verb to verb, so learn each pair together, like a word and its gender.',
        highlight: 'pisati → napisati',
      },
      {
        type: 'rule',
        title: 'Way 2: Change the Suffix',
        body: 'Here the PERFECTIVE is usually the shorter verb, and the imperfective is stretched with an extra syllable: kupiti → kupovati, dati → davati, otvoriti → otvarati, zatvoriti → zatvarati, vratiti → vraćati. So in these pairs the longer verb is the imperfective: kupujem (I buy, I am buying) comes from kupovati.',
        highlight: 'kupiti → kupovati',
      },
      {
        type: 'rule',
        title: 'Way 3: A Different Word',
        body: 'A few pairs do not share a visible root, and must simply be learned: govoriti / reći (to speak, to say). Others are so irregular that they feel like two words: dolaziti / doći (to come), odlaziti / otići (to leave).',
        highlight: 'govoriti / reći',
      },
      {
        type: 'table',
        title: 'The Pairs to Know',
        headers: ['Imperfective (process)', 'Perfective (one finished act)', 'Meaning', 'How'],
        rows: [
          ['pisati', 'napisati', 'to write', 'prefix na-'],
          ['čitati', 'pročitati', 'to read', 'prefix pro-'],
          ['učiti', 'naučiti', 'to learn', 'prefix na-'],
          ['piti', 'popiti', 'to drink', 'prefix po-'],
          ['kupovati', 'kupiti', 'to buy', 'suffix'],
          ['davati', 'dati', 'to give', 'suffix'],
          ['otvarati', 'otvoriti', 'to open', 'suffix'],
          ['dolaziti', 'doći', 'to come', 'irregular'],
          ['govoriti', 'reći', 'to speak, to say', 'different word'],
        ],
      },
      {
        type: 'rule',
        title: 'Choosing After moram, želim, ću',
        body: 'Both partners have an infinitive, so after moram, želim, mogu or ću you choose by meaning. One finished result: Moram napisati e-mail. Sutra ću kupiti kruh. The process, or how long: Moram dva sata učiti. And for RIGHT NOW only the imperfective works: Sad pišem pismo. A perfective verb in the present can never mean "I am doing it at this moment".',
        highlight: 'Sad pišem pismo.',
      },
      {
        type: 'example',
        title: 'Process or Result?',
        items: [
          {
            hr: 'Ana svaki dan čita novine.',
            en: 'Ana reads the paper every day.',
            note: 'čita — a habit, imperfective',
          },
          {
            hr: 'Moram pročitati ovu knjigu do petka.',
            en: 'I have to finish reading this book by Friday.',
            note: 'pročitati — the whole book, finished',
          },
          {
            hr: 'Djeca uče hrvatski u školi.',
            en: 'The children are learning Croatian at school.',
            note: 'uče — a process',
          },
          {
            hr: 'Želim naučiti sto riječi do ljeta.',
            en: 'I want to learn a hundred words by the summer.',
            note: 'naučiti — learned and known',
          },
          {
            hr: 'U ovom dućanu uvijek kupujem voće.',
            en: 'I always buy fruit in this shop.',
            note: 'kupujem — from kupovati, a habit',
          },
          {
            hr: 'Sutra ću kupiti novi mobitel.',
            en: 'Tomorrow I will buy a new phone.',
            note: 'kupiti — one purchase',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Pairs at Work',
        items: [
          {
            hr: 'Ne mogu razgovarati, sad pišem e-mail šefu.',
            en: "I can't talk, I'm writing an email to my boss right now.",
            note: 'right now — imperfective pišem',
          },
          {
            hr: 'Moram napisati e-mail šefu do pet sati.',
            en: 'I have to write an email to my boss by five.',
            note: 'napisati — one email, finished by a deadline',
          },
          {
            hr: 'Baka mi uvijek daje kolače.',
            en: 'Grandma always gives me cakes.',
            note: 'daje — from davati, a habit',
          },
          {
            hr: 'Možeš li mi dati olovku?',
            en: 'Can you give me a pen?',
            note: 'dati — one act of giving',
          },
          {
            hr: 'Vlak dolazi u osam.',
            en: 'The train arrives at eight.',
            note: 'dolazi — the timetable, a regular event',
          },
          {
            hr: 'Doći ću sutra navečer.',
            en: 'I will come tomorrow evening.',
            note: 'doći — one arrival',
          },
          {
            hr: 'Popij čašu vode!',
            en: 'Drink a glass of water!',
            note: 'popij — one glass, all of it',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which verb is the perfective partner of pisati?',
        options: ['napisati', 'pisao', 'pisanje'],
        correct: 0,
        explanation:
          'The prefix na- makes pisati perfective: napisati. pisao is a past form and pisanje a noun.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Right now — "I am reading a book." Which is correct?',
        options: ['Sad pročitam knjigu.', 'Sad čitam knjigu.', 'Sad ću pročitati knjigu.'],
        correct: 1,
        explanation:
          'Right now is a process, so the imperfective: čitam. A perfective present cannot mean "at this moment", and ću pročitati is a future.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) A perfective for "right now": "Sad napišem pismo". A perfective in the present cannot describe what you are doing at this moment, so say Sad pišem pismo. (2) A perfective with "how long": "Moram dva sata naučiti" — a finished result cannot last two hours; the process can: Moram dva sata učiti. (3) Reading kupovati as the "special" form: in suffix pairs the LONGER verb is the imperfective — kupujem is the habit, kupiti the single purchase.',
        highlight: 'Sad pišem pismo.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'What is the perfective partner of čitati?',
            options: ['čitanje', 'pročitati', 'čitao', 'čitam'],
            correct: 1,
            explanation:
              'The prefix pro- makes čitati perfective: pročitati — to read through, to the end.',
          },
          {
            q: 'Which pair is built by changing the suffix, not by a prefix?',
            options: ['pisati — napisati', 'kupovati — kupiti', 'učiti — naučiti', 'piti — popiti'],
            correct: 1,
            explanation:
              'kupiti and kupovati share a root and differ in the suffix; the other three add a prefix.',
          },
          {
            q: 'Complete: "Ne mogu sada razgovarati, ___ e-mail šefu." (I am in the middle of writing)',
            options: ['napišem', 'napisati', 'pišem', 'napisao'],
            correct: 2,
            explanation:
              'At this moment = a process, so the imperfective in the present: pišem. A perfective present cannot mean "now".',
          },
          {
            q: 'Complete: "Moram ___ cijelu knjigu do petka." (finish reading)',
            options: ['pročitati', 'čitati', 'čitam', 'pročitam'],
            correct: 0,
            explanation:
              'After moram the infinitive; the whole book, finished by a deadline: pročitati.',
          },
          {
            q: 'What is the imperfective partner of dati?',
            options: ['dajati', 'podati', 'dadati', 'davati'],
            correct: 3,
            explanation:
              'dati is the short perfective; its imperfective is stretched with -va-: davati (dajem, daješ…).',
          },
          {
            q: 'Which of these verbs is perfective?',
            options: ['kupovati', 'učiti', 'popiti', 'davati'],
            correct: 2,
            explanation: 'popiti is piti with the prefix po-. The other three are imperfective.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Aspect Pairs — Key Takeaways',
        points: [
          'Prefix pairs: pisati/napisati, čitati/pročitati, učiti/naučiti, piti/popiti',
          'Suffix pairs: kupovati/kupiti, davati/dati, otvarati/otvoriti — the longer one is imperfective',
          'Different words: govoriti/reći; irregular: dolaziti/doći',
          'Right now and how long: imperfective — Sad pišem. Moram dva sata učiti.',
          'One finished result: perfective — Moram napisati e-mail.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Aspect in the Past
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-in-past',
    title: 'Aspect in the Past',
    subtitle: 'Čitao sam knjigu or Pročitao sam knjigu — did you finish?',
    icon: '📖',
    level: 'A2',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Did You Finish?',
        body: 'English "I read the book yesterday" hides a question that Croatian makes you answer: did you finish it? Čitao sam knjigu says you spent time reading. Pročitao sam knjigu says you got to the end. The past tense is built the same way for both — you already know it — and the choice of verb carries the meaning.',
        icon: '📖',
      },
      {
        type: 'rule',
        title: 'Imperfective Past: the Activity',
        body: 'Čitao sam knjigu. = I was reading a book, I did some reading. It says the activity went on; it says nothing about the end. Use it for HOW LONG (dva sata, cijeli dan, dugo), for what was going on in the background (Padala je kiša.) and for habits (Svaki dan je pisala.).',
        highlight: 'Čitao sam knjigu.',
      },
      {
        type: 'rule',
        title: 'Perfective Past: the Result',
        body: 'Pročitao sam knjigu. = I read the book, to the end. The result is there. Use it for one completed act, for how long something TOOK with za (Napisala je pismo za dva sata — it took her two hours), and for a chain of events, each finished before the next: Došao je, sjeo i naručio kavu.',
        highlight: 'Pročitao sam knjigu.',
      },
      {
        type: 'table',
        title: 'Side by Side',
        headers: ['Imperfective — the activity', 'Perfective — the result'],
        rows: [
          ['Čitao sam knjigu.', 'Pročitao sam knjigu.'],
          ['Pisala je pismo dva sata.', 'Napisala je pismo za dva sata.'],
          ['Učio sam riječi cijelu večer.', 'Naučio sam sve riječi.'],
          ['Pio je kavu.', 'Popio je kavu.'],
          ['Kupovali smo cijelo popodne.', 'Kupili smo novi auto.'],
        ],
      },
      {
        type: 'rule',
        title: 'Signal Words',
        body: 'Words for how long point to the imperfective: dva sata, cijeli dan, cijelu večer, dugo. Words that announce a result point to the perfective: za dva sata (it took two hours), konačno (finally), odmah (at once), cijelu knjigu (the whole book, to the end). In a story, a row of finished events is perfective all the way: Probudio sam se, obukao se i otišao na posao.',
        highlight: 'za dva sata',
      },
      {
        type: 'rule',
        title: 'Not Read vs Not Finished',
        body: "The negative keeps the same difference. Nisam čitao tu knjigu. = I haven't read that book (I never even opened it). Nisam pročitao knjigu. = I haven't read the book through (I may have started).",
        highlight: 'Nisam čitao tu knjigu.',
      },
      {
        type: 'example',
        title: 'The Activity',
        items: [
          {
            hr: 'Jučer sam cijeli dan čitao knjigu.',
            en: 'Yesterday I spent the whole day reading a book.',
            note: 'cijeli dan — how long, so čitao',
          },
          {
            hr: 'Pisala je e-mailove dva sata.',
            en: 'She was writing emails for two hours.',
            note: 'dva sata — how long, so pisala',
          },
          {
            hr: 'Kao dijete svako ljeto sam išao na more.',
            en: 'As a child I went to the seaside every summer.',
            note: 'a habit — ići is imperfective',
          },
          {
            hr: 'Padala je kiša i nismo izašli.',
            en: "It was raining and we didn't go out.",
            note: 'padala — the background',
          },
          {
            hr: 'Dugo smo učili za ispit.',
            en: 'We studied for the exam for a long time.',
            note: 'dugo — how long, so učili',
          },
        ],
      },
      {
        type: 'example',
        title: 'The Result',
        items: [
          {
            hr: 'Pročitao sam cijelu knjigu za tri dana.',
            en: 'I read the whole book in three days.',
            note: 'za tri dana — how long it took, so pročitao',
          },
          {
            hr: 'Napisala je pismo i poslala ga baki.',
            en: 'She wrote the letter and sent it to grandma.',
            note: 'two finished acts, one after the other',
          },
          {
            hr: 'Konačno smo kupili novi auto.',
            en: 'We finally bought a new car.',
            note: 'konačno — the result is here',
          },
          {
            hr: 'Došao je kući, popio kavu i otišao spavati.',
            en: 'He came home, drank a coffee and went to bed.',
            note: 'a chain of events — all perfective',
          },
          {
            hr: 'Jesi li naučio nove riječi?',
            en: 'Have you learned the new words?',
            note: 'naučio — asking about the result',
          },
          {
            hr: 'Nisam čitao tu knjigu.',
            en: "I haven't read that book (at all).",
            note: 'čitao — not even started',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'She was writing the letter for two hours. Which is correct?',
        options: [
          'Pisala je pismo dva sata.',
          'Napisala je pismo dva sata.',
          'Napisat će pismo dva sata.',
        ],
        correct: 0,
        explanation:
          'How long = the activity, so the imperfective pisala. A finished result cannot last two hours.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete the chain: "Ušao je, sjeo i ___ kavu." (ordered)',
        options: ['naručivao', 'naručio', 'naručuje'],
        correct: 1,
        explanation:
          'A row of finished events — he came in, sat down, ordered — so the perfective naručio.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) A perfective with "how long": "Pročitao sam knjigu dva sata". A finished result cannot last two hours. Say Čitao sam knjigu dva sata, or Pročitao sam knjigu za dva sata (it took two hours). (2) An imperfective in a chain of events: "Ušao je, sjedao i naručivao" turns a quick story into a slow-motion film. Say Ušao je, sjeo i naručio. (3) Reading "Čitao sam knjigu" as "I read the whole book" — it only says you did some reading.',
        highlight: 'Čitao sam knjigu dva sata',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Jučer sam ___ cijeli dan." (was studying)',
            options: ['naučio', 'učio', 'naučiti', 'učim'],
            correct: 1,
            explanation: 'cijeli dan is how long, so the imperfective past: učio.',
          },
          {
            q: 'Complete: "___ sam cijelu knjigu za tri dana." (I read — to the end)',
            options: ['Čitao', 'Čitam', 'Pročitam', 'Pročitao'],
            correct: 3,
            explanation: 'The whole book, finished, and za tri dana is how long it took: Pročitao.',
          },
          {
            q: 'What does "Nisam čitao tu knjigu" mean?',
            options: [
              "I haven't read that book at all.",
              "I didn't get to the end of that book.",
              "I'm not reading that book now.",
              "I won't read that book.",
            ],
            correct: 0,
            explanation:
              'The imperfective denies the activity itself: not even started. Not finishing would be Nisam pročitao.',
          },
          {
            q: 'Complete: "Ušao je, sjeo i ___ kavu."',
            options: ['naručivao', 'naručuje', 'naručio', 'naručivati'],
            correct: 2,
            explanation: 'A chain of finished events, so the perfective past: naručio.',
          },
          {
            q: 'Which sentence is WRONG?',
            options: [
              'Pisala je dva sata.',
              'Napisala je pismo dva sata.',
              'Napisala je pismo za dva sata.',
              'Pisala je pismo cijelo jutro.',
            ],
            correct: 1,
            explanation:
              'A finished result cannot last two hours. With napisala the time it took needs za: za dva sata.',
          },
          {
            q: 'Your friend asks whether you have finished the report. Which question did she ask?',
            options: [
              'Jesi li pisao izvještaj?',
              'Jesi li napisao izvještaj?',
              'Pišeš li izvještaj?',
              'Hoćeš li pisati izvještaj?',
            ],
            correct: 1,
            explanation:
              'Asking about the result — is it done? — uses the perfective: Jesi li napisao izvještaj?',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Aspect in the Past — Key Takeaways',
        points: [
          'Čitao sam knjigu = I did some reading. Pročitao sam knjigu = I finished it.',
          'How long (dva sata, cijeli dan, dugo) → imperfective',
          'How long it took (za dva sata), a result, konačno → perfective',
          'A chain of events → perfective: Došao je, sjeo i naručio kavu.',
          'Nisam čitao = not at all; Nisam pročitao = not to the end',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Conditional I — the Forms
  // ─────────────────────────────────────────────────────────
  {
    id: 'conditional-forms',
    title: 'Would: Conditional I',
    subtitle: 'Ja bih išao, Išao bih, Ne bih išao, Bi li išao?',
    icon: '🤔',
    level: 'A2',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'I Would Go',
        body: 'English builds "would" with one little word. Croatian builds it almost exactly like the past tense you already know — Išao sam (I went) — with one change: instead of sam, si, je you use a set of short forms of biti: bih, bi, bismo, biste. This form is called conditional I (kondicional prvi).',
        icon: '🤔',
      },
      {
        type: 'rule',
        title: 'The Recipe',
        body: 'Conditional = bih / bi / bi / bismo / biste / bi + the l-participle, the past form ending in -o, -la or -li that you know from Išao sam, Radila je. Ja bih išao. (I would go.) Ona bi došla. (She would come.) Mi bismo radili. (We would work.)',
        highlight: 'bih, bi, bi, bismo, biste, bi',
      },
      {
        type: 'table',
        title: 'Every Person',
        headers: ['Person', 'Auxiliary', 'Example', 'English'],
        rows: [
          ['ja', 'bih', 'Ja bih išao / išla.', 'I would go'],
          ['ti', 'bi', 'Ti bi išao / išla.', 'you would go'],
          ['on / ona', 'bi', 'On bi išao. Ona bi išla.', 'he / she would go'],
          ['mi', 'bismo', 'Mi bismo išli.', 'we would go'],
          ['vi', 'biste', 'Vi biste išli.', 'you (plural, formal) would go'],
          ['oni / one', 'bi', 'Oni bi išli. One bi išle.', 'they would go'],
        ],
      },
      {
        type: 'rule',
        title: 'The Participle Agrees',
        body: 'Exactly as in the past, the participle follows the subject: a man says Išao bih, a woman Išla bih; for a group Išli bismo (išle if they are all women). For polite Vi to one person the participle is plural: Biste li došli?',
        highlight: 'Išla bih',
      },
      {
        type: 'rule',
        title: 'Second Place, Like sam',
        body: 'bih, bi, bismo and biste are clitics: short words that sit in second place. With the pronoun: Ja bih išao. Without it, the participle comes first: Išao bih. Never start with the clitic: "Bih išao" is wrong. Other clitics come after it: Ja bih ti pomogao. Rado bih se odmorio. Rekla bih mu.',
        highlight: 'Išao bih',
      },
      {
        type: 'rule',
        title: 'Negative and Question',
        body: 'Negative: ne + bih, written as two words: Ne bih išao. Ja ne bih išao. Oni ne bi kupili taj stan. Question: the auxiliary goes first and li follows it: Bi li išao? (a friend) Biste li došli? (formal) Bismo li mogli sjesti ovdje?',
        highlight: 'Ne bih išao.',
      },
      {
        type: 'example',
        title: 'The Forms',
        items: [
          {
            hr: 'Ja bih išao u kino.',
            en: 'I would go to the cinema.',
            note: 'ja + bih + išao (a man)',
          },
          {
            hr: 'Išla bih na more.',
            en: 'I would go to the seaside.',
            note: 'no pronoun — the participle first, bih second',
          },
          {
            hr: 'Ti bi to razumio.',
            en: 'You would understand that.',
            note: 'ti → bi',
          },
          {
            hr: 'Mi bismo došli u subotu.',
            en: 'We would come on Saturday.',
            note: 'mi → bismo, participle došli',
          },
          {
            hr: 'Vi biste to brzo naučili.',
            en: 'You would learn that quickly.',
            note: 'vi → biste, participle naučili',
          },
          {
            hr: 'Oni bi radili vikendom.',
            en: 'They would work at weekends.',
            note: 'oni → bi, participle radili',
          },
        ],
      },
      {
        type: 'example',
        title: 'Negative and Questions',
        items: [
          {
            hr: 'Ne bih išla bez kišobrana.',
            en: "I wouldn't go without an umbrella.",
            note: 'ne + bih, two words; išla — a woman',
          },
          {
            hr: 'Ja ne bih to radio.',
            en: "I wouldn't do that.",
            note: 'with the pronoun: ja ne bih',
          },
          {
            hr: 'Bi li išao sa mnom?',
            en: 'Would you go with me?',
            note: 'bi + li at the start, to a friend',
          },
          {
            hr: 'Biste li došli sutra?',
            en: 'Would you come tomorrow?',
            note: 'formal vi: biste li',
          },
          {
            hr: 'Bismo li mogli sjesti ovdje?',
            en: 'Could we sit here?',
            note: 'mi: bismo li',
          },
          {
            hr: 'Oni ne bi kupili taj stan.',
            en: "They wouldn't buy that flat.",
            note: 'oni ne bi',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'I (a woman) would go. Which is correct?',
        options: ['Ja bih išla.', 'Bih ja išla.', 'Ja sam išla.', 'Ja bih išao.'],
        correct: 0,
        explanation:
          "ja → bih, and a woman uses išla. Bih cannot come first, sam makes it the past, and išao is a man's form.",
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Ask politely (formal): "Would you come?"',
        options: ['Biste li došli?', 'Li biste došli?', 'Došli li biste?', 'Bi li ste došli?'],
        correct: 0,
        explanation:
          'For vi the auxiliary is biste, it starts the question, and li follows it: Biste li došli?',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) Starting with the clitic: "Bih išao u kino". bih can never be first — say Išao bih u kino or Ja bih išao u kino. (2) Forgetting that the participle agrees: a woman says Išla bih, not Išao bih. (3) Using sam: "Ja sam išao" is the past (I went), not "I would go". (4) In casual speech you will hear bi used for every person, but the standard forms are ja bih, mi bismo, vi biste — write and say those.',
        highlight: 'Išao bih u kino',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Mi ___ došli u subotu."',
            options: ['bih', 'bi', 'bismo', 'biste'],
            correct: 2,
            explanation: 'For mi the conditional auxiliary is bismo.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Bih išao u kino.',
              'Išao bih u kino.',
              'Išao u kino bih.',
              'Bih u kino išao.',
            ],
            correct: 1,
            explanation: 'bih is a clitic and must be second: participle first, then bih.',
          },
          {
            q: 'Ana says "I would go to the seaside." Which is correct?',
            options: [
              'Išao bih na more.',
              'Išla sam na more.',
              'Išla bih na more.',
              'Išla bi na more.',
            ],
            correct: 2,
            explanation:
              'Ana is a woman (išla) speaking about herself (bih). Išla bi would be "she would go", and sam makes it the past.',
          },
          {
            q: 'How do you say "I wouldn\'t go"?',
            options: ['Ne bih išao.', 'Bih ne išao.', 'Nebih išao.', 'Ne išao bih.'],
            correct: 0,
            explanation: 'ne comes before bih and is written separately: Ne bih išao.',
          },
          {
            q: 'Complete: "___ li mi pomogli?" (formal you)',
            options: ['Bi', 'Bismo', 'Bih', 'Biste'],
            correct: 3,
            explanation: 'Formal vi takes biste, and the participle pomogli is plural to match.',
          },
          {
            q: 'Ask a friend (a man): "Would you go with me?"',
            options: [
              'Bi li išao sa mnom?',
              'Li bi išao sa mnom?',
              'Bi išao li sa mnom?',
              'Biste li išao sa mnom?',
            ],
            correct: 0,
            explanation:
              'ti → bi, the question starts with bi, and li follows it. Biste would need the plural participle išli.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Conditional I — Key Takeaways',
        points: [
          'bih, bi, bi, bismo, biste, bi + the l-participle (-o, -la, -li)',
          'The participle agrees: Išao bih (a man), Išla bih (a woman)',
          'bih is a clitic: Ja bih išao or Išao bih — never Bih išao',
          'Negative: Ne bih išao. Question: Bi li išao? Biste li došli?',
          'Other clitics follow it: Ja bih ti pomogao. Rado bih se odmorio.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Wishes and Polite Requests
  // ─────────────────────────────────────────────────────────
  {
    id: 'conditional-wishes',
    title: 'Wishes and Polite Requests',
    subtitle: 'Htio bih kavu, Volio bih putovati, Biste li mi mogli pomoći?',
    icon: '☕',
    level: 'A2',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Politest Form in Croatian',
        body: 'Hoću kavu means "I want coffee" — correct grammar, and it sounds like a demand. Htio bih kavu means "I would like a coffee", and that is how you order. The conditional you just learned is what makes Croatian polite: wishes, requests, suggestions and advice all use it.',
        icon: '☕',
      },
      {
        type: 'rule',
        title: 'I Would Like: Htio bih',
        body: 'htjeti in the conditional: Htio bih (a man), Htjela bih (a woman). What you want is in the accusative: Htio bih kavu. Htjela bih juhu. With a verb, the infinitive follows: Htjela bih platiti. Želio bih / Željela bih (from željeti) is a little more formal, and it is what a waiter uses: Što biste željeli?',
        highlight: 'Htjela bih',
      },
      {
        type: 'rule',
        title: "I'd Love To: Volio bih",
        body: 'voljeti in the conditional is for wishes and dreams, often for something that is not happening now: Volio bih putovati po svijetu. Voljela bih živjeti na moru. Volio bih jednog dana vidjeti Dubrovnik.',
        highlight: 'Volio bih putovati',
      },
      {
        type: 'rule',
        title: 'Asking Politely',
        body: 'moći in the conditional softens a request. To a friend: Bi li mi mogao pomoći? (to a man) / Bi li mi mogla dodati sol? (to a woman). To a stranger or anyone you call Vi: Biste li mi mogli pomoći? Biste li mi mogli pokazati put do kolodvora? Very formal: Biste li bili tako ljubazni i zatvorili prozor?',
        highlight: 'Biste li mi mogli pomoći?',
      },
      {
        type: 'rule',
        title: 'Suggesting and Advising',
        body: 'mogli bismo = we could: Mogli bismo ići u kino. (a suggestion) trebao bi / trebala bi = you should: Trebao bi se odmoriti. Trebala bi nazvati mamu. (advice to a friend — the participle agrees with the friend).',
        highlight: 'Mogli bismo ići u kino.',
      },
      {
        type: 'table',
        title: 'Direct and Softer',
        headers: ['Direct', 'Softer (conditional)', 'English'],
        rows: [
          ['Hoću kavu.', 'Htio / Htjela bih kavu.', "I'd like a coffee."],
          ['Dodaj mi sol.', 'Bi li mi dodao sol?', 'Would you pass me the salt?'],
          ['Pomozite mi.', 'Biste li mi mogli pomoći?', 'Could you help me?'],
          ['Idemo u kino!', 'Mogli bismo ići u kino.', 'We could go to the cinema.'],
          ['Odmori se!', 'Trebao bi se odmoriti.', 'You should rest.'],
          ['Želim putovati.', 'Volio / Voljela bih putovati.', "I'd love to travel."],
        ],
      },
      {
        type: 'example',
        title: 'Wishes',
        items: [
          {
            hr: 'Htio bih kavu s mlijekom, molim.',
            en: "I'd like a coffee with milk, please.",
            note: 'htio — a man; kavu — the accusative',
          },
          {
            hr: 'Htjela bih platiti.',
            en: "I'd like to pay.",
            note: 'htjela — a woman; then the infinitive',
          },
          {
            hr: 'Volio bih živjeti na moru.',
            en: "I'd love to live by the sea.",
            note: 'volio — a wish, a dream',
          },
          {
            hr: 'Voljela bih jednog dana posjetiti Dubrovnik.',
            en: "I'd love to visit Dubrovnik one day.",
            note: 'voljela + infinitive',
          },
          {
            hr: 'Što biste željeli?',
            en: 'What would you like?',
            note: 'a waiter: formal vi, biste željeli',
          },
          {
            hr: 'Željela bih čašu vode.',
            en: 'I would like a glass of water.',
            note: 'željela — a little more formal than htjela',
          },
        ],
      },
      {
        type: 'example',
        title: 'Requests, Suggestions, Advice',
        items: [
          {
            hr: 'Bi li mi mogao pomoći s ovim?',
            en: 'Could you help me with this?',
            note: 'to a friend, a man: bi li … mogao',
          },
          {
            hr: 'Biste li mi mogli pokazati put do kolodvora?',
            en: 'Could you show me the way to the station?',
            note: 'to a stranger: biste li … mogli',
          },
          {
            hr: 'Biste li bili tako ljubazni i zatvorili prozor?',
            en: 'Would you be so kind as to close the window?',
            note: 'very formal',
          },
          {
            hr: 'Mogli bismo ići u kino večeras.',
            en: 'We could go to the cinema tonight.',
            note: 'a suggestion: mogli bismo',
          },
          {
            hr: 'Trebao bi se malo odmoriti.',
            en: 'You should rest a little.',
            note: 'advice to a man: trebao bi',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'At a café, a woman orders politely:',
        options: ['Htjela bih čaj, molim.', 'Hoću čaj!', 'Htio bih čaj, molim.'],
        correct: 0,
        explanation:
          'htjela agrees with the speaker, a woman, and the conditional makes it polite. Hoću čaj sounds like a demand.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Ask a stranger politely for help:',
        options: ['Pomozi mi!', 'Biste li mi mogli pomoći?', 'Bi li mi mogao pomoći?'],
        correct: 1,
        explanation:
          'A stranger is Vi, so biste li … mogli. Bi li mi mogao is right for a friend; Pomozi mi! is a ti-imperative.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) "Hoću kavu" in a café. The grammar is correct, but it sounds like a demand — say Htio bih kavu or Htjela bih kavu. (2) A woman saying "Htio bih": the participle follows the speaker, so a woman says Htjela bih. (3) The ti-form to a stranger: "Bi li mi mogao pomoći?" to someone you call Vi. Use Biste li mi mogli pomoći?',
        highlight: 'Htjela bih',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'A man orders politely in a café:',
            options: [
              'Htio bih kavu, molim.',
              'Htjela bih kavu, molim.',
              'Hoće kavu, molim.',
              'Htio sam kavu, molim.',
            ],
            correct: 0,
            explanation:
              'htio agrees with a man, and bih makes it "I would like". Htio sam is the past.',
          },
          {
            q: 'Complete: "Ja ___ voljela živjeti u Splitu."',
            options: ['bi', 'bih', 'bismo', 'sam'],
            correct: 1,
            explanation: 'With ja the conditional auxiliary is bih. sam would make it the past.',
          },
          {
            q: 'Ask a stranger to help you. Which is right?',
            options: [
              'Bi li mi mogao pomoći?',
              'Pomozi mi!',
              'Biste li mi mogli pomoći?',
              'Biste li mi mogao pomoći?',
            ],
            correct: 2,
            explanation: 'A stranger is Vi: biste li, with the plural participle mogli.',
          },
          {
            q: 'What does "Mogli bismo ići u kino" mean?',
            options: [
              'We could go to the cinema.',
              'We went to the cinema.',
              'We must go to the cinema.',
              'We are going to the cinema.',
            ],
            correct: 0,
            explanation: 'mogli bismo = we could: a suggestion.',
          },
          {
            q: 'Your friend Marko is tired. Give him advice:',
            options: [
              'Trebao bih se odmoriti.',
              'Trebao bi se odmoriti.',
              'Trebao bismo se odmoriti.',
              'Trebao biste se odmoriti.',
            ],
            correct: 1,
            explanation:
              'For ti the auxiliary is bi: Trebao bi se odmoriti. Trebao bih would be advice to yourself.',
          },
          {
            q: 'Complete: "Htjela bih ___, molim." (a glass of water)',
            options: ['čaša vode', 'čaše vode', 'čašom vode', 'čašu vode'],
            correct: 3,
            explanation: 'What you would like is in the accusative: čašu vode.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Wishes and Requests — Key Takeaways',
        points: [
          'Ordering: Htio bih kavu (a man), Htjela bih kavu (a woman)',
          'Wishes: Volio / Voljela bih putovati.',
          'Polite requests: Bi li mi mogao pomoći? (friend) Biste li mi mogli pomoći? (Vi)',
          'Suggestion: Mogli bismo ići u kino. Advice: Trebao bi se odmoriti.',
          'Hoću kavu is correct but sounds like a demand',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'problems-at-work': {
    worked: [
      {
        title: 'Naming the Problem',
        problem: 'Prevedi: "I have a problem with the neighbours."',
        en: 'Translate: I have a problem with the neighbours.',
        steps: [
          {
            label: 'Find the pattern',
            text: 'imati problem s + instrumental — the person or thing the problem is WITH.',
          },
          {
            label: 'The noun',
            text: 'susjedi is masculine plural; the instrumental plural ends in -ima: susjedima.',
          },
          {
            label: 's or sa?',
            text: 'susjedima begins with s, so the preposition takes its longer form: sa.',
          },
        ],
        answer: 'Imam problem sa susjedima.',
      },
      {
        title: 'Something Is Missing',
        problem: 'Prevedi: "There is no hot water in the flat."',
        en: 'Translate: There is no hot water in the flat.',
        steps: [
          {
            label: 'There is no…',
            text: 'Croatian says nema, and the missing thing goes into the genitive.',
          },
          {
            label: 'The genitive',
            text: 'topla voda is feminine: both words take -e — tople vode.',
          },
          {
            label: 'Where',
            text: 'In the flat: u + locative, stan → u stanu.',
          },
        ],
        answer: 'U stanu nema tople vode.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Imam problem ___ računalom.',
          options: ['s', 'sa', 'na', 'od'],
          correct: 0,
          hint: 'The problem is WITH something. Does the next word begin with s, š, z or ž?',
          explanation:
            's računalom — s + instrumental; the longer sa only comes before s, š, z, ž.',
        },
        {
          q: 'A colleague says: "Šef mi je opet vikao." You answer:',
          options: ['Žao mi je, to nije u redu.', 'Čestitam!', 'Drago mi je.', 'Sretan rođendan!'],
          correct: 0,
          hint: 'Your colleague was shouted at — which answer is sympathetic?',
          explanation: 'Žao mi je, to nije u redu — I am sorry, that is not right.',
        },
        {
          q: 'U stanu nema ___. (electricity)',
          options: ['struja', 'struje', 'struju', 'strujom'],
          correct: 1,
          hint: 'After nema the missing thing goes into the genitive.',
          explanation: 'nema struje — struja is feminine, genitive -e.',
        },
        {
          q: 'Kolega mi ___ vratio knjigu. (has not)',
          options: ['ne je', 'nije', 'nisam', 'ni'],
          correct: 1,
          hint: 'The negative of je is one word, and the subject is kolega.',
          explanation: 'Kolega mi nije vratio knjigu.',
        },
        {
          q: 'Which word means "salary, pay"?',
          options: ['posao', 'rok', 'plaća', 'šef'],
          correct: 2,
          hint: 'It is what you get at the end of the month.',
          explanation: 'plaća = pay. posao is the job, rok a deadline, šef the boss.',
        },
        {
          q: 'Radim u ___ firmi. (big)',
          options: ['velika', 'veliku', 'velikoj', 'velikom'],
          correct: 2,
          hint: 'u + locative for where; firma is feminine.',
          explanation: 'u velikoj firmi — feminine locative -oj.',
        },
        {
          q: 'Stalno sam ___. (tired — a woman speaking)',
          options: ['umoran', 'umorna', 'umorno', 'umorni'],
          correct: 1,
          hint: 'The adjective agrees with the speaker.',
          explanation: 'umorna — a woman speaking.',
        },
        {
          q: "Your friend's car has broken down. Which reply shows sympathy?",
          options: ['Baš dobro!', 'Živjeli!', 'Dobar tek!', 'Joj, žao mi je!'],
          correct: 3,
          hint: 'Only one of these is said to someone with bad news.',
          explanation: 'Joj, žao mi je! — Oh, I am sorry!',
        },
        {
          type: 'type',
          q: 'Imam problem sa ____. (my boss — instrumental)',
          answer: 'šefom',
          hint: 'The masculine instrumental singular adds -om.',
          explanation: 'sa šefom — sa because the noun begins with š.',
        },
        {
          type: 'type',
          q: '____ mi je. (I am sorry)',
          answer: 'Žao',
          accept: ['žao'],
          hint: 'The word means sorry, and the person who is sorry is in the dative.',
          explanation: 'Žao mi je — literally "it is a pity to me".',
        },
        {
          type: 'type',
          q: 'U uredu nema ____. (hot water — two words)',
          answer: 'tople vode',
          hint: 'Genitive after nema: the adjective and the noun both end in -e.',
          explanation: 'nema tople vode.',
        },
        {
          type: 'type',
          q: 'Kolege mi ne ____. (help — they)',
          answer: 'pomažu',
          hint: 'pomagati: the oni form keeps the ž of pomažem.',
          explanation: 'Kolege mi ne pomažu — my colleagues do not help me.',
        },
        {
          type: 'type',
          q: 'Šef ____ je dao previše posla. (to me)',
          answer: 'mi',
          hint: 'The short dative pronoun for ja, before je.',
          explanation: 'Šef mi je dao previše posla.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Imam problem ___ susjedom."',
        options: ['s', 'u', 'na', 'sa'],
        correct: 3,
        explanation:
          'The problem is with the neighbour: s + instrumental, and before s it becomes sa.',
      },
      {
        q: 'Complete: "Već tri dana nema ___." (electricity)',
        options: ['struja', 'struje', 'strujom', 'struju'],
        correct: 1,
        explanation: 'After nema the missing thing is in the genitive: struje.',
      },
      {
        q: 'Which sentence says "My colleague hasn\'t given the money back to me"?',
        options: [
          'Kolega mi nije vratio novac.',
          'Kolega nije mi vratio novac.',
          'Kolega me nije vratio novac.',
          'Kolega mi vratio nije novac.',
        ],
        correct: 0,
        explanation:
          'mi (to me) is a clitic in second place, before the negative nije: Kolega mi nije vratio novac.',
      },
      {
        q: 'A friend says: "Izgubio sam posao." What fits?',
        options: ['Čestitam!', 'Žao mi je. Kako ti mogu pomoći?', 'Dobar tek!', 'Sretan put!'],
        correct: 1,
        explanation: 'Losing a job calls for sympathy: Žao mi je. Kako ti mogu pomoći?',
      },
      {
        q: 'Complete: "Radim u ___ uredu." (new)',
        options: ['novi', 'novog', 'novom', 'novim'],
        correct: 2,
        explanation: 'u + locative for where, ured is masculine: u novom uredu.',
      },
      {
        q: 'What does "Računalo opet ne radi" mean?',
        options: [
          "The computer isn't on the desk.",
          "I don't work on the computer.",
          'The computer is new.',
          "The computer isn't working again.",
        ],
        correct: 3,
        explanation: 'ne radi = does not work, and opet = again.',
      },
    ],
    vocab: [
      ['problem', 'problem', 'Imam problem sa šefom.'],
      ['šef', 'boss', 'Šef mi je dao previše posla.'],
      ['kolega', 'colleague (a man)', 'Kolega nikad ne dolazi na vrijeme.'],
      ['kolegica', 'colleague (a woman)', 'Kolegica mi uvijek pomaže.'],
      ['plaća', 'salary, pay', 'Plaća je jako mala.'],
      ['prekovremeno', 'overtime', 'Opet radim prekovremeno.'],
      ['stres', 'stress', 'Na poslu imam puno stresa.'],
      ['umoran', 'tired', 'Stalno sam umoran.'],
      ['u kvaru', 'broken, out of order', 'Auto je opet u kvaru.'],
      ['susjed', 'neighbour', 'Susjedi su glasni svaku noć.'],
      ['žao mi je', 'I am sorry', 'Žao mi je, to je grozno.'],
      ['grozno', 'awful', 'Joj, to je grozno!'],
    ],
  },

  'informal-email': {
    worked: [
      {
        title: 'Opening to a Man',
        problem: 'Napiši početak e-maila prijatelju Ivanu.',
        en: 'Write the opening of an email to your friend Ivan.',
        steps: [
          {
            label: 'The register',
            text: 'A friend: the ti-form, and the warm word for dear.',
          },
          {
            label: 'The name',
            text: 'In an address the name is in the vocative: Ivan adds -e.',
          },
          {
            label: 'Dear',
            text: 'Ivan is a man, so the masculine form dragi — it does not change in an address.',
          },
        ],
        answer: 'Dragi Ivane,',
      },
      {
        title: 'Closing as a Woman',
        problem: 'Ana završava e-mail prijateljici. Napiši zadnji redak.',
        en: 'Ana is finishing an email to a friend. Write the last line.',
        steps: [
          {
            label: 'A warm closing',
            text: 'Many greetings: puno + the genitive plural of pozdrav — Puno pozdrava!',
          },
          {
            label: 'Your',
            text: 'The possessive agrees with the WRITER. Ana is a woman: tvoja.',
          },
          {
            label: 'The name',
            text: 'The signature is her own name, in its basic form.',
          },
        ],
        answer: 'Puno pozdrava, tvoja Ana',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'To your friend Petar: "___ Petre,"',
          options: ['Draga', 'Dragi', 'Drago', 'Dragog'],
          correct: 1,
          hint: 'Petar is a man, and the adjective in an address keeps its basic form.',
          explanation: 'Dragi Petre — masculine dragi, the name in the vocative.',
        },
        {
          q: 'To your grandmother: "Draga ___,"',
          options: ['baka', 'baku', 'bako', 'baki'],
          correct: 2,
          hint: 'The person you are writing to is addressed in the vocative.',
          explanation: 'Draga bako — baka has the vocative bako.',
        },
        {
          q: 'Hvala na ___! (your letter)',
          options: ['pismo', 'pismu', 'pisma', 'pismom'],
          correct: 1,
          hint: 'hvala na takes the locative, and pismo is neuter.',
          explanation: 'Hvala na pismu!',
        },
        {
          q: 'Which line asks a friend to write back?',
          options: ['S poštovanjem,', 'Poštovani,', 'Javi se!', 'Dobar tek!'],
          correct: 2,
          hint: 'Look for the friendly imperative.',
          explanation: 'Javi se! — get in touch!',
        },
        {
          q: 'Ivana signs: "Puno pozdrava, ___ Ivana"',
          options: ['tvoj', 'tvoje', 'tvoja', 'tvoju'],
          correct: 2,
          hint: 'The possessive agrees with the writer.',
          explanation: 'tvoja Ivana — Ivana is a woman.',
        },
        {
          q: 'Which opening is formal?',
          options: ['Bog, Ana!', 'Dragi Ivane,', 'Draga mama,', 'Poštovana gospođo Kovač,'],
          correct: 3,
          hint: 'Which one would you write to someone you do not know?',
          explanation: 'Poštovana gospođo Kovač — the formal opening.',
        },
        {
          q: 'Prošli tjedan ___ bila na moru. (I — a woman)',
          options: ['sam', 'si', 'je', 'smo'],
          correct: 0,
          hint: 'The past-tense auxiliary for ja.',
          explanation: 'Prošli tjedan sam bila na moru.',
        },
        {
          q: 'Ljeti ___ doći u Zagreb. (I will)',
          options: ['ćeš', 'ću', 'će', 'sam'],
          correct: 1,
          hint: 'The future auxiliary for ja.',
          explanation: 'Ljeti ću doći u Zagreb.',
        },
        {
          type: 'type',
          q: 'Dragi ____, (to your friend Ivan)',
          answer: 'Ivane',
          hint: 'Masculine names like this add -e in the vocative.',
          explanation: 'Dragi Ivane,',
        },
        {
          type: 'type',
          q: 'Hvala na ____! (message)',
          answer: 'poruci',
          hint: 'poruka is feminine; in the locative the k turns into c before -i.',
          explanation: 'Hvala na poruci!',
        },
        {
          type: 'type',
          q: 'Puno ____! (greetings — a closing)',
          answer: 'pozdrava',
          hint: 'puno takes the genitive plural.',
          explanation: 'Puno pozdrava! — lots of love.',
        },
        {
          type: 'type',
          q: '____ Marko (your — Marko is a man)',
          answer: 'Tvoj',
          accept: ['tvoj'],
          hint: 'The possessive agrees with the writer, who is a man.',
          explanation: 'Tvoj Marko.',
        },
        {
          type: 'type',
          q: '____ se! (get in touch — to a friend)',
          answer: 'Javi',
          accept: ['javi'],
          hint: 'The ti-imperative of javiti se.',
          explanation: 'Javi se!',
        },
      ],
    },
    checkB: [
      {
        q: 'You are writing to your friend Petar. Which opening is correct?',
        options: ['Dragi Petar,', 'Dragi Petre,', 'Drago Petre,', 'Dragi Petra,'],
        correct: 1,
        explanation: 'Petar → Petre in the vocative, with masculine dragi.',
      },
      {
        q: 'Complete: "Hvala na ___!" (your letter)',
        options: ['pismo', 'pisma', 'pismu', 'pismom'],
        correct: 2,
        explanation: 'hvala na takes the locative: pismu.',
      },
      {
        q: 'Ivana (a woman) is signing an email to a friend. Which is right?',
        options: ['Tvoj Ivana', 'Tvoje Ivana', 'Tvoju Ivana', 'Tvoja Ivana'],
        correct: 3,
        explanation: 'tvoja agrees with the writer, a woman.',
      },
      {
        q: 'Which opening belongs in an email to a FRIEND?',
        options: ['Poštovani,', 'Draga Ana,', 'Poštovana gospođo Horvat,', 'S poštovanjem,'],
        correct: 1,
        explanation: 'Draga Ana is warm and personal; the others are formal.',
      },
      {
        q: 'Complete: "Pozdravi ___ i tatu!" (your mum)',
        options: ['mama', 'mami', 'mamu', 'mamom'],
        correct: 2,
        explanation: 'pozdraviti takes the accusative: mamu.',
      },
      {
        q: 'What does "Javi se!" mean at the end of an email?',
        options: ['Get in touch!', 'See you soon!', 'Thanks for the letter!', 'Lots of love!'],
        correct: 0,
        explanation: 'javiti se = to get in touch.',
      },
    ],
    vocab: [
      ['dragi', 'dear (to a man)', 'Dragi Ivane, kako si?'],
      ['draga', 'dear (to a woman)', 'Draga Ana, hvala na poruci!'],
      ['poruka', 'message', 'Hvala na poruci!'],
      ['pismo', 'letter', 'Hvala na pismu!'],
      ['javiti se', 'to get in touch', 'Javi se uskoro!'],
      ['pozdrav', 'greeting, regards', 'Puno pozdrava!'],
      ['pozdraviti', 'to say hi to, to greet', 'Pozdravi mamu i tatu!'],
      ['novost', 'piece of news', 'Imam puno novosti.'],
      ['uskoro', 'soon', 'Vidimo se uskoro!'],
      ['grliti', 'to hug', 'Grlim te!'],
      ['s poštovanjem', 'yours sincerely (formal)', 'S poštovanjem, Marko Horvat'],
    ],
  },

  'aspect-pairs': {
    worked: [
      {
        title: 'Finding the Partner',
        problem: 'Koji je svršeni parnjak glagola "učiti"?',
        en: 'What is the perfective partner of učiti (to learn)?',
        steps: [
          {
            label: 'Which aspect is it?',
            text: 'učiti is the plain verb — the process of learning — so it is imperfective.',
          },
          {
            label: 'Which pattern?',
            text: 'Plain verbs like this usually become perfective with a prefix.',
          },
          {
            label: 'Which prefix?',
            text: 'For učiti the prefix is na-, the same one pisati takes.',
          },
        ],
        answer: 'naučiti',
      },
      {
        title: 'Now or Finished?',
        problem: 'Dopuni: "Ne mogu doći, sad ___ za ispit." (učiti / naučiti)',
        en: "Fill in: I can't come, I'm studying for an exam right now.",
        steps: [
          {
            label: 'Read the signal',
            text: 'sad — at this moment, the process is going on.',
          },
          {
            label: 'Choose the aspect',
            text: 'A perfective present can never mean "right now", so the imperfective učiti.',
          },
          {
            label: 'The form',
            text: 'ja in the present: uč- + -im.',
          },
        ],
        answer: 'Ne mogu doći, sad učim za ispit.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'The perfective partner of pisati:',
          options: ['napisati', 'pisanje', 'pisao', 'pišem'],
          correct: 0,
          hint: 'The plain verb is imperfective; a short prefix makes it perfective.',
          explanation: 'napisati — prefix na-.',
        },
        {
          q: 'The imperfective partner of kupiti:',
          options: ['kupivati', 'kupovati', 'kupujati', 'kupljati'],
          correct: 1,
          hint: 'In suffix pairs the imperfective is the longer verb, built with -ova-.',
          explanation: 'kupovati (kupujem, kupuješ…).',
        },
        {
          q: 'Sad ___ pismo baki. (I am writing)',
          options: ['napišem', 'pišem', 'napisati', 'napiši'],
          correct: 1,
          hint: 'At this very moment — the process.',
          explanation: 'Sad pišem pismo — the imperfective present.',
        },
        {
          q: 'Moram ___ sto riječi za sutra. (have them learned)',
          options: ['učiti', 'učim', 'naučiti', 'naučim'],
          correct: 2,
          hint: 'After moram comes an infinitive; the words must be learned, done.',
          explanation: 'naučiti — the perfective infinitive for a result.',
        },
        {
          q: 'Which pair is made of two DIFFERENT words?',
          options: ['čitati — pročitati', 'govoriti — reći', 'davati — dati', 'piti — popiti'],
          correct: 1,
          hint: 'Look for the pair with no shared root.',
          explanation:
            'govoriti and reći share nothing visible; the others are prefix or suffix pairs.',
        },
        {
          q: 'Djeca ___ već dva sata. (have been studying)',
          options: ['nauče', 'uče', 'naučiti', 'naučila'],
          correct: 1,
          hint: 'A duration — dva sata — goes with the process verb.',
          explanation: 'Djeca uče već dva sata.',
        },
        {
          q: 'Sutra ću ti ___ knjigu. (give — once)',
          options: ['davati', 'dajem', 'dam', 'dati'],
          correct: 3,
          hint: 'One act of giving, after ću: the infinitive of the perfective.',
          explanation: 'Sutra ću ti dati knjigu.',
        },
        {
          q: 'The imperfective partner of doći:',
          options: ['dolaziti', 'dohoditi', 'dočiti', 'dolaćati'],
          correct: 0,
          hint: 'It is irregular; think of the train timetable: Vlak … u osam.',
          explanation: 'dolaziti (dolazim, dolaziš…).',
        },
        {
          type: 'type',
          q: 'The perfective of piti: ____',
          answer: 'popiti',
          hint: 'A two-letter prefix makes it perfective.',
          explanation: 'popiti — prefix po-.',
        },
        {
          type: 'type',
          q: 'The perfective of čitati: ____',
          answer: 'pročitati',
          hint: 'The prefix means "through" — read it through to the end.',
          explanation: 'pročitati — prefix pro-.',
        },
        {
          type: 'type',
          q: 'The imperfective of dati: ____',
          answer: 'davati',
          hint: 'The longer verb of the pair: it keeps da- and adds a syllable.',
          explanation: 'davati — dajem, daješ, daje…',
        },
        {
          type: 'type',
          q: 'Ne mogu razgovarati, sad ____ kavu. (I am drinking)',
          answer: 'pijem',
          hint: 'Right now means the imperfective, in the ja form.',
          explanation: 'Sad pijem kavu.',
        },
        {
          type: 'type',
          q: 'Moram ____ ovaj e-mail do pet sati. (finish writing)',
          answer: 'napisati',
          hint: 'One email, finished by a deadline: the perfective infinitive.',
          explanation: 'Moram napisati ovaj e-mail do pet sati.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the perfective partner of učiti?',
        options: ['učivati', 'naučiti', 'učenje', 'učavati'],
        correct: 1,
        explanation: 'učiti takes the prefix na-: naučiti.',
      },
      {
        q: 'Which pair is built with a prefix?',
        options: ['davati — dati', 'otvarati — otvoriti', 'čitati — pročitati', 'dolaziti — doći'],
        correct: 2,
        explanation: 'pro- is added to čitati. The others change the suffix or are irregular.',
      },
      {
        q: 'Complete: "Ne mogu doći na telefon, sad ___ ručak." (I am eating)',
        options: ['pojedem', 'jedem', 'pojesti', 'pojeo'],
        correct: 1,
        explanation: 'Right now = a process, so the imperfective present: jedem.',
      },
      {
        q: 'Complete: "Želim ___ cijelu bocu vode." (drink it all up)',
        options: ['piti', 'pijem', 'popiti', 'popijem'],
        correct: 2,
        explanation: 'After želim the infinitive; the whole bottle, finished: popiti.',
      },
      {
        q: 'What is the imperfective partner of otvoriti?',
        options: ['otvoravati', 'otvorivati', 'otvrati', 'otvarati'],
        correct: 3,
        explanation: 'The o of the root changes to a and the verb is stretched: otvarati.',
      },
      {
        q: 'Which verb is imperfective?',
        options: ['dolaziti', 'doći', 'dati', 'reći'],
        correct: 0,
        explanation: 'dolaziti is the process; doći, dati and reći are perfective.',
      },
    ],
    vocab: [
      ['napisati', 'to write (to the end)', 'Moram napisati e-mail.'],
      ['pročitati', 'to read through', 'Moram pročitati ovu knjigu do petka.'],
      ['naučiti', 'to learn (and know)', 'Želim naučiti sto riječi do ljeta.'],
      ['popiti', 'to drink up', 'Popij čašu vode!'],
      ['kupovati', 'to buy (habitually)', 'U ovom dućanu uvijek kupujem voće.'],
      ['kupiti', 'to buy (once)', 'Sutra ću kupiti novi mobitel.'],
      ['davati', 'to give (repeatedly)', 'Baka mi uvijek daje kolače.'],
      ['dati', 'to give (once)', 'Možeš li mi dati olovku?'],
      ['dolaziti', 'to come (regularly)', 'Vlak dolazi u osam.'],
      ['doći', 'to come (once)', 'Doći ću sutra navečer.'],
      ['reći', 'to say (once)', 'Možeš li mi reći istinu?'],
    ],
  },

  'aspect-in-past': {
    worked: [
      {
        title: 'How Long?',
        problem: 'Prevedi (muškarac govori): "I was reading for two hours."',
        en: 'Translate (a man speaking): I was reading for two hours.',
        steps: [
          {
            label: 'Read the signal',
            text: 'for two hours is a duration — how long the activity went on.',
          },
          {
            label: 'Choose the aspect',
            text: 'A duration goes with the imperfective: čitati, not pročitati.',
          },
          {
            label: 'The past form',
            text: 'A man: čitao + sam, with sam in second place.',
          },
        ],
        answer: 'Čitao sam dva sata.',
      },
      {
        title: 'A Chain of Events',
        problem: 'Prevedi: "She came home and drank a coffee."',
        en: 'Translate: She came home and drank a coffee.',
        steps: [
          {
            label: 'Read the story',
            text: 'Two events, one after the other, each finished before the next.',
          },
          {
            label: 'Choose the aspect',
            text: 'A chain of finished events is perfective: doći → došla, popiti → popila.',
          },
          {
            label: 'One auxiliary',
            text: 'je in second place serves both verbs: Došla je … i popila.',
          },
        ],
        answer: 'Došla je kući i popila kavu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Jučer sam ___ dva sata. (was reading)',
          options: ['pročitao', 'čitao', 'pročitati', 'čitam'],
          correct: 1,
          hint: 'A duration — how long — goes with the process verb.',
          explanation: 'Čitao sam dva sata.',
        },
        {
          q: '___ sam pismo i poslala ga. (wrote — finished, a woman)',
          options: ['Pisala', 'Napisala', 'Pišem', 'Napisat'],
          correct: 1,
          hint: 'First one act finished, then the next.',
          explanation: 'Napisala sam pismo i poslala ga.',
        },
        {
          q: 'Konačno smo ___ stan. (bought)',
          options: ['kupili', 'kupovali', 'kupujemo', 'kupiti'],
          correct: 0,
          hint: 'konačno (finally) announces a result.',
          explanation: 'Konačno smo kupili stan.',
        },
        {
          q: 'Napisala je e-mail ___. (in one hour — it took an hour)',
          options: ['jedan sat', 'za jedan sat', 'na jedan sat', 'od jednog sata'],
          correct: 1,
          hint: 'With a finished result, how long it took needs a preposition + accusative.',
          explanation: 'za jedan sat — it took one hour.',
        },
        {
          q: 'What does "Pročitao sam knjigu" tell you?',
          options: [
            'He was in the middle of the book.',
            'He reads books often.',
            'He finished the book.',
            'He will read the book.',
          ],
          correct: 2,
          hint: 'The prefix pro- means through, to the end.',
          explanation: 'Pročitao sam knjigu — he got to the end.',
        },
        {
          q: 'Došao je kući, ___ čašu mlijeka i otišao spavati.',
          options: ['pio', 'popio', 'pije', 'piti'],
          correct: 1,
          hint: 'A chain of events, each one finished.',
          explanation: 'popio — the perfective, like došao and otišao around it.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Pročitao sam knjigu dva sata.',
            'Pročitao sam dva sata.',
            'Čitao sam knjigu za dva sata.',
            'Čitao sam knjigu dva sata.',
          ],
          correct: 3,
          hint: 'Which aspect can last two hours?',
          explanation: 'Čitao sam knjigu dva sata — the activity lasted two hours.',
        },
        {
          q: 'Jesi li ___ nove riječi? (learned — do you know them now?)',
          options: ['učio', 'naučio', 'učiš', 'učiti'],
          correct: 1,
          hint: 'The question is about the result.',
          explanation: 'Jesi li naučio nove riječi?',
        },
        {
          type: 'type',
          q: 'Cijeli dan sam ____. (was studying — a man; učiti)',
          answer: 'učio',
          hint: 'How long → the process verb, in the past form for a man.',
          explanation: 'Cijeli dan sam učio.',
        },
        {
          type: 'type',
          q: 'Za tri dana sam ____ cijelu knjigu. (read it through — a woman; pročitati)',
          answer: 'pročitala',
          hint: 'A result in a set time: the perfective past for a woman.',
          explanation: 'Za tri dana sam pročitala cijelu knjigu.',
        },
        {
          type: 'type',
          q: 'Ušli smo, sjeli i ____ pizzu. (ordered; naručiti)',
          answer: 'naručili',
          hint: 'A chain of finished events; for mi the past form ends in -li.',
          explanation: 'Ušli smo, sjeli i naručili pizzu.',
        },
        {
          type: 'type',
          q: 'Kiša je ____ cijeli dan. (was falling; padati)',
          answer: 'padala',
          hint: 'How long, the background: the imperfective past, agreeing with kiša.',
          explanation: 'Kiša je padala cijeli dan.',
        },
        {
          type: 'type',
          q: 'Ana je ____ pismo i poslala ga. (wrote it — finished; napisati)',
          answer: 'napisala',
          hint: 'A finished act before the next one, for a woman.',
          explanation: 'Ana je napisala pismo i poslala ga.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Cijelo jutro sam ___ e-mailove." (was writing)',
        options: ['napisao', 'pisao', 'napisati', 'pišem'],
        correct: 1,
        explanation: 'cijelo jutro is how long, so the imperfective past: pisao.',
      },
      {
        q: 'Complete: "___ je knjigu za dva dana." (She read it — to the end)',
        options: ['Čitala', 'Čita', 'Pročitala', 'Pročita'],
        correct: 2,
        explanation: 'A result, and za dva dana is how long it took: Pročitala.',
      },
      {
        q: 'Which sentence is WRONG?',
        options: [
          'Učio sam dva sata.',
          'Naučio sam pjesmu za sat.',
          'Naučio sam dva sata.',
          'Učio sam cijelu večer.',
        ],
        correct: 2,
        explanation:
          'A finished result cannot last two hours: Učio sam dva sata, or Naučio sam … za dva sata.',
      },
      {
        q: 'What does "Nisam pročitao knjigu" mean?',
        options: [
          'I read the whole book.',
          "I haven't read the book through.",
          "I'm reading the book now.",
          "I don't like reading.",
        ],
        correct: 1,
        explanation: 'The perfective negative: the book is not finished.',
      },
      {
        q: 'Complete: "Ušla je, ___ kaput i sjela." (took off)',
        options: ['skidala', 'skida', 'skinula', 'skidati'],
        correct: 2,
        explanation: 'A chain of finished events: ušla, skinula, sjela — all perfective.',
      },
      {
        q: 'Complete: "Dugo smo ___ za ispit." (studied)',
        options: ['učili', 'naučili', 'učimo', 'naučiti'],
        correct: 0,
        explanation: 'dugo (for a long time) is how long, so the imperfective past: učili.',
      },
    ],
    vocab: [
      ['čitati', 'to read (the activity)', 'Cijeli dan sam čitao.'],
      ['pročitati', 'to read through', 'Pročitao sam cijelu knjigu.'],
      ['konačno', 'finally', 'Konačno smo kupili auto.'],
      ['odmah', 'at once', 'Odmah sam ti odgovorio.'],
      ['cijeli dan', 'all day', 'Cijeli dan je padala kiša.'],
      ['dugo', 'for a long time', 'Dugo smo učili za ispit.'],
      ['naručiti', 'to order', 'Naručili smo pizzu.'],
      ['sjesti', 'to sit down', 'Ušao je i sjeo.'],
      ['skinuti', 'to take off', 'Skinula je kaput.'],
      ['ući', 'to come in', 'Ušla je u sobu.'],
      ['izvještaj', 'report', 'Jesi li napisao izvještaj?'],
    ],
  },

  'conditional-forms': {
    worked: [
      {
        title: 'From the Past to Would',
        problem: 'Prevedi (žena govori): "I would work at home."',
        en: 'Translate (a woman speaking): I would work at home.',
        steps: [
          {
            label: 'The participle',
            text: 'raditi, for a woman: radila — the same form as in the past.',
          },
          {
            label: 'The auxiliary',
            text: 'For ja the conditional auxiliary is bih.',
          },
          {
            label: 'Word order',
            text: 'Without a pronoun, the participle comes first and bih second.',
          },
        ],
        answer: 'Radila bih kod kuće.',
      },
      {
        title: 'Making a Question',
        problem: 'Prevedi (formalno): "Would you come tomorrow?"',
        en: 'Translate (formally): Would you come tomorrow?',
        steps: [
          {
            label: 'Who is asked?',
            text: 'Formal you is vi, and the auxiliary for vi is biste.',
          },
          {
            label: 'The question',
            text: 'The auxiliary goes first and li follows it: biste li.',
          },
          {
            label: 'The participle',
            text: 'For vi the participle is plural: doći → došli.',
          },
        ],
        answer: 'Biste li došli sutra?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ja ___ išao s vama.',
          options: ['bih', 'bi', 'bismo', 'biste'],
          correct: 0,
          hint: 'The auxiliary for ja.',
          explanation: 'Ja bih išao s vama.',
        },
        {
          q: 'Ona ___ to kupila.',
          options: ['bih', 'bi', 'bismo', 'biste'],
          correct: 1,
          hint: 'ti, on, ona and oni share one short form.',
          explanation: 'Ona bi to kupila.',
        },
        {
          q: 'Vi ___ to brzo naučili.',
          options: ['bi', 'bih', 'biste', 'bismo'],
          correct: 2,
          hint: 'The auxiliary for vi ends like ste.',
          explanation: 'Vi biste to brzo naučili.',
        },
        {
          q: 'Which word order is correct?',
          options: [
            'Bih radio kod kuće.',
            'Radio bih kod kuće.',
            'Radio kod kuće bih.',
            'Kod kuće radio bih.',
          ],
          correct: 1,
          hint: 'The auxiliary must stand in second place.',
          explanation: 'Radio bih kod kuće — participle first, bih second.',
        },
        {
          q: 'Petra: "___ bih na koncert."',
          options: ['Išao', 'Išla', 'Išli', 'Ići'],
          correct: 1,
          hint: 'The participle agrees with the speaker, a woman.',
          explanation: 'Išla bih na koncert.',
        },
        {
          q: 'How do you say "I wouldn\'t do that"?',
          options: ['Ne bih to radio.', 'Bih ne to radio.', 'Ne to bih radio.', 'Nebih to radio.'],
          correct: 0,
          hint: 'The negative word stands right before the auxiliary, as a separate word.',
          explanation: 'Ne bih to radio.',
        },
        {
          q: 'Ask a friend (a man): "Would you help me?"',
          options: [
            'Li bi mi pomogao?',
            'Bi mi li pomogao?',
            'Bi li pomogao mi?',
            'Bi li mi pomogao?',
          ],
          correct: 3,
          hint: 'The auxiliary first, then li, then the other short words.',
          explanation: 'Bi li mi pomogao?',
        },
        {
          q: 'Which is correct?',
          options: [
            'Rado bih se odmorio.',
            'Rado se bih odmorio.',
            'Rado bih odmorio se.',
            'Bih se rado odmorio.',
          ],
          correct: 0,
          hint: 'In the clitic group the auxiliary comes before se.',
          explanation: 'Rado bih se odmorio — I would gladly rest.',
        },
        {
          type: 'type',
          q: 'Mi ____ došli u subotu. (we would)',
          answer: 'bismo',
          hint: 'The auxiliary for mi ends like smo.',
          explanation: 'Mi bismo došli u subotu.',
        },
        {
          type: 'type',
          q: 'Ne ____ išla bez kišobrana. (I — a woman)',
          answer: 'bih',
          hint: 'The auxiliary for ja.',
          explanation: 'Ne bih išla bez kišobrana.',
        },
        {
          type: 'type',
          q: '____ li došli sutra? (formal you)',
          answer: 'Biste',
          accept: ['biste'],
          hint: 'The auxiliary for vi, at the start of the question.',
          explanation: 'Biste li došli sutra?',
        },
        {
          type: 'type',
          q: 'Oni ____ radili vikendom. (they would)',
          answer: 'bi',
          hint: 'The short form shared by ti, on, ona and oni.',
          explanation: 'Oni bi radili vikendom.',
        },
        {
          type: 'type',
          q: 'Ja bih ____ u kino. (go — a man)',
          answer: 'išao',
          hint: 'The participle of ići for a man — the same form as in the past.',
          explanation: 'Ja bih išao u kino.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Vi ___ to razumjeli."',
        options: ['bi', 'bih', 'biste', 'bismo'],
        correct: 2,
        explanation: 'For vi the conditional auxiliary is biste.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Bih kupio taj auto.',
          'Kupio taj auto bih.',
          'Kupio bih taj auto.',
          'Bih taj auto kupio.',
        ],
        correct: 2,
        explanation: 'bih must be second: Kupio bih taj auto.',
      },
      {
        q: 'Marko says "I would come." Which is correct?',
        options: ['Došao bih.', 'Došla bih.', 'Došao sam.', 'Došao bi.'],
        correct: 0,
        explanation:
          'A man (došao) about himself (bih). Došao bi is "he would come", Došao sam the past.',
      },
      {
        q: 'How do you say "We wouldn\'t buy that"?',
        options: [
          'Mi bismo ne kupili to.',
          'Mi ne bismo to kupili.',
          'Ne mi bismo to kupili.',
          'Mi nebismo to kupili.',
        ],
        correct: 1,
        explanation: 'ne stands right before bismo, as a separate word.',
      },
      {
        q: 'Complete: "___ li išao sa mnom?" (you — a friend)',
        options: ['Bih', 'Biste', 'Bismo', 'Bi'],
        correct: 3,
        explanation: 'For ti the auxiliary is bi, and the participle išao is singular to match.',
      },
      {
        q: 'Which is the conditional (would), not the past?',
        options: ['Radila sam.', 'Radila bih.', 'Radit ću.', 'Radim.'],
        correct: 1,
        explanation: 'bih makes it "I would work". sam is the past, ću the future.',
      },
    ],
    vocab: [
      ['bih', 'would (with ja)', 'Ja bih išao u kino.'],
      ['bi', 'would (with ti, on, ona, oni)', 'Ona bi to kupila.'],
      ['bismo', 'would (with mi)', 'Mi bismo došli u subotu.'],
      ['biste', 'would (with vi)', 'Biste li došli sutra?'],
      ['rado', 'gladly', 'Rado bih se odmorio.'],
      ['kino', 'cinema', 'Išla bih u kino.'],
      ['kišobran', 'umbrella', 'Ne bih išla bez kišobrana.'],
      ['pomoći', 'to help', 'Bi li mi pomogao?'],
      ['odmoriti se', 'to rest', 'Rado bih se malo odmorio.'],
    ],
  },

  'conditional-wishes': {
    worked: [
      {
        title: 'Ordering in a Café',
        problem: 'Naruči (žena govori): "I\'d like a tea with lemon, please."',
        en: "Order (a woman speaking): I'd like a tea with lemon, please.",
        steps: [
          {
            label: 'Polite wish',
            text: 'Use htjeti in the conditional, not the blunt Hoću.',
          },
          {
            label: 'Agree with the speaker',
            text: 'A woman: htjela + bih.',
          },
          {
            label: 'The object',
            text: 'čaj is masculine and inanimate, so its accusative looks the same; with lemon = s limunom.',
          },
        ],
        answer: 'Htjela bih čaj s limunom, molim.',
      },
      {
        title: 'A Formal Request',
        problem: 'Pitaj nepoznatu osobu: "Could you help me?"',
        en: 'Ask a stranger: Could you help me?',
        steps: [
          {
            label: 'The register',
            text: 'A stranger is Vi, so the auxiliary is biste and the participle plural.',
          },
          {
            label: 'The verb',
            text: 'moći in the conditional: mogli, then the infinitive pomoći.',
          },
          {
            label: 'The order',
            text: 'Question: biste li first, then the dative mi (to me) in the clitic group.',
          },
        ],
        answer: 'Biste li mi mogli pomoći?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Marko orders: "___ bih pivo, molim."',
          options: ['Htio', 'Htjela', 'Hoću', 'Htjeli'],
          correct: 0,
          hint: 'The participle agrees with Marko.',
          explanation: 'Htio bih pivo, molim.',
        },
        {
          q: 'Ana: "___ bih putovati po Europi."',
          options: ['Volio', 'Voljela', 'Voli', 'Voljeli'],
          correct: 1,
          hint: 'The participle of voljeti for a woman.',
          explanation: 'Voljela bih putovati po Europi.',
        },
        {
          q: 'To a friend (a woman): "Bi li mi ___ dodati sol?"',
          options: ['mogao', 'mogla', 'mogli', 'moći'],
          correct: 1,
          hint: 'The participle agrees with the friend you are asking.',
          explanation: 'Bi li mi mogla dodati sol?',
        },
        {
          q: 'Formal: "___ li mi mogli pokazati put?"',
          options: ['Bi', 'Bih', 'Biste', 'Bismo'],
          correct: 2,
          hint: 'The auxiliary for Vi.',
          explanation: 'Biste li mi mogli pokazati put?',
        },
        {
          q: 'A suggestion: "We could go to the seaside."',
          options: [
            'Mogli smo ići na more.',
            'Mogli bismo ići na more.',
            'Možemo li ići na more?',
            'Mogao bih ići na more.',
          ],
          correct: 1,
          hint: 'We + would be able: the conditional for mi.',
          explanation: 'Mogli bismo ići na more.',
        },
        {
          q: 'Advice to a friend (a man): "You should rest."',
          options: [
            'Trebao bi se odmoriti.',
            'Trebao bih se odmoriti.',
            'Trebala bi se odmoriti.',
            'Trebali bismo se odmoriti.',
          ],
          correct: 0,
          hint: 'ti + a man: which auxiliary and which participle?',
          explanation: 'Trebao bi se odmoriti.',
        },
        {
          q: 'Which sounds like a demand rather than a polite order?',
          options: ['Htio bih kavu.', 'Hoću kavu!', 'Htjela bih kavu.', 'Želio bih kavu.'],
          correct: 1,
          hint: 'Three of them use the conditional.',
          explanation: 'Hoću kavu! is correct grammar but blunt.',
        },
        {
          q: 'Waiter: "Što biste ___?"',
          options: ['željela', 'željeti', 'željeli', 'želio'],
          correct: 2,
          hint: 'With polite Vi the participle is plural.',
          explanation: 'Što biste željeli?',
        },
        {
          type: 'type',
          q: '____ bih kavu, molim. (I would like — a man)',
          answer: 'Htio',
          accept: ['htio'],
          hint: 'The participle of htjeti for a man.',
          explanation: 'Htio bih kavu, molim.',
        },
        {
          type: 'type',
          q: 'Ja bih ____ živjeti na moru. (love to — a woman)',
          answer: 'voljela',
          hint: 'The participle of voljeti for a woman — mind the lj.',
          explanation: 'Ja bih voljela živjeti na moru.',
        },
        {
          type: 'type',
          q: 'Biste li mi ____ pomoći? (could — formal)',
          answer: 'mogli',
          hint: 'The participle of moći, plural for polite Vi.',
          explanation: 'Biste li mi mogli pomoći?',
        },
        {
          type: 'type',
          q: 'Mogli ____ ići u kino. (we)',
          answer: 'bismo',
          hint: 'The auxiliary for mi.',
          explanation: 'Mogli bismo ići u kino.',
        },
        {
          type: 'type',
          q: 'Trebao ____ se odmoriti. (you — a friend)',
          answer: 'bi',
          hint: 'The auxiliary for ti.',
          explanation: 'Trebao bi se odmoriti.',
        },
      ],
    },
    checkB: [
      {
        q: 'A woman orders politely in a café:',
        options: [
          'Htio bih sok, molim.',
          'Hoću sok!',
          'Htjela bih sok, molim.',
          'Htjela sam sok, molim.',
        ],
        correct: 2,
        explanation: 'htjela agrees with a woman, and bih makes it polite. Htjela sam is the past.',
      },
      {
        q: 'Complete: "Ja ___ volio posjetiti Zadar."',
        options: ['bi', 'bih', 'biste', 'sam'],
        correct: 1,
        explanation: 'With ja the auxiliary is bih.',
      },
      {
        q: 'Ask a friend (a man) to help you:',
        options: [
          'Bi li mi mogao pomoći?',
          'Biste li mi mogao pomoći?',
          'Bih li mi mogao pomoći?',
          'Bi li mi mogla pomoći?',
        ],
        correct: 0,
        explanation: 'A friend is ti → bi li, and mogao agrees with a man.',
      },
      {
        q: 'What does "Trebala bi nazvati mamu" mean, said to a friend?',
        options: [
          'You called your mum.',
          'You should call your mum.',
          'You must not call your mum.',
          'You are calling your mum.',
        ],
        correct: 1,
        explanation: 'trebala bi = you should — advice to a woman.',
      },
      {
        q: 'Which suggestion uses the conditional?',
        options: [
          'Izašli smo večeras.',
          'Izaći ćemo večeras.',
          'Mogli bismo izaći večeras.',
          'Izlazimo večeras!',
        ],
        correct: 2,
        explanation: 'mogli bismo = we could. The others are the past, the future and the present.',
      },
      {
        q: 'Complete: "Htio bih ___, molim." (the soup)',
        options: ['juha', 'juhe', 'juhom', 'juhu'],
        correct: 3,
        explanation: 'What you would like is in the accusative: juhu.',
      },
    ],
    vocab: [
      ['htjeti', 'to want', 'Htio bih kavu, molim.'],
      ['voljeti', 'to love, to like', 'Voljela bih putovati.'],
      ['željeti', 'to wish, to want', 'Što biste željeli?'],
      ['moći', 'to be able, can', 'Biste li mi mogli pomoći?'],
      ['trebati', 'to need; should', 'Trebao bi se odmoriti.'],
      ['ljubazan', 'kind', 'Biste li bili tako ljubazni i zatvorili prozor?'],
      ['dodati', 'to pass, to hand', 'Bi li mi dodao sol?'],
      ['platiti', 'to pay', 'Htjela bih platiti.'],
      ['čaša', 'glass', 'Željela bih čašu vode.'],
      ['jednog dana', 'one day', 'Volio bih jednog dana vidjeti Dubrovnik.'],
    ],
  },
};
