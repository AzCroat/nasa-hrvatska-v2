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
          ['sȁm', 'alone', 'sȃm', 'I am (dialectal)'],
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
