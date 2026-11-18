// ─── C1 lessons in class order — Units 7–8 (lessons 31–40) ───────────────────
// Same shape and rules as units01-02.js:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Notes for this block:
// - The player ignores capitals when it compares typed and ordered answers, so
//   the two capital-letter lessons test capitals with tf, sort, match and fix
//   (names printed in ALL CAPS where the spelling itself is the question) and
//   use type / transform / order / dictate for the case forms of the names.
// - A one-word short name standing for one particular institution (Sabor /
//   sabor, Fakultet / fakultet) is deliberately not tested: only full official
//   names and plainly generic uses appear.
// - Where two forms are standard (Franji / Franju, dvojica su otišla / otišli,
//   dvoje je / su) both are accepted and neither is shown as an error.
// - Plural-only nouns are counted here with neuter examples only (dvoja vrata).

export const CLASS_C1_U07_08 = {
  // ══ UNIT 7 ═════════════════════════════════════════════════════════════════

  // ── The genitive after a noun ──────────────────────────────────────────────
  'objective-genitive': {
    text: {
      kind: 'dialogue',
      title: 'Naslov koji se može čitati dvojako',
      lines: [
        {
          who: 'Urednik',
          hr: 'Dunja, u naslovu Vam stoji „Kritika gradonačelnika odjeknula vijećnicom”. Tko tu koga kritizira: gradonačelnik vijećnike ili vijećnici gradonačelnika?',
          en: 'Dunja, your headline reads “Kritika gradonačelnika Echoes Through City Hall.” Who is criticizing whom here: the mayor the council members, or the council members the mayor?',
        },
        {
          who: 'Novinarka',
          hr: 'Vijećnici njega, dakako; cijela je sjednica protekla u napadima na njegov prijedlog proračuna.',
          en: 'The council members him, of course; the whole session was spent attacking his budget proposal.',
        },
        {
          who: 'Urednik',
          hr: 'Onda to i napišite. Genitiv iza glagolske imenice čitatelj može shvatiti i kao vršitelja i kao predmet radnje, pa će pola grada pomisliti da je gradonačelnik izgrdio vijeće.',
          en: 'Then write exactly that. A reader can take a genitive after a verbal noun either as the doer or as the object of the action, so half the city will think the mayor scolded the council.',
        },
        {
          who: 'Novinarka',
          hr: 'A da stavim „Kritika na račun gradonačelnika”? Ili jednostavno glagol: „Vijećnici oštro kritizirali gradonačelnika”?',
          en: 'What if I put “Criticism at the Mayor’s Expense”? Or simply a verb: “Council Members Sharply Criticize Mayor”?',
        },
        {
          who: 'Urednik',
          hr: 'Glagol je uvijek najčišće rješenje. Slična Vam se dvosmislenost potkrala i u trećem odlomku, gdje pišete o „optužbama svjedoka”: optužuje li svjedok ili optužuju njega?',
          en: 'A verb is always the cleanest solution. A similar ambiguity has crept into your third paragraph, where you write about “optužbe svjedoka”: is the witness accusing, or is he being accused?',
        },
        {
          who: 'Novinarka',
          hr: 'Svjedok optužuje direktora komunalnog poduzeća. Mogla bih napisati „svjedokove optužbe”, pa da ne bude dvojbe.',
          en: 'The witness is accusing the director of the municipal utility company. I could write “the witness’s accusations,” so that there is no doubt.',
        },
        {
          who: 'Urednik',
          hr: 'Tako je: posvojni se pridjev u pravilu čita kao vršitelj. Kad pak mislite na predmet radnje, a genitiv bi mogao zavesti, posegnite za prijedlogom — „optužbe protiv svjedoka”, „napad na gradonačelnika”.',
          en: 'Exactly: a possessive adjective is as a rule read as the doer. And when you mean the object of the action and a genitive might mislead, reach for a preposition — “accusations against the witness,” “an attack on the mayor.”',
        },
        {
          who: 'Novinarka',
          hr: 'A „izgradnja sportske dvorane” i „pad prihoda”? Tu, nadam se, nema zabune.',
          en: 'And “the construction of the sports hall” and “the drop in revenue”? There, I hope, there is no confusion.',
        },
        {
          who: 'Urednik',
          hr: 'Nema, jer dvoranu netko gradi, a prihodi padaju sami. Zabuna nastaje samo ondje gdje bi i jedno i drugo čitanje imalo smisla.',
          en: 'None, because somebody builds the hall, while revenues fall by themselves. Confusion arises only where both readings would make sense.',
        },
        {
          who: 'Novinarka',
          hr: 'Još nešto: napisala sam „pitanje financiranja obnove krova dvorane”. Zvuči mi nezgrapno, ali ne znam zašto.',
          en: 'One more thing: I wrote “the question of the financing of the renovation of the roof of the hall.” It sounds clumsy to me, but I do not know why.',
        },
        {
          who: 'Urednik',
          hr: 'Zato što ste nanizali četiri genitiva jedan za drugim. Razbijte niz rečenicom: „Pitanje je tko će platiti obnovu krova na dvorani.”',
          en: 'Because you have strung four genitives one after another. Break the chain with a clause: “The question is who will pay to renovate the roof of the hall.”',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: in the reporter’s story, who was really criticizing whom — and what does the editor call the cleanest way of saying so?',
          options: [
            'The mayor criticized the council; the cleanest way is a possessive adjective',
            'The council members criticized the mayor; the cleanest way is a verb',
            'The witness criticized the mayor; the cleanest way is a preposition',
            'The council members criticized the witness; the cleanest way is a shorter headline',
          ],
          correct: 1,
          hint: 'Recall what the whole session was spent on, and which of Dunja’s two proposals the editor preferred.',
          explanation:
            'The session was spent attacking the mayor’s budget proposal, so the council members criticized him. The editor’s verdict: Glagol je uvijek najčišće rješenje — a verb shows subject and object by their cases, where a genitive after a noun shows neither.',
        },
        {
          q: 'The editor sees no danger in "izgradnja sportske dvorane" or "pad prihoda". Why can each of these genitives be read in only one way?',
          options: [
            'Because both nouns are abstract, and abstract nouns never take an objective genitive',
            'Because the adjective "sportske" marks the first as an object and the lack of one marks the second as a doer',
            'Because graditi needs an object and a hall cannot build, while padati has no object at all, so revenue can only be what falls',
            'Because a genitive after a feminine noun is objective and after a masculine noun subjective',
          ],
          correct: 2,
          hint: 'Turn each phrase back into a sentence and see which role is left for the genitive.',
          explanation:
            'Behind a verbal noun stands a verb. Netko gradi dvoranu: the verb is transitive and a hall is not a possible builder, so the genitive is the object. Prihodi padaju: the verb is intransitive, so the only role left is the doer. "Kritika gradonačelnika" is different because a mayor can both criticize and be criticized.',
        },
        {
          type: 'type',
          q: 'Now you. "Sudac je saslušao svjedoke." Say it as a noun phrase: ____ svjedoka trajalo je tri sata. (the verbal noun of saslušati)',
          answer: 'Saslušanje',
          hint: 'Verbal nouns of this kind are neuter and end in -nje — which is why the predicate says trajalo.',
          explanation:
            'Saslušanje svjedoka trajalo je tri sata. — the object of the verb (svjedoke) becomes an objective genitive (svjedoka). Here no one will misread it, because the sentence is about a judge’s hearing; in isolation the phrase is just as open as "optužbe svjedoka".',
        },
        {
          type: 'transform',
          q: 'Turn the sentence into a noun phrase headed by a verbal noun. Keep the adjective.',
          from: 'Grad obnavlja staru tržnicu.',
          answer: 'obnova stare tržnice',
          accept: [
            'obnavljanje stare tržnice',
            'gradska obnova stare tržnice',
            'gradsko obnavljanje stare tržnice',
          ],
          hint: 'The thing renovated moves behind the noun, into the case that answers "čega?"; its adjective goes with it.',
          explanation:
            'obnova stare tržnice — the accusative object staru tržnicu becomes the objective genitive stare tržnice. If the doer must be named too, a second genitive (obnova tržnice grada) would be clumsy and ambiguous; the adjective gradska or a full clause does the job.',
        },
        {
          type: 'transform',
          q: 'This phrase can be read two ways. Rewrite it so that the mother is clearly the one who loves: a possessive adjective plus the noun.',
          from: 'ljubav majke',
          answer: 'majčina ljubav',
          hint: 'The adjective is built from majka with the suffix for owners in -a, and the k changes before it; it must agree with a feminine noun.',
          explanation:
            'majčina ljubav — a possessive adjective built from a single noun is normally read as the doer or owner. For the other reading (someone loves the mother) Croatian uses a preposition: ljubav prema majci.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Posjet predsjednika" can only mean that somebody visited the president.',
        answer: false,
        hint: 'Ask whether a president can be both the one who pays a visit and the one who receives it.',
        explanation:
          'False. Posjetiti is transitive and a president can be on either side of it, so the phrase is open: the president’s visit (he visits) or a visit to the president. When the person visited is meant, Croatian can say so with the dative: posjet predsjedniku.',
      },
      0,
      9,
      {
        type: 'sort',
        q: 'What is the genitive doing in each phrase?',
        groups: [
          'It names who does it',
          'It names what it is done to',
          'It describes — what kind?',
        ],
        items: [
          { hr: 'pad temperature', group: 0 },
          { hr: 'povratak iseljenika', group: 0 },
          { hr: 'smrt pjesnika', group: 0 },
          { hr: 'uvoz nafte', group: 1 },
          { hr: 'prodaja ulaznica', group: 1 },
          { hr: 'čovjek oštra jezika', group: 2 },
          { hr: 'djevojka zelenih očiju', group: 2 },
        ],
        explanation:
          'Turn each phrase into a sentence. Temperatura pada, iseljenici se vraćaju, pjesnik umire — intransitive verbs, so the genitive is the doer. Netko uvozi naftu, netko prodaje ulaznice — the genitive is the object. A genitive of quality has no verb behind it and always comes with an adjective: oštra jezika, zelenih očiju.',
      },
      10,
      6,
      {
        type: 'match',
        q: 'Match each phrase to its meaning.',
        pairs: [
          ['strah od djece', 'fear of children'],
          ['dječji strah', 'the children’s fear'],
          ['briga za roditelje', 'care for one’s parents'],
          ['roditeljska briga', 'the parents’ care'],
          ['kontrola nad cijenama', 'control over prices'],
        ],
        explanation:
          'A preposition (od, za, nad) makes the noun after it the target of the feeling or action; an adjective built from the noun (dječji, roditeljska) points to the one who feels or acts. Both devices exist precisely because a bare genitive — strah djece, briga roditelja — would not say which is meant.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "The construction of the new bridge will last two years."',
        words: ['Izgradnja', 'novog', 'mosta', 'trajat', 'će', 'dvije', 'godine.'],
        accept: [
          'Dvije godine trajat će izgradnja novog mosta.',
          'Trajat će izgradnja novog mosta dvije godine.',
          'Trajat će dvije godine izgradnja novog mosta.',
        ],
        explanation:
          'Izgradnja novog mosta trajat će dvije godine. — the objective genitive novog mosta stays glued to its noun, right behind it; the phrase moves through the sentence as one block.',
      },
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("We spend our summer vacation on the island of Hvar.")',
        words: ['Ljetujemo', 'na', 'otoku', 'Hvara.'],
        wrong: 3,
        answer: 'Hvaru',
        hint: 'The name is not an owner or an object of "otok" — it simply says which island. What case is "otoku" in?',
        explanation:
          'Ljetujemo na otoku Hvaru. — a proper name after grad, otok, rijeka is in apposition, not in the genitive: it takes the same case as the common noun before it (na otoku Hvaru, u gradu Zagrebu, uz rijeku Savu).',
      },
      7,
      {
        type: 'transform',
        q: 'Replace the clause with a verbal noun: begin with "Nakon…" and keep the rest.',
        from: 'Nakon što su otvorili novu knjižnicu, broj čitatelja je porastao.',
        answer: 'Nakon otvaranja nove knjižnice broj čitatelja je porastao.',
        accept: [
          'Nakon otvorenja nove knjižnice broj čitatelja je porastao.',
          'Nakon otvaranja nove knjižnice porastao je broj čitatelja.',
          'Nakon otvorenja nove knjižnice porastao je broj čitatelja.',
          'Nakon otvaranja nove knjižnice broj je čitatelja porastao.',
          'Nakon otvorenja nove knjižnice broj je čitatelja porastao.',
          'Nakon otvaranja nove knjižnice broj čitatelja porastao je.',
          'Nakon otvorenja nove knjižnice broj čitatelja porastao je.',
        ],
        hint: 'The preposition needs a noun made from the verb; what was opened then follows that noun in a new case, together with its adjective.',
        explanation:
          'Nakon otvaranja (otvorenja) nove knjižnice… — the object novu knjižnicu becomes the objective genitive nove knjižnice. This condensed, nominal style is typical of written Croatian; the vague "they" of the clause simply disappears.',
      },
      {
        type: 'listen',
        audio:
          'Zbog naglog pada cijena nafte odgođena je izgradnja novog naftovoda, a odluka o nastavku radova očekuje se tek na jesen.',
        q: 'What is the speaker saying?',
        options: [
          'Oil prices rose sharply because the new pipeline was postponed',
          'The pipeline was built quickly, and work on a second one starts in the fall',
          'Building the new pipeline has been put off because oil prices fell sharply; a decision on resuming is expected in the fall',
          'A decision to lower oil prices is expected once the pipeline is finished',
        ],
        correct: 2,
        explanation:
          'pad cijena nafte — prices fall (doer), and the prices are those of oil; izgradnja novog naftovoda — somebody builds the pipeline (object). Odgođena je = has been postponed; odluka o nastavku radova = a decision on resuming the work.',
      },
      {
        type: 'dictate',
        audio: 'Strah od neuspjeha jači je od želje za uspjehom.',
        answer: 'Strah od neuspjeha jači je od želje za uspjehom.',
        hint: 'Nine words: "The fear of failure is stronger than the desire for success."',
        explanation:
          'Strah od neuspjeha… želja za uspjehom — with nouns of feeling Croatian marks the target with a preposition (strah od, želja za, ljubav prema) rather than with a bare genitive.',
      },
    ],
  },

  // ── Capital letters in names and on the map ────────────────────────────────
  'capitals-names-geography': {
    text: {
      kind: 'dialogue',
      title: 'Lektura turističkog vodiča',
      lines: [
        {
          who: 'Lektor',
          hr: 'Gospođo Perić, vodič Vam je pisan živo i znalački, ali velika su slova razbacana po engleskom običaju: na istoj stranici nalazim i „Jadransko More” i „Dugi Otok” i „Gorski Kotar”.',
          en: 'Mrs. Perić, your guidebook is lively and expertly written, but the capital letters are scattered about in the English fashion: on one and the same page I find “Jadransko More,” “Dugi Otok” and “Gorski Kotar.”',
        },
        {
          who: 'Autorica',
          hr: 'Priznajem da sam se povodila za izvornikom. Zar se u zemljopisnim imenima ne piše sve velikim slovom?',
          en: 'I admit I was following the original. Isn’t everything in geographic names written with a capital letter?',
        },
        {
          who: 'Lektor',
          hr: 'Samo u imenima naseljenih mjesta, država i kontinenata. Zato su Novi Vinodolski, Stari Grad na Hvaru i Sjeverna Amerika u redu, a more, otok i kotar ostaju mali, jer nisu ni prva riječ imena ni sami ime.',
          en: 'Only in the names of settlements, states and continents. That is why Novi Vinodolski, Stari Grad on Hvar and Sjeverna Amerika are fine, while more, otok and kotar stay small, because they are neither the first word of the name nor names themselves.',
        },
        {
          who: 'Autorica',
          hr: 'Znači, pišem Jadransko more i Dugi otok, ali Velika Gorica i Novi Marof. A što je s Plitvičkim jezerima?',
          en: 'So I write Jadransko more and Dugi otok, but Velika Gorica and Novi Marof. And what about the Plitvice Lakes?',
        },
        {
          who: 'Lektor',
          hr: 'Jezera su jezera, a ne naselje: Plitvička jezera. Države su pak skupina za sebe — Sjedinjene Američke Države ili Bosna i Hercegovina veliko slovo imaju u svakoj riječi osim u vezniku.',
          en: 'Lakes are lakes, not a settlement: Plitvička jezera. States, on the other hand, are a group of their own — Sjedinjene Američke Države or Bosna i Hercegovina have a capital in every word except the conjunction.',
        },
        {
          who: 'Autorica',
          hr: 'Na četrdesetoj stranici napisala sam da je „Kralj Tomislav” prema predaji okrunjen na Duvanjskom polju, a nekoliko redaka niže spominjem „Svetog Vlaha”. Je li i to pogrešno?',
          en: 'On page forty I wrote that, according to tradition, “Kralj Tomislav” was crowned on Duvanjsko polje, and a few lines further down I mention “Svetog Vlaha.” Is that wrong too?',
        },
        {
          who: 'Lektor',
          hr: 'Jest, usred rečenice. Titule i riječ „sveti” ispred imena pišu se malim slovom: kralj Tomislav, sveti Vlaho. Polje ste, naprotiv, pogodili: Duvanjsko polje.',
          en: 'It is, in the middle of a sentence. Titles and the word “sveti” before a name are written with a small letter: kralj Tomislav, sveti Vlaho. The plain, on the contrary, you got right: Duvanjsko polje.',
        },
        {
          who: 'Autorica',
          hr: 'A Karlo Veliki? Tu sam „veliki” ostavila malim slovom jer mi se činilo da je običan pridjev.',
          en: 'And Karlo Veliki (Charlemagne)? There I left “veliki” in lower case because it seemed to me an ordinary adjective.',
        },
        {
          who: 'Lektor',
          hr: 'Nadimak koji je srastao s imenom dio je imena, pa je Veliki velikim slovom, baš kao i u Petra Velikog. Malo ostaje samo prijedlog: Ivan bez Zemlje.',
          en: 'A nickname that has fused with a name is part of the name, so Veliki takes a capital, just as in Petar Veliki (Peter the Great). Only a preposition stays small: Ivan bez Zemlje (John Lackland).',
        },
        {
          who: 'Autorica',
          hr: 'Još me muči „stari grad”. U Dubrovniku turiste vodim u stari grad, a na Hvaru trajektom pristaju u Stari Grad — smijem li to tako ostaviti?',
          en: 'One more thing bothers me: “stari grad.” In Dubrovnik I take the tourists to the old town (stari grad), and on Hvar they land by ferry at Stari Grad — may I leave it like that?',
        },
        {
          who: 'Lektor',
          hr: 'Ne samo da smijete nego i morate: u Dubrovniku je to opis gradske jezgre, a na Hvaru ime naselja. Jedno jedino slovo čitatelju govori o čemu je riječ.',
          en: 'Not only may you, you must: in Dubrovnik it is a description of the historic center, and on Hvar the name of a settlement. One single letter tells the reader which is meant.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which of the author’s spellings did the proofreader say she had gotten right?',
          options: [
            'The capital on the title in front of King Tomislav’s name',
            'The lower-case adjective in Charlemagne’s name',
            'The name of the plain where the king was crowned',
            'The capitals on every word of the sea and the island',
          ],
          correct: 2,
          hint: 'He corrected a title, a saint, a nickname and three place names — and praised exactly one thing.',
          explanation:
            'Polje ste, naprotiv, pogodili: Duvanjsko polje. A plain is not a settlement, so only the first word of its name takes a capital. The title kralj, the word sveti and the three English-style names were all corrected, and the nickname Veliki needed its capital.',
        },
        {
          q: 'Why do both words of "Stari Grad" on Hvar take a capital, while Dubrovnik’s "stari grad" takes none?',
          options: [
            'Because Hvar is an island, and island names capitalize every word',
            'Because the first is the name of a settlement, where every word is capitalized, and the second only describes a part of a town',
            'Because the first follows a preposition of motion and the second a preposition of place',
            'Because an adjective before "grad" is capitalized only when it is in the accusative',
          ],
          correct: 1,
          hint: 'Ask what each phrase is: something you could find in a list of towns, or a description you could apply to many towns?',
          explanation:
            'A capital marks a NAME. Stari Grad is a town on Hvar, and in the names of settlements every word except prepositions and conjunctions is capitalized. In Dubrovnik stari grad is an ordinary description — the old part of town — and names nothing.',
        },
        {
          type: 'fix',
          q: 'One word has the wrong letter size. Tap it. ("The ship sailed into the Red Sea.")',
          words: ['Brod', 'je', 'uplovio', 'u', 'Crveno', 'More.'],
          wrong: 5,
          answer: 'more',
          hint: 'Is this the name of a settlement, a state or a continent — or of something else on the map?',
          explanation:
            'Brod je uplovio u Crveno more. — seas, lakes, mountains, islands and regions capitalize only the first word of their name, plus any later word that is itself a name. More is a common noun, so it stays small.',
        },
        {
          type: 'type',
          q: 'Now you. Trajekt iz Splita pristaje u ____ Gradu na Hvaru. (Stari — the town; the whole name declines)',
          answer: 'Starom',
          accept: ['Starome'],
          hint: 'Both parts of a two-word place name take the case the preposition asks for; here the question is "gdje?".',
          explanation:
            'u Starom (Starome) Gradu — a two-word name declines in both parts, and both keep their capitals in every case: iz Staroga Grada, u Starom Gradu, u Velikoj Gorici.',
        },
        {
          type: 'transform',
          q: 'Finish the sentence with the name of the country in the right case: "Rođak mi živi u …"',
          from: 'Sjedinjene Američke Države',
          answer: 'Rođak mi živi u Sjedinjenim Američkim Državama.',
          accept: ['u Sjedinjenim Američkim Državama', 'Sjedinjenim Američkim Državama'],
          hint: 'The name is a plural noun with two adjectives; all three words take the locative plural.',
          explanation:
            'u Sjedinjenim Američkim Državama — the name is grammatically a feminine plural and declines word by word. On paper all three words keep their capitals, because in the official name of a state every word but a conjunction is capitalized.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Hrvatsko primorje" and "Vela Luka" are capitalized by one and the same rule.',
        answer: false,
        hint: 'One of them is a stretch of coast, the other a place where people live.',
        explanation:
          'False. Hrvatsko primorje is a region, so only its first word is capitalized. Vela Luka is a town on Korčula, and in the name of a settlement every word (except prepositions and conjunctions) takes a capital.',
      },
      9,
      {
        type: 'sort',
        q: 'On a map these names are printed in capitals. In ordinary writing, does the LAST word keep its capital?',
        groups: ['Yes — capital letter', 'No — lower case'],
        items: [
          { hr: 'DONJI MIHOLJAC', group: 0 },
          { hr: 'DUGO SELO', group: 0 },
          { hr: 'MALI LOŠINJ', group: 0 },
          { hr: 'SJEVERNA MAKEDONIJA', group: 0 },
          { hr: 'SREDOZEMNO MORE', group: 1 },
          { hr: 'SKADARSKO JEZERO', group: 1 },
          { hr: 'ISTARSKA ŽUPANIJA', group: 1 },
          { hr: 'DALEKI ISTOK', group: 1 },
        ],
        explanation:
          'Donji Miholjac, Dugo Selo and Mali Lošinj are towns and Sjeverna Makedonija is a state: every word is capitalized. Sredozemno more, Skadarsko jezero, Istarska županija and Daleki istok are a sea, a lake, a county and a part of the world: first word only, because more, jezero, županija and istok are common nouns.',
      },
      10,
      2,
      {
        type: 'match',
        q: 'Match each name to the rule that explains its capitals.',
        pairs: [
          ['Mrtvo more', 'a sea: only the first word'],
          ['Južna Amerika', 'a continent: every word'],
          ['Bosna i Hercegovina', 'a state: every word but the conjunction'],
          ['Ivan bez Zemlje', 'a person: every word but the preposition'],
          ['kralj Zvonimir', 'a title before a name: small letter'],
        ],
        explanation:
          'Hrvatski pravopis sorts names into groups. People, settlements, states and continents capitalize every word except prepositions and conjunctions; all other geographic names capitalize the first word and any word that is itself a name; a title in front of a name is a common noun.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "They moved from Velika Gorica to South America."',
        words: ['Iz', 'Velike', 'Gorice', 'preselili', 'su', 'se', 'u', 'Južnu', 'Ameriku.'],
        accept: [
          'Preselili su se iz Velike Gorice u Južnu Ameriku.',
          'U Južnu Ameriku preselili su se iz Velike Gorice.',
          'Iz Velike su se Gorice preselili u Južnu Ameriku.',
          'Iz Velike Gorice su se preselili u Južnu Ameriku.',
          'U Južnu su se Ameriku preselili iz Velike Gorice.',
          'Preselili su se u Južnu Ameriku iz Velike Gorice.',
        ],
        explanation:
          'Iz Velike Gorice preselili su se u Južnu Ameriku. — both parts of a two-word name decline (iz Velike Gorice, u Južnu Ameriku), and both keep their capitals in every case, because one is a town and the other a continent.',
      },
      4,
      {
        type: 'fix',
        q: 'One word has the wrong letter size. Tap it. ("Grandma lives in Slavonski Brod.")',
        words: ['Baka', 'živi', 'u', 'Slavonskom', 'brodu.'],
        wrong: 4,
        answer: 'Brodu',
        hint: 'She does not live on a ship. What kind of place is this?',
        explanation:
          'Baka živi u Slavonskom Brodu. — Slavonski Brod is a town, and in the name of a settlement every word is capitalized, in every case.',
      },
      {
        type: 'transform',
        q: 'Say what kind of place it is: add the common noun "planina" in front of the name.',
        from: 'Izlet nas vodi na Velebit.',
        answer: 'Izlet nas vodi na planinu Velebit.',
        accept: ['Na planinu Velebit vodi nas izlet.', 'Na planinu Velebit nas vodi izlet.'],
        hint: 'The common noun takes the case the preposition of direction asks for; the name stands beside it in the same case.',
        explanation:
          'na planinu Velebit — the common noun goes into the accusative, and the name, in apposition, is in the same case (Velebit looks like its nominative). On paper planina stays small: rijeka Sava, otok Krk, planina Velebit.',
      },
      7,
      {
        type: 'listen',
        audio:
          'Ljetos nismo išli na Jadransko more, nego smo dva tjedna planinarili po Gorskom kotaru i spavali u planinarskim domovima.',
        q: 'What is the speaker saying?',
        options: [
          'They spent two weeks at the seaside and then went hiking',
          'They skipped the seaside this summer and hiked in Gorski kotar for two weeks, sleeping in mountain huts',
          'They slept in mountain huts by the Adriatic for two weeks',
          'They are planning to go hiking in Gorski kotar next summer',
        ],
        correct: 1,
        explanation:
          'Ljetos nismo išli… nego smo — "this past summer we did not go… but instead." On paper: Jadransko more and Gorski kotar, first word only, since a sea and a region are not settlements.',
      },
      {
        type: 'dictate',
        audio: 'Plitvička jezera najstariji su nacionalni park u Hrvatskoj.',
        answer: 'Plitvička jezera najstariji su nacionalni park u Hrvatskoj.',
        hint: 'Eight words: "The Plitvice Lakes are the oldest national park in Croatia."',
        explanation:
          'Plitvička jezera — a plural name, so the verb is plural (su). Written out, only Plitvička and Hrvatskoj take a capital: jezera is a common noun inside the name of a group of lakes, not of a settlement.',
      },
    ],
  },

  // ── Choosing a passive ─────────────────────────────────────────────────────
  'passive-choices': {
    text: {
      kind: 'dialogue',
      title: 'Priopćenje za javnost',
      lines: [
        {
          who: 'Pročelnica',
          hr: 'Luka, u priopćenju Vam piše: „Odluka o obnovi knjižnice donesena je od strane Gradskog vijeća.” Tko tako govori?',
          en: 'Luka, your press release says: “The decision to renovate the library was made on the part of the City Council.” Who talks like that?',
        },
        {
          who: 'Luka',
          hr: 'Nitko, ali mislio sam da službeni tekst mora zvučati službeno, pa sam posvuda posegnuo za pasivom.',
          en: 'Nobody, but I thought an official text had to sound official, so I reached for the passive everywhere.',
        },
        {
          who: 'Pročelnica',
          hr: 'Službeno ne znači nezgrapno. Ako je važno tko je odluku donio, neka taj bude subjekt: „Gradsko vijeće donijelo je odluku o obnovi knjižnice.” Kraće je i jasnije.',
          en: 'Official does not mean clumsy. If it matters who made the decision, let that body be the subject: “The City Council made the decision to renovate the library.” It is shorter and clearer.',
        },
        {
          who: 'Luka',
          hr: 'A rečenica „Radovi su izvođeni šest mjeseci”? Tu vršitelja uopće ne spominjem.',
          en: 'And the sentence “The works were being carried out for six months”? There I do not mention the doer at all.',
        },
        {
          who: 'Pročelnica',
          hr: 'Tu Vam pak smeta trpni pridjev nesvršenoga glagola. Za radnju koja je trajala prirodnije je „Radovi su se izvodili šest mjeseci” ili, još jednostavnije, „Radovi su trajali šest mjeseci”.',
          en: 'There what gets in your way is the passive participle of an imperfective verb. For an action that went on for a while, “Radovi su se izvodili šest mjeseci” is more natural or, simpler still, “The works lasted six months.”',
        },
        {
          who: 'Luka',
          hr: 'Znači li to da trpni pridjev čuvam za ono što je dovršeno — recimo, „Krov je zamijenjen, a čitaonica je proširena”?',
          en: 'Does that mean I keep the participle for what is finished — say, “The roof has been replaced and the reading room has been enlarged”?',
        },
        {
          who: 'Pročelnica',
          hr: 'Upravo tako: ondje ne opisujete radnju, nego stanje koje iz nje proizlazi. Pazite samo na slaganje: krov je zamijenjen, čitaonica proširena, a police su obnovljene.',
          en: 'Exactly: there you are not describing an action but the state that results from it. Just watch the agreement: the roof is zamijenjen, the reading room proširena, and the shelves are obnovljene.',
        },
        {
          who: 'Luka',
          hr: 'A kako da napišem obavijest o novom radnom vremenu? „Knjige se posuđuju radnim danom od osam do dvadeset sati”?',
          en: 'And how should I word the notice about the new hours? “Books are lent on weekdays from 8 a.m. to 8 p.m.”?',
        },
        {
          who: 'Pročelnica',
          hr: 'Tako. Za ono što se redovito ponavlja i gdje je vršitelj nevažan pasiv sa „se” naš je svakodnevni izbor: knjige se posuđuju, članska se iskaznica izdaje na ulazu, u čitaonici se ne razgovara.',
          en: 'Just like that. For what is regularly repeated and where the doer is unimportant, the passive with “se” is our everyday choice: books are lent, the membership card is issued at the entrance, there is no talking in the reading room.',
        },
        {
          who: 'Luka',
          hr: 'U razgovoru bih rekao i „Javljaju da će otvorenje biti u subotu”, ali to valjda ne ide u priopćenje.',
          en: 'In conversation I would also say “Javljaju da će otvorenje biti u subotu” (word is that the opening will be on Saturday), but I suppose that does not belong in a press release.',
        },
        {
          who: 'Pročelnica',
          hr: 'U priopćenje ne, jer ondje čitatelj želi znati tko javlja; u govoru je to, međutim, sasvim obično. Mogućnosti, dakle, imate nekoliko, a posao je pisca da za svaku rečenicu odabere pravu.',
          en: 'Not in a press release, because there the reader wants to know who is reporting it; in speech, however, it is perfectly ordinary. So you have several options, and it is the writer’s job to choose the right one for each sentence.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what was the head of the office’s objection to "donesena je od strane Gradskog vijeća"?',
          options: [
            'The passive must not be used in official texts at all',
            'The participle did not agree with the noun "odluka"',
            'When it matters who decided, that body should simply be the subject of an active sentence',
            'The verb should have been imperfective, because the council meets regularly',
          ],
          correct: 2,
          hint: 'Recall the sentence she offered instead, and the two adjectives she used to praise it.',
          explanation:
            'Ako je važno tko je odluku donio, neka taj bude subjekt. An agent phrase with od strane is heavy administrative style; Croatian passives are at their best when the doer is left out, and when the doer matters the active — Gradsko vijeće donijelo je odluku — is shorter and clearer.',
        },
        {
          q: 'Why does she accept "Krov je zamijenjen" but steer Luka away from "Radovi su izvođeni šest mjeseci"?',
          options: [
            'Because "krov" is singular and "radovi" plural, and the participle passive prefers the singular',
            'Because "zamijenjen" comes from a perfective verb and states a finished result, while a process that went on for months is more naturally told with "se" or a plain active verb',
            'Because "izvođeni" does not agree with "radovi"',
            'Because a participle passive may never be combined with an expression of time',
          ],
          correct: 1,
          hint: 'Compare the aspect of zamijeniti with that of izvoditi, and ask which sentence describes a state you could go and look at.',
          explanation:
            'biti + participle is at home with perfective verbs: it presents the state left behind by a completed action (the roof now stands replaced). An ongoing process is the territory of the se-passive with an imperfective verb — Radovi su se izvodili — or of an ordinary active verb such as trajati.',
        },
        {
          type: 'type',
          q: 'Now you. A notice for the door of the concert hall: Ulaznice ____ na blagajni. (kupovati — the everyday passive for a standing practice; two words)',
          answer: 'se kupuju',
          hint: 'The little reflexive word plus the present tense, agreeing with a plural subject.',
          explanation:
            'Ulaznice se kupuju na blagajni. — a standing practice with no doer worth naming: the se-passive, with an imperfective verb in the third person plural because ulaznice is the grammatical subject.',
        },
        {
          type: 'transform',
          q: 'Here the doer matters. Rewrite the sentence as an active one, with the doer as its subject.',
          from: 'Nagrada je uručena od strane ravnatelja.',
          answer: 'Ravnatelj je uručio nagradu.',
          accept: [
            'Nagradu je uručio ravnatelj.',
            'Ravnatelj je nagradu uručio.',
            'Nagradu je ravnatelj uručio.',
          ],
          hint: 'The person in the agent phrase becomes a nominative, the participle becomes an ordinary past tense agreeing with him, and the former subject changes case.',
          explanation:
            'Ravnatelj je uručio nagradu. — the agent becomes the subject, and nagrada becomes the accusative object nagradu. Word order can still put the news last: Nagradu je uručio ravnatelj answers "who presented it?" without any passive.',
        },
        {
          type: 'transform',
          q: 'The painters have left. State the result with biti + a participle.',
          from: 'Zidove su obojili.',
          answer: 'Zidovi su obojeni.',
          accept: ['Zidovi su obojani.', 'Obojeni su zidovi.', 'Obojani su zidovi.'],
          hint: 'What was the object becomes the subject, and the participle agrees with it like an adjective — masculine plural here.',
          explanation:
            'Zidovi su obojeni. — the accusative zidove becomes the nominative zidovi, and the passive participle of the perfective obojiti agrees with it in gender and number. The sentence now describes the state of the walls, not the work.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Most se obnavlja" and "Most je obnovljen" tell you the same thing about the bridge.',
        answer: false,
        hint: 'Could you drive across it in both cases?',
        explanation:
          'False. Most se obnavlja — the se-passive of an imperfective verb: the work is in progress. Most je obnovljen — biti with the participle of a perfective verb: the work is over and the bridge stands renovated.',
      },
      9,
      {
        type: 'sort',
        q: 'How does each sentence leave the doer out?',
        groups: ['With "se"', 'With biti + a participle', 'With a bare "they" verb'],
        items: [
          { hr: 'Kruh se peče svako jutro.', group: 0 },
          { hr: 'Prijave se zaprimaju do petka.', group: 0 },
          { hr: 'Cesta je zatvorena zbog radova.', group: 1 },
          { hr: 'Računi su plaćeni.', group: 1 },
          { hr: 'Zovu te na večeru.', group: 2 },
          { hr: 'Govore da će zima biti oštra.', group: 2 },
        ],
        explanation:
          'The se-passive (se peče, se zaprimaju) presents a regular practice; biti + participle (je zatvorena, su plaćeni) presents a resulting state, with the participle agreeing like an adjective; a third-person plural with no subject (zovu, govore) is the spoken way of saying "somebody" or "people".',
      },
      1,
      10,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Stan se prodaje.', 'The apartment is for sale.'],
          ['Stan je prodan.', 'The apartment has been sold.'],
          ['Prodaju stan.', 'They are selling the apartment.'],
          ['Stan je prodao susjed.', 'It was the neighbor who sold the apartment.'],
          ['Stan se neće prodavati.', 'The apartment will not be put up for sale.'],
        ],
        explanation:
          'se + imperfective = an ongoing offer or practice; biti + perfective participle = the result; a bare third-person plural = some unnamed people. And when the doer is the news, Croatian keeps the active and simply moves the subject to the end: Stan je prodao susjed.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "The results are published every Friday."',
        words: ['Rezultati', 'se', 'objavljuju', 'svakog', 'petka.'],
        accept: [
          'Svakog se petka objavljuju rezultati.',
          'Svakog petka objavljuju se rezultati.',
          'Svakog petka se objavljuju rezultati.',
          'Rezultati se svakog petka objavljuju.',
          'Svakog se petka rezultati objavljuju.',
          'Svakog petka rezultati se objavljuju.',
          'Svakog petka se rezultati objavljuju.',
        ],
        explanation:
          'Rezultati se objavljuju svakog petka. — se is a clitic and takes second position: after the first stressed word (Rezultati se, Svakog se petka) or after the whole opening phrase (Svakog petka se). It can never open the sentence.',
      },
      4,
      {
        type: 'fix',
        q: 'One word has the wrong ending. Tap it. ("The library was opened last Saturday.")',
        words: ['Knjižnica', 'je', 'otvoreno', 'prošle', 'subote.'],
        wrong: 2,
        answer: 'otvorena',
        hint: 'A passive participle behaves like an adjective. What is it describing here?',
        explanation:
          'Knjižnica je otvorena prošle subote. — the participle agrees with its subject in gender and number: knjižnica is feminine singular, so otvorena. The neuter otvoreno would need a neuter subject (Kupalište je otvoreno).',
      },
      3,
      {
        type: 'transform',
        q: 'Turn the "they" sentence into a se-passive. Keep the tense.',
        from: 'U našoj školi uče i latinski.',
        answer: 'U našoj se školi uči i latinski.',
        accept: [
          'U našoj školi se uči i latinski.',
          'U našoj školi uči se i latinski.',
          'I latinski se uči u našoj školi.',
          'Uči se i latinski u našoj školi.',
          'U našoj školi i latinski se uči.',
        ],
        hint: 'What was the object becomes the grammatical subject — so the verb can no longer stay in the plural.',
        explanation:
          'U našoj se školi uči i latinski. — in the se-passive the thing affected (latinski) is the subject, and the verb agrees with it: singular uči, not plural uče. The clitic se takes second position, inside or after the opening phrase.',
      },
      {
        type: 'listen',
        audio:
          'Most je dovršen još lani, ali se promet preko njega neće pustiti dok se ne uredi prilazna cesta.',
        q: 'What is the speaker saying?',
        options: [
          'The bridge will be finished next year, together with the access road',
          'The bridge was finished last year, but traffic will not be let across it until the access road has been put in order',
          'Traffic has been using the bridge since last year, although the access road is poor',
          'The access road was finished last year, but the bridge is still closed for repairs',
        ],
        correct: 1,
        explanation:
          'Most je dovršen — a result: biti + the participle of a perfective verb. se promet neće pustiti, dok se ne uredi — se-passives with no doer named: traffic will not be let through until the access road (prilazna cesta) is put in order.',
      },
      {
        type: 'dictate',
        audio: 'Odluka još nije donesena, ali se o njoj mnogo govori.',
        answer: 'Odluka još nije donesena, ali se o njoj mnogo govori.',
        hint: 'Ten words: "The decision has not been made yet, but it is much talked about."',
        explanation:
          'nije donesena — a missing result, with the participle agreeing with odluka; se o njoj govori — an impersonal se: people talk, and no one in particular is named. Two ways of leaving the doer out, in one sentence.',
      },
    ],
  },

  // ── Word formation ─────────────────────────────────────────────────────────
  'tvorba-rijeci': {
    text: {
      kind: 'dialogue',
      title: 'Seminar iz tvorbe riječi',
      lines: [
        {
          who: 'Profesorica',
          hr: 'Kolegice Nika, na ploči je riječ „preprodavač”. Prije nego što otvorite rječnik, recite mi što sve iz nje same možete iščitati.',
          en: 'Nika, the word on the board is “preprodavač.” Before you open the dictionary, tell me everything you can read out of the word itself.',
        },
        {
          who: 'Nika',
          hr: 'Sufiks -ač kazuje mi da je posrijedi vršitelj radnje, kao u riječima igrač i nosač. Osnova je glagol prodavati, a prefiks pre- dodaje značenje „dalje, iznova”: to je čovjek koji kupljenu robu prodaje dalje.',
          en: 'The suffix -ač tells me we are dealing with the doer of an action, as in igrač and nosač. The base is the verb prodavati, and the prefix pre- adds the meaning “on, again”: it is a man who sells on the goods he has bought.',
        },
        {
          who: 'Profesorica',
          hr: 'Izvrsno. Kolega Filipe, i -telj i -ač tvore imenice od glagola. Vidite li kakvu razliku među njima?',
          en: 'Excellent. Filip, both -telj and -ač make nouns from verbs. Do you see any difference between them?',
        },
        {
          who: 'Filip',
          hr: 'Imenice na -telj ponajprije označuju osobe i zvuče nešto svečanije — gledatelj, ravnatelj, tužitelj — dok -ač uz osobe rado tvori i nazive naprava: upaljač, usisavač, odvijač.',
          en: 'Nouns in -telj chiefly denote persons and sound somewhat more formal — gledatelj (spectator), ravnatelj (director), tužitelj (prosecutor) — whereas -ač, besides persons, readily forms the names of devices too: upaljač (lighter), usisavač (vacuum cleaner), odvijač (screwdriver).',
        },
        {
          who: 'Profesorica',
          hr: 'Tako je, premda ni tu nema pravila bez ostatka: pokazatelj nije osoba, a pjevač nije naprava. Zato se tvorbeni obrasci uče da bismo riječi razumjeli, a ne da bismo ih po volji izmišljali.',
          en: 'That is right, though here too no rule comes without a remainder: a pokazatelj (indicator) is not a person, and a pjevač (singer) is not a device. That is why we learn word-formation patterns in order to understand words, not to invent them at will.',
        },
        {
          who: 'Nika',
          hr: 'Mene zbunjuju složenice. U riječi „vodovod” vidim vodu i glagol voditi, ali odakle ono -o- u sredini?',
          en: 'It is the compounds that confuse me. In the word “vodovod” (water main) I can see voda and the verb voditi, but where does that -o- in the middle come from?',
        },
        {
          who: 'Profesorica',
          hr: 'To je spojnik, koji povezuje dvije osnove u jednu riječ: vod-o-vod, kol-o-dvor, zrak-o-plov. Bez njega bismo imali dvije riječi, a ne jednu.',
          en: 'That is the linking vowel, which joins two stems into one word: vod-o-vod, kol-o-dvor (train station), zrak-o-plov (aircraft). Without it we would have two words, not one.',
        },
        {
          who: 'Filip',
          hr: 'A apstraktne imenice? Od pridjeva „mudar” imamo mudrost, od imenice „prijatelj” prijateljstvo, a od glagola „igrati” čak igralište, koje više nije ni radnja ni osobina, nego mjesto.',
          en: 'And abstract nouns? From the adjective “mudar” we have mudrost (wisdom), from the noun “prijatelj” prijateljstvo (friendship), and from the verb “igrati” even igralište (playground), which is no longer an action or a quality but a place.',
        },
        {
          who: 'Profesorica',
          hr: 'Lijepo ste ih razvrstali: -ost imenuje osobinu, -stvo stanje, zvanje ili skup, a -ište mjesto na kojem se nešto zbiva — igralište, parkiralište, kazalište, pa i sveučilište.',
          en: 'You have sorted them nicely: -ost names a quality, -stvo a state, a profession or a collective, and -ište a place where something happens — igralište, parkiralište (parking lot), kazalište (theater), and sveučilište (university) too.',
        },
        {
          who: 'Nika',
          hr: 'Onda bi i „prepisati” i „potpisati” morali imati isti korijen, a razlikovati se samo prefiksom?',
          en: 'Then “prepisati” and “potpisati” must have the same root too, and differ only in the prefix?',
        },
        {
          who: 'Profesorica',
          hr: 'Dakako: pre- znači da tekst prenosite s jednoga mjesta na drugo, a pod-, koje se ispred p piše pot-, da svoje ime stavljate ispod teksta. Jedan korijen, dva prefiksa, dva posve različita posla.',
          en: 'Of course: pre- means that you carry a text over from one place to another, and pod-, which is written pot- before p, that you put your name underneath a text. One root, two prefixes, two entirely different jobs.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what difference between -telj and -ač did Filip point out?',
          options: [
            '-telj is added to nouns and -ač to verbs',
            '-telj nouns chiefly name persons and sound more formal, while -ač also names devices',
            '-telj names men and -ač names women',
            '-telj is used for trades and -ač for abstract qualities',
          ],
          correct: 1,
          hint: 'Recall his two sets of three examples: one set could sit in a courtroom, the other lies in a drawer.',
          explanation:
            'gledatelj, ravnatelj, tužitelj are persons, and the suffix has a formal ring; upaljač, usisavač, odvijač are devices, formed with the same -ač that gives igrač and nosač. The professor adds the caveat that makes this a tendency, not a law: pokazatelj is not a person.',
        },
        {
          q: 'The professor says that pod- "is written pot-" in "potpisati". Why does the prefix change its last consonant there?',
          options: [
            'Because pod- and pot- are two different prefixes with different meanings',
            'Because every prefix loses its voicing in a perfective verb',
            'Because the voiced d stands right before the voiceless p and is pronounced voiceless, and Croatian spelling normally records that change',
            'Because d may never stand in the middle of a Croatian word',
          ],
          correct: 2,
          hint: 'Say "podpisati" aloud quickly and listen to what your tongue does before the p. Then compare podnijeti and podmetnuti.',
          explanation:
            'This is voicing assimilation (jednačenje po zvučnosti): a voiced consonant before a voiceless one becomes voiceless, d → t before p, and Croatian spelling normally records it — potpisati, otpisati — but not podnijeti or odgovoriti, where the next sound is voiced. (Before s and š the d is kept in writing: predsjednik, odšteta.)',
        },
        {
          type: 'type',
          q: 'Now you. A place where people play is an igralište. Name the place where people bathe (kupati se): Djeca su cijeli dan na ____.',
          answer: 'kupalištu',
          hint: 'The same suffix of place, attached to the verb in the same way as in the model; then the case that "na" needs for location.',
          explanation:
            'na kupalištu — kupati + -lište gives kupalište, a bathing place, just as igrati gives igralište and parkirati parkiralište. These nouns are neuter, so the locative ends in -u.',
        },
        {
          type: 'type',
          q: 'From the adjective "zreo" (ripe, mature) build the noun of quality: Povjerenstvo je pohvalilo ____ njegova rada.',
          answer: 'zrelost',
          hint: 'The suffix that names a quality joins the stem the adjective shows in its feminine form.',
          explanation:
            'zrelost — the stem is zrel- (zreo, zrela, zrelo: the o of the masculine is an old l). Nouns in -ost are feminine and end in a consonant, so the accusative is the same as the nominative.',
        },
        {
          type: 'transform',
          q: 'Say it with one compound noun: two stems joined by the linking vowel.',
          from: 'gradnja brodova',
          answer: 'brodogradnja',
          hint: 'What is built comes first, the building comes second, and one vowel goes between them.',
          explanation:
            'brodogradnja — brod + o + gradnja, built like vodovod and kolodvor. The first stem names the object of the action in the second, which is why the order of the two words is reversed.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Every Croatian noun that ends in -ica is a diminutive.',
        answer: false,
        hint: 'Think of a hospital, a street, and a woman who teaches.',
        explanation:
          'False. -ica makes diminutives (kuća → kućica), but the same ending also forms feminine counterparts (učitelj → učiteljica) and sits in words that are no one’s diminutive at all: bolnica, ulica, stolica. The pattern helps you read a word; it does not prove what the word is.',
      },
      9,
      {
        type: 'sort',
        q: 'What does the suffix make?',
        groups: ['A person', 'A place', 'A quality or a state'],
        items: [
          { hr: 'tužitelj', group: 0 },
          { hr: 'plivač', group: 0 },
          { hr: 'vrtlar', group: 0 },
          { hr: 'gradilište', group: 1 },
          { hr: 'klizalište', group: 1 },
          { hr: 'mladost', group: 2 },
          { hr: 'siromaštvo', group: 2 },
          { hr: 'starost', group: 2 },
        ],
        explanation:
          '-telj, -ač and -ar name people (the one who sues, swims, keeps a garden); -ište names the place where something is done (building, skating); -ost and -stvo turn an adjective into the name of a quality or a state (mlad → mladost, siromašan → siromaštvo).',
      },
      0,
      10,
      {
        type: 'match',
        q: 'One root, five suffixes. Match each word to its meaning.',
        pairs: [
          ['pekar', 'baker'],
          ['pekarnica', 'bakery'],
          ['pećnica', 'oven'],
          ['pecivo', 'bread roll'],
          ['pečenje', 'baking (the activity)'],
        ],
        explanation:
          'All five belong to the family of peći. -ar names the tradesman; pekarnica (pekar + -nica) is his shop and pećnica (peć + -nica) the oven; -ivo names the product and -enje the action itself. The suffix tells you which.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "The spectators left the playing field before the end of the game."',
        words: ['Gledatelji', 'su', 'napustili', 'igralište', 'prije', 'kraja', 'utakmice.'],
        accept: [
          'Gledatelji su prije kraja utakmice napustili igralište.',
          'Prije kraja utakmice gledatelji su napustili igralište.',
          'Gledatelji su igralište napustili prije kraja utakmice.',
          'Igralište su gledatelji napustili prije kraja utakmice.',
          'Prije kraja utakmice napustili su gledatelji igralište.',
          'Prije kraja utakmice gledatelji su igralište napustili.',
        ],
        explanation:
          'Gledatelji su napustili igralište prije kraja utakmice. — two formed words in one sentence: gledati + -telj (the people who watch) and igrati + -lište (the place where one plays).',
      },
      {
        type: 'fix',
        q: 'One word is misspelled. Tap it. ("I assume everyone will come.")',
        words: ['Predpostavljam', 'da', 'će', 'doći', 'svi.'],
        wrong: 0,
        answer: 'Pretpostavljam',
        hint: 'Look at the two consonants that meet where the prefix joins the root. Are they both voiced?',
        explanation:
          'Pretpostavljam da će doći svi. — the prefix here is pred-, and before the voiceless p its d is pronounced t; Croatian writes the change: pretpostaviti, pretplata, pretposljednji. Before a voiced sound nothing happens (predgovor), and before s the d stays in writing (predsjednik).',
      },
      5,
      {
        type: 'transform',
        q: 'Say it with a noun of quality instead of the clause.',
        from: 'Divim se tome što je hrabra.',
        answer: 'Divim se njezinoj hrabrosti.',
        accept: ['Divim se njenoj hrabrosti.', 'Njezinoj se hrabrosti divim.'],
        hint: 'The quality noun is feminine and ends in a consonant; the verb asks "čemu?", and "she" becomes a possessive in front of the noun.',
        explanation:
          'Divim se njezinoj hrabrosti. — hrabar → hrabrost (the a of the masculine form drops out, as in hrabra). Nouns in -ost decline like stvar: dative hrabrosti.',
      },
      1,
      {
        type: 'listen',
        audio:
          'Slušateljice su nakon predavanja opkolile predavačicu i zasule je pitanjima o njezinu istraživanju.',
        q: 'What is the speaker saying?',
        options: [
          'The lecturer asked the women in the audience about their research',
          'After the lecture the women in the audience surrounded the lecturer and showered her with questions about her research',
          'The women in the audience left the lecture before the questions began',
          'The lecturer refused to answer questions about her research',
        ],
        correct: 1,
        explanation:
          'slušatelj + -ica → slušateljica, predavač + -ica → predavačica: the feminine counterparts of the two doer nouns. opkoliti = to surround; zasuti pitanjima = to shower with questions.',
      },
      {
        type: 'dictate',
        audio: 'Od mladosti do starosti živio je u istom gradiću.',
        answer: 'Od mladosti do starosti živio je u istom gradiću.',
        hint: 'Nine words: "From youth to old age he lived in the same little town."',
        explanation:
          'mladost and starost — quality nouns in -ost, here in the genitive after od and do; gradić — grad with the masculine diminutive suffix -ić, in the locative.',
      },
    ],
  },

  // ── Ivo, Ante, Luka — and dvojica ──────────────────────────────────────────
  'hypocoristics-dvojica': {
    text: {
      kind: 'dialogue',
      title: 'Tko će sjediti do strica Mate?',
      lines: [
        {
          who: 'Marta',
          hr: 'Slušaj, Tomislave, popis gostiju za tatin sedamdeseti rođendan još nije gotov. Jesi li zvao strica Matu i je li potvrdio da dolazi?',
          en: 'Listen, Tomislav, the guest list for Dad’s seventieth birthday is still not finished. Have you called Uncle Mate, and has he confirmed that he is coming?',
        },
        {
          who: 'Tomislav',
          hr: 'Zvao sam ga sinoć. Mate dolazi, ali bez Jure: Juri su, navodno, upravo taj vikend dodijelili dežurstvo u bolnici.',
          en: 'I called him last night. Mate is coming, but without Jure: apparently Jure has been assigned hospital duty that very weekend.',
        },
        {
          who: 'Marta',
          hr: 'Šteta, tata se Juri uvijek najviše veseli. A Stipe i Pero? Bez njih dvojice nijedno naše slavlje nije prošlo.',
          en: 'A pity, Dad always looks forward to seeing Jure the most. And Stipe and Pero? Not one of our celebrations has gone by without the two of them.',
        },
        {
          who: 'Tomislav',
          hr: 'Ta dvojica sigurno dolaze; Pero je već pitao smije li povesti i Luku, svojega najstarijeg sina.',
          en: 'Those two are definitely coming; Pero has already asked whether he may bring Luka, his eldest son, along too.',
        },
        {
          who: 'Marta',
          hr: 'Naravno da smije. Samo nemoj Peru i Stipu posjesti do strica Mate — znaš da su se njih trojica prošli put do ponoći prepirala oko djedove zemlje.',
          en: 'Of course he may. Just do not seat Pero and Stipe next to Uncle Mate — you know that last time the three of them argued about Grandpa’s land until midnight.',
        },
        {
          who: 'Tomislav',
          hr: 'Sjećam se. Stricu ću dati mjesto do tate, a Stipi i Peri na drugom kraju stola, uz Luku.',
          en: 'I remember. I will give Uncle the seat next to Dad, and Stipe and Pero seats at the other end of the table, beside Luka.',
        },
        {
          who: 'Marta',
          hr: 'Dobro. Jesu li se javila i ona trojica tatinih kolega iz brodogradilišta?',
          en: 'Good. Have those three colleagues of Dad’s from the shipyard been in touch as well?',
        },
        {
          who: 'Tomislav',
          hr: 'Dvojica su odmah pristala, a treći, onaj visoki Franjo, još ne zna hoće li ga pustiti s posla. S Franjom je uvijek tako.',
          en: 'Two of them agreed right away, and the third, that tall Franjo, still does not know whether they will let him off work. It is always like that with Franjo.',
        },
        {
          who: 'Marta',
          hr: 'Onda računam na obojicu, a Franji ćemo ostaviti stolicu za svaki slučaj. Tko će po braću Kovačiće na kolodvor?',
          en: 'Then I am counting on both of them, and we will leave a chair for Franjo just in case. Who is going to pick up the Kovačić brothers at the station?',
        },
        {
          who: 'Tomislav',
          hr: 'Ja ću. Sva petorica stižu istim vlakom u pet, pa ću uzeti kombi od Luke.',
          en: 'I will. All five of them arrive on the same train at five, so I will borrow the van from Luka.',
        },
        {
          who: 'Marta',
          hr: 'Izvrsno. Javi još Juri da ćemo mu poslati snimku — neka barem čuje kako mu Mate i Stipe pjevaju.',
          en: 'Excellent. And let Jure know that we will send him a recording — he should at least hear Mate and Stipe singing for him.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why must Pero and Stipe not be seated next to Uncle Mate?',
          options: [
            'Because Uncle Mate wants to sit with his colleagues from the shipyard',
            'Because last time the three of them argued until midnight about their grandfather’s land',
            'Because Pero is bringing his eldest son and needs two seats',
            'Because the two of them are arriving late, on the five o’clock train',
          ],
          correct: 1,
          hint: 'Recall what "njih trojica" did the last time, and until what hour.',
          explanation:
            'njih trojica su se… do ponoći prepirala oko djedove zemlje — the three men quarreled over the family land. Note the agreement: with trojica the auxiliary is plural (su) and the participle takes the -la form (prepirala).',
        },
        {
          q: 'Marta asks: "Jesi li zvao strica Matu?" Mate is a man — so why does his name end in -u here?',
          options: [
            'Because zvati governs the dative, and -u is the masculine dative ending',
            'Because names in -e take the case endings of žena, so the accusative ends in -u; only the words that agree with the name stay masculine',
            'Because after "strica" every name is put in the vocative',
            'Because Mate is an indeclinable name, and -u belongs to the question particle',
          ],
          correct: 1,
          hint: 'Compare: vidim ženu. Then look at "strica" beside it — which word shows that he is a man?',
          explanation:
            'Mate, Ante, Jure, Stipe decline like žena: do strica Mate, zovem strica Matu, sa stricem Matom. The endings follow the final vowel, but the agreement follows the man: strica Matu, naš Mate, Mate je stigao.',
        },
        {
          type: 'type',
          q: 'Now you. Trojica gostiju ____ su tek oko ponoći. (otići — the participle form the grammar gives to dvojica, trojica…)',
          answer: 'otišla',
          accept: ['otišli'],
          hint: 'The number noun itself looks like a feminine singular noun, and the participle copies that look, although the auxiliary stays plural.',
          explanation:
            'Trojica gostiju otišla su tek oko ponoći. — dvojica, trojica, petorica are nouns of the žena type, so the grammatical participle ends in -a while the verb is plural: su otišla. You will also hear and read otišli, agreement by meaning; otišla is the form grammars recommend in writing.',
        },
        {
          type: 'transform',
          q: 'Finish the sentence with the name in the right case: "Tata je cijelu večer razgovarao s …"',
          from: 'Jure',
          answer: 'Tata je cijelu večer razgovarao s Jurom.',
          accept: ['s Jurom', 'Jurom'],
          hint: 'The company you keep takes the instrumental — and this name borrows that ending from the žena pattern too.',
          explanation:
            's Jurom — like sa ženom. The instrumental -om is the one ending of this pattern that happens to look masculine; the others are Jure, Juri, Juru.',
        },
        {
          type: 'transform',
          q: 'Count them as a group of men: replace "dva" with the group noun, and adjust the noun that follows.',
          from: 'Dva su brata ostala u Splitu.',
          answer: 'Dvojica braće ostala su u Splitu.',
          accept: [
            'Dvojica su braće ostala u Splitu.',
            'Dvojica braće su ostala u Splitu.',
            'Dvojica braće ostali su u Splitu.',
            'Dvojica su braće ostali u Splitu.',
            'Dvojica braće su ostali u Splitu.',
          ],
          hint: 'After the group noun the men counted stand in the genitive plural — and the plural of brat is a collective.',
          explanation:
            'Dvojica braće ostala su u Splitu. — dvojica is a noun, and what it counts follows in the genitive plural: braća → braće. The verb is plural and the participle takes -la (ostala); ostali, by meaning, is also heard.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Dvojica su došla" contains a mistake, because two men cannot take a participle that ends in -la.',
        answer: false,
        hint: 'Decline dvojica: dvojice, dvojici, dvojicu… Which noun does that remind you of?',
        explanation:
          'False. Dvojica is a noun of the žena type, and the participle agrees with its form: Dvojica su došla. The plural auxiliary su shows that more than one person is meant. Došli, agreement by meaning, exists too, but došla is no mistake — it is the form grammars give.',
      },
      9,
      {
        type: 'sort',
        q: 'Which pattern does the name follow?',
        groups: ['Like brat (Marko → Marka)', 'Like žena (Luka → Luke)'],
        items: [
          { hr: 'Zvonko', group: 0 },
          { hr: 'Darko', group: 0 },
          { hr: 'Branko', group: 0 },
          { hr: 'Ivan', group: 0 },
          { hr: 'Nikola', group: 1 },
          { hr: 'Jure', group: 1 },
          { hr: 'Stipe', group: 1 },
        ],
        explanation:
          'Names in -ko and names ending in a consonant are ordinary masculines: Zvonka, Darku, s Brankom, Ivana. Names in -a and the short names in -e take the singular endings of žena: Nikole, Juri, Stipu — while everything that agrees with them stays masculine.',
      },
      0,
      10,
      {
        type: 'match',
        q: 'Which case is the name in?',
        pairs: [
          ['Stipe još spava.', 'nominative'],
          ['Bez Stipe ne idemo.', 'genitive'],
          ['Javi Stipi da kasnimo.', 'dative'],
          ['Vidio sam Stipu na tržnici.', 'accusative'],
          ['Idem sa Stipom na utakmicu.', 'instrumental'],
        ],
        explanation:
          'Stipe, Stipe, Stipi, Stipu, sa Stipom — the žena endings. Nominative and genitive look alike in writing, so the sentence has to tell you which is meant: a subject with a verb (Stipe spava) or a form after a preposition such as bez.',
      },
      11,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "All three of them are sitting on the bench in front of the house."',
        words: ['Sva', 'trojica', 'sjede', 'na', 'klupi', 'ispred', 'kuće.'],
        accept: [
          'Na klupi ispred kuće sjede sva trojica.',
          'Sva trojica na klupi ispred kuće sjede.',
          'Na klupi ispred kuće sva trojica sjede.',
          'Ispred kuće na klupi sjede sva trojica.',
          'Ispred kuće sva trojica sjede na klupi.',
          'Sva trojica sjede ispred kuće na klupi.',
        ],
        explanation:
          'Sva trojica sjede na klupi ispred kuće. — the word for "all" agrees with the form of trojica (sva, like ta trojica, ona trojica), while the verb is plural: sjede.',
      },
      {
        type: 'fix',
        q: 'One word has the wrong ending. Tap it. ("Uncle Mate was the first to arrive.")',
        words: ['Stric', 'Mate', 'je', 'došla', 'prvi.'],
        wrong: 3,
        answer: 'došao',
        hint: 'The ending of the name follows its final vowel. What does the agreement follow?',
        explanation:
          'Stric Mate je došao prvi. — however the name declines, adjectives, pronouns and participles agree with the man: došao, prvi, naš Mate. Only the group nouns (dvojica, trojica) pull the participle toward -la.',
      },
      6,
      {
        type: 'transform',
        q: 'Replace "Marko" with "Mate" and change nothing else.',
        from: 'Bez Marka ne idemo nikamo.',
        answer: 'Bez Mate ne idemo nikamo.',
        hint: 'The two names follow different patterns; in this case the second name happens to look just like one of its other cases.',
        explanation:
          'Bez Mate ne idemo nikamo. — bez takes the genitive: Marko → Marka (like brata), but Mate → Mate (like žene). That is why street signs read Ulica Mate Lovraka and Trg Ante Starčevića.',
      },
      {
        type: 'listen',
        audio:
          'Od petorice pozvanih kolega trojica su potvrdila dolazak, a preostala se dvojica još nisu javila.',
        q: 'What is the speaker saying?',
        options: [
          'Five colleagues were invited; three have confirmed they are coming, and the other two have not replied yet',
          'Three colleagues were invited, and two of them have already arrived',
          'Five colleagues confirmed, but two of them called to cancel',
          'Two colleagues were invited and three more showed up unannounced',
        ],
        correct: 0,
        explanation:
          'Od petorice (genitive of petorica) — out of the five men; trojica su potvrdila, preostala se dvojica nisu javila — plural auxiliaries with -la participles, and the adjective preostala agreeing with the form of dvojica.',
      },
      {
        type: 'dictate',
        audio: 'Poklon sam predao Luki, a čestitku Franji.',
        answer: 'Poklon sam predao Luki, a čestitku Franji.',
        accept: ['Poklon sam predao Luki, a čestitku Franju.'],
        hint: 'Seven words: "I handed the present to Luka and the card to Franjo."',
        explanation:
          'Luki, Franji — datives of the žena type. The personal name keeps its k (Luki), unlike the common noun luka, harbor (u luci). Short names in -o such as Franjo and Ivo have a second declension as well, like Marko (Franja, Franju); both are standard, and the one practiced here is Franjo, Franje, Franji.',
      },
    ],
  },

  // ══ UNIT 8 ═════════════════════════════════════════════════════════════════

  // ── The declensions that fight back ────────────────────────────────────────
  'sklonidba-iznimke': {
    text: {
      kind: 'dialogue',
      title: 'Vijesti u podne',
      lines: [
        {
          who: 'Urednica',
          hr: 'Karlo, vijesti ste pročitali razgovijetno, ali dva su mi imena zaparala uši. Rekli ste „susret s Kamala Harris” i „izjava Olaf Scholza”.',
          en: 'Karlo, you read the news clearly, but two names grated on my ears. You said “susret s Kamala Harris” and “izjava Olaf Scholza.”',
        },
        {
          who: 'Karlo',
          hr: 'Bojao sam se da ću strana imena iskriviti ako im dodam naše nastavke, pa sam ih radije ostavio onakvima kakva jesu.',
          en: 'I was afraid I would distort the foreign names if I added our endings to them, so I preferred to leave them as they are.',
        },
        {
          who: 'Urednica',
          hr: 'Hrvatski, međutim, sklanja sve što se sklanjati dade: izjava Olafa Scholza, susret s Kamalom Harris. Nesklonjeno ime slušatelju zvuči kao da je rečenica ostala nedovršena.',
          en: 'Croatian, however, declines everything that can be declined: izjava Olafa Scholza (a statement by Olaf Scholz), susret s Kamalom Harris (a meeting with Kamala Harris). To a listener an undeclined name sounds as if the sentence had been left unfinished.',
        },
        {
          who: 'Karlo',
          hr: 'Ali zašto onda „s Kamalom Harris”, a ne „s Kamalom Harrisom”? Njezino prezime ostaje bez nastavka.',
          en: 'But then why “s Kamalom Harris” and not “s Kamalom Harrisom”? Her surname is left without an ending.',
        },
        {
          who: 'Urednica',
          hr: 'Zato što žensko prezime na suglasnik nema sklonidbe u koju bi ušlo: sklanja se samo ime. Da je riječ o muškarcu, rekli bismo „s Edom Harrisom” bez dvojbe.',
          en: 'Because a woman’s surname ending in a consonant has no declension to enter: only the first name declines. If it were a man, we would say “s Edom Harrisom” without hesitation.',
        },
        {
          who: 'Karlo',
          hr: 'A George Clooney? U najavi filma pisalo je „s Georgeom Clooneyjem”, pa sam zastao jer nisam znao čita li se ono j.',
          en: 'And George Clooney? The announcement for the movie said “s Georgeom Clooneyjem,” and I stopped short because I did not know whether that j is pronounced.',
        },
        {
          who: 'Urednica',
          hr: 'Čita se, i piše: iza završnoga -y, koje izgovaramo kao i, umeće se j, dok se nijemo e u imenu George u pismu čuva, premda ga ne izgovaramo. Zato Georgea Clooneyja, Georgeu Clooneyju.',
          en: 'It is pronounced, and written: after a final -y, which we pronounce as i, a j is inserted, while the silent e in the name George is kept in writing, although we do not pronounce it. Hence Georgea Clooneyja, Georgeu Clooneyju.',
        },
        {
          who: 'Karlo',
          hr: 'U redu. No pogriješio sam, čini mi se, i u domaćim riječima: rekao sam da je prosvjed trajao „pet satova”.',
          en: 'All right. But I think I slipped up with native words too: I said the protest had lasted “pet satova.”',
        },
        {
          who: 'Urednica',
          hr: 'Jeste, i to je bilo gotovo duhovito, jer su satovi ure na zidu ili školski satovi, a vrijeme se mjeri satima: pet sati. Na isti način oči gledaju, a oka su na mreži.',
          en: 'You did, and it was almost funny, because satovi are clocks on the wall or lessons at school, whereas time is measured in sati: pet sati (five hours). In the same way, oči are what we see with, while oka are the meshes of a net.',
        },
        {
          who: 'Karlo',
          hr: 'I još nešto: u vijesti o vrtiću stajalo je „djeca su se vratila”. Zašto ne „vratili”, kad je djece mnogo?',
          en: 'And one more thing: the item about the kindergarten said “djeca su se vratila.” Why not “vratili,” when there are many children?',
        },
        {
          who: 'Urednica',
          hr: 'Zato što se djeca i braća sklanjaju kao imenice ženskoga roda u jednini — bez djece, s braćom — pa im i pridjev i glagolski pridjev završavaju na -a, dok pomoćni glagol stoji u množini: djeca su se vratila, braća su se pomirila.',
          en: 'Because djeca and braća decline like feminine singular nouns — bez djece, s braćom — so both their adjective and their participle end in -a, while the auxiliary stands in the plural: djeca su se vratila (the children came back), braća su se pomirila (the brothers made up).',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why had Karlo left the foreign names without any endings?',
          options: [
            'He believed that foreign names are never declined on the radio',
            'He was afraid of distorting the names by adding Croatian endings to them',
            'The editor had told him to read the names exactly as they were written',
            'He did not know which of the people were men and which were women',
          ],
          correct: 1,
          hint: 'Recall the feeling he admits to, and what he says he "preferred" to do.',
          explanation:
            'Bojao sam se da ću strana imena iskriviti — he feared distorting them. The editor’s answer is the rule of the lesson: Croatian declines every name its morphology can handle, and an undeclined name sounds like an unfinished sentence.',
        },
        {
          q: 'The editor proves her point with "bez djece, s braćom". Which noun do these two forms pattern with?',
          options: [
            'selo: bez sela, sa selom',
            'žena: bez žene, sa ženom',
            'grad: bez grada, s gradom',
            'stvar: bez stvari, sa stvari',
          ],
          correct: 1,
          hint: 'Look at the two endings, -e and -om, and ask which singular noun type has exactly these in the genitive and the instrumental.',
          explanation:
            'djeca and braća are collectives: they mean many, but they decline like a feminine singular noun in -a (djece, djeci, djecu). That is why adjectives and participles take -a (dobra djeca, vratila) while the auxiliary, counting heads, is plural (su).',
        },
        {
          type: 'type',
          q: 'Now you. Karlo reads the next announcement: Večeras donosimo razgovor s ____ Macronom. (Emmanuel)',
          answer: 'Emmanuelom',
          hint: 'A man’s first name ending in a consonant takes the ordinary masculine ending of the case that "s" requires here.',
          explanation:
            's Emmanuelom Macronom — a man’s name and surname both decline like any masculine noun; the foreign spelling stays untouched and the ending is simply added.',
        },
        {
          type: 'type',
          q: 'Učiteljica je izašla s ____ na igralište. (dijete — all of them)',
          answer: 'djecom',
          hint: 'The plural of this noun declines like a feminine singular; the preposition of company needs the instrumental.',
          explanation:
            's djecom — the instrumental of the collective djeca, formed like sa ženom. The same pattern gives s braćom.',
        },
        {
          type: 'transform',
          q: 'The star is now the actress Emma Stone. Replace the actor’s name with hers and change only what must change.',
          from: 'Večeras gledamo film s Edom Harrisom.',
          answer: 'Večeras gledamo film s Emmom Stone.',
          hint: 'Her first name ends in -a and declines; ask yourself whether her surname has a pattern to follow.',
          explanation:
            's Emmom Stone — a woman’s first name in -a declines like žena, but her surname, which does not end in -a, has no feminine pattern to enter and stays as it is. For a man both parts decline: s Edom Harrisom.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: '"Dva sata" can mean both "two hours" and "two clocks".',
        answer: true,
        hint: 'After dva, tri, četiri the noun takes one particular singular-looking form. Does sat have two of those?',
        explanation:
          'True. After 2, 3 and 4 both meanings share the form sata. The two plurals part ways only from five up, where the genitive plural is needed: pet sati (five hours) but pet satova (five clocks, five lessons).',
      },
      7,
      5,
      {
        type: 'sort',
        q: 'You are talking about each of these people ("razgovor o…"). Does the SURNAME take an ending?',
        groups: ['The surname declines', 'The surname stays unchanged'],
        items: [
          { hr: 'Tom Hanks', group: 0 },
          { hr: 'Albert Camus', group: 0 },
          { hr: 'Pablo Neruda', group: 0 },
          { hr: 'Giuseppe Verdi', group: 0 },
          { hr: 'Emma Watson', group: 1 },
          { hr: 'Agatha Christie', group: 1 },
          { hr: 'Frida Kahlo', group: 1 },
          { hr: 'Greta Thunberg', group: 1 },
        ],
        explanation:
          'A man’s surname always declines: o Tomu Hanksu, o Albertu Camusu, o Pablu Nerudi (a name in -a goes like žena), o Giuseppeu Verdiju (-j- after the final i). A woman’s surname declines only if it ends in -a; Watson, Christie, Kahlo and Thunberg stay unchanged, and only the first name shows the case: o Emmi Watson, o Fridi Kahlo.',
      },
      0,
      6,
      {
        type: 'match',
        q: 'Match each singular to its plural.',
        pairs: [
          ['dijete', 'djeca'],
          ['brat', 'braća'],
          ['oko', 'oči'],
          ['uho', 'uši'],
          ['gospodin', 'gospoda'],
        ],
        explanation:
          'djeca, braća and gospoda are collectives that decline like feminine singular nouns (s djecom, s braćom, s gospodom) but take a plural verb. oči and uši are old dual forms, feminine today: lijepe oči, velike uši.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "The children played in the square for hours."',
        words: ['Djeca', 'su', 'se', 'satima', 'igrala', 'na', 'trgu.'],
        accept: [
          'Djeca su se igrala satima na trgu.',
          'Djeca su se igrala na trgu satima.',
          'Djeca su se na trgu satima igrala.',
          'Djeca su se na trgu igrala satima.',
          'Na trgu su se djeca satima igrala.',
          'Na trgu su se djeca igrala satima.',
          'Na trgu su se satima igrala djeca.',
          'Satima su se djeca igrala na trgu.',
          'Satima su se na trgu igrala djeca.',
          'Satima su se igrala djeca na trgu.',
        ],
        explanation:
          'Djeca su se satima igrala na trgu. — a plural auxiliary (su) with a participle in -a (igrala), the agreement of the collective djeca. satima is the instrumental plural of sat in its "hours" meaning: for hours on end.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("We watched a movie about Charlie Chaplin.")',
        words: ['Gledali', 'smo', 'film', 'o', 'Charlieju', 'Chaplin.'],
        wrong: 5,
        answer: 'Chaplinu',
        hint: 'He is a man, and his surname ends in a consonant. What does the preposition ask of both names?',
        explanation:
          'Gledali smo film o Charlieju Chaplinu. — a man’s name and surname both take the locative after o. Charlie ends in a spoken i, so a j is inserted before the ending; Chaplin simply adds -u.',
      },
      {
        type: 'transform',
        q: 'He has more than one brother. Put the subject into the plural and adjust the rest.',
        from: 'Moj brat živi u Londonu.',
        answer: 'Moja braća žive u Londonu.',
        accept: ['U Londonu žive moja braća.', 'Moja braća u Londonu žive.'],
        hint: 'The plural of brat looks like a feminine singular, and its possessive follows that look — but the verb counts heads.',
        explanation:
          'Moja braća žive u Londonu. — the possessive agrees with the form of the collective (moja, like moja djeca), while the verb is plural: žive. In the past tense the participle would follow the form too: Moja su braća živjela u Londonu.',
      },
      11,
      {
        type: 'listen',
        audio:
          'Braća su se nakon očeve smrti posvađala, pa su se godinama viđala samo na sprovodima i krstitkama.',
        q: 'What is the speaker saying?',
        options: [
          'The brothers grew closer after their father died and saw each other every year',
          'After their father’s death the brothers had a falling-out, and for years they met only at funerals and christenings',
          'The brothers quarreled at their father’s funeral and never met again',
          'The father had quarreled with his brothers and saw them only at family gatherings',
        ],
        correct: 1,
        explanation:
          'Braća su se posvađala… su se viđala — plural auxiliaries with participles in -a: the agreement of the collective braća. sprovod = funeral, krstitke = a christening party.',
      },
      {
        type: 'dictate',
        audio: 'Susjedova djeca imaju dva psa.',
        answer: 'Susjedova djeca imaju dva psa.',
        hint: 'Five words: "The neighbor’s children have two dogs."',
        explanation:
          'Susjedova djeca imaju — the possessive agrees with the form of djeca (-a), the verb is plural. dva psa — pas loses its a as soon as it takes an ending: psa, psu, psi.',
      },
    ],
  },

  // ── Collective numbers and groups ──────────────────────────────────────────
  'collective-numbers': {
    text: {
      kind: 'dialogue',
      title: 'Rezervacija u planinarskom domu',
      lines: [
        {
          who: 'Domar',
          hr: 'Planinarski dom Zavižan, izvolite. Koliko vas dolazi i na koliko noći?',
          en: 'Zavižan mountain hut, how can I help you? How many of you are coming, and for how many nights?',
        },
        {
          who: 'Učiteljica',
          hr: 'Dobar dan. Dolazi nas petero odraslih i tridesetak učenika, na dvije noći. Među odraslima je i dvoje roditelja, koji bi htjeli zasebnu sobu.',
          en: 'Good afternoon. There are five of us adults and about thirty students coming, for two nights. Among the adults there are also two parents, who would like a separate room.',
        },
        {
          who: 'Domar',
          hr: 'Tridesetak učenika mogu smjestiti u dvije velike spavaonice. A ono dvoje, jesu li bračni par ili im trebaju odvojeni ležajevi?',
          en: 'I can put about thirty students in the two big dormitories. And those two, are they a married couple, or do they need separate beds?',
        },
        {
          who: 'Učiteljica',
          hr: 'Bračni par; oboje su iskusni planinari, pa će nam pomagati na stazi. Nas ostale smjestite gdje god ima mjesta.',
          en: 'A married couple; both of them are experienced hikers, so they will be helping us on the trail. Put the rest of us wherever there is room.',
        },
        {
          who: 'Domar',
          hr: 'Dobro. Soba za njih dvoje ima dvoja vrata, jedna prema hodniku, a druga na terasu, pa neka noću zatvore oboja, jer zna puhati bura.',
          en: 'All right. The room for the two of them has two doors, one to the hallway and the other onto the terrace, so they should close both at night, because the bura wind tends to blow.',
        },
        {
          who: 'Učiteljica',
          hr: 'Hoće. A ima li u domu dovoljno pokrivača? Četvero učenika nema vreću za spavanje.',
          en: 'They will. And are there enough blankets in the hut? Four of the students do not have a sleeping bag.',
        },
        {
          who: 'Domar',
          hr: 'Ima, za njih četvero naći će se i više nego dovoljno. Samo, recite mi: ima li u skupini i male djece? Prošli tjedan došlo je šestero prvašića, a staza nije za njih.',
          en: 'There are; for the four of them there will be more than enough. Only, tell me: are there any small children in the group? Last week six first-graders showed up, and the trail is not for them.',
        },
        {
          who: 'Učiteljica',
          hr: 'Nema, svi su osmaši. Jedino što dvoje od njih ima alergiju na orašaste plodove, pa Vas molim da to javite u kuhinju.',
          en: 'No, they are all eighth-graders. The only thing is that two of them are allergic to nuts, so please let the kitchen know.',
        },
        {
          who: 'Domar',
          hr: 'Zapisat ću. Onda vas je ukupno, da ponovim, petero odraslih i tridesetak mladih — kad stižete?',
          en: 'I will make a note of it. So altogether, let me repeat, there are five adults and about thirty young people — when do you arrive?',
        },
        {
          who: 'Učiteljica',
          hr: 'U petak oko podneva. Nas dvoje učitelja krenut ćemo ranije automobilom s opremom, a ostali dolaze autobusom do Oltara, pa pješice.',
          en: 'On Friday around noon. We two teachers will set off earlier by car with the gear, and the others are coming by bus as far as Oltari and then on foot.',
        },
        {
          who: 'Domar',
          hr: 'Onda se vidimo u petak. I neka svatko ponese rezervnu odjeću — gore se vrijeme promijeni u pola sata.',
          en: 'See you on Friday, then. And have everyone bring a change of clothes — up here the weather changes in half an hour.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who exactly is coming to the hut?',
          options: [
            'Five adults, among them a married couple of parents, and about thirty eighth-graders',
            'Two teachers, four parents and thirty first-graders',
            'Thirty adults and five students who are experienced hikers',
            'Six first-graders with two parents and five teachers',
          ],
          correct: 0,
          hint: 'The keeper repeats the totals himself near the end; recall also which grade the teacher mentions and who wanted a room of their own.',
          explanation:
            'petero odraslih i tridesetak učenika: five adults (a mixed group, hence petero) and about thirty students, all osmaši. Among the adults are dvoje roditelja — a mother and a father, hence dvoje — who are a married couple.',
        },
        {
          q: 'The teacher says: "Četvero učenika nema vreću za spavanje." Why "nema" and not "nemaju"?',
          options: [
            'Because učenika is a genitive singular',
            'Because a negated verb is always singular in Croatian',
            'Because the collective numeral is the head of the phrase and normally takes a singular verb, while učenika is only a genitive depending on it',
            'Because the sleeping bag is singular, and the verb agrees with its object',
          ],
          correct: 2,
          hint: 'Compare "Mnogo učenika nema vreću." Which word is the verb really agreeing with?',
          explanation:
            'Collective numerals such as dvoje, četvero and petero behave like mnogo or nekoliko: they head the phrase, the counted noun follows in the genitive plural, and the verb is normally singular — neuter in the past: Četvero učenika nije imalo vreću. Plural agreement by meaning is heard chiefly with pronouns (nas dvoje idemo, oboje su).',
        },
        {
          type: 'type',
          q: 'Now you. The keeper counts the doors of the big dormitory: Velika spavaonica ima ____ vrata. (three)',
          answer: 'troja',
          hint: 'vrata exists only in the plural and is neuter; its counting word behaves like an adjective that agrees with it, not like a collective followed by a genitive.',
          explanation:
            'troja vrata — a noun that has only a plural cannot be counted with tri, which counts single objects. It takes a numeral adjective agreeing with it: dvoja, troja, četvera vrata (neuter plural), and the verb is plural: Troja vrata su otvorena.',
        },
        {
          type: 'transform',
          q: 'One of the two teachers is a woman. Replace "dva" accordingly and adjust the verb.',
          from: 'Dva učitelja krenula su ranije.',
          answer: 'Dvoje učitelja krenulo je ranije.',
          accept: [
            'Dvoje je učitelja krenulo ranije.',
            'Dvoje učitelja je krenulo ranije.',
            'Dvoje učitelja krenuli su ranije.',
            'Dvoje su učitelja krenuli ranije.',
            'Dvoje učitelja su krenuli ranije.',
          ],
          hint: 'A man and a woman together need the collective numeral; the noun after it changes its case, and the verb usually follows the numeral, not the people.',
          explanation:
            'Dvoje učitelja krenulo je ranije. — dva učitelja are two men; a mixed pair is dvoje, with the genitive plural (učitelja looks the same here) and, as a rule, a neuter singular verb: krenulo je. Plural agreement by meaning (krenuli su) is also met.',
        },
        {
          type: 'transform',
          q: 'The keeper is no longer sure of the number. Replace "deset" with one word meaning "about ten".',
          from: 'Deset učenika čekalo je pred domom.',
          answer: 'Desetak učenika čekalo je pred domom.',
          accept: [
            'Desetak je učenika čekalo pred domom.',
            'Desetak učenika je čekalo pred domom.',
          ],
          hint: 'A short suffix on the round number does it; the verb is already in the form such a word requires.',
          explanation:
            'Desetak učenika čekalo je pred domom. — desetak, petnaestak, tridesetak, stotinjak are approximate numbers. Like mnogo, they take the genitive plural and a neuter singular verb.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Dva prijatelja" and "dvoje prijatelja" describe the same pair of people.',
        answer: false,
        hint: 'Picture the two pairs. Is there a woman in both?',
        explanation:
          'False. Dva prijatelja are two male friends. Dvoje prijatelja is a mixed pair — a man and a woman — counted with the collective numeral and the genitive plural.',
      },
      9,
      1,
      {
        type: 'sort',
        q: 'How do you count two of them?',
        groups: [
          'dvoje + genitive (like dvoje djece)',
          'dvoja, agreeing with the noun (like dvoja vrata)',
          'dva or dvije',
        ],
        items: [
          { hr: 'unučad', group: 0 },
          { hr: 'telad', group: 0 },
          { hr: 'kola', group: 1 },
          { hr: 'usta', group: 1 },
          { hr: 'kliješta', group: 1 },
          { hr: 'sestre', group: 2 },
          { hr: 'prozori', group: 2 },
          { hr: 'sela', group: 2 },
        ],
        explanation:
          'Collective nouns in -ad, like djeca, take the collective numeral and stand in the genitive: dvoje unučadi, dvoje teladi. Neuter nouns that exist only in the plural take the numeral adjective: dvoja kola, dvoja usta, dvoja kliješta. Ordinary countable nouns take dva or dvije: dvije sestre, dva prozora, dva sela.',
      },
      11,
      {
        type: 'match',
        q: 'Who or what is being counted? Match each phrase to its meaning.',
        pairs: [
          ['dvojica studenata', 'two male students'],
          ['dvije studentice', 'two female students'],
          ['dvoje studenata', 'a male and a female student'],
          ['dvoja vrata', 'two doors'],
        ],
        explanation:
          'Croatian has four ways of saying "two" here: the group noun dvojica for men, the plain numeral dvije for women, the collective dvoje for a mixed pair, and the numeral adjective dvoja for a neuter noun that has only a plural.',
      },
      6,
      14,
      {
        type: 'order',
        q: 'Put the words in order: "The five of us fit into one car."',
        words: ['Nas', 'je', 'petero', 'stalo', 'u', 'jedan', 'automobil.'],
        accept: [
          'Nas petero stalo je u jedan automobil.',
          'Nas petero je stalo u jedan automobil.',
          'Petero nas je stalo u jedan automobil.',
          'U jedan automobil stalo nas je petero.',
          'U jedan nas je automobil stalo petero.',
          'U jedan je automobil stalo nas petero.',
        ],
        explanation:
          'Nas je petero stalo u jedan automobil. — with a collective numeral the pronoun stands in the genitive (nas, vas, njih), and in the past tense the verb is neuter singular: je stalo. The clitic je takes second position, after Nas or after the whole phrase Nas petero.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is in the wrong case. Tap it. ("Four passengers were sitting on the bench.")',
        words: ['Na', 'klupi', 'je', 'sjedilo', 'četvero', 'putnici.'],
        wrong: 5,
        answer: 'putnika',
        hint: 'The numeral is the head of the phrase. In what case does the counted noun follow it?',
        explanation:
          'Na klupi je sjedilo četvero putnika. — a collective numeral governs the genitive plural, exactly as mnogo does: četvero putnika, petero studenata. The neuter singular verb (je sjedilo) agrees with the numeral, not with the passengers.',
      },
      {
        type: 'transform',
        q: 'The parents are a mother and a father. Replace "oba" with the form for a mixed pair and adjust the verb.',
        from: 'Oba roditelja došla su na sastanak.',
        answer: 'Oboje roditelja došlo je na sastanak.',
        accept: [
          'Oboje je roditelja došlo na sastanak.',
          'Oboje roditelja je došlo na sastanak.',
          'Oboje roditelja došli su na sastanak.',
          'Oboje su roditelja došli na sastanak.',
          'Oboje roditelja su došli na sastanak.',
        ],
        hint: 'The mixed "both" is built like the collective for two, and the verb usually follows it into the neuter singular.',
        explanation:
          'Oboje roditelja došlo je na sastanak. — oba counts two males (or two things), obje two females, oboje a man and a woman. Like dvoje, it takes the genitive plural and normally a neuter singular verb; plural agreement by meaning (došli su) is also met.',
      },
      12,
      {
        type: 'listen',
        audio:
          'Od tridesetak prijavljenih na izlet je krenulo samo petnaestak, jer se desetak učenika razboljelo, a nekolicina je odustala zbog kiše.',
        q: 'What is the speaker saying?',
        options: [
          'About thirty set off, although some fifteen were ill',
          'Only about fifteen of the thirty or so who had signed up set off, because about ten students fell ill and a few dropped out on account of the rain',
          'About ten students signed up, and thirty came in spite of the rain',
          'The trip was canceled because about fifteen students fell ill',
        ],
        correct: 1,
        explanation:
          'tridesetak, petnaestak, desetak — approximate numbers, each with a neuter singular verb (je krenulo, se razboljelo). nekolicina (a handful of people) is a feminine noun, hence je odustala.',
      },
      {
        type: 'dictate',
        audio: 'Njih dvoje ima četvero unučadi.',
        answer: 'Njih dvoje ima četvero unučadi.',
        accept: ['Njih dvoje imaju četvero unučadi.'],
        hint: 'Five words: "The two of them have four grandchildren."',
        explanation:
          'Njih dvoje — a couple: the pronoun in the genitive plus the collective. četvero unučadi — the collective numeral with the genitive of a collective noun. After njih dvoje both ima and imaju are met.',
      },
    ],
  },

  // ── The ethical dative ─────────────────────────────────────────────────────
  'ethical-dative': {
    text: {
      kind: 'dialogue',
      title: 'Uoči puta u Beč',
      lines: [
        {
          who: 'Majka',
          hr: 'Jesi li mi sve spakirao, sine? Da mi nisi opet, kao lani, zaboravio putovnicu na kuhinjskom stolu!',
          en: 'Have you packed everything, son? And don’t you dare leave your passport on the kitchen table again, like last year!',
        },
        {
          who: 'Dino',
          hr: 'Jesam, mama, sve je u torbi. Nemoj mi se sada rastužiti — Beč ti je iza ugla, za šest sati vožnje sam kod kuće.',
          en: 'I have, Mom, everything is in the bag. Now don’t go getting sad on me — Vienna is just around the corner, you know; six hours’ drive and I am home.',
        },
        {
          who: 'Majka',
          hr: 'Lako je tebi govoriti. Ti ćeš mi se svake nedjelje javiti, i to ne porukom, nego tako da ti čujem glas!',
          en: 'That is easy for you to say. You are going to call every Sunday, mind — and not with a text message, but so that I can hear your voice!',
        },
        {
          who: 'Dino',
          hr: 'Javit ću se, obećavam. A ti mi se čuvaj i ne nosi sama one teške vrećice s tržnice.',
          en: 'I will call, I promise. And you take care of yourself, for my sake, and do not carry those heavy bags from the market by yourself.',
        },
        {
          who: 'Majka',
          hr: 'Ma to ti je sitnica. Nego, jesi li svratio k teti Zdenki da se pozdraviš? Cijelo jutro pita za tebe.',
          en: 'Oh, that is nothing, believe me. But tell me, have you stopped by Aunt Zdenka’s to say goodbye? She has been asking about you all morning.',
        },
        {
          who: 'Dino',
          hr: 'Idem k njoj odmah poslije ručka, a onda još moram otići liječniku po potvrdu za upis.',
          en: 'I am going to see her right after lunch, and then I still have to go to the doctor’s for the certificate I need to enroll.',
        },
        {
          who: 'Majka',
          hr: 'Tako, tako. I jedi mi ondje pošteno, čuješ? Nećeš mi valjda živjeti na sendvičima kao tvoj bratić.',
          en: 'Good, good. And eat properly over there, do you hear? Surely you are not going to live on sandwiches like your cousin.',
        },
        {
          who: 'Dino',
          hr: 'Kuham ti ja bolje nego što misliš! Pitaj Marka: prošli tjedan sam mu ispekao štrukle.',
          en: 'I cook better than you think, I’ll have you know! Ask Marko: last week I baked štrukli for him.',
        },
        {
          who: 'Majka',
          hr: 'Štrukle, ti! E, to bih voljela vidjeti. Hajde, dođi da te zagrlim — i budi mi dobar i pametan.',
          en: 'Štrukli, you! Well, that I would love to see. Come on, come here and let me hug you — and be good and sensible, for me.',
        },
        {
          who: 'Dino',
          hr: 'Hoću, mama. A vi mi svi ostanite zdravi; za Božić sam opet tu, pa ćemo zajedno k djedu na selo.',
          en: 'I will, Mom. And all of you stay well for me; I will be back for Christmas, and then we will go to Grandpa’s in the country together.',
        },
        {
          who: 'Majka',
          hr: 'Dao Bog. Sad idi, da mi ne zakasniš na vlak.',
          en: 'God willing. Now go, so you do not miss your train on me.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what exactly does the mother insist on every Sunday?',
          options: [
            'That Dino come home, since Vienna is only six hours away',
            'That he send her a long text message',
            'That he call, so that she can hear his voice — a message will not do',
            'That he visit his aunt and his grandfather',
          ],
          correct: 2,
          hint: 'Recall what she rules out, and which part of him she wants to hear.',
          explanation:
            'Ti ćeš mi se svake nedjelje javiti, i to ne porukom, nego tako da ti čujem glas! — she wants a call. The mi adds no participant; it turns a plain future tense into a mother’s loving command.',
        },
        {
          q: 'Compare Dino’s "Nemoj mi se sada rastužiti" with his "prošli tjedan sam mu ispekao štrukle". What is the difference between "mi" and "mu"?',
          options: [
            '"mi" is a dative and "mu" is an accusative',
            '"mu" names the person the štrukli were baked for and cannot be left out without losing him; "mi" names no participant and only shows how much the speaker cares',
            '"mi" is stressed and "mu" is unstressed',
            'There is none: both name the person who receives something',
          ],
          correct: 1,
          hint: 'Apply the test: leave each word out and see whether the facts of the sentence change.',
          explanation:
            'Sam ispekao štrukle — for whom? Without mu a participant is gone: an ordinary dative of the person who benefits. Nemoj se rastužiti says exactly the same as Nemoj mi se rastužiti; only the tenderness is missing. That droppable dative of feeling is the ethical dative.',
        },
        {
          type: 'type',
          q: 'Now you. Grandma and Grandpa see the grandchildren off to the coast: Djeco, čuvajte ____ se na moru! (the two of them both care)',
          answer: 'nam',
          hint: 'The speaker stands for more than one person, so the unstressed dative is the plural one.',
          explanation:
            'Djeco, čuvajte nam se na moru! — the ethical dative in the plural, the form of the solemn family wish Budite nam sretni! It stands in the clitic cluster before se.',
        },
        {
          type: 'transform',
          q: 'Add a mother’s warmth: put the ethical dative "mi" into the question, in the only place it can stand.',
          from: 'Jesi li se naspavao?',
          answer: 'Jesi li mi se naspavao?',
          hint: 'It joins the cluster of short words: behind the question particle, in front of the reflexive.',
          explanation:
            'Jesi li mi se naspavao? — the ethical dative is always a clitic and takes its ordinary place in the cluster: li, then the dative, then se. A stressed meni is impossible here.',
        },
        {
          type: 'transform',
          q: 'Say the same with the preposition "k".',
          from: 'Dođi mi večeras.',
          answer: 'Dođi k meni večeras.',
          accept: ['Dođi večeras k meni.', 'Večeras dođi k meni.'],
          hint: 'A preposition cannot lean on an unstressed word: the pronoun needs its full form.',
          explanation:
            'Dođi k meni večeras. — with a person as the destination the bare dative and k + dative are both standard, but after a preposition the pronoun must be stressed: k meni, k tebi, k njemu. Here mi is a real participant (the destination), not an ethical dative.',
        },
      ],
    },
    mix: [
      8,
      9,
      {
        type: 'tf',
        q: 'If you take "mi" out of "Daj mi knjigu", the sentence loses nothing but a little warmth.',
        answer: false,
        hint: 'After the cut, ask the sentence: to whom?',
        explanation:
          'False. In Daj mi knjigu the dative is the person who receives the book — an ordinary indirect object. Without it a participant disappears. An ethical dative passes the test the other way: Pazi (mi) se!, Nemoj (mi) plakati! say the same facts with or without it.',
      },
      2,
      {
        type: 'sort',
        q: 'What is the dative doing?',
        groups: [
          'Only feeling — dropping it changes no facts',
          'A participant — dropping it loses a person',
        ],
        items: [
          { hr: 'Jesi li mi gladan?', group: 0 },
          { hr: 'Nemoj mi se prehladiti!', group: 0 },
          { hr: 'To ti je život.', group: 0 },
          { hr: 'Budi mi pozdravljen!', group: 0 },
          { hr: 'Donesi mi čašu vode.', group: 1 },
          { hr: 'Javi mi kad stigneš.', group: 1 },
          { hr: 'Pokazat ću ti grad.', group: 1 },
        ],
        explanation:
          'Jesi li gladan?, Nemoj se prehladiti!, To je život., Budi pozdravljen! state the same facts without the clitic — it only adds tenderness, concern or a confiding tone. In Donesi mi, Javi mi, Pokazat ću ti the dative is the person who gets the water, the news or the tour.',
      },
      10,
      {
        type: 'match',
        q: 'Four datives, four jobs. Match each question to its English.',
        pairs: [
          ['Kako si mi?', 'How are you, my dear?'],
          ['Kako ti je mama?', 'How is your mom?'],
          ['Kako ti se sviđa?', 'How do you like it?'],
          ['Kako ću ti to objasniti?', 'How am I going to explain that to you?'],
        ],
        explanation:
          'Kako si mi? — ethical: the speaker’s affection, nothing more. Kako ti je mama? — possessive: whose mother. Kako ti se sviđa? — the person who has the impression. Kako ću ti to objasniti? — the person addressed. Only the first can be dropped without changing what is asked.',
      },
      3,
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Don’t you dare come back without a diploma!"',
        words: ['Da', 'mi', 'se', 'nisi', 'vratio', 'bez', 'diplome!'],
        accept: ['Da mi se bez diplome nisi vratio!'],
        explanation:
          'Da mi se nisi vratio bez diplome! — da + a negated past tense is a stern, emotional warning, and the ethical mi is what makes it personal. The clitics follow da at once, dative before se.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is in the wrong form. Tap it. ("Come to our place for dinner!")',
        words: ['Dođite', 'k', 'nam', 'na', 'večeru!'],
        wrong: 2,
        answer: 'nama',
        hint: 'Can an unstressed word carry a preposition?',
        explanation:
          'Dođite k nama na večeru! — after a preposition the pronoun takes its stressed form: k nama, k meni, k njoj. The clitic nam can stand only without the preposition: Dođite nam na večeru!',
      },
      {
        type: 'transform',
        q: 'The speaker now means: "do not come crying to ME, of all people." Change one word.',
        from: 'Nemoj mi plakati.',
        answer: 'Nemoj meni plakati.',
        accept: ['Meni nemoj plakati.'],
        hint: 'Stress turns the feeling into a participant: use the full form of the pronoun.',
        explanation:
          'Nemoj meni plakati. — the ethical dative is always a clitic. As soon as the pronoun is stressed it names a real participant: the person to whom the crying is addressed. Nemoj mi plakati comforts; Nemoj meni plakati sends the complaint elsewhere.',
      },
      {
        type: 'listen',
        audio:
          'Ma to ti je, dijete moje, tako u životu: danas ti se čini da je sve izgubljeno, a sutra se svemu tome smiješ.',
        q: 'What is the speaker saying?',
        options: [
          'She is scolding the child for laughing at other people’s troubles',
          'She has lost something today and hopes to find it tomorrow',
          'That is how life is: today everything seems lost to you, and tomorrow you are laughing at it all',
          'She is telling the child that life will never be easy',
        ],
        correct: 2,
        explanation:
          'to ti je tako u životu — the ethical ti draws the listener in ("that is life for you") and could be dropped. In danas ti se čini the ti is different: it names the person to whom things seem lost, and cannot be dropped without changing the meaning.',
      },
      {
        type: 'dictate',
        audio: 'Budi mi dobar i javi se čim stigneš.',
        answer: 'Budi mi dobar i javi se čim stigneš.',
        hint: 'Eight words: "Be good, now, and get in touch as soon as you arrive."',
        explanation:
          'Budi mi dobar — the ethical dative of a parting wish: the sentence is complete without mi, but it would no longer sound like family. javi se čim stigneš — čim, as soon as, with the perfective present.',
      },
    ],
  },

  // ── Capitals in the names of institutions ──────────────────────────────────
  'capitals-institutions': {
    text: {
      kind: 'text',
      title: 'Pozivnica na svečanu sjednicu',
      lines: [
        {
          hr: 'Poštovana gospođo Vuković, čast mi je pozvati Vas na svečanu sjednicu kojom Filozofski fakultet Sveučilišta u Zagrebu obilježava sto pedesetu obljetnicu Odsjeka za povijest umjetnosti.',
          en: 'Dear Mrs. Vuković, I have the honor of inviting you to the ceremonial session with which the Faculty of Humanities and Social Sciences of the University of Zagreb marks the one hundred fiftieth anniversary of the Department of Art History.',
        },
        {
          hr: 'Sjednica će se održati u petak, 14. studenoga, u 11 sati u velikoj dvorani na prvom katu, a ne, kako je prvotno bilo najavljeno, u Hrvatskome državnom arhivu.',
          en: 'The session will be held on Friday, November 14, at 11 a.m. in the great hall on the second floor, and not, as was originally announced, in the Croatian State Archives.',
        },
        {
          hr: 'Uvodno će govoriti izaslanica Ministarstva znanosti, obrazovanja i mladih, a potom i predsjednik Hrvatske akademije znanosti i umjetnosti.',
          en: 'The opening address will be given by the envoy of the Ministry of Science, Education and Youth, followed by the president of the Croatian Academy of Sciences and Arts.',
        },
        {
          hr: 'Tiskanje spomenice poduprla je Matica hrvatska, koja je preuzela i njezino uređivanje.',
          en: 'The printing of the commemorative volume was supported by Matica hrvatska, which also took on the editing.',
        },
        {
          hr: 'Nakon sjednice u Muzeju za umjetnost i obrt otvara se izložba o počecima studija, koja ostaje otvorena do Uskrsa.',
          en: 'After the session, an exhibition on the beginnings of the program opens at the Museum of Arts and Crafts; it will remain open until Easter.',
        },
        {
          hr: 'Podsjećam da je studij pokrenut u vrijeme kad je u Hrvatskoj postojalo jedno jedino sveučilište, da je najteže godine proživio za Drugoga svjetskog rata i da je nadživio dva svjetska rata i sve kasnije reforme visokoga školstva.',
          en: 'Let me recall that the program was launched at a time when there was one single university in Croatia, that it lived through its hardest years during the Second World War, and that it has outlived two world wars and every later reform of higher education.',
        },
        {
          hr: 'Mnogi su naši nekadašnji studenti poslije predavali na fakultetima i radili u muzejima diljem Europe, a neki su od njih danas zaposleni u ustanovama Europske unije.',
          en: 'Many of our former students went on to teach at universities and work in museums all over Europe, and some of them are today employed in the institutions of the European Union.',
        },
        {
          hr: 'Bit će nam drago ako nam se pridružite i na primanju koje gradonačelnik priređuje u Staroj gradskoj vijećnici, na Gornjem gradu.',
          en: 'We would be delighted if you also joined us at the reception that the mayor is hosting in the Old City Hall, in the Upper Town.',
        },
        {
          hr: 'Onamo se najlakše dolazi tramvajem do Trga bana Josipa Jelačića, a zatim uspinjačom ili pješice Radićevom ulicom.',
          en: 'The easiest way to get there is by streetcar to Ban Josip Jelačić Square, and then by funicular or on foot along Radićeva Street.',
        },
        {
          hr: 'Molim Vas da dolazak potvrdite do kraja listopada našem tajništvu, osobno ili elektroničkom poštom.',
          en: 'Please confirm your attendance with our office by the end of October, in person or by email.',
        },
        {
          hr: 'S osobitim poštovanjem, prof. dr. sc. Marko Lončar, dekan',
          en: 'Yours most respectfully, Prof. Marko Lončar, PhD, Dean',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the invitation: where will the session NOT be held, contrary to what was first announced?',
          options: [
            'In the Museum of Arts and Crafts',
            'In the Old City Hall',
            'In the Croatian State Archives',
            'In the great hall on the second floor',
          ],
          correct: 2,
          hint: 'Three buildings are named: one for the session as first announced, one for an exhibition, one for a reception.',
          explanation:
            'u velikoj dvorani na prvom katu, a ne… u Hrvatskome državnom arhivu — the session was moved from the State Archives to the faculty’s own hall. The museum hosts the exhibition and the Old City Hall the reception. (Prvi kat is the floor above the ground floor.)',
        },
        {
          q: 'The dean writes "za Drugoga svjetskog rata" with a capital, but "dva svjetska rata" without one. Why?',
          options: [
            'Because an ordinal number is always capitalized and a cardinal number never is',
            'Because the first is the name of one particular historical event, whose first word takes a capital, while the second merely counts wars and names nothing',
            'Because the genitive requires a capital and the accusative does not',
            'Because "Drugoga" opens a new clause, and every clause begins with a capital',
          ],
          correct: 1,
          hint: 'Ask of each phrase: is it a name you could look up in an encyclopedia, or a description with a number in it?',
          explanation:
            'Drugi svjetski rat is a name: like every multi-word name outside the settlement-and-state group, it capitalizes its first word only (svjetski and rat stay small), and it keeps that capital in every case. Dva svjetska rata is an ordinary phrase — a number, an adjective and a noun.',
        },
        {
          type: 'fix',
          q: 'One word has the wrong letter size. Tap it. ("She graduated from the University of Split.")',
          words: ['Diplomirala', 'je', 'na', 'Sveučilištu', 'u', 'splitu.'],
          wrong: 5,
          answer: 'Splitu',
          hint: 'Only the first word of an institution’s name is capitalized — unless a later word is a name in its own right.',
          explanation:
            'Diplomirala je na Sveučilištu u Splitu. — the first-word rule gives Sveučilištu its capital; Split keeps its own because a name inside a name stays a name, exactly as in Filozofski fakultet Sveučilišta u Zagrebu.',
        },
        {
          type: 'type',
          q: 'Now you. "Knjigu je objavila Matica hrvatska." Whose edition is it? To je izdanje ____ hrvatske.',
          answer: 'Matice',
          hint: 'The whole name declines, word by word, like any noun with its adjective.',
          explanation:
            'izdanje Matice hrvatske — both words go into the genitive. On paper the first word keeps its capital in every case, and hrvatske stays small: it is not the first word of the name and not a name itself.',
        },
        {
          type: 'transform',
          q: 'Write the abbreviation out in full: DHMZ stands for "Državni hidrometeorološki zavod".',
          from: 'Radi u DHMZ-u.',
          answer: 'Radi u Državnom hidrometeorološkom zavodu.',
          accept: [
            'Radi u Državnome hidrometeorološkom zavodu.',
            'Radi u Državnom hidrometeorološkome zavodu.',
            'Radi u Državnome hidrometeorološkome zavodu.',
          ],
          hint: 'Three words, all in the locative — and decide for yourself which of them would carry a capital on paper.',
          explanation:
            'Radi u Državnom hidrometeorološkom zavodu. — the abbreviation capitalizes every initial, but the full name follows the first-word rule: only Državnom takes a capital, because hidrometeorološki and zavod are common words.',
        },
      ],
    },
    mix: [
      8,
      9,
      {
        type: 'tf',
        q: '"Vlada Republike Hrvatske" breaks the first-word rule, because three of its words are capitalized.',
        answer: false,
        hint: 'Look at the second and third words on their own. What are they?',
        explanation:
          'False. The rule says: the first word, plus any word that is a name in its own right. Republika Hrvatska is the name of a state, where every word is capitalized, and it keeps its capitals when it is nested inside the name of the government.',
      },
      0,
      {
        type: 'sort',
        q: 'Look at the word in CAPITALS. In ordinary writing, is it part of a name or an ordinary word?',
        groups: ['Part of a name — capital letter', 'Ordinary word — lower case'],
        items: [
          { hr: 'Radi u HRVATSKOM saboru.', group: 0 },
          { hr: 'Zaposlila se u MINISTARSTVU financija.', group: 0 },
          { hr: 'Podatke objavljuje DRŽAVNI zavod za statistiku.', group: 0 },
          { hr: 'Posudio je knjigu u NACIONALNOJ i sveučilišnoj knjižnici.', group: 0 },
          { hr: 'Sinoć smo bili u KAZALIŠTU.', group: 1 },
          { hr: 'Studira na nekom SVEUČILIŠTU u Njemačkoj.', group: 1 },
          { hr: 'Svako MINISTARSTVO ima glasnogovornika.', group: 1 },
          { hr: 'Svaka NACIONALNA knjižnica čuva stare rukopise.', group: 1 },
        ],
        explanation:
          'Hrvatski sabor, Ministarstvo financija, Državni zavod za statistiku and Nacionalna i sveučilišna knjižnica are the full names of particular institutions, and the word in question is their first word. A theater that is not named, "some university", "every ministry" and "every national library" name no institution, so they are written small.',
      },
      10,
      11,
      {
        type: 'match',
        q: 'These names are printed in capitals. Match each to the capitals it has in ordinary writing.',
        pairs: [
          ['HRVATSKO NARODNO KAZALIŠTE', 'one capital only'],
          ['SVEUČILIŠTE U ZADRU', 'two capitals: the first word and a town'],
          ['ULICA KRALJA ZVONIMIRA', 'two capitals: the first word and a ruler’s name'],
          ['TRG SVETOG MARKA', 'two capitals: the first word and a saint’s name'],
          [
            'FILOZOFSKI FAKULTET SVEUČILIŠTA U ZAGREBU',
            'three capitals: two institutions and a town',
          ],
        ],
        explanation:
          'Hrvatsko narodno kazalište · Sveučilište u Zadru · Ulica kralja Zvonimira · Trg svetog Marka · Filozofski fakultet Sveučilišta u Zagrebu. First word always; after that only real names — a town, a person, or another institution’s name beginning inside the longer one. Titles (kralj) and sveti stay small.',
      },
      1,
      {
        type: 'order',
        q: 'Put the words in order: "The session of the Croatian Parliament begins at nine o’clock."',
        words: ['Sjednica', 'Hrvatskoga', 'sabora', 'počinje', 'u', 'devet', 'sati.'],
        accept: [
          'U devet sati počinje sjednica Hrvatskoga sabora.',
          'Sjednica Hrvatskoga sabora u devet sati počinje.',
        ],
        explanation:
          'Sjednica Hrvatskoga sabora počinje u devet sati. — the name declines like any adjective and noun (Hrvatski sabor, Hrvatskoga sabora, u Hrvatskome saboru), and on paper its first word keeps the capital in every case.',
      },
      {
        type: 'fix',
        q: 'One word has the wrong letter size. Tap it. ("He lives on Knez Branimir Street.")',
        words: ['Stanuje', 'u', 'Ulici', 'Kneza', 'Branimira.'],
        wrong: 3,
        answer: 'kneza',
        hint: 'Which of the three words of the street name is neither its first word nor a personal name?',
        explanation:
          'Stanuje u Ulici kneza Branimira. — a title inside a name is a common noun and stays small: Ulica kneza Branimira, Ulica kralja Zvonimira, Trg bana Josipa Jelačića.',
      },
      4,
      {
        type: 'transform',
        q: 'Finish the sentence with the name of the institution in the right case: "Radi u …"',
        from: 'Hrvatska narodna banka',
        answer: 'Radi u Hrvatskoj narodnoj banci.',
        accept: ['u Hrvatskoj narodnoj banci', 'Hrvatskoj narodnoj banci'],
        hint: 'All three words take the locative; think, too, about which of them would carry a capital on paper.',
        explanation:
          'Radi u Hrvatskoj narodnoj banci. — the whole name declines (banka → banci), and written out only Hrvatskoj has a capital: narodna and banka are common words that are not the first word of the name.',
      },
      6,
      {
        type: 'listen',
        audio:
          'Zakon je jučer izglasan u Hrvatskome saboru, a prije nego što stupi na snagu mora biti objavljen u Narodnim novinama.',
        q: 'What is the speaker saying?',
        options: [
          'The law took effect yesterday, as soon as the newspapers reported it',
          'The law was passed in parliament yesterday, and before it takes effect it must be published in the official gazette',
          'Parliament will vote on the law once it has been published',
          'The official gazette criticized the law that parliament passed yesterday',
        ],
        correct: 1,
        explanation:
          'izglasan u Hrvatskome saboru — passed in the Croatian Parliament; stupiti na snagu — to take effect. Narodne novine is the name of the official gazette: first word capitalized, and declined as a plural (u Narodnim novinama).',
      },
      {
        type: 'dictate',
        audio: 'Sestra mi studira na Filozofskom fakultetu u Zagrebu.',
        answer: 'Sestra mi studira na Filozofskom fakultetu u Zagrebu.',
        accept: ['Sestra mi studira na Filozofskome fakultetu u Zagrebu.'],
        hint: 'Eight words: "My sister studies at the Faculty of Humanities and Social Sciences in Zagreb."',
        explanation:
          'na Filozofskom fakultetu — the name in the locative. Written out, Filozofskom has the capital as the first word of the name, fakultetu is small, and Zagrebu is a name in its own right.',
      },
    ],
  },

  // ── Diminutives and augmentatives ──────────────────────────────────────────
  'diminutives-augmentatives': {
    text: {
      kind: 'dialogue',
      title: 'Vikendica iz oglasa',
      lines: [
        {
          who: 'Dora',
          hr: 'Jesi li vidio oglas? „Šarmantna vikendica s vrtićem i pogledom na more, pet minuta od plaže.” Zvuči kao stvoreno za nas.',
          en: 'Have you seen the ad? “Charming vacation cottage with a little garden and a sea view, five minutes from the beach.” It sounds as if it were made for us.',
        },
        {
          who: 'Vedran',
          hr: 'Vidio sam, i odmah sam postao sumnjičav. Kad agent piše u umanjenicama, obično nešto prikriva: „sobica” je ostava, a „cestica” kozja staza.',
          en: 'I have, and I got suspicious right away. When an agent writes in diminutives, he is usually hiding something: a “sobica” is a storage room, and a “cestica” is a goat track.',
        },
        {
          who: 'Dora',
          hr: 'Ne budi takav. Umanjenica ne mora značiti da je nešto maleno — kad te ja zovem na kavicu, ne nudim ti manje kave, nego više vremena.',
          en: 'Do not be like that. A diminutive need not mean that something is small — when I invite you for a “kavica,” I am not offering you less coffee but more time.',
        },
        {
          who: 'Vedran',
          hr: 'To stoji. Ali sjeti se „stančića” koji smo lani gledali u Zadru: ispalo je da je to sobičak bez prozora, s kuhinjicom u hodniku.',
          en: 'True enough. But remember the “stančić” we looked at in Zadar last year: it turned out to be a cramped little room with no window and a kitchenette in the hallway.',
        },
        {
          who: 'Dora',
          hr: 'A sjećaš se i one kućerine iznad Omiša? Vlasnik ju je s ponosom zvao „dvorcem”, a tebi je bila samo betonska grdosija.',
          en: 'And do you remember that great hulk of a house above Omiš? The owner proudly called it a “castle,” and to you it was just a concrete monstrosity.',
        },
        {
          who: 'Vedran',
          hr: 'Jer je i bila: tri kata golog betona i stubište kojim bi mogao proći kamion.',
          en: 'Because it was: three floors of bare concrete and a staircase you could drive a truck through.',
        },
        {
          who: 'Dora',
          hr: 'Dobro, ti si za mjeru. Meni bi bila dovoljna terasica, dvije sobe i stolić pod smokvom, da ujutro u miru popijem kavu.',
          en: 'All right, you like things in proportion. A little terrace, two rooms and a small table under the fig tree would be enough for me, so that I can drink my coffee in peace in the morning.',
        },
        {
          who: 'Vedran',
          hr: 'I meni, samo da nas agent opet ne dočeka s onim svojim „samo sekundicu” pa nestane na pola sata.',
          en: 'For me too, as long as the agent does not greet us again with that “just a teeny second” of his and then vanish for half an hour.',
        },
        {
          who: 'Dora',
          hr: 'Ti si pravo gunđalo. Onaj je čovjek, uostalom, bio ljudina: sjećaš li se da nas je, kad nam se pokvario auto, sam odvezao do Splita?',
          en: 'You are a real grouch. Besides, that man was a prince of a fellow: do you remember that when our car broke down, he drove us to Split himself?',
        },
        {
          who: 'Vedran',
          hr: 'Sjećam se, i priznajem da jest. Samo mi je ona njegova psina izgrizla torbu.',
          en: 'I remember, and I admit he was. Only that great big dog of his chewed up my bag.',
        },
        {
          who: 'Dora',
          hr: 'Eto vidiš. Nazovimo ga onda sutra i dogovorimo razgledavanje — a ako vikendica ispadne ruševina, častim te pivcem.',
          en: 'There you go. Let us call him tomorrow, then, and arrange a viewing — and if the cottage turns out to be a ruin, I will treat you to a nice little beer.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why does the ad make Vedran suspicious?',
          options: [
            'Because the cottage is too far from the beach',
            'Because, in his experience, an agent who writes in diminutives is usually hiding something',
            'Because the price is not mentioned anywhere',
            'Because the same agent once sold them a house above Omiš',
          ],
          correct: 1,
          hint: 'Recall his two "translations" from the language of ads: a little room and a little road.',
          explanation:
            'Kad agent piše u umanjenicama, obično nešto prikriva — for him "sobica" means a storage room and "cestica" a goat track. Dora answers with the other side of the diminutive: it can express friendliness rather than size.',
        },
        {
          q: 'Dora calls the house above Omiš a "kućerina" and the agent a "ljudina". Both words are augmentatives. What decides that the first is a sneer and the second is praise?',
          options: [
            'The suffix: -erina always insults and -ina always praises',
            'The gender: an augmentative of a feminine noun is negative, of a masculine noun positive',
            'The word itself and the situation: the augmentative suffixes carry no fixed attitude',
            'The case: an augmentative praises in the nominative and mocks in the genitive',
          ],
          correct: 2,
          hint: 'Look at what follows each word in the dialogue: "betonska grdosija" in one case, a favor done in the other.',
          explanation:
            'An augmentative makes something bigger and adds an attitude, but which attitude depends on the word and the context. Ljudina and momčina are warm; babetina is plainly rude; kućerina can admire a grand house or, as here, dismiss a concrete monster.',
        },
        {
          type: 'type',
          q: 'Now you. The neuter "pivo" gives "pivce". Do the same with "vino": Uz večeru ćemo popiti čašu ____.',
          answer: 'vinca',
          hint: 'The same neuter suffix; and a glass OF something needs the genitive.',
          explanation:
            'čaša vinca — vino → vince, like pivo → pivce and selo → selce. As with kavica, the diminutive promises a pleasant, unhurried glass rather than a small one.',
        },
        {
          type: 'type',
          q: 'Vedran teases Dora about her brother: On nema nos, nego pravu ____! (nos — the mocking augmentative)',
          answer: 'nosinu',
          hint: 'The augmentative suffix turns the masculine noun into a feminine one in -a — notice "pravu" — so the object takes the ending of ženu.',
          explanation:
            'pravu nosinu — nos → nosina. Augmentatives in -ina are grammatically feminine whatever the gender of the base, which is why the adjective is pravu and the accusative ends in -u.',
        },
        {
          type: 'transform',
          q: 'Soften the request: replace "minutu" with its diminutive.',
          from: 'Imate li minutu?',
          answer: 'Imate li minuticu?',
          accept: ['Imate li minuticu vremena?'],
          hint: 'The feminine diminutive suffix; the case stays the same.',
          explanation:
            'Imate li minuticu? — minuta → minutica. Attached to a request, the diminutive makes the imposition sound small; it does the same social work as the conditional in Biste li imali…?',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Someone who says "Kakva psina!" may be admiring a big dog — or complaining about a dirty trick.',
        answer: true,
        hint: 'Augmentatives often live a second life as words in their own right.',
        explanation:
          'True. Psina is the augmentative of pas, a great big dog, but it is also an everyday word for a mean prank: napraviti nekomu psinu. Only the situation tells you which is meant.',
      },
      9,
      {
        type: 'sort',
        q: 'What does the suffix do to the base word?',
        groups: ['Makes it smaller or dearer', 'Makes it bigger or coarser'],
        items: [
          { hr: 'ptičica', group: 0 },
          { hr: 'brdašce', group: 0 },
          { hr: 'cvjetić', group: 0 },
          { hr: 'srdašce', group: 0 },
          { hr: 'ptičurina', group: 1 },
          { hr: 'vjetrina', group: 1 },
          { hr: 'junačina', group: 1 },
          { hr: 'torbetina', group: 1 },
        ],
        explanation:
          'Diminutives: -ica for feminines (ptica → ptičica), -ić for masculines (cvijet → cvjetić), -ce and -ašce for neuters (brdo → brdašce, srce → srdašce). Augmentatives: -ina, -urina, -etina (vjetar → vjetrina, ptica → ptičurina, torba → torbetina). Bigger is not always worse: junačina is high praise.',
      },
      1,
      10,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['ručica', 'a little hand; also a handle'],
          ['ručetina', 'a huge paw of a hand'],
          ['glavica', 'a small head; also a head of cabbage or garlic'],
          ['glavurina', 'a big ugly head'],
          ['nosić', 'a cute little nose'],
        ],
        explanation:
          'ruka → ručica / ručetina, glava → glavica / glavurina, nos → nosić: before these suffixes k becomes č (ruka → ruč-). Many diminutives have also become ordinary names of things — ručica is a handle, glavica a head of cabbage — with no smallness or affection left in them.',
      },
      5,
      11,
      {
        type: 'order',
        q: 'Put the words in order: "We sat down at the little table under the old fig tree."',
        words: ['Sjeli', 'smo', 'za', 'stolić', 'pod', 'starom', 'smokvom.'],
        accept: [
          'Za stolić pod starom smokvom sjeli smo.',
          'Za stolić smo sjeli pod starom smokvom.',
          'Pod starom smokvom sjeli smo za stolić.',
          'Pod starom smo smokvom sjeli za stolić.',
        ],
        explanation:
          'Sjeli smo za stolić pod starom smokvom. — stol → stolić, with the masculine suffix -ić. Sitting down AT a table is motion, so za takes the accusative here (za stolić); sitting there already would be za stolićem.',
      },
      {
        type: 'fix',
        q: 'One word has the wrong ending. Tap it. ("That great big dog of theirs ate the whole cake.")',
        words: ['Ona', 'njihova', 'psina', 'pojeo', 'je', 'cijeli', 'kolač.'],
        wrong: 3,
        answer: 'pojela',
        hint: 'Look at the two words in front of the noun. What gender has the suffix given it?',
        explanation:
          'Ona njihova psina pojela je cijeli kolač. — an augmentative in -ina is a feminine noun, even when the base is masculine (pas): ona, njihova and the participle all agree with it. The dog may well be male; the grammar follows the word.',
      },
      7,
      {
        type: 'transform',
        q: 'Make the speaker sound weary of the book: replace "knjigu" with its augmentative.',
        from: 'Tu knjigu nikad neću pročitati.',
        answer: 'Tu knjižurinu nikad neću pročitati.',
        accept: [
          'Tu knjižurinu nikada neću pročitati.',
          'Tu knjižurinu neću nikad pročitati.',
          'Tu knjižurinu neću nikada pročitati.',
        ],
        hint: 'A coarse suffix beginning with -ur-; the last consonant of the base softens before it just as it does in the diminutive of this word.',
        explanation:
          'Tu knjižurinu nikad neću pročitati. — knjiga → knjižurina, with g → ž as in knjižica. The suffix -urina leans pejorative: the book is not only thick, it is a burden.',
      },
      {
        type: 'listen',
        audio:
          'Nemojte se ljutiti, gospođo, ali ovo nije stančić, nego ostava s prozorčićem, a za tu cijenu očekivao sam barem balkon.',
        q: 'What is the speaker saying?',
        options: [
          'He is delighted with the little apartment and its balcony',
          'He complains that the "little apartment" is really a storage room with a tiny window, and that for the price he expected at least a balcony',
          'He asks the lady whether the storage room and the balcony are included in the price',
          'He apologizes for breaking the little window in the storage room',
        ],
        correct: 1,
        explanation:
          'stan → stančić, prozor → prozorčić: both with -čić. The speaker throws the ad’s diminutive back at the owner — what was meant to sound cozy now sounds like an admission that the place is tiny.',
      },
      {
        type: 'dictate',
        audio: 'Sjeli smo na klupicu ispred crkvice.',
        answer: 'Sjeli smo na klupicu ispred crkvice.',
        hint: 'Six words: "We sat down on the little bench in front of the little church."',
        explanation:
          'klupa → klupica, crkva → crkvica — the feminine suffix -ica. na klupicu is an accusative of direction after sjesti; ispred takes the genitive: crkvice.',
      },
    ],
  },
};
