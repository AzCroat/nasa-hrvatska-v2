// ═══════════════════════════════════════════════════════════
// C1 CURRICULUM — the expansion to 30 (Wave 5, 2026-08-28)
// ═══════════════════════════════════════════════════════════
//
// WHAT C1 WAS MISSING
// -------------------
// C1's eight lessons were well chosen — clitic ordering, emphasis, the aorist,
// verbal nouns, word formation, collective numbers, idiom and the Croatian /
// Serbian question. What they did not cover is most of what the level is
// defined by: understanding implicit meaning, using the language flexibly for
// academic and professional purposes, and producing well-structured text with
// controlled cohesion.
//
//   * no VERB GOVERNMENT. Which case a verb demands is unpredictable from
//     English and is the single largest remaining source of C1 error —
//     `bojati se` takes the genitive, `vjerovati` the dative, `baviti se` the
//     instrumental, and nothing had ever said so systematically.
//   * no CONDENSATION — the move from "nakon što je došao" to "nakon dolaska"
//     that is the defining feature of formal written Croatian. Without it a
//     learner writes correct sentences that read as speech.
//   * no DISCOURSE PARTICLES. `pa`, `ma`, `baš`, `valjda`, `naime`,
//     `uostalom` carry the implicit meaning the level descriptor names, and a
//     learner who cannot read them misses the attitude in every sentence.
//   * no ACCENT. Croatian has four tonal accents and minimal pairs that turn
//     on them (grad/grâd, luk/lûk), and no lesson at any level mentioned it.
//   * and nothing academic, professional or editorial.
//
// AUTHORING RULES — see CLAUDE.md → Croatian Content Authoring.

