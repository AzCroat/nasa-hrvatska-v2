// ─── B1 lessons in class order — Units 3–4 (lessons 11–20) ───────────────────
// Same shape and rules as the A1 and A2 class files (a1class/, a2class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, the B1 lessons before each lesson, and the lesson itself have
// taught. No relative clauses with koji, no reported speech, no verbal adverbs.
// Adjectives in the instrumental appear only from instrumental-adjectives on.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.
//
// In every mix a typed answer is produced BEFORE anything prints that form, which
// is why the existing typed items mostly come early and the multiple-choice items late.

export const CLASS_B1_U03_04 = {
  // ══ UNIT 3 ═════════════════════════════════════════════════════════════════

  // ── If — real conditions ───────────────────────────────────────────────────
  'real-conditions': {
    text: {
      kind: 'dialogue',
      title: 'Izlet na Plitvice',
      lines: [
        {
          who: 'Dora',
          hr: 'Mateju, idemo li u subotu na Plitvice?',
          en: 'Matej, are we going to Plitvice on Saturday?',
        },
        {
          who: 'Matej',
          hr: 'Idemo, ako bude lijepo vrijeme. Ako bude padala kiša, radije bih ostao u gradu.',
          en: 'We are, if the weather is nice. If it rains, I would rather stay in town.',
        },
        {
          who: 'Dora',
          hr: 'Prognoza je dobra. Ali ako ne želimo čekati u redu, moramo krenuti rano.',
          en: 'The forecast is good. But if we don’t want to wait in line, we have to set off early.',
        },
        {
          who: 'Matej',
          hr: 'Dobro. Ako se probudim na vrijeme, doći ću po tebe u šest.',
          en: 'All right. If I wake up on time, I will pick you up at six.',
        },
        { who: 'Dora', hr: 'A ako se ne probudiš?', en: 'And if you don’t wake up?' },
        {
          who: 'Matej',
          hr: 'Onda me nazovi. Ako se ne javim, nazovi moju mamu — ona je uvijek budna u pet.',
          en: 'Then call me. If I don’t answer, call my mom — she is always awake at five.',
        },
        {
          who: 'Dora',
          hr: 'Dogovoreno. Kad stignemo, prvo ćemo kupiti karte, a onda popiti kavu.',
          en: 'Deal. When we get there, we will buy the tickets first and then have a coffee.',
        },
        {
          who: 'Matej',
          hr: 'Može. Ponesi jaknu u slučaju da gore bude hladno.',
          en: 'Sure. Bring a jacket in case it is cold up there.',
        },
        {
          who: 'Dora',
          hr: 'Hoću. A ti ponesi budilicu!',
          en: 'I will. And you bring an alarm clock!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: on what condition are they going, and what will Matej do if he wakes up on time?',
          options: [
            'If the tickets are cheap; he will call Dora at five',
            'If the weather is nice; he will pick Dora up at six',
            'If Dora’s mom agrees; he will buy the tickets',
            'If it rains; he will stay in town',
          ],
          correct: 1,
          hint: 'His first answer is about the sky. His promise is about an hour of the morning.',
          explanation:
            'They are going if the weather is nice. If Matej wakes up on time, he will come for Dora at six; if it rains, he would rather stay in town.',
        },
        {
          q: 'Dora says "A ako se ne probudiš?" about Matej waking up, but "Kad stignemo…" about arriving. Why two different words?',
          options: [
            'One is used for the morning, the other for the afternoon',
            'One is used with ti, the other with mi',
            'Waking up on time is uncertain; arriving is something she counts on',
            'One needs a negative verb, the other a positive one',
          ],
          correct: 2,
          hint: 'Which of the two events does Dora doubt?',
          explanation:
            'Ako leaves it open — Matej may or may not wake up. Kad treats the event as certain: once they are on their way, they will arrive.',
        },
        {
          type: 'type',
          q: 'Now you. You are not sure you will have time tomorrow. Tell a friend: Ako sutra ____ imao vremena, javit ću ti se. (a man speaking)',
          answer: 'budem',
          hint: 'A condition in the future with imati: you need the special future form of biti for ja.',
          explanation:
            'Ako sutra budem imao vremena… — futur II (budem + participle) marks a condition that lies in the future. Never "ako ću imati".',
        },
        {
          type: 'type',
          q: 'The sky looks gray. Tell your friend to take an umbrella, just in case: Ponesi kišobran u ____ da pada kiša.',
          answer: 'slučaju',
          hint: 'The fixed phrase is literally "in the case that" — the noun slučaj after u.',
          explanation:
            'u slučaju da + a clause means "in case": Ponesi kišobran u slučaju da pada kiša.',
        },
        {
          type: 'transform',
          q: 'Now the opposite case: tell your friend what to do if he does NOT make the train.',
          from: 'Ako stigneš na vlak, javi mi.',
          answer: 'Ako ne stigneš na vlak, javi mi.',
          accept: [
            'Ako na vlak ne stigneš, javi mi.',
            'Javi mi ako ne stigneš na vlak.',
            'Ako ne stigneš na vlak, javi mi se.',
          ],
          hint: 'Negate the verb itself: the short negative word goes directly in front of it, and the tense does not change.',
          explanation:
            'Ako ne stigneš na vlak, javi mi. — a negative condition is simply ako + ne + the present.',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'tf',
        q: 'In "Ako budem umorna, ostat ću doma", the speaker is a woman.',
        answer: true,
        hint: 'Look at the word after budem: it agrees with the speaker.',
        explanation:
          'True. After budem the adjective or participle agrees with the speaker: umorna for a woman, umoran for a man.',
      },
      8,
      {
        type: 'match',
        q: 'Match each condition to what follows from it.',
        pairs: [
          ['Ako budeš gladan,', 'u hladnjaku ima sira i kruha.'],
          ['Ako u planinama bude dovoljno snijega,', 'idemo na skijanje.'],
          ['Ako ne položiš ispit,', 'moraš ga ponoviti u rujnu.'],
          ['Ako propustiš zadnji tramvaj,', 'uzmi taksi.'],
          ['Ako te boli zub,', 'idi zubaru.'],
        ],
        explanation:
          'Every if-half is in the present or in the budem-form — never in the future with ću, ćeš, će. The other half can be an instruction, a present or a future.',
      },
      6,
      {
        type: 'sort',
        q: 'Does the speaker leave it open, or count on it?',
        groups: ['It may or may not happen', 'It is certain, or it always happens'],
        items: [
          { hr: 'Ako stigneš na vrijeme, idemo zajedno.', group: 0 },
          { hr: 'Kad završi film, idemo kući.', group: 1 },
          { hr: 'Ako sutra bude sunčano, idemo na plažu.', group: 0 },
          { hr: 'Kad je gužva, tramvaj kasni.', group: 1 },
          { hr: 'Ako nađeš moje ključeve, javi mi.', group: 0 },
          { hr: 'Kad dođe ljeto, idemo na more.', group: 1 },
        ],
        explanation:
          'Ako leaves the condition open. Kad treats it as certain (the film will end, summer will come) or as a rule that repeats (whenever there is a crowd).',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "If it doesn’t rain, we will go on foot."',
        words: ['Ako', 'ne', 'bude', 'padala', 'kiša,', 'ići', 'ćemo', 'pješice.'],
        accept: [
          'Ako kiša ne bude padala, ići ćemo pješice.',
          'Ići ćemo pješice ako ne bude padala kiša.',
          'Ići ćemo pješice ako kiša ne bude padala.',
          'Ako ne bude padala kiša, pješice ćemo ići.',
          'Pješice ćemo ići ako ne bude padala kiša.',
          'Pješice ćemo ići ako kiša ne bude padala.',
          'Ako kiša ne bude padala, pješice ćemo ići.',
        ],
        explanation:
          'Ako ne bude padala kiša, ići ćemo pješice. The negative word stands right before bude, and a comma closes the if-half when it comes first.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("If the children are hungry, I will make sandwiches.")',
        words: ['Ako', 'djeca', 'bude', 'gladna,', 'napravit', 'ću', 'sendviče.'],
        wrong: 2,
        answer: 'budu',
        hint: 'Look at who might be hungry: the future form of biti has to match them.',
        explanation:
          'Ako djeca budu gladna, napravit ću sendviče. — djeca takes a plural verb, so the form is budu; bude is for one person or thing.',
      },
      3,
      {
        type: 'transform',
        q: 'Make one sentence with ako. Mind the tense in the if-half.',
        from: 'Možda ćeš zakasniti. Onda me nazovi.',
        answer: 'Ako zakasniš, nazovi me.',
        accept: [
          'Nazovi me ako zakasniš.',
          'Ako budeš kasnio, nazovi me.',
          'Ako budeš kasnila, nazovi me.',
          'Nazovi me ako budeš kasnio.',
          'Nazovi me ako budeš kasnila.',
          'Ako zakasniš, onda me nazovi.',
        ],
        hint: 'English says "if you are late", not "if you will be late" — Croatian does the same.',
        explanation:
          'Ako zakasniš, nazovi me. — the future of the first sentence disappears: after ako a perfective verb stands in the present.',
      },
      2,
      {
        type: 'listen',
        audio: 'Doći ću na večeru, osim ako ne budem morala raditi.',
        q: 'Will the speaker come to dinner?',
        options: [
          'Yes, for certain',
          'No — she has to work',
          'Yes, unless she has to work',
          'Only if dinner is after work',
        ],
        correct: 2,
        explanation:
          'osim ako ne… means "unless": she will come, unless she has to work. Morala shows that a woman is speaking.',
      },
      {
        type: 'dictate',
        audio: 'Ako budeš mogao, dođi.',
        answer: 'Ako budeš mogao, dođi.',
        hint: 'Four words: "If you can, come" — said to a man.',
        explanation: 'Ako budeš mogao, dođi. — the budem-form for ti, then an imperative.',
      },
    ],
  },

  // ── Joining sentences ──────────────────────────────────────────────────────
  conjunctions: {
    text: {
      kind: 'dialogue',
      title: 'More ili planine?',
      lines: [
        {
          who: 'Iva',
          hr: 'Karlo, moramo se dogovoriti: idemo li ovo ljeto na more ili u planine?',
          en: 'Karlo, we have to decide: are we going to the coast or to the mountains this summer?',
        },
        {
          who: 'Karlo',
          hr: 'Ja bih u planine jer je na moru u kolovozu prevelika gužva.',
          en: 'I would go to the mountains, because the coast is far too crowded in August.',
        },
        {
          who: 'Iva',
          hr: 'Znam, ali ja se želim kupati. Ti voliš hodati, a ja volim plivati.',
          en: 'I know, but I want to swim. You like hiking, and I like swimming.',
        },
        {
          who: 'Karlo',
          hr: 'Iako volim more, ne volim ležati na plaži cijeli dan.',
          en: 'Although I love the sea, I don’t like lying on the beach all day.',
        },
        {
          who: 'Iva',
          hr: 'Ne moramo ići u Split nego na Vis. Tamo je mirno.',
          en: 'We don’t have to go to Split — we can go to Vis instead. It is quiet there.',
        },
        {
          who: 'Karlo',
          hr: 'Na Visu ima i brda pa ja mogu ujutro hodati, a ti plivati.',
          en: 'Vis has hills too, so I can hike in the morning and you can swim.',
        },
        {
          who: 'Iva',
          hr: 'Eto vidiš! Ako rezerviramo ovaj tjedan, apartman će biti jeftiniji.',
          en: 'There you go! If we book this week, the apartment will be cheaper.',
        },
        {
          who: 'Karlo',
          hr: 'Dobro, nazvat ću vlasnika danas jer sutra nemam vremena.',
          en: 'All right, I will call the owner today because I have no time tomorrow.',
        },
        {
          who: 'Iva',
          hr: 'Super! Ti zovi vlasnika, a ja ću kupiti karte za trajekt.',
          en: 'Great! You call the owner, and I will buy the ferry tickets.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why does Karlo prefer the mountains, and where do they decide to go in the end?',
          options: [
            'The coast is too crowded in August; to the island of Vis',
            'The sea is too cold for him; to Split',
            'Hotels on the coast are too expensive; to the mountains',
            'He cannot swim; to a small lake',
          ],
          correct: 0,
          hint: 'His reason is about people, not about money or water. The place they choose has both hills and sea.',
          explanation:
            'Karlo says the coast is too crowded in August. They settle on Vis: it is quiet, he can hike in the hills and Iva can swim.',
        },
        {
          q: 'Iva says "Ti voliš hodati, a ja volim plivati" — with a, not with ali. Why?',
          options: [
            'Because ali cannot stand after a comma',
            'Because a is the more polite of the two words',
            'Because ali is used only when speaking about the past',
            'Because she only sets two facts side by side — neither one gets in the way of the other',
          ],
          correct: 3,
          hint: 'Does his hiking stop her from swimming?',
          explanation:
            'A puts two facts next to each other: you like this, I like that. Ali is for a real obstacle, as in her sentence before it: Znam, ali ja se želim kupati.',
        },
        {
          type: 'type',
          q: 'Now you. Someone thinks you live in Split. Correct them: Ne živim u Splitu ____ u Rijeci.',
          answer: 'nego',
          accept: ['već'],
          hint: 'After a denial, the replacement needs its own word — not the usual "but".',
          explanation:
            'Ne živim u Splitu nego u Rijeci. — after a negative, the thing that replaces it is introduced by nego (or već).',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one. The second gives the reason.',
          from: 'Ostajem kod kuće. Pada kiša.',
          answer: 'Ostajem kod kuće jer pada kiša.',
          accept: [
            'Ostajem kod kuće zato što pada kiša.',
            'Zato što pada kiša, ostajem kod kuće.',
            'Kod kuće ostajem jer pada kiša.',
            'Ostajem kod kuće budući da pada kiša.',
            'Budući da pada kiša, ostajem kod kuće.',
            'Ostajem doma jer pada kiša.',
          ],
          hint: 'The everyday word for "because" goes between the two halves.',
          explanation:
            'Ostajem kod kuće jer pada kiša. — jer joins the reason to the main clause; a reason that follows the main clause normally needs no comma.',
        },
        {
          type: 'transform',
          q: 'Join them with "although". Start with the obstacle.',
          from: 'Umorna sam. Idem na trening.',
          answer: 'Iako sam umorna, idem na trening.',
          accept: [
            'Idem na trening iako sam umorna.',
            'Premda sam umorna, idem na trening.',
            'Idem na trening premda sam umorna.',
            'Iako sam umorna, ipak idem na trening.',
          ],
          hint: 'The "although" word opens the half about being tired — and the short word sam moves right behind it.',
          explanation:
            'Iako sam umorna, idem na trening. — iako opens the obstacle, the clitic sam takes second place, and a comma closes the fronted clause.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'tf',
        q: '"Iako pada kiša, idemo u šetnju" means that the rain stops them from going.',
        answer: false,
        hint: 'Who wins in this sentence — the rain or the walk?',
        explanation: 'False. Iako means "although": it is raining, and they are going anyway.',
      },
      6,
      7,
      {
        type: 'order',
        q: 'Put the words in order: "We bought bread and cheese and then went to the beach."',
        words: ['Kupili', 'smo', 'kruh', 'i', 'sir', 'pa', 'smo', 'otišli', 'na', 'plažu.'],
        accept: ['Kupili smo sir i kruh pa smo otišli na plažu.'],
        explanation:
          'Kupili smo kruh i sir pa smo otišli na plažu. I joins two equal things; pa adds the next step — "and then".',
      },
      4,
      8,
      {
        type: 'sort',
        q: 'English says "but" or "and" — which word does the gap need?',
        groups: [
          'Two facts side by side: a',
          'A real obstacle: ali',
          'A correction after "not": nego',
        ],
        items: [
          { hr: 'Ja kuham, ___ brat pere suđe.', group: 0 },
          { hr: 'Htjela sam doći, ___ nisam imala vremena.', group: 1 },
          { hr: 'Ovo nije sok ___ vino.', group: 2 },
          { hr: 'Mama radi u školi, ___ tata u bolnici.', group: 0 },
          { hr: 'Želim kupiti taj auto, ___ nemam dovoljno novca.', group: 1 },
          { hr: 'Ne putujemo vlakom ___ autobusom.', group: 2 },
        ],
        explanation:
          'A sets two facts next to each other. Ali brings something that goes against the first half. Nego replaces what was just denied.',
      },
      {
        type: 'transform',
        q: 'Turn it around: start with the reason. Remember which "because" can open a sentence.',
        from: 'Ne idem van jer sam umoran.',
        answer: 'Zato što sam umoran, ne idem van.',
        accept: ['Budući da sam umoran, ne idem van.', 'Zato što sam umoran, van ne idem.'],
        hint: 'Jer normally joins the reason on after the main half; the two-word "because" is the one that opens a sentence. A comma closes the fronted half.',
        explanation:
          'Zato što sam umoran, ne idem van. — zato što can open a sentence; jer normally follows the main clause.',
      },
      11,
      {
        type: 'match',
        q: 'Match each beginning to the ending that makes sense.',
        pairs: [
          ['Ne idem na posao', 'jer sam bolestan.'],
          ['Iako je bolestan,', 'otišao je na posao.'],
          ['Ako budeš bolestan,', 'ostani kod kuće.'],
          ['Nije bolestan', 'nego samo umoran.'],
          ['Bio je bolestan', 'pa je ostao u krevetu.'],
        ],
        explanation:
          'Jer gives the reason, iako the obstacle that did not stop him, ako the condition, nego the correction after a negative, and pa the result.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Što', 'više', 'voliš:', 'more', 'ali', 'planine?'],
        wrong: 4,
        answer: 'ili',
        hint: 'A choice between two things is being offered.',
        explanation:
          'Što više voliš: more ili planine? — ili offers a choice. Ali would need something to contradict.',
      },
      2,
      3,
      {
        type: 'listen',
        audio: 'Htjela sam kupiti kruh, ali pekara je bila zatvorena.',
        q: 'Did she buy the bread?',
        options: [
          'Yes, at the bakery',
          'No — the bakery was closed',
          'No — she had no money with her',
          'Yes, but it was not fresh',
        ],
        correct: 1,
        explanation:
          'She wanted to buy bread, ali — but — the bakery was closed. Ali brings the obstacle.',
      },
      {
        type: 'dictate',
        audio: 'Nije crno nego bijelo.',
        answer: 'Nije crno nego bijelo.',
        hint: 'Four words: "It is not black but white."',
        explanation: 'Nije crno nego bijelo. — after a negative, nego brings in the correction.',
      },
    ],
  },

  // ── The instrumental: means and company ────────────────────────────────────
  instrumental: {
    text: {
      kind: 'dialogue',
      title: 'Kako ćemo do Hvara?',
      lines: [
        {
          who: 'Lana',
          hr: 'Tine, kako ćemo sutra do Hvara? Autom ili autobusom?',
          en: 'Tin, how are we getting to Hvar tomorrow? By car or by bus?',
        },
        {
          who: 'Tin',
          hr: 'Do Splita idemo autobusom, a onda trajektom. S nama idu i Maja i Jakov.',
          en: 'We take the bus to Split and then the ferry. Maja and Jakov are coming with us too.',
        },
        {
          who: 'Lana',
          hr: 'Super, s Majom nikad nije dosadno. Gdje se nalazimo?',
          en: 'Great, it is never boring with Maja. Where are we meeting?',
        },
        {
          who: 'Tin',
          hr: 'Pred kolodvorom u sedam. Čekat ću vas pod satom.',
          en: 'In front of the station at seven. I will wait for you under the clock.',
        },
        {
          who: 'Lana',
          hr: 'Dobro. Jesi li već kupio karte?',
          en: 'All right. Have you bought the tickets yet?',
        },
        {
          who: 'Tin',
          hr: 'Jesam, platio sam ih karticom preko interneta.',
          en: 'I have — I paid for them by card online.',
        },
        {
          who: 'Lana',
          hr: 'Odlično. Ja ću ponijeti sendviče sa sirom i šunkom.',
          en: 'Excellent. I will bring sandwiches with cheese and ham.',
        },
        {
          who: 'Tin',
          hr: 'A ja kavu s mlijekom u termosici. Bez kave ne mogu razgovarati s ljudima!',
          en: 'And I will bring coffee with milk in a thermos. Without coffee I can’t talk to people!',
        },
        {
          who: 'Lana',
          hr: 'Znam! Vidimo se sutra pred kolodvorom.',
          en: 'I know! See you tomorrow in front of the station.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how will they travel, and where exactly will Tin wait?',
          options: [
            'By car to Split, then by ferry; in front of the café',
            'By train to Split, then by bus; at the ferry port',
            'By bus to Split, then by ferry; in front of the station, under the clock',
            'By ferry all the way; under the bridge',
          ],
          correct: 2,
          hint: 'Two means of transport, one on land and one on water. The meeting place has something that shows the time.',
          explanation:
            'Do Splita idemo autobusom, a onda trajektom. Tin will wait pred kolodvorom, pod satom — in front of the station, under the clock.',
        },
        {
          q: 'Tin says "idemo autobusom" with no preposition, but "kavu s mlijekom" and "s Majom" with s. Why?',
          options: [
            'A vehicle is the means of travel, so the ending alone is enough; s is for company and for things that go together',
            'Because autobus is masculine and the other two nouns are not',
            'Because s is dropped before a vowel',
            'Because s can be used only with people',
          ],
          correct: 0,
          hint: 'Ask of each one: is it HOW they do it, or WHO or WHAT comes along?',
          explanation:
            'The bare instrumental names the tool or means: autobusom, trajektom, karticom. With s it means "together with": s Majom, s mlijekom.',
        },
        {
          type: 'type',
          q: 'Now you. You are slicing bread, and the knife is your tool: Režem kruh ____. (nož)',
          answer: 'nožem',
          hint: 'A tool takes no preposition. The noun ends in a soft consonant, so the ending is not -om.',
          explanation:
            'Režem kruh nožem. — the bare instrumental for a tool; after the soft ž the masculine ending is -em.',
        },
        {
          type: 'type',
          q: 'You are going to the movies, and your sister is coming along: Idem u kino ____ sestrom.',
          answer: 'sa',
          hint: 'Company needs the preposition — and look at the first sound of the next word.',
          explanation:
            'Idem u kino sa sestrom. — the preposition takes its longer form before s, š, z and ž.',
        },
        {
          type: 'transform',
          q: 'Jakov is not coming alone. Add his company: his brother (brat).',
          from: 'Jakov dolazi na izlet.',
          answer: 'Jakov dolazi na izlet s bratom.',
          accept: [
            'Jakov dolazi s bratom na izlet.',
            'Jakov s bratom dolazi na izlet.',
            'S bratom Jakov dolazi na izlet.',
          ],
          hint: 'Company: the preposition plus the instrumental. A masculine noun ending in a hard consonant takes -om.',
          explanation:
            'Jakov dolazi na izlet s bratom. — s + instrumental for the person who comes along.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: 'In "Pišem s prijateljem" the friend is my company; in "Pišem olovkom" the pencil is my tool.',
        answer: true,
        hint: 'Look for the small word s.',
        explanation:
          'True. With s the instrumental means "together with"; without a preposition it names the tool or means.',
      },
      5,
      {
        type: 'sort',
        q: 'A tool or means — or company? Sort the sentences.',
        groups: ['A tool or means (no preposition)', 'Company (with s / sa)'],
        items: [
          { hr: 'Jedem juhu žlicom.', group: 0 },
          { hr: 'Večeram s djedom.', group: 1 },
          { hr: 'Na posao idem tramvajem.', group: 0 },
          { hr: 'Šetam sa psom.', group: 1 },
          { hr: 'Platila je gotovinom.', group: 0 },
          { hr: 'Razgovaram sa susjedom.', group: 1 },
        ],
        explanation:
          'A spoon, a tram and cash are how you do it: bare instrumental. A grandfather, a dog and a neighbor come along or take part: s / sa + instrumental.',
      },
      7,
      {
        type: 'match',
        q: 'Where is it? Match each sentence to its meaning.',
        pairs: [
          ['Pas je pod stolom.', 'The dog is under the table.'],
          ['Pas je pred kućom.', 'The dog is in front of the house.'],
          ['Pas je za kućom.', 'The dog is behind the house.'],
          ['Lampa je nad stolom.', 'The lamp is above the table.'],
          ['Pas je među djecom.', 'The dog is among the children.'],
        ],
        explanation:
          'Pod, pred, za, nad and među say where something is, and all five take the instrumental.',
      },
      8,
      4,
      {
        type: 'order',
        q: 'Put the words in order: "I am going to the concert with Ana and Marko."',
        words: ['Idem', 'na', 'koncert', 's', 'Anom', 'i', 'Markom.'],
        accept: [
          'Idem s Anom i Markom na koncert.',
          'S Anom i Markom idem na koncert.',
          'Na koncert idem s Anom i Markom.',
          'Idem na koncert s Markom i Anom.',
          'Idem s Markom i Anom na koncert.',
          'S Markom i Anom idem na koncert.',
          'Na koncert idem s Markom i Anom.',
        ],
        explanation:
          'Idem na koncert s Anom i Markom. One s covers both names, and both take the instrumental -om.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Tomorrow I am traveling to Zadar with my brother.")',
        words: ['Sutra', 'putujem', 'u', 'Zadar', 's', 'brat.'],
        wrong: 5,
        answer: 'bratom',
        hint: 'The preposition s governs a case — the noun cannot stay in its dictionary form.',
        explanation: 'Sutra putujem u Zadar s bratom. — s takes the instrumental: brat → bratom.',
      },
      6,
      {
        type: 'transform',
        q: 'Ivan no longer walks to work — he bought a bicycle (bicikl). Replace "pješice" with his new means of transport.',
        from: 'Ivan ide na posao pješice.',
        answer: 'Ivan ide na posao biciklom.',
        accept: ['Ivan na posao ide biciklom.', 'Ivan biciklom ide na posao.'],
        hint: 'A means of transport takes the bare instrumental — no preposition.',
        explanation:
          'Ivan ide na posao biciklom. — the means of travel stands in the instrumental alone.',
      },
      12,
      {
        type: 'listen',
        audio: 'Pekara je za uglom, pred školom.',
        q: 'Where is the bakery?',
        options: [
          'Inside the school',
          'Around the corner, in front of the school',
          'Under the school',
          'Far from the corner, behind the school',
        ],
        correct: 1,
        explanation:
          'za uglom — around (literally behind) the corner; pred školom — in front of the school.',
      },
      {
        type: 'dictate',
        audio: 'Živim sa sestrom i bratom.',
        answer: 'Živim sa sestrom i bratom.',
        hint: 'Five words: "I live with my sister and brother."',
        explanation:
          'Živim sa sestrom i bratom. — sa before the s of sestrom; both nouns end in -om.',
      },
    ],
  },

  // ── Adjectives in the instrumental ─────────────────────────────────────────
  'instrumental-adjectives': {
    text: {
      kind: 'dialogue',
      title: 'S kim ideš na more?',
      lines: [
        {
          who: 'Bruno',
          hr: 'Saro, s kim ideš na more ovo ljeto? Opet s onom svojom glasnom ekipom?',
          en: 'Sara, who are you going to the coast with this summer? With that loud crowd of yours again?',
        },
        {
          who: 'Sara',
          hr: 'Ne, ove godine idem sa svojom starijom sestrom i s njezinim malim sinom.',
          en: 'No, this year I am going with my older sister and her little son.',
        },
        {
          who: 'Bruno',
          hr: 'Lijepo! Putujete li vašim starim autom?',
          en: 'Nice! Are you traveling in your old car?',
        },
        {
          who: 'Sara',
          hr: 'Ne, noćnim vlakom do Splita, a onda brzim brodom do Brača.',
          en: 'No, by night train to Split, and then by fast boat to Brač.',
        },
        { who: 'Bruno', hr: 'A gdje ćete stanovati?', en: 'And where will you be staying?' },
        {
          who: 'Sara',
          hr: 'U kući nad malom plažom, zajedno s našom tetom i njezinim psima.',
          en: 'In a house above a small beach, together with our aunt and her dogs.',
        },
        {
          who: 'Bruno',
          hr: 'Sa psima? Ja sam jednom bio na moru s jednim velikim psom i nikad više!',
          en: 'With dogs? I once went to the coast with one big dog, and never again!',
        },
        {
          who: 'Sara',
          hr: 'Ne brini se, ovo su mali psi. A ti, s kim ideš?',
          en: 'Don’t worry, these are small dogs. And you — who are you going with?',
        },
        {
          who: 'Bruno',
          hr: 'Ja ostajem u gradu sa svojim dragim računalom i hladnim sokom.',
          en: 'I am staying in town with my dear computer and a cold juice.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is Sara traveling with, and how do they get to Brač?',
          options: [
            'With her loud friends; by car and ferry',
            'With her aunt; by bus and fast boat',
            'With Bruno; by night train',
            'With her older sister and her sister’s little son; by night train and fast boat',
          ],
          correct: 3,
          hint: 'Two relatives travel with her — the aunt is already there. One vehicle runs at night, the other is quick.',
          explanation:
            'Sara is going sa svojom starijom sestrom i s njezinim malim sinom — noćnim vlakom to Split and brzim brodom to Brač. The aunt and her dogs are waiting in the house.',
        },
        {
          q: 'Sara says "sa svojom starijom sestrom" but "s njezinim malim sinom". Why does the ending change from -om to -im?',
          options: [
            'Because sin is a child and sestra is an adult',
            'Because the words before a feminine noun take -om, and the words before a masculine noun take -im',
            'Because -im is used after s and -om after sa',
            'Because -im is the plural ending and she has several nephews',
          ],
          correct: 1,
          hint: 'Look at the gender of the two nouns.',
          explanation:
            'In the instrumental, adjectives and possessives take -om before a feminine noun (svojom starijom sestrom) and -im before a masculine or neuter one (njezinim malim sinom).',
        },
        {
          type: 'type',
          q: 'Now you. Your pencil is red (crvena olovka). Say what you write with: Pišem ____ olovkom.',
          answer: 'crvenom',
          hint: 'Olovka is feminine: here the adjective takes the same ending as its noun.',
          explanation:
            'Pišem crvenom olovkom. — feminine instrumental: the adjective and the noun rhyme. A tool needs no preposition.',
        },
        {
          type: 'type',
          q: 'Bruno went to the coast with ONE big dog. Sara’s aunt walks several: Teta šeta s ____ psima. (velik)',
          answer: 'velikim',
          hint: 'In the plural the instrumental has one adjective ending for every gender.',
          explanation:
            'Teta šeta s velikim psima. — the plural ending is -im, the same as the masculine singular; only the noun (psom / psima) shows the difference.',
        },
        {
          type: 'transform',
          q: 'Marko has a new girlfriend. Add that he is going with her — his own new girlfriend (nova djevojka).',
          from: 'Marko ide na more.',
          answer: 'Marko ide na more sa svojom novom djevojkom.',
          accept: [
            'Marko ide sa svojom novom djevojkom na more.',
            'Marko sa svojom novom djevojkom ide na more.',
            'Marko ide na more s novom djevojkom.',
            'Marko ide s novom djevojkom na more.',
          ],
          hint: 'Three things: the possessive that points back at Marko, the right form of "with" in front of it, and the feminine ending on both describing words.',
          explanation:
            'Marko ide na more sa svojom novom djevojkom. — svoj points back at the subject; sa stands before the s of svojom; both words take the feminine -om.',
        },
      ],
    },
    mix: [
      9,
      {
        type: 'tf',
        q: 'In "s mojim prijateljem" and "s mojim prijateljima" the word mojim is the same — only the noun shows whether there is one friend or several.',
        answer: true,
        hint: 'Compare the plural ending of adjectives with the masculine singular.',
        explanation:
          'True. The masculine singular and every plural share -im: s mojim prijateljem (one), s mojim prijateljima (several).',
      },
      10,
      {
        type: 'match',
        q: 'Match each beginning to its ending. Both the meaning and the endings must fit.',
        pairs: [
          ['Pišem crvenom', 'olovkom.'],
          ['Putujem noćnim', 'vlakom.'],
          ['Pijem čaj s toplim', 'mlijekom.'],
          ['Živim sa starijom', 'sestrom.'],
          ['Šetam s malim', 'psima.'],
        ],
        explanation:
          'An adjective in -om needs a feminine noun (olovkom, sestrom); one in -im needs a masculine or neuter noun, or a plural (vlakom, mlijekom, psima).',
      },
      12,
      {
        type: 'sort',
        q: 'One or several? Read the whole phrase.',
        groups: ['One person or thing', 'Several'],
        items: [
          { hr: 's vašim dragim gostom', group: 0 },
          { hr: 's vašim dragim gostima', group: 1 },
          { hr: 'pred tom starom crkvom', group: 0 },
          { hr: 'pred tim starim crkvama', group: 1 },
          { hr: 's njegovim malim psom', group: 0 },
          { hr: 's njegovim malim psima', group: 1 },
        ],
        explanation:
          'The ending -im alone cannot tell you. The noun does: -om or -em is one, -ima or -ama is several. In the plural even a feminine noun has -im in front of it: tim starim crkvama.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "I am talking with that young woman."',
        words: ['Razgovaram', 's', 'tom', 'mladom', 'ženom.'],
        accept: ['S tom mladom ženom razgovaram.'],
        explanation:
          'Razgovaram s tom mladom ženom. All three words after s take the feminine instrumental -om.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("The children are playing in front of our house.")',
        words: ['Djeca', 'se', 'igraju', 'pred', 'naša', 'kućom.'],
        wrong: 4,
        answer: 'našom',
        hint: 'Pred governs every word of the phrase, not only the noun.',
        explanation:
          'Djeca se igraju pred našom kućom. — the possessive takes the feminine instrumental -om, like its noun.',
      },
      11,
      1,
      {
        type: 'transform',
        q: 'Now there are several new colleagues, all women. Put the phrase in the plural.',
        from: 'Radim s novom kolegicom.',
        answer: 'Radim s novim kolegicama.',
        hint: 'In the plural the adjective no longer rhymes with a feminine noun: one ending serves every gender.',
        explanation:
          'Radim s novim kolegicama. — plural instrumental: -im on the adjective for every gender, -ama on the noun.',
      },
      7,
      {
        type: 'listen',
        audio: 'Marko ide na more s njegovom djevojkom.',
        q: 'Whose girlfriend is going with Marko?',
        options: ['His own', 'Another man’s', 'His sister’s', 'Nobody’s — he is going alone'],
        correct: 1,
        explanation:
          'Njegovom points at some other man. Marko’s own girlfriend would be sa svojom djevojkom.',
      },
      {
        type: 'dictate',
        audio: 'Pijem kavu s toplim mlijekom.',
        answer: 'Pijem kavu s toplim mlijekom.',
        hint: 'Five words: "I drink coffee with warm milk."',
        explanation:
          'Pijem kavu s toplim mlijekom. — mlijeko is neuter, so the adjective takes -im.',
      },
    ],
  },

  // ── Verbs that take the instrumental ───────────────────────────────────────
  'verbs-with-instrumental': {
    text: {
      kind: 'dialogue',
      title: 'Čime se baviš?',
      lines: [
        {
          who: 'Nika',
          hr: 'Ti si Leon, Anin brat? Drago mi je, ja sam Nika. Čime se baviš?',
          en: 'You are Leon, Ana’s brother? Nice to meet you, I am Nika. What do you do?',
        },
        {
          who: 'Leon',
          hr: 'Bavim se turizmom: upravljam malim hotelom na Krku.',
          en: 'I work in tourism: I run a small hotel on Krk.',
        },
        {
          who: 'Nika',
          hr: 'Stvarno? Ja se bavim fotografijom, a u slobodno vrijeme i jedrenjem.',
          en: 'Really? I do photography, and in my free time sailing as well.',
        },
        {
          who: 'Leon',
          hr: 'Jedrenjem! Onda se sigurno dobro služiš kartama i kompasom.',
          en: 'Sailing! Then you must be good with maps and a compass.',
        },
        {
          who: 'Nika',
          hr: 'Pomalo. A ti, služiš li se stranim jezicima u hotelu?',
          en: 'A little. And you — do you use foreign languages at the hotel?',
        },
        {
          who: 'Leon',
          hr: 'Svaki dan: engleskim, njemačkim i talijanskim. Mama se jako ponosi mojim njemačkim.',
          en: 'Every day: English, German and Italian. Mom is very proud of my German.',
        },
        {
          who: 'Nika',
          hr: 'A ti se hvališ hotelom, vidim!',
          en: 'And you are boasting about the hotel, I see!',
        },
        {
          who: 'Leon',
          hr: 'Malo. Gosti su oduševljeni doručkom i pogledom na more. Dođi i vidi!',
          en: 'A little. The guests are thrilled with the breakfast and the sea view. Come and see!',
        },
        {
          who: 'Nika',
          hr: 'Može, ali samo ako častiš kavom.',
          en: 'Sure, but only if the coffee is on you.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what do Leon and Nika do?',
          options: [
            'Leon is a photographer; Nika runs a hotel',
            'Leon runs a small hotel on Krk; Nika does photography and sails',
            'Leon teaches German; Nika works in tourism',
            'Leon sails; Nika runs a café',
          ],
          correct: 1,
          hint: 'One of them welcomes guests on an island; the other works with a camera and spends free time on the water.',
          explanation:
            'Leon: Bavim se turizmom, upravljam malim hotelom na Krku. Nika: Bavim se fotografijom, a u slobodno vrijeme i jedrenjem.',
        },
        {
          q: 'Leon says "Bavim se turizmom" and "upravljam malim hotelom" — no preposition, and not the accusative. Why?',
          options: [
            'Because turizam and hotel are places',
            'Because the preposition s was dropped in fast speech',
            'Because these verbs themselves demand the instrumental for the thing you do or run',
            'Because the sentences are in the present tense',
          ],
          correct: 2,
          hint: 'Think of what decides the case here: a preposition, or the verb?',
          explanation:
            'Baviti se and upravljati belong to a group of verbs that put their object straight into the instrumental — no preposition at all.',
        },
        {
          type: 'type',
          q: 'Now you. Your grandmother grows roses, and it shows. Say what she is proud of — her garden (vrt): Baka se ponosi svojim ____.',
          answer: 'vrtom',
          hint: 'Ponositi se needs the same case that svojim already shows.',
          explanation:
            'Baka se ponosi svojim vrtom. — ponositi se takes the instrumental: vrt → vrtom.',
        },
        {
          type: 'type',
          q: 'Ask Leon’s guests — several people — what they do for a living: Čime se ____?',
          answer: 'bavite',
          hint: 'The verb from the title of the dialogue, in the form for vi.',
          explanation: 'Čime se bavite? — the vi form: to several people, or politely to one.',
        },
        {
          type: 'transform',
          q: 'Same meaning, different verb: say it with služiti se. Mind the case.',
          from: 'Svaki dan koristim računalo.',
          answer: 'Svaki dan se služim računalom.',
          accept: [
            'Služim se računalom svaki dan.',
            'Svaki dan služim se računalom.',
            'Računalom se služim svaki dan.',
            'Svaki se dan služim računalom.',
            'Ja se svaki dan služim računalom.',
          ],
          hint: 'Koristiti takes the accusative; služiti se takes the instrumental — and se wants second place.',
          explanation:
            'Svaki dan se služim računalom. — the two verbs mean the same, but služiti se puts the thing in the instrumental.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Koristim mobitel" and "Služim se mobitelom" mean the same; only the verb and the case are different.',
        answer: true,
        hint: 'Compare the two endings of the noun — then ask whether the message changes.',
        explanation:
          'True. Koristiti takes the accusative (mobitel); služiti se takes the instrumental (mobitelom).',
      },
      10,
      {
        type: 'match',
        q: 'Match each verb to its meaning.',
        pairs: [
          ['baviti se', 'to do as a job or hobby'],
          ['služiti se', 'to use'],
          ['ponositi se', 'to be proud of'],
          ['hvaliti se', 'to boast about'],
          ['častiti', 'to treat someone to'],
        ],
        explanation:
          'All five put the thing into the instrumental: Bavim se sportom, služim se računalom, ponosim se sinom, hvali se autom, šef časti kavom.',
      },
      9,
      {
        type: 'sort',
        q: 'What happens to the thing after each word?',
        groups: [
          'It stays in the accusative (računalo)',
          'It goes into the instrumental (računalom)',
        ],
        items: [
          { hr: 'koristiti', group: 0 },
          { hr: 'služiti se', group: 1 },
          { hr: 'voljeti', group: 0 },
          { hr: 'ponositi se', group: 1 },
          { hr: 'kupiti', group: 0 },
          { hr: 'zadovoljan', group: 1 },
          { hr: 'upravljati', group: 1 },
          { hr: 'trebati', group: 0 },
        ],
        explanation:
          'Most verbs take the accusative. Služiti se, ponositi se and upravljati — and the adjective zadovoljan — are the ones to learn together with the instrumental.',
      },
      14,
      {
        type: 'order',
        q: 'Put the words in order: "My brother is always boasting about his new phone."',
        words: ['Brat', 'se', 'stalno', 'hvali', 'novim', 'mobitelom.'],
        accept: [
          'Brat se stalno novim mobitelom hvali.',
          'Brat se novim mobitelom stalno hvali.',
          'Brat se hvali novim mobitelom stalno.',
          'Stalno se brat hvali novim mobitelom.',
          'Novim mobitelom brat se stalno hvali.',
          'Novim mobitelom se brat stalno hvali.',
          'Novim se mobitelom brat stalno hvali.',
        ],
        explanation:
          'Brat se stalno hvali novim mobitelom. The clitic se takes second place, and the thing he boasts about is in the instrumental.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'se', 'bavi', 'glazbu.'],
        wrong: 4,
        answer: 'glazbom',
        hint: 'Baviti se never takes the accusative.',
        explanation: 'Moja sestra se bavi glazbom. — baviti se + instrumental: glazba → glazbom.',
      },
      12,
      13,
      {
        type: 'transform',
        q: 'Ana is speaking. Say the same with the adjective zadovoljan instead of sviđati se.',
        from: 'Sviđa mi se novi stan.',
        answer: 'Zadovoljna sam novim stanom.',
        accept: [
          'Ja sam zadovoljna novim stanom.',
          'Zadovoljna sam svojim novim stanom.',
          'Novim stanom sam zadovoljna.',
          'Novim sam stanom zadovoljna.',
          'Ja sam zadovoljna svojim novim stanom.',
        ],
        hint: 'Two things to watch: the adjective agrees with Ana, and the apartment changes case.',
        explanation:
          'Zadovoljna sam novim stanom. — zadovoljan agrees with the person who feels it, and the thing goes into the instrumental.',
      },
      3,
      {
        type: 'listen',
        audio: 'Moj otac se cijeli život bavi poljoprivredom.',
        q: 'What are we told about the father?',
        options: [
          'He has farmed all his life',
          'He has lived on a farm since last year',
          'He is proud of his farm',
          'He wants to sell his farm',
        ],
        correct: 0,
        explanation:
          'Cijeli život se bavi poljoprivredom — farming has been his work all his life.',
      },
      {
        type: 'dictate',
        audio: 'Ne čujem te dobro.',
        answer: 'Ne čujem te dobro.',
        hint: 'Four words: "I can’t hear you well."',
        explanation: 'Ne čujem te dobro. — the present of čuti has a j: čujem.',
      },
    ],
  },

  // ══ UNIT 4 ═════════════════════════════════════════════════════════════════

  // ── The job interview ──────────────────────────────────────────────────────
  'job-interview': {
    text: {
      kind: 'dialogue',
      title: 'Razgovor za posao',
      lines: [
        {
          who: 'G. Perić',
          hr: 'Dobar dan, gospođo Marić. Sjednite, molim Vas. Recite nam nešto o sebi.',
          en: 'Hello, Ms. Marić. Please have a seat. Tell us something about yourself.',
        },
        {
          who: 'Lucija',
          hr: 'Dobar dan. Diplomirala sam na Ekonomskom fakultetu u Rijeci, a trenutno radim u maloj turističkoj agenciji.',
          en: 'Hello. I graduated from the Faculty of Economics in Rijeka, and I currently work at a small travel agency.',
        },
        {
          who: 'G. Perić',
          hr: 'Koliko imate radnog iskustva?',
          en: 'How much work experience do you have?',
        },
        {
          who: 'Lucija',
          hr: 'Imam četiri godine iskustva. Zadužena sam za odnose s klijentima.',
          en: 'I have four years of experience. I am responsible for client relations.',
        },
        {
          who: 'G. Perić',
          hr: 'Zašto se javljate na ovo mjesto?',
          en: 'Why are you applying for this position?',
        },
        {
          who: 'Lucija',
          hr: 'Javljam se jer želim raditi u većem timu i jer me zanima hotelski posao.',
          en: 'I am applying because I want to work in a bigger team and because hotel work interests me.',
        },
        { who: 'G. Perić', hr: 'Koje su Vaše prednosti?', en: 'What are your strengths?' },
        {
          who: 'Lucija',
          hr: 'Tečno govorim engleski i talijanski, a služim se i njemačkim. Mislim da sam strpljiva i dobro radim s ljudima.',
          en: 'I speak English and Italian fluently, and I can get by in German too. I think I am patient and I work well with people.',
        },
        {
          who: 'G. Perić',
          hr: 'Gdje se vidite za pet godina?',
          en: 'Where do you see yourself in five years?',
        },
        {
          who: 'Lucija',
          hr: 'Za pet godina vidim se na mjestu voditeljice — možda baš u Vašem hotelu.',
          en: 'In five years I see myself in a manager’s position — maybe right here in your hotel.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where does Lucija work now, and how much experience does she have?',
          options: [
            'She is still a student of economics; no experience yet',
            'She works in a hotel; five years',
            'She works at a small travel agency; four years',
            'She runs her own travel agency; three years',
          ],
          correct: 2,
          hint: 'Her current job is about trips, not rooms. The number of years is one less than in the last question she is asked.',
          explanation:
            'Trenutno radim u maloj turističkoj agenciji — and she has been working for four years. The hotel is where she WANTS to work.',
        },
        {
          q: 'In her answer to "Zašto se javljate na ovo mjesto?" Lucija uses the word jer twice. What does that do for her answer?',
          options: [
            'It makes the answer more polite',
            'It shows that she is unsure',
            'It turns the answer into a question',
            'It gives two reasons, so the answer sounds thought through',
          ],
          correct: 3,
          hint: 'Jer means "because". Count what follows it each time.',
          explanation:
            'Each jer brings a reason: she wants a bigger team, and hotel work interests her. An interview answer without a reason sounds thin.',
        },
        {
          type: 'transform',
          q: 'Now a man, Petar, gives the same answer about himself. Change what has to change.',
          from: 'Diplomirala sam u Rijeci i zadužena sam za klijente.',
          answer: 'Diplomirao sam u Rijeci i zadužen sam za klijente.',
          hint: 'Two words carry the speaker’s gender.',
          explanation:
            'Diplomirao sam… zadužen sam… — the participle and the adjective both agree with the person speaking.',
        },
        {
          type: 'type',
          q: 'Now you. You have six years of experience: Imam šest godina ____.',
          answer: 'iskustva',
          hint: 'The thing that is counted goes into the genitive. The noun is iskustvo.',
          explanation: 'Imam šest godina iskustva. — "six years OF experience": the genitive.',
        },
        {
          type: 'type',
          q: 'Say that you speak German really well, without stopping to search for words: ____ govorim njemački.',
          answer: 'Tečno',
          hint: 'The adverb Lucija used about her English and Italian; it means "fluently".',
          explanation: 'Tečno govorim njemački. — tečno is "fluently".',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'match',
        q: 'An interview. Match each question to the answer that fits it.',
        pairs: [
          ['Recite nam nešto o sebi.', 'Zovem se Ivan Kralj i dolazim iz Osijeka.'],
          ['Koje su Vaše prednosti?', 'Strpljiv sam i dobro radim u timu.'],
          ['Kada možete početi raditi?', 'Od prvog lipnja.'],
          ['Imate li pitanja za nas?', 'Da, zanima me radno vrijeme.'],
          ['Kakva su Vaša očekivanja?', 'Nadam se zanimljivom poslu i dobroj plaći.'],
        ],
        explanation:
          'Five standard interview questions: about yourself, your strengths (prednosti), your start date, your own questions and your expectations (očekivanja).',
      },
      9,
      {
        type: 'tf',
        q: 'A woman can write "Radio sam kao prevoditelj" in her application.',
        answer: false,
        hint: 'Who is the participle talking about?',
        explanation:
          'False. The participle and the job title show the writer’s gender: a woman writes Radila sam kao prevoditeljica.',
      },
      6,
      {
        type: 'sort',
        q: 'Is the speaker a man or a woman — or can’t you tell?',
        groups: ['A man', 'A woman', 'It could be either'],
        items: [
          { hr: 'Diplomirao sam u Splitu.', group: 0 },
          { hr: 'Radila sam kao konobarica.', group: 1 },
          { hr: 'Tečno govorim engleski.', group: 2 },
          { hr: 'Radio sam u hotelu.', group: 0 },
          { hr: 'Trenutno radim u banci.', group: 2 },
          { hr: 'Završila sam tečaj njemačkog.', group: 1 },
        ],
        explanation:
          'The present tense does not show gender (govorim, radim). The past does: -o for a man, -la for a woman.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "I am applying because I want to work with people."',
        words: ['Javljam', 'se', 'jer', 'želim', 'raditi', 's', 'ljudima.'],
        accept: [
          'Javljam se jer s ljudima želim raditi.',
          'Javljam se jer želim s ljudima raditi.',
        ],
        explanation:
          'Javljam se jer želim raditi s ljudima. Jer brings the reason, and no comma is needed before it.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Imam', 'pet', 'godina', 'iskustvo', 'u', 'prodaji.'],
        wrong: 3,
        answer: 'iskustva',
        hint: 'Five years OF something: the thing counted cannot stay in its dictionary form.',
        explanation:
          'Imam pet godina iskustva u prodaji. — the thing counted goes into the genitive.',
      },
      7,
      11,
      {
        type: 'transform',
        q: 'A woman is speaking. Make the blunt wish sound right for an interview: use the conditional.',
        from: 'Želim raditi s klijentima.',
        answer: 'Željela bih raditi s klijentima.',
        accept: [
          'Ja bih željela raditi s klijentima.',
          'Htjela bih raditi s klijentima.',
          'Voljela bih raditi s klijentima.',
          'Rado bih radila s klijentima.',
        ],
        hint: 'The same verb in the conditional: the participle, agreeing with her, plus bih.',
        explanation:
          'Željela bih raditi s klijentima. — the conditional turns "I want" into the polite "I would like".',
      },
      2,
      {
        type: 'listen',
        audio: 'Trenutno sam zadužena za odnose s klijentima.',
        q: 'What do we learn about the speaker?',
        options: [
          'A man who used to work with clients',
          'A woman who is now responsible for client relations',
          'A woman who is looking for new clients',
          'A man who will soon manage clients',
        ],
        correct: 1,
        explanation:
          'Zadužena shows a woman; trenutno means "currently"; zadužen za + accusative is "responsible for".',
      },
      {
        type: 'dictate',
        audio: 'Imam tri godine iskustva.',
        answer: 'Imam tri godine iskustva.',
        hint: 'Four words: "I have three years of experience."',
        explanation:
          'Imam tri godine iskustva. — after 2, 3 and 4 it is godine; from 5 on, godina.',
      },
    ],
  },

  // ── Writing a job application ──────────────────────────────────────────────
  'job-application': {
    text: {
      kind: 'text',
      title: 'Prijava na natječaj',
      lines: [
        {
          hr: 'Predmet: Prijava na natječaj za radno mjesto konobara',
          en: 'Subject: Application for the position of waiter',
        },
        { hr: 'Poštovani gospodine Juriću,', en: 'Dear Mr. Jurić,' },
        {
          hr: 'javljam se na Vaš natječaj za radno mjesto konobara u restoranu „Maslina” u Zadru.',
          en: 'I am applying for the position of waiter that you have advertised at the restaurant Maslina in Zadar.',
        },
        {
          hr: 'Završio sam srednju ugostiteljsku školu u Šibeniku i radio sam tri godine kao konobar u hotelu.',
          en: 'I finished hospitality high school in Šibenik and worked for three years as a waiter in a hotel.',
        },
        {
          hr: 'Tečno govorim engleski, a služim se i njemačkim i talijanskim jezikom.',
          en: 'I speak English fluently, and I can also use German and Italian.',
        },
        {
          hr: 'Želio bih raditi u Vašem restoranu jer volim rad s gostima i dobru domaću kuhinju.',
          en: 'I would like to work in your restaurant because I love working with guests and good home-style cooking.',
        },
        {
          hr: 'Mogao bih početi raditi od 1. svibnja.',
          en: 'I could start work on May 1.',
        },
        {
          hr: 'U prilogu šaljem životopis i presliku svjedodžbe. Za sve dodatne informacije stojim Vam na raspolaganju.',
          en: 'Attached I am sending my résumé and a copy of my diploma. I am at your disposal for any further information.',
        },
        {
          hr: 'Nadam se Vašem pozitivnom odgovoru.',
          en: 'I hope for a positive reply.',
        },
        { hr: 'S poštovanjem, Dino Vuković', en: 'Respectfully, Dino Vuković' },
      ],
      questions: [
        {
          q: 'Without looking back at the letter: which job is Dino applying for, and what experience does he have?',
          options: [
            'Cook; two years in a restaurant',
            'Waiter; three years as a waiter in a hotel',
            'Hotel manager; three years in Šibenik',
            'Waiter; no experience, only school',
          ],
          correct: 1,
          hint: 'The job he wants is the job he has already done — only the kind of place is different.',
          explanation:
            'He applies za radno mjesto konobara, and he writes: radio sam tri godine kao konobar u hotelu.',
        },
        {
          q: 'Dino writes "Želio bih raditi" and "Mogao bih početi", not "Želim" and "Mogu". Why?',
          options: [
            'Because he is not sure he wants the job',
            'Because he is writing about the past',
            'Because the conditional makes a wish or an offer sound polite in a formal letter',
            'Because every verb in a letter needs bih',
          ],
          correct: 2,
          hint: 'Compare "I want" with "I would like" in an English letter.',
          explanation:
            'The conditional softens: Želio bih is "I would like", Mogao bih is "I could". In an application that is the polite register.',
        },
        {
          type: 'transform',
          q: 'Now Ivana writes the same sentence about herself — and she was a waitress.',
          from: 'Radio sam tri godine kao konobar.',
          answer: 'Radila sam tri godine kao konobarica.',
          accept: [
            'Tri godine sam radila kao konobarica.',
            'Radila sam kao konobarica tri godine.',
          ],
          hint: 'Two words show who is writing: the participle and the job title.',
          explanation:
            'Radila sam tri godine kao konobarica. — both the participle and the job title take the feminine form.',
        },
        {
          type: 'type',
          q: 'Now you. Open a letter to Mr. Babić: Poštovani ____ Babiću,',
          answer: 'gospodine',
          hint: 'You are addressing him, so gospodin goes into the vocative — like his surname.',
          explanation:
            'Poštovani gospodine Babiću, — both the title and a man’s surname stand in the vocative.',
        },
        {
          type: 'type',
          q: 'You are applying for a job as a driver (vozač): Javljam se na Vaš natječaj za radno mjesto ____.',
          answer: 'vozača',
          hint: 'The job title after radno mjesto goes into the genitive — "the position OF a driver".',
          explanation: 'radno mjesto vozača — the job title is in the genitive.',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'tf',
        q: '"Lijep pozdrav, Marko" is a good way to end a job application.',
        answer: false,
        hint: 'Think about who signs off like that: colleagues who know each other, or a stranger asking for a job?',
        explanation:
          'False. Lijep pozdrav is friendly and informal — fine for colleagues and everyday e-mail. An application ends with the formal sign-off built on the word for "respect".',
      },
      1,
      11,
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['životopis', 'résumé'],
          ['natječaj', 'an advertised job opening'],
          ['svjedodžba', 'a school diploma or certificate'],
          ['odbijenica', 'a letter of rejection'],
          ['otkaz', 'dismissal, or notice'],
        ],
        explanation:
          'The paperwork of a job search: you answer a natječaj with a životopis and a svjedodžba — and hope not to get an odbijenica.',
      },
      12,
      {
        type: 'sort',
        q: 'Does the line belong in a job application, or in a message to a friend?',
        groups: ['Job application', 'Message to a friend'],
        items: [
          { hr: 'Poštovani,', group: 0 },
          { hr: 'Draga Ana,', group: 1 },
          { hr: 'Javljam se na Vaš natječaj.', group: 0 },
          { hr: 'Javi mi se kad stigneš!', group: 1 },
          { hr: 'Stojim Vam na raspolaganju.', group: 0 },
          { hr: 'Vidimo se u subotu!', group: 1 },
          { hr: 'Zahvaljujem na pažnji.', group: 0 },
          { hr: 'Puno pozdrava mami i tati!', group: 1 },
        ],
        explanation:
          'An application is formal: Poštovani, the capital V of Vaš and Vam, fixed phrases. Dragi and draga, ti and exclamation marks belong to personal messages.',
      },
      13,
      {
        type: 'order',
        q: 'Put the words in order — a woman writes: "I could start working on December 1."',
        words: ['Mogla', 'bih', 'početi', 'raditi', 'od', '1.', 'prosinca.'],
        accept: [
          'Od 1. prosinca mogla bih početi raditi.',
          'Od 1. prosinca bih mogla početi raditi.',
          'Mogla bih od 1. prosinca početi raditi.',
        ],
        explanation:
          'Mogla bih početi raditi od 1. prosinca. The participle comes first, bih takes second place, and the month after od is in the genitive.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Dobro', 'se', 'služim', 'engleski', 'jezikom.'],
        wrong: 3,
        answer: 'engleskim',
        hint: 'Služiti se governs the whole phrase, not only the noun.',
        explanation:
          'Dobro se služim engleskim jezikom. — the adjective goes into the instrumental together with its noun.',
      },
      9,
      0,
      {
        type: 'transform',
        q: 'A man is writing. Make the blunt sentence polite, as in a real application.',
        from: 'Hoću raditi u Vašoj tvrtki.',
        answer: 'Želio bih raditi u Vašoj tvrtki.',
        accept: [
          'Htio bih raditi u Vašoj tvrtki.',
          'Volio bih raditi u Vašoj tvrtki.',
          'Rado bih radio u Vašoj tvrtki.',
          'Ja bih želio raditi u Vašoj tvrtki.',
          'Ja bih htio raditi u Vašoj tvrtki.',
        ],
        hint: 'Use the conditional: a participle that agrees with him, and the short word in second place.',
        explanation:
          'Želio bih raditi u Vašoj tvrtki. — the conditional is what makes a wish polite in a formal letter.',
      },
      {
        type: 'listen',
        audio: 'Za sve dodatne informacije stojim Vam na raspolaganju.',
        q: 'What is the writer offering?',
        options: [
          'To send the documents again',
          'To answer any further questions',
          'To start work immediately',
          'To come for a visit',
        ],
        correct: 1,
        explanation:
          'Stojim Vam na raspolaganju — "I am at your disposal" — for any further information (za sve dodatne informacije).',
      },
      {
        type: 'dictate',
        audio: 'Radila sam dvije godine kao prodavačica.',
        answer: 'Radila sam dvije godine kao prodavačica.',
        hint: 'Six words: a woman writes that she worked for two years as a salesperson.',
        explanation:
          'Radila sam dvije godine kao prodavačica. — the participle and the job title both show a woman.',
      },
    ],
  },

  // ── Satisfied, thrilled, disappointed ──────────────────────────────────────
  'satisfaction-disappointment': {
    text: {
      kind: 'dialogue',
      title: 'Kako je bilo u Rovinju?',
      lines: [
        {
          who: 'Vito',
          hr: 'Ema, vratila si se! Kako je bilo u Rovinju?',
          en: 'Ema, you are back! How was Rovinj?',
        },
        {
          who: 'Ema',
          hr: 'Gradom sam oduševljena: stare ulice, more, sladoled… Prekrasno!',
          en: 'I am thrilled with the town: old streets, the sea, ice cream… Wonderful!',
        },
        {
          who: 'Vito',
          hr: 'A hotel? Jesi li zadovoljna smještajem?',
          en: 'And the hotel? Are you satisfied with the accommodation?',
        },
        {
          who: 'Ema',
          hr: 'Nisam baš. Soba je bila mala i bučna, a doručkom sam bila jako razočarana.',
          en: 'Not really. The room was small and noisy, and I was very disappointed with the breakfast.',
        },
        {
          who: 'Vito',
          hr: 'Kakva šteta! Jesi li to rekla na recepciji?',
          en: 'What a pity! Did you say so at the front desk?',
        },
        {
          who: 'Ema',
          hr: 'Jesam, ali nisu bili nimalo ljubazni. Očekivala sam više od hotela s četiri zvjezdice.',
          en: 'I did, but they were not kind at all. I expected more from a four-star hotel.',
        },
        {
          who: 'Vito',
          hr: 'A tvoj muž? Je li on bio zadovoljan?',
          en: 'And your husband? Was he satisfied?',
        },
        {
          who: 'Ema',
          hr: 'On je bio oduševljen ribom i vinom pa mu ništa drugo nije bilo važno!',
          en: 'He was thrilled with the fish and the wine, so nothing else mattered to him!',
        },
        {
          who: 'Vito',
          hr: 'Drago mi je što ste barem dobro jeli.',
          en: 'I am glad that you at least ate well.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what was Ema thrilled with, and what disappointed her?',
          options: [
            'Thrilled with the hotel; disappointed with the town',
            'Thrilled with the town; disappointed with the breakfast',
            'Thrilled with the breakfast; disappointed with the beach',
            'Thrilled with the wine; disappointed with the fish',
          ],
          correct: 1,
          hint: 'Her delight is about streets and sea; her complaint is about the first meal of the day.',
          explanation:
            'Gradom sam oduševljena… a doručkom sam bila jako razočarana. The fish and the wine were what her husband loved.',
        },
        {
          q: 'Ema says "oduševljena" about herself and "oduševljen" about her husband. What decides the ending?',
          options: [
            'The thing they are thrilled with',
            'Whether the sentence is in the past or the present',
            'Whether the feeling is strong or weak',
            'The person who has the feeling — the adjective agrees with them',
          ],
          correct: 3,
          hint: 'Compare who is thrilled in each sentence, not what with.',
          explanation:
            'These words are adjectives and agree with the person who feels: a woman is oduševljena, a man oduševljen. The thing stands in the instrumental either way.',
        },
        {
          type: 'type',
          q: 'Now you. Ema and her husband were both happy with the weather. She says: Bili smo ____ vremenom.',
          answer: 'zadovoljni',
          accept: ['oduševljeni'],
          hint: 'Two people, one of them a man: the adjective takes the plural for a mixed group.',
          explanation:
            'Bili smo zadovoljni vremenom. — a mixed group takes the masculine plural -i; two women would be zadovoljne.',
        },
        {
          type: 'type',
          q: 'The people at the front desk were unfriendly. Ema says what she was not satisfied with — the service (usluga): Nisam bila zadovoljna ____.',
          answer: 'uslugom',
          hint: 'After zadovoljan the thing takes the instrumental; this is a feminine noun in -a.',
          explanation: 'Nisam bila zadovoljna uslugom. — usluga → uslugom, with no preposition.',
        },
        {
          type: 'transform',
          q: 'Make the complaint much stronger: from "not very" to "not at all".',
          from: 'Nisam baš zadovoljan.',
          answer: 'Nisam nimalo zadovoljan.',
          accept: [
            'Nimalo nisam zadovoljan.',
            'Nisam uopće zadovoljan.',
            'Uopće nisam zadovoljan.',
          ],
          hint: 'One small word changes; the negation stays.',
          explanation:
            'Nisam nimalo zadovoljan. — nimalo is "not at all", and it always needs the negated verb with it.',
        },
      ],
    },
    mix: [
      10,
      {
        type: 'tf',
        q: 'A woman who is pleased with her new job says: "Zadovoljan sam novim poslom."',
        answer: false,
        hint: 'Who has the feeling? The adjective has to agree with her.',
        explanation:
          'False. A woman says Zadovoljna sam novim poslom. Zadovoljan is what a man says.',
      },
      11,
      {
        type: 'match',
        q: 'Who is disappointed? Match each subject to the right form.',
        pairs: [
          ['Ivan je', 'razočaran.'],
          ['Ivana je', 'razočarana.'],
          ['Ivan i Ivana su', 'razočarani.'],
          ['Ivana i Marta su', 'razočarane.'],
        ],
        explanation:
          'The adjective agrees with whoever feels it: -Ø for a man, -a for a woman, -i for men or a mixed group, -e for women only.',
      },
      9,
      {
        type: 'sort',
        q: 'Is the speaker pleased, or not?',
        groups: ['Pleased', 'Not pleased'],
        items: [
          { hr: 'Baš mi je drago!', group: 0 },
          { hr: 'Očekivala sam više.', group: 1 },
          { hr: 'Nije loše.', group: 0 },
          { hr: 'Nije mi se svidjelo.', group: 1 },
          { hr: 'Potpuno sam zadovoljan.', group: 0 },
          { hr: 'Nisam nimalo zadovoljna.', group: 1 },
          { hr: 'Prekrasno!', group: 0 },
          { hr: 'Razočarani smo.', group: 1 },
        ],
        explanation:
          'Nije loše — "not bad" — is mild praise. Očekivala sam više — "I expected more" — is a polite way to say you are disappointed.',
      },
      12,
      {
        type: 'order',
        q: 'Put the words in order — a woman says: "I am disappointed that you didn’t come."',
        words: ['Razočarana', 'sam', 'što', 'nisi', 'došao.'],
        explanation:
          'Razočarana sam što nisi došao. After razočaran, a što-clause says what the disappointment is about.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Navijači', 'su', 'razočarani', 'rezultat', 'utakmice.'],
        wrong: 3,
        answer: 'rezultatom',
        hint: 'Razočaran wants the thing in the same case as zadovoljan does.',
        explanation:
          'Navijači su razočarani rezultatom utakmice. — the thing that disappoints stands in the instrumental.',
      },
      8,
      6,
      {
        type: 'transform',
        q: 'Marko said this. Now his sisters, Ana and Petra, say it together about themselves.',
        from: 'Oduševljen sam koncertom.',
        answer: 'Oduševljene smo koncertom.',
        accept: ['Mi smo oduševljene koncertom.', 'Koncertom smo oduševljene.'],
        hint: 'Two words change: the adjective, for a group of women, and the verb, for "we".',
        explanation:
          'Oduševljene smo koncertom. — women only take -e; sam becomes smo. The concert stays in the instrumental.',
      },
      4,
      {
        type: 'listen',
        audio: 'Kupci su nezadovoljni cijenama.',
        q: 'What is the problem?',
        options: [
          'The customers are unhappy with the prices',
          'The prices are too low',
          'The store has no customers',
          'The customers did not pay',
        ],
        correct: 0,
        explanation:
          'Kupci su nezadovoljni cijenama — the customers are dissatisfied with the prices (instrumental plural).',
      },
      {
        type: 'dictate',
        audio: 'Drago mi je što ste došli.',
        answer: 'Drago mi je što ste došli.',
        hint: 'Six words: "I am glad that you came" — said to several people.',
        explanation: 'Drago mi je što ste došli. — after drago mi je, the reason comes with što.',
      },
    ],
  },

  // ── Motion verbs ───────────────────────────────────────────────────────────
  'motion-verbs': {
    text: {
      kind: 'dialogue',
      title: 'Tko dolazi, tko odlazi?',
      lines: [
        {
          who: 'Mama',
          hr: 'Tena, gdje je Filip? Je li već otišao na trening?',
          en: 'Tena, where is Filip? Has he already left for practice?',
        },
        {
          who: 'Tena',
          hr: 'Da, izašao je iz kuće prije pola sata. Vraća se u osam.',
          en: 'Yes, he left the house half an hour ago. He is coming back at eight.',
        },
        {
          who: 'Mama',
          hr: 'A ti? Ideš li danas na fakultet?',
          en: 'And you? Are you going to the university today?',
        },
        {
          who: 'Tena',
          hr: 'Idem, ali kasnije. Utorkom odlazim tek u deset jer prvo predavanje imam u jedanaest.',
          en: 'I am, but later. On Tuesdays I don’t leave until ten, because my first class is at eleven.',
        },
        {
          who: 'Mama',
          hr: 'Kad budeš izlazila, ponesi smeće, molim te.',
          en: 'When you go out, take the trash with you, please.',
        },
        {
          who: 'Tena',
          hr: 'Hoću. Jao, upravo je ušla susjedova mačka — opet je došla po ručak!',
          en: 'I will. Oh no, the neighbor’s cat has just come in — she has come for lunch again!',
        },
        {
          who: 'Mama',
          hr: 'Dolazi svaki dan jer sam joj jednom dala ribu.',
          en: 'She comes every day because I gave her fish once.',
        },
        {
          who: 'Tena',
          hr: 'Dobro, ja sad idem. Kad dođem na fakultet, javit ću ti se.',
          en: 'All right, I am off now. When I get to the university, I will let you know.',
        },
        {
          who: 'Mama',
          hr: 'Može. I ne idi preko ceste na crveno!',
          en: 'OK. And don’t cross the street on red!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is Filip, and when does Tena leave home on Tuesdays?',
          options: [
            'At school; at eight',
            'At practice — he left half an hour ago; not until ten',
            'At the neighbors’; at noon',
            'At work; right after lunch',
          ],
          correct: 1,
          hint: 'Filip’s activity is a sport. Tena’s first class is at eleven, and she leaves an hour before.',
          explanation:
            'Filip is at practice — he went out half an hour ago. Tena: Utorkom odlazim tek u deset.',
        },
        {
          q: 'Mama says the cat "dolazi svaki dan", but Tena says the cat "je došla po ručak". Why two different verbs?',
          options: [
            'One is used for animals, the other for people',
            'One is polite, the other casual',
            'One is a habit that repeats; the other is one completed arrival',
            'There is no difference — they can be swapped',
          ],
          correct: 2,
          hint: 'Look at "svaki dan" in one sentence and "upravo" just before the other.',
          explanation:
            'Dolaziti is imperfective: a habit (svaki dan). Doći is perfective: one arrival that is complete — the cat is here now.',
        },
        {
          type: 'type',
          q: 'Now you. Filip is not at home any more — an hour ago he went to practice: Filip je ____ na trening.',
          answer: 'otišao',
          hint: 'The point is that he is gone: the perfective verb for leaving, in the past, for a man.',
          explanation:
            'Filip je otišao na trening. — otići stresses that the departure is complete and he is away.',
        },
        {
          type: 'type',
          q: 'A guest is standing at your door. Invite him in — politely: ____, molim Vas!',
          answer: 'Uđite',
          hint: 'The verb for going IN — its prefix matches the preposition u — in the polite imperative.',
          explanation: 'Uđite, molim Vas! — ući → uđi (ti), uđite (Vi).',
        },
        {
          type: 'transform',
          q: 'Yesterday, once: turn the habit into ONE completed arrival.',
          from: 'Djed dolazi u pet.',
          answer: 'Djed je došao u pet.',
          accept: [
            'Djed je jučer došao u pet.',
            'Jučer je djed došao u pet.',
            'Djed je došao jučer u pet.',
          ],
          hint: 'One finished arrival needs the perfective partner of dolaziti, in the past, agreeing with him.',
          explanation:
            'Djed je došao u pet. — dolaziti (habit) → doći (one arrival); the participle for a man is došao.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'Which way? Match each verb to its direction.',
        pairs: [
          ['ući', 'to go in'],
          ['izaći', 'to go out'],
          ['doći', 'to come, to arrive'],
          ['otići', 'to leave, to go away'],
          ['vratiti se', 'to come back'],
        ],
        explanation:
          'The prefix carries the direction: u- in, iz- out, do- toward, od- away. Vratiti se is the odd one — a verb of its own.',
      },
      5,
      {
        type: 'tf',
        q: '"Idem u grad" names a destination and "U gradu sam" a location — that is why grad has two different endings.',
        answer: true,
        hint: 'Motion toward a place takes one case; being in a place takes another.',
        explanation:
          'True. Motion to a place takes the accusative (u grad); being there takes the locative (u gradu).',
      },
      7,
      6,
      {
        type: 'sort',
        q: 'A habit or something still going on — or one completed movement?',
        groups: ['Repeated or going on', 'One completed movement'],
        items: [
          { hr: 'Svaki dan dolazim u sedam.', group: 0 },
          { hr: 'Jučer sam došla u devet.', group: 1 },
          { hr: 'Autobus upravo odlazi.', group: 0 },
          { hr: 'Gosti su već otišli.', group: 1 },
          { hr: 'Ljeti se često vraćamo kasno.', group: 0 },
          { hr: 'Sinoć smo se vratili u ponoć.', group: 1 },
        ],
        explanation:
          'Dolaziti, odlaziti and vraćati se are imperfective: habits and movements in progress. Doći, otići and vratiti se are perfective: one movement, finished.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "When you get home, call me."',
        words: ['Kad', 'dođeš', 'kući,', 'nazovi', 'me.'],
        accept: ['Nazovi me kad dođeš kući.', 'Kad kući dođeš, nazovi me.'],
        explanation:
          'Kad dođeš kući, nazovi me. After kad the perfective present points to one arrival in the future.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Tonight we are going to the movies with friends.")',
        words: ['Večeras', 'idemo', 'u', 'kinu', 's', 'prijateljima.'],
        wrong: 3,
        answer: 'kino',
        hint: 'Idemo is motion: where the motion leads is not the place where you already are.',
        explanation:
          'Večeras idemo u kino s prijateljima. — a destination takes the accusative; u kinu would be where you are sitting.',
      },
      2,
      {
        type: 'transform',
        q: 'Yesterday, once: turn the routine into one completed departure.',
        from: 'Marko odlazi na posao u sedam.',
        answer: 'Marko je otišao na posao u sedam.',
        accept: [
          'Marko je jučer otišao na posao u sedam.',
          'Jučer je Marko otišao na posao u sedam.',
          'Marko je otišao na posao jučer u sedam.',
        ],
        hint: 'The perfective partner of odlaziti, in the past, agreeing with Marko.',
        explanation:
          'Marko je otišao na posao u sedam. — odlaziti (routine) → otići (one departure, finished).',
      },
      0,
      {
        type: 'listen',
        audio: 'Baka je izašla iz kuće i otišla na tržnicu.',
        q: 'Where is Grandma now?',
        options: [
          'At home',
          'At the market, or on her way there',
          'In front of the house, waiting',
          'Back from the market',
        ],
        correct: 1,
        explanation:
          'Izašla je iz kuće — she went out of the house — i otišla na tržnicu: she has left for the market and is away.',
      },
      {
        type: 'dictate',
        audio: 'Vraćam se u nedjelju.',
        answer: 'Vraćam se u nedjelju.',
        hint: 'Four words: "I am coming back on Sunday."',
        explanation:
          'Vraćam se u nedjelju. — the imperfective present is the normal way to state a plan.',
      },
    ],
  },

  // ── Sitting, standing, putting ─────────────────────────────────────────────
  'position-placement': {
    text: {
      kind: 'dialogue',
      title: 'Selidba',
      lines: [
        {
          who: 'Klara',
          hr: 'Marine, kamo ćemo staviti kauč? Pod prozor ili u kut?',
          en: 'Marin, where shall we put the couch? Under the window or in the corner?',
        },
        {
          who: 'Marin',
          hr: 'Stavimo ga pod prozor. Sad stoji pred vratima i ne mogu proći.',
          en: 'Let’s put it under the window. Right now it is standing in front of the door and I can’t get by.',
        },
        {
          who: 'Klara',
          hr: 'Dobro. A slike? Mogu li ih objesiti na ovaj zid?',
          en: 'All right. And the pictures? Can I hang them on this wall?',
        },
        {
          who: 'Marin',
          hr: 'Možeš. Bakina slika već visi u hodniku, a ostale još leže na podu.',
          en: 'You can. Grandma’s picture is already hanging in the hallway, and the others are still lying on the floor.',
        },
        {
          who: 'Klara',
          hr: 'Knjige sam stavila na policu, ali lampa još stoji u kutiji.',
          en: 'I put the books on the shelf, but the lamp is still sitting in its box.',
        },
        {
          who: 'Marin',
          hr: 'Uf, umoran sam. Sjeo sam samo na pet minuta.',
          en: 'Phew, I am tired. I only sat down for five minutes.',
        },
        {
          who: 'Klara',
          hr: 'Na pet minuta? Ti već pola sata sjediš na kauču! Ja ću leći na krevet tek kad sve bude na svom mjestu.',
          en: 'For five minutes? You have been sitting on the couch for half an hour! I will lie down on the bed only when everything is in its place.',
        },
        {
          who: 'Marin',
          hr: 'Dobro, dobro, ustajem. Kamo ide ova kutija?',
          en: 'All right, all right, I am getting up. Where does this box go?',
        },
        {
          who: 'Klara',
          hr: 'U ormar. I molim te, objesi kaput na vješalicu — ne na stolicu!',
          en: 'In the closet. And please, hang your coat on the hanger — not on the chair!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where do they decide to put the couch, and where is Grandma’s picture?',
          options: [
            'In the corner; on the floor',
            'In front of the door; on the shelf',
            'In the hallway; in a box',
            'Under the window; hanging in the hallway',
          ],
          correct: 3,
          hint: 'The couch goes where the light comes in. Only one picture is already up.',
          explanation:
            'Stavimo ga pod prozor. Bakina slika već visi u hodniku — the other pictures are still on the floor.',
        },
        {
          q: 'Klara says "Knjige sam stavila na policu", but the lamp "stoji u kutiji". Why policu with -u, but kutiji with -i?',
          options: [
            'Putting moves something to a place, so the accusative; standing is a state, so the locative',
            'Because polica is feminine and kutija is neuter',
            'Because na always takes -u and u always takes -i',
            'Because the books are plural and the lamp is singular',
          ],
          correct: 0,
          hint: 'In which sentence does something arrive somewhere?',
          explanation:
            'Staviti is a change — the books arrive on the shelf — so the destination is accusative. Stajati is a state — nothing moves — so the place is locative.',
        },
        {
          type: 'type',
          q: 'Now you. Marin’s coat is finally where it belongs. Say where it is hanging: Kaput visi na ____. (vješalica)',
          answer: 'vješalici',
          hint: 'Hanging is a state — nothing is moving.',
          explanation: 'Kaput visi na vješalici. — visjeti is a state, so na takes the locative.',
        },
        {
          type: 'type',
          q: 'A friend comes in, and you offer her the armchair (fotelja): Sjedni u ____.',
          answer: 'fotelju',
          hint: 'Sitting down is a change of position: you need the case of a destination.',
          explanation:
            'Sjedni u fotelju. — sjesti is the change, so the place is in the accusative. Once she is seated: Sjedi u fotelji.',
        },
        {
          type: 'transform',
          q: 'Marin has done it. Describe the result: where are the keys now? Use biti.',
          from: 'Marin je stavio ključeve na stol.',
          answer: 'Ključevi su na stolu.',
          accept: [
            'Ključevi su sada na stolu.',
            'Ključevi su sad na stolu.',
            'Sada su ključevi na stolu.',
            'Sad su ključevi na stolu.',
            'Ključevi stoje na stolu.',
            'Ključevi sada stoje na stolu.',
            'Ključevi leže na stolu.',
            'Na stolu su ključevi.',
          ],
          hint: 'The keys become the subject, and the place is now a location, not a destination.',
          explanation:
            'Ključevi su na stolu. — after the putting is done, the place is a location: na + locative.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'match',
        q: 'Change or state? Match each verb to its meaning.',
        pairs: [
          ['sjesti', 'to sit down'],
          ['sjediti', 'to be sitting'],
          ['leći', 'to lie down'],
          ['ležati', 'to be lying'],
          ['objesiti', 'to hang something up'],
        ],
        explanation:
          'Each position has two verbs: one for the change (sjesti, leći, objesiti) and one for the state that follows (sjediti, ležati, visjeti).',
      },
      5,
      {
        type: 'tf',
        q: '"Sjedim na stolicu" is correct, because a chair is something you sit down on.',
        answer: false,
        hint: 'Is anything moving in sjedim?',
        explanation:
          'False. Sjedim is a state, so the place is in the locative: Sjedim na stolici. Only the change takes the accusative: Sjedni na stolicu.',
      },
      6,
      {
        type: 'sort',
        q: 'Is something moving to a new place, or is it already there?',
        groups: ['Moving to a place', 'Already there'],
        items: [
          { hr: 'Stavi šalicu na stol.', group: 0 },
          { hr: 'Šalica je na stolu.', group: 1 },
          { hr: 'Objesila sam sliku na zid.', group: 0 },
          { hr: 'Slika visi na zidu.', group: 1 },
          { hr: 'Idem u sobu.', group: 0 },
          { hr: 'U sobi sam.', group: 1 },
          { hr: 'Vratio sam auto u garažu.', group: 0 },
          { hr: 'Auto je u garaži.', group: 1 },
        ],
        explanation:
          'A change of place takes the accusative (na stol, na zid, u sobu, u garažu). A state takes the locative (na stolu, na zidu, u sobi, u garaži).',
      },
      8,
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Hang the coat in the closet, please."',
        words: ['Objesi', 'kaput', 'u', 'ormar,', 'molim', 'te.'],
        accept: [
          'Molim te, objesi kaput u ormar.',
          'Kaput objesi u ormar, molim te.',
          'Molim te, kaput objesi u ormar.',
          'U ormar objesi kaput, molim te.',
        ],
        explanation:
          'Objesi kaput u ormar, molim te. Hanging something up is a change, so u takes the accusative: u ormar.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it. ("Ana put the vase on the table.")',
        words: ['Ana', 'je', 'stajala', 'vazu', 'na', 'stol.'],
        wrong: 2,
        answer: 'stavila',
        hint: 'If you can ask "put WHAT?", the verb must be the one that takes an object.',
        explanation:
          'Ana je stavila vazu na stol. — staviti is "to put" and takes an object; stajati is "to stand" and takes none.',
      },
      7,
      {
        type: 'transform',
        q: 'The moving is over. Describe the state: where is the cat lying now?',
        from: 'Mačka je legla na kauč.',
        answer: 'Mačka leži na kauču.',
        accept: [
          'Mačka sada leži na kauču.',
          'Mačka sad leži na kauču.',
          'Sada mačka leži na kauču.',
          'Sad mačka leži na kauču.',
          'Na kauču leži mačka.',
          'Mačka leži na kauču sada.',
        ],
        hint: 'Two changes: the verb of state in the present, and the case of a location.',
        explanation:
          'Mačka leži na kauču. — leći (the change, with the accusative) gives way to ležati (the state, with the locative).',
      },
      2,
      12,
      {
        type: 'listen',
        audio: 'Autobus je stao pred školom i svi su ušli.',
        q: 'What happened?',
        options: [
          'The bus stood at the school all morning',
          'The bus stopped in front of the school and everyone got on',
          'The bus passed the school without stopping',
          'Everyone got off the bus at the school',
        ],
        correct: 1,
        explanation:
          'Stao je — it came to a stop (the change, from stati). Svi su ušli — everyone went in, that is, got on.',
      },
      {
        type: 'dictate',
        audio: 'Ključevi su na stolu.',
        answer: 'Ključevi su na stolu.',
        hint: 'Four words: "The keys are on the table."',
        explanation: 'Ključevi su na stolu. — a state: na + locative.',
      },
    ],
  },
};
