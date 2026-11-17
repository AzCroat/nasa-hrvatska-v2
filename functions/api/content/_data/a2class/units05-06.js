// ─── A2 lessons in class order — Units 5–6 (A2 lessons 21–30) ────────────────
// Same shape and rules as the A1 class files (a1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what the lesson and the lessons before it have taught: all of A1 and the
// A2 lessons up to this one. No conditional, no comparatives, no relative
// clauses. Aspect is not discussed before the lesson `aspect`; until then the
// verbs are simply the ones the learner already uses in the past and future.
// Vi / Vas / Vam / Vaš take a capital when ONE person is addressed politely.
// The casual greeting is Bog. Typed answers ignore capitals.

export const CLASS_A2_U05_06 = {
  // ══ UNIT 5 ═════════════════════════════════════════════════════════════════

  // ── Prepositions in action ─────────────────────────────────────────────────
  'prepositions-action': {
    text: {
      kind: 'dialogue',
      title: 'Gdje si?',
      lines: [
        {
          who: 'Iva',
          hr: 'Bog, Dino! Gdje si? Jesi li još u uredu?',
          en: 'Hi, Dino! Where are you? Are you still at the office?',
        },
        {
          who: 'Dino',
          hr: 'Nisam. Sad izlazim iz ureda i idem na tržnicu.',
          en: 'No. I am leaving the office now and going to the market.',
        },
        {
          who: 'Iva',
          hr: 'Super! Ja sam kod bake. Večeras kuhamo kod nje.',
          en: "Great! I am at Grandma's. We are cooking at her place tonight.",
        },
        {
          who: 'Dino',
          hr: 'Što trebam kupiti na tržnici?',
          en: 'What do I need to buy at the market?',
        },
        {
          who: 'Iva',
          hr: 'Sir i rajčice. I kruh iz pekare, molim te. A za baku sok bez šećera.',
          en: 'Cheese and tomatoes. And bread from the bakery, please. And for Grandma, juice without sugar.',
        },
        {
          who: 'Dino',
          hr: 'Dobro. Dolazim s Markom. Od tržnice do bakine kuće treba nam deset minuta.',
          en: "All right. I am coming with Marko. From the market to Grandma's house it takes us ten minutes.",
        },
        {
          who: 'Iva',
          hr: 'Odlično! Vino je već na stolu. Vidimo se!',
          en: 'Excellent! The wine is already on the table. See you!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is Iva, and where is Dino going first?',
          options: [
            'Iva is at the office; Dino is going to the bakery',
            "Iva is at Grandma's; Dino is going to the market",
            "Iva is at the market; Dino is going to Grandma's",
            'Iva is at home; Dino is going to the office',
          ],
          correct: 1,
          hint: 'Iva says whose place she is at. Dino names one place he is leaving and one he is heading for.',
          explanation:
            "Iva is at Grandma's, where they will cook tonight. Dino is leaving the office and going to the market first.",
        },
        {
          q: 'Dino says "idem na tržnicu", and then asks what to buy "na tržnici". Why are the endings different?',
          options: [
            'The first is about one market, the second about several',
            'The first is the present, the second is the future',
            'The first is movement to the market; the second is being at the market',
            'There is no difference — both endings are always possible',
          ],
          correct: 2,
          hint: 'Look at the verb each time. Is he on his way, or is he already there when he buys?',
          explanation:
            'With na (and u), movement toward a place takes the accusative: na tržnicu. Being or doing something at the place takes the locative: na tržnici.',
        },
        {
          type: 'type',
          q: 'Now you. Dino is on his way to get the bread. He says: Idem u ____. (pekara)',
          answer: 'pekaru',
          hint: 'He is moving toward the place, so the feminine noun takes the same ending as in "idem na tržnicu".',
          explanation: 'Idem u pekaru. — movement into a place: u + accusative, pekara → pekaru.',
        },
        {
          type: 'type',
          q: "After dinner Iva leaves Grandma's and goes home. She writes to a friend: Vraćam se ____ bake. (from)",
          answer: 'od',
          hint: 'Grandma is a person, not a space you walk out of. Which "from" goes with people?',
          explanation:
            'Vraćam se od bake. — "from" a person is od; "from" a town or a room is iz. Both take the genitive.',
        },
        {
          type: 'transform',
          q: 'Dino is not on his way any more — he has arrived and is IN the office. Change the sentence.',
          from: 'Idem u ured.',
          answer: 'U uredu sam.',
          accept: ['Ja sam u uredu.', 'Sad sam u uredu.', 'Sada sam u uredu.', 'Već sam u uredu.'],
          hint: 'Being there is position: change the verb to "I am", and give the noun its "where" ending.',
          explanation:
            'U uredu sam. — position takes the locative: ured → uredu. Idem u ured is movement, with the accusative.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'sort',
        q: 'Is somebody GOING to the place, or already AT the place? Look at the ending.',
        groups: ['Going there (movement)', 'Being there (position)'],
        items: [
          { hr: 'u školu', group: 0 },
          { hr: 'u školi', group: 1 },
          { hr: 'na plažu', group: 0 },
          { hr: 'na plaži', group: 1 },
          { hr: 'u kafiću', group: 1 },
          { hr: 'na koncert', group: 0 },
          { hr: 'na moru', group: 1 },
          { hr: 'u kino', group: 0 },
        ],
        explanation:
          'After u and na, the accusative shows movement (u školu, na plažu, na koncert, u kino) and the locative shows position (u školi, na plaži, u kafiću, na moru).',
      },
      1,
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dolazim', 'od', 'Splita', 'svaki', 'petak.'],
        wrong: 1,
        answer: 'iz',
        hint: 'A town encloses you while you are in it. Which "from" is for towns and rooms?',
        explanation:
          'Dolazim iz Splita svaki petak. — coming out of a town, a room or a building is iz. Od is for people, for points in time, and for the start of a stretch (od … do).',
      },
      8,
      {
        type: 'match',
        q: 'One brother, four prepositions. Match each phrase to its meaning.',
        pairs: [
          ['od brata', 'from my brother'],
          ['kod brata', "at my brother's place"],
          ['s bratom', 'with my brother'],
          ['bez brata', 'without my brother'],
        ],
        explanation:
          'Od, kod and bez take the genitive (brata). S means "together with" and takes the instrumental (bratom).',
      },
      6,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "Tonight we are going to a concert with friends."',
        words: ['Večeras', 'idemo', 's', 'prijateljima', 'na', 'koncert.'],
        accept: [
          'Večeras idemo na koncert s prijateljima.',
          'Večeras s prijateljima idemo na koncert.',
        ],
        explanation:
          'Večeras idemo s prijateljima na koncert. — s + instrumental for company, na + accusative for where you are going.',
      },
      7,
      10,
      {
        type: 'tf',
        q: 'In the sentence "Stavi knjigu na stol", the book is already lying on the table.',
        answer: false,
        hint: 'Stavi is an order to move something. Look at the ending of the last word, too.',
        explanation:
          'False. Na stol is the accusative: the book is being moved onto the table. If it were already there, it would be "Knjiga je na stolu".',
      },
      {
        type: 'transform',
        q: 'Ana is not on her way any more — she has arrived. Change the sentence.',
        from: 'Ana ide na posao.',
        answer: 'Ana je na poslu.',
        accept: ['Ana je sad na poslu.', 'Ana je sada na poslu.', 'Ana je već na poslu.'],
        hint: 'Position needs the "where" case. This noun loses its a before the ending.',
        explanation:
          'Ana je na poslu. — position takes the locative, and posao loses its a: posao → poslu.',
      },
      {
        type: 'listen',
        audio: 'Marko je u banci.',
        q: 'Is Marko on his way, or is he already there?',
        options: [
          'He is going to the bank',
          'He is coming out of the bank',
          'He is in the bank',
          'He is next to the bank',
        ],
        correct: 2,
        explanation:
          'Marko je u banci. — u + locative: he is in the bank. Going there would be "Marko ide u banku", with the accusative.',
      },
      {
        type: 'listen',
        audio: 'Ključevi su u torbi na stolici.',
        q: 'Where are the keys?',
        options: [
          'On the table',
          'In the bag on the chair',
          'In the car',
          'Under the chair in the bag',
        ],
        correct: 1,
        explanation:
          'Ključevi su u torbi na stolici. — in the bag (u torbi), and the bag is on the chair (na stolici). Both are locatives of position.',
      },
      {
        type: 'dictate',
        audio: 'Vraćam se iz Rijeke sa sestrom.',
        answer: 'Vraćam se iz Rijeke sa sestrom.',
        hint: 'Six words. Two prepositions: the first takes the genitive, the second the instrumental.',
        explanation:
          'Vraćam se iz Rijeke sa sestrom. — I am coming back from Rijeka with my sister. Sa, not s, because sestrom begins with s.',
      },
    ],
  },

  // ── Work and jobs ──────────────────────────────────────────────────────────
  'work-jobs': {
    text: {
      kind: 'dialogue',
      title: 'Čime se baviš?',
      lines: [
        {
          who: 'Petra',
          hr: 'Ti si Filip, Anin brat? Ja sam Petra. Čime se baviš?',
          en: "You are Filip, Ana's brother? I am Petra. What do you do?",
        },
        {
          who: 'Filip',
          hr: 'Ja sam kuhar. Radim u restoranu u centru grada. A ti?',
          en: 'I am a cook. I work at a restaurant in the city center. And you?',
        },
        {
          who: 'Petra',
          hr: 'Ja sam odvjetnica. Radim u maloj tvrtki, a ured nam je blizu kolodvora.',
          en: 'I am a lawyer. I work at a small company, and our office is near the station.',
        },
        {
          who: 'Filip',
          hr: 'Kakvo ti je radno vrijeme?',
          en: 'What are your working hours like?',
        },
        {
          who: 'Petra',
          hr: 'Od devet do pet. Ali često imam sastanke i poslije pet. A ti?',
          en: 'From nine to five. But I often have meetings after five as well. And you?',
        },
        {
          who: 'Filip',
          hr: 'Ja radim navečer i vikendom. Ali šefica je dobra, a plaća nije loša.',
          en: 'I work in the evenings and on weekends. But my boss is good, and the pay is not bad.',
        },
        {
          who: 'Petra',
          hr: 'A tvoja sestra Ana? Je li još konobarica?',
          en: 'And your sister Ana? Is she still a waitress?',
        },
        {
          who: 'Filip',
          hr: 'Nije. Sada radi kao učiteljica. U kolovozu ide na godišnji odmor — i ja idem s njom!',
          en: 'No. Now she works as a teacher. In August she is going on vacation — and I am going with her!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do Petra and Filip do for a living?',
          options: [
            'Petra is a teacher; Filip is a waiter',
            'Petra is a cook; Filip is a lawyer',
            'Petra is a lawyer; Filip is a cook',
            'Petra is a lawyer; Filip is a teacher',
          ],
          correct: 2,
          hint: 'One of them works at a restaurant, the other at a small company with an office near the station.',
          explanation:
            'Petra is a lawyer (odvjetnica) at a small company. Filip is a cook (kuhar) at a restaurant. The teacher is Ana, who used to be a waitress.',
        },
        {
          q: 'Filip says that Ana "radi kao učiteljica". Why is it učiteljica, and not učiteljicu?',
          options: [
            'Because učiteljica is a word that never changes',
            'Because after kao the job stays in the subject form',
            'Because the sentence is about the present',
            'Because Ana is the object of the sentence',
          ],
          correct: 1,
          hint: 'Compare it with "Ja sam odvjetnica". What do the two patterns have in common?',
          explanation:
            'After "ja sam" and after "raditi kao" the job stays in the subject form (the nominative): Radi kao učiteljica. No case ending is added.',
        },
        {
          type: 'type',
          q: "Now you. Filip's mother has the same job as Filip. He says: Moja mama je ____.",
          answer: 'kuharica',
          hint: 'Take Filip\'s job and give it the female ending you see in "konobarica".',
          explanation:
            'Moja mama je kuharica. — most jobs have a female form in -ica, and it is the normal one for a woman: kuhar → kuharica.',
        },
        {
          type: 'type',
          q: 'Petra introduces you to her boss, an older man. Ask him politely what he does: Čime se ____?',
          answer: 'bavite',
          hint: 'Petra asks Filip with the ti form. For Vi, an -iti verb ends in -ite.',
          explanation:
            'Čime se bavite? — the polite Vi form of baviti se. To a friend it is Čime se baviš?',
        },
        {
          type: 'transform',
          q: 'Now it is your mother who drives the bus. Change the sentence.',
          from: 'Moj otac radi kao vozač autobusa.',
          answer: 'Moja majka radi kao vozačica autobusa.',
          accept: ['Moja mama radi kao vozačica autobusa.'],
          hint: 'Three words change: "my", the parent, and the job — which needs its female form.',
          explanation:
            'Moja majka radi kao vozačica autobusa. — vozač → vozačica, and moj becomes moja to agree with majka.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'sort',
        q: 'Is this the word for a man or for a woman?',
        groups: ['A man', 'A woman'],
        items: [
          { hr: 'vozač', group: 0 },
          { hr: 'kuharica', group: 1 },
          { hr: 'kolega', group: 0 },
          { hr: 'kolegica', group: 1 },
          { hr: 'profesor', group: 0 },
          { hr: 'odvjetnica', group: 1 },
          { hr: 'prodavač', group: 0 },
          { hr: 'učiteljica', group: 1 },
        ],
        explanation:
          'The female forms end in -ica. Watch out for kolega: it ends in -a, but it is a man — the woman is kolegica.',
      },
      8,
      1,
      5,
      {
        type: 'match',
        q: 'Where does each person work? Match the job to the place.',
        pairs: [
          ['liječnica', 'bolnica'],
          ['učitelj', 'škola'],
          ['konobar', 'kafić'],
          ['prodavačica', 'trgovina'],
          ['vozač', 'autobus'],
        ],
        explanation:
          'A doctor works in a bolnica (hospital), a teacher in a škola, a waiter in a kafić, a salesperson in a trgovina and a driver in an autobus.',
      },
      {
        type: 'tf',
        q: '"Ona je liječnik" is the normal way to say that a woman is a doctor.',
        answer: false,
        hint: 'Think of what the lesson says about job titles for women.',
        explanation:
          'False. For a woman, Croatian normally uses the female form of the job: Ona je liječnica.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "My working hours are from eight to four."',
        words: ['Moje', 'radno', 'vrijeme', 'je', 'od', 'osam', 'do', 'četiri.'],
        accept: ['Moje je radno vrijeme od osam do četiri.'],
        explanation:
          'Moje radno vrijeme je od osam do četiri. — od … do means "from … to", and moje agrees with the neuter vrijeme.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'radi', 'kao', 'konobaricu', 'u', 'hotelu.'],
        wrong: 3,
        answer: 'konobarica',
        hint: 'What happens to the job after "kao"? Does it take a case ending?',
        explanation:
          'Ana radi kao konobarica u hotelu. — after kao the job stays in the subject form, with no accusative ending.',
      },
      7,
      {
        type: 'fix',
        q: 'You are speaking politely to an older neighbor. One word does not fit. Tap it.',
        words: ['Gospođo', 'Kovač,', 'čime', 'se', 'baviš?'],
        wrong: 4,
        answer: 'bavite?',
        hint: 'You call her gospođo. Which form of "you" goes with that — and which verb ending?',
        explanation:
          'Gospođo Kovač, čime se bavite? — someone you call gospođo gets Vi, and the verb ends in -ite. Baviš is for a friend.',
      },
      10,
      {
        type: 'transform',
        q: 'Ana is speaking now, not Marko. Change the sentence.',
        from: 'Zaposlen sam u velikoj tvrtki.',
        answer: 'Zaposlena sam u velikoj tvrtki.',
        hint: 'One word describes the speaker and has to agree with her.',
        explanation:
          'Zaposlena sam u velikoj tvrtki. — zaposlen is a describing word: a man is zaposlen, a woman is zaposlena.',
      },
      11,
      {
        type: 'listen',
        audio: 'Sutra u devet imam sastanak sa šefom.',
        q: 'What is happening tomorrow at nine?',
        options: [
          'The speaker is going on vacation',
          'The speaker starts a new job',
          'The speaker gets paid',
          'The speaker has a meeting with the boss',
        ],
        correct: 3,
        explanation:
          'Sutra u devet imam sastanak sa šefom. — a meeting (sastanak) with the boss. Sa, not s, because šefom begins with š.',
      },
      {
        type: 'dictate',
        audio: 'Radim kao kuhar u hotelu.',
        answer: 'Radim kao kuhar u hotelu.',
        hint: 'Five words. The job follows "kao" in its basic form; the workplace follows "u".',
        explanation: 'Radim kao kuhar u hotelu. — I work as a cook at a hotel.',
      },
    ],
  },

  // ── Quality of life ────────────────────────────────────────────────────────
  'quality-of-life': {
    text: {
      kind: 'dialogue',
      title: 'Grad ili otok?',
      lines: [
        {
          who: 'Maja',
          hr: 'Tine, kako je na Braču? Jesi li zadovoljan životom na otoku?',
          en: 'Tin, how is it on Brač? Are you happy with life on the island?',
        },
        {
          who: 'Tin',
          hr: 'Jesam! Mislim da je kvaliteta života tamo odlična. Zrak je čist, a more je blizu.',
          en: 'I am! I think the quality of life there is excellent. The air is clean, and the sea is close by.',
        },
        {
          who: 'Maja',
          hr: 'A posao? Čini mi se da na otoku nema puno posla.',
          en: 'And work? It seems to me that there is not much work on the island.',
        },
        {
          who: 'Tin',
          hr: 'Imaš pravo. Plaća je mala, ali najam stana nije skup.',
          en: 'You are right. The pay is low, but the rent for an apartment is not expensive.',
        },
        {
          who: 'Maja',
          hr: 'Ja u Zagrebu imam dobru plaću, ali nemam slobodnog vremena. I imam puno stresa.',
          en: 'In Zagreb I have a good salary, but I have no free time. And I have a lot of stress.',
        },
        {
          who: 'Tin',
          hr: 'Po mom mišljenju, novac nije sve. Zdravlje je jako važno.',
          en: 'In my opinion, money is not everything. Health is very important.',
        },
        {
          who: 'Maja',
          hr: 'Mislim da imaš pravo. Ali javni prijevoz u Zagrebu je odličan, a na otoku trebaš auto.',
          en: 'I think you are right. But public transportation in Zagreb is excellent, and on the island you need a car.',
        },
        {
          who: 'Tin',
          hr: 'Istina. Ali ja na posao idem pješice — i svaki dan pijem kavu na plaži!',
          en: 'True. But I walk to work — and every day I drink coffee on the beach!',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: what is good and what is bad about Tin's life on the island?",
          options: [
            'A big salary, but a lot of stress',
            'Excellent public transportation, but expensive rent',
            'A lot of work, but dirty air',
            'Clean air and cheap rent, but low pay',
          ],
          correct: 3,
          hint: 'Tin praises the air and the sea. Then he agrees with Maja about one thing and adds a "but".',
          explanation:
            "The air is clean, the sea is near and the rent is not expensive — but there is little work and the pay is low. The stress and the good salary are Maja's, in Zagreb.",
        },
        {
          q: 'Tin says "Mislim da je kvaliteta života tamo odlična." Why does "je" stand right after "da", so far from "odlična"?',
          options: [
            'Because "da je" is one fixed word that never changes',
            'Because the sentence is a question',
            'Because a small word like je takes second place in its part of the sentence, and that part begins with da',
            'Because kvaliteta is feminine',
          ],
          correct: 2,
          hint: 'Remember where the small words me, se and je go in any sentence. Where does this part of the sentence begin?',
          explanation:
            'The opinion is a little sentence of its own, and it begins with da. Short words go in second place, so je comes straight after da: Mislim da je …, never "Mislim da … odlična je".',
        },
        {
          type: 'type',
          q: 'Now you. Maja earns well, but her friends do not. Give your opinion: Mislim da ____ plaće u Zagrebu male.',
          answer: 'su',
          hint: 'Plaće is a plural subject. The small verb comes straight after da.',
          explanation:
            'Mislim da su plaće u Zagrebu male. — the plural of je, in second place after da.',
        },
        {
          type: 'type',
          q: 'Ask Maja for her opinion about life in the city: Što misliš o ____ u gradu? (život)',
          answer: 'životu',
          hint: 'After o comes the "where" case — the same ending as in "po mom mišljenju".',
          explanation: 'Što misliš o životu u gradu? — o takes the locative: život → životu.',
        },
        {
          type: 'transform',
          q: 'This sounds very sure. You are less sure — say it with "it seems to me".',
          from: 'Mislim da ljudi u gradu rade previše.',
          answer: 'Čini mi se da ljudi u gradu rade previše.',
          hint: 'Swap the opening frame for the softer one that Maja uses when she talks about work on the island.',
          explanation:
            'Čini mi se da ljudi u gradu rade previše. — Čini mi se da … is softer than Mislim da …; everything after da stays the same.',
        },
      ],
    },
    mix: [
      6,
      {
        type: 'match',
        q: 'Match each word of the topic to its meaning.',
        pairs: [
          ['plaća', 'salary'],
          ['najam', 'rent'],
          ['zdravlje', 'health'],
          ['sigurnost', 'safety'],
          ['priroda', 'nature'],
        ],
        explanation:
          'Five things people weigh up when they talk about kvaliteta života — the quality of life.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "I think that life here is expensive."',
        words: ['Mislim', 'da', 'je', 'život', 'ovdje', 'skup.'],
        accept: ['Mislim da je ovdje život skup.'],
        explanation:
          'Mislim da je život ovdje skup. — je comes straight after da; it can never go to the end.',
      },
      10,
      2,
      0,
      7,
      {
        type: 'sort',
        q: 'Does the sentence state a fact, or give an opinion?',
        groups: ['States a fact', 'Gives an opinion'],
        items: [
          { hr: 'Radim u banci.', group: 0 },
          { hr: 'Mislim da je stan skup.', group: 1 },
          { hr: 'Živim u Rijeci.', group: 0 },
          { hr: 'Po mom mišljenju, plaće su male.', group: 1 },
          { hr: 'Čini mi se da radiš previše.', group: 1 },
          { hr: 'Autobus dolazi u osam.', group: 0 },
        ],
        explanation:
          'Three frames mark an opinion: Mislim da …, Po mom mišljenju, … and Čini mi se da …. The other sentences simply state facts.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'je', 'zadovoljna', 'život', 'na', 'selu.'],
        wrong: 3,
        answer: 'životom',
        hint: 'Zadovoljan takes a case with no preposition — the same one as in "zadovoljan poslom".',
        explanation:
          'Ana je zadovoljna životom na selu. — zadovoljan takes the instrumental: život → životom.',
      },
      {
        type: 'tf',
        q: 'When a Croatian friend says "Idemo li na kavu?", you should expect a quick espresso and to be back in ten minutes.',
        answer: false,
        hint: 'The lesson says that coffee in Croatia is not really about the coffee.',
        explanation:
          'False. Going "na kavu" means sitting for an hour or more and talking over one coffee. Nobody hurries you — that slow hour is part of what Croatians mean by a good quality of life.',
      },
      8,
      {
        type: 'transform',
        q: 'You disagree. Make the opinion negative — put the "not" where Croatian puts it.',
        from: 'Mislim da je dobro raditi vikendom.',
        answer: 'Mislim da nije dobro raditi vikendom.',
        accept: ['Ne mislim da je dobro raditi vikendom.'],
        hint: 'The "not" goes after da: the small verb je has a negative form that is one word.',
        explanation:
          'Mislim da nije dobro raditi vikendom. — Croatian usually makes the opinion itself negative: Mislim da nije …',
      },
      {
        type: 'tf',
        q: '"Raditi na crno" means to work at night.',
        answer: false,
        hint: 'It is one of the idioms with crn in this lesson — and it is about contracts and taxes.',
        explanation:
          'False. Raditi na crno means to work off the books — without a contract and without paying taxes.',
      },
      4,
      11,
      {
        type: 'listen',
        audio: 'Čini mi se da ljudi ovdje imaju puno slobodnog vremena.',
        q: 'What does the speaker think?',
        options: [
          'People here seem to have a lot of free time',
          'People here seem to work too much',
          'People here have no free time',
          'People here earn a lot of money',
        ],
        correct: 0,
        explanation:
          'Čini mi se da ljudi ovdje imaju puno slobodnog vremena. — it seems to me that people here have a lot of free time.',
      },
      {
        type: 'dictate',
        audio: 'Po mom mišljenju, novac nije sve.',
        answer: 'Po mom mišljenju, novac nije sve.',
        hint: 'Six words. An opinion frame, a comma, then a short sentence about money.',
        explanation: 'Po mom mišljenju, novac nije sve. — In my opinion, money is not everything.',
      },
    ],
  },

  // ── Problems at work and at home ───────────────────────────────────────────
  'problems-at-work': {
    text: {
      kind: 'dialogue',
      title: 'Težak tjedan',
      lines: [
        {
          who: 'Sven',
          hr: 'Lana, jesi li dobro? Što se dogodilo?',
          en: 'Lana, are you all right? What happened?',
        },
        {
          who: 'Lana',
          hr: 'Imam problem sa šefom. Opet mi je dao previše posla.',
          en: 'I have a problem with my boss. He gave me too much work again.',
        },
        {
          who: 'Sven',
          hr: 'Žao mi je. Radiš li opet prekovremeno?',
          en: 'I am sorry. Are you working overtime again?',
        },
        {
          who: 'Lana',
          hr: 'Da, cijeli tjedan. A računalo u našem uredu ne radi već tri dana.',
          en: 'Yes, all week. And the computer in our office has not been working for three days.',
        },
        {
          who: 'Sven',
          hr: 'Joj, to je grozno! Pomažu li ti kolege?',
          en: 'Oh, that is awful! Do your colleagues help you?',
        },
        {
          who: 'Lana',
          hr: 'Ne pomažu mi. A kod kuće imam problem sa susjedima — svaku noć slušaju glasnu glazbu.',
          en: 'They do not help me. And at home I have a problem with the neighbors — every night they listen to loud music.',
        },
        {
          who: 'Sven',
          hr: 'Razumijem te. U mom stanu nema tople vode od ponedjeljka.',
          en: 'I understand you. There has been no hot water in my apartment since Monday.',
        },
        {
          who: 'Lana',
          hr: 'Onda i ti imaš težak tjedan!',
          en: 'Then you are having a hard week too!',
        },
        {
          who: 'Sven',
          hr: 'Nemoj se brinuti. Sutra je subota — sve će biti u redu!',
          en: 'Do not worry. Tomorrow is Saturday — it will all be fine!',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: which three things are making Lana's week hard?",
          options: [
            'Her boss, her car and no hot water',
            'Her boss, the office computer and her neighbors',
            'Her colleagues, her low pay and her car',
            'Her neighbors, no electricity and a low salary',
          ],
          correct: 1,
          hint: 'Two of her problems are at work — one is a person, one is a machine. The third is at home, at night.',
          explanation:
            "Her boss gives her too much work, the office computer has not worked for three days, and her neighbors play loud music every night. The hot water is Sven's problem.",
        },
        {
          q: 'Lana says "sa šefom" and "sa susjedima", but the lesson says "s računalom". Why is it sa in her sentences?',
          options: [
            'Sa is used for people and s for things',
            'Sa is the plural form of s',
            'Sa is used when you are angry',
            'Before s, š, z or ž the preposition gets an extra a, so that it can be pronounced',
          ],
          correct: 3,
          hint: 'Do not look at who the problem is with. Look at the first letter of the word that follows.',
          explanation:
            'It is about the sound, not about people or things: šefom begins with š and susjedima with s, so the preposition is sa. Before other sounds it is s: s računalom, s kolegom.',
        },
        {
          type: 'type',
          q: 'Now you. At your office it is the printer. Say: Imam problem s ____. (printer)',
          answer: 'printerom',
          hint: 'The problem is WITH it, so you need the "with" case. A masculine noun takes the same ending as šef in Lana\'s sentence.',
          explanation: 'Imam problem s printerom. — s + instrumental; the masculine ending is -om.',
        },
        {
          type: 'type',
          q: 'And there is no internet at the office either: U uredu nema ____. (internet)',
          answer: 'interneta',
          hint: 'What is missing goes into the same case as "tople vode" in Sven\'s line. A masculine noun adds one letter.',
          explanation:
            'U uredu nema interneta. — after nema the missing thing is in the genitive: internet → interneta.',
        },
        {
          type: 'transform',
          q: 'This happened to your colleague Ivan, not to you. Tell a friend about HIM.',
          from: 'Šef mi je dao previše posla.',
          answer: 'Šef mu je dao previše posla.',
          accept: ['Šef je Ivanu dao previše posla.', 'Šef je dao Ivanu previše posla.'],
          hint: 'Only the small "to me" word changes — to the one that means "to him". It keeps the same place.',
          explanation:
            'Šef mu je dao previše posla. — mu is the short dative of on, and it stands in second place, before je, just like mi.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'Match each word or phrase to its meaning.',
        pairs: [
          ['prekovremeno', 'overtime'],
          ['u kvaru', 'out of order'],
          ['grozno', 'awful'],
          ['susjed', 'neighbor'],
          ['struja', 'electricity'],
        ],
        explanation:
          'Words for complaining: Radim prekovremeno. Auto je u kvaru. To je grozno! Susjedi su glasni. Struja je skupa.',
      },
      0,
      9,
      {
        type: 'sort',
        q: 'The problem is with … whom or what? Sort each word by the form of the preposition it needs.',
        groups: ['Imam problem s …', 'Imam problem sa …'],
        items: [
          { hr: 'mobitelom', group: 0 },
          { hr: 'susjedima', group: 1 },
          { hr: 'ženom', group: 1 },
          { hr: 'printerom', group: 0 },
          { hr: 'zubarom', group: 1 },
          { hr: 'bratom', group: 0 },
          { hr: 'sestrom', group: 1 },
          { hr: 'mužem', group: 0 },
        ],
        explanation:
          'Sa stands before s, š, z and ž: sa susjedima, sa ženom, sa zubarom, sa sestrom. Before every other sound it is plain s.',
      },
      12,
      {
        type: 'order',
        q: 'Put the words in order: "My colleague did not give me back the money."',
        words: ['Kolega', 'mi', 'nije', 'vratio', 'novac.'],
        accept: ['Kolega mi novac nije vratio.'],
        explanation:
          'Kolega mi nije vratio novac. — the short word mi (to me) stands in second place, and nije is one word.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Imam', 'problem', 's', 'kolega', 'na', 'poslu.'],
        wrong: 3,
        answer: 'kolegom',
        hint: 'After s the noun cannot stay in its basic form. It needs the "with" case.',
        explanation:
          'Imam problem s kolegom na poslu. — s takes the instrumental: kolega → kolegom.',
      },
      {
        type: 'tf',
        q: 'This sentence is correct: "U kupaonici nema topla voda."',
        answer: false,
        hint: 'What does nema do to the thing that is missing — and to the adjective in front of it?',
        explanation:
          'False. After nema the missing thing is in the genitive, and its adjective too: U kupaonici nema tople vode.',
      },
      11,
      {
        type: 'tf',
        q: 'The small words are in the right order in this sentence: "Kolega je mi pomogao."',
        answer: false,
        hint: 'When mi and je meet in second place, which one goes first? Think of "Žao mi je".',
        explanation:
          'False. It is Kolega mi je pomogao. — the short words stand together in second place, and mi comes before je.',
      },
      2,
      {
        type: 'transform',
        q: 'A man says this. Now Lana says it about herself.',
        from: 'Stalno sam umoran i ne mogu spavati.',
        answer: 'Stalno sam umorna i ne mogu spavati.',
        hint: 'One describing word has to agree with the speaker.',
        explanation:
          'Stalno sam umorna i ne mogu spavati. — umoran loses its a in the feminine: umorna.',
      },
      5,
      {
        type: 'listen',
        audio: 'U našem uredu nema struje od jutra.',
        q: 'What is the problem?',
        options: [
          'The computer in the office is broken',
          'There has been no electricity in the office since the morning',
          'There is no hot water at home',
          'The boss has been angry since the morning',
        ],
        correct: 1,
        explanation:
          'U našem uredu nema struje od jutra. — no electricity (struja) in our office since the morning.',
      },
      {
        type: 'dictate',
        audio: 'Žao mi je, to je grozno.',
        answer: 'Žao mi je, to je grozno.',
        hint: 'Six words, with a comma after the third. You say it to a friend who has bad news.',
        explanation: 'Žao mi je, to je grozno. — I am sorry, that is awful.',
      },
    ],
  },

  // ── Writing to a friend ────────────────────────────────────────────────────
  'informal-email': {
    text: {
      kind: 'text',
      title: 'Poruka iz Rijeke',
      lines: [
        { hr: 'Dragi Davide,', en: 'Dear David,' },
        {
          hr: 'kako si? Hvala na poruci! Dugo ti se nisam javila.',
          en: 'how are you? Thanks for your message! I have not been in touch for a long time.',
        },
        {
          hr: 'Imam puno novosti. Prošli mjesec sam našla novi posao u Rijeci.',
          en: 'I have a lot of news. Last month I found a new job in Rijeka.',
        },
        {
          hr: 'Radim u maloj tvrtki blizu mora. Posao je zanimljiv, a kolege su jako ljubazni.',
          en: 'I work at a small company near the sea. The job is interesting, and my colleagues are very kind.',
        },
        {
          hr: 'Živim u malom stanu u centru grada.',
          en: 'I live in a small apartment in the city center.',
        },
        {
          hr: 'U srpnju ću doći u Zagreb na tjedan dana. Imaš li vremena za kavu?',
          en: 'In July I will come to Zagreb for a week. Do you have time for a coffee?',
        },
        { hr: 'Pozdravi Ivanu i piši mi!', en: 'Say hi to Ivana and write to me!' },
        { hr: 'Puno pozdrava, tvoja Nina', en: 'Lots of love, your Nina' },
      ],
      questions: [
        {
          q: "Without looking back at the email: what is Nina's news, and what is her plan?",
          options: [
            'She found a new apartment in Zagreb; she will go to the seaside in July',
            'She found a new job in Zagreb; she will come to Rijeka in August',
            'She found a new job in Rijeka; she will come to Zagreb in July',
            'She is on vacation in Rijeka; she will go back to work in July',
          ],
          correct: 2,
          hint: 'The news is in the past tense and names a city by the sea. The plan is in the future tense and names a month.',
          explanation:
            'Last month she found a new job in Rijeka (the past, for news). In July she will come to Zagreb for a week (the future, for a plan).',
        },
        {
          q: 'Nina signs "tvoja Nina". Why tvoja, when David is a man?',
          options: [
            'Because Rijeka is a feminine word',
            'Because the word agrees with the writer — Nina is the one who is "yours"',
            'Because poruka is a feminine word',
            'It is a mistake — it should be tvoj',
          ],
          correct: 1,
          hint: 'Which word stands right after tvoja? That is the word it describes.',
          explanation:
            'Tvoja describes Nina, so it agrees with her. A woman signs tvoja …, a man signs tvoj … — whoever the friend is.',
        },
        {
          type: 'type',
          q: 'Now you. David writes back. How does his email begin? ____ Nina,',
          answer: 'Draga',
          hint: "The same word as in Nina's first line, but now it is for a woman.",
          explanation:
            'Draga Nina, — dragi for a man, draga for a woman. Nina looks the same in the vocative.',
        },
        {
          type: 'type',
          q: 'David has been quiet for a long time too. He writes: Dugo ti se nisam ____.',
          answer: 'javio',
          hint: 'Nina uses this verb in the feminine form of the past. David is a man.',
          explanation:
            'Dugo ti se nisam javio. — the past form agrees with the writer: a man writes javio, a woman javila.',
        },
        {
          type: 'transform',
          q: "David closes his email. Change Nina's closing so that it is his.",
          from: 'Puno pozdrava, tvoja Nina',
          answer: 'Puno pozdrava, tvoj David',
          hint: 'Two words change: the name, and the word that agrees with the writer.',
          explanation: 'Puno pozdrava, tvoj David — a man signs with tvoj.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dragi', 'Tomislav,', 'kako', 'si?'],
        wrong: 1,
        answer: 'Tomislave,',
        hint: 'You are calling him by name. Which form does a name take then?',
        explanation:
          'Dragi Tomislave, kako si? — in an opening the name is in the vocative, and most masculine names add -e.',
      },
      1,
      9,
      2,
      {
        type: 'match',
        q: 'Match each line from an email to its meaning.',
        pairs: [
          ['Što ima novo?', 'What is new?'],
          ['Piši mi!', 'Write to me!'],
          ['Vidimo se uskoro!', 'See you soon!'],
          ['Grlim te!', 'A hug!'],
          ['Pozdravi mamu!', 'Say hi to your mom!'],
        ],
        explanation:
          'Što ima novo? opens an email. Piši mi!, Pozdravi mamu!, Vidimo se uskoro! and Grlim te! all belong to the goodbye.',
      },
      12,
      {
        type: 'sort',
        q: 'Would you write this to a friend, or in a formal letter?',
        groups: ['To a friend', 'In a formal letter'],
        items: [
          { hr: 'Draga Ana,', group: 0 },
          { hr: 'Poštovana gospođo Kovač,', group: 1 },
          { hr: 'Javi se!', group: 0 },
          { hr: 'S poštovanjem,', group: 1 },
          { hr: 'Grlim te!', group: 0 },
          { hr: 'Molim Vas za odgovor.', group: 1 },
          { hr: 'Piši mi!', group: 0 },
          { hr: 'Zahvaljujem na Vašem pismu.', group: 1 },
        ],
        explanation:
          'A friend gets draga, ti and short friendly imperatives. A formal letter uses Poštovana, Vi with a capital letter, and S poštovanjem.',
      },
      {
        type: 'order',
        q: 'Put the words in order (a woman is writing): "I have not been in touch with you for a long time."',
        words: ['Dugo', 'ti', 'se', 'nisam', 'javila.'],
        explanation:
          'Dugo ti se nisam javila. — the short words ti and se stand together in second place, in that order.',
      },
      10,
      5,
      11,
      {
        type: 'tf',
        q: '"S poštovanjem" is a good way to end an email to your best friend.',
        answer: false,
        hint: 'Look at the table "To a friend vs a formal letter". In which column does it stand?',
        explanation:
          'False. S poštovanjem is the formal closing ("Yours sincerely"). To a friend you write Pozdrav!, Puno pozdrava! or Grlim te!',
      },
      6,
      7,
      {
        type: 'transform',
        q: 'This was news from last summer. Turn it into a PLAN for this summer — put it in the future.',
        from: 'U kolovozu sam bila u Splitu.',
        answer: 'U kolovozu ću biti u Splitu.',
        hint: 'The future needs the small word for "I will" and the basic form of the verb.',
        explanation:
          'U kolovozu ću biti u Splitu. — news is in the past (sam bila), a plan in the future: ću + the infinitive biti.',
      },
      {
        type: 'listen',
        audio: 'Pozdravi mamu i tatu i javi se uskoro!',
        q: 'What does the speaker ask you to do?',
        options: [
          'Say hi to your parents and get in touch soon',
          'Come to visit Mom and Dad soon',
          'Write a letter to Mom and Dad',
          'Call your parents tonight',
        ],
        correct: 0,
        explanation:
          'Pozdravi mamu i tatu i javi se uskoro! — say hi to your mom and dad, and get in touch soon.',
      },
      {
        type: 'dictate',
        audio: 'Dugo se nismo vidjeli, dođi u Rijeku!',
        answer: 'Dugo se nismo vidjeli, dođi u Rijeku!',
        hint: 'Seven words. First what has not happened for a long time, then a comma and an invitation.',
        explanation:
          'Dugo se nismo vidjeli, dođi u Rijeku! — We have not seen each other for a long time, come to Rijeka!',
      },
    ],
  },

  // ══ UNIT 6 ═════════════════════════════════════════════════════════════════

  // ── House and home ─────────────────────────────────────────────────────────
  'house-home': {
    text: {
      kind: 'dialogue',
      title: 'Novi stan',
      lines: [
        {
          who: 'Ema',
          hr: 'Bog, Karlo! Zgrada nema lift?',
          en: 'Hi, Karlo! The building has no elevator?',
        },
        {
          who: 'Karlo',
          hr: 'Nema. Stan je na četvrtom katu, ali je jako svijetao. Uđi!',
          en: 'No. The apartment is on the fourth floor, but it is very bright. Come in!',
        },
        {
          who: 'Ema',
          hr: 'Ovo je dnevni boravak? Baš je velik!',
          en: 'Is this the living room? It is really big!',
        },
        {
          who: 'Karlo',
          hr: 'Da. Kauč je pored prozora, a slike su na zidu.',
          en: 'Yes. The sofa is next to the window, and the pictures are on the wall.',
        },
        { who: 'Ema', hr: 'A gdje spavaš?', en: 'And where do you sleep?' },
        {
          who: 'Karlo',
          hr: 'Spavaća soba je pored kupaonice. U njoj su samo krevet i ormar.',
          en: 'The bedroom is next to the bathroom. There is only a bed and a closet in it.',
        },
        { who: 'Ema', hr: 'A kuhinja?', en: 'And the kitchen?' },
        {
          who: 'Karlo',
          hr: 'Mala je, ali ima balkon. Na balkonu svako jutro pijem kavu.',
          en: 'It is small, but it has a balcony. I drink coffee on the balcony every morning.',
        },
        { who: 'Ema', hr: 'A gdje je tvoja mačka?', en: 'And where is your cat?' },
        {
          who: 'Karlo',
          hr: 'Spava ispod stola u kuhinji — kao uvijek!',
          en: 'Sleeping under the table in the kitchen — as always!',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: on which floor is Karlo's apartment, and where is the cat?",
          options: [
            'On the third floor; the cat is on the sofa',
            'On the fourth floor; the cat is on the balcony',
            'On the ground floor; the cat is under the bed',
            'On the fourth floor; the cat is under the kitchen table',
          ],
          correct: 3,
          hint: 'Ema is surprised that there is no elevator. The cat is in the room that has the balcony.',
          explanation:
            'The apartment is on the fourth floor (na četvrtom katu), and the cat is sleeping under the table in the kitchen (ispod stola u kuhinji).',
        },
        {
          q: 'Karlo says "na zidu", but "pored prozora" and "ispod stola". All three say where something IS — so why two different endings?',
          options: [
            'Zid is masculine; prozor and stol are neuter',
            'Na takes the locative for position; pored and ispod always take the genitive',
            'Na zidu is position; the other two are movement',
            'The ending -a means that there are several windows and tables',
          ],
          correct: 1,
          hint: 'The nouns are all masculine and all singular. What is different is the little word in front.',
          explanation:
            'U and na take the locative for position: na zidu. The other place words of this lesson — pored, ispod, iza, iznad — take the genitive: pored prozora, ispod stola.',
        },
        {
          type: 'type',
          q: 'Now you. Ema lives two flights lower than Karlo. She says: Moj stan je na ____ katu. (second)',
          answer: 'drugom',
          accept: ['drugome'],
          hint: 'The ordinal takes the same ending as the one in Karlo\'s "na … katu".',
          explanation:
            'Moj stan je na drugom katu. — the floor is an ordinal in the locative: drugi → drugom.',
        },
        {
          type: 'type',
          q: 'The cat has moved. Now it is sleeping behind the sofa: Mačka spava iza ____. (kauč)',
          answer: 'kauča',
          hint: 'Iza is one of the place words that work like pored and ispod.',
          explanation: 'Mačka spava iza kauča. — iza takes the genitive: kauč → kauča.',
        },
        {
          type: 'transform',
          q: 'The coffee is ready and Karlo is carrying it out. He is not ON the balcony yet — he is GOING there. Change the sentence.',
          from: 'Karlo je na balkonu.',
          answer: 'Karlo ide na balkon.',
          accept: ['Karlo izlazi na balkon.'],
          hint: 'Movement changes the verb — and the case after na.',
          explanation:
            'Karlo ide na balkon. — movement takes the accusative (na balkon); position takes the locative (na balkonu).',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Is it a room, or a piece of furniture?',
        groups: ['A room', 'A piece of furniture'],
        items: [
          { hr: 'kupaonica', group: 0 },
          { hr: 'krevet', group: 1 },
          { hr: 'hodnik', group: 0 },
          { hr: 'ormar', group: 1 },
          { hr: 'blagovaonica', group: 0 },
          { hr: 'polica', group: 1 },
          { hr: 'dnevni boravak', group: 0 },
          { hr: 'kauč', group: 1 },
        ],
        explanation:
          'Rooms: kupaonica (bathroom), hodnik (hallway), blagovaonica (dining room), dnevni boravak (living room). Furniture: krevet (bed), ormar (closet), polica (shelf), kauč (sofa).',
      },
      0,
      5,
      {
        type: 'match',
        q: 'Where do you usually find it? Match each thing to its place.',
        pairs: [
          ['hladnjak', 'kuhinja'],
          ['krevet', 'spavaća soba'],
          ['auto', 'garaža'],
          ['kauč', 'dnevni boravak'],
        ],
        explanation:
          'The fridge is in the kitchen, the bed in the bedroom, the car in the garage and the sofa in the living room.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moji', 'roditelji', 'žive', 'u', 'kuću', 'blizu', 'mora.'],
        wrong: 4,
        answer: 'kući',
        hint: 'They live there — that is position, not movement.',
        explanation:
          'Moji roditelji žive u kući blizu mora. — where you live is position: u + locative, kuća → kući. U kuću would mean "into the house".',
      },
      3,
      {
        type: 'tf',
        q: 'In Croatia, "prvi kat" is the floor you walk into straight from the street.',
        answer: false,
        hint: 'The floor at street level has its own word. Counting starts above it.',
        explanation:
          'False. The floor at street level is prizemlje. Prvi kat is one flight up — what Americans call the second floor.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "The bed is under the window, and the closet is behind the door."',
        words: ['Krevet', 'je', 'ispod', 'prozora,', 'a', 'ormar', 'je', 'iza', 'vrata.'],
        explanation:
          'Krevet je ispod prozora, a ormar je iza vrata. — ispod and iza both take the genitive.',
      },
      1,
      8,
      {
        type: 'transform',
        q: 'Now you are GOING to the kitchen, not standing in it. Change the sentence. Start with "Idem".',
        from: 'U kuhinji sam.',
        answer: 'Idem u kuhinju.',
        hint: 'Movement takes the other case after u. A feminine -a noun gets the ending it has in "Vidim Anu".',
        explanation:
          'Idem u kuhinju. — movement into a room: u + accusative. U kuhinji is position, with the locative.',
      },
      {
        type: 'tf',
        q: '"Dom" is the Croatian word for an apartment in a block.',
        answer: false,
        hint: 'The lesson gives three words: one for a building of your own, one for an apartment, and this one.',
        explanation:
          'False. An apartment is a stan. Dom is home in the emotional sense — not a kind of building.',
      },
      10,
      11,
      {
        type: 'listen',
        audio: 'Naočale su ti na polici u hodniku.',
        q: 'Where are the glasses?',
        options: [
          'On the shelf in the hallway',
          'On the table in the kitchen',
          'In the closet in the bedroom',
          'Under the shelf in the hallway',
        ],
        correct: 0,
        explanation:
          'Naočale su ti na polici u hodniku. — your glasses are on the shelf (na polici) in the hallway (u hodniku).',
      },
      {
        type: 'dictate',
        audio: 'Živimo na trećem katu bez lifta.',
        answer: 'Živimo na trećem katu bez lifta.',
        hint: 'Six words. The floor is an ordinal, and the last word follows "bez".',
        explanation:
          'Živimo na trećem katu bez lifta. — We live on the third floor, with no elevator.',
      },
    ],
  },

  // ── Describing people ──────────────────────────────────────────────────────
  'describing-people': {
    text: {
      kind: 'dialogue',
      title: 'Kakva je tvoja sestra?',
      lines: [
        {
          who: 'Dora',
          hr: 'Ivo, sutra idem po tvoju sestru na kolodvor, ali je još nisam vidjela. Je li visoka?',
          en: 'Ivo, tomorrow I am picking up your sister at the station, but I have not seen her yet. Is she tall?',
        },
        {
          who: 'Ivo',
          hr: 'Da, Marta je visoka i mršava. Ima dugu crnu kosu i zelene oči.',
          en: 'Yes, Marta is tall and slim. She has long black hair and green eyes.',
        },
        { who: 'Dora', hr: 'Nosi li naočale?', en: 'Does she wear glasses?' },
        {
          who: 'Ivo',
          hr: 'Da, nosi velike crvene naočale.',
          en: 'Yes, she wears big red glasses.',
        },
        {
          who: 'Dora',
          hr: 'A kakva je? Je li sramežljiva?',
          en: 'And what is she like? Is she shy?',
        },
        {
          who: 'Ivo',
          hr: 'Nije! Jako je vesela i otvorena. Puno priča.',
          en: 'No! She is very cheerful and outgoing. She talks a lot.',
        },
        {
          who: 'Dora',
          hr: 'Onda nije kao ti! Ti si uvijek ozbiljan.',
          en: 'Then she is not like you! You are always serious.',
        },
        {
          who: 'Ivo',
          hr: 'Ali sam strpljiv! I ti s Martom moraš biti strpljiva — ona uvijek kasni.',
          en: 'But I am patient! And you have to be patient with Marta too — she is always late.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how will Dora recognize Marta at the station?',
          options: [
            'Short, long blond hair, blue eyes, no glasses',
            'Tall, short black hair, brown eyes, red glasses',
            'Tall and slim, long black hair, green eyes, red glasses',
            'Slim, curly black hair, green eyes, black glasses',
          ],
          correct: 2,
          hint: 'Ivo gives her height, her hair (two words), her eyes, and one thing she wears.',
          explanation:
            'Marta je visoka i mršava. Ima dugu crnu kosu i zelene oči, and she wears big red glasses.',
        },
        {
          q: 'Ivo says "Ima dugu crnu kosu". Why is it dugu crnu kosu, and not duga crna kosa?',
          options: [
            'Because feminine adjectives always end in -u',
            'Because the hair belongs to Marta, and belonging takes this ending',
            'Because kosa is a plural word in Croatian',
            'Because hair is the object of ima, so the noun and both adjectives are in the accusative',
          ],
          correct: 3,
          hint: 'What does the verb imati do to the thing you have? Compare: "Imam sestru."',
          explanation:
            'Imati takes the accusative. Kosa is the object, so it becomes kosu, and every adjective follows it: dugu crnu kosu.',
        },
        {
          type: 'type',
          q: "Now you. Ivo and Marta's father is older. Describe his hair: Tata ima ____ kosu. (gray)",
          answer: 'sijedu',
          hint: 'Not the gray of objects — hair has its own word. Give it the ending of "dugu" and "crnu".',
          explanation:
            'Tata ima sijedu kosu. — gray hair is sijeda (never siva), and after ima it is in the accusative.',
        },
        {
          type: 'type',
          q: 'Marta also has a brother you have never met. Ask what he is like: ____ je tvoj brat?',
          answer: 'Kakav',
          hint: 'Dora asks this about Marta, with the feminine form. A brother needs the masculine one.',
          explanation:
            'Kakav je tvoj brat? — kakav asks what someone is like, and it agrees: kakav for brat, kakva for sestra.',
        },
        {
          type: 'transform',
          q: 'Ivo describes himself. His mother says the same about herself.',
          from: 'Ja sam ozbiljan i strpljiv.',
          answer: 'Ja sam ozbiljna i strpljiva.',
          accept: ['Ozbiljna sam i strpljiva.', 'Ozbiljna i strpljiva sam.'],
          hint: 'Both describing words have to agree with a woman. One of them loses a letter before the ending.',
          explanation:
            'Ja sam ozbiljna i strpljiva. — the feminine adds -a, and ozbiljan drops its a: ozbiljna.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'Match each word to its opposite.',
        pairs: [
          ['visok', 'nizak'],
          ['mlad', 'star'],
          ['vrijedan', 'lijen'],
          ['dug', 'kratak'],
        ],
        explanation:
          'Visok (tall) — nizak (short); mlad (young) — star (old); vrijedan (hard-working) — lijen (lazy); dug (long) — kratak (short, of hair).',
      },
      0,
      5,
      {
        type: 'sort',
        q: 'Does the word describe how someone LOOKS, or what someone is LIKE as a person?',
        groups: ['How someone looks', 'What someone is like'],
        items: [
          { hr: 'mršav', group: 0 },
          { hr: 'tvrdoglav', group: 1 },
          { hr: 'krupan', group: 0 },
          { hr: 'ljubazan', group: 1 },
          { hr: 'zgodan', group: 0 },
          { hr: 'sramežljiv', group: 1 },
          { hr: 'sijed', group: 0 },
          { hr: 'strpljiv', group: 1 },
        ],
        explanation:
          'Looks: mršav (slim), krupan (well-built), zgodan (attractive), sijed (gray-haired). Character: tvrdoglav (stubborn), ljubazan (kind), sramežljiv (shy), strpljiv (patient).',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ivana', 'ima', 'duga', 'kosu', 'i', 'smeđe', 'oči.'],
        wrong: 2,
        answer: 'dugu',
        hint: 'The adjective has to follow its noun into the same case.',
        explanation:
          'Ivana ima dugu kosu i smeđe oči. — kosu is accusative after ima, so the adjective is accusative too.',
      },
      3,
      1,
      7,
      {
        type: 'tf',
        q: 'To ask WHICH of three boys in a photo is your friend\'s brother, you say: "Kakav je tvoj brat?"',
        answer: false,
        hint: 'One question word asks "what kind?", another asks "which one of these?".',
        explanation:
          'False. Kakav asks what he is like. To pick one out of a set you ask: Koji je tvoj brat?',
      },
      {
        type: 'order',
        q: 'Put the words in order: "He wears glasses and has a beard."',
        words: ['On', 'nosi', 'naočale', 'i', 'ima', 'bradu.'],
        accept: ['On ima bradu i nosi naočale.'],
        explanation:
          'On nosi naočale i ima bradu. — both verbs take the accusative: naočale, bradu.',
      },
      8,
      {
        type: 'tf',
        q: 'A person with "plava kosa" has blue hair.',
        answer: false,
        hint: 'Plav has two meanings, and the noun decides which one it is.',
        explanation:
          'False. With hair, plav means blond: plava kosa is blond hair. With eyes it means blue: plave oči.',
      },
      {
        type: 'transform',
        q: 'Say the same thing with "imati". Start with "Ona".',
        from: 'Njezina kosa je crna.',
        answer: 'Ona ima crnu kosu.',
        hint: 'The hair becomes the object of the verb, and its adjective goes with it.',
        explanation:
          'Ona ima crnu kosu. — after ima both words are in the accusative: crna kosa → crnu kosu.',
      },
      10,
      11,
      {
        type: 'listen',
        audio: 'Moj djed ima sijedu bradu i nosi naočale.',
        q: 'Which description fits the grandfather?',
        options: [
          'He has gray hair and blue eyes',
          'He has a black beard and no glasses',
          'He has a gray beard and wears glasses',
          'He is tall and wears glasses',
        ],
        correct: 2,
        explanation:
          'Moj djed ima sijedu bradu i nosi naočale. — a gray beard (sijeda brada) and glasses (naočale).',
      },
      {
        type: 'dictate',
        audio: 'Moja sestra je visoka i vesela.',
        answer: 'Moja sestra je visoka i vesela.',
        hint: 'Six words. Two describing words agree with a woman; the second one comes from veseo.',
        explanation: 'Moja sestra je visoka i vesela. — My sister is tall and cheerful.',
      },
    ],
  },

  // ── Verb aspect ────────────────────────────────────────────────────────────
  aspect: {
    text: {
      kind: 'dialogue',
      title: 'Jesi li napisao zadaću?',
      lines: [
        { who: 'Mama', hr: 'Jakove, što radiš?', en: 'Jakov, what are you doing?' },
        {
          who: 'Jakov',
          hr: 'Pišem zadaću. Pišem je već cijeli sat!',
          en: 'I am writing my homework. I have been writing it for a whole hour already!',
        },
        { who: 'Mama', hr: 'I? Jesi li je napisao?', en: 'And? Have you finished writing it?' },
        {
          who: 'Jakov',
          hr: 'Nisam još. Ali sam pročitao cijelu knjigu za školu!',
          en: 'Not yet. But I have read the whole book for school!',
        },
        {
          who: 'Mama',
          hr: 'Bravo! A gdje su kolači? Jutros sam kupila šest kolača.',
          en: 'Well done! And where are the cakes? I bought six cakes this morning.',
        },
        {
          who: 'Jakov',
          hr: 'Tata i ja smo ih pojeli. Jeli smo ih dok smo gledali utakmicu.',
          en: 'Dad and I ate them up. We were eating them while we were watching the game.',
        },
        {
          who: 'Mama',
          hr: 'Sve?! Dobro. Napiši zadaću do kraja i dođi na večeru.',
          en: 'All of them?! All right. Finish writing your homework and come to dinner.',
        },
        {
          who: 'Jakov',
          hr: 'Dobro, mama. A sutra ću ja kupiti nove kolače!',
          en: 'All right, Mom. And tomorrow I will buy new cakes!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what has Jakov finished, and what has he not finished?',
          options: [
            'He has finished the homework, but not the book',
            'He has finished the book, but not the homework',
            'He has finished both',
            'He has finished neither',
          ],
          correct: 1,
          hint: 'One thing he has been doing "for a whole hour already". The other he did "whole".',
          explanation:
            'He has read the whole book (pročitao — finished), but he is still writing the homework: when Mama asks whether it is done, he says "Nisam još".',
        },
        {
          q: 'Jakov says "Pišem zadaću", and Mama asks "Jesi li je napisao?". Why does she use napisati, and not pisati?',
          options: [
            'Because pisati has no past tense',
            'Because napisati is the polite form of pisati',
            'Because she is asking about the result — whether the homework is done',
            'Because she is asking how long he has been writing',
          ],
          correct: 2,
          hint: 'She can see that he is writing. What does she really want to know?',
          explanation:
            'Pisati shows the activity; napisati shows the finished result. Mama is asking whether the homework is DONE, so she chooses the perfective verb.',
        },
        {
          type: 'type',
          q: 'Now you. Later Jakov really knows all his new words. He shouts: Mama, ____ sam sve riječi! (učiti / naučiti)',
          answer: 'naučio',
          hint: 'The result is there — he knows them now. Choose the verb with the prefix, in the past form for a boy.',
          explanation:
            'Mama, naučio sam sve riječi! — naučiti is the perfective: the learning has reached its result.',
        },
        {
          type: 'type',
          q: "Jakov's father, at this very moment: Tata sad ____ novine. (čitati / pročitati — he)",
          answer: 'čita',
          hint: 'He is in the middle of it. Only one verb of the pair can show an action going on now — use the present, in the on form.',
          explanation:
            'Tata sad čita novine. — what is going on right now is a process, so the verb is the imperfective čitati.',
        },
        {
          type: 'transform',
          q: 'Here Mama was in the middle of writing. Now say that the letter is DONE: change the verb.',
          from: 'Mama je pisala pismo.',
          answer: 'Mama je napisala pismo.',
          hint: 'Add the prefix that turns writing into a finished result.',
          explanation:
            'Mama je napisala pismo. — pisala: she was writing. Napisala: she wrote it, and the letter is finished.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'sort',
        q: 'Does the verb show the process (or a habit), or the finished result?',
        groups: ['The process or habit (imperfective)', 'The finished result (perfective)'],
        items: [
          { hr: 'pisati', group: 0 },
          { hr: 'napisati', group: 1 },
          { hr: 'kupovati', group: 0 },
          { hr: 'kupiti', group: 1 },
          { hr: 'dolaziti', group: 0 },
          { hr: 'doći', group: 1 },
          { hr: 'jesti', group: 0 },
          { hr: 'pojesti', group: 1 },
        ],
        explanation:
          'Pisati, kupovati, dolaziti and jesti show the action going on or repeating. Napisati, kupiti, doći and pojesti show it completed.',
      },
      3,
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sada', 'napišem', 'pismo', 'baki.'],
        wrong: 1,
        answer: 'pišem',
        hint: 'It is happening right now. Which verb of the pair can show an action in progress?',
        explanation:
          'Sada pišem pismo baki. — only the imperfective can mean "I am doing it now". A perfective verb in the present never describes this moment.',
      },
      8,
      0,
      6,
      {
        type: 'match',
        q: 'Same book, four meanings. Match each sentence to what it says.',
        pairs: [
          ['Čitao sam knjigu.', 'I was reading a book.'],
          ['Pročitao sam knjigu.', 'I finished the book.'],
          ['Čitat ću knjigu.', 'I will be reading a book.'],
          ['Pročitat ću knjigu.', 'I will finish the book.'],
        ],
        explanation:
          'Čitati is the activity; pročitati is reading through to the end. The difference works the same way in the past and in the future.',
      },
      1,
      {
        type: 'tf',
        q: '"Jeo sam kolač" tells you that the cake is gone.',
        answer: false,
        hint: 'Which verb of the pair is this — the one for the activity, or the one for the finished result?',
        explanation:
          'False. Jeo sam kolač only says that some eating went on. English uses "ate" for both; Croatian has to choose — the cake is gone only in Pojeo sam kolač.',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "Tomorrow I will buy bread."',
        words: ['Sutra', 'ću', 'kupiti', 'kruh.'],
        accept: ['Kruh ću kupiti sutra.', 'Sutra ću kruh kupiti.'],
        explanation:
          'Sutra ću kupiti kruh. — one purchase that will be completed, so the perfective kupiti. The short word ću stands in second place.',
      },
      {
        type: 'listen',
        audio: 'Svako jutro jedem jabuku.',
        q: 'What is the speaker describing?',
        options: [
          'A habit',
          'One apple that is already eaten',
          'A plan for tomorrow morning',
          'Something that happened once, yesterday',
        ],
        correct: 0,
        explanation:
          'Svako jutro jedem jabuku. — svako jutro and the imperfective jesti show a habit. One apple, eaten up, would be "Pojeo sam jabuku".',
      },
      {
        type: 'transform',
        q: 'This was a habit. Now say that it happened ONCE, yesterday, and is done. Start with "Jučer".',
        from: 'Svaki dan sam kupovao novine.',
        answer: 'Jučer sam kupio novine.',
        accept: ['Jučer sam novine kupio.'],
        hint: 'Two changes: the time words, and the verb — its shorter partner shows one finished purchase.',
        explanation:
          'Jučer sam kupio novine. — kupovati is the habit, kupiti the single completed purchase.',
      },
      10,
      11,
      {
        type: 'listen',
        audio: 'Djeca su pojela sve kolače.',
        q: 'What do you know about the cakes?',
        options: [
          'The children are eating them now',
          'There are none left — the children ate them all',
          'The children will eat them tomorrow',
          'The children did not like them',
        ],
        correct: 1,
        explanation:
          'Djeca su pojela sve kolače. — pojesti is perfective: the cakes are eaten up, all of them.',
      },
      {
        type: 'dictate',
        audio: 'Pročitala sam cijelu knjigu.',
        answer: 'Pročitala sam cijelu knjigu.',
        hint: 'Four words. A woman speaks about a finished result.',
        explanation: 'Pročitala sam cijelu knjigu. — I read the whole book (and finished it).',
      },
    ],
  },

  // ── Aspect pairs ───────────────────────────────────────────────────────────
  'aspect-pairs': {
    text: {
      kind: 'dialogue',
      title: 'Nemam vremena za kavu',
      lines: [
        { who: 'Roko', hr: 'Hana, idemo na kavu?', en: 'Hana, shall we go for a coffee?' },
        {
          who: 'Hana',
          hr: 'Ne mogu, sad pišem e-mail profesorici. Moram ga napisati do tri sata.',
          en: 'I cannot, I am writing an email to my professor right now. I have to finish it by three.',
        },
        { who: 'Roko', hr: 'A poslije?', en: 'And afterward?' },
        {
          who: 'Hana',
          hr: 'Poslije moram učiti. Sutra imam ispit i moram naučiti pedeset novih riječi.',
          en: 'Afterward I have to study. I have an exam tomorrow and I have to learn fifty new words.',
        },
        {
          who: 'Roko',
          hr: 'Ja uvijek učim navečer. Ali danas moram pročitati cijelu knjigu za ispit.',
          en: 'I always study in the evening. But today I have to read a whole book for my exam.',
        },
        {
          who: 'Hana',
          hr: 'Cijelu knjigu? Ti baš puno čitaš!',
          en: 'A whole book? You really read a lot!',
        },
        {
          who: 'Roko',
          hr: 'Dobro, onda ću ti kupiti kavu u kafiću.',
          en: 'All right, then I will buy you a coffee at the café.',
        },
        {
          who: 'Hana',
          hr: 'Hvala! Ti mi uvijek kupuješ kavu. Sutra ću ja tebi kupiti kolač!',
          en: 'Thank you! You always buy me coffee. Tomorrow I will buy YOU a cake!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why can Hana not go for coffee, and what does Roko do about it?',
          options: [
            'She is reading a book; Roko will wait for her',
            'She has an exam today; Roko will study with her',
            'She is writing an email; Roko will write it for her',
            'She is writing an email and then has to study; Roko will buy her a coffee',
          ],
          correct: 3,
          hint: 'She names one thing she is doing now and one thing for afterward. Roko solves the coffee problem another way.',
          explanation:
            'Hana is writing an email with a deadline, and afterward she has to study for an exam. Roko will buy her a coffee at the café.',
        },
        {
          q: 'Hana says "moram učiti", and then "moram naučiti pedeset novih riječi". What is the difference?',
          options: [
            'Učiti is the present; naučiti is the future',
            'Učiti is the activity of studying; naučiti is the result — fifty words learned',
            'Učiti is for school; naučiti is for home',
            'There is none — she says the same thing twice',
          ],
          correct: 1,
          hint: 'Both follow moram, so both are infinitives. Ask what she has to DO, and what has to be DONE by tomorrow.',
          explanation:
            'Both are infinitives. Učiti (imperfective) is the activity: she has to spend time studying. Naučiti (perfective) is the result: by tomorrow the fifty words must be learned.',
        },
        {
          type: 'type',
          q: 'Now you. Roko is standing at the counter of the café at this very moment: Roko sad ____ kavu za Hanu. (kupovati / kupiti — he)',
          answer: 'kupuje',
          hint: 'For "right now" only the longer verb of the pair works. Its present drops -ova-: ja kupujem, ti kupuješ, on …',
          explanation:
            'Roko sad kupuje kavu za Hanu. — kupovati is the imperfective, the only choice for right now; its present is kupujem, kupuješ, kupuje.',
        },
        {
          type: 'type',
          q: "Roko's book is thick, and he sighs: Danas ____ cijeli dan. (čitati / pročitati — I)",
          answer: 'čitam',
          hint: 'Cijeli dan says how long. Only one verb of the pair can last a whole day — use it in the ja form of the present.',
          explanation:
            'Danas čitam cijeli dan. — "how long" goes with the imperfective. A finished result (pročitati) cannot last all day.',
        },
        {
          type: 'transform',
          q: 'This is a habit. Now say it about ONE cake, tomorrow. Start with "Sutra će".',
          from: 'Baka mi uvijek daje kolače.',
          answer: 'Sutra će mi baka dati kolač.',
          accept: [
            'Sutra će mi dati kolač.',
            'Sutra će mi baka dati jedan kolač.',
            'Sutra će mi dati jedan kolač.',
          ],
          hint: 'One act of giving needs the shorter verb of the pair, in its basic form after "će". The small word mi stays close to the front.',
          explanation:
            'Sutra će mi baka dati kolač. — davati (daje) is the habit; dati is one finished act of giving.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'In these pairs there is no prefix to help you. Which verb is the process or habit, and which is the one finished act?',
        groups: ['Process or habit (imperfective)', 'One finished act (perfective)'],
        items: [
          { hr: 'kupovati', group: 0 },
          { hr: 'kupiti', group: 1 },
          { hr: 'otvarati', group: 0 },
          { hr: 'otvoriti', group: 1 },
          { hr: 'govoriti', group: 0 },
          { hr: 'reći', group: 1 },
          { hr: 'vraćati', group: 0 },
          { hr: 'vratiti', group: 1 },
        ],
        explanation:
          'These pairs differ in the middle, not at the front. In kupovati – kupiti, otvarati – otvoriti and vraćati – vratiti the -ati verb is the imperfective and the -iti verb the perfective. Govoriti and reći are simply two different words.',
      },
      2,
      9,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Kupujem kruh.', 'I am buying bread.'],
          ['Kupit ću kruh.', 'I will buy bread (once).'],
          ['Kupovat ću kruh ovdje.', 'I will buy my bread here (regularly).'],
          ['Moram kupiti kruh.', 'I have to buy bread.'],
        ],
        explanation:
          'Kupujem comes from kupovati: right now, or a habit. Kupiti is one purchase. In the future, kupovat ću is a habit and kupit ću a single act.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Can you give me a pen?"',
        words: ['Možeš', 'li', 'mi', 'dati', 'olovku?'],
        explanation:
          'Možeš li mi dati olovku? — one act of giving, so the perfective infinitive dati after možeš.',
      },
      11,
      {
        type: 'tf',
        q: '"Sad popijem kavu" is a correct way to say "I am drinking coffee right now".',
        answer: false,
        hint: 'Can a perfective verb in the present describe this very moment?',
        explanation:
          'False. For right now only the imperfective works: Sad pijem kavu. A perfective present can never mean "I am doing it at this moment".',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moram', 'dva', 'sata', 'naučiti', 'za', 'ispit.'],
        wrong: 3,
        answer: 'učiti',
        hint: 'Two hours says how long. Which verb of the pair can last?',
        explanation:
          'Moram dva sata učiti za ispit. — a finished result cannot last two hours; the process can. "How long" goes with the imperfective.',
      },
      3,
      12,
      {
        type: 'transform',
        q: 'This is the process, right now. Say instead that you HAVE TO eat it all up. Start with "Moram".',
        from: 'Sad jedem ovaj sendvič.',
        answer: 'Moram pojesti ovaj sendvič.',
        hint: 'After moram comes the basic form of the verb — and "all up" needs the partner with the prefix, the one you met with the cakes in the last lesson.',
        explanation:
          'Moram pojesti ovaj sendvič. — after moram you choose the infinitive by meaning: the whole sandwich, eaten up, is the perfective pojesti.',
      },
      4,
      {
        type: 'listen',
        audio: 'Ne mogu razgovarati, sad kuham ručak.',
        q: 'What do you learn about the lunch?',
        options: [
          'It is already cooked',
          'It will be cooked tomorrow',
          'It is being cooked right now',
          'It is already eaten',
        ],
        correct: 2,
        explanation:
          'Sad kuham ručak. — the imperfective present: the cooking is going on at this moment. A finished lunch would be "Skuhao sam ručak".',
      },
      5,
      6,
      {
        type: 'listen',
        audio: 'Moram napisati e-mail šefu do pet sati.',
        q: 'What does the speaker have to do?',
        options: [
          'Finish an email to the boss by five',
          'Write emails for five hours',
          'Read five emails from the boss',
          'Call the boss at five',
        ],
        correct: 0,
        explanation:
          'Moram napisati e-mail šefu do pet sati. — napisati: one email, finished, and do pet sati is the deadline.',
      },
      {
        type: 'dictate',
        audio: 'Sutra ću kupiti novi mobitel.',
        answer: 'Sutra ću kupiti novi mobitel.',
        hint: 'Five words. One purchase, tomorrow.',
        explanation: 'Sutra ću kupiti novi mobitel. — Tomorrow I will buy a new phone.',
      },
    ],
  },

  // ── Aspect in the past ─────────────────────────────────────────────────────
  'aspect-in-past': {
    text: {
      kind: 'dialogue',
      title: 'Što si radio za vikend?',
      lines: [
        {
          who: 'Vesna',
          hr: 'Borna, što si radio za vikend?',
          en: 'Borna, what did you do over the weekend?',
        },
        {
          who: 'Borna',
          hr: 'U subotu je cijeli dan padala kiša. Čitao sam i gledao filmove.',
          en: 'On Saturday it rained all day. I read and watched movies.',
        },
        {
          who: 'Vesna',
          hr: 'A ja sam konačno pročitala onu veliku knjigu o Dubrovniku! Čitala sam je tri tjedna.',
          en: 'And I finally finished that big book about Dubrovnik! I was reading it for three weeks.',
        },
        { who: 'Borna', hr: 'Bravo! A u nedjelju?', en: 'Well done! And on Sunday?' },
        {
          who: 'Vesna',
          hr: 'U nedjelju sam ustala u sedam, popila kavu i otišla na tržnicu.',
          en: 'On Sunday I got up at seven, drank a coffee and went to the market.',
        },
        {
          who: 'Borna',
          hr: 'Ja sam u nedjelju dugo spavao. Onda sam dva sata pisao izvještaj za šefa.',
          en: 'On Sunday I slept for a long time. Then I spent two hours writing a report for my boss.',
        },
        { who: 'Vesna', hr: 'I? Jesi li ga napisao?', en: 'And? Did you finish it?' },
        {
          who: 'Borna',
          hr: 'Nisam. Ali sam za jedan sat skuhao ručak za cijelu obitelj!',
          en: 'No. But in one hour I cooked lunch for the whole family!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did Vesna finish, and what did Borna NOT finish?',
          options: [
            'Vesna finished her report; Borna did not finish his book',
            'Vesna finished lunch; Borna did not finish the movie',
            'Vesna finished her book; Borna did not finish his report',
            'Both of them finished everything',
          ],
          correct: 2,
          hint: 'One of them says "konačno". The other answers a question with "Nisam".',
          explanation:
            'Vesna finally finished her book (konačno sam pročitala). Borna wrote his report for two hours (pisao), but when Vesna asks whether he finished it, he says no.',
        },
        {
          q: 'Vesna says "konačno sam pročitala" the book, and then "Čitala sam je tri tjedna". Why two different verbs for the same book?',
          options: [
            'The first is the past; the second is the present',
            'The first is about Vesna; the second is about Borna',
            'Čitala is polite; pročitala is casual',
            'The first gives the result — the book is finished; the second says how long the reading went on',
          ],
          correct: 3,
          hint: 'Look at the words that travel with each verb: "konačno" with one, "tri tjedna" with the other.',
          explanation:
            'Pročitala (perfective) gives the result: she got to the end. Čitala (imperfective) describes the activity, and "tri tjedna" says how long it lasted. How long always goes with the imperfective.',
        },
        {
          type: 'type',
          q: "Now you. Tell a story about Vesna's Sunday evening, one finished step after another: Došla je kući, ____ večeru i pozvala prijatelje. (kuhati / skuhati)",
          answer: 'skuhala',
          hint: 'Each step is finished before the next one begins — choose the verb with the prefix, in the past form for a woman.',
          explanation:
            'Došla je kući, skuhala večeru i pozvala prijatelje. — a chain of completed events is perfective all the way.',
        },
        {
          type: 'type',
          q: "Vesna's Saturday: U subotu sam cijelu večer ____ televiziju. (gledati / pogledati — a woman)",
          answer: 'gledala',
          hint: 'Cijelu večer says how long. Which verb of the pair can last a whole evening?',
          explanation:
            'U subotu sam cijelu večer gledala televiziju. — "how long" goes with the imperfective: gledati.',
        },
        {
          type: 'transform',
          q: 'Borna wrote for two hours and did not finish. Now say that the report is DONE, and that it TOOK him two hours.',
          from: 'Borna je dva sata pisao izvještaj.',
          answer: 'Borna je za dva sata napisao izvještaj.',
          accept: [
            'Borna je napisao izvještaj za dva sata.',
            'Borna je izvještaj napisao za dva sata.',
            'Za dva sata Borna je napisao izvještaj.',
            'Za dva sata je Borna napisao izvještaj.',
          ],
          hint: 'Two changes: the verb gets its prefix, and "how long it took" needs a small word in front of the time — the one Borna uses about his lunch.',
          explanation:
            'Borna je za dva sata napisao izvještaj. — dva sata + pisao: the activity lasted two hours. Za dva sata + napisao: the result took two hours.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'sort',
        q: 'These words are signals. Do they go with the activity, or with the finished result?',
        groups: ['With the activity (imperfective)', 'With the result (perfective)'],
        items: [
          { hr: 'dva sata', group: 0 },
          { hr: 'za dva sata', group: 1 },
          { hr: 'cijeli dan', group: 0 },
          { hr: 'konačno', group: 1 },
          { hr: 'dugo', group: 0 },
          { hr: 'odmah', group: 1 },
          { hr: 'cijelu večer', group: 0 },
        ],
        explanation:
          'How long (dva sata, cijeli dan, dugo, cijelu večer) points to the imperfective. How long it TOOK (za dva sata), konačno and odmah point to the perfective.',
      },
      0,
      9,
      {
        type: 'match',
        q: 'Match each sentence to what it really says.',
        pairs: [
          ['Čitao sam tu knjigu.', 'I did some reading in that book.'],
          ['Pročitao sam tu knjigu.', 'I read that book to the end.'],
          ['Nisam čitao tu knjigu.', 'I never even opened that book.'],
          ['Nisam pročitao tu knjigu.', 'I did not get to the end of that book.'],
        ],
        explanation:
          'The negative keeps the difference: nisam čitao — not at all; nisam pročitao — not to the end (you may have started).',
      },
      2,
      {
        type: 'fix',
        q: 'This is a quick story, but one word turns it into slow motion. Tap it.',
        words: ['Ušao', 'je,', 'sjedao', 'i', 'naručio', 'kavu.'],
        wrong: 2,
        answer: 'sjeo',
        hint: 'In a chain of events every step is finished before the next. One verb here shows a process instead.',
        explanation:
          'Ušao je, sjeo i naručio kavu. — a chain of completed events is perfective all the way: ući, sjesti, naručiti.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "She was writing emails for two hours."',
        words: ['Pisala', 'je', 'e-mailove', 'dva', 'sata.'],
        accept: ['Dva sata je pisala e-mailove.', 'Pisala je dva sata e-mailove.'],
        explanation:
          'Pisala je e-mailove dva sata. — dva sata says how long, so the verb is the imperfective pisati.',
      },
      12,
      3,
      11,
      {
        type: 'tf',
        q: '"Čitao sam knjigu" tells you that the speaker read the book to the end.',
        answer: false,
        hint: 'Which verb of the pair is this — the one for the activity, or the one for the result?',
        explanation:
          'False. Čitao sam knjigu only says that some reading went on. To the end is Pročitao sam knjigu.',
      },
      {
        type: 'transform',
        q: 'Vesna studied the words — but does she know them? Say that now she KNOWS them all: change the verb and add "sve".',
        from: 'Učila sam nove riječi.',
        answer: 'Naučila sam sve nove riječi.',
        accept: ['Naučila sam nove riječi.', 'Sve nove riječi sam naučila.'],
        hint: 'The result needs the partner verb with a prefix. Put "sve" in front of "nove riječi".',
        explanation:
          'Naučila sam sve nove riječi. — učila: she spent time studying. Naučila: the words are learned.',
      },
      7,
      {
        type: 'tf',
        q: '"Ustajala je, pila kavu i odlazila na posao" tells a quick story of three finished steps.',
        answer: false,
        hint: 'Look at the three verbs. Do they show completed steps, or things that used to go on?',
        explanation:
          'False. These are imperfective: they describe what she used to do. Three finished steps are perfective: Ustala je, popila kavu i otišla na posao.',
      },
      6,
      {
        type: 'listen',
        audio: 'Za dva dana sam naučila sve nove riječi.',
        q: 'What does the speaker say?',
        options: [
          'She studied for two days and is still studying',
          'She will learn the words in two days',
          'She has not learned the new words',
          'It took her two days, and now she knows all the new words',
        ],
        correct: 3,
        explanation:
          'Za dva dana sam naučila sve nove riječi. — za dva dana is how long it took, and naučila gives the result: she knows them.',
      },
      {
        type: 'dictate',
        audio: 'Popio je kavu i otišao na posao.',
        answer: 'Popio je kavu i otišao na posao.',
        hint: 'Seven words. Two finished steps, one after the other.',
        explanation: 'Popio je kavu i otišao na posao. — He drank his coffee and went to work.',
      },
    ],
  },
};
