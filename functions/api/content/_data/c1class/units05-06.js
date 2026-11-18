// ─── C1 lessons in class order — Units 5–6 (lessons 21–30) ───────────────────
// Same shape and rules as units01-02.js:
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Existing typed items come before anything that prints their answer. Where the
// answer is a bare function word (da, jer, pa, smo) the item is placed first or
// as early as the other typed items allow. Where Croatian has more than one
// standard form or order, every one is accepted and none is marked wrong.

export const CLASS_C1_U05_06 = {
  // ══ UNIT 5 ═════════════════════════════════════════════════════════════════

  // ── The full range of clauses ──────────────────────────────────────────────
  'clause-types': {
    text: {
      kind: 'dialogue',
      title: 'Ugovor o najmu',
      lines: [
        {
          who: 'Odvjetnica',
          hr: 'Gospodine Babiću, pročitala sam ugovor dvaput kako bih bila sigurna da Vam ništa nije promaknulo, i moram reći da je strože sročen nego što sam očekivala.',
          en: 'Mr. Babić, I read the contract twice in order to be sure that nothing had escaped you, and I must say that it is worded more strictly than I expected.',
        },
        {
          who: 'Klijent',
          hr: 'Premda mi je najmodavac obećao da će biti popustljiv, u petom članku stoji da se ugovor raskida ukoliko najamninu ne platim do petoga u mjesecu.',
          en: 'Although the landlord promised me that he would be lenient, Article 5 says that the lease is terminated if I do not pay the rent by the fifth of the month.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Upravo tako, a rok je tako kratak da bi Vas i jedno jedino kašnjenje banke moglo stajati stana.',
          en: 'Exactly, and the deadline is so short that even a single delay by the bank could cost you the apartment.',
        },
        {
          who: 'Klijent',
          hr: 'Što mi onda savjetujete? Ja bih potpisao što prije, da mi stan ne uzme netko drugi.',
          en: 'What do you advise, then? I would sign as soon as possible, so that somebody else does not take the apartment from me.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Savjetujem Vam da ništa ne potpisujete prije nego što najmodavcu predložimo izmjenu; pisat ću mu još danas ne bi li pristao na rok od petnaest dana.',
          en: 'I advise you not to sign anything before we propose an amendment to the landlord; I will write to him today in the hope that he will agree to a fifteen-day deadline.',
        },
        {
          who: 'Klijent',
          hr: 'A ako ne pristane? Stan mi se sviđa, ali ne bih htio živjeti u strahu od svakoga petog u mjesecu.',
          en: 'And if he does not agree? I like the apartment, but I would not want to live in fear of every fifth of the month.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Tada ćemo tražiti barem da Vas prije raskida pisano opomene, kao što je uobičajeno u takvim ugovorima.',
          en: 'Then we will at least demand that he give you written notice before termination, as is customary in such contracts.',
        },
        {
          who: 'Klijent',
          hr: 'Još nešto: piše da smijem preurediti kuhinju, ali da stan moram vratiti onakav kakav sam ga zatekao. Kako da ga preuredim, a da ga ne promijenim?',
          en: 'One more thing: it says that I may remodel the kitchen, but that I must return the apartment just as I found it. How am I supposed to remodel it without changing it?',
        },
        {
          who: 'Odvjetnica',
          hr: 'Ta je odredba napisana nespretno, tako da je svatko može tumačiti kako mu odgovara; zatražit ćemo da se izbriše.',
          en: 'That provision is clumsily written, so that anyone can interpret it as it suits them; we will ask for it to be deleted.',
        },
        {
          who: 'Klijent',
          hr: 'Dobro. Gdje god sam dosad stanovao, potpisivao sam bez čitanja, pa sam se svaki put opekao.',
          en: 'All right. Wherever I have lived so far, I signed without reading, and I got burned every time.',
        },
        {
          who: 'Odvjetnica',
          hr: 'Zato ste i došli k meni. Javit ću Vam se čim najmodavac odgovori, pa ćemo zajedno odlučiti isplati li se čekati.',
          en: 'That is why you came to me. I will get in touch with you as soon as the landlord replies, and we will decide together whether it is worth waiting.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what will the lawyer do today, and what does she hope to achieve?',
          options: [
            'She will sign the lease on her client’s behalf, hoping to secure the apartment',
            'She will write to the landlord, hoping he will agree to a fifteen-day deadline',
            'She will call the bank, hoping it will guarantee payments by the fifth',
            'She will look for another apartment, hoping to find a more lenient landlord',
          ],
          correct: 1,
          hint: 'Recall the sentence in which her plan and her hope are joined by "ne bi li".',
          explanation:
            'pisat ću mu još danas ne bi li pristao na rok od petnaest dana — "ne bi li" + conditional states a purpose that one hopes for but cannot count on. Despite the ne, nothing is negated.',
        },
        {
          q: 'The lawyer says "pročitala sam ugovor dvaput kako bih bila sigurna". The reading is over. Why is the second verb not in a past tense?',
          options: [
            'Because kako is always followed by the conditional, whatever it means',
            'Because she has not actually finished reading the contract',
            'Because a purpose clause (namjerna rečenica) states an intention, not a fact: it takes kako + conditional or da + present, whatever the tense of the main verb',
            'Because the conditional is the polite way to speak to a client',
          ],
          correct: 2,
          hint: 'Ask what the clause reports: something that happened, or something she was aiming at?',
          explanation:
            'A purpose clause names an aim seen from the moment of acting, so it never takes an ordinary past: kako with the conditional, or da with a present. kako by itself does not require the conditional — it can also give a manner (kako mu odgovara) or a cause.',
        },
        {
          type: 'type',
          q: 'Now you. The same intention with the plainest purpose conjunction: Pročitala sam ugovor dvaput ____ sigurna. (two words: the conjunction and "to be" for "I")',
          answer: 'da budem',
          hint: 'After this conjunction a purpose clause takes the present — and biti has a second present, used exactly here, that is not "sam".',
          explanation:
            'Pročitala sam ugovor dvaput da budem sigurna. — purpose with da takes the present; for biti that is the perfective present budem, because "da sam sigurna" would state a fact ("that I am sure"), not an aim.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one with a clause of result (posljedična rečenica): "The provision is so clumsily written that everyone interprets it in their own way."',
          from: 'Odredba je nespretno napisana. Svatko je tumači po svome.',
          answer: 'Odredba je tako nespretno napisana da je svatko tumači po svome.',
          accept: [
            'Odredba je napisana tako nespretno da je svatko tumači po svome.',
            'Odredba je toliko nespretno napisana da je svatko tumači po svome.',
            'Odredba je napisana toliko nespretno da je svatko tumači po svome.',
            'Odredba je tako nespretno napisana da ju svatko tumači po svome.',
            'Odredba je toliko nespretno napisana da ju svatko tumači po svome.',
            'Odredba je napisana tako nespretno da ju svatko tumači po svome.',
            'Odredba je napisana toliko nespretno da ju svatko tumači po svome.',
          ],
          hint: 'A word of degree goes in front of the adverb in the first clause and is answered by a conjunction in the second; the short pronoun then moves right behind that conjunction.',
          explanation:
            'Odredba je tako nespretno napisana da je svatko tumači po svome. — tako (or toliko) sets up the degree and da introduces what actually follows from it. A result is a fact, so the verb stays in the indicative; the clitic je ("it") follows da at once.',
        },
        {
          type: 'transform',
          q: 'Say the same with a clause of concession (dopusna rečenica): begin with "Premda".',
          from: 'Najmodavac je obećao popustljivost, ali ugovor je strog.',
          answer: 'Premda je najmodavac obećao popustljivost, ugovor je strog.',
          accept: [
            'Premda je najmodavac obećao popustljivost, ugovor je ipak strog.',
            'Iako je najmodavac obećao popustljivost, ugovor je strog.',
            'Iako je najmodavac obećao popustljivost, ugovor je ipak strog.',
            'Premda je najmodavac obećao popustljivost, strog je ugovor.',
            'Premda je obećao popustljivost najmodavac, ugovor je strog.',
          ],
          hint: 'The conjunction replaces "ali" and moves to the front; the auxiliary of the first clause can no longer stand where it stood.',
          explanation:
            'Premda je najmodavac obećao popustljivost, ugovor je strog. — premda (like iako) introduces a fact in spite of which the main clause holds. The clitic je leans on the conjunction, and a comma closes the fronted clause.',
        },
      ],
    },
    mix: [
      12,
      {
        type: 'tf',
        q: 'In "Toliko je radio da se razbolio" the clause "da se razbolio" states what he intended.',
        answer: false,
        hint: 'Look at the tense after da: can an intention already be a finished fact?',
        explanation:
          'False. It is a clause of result (posljedična rečenica): toliko… da + an ordinary past reports what really followed. An intention would need the present or the conditional: Radio je da zaradi; Radio je kako bi zaradio.',
      },
      10,
      {
        type: 'sort',
        q: 'What does the dependent clause tell you?',
        groups: [
          'The purpose — what for? (namjerna)',
          'The result — what followed? (posljedična)',
          'The concession — despite what? (dopusna)',
        ],
        items: [
          { hr: 'Šapće da ne probudi dijete.', group: 0 },
          { hr: 'Šaptao je tako tiho da ga nitko nije čuo.', group: 1 },
          { hr: 'Premda je šaptao, svi su ga čuli.', group: 2 },
          { hr: 'Otvorila je prozor kako bi prozračila sobu.', group: 0 },
          { hr: 'Prozor je ostao otvoren, tako da je soba hladna.', group: 1 },
          { hr: 'Iako je prozor otvoren, u sobi je zagušljivo.', group: 2 },
        ],
        explanation:
          'Purpose looks forward to an aim and takes da + present or kako + conditional (da ne probudi, kako bi prozračila). Result looks back at a fact and takes the indicative after tako… da or tako da. Concession (premda, iako) names a fact that does not prevent the main clause.',
      },
      14,
      {
        type: 'match',
        q: 'Match each sentence to the kind of clause it contains.',
        pairs: [
          [
            'Tko rano rani, dvije sreće grabi.',
            'subject clause (subjektna) — the clause is the "who"',
          ],
          ['Znam da ćeš doći.', 'object clause (objektna) — the clause is what is known'],
          [
            'To je kuća u kojoj sam odrastao.',
            'attributive clause (atributna) — the clause describes a noun',
          ],
          ['Sjedni gdje ti je udobno.', 'place clause (mjesna) — the clause says where'],
          [
            'Ako požuriš, stići ćeš.',
            'conditional clause (pogodbena) — the clause sets a condition',
          ],
        ],
        explanation:
          'A dependent clause does the job of one part of the main sentence. It can be its subject (Tko rano rani…), its object (da ćeš doći), an attribute of a noun (u kojoj sam odrastao), or an adverbial of place, condition, time, cause and so on (gdje ti je udobno; Ako požuriš).',
      },
      11,
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Whatever he says, do not believe him."',
        words: ['Ma', 'što', 'rekao,', 'nemoj', 'mu', 'vjerovati.'],
        accept: ['Nemoj mu vjerovati ma što rekao.', 'Ma što rekao, vjerovati mu nemoj.'],
        explanation:
          'Ma što rekao, nemoj mu vjerovati. — the concessive family with ma (ma što, ma tko, ma gdje) takes the bare participle with no auxiliary: rekao, not "je rekao". The dative mu follows the stressed nemoj.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("She left earlier in order to catch the train.")',
        words: ['Otišla', 'je', 'ranije', 'kako', 'bi', 'stigne', 'na', 'vlak.'],
        wrong: 5,
        answer: 'stigla',
        hint: 'The conditional is built from bi and one particular verb form — the same one that builds the past tense — and it agrees with the person who left.',
        explanation:
          'Otišla je ranije kako bi stigla na vlak. — kako bi is the conditional, so it needs the participle (stigla), never the present. The present belongs to the other purpose conjunction: da stigne na vlak.',
      },
      6,
      {
        type: 'transform',
        q: 'Keep the purpose, but use the other purpose conjunction — the one built with the conditional.',
        from: 'Govorio je polako da ga svi razumiju.',
        answer: 'Govorio je polako kako bi ga svi razumjeli.',
        accept: [
          'Polako je govorio kako bi ga svi razumjeli.',
          'Govorio je polako kako bi ga razumjeli svi.',
          'Polako je govorio kako bi ga razumjeli svi.',
        ],
        hint: 'The verb after the new conjunction can no longer be a present: it becomes the form that agrees with "svi".',
        explanation:
          'Govorio je polako kako bi ga svi razumjeli. — da + present and kako bi + participle say the same thing; the second is more formal. The participle agrees with the subject of its own clause (svi → razumjeli), and the clitics bi ga follow kako directly.',
      },
      {
        type: 'listen',
        audio:
          'Premda su mu svi govorili da odustane, pisao je ministarstvu svaki tjedan ne bi li mu napokon odgovorili.',
        q: 'What is the speaker saying?',
        options: [
          'He stopped writing to the ministry because everyone told him to give up',
          'He wrote to the ministry every week so that they would not reply to him',
          'He kept writing to the ministry every week in the hope of a reply, although everyone told him to give up',
          'The ministry replied to him every week, although nobody had expected it to',
        ],
        correct: 2,
        explanation:
          'Premda… govorili da odustane — a concession: although everyone kept telling him to give up. ne bi li mu napokon odgovorili — a hoped-for purpose: in the hope that they would finally answer him. The ne negates nothing.',
      },
      {
        type: 'dictate',
        audio: 'Ukoliko ne odgovorite u roku, ugovor se raskida.',
        answer: 'Ukoliko ne odgovorite u roku, ugovor se raskida.',
        hint: 'Eight words from a contract: "If you do not reply by the deadline, the contract is terminated."',
        explanation:
          'Ukoliko ne odgovorite u roku, ugovor se raskida. — ukoliko is the formal conjunction of condition found in legal and administrative texts; in conversation the same clause would begin with ako.',
      },
    ],
  },

  // ── Verbal nouns & participles ─────────────────────────────────────────────
  'verbal-nouns': {
    text: {
      kind: 'text',
      title: 'Jezik naših obavijesti',
      lines: [
        {
          hr: 'Na ulazu u našu zgradu osvanula je jučer obavijest koju sam morala pročitati triput: „Radi izvođenja radova na uređenju pročelja mole se stanari za uklanjanje vozila iz dvorišta.”',
          en: 'At the entrance to our building a notice appeared yesterday that I had to read three times: “For the purpose of the carrying out of works on the renovation of the façade, tenants are asked for the removal of vehicles from the courtyard.”',
        },
        {
          hr: 'Tri glagolske imenice u jednoj rečenici, a od glagola samo ono „mole se” — kao da se pisac bojao da će ga netko zateći u radnji.',
          en: 'Three verbal nouns in one sentence, and the only verb is that “are asked” — as if the writer were afraid that somebody might catch him in the act.',
        },
        {
          hr: 'A moglo se reći jednostavno: „Uređujemo pročelje, pa vas molimo da uklonite automobile iz dvorišta.”',
          en: 'And it could have been said simply: “We are renovating the façade, so we ask you to move your cars out of the courtyard.”',
        },
        {
          hr: 'Ne kažem da su glagolske imenice zlo; bez pušenja, parkiranja i plaćanja ne bi bilo ni zabrana ni računa.',
          en: 'I am not saying that verbal nouns are an evil; without smoking, parking and paying there would be neither bans nor bills.',
        },
        {
          hr: 'Čitanje knjiga, učenje jezika i putovanje vlakom zvuče sasvim prirodno, jer imenuju radnju o kojoj nešto želimo reći.',
          en: 'The reading of books, the learning of languages and traveling by train sound perfectly natural, because they name an action that we want to say something about.',
        },
        {
          hr: 'Nevolja počinje kad se nižu jedna za drugom: „provođenje postupka utvrđivanja prava na ostvarivanje naknade” izraz je koji nitko ne izgovara, a svi ga potpisujemo.',
          en: 'The trouble begins when they are strung one after another: “the conducting of the procedure of the establishing of the right to the obtaining of compensation” is a phrase that nobody says aloud and all of us sign.',
        },
        {
          hr: 'Čitajući takve dopise, čovjek stječe dojam da se u našim uredima ništa ne radi, nego se sve samo „vrši”, „provodi” i „obavlja”.',
          en: 'Reading such letters, one gets the impression that in our offices nothing is ever done; everything is merely “performed,” “conducted” and “carried out.”',
        },
        {
          hr: 'Vrši se pregled, provodi se ispitivanje, obavlja se plaćanje — premda bi bilo dovoljno reći da netko pregledava, ispituje i plaća.',
          en: 'An inspection is performed, an examination is conducted, a payment is carried out — although it would be enough to say that somebody inspects, examines and pays.',
        },
        {
          hr: 'Vrativši se s puta, zatekla sam u sandučiću i poziv na „preuzimanje pošiljke”, napisan istim tim stilom.',
          en: 'Having returned from a trip, I also found in my mailbox an invitation to “the collection of a parcel,” written in that very same style.',
        },
        {
          hr: 'Odlučila sam stoga upravitelju zgrade poslati ispravljenu obavijest, sročenu glagolima — pa da vidimo hoće li stanari brže ukloniti automobile.',
          en: 'I have therefore decided to send the building manager a corrected notice, worded with verbs — and let us see whether the tenants move their cars any faster.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the text: what exactly is the columnist objecting to?',
          options: [
            'To verbal nouns as such, which she would ban from public notices',
            'To tenants who ignore notices and leave their cars in the courtyard',
            'To verbal nouns strung one after another where plain verbs would say the same thing',
            'To notices that are too polite and too long to be read',
          ],
          correct: 2,
          hint: 'She defends some verbal nouns explicitly. Recall where, in her words, "the trouble begins".',
          explanation:
            'She says outright that verbal nouns are no evil (pušenje, parkiranje, plaćanje; čitanje knjiga). Her target is the chain — provođenje postupka utvrđivanja prava… — and the empty verbs vršiti, provoditi, obavljati that such nouns drag along.',
        },
        {
          q: 'One says "čitati knjige", with the accusative. Why does the columnist write "čitanje knjiga"?',
          options: [
            'Because a verbal noun is a noun and cannot govern the accusative: the object of the verb is attached to it in the genitive',
            'Because knjiga is here a nominative singular, the subject of the sentence',
            'Because čitanje demands the partitive: "some books", not all of them',
            'Because every noun in -nje is followed by the instrumental, except with books',
          ],
          correct: 0,
          hint: 'Compare "pisac knjiga", "prodaja knjiga": which case links one noun to another?',
          explanation:
            'A verbal noun keeps the meaning of the verb but has the grammar of a noun. Nouns do not take direct objects, so the object appears as a genitive: čitati knjige → čitanje knjiga (genitive plural, which here happens to look like the nominative singular), učiti jezike → učenje jezika.',
        },
        {
          type: 'type',
          q: 'Now you. From the verbal style to the nominal one: "Zabranjeno je hraniti golubove." → Zabranjeno je ____ golubova.',
          answer: 'hranjenje',
          hint: 'A neuter noun from the imperfective verb: in verbs in -iti the last consonant of the stem merges with the j of the suffix, as in nositi → nošenje.',
          explanation:
            'hraniti → hranjenje: verbs in -iti build the noun with -jenje, and n + j gives nj. The object golubove moves into the genitive, golubova, because a noun cannot govern the accusative.',
        },
        {
          type: 'transform',
          q: 'Rewrite the notice with a verb instead of the verbal noun: begin with "Molimo stanare da…".',
          from: 'Mole se stanari za uklanjanje vozila iz dvorišta.',
          answer: 'Molimo stanare da uklone vozila iz dvorišta.',
          accept: [
            'Molimo stanare da vozila uklone iz dvorišta.',
            'Molimo stanare da iz dvorišta uklone vozila.',
          ],
          hint: 'The noun hides a request for one completed act. After da the verb is a perfective present in the third person plural, and its object returns to the case it had with the verb.',
          explanation:
            'Molimo stanare da uklone vozila iz dvorišta. — the verbal noun uklanjanje is unpacked into a clause: da + present of the perfective ukloniti (one act, to be completed), and vozila is again a direct object in the accusative.',
        },
        {
          type: 'transform',
          q: 'Condense the first clause into a verbal adverb (glagolski prilog).',
          from: 'Kad je pročitala obavijest, nasmijala se.',
          answer: 'Pročitavši obavijest, nasmijala se.',
          accept: ['Nasmijala se pročitavši obavijest.', 'Pročitavši obavijest, ona se nasmijala.'],
          hint: 'The reading was finished before the laughing began. The form for a completed earlier action is built on the infinitive stem of the perfective verb, and it does not change for gender.',
          explanation:
            'Pročitavši obavijest, nasmijala se. — the past verbal adverb (glagolski prilog prošli, -vši) condenses a clause of earlier action. It is possible only because the same person read and laughed; it has one form for all genders and numbers.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'In "Pjevajući u zboru, upoznala je budućeg muža" the person who sang and the person who met her future husband must be the same.',
        answer: true,
        hint: 'A verbal adverb has no subject of its own. Where does it get one?',
        explanation:
          'True. A verbal adverb (pjevajući, upoznavši) borrows its subject from the main clause, so the two actions must share one doer. "Pjevajući u zboru, upoznao ju je budući muž" would make the husband the singer.',
      },
      9,
      {
        type: 'sort',
        q: 'What kind of word is it?',
        groups: [
          'Verbal noun — names the action (glagolska imenica)',
          'Passive participle — what was done to something (glagolski pridjev trpni)',
          'Verbal adverb — an accompanying action (glagolski prilog)',
        ],
        items: [
          { hr: 'putovanje', group: 0 },
          { hr: 'zatvorena', group: 1 },
          { hr: 'smiješeći se', group: 2 },
          { hr: 'otkriće', group: 0 },
          { hr: 'potpisan', group: 1 },
          { hr: 'rekavši', group: 2 },
        ],
        explanation:
          'Verbal nouns are neuter nouns in -nje or -će (putovanje, otkriće). Passive participles end in -n or -t and agree like adjectives (zatvorena, potpisan). Verbal adverbs end in -ći (present: smiješeći se) or -vši (past: rekavši) and never change.',
      },
      10,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Čitajući pismo, plakala je.', 'She cried while reading the letter.'],
          ['Pročitavši pismo, zaplakala je.', 'Having read the letter, she burst into tears.'],
          ['Pismo je pročitano naglas.', 'The letter was read aloud.'],
          ['Čitanje pisma trajalo je sat vremena.', 'The reading of the letter took an hour.'],
          [
            'Pročitano pismo vratila je u omotnicu.',
            'She put the letter she had read back into the envelope.',
          ],
        ],
        explanation:
          'One verb, four forms: čitajući (at the same time), pročitavši (first that, then the main action), pročitano (passive participle — in the predicate or, like an adjective, before its noun) and čitanje (the act itself, with its object in the genitive: pisma).',
      },
      11,
      3,
      {
        type: 'order',
        q: 'Put the words in order: "Having returned home, he fell asleep at once."',
        words: ['Vrativši', 'se', 'kući,', 'odmah', 'je', 'zaspao.'],
        accept: [
          'Vrativši se kući, zaspao je odmah.',
          'Odmah je zaspao vrativši se kući.',
          'Zaspao je odmah vrativši se kući.',
          'Kući se vrativši, odmah je zaspao.',
        ],
        explanation:
          'Vrativši se kući, odmah je zaspao. — the reflexive se stays with the verbal adverb it belongs to, and the auxiliary je takes second position in its own clause, after odmah.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("After the reading of the verdict, the courtroom fell silent.")',
        words: ['Nakon', 'čitanje', 'presude', 'sudnica', 'je', 'utihnula.'],
        wrong: 1,
        answer: 'čitanja',
        hint: 'A verbal noun declines like any neuter noun, and this preposition governs one case only.',
        explanation:
          'Nakon čitanja presude sudnica je utihnula. — nakon takes the genitive, and a verbal noun must show it: čitanje → čitanja. Its own object, presude, is a genitive as well.',
      },
      7,
      {
        type: 'transform',
        q: 'Say it with a verbal noun instead of the infinitive.',
        from: 'Zabranjeno je fotografirati izložene slike.',
        answer: 'Zabranjeno je fotografiranje izloženih slika.',
        accept: [
          'Fotografiranje izloženih slika je zabranjeno.',
          'Fotografiranje izloženih slika zabranjeno je.',
          'Fotografiranje je izloženih slika zabranjeno.',
        ],
        hint: 'Two things change: the verb becomes a neuter noun, and its object — adjective included — can no longer stay in the accusative.',
        explanation:
          'Zabranjeno je fotografiranje izloženih slika. — fotografirati → fotografiranje; the object izložene slike becomes a genitive plural, izloženih slika, because a noun attaches its object in the genitive.',
      },
      {
        type: 'listen',
        audio:
          'Ne saslušavši do kraja obrazloženje presude, optuženi je napustio sudnicu, što je sutkinja ocijenila kao nepoštovanje suda.',
        q: 'What is the speaker saying?',
        options: [
          'The defendant listened to the whole explanation and then left, which the judge allowed',
          'The defendant walked out before the reasons for the verdict had been fully read, which the judge deemed contempt of court',
          'The judge left the courtroom before explaining the verdict to the defendant',
          'The defendant was removed from the courtroom for interrupting the judge',
        ],
        correct: 1,
        explanation:
          'Ne saslušavši do kraja — a negated past verbal adverb: without having heard out. obrazloženje (the statement of reasons) and nepoštovanje (disrespect, here contempt) are verbal nouns, each with its object in the genitive: presude, suda.',
      },
      {
        type: 'dictate',
        audio: 'Učenje jezika traži strpljenje.',
        answer: 'Učenje jezika traži strpljenje.',
        hint: 'Four words: "Learning a language takes patience."',
        explanation:
          'Učenje jezika traži strpljenje. — učenje is the subject, a neuter verbal noun; jezika is its object in the genitive (učiti jezik → učenje jezika).',
      },
    ],
  },

  // ── Ima ljudi koji… — Stalo mi je do tebe ──────────────────────────────────
  'emphatic-genitive-stalo': {
    text: {
      kind: 'dialogue',
      title: 'Djedova kuća',
      lines: [
        {
          who: 'Marta',
          hr: 'Tomislave, čula sam da si djedovu kuću već ponudio nekom posredniku. Zar ti do nje nije nimalo stalo?',
          en: 'Tomislav, I heard that you have already offered Grandpa’s house to some agent. Don’t you care about it at all?',
        },
        {
          who: 'Tomislav',
          hr: 'Stalo mi je, ali još mi je više stalo do toga da se nas dvoje ne posvađamo oko nje kao što su se posvađali naši stričevi.',
          en: 'I do care, but I care even more that the two of us do not fall out over it the way our uncles did.',
        },
        {
          who: 'Marta',
          hr: 'Lijepe li brige! Da ti je doista do mira u obitelji, najprije bi nazvao mene, a ne posrednika.',
          en: 'What touching concern! If you were really after peace in the family, you would have called me first, not the agent.',
        },
        {
          who: 'Tomislav',
          hr: 'Imaš pravo, žao mi je što sam požurio. Ali budimo iskreni: kuća je puna vlage, krov prokišnjava, a u selu više nema ni trgovine ni ljudi.',
          en: 'You are right, I am sorry I rushed. But let us be honest: the house is full of damp, the roof leaks, and in the village there is no longer either a store or any people.',
        },
        {
          who: 'Marta',
          hr: 'Ima ljudi, samo ih ti ne viđaš jer dolaziš jednom u pet godina. Lani je na proštenju bilo i mladih obitelji s djecom.',
          en: 'There are people; you just do not see them, because you come once every five years. Last year at the parish fair there were young families with children, too.',
        },
        {
          who: 'Tomislav',
          hr: 'Nije mi do prepirke, Marta. Sit sam obiteljskih svađa, a željan sam jedino toga da ovo riješimo kao odrasli ljudi.',
          en: 'I am in no mood for an argument, Marta. I am fed up with family quarrels, and all I long for is that we settle this like adults.',
        },
        {
          who: 'Marta',
          hr: 'Onda me saslušaj. Meni je žao svakoga ljeta koje nismo proveli ondje, i ne držim do ponuda ljudi koji u toj kući vide samo zemljište.',
          en: 'Then hear me out. I regret every summer we did not spend there, and I set no store by offers from people who see nothing in that house but a plot of land.',
        },
        {
          who: 'Tomislav',
          hr: 'A tko će je obnavljati? Od obećanja koja si lani dala nema ni traga ni glasa.',
          en: 'And who is going to renovate it? There is neither hide nor hair of the promises you made last year.',
        },
        {
          who: 'Marta',
          hr: 'Čudnoga li čovjeka! Lani sam ti poslala tri ponude majstora, a ti nisi odgovorio ni na jednu.',
          en: 'What a strange man! Last year I sent you three contractors’ estimates, and you did not answer a single one.',
        },
        {
          who: 'Tomislav',
          hr: 'Dobro, pošalji mi ih opet. Ako ti je toliko stalo do te kuće, pogledat ću ih još večeras — ali ništa ne obećavam.',
          en: 'All right, send them to me again. If you care that much about that house, I will look at them this very evening — but I promise nothing.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Marta hold against her brother at the start, and how does he defend himself?',
          options: [
            'That he never visits the village; he says he has no time',
            'That he offered the house to an agent without calling her; he says he wanted to avoid a family quarrel',
            'That he ignored the contractors; he says their estimates were too high',
            'That he wants to renovate the house alone; he says she broke her promises',
          ],
          correct: 1,
          hint: 'Her first sentence names what he did; his first answer names what he cares about even more than the house.',
          explanation:
            'He has already offered the house to an agent (ponudio nekom posredniku). His defense: još mi je više stalo do toga da se nas dvoje ne posvađamo — he cares even more that they do not quarrel as their uncles did.',
        },
        {
          q: 'Marta says "Ima ljudi, samo ih ti ne viđaš." Why "ima ljudi", and not "ljudi su"?',
          options: [
            'Because imati always takes its object in the genitive',
            'Because ljudi is a nominative here and ima agrees with the village',
            'Because with ima, nema and bilo je the thing whose existence is asserted stands in the genitive ("there are some"), and a genitive cannot make the verb agree, so the verb stays in the third person singular',
            'Because the sentence continues with a negation, and negation spreads the genitive backward',
          ],
          correct: 2,
          hint: 'Compare "Imam ljude koji mi pomažu" with "Ima ljudi koji pomažu". In which of them is somebody the owner?',
          explanation:
            'Existential ima ("there is, there are") is impersonal: what exists stands in the genitive and the verb does not agree with it — Ima ljudi, Bilo je mladih obitelji. Ordinary imati ("to have") takes the accusative: Imam ljude.',
        },
        {
          type: 'type',
          q: 'Now you. Tomislav gives in: Marta, i meni je stalo do ____. (naša obitelj — two words)',
          answer: 'naše obitelji',
          hint: 'The preposition in this expression governs one case only — the one that answers "koga? čega?" — and both words must show it.',
          explanation:
            'Stalo mi je do naše obitelji. — do always takes the genitive; the person who cares stands in the dative (meni, mi), and the verb is impersonal: stalo je.',
        },
        {
          type: 'transform',
          q: 'Say the same with the expression "Nije mi do…" (I am not in the mood for…).',
          from: 'Ne da mi se večeras izlaziti.',
          answer: 'Večeras mi nije do izlaska.',
          accept: [
            'Nije mi večeras do izlaska.',
            'Nije mi do izlaska večeras.',
            'Nije mi do izlaska.',
            'Večeras mi nije do izlaženja.',
            'Nije mi večeras do izlaženja.',
            'Nije mi do izlaženja večeras.',
            'Nije mi do izlaženja.',
          ],
          hint: 'The expression needs a noun, not an infinitive: the noun for "going out", in the case the preposition demands.',
          explanation:
            'Večeras mi nije do izlaska. — biti do + genitive with a dative person: nije mi do… = I do not feel like…. The infinitive izlaziti gives way to a noun in the genitive (izlazak → izlaska).',
        },
        {
          type: 'transform',
          q: 'Turn the statement into an exclamation with the emphatic genitive (emfatički genitiv) and "li".',
          from: 'To je lijepa kuća.',
          answer: 'Lijepe li kuće!',
          hint: 'The adjective comes first, then li, then the noun — and both are in the singular of the case that answers "koga? čega?".',
          explanation:
            'Lijepe li kuće! — the emphatic genitive: adjective + li + noun, both in the genitive, with no verb at all. It expresses admiration or, as when Marta says Lijepe li brige!, irony.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: '"Bilo je ljudi koji su se bunili" and "Bili su ljudi koji su se bunili" say exactly the same thing.',
        answer: false,
        hint: 'Look at the verb. In which sentence does "ljudi" make it agree — and what does a genitive that controls nothing express?',
        explanation:
          'False. Bilo je ljudi… (genitive, neuter singular verb) asserts existence: there were some who protested. In Bili su ljudi… the noun is a nominative subject and the verb agrees with it: it is a statement about particular people ("they were people who…"), not about there being some.',
      },
      12,
      8,
      {
        type: 'sort',
        q: 'What is the speaker saying about themselves?',
        groups: ['I care about it', 'I am not in the mood for it', 'I have had enough of it'],
        items: [
          { hr: 'Stalo mi je do pravde.', group: 0 },
          { hr: 'Držim do zadane riječi.', group: 0 },
          { hr: 'Nije mi do šale.', group: 1 },
          { hr: 'Danas mi nije do razgovora.', group: 1 },
          { hr: 'Sit sam praznih obećanja.', group: 2 },
          { hr: 'Dosta mi je izlika.', group: 2 },
        ],
        explanation:
          'All six take the genitive. stalo mi je do and držati do say what one values; nije mi do says what one does not feel like; sit sam and dosta mi je, with a bare genitive and no preposition, say what one is fed up with.',
      },
      13,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Žao mi ga je.', 'I feel sorry for him.'],
          ['Žao mi je što je otišao.', 'I am sorry that he left.'],
          ['Nije mi žao truda.', 'I do not begrudge the effort.'],
          ['Žali Bože truda!', 'What a waste of effort!'],
          ['Njemu je samo do zarade.', 'He is only after profit.'],
        ],
        explanation:
          'žao mi je + a person in the genitive = pity; + a što-clause = the reason for regret; + a thing in the genitive = what one regrets or begrudges. Žali Bože + genitive is a fixed exclamation about something wasted, and biti do + genitive without negation says what somebody is after.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "There was neither hide nor hair of him."',
        words: ['Od', 'njega', 'nije', 'bilo', 'ni', 'traga', 'ni', 'glasa.'],
        accept: [
          'Od njega nije bilo ni glasa ni traga.',
          'Nije bilo od njega ni traga ni glasa.',
          'Nije od njega bilo ni traga ni glasa.',
          'Ni traga ni glasa nije bilo od njega.',
          'Ni traga ni glasa od njega nije bilo.',
          'Od njega ni traga ni glasa nije bilo.',
        ],
        explanation:
          'Od njega nije bilo ni traga ni glasa. — negated existence puts what is missing in the genitive (traga, glasa) and the verb in the neuter singular (nije bilo). ni traga ni glasa is a fixed pair: not a trace, not a sound.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Many people came to the funeral.")',
        words: ['Na', 'sprovod', 'je', 'došli', 'mnogo', 'ljudi.'],
        wrong: 3,
        answer: 'došlo',
        hint: 'The subject is a quantity word followed by a genitive. Nothing in it is a nominative plural for the participle to copy.',
        explanation:
          'Na sprovod je došlo mnogo ljudi. — a quantity with the genitive cannot control agreement, so the verb takes the neutral form: third person singular, neuter participle.',
      },
      14,
      {
        type: 'transform',
        q: 'Say it with the adjective "pun": make the hall the subject.',
        from: 'U dvorani ima mnogo studenata.',
        answer: 'Dvorana je puna studenata.',
        accept: ['Dvorana je prepuna studenata.', 'Puna je dvorana studenata.'],
        hint: 'The adjective agrees with its new subject, and what fills the hall follows in a bare case — no preposition.',
        explanation:
          'Dvorana je puna studenata. — pun (like prepun, sit, željan, svjestan) takes a bare genitive. A preposition here ("puna sa studentima") is not Croatian.',
      },
      {
        type: 'listen',
        audio:
          'Nije mu bilo do slavlja: koliko god su ga nagovarali, ostao je kod kuće, a o razlozima nije htio ni riječi reći.',
        q: 'What is the speaker saying?',
        options: [
          'He was in no mood to celebrate; however much they urged him, he stayed home and would not say a word about why',
          'He cared a great deal about the celebration, but they persuaded him to stay home',
          'He stayed home because nobody had told him the reasons for the celebration',
          'He went to the celebration, but did not say a word to anyone there',
        ],
        correct: 0,
        explanation:
          'Nije mu bilo do slavlja — he did not feel like celebrating (biti do + genitive, here in the past, with a neuter singular verb). ni riječi reći — a genitive under negation: not to say so much as a word.',
      },
      {
        type: 'dictate',
        audio: 'Stalo joj je do istine.',
        answer: 'Stalo joj je do istine.',
        hint: 'Five words: "She cares about the truth."',
        explanation:
          'Stalo joj je do istine. — the person who cares is a dative clitic (joj) in second position, the verb is impersonal (stalo je), and do takes the genitive: istine.',
      },
    ],
  },

  // ── Case at the margins ────────────────────────────────────────────────────
  'padezne-suptilnosti': {
    text: {
      kind: 'text',
      title: 'Pismo s otoka',
      lines: [
        {
          hr: 'Draga Jasna, pišem ti iz Komiže, kamo smo stigli tek sinoć jer je trajekt satima čekao da se more smiri.',
          en: 'Dear Jasna, I am writing to you from Komiža, where we arrived only last night because the ferry waited for hours for the sea to calm down.',
        },
        {
          hr: 'Jutros smo krenuli starom stazom prema uvali; hodali smo najprije vinogradima, a zatim strmom obalom, sve dok nismo ugledali kuću o kojoj sam ti pričala.',
          en: 'This morning we set off along the old path toward the cove; we walked first through vineyards and then along the steep shore, until we caught sight of the house I told you about.',
        },
        {
          hr: 'Dočekao nas je vlasnik, čovjek visoka rasta i tiha glasa, koji nas je bez ijednoga pitanja posjeo za stol pod smokvom.',
          en: 'We were met by the owner, a man of tall stature and quiet voice, who sat us down at a table under the fig tree without asking a single question.',
        },
        {
          hr: 'Natočio nam je vina, iznio kruha i maslina i rekao neka se poslužimo kao kod svoje kuće.',
          en: 'He poured us some wine, brought out some bread and olives and told us to help ourselves as if we were at home.',
        },
        {
          hr: 'Ispričao nam je da mu je žena umrla prije tri zime i da mu je sin u Njemačkoj, pa ljeti iznajmljuje sobe da ne bude sam.',
          en: 'He told us that his wife had died three winters ago and that his son is in Germany, so in the summer he rents out rooms in order not to be alone.',
        },
        {
          hr: 'Danju lovi ribu, a večerima sjedi pred kućom i sluša radio; subotom se spušta u mjesto po novine i brašno.',
          en: 'By day he fishes, and in the evenings he sits in front of the house and listens to the radio; on Saturdays he goes down to the village for the newspaper and flour.',
        },
        {
          hr: 'Ostali smo cijelo poslijepodne, a kad smo htjeli platiti, samo je odmahnuo rukom.',
          en: 'We stayed the whole afternoon, and when we wanted to pay, he just waved it off.',
        },
        {
          hr: 'Sutra ćemo, ako nas vrijeme posluži, brodom do Biševa, a u petak se vraćamo istim putem kojim smo i došli.',
          en: 'Tomorrow, if the weather holds, we will go by boat to Biševo, and on Friday we return the same way we came.',
        },
        {
          hr: 'Djeci je ovdje lijepo kao nikad: cijeli su dan u moru i ne pitaju ni za mobitel ni za televiziju.',
          en: 'The children are happier here than ever: they are in the sea all day and ask for neither their cell phones nor the television.',
        },
        {
          hr: 'Čuvaj mi se i javi se čim stigneš — voli te tvoja Iva.',
          en: 'Take care of yourself and get in touch as soon as you can — love, your Iva.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the letter: why does the owner rent out rooms in the summer?',
          options: [
            'Because fishing no longer brings in enough money',
            'Because his son, who lives abroad, asked him to',
            'So as not to be alone: his wife has died and his son lives in Germany',
            'So that he can sell his wine and olives to the guests',
          ],
          correct: 2,
          hint: 'Recall the two facts he tells about his family, and the short purpose clause that ends that sentence.',
          explanation:
            'da mu je žena umrla… i da mu je sin u Njemačkoj, pa ljeti iznajmljuje sobe da ne bude sam. The dative mu marks him as the person affected: his wife, his son.',
        },
        {
          q: 'Iva writes "Natočio nam je vina, iznio kruha i maslina." No verb or preposition here demands the genitive. Why is it used?',
          options: [
            'Because natočiti and iznijeti always govern the genitive',
            'Because it is the partitive genitive: an unspecified amount ("some wine, some bread"), where the accusative would present a definite whole',
            'Because the dative nam forces the object into the genitive',
            'Because the sentence is negative in meaning',
          ],
          correct: 1,
          hint: 'What would change if the host had brought out "kruh" — the loaf that both of them know about?',
          explanation:
            'The partitive genitive (dijelni genitiv) stands with nouns of substance or with plurals to mean "some": vina, kruha, maslina. Nothing governs it; the case itself carries the meaning. Natočio nam je vino would be the particular wine already spoken of.',
        },
        {
          type: 'type',
          q: 'Now you. Describe his late wife the way Iva describes him: Bila je to žena ____. (blaga narav — of a gentle nature; two words)',
          answer: 'blage naravi',
          hint: 'A quality that characterizes a person is added in a bare case, with no preposition — the case in which Iva puts the host’s stature and voice. The adjective cannot be left out.',
          explanation:
            'žena blage naravi — the genitive of quality (genitiv svojstva): a noun with an obligatory adjective, in the genitive, describes another noun, exactly like čovjek visoka rasta i tiha glasa.',
        },
        {
          type: 'transform',
          q: 'Say it the Croatian way: drop the possessive and show the person affected with a short pronoun.',
          from: 'Njegov je otac umro lani.',
          answer: 'Lani mu je umro otac.',
          accept: [
            'Umro mu je otac lani.',
            'Otac mu je umro lani.',
            'Otac mu je lani umro.',
            'Lani mu je otac umro.',
            'Umro mu je lani otac.',
          ],
          hint: 'The pronoun stands in the case that answers "komu?" and, being a clitic, takes second position — before the auxiliary.',
          explanation:
            'Lani mu je umro otac. — with family, body and belongings Croatian prefers the dative of the person concerned to a possessive: the event is presented as something that happened to him. The clitic order is dative, then je.',
        },
        {
          type: 'transform',
          q: 'Say that it happens every week on that day — with one word instead of "svake nedjelje".',
          from: 'Svake nedjelje idemo k baki na ručak.',
          answer: 'Nedjeljom idemo k baki na ručak.',
          accept: [
            'Nedjeljom idemo baki na ručak.',
            'Idemo nedjeljom k baki na ručak.',
            'K baki idemo nedjeljom na ručak.',
            'Nedjeljom k baki idemo na ručak.',
            'Nedjeljom idemo na ručak k baki.',
            'Idemo nedjeljom baki na ručak.',
            'Nedjeljom idemo na ručak baki.',
            'Nedjeljom na ručak idemo k baki.',
            'K baki nedjeljom idemo na ručak.',
          ],
          hint: 'A habit tied to a day of the week puts that day in a bare case, with no preposition — look at how Iva says when the host goes down for the newspaper.',
          explanation:
            'Nedjeljom idemo k baki na ručak. — the instrumental of a day of the week means "every such day": nedjeljom, subotom, utorkom. It needs neither a preposition nor svaki.',
        },
      ],
    },
    mix: [
      6,
      {
        type: 'tf',
        q: 'Iva ends her letter with "Čuvaj mi se". The dative "mi" names the person who is to be looked after.',
        answer: false,
        hint: 'Who is told to take care, and of whom? Then ask what is left for "mi" to do.',
        explanation:
          'False. The person to be looked after is Jasna herself: čuvaj se = take care of yourself. mi is a dative of interest (etički dativ): it adds nothing to the facts and only shows that the speaker is emotionally involved — "take care, for my sake". The same dative is heard in Kako si mi? and Jesi li mi dobro?',
      },
      4,
      {
        type: 'sort',
        q: 'What does the bare instrumental express?',
        groups: [
          'The route — along or through what?',
          'The time — when, or for how long?',
          'The tool or means — with what?',
        ],
        items: [
          { hr: 'Išli smo šumom.', group: 0 },
          { hr: 'Šetali su rivom.', group: 0 },
          { hr: 'Godinama se nismo vidjeli.', group: 1 },
          { hr: 'Utorkom imam probu.', group: 1 },
          { hr: 'Piše nalivperom.', group: 2 },
          { hr: 'Putujemo vlakom.', group: 2 },
        ],
        explanation:
          'With no preposition the instrumental names the space one moves through (šumom, rivom), a stretch or a repeated point of time (godinama, utorkom), or the means (nalivperom, vlakom). Add s/sa and the same case means company instead.',
      },
      5,
      {
        type: 'match',
        q: 'Match each sentence to what its case tells you.',
        pairs: [
          ['Daj mi vode.', 'some of it — an unspecified amount'],
          ['Daj mi vodu.', 'that particular one — the whole of it'],
          ['Sin joj je liječnik.', 'whose he is — the person concerned, in the dative'],
          ['Čovjek široka srca.', 'what he is like — a quality'],
          ['Čekali smo dva sata.', 'how long it lasted'],
        ],
        explanation:
          'vode: partitive genitive. vodu: accusative of a definite object. joj: the dative that does the work of a possessive. široka srca: the genitive of quality, always with an adjective. dva sata: the accusative of duration.',
      },
      8,
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Her brother works in Rijeka." (with the short dative, not "njezin")',
        words: ['Brat', 'joj', 'radi', 'u', 'Rijeci.'],
        accept: [
          'U Rijeci joj radi brat.',
          'Brat joj u Rijeci radi.',
          'U Rijeci joj brat radi.',
          'Radi joj brat u Rijeci.',
        ],
        explanation:
          'Brat joj radi u Rijeci. — the dative clitic joj replaces the possessive njezin and stands in second position, after the first stressed word of the sentence.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("She is a woman of firm will.")',
        words: ['To', 'je', 'žena', 'čvrste', 'volja.'],
        wrong: 4,
        answer: 'volje',
        hint: 'The adjective already stands in the case that a describing phrase needs. Its noun has to follow it there.',
        explanation:
          'To je žena čvrste volje. — the genitive of quality (genitiv svojstva): adjective and noun both stand in the genitive and describe the noun before them. No preposition, and nothing governs the case; a nominative (volja) cannot be attached to žena in this way.',
      },
      7,
      {
        type: 'transform',
        q: 'Say how long it lasted without any preposition.',
        from: 'Kiša je padala tijekom cijele noći.',
        answer: 'Kiša je padala cijelu noć.',
        accept: [
          'Cijelu noć je padala kiša.',
          'Cijelu je noć padala kiša.',
          'Kiša je cijelu noć padala.',
        ],
        hint: 'A stretch of time that an action fills from beginning to end stands in a bare case — the one that answers "koga? što?".',
        explanation:
          'Kiša je padala cijelu noć. — the accusative of duration: cijelu noć, cijeli dan, tri sata. No preposition is needed, and tijekom + genitive belongs to a more formal register.',
      },
      {
        type: 'listen',
        audio:
          'Djed je danima šutio, a onda je jedne večeri, sjedeći pred kućom, zatražio čašu vode i počeo pričati o ratu.',
        q: 'What is the speaker saying?',
        options: [
          'Grandpa talked about the war for days and then fell silent one evening',
          'After days of silence, Grandpa one evening asked for a glass of water and began to talk about the war',
          'Grandpa sat in front of the house every evening and never spoke about the war',
          'One evening Grandpa asked for water, but said nothing for days afterward',
        ],
        correct: 1,
        explanation:
          'danima — the instrumental of a long stretch of time: for days. jedne večeri — the genitive of a point in time: one evening. čašu vode — a measure with the genitive of what is measured.',
      },
      {
        type: 'dictate',
        audio: 'Subotom idemo obalom do svjetionika.',
        answer: 'Subotom idemo obalom do svjetionika.',
        hint: 'Five words: "On Saturdays we walk along the shore to the lighthouse."',
        explanation:
          'Subotom idemo obalom do svjetionika. — two bare instrumentals with two different jobs: subotom says when (every Saturday), obalom says which way.',
      },
    ],
  },

  // ── Two subjects, one verb ─────────────────────────────────────────────────
  'multi-subject-agreement': {
    text: {
      kind: 'dialogue',
      title: 'Svjedokinja pred sudom',
      lines: [
        {
          who: 'Sutkinja',
          hr: 'Gospođo Perić, recite sudu tko je te večeri bio u stanu kad su tužitelj i njegova supruga stigli.',
          en: 'Mrs. Perić, tell the court who was in the apartment that evening when the plaintiff and his wife arrived.',
        },
        {
          who: 'Svjedokinja',
          hr: 'Bile smo moja sestra i ja; sjedile smo u kuhinji i čekale da se vrate, jer su nam ostavili ključ.',
          en: 'My sister and I were there; we were sitting in the kitchen waiting for them to come back, because they had left us the key.',
        },
        {
          who: 'Sutkinja',
          hr: 'Jeste li Vi i tužitelj prije toga bili u sporu oko najamnine?',
          en: 'Had you and the plaintiff been in a dispute over the rent before that?',
        },
        {
          who: 'Svjedokinja',
          hr: 'Nismo. Moj pokojni muž i on godinama su zajedno radili i nikada se nisu posvađali.',
          en: 'We had not. My late husband and he worked together for years and never quarreled.',
        },
        {
          who: 'Sutkinja',
          hr: 'U zapisniku stoji da su vrata i prozor bili otvoreni. Je li to točno?',
          en: 'The record states that the door and the window were open. Is that correct?',
        },
        {
          who: 'Svjedokinja',
          hr: 'Točno je. Kuhinja i hodnik bili su puni dima, pa smo sestra i ja sve otvorile.',
          en: 'It is. The kitchen and the hallway were full of smoke, so my sister and I opened everything.',
        },
        {
          who: 'Sutkinja',
          hr: 'Je li tužitelj u stan ušao sam ili sa suprugom?',
          en: 'Did the plaintiff enter the apartment alone or with his wife?',
        },
        {
          who: 'Svjedokinja',
          hr: 'Ušao je sa suprugom, a odmah za njima ušli su susjed Ante i njegova punica.',
          en: 'He came in with his wife, and right behind them came the neighbor Ante and his mother-in-law.',
        },
        {
          who: 'Sutkinja',
          hr: 'I što su tada tužitelj i susjed rekli jedan drugomu?',
          en: 'And what did the plaintiff and the neighbor say to each other then?',
        },
        {
          who: 'Svjedokinja',
          hr: 'Ništa osobito. Tužiteljeva supruga i susjedova punica tek su se poslije umiješale, a tada smo se sestra i ja povukle u sobu.',
          en: 'Nothing in particular. The plaintiff’s wife and the neighbor’s mother-in-law only got involved later, and at that point my sister and I withdrew to the bedroom.',
        },
        {
          who: 'Sutkinja',
          hr: 'Hvala Vam. Ako ste se Vi i Vaša sestra još čega sjetile, recite to sada.',
          en: 'Thank you. If you and your sister have remembered anything else, say so now.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who was already in the apartment when the plaintiff and his wife arrived?',
          options: [
            'The neighbor Ante and his mother-in-law',
            'The witness and her late husband',
            'The witness and her sister',
            'Nobody: the door and the window had been left open',
          ],
          correct: 2,
          hint: 'The witness answers with a verb form that only a group of women can use.',
          explanation:
            'Bile smo moja sestra i ja; sjedile smo u kuhinji i čekale — two women, one of them the speaker: first person plural, feminine participle.',
        },
        {
          q: 'The judge says "vrata i prozor bili otvoreni". Vrata is a neuter plural and prozor a masculine singular. Why "bili otvoreni"?',
          options: [
            'Because vrata, although it looks neuter, is a masculine noun',
            'Because the predicate copies the last noun, and prozor is masculine plural',
            'Because adjectives like otvoren have no neuter plural',
            'Because subjects of different genders together take a masculine plural predicate, which is the neutral form for a mixed group',
          ],
          correct: 3,
          hint: 'The same thing happens two lines later with a feminine noun and a masculine one: kuhinja i hodnik.',
          explanation:
            'When coordinated subjects differ in gender, a predicate that follows them is normally masculine plural: vrata i prozor bili su otvoreni, kuhinja i hodnik bili su puni. The masculine plural says nothing about the nouns being masculine; it is simply the unmarked form.',
        },
        {
          type: 'type',
          q: 'Now you. The judge asks both sisters: Jeste li Vi i Vaša sestra te večeri ____ televiziju? (gledati)',
          answer: 'gledale',
          hint: 'The auxiliary already shows the person. For the participle ask: how many people, and is there a man among them?',
          explanation:
            'Jeste li Vi i Vaša sestra… gledale — Vi + a third person gives the second person plural (jeste), and since both people are women the participle is feminine plural. Polite Vi alone would take the masculine plural; here there really are two women.',
        },
        {
          type: 'transform',
          q: 'Make the neighbor a second subject instead of company: replace "sa susjedom" with "i susjed".',
          from: 'Tužitelj je sa susjedom izašao na hodnik.',
          answer: 'Tužitelj i susjed izašli su na hodnik.',
          accept: [
            'Tužitelj i susjed su izašli na hodnik.',
            'Na hodnik su izašli tužitelj i susjed.',
            'Izašli su tužitelj i susjed na hodnik.',
          ],
          hint: 'With "sa" the neighbor is only company, and the verb counts one person. Once he joins the subject, both the auxiliary and the participle must count two.',
          explanation:
            'Tužitelj i susjed izašli su na hodnik. — a noun in the instrumental with s/sa is not a subject, so the verb agrees with the nominative alone (je izašao). Two nominatives joined by i form a plural subject: su izašli.',
        },
        {
          type: 'transform',
          q: 'The witness adds herself to the subject: replace "Moja sestra" with "Moja sestra i ja".',
          from: 'Moja sestra je pozvala vatrogasce.',
          answer: 'Moja sestra i ja pozvale smo vatrogasce.',
          accept: [
            'Moja sestra i ja smo pozvale vatrogasce.',
            'Vatrogasce smo pozvale moja sestra i ja.',
          ],
          hint: 'Any group that includes "ja" is "mi". The participle then shows how many they are and who they are — here, two women.',
          explanation:
            'Moja sestra i ja pozvale smo vatrogasce. — the first person outranks the third, so the auxiliary is smo; both subjects are women, so the participle is feminine plural.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: 'When the verb comes BEFORE its subjects, standard Croatian accepts "Stigla je majka i otac" alongside "Stigli su majka i otac".',
        answer: true,
        hint: 'A verb that comes first has, so far, "seen" only one of its subjects.',
        explanation:
          'True. A predicate that precedes coordinated subjects may agree with the nearest one (Stigla je majka i otac) or with the whole group (Stigli su majka i otac); the plural is always safe. Once the predicate follows subjects that are people, it agrees with the group.',
      },
      8,
      {
        type: 'sort',
        q: 'These two are the subject, and the verb follows them. Which participle do they take?',
        groups: ['Masculine plural (radili su)', 'Feminine plural (radile su)'],
        items: [
          { hr: 'učiteljica i ravnatelj', group: 0 },
          { hr: 'kći i unuka', group: 1 },
          { hr: 'liječnik i medicinska sestra', group: 0 },
          { hr: 'susjeda i njezina majka', group: 1 },
          { hr: 'tri konobarice i kuhar', group: 0 },
          { hr: 'baka, teta i sestrična', group: 1 },
        ],
        explanation:
          'One masculine subject is enough for the masculine plural, however many women stand beside him (učiteljica i ravnatelj; tri konobarice i kuhar). The feminine plural needs every subject to be feminine (kći i unuka). Two neuter subjects are left out on purpose: there usage wavers between the neuter plural (tele i ždrijebe bila su…) and the masculine plural.',
      },
      9,
      {
        type: 'match',
        q: 'Match each subject to the form of "biti" it takes.',
        pairs: [
          ['ti i ja', 'smo'],
          ['ti i tvoj brat', 'ste'],
          ['ona i njezin muž', 'su'],
          ['Marko, zajedno sa sestrom,', 'je'],
        ],
        explanation:
          'The first person outranks the second, and the second outranks the third: ti i ja = mi (smo), ti i tvoj brat = vi (ste), ona i njezin muž = oni (su). sa sestrom is company in the instrumental, not a subject, so the verb stays singular with Marko.',
      },
      11,
      6,
      {
        type: 'order',
        q: 'Put the words in order: "My mother and I were at the market." (a woman speaking)',
        words: ['Majka', 'i', 'ja', 'bile', 'smo', 'na', 'tržnici.'],
        accept: [
          'Majka i ja smo bile na tržnici.',
          'Na tržnici smo bile majka i ja.',
          'Bile smo na tržnici majka i ja.',
          'Bile smo majka i ja na tržnici.',
          'Ja i majka bile smo na tržnici.',
          'Ja i majka smo bile na tržnici.',
          'Na tržnici smo bile ja i majka.',
        ],
        explanation:
          'Majka i ja bile smo na tržnici. — majka i ja is "mi", so the auxiliary is smo; both are women, so the participle is bile. The clitic smo follows either the participle or the whole subject phrase.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Grandma and Grandpa lived in the country.")',
        words: ['Baka', 'i', 'djed', 'živjele', 'su', 'na', 'selu.'],
        wrong: 3,
        answer: 'živjeli',
        hint: 'Count the genders in the subject. The participle may be feminine only on one condition.',
        explanation:
          'Baka i djed živjeli su na selu. — one masculine subject (djed) makes the predicate masculine plural. The feminine plural živjele would be right only if both were women.',
      },
      7,
      {
        type: 'transform',
        q: 'Move the verb behind its subjects.',
        from: 'Stigla je Ana i njezin brat.',
        answer: 'Ana i njezin brat stigli su.',
        accept: ['Ana i njezin brat su stigli.'],
        hint: 'In front of its subjects the verb was allowed to agree with the first of them alone. Behind them it has "seen" both — and one of them is a man.',
        explanation:
          'Ana i njezin brat stigli su. — with people, agreement with the nearest subject is an option only for a verb that comes first. After such subjects the predicate agrees with the whole group: plural, and masculine because of brat.',
      },
      {
        type: 'listen',
        audio:
          'Ravnateljica i njezin zamjenik dugo su se savjetovali, a zatim su roditelji i učenici pozvani u zbornicu.',
        q: 'What is the speaker saying?',
        options: [
          'The principal consulted the parents for a long time and then called her deputy to the staff room',
          'The principal and her deputy conferred for a long time, and then the parents and students were called into the staff room',
          'The parents and students conferred for a long time and then called the principal',
          'The principal’s deputy called the parents, while the principal spoke with the students',
        ],
        correct: 1,
        explanation:
          'Ravnateljica i njezin zamjenik… su se savjetovali — a woman and a man: masculine plural. roditelji i učenici pozvani su — two masculine plurals with a passive participle, also masculine plural.',
      },
      {
        type: 'dictate',
        audio: 'Otac i majka su se vratili kasno.',
        answer: 'Otac i majka su se vratili kasno.',
        hint: 'Seven words: "Father and Mother came back late."',
        explanation:
          'Otac i majka su se vratili kasno. — a masculine and a feminine subject together take the masculine plural: su se vratili.',
      },
    ],
  },

  // ══ UNIT 6 ═════════════════════════════════════════════════════════════════

  // ── Agreement when the subject is complicated ──────────────────────────────
  'slaganje-suptilnosti': {
    text: {
      kind: 'dialogue',
      title: 'Lektura pred zaključenje broja',
      lines: [
        {
          who: 'Lektorica',
          hr: 'Gospodine Horvate, u Vašem izvještaju s prosvjeda piše da „mnogo studenata su stajali pred rektoratom”. To moram ispraviti: mnogo je studenata stajalo.',
          en: 'Mr. Horvat, your report from the protest says “mnogo studenata su stajali pred rektoratom” (many students were standing in front of the rectorate). I have to correct that: “mnogo je studenata stajalo.”',
        },
        {
          who: 'Novinar',
          hr: 'Znam pravilo, ali mi se u žurbi omaklo: kad vidim množinu, ruka mi sama napiše „su”.',
          en: 'I know the rule, but it slipped out in my hurry: when I see a plural, my hand writes “su” all by itself.',
        },
        {
          who: 'Lektorica',
          hr: 'Zato sam ja tu. Dalje pišete da je „nekoliko prosvjednika privedeno” — to je dobro — ali odmah zatim da su „pet policajaca ozlijeđeni”.',
          en: 'That is what I am here for. Further on you write “nekoliko prosvjednika privedeno” (several protesters were detained) — that is fine — but right after that, “pet policajaca ozlijeđeni” (five police officers were injured), with a plural.',
        },
        {
          who: 'Novinar',
          hr: 'Dakle, pet je policajaca ozlijeđeno. A da su bila samo dva?',
          en: 'So: “pet je policajaca ozlijeđeno.” And if there had been only two?',
        },
        {
          who: 'Lektorica',
          hr: 'Tada biste napisali da su dva policajca ozlijeđena: uz dva, tri i četiri glagol je u množini, a pridjev uz imenicu muškoga roda dobiva nastavak -a.',
          en: 'Then you would write that two officers “su ozlijeđena”: with two, three and four the verb is plural, and with a masculine noun the adjective takes the ending -a.',
        },
        {
          who: 'Novinar',
          hr: 'A rečenica „Većina građana podržali su zahtjeve”? Čini mi se prirodnom, jer mislim na ljude, a ne na većinu.',
          en: 'And the sentence “Većina građana podržali su zahtjeve” (the majority of citizens supported the demands)? It seems natural to me, because I am thinking of the people, not of the majority.',
        },
        {
          who: 'Lektorica',
          hr: 'U govoru se to čuje, ali u novinama se glagol slaže s riječju „većina”: većina je građana podržala zahtjeve. Isto vrijedi za „dio”, „niz” i „skupinu”.',
          en: 'You hear that in speech, but in a newspaper the verb agrees with the word “većina”: “većina je građana podržala zahtjeve.” The same goes for “dio,” “niz” and “skupina.”',
        },
        {
          who: 'Novinar',
          hr: 'Još jedno pitanje, kad ste već tu. Dekanici sam u intervjuu napisao: „Vi ste, gospođo, bila vrlo otvorena.” Je li to pogreška?',
          en: 'One more question, while you are here. In the interview I wrote to the dean: “Vi ste, gospođo, bila vrlo otvorena.” Is that a mistake?',
        },
        {
          who: 'Lektorica',
          hr: 'Uz Vi iz poštovanja glagol je u množini, pa i glagolski pridjev: „Vi ste bili”. Pridjev se u predikatu katkad slaže po smislu — čuje se i „Vi ste ljubazna” — ali uz „bili” ostavila bih množinu.',
          en: 'With the polite Vi the verb is plural, and so is the participle: “Vi ste bili.” A predicate adjective sometimes agrees by sense — one also hears “Vi ste ljubazna” — but next to “bili” I would keep the plural.',
        },
        {
          who: 'Novinar',
          hr: 'Onda ću ispraviti u „bili ste vrlo otvoreni”. I posljednje: „Djeca su mahala zastavama” ili „Djeca su mahali”?',
          en: 'Then I will change it to “bili ste vrlo otvoreni.” And lastly: is it “Djeca su mahala zastavama” or “Djeca su mahali”?',
        },
        {
          who: 'Lektorica',
          hr: 'Mahala. Djeca i braća zbirne su imenice: glagol uz njih stoji u množini, a glagolski pridjev završava na -a.',
          en: '“Mahala.” Djeca and braća are collective nouns: the verb with them is plural, and the participle ends in -a.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which of the reporter’s sentences did the copy editor leave exactly as it was?',
          options: [
            'The one about many students standing in front of the rectorate',
            'The one about several protesters being detained',
            'The one about five police officers being injured',
            'The one about the majority of citizens supporting the demands',
          ],
          correct: 1,
          hint: 'She interrupts her own list of corrections with three short words of approval.',
          explanation:
            '„nekoliko prosvjednika privedeno” — to je dobro. nekoliko is a quantity word, so the predicate is neuter singular: je privedeno. The other three sentences had a plural where the standard language wants a singular.',
        },
        {
          q: '"Dva su policajca ozlijeđena", but "Pet je policajaca ozlijeđeno". Why the difference?',
          options: [
            'Because two officers are men, and five officers form a mixed group',
            'Because ozlijeđena is feminine: with small numbers the noun changes gender',
            'Because with 2, 3 and 4 the noun keeps an old dual form and counts as a plural subject (plural verb, participle in -a), while from five up the numeral is a quantity word with the genitive plural and the predicate is neuter singular',
            'Because pet is negative in meaning, and negation requires the neuter',
          ],
          correct: 2,
          hint: 'Look at the noun: policajca after dva, policajaca after pet. Only one of them is a genitive plural.',
          explanation:
            'dva, tri, četiri (and oba) take a special counting form of the noun (policajca), which behaves as a plural: su ozlijeđena. From pet upward the numeral works like mnogo or nekoliko — a quantity with the genitive plural — and such a subject gives the neutral agreement: je ozlijeđeno.',
        },
        {
          type: 'type',
          q: 'Now you, in the style of a newspaper: Većina zastupnika ____ protiv zakona. (glasati — perfect, two words)',
          answer: 'je glasala',
          accept: ['glasala je', 'je glasovala', 'glasovala je'],
          hint: 'Find the one word of the subject that is in the nominative. It is a feminine singular noun, whatever follows it.',
          explanation:
            'Većina zastupnika je glasala protiv zakona. — in the written standard the predicate agrees with the head noun većina (feminine singular), not with the genitive zastupnika. Agreement by sense (glasali su) is heard in speech.',
        },
        {
          type: 'transform',
          q: 'Change the number from "pet" to "tri" and adjust everything that depends on it.',
          from: 'Pet studentica je dobilo stipendiju.',
          answer: 'Tri studentice su dobile stipendiju.',
          accept: ['Tri su studentice dobile stipendiju.', 'Tri studentice dobile su stipendiju.'],
          hint: 'Three things move: the form of the noun, the number of the auxiliary, and the ending of the participle — which now shows the gender of the noun.',
          explanation:
            'Tri studentice su dobile stipendiju. — below five the noun is no longer a genitive plural, the verb is plural, and the participle agrees with the noun: feminine plural dobile (with a masculine noun it would end in -a: tri studenta su dobila).',
        },
        {
          type: 'transform',
          q: 'Address the dean (one woman) politely instead of informally.',
          from: 'Ti si to jučer rekla.',
          answer: 'Vi ste to jučer rekli.',
          accept: [
            'Vi ste to rekli jučer.',
            'Jučer ste to Vi rekli.',
            'Jučer ste to rekli.',
            'To ste jučer rekli.',
            'To ste Vi jučer rekli.',
            'Vi ste jučer to rekli.',
          ],
          hint: 'Polite address to one person borrows the grammar of a group: the auxiliary and the participle both follow the pronoun, not the woman.',
          explanation:
            'Vi ste to jučer rekli. — with the polite Vi the verb is in the second person plural and the participle in the masculine plural, even when one woman is addressed. The capital V shows in writing that one person is meant.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: '"Djeca su se igrala u dvorištu" is correct, although "igrala" looks like a feminine singular.',
        answer: true,
        hint: 'Think of how the word declines: djeca, djece, djeci… Which nouns decline like that — and what does the auxiliary tell you?',
        explanation:
          'True. djeca is a collective noun (zbirna imenica) that declines like a feminine singular but means many, so the verb is plural (su) and the participle and adjective end in -a: djeca su se igrala, djeca su vesela. braća and gospoda behave the same way.',
      },
      5,
      {
        type: 'sort',
        q: 'Which predicate does the subject take?',
        groups: [
          'A plural verb: su + participle',
          'A neuter singular verb: je + participle in -lo',
        ],
        items: [
          { hr: 'tri sestre', group: 0 },
          { hr: 'četiri vojnika', group: 0 },
          { hr: 'oba brata', group: 0 },
          { hr: 'sedam dana', group: 1 },
          { hr: 'mnogo gostiju', group: 1 },
          { hr: 'nekoliko minuta', group: 1 },
        ],
        explanation:
          'dva, oba, tri, četiri + noun make a plural subject: tri sestre su otputovale, oba brata su otputovala. From pet upward, and with quantity words such as mnogo, malo, nekoliko, the noun is a genitive plural and the predicate is neuter singular: sedam dana je prošlo.',
      },
      6,
      {
        type: 'match',
        q: 'Match each subject to its predicate.',
        pairs: [
          ['Dva učenika', 'su zakasnila.'],
          ['Dvije učenice', 'su zakasnile.'],
          ['Deset učenika', 'je zakasnilo.'],
          ['Većina učenika', 'je zakasnila.'],
          ['Svi učenici', 'su zakasnili.'],
        ],
        explanation:
          'dva + masculine noun: plural verb, participle in -a. dvije + feminine noun: feminine plural. deset: a quantity, so neuter singular. većina: a feminine singular noun. svi učenici: an ordinary masculine plural.',
      },
      8,
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Many people were left without a job."',
        words: ['Mnogo', 'je', 'ljudi', 'ostalo', 'bez', 'posla.'],
        accept: [
          'Mnogo ljudi je ostalo bez posla.',
          'Mnogo ljudi ostalo je bez posla.',
          'Bez posla je ostalo mnogo ljudi.',
          'Mnogo je ljudi bez posla ostalo.',
          'Bez posla je mnogo ljudi ostalo.',
        ],
        explanation:
          'Mnogo je ljudi ostalo bez posla. — the quantity word mnogo decides the agreement: je ostalo, neuter singular. In careful style the clitic je stands after the first word and splits the phrase mnogo ljudi; after the whole phrase it is equally standard.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Several students passed the exam.")',
        words: ['Nekoliko', 'studenata', 'je', 'položili', 'ispit.'],
        wrong: 3,
        answer: 'položilo',
        hint: 'The auxiliary is already right. The participle must match it — and the word that opens the sentence.',
        explanation:
          'Nekoliko studenata je položilo ispit. — nekoliko is a quantity word; the genitive studenata cannot control agreement, so auxiliary and participle are both in the neutral form: third person singular, neuter.',
      },
      11,
      {
        type: 'transform',
        q: 'Put the subject into the plural: "dijete" → "djeca".',
        from: 'Dijete je zaspalo u autu.',
        answer: 'Djeca su zaspala u autu.',
        accept: ['Djeca su u autu zaspala.', 'U autu su zaspala djeca.'],
        hint: 'The plural of dijete is a collective noun: the auxiliary becomes plural, but the participle does not take the ending you would use for a group of boys and girls.',
        explanation:
          'Djeca su zaspala u autu. — with djeca the auxiliary is plural (su) and the participle ends in -a (zaspala), not in -li. The noun itself declines like a feminine singular: s djecom, o djeci.',
      },
      {
        type: 'listen',
        audio:
          'Na natječaj se javilo više od dvjesto kandidata, ali je samo nekolicina zadovoljila sve uvjete, pa su tri mjesta ostala nepopunjena.',
        q: 'What is the speaker saying?',
        options: [
          'Fewer than two hundred candidates applied, and all of them met the requirements',
          'More than two hundred candidates applied, but only a handful met all the requirements, so three positions remained unfilled',
          'Three candidates applied for more than two hundred positions',
          'More than two hundred positions were filled, and only three candidates were rejected',
        ],
        correct: 1,
        explanation:
          'javilo se više od dvjesto kandidata — a quantity: neuter singular. nekolicina je zadovoljila — a feminine singular noun meaning a small number of people. tri mjesta su ostala nepopunjena — three + a neuter noun: plural verb, participle in -a.',
      },
      {
        type: 'dictate',
        audio: 'Pet autobusa je stiglo na vrijeme.',
        answer: 'Pet autobusa je stiglo na vrijeme.',
        hint: 'Six words: "Five buses arrived on time."',
        explanation:
          'Pet autobusa je stiglo na vrijeme. — from five upward the noun is a genitive plural (autobusa) and the predicate is neuter singular: je stiglo.',
      },
    ],
  },

  // ── Because, and so ────────────────────────────────────────────────────────
  'cause-consequence-clauses': {
    text: {
      kind: 'dialogue',
      title: 'Zašto je most zatvoren?',
      lines: [
        {
          who: 'Novinarka',
          hr: 'Gospodine Vukoviću, most je zatvoren već treći tjedan. Zašto je do zatvaranja došlo tako naglo, bez ikakve najave?',
          en: 'Mr. Vuković, the bridge has been closed for three weeks now. Why did the closure come so suddenly, without any notice?',
        },
        {
          who: 'Inženjer',
          hr: 'Zato što je redoviti pregled pokazao pukotine na dvama nosačima. Kako su se pukotine širile iz dana u dan, nismo smjeli čekati.',
          en: 'Because the regular inspection showed cracks in two girders. Since the cracks were widening day by day, we could not afford to wait.',
        },
        {
          who: 'Novinarka',
          hr: 'Građani se, međutim, žale da su obaviješteni tek kad su rampe već bile spuštene, tako da su mnogi toga jutra zakasnili na posao.',
          en: 'The citizens complain, however, that they were informed only when the barriers were already down, so that many were late for work that morning.',
        },
        {
          who: 'Inženjer',
          hr: 'Razumijem njihovu ljutnju. No oštećenje je bilo toliko ozbiljno da bi i jedan jedini teretni kamion mogao izazvati nesreću.',
          en: 'I understand their anger. But the damage was so serious that even a single freight truck could have caused an accident.',
        },
        {
          who: 'Novinarka',
          hr: 'Je li most oštećen zbog toga što se godinama nije održavao?',
          en: 'Is the bridge damaged because it was not maintained for years?',
        },
        {
          who: 'Inženjer',
          hr: 'Djelomice. Sagrađen je za promet kakav je bio prije pedeset godina, a danas njime dnevno prijeđe toliko vozila da se čelik zamara mnogo brže nego što su projektanti predvidjeli.',
          en: 'In part. It was built for the traffic of fifty years ago, and today so many vehicles cross it every day that the steel fatigues much faster than the designers foresaw.',
        },
        {
          who: 'Novinarka',
          hr: 'S obzirom na to da je obilaznica dulja za dvadeset kilometara, hoće li grad vozačima nadoknaditi troškove?',
          en: 'Given that the detour is twenty kilometers longer, will the city reimburse drivers for their costs?',
        },
        {
          who: 'Inženjer',
          hr: 'O tome ne odlučujem ja. Mogu reći samo da je izvođač izabran bez odgode te su radovi počeli već sljedećega dana.',
          en: 'That is not for me to decide. I can only say that the contractor was chosen without delay, and so the work began the very next day.',
        },
        {
          who: 'Novinarka',
          hr: 'Kada će, dakle, most biti otvoren?',
          en: 'So when will the bridge be open?',
        },
        {
          who: 'Inženjer',
          hr: 'Nosači stižu idući tjedan. Ugradnja traje dvadesetak dana, stoga računamo da će promet krenuti početkom lipnja — pod uvjetom da nas vrijeme posluži.',
          en: 'The girders arrive next week. Installation takes about twenty days, so we expect traffic to start flowing at the beginning of June — provided the weather holds.',
        },
        {
          who: 'Novinarka',
          hr: 'Hvala Vam. Drago mi je što ste građanima napokon objasnili ono što su odavno trebali čuti.',
          en: 'Thank you. I am glad that you have finally explained to the citizens what they should have heard long ago.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what exactly are the citizens complaining about?',
          options: [
            'That the bridge was not maintained for years',
            'That the detour costs them money the city will not reimburse',
            'That they were told only when the barriers were already down, so many were late for work',
            'That the work on the bridge is taking far too long',
          ],
          correct: 2,
          hint: 'The reporter passes on one complaint, and its consequence follows after "tako da".',
          explanation:
            'obaviješteni tek kad su rampe već bile spuštene, tako da su mnogi… zakasnili na posao — the complaint is the late notice; tako da adds what actually resulted from it.',
        },
        {
          q: 'The engineer says "Kako su se pukotine širile iz dana u dan, nismo smjeli čekati." What does "kako" do here, and what makes that reading possible?',
          options: [
            'It gives the cause ("since"); kako can mean this only when its clause comes first — after the main clause it would be read as "how"',
            'It asks a question: how were the cracks spreading?',
            'It introduces a purpose: so that the cracks would spread',
            'It makes a comparison: just as the cracks were spreading',
          ],
          correct: 0,
          hint: 'Try moving the kako-clause behind "nismo smjeli čekati". Does the sentence still mean the same?',
          explanation:
            'Causal kako (uzročna rečenica) must open the sentence: Kako su se pukotine širile, nismo smjeli čekati. Placed after the main clause, kako is understood as manner — "we could not wait (to see) how the cracks were spreading".',
        },
        {
          type: 'type',
          q: 'Now you. The reporter adds: Žao mi je ____ građani nisu obaviješteni ranije.',
          answer: 'što',
          accept: ['jer'],
          hint: 'After an expression of feeling (drago mi je, žao mi je, ljut sam) the reason is introduced by a little word you also know as a question word.',
          explanation:
            'Žao mi je što građani nisu obaviješteni ranije. — after words of feeling the cause is given by a što-clause, as in the reporter’s last line: Drago mi je što ste… objasnili.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one with a clause of result (posljedična rečenica): "The traffic is so heavy that the drive to work takes an hour."',
          from: 'Promet je gust. Vožnja do posla traje sat vremena.',
          answer: 'Promet je tako gust da vožnja do posla traje sat vremena.',
          accept: ['Promet je toliko gust da vožnja do posla traje sat vremena.'],
          hint: 'A word of degree goes in front of the adjective, and the second sentence becomes a clause that keeps its ordinary tense.',
          explanation:
            'Promet je tako gust da vožnja do posla traje sat vremena. — tako (or toliko) + adjective in the main clause, da + indicative in the result clause. A result is a fact, so the verb stays as it was: traje.',
        },
        {
          type: 'transform',
          q: 'Move the cause to the front of the sentence, in formal style: begin with "S obzirom".',
          from: 'Radimo u tri smjene jer je rok kratak.',
          answer: 'S obzirom na to da je rok kratak, radimo u tri smjene.',
          accept: [
            'Budući da je rok kratak, radimo u tri smjene.',
            'Kako je rok kratak, radimo u tri smjene.',
            'Zato što je rok kratak, radimo u tri smjene.',
            'Zbog toga što je rok kratak, radimo u tri smjene.',
          ],
          hint: 'The full connector has five words: a preposition before "obzirom", then another preposition with a pronoun, then the conjunction. A comma closes the fronted clause.',
          explanation:
            'S obzirom na to da je rok kratak, radimo u tri smjene. — the standard connector is s obzirom na to da; the clipped "obzirom da" is not. In careful writing a jer-clause follows the main clause, so a cause placed first needs another connector.',
        },
      ],
    },
    mix: [
      9,
      10,
      {
        type: 'sort',
        q: 'What does the clause introduced by the connector give?',
        groups: ['The cause — why?', 'The result — what followed?'],
        items: [
          { hr: 'Zato što je bio umoran, nije vozio.', group: 0 },
          { hr: 'Kako nije imao ključ, pozvonio je.', group: 0 },
          { hr: 'Budući da je kasnio, ostao je bez mjesta.', group: 0 },
          { hr: 'Drago mi je što si došla.', group: 0 },
          { hr: 'Snijeg je pao tako da je cesta zatvorena.', group: 1 },
          { hr: 'Bio je toliko umoran da je zaspao za stolom.', group: 1 },
          { hr: 'Vikao je tako glasno da su se susjedi probudili.', group: 1 },
        ],
        explanation:
          'A causal clause (uzročna rečenica) answers "why?": zato što, budući da, kako at the head of the sentence, što after a word of feeling. A clause of result (posljedična rečenica) states what followed: tako da, or tako/toliko… da.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("The flight was canceled because of fog.")',
        words: ['Let', 'je', 'otkazan', 'jer', 'magle.'],
        wrong: 3,
        answer: 'zbog',
        hint: 'A conjunction needs a clause with a verb behind it. What follows here is a bare noun in the genitive — and a noun is linked by a preposition.',
        explanation:
          'Let je otkazan zbog magle. — a cause can be a clause or a noun phrase, and each has its own connector: a conjunction introduces a clause (… jer je bila magla), a preposition takes a noun (zbog + genitive). The two cannot be swapped.',
      },
      {
        type: 'match',
        q: 'Match the two halves of each sentence.',
        pairs: [
          ['Bilo je toliko hladno', 'da se jezero zaledilo.'],
          ['Zahvaljujući tome što su nam svi pomogli,', 'selidbu smo završili u jednom danu.'],
          ['Kako je sutra praznik,', 'trgovine neće raditi.'],
          ['Ljut sam na njega zato', 'što mi nije rekao istinu.'],
          ['Vlak je kasnio dva sata,', 'stoga smo propustili presjedanje.'],
        ],
        explanation:
          'toliko… da: a result. zahvaljujući tome što: a cause with a welcome outcome. Kako at the head of the sentence: a cause. zato… što: the everyday pair for a cause. stoga: an adverb ("therefore") that links two main clauses.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "He shouted so much that he went hoarse."',
        words: ['Toliko', 'je', 'vikao', 'da', 'je', 'promukao.'],
        accept: ['Vikao je toliko da je promukao.'],
        explanation:
          'Toliko je vikao da je promukao. — with a verb the degree word is toliko; da introduces the result, and each clause has its own auxiliary je in second position.',
      },
      {
        type: 'tf',
        q: 'In careful standard Croatian, "Pošto je ručao, legao je" means "Because he had eaten lunch, he lay down".',
        answer: false,
        hint: 'In the careful standard this conjunction answers "when?", not "why?".',
        explanation:
          'False. In the careful standard pošto is a conjunction of time: "After he had eaten lunch, he lay down." Its causal use is common in everyday speech, but the handbooks keep causes for other conjunctions.',
      },
      3,
      5,
      {
        type: 'transform',
        q: 'Turn the cause into a consequence: start with the fact and attach the result with "tako da".',
        from: 'Zakasnili smo zato što je most bio zatvoren.',
        answer: 'Most je bio zatvoren, tako da smo zakasnili.',
        accept: [
          'Most je bio zatvoren pa smo zakasnili.',
          'Most je bio zatvoren te smo zakasnili.',
        ],
        hint: 'The two clauses change places, and the auxiliary of the result clause has to stand right behind the connector.',
        explanation:
          'Most je bio zatvoren, tako da smo zakasnili. — the same two facts seen from the other end: what was the cause in a zato što-clause becomes the main clause, and the result follows after tako da, with the clitic smo directly behind it.',
      },
      {
        type: 'listen',
        audio:
          'Uslijed obilnih kiša rijeka se izlila iz korita, zbog čega je promet preusmjeren, a nastava u dvjema školama odgođena do daljnjega.',
        q: 'What is the speaker saying?',
        options: [
          'Traffic was diverted to two schools because the river was low',
          'Because of heavy rain the river overflowed, so traffic was diverted and classes in two schools were postponed until further notice',
          'Classes were postponed because traffic had been diverted away from the river',
          'Heavy rain is expected, so two schools will be closed and the river is being watched',
        ],
        correct: 1,
        explanation:
          'Uslijed obilnih kiša — a cause as a prepositional phrase (uslijed + genitive, formal). zbog čega — "because of which", linking the consequence. do daljnjega — until further notice.',
      },
      {
        type: 'dictate',
        audio: 'Kako nije bilo struje, večerali smo uz svijeće.',
        answer: 'Kako nije bilo struje, večerali smo uz svijeće.',
        hint: 'Seven words: "Since there was no electricity, we had dinner by candlelight."',
        explanation:
          'Kako nije bilo struje, večerali smo uz svijeće. — causal kako opens the sentence and a comma closes its clause; nije bilo struje has the genitive of negated existence.',
      },
    ],
  },

  // ── Condensation ───────────────────────────────────────────────────────────
  condensation: {
    text: {
      kind: 'dialogue',
      title: 'Sažetak od dvjesto riječi',
      lines: [
        {
          who: 'Mentorica',
          hr: 'Kolega Juriću, sažetak smije imati dvjesto riječi, a Vaš ih ima tristo. Morat ćemo zgusnuti rečenice, a da pritom ništa ne izostavimo.',
          en: 'Mr. Jurić, the abstract may have two hundred words, and yours has three hundred. We will have to condense the sentences without leaving anything out.',
        },
        {
          who: 'Doktorand',
          hr: 'Pokušao sam, ali svaka mi je rečenica važna. Evo prve: „Nakon što smo prikupili podatke, analizirali smo ih trima metodama.”',
          en: 'I tried, but every sentence matters to me. Here is the first: “After we collected the data, we analyzed them by three methods.”',
        },
        {
          who: 'Mentorica',
          hr: 'Zavisnu rečenicu pretvorite u prijedložni izraz: „Nakon prikupljanja podataka analizirali smo ih trima metodama.” Dvije riječi manje, a smisao isti.',
          en: 'Turn the dependent clause into a prepositional phrase: “After the collection of the data we analyzed them by three methods.” Two words fewer, and the same meaning.',
        },
        {
          who: 'Doktorand',
          hr: 'A ova? „Budući da su ispitanici bili umorni, rezultati drugoga mjerenja slabiji su od prvih.”',
          en: 'And this one? “Since the participants were tired, the results of the second measurement are weaker than the first.”',
        },
        {
          who: 'Mentorica',
          hr: '„Zbog umora ispitanika rezultati drugoga mjerenja slabiji su od prvih.” Uzrok ste sveli na imenicu, a ona uz „zbog” mora stajati u genitivu.',
          en: '“Because of the participants’ tiredness the results of the second measurement are weaker than the first.” You have reduced the cause to a noun, and after “zbog” that noun must be in the genitive.',
        },
        {
          who: 'Doktorand',
          hr: 'Mogu li tako i s pogodbom? Pišem: „Ako se uzorak poveća, razlike postaju značajne.”',
          en: 'Can I do the same with a condition? I write: “If the sample is enlarged, the differences become significant.”',
        },
        {
          who: 'Mentorica',
          hr: 'Možete: „Povećanjem uzorka razlike postaju značajne.” Ili glagolskim prilogom, ali samo ondje gdje je subjekt isti: „Usporedivši dvije skupine, uočili smo razlike”, jer smo i usporedili i uočili mi.',
          en: 'You can: “With the enlargement of the sample the differences become significant.” Or with a verbal adverb, but only where the subject is the same: “Having compared the two groups, we noticed differences,” because it was we who both compared and noticed.',
        },
        {
          who: 'Doktorand',
          hr: 'Onda bih mogao napisati i „Usporedivši dvije skupine, razlike su bile očite”?',
          en: 'Then I could also write “Having compared the two groups, the differences were obvious”?',
        },
        {
          who: 'Mentorica',
          hr: 'Nipošto. Ispalo bi da su razlike uspoređivale skupine. I pazite da ne pretjerate: „provedba postupka utvrđivanja povezanosti” štedi riječi, ali čitatelja stoji živaca.',
          en: 'By no means. It would come out as if the differences had been comparing the groups. And be careful not to overdo it: “the implementation of the procedure of the establishing of correlation” saves words, but costs the reader his nerves.',
        },
        {
          who: 'Doktorand',
          hr: 'Dakle, po jedno zgušnjavanje u rečenici, i nikad tri imenice zaredom.',
          en: 'So, one condensation per sentence, and never three nouns in a row.',
        },
        {
          who: 'Mentorica',
          hr: 'Tako je. Pošaljite mi novu inačicu do petka, pa ćemo je prije predaje još jednom zajedno pročitati.',
          en: 'Exactly. Send me the new version by Friday, and we will read it through together once more before submission.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why does the mentor reject "Usporedivši dvije skupine, razlike su bile očite"?',
          options: [
            'Because a verbal adverb may never open a sentence',
            'Because the sentence is longer than the one it replaces',
            'Because usporediti is perfective and cannot form a verbal adverb',
            'Because a verbal adverb takes its subject from the main clause, so the differences would be the ones doing the comparing',
          ],
          correct: 3,
          hint: 'Recall her dry remark about what the sentence would "come out" as saying.',
          explanation:
            'Ispalo bi da su razlike uspoređivale skupine. A verbal adverb has no subject of its own; it borrows the subject of the main clause. The condensation works in Usporedivši dvije skupine, uočili smo…, where the same people compare and notice.',
        },
        {
          q: 'In "Zbog umora ispitanika" two genitives stand side by side. Where does each come from?',
          options: [
            'Both are governed by zbog, which takes two objects',
            'umora is governed by zbog; ispitanika is the former subject of the clause, now attached to the noun as a genitive ("the tiredness of the participants")',
            'umora is a partitive genitive; ispitanika is governed by zbog',
            'ispitanika is an accusative plural, the object of an understood verb',
          ],
          correct: 1,
          hint: 'Unpack the phrase: who was tired? Then ask how a noun, unlike a verb, attaches the one it belongs to.',
          explanation:
            'ispitanici su bili umorni → umor ispitanika: when a clause becomes a noun, its subject follows as a genitive. The whole phrase then stands after zbog, which puts its head noun into the genitive too: zbog umora ispitanika.',
        },
        {
          type: 'type',
          q: 'Now you. Condense "Prije nego što je mjerenje počelo" → Prije ____ mjerenja. (početi → the noun)',
          answer: 'početka',
          hint: 'The noun for "beginning" is masculine and loses a vowel when it takes an ending; prije governs the same case as nakon.',
          explanation:
            'Prije početka mjerenja — početi → početak, genitive početka (the a is fleeting). prije, like nakon and zbog, takes the genitive, and the former subject mjerenje follows as a genitive as well.',
        },
        {
          type: 'transform',
          q: 'The doctoral student’s first sentence can also be condensed with a verbal adverb (glagolski prilog prošli). Do it.',
          from: 'Nakon što smo prikupili podatke, analizirali smo ih trima metodama.',
          answer: 'Prikupivši podatke, analizirali smo ih trima metodama.',
          accept: ['Prikupivši podatke, mi smo ih analizirali trima metodama.'],
          hint: 'The conjunction and the auxiliary disappear together; the perfective verb takes the ending for an action completed before the main one. The object keeps its case.',
          explanation:
            'Prikupivši podatke, analizirali smo ih trima metodama. — the past verbal adverb (-vši) replaces "nakon što smo prikupili". Unlike the verbal noun, it still governs the accusative (podatke), and it is allowed here because "mi" both collected and analyzed.',
        },
        {
          type: 'transform',
          q: 'Now the opposite direction: unpack the phrase into a full clause beginning with "Iako".',
          from: 'Unatoč umoru ispitanici su riješili sve zadatke.',
          answer: 'Iako su bili umorni, ispitanici su riješili sve zadatke.',
          accept: [
            'Iako su ispitanici bili umorni, riješili su sve zadatke.',
            'Iako su bili umorni, riješili su sve zadatke.',
            'Premda su bili umorni, ispitanici su riješili sve zadatke.',
            'Premda su ispitanici bili umorni, riješili su sve zadatke.',
          ],
          hint: 'The noun turns back into an adjective in the predicate, with the verb that the phrase had swallowed; the same people are the subject of both clauses.',
          explanation:
            'Iako su bili umorni, ispitanici su riješili sve zadatke. — unatoč + dative is a condensed concession; unpacked, the noun umor returns as the predicate bili su umorni. Being able to unpack such phrases is what makes dense academic prose readable.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Unlike a verbal adverb, a verbal noun can condense a clause whose subject differs from that of the main clause: "Nakon odlaska gostiju pospremili smo stan."',
        answer: true,
        hint: 'Who left, and who tidied up? Then look for where the first of them is hiding in the phrase.',
        explanation:
          'True. A noun phrase carries its own "subject" as a genitive: gosti su otišli → odlazak gostiju. So the guests leave and we tidy up, and nothing clashes. A verbal adverb has no such slot — "Otišavši gosti, pospremili smo stan" is impossible — which is why it demands a shared subject.',
      },
      9,
      {
        type: 'sort',
        q: 'Which kind of clause has been condensed into the phrase?',
        groups: [
          'A clause of time — when?',
          'A clause of cause — why?',
          'A clause of concession — despite what?',
        ],
        items: [
          { hr: 'nakon isteka roka', group: 0 },
          { hr: 'prije potpisivanja ugovora', group: 0 },
          { hr: 'zbog kvara na motoru', group: 1 },
          { hr: 'uslijed jake bure', group: 1 },
          { hr: 'unatoč upozorenjima', group: 2 },
          { hr: 'usprkos kiši', group: 2 },
        ],
        explanation:
          'nakon and prije (+ genitive) condense clauses of time; zbog and uslijed (+ genitive) clauses of cause; unatoč and usprkos (+ dative) clauses of concession. The preposition carries the meaning that the conjunction had.',
      },
      10,
      {
        type: 'match',
        q: 'Match each clause to its condensed form.',
        pairs: [
          ['Kad je sunce zašlo,', 'Po zalasku sunca'],
          ['Zato što je sunce jako,', 'Zbog jakog sunca'],
          ['Iako je sunce jako,', 'Unatoč jakom suncu'],
          ['Dok je sunce zalazilo,', 'Tijekom zalaska sunca'],
          ['Prije nego što sunce izađe,', 'Prije izlaska sunca'],
        ],
        explanation:
          'Each conjunction has a prepositional partner: kad → po + locative, zato što → zbog + genitive, iako → unatoč + dative, dok → tijekom + genitive, prije nego što → prije + genitive. The verb becomes a noun (zaći → zalazak, izaći → izlazak) or, with biti + adjective, the adjective simply joins the noun.',
      },
      11,
      7,
      {
        type: 'order',
        q: 'Put the words in order: "After the deadline expires, applications are not accepted."',
        words: ['Nakon', 'isteka', 'roka', 'prijave', 'se', 'ne', 'primaju.'],
        accept: [
          'Prijave se ne primaju nakon isteka roka.',
          'Nakon isteka roka ne primaju se prijave.',
          'Prijave se nakon isteka roka ne primaju.',
          'Nakon isteka roka se prijave ne primaju.',
        ],
        explanation:
          'Nakon isteka roka prijave se ne primaju. — "nakon što rok istekne" condensed into nakon + genitive, with the former subject rok as a second genitive. The clitic se follows the first stressed word after the long opening phrase.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Because of the train’s delay we missed the plane.")',
        words: ['Zbog', 'kašnjenje', 'vlaka', 'propustili', 'smo', 'zrakoplov.'],
        wrong: 1,
        answer: 'kašnjenja',
        hint: 'A clause turned into a noun still has to obey its preposition.',
        explanation:
          'Zbog kašnjenja vlaka propustili smo zrakoplov. — zbog governs the genitive, and the verbal noun must show it: kašnjenje → kašnjenja. The former subject vlak follows in the genitive too.',
      },
      1,
      {
        type: 'transform',
        q: 'Condense the clause of purpose into a prepositional phrase. Purpose, not cause — choose the preposition accordingly.',
        from: 'Cesta je zatvorena da bi se obnovio asfalt.',
        answer: 'Cesta je zatvorena radi obnove asfalta.',
        accept: [
          'Cesta je zatvorena radi obnavljanja asfalta.',
          'Radi obnove asfalta cesta je zatvorena.',
          'Cesta je radi obnove asfalta zatvorena.',
          'Radi obnavljanja asfalta cesta je zatvorena.',
          'Cesta je zatvorena zbog obnove asfalta.',
          'Cesta je zatvorena zbog obnavljanja asfalta.',
        ],
        hint: 'Careful Croatian keeps one preposition for what lies behind an event and another for what it aims at; both take the genitive. The noun you need is built from obnoviti.',
        explanation:
          'Cesta je zatvorena radi obnove asfalta. — radi + genitive names the aim, zbog + genitive the cause. In everyday use zbog is heard for both, which is why it is accepted here, but careful writing keeps radi for purpose.',
      },
      {
        type: 'listen',
        audio:
          'Po završetku rasprave, ne čekajući objavu presude, tužitelj je napustio zgradu suda, unatoč molbama svojega odvjetnika.',
        q: 'What is the speaker saying?',
        options: [
          'The plaintiff waited for the verdict because his lawyer begged him to',
          'When the hearing ended, the plaintiff left the courthouse without waiting for the verdict to be announced, despite his lawyer’s pleas',
          'The lawyer left the courthouse before the hearing ended, although the plaintiff asked him to stay',
          'The verdict was announced before the hearing ended, and the plaintiff left satisfied',
        ],
        correct: 1,
        explanation:
          'Three condensed clauses in one sentence: po završetku rasprave (when the hearing ended), ne čekajući objavu presude (without waiting for the verdict to be announced) and unatoč molbama (although his lawyer pleaded).',
      },
      {
        type: 'dictate',
        audio: 'Stigavši kući, odmah je nazvala majku.',
        answer: 'Stigavši kući, odmah je nazvala majku.',
        hint: 'Six words: "Having arrived home, she called her mother at once."',
        explanation:
          'Stigavši kući, odmah je nazvala majku. — "Kad je stigla kući" condensed into a past verbal adverb; the same woman arrives and calls, so the shared-subject condition is met.',
      },
    ],
  },

  // ── Collocations ───────────────────────────────────────────────────────────
  collocations: {
    text: {
      kind: 'text',
      title: 'Govor dekanice na promociji',
      lines: [
        {
          hr: 'Poštovane kolegice i kolege, dragi diplomanti, cijenjeni roditelji! Pripala mi je čast da danas održim govor u povodu vaše promocije.',
          en: 'Esteemed colleagues, dear graduates, respected parents! The honor has fallen to me of giving a speech today on the occasion of your graduation.',
        },
        {
          hr: 'Prije pet godina donijeli ste odluku da upišete ovaj fakultet, a danas se pokazuje da je ta odluka bila ispravna.',
          en: 'Five years ago you made the decision to enroll in this school, and today it is clear that the decision was the right one.',
        },
        {
          hr: 'Na tom ste putu stekli znanje i iskustvo, položili više od četrdeset ispita i uložili trud koji se ne može izmjeriti ocjenama.',
          en: 'Along the way you gained knowledge and experience, passed more than forty exams and put in an effort that cannot be measured by grades.',
        },
        {
          hr: 'Mnogi su od vas pritom radili, a neki su i zasnovali obitelj; njima odajem posebno priznanje.',
          en: 'Many of you worked at the same time, and some even started a family; to them I pay special tribute.',
        },
        {
          hr: 'Želim izraziti zahvalnost i vašim roditeljima, koji su podnijeli velike žrtve kako biste vi dobili priliku koju sami nisu imali.',
          en: 'I also wish to express gratitude to your parents, who made great sacrifices so that you would get an opportunity they themselves never had.',
        },
        {
          hr: 'Fakultet je, sa svoje strane, nastojao ispuniti obećanje koje vam je dao prvoga dana: da će svakom studentu posvetiti dužnu pozornost.',
          en: 'The school, for its part, tried to keep the promise it made to you on the first day: that it would give every student due attention.',
        },
        {
          hr: 'Svjesni smo da nismo uvijek uspjeli; za te propuste odgovornost snosim ja, a ne vaši nastavnici.',
          en: 'We are aware that we did not always succeed; for those failings the responsibility is mine to bear, not your teachers’.',
        },
        {
          hr: 'Sada je na vama red da poduzmete prve korake u struci i da drugima pružite ono što ste ovdje dobili.',
          en: 'Now it is your turn to take your first steps in the profession and to offer others what you received here.',
        },
        {
          hr: 'Imajte pritom na umu da znanje vrijedi tek onda kada ga stavite u službu zajednice.',
          en: 'Bear in mind as you do so that knowledge has value only when you place it at the service of the community.',
        },
        {
          hr: 'I ne bojte se postavljati pitanja — osobito onima koji tvrde da na sve imaju odgovor.',
          en: 'And do not be afraid to ask questions — especially of those who claim to have an answer for everything.',
        },
        {
          hr: 'Čestitam vam od srca i želim vam mnogo uspjeha!',
          en: 'I congratulate you with all my heart and wish you every success!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the speech: for what does the dean take the blame upon herself?',
          options: [
            'For the sacrifices that the graduates’ parents had to make',
            'For the cases in which the school failed to give every student due attention',
            'For the fact that many students had to work while studying',
            'For the more than forty exams the students had to pass',
          ],
          correct: 1,
          hint: 'She first recalls a promise made on the first day, and then admits that it was not always kept.',
          explanation:
            'The promise was da će svakom studentu posvetiti dužnu pozornost. She then says: nismo uvijek uspjeli; za te propuste odgovornost snosim ja — the responsibility is hers, not the teachers’.',
        },
        {
          q: 'The dean says "donijeli ste odluku". An English speaker might expect "napravili ste odluku". Why is that not what Croatian says?',
          options: [
            'Because napraviti can be used only with physical objects',
            'Because napraviti is imperfective and a decision is a single act',
            'Because "napraviti odluku" is the conversational form and donijeti the formal one',
            'Because the verb that goes with a noun is fixed by usage, not by logic or translation: with odluka it is donijeti, and "napraviti odluku" is a calque that native speakers do not use',
          ],
          correct: 3,
          hint: 'Croatian does say "napraviti pogrešku" and "napraviti plan". So what kind of rule is at work?',
          explanation:
            'A collocation is a habitual pairing: donijeti odluku, održati govor, steći iskustvo. No meaning rule predicts it — napraviti is perfective and goes with plenty of abstract nouns (napraviti pogrešku, plan, iznimku) — which is why collocations have to be learned as pairs.',
        },
        {
          type: 'type',
          q: 'Now you. Fakultet je na početku godine ____ sastanak sa svim studentima. (held — the collocating verb, masculine past)',
          answer: 'održao',
          hint: 'Meetings, speeches, lectures and concerts share one verb in Croatian — the dean uses it, in another form, in her very first sentence.',
          explanation:
            'Fakultet je održao sastanak. — održati sastanak, govor, predavanje, koncert. "Napraviti sastanak" and "imati govor" are English patterns carried across.',
        },
        {
          type: 'transform',
          q: 'Replace the verb with a collocation built on the noun "odgovornost".',
          from: 'Za štetu odgovara izvođač radova.',
          answer: 'Odgovornost za štetu snosi izvođač radova.',
          accept: [
            'Izvođač radova snosi odgovornost za štetu.',
            'Za štetu odgovornost snosi izvođač radova.',
            'Za štetu snosi odgovornost izvođač radova.',
          ],
          hint: 'The dean uses this very collocation about herself; here the one who bears it is a third person.',
          explanation:
            'Odgovornost za štetu snosi izvođač radova. — snositi odgovornost (also troškove, posljedice) is the formal collocation for "to bear responsibility"; the noun takes za + accusative for what one answers for.',
        },
        {
          type: 'transform',
          q: 'Replace "pohvalila" with a collocation built on the noun "priznanje".',
          from: 'Dekanica je pohvalila studente koji rade.',
          answer: 'Dekanica je odala priznanje studentima koji rade.',
          accept: [
            'Dekanica je studentima koji rade odala priznanje.',
            'Studentima koji rade dekanica je odala priznanje.',
          ],
          hint: 'The verb is in the dean’s sentence about students with jobs and families. Mind the case of the people honored: the collocation gives something TO them.',
          explanation:
            'Dekanica je odala priznanje studentima koji rade. — odati priznanje + dative: the people praised are no longer a direct object (studente) but a recipient (studentima).',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'The verb "počiniti" means "to do, to commit", so it pairs just as naturally with a good deed as with a crime: one can "počiniti dobro djelo".',
        answer: false,
        hint: 'Think of the nouns you have met after this verb in news reports. What do they have in common?',
        explanation:
          'False. počiniti collocates only with wrongs: počiniti zločin, prekršaj, kazneno djelo, pogrešku, samoubojstvo. A good deed takes učiniti: učiniti dobro djelo, uslugu. The dictionary meaning of the verb does not tell you this — the pairing does.',
      },
      9,
      {
        type: 'sort',
        q: 'Which verb does each noun go with?',
        groups: ['donijeti (literally "to bring")', 'održati (to hold)', 'počiniti (to commit)'],
        items: [
          { hr: 'zaključak', group: 0 },
          { hr: 'presudu', group: 0 },
          { hr: 'zakon', group: 0 },
          { hr: 'predavanje', group: 1 },
          { hr: 'koncert', group: 1 },
          { hr: 'zločin', group: 2 },
          { hr: 'prekršaj', group: 2 },
        ],
        explanation:
          'donijeti zaključak, presudu, zakon — what a body decides is "brought". održati predavanje, koncert — an event is "held". počiniti zločin, prekršaj — a wrong is "committed"; počiniti goes only with bad deeds.',
      },
      10,
      {
        type: 'match',
        q: 'Match each verb to the noun it takes.',
        pairs: [
          ['poduzeti', 'mjere'],
          ['položiti', 'ispit'],
          ['ispuniti', 'obećanje'],
          ['izraziti', 'sućut'],
          ['zasnovati', 'radni odnos'],
        ],
        explanation:
          'poduzeti mjere (to take measures), položiti ispit (to pass an exam), ispuniti obećanje (to keep a promise), izraziti sućut (to offer condolences), zasnovati radni odnos (to enter into employment). In each pair the English verb is a different one — which is exactly the trap.',
      },
      11,
      7,
      {
        type: 'order',
        q: 'Put the words in order: "Give me a chance to prove it." (polite)',
        words: ['Pružite', 'mi', 'priliku', 'da', 'to', 'dokažem.'],
        accept: ['Priliku mi pružite da to dokažem.'],
        explanation:
          'Pružite mi priliku da to dokažem. — pružiti priliku + dative: a chance is "extended" to somebody, like help or support. The clitic mi follows the first stressed word.',
      },
      {
        type: 'fix',
        q: 'One word is not what Croatian says. Tap it. ("We must take every detail into account.")',
        words: ['O', 'svakoj', 'pojedinosti', 'moramo', 'držati', 'računa.'],
        wrong: 4,
        answer: 'voditi',
        hint: 'In this fixed phrase the "account" is not kept or held; it is led.',
        explanation:
          'O svakoj pojedinosti moramo voditi računa. — voditi računa o + locative is a fixed phrase: to take into account, to take care over. Its verb cannot be exchanged for a near synonym.',
      },
      2,
      {
        type: 'transform',
        q: 'Replace "odlučilo" with the collocation built on the noun "odluka", and turn the infinitive into a verbal noun after "o".',
        from: 'Vijeće je odlučilo zatvoriti školu.',
        answer: 'Vijeće je donijelo odluku o zatvaranju škole.',
        accept: [
          'Vijeće je donijelo odluku da se škola zatvori.',
          'Vijeće je donijelo odluku da zatvori školu.',
          'Vijeće je donijelo odluku da se zatvori škola.',
          'Vijeće je donijelo odluku zatvoriti školu.',
        ],
        hint: 'The verb of the collocation must agree with "vijeće", a neuter noun. After "o" the noun stands in the locative, and its own object can no longer be an accusative.',
        explanation:
          'Vijeće je donijelo odluku o zatvaranju škole. — donijeti odluku o + locative. The participle agrees with the neuter vijeće (donijelo), and the object of the verbal noun becomes a genitive: zatvoriti školu → zatvaranje škole.',
      },
      {
        type: 'listen',
        audio:
          'Premda je optuženik priznao da je počinio kazneno djelo, sud mu je pružio priliku da nadoknadi štetu prije izricanja kazne.',
        q: 'What is the speaker saying?',
        options: [
          'The defendant denied the offense, so the court sentenced him at once',
          'The court made the defendant pay damages after sentencing him',
          'Although the defendant admitted committing the offense, the court gave him a chance to make good the damage before sentencing',
          'The defendant was given a chance to prove that he had not committed the offense',
        ],
        correct: 2,
        explanation:
          'počiniti kazneno djelo (to commit a criminal offense), pružiti priliku (to give a chance), nadoknaditi štetu (to make good the damage), izreći kaznu → izricanje kazne (to pronounce sentence) — four collocations of legal language in one sentence.',
      },
      {
        type: 'dictate',
        audio: 'Predsjednica je održala kratak govor.',
        answer: 'Predsjednica je održala kratak govor.',
        hint: 'Five words: "The president (a woman) gave a short speech."',
        explanation:
          'Predsjednica je održala kratak govor. — a speech is "held" in Croatian: održati govor. The participle agrees with the feminine subject.',
      },
    ],
  },

  // ── Zagrepčanin, Splićanka, Riječani ───────────────────────────────────────
  ethnonyms: {
    text: {
      kind: 'dialogue',
      title: 'Na svadbi: tko je odakle',
      lines: [
        {
          who: 'Bruno',
          hr: 'Oprostite, gospođo, sjedim li ja za pravim stolom? Rečeno mi je da su ovdje mladoženjini kolege, a čujem sam dalmatinski govor.',
          en: 'Excuse me, ma’am, am I sitting at the right table? I was told that the groom’s colleagues were here, and I hear nothing but Dalmatian speech.',
        },
        {
          who: 'Ljerka',
          hr: 'Dobro ste sjeli, samo smo se pomiješali. Ja sam mladenkina teta, Splićanka, a ovo je moj muž, rođeni Riječanin koji se nikad nije navikao na splitsku buku.',
          en: 'You are in the right place; we have just gotten mixed up. I am the bride’s aunt, a woman from Split, and this is my husband, a born native of Rijeka who has never gotten used to the noise of Split.',
        },
        {
          who: 'Bruno',
          hr: 'Drago mi je. Ja sam Zagrepčanin, premda mi je majka Slavonka, a otac Istranin, pa kod kuće nikad nismo znali čiji je kruh bolji — slavonski ili istarski.',
          en: 'Pleased to meet you. I am from Zagreb, although my mother is from Slavonia and my father from Istria, so at home we never knew whose bread was better — the Slavonian or the Istrian.',
        },
        {
          who: 'Ljerka',
          hr: 'Onda ste pravi Hrvat u malom! A znate li da je mladenka upoznala Marka u Beču, među samim Austrijancima?',
          en: 'Then you are a real Croat in miniature! And do you know that the bride met Marko in Vienna, among nothing but Austrians?',
        },
        {
          who: 'Bruno',
          hr: 'Znam, radili su u istoj tvrtki. Šef im je bio Nijemac, tajnica Mađarica, a razgovarali su, kaže Marko, na lošem engleskom.',
          en: 'I know, they worked at the same company. Their boss was German, the secretary Hungarian, and they talked, Marko says, in bad English.',
        },
        {
          who: 'Ljerka',
          hr: 'Zato se sada kod kuće govori samo hrvatski. Kuma je, čujem, Talijanka; razumije li ona išta od ovoga?',
          en: 'That is why only Croatian is spoken at home now. The maid of honor, I hear, is Italian; does she understand any of this?',
        },
        {
          who: 'Bruno',
          hr: 'Razumije više nego što pokazuje: baka joj je bila Puljanka, pa od djetinjstva sluša istarske pjesme.',
          en: 'She understands more than she lets on: her grandmother was from Pula, so she has been listening to Istrian songs since childhood.',
        },
        {
          who: 'Ljerka',
          hr: 'Vidi, vidi. A onaj visoki gospodin za glavnim stolom, je li to mladoženjin stric iz Varaždina?',
          en: 'Well, well. And that tall gentleman at the head table, is that the groom’s uncle from Varaždin?',
        },
        {
          who: 'Bruno',
          hr: 'Jest, pravi Varaždinac — čim je sjeo, pohvalio je varaždinsko zelje i pokudio dalmatinsku blitvu.',
          en: 'He is, a true Varaždin man — as soon as he sat down, he praised Varaždin cabbage and found fault with Dalmatian chard.',
        },
        {
          who: 'Ljerka',
          hr: 'Neka samo kudi! Do ponoći će s nama Splićanima pjevati dalmatinske pjesme, pa makar bio i Japanac.',
          en: 'Let him find fault! By midnight he will be singing Dalmatian songs with us Split folk, even if he were Japanese.',
        },
        {
          who: 'Bruno',
          hr: 'U to ne sumnjam. Zagrepčani se, uostalom, najbrže predaju: ja već znam refren.',
          en: 'I do not doubt it. People from Zagreb, after all, are the quickest to surrender: I already know the chorus.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where do Bruno’s parents come from?',
          options: [
            'Both are from Zagreb',
            'His mother is from Slavonia and his father from Istria',
            'His mother is from Istria and his father from Dalmatia',
            'His mother is from Split and his father from Rijeka',
          ],
          correct: 1,
          hint: 'Recall the two kinds of bread that the family could never agree on.',
          explanation:
            'majka Slavonka, a otac Istranin — and the bread is slavonski or istarski. The names of the people take a capital; the adjectives made from the same regions do not.',
        },
        {
          q: 'In the written dialogue Ljerka is a "Splićanka" with a capital, but she speaks of "splitsku buku" with a small letter. Why?',
          options: [
            'Because feminine nouns take a capital and adjectives in the accusative do not',
            'Because Split is capitalized only when it stands in the nominative',
            'Because the name of an inhabitant is a proper noun, while an adjective in -ski, -čki or -ški made from a place name is an ordinary adjective, written small unless it begins a name',
            'Because buka is a common noun, and the adjective copies its small letter',
          ],
          correct: 2,
          hint: 'Compare Hrvat and hrvatski, Zagrepčanin and zagrebački. Which of each pair names a person?',
          explanation:
            'Names of inhabitants and nations are proper nouns: Splićanka, Riječanin, Hrvat. Adjectives derived from place names are written with a small letter (splitska buka, istarske pjesme), and so are languages (hrvatski). A capital returns only when the adjective opens a proper name: Splitsko-dalmatinska županija.',
        },
        {
          type: 'type',
          q: 'Now you. Ljerkin muž navija za ____ nogometni klub. (the adjective from Rijeka)',
          answer: 'riječki',
          hint: 'The last consonant of the stem changes before the adjective ending just as it does in the name of the inhabitant.',
          explanation:
            'Rijeka → riječki: k + -ski gives -čki, as in Riječanin. The adjective is written with a small letter: riječki klub, riječka luka.',
        },
        {
          type: 'type',
          q: 'Bruno je Zagrepčanin; njegova je sestra ____.',
          answer: 'Zagrepčanka',
          hint: 'The masculine ending is replaced by the feminine one that Ljerka uses in the name she gives herself.',
          explanation:
            'Zagrepčanin → Zagrepčanka: the feminine of the -anin family ends in -anka (Splićanin → Splićanka). The p is written because b loses its voicing before č.',
        },
        {
          type: 'transform',
          q: 'Put the sentence into the plural.',
          from: 'Splićanin je pjevao, a Varaždinac je slušao.',
          answer: 'Splićani su pjevali, a Varaždinci su slušali.',
          accept: ['Splićani su pjevali, a Varaždinci slušali.'],
          hint: 'Two different plural patterns: one name loses a part of its suffix, the other a fleeting vowel.',
          explanation:
            'Splićanin → Splićani: names in -anin drop -in in the plural. Varaždinac → Varaždinci: the a of -ac is fleeting. Both remain proper nouns with a capital.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: 'Foreign cities follow the same patterns as Croatian ones: a man from Beč (Vienna) is a "Bečanin", and a man from Pariz is a "Parižanin".',
        answer: true,
        hint: 'The suffix is the one you know from Split and Rijeka. Watch what its j does to the z in front of it.',
        explanation:
          'True. Beč → Bečanin, Bečanka; Pariz → Parižanin, Parižanka (z + j gives ž, just as k gives č in Riječanin); Prag → Pražanin; Rim → Rimljanin. The adjectives stay small: bečki, pariški, praški, rimski.',
      },
      9,
      {
        type: 'sort',
        q: 'Which pattern does the name of the town’s inhabitants follow?',
        groups: ['A man in -anin, a woman in -anka', 'A man in -ac, a woman in -ka'],
        items: [
          { hr: 'Zagreb', group: 0 },
          { hr: 'Rijeka', group: 0 },
          { hr: 'Pula', group: 0 },
          { hr: 'Split', group: 0 },
          { hr: 'Varaždin', group: 1 },
          { hr: 'Samobor', group: 1 },
          { hr: 'Vukovar', group: 1 },
        ],
        explanation:
          'Zagrepčanin, Riječanin, Puljanin, Splićanin — the -anin family, with a sound change before the suffix and -anka for a woman. Varaždinac, Samoborac, Vukovarac — the -ac family, with -ka for a woman (Varaždinka) and a fleeting a (Varaždinci).',
      },
      10,
      {
        type: 'match',
        q: 'Match each country to a woman from it.',
        pairs: [
          ['Njemačka', 'Njemica'],
          ['Francuska', 'Francuskinja'],
          ['Španjolska', 'Španjolka'],
          ['Engleska', 'Engleskinja'],
          ['Slovenija', 'Slovenka'],
        ],
        explanation:
          'Feminine names of nations follow several patterns and are learned with the masculine: Nijemac – Njemica, Francuz – Francuskinja, Španjolac – Španjolka, Englez – Engleskinja, Slovenac – Slovenka. All take a capital letter.',
      },
      11,
      5,
      {
        type: 'order',
        q: 'Put the words in order: "He is from Rijeka and works in the port of Rijeka."',
        words: ['On', 'je', 'Riječanin', 'i', 'radi', 'u', 'riječkoj', 'luci.'],
        accept: [
          'On je Riječanin i u riječkoj luci radi.',
          'Riječanin je on i radi u riječkoj luci.',
        ],
        explanation:
          'On je Riječanin i radi u riječkoj luci. — the inhabitant is a proper noun with a capital; the adjective riječki is written small, and here it stands in the locative with luci.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Many people from Rijeka came to the game.")',
        words: ['Na', 'utakmicu', 'je', 'došlo', 'mnogo', 'Riječanina.'],
        wrong: 5,
        answer: 'Riječana',
        hint: 'After "mnogo" the noun is a genitive plural — and names of this family lose a part of their suffix in every plural case, not only in the nominative.',
        explanation:
          'Na utakmicu je došlo mnogo Riječana. — names in -anin drop -in throughout the plural: Riječani, Riječana, Riječanima. Riječanina is the genitive singular (od jednoga Riječanina) and cannot follow mnogo.',
      },
      4,
      {
        type: 'transform',
        q: 'Say it with an adjective instead of "iz + town".',
        from: 'To je vino iz Dubrovnika.',
        answer: 'To je dubrovačko vino.',
        accept: ['To je vino dubrovačko.', 'Dubrovačko je to vino.'],
        hint: 'The adjective is built on a shortened stem — the same shortening you used for the man from this town — and it agrees with a neuter noun.',
        explanation:
          'To je dubrovačko vino. — Dubrovnik → dubrovački: the -nik is dropped before -ački. The adjective is written with a small letter and agrees with vino.',
      },
      {
        type: 'listen',
        audio:
          'Iako je rođena Bečanka, moja je baka cijeli život govorila da se osjeća Dalmatinkom, jer je mladost provela među Splićanima i Hvaranima.',
        q: 'What is the speaker saying?',
        options: [
          'Grandmother was born in Dalmatia but felt Viennese all her life',
          'Although born in Vienna, Grandmother always said she felt Dalmatian, because she spent her youth among people from Split and Hvar',
          'Grandmother spent her youth in Vienna among people from Split and Hvar',
          'Grandmother never felt at home either in Vienna or in Dalmatia',
        ],
        correct: 1,
        explanation:
          'Bečanka — a woman from Beč (Vienna). osjećati se Dalmatinkom — the instrumental after osjećati se. među Splićanima i Hvaranima — plural names of inhabitants in the instrumental after među.',
      },
      {
        type: 'dictate',
        audio: 'Djed mi je bio Ličanin, a baka Slavonka.',
        answer: 'Djed mi je bio Ličanin, a baka Slavonka.',
        hint: 'Eight words: "My grandfather was from Lika, and my grandmother from Slavonia." Mind the capital letters.',
        explanation:
          'Djed mi je bio Ličanin, a baka Slavonka. — Lika → Ličanin (k → č), Slavonija → Slavonka. Both are names of people and take a capital; the dative mi does the work of "my".',
      },
    ],
  },
};