/** @type {ReadonlyArray<object>} */
export const LESSONS_C1 = [
  // ─────────────────────────────────────────────────────────
  // Verb Government
  // ─────────────────────────────────────────────────────────
  {
    id: 'verb-government',
    title: 'Verb Government',
    subtitle: 'Which case each verb demands — and why English gives no clue',
    icon: '⚓',
    level: 'C1',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The Largest Remaining Source of Error',
        body: 'By C1 the case endings are automatic. What is not automatic is knowing which case a particular verb wants — and that is arbitrary. "Pomoći" takes the dative, "bojati se" the genitive, "baviti se" the instrumental, and English marks none of these. This is called rekcija, government, and it is learned verb by verb.',
        icon: '⚓',
      },
      {
        type: 'rule',
        title: 'Learn the Verb With Its Case',
        body: 'The practical instruction is simple: never learn a Croatian verb alone. Learn "bojati se + genitive", "vjerovati + dative", "ovisiti o + locative". A verb without its government is a verb you cannot actually use, in the same way a noun without its gender is one you cannot make agree.',
        highlight: 'bojati se + genitive',
      },
      {
        type: 'table',
        title: 'Verbs Taking the Genitive',
        headers: ['Verb', 'English', 'Example'],
        rows: [
          ['bojati se', 'to fear', 'Bojim se mraka.'],
          ['sjećati se', 'to remember', 'Sjećam se toga.'],
          ['riješiti se', 'to get rid of', 'Riješio sam se problema.'],
          ['odreći se', 'to renounce', 'Odrekao se nasljedstva.'],
          ['ticati se', 'to concern', 'To me se ne tiče.'],
          ['čuvati se', 'to beware of', 'Čuvaj se psa.'],
        ],
      },
      {
        type: 'rule',
        title: 'Many of Them Carry Se',
        body: 'Notice a pattern in that table: most genitive-governing verbs are reflexive. It is not a rule you can lean on entirely, but it is a useful hint — when a verb carries "se" and takes an object, the genitive is a good first guess. "Sjećam se tebe", "bojim se toga", "riješio sam se toga".',
        highlight: 'reflexive verbs often take the genitive',
      },
      {
        type: 'table',
        title: 'Dative and Instrumental',
        headers: ['Verb', 'Case', 'Example'],
        rows: [
          ['pomoći', 'dative', 'Pomozi mu.'],
          ['vjerovati', 'dative', 'Ne vjerujem mu.'],
          ['smetati', 'dative', 'Smeta mi buka.'],
          ['radovati se', 'dative', 'Radujem se putovanju.'],
          ['prijetiti', 'dative', 'Prijetili su nam.'],
          ['baviti se', 'instrumental', 'Bavim se sportom.'],
          ['koristiti se', 'instrumental', 'Koristim se rječnikom.'],
          ['upravljati', 'instrumental', 'Upravlja tvrtkom.'],
        ],
      },
      {
        type: 'rule',
        title: 'The Ones English Speakers Get Wrong Most',
        body: 'Four to fix now if they are not already automatic. "Pomoći" is dative — pomozi MU, never "pomozi ga". "Vjerovati" is dative — vjerujem MU. "Radovati se" is dative and means to look forward to — radujem se PUTOVANJU. And "smetati" is dative with the annoyance as subject — smeta MI buka, the noise bothers me.',
        highlight: 'Pomozi mu. Radujem se putovanju.',
      },
      {
        type: 'table',
        title: 'Verb + Preposition + Case',
        headers: ['Construction', 'English'],
        rows: [
          ['ovisiti o + locative', 'to depend on'],
          ['sumnjati u + accusative', 'to doubt'],
          ['utjecati na + accusative', 'to influence'],
          ['sastojati se od + genitive', 'to consist of'],
          ['temeljiti se na + locative', 'to be based on'],
          ['odgovarati na + accusative', 'to answer'],
          ['brinuti se za + accusative', 'to care for'],
        ],
      },
      {
        type: 'rule',
        title: 'The Preposition Is Part of the Verb',
        body: 'For this group the preposition is not optional decoration — "ovisiti" without "o" is unusable, and choosing the wrong preposition changes or destroys the meaning. Treat "ovisiti o", "sumnjati u" and "temeljiti se na" as single lexical items with a case attached, exactly as you would treat an English phrasal verb.',
        highlight: 'ovisiti o + locative',
      },
      {
        type: 'example',
        title: 'Government in Use',
        items: [
          {
            hr: 'Radujem se našem sljedećem susretu.',
            en: 'I am looking forward to our next meeting.',
            note: 'radovati se + dative: susretu',
          },
          {
            hr: 'Sve ovisi o okolnostima.',
            en: 'Everything depends on the circumstances.',
            note: 'ovisiti o + locative',
          },
          {
            hr: 'Ne sjećam se njegova imena.',
            en: 'I do not remember his name.',
            note: 'sjećati se + genitive',
          },
          {
            hr: 'Odluka se temelji na novim podacima.',
            en: 'The decision is based on new data.',
            note: 'temeljiti se na + locative',
          },
          {
            hr: 'Bavi se istraživanjem već deset godina.',
            en: 'She has been doing research for ten years.',
            note: 'baviti se + instrumental',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Otkad se bavi planinarenjem, više se ne boji visine ni lošeg vremena.',
            en: 'Since he took up hiking, he no longer fears heights or bad weather.',
            note: 'baviti se + instrumental; bojati se + genitive (visine, vremena)',
          },
          {
            hr: 'Uspjeh projekta ovisi o tome hoće li nam uprava na vrijeme pomoći.',
            en: 'The success of the project depends on whether management will help us in time.',
            note: 'ovisiti o + locative; pomoći + dative (nam)',
          },
          {
            hr: 'Nisam mu vjerovao, ali sada sumnjam u vlastitu procjenu.',
            en: 'I did not believe him, but now I doubt my own judgement.',
            note: 'vjerovati + dative; sumnjati u + accusative',
          },
          {
            hr: 'Cijeli se plan temelji na podacima koji se sastoje od triju izvora.',
            en: 'The whole plan is based on data that consist of three sources.',
            note: 'temeljiti se na + locative; sastojati se od + genitive',
          },
          {
            hr: 'Smeta li vam ako se koristim vašim rječnikom dok odgovaram na pitanja?',
            en: 'Do you mind if I use your dictionary while I answer the questions?',
            note: 'smetati + dative; koristiti se + instrumental; odgovarati na + accusative',
          },
          {
            hr: 'Odrekao se nasljedstva jer ga se cijela ta priča više nije ticala.',
            en: 'He renounced the inheritance because the whole affair no longer concerned him.',
            note: 'odreći se + genitive; ticati se + genitive (ga)',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Pomozi ___." (Help him.)',
        options: ['ga', 'mu', 'njega', 'njemu je'],
        correct: 1,
        explanation:
          '"Pomoći" governs the dative, so the pronoun is "mu" and never "ga". This is probably the single most common government error English speakers make.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Radujem se ___." (I am looking forward to the trip — putovanje.)',
        options: ['putovanje', 'putovanja', 'putovanju', 'putovanjem'],
        correct: 2,
        explanation:
          '"Radovati se" takes the dative: putovanju. It also means to look FORWARD to, not merely to be glad — which is why it appears constantly at the end of letters.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors recur. English "help him" pulls the accusative, so learners write "pomozi ga" — pomoći is dative: pomozi mu. English "depend on" pulls "na", so learners write "ovisi na tome" — the preposition is o with the locative: ovisi o tome. And "sjećam se to" leaves the neuter unchanged — sjećati se governs the genitive: sjećam se toga.',
        highlight: 'pomozi mu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Bojim se ___." (I am afraid of the dark — mrak.)',
            options: ['mrak', 'mraka', 'mraku', 'mrakom'],
            correct: 1,
            explanation:
              '"Bojati se" governs the genitive: mraka. The accusative, dative and instrumental are all wrong here, however natural "of" feels in English.',
          },
          {
            q: 'Complete: "Smeta ___ buka." (The noise bothers her.)',
            options: ['ju', 'je', 'joj', 'nju'],
            correct: 2,
            explanation:
              '"Smetati" takes the dative and the annoyance is the subject: smeta joj buka. "Ju", "je" and "nju" are accusative forms.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Sve ovisi na vremenu.',
              'Sve ovisi vremena.',
              'Sve ovisi o vremenu.',
              'Sve ovisi u vremenu.',
            ],
            correct: 2,
            explanation:
              '"Ovisiti" is unusable without "o" plus the locative: ovisi o vremenu. English "depend on" tempts "na", and a bare genitive drops the preposition that is part of the verb.',
          },
          {
            q: 'What is wrong with "Radujem se putovanje, jer se bavim fotografija"?',
            options: [
              'nothing — both objects are correct',
              'both nouns need their case: putovanju (dative) and fotografijom (instrumental)',
              'only putovanje is wrong; fotografija is right',
              'the two verbs should swap their cases',
            ],
            correct: 1,
            explanation:
              '"Radovati se" governs the dative (putovanju) and "baviti se" the instrumental (fotografijom). Leaving a noun in the nominative after a governing verb is the error the whole lesson exists to fix.',
          },
          {
            q: '"To mi odgovara." What does it mean?',
            options: [
              'I answer that.',
              'That suits me.',
              'That answers me.',
              'I am responsible for that.',
            ],
            correct: 1,
            explanation:
              'A verb changing case changes its meaning: odgovarati + dative is to suit, odgovarati NA + accusative is to answer, odgovarati ZA + accusative is to be responsible for.',
          },
          {
            q: 'Complete: "Upravlja ___ već pet godina." (She has run the company for five years — tvrtka.)',
            options: ['tvrtku', 'tvrtke', 'tvrtki', 'tvrtkom'],
            correct: 3,
            explanation:
              '"Upravljati" governs the instrumental: upravlja tvrtkom. English "run the company" pulls the accusative, which is the usual slip.',
          },
          {
            q: 'Complete: "Čuvaj se ___!" (Beware of the dog — pas.)',
            options: ['pas', 'psa', 'psu', 'psom'],
            correct: 1,
            explanation:
              '"Čuvati se" is another reflexive verb with the genitive: čuvaj se psa. Note the fleeting a — the stem is ps-.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Verb Government — Key Takeaways',
        points: [
          'Never learn a verb without its case — a verb alone is unusable',
          'Genitive: bojati se, sjećati se, riješiti se, ticati se',
          'Dative: pomoći, vjerovati, smetati, radovati se, prijetiti',
          'Instrumental: baviti se, koristiti se, upravljati',
          'ovisiti O, sumnjati U, temeljiti se NA — the preposition is part of the verb',
          'pomozi MU, not ga — the error to fix first',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Aspect, Fine Distinctions
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-nuance',
    title: 'Aspect, Fine Distinctions',
    subtitle: 'Annulled results, biaspectual verbs, and pairs that mean different things',
    icon: '🔬',
    level: 'C1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Where Aspect Stops Being Mechanical',
        body: 'B1 and B2 gave you the system: imperfective is process, perfective is result. At C1 the interesting cases are the ones where both are grammatical and the choice says something a learner would not otherwise be able to say at all.',
        icon: '🔬',
      },
      {
        type: 'rule',
        title: 'The Annulled Result',
        body: 'This is the sharpest of them. "Otvorio sam prozor" — I opened the window, and it is open. "Otvarao sam prozor" — I opened the window, and it is not open now; I opened it and shut it again. The imperfective of a momentary action implies the result was undone. English needs a whole clause for that; Croatian needs one letter.',
        highlight: 'Otvorio sam / Otvarao sam',
      },
      {
        type: 'table',
        title: 'The Same Event, Two Readings',
        headers: ['Croatian', 'What it implies'],
        rows: [
          ['Otvorio sam prozor.', 'it is open now'],
          ['Otvarao sam prozor.', 'I opened it and closed it again'],
          ['Tko je uzeo knjigu?', 'and still has it'],
          ['Tko je uzimao knjigu?', 'who has been at it'],
          ['Dolazio je Ivan.', 'he came and went'],
          ['Došao je Ivan.', 'he is here'],
        ],
      },
      {
        type: 'rule',
        title: 'Biaspectual Verbs',
        body: 'A small group has one form for both aspects, and context decides. Most verbs in -irati are biaspectual: organizirati, telefonirati, informirati, definirati. So are čuti, vidjeti, ručati and večerati. Čuo sam to — heard once, or used to hear, and nothing in the form tells you which.',
        highlight: 'organizirati · čuti · ručati',
      },
      {
        type: 'rule',
        title: 'Pairs That Are Not Really Pairs',
        body: 'Some apparent aspect pairs have drifted into separate meanings. "Znati" is to know; "saznati" is to find out — a different act, not a completed version of knowing. "Imati" is to have; "dobiti" is to receive. Treating these as pure aspect partners produces sentences that are grammatical and wrong.',
        highlight: 'znati ≠ saznati',
      },
      {
        type: 'rule',
        title: 'The Perfective in General Truths',
        body: 'A perfective present usually reads as future — Napišem pismo means I will write it. But in a general or conditional statement it describes what typically happens: Kad dođeš kući, odmah se opustiš. Ako pojedeš previše, bude ti loše. English uses a plain present for both, so this is a reading skill before it is a production one.',
        highlight: 'Kad dođeš kući, odmah se opustiš.',
      },
      {
        type: 'example',
        title: 'Choosing Deliberately',
        items: [
          {
            hr: 'Tko je otvarao moju poštu?',
            en: 'Who has been opening my post?',
            note: 'imperfective — repeated, and resealed',
          },
          {
            hr: 'Tko je otvorio pismo?',
            en: 'Who opened the letter?',
            note: 'perfective — one act, and it is open',
          },
          {
            hr: 'Jučer je dolazio majstor.',
            en: 'The repairman came yesterday (and left).',
            note: 'the annulled-result reading',
          },
          {
            hr: 'Saznao sam to tek jučer.',
            en: 'I only found that out yesterday.',
            note: 'saznati — an act, not completed knowing',
          },
          {
            hr: 'Kad pročitaš, javi mi.',
            en: 'When you have read it, let me know.',
            note: 'perfective in a future time clause',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Nagovarao sam ga cijelu večer, ali ga nisam nagovorio.',
            en: 'I tried to persuade him all evening, but I did not persuade him.',
            note: 'imperfective = the attempt; perfective = the achieved result',
          },
          {
            hr: 'Sjedajte, molim vas, kava će odmah biti gotova.',
            en: 'Do sit down, please, the coffee will be ready right away.',
            note: 'imperfective imperative — the inviting, polite form',
          },
          {
            hr: 'Jesi li ikad dolazio ovamo zimi, kad je grad prazan?',
            en: 'Have you ever come here in winter, when the town is empty?',
            note: 'imperfective for a habit or an experience, not one act',
          },
          {
            hr: 'Netko je uzimao moj auto: sjedalo je pomaknuto, a spremnik je prazan.',
            en: 'Someone has been using my car: the seat is moved and the tank is empty.',
            note: 'annulled result — the car came back',
          },
          {
            hr: 'Organizirali smo konferenciju prošle godine i organiziramo je opet u svibnju.',
            en: 'We organised the conference last year and are organising it again in May.',
            note: 'organizirati — biaspectual; context alone decides',
          },
          {
            hr: 'Kad se čovjek naspava, svijet mu odjednom izgleda ljepše.',
            en: 'Once a person has had a good sleep, the world suddenly looks nicer to them.',
            note: 'perfective present in a general truth, not a future',
          },
          {
            hr: 'Pisala sam mu tri puta, a napisala sam mu tek jedno kratko pismo.',
            en: 'I set about writing to him three times, but I only wrote him one short letter.',
            note: 'pisati — the process, several attempts; napisati — the one completed',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'The window is open now. Which do you say?',
        options: ['Otvarao sam prozor.', 'Otvorio sam prozor.', 'Otvaram prozor.'],
        correct: 1,
        explanation:
          'The perfective states a completed act whose result stands: otvorio sam. The imperfective would imply you opened it and closed it again.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which verb means "to find out"?',
        options: ['znati', 'saznati', 'poznavati', 'razumjeti'],
        correct: 1,
        explanation:
          '"Saznati" is to find out — a distinct act rather than a completed version of "znati". Treating them as an ordinary aspect pair produces grammatical sentences that say the wrong thing.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The commonest slip is the English past: "I opened the window" becomes "otvarao sam prozor" because the imperfective feels like the neutral past — but it tells a Croatian the window is shut again; a single completed act is otvorio sam. The second is over-perfectivising the polite imperative: "Sjednite!" is a brisk command, while the inviting form is imperfective sjedajte. The third is treating saznati as "znati, completed": "Saznao sam hrvatski" is nonsense — the verb for having learned a language is naučiti, and saznati is only for finding a fact out.',
        highlight: 'otvorio sam',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'The repairman came yesterday and has left. Which do you say?',
            options: [
              'Jučer je došao majstor.',
              'Jučer je dolazio majstor.',
              'Jučer dolazi majstor.',
              'Jučer će doći majstor.',
            ],
            correct: 1,
            explanation:
              'The imperfective of a momentary verb carries the annulled-result reading: he came and went. "Došao je" would suggest he is still here.',
          },
          {
            q: 'Complete: "Cijeli dan sam ga ___, ali ga nisam nagovorio."',
            options: ['nagovorio', 'nagovarati', 'nagovarao', 'nagovoriti'],
            correct: 2,
            explanation:
              'The attempt is imperfective (nagovarao) and the failed result perfective (nisam nagovorio). A perfective in the first half would claim the persuasion succeeded, and an infinitive cannot carry the past tense.',
          },
          {
            q: 'Which is the polite, inviting way to ask a guest to sit down?',
            options: ['Sjedni!', 'Sjednite!', 'Sjedajte!', 'Sjesti!'],
            correct: 2,
            explanation:
              'The imperfective imperative "sjedajte" invites; perfective "sjednite" is a brisk command, "sjedni" is the informal singular, and an infinitive is not an imperative at all.',
          },
          {
            q: 'Which of these is NOT a true aspect pair?',
            options: [
              'pisati / napisati',
              'otvarati / otvoriti',
              'čitati / pročitati',
              'znati / saznati',
            ],
            correct: 3,
            explanation:
              '"Saznati" is to find out — a different act, not completed knowing. The other three are ordinary process/result pairs.',
          },
          {
            q: '"Ako pojedeš previše, bude ti loše." What is the perfective present doing here?',
            options: [
              'predicting one future event',
              'describing what typically happens',
              'reporting a past event',
              'giving a command',
            ],
            correct: 1,
            explanation:
              'In a general or conditional statement the perfective present describes what typically happens. Out of that frame, "pojedeš" would read as a future.',
          },
          {
            q: 'A learner writes "Otvarao sam prozor, pa je sad svježe u sobi." What is wrong?',
            options: [
              'nothing — the imperfective is the neutral past',
              '"otvarao" implies the window was shut again, which contradicts the fresh air; it should be "otvorio"',
              '"otvarao" should be "otvarati"',
              '"svježe" should be "svježo"',
            ],
            correct: 1,
            explanation:
              'The result stands (the room is fresh), so the act is perfective: otvorio sam. The imperfective would tell a Croatian the window is closed again.',
          },
          {
            q: '"Tko je uzeo knjigu?" What does the perfective imply?',
            options: [
              'someone kept borrowing it',
              'the book has been returned',
              'nobody took it',
              'someone took it and still has it',
            ],
            correct: 3,
            explanation:
              'The perfective states one completed act whose result stands: the book is gone. "Tko je uzimao knjigu?" would ask who has been at it.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Aspect Nuance — Key Takeaways',
        points: [
          'An imperfective of a momentary act implies the result was undone',
          'Otvorio sam = it is open · Otvarao sam = I opened and closed it',
          'Verbs in -irati are usually biaspectual, as are čuti, vidjeti, ručati',
          'znati / saznati and imati / dobiti are not aspect pairs',
          'A perfective present can describe what typically happens, not only the future',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Condensation
  // ─────────────────────────────────────────────────────────
  {
    id: 'condensation',
    title: 'Condensation',
    subtitle: 'Turning clauses into phrases — the move that makes writing formal',
    icon: '🗜️',
    level: 'C1',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'The Single Biggest Register Marker',
        body: 'A learner at C1 usually writes correct Croatian that still reads as speech. The reason is almost always this: spoken Croatian uses clauses, and formal written Croatian compresses them into phrases. "Nakon što je došao" becomes "nakon dolaska". Learning that one transformation changes how everything you write is received.',
        icon: '🗜️',
      },
      {
        type: 'rule',
        title: 'Clause to Verbal Noun',
        body: 'The commonest form: take the subordinate clause, turn the verb into its verbal noun, and put it after a preposition. Nakon što je došao → nakon dolaska. Prije nego što je otišao → prije odlaska. Zato što su odlučili → zbog odluke. The verbal nouns in -nje and -će you met at C1 are what make this possible.',
        highlight: 'nakon što je došao → nakon dolaska',
      },
      {
        type: 'table',
        title: 'The Transformations',
        headers: ['Spoken (clause)', 'Written (phrase)'],
        rows: [
          ['nakon što je stigao', 'nakon dolaska'],
          ['prije nego što je otišao', 'prije odlaska'],
          ['zato što je kasnio', 'zbog kašnjenja'],
          ['da bi se poboljšalo', 'radi poboljšanja'],
          ['kad je počeo rat', 'početkom rata'],
          ['iako je bio umoran', 'unatoč umoru'],
        ],
      },
      {
        type: 'rule',
        title: 'Clause to Verbal Adverb',
        body: 'The other route, using the -ći and -vši forms from B2. Dok je čitao, zaspao je → Čitajući, zaspao je. Nakon što je završio, otišao je → Završivši, otišao je. Remember the constraint: the subject must be shared. This is the more literary of the two options and is common in journalism and fiction.',
        highlight: 'Dok je čitao → Čitajući',
      },
      {
        type: 'rule',
        title: 'Do Not Overdo It',
        body: 'A caution, because this is a tool that can be misused. Croatian style guides warn against stacking verbal nouns — "provođenje ispitivanja provedbe mjera" is grammatical and unreadable. Condense one clause, not three. The test is whether a reader can hold the sentence in their head; if the nouns outnumber the verbs, go back.',
        highlight: 'condense one clause, not three',
      },
      {
        type: 'rule',
        title: 'Where You Will Meet It',
        body: 'Administrative and legal writing is built almost entirely from this — "temeljem odluke", "u svrhu provođenja", "nakon isteka roka". Academic writing uses it heavily. Journalism uses it in headlines. Recognising the pattern turns a wall of nouns into a sentence you can unpack back into clauses.',
        highlight: 'temeljem odluke · nakon isteka roka',
      },
      {
        type: 'example',
        title: 'The Same Content, Two Registers',
        items: [
          {
            hr: 'Nakon što je vlada donijela odluku, cijene su porasle.',
            en: 'After the government made the decision, prices rose.',
            note: 'spoken register — a full clause',
          },
          {
            hr: 'Nakon donošenja odluke cijene su porasle.',
            en: 'Following the decision, prices rose.',
            note: 'condensed — donošenje + genitive',
          },
          {
            hr: 'Zbog kašnjenja vlaka zakasnio sam na sastanak.',
            en: 'Because of the train delay I was late for the meeting.',
            note: 'zbog + a verbal noun',
          },
          {
            hr: 'Radi poboljšanja usluge uvodimo nove mjere.',
            en: 'In order to improve the service we are introducing new measures.',
            note: 'radi — purpose, condensed',
          },
          {
            hr: 'Završivši studij, vratio se u Split.',
            en: 'Having finished his studies, he returned to Split.',
            note: 'the verbal-adverb route',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Po završetku pregovora obje su strane potpisale ugovor bez daljnjih primjedbi.',
            en: 'On completion of the negotiations both sides signed the contract without further objections.',
            note: 'po + locative of a verbal noun = nakon što su pregovori završili',
          },
          {
            hr: 'Zbog nedostatka dokaza sud je oslobodio optuženika.',
            en: 'For lack of evidence the court acquitted the defendant.',
            note: 'zbog + genitive replaces "zato što nije bilo dokaza"',
          },
          {
            hr: 'Prije polaska provjerite jeste li ugasili sva svjetla.',
            en: 'Before leaving, check that you have switched off all the lights.',
            note: 'prije polaska = prije nego što pođete',
          },
          {
            hr: 'Unatoč lošem vremenu utakmica je odigrana pred punim stadionom.',
            en: 'Despite the bad weather the match was played in front of a full stadium.',
            note: 'unatoč + dative condenses "iako je vrijeme bilo loše"',
          },
          {
            hr: 'Ne znajući što ga čeka, ušao je u ured s osmijehom.',
            en: 'Not knowing what awaited him, he walked into the office with a smile.',
            note: 'present verbal adverb — the subject (he) is shared by both halves',
          },
          {
            hr: 'Radi smanjenja troškova uprava je ukinula dva radna mjesta.',
            en: 'To cut costs, management abolished two positions.',
            note: 'radi + genitive = purpose: "da bi smanjila troškove"',
          },
          {
            hr: 'Dolaskom novog trenera momčad je počela igrati posve drukčije.',
            en: 'With the arrival of the new coach the team began to play completely differently.',
            note: 'bare instrumental of a verbal noun = kad je došao novi trener',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Condense: "Nakon što je stigao, nazvao je." Which is right?',
        options: [
          'Nakon stigao, nazvao je.',
          'Nakon dolaska, nazvao je.',
          'Nakon dolazak, nazvao je.',
          'Nakon dolazku, nazvao je.',
        ],
        correct: 1,
        explanation:
          '"Nakon" takes the genitive, and the verb becomes the verbal noun "dolazak" — genitive "dolaska". The clause disappears entirely, which is the whole point of the move.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What do Croatian style guides warn against here?',
        options: [
          'using verbal nouns at all',
          'stacking several verbal nouns in one phrase',
          'using them in journalism',
          'combining them with prepositions',
        ],
        correct: 1,
        explanation:
          'Condensation is a good tool and a bad habit. Stacking nouns produces grammatical, unreadable prose — the rule of thumb is one condensed clause, not three.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is condensing without the case: "nakon dolazak" or "zbog kašnjenje" — every one of these prepositions governs a case, and nakon, zbog, radi and prije all take the genitive: nakon dolaska, zbog kašnjenja. The second is the verbal adverb with two subjects: "Čitajući knjigu, zazvonio je telefon" makes the telephone the reader; the adverb is only possible when the subject is shared. The third is the pile-up — "provođenje ispitivanja provedbe" — three nouns where one clause would be clearer.',
        highlight: 'nakon dolaska, zbog kašnjenja',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Condense: "Prije nego što je otišao, zaključao je vrata."',
            options: [
              'Prije odlaska zaključao je vrata.',
              'Prije odlazak zaključao je vrata.',
              'Prije otišao zaključao je vrata.',
              'Prije odlasku zaključao je vrata.',
            ],
            correct: 0,
            explanation:
              '"Prije" takes the genitive of the verbal noun: prije odlaska. A nominative, a dative or a bare past participle after a preposition are all impossible.',
          },
          {
            q: 'Complete: "___ kašnjenja vlaka zakasnili smo na sastanak."',
            options: ['Zato', 'Zbog', 'Radi', 'Jer'],
            correct: 1,
            explanation:
              '"Zbog" + genitive expresses cause. "Radi" is purpose — a frequent confusion — and "zato" and "jer" introduce clauses, not nouns.',
          },
          {
            q: 'Which sentence uses the verbal adverb correctly?',
            options: [
              'Čitajući knjigu, zazvonio je telefon.',
              'Čitajući knjigu, vrijeme je prošlo.',
              'Čitajući knjigu, zaspala je.',
              'Čitajući knjigu, majka ju je zvala.',
            ],
            correct: 2,
            explanation:
              'The verbal adverb needs a shared subject: she was reading and she fell asleep. In the others the telephone, the time or the mother would be doing the reading.',
          },
          {
            q: 'What is wrong with "Nakon završivši studij, vratio se u Split"?',
            options: [
              'nothing — it is correct',
              '"nakon" cannot combine with a verbal adverb; write "nakon završetka studija" or just "završivši studij"',
              '"završivši" should be "završavši"',
              '"vratio se" should be "vratio je se"',
            ],
            correct: 1,
            explanation:
              'The two condensation routes do not combine. Either the preposition plus verbal noun (nakon završetka studija) or the verbal adverb alone (završivši studij) — never both.',
          },
          {
            q: 'Expand it back: "Radi poboljšanja usluge uvodimo nove mjere." Which clause does the phrase replace?',
            options: [
              'zato što je usluga poboljšana',
              'iako se usluga poboljšava',
              'kad se usluga poboljša',
              'da bismo poboljšali uslugu',
            ],
            correct: 3,
            explanation:
              '"Radi" condenses PURPOSE, so the underlying clause is "da bismo poboljšali uslugu". Cause (zato što), concession (iako) and time (kad) would each need a different preposition.',
          },
          {
            q: 'A friend texts "Nakon što stigneš, javi se." Should it be "Nakon dolaska javi se"?',
            options: [
              'yes — the condensed form is always more correct',
              'no — condensation is a formal written-register move; the clause is right in a message',
              'yes — the clause is ungrammatical',
              'no — nakon cannot take a noun',
            ],
            correct: 1,
            explanation:
              'Both are grammatical; the choice is register. A text to a friend is spoken register, where the clause belongs — condensing it would sound like a memo.',
          },
          {
            q: 'Complete: "Unatoč ___ izlet je održan." (despite the rain — kiša)',
            options: ['kiše', 'kiši', 'kišu', 'kišom'],
            correct: 1,
            explanation:
              '"Unatoč" governs the dative: unatoč kiši. The genitive is the most common slip, by analogy with zbog and nakon.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Condensation — Key Takeaways',
        points: [
          'Formal written Croatian compresses clauses into phrases',
          'nakon što je došao → nakon dolaska; zato što je kasnio → zbog kašnjenja',
          'The verbal-adverb route also works: Dok je čitao → Čitajući',
          'This is the biggest single marker separating written from spoken register',
          'Do not stack verbal nouns — one condensed clause, not three',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Diminutives and Augmentatives
  // ─────────────────────────────────────────────────────────
  {
    id: 'diminutives-augmentatives',
    title: 'Diminutives and Augmentatives',
    subtitle: 'Making a word smaller, bigger, warmer or worse',
    icon: '🔍',
    level: 'C1',
    duration: '~5 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Size Is the Least of It',
        body: 'Croatian can attach a suffix to almost any noun to make it smaller or larger — but the size is rarely the point. A diminutive usually signals affection, informality or modesty, and an augmentative can signal admiration or contempt depending entirely on context. This is attitude encoded in morphology.',
        icon: '🔍',
      },
      {
        type: 'table',
        title: 'Making It Smaller',
        headers: ['Base', 'Diminutive', 'Suffix'],
        rows: [
          ['kuća', 'kućica', '-ica'],
          ['stol', 'stolić', '-ić'],
          ['pas', 'psić', '-ić'],
          ['kava', 'kavica', '-ica'],
          ['pivo', 'pivce', '-ce'],
          ['sin', 'sinčić', '-čić'],
          ['knjiga', 'knjižica', '-ica'],
        ],
      },
      {
        type: 'rule',
        title: 'Kavica Is Not a Small Coffee',
        body: 'The most useful thing in this lesson. "Idemo na kavicu" does not offer you less coffee — it offers a relaxed, unhurried, friendly one. The diminutive softens the invitation and makes it casual. The same runs through "pivce" and "malo juhice": the suffix is doing social work rather than measurement, and the cup is exactly the same size.',
        highlight: 'Idemo na kavicu.',
      },
      {
        type: 'rule',
        title: 'Diminutives Soften Requests Too',
        body: 'Attached to a request, a diminutive lowers the imposition — "Imaš minutu?" against "Imaš minuticu?", or "samo trenutak" against "samo trenutačak". It is the morphological equivalent of the conditional you have been using since A1 for the same purpose, and native speakers combine both freely.',
        highlight: 'samo minuticu',
      },
      {
        type: 'table',
        title: 'Making It Bigger',
        headers: ['Base', 'Augmentative', 'Tone'],
        rows: [
          ['kuća', 'kućerina', 'big — often admiring'],
          ['pas', 'psina', 'big dog — or a sly one'],
          ['čovjek', 'čovječina', 'a big man — warm'],
          ['nos', 'nosina', 'a big nose — mocking'],
          ['knjiga', 'knjižurina', 'a hefty tome — weary'],
        ],
      },
      {
        type: 'rule',
        title: 'Augmentatives Cut Both Ways',
        body: '"Čovječina" is affectionate — a big, decent bloke. "Ženturača" is not. The -ina suffix is broadly neutral-to-admiring, while -etina and -urina lean pejorative. Because the same machinery produces praise and insult, augmentatives are worth recognising confidently before producing them.',
        highlight: '-ina neutral · -urina pejorative',
      },
      {
        type: 'rule',
        title: 'Names Do It Too',
        body: 'Croatian first names have affectionate forms used constantly among family and friends: Ivan → Ivica, Marija → Marica, Ana → Anica, Josip → Joso or Joško. These are hypocoristics, and using one signals closeness — which also means using one uninvited with someone you have just met reads as presumptuous.',
        highlight: 'Ivan → Ivica',
      },
      {
        type: 'example',
        title: 'Attitude in a Suffix',
        items: [
          {
            hr: 'Idemo na kavicu poslije posla?',
            en: 'Shall we go for a coffee after work?',
            note: 'the diminutive makes it casual and friendly',
          },
          {
            hr: 'Imaš minuticu?',
            en: 'Have you got a minute?',
            note: 'softening an imposition',
          },
          {
            hr: 'Kupili su kućicu na moru.',
            en: 'They bought a little place by the sea.',
            note: 'modest, not necessarily small',
          },
          {
            hr: 'Onaj njihov pas je prava psina.',
            en: 'That dog of theirs is a real beast.',
            note: 'admiring rather than critical, here',
          },
          {
            hr: 'Bako, jesi li dobro?',
            en: 'Grandma, are you all right?',
            note: 'baka is already affectionate; the vocative adds warmth',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Baka mi je uvijek govorila: "Pojedi još malo juhice, sinko."',
            en: 'Grandma always said to me: "Have a little more soup, son."',
            note: 'juhica and sinko — affection, not portion size',
          },
          {
            hr: 'Kupili su kućerinu na brdu, s pogledom na cijeli zaljev.',
            en: 'They bought a huge house on the hill, with a view of the whole bay.',
            note: 'kućerina — augmentative, here admiring',
          },
          {
            hr: 'Pričekaj trenutačak, samo da nađem ključeve.',
            en: 'Hang on a sec, just while I find the keys.',
            note: 'trenutačak softens the wait',
          },
          {
            hr: 'Ta njegova knjižurina ima osamsto stranica i nitko je nije pročitao do kraja.',
            en: 'That hefty tome of his has eight hundred pages and nobody has read it to the end.',
            note: 'knjižurina — weary, mildly mocking',
          },
          {
            hr: 'Sudac je izrekao presudu, a ne "presudicu": u sudnici diminutiv zvuči podrugljivo.',
            en: 'The judge handed down a judgment, not a "little judgment": in a courtroom the diminutive sounds mocking.',
            note: 'the diminutive that turns a serious sentence comic',
          },
          {
            hr: 'Josip i Anica vjenčali su se u maloj crkvici iznad sela.',
            en: 'Josip and Anica got married in a little church above the village.',
            note: 'Anica — hypocoristic; crkvica — small and charming',
          },
          {
            hr: 'Kakva psina! Pojeo je cijeli kolač dok smo bili vani.',
            en: 'What a rascal of a dog! He ate the whole cake while we were out.',
            note: 'psina — the sly reading of the augmentative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A Croatian says "Idemo na kavicu." What is being offered?',
        options: [
          'a smaller cup of coffee',
          'a relaxed, friendly coffee',
          'a cheaper coffee',
          'coffee for children',
        ],
        correct: 1,
        explanation:
          'The diminutive is doing social work, not measurement — it makes the invitation casual and unhurried. The cup is exactly the same size.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which suffix leans pejorative?',
        options: ['-ica', '-ić', '-urina', '-ce'],
        correct: 2,
        explanation:
          '"-urina" and "-etina" lean pejorative, while "-ina" is broadly neutral or admiring. The first, second and fourth options are all diminutive suffixes.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Learners reach for the diminutive to mean "small" and miss that it means "friendly": "mala kavica" is doubly marked and says less than kavica alone. The second error is the wrong suffix — "kućić" or "stolica" for a small table; -ić goes with masculine nouns (stolić) and -ica with feminine ones (kućica), and stolica is simply a chair. The third is a diminutive in a serious register: "presudica" or "ugovorčić" in an official sentence reads as mockery, not modesty.',
        highlight: 'stolić',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Idemo na ___ poslije posla?" (a relaxed, friendly coffee)',
            options: ['kavom', 'kavica', 'kavicu', 'kavice'],
            correct: 2,
            explanation:
              '"Na" with motion takes the accusative: na kavicu. The other three are the wrong case, whatever the suffix.',
          },
          {
            q: 'Which is the diminutive of "stol"?',
            options: ['stolica', 'stolić', 'stolina', 'stolče'],
            correct: 1,
            explanation:
              'Masculine nouns take -ić: stolić. "Stolica" is a chair, "stolina" would be an augmentative, and "-če" is not a suffix stol takes.',
          },
          {
            q: 'What tone does "ženturača" carry?',
            options: ['affectionate', 'neutral — simply a big woman', 'pejorative', 'formal'],
            correct: 2,
            explanation:
              'The -urača / -urina family leans pejorative. "-ina" alone (čovječina) can be warm; this one is not.',
          },
          {
            q: 'A colleague signs a formal complaint "S poštovanjem, Ivica". What is off?',
            options: [
              'nothing',
              'Ivica is a hypocoristic — a formal letter expects the full name, Ivan',
              'Ivica needs the vocative',
              'the comma is wrong',
            ],
            correct: 1,
            explanation:
              'Hypocoristics signal closeness and informality. In an official signature the full name is expected; the affectionate form belongs among family and friends.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Kupili su malu kućicu na moru.',
              'Kupili su malu kućica na moru.',
              'Kupili su malu kućicom na moru.',
              'Kupili su malu kućice na moru.',
            ],
            correct: 0,
            explanation:
              'The diminutive declines like any feminine noun in -a: the direct object is accusative kućicu, agreeing with malu. The suffix changes the tone, not the grammar.',
          },
          {
            q: 'What is wrong with "Imaš minutica?"',
            options: [
              'nothing',
              'the direct object needs the accusative: minuticu',
              'minutica should be minutić',
              'the verb should be imate',
            ],
            correct: 1,
            explanation:
              '"Imati" takes the accusative: imaš minuticu. The diminutive softens the request but still has to carry its case.',
          },
          {
            q: 'Which suffix produces a big, often admiring form?',
            options: ['-ica', '-ić', '-urina', '-ina'],
            correct: 3,
            explanation:
              '"-ina" is the broadly neutral-to-admiring augmentative (čovječina, kućerina). "-urina" leans pejorative; -ica and -ić are diminutives.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Diminutives — Key Takeaways',
        points: [
          '-ica, -ić, -čić, -ce make a word smaller — and usually warmer',
          'Kavica is not a small coffee; it is a relaxed one',
          'Diminutives soften requests, like the conditional does',
          '-ina is neutral or admiring; -urina and -etina lean pejorative',
          'Ivan → Ivica: hypocoristics signal closeness, so wait to be invited',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Full Range of Clauses
  // ─────────────────────────────────────────────────────────
  {
    id: 'clause-types',
    title: 'The Full Range of Clauses',
    subtitle: 'Purpose, result, concession, condition, manner and comparison',
    icon: '🌳',
    level: 'C1',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Every Way to Attach a Clause',
        body: 'You have met time clauses, conditions, cause and concession one at a time. This is the complete set, laid out together — because at C1 the useful thing is not learning another connector but seeing which relation each one expresses, so you can choose deliberately rather than reach for the one you know.',
        icon: '🌳',
      },
      {
        type: 'table',
        title: 'The Six Relations',
        headers: ['Type', 'Croatian', 'Answers'],
        rows: [
          ['namjerne', 'da, kako bi', 'what for?'],
          ['posljedične', 'tako da, toliko da', 'with what result?'],
          ['dopusne', 'iako, premda, ma koliko', 'despite what?'],
          ['pogodbene', 'ako, da, ukoliko', 'on what condition?'],
          ['načinske', 'kao da, kako', 'in what manner?'],
          ['poredbene', 'kao što, nego što', 'compared with what?'],
        ],
      },
      {
        type: 'rule',
        title: 'Purpose and Result Are Easily Confused',
        body: 'They look alike and point opposite ways. PURPOSE is the intention: Došao je da pomogne. (He came in order to help.) RESULT is what actually followed: Toliko je pomogao da smo završili ranije. (He helped so much that we finished early.) Purpose looks forward from the actor; result looks back from the outcome.',
        highlight: 'da pomogne / tako da smo završili',
      },
      {
        type: 'rule',
        title: 'Kao Da Takes the Present',
        body: 'Manner clauses with "kao da" — as if — stay in the present even when the main clause is past, because they describe an appearance rather than a time. Ponašao se kao da ništa ne zna. (He behaved as if he knew nothing.) Izgleda kao da će kiša. English backshifts here; Croatian does not, in the same way it does not in reported speech.',
        highlight: 'kao da ništa ne zna',
      },
      {
        type: 'rule',
        title: 'Ma Koliko — However Much',
        body: 'A concessive worth having: "ma koliko" plus a verb means however much, no matter how. Ma koliko se trudio, nije uspio. Ma koliko bilo teško, vrijedi pokušati. The same shape gives "ma što" (whatever), "ma tko" (whoever) and "ma gdje" (wherever) — a small family covering a whole English construction.',
        highlight: 'Ma koliko se trudio…',
      },
      {
        type: 'rule',
        title: 'Ukoliko Is Not a Free Synonym for Ako',
        body: 'Both introduce a condition, and "ukoliko" is markedly formal — it belongs in legal and administrative writing. Using it in speech sounds stilted, and Croatian style guides note that it is often reached for when plain "ako" would do. In an essay it is fine; in conversation, use "ako".',
        highlight: 'ukoliko — formal registers only',
      },
      {
        type: 'example',
        title: 'Choosing the Relation',
        items: [
          {
            hr: 'Ostao je duže kako bi sve završio.',
            en: 'He stayed longer in order to finish everything.',
            note: 'purpose — kako bi + conditional',
          },
          {
            hr: 'Bilo je toliko ljudi da nismo mogli ući.',
            en: 'There were so many people that we could not get in.',
            note: 'result — toliko… da',
          },
          {
            hr: 'Ma koliko pokušavao, ne ide mi.',
            en: 'However much I try, I cannot manage it.',
            note: 'concession — ma koliko',
          },
          {
            hr: 'Gleda me kao da me ne poznaje.',
            en: 'He looks at me as if he does not know me.',
            note: 'manner — kao da + present',
          },
          {
            hr: 'Ispalo je bolje nego što sam očekivao.',
            en: 'It turned out better than I expected.',
            note: 'comparison — nego što',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ostavio sam ključ pod otiračem kako bi ga susjeda mogla uzeti dok me nema.',
            en: 'I left the key under the mat so that the neighbour could take it while I am away.',
            note: 'purpose (kako bi) plus a time clause (dok) in one sentence',
          },
          {
            hr: 'Snijeg je padao tako gusto da se cesta prema Gorskom kotaru zatvorila do jutra.',
            en: 'The snow fell so thickly that the road to Gorski kotar was closed until morning.',
            note: 'result — tako … da, looking back from the outcome',
          },
          {
            hr: 'Premda su cijene porasle, ljudi i dalje pune kafiće na rivi.',
            en: 'Although prices have risen, people still fill the cafés on the waterfront.',
            note: 'concession — premda, a more formal twin of iako',
          },
          {
            hr: 'Ukoliko podnositelj ne dostavi dokumente u roku, zahtjev se odbacuje.',
            en: 'If the applicant fails to submit the documents in time, the application is rejected.',
            note: 'ukoliko — a condition in administrative register; in speech, ako',
          },
          {
            hr: 'Napravio je to točno kako sam mu objasnio, kao da to radi cijeli život.',
            en: 'He did it exactly as I explained, as if he had been doing it all his life.',
            note: 'manner — kako; then kao da with the present, whatever the main clause',
          },
          {
            hr: 'Ispalo je skuplje nego što smo planirali, ali jeftinije nego što su nas plašili.',
            en: 'It turned out dearer than we had planned, but cheaper than they had frightened us with.',
            note: 'comparison — nego što, twice',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which introduces a RESULT clause?',
        options: ['kako bi', 'tako da', 'iako', 'ukoliko'],
        correct: 1,
        explanation:
          '"Tako da" and "toliko da" express what followed. "Kako bi" is purpose, "iako" concession and "ukoliko" a formal condition.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Ponašao se kao da ništa ___." (as if he knew nothing)',
        options: ['nije znao', 'ne zna', 'neće znati', 'ne bi znao'],
        correct: 1,
        explanation:
          '"Kao da" describes an appearance rather than a time, so the verb stays in the present even after a past main clause. Croatian does not backshift here, just as it does not in reported speech.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is purpose with the wrong verb form: "Došao je da pomogao" — a purpose clause takes the present (da pomogne) or kako bi with the participle (kako bi pomogao), never a bare past. The second is backshifting after kao da: "ponašao se kao da nije znao" imports the English sequence of tenses; Croatian keeps the present, kao da ne zna. The third is "ukoliko" in conversation, where it sounds like a form letter — say ako.',
        highlight: 'kao da ne zna',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ostao je duže ___ sve završio." (in order to finish everything)',
            options: ['tako da je', 'kako bi', 'da je', 'iako je'],
            correct: 1,
            explanation:
              'Purpose is "kako bi" + participle (or "da" + present). "Tako da je" would state a result, "da je" a fact, and "iako" concedes.',
          },
          {
            q: 'Which sentence expresses a RESULT?',
            options: [
              'Radio je da bi zaradio.',
              'Radio je kako bi zaradio.',
              'Toliko je radio da se razbolio.',
              'Radio je premda je bio bolestan.',
            ],
            correct: 2,
            explanation:
              '"Toliko … da" looks back from the outcome: he worked so much that he fell ill. The first two are purpose and the last is concession.',
          },
          {
            q: 'Complete: "Izgledala je kao da ___." (as if she were not listening)',
            options: ['nije slušala', 'neće slušati', 'ne bi slušala', 'ne sluša'],
            correct: 3,
            explanation:
              '"Kao da" describes an appearance, so the verb stays in the present even after a past main clause: kao da ne sluša. The past form is the English backshift carried across.',
          },
          {
            q: 'A friend asks whether you will come. Which answer has the right register?',
            options: [
              'Ukoliko budem imao vremena, doći ću.',
              'Ako budem imao vremena, doći ću.',
              'Da budem imao vremena, doći ću.',
              'Kad bih budem imao vremena, doći ću.',
            ],
            correct: 1,
            explanation:
              '"Ako" is the spoken condition; "ukoliko" is grammatical but belongs in legal and administrative prose. The last two mix conditional forms that cannot combine.',
          },
          {
            q: 'What is wrong with "Bilo je toliko ljudi kako nismo mogli ući"?',
            options: [
              'nothing',
              'a result clause needs "da", not "kako": toliko ljudi da nismo mogli ući',
              '"toliko" should be "tako"',
              '"nismo" should be "ne bismo"',
            ],
            correct: 1,
            explanation:
              '"Toliko … da" is the result frame; "kako" introduces manner. Swapping them leaves a sentence that says "so many people how we could not get in".',
          },
          {
            q: 'How many subordinate clauses, and of which kinds, are in "Iako je kasnio, stigao je prije nego što je sastanak počeo, kako bi pripremio dvoranu"?',
            options: [
              'one: concession',
              'two: concession and purpose',
              'three: concession, time and purpose',
              'three: condition, result and manner',
            ],
            correct: 2,
            explanation:
              '"Iako je kasnio" concedes, "prije nego što je sastanak počeo" places it in time, and "kako bi pripremio dvoranu" gives the purpose. Finding the clauses first is how a long sentence is read.',
          },
          {
            q: 'Which family does "ma gdje" belong to?',
            options: [
              'purpose — in order to go anywhere',
              'concession — wherever, no matter where',
              'result — so that anywhere',
              'manner — as if anywhere',
            ],
            correct: 1,
            explanation:
              '"Ma gdje", like "ma koliko", "ma što" and "ma tko", is a concessive: no matter where. Ma gdje bio, javi se.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Clause Types — Key Takeaways',
        points: [
          'Six relations: purpose, result, concession, condition, manner, comparison',
          'Purpose looks forward (da, kako bi); result looks back (tako da, toliko da)',
          'kao da takes the present, whatever the main clause does',
          'ma koliko, ma što, ma tko, ma gdje — however much, whatever, whoever',
          'ukoliko is formal; in speech use ako',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Comparison, Advanced
  // ─────────────────────────────────────────────────────────
  {
    id: 'comparison-advanced',
    title: 'Comparison, Advanced',
    subtitle: 'Like, as if, unlike — and the many ways to say "than"',
    icon: '⚖️',
    level: 'C1',
    duration: '~5 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'More Than Od and Nego',
        body: 'A2 gave you "od" and "nego" for than. Croatian has a considerably richer comparison system than that, and using only two of it is one of the things that keeps advanced writing sounding flat.',
        icon: '⚖️',
      },
      {
        type: 'table',
        title: 'Saying "Like"',
        headers: ['Croatian', 'Takes', 'Example'],
        rows: [
          ['kao', 'nominative', 'Radi kao konobar.'],
          ['poput', 'genitive', 'Poput oca, i on je liječnik.'],
          ['nalik na', 'accusative', 'Nalik je na majku.'],
          ['kao što', 'a clause', 'Kao što znaš…'],
          ['kao da', 'a clause, present', 'Kao da ništa nije bilo.'],
        ],
      },
      {
        type: 'rule',
        title: 'Kao Does Not Change the Case',
        body: 'A point worth stating because learners over-decline. "Kao" is a conjunction, not a preposition, so what follows keeps the case it would have anyway: Radi kao konobar (nominative, because he IS one). Smatram ga kao prijatelja — accusative, matching "ga". "Poput" is a real preposition and takes the genitive, which is why the two behave differently.',
        highlight: 'kao + no case change · poput + genitive',
      },
      {
        type: 'rule',
        title: 'Od or Nego',
        body: 'The A2 rule refined. "Od" plus the genitive compares two nouns directly: Viši je od mene. "Nego" compares anything else — clauses, phrases, or two things in the same case: Bolje je hodati nego voziti. Radije čitam nego gledam televiziju. When in doubt, "nego" is the safer choice, because it works wherever "od" does not.',
        highlight: 'viši od mene / bolje nego voziti',
      },
      {
        type: 'table',
        title: 'Other Comparative Moves',
        headers: ['Croatian', 'English'],
        rows: [
          ['za razliku od + genitive', 'unlike'],
          ['u usporedbi s + instrumental', 'in comparison with'],
          ['isto tako … kao', 'just as … as'],
          ['ni izdaleka', 'not nearly'],
          ['dvostruko više', 'twice as much'],
          ['sve manje', 'less and less'],
        ],
      },
      {
        type: 'rule',
        title: 'Za Razliku Od — Unlike',
        body: 'The workhorse of contrastive writing, and it takes the genitive: Za razliku od Zagreba, Split ima blagu zimu. It is more precise than starting a sentence with "ali", because it names what is being contrasted rather than leaving the reader to infer it — which is exactly the kind of cohesion the C1 descriptor asks for.',
        highlight: 'Za razliku od Zagreba…',
      },
      {
        type: 'rule',
        title: 'Superlatives Take Od or Među',
        body: 'To say the best of a group: "najbolji od svih" (best of all) or "najbolji među njima" (best among them). And Croatian has a neat intensifier for a superlative — "daleko najbolji" (by far the best), "jedan od najboljih" (one of the best). Note that "jedan od" takes the genitive plural: jedan od najboljih filmova.',
        highlight: 'daleko najbolji · jedan od najboljih',
      },
      {
        type: 'example',
        title: 'Comparing Precisely',
        items: [
          {
            hr: 'Za razliku od prošle godine, ovo ljeto je kišno.',
            en: 'Unlike last year, this summer is rainy.',
            note: 'za razliku od + genitive',
          },
          {
            hr: 'Poput svog oca, i on je izabrao medicinu.',
            en: 'Like his father, he too chose medicine.',
            note: 'poput + genitive, and "i" meaning "too"',
          },
          {
            hr: 'Bolje je pitati nego pogriješiti.',
            en: 'It is better to ask than to get it wrong.',
            note: 'nego between two infinitives',
          },
          {
            hr: 'To je daleko najbolje rješenje.',
            en: 'That is by far the best solution.',
            note: 'daleko intensifying a superlative',
          },
          {
            hr: 'Ponaša se kao da se ništa nije dogodilo.',
            en: 'He is behaving as if nothing had happened.',
            note: 'kao da + a clause',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Što više čitam na hrvatskom, to mi je lakše pratiti vijesti.',
            en: 'The more I read in Croatian, the easier it is for me to follow the news.',
            note: 'proportion — što + comparative … to + comparative',
          },
          {
            hr: 'Zime su u Slavoniji sve blaže, a ljeta sve dulja i suša.',
            en: 'Winters in Slavonia are getting milder and milder, and summers longer and drier.',
            note: 'gradual change — sve + comparative; dulja and suša are irregular',
          },
          {
            hr: 'Od svih gradova koje sam posjetio, Dubrovnik je daleko najljepši, ali i najskuplji.',
            en: 'Of all the cities I have visited, Dubrovnik is by far the most beautiful, but also the most expensive.',
            note: 'superlative of a set — od svih + genitive; daleko intensifies',
          },
          {
            hr: 'U usporedbi s prošlom sezonom momčad igra bolje, ali ima gore rezultate.',
            en: 'Compared with last season the team is playing better but has worse results.',
            note: 'u usporedbi s + instrumental; bolje and gore are irregular comparatives',
          },
          {
            hr: 'Radije bih putovao vlakom nego da satima stojim u koloni na autocesti.',
            en: 'I would rather travel by train than stand for hours in a queue on the motorway.',
            note: 'radije … nego da — nego before a clause',
          },
          {
            hr: 'Mlađi mi je brat viši od mene, a stariji je jedan od najnižih u obitelji.',
            en: 'My younger brother is taller than me, and the older one is one of the shortest in the family.',
            note: 'od + genitive; jedan od + genitive plural',
          },
          {
            hr: 'Ni izdaleka nije tako dobar kuhar kao njegova majka.',
            en: 'He is not nearly as good a cook as his mother.',
            note: 'ni izdaleka … tako … kao — kao keeps the nominative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Za razliku od ___, Split ima blagu zimu."',
        options: ['Zagreb', 'Zagreba', 'Zagrebu', 'Zagrebom'],
        correct: 1,
        explanation:
          '"Za razliku od" ends in the preposition "od", which takes the genitive: Zagreba. The whole phrase behaves as one preposition.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is correct: "He works as a waiter"?',
        options: ['Radi kao konobara.', 'Radi kao konobar.', 'Radi poput konobar.'],
        correct: 1,
        explanation:
          '"Kao" is a conjunction and does not change the case, so "konobar" stays in the nominative — he IS one. "Poput" would take the genitive, but it means "resembling" rather than "in the role of".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The commonest is "od" before a clause or a verb: "bolje je hodati od voziti" — od takes a noun in the genitive, and everything else compares with nego: bolje je hodati nego voziti. The second is declining after kao: "radi kao konobara" — kao is a conjunction and changes nothing, so the noun keeps its own case: radi kao konobar. The third is a regular ending on an irregular stem: "dobriji", "visokiji" — the forms are bolji and viši, and they have to be learned as words.',
        highlight: 'bolje je hodati nego voziti',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ovaj je film ___ od prošlog." (better)',
            options: ['dobriji', 'bolji', 'više dobar', 'najbolji'],
            correct: 1,
            explanation:
              '"Dobar" has the irregular comparative "bolji". "Dobriji" does not exist, "više dobar" is an English calque, and "najbolji" is the superlative.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Radije čitam od gledam televiziju.',
              'Radije čitam nego gledam televiziju.',
              'Radije čitam nego što gledanje televizije.',
              'Radije čitam kao gledam televiziju.',
            ],
            correct: 1,
            explanation:
              'Two verbs are compared with "nego". "Od" needs a noun in the genitive, "nego što" needs a full clause, and "kao" is not a comparative at all.',
          },
          {
            q: 'Complete: "Za razliku ___ brata, ona voli zimu."',
            options: ['s', 'od', 'nego', 'poput'],
            correct: 1,
            explanation:
              '"Za razliku od" is one fixed preposition ending in "od" + genitive: za razliku od brata.',
          },
          {
            q: 'Complete: "___ više vježbaš, ___ bolje govoriš."',
            options: ['Što … to', 'Kako … tako', 'Koliko … više', 'Sve … sve'],
            correct: 0,
            explanation:
              'Proportion is "što + comparative, to + comparative": što više vježbaš, to bolje govoriš. "Sve" marks gradual change on a single comparative, not a correlation.',
          },
          {
            q: 'What is wrong with "Poput njegov otac, i on je liječnik"?',
            options: [
              'nothing',
              '"poput" is a real preposition and takes the genitive: poput njegova oca',
              '"poput" should be "kao što"',
              '"i" should be dropped',
            ],
            correct: 1,
            explanation:
              'Unlike "kao", "poput" governs the genitive: poput njegova oca. The nominative after it is the error learners make by analogy with kao.',
          },
          {
            q: 'What does "Cijene su sve niže" mean?',
            options: [
              'prices are the lowest',
              'prices are lower than ever',
              'prices are getting lower and lower',
              'all prices are low',
            ],
            correct: 2,
            explanation:
              '"Sve" + comparative expresses gradual change: lower and lower. It says nothing about a record or about every price.',
          },
          {
            q: 'How do you say "the best of all"?',
            options: [
              'najbolji svih',
              'najbolji od svih',
              'najbolji nego svi',
              'najbolji sa svima',
            ],
            correct: 1,
            explanation:
              'A superlative of a set takes "od" + genitive (or "među" + instrumental): najbolji od svih, najbolji među njima.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Comparison — Key Takeaways',
        points: [
          'kao does not change the case; poput takes the genitive',
          'od + genitive compares nouns; nego compares everything else',
          'za razliku od + genitive is the workhorse of contrastive writing',
          'kao da takes a clause in the present',
          'daleko najbolji, jedan od najboljih + genitive plural',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Choosing a Passive
  // ─────────────────────────────────────────────────────────
  {
    id: 'passive-choices',
    title: 'Choosing a Passive',
    subtitle: 'Three ways to avoid naming who did it, and when each fits',
    icon: '🎚️',
    level: 'C1',
    duration: '~5 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Has Three, and They Are Not Equivalent',
        body: 'B2 taught the passive with "biti" plus a participle. That is one of three constructions, and it is the least common of them in ordinary Croatian. Choosing between them is a register decision as much as a grammatical one.',
        icon: '🎚️',
      },
      {
        type: 'table',
        title: 'The Three',
        headers: ['Construction', 'Example', 'Feel'],
        rows: [
          ['se-passive', 'Kuća se gradi.', 'ordinary, neutral'],
          ['biti + participle', 'Kuća je izgrađena.', 'a resulting state'],
          ['third-person plural', 'Grade kuću.', 'spoken, vague agent'],
        ],
      },
      {
        type: 'rule',
        title: 'The Se-Passive Is the Default',
        body: 'Kuća se gradi. Knjiga se čita. Ovdje se govori hrvatski. This is what Croatian actually uses when the agent is unimportant, and it is far commoner than the participle form. Note that it works only with imperfective verbs in the ongoing sense — for a completed result you need the participle.',
        highlight: 'Kuća se gradi.',
      },
      {
        type: 'rule',
        title: 'Biti + Participle States a Result',
        body: '"Kuća je izgrađena" says the house stands built — it is about the state now, not the process. Compare "Kuća se gradi" (it is going up) with "Kuća je izgrađena" (it is finished). Because it describes a state, this form pairs naturally with perfective verbs, and the participle agrees with the subject as any adjective does.',
        highlight: 'Kuća je izgrađena.',
      },
      {
        type: 'rule',
        title: 'The Third-Person Plural Is the Spoken One',
        body: 'Grade kuću. Kažu da će padati kiša. Zovu me. Croatian, like English "they say", uses a bare third-person plural with no stated subject to leave the agent vague. It is entirely ordinary in speech and unremarkable in journalism, and it is often the most natural of the three.',
        highlight: 'Kažu da…',
      },
      {
        type: 'rule',
        title: 'If You Need the Agent, Use the Active',
        body: 'Croatian passives are agentless by design, and constructions that force an agent into them read as heavy translationese. Where English writes "the decision was taken by the committee", Croatian prefers the plain active: "Odbor je donio odluku." If the agent matters enough to name, name it as the subject — the sentence will be shorter and better.',
        highlight: 'Odbor je donio odluku.',
      },
      {
        type: 'example',
        title: 'Choosing Between Them',
        items: [
          {
            hr: 'Ovdje se govori hrvatski.',
            en: 'Croatian is spoken here.',
            note: 'se-passive — the default',
          },
          {
            hr: 'Zgrada je obnovljena prošle godine.',
            en: 'The building was renovated last year.',
            note: 'result state — participle agrees with zgrada',
          },
          {
            hr: 'Kažu da će cijene rasti.',
            en: 'They say prices will rise.',
            note: 'third-person plural, vague agent',
          },
          {
            hr: 'Ministarstvo je objavilo nove podatke.',
            en: 'The ministry published new data.',
            note: 'agent matters → active voice',
          },
          {
            hr: 'Dokumenti se predaju na šalteru broj tri.',
            en: 'Documents are submitted at counter three.',
            note: 'se-passive — how a notice is worded',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Na ovom se otoku maslinovo ulje još uvijek proizvodi na tradicionalan način.',
            en: 'On this island olive oil is still produced the traditional way.',
            note: 'se-passive — imperfective, an ongoing practice',
          },
          {
            hr: 'Most je izgrađen 2022. godine i otvoren je za promet u srpnju.',
            en: 'The bridge was built in 2022 and was opened to traffic in July.',
            note: 'biti + participle — two completed results, perfective verbs',
          },
          {
            hr: 'Zovu te iz škole, kažu da je nešto hitno.',
            en: 'Someone from the school is calling you, they say it is urgent.',
            note: 'third-person plural — the spoken vague agent',
          },
          {
            hr: 'Gradsko vijeće usvojilo je proračun nakon dugih rasprava.',
            en: 'The city council adopted the budget after long debates.',
            note: 'the agent matters, so the active — never "usvojen od strane vijeća"',
          },
          {
            hr: 'Ovdje se ne puši, a pse treba držati na uzici.',
            en: 'No smoking here, and dogs must be kept on a lead.',
            note: 'impersonal se; treba + infinitive for an obligation with no agent',
          },
          {
            hr: 'Karte se prodaju na blagajni, a rezervirane su ulaznice već rasprodane.',
            en: 'Tickets are sold at the box office, and the reserved ones are already sold out.',
            note: 'both in one sentence: se-passive for the process, participle for the state',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which construction is the ordinary Croatian default?',
        options: [
          'biti + participle',
          'the se-passive',
          'the third-person plural',
          'the active with a named agent',
        ],
        correct: 1,
        explanation:
          'The se-passive is far commoner than the participle form when the agent is unimportant: Kuća se gradi, ovdje se govori hrvatski.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'The committee took the decision, and who took it matters. What does Croatian prefer?',
        options: [
          'a se-passive',
          'biti + participle',
          'the plain active with the committee as subject',
          'a third-person plural',
        ],
        correct: 2,
        explanation:
          'Croatian passives are agentless by design, so when the agent matters the active is both shorter and more natural: Odbor je donio odluku.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is translating the English agent: "Odluka je donesena od strane odbora" — Croatian passives are agentless, and when the agent matters the sentence is active: Odbor je donio odluku. The second is a se-passive with a perfective verb for a finished result — "kuća se izgradi" for "the house was built" — where the participle is needed: kuća je izgrađena. The third is agreement on the participle: "Zgrada je obnovljen" — the participle is an adjective and follows its subject: obnovljena.',
        highlight: 'Odbor je donio odluku',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which is the natural Croatian for "Croatian is spoken here"?',
            options: [
              'Hrvatski je govoren ovdje.',
              'Ovdje se govori hrvatski.',
              'Ovdje govore hrvatski od strane ljudi.',
              'Hrvatski se je govorio ovdje.',
            ],
            correct: 1,
            explanation:
              'The se-passive is the default for an ongoing, agentless practice. The participle form is heavy here, "od strane" is a calque, and "se je" is not a clitic sequence Croatian allows.',
          },
          {
            q: 'Complete: "Zgrada je ___ prošle godine." (renovated)',
            options: ['obnovljen', 'obnovljena', 'obnovljeno', 'obnovljeni'],
            correct: 1,
            explanation:
              'The participle agrees with the subject like an adjective, and "zgrada" is feminine singular: obnovljena.',
          },
          {
            q: 'The house stands finished. Which sentence says that?',
            options: ['Kuća se gradi.', 'Grade kuću.', 'Kuća je izgrađena.', 'Kuću se gradi.'],
            correct: 2,
            explanation:
              '"Biti + participle" states a resulting state with a perfective verb. "Kuća se gradi" and "grade kuću" both describe work in progress, and "kuću se gradi" has the wrong case on the subject.',
          },
          {
            q: 'What is wrong with "Odluka je donesena od strane uprave"?',
            options: [
              'nothing — this is the formal register',
              'the agent is forced into a passive; write "Uprava je donijela odluku"',
              '"donesena" should be "donesen"',
              '"od strane" should be "od stranu"',
            ],
            correct: 1,
            explanation:
              'Croatian passives are agentless by design; naming the agent means using the active. "Od strane" is the calque style guides have objected to for decades.',
          },
          {
            q: '"Kažu da će sutra padati snijeg." Which construction is this?',
            options: [
              'se-passive',
              'biti + participle',
              'third-person plural with a vague agent',
              'an active with a named agent',
            ],
            correct: 2,
            explanation:
              'A bare third-person plural with no subject leaves the agent vague — the spoken equivalent of English "they say".',
          },
          {
            q: 'Complete: "Dokumenti ___ na šalteru broj tri." (are submitted — the wording of a notice)',
            options: ['su predani od stranaka', 'se predaju', 'predaju', 'predani se'],
            correct: 1,
            explanation:
              'A notice describes an ongoing procedure with the se-passive: dokumenti se predaju. A bare "predaju" would make the documents the ones doing the submitting.',
          },
          {
            q: 'Which sentence would a Croatian writer NOT use?',
            options: [
              'Ovdje se govori hrvatski.',
              'Most je otvoren u srpnju.',
              'Kažu da je hladno.',
              'Knjiga je bila čitana od mene.',
            ],
            correct: 3,
            explanation:
              'A passive with an agent phrase is the English-shaped sentence that marks a text as translated; Croatian says "Pročitao sam knjigu". The other three are the three native constructions.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Passive Choices — Key Takeaways',
        points: [
          'se-passive is the neutral default: Kuća se gradi.',
          'biti + participle states a resulting state: Kuća je izgrađena.',
          'A bare third-person plural is the spoken option: Kažu da…',
          'The participle agrees with the subject, like any adjective',
          'If the agent matters, use the active — Croatian passives are agentless',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Collocations
  // ─────────────────────────────────────────────────────────
  {
    id: 'collocations',
    title: 'Collocations',
    subtitle: 'Which words go together — the last thing to sound right',
    icon: '🧲',
    level: 'C1',
    duration: '~5 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'Grammatical, and Still Wrong',
        body: '"Napraviti odluku" breaks no rule. Every word is correct, the case is right, and no Croatian would say it — the verb for reaching a decision is "donijeti". Collocation is the layer above grammar, and at C1 it is what separates writing that is correct from writing that is native.',
        icon: '🧲',
      },
      {
        type: 'table',
        title: 'The Light Verbs',
        headers: ['Croatian', 'English', 'Not'],
        rows: [
          ['donijeti odluku', 'to make a decision', 'napraviti'],
          ['postaviti pitanje', 'to ask a question', 'napraviti'],
          ['održati sastanak', 'to hold a meeting', 'imati'],
          ['pružiti pomoć', 'to provide help', 'dati'],
          ['poduzeti mjere', 'to take measures', 'uzeti'],
          ['steći iskustvo', 'to gain experience', 'dobiti'],
          ['voditi računa o', 'to take care over', 'brinuti'],
        ],
      },
      {
        type: 'rule',
        title: 'English Uses Make and Take; Croatian Does Not',
        body: 'English builds an enormous number of expressions on "make", "take", "do" and "have". Croatian distributes the same work across specific verbs — donijeti, postaviti, održati, poduzeti, pružiti, steći. Translating the English light verb directly is the single most productive source of C1-level error, precisely because the result is always grammatical.',
        highlight: 'donijeti odluku, not napraviti',
      },
      {
        type: 'table',
        title: 'Adjective and Noun Pairs',
        headers: ['Croatian', 'English'],
        rows: [
          ['ključna uloga', 'a key role'],
          ['temeljna razlika', 'a fundamental difference'],
          ['oštra kritika', 'sharp criticism'],
          ['duboko uvjerenje', 'a deep conviction'],
          ['velika šteta', 'great damage, a great shame'],
          ['stroga pravila', 'strict rules'],
        ],
      },
      {
        type: 'rule',
        title: 'Read for Pairs, Not Only for Words',
        body: 'The practical method: when you read, notice which verb attaches to which noun and record the pair, not the word. A vocabulary list of nouns will not tell you that decisions are "brought" and questions are "placed". A list of collocations will, and it is the fastest remaining route to sounding native at this level.',
        highlight: 'record the pair, not the word',
      },
      {
        type: 'rule',
        title: 'Some Are Fixed Phrases Outright',
        body: 'A tier beyond collocation: "voditi računa o" (take care over), "imati na umu" (bear in mind), "doći do izražaja" (come to the fore), "u pravilu" (as a rule), "s obzirom na" (given, in view of). These behave as single units and are best memorised whole, since their parts do not predict their meaning.',
        highlight: 'imati na umu · s obzirom na',
      },
      {
        type: 'example',
        title: 'Pairs in Use',
        items: [
          {
            hr: 'Vlada je donijela odluku o novim mjerama.',
            en: 'The government made a decision on new measures.',
            note: 'donijeti odluku, then odluka O + locative',
          },
          {
            hr: 'Želio bih postaviti jedno pitanje.',
            en: 'I would like to ask one question.',
            note: 'postaviti pitanje, not napraviti',
          },
          {
            hr: 'Treba voditi računa o troškovima.',
            en: 'One should take care over the costs.',
            note: 'a fixed phrase with a locative',
          },
          {
            hr: 'Odigrao je ključnu ulogu u projektu.',
            en: 'He played a key role in the project.',
            note: 'odigrati ulogu — the verb is "play", as in English',
          },
          {
            hr: 'S obzirom na okolnosti, to je razumno.',
            en: 'Given the circumstances, that is reasonable.',
            note: 's obzirom na + accusative',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Sindikat je poduzeo mjere čim je uprava održala sastanak bez radnika.',
            en: 'The union took measures as soon as management held a meeting without the workers.',
            note: 'poduzeti mjere, održati sastanak',
          },
          {
            hr: 'Tijekom studija u Rijeci stekla je iskustvo koje joj sada otvara vrata.',
            en: 'During her studies in Rijeka she gained experience that now opens doors for her.',
            note: 'steći iskustvo — not dobiti; otvarati vrata, as in English',
          },
          {
            hr: 'Vatrogasci su pružili pomoć stanovnicima čim su stigli na mjesto nesreće.',
            en: 'The firefighters provided help to the residents as soon as they arrived at the scene.',
            note: 'pružiti pomoć + dative',
          },
          {
            hr: 'Na sastanku je izrazio duboko uvjerenje da će rezovi izazvati oštru kritiku.',
            en: 'At the meeting he expressed a deep conviction that the cuts would provoke sharp criticism.',
            note: 'duboko uvjerenje, oštra kritika; izazvati kritiku',
          },
          {
            hr: 'Imajte na umu da stroga pravila vrijede i vikendom.',
            en: 'Bear in mind that the strict rules apply at weekends too.',
            note: 'imati na umu, stroga pravila; vrijediti = to apply',
          },
          {
            hr: 'Nevrijeme je nanijelo veliku štetu vinogradima uz Neretvu.',
            en: 'The storm caused great damage to the vineyards along the Neretva.',
            note: 'nanijeti štetu — damage is "inflicted", not "made"',
          },
          {
            hr: 'Njegova je upornost došla do izražaja tek u posljednjem kilometru utrke.',
            en: 'His persistence came to the fore only in the last kilometre of the race.',
            note: 'doći do izražaja — a fixed phrase',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "to make a decision"?',
        options: ['napraviti odluku', 'donijeti odluku', 'uzeti odluku', 'dati odluku'],
        correct: 1,
        explanation:
          'Croatian "brings" a decision: donijeti odluku. "Napraviti odluku" breaks no grammatical rule, which is exactly why this class of error survives to C1.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ pitanje." (to ask a question)',
        options: ['Napraviti', 'Postaviti', 'Dati', 'Uzeti'],
        correct: 1,
        explanation:
          'A question is "placed" in Croatian: postaviti pitanje. The English light verb "ask" gives no clue, which is why the pair has to be learned as a pair.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Nearly every error here is an English light verb carried across. "Napraviti sastanak" for holding one — the verb is održati: održali smo sastanak. "Uzeti mjere" from take measures — Croatian undertakes them: poduzeti mjere. And "napraviti pitanje" or "dati pitanje" — a question is placed: postaviti pitanje. Each is grammatical, which is why nobody corrects it; each marks the speaker as translating.',
        highlight: 'održali smo sastanak',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Odbor je ___ odluku o novom proračunu."',
            options: ['napravio', 'uzeo', 'donio', 'dao'],
            correct: 2,
            explanation:
              'A decision is "brought": donijeti odluku. The other three are English light verbs translated word for word.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Vlada je uzela nove mjere.',
              'Vlada je poduzela nove mjere.',
              'Vlada je napravila nove mjere.',
              'Vlada je dala nove mjere.',
            ],
            correct: 1,
            explanation:
              'Measures are undertaken: poduzeti mjere. "Uzeti" is the direct translation of "take", which is exactly the trap.',
          },
          {
            q: 'Complete: "Tijekom prakse ___ je dragocjeno iskustvo."',
            options: ['dobila', 'uzela', 'stekla', 'napravila'],
            correct: 2,
            explanation:
              'Experience is acquired: steći iskustvo. "Dobiti" is what you do with a parcel or a grade.',
          },
          {
            q: 'What is wrong with "Molim vas, imajte na um da rok istječe sutra"?',
            options: [
              'nothing',
              'the phrase is fixed with the locative: imajte na umu',
              '"imajte" should be "imate"',
              '"rok" should be "roka"',
            ],
            correct: 1,
            explanation:
              '"Imati na umu" is a fixed phrase with "um" in the locative. Fixed phrases keep their case whatever the learner would otherwise choose.',
          },
          {
            q: 'A friend cannot come and you say "Velika šteta!" What does it mean here?',
            options: ['great damage', 'a great shame — what a pity', 'a big fine', 'a big mistake'],
            correct: 1,
            explanation:
              '"Šteta" is damage, but "velika šteta" as an exclamation is "what a pity". The collocation carries a meaning the noun alone does not.',
          },
          {
            q: 'Complete: "Odigrao je ___ ulogu u pregovorima." (a key role)',
            options: ['ključnu', 'ključna', 'ključnom', 'ključne'],
            correct: 0,
            explanation:
              '"Odigrati ulogu" takes the accusative, and the adjective agrees: ključnu ulogu. The pair is the same as English — play a role — but the case still has to be right.',
          },
          {
            q: 'Which case does "s obzirom na" take?',
            options: ['genitive', 'dative', 'accusative', 'locative'],
            correct: 2,
            explanation:
              'The phrase ends in "na" with the accusative: s obzirom na okolnosti. Learn it whole, case included.',
          },
          {
            q: 'Complete: "Treba voditi ___ o troškovima."',
            options: ['račun', 'računa', 'računu', 'računom'],
            correct: 1,
            explanation:
              '"Voditi računa o" is fixed with the genitive "računa" — one of the phrases whose parts do not predict the form.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Collocations — Key Takeaways',
        points: [
          'donijeti odluku, postaviti pitanje, održati sastanak, poduzeti mjere',
          'English make/take/do/have map onto many different Croatian verbs',
          'Translating the light verb directly is the commonest C1 error',
          'Record the PAIR when reading, not the individual word',
          'imati na umu, voditi računa o, s obzirom na — memorise whole',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Discourse Particles
  // ─────────────────────────────────────────────────────────
  {
    id: 'discourse-particles',
    title: 'Discourse Particles',
    subtitle: 'The little words that carry the attitude',
    icon: '🎵',
    level: 'C1',
    duration: '~6 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Where the Implicit Meaning Lives',
        body: 'The C1 descriptor talks about recognising implicit meaning. In Croatian a great deal of it sits in words a dictionary struggles to define — pa, ma, baš, valjda, naime, uostalom. They carry almost no propositional content and a great deal of attitude, and missing them means missing what the speaker actually thought.',
        icon: '🎵',
      },
      {
        type: 'table',
        title: 'The Core Set',
        headers: ['Particle', 'What it signals'],
        rows: [
          ['pa', 'well — buys a moment, or mild objection'],
          ['ma', 'dismissal, affectionate scepticism'],
          ['baš', 'exactly, precisely — emphasis'],
          ['valjda', 'presumably — the speaker is not sure'],
          ['naime', 'namely — an explanation follows'],
          ['uostalom', 'besides, after all — a clinching point'],
          ['eto', 'there you go — resignation or presentation'],
          ['zapravo', 'actually — a correction'],
        ],
      },
      {
        type: 'rule',
        title: 'Valjda Is Not Vjerojatno',
        body: 'Both come out as "probably", and they are not the same. "Vjerojatno" is an estimate of likelihood. "Valjda" adds that the speaker has no real basis and would rather not be held to it — Valjda će doći. It often carries a shrug. Using "vjerojatno" where a Croatian would say "valjda" sounds oddly confident.',
        highlight: 'Valjda će doći.',
      },
      {
        type: 'rule',
        title: 'Pa Does Three Different Jobs',
        body: 'As a filler it opens an answer: Pa, ovisi. As a conjunction it means and then: Došao je pa smo jeli. And at the front of a statement it registers mild objection or surprise: Pa rekao sam ti! (But I told you!) The third is the one learners miss, and it changes the sentence from information into a complaint.',
        highlight: 'Pa rekao sam ti!',
      },
      {
        type: 'rule',
        title: 'Naime and Uostalom Structure an Argument',
        body: 'Two that belong to writing as much as speech. "Naime" introduces the explanation of what you just said — Nije došao. Naime, bio je bolestan. "Uostalom" adds a final point that settles the matter — Uostalom, nitko ga nije ni zvao. Both are cohesive devices in the sense the C1 descriptor means, and both are commoner in Croatian than their English equivalents.',
        highlight: 'Naime… · Uostalom…',
      },
      {
        type: 'rule',
        title: 'Baš Intensifies or Contradicts',
        body: '"Baš" means exactly, just, really: Baš to sam mislio. (That is exactly what I meant.) Baš mi je drago. (I am really glad.) But with a negative it turns sardonic: Baš ti hvala. (Thanks a lot — and no thanks.) Tone decides, which is why it belongs in the same lesson as the rest of this set.',
        highlight: 'Baš to sam mislio.',
      },
      {
        type: 'example',
        title: 'Attitude in Practice',
        items: [
          {
            hr: 'Pa dobro, ako moraš.',
            en: 'Well all right then, if you must.',
            note: 'reluctant concession',
          },
          {
            hr: 'Valjda će sve biti u redu.',
            en: 'Presumably everything will be fine.',
            note: 'valjda — with a shrug',
          },
          {
            hr: 'Nije mogao doći. Naime, bio je na putu.',
            en: 'He could not come. He was away, you see.',
            note: 'naime introduces the explanation',
          },
          {
            hr: 'Uostalom, to i nije bilo važno.',
            en: 'Besides, it was not important anyway.',
            note: 'uostalom clinches it',
          },
          {
            hr: 'Eto, to je sve što znam.',
            en: 'There you go, that is all I know.',
            note: 'eto presents and closes',
          },
          {
            hr: 'Baš si me iznenadio.',
            en: 'You really surprised me.',
            note: 'baš intensifying, no irony here',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ma pusti, nije to ništa, sredit ćemo to za pet minuta.',
            en: 'Oh, leave it, it is nothing, we will sort it out in five minutes.',
            note: 'ma — affectionate dismissal',
          },
          {
            hr: 'Zar stvarno misliš da će vlak stići na vrijeme po ovom snijegu?',
            en: 'Do you really think the train will arrive on time in this snow?',
            note: 'zar — a question that expects a no',
          },
          {
            hr: 'Pa naravno da dolazim, ne bih to propustio ni za što.',
            en: 'Well of course I am coming, I would not miss it for anything.',
            note: 'pa reinforcing an obvious answer',
          },
          {
            hr: 'Zapravo, nisam nikad bio u Osijeku, samo sam prolazio kroz njega.',
            en: 'Actually, I have never been to Osijek, I have only passed through it.',
            note: 'zapravo — correcting what you might assume',
          },
          {
            hr: 'Baš ti hvala što si me ostavio na kiši.',
            en: 'Thanks a lot for leaving me in the rain.',
            note: 'baš turning sardonic with the tone',
          },
          {
            hr: 'Eto, sad znaš zašto nikad ne kuham ribu kad ona dolazi.',
            en: 'There you go, now you know why I never cook fish when she comes.',
            note: 'eto — presenting the conclusion',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Someone says "Valjda će doći." What does the particle add?',
        options: [
          'that they are certain',
          'that they have no real basis for saying so',
          'that they are annoyed',
          'that it already happened',
        ],
        correct: 1,
        explanation:
          '"Valjda" signals a guess the speaker would rather not be held to — often with a shrug. "Vjerojatno" would be a genuine estimate of likelihood.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which particle introduces an explanation of what was just said?',
        options: ['uostalom', 'naime', 'baš', 'eto'],
        correct: 1,
        explanation:
          '"Naime" means namely or you see, and what follows explains the previous statement. "Uostalom" adds a clinching afterthought instead.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is "vjerojatno" where a Croatian would shrug: "Vjerojatno će doći" states an estimate; the everyday guess is valjda će doći. The second is reading "pa" as only a filler, so that "Pa rekao sam ti!" is heard as information rather than the complaint it is. The third is "zar ne?" tacked onto every sentence as an English question tag — it belongs only where the speaker genuinely expects agreement, and overuse sounds like a translated textbook.',
        highlight: 'valjda će doći',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ će sve biti u redu." (presumably — a guess you would rather not be held to)',
            options: ['Sigurno', 'Vjerojatno', 'Valjda', 'Naime'],
            correct: 2,
            explanation:
              '"Valjda" is the shrug: no real basis, and please do not hold me to it. "Vjerojatno" is a real estimate and "sigurno" a certainty; "naime" introduces an explanation.',
          },
          {
            q: 'Which particle introduces an explanation of what was just said?',
            options: ['uostalom', 'eto', 'zar', 'naime'],
            correct: 3,
            explanation:
              '"Naime" means namely, you see — what follows explains the previous sentence. "Uostalom" clinches, "eto" presents, "zar" questions.',
          },
          {
            q: '"Pa rekao sam ti!" — what is "pa" doing?',
            options: [
              'buying a moment before answering',
              'meaning "and then"',
              'registering objection: but I told you',
              'softening the statement',
            ],
            correct: 2,
            explanation:
              'At the front of a statement "pa" turns information into a complaint. The filler and the "and then" readings are its other two jobs.',
          },
          {
            q: 'Which question expects the answer "no"?',
            options: [
              'Zar nisi umoran?',
              'Jesi li umoran?',
              'Zar si umoran?',
              'Umoran si, zar ne?',
            ],
            correct: 2,
            explanation:
              '"Zar" before a positive statement expresses disbelief — surely you are not tired? "Zar nisi" is surprise the other way, "zar ne" expects a yes, and "jesi li" is neutral.',
          },
          {
            q: 'In a formal report a learner writes "Ma, rezultati su dobri." What is wrong?',
            options: [
              'nothing',
              '"ma" is a spoken, dismissive particle and does not belong in a report',
              '"ma" should be "pa"',
              'the comma is wrong',
            ],
            correct: 1,
            explanation:
              'Discourse particles carry register as well as attitude. "Ma" belongs to conversation; in a report the sentence stands without it.',
          },
          {
            q: '"Baš ti hvala", said flatly, means?',
            options: [
              'sincere thanks',
              'thanks a lot — sarcastic',
              'thank you very much indeed',
              'no thanks needed',
            ],
            correct: 1,
            explanation:
              '"Baš" intensifies, and with a flat or negative tone it turns sardonic. The words are identical; the attitude is not.',
          },
          {
            q: 'Complete: "Nije došao. ___, nitko ga nije ni zvao." (a clinching afterthought)',
            options: ['Naime', 'Zapravo', 'Uostalom', 'Baš'],
            correct: 2,
            explanation:
              '"Uostalom" adds the point that settles the matter — besides, nobody even invited him. "Naime" would promise an explanation instead.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Discourse Particles — Key Takeaways',
        points: [
          'pa, ma, baš, valjda, naime, uostalom, eto, zapravo',
          'valjda is a shrug; vjerojatno is a real estimate',
          'Pa at the front of a statement registers objection: Pa rekao sam ti!',
          'naime explains what preceded; uostalom clinches it',
          'baš intensifies — and turns sardonic with the right tone',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Accent and Prosody
  // ─────────────────────────────────────────────────────────
  {
    id: 'accent-prosody',
    title: 'Accent and Prosody',
    subtitle: 'The four accents, and the words they tell apart',
    icon: '🎼',
    level: 'C1',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Layer Nobody Mentioned',
        body: 'Croatian has four accents that combine pitch and length, and no lesson before this one has mentioned them. They are why a dictionary entry carries marks over the vowels, why some words look identical and are not, and why a learner can be entirely grammatical and still sound foreign.',
        icon: '🎼',
      },
      {
        type: 'table',
        title: 'The Four',
        headers: ['Name', 'Mark', 'Length', 'Pitch'],
        rows: [
          ['kratkosilazni', 'ȕ', 'short', 'falling'],
          ['dugosilazni', 'ȗ', 'long', 'falling'],
          ['kratkouzlazni', 'ù', 'short', 'rising'],
          ['dugouzlazni', 'ú', 'long', 'rising'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Dimensions, Four Combinations',
        body: 'Every accented syllable is either short or long, and either falling or rising. That gives four, and the marks encode both: the double grave and the inverted breve are falling, the grave and acute are rising. You will meet them in dictionaries and in careful writing about the language, and almost nowhere else — ordinary text is unmarked.',
        highlight: 'short/long × falling/rising',
      },
      {
        type: 'table',
        title: 'Minimal Pairs',
        headers: ['Word', 'Meaning', 'Word', 'Meaning'],
        rows: [
          ['grȁd', 'hail', 'grȃd', 'city'],
          ['lȕk', 'onion', 'lȗk', 'bow, arch'],
          ['pȁs', 'dog', 'pȃs', 'waist, belt'],
          ['sam', 'I am (clitic, no accent)', 'sȃm', 'alone (long falling)'],
        ],
      },
      {
        type: 'rule',
        title: 'The Rule That Actually Helps',
        body: 'You will not master the four accents from a lesson, but one distributional rule pays off immediately: in standard Croatian a polysyllabic word never carries its accent on the FINAL syllable, and a falling accent can only fall on the first. That is why the stress in "govòriti" and "razgovárati" sits where it does, and why final-stress pronunciations sound wrong even to speakers who could not name the rule.',
        highlight: 'never on the final syllable',
      },
      {
        type: 'rule',
        title: 'Post-Accentual Length',
        body: 'Beyond the accent itself, a syllable AFTER the accent can be long, and it is marked with a macron in dictionaries. It matters grammatically: the genitive plural is long where the nominative singular is not, which is part of why "žena" (nominative singular) and "žénā" (genitive plural) are distinguishable in speech despite looking identical on the page.',
        highlight: 'žena / žénā',
      },
      {
        type: 'rule',
        title: 'What to Actually Do About It',
        body: 'Two practical things. First, listen for the difference rather than trying to produce it deliberately — accent is acquired by ear far more reliably than by rule. Second, when a dictionary shows the marks, read them: knowing that "grȃd" is the city and "grȁd" the hail costs nothing once you can decode the notation, and clears up a genuine ambiguity.',
        highlight: 'listen first, produce later',
      },
      {
        type: 'example',
        title: 'Where It Matters',
        items: [
          {
            hr: 'Pada grad na grad.',
            en: 'Hail is falling on the city.',
            note: 'identical on the page, distinct in speech',
          },
          {
            hr: 'Kupi luk za juhu.',
            en: 'Buy some onion for the soup.',
            note: 'context settles it; accent would too',
          },
          {
            hr: 'Naglasak je na prvom slogu.',
            en: 'The accent is on the first syllable.',
            note: 'naglasak — the word for accent',
          },
          {
            hr: 'U rječniku su naglasci označeni.',
            en: 'In the dictionary the accents are marked.',
            note: 'označeni — a passive participle',
          },
          {
            hr: 'Ne mogu čuti razliku.',
            en: 'I cannot hear the difference.',
            note: 'entirely normal at first',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kad kažeš "grad", misliš li na Zagreb ili na tuču koja je sinoć potukla vinograde?',
            en: 'When you say "grad", do you mean Zagreb or the hail that battered the vineyards last night?',
            note: 'grȃd (city) and grȁd (hail) — one spelling, two accents',
          },
          {
            hr: 'Ispod luka starog mosta prodaju mladi luk i češnjak.',
            en: 'Under the arch of the old bridge they sell spring onions and garlic.',
            note: 'lȗk (arch) and lȕk (onion) in one sentence',
          },
          {
            hr: 'U hrvatskome naglasak nikad ne pada na posljednji slog višesložne riječi.',
            en: 'In Croatian the accent never falls on the final syllable of a polysyllabic word.',
            note: 'the distributional rule, stated in Croatian',
          },
          {
            hr: 'Stranac koji naglasi zadnji slog u riječi "govoriti" odmah se prepozna po tome.',
            en: 'A foreigner who stresses the last syllable of "govoriti" is recognised immediately by it.',
            note: 'final stress is the clearest foreign marker',
          },
          {
            hr: 'Rečenica "Došlo je pet žena" ima dugi zadnji slog, iako se piše jednako kao nominativ.',
            en: 'The sentence "Five women came" has a long final syllable, though it is written the same as the nominative.',
            note: 'post-accentual length on the genitive plural žénā',
          },
          {
            hr: 'Silazni naglasak može stajati samo na prvom slogu, zato je "Hrvatska" naglašena na početku.',
            en: 'A falling accent can stand only on the first syllable, which is why "Hrvatska" is accented at the start.',
            note: 'falling accents — first syllable only',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How many accents does standard Croatian distinguish?',
        options: ['two', 'three', 'four', 'five'],
        correct: 2,
        explanation:
          'Four: short falling, long falling, short rising and long rising — two lengths crossed with two pitches.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'In standard Croatian, where can a polysyllabic word NOT be accented?',
        options: [
          'on the first syllable',
          'on the final syllable',
          'in the middle',
          'anywhere is allowed',
        ],
        correct: 1,
        explanation:
          'A polysyllabic word never carries its accent on the final syllable, and a falling accent can only fall on the first. Final stress is one of the clearest markers of a foreign accent.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is final stress carried over from English or from French loanwords — "restoRAN", "kompjuTOR" — but a Croatian polysyllable is never accented on its last syllable, so the stress moves back. The second is giving every syllable the same length, which erases the distinction that keeps žena (one woman) and žena (of women) apart. The third is trying to produce the four accents from the marks instead of from the ear — a learner who listens to Croatian radio for a month does better than one who memorises the notation.',
        highlight: 'never accented on its last syllable',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which pair differs ONLY in accent?',
            options: [
              'grȃd / grȁd — city / hail',
              'grad / gradić — city / small town',
              'grad / vrt — city / garden',
              'grad / grade — city / they build',
            ],
            correct: 0,
            explanation:
              '"Grȃd" (city) and "grȁd" (hail) are spelled identically and differ only in length and pitch. The other pairs differ in letters.',
          },
          {
            q: 'How many accents does the standard distinguish, and along which dimensions?',
            options: [
              'two: stressed and unstressed',
              'four: two lengths crossed with two pitches',
              'three: high, mid and low',
              'four: first, second, third and final syllable',
            ],
            correct: 1,
            explanation:
              'Short or long, falling or rising — four combinations. Position in the word is not one of the dimensions.',
          },
          {
            q: 'Where can a FALLING accent stand?',
            options: [
              'on any syllable',
              'on the final syllable only',
              'on the first syllable only',
              'on the penultimate syllable only',
            ],
            correct: 2,
            explanation:
              'A falling accent can only fall on the first syllable; the rising accents are what appear further in. Nothing polysyllabic is accented on the last.',
          },
          {
            q: 'A learner says "razgovarati" with the stress on the last syllable. Which rule breaks?',
            options: [
              'none — stress is free in Croatian',
              'a polysyllabic word is never accented on the final syllable',
              'falling accents must be final',
              'every syllable must be equally long',
            ],
            correct: 1,
            explanation:
              'Final stress is the clearest marker of a foreign accent precisely because the standard never places an accent there.',
          },
          {
            q: 'How are "žena" (nominative singular) and "žena" (genitive plural) told apart in speech?',
            options: [
              'by a different vowel',
              'by post-accentual length on the genitive plural',
              'by a different consonant',
              'they are not — only context helps',
            ],
            correct: 1,
            explanation:
              'The genitive plural carries a long syllable after the accent (žénā); the nominative does not. Identical on the page, distinct to the ear.',
          },
          {
            q: '"Kupi luk za juhu." Which "luk" is meant, and what tells you?',
            options: [
              'the bow — the accent',
              'the onion — context settles it, and in careful speech the short falling accent would too',
              'the arch — the preposition',
              'impossible to say',
            ],
            correct: 1,
            explanation:
              'Soup wants an onion. Context resolves most such pairs in practice; the accent (lȕk) resolves it without context.',
          },
          {
            q: "What is the lesson's practical advice on the four accents?",
            options: [
              'produce all four deliberately from day one',
              'ignore them entirely',
              'acquire them by ear first, and read the marks when a dictionary gives them',
              'use final stress to sound emphatic',
            ],
            correct: 2,
            explanation:
              'Accent is acquired by listening far more reliably than by rule; decoding the dictionary marks costs nothing and clears up real ambiguities.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Accent — Key Takeaways',
        points: [
          'Four accents: two lengths crossed with two pitches',
          'Minimal pairs turn on them: grad/grâd, luk/lûk, pas/pâs',
          'A polysyllabic word is never accented on the final syllable',
          'A falling accent can only fall on the first syllable',
          'Post-accentual length distinguishes forms that look identical written',
          'Acquire it by ear; read the marks when a dictionary gives them',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Summarising and Paraphrase
  // ─────────────────────────────────────────────────────────
  {
    id: 'summarising-paraphrase',
    title: 'Summarising and Paraphrase',
    subtitle: 'Saying the same thing shorter, and in your own words',
    icon: '✂️',
    level: 'C1',
    duration: '~5 min',
    color: '#78716c',
    bg: '#fafaf9',
    slides: [
      {
        type: 'intro',
        title: 'A Skill, Not a Vocabulary',
        body: 'Summarising is the exam skill at C1 and the useful skill in life — reporting what a document said, catching a colleague up, condensing an argument. It draws on the condensation lesson and adds a set of framing phrases, and it is the fastest way to make what you already know go further.',
        icon: '✂️',
      },
      {
        type: 'table',
        title: 'Framing a Summary',
        headers: ['Croatian', 'English'],
        rows: [
          ['Ukratko, …', 'In short, …'],
          ['U biti, …', 'Essentially, …'],
          ['Riječ je o…', 'It is about…'],
          ['Glavna je poanta…', 'The main point is…'],
          ['Autor tvrdi da…', 'The author claims that…'],
          ['Zaključak je da…', 'The conclusion is that…'],
        ],
      },
      {
        type: 'rule',
        title: 'Riječ Je O — the Opener',
        body: '"Riječ je o" plus the locative is the standard way to say what something is about: Riječ je o novom zakonu. Riječ je o tome da… It is compact, neutral and endlessly reusable, and it opens a summary better than a literal translation of "this text is about" would.',
        highlight: 'Riječ je o novom zakonu.',
      },
      {
        type: 'rule',
        title: 'Attribute, Do Not Absorb',
        body: "A summary must keep the author's claims distinct from your own. Autor tvrdi da… Prema autoru… Po njegovu mišljenju… Članak navodi da… Without these, a reader cannot tell where the source stops and you begin — which at C1 is treated as an error of substance, not of style.",
        highlight: 'Autor tvrdi da… / Prema autoru…',
      },
      {
        type: 'table',
        title: 'Paraphrasing Moves',
        headers: ['Move', 'Example'],
        rows: [
          ['noun → verb', 'donošenje odluke → odlučiti'],
          ['verb → noun', 'odlučili su → njihova odluka'],
          ['active → passive', 'objavili su → objavljeno je'],
          ['clause → phrase', 'nakon što je došao → nakon dolaska'],
          ['synonym', 'važan → bitan, ključan, značajan'],
        ],
      },
      {
        type: 'rule',
        title: 'Paraphrase by Changing the Structure',
        body: 'Swapping synonyms alone produces something that still reads as the original with words replaced. The real move is structural: turn the verb into a noun or the noun into a verb, switch voice, condense a clause. "Vlada je donijela odluku" becomes "Donošenjem odluke vlada je…" — same content, genuinely different sentence.',
        highlight: 'change the structure, not just the words',
      },
      {
        type: 'rule',
        title: 'Cut the Examples First',
        body: 'When shortening, the reliable order is: remove examples, then remove qualifications, then remove supporting arguments, and keep the claim and its main reason to the last. A summary that keeps a vivid example and loses the thesis is the commonest failure, and it is entirely avoidable.',
        highlight: 'examples go first, the claim goes last',
      },
      {
        type: 'example',
        title: 'Summarising',
        items: [
          {
            hr: 'Riječ je o istraživanju o učenju jezika.',
            en: 'It is about a study on language learning.',
            note: 'riječ je o + locative',
          },
          {
            hr: 'Autor tvrdi da je motivacija važnija od dobi.',
            en: 'The author claims motivation matters more than age.',
            note: 'attribution + a comparative',
          },
          {
            hr: 'Ukratko, rezultati potvrđuju hipotezu.',
            en: 'In short, the results confirm the hypothesis.',
            note: 'ukratko opens the compression',
          },
          {
            hr: 'Prema članku, promjene stupaju na snagu u siječnju.',
            en: 'According to the article, the changes take effect in January.',
            note: 'stupiti na snagu — a fixed collocation',
          },
          {
            hr: 'Drugim riječima, ništa se bitno ne mijenja.',
            en: 'In other words, nothing substantial is changing.',
            note: 'drugim riječima — instrumental',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'U biti, autorica tvrdi da grad bez tramvaja gubi više nego što štedi.',
            en: 'Essentially, the author claims that a city without trams loses more than it saves.',
            note: 'u biti + attribution; nego što for the comparison',
          },
          {
            hr: 'Prema izvješću, broj turista u Istri porastao je za petinu u odnosu na lani.',
            en: 'According to the report, the number of tourists in Istria rose by a fifth compared with last year.',
            note: 'prema + dative; u odnosu na + accusative',
          },
          {
            hr: 'Članak navodi tri razloga, ali ističe da je najvažniji cijena stanovanja.',
            en: 'The article lists three reasons but stresses that the most important is the cost of housing.',
            note: 'navoditi and isticati — two reporting verbs of different weight',
          },
          {
            hr: 'Drugim riječima, odlukom o zatvaranju pruge stradali su oni koji nemaju auto.',
            en: 'In other words, the decision to close the line hurt those who have no car.',
            note: 'paraphrase by structure: a clause became "odlukom o zatvaranju"',
          },
          {
            hr: 'Glavna je poanta da rješenje nije u novim cestama, nego u boljem redu vožnje.',
            en: 'The main point is that the solution lies not in new roads but in a better timetable.',
            note: 'glavna je poanta; nije u… nego u',
          },
          {
            hr: 'Autor ne dokazuje, nego samo pretpostavlja da će se trend nastaviti.',
            en: 'The author does not prove, but merely assumes, that the trend will continue.',
            note: 'choosing the reporting verb that matches the strength of the claim',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Riječ je ___ novom zakonu."',
        options: ['o', 'za', 'na', 'od'],
        correct: 0,
        explanation:
          '"Riječ je o" plus the locative is the standard opener for saying what something is about. The preposition is fixed and the phrase is worth memorising whole.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'When shortening a text, what should go FIRST?',
        options: ['the main claim', 'the examples', 'the conclusion', 'the reasoning'],
        correct: 1,
        explanation:
          'Examples are the most expendable and the claim is the least. A summary that keeps a vivid example and loses the thesis is the commonest way to get this wrong.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is copying the source with the pronouns changed — a summary that keeps the author\'s sentences is not a summary, and an examiner marks it as copying. The second is losing the attribution halfway through, so that the author\'s claim reappears as your own: keep autor tvrdi da, prema članku, po njegovu mišljenju going to the end. The third is the reporting verb that overstates: "dokazuje" for a source that only suggests — match tvrdi, navodi, pretpostavlja and dokazuje to what the text actually does.',
        highlight: 'autor tvrdi da',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Riječ je ___." (It is about the new law.)',
            options: ['o novom zakonu', 'o novi zakon', 'za novi zakon', 'na novom zakonu'],
            correct: 0,
            explanation:
              '"Riječ je o" takes the locative: o novom zakonu. The preposition is fixed and the case follows it.',
          },
          {
            q: 'Which is a paraphrase by STRUCTURE of "Vlada je donijela odluku o štednji"?',
            options: [
              'Vlada je napravila odluku o štednji.',
              'Vlada je donijela zaključak o štednji.',
              'Vladina odluka o štednji…',
              'Vlada je donijela odluku o uštedi.',
            ],
            correct: 2,
            explanation:
              'Turning the verb into a noun phrase changes the sentence, not just the words. The others swap a synonym — and the first swaps in a collocation Croatian does not use.',
          },
          {
            q: 'Which reporting verb fits a source that only hints at a conclusion?',
            options: ['dokazuje', 'tvrdi', 'sugerira', 'jamči'],
            correct: 2,
            explanation:
              '"Sugerirati" reports a suggestion; "dokazivati" and "jamčiti" claim proof or a guarantee the source did not give, and "tvrditi" asserts.',
          },
          {
            q: 'What is wrong with "Prema autor, motivacija je važnija od dobi"?',
            options: [
              'nothing',
              '"prema" takes the dative: prema autoru',
              '"prema" should be "po"',
              '"važnija" should be "važnije"',
            ],
            correct: 1,
            explanation:
              '"Prema" governs the dative: prema autoru, prema članku. The comparative "važnija" correctly agrees with "motivacija".',
          },
          {
            q: 'When shortening a text, what goes LAST?',
            options: [
              'the examples',
              'the qualifications',
              'the supporting arguments',
              'the main claim and its main reason',
            ],
            correct: 3,
            explanation:
              'Examples go first, then qualifications, then supporting arguments; the claim and its main reason are kept to the end.',
          },
          {
            q: 'Which opener attributes rather than absorbs the claim?',
            options: [
              'Motivacija je važnija od dobi.',
              'Jasno je da je motivacija važnija od dobi.',
              'Autor tvrdi da je motivacija važnija od dobi.',
              'Svi znaju da je motivacija važnija od dobi.',
            ],
            correct: 2,
            explanation:
              'Only "autor tvrdi da" keeps the claim the author\'s. The others present it as fact, or as your own view.',
          },
          {
            q: 'Complete: "___ riječima, ništa se ne mijenja." (In other words)',
            options: ['Druge', 'Drugim', 'Drugih', 'Druga'],
            correct: 1,
            explanation:
              '"Drugim riječima" is a bare instrumental of means — "by other words". The phrase is fixed in that case.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Summarising — Key Takeaways',
        points: [
          'Riječ je o + locative — the standard opener',
          'Attribute constantly: Autor tvrdi da…, Prema članku…',
          'Paraphrase by changing STRUCTURE, not by swapping synonyms',
          'noun ↔ verb, active ↔ passive, clause → phrase',
          'Cut examples first, qualifications second, the claim last',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Academic Writing
  // ─────────────────────────────────────────────────────────
  {
    id: 'academic-writing',
    title: 'Academic Writing',
    subtitle: 'The essay, the register, and the conventions of Croatian scholarship',
    icon: '🎓',
    level: 'C1',
    duration: '~6 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'A Register With Rules',
        body: 'Croatian academic prose is more impersonal, more nominal and more explicitly signposted than English academic prose. Writing it well is largely a matter of applying the condensation and hedging you already have, plus knowing which conventions differ from the ones you learned in English.',
        icon: '🎓',
      },
      {
        type: 'table',
        title: 'The Structure',
        headers: ['Croatian', 'English'],
        rows: [
          ['sažetak', 'abstract'],
          ['uvod', 'introduction'],
          ['metodologija', 'methodology'],
          ['rasprava', 'discussion'],
          ['zaključak', 'conclusion'],
          ['literatura / popis literature', 'references'],
          ['fusnota', 'footnote'],
        ],
      },
      {
        type: 'rule',
        title: 'The Impersonal, Not the First Person',
        body: 'Where English increasingly permits "I argue", Croatian academic writing still prefers impersonal and plural forms. U ovom se radu analizira… Možemo zaključiti da… Smatra se da… Valja napomenuti da… Using "ja" in a Croatian paper reads as informal in a way it no longer necessarily does in English.',
        highlight: 'U ovom se radu analizira…',
      },
      {
        type: 'table',
        title: 'The Signposts',
        headers: ['Croatian', 'English'],
        rows: [
          ['U ovom radu…', 'In this paper…'],
          ['Cilj je rada…', 'The aim of the paper is…'],
          ['Valja napomenuti da…', 'It should be noted that…'],
          ['S obzirom na…', 'Given, in view of…'],
          ['Iz navedenog proizlazi…', 'From the above it follows…'],
          ['Za razliku od prethodnih istraživanja…', 'Unlike previous research…'],
        ],
      },
      {
        type: 'rule',
        title: 'Hedge, and Attribute',
        body: 'The hedging from B2 becomes obligatory here. "Rezultati sugeriraju" rather than "rezultati dokazuju". "Čini se da" rather than a bare assertion. And every borrowed claim carries its source: Prema Kovaču (2020)… Kako navodi Horvat… An unattributed claim in a Croatian paper is treated exactly as it would be in English.',
        highlight: 'Rezultati sugeriraju da…',
      },
      {
        type: 'rule',
        title: 'Nominal Style, Within Reason',
        body: 'Academic Croatian leans on the condensation you learned: provođenje istraživanja, analiza podataka, na temelju rezultata. Used well this is compact and precise. Used badly it produces the stacked-noun prose style guides complain about — and the same rule applies as before: condense one clause, not three.',
        highlight: 'na temelju rezultata',
      },
      {
        type: 'rule',
        title: 'A Convention That Differs',
        body: 'Croatian academic writing signposts more heavily than English, and what would read as over-explaining in an English paper is expected here. Explicit "U prvom dijelu rada… U drugom dijelu…" is normal rather than clumsy. If you are transferring English habits, the adjustment is usually towards MORE signposting, not less.',
        highlight: 'U prvom dijelu rada…',
      },
      {
        type: 'example',
        title: 'Academic Sentences',
        items: [
          {
            hr: 'Cilj je ovoga rada analizirati utjecaj dobi na usvajanje jezika.',
            en: 'The aim of this paper is to analyse the influence of age on language acquisition.',
            note: 'utjecaj NA + accusative',
          },
          {
            hr: 'U ovom se radu polazi od pretpostavke da…',
            en: 'This paper proceeds from the assumption that…',
            note: 'impersonal se, polaziti od + genitive',
          },
          {
            hr: 'Valja napomenuti da je uzorak bio malen.',
            en: 'It should be noted that the sample was small.',
            note: 'the standard qualifying move',
          },
          {
            hr: 'Rezultati sugeriraju da postoji povezanost.',
            en: 'The results suggest that a connection exists.',
            note: 'sugerirati, not dokazivati',
          },
          {
            hr: 'Iz navedenog proizlazi da su potrebna daljnja istraživanja.',
            en: 'From the above it follows that further research is needed.',
            note: 'proizlaziti iz + genitive',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'U prvom se dijelu rada prikazuje dosadašnja literatura, a u drugom se iznose rezultati.',
            en: 'The first part of the paper reviews the existing literature, and the second presents the results.',
            note: 'explicit signposting with the impersonal se',
          },
          {
            hr: 'Kako navodi Horvat (2019), uzorak od stotinu ispitanika nije dovoljan za takav zaključak.',
            en: 'As Horvat (2019) notes, a sample of a hundred participants is not sufficient for such a conclusion.',
            note: 'kako navodi + surname (year) — citing',
          },
          {
            hr: 'Čini se da dob ispitanika utječe na rezultate, premda povezanost nije jaka.',
            en: 'Age appears to affect the results, although the connection is not strong.',
            note: 'čini se da, then premda — hedge, then qualify',
          },
          {
            hr: 'Na temelju dobivenih podataka može se zaključiti da hipoteza nije potvrđena.',
            en: 'On the basis of the data obtained it can be concluded that the hypothesis was not confirmed.',
            note: 'na temelju + genitive; može se zaključiti — an impersonal conclusion',
          },
          {
            hr: 'Zaključno, rezultati upućuju na potrebu daljnjih istraživanja s većim uzorkom.',
            en: 'In conclusion, the results point to the need for further research with a larger sample.',
            note: 'zaključno; upućivati na + accusative — the standard closing move',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the expected academic register in Croatian?',
        options: [
          'Ja tvrdim da…',
          'U ovom se radu analizira…',
          'Mislim da je ovo dobro.',
          'Pa, moglo bi se reći…',
        ],
        correct: 1,
        explanation:
          'Croatian academic prose prefers impersonal and plural forms. "Ja tvrdim" reads as informal in a way it increasingly does not in English writing.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which verb is appropriate for a cautious research claim?',
        options: ['dokazuju', 'sugeriraju', 'potvrđuju sigurno', 'jamče'],
        correct: 1,
        explanation:
          '"Sugeriraju" hedges appropriately; "dokazuju" claims proof. Hedging is not optional politeness in academic writing — it is a claim about how strong your evidence is.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is the English first person: "Ja smatram da…" — a Croatian paper prefers the impersonal, smatra se da or u ovom se radu smatra. The second is the missing "se" in the impersonal: "U ovom radu analizira utjecaj" has no subject at all; the reflexive is what makes it impersonal, u ovom se radu analizira. The third is the unhedged claim: "rezultati dokazuju" where the evidence only suggests — sugeriraju, upućuju na and čini se da are the verbs that match a sample of thirty.',
        highlight: 'u ovom se radu analizira',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "U ovom ___ radu analizira utjecaj dobi."',
            options: ['je', 'se', 'su', 'ja'],
            correct: 1,
            explanation:
              'The impersonal needs "se": u ovom se radu analizira. Without it the sentence has no subject, and "ja" is the first person the register avoids.',
          },
          {
            q: 'Which sentence is in the expected academic register?',
            options: [
              'Ja mislim da je uzorak malen.',
              'Uzorak je malen, to je jasno.',
              'Valja napomenuti da je uzorak bio malen.',
              'Pa, uzorak je bio malen.',
            ],
            correct: 2,
            explanation:
              '"Valja napomenuti da" is the standard qualifying move. The first person, the bare assertion and the discourse particle all belong to other registers.',
          },
          {
            q: 'Which citation form is correct?',
            options: [
              'Prema Kovač (2020)…',
              'Prema Kovaču (2020)…',
              'Prema Kovača (2020)…',
              'Prema Kovačom (2020)…',
            ],
            correct: 1,
            explanation:
              '"Prema" governs the dative, and a surname declines like any masculine noun: prema Kovaču.',
          },
          {
            q: 'What is wrong with "Rezultati dokazuju da postoji povezanost, iako je uzorak imao trideset ispitanika"?',
            options: [
              'nothing',
              'the claim overstates the evidence: sugeriraju or upućuju na',
              '"iako" should be "ukoliko"',
              '"ispitanika" should be "ispitanici"',
            ],
            correct: 1,
            explanation:
              'Hedging is a claim about how strong your evidence is. Thirty participants "suggest"; they do not "prove". The genitive plural after a number is correct.',
          },
          {
            q: 'What is "rasprava" in the structure of a paper?',
            options: ['the abstract', 'the introduction', 'the discussion', 'the references'],
            correct: 2,
            explanation:
              'Sažetak, uvod, metodologija, rasprava, zaključak, literatura — rasprava is the discussion section.',
          },
          {
            q: 'How does Croatian academic signposting compare with English?',
            options: [
              'it is lighter — explicit "u prvom dijelu" reads as clumsy',
              'it is heavier — explicit section signposting is expected',
              'it is identical',
              'it is forbidden in the abstract',
            ],
            correct: 1,
            explanation:
              'What would read as over-explaining in an English paper is expected in a Croatian one. Transferring English habits means adjusting towards more signposting.',
          },
          {
            q: 'Complete: "Iz navedenog ___ da su potrebna daljnja istraživanja."',
            options: ['proizlazi', 'proizlaze', 'proizlazio', 'proizlaziti'],
            correct: 0,
            explanation:
              '"Iz navedenog proizlazi da" — third-person singular present, because the subject is the "da" clause. A plural, a participle or an infinitive cannot head the sentence.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Academic Writing — Key Takeaways',
        points: [
          'sažetak, uvod, metodologija, rasprava, zaključak, literatura',
          'Impersonal and plural, not the first person: U ovom se radu…',
          'Hedge (sugeriraju, čini se) and attribute (Prema Kovaču)',
          'Nominal style is expected — but condense one clause, not three',
          'Croatian signposts MORE than English, not less',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Debate and Persuasion
  // ─────────────────────────────────────────────────────────
  {
    id: 'debate-persuasion',
    title: 'Debate and Persuasion',
    subtitle: 'Rebuttal, rhetorical moves, and holding a position under pressure',
    icon: '⚔️',
    level: 'C1',
    duration: '~5 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'Argument Under Pressure',
        body: 'B2 taught you to build an argument. This is what happens when somebody argues back: conceding what is true, isolating what is not, and reframing without conceding the whole point. The moves are the same in any language; the phrases are what you need.',
        icon: '⚔️',
      },
      {
        type: 'table',
        title: 'Rebutting',
        headers: ['Croatian', 'English'],
        rows: [
          ['To stoji, ali…', 'That holds, but…'],
          ['Slažem se do određene mjere.', 'I agree to a certain extent.'],
          ['Tu se ne bih složio.', 'There I would not agree.'],
          ['To je točno samo djelomično.', 'That is only partly true.'],
          ['Upravo suprotno.', 'Quite the opposite.'],
          ['Ne bih rekao da je to tako.', 'I would not say that is so.'],
        ],
      },
      {
        type: 'rule',
        title: 'Concede the True Part First',
        body: '"To stoji, ali…" — that holds, but — is the standard opening because it grants the part of the opposing claim that is correct before isolating the part that is not. Refusing to concede anything reads as unserious in a Croatian discussion, and it also makes the disagreement harder to hear. The conditional does the rest of the softening.',
        highlight: 'To stoji, ali…',
      },
      {
        type: 'table',
        title: 'Pressing a Point',
        headers: ['Croatian', 'English'],
        rows: [
          ['Upravo je u tome stvar.', 'That is exactly the point.'],
          ['Ne radi se o tome, nego o…', 'It is not about that, but about…'],
          ['Vratimo se na…', 'Let us return to…'],
          ['To ne odgovara na pitanje.', 'That does not answer the question.'],
          ['Možete li to potkrijepiti?', 'Can you support that?'],
          ['Iz toga ne slijedi da…', 'It does not follow that…'],
        ],
      },
      {
        type: 'rule',
        title: 'Ne Radi Se O … Nego O …',
        body: 'The reframing move, and one of the most useful sentences in the lesson. "Ne radi se o novcu, nego o principu." It rejects the framing rather than the claim — which is often the real disagreement. Note "nego" after the negative, and both halves in the locative after "o".',
        highlight: 'Ne radi se o novcu, nego o principu.',
      },
      {
        type: 'rule',
        title: 'Asking for Evidence',
        body: 'Two phrases that raise the standard without raising the temperature: "Možete li to potkrijepiti?" (can you support that) and "Na temelju čega?" (on what basis). Both are neutral rather than aggressive, and both put the burden back where it belongs. "Iz toga ne slijedi da…" names a specific logical gap.',
        highlight: 'Na temelju čega?',
      },
      {
        type: 'rule',
        title: 'Losing Gracefully Is a Move Too',
        body: 'Croatian has ready phrases for changing your mind, and using them costs nothing: "Imate pravo, nisam o tome razmišljao." "Prihvaćam argument." "U pravu ste, povlačim to." Conceding a point explicitly makes the points you do hold more credible, in Croatian exactly as in English.',
        highlight: 'Prihvaćam argument.',
      },
      {
        type: 'example',
        title: 'A Disagreement',
        items: [
          {
            hr: 'To stoji, ali ne vrijedi u svim slučajevima.',
            en: 'That holds, but it does not apply in every case.',
            note: 'concede, then isolate',
          },
          {
            hr: 'Ne radi se o troškovima, nego o prioritetima.',
            en: 'It is not about the costs, it is about priorities.',
            note: 'reframing, and nego after the negative',
          },
          {
            hr: 'Na temelju čega to tvrdite?',
            en: 'On what basis do you claim that?',
            note: 'na temelju + genitive: čega',
          },
          {
            hr: 'Iz toga ne slijedi da je rješenje pogrešno.',
            en: 'It does not follow that the solution is wrong.',
            note: 'naming the logical gap',
          },
          {
            hr: 'Imate pravo, to nisam uzeo u obzir.',
            en: 'You are right, I had not taken that into account.',
            note: 'uzeti u obzir — a fixed collocation',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Slažem se do određene mjere, no problem nije u broju turista, nego u tome gdje spavaju.',
            en: 'I agree to a certain extent, but the problem is not the number of tourists but where they sleep.',
            note: 'concede, then reframe with nije u… nego u',
          },
          {
            hr: 'Tu se ne bih složio: podaci iz Rijeke pokazuju upravo suprotno.',
            en: 'There I would not agree: the data from Rijeka show quite the opposite.',
            note: 'the conditional softens a firm disagreement',
          },
          {
            hr: 'Prvo, cijene rastu; drugo, plaće stoje; dakle, ljudi odlaze.',
            en: 'First, prices are rising; second, wages are flat; therefore, people are leaving.',
            note: 'prvo, drugo, dakle — the connectives that hold an argument together',
          },
          {
            hr: 'Možete li to potkrijepiti brojkama, a ne samo dojmom?',
            en: 'Can you back that up with figures, and not just an impression?',
            note: 'asking for evidence without raising the temperature',
          },
          {
            hr: 'U pravu ste, povlačim tu tvrdnju, ali glavni argument i dalje stoji.',
            en: 'You are right, I withdraw that claim, but the main argument still stands.',
            note: 'conceding one point to keep the rest',
          },
          {
            hr: 'Vratimo se na ono što je bitno: tko će to platiti?',
            en: 'Let us return to what matters: who is going to pay for it?',
            note: 'vratiti se na + accusative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which move rejects the FRAMING rather than the claim?',
        options: [
          'To stoji, ali…',
          'Ne radi se o tome, nego o…',
          'Upravo suprotno.',
          'Prihvaćam argument.',
        ],
        correct: 1,
        explanation:
          '"Ne radi se o X, nego o Y" says the discussion is about the wrong thing — which is frequently the real disagreement rather than the stated one.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Why open a rebuttal with "To stoji, ali…"?',
        options: [
          'It is more formal.',
          'It concedes the true part before isolating the false part.',
          'It is required grammatically.',
          'It ends the discussion.',
        ],
        correct: 1,
        explanation:
          'Granting what is correct makes the disagreement both more credible and easier to hear. Conceding nothing reads as unserious in a Croatian discussion.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is disagreeing in the bare indicative: "Ne slažem se" is grammatical and abrupt; the conditional is what keeps a strong disagreement polite — ne bih se složio, tu se ne bih složio. The second is "ali" after a negative where Croatian needs nego: "ne radi se o novcu, ali o principu" — the reframing move is nego. The third is refusing to concede anything, which reads as unserious: grant the true part with to stoji, ali… before you isolate the false one.',
        highlight: 'ne bih se složio',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ne radi se o novcu, ___ o principu."',
            options: ['ali', 'nego', 'već ne', 'a'],
            correct: 1,
            explanation:
              'After a negated first half the corrective contrast is "nego" (or "već"). "Ali" and "a" cannot carry "not X but Y".',
          },
          {
            q: 'Which is the most polite way to disagree strongly?',
            options: ['Ne slažem se.', 'Nemate pravo.', 'Tu se ne bih složio.', 'To nije točno.'],
            correct: 2,
            explanation:
              'The conditional softens without weakening: tu se ne bih složio. The other three are grammatical and blunt.',
          },
          {
            q: 'Which phrase concedes before rebutting?',
            options: ['Upravo suprotno.', 'To stoji, ali…', 'Na temelju čega?', 'Vratimo se na…'],
            correct: 1,
            explanation:
              '"To stoji, ali…" grants the true part and then isolates the rest. "Upravo suprotno" concedes nothing; the other two ask and redirect.',
          },
          {
            q: 'Complete: "Na temelju ___ to tvrdite?"',
            options: ['što', 'čemu', 'čime', 'čega'],
            correct: 3,
            explanation:
              '"Na temelju" takes the genitive, and the genitive of "što" is "čega": na temelju čega.',
          },
          {
            q: 'What is wrong with "Iz toga ne slijedi da je rješenje pogrešno, ali da treba još podataka"?',
            options: [
              'nothing',
              'after the negated clause the contrast is "nego", not "ali": …nego da treba još podataka',
              '"slijedi" should be "sljedi"',
              '"pogrešno" should be "pogrešan"',
            ],
            correct: 1,
            explanation:
              '"Not that X, but that Y" is "ne… nego…". "Pogrešno" correctly agrees with the neuter "rješenje".',
          },
          {
            q: 'Which sequence builds an argument aloud?',
            options: [
              'dakle… prvo… drugo…',
              'prvo… drugo… dakle…',
              'uostalom… prvo… naime…',
              'dakle… naime… prvo…',
            ],
            correct: 1,
            explanation:
              'Points first, conclusion last: prvo, drugo, dakle. "Dakle" draws the conclusion and cannot open.',
          },
          {
            q: '"Prihvaćam argument." What does saying this do for your position?',
            options: [
              'ends the debate in defeat',
              'is considered rude',
              'is only used in writing',
              'makes your remaining points more credible',
            ],
            correct: 3,
            explanation:
              'Conceding a point explicitly costs nothing and makes the points you do hold more credible — in Croatian exactly as in English.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Debate — Key Takeaways',
        points: [
          'To stoji, ali… — concede the true part before isolating the false one',
          'Ne radi se o X, nego o Y — reject the framing, not just the claim',
          'Na temelju čega? and Možete li to potkrijepiti? raise the standard calmly',
          'Iz toga ne slijedi da… names a specific logical gap',
          'Conceding a point explicitly makes your other points more credible',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Formal Speech and Ceremony
  // ─────────────────────────────────────────────────────────
  {
    id: 'formal-speech',
    title: 'Formal Speech and Ceremony',
    subtitle: 'Toasts, tributes and speaking on an occasion',
    icon: '🥂',
    level: 'C1',
    duration: '~5 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'When You Are Expected to Say Something',
        body: 'A wedding, a retirement, a funeral, a family gathering where you are the guest from abroad. Croatian occasions come with expectations about who speaks and roughly what they say — and for a diaspora learner this is often the highest-stakes Croatian they will ever produce.',
        icon: '🥂',
      },
      {
        type: 'table',
        title: 'Opening a Toast',
        headers: ['Croatian', 'English'],
        rows: [
          ['Dragi prijatelji, …', 'Dear friends, …'],
          ['Poštovani uzvanici, …', 'Distinguished guests, …'],
          ['Dopustite mi da kažem nekoliko riječi.', 'Allow me to say a few words.'],
          ['Htio bih nazdraviti…', 'I would like to raise a toast to…'],
          ['U ime cijele obitelji…', 'On behalf of the whole family…'],
          ['Živjeli!', 'Cheers! To life!'],
        ],
      },
      {
        type: 'rule',
        title: 'Nazdraviti Takes the Dative',
        body: '"Nazdraviti" — to toast — governs the dative: Nazdravljam mladencima. Nazdravimo domaćinu. It is one more entry for the government lesson, and it is the verb the whole occasion turns on. The glass goes up on "Živjeli!" and eye contact is expected.',
        highlight: 'Nazdravljam mladencima.',
      },
      {
        type: 'table',
        title: 'The Occasions',
        headers: ['Croatian', 'English', 'What is said'],
        rows: [
          ['vjenčanje', 'wedding', 'Sretno mladencima!'],
          ['krštenje', 'christening', 'Čestitam!'],
          ['rođendan', 'birthday', 'Sretan rođendan, sve najbolje!'],
          ['umirovljenje', 'retirement', 'Uživajte u zasluženom odmoru.'],
          ['sprovod', 'funeral', 'Moja iskrena sućut.'],
          ['obljetnica', 'anniversary', 'Još mnogo godina!'],
        ],
      },
      {
        type: 'rule',
        title: 'Sućut, and Only Sućut',
        body: 'Condolences in Croatian are "sućut" — Moja iskrena sućut. Primite moju sućut. This is the standard and the only form to use. Getting the word right matters more here than anywhere else in the language, because it is the one occasion where a fumbled phrase is genuinely painful rather than merely awkward.',
        highlight: 'Moja iskrena sućut.',
      },
      {
        type: 'rule',
        title: 'Short Is Correct',
        body: 'A Croatian toast is typically two or three sentences: an address, a reason, a wish. Dragi Ivane i Ana, hvala što ste nas okupili. Želim vam puno sreće i zdravlja. Živjeli! Length is not a virtue here, and for a learner the brevity is a gift — three well-formed sentences delivered warmly land better than a long speech delivered anxiously.',
        highlight: 'address, reason, wish',
      },
      {
        type: 'rule',
        title: 'The Diaspora Speech',
        body: 'If you are the relative who came from abroad, you will very likely be asked to say something, and the expected content is simple: gratitude, a mention of family, and an acknowledgement that your Croatian is imperfect — which is invariably received warmly rather than critically. "Oprostite na mom hrvatskom, ali htio sam vam reći…" is a genuinely disarming opening.',
        highlight: 'Oprostite na mom hrvatskom…',
      },
      {
        type: 'example',
        title: 'A Short Toast',
        items: [
          {
            hr: 'Dragi prijatelji, dopustite mi nekoliko riječi.',
            en: 'Dear friends, allow me a few words.',
            note: 'the standard opening',
          },
          {
            hr: 'U ime cijele obitelji, hvala vam što ste došli.',
            en: 'On behalf of the whole family, thank you for coming.',
            note: 'u ime + genitive',
          },
          {
            hr: 'Želim vam puno sreće, zdravlja i ljubavi.',
            en: 'I wish you much happiness, health and love.',
            note: 'three genitives after puno',
          },
          {
            hr: 'Nazdravimo mladencima. Živjeli!',
            en: 'Let us toast the newlyweds. Cheers!',
            note: 'nazdraviti + dative',
          },
          {
            hr: 'Primite moju iskrenu sućut.',
            en: 'Please accept my sincere condolences.',
            note: 'the correct and only form',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Poštovani uzvanici, drage kolegice i kolege, čast mi je što vas mogu pozdraviti u ime cijelog odjela.',
            en: 'Distinguished guests, dear colleagues, it is an honour to greet you on behalf of the whole department.',
            note: 'čast mi je što — the formal opener; u ime + genitive',
          },
          {
            hr: 'Zahvaljujem svima koji su pomogli da ova večer uspije, a posebno domaćinima.',
            en: 'I thank everyone who helped make this evening a success, and especially the hosts.',
            note: 'zahvaljivati + dative (svima, domaćinima)',
          },
          {
            hr: 'Dragoj Mariji želimo još mnogo zdravih i sretnih godina u krugu obitelji.',
            en: 'To dear Marija we wish many more healthy and happy years surrounded by her family.',
            note: 'a birthday wish: dative of the person, genitive plural after mnogo',
          },
          {
            hr: 'Nazdravimo mladencima i neka im svaki dan bude kao ovaj. Živjeli!',
            en: 'Let us toast the newlyweds, and may every day be like this one. Cheers!',
            note: 'neka + verb = may; the close a Croatian toast expects',
          },
          {
            hr: 'Ovim se riječima opraštamo od drage kolegice i želimo joj miran i zaslužen odmor.',
            en: 'With these words we say farewell to a dear colleague and wish her a peaceful and well-earned rest.',
            note: 'opraštati se od + genitive — a retirement send-off',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Nazdravljam ___." (I toast the newlyweds — mladenci.)',
        options: ['mladence', 'mladenaca', 'mladencima', 'mladenci'],
        correct: 2,
        explanation:
          '"Nazdraviti" governs the dative, and the dative plural is "mladencima". It is one more verb for the government list.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How long is a typical Croatian toast?',
        options: [
          'ten minutes',
          'two or three sentences',
          'one word',
          'as long as the speaker likes',
        ],
        correct: 1,
        explanation:
          'An address, a reason and a wish — usually two or three sentences. Brevity is the convention, which happens to suit a learner very well.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is the English toast verb: "Želim nazdraviti za mladence" — nazdraviti governs the dative with no preposition: nazdravljam mladencima. The second is a translated opener, "Hvala što ste ovdje danas, ja sam…" — a Croatian occasion opens with the address, dragi prijatelji or poštovani uzvanici, before anything else. The third is the wrong word for condolences; any improvised phrase built on "žao" is not it — the formula is moja iskrena sućut, and only that.',
        highlight: 'nazdravljam mladencima',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Htio bih nazdraviti ___." (the hosts — domaćini)',
            options: ['domaćine', 'za domaćine', 'domaćinima', 'domaćina'],
            correct: 2,
            explanation:
              '"Nazdraviti" governs the dative with no preposition: nazdraviti domaćinima. "Za" is the English "to" carried across.',
          },
          {
            q: 'Which is the correct condolence?',
            options: [
              'Moja iskrena sućut.',
              'Moje iskreno žaljenje.',
              'Žao mi je za vas.',
              'Moje sažaljenje.',
            ],
            correct: 0,
            explanation:
              'Condolences are "sućut", and only sućut. "Žaljenje" is regret, "sažaljenje" is pity, and "žao mi je za vas" is not a phrase Croatian uses for this.',
          },
          {
            q: 'Which opening is Croatian rather than translated?',
            options: [
              'Dobro jutro svima, ja sam Ivan i…',
              'Dragi prijatelji, dopustite mi nekoliko riječi.',
              'Hvala što ste došli, moje ime je Ivan.',
              'Dobar dan, ovo je moj govor.',
            ],
            correct: 1,
            explanation:
              'A Croatian address opens with the addressees and a request for a few words. Introducing yourself first is the English convention.',
          },
          {
            q: 'What is said at a wedding?',
            options: [
              'Sretno mladencima!',
              'Moja iskrena sućut.',
              'Uživajte u zasluženom odmoru.',
              'Još mnogo godina!',
            ],
            correct: 0,
            explanation:
              '"Sretno mladencima" — good luck to the newlyweds, with the dative. The others belong to a funeral, a retirement and an anniversary.',
          },
          {
            q: 'What is wrong with "U ime cijela obitelj, hvala vam što ste došli"?',
            options: [
              'nothing',
              '"u ime" takes the genitive: u ime cijele obitelji',
              '"hvala" should be "hvala na"',
              '"vam" should be "vas"',
            ],
            correct: 1,
            explanation:
              '"U ime" governs the genitive: u ime cijele obitelji. "Hvala vam što" is correct as it stands.',
          },
          {
            q: 'How long should a Croatian toast be?',
            options: [
              'as long as an English best-man speech',
              'two or three sentences: an address, a reason, a wish',
              'one word',
              'at least ten minutes',
            ],
            correct: 1,
            explanation:
              'Address, reason, wish. Brevity is the convention, and it suits a learner: three warm sentences land better than a long anxious speech.',
          },
          {
            q: 'Complete: "Želim vam puno ___." (health — zdravlje)',
            options: ['zdravlje', 'zdravlja', 'zdravlju', 'zdravljem'],
            correct: 1,
            explanation:
              '"Puno" takes the genitive: puno sreće, zdravlja i ljubavi. The wish is the standard one and the case is the standard slip.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Formal Speech — Key Takeaways',
        points: [
          'Dragi prijatelji / Poštovani uzvanici — then a few words',
          'nazdraviti takes the DATIVE: Nazdravljam mladencima.',
          'Condolences are sućut, and only sućut',
          'Address, reason, wish — two or three sentences is the convention',
          'Apologising for your Croatian is disarming, not embarrassing',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Translation Traps
  // ─────────────────────────────────────────────────────────
  {
    id: 'translation-pitfalls',
    title: 'Translation Traps',
    subtitle: 'False friends, calques, and structures that do not transfer',
    icon: '🪤',
    level: 'C1',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'The Errors That Survive to C1',
        body: 'The mistakes that last longest are the ones that produce grammatical Croatian. A false friend, a calqued phrase or an English structure rendered word for word all pass every rule you know — which is exactly why they persist. This lesson is a list of the ones that actually recur.',
        icon: '🪤',
      },
      {
        type: 'table',
        title: 'False Friends',
        headers: ['Croatian', 'Actually means', 'Not'],
        rows: [
          ['eventualno', 'possibly, if need be', 'eventually'],
          ['aktualan', 'current, topical', 'actual'],
          ['simpatičan', 'likeable, nice', 'sympathetic'],
          ['patetičan', 'pompous, overblown', 'pathetic'],
          ['kontrola', 'a check, inspection', 'control (power over)'],
          ['fabrika / fabula', 'plot (fabula)', 'factory'],
          ['pretendirati', 'to lay claim to', 'to pretend'],
        ],
      },
      {
        type: 'rule',
        title: 'Eventualno Is the Costly One',
        body: '"Eventualno" means possibly, or if it comes to that — Eventualno možemo odgoditi. It does NOT mean eventually. Rendering "we will eventually finish" as "eventualno ćemo završiti" says something close to "we might finish, conceivably", which in a professional context is a meaningfully different commitment.',
        highlight: 'eventualno = possibly, not eventually',
      },
      {
        type: 'table',
        title: 'Calques to Avoid',
        headers: ['Avoid', 'Prefer', 'Why'],
        rows: [
          ['od strane odbora', 'odbor je odlučio', 'passive agent is un-Croatian'],
          ['po pitanju čega', 'što se tiče čega', 'bureaucratic calque'],
          ['vršiti analizu', 'analizirati', 'empty light verb'],
          ['u slučaju da treba', 'ako treba', 'padding'],
          ['na dnevnoj bazi', 'svakodnevno', 'calque from English'],
        ],
      },
      {
        type: 'rule',
        title: 'Od Strane Is the Famous One',
        body: 'Croatian style guides have objected to "od strane" — a passive agent phrase — for decades, and it remains common in bureaucratic writing. "Odluka je donesena od strane odbora" is better as "Odbor je donio odluku". This is the passive-choices lesson applied: if the agent matters enough to name, make it the subject.',
        highlight: 'Odbor je donio odluku.',
      },
      {
        type: 'rule',
        title: 'Vršiti and the Empty Light Verb',
        body: 'A whole family of bureaucratic constructions replaces a plain verb with a light verb plus a noun: vršiti analizu instead of analizirati, izvršiti plaćanje instead of platiti, obaviti provjeru instead of provjeriti. Each is longer and says less. When you catch yourself writing one, the plain verb is almost always available.',
        highlight: 'analizirati, not vršiti analizu',
      },
      {
        type: 'rule',
        title: 'Structures That Do Not Transfer',
        body: 'Three English habits to unlearn. The progressive — "I am reading" is simply "čitam", never a compound. The possessive with body parts and family — "my head hurts" is "boli me glava", with a dative or accusative rather than a possessive. And existential "there is" — "ima" or "nema", not a construction built on "biti".',
        highlight: 'čitam · boli me glava · ima / nema',
      },
      {
        type: 'example',
        title: 'Before and After',
        items: [
          {
            hr: 'Odbor je donio odluku.',
            en: 'The decision was made by the committee.',
            note: 'active, rather than od strane odbora',
          },
          {
            hr: 'Analizirali smo podatke.',
            en: 'We analysed the data.',
            note: 'not vršili smo analizu podataka',
          },
          {
            hr: 'Što se tiče rokova, sve je u redu.',
            en: 'As regards the deadlines, everything is fine.',
            note: 'not po pitanju rokova',
          },
          {
            hr: 'Eventualno možemo odgoditi sastanak.',
            en: 'We could possibly postpone the meeting.',
            note: 'possibly — not eventually',
          },
          {
            hr: 'Svakodnevno provjeravam poštu.',
            en: 'I check the post daily.',
            note: 'not na dnevnoj bazi',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Čitam novine dok čekam vlak, pa mi vrijeme brže prođe.',
            en: 'I am reading the paper while I wait for the train, so the time passes faster.',
            note: 'no progressive: čitam is the whole of "I am reading"',
          },
          {
            hr: 'Bole me leđa otkad sam premjestio namještaj u dnevnu sobu.',
            en: 'My back has been hurting since I moved the furniture in the living room.',
            note: 'body part as subject, the person in the accusative — no possessive',
          },
          {
            hr: 'U Puli ima mnogo rimskih ostataka, a u našem selu nema ni jednog.',
            en: 'There are many Roman remains in Pula, and in our village there is not a single one.',
            note: 'ima / nema for "there is / there are"',
          },
          {
            hr: 'Nekoliko je aktualnih tema ostalo bez odgovora, pa ćemo ih eventualno rješavati sljedeći tjedan.',
            en: 'A few current topics were left unanswered, so we may possibly deal with them next week.',
            note: 'aktualan = current; eventualno = possibly, not eventually',
          },
          {
            hr: 'Škola je uvela nova pravila, a ravnatelj ih je sam objasnio roditeljima.',
            en: 'The school introduced new rules, and the headteacher himself explained them to the parents.',
            note: 'agents as subjects — no od strane anywhere',
          },
          {
            hr: 'Bio je vrlo simpatičan, ali njegov govor bio je patetičan i predug.',
            en: 'He was very likeable, but his speech was pompous and too long.',
            note: 'simpatičan = likeable; patetičan = pompous — two false friends',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What does "eventualno" mean?',
        options: ['eventually', 'possibly, if need be', 'immediately', 'finally'],
        correct: 1,
        explanation:
          'It means possibly or if it comes to that. Using it for "eventually" turns a commitment into a maybe, which in professional writing is a meaningful difference.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is better Croatian?',
        options: [
          'Analiza je izvršena od strane tima.',
          'Tim je analizirao podatke.',
          'Vršenje analize obavio je tim.',
        ],
        correct: 1,
        explanation:
          'The active with the agent as subject is shorter and more natural. "Od strane" is a long-criticised calque and "vršiti analizu" replaces a plain verb with an empty light verb plus a noun.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The three that survive longest. "Ja sam čitajući" or "ja sam čitam" for the progressive — Croatian has no compound present, čitam is the whole of "I am reading". "Moja glava boli" for a headache — the body part is the subject and the person is the object: boli me glava. And "eventualno ćemo završiti" for "we will eventually finish" — eventualno means possibly, so the sentence has quietly turned a promise into a maybe; the words wanted are na kraju or s vremenom.',
        highlight: 'boli me glava',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How do you say "My head hurts"?',
            options: [
              'Moja glava boli.',
              'Boli me glava.',
              'Boli moju glavu.',
              'Glava me boli sebe.',
            ],
            correct: 1,
            explanation:
              'The body part is the subject and the person is the accusative object: boli me glava. The possessive is the English structure carried across.',
          },
          {
            q: 'Complete: "U hladnjaku ___ mlijeka." (there is no milk)',
            options: ['nije', 'nema', 'ne ima', 'ne'],
            correct: 1,
            explanation:
              'Existential "there is / there is no" is ima / nema, with the genitive for the negative: nema mlijeka. "Ne ima" is not a form — the negative of imati is nema.',
          },
          {
            q: 'What does "aktualan" mean?',
            options: ['actual, real', 'current, topical', 'active', 'accurate'],
            correct: 1,
            explanation:
              '"Aktualan" is current or topical — aktualna tema. The English "actual" is "stvaran" or "pravi".',
          },
          {
            q: 'Which is better Croatian?',
            options: [
              'Izvještaj je napisan od strane tima.',
              'Tim je napisao izvještaj.',
              'Pisanje izvještaja izvršio je tim.',
              'Izvještaj je bio napisan sa timom.',
            ],
            correct: 1,
            explanation:
              'The active with the agent as subject. "Od strane" is the calque, "izvršiti pisanje" is an empty light verb, and "sa timom" has the wrong form of the preposition before t.',
          },
          {
            q: 'What is wrong with "Sastanak ćemo eventualno održati sljedeći tjedan, to je sigurno"?',
            options: [
              'nothing',
              '"eventualno" means possibly, which contradicts "to je sigurno"; for "eventually" say na kraju or s vremenom',
              '"održati" should be "imati"',
              '"sljedeći" should be "idući"',
            ],
            correct: 1,
            explanation:
              'Eventualno is the costly false friend: it turns a commitment into a maybe. "Održati sastanak" is the right collocation and "sljedeći" and "idući" are both fine.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ja sam čitam knjigu.',
              'Ja sam čitajući knjigu.',
              'Čitam knjigu.',
              'Ja jesam čitati knjigu.',
            ],
            correct: 2,
            explanation:
              'There is no progressive: the simple present covers both "I read" and "I am reading". The others build a compound tense Croatian does not have.',
          },
          {
            q: 'Complete: "Što se ___ rokova, sve je u redu." (as regards the deadlines)',
            options: ['tiče', 'tiču', 'tiču se', 'tiče se'],
            correct: 0,
            explanation:
              '"Što se tiče" + genitive is the phrase; "se" is already there, so a second one is wrong, and the verb is singular.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Translation Traps — Key Takeaways',
        points: [
          'eventualno = possibly · aktualan = current · simpatičan = likeable',
          'patetičan = pompous, not pathetic',
          'Avoid od strane — make the agent the subject',
          'Avoid vršiti/izvršiti + noun where a plain verb exists',
          'No progressive, no possessive with body parts, ima/nema for "there is"',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Proofreading Your Own Croatian
  // ─────────────────────────────────────────────────────────
  {
    id: 'proofreading-editing',
    title: 'Proofreading Your Own Croatian',
    subtitle: 'The errors to hunt for, and the order to hunt them in',
    icon: '🔎',
    level: 'C1',
    duration: '~5 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Takes Editing Seriously',
        body: 'Croatian publishing employs a "lektor" — a language editor who checks every text before it appears — and the profession has real standing. That culture is worth knowing about, because it means written Croatian is held to a visible standard, and because the lektor\'s checklist is a good one to borrow.',
        icon: '🔎',
      },
      {
        type: 'table',
        title: 'The Usual Suspects',
        headers: ['Check', 'Example'],
        rows: [
          ['ije / je', 'vrijeme but vremena; mlijeko but mliječni'],
          ['č / ć', 'ručak, but voće'],
          ['comma before što / koji', 'Znam da dolaziš — no comma'],
          ['s / sa', 'sa sestrom, but s bratom'],
          ['ne + verb spacing', 'ne znam, but nemam'],
          ['case after a preposition', 'unatoč kiši, not kiše'],
        ],
      },
      {
        type: 'rule',
        title: 'The ije / je Alternation Is Regular',
        body: 'The commonest native error and a frequent learner one. The rule from the language-history lesson applies: long jat gives -ije-, short gives -je-. vrijeme → vremena, mlijeko → mliječni, dijete → djeca, lijep → ljepota. When unsure, check whether the syllable is long — if the word has shortened, the -ije- almost always has too.',
        highlight: 'vrijeme → vremena',
      },
      {
        type: 'rule',
        title: 'The Comma Rule Learners Get Backwards',
        body: 'English puts a comma before "that" almost never and Croatian learners often add one anyway. Croatian does NOT use a comma before "da" in an object clause: Znam da dolaziš. It DOES use one before an explanatory relative clause and before ali, a, nego, jer, iako. The test remains: could the second half stand alone as a sentence?',
        highlight: 'Znam da dolaziš — no comma',
      },
      {
        type: 'rule',
        title: 'Read It Aloud, and Read It Backwards',
        body: 'Two techniques that work in any language and particularly well in Croatian. Reading aloud catches case and agreement errors, because the wrong ending sounds wrong even when it looks fine. Reading the sentences in reverse order stops you skimming for meaning and forces you to see each one as a unit — which is where agreement errors hide.',
        highlight: 'read aloud for agreement',
      },
      {
        type: 'rule',
        title: 'Check in Passes, Not All at Once',
        body: 'The efficient order: first agreement (does every adjective match its noun), then case government (does every verb have the case it demands), then orthography (ije/je, č/ć), then punctuation, then register. Hunting everything simultaneously means catching less of each — and agreement first, because an agreement error is the most visible to a reader.',
        highlight: 'agreement → government → spelling → commas',
      },
      {
        type: 'example',
        title: 'Catching Your Own',
        items: [
          {
            hr: 'Znam da dolaziš sutra.',
            en: 'I know you are coming tomorrow.',
            note: 'no comma before da here',
          },
          {
            hr: 'Moj brat, koji živi u Splitu, dolazi u petak.',
            en: 'My brother, who lives in Split, is coming on Friday.',
            note: 'commas — the clause is extra information',
          },
          {
            hr: 'Unatoč kiši, izlet je bio dobar.',
            en: 'Despite the rain, the trip was good.',
            note: 'unatoč + dative — a frequent slip',
          },
          {
            hr: 'Nemam vremena, ne znam kada ću stići.',
            en: 'I have no time, I do not know when I will arrive.',
            note: 'nemam joined, ne znam separate',
          },
          {
            hr: 'Pročitao sam tekst naglas i našao tri greške.',
            en: 'I read the text aloud and found three mistakes.',
            note: 'the technique, described in itself',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Prvo provjeravam slaganje: "nova zgrada", "novi most", "novo naselje" — pridjev prati imenicu.',
            en: 'First I check agreement: "new building", "new bridge", "new estate" — the adjective follows its noun.',
            note: 'the agreement pass, in that order',
          },
          {
            hr: 'Zatim gledam rekciju: "hvala na pozivu", "radujem se odmoru", "bojim se pada".',
            en: 'Then I look at government: "thanks for the invitation", "I look forward to the holiday", "I fear a fall".',
            note: 'locative, dative, genitive — one verb at a time',
          },
          {
            hr: 'Nisam mu se javio jer sam se bojao da ću ga probuditi.',
            en: 'I did not get in touch with him because I was afraid I would wake him.',
            note: 'clitic clusters in second position: mu se; sam se',
          },
          {
            hr: 'Došla je sa sestrom i s bratom, ali bez djece.',
            en: 'She came with her sister and her brother, but without the children.',
            note: 'sa before s-, s before b-',
          },
          {
            hr: 'Riječi "vrijeme" i "vremena" pišu se različito jer je jat u drugoj kratak.',
            en: 'The words "vrijeme" and "vremena" are spelled differently because the jat in the second is short.',
            note: 'the ije/je rule applied',
          },
          {
            hr: 'Lektorica je precrtala zarez ispred "da" i vratila ga ispred "ali".',
            en: 'The editor crossed out the comma before "da" and put it back before "ali".',
            note: 'the comma rule, as a lektor applies it',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is correctly punctuated?',
        options: ['Znam, da dolaziš.', 'Znam da dolaziš.', 'Znam da, dolaziš.'],
        correct: 1,
        explanation:
          'Croatian does not put a comma before "da" in an object clause. Commas belong before ali, a, nego, jer, iako and around an explanatory relative clause.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What should you check FIRST when proofreading?',
        options: ['punctuation', 'agreement', 'spelling of ije/je', 'register'],
        correct: 1,
        explanation:
          'Agreement first, because a mismatched adjective is the most visible error to a reader. Hunting everything at once means catching less of each.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three that survive every reread. The comma before da: "Mislim, da je tako" — an object clause takes no comma, mislim da je tako. The clitic pushed to the end: "Javio sam se mu jučer" — the whole cluster sits in second position, javio sam mu se jučer. And sa before every consonant: "sa bratom", "sa prijateljima" — sa belongs only before s, š, z, ž (and in sa mnom); otherwise s bratom.',
        highlight: 'mislim da je tako',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which is correctly punctuated?',
            options: [
              'Mislim, da je tako.',
              'Mislim da je tako.',
              'Mislim da, je tako.',
              'Mislim da je, tako.',
            ],
            correct: 1,
            explanation:
              'No comma before "da" in an object clause. The comma belongs before ali, a, nego, jer, iako and around an explanatory relative clause.',
          },
          {
            q: 'Complete: "Došao je ___ sestrom."',
            options: ['s', 'so', 'su', 'sa'],
            correct: 3,
            explanation:
              '"Sa" before s, š, z, ž: sa sestrom. Before other consonants it is "s": s bratom.',
          },
          {
            q: 'Which clitic order is right?',
            options: [
              'Javio sam se mu jučer.',
              'Javio mu se sam jučer.',
              'Javio sam mu se jučer.',
              'Javio se mu sam jučer.',
            ],
            correct: 2,
            explanation:
              'The cluster sits in second position in the fixed order: auxiliary (sam), dative (mu), then se. Javio sam mu se jučer.',
          },
          {
            q: 'What is wrong with "Unatoč kiše, izlet je bio dobar"?',
            options: [
              'nothing',
              '"unatoč" takes the dative: unatoč kiši',
              'the comma is wrong',
              '"izlet" should be "izleta"',
            ],
            correct: 1,
            explanation:
              '"Unatoč" governs the dative — the frequent slip is the genitive by analogy with zbog. The comma after a fronted phrase is fine.',
          },
          {
            q: 'Which spelling is right?',
            options: ['vrijemena', 'vremena', 'vrjemena', 'vriemena'],
            correct: 1,
            explanation:
              'The jat shortens in the oblique forms, so -ije- becomes -e-: vrijeme but vremena. The others keep or garble the long form.',
          },
          {
            q: 'What should you check FIRST, and why?',
            options: [
              'punctuation — it is quickest',
              'agreement — a mismatched adjective is the most visible error to a reader',
              'register — it matters most',
              'spelling — ije/je is hardest',
            ],
            correct: 1,
            explanation:
              'Agreement first, then government, then spelling, then punctuation, then register. Hunting everything at once means catching less of each.',
          },
          {
            q: 'Which sentence would a lektor sign?',
            options: [
              'Moj brat koji živi u Splitu, dolazi u petak.',
              'Moj brat, koji živi u Splitu dolazi u petak.',
              'Moj brat, koji živi u Splitu, dolazi u petak.',
              'Moj brat koji, živi u Splitu, dolazi u petak.',
            ],
            correct: 2,
            explanation:
              'An explanatory relative clause is enclosed by commas on both sides. A single comma, or one in the middle of the clause, is an error.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Proofreading — Key Takeaways',
        points: [
          'Croatian publishing employs a lektor — the standard is visible',
          'ije/je follows the jat rule: vrijeme → vremena',
          'No comma before da in an object clause',
          'Read aloud for agreement; read backwards to stop skimming',
          'Check in passes: agreement, government, spelling, punctuation, register',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Reading the Media Critically
  // ─────────────────────────────────────────────────────────
  {
    id: 'media-analysis',
    title: 'Reading the Media Critically',
    subtitle: 'Framing, loaded language, and who is being left out of the sentence',
    icon: '🔦',
    level: 'C1',
    duration: '~5 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'Implicit Meaning, in the Wild',
        body: 'B1 taught you to read the news. This is about reading what the news is doing — and Croatian gives you specific tools for it, because the grammar you have learned is exactly the grammar journalism uses to shade a story. The passive hides an agent; a particle plants a doubt; a noun choice takes a side.',
        icon: '🔦',
      },
      {
        type: 'rule',
        title: 'Who Disappeared Into the Passive',
        body: 'The first question to ask of any headline. "Donesena je odluka" — a decision was taken, by whom? "Provedene su mjere" — who carried them out? The se-passive and the participle passive are both agentless by design, which makes them the natural instrument for leaving an actor out. Naming the missing subject is the single most useful reading habit here.',
        highlight: 'Donesena je odluka — by whom?',
      },
      {
        type: 'table',
        title: 'Distancing and Doubt',
        headers: ['Croatian', 'What it signals'],
        rows: [
          ['navodno', 'the paper does not vouch for it'],
          ['tobože', 'the paper thinks it is false'],
          ['kako doznajemo', 'an unnamed source'],
          ['prema neslužbenim informacijama', 'unofficial, unverified'],
          ['takozvani', 'the writer rejects the label'],
          ['bez komentara', 'someone declined to answer'],
        ],
      },
      {
        type: 'rule',
        title: 'Tobože Is Not Navodno',
        body: 'A distinction worth having. "Navodno" is neutral reporting — allegedly, and I take no position. "Tobože" and "takozvani" carry the writer\'s scepticism: tobože nezavisna komisija is a supposedly independent commission the writer does not believe is independent. Reading the two as equivalent misses an opinion the text is expressing.',
        highlight: 'navodno neutral · tobože sceptical',
      },
      {
        type: 'rule',
        title: 'Word Choice Takes a Side',
        body: 'Croatian journalism, like any other, chooses between near-synonyms that carry different weight: prosvjed against nemiri, mjere against rezovi, reforma against ukidanje, migranti against izbjeglice. None is wrong; each frames. Noticing the alternative that was NOT chosen is what turns reading into analysis.',
        highlight: 'mjere or rezovi?',
      },
      {
        type: 'rule',
        title: 'Nominalisation Removes the Actor Too',
        body: 'The condensation you learned has a rhetorical use. "Došlo je do smanjenja sredstava" — a reduction in funds occurred — has no one doing the reducing. Compare "Ministarstvo je smanjilo sredstva." Both are correct Croatian; only one says who acted. Bureaucratic and political writing prefers the first for exactly that reason.',
        highlight: 'Došlo je do smanjenja…',
      },
      {
        type: 'example',
        title: 'Reading Between the Lines',
        items: [
          {
            hr: 'Donesena je odluka o zatvaranju škole.',
            en: 'A decision was taken to close the school.',
            note: 'agentless — who decided?',
          },
          {
            hr: 'Navodno su pregovori propali.',
            en: 'The talks have allegedly collapsed.',
            note: 'neutral distancing',
          },
          {
            hr: 'Tobože neovisno tijelo donijelo je zaključak.',
            en: 'A supposedly independent body reached a conclusion.',
            note: 'the writer is signalling doubt',
          },
          {
            hr: 'Došlo je do smanjenja proračuna.',
            en: 'A reduction in the budget occurred.',
            note: 'nominalised — nobody reduced anything',
          },
          {
            hr: 'Kako doznajemo iz neslužbenih izvora…',
            en: 'As we learn from unofficial sources…',
            note: 'unnamed, unverified',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Uvedene su nove naknade za parkiranje u središtu grada, doznaje naš portal.',
            en: 'New parking charges have been introduced in the city centre, our portal learns.',
            note: 'participle passive plus "doznaje" — no agent, unnamed source',
          },
          {
            hr: 'Došlo je do prekida pregovora između sindikata i uprave.',
            en: 'Talks between the union and management broke down.',
            note: 'došlo je do + genitive — nobody broke anything off',
          },
          {
            hr: 'Prosvjednici su mirno napustili trg; nemira, kako su to nazvali neki mediji, nije bilo.',
            en: 'The protesters left the square peacefully; there was no "unrest", as some media called it.',
            note: 'prosvjed against nemiri — the noun takes a side',
          },
          {
            hr: 'Takozvana reforma svela se, prema kritičarima, na ukidanje dviju škola.',
            en: 'The so-called reform came down, according to critics, to closing two schools.',
            note: 'takozvana signals the writer rejects the label; prema kritičarima attributes',
          },
          {
            hr: 'Ministar je odbio komentirati, a iz ministarstva su poručili da je odluka konačna.',
            en: 'The minister declined to comment, and the ministry said the decision was final.',
            note: 'poručili su — third-person plural, the institution as vague agent',
          },
          {
            hr: 'Vlada je smanjila sredstva za kulturu za deset posto, stoji u proračunu.',
            en: 'The government cut funding for culture by ten percent, the budget states.',
            note: 'the same fact with the agent named — reporting rather than shading',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A report says "tobože neovisna komisija". What is the writer signalling?',
        options: [
          'the commission is independent',
          'they doubt it is independent',
          'they have no information',
          'the commission is new',
        ],
        correct: 1,
        explanation:
          '"Tobože" carries the writer\'s scepticism, unlike the neutral "navodno". Reading them as equivalent misses an opinion the text is actually expressing.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "Donesena je odluka" conceal?',
        options: ['what was decided', 'who decided', 'when it was decided', 'nothing'],
        correct: 1,
        explanation:
          'The passive is agentless by design, so the decider disappears. Asking who is missing from the sentence is the most useful habit in critical reading.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is reading navodno and tobože as the same "allegedly": navodno is neutral distance, tobože is the writer telling you it is false — a learner who misses that misses the editorial. The second is not noticing the missing agent: došlo je do smanjenja is read as an event, when the question is who reduced what. The third is treating an unnamed source as a fact: kako doznajemo and prema neslužbenim informacijama mean the paper does not vouch for it, and a summary that drops the qualifier turns a rumour into a report.',
        highlight: 'došlo je do smanjenja',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: '"Došlo je do smanjenja proračuna." What is missing from the sentence?',
            options: ['what was reduced', 'who reduced it', 'by how much', 'when'],
            correct: 1,
            explanation:
              'Nominalisation removes the actor: a reduction "occurred". The budget is named; the agent is not.',
          },
          {
            q: 'Which word tells you the writer rejects the label?',
            options: ['navodno', 'kako doznajemo', 'takozvani', 'bez komentara'],
            correct: 2,
            explanation:
              '"Takozvani" — so-called — carries the writer\'s doubt, like "tobože". "Navodno" is neutral and the other two describe sourcing.',
          },
          {
            q: 'Complete: "___ su pregovori propali." (reported without the paper vouching for it)',
            options: ['Sigurno', 'Navodno', 'Tobože', 'Naime'],
            correct: 1,
            explanation:
              '"Navodno" is neutral distancing — allegedly, and we take no position. "Tobože" would say the writer disbelieves it.',
          },
          {
            q: 'Which sentence is REPORTING rather than commentary?',
            options: [
              'Tobože nezavisna komisija opet je zakazala.',
              'Vlada je smanjila sredstva za deset posto.',
              'Takozvani stručnjaci opet nisu ništa predvidjeli.',
              'Naravno da je odluka bila pogrešna.',
            ],
            correct: 1,
            explanation:
              'A named agent, a verb and a figure. The others carry tobože, takozvani and naravno — each an opinion in a single word.',
          },
          {
            q: '"Prosvjed" and "nemiri" for the same event: what is the difference?',
            options: [
              'nothing — they are synonyms',
              'prosvjed is neutral; nemiri frames it as disorder',
              'nemiri is neutral; prosvjed frames it as violence',
              'prosvjed is only used for strikes',
            ],
            correct: 1,
            explanation:
              'Near-synonyms frame. "Prosvjed" is a protest; "nemiri" says disorder and takes a side. Noticing the word not chosen is what turns reading into analysis.',
          },
          {
            q: 'Which construction hides the agent?',
            options: [
              'Ministarstvo je smanjilo sredstva.',
              'Ministar je najavio rezove.',
              'Provedene su mjere štednje.',
              'Sindikat je odbio ponudu.',
            ],
            correct: 2,
            explanation:
              'The participle passive is agentless by design: measures "were carried out", by nobody in particular. The other three name who acted.',
          },
          {
            q: 'Complete: "Kako ___ iz neslužbenih izvora, odluka je već donesena."',
            options: ['doznajemo', 'doznamo', 'doznali', 'doznaje se'],
            correct: 0,
            explanation:
              '"Kako doznajemo" is the fixed journalistic formula — first-person plural, imperfective present. It signals an unnamed source.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Reading Critically — Key Takeaways',
        points: [
          'Ask who disappeared into the passive',
          "navodno is neutral; tobože and takozvani carry the writer's doubt",
          'Near-synonyms frame: mjere or rezovi, prosvjed or nemiri',
          'Nominalisation removes the actor: Došlo je do smanjenja…',
          'Notice the word that was NOT chosen',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Legal and Administrative Croatian
  // ─────────────────────────────────────────────────────────
  {
    id: 'law-administration',
    title: 'Legal and Administrative Croatian',
    subtitle: 'Reading a contract, a decision or a statute without panic',
    icon: '⚖️',
    level: 'C1',
    duration: '~5 min',
    color: '#78716c',
    bg: '#fafaf9',
    slides: [
      {
        type: 'intro',
        title: 'A Register You Will Meet Whether You Want To or Not',
        body: 'Property, inheritance, citizenship, a rental contract, a decision from an office — anyone with Croatian connections meets this language eventually. It is dense but highly formulaic, which means a small amount of specific knowledge goes a very long way.',
        icon: '⚖️',
      },
      {
        type: 'table',
        title: 'The Furniture',
        headers: ['Croatian', 'English'],
        rows: [
          ['zakon', 'law, act'],
          ['propis', 'regulation'],
          ['uredba', 'decree, ordinance'],
          ['članak', 'article (of a law)'],
          ['stavak', 'paragraph'],
          ['rješenje', 'a decision (administrative)'],
          ['presuda', 'a judgment (court)'],
          ['žalba', 'appeal'],
        ],
      },
      {
        type: 'rule',
        title: 'Članak and Stavak',
        body: 'A Croatian law is divided into "članci" (articles), each with numbered "stavci" (paragraphs). A citation looks like "članak 5. stavak 2." and is abbreviated "čl. 5. st. 2." — note the full stops after the numerals, which mark them as ordinals. Recognising this notation is most of what is needed to follow a reference.',
        highlight: 'čl. 5. st. 2.',
      },
      {
        type: 'table',
        title: 'The Formulas',
        headers: ['Croatian', 'English'],
        rows: [
          ['temeljem članka…', 'pursuant to article…'],
          ['sukladno odredbama…', 'in accordance with the provisions…'],
          ['stupa na snagu', 'comes into force'],
          ['u roku od 15 dana', 'within 15 days'],
          ['ugovorne strane', 'the contracting parties'],
          ['smatra se da…', 'it shall be deemed that…'],
        ],
      },
      {
        type: 'rule',
        title: 'Temeljem and Sukladno',
        body: 'Two prepositional formulas that open half the sentences in this register. "Temeljem" plus the genitive means pursuant to — temeljem članka 12. "Sukladno" plus the dative means in accordance with — sukladno odredbama ugovora. Note the different cases; they are among the most frequent government errors even for natives.',
        highlight: 'temeljem + genitive · sukladno + dative',
      },
      {
        type: 'rule',
        title: 'The Style Is Nominal and Impersonal, Deliberately',
        body: 'Everything you learned about condensation and the impersonal is here at maximum strength: "Smatra se da je zahtjev uredan." "Provođenje nadzora povjerava se…" The style is not obfuscation for its own sake — it is an attempt at precision without naming individuals. Unpacking it back into clauses is a reliable way to check you have understood.',
        highlight: 'unpack it back into clauses',
      },
      {
        type: 'rule',
        title: 'Deadlines Are the Part That Matters',
        body: 'Practical advice: in any administrative document, find the "rok" first. "U roku od 15 dana od dana primitka" — within 15 days of the date of receipt. "Žalba se podnosi u roku od…" A missed deadline is usually irreversible, and the deadline is always stated explicitly, so it is the one sentence worth reading twice.',
        highlight: 'u roku od 15 dana',
      },
      {
        type: 'example',
        title: 'Reading the Formulas',
        items: [
          {
            hr: 'Temeljem članka 12. Zakona o vlasništvu…',
            en: 'Pursuant to article 12 of the Ownership Act…',
            note: 'temeljem + genitive, and the ordinal full stop',
          },
          {
            hr: 'Ugovor stupa na snagu danom potpisa.',
            en: 'The contract comes into force on the day of signing.',
            note: 'danom — instrumental of time',
          },
          {
            hr: 'Žalba se podnosi u roku od 15 dana.',
            en: 'An appeal is lodged within 15 days.',
            note: 'se-passive; u roku od + genitive',
          },
          {
            hr: 'Smatra se da je zahtjev uredan.',
            en: 'The request shall be deemed to be in order.',
            note: 'smatra se — impersonal',
          },
          {
            hr: 'Ugovorne strane suglasne su da…',
            en: 'The contracting parties agree that…',
            note: 'suglasan + da',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Sukladno odredbama ovog ugovora najmoprimac je dužan plaćati režije do petog u mjesecu.',
            en: 'In accordance with the provisions of this contract the tenant is obliged to pay the utilities by the fifth of the month.',
            note: 'sukladno + dative; dužan + infinitive = obliged to',
          },
          {
            hr: 'Protiv ovog rješenja može se izjaviti žalba u roku od 15 dana od dana dostave.',
            en: 'An appeal may be lodged against this decision within 15 days of the date of delivery.',
            note: 'the deadline sentence — the one worth reading twice',
          },
          {
            hr: 'Podnositelj zahtjeva dužan je priložiti presliku osobne iskaznice i dokaz o prebivalištu.',
            en: 'The applicant is required to attach a copy of the identity card and proof of residence.',
            note: 'priložiti = attach; preslika = copy; prebivalište = residence',
          },
          {
            hr: 'Ugovor se sklapa na neodređeno vrijeme i svaka ga strana može otkazati uz otkazni rok od mjesec dana.',
            en: "The contract is concluded for an indefinite period and either party may terminate it with one month's notice.",
            note: 'na neodređeno vrijeme; otkazni rok',
          },
          {
            hr: 'Ovo rješenje stupa na snagu danom donošenja, a primjenjuje se od 1. siječnja.',
            en: 'This decision comes into force on the day it is issued and applies from 1 January.',
            note: 'stupa na snagu; primjenjuje se — two dates, two verbs',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What case does "temeljem" take?',
        options: ['genitive', 'dative', 'accusative', 'instrumental'],
        correct: 0,
        explanation:
          '"Temeljem" takes the genitive — temeljem članka. "Sukladno" takes the dative, and mixing the two is a frequent error even among native writers.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'In an administrative document, what should you look for first?',
        options: ['the signature', 'the deadline (rok)', 'the article number', 'the header'],
        correct: 1,
        explanation:
          'A missed deadline is usually irreversible, and the "rok" is always stated explicitly. It is the one sentence worth reading twice.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is mixing the two formulas: "sukladno članka" and "temeljem odredbama" — temeljem takes the genitive (temeljem članka 12.) and sukladno the dative (sukladno odredbama), and they do not swap. The second is dropping the ordinal full stop: "članak 5 stavak 2" — the numbers are ordinals and are written čl. 5. st. 2. The third is reading past the rok: a learner who understands every word and misses "u roku od 15 dana" has understood nothing that matters.',
        highlight: 'temeljem članka 12.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Sukladno ___ ugovora…" (the provisions — odredbe)',
            options: ['odredaba', 'odredbama', 'odredbe', 'odredbom'],
            correct: 1,
            explanation:
              '"Sukladno" takes the dative: sukladno odredbama. The genitive plural is the usual mix-up with "temeljem".',
          },
          {
            q: 'Complete: "Temeljem ___ 12. Zakona…"',
            options: ['članak', 'članku', 'članka', 'člankom'],
            correct: 2,
            explanation:
              '"Temeljem" takes the genitive: temeljem članka 12. The dative belongs to "sukladno".',
          },
          {
            q: 'Which citation is written correctly?',
            options: ['čl. 5 st. 2', 'čl. 5. st. 2.', 'čl 5, st 2', 'članak 5, stavak 2'],
            correct: 1,
            explanation:
              'The numerals are ordinals and carry a full stop: čl. 5. st. 2. — article five, paragraph two.',
          },
          {
            q: 'Decode into plain Croatian: "Smatra se da je zahtjev uredan."',
            options: [
              'Netko smatra zahtjev urednim.',
              'Zahtjev je uredan — tako se službeno uzima.',
              'Zahtjev mora biti uredan.',
              'Zahtjev se smatra neurednim.',
            ],
            correct: 1,
            explanation:
              '"Smatra se da" is the impersonal "it shall be deemed that": officially, the request counts as in order. No individual is named, and nothing is negated.',
          },
          {
            q: 'In an official letter, what is a "rješenje"?',
            options: [
              'a solution to a puzzle',
              'a court judgment',
              'a law',
              'an administrative decision',
            ],
            correct: 3,
            explanation:
              'In this register "rješenje" is the decision an office issues. A court gives a "presuda", parliament passes a "zakon".',
          },
          {
            q: 'What is wrong with "Žalba se podnosi u roku od 15 dana od dan primitka"?',
            options: [
              'nothing',
              '"od" takes the genitive: od dana primitka',
              '"podnosi" should be "podnese"',
              '"u roku" should be "u rok"',
            ],
            correct: 1,
            explanation:
              '"Od" governs the genitive: od dana primitka. The se-passive "podnosi se" is exactly how the sentence is worded in a decision.',
          },
          {
            q: 'What should you find first in any administrative document?',
            options: [
              'the signature',
              'the header',
              'the rok — the deadline',
              'the article number',
            ],
            correct: 2,
            explanation:
              'A missed deadline is usually irreversible, and it is always stated explicitly. It is the one sentence worth reading twice.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Legal Croatian — Key Takeaways',
        points: [
          'zakon, propis, uredba, članak, stavak, rješenje, presuda, žalba',
          'Citations look like čl. 5. st. 2. — the full stops mark ordinals',
          'temeljem + genitive · sukladno + dative',
          'The style is nominal and impersonal — unpack it into clauses to check',
          'Find the rok first; a missed deadline is usually irreversible',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Scientific and Technical Croatian
  // ─────────────────────────────────────────────────────────
  {
    id: 'science-technology',
    title: 'Scientific and Technical Croatian',
    subtitle: 'Precision, terminology, and the habit of coining native terms',
    icon: '🔬',
    level: 'C1',
    duration: '~5 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Where the Native-Word Habit Shows Most',
        body: 'Technical Croatian is where the tradition of building words rather than borrowing them is most visible — and most useful, because a coined term is usually transparent once you can read its parts. This lesson is about reading that vocabulary and about the register scientific writing uses.',
        icon: '🔬',
      },
      {
        type: 'table',
        title: 'Research Vocabulary',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['istraživanje', 'research', 'uzorak', 'sample'],
          ['hipoteza', 'hypothesis', 'podaci', 'data'],
          ['metoda', 'method', 'rezultat', 'result'],
          ['pokus / eksperiment', 'experiment', 'zaključak', 'conclusion'],
          ['mjerenje', 'measurement', 'pogreška', 'error'],
          ['dokaz', 'evidence, proof', 'omjer', 'ratio'],
        ],
      },
      {
        type: 'rule',
        title: 'Reading a Coined Term',
        body: 'Croatian technical vocabulary rewards decomposition. "Zrakoplov" is air-boat. "Vodovod" is water-conduit, the mains. "Toplomjer" is heat-measurer, a thermometer. "Zemljopis" is earth-writing, geography. "Kisik" is from "kiseo" (sour), oxygen. When you meet an unfamiliar technical word, split it before reaching for a dictionary — you will often be right.',
        highlight: 'toplomjer = heat-measurer',
      },
      {
        type: 'table',
        title: 'The Building Blocks',
        headers: ['Element', 'Means', 'Example'],
        rows: [
          ['-mjer', 'measurer', 'toplomjer, tlakomjer'],
          ['-pis', 'writing, description', 'zemljopis, životopis'],
          ['-vod', 'conduit, leading', 'vodovod, plinovod'],
          ['-slov', 'word, study', 'jezikoslovlje'],
          ['samo-', 'self-', 'samostalan, samoglasnik'],
          ['među-', 'inter-', 'međunarodni, međuovisnost'],
        ],
      },
      {
        type: 'rule',
        title: 'Both Words Usually Exist',
        body: 'As elsewhere, the native and international terms generally coexist: kisik and oksigen, zemljopis and geografija, jezikoslovlje and lingvistika. The native word is standard in schooling and general writing; the international one is common in specialist literature. Neither is wrong, but using the international word where the native one is standard reads as slightly foreign.',
        highlight: 'kisik · zemljopis · jezikoslovlje',
      },
      {
        type: 'rule',
        title: 'The Register Is Impersonal and Precise',
        body: 'Scientific Croatian uses the impersonal constructions at full strength: Mjerenja su provedena… Utvrđeno je da… Iz rezultata proizlazi… Uzorak se sastojao od… Note "sastojati se od" plus the genitive, and "proizlaziti iz" plus the genitive — two more entries for the verb-government list, and both extremely frequent here.',
        highlight: 'Utvrđeno je da…',
      },
      {
        type: 'rule',
        title: 'Numbers and Units',
        body: 'Decimals use a COMMA, not a point: 3,14. Thousands are separated by a space or a full stop: 10 000 or 10.000. Units follow the number with a space: 25 °C, 3 kg. And "posto" is percent — "tri posto" or "3 %". Getting the decimal comma wrong in a technical document is a real error, not a stylistic one.',
        highlight: '3,14 — comma, not point',
      },
      {
        type: 'example',
        title: 'Technical Sentences',
        items: [
          {
            hr: 'Uzorak se sastojao od 120 ispitanika.',
            en: 'The sample consisted of 120 participants.',
            note: 'sastojati se od + genitive',
          },
          {
            hr: 'Utvrđeno je da postoji značajna razlika.',
            en: 'It was established that a significant difference exists.',
            note: 'impersonal passive participle',
          },
          {
            hr: 'Iz rezultata proizlazi da je hipoteza potvrđena.',
            en: 'From the results it follows that the hypothesis is confirmed.',
            note: 'proizlaziti iz + genitive',
          },
          {
            hr: 'Temperatura je iznosila 25 °C.',
            en: 'The temperature was 25 °C.',
            note: 'iznositi — the verb for a quantity',
          },
          {
            hr: 'Pogreška mjerenja iznosi 0,5 posto.',
            en: 'The measurement error is 0.5 percent.',
            note: 'the decimal comma',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Tlakomjer je pokazao 140 na 90, pa je liječnik ponovio mjerenje nakon pet minuta.',
            en: 'The blood-pressure monitor showed 140 over 90, so the doctor repeated the measurement after five minutes.',
            note: 'tlakomjer = pressure-measurer; mjerenje = measurement',
          },
          {
            hr: 'Postupak se sastoji od triju koraka: uzorkovanja, analize i tumačenja rezultata.',
            en: 'The procedure consists of three steps: sampling, analysis and interpretation of results.',
            note: 'describing a process with sastojati se od + genitive',
          },
          {
            hr: 'Udio kisika u zraku iznosi oko 21 posto, a ugljikova dioksida manje od 0,05 posto.',
            en: 'The share of oxygen in the air is about 21 percent, and of carbon dioxide less than 0.05 percent.',
            note: 'kisik (native), ugljikov dioksid; the decimal comma',
          },
          {
            hr: 'Novi plinovod dug je 120 kilometara i spaja terminal na Krku s Mađarskom.',
            en: 'The new gas pipeline is 120 kilometres long and links the terminal on Krk with Hungary.',
            note: 'plinovod — plin + -vod, a coined term',
          },
          {
            hr: 'Rezultati su prikazani u tablici 2, a odstupanja su unutar dopuštene pogreške.',
            en: 'The results are shown in Table 2, and the deviations are within the permitted error.',
            note: 'reporting a result impersonally; odstupanje, pogreška',
          },
          {
            hr: 'U stručnoj literaturi piše "lingvistika", a u školskom udžbeniku "jezikoslovlje".',
            en: 'In the specialist literature it says "lingvistika", and in the school textbook "jezikoslovlje".',
            note: 'borrowed and coined terms coexist by register',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is a "toplomjer"?',
        options: ['a heater', 'a thermometer', 'a boiler', 'a temperature'],
        correct: 1,
        explanation:
          'Split it: toplo (warm) + -mjer (measurer) — a heat-measurer, a thermometer. Decomposing a coined term usually gets you close enough to read on.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How does Croatian write three point one four?',
        options: ['3.14', '3,14', '3 14', '3;14'],
        correct: 1,
        explanation:
          'The decimal separator is a comma. Using a point in a technical document is a genuine error rather than a stylistic preference.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is the decimal point: "3.14" in a Croatian report is a real error, not a style choice — the separator is a comma, 3,14. The second is the international word where the native one is standard: "oksigen" and "geografija" are understood, but a school text says kisik and zemljopis, and the borrowed word reads as slightly foreign. The third is the unit glued to the number — "25°C", "3kg" — where Croatian writes a space, 25 °C, 3 kg, and "posto" as a separate word after the figure.',
        highlight: '3,14',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Split "tlakomjer": what does it measure?',
            options: ['heat', 'pressure', 'weight', 'time'],
            correct: 1,
            explanation:
              'Tlak (pressure) + -mjer (measurer). The same block gives toplomjer (heat) and the pattern reads off any coined instrument name.',
          },
          {
            q: 'Complete: "Uzorak se sastojao ___ 120 ispitanika."',
            options: ['od', 'za', 's', 'u'],
            correct: 0,
            explanation:
              '"Sastojati se od" + genitive: sastojao se od 120 ispitanika. The preposition is part of the verb.',
          },
          {
            q: 'Which pair is native / international for the SAME thing?',
            options: [
              'kisik / oksigen',
              'kisik / dušik',
              'zemljopis / povijest',
              'toplomjer / tlakomjer',
            ],
            correct: 0,
            explanation:
              'Kisik and oksigen are both oxygen; the native word is standard in schooling, the international one in specialist writing. Dušik is nitrogen, povijest is history.',
          },
          {
            q: 'What is wrong with "Temperatura je iznosila 25.5 °C"?',
            options: [
              'nothing',
              'the decimal separator must be a comma: 25,5 °C',
              '"iznosila" should be "iznosio"',
              '°C should come before the number',
            ],
            correct: 1,
            explanation:
              'Decimals take a comma in Croatian. "Iznosila" correctly agrees with the feminine "temperatura", and the unit follows the number with a space.',
          },
          {
            q: 'Complete: "Iz rezultata ___ da je hipoteza potvrđena."',
            options: ['proizlazi', 'proizlaze', 'izlazi iz', 'slijedi iz'],
            correct: 0,
            explanation:
              '"Proizlaziti iz" + genitive, third-person singular because the subject is the "da" clause: iz rezultata proizlazi da.',
          },
          {
            q: 'Which register is scientific Croatian written in?',
            options: [
              'first person singular: Ja sam izmjerio…',
              'impersonal: Mjerenja su provedena…',
              'conversational: Pa, izmjerili smo…',
              'imperative: Izmjerite…',
            ],
            correct: 1,
            explanation:
              'Impersonal constructions at full strength: mjerenja su provedena, utvrđeno je da. The first person and the particle belong to other registers.',
          },
          {
            q: 'What does "-vod" mean in "plinovod"?',
            options: ['a leader (a person)', 'water', 'a conduit — a pipeline', 'a measurer'],
            correct: 2,
            explanation:
              '"-vod" is conduit or leading: vodovod (water mains), plinovod (gas pipeline). "-mjer" is the measurer.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Technical Croatian — Key Takeaways',
        points: [
          'istraživanje, hipoteza, uzorak, podaci, rezultat, zaključak, dokaz',
          'Split a coined term before reaching for a dictionary: toplomjer, zemljopis',
          '-mjer, -pis, -vod, samo-, među- are productive building blocks',
          'Impersonal register: Utvrđeno je da…, Mjerenja su provedena…',
          'sastojati se OD + genitive · proizlaziti IZ + genitive',
          'Decimals use a comma: 3,14',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Arts and Culture
  // ─────────────────────────────────────────────────────────
  {
    id: 'arts-culture',
    title: 'Arts and Culture',
    subtitle: 'Theatre, film and music — and how to say what you thought of it',
    icon: '🎭',
    level: 'C1',
    duration: '~5 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Having an Opinion Worth Hearing',
        body: 'At C1 the interesting thing is not naming a film but saying something about it that a Croatian would find worth responding to. That needs evaluative vocabulary with some range — beyond "dobro" and "loše" — and a little knowledge of what is actually on.',
        icon: '🎭',
      },
      {
        type: 'table',
        title: 'The Forms',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['kazalište', 'theatre', 'predstava', 'a play, performance'],
          ['redatelj', 'director', 'gluma', 'acting'],
          ['izložba', 'exhibition', 'galerija', 'gallery'],
          ['skladatelj', 'composer', 'zbor', 'choir'],
          ['glazba', 'music', 'nastup', 'a performance, gig'],
          ['film', 'film', 'scenarij', 'screenplay'],
        ],
      },
      {
        type: 'rule',
        title: 'Glazba, Not Muzika',
        body: '"Glazba" is the standard Croatian word for music and what you will see on a poster or in a newspaper. "Muzika" is understood everywhere and is common in casual speech. The pair follows the native-versus-international pattern you have seen throughout, and the same guidance applies: in writing, use the native word.',
        highlight: 'glazba (standard) · muzika (casual)',
      },
      {
        type: 'table',
        title: 'Saying What You Thought',
        headers: ['Croatian', 'English', 'Weight'],
        rows: [
          ['dojmljiv', 'impressive', 'positive'],
          ['potresan', 'moving, harrowing', 'strong positive'],
          ['nadahnut', 'inspired', 'positive'],
          ['duhovit', 'witty', 'positive'],
          ['prenapuhan', 'overblown', 'negative'],
          ['dosadan', 'dull', 'negative'],
          ['predvidljiv', 'predictable', 'negative'],
        ],
      },
      {
        type: 'rule',
        title: 'Potresan Is Praise',
        body: 'Worth flagging because the English cognate misleads. "Potresan" — from "potresti", to shake — describes something that moved you deeply, and it is high praise for a drama or a documentary. It does not mean distressing in a negative sense. "Potresna predstava" is a compliment.',
        highlight: 'potresna predstava — a compliment',
      },
      {
        type: 'rule',
        title: 'Klapa, and Why It Matters',
        body: 'One cultural item worth knowing: "klapa" is Dalmatian a cappella close-harmony singing, traditionally by a group of men, and it is on the UNESCO intangible heritage list. It is not folk music in the museum sense — klape are active, competitive and everywhere on the coast in summer. Recognising the word marks you as someone who has actually been there.',
        highlight: 'klapa',
      },
      {
        type: 'rule',
        title: 'What Is On',
        body: 'A few anchors for conversation: the Dubrovačke ljetne igre (Dubrovnik Summer Festival, since 1950, plays staged in the city itself), INmusic in Zagreb, and the Motovun film festival in Istria. Croatian cinema and theatre are small and well known to their audience, which means an informed remark goes a long way.',
        highlight: 'Dubrovačke ljetne igre',
      },
      {
        type: 'example',
        title: 'Discussing a Work',
        items: [
          {
            hr: 'Predstava je bila potresna, ali predugačka.',
            en: 'The play was moving, but too long.',
            note: 'praise, then a qualification',
          },
          {
            hr: 'Gluma je bila izvrsna, scenarij manje uvjerljiv.',
            en: 'The acting was excellent, the screenplay less convincing.',
            note: 'manje + adjective for a soft criticism',
          },
          {
            hr: 'Redatelj se odlučio za vrlo sveden pristup.',
            en: 'The director opted for a very pared-back approach.',
            note: 'odlučiti se za + accusative',
          },
          {
            hr: 'Izložba traje do kraja mjeseca.',
            en: 'The exhibition runs until the end of the month.',
            note: 'do + genitive',
          },
          {
            hr: 'Nisam očekivao da će me toliko dirnuti.',
            en: 'I did not expect it to move me so much.',
            note: 'dirnuti — perfective, a single effect',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Roman me dirnuo zato što glavni lik šuti upravo ondje gdje bih ja govorio.',
            en: 'The novel moved me because the main character stays silent exactly where I would speak.',
            note: 'saying precisely why — zato što + a concrete observation',
          },
          {
            hr: 'Izložba u Klovićevim dvorima bila je dojmljiva, iako je postav bio pretrpan.',
            en: 'The exhibition at the Klović Palace was impressive, although the display was overcrowded.',
            note: 'dojmljiv, then a qualification with iako',
          },
          {
            hr: 'Skladatelj je za zbor napisao nešto nadahnuto, a klapa je to otpjevala bez pratnje.',
            en: 'The composer wrote something inspired for the choir, and the klapa sang it unaccompanied.',
            note: 'skladatelj, zbor, klapa; bez pratnje = a cappella',
          },
          {
            hr: 'Film je duhovit u prvoj polovici, a onda postane predvidljiv i prenapuhan.',
            en: 'The film is witty in the first half, and then it becomes predictable and overblown.',
            note: 'the evaluative range beyond dobro and loše',
          },
          {
            hr: 'Ne bih rekao da je predstava loša, nego da redatelj nije vjerovao vlastitu tekstu.',
            en: 'I would not say the play is bad, but that the director did not trust his own text.',
            note: 'ne bih rekao… nego — criticism with a reason, not a verdict',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A Croatian calls a play "potresna". Is that praise?',
        options: [
          'no, it means distressing',
          'yes, it means deeply moving',
          'no, it means confusing',
          'it is neutral',
        ],
        correct: 1,
        explanation:
          '"Potresan" comes from "potresti", to shake, and describes something that moved you deeply. For a drama or documentary it is high praise.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What is "klapa"?',
        options: [
          'a type of theatre',
          'Dalmatian close-harmony singing',
          'a film festival',
          'a folk dance',
        ],
        correct: 1,
        explanation:
          'Klapa is Dalmatian a cappella close-harmony singing, on the UNESCO intangible heritage list — and very much a living, competitive tradition rather than a museum piece.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is "muzika" in writing — understood everywhere, but the standard word on a poster or in a review is glazba. The second is reading potresan as negative: "predstava je bila potresna" is high praise, and answering it with sympathy is the wrong reply. The third is the verdict without the reason — "bilo je dobro" says nothing a Croatian can respond to; the sentence they want is svidjelo mi se zato što…, with the because filled in.',
        highlight: 'svidjelo mi se zato što',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which is the standard written word for music?',
            options: ['muzika', 'glazba', 'muzik', 'glazbeno'],
            correct: 1,
            explanation:
              '"Glazba" is what a poster or a newspaper prints; "muzika" is casual speech. "Glazbeno" is an adverb and "muzik" is not a word.',
          },
          {
            q: 'Someone calls a play "potresna". How should you respond?',
            options: [
              'with sympathy — it upset them',
              'as praise — it moved them deeply',
              'with confusion — they found it unclear',
              'neutrally — it was average',
            ],
            correct: 1,
            explanation:
              '"Potresan", from "potresti" (to shake), is high praise for a drama. The English cognate misleads.',
          },
          {
            q: 'Complete: "Redatelj se odlučio ___ vrlo sveden pristup."',
            options: ['za', 'na', 'o', 'u'],
            correct: 0,
            explanation:
              '"Odlučiti se za" + accusative — to opt for. The other prepositions change or break the verb.',
          },
          {
            q: 'Which sentence gives a reason, not just a verdict?',
            options: [
              'Film je bio dobar.',
              'Film mi se svidio.',
              'Film me dirnuo jer se ne boji tišine.',
              'Film je bio u redu.',
            ],
            correct: 2,
            explanation:
              'A "jer" with something concrete in it is what a Croatian can respond to. The other three are verdicts a conversation cannot go anywhere from.',
          },
          {
            q: 'Which adjective is NEGATIVE?',
            options: ['dojmljiv', 'nadahnut', 'prenapuhan', 'duhovit'],
            correct: 2,
            explanation:
              '"Prenapuhan" is overblown. Dojmljiv (impressive), nadahnut (inspired) and duhovit (witty) are all praise.',
          },
          {
            q: 'What is wrong with "Izložba traje do kraj mjeseca"?',
            options: [
              'nothing',
              '"do" takes the genitive: do kraja mjeseca',
              '"traje" should be "trajati"',
              '"mjeseca" should be "mjesec"',
            ],
            correct: 1,
            explanation:
              '"Do" governs the genitive: do kraja. "Mjeseca" is already the genitive it needs after "kraja".',
          },
          {
            q: 'What is "klapa"?',
            options: [
              'a theatre company',
              'Dalmatian a cappella close-harmony singing',
              'a film festival in Istria',
              'a folk dance from Slavonia',
            ],
            correct: 1,
            explanation:
              'Klapa is Dalmatian close-harmony singing, on the UNESCO intangible heritage list and very much alive on the coast every summer.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Arts — Key Takeaways',
        points: [
          'kazalište, predstava, redatelj, izložba, skladatelj, nastup',
          'glazba is standard; muzika is casual',
          'dojmljiv, potresan, nadahnut, duhovit — and potresan is praise',
          'prenapuhan, predvidljiv, dosadan for the other direction',
          'klapa, Dubrovačke ljetne igre, INmusic, Motovun',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Regional Varieties
  // ─────────────────────────────────────────────────────────
  {
    id: 'regional-varieties',
    title: 'Regional Varieties',
    subtitle: 'What you will actually hear in Zagreb, Split and Istria',
    icon: '🗺️',
    level: 'C1',
    duration: '~6 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'The Standard Is Not What People Speak',
        body: 'You have learned standard Croatian, and it is the right thing to have learned. But almost nobody speaks it at home. A learner arriving in Split or Zagreb meets something recognisably different, and knowing what to expect turns a disorienting experience into an interesting one.',
        icon: '🗺️',
      },
      {
        type: 'table',
        title: 'The Three Groups, Heard',
        headers: ['Group', 'Where', 'Marker'],
        rows: [
          ['štokavski', 'most of the country', 'što — the standard'],
          ['kajkavski', 'Zagreb, Zagorje, the north-west', 'kaj'],
          ['čakavski', 'Istria, the islands, parts of the coast', 'ča'],
        ],
      },
      {
        type: 'rule',
        title: 'Zagreb Speech Is Not Kajkavian, Quite',
        body: 'A useful distinction. Rural Zagorje is genuinely kajkavian. Urban Zagreb speech is a štokavian-based colloquial with heavy kajkavian and German influence — "kaj" for what, "bum" or "buš" for the future, and a lexicon full of Germanisms: šalica is standard, but you will hear "cajger", "špajza", "cušpajz", "fiškal". Standard Croatian is understood perfectly; it is just not what is being spoken.',
        highlight: 'kaj · buš · Germanisms',
      },
      {
        type: 'rule',
        title: 'The Coast Borrowed From Italian',
        body: 'Centuries of Venetian rule left the coastal lexicon full of Italian: "pjat" (plate), "škatula" (box), "kužina" (kitchen), "šporko" (dirty), "banda" (side), "gušt" (pleasure), "fjaka". Every one has a standard Croatian equivalent — tanjur, kutija, kuhinja, prljav — and both will be understood, but the borrowed word is what gets used.',
        highlight: 'pjat · škatula · kužina · gušt',
      },
      {
        type: 'table',
        title: 'The Same Thing, Three Ways',
        headers: ['Standard', 'Zagreb', 'Coast'],
        rows: [
          ['što', 'kaj', 'ča'],
          ['tanjur', 'tanjur', 'pjat'],
          ['kuhinja', 'kuhinja', 'kužina'],
          ['gdje', 'gdje / kaj', 'di'],
          ['što ćeš raditi', 'kaj buš delal', 'ča ćeš delat'],
        ],
      },
      {
        type: 'rule',
        title: 'Ikavian on the Coast',
        body: 'Beyond vocabulary, parts of Dalmatia and Slavonia use IKAVIAN — where the standard has -ije- or -je-, they have -i-. "Dite" for dijete, "misto" for mjesto, "lipo" for lijepo, "vrime" for vrijeme. This is standard-adjacent Croatian, not an error, and it is extremely common in coastal speech and in song lyrics.',
        highlight: 'dite · misto · lipo · vrime',
      },
      {
        type: 'rule',
        title: 'What to Do With This',
        body: 'Do not try to speak a dialect you have not grown up with — it reads as mimicry rather than fluency. Do learn to UNDERSTAND the local variety wherever your family is from, because that is what you will actually be spoken to in. And if you have inherited dialect words from a grandparent, they are not mistakes to correct; they are the most authentic Croatian you have.',
        highlight: 'understand it; do not perform it',
      },
      {
        type: 'example',
        title: 'Hearing the Difference',
        items: [
          {
            hr: 'Kaj buš delal danas?',
            en: 'What are you going to do today? (Zagreb)',
            note: 'kaj + the bum/buš future',
          },
          {
            hr: 'Ča je bilo?',
            en: 'What happened? (coast, čakavian)',
            note: 'ča for što',
          },
          {
            hr: 'Di si bila?',
            en: 'Where were you? (Dalmatia)',
            note: 'di for gdje',
          },
          {
            hr: 'Stavi to na pjat.',
            en: 'Put that on the plate. (coast)',
            note: 'pjat from Venetian; standard tanjur',
          },
          {
            hr: 'Lipo ti je vrime danas.',
            en: 'The weather is lovely today. (ikavian)',
            note: 'lipo, vrime — standard lijepo, vrijeme',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Baka iz Zagorja rekla bi "Kaj buš jel?", a mama u Splitu "Ča ćeš jist?", a oboje znači isto.',
            en: 'Grandma from Zagorje would say "Kaj buš jel?", and mum in Split "Ča ćeš jist?", and both mean the same thing.',
            note: 'kajkavian and čakavian side by side: what will you eat?',
          },
          {
            hr: 'U standardu kažemo "kuhinja" i "tanjur", ali na otoku ćete čuti "kužina" i "pjat".',
            en: 'In the standard we say "kuhinja" and "tanjur", but on the island you will hear "kužina" and "pjat".',
            note: 'Venetian loans on the coast, with their standard equivalents',
          },
          {
            hr: 'Moj djed govori ikavski, pa kaže "misto" i "dite", a ja sam u školi naučio "mjesto" i "dijete".',
            en: 'My grandfather speaks ikavian, so he says "misto" and "dite", while I learned "mjesto" and "dijete" at school.',
            note: 'ikavian -i- for standard -ije-/-je-; both are Croatian',
          },
          {
            hr: 'Riječi koje sam naslijedio od bake nisu greške, nego najstariji dio mog hrvatskog.',
            en: 'The words I inherited from my grandmother are not mistakes, but the oldest part of my Croatian.',
            note: 'a heritage form is a regional form, not an error',
          },
          {
            hr: 'Zagrepčanin će reći "idem na špicu", a u Splitu se ide "na rivu".',
            en: 'A Zagreb local will say "idem na špicu", while in Split one goes "na rivu".',
            note: 'špica (Zagreb) and riva (coast) — two local words for the Saturday stroll',
          },
          {
            hr: 'Ne pokušavam govoriti dalmatinski; dovoljno mi je da ga razumijem kad me tetka nešto pita.',
            en: 'I am not trying to speak Dalmatian; it is enough that I understand it when my aunt asks me something.',
            note: 'understand the variety; do not perform it',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You hear "Kaj buš delal?" Where are you?',
        options: ['Split', 'Zagreb', 'Dubrovnik', 'an island'],
        correct: 1,
        explanation:
          '"Kaj" and the "buš" future mark Zagreb and the north-west. On the coast you would hear "ča" or "što", and a different future entirely.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A Dalmatian says "lipo vrime". What is the standard form?',
        // Distractors are PARTIAL conversions — one word done and the other
        // left ikavian, or the wrong yat length — so each is a Croatian-internal
        // error a learner actually makes, and the item now tests whether they
        // converted BOTH words. The obvious wrong answers here would be the
        // ekavian forms, and those are exactly what must never appear as a
        // clickable option: nothing on screen marks a distractor as foreign.
        // (Caught 2026-08-29 by extending the lint's distractor pass to
        // Serbisms — it had been encoding-only since before that directive.)
        options: ['lijepo vrijeme', 'lipo vrijeme', 'lijepo vrime', 'ljepo vrijeme'],
        correct: 0,
        explanation:
          'Ikavian replaces the standard -ije-/-je- with -i-, so lipo vrime is standard lijepo vrijeme — BOTH words convert. It is a regional variety of Croatian, not an error.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is performing a dialect: a learner who says "kaj buš" in Zagreb without having grown up with it sounds like mimicry, not fluency — understand it, answer in the standard. The second is "correcting" an inherited form as if it were an error: "dite" and "lipo" from a Dalmatian grandparent are regional Croatian, and the standard forms dijete and lijepo belong beside them, not instead of them. The third is the reverse: writing the regional form in a formal text — a job application says "dijete", whatever the family says at the table.',
        highlight: 'understand it, answer in the standard',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'You hear "Ča je bilo?" Where are you, most likely?',
            options: ['Zagreb', 'on the coast or an island', 'Osijek', 'Varaždin'],
            correct: 1,
            explanation:
              '"Ča" is the čakavian marker — Istria, the islands and parts of the coast. Zagreb and Varaždin say "kaj"; Osijek says "što".',
          },
          {
            q: 'Your grandfather says "misto". What is the standard form?',
            options: ['mjesto', 'mijesto', 'miesto', 'mjesta'],
            correct: 0,
            explanation:
              'Ikavian -i- corresponds to the standard short jat -je-: misto is mjesto. "Mjesta" is the genitive or plural of it.',
          },
          {
            q: 'Which word is a Venetian loan used on the coast?',
            options: ['tanjur', 'kuhinja', 'pjat', 'kutija'],
            correct: 2,
            explanation:
              '"Pjat" is the coastal word for a plate, from Venetian; tanjur is the standard. Kuhinja and kutija are standard forms.',
          },
          {
            q: 'Which describes urban Zagreb speech?',
            options: [
              'pure kajkavian',
              'štokavian-based, with kajkavian and German influence',
              'čakavian',
              'ikavian',
            ],
            correct: 1,
            explanation:
              'Rural Zagorje is genuinely kajkavian; the city speaks a štokavian-based colloquial with kaj, the buš future and a lexicon full of Germanisms.',
          },
          {
            q: 'Your grandmother says "dite". What should you do?',
            options: [
              'correct her to "dijete"',
              'understand it, and use "dijete" in the standard yourself — both are Croatian',
              'stop using either word',
              'use "dite" in formal writing',
            ],
            correct: 1,
            explanation:
              'An inherited form is regional Croatian, not an error. The standard belongs beside it in your own speech and writing, not instead of it at her table.',
          },
          {
            q: 'A friend writes a job application: "Tražim posao u vašoj kužini." What is off?',
            options: [
              'nothing',
              '"kužina" is a regional Venetian loan; a formal text uses the standard "kuhinja"',
              '"kužini" should be "kužina"',
              '"tražim" should be "trazim"',
            ],
            correct: 1,
            explanation:
              'Regional words belong to speech and to the region. In a formal text the standard word is expected, and the locative "kuhinji" is the form.',
          },
          {
            q: 'Which dialect group is the standard built on?',
            options: ['kajkavski', 'čakavski', 'štokavski', 'ikavski'],
            correct: 2,
            explanation:
              'Standard Croatian is štokavian ijekavian. Kajkavian and čakavian are the other two groups; ikavian is a reflex of jat found within them.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Regional Varieties — Key Takeaways',
        points: [
          'štokavski is the standard; kajkavski is Zagreb and the north-west; čakavski the coast',
          'Zagreb speech is štokavian-based with kajkavian and German influence',
          'The coast borrowed heavily from Venetian: pjat, škatula, kužina, gušt',
          'Ikavian replaces -ije-/-je- with -i-: dite, misto, lipo, vrime',
          "Learn to understand your family's variety; do not perform one",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Diaspora and Heritage
  // ─────────────────────────────────────────────────────────
  {
    id: 'diaspora-identity',
    title: 'Diaspora and Heritage',
    subtitle: 'Talking about emigration, return, and a language half-inherited',
    icon: '🌍',
    level: 'C1',
    duration: '~6 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Conversation You Will Have Most Often',
        body: 'For a heritage learner this is not a topic among others — it is the subject of a large share of every conversation you will have in Croatia. Where is your family from, when did they leave, why do you speak it, why do you speak it like that. Having the vocabulary makes the exchange a pleasure rather than an interrogation.',
        icon: '🌍',
      },
      {
        type: 'table',
        title: 'The Vocabulary',
        headers: ['Croatian', 'English'],
        rows: [
          ['iseljeništvo / dijaspora', 'the diaspora'],
          ['iseljenik', 'emigrant'],
          ['doseljenik', 'immigrant'],
          ['povratnik', 'a returnee'],
          ['druga generacija', 'the second generation'],
          ['materinski jezik', 'mother tongue'],
          ['zavičaj', 'native region, home place'],
          ['korijeni', 'roots'],
        ],
      },
      {
        type: 'rule',
        title: 'Zavičaj Has No English Word',
        body: 'Not country and not town — "zavičaj" is the specific place you or your family are FROM, with all the belonging that carries. "Moj zavičaj je Dalmacija." It is the word for what a diaspora family is usually homesick for, and using it correctly signals that you understand something the English word "hometown" does not carry.',
        highlight: 'Moj zavičaj je Dalmacija.',
      },
      {
        type: 'rule',
        title: 'Gastarbajter Is Historical, and Loaded',
        body: 'The word — from German Gastarbeiter — refers to the Croatians who went to Germany and Austria for work from the 1960s onward. It is used matter-of-factly by the generation it describes and can sound dismissive from an outsider. "Moj djed je bio gastarbajter u Njemačkoj" is a perfectly ordinary sentence from a grandchild; the same word used to characterise someone else may not be.',
        highlight: 'gastarbajter — historical, use with care',
      },
      {
        type: 'table',
        title: 'Talking About Your Own Croatian',
        headers: ['Croatian', 'English'],
        rows: [
          ['Razumijem više nego što govorim.', 'I understand more than I speak.'],
          ['Naučio sam od bake.', 'I learned from my grandmother.'],
          ['Govorim s greškama, ali govorim.', 'I speak with mistakes, but I speak.'],
          ['Ispričavam se na naglasku.', 'Apologies for my accent.'],
          ['Kod kuće smo govorili hrvatski.', 'We spoke Croatian at home.'],
          ['Trudim se održati jezik.', 'I am trying to keep the language up.'],
        ],
      },
      {
        type: 'rule',
        title: 'Inherited Croatian Is Often Older Croatian',
        body: 'A heritage speaker frequently sounds not wrong but dated — using words a grandparent brought out decades ago that have since shifted or fallen out of use, or a dialect form from one village. Croatians notice this and almost always find it charming rather than incorrect. It is worth knowing so that a comment about how you speak is heard as the compliment it usually is.',
        highlight: 'dated is not the same as wrong',
      },
      {
        type: 'rule',
        title: 'Language Loss Has Its Own Vocabulary',
        body: 'Useful for talking about the experience precisely: "zaboraviti jezik" (to forget the language), "izgubiti jezik", "obnoviti znanje" (to revive knowledge), "pasivno znanje" (passive knowledge — understanding without speaking), "prenijeti jezik na djecu" (to pass the language to the children). That last one is the sentence a lot of this app exists for.',
        highlight: 'prenijeti jezik na djecu',
      },
      {
        type: 'example',
        title: 'The Conversation',
        items: [
          {
            hr: 'Moji su djed i baka otišli šezdesetih godina.',
            en: 'My grandparents left in the sixties.',
            note: 'šezdesetih godina — genitive plural of a decade',
          },
          {
            hr: 'Obitelj mi je iz okolice Sinja.',
            en: 'My family is from the area around Sinj.',
            note: 'iz okolice + genitive',
          },
          {
            hr: 'Razumijem sve, ali teže mi je govoriti.',
            en: 'I understand everything, but speaking is harder for me.',
            note: 'teže mi je — dative of the person',
          },
          {
            hr: 'Učim da bih mogao razgovarati s rodbinom.',
            en: 'I am learning so I can talk to my relatives.',
            note: 'da bih + conditional, purpose',
          },
          {
            hr: 'Želim to prenijeti na svoju djecu.',
            en: 'I want to pass it on to my children.',
            note: 'svoju — the reflexive possessive, from A2',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Rođen sam u Australiji, ali korijeni su mi u Imotskoj krajini, odakle je otišao moj pradjed.',
            en: 'I was born in Australia, but my roots are in the Imotski region, which my great-grandfather left.',
            note: 'answering the question as it is meant: birth AND zavičaj',
          },
          {
            hr: 'Kao druga generacija govorim hrvatski s naglaskom, ali ga govorim.',
            en: 'As second generation I speak Croatian with an accent, but I speak it.',
            note: 'druga generacija; a self-description without apology',
          },
          {
            hr: 'Neke riječi koje koristim moja rodbina u Zagrebu više ne govori — kažu da zvučim kao njihova baka.',
            en: 'Some words I use my relatives in Zagreb no longer say — they tell me I sound like their grandmother.',
            note: 'inherited Croatian is often older Croatian',
          },
          {
            hr: 'Vratila se kao povratnica nakon trideset godina i otvorila obiteljsku konobu u zavičaju.',
            en: 'She came back as a returnee after thirty years and opened a family tavern in her home region.',
            note: 'povratnica; u zavičaju — locative',
          },
          {
            hr: 'U iseljeništvu smo miješali jezike, pa sam za "hladnjak" dugo govorio "fridž".',
            en: 'In the diaspora we mixed languages, so for "hladnjak" I long said "fridž".',
            note: 'a diaspora form beside the homeland standard',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What does "zavičaj" mean?',
        options: [
          'a country',
          'the specific place your family is from',
          'a holiday home',
          'a dialect',
        ],
        correct: 1,
        explanation:
          '"Zavičaj" is the particular place you or your family belong to, with all the attachment that carries. English "hometown" does not quite reach it.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Želim jezik ___ na svoju djecu." (pass on to my children)',
        options: ['prenijeti', 'prevesti', 'prenositi se', 'prepisati'],
        correct: 0,
        explanation:
          '"Prenijeti na" is to pass on or transmit. "Prevesti" is to translate and "prepisati" is to copy out — all three share a prefix but not a meaning.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The first is answering "Odakle si?" with a passport: "Iz Kanade" ends the conversation, because the question is about zavičaj — the answer they want is iz Kanade, ali obitelj mi je iz Sinja. The second is apologising instead of speaking: "Ispričavam se, moj hrvatski je loš" as an opener invites the switch to English; say govorim s greškama, ali govorim and carry on. The third is the reflexive possessive: "prenijeti jezik na moju djecu" — when the owner is the subject, the standard form is svoju djecu.',
        highlight: 'iz Kanade, ali obitelj mi je iz Sinja',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Someone in Croatia asks "Odakle si?" Which answer meets the question as it is meant?',
            options: [
              'Iz Kanade.',
              'Iz Toronta, iz centra.',
              'Iz Kanade, ali obitelj mi je iz okolice Sinja.',
              'Ne znam.',
            ],
            correct: 2,
            explanation:
              "The question is about zavičaj, not a passport. Naming both the birthplace and the family's place is what opens the conversation rather than closing it.",
          },
          {
            q: 'Complete: "Moj djed je bio ___ u Njemačkoj." (a guest worker — said by the grandchild)',
            options: ['gastarbajter', 'gastarbajterom', 'gastarbajtera', 'gastarbajteru'],
            correct: 0,
            explanation:
              'A predicate noun after "biti" stays in the nominative. From a grandchild the word is matter-of-fact; from an outsider it can sound dismissive.',
          },
          {
            q: 'Which sentence uses the reflexive possessive correctly?',
            options: [
              'Želim prenijeti jezik na svoje djecu.',
              'Želim prenijeti jezik na svoju djecu.',
              'Želim prenijeti jezik na svoja djeca.',
              'Želim prenijeti jezik na svojoj djeci.',
            ],
            correct: 1,
            explanation:
              '"Na" with motion takes the accusative, and "djeca" is a feminine singular collective: na svoju djecu. The others break agreement or the case.',
          },
          {
            q: 'What is a "povratnik"?',
            options: ['an emigrant', 'an immigrant', 'a returnee', 'a second-generation speaker'],
            correct: 2,
            explanation:
              'Povratnik — someone who has come back. Iseljenik is the emigrant, doseljenik the immigrant.',
          },
          {
            q: 'Which is the natural way to describe partial competence?',
            options: [
              'Razumijem više nego što govorim.',
              'Razumijem više od govorim.',
              'Razumijem više nego govorenje.',
              'Razumijem više kao govorim.',
            ],
            correct: 0,
            explanation:
              'Two verbs are compared with "nego što". "Od" needs a noun in the genitive, and "kao" is not a comparative.',
          },
          {
            q: 'A Croatian says "Govoriš kao moja baka." What does it usually mean?',
            options: [
              'your Croatian is wrong',
              'your Croatian sounds dated, and that charms — a compliment, usually',
              'you are too formal',
              'you speak too fast',
            ],
            correct: 1,
            explanation:
              'Inherited Croatian is often older Croatian. Croatians notice it and almost always find it charming rather than incorrect.',
          },
          {
            q: 'What is wrong with "Teže me je govoriti"?',
            options: [
              'nothing',
              'the person is in the dative: teže mi je',
              '"teže" should be "teško"',
              '"je" should be dropped',
            ],
            correct: 1,
            explanation:
              '"Teže mi je" — the experiencer of an impersonal "it is harder" is dative. The comparative "teže" is right for "harder".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Diaspora — Key Takeaways',
        points: [
          'iseljeništvo, iseljenik, povratnik, druga generacija, korijeni',
          'zavičaj is the place you belong to — English has no single word',
          'gastarbajter is historical and can sound dismissive from an outsider',
          'Inherited Croatian often sounds dated rather than wrong, and that charms',
          'pasivno znanje, obnoviti znanje, prenijeti jezik na djecu',
        ],
      },
    ],
  },
];
