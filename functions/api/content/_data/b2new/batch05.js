// functions/api/content/_data/b2new/batch05.js
//
// New B2 lessons, batch 05 (Croaticum restructure, stage 5, 2026-11-12). See b2new/index.js.
//
// Razgovarajte s nama! B2, lessons 7–8: the reflexive pronoun sebe in every case, verbal
// nouns and their genitive complement, higher education in Croatia, the iterative
// (habitual-past) conditional, and word formation — agent nouns, quality nouns,
// diminutives and augmentatives.
//
// Two standing choices, so no correct Croatian is ever marked wrong:
// - The dative of sebe has two correct forms (Kupio sam sebi / si kavu). No item offers
//   both; a typed item accepts either.
// - The conditional describes a habit only when the context says so. Every habit item
//   carries a time word (uvijek, svaki put, nedjeljom, kad smo bili djeca), and every
//   hypothesis item carries one too (sutra), so no item depends on a reading the learner
//   cannot see.

/** Spine entries for this batch. `masterOrder` is the lesson's final B2 position. */
export const SPINE = [
  {
    id: 'reflexive-sebe',
    masterOrder: 31,
    prerequisites: ['reflexive-verbs', 'object-pronouns', 'clitics'],
    objectives: [
      'Use sebe for "myself, yourself, herself, ourselves" in every case: sebe, sebi, sobom',
      'Choose the short form (se, si) or the long one, and always the long one after a preposition',
      'Tell the se that means "oneself" from the se that is simply part of a verb',
    ],
  },
  {
    id: 'verbal-nouns-intro',
    masterOrder: 34,
    prerequisites: ['passive-voice', 'participial-adjectives', 'reflexive-sebe'],
    objectives: [
      'Build a noun from a verb with -nje or -će: čitanje, učenje, otkriće',
      'Put the object of a verbal noun into the genitive: učenje jezika, čitanje knjiga',
      'Use verbal nouns after prepositions where English uses -ing: prije spavanja, za učenje',
    ],
  },
  {
    id: 'higher-education',
    masterOrder: 35,
    prerequisites: ['school-education', 'verbal-nouns-intro'],
    objectives: [
      'Describe the Croatian university system: preddiplomski, diplomski and doktorski studij',
      'Talk about the državna matura, ECTS credits, exams and student life',
      'Discuss education for everyone: students with disabilities and lifelong learning',
    ],
  },
  {
    id: 'iterative-conditional',
    masterOrder: 37,
    prerequisites: ['conditional', 'aspect-with-verbs'],
    objectives: [
      'Tell how things used to be with the conditional: Ljeti bismo išli na more',
      'Use kad + conditional for "whenever" in the past: Kad bi došao, uvijek bi donio cvijeće',
      'Tell a past habit from a hypothesis by the time words around it',
    ],
  },
  {
    id: 'word-formation-agents',
    masterOrder: 38,
    prerequisites: ['aspect-suffixes', 'verbal-nouns-intro'],
    objectives: [
      'Name the person who does something: učitelj, vozač, pisac, radnik — and the women: učiteljica, radnica',
      'Turn an adjective into a quality: mladost, ljepota, brzina, siromaštvo',
      'Make things small or big: kućica, stolić, mače — kućerina, nosina',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 31 · The reflexive pronoun sebe
// ─────────────────────────────────────────────────────────
const REFLEXIVE_SEBE = {
  id: 'reflexive-sebe',
  title: 'Myself, Yourself, Ourselves: sebe',
  subtitle: 'One pronoun for every person — pointing back to the subject',
  icon: '🪞',
  level: 'B2',
  duration: '~10 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'One Word Instead of Eight',
      body: 'English has myself, yourself, himself, herself, itself, ourselves, yourselves and themselves. Croatian has ONE pronoun for all of them: sebe — "self". It always points back to the subject of its own clause, whoever that subject is. You already use its short form every day without noticing: the se in Umivam se (I wash myself) is this same pronoun.',
      icon: '🪞',
    },
    {
      type: 'rule',
      title: 'One Word for Every Person',
      body: 'Ja vidim sebe. Ti vidiš sebe. Ona vidi sebe. Mi vidimo sebe. Oni vide sebe. The verb changes with the person; sebe does not. Use it whenever the object is the SAME person as the subject. Compare: Ana voli njega (Ana loves him — someone else) and Ana voli sebe (Ana loves herself). Because sebe always refers back to a subject, it can never BE the subject: it has no nominative and no vocative.',
      highlight: 'Ana voli sebe',
    },
    {
      type: 'table',
      title: 'sebe in Every Case',
      headers: ['Case', 'Long form', 'Short form', 'Example'],
      rows: [
        ['nominative', '—', '—', '(it is never the subject)'],
        ['genitive', 'sebe', '—', 'Imaš li novca kod sebe?'],
        ['dative', 'sebi', 'si', 'Kupio sam sebi kavu. / Kupio sam si kavu.'],
        ['accusative', 'sebe', 'se', 'Vidim sebe u ogledalu. / Vidim se u ogledalu.'],
        ['locative', 'sebi', '—', 'Priča samo o sebi.'],
        ['instrumental', 'sobom', '—', 'Uzmi kišobran sa sobom.'],
      ],
    },
    {
      type: 'rule',
      title: 'Long or Short?',
      body: 'sebe works like the other pronouns you know (mene / me, njemu / mu). The SHORT forms se and si are unstressed and sit in the second position of the clause, in the clitic cluster. The LONG forms sebe and sebi carry stress: use them for emphasis or contrast — Ne pere sestru, pere sebe (She is not washing her sister, she is washing herself). After a PREPOSITION only the long form is possible: za sebe, na sebe, kod sebe, o sebi, prema sebi, sa sobom, među sobom.',
      highlight: 'only the long form',
    },
    {
      type: 'rule',
      title: 'sebi and si',
      body: 'In the dative both forms are correct and mean the same: Kupio sam sebi novu jaknu = Kupio sam si novu jaknu (I bought myself a new jacket). si is a clitic, so it joins the cluster in second position — and like every pronoun clitic it comes BEFORE je: Kupio si je auto (He bought himself a car). You will hear si constantly in everyday speech: Napravi si čaj (Make yourself a tea), Daj si vremena (Give yourself time).',
      highlight: 'Kupio si je auto',
    },
    {
      type: 'rule',
      title: 'The se You Already Know',
      body: 'In some verbs se really means "oneself": umivati se (to wash oneself), gledati se u ogledalo (to look at oneself in the mirror). There you can swap in the long form for emphasis. In many others se is simply PART OF THE VERB and means nothing on its own: bojati se (to be afraid), smijati se (to laugh), sjećati se (to remember), nadati se (to hope). There you cannot swap in sebe: Nadam se (I hope) never becomes "Nadam sebe".',
      highlight: 'PART OF THE VERB',
    },
    {
      type: 'rule',
      title: 'Phrases Worth Knowing',
      body: 'biti izvan sebe (od bijesa, od sreće) — to be beside oneself (with anger, with joy); doći k sebi — to come round, to recover; misliti samo na sebe — to think only of oneself; među sobom — among themselves; sam sa sobom — alone with oneself; samo po sebi — in itself: To samo po sebi nije loše (That is not bad in itself).',
      highlight: 'doći k sebi',
    },
    {
      type: 'example',
      title: 'Back to the Subject',
      items: [
        {
          hr: 'Gledam sebe u ogledalu i jedva se prepoznajem.',
          en: 'I look at myself in the mirror and barely recognise myself.',
          note: 'sebe — the long accusative, stressed; se — the short accusative',
        },
        {
          hr: 'Marko je kupio sebi novi bicikl.',
          en: 'Marko bought himself a new bike.',
          note: 'sebi — dative: the bike is for Marko himself',
        },
        {
          hr: 'Marko je kupio njemu novi bicikl.',
          en: 'Marko bought him a new bike.',
          note: 'njemu — someone else, not Marko',
        },
        {
          hr: 'Uvijek nosim bocu vode sa sobom.',
          en: 'I always carry a bottle of water with me.',
          note: 'sobom — instrumental after s, which becomes sa before s',
        },
        {
          hr: 'Djeca su podijelila slatkiše među sobom.',
          en: 'The children shared the sweets among themselves.',
          note: 'sobom — instrumental after među',
        },
        {
          hr: 'Ivana na sastancima priča samo o sebi.',
          en: 'At meetings Ivana talks only about herself.',
          note: 'sebi — locative after o',
        },
        {
          hr: 'Moraš više misliti na sebe i manje na posao.',
          en: 'You have to think more about yourself and less about work.',
          note: 'sebe — accusative after na; the subject is ti',
        },
      ],
    },
    {
      type: 'example',
      title: 'Short Forms and Fixed Phrases',
      items: [
        {
          hr: 'Napravi si kavu, ja dolazim za pet minuta.',
          en: 'Make yourself a coffee, I will be there in five minutes.',
          note: 'si — the short dative, right after the verb',
        },
        {
          hr: 'Kupio si je novi mobitel, a stari je dao bratu.',
          en: 'He bought himself a new phone and gave the old one to his brother.',
          note: 'si comes before je in the clitic cluster',
        },
        {
          hr: 'Kad sam čuo vijest, bio sam izvan sebe od sreće.',
          en: 'When I heard the news, I was beside myself with joy.',
          note: 'izvan takes the genitive: sebe',
        },
        {
          hr: 'Nakon nesreće dugo nije došao k sebi.',
          en: 'After the accident he took a long time to come round.',
          note: 'k takes the dative: sebi',
        },
        {
          hr: 'Imaš li kod sebe olovku? Zaboravio sam svoju.',
          en: 'Do you have a pen on you? I forgot mine.',
          note: 'kod takes the genitive: sebe',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Uzmi kišobran sa ___, pada kiša."',
      options: ['sobom', 'se', 'sebi'],
      correct: 0,
      explanation:
        'After a preposition only the long form, and s takes the instrumental: sa sobom. se is a short form and cannot follow a preposition.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Ivan bought flowers for his wife, not for himself. Complete: "Ivan je kupio ___ cvijeće."',
      options: ['sebi', 'njoj', 'si'],
      correct: 1,
      explanation:
        'The flowers are for someone other than the subject, so the reflexive is wrong: njoj (to her). sebi and si would mean he bought them for himself.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Using the personal pronoun for yourself: "Kupio sam meni kavu" — the subject is ja, so the pronoun is reflexive: Kupio sam sebi kavu (or si). (2) A short form after a preposition: "o si", "sa se" — after a preposition only the long form: o sebi, sa sobom. (3) Putting si after je: "Kupio je si auto" — pronoun clitics go before je: Kupio si je auto. (4) Swapping sebe into a verb whose se means nothing: "Nadam sebe" — it is Nadam se.',
      highlight: 'Kupio sam sebi kavu',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Volim putovati, ali uvijek nosim previše stvari sa ___."',
          options: ['se', 'sobom', 'sebi', 'sebe'],
          correct: 1,
          explanation: 'After the preposition s you need the instrumental of sebe: sa sobom.',
        },
        {
          q: 'Complete: "Ana je kupila ___ novu haljinu." (for herself — the long form)',
          options: ['sebi', 'sebe', 'njoj', 'se'],
          correct: 0,
          explanation:
            'For whom? — the dative, and the dress is for Ana herself: sebi. njoj would be another woman.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Kupio je si auto.',
            'Kupio si je auto.',
            'Kupio je se auto.',
            'Si je kupio auto.',
          ],
          correct: 1,
          explanation:
            'si is the short dative and goes before je in the clitic cluster; a clitic can never open the sentence.',
        },
        {
          q: 'Complete: "On stalno priča o ___." (about himself)',
          options: ['se', 'si', 'sebe', 'sebi'],
          correct: 3,
          explanation: 'o takes the locative, and after a preposition only the long form: o sebi.',
        },
        {
          q: 'In which sentence does se mean "oneself"?',
          options: [
            'Bojim se mraka.',
            'Sjećam se tog ljeta.',
            'Umivam se hladnom vodom.',
            'Nadam se da ćeš doći.',
          ],
          correct: 2,
          explanation:
            'Umivam se = I wash myself. In bojati se, sjećati se and nadati se the se is part of the verb.',
        },
        {
          q: 'Complete: "Djeca su se dugo dogovarala među ___."',
          options: ['sobom', 'sebe', 'sebi', 'se'],
          correct: 0,
          explanation: 'među here takes the instrumental: među sobom — among themselves.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'sebe — Key Takeaways',
      points: [
        'sebe means myself, yourself, herself, ourselves… — one word for every person',
        'It points back to the subject of its own clause and has no nominative',
        'Cases: sebe (G, A), sebi (D, L), sobom (I); short forms se (A) and si (D)',
        'After a preposition only the long form: o sebi, kod sebe, sa sobom',
        'sebi and si are both correct; si goes before je: Kupio si je auto',
        'In bojati se, nadati se, sjećati se the se is part of the verb, not "oneself"',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 34 · Verbal nouns
// ─────────────────────────────────────────────────────────
const VERBAL_NOUNS_INTRO = {
  id: 'verbal-nouns-intro',
  title: 'Reading, Learning, Writing: Nouns from Verbs',
  subtitle: 'čitanje, učenje, otkriće — and why the object goes into the genitive',
  icon: '📖',
  level: 'B2',
  duration: '~10 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'The Croatian "-ing"',
      body: 'English turns a verb into a noun with -ing: read → reading, learn → learning. Croatian does it with -nje (and, in a few verbs, -će): čitati → čitanje, učiti → učenje, otkriti → otkriće. The result is called a verbal noun (glagolska imenica). It names the activity itself, and it is an ordinary neuter noun: Čitanje je moj hobi. This lesson is the basic toolkit; at C1 you will use verbal nouns to compress whole clauses.',
      icon: '📖',
    },
    {
      type: 'rule',
      title: 'How to Build It',
      body: 'Verbs in -ati keep the a and add -nje: čitati → čitanje, pisati → pisanje, kuhati → kuhanje, plivati → plivanje. Verbs in -ovati keep -ova-: putovati → putovanje, stanovati → stanovanje. Verbs in -iti and -jeti end in -enje: učiti → učenje, govoriti → govorenje. Before -enje some consonants soften, exactly as in the passive participle you learnt: nositi → nošenje, roditi → rođenje, misliti → mišljenje, vidjeti → viđenje — the same word as in Do viđenja (until seeing again).',
      highlight: 'Do viđenja',
    },
    {
      type: 'table',
      title: 'Verb → Verbal Noun',
      headers: ['Verb', 'Verbal noun', 'Meaning'],
      rows: [
        ['čitati', 'čitanje', 'reading'],
        ['pisati', 'pisanje', 'writing'],
        ['putovati', 'putovanje', 'travelling, a trip'],
        ['učiti', 'učenje', 'learning, studying'],
        ['misliti', 'mišljenje', 'thinking, an opinion'],
        ['roditi', 'rođenje', 'birth'],
        ['otkriti', 'otkriće', 'discovery'],
        ['piti', 'piće', 'a drink'],
      ],
    },
    {
      type: 'rule',
      title: 'A Few End in -će',
      body: 'A small group of verbs whose infinitive ends in a vowel + -ti forms the noun with -će: otkriti → otkriće (discovery), piti → piće (a drink), pokriti → pokriće (cover, backing). These often name the RESULT rather than the activity: otkriće penicilina is the discovery itself. Like the -nje nouns, they are neuter: To je bilo veliko otkriće.',
      highlight: 'otkriće',
    },
    {
      type: 'rule',
      title: 'The Object Goes into the Genitive',
      body: 'When the verb has a direct object, the verbal noun takes that object in the GENITIVE — just as English says "the learning OF languages": učiti jezik → učenje jezika; čitati knjige → čitanje knjiga; rješavati probleme → rješavanje problema. Everything else stays as it was: putovati u Zagreb → putovanje u Zagreb; pomagati starijima → pomaganje starijima. A reflexive verb drops its se: baviti se sportom → bavljenje sportom.',
      highlight: 'GENITIVE',
    },
    {
      type: 'rule',
      title: 'An Adverb Becomes an Adjective',
      body: 'A word describing HOW the action happens becomes an adjective agreeing with the neuter noun: čitati glasno → glasno čitanje, vježbati redovito → redovito vježbanje, učiti svaki dan → svakodnevno učenje. And because a verbal noun is a noun, it declines like more or polje: Uživam u čitanju (locative), Bavim se pisanjem (instrumental), nakon učenja (genitive). That is how Croatian says English "-ing" after a preposition: prije spavanja (before sleeping), bez razmišljanja (without thinking).',
      highlight: 'prije spavanja',
    },
    {
      type: 'example',
      title: 'Verbal Nouns as Subjects',
      items: [
        {
          hr: 'Čitanje knjiga razvija maštu i bogati rječnik.',
          en: 'Reading books develops the imagination and enriches vocabulary.',
          note: 'knjiga — genitive plural, the object of čitanje',
        },
        {
          hr: 'Učenje stranih jezika traje cijeli život.',
          en: 'Learning foreign languages lasts a whole lifetime.',
          note: 'stranih jezika — genitive plural after učenje',
        },
        {
          hr: 'Pušenje je zabranjeno u cijeloj zgradi.',
          en: 'Smoking is forbidden in the whole building.',
          note: 'zabranjeno — neuter, agreeing with pušenje',
        },
        {
          hr: 'Otkriće penicilina potpuno je promijenilo medicinu.',
          en: 'The discovery of penicillin completely changed medicine.',
          note: 'otkriće — a neuter noun in -će',
        },
        {
          hr: 'Redovito vježbanje dobro je za tijelo i za glavu.',
          en: 'Regular exercise is good for the body and the mind.',
          note: 'redovito — now an adjective agreeing with vježbanje',
        },
        {
          hr: 'Rješavanje takvih problema traži puno strpljenja.',
          en: 'Solving problems like these takes a lot of patience.',
          note: 'problema — genitive, the object of rješavanje',
        },
      ],
    },
    {
      type: 'example',
      title: 'Verbal Nouns in Every Case',
      items: [
        {
          hr: 'Prije spavanja uvijek pročitam nekoliko stranica.',
          en: 'Before going to sleep I always read a few pages.',
          note: 'spavanja — genitive after prije',
        },
        {
          hr: 'Moja sestra uživa u kuhanju za prijatelje.',
          en: 'My sister enjoys cooking for her friends.',
          note: 'kuhanju — locative after u',
        },
        {
          hr: 'Moj se brat već godinama bavi pisanjem kratkih priča.',
          en: 'My brother has been writing short stories for years.',
          note: 'pisanjem — instrumental after baviti se; priča — genitive plural',
        },
        {
          hr: 'Bez razmišljanja je pristao i odmah se pokajao.',
          en: 'He agreed without thinking and immediately regretted it.',
          note: 'razmišljanja — genitive after bez',
        },
        {
          hr: 'Putovanje u Dubrovnik trajalo je šest sati.',
          en: 'The journey to Dubrovnik took six hours.',
          note: 'u Dubrovnik stays as it was after the verb putovati',
        },
        {
          hr: 'Na obrascu upišite datum i mjesto rođenja.',
          en: 'On the form, write your date and place of birth.',
          note: 'rođenja — genitive of rođenje, from roditi',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the verbal noun of "pisati"?',
      options: ['pisanje', 'pisac', 'pisao'],
      correct: 0,
      explanation:
        'pisati keeps its a and adds -nje: pisanje. pisac is the person who writes, pisao the past participle.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Učenje ___ nije lako, ali je zabavno." (the Croatian language)',
      options: ['hrvatskog jezika', 'hrvatski jezik', 'hrvatskim jezikom'],
      correct: 0,
      explanation: 'The object of a verbal noun goes into the genitive: učenje hrvatskog jezika.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Keeping the object in the accusative: "učenje hrvatski jezik" — after a verbal noun the object is in the genitive: učenje hrvatskog jezika. (2) An infinitive after a preposition: "prije spavati", "za učiti" — after a preposition use the verbal noun in its case: prije spavanja, za učenje. (3) Masculine agreement: "Putovanje je bio dug" — verbal nouns are neuter: Putovanje je bilo dugo. (4) Forgetting the softening: "rodenje", "mislenje" — it is rođenje, mišljenje.',
      highlight: 'učenje hrvatskog jezika',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What is the verbal noun of "učiti"?',
          options: ['učitelj', 'učenje', 'učanje', 'učio'],
          correct: 1,
          explanation: 'An -iti verb ends in -enje: učenje. učitelj is the person who teaches.',
        },
        {
          q: 'Complete: "Rješavanje ___ traži strpljenje." (problems)',
          options: ['probleme', 'problemima', 'problema', 'problemi'],
          correct: 2,
          explanation: 'The object of a verbal noun goes into the genitive: problema.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Prije spavati popijem čaj.',
            'Prije spavanje popijem čaj.',
            'Prije spavanju popijem čaj.',
            'Prije spavanja popijem čaj.',
          ],
          correct: 3,
          explanation:
            'prije takes the genitive, and after a preposition you need the verbal noun: prije spavanja.',
        },
        {
          q: 'Complete: "Moj brat se bavi ___."',
          options: ['plivanjem', 'plivanje', 'plivanja', 'plivati'],
          correct: 0,
          explanation: 'baviti se takes the instrumental: bavi se plivanjem.',
        },
        {
          q: 'Complete: "Putovanje u Rim bilo je ___."',
          options: ['dug', 'duga', 'dugo', 'dugi'],
          correct: 2,
          explanation: 'putovanje is neuter, so the adjective is neuter: dugo.',
        },
        {
          q: 'What is the verbal noun of "otkriti"?',
          options: ['otkriće', 'otkrivač', 'otkrio', 'otkriven'],
          correct: 0,
          explanation:
            'otkriti forms its noun with -će: otkriće. otkrivač is the person who discovers.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Verbal Nouns — Key Takeaways',
      points: [
        '-ati → -anje, -ovati → -ovanje, -iti / -jeti → -enje: čitanje, putovanje, učenje',
        'Some consonants soften: nošenje, rođenje, mišljenje, viđenje',
        'A few verbs take -će: otkriće, piće, pokriće',
        'Verbal nouns are neuter and decline like more: u čitanju, s učenjem',
        'The object goes into the genitive: učenje jezika, čitanje knjiga',
        'After a preposition use the verbal noun, never the infinitive: prije spavanja',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 35 · Higher education
// ─────────────────────────────────────────────────────────
const HIGHER_EDUCATION = {
  id: 'higher-education',
  title: 'Studying in Croatia',
  subtitle: 'The Bologna system, the state matura, ECTS — and education for everyone',
  icon: '🎓',
  level: 'B2',
  duration: '~10 min',
  color: '#1d4ed8',
  bg: '#eff6ff',
  slides: [
    {
      type: 'intro',
      title: 'Obrazovanje za sve',
      body: 'The University of Zagreb was founded in 1669 and is the oldest in Croatia. Today there are public universities in Zagreb, Split, Rijeka, Osijek, Zadar, Pula and Dubrovnik, among others, plus veleučilišta and visoke škole (polytechnics and colleges) that offer professional study programmes. This lesson gives you the words to talk about how Croatians get into university, what they study and how — and about learning that does not stop at graduation.',
      icon: '🎓',
    },
    {
      type: 'rule',
      title: 'The Bologna Process',
      body: 'Croatia joined the Bologna Process in 2001, and from the 2005/2006 academic year its universities moved to the European three-cycle system. The first cycle is the preddiplomski studij (usually three years); the second is the diplomski studij (usually two years); the third is the poslijediplomski studij, above all the doktorski studij (usually three years). Some programmes, such as medicine and law, are integrated — one long programme of five or six years. Since the 2022 law on higher education the first cycle is officially called prijediplomski studij; you will hear both names.',
      highlight: 'preddiplomski studij',
    },
    {
      type: 'rule',
      title: 'ECTS Credits and Titles',
      body: "Study is measured in ECTS bodovi (European Credit Transfer System credits). One academic year carries 60 ECTS credits, and one credit stands for about 25–30 hours of a student's work — lectures, reading, homework and exams together. A three-year first cycle therefore carries 180 credits, and with a two-year second cycle the total is 300. After the first cycle a student becomes a sveučilišni prvostupnik / prvostupnica (bacc.); after the second, a magistar / magistra (mag.); a doctorate gives the title doktor znanosti (dr. sc.).",
      highlight: '60 ECTS credits',
    },
    {
      type: 'rule',
      title: 'The State Matura',
      body: 'Since 2010 students finishing secondary school sit the državna matura, a national school-leaving exam organised by the Nacionalni centar za vanjsko vrednovanje obrazovanja. Three subjects are compulsory — hrvatski jezik, matematika and a strani jezik — each at a basic or a higher level, and students add elective subjects. Universities rank applicants by their matura results together with their school grades. Note the aspect pair: polagati maturu means to sit it, položiti maturu means to pass it.',
      highlight: 'polagati maturu',
    },
    {
      type: 'rule',
      title: 'Education for Everyone',
      body: 'Students with disabilities (studenti s invaliditetom) can ask for adapted conditions at the matura and at university exams — more time, adapted materials, an assistant — and universities have offices or coordinators to support them. Learning also continues after school: cjeloživotno učenje (lifelong learning) is the official term. Pučka otvorena učilišta (adult education centres) run courses for adults, and programmes called sveučilište za treću životnu dob (university of the third age) offer courses in languages, history and computing for older people.',
      highlight: 'cjeloživotno učenje',
    },
    {
      type: 'table',
      title: 'Words of Student Life',
      headers: ['Croatian', 'English'],
      rows: [
        ['upisati fakultet', 'to enrol at a faculty'],
        ['predavanje', 'a lecture'],
        ['kolokvij', 'a test during the semester'],
        ['ispitni rok', 'an exam period'],
        ['završni rad', 'a final paper after the first cycle'],
        ['diplomski rad', "a master's thesis"],
        ['studentski dom', 'a student hall of residence'],
        ['menza', 'a student canteen'],
        ['stipendija', 'a scholarship'],
      ],
    },
    {
      type: 'example',
      title: 'The System',
      items: [
        {
          hr: 'Sveučilište u Zagrebu osnovano je 1669. godine i najstarije je u Hrvatskoj.',
          en: 'The University of Zagreb was founded in 1669 and is the oldest in Croatia.',
          note: 'osnovano — passive participle, neuter like sveučilište',
        },
        {
          hr: 'Nakon preddiplomskog studija studenti mogu upisati diplomski studij.',
          en: 'After the first cycle, students can enrol in the second cycle.',
        },
        {
          hr: 'Jedna akademska godina nosi šezdeset ECTS bodova.',
          en: 'One academic year carries sixty ECTS credits.',
        },
        {
          hr: 'Na državnoj maturi obvezni su hrvatski jezik, matematika i strani jezik.',
          en: 'Croatian, mathematics and a foreign language are compulsory at the state matura.',
        },
        {
          hr: 'Rezultati mature važni su za upis na fakultet.',
          en: 'The matura results matter for admission to a faculty.',
          note: 'upis — a noun: enrolment, admission',
        },
        {
          hr: 'Moja sestra je prošle godine položila maturu s odličnim uspjehom.',
          en: 'My sister passed the matura last year with excellent results.',
          note: 'položila — perfective: she passed it',
        },
      ],
    },
    {
      type: 'example',
      title: 'Student Life and Learning for Life',
      items: [
        {
          hr: 'Živim u studentskom domu i ručam u menzi sa studentskom iskaznicom.',
          en: 'I live in a student hall and have lunch in the canteen with my student card.',
        },
        {
          hr: 'Studiram pravo, a ovaj tjedan učim za težak ispit.',
          en: 'I study law, and this week I am studying for a difficult exam.',
          note: 'studirati — your degree subject; učiti — preparing for an exam',
        },
        {
          hr: 'Studenti s invaliditetom mogu tražiti prilagodbu ispita.',
          en: 'Students with disabilities can ask for an adapted exam.',
        },
        {
          hr: 'Moja baka u sedamdesetoj pohađa tečaj talijanskog na sveučilištu za treću životnu dob.',
          en: 'At seventy my grandmother is attending an Italian course at the university of the third age.',
        },
        {
          hr: 'Učenje ne prestaje nakon diplome; zato se govori o cjeloživotnom učenju.',
          en: 'Learning does not stop after graduation; that is why people speak of lifelong learning.',
        },
        {
          hr: 'Dobila je stipendiju jer je bila jedna od najboljih studentica na godini.',
          en: 'She got a scholarship because she was one of the best students in her year.',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'How many ECTS credits does one academic year carry?',
      options: ['30', '60', '120'],
      correct: 1,
      explanation: 'One year = 60 ECTS credits, so a three-year first cycle carries 180.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which study cycle follows the preddiplomski studij?',
      options: ['diplomski studij', 'državna matura', 'srednja škola'],
      correct: 0,
      explanation:
        'The second Bologna cycle is the diplomski studij; the matura comes before university.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) studirati for exam preparation: "Studiram za ispit" — studirati means to be a university student of a field (Studiram pravo); preparing for an exam is učiti: Učim za ispit. (2) Mixing the aspects of polagati: "Sutra položim ispit" — sitting it is imperfective, Sutra polažem ispit; passing it is perfective, Položio sam ispit. (3) Reading fakultet as "faculty" in the sense of teaching staff: a fakultet is a school within a university (Filozofski fakultet); the staff are nastavnici. (4) Reading gimnazija as a gym: it is an academic secondary school; a gym is teretana.',
      highlight: 'Učim za ispit',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which is the first cycle of university study in the Bologna system?',
          options: [
            'diplomski studij',
            'poslijediplomski studij',
            'preddiplomski studij',
            'doktorski studij',
          ],
          correct: 2,
          explanation:
            'The preddiplomski (officially now prijediplomski) studij comes first, then the diplomski, then the doctorate.',
        },
        {
          q: 'Complete: "Sutra ___ ispit iz povijesti, pa sam nervozan." (I am sitting)',
          options: ['položim', 'polažem', 'položio sam', 'položen'],
          correct: 1,
          explanation:
            'Sitting an exam is an ongoing activity: the imperfective polažem. položiti means to pass.',
        },
        {
          q: 'Which three subjects are compulsory at the državna matura?',
          options: [
            'hrvatski jezik, matematika, strani jezik',
            'hrvatski jezik, povijest, fizika',
            'matematika, biologija, kemija',
            'strani jezik, glazbena kultura, likovna kultura',
          ],
          correct: 0,
          explanation:
            'Croatian, mathematics and a foreign language are compulsory; the rest are electives.',
        },
        {
          q: 'What does "fakultet" mean?',
          options: [
            'the teaching staff',
            'a faculty — one school within a university',
            'a secondary school',
            'a student hall of residence',
          ],
          correct: 1,
          explanation:
            'A fakultet is a school within a university, such as the Filozofski fakultet. The staff are nastavnici.',
        },
        {
          q: 'What is a "kolokvij"?',
          options: [
            'a summer holiday',
            'a student canteen',
            'a scholarship',
            'a test taken during the semester',
          ],
          correct: 3,
          explanation:
            'A kolokvij is a test during the semester; passing it can count towards the final exam.',
        },
        {
          q: 'Complete: "Učenje u svakoj životnoj dobi zove se ___ učenje."',
          options: ['cjeloživotnim', 'cjeloživotno', 'cjeloživotna', 'cjeloživotni'],
          correct: 1,
          explanation: 'učenje is neuter, so the adjective is neuter: cjeloživotno učenje.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Studying in Croatia — Key Takeaways',
      points: [
        'Bologna since 2005/06: preddiplomski (prijediplomski), diplomski, doktorski studij',
        'One year = 60 ECTS credits; titles bacc., mag., dr. sc.',
        'The državna matura: hrvatski, matematika and a strani jezik are compulsory',
        'polagati ispit = to sit it; položiti ispit = to pass it',
        'studirati = your degree subject; učiti = studying for an exam',
        'Education for everyone: adapted exams, cjeloživotno učenje, sveučilište za treću životnu dob',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 37 · The iterative conditional
// ─────────────────────────────────────────────────────────
const ITERATIVE_CONDITIONAL = {
  id: 'iterative-conditional',
  title: 'When We Were Children, We Would…',
  subtitle: 'The conditional that tells how things used to be',
  icon: '🕰️',
  level: 'B2',
  duration: '~10 min',
  color: '#be123c',
  bg: '#fff1f2',
  slides: [
    {
      type: 'intro',
      title: 'English "would" Does Two Jobs',
      body: 'English "would" can be a hypothesis — If I had money, I would buy a car — or a habit in the past — When I was little, we would go to the seaside every summer. The Croatian conditional does exactly the same two jobs. You learnt the first in the conditional lesson. This lesson is the second: the conditional of repeated past events, the way Croatians tell how life used to be.',
      icon: '🕰️',
    },
    {
      type: 'rule',
      title: 'The Same Forms',
      body: 'There is nothing new to learn: it is the conditional you know — bih, bi, bi, bismo, biste, bi + the l-participle. Ja bih došao / došla, ti bi došao, on bi došao, ona bi došla, mi bismo došli, vi biste došli, oni bi došli. The short forms are clitics and take the second place in the clause: Ljeti bismo išli na more.',
      highlight: 'mi bismo došli',
    },
    {
      type: 'rule',
      title: 'A Habit in the Past',
      body: 'Kad bi tata došao s posla, uvijek bi prvo popio kavu — Whenever Dad came home from work, he would always have a coffee first. Here kad means "whenever", and BOTH clauses are in the conditional. A single verb in the conditional tells a habit too: Nedjeljom bi cijela obitelj ručala zajedno (On Sundays the whole family would have lunch together). Time words show that it is a habit: uvijek, svaki put, nedjeljom, ljeti, svako jutro, kad sam bio dijete, nekad.',
      highlight: 'BOTH clauses',
    },
    {
      type: 'rule',
      title: 'Which Aspect?',
      body: 'Each repetition is usually one complete event, so the perfective is common: Kad bi pala kiša, ostali bismo kod kuće (Whenever it rained, we would stay at home). For an activity that went on in the background, use the imperfective: Navečer bi djed čitao novine (In the evening Grandpa would read the paper). Both are correct; the choice depends on whether you see each event as a whole or as a process.',
      highlight: 'Navečer bi djed čitao novine',
    },
    {
      type: 'rule',
      title: 'Habit or Hypothesis?',
      body: 'Kad bi došao, donio bi cvijeće can mean "If he came, he would bring flowers" or "Whenever he came, he would bring flowers". The context decides. Sutra, ako, a wish, a polite request point to the hypothesis: Kad bi sutra došao, bilo bi lijepo. A story about the past and time words point to the habit. Kad god (whenever) makes the habit unmistakable: Kad god bi došao, donio bi cvijeće.',
      highlight: 'Kad god',
    },
    {
      type: 'rule',
      title: 'Two Other Ways to Say It',
      body: 'The plain past of an imperfective verb says the same thing: Ljeti smo išli na more = Ljeti bismo išli na more. The conditional version sounds like storytelling, often warm and nostalgic. Spoken Croatian also uses znati + infinitive for a habit: Djed je znao satima sjediti u vrtu (Grandpa would often sit in the garden for hours) — here znati does not mean "to know".',
      highlight: 'znati + infinitive',
    },
    {
      type: 'example',
      title: 'How Things Used to Be',
      items: [
        {
          hr: 'Kad sam bio dijete, ljeti bismo išli k baki na otok.',
          en: 'When I was a child, in summer we would go to Grandma’s on the island.',
          note: 'bismo — first person plural, a summer habit',
        },
        {
          hr: 'Kad bi tata došao s posla, uvijek bi prvo popio kavu.',
          en: 'Whenever Dad came home from work, he would always have a coffee first.',
          note: 'both clauses are in the conditional',
        },
        {
          hr: 'Nedjeljom bi cijela obitelj ručala zajedno.',
          en: 'On Sundays the whole family would have lunch together.',
          note: 'nedjeljom — the time word that makes it a habit',
        },
        {
          hr: 'Kad bi pala kiša, ostali bismo kod kuće i igrali karte.',
          en: 'Whenever it rained, we would stay at home and play cards.',
          note: 'pala — perfective: each rain as one whole event',
        },
        {
          hr: 'Djed bi nam navečer pričao priče o starim vremenima.',
          en: 'In the evening Grandpa would tell us stories about the old days.',
          note: 'bi comes before nam in the clitic cluster',
        },
        {
          hr: 'Svaki put kad bih je nazvao, ona bi se nasmijala.',
          en: 'Every time I called her, she would laugh.',
          note: 'bih — first person singular, before je',
        },
        {
          hr: 'Kad god bismo prošli pokraj pekare, mama bi nam kupila kiflu.',
          en: 'Whenever we walked past the bakery, Mum would buy us a bread roll.',
          note: 'kad god — whenever, the habit is unmistakable',
        },
      ],
    },
    {
      type: 'example',
      title: 'Habit, Hypothesis and the Alternatives',
      items: [
        {
          hr: 'Kad bih sutra imao vremena, otišao bih u kino.',
          en: 'If I had time tomorrow, I would go to the cinema.',
          note: 'sutra — a hypothesis, not a habit',
        },
        {
          hr: 'Kad smo bili studenti, često bismo sjedili u kafiću do ponoći.',
          en: 'When we were students, we would often sit in the café until midnight.',
          note: 'sjedili — imperfective: a long background activity',
        },
        {
          hr: 'Ljeti smo išli na more, a zimi smo skijali u Gorskom kotaru.',
          en: 'In summer we went to the seaside, and in winter we skied in Gorski kotar.',
          note: 'the plain past of imperfective verbs, same meaning',
        },
        {
          hr: 'Djed je znao satima sjediti u vrtu i gledati more.',
          en: 'Grandpa would often sit in the garden for hours, looking at the sea.',
          note: 'znao je + infinitive — a habit, not knowledge',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'In a story about childhood, what does "Ljeti bismo išli na more" express?',
      options: ['a past habit', 'a wish for the future', 'a polite request'],
      correct: 0,
      explanation:
        'In a story about the past, the conditional with ljeti tells what used to happen every summer.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Kad bi tata došao kući, uvijek ___ prvo popio kavu."',
      options: ['bi', 'bih', 'bismo'],
      correct: 0,
      explanation: 'The subject is tata, third person singular: bi.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Using bi for every person: "Mi bi išli na more" — the standard forms are ja bih, mi bismo, vi biste: Ljeti mi bismo išli na more. (2) Starting a clause with the clitic: "Kad bi došao, bi donio cvijeće" — bi cannot open a clause: donio bi cvijeće. (3) Writing bismo as two words: "bi smo" — it is one word, bismo, and biste likewise. (4) Hearing every kad bi as "if": look for uvijek, svaki put, nedjeljom, kad sam bio dijete — then it is a habit.',
      highlight: 'mi bismo',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'In a story about childhood, what does "Kad bi pala kiša, ostali bismo kod kuće" mean?',
          options: [
            'If it rains, we will stay at home.',
            'Whenever it rained, we would stay at home.',
            'It rained once and we stayed at home.',
            'We want to stay at home if it rains.',
          ],
          correct: 1,
          explanation:
            'Both clauses in the conditional, in a story about the past: a repeated event — whenever it rained.',
        },
        {
          q: 'Complete: "Kad smo bili djeca, ljeti ___ išli na more."',
          options: ['bi', 'bih', 'bismo', 'biste'],
          correct: 2,
          explanation: 'smo shows the subject is mi, so the conditional is bismo.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Kad došao bi, donio bi cvijeće.',
            'Kad bi došao, donio bi cvijeće.',
            'Kad bi došao, bi donio cvijeće.',
            'Bi kad došao, donio bi cvijeće.',
          ],
          correct: 1,
          explanation:
            'bi takes the second place: right after kad, and after the verb in the second clause — never at its start.',
        },
        {
          q: 'Which word shows that a conditional sentence describes a past habit?',
          options: ['sutra', 'molim', 'ako', 'svaki put'],
          correct: 3,
          explanation:
            'svaki put (every time) marks repetition. sutra and ako point to a hypothesis, molim to a request.',
        },
        {
          q: 'Complete: "Svaki put kad ___ je nazvao, bila bi sretna." (I)',
          options: ['bih', 'bi', 'bismo', 'biste'],
          correct: 0,
          explanation: 'First person singular: bih — and it stands before je.',
        },
        {
          q: 'Which sentence describes a past habit rather than a hypothesis?',
          options: [
            'Kad bih sutra imao novca, kupio bih auto.',
            'Kad bi sutra padala kiša, ostali bismo kod kuće.',
            'Nedjeljom bi djed rano ustao i otišao u ribolov.',
            'Kad biste htjeli, mogli biste doći sutra.',
          ],
          correct: 2,
          explanation:
            'nedjeljom marks a habit: every Sunday Grandpa would get up early and go fishing. The others are about tomorrow.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'The Habitual Conditional — Key Takeaways',
      points: [
        'The conditional can tell a past habit, like English "would": Ljeti bismo išli na more',
        'kad + conditional, conditional in the main clause = whenever: Kad bi došao, donio bi cvijeće',
        'Time words decide: uvijek, svaki put, nedjeljom, kad sam bio dijete',
        'Kad god makes the habit unmistakable; sutra points to a hypothesis',
        'Same forms as always: bih, bi, bi, bismo, biste, bi — never "mi bi"',
        'Alternatives: the plain imperfective past, or znao je + infinitive',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 38 · Word formation: agents, qualities, diminutives, augmentatives
// ─────────────────────────────────────────────────────────
const WORD_FORMATION_AGENTS = {
  id: 'word-formation-agents',
  title: 'Who Does It, What It Is Like: Building Nouns',
  subtitle: 'učitelj, vozač, pisac — mladost, ljepota — kućica and kućerina',
  icon: '🧱',
  level: 'B2',
  duration: '~10 min',
  color: '#047857',
  bg: '#ecfdf5',
  slides: [
    {
      type: 'intro',
      title: 'One Word, a Whole Family',
      body: 'Croatian builds new nouns from verbs and adjectives with a small set of suffixes (nastavci). Learn the suffixes and one word gives you a family: učiti → učitelj, učiteljica, učenik, učenica, učenje. This lesson covers four families: the person who does something, the woman who does it, the name of a quality, and words that make things small or big.',
      icon: '🧱',
    },
    {
      type: 'rule',
      title: 'Who Does It: -telj, -ač, -ac, -ik',
      body: '-telj: učiti → učitelj, roditi → roditelj, gledati → gledatelj, ravnati → ravnatelj (head of a school), nositi → nositelj (holder, bearer: nositelj projekta). -ač: voziti → vozač, igrati → igrač, pjevati → pjevač, prodavati → prodavač, plivati → plivač. -ac: pisati → pisac, kupiti → kupac, boriti se → borac, loviti → lovac — the a disappears in the other cases: pisac, pisca, piscu. -ik: raditi → radnik, učiti → učenik, put → putnik, sudjelovati → sudionik.',
      highlight: 'pisac, pisca, piscu',
    },
    {
      type: 'rule',
      title: 'And the Women: -ica, -ka',
      body: 'The commonest female suffix is -ica: učiteljica, gledateljica, ravnateljica, nositeljica, vozačica, pjevačica, prodavačica. A noun in -ik loses its k before -ica: radnik → radnica, učenik → učenica, putnik → putnica. Some nouns take -ka: novinar → novinarka, Splićanin → Splićanka. A few are irregular and must be learnt: pisac → spisateljica, borac → borkinja.',
      highlight: 'radnik → radnica',
    },
    {
      type: 'rule',
      title: 'What It Is Like: -ost, -ota, -ina, -stvo',
      body: 'From adjectives: -ost — mlad → mladost, star → starost, siguran → sigurnost, nezaposlen → nezaposlenost, hrabar → hrabrost (the fleeting a drops); -ota — dobar → dobrota, lijep → ljepota (ije shortens to je); -ina — brz → brzina, topao → toplina, visok → visina, dubok → dubina. -stvo is added to nouns and adjectives: prijatelj → prijateljstvo, bogat → bogatstvo, siromah → siromaštvo, dijete → djetinjstvo. All -ost, -ota and -ina nouns are feminine; -stvo nouns are neuter.',
      highlight: 'hrabar → hrabrost',
    },
    {
      type: 'rule',
      title: 'Small: Diminutives',
      body: 'A diminutive (umanjenica) means small — and often dear. Masculine nouns take -ić: stol → stolić, grad → gradić, brod → brodić, komad → komadić. Feminine nouns take -ica, and k, g soften: kuća → kućica, ruka → ručica, knjiga → knjižica, noga → nožica. Young animals take -e: mačka → mače (kitten), patka → pače (duckling). Watch out: some diminutives became separate words — bratić means cousin, not little brother.',
      highlight: 'bratić means cousin',
    },
    {
      type: 'rule',
      title: 'Big: Augmentatives',
      body: 'An augmentative (uvećanica) means big — and usually adds a tone of surprise, humour or rudeness. Common suffixes are -ina, -erina and -etina, -urda: nos → nosina, momak → momčina, kuća → kućerina, ruka → ručerina, žena → ženetina, glava → glavurda. Kakva kućerina! is an impressed (or mocking) "What a huge house!". For a neutral description say velika kuća — an augmentative is never neutral.',
      highlight: 'never neutral',
    },
    {
      type: 'table',
      title: 'Suffix Families',
      headers: ['Suffix', 'Meaning', 'Examples'],
      rows: [
        ['-telj, -ač, -ac, -ik', 'a person who does it', 'učitelj, vozač, pisac, radnik'],
        ['-ica, -ka', 'a woman who does it', 'učiteljica, radnica, novinarka'],
        ['-ost, -ota, -ina', 'a quality', 'mladost, ljepota, brzina'],
        ['-stvo', 'a state, a relationship', 'prijateljstvo, siromaštvo'],
        ['-ić, -ica, -e', 'small, dear', 'stolić, kućica, mače'],
        ['-ina, -erina, -urda', 'big, often rude', 'nosina, kućerina, glavurda'],
      ],
    },
    {
      type: 'example',
      title: 'People and Qualities',
      items: [
        {
          hr: 'Moja sestra je učiteljica u osnovnoj školi u Osijeku.',
          en: 'My sister is a teacher at a primary school in Osijek.',
          note: 'učiteljica — učitelj with the female -ica',
        },
        {
          hr: 'Marko Marulić bio je hrvatski pisac iz Splita.',
          en: 'Marko Marulić was a Croatian writer from Split.',
          note: 'pisac — from pisati with -ac',
        },
        {
          hr: 'Vozač autobusa bio je vrlo ljubazan prema putnicima.',
          en: 'The bus driver was very kind to the passengers.',
          note: 'vozač — from voziti with -ač; putnicima — from put with -ik',
        },
        {
          hr: 'Ravnateljica škole održala je kratak govor.',
          en: 'The head teacher gave a short speech.',
        },
        {
          hr: 'U mladosti je puno putovao, a u starosti piše knjige.',
          en: 'In his youth he travelled a lot, and in old age he writes books.',
          note: 'mladost, starost — qualities from mlad and star',
        },
        {
          hr: 'Siromaštvo i nezaposlenost veliki su problemi u nekim krajevima.',
          en: 'Poverty and unemployment are big problems in some regions.',
        },
        {
          hr: 'Pravo prijateljstvo važnije je od bogatstva.',
          en: 'True friendship is more important than wealth.',
          note: 'prijateljstvo, bogatstvo — the suffix -stvo',
        },
      ],
    },
    {
      type: 'example',
      title: 'Small and Big',
      items: [
        {
          hr: 'Živimo u maloj kućici na brdu iznad mora.',
          en: 'We live in a little house on a hill above the sea.',
          note: 'kućica — the diminutive of kuća',
        },
        {
          hr: 'Na stoliću pokraj kreveta stoji lampa.',
          en: 'A lamp stands on the little table by the bed.',
          note: 'stoliću — locative of stolić',
        },
        {
          hr: 'Daj mi samo komadić kolača, molim te.',
          en: 'Just give me a tiny piece of cake, please.',
        },
        {
          hr: 'Naša mačka ima mače koje stalno spava.',
          en: 'Our cat has a kitten that sleeps all the time.',
        },
        {
          hr: 'Vidi kakvu su kućerinu sagradili susjedi!',
          en: 'Look what a huge house the neighbours have built!',
          note: 'kućerina — the augmentative, said with surprise',
        },
        {
          hr: 'Moj bratić živi u Kanadi, ali svako ljeto dolazi u Hrvatsku.',
          en: 'My cousin lives in Canada, but he comes to Croatia every summer.',
          note: 'bratić — a cousin, not a little brother',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is a "pjevačica"?',
      options: ['a female singer', 'a song', 'a choir'],
      correct: 0,
      explanation: 'pjevati → pjevač (a singer) → pjevačica (a female singer).',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which word means "a little house"?',
      options: ['kućica', 'kućerina', 'kućanstvo'],
      correct: 0,
      explanation:
        'kućica is the diminutive; kućerina is the augmentative, and kućanstvo means household.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Adding -ica to the whole -ik noun: "radnikica", "učenikica" — the k drops: radnica, učenica. (2) Keeping the fleeting a: "knjiga tog pisaca" — the genitive singular is pisca; pisaca is the genitive plural. (3) Using an augmentative as a neutral word: kućerina is never just "a big house" — it sounds impressed or mocking; for a neutral statement say velika kuća. (4) Taking bratić for a little brother: bratić is a cousin; a little brother is mlađi brat.',
      highlight: 'radnica, učenica',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Who is a "vozač"?',
          options: ['a driver', 'a vehicle', 'a road', 'a journey'],
          correct: 0,
          explanation: 'voziti + the agent suffix -ač: the person who drives.',
        },
        {
          q: 'What is the female form of "učitelj"?',
          options: ['učiteljka', 'učiteljica', 'učitelja', 'učiteljina'],
          correct: 1,
          explanation: 'Nouns in -telj take -ica: učiteljica.',
        },
        {
          q: 'Which noun names a quality, made from "mlad"?',
          options: ['mladić', 'mladenci', 'mladost', 'mladica'],
          correct: 2,
          explanation:
            '-ost turns an adjective into a quality: mladost (youth). mladić is a young man, mladenci a newly married couple.',
        },
        {
          q: 'Which word is the diminutive of "knjiga"?',
          options: ['knjigić', 'knjižnica', 'knjižara', 'knjižica'],
          correct: 3,
          explanation:
            'knjiga + -ica, with g softening to ž: knjižica. knjižnica is a library, knjižara a bookshop.',
        },
        {
          q: 'What does "kućerina" suggest?',
          options: [
            'a huge house, said with surprise or mockery',
            'a tiny cottage',
            'a household',
            'a builder',
          ],
          correct: 0,
          explanation: 'kućerina is an augmentative: big, and never neutral.',
        },
        {
          q: 'Complete: "Siromaštvo i ___ glavni su problemi tog kraja." (unemployment)',
          options: ['nezaposlen', 'nezaposlenost', 'nezaposleni', 'nezaposleno'],
          correct: 1,
          explanation: 'nezaposlen (unemployed) + -ost gives the noun nezaposlenost.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Building Nouns — Key Takeaways',
      points: [
        'People: -telj, -ač, -ac, -ik — učitelj, vozač, pisac, radnik',
        'Women: mostly -ica (učiteljica, radnica — the k drops), some -ka (novinarka)',
        'Qualities: -ost, -ota, -ina — mladost, ljepota, brzina; states: -stvo — prijateljstvo',
        'Diminutives: -ić, -ica, -e — stolić, kućica, mače',
        'Augmentatives: -ina, -erina, -urda — nosina, kućerina; never neutral',
        'bratić is a cousin, knjižnica a library — not diminutives in meaning',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsB2.js). */
export const LESSONS = [
  REFLEXIVE_SEBE,
  VERBAL_NOUNS_INTRO,
  HIGHER_EDUCATION,
  ITERATIVE_CONDITIONAL,
  WORD_FORMATION_AGENTS,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'reflexive-sebe': {
    worked: [
      {
        title: 'Is It the Same Person?',
        problem: 'Prevedi: "Petra bought herself a dress."',
        en: 'Petra bought herself a dress.',
        steps: [
          { label: 'The subject', text: 'Petra is the subject: Petra je kupila.' },
          {
            label: 'For whom?',
            text: 'For Petra herself — the same person as the subject, so the pronoun is reflexive.',
          },
          {
            label: 'The case',
            text: '"For whom" is the dative: sebi, or the short form si, which would go before je.',
          },
          {
            label: 'Together',
            text: 'Petra je kupila sebi haljinu. (= Petra si je kupila haljinu.)',
          },
        ],
        answer: 'Petra je kupila sebi haljinu.',
      },
      {
        title: 'After a Preposition',
        problem: 'Prevedi: "Take an umbrella with you."',
        en: 'Take an umbrella with you.',
        steps: [
          {
            label: 'The subject',
            text: 'The imperative has the subject ti, and "you" is the same person — reflexive.',
          },
          { label: 'The preposition', text: '"with" is s + the instrumental.' },
          {
            label: 'The form',
            text: 'The instrumental of sebe is sobom; before s the preposition becomes sa: sa sobom.',
          },
        ],
        answer: 'Uzmi kišobran sa sobom.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ne volim pričati o ___.',
          options: ['se', 'sebi', 'si', 'sebe'],
          correct: 1,
          hint: 'After a preposition only the long form; o takes the locative.',
          explanation: 'o sebi — the locative of sebe.',
        },
        {
          q: 'Petar ___ je kupio novu jaknu.',
          options: ['si', 'sebi', 'se', 'sebe'],
          correct: 0,
          hint: 'A SHORT dative form, sitting in the clitic cluster before je.',
          explanation: 'Petar si je kupio novu jaknu — si, the short dative.',
        },
        {
          q: 'Ivana je dala ___ svoj broj telefona. (to Marko)',
          options: ['sebi', 'njemu', 'si', 'se'],
          correct: 1,
          hint: 'The number goes to another person, not to Ivana.',
          explanation: 'njemu — to him; the reflexive would mean she gave it to herself.',
        },
        {
          q: 'Djeca su podijelila kolač među ___.',
          options: ['sebe', 'se', 'sobom', 'sebi'],
          correct: 2,
          hint: 'među here takes the instrumental.',
          explanation: 'među sobom — among themselves.',
        },
        {
          q: 'Moraš se više brinuti o ___.',
          options: ['sebe', 'sebi', 'se', 'sobom'],
          correct: 1,
          hint: 'o + the locative.',
          explanation: 'brinuti se o sebi — to take care of yourself.',
        },
        {
          q: 'Imaš li novca kod ___?',
          options: ['sebi', 'sobom', 'sebe', 'se'],
          correct: 2,
          hint: 'kod takes the genitive.',
          explanation: 'kod sebe — on you.',
        },
        {
          q: 'Bio je izvan ___ od bijesa.',
          options: ['sebi', 'sebe', 'se', 'sobom'],
          correct: 1,
          hint: 'izvan takes the genitive.',
          explanation: 'biti izvan sebe — to be beside oneself.',
        },
        {
          q: 'Kad čujem tu pjesmu, sjetim ___ djetinjstva.',
          options: ['sebe', 'sebi', 'se', 'si'],
          correct: 2,
          hint: 'This is the verb sjetiti se; the short form here is part of the verb.',
          explanation: 'sjetim se — the se of sjetiti se does not mean "myself".',
        },
        {
          type: 'type',
          q: 'Kupila sam ____ novi mobitel. (for myself)',
          answer: 'sebi',
          accept: ['si'],
          hint: 'The dative of the reflexive pronoun.',
          explanation: 'Kupila sam sebi (or si) novi mobitel.',
        },
        {
          type: 'type',
          q: 'Uvijek nosim bocu vode sa ____.',
          answer: 'sobom',
          hint: 'The instrumental of the reflexive pronoun.',
          explanation: 'sa sobom — with me.',
        },
        {
          type: 'type',
          q: 'On misli samo na ____.',
          answer: 'sebe',
          hint: 'na + the accusative; after a preposition the long form.',
          explanation: 'misliti na sebe — to think of oneself.',
        },
        {
          type: 'type',
          q: 'Ona puno priča o ____.',
          answer: 'sebi',
          hint: 'o + the locative.',
          explanation: 'o sebi — about herself.',
        },
        {
          type: 'type',
          q: 'Nakon operacije polako je došao k ____.',
          answer: 'sebi',
          hint: 'k takes the dative; the phrase means "came round".',
          explanation: 'doći k sebi — to come round.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Pogledaj ___ u ogledalo prije izlaska." (the short form)',
        options: ['sebe', 'se', 'si', 'sebi'],
        correct: 1,
        explanation: 'The short accusative of sebe is se: Pogledaj se u ogledalo.',
      },
      {
        q: 'Complete: "Kad putuje, uvijek ima putovnicu kod ___."',
        options: ['sebi', 'se', 'sobom', 'sebe'],
        correct: 3,
        explanation: 'kod takes the genitive, long form: kod sebe.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Napravio sam meni sendvič.',
          'Napravio sam sebi sendvič.',
          'Napravio sam sebe sendvič.',
          'Napravio sam se sendvič.',
        ],
        correct: 1,
        explanation: 'The subject is ja, so the dative is reflexive: sebi (or si), never meni.',
      },
      {
        q: 'Complete: "Studenti su razgovarali među ___."',
        options: ['sobom', 'sebi', 'sebe', 'se'],
        correct: 0,
        explanation: 'među sobom — among themselves.',
      },
      {
        q: 'Complete: "Previše misliš na druge, a premalo na ___."',
        options: ['se', 'sebi', 'sebe', 'sobom'],
        correct: 2,
        explanation: 'na + the accusative, long form after a preposition: na sebe.',
      },
      {
        q: 'Which sentence uses si correctly?',
        options: [
          'Kupio je si novi sat.',
          'Si je kupio novi sat.',
          'Kupio si je novi sat.',
          'Kupio je novi sat si.',
        ],
        correct: 2,
        explanation: 'si sits in the clitic cluster, before je: Kupio si je novi sat.',
      },
    ],
    vocab: [
      ['ogledalo', 'mirror', 'Pogledaj se u ogledalo prije izlaska.'],
      ['prepoznati', 'to recognise', 'Na staroj fotografiji nisam se prepoznao.'],
      ['podijeliti', 'to share out, to divide', 'Podijelili su kolač među sobom.'],
      ['kišobran', 'umbrella', 'Uvijek nosim kišobran sa sobom.'],
      ['sebičan', 'selfish', 'On je sebičan, misli samo na sebe.'],
      ['samopouzdanje', 'self-confidence', 'Ona ima puno samopouzdanja.'],
      ['brinuti se', 'to take care, to worry', 'Moraš se više brinuti o sebi.'],
      ['dogovoriti se', 'to agree, to arrange', 'Dogovorili su se među sobom.'],
      ['priuštiti si', 'to treat oneself, to afford', 'Ove godine smo si priuštili odmor.'],
    ],
  },

  'verbal-nouns-intro': {
    worked: [
      {
        title: 'Verb Phrase → Noun Phrase',
        problem: 'Pretvori u imenicu: "učiti strane jezike"',
        en: 'learning foreign languages',
        steps: [
          { label: 'The verb', text: 'učiti is an -iti verb, so the noun ends in -enje: učenje.' },
          {
            label: 'The object',
            text: 'strane jezike is an accusative object; after a verbal noun it goes into the genitive.',
          },
          { label: 'The genitive plural', text: 'strani jezici → stranih jezika.' },
        ],
        answer: 'učenje stranih jezika',
      },
      {
        title: 'After a Preposition',
        problem: 'Prevedi: "Before going to sleep I always read."',
        en: 'Before going to sleep I always read.',
        steps: [
          { label: 'The preposition', text: '"before" is prije, which takes the genitive.' },
          {
            label: 'The noun',
            text: 'An infinitive cannot follow a preposition; spavati becomes the noun spavanje.',
          },
          { label: 'The case', text: 'The genitive of spavanje is spavanja.' },
        ],
        answer: 'Prije spavanja uvijek čitam.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Za ___ jezika treba puno strpljenja.',
          options: ['učiti', 'učenje', 'učenja', 'učenjem'],
          correct: 1,
          hint: 'za takes the accusative; a neuter noun looks the same as its subject form.',
          explanation: 'za učenje — the accusative of the verbal noun.',
        },
        {
          q: 'Bez ___ ne možeš napredovati. (practice)',
          options: ['vježbanja', 'vježbanje', 'vježbati', 'vježbanjem'],
          correct: 0,
          hint: 'bez takes the genitive.',
          explanation: 'bez vježbanja — the genitive of vježbanje.',
        },
        {
          q: 'Uživam u ___ s prijateljima. (cooking)',
          options: ['kuhanje', 'kuhanju', 'kuhanja', 'kuhati'],
          correct: 1,
          hint: 'u + the locative.',
          explanation: 'u kuhanju — the locative of kuhanje.',
        },
        {
          q: 'Pisanje ___ oduzima mi puno vremena. (reports)',
          options: ['izvještaja', 'izvještaje', 'izvještajima', 'izvještaji'],
          correct: 0,
          hint: 'The object of a verbal noun goes into the genitive.',
          explanation: 'pisanje izvještaja — genitive plural.',
        },
        {
          q: 'Učenje za ispit bilo je ___. (interesting)',
          options: ['zanimljiv', 'zanimljiva', 'zanimljivo', 'zanimljivi'],
          correct: 2,
          hint: 'Verbal nouns are neuter.',
          explanation: 'učenje is neuter: zanimljivo.',
        },
        {
          q: 'The verbal noun of "misliti" is:',
          options: ['mislenje', 'mišljenje', 'mislanje', 'mišlenje'],
          correct: 1,
          hint: 'An -iti verb, and the consonants before -enje soften.',
          explanation: 'misliti → mišljenje (also "an opinion").',
        },
        {
          q: 'Nakon ___ idemo na kavu. (studying)',
          options: ['učenja', 'učenje', 'učenju', 'učiti'],
          correct: 0,
          hint: 'nakon takes the genitive.',
          explanation: 'nakon učenja — the genitive.',
        },
        {
          q: '___ sportom pomaže protiv stresa.',
          options: ['Baviti', 'Bavljenja', 'Bavljenjem', 'Bavljenje'],
          correct: 3,
          hint: 'The subject of the sentence, a noun from baviti se, in the nominative.',
          explanation: 'Bavljenje sportom — the se drops and the instrumental stays.',
        },
        {
          type: 'type',
          q: 'The verbal noun of "putovati": ____',
          answer: 'putovanje',
          hint: '-ovati verbs keep -ova- and add -nje.',
          explanation: 'putovati → putovanje.',
        },
        {
          type: 'type',
          q: 'Učenje stranih ____ moja je strast. (languages)',
          answer: 'jezika',
          hint: 'The object of a verbal noun goes into the genitive plural.',
          explanation: 'učenje stranih jezika.',
        },
        {
          type: 'type',
          q: 'Datum ____ je 3. svibnja. (birth, from roditi)',
          answer: 'rođenja',
          hint: 'roditi gives a noun in -enje, d softens; then the genitive.',
          explanation: 'datum rođenja — the genitive of rođenje.',
        },
        {
          type: 'type',
          q: 'Pušenje je ____ u bolnici. (forbidden)',
          answer: 'zabranjeno',
          hint: 'A passive participle agreeing with a neuter noun.',
          explanation: 'pušenje is neuter: zabranjeno.',
        },
        {
          type: 'type',
          q: 'Slušanje ____ me opušta. (music)',
          answer: 'glazbe',
          hint: 'The object goes into the genitive of glazba.',
          explanation: 'slušanje glazbe — genitive singular.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the verbal noun of "plivati"?',
        options: ['plivač', 'plivao', 'plivanje', 'plivajući'],
        correct: 2,
        explanation: 'plivati keeps its a and adds -nje: plivanje. plivač is the swimmer.',
      },
      {
        q: 'Complete: "Učenje ___ ide mi sve bolje." (new words)',
        options: ['nove riječi', 'novih riječi', 'novim riječima', 'novu riječ'],
        correct: 1,
        explanation: 'The object of a verbal noun goes into the genitive plural: novih riječi.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Za učiti treba mira.',
          'Za učenje treba mira.',
          'Za učenja treba mira.',
          'Za učenju treba mira.',
        ],
        correct: 1,
        explanation: 'za + the accusative of the verbal noun: za učenje. Never za + infinitive.',
      },
      {
        q: 'Complete: "Nakon ___ uvijek sam gladan." (swimming)',
        options: ['plivanju', 'plivanje', 'plivati', 'plivanja'],
        correct: 3,
        explanation: 'nakon takes the genitive: nakon plivanja.',
      },
      {
        q: 'Complete: "Ovo putovanje bilo je ___." (tiring)',
        options: ['naporna', 'naporan', 'naporno', 'naporni'],
        correct: 2,
        explanation: 'putovanje is neuter: naporno.',
      },
      {
        q: 'Complete: "Prije ___ isključim mobitel." (sleeping)',
        options: ['spavanja', 'spavanje', 'spavanju', 'spavati'],
        correct: 0,
        explanation: 'prije takes the genitive: prije spavanja.',
      },
    ],
    vocab: [
      ['glagolska imenica', 'verbal noun', 'Čitanje je glagolska imenica od glagola čitati.'],
      ['mašta', 'imagination', 'Čitanje knjiga razvija maštu.'],
      ['rječnik', 'vocabulary; dictionary', 'Svaki dan učim nove riječi i bogatim rječnik.'],
      ['strpljenje', 'patience', 'Učenje jezika traži puno strpljenja.'],
      ['otkriće', 'discovery', 'Otkriće penicilina promijenilo je medicinu.'],
      ['rješavanje', 'solving', 'Rješavanje problema je dio svakog posla.'],
      ['zabranjen', 'forbidden', 'Pušenje je zabranjeno u zgradi.'],
      ['razvijati', 'to develop', 'Igra razvija dječju maštu.'],
      ['napredovati', 'to make progress', 'Bez vježbanja ne možeš napredovati.'],
    ],
  },

  'higher-education': {
    worked: [
      {
        title: 'Counting Credits',
        problem: 'Koliko ECTS bodova nosi trogodišnji preddiplomski studij?',
        en: 'How many ECTS credits does a three-year first cycle carry?',
        steps: [
          { label: 'One year', text: 'One academic year carries 60 ECTS credits.' },
          { label: 'Three years', text: '3 × 60 = 180.' },
          {
            label: 'In words',
            text: 'Sto osamdeset — and after a number the noun is in the genitive plural: bodova.',
          },
        ],
        answer: 'Sto osamdeset ECTS bodova.',
      },
      {
        title: 'studirati or učiti?',
        problem: 'Prevedi: "I study law, and tonight I am studying for an exam."',
        en: 'I study law, and tonight I am studying for an exam.',
        steps: [
          { label: 'The degree', text: 'Your degree subject takes studirati: Studiram pravo.' },
          {
            label: 'The exam',
            text: 'Preparing for an exam takes učiti za: večeras učim za ispit.',
          },
          { label: 'The contrast', text: 'Join the two with a.' },
        ],
        answer: 'Studiram pravo, a večeras učim za ispit.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Jedna godina studija nosi ___ ECTS bodova.',
          options: ['trideset', 'šezdeset', 'sto', 'deset'],
          correct: 1,
          hint: 'A three-year programme carries 180.',
          explanation: 'šezdeset — 60 credits a year.',
        },
        {
          q: 'Nakon diplomskog studija dobiješ titulu ___.',
          options: ['prvostupnik', 'maturant', 'magistar', 'doktor znanosti'],
          correct: 2,
          hint: 'The first cycle gives bacc.; the second cycle gives the next title.',
          explanation: 'magistar (mag.) — after the second cycle.',
        },
        {
          q: 'Rezultati državne mature važni su za ___ na fakultet.',
          options: ['upis', 'upisati', 'upisan', 'upisuje'],
          correct: 0,
          hint: 'After važni su za you need a noun.',
          explanation: 'upis na fakultet — admission to a faculty.',
        },
        {
          q: 'Studenti s invaliditetom mogu tražiti ___ ispita.',
          options: ['prilagođen', 'prilagodba', 'prilagodbu', 'prilagoditi'],
          correct: 2,
          hint: 'tražiti takes an accusative object.',
          explanation: 'tražiti prilagodbu — the accusative of prilagodba.',
        },
        {
          q: 'Ne mogu doći na kavu, ___ za kolokvij.',
          options: ['studiram', 'učim', 'studiraš', 'uči'],
          correct: 1,
          hint: 'Preparing for a test is not the same as being a student of a field.',
          explanation: 'učiti za kolokvij — to study for a test.',
        },
        {
          q: 'Sveučilište u Zagrebu je ___ sveučilište u Hrvatskoj.',
          options: ['najstariji', 'starije', 'najstarija', 'najstarije'],
          correct: 3,
          hint: 'A superlative agreeing with a neuter noun.',
          explanation: 'najstarije — neuter superlative, like sveučilište.',
        },
        {
          q: 'Moja baka ide na tečaj na sveučilištu za ___ životnu dob.',
          options: ['treća', 'treću', 'trećoj', 'treće'],
          correct: 1,
          hint: 'za + the accusative, feminine.',
          explanation: 'za treću životnu dob — the accusative of treća.',
        },
        {
          q: 'Napokon sam ___ ispit iz statistike!',
          options: ['položio', 'polagao', 'polažem', 'položen'],
          correct: 0,
          hint: 'A completed result: the perfective.',
          explanation: 'položio sam — I passed it.',
        },
        {
          type: 'type',
          q: 'Živim u studentskom ____ blizu fakulteta. (hall of residence)',
          answer: 'domu',
          hint: 'u + the locative of dom.',
          explanation: 'u studentskom domu.',
        },
        {
          type: 'type',
          q: 'Dobila je ____ za izvrsne studente. (scholarship)',
          answer: 'stipendiju',
          hint: 'The accusative of the feminine word for a scholarship.',
          explanation: 'dobiti stipendiju — accusative.',
        },
        {
          type: 'type',
          q: 'Na kraju preddiplomskog studija pišeš završni ____.',
          answer: 'rad',
          hint: 'The same word appears in the name of the master’s thesis: diplomski …',
          explanation: 'završni rad — the final paper after the first cycle.',
        },
        {
          type: 'type',
          q: 'Predavanja se drže u velikoj ____. (lecture hall: dvorana)',
          answer: 'dvorani',
          hint: 'u + the locative.',
          explanation: 'u velikoj dvorani.',
        },
        {
          type: 'type',
          q: 'Na maturi su obvezni hrvatski jezik, ____ i strani jezik.',
          answer: 'matematika',
          hint: 'The subject of numbers and equations.',
          explanation: 'Croatian, mathematics and a foreign language are compulsory.',
        },
      ],
    },
    checkB: [
      {
        q: 'How long does a doctoral study usually last?',
        options: ['one year', 'about three years', 'ten years', 'one semester'],
        correct: 1,
        explanation: 'The doktorski studij usually lasts three years (180 ECTS credits).',
      },
      {
        q: 'Complete: "Prošle godine ___ državnu maturu i upisao fakultet." (I passed)',
        options: ['položim', 'položio sam', 'položen', 'polažući'],
        correct: 1,
        explanation: 'A completed result in the past: položio sam.',
      },
      {
        q: 'What is a "menza"?',
        options: ['a lecture', 'an exam period', 'a student canteen', 'a final paper'],
        correct: 2,
        explanation: 'The menza is the student canteen.',
      },
      {
        q: 'Which title does a student get after the preddiplomski studij?',
        options: ['prvostupnik', 'magistar', 'doktor znanosti', 'maturant'],
        correct: 0,
        explanation: 'sveučilišni prvostupnik (bacc.) — after the first cycle.',
      },
      {
        q: 'Complete: "Sutra imam ispit, pa večeras ___."',
        options: ['studiram', 'učim', 'studiran', 'učen'],
        correct: 1,
        explanation: 'Preparing for an exam is učiti: učim.',
      },
      {
        q: 'What does "gimnazija" mean?',
        options: ['a gym', 'a sports hall', 'a university', 'an academic secondary school'],
        correct: 3,
        explanation: 'A gimnazija is an academic secondary school; a gym is teretana.',
      },
    ],
    vocab: [
      ['sveučilište', 'university', 'Sveučilište u Zagrebu najstarije je u Hrvatskoj.'],
      ['fakultet', 'faculty, school of a university', 'Upisala je Ekonomski fakultet.'],
      [
        'preddiplomski studij',
        'first cycle (bachelor level)',
        'Preddiplomski studij obično traje tri godine.',
      ],
      [
        'diplomski studij',
        'second cycle (master level)',
        'Nakon preddiplomskog upisao je diplomski studij.',
      ],
      ['državna matura', 'state school-leaving exam', 'Državnu maturu polažu svi maturanti.'],
      ['ECTS bod', 'ECTS credit', 'Ovaj kolegij nosi šest ECTS bodova.'],
      ['stipendija', 'scholarship', 'Dobio je stipendiju za izvrsnost.'],
      ['upis', 'enrolment, admission', 'Upis na fakultet je u srpnju.'],
      ['kolokvij', 'a test during the semester', 'Sutra pišemo kolokvij iz kemije.'],
      ['cjeloživotno učenje', 'lifelong learning', 'Cjeloživotno učenje važno je u svakoj dobi.'],
    ],
  },

  'iterative-conditional': {
    worked: [
      {
        title: 'Telling a Habit',
        problem: 'Prevedi: "Whenever it rained, we would stay at home."',
        en: 'Whenever it rained, we would stay at home.',
        steps: [
          {
            label: 'Whenever',
            text: 'A repeated past event: kad + the conditional in both clauses.',
          },
          {
            label: 'It rained',
            text: 'kiša pasti → kad bi pala kiša (perfective, each rain as one event).',
          },
          { label: 'We would stay', text: 'mi → bismo: ostali bismo kod kuće.' },
        ],
        answer: 'Kad bi pala kiša, ostali bismo kod kuće.',
      },
      {
        title: 'From One Event to a Habit',
        problem: 'Napiši kao naviku u prošlosti: "Baka je došla i donijela kolače." (every time)',
        en: 'Whenever Grandma came, she would always bring cakes.',
        steps: [
          {
            label: 'Habit',
            text: 'A habit in the past: put both verbs into the conditional.',
          },
          { label: 'First clause', text: 'kad + bi + the l-participle: Kad bi baka došla.' },
          {
            label: 'Second clause',
            text: 'bi cannot open the clause, so it follows uvijek: uvijek bi donijela kolače.',
          },
        ],
        answer: 'Kad bi baka došla, uvijek bi donijela kolače.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kad bi baka pekla kolače, cijela kuća ___ mirisala.',
          options: ['bi', 'bih', 'bismo', 'biste'],
          correct: 0,
          hint: 'The subject is kuća — third person.',
          explanation: 'kuća bi mirisala — third person singular.',
        },
        {
          q: 'Nedjeljom ___ išli u šetnju uz rijeku. (we)',
          options: ['bi', 'bismo', 'biste', 'bih'],
          correct: 1,
          hint: 'First person plural.',
          explanation: 'mi bismo išli.',
        },
        {
          q: 'Kad ___ došao kući, mama bi već skuhala ručak. (I)',
          options: ['bi', 'bismo', 'bih', 'biste'],
          correct: 2,
          hint: 'First person singular.',
          explanation: 'ja bih došao.',
        },
        {
          q: 'Kad god bi prošao pokraj kioska, ___ kupio novine.',
          options: ['bi uvijek', 'uvijek bih', 'uvijek bi', 'uvijek bismo'],
          correct: 2,
          hint: 'The same person as in the first clause, and the clitic cannot open the clause.',
          explanation: 'uvijek bi kupio — third person, bi after uvijek.',
        },
        {
          q: 'What does "Djed je znao satima sjediti u vrtu" mean?',
          options: [
            'Grandpa knew the garden very well.',
            'Grandpa would often sit in the garden for hours.',
            'Grandpa will sit in the garden for hours.',
            'Grandpa wanted to sit in the garden.',
          ],
          correct: 1,
          hint: 'znati + infinitive can describe a habit.',
          explanation: 'znao je sjediti — he would often sit.',
        },
        {
          q: 'Kad smo bili studenti, često ___ sjedili u kafiću do ponoći.',
          options: ['bi', 'bismo', 'bih', 'biste'],
          correct: 1,
          hint: 'smo shows who the subject is.',
          explanation: 'mi bismo sjedili.',
        },
        {
          q: 'Svako ljeto ___ dolazili na Hvar. (you, plural)',
          options: ['bismo', 'bi', 'biste', 'bih'],
          correct: 2,
          hint: 'Second person plural.',
          explanation: 'vi biste dolazili.',
        },
        {
          q: 'In "Kad bi došao, donio bi cvijeće", what decides between "if" and "whenever"?',
          options: [
            'the verb ending',
            'the context and the time words',
            'the word order',
            'nothing — it always means "if"',
          ],
          correct: 1,
          hint: 'Think of words like uvijek, sutra, svaki put.',
          explanation:
            'The context decides: time words like uvijek mark a habit, sutra a hypothesis.',
        },
        {
          type: 'type',
          q: 'Kad bi pala kiša, djeca ____ ostala kod kuće.',
          answer: 'bi',
          hint: 'Third person plural uses the same short form as the singular.',
          explanation: 'djeca bi ostala.',
        },
        {
          type: 'type',
          q: 'Ljeti ____ išli k baki na selo. (we)',
          answer: 'bismo',
          hint: 'The first person plural of the conditional auxiliary.',
          explanation: 'mi bismo išli.',
        },
        {
          type: 'type',
          q: 'Svaki put kad ____ ga vidio, on bi se nasmijao. (I)',
          answer: 'bih',
          hint: 'First person singular.',
          explanation: 'kad bih ga vidio.',
        },
        {
          type: 'type',
          q: 'Kad bi tata došao s posla, uvijek bi prvo ____ kavu. (drink — perfective)',
          answer: 'popio',
          hint: 'The masculine l-participle of popiti.',
          explanation: 'popio bi kavu.',
        },
        {
          type: 'type',
          q: 'Navečer bi nam baka ____ priče. (tell — imperfective)',
          answer: 'pričala',
          hint: 'The feminine l-participle of pričati.',
          explanation: 'baka bi pričala priče.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Kad je bila mala, ljeti ___ išla na more s bakom."',
        options: ['bi', 'bih', 'bismo', 'biste'],
        correct: 0,
        explanation: 'The subject is ona: bi išla.',
      },
      {
        q: 'What does "Kad bismo došli k djedu, on bi nam uvijek dao jabuke" describe?',
        options: [
          'a single visit',
          'a plan for tomorrow',
          'a repeated past event',
          'a polite request',
        ],
        correct: 2,
        explanation: 'Both clauses in the conditional, with uvijek: a habit in the past.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Mi bi išli u kino svake subote.',
          'Mi bismo išli u kino svake subote.',
          'Mi bih išli u kino svake subote.',
          'Mi biste išli u kino svake subote.',
        ],
        correct: 1,
        explanation: 'The first person plural is bismo, never bi.',
      },
      {
        q: 'Complete: "Svaki put kad bi zazvonio telefon, pas ___ zalajao."',
        options: ['bih', 'bismo', 'biste', 'bi'],
        correct: 3,
        explanation: 'The subject is pas, third person: bi zalajao.',
      },
      {
        q: 'Which expression makes the habitual meaning unmistakable?',
        options: ['kad god', 'sutra', 'možda', 'molim'],
        correct: 0,
        explanation: 'kad god means whenever.',
      },
      {
        q: 'Complete: "Kad bih ___ umoran, legao bih rano." (I, a habit)',
        options: ['bila', 'bilo', 'bio', 'bili'],
        correct: 2,
        explanation: 'legao shows a man is speaking: bio.',
      },
    ],
    vocab: [
      ['navika', 'habit', 'Imao je naviku ustati u pet sati.'],
      ['nekad', 'once, in the old days', 'Nekad bismo ljeti spavali na balkonu.'],
      ['svaki put', 'every time', 'Svaki put kad bi došao, donio bi cvijeće.'],
      ['kad god', 'whenever', 'Kad god bi pala kiša, ostali bismo kod kuće.'],
      ['djetinjstvo', 'childhood', 'U djetinjstvu bismo svako ljeto išli na otok.'],
      ['mirisati', 'to smell (of)', 'Kuća bi mirisala na cimet.'],
      ['pokraj', 'beside, past', 'Prolazili bismo pokraj stare pekare.'],
      ['ribolov', 'fishing', 'Djed bi nedjeljom išao u ribolov.'],
      ['zalajati', 'to bark (once)', 'Pas bi zalajao na svakog poštara.'],
    ],
  },

  'word-formation-agents': {
    worked: [
      {
        title: 'From Verb to Person',
        problem: 'Kako se zove žena koja prodaje u trgovini?',
        en: 'a female shop assistant',
        steps: [
          { label: 'The verb', text: 'The activity is prodavati.' },
          { label: 'The person', text: 'Add the agent suffix -ač: prodavač.' },
          { label: 'The woman', text: 'Add the female suffix -ica.' },
        ],
        answer: 'prodavačica',
      },
      {
        title: 'From Adjective to Quality',
        problem: 'Pretvori u imenicu: "siguran"',
        en: 'safety, security',
        steps: [
          { label: 'The suffix', text: 'A quality from an adjective: -ost.' },
          {
            label: 'The fleeting a',
            text: 'siguran loses its a in other forms (sigurna, sigurno), so the stem is sigurn-.',
          },
          { label: 'Together', text: 'sigurn- + -ost.' },
        ],
        answer: 'sigurnost',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Onaj tko igra nogomet je ___.',
          options: ['igračka', 'igrač', 'igralište', 'igra'],
          correct: 1,
          hint: 'The agent suffix -ač.',
          explanation: 'igrač — a player. igračka is a toy.',
        },
        {
          q: 'Onaj tko radi u tvornici je ___.',
          options: ['radnik', 'rad', 'radionica', 'radnja'],
          correct: 0,
          hint: '-ik names the person.',
          explanation: 'raditi → radnik.',
        },
        {
          q: 'The female form of "pjevač" is ___.',
          options: ['pjevačka', 'pjesma', 'pjevica', 'pjevačica'],
          correct: 3,
          hint: 'Add the commonest female suffix.',
          explanation: 'pjevač + -ica.',
        },
        {
          q: 'The noun from "hrabar" is ___.',
          options: ['hrabrota', 'hrabrost', 'hrabarstvo', 'hrabrina'],
          correct: 1,
          hint: 'A quality: -ost, and the fleeting a drops.',
          explanation: 'hrabar → hrabrost (courage).',
        },
        {
          q: 'The noun from "lijep" is ___.',
          options: ['lijepost', 'ljepost', 'ljepota', 'lijepina'],
          correct: 2,
          hint: 'The suffix -ota, and ije shortens.',
          explanation: 'lijep → ljepota (beauty).',
        },
        {
          q: 'Mala kuća je ___.',
          options: ['kućerina', 'kućanstvo', 'kućni', 'kućica'],
          correct: 3,
          hint: 'A feminine diminutive.',
          explanation: 'kuća → kućica.',
        },
        {
          q: 'Mlada mačka je ___.',
          options: ['mače', 'mačak', 'mačka', 'mačji'],
          correct: 0,
          hint: 'Young animals take a short neuter form.',
          explanation: 'mačka → mače (kitten).',
        },
        {
          q: 'The relationship between two friends is ___.',
          options: ['prijateljica', 'prijateljstvo', 'prijateljski', 'prijateljost'],
          correct: 1,
          hint: 'A state or relationship: -stvo.',
          explanation: 'prijatelj → prijateljstvo.',
        },
        {
          type: 'type',
          q: 'The female form of "radnik": ____',
          answer: 'radnica',
          hint: 'Drop the k before -ica.',
          explanation: 'radnik → radnica.',
        },
        {
          type: 'type',
          q: 'Onaj tko vozi autobus je ____.',
          answer: 'vozač',
          hint: 'The verb voziti + the agent suffix -ač.',
          explanation: 'voziti → vozač.',
        },
        {
          type: 'type',
          q: 'Mali stol je ____.',
          answer: 'stolić',
          hint: 'The masculine diminutive suffix -ić.',
          explanation: 'stol → stolić.',
        },
        {
          type: 'type',
          q: 'The noun from "brz": ____',
          answer: 'brzina',
          hint: 'The suffix -ina.',
          explanation: 'brz → brzina (speed).',
        },
        {
          type: 'type',
          q: 'Onaj tko piše knjige je ____.',
          answer: 'pisac',
          accept: ['spisatelj', 'književnik'],
          hint: 'The suffix -ac.',
          explanation: 'pisati → pisac.',
        },
      ],
    },
    checkB: [
      {
        q: 'Who is a "gledatelj"?',
        options: ['a viewer', 'a mirror', 'a view', 'a camera'],
        correct: 0,
        explanation: 'gledati + -telj: the person who watches.',
      },
      {
        q: 'What is the female form of "novinar"?',
        options: ['novinarina', 'novinarka', 'novinarski', 'novinarstvo'],
        correct: 1,
        explanation: 'novinar takes -ka: novinarka. novinarstvo is journalism.',
      },
      {
        q: 'Which word is a diminutive?',
        options: ['građanin', 'gradnja', 'gradić', 'gradski'],
        correct: 2,
        explanation: 'grad + -ić: gradić, a small town.',
      },
      {
        q: 'What is the noun from "bogat"?',
        options: ['bogatost', 'bogataš', 'bogatina', 'bogatstvo'],
        correct: 3,
        explanation: 'bogat + -stvo: bogatstvo (wealth). bogataš is a rich man.',
      },
      {
        q: 'What does "bratić" mean?',
        options: ['a little brother', 'a cousin', 'a brotherhood', 'a twin'],
        correct: 1,
        explanation: 'bratić is a cousin; a little brother is mlađi brat.',
      },
      {
        q: 'Complete: "Tog ___ čitam već godinama." (writer)',
        options: ['pisac', 'pisca', 'pisaca', 'piscu'],
        correct: 1,
        explanation: 'An animate object takes the genitive form, and the fleeting a drops: pisca.',
      },
    ],
    vocab: [
      ['tvorba riječi', 'word formation', 'Tvorba riječi pomaže nam razumjeti nove riječi.'],
      ['nastavak', 'suffix, ending', 'Nastavak -ica stvara ženski oblik.'],
      ['nositelj', 'holder, bearer', 'On je nositelj tog projekta.'],
      ['ravnatelj', 'head (of a school)', 'Ravnatelj je razgovarao s roditeljima.'],
      ['siromaštvo', 'poverty', 'Siromaštvo je velik problem u svijetu.'],
      ['nezaposlenost', 'unemployment', 'Nezaposlenost je ove godine manja.'],
      ['životni standard', 'standard of living', 'Životni standard polako raste.'],
      ['umanjenica', 'diminutive', 'Kućica je umanjenica od kuća.'],
      ['uvećanica', 'augmentative', 'Kućerina je uvećanica od kuća.'],
      ['zanimanje', 'occupation', 'Koje je vaše zanimanje? — Ja sam učiteljica.'],
    ],
  },
};
