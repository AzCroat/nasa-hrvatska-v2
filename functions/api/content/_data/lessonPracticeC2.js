// functions/api/content/_data/lessonPracticeC2.js
//
// C2 worked examples and guided practice (2026-09-27), merged into each lesson by
// lessonPractice.js. Per lesson: two worked examples (a problem solved one visible
// step at a time) and one guided-practice slide (four items, each with a HINT shown
// after a first wrong try and an explanation once resolved).
//
// At C2 a worked example is often a CHOICE reasoned out — why this form in this
// style, for this reader — rather than only a form produced.
//
// Authoring rules, the same ones the checks and drills follow:
//   - distractors are wrong by case, government, agreement, aspect, word order,
//     style or register — never by being Serbian, and never real Croatian that a
//     native would say in the stated context;
//   - the dialect lesson teaches the three reflexes without putting an ekavian
//     form anywhere on screen;
//   - no cue in the form of its answer (a parenthetical names the MEANING or the
//     dictionary form, not the answer);
//   - a hint points at the rule and never contains the answer.
// Scanned by lintCroatianText.mjs through the assembled LESSONS, both checks.

export const PRACTICE_C2 = {
  pluskvamperfekt: {
    worked: [
      {
        title: 'Marking the Earlier Event',
        problem: 'Spoji u jednu rečenicu: Stigao sam na kolodvor. Autobus je otišao prije toga.',
        en: 'Join into one sentence: I arrived at the station. The bus had left before that.',
        steps: [
          {
            label: 'Order the events',
            text: 'The bus left FIRST; my arrival came second. The earlier event is the one the pluperfect marks.',
          },
          {
            label: 'Build the form',
            text: 'Perfekt of biti + l-participle, both agreeing with autobus (masculine singular): je bio otišao.',
          },
          {
            label: 'Keep the later event plain',
            text: 'The arrival stays in the ordinary perfekt: kad sam stigao. Putting bio on it would reverse the order.',
          },
          {
            label: 'Add već',
            text: 'već (already) is what makes the earlier-past reading unmistakable.',
          },
        ],
        answer: 'Kad sam stigao na kolodvor, autobus je već bio otišao.',
      },
      {
        title: 'Into the Literary Register',
        problem: 'Prepiši književno: Kad smo ušli u selo, kiša je već bila prestala.',
        en: 'Rewrite in the literary register: When we entered the village, the rain had already stopped.',
        steps: [
          {
            label: 'The later event takes the aorist',
            text: 'Literary narration pairs the pluperfect with the aorist: ušli smo → uđosmo (1st person plural of ući).',
          },
          {
            label: 'The earlier event takes bijaše',
            text: 'The literary pluperfect is the imperfekt of biti + participle: bijaše prestala. The participle still agrees with kiša — feminine singular.',
          },
          {
            label: 'Never both auxiliaries',
            text: 'bijaše REPLACES je bila; "je bijaše prestala" doubles the auxiliary and is an error.',
          },
        ],
        answer: 'Kad uđosmo u selo, kiša već bijaše prestala.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Kad je liječnik stigao, bolesnik ___ zaspao.',
          options: ['je već bio', 'je već bila', 'bi već bio', 'sam već bio'],
          correct: 0,
          hint: 'The patient fell asleep first. Use the perfekt of biti, and make it agree with a masculine singular subject in the third person.',
          explanation:
            'je već bio zaspao — the pluperfect on the earlier event. bi would make it a conditional; bila and sam break agreement.',
        },
        {
          q: 'Najprije je prestala kiša, zatim smo izašli. Koja rečenica to kaže?',
          options: [
            'Kad smo bili izašli, kiša je prestala.',
            'Kad smo izašli, kiša je već bila prestala.',
            'Kad smo izašli, kiša bi već bila prestala.',
            'Kad smo izašli, kiša je već bio prestao.',
          ],
          correct: 1,
          hint: 'Put the pluperfect on the event that happened first — and only on that one.',
          explanation:
            'The rain stopped first, so it carries je bila prestala. The first option marks the wrong event; bi makes it unreal; bio prestao breaks agreement with kiša.',
        },
        {
          q: 'Književni pluskvamperfekt glagola pobjeći, 3. lice množine, muški rod:',
          options: ['bijaše pobjegli', 'su bijahu pobjegli', 'bijahu pobjegli', 'bijahu pobjegle'],
          correct: 2,
          hint: 'The imperfekt of biti in the third person plural, then a participle agreeing with a masculine plural subject — and one auxiliary only.',
          explanation:
            'bijahu pobjegli. bijaše is singular, su bijahu doubles the auxiliary, pobjegle is feminine.',
        },
        {
          q: 'Koja rečenica s veznikom "nakon što" zvuči prirodno u pažljivoj prozi?',
          options: [
            'Nakon što je završio fakultet, zaposlio se u Rijeci.',
            'Nakon što je bio završio fakultet, bio se zaposlio u Rijeci.',
            'Nakon što bijaše završio fakultet, bio se je zaposlio u Rijeci.',
            'Nakon što je završio fakultet, bio bi se zaposlio u Rijeci.',
          ],
          correct: 0,
          hint: 'When the connective already fixes which came first, ask whether any extra marking is needed at all.',
          explanation:
            'nakon što + perfekt already orders the events. A pluperfect on every verb reads stilted and marks the later event too; bio bi turns a fact into a non-event.',
        },
      ],
    },
  },

  'stilske-figure': {
    worked: [
      {
        title: 'Metaphor or Metonymy?',
        problem: 'Koja je figura "Rijeka" u rečenici: Cijela je Rijeka izašla na doček.',
        en: 'Which figure is "Rijeka" in: The whole of Rijeka came out for the welcome.',
        steps: [
          {
            label: 'What is literally said',
            text: 'A city — streets and buildings — came out to welcome someone.',
          },
          {
            label: 'What is meant',
            text: 'The people who live in Rijeka came out.',
          },
          {
            label: 'Likeness or connection?',
            text: 'People are not LIKE a city; they are really connected to it — they live there. A real-world connection, not a similarity.',
          },
          {
            label: 'Name it',
            text: 'Transfer by real connection is metonimija. Metafora would need a likeness.',
          },
        ],
        answer: 'metonimija',
      },
      {
        title: 'Building a Gradacija',
        problem: 'Složi gradaciju od: zaprijetila, zamolila, upozorila.',
        en: 'Build a climax from: threatened, asked, warned.',
        steps: [
          {
            label: 'Rank the force',
            text: 'Asking is the mildest, warning is stronger, threatening is strongest.',
          },
          {
            label: 'Weakest first',
            text: 'A gradacija climbs. Starting with the threat would leave nowhere to go, and the sequence would fall flat.',
          },
          {
            label: 'Keep the frames parallel',
            text: 'Three bare verbs of the same shape; the clitic je sits once, after the first word, and carries all three.',
          },
        ],
        answer: 'Zamolila je, upozorila, zaprijetila.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Popili smo dvije boce. Koja je figura "boce"?',
          options: ['metafora', 'metonimija', 'hiperbola', 'antiteza'],
          correct: 1,
          hint: 'Nobody drank the glass. Ask whether the link between the bottle and what was drunk is a likeness or a real-world connection.',
          explanation:
            'metonimija — the container stands for its contents, exactly as in popiti čašu.',
        },
        {
          q: 'Koja je rečenica antiteza?',
          options: [
            'Gradovi rastu, sela nestaju.',
            'Grad je izašao na ulice.',
            'Čekam te tisuću godina.',
            'Tko to još ne zna?',
          ],
          correct: 0,
          hint: 'Look for two opposites set in parallel halves of one sentence.',
          explanation:
            'Gradovi rastu, sela nestaju — growth against disappearance, in two matching frames. The others are metonymy, hyperbole and a rhetorical question.',
        },
        {
          q: 'Sto puta sam ti rekao da zaključaš vrata. Koja je figura?',
          options: ['ironija', 'retoričko pitanje', 'hiperbola', 'gradacija'],
          correct: 2,
          hint: 'Count the times honestly. The figure lives in the number.',
          explanation:
            'hiperbola — deliberate exaggeration. Nothing is inverted, so it is not irony.',
        },
        {
          q: 'Koja je rečenica retoričko pitanje?',
          options: [
            'U koliko sati počinje film?',
            'Čekam te cijelu vječnost.',
            'Riječi lete, pisano ostaje.',
            'Zar to itko još vjeruje?',
          ],
          correct: 3,
          hint: 'Find the question that asserts something and leaves no room for an answer.',
          explanation:
            'Zar to itko još vjeruje? states that nobody believes it. The first option is a genuine question.',
        },
      ],
    },
  },

  'administrativni-stil': {
    worked: [
      {
        title: 'Re-verbing the Nominal Style',
        problem:
          'Prevedi u običan jezik: Prilikom preuzimanja osobne iskaznice potrebno je predočiti potvrdu o uplati.',
        en: 'Put into plain Croatian: Upon collection of the identity card, proof of payment must be presented.',
        steps: [
          {
            label: 'Find the buried verb',
            text: 'preuzimanja is a verbal noun in -nje. Turn it back into its verb: preuzimati, to collect.',
          },
          {
            label: 'Replace the frame',
            text: 'prilikom + genitive means "on the occasion of" — in plain speech, kad.',
          },
          {
            label: 'Give the obligation a person',
            text: 'potrebno je predočiti is impersonal. Addressed to the reader it becomes morate pokazati.',
          },
        ],
        answer: 'Kad preuzimate osobnu iskaznicu, morate pokazati potvrdu o uplati.',
      },
      {
        title: 'The Case After sukladno',
        problem:
          'Dopuni: Sukladno ___ (zaključak Upravnog vijeća), rok se produljuje do 30. lipnja.',
        en: 'Fill in: In accordance with the conclusion of the Management Board, the deadline is extended to 30 June.',
        steps: [
          {
            label: 'Which case?',
            text: 'sukladno governs the dative (temeljem would take the genitive).',
          },
          {
            label: 'Decline the head noun',
            text: 'zaključak has a fleeting a: genitive zaključka, dative zaključku.',
          },
          {
            label: 'Leave the possessor alone',
            text: 'Upravnog vijeća belongs to zaključak, not to sukladno, so it stays in the genitive.',
          },
        ],
        answer: 'Sukladno zaključku Upravnog vijeća, rok se produljuje do 30. lipnja.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Temeljem ___ o radu poslodavac je dužan isplatiti naknadu. (Zakon)',
          options: ['Zakona', 'Zakonu', 'Zakon', 'Zakonom'],
          correct: 0,
          hint: 'temeljem does not govern the same case as sukladno.',
          explanation: 'temeljem + genitive: temeljem Zakona o radu.',
        },
        {
          q: 'Koja je rečenica napisana u administrativnom stilu?',
          options: [
            'Molim da mi pošaljete papire čim prije.',
            'Zahtjev se podnosi nadležnom tijelu u roku od osam dana.',
            'Ajde, pošalji papire do petka.',
            'Ja Vam šaljem papire jer ste ih tražili.',
          ],
          correct: 1,
          hint: 'The register is impersonal and passive, and it uses fixed formulas for bodies and deadlines.',
          explanation:
            'Zahtjev se podnosi nadležnom tijelu u roku od osam dana — se-passive, nadležno tijelo, u roku od + genitive. The others are personal letters or speech.',
        },
        {
          q: 'Žalba se podnosi u roku od 15 dana od dana dostave. Rješenje nosi datum 3. svibnja, a uručeno vam je 10. svibnja. Od kojeg dana teče rok?',
          options: [
            'od 3. svibnja',
            'od 10. svibnja',
            'od dana kad ga pročitate',
            'od 18. svibnja',
          ],
          correct: 1,
          hint: 'The clock starts at service — when it was handed to you — not at the date printed on the paper.',
          explanation:
            'od 10. svibnja — dostava is delivery. Counting from the printed date can cost you the right to appeal.',
        },
        {
          q: 'Dopuni: U slučaju ___ roka zahtjev će se odbaciti. (propustiti)',
          options: ['propuštanju', 'propuštanje', 'propustiti', 'propuštanja'],
          correct: 3,
          hint: 'u slučaju takes the genitive, and in the nominal style the verb becomes a verbal noun.',
          explanation: 'u slučaju propuštanja roka — the verbal noun propuštanje in the genitive.',
        },
      ],
    },
  },

  'zarez-interpunkcija': {
    worked: [
      {
        title: 'The Fronted Clause',
        problem: 'Postavi zareze: Dok ti budeš na putu ja ću paziti na mačku.',
        en: 'Punctuate: While you are away, I will look after the cat.',
        steps: [
          {
            label: 'Find the subordinate clause',
            text: 'dok ti budeš na putu is subordinate; ja ću paziti na mačku is the main clause.',
          },
          {
            label: 'Which comes first?',
            text: 'The subordinate clause comes first — inverted order.',
          },
          {
            label: 'Apply rule 1',
            text: 'Inversion takes a comma where the subordinate clause ends. In normal order — Ja ću paziti na mačku dok ti budeš na putu — there would be none.',
          },
        ],
        answer: 'Dok ti budeš na putu, ja ću paziti na mačku.',
      },
      {
        title: 'An Insertion and a Contrast',
        problem:
          'Postavi zareze: Moj susjed inače umirovljeni učitelj ne voli buku ali voli glazbu.',
        en: 'Punctuate: My neighbour, a retired teacher by the way, does not like noise but likes music.',
        steps: [
          {
            label: 'Spot the insertion',
            text: 'inače umirovljeni učitelj is an aside about the neighbour. Take it out and the sentence still stands.',
          },
          {
            label: 'Fence it on both sides',
            text: 'A comma before inače AND after učitelj. Forgetting the second fence is the classic error.',
          },
          {
            label: 'The contrastive conjunction',
            text: 'ali always takes a comma before it. Nothing else in the sentence needs one.',
          },
        ],
        answer: 'Moj susjed, inače umirovljeni učitelj, ne voli buku, ali voli glazbu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koja je rečenica pravilno napisana?',
          options: [
            'Rekao je, da će doći sutra.',
            'Rekao je da će doći sutra.',
            'Rekao je da, će doći sutra.',
            'Rekao, je da će doći sutra.',
          ],
          correct: 1,
          hint: 'Complement da does not follow the English habit of pausing before "that".',
          explanation: 'Rekao je da će doći sutra — no comma before complement da.',
        },
        {
          q: 'Kako se piše: Iako je bio umoran otišao je na trening.',
          options: [
            'Iako je bio, umoran otišao je na trening.',
            'Iako, je bio umoran otišao je na trening.',
            'Iako je bio umoran, otišao je na trening.',
            'Iako je bio umoran otišao je, na trening.',
          ],
          correct: 2,
          hint: 'The iako-clause comes first. Where does it end?',
          explanation:
            'Iako je bio umoran, otišao je na trening — a fronted subordinate clause is closed with a comma.',
        },
        {
          q: 'Koja rečenica ima zarez gdje ne treba?',
          options: [
            'Nije došao, nego je nazvao.',
            'Ana, dođi ovamo.',
            'Ako stigneš, javi se.',
            'Kupila je jabuke, i kruške.',
          ],
          correct: 3,
          hint: 'Plain additive coordination behaves differently from the contrastive conjunctions.',
          explanation:
            'Kupila je jabuke i kruške — no comma before plain i. nego, the vocative and the fronted ako-clause all take theirs.',
        },
        {
          q: 'Kako se piše: Hvala Vam profesorice na pomoći.',
          options: [
            'Hvala Vam profesorice na pomoći.',
            'Hvala Vam, profesorice, na pomoći.',
            'Hvala, Vam profesorice na pomoći.',
            'Hvala Vam profesorice, na pomoći.',
          ],
          correct: 1,
          hint: 'A vocative in the middle of a sentence is fenced off like any insertion.',
          explanation: 'Hvala Vam, profesorice, na pomoći — two commas around the vocative.',
        },
      ],
    },
  },

  'norma-i-uzus': {
    worked: [
      {
        title: 'Marked, Not Wrong',
        problem: 'Lektoriraš izvješće: Analiza je izvršena od strane tima. Što mijenjaš?',
        en: 'You are editing a report: The analysis was carried out by the team. What do you change?',
        steps: [
          {
            label: 'Is it wrong?',
            text: 'No. The passive with od strane is grammatical and everywhere in administrative prose. It is marked, not ungrammatical.',
          },
          {
            label: 'Who is reading?',
            text: 'A report. The written norm prefers a plain active verb to a passive with od strane, and to izvršiti + a noun where one verb will do.',
          },
          {
            label: 'Change it, and say why',
            text: 'izvršena od strane tima → tim je analizirao. The note says "the norm prefers the active voice here", not "this is an error".',
          },
        ],
        answer: 'Tim je analizirao podatke.',
      },
      {
        title: 'Spotting a Hypercorrection',
        problem:
          'Kolega je "ispravio" Razgovarala sam sa Zdenkom u Razgovarala sam s Zdenkom. Prihvaćaš li?',
        en: 'A colleague "corrected" "I talked with Zdenko" to the form with s. Do you accept it?',
        steps: [
          {
            label: 'The general rule',
            text: 's is the ordinary form of the preposition; sa is not wrong, it is conditioned.',
          },
          {
            label: 'Where sa is required',
            text: 'Before s, š, z, ž and awkward clusters: sa sestrom, sa Zoranom — and sa mnom.',
          },
          {
            label: 'Check the next word',
            text: 'Zdenko begins with z. The original was right; the "correction" overshoots the rule.',
          },
        ],
        answer: 'Razgovarala sam sa Zdenkom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: U čekaonici je sjedilo ___ djece s roditeljima.',
          options: ['dvojica', 'dva', 'dvoje', 'dvije'],
          correct: 2,
          hint: 'Children take the collective numeral. The -ica form is reserved for men only.',
          explanation:
            'dvoje djece. dvojica is strictly for men; dva and dvije do not combine with djeca.',
        },
        {
          q: 'Gdje je "dućan" bolji izbor od neutralnijeg "trgovina"?',
          options: [
            'u razgovoru s prijateljem',
            'u oglasu trgovačkog lanca',
            'u službenom izvješću',
            'u zakonskom tekstu',
          ],
          correct: 0,
          hint: 'The less neutral word is not wrong — ask which reader expects a relaxed register.',
          explanation:
            'In conversation dućan is entirely natural. An advert, a report and a law choose the neutral trgovina.',
        },
        {
          q: 'Koja je rečenica pravilna?',
          options: [
            'Pođi s mnom na kavu.',
            'Pođi samnom na kavu.',
            'Pođi sa mnom na kavu.',
            'Pođi sa mene na kavu.',
          ],
          correct: 2,
          hint: 'The "s, not sa" rule stops exactly where pronunciation demands the longer form.',
          explanation:
            'sa mnom — never s mnom (a hypercorrection), never written together, and s takes the instrumental.',
        },
        {
          q: 'Dopis počinje: Poštovani, obavještavamo Vas da je zahtjev zaprimljen. Koji nastavak čuva registar?',
          options: [
            'Javimo se čim nešto skužimo.',
            'Ma riješit ćemo to brzo, ne brinite.',
            'Odlučit ćemo, nadam se, uskoro, pa ćemo vidjeti.',
            'Odluka o zahtjevu bit će donesena u roku od 30 dana.',
          ],
          correct: 3,
          hint: 'Consistency inside one register beats a correct sentence from another register.',
          explanation:
            'Odluka o zahtjevu bit će donesena u roku od 30 dana — impersonal and formal, like the opening. The others drift into speech.',
        },
      ],
    },
  },

  'pravopis-dvojbe': {
    worked: [
      {
        title: 'Two Errors, Not Variants',
        problem: 'Ispravi: Neznam zašto bi ste to napravili.',
        en: 'Correct: I do not know why you would do that.',
        steps: [
          {
            label: 'ne with a verb',
            text: 'ne is written apart from verbs. Only nisam, neću, nemam and nemoj are fused — znati is not among them.',
          },
          {
            label: 'The conditional auxiliary',
            text: 'The second person plural is ONE word: biste. "bi ste" splits a form that has never been two words.',
          },
          {
            label: 'Contested or wrong?',
            text: 'Neither is a contested point like pogreška/pogrješka. Both are simply errors, so both are corrected.',
          },
        ],
        answer: 'Ne znam zašto biste to napravili.',
      },
      {
        title: 'A Date Line in a Letter',
        problem: 'Napiši: on Tuesday, 3 March 2026, at the Ministry of Justice',
        en: 'Write in Croatian: on Tuesday, 3 March 2026, at the Ministry of Justice',
        steps: [
          {
            label: 'Days and months',
            text: 'Lower case: utorak, ožujka. The month goes into the genitive after the day number.',
          },
          {
            label: 'Ordinal dots',
            text: 'A dot after the day AND after the year: 3. ožujka 2026. — then the comma follows the dot.',
          },
          {
            label: 'The institution',
            text: 'Only the first word of a multi-word proper name is capitalised: Ministarstvo pravosuđa, here in the locative after u.',
          },
        ],
        answer: 'u utorak, 3. ožujka 2026., u Ministarstvu pravosuđa',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Mi ___ vam rado pomogli.',
          options: ['bi smo', 'bismo', 'bi', 'bihmo'],
          correct: 1,
          hint: 'The first person plural of the conditional auxiliary is one word, and it is not the third-person form.',
          explanation: 'mi bismo — one word. "Mi bi" is the unedited-speech slip.',
        },
        {
          q: 'Koji je oblik pogreška, a ne sporna varijanta?',
          options: ['zadatci', 'pogrješka', 'nemožemo', 'neću'],
          correct: 2,
          hint: 'Only four verbs fuse with ne. The rest are written apart.',
          explanation:
            'ne možemo is written apart. zadatci and pogrješka are codified variants; neću is one of the four fused forms.',
        },
        {
          q: 'Kako se piše?',
          options: [
            'Učim Hrvatski jezik od Siječnja.',
            'Učim hrvatski Jezik od siječnja.',
            'Učim Hrvatski Jezik od Siječnja.',
            'Učim hrvatski jezik od siječnja.',
          ],
          correct: 3,
          hint: 'Croatian is sparer with capitals than English: languages and months are not proper names here.',
          explanation: 'Učim hrvatski jezik od siječnja — both lower case.',
        },
        {
          q: 'U pismu jednoj osobi: Zahvaljujemo ___ na suradnji.',
          options: ['vam', 'Vam', 'Vas', 'vas'],
          correct: 1,
          hint: 'Writing to one person, the polite pronoun carries meaning through its first letter. zahvaljivati takes the dative.',
          explanation:
            'Vam — dative, capitalised in a letter to one person. Lower-case vam reads as a plural or a slip.',
        },
      ],
    },
  },

  'sklonidba-iznimke': {
    worked: [
      {
        title: 'Three Foreign Names',
        problem: 'Dopuni: Gledali smo film s ___ (Tom Hanks) i ___ (Emma Thompson).',
        en: 'Fill in: We watched a film with Tom Hanks and Emma Thompson.',
        steps: [
          {
            label: 'The case',
            text: 's meaning "together with" takes the instrumental.',
          },
          {
            label: 'The man',
            text: 'Tom and Hanks both end in a consonant and belong to a man, so both decline like ordinary masculines: Tomom Hanksom.',
          },
          {
            label: 'The woman',
            text: 'Emma ends in -a and declines like a feminine: Emmom. Thompson is a woman’s consonant-final surname — no feminine paradigm to enter, so it stays unchanged.',
          },
        ],
        answer: 'Gledali smo film s Tomom Hanksom i Emmom Thompson.',
      },
      {
        title: 'A Collective Subject',
        problem: 'Dopuni: Moja ___ (brat, množina) ___ (doći) jučer.',
        en: 'Fill in: My brothers came yesterday.',
        steps: [
          {
            label: 'The plural of brat',
            text: 'brat has the collective plural braća — a form that looks feminine singular.',
          },
          {
            label: 'The adjective follows the form',
            text: 'Because braća declines like a feminine singular, the possessive is moja.',
          },
          {
            label: 'The verb goes plural',
            text: 'The auxiliary is plural (su), and the participle ends in -a: došla.',
          },
        ],
        answer: 'Moja braća su došla jučer.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Čitali smo pisma ___. (Henry Ford)',
          options: ['Henryja Ford', 'Henrya Forda', 'Henryja Forda', 'Henry Forda'],
          correct: 2,
          hint: 'A final -y needs a linking consonant before the ending, and a man’s consonant-final surname declines too.',
          explanation: 'Henryja Forda — linking -j- after the y, and Ford takes the genitive -a.',
        },
        {
          q: 'Dopuni: Intervju s ___ bio je dug. (Theresa May)',
          options: ['Theresom May', 'Theresa May', 'Theresom Mayjem', 'Theresi May'],
          correct: 0,
          hint: 'Her first name ends in -a and declines; her surname has no feminine paradigm to enter.',
          explanation:
            'Theresom May — instrumental on the first name only. Declining the surname forces it into a masculine paradigm.',
        },
        {
          q: 'Dopuni: Bojim se tvog ___. (pas)',
          options: ['psa', 'pasa', 'pasu', 'psu'],
          correct: 0,
          hint: 'bojati se takes the genitive singular, and this noun loses a vowel when it takes an ending.',
          explanation: 'psa — fleeting a in the genitive singular. pasa is the genitive plural.',
        },
        {
          q: 'U radionici popravljaju stare ___. (sat — clocks)',
          options: ['sate', 'satove', 'sati', 'sata'],
          correct: 1,
          hint: 'This noun has two plurals with two meanings. Clocks take the long one.',
          explanation:
            'satove — satovi means clocks or lessons. The short plural sati counts hours.',
        },
      ],
    },
  },

  'brojevi-norma': {
    worked: [
      {
        title: 'Points or Per Cent?',
        problem: 'Udio mladih birača porastao je s 20 % na 25 %. Za koliko je porastao?',
        en: 'The share of young voters rose from 20 % to 25 %. By how much did it rise?',
        steps: [
          {
            label: 'Subtract',
            text: '25 − 20 = 5. That difference is measured in percentage points — postotni bodovi.',
          },
          {
            label: 'The relative change',
            text: '5 out of the original 20 is a quarter: a rise of 25 per cent. That is a different number and a different claim.',
          },
          {
            label: 'Get the grammar right',
            text: 'pet + genitive plural: pet postotnih bodova. posto is invariable: 25 posto.',
          },
        ],
        answer: 'Za pet postotnih bodova, odnosno za 25 posto.',
      },
      {
        title: 'A Sentence That Opens With a Numeral',
        problem: 'Preoblikuj za izvješće: 30 dana je rok za uplatu 2,450.80 eura.',
        en: 'Rewrite for a report: 30 days is the deadline for paying 2,450.80 euros.',
        steps: [
          {
            label: 'Never open with a numeral',
            text: 'Reorder so that the sentence begins with a word: Rok za uplatu…',
          },
          {
            label: 'Croatian punctuation',
            text: 'A dot for thousands, a comma for the decimal: 2.450,80.',
          },
          {
            label: 'The case after the amount',
            text: 'An amount like this is followed by the genitive plural: eura. iznosa od frames the sum.',
          },
        ],
        answer: 'Rok za uplatu iznosa od 2.450,80 eura iznosi 30 dana.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kako se u dopisu piše "at 9 o’clock on 1 May 2026"?',
          options: [
            '1. svibnja 2026. u 9 sati',
            '1 svibanj 2026 u 9:00 sati',
            '1. Svibnja 2026. u 9 sati',
            '1. svibanj 2026. u 9h sati',
          ],
          correct: 0,
          hint: 'Ordinal dots after the day and the year, the month in the genitive and in lower case, and one word for the clock.',
          explanation:
            '1. svibnja 2026. u 9 sati — sati replaces the second half of the clock time.',
        },
        {
          q: 'Dopuni: Na natječaj su se prijavile četiri ___, a sedam ___ nije se javilo.',
          options: ['osobe / osoba', 'osoba / osobe', 'osobe / osobe', 'osoba / osoba'],
          correct: 0,
          hint: 'Two to four take the genitive singular; five and above the genitive plural.',
          explanation: 'četiri osobe (genitive singular), sedam osoba (genitive plural).',
        },
        {
          q: 'Koja rečenica krši kodificirano pravilo?',
          options: [
            'Dvanaest ljudi čekalo je pred vratima.',
            '12 ljudi čekalo je pred vratima.',
            'Pred vratima je čekalo 12 ljudi.',
            'Pred vratima je čekalo dvanaest ljudi.',
          ],
          correct: 1,
          hint: 'The small-numbers-as-words line is a matter of consistency. One rule about numerals is not.',
          explanation:
            'A sentence never begins with a numeral: spell it out or reorder, as the other three do.',
        },
        {
          q: 'U službenom rješenju: Komisija je odlučila o ___ zahtjevima.',
          options: ['dva', 'dvama', 'dvije', 'dvaju'],
          correct: 1,
          hint: 'Administrative writing expects the declined numeral, agreeing in case with the noun after o.',
          explanation:
            'o dvama zahtjevima — the locative of dva. dvaju is the genitive; journalism would write o dva zahtjeva.',
        },
      ],
    },
  },

  'slaganje-suptilnosti': {
    worked: [
      {
        title: 'A Quantity Subject',
        problem: 'Dopuni: Sedam ___ (radnik) ___ (potpisati) peticiju.',
        en: 'Fill in: Seven workers signed the petition.',
        steps: [
          {
            label: 'The noun after sedam',
            text: 'Five and above take the genitive plural: radnika.',
          },
          {
            label: 'Who controls the verb?',
            text: 'The quantity word, not the noun — and it delivers a neuter singular: potpisalo.',
          },
          {
            label: 'Place the clitic',
            text: 'je goes second: after sedam (Sedam je radnika potpisalo) or after the whole phrase (Sedam radnika potpisalo je). Never su.',
          },
        ],
        answer: 'Sedam je radnika potpisalo peticiju.',
      },
      {
        title: 'Mixed Genders',
        problem: 'Dopuni: Profesorica i njezin asistent ___ (otputovati) u Pulu.',
        en: 'Fill in: The professor (f.) and her assistant travelled to Pula.',
        steps: [
          {
            label: 'Find the whole subject',
            text: 'Two coordinated nouns — one feminine, one masculine — so the subject is plural.',
          },
          {
            label: 'Mixed genders',
            text: 'The masculine plural is the unmarked form: otputovali.',
          },
          {
            label: 'Ignore the nearest noun',
            text: 'asistent stands next to the verb, but agreement is with the whole subject, not with whichever noun is closest.',
          },
        ],
        answer: 'Profesorica i njezin asistent otputovali su u Pulu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Tri knjige ___ na stolu.',
          options: ['su ležali', 'su ležala', 'su ležale', 'je ležala'],
          correct: 2,
          hint: 'Two, three and four keep a plural verb, and the participle agrees with the gender of the noun.',
          explanation: 'Tri knjige su ležale — feminine plural participle with a feminine noun.',
        },
        {
          q: 'Dopuni: Mnogo je putnika ___ na polazak.',
          options: ['čekalo', 'čekali', 'čekala', 'čekao'],
          correct: 0,
          hint: 'The quantity word controls the verb and gives it one particular gender and number.',
          explanation: 'Mnogo je putnika čekalo — a quantity subject takes a neuter singular.',
        },
        {
          q: 'Koja rečenica pušta glagol da se slaže s najbližom imenicom?',
          options: [
            'Ni otac ni njegove kćeri nisu došli.',
            'Ni otac ni njegove kćeri nisu došle.',
            'Otac i kćeri su došli.',
            'Kćeri i otac su došli.',
          ],
          correct: 1,
          hint: 'The whole subject is mixed in gender. Which verb copies only the noun next to it?',
          explanation:
            'nisu došle copies kćeri. With a mixed subject the verb is masculine plural: nisu došli.',
        },
        {
          q: 'Dopuni: Ana i Marija ___ kasno.',
          options: ['su stigle', 'su stigli', 'je stiglo', 'su stigla'],
          correct: 0,
          hint: 'When every member of the subject is feminine, the unmarked masculine is not needed.',
          explanation: 'Ana i Marija su stigle — all feminine, so feminine plural.',
        },
      ],
    },
  },

  'padezne-suptilnosti': {
    worked: [
      {
        title: 'Two Bare Instrumentals',
        problem: 'Prevedi: On Fridays she goes to the office by tram.',
        en: 'Translate into Croatian.',
        steps: [
          {
            label: 'Repetition in time',
            text: '"On Fridays", as a habit, is a bare instrumental with no preposition: petkom.',
          },
          {
            label: 'Means of transport',
            text: '"By tram" is also a bare instrumental: tramvajem. Adding s would make the tram her companion.',
          },
          {
            label: 'Direction',
            text: 'u + accusative for movement into: u ured.',
          },
        ],
        answer: 'Petkom ide u ured tramvajem.',
      },
      {
        title: 'Time and Absence',
        problem: 'Prevedi: Last winter there was no snow at all.',
        en: 'Translate into Croatian.',
        steps: [
          {
            label: 'A point in time',
            text: 'A bare genitive gives a point: prošle zime — no u, no preposition.',
          },
          {
            label: 'Existential negation',
            text: 'nije bilo takes the genitive of what is absent: snijega.',
          },
          {
            label: 'The whole sentence',
            text: 'Two genitives, two jobs, no prepositions anywhere — exactly what the English needed a clause and "at all" for.',
          },
        ],
        answer: 'Prošle zime nije bilo snijega.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koja rečenica znači "bring some wine"?',
          options: ['Donesi vino.', 'Donesi vina.', 'Donesi s vinom.', 'Donesi vinom.'],
          correct: 1,
          hint: '"Some" is carried by the case — the partitive — not by a separate word.',
          explanation:
            'Donesi vina — the partitive genitive. Donesi vino asks for the particular wine in question.',
        },
        {
          q: 'Dopuni: Šetali smo ___ do svjetionika. (obala — along the shore)',
          options: ['obalom', 's obalom', 'obali', 'obalu'],
          correct: 0,
          hint: 'A route travelled along is a bare case, with no preposition.',
          explanation:
            'obalom — the bare instrumental of route. s obalom would make the shore a companion.',
        },
        {
          q: 'Dopuni: ___ radim od kuće, a utorkom idem u ured.',
          options: ['U ponedjeljku', 'Na ponedjeljak', 'Ponedjeljak', 'Ponedjeljkom'],
          correct: 3,
          hint: 'A habit that repeats every week uses the same bare case as utorkom later in the sentence.',
          explanation: 'Ponedjeljkom — the instrumental of repetition, matching utorkom.',
        },
        {
          q: 'Dopuni: Danas nema ___ u uredu.',
          options: ['direktor', 'direktoru', 'direktora', 'direktorom'],
          correct: 2,
          hint: 'nema meaning "there is no" governs one case, always.',
          explanation: 'nema direktora — the genitive, exactly as in Nema problema.',
        },
      ],
    },
  },

  'glagolski-vid-granice': {
    worked: [
      {
        title: 'Forbidding a Single Act',
        problem: 'Zabrani: Pošalji mu poruku.',
        en: 'Turn into a prohibition: Send him the message.',
        steps: [
          {
            label: 'The positive command',
            text: 'pošalji is perfective (poslati): one completed act.',
          },
          {
            label: 'The negation overrides meaning',
            text: 'A negated imperative is imperfective, even for a single act. The imperfective partner of poslati is slati.',
          },
          {
            label: 'Form it',
            text: 'ne + imperative of slati: ne šalji. The softer version is Nemoj mu slati poruku.',
          },
        ],
        answer: 'Ne šalji mu poruku.',
      },
      {
        title: 'The Warning Exception',
        problem: 'Prijatelj nosi pune čaše. Upozori ga: "Don’t spill it!"',
        en: 'A friend is carrying full glasses. Warn him: "Don’t spill it!"',
        steps: [
          {
            label: 'A rule or a risk?',
            text: 'You are not forbidding an activity; you are flagging one accidental act that might happen right now.',
          },
          {
            label: 'The exception applies',
            text: 'A warning against a one-off risk takes nemoj + PERFECTIVE infinitive.',
          },
          {
            label: 'Check the alternative',
            text: 'Ne prolijevaj would mean "do not be spilling, as a habit" — a different instruction.',
          },
        ],
        answer: 'Nemoj proliti!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Ne ___ sve papire, trebaju mi. (baciti)',
          options: ['baci', 'bacaj', 'bacati', 'bacio'],
          correct: 1,
          hint: 'An ordinary prohibition takes the other member of the aspect pair, in the imperative.',
          explanation:
            'Ne bacaj — imperfective imperative. Ne baci is the audible foreign-speaker error.',
        },
        {
          q: 'Dopuni: Tek je u tridesetoj počeo ___ gitaru.',
          options: ['odsvirati', 'svirati', 'zasvirati', 'svira'],
          correct: 1,
          hint: 'You cannot begin a completed whole. Phase verbs take one aspect only.',
          explanation: 'počeo je svirati — početi + imperfective infinitive.',
        },
        {
          q: 'Koja je rečenica upozorenje na jednu slučajnu opasnost?',
          options: [
            'Ne peci se na suncu cijeli dan.',
            'Ne kupuj slatkiše.',
            'Nemoj se opeći, lonac je vruć!',
            'Nemoj pušiti.',
          ],
          correct: 2,
          hint: 'Look for the perfective after nemoj, flagging one accident that might happen now.',
          explanation:
            'Nemoj se opeći — a warning about a single act. The others forbid activities or habits, so they are imperfective.',
        },
        {
          q: 'Pripovjedač: Otvaram ja vrata, a na pragu ___ moj stari profesor.',
          options: ['stane', 'stajaše', 'stao', 'stoji'],
          correct: 3,
          hint: 'The historic present narrates with the same aspect throughout.',
          explanation:
            'stoji — the historic present is imperfective. stajaše is the imperfect, a different tense entirely.',
        },
      ],
    },
  },

  'kondicional-drugi': {
    worked: [
      {
        title: 'Regret in the Second Conditional',
        problem: 'Prevedi: Had the train been on time, Marina would have caught the ferry.',
        en: 'Translate into Croatian.',
        steps: [
          {
            label: 'The condition',
            text: 'A past unreal condition: da + perfekt — Da je vlak stigao na vrijeme.',
          },
          {
            label: 'The main clause',
            text: 'The explicit "would have": conditional of biti + participle — bi bila stigla.',
          },
          {
            label: 'Agreement and order',
            text: 'Marina is feminine, so BOTH participles agree: bila, stigla. The clitic bi goes second, straight after Marina.',
          },
        ],
        answer: 'Da je vlak stigao na vrijeme, Marina bi bila stigla na trajekt.',
      },
      {
        title: 'Did It Happen?',
        problem: 'Prijatelj kaže: Bio bih te nazvao. Je li te nazvao?',
        en: 'A friend says: "I would have called you." Did he call?',
        steps: [
          {
            label: 'Look at the auxiliary',
            text: 'bih — the conditional auxiliary, not sam.',
          },
          {
            label: 'Second conditional, not pluperfect',
            text: 'bio bih nazvao reports a non-event. bio sam nazvao would report a real call before some other past event.',
          },
          {
            label: 'Conclude',
            text: 'One word separates the two, and it reverses the facts: the call did not happen.',
          },
        ],
        answer: 'Nije te nazvao.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Da ste nas pitali, ___ vam pomogli.',
          options: ['bili bismo', 'bili smo', 'bismo bili', 'bili bi smo'],
          correct: 0,
          hint: 'The main clause reports a non-event, and a clitic cannot open a clause.',
          explanation:
            'bili bismo vam pomogli — the second conditional, with the cluster bismo vam in second position. bili smo would say it happened.',
        },
        {
          q: 'Koja rečenica kaže da pismo NIJE poslano?',
          options: [
            'Bila je poslala pismo.',
            'Bila bi poslala pismo.',
            'Poslala je pismo.',
            'Bila je već poslala pismo.',
          ],
          correct: 1,
          hint: 'Find the conditional auxiliary; the indicative ones report real events.',
          explanation:
            'Bila bi poslala — second conditional, a non-event. Bila je poslala is the pluperfect: it happened.',
        },
        {
          q: 'Petar kaže: ___ došao na proslavu, ali sam bio bolestan.',
          options: ['Bila bih', 'Bio sam', 'Bio bih', 'Bi bio'],
          correct: 2,
          hint: 'He did not come, and Petar is a man. Also check what may open a sentence.',
          explanation:
            'Bio bih došao — masculine, conditional. Bio sam would report the coming as real; Bi cannot stand first.',
        },
        {
          q: 'Dopuni: Ana ___ ostala dulje da nije padala kiša.',
          options: ['bio bi', 'bila bi', 'bi bilo', 'bi bila'],
          correct: 3,
          hint: 'The conditional clitic stands second, straight after the subject, and both participles agree with a woman.',
          explanation:
            'Ana bi bila ostala — bi after Ana, then feminine bila. bila bi would put the clitic third.',
        },
      ],
    },
  },

  'glagolski-nacini': {
    worked: [
      {
        title: 'Obligation With Nobody in It',
        problem: 'Preoblikuj za službenu obavijest: Morate predati obrazac do ponedjeljka.',
        en: 'Rewrite for an official notice: You must hand in the form by Monday.',
        steps: [
          {
            label: 'Remove the person',
            text: 'An official notice states a rule without pointing at anybody, so morate goes.',
          },
          {
            label: 'Choose the construction',
            text: 'potrebno je + infinitive is the administrative impersonal: potrebno je predati.',
          },
          {
            label: 'Front the topic',
            text: 'The form is what the notice is about, so it opens the sentence and je follows it.',
          },
        ],
        answer: 'Obrazac je potrebno predati do ponedjeljka.',
      },
      {
        title: 'Reporting Without Endorsing',
        problem: 'Novinar prenosi tvrdnju koju ne može potvrditi: Ministar je dao ostavku.',
        en: 'A journalist reports a claim he cannot confirm: The minister has resigned.',
        steps: [
          {
            label: 'Whose uncertainty?',
            text: 'Not the journalist’s own doubt (that would be možda) — a claim heard from others and passed on.',
          },
          {
            label: 'The right particle',
            text: 'navodno distances the speaker from the claim entirely: reported, not endorsed.',
          },
          {
            label: 'Place it',
            text: 'After the clitic je, before the participle.',
          },
        ],
        answer: 'Ministar je navodno dao ostavku.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kolegi šalješ molbu, ne naredbu. Koja rečenica odgovara?',
          options: [
            'Poslat ćeš mi tablicu do podneva.',
            'Možeš li mi poslati tablicu do podneva?',
            'Tablicu je potrebno poslati do podneva.',
            'Moraš mi poslati tablicu do podneva.',
          ],
          correct: 1,
          hint: 'A future to a peer presents compliance as settled; an impersonal reads as evasive between colleagues.',
          explanation:
            'Možeš li mi poslati…? is a request. The future is an order, moraš is direct obligation, potrebno je a rule.',
        },
        {
          q: 'Dopuni savjet u pisanom tekstu: ___ više spavati, stalno si umoran.',
          options: ['Trebao bih', 'Trebali bismo', 'Trebao bi', 'Trebao je'],
          correct: 2,
          hint: 'Advice to ONE person you call ti: the conditional, in the second person singular.',
          explanation:
            'Trebao bi više spavati — conditional, ti. Trebao bih is about yourself, trebali bismo about us, and trebao je looks back instead of advising.',
        },
        {
          q: 'Nadaš se, bez čvrstog dokaza: ___ će autobus doći na vrijeme.',
          options: ['Navodno', 'Sigurno', 'Valjda', 'Zacijelo'],
          correct: 2,
          hint: 'You want a presumption delivered with a shrug — neither certainty nor someone else’s report.',
          explanation:
            'Valjda — probably, I suppose. Sigurno and zacijelo claim certainty; navodno reports a claim.',
        },
        {
          q: 'Dopuni: Trebaju ___ nove cipele. (ja)',
          options: ['mi', 'me', 'ja', 'meni se'],
          correct: 0,
          hint: 'trebati meaning "need" in this construction puts the person in the dative and the thing needed in the subject.',
          explanation: 'Trebaju mi nove cipele — the older, more standard dative construction.',
        },
      ],
    },
  },

  'ritam-recenice': {
    worked: [
      {
        title: 'Putting the News Last',
        problem:
          'Odgovori na pitanje "Što je jučer otvoreno u Osijeku?" riječima: nova knjižnica, jučer, u Osijeku, otvorena.',
        en: 'Answer "What was opened in Osijek yesterday?" using: new library, yesterday, in Osijek, opened.',
        steps: [
          {
            label: 'Known and new',
            text: 'The question already gives jučer and Osijek — they are known. The library is the news.',
          },
          {
            label: 'End weight',
            text: 'New information goes last, in the emphatic position: …nova knjižnica.',
          },
          {
            label: 'The clitic follows the first constituent',
            text: 'Front jučer, and je comes straight after it.',
          },
        ],
        answer: 'Jučer je u Osijeku otvorena nova knjižnica.',
      },
      {
        title: 'Getting Out of a Tangle',
        problem:
          'Popravi: Pročitao sam knjigu koju je napisao autor koji živi u gradu koji je poznat po vinu.',
        en: 'Fix: I read a book that was written by an author who lives in a town that is known for its wine.',
        steps: [
          {
            label: 'Count the levels',
            text: 'Three nested koji-clauses. Grammatical, and hard to read.',
          },
          {
            label: 'Condense the first',
            text: 'koju je napisao autor becomes a genitive of the author: knjigu autora.',
          },
          {
            label: 'Condense the last',
            text: 'koji je poznat po vinu becomes an adjective phrase agreeing with gradu: poznatom po vinu.',
          },
          {
            label: 'Check what remains',
            text: 'One koji-clause is left. Two levels at most, not four.',
          },
        ],
        answer: 'Pročitao sam knjigu autora koji živi u gradu poznatom po vinu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koji red riječi odgovara na pitanje TKO je pobijedio na izborima?',
          options: [
            'Na izborima je pobijedila oporba.',
            'Oporba je pobijedila na izborima.',
            'Oporba je na izborima pobijedila.',
            'Pobijedila je oporba, i to na izborima.',
          ],
          correct: 0,
          hint: 'The answer to the question is the news, and the news goes in the emphatic position.',
          explanation:
            'Na izborima je pobijedila oporba — the elections are known, oporba is new and comes last.',
        },
        {
          q: 'Dopuni: Prošle godine ___ preselili u Pulu.',
          options: ['se smo', 'smo se', 'smo mi se', 'mi smo se'],
          correct: 1,
          hint: 'Whatever you front, the clitic cluster follows it at once, in its fixed internal order.',
          explanation:
            'Prošle godine smo se preselili — the auxiliary before se, straight after the fronted phrase.',
        },
        {
          q: 'Odlomak od tri duge rečenice o pregovorima. Koja ga rečenica najbolje zatvara?',
          options: [
            'Pregovori su, nakon što su trajali danima i uključivali mnoge strane, na kraju propali.',
            'Pregovori koji su trajali danima su propali.',
            'Dakle, pregovori su, kao što je već rečeno, propali.',
            'Propali su.',
          ],
          correct: 3,
          hint: 'After long sentences, the point lands in a change of rhythm.',
          explanation:
            'Propali su. — a short sentence after long ones carries the weight. A fourth long one exhausts the reader.',
        },
        {
          q: 'Sažmi "Kad je stigao u Split, ministar je dao izjavu" u imenski izraz:',
          options: [
            'Po dolasku u Splitu ministar je dao izjavu.',
            'Po dolaska u Split ministar je dao izjavu.',
            'Po dolasku u Split ministar je dao izjavu.',
            'Po dolazak u Split ministar je dao izjavu.',
          ],
          correct: 2,
          hint: 'po in its temporal sense takes the locative, and arrival INTO a city keeps the case of direction.',
          explanation: 'Po dolasku u Split — locative after po, accusative after u for movement.',
        },
      ],
    },
  },

  'ironija-podtekst': {
    worked: [
      {
        title: 'Praise or Reproach?',
        problem: 'Kolega kaže: Svaka čast, opet si zaboravio poslati izvješće. Kako to čitaš?',
        en: 'A colleague says: "Well done, you forgot to send the report again." How do you read it?',
        steps: [
          {
            label: 'The marker',
            text: 'svaka čast is praise — or its exact opposite. The words alone do not decide.',
          },
          {
            label: 'The fact after it',
            text: 'opet si zaboravio is a failure, and opet (again) makes it a repeated one.',
          },
          {
            label: 'Resolve the gap',
            text: 'Praise for a failure is incongruous; the gap between wording and situation IS the irony.',
          },
        ],
        answer: 'Ironija: to je prijekor, a ne pohvala.',
      },
      {
        title: 'Hearing Understatement',
        problem: 'Susjed o tvojoj novoj kući kaže: Nije loše, nije loše. Kako odgovoriti?',
        en: 'Your neighbour says of your new house: "Not bad, not bad." How do you reply?',
        steps: [
          {
            label: 'The Croatian default',
            text: 'Croatian praises by not complaining. Nije loše is genuine approval.',
          },
          {
            label: 'Do not hear it as lukewarm',
            text: 'Answering as if criticised — asking what is wrong with it — misreads him.',
          },
          {
            label: 'Reply in kind',
            text: 'Thank him as you would for praise, without overstatement.',
          },
        ],
        answer: 'Hvala, drago mi je da ti se sviđa.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Nakon što je kolega srušio poslužitelj, šef kaže: E pa, hvala lijepa. Što je rekao?',
          options: [
            'Sarcasm — he is annoyed',
            'Genuine thanks',
            'An apology',
            'A request for help',
          ],
          correct: 0,
          hint: 'The marker e pa in front of thanks, after a failure, is usually resigned.',
          explanation: 'Sarcasm — e pa + thanks after damage means the opposite.',
        },
        {
          q: 'Dopuni: Da ti platim ručak? ___, ti meni duguješ!',
          options: ['Nego što', 'Ma daj', 'Svaka čast', 'Može'],
          correct: 1,
          hint: 'You want a dismissive, disbelieving marker — not agreement.',
          explanation: 'Ma daj — dismissal and disbelief. Nego što and može would agree to pay.',
        },
        {
          q: 'Koja rečenica je pisana ironija kroz umanjenicu?',
          options: [
            'Grad ima deficit od dvjesto milijuna eura.',
            'Grad je smanjio deficit za dvjesto milijuna eura.',
            'Grad je dobio mali deficitić od dvjesto milijuna eura.',
            'Deficit grada iznosi dvjesto milijuna eura.',
          ],
          correct: 2,
          hint: 'Look for a small word on a very large thing.',
          explanation:
            'mali deficitić — a diminutive on two hundred million: the mismatch is the irony.',
        },
        {
          q: 'Koja je rečenica ironično retoričko pitanje?',
          options: [
            'Tko je rekao da dolazi sutra?',
            'Kad počinje sastanak?',
            'Je li netko vidio moje ključeve?',
            'A tko je, molim te, rekao da će biti lako?',
          ],
          correct: 3,
          hint: 'Find the question that leaves no room for an answer and asserts something instead.',
          explanation:
            'A tko je, molim te, rekao da će biti lako? — nobody did, and the speaker knows it. The others are genuine questions.',
        },
      ],
    },
  },

  'humor-jezicni': {
    worked: [
      {
        title: 'Explaining a Pun',
        problem: 'Zašto je šaljivo: Pod lukom mosta netko je rezao luk?',
        en: 'Why is this funny: "Under the arch of the bridge someone was chopping onion"?',
        steps: [
          {
            label: 'Find the repeated word',
            text: 'luk appears twice.',
          },
          {
            label: 'Two meanings',
            text: 'The first is the arch of the bridge, the second the vegetable.',
          },
          {
            label: 'Why writing hides it',
            text: 'The spelling is identical; speech separates them by pitch accent. The collision of the two is the joke.',
          },
        ],
        answer: 'Luk je i svod i povrće — igra riječi.',
      },
      {
        title: 'The Comic Diminutive',
        problem: 'Kako šaljivo opisati vilu s bazenom i deset soba?',
        en: 'How would you describe a villa with a pool and ten rooms, as a joke?',
        steps: [
          {
            label: 'Choose the device',
            text: 'Applying a diminutive to something that cannot be small is the most reliable comic move.',
          },
          {
            label: 'Form it',
            text: 'kuća → kućica.',
          },
          {
            label: 'Let the facts contradict it',
            text: 'The joke needs the size stated right next to the diminutive, so the mismatch is heard.',
          },
        ],
        answer: 'Imaju lijepu kućicu s bazenom i deset soba.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Zašto "Sam sam kupio stol" može zvučati kao igra riječi?',
          options: [
            'sam means both "I am" and "alone"',
            'stol has two accents',
            'kupio is biaspectual',
            'sam is a vocative',
          ],
          correct: 0,
          hint: 'One of the three words has two unrelated jobs in the same shape.',
          explanation:
            'sam is the auxiliary "I am" and the adjective "alone" — one form, two words.',
        },
        {
          q: 'Koja riječ šaljivo umanjuje nešto veliko?',
          options: ['računalo', 'račun', 'računčić', 'računica'],
          correct: 2,
          hint: 'Look for the diminutive suffix on a word for a bill.',
          explanation:
            'računčić — a "little bill", said of a large one. računalo is a computer, računica a calculation.',
        },
        {
          q: 'Kolega iz Zagorja u šali kaže jednu rečenicu na kajkavskom i svi se smiju. Što je ispravno?',
          options: [
            'Correct him to the standard',
            'Enjoy the switch — it is a comic register',
            'Assume he cannot speak the standard',
            'Tell him dialect is unprofessional',
          ],
          correct: 1,
          hint: 'An educated speaker dropping into dialect for one line is doing something on purpose.',
          explanation:
            'A dialect switch is a comic register, not a slip — correcting it misses the joke.',
        },
        {
          q: 'Koja je rečenica šala s lažno svečanim vokativom?',
          options: [
            'Direktore, sastanak počinje u devet.',
            'Gospodine direktore, šaljem Vam izvješće.',
            'Direktor je stigao na sastanak.',
            'Gospodine direktore, izvolite vaš sok — rekla je sestra bratu od šest godina.',
          ],
          correct: 3,
          hint: 'The formality has to be out of place for the person addressed.',
          explanation:
            'A six-year-old addressed as Gospodine direktore — the mock-formal vocative is the joke. The second option is a genuine formal address.',
        },
      ],
    },
  },

  'publicisticki-stil': {
    worked: [
      {
        title: 'From Headline to Lead',
        problem: 'Pretvori naslov u prvu rečenicu vijesti: Gradonačelnik podnio ostavku',
        en: 'Turn the headline into the first sentence of the story: Mayor resigns',
        steps: [
          {
            label: 'Restore the auxiliary',
            text: 'Headlines drop je; running text cannot. podnio → je podnio.',
          },
          {
            label: 'Answer when',
            text: 'The lead answers who, what, where and when: add jučer.',
          },
          {
            label: 'Attribute',
            text: 'The source is protected with the agentless doznaje se, plus where it is learned from.',
          },
        ],
        answer: 'Gradonačelnik je jučer podnio ostavku, doznaje se iz gradske uprave.',
      },
      {
        title: 'Choosing the Attribution Verb',
        problem: 'Stručnjak mirno iznosi podatak da cijene rastu. Koji glagol navođenja biraš?',
        en: 'An expert calmly states the figure that prices are rising. Which attribution verb do you choose?',
        steps: [
          {
            label: 'Read the source’s tone',
            text: 'Calm, factual, no alarm and no dispute.',
          },
          {
            label: 'Rule out the loaded verbs',
            text: 'tvrdi marks the claim as contested; ističe endorses its importance; upozorava adds an alarm the source never sounded.',
          },
          {
            label: 'Take the neutral one',
            text: 'navodi (formal) or kaže (plain) reports without judging.',
          },
        ],
        answer: 'Stručnjak navodi da cijene rastu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'List želi pokazati da je tvrdnja sporna: Direktor ___ da nije znao za dug.',
          options: ['kaže', 'tvrdi', 'ističe', 'navodi'],
          correct: 1,
          hint: 'One attribution verb quietly tells the reader that the paper does not take the claim on trust.',
          explanation:
            'tvrdi — the claim is contested. kaže and navodi are neutral; ističe endorses.',
        },
        {
          q: 'Koja rečenica ne imenuje izvor informacije?',
          options: [
            'Ministarstvo je priopćilo da je natječaj poništen.',
            'Ravnatelj kaže da je natječaj poništen.',
            'Kako navodi županija, natječaj je poništen.',
            'Doznaje se da je natječaj poništen.',
          ],
          correct: 3,
          hint: 'Look for the agentless construction that protects the source.',
          explanation: 'Doznaje se… — it is learned, from nobody named.',
        },
        {
          q: 'Dopuni ustaljeni izraz: Prema ___ informacijama, sastanak je odgođen.',
          options: ['neslužbene', 'neslužbenih', 'neslužbenim', 'neslužbeni'],
          correct: 2,
          hint: 'prema governs the dative, and the adjective agrees with informacijama.',
          explanation: 'prema neslužbenim informacijama — the standard hedge, dative plural.',
        },
        {
          q: 'Kojom rečenicom počinje vijest?',
          options: [
            'Vatrogasci su u noći na nedjelju ugasili požar kod Šibenika.',
            'Vatrogastvo u Hrvatskoj ima dugu tradiciju.',
            'Na kraju, požar je ipak ugašen.',
            'Mnogi se pitaju što je uzrokovalo požar.',
          ],
          correct: 0,
          hint: 'A lead answers who, what, where and when in one sentence.',
          explanation:
            'Vatrogasci su… ugasili požar kod Šibenika — who, what, where, when. The rest is background, an ending or a question.',
        },
      ],
    },
  },

  'znanstveni-stil': {
    worked: [
      {
        title: 'Out of the First Person',
        problem: 'Preoblikuj za rad: U ovom radu ja ću pokazati da se broj govornika smanjuje.',
        en: 'Rewrite for a paper: In this paper I will show that the number of speakers is falling.',
        steps: [
          {
            label: 'Drop the first person',
            text: 'Croatian scholarly writing avoids ja even more firmly than English avoids "I".',
          },
          {
            label: 'Use the se-passive',
            text: 'pokazati → se pokazuje: the paper shows, nobody in particular does.',
          },
          {
            label: 'The standard frame',
            text: 'U radu se… is the conventional opening; ovom is unnecessary once the frame is set.',
          },
        ],
        answer: 'U radu se pokazuje da se broj govornika smanjuje.',
      },
      {
        title: 'Citing and Hedging',
        problem:
          'Popravi: Prema Horvat, rezultati dokazuju da je veza uzročna. (Horvat je muškarac.)',
        en: 'Fix: According to Horvat, the results prove the link is causal. (Horvat is a man.)',
        steps: [
          {
            label: 'Decline the cited name',
            text: 'prema takes the dative, and a man’s consonant-final surname declines: prema Horvatu.',
          },
          {
            label: 'Weigh the verb',
            text: 'dokazuju (prove) overclaims; an unhedged claim reads as amateur.',
          },
          {
            label: 'Hedge',
            text: 'upućuju na to da (point towards) is the conventional softening.',
          },
        ],
        answer: 'Prema Horvatu, rezultati upućuju na to da je veza uzročna.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kako se zove odjeljak u kojem se rezultati tumače i uspoređuju s drugim istraživanjima?',
          options: ['rasprava', 'zaključak', 'sažetak', 'uvod'],
          correct: 0,
          hint: 'Its name literally means "debate".',
          explanation:
            'rasprava — the discussion. zaključak concludes, sažetak is the abstract, uvod the introduction.',
        },
        {
          q: 'Koja je rečenica primjereno ograđena?',
          options: [
            'Rezultati nedvojbeno dokazuju uzročnost.',
            'Čini se da je veza slabija nego što se pretpostavljalo.',
            'Ja mislim da je veza slaba.',
            'Svi znaju da je veza slaba.',
          ],
          correct: 1,
          hint: 'Impersonal, and hedged — neither overclaiming nor personal.',
          explanation:
            'Čini se da… is the conventional hedge. The others overclaim, use the first person, or appeal to common knowledge.',
        },
        {
          q: 'Dopuni: Rezultati se podudaraju s nalazima ___. (Kovačević, autor)',
          options: ['Kovačević', 'Kovačevića', 'Kovačeviću', 'Kovačevićem'],
          correct: 1,
          hint: 'The author possesses the findings, and a man’s cited surname declines like any masculine noun.',
          explanation: 'nalazima Kovačevića — the genitive of the possessor.',
        },
        {
          q: 'Koja je domaća riječ za "interface" u stručnom tekstu?',
          options: ['preglednik', 'računalo', 'zaslon', 'sučelje'],
          correct: 3,
          hint: 'It is a native coinage that won — not the word for browser, computer or screen.',
          explanation: 'sučelje. preglednik is browser, računalo computer, zaslon screen.',
        },
      ],
    },
  },

  'knjizevni-stil': {
    worked: [
      {
        title: 'Into the Aorist',
        problem: 'Prepiši u aoristu: Otvorio je prozor i pogledao more.',
        en: 'Rewrite in the aorist: He opened the window and looked at the sea.',
        steps: [
          {
            label: 'Why the aorist',
            text: 'Two sudden completed acts in a narrative — the aorist’s home ground, and it lifts the register.',
          },
          {
            label: 'Form the third person singular',
            text: 'otvoriti → otvori, pogledati → pogleda. The aorist needs no auxiliary.',
          },
          {
            label: 'Hear the difference',
            text: 'In the perfect it reads as reportage; in the aorist, as literature.',
          },
        ],
        answer: 'Otvori prozor i pogleda more.',
      },
      {
        title: 'Whose Question Is It?',
        problem: 'Odlomak: Sjela je na klupu. Zašto joj nitko nije rekao istinu? Tko pita?',
        en: 'A passage: She sat down on the bench. Why had nobody told her the truth? Who is asking?',
        steps: [
          {
            label: 'Look for the frame',
            text: 'No quotation marks and no verb of saying or thinking.',
          },
          {
            label: 'Look at the grammar',
            text: 'Third person (joj) and past tense — the narrator’s grammar.',
          },
          {
            label: 'Look at the content',
            text: 'The narrator is not asking the reader; it is her bewilderment. The character’s thought in the narrator’s grammar is free indirect style.',
          },
        ],
        answer: 'Junakinja — to je slobodni neupravni govor.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni imperfektom (trajno stanje): Starac sjedaše pred kućom i ___. (šutjeti)',
          options: ['šutjaše', 'šutje', 'šutio', 'šuti'],
          correct: 0,
          hint: 'A sustained past state, matching sjedaše — the same tense, not the sudden one.',
          explanation: 'šutjaše — the imperfect, like sjedaše.',
        },
        {
          q: 'U romanu koji se događa u Istri starica kaže: Ča ti je? Što je to?',
          options: [
            'A printing error',
            'Dialect used to place the character',
            'The narrator’s own voice',
            'A mistake the editor missed',
          ],
          correct: 1,
          hint: 'An author who gives one character a regional form is telling you something about her.',
          explanation: 'Čakavian dialogue places her by region, class and generation in one line.',
        },
        {
          q: 'Dopuni aoristom, 1. lice jednine: Tada ___ pismo i sve mi postade jasno. (pročitati)',
          options: ['pročita', 'pročitaše', 'pročitah', 'pročitao'],
          correct: 2,
          hint: 'The narrator is "I". The first person singular aorist ends in -h.',
          explanation:
            'pročitah — 1st person singular aorist. pročita is 3rd person; pročitao needs an auxiliary.',
        },
        {
          q: 'Koja rečenica spaja aorist i inverziju?',
          options: [
            'Tišina je nastala.',
            'Nastala je tišina.',
            'Tišina nastaje.',
            'Nastade tišina.',
          ],
          correct: 3,
          hint: 'The verb comes first AND carries no auxiliary.',
          explanation: 'Nastade tišina — aorist, with the event foregrounded by inversion.',
        },
      ],
    },
  },

  'razgovorni-stil': {
    worked: [
      {
        title: 'A Question With No li',
        problem: 'Pretvori u opušteni govor: Dolaziš li sutra na utakmicu?',
        en: 'Make it relaxed speech: Are you coming to the match tomorrow?',
        steps: [
          {
            label: 'Who is asking whom?',
            text: 'A friend, casually. li is not wrong, but in relaxed talk it sounds studied.',
          },
          {
            label: 'Let the intonation work',
            text: 'Speech asks with the rising voice alone.',
          },
          {
            label: 'Drop li, keep the rest',
            text: 'Word order stays; only the particle goes.',
          },
        ],
        answer: 'Dolaziš sutra na utakmicu?',
      },
      {
        title: 'Repairing Register Drift',
        problem: 'Popravi e-mail klijentu: Ajde, pošaljite mi ugovor, nema veze ako kasni.',
        en: 'Fix an email to a client: Come on, send me the contract, never mind if it’s late.',
        steps: [
          {
            label: 'Find the colloquial markers',
            text: 'ajde and nema veze belong to conversation; in a business email they read as carelessness, not warmth.',
          },
          {
            label: 'Set the register',
            text: 'A client: V-form, capitalised in writing to one person, with a polite formula — molim Vas da…',
          },
          {
            label: 'Rephrase the concession',
            text: '"Never mind if it is late" becomes a formal understanding: razumijem ako dođe do kašnjenja.',
          },
        ],
        answer: 'Molim Vas da mi pošaljete ugovor. Razumijem ako dođe do manjeg kašnjenja.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Gdje smiješ napisati "ajde"?',
          options: [
            'u poruci prijatelju',
            'u molbi za posao',
            'u znanstvenom radu',
            'u dopisu banci',
          ],
          correct: 0,
          hint: 'The colloquial register is legitimately written in a few places only.',
          explanation: 'In a message to a friend. Anywhere formal it reads as drift.',
        },
        {
          q: 'Koji je skraćeni govorni oblik glagola "hoću"?',
          options: ['oću', 'hoćem', 'ću', 'hoćeš'],
          correct: 0,
          hint: 'Speech drops the initial h and keeps the rest of the word.',
          explanation: 'oću — recognise it in listening, do not write it outside dialogue.',
        },
        {
          q: 'Dopuni opušteno: ___, ne brini, riješit ćemo to.',
          options: ['Nije veza', 'Nema veze', 'Nema važno', 'Nije važnost'],
          correct: 1,
          hint: 'The universal "never mind" is built on nema + a genitive.',
          explanation: 'Nema veze — the fixed phrase. The others are calques that no speaker uses.',
        },
        {
          q: 'Kolega ti u poruci piše: Dolaziš? Koji odgovor ostaje u istom registru?',
          options: [
            'Potvrđujem svoj dolazak.',
            'Da, dolazim, s poštovanjem.',
            'Obavještavam Vas da dolazim.',
            'Dolazim, ajde.',
          ],
          correct: 3,
          hint: 'Match the relaxed register of the question; do not switch into an office letter.',
          explanation: 'Dolazim, ajde. — the others are formal formulas dropped into a chat.',
        },
      ],
    },
  },

  'stari-tekstovi': {
    worked: [
      {
        title: 'Aorists Into Modern Croatian',
        problem: 'Prepričaj suvremeno: Kad dođoše do mora, sjedoše na obalu.',
        en: 'Retell in modern Croatian: When they came to the sea, they sat down on the shore.',
        steps: [
          {
            label: 'Read the verbs first',
            text: 'dođoše and sjedoše end in -oše: the aorist, third person plural.',
          },
          {
            label: 'Map to the perfect',
            text: 'dođoše → su došli; sjedoše → su sjeli.',
          },
          {
            label: 'Place the clitics',
            text: 'In each clause su goes second: Kad su došli…, sjeli su…',
          },
        ],
        answer: 'Kad su došli do mora, sjeli su na obalu.',
      },
      {
        title: 'Pre-Gaj Spelling',
        problem: 'Napiši suvremeno: Csudna bijaše ta noch.',
        en: 'Write in modern spelling: That night was strange.',
        steps: [
          {
            label: 'Sound out the digraphs',
            text: 'cs stands for č, ch for ć: csudna → čudna, noch → noć.',
          },
          {
            label: 'Identify the verb',
            text: 'bijaše is the imperfect of biti — a sustained past state, not a new word.',
          },
          {
            label: 'Modernise',
            text: 'bijaše → je bila, agreeing with noć (feminine).',
          },
        ],
        answer: 'Čudna je bila ta noć.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Stari tekst ima "kucha". Koja je to riječ?',
          options: ['kuća', 'kuča', 'kuha', 'kusa'],
          correct: 0,
          hint: 'In this spelling, ch stands for the softer of the two ch-sounds.',
          explanation: 'kuća — ch = ć in pre-Gaj Hungarian-style spelling.',
        },
        {
          q: 'Što znači "jur" u rečenici: Jur je svanulo.',
          options: ['još', 'već', 'uvijek', 'tek'],
          correct: 1,
          hint: 'The dawn has come — and the word tells you it has happened sooner than expected.',
          explanation: 'jur = već (already).',
        },
        {
          q: 'Dopuni imperfektom od biti: Djeca ___ gladna i umorna.',
          options: ['bijaše', 'bijah', 'bijahu', 'bijasmo'],
          correct: 2,
          hint: 'djeca takes a plural verb, in the third person.',
          explanation:
            'Djeca bijahu gladna — third person plural imperfect, with the -a adjectives djeca always takes.',
        },
        {
          q: 'Koji je od ovih oblika aorist?',
          options: ['pisaše', 'reče', 'bijaše', 'gledaše'],
          correct: 1,
          hint: 'Three of these end in -aše and describe a sustained state. Find the sudden completed act.',
          explanation: 'reče — aorist of reći. The other three are imperfects.',
        },
      ],
    },
  },

  'sinteza-izvora': {
    worked: [
      {
        title: 'Common Ground First',
        problem:
          'Izvještaj A: turizam raste zbog nižih cijena. Izvještaj B: turizam raste zbog novih letova. Napiši prvu rečenicu sinteze.',
        en: 'Report A: tourism is growing because of lower prices. Report B: because of new flights. Write the first sentence of a synthesis.',
        steps: [
          {
            label: 'Find what they share',
            text: 'Both say tourism is growing. That is the common ground.',
          },
          {
            label: 'Find where they split',
            text: 'They disagree only on the cause.',
          },
          {
            label: 'Order it',
            text: 'Agreement first, then the divergence, in one sentence — organised by idea, not by source.',
          },
        ],
        answer: 'Oba se izvještaja slažu da turizam raste, ali se razilaze oko uzroka.',
      },
      {
        title: 'The Divergence Frame',
        problem: 'Splitska studija bilježi pad, osječka ne. Izrazi razliku jednom rečenicom.',
        en: 'The Split study records a decline; the Osijek one does not. Express the difference in one sentence.',
        steps: [
          {
            label: 'Choose the frame',
            text: 'za razliku od X, Y… marks divergence.',
          },
          {
            label: 'Get the case right',
            text: 'od takes the genitive: za razliku od splitske studije.',
          },
          {
            label: 'Avoid repetition',
            text: 'The second source can drop studija: osječka ne nalazi pad.',
          },
        ],
        answer: 'Za razliku od splitske studije, osječka ne nalazi pad.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Autori se slažu ___ dijagnoze, ali ne i oko lijeka.',
          options: ['oko', 'o', 'u', 's'],
          correct: 0,
          hint: 'The second half of the sentence repeats the preposition you need.',
          explanation: 'slagati se oko + genitive, mirrored by razilaziti se oko.',
        },
        {
          q: 'Koja je rečenica sinteza, a ne popis sažetaka?',
          options: [
            'Prvi izvor kaže da su cijene porasle. A drugi autor kaže da će rast trajati.',
            'Prvi izvor govori o cijenama, a onda drugi izvor govori o rastu.',
            'Svi se izvori slažu da su cijene porasle; razilaze se oko toga koliko će rast trajati.',
            'Evo što kaže prvi izvor, a evo i što kaže drugi.',
          ],
          correct: 2,
          hint: 'A synthesis is organised by idea: one point, and what every source says about it.',
          explanation:
            'Svi se izvori slažu…; razilaze se… — common ground, then divergence. The others walk through the sources one by one.',
        },
        {
          q: 'Koja rečenica prikazuje prazninu kao nalaz?',
          options: [
            'Izvori razmatraju mnogo toga.',
            'Nijedan izvor ne razmatra troškove održavanja.',
            'Troškovi održavanja su važni.',
            'Neki izvori možda razmatraju troškove.',
          ],
          correct: 1,
          hint: 'The result only a person who read everything can supply is what nobody addressed.',
          explanation: 'Nijedan izvor ne razmatra… — the gap reported as a finding.',
        },
        {
          q: 'Dopuni: Razlika je prije u naglasku ___ u sadržaju.',
          options: ['od', 'kao', 'već', 'nego'],
          correct: 3,
          hint: 'prije, meaning "rather", pairs with the same comparative word as više or bolje.',
          explanation: 'prije… nego — the difference is one of emphasis rather than substance.',
        },
      ],
    },
  },

  'rekonstrukcija-argumenta': {
    worked: [
      {
        title: 'Premise and Conclusion',
        problem: 'Rekonstruiraj: Budući da mladi čitaju manje, knjižnice treba zatvoriti.',
        en: 'Reconstruct: Since young people read less, libraries should be closed.',
        steps: [
          {
            label: 'Find the premise',
            text: 'What is assumed as given: mladi čitaju manje.',
          },
          {
            label: 'Find the conclusion',
            text: 'What is drawn from it: knjižnice treba zatvoriti.',
          },
          {
            label: 'Find the hidden step',
            text: 'The move needs an unstated link — that libraries exist only to lend books to the young. Name it; that is where an objection will land.',
          },
          {
            label: 'Use the formulas',
            text: 'polaziti od pretpostavke (genitive after od), iz toga zaključuje.',
          },
        ],
        answer:
          'Autor polazi od pretpostavke da mladi čitaju manje; iz toga zaključuje da knjižnice treba zatvoriti.',
      },
      {
        title: 'Marking Your Own Voice',
        problem: 'Nakon rekonstrukcije uvedi vlastiti prigovor tako da čitatelj zna tko govori.',
        en: 'After the reconstruction, introduce your own objection so the reader knows who is speaking.',
        steps: [
          {
            label: 'Close the reconstruction',
            text: 'A boundary marker: Toliko o njegovu stajalištu.',
          },
          {
            label: 'Locate the objection',
            text: 'Not "he is wrong" in general, but at one step — here the unstated link.',
          },
          {
            label: 'Place the clitic',
            text: 'Moj je prigovor… — je after the first word.',
          },
        ],
        answer:
          'Toliko o njegovu stajalištu. Moj je prigovor u prešutnoj pretpostavci da knjižnice služe samo za posudbu knjiga.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koja rečenica provjerava rekonstrukciju prije prigovora?',
          options: [
            'Ako sam Vas dobro razumio, tvrdite da je problem u cijeni — je li tako?',
            'Niste u pravu.',
            'To je potpuno pogrešno.',
            'Svi znaju da je problem u cijeni.',
          ],
          correct: 0,
          hint: 'Confirm what the other person said before objecting to it.',
          explanation:
            'Ako sam Vas dobro razumio… je li tako? — it protects you from refuting something nobody said.',
        },
        {
          q: 'U rečenici "Budući da su troškovi porasli, projekt treba odgoditi" što je zaključak?',
          options: ['troškovi su porasli', 'projekt treba odgoditi', 'budući da', 'nema zaključka'],
          correct: 1,
          hint: 'The premise is introduced by the connective; the conclusion is what follows from it.',
          explanation:
            'projekt treba odgoditi is the conclusion; troškovi su porasli is the premise.',
        },
        {
          q: 'Kojom rečenicom uvodiš tuđi argument prije nego što ga odbaciš?',
          options: [
            'Najslabija točka toga argumenta je…',
            'Taj je argument očito besmislen jer…',
            'Najjača verzija toga argumenta bila bi…',
            'Autor, naravno, griješi kad…',
          ],
          correct: 2,
          hint: 'A reader trusts a rejection more when the position was strengthened first.',
          explanation:
            'Najjača verzija toga argumenta bila bi… — attacking a convenient version costs credibility.',
        },
        {
          q: 'Dopuni: Toliko o ___ stajalištu. (njezin)',
          options: ['njezin', 'njezina', 'njezinim', 'njezinu'],
          correct: 3,
          hint: 'o takes the locative here, and the possessive agrees with stajalište.',
          explanation: 'o njezinu stajalištu — locative singular.',
        },
      ],
    },
  },

  'precizno-nijansiranje': {
    worked: [
      {
        title: 'Two Kinds of Knowing',
        problem: 'Prevedi: I know her husband, but I don’t know what he does.',
        en: 'Translate into Croatian.',
        steps: [
          {
            label: 'Knowing a person',
            text: 'Acquaintance with a person is poznavati: poznajem njezina muža.',
          },
          {
            label: 'Knowing a fact',
            text: 'What he does for a living is a fact: znati.',
          },
          {
            label: 'The idiom for a job',
            text: '"What he does" is čime se bavi — baviti se takes the instrumental.',
          },
        ],
        answer: 'Poznajem njezina muža, ali ne znam čime se bavi.',
      },
      {
        title: 'Testing by Collocation',
        problem: 'Prevedi: We must take into account that the committee made a decision yesterday.',
        en: 'Translate into Croatian.',
        steps: [
          {
            label: 'Take into account',
            text: 'Not "uzeti u račun" word for word: the fixed pairing is voditi računa o + locative.',
          },
          {
            label: 'Make a decision',
            text: 'Decisions are not "made" (napraviti) in Croatian: donijeti odluku.',
          },
          {
            label: 'Join them',
            text: 'o tome da… introduces the fact to be taken into account.',
          },
        ],
        answer: 'Moramo voditi računa o tome da je odbor jučer donio odluku.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Ne ___ plesati — nikad to nisam naučio.',
          options: ['mogu', 'znam', 'poznajem', 'umijem se'],
          correct: 1,
          hint: 'The reason given is never having learned, not today’s circumstances.',
          explanation:
            'Ne znam plesati — an acquired skill. Ne mogu would mean something prevents it now.',
        },
        {
          q: 'Dopuni kolokaciju: Ministar je jučer ___ govor u Saboru.',
          options: ['dao', 'napravio', 'održao', 'rekao'],
          correct: 2,
          hint: 'A speech is neither "given" nor "made" in Croatian; it takes the verb used for lectures and meetings too.',
          explanation: 'održati govor. dati govor and napraviti govor are calques from English.',
        },
        {
          q: 'U liječničkom izvješću: Pacijenta je pregledao ___.',
          options: ['doktorčić', 'medicinar', 'doktor', 'liječnik'],
          correct: 3,
          hint: 'A report takes the professional standard term, not the everyday one.',
          explanation:
            'liječnik is the professional term; doktor is everyday speech and an academic title; a medicinar is a medical student.',
        },
        {
          q: 'Dopuni: Dugo je ___ kroz prozor, ali nikoga nije ___.',
          options: [
            'gledala / vidjela',
            'vidjela / gledala',
            'gledala / gledala',
            'vidjela / vidjela',
          ],
          correct: 0,
          hint: 'One verb directs attention; the other perceives.',
          explanation: 'gledala (watched, looked) / vidjela (saw, perceived).',
        },
      ],
    },
  },

  'spontani-govor': {
    worked: [
      {
        title: 'Buying Time, Then a Structure',
        problem: 'Neočekivano pitanje: Što mislite o novom zakonu? Kupi vrijeme i najavi odgovor.',
        en: 'An unexpected question: What do you think of the new law? Buy time and announce your answer.',
        steps: [
          {
            label: 'A real filler',
            text: 'pa — not a translated "um".',
          },
          {
            label: 'Frame while you think',
            text: 'da budem iskren buys a second and signals that an answer is coming.',
          },
          {
            label: 'Commit to two points',
            text: 'rekao bih dvije stvari forces you to finish and tells the listener when you are done.',
          },
          {
            label: 'Deliver both',
            text: 'prvo… drugo… — two short points you can actually complete.',
          },
        ],
        answer:
          'Pa, da budem iskren, rekao bih dvije stvari: prvo, zakon je potreban; drugo, rokovi su prekratki.',
      },
      {
        title: 'Repair in Place',
        problem:
          'Rekao si "Sastanak je u utorak…", a zapravo je u srijedu ujutro. Popravi bez ponovnog početka.',
        en: 'You said "The meeting is on Tuesday…", but it is actually Wednesday morning. Repair it without restarting.',
        steps: [
          {
            label: 'Do not go back',
            text: 'Restarting the sentence signals you lost control of it.',
          },
          {
            label: 'Use a repair word',
            text: 'odnosno ("or rather") keeps the sentence going.',
          },
          {
            label: 'Sharpen it',
            text: 'točnije rečeno makes the correction sound like precision, not a stumble.',
          },
        ],
        answer: 'Sastanak je u utorak, odnosno, točnije rečeno, u srijedu ujutro.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dopuni: Na to ću se ___ za minutu.',
          options: ['vratiti', 'vraćati', 'povratiti', 'vratit'],
          correct: 0,
          hint: 'One return, later — perfective, in the full infinitive after the clitic ću.',
          explanation:
            'ću se vratiti — perfective, and the infinitive keeps its -i when it follows ću (only vratit ću drops it). vraćati is imperfective; povratiti means something else entirely.',
        },
        {
          q: 'Koja je rečenica popravak u hodu, a ne ponovni početak?',
          options: [
            'Cijena je… ne, čekajte, ispočetka. Cijena je porasla za dvanaest posto.',
            'Cijena je porasla za deset, odnosno, točnije rečeno, za dvanaest posto.',
            'Cijena je porasla. Ili nije. Ne znam.',
            'Cijena je, you know, porasla za deset posto.',
          ],
          correct: 1,
          hint: 'The repair words let the sentence continue instead of starting again.',
          explanation: 'odnosno, točnije rečeno — correction without a restart.',
        },
        {
          q: 'Koliko točaka najaviti kad odgovaraš bez pripreme?',
          options: [
            'five, to seem thorough',
            'none — just start talking',
            'two — a promise you can keep',
            'three, always',
          ],
          correct: 2,
          hint: 'The announced structure is only useful if you can finish it under pressure.',
          explanation:
            'Two. Three is a risk; announcing none leaves the listener unsure when you are done.',
        },
        {
          q: 'Dopuni: Ako sam dobro ___ pitanje, zanima vas cijena.',
          options: ['razumijem', 'razumjeo', 'shvaćao', 'razumio'],
          correct: 3,
          hint: 'A completed act of understanding, in the past, in the l-participle.',
          explanation: 'razumio — the past participle of razumjeti; razumjeo is a misspelling.',
        },
      ],
    },
  },

  'prevodjenje-strucno': {
    worked: [
      {
        title: 'Legal "Shall"',
        problem: 'Prevedi odredbu: The Tenant shall return the keys on the last day of the lease.',
        en: 'Translate the clause into Croatian.',
        steps: [
          {
            label: 'Decide the brief',
            text: 'A contract: legal equivalence comes first, elegance second.',
          },
          {
            label: 'What "shall" means',
            text: 'Obligation, not a prediction: je dužan + infinitive, never hoće.',
          },
          {
            label: 'The time expression',
            text: '"On the last day" is a bare genitive of time: posljednjeg dana.',
          },
        ],
        answer: 'Najmoprimac je dužan vratiti ključeve posljednjeg dana najma.',
      },
      {
        title: 'Adjusting the Register',
        problem:
          'Prevedi e-mail novom poslovnom partneru: Hi John! Thanks so much for the quick reply — can’t wait to work together!',
        en: 'Translate an email to a new business partner.',
        steps: [
          {
            label: 'Decide the brief',
            text: 'The effect on a Croatian business reader, not a word-for-word rendering.',
          },
          {
            label: 'Adjust the warmth',
            text: 'English business email is warmer. Copied literally ("Bog, Johne!") it reads as over-familiar.',
          },
          {
            label: 'Use the Croatian formulas',
            text: 'Poštovani gospodine + surname, the capitalised Vam, and the closing radujemo se suradnji.',
          },
        ],
        answer:
          'Poštovani gospodine Smith, zahvaljujemo Vam na brzom odgovoru i radujemo se suradnji.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Prevedi: The Buyer shall pay the price within 8 days.',
          options: [
            'Kupac hoće platiti cijenu u roku od 8 dana.',
            'Kupac je dužan platiti cijenu u roku od 8 dana.',
            'Kupac bi trebao platiti cijenu u roku od 8 dana.',
            'Kupac je dužan platiti cijenu u roku od 8 dane.',
          ],
          correct: 1,
          hint: 'Legal "shall" is obligation, and u roku od takes a genitive.',
          explanation:
            'je dužan platiti… u roku od 8 dana. hoće is will/want, bi trebao is advice rather than a binding duty, dane is the wrong case.',
        },
        {
          q: 'Kako za engleske čitatelje pošteno prevesti "HZZO"?',
          options: [
            'HZZO (the Croatian Health Insurance Fund)',
            'the NHS',
            'Medicare',
            'a hospital',
          ],
          correct: 0,
          hint: 'Substituting the reader’s own institution tells them something false.',
          explanation:
            'Keep the term and gloss it once. The NHS and Medicare are different institutions.',
        },
        {
          q: 'Koja rečenica zvuči kao hrvatski tekst, a ne kao kalk?',
          options: [
            'Mi smo poslali Vama račun jučer.',
            'Račun smo Vam poslali jučer.',
            'Mi smo jučer poslali račun Vama.',
            'Poslali mi smo Vam račun jučer.',
          ],
          correct: 1,
          hint: 'Croatian needs neither the subject pronoun nor the full object pronoun here, and the clitics go second.',
          explanation:
            'Račun smo Vam poslali jučer. The others copy English order and full pronouns, or misplace the clitic.',
        },
        {
          q: 'Prevedi: We have already signed the contract.',
          options: [
            'Mi imamo već potpisali ugovor.',
            'Već smo potpisivali ugovor.',
            'Već smo potpisali ugovor.',
            'Smo već potpisali ugovor.',
          ],
          correct: 2,
          hint: 'The English present perfect becomes the Croatian perfect plus an adverb — with the right aspect, and no clitic in first place.',
          explanation:
            'Već smo potpisali ugovor — perfective, one completed signing. imamo copies English have; smo cannot open a sentence.',
        },
      ],
    },
  },

  'uredjivanje-teksta': {
    worked: [
      {
        title: 'Two Corrections, No Preferences',
        problem: 'Lektoriraj: Deset zaposlenika su dobili nagradu, jer su bili najbolji.',
        en: 'Edit: Ten employees received an award because they were the best.',
        steps: [
          {
            label: 'Agreement',
            text: 'deset is a quantity subject: the verb is neuter singular — dobilo je, not su dobili.',
          },
          {
            label: 'The comma',
            text: 'The jer-clause FOLLOWS the main clause, so no comma. That is a rule, not a taste.',
          },
          {
            label: 'Leave the rest',
            text: 'jer su bili najbolji is fine — its subject is "they", which is plural.',
          },
          {
            label: 'Give the reasons',
            text: 'One line each: quantity agreement; no comma in normal clause order.',
          },
        ],
        answer: 'Deset zaposlenika dobilo je nagradu jer su bili najbolji.',
      },
      {
        title: 'The Change-Nothing Test',
        problem:
          'Autor je napisao: Grad je zimi tih. Ti bi napisao: Zimi je grad tih. Mijenjaš li?',
        en: 'The author wrote "The town is quiet in winter" with one word order; you would use another. Do you change it?',
        steps: [
          {
            label: 'Is it wrong?',
            text: 'No: the clitic is in second position and every word agrees.',
          },
          {
            label: 'Or merely not mine?',
            text: 'The order is the author’s choice of topic — the town, not the season.',
          },
          {
            label: 'Decide',
            text: 'Lektura fixes the language, never the voice. Leave it.',
          },
        ],
        answer: 'Ostavljam: Grad je zimi tih.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koja je promjena ispravak, a ne stvar ukusa?',
          options: [
            'Ispravio sam "Mislim, da je tako" u "Mislim da je tako".',
            'Zamijenio sam "ipak" s "ali".',
            'Promijenio sam "Grad je zimi tih" u "Zimi je grad tih".',
            'Zamijenio sam "kuća" s "dom".',
          ],
          correct: 0,
          hint: 'Only one change fixes something a rule forbids; the rest swap one defensible choice for another.',
          explanation: 'No comma before complement da — a rule. The others are preferences.',
        },
        {
          q: 'Tekst miješa "Poštovani, dostavljamo…" i "ajde, javite se". Čemu to pripada?',
          options: [
            'korektura — a typo',
            'lektura — register drift',
            'redaktura — a structural cut',
            'nothing — leave it',
          ],
          correct: 1,
          hint: 'Consistency of register is part of the language editor’s mandate.',
          explanation: 'Register drift is a lektura matter — on the list of the frequent catches.',
        },
        {
          q: 'Koja je rečenica pravilna?',
          options: [
            'Autor je mu to htio reći.',
            'Autor mu to je htio reći.',
            'Autor mu je to htio reći.',
            'Autor je to mu htio reći.',
          ],
          correct: 2,
          hint: 'The third-person je is the one auxiliary that goes to the END of the clitic cluster.',
          explanation: 'Autor mu je to htio reći — mu je, with je last; to is not a clitic.',
        },
        {
          q: 'Što smije redaktura, a lektura ne?',
          options: [
            'fix case endings',
            'fix commas',
            'fix typos',
            'cut and restructure the argument, with the author',
          ],
          correct: 3,
          hint: 'Two of the three levels touch only the language.',
          explanation: 'Redaktura works on structure and argument — with the author, not to them.',
        },
      ],
    },
  },

  'frazeologija-dubinska': {
    worked: [
      {
        title: 'Half a Proverb',
        problem: 'Baka pogleda tvoju malu ušteđevinu i kaže samo: Iz malih potoka… Što je rekla?',
        en: 'Grandmother looks at your small savings and says only: "From small streams…" What has she said?',
        steps: [
          {
            label: 'Recognise the opening',
            text: 'Iz malih potoka nastaju velike rijeke — great rivers come from small streams.',
          },
          {
            label: 'She said all of it',
            text: 'Stopping halfway is the normal delivery; the ending is understood.',
          },
          {
            label: 'Apply it',
            text: 'Small beginnings grow: keep saving.',
          },
        ],
        answer: 'Iz malih potoka nastaju velike rijeke — i mala ušteđevina s vremenom naraste.',
      },
      {
        title: 'Choosing an Allusion',
        problem:
          'Novinski: opiši beskrajan, uzaludan posao krpanja cesta koje se odmah opet oštete.',
        en: 'In journalistic style: describe the endless, futile job of patching roads that are damaged again at once.',
        steps: [
          {
            label: 'Name the idea',
            text: 'Endless futile labour.',
          },
          {
            label: 'Find the allusion',
            text: 'Sisyphus, rolling the stone uphill for ever: sizifov posao.',
          },
          {
            label: 'Use it once, unexplained',
            text: 'Serious writing assumes the reader knows it — and one allusion is enough.',
          },
        ],
        answer: 'Krpanje tih cesta pravi je sizifov posao.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Netko kaže samo: Sto ljudi… Što je rekao?',
          options: [
            'Crowds are dangerous',
            'People differ — accept it',
            'A hundred is too many',
            'Everyone agrees',
          ],
          correct: 1,
          hint: 'The unsaid second half pairs a hundred people with a hundred temperaments.',
          explanation: 'Sto ljudi, sto ćudi — accepting difference.',
        },
        {
          q: 'Dopuni: Taj je zakon bio pravi ___ konj: izgledao je bezazleno, a otvorio je vrata zlouporabi.',
          options: ['Trojanski', 'trojanskog', 'trojanski', 'trojanskim'],
          correct: 2,
          hint: 'The adjective agrees with konj in the nominative, and Croatian adjectives from place names are lower case.',
          explanation: 'pravi trojanski konj — nominative, lower case.',
        },
        {
          q: 'Dopuni: Nakon deset godina u inozemstvu vratio se kući kao pravi ___.',
          options: ['izgubljenog sina', 'izgubljenim sinom', 'izgubljenom sinu', 'izgubljeni sin'],
          correct: 3,
          hint: 'After kao comparing the subject to something, the noun stays in the subject’s case.',
          explanation: 'kao pravi izgubljeni sin — the biblical prodigal son, in the nominative.',
        },
        {
          q: 'Što znači "muljati"?',
          options: [
            'to scheme, to fiddle things dishonestly',
            'to make wine',
            'to wade through mud',
            'to speak slowly',
          ],
          correct: 0,
          hint: 'The image comes from the wine press — but the meaning is about honesty, not wine.',
          explanation:
            'muljati — to scheme or fiddle; a local expression with the press inside it.',
        },
      ],
    },
  },

  'dijalekti-dubinski': {
    worked: [
      {
        title: 'Placing a Speaker',
        problem: 'Čuješ: Nisan bil doma. Odredi narječje i reci standardno.',
        en: 'You hear "Nisan bil doma." Identify the dialect and say it in the standard.',
        steps: [
          {
            label: 'The negated auxiliary',
            text: 'nisan — a final m has become n. That settles čakavian rather than kajkavian.',
          },
          {
            label: 'The participle',
            text: 'bil keeps the final -l where the standard has -o: bio.',
          },
          {
            label: 'Translate',
            text: 'Standard: nisam bio kod kuće (doma is fine in speech too).',
          },
        ],
        answer: 'Nisam bio kod kuće.',
      },
      {
        title: 'The Kajkavian Future',
        problem: 'Reci standardno kajkavsko: Sutra bum došel.',
        en: 'Put the kajkavian "Sutra bum došel" into the standard.',
        steps: [
          {
            label: 'Spot the auxiliary',
            text: 'bum is the kajkavian future auxiliary; it takes the l-participle.',
          },
          {
            label: 'The participle',
            text: 'došel corresponds to standard došao.',
          },
          {
            label: 'Rebuild in the standard',
            text: 'The standard future is the infinitive + ću: doći ću. After sutra, the clitic goes second.',
          },
        ],
        answer: 'Sutra ću doći.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Stari ribar s Brača kaže "mliko". Koji je to refleks jata?',
          options: ['ikavski', 'ijekavski', 'kajkavski', 'pogreška u izgovoru'],
          correct: 0,
          hint: 'The old yat came out as one particular vowel in this speaker’s word.',
          explanation:
            'ikavski — yat as i, the rule on the islands. The standard has the ijekavian mlijeko.',
        },
        {
          q: 'Što NE postoji u kajkavskom?',
          options: [
            'budućnost s bum',
            'aorist i imperfekt',
            'naglasak pomaknut naprijed',
            'germanizmi poput farba',
          ],
          correct: 1,
          hint: 'The biggest surprise for a standard-trained learner is two tenses that are simply absent.',
          explanation: 'Kajkavian has no aorist or imperfect; the other three are its hallmarks.',
        },
        {
          q: 'Koja riječ otkriva mletački utjecaj u čakavskom?',
          options: ['špancirati', 'cajger', 'kužina', 'farba'],
          correct: 2,
          hint: 'Three of these come from German, via the north-west.',
          explanation:
            'kužina (kitchen) is Venetian; špancirati, cajger and farba are German loans in kajkavian.',
        },
        {
          q: 'Čakavsko "Nisan te vidil" — kako glasi standardno?',
          options: ['Nisan te vidio.', 'Nisam te vidil.', 'Nis te vidio.', 'Nisam te vidio.'],
          correct: 3,
          hint: 'Both dialect features have to go: the final n of the auxiliary and the final -l of the participle.',
          explanation: 'Nisam te vidio. The other three keep one dialect feature each.',
        },
      ],
    },
  },

  'jezik-i-drustvo': {
    worked: [
      {
        title: 'A First Email to a Professor',
        problem: 'Prvi put pišeš profesorici Horvat, koju ne poznaješ. Napiši prvu rečenicu.',
        en: 'You are writing for the first time to Professor Horvat (f.), whom you have not met. Write the first sentence.',
        steps: [
          {
            label: 'Choose the register',
            text: 'Formal: Vi, capitalised because you are writing to one person, and full diacritics.',
          },
          {
            label: 'The address',
            text: 'Poštovana + vocative profesorice; her consonant-final surname does not decline: Horvat.',
          },
          {
            label: 'State the purpose',
            text: 'obraćam Vam se s molbom — the conventional opening of a request.',
          },
        ],
        answer: 'Poštovana profesorice Horvat, obraćam Vam se s molbom za konzultacije.',
      },
      {
        title: 'When the Boss Offers Ti',
        problem: 'Šefica nakon sastanka kaže: Možemo na ti? Odgovori i zamoli je zapisnik.',
        en: 'After the meeting your boss says: "Shall we switch to ti?" Accept, and ask her for the minutes.',
        steps: [
          {
            label: 'Whose move was it?',
            text: 'The senior person proposed it, which is exactly how it should happen.',
          },
          {
            label: 'Accept warmly',
            text: 'Naravno, može — relaxed acceptance.',
          },
          {
            label: 'Switch cleanly',
            text: 'From now on ti forms only: hoćeš li, not hoćete li. Drifting back and forth reads as uncertainty.',
          },
        ],
        answer: 'Naravno, može. Hoćeš li mi poslati zapisnik?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koji je oblik primjeren u e-mailu klijentu?',
          options: [
            'postovani, saljemo ponudu',
            'Poštovani, u privitku šaljemo ponudu.',
            'Bog, evo ponude, javi.',
            'poštovani, šaljemo Vam ponudu',
          ],
          correct: 1,
          hint: 'Anything professional keeps its diacritics and its capital letters.',
          explanation:
            'Poštovani, u privitku šaljemo ponudu. The others drop diacritics, drop the capital, or drift into a message to a friend.',
        },
        {
          q: 'Mlađi kolega starijem ravnatelju na prvom sastanku kaže: Možemo na ti? Kako to zvuči?',
          options: [
            'Perfectly polite',
            'Presumptuous — it is the senior person’s move',
            'Required by the norm',
            'A dialect feature',
          ],
          correct: 1,
          hint: 'Ask who normally makes this offer.',
          explanation: 'The switch to ti is the older or more senior person’s to propose.',
        },
        {
          q: 'Gdje je izostavljanje dijakritika prihvatljivo?',
          options: [
            'u molbi za posao',
            'u službenom dopisu',
            'u brzoj poruci prijatelju',
            'u diplomskom radu',
          ],
          correct: 2,
          hint: 'Messaging Croatian is its own register, and it is the only one that allows this.',
          explanation:
            'In a quick message to a friend. Anywhere professional it reads as carelessness.',
        },
        {
          q: 'U službenom dopisu: Izvješće pošaljite kao ___.',
          options: ['atačment', 'fajl', 'atač', 'privitak'],
          correct: 3,
          hint: 'The institutional register prefers the native coinage.',
          explanation:
            'privitak — the native term. The anglicisms signal age and setting and belong in speech.',
        },
      ],
    },
  },
};
