// ─── A2 lessons in class order — Units 9–10 (A2 lessons 41–50) ───────────────
// Same shape and rules as the A1 class files (a1class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what the lesson and the lessons before it have taught: all of A1, the A2
// lessons up to this one, and the lesson itself. No comparatives, no future II,
// no reported commands (a message is passed on as "Recite mu: zvala je …", the
// way phone-calls-a2 teaches it).
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.
// People are addressed in the vocative where the name has one (Davore, Jakove,
// Majo, bako).

export const CLASS_A2_U09_10 = {
  // ══ UNIT 9 ═════════════════════════════════════════════════════════════════

  // ── The dative says whose ──────────────────────────────────────────────────
  'possessive-dative': {
    text: {
      kind: 'dialogue',
      title: 'Obiteljske fotografije',
      lines: [
        { who: 'Dino', hr: 'Tko ti je ovo na slici?', en: 'Who is this in the picture?' },
        {
          who: 'Petra',
          hr: 'To mi je brat Filip. Žena mu je iz Osijeka.',
          en: 'That is my brother Filip. His wife is from Osijek.',
        },
        { who: 'Dino', hr: 'A gdje su vam roditelji?', en: 'And where are your parents?' },
        {
          who: 'Petra',
          hr: 'Roditelji su nam u Rijeci. Otac mi je kuhar, a majka mi je liječnica.',
          en: 'Our parents are in Rijeka. My father is a cook and my mother is a doctor.',
        },
        { who: 'Dino', hr: 'A tko je ova gospođa?', en: 'And who is this lady?' },
        {
          who: 'Petra',
          hr: 'To nam je baka. Kuća joj je na Krku, blizu mora.',
          en: 'That is our grandmother. Her house is on Krk, near the sea.',
        },
        {
          who: 'Dino',
          hr: 'Lijepo! A zašto imaš tako star mobitel?',
          en: 'Nice! And why do you have such an old phone?',
        },
        {
          who: 'Petra',
          hr: 'Novi mi se razbio prošli tjedan. Pao mi je na ulici.',
          en: 'My new one broke last week. I dropped it on the street.',
        },
        {
          who: 'Dino',
          hr: 'Joj! A meni su prošle godine ukrali mobitel u tramvaju.',
          en: 'Ouch! And last year someone stole my phone on the tram.',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: whose house is on Krk, and what happened to Petra's new phone?",
          options: [
            "Her brother's house; the phone was stolen on a tram",
            "Her parents' house; the phone fell into the sea",
            "Her grandmother's house; the phone fell on the street and broke",
            "Her grandmother's house; the phone was stolen last year",
          ],
          correct: 2,
          hint: 'Three family members have a place: Osijek, Rijeka, Krk. And two phones had bad luck — one was Dino’s.',
          explanation:
            "Grandmother's house is on Krk. Petra's new phone fell on the street and broke; it was Dino whose phone was stolen on the tram.",
        },
        {
          q: 'Petra says "Otac mi je kuhar" but "Roditelji su nam u Rijeci". Why does the short dative stand BEFORE je, but AFTER su?',
          options: [
            'Because otac is masculine and roditelji is plural, and plural nouns push the pronoun back',
            'Among the short words, je always comes last; su and the other forms of biti come first',
            'Because the first sentence is about a job and the second about a place',
            'There is no rule — both orders are possible in both sentences',
          ],
          correct: 1,
          hint: 'It is not about the nouns. Think of the order of the short words you learned: which form of biti is the odd one out?',
          explanation:
            'In the cluster of short words, sam, si, smo, ste and su come first, then the dative, and je comes last: Otac mi je…, but Roditelji su nam…',
        },
        {
          type: 'type',
          q: 'Now you. Dino has a sister, and she is a student. Say it about him with the short dative: Sestra ____ je studentica.',
          answer: 'mu',
          hint: 'The owner is "he". You need the short dative of on — the same word Petra uses about Filip’s wife.',
          explanation: 'Sestra mu je studentica. — his sister is a student.',
        },
        {
          type: 'type',
          q: 'Petra and Filip have a grandmother on Krk. Say it about the two of them: Baka ____ je na Krku.',
          answer: 'im',
          hint: 'The owners are "they". Use the short dative of oni.',
          explanation: 'Baka im je na Krku. — their grandmother is on Krk.',
        },
        {
          type: 'transform',
          q: 'Say the same thing the everyday way: with the short dative instead of "moja".',
          from: 'Moja sestra živi u Splitu.',
          answer: 'Sestra mi živi u Splitu.',
          hint: 'Drop the possessive word and put the short dative of ja in second place, right after the first word.',
          explanation:
            'Sestra mi živi u Splitu. — the short dative works with any verb, not only with biti.',
        },
      ],
    },
    mix: [
      0,
      8,
      {
        type: 'sort',
        q: 'One person or thing, or several? Sort each sentence by the words that fill its gap.',
        groups: ['… mi je … (one)', '… su mi … (several)'],
        items: [
          { hr: 'Brat … liječnik.', group: 0 },
          { hr: 'Roditelji … u Rijeci.', group: 1 },
          { hr: 'Stan … u centru.', group: 0 },
          { hr: 'Oči … plave.', group: 1 },
          { hr: 'Sestra … u školi.', group: 0 },
          { hr: 'Prijatelji … iz Pule.', group: 1 },
          { hr: 'Djeca … mala.', group: 1 },
        ],
        explanation:
          'With one thing the order is dative, then je: Brat mi je… With several, su comes first: Roditelji su mi… Djeca also takes su.',
      },
      9,
      2,
      11,
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Her phone broke yesterday."',
        words: ['Jučer', 'joj', 'se', 'razbio', 'mobitel.'],
        accept: [
          'Mobitel joj se jučer razbio.',
          'Mobitel joj se razbio jučer.',
          'Jučer joj se mobitel razbio.',
          'Razbio joj se jučer mobitel.',
          'Razbio joj se mobitel jučer.',
        ],
        explanation:
          'Jučer joj se razbio mobitel. The short words stand together in second place, the dative before se.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Mojoj', 'baka', 'je', 'kuća', 'na', 'Hvaru.'],
        wrong: 1,
        answer: 'baki',
        hint: 'The owner is a noun here, and the word before it already shows the case it should be in.',
        explanation:
          'Mojoj baki je kuća na Hvaru. — a noun owner goes in the dative too, together with its possessive.',
      },
      {
        type: 'match',
        q: 'Whose brother? Match each sentence to its meaning.',
        pairs: [
          ['Brat mi je student.', 'My brother is a student.'],
          ['Brat mu je student.', 'His brother is a student.'],
          ['Brat joj je student.', 'Her brother is a student.'],
          ['Brat nam je student.', 'Our brother is a student.'],
          ['Brat im je student.', 'Their brother is a student.'],
        ],
        explanation: 'Only the short dative changes, and it alone tells you whose brother it is.',
      },
      3,
      {
        type: 'tf',
        q: '"Ukrali su joj torbu" means that she stole a bag.',
        answer: false,
        hint: 'Who is the subject of "ukrali su"? And what does the short dative say about the bag?',
        explanation:
          'False. Ukrali su — "they stole"; joj — it was hers. Someone stole HER bag. The dative names the person it happened to.',
      },
      {
        type: 'transform',
        q: 'Say the same thing with the short dative instead of "njegov".',
        from: 'Njegov brat radi u banci.',
        answer: 'Brat mu radi u banci.',
        hint: 'Drop the possessive word. The short dative of on goes right after the first word.',
        explanation: 'Brat mu radi u banci. — his brother works in a bank.',
      },
      {
        type: 'listen',
        audio: 'Kako ti je mama?',
        q: 'What is the speaker asking?',
        options: ['Where is my mom?', 'Who is your mom?', 'How is your mom?', 'How is his mom?'],
        correct: 2,
        explanation: 'Kako ti je mama? — ti is the short dative of "you": how is YOUR mom?',
      },
      {
        type: 'dictate',
        audio: 'Pala mi je torba.',
        answer: 'Pala mi je torba.',
        hint: 'Four words. Something fell — and one small word says whose it was.',
        explanation: 'Pala mi je torba. — my bag fell.',
      },
    ],
  },

  // ── Verbs that want a dative ───────────────────────────────────────────────
  'verbs-with-dative-a2': {
    text: {
      kind: 'text',
      title: 'Poruka iz Dublina',
      lines: [
        {
          hr: 'Draga Majo, hvala ti na poruci!',
          en: 'Dear Maja, thank you for your message!',
        },
        { hr: 'Čestitam ti na novom poslu!', en: 'Congratulations on your new job!' },
        {
          hr: 'Ovdje mi je dobro, ali nedostaje mi Split.',
          en: 'I am doing fine here, but I miss Split.',
        },
        {
          hr: 'Nedostaju mi prijatelji, a nedostaješ mi i ti.',
          en: 'I miss my friends, and I miss you too.',
        },
        {
          hr: 'Stan je lijep, ali smeta mi buka s ulice.',
          en: 'The apartment is nice, but the noise from the street bothers me.',
        },
        {
          hr: 'Susjed kaže da noću nema buke, ali ne vjerujem mu.',
          en: 'My neighbor says there is no noise at night, but I do not believe him.',
        },
        {
          hr: 'Dolazim kući za Božić. Odgovara li ti subota za kavu?',
          en: 'I am coming home for Christmas. Does Saturday suit you for a coffee?',
        },
        {
          hr: 'Pozdravi mamu i zahvali joj na paketu!',
          en: 'Say hi to Mom and thank her for the package!',
        },
        { hr: 'Tvoj brat Luka', en: 'Your brother Luka' },
      ],
      questions: [
        {
          q: 'Without looking back at the message: what bothers Luka in Dublin, and when is he coming home?',
          options: [
            'The rain; he is coming home in the summer',
            'The noise from the street; he is coming home for Christmas',
            'His neighbor; he is coming home on Saturday',
            'His new job; he is coming home for Easter',
          ],
          correct: 1,
          hint: 'He likes the apartment, with one "but". And he names a holiday.',
          explanation:
            'The apartment is nice, but the noise from the street bothers him. He is coming home for Christmas — za Božić.',
        },
        {
          q: 'Luka writes "ne vjerujem mu" and "zahvali joj". Why mu and joj, and not ga and je?',
          options: [
            'Because mu and joj are more polite than ga and je',
            'Because the sentences are negative or commands',
            'Because ga and je are used only for things, never for people',
            'Because vjerovati and zahvaliti take the person in the dative, not the accusative',
          ],
          correct: 3,
          hint: 'English says "believe HIM" and "thank HER" with an ordinary object. What do these two Croatian verbs ask for instead?',
          explanation:
            'vjerovati and zahvaliti are dative verbs: you believe TO someone and give thanks TO someone. So it is mu and joj — the short datives of on and ona.',
        },
        {
          type: 'type',
          q: 'Now you. You are abroad and you miss your mom. Mama is the one who is missed, so she is the subject: ____ mi mama.',
          answer: 'Nedostaje',
          hint: 'The verb is nedostajati, and it agrees with mama — one person, so the ona form.',
          explanation: 'Nedostaje mi mama. — word for word, "Mom is lacking to me".',
        },
        {
          type: 'type',
          q: 'Your friend asks whether the street noise is a problem. It is not: Buka mi ne ____.',
          answer: 'smeta',
          hint: 'The verb for "to bother", agreeing with buka.',
          explanation: 'Buka mi ne smeta. — the noise does not bother me.',
        },
        {
          type: 'transform',
          q: 'Luka says this to Maja. Change it: the ones who are missed are now his parents (roditelji), not "you".',
          from: 'Nedostaješ mi.',
          answer: 'Nedostaju mi roditelji.',
          accept: ['Roditelji mi nedostaju.'],
          hint: 'The verb agrees with the ones who are missed — and now there are several of them.',
          explanation:
            'Nedostaju mi roditelji. — the parents are the subject, so the verb is in the oni form.',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'match',
        q: 'Who feels it, and about whom? Match each sentence to its meaning.',
        pairs: [
          ['Nedostaješ mi.', 'I miss you.'],
          ['Nedostajem ti.', 'You miss me.'],
          ['Smetam ti.', 'I am bothering you.'],
          ['Vjeruješ mi.', 'You believe me.'],
          ['Vjerujem ti.', 'I believe you.'],
        ],
        explanation:
          'The verb ending shows the subject and the short dative shows the other person. With nedostajati the subject is the one who is MISSED.',
      },
      8,
      0,
      {
        type: 'sort',
        q: 'You miss all of these. Which verb form goes with each?',
        groups: ['Nedostaje mi … (one)', 'Nedostaju mi … (several)'],
        items: [
          { hr: 'more', group: 0 },
          { hr: 'prijatelji', group: 1 },
          { hr: 'sestra', group: 0 },
          { hr: 'roditelji', group: 1 },
          { hr: 'Zagreb', group: 0 },
          { hr: 'bakini kolači', group: 1 },
          { hr: 'sunce', group: 0 },
          { hr: 'djeca', group: 1 },
        ],
        explanation:
          'What you miss is the subject, so the verb counts it: Nedostaje mi more, but Nedostaju mi roditelji. Djeca takes the plural verb too.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "Does tomorrow at ten suit you?" (to a friend)',
        words: ['Odgovara', 'li', 'ti', 'sutra', 'u', 'deset?'],
        accept: ['Odgovara li ti u deset sutra?'],
        explanation:
          'Odgovara li ti sutra u deset? The short words keep their order: li first, then the dative.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Zahvalio', 'sam', 'ga', 'na', 'savjetu.'],
        wrong: 2,
        answer: 'mu',
        hint: 'zahvaliti is one of this lesson’s verbs. Which case does it want for the person?',
        explanation:
          'Zahvalio sam mu na savjetu. — zahvaliti takes the dative, so "him" is mu, not ga.',
      },
      5,
      {
        type: 'tf',
        q: 'In "Nedostajala si mi", the speaker is talking to a woman.',
        answer: true,
        hint: 'The -la form agrees with the subject. Who is the subject of nedostajati — the one who misses, or the one who is missed?',
        explanation:
          'True. The one who is missed is the subject — here "you" — and nedostajala is feminine. It means "I missed you", said to a woman.',
      },
      2,
      {
        type: 'transform',
        q: 'Put it in the past. A woman is speaking.',
        from: 'Ne vjerujem mu.',
        answer: 'Nisam mu vjerovala.',
        hint: 'The negative past starts with the negative of sam; the short dative follows it straight away.',
        explanation:
          'Nisam mu vjerovala. — I did not believe him. The dative stays right after nisam.',
      },
      3,
      {
        type: 'listen',
        audio: 'Smeta li Vam ako otvorim prozor?',
        q: 'What does the speaker want to do?',
        options: ['Close the door', 'Open the window', 'Turn off the music', 'Leave the room'],
        correct: 1,
        explanation:
          'Smeta li Vam ako otvorim prozor? — "Do you mind if I open the window?" It is the polite way to ask permission.',
      },
      {
        type: 'dictate',
        audio: 'Ne smeta mi buka.',
        answer: 'Ne smeta mi buka.',
        hint: 'Four words: "The noise does not bother me."',
        explanation:
          'Ne smeta mi buka. — the noise is the subject, and mi is the one who hears it.',
      },
    ],
  },

  // ── Saying things without saying who ───────────────────────────────────────
  impersonal: {
    text: {
      kind: 'dialogue',
      title: 'U muzeju',
      lines: [
        {
          who: 'Emma',
          hr: 'Dobar dan. Može li se ovdje fotografirati?',
          en: 'Good day. Is it possible to take photos here?',
        },
        {
          who: 'Čuvar',
          hr: 'Nažalost, ne. U muzeju se ne smije fotografirati.',
          en: 'Unfortunately not. Taking photos is not allowed in the museum.',
        },
        {
          who: 'Emma',
          hr: 'Dobro. A gdje se kupuje karta?',
          en: 'All right. And where does one buy a ticket?',
        },
        {
          who: 'Čuvar',
          hr: 'Na blagajni. Može se platiti i karticom.',
          en: 'At the ticket desk. You can pay by card as well.',
        },
        {
          who: 'Emma',
          hr: 'Treba li rezervirati vodiča?',
          en: 'Is it necessary to book a guide?',
        },
        {
          who: 'Čuvar',
          hr: 'Ne treba. Ali treba pričekati deset minuta — vodič dolazi u tri.',
          en: 'There is no need. But you have to wait ten minutes — the guide comes at three.',
        },
        {
          who: 'Emma',
          hr: 'Hvala Vam. Uh, ovdje mi je hladno!',
          en: 'Thank you. Ooh, I am cold in here!',
        },
        {
          who: 'Čuvar',
          hr: 'Znam. Kaže se da je to dobro za stare slike.',
          en: 'I know. They say it is good for old paintings.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is not allowed in the museum, and how long must Emma wait for the guide?',
          options: [
            'Paying by card; she must wait until three tomorrow',
            'Talking; she must wait ten minutes',
            'Taking photos; she does not have to wait at all',
            'Taking photos; she must wait ten minutes',
          ],
          correct: 3,
          hint: 'Her very first question gets a "no". And the guide is not there yet.',
          explanation:
            'Photos are not allowed — ne smije se fotografirati — and she has to wait ten minutes, because the guide comes at three.',
        },
        {
          q: 'The guard says "U muzeju se ne smije fotografirati." Who is this sentence about?',
          options: [
            'About Emma only — it is the polite form for one visitor',
            'About the guard himself — he is not allowed to take photos',
            'About nobody in particular — se turns it into a rule for everyone',
            'About one man who was mentioned earlier',
          ],
          correct: 2,
          hint: 'Look for a subject in the sentence. Is there a word for "you", "he" or "I" anywhere?',
          explanation:
            'There is no doer at all. se with the ona/on form of a verb makes a rule that holds for everybody — which is how every sign is worded.',
        },
        {
          type: 'type',
          q: 'Now you. Write a sign for a library — "No talking here": Ovdje se ne ____.',
          answer: 'razgovara',
          accept: ['govori', 'priča'],
          hint: 'Take the verb razgovarati and put it in the on/ona form — a rule never names a person.',
          explanation: 'Ovdje se ne razgovara. — se + third person singular makes it a rule.',
        },
        {
          type: 'type',
          q: 'Your friend Ivan is tired and needs a rest. Say it with the impersonal treba: ____ treba odmor.',
          answer: 'Ivanu',
          hint: 'With impersonal treba the person who needs something goes in the dative. A man’s name takes the ending of a masculine noun.',
          explanation:
            'Ivanu treba odmor. — "a rest is needed to Ivan". Ivan → Ivanu in the dative.',
        },
        {
          type: 'transform',
          q: 'This says what "we" do. Turn it into a rule for everyone, the way a sign would say it.',
          from: 'Ovdje ne pušimo.',
          answer: 'Ovdje se ne puši.',
          accept: ['Ovdje se ne smije pušiti.', 'Ne puši se ovdje.'],
          hint: 'Add the small impersonal word in second place, and change the verb to its on/ona form.',
          explanation:
            'Ovdje se ne puši. — no smoking here. Without se, "Ovdje ne puši" would mean "he does not smoke here".',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each notice to what it tells you.',
        pairs: [
          ['Ne smije se parkirati.', 'No parking.'],
          ['Može se platiti karticom.', 'Cards accepted.'],
          ['Ulazi se na druga vrata.', 'Use the other door.'],
          ['Ovdje se ne puši.', 'No smoking.'],
          ['Potrebno je rezervirati.', 'Booking required.'],
        ],
        explanation:
          'Notices name nobody: they use se with a third-person verb, or potrebno je with an infinitive.',
      },
      4,
      1,
      {
        type: 'sort',
        q: 'Is it a rule or a general truth for everyone, or is it about one particular person?',
        groups: ['For everyone', 'About one particular person'],
        items: [
          { hr: 'Ovdje se ne puši.', group: 0 },
          { hr: 'Marko ne puši.', group: 1 },
          { hr: 'Treba pričekati.', group: 0 },
          { hr: 'Moram pričekati.', group: 1 },
          { hr: 'Može se platiti karticom.', group: 0 },
          { hr: 'Mogu platiti karticom.', group: 1 },
          { hr: 'Vidi se da je kasno.', group: 0 },
          { hr: 'Ana vidi da je kasno.', group: 1 },
        ],
        explanation:
          'se with a third-person verb, and treba with an infinitive, have no doer. A name or an I-form verb makes the sentence personal.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "Can one pay in cash here?"',
        words: ['Može', 'li', 'se', 'ovdje', 'platiti', 'gotovinom?'],
        accept: [
          'Može li se ovdje gotovinom platiti?',
          'Može li se platiti gotovinom ovdje?',
          'Može li se gotovinom platiti ovdje?',
        ],
        explanation:
          'Može li se ovdje platiti gotovinom? The short words follow the verb in their fixed order: li, then se.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Mojoj', 'sestri', 'je', 'ovdje', 'topla.'],
        wrong: 4,
        answer: 'toplo',
        hint: 'The sister is in the dative, so she is not the subject. With no subject, which ending does the feeling word take?',
        explanation:
          'Mojoj sestri je ovdje toplo. — a feeling has no subject to agree with, so the word stays in its neuter -o form, whoever feels it.',
      },
      11,
      {
        type: 'tf',
        q: '"Trebam odmor" and "Treba mi odmor" both mean "I need a rest", and both are correct Croatian.',
        answer: true,
        hint: 'One has "I" as its subject. In the other the rest is the subject and the person is in the dative.',
        explanation:
          'True. Trebam odmor is personal; Treba mi odmor is the impersonal pattern. What is wrong is mixing them: "Trebam mi odmor".',
      },
      7,
      {
        type: 'transform',
        q: 'Say the same thing with the impersonal pattern: the person in the dative.',
        from: 'Trebam novi mobitel.',
        answer: 'Treba mi novi mobitel.',
        accept: ['Novi mobitel mi treba.', 'Meni treba novi mobitel.'],
        hint: 'The verb stops agreeing with "I" and agrees with the phone instead. "I" becomes a short dative in second place.',
        explanation:
          'Treba mi novi mobitel. — the phone is now the subject, so the verb is in the third person.',
      },
      8,
      9,
      10,
      {
        type: 'listen',
        audio: 'U knjižnici se ne smije jesti.',
        q: 'What is not allowed, and where?',
        options: [
          'Talking in the library',
          'Eating in the bookstore',
          'Eating in the library',
          'Taking photos in the library',
        ],
        correct: 2,
        explanation:
          'U knjižnici se ne smije jesti. — eating is not allowed in the library. A knjižnica lends books; a bookstore is a knjižara.',
      },
      {
        type: 'dictate',
        audio: 'Žao mi je, ne mogu doći.',
        answer: 'Žao mi je, ne mogu doći.',
        hint: 'Six words. A set phrase for "I am sorry", then what you cannot do.',
        explanation: 'Žao mi je, ne mogu doći. — I am sorry, I cannot come.',
      },
    ],
  },

  // ── Hladno mi je, treba mi, spava mi se ────────────────────────────────────
  'impersonal-feelings': {
    text: {
      kind: 'dialogue',
      title: 'Zimski izlet',
      lines: [
        { who: 'Iva', hr: 'Davore, je li ti hladno?', en: 'Davor, are you cold?' },
        {
          who: 'Davor',
          hr: 'Nije mi hladno, ali spava mi se. Jutros mi je bilo teško ustati.',
          en: 'I am not cold, but I am sleepy. It was hard for me to get up this morning.',
        },
        {
          who: 'Iva',
          hr: 'Meni je hladno. Trebaju mi rukavice — ostale su mi u autu.',
          en: 'I am cold. I need gloves — I left mine in the car.',
        },
        {
          who: 'Davor',
          hr: 'Evo ti moje. Meni ne trebaju.',
          en: 'Here, take mine. I do not need them.',
        },
        {
          who: 'Iva',
          hr: 'Hvala! Drago mi je što smo ovdje. Prošli put nam je bilo jako lijepo.',
          en: 'Thanks! I am glad we are here. Last time we had a really nice time.',
        },
        {
          who: 'Davor',
          hr: 'Da, ali djeci je bilo dosadno.',
          en: 'Yes, but the children were bored.',
        },
        {
          who: 'Iva',
          hr: 'Danas im neće biti dosadno — ima puno snijega!',
          en: 'They will not be bored today — there is a lot of snow!',
        },
        {
          who: 'Davor',
          hr: 'Istina. A sad mi se pije nešto toplo!',
          en: 'True. And now I feel like drinking something warm!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who is cold, and what does that person need?',
          options: [
            'Davor is cold; he needs a coat',
            'Iva is cold; she needs gloves',
            'The children are cold; they need something warm to drink',
            'Nobody is cold; Davor needs sleep',
          ],
          correct: 1,
          hint: 'One of the two says "Nije mi hladno". The other left something in the car.',
          explanation:
            'Iva is cold — Meni je hladno — and she needs gloves. Davor is not cold, only sleepy.',
        },
        {
          q: 'Iva says "Trebaju mi rukavice". Why "trebaju", and not "treba" or "trebam"?',
          options: [
            'Because Iva is speaking politely',
            'Because the sentence is about the past',
            'Because the gloves are the subject, and they are plural',
            'Because "mi" means "we", so the verb is plural',
          ],
          correct: 2,
          hint: 'In this pattern the person is in the dative. So what is left to be the subject?',
          explanation:
            'The thing you need is the subject and the verb agrees with it: Treba mi kaput, but Trebaju mi rukavice. Here mi is "to me", not "we".',
        },
        {
          type: 'type',
          q: 'Now you. It is July and you are hot. Say how you feel: ____ mi je.',
          answer: 'Vruće',
          hint: 'The opposite of hladno. The word stays the same for every person.',
          explanation: 'Vruće mi je. — I am hot. Word for word: "hot to me it is".',
        },
        {
          type: 'type',
          q: 'Yesterday you felt unwell. Put it in the past: Jučer mi je ____ loše.',
          answer: 'bilo',
          hint: 'The sentence has no subject, so the past form of biti takes the neuter ending — whoever is speaking.',
          explanation:
            'Jučer mi je bilo loše. — with no subject the past is always neuter, for a man and a woman alike.',
        },
        {
          type: 'transform',
          q: 'Davor says this about himself. Say it about the children (djeca).',
          from: 'Spava mi se.',
          answer: 'Djeci se spava.',
          accept: ['Spava se djeci.'],
          hint: 'The children go in the dative, as in Davor’s sentence about last time. A noun can open the sentence, and se follows it.',
          explanation: 'Djeci se spava. — the children are sleepy. djeca → djeci in the dative.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'How does the speaker feel? Match each sentence to its meaning.',
        pairs: [
          ['Zlo mi je.', 'I feel sick.'],
          ['Svejedno mi je.', 'I do not mind either way.'],
          ['Neugodno mi je.', 'I am embarrassed.'],
          ['Dosadno mi je.', 'I am bored.'],
          ['Žao mi je.', 'I am sorry.'],
        ],
        explanation:
          'All five have the same shape: a word in -o, the person in the dative, and je. Only the first word changes the feeling.',
      },
      8,
      2,
      {
        type: 'sort',
        q: 'You need all of these. Which verb form goes with each?',
        groups: ['Treba mi … (one thing)', 'Trebaju mi … (several)'],
        items: [
          { hr: 'kaput', group: 0 },
          { hr: 'rukavice', group: 1 },
          { hr: 'kišobran', group: 0 },
          { hr: 'nove cipele', group: 1 },
          { hr: 'pomoć', group: 0 },
          { hr: 'naočale', group: 1 },
          { hr: 'odmor', group: 0 },
        ],
        explanation:
          'The thing you need is the subject, so the verb counts it. Rukavice, cipele and naočale are plurals.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "We were bored yesterday."',
        words: ['Jučer', 'nam', 'je', 'bilo', 'dosadno.'],
        accept: [
          'Bilo nam je dosadno jučer.',
          'Bilo nam je jučer dosadno.',
          'Dosadno nam je bilo jučer.',
          'Jučer nam je dosadno bilo.',
        ],
        explanation:
          'Jučer nam je bilo dosadno. The short words nam and je stand in second place, the dative before je.',
      },
      11,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Trebala', 'mi', 'je', 'kišobran.'],
        wrong: 0,
        answer: 'Trebao',
        hint: 'The past form agrees with the thing that was needed. Is kišobran masculine or feminine?',
        explanation:
          'Trebao mi je kišobran. — kišobran is masculine, so the past form is trebao, whoever is speaking.',
      },
      10,
      {
        type: 'tf',
        q: '"Ja sam hladan" is the normal way to say that you feel cold.',
        answer: false,
        hint: 'In Croatian, is a person cold — or is it cold TO a person?',
        explanation:
          'False. You say Hladno mi je. "Ja sam hladan" describes a man as a cold person, not how he feels.',
      },
      12,
      {
        type: 'transform',
        q: 'Put it in the future: this is about tomorrow.',
        from: 'Dosadno ti je.',
        answer: 'Bit će ti dosadno.',
        accept: [
          'Dosadno će ti biti.',
          'Sutra će ti biti dosadno.',
          'Bit će ti sutra dosadno.',
          'Bit će ti dosadno sutra.',
        ],
        hint: 'The future of je is two words. The first is the infinitive of biti without its last letter.',
        explanation: 'Bit će ti dosadno. — you will be bored. The short dative follows će.',
      },
      13,
      7,
      {
        type: 'listen',
        audio: 'Baki je jučer bilo loše, ali danas joj je dobro.',
        q: 'How is Grandma today?',
        options: ['She is fine', 'She is still unwell', 'She is cold', 'She is bored'],
        correct: 0,
        explanation:
          'Baki je jučer bilo loše, ali danas joj je dobro. — she was unwell yesterday, but today she is fine.',
      },
      {
        type: 'dictate',
        audio: 'Jede mi se nešto slatko.',
        answer: 'Jede mi se nešto slatko.',
        hint: 'Five words: you feel like eating something sweet.',
        explanation: 'Jede mi se nešto slatko. — I feel like eating something sweet.',
      },
    ],
  },

  // ── The car, the garage and the road ───────────────────────────────────────
  'car-and-traffic': {
    text: {
      kind: 'dialogue',
      title: 'U autoservisu',
      lines: [
        {
          who: 'Nikola',
          hr: 'Dobar dan. Auto mi se pokvario.',
          en: 'Good day. My car has broken down.',
        },
        { who: 'Mehaničar', hr: 'Dobar dan. Što ne valja?', en: 'Good day. What is wrong?' },
        {
          who: 'Nikola',
          hr: 'Jučer mi se na autocesti probušila guma, a danas auto ne pali.',
          en: 'Yesterday I got a flat tire on the highway, and today the car will not start.',
        },
        {
          who: 'Mehaničar',
          hr: 'Možda Vam je akumulator prazan. Rade li svjetla?',
          en: 'Maybe your battery is dead. Do the lights work?',
        },
        {
          who: 'Nikola',
          hr: 'Ne rade. Možete li pogledati i kočnice?',
          en: 'They do not. Can you look at the brakes as well?',
        },
        {
          who: 'Mehaničar',
          hr: 'Mogu. Auto će biti gotov sutra poslijepodne.',
          en: 'I can. The car will be ready tomorrow afternoon.',
        },
        { who: 'Nikola', hr: 'Koliko će to koštati?', en: 'How much will that cost?' },
        {
          who: 'Mehaničar',
          hr: 'Oko sto eura. Akumulator nije skup.',
          en: 'About a hundred euros. A battery is not expensive.',
        },
        {
          who: 'Nikola',
          hr: 'Dobro. Onda sutra dolazim autobusom!',
          en: 'All right. Then tomorrow I am coming by bus!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what happened to Nikola yesterday, and when will his car be ready?',
          options: [
            'His engine overheated; the car will be ready today',
            'He got a parking fine; the car will be ready in a week',
            'He got a flat tire; the car will be ready tomorrow afternoon',
            'His brakes failed; the car will be ready tomorrow morning',
          ],
          correct: 2,
          hint: 'Yesterday’s problem happened on the highway. And Nikola says how he will come tomorrow.',
          explanation:
            'Yesterday he got a flat tire — probušila mi se guma — and today the car will not start. It will be ready tomorrow afternoon.',
        },
        {
          q: 'Nikola says "Auto mi se pokvario". Why is it "pokvario", and not "pokvarilo"?',
          options: [
            'Because Nikola is a man, and the verb agrees with the speaker',
            'Because the mechanic is a man',
            'Because it happened in the past, and the past always ends in -o',
            'Because auto, although it ends in -o, is a masculine noun',
          ],
          correct: 3,
          hint: 'The past form agrees with the subject. What is the subject here — and what gender is it really?',
          explanation:
            'The car is the subject, and auto is masculine in spite of its -o: Auto se pokvario, auto je gotov.',
        },
        {
          type: 'type',
          q: 'Now you. Your friend Ana got a flat tire. Say it about her: Probušila ____ se guma.',
          answer: 'joj',
          hint: 'It happened to her, so use the short dative of ona. It stands before se.',
          explanation:
            'Probušila joj se guma. — she got a flat tire. The dative says whose tire it was.',
        },
        {
          type: 'type',
          q: 'On the way to Split your engine overheated. Motor is masculine: ____ mi se motor.',
          answer: 'Pregrijao',
          hint: 'The verb is pregrijati se. Its past form agrees with motor, exactly as Nikola’s verb agrees with auto.',
          explanation: 'Pregrijao mi se motor. — my engine overheated.',
        },
        {
          type: 'transform',
          q: "It is not your car — it is your dad's (tata). Change the sentence.",
          from: 'Auto mi se pokvario.',
          answer: 'Tati se pokvario auto.',
          accept: ['Tati se auto pokvario.', 'Auto se tati pokvario.', 'Auto se pokvario tati.'],
          hint: 'Put tata in the dative and let it open the sentence; se comes right after it.',
          explanation:
            "Tati se pokvario auto. — Dad's car has broken down. A noun owner goes in the dative, just like mi.",
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each part of the car to its meaning.',
        pairs: [
          ['guma', 'tire'],
          ['kočnice', 'brakes'],
          ['volan', 'steering wheel'],
          ['brisači', 'wipers'],
          ['prtljažnik', 'trunk'],
        ],
        explanation:
          'Five words from the table. Prtljažnik comes from prtljaga, luggage — it is where the suitcases go.',
      },
      8,
      3,
      {
        type: 'sort',
        q: 'Is it part of a car, or something you find on the road?',
        groups: ['Part of a car', 'On the road'],
        items: [
          { hr: 'motor', group: 0 },
          { hr: 'semafor', group: 1 },
          { hr: 'akumulator', group: 0 },
          { hr: 'raskrižje', group: 1 },
          { hr: 'svjetla', group: 0 },
          { hr: 'kružni tok', group: 1 },
          { hr: 'volan', group: 0 },
          { hr: 'autocesta', group: 1 },
        ],
        explanation:
          'Motor, akumulator, svjetla and volan belong to the car. Semafor (traffic light), raskrižje (intersection), kružni tok (roundabout) and autocesta (highway) are on the road.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "We got a flat tire on the highway."',
        words: ['Probušila', 'nam', 'se', 'guma', 'na', 'autocesti.'],
        accept: [
          'Na autocesti nam se probušila guma.',
          'Guma nam se probušila na autocesti.',
          'Probušila nam se na autocesti guma.',
          'Na autocesti nam se guma probušila.',
        ],
        explanation:
          'Probušila nam se guma na autocesti. The short words stand second, the dative before se.',
      },
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Auto', 'će', 'biti', 'gotova', 'sutra.'],
        wrong: 3,
        answer: 'gotov',
        hint: 'The describing word must agree with auto. What gender is that noun?',
        explanation: 'Auto će biti gotov sutra. — auto is masculine, so it is gotov, not gotova.',
      },
      11,
      {
        type: 'tf',
        q: 'U Hrvatskoj se na autocesti smije voziti 150 kilometara na sat.',
        answer: false,
        hint: 'The lesson gives two speed limits: one for towns and one for the highway.',
        explanation:
          'False. On a Croatian autocesta the limit is 130 km/h; in towns it is 50 km/h.',
      },
      5,
      {
        type: 'transform',
        q: 'Put it in the past: this was last week.',
        from: 'Kočnice ne rade dobro.',
        answer: 'Kočnice nisu radile dobro.',
        accept: ['Kočnice nisu dobro radile.'],
        hint: 'Kočnice is a feminine plural: the past form ends in -e, and the helping verb is the negative of su.',
        explanation: 'Kočnice nisu radile dobro. — the brakes were not working well.',
      },
      10,
      {
        type: 'listen',
        audio: 'U kružnom toku uzmi drugi izlaz.',
        q: 'Your friend is reading the map and tells you this. What should you do?',
        options: [
          'Take the second exit at the roundabout',
          'Turn right at the traffic light',
          'Stop at the next intersection',
          'Park behind the gas station',
        ],
        correct: 0,
        hint: 'Tok is something that flows, and kružni comes from krug — a circle.',
        explanation: 'U kružnom toku uzmi drugi izlaz. — at the roundabout, take the second exit.',
      },
      4,
      {
        type: 'listen',
        audio: 'Na semaforu skreni desno, a onda vozi ravno do benzinske postaje.',
        q: 'Where do you turn right?',
        options: [
          'At the roundabout',
          'At the gas station',
          'At the traffic light',
          'On the highway',
        ],
        correct: 2,
        explanation:
          'Na semaforu skreni desno — turn right at the traffic light — and then drive straight on to the gas station.',
      },
      {
        type: 'dictate',
        audio: 'Velika je gužva, zakasnit ćemo.',
        answer: 'Velika je gužva, zakasnit ćemo.',
        hint: 'Five words: there is a lot of traffic, and what will happen to us because of it.',
        explanation:
          'Velika je gužva, zakasnit ćemo. — there is a big traffic jam; we are going to be late.',
      },
    ],
  },

  // ══ UNIT 10 ════════════════════════════════════════════════════════════════

  // ── Tickets, timetables, somewhere to stay ─────────────────────────────────
  'travel-transport': {
    text: {
      kind: 'dialogue',
      title: 'Trajekt za Hvar',
      lines: [
        {
          who: 'Mark',
          hr: 'Dobar dan. Kad polazi sljedeći trajekt za Hvar?',
          en: 'Good day. When does the next ferry to Hvar leave?',
        },
        {
          who: 'Službenica',
          hr: 'U podne. Putujete li autom?',
          en: 'At noon. Are you traveling by car?',
        },
        {
          who: 'Mark',
          hr: 'Ne, bez auta smo. U Split smo došli vlakom.',
          en: 'No, we do not have a car. We came to Split by train.',
        },
        {
          who: 'Službenica',
          hr: 'Dobro. Koliko karata trebate?',
          en: 'All right. How many tickets do you need?',
        },
        {
          who: 'Mark',
          hr: 'Dvije jednosmjerne karte, molim. Koliko traje put?',
          en: 'Two one-way tickets, please. How long does the trip take?',
        },
        {
          who: 'Službenica',
          hr: 'Dva sata. Trajekt dolazi na Hvar u dva.',
          en: 'Two hours. The ferry arrives on Hvar at two.',
        },
        {
          who: 'Mark',
          hr: 'Odlično! Na Hvaru imamo rezervaciju za apartman na tri noći.',
          en: 'Great! On Hvar we have a reservation for an apartment for three nights.',
        },
        {
          who: 'Službenica',
          hr: 'Lijepo. Izvolite karte i sretan put!',
          en: 'Lovely. Here are your tickets — have a good trip!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: how did Mark get to Split, and when does the ferry reach Hvar?',
          options: [
            'By car; the ferry arrives at noon',
            'By train; the ferry arrives at two',
            'By plane; the ferry arrives at three',
            'By train; the ferry arrives at noon',
          ],
          correct: 1,
          hint: 'The ferry leaves at one time and arrives two hours later. And Mark has no car.',
          explanation:
            'They came by train — došli smo vlakom. The ferry leaves at noon and arrives on Hvar at two.',
        },
        {
          q: 'Mark says "U Split smo došli vlakom". Why "vlakom", with no "s" in front of it?',
          options: [
            'Because s is used only before words that begin with a vowel',
            'Because vlakom is the object of the verb',
            'Because s is dropped in the past tense',
            'Because the means of transport is the instrumental on its own, without a preposition',
          ],
          correct: 3,
          hint: 'The train is HOW he traveled — a means, not company. How does Croatian mark a means?',
          explanation:
            'A means of transport takes the bare instrumental: vlakom, autom, trajektom. "S vlakom" is a mistake — s is for company, as in s prijateljem.',
        },
        {
          type: 'type',
          q: 'Now you. You are going to an island by boat (brod). Say how: Na otok idemo ____.',
          answer: 'brodom',
          hint: 'The means of transport: the instrumental of a masculine noun, with no preposition.',
          explanation: 'Na otok idemo brodom. — we are going to the island by boat.',
        },
        {
          type: 'type',
          q: 'You are waiting for a friend at the station. Ask when her bus gets in: Kad ____ autobus iz Rijeke?',
          answer: 'dolazi',
          hint: 'A schedule runs on two verbs: one for leaving and one for getting in. You need the second, in the on form.',
          explanation: 'Kad dolazi autobus iz Rijeke? — when does the bus from Rijeka arrive?',
        },
        {
          type: 'transform',
          q: 'Mark asks about the ferry to Hvar. Ask the same about the bus (autobus) to Rijeka.',
          from: 'Kad polazi sljedeći trajekt za Hvar?',
          answer: 'Kad polazi sljedeći autobus za Rijeku?',
          hint: 'Autobus is masculine like trajekt, so "sljedeći" stays. A destination after za is in the accusative — and Rijeka ends in -a.',
          explanation:
            'Kad polazi sljedeći autobus za Rijeku? — za + accusative for the destination: Rijeka → Rijeku.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each travel word to its meaning.',
        pairs: [
          ['peron', 'platform'],
          ['vozni red', 'schedule'],
          ['prtljaga', 'luggage'],
          ['kašnjenje', 'delay'],
          ['polazak', 'departure'],
        ],
        explanation:
          'Five words you will see on every station board. Kašnjenje comes from kasniti, to be late; polazak from polaziti, to depart.',
      },
      4,
      1,
      {
        type: 'sort',
        q: 'Vlak ___ … Which small word fits before each form of the town: za (it is going there) or iz (it is coming from there)?',
        groups: ['za — going there', 'iz — coming from there'],
        items: [
          { hr: '… Rijeku', group: 0 },
          { hr: '… Rijeke', group: 1 },
          { hr: '… Splita', group: 1 },
          { hr: '… Split', group: 0 },
          { hr: '… Zadar', group: 0 },
          { hr: '… Dubrovnika', group: 1 },
          { hr: '… Zagreb', group: 0 },
          { hr: '… Zadra', group: 1 },
        ],
        explanation:
          'za takes the accusative for the destination: za Rijeku, za Split. iz takes the genitive for the origin: iz Rijeke, iz Splita, iz Zadra.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "The bus to Zadar leaves from platform five."',
        words: ['Autobus', 'za', 'Zadar', 'polazi', 's', 'perona', 'pet.'],
        accept: ['S perona pet polazi autobus za Zadar.'],
        explanation: 'Autobus za Zadar polazi s perona pet. — s + genitive: from the platform.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Vlak', 'iz', 'Pula', 'kasni', 'dvadeset', 'minuta.'],
        wrong: 2,
        answer: 'Pule',
        hint: 'Look at the small word before the town. Which case does it take?',
        explanation:
          'Vlak iz Pule kasni dvadeset minuta. — after iz the town is in the genitive: Pula → Pule.',
      },
      6,
      {
        type: 'tf',
        q: 'A "jednosmjerna karta" takes you there and back.',
        answer: false,
        hint: 'Jedno- is "one", and smjer is a direction.',
        explanation:
          'False. A jednosmjerna karta is a one-way ticket. There and back is a povratna karta.',
      },
      0,
      {
        type: 'transform',
        q: 'You are not traveling alone after all. Ask for TWO tickets.',
        from: 'Jednu povratnu kartu za Split, molim.',
        answer: 'Dvije povratne karte za Split, molim.',
        hint: 'Start with the feminine word for "two". The adjective and the noun both change after it — Mark’s order in the dialogue shows how.',
        explanation: 'Dvije povratne karte za Split, molim. — after dvije: povratne karte.',
      },
      7,
      {
        type: 'listen',
        audio: 'Autobus za Pulu polazi u deset i petnaest s perona tri.',
        q: 'When does the bus leave, and from which platform?',
        options: [
          'At 3:15, from platform 10',
          'At 10:15, from platform 3',
          'At 10:50, from platform 3',
          'At 10:03, from platform 15',
        ],
        correct: 1,
        explanation: 'u deset i petnaest — at 10:15; s perona tri — from platform three.',
      },
      {
        type: 'dictate',
        audio: 'Je li doručak uključen u cijenu?',
        answer: 'Je li doručak uključen u cijenu?',
        hint: 'Six words: a question for the hotel reception about breakfast.',
        explanation: 'Je li doručak uključen u cijenu? — is breakfast included in the price?',
      },
    ],
  },

  // ── Trams, buses and where to get off ──────────────────────────────────────
  'public-transport': {
    text: {
      kind: 'dialogue',
      title: 'U tramvaju',
      lines: [
        {
          who: 'Sofia',
          hr: 'Oprostite, ide li ovaj tramvaj do Glavnog kolodvora?',
          en: 'Excuse me, does this tram go to the Main Station?',
        },
        {
          who: 'Gospođa',
          hr: 'Ne ide. Morate presjesti na šesticu.',
          en: 'It does not. You have to change to the number six.',
        },
        { who: 'Sofia', hr: 'A gdje moram sići?', en: 'And where do I have to get off?' },
        {
          who: 'Gospođa',
          hr: 'Siđite na trećoj stanici, na Trgu bana Jelačića.',
          en: 'Get off at the third stop, at Ban Jelačić Square.',
        },
        {
          who: 'Sofia',
          hr: 'Hvala Vam! Trebam li novu kartu?',
          en: 'Thank you! Do I need a new ticket?',
        },
        {
          who: 'Gospođa',
          hr: 'Ne trebate. Ali jeste li poništili kartu? Ovdje često dolazi kontrolor.',
          en: 'You do not. But have you validated your ticket? An inspector often comes here.',
        },
        {
          who: 'Sofia',
          hr: 'Joj, zaboravila sam! Odmah ću je poništiti.',
          en: 'Oh no, I forgot! I will validate it right away.',
        },
        {
          who: 'Gospođa',
          hr: 'Brzo! Ja se svaki dan vozim tramvajem i kontrolora vidim skoro svaki tjedan.',
          en: 'Quickly! I ride the tram every day and I see an inspector almost every week.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which tram does Sofia have to change to, and where does she get off this one?',
          options: [
            'The number three; at the sixth stop',
            'The number six; at the Main Station',
            'The number six; at the third stop',
            'No change is needed; at the third stop',
          ],
          correct: 2,
          hint: 'There are two numbers in the lady’s answers: one is a tram line, the other counts stops.',
          explanation:
            'She must change to the number six — presjesti na šesticu — and get off at the third stop, Ban Jelačić Square.',
        },
        {
          q: 'The lady says "Siđite na trećoj stanici". Why "na trećoj stanici", and not "na treću stanicu"?',
          options: [
            'Because stanica is plural here',
            'Because the stop is the place where you get off, so it is in the locative',
            'Because siđite is a polite form, and polite forms take the locative',
            'Because ordinal numbers never change their ending',
          ],
          correct: 1,
          hint: 'Is the stop a place you are moving INTO, or the place where something happens?',
          explanation:
            'Where you get off is a location, so na takes the locative: na trećoj stanici. The accusative "na treću stanicu" is a common mistake.',
        },
        {
          type: 'type',
          q: 'Now you. A tourist asks you where to get off. Tell her — at the NEXT stop: Siđite na ____ stanici.',
          answer: 'sljedećoj',
          hint: 'Take sljedeći and give it the same ending that "treći" has in the lady’s sentence.',
          explanation: 'Siđite na sljedećoj stanici. — get off at the next stop.',
        },
        {
          type: 'type',
          q: 'Say how you get to work — by bus: Na posao idem ____.',
          answer: 'autobusom',
          hint: 'The means of transport is the instrumental, with no preposition in front.',
          explanation: 'Na posao idem autobusom. — I go to work by bus.',
        },
        {
          type: 'transform',
          q: 'Sofia asks about the Main Station. Ask the same about the museum (muzej).',
          from: 'Ide li ovaj tramvaj do Glavnog kolodvora?',
          answer: 'Ide li ovaj tramvaj do muzeja?',
          hint: 'After do comes the genitive. Muzej is a masculine noun.',
          explanation: 'Ide li ovaj tramvaj do muzeja? — do + genitive: muzej → muzeja.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['vozni red', 'schedule'],
          ['kontrolor', 'ticket inspector'],
          ['mjesečna karta', 'monthly pass'],
          ['stanica', 'stop'],
          ['dolazak', 'arrival'],
        ],
        explanation:
          'Mjesečna comes from mjesec, month. A stanica is a tram or bus stop; trains and long-distance buses leave from a kolodvor.',
      },
      8,
      2,
      {
        type: 'sort',
        q: '"Ide li tramvaj do …?" or "Siđite na …"? Sort each phrase by the sentence it completes.',
        groups: ['Ide li tramvaj do …?', 'Siđite na …'],
        items: [
          { hr: 'Glavnog kolodvora', group: 0 },
          { hr: 'Glavnom kolodvoru', group: 1 },
          { hr: 'trećoj stanici', group: 1 },
          { hr: 'treće stanice', group: 0 },
          { hr: 'glavnog trga', group: 0 },
          { hr: 'glavnom trgu', group: 1 },
          { hr: 'prvoj stanici', group: 1 },
          { hr: 'prve stanice', group: 0 },
        ],
        explanation:
          'do takes the genitive: do Glavnog kolodvora, do treće stanice. Where you get off is na + locative: na Glavnom kolodvoru, na trećoj stanici.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "Where do you buy tram tickets?"',
        words: ['Gdje', 'se', 'kupuju', 'karte', 'za', 'tramvaj?'],
        accept: ['Gdje se karte za tramvaj kupuju?'],
        explanation:
          'Gdje se kupuju karte za tramvaj? — se stands second, and the verb is plural because karte is.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Morate', 'sići', 'na', 'sljedeću', 'stanici.'],
        wrong: 3,
        answer: 'sljedećoj',
        hint: 'The stop is the place where you get off. The describing word has to be in the same case as stanici.',
        explanation:
          'Morate sići na sljedećoj stanici. — na + locative, and sljedeći agrees with stanici.',
      },
      10,
      {
        type: 'tf',
        q: 'U Zagrebu kartu za tramvaj možete kupiti na kiosku ili kod vozača.',
        answer: true,
        hint: 'The lesson names two places to buy a tram ticket. One of them costs more.',
        explanation:
          'True. You buy tram tickets at a kiosk or, for a little more money, from the driver — and then you must validate the ticket.',
      },
      3,
      {
        type: 'transform',
        q: 'This was said to a friend. Say it politely to a stranger (Vi).',
        from: 'Siđi na Glavnom kolodvoru i presjedni na šesticu.',
        answer: 'Siđite na Glavnom kolodvoru i presjednite na šesticu.',
        hint: 'Both commands get the polite ending.',
        explanation: 'Siđite … i presjednite … — the polite imperative adds -te to both verbs.',
      },
      11,
      7,
      {
        type: 'listen',
        audio: 'Vlak za Rijeku kasni pola sata.',
        q: 'What is the news?',
        options: [
          'The train to Rijeka leaves in half an hour',
          'The train from Rijeka is half an hour late',
          'The train to Rijeka is half an hour late',
          'The train to Rijeka is canceled',
        ],
        correct: 2,
        explanation:
          'Vlak za Rijeku kasni pola sata. — za Rijeku is the destination, and kasni means it is late.',
      },
      {
        type: 'dictate',
        audio: 'Ide li ovaj autobus do bolnice?',
        answer: 'Ide li ovaj autobus do bolnice?',
        hint: 'Six words: you are checking that you are on the right bus — the one to the hospital.',
        explanation: 'Ide li ovaj autobus do bolnice? — does this bus go to the hospital?',
      },
    ],
  },

  // ── A formal call, a bad line, a message ───────────────────────────────────
  'phone-calls-a2': {
    text: {
      kind: 'dialogue',
      title: 'Poziv u hotel',
      lines: [
        {
          who: 'Recepcija',
          hr: 'Hotel Marjan, dobar dan, izvolite.',
          en: 'Hotel Marjan, good day, how can I help you?',
        },
        {
          who: 'Petra',
          hr: 'Dobar dan, ovdje Petra Jurić. Mogu li razgovarati s gospodinom Vukovićem?',
          en: 'Good day, this is Petra Jurić. May I speak with Mr. Vuković?',
        },
        {
          who: 'Recepcija',
          hr: 'Nažalost, gospodin Vuković trenutno nije u uredu. Želite li ostaviti poruku?',
          en: 'Unfortunately, Mr. Vuković is not in the office right now. Would you like to leave a message?',
        },
        {
          who: 'Petra',
          hr: 'Da, molim Vas. Zovem zbog rezervacije za subotu.',
          en: 'Yes, please. I am calling about a reservation for Saturday.',
        },
        {
          who: 'Recepcija',
          hr: 'Oprostite, loše se čuje. Biste li mogli ponoviti?',
          en: 'I am sorry, the line is bad. Could you repeat that?',
        },
        {
          who: 'Petra',
          hr: 'Naravno. Zovem zbog rezervacije za subotu. Recite mu, molim Vas: zvala je Petra Jurić.',
          en: 'Of course. I am calling about a reservation for Saturday. Please tell him: Petra Jurić called.',
        },
        {
          who: 'Recepcija',
          hr: 'Hoću, gospođo Jurić. Ima li gospodin Vuković Vaš broj?',
          en: 'I will, Mrs. Jurić. Does Mr. Vuković have your number?',
        },
        { who: 'Petra', hr: 'Ima. Hvala Vam, doviđenja!', en: 'He does. Thank you, goodbye!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why is Petra calling, and why does she have to say it twice?',
          options: [
            'About a meeting on Friday; the receptionist was busy',
            'About a reservation for Saturday; the line was bad',
            'About a reservation for Saturday; she had the wrong number',
            'About a job at the hotel; the call was cut off',
          ],
          correct: 1,
          hint: 'She gives her reason with "zbog". Then the receptionist apologizes for something.',
          explanation:
            'She is calling about a reservation for Saturday — zbog rezervacije za subotu — and the line was bad: loše se čuje.',
        },
        {
          q: 'Petra asks to speak "s gospodinom Vukovićem". Why do BOTH words change their ending?',
          options: [
            'Because she is speaking politely, and polite speech lengthens names',
            'Because Vuković is not in the office',
            'Because the sentence is a question',
            'Because s (with) takes the instrumental, and a title and a surname both go into it',
          ],
          correct: 3,
          hint: 'Look at the small word in front of them. Which case does it ask for?',
          explanation:
            'razgovarati s + instrumental: gospodin → gospodinom, Vuković → Vukovićem. Leaving them in the nominative is a common mistake.',
        },
        {
          type: 'type',
          q: 'Now you. You call an office and want Mrs. Novak: Mogu li razgovarati s ____ Novak?',
          answer: 'gospođom',
          hint: 'The title for a woman, gospođa, after s: the instrumental of a noun in -a.',
          explanation:
            'Mogu li razgovarati s gospođom Novak? — gospođa → gospođom. A woman’s surname ending in a consonant does not change.',
        },
        {
          type: 'type',
          q: 'A stranger answers — you have the wrong number. You are a woman: Oprostite, ____ sam broj.',
          answer: 'pogriješila',
          hint: 'A man says "pogriješio sam broj". The past form agrees with the speaker.',
          explanation: 'Oprostite, pogriješila sam broj. — sorry, I have the wrong number.',
        },
        {
          type: 'transform',
          q: 'This was said to a friend. Say it to a stranger at an office (Vi).',
          from: 'Možeš li nazvati kasnije?',
          answer: 'Možete li nazvati kasnije?',
          accept: ['Biste li mogli nazvati kasnije?'],
          hint: 'Only the first word changes: put moći in the Vi form.',
          explanation:
            'Možete li nazvati kasnije? — can you call later? More polite still: Biste li mogli nazvati kasnije?',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each sentence from a phone call to its meaning.',
        pairs: [
          ['Trenutak, spajam Vas.', 'One moment, I will put you through.'],
          ['Tko ga treba?', 'Who is asking for him?'],
          ['Nemam signala.', 'I have no signal.'],
          ['Baterija mi je prazna.', 'My battery is dead.'],
          ['Čujemo se!', 'Talk soon!'],
        ],
        explanation:
          'Five set phrases. Čujemo se — literally "we hear each other" — is how friends end a call.',
      },
      8,
      11,
      1,
      {
        type: 'sort',
        q: 'Who says it — the person who is CALLING, or the person who ANSWERS at the office?',
        groups: ['The caller', 'The person who answers'],
        items: [
          { hr: 'Mogu li razgovarati s gospođom Novak?', group: 0 },
          { hr: 'Trenutak, spajam Vas.', group: 1 },
          { hr: 'Želite li ostaviti poruku?', group: 1 },
          { hr: 'Zovem zbog sastanka.', group: 0 },
          { hr: 'Gospodin Babić je trenutno na sastanku.', group: 1 },
          { hr: 'Hvala, nazvat ću ponovno.', group: 0 },
        ],
        explanation:
          'The caller asks for someone, gives a reason and promises to call again. The office puts the call through, says who is out and offers to take a message.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order: "I would like to speak with Mr. Kovač." (a man is speaking)',
        words: ['Htio', 'bih', 'razgovarati', 's', 'gospodinom', 'Kovačem.'],
        accept: [
          'S gospodinom Kovačem bih htio razgovarati.',
          'Htio bih s gospodinom Kovačem razgovarati.',
        ],
        explanation:
          'Htio bih razgovarati s gospodinom Kovačem. — the conditional makes the request polite, and bih stands second.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Zovem', 'zbog', 'ispit', 'u', 'ponedjeljak.'],
        wrong: 2,
        answer: 'ispita',
        hint: 'The word before it gives the reason for the call. Which case follows it?',
        explanation: 'Zovem zbog ispita u ponedjeljak. — zbog takes the genitive: ispit → ispita.',
      },
      10,
      {
        type: 'tf',
        q: '"Nazovite mi sutra" is correct, because nazvati takes the dative.',
        answer: false,
        hint: 'Think of how you ask someone to call you back. Which short form of ja follows nazovite?',
        explanation:
          'False. nazvati takes the accusative: Nazovite me sutra. The dative mi after it is a common mistake.',
      },
      5,
      {
        type: 'transform',
        q: 'A woman is leaving this voicemail, not a man. Change the sentence.',
        from: 'Zvao sam zbog sastanka.',
        answer: 'Zvala sam zbog sastanka.',
        hint: 'One word agrees with the speaker.',
        explanation:
          'Zvala sam zbog sastanka. — the past form agrees with the woman who is speaking.',
      },
      {
        type: 'listen',
        audio: 'Ostavite poruku nakon zvučnog signala.',
        q: 'You call a friend and hear this. What should you do?',
        options: [
          'Speak after the beep',
          'Dial zero first',
          'Call again later',
          'Wait for the secretary',
        ],
        correct: 0,
        hint: 'Poruka is a message, and nakon means "after".',
        explanation:
          'Ostavite poruku nakon zvučnog signala. — leave a message after the tone. It is a voicemail greeting.',
      },
      3,
      {
        type: 'listen',
        audio: 'Nažalost, gospođa Novak je danas na sastanku. Možete li nazvati sutra?',
        q: 'What is the caller asked to do?',
        options: ['Leave a message', 'Call again tomorrow', 'Come to the meeting', 'Wait a moment'],
        correct: 1,
        explanation:
          'Mrs. Novak is in a meeting today — na sastanku — so the caller is asked to call tomorrow: Možete li nazvati sutra?',
      },
      {
        type: 'dictate',
        audio: 'Nemam signala, nazvat ću te kasnije.',
        answer: 'Nemam signala, nazvat ću te kasnije.',
        hint: 'Six words: a problem with your phone, and a promise to a friend.',
        explanation:
          'Nemam signala, nazvat ću te kasnije. — I have no signal; I will call you later.',
      },
    ],
  },

  // ── Inviting, accepting, refusing ──────────────────────────────────────────
  'plans-invitations': {
    text: {
      kind: 'dialogue',
      title: 'Što radiš u subotu?',
      lines: [
        {
          who: 'Bruno',
          hr: 'Bog! Što radiš u subotu navečer?',
          en: 'Hi! What are you doing on Saturday evening?',
        },
        {
          who: 'Lana',
          hr: 'Bog, Bruno! Još nemam planova. Zašto?',
          en: 'Hi, Bruno! I do not have any plans yet. Why?',
        },
        {
          who: 'Bruno',
          hr: 'U kinu je novi hrvatski film. Idemo?',
          en: 'There is a new Croatian movie at the theater. Shall we go?',
        },
        { who: 'Lana', hr: 'Može, rado! U koliko sati?', en: 'Sure, gladly! At what time?' },
        {
          who: 'Bruno',
          hr: 'Film počinje u osam. Nalazimo se u pola osam ispred kina?',
          en: 'The movie starts at eight. Shall we meet at seven thirty in front of the theater?',
        },
        {
          who: 'Lana',
          hr: 'Dogovoreno! A što kažeš na pizzu poslije filma?',
          en: 'Deal! And how about a pizza after the movie?',
        },
        {
          who: 'Bruno',
          hr: 'Nažalost, ne mogu. U nedjelju rano ujutro putujem u Osijek.',
          en: 'Unfortunately, I cannot. Early on Sunday morning I am traveling to Osijek.',
        },
        {
          who: 'Lana',
          hr: 'Šteta. Možda drugi put. Vidimo se u subotu!',
          en: 'Too bad. Maybe another time. See you on Saturday!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: when and where are Bruno and Lana meeting?',
          options: [
            'At 8:00, inside the movie theater',
            'At 8:30, in front of the pizzeria',
            'At 7:30, at the station',
            'At 7:30, in front of the movie theater',
          ],
          correct: 3,
          hint: 'The movie starts at one time; they meet half an hour before. Remember what "u pola osam" means.',
          explanation:
            'They are meeting u pola osam ispred kina — at seven thirty, in front of the theater. The movie itself starts at eight.',
        },
        {
          q: 'Bruno says "U nedjelju rano ujutro putujem u Osijek" — the present tense, although Sunday has not come yet. Why?',
          options: [
            'Because he travels to Osijek every Sunday',
            'Because a plan that is already arranged is said with the plain present',
            'Because putovati has no future tense',
            'Because he is already on his way',
          ],
          correct: 1,
          hint: 'English does the same thing: "I am traveling on Sunday".',
          explanation:
            'For something already fixed, Croatian uses the present: Večeras gledamo utakmicu, U nedjelju putujem… The future tense is correct too, but this is what people say.',
        },
        {
          type: 'type',
          q: 'Now you. You want to invite your friend Marija to a concert on Friday. First ask if she is free: Jesi li ____ u petak?',
          answer: 'slobodna',
          hint: 'The word for "free" has to agree with the person you are asking — a woman.',
          explanation: 'Jesi li slobodna u petak? — to a man it would be slobodan.',
        },
        {
          type: 'type',
          q: 'She says yes. Fix the time and place — at six, on the main square: ____ se u šest na glavnom trgu.',
          answer: 'Nalazimo',
          accept: ['Vidimo', 'Nađemo'],
          hint: 'Bruno uses this verb when he fixes the time in front of the theater. Use the we-form, in the present.',
          explanation:
            'Nalazimo se u šest na glavnom trgu. — we are meeting at six on the main square.',
        },
        {
          type: 'transform',
          q: 'This plan is already fixed, so a Croatian would not use the future tense here. Say it the natural way.',
          from: 'Sutra ću ići u Zagreb.',
          answer: 'Sutra idem u Zagreb.',
          hint: 'Use the plain present of ići, in the I-form.',
          explanation:
            'Sutra idem u Zagreb. — the present tense does the work for an arranged plan.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each answer to its meaning.',
        pairs: [
          ['Naravno!', 'Of course!'],
          ['Dogovoreno!', 'Agreed!'],
          ['Možda drugi put.', 'Maybe another time.'],
          ['Javit ću ti.', 'I will let you know.'],
          ['Rado!', 'Gladly!'],
        ],
        explanation:
          'Five short answers to an invitation. Javit ću ti is neither yes nor no — it buys you time.',
      },
      4,
      6,
      8,
      {
        type: 'sort',
        q: 'A friend has invited these people out. Is each one saying YES or NO?',
        groups: ['Says yes', 'Says no'],
        items: [
          { hr: 'Rado!', group: 0 },
          { hr: 'Žao mi je, radim u subotu.', group: 1 },
          { hr: 'Naravno, vidimo se!', group: 0 },
          { hr: 'Imam posla, možda drugi put.', group: 1 },
          { hr: 'Dogovoreno!', group: 0 },
          { hr: 'Rado bih došla, ali čuvam djecu.', group: 1 },
        ],
        explanation:
          'A polite no gives a reason or offers another time. "Rado bih došla, ali…" — I would gladly come, but… — is still a no.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "We are meeting at eight in front of the restaurant."',
        words: ['Nalazimo', 'se', 'u', 'osam', 'ispred', 'restorana.'],
        accept: ['U osam se nalazimo ispred restorana.', 'Nalazimo se ispred restorana u osam.'],
        explanation:
          'Nalazimo se u osam ispred restorana. — se stands second, and ispred takes the genitive.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sutra', 'idem', 'vlakom', 'u', 'Zagrebu.'],
        wrong: 4,
        answer: 'Zagreb',
        hint: 'You are going TO the city. Movement toward a place takes a different case from being in it.',
        explanation:
          'Sutra idem vlakom u Zagreb. — motion takes u + accusative. "U Zagrebu" says where you ARE.',
      },
      3,
      {
        type: 'tf',
        q: 'A bare "Ne mogu." is the most polite way to turn down an invitation in Croatian.',
        answer: false,
        hint: 'Think of how Bruno turned down the pizza. What did he put before those two words?',
        explanation:
          'False. A bare Ne mogu sounds abrupt. Soften it: Nažalost, ne mogu. Možda drugi put.',
      },
      {
        type: 'transform',
        q: 'You are inviting two friends at once, not one. Change the question.',
        from: 'Hoćeš li doći na ručak u nedjelju?',
        answer: 'Hoćete li doći na ručak u nedjelju?',
        hint: 'Only the first word changes — to the vi form of htjeti.',
        explanation:
          'Hoćete li doći na ručak u nedjelju? — will you (two) come to lunch on Sunday?',
      },
      11,
      {
        type: 'listen',
        audio: 'Što kažeš na kavu sutra ujutro?',
        q: 'A friend suggests this. You need to check your calendar first. What do you answer?',
        options: ['Dogovoreno!', 'Javit ću ti.', 'Dobar tek!', 'Vidimo se sutra!'],
        correct: 1,
        hint: 'You are saying neither yes nor no yet.',
        explanation:
          'Javit ću ti. — I will let you know. Dogovoreno and Vidimo se sutra would both be a yes.',
      },
      9,
      {
        type: 'listen',
        audio: 'Nalazimo se u pola sedam na glavnom trgu.',
        q: 'When and where are they meeting?',
        options: [
          'At 7:30 on the main square',
          'At 6:30 on the main square',
          'At 6:30 in front of the theater',
          'At 7:00 on the main square',
        ],
        correct: 1,
        explanation:
          'u pola sedam — six thirty (halfway TO seven); na glavnom trgu — on the main square.',
      },
      {
        type: 'dictate',
        audio: 'Hoćeš li ići na kavu?',
        answer: 'Hoćeš li ići na kavu?',
        hint: 'Five words: an invitation for a coffee, said to a friend.',
        explanation: 'Hoćeš li ići na kavu? — do you want to go for a coffee?',
      },
    ],
  },

  // ── Greetings for every celebration ────────────────────────────────────────
  'celebrations-holidays': {
    text: {
      kind: 'dialogue',
      title: 'Bakin rođendan',
      lines: [
        {
          who: 'Jakov',
          hr: 'Sretan rođendan, bako! Sve najbolje!',
          en: 'Happy birthday, Grandma! All the best!',
        },
        {
          who: 'Baka',
          hr: 'Hvala, zlato! Uđi, uđi.',
          en: 'Thank you, sweetheart! Come in, come in.',
        },
        {
          who: 'Jakov',
          hr: 'Donio sam ti cvijeće i kolač.',
          en: 'I have brought you flowers and a cake.',
        },
        {
          who: 'Baka',
          hr: 'Baš lijepo! A znaš li da je teti Ani danas imendan?',
          en: 'How lovely! And do you know that it is Aunt Ana’s name day today?',
        },
        {
          who: 'Jakov',
          hr: 'Stvarno? Onda i njoj moram čestitati. Sretan imendan!',
          en: 'Really? Then I must congratulate her too. Happy name day!',
        },
        {
          who: 'Teta Ana',
          hr: 'Hvala ti, Jakove! A ja tebi čestitam na diplomi!',
          en: 'Thank you, Jakov! And I congratulate you on your degree!',
        },
        {
          who: 'Baka',
          hr: 'Sad smo svi tu. Podignimo čaše!',
          en: 'Now we are all here. Let us raise our glasses!',
        },
        { who: 'Svi', hr: 'Živjeli! U zdravlje!', en: 'Cheers! To your health!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did Jakov bring, and what is Aunt Ana celebrating?',
          options: [
            'Wine and flowers; her birthday',
            'A cake and wine; her degree',
            'Flowers and a cake; her name day',
            'Flowers and a cake; her wedding anniversary',
          ],
          correct: 2,
          hint: 'Three people have something to celebrate: a birthday, a name day and a degree. Which one is the aunt’s?',
          explanation:
            'Jakov brought flowers and a cake — cvijeće i kolač. It is Grandma’s birthday, Aunt Ana’s name day, and Jakov has his degree.',
        },
        {
          q: 'Think about what the lesson says about name days. On which date is this family most likely celebrating?',
          options: ['June 24', 'July 26', 'August 15', 'December 25'],
          correct: 1,
          hint: 'A name day is the feast of the saint you are named after. Whose name day is it — and when does every woman with that name celebrate?',
          explanation:
            'It is Ana’s imendan, and every Ana celebrates on July 26. June 24 is for every Ivan.',
        },
        {
          type: 'type',
          q: 'Now you. It is December and you are writing a card to the whole family. Wish them happy holidays: ____ blagdani!',
          answer: 'Sretni',
          hint: 'The greeting agrees with what follows it. Blagdani is a masculine plural.',
          explanation: 'Sretni blagdani! — the plural of sretan, to agree with blagdani.',
        },
        {
          type: 'type',
          q: 'Your friend has just started a new job (posao). Congratulate her: Čestitam ti na novom ____!',
          answer: 'poslu',
          hint: 'After čestitati na comes the locative. Posao loses its -ao here — think of how you say "at work".',
          explanation: 'Čestitam ti na novom poslu! — čestitati na + locative: posao → poslu.',
        },
        {
          type: 'transform',
          q: 'It is not a birthday now — it is midnight on December 31. Change the greeting to "Happy New Year!"',
          from: 'Sretan rođendan!',
          answer: 'Sretna Nova godina!',
          accept: ['Sretna nova godina!'],
          hint: 'Godina is feminine, so the first word changes its ending too.',
          explanation: 'Sretna Nova godina! — sretan agrees with the feminine noun godina.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each holiday to its date.',
        pairs: [
          ['Božić', 'December 25'],
          ['Badnjak', 'December 24'],
          ['Nova godina', 'January 1'],
          ['Velika Gospa', 'August 15'],
          ['Svi sveti', 'November 1'],
        ],
        explanation:
          'Badnjak is Christmas Eve, the day before Božić. Velika Gospa, the Assumption, falls in the middle of summer.',
      },
      4,
      5,
      8,
      {
        type: 'sort',
        q: 'Sretan, Sretna or Sretni? Sort each word by the greeting it needs.',
        groups: ['Sretan …', 'Sretna …', 'Sretni …'],
        items: [
          { hr: 'Uskrs', group: 0 },
          { hr: 'godišnjica', group: 1 },
          { hr: 'blagdani', group: 2 },
          { hr: 'imendan', group: 0 },
          { hr: 'nova školska godina', group: 1 },
          { hr: 'put', group: 0 },
          { hr: 'uskrsni blagdani', group: 2 },
        ],
        explanation:
          'The greeting agrees with its noun: masculine Uskrs, imendan and put take sretan; feminine godišnjica and godina take sretna; plural blagdani takes sretni.',
      },
      6,
      10,
      {
        type: 'order',
        q: 'Put the words in order: "We are at Grandma\'s for Christmas."',
        words: ['Za', 'Božić', 'smo', 'kod', 'bake.'],
        accept: ['Kod bake smo za Božić.'],
        explanation:
          'Za Božić smo kod bake. — smo stands second, after the opening phrase za Božić.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ivanu', 'je', 'imendan', 'dvadeset', 'četvrti', 'lipnja.'],
        wrong: 4,
        answer: 'četvrtog',
        hint: 'The sentence says WHEN his name day is. Which case does a date take when it answers "when"?',
        explanation:
          'Ivanu je imendan dvadeset četvrtog lipnja. — a date that says "when" is in the genitive.',
      },
      {
        type: 'tf',
        q: 'Kad netko podigne čašu i kaže „Živjeli!”, odgovaramo „Dobar tek!”.',
        answer: false,
        hint: 'One of these belongs to raised glasses, the other to the start of a meal.',
        explanation:
          'False. You answer a toast with Živjeli! or U zdravlje! — Dobar tek is what you say before eating.',
      },
      {
        type: 'transform',
        q: 'Your friend has also moved. Now congratulate her on her new apartment (stan).',
        from: 'Čestitam ti na novom poslu!',
        answer: 'Čestitam ti na novom stanu!',
        hint: 'Stan is masculine. After čestitati na it has to go in the locative, and the adjective before it stays as it is.',
        explanation: 'Čestitam ti na novom stanu! — čestitati na + locative: stan → stanu.',
      },
      {
        type: 'listen',
        audio: 'Sretna ti Nova godina, i puno zdravlja!',
        q: 'When would you say this?',
        options: ['At Easter', 'On a name day', 'On January 1', 'At a wedding'],
        correct: 2,
        explanation:
          'Sretna ti Nova godina, i puno zdravlja! — Happy New Year to you, and good health!',
      },
      {
        type: 'dictate',
        audio: 'Čestitam na diplomi!',
        answer: 'Čestitam na diplomi!',
        hint: 'Three words: what you say to someone who has just finished university.',
        explanation: 'Čestitam na diplomi! — congratulations on your degree!',
      },
    ],
  },
};
