// functions/api/content/_data/c1new/batch03.js
//
// New C1 lessons, batch 03 (Croaticum restructure, stage 6, 2026-11-12). See c1new/index.js.
//
// Razgovarajte s nama! B2-C1, lessons 3–5: disjunctive, exclusive and gradational
// clauses; the nouns doba, posao, dio, anđeo; less frequent genitive prepositions; the
// comma in dependent compound sentences; the emphatic genitive and stalo mi je do….
//
// Where usage guides differ the lessons teach both and test neither: the comma before a
// repeated ili… ili / bilo… bilo, the dative and locative of doba (dobu), and the comma
// before a restrictive relative clause (older school practice put one before every
// koji; Hrvatski pravopis, Institut za hrvatski jezik i jezikoslovlje, 2013, does not).

/** Spine entries for this batch. `masterOrder` is the lesson's final C1 position. */
export const SPINE = [
  {
    id: 'disjunctive-gradational-clauses',
    masterOrder: 13,
    prerequisites: ['complex-sentences', 'concession-contrast', 'word-order-emphasis'],
    objectives: [
      'Offer a choice with ili, ili… ili and bilo… bilo',
      'Make an exception with samo, jedino and osim što',
      'Build up a claim with ne samo… nego i, čak, štoviše and a kamoli',
      'Place the comma correctly in independent compound sentences',
    ],
  },
  {
    id: 'irregular-nouns-doba-dio',
    masterOrder: 16,
    prerequisites: ['i-declension', 'clitics-advanced', 'disjunctive-gradational-clauses'],
    objectives: [
      'Decline posao, dio, anđeo, pepeo and kotao: posla, dijela, anđela, pepela, kotla',
      'Form their plurals: poslovi, dijelovi, kotlovi — but anđeli',
      'Use the neuter noun doba (godišnja doba, u to doba) and tell it from dob, dobi',
      'Keep dijela (of a part) apart from djela (of a work)',
    ],
  },
  {
    id: 'rare-genitive-prepositions',
    masterOrder: 17,
    prerequisites: ['prepositions-advanced', 'verb-government', 'irregular-nouns-doba-dio'],
    objectives: [
      'Use the less frequent genitive prepositions: usred, nasred, uoči, tijekom, prilikom, prigodom, diljem',
      'Express means and manner with pomoću, putem, umjesto and poput',
      'Keep zbog (cause) apart from radi (purpose) in careful writing',
      'Remember that unatoč takes the dative: unatoč kiši',
    ],
  },
  {
    id: 'comma-dependent-clauses',
    masterOrder: 18,
    prerequisites: ['complex-sentences', 'disjunctive-gradational-clauses'],
    objectives: [
      'Close a fronted verbal adverb with a comma: Otišavši na more, dobro smo se odmorili',
      'Write no comma before a dependent clause that follows its main clause: Mislim da je u pravu',
      'Put a comma after a dependent clause that comes first: Kad dođeš, nazovi me',
      'Close an inserted clause with a comma on both sides',
      'Set off a non-restrictive relative clause and leave a restrictive one unmarked',
    ],
  },
  {
    id: 'emphatic-genitive-stalo',
    masterOrder: 21,
    prerequisites: ['verb-government', 'rare-genitive-prepositions'],
    objectives: [
      'Use the genitive as an emphatic subject: Ima ljudi koji…, Bilo je svega',
      'Make the verb neuter singular after such a genitive: Došlo je mnogo ljudi',
      'Say what you regret and what you care about: Žao mi je tog vremena, Stalo mi je do tebe',
      'Use nije mi do…, držim do… and pun, sit, željan + genitive',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 13 · Disjunctive, exclusive and gradational clauses
// ─────────────────────────────────────────────────────────
const DISJUNCTIVE_GRADATIONAL = {
  id: 'disjunctive-gradational-clauses',
  title: 'Or, Only, Not Only… But Also',
  subtitle: 'Disjunctive, exclusive and gradational clauses — and where their commas go',
  icon: '🔀',
  level: 'C1',
  duration: '~9 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Three More Ways to Join Two Clauses',
      body: 'At B2 you joined independent clauses by adding (i, pa, te), by contrasting (a, ali, nego) and by concluding (dakle, stoga). Croatian grammar names three more families, and at C1 they carry a great deal of the work of argument: one offers a CHOICE (rastavne rečenice), one makes an EXCEPTION to what was just said (isključne), and one RAISES the stakes, each clause going further than the last (gradacijske). Each family also has its own comma rule.',
      icon: '🔀',
    },
    {
      type: 'table',
      title: 'The Three Families',
      headers: ['Family', 'Connectors', 'What it says', 'Example'],
      rows: [
        [
          'rastavne (disjunctive)',
          'ili; ili… ili; bilo… bilo',
          'one or the other',
          'Ili ćeš doći ili ćeš nazvati.',
        ],
        [
          'isključne (exclusive)',
          'samo, samo što, jedino, jedino što, osim što',
          'all of it — except this',
          'Sve je spremno, samo nema kruha.',
        ],
        [
          'gradacijske (gradational)',
          'ne samo… nego i / već i, čak, štoviše, a kamoli',
          'and even more than that',
          'Ne samo da je došao, nego je i pomogao.',
        ],
      ],
    },
    {
      type: 'rule',
      title: 'Disjunctive: Ili, Ili… Ili, Bilo… Bilo',
      body: 'A single ili offers a choice and leaves it open: Možemo ići vlakom ili autobusom. Doubled, ili… ili sharpens it into a demand — one of the two, and nothing else: Ili ćeš mi pomoći ili ću sve napraviti sam. Bilo… bilo says that the choice does not matter, the outcome is the same either way: Bilo danas bilo sutra, posao mora biti gotov. Before two whole clauses it becomes bilo da… bilo da: Bilo da putuješ vlakom, bilo da voziš auto, krećemo u šest. This bilo never changes its form.',
      highlight: 'Ili ćeš mi pomoći ili ću sve napraviti sam.',
    },
    {
      type: 'rule',
      title: 'Exclusive: Samo, Jedino, Osim Što',
      body: 'An exclusive clause accepts what came before and then removes one exception from it. Samo is the everyday word: Stan je lijep, samo je malo daleko. Samo što and jedino što introduce a whole clause: Sve sam riješio, jedino što još čekam potvrdu. Osim što means except that: Izlet je bio savršen, osim što je cijeli dan padala kiša. In literary prose you will also meet tek in this sense — Sve je bilo mirno, tek se iz daljine čuo pas — but in your own writing samo and jedino are the safe choices.',
      highlight: 'Stan je lijep, samo je malo daleko.',
    },
    {
      type: 'rule',
      title: 'Gradational: Ne Samo… Nego I',
      body: 'A gradational sentence climbs: the second clause adds something stronger than the first. The commonest gradational connectors are pa (čak) i after a positive clause and pa (čak) ni or a kamoli after a negative one: Studenti uče po cijele dane, pa čak i po noći. Nisam imao novca za ručak, pa čak ni za kavu. Ne samo… nego i (or ne samo… već i) is the other frame — the i goes after nego, in front of what is added: Ne samo da je položio ispit, nego je dobio i najbolju ocjenu. Čak (i) marks the surprising top of the scale: Došli su svi, čak i baka. Štoviše opens a clause that goes one step further than the last: Projekt je uspio, štoviše, premašio je sva očekivanja.',
      highlight: 'Ne samo da je položio ispit, nego je dobio i najbolju ocjenu.',
    },
    {
      type: 'rule',
      title: 'A Kamoli — Let Alone',
      body: 'A kamoli climbs DOWN a negative: if even the easy thing fails, the harder one certainly does. It needs a negative (or a near-negative such as jedva, teško) in the first clause: Ne zna skuhati ni jaje, a kamoli ručak za šestero. Jedva hoda, a kamoli trči. After a positive statement it makes no sense — there you climb up with čak or pa čak i: Zna kuhati, pa čak i peći kruh. It is always written as two words.',
      highlight: 'Ne zna skuhati ni jaje, a kamoli ručak za šestero.',
    },
    {
      type: 'rule',
      title: 'The Comma in Independent Compound Sentences',
      body: 'Hrvatski pravopis gives the rule. NO comma before i, pa, te, ni, niti, and none before ili, single or repeated: Nazovi me večeras ili mi pošalji poruku. Ili će nas nazvati ona ili ćemo je nazvati mi. A comma IS written before the contrasting connectors a, ali, nego, no and već, before the exclusive ones — samo, jedino, osim što — and before every gradational connector: nego i, a kamoli, and pa (čak) i / pa (čak) ni. That last one is the trap: pa joining two facts takes no comma, but pa that climbs a scale does — Zna kuhati, pa čak i peći kruh.',
      highlight: 'Nazovi me večeras ili mi pošalji poruku.',
    },
    {
      type: 'rule',
      title: 'Štoviše and Što Više',
      body: 'One word or two changes the meaning. Štoviše (one word) is the adverb moreover, what is more: Nije se ispričao, štoviše, nije ni odgovorio. Što više (two words) means the more, and usually pairs with to: Što više čitaš, to bolje pišeš. Štoviše is normally set off by commas because it comments on the whole clause.',
      highlight: 'Što više čitaš, to bolje pišeš.',
    },
    {
      type: 'example',
      title: 'Offering a Choice',
      items: [
        {
          hr: 'Na sastanak možemo doći osobno ili se uključiti putem video poziva.',
          en: 'We can come to the meeting in person or join by video call.',
          note: 'a single ili — an open choice, and no comma before it',
        },
        {
          hr: 'Ili ćete platiti račun do petka ili ćemo vam isključiti struju.',
          en: 'Either you pay the bill by Friday, or we will cut off your electricity.',
          note: 'ili… ili — a demand; no comma before the second ili either',
        },
        {
          hr: 'Bilo da se odlučite za more bilo za planine, rezervaciju treba napraviti na vrijeme.',
          en: 'Whether you choose the sea or the mountains, the booking has to be made in good time.',
          note: 'bilo… bilo — the choice does not change the outcome',
        },
        {
          hr: 'Bilo autobusom bilo vlakom, stići ćemo do podneva.',
          en: 'Whether by bus or by train, we will arrive by noon.',
          note: 'bilo… bilo before two nouns: the means does not change the outcome',
        },
      ],
    },
    {
      type: 'example',
      title: 'Exceptions and Escalation',
      items: [
        {
          hr: 'Hotel je bio čist i udoban, samo je doručak bio skroman.',
          en: 'The hotel was clean and comfortable, only the breakfast was modest.',
          note: 'samo removes one exception from a positive picture',
        },
        {
          hr: 'Sve smo dokumente predali, jedino što još čekamo potvrdu o prebivalištu.',
          en: 'We have handed in all the documents, except that we are still waiting for the residence certificate.',
          note: 'jedino što introduces a whole clause',
        },
        {
          hr: 'Koncert je bio odličan, osim što je ozvučenje povremeno zakazivalo.',
          en: 'The concert was excellent, except that the sound system kept failing now and then.',
          note: 'osim što — except that',
        },
        {
          hr: 'Ne samo da je preuredio cijelu kuću, nego je i sam izradio namještaj.',
          en: 'Not only did he redo the whole house, he also made the furniture himself.',
          note: 'ne samo da… nego i: the i stands before what is added',
        },
        {
          hr: 'Nakon operacije jedva je hodao, a kamoli trčao.',
          en: 'After the operation he could barely walk, let alone run.',
          note: 'a kamoli after the near-negative jedva',
        },
        {
          hr: 'Prijedlog nije naišao na otpor, štoviše, podržali su ga svi članovi vijeća.',
          en: 'The proposal met no resistance; moreover, every member of the council supported it.',
          note: 'štoviše — one word, set off by commas',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which sentence uses a kamoli correctly?',
      options: [
        'Govori pet jezika, a kamoli engleski.',
        'Ne govori ni engleski, a kamoli kineski.',
        'Odlično pliva, a kamoli roni.',
      ],
      correct: 1,
      explanation:
        'A kamoli needs a negative first clause: if not even English, then certainly not Chinese. After a positive statement use čak or pa čak i.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is punctuated according to Hrvatski pravopis?',
      options: [
        'Ostani na večeri, ili dođi sutra.',
        'Ostani na večeri ili dođi sutra.',
        'Ostani, na večeri ili dođi sutra.',
      ],
      correct: 1,
      explanation: 'A single ili joining two clauses takes no comma, just like i and pa.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) A comma before a single ili, i or pa: "Nazovi me, ili mi piši." — write Nazovi me ili mi piši. (2) No comma before samo or jedino in an exclusive clause: "Kuća je lijepa samo je skupa." — write Kuća je lijepa, samo je skupa. (3) A kamoli after a positive clause: "Zna kuhati, a kamoli peći." — after a positive use pa čak i: Zna kuhati, pa čak i peći. (4) Što više for moreover — the adverb is one word, štoviše. (5) Writing akamoli as one word. (6) A comma before the second ili, or none before gradational pa čak i: write Ili ćeš doći ili ćeš nazvati, but Zna kuhati, pa čak i peći.',
      highlight: 'Kuća je lijepa, samo je skupa.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which connector means "let alone"?',
          options: ['a kamoli', 'štoviše', 'bilo… bilo', 'jedino'],
          correct: 0,
          explanation:
            'A kamoli — let alone, after a negative. Štoviše means moreover; bilo… bilo whether… or; jedino only.',
        },
        {
          q: 'Complete: "___ danas ___ sutra, odgovor moramo dobiti ovaj tjedan."',
          options: ['Ili … nego', 'Ne samo … a kamoli', 'Bilo … bilo', 'Samo … jedino'],
          correct: 2,
          explanation:
            'Bilo… bilo: the choice of day does not matter, the answer must come this week.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Stan je udoban samo, je daleko od centra.',
            'Stan je udoban, samo je daleko od centra.',
            'Stan je udoban samo je daleko od centra.',
            'Stan, je udoban samo je daleko od centra.',
          ],
          correct: 1,
          explanation: 'An exclusive clause with samo is set off by a comma placed before samo.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Nazovi, me večeras ili mi pošalji poruku.',
            'Nazovi me večeras ili, mi pošalji poruku.',
            'Nazovi me večeras, ili mi pošalji poruku.',
            'Nazovi me večeras ili mi pošalji poruku.',
          ],
          correct: 3,
          explanation: 'No comma before a single ili joining two clauses.',
        },
        {
          q: 'Complete: "Ne samo da je položio ispit, ___ je dobio i najbolju ocjenu."',
          options: ['nego', 'ili', 'a kamoli', 'samo'],
          correct: 0,
          explanation:
            'Ne samo… nego i — the gradational frame. Ili would offer a choice, a kamoli needs a negative.',
        },
        {
          q: 'Complete: "Sve je bilo dogovoreno, ___ nismo znali točno vrijeme polaska."',
          options: ['ne samo', 'ili', 'jedino što', 'a kamoli'],
          correct: 2,
          explanation: 'Jedino što removes one exception from an otherwise complete arrangement.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Choice, Exception, Escalation — Key Takeaways',
      points: [
        'Ili offers a choice; ili… ili demands one of the two; bilo… bilo says it does not matter which',
        'Samo, jedino (što) and osim što take one exception out of what was said',
        'Ne samo… nego i climbs; čak marks the top; štoviše goes one step further',
        'A kamoli (let alone) needs a negative first clause and is two words',
        'No comma before i, pa, te, ni, ili (single or repeated); a comma before a, ali, nego, samo, jedino, a kamoli and gradational pa (čak) i',
        'Štoviše = moreover; što više… to = the more… the more',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 16 · Irregular nouns: doba, posao, dio, anđeo
// ─────────────────────────────────────────────────────────
const IRREGULAR_NOUNS = {
  id: 'irregular-nouns-doba-dio',
  title: 'Posao, Posla — Dio, Dijela',
  subtitle: 'Nouns that hide their stem in the nominative, and the neuter noun doba',
  icon: '🧩',
  level: 'C1',
  duration: '~8 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'The Nominative Is the Odd One Out',
      body: 'Most Croatian nouns show their stem in the dictionary form: grad, grada. A small and very frequent group does not. Posao, dio, anđeo, pepeo and kotao all look one way in the nominative and another in every other case — posla, dijela, anđela, pepela, kotla. The reason is one old sound change, and once you see it the whole group behaves. The lesson ends with doba, a neuter noun that hardly changes at all.',
      icon: '🧩',
    },
    {
      type: 'rule',
      title: 'Where the L Went',
      body: 'Centuries ago an l at the end of a word turned into o — the same change that gives the past participle bio, rekao, čuo instead of bil, rekal. It happened only where the l stood at the end. As soon as an ending follows, the l is back: anđel- gives anđeo but anđela, anđelu; pepel- gives pepeo but pepela. So to decline one of these nouns, take the nominative, turn the final o back into l, and add the ending.',
      highlight: 'anđeo but anđela, anđelu',
    },
    {
      type: 'rule',
      title: 'The Vanishing A',
      body: 'Posao and kotao have a second twist: the a before the o is a fleeting a, inserted only to make the bare stem pronounceable. Once the ending is added it is not needed: posl- → posao, posla, poslu, poslom; kotl- → kotao, kotla, kotlu. Anđeo and pepeo keep their e in every case — anđela, pepela — because that e is part of the stem, not inserted. Three more nouns follow the posao pattern: orao (eagle) → orla, ugao (corner) → ugla, đavao (devil) → đavla. One fixed phrase keeps an old genitive plural: gledati svoja posla — to mind one’s own business.',
      highlight: 'posao, posla, poslu, poslom',
    },
    {
      type: 'rule',
      title: 'Dio: The Long Ije Comes Back',
      body: 'Dio hides two things. Its stem is dijel-, with the long ije, and in the nominative the l became o and the ije shortened: dijel → dio. Every other form shows the full stem: dijela, dijelu, dijelom, and the plural dijelovi. Do not confuse dijela (of a part) with djela — the forms of djelo, a work or a deed: Pročitao sam prvi dio romana, ali ne i ostala djela tog pisca.',
      highlight: 'dijela, dijelu, dijelom',
    },
    {
      type: 'table',
      title: 'Singular',
      headers: ['Case', 'posao', 'dio', 'anđeo', 'kotao'],
      rows: [
        ['nominative', 'posao', 'dio', 'anđeo', 'kotao'],
        ['genitive', 'posla', 'dijela', 'anđela', 'kotla'],
        ['dative', 'poslu', 'dijelu', 'anđelu', 'kotlu'],
        ['accusative', 'posao', 'dio', 'anđela', 'kotao'],
        ['vocative', '—', '—', 'anđele!', '—'],
        ['locative', 'poslu', 'dijelu', 'anđelu', 'kotlu'],
        ['instrumental', 'poslom', 'dijelom', 'anđelom', 'kotlom'],
      ],
    },
    {
      type: 'rule',
      title: 'The Plural: Mostly -ovi, but Anđeli',
      body: 'Posao, dio and kotao are one-syllable stems once the o is undone (posl-, dijel-, kotl-), so like grad → gradovi they take -ovi: poslovi, dijelovi, kotlovi, with the genitive plural poslova, dijelova, kotlova. Anđeo has the two-syllable stem anđel- and takes the plain -i: anđeli, anđela, anđelima, anđele. Pepeo, ash, has no ordinary plural. Since anđeo is a living being, its accusative singular equals the genitive: Vidio sam anđela.',
      highlight: 'poslovi, dijelovi, kotlovi',
    },
    {
      type: 'table',
      title: 'Plural',
      headers: ['Case', 'posao', 'dio', 'anđeo', 'kotao'],
      rows: [
        ['nominative', 'poslovi', 'dijelovi', 'anđeli', 'kotlovi'],
        ['genitive', 'poslova', 'dijelova', 'anđela', 'kotlova'],
        ['dative / locative / instrumental', 'poslovima', 'dijelovima', 'anđelima', 'kotlovima'],
        ['accusative', 'poslove', 'dijelove', 'anđele', 'kotlove'],
      ],
    },
    {
      type: 'rule',
      title: 'Doba: A Neuter Noun That Keeps Its Form',
      body: 'Doba means time, period, age of history or season: godišnje doba (season), kameno doba (the Stone Age), u to doba (at that time). It is NEUTER, so everything agrees in the neuter: rano doba, ovo doba, Proljeće je moje omiljeno godišnje doba. In the nominative, genitive and accusative it keeps the form doba, in the singular and the plural: iz tog doba, u svako doba, četiri godišnja doba. In the dative and locative usage varies — you will read both u kamenom dobu and u kameno doba — and careful writers often choose the accusative phrase u to doba.',
      highlight: 'Proljeće je moje omiljeno godišnje doba',
    },
    {
      type: 'rule',
      title: 'Doba Is Not Dob',
      body: 'A different, feminine noun, dob (genitive dobi), means a person’s age: u mojoj dobi (at my age), djeca školske dobi (children of school age), Koje ste dobi? Do not mix the two: an era is doba, a person’s age is dob. In mojoj dobi the feminine mojoj shows at once which noun you are using.',
      highlight: 'u mojoj dobi',
    },
    {
      type: 'example',
      title: 'Posao and Dio in Use',
      items: [
        {
          hr: 'Nakon posla obično svratim do tržnice po svježe povrće.',
          en: 'After work I usually stop by the market for fresh vegetables.',
          note: 'posla — genitive of posao after nakon',
        },
        {
          hr: 'U novom poslu najviše mi se sviđaju ljudi s kojima radim.',
          en: 'What I like most in my new job are the people I work with.',
          note: 'poslu — locative of posao, the l back and the a gone',
        },
        {
          hr: 'Svi su poslovi oko kuće ovaj vikend pali na mene.',
          en: 'All the jobs around the house fell to me this weekend.',
          note: 'poslovi — plural of posao with -ovi',
        },
        {
          hr: 'Veći dio dana proveli smo u starom dijelu grada.',
          en: 'We spent most of the day in the old part of town.',
          note: 'dio — accusative like the nominative; dijelu — locative with the full stem',
        },
        {
          hr: 'Rezervne dijelove za stari auto teško je naći.',
          en: 'Spare parts for an old car are hard to find.',
          note: 'dijelove — accusative plural of dio',
        },
        {
          hr: 'Slažem se s tobom samo dijelom, ne u svemu.',
          en: 'I agree with you only in part, not in everything.',
          note: 'dijelom — the instrumental of dio, also used as the adverb partly',
        },
      ],
    },
    {
      type: 'example',
      title: 'Anđeo, Kotao, Pepeo and Doba',
      items: [
        {
          hr: 'Na slici su dva anđela s vijencem iznad Bogorodice.',
          en: 'In the painting there are two angels with a wreath above the Virgin.',
          note: 'anđela — after dva, the form that matches the genitive singular of anđeo',
        },
        {
          hr: 'Baka je u velikom bakrenom kotlu kuhala pekmez od šljiva.',
          en: 'Grandma cooked plum jam in a big copper cauldron.',
          note: 'kotlu — locative of kotao; the fleeting a disappears',
        },
        {
          hr: 'Od starog lista ostao je samo pepeo u peći.',
          en: 'Only ash was left of the old letter in the stove.',
          note: 'pepeo — nominative; the genitive would be pepela',
        },
        {
          hr: 'U to doba u selu nije bilo ni struje ni vode.',
          en: 'At that time there was neither electricity nor water in the village.',
          note: 'u to doba — the accusative phrase for at that time',
        },
        {
          hr: 'Hrvatska ima četiri jasno odvojena godišnja doba.',
          en: 'Croatia has four clearly distinct seasons.',
          note: 'doba stays doba after četiri; godišnja agrees in the neuter plural',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Ostao sam bez ___." (job)',
      options: ['posaoa', 'posla', 'posala', 'posao'],
      correct: 1,
      explanation:
        'Bez takes the genitive. Undo the o (posl-), drop the fleeting a, add -a: posla.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the plural of anđeo?',
      options: ['anđelovi', 'anđeoi', 'anđeli'],
      correct: 2,
      explanation:
        'The stem anđel- has two syllables, so it takes the plain -i: anđeli, not the -ovi of poslovi.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Adding an ending to the nominative: "posaoa", "dioa" — undo the o first: posla, dijela. (2) Keeping the fleeting a: "posala", "kotala" — the forms are posla, kotla. (3) Writing djela for dijela: "veći djela grada" — it is veći dio grada, u većem dijelu grada; djela are works or deeds. (4) Giving anđeo the long plural: "anđelovi" — it is anđeli. (5) Making doba feminine: "ta doba", "moja omiljena doba" — doba is neuter: to doba, moje omiljeno doba. A person’s age is dob, dobi.',
      highlight: 'veći dio grada, u većem dijelu grada',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Razgovarali smo o ___." (the new job)',
          options: ['novom poslu', 'novom posaou', 'novom posalu', 'novi posao'],
          correct: 0,
          explanation: 'O + locative: poslu, with the l restored and the fleeting a gone.',
        },
        {
          q: 'Complete: "Najljepši je stari ___ grada." (part)',
          options: ['djel', 'dijel', 'djelo', 'dio'],
          correct: 3,
          explanation: 'The nominative of the stem dijel- is dio.',
        },
        {
          q: 'Complete: "Muzej se nalazi u južnom ___ otoka." (part)',
          options: ['djelu', 'diou', 'dijelu', 'dijelom'],
          correct: 2,
          explanation:
            'Where? — u + locative: dijelu. Djelu belongs to djelo (a work), dijelom is the instrumental.',
        },
        {
          q: 'What is the plural of kotao?',
          options: ['kotaoi', 'kotlovi', 'kotali', 'kotlevi'],
          correct: 1,
          explanation: 'Undo the o (kotl-) and add -ovi as with other short stems: kotlovi.',
        },
        {
          q: 'Complete: "Proljeće je moje omiljeno godišnje ___."',
          options: ['dob', 'dobi', 'doba', 'dobe'],
          correct: 2,
          explanation:
            'Godišnje doba — the neuter noun doba, with neuter omiljeno and godišnje. Dob is a person’s age.',
        },
        {
          q: 'Complete: "Na stropu su naslikani ___." (angels)',
          options: ['anđeli', 'anđelovi', 'anđeoi', 'anđele'],
          correct: 0,
          explanation: 'The nominative plural of anđeo is anđeli. Anđele is the accusative plural.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Hidden Stems — Key Takeaways',
      points: [
        'A final l became o: anđel- → anđeo, but anđela, anđelu',
        'Posao and kotao also lose a fleeting a: posla, kotla, poslom',
        'Dio has the stem dijel-: dijela, dijelu, dijelovi — not djela (works)',
        'Plurals: poslovi, dijelovi, kotlovi — but anđeli',
        'Doba is neuter and keeps the form doba: godišnje doba, u to doba, četiri godišnja doba',
        'A person’s age is dob, dobi: u mojoj dobi',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 17 · Less frequent genitive prepositions
// ─────────────────────────────────────────────────────────
const RARE_GENITIVE_PREPOSITIONS = {
  id: 'rare-genitive-prepositions',
  title: 'Usred, Uoči, Povodom, Putem',
  subtitle:
    'The genitive prepositions of formal and written Croatian — exact meanings and register',
  icon: '🧭',
  level: 'C1',
  duration: '~9 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'The Prepositions of the Newspaper',
      body: 'You have used the everyday genitive prepositions for years: iz, od, do, bez, kod, zbog. Open a Croatian newspaper or an official letter and a second set appears — usred, uoči, prigodom, prilikom, putem, glede, diljem. Every one of them takes the genitive, so the grammar is easy; the challenge is their exact meaning and the register each belongs to. This lesson sorts them by what they express: place, time and occasion, means, and relation.',
      icon: '🧭',
    },
    {
      type: 'table',
      title: 'Less Frequent Genitive Prepositions',
      headers: ['Preposition', 'Meaning', 'Example'],
      rows: [
        ['usred', 'in the middle of (space, time, activity)', 'usred grada, usred noći'],
        ['nasred', 'in the middle of a surface', 'nasred trga, nasred ceste'],
        ['duž', 'along', 'duž obale'],
        ['uoči', 'on the eve of, just before', 'uoči Božića, uoči izbora'],
        ['tijekom', 'during, in the course of', 'tijekom ljeta'],
        ['prilikom', 'on the occasion of, when (formal)', 'prilikom prijave'],
        ['prigodom, u povodu', 'to mark, on the occasion of', 'prigodom Dana grada'],
        ['pomoću', 'with the help of, by means of', 'pomoću rječnika'],
        ['putem', 'via, through, by way of', 'putem interneta'],
        ['umjesto', 'instead of', 'umjesto kave'],
        ['poput', 'like, such as', 'gradovi poput Zadra'],
        ['glede', 'regarding (formal)', 'glede vašeg upita'],
        ['mimo', 'past, by (space); contrary to', 'mimo moje kuće, mimo pravila'],
        ['radi', 'for the purpose of', 'radi posla'],
      ],
    },
    {
      type: 'rule',
      title: 'Place: Usred, Nasred, Duž',
      body: 'Usred is the general in the middle of — of a place, a time or an activity: usred grada, usred noći, usred sastanka. Nasred is narrower: the middle of a SURFACE, something you stand or lie on: nasred trga, nasred ceste, nasred sobe. A car stopped nasred ceste is standing on the road; a village usred šume is surrounded by the forest. Duž means along the length of something: Duž obale niču novi hoteli.',
      highlight: 'nasred ceste',
    },
    {
      type: 'rule',
      title: 'Time and Occasion: Uoči, Tijekom, Prilikom, Prigodom',
      body: 'Uoči is the eve of, the time just before an event: uoči Božića, uoči izbora, uoči utakmice. Tijekom stretches over a period: tijekom ljeta, tijekom pregovora — it belongs to higher style; za vrijeme says the same more plainly. Prilikom ties something to a time or circumstance and is formal: Prilikom prijave predočite osobnu iskaznicu. Prigodom names the occasion being marked: Ministar je posjetio školu prigodom otvaranja. Sastali su se prigodom pedesete obljetnice kluba. You will also read and hear povodom (povodom Dana grada), but the strict norm rejects it and prefers prigodom or u povodu: u povodu Dana grada. Prilikom is when something happens; prigodom is what it marks.',
      highlight: 'prigodom pedesete obljetnice kluba',
    },
    {
      type: 'table',
      title: 'Higher Style: More Genitive Prepositions',
      headers: ['Preposition', 'Meaning', 'Example', 'Note'],
      rows: [
        [
          'diljem, širom',
          'throughout (large areas)',
          'Putovali smo diljem svijeta.',
          'higher style; širom is the commoner',
        ],
        [
          'uzduž, duž',
          'along the whole length',
          'Postavili su branike uzduž ceste.',
          'higher style',
        ],
        [
          'nadohvat',
          'within reach of',
          'Naočale su mi uvijek nadohvat ruke.',
          'more often: pri ruci',
        ],
        [
          'nadomak',
          'very close to',
          'Bili su nadomak grada.',
          'high style: + dative, nadomak gradu',
        ],
        [
          'naspram',
          'compared with (a difference)',
          'Neupadljiv je naspram svoje žene.',
          'more often: u usporedbi s',
        ],
        ['uime', 'on behalf of', 'Pozdravio je goste uime predsjednika.', 'one word'],
        [
          'namjesto',
          'instead of',
          'Namjesto ministra došao je njegov zamjenik.',
          'higher style for umjesto',
        ],
        [
          'potkraj',
          'towards the end of',
          'Potkraj godine dobili smo povišicu.',
          'also: krajem godine',
        ],
      ],
    },
    {
      type: 'rule',
      title: 'Means: Pomoću, Putem',
      body: 'Pomoću names a tool, a method or a helper that makes something possible: Prevela je tekst pomoću rječnika. Podigli su gredu pomoću dizalice. For an ordinary instrument the plain instrumental is better style — Pišem olovkom, not pomoću olovke. Putem names a channel: putem interneta, putem e-pošte, putem javnog natječaja. Both are frequent in official Croatian; in conversation you will more often hear preko: preko interneta.',
      highlight: 'Pišem olovkom',
    },
    {
      type: 'rule',
      title: 'Relation: Umjesto, Poput, Glede, Mimo',
      body: 'Umjesto replaces one thing with another: Umjesto kave popio je čaj. Poput compares or gives examples: Pjeva poput slavuja. Gradovi poput Zadra i Šibenika privlače sve više turista. Glede means regarding and belongs to letters and documents: Glede vašeg upita, obavještavamo vas da… — in speech, u vezi s + instrumental is more natural. Mimo has two meanings. In space it means past, by — and, said of two people, past each other in opposite directions: Prošli su mimo moje kuće. Prošli su jedan mimo drugoga. Figuratively it means outside of or contrary to: Odluka je donesena mimo pravila. Mimo svih očekivanja, pobijedili su.',
      highlight: 'Prošli su mimo moje kuće.',
    },
    {
      type: 'rule',
      title: 'Zbog and Radi Are Not the Same',
      body: 'Both take the genitive, but careful Croatian keeps them apart. Zbog gives the CAUSE — what made something happen: Utakmica je odgođena zbog kiše. Radi gives the PURPOSE — what something is done for: Došao je u Zagreb radi posla. Ask the question: Why did it happen? → zbog. What for? → radi. In speech the two are often blurred, but language advisers and editors treat radi kiše as an error.',
      highlight: 'Utakmica je odgođena zbog kiše.',
    },
    {
      type: 'rule',
      title: 'The Exception: Unatoč Takes the Dative',
      body: 'One preposition of this family does NOT take the genitive. Unatoč (despite) governs the DATIVE: unatoč kiši, unatoč svemu, unatoč tome. Its synonym usprkos does the same: usprkos upozorenjima. Learners who have just absorbed a list of genitive prepositions write unatoč kiše; it is one of the most frequent errors in written Croatian.',
      highlight: 'unatoč kiši',
    },
    {
      type: 'example',
      title: 'Place, Time and Occasion',
      items: [
        {
          hr: 'Usred noći probudila nas je jaka grmljavina.',
          en: 'In the middle of the night a loud thunderstorm woke us.',
          note: 'usred noći — the middle of a period of time',
        },
        {
          hr: 'Kamion se pokvario nasred ceste i promet je stajao satima.',
          en: 'The lorry broke down in the middle of the road and traffic stood still for hours.',
          note: 'nasred ceste — on the surface of the road',
        },
        {
          hr: 'Duž cijele obale postavljene su nove klupe i rasvjeta.',
          en: 'New benches and lighting have been put up along the whole coast.',
          note: 'duž obale — along',
        },
        {
          hr: 'Uoči izbora kandidati su obišli sva veća mjesta u županiji.',
          en: 'On the eve of the election the candidates toured every larger town in the county.',
          note: 'uoči izbora — just before',
        },
        {
          hr: 'Prigodom stote obljetnice škole učenici su pripremili izložbu.',
          en: 'To mark the school’s hundredth anniversary, the pupils prepared an exhibition.',
          note: 'prigodom — the occasion being marked (the strict norm prefers it to povodom)',
        },
        {
          hr: 'Prilikom ulaska u zgradu posjetitelji moraju pokazati osobnu iskaznicu.',
          en: 'On entering the building, visitors must show their identity card.',
          note: 'prilikom — the formal when of a procedure',
        },
      ],
    },
    {
      type: 'example',
      title: 'Means, Relation, Cause and Purpose',
      items: [
        {
          hr: 'Stari rukopis pročitali su pomoću posebne kamere.',
          en: 'They read the old manuscript with the help of a special camera.',
          note: 'pomoću — the means that made it possible',
        },
        {
          hr: 'Prijava se podnosi isključivo putem službene mrežne stranice.',
          en: 'Applications are submitted only through the official website.',
          note: 'putem — the channel',
        },
        {
          hr: 'Umjesto skupog hotela odabrali smo mali obiteljski apartman.',
          en: 'Instead of an expensive hotel we chose a small family apartment.',
          note: 'umjesto + genitive',
        },
        {
          hr: 'Zbog štrajka vlakovi ne voze pa su mnogi radi sigurnosti krenuli autom dan ranije.',
          en: 'Because of the strike the trains are not running, so many people set off by car a day early to be safe.',
          note: 'zbog — cause; radi — purpose',
        },
        {
          hr: 'Unatoč lošem vremenu, na koncert je došlo mnogo ljudi.',
          en: 'Despite the bad weather, a lot of people came to the concert.',
          note: 'unatoč + dative: lošem vremenu',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Utakmica je odgođena ___ snijega."',
      options: ['radi', 'zbog', 'unatoč'],
      correct: 1,
      explanation:
        'The snow is the cause, so zbog. Radi would mean the match was postponed for the purpose of the snow.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which phrase is correct?',
      options: ['unatoč kiše', 'unatoč kišom', 'unatoč kiši'],
      correct: 2,
      explanation: 'Unatoč takes the dative: unatoč kiši.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Unatoč with the genitive: "unatoč problema" — it takes the dative: unatoč problemima. (2) Radi for a cause: "Nisam došao radi bolesti" — the illness is the cause: zbog bolesti. (3) Nasred where there is no surface: "nasred razgovora" — the middle of an activity is usred razgovora. (4) Pomoću for an ordinary tool: "Režem kruh pomoću noža" — use the instrumental: Režem kruh nožem. (5) Prilikom for the occasion being marked: "prilikom Dana državnosti održan je mimohod" — the occasion marked is prigodom (or u povodu) Dana državnosti. The strict norm also rejects povodom here.',
      highlight: 'unatoč problemima',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Ostali smo bez struje ___ filma." (in the middle of)',
          options: ['nasred', 'usred', 'duž', 'putem'],
          correct: 1,
          explanation: 'The middle of an activity or a period is usred. Nasred is for a surface.',
        },
        {
          q: 'Complete: "Djeca su se igrala ___ trga." (in the middle of the square)',
          options: ['nasred', 'uoči', 'umjesto', 'prigodom'],
          correct: 0,
          explanation: 'A square is a surface you stand on: nasred trga.',
        },
        {
          q: 'Complete: "Gradska knjižnica otvorila je izložbu ___ Dana grada."',
          options: ['pomoću', 'glede', 'mimo', 'prigodom'],
          correct: 3,
          explanation:
            'Prigodom names the occasion being marked; the strict norm prefers it (and u povodu) to povodom.',
        },
        {
          q: 'Complete: "Unatoč ___, stigli smo na vrijeme."',
          options: ['gužve', 'gužvom', 'gužvi', 'gužva'],
          correct: 2,
          explanation: 'Unatoč takes the dative: unatoč gužvi.',
        },
        {
          q: 'Complete: "Došla je u Split ___ posla, ne na odmor."',
          options: ['zbog', 'radi', 'nasred', 'duž'],
          correct: 1,
          explanation: 'The purpose of the visit: radi posla. Zbog would make the job the cause.',
        },
        {
          q: 'Complete: "Dokumente možete poslati i ___ e-pošte."',
          options: ['putem', 'usred', 'uoči', 'umjesto'],
          correct: 0,
          explanation: 'Putem names the channel: putem e-pošte.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Formal Genitive Prepositions — Key Takeaways',
      points: [
        'Usred — the middle of a place, time or activity; nasred — the middle of a surface',
        'Uoči — the eve of; tijekom — during; prilikom — when, at the time of (formal)',
        'Prigodom or u povodu — what an event marks (the strict norm rejects povodom); pomoću — the means; putem — the channel',
        'Mimo: past, by (Prošli su mimo moje kuće) and contrary to (mimo pravila)',
        'Higher style: diljem, širom, uzduž, nadohvat, nadomak, naspram, uime, namjesto, potkraj',
        'Umjesto, poput, glede, mimo, duž all take the genitive',
        'Zbog gives the cause, radi the purpose',
        'Unatoč and usprkos take the DATIVE: unatoč kiši',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 18 · The comma in dependent compound sentences
// ─────────────────────────────────────────────────────────
const COMMA_DEPENDENT = {
  id: 'comma-dependent-clauses',
  title: 'Mislim da… — Kad dođeš, …',
  subtitle: 'The comma in dependent compound sentences, by Hrvatski pravopis',
  icon: '✒️',
  level: 'C1',
  duration: '~9 min',
  color: '#be123c',
  bg: '#fff1f2',
  slides: [
    {
      type: 'intro',
      title: 'Croatian Is Not German, and Not English Either',
      body: 'Learners bring two wrong habits to the Croatian comma. From German and Russian comes a comma before every that-clause: "Mislim, da…". From English comes a comma wherever there is a pause. Croatian follows neither. Its rule for dependent clauses is about ORDER: where the dependent clause stands in relation to its main clause. Hrvatski pravopis of the Institut za hrvatski jezik i jezikoslovlje states it in three steps, and a fourth rule covers relative clauses.',
      icon: '✒️',
    },
    {
      type: 'rule',
      title: 'Normal Order: No Comma',
      body: 'When the main clause comes first and the dependent clause follows, no comma is written between them — whatever the conjunction, however long the sentence: Mislim da je u pravu. Ne znam je li već stigao. Nazovi me kad dođeš kući. Javit ću ti ako budem imao vremena. Pitala me gdje sam naučio hrvatski. This is the commonest sentence shape in Croatian, and it is the one learners most often over-punctuate.',
      highlight: 'Mislim da je u pravu.',
    },
    {
      type: 'rule',
      title: 'Inverted Order: A Comma After the Dependent Clause',
      body: 'When the dependent clause comes FIRST, a comma closes it before the main clause begins: Kad dođeš kući, nazovi me. Ako budem imao vremena, javit ću ti. Što je rekao, to je i napravio. Tko rano rani, dvije sreće grabi. The comma stands at the end of the dependent clause, never before its conjunction, and it is written even when the clause is short: Ako možeš, dođi.',
      highlight: 'Kad dođeš kući, nazovi me.',
    },
    {
      type: 'rule',
      title: 'Inserted Clauses: Two Commas',
      body: 'A dependent clause placed INSIDE the main clause is enclosed by commas on both sides: Rekao je, kad smo se sreli, da će doći. Sestra je, čim je čula vijest, sjela u auto. The second comma is the one learners forget, and without it the reader cannot tell where the main clause resumes. Read the sentence without the inserted part: Rekao je da će doći — it must still stand.',
      highlight: 'Sestra je, čim je čula vijest, sjela u auto.',
    },
    {
      type: 'table',
      title: 'Three Orders, Three Patterns',
      headers: ['Order', 'Pattern', 'Example'],
      rows: [
        ['main → dependent', 'no comma', 'Ostat ćemo kod kuće ako bude padala kiša.'],
        [
          'dependent → main',
          'comma after the dependent clause',
          'Ako bude padala kiša, ostat ćemo kod kuće.',
        ],
        [
          'main ⟨dependent⟩ main',
          'comma on both sides',
          'Mi ćemo, ako bude padala kiša, ostati kod kuće.',
        ],
      ],
    },
    {
      type: 'rule',
      title: 'A Fronted Verbal Adverb Is Closed by a Comma',
      body: 'A verbal adverb (-ći, -vši, -avši) with its words works like a dependent clause that comes first, so a comma closes it: Otišavši na more, dobro smo se odmorili. Čitajući novine, popio je kavu. Ne mogavši doći, javio se telefonom. Placed after the verb it is usually not set off: Popio je kavu čitajući novine. Contrast conjunctions behave as in compound sentences: a comma stands before a, ali, nego, no and već (Htio je doći, ali nije stigao), never before plain i or ili.',
      highlight: 'Otišavši na more, dobro smo se odmorili.',
    },
    {
      type: 'rule',
      title: 'Relative Clauses: Does It Pick Out, or Add?',
      body: 'A relative clause with koji, što or čiji follows its own rule. A RESTRICTIVE clause picks out which one you mean, and takes no comma: Studenti koji su položili ispit mogu se upisati. (Only those who passed.) A NON-RESTRICTIVE clause adds information about something already identified, and is enclosed in commas: Moj otac, koji je liječnik, radi u Rijeci. (I have one father; the clause only tells you more.) A non-restrictive clause at the end of a sentence still needs its comma: Sutra dolazi moja sestra, koja živi u Splitu.',
      highlight: 'Moj otac, koji je liječnik, radi u Rijeci.',
    },
    {
      type: 'rule',
      title: 'Two Practices, One Safe Habit',
      body: 'Older school practice put a comma before every koji, restrictive or not, and you will meet that in older books and in many writers today. The current Hrvatski pravopis distinguishes the two kinds, and the distinction carries meaning: Studenti, koji su položili ispit, mogu se upisati says that ALL the students passed. The safe habit: always enclose a non-restrictive clause in commas — every guide agrees on that — and ask, before a restrictive one, whether the comma would change what you mean.',
      highlight: 'Studenti, koji su položili ispit, mogu se upisati',
    },
    {
      type: 'example',
      title: 'Normal and Inverted Order',
      items: [
        {
          hr: 'Svi znamo da će projekt kasniti barem mjesec dana.',
          en: 'We all know that the project will be at least a month late.',
          note: 'normal order — no comma before da',
        },
        {
          hr: 'Nije mi rekla zašto je otkazala putovanje u posljednji trenutak.',
          en: 'She did not tell me why she cancelled the trip at the last minute.',
          note: 'an indirect question after the main clause — no comma',
        },
        {
          hr: 'Čim završiš s pregledom dokumenata, pošalji ih u računovodstvo.',
          en: 'As soon as you finish checking the documents, send them to accounting.',
          note: 'inverted order — the comma closes the čim clause',
        },
        {
          hr: 'Ako vam termin ne odgovara, javite nam se najkasnije dan ranije.',
          en: 'If the appointment does not suit you, let us know a day in advance at the latest.',
          note: 'inverted order — comma after the ako clause',
        },
        {
          hr: 'Što se tiče cijene, o tome ćemo razgovarati na sastanku.',
          en: 'As for the price, we will discuss that at the meeting.',
          note: 'the što se tiče clause comes first — a comma follows it',
        },
      ],
    },
    {
      type: 'example',
      title: 'Inserted and Relative Clauses',
      items: [
        {
          hr: 'Direktor je, kad je vidio rezultate, odmah sazvao sastanak.',
          en: 'When the director saw the results, he called a meeting at once.',
          note: 'an inserted kad clause — a comma on both sides',
        },
        {
          hr: 'Moja baka, koja je cijeli život živjela na Visu, nikad nije bila u Zagrebu.',
          en: 'My grandmother, who lived on Vis all her life, has never been to Zagreb.',
          note: 'non-restrictive — she is already identified, so commas',
        },
        {
          hr: 'Knjiga koju si mi posudio ostala mi je na stolu u uredu.',
          en: 'The book you lent me is still on my desk at the office.',
          note: 'restrictive — which book? the one you lent me; no comma',
        },
        {
          hr: 'Sutra stiže novi ravnatelj, čije ime još nitko ne zna.',
          en: 'The new head teacher, whose name nobody knows yet, arrives tomorrow.',
          note: 'a non-restrictive clause at the end still takes its comma',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which sentence is punctuated correctly?',
      options: [
        'Mislim, da ćemo stići na vrijeme.',
        'Mislim da ćemo stići na vrijeme.',
        'Mislim da, ćemo stići na vrijeme.',
      ],
      correct: 1,
      explanation: 'Main clause first, dependent clause after: no comma before da.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is punctuated correctly?',
      options: [
        'Kad stigneš na kolodvor nazovi me.',
        'Kad stigneš, na kolodvor nazovi me.',
        'Kad stigneš na kolodvor, nazovi me.',
      ],
      correct: 2,
      explanation:
        'The dependent clause comes first, so a comma closes it — after kolodvor, where it ends.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) A comma before da in normal order: "Rekao je, da dolazi." — write Rekao je da dolazi. (2) No comma after an initial dependent clause: "Ako želiš dođi." — write Ako želiš, dođi. (3) Only one comma round an inserted clause: "Marko je, kad je čuo vijest odmah otišao." — close it: Marko je, kad je čuo vijest, odmah otišao. (4) The comma before the conjunction instead of after the clause: "Kad dođeš kući nazovi, me." (5) No commas round a non-restrictive clause: "Moja majka koja je učiteljica voli čitati." — Moja majka, koja je učiteljica, voli čitati.',
      highlight: 'Marko je, kad je čuo vijest, odmah otišao.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ne znam, je li vlak već otišao.',
            'Ne znam je li, vlak već otišao.',
            'Ne znam je li vlak već otišao.',
            'Ne znam je li vlak, već otišao.',
          ],
          correct: 2,
          explanation: 'Normal order — the indirect question follows the main clause, no comma.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ako budeš u gradu, svrati do nas.',
            'Ako budeš u gradu svrati do nas.',
            'Ako, budeš u gradu svrati do nas.',
            'Ako budeš, u gradu svrati do nas.',
          ],
          correct: 0,
          explanation: 'Inverted order — a comma closes the ako clause.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ivana je kad je čula vijest, počela plakati.',
            'Ivana je, kad je čula vijest počela plakati.',
            'Ivana je kad je čula vijest počela, plakati.',
            'Ivana je, kad je čula vijest, počela plakati.',
          ],
          correct: 3,
          explanation: 'An inserted clause takes a comma on both sides.',
        },
        {
          q: 'Which sentence is punctuated correctly? (Ana has one brother.)',
          options: [
            'Anin brat koji živi u Kanadi dolazi na ljeto.',
            'Anin brat, koji živi u Kanadi, dolazi na ljeto.',
            'Anin brat, koji živi u Kanadi dolazi na ljeto.',
            'Anin, brat koji živi u Kanadi dolazi na ljeto.',
          ],
          correct: 1,
          explanation:
            'Ana has one brother, so the clause only adds information — non-restrictive, enclosed in commas.',
        },
        {
          q: 'What does "Putnici koji imaju kartu mogu ući." say?',
          options: [
            'All passengers have tickets and may go in.',
            'Only the passengers with a ticket may go in.',
            'No passenger may go in.',
            'The passengers must buy a ticket inside.',
          ],
          correct: 1,
          explanation:
            'Without commas the clause is restrictive: it picks out the passengers who have a ticket.',
        },
        {
          q: 'Where does the comma go? "Što više vježbaš to ćeš brže napredovati."',
          options: ['after Što', 'after vježbaš', 'after to', 'after brže'],
          correct: 1,
          explanation:
            'The dependent clause Što više vježbaš comes first, so the comma closes it: …vježbaš, to ćeš…',
        },
      ],
    },
    {
      type: 'summary',
      title: 'The Dependent-Clause Comma — Key Takeaways',
      points: [
        'Main clause first: no comma — Mislim da je u pravu',
        'Dependent clause first: a comma closes it — Kad dođeš, nazovi me',
        'An inserted clause: a comma on both sides',
        'The comma goes where the clause ENDS, never before its conjunction',
        'Non-restrictive relative clauses are always enclosed in commas',
        'A restrictive relative clause picks out which one; a comma would change the meaning',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 21 · The emphatic genitive and stalo mi je do…
// ─────────────────────────────────────────────────────────
const EMPHATIC_GENITIVE = {
  id: 'emphatic-genitive-stalo',
  title: 'Ima Ljudi Koji… — Stalo Mi Je Do Tebe',
  subtitle: 'The emphatic genitive, žao mi je, and the fixed expressions with do',
  icon: '💬',
  level: 'C1',
  duration: '~9 min',
  color: '#15803d',
  bg: '#f0fdf4',
  slides: [
    {
      type: 'intro',
      title: 'The Genitive Says How Much — and How Much It Matters',
      body: 'You know the genitive of quantity: puno ljudi, malo vremena. At C1 the same case carries emphasis and feeling. Ima ljudi koji… states that such people exist; Bilo je svega sums up an evening in three words. And a group of fixed expressions — žao mi je, stalo mi je do, nije mi do, držim do — use the genitive to say what you regret, what you care about and what you value. They are everyday Croatian, and they sound foreign when the case is wrong.',
      icon: '💬',
    },
    {
      type: 'rule',
      title: 'Ima Ljudi Koji… — The Genitive as Subject',
      body: 'With ima, nema, bilo je and bit će the thing that exists can stand in the genitive. It then means "there is some, there are such": Ima ljudi koji ne vole more. (There are people who do not like the sea.) Nema kruha. (There is no bread.) Ima li kave? (Is there any coffee?) Bilo je i onih koji su se bunili. The genitive makes the claim about existence, often with a note of emphasis: Ima tu posla! — There is plenty of work here!',
      highlight: 'Ima ljudi koji ne vole more.',
    },
    {
      type: 'rule',
      title: 'The Verb Goes Neuter Singular',
      body: 'A genitive cannot be a grammatical subject in the ordinary sense, so the verb does not agree with it. It stands in the third person singular, and in the past tense in the NEUTER: Bilo je ljudi koji… (there were some people who…). Bili su ljudi koji… is also grammatical, but it is a different sentence: ljudi is then a nominative subject — "they were people who…" — and the verb agrees with it. The same holds after quantity words: Došlo je mnogo ljudi. Na koncertu se okupilo više od tisuću posjetitelja. Ostalo je malo vremena. Bit će gužve.',
      highlight: 'Došlo je mnogo ljudi.',
    },
    {
      type: 'rule',
      title: 'Kakve li budale! — The Emphatic Genitive Proper',
      body: 'Croatian grammars reserve the name emphatic genitive (emfatički genitiv) for an exclamation of feeling — admiration, surprise, scorn — built from an adjective and a noun in the genitive with li after the first word: Kakve li budale! (What a fool!) Čudnog li čovjeka! (What a strange man!) Pametne li žene! (What a clever woman!) Lijepog li dana! (What a lovely day!) There is no verb. The adjective and the noun agree in the genitive singular or plural: Krasnih li žena! (What lovely women!)',
      highlight: 'Čudnog li čovjeka!',
    },
    {
      type: 'rule',
      title: 'Bilo Je Svega — The Genitive of Everything',
      body: 'Svega, the genitive of sve, sums up abundance and variety: Na svadbi je bilo svega — jela, pića, glazbe. Ima tu svega i svačega. (There is all sorts here.) The same genitive appears in exclamations of amount: Koliko snijega! Kakvih ljudi ima! This emphatic genitive is spoken Croatian at its most natural; it is also common in writing.',
      highlight: 'Na svadbi je bilo svega — jela, pića, glazbe.',
    },
    {
      type: 'rule',
      title: 'Žao Mi Je + Genitive',
      body: 'Žao mi je takes three continuations. A clause gives the reason for regret: Žao mi je što nisi došao. A genitive names what you miss, regret or begrudge: Žao mi je tog vremena. (I miss those days.) Nije mi žao novca. (I do not regret the money.) And a person in the genitive is someone you pity: Žao mi je tebe — or with the clitic, Žao mi te je. The person who feels it is in the dative: mi, ti, mu, joj, nam.',
      highlight: 'Žao mi je tog vremena.',
    },
    {
      type: 'rule',
      title: 'Žali Bože + Genitive',
      body: 'Žali Bože + genitive says that something was wasted on a thing not worth it: Žali Bože truda! (A pity about all that effort.) Žali Bože vremena koje smo potrošili na taj film. (What a waste of the time we spent on that film.) It is fixed — the words never change — and it is spoken, slightly old-fashioned Croatian.',
      highlight: 'Žali Bože vremena',
    },
    {
      type: 'rule',
      title: 'Stalo Mi Je Do, Nije Mi Do, Držim Do',
      body: 'Three fixed expressions use do + genitive. Stalo mi je do… — I care about: Stalo mi je do tebe. Nije mi stalo do novca. Nije mi do… — I am not in the mood for: Nije mi do šale. Večeras mi nije do izlaska. Without the negation, biti do says what someone is after: Njemu je do nasljedstva (he is after the inheritance). Držim do… — I value, I set store by: Mnogo držim do njegova mišljenja. Do toga ne držim. Do always takes the genitive, and the person who cares is in the dative (mi, ti, joj) — except in držim do, where the person is the subject.',
      highlight: 'Stalo mi je do tebe.',
    },
    {
      type: 'rule',
      title: 'Pun, Sit, Željan + Genitive',
      body: 'Some adjectives take the genitive directly: pun (full of), prepun (packed with), sit (fed up with), željan (longing for), svjestan (aware of). Čaša je puna vode. Grad je prepun turista. Sit sam tvojih izlika. Željni smo mora. Svjestan sam problema. The genitive follows with no preposition — pun s vodom is a calque from other languages.',
      highlight: 'Čaša je puna vode.',
    },
    {
      type: 'table',
      title: 'The Expressions at a Glance',
      headers: ['Expression', 'Meaning', 'Example'],
      rows: [
        ['ima / nema + G', 'there is (some) / there is none', 'Ima ljudi koji…'],
        ['bilo je + G', 'there was (plenty of)', 'Bilo je svega.'],
        ['žao mi je + G', 'I miss, regret, pity', 'Žao mi je tog vremena.'],
        ['stalo mi je do + G', 'I care about', 'Stalo mi je do tebe.'],
        ['nije mi do + G', 'I am not in the mood for', 'Nije mi do šale.'],
        ['(nekome) je do + G', 'someone is after something', 'Njemu je do nasljedstva.'],
        ['Kakve li … !', 'what a …! (feeling)', 'Čudnog li čovjeka!'],
        ['žali Bože + G', 'a waste of', 'Žali Bože truda!'],
        ['držim do + G', 'I value', 'Držim do točnosti.'],
        ['pun, sit, željan + G', 'full of, fed up with, longing for', 'Sit sam svega.'],
      ],
    },
    {
      type: 'example',
      title: 'The Emphatic Genitive',
      items: [
        {
          hr: 'Ima ljudi koji cijeli život provedu u istom gradu i nimalo ne žale.',
          en: 'There are people who spend their whole life in one town and do not regret it at all.',
          note: 'ljudi — genitive plural; ima stays singular',
        },
        {
          hr: 'Na prosvjedu je bilo i onih koji su došli samo iz znatiželje.',
          en: 'At the protest there were also those who came only out of curiosity.',
          note: 'bilo je — neuter singular with the genitive onih',
        },
        {
          hr: 'Na otvorenje izložbe došlo je više ljudi nego što smo očekivali.',
          en: 'More people came to the opening of the exhibition than we expected.',
          note: 'došlo je — neuter singular after više ljudi',
        },
        {
          hr: 'Na bakinom rođendanu bilo je svega: sarme, pečenja, kolača i pjesme.',
          en: 'At Grandma’s birthday there was everything: sarma, roast meat, cakes and singing.',
          note: 'svega — the genitive of sve, summing up abundance',
        },
      ],
    },
    {
      type: 'example',
      title: 'Regret, Care and Value',
      items: [
        {
          hr: 'Ponekad mi je žao onih bezbrižnih ljeta na otoku.',
          en: 'Sometimes I miss those carefree summers on the island.',
          note: 'žao mi je + genitive of what you miss',
        },
        {
          hr: 'Nije mi žao ni eura koji sam potrošio na to putovanje.',
          en: 'I do not regret a single euro I spent on that trip.',
          note: 'eura — genitive after the negated žao',
        },
        {
          hr: 'Stalo mi je do toga da se ovaj put sve napravi kako treba.',
          en: 'I care about everything being done properly this time.',
          note: 'do toga, followed by a da clause',
        },
        {
          hr: 'Nakon onakvog dana nikome nije bilo do slavlja.',
          en: 'After a day like that, nobody was in the mood for celebrating.',
          note: 'nije bilo do + genitive; the person is in the dative nikome',
        },
        {
          hr: 'U našoj obitelji uvijek se mnogo držalo do zajedničkog ručka nedjeljom.',
          en: 'In our family the Sunday meal together was always highly valued.',
          note: 'držati do + genitive — to set store by',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Na utakmicu je ___ više od deset tisuća navijača."',
      options: ['došli', 'došlo', 'došla'],
      correct: 1,
      explanation: 'After a quantity with the genitive the verb is neuter singular: došlo je.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Stalo mi je do ___."',
      options: ['tebi', 'tobom', 'tebe'],
      correct: 2,
      explanation: 'Do always takes the genitive: do tebe.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) A plural verb after a genitive of quantity: "Došli su mnogo ljudi." — write Došlo je mnogo ljudi. (2) The dative after do: "Stalo mi je do tebi." — do takes the genitive: do tebe. (3) The accusative after žao: "Žao mi je ono vrijeme." — write Žao mi je onoga vremena. (4) Pun with a preposition: "Kutija je puna s knjigama." — write Kutija je puna knjiga. (5) The wrong clitic order: "Žao je mi te." — the dative comes first and je last: Žao mi te je.',
      highlight: 'Došlo je mnogo ljudi.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Na sastanku je ___ i onih koji se nisu slagali."',
          options: ['bili', 'bila', 'bio', 'bilo'],
          correct: 3,
          explanation: 'With the genitive onih the verb is neuter singular: bilo je.',
        },
        {
          q: 'Complete: "Žao mi je ___." (those days)',
          options: ['onih dana', 'one dane', 'onim danima', 'oni dani'],
          correct: 0,
          explanation: 'Žao mi je + genitive of what you miss: onih dana.',
        },
        {
          q: 'Complete: "Večeras mi nije do ___." (going out)',
          options: ['izlazak', 'izlaska', 'izlasku', 'izlaskom'],
          correct: 1,
          explanation: 'Nije mi do + genitive: izlaska.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Mnogo držim do njegovom mišljenju.',
            'Mnogo držim njegovo mišljenje.',
            'Mnogo držim do njegova mišljenja.',
            'Mnogo držim za njegovo mišljenje.',
          ],
          correct: 2,
          explanation: 'Držati do + genitive — to value: do njegova mišljenja.',
        },
        {
          q: 'Complete: "Hladnjak je pun ___."',
          options: ['hranom', 'hrane', 'hranu', 's hranom'],
          correct: 1,
          explanation: 'Pun takes the genitive with no preposition: pun hrane.',
        },
        {
          q: 'Which exclamation is correct?',
          options: [
            'Čudni li čovjek!',
            'Čudnog li čovjeka!',
            'Čudnom li čovjeku!',
            'Li čudnog čovjeka!',
          ],
          correct: 1,
          explanation:
            'The emphatic genitive: adjective and noun in the genitive, li after the first word — Čudnog li čovjeka!',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Emphatic Genitive — Key Takeaways',
      points: [
        'Ima ljudi koji… — the genitive asserts that such people exist',
        'After a genitive subject or a quantity the verb is neuter singular: Bilo je ljudi, Došlo je mnogo ljudi',
        'Bilo je svega — the genitive of sve sums up abundance',
        'Žao mi je + genitive: what you miss, regret or pity',
        'Stalo mi je do, nije mi do, držim do — always do + genitive',
        'Pun, prepun, sit, željan, svjestan take the genitive with no preposition',
        'The emphatic genitive proper: Kakve li budale! Čudnog li čovjeka!',
        'Žali Bože + genitive — what a waste of: Žali Bože truda!',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsC1.js). */
export const LESSONS = [
  DISJUNCTIVE_GRADATIONAL,
  IRREGULAR_NOUNS,
  RARE_GENITIVE_PREPOSITIONS,
  COMMA_DEPENDENT,
  EMPHATIC_GENITIVE,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'disjunctive-gradational-clauses': {
    worked: [
      {
        title: 'Climb From One Fact to a Stronger One',
        problem:
          'Join with "not only… but also": Marija je pročitala knjigu. Marija je napisala recenziju.',
        en: 'Not only did Marija read the book, she also wrote a review.',
        steps: [
          {
            label: 'Find the climb',
            text: 'Writing a review goes further than reading the book, so the sentence is gradational.',
          },
          { label: 'The frame', text: 'Ne samo da + the first clause, then nego + the second.' },
          {
            label: 'Place the i',
            text: 'The i stands in front of what is added: nego je napisala i recenziju.',
          },
          {
            label: 'The comma',
            text: 'Nego is a contrasting connector, so a comma goes before it.',
          },
        ],
        answer: 'Ne samo da je Marija pročitala knjigu, nego je napisala i recenziju.',
      },
      {
        title: 'Choice or Exception?',
        problem: 'Punctuate and choose: "Sve je spremno ___ još moramo kupiti led."',
        en: 'Everything is ready, only we still have to buy ice.',
        steps: [
          {
            label: 'What does the second clause do?',
            text: 'It accepts the first and takes out one exception — an exclusive clause.',
          },
          {
            label: 'The connector',
            text: 'The everyday exclusive connector is samo (jedino is a little more emphatic).',
          },
          { label: 'The comma', text: 'Exclusive connectors are preceded by a comma.' },
        ],
        answer: 'Sve je spremno, samo još moramo kupiti led.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Možemo ići na Plitvice ___ na Krku. (open choice)',
          options: ['ili', 'a kamoli', 'samo', 'štoviše'],
          correct: 0,
          hint: 'One small word leaves both choices open.',
          explanation: 'A single ili — an open choice, no comma.',
        },
        {
          q: 'Jedva govori hrvatski, ___ piše eseje.',
          options: ['ne samo', 'ili', 'a kamoli', 'pa čak i'],
          correct: 2,
          hint: 'The first clause is nearly negative; the second is the harder thing.',
          explanation: 'A kamoli after the near-negative jedva.',
        },
        {
          q: 'Zna svirati gitaru, ___ klavir.',
          options: ['a kamoli', 'pa čak i', 'jedino', 'ili… ili'],
          correct: 1,
          hint: 'A positive first clause — climb up, not down.',
          explanation: 'After a positive statement: pa čak i.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ostao je kod kuće, i čitao.',
            'Ostao je, kod kuće i čitao.',
            'Ostao je kod kuće i, čitao.',
            'Ostao je kod kuće i čitao.',
          ],
          correct: 3,
          hint: 'Think about the connector that joins two clauses by adding.',
          explanation: 'No comma before i joining two clauses.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Ručak je bio ukusan, samo je bilo premalo.',
            'Ručak je bio ukusan samo, je bilo premalo.',
            'Ručak je bio ukusan samo je bilo premalo.',
            'Ručak, je bio ukusan samo je bilo premalo.',
          ],
          correct: 0,
          hint: 'An exception to a positive statement is introduced after a pause.',
          explanation: 'A comma goes before samo in an exclusive clause.',
        },
        {
          q: '___ platiš gotovinom ___ karticom, cijena je ista.',
          options: ['Ne samo … nego', 'Bilo da … bilo da', 'Samo … jedino', 'A kamoli … ili'],
          correct: 1,
          hint: 'The way of paying makes no difference to the outcome.',
          explanation: 'Bilo da… bilo da: either way, the same result.',
        },
        {
          q: 'Which sentence uses štoviše correctly?',
          options: [
            'Štoviše čitaš, to više znaš.',
            'Što više, nije se ni javio.',
            'Nije se ispričao, štoviše, nije se ni javio.',
            'Nije se ispričao, što više nije se ni javio.',
          ],
          correct: 2,
          hint: 'One word means moreover; two words mean the more.',
          explanation: 'Štoviše, one word, moreover; set off by commas.',
        },
        {
          q: 'Izlet je bio odličan, ___ smo se vratili kasnije nego što smo planirali.',
          options: ['ili', 'osim što', 'ne samo', 'a kamoli'],
          correct: 1,
          hint: 'The second clause names the one thing that was not perfect.',
          explanation: 'Osim što — except that.',
        },
        {
          type: 'type',
          q: 'Ne zna ni pozdraviti na hrvatskom, a ____ voditi razgovor.',
          answer: 'kamoli',
          hint: 'The second half of the two-word phrase for let alone.',
          explanation: 'A kamoli — after a negative first clause.',
        },
        {
          type: 'type',
          q: 'Ne samo da je kasnio, ____ je zaboravio i ključeve.',
          answer: 'nego',
          accept: ['već'],
          hint: 'The connector that answers ne samo.',
          explanation: 'Ne samo… nego i (or već i).',
        },
        {
          type: 'type',
          q: 'Sve smo pripremili, ____ nam nedostaje pjenušac.',
          answer: 'samo',
          accept: ['jedino'],
          hint: 'An everyday word that takes out one exception.',
          explanation: 'Samo (or jedino) introduces the exception.',
        },
        {
          type: 'type',
          q: 'Prijedlog je prihvaćen, ____, dobio je podršku svih stranaka.',
          answer: 'štoviše',
          hint: 'One word meaning moreover.',
          explanation: 'Štoviše — written as one word.',
        },
        {
          type: 'type',
          q: 'Na zabavu su došli svi, ____ i susjed koji nikamo ne izlazi.',
          answer: 'čak',
          hint: 'The word for even — the surprising top of the scale.',
          explanation: 'Čak i marks the most surprising item.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which connector introduces an exception?',
        options: ['štoviše', 'jedino što', 'bilo… bilo', 'a kamoli'],
        correct: 1,
        explanation: 'Jedino što takes one exception out of what was said.',
      },
      {
        q: 'Complete: "___ ćeš se ispričati, ___ ću otići."',
        options: ['Ne samo … nego', 'Samo … jedino', 'A kamoli … bilo', 'Ili … ili'],
        correct: 3,
        explanation: 'Ili… ili — an either-or demand.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Uzmi kišobran, ili ostani kod kuće.',
          'Uzmi, kišobran ili ostani kod kuće.',
          'Uzmi kišobran ili ostani kod kuće.',
          'Uzmi kišobran ili, ostani kod kuće.',
        ],
        correct: 2,
        explanation: 'No comma before a single ili.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Ne može ni ustati, a kamoli hodati.',
          'Može trčati, a kamoli hodati.',
          'Ne može ni ustati, akamoli hodati.',
          'Ne može ni ustati a, kamoli hodati.',
        ],
        correct: 0,
        explanation: 'A kamoli after a negative, as two words, with a comma before a.',
      },
      {
        q: 'Complete: "Nije samo pametna, ___ je i vrlo marljiva."',
        options: ['ili', 'nego', 'a kamoli', 'jedino'],
        correct: 1,
        explanation: 'Gradational: … nego je i…',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Što više, nije ni odgovorio.',
          'Štoviše vježbaš, to bolje sviraš.',
          'Što više vježbaš, to bolje sviraš.',
          'Štoviše, vježbaš to bolje sviraš.',
        ],
        correct: 2,
        explanation: 'Što više… to: the more… the more. Štoviše means moreover.',
      },
    ],
    vocab: [
      ['štoviše', 'moreover, what is more', 'Plan je dobar, štoviše, jeftiniji je od prethodnog.'],
      ['a kamoli', 'let alone', 'Ne zna voziti bicikl, a kamoli auto.'],
      ['iznimka', 'exception', 'Svako pravilo ima iznimku.'],
      ['nedostajati', 'to be missing, to lack', 'Nedostaje nam još jedan potpis.'],
      ['premašiti', 'to exceed', 'Rezultati su premašili sva očekivanja.'],
      ['očekivanje', 'expectation', 'Film nije ispunio moja očekivanja.'],
      ['mogućnost', 'possibility, option', 'Imamo dvije mogućnosti.'],
      ['odlučiti se', 'to decide, to opt', 'Odlučili smo se za more.'],
      ['skroman', 'modest', 'Doručak je bio skroman, ali ukusan.'],
    ],
  },

  'irregular-nouns-doba-dio': {
    worked: [
      {
        title: 'Undo the O, Then Add the Ending',
        problem: 'Prevedi: "I am satisfied with my new job."',
        en: 'I am satisfied with my new job.',
        steps: [
          { label: 'The case', text: 'Zadovoljan takes s + instrumental: zadovoljan s čim?' },
          {
            label: 'Find the stem',
            text: 'Posao: turn the final o back into l and drop the fleeting a — posl-.',
          },
          {
            label: 'The ending',
            text: 'Masculine instrumental -om: poslom; the adjective agrees: novim.',
          },
        ],
        answer: 'Zadovoljan sam svojim novim poslom.',
      },
      {
        title: 'A Part, Not a Work',
        problem: 'Prevedi: "We live in the northern part of the city."',
        en: 'We live in the northern part of the city.',
        steps: [
          { label: 'The case', text: 'Where? — u + locative.' },
          {
            label: 'The stem',
            text: 'Dio comes from dijel-, with the long ije restored in every form but the nominative.',
          },
          { label: 'The form', text: 'Locative -u: dijelu, with sjevernom agreeing.' },
          {
            label: 'Check the spelling',
            text: 'Djelu would belong to djelo (a work) — not what we mean.',
          },
        ],
        answer: 'Živimo u sjevernom dijelu grada.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kasnim s ___. (work)',
          options: ['posaoom', 'poslom', 'posalom', 'posao'],
          correct: 1,
          hint: 'Restore the l, drop the a, add the instrumental ending.',
          explanation: 's poslom — instrumental of posao.',
        },
        {
          q: 'Pročitao sam samo prvi ___ knjige.',
          options: ['dijel', 'djel', 'dio', 'dijela'],
          correct: 2,
          hint: 'An object that is a masculine thing keeps the nominative form.',
          explanation: 'Accusative = nominative for a masculine thing: dio.',
        },
        {
          q: 'Na stropu crkve naslikano je dvanaest ___.',
          options: ['anđela', 'anđelova', 'anđelima', 'anđeli'],
          correct: 0,
          hint: 'After a number above four: the genitive plural — and this noun has no -ov-.',
          explanation: 'anđela — genitive plural after dvanaest.',
        },
        {
          q: 'U kuhinji je visio stari ___.',
          options: ['kotal', 'kotla', 'kotao', 'kotlo'],
          correct: 2,
          hint: 'The subject form, where the final l became o.',
          explanation: 'kotao — nominative.',
        },
        {
          q: 'Djeca školske ___ ne smiju sama putovati.',
          options: ['doba', 'dobi', 'dobe', 'dobu'],
          correct: 1,
          hint: 'This is about a person’s age — the feminine noun.',
          explanation: 'dobi — genitive of dob (age).',
        },
        {
          q: 'U to ___ nije bilo mobitela.',
          options: ['dob', 'dobi', 'doba', 'dobom'],
          correct: 2,
          hint: 'An era, not a person’s age; and the noun keeps its one form.',
          explanation: 'u to doba — at that time.',
        },
        {
          q: 'Imam previše ___ ovaj tjedan.',
          options: ['posala', 'poslove', 'poslovi', 'poslova'],
          correct: 3,
          hint: 'After previše: the genitive plural of posao.',
          explanation: 'poslova — genitive plural.',
        },
        {
          q: 'U peći je ostalo malo ___.',
          options: ['pepeo', 'pepela', 'pepla', 'pepelu'],
          correct: 1,
          hint: 'After malo: the genitive. This noun keeps its e.',
          explanation: 'pepela — genitive of pepeo.',
        },
        {
          type: 'type',
          q: 'Nakon ____ idem ravno kući. (work)',
          answer: 'posla',
          hint: 'Nakon takes the genitive; drop the fleeting a.',
          explanation: 'posla — genitive of posao.',
        },
        {
          type: 'type',
          q: 'Mehaničar je naručio nove ____ za motor. (parts)',
          answer: 'dijelove',
          hint: 'Accusative plural, with the long ije and -ov-.',
          explanation: 'dijelove — accusative plural of dio.',
        },
        {
          type: 'type',
          q: 'U zimsko ____ dani su kratki.',
          answer: 'doba',
          hint: 'The neuter noun for season, after a neuter adjective.',
          explanation: 'u zimsko doba — doba keeps its form.',
        },
        {
          type: 'type',
          q: 'Baka je kuhala grah u velikom ____. (cauldron)',
          answer: 'kotlu',
          hint: 'Locative: restore the l, drop the a.',
          explanation: 'kotlu — locative of kotao.',
        },
        {
          type: 'type',
          q: 'Najviše mi se sviđa južni ____ otoka. (part)',
          answer: 'dio',
          hint: 'The subject form of the noun with the stem dijel-.',
          explanation: 'dio — nominative.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ne mogu doći zbog ___." (work)',
        options: ['posaoa', 'posala', 'posla', 'posao'],
        correct: 2,
        explanation: 'Zbog + genitive: posla.',
      },
      {
        q: 'Complete: "Veći ___ ljeta proveli smo na moru."',
        options: ['dio', 'dijel', 'djela', 'djelo'],
        correct: 0,
        explanation: 'The nominative of the stem dijel- is dio.',
      },
      {
        q: 'What is the plural of posao?',
        options: ['posli', 'posaoi', 'posalovi', 'poslovi'],
        correct: 3,
        explanation: 'posl- + -ovi: poslovi.',
      },
      {
        q: 'Complete: "Dijete je spavalo kao ___." (an angel)',
        options: ['anđeo', 'anđel', 'anđelo', 'anđela'],
        correct: 0,
        explanation: 'Kao + nominative here: kao anđeo.',
      },
      {
        q: 'Which phrase is correct?',
        options: ['ta godišnja doba', 'to godišnje doba', 'taj godišnji doba', 'ta godišnja dob'],
        correct: 1,
        explanation: 'Doba is neuter: to godišnje doba.',
      },
      {
        q: 'Complete: "To je najljepši ___ romana." (part)',
        options: ['djelo', 'dijela', 'dijelu', 'dio'],
        correct: 3,
        explanation: 'The nominative: dio. Djelo is a work, not a part.',
      },
    ],
    vocab: [
      ['posao', 'job, work, business', 'Našla je novi posao u Zagrebu.'],
      ['dio', 'part', 'Stari dio grada pun je uskih ulica.'],
      ['djelo', 'work, deed', 'Pročitao sam sva djela tog pisca.'],
      ['anđeo', 'angel', 'Na slici je anđeo sa zlatnim krilima.'],
      ['pepeo', 'ash', 'Od lista je ostao samo pepeo.'],
      ['kotao', 'cauldron, boiler', 'Majstor je popravio kotao za grijanje.'],
      ['doba', 'time, period, season', 'Jesen je moje omiljeno godišnje doba.'],
      ['dob', 'age (of a person)', 'Djeca školske dobi imaju popust.'],
      ['rezervni dio', 'spare part', 'Čekamo rezervni dio za perilicu.'],
    ],
  },

  'rare-genitive-prepositions': {
    worked: [
      {
        title: 'Cause or Purpose?',
        problem:
          'Choose zbog or radi: "Doselili su se u Zagreb ___ djece." (so the children could go to a good school)',
        en: 'They moved to Zagreb for the sake of the children.',
        steps: [
          {
            label: 'Ask the question',
            text: 'Is this why it happened, or what it was done for? It was done FOR the children.',
          },
          { label: 'Purpose', text: 'Purpose takes radi; cause takes zbog.' },
          {
            label: 'The case',
            text: 'Both take the genitive: djece is already the genitive of djeca.',
          },
        ],
        answer: 'Doselili su se u Zagreb radi djece.',
      },
      {
        title: 'The Exception in the List',
        problem: 'Prevedi: "Despite the problems, we finished on time."',
        en: 'Despite the problems, we finished on time.',
        steps: [
          { label: 'The preposition', text: 'Despite is unatoč (or usprkos).' },
          { label: 'The case', text: 'Unatoč is the one in this family that takes the DATIVE.' },
          { label: 'The form', text: 'Problemi in the dative plural: problemima.' },
          {
            label: 'The comma',
            text: 'The prepositional phrase stands first and is set off with a comma.',
          },
        ],
        answer: 'Unatoč problemima, završili smo na vrijeme.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Telefon je zazvonio ___ predavanja.',
          options: ['nasred', 'usred', 'duž', 'glede'],
          correct: 1,
          hint: 'The middle of an activity, not of a surface.',
          explanation: 'usred predavanja — in the middle of the lecture.',
        },
        {
          q: 'Turisti su stajali ___ ceste i fotografirali.',
          options: ['nasred', 'prigodom', 'umjesto', 'putem'],
          correct: 0,
          hint: 'A road is a surface you stand on.',
          explanation: 'nasred ceste.',
        },
        {
          q: '___ Nove godine trgovine rade do kasno.',
          options: ['Pomoću', 'Mimo', 'Uoči', 'Duž'],
          correct: 2,
          hint: 'The days just before the holiday.',
          explanation: 'Uoči Nove godine — on the eve of the New Year.',
        },
        {
          q: 'Prijavu možete poslati ___ interneta.',
          options: ['nasred', 'putem', 'uoči', 'usred'],
          correct: 1,
          hint: 'The channel the application goes through.',
          explanation: 'putem interneta.',
        },
        {
          q: 'Grad je organizirao vatromet ___ Dana državnosti.',
          options: ['prilikom', 'pomoću', 'prigodom', 'umjesto'],
          correct: 2,
          hint: 'What does the fireworks display mark?',
          explanation:
            'prigodom — the occasion being marked (the strict norm prefers it to povodom).',
        },
        {
          q: 'Unatoč ___, izlet je bio uspješan.',
          options: ['kiše', 'kišom', 'kiša', 'kiši'],
          correct: 3,
          hint: 'This preposition is the exception to the genitive rule.',
          explanation: 'unatoč kiši — dative.',
        },
        {
          q: 'Ostao je kod kuće ___ prehlade.',
          options: ['zbog', 'radi', 'diljem', 'umjesto'],
          correct: 0,
          hint: 'The cold is the cause, not the purpose.',
          explanation: 'zbog prehlade — cause.',
        },
        {
          q: 'Šetali smo ___ rijeke sve do mosta.',
          options: ['usred', 'duž', 'uoči', 'glede'],
          correct: 1,
          hint: 'Following the length of something.',
          explanation: 'duž rijeke — along the river.',
        },
        {
          q: 'Which sentence uses mimo in its spatial sense?',
          options: [
            'Odluka je donesena mimo pravila.',
            'Svaki dan prolazi mimo naše kuće.',
            'Mimo svih očekivanja, pobijedili su.',
            'Zaposlili su ga mimo natječaja.',
          ],
          correct: 1,
          hint: 'Look for movement past a place.',
          explanation:
            'prolazi mimo naše kuće — goes past our house. The others mean contrary to, outside of.',
        },
        {
          type: 'type',
          q: 'Pozdravio je goste ____ cijele obitelji. (on behalf of — one word)',
          answer: 'uime',
          hint: 'u + ime, written together.',
          explanation: 'uime — on behalf of, written as one word.',
        },
        {
          type: 'type',
          q: 'Popio je čaj ____ kave. (instead of)',
          answer: 'umjesto',
          hint: 'The preposition that replaces one thing with another.',
          explanation: 'umjesto kave.',
        },
        {
          type: 'type',
          q: 'Tekst je preveo ____ rječnika. (with the help of)',
          answer: 'pomoću',
          hint: 'The means that made it possible.',
          explanation: 'pomoću rječnika.',
        },
        {
          type: 'type',
          q: 'Odluka je donesena mimo ____. (the rules)',
          answer: 'pravila',
          hint: 'Mimo takes the genitive; the noun is neuter plural.',
          explanation: 'mimo pravila — genitive plural of pravilo.',
        },
        {
          type: 'type',
          q: 'Unatoč ____, ništa nije bilo gotovo. (the promises — obećanja)',
          answer: 'obećanjima',
          hint: 'Unatoč takes the dative; plural.',
          explanation: 'unatoč obećanjima — dative plural.',
        },
        {
          type: 'type',
          q: 'Došao je u Rijeku ____ posla, ne zbog obitelji.',
          answer: 'radi',
          hint: 'The purpose of the trip.',
          explanation: 'radi posla — purpose.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Probudio se ___ noći."',
        options: ['nasred', 'usred', 'putem', 'umjesto'],
        correct: 1,
        explanation: 'The middle of a period of time: usred noći.',
      },
      {
        q: 'Complete: "Usprkos ___, nastavili su raditi."',
        options: ['upozorenja', 'upozorenjem', 'upozorenjima', 'upozorenje'],
        correct: 2,
        explanation: 'Usprkos, like unatoč, takes the dative: upozorenjima.',
      },
      {
        q: 'Complete: "Gradovi ___ Zadra i Šibenika sve su popularniji."',
        options: ['glede', 'poput', 'uoči', 'nasred'],
        correct: 1,
        explanation: 'Poput gives examples: cities such as Zadar and Šibenik.',
      },
      {
        q: 'Complete: "Utakmica je prekinuta ___ nevremena."',
        options: ['zbog', 'radi', 'pomoću', 'prigodom'],
        correct: 0,
        explanation: 'The storm is the cause: zbog nevremena.',
      },
      {
        q: 'Complete: "___ prijave na fakultet potrebna je osobna iskaznica."',
        options: ['Duž', 'Usred', 'Mimo', 'Prilikom'],
        correct: 3,
        explanation: 'Prilikom — on the occasion of a procedure (formal).',
      },
      {
        q: 'Which phrase is correct?',
        options: ['unatoč svega', 'unatoč svemu', 'unatoč svim', 'unatoč sve'],
        correct: 1,
        explanation: 'Unatoč + dative: unatoč svemu.',
      },
    ],
    vocab: [
      ['usred', 'in the middle of', 'Usred grada nalazi se velik park.'],
      ['nasred', 'in the middle of (a surface)', 'Nasred trga stoji kip.'],
      ['uoči', 'on the eve of', 'Uoči Božića grad je pun ljudi.'],
      ['prigodom', 'to mark, on the occasion of', 'Prigodom obljetnice održan je koncert.'],
      ['diljem', 'throughout', 'Putovali smo diljem svijeta.'],
      ['prilikom', 'on the occasion of, when', 'Prilikom prijave trebate putovnicu.'],
      ['putem', 'via, by way of', 'Kupio je kartu putem interneta.'],
      ['pomoću', 'with the help of', 'Otvorio je vrata pomoću žice.'],
      ['duž', 'along', 'Duž obale ima mnogo plaža.'],
      ['unatoč', 'despite (+ dative)', 'Unatoč umoru, nastavio je raditi.'],
      ['obljetnica', 'anniversary', 'Slavili su desetu obljetnicu braka.'],
    ],
  },

  'comma-dependent-clauses': {
    worked: [
      {
        title: 'Turn the Sentence Round',
        problem:
          'Put the dependent clause first and punctuate: "Ostat ćemo kod kuće ako bude padala kiša."',
        en: 'If it rains, we will stay at home.',
        steps: [
          {
            label: 'Find the dependent clause',
            text: 'ako bude padala kiša — it depends on the main clause.',
          },
          { label: 'Move it to the front', text: 'Ako bude padala kiša … ostat ćemo kod kuće.' },
          {
            label: 'Close it',
            text: 'Inverted order: a comma where the dependent clause ends, after kiša.',
          },
        ],
        answer: 'Ako bude padala kiša, ostat ćemo kod kuće.',
      },
      {
        title: 'Does the Clause Pick Out, or Add?',
        problem: 'Punctuate: "Moj djed koji je bio ribar znao je sve o vjetrovima."',
        en: 'My grandfather, who was a fisherman, knew everything about the winds.',
        steps: [
          {
            label: 'Ask: which one?',
            text: 'Moj djed — the speaker is talking about one known grandfather.',
          },
          {
            label: 'Restrictive or not?',
            text: 'The clause does not pick him out; it adds that he was a fisherman — non-restrictive.',
          },
          {
            label: 'Both commas',
            text: 'A non-restrictive clause is enclosed: one comma before koji, one after ribar.',
          },
        ],
        answer: 'Moj djed, koji je bio ribar, znao je sve o vjetrovima.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Rekla je, da će zakasniti.',
            'Rekla je da će zakasniti.',
            'Rekla je da, će zakasniti.',
            'Rekla, je da će zakasniti.',
          ],
          correct: 1,
          hint: 'The main clause comes first.',
          explanation: 'Normal order — no comma before da.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Čim stignem javit ću ti se.',
            'Čim, stignem javit ću ti se.',
            'Čim stignem, javit ću ti se.',
            'Čim stignem javit, ću ti se.',
          ],
          correct: 2,
          hint: 'The dependent clause comes first.',
          explanation: 'Inverted order — a comma closes the čim clause.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Profesor je, kad je ušao u učionicu, otvorio prozor.',
            'Profesor je kad je ušao u učionicu, otvorio prozor.',
            'Profesor je, kad je ušao u učionicu otvorio prozor.',
            'Profesor, je kad je ušao u učionicu otvorio prozor.',
          ],
          correct: 0,
          hint: 'The kad clause sits inside the main clause.',
          explanation: 'An inserted clause — a comma on both sides.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Pitao me, gdje stanujem.',
            'Pitao me gdje, stanujem.',
            'Pitao, me gdje stanujem.',
            'Pitao me gdje stanujem.',
          ],
          correct: 3,
          hint: 'An indirect question after its main clause.',
          explanation: 'No comma — normal order.',
        },
        {
          q: 'Which sentence is correct? (Zagreb has one cathedral.)',
          options: [
            'Zagrebačka katedrala koja je obnovljena privlači turiste.',
            'Zagrebačka katedrala, koja je obnovljena, privlači turiste.',
            'Zagrebačka katedrala, koja je obnovljena privlači turiste.',
            'Zagrebačka, katedrala koja je obnovljena privlači turiste.',
          ],
          correct: 1,
          hint: 'There is only one such cathedral, so the clause only adds information.',
          explanation: 'Non-restrictive — enclosed in commas.',
        },
        {
          q: 'What does "Djeca koja su završila zadaću mogu ići van." mean?',
          options: [
            'All the children finished their homework.',
            'Only the children who finished their homework may go out.',
            'No child may go out.',
            'The children must finish their homework outside.',
          ],
          correct: 1,
          hint: 'There are no commas round the clause.',
          explanation: 'Restrictive — it picks out those children.',
        },
        {
          q: 'Where is the comma in "Tko ne radi neka ne jede."?',
          options: ['after Tko', 'after ne radi', 'after neka', 'there is none'],
          correct: 1,
          hint: 'The tko clause comes first.',
          explanation: 'Tko ne radi, neka ne jede. — a comma closes the initial clause.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Javit ću ti, ako budem mogao doći.',
            'Javit ću ti ako, budem mogao doći.',
            'Javit ću ti ako budem mogao doći.',
            'Javit, ću ti ako budem mogao doći.',
          ],
          correct: 2,
          hint: 'Main clause first, then the condition.',
          explanation: 'Normal order — no comma.',
        },
        {
          type: 'type',
          q: '____ budeš imao vremena, svrati do nas. (If)',
          answer: 'Ako',
          hint: 'The conjunction of condition; its clause comes first, so a comma closes it.',
          explanation: 'Ako budeš imao vremena, svrati do nas.',
        },
        {
          type: 'type',
          q: 'Moj otac, ____ je liječnik, radi u Rijeci. (who)',
          answer: 'koji',
          hint: 'A masculine relative pronoun in the nominative, opening a non-restrictive clause.',
          explanation: 'koji — the commas show the clause only adds information.',
        },
        {
          type: 'type',
          q: 'Knjiga ____ si mi posudio leži na stolu. (which — the object of posudio)',
          answer: 'koju',
          hint: 'A feminine relative pronoun in the accusative; the clause picks out the book, so no comma.',
          explanation: 'koju — a restrictive clause, without commas.',
        },
        {
          type: 'type',
          q: '____ rano rani, dvije sreće grabi. (Whoever)',
          answer: 'Tko',
          hint: 'The pronoun that opens the proverb; its clause comes first.',
          explanation: 'Tko rano rani, dvije sreće grabi. — a comma closes the initial clause.',
        },
        {
          type: 'type',
          q: 'Sutra dolazi moja sestra, ____ živi u Splitu. (who)',
          answer: 'koja',
          hint: 'A feminine relative pronoun in the nominative.',
          explanation: 'koja — a non-restrictive clause at the end still takes its comma.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Znam, da me čekaš.',
          'Znam da, me čekaš.',
          'Znam da me čekaš.',
          'Znam da me, čekaš.',
        ],
        correct: 2,
        explanation: 'Normal order — no comma before da.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Dok si ti spavao, mi smo pospremili kuću.',
          'Dok si ti spavao mi smo pospremili kuću.',
          'Dok, si ti spavao mi smo pospremili kuću.',
          'Dok si ti, spavao mi smo pospremili kuću.',
        ],
        correct: 0,
        explanation: 'Inverted order — a comma closes the dok clause.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Liječnica je čim je vidjela nalaz, nazvala pacijenta.',
          'Liječnica je, čim je vidjela nalaz, nazvala pacijenta.',
          'Liječnica je, čim je vidjela nalaz nazvala pacijenta.',
          'Liječnica je čim je vidjela, nalaz nazvala pacijenta.',
        ],
        correct: 1,
        explanation: 'An inserted clause — a comma on both sides.',
      },
      {
        q: 'Which sentence is punctuated correctly? (Marko has one mother.)',
        options: [
          'Markova majka koja je kuharica, kuha za cijelo selo.',
          'Markova majka koja je kuharica kuha za cijelo selo.',
          'Markova, majka koja je kuharica kuha za cijelo selo.',
          'Markova majka, koja je kuharica, kuha za cijelo selo.',
        ],
        correct: 3,
        explanation: 'Non-restrictive — enclosed in commas.',
      },
      {
        q: 'What does "Ulaznice koje su kupljene online vrijede i sutra." say?',
        options: [
          'All tickets were bought online.',
          'No ticket is valid tomorrow.',
          'Only the tickets bought online are also valid tomorrow.',
          'Tickets can only be bought online tomorrow.',
        ],
        correct: 2,
        explanation: 'Without commas the clause is restrictive: only those tickets.',
      },
      {
        q: 'Where does the comma go? "Što je obećao to je i ispunio."',
        options: ['after Što', 'after obećao', 'after to', 'there is none'],
        correct: 1,
        explanation: 'The što clause comes first: Što je obećao, to je i ispunio.',
      },
    ],
    vocab: [
      ['zarez', 'comma', 'Ispred veznika da ne piše se zarez.'],
      ['rečenica', 'sentence, clause', 'Zavisna rečenica stoji na početku.'],
      ['zavisan', 'dependent', 'Zavisna rečenica ovisi o glavnoj.'],
      ['glavni', 'main', 'Glavna rečenica dolazi prva.'],
      ['umetnuti', 'to insert', 'Umetnutu rečenicu odvajamo zarezima.'],
      ['pravopis', 'orthography, spelling rules', 'Provjerio sam pravilo u pravopisu.'],
      ['veznik', 'conjunction', 'Kad je vremenski veznik.'],
      ['odvojiti', 'to separate, to set off', 'Odvojite opisnu rečenicu zarezima.'],
      ['interpunkcija', 'punctuation', 'Interpunkcija mijenja značenje rečenice.'],
    ],
  },

  'emphatic-genitive-stalo': {
    worked: [
      {
        title: 'The Genitive Takes the Verb With It',
        problem: 'Prevedi: "A lot of people came to the wedding."',
        en: 'A lot of people came to the wedding.',
        steps: [
          {
            label: 'The quantity',
            text: 'A lot of people: mnogo + genitive plural — mnogo ljudi.',
          },
          {
            label: 'The verb',
            text: 'A genitive cannot govern agreement, so the verb is third person singular.',
          },
          { label: 'The past tense', text: 'Singular and NEUTER: došlo je.' },
          { label: 'Where to', text: 'Na + accusative: na svadbu.' },
        ],
        answer: 'Na svadbu je došlo mnogo ljudi.',
      },
      {
        title: 'Caring About Something',
        problem: 'Prevedi: "I do not care about money."',
        en: 'I do not care about money.',
        steps: [
          { label: 'The expression', text: 'To care about is biti stalo do: Stalo mi je do…' },
          { label: 'Who cares', text: 'The person is in the dative: mi. Negate the verb: nije.' },
          { label: 'The case after do', text: 'Do takes the genitive: novac → novca.' },
        ],
        answer: 'Nije mi stalo do novca.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Na koncert je ___ tisuću ljudi.',
          options: ['došli', 'došla', 'došao', 'došlo'],
          correct: 3,
          hint: 'A quantity with the genitive takes a neuter singular verb.',
          explanation: 'došlo je.',
        },
        {
          q: 'Žao mi je ___ vremena. (that)',
          options: ['tog', 'to', 'tom', 'tim'],
          correct: 0,
          hint: 'Žao mi je takes the genitive.',
          explanation: 'tog vremena — genitive.',
        },
        {
          q: 'Nije mi do ___ danas.',
          options: ['šala', 'šale', 'šali', 'šalu'],
          correct: 1,
          hint: 'Do always takes the genitive.',
          explanation: 'nije mi do šale.',
        },
        {
          q: 'Stalo joj je do ___ obitelji.',
          options: ['svojoj', 'svoju', 'svoje', 'svojom'],
          correct: 2,
          hint: 'Do + genitive, feminine singular.',
          explanation: 'do svoje obitelji.',
        },
        {
          q: 'Sit sam tvojih ___.',
          options: ['izlika', 'izlike', 'izlikama', 'izliku'],
          correct: 0,
          hint: 'Sit takes the genitive — plural here.',
          explanation: 'sit sam tvojih izlika — genitive plural.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Bile su ljudi koje su se žalile.',
            'Bilo je ljudi koji su se žalili.',
            'Bilo su ljudi koji su se žalili.',
            'Bila je ljudi koja su se žalila.',
          ],
          correct: 1,
          hint: 'There were such people: the genitive and a neuter singular verb.',
          explanation: 'Bilo je ljudi koji… — the emphatic genitive.',
        },
        {
          q: 'Complete the exclamation: "___ li žene!" (What a clever woman!)',
          options: ['Pametne', 'Pametna', 'Pametnoj', 'Pametnu'],
          correct: 0,
          hint: 'The emphatic genitive: adjective and noun both in the genitive.',
          explanation: 'Pametne li žene! — genitive singular of pametna žena.',
        },
        {
          type: 'type',
          q: 'Žali Bože ____ koje smo potrošili! (the time)',
          answer: 'vremena',
          hint: 'Žali Bože takes the genitive of vrijeme.',
          explanation: 'Žali Bože vremena — genitive.',
        },
        {
          q: 'Which word order is correct?',
          options: ['Žao je mi te.', 'Žao te mi je.', 'Žao mi te je.', 'Žao mi je te.'],
          correct: 2,
          hint: 'The dative clitic first, je at the end.',
          explanation: 'Žao mi te je — dative, then the genitive te, then je.',
        },
        {
          q: 'Kutija je puna ___.',
          options: ['s igračkama', 'igračaka', 'igračkama', 'igračke'],
          correct: 1,
          hint: 'Pun takes the genitive plural with no preposition.',
          explanation: 'puna igračaka.',
        },
        {
          type: 'type',
          q: 'Stalo mi je do ____. (you)',
          answer: 'tebe',
          hint: 'Do takes the genitive of the pronoun ti.',
          explanation: 'do tebe — genitive.',
        },
        {
          type: 'type',
          q: 'Na zabavi je bilo ____: hrane, pića i glazbe. (everything)',
          answer: 'svega',
          hint: 'The genitive of sve.',
          explanation: 'bilo je svega.',
        },
        {
          type: 'type',
          q: 'Nije mi žao ____. (the money)',
          answer: 'novca',
          hint: 'Žao takes the genitive.',
          explanation: 'novca — genitive of novac.',
        },
        {
          type: 'type',
          q: 'Mnogo držim do njegova ____. (opinion)',
          answer: 'mišljenja',
          hint: 'Držati do + genitive; a neuter noun.',
          explanation: 'mišljenja — genitive of mišljenje.',
        },
        {
          type: 'type',
          q: 'Grad je ljeti prepun ____. (tourists)',
          answer: 'turista',
          hint: 'Prepun takes the genitive plural.',
          explanation: 'turista — genitive plural.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Na otvorenju je ___ mnogo gostiju."',
        options: ['bili', 'bilo', 'bila', 'bio'],
        correct: 1,
        explanation: 'A quantity with the genitive: neuter singular, bilo je.',
      },
      {
        q: 'Complete: "Nije mi stalo do ___."',
        options: ['slava', 'slavi', 'slavu', 'slave'],
        correct: 3,
        explanation: 'Do + genitive: slave.',
      },
      {
        q: 'Complete: "Žao mi je ___ prijateljstva."',
        options: ['našeg', 'naše', 'našem', 'našim'],
        correct: 0,
        explanation: 'Žao mi je + genitive: našeg prijateljstva.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Ima ljudi koji vjeruju u sve.',
          'Imaju ljudi koji vjeruju u sve.',
          'Ima ljude koji vjeruju u sve.',
          'Ima ljudima koji vjeruju u sve.',
        ],
        correct: 0,
        explanation: 'Ima + genitive plural ljudi, with a singular ima.',
      },
      {
        q: 'Complete: "Djeca su željna ___."',
        options: ['more', 'moru', 'mora', 'morem'],
        correct: 2,
        explanation: 'Željan + genitive: mora.',
      },
      {
        q: 'What does "Nije mi do razgovora." mean?',
        options: [
          'I do not understand the conversation.',
          'I am not in the mood for talking.',
          'The conversation is not about me.',
          'I have never talked to him.',
        ],
        correct: 1,
        explanation: 'Nije mi do + genitive — I am not in the mood for.',
      },
    ],
    vocab: [
      ['stalo mi je do', 'I care about', 'Stalo mi je do tvoga mišljenja.'],
      ['nije mi do', 'I am not in the mood for', 'Nije mi do šale.'],
      ['držati do', 'to value, to set store by', 'Držim do točnosti.'],
      ['žao mi je', 'I am sorry, I miss, I regret', 'Žao mi je tog vremena.'],
      ['sit', 'fed up (with)', 'Sit sam svega.'],
      ['željan', 'longing for', 'Željni smo sunca.'],
      ['prepun', 'packed with', 'Autobus je bio prepun putnika.'],
      ['izlika', 'excuse', 'Uvijek ima neku izliku.'],
      ['svjestan', 'aware (of)', 'Svjestan sam problema.'],
    ],
  },
};
