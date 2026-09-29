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
        {
          type: 'type',
          q: 'Dopuni pluskvamperfektom: Kad sam stigao, on je već ____ otišao. (biti, m.)',
          answer: 'bio',
          hint: 'The participle of biti, agreeing with a masculine subject.',
          explanation: 'je već bio otišao — perfekt of biti + the participle.',
        },
        {
          type: 'type',
          q: 'Dopuni pluskvamperfektom: Kad smo ušli, predstava je već ____ počela. (biti, f.)',
          answer: 'bila',
          hint: 'The participle of biti agrees with predstava.',
          explanation: 'je već bila počela — both participles feminine singular.',
        },
        {
          type: 'type',
          q: 'Dopuni književnim oblikom: Sunce ____ zašlo kad stigosmo. (imperfekt of biti, 3rd sg.)',
          answer: 'bijaše',
          hint: 'The literary pluperfect uses the imperfekt of biti instead of the perfekt.',
          explanation: 'bijaše zašlo — the literary pluperfect, beside the aorist stigosmo.',
        },
        {
          type: 'type',
          q: 'Dopuni književnim oblikom: Gosti ____ otišli kad se vratismo. (imperfekt of biti, 3rd pl.)',
          answer: 'bijahu',
          hint: 'The third person plural of the imperfekt of biti.',
          explanation: 'bijahu otišli — the literary pluperfect in the plural.',
        },
        {
          type: 'type',
          q: 'Dopuni pluskvamperfektom: Djeca su već ____ zaspala kad smo došli. (biti)',
          answer: 'bila',
          hint: 'djeca takes the participle in -a.',
          explanation: 'su već bila zaspala — both participles agree with djeca.',
        },
        {
          q: 'Književni pluskvamperfekt glagola zaboraviti, 1. lice jednine, ženski rod:',
          options: [
            'bijah zaboravila',
            'bijaše zaboravila',
            'bila bih zaboravila',
            'bijah zaboravio',
          ],
          correct: 0,
          hint: 'The first person of the imperfekt of biti, and a feminine participle.',
          explanation:
            'bijah zaboravila — bijah is the first person; bila bih is the second conditional.',
        },
        {
          q: 'Koja je rečenica pogrešna?',
          options: ['Bio sam rekao.', 'Bijah rekao.', 'Bijah sam rekao.', 'Bila sam rekla.'],
          correct: 2,
          hint: 'One of these uses two auxiliaries at once.',
          explanation:
            '"Bijah sam rekao" doubles the auxiliary: it is either bio sam rekao or bijah rekao.',
        },
        {
          q: 'Koja rečenica prirodno koristi pluskvamperfekt za pozadinu?',
          options: [
            'Policija je uhitila ženu koja je bila ukrala auto.',
            'Policija je bila uhitila ženu koja je ukrala auto.',
            'Policija bi uhitila ženu koja je bila ukrala auto.',
            'Policija je uhitila ženu koja bi bila ukrala auto.',
          ],
          correct: 0,
          hint: 'The earlier event — the theft — is the one to mark.',
          explanation:
            'The theft came first and is background, so it takes the pluperfect: koja je bila ukrala auto.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete with the pluperfect: "Kad smo stigli u kino, film ___." (had already begun — početi)',
        options: ['je već počeo', 'je već bio počeo', 'bi već počeo', 'poče'],
        correct: 1,
        explanation:
          'je već bio počeo — the earlier event takes the pluperfect: perfekt of biti + participle.',
      },
      {
        q: 'Complete with the literary form: "Kiša ___ kad izađosmo." (had stopped — prestati)',
        options: ['bijaše prestala', 'bi prestala', 'je prestala', 'presta'],
        correct: 0,
        explanation:
          'bijaše prestala — imperfekt of biti + participle, the literary pluperfect beside the aorist izađosmo.',
      },
      {
        q: 'Which sentence marks the sequence correctly?',
        options: [
          'Kad je bio došao, gosti su otišli.',
          'Kad je došao, gosti su već bili otišli.',
          'Kad je došao, gosti su bili odlaziti.',
          'Kad je bio došao, gosti su bili otišli.',
        ],
        correct: 1,
        explanation:
          'The guests left first, so their leaving carries the pluperfect; his arrival stays in the perfekt.',
      },
      {
        q: 'Spot the error: "Bijaše je već otišla."',
        options: [
          'bijaše je doubles the auxiliary — either je bila otišla or bijaše otišla',
          'otišla should be otišao',
          'već should be tek',
          'nothing is wrong',
        ],
        correct: 0,
        explanation: 'bijaše replaces je bila; using both doubles the auxiliary.',
      },
      {
        q: 'Complete: "Pronašla je ključ koji ___." (she had lost)',
        options: ['gubi', 'je izgubila bila', 'je bila izgubila', 'bijaše gubila'],
        correct: 2,
        explanation:
          'je bila izgubila — perfekt of biti followed by the participle, both feminine.',
      },
      {
        q: 'Why is the pluperfect optional in "Nakon što je doručkovao, otišao je na posao"?',
        options: [
          'because nakon što already fixes the order',
          'because doručkovati has no pluperfect',
          'because the sentence is about the future',
          'it is not optional — it is required',
        ],
        correct: 0,
        explanation:
          'The connective nakon što already says which event came first, so the plain perfekt is enough.',
      },
    ],
    vocab: [
      [
        'pluskvamperfekt',
        'pluperfect',
        'Pluskvamperfekt izriče radnju koja se dogodila prije druge prošle radnje.',
      ],
      [
        'pretprošlo vrijeme',
        'pluperfect (lit. "before-past tense")',
        'Pretprošlo vrijeme danas je češće u pisanom nego u govornom jeziku.',
      ],
      ['imperfekt', 'imperfect tense', 'Imperfekt glagola biti je bijah, bijaše, bijahu.'],
      ['aorist', 'aorist tense', 'U starijoj prozi aorist se često javlja uz pluskvamperfekt.'],
      ['prethoditi', 'to precede', 'Radnja u pluskvamperfektu prethodi drugoj prošloj radnji.'],
      ['redoslijed', 'order, sequence', 'Veznik "nakon što" jasno određuje redoslijed događaja.'],
      ['pripovijedanje', 'narration', 'U pripovijedanju pluskvamperfekt označava pozadinu.'],
      ['pozadina', 'background', 'Ranija radnja često je samo pozadina glavnom događaju.'],
    ],
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
        {
          type: 'type',
          q: 'Imenuj figuru: "Umirem od dosade." ____',
          answer: 'hiperbola',
          hint: 'Nobody is really dying; it is a deliberate overstatement.',
          explanation: 'hiperbola — deliberate exaggeration.',
        },
        {
          type: 'type',
          q: 'Imenuj figuru u riječi "bocu": "Popio je cijelu bocu." ____',
          answer: 'metonimija',
          hint: 'He drank the contents, not the glass: the transfer is by a real connection.',
          explanation: 'metonimija — the container stands for its contents.',
        },
        {
          type: 'type',
          q: 'Imenuj figuru: "Ratove počinju starci, a u njima ginu mladići." ____',
          answer: 'antiteza',
          hint: 'Two opposites set against each other in parallel.',
          explanation: 'antiteza — starci / mladići, počinju / ginu.',
        },
        {
          type: 'type',
          q: 'Imenuj figuru: "Zar ti to itko vjeruje?" ____',
          answer: 'retoričko pitanje',
          hint: 'The speaker expects no answer; the question asserts.',
          explanation: 'retoričko pitanje — it accuses rather than asks.',
        },
        {
          type: 'type',
          q: 'Imenuj figuru: "Ima srce od kamena." ____',
          answer: 'metafora',
          hint: 'A transfer by likeness, with no kao.',
          explanation: 'metafora — hardness of stone transferred to a person by similarity.',
        },
        {
          q: 'Koja je rečenica gradacija?',
          options: [
            'Zaurlao je, mrmljao, šutio.',
            'Šutio je, mrmljao, a onda zaurlao.',
            'Mrmljao je kao da šuti.',
            'Tko još šuti?',
          ],
          correct: 1,
          hint: 'The steps must climb.',
          explanation: 'šutio → mrmljao → zaurlao climbs; the reverse order falls flat.',
        },
        {
          q: 'Kolega je zakasnio dva sata, a ti kažeš: "Baš si točan danas." Koja je figura?',
          options: ['ironija', 'hiperbola', 'metonimija', 'gradacija'],
          correct: 0,
          hint: 'The words say the opposite of the situation.',
          explanation: 'ironija — praise that means its opposite.',
        },
        {
          q: '"Zagreb je odbio prijedlog Bruxellesa." Koliko je metonimija u rečenici?',
          options: ['nijedna', 'jedna', 'dvije', 'tri'],
          correct: 2,
          hint: 'Count the cities that stand for institutions.',
          explanation: 'Two: Zagreb (the government) and Bruxelles (the EU institutions).',
        },
      ],
    },
    checkB: [
      {
        q: '"Cijela je Rijeka slavila pobjedu." Which figure is "Rijeka"?',
        options: ['metafora', 'metonimija', 'hiperbola', 'ironija'],
        correct: 1,
        explanation:
          'metonimija — the city stands for its people, a real-world connection rather than a likeness.',
      },
      {
        q: 'Which line is a correctly built gradacija (climbing)?',
        options: [
          'Naredio je, zamolio, zatražio.',
          'Zatražio je, naredio, zamolio.',
          'Zamolio je, zatražio, naredio.',
          'Naredio je, zatražio, zamolio.',
        ],
        correct: 2,
        explanation: 'zamolio → zatražio → naredio: each step is stronger, weakest first.',
      },
      {
        q: 'Which sentence is an antiteza?',
        options: [
          'Tražim te cijelu vječnost.',
          'Bogati šute, siromašni plaćaju.',
          'Pročitao je Krležu.',
          'Zar to nitko ne vidi?',
        ],
        correct: 1,
        explanation: 'bogati / siromašni and šute / plaćaju collide opposites in parallel frames.',
      },
      {
        q: 'Spot the misnamed figure: a student labels "Čekam te sto godina" as metonimija.',
        options: [
          'it is hiperbola — deliberate exaggeration',
          'it is antiteza',
          'the label is correct',
          'it is gradacija',
        ],
        correct: 0,
        explanation: 'A hundred years is an exaggeration, not a transfer by connection: hiperbola.',
      },
      {
        q: 'Which of these is a METAPHOR rather than a simile?',
        options: [
          'Pogled mu je bio kao nož.',
          'Pogled mu je bio nož.',
          'Pogled mu je bio poput noža.',
          'Gledao je kao da će ubiti.',
        ],
        correct: 1,
        explanation: 'A metaphor states the likeness without kao or poput: pogled mu je bio nož.',
      },
      {
        q: 'What figure does "čitati Krležu" show?',
        options: [
          'metonimija — the author stands for his works',
          'metafora',
          'hiperbola',
          'retoričko pitanje',
        ],
        correct: 0,
        explanation: 'The man stands for what he wrote — a real connection, so metonimija.',
      },
    ],
    vocab: [
      ['stilska figura', 'figure of speech', 'Stilske figure daju tekstu uvjerljivost i ritam.'],
      ['metafora', 'metaphor', 'Metafora "more problema" prenosi značenje na temelju sličnosti.'],
      ['metonimija', 'metonymy', 'U naslovu "Zagreb odlučuje" grad je metonimija za vladu.'],
      ['hiperbola', 'hyperbole', 'Rečenica "Sto puta sam ti rekao" tipična je hiperbola.'],
      ['gradacija', 'climax (gradation)', 'Gradacija se gradi od najslabijeg prema najjačem.'],
      ['antiteza', 'antithesis', 'Antiteza suprotstavlja dva pojma u usporednoj rečenici.'],
      ['ironija', 'irony', 'Ironija kaže suprotno od onoga što misli.'],
      ['retoričko pitanje', 'rhetorical question', 'Retoričko pitanje ne očekuje odgovor.'],
      ['usporedba', 'simile, comparison', 'Usporedba se prepoznaje po riječima "kao" i "poput".'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Sukladno ____ Vlade, rok se produljuje. (odluka)',
          answer: 'odluci',
          hint: 'sukladno governs the dative.',
          explanation: 'sukladno odluci — dative.',
        },
        {
          type: 'type',
          q: 'Dopuni: Žalba se podnosi u roku od 15 dana od dana ____ rješenja. (dostava)',
          answer: 'dostave',
          hint: 'od takes the genitive.',
          explanation: 'od dana dostave — the clock starts on the day the decision is served.',
        },
        {
          type: 'type',
          q: 'Izrazi glagolom: "prilikom podnošenja zahtjeva" → kad ____ zahtjev (podnijeti, Vi)',
          answer: 'podnosite',
          accept: ['podnesete'],
          hint: 'Turn the verbal noun back into a verb in the second person plural.',
          explanation:
            'kad podnosite (or podnesete) zahtjev — re-verbing untangles the nominal style.',
        },
        {
          type: 'type',
          q: 'Dopuni ustaljeni izraz: ____ potvrđujem točnost navedenih podataka. (hereby)',
          answer: 'Ovime',
          accept: ['Ovim'],
          hint: 'An instrumental of the demonstrative, used as a formula.',
          explanation: 'Ovime (or Ovim) potvrđujem… — the fixed formula of a declaration.',
        },
        {
          type: 'type',
          q: 'Dopuni: Temeljem ____ 62. Zakona o strancima donosi se rješenje. (članak)',
          answer: 'članka',
          hint: 'temeljem takes the genitive, and the a of članak does not drop.',
          explanation: 'temeljem članka 62. — genitive after temeljem.',
        },
        {
          q: 'Koji je svakodnevni izraz za "u svrhu ostvarivanja prava"?',
          options: [
            'da bi ostvario pravo',
            'prilikom ostvarenja prava',
            'sukladno pravu',
            'temeljem prava',
          ],
          correct: 0,
          hint: 'Replace the verbal noun with a clause of purpose.',
          explanation: 'da bi ostvario pravo — a purpose clause instead of the nominal phrase.',
        },
        {
          q: 'Što znači "pravomoćna presuda"?',
          options: [
            'presuda koja je tek donesena',
            'presuda koju treba potpisati',
            'presuda protiv koje više nema redovne žalbe',
            'presuda nižeg suda',
          ],
          correct: 2,
          hint: 'Think of the moment a judgment can no longer be appealed in the ordinary way.',
          explanation: 'pravomoćna — final and binding, with no ordinary appeal left.',
        },
        {
          q: 'Koja rečenica pripada službenom dopisu?',
          options: [
            'Šaljem Vam papire jer ste ih tražili.',
            'U prilogu se dostavlja tražena dokumentacija.',
            'Evo papira koje ste htjeli.',
            'Poslao sam papire, javite se.',
          ],
          correct: 1,
          hint: 'The official text is impersonal and passive.',
          explanation: 'U prilogu se dostavlja… — the impersonal se-passive of the register.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Temeljem ___ stranka ima pravo na naknadu." (the contract — ugovor)',
        options: ['ugovor', 'ugovoru', 'ugovora', 'ugovorom'],
        correct: 2,
        explanation: 'temeljem takes the genitive: temeljem ugovora.',
      },
      {
        q: 'Complete: "Sukladno ___ podnositelj je dužan priložiti dokaz." (the law — zakon)',
        options: ['zakona', 'zakonu', 'zakon', 'zakonom'],
        correct: 1,
        explanation: 'sukladno takes the dative: sukladno zakonu.',
      },
      {
        q: 'Which sentence is written in the administrative register?',
        options: [
          'Javite nam se kad stignete.',
          'Ajde, pošalji papire.',
          'Molim te, javi mi.',
          'Zahtjev se podnosi nadležnom uredu osobno ili poštom.',
        ],
        correct: 3,
        explanation:
          'Impersonal, passive, with the fixed cast of the register: se podnosi, nadležnom uredu.',
      },
      {
        q: 'Spot the error: "Rješenje se dostavlja u roku od osam dana od dana primitak zahtjeva."',
        options: [
          'primitak should be primitka — od takes the genitive',
          'rješenje should be rješenja',
          'osam dana should be osam dani',
          'nothing is wrong',
        ],
        correct: 0,
        explanation: 'od dana primitka — the preposition od governs the genitive.',
      },
      {
        q: 'Decode "nakon izvršenja uplate" into plain Croatian.',
        options: [
          'prije nego što uplatite',
          'nakon što uplatite',
          'ako ne uplatite',
          'dok uplaćujete',
        ],
        correct: 1,
        explanation: 'Re-verb the noun: izvršenje uplate → uplatiti, so "nakon što uplatite".',
      },
      {
        q: 'What is the "nadležno tijelo"?',
        options: [
          'the applicant',
          'the office responsible for the matter',
          'the court of appeal',
          'the lawyer',
        ],
        correct: 1,
        explanation:
          'nadležno tijelo is the competent authority — the office whose job the matter is.',
      },
    ],
    vocab: [
      [
        'rješenje',
        'decision, ruling (official)',
        'Rješenje je dostavljeno stranci preporučenom poštom.',
      ],
      ['žalba', 'appeal', 'Protiv ovog rješenja može se izjaviti žalba u roku od 15 dana.'],
      ['dostava', 'service, delivery (of a document)', 'Rok teče od dana dostave rješenja.'],
      [
        'podnositelj zahtjeva',
        'applicant',
        'Podnositelj zahtjeva dužan je priložiti presliku osobne iskaznice.',
      ],
      ['nadležno tijelo', 'competent authority', 'Zahtjev se predaje nadležnom tijelu.'],
      [
        'pravomoćan',
        'final, legally binding',
        'Presuda je postala pravomoćna nakon isteka roka za žalbu.',
      ],
      ['preslika', 'copy (of a document)', 'Uz zahtjev priložite presliku rodnog lista.'],
      [
        'sukladno',
        'in accordance with (+ dative)',
        'Sukladno članku 12. ugovora najamnina se plaća mjesečno.',
      ],
      ['priložiti', 'to attach, enclose', 'Molimo da zahtjevu priložite dokaz o uplati.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni suprotnim veznikom: Nije došao autobusom, ____ vlakom. (but rather)',
          answer: 'nego',
          accept: ['već'],
          hint: 'After a negated clause, Croatian corrects with one of two contrastive conjunctions.',
          explanation:
            'nego (or već) — after a negation it introduces the correction, and it always takes a comma before it.',
        },
        {
          type: 'type',
          q: 'Dopuni suprotnim veznikom: Htio sam nazvati, ____ nisam imao broj. (but)',
          answer: 'ali',
          accept: ['no', 'a'],
          hint: 'A plain contrast between two clauses; the comma is already in place.',
          explanation:
            'ali (also no or a) — contrastive conjunctions always take a comma before them.',
        },
        {
          type: 'type',
          q: 'Koliko zareza treba rečenica "Moj ujak inače kuhar radi u Opatiji"? Napiši broj: ____',
          answer: 'dva',
          accept: ['2'],
          hint: 'An inserted comment is fenced off on both sides.',
          explanation:
            'Moj ujak, inače kuhar, radi u Opatiji. — two commas, one on each side of the insertion.',
        },
        {
          type: 'type',
          q: 'Koliko zareza treba rečenica "Rekao je da dolazi sutra"? Napiši broj: ____',
          answer: '0',
          accept: ['nula', 'nijedan', 'nijednog', 'ni jedan'],
          hint: 'Think about complement da.',
          explanation: 'None — complement da never takes a comma: Rekao je da dolazi sutra.',
        },
        {
          q: 'Koja je rečenica pravilno napisana?',
          options: [
            'Veći je, nego ja.',
            'Veći je nego ja.',
            'Veći je nego, ja.',
            'Veći, je nego ja.',
          ],
          correct: 1,
          hint: 'Is this nego contrasting two clauses, or comparing two things?',
          explanation:
            'Veći je nego ja. — comparative nego takes no comma; only contrastive nego does.',
        },
        {
          q: 'Kako se piše: Ivane jesi li zatvorio prozor?',
          options: [
            'Ivane jesi li zatvorio prozor?',
            'Ivane jesi li, zatvorio prozor?',
            'Ivane, jesi li, zatvorio prozor?',
            'Ivane, jesi li zatvorio prozor?',
          ],
          correct: 3,
          hint: 'The name is a form of address.',
          explanation: 'Ivane, jesi li zatvorio prozor? — the vocative is set off with a comma.',
        },
        {
          q: 'Kako se piše: Kad sam stigao kući svi su već spavali.',
          options: [
            'Kad sam stigao kući, svi su već spavali.',
            'Kad sam stigao, kući svi su već spavali.',
            'Kad, sam stigao kući svi su već spavali.',
            'Kad sam stigao kući svi su, već spavali.',
          ],
          correct: 0,
          hint: 'Find where the fronted kad-clause ends.',
          explanation:
            'Kad sam stigao kući, svi su već spavali. — the comma closes the inverted clause, after kući.',
        },
        {
          q: 'Kako se piše: To je po mom mišljenju loša odluka.',
          options: [
            'To je po mom mišljenju, loša odluka.',
            'To je, po mom mišljenju loša odluka.',
            'To je, po mom mišljenju, loša odluka.',
            'To, je po mom mišljenju loša odluka.',
          ],
          correct: 2,
          hint: 'An inserted comment: whatever you open, you close.',
          explanation:
            'To je, po mom mišljenju, loša odluka. — the insertion is fenced on both sides.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which is punctuated correctly? (I hope you will come.)',
        options: [
          'Nadam se, da ćeš doći.',
          'Nadam se da, ćeš doći.',
          'Nadam se da ćeš doći.',
          'Nadam, se da ćeš doći.',
        ],
        correct: 2,
        explanation: 'Nadam se da ćeš doći. — complement da never takes a comma before it.',
      },
      {
        q: 'Complete the punctuation: "Dok je kuhala ___ slušala je radio."',
        options: [
          'no comma',
          'a comma — the dok-clause comes first',
          'a semicolon',
          'a comma before dok instead',
        ],
        correct: 1,
        explanation:
          'Dok je kuhala, slušala je radio. — the subordinate clause is inverted, so a comma closes it.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Nije to rekao on nego ona.',
          'Nije to rekao on, nego ona.',
          'Nije to rekao, on nego ona.',
          'Nije to rekao on nego, ona.',
        ],
        correct: 1,
        explanation: 'Contrastive nego always takes a comma before it: on, nego ona.',
      },
      {
        q: 'Spot the error: "Moj susjed inače umirovljeni pilot, uzgaja pčele."',
        options: [
          'a comma is missing after susjed — insertions are fenced on both sides',
          'the comma after pilot should be removed',
          'uzgaja should be uzgajao',
          'nothing is wrong',
        ],
        correct: 0,
        explanation:
          'Moj susjed, inače umirovljeni pilot, uzgaja pčele. — the insertion needs both fences.',
      },
      {
        q: 'Which sentence needs NO comma?',
        options: [
          'Ivana dođi ovamo.',
          'Došao je kasno ali je sve stigao.',
          'Kupila je sir i vrhnje.',
          'Ako kasniš javi se.',
        ],
        correct: 2,
        explanation:
          'Kupila je sir i vrhnje. — plain additive i takes no comma. The others need one: a vocative, ali, and an inverted ako-clause.',
      },
      {
        q: 'Why is there a comma in "Iako je padala kiša, išli smo u šetnju"?',
        options: [
          'because iako always takes a comma after it',
          'because the subordinate clause comes first, before the main clause',
          'because the sentence has two verbs',
          'it is a mistake',
        ],
        correct: 1,
        explanation:
          'The iako-clause is fronted (inverted order), and an inverted subordinate clause is closed with a comma.',
      },
    ],
    vocab: [
      ['zarez', 'comma', 'Ispred veznika "ali" uvijek pišemo zarez.'],
      [
        'interpunkcija',
        'punctuation',
        'Dobra interpunkcija pokazuje da je tekst netko pročitao do kraja.',
      ],
      [
        'zavisna rečenica',
        'subordinate clause',
        'Kad zavisna rečenica stoji na početku, odvaja se zarezom.',
      ],
      [
        'inverzija',
        'inversion (reversed order)',
        'Zbog inverzije rečenica "Ako možeš, dođi" ima zarez.',
      ],
      ['umetak', 'insertion, parenthetical', 'Umetak "naravno" odvaja se zarezima s obiju strana.'],
      ['vokativ', 'vocative', 'Vokativ se u rečenici uvijek odvaja zarezom: Marko, dođi.'],
      [
        'suprotni veznik',
        'contrastive conjunction',
        'Suprotni veznici a, ali, nego i već traže zarez.',
      ],
      ['odvojiti', 'to set off, separate', 'Obraćanje treba odvojiti zarezom od ostatka rečenice.'],
      ['pravilo', 'rule', 'Hrvatski zarez stavlja se po pravilu, a ne po stanci u govoru.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni prijedlogom: Idem u kino ____ Zdenkom. (with)',
          answer: 'sa',
          hint: 'Look at the first sound of the name that follows.',
          explanation:
            'sa Zdenkom — before z the norm itself requires sa, so s here would be a hypercorrection.',
        },
        {
          type: 'type',
          q: 'Dopuni prijedlogom: Razgovarao sam ____ Markom. (with)',
          answer: 's',
          hint: 'The name does not begin with s, š, z or ž.',
          explanation:
            's Markom — the ordinary form; sa is kept for s, š, z, ž and a few awkward clusters.',
        },
        {
          type: 'type',
          q: 'U izvješću: Moramo ____ dokumentaciju do petka. (to hand in; the spoken draft had "predat")',
          answer: 'predati',
          hint: 'A written report keeps the full infinitive, with its final vowel.',
          explanation:
            'predati — the clipped predat is normal in speech, but a report keeps the full infinitive.',
        },
        {
          type: 'type',
          q: 'Dopuni: Na izletu je bilo ____ djece. (4, as a collective numeral)',
          answer: 'četvero',
          hint: 'Children are counted with the collective numeral, and the standard form ends in -ero.',
          explanation:
            'četvero djece — djeca takes the collective numeral (dvoje, troje, četvero).',
        },
        {
          type: 'type',
          q: 'Dopuni: Na sastanak su došla ____ muškaraca. (2 men)',
          answer: 'dvojica',
          hint: 'The noun is in the genitive plural, and the group is made up of men only.',
          explanation:
            'dvojica muškaraca — the numeral for a group of men; dva would take muškarca, the genitive singular.',
        },
        {
          q: 'Koja je izmjena opravdana u službenom dopisu?',
          options: ['sa sestrom → s sestrom', 'di → gdje', 'sa mnom → s mnom', 's njim → sa njim'],
          correct: 1,
          hint: 'Only one of these moves the text toward the norm without overshooting.',
          explanation:
            'di → gdje: di is spoken and regional, and a letter keeps gdje. The other three either overshoot (sestrom, mnom) or move away from the norm (sa njim).',
        },
        {
          q: 'Prijatelju u poruci pišeš: "Di si, kaj ima?" Što je točno?',
          options: [
            'To je pravopisna pogreška koju treba ispraviti.',
            'To je standardni oblik za svaki tekst.',
            'To je razgovorni i regionalni izraz, primjeren toj poruci.',
            'To je hiperkorekcija.',
          ],
          correct: 2,
          hint: 'Ask who is reading, not only what the Pravopis says.',
          explanation:
            'Spoken, regional forms are normal in a message to a friend; they would be out of place in a report, not wrong in the chat.',
        },
        {
          q: 'Koji nastavak pripada istom registru kao "Zahtjev je zaprimljen i proslijeđen nadležnoj službi."?',
          options: [
            'Javit ćemo vam se kad skužimo.',
            'Rješenje će Vam biti dostavljeno poštom.',
            'Ma bit će to gotovo za tren.',
            'Nemojte se sekirati, sredit ćemo.',
          ],
          correct: 1,
          hint: 'The first sentence is impersonal and passive. Keep going the same way.',
          explanation:
            'Rješenje će Vam biti dostavljeno poštom — the same administrative, passive register. The others slip into speech.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Razgovarala je ___ Stipom, a poslije ___ šefom."',
        options: ['s / sa', 'sa / sa', 's / s', 'sa / s'],
        correct: 1,
        explanation:
          'sa / sa — both names begin with s or š, and sa is the form before s, š, z and ž. Writing s there is exactly the hypercorrection the lesson warns about.',
      },
      {
        q: 'Complete the formal report: "Odbor ___ prijedlog do kraja mjeseca."',
        options: [
          'trebaju razmotriti',
          'treba razmotriti',
          'treba razmotrit',
          'trebao bi razmotrit',
        ],
        correct: 1,
        explanation:
          'treba razmotriti — odbor is singular, and a written report keeps the full infinitive. The clipped razmotrit is spoken usage and reads as a slip in a report.',
      },
      {
        q: 'Which sentence uses the standard form for "three children came"?',
        options: [
          'Došlo je troje djece.',
          'Došla su trojica djece.',
          'Došlo je tri djece.',
          'Došle su troje djece.',
        ],
        correct: 0,
        explanation:
          'Došlo je troje djece — djeca takes the collective numeral troje, with a neuter singular verb. Trojica is for men only, and tri cannot count djeca.',
      },
      {
        q: 'A learner "corrects" a text. Which change is the hypercorrection?',
        options: [
          'di si → gdje si (in a report)',
          'neznam → ne znam',
          'sa njim → s njim',
          'sa šalicom → s šalicom',
        ],
        correct: 3,
        explanation:
          'sa šalicom → s šalicom overshoots: before š the norm itself requires sa. The other three move the text toward the norm.',
      },
      {
        q: 'What does "norma" mean in this lesson?',
        options: [
          'What competent speakers actually do',
          'What the codified standard prescribes',
          'A regional pronunciation',
          'A spelling mistake',
        ],
        correct: 1,
        explanation:
          'Norma is prescribed — what the Pravopis, the grammars and the dictionaries say. What speakers actually do is uzus.',
      },
      {
        q: 'Inside an administrative letter, which sentence breaks the register?',
        options: [
          'Rok za žalbu iznosi 15 dana.',
          'Molimo Vas da nam se javite.',
          'Ma nema frke, sredit ćemo to.',
          'Zahtjev se podnosi u pisanom obliku.',
        ],
        correct: 2,
        explanation:
          '"Ma nema frke, sredit ćemo to" is chatty spoken Croatian; every word is fine, but inside an official letter it reads as a mistake.',
      },
    ],
    vocab: [
      [
        'norma',
        'the (prescribed) standard',
        'Norma propisuje oblik "gdje", ali u razgovoru često čujemo "di".',
      ],
      [
        'uzus',
        'usage, what speakers actually do',
        'Uzus se ponekad razilazi s normom, osobito u govoru.',
      ],
      ['hiperkorekcija', 'hypercorrection', 'Oblik "s sestrom" tipična je hiperkorekcija.'],
      [
        'registar',
        'register (of language)',
        'Službeni dopis zahtijeva drukčiji registar od poruke prijatelju.',
      ],
      [
        'obilježen',
        'marked (not neutral)',
        'Taj je izraz stilski obilježen i ne pripada izvješću.',
      ],
      ['propisivati', 'to prescribe', 'Pravopis propisuje da se "ne" piše odvojeno od glagola.'],
      ['odstupanje', 'deviation', 'Svako odstupanje od norme ne mora biti pogreška.'],
      [
        'dosljednost',
        'consistency',
        'Dosljednost u tekstu važnija je od izbora jedne od dviju dopuštenih inačica.',
      ],
      [
        'ujednačiti',
        'to standardise, make uniform',
        'Lektorica je ujednačila pravopis u cijeloj knjizi.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Vi ____ to morali znati. (conditional of biti, 2nd person plural)',
          answer: 'biste',
          hint: 'One word, formed like the first person plural but ending in -ste.',
          explanation: 'biste — one word; "bi ste" is an error.',
        },
        {
          type: 'type',
          q: 'Dopuni: Ja ____ došla da sam znala. (conditional of biti, 1st person singular)',
          answer: 'bih',
          hint: 'The first person singular ends in -h.',
          explanation: 'ja bih — never "ja bi", which is the third person.',
        },
        {
          type: 'type',
          q: 'Napiši niječni oblik: Ja ____ plivati. (moći, negated, 1st person singular)',
          answer: 'ne mogu',
          hint: 'Only four verbs fuse with the negative particle, and moći is not one of them.',
          explanation:
            'ne mogu — two words. Only nisam, neću, nemam and nemoj are written together.',
        },
        {
          type: 'type',
          q: 'Napiši niječni oblik: Sutra ____ doći. (htjeti, negated, 1st person singular)',
          answer: 'neću',
          accept: ['ne ću'],
          hint: 'This is one of the four verbs whose negation fused historically.',
          explanation:
            'neću — the form that dominates in practice; ne ću has also been codified and survives in conservative writing, so both are accepted.',
        },
        {
          type: 'type',
          q: 'Dopuni datum u dopisu: Zagreb, 5. ____ 2026. (May)',
          answer: 'svibnja',
          hint: 'After an ordinal day the month stands in the genitive, in lower case.',
          explanation:
            '5. svibnja 2026. — the month in the genitive, lower case, with ordinal dots after day and year.',
        },
        {
          q: 'Koji je oblik sporna varijanta, a ne pogreška?',
          options: ['neznam', 'ja bi', 'strjelica', 'u Petak'],
          correct: 2,
          hint: 'Three of these break a rule nobody contests.',
          explanation:
            'strjelica / strelica is a genuinely contested je-reflex. neznam, ja bi and u Petak are plain errors.',
        },
        {
          q: 'Kako se u hrvatskom tekstu piše navod?',
          options: [
            '„Dobar dan,” rekao je.',
            '„Dobar dan”, rekao je.',
            '"Dobar dan" rekao je.',
            '„Dobar dan”; rekao je.',
          ],
          correct: 1,
          hint: 'Croatian puts the comma on the other side of the closing mark from English.',
          explanation: '„Dobar dan”, rekao je. — the comma comes after the closing quotation mark.',
        },
        {
          q: 'Koji je zapis kratica pravilan?',
          options: ['npr, tj, itd', 'Npr., Tj., Itd.', 'npr. tj itd', 'npr., tj., itd.'],
          correct: 3,
          hint: 'Abbreviations that cut a word short keep a final mark.',
          explanation:
            'npr., tj., itd. — each abbreviation keeps its final dot and is written in lower case.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Da smo znali, mi ___ vam javili."',
        options: ['bi smo', 'bismo', 'bi', 'bih'],
        correct: 1,
        explanation:
          'bismo — the first person plural of the conditional auxiliary is one word; "bi smo" is an error.',
      },
      {
        q: 'Complete: "Rado ___ vam pomogla, ali nemam vremena."',
        options: ['bi', 'bi sam', 'bila bi', 'bih'],
        correct: 3,
        explanation:
          'bih — the first person singular. "Ja bi" is common in speech and is a clear sign of an unedited text.',
      },
      {
        q: 'Which line is correctly written?',
        options: [
          'Nisam znao, ne želim, nemoj.',
          'Nisam znao, neželim, nemoj.',
          'Ni sam znao, ne želim, ne moj.',
          'Nisam znao, neželim, ne moj.',
        ],
        correct: 0,
        explanation:
          'Nisam and nemoj are two of the four fused verbs; every other verb, želim included, takes ne as a separate word.',
      },
      {
        q: 'Which contains an actual error rather than a contested variant?',
        options: [
          'Ne ćemo zakasniti.',
          'Riješili smo sve zadatke.',
          'Nemogu ti pomoći.',
          'To je bila pogrješka.',
        ],
        correct: 2,
        explanation:
          '"Nemogu" is simply wrong — moći is not one of the four fused verbs. Ne ćemo and pogrješka are codified variants.',
      },
      {
        q: 'How is "on Friday, in the English language" written?',
        options: [
          'u Petak, na Engleskom jeziku',
          'u petak, na engleskom jeziku',
          'u petak, na Engleskom Jeziku',
          'u Petak, na engleskom jeziku',
        ],
        correct: 1,
        explanation:
          'Days and language names are lower case in Croatian: u petak, na engleskom jeziku.',
      },
      {
        q: 'A report writes "zadatci" on page 3 and "zadaci" on page 9. What is the honest verdict?',
        options: [
          'Page 9 is wrong',
          'Page 3 is wrong',
          'Both forms are permitted; the inconsistency is the fault',
          'Neither form is standard',
        ],
        correct: 2,
        explanation:
          'Both zadatci and zadaci are permitted. On a genuinely contested point the rule is consistency, and alternating breaks it.',
      },
    ],
    vocab: [
      [
        'pravopis',
        'orthography; the spelling handbook',
        'Prema Hrvatskom pravopisu dan u tjednu pišemo malim slovom.',
      ],
      [
        'dvojba',
        'doubt, a contested point',
        'Oko pisanja "neću" i "ne ću" dvojba traje desetljećima.',
      ],
      ['sporan', 'contested, disputed', 'Sporna mjesta u pravopisu nisu isto što i pogreške.'],
      ['inačica', 'variant', 'Obje su inačice kodificirane, ali jedna prevladava u praksi.'],
      ['niječnica', 'the negative particle', 'Niječnica "ne" piše se odvojeno od većine glagola.'],
      ['kratica', 'abbreviation', 'Kratica "npr." uvijek završava točkom.'],
      ['navodnici', 'quotation marks', 'Hrvatski navodnici otvaraju se dolje, a zatvaraju gore.'],
      [
        'veliko slovo',
        'capital letter',
        'Zamjenicu "Vi" u pismu jednoj osobi pišemo velikim slovom.',
      ],
      [
        'dosljedan',
        'consistent',
        'Budi dosljedan: ako pišeš "zadatci", piši tako u cijelom tekstu.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Razgovarali smo o ____ Obami. (Barack)',
          answer: 'Baracku',
          hint: 'A man’s consonant-final first name takes the ordinary masculine locative ending.',
          explanation: 'o Baracku Obami — both names decline; o takes the locative.',
        },
        {
          type: 'type',
          q: 'Dopuni: Knjiga je posvećena ____ Hugu. (Victor)',
          answer: 'Victoru',
          hint: 'Keep the original spelling and add the dative ending.',
          explanation:
            'Victoru Hugu — the spelling stays as in the original, and both names take the dative.',
        },
        {
          type: 'type',
          q: 'Dopuni: Ovo je portret ____ Merkel. (Angela)',
          answer: 'Angele',
          hint: 'Only one of the two names has a paradigm to enter.',
          explanation:
            'portret Angele Merkel — the first name takes the genitive; the woman’s consonant-final surname does not decline.',
        },
        {
          type: 'type',
          q: 'Dopuni: Na trgu je bilo mnogo ____. (čovjek)',
          answer: 'ljudi',
          hint: 'The plural of this noun comes from a different root.',
          explanation:
            'mnogo ljudi — čovjek is suppletive, and after mnogo the plural stands in the genitive.',
        },
        {
          type: 'type',
          q: 'Dopuni: Na satu smo govorili o ____. (Zola, the writer)',
          answer: 'Zoli',
          hint: 'A name ending in -a declines like a feminine noun, whoever bears it.',
          explanation: 'o Zoli — a man called Zola still declines like a feminine in -a.',
        },
        {
          q: 'Koji je oblik pravilan?',
          options: [
            'Živimo u Dugoj Resa.',
            'Živimo u Duga Resi.',
            'Živimo u Dugoj Resi.',
            'Živimo u Dugu Resu.',
          ],
          correct: 2,
          hint: 'A two-word place name declines in both parts.',
          explanation: 'u Dugoj Resi — the adjective and the noun both take the locative.',
        },
        {
          q: 'Dopuni: Djevojčica ima velike plave ___. (oko)',
          options: ['oka', 'očiju', 'oči', 'okove'],
          correct: 2,
          hint: 'Body-part pairs kept an old dual form.',
          explanation:
            'plave oči — the eyes in your head are oči, a feminine plural; oka are the eyes of a net.',
        },
        {
          q: 'Dopuni: Pisao sam o ___. (William Shakespeare)',
          options: [
            'Williamu Shakespeareu',
            'William Shakespeareu',
            'Williamu Shakespeare',
            'Williama Shakespearea',
          ],
          correct: 0,
          hint: 'A man’s first name and surname both decline, and the silent final e is kept in writing.',
          explanation:
            'o Williamu Shakespeareu — both names take the locative; the final e stays and the ending follows it.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Gledali smo dokumentarac o ___." (Chaplin)',
        options: ['Chaplin', 'Chaplina', 'Chaplinu', 'Chaplinom'],
        correct: 2,
        explanation:
          'o Chaplinu — a man’s consonant-final name declines like a normal masculine noun; o takes the locative.',
      },
      {
        q: 'Complete: "Upoznao sam se s ___." (Tony)',
        options: ['Tony', 'Tonyem', 'Tonyjem', 'Tonijem'],
        correct: 2,
        explanation:
          'Tonyjem — the original spelling stays, and a final -y takes a linking -j- before the ending.',
      },
      {
        q: 'Complete: "Razgovor s ___ Harris trajao je pola sata." (Kamala)',
        options: ['Kamala', 'Kamalom', 'Kamali', 'Kamalu'],
        correct: 1,
        explanation:
          's Kamalom Harris — the first name ends in -a and declines; the consonant-final surname of a woman does not.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Braća je stigla.', 'Braća su stigla.', 'Braća su stiglo.', 'Braća su stigle.'],
        correct: 1,
        explanation:
          'Braća su stigla — the collective takes a plural verb, with the participle in -a.',
      },
      {
        q: 'Which sentence contains an error?',
        options: [
          'Sastanak je trajao tri sata.',
          'Na zidu vise dva stara sata.',
          'Učenici imaju pet satova hrvatskog tjedno.',
          'Putovali smo četiri satova.',
        ],
        correct: 3,
        explanation:
          '"četiri satova" is wrong: after četiri the noun is genitive singular (četiri sata), and satovi means clocks or lessons, not hours.',
      },
      {
        q: 'Complete: "Vratili smo se iz ___." (Oslo)',
        options: ['Oslo', 'Osla', 'Oslu', 'Oslom'],
        correct: 1,
        explanation: 'iz Osla — a neuter in -o declines like selo: iz sela, iz Osla.',
      },
    ],
    vocab: [
      ['sklonidba', 'declension', 'Sklonidba stranih imena često zbunjuje i izvorne govornike.'],
      ['iznimka', 'exception', 'Riječ "čovjek" iznimka je jer množinu tvori od drugog korijena.'],
      ['prezime', 'surname', 'Žensko prezime na suglasnik ne sklanja se: o Angeli Merkel.'],
      ['nesklonjiv', 'indeclinable', 'Prezime Merkel u ženskom je rodu nesklonjivo.'],
      [
        'zbirna imenica',
        'collective noun',
        'Zbirna imenica "djeca" slaže se s glagolom u množini.',
      ],
      ['množina', 'plural', 'Množina od "sat" u značenju sati razlikuje se od množine "satovi".'],
      ['nepostojani a', 'fleeting a', 'U riječi "pas" nepostojani a nestaje: psa, psu.'],
      ['mjesno ime', 'place name', 'Mjesno ime Vinkovci ima oblik množine: Vinkovci su lijepi.'],
      [
        'preuzeti',
        'to take over, borrow (a word, name)',
        'Preuzeta imena zadržavaju izvorno pisanje, a nastavci se dodaju.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Na natječaj su stigle tri ____. (prijava)',
          answer: 'prijave',
          hint: 'After dva, tri and četiri a feminine noun takes the genitive singular.',
          explanation: 'tri prijave — genitive singular after tri.',
        },
        {
          type: 'type',
          q: 'Dopuni: Ispit je položilo dvadeset ____. (student)',
          answer: 'studenata',
          hint: 'From five upward the counted noun stands in the genitive plural.',
          explanation: 'dvadeset studenata — the genitive plural, with the inserted a.',
        },
        {
          type: 'type',
          q: 'Dopuni: Sastanak počinje u 10 ____. (the word that replaces ":00")',
          answer: 'sati',
          hint: 'Croatian names the hour with a word instead of the minutes after a colon.',
          explanation: 'u 10 sati — the word replaces the ":00"; "u 10:00 sati" says it twice.',
        },
        {
          type: 'type',
          q: 'Dopuni datum: Ugovor je potpisan 12. ____ 2026. (March)',
          answer: 'ožujka',
          hint: 'After an ordinal day the month stands in the genitive, in lower case.',
          explanation: '12. ožujka 2026. — the month in the genitive, with ordinal dots.',
        },
        {
          type: 'type',
          q: 'U službenom rješenju: Komisija je raspravila o ____ prijedlozima. (4, declined)',
          answer: 'četirima',
          hint: 'Administrative writing keeps the declined form of the numeral in the same case as the noun.',
          explanation:
            'o četirima prijedlozima — the formal locative of četiri; in journalism o četiri prijedloga.',
        },
        {
          q: 'Kako se piše "a 15 % discount"?',
          options: ['popust od 15%', 'popust od 15 posto%', 'popust od 15 %', 'popust od 15,%'],
          correct: 2,
          hint: 'Think of the space before a unit.',
          explanation: 'popust od 15 % — a space before the percent sign, as before every unit.',
        },
        {
          q: 'Kako se u prozi piše "in the 1990s"?',
          options: ['90-ih godina', 'devedesetih godina', '90tih godina', 'Devedesetih Godina'],
          correct: 1,
          hint: 'Decades in running text are not left as figures.',
          explanation: 'devedesetih godina — decades are written out in prose, in lower case.',
        },
        {
          q: 'Cijena raste s 200 na 250 eura. Što je točno?',
          options: [
            'Porasla je za 50 posto.',
            'Porasla je za 25 posto.',
            'Porasla je za 25 postotnih bodova.',
            'Porasla je za 20 posto.',
          ],
          correct: 1,
          hint: 'Percentage points apply only when the quantity is itself a percentage.',
          explanation:
            'A rise of 50 on 200 is 25 per cent. Postotni bodovi would only apply if the price were a percentage.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Putovanje traje tri ___, a karta stoji dvadeset ___."',
        options: ['dana / eura', 'dani / eura', 'dana / euri', 'dan / eura'],
        correct: 0,
        explanation:
          'tri dana (genitive singular after tri) and dvadeset eura (genitive plural after five and above).',
      },
      {
        q: 'Which is correctly written for a report?',
        options: [
          'Stopa je pala za dva postotna boda.',
          'Stopa je pala za dva postotni bod.',
          'Stopa je pala za dva postotnih bodova.',
          'Stopa je pala za dvije postotne boda.',
        ],
        correct: 0,
        explanation:
          'dva postotna boda — after dva the noun and its adjective take the paucal form, masculine to agree with bod.',
      },
      {
        q: 'Which sentence breaks a codified rule?',
        options: [
          'U dvorani je sjedilo 40 ljudi.',
          'Četrdeset ljudi sjedilo je u dvorani.',
          '40 ljudi sjedilo je u dvorani.',
          'U dvorani je sjedilo četrdeset ljudi.',
        ],
        correct: 2,
        explanation: 'A sentence never begins with a numeral: rewrite it or spell the number out.',
      },
      {
        q: 'In an administrative decision, which form is expected?',
        options: ['o trima zahtjevima', 'o tri zahtjevima', 'o trima zahtjeva', 'o troje zahtjeva'],
        correct: 0,
        explanation:
          'o trima zahtjevima — administrative writing keeps the declined form of tri, with the noun in the same case.',
      },
      {
        q: 'Unemployment falls from 10 % to 8 %. Which description is accurate?',
        options: [
          'pala je za dva posto',
          'pala je za dva postotna boda, tj. za petinu',
          'pala je za dvadeset postotnih bodova',
          'pala je za osam posto',
        ],
        correct: 1,
        explanation:
          'Two percentage points (postotna boda) — which is a fall of twenty per cent, a fifth of the starting value.',
      },
      {
        q: 'How is "3,250.40 euros" written in a Croatian document?',
        options: ['3,250.40 eura', '3 250.40 eura', '3.250.40 eura', '3.250,40 eura'],
        correct: 3,
        explanation: '3.250,40 eura — a dot separates thousands, a comma the decimals.',
      },
    ],
    vocab: [
      ['postotak', 'percentage', 'Postotak nezaposlenih pao je treću godinu zaredom.'],
      ['postotni bod', 'percentage point', 'Kamata je porasla za dva postotna boda.'],
      ['iznos', 'amount, sum', 'Iznos od 1.500,00 eura treba uplatiti do kraja mjeseca.'],
      ['iznositi', 'to amount to', 'Ukupni troškovi iznose 4.200 eura.'],
      ['rok', 'deadline, time limit', 'Rok za prigovor je 15 dana od primitka rješenja.'],
      ['mjerna jedinica', 'unit of measurement', 'Između broja i mjerne jedinice piše se razmak.'],
      ['redni broj', 'ordinal number', 'U datumu iza rednog broja dolazi točka: 5. svibnja.'],
      [
        'brojevni izraz',
        'number expression, quantifier',
        'Iza brojevnog izraza "nekoliko" dolazi genitiv množine.',
      ],
      ['desetljeće', 'decade', 'U prozi desetljeće pišemo slovima: sedamdesetih godina.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Mnogo ljudi ____ na koncert. (doći, perfekt)',
          answer: 'je došlo',
          accept: ['došlo je'],
          hint: 'The quantity word, not the noun, controls the verb.',
          explanation: 'Mnogo ljudi je došlo — a quantity subject takes a neuter singular verb.',
        },
        {
          type: 'type',
          q: 'Dopuni: Dva prijatelja ____ zajedno. (putovati, perfekt)',
          answer: 'su putovala',
          accept: ['putovala su'],
          hint: 'Two, three and four keep a plural auxiliary, and the participle has the old dual ending.',
          explanation: 'Dva prijatelja su putovala — plural auxiliary, participle in -a.',
        },
        {
          type: 'type',
          q: 'Dopuni: Pet žena ____ u zboru. (pjevati, perfekt)',
          answer: 'je pjevalo',
          accept: ['pjevalo je'],
          hint: 'The boundary is at five.',
          explanation: 'Pet žena je pjevalo — from five upward, a neuter singular verb.',
        },
        {
          type: 'type',
          q: 'Dopuni: Ivana i Petar ____ na izlet. (otići, perfekt)',
          answer: 'su otišli',
          accept: ['otišli su'],
          hint: 'One woman and one man: which gender is the unmarked plural?',
          explanation: 'Ivana i Petar su otišli — mixed genders take the masculine plural.',
        },
        {
          type: 'type',
          q: 'Dopuni: Dvije djevojke ____ na vrijeme. (stići, perfekt)',
          answer: 'su stigle',
          accept: ['stigle su'],
          hint: 'Below five the verb is plural, and the noun is feminine.',
          explanation: 'Dvije djevojke su stigle — plural verb, feminine participle.',
        },
        {
          q: 'Dopuni: Većina putnika ___ u vlaku.',
          options: ['su spavali', 'je spavala', 'su spavale', 'je spavao'],
          correct: 1,
          hint: 'većina is itself a feminine singular noun.',
          explanation:
            'Većina putnika je spavala — the verb agrees with većina, a feminine singular.',
        },
        {
          q: 'Koja rečenica ima pravilno slaganje?',
          options: [
            'Nekoliko djece su plakali.',
            'Nekoliko djece je plakala.',
            'Nekoliko djece su plakala.',
            'Nekoliko djece je plakalo.',
          ],
          correct: 3,
          hint: 'nekoliko is a quantity word.',
          explanation:
            'Nekoliko djece je plakalo — a quantity subject takes a neuter singular verb.',
        },
        {
          q: 'Dopuni: Četiri stolca ___ u kutu.',
          options: ['je stajalo', 'su stajali', 'su stajala', 'su stajale'],
          correct: 2,
          hint: 'Four, not five: the old dual pattern.',
          explanation: 'Četiri stolca su stajala — plural auxiliary with the participle in -a.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Sedam radnika ___ na posao."',
        options: ['je došlo', 'su došli', 'su došla', 'je došao'],
        correct: 0,
        explanation:
          'From five upward a quantity subject takes a neuter singular verb: sedam radnika je došlo.',
      },
      {
        q: 'Complete: "Tri sestre ___ iz Zagreba."',
        options: ['je stiglo', 'su stigli', 'su stigle', 'je stigla'],
        correct: 2,
        explanation:
          'Two, three and four keep a plural verb; with a feminine noun the participle is feminine plural: su stigle.',
      },
      {
        q: 'Complete: "Luka, Iva i Sara ___ kući."',
        options: ['su se vratile', 'su se vratili', 'se je vratilo', 'su se vratila'],
        correct: 1,
        explanation:
          'Mixed genders take the masculine plural, however many of the subjects are women: su se vratili.',
      },
      {
        q: 'Complete: "Djeca su se ___ u vrtu."',
        options: ['igrao', 'igrala', 'igrali', 'igrale'],
        correct: 1,
        explanation:
          'djeca is a collective: a plural verb with the participle in -a, djeca su se igrala.',
      },
      {
        q: 'Which sentence lets the verb follow one noun instead of the whole subject?',
        options: [
          'Ni majka ni njezini sinovi nisu došli.',
          'Ni majka ni njezini sinovi nije došla.',
          'Majka i sinovi su došli.',
          'Majka je došla sa sinovima.',
        ],
        correct: 1,
        explanation:
          '"nije došla" agrees with majka alone. The subject as a whole is plural and mixed, so the verb is nisu došli.',
      },
      {
        q: 'Complete: "Nekoliko turista ___ na plaži."',
        options: ['su ostali', 'su ostala', 'je ostao', 'je ostalo'],
        correct: 3,
        explanation:
          'nekoliko is a quantity word, so the verb is neuter singular: nekoliko turista je ostalo.',
      },
    ],
    vocab: [
      [
        'sročnost',
        'agreement (grammatical)',
        'Sročnost subjekta i predikata ključna je za pravilnu rečenicu.',
      ],
      [
        'slaganje',
        'agreement, matching',
        'Slaganje glagola s brojem zbunjuje i izvorne govornike.',
      ],
      ['subjekt', 'subject', 'Kad je subjekt dug, najprije pronađi njegovu glavnu riječ.'],
      ['predikat', 'predicate', 'Predikat se slaže sa subjektom u rodu i broju.'],
      ['većina', 'majority', 'Većina je članova glasala za prijedlog.'],
      ['manjina', 'minority', 'Manjina je ostala suzdržana.'],
      ['nekoliko', 'several, a few', 'Nekoliko je gostiju otišlo prije ponoći.'],
      [
        'dvojina',
        'the dual (grammatical number)',
        'Oblik "dva studenta" ostatak je stare dvojine.',
      ],
      ['zbirna imenica', 'collective noun', 'Zbirna imenica "braća" traži glagol u množini.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: ____ čitam, a danju radim. (at night)',
          answer: 'noću',
          hint: 'A bare instrumental of a time word, like its partner danju.',
          explanation: 'Noću — "at night", a bare case with no preposition.',
        },
        {
          type: 'type',
          q: 'Dopuni: Prošli smo ____ do sela. (polje — through the field)',
          answer: 'poljem',
          hint: 'The route takes a bare instrumental, no preposition.',
          explanation: 'poljem — the instrumental gives the way through: prošli smo poljem.',
        },
        {
          type: 'type',
          q: 'Dopuni: Kupi mi ____ na tržnici. (sir — some cheese)',
          answer: 'sira',
          hint: '"Some" of a mass noun is a bare genitive.',
          explanation: 'Kupi mi sira — the partitive genitive; sir would be a particular cheese.',
        },
        {
          type: 'type',
          q: 'Dopuni: Vratili smo se ____ godine. (prošli — last year)',
          answer: 'prošle',
          hint: 'A point in time takes a bare genitive, and godina is feminine.',
          explanation: 'prošle godine — the genitive of a point in time, with no preposition.',
        },
        {
          type: 'type',
          q: 'Dopuni: U hladnjaku nema ____. (mlijeko)',
          answer: 'mlijeka',
          hint: 'Existential nema governs one case only.',
          explanation: 'nema mlijeka — nema takes the genitive.',
        },
        {
          q: 'Koja rečenica kaže da je putovala zajedno s bratom?',
          options: [
            'Putovala je bratom.',
            'Putovala je s bratom.',
            'Putovala je brata.',
            'Putovala je bratu.',
          ],
          correct: 1,
          hint: 'A companion needs the preposition; a bare instrumental is a means.',
          explanation: 's bratom — with the preposition the instrumental means accompaniment.',
        },
        {
          q: 'Dopuni: Radili smo ___ bez odmora. (the whole week)',
          options: ['cijeli tjedan', 'cijelim tjednom', 'cijelom tjednu', 'za cijeli tjedan'],
          correct: 0,
          hint: 'Duration takes a bare accusative.',
          explanation: 'cijeli tjedan — the accusative of duration, with no preposition.',
        },
        {
          q: 'Koja rečenica prirodno kaže "his grandmother died"?',
          options: [
            'Umro mu je baka.',
            'Umrla je baka od njega.',
            'Umrla ga je baka.',
            'Umrla mu je baka.',
          ],
          correct: 3,
          hint: 'The person affected stands in the dative, and the participle agrees with baka.',
          explanation:
            'Umrla mu je baka — the dative mu marks whose grandmother; umrla agrees with baka.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "U našem kvartu više nema ___."',
        options: ['kino', 'kina', 'kinu', 'kinom'],
        correct: 1,
        explanation: 'Existential nema governs the genitive: nema kina.',
      },
      {
        q: 'Complete: "Ljeti putujemo ___ do otoka."',
        options: ['s trajektom', 'trajekta', 'trajektom', 'od trajekta'],
        correct: 2,
        explanation:
          'A bare instrumental gives the means: putovati trajektom. With s the ferry would become a travelling companion.',
      },
      {
        q: 'Which sentence means "pour me some milk"?',
        options: [
          'Natoči mi mlijeko.',
          'Natoči mi mlijeka.',
          'Natoči mi mlijeku.',
          'Natoči mi mlijekom.',
        ],
        correct: 1,
        explanation:
          'The partitive genitive means "some": mlijeka. mlijeko would be the milk in question.',
      },
      {
        q: 'Which sentence is wrong rather than merely a different emphasis?',
        options: ['Nemam novca.', 'Nemam novac.', 'Popio je vode.', 'Nema problem.'],
        correct: 3,
        explanation:
          'nema governs the genitive, so "Nema problem" is an error — Nema problema. The other three are standard, differing only in emphasis.',
      },
      {
        q: 'Complete: "___ spavamo duže." (every Sunday, as a habit)',
        options: ['U nedjelju', 'Nedjelje', 'Za nedjelju', 'Nedjeljom'],
        correct: 3,
        explanation: 'The bare instrumental marks repetition: nedjeljom, "on Sundays".',
      },
      {
        q: 'What does the dative "joj" express in "Sin joj živi u Kanadi"?',
        options: [
          'That the son lives there because of her',
          'The person the son belongs to — her son',
          'That she lives with him',
          'A command to her',
        ],
        correct: 1,
        explanation:
          'The dative clitic marks the person affected, doing the work of a possessive: her son.',
      },
    ],
    vocab: [
      [
        'partitivni genitiv',
        'partitive genitive',
        'Partitivni genitiv u "Kupi kruha" znači nešto kruha.',
      ],
      ['nijekanje', 'negation', 'Nakon nijekanja objekt može stajati u genitivu.'],
      ['subotom', 'on Saturdays', 'Subotom ujutro idemo na tržnicu.'],
      ['noću', 'at night', 'Noću je grad tiši nego danju.'],
      ['danju', 'by day, in the daytime', 'Danju radi u uredu, a navečer uči jezike.'],
      ['ljeti', 'in summer', 'Ljeti plovimo brodom do otoka.'],
      ['zimi', 'in winter', 'Zimi se rano smrači.'],
      [
        'sredstvo',
        'means, instrument',
        'Instrumental bez prijedloga izriče sredstvo: pisati olovkom.',
      ],
      ['trajanje', 'duration', 'Za trajanje rabimo akuzativ: cijeli dan.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Ne ____ prozor, hladno je. (otvoriti)',
          answer: 'otvaraj',
          hint: 'An ordinary prohibition takes the other member of the aspect pair.',
          explanation: 'Ne otvaraj — the negated imperative is imperfective.',
        },
        {
          type: 'type',
          q: 'Dopuni: Nastavila je ____ iako je bila umorna. (to write)',
          answer: 'pisati',
          hint: 'nastaviti names the continuation of a process.',
          explanation: 'nastavila je pisati — a phase verb takes an imperfective infinitive.',
        },
        {
          type: 'type',
          q: 'Dopuni: Nemoj ____ lozinku! (to forget — a one-off warning)',
          answer: 'zaboraviti',
          hint: 'A warning against one specific accident keeps the perfective.',
          explanation: 'Nemoj zaboraviti — nemoj + perfective flags a single risk.',
        },
        {
          type: 'type',
          q: 'Dopuni: Ne ____ mu ništa, iznenađenje je. (to tell)',
          answer: 'govori',
          hint: 'Negated command: the imperfective partner of reći, which is a different root.',
          explanation:
            'Ne govori mu — reći and govoriti are a suppletive pair, and the prohibition takes govoriti.',
        },
        {
          q: 'Koja je zabrana pravilna?',
          options: [
            'Ne pojedi kolače, za goste su.',
            'Ne jedi kolače, za goste su.',
            'Ne pojesti kolače, za goste su.',
            'Nejedi kolače, za goste su.',
          ],
          correct: 1,
          hint: 'An ordinary negated command takes the imperfective.',
          explanation: 'Ne jedi kolače — imperfective in a negated imperative.',
        },
        {
          q: 'Koja rečenica upozorava na jednu slučajnu nezgodu?',
          options: [
            'Ne pij toliko kave.',
            'Nemoj se izgubiti u gradu!',
            'Ne kasni na posao.',
            'Ne pušite ovdje.',
          ],
          correct: 1,
          hint: 'Look for nemoj followed by a perfective.',
          explanation:
            'Nemoj se izgubiti — a warning against a single accidental event, so the perfective is right.',
        },
        {
          q: 'Dopuni: Prestao je ___ čim je čuo vijest.',
          options: ['pojesti', 'pojede', 'jeo', 'jesti'],
          correct: 3,
          hint: 'prestati is a phase verb.',
          explanation: 'prestao je jesti — phase verbs take an imperfective infinitive.',
        },
        {
          q: 'Koji je glagol dvovidan (i svršen i nesvršen)?',
          options: ['zatvoriti', 'telefonirati', 'napisati', 'čitati'],
          correct: 1,
          hint: 'Borrowings in -irati are the typical case.',
          explanation:
            'telefonirati is biaspectual; zatvoriti and napisati are perfective, čitati imperfective.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ne ___ vrata, vani je hladno."',
        options: ['otvori', 'otvaraj', 'otvoriti', 'otvorio'],
        correct: 1,
        explanation: 'An ordinary negated imperative is imperfective: ne otvaraj.',
      },
      {
        q: 'Complete: "Prestala je ___ nakon operacije."',
        options: ['popušiti', 'pušiti', 'popuši', 'pušila'],
        correct: 1,
        explanation: 'prestati takes an imperfective infinitive: prestala je pušiti.',
      },
      {
        q: 'Complete the warning: "Nemoj se ___ nožem!"',
        options: ['rezao', 'režeš', 'porezati', 'porezao'],
        correct: 2,
        explanation:
          'A warning against one accidental act keeps the perfective infinitive after nemoj: nemoj se porezati. The participles and the present tense cannot follow nemoj.',
      },
      {
        q: 'Which is correct for "don’t write that"?',
        options: ['Ne piši to.', 'Ne napiši to.', 'Ne napisati to.', 'Nepiši to.'],
        correct: 0,
        explanation: 'Ne piši to — negated imperative, imperfective, and ne written apart.',
      },
      {
        q: 'Which sentence is ungrammatical?',
        options: [
          'Počela je kuhati ručak.',
          'Nastavio je učiti.',
          'Počela je skuhati ručak.',
          'Prestali su se svađati.',
        ],
        correct: 2,
        explanation:
          'A phase verb cannot take a perfective: you cannot begin a completed whole, so počela je kuhati.',
      },
      {
        q: 'What does "Organizirali smo koncert" allow, given that organizirati is biaspectual?',
        options: [
          'Only "we organised it (completed)"',
          'Only "we were organising it"',
          'Either reading — context decides',
          'Neither; the verb needs a prefix',
        ],
        correct: 2,
        explanation:
          'A biaspectual verb is both aspects in one form; only the context tells which reading applies.',
      },
    ],
    vocab: [
      [
        'glagolski vid',
        'verbal aspect',
        'Glagolski vid u hrvatskom nije stvar stila, nego gramatike.',
      ],
      ['svršen', 'perfective', 'Svršeni glagol izriče dovršenu radnju.'],
      ['nesvršen', 'imperfective', 'Nesvršeni glagol izriče radnju u tijeku ili ponavljanje.'],
      ['dvovidan', 'biaspectual', 'Glagol "organizirati" je dvovidan.'],
      ['zabrana', 'prohibition', 'Zabrana se izriče nesvršenim glagolom: ne zatvaraj.'],
      ['upozorenje', 'warning', 'Upozorenje "Nemoj pasti!" zadržava svršeni glagol.'],
      ['zapovjedni način', 'imperative mood', 'Zapovjedni način glagola "kupiti" je "kupi".'],
      [
        'povijesni prezent',
        'historic present',
        'Povijesni prezent oživljava pripovijedanje o prošlosti.',
      ],
      [
        'fazni glagol',
        'phase verb',
        'Fazni glagoli početi, nastaviti i prestati traže nesvršeni infinitiv.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Da je znao, ____ bi došao. (participle of biti, m.)',
          answer: 'bio',
          hint: 'The second conditional starts with the participle of biti, agreeing with the subject.',
          explanation: 'bio bi došao — the second conditional for a masculine subject.',
        },
        {
          type: 'type',
          q: 'Dopuni: Da je znala, ____ bi došla. (participle of biti, f.)',
          answer: 'bila',
          hint: 'Both participles agree with a feminine subject.',
          explanation: 'bila bi došla — both participles feminine.',
        },
        {
          type: 'type',
          q: 'Dopuni: Mi ____ bili otišli da nije padala kiša. (conditional of biti, 1st pl.)',
          answer: 'bismo',
          hint: 'One word; the first person plural of the conditional auxiliary.',
          explanation: 'Mi bismo bili otišli — after the subject the clitic comes second.',
        },
        {
          type: 'type',
          q: 'Dopuni: Bio bih ti ____ da sam znao. (reći, participle, m.)',
          answer: 'rekao',
          hint: 'The l-participle of the main verb, masculine singular.',
          explanation: 'Bio bih ti rekao — "I would have told you".',
        },
        {
          type: 'type',
          q: 'Dopuni: Oni ____ bili stigli na vrijeme da nije bilo gužve. (conditional of biti, 3rd pl.)',
          answer: 'bi',
          hint: 'The third person plural of the conditional auxiliary is the same as the singular.',
          explanation: 'Oni bi bili stigli — the second conditional in the third person plural.',
        },
        {
          q: 'Koja rečenica kaže da se putovanje nije dogodilo?',
          options: [
            'Bili smo otputovali.',
            'Bili bismo otputovali.',
            'Otputovali smo.',
            'Bili smo već otputovali.',
          ],
          correct: 1,
          hint: 'One word decides the factual status: smo or bismo.',
          explanation: 'Bili bismo otputovali — the second conditional reports a non-event.',
        },
        {
          q: 'Dopuni: Marko ___ ostao da ga nisu zvali na posao.',
          options: ['bio bi', 'bio je', 'bi bio', 'bih bio'],
          correct: 2,
          hint: 'After a named subject the clitic takes second place.',
          explanation: 'Marko bi bio ostao — the clitic bi follows the subject directly.',
        },
        {
          q: 'Poruka prijatelju: "Da sam znao, ___." Što je sasvim standardno i prirodno?',
          options: ['došao bih', 'došao sam', 'bio sam došao', 'dođem'],
          correct: 0,
          hint: 'The da-clause already places the condition in the past.',
          explanation:
            'došao bih — the first conditional with a past da-clause is standard and sufficient.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Da ste nas pitali, ___ pomogli." (we would have helped you)',
        options: ['bili bismo vam', 'bili smo vam', 'bismo bili vam', 'bili bi vam'],
        correct: 0,
        explanation:
          'bili bismo vam pomogli — the second conditional, with the auxiliary bismo before the dative vam.',
      },
      {
        q: 'Complete: "___ došla, ali me nitko nije pozvao." (I, a woman, would have come)',
        options: ['Bio bih', 'Bila bih', 'Bila sam', 'Bila bi'],
        correct: 1,
        explanation:
          'Bila bih došla — feminine participles and the first person bih. Bila sam would make it a real pluperfect.',
      },
      {
        q: 'Complete: "___ javio, ali nisam imao tvoj broj." (I would have got in touch with you)',
        options: ['Bio bih ti se', 'Bio ti bih se', 'Bio se bih ti', 'Bih ti se bio'],
        correct: 0,
        explanation: 'Bio bih ti se javio — the cluster runs auxiliary, dative, then se.',
      },
      {
        q: 'Which sentence reports that the call actually happened?',
        options: ['Bila bi nazvala.', 'Nazvala bi.', 'Bila je nazvala.', 'Bila bih nazvala.'],
        correct: 2,
        explanation:
          'Bila je nazvala is the pluperfect — indicative and real. The others are conditional.',
      },
      {
        q: 'Which sentence is wrong?',
        options: [
          'Da smo znali, pomogli bismo.',
          'Da smo znali, bili bismo pomogli.',
          'Da bismo znali, pomogli bismo.',
          'Da smo znale, bile bismo pomogle.',
        ],
        correct: 2,
        explanation:
          '"Da bismo znali" means "in order to know"; the condition takes the perfekt: da smo znali.',
      },
      {
        q: 'A company’s apology reads "Da smo znali, bili bismo postupili drukčije." Why this form?',
        options: [
          'It is the only grammatical way to say it',
          'The explicit second conditional stresses that it did not happen and reads as more considered',
          'It is a pluperfect',
          'It is required after da',
        ],
        correct: 1,
        explanation:
          'The first conditional would also be standard; the second conditional makes the unreality explicit and sounds more deliberate.',
      },
    ],
    vocab: [
      ['kondicional', 'conditional (mood)', 'Kondicional drugi izriče ono što se nije dogodilo.'],
      [
        'pogodbena rečenica',
        'conditional clause',
        'Pogodbena rečenica s "da" često stoji na početku.',
      ],
      [
        'nestvaran',
        'unreal, counterfactual',
        'Nestvarna pogodba odnosi se na nešto što se nije dogodilo.',
      ],
      ['žaljenje', 'regret', 'Drugim kondicionalom često se izriče žaljenje.'],
      [
        'isprika',
        'apology',
        'U službenoj isprici tvrtka je napisala da bi bila postupila drukčije.',
      ],
      ['postupiti', 'to act, to proceed', 'Da smo znali, postupili bismo drukčije.'],
      ['pomoćni glagol', 'auxiliary verb', 'Pomoćni glagol "biti" tvori i perfekt i kondicional.'],
      [
        'glagolski pridjev radni',
        'the l-participle',
        'Glagolski pridjev radni slaže se sa subjektom u rodu i broju.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Dopuni formalnu obavijest: ____ je dostaviti presliku osobne iskaznice. (necessary)',
          answer: 'Potrebno',
          hint: 'An impersonal adjective of necessity, neuter, with je.',
          explanation: 'Potrebno je dostaviti… — the impersonal obligation names nobody.',
        },
        {
          type: 'type',
          q: 'Dopuni: ____ mi nove naočale. (I need — trebati)',
          answer: 'Trebaju',
          hint: 'In the dative construction the thing needed is the subject, and it is plural here.',
          explanation: 'Trebaju mi nove naočale — plural verb to agree with naočale.',
        },
        {
          type: 'type',
          q: 'Dopuni neutralnom česticom: ____ je ministar podnio ostavku, ali to još nije potvrđeno. (allegedly)',
          answer: 'Navodno',
          hint: 'The particle journalists use to report without endorsing.',
          explanation: 'Navodno — the claim is reported, not vouched for.',
        },
        {
          type: 'type',
          q: 'Dopuni savjet: ____ biste se javiti liječniku. (should — trebati, addressing Vi)',
          answer: 'Trebali',
          accept: ['Trebale'],
          hint: 'The conditional of trebati: a plural participle to go with biste.',
          explanation:
            'Trebali biste se javiti — softened advice in the polite form (Trebale for a group of women).',
        },
        {
          type: 'type',
          q: 'Dopuni bezličnu normu: ____ provjeriti podatke prije objave. (one ought to)',
          answer: 'Valja',
          accept: ['Treba'],
          hint: 'An impersonal verb of obligation, third person singular, with no subject.',
          explanation: 'Valja (or Treba) provjeriti… — an impersonal norm with nobody named.',
        },
        {
          q: 'Kolegi pišeš ljubaznu molbu. Koja rečenica odgovara?',
          options: [
            'Pregledat ćeš ugovor do sutra.',
            'Moraš pregledati ugovor do sutra.',
            'Možeš li pregledati ugovor do sutra?',
            'Ugovor je potrebno pregledati do sutra.',
          ],
          correct: 2,
          hint: 'A request leaves the other person room to answer.',
          explanation:
            'Možeš li…? is a request. The future and moraš are orders; the impersonal is a rule.',
        },
        {
          q: 'Koja čestica izriče najveću sigurnost?',
          options: ['možda', 'valjda', 'vjerojatno', 'sigurno'],
          correct: 3,
          hint: 'Order them from maybe to certainly.',
          explanation:
            'sigurno is certain; vjerojatno probable; valjda a shrugging presumption; možda a mere possibility.',
        },
        {
          q: 'Roditelj djetetu: "Pospremit ćeš sobu prije večere." Što je to?',
          options: ['Naredba izrečena budućim vremenom', 'Pitanje', 'Predviđanje', 'Molba'],
          correct: 0,
          hint: 'Who is speaking, and does the child have a choice?',
          explanation: 'The future as an instruction: compliance is presented as already settled.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete the formal notice: "Zahtjev ___ podnijeti u roku od osam dana."',
        options: ['je potrebno', 'moraš', 'trebaš', 'je potreban'],
        correct: 0,
        explanation:
          'je potrebno — the impersonal obligation of an official notice. moraš and trebaš address one person informally, and potreban cannot agree with an infinitive.',
      },
      {
        q: 'Complete: "___ mi tvoji savjeti." (I need your advice)',
        options: ['Trebam', 'Trebaju', 'Treba', 'Trebali'],
        correct: 1,
        explanation:
          'Trebaju mi tvoji savjeti — in the dative construction the thing needed is the subject, and savjeti is plural.',
      },
      {
        q: 'Which sentence reports a rumour without endorsing it?',
        options: [
          'Vjerojatno se oženio.',
          'Sigurno se oženio.',
          'Možda se oženio.',
          'Navodno se oženio.',
        ],
        correct: 3,
        explanation:
          'navodno passes a claim on and distances the speaker from it; the others express the speaker’s own certainty.',
      },
      {
        q: 'A colleague of equal rank writes: "Tablicu ćeš mi poslati do petka." How does it read?',
        options: [
          'A neutral prediction',
          'A polite request',
          'An order presented as already settled',
          'An apology',
        ],
        correct: 2,
        explanation:
          'The future used as an instruction treats compliance as decided — stronger than an imperative, and an escalation between peers.',
      },
      {
        q: 'Complete the advice to a friend: "___ se više odmarati."',
        options: ['Trebao bi', 'Trebao bih', 'Trebali bismo', 'Trebao je'],
        correct: 0,
        explanation:
          'Trebao bi — the conditional of trebati softens the advice, in the second person singular.',
      },
      {
        q: 'What does "navodno" add to "Navodno je dao ostavku"?',
        options: [
          'Certainty',
          'The speaker’s own hope',
          'That the claim is reported, not endorsed',
          'An obligation',
        ],
        correct: 2,
        explanation:
          'navodno marks the claim as someone else’s — the reporter does not vouch for it.',
      },
    ],
    vocab: [
      [
        'modalnost',
        'modality',
        'Modalnost se u hrvatskom izriče i česticama, a ne samo modalnim glagolima.',
      ],
      [
        'obveza',
        'obligation',
        'Bezlična konstrukcija izriče obvezu, a ne imenuje tko je mora ispuniti.',
      ],
      ['dopuštenje', 'permission', 'Glagol "moći" može izreći i dopuštenje: Možete ući.'],
      ['vjerojatnost', 'probability', 'Čestica "vjerojatno" izriče veliku vjerojatnost.'],
      [
        'navodno',
        'allegedly, reportedly',
        'Navodno je tvrtka prodana, ali službene potvrde još nema.',
      ],
      ['valjda', 'presumably, I suppose', 'Valjda će autobus doći na vrijeme.'],
      [
        'potrebno je',
        'it is necessary',
        'Potrebno je prijaviti promjenu adrese u roku od osam dana.',
      ],
      [
        'naredba',
        'order, command',
        'Budućim vremenom izrečena naredba zvuči kao da je već odlučeno.',
      ],
      ['molba', 'request', 'Upitna rečenica s "možeš li" zvuči kao molba, a ne kao naredba.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni klitikama: Jutros ____ vidjeli na kolodvoru. (biti, 1st pl. + on, accusative clitic)',
          answer: 'smo ga',
          hint: 'The auxiliary comes first in the cluster, then the pronoun.',
          explanation:
            'Jutros smo ga vidjeli — auxiliary before the accusative clitic, in second position.',
        },
        {
          type: 'type',
          q: 'Sažmi u imenski izraz: "Kad se vratio iz Beča, …" → Po ____ iz Beča, … (povratak)',
          answer: 'povratku',
          hint: 'po in the sense of "after" takes the locative.',
          explanation: 'Po povratku iz Beča — the clause condensed into a phrase.',
        },
        {
          type: 'type',
          q: 'Sažmi glagolskim prilogom prošlim: "____ pismo, sjela je za stol." (pročitati)',
          answer: 'Pročitavši',
          hint: 'The past verbal adverb of a perfective verb ends in -vši.',
          explanation: 'Pročitavši pismo — one clause becomes a phrase and the sentence breathes.',
        },
        {
          type: 'type',
          q: 'Neka vijest bude KADA: "Novi zakon stupio je na snagu ____." (last month)',
          answer: 'prošloga mjeseca',
          accept: ['prošlog mjeseca'],
          hint: 'A point in time takes a bare genitive, and it goes in the emphatic final slot.',
          explanation: 'prošloga mjeseca at the end makes the time the news.',
        },
        {
          type: 'type',
          q: 'Dopuni klitikama: Knjigu ____ vratio jučer. (biti, 1st sg. + ona, dative clitic)',
          answer: 'sam joj',
          hint: 'The auxiliary opens the cluster; the dative pronoun follows it.',
          explanation:
            'Knjigu sam joj vratio — auxiliary before the dative, in second position after the fronted object.',
        },
        {
          q: 'Koji red riječi odgovara na pitanje ŠTO je Ana kupila?',
          options: [
            'Bicikl je kupila Ana.',
            'Ana je kupila bicikl.',
            'Bicikl je Ana kupila.',
            'Kupila je bicikl Ana.',
          ],
          correct: 1,
          hint: 'The new information goes last.',
          explanation: 'Ana je kupila bicikl — bicikl is the news, so it takes the end position.',
        },
        {
          q: 'Kako ispraviti red riječi: "Sutra mi ćemo doći."?',
          options: [
            'Sutra ćemo mi doći.',
            'Mi sutra ćemo doći.',
            'Sutra doći mi ćemo.',
            'Ćemo sutra mi doći.',
          ],
          correct: 0,
          hint: 'Find the first constituent; the clitic follows it.',
          explanation: 'Sutra ćemo mi doći — ćemo in second position after sutra.',
        },
        {
          q: 'Koja rečenica stavlja naglasak na VRIJEME (odgovor na KADA)?',
          options: [
            'U subotu je bio koncert.',
            'Koncert je bio u subotu.',
            'U subotu koncert je bio.',
            'Bio je u subotu koncert.',
          ],
          correct: 1,
          hint: 'The end of the sentence is the emphatic position.',
          explanation: 'Koncert je bio u subotu — u subotu is the news, so it comes last.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete with the correct clitic position: "Prošlog ljeta ___ otišli na Hvar."',
        options: ['mi smo', 'smo', 'mi', 'je'],
        correct: 1,
        explanation:
          'Prošlog ljeta smo otišli — the clitic follows the first constituent directly.',
      },
      {
        q: 'Which order makes "the letter" the known topic and "this morning" the news?',
        options: [
          'Ana je jutros poslala pismo.',
          'Pismo je Ana poslala jutros.',
          'Jutros je Ana poslala pismo.',
          'Poslala je Ana pismo jutros.',
        ],
        correct: 1,
        explanation:
          'Known first, new last: pismo opens the sentence as the topic and jutros lands in the emphatic final position.',
      },
      {
        q: 'Which is the condensed version of "Kad je sastanak završio, direktor je otišao kući"?',
        options: [
          'Po završetku sastanka direktor je otišao kući.',
          'Po završetka sastanka direktor je otišao kući.',
          'Direktor, koji je bio na sastanku, koji je završio, otišao je kući.',
          'Sastanak je završio, i nakon što je sastanak završio, direktor je otišao kući.',
        ],
        correct: 0,
        explanation:
          'po + locative (završetku) turns the clause into a phrase; završetka is the wrong case.',
      },
      {
        q: 'Which sentence has the clitic in the wrong place?',
        options: [
          'Sutra ćemo otići na more.',
          'Mi ćemo sutra otići na more.',
          'Sutra mi ćemo otići na more.',
          'Na more ćemo otići sutra.',
        ],
        correct: 2,
        explanation: 'After the fronted sutra the clitic must come second: Sutra ćemo (mi) otići.',
      },
      {
        q: 'Three long sentences describe a failed rescue, then: "Nitko nije preživio." What does the short sentence do?',
        options: [
          'Starts a list',
          'Corrects a grammar error',
          'Softens the news',
          'Carries the point — the weight lands on the short sentence after long ones',
        ],
        correct: 3,
        explanation: 'Long, long, short: the short sentence is where the reader feels the weight.',
      },
      {
        q: 'Which sentence stacks the subordination the lesson warns against?',
        options: [
          'Pročitao je knjigu koju mu je dao prijatelj koji je radio u knjižnici koja je zatvorena prošle godine.',
          'Pročitao je knjigu koju mu je dao prijatelj.',
          'Pročitao je posuđenu knjigu.',
          'Pročitao je knjigu. Posudio mu ju je prijatelj.',
        ],
        correct: 0,
        explanation:
          'Three nested koji-clauses: grammatical, and unreadable. Condense one or stop.',
      },
    ],
    vocab: [
      ['ritam', 'rhythm', 'Ritam rečenica govori čitatelju što je važno.'],
      ['red riječi', 'word order', 'Slobodan red riječi omogućuje isticanje nove informacije.'],
      ['isticanje', 'emphasis, foregrounding', 'Kraj rečenice mjesto je isticanja.'],
      [
        'tema',
        'topic (given information)',
        'Poznata informacija, tema, stoji na početku rečenice.',
      ],
      ['sažeti', 'to condense', 'Zavisnu rečenicu možeš sažeti u imenski izraz.'],
      ['klitika', 'clitic', 'Klitika uvijek stoji na drugom mjestu u rečenici.'],
      [
        'glagolski prilog prošli',
        'past verbal adverb',
        'Glagolski prilog prošli "razmotrivši" sažima cijelu rečenicu.',
      ],
      ['odlomak', 'paragraph', 'Kratka rečenica na kraju odlomka nosi njegovu poantu.'],
      ['poanta', 'the point (of a text or joke)', 'Poanta je u kratkoj rečenici nakon dugih.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni izrazom za odlučno odbijanje: "Da ti dam svoj auto? ____!" (absolutely not, two words)',
          answer: 'Taman posla',
          hint: 'An indignant two-word refusal.',
          explanation: 'Taman posla! — an indignant "absolutely not".',
        },
        {
          type: 'type',
          q: 'Dopuni izrazom za naglašeno slaganje: "Je li more bilo toplo? — ____!" (of course, two words)',
          answer: 'Nego što',
          hint: 'Literally "than what?" — emphatic yes.',
          explanation: 'Nego što! — of course it was.',
        },
        {
          type: 'type',
          q: 'Dopuni česticom nevjerice: "____ daj, opet si izgubio mobitel?"',
          answer: 'Ma',
          hint: 'A short particle of dismissal and disbelief.',
          explanation: 'Ma daj — "oh come on".',
        },
        {
          type: 'type',
          q: 'Napiši ironičnu umanjenicu: "Imamo jedan ____ — nema struje u cijelom gradu." (problem)',
          answer: 'problemčić',
          hint: 'A diminutive suffix on something that is anything but small.',
          explanation: 'problemčić — the diminutive on a city-wide blackout is the irony.',
        },
        {
          type: 'type',
          q: 'Dopuni skromni odgovor o poslu koji dobro ide: "Kako ide firma? — ____, ne mogu se žaliti." (going somehow, two words)',
          answer: 'Ide nekako',
          hint: 'Croatian modesty: a verb and an adverb that sound lukewarm and are not.',
          explanation: 'Ide nekako — understated, and it means things are going well.',
        },
        {
          q: 'Nakon katastrofalne prezentacije kolega kaže: "Svaka čast, stvarno." Što je najvjerojatnije rekao?',
          options: ['Iskrenu pohvalu', 'Sarkazam', 'Ispriku', 'Molbu'],
          correct: 1,
          hint: 'Praise and situation point in opposite directions.',
          explanation: 'After a disaster, svaka čast is sarcasm.',
        },
        {
          q: 'Koja je rečenica ironično retoričko pitanje?',
          options: [
            'Gdje je stanica?',
            'A tko je, molim te, rekao da će biti jeftino?',
            'Koliko košta karta?',
            'Kada polazi vlak?',
          ],
          correct: 1,
          hint: 'Which one leaves no room for an answer?',
          explanation: 'A tko je, molim te, rekao…? — nobody is asked anything; it is a jab.',
        },
        {
          q: 'Prijatelj na tvoj prijedlog za ručak kaže: "Može." Što to znači?',
          options: ['Prihvaća prijedlog', 'Nevoljko pristaje', 'Odbija', 'Pita što ćete jesti'],
          correct: 0,
          hint: 'Croatian agrees without enthusiasm words.',
          explanation: 'Može is plain acceptance, not reluctance.',
        },
      ],
    },
    checkB: [
      {
        q: '"Baš si točan," says a friend when you arrive an hour late. What did they mean?',
        options: ['Genuine praise', 'Sarcasm — you are very late', 'A question', 'An apology'],
        correct: 1,
        explanation: 'baš + praise in a situation that does not deserve it is sarcasm.',
      },
      {
        q: 'Complete the emphatic agreement: "Hoćeš li doći na proslavu? — ___!"',
        options: ['Nego što', 'Taman posla', 'Ma daj', 'E pa'],
        correct: 0,
        explanation: 'Nego što! — "of course!", emphatic agreement.',
      },
      {
        q: 'Complete the indignant refusal: "Da mu ja platim večeru? ___!"',
        options: ['Nego što', 'Svaka čast', 'Nije loše', 'Taman posla'],
        correct: 3,
        explanation: 'Taman posla! — absolutely not.',
      },
      {
        q: 'Which sentence is written irony through register incongruity?',
        options: [
          'Semafor na uglu opet ne radi.',
          'Nadležne službe provele su opsežnu stratešku analizu pokvarenog semafora.',
          'Semafor je popravljen.',
          'Molimo vozače da pripaze.',
        ],
        correct: 1,
        explanation:
          'Grand administrative vocabulary applied to a broken traffic light is the journalist’s ironic device.',
      },
      {
        q: 'A friend says "Nije loše" about your new flat. Which reaction misreads them?',
        options: [
          'Hvala, drago mi je da ti se sviđa.',
          'Znači, sviđa ti se.',
          'Šteta, mislio sam da će ti se svidjeti.',
          'Super, hvala.',
        ],
        correct: 2,
        explanation:
          '"Nije loše" is genuine approval; taking it as disappointment misreads Croatian understatement.',
      },
      {
        q: 'What does the diminutive do in "Imamo jedan problemčić — poplavio je cijeli podrum"?',
        options: [
          'Reports a genuinely small problem',
          'Signals wry irony — a diminutive on something large',
          'Marks a dialect',
          'Makes it more formal',
        ],
        correct: 1,
        explanation: 'A flooded cellar is not small; the diminutive is the ironic mismatch.',
      },
    ],
    vocab: [
      ['ironija', 'irony', 'Ironija je gramatički obična rečenica s obrnutim značenjem.'],
      ['sarkazam', 'sarcasm', 'U napetom razgovoru "baš" uz pohvalu obično je sarkazam.'],
      ['podtekst', 'subtext', 'Podtekst se čita iz situacije, a ne iz riječi.'],
      ['umanjenica', 'diminutive', 'Umanjenica "problemčić" može ironično umanjiti velik problem.'],
      ['nevjerica', 'disbelief', 'Čestica "ma" često izriče nevjericu.'],
      ['odbijanje', 'refusal', '"Taman posla!" je ogorčeno odbijanje.'],
      ['pohvala', 'praise', 'Hrvatska pohvala često zvuči kao "nije loše".'],
      ['skromnost', 'modesty', 'Iz skromnosti ljudi kažu "ide nekako" i kad posao dobro ide.'],
      ['intonacija', 'intonation', 'Intonacija u govoru otkriva je li rečenica ironična.'],
    ],
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
        {
          type: 'type',
          q: 'Napiši šaljivu umanjenicu: "Za ovaj ____ od pet tisuća eura morat ćemo podići kredit." (račun)',
          answer: 'računčić',
          hint: 'A diminutive suffix on something large.',
          explanation: 'računčić — a "little bill" that needs a loan is the joke.',
        },
        {
          type: 'type',
          q: 'Napiši šaljivu umanjenicu: "Pala je jedna mala ____ — ulice su bile pod vodom." (kiša)',
          answer: 'kišica',
          hint: 'The feminine diminutive suffix -ica.',
          explanation: 'kišica — a "little drizzle" that floods the streets.',
        },
        {
          type: 'type',
          q: 'Napiši šaljivu uvećanicu: "Pogledaj tu ____ — ima čak dvije sobe!" (kuća, accusative)',
          answer: 'kućerinu',
          hint: 'The augmentative suffix -erina, then the accusative ending.',
          explanation: 'kućerinu — a big word for a small house, the reverse mismatch.',
        },
        {
          type: 'type',
          q: 'Dopuni lažno svečani vokativ bratu: "____ inženjeru, dodajte mi sol." (gospodin)',
          answer: 'Gospodine',
          hint: 'Both words of the address take the vocative.',
          explanation: 'Gospodine inženjeru — mock formality at the family table.',
        },
        {
          q: 'Koja riječ šaljivo uvećava nešto malo?',
          options: ['kućica', 'kućerina', 'kućanstvo', 'kućni'],
          correct: 1,
          hint: 'Look for the augmentative suffix.',
          explanation: 'kućerina is the augmentative; kućica the diminutive.',
        },
        {
          q: 'Kolega za kvar koji je zaustavio cijelu tvornicu kaže "mala poteškoćica". Što radi?',
          options: [
            'Precizno opisuje manji kvar',
            'Šaljivo umanjuje nešto veliko',
            'Govori dijalektom',
            'Ispričava se',
          ],
          correct: 1,
          hint: 'Compare the size of the word with the size of the problem.',
          explanation: 'A diminutive on a factory-wide stoppage is the comic mismatch.',
        },
        {
          q: 'Zašto se "grad" (naselje) i "grad" (tuča) pišu isto, a izgovaraju različito?',
          options: [
            'Razlikuju se samo naglaskom',
            'Imaju različit rod',
            'Jedna je riječ strana',
            'Razlikuju se padežom',
          ],
          correct: 0,
          hint: 'Think of the C1 prosody lesson.',
          explanation:
            'The two words share their letters and differ in pitch accent alone, which is what a pun exploits.',
        },
        {
          q: 'U rečenici "Vidio sam čovjeka dalekozorom" tko je imao dalekozor?',
          options: ['Govornik', 'Čovjek', 'Obojica', 'Nitko'],
          correct: 0,
          hint: 'A bare instrumental is the means of the action.',
          explanation:
            'The bare instrumental makes the telescope the speaker’s instrument; the ambiguity is gone.',
        },
      ],
    },
    checkB: [
      {
        q: 'Why can "Došao je s kosom" be a pun?',
        options: [
          'kosa means both hair and scythe, and only the accent differs',
          'kosa is plural',
          'otići is biaspectual',
          'It rhymes',
        ],
        correct: 0,
        explanation:
          'kosa is two words in one spelling — hair and scythe — separated only by pitch accent.',
      },
      {
        q: 'Complete the joke about a mansion: "Kupili su lijepu ___ s dvanaest soba."',
        options: ['kuću', 'kućicu', 'kućerinu', 'kućanstvo'],
        correct: 1,
        explanation: 'kućicu — a diminutive on something enormous is the standard comic mismatch.',
      },
      {
        q: 'Complete the mock-formal address to your little sister: "___, izvolite juhu."',
        options: [
          'Gospođice ravnateljica',
          'Gospođice ravnateljice',
          'Gospođica ravnateljica',
          'Gospođici ravnateljici',
        ],
        correct: 1,
        explanation:
          'Both words take the vocative: gospođice ravnateljice — the mock formality is the joke.',
      },
      {
        q: 'Which pair shows the same spelling with two accents and two meanings?',
        options: ['luk (onion) / luk (arch)', 'kuća / kućica', 'grad / gradovi', 'pas / psa'],
        correct: 0,
        explanation: 'luk is onion and arch in one spelling; the others are forms of one word.',
      },
      {
        q: 'A Zagorje colleague delivers one line in broad kajkavian and everyone laughs. Which reaction is the mistake?',
        options: [
          'Laughing along',
          'Treating it as a comic register',
          'Telling him to speak the standard',
          'Asking what a word meant',
        ],
        correct: 2,
        explanation: 'The dialect switch is a deliberate register, not an error to be corrected.',
      },
      {
        q: 'What makes "Vidio sam čovjeka s dalekozorom" a possible joke?',
        options: [
          'It is ambiguous who had the telescope',
          'dalekozor has two accents',
          'vidjeti is a phase verb',
          'It is a vocative',
        ],
        correct: 0,
        explanation:
          'With s the telescope may be the man’s or the speaker’s; a comedian picks the reading you did not.',
      },
    ],
    vocab: [
      [
        'igra riječi',
        'pun, wordplay',
        'Igra riječi često počiva na naglasku koji se ne vidi u pismu.',
      ],
      ['šala', 'joke', 'Šala se može temeljiti na jednom padežnom nastavku.'],
      ['vic', 'joke (a told anecdote)', 'Ispričao je vic, ali nitko se nije nasmijao.'],
      ['dosjetka', 'witticism, quip', 'Njegova dosjetka nasmijala je cijelu dvoranu.'],
      ['homonim', 'homonym', 'Riječ "grad" homonim je: znači i naselje i tuču.'],
      ['uvećanica', 'augmentative', 'Uvećanica "kućerina" za malu kuću zvuči šaljivo.'],
      ['naglasak', 'accent, stress', 'Naglasak razlikuje kosu na glavi od kose u polju.'],
      [
        'prasnuti u smijeh',
        'to burst out laughing',
        'Kad je konobar zapjevao, svi su prasnuli u smijeh.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Iz Ministarstva se ____ da je natječaj poništen. (it is learned — doznati)',
          answer: 'doznaje',
          hint: 'The agentless se-construction that protects a source.',
          explanation: 'se doznaje — the source is not named.',
        },
        {
          type: 'type',
          q: 'Dopuni neutralnim glagolom navođenja: Ravnatelj ____ da škola ostaje otvorena. (says)',
          answer: 'kaže',
          accept: ['navodi'],
          hint: 'The plainest reporting verb, with no endorsement and no doubt.',
          explanation: 'kaže (or the formal navodi) — neutral attribution.',
        },
        {
          type: 'type',
          q: 'Napiši naslov: "Vlada ____ porez." (smanjiti, perfekt bez pomoćnog glagola)',
          answer: 'smanjila',
          hint: 'Headline register: the participle alone, agreeing with Vlada.',
          explanation: 'Vlada smanjila porez — the headline drops je.',
        },
        {
          type: 'type',
          q: 'Dopuni ustaljenu ogradu: ____ neslužbenim informacijama, sastanak je odgođen. (according to)',
          answer: 'Prema',
          hint: 'A preposition that takes the dative.',
          explanation: 'Prema neslužbenim informacijama — the standard hedge.',
        },
        {
          type: 'type',
          q: 'Dopuni česticu koja udaljava list od tvrdnje: Uhićeni je ____ bio blizak upravi. (allegedly)',
          answer: 'navodno',
          hint: 'The particle that reports without endorsing.',
          explanation: 'navodno — the paper does not vouch for the claim.',
        },
        {
          q: 'Koji glagol pokazuje da list izjavu smatra važnom?',
          options: ['kaže', 'navodi', 'ističe', 'tvrdi'],
          correct: 2,
          hint: 'One of these adds emphasis rather than doubt.',
          explanation: 'ističe — the paper presents the point as important.',
        },
        {
          q: 'Koji je odlomak vijesti obično najmanje informativan?',
          options: ['prvi', 'drugi', 'zadnji', 'svi su jednako važni'],
          correct: 2,
          hint: 'Think of the inverted pyramid.',
          explanation: 'Importance descends, so the last paragraph usually carries least.',
        },
        {
          q: 'Kojom rečenicom počinje vijest?',
          options: [
            'Potres jačine 4,2 pogodio je jutros okolicu Petrinje.',
            'Potresi su česti u Hrvatskoj.',
            'Na kraju, šteta je bila mala.',
            'Mnogi se pitaju što će biti.',
          ],
          correct: 0,
          hint: 'The lead answers who, what, where and when.',
          explanation: 'The lead gives the newest facts in one sentence.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete with the neutral, formal attribution: "Gradonačelnik ___ da će radovi završiti u svibnju."',
        options: ['tvrdi', 'upozorava', 'ističe', 'navodi'],
        correct: 3,
        explanation:
          'navodi is formal and neutral; tvrdi marks the claim as contested, and ističe and upozorava add weight.',
      },
      {
        q: 'Complete the headline: "Sabor ___ novi zakon o radu."',
        options: ['je izglasao', 'izglasao', 'izglasa', 'izglasavši'],
        correct: 1,
        explanation: 'Headlines drop the auxiliary je: Sabor izglasao novi zakon.',
      },
      {
        q: 'Which sentence conceals who took the decision?',
        options: [
          'Uprava je odlučila zatvoriti tvornicu.',
          'Odlučeno je da se tvornica zatvori.',
          'Sindikat je odbio odluku.',
          'Direktor je donio odluku.',
        ],
        correct: 1,
        explanation: 'Odlučeno je… is agentless: a decision with nobody behind it.',
      },
      {
        q: 'Which sentence is incomplete inside a running article?',
        options: [
          'Policija je uhitila osumnjičenika.',
          'Osumnjičenik je uhićen jučer.',
          'Policija uhitila osumnjičenika.',
          'Policija je jučer uhitila osumnjičenika.',
        ],
        correct: 2,
        explanation:
          'The dropped je belongs to headlines; in the body of the text it must be restored.',
      },
      {
        q: 'The paper writes "Oporba tvrdi da je natječaj namješten." What does tvrdi signal?',
        options: [
          'neutral reporting',
          'that the claim is contested',
          'that the paper agrees',
          'a direct quotation',
        ],
        correct: 1,
        explanation: 'tvrdi reports a claim as disputed or unproven — not the neutral kaže.',
      },
      {
        q: 'Complete the newsroom phrase: "Kako ___, istraga je proširena." (as we learn)',
        options: ['doznajemo', 'doznajem', 'doznaje', 'doznati'],
        correct: 0,
        explanation: 'Kako doznajemo — the paper speaks in the first person plural.',
      },
    ],
    vocab: [
      ['vijest', 'news item', 'Vijest počinje najnovijom i najvažnijom informacijom.'],
      ['naslov', 'headline, title', 'U naslovu se pomoćni glagol često izostavlja.'],
      ['priopćenje', 'press release, statement', 'Ministarstvo se oglasilo priopćenjem.'],
      ['izvor', 'source', 'Izvor blizak istrazi potvrdio je uhićenje.'],
      ['izjava', 'statement', 'Ministar je u izjavi naglasio da je reforma nužna.'],
      ['tvrditi', 'to claim, assert', 'Oporba tvrdi da izmjene nisu usklađene s propisima.'],
      ['isticati', 'to stress, emphasise', 'Sindikati ističu da su plaće premale.'],
      [
        'doznaje se',
        'it is learned (source unnamed)',
        'Doznaje se da je ravnatelj podnio ostavku.',
      ],
      ['novinar', 'journalist', 'Novinar je provjerio podatke prije objave.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni ustaljeni izraz: ____ je ovoga rada utvrditi uzroke pojave. (the aim)',
          answer: 'Cilj',
          hint: 'The standard way a Croatian paper states what it sets out to do.',
          explanation: 'Cilj je ovoga rada… — the conventional statement of aim.',
        },
        {
          type: 'type',
          q: 'Dopuni bezlično: U radu se ____ podaci iz tri županije. (analizirati)',
          answer: 'analiziraju',
          hint: 'The se-passive agrees with podaci, a plural.',
          explanation: 'U radu se analiziraju podaci — the impersonal voice.',
        },
        {
          type: 'type',
          q: 'Dopuni: Rezultati se podudaraju s nalazima ____. (Matasović, autor)',
          answer: 'Matasovića',
          hint: 'A cited man’s name declines; here it needs the genitive.',
          explanation: 's nalazima Matasovića — the genitive of the cited author.',
        },
        {
          type: 'type',
          q: 'Dopuni domaćom riječi: Podaci su pohranjeni na ____. (the computer)',
          answer: 'računalu',
          hint: 'The native coinage, in the locative after na.',
          explanation: 'na računalu — the Croatian term rather than a borrowing.',
        },
        {
          type: 'type',
          q: 'Dopuni ogradu: Rezultati ____ na povezanost, ali uzorak je malen. (point towards)',
          answer: 'upućuju',
          hint: 'A hedged verb, weaker than pokazuju.',
          explanation: 'Rezultati upućuju na… — the results point towards a connection.',
        },
        {
          q: 'Koji odjeljak stoji na početku rada i sažima cijeli rad?',
          options: ['sažetak', 'rasprava', 'zaključak', 'literatura'],
          correct: 0,
          hint: 'It is usually followed by ključne riječi.',
          explanation: 'sažetak — the abstract.',
        },
        {
          q: 'Što znači "usp. Silić 2006" u tekstu?',
          options: ['Silić agrees', 'compare Silić 2006', 'quoted from Silić', 'against Silić'],
          correct: 1,
          hint: 'usp. is short for an imperative verb.',
          explanation: 'usp. = usporedi, the Croatian equivalent of cf.',
        },
        {
          q: 'Koja rečenica zvuči kao prijevod s engleskog?',
          options: [
            'U radu se polazi od pretpostavke…',
            'Ovaj rad će pokazati…',
            'Cilj je ovoga rada…',
            'Iz navedenoga proizlazi…',
          ],
          correct: 1,
          hint: 'Which one makes the paper itself the grammatical subject of a future verb?',
          explanation:
            '"Ovaj rad će pokazati" copies "this paper will show"; the others are the genre’s own formulas.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ da se rezultati razlikuju prema spolu ispitanika." (impersonal: it was found)',
        options: ['Utvrdili smo', 'Utvrđeno je', 'Utvrdio sam', 'Utvrđena je'],
        correct: 1,
        explanation:
          'Utvrđeno je — the impersonal neuter participle is the genre’s voice; utvrđena cannot agree with a clause.',
      },
      {
        q: 'Complete: "Prema ___, pojam je nejasno određen." (Babić)',
        options: ['Babić', 'Babića', 'Babiću', 'Babićem'],
        correct: 2,
        explanation: 'prema takes the dative, and a cited man’s name declines: prema Babiću.',
      },
      {
        q: 'Complete: "Kako tvrdi ___, norma je stabilna." (Anić)',
        options: ['Anić', 'Anića', 'Aniću', 'Anićem'],
        correct: 0,
        explanation:
          'The name is the subject of tvrdi, so it stays in the nominative: kako tvrdi Anić.',
      },
      {
        q: 'Which is the conventional hedged claim?',
        options: [
          'Rezultati nedvojbeno dokazuju učinak.',
          'Čini se da postoji određeni učinak.',
          'Ja sam siguran da učinak postoji.',
          'Učinak sigurno postoji.',
        ],
        correct: 1,
        explanation: 'čini se da… hedges the claim, as the genre expects.',
      },
      {
        q: 'What does a Croatian paper call its list of references?',
        options: ['literatura', 'reference', 'citati', 'popis autora'],
        correct: 0,
        explanation: 'literatura — never "reference".',
      },
      {
        q: 'Which is the native Croatian coinage for "browser"?',
        options: ['preglednik', 'sučelje', 'računalo', 'zaslon'],
        correct: 0,
        explanation:
          'preglednik is the browser; sučelje is the interface, računalo the computer, zaslon the screen.',
      },
    ],
    vocab: [
      ['sažetak', 'abstract', 'Sažetak ne smije biti dulji od dvjesto riječi.'],
      ['ključne riječi', 'keywords', 'Ispod sažetka navode se ključne riječi.'],
      [
        'rasprava',
        'discussion (section)',
        'U raspravi se rezultati uspoređuju s ranijim istraživanjima.',
      ],
      ['literatura', 'references, bibliography', 'U literaturi se navode svi citirani radovi.'],
      ['pretpostavka', 'assumption, hypothesis', 'Rad polazi od pretpostavke da je veza uzročna.'],
      ['ispitanik', 'respondent, participant', 'U istraživanju je sudjelovalo dvjesto ispitanika.'],
      ['nalaz', 'finding', 'Nalazi se podudaraju s rezultatima ranijih studija.'],
      ['uzorak', 'sample', 'Uzorak je premalen za pouzdane zaključke.'],
      ['recenzent', 'reviewer (peer)', 'Autorica zahvaljuje recenzentima na korisnim primjedbama.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni aoristom, 3. lice jednine: Tada ____ vrata i nestade. (otvoriti)',
          answer: 'otvori',
          hint: 'The third person singular aorist of an -iti verb drops the -ti.',
          explanation: 'otvori … nestade — two aorists for two sudden acts.',
        },
        {
          type: 'type',
          q: 'Dopuni aoristom, 1. lice množine: Rano ujutro ____ na put. (krenuti)',
          answer: 'krenusmo',
          hint: 'The first person plural aorist ends in -smo.',
          explanation: 'krenusmo — "we set off", literary narration.',
        },
        {
          type: 'type',
          q: 'Dopuni imperfektom, 3. lice jednine: Vani ____ kiša cijelu noć. (padati)',
          answer: 'padaše',
          hint: 'The imperfect for a sustained past state, third person in -še.',
          explanation: 'padaše — rain falling on and on, in the imperfect.',
        },
        {
          type: 'type',
          q: 'Dopuni aoristom, 3. lice množine: Gosti ____ i otiđoše. (ustati)',
          answer: 'ustadoše',
          hint: 'The third person plural aorist ends in -oše here, like otiđoše.',
          explanation: 'ustadoše i otiđoše — two aorists in a row.',
        },
        {
          type: 'type',
          q: 'Dopuni imperfektom od biti, 3. lice jednine: ____ to hladno jutro u studenom. (biti)',
          answer: 'Bijaše',
          hint: 'The imperfect of biti in the third person singular.',
          explanation: 'Bijaše — "It was", a lyrical opening of a scene.',
        },
        {
          q: 'Koja rečenica ima arhaizam?',
          options: [
            'Vazda je govorio istinu.',
            'Uvijek je govorio istinu.',
            'Stalno je govorio istinu.',
            'Često je govorio istinu.',
          ],
          correct: 0,
          hint: 'One of these adverbs belongs to an older layer of the language.',
          explanation: 'vazda is an archaism for uvijek; it signals distance in time.',
        },
        {
          q: 'Što je prvi korak pri čitanju vrlo duge književne rečenice?',
          options: [
            'Prevesti svaku riječ',
            'Preskočiti je',
            'Pronaći glavnu rečenicu',
            'Brojati zareze',
          ],
          correct: 2,
          hint: 'The syntax is a structure with a centre.',
          explanation: 'Find the main clause first, then reread.',
        },
        {
          q: 'Koji je glagol u aoristu?',
          options: ['rekao', 'reče', 'govoraše', 'reci'],
          correct: 1,
          hint: 'rekao is a participle, govoraše an imperfect, reci an imperative.',
          explanation: 'reče — the aorist of reći.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete in the aorist: "Ona ___ i izađe." (stood up — ustati)',
        options: ['ustade', 'ustala je', 'ustaje', 'ustajaše'],
        correct: 0,
        explanation:
          'ustade — the aorist for a sudden completed act, paired with the aorist izađe.',
      },
      {
        q: 'Complete in the imperfect: "Starac je sjedio uz vatru i ___." (was singing, sustained)',
        options: ['zapjeva', 'pjevaše', 'zapjevao', 'pjevao je'],
        correct: 1,
        explanation:
          'pjevaše — the imperfect of an imperfective verb for a sustained past activity.',
      },
      {
        q: 'Which sentence is free indirect style?',
        options: [
          'Rekla je da joj je svega dosta.',
          'Zatvorila je prozor. Dosta je bilo, dosta svega.',
          '„Dosta mi je", rekla je.',
          'Pripovjedač kaže da joj je bilo dosta.',
        ],
        correct: 1,
        explanation:
          'The second sentence is her thought in the narrator’s grammar, with no quotation marks or reporting verb.',
      },
      {
        q: 'In a novel set in Split an old man says "Ča ćeš?". A reader "corrects" it to "Što ćeš?". What has gone wrong?',
        options: [
          'Nothing — it is a typo',
          'They have erased dialect used as characterisation',
          'The novel is in Slovene',
          'The character is uneducated',
        ],
        correct: 1,
        explanation:
          'ča is the čakavian word for što; in dialogue it places the character by origin and generation.',
      },
      {
        q: 'What does the inverted aorist in "Pade noć." signal?',
        options: [
          'A future event',
          'A question',
          'A mistake',
          'A sudden, foregrounded event in a literary register',
        ],
        correct: 3,
        explanation: 'Aorist plus inversion foregrounds the event and lifts the register.',
      },
      {
        q: 'Complete: "Tada ___ svi mladi i puni nade." (imperfect of biti, 3rd pl.)',
        options: ['bili su', 'bi', 'bijahu', 'budu'],
        correct: 2,
        explanation: 'bijahu — the imperfect of biti in the third person plural.',
      },
    ],
    vocab: [
      ['aorist', 'aorist tense', 'Aorist se u književnosti rabi za iznenadnu, dovršenu radnju.'],
      [
        'slobodni neupravni govor',
        'free indirect style',
        'Slobodni neupravni govor unosi misli lika u pripovjedačev glas.',
      ],
      ['pripovjedač', 'narrator', 'Pripovjedač ne izriče uvijek svoje mišljenje.'],
      ['lik', 'character (in fiction)', 'Dijalektom u dijalogu autor smješta lik u krajolik.'],
      ['arhaizam', 'archaism', 'Riječ "vazda" arhaizam je za "uvijek".'],
      ['inverzija', 'inversion', 'Inverzija "Dođe zima" ističe sam događaj.'],
      ['roman', 'novel', 'Krležini romani poznati su po dugim rečenicama.'],
      ['dijalog', 'dialogue', 'U dijalogu se često javljaju dijalektni oblici.'],
      ['ugođaj', 'mood, atmosphere', 'Imperfekt stvara lirski ugođaj.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni opuštenim izrazom: ____ veze, riješit ćemo to sutra. (never mind)',
          answer: 'Nema',
          hint: 'The universal "never mind" is literally "there is no connection".',
          explanation: 'Nema veze — the colloquial "never mind".',
        },
        {
          type: 'type',
          q: 'Napiši toplu umanjenicu: Idemo na ____ poslije posla? (kava, accusative)',
          answer: 'kavicu',
          hint: 'The diminutive suffix -ica, then the accusative after na.',
          explanation: 'na kavicu — warmth, not a small coffee.',
        },
        {
          type: 'type',
          q: 'Napiši standardni oblik govornog "oću" za pisani tekst: ____',
          answer: 'hoću',
          hint: 'Speech has dropped the first sound.',
          explanation: 'hoću — oću is the spoken shortening; the page keeps hoću.',
        },
        {
          type: 'type',
          q: 'Napiši toplu umanjenicu: Popij još jednu ____! (rakija, accusative)',
          answer: 'rakijicu',
          hint: 'The diminutive suffix -ica, then the accusative.',
          explanation: 'još jednu rakijicu — hospitality, not a smaller glass.',
        },
        {
          q: 'Prijatelj te pita: "Ideš s nama?" Koji je odgovor u istom registru?',
          options: [
            'Obavještavam te da idem.',
            'Idem, ajde.',
            'Potvrđujem sudjelovanje.',
            'S poštovanjem, dolazim.',
          ],
          correct: 1,
          hint: 'Answer in the register you were asked in.',
          explanation: 'Idem, ajde — relaxed, like the question.',
        },
        {
          q: 'Gdje nije primjereno napisati "nema veze"?',
          options: [
            'u poruci prijatelju',
            'u dijalogu u romanu',
            'u službenom dopisu',
            'u razgovoru s kolegom',
          ],
          correct: 2,
          hint: 'Where does the colloquial register not belong?',
          explanation: 'In an official letter the colloquial form reads as carelessness.',
        },
        {
          q: 'Što kolega misli kad na prijedlog kaže samo "Može."?',
          options: ['Rado pristaje', 'Nevoljko pristaje', 'Odbija', 'Nije čuo'],
          correct: 0,
          hint: 'The form is flat; the meaning is not.',
          explanation: 'Može. = yes, gladly.',
        },
        {
          q: 'Koji je razgovorni oblik pitanja "Znaš li gdje je?"',
          options: [
            'Znaš gdje je?',
            'Znate li gdje je?',
            'Jesi li znaš gdje je?',
            'Znaš li li gdje je?',
          ],
          correct: 0,
          hint: 'In speech the question can live in the intonation alone.',
          explanation: 'Znaš gdje je? — li dropped, the rising intonation asks.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete the relaxed acceptance: "Idemo u kino? — ___."',
        options: [
          'Prihvaćam.',
          'Ajde, može.',
          'Suglasan sam s prijedlogom.',
          'Da, hoću ići u kino.',
        ],
        correct: 1,
        explanation: 'Ajde, može — relaxed, warm acceptance in the colloquial register.',
      },
      {
        q: 'Which question sounds most relaxed among friends?',
        options: [
          'Izlaziš li večeras?',
          'Izlaziš večeras?',
          'Izlazite li večeras, molim Vas?',
          'Hoćete li izaći večeras?',
        ],
        correct: 1,
        explanation:
          'Speech asks with intonation alone; li is correct but noticeably careful among friends.',
      },
      {
        q: 'Which sentence belongs in an email to a bank?',
        options: [
          'Ma pusti, nema veze.',
          'Ajde, javite se.',
          'Molim Vas da mi potvrdite primitak dokumentacije.',
          'Može, ajde.',
        ],
        correct: 2,
        explanation: 'A formal email keeps the standard register throughout: Molim Vas da…',
      },
      {
        q: 'Which sentence has drifted — a colloquial form inside a formal paragraph?',
        options: [
          'Zahvaljujemo na strpljenju.',
          'Nema veze što kasnite s uplatom, javite se.',
          'Molimo da nam se javite.',
          'Uplatu je potrebno izvršiti do kraja mjeseca.',
        ],
        correct: 1,
        explanation: '"Nema veze" in a formal notice reads as carelessness, not warmth.',
      },
      {
        q: 'What does "pivica" mean in "Idemo na pivicu?"',
        options: [
          'a very small beer',
          'a non-alcoholic beer',
          'a regional word for wine',
          'a friendly, sociable beer — warmth, not size',
        ],
        correct: 3,
        explanation: 'The diminutive signals warmth and informality, not size.',
      },
      {
        q: 'What is the spoken shortening of "nemoj"?',
        options: ['nemo', 'nemoja', 'nemojte', 'ne moj'],
        correct: 0,
        explanation:
          'nemo is the settled spoken form — recognise it, but do not write it outside dialogue.',
      },
    ],
    vocab: [
      [
        'razgovorni stil',
        'colloquial register',
        'Razgovorni stil jedan je od pet funkcionalnih stilova.',
      ],
      ['kavica', 'a (friendly) coffee', 'Idemo na kavicu prije posla?'],
      ['pivica', 'a (sociable) beer', 'Nakon utakmice otišli smo na pivicu.'],
      ['nema veze', 'never mind', 'Nema veze što si zakasnio, sjedni.'],
      ['ma pusti', 'oh, leave it', 'Ma pusti, nije to ništa strašno.'],
      ['ajde', 'come on; okay; bye', 'Ajde, požuri, film počinje.'],
      ['može', 'sure, okay (acceptance)', 'Ideš s nama? — Može!'],
      ['opušten', 'relaxed, casual', 'U opuštenom razgovoru pitanje se postavlja intonacijom.'],
      ['funkcionalni stil', 'functional style', 'Svaki funkcionalni stil ima svoja pravila.'],
    ],
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
        {
          type: 'type',
          q: 'Napiši modernim pravopisom stari zapis "chovjek": ____',
          answer: 'čovjek',
          hint: 'Read it aloud: ch here is the sound č.',
          explanation: 'chovjek → čovjek — the spelling is borrowed, the word is Croatian.',
        },
        {
          type: 'type',
          q: 'Napiši modernim pravopisom stari zapis "szunce": ____',
          answer: 'sunce',
          hint: 'In Hungarian-style spelling sz stood for a plain s.',
          explanation: 'szunce → sunce.',
        },
        {
          type: 'type',
          q: 'Zamijeni arhaizam suvremenom riječju: "Jur je svanulo." → "____ je svanulo."',
          answer: 'Već',
          hint: 'jur is an old word for "already".',
          explanation: 'jur = već.',
        },
        {
          type: 'type',
          q: 'Dopuni aoristom: Tada ____ za stol. (sjesti, 3. lice množine)',
          answer: 'sjedoše',
          hint: 'The third person plural aorist ends in -oše.',
          explanation: 'sjedoše — "they sat down", the narrative tense of older prose.',
        },
        {
          q: 'Stari tekst ima "Bijaše noć tiha". Što je "bijaše"?',
          options: ['imperfekt glagola biti', 'aorist glagola biti', 'nova riječ', 'pogreška'],
          correct: 0,
          hint: 'It is a form of a verb you use every day.',
          explanation: 'bijaše is the imperfect of biti — "was".',
        },
        {
          q: 'Na kojem je hrvatskom narječju pisao Marko Marulić?',
          options: ['kajkavskom', 'štokavskom', 'čakavskom', 'ni na jednom, samo na latinskom'],
          correct: 2,
          hint: 'He was from Split, and wrote before štokavian became the standard base.',
          explanation: 'Marulić’s Croatian works are čakavian, then a full literary language.',
        },
        {
          q: 'Koji je razuman prvi korak s tekstom iz 1830.?',
          options: [
            'Pronaći glagole',
            'Potražiti svaku nepoznatu riječ',
            'Prevesti naslov',
            'Preskočiti dijaloge',
          ],
          correct: 0,
          hint: 'What carries most of the difficulty in these texts?',
          explanation:
            'Verbs first — they carry the tense system — then the spelling, then only the words that block.',
        },
        {
          q: 'Što je "dođoše"?',
          options: ['imperfekt', 'aorist, 3. lice množine', 'prezent', 'tiskarska pogreška'],
          correct: 1,
          hint: 'A sudden completed act in older narration.',
          explanation: 'dođoše is the third person plural aorist of doći.',
        },
      ],
    },
    checkB: [
      {
        q: 'An eighteenth-century text spells a verb "chiniti". What is it?',
        options: ['činiti', 'ciniti', 'ćiniti', 'hiniti'],
        correct: 0,
        explanation: 'In pre-Gaj spelling ch stood for č (or ć); read aloud, chiniti is činiti.',
      },
      {
        q: 'Complete with the aorist plural: "Kad ___ na obalu, ugledaše lađu."',
        options: ['dođu', 'dođoše', 'dolaze', 'dođe'],
        correct: 1,
        explanation: 'dođoše — the third person plural aorist, matching ugledaše.',
      },
      {
        q: 'What does the older verb "glagoljati" mean?',
        options: ['to speak', 'to write', 'to pray', 'to sing'],
        correct: 0,
        explanation: 'glagoljati is the old word for govoriti — the root of glagoljica.',
      },
      {
        q: 'Which sentence contains a pluperfect?',
        options: [
          'Otišli su prije zore.',
          'Odlaze prije zore.',
          'Bijahu otišli prije zore.',
          'Odoše prije zore.',
        ],
        correct: 2,
        explanation:
          'bijahu otišli — the imperfect of biti plus the participle, the literary pluperfect.',
      },
      {
        q: 'Which reading is the mistake?',
        options: [
          'Reading "cs" as č',
          'Reading "dođoše" as an aorist',
          'Reading a kajkavian literary text as substandard',
          'Reading "ie" as ije/je',
        ],
        correct: 2,
        explanation:
          'Kajkavian had a full literary tradition into the nineteenth century; calling it substandard misreads the history.',
      },
      {
        q: 'In an older letter, "Knjigu ti pišem" most likely means…',
        options: [
          'I am writing you a letter',
          'I am writing a book for you',
          'I am copying a book',
          'I am reading you a book',
        ],
        correct: 0,
        explanation: 'In older Croatian knjiga could mean a letter as well as a book.',
      },
    ],
    vocab: [
      [
        'rukopis',
        'manuscript; handwriting',
        'Rukopis je bio star, ali čitljiv kad ga pročitaš naglas.',
      ],
      ['narječje', 'dialect group', 'Hrvatski ima tri narječja: štokavsko, kajkavsko i čakavsko.'],
      ['čakavština', 'the čakavian dialect', 'Marulić je Juditu napisao na čakavštini.'],
      [
        'kajkavština',
        'the kajkavian dialect',
        'Kajkavština je u Zagrebu bila književni jezik do devetnaestog stoljeća.',
      ],
      ['glagoljica', 'Glagolitic script', 'Najstariji hrvatski spomenici pisani su glagoljicom.'],
      ['vazda', 'always (archaic)', 'U starim pjesmama vazda znači uvijek.'],
      ['jur', 'already (archaic)', 'Jur je bilo kasno kad glasnik stiže.'],
      ['glasnik', 'messenger', 'Knjigu je poslao po glasniku.'],
      ['pravopisna reforma', 'spelling reform', 'Gajeva pravopisna reforma uvela je č, ć, š i ž.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Za razliku ____ prvog autora, drugi ističe troškove. (the preposition)',
          answer: 'od',
          hint: 'The fixed frame is "za razliku … + genitive".',
          explanation: 'za razliku od prvog autora — the divergence frame.',
        },
        {
          type: 'type',
          q: 'Dopuni: Svi se izvori ____ da je broj posjetitelja pao. (slagati se)',
          answer: 'slažu',
          hint: 'Present tense, third person plural; the g softens.',
          explanation: 'Svi se izvori slažu — the common-ground frame.',
        },
        {
          type: 'type',
          q: 'Dopuni: ____ izvor ne razmatra dugoročne troškove. (not a single one)',
          answer: 'Nijedan',
          accept: ['Ni jedan'],
          hint: 'A negative pronoun, masculine to agree with izvor.',
          explanation: 'Nijedan izvor ne razmatra… — a gap reported as a finding.',
        },
        {
          type: 'type',
          q: 'Dopuni: Dok prvi izvještaj ____ sezonske čimbenike, drugi upozorava na strukturne. (emphasises — naglašavati)',
          answer: 'naglašava',
          hint: 'Present tense, third person singular.',
          explanation: 'Dok X naglašava…, Y upozorava… — the balanced contrast.',
        },
        {
          type: 'type',
          q: 'Dopuni: ____ autorice polaze od istih podataka. (both, feminine)',
          answer: 'Obje',
          hint: 'The form of "both" used with feminine nouns.',
          explanation: 'Obje autorice — the feminine form.',
        },
        {
          q: 'Kako se zove pogreška: jedan odlomak po izvoru, povezan s "a drugi autor kaže"?',
          options: ['popis sažetaka umjesto sinteze', 'dobra sinteza', 'citiranje', 'parafraza'],
          correct: 0,
          hint: 'What is the structure organised by?',
          explanation:
            'Organised by source, it is a list of summaries; a synthesis is organised by idea.',
        },
        {
          q: 'Izvor piše: "Ovo bi moglo dovesti do ozbiljne krize." Koji glagol točno prenosi taj ton?',
          options: ['primjećuje', 'slaže se', 'upozorava', 'poriče'],
          correct: 2,
          hint: 'Vary the verb for meaning: what is the source doing?',
          explanation: 'The source warns, so upozorava is accurate here.',
        },
        {
          q: 'Što treba napisati prije razlika među izvorima?',
          options: ['popis autora', 'zajedničko polazište', 'vlastito mišljenje', 'citat'],
          correct: 1,
          hint: 'A reader cannot judge how far apart the sources are without it.',
          explanation: 'State what the sources share before where they split.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Za razliku ___, drugo istraživanje ne nalazi vezu."',
        options: [
          'od prvo istraživanje',
          'od prvog istraživanja',
          'prvog istraživanja',
          's prvim istraživanjem',
        ],
        correct: 1,
        explanation: 'za razliku od takes the genitive: od prvog istraživanja.',
      },
      {
        q: 'Complete: "Autori se ___ oko uzroka, ali ne i oko posljedica."',
        options: ['razilaze', 'razilazi', 'razilaziti', 'razišli'],
        correct: 0,
        explanation: 'razilaze se — third person plural present, agreeing with autori.',
      },
      {
        q: 'Which sentence opens a synthesis correctly?',
        options: [
          'Prvi izvor tvrdi da su plaće porasle.',
          'Svi se izvori slažu da su plaće porasle; razilaze se oko toga koliko.',
          'Drugi izvor kaže nešto drukčije.',
          'Treći izvor ne donosi ništa novo.',
        ],
        correct: 1,
        explanation: 'Common ground first, then the divergence — in one orienting sentence.',
      },
      {
        q: 'A source simply notes a figure. Which verb misreports it?',
        options: ['navodi', 'upozorava', 'primjećuje', 'kaže'],
        correct: 1,
        explanation: 'upozorava adds an alarm the source never sounded; the others are neutral.',
      },
      {
        q: 'Which sentence reports a gap as a finding?',
        options: [
          'Izvori su vrlo opsežni.',
          'Podaci su zanimljivi.',
          'Možda neki izvor spominje podatke.',
          'Nijedan izvor ne navodi kako su podaci prikupljeni.',
        ],
        correct: 3,
        explanation:
          'What no source says is a result only the person who read everything can supply.',
      },
      {
        q: 'Complete: "___ izvora slažu se da je problem stvaran." (both)',
        options: ['Oba', 'Obje', 'Obama', 'Obaju'],
        correct: 0,
        explanation: 'izvor is masculine, so oba; obje is for feminine nouns.',
      },
    ],
    vocab: [
      ['sinteza', 'synthesis', 'Sinteza je organizirana po idejama, a ne po izvorima.'],
      ['izvor', 'source', 'Svaki izvor treba precizno navesti.'],
      ['slagati se', 'to agree', 'Svi se izvori slažu da je pojava stvarna.'],
      ['razilaziti se', 'to diverge, differ', 'Autori se razilaze oko uzroka pada.'],
      ['polazište', 'starting point, premise', 'Oba autora imaju isto polazište.'],
      ['praznina', 'gap', 'Najvažniji nalaz sinteze bila je praznina u svim izvorima.'],
      ['tumačiti', 'to interpret', 'Autori iste podatke tumače suprotno.'],
      ['zajednički', 'common, shared', 'Najprije navedi ono što je izvorima zajedničko.'],
      [
        'suprotno',
        'in opposite ways, conversely',
        'Isti nalaz dvije su studije protumačile suprotno.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Dopuni: Autor ____ od pretpostavke da su podaci potpuni. (polaziti)',
          answer: 'polazi',
          hint: 'Present tense, third person singular.',
          explanation: 'Autor polazi od pretpostavke… — the opening of a reconstruction.',
        },
        {
          type: 'type',
          q: 'Dopuni: Iz toga ____ da je projekt isplativ. (zaključivati, 3. lice jednine)',
          answer: 'zaključuje',
          hint: 'Present tense of the imperfective verb.',
          explanation: 'Iz toga zaključuje da… — the inference step.',
        },
        {
          type: 'type',
          q: 'Dopuni: Najjača ____ toga argumenta bila bi sljedeća. (version)',
          answer: 'verzija',
          accept: ['inačica'],
          hint: 'A feminine noun; the native word inačica also works.',
          explanation: 'Najjača verzija (inačica) toga argumenta… — the credibility move.',
        },
        {
          type: 'type',
          q: 'Dopuni: Ključni je ____ u tom rasuđivanju prešutna pretpostavka. (step)',
          answer: 'korak',
          hint: 'A masculine noun for one move in a sequence.',
          explanation: 'Ključni je korak u tom rasuđivanju… — where your objection will land.',
        },
        {
          type: 'type',
          q: 'Dopuni provjeru: Ako sam Vas dobro ____, tvrdite da je problem u metodi. (razumjeti, m.)',
          answer: 'razumio',
          hint: 'The l-participle of razumjeti: the je of the stem becomes i.',
          explanation: 'Ako sam Vas dobro razumio… — checking before objecting.',
        },
        {
          q: 'Što je "zaključak" u argumentu?',
          options: ['tvrdnja koja slijedi iz premisa', 'polazna pretpostavka', 'prigovor', 'citat'],
          correct: 0,
          hint: 'What comes at the end of the inference?',
          explanation: 'The conclusion is what the premises are meant to support.',
        },
        {
          q: 'Kojom rečenicom najviše dobivaš na vjerodostojnosti prije prigovora?',
          options: [
            'Autor očito griješi.',
            'Najjača verzija toga argumenta bila bi…',
            'Svi znaju da je to besmislica.',
            'Taj je argument slab.',
          ],
          correct: 1,
          hint: 'Strengthen before you reject.',
          explanation: 'Stating the strongest version first makes the rejection trustworthy.',
        },
        {
          q: 'Gdje treba smjestiti prigovor?',
          options: [
            'uz autorov ton',
            'uz zaključak općenito',
            'uz određeni korak rasuđivanja',
            'nigdje',
          ],
          correct: 2,
          hint: 'Once the steps are laid out, which one do you contest?',
          explanation: 'At a specific step of the reasoning, not at the conclusion in general.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Autorica polazi od ___ da je tržište učinkovito."',
        options: ['pretpostavka', 'pretpostavke', 'pretpostavku', 'pretpostavci'],
        correct: 1,
        explanation: 'od takes the genitive: polazi od pretpostavke da…',
      },
      {
        q: 'Complete: "Iz toga ___ da regulacija nije potrebna." (she concludes)',
        options: ['zaključuje', 'zaključi', 'zaključila', 'zaključujući'],
        correct: 0,
        explanation: 'zaključuje — the present tense of reconstruction: what the author concludes.',
      },
      {
        q: 'Which sentence marks the end of the reconstruction?',
        options: [
          'Iz toga zaključuje da…',
          'Do ovdje autorica; ono što slijedi moj je prigovor.',
          'Autorica polazi od pretpostavke da…',
          'Najjača verzija toga argumenta bila bi…',
        ],
        correct: 1,
        explanation:
          'The boundary marker tells the reader where her case ends and your voice begins.',
      },
      {
        q: 'In "Budući da je potražnja pala, cijene treba sniziti", what is the premise?',
        options: ['cijene treba sniziti', 'potražnja je pala', 'budući da', 'there is no premise'],
        correct: 1,
        explanation:
          'The budući da-clause gives the premise; "cijene treba sniziti" is the conclusion.',
      },
      {
        q: 'Complete: "Toliko o ___ stajalištu." (njihov)',
        options: ['njihov', 'njihova', 'njihovu', 'njihovim'],
        correct: 2,
        explanation: 'o takes the locative: o njihovu (or njihovom) stajalištu.',
      },
      {
        q: 'What does "Pod pretpostavkom da sam ga dobro razumio…" do in writing?',
        options: [
          'Checks the reconstruction before the objection',
          'Concedes defeat',
          'States the conclusion',
          'Quotes directly',
        ],
        correct: 0,
        explanation:
          'It confirms the reconstruction, so the objection cannot land on something nobody said.',
      },
    ],
    vocab: [
      ['argument', 'argument (line of reasoning)', 'Njezin je argument u osnovi jednostavan.'],
      ['premisa', 'premise', 'Prigovor je upućen prvoj premisi, a ne zaključku.'],
      ['zaključak', 'conclusion', 'Iz tih premisa zaključak ne slijedi nužno.'],
      ['rasuđivanje', 'reasoning', 'Ključni je korak u tom rasuđivanju prešutna tvrdnja.'],
      ['prigovor', 'objection', 'Moj se prigovor odnosi na drugi korak.'],
      ['stajalište', 'position, standpoint', 'Toliko o njegovu stajalištu.'],
      ['pretpostavka', 'assumption', 'Autor polazi od pretpostavke da su podaci potpuni.'],
      ['prešutan', 'tacit, unstated', 'Argument počiva na prešutnoj pretpostavci.'],
      ['vjerodostojnost', 'credibility', 'Pošten prikaz tuđeg stava podiže vjerodostojnost.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni kolokaciju: Učenik je ____ pitanje učiteljici. (postaviti, m.)',
          answer: 'postavio',
          hint: 'Questions are not "given" in Croatian; use the l-participle of the cue.',
          explanation: 'postaviti pitanje — the fixed pairing.',
        },
        {
          type: 'type',
          q: 'Dopuni kolokaciju: Uprava je jučer ____ odluku. (made — the fixed verb, f.)',
          answer: 'donijela',
          hint: 'Decisions are "brought", not made.',
          explanation: 'donijeti odluku — not napraviti.',
        },
        {
          type: 'type',
          q: 'Dopuni: ____ li plivati? — Znam, naučio sam kao dijete. (do you know how)',
          answer: 'Znaš',
          hint: 'An acquired skill takes the verb of knowing how, second person.',
          explanation: 'Znaš li plivati? — the learned ability.',
        },
        {
          type: 'type',
          q: 'Dopuni: Prošle godine ____ je njemački, ali ga nije naučio. (studied, as effort — m.)',
          answer: 'učio',
          hint: 'The imperfective partner of naučiti: effort, not result.',
          explanation: 'učio je, ali nije naučio — the effort against the result.',
        },
        {
          type: 'type',
          q: 'Dopuni kolokaciju: Svi moramo ____ računa o okolišu. (take into account)',
          answer: 'voditi',
          hint: 'The fixed verb in this pairing means "to lead".',
          explanation: 'voditi računa o… — not držati računa.',
        },
        {
          q: 'Koja je kolokacija pogrešna?',
          options: ['održati govor', 'postaviti pitanje', 'napraviti odluku', 'donijeti zakon'],
          correct: 2,
          hint: 'One of these translates English "make" word for word.',
          explanation: 'napraviti odluku is a calque; the pairing is donijeti odluku.',
        },
        {
          q: 'Dopuni: Dugo sam ga ___, ali ga nisam prepoznao.',
          options: ['gledao', 'vidio', 'znao', 'poznavao'],
          correct: 0,
          hint: 'Directing attention for a while, as against perceiving.',
          explanation: 'gledao — he looked for a long time and still did not recognise him.',
        },
        {
          q: 'Što znači "Umijem plivati"?',
          options: [
            'Smijem plivati',
            'Imam vještinu plivanja (pomalo knjiški izraz)',
            'Moram plivati',
            'Plivam upravo sada',
          ],
          correct: 1,
          hint: 'umjeti names a skill; everyday speech uses znati for the same.',
          explanation: 'umjeti = to have the skill; in speech people say znam plivati.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ne ___ voziti — nikad nisam naučio."',
        options: ['mogu', 'znam', 'poznajem', 'smijem'],
        correct: 1,
        explanation:
          'An acquired skill is znati: ne znam voziti. ne mogu would mean something prevents it now.',
      },
      {
        q: 'Complete the collocation: "Vlada je ___ odluku o porezu."',
        options: ['donijela', 'napravila', 'dala', 'učinila'],
        correct: 0,
        explanation: 'donijeti odluku is the fixed pairing.',
      },
      {
        q: 'Complete the collocation: "Moramo ___ računa o troškovima."',
        options: ['držati', 'imati', 'činiti', 'voditi'],
        correct: 3,
        explanation:
          'voditi računa (o) is fixed; the others are translations that no speaker uses here.',
      },
      {
        q: 'Complete: "Cijelu je večer ___ utakmicu." (watched)',
        options: ['vidjela', 'pogledala se', 'gledala', 'vidjela se'],
        correct: 2,
        explanation:
          'gledati is to watch, with attention over time; vidjeti is simply to perceive.',
      },
      {
        q: 'Complete: "Moj brat ___ pravo u Zagrebu." (is at university reading law)',
        options: ['nauči', 'studira', 'poučava', 'proučio'],
        correct: 1,
        explanation: 'studirati is to be at university; naučiti is to learn something through.',
      },
      {
        q: 'Which word is warmer and more abstract than "kuća"?',
        options: ['dom', 'zgrada', 'stan', 'kat'],
        correct: 0,
        explanation: 'dom is home in the warm, abstract sense; kuća is the house.',
      },
    ],
    vocab: [
      ['bliskoznačnica', 'near-synonym', 'Bliskoznačnice se razlikuju u nijansama značenja.'],
      ['istoznačnica', 'synonym', 'Potpune istoznačnice u jeziku su rijetke.'],
      ['kolokacija', 'collocation', 'Kolokacija "donijeti odluku" ustaljena je u hrvatskom.'],
      ['nijansa', 'shade of meaning, nuance', 'Razlika je samo u nijansi, ali je čujna.'],
      ['poznavati', 'to be acquainted with', 'Poznajem ga još iz srednje škole.'],
      ['umjeti', 'to have the skill (to)', 'Umije li tvoj sin plivati?'],
      ['donijeti odluku', 'to make a decision', 'Odbor će odluku donijeti do petka.'],
      ['voditi računa', 'to take into account, look after', 'Treba voditi računa o troškovima.'],
      ['postaviti pitanje', 'to ask a question', 'Novinar je ministru postavio neugodno pitanje.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni izraz za kupovanje vremena: Pa, kako da ____… (reći, 1st sg.)',
          answer: 'kažem',
          hint: 'The present tense of reći, first person singular.',
          explanation: 'Pa, kako da kažem… — buys a full second.',
        },
        {
          type: 'type',
          q: 'Dopuni popravak u hodu: Došlo je dvadesetak, ____ rečeno, dvadeset i pet osoba. (more precisely)',
          answer: 'točnije',
          hint: 'A comparative adverb from točan.',
          explanation: 'točnije rečeno — the repair word that sounds like precision.',
        },
        {
          type: 'type',
          q: 'Dopuni najavu: Rekao bih ____ stvari. Prvo… Drugo… (2)',
          answer: 'dvije',
          hint: 'stvar is feminine.',
          explanation: 'dvije stvari — announce two points and finish both.',
        },
        {
          type: 'type',
          q: 'Dopuni: Da budem ____, nisam o tome razmišljao. (honest, m.)',
          answer: 'iskren',
          hint: 'An adjective, masculine singular.',
          explanation: 'Da budem iskren… — frames the answer while you find it.',
        },
        {
          type: 'type',
          q: 'Dopuni odgodu: ____ ću se na to za minutu. (vratiti se)',
          answer: 'Vratit',
          hint: 'Before ću the infinitive loses its final vowel in writing.',
          explanation: 'Vratit ću se — not "vratiti ću".',
        },
        {
          q: 'Pitanje te zateklo. Koji je prirodan početak?',
          options: ['To je dobro pitanje.', 'Ne znam.', 'Sljedeće pitanje.', 'Um… um…'],
          correct: 0,
          hint: 'A universal phrase that buys time politely.',
          explanation: 'To je dobro pitanje — recognised by everyone as buying time.',
        },
        {
          q: 'Rečenica ti zapinje usred zavisne rečenice. Što radiš?',
          options: [
            'Počneš ispočetka',
            'Prijeđeš na engleski',
            'Pretvoriš je u dvije kratke rečenice',
            'Šutiš',
          ],
          correct: 2,
          hint: 'Simplify without stopping.',
          explanation: 'Drop to two short sentences; nobody notices the simplification.',
        },
        {
          q: 'Kojim izrazom provjeravaš jesi li razumio pitanje?',
          options: [
            'Vratit ću se na to.',
            'Ako sam dobro razumio pitanje…',
            'Da budem iskren…',
            'Pa, ovaj…',
          ],
          correct: 1,
          hint: 'One of these checks comprehension as it buys time.',
          explanation: 'Ako sam dobro razumio pitanje… buys time and checks.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete the filler: "___, ovaj, nisam siguran."',
        options: ['Pa', 'Um', 'Jer', 'Stoga'],
        correct: 0,
        explanation: 'Pa is the classic Croatian opener that buys a moment; "um" is English.',
      },
      {
        q: 'Complete the repair: "Sastanak je u utorak, ___, u srijedu ujutro."',
        options: ['odnosno', 'nego', 'ali', 'jer'],
        correct: 0,
        explanation: 'odnosno repairs in place: "or rather".',
      },
      {
        q: 'Complete the deferral: "___ ću se na to kasnije."',
        options: ['Vratit', 'Vratih', 'Povratit', 'Vratiti'],
        correct: 0,
        explanation:
          'Vratit ću se — the infinitive drops its -i before ću; "Vratiti ću" is a spelling error.',
      },
      {
        q: 'Which is a repair in place rather than a restart?',
        options: [
          'Bilo je deset… čekajte, ispočetka.',
          'Bilo je deset, odnosno, točnije rečeno, dvanaest ljudi.',
          'Bilo je… ne znam, kraj.',
          'Bilo je deset. Ispočetka: bilo je dvanaest.',
        ],
        correct: 1,
        explanation: 'odnosno, točnije rečeno corrects the figure without abandoning the sentence.',
      },
      {
        q: 'Which filler is a genuinely Croatian verbal habit?',
        options: ['you know', 'like', 'znači', 'um'],
        correct: 2,
        explanation:
          'znači has drifted into a pure filler — native enough that speakers are teased for it.',
      },
      {
        q: 'Why announce "Rekao bih dvije stvari" before answering?',
        options: [
          'It is a required formula',
          'It buys a minute of silence',
          'It sounds more formal',
          'It commits you to a shape you can finish and tells the listener when you are done',
        ],
        correct: 3,
        explanation: 'Two announced points force you to finish and signal the end of the answer.',
      },
    ],
    vocab: [
      ['poštapalica', 'filler word, verbal crutch', 'Riječ "znači" česta je poštapalica.'],
      ['odnosno', 'or rather; that is', 'Stigli smo u pet, odnosno malo prije pet.'],
      ['točnije rečeno', 'more precisely', 'Stiglo je deset gostiju, točnije rečeno jedanaest.'],
      ['iskren', 'honest, sincere', 'Da budem iskren, nisam o tome razmišljao.'],
      ['najaviti', 'to announce', 'Najavi dvije točke i obje ih dovrši.'],
      ['zapeti', 'to get stuck', 'Kad ti rečenica zapne, podijeli je na dvije.'],
      ['tečno', 'fluently', 'Tečno govori hrvatski, ali ponekad traži riječi.'],
      [
        'bez pripreme',
        'impromptu, without preparation',
        'Govoriti bez pripreme vještina je za sebe.',
      ],
      ['odgoditi', 'to postpone, defer', 'Pitanje možeš odgoditi rečenicom "Vratit ću se na to".'],
    ],
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
        {
          type: 'type',
          q: 'Prevedi pravnu obvezu: "The Seller shall deliver the goods." → Prodavatelj je ____ isporučiti robu.',
          answer: 'dužan',
          hint: 'An adjective of obligation, masculine, after je.',
          explanation: 'je dužan isporučiti — legal "shall".',
        },
        {
          type: 'type',
          q: 'Prevedi: "We have already paid the invoice." → ____ smo platili račun.',
          answer: 'Već',
          hint: 'The English perfect often needs an adverb in Croatian to carry "already".',
          explanation: 'Već smo platili račun — perfect plus već.',
        },
        {
          type: 'type',
          q: 'Dopuni: Molimo Vas da nam potvrdite ____ ponude. (receipt)',
          answer: 'primitak',
          hint: 'The administrative noun for having received something.',
          explanation: 'potvrditi primitak — "confirm receipt".',
        },
        {
          type: 'type',
          q: 'Dopuni: Zahtjev se podnosi nadležnoj ____ (regionalnoj upravnoj jedinici). (županija)',
          answer: 'županiji',
          hint: 'nadležnoj is dative, and so is the noun.',
          explanation: 'nadležnoj županiji — the term kept, with its gloss.',
        },
        {
          type: 'type',
          q: 'Prevedi "so far without a reply": Poslali smo tri upita, ____ bez odgovora.',
          answer: 'dosad',
          accept: ['do sada'],
          hint: 'An adverb meaning "until now".',
          explanation:
            'dosad bez odgovora — the English present perfect sense carried by an adverb.',
        },
        {
          q: 'Kako prevesti "Please find attached the invoice" u hrvatskom poslovnom dopisu?',
          options: [
            'Molim pronađite priloženu fakturu.',
            'U privitku Vam dostavljamo račun.',
            'Nađite račun u prilogu, molim.',
            'Pronađite molim račun.',
          ],
          correct: 1,
          hint: 'Translate the register, not the words.',
          explanation:
            'U privitku Vam dostavljamo… — the Croatian formula, not a word-by-word copy.',
        },
        {
          q: 'Hrvatski tekst je otprilike koliko dulji od engleskog?',
          options: ['jednako dug', 'dvostruko dulji', 'kraći', 'oko 15 posto dulji'],
          correct: 3,
          hint: 'Think of subtitles and layout.',
          explanation: 'About fifteen per cent longer — plan layout and subtitle timing for it.',
        },
        {
          q: 'Koja je završna provjera prijevoda?',
          options: [
            'Pročitati ga bez izvornika',
            'Usporediti broj riječi',
            'Provjeriti samo brojeve',
            'Prevesti ga natrag na engleski',
          ],
          correct: 0,
          hint: 'Would a Croatian writer have produced this?',
          explanation:
            'Read it without the original; if it needs the original, it is not finished.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete the contract: "Najmoprimac ___ održavati stan u urednom stanju." (shall)',
        options: ['hoće', 'je dužan', 'će možda', 'želi'],
        correct: 1,
        explanation: 'Legal "shall" is obligation: je dužan — never hoće.',
      },
      {
        q: 'Complete: "___ smo ugovor, ali još nismo dobili potvrdu." (we have signed)',
        options: ['Potpisujemo', 'Potpiši', 'Potpisavši', 'Potpisali'],
        correct: 3,
        explanation: 'The English present perfect is the Croatian perfect: potpisali smo.',
      },
      {
        q: 'Which sentence reads as a Croatian text rather than a calque?',
        options: [
          'Mi smo poslali vama račun.',
          'Račun smo vam poslali jučer.',
          'Mi jučer poslali smo račun vama.',
          'Vama mi smo poslali račun.',
        ],
        correct: 1,
        explanation:
          'Clitics in second position and no emphatic full pronouns: Račun smo vam poslali.',
      },
      {
        q: 'Which handling of "dom zdravlja" misinforms an English reader?',
        options: [
          'a hospital',
          'dom zdravlja (primary health-care centre)',
          'a primary health-care institution',
          'dom zdravlja, kept with a gloss',
        ],
        correct: 0,
        explanation:
          'A dom zdravlja is not a hospital; substituting the reader’s own institution tells them something false.',
      },
      {
        q: 'What does translating for legal equivalence tolerate that marketing translation does not?',
        options: [
          'Free rewriting for effect',
          'Dropping clauses',
          'Awkwardness in exchange for precision',
          'A casual register',
        ],
        correct: 2,
        explanation:
          'Legal translation accepts awkwardness to keep precision; marketing does the reverse.',
      },
      {
        q: 'Complete the closing formula: "Unaprijed ___ na suradnji."',
        options: ['zahvaljujemo', 'zahvaljujući', 'zahvalimo', 'zahvala'],
        correct: 0,
        explanation: 'Unaprijed zahvaljujemo — the present tense of the fixed formula.',
      },
    ],
    vocab: [
      ['prijevod', 'translation', 'Prijevod ugovora mora biti pravno istovjetan izvorniku.'],
      ['izvornik', 'original (text)', 'Pročitaj prijevod bez izvornika.'],
      ['prevoditelj', 'translator', 'Prevoditelj mora odabrati svrhu prije prve rečenice.'],
      ['kalk', 'calque', 'Rečenica "Mi smo poslali vama ponudu" kalk je engleskog reda riječi.'],
      [
        'istovjetnost',
        'equivalence, identity',
        'Pravni prijevod služi istovjetnosti, a ne ljepoti.',
      ],
      ['obveza', 'obligation', 'Englesko "shall" u ugovoru izriče obvezu.'],
      [
        'naručitelj',
        'client (in a contract)',
        'Naručitelj je dužan platiti račun u roku od 15 dana.',
      ],
      ['primitak', 'receipt', 'Rok teče od dana primitka računa.'],
      [
        'stajati na raspolaganju',
        'to remain at someone’s disposal',
        'Za sva pitanja stojimo Vam na raspolaganju.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Ispravi sročnost: Mnogo čitatelja ____ pismo uredništvu. (poslati, perfekt)',
          answer: 'je poslalo',
          accept: ['poslalo je'],
          hint: 'mnogo is a quantity word.',
          explanation: 'Mnogo čitatelja je poslalo — neuter singular after a quantity.',
        },
        {
          type: 'type',
          q: 'Ispravi red enklitika: "Rekao je mi to jučer." → Rekao ____ to jučer.',
          answer: 'mi je',
          hint: 'In the cluster the dative pronoun comes before je.',
          explanation:
            'Rekao mi je to jučer — je is the one auxiliary that stands last in the cluster.',
        },
        {
          type: 'type',
          q: 'Napiši naziv razine uređivanja koja ispravlja samo zatipke, pravopis i interpunkciju: ____',
          answer: 'korektura',
          hint: 'The first and lightest of the three levels.',
          explanation: 'korektura — proofreading.',
        },
        {
          type: 'type',
          q: 'Napiši naziv razine koja dira strukturu i argument, u dogovoru s autorom: ____',
          answer: 'redaktura',
          hint: 'The deepest of the three levels.',
          explanation: 'redaktura — substantive editing, with the author.',
        },
        {
          q: 'Koju napomenu autor najlakše prihvaća?',
          options: [
            'Promijenio sam ovo.',
            'Premjestio sam enklitiku na drugo mjesto jer ondje mora stajati.',
            'Ovako je bolje.',
            '(bez napomene)',
          ],
          correct: 1,
          hint: 'A change should carry its reason.',
          explanation:
            'A one-line reason turns a disagreement with you into a question about a rule.',
        },
        {
          q: 'Tekst u trećem odlomku prelazi u razgovorni stil. Kako to označiš?',
          options: [
            'kao prijedlog, s obrazloženjem',
            'prepišeš odlomak bez riječi',
            'izbrišeš odlomak',
            'ne diraš ništa i ne kažeš ništa',
          ],
          correct: 0,
          hint: 'Register drift is lektura, but the change still needs a reason.',
          explanation: 'Mark it as a suggestion with a reason; a silent rewrite is resented.',
        },
        {
          q: 'Koja je rečenica pravilna?',
          options: [
            'Uprava je nam to potvrdila.',
            'Uprava nam to je potvrdila.',
            'Uprava nam je to potvrdila.',
            'Uprava je to nam potvrdila.',
          ],
          correct: 2,
          hint: 'The clitic cluster: dative, then je, then the accusative to.',
          explanation: 'Uprava nam je to potvrdila — the correct cluster in second position.',
        },
        {
          q: 'Autor piše "pogreška" u prvom poglavlju i "pogrješka" u drugom. Što napraviš?',
          options: [
            'Ujednačiš jedan oblik u cijelom tekstu, uz napomenu',
            'Prepišeš poglavlje',
            'Ne diraš ništa',
            'Izbaciš riječ',
          ],
          correct: 0,
          hint: 'Both forms are codified; what is the fault?',
          explanation: 'Both forms are allowed; the inconsistency is what lektura fixes.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete the editing note: "Ispravio sam ___ s količinskim subjektom."',
        options: ['sročnost', 'sročnosti', 'sročnošću', 'sročnostima'],
        correct: 0,
        explanation:
          'The accusative object of ispravio sam: sročnost (a feminine i-noun, same as the nominative).',
      },
      {
        q: 'Complete the correction: "Nekoliko autora ___ primjedbe."',
        options: ['su poslali', 'je poslalo', 'su poslala', 'je poslao'],
        correct: 1,
        explanation: 'A quantity subject takes a neuter singular verb: nekoliko autora je poslalo.',
      },
      {
        q: 'Which is a correction, not a preference?',
        options: [
          'Zamijenio sam "stoga" s "zato".',
          'Ispravio sam "Autor je mu rekao" u "Autor mu je rekao".',
          'Premjestio sam odlomak na kraj.',
          'Skratio sam naslov.',
        ],
        correct: 1,
        explanation:
          'Clitic order is a rule: mu je, in that order. The others are matters of taste.',
      },
      {
        q: 'Which editor has overstepped a lektor’s mandate?',
        options: [
          'Fixed the case after a preposition',
          'Removed a comma before da',
          'Cut two chapters without asking the author',
          'Made the spelling of zadatci consistent',
        ],
        correct: 2,
        explanation: 'Cuts belong to redaktura, and are done with the author, not to them.',
      },
      {
        q: 'What does korektura touch?',
        options: [
          'Typos, spelling and punctuation only',
          'Structure and argument',
          'The author’s thesis',
          'Register drift',
        ],
        correct: 0,
        explanation: 'korektura is proofreading — the surface only.',
      },
      {
        q: 'An author wrote "Grad je zimi tih." You would write "Zimi je grad tih." What do you do?',
        options: [
          'Change it — yours is better',
          'Leave it — it is not wrong, merely not yours',
          'Delete the sentence',
          'Change it silently',
        ],
        correct: 1,
        explanation: 'Wrong, or merely not mine? This one is merely not yours.',
      },
    ],
    vocab: [
      ['korektura', 'proofreading', 'Korektura je uklonila sve zatipke.'],
      ['lektura', 'language editing', 'Lektura popravlja jezik, a ne autorov stil.'],
      ['redaktura', 'substantive editing', 'Redaktura je skratila uvod za trećinu.'],
      ['lektor', 'language editor', 'Lektor je označio svaku promjenu napomenom.'],
      ['urednik', 'editor', 'Urednik je s autorom dogovorio izmjene strukture.'],
      ['zatipak', 'typo', 'U naslovu se potkrao zatipak.'],
      ['obrazloženje', 'justification, reason given', 'Svaka promjena treba kratko obrazloženje.'],
      ['ispravak', 'correction', 'Ovo je ispravak, a ne stvar ukusa.'],
      ['ujednačiti', 'to make consistent', 'Lektorica je ujednačila pravopis u cijeloj knjizi.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni poslovicu: Tko rano rani, dvije ____ grabi.',
          answer: 'sreće',
          hint: 'After dvije, a feminine noun in the genitive singular.',
          explanation: 'Tko rano rani, dvije sreće grabi.',
        },
        {
          type: 'type',
          q: 'Dopuni poslovicu: Bolje vrabac u ruci nego golub na ____.',
          answer: 'grani',
          hint: 'na + locative of grana.',
          explanation: 'golub na grani — the uncertain bird on the branch.',
        },
        {
          type: 'type',
          q: 'Dopuni poslovicu: Sto ljudi, sto ____.',
          answer: 'ćudi',
          hint: 'A plural noun meaning temperaments.',
          explanation: 'Sto ljudi, sto ćudi — people differ.',
        },
        {
          type: 'type',
          q: 'Dopuni: Ispravljanje beskrajnih pogrešaka bio je ____ posao. (Sisyphean)',
          answer: 'sizifov',
          hint: 'A possessive adjective from the name of the man who rolled the boulder.',
          explanation: 'sizifov posao — endless futile labour.',
        },
        {
          type: 'type',
          q: 'Dopuni poslovicu: Iz malih ____ nastaju velike rijeke.',
          answer: 'potoka',
          hint: 'Genitive plural of potok after iz malih.',
          explanation: 'Iz malih potoka nastaju velike rijeke — small beginnings.',
        },
        {
          q: 'Koliko poslovica u jednom razgovoru zvuči prirodno?',
          options: ['jedna', 'tri', 'pet', 'u svakoj rečenici po jedna'],
          correct: 0,
          hint: 'Recognise all of them; produce sparingly.',
          explanation: 'One well-placed proverb is native; three is a phrasebook.',
        },
        {
          q: 'Što znači "prijeći Rubikon"?',
          options: [
            'prijeći rijeku',
            'prijeći točku s koje nema povratka',
            'pobijediti',
            'odustati',
          ],
          correct: 1,
          hint: 'A classical allusion to Caesar.',
          explanation: 'prijeći Rubikon — pass the point of no return.',
        },
        {
          q: 'Koje izraze vrijedi pitati, a ne pogađati?',
          options: [
            'klasične aluzije',
            'biblijske izraze',
            'lokalne izraze čiji registar ovisi o kraju',
            'poslovice koje svi znaju',
          ],
          correct: 2,
          hint: 'Which layer is not shared with English?',
          explanation: 'The local expressions vary sharply by region and generation.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ispravljati te podatke pravi je ___ posao."',
        options: ['sizifov', 'sizifovog', 'sizifovim', 'sizifovu'],
        correct: 0,
        explanation: 'sizifov posao — the adjective agrees with posao in the nominative.',
      },
      {
        q: 'Complete: "Pregovori su zapeli; to je pravi ___ čvor."',
        options: ['gordijskog', 'gordijski', 'gordijskom', 'gordijskim'],
        correct: 1,
        explanation: 'gordijski čvor — an intractable problem, nominative after je.',
      },
      {
        q: 'Someone says only "Bez muke…" and stops. What have they said?',
        options: [
          'They forgot the rest',
          'The whole proverb — without effort there is no learning',
          'They are complaining of pain',
          'They want you to finish it',
        ],
        correct: 1,
        explanation: 'Half a proverb is the whole proverb: bez muke nema nauke.',
      },
      {
        q: 'What is a "trojanski konj" in a news text?',
        options: [
          'a toy',
          'a racehorse',
          'an ancient ruin',
          'a hidden threat disguised as something harmless',
        ],
        correct: 3,
        explanation: 'The classical allusion is assumed and unexplained: a hidden threat.',
      },
      {
        q: 'Which proverb advises taking the certain option?',
        options: ['Tiha voda…', 'Sto ljudi…', 'Bolje vrabac u ruci…', 'Tko rano rani…'],
        correct: 2,
        explanation: 'Bolje vrabac u ruci nego golub na grani — take the certain option.',
      },
      {
        q: 'What does "Tiha voda brijege dere" warn about?',
        options: ['the quiet person who turns out formidable', 'floods', 'noise', 'rivers'],
        correct: 0,
        explanation: 'Still waters wear away the banks: watch the quiet one.',
      },
    ],
    vocab: [
      ['poslovica', 'proverb', 'Poslovica se često izgovori samo napola.'],
      ['izreka', 'saying', 'Ta je izreka poznata u cijeloj Dalmaciji.'],
      ['frazem', 'idiom, set phrase', 'Frazem "gordijski čvor" potječe iz antike.'],
      ['aluzija', 'allusion', 'Novinar je u naslovu upotrijebio biblijsku aluziju.'],
      ['gordijski čvor', 'Gordian knot', 'Pregovori su postali pravi gordijski čvor.'],
      ['sizifov posao', 'Sisyphean task', 'Popravljati staru kuću pravi je sizifov posao.'],
      ['trojanski konj', 'Trojan horse', 'Program se pokazao kao trojanski konj.'],
      ['prijeći Rubikon', 'to cross the Rubicon', 'Potpisom ugovora tvrtka je prešla Rubikon.'],
      [
        'glas vapijućega u pustinji',
        'a voice crying in the wilderness',
        'Njegovo je upozorenje ostalo glas vapijućega u pustinji.',
      ],
    ],
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
        {
          type: 'type',
          q: 'Napiši standardni oblik: čakavsko „Bil je doma.” → „____ je kod kuće.”',
          answer: 'Bio',
          hint: 'Čakavian keeps final -l where the standard has -o.',
          explanation: 'bil → bio: the standard participle ends in -o.',
        },
        {
          type: 'type',
          q: 'Napiši standardno kajkavsko „bum išel”: ____',
          answer: 'ići ću',
          hint: 'The standard future: infinitive plus the clitic of htjeti.',
          explanation: 'bum išel = ići ću.',
        },
        {
          type: 'type',
          q: 'Napiši riječ kojom kajkavci pitaju "što": ____',
          answer: 'kaj',
          hint: 'The word that gives the dialect group its name.',
          explanation: 'kaj — hence kajkavski.',
        },
        {
          type: 'type',
          q: 'Napiši riječ kojom čakavci pitaju "što": ____',
          answer: 'ča',
          hint: 'The word that gives the dialect group its name.',
          explanation: 'ča — hence čakavski.',
        },
        {
          type: 'type',
          q: 'Napiši standardnu riječ za čakavsko „kužina”: ____',
          answer: 'kuhinja',
          hint: 'A Venetian borrowing for a room in the house.',
          explanation: 'kužina = kuhinja.',
        },
        {
          q: 'Kolega iz Zagreba na kavi prijeđe na kajkavski. Što je to?',
          options: ['promjena registra', 'pogreška', 'drugi jezik', 'nepristojnost'],
          correct: 0,
          hint: 'Almost everyone switches by setting.',
          explanation: 'Code-switching by setting — a register choice, not a slip.',
        },
        {
          q: 'Koja značajka razlikuje čakavski od kajkavskog?',
          options: [
            'germanizmi',
            'završno m prelazi u n (nisan)',
            'riječ kaj',
            'naglasak pomaknut naprijed',
          ],
          correct: 1,
          hint: 'Think of how a čakavian speaker says "nisam".',
          explanation: 'Final m becoming n (nisan, san) is čakavian.',
        },
        {
          q: 'Odakle je vjerojatno govornik koji kaže „Ča je to?”',
          options: ['iz Istre ili s otoka', 'iz Slavonije', 'iz Zagorja', 'iz Međimurja'],
          correct: 0,
          hint: 'ča is the word of the coast and islands.',
          explanation: 'ča places the speaker in Istria, Kvarner or the islands.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which yat reflex does island čakavian speech typically show, as in "mliko"?',
        options: ['ijekavian', 'the kajkavian reflex', 'ikavian', 'none — there is no yat'],
        correct: 2,
        explanation: 'mliko shows the ikavian reflex, typical of island čakavian.',
      },
      {
        q: 'Complete: kajkavian shortens "Nisam znao" to "___ znal".',
        options: ['Nisan', 'Nis', 'Nisam', 'Ni'],
        correct: 1,
        explanation: 'Nis znal is kajkavian; nisan is the čakavian form.',
      },
      {
        q: 'What is kajkavian "bum išel" in the standard?',
        options: ['ići ću', 'išao sam', 'idem', 'bio bih išao'],
        correct: 0,
        explanation: 'Kajkavian builds the future with bum + the participle: ići ću.',
      },
      {
        q: 'Which word shows Venetian influence in čakavian?',
        options: ['farba', 'cajger', 'škura', 'špancirati'],
        correct: 2,
        explanation:
          'škura (shutter) is Venetian; farba, cajger and špancirati are German loans typical of the north-west.',
      },
      {
        q: 'A Hvar speaker says "lipo". Which conclusion is the mistake?',
        options: [
          'It is the ikavian yat reflex',
          'He probably comes from the coast or an island',
          'He has mispronounced lijepo',
          'It corresponds to standard lijepo',
        ],
        correct: 2,
        explanation: 'lipo is a dialect reflex, a register choice — not a mispronunciation.',
      },
      {
        q: 'Why is the kajkavian dialect group called kajkavski?',
        options: [
          'Because it is spoken in a region called Kajkavia',
          'Because of the verb kajati se',
          'Because of German influence',
          'Because its word for "what" is kaj',
        ],
        correct: 3,
        explanation: 'The three groups are named by their word for "what": što, kaj, ča.',
      },
    ],
    vocab: [
      ['narječje', 'dialect group', 'Hrvatski ima tri narječja, a svako ima svoju književnost.'],
      [
        'refleks jata',
        'yat reflex',
        'Refleks jata u jednoj riječi često otkriva odakle je govornik.',
      ],
      ['ikavica', 'ikavian speech', 'Na otocima se čuje ikavica: mliko, lipo.'],
      [
        'ijekavica',
        'ijekavian speech',
        'Standardni jezik temelji se na ijekavici: mlijeko, lijepo.',
      ],
      ['štokavski', 'štokavian', 'Štokavski je osnovica standardnog jezika.'],
      ['kajkavski', 'kajkavian', 'U Zagorju se govori kajkavski.'],
      ['čakavski', 'čakavian', 'Marulić je pisao čakavski.'],
      [
        'škura',
        'window shutter (čakavian, from Venetian)',
        'Na otoku kažu škura za drvenu grilju na prozoru.',
      ],
      ['kužina', 'kitchen (čakavian)', 'Baka je cijeli dan provela u kužini.'],
    ],
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
        {
          type: 'type',
          q: 'Dopuni prijedlog prelaska na ti: „____ na ti?” (can we — moći)',
          answer: 'Možemo',
          hint: 'The first person plural of moći.',
          explanation: 'Možemo na ti? — the senior person’s offer.',
        },
        {
          type: 'type',
          q: 'Napiši s dijakriticima: u službenom dopisu „postovani” pišemo ____.',
          answer: 'poštovani',
          hint: 'One letter needs its hook.',
          explanation: 'poštovani — diacritics are obligatory in anything professional.',
        },
        {
          type: 'type',
          q: 'Napiši domaću riječ za englesko "file" u službenom tekstu: ____',
          answer: 'datoteka',
          hint: 'The native coinage, a feminine noun.',
          explanation: 'datoteka rather than fajl in careful writing.',
        },
        {
          type: 'type',
          q: 'Napiši domaću riječ za razgovorno „apdejt” (update of software) u službenom tekstu: ____',
          answer: 'ažuriranje',
          accept: ['nadogradnja'],
          hint: 'A verbal noun from the verb that means to bring up to date.',
          explanation: 'ažuriranje (or nadogradnja for an upgrade) — the native terms.',
        },
        {
          type: 'type',
          q: 'Dopuni formalni završetak dopisa: „S ____, Ana Kovač” (respect)',
          answer: 'poštovanjem',
          hint: 's takes the instrumental.',
          explanation: 'S poštovanjem — the standard formal closing.',
        },
        {
          q: 'Unuk kaže da baka govori staromodno. Kako to točno opisati?',
          options: [
            'nasljeđe kraja i vremena, ne pogreška',
            'pogreška koju treba ispraviti',
            'drugi jezik',
            'nepoznavanje jezika',
          ],
          correct: 0,
          hint: 'An old-fashioned form was once someone’s standard.',
          explanation: 'Heritage, not error.',
        },
        {
          q: 'Što mlađi gradski govornik signalizira riječima „lajkati” i „kul”?',
          options: ['lošu obrazovanost', 'dob i okruženje', 'dijalekt', 'službeni ton'],
          correct: 1,
          hint: 'The axis is age and setting, not right and wrong.',
          explanation: 'Anglicisms signal age, profession and how online the speaker is.',
        },
        {
          q: 'Poruka prijatelju bez dijakritika: kako se to čita?',
          options: [
            'kao nepismenost',
            'kao uvreda',
            'normalno za taj registar',
            'kao službeni ton',
          ],
          correct: 2,
          hint: 'Messaging is its own written register.',
          explanation: 'In a text message, missing diacritics are normal.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete the formal email: "Molim ___ da mi javite termin."',
        options: ['te', 'Vas', 'Vam', 'tebe'],
        correct: 1,
        explanation:
          'moliti takes the accusative: Molim Vas da… — and javite is the Vi form, so te does not fit.',
      },
      {
        q: 'Where is dropping diacritics acceptable?',
        options: [
          'in a CV',
          'in a quick message to a friend',
          'in a letter to the tax office',
          'in a thesis',
        ],
        correct: 1,
        explanation: 'Messaging Croatian drops diacritics; anything professional never does.',
      },
      {
        q: 'Which is right for a first email to a new client?',
        options: [
          'Poštovani, u privitku Vam šaljemo ponudu.',
          'Bog, šaljem ti ponudu.',
          'Postovani, u privitku saljemo ponudu.',
          'Ej, evo ponude.',
        ],
        correct: 0,
        explanation: 'Vi, a formal opening and full diacritics.',
      },
      {
        q: 'What does a speaker who says "računalo" and "sučelje" rather than anglicisms typically signal?',
        options: [
          'a dialect',
          'youth',
          'careful, standard-oriented, often institutional speech',
          'carelessness',
        ],
        correct: 2,
        explanation: 'Native coinages sit at the careful, institutional end of the axis.',
      },
      {
        q: 'A senior colleague says "Možemo na ti?". What do you do?',
        options: [
          'Refuse; Vi is permanent',
          'Ask a third person',
          'Switch to English',
          'Accept — it is theirs to offer',
        ],
        correct: 3,
        explanation: 'The switch to ti is the senior person’s move, and they have made it.',
      },
      {
        q: 'What do frequent diminutives signal, according to this lesson?',
        options: [
          'warmth, and often a female-coded conversational style',
          'size only',
          'formality',
          'anger',
        ],
        correct: 0,
        explanation: 'Diminutives signal warmth, and are read as part of a conversational style.',
      },
    ],
    vocab: [
      ['persirati', 'to address someone as Vi', 'Novoj kolegici u početku treba persirati.'],
      ['tikati', 'to address someone as ti', 'Nakon drugog sastanka počeli smo se tikati.'],
      [
        'dijakritički znak',
        'diacritic',
        'U službenom dopisu nijedan dijakritički znak ne smije nedostajati.',
      ],
      ['anglizam', 'anglicism', 'Riječ "lajkati" anglizam je mlađih govornika.'],
      ['posuđenica', 'loanword', 'Mnoge su se posuđenice iz njemačkog zadržale u Zagrebu.'],
      ['nasljeđe', 'heritage, legacy', 'Bakin govor jezično je nasljeđe njezina kraja.'],
      ['privitak', 'attachment (email)', 'Izvješće šaljem u privitku.'],
      ['datoteka', 'file (computer)', 'Datoteku sam spremio na zajednički disk.'],
      [
        'prebacivanje kodova',
        'code-switching',
        'Prebacivanje kodova između dijalekta i standarda posve je uobičajeno.',
      ],
    ],
  },
};
