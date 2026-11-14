// functions/api/content/_data/a1new/batch03.js
//
// New A1 lessons, batch 03 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// verbs-ati-irati (27) · accusative-animate (30) · at-the-hotel (32) · trebati-need (34)
// · smjeti-permission (35) · money-exchange (36).
//
// Grammar fence, per lesson (masterOrder): a lesson uses only what was taught at or before
// its own position.
//   27 — present tense, negation, li-questions; objects only where the accusative cannot
//        show (masculine things, neuter nouns), because the cases arrive at 28.
//   30 — the accusative of 29, deepened for masculine living nouns. No locative, no
//        genitive, no imati (31).
//   32 — accusative, imati, -irati verbs. No locative (49), no instrumental (74), no
//        modals (33), no number + noun counting.
//   34 — modals of 33, accusative incl. living nouns. No "Treba mi …": its mi is a dative
//        pronoun (63/65), and the book's L6 uses only trebam + accusative or infinitive.
//   35 — modals, trebati, the infinitive.
//   36 — no number + noun forms (dva eura, pet centi): they need the genitive (78) and
//        numbers + genitive (84). Prices are written in figures (2 €) for the learner to
//        read, as the book's Lesson 6 does before its Lesson 17.

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'verbs-ati-irati',
    masterOrder: 27,
    prerequisites: ['present-tense-verbs', 'negation'],
    objectives: [
      'Conjugate any -ati verb: gledam, gledaš, gleda, gledamo, gledate, gledaju',
      'Use the international -irati verbs: studiram, telefoniram, organiziram',
      'Tell studirati (study at university) from učiti (learn)',
    ],
  },
  {
    id: 'accusative-animate',
    masterOrder: 30,
    prerequisites: ['accusative-intro'],
    objectives: [
      'Put a person or an animal into the object form: Vidim brata, Čekam prijatelja',
      'Keep a masculine thing unchanged: Vidim stol, Kupujem auto',
      'Make the adjective and possessive follow: Poznajem tvoga novog susjeda',
      'Ask Koga? for a living object and Što? for a thing',
    ],
  },
  {
    id: 'at-the-hotel',
    masterOrder: 32,
    prerequisites: ['imati-nemati', 'accusative-animate', 'verbs-ati-irati'],
    objectives: [
      'Check in politely: Dobar dan, imam rezervaciju',
      'Ask for a room: Imate li slobodnu dvokrevetnu sobu?',
      'Ask about breakfast, the lift and the wifi, and report what does not work',
    ],
  },
  {
    id: 'trebati-need',
    masterOrder: 34,
    prerequisites: ['modals-basic', 'accusative-animate'],
    objectives: [
      'Say what you need: Trebam kartu, Trebamo liječnika',
      'Say what you need to do: Trebam ići u grad',
      'Ask what someone needs and refuse politely: Što trebaš? Ne treba, hvala',
    ],
  },
  {
    id: 'smjeti-permission',
    masterOrder: 35,
    prerequisites: ['modals-basic', 'trebati-need'],
    objectives: [
      'Ask for permission: Smijem li ući?',
      'Say what is not allowed: Ovdje ne smijete pušiti',
      'Tell ne moraš (you do not have to) from ne smiješ (you must not)',
      'Read the signs Zabranjeno pušiti, Zabranjeno parkirati',
    ],
  },
  {
    id: 'money-exchange',
    masterOrder: 36,
    prerequisites: ['trebati-need', 'numbers-time'],
    objectives: [
      'Know the Croatian currency: the euro since 2023, the kuna before it',
      'Ask the price and read it: Koliko košta? Koliko je to? — 15,50 €',
      'Change money and find cash: mjenjačnica, tečaj, bankomat, gotovina',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Verbs in -ati and -irati
  // ─────────────────────────────────────────────────────────
  {
    id: 'verbs-ati-irati',
    title: 'Verbs in -ati and -irati',
    subtitle: 'studiram, telefoniram, organiziram — the easiest verb family',
    icon: '📚',
    level: 'A1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'One Pattern, Hundreds of Verbs',
        body: 'You already know gledati → gledam (I watch). That same pattern also carries a large family of international verbs ending in -irati: studirati (to study at university), telefonirati (to phone), organizirati (to organise). If you can guess the English, you can often guess the Croatian — and every one of them conjugates exactly like gledati.',
        icon: '📚',
      },
      {
        type: 'rule',
        title: 'The -ati Pattern',
        body: 'Take the infinitive (the dictionary form, ending in -ti) and remove -ti. What is left ends in -a: čita-ti → čita-. Now add one ending per person: -m (I), -š (you), nothing (he, she, it), -mo (we), -te (you all, or polite you), -ju (they). čitam, čitaš, čita, čitamo, čitate, čitaju. The -a- stays in every form.',
        highlight: 'čita-ti → čita-m',
      },
      {
        type: 'table',
        title: 'Three Verbs, One Pattern',
        headers: ['Person', 'gledati (watch)', 'studirati (study)', 'organizirati (organise)'],
        rows: [
          ['ja', 'gledam', 'studiram', 'organiziram'],
          ['ti', 'gledaš', 'studiraš', 'organiziraš'],
          ['on / ona / ono', 'gleda', 'studira', 'organizira'],
          ['mi', 'gledamo', 'studiramo', 'organiziramo'],
          ['vi', 'gledate', 'studirate', 'organizirate'],
          ['oni / one / ona', 'gledaju', 'studiraju', 'organiziraju'],
        ],
      },
      {
        type: 'rule',
        title: 'The -irati Verbs Are International',
        body: 'Croatian borrowed many verbs from Latin, German and French and gave them the ending -irati. studirati — to study (at university). telefonirati — to phone. organizirati — to organise. rezervirati — to book. trenirati — to train. parkirati — to park. fotografirati — to take photos. kontrolirati — to check. The -ir- stays in every form: studiram, never "studam". And every -irati verb is regular, so the table above is all you need.',
        highlight: '-irati → -iram',
      },
      {
        type: 'rule',
        title: 'A Few -ati Verbs Break the Rule',
        body: 'Most verbs in -ati behave like gledati, but a handful of very common ones change their stem: pisati → pišem (I write), zvati → zovem (I call). You will meet those one by one. The good news is that the -irati family never does this — studirati is always studiram.',
        highlight: 'pisati → pišem',
      },
      {
        type: 'rule',
        title: 'Studirati or Učiti?',
        body: 'English "study" covers two Croatian verbs. studirati means studying a subject at university: Studiram pravo. (I study law.) učiti means learning in general — a language, for a test, at home: Učim hrvatski. (I am learning Croatian.) učiti belongs to the -iti family you already know: učim, učiš, uči. A university student does both: Studiram pravo i učim svaki dan.',
        highlight: 'Učim hrvatski.',
      },
      {
        type: 'example',
        title: 'Everyday -irati Verbs',
        items: [
          {
            hr: 'Studiram pravo, a moja sestra radi.',
            en: 'I study law, and my sister works.',
            note: 'studirati → studiram',
          },
          {
            hr: 'Mama telefonira svaki dan.',
            en: 'Mum phones every day.',
            note: 'ona → telefonira, no ending added',
          },
          {
            hr: 'Ivan organizira izlet.',
            en: 'Ivan is organising a trip.',
            note: 'organizirati → organizira',
          },
          {
            hr: 'Večeras rezerviramo stol.',
            en: 'Tonight we are booking a table.',
            note: 'mi → rezerviramo',
          },
          { hr: 'Gdje parkiraš auto?', en: 'Where do you park the car?', note: 'ti → parkiraš' },
          {
            hr: 'Turisti fotografiraju more.',
            en: 'The tourists are taking photos of the sea.',
            note: 'oni → fotografiraju',
          },
          {
            hr: 'Ana trenira tenis svaki dan.',
            en: 'Ana trains at tennis every day.',
            note: 'trenirati → trenira',
          },
          {
            hr: 'Sutra organiziramo koncert.',
            en: 'Tomorrow we are organising a concert.',
            note: 'mi → organiziramo',
          },
        ],
      },
      {
        type: 'example',
        title: 'Questions and Negatives',
        items: [
          {
            hr: 'Što studiraš? — Studiram hrvatski i engleski.',
            en: 'What do you study? — I study Croatian and English.',
            note: 'the question and the answer use the same pattern',
          },
          {
            hr: 'Studirate li ovdje?',
            en: 'Do you study here?',
            note: 'polite vi → studirate, then li',
          },
          {
            hr: 'Oni ne studiraju, oni rade.',
            en: 'They do not study, they work.',
            note: 'ne goes straight in front of the verb',
          },
          {
            hr: 'Kuham ručak, a ti čitaš.',
            en: 'I am cooking lunch, and you are reading.',
            note: 'kuhati and čitati are plain -ati verbs',
          },
          {
            hr: 'Slušamo radio i čekamo autobus.',
            en: 'We are listening to the radio and waiting for the bus.',
            note: 'slušati, čekati → slušamo, čekamo',
          },
          {
            hr: 'Telefonira li Marko često?',
            en: 'Does Marko phone often?',
            note: 'the verb first, then li',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "We study law"?',
        options: ['Studiram pravo.', 'Studiramo pravo.', 'Studiraju pravo.', 'Studirate pravo.'],
        correct: 1,
        explanation: '"We" takes -mo: studiramo. -m is "I", -ju is "they", -te is "you all".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You are learning Croatian from an app. Which sentence fits best?',
        options: ['Studiraju hrvatski.', 'Učim hrvatski.', 'Studiram pravo.'],
        correct: 1,
        explanation:
          'Learning in general is učiti: Učim hrvatski. studirati is for a subject at university.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, dropping the -ir-: "studam" — the whole stem stays, so it is studiram. Second, the "they" form: it is always -ju after the -a-, so oni studiraju, oni organiziraju, never "studiru". Third, using studirati for any kind of learning: for a language course or homework, say Učim hrvatski.',
        highlight: 'oni studiraju',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Mi ___ hrvatski." (studirati)',
            options: ['studiramo', 'studiraju', 'studirate', 'studiram'],
            correct: 0,
            explanation: '"Mi" takes -mo: studiramo.',
          },
          {
            q: 'Complete: "Oni ___ izlet." (organizirati)',
            options: ['organizira', 'organiziraju', 'organiziramo', 'organiziraš'],
            correct: 1,
            explanation: '"Oni" takes -ju: organiziraju.',
          },
          {
            q: 'You ask a friend where they park the car. Which is right?',
            options: [
              'Gdje parkiram auto?',
              'Gdje parkiraju auto?',
              'Gdje parkiraš auto?',
              'Gdje parkira auto?',
            ],
            correct: 2,
            explanation: 'To a friend you use ti, and ti takes -š: parkiraš.',
          },
          {
            q: 'Which ending goes with "ti" in this verb family?',
            options: ['-m', '-mo', '-ju', '-š'],
            correct: 3,
            explanation: 'ti → -š: gledaš, studiraš.',
          },
          {
            q: 'Which verb means "to study at university"?',
            options: ['učiti', 'studirati', 'čitati', 'gledati'],
            correct: 1,
            explanation: 'studirati is university study; učiti is learning in general.',
          },
          {
            q: 'Complete: "Ana ___ tenis svaki dan." (trenirati)',
            options: ['treniraju', 'treniram', 'trenira', 'treniraš'],
            correct: 2,
            explanation: 'ona takes no ending after the -a-: trenira.',
          },
        ],
      },
      {
        type: 'summary',
        title: '-ati and -irati — Key Takeaways',
        points: [
          'Remove -ti, keep the -a-, add -m, -š, —, -mo, -te, -ju',
          'studirati → studiram, studiraš, studira, studiramo, studirate, studiraju',
          'Every -irati verb is regular: telefoniram, organiziram, rezerviram, parkiram',
          'A few -ati verbs change their stem: pisati → pišem, zvati → zovem',
          'studirati = study at university; učiti = learn: Učim hrvatski.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Alive or Not — masculine objects
  // ─────────────────────────────────────────────────────────
  {
    id: 'accusative-animate',
    title: 'Alive or Not: Masculine Objects',
    subtitle: 'Vidim brata — but Vidim stol',
    icon: '🧍',
    level: 'A1',
    duration: '~8 min',
    color: '#be123c',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'The One Question to Ask',
        body: 'In the last lesson you met the object form (the accusative — the form a noun takes when the verb acts on it). Feminine -a became -u, and neuter nouns never changed. Masculine nouns are the interesting ones: before choosing the ending you ask one question — is it alive? A brother, a friend, a dog: yes. A table, a car, a film: no. This lesson practises that question until it is automatic.',
        icon: '🧍',
      },
      {
        type: 'rule',
        title: 'Koga? or Što?',
        body: 'Croatian even has two different question words for the object. Koga? (whom?) asks about a person or an animal. Što? (what?) asks about a thing. Koga vidiš? — Vidim brata. (Whom do you see? — I see my brother.) Što vidiš? — Vidim stol. (What do you see? — I see a table.) If the natural question is Koga?, a masculine noun adds -a.',
        highlight: 'Koga vidiš? — Vidim brata.',
      },
      {
        type: 'rule',
        title: 'Who Counts as Alive',
        body: 'People: brat → brata, prijatelj → prijatelja, susjed (neighbour) → susjeda. Names: Ivan → Ivana, Marko → Marka. Jobs: konobar (waiter) → konobara, liječnik (doctor) → liječnika, profesor → profesora. Animals: konj (horse) → konja, pas → psa. Everything else that is masculine — stol, auto, grad, film, mobitel — stays exactly as it is.',
        highlight: 'Ivan → Ivana',
      },
      {
        type: 'table',
        title: 'Alive and Not Alive, Side by Side',
        headers: ['Subject form', 'Alive?', 'Object form', 'Example'],
        rows: [
          ['brat', 'yes', 'brata', 'Vidim brata.'],
          ['prijatelj', 'yes', 'prijatelja', 'Čekam prijatelja.'],
          ['konobar', 'yes', 'konobara', 'Tražim konobara.'],
          ['Marko', 'yes', 'Marka', 'Zovem Marka.'],
          ['stol', 'no', 'stol', 'Vidim stol.'],
          ['auto', 'no', 'auto', 'Kupujem auto.'],
          ['film', 'no', 'film', 'Gledam film.'],
        ],
      },
      {
        type: 'rule',
        title: 'Masculine Words in -a Go Like Feminine',
        body: 'A few masculine nouns end in -a: tata (dad), kolega (colleague), and names like Luka and Nikola. They are men, but their ending decides the object form, so they change -a to -u just like sestra → sestru. Volim tatu. Zovem kolegu. Vidim Luku. Never "tataa" or "tata" unchanged.',
        highlight: 'Volim tatu.',
      },
      {
        type: 'rule',
        title: 'First Names and Surnames',
        body: "A first name follows the rules you know: Ivan → Ivana, Marko → Marka, Ana → Anu, Iva → Ivu. A man's surname changes like any masculine noun: Poznajem Ivana Marića. Čekam gospodina Horvata. A woman's surname does not change at all — only her first name does: Poznajem Ivu Marić. Čekam gospođu Horvat. So the same surname looks different for a man and a woman: Zovem Marka Kovača, but Zovem Anu Kovač.",
        highlight: 'Poznajem Ivu Marić.',
      },
      {
        type: 'rule',
        title: 'The Adjective Follows: -og and -eg',
        body: 'When a living masculine noun takes -a, the word describing it takes -og: dobar prijatelj → dobrog prijatelja, nov susjed → novog susjeda, mlad liječnik → mladog liječnika. When the describing word ends in a soft consonant (č, ć, dž, đ, j, lj, nj, š, ž, c), the ending is -eg instead: naš → našeg, vaš → vašeg, vruć → vrućeg. The possessives moj and tvoj are the everyday exception: they shorten to mog or moga, tvog or tvoga (mojeg and tvojeg exist too, but are rarer). For a thing nothing moves: Vidim novi auto.',
        highlight: 'Vidim novi auto i novog susjeda.',
      },
      {
        type: 'rule',
        title: 'Neuter Living Things Do Not Change',
        body: 'The alive question is only for masculine nouns. dijete (child) is neuter, so it stays as it is: Čekam dijete. And in the plural the question disappears altogether: a masculine plural object ends in -e whether it is alive or not — prijatelji → Čekam prijatelje, stolovi → Kupujem stolove.',
        highlight: 'Čekam dijete.',
      },
      {
        type: 'example',
        title: 'People and Animals',
        items: [
          {
            hr: 'Vidim brata i sestru.',
            en: 'I see my brother and my sister.',
            note: 'brat → brata, sestra → sestru',
          },
          {
            hr: 'Čekam prijatelja već dugo.',
            en: 'I have been waiting for a friend for a long time.',
            note: 'prijatelj is alive → prijatelja',
          },
          {
            hr: 'Zovem Ivana i Marka.',
            en: 'I am calling Ivan and Marko.',
            note: 'names add -a too',
          },
          {
            hr: 'Tražim konobara.',
            en: 'I am looking for the waiter.',
            note: 'a job is a person → konobara',
          },
          {
            hr: 'Poznaješ li mog susjeda?',
            en: 'Do you know my neighbour?',
            note: 'moj → mog, susjed → susjeda',
          },
          { hr: 'Volim tatu i mamu.', en: 'I love Dad and Mum.', note: 'tata ends in -a → tatu' },
          {
            hr: 'Danas upoznajem novog kolegu.',
            en: 'Today I am meeting a new colleague.',
            note: 'kolega → kolegu, but the adjective is masculine: novog',
          },
          {
            hr: 'Slušamo profesora.',
            en: 'We are listening to the professor.',
            note: 'profesor → profesora',
          },
        ],
      },
      {
        type: 'example',
        title: 'Alive Against Not Alive',
        items: [
          {
            hr: 'Vidim novi auto i novog susjeda.',
            en: 'I see a new car and a new neighbour.',
            note: 'the car stays, the neighbour changes',
          },
          {
            hr: 'Gledam film, a ne glumca.',
            en: 'I am watching the film, not the actor.',
            note: 'glumac → glumca: alive, and the a drops out',
          },
          {
            hr: 'Kupujem stol i čekam prijatelja.',
            en: 'I am buying a table and waiting for a friend.',
            note: 'stol unchanged, prijatelja changed',
          },
          {
            hr: 'Čekam dijete.',
            en: 'I am waiting for the child.',
            note: 'dijete is neuter → no change',
          },
          {
            hr: 'Vidim psa, a ne mačku.',
            en: 'I see a dog, not a cat.',
            note: 'pas → psa, mačka → mačku',
          },
          {
            hr: 'Čekamo prijatelje.',
            en: 'We are waiting for our friends.',
            note: 'masculine plural object → -e',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am waiting for Marko"?',
        options: ['Čekam Marko.', 'Čekam Marka.', 'Čekam Marku.', 'Čekam Markom.'],
        correct: 1,
        explanation: 'Marko is a living masculine noun, so it takes -a: Marka.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence is correct?',
        options: ['Vidim novog auta.', 'Vidim novi auto.', 'Vidim nova auta.'],
        correct: 1,
        explanation:
          'A car is not alive, so neither the noun nor the adjective changes: novi auto.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, forgetting the -a on a person: "Čekam prijatelj" — a friend is alive, so Čekam prijatelja. Second, adding -a to a thing: "Kupujem auta" — a car is not alive, so Kupujem auto. Third, leaving the adjective behind: "Vidim dobar prijatelja" — the adjective moves with the noun: Vidim dobrog prijatelja.',
        highlight: 'Čekam prijatelja',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Čekam ___." (prijatelj — a friend)',
            options: ['prijatelj', 'prijatelju', 'prijatelja', 'prijatelji'],
            correct: 2,
            explanation: 'A friend is alive: prijatelja.',
          },
          {
            q: 'Complete: "Vidim ___." (a table)',
            options: ['stola', 'stol', 'stolu', 'stolovi'],
            correct: 1,
            explanation: 'A table is not alive, so it does not change: stol.',
          },
          {
            q: 'Complete: "Zovem ___." (tata — Dad)',
            options: ['tatu', 'tata', 'tatom', 'tati'],
            correct: 0,
            explanation: 'tata ends in -a, so it changes like a feminine noun: tatu.',
          },
          {
            q: 'Which sentence says "I know your new neighbour" (a man)?',
            options: [
              'Poznajem tvoj novi susjed.',
              'Poznajem tvoga novog susjeda.',
              'Poznajem tvoja nova susjeda.',
              'Poznajem tvoju novu susjedu.',
            ],
            correct: 1,
            explanation: 'susjed is alive → susjeda, and both words before it follow: tvoga novog.',
          },
          {
            q: 'Which question word asks about a living object?',
            options: ['Gdje?', 'Kada?', 'Što?', 'Koga?'],
            correct: 3,
            explanation: 'Koga? asks "whom?"; Što? asks about a thing.',
          },
          {
            q: 'Complete: "Volim ___." (moj pas — my dog)',
            options: ['moj pas', 'moga pasa', 'moga psa', 'moj psa'],
            correct: 2,
            explanation: 'A dog is alive: pas → psa (the a drops out), and moj follows: moga psa.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Alive or Not — Key Takeaways',
        points: [
          'Ask: is the masculine noun alive? Yes → add -a: brat → brata',
          'People, names, jobs and animals count as alive: Ivana, konobara, psa',
          'Masculine things stay unchanged: Vidim stol, Kupujem auto',
          'Masculine words in -a change -a to -u: tatu, kolegu, Luku',
          'The adjective follows with -og / -eg: dobrog prijatelja, našeg susjeda',
          'Koga? for people and animals, Što? for things',
          "A woman's surname never changes: Poznajem Ivu Marić, but Poznajem Ivana Marića",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // At the Hotel
  // ─────────────────────────────────────────────────────────
  {
    id: 'at-the-hotel',
    title: 'At the Hotel',
    subtitle: 'Checking in, asking for a room, and saying what does not work',
    icon: '🏨',
    level: 'A1',
    duration: '~7 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Your First Conversation at Reception',
        body: 'A hotel reception is the perfect first real conversation: it always follows the same steps. You greet, you say you have a booking or ask for a room, you hand over your passport, you get a key. Everything you need is already in your toolbox — imati, the object form, and the polite vi.',
        icon: '🏨',
      },
      {
        type: 'rule',
        title: 'Polite Vi at Reception',
        body: 'You do not know the receptionist, so you use vi (the polite "you"), and the verb takes -te: Imate li…? (Do you have…?) Govorite li engleski? (Do you speak English?) The receptionist does the same with you: Imate li rezervaciju? Saying "Imaš li sobu?" to a receptionist sounds as if you had known them since school.',
        highlight: 'Imate li slobodnu sobu?',
      },
      {
        type: 'rule',
        title: 'The Room Is an Object',
        body: 'What you have, want or book is an object, so it takes the object form. soba → sobu, rezervacija → rezervaciju. The words describing it follow: slobodna soba (a free room) → Imate li slobodnu sobu? jednokrevetna soba (a single room) → Rezerviram jednokrevetnu sobu. dvokrevetna soba is a double room.',
        highlight: 'slobodna soba → slobodnu sobu',
      },
      {
        type: 'table',
        title: 'Reception Phrases',
        headers: ['Croatian', 'English'],
        rows: [
          ['Imam rezervaciju.', 'I have a booking.'],
          ['Na koje ime?', 'Under what name?'],
          ['Vašu putovnicu, molim.', 'Your passport, please.'],
          ['Izvolite ključ.', 'Here is your key.'],
          ['Doručak je uključen.', 'Breakfast is included.'],
          ['Ugodan boravak!', 'Enjoy your stay!'],
          ['Račun, molim.', 'The bill, please.'],
        ],
      },
      {
        type: 'rule',
        title: 'How Long You Stay',
        body: 'Use ostajem (I am staying) with a length of time in the object form. noć (night) never changes: Ostajem jednu noć. jedan changes with it: jedna noć → jednu noć. tjedan (week) is a masculine thing, so cijeli tjedan stays as it is: Ostajemo cijeli tjedan. (We are staying the whole week.)',
        highlight: 'Ostajem jednu noć.',
      },
      {
        type: 'rule',
        title: 'When Something Does Not Work',
        body: 'The verb raditi means to work — for people and for machines. So "it is broken" is simply … ne radi: Tuš ne radi. (The shower does not work.) Klima ne radi. (The air conditioning does not work.) Start politely with Oprostite (excuse me): Oprostite, lift ne radi.',
        highlight: 'Tuš ne radi.',
      },
      {
        type: 'example',
        title: 'Checking In',
        items: [
          {
            hr: 'Dobar dan, imam rezervaciju.',
            en: 'Good afternoon, I have a booking.',
            note: 'rezervacija → rezervaciju',
          },
          {
            hr: 'Na koje ime? — Na ime Horvat.',
            en: 'Under what name? — Under the name Horvat.',
            note: 'ime is neuter, so it does not change',
          },
          {
            hr: 'Vašu putovnicu, molim.',
            en: 'Your passport, please.',
            note: 'putovnica → putovnicu, and vaša follows',
          },
          {
            hr: 'Imate li večeras slobodnu sobu?',
            en: 'Do you have a free room tonight?',
            note: 'slobodnu sobu — the whole phrase changes',
          },
          {
            hr: 'Imamo jednu dvokrevetnu sobu.',
            en: 'We have one double room.',
            note: 'jedna dvokrevetna soba → jednu dvokrevetnu sobu',
          },
          {
            hr: 'Ostajem cijeli tjedan.',
            en: 'I am staying the whole week.',
            note: 'tjedan is a thing → no change',
          },
          {
            hr: 'Izvolite ključ, soba broj dvjesto pet.',
            en: 'Here is your key, room number two hundred and five.',
            note: 'ključ is a thing → no change',
          },
          {
            hr: 'Doručak je uključen. Restoran je tamo, desno.',
            en: 'Breakfast is included. The restaurant is over there, on the right.',
            note: 'uključen — included',
          },
        ],
      },
      {
        type: 'example',
        title: 'Questions and Problems',
        items: [
          {
            hr: 'Kada je doručak? — Doručak je ujutro.',
            en: 'When is breakfast? — Breakfast is in the morning.',
            note: 'ujutro — in the morning; navečer — in the evening',
          },
          {
            hr: 'Imate li wifi? Koja je lozinka?',
            en: 'Do you have wifi? What is the password?',
            note: 'polite vi → imate',
          },
          {
            hr: 'Gdje je lift? — Lift je tamo, lijevo.',
            en: 'Where is the lift? — The lift is over there, on the left.',
            note: 'lijevo / desno — left / right',
          },
          {
            hr: 'Oprostite, tuš ne radi.',
            en: 'Excuse me, the shower does not work.',
            note: 'raditi works for machines too',
          },
          {
            hr: 'Voda je hladna, a soba je mala.',
            en: 'The water is cold, and the room is small.',
            note: 'adjectives after je stay in the subject form',
          },
          {
            hr: 'Kada je odjava? — Odjava je u podne.',
            en: 'When is checkout? — Checkout is at noon.',
            note: 'prijava / odjava — check-in / checkout',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you ask a receptionist "Do you have a free room?"',
        options: [
          'Imaš li slobodnu sobu?',
          'Imate li slobodnu sobu?',
          'Imate li slobodna soba?',
          'Imam li slobodnu sobu?',
        ],
        correct: 1,
        explanation: 'Polite vi → imate, and the room is an object: slobodnu sobu.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'The air conditioning is broken. What do you say?',
        options: ['Klima ne radi.', 'Klima nije radi.', 'Klima ne radim.'],
        correct: 0,
        explanation: 'raditi in the "it" form with ne in front: ne radi.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, using ti with staff: "Imaš li sobu?" — to a receptionist say Imate li sobu? Second, leaving the room in its dictionary form: "Imate li slobodna soba?" — the room is an object, so Imate li slobodnu sobu? Third, putting the broken machine in the "I" form: "Tuš ne radim" says that you do not work; the shower is "it": Tuš ne radi.',
        highlight: 'Imate li slobodnu sobu?',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'You ask a receptionist for a free room. Which is right?',
            options: [
              'Imaš li slobodnu sobu?',
              'Imate li slobodna soba?',
              'Imate li slobodnu sobu?',
              'Imam li slobodnu sobu?',
            ],
            correct: 2,
            explanation: 'Polite imate, and the object form slobodnu sobu.',
          },
          {
            q: 'Complete: "Imam ___ na ime Horvat." (a booking)',
            options: ['rezervacija', 'rezervaciju', 'rezervacije', 'rezervacijom'],
            correct: 1,
            explanation: 'The booking is what you have: rezervacija → rezervaciju.',
          },
          {
            q: 'Complete: "Ostajemo samo ___." (one night)',
            options: ['jednu noć', 'jedna noć', 'jedan noć', 'jedne noći'],
            correct: 0,
            explanation: 'noć does not change, and jedna follows the feminine -u: jednu noć.',
          },
          {
            q: 'The shower is broken. What do you say?',
            options: ['Tuš ne radim.', 'Tuš nije radi.', 'Tuš ne rade.', 'Tuš ne radi.'],
            correct: 3,
            explanation: 'The shower is "it": ne radi.',
          },
          {
            q: 'What does the receptionist mean by "Izvolite ključ."?',
            options: [
              'Here is your key.',
              'Give me the key.',
              'The key does not work.',
              'Where is the key?',
            ],
            correct: 0,
            explanation: 'Izvolite means "here you are" when handing something over.',
          },
          {
            q: 'Complete: "Rezerviram ___ sobu." (dvokrevetna — double)',
            options: ['dvokrevetna', 'dvokrevetne', 'dvokrevetnu', 'dvokrevetnoj'],
            correct: 2,
            explanation: 'The adjective moves with the room: dvokrevetnu sobu.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'At the Hotel — Key Takeaways',
        points: [
          'Use polite vi with staff: Imate li…?',
          'The room is an object: Imate li slobodnu sobu? Rezerviram dvokrevetnu sobu.',
          'Check-in phrases: Imam rezervaciju. Na koje ime? Izvolite ključ.',
          'How long: Ostajem jednu noć. Ostajemo cijeli tjedan.',
          'Something broken: Oprostite, tuš ne radi.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Trebati — needing
  // ─────────────────────────────────────────────────────────
  {
    id: 'trebati-need',
    title: 'Trebati: What You Need',
    subtitle: 'Trebam kartu, Trebam ići, Ne treba, hvala',
    icon: '🧰',
    level: 'A1',
    duration: '~7 min',
    color: '#15803d',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'The Verb You Use All Day',
        body: 'You met trebati among the modal verbs. It earns its own lesson because you will need it constantly — a ticket, a doctor, a taxi, help, a moment to think. It works in two ways: trebam + a thing (I need a ticket) and trebam + a verb (I need to go). And there is one short refusal every Croatian uses: Ne treba, hvala.',
        icon: '🧰',
      },
      {
        type: 'table',
        title: 'trebati — to need',
        headers: ['Person', 'Positive', 'Negative'],
        rows: [
          ['ja', 'trebam', 'ne trebam'],
          ['ti', 'trebaš', 'ne trebaš'],
          ['on / ona / ono', 'treba', 'ne treba'],
          ['mi', 'trebamo', 'ne trebamo'],
          ['vi', 'trebate', 'ne trebate'],
          ['oni / one / ona', 'trebaju', 'ne trebaju'],
        ],
      },
      {
        type: 'rule',
        title: 'Trebam + a Thing',
        body: 'The thing you need is an object, so it takes the object form you already know. karta (ticket) → Trebam kartu. pomoć (help) never changes → Trebam pomoć. A living masculine noun adds -a: liječnik → Trebamo liječnika. A masculine thing stays: Trebam novi mobitel.',
        highlight: 'Trebam kartu.',
      },
      {
        type: 'rule',
        title: 'Trebam + a Verb',
        body: 'To say what you need to DO, put the second verb in its dictionary form (the infinitive, ending in -ti or -ći): Trebam ići. (I need to go.) Trebaš učiti. (You need to study.) Only trebati changes for the person; the second verb never does.',
        highlight: 'Trebam ići.',
      },
      {
        type: 'rule',
        title: 'Asking What Someone Needs',
        body: 'Ask with the same verb. Što trebaš? (What do you need?) — to a friend. Što trebate? — politely, as a shop assistant asks you. Trebaš li pomoć? (Do you need help?) — the verb first, then li. Answer with the same verb: Trebam kruh i mlijeko. Or say you need nothing: Ne trebam ništa, hvala.',
        highlight: 'Što trebaš?',
      },
      {
        type: 'rule',
        title: 'Treba Without a Person',
        body: 'treba on its own, with no person, means "it is necessary" or "one should": Treba kupiti kruh. (We need to buy bread / Bread needs buying.) And the shortest polite refusal in the language is Ne treba, hvala. (No need, thanks.) — for a waiter offering more, or a shop assistant offering a bag.',
        highlight: 'Ne treba, hvala.',
      },
      {
        type: 'example',
        title: 'What You Need',
        items: [
          {
            hr: 'Trebam kartu, a brat treba taksi.',
            en: 'I need a ticket, and my brother needs a taxi.',
            note: 'karta → kartu; taksi is a thing → no change',
          },
          { hr: 'Trebaš li pomoć?', en: 'Do you need help?', note: 'pomoć never changes' },
          {
            hr: 'Trebamo liječnika, brzo!',
            en: 'We need a doctor, quickly!',
            note: 'a doctor is alive → liječnika',
          },
          {
            hr: 'Moja sestra treba novi mobitel.',
            en: 'My sister needs a new mobile phone.',
            note: 'a thing → no change',
          },
          {
            hr: 'Što trebate? — Trebamo taksi.',
            en: 'What do you need? — We need a taxi.',
            note: 'polite vi → trebate',
          },
          {
            hr: 'Trebam odmor.',
            en: 'I need a rest.',
            note: 'odmor is a thing → no change',
          },
          {
            hr: 'Trebam kavu, a ne čaj.',
            en: 'I need a coffee, not tea.',
            note: 'kava → kavu; čaj stays',
          },
          {
            hr: 'Hvala, ne trebam ništa.',
            en: 'Thanks, I do not need anything.',
            note: 'ne trebam ništa — Croatian doubles the no',
          },
        ],
      },
      {
        type: 'example',
        title: 'What You Need to Do',
        items: [
          { hr: 'Trebam ići u grad.', en: 'I need to go into town.', note: 'trebam + ići' },
          {
            hr: 'Djeca trebaju spavati.',
            en: 'The children need to sleep.',
            note: 'djeca takes the "they" form',
          },
          { hr: 'Ne trebaš čekati.', en: 'You do not need to wait.', note: 'ne trebaš — no need' },
          {
            hr: 'Trebamo rezervirati stol.',
            en: 'We need to book a table.',
            note: 'the second verb stays in the dictionary form',
          },
          {
            hr: 'Treba kupiti kruh i mlijeko.',
            en: 'We need to buy bread and milk.',
            note: 'treba alone — it is necessary',
          },
          {
            hr: 'Hoćete li vrećicu? — Ne treba, hvala.',
            en: 'Would you like a bag? — No need, thanks.',
            note: 'the polite refusal',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I need a ticket"?',
        options: ['Trebam karta.', 'Trebam kartu.', 'Trebaš kartu.', 'Trebati kartu.'],
        correct: 1,
        explanation: 'trebam is "I need", and the ticket is an object: karta → kartu.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence says "We need to wait"?',
        options: ['Trebamo čekamo.', 'Trebamo čekati.', 'Treba čekamo.'],
        correct: 1,
        explanation: 'trebamo for "we", then the dictionary form čekati.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, leaving the thing in its dictionary form: "Trebam kava" — what you need is an object, so Trebam kavu. Second, giving the second verb a person ending: "Trebam idem" — the second verb stays in the dictionary form: Trebam ići. Third, forgetting that a doctor is alive: "Trebam liječnik" — Trebam liječnika.',
        highlight: 'Trebam kavu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Trebam ___." (karta — a ticket)',
            options: ['karta', 'kartu', 'karte', 'karti'],
            correct: 1,
            explanation: 'After trebam the ticket is an object: kartu.',
          },
          {
            q: 'Complete: "Što ___? — Trebam taksi." (you ask a friend)',
            options: ['trebam', 'trebamo', 'trebaš', 'trebaju'],
            correct: 2,
            explanation: 'To a friend you use ti, and ti takes -š: Što trebaš?',
          },
          {
            q: 'Which sentence says "I need to go"?',
            options: ['Trebam idem.', 'Treba idem.', 'Trebaju ići.', 'Trebam ići.'],
            correct: 3,
            explanation: 'trebam, then the dictionary form ići.',
          },
          {
            q: 'Complete: "Trebamo ___." (liječnik — a doctor)',
            options: ['liječnika', 'liječnik', 'liječniku', 'liječnici'],
            correct: 0,
            explanation: 'A doctor is alive: liječnik → liječnika.',
          },
          {
            q: 'A waiter offers more bread and you do not want it. What do you say?',
            options: [
              'Ne trebaju, hvala.',
              'Ne treba, hvala.',
              'Ne trebati, hvala.',
              'Trebam, hvala.',
            ],
            correct: 1,
            explanation: 'Ne treba, hvala. — "no need, thanks".',
          },
          {
            q: 'Complete: "Djeca ___ spavati." (need to)',
            options: ['treba', 'trebamo', 'trebaju', 'trebaš'],
            correct: 2,
            explanation: 'djeca takes the "they" form: trebaju.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Trebati — Key Takeaways',
        points: [
          'trebam, trebaš, treba, trebamo, trebate, trebaju',
          'Trebam + a thing in the object form: Trebam kartu, Trebamo liječnika',
          'Trebam + a verb in its dictionary form: Trebam ići',
          'Ask with the same verb: Što trebaš? Trebaš li pomoć?',
          'Treba alone = it is necessary: Treba kupiti kruh. Ne treba, hvala.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Smjeti — permission
  // ─────────────────────────────────────────────────────────
  {
    id: 'smjeti-permission',
    title: 'Smjeti: May I?',
    subtitle: 'Smijem li ući? — and the difference between must not and need not',
    icon: '🚦',
    level: 'A1',
    duration: '~7 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'Allowed or Not Allowed',
        body: 'moći says what you are ABLE to do. smjeti says what you are ALLOWED to do. Can I swim? Of course — but may I swim here? That second question is smjeti. You will see it on signs, hear it from parents, and use it every time you ask permission.',
        icon: '🚦',
      },
      {
        type: 'table',
        title: 'smjeti — to be allowed',
        headers: ['Person', 'Positive', 'Negative'],
        rows: [
          ['ja', 'smijem', 'ne smijem'],
          ['ti', 'smiješ', 'ne smiješ'],
          ['on / ona / ono', 'smije', 'ne smije'],
          ['mi', 'smijemo', 'ne smijemo'],
          ['vi', 'smijete', 'ne smijete'],
          ['oni / one / ona', 'smiju', 'ne smiju'],
        ],
      },
      {
        type: 'rule',
        title: 'The Spelling Changes: je → ije',
        body: 'The dictionary form is smjeti, with je. In the present the je grows into ije: smijem, smiješ, smije. This is the same long and short pair you see in other Croatian words, and it is a spelling learners often get wrong. Always write smijem, never "smjem".',
        highlight: 'smijem',
      },
      {
        type: 'rule',
        title: 'Asking Permission: Smijem li …?',
        body: 'Like the other modal verbs, smjeti is followed by a verb in its dictionary form. To ask, put smijem first and add li: Smijem li ući? (May I come in?) Smijem li sjesti? (May I sit down?) Croatians also ask Mogu li …? for permission, and both are polite — smijem li is the more careful of the two.',
        highlight: 'Smijem li ući?',
      },
      {
        type: 'rule',
        title: 'Must Not and Need Not',
        body: 'This is the one trap. ne smiješ means "you must not" — it is forbidden. ne moraš means "you do not have to" — you may if you like. Ne smiješ pušiti. (You must not smoke.) Ne moraš doći. (You do not have to come.) English "must not" looks like moram, but a Croatian ban is never ne morati. The verb that forbids is ne smjeti; in everyday speech people also forbid with ne moći — Ne možeš ovdje pušiti — and a sign says it in one word, as the next slide shows.',
        highlight: 'Ne smiješ pušiti.',
      },
      {
        type: 'rule',
        title: 'Can, but May Not',
        body: 'moći and smjeti often meet in one sentence: Mogu plivati, ali ovdje ne smijem. (I can swim, but I am not allowed to here.) Ability is moći, permission is smjeti.',
        highlight: 'Mogu plivati, ali ovdje ne smijem.',
      },
      {
        type: 'rule',
        title: 'Signs: Zabranjeno …',
        body: 'A sign does not make a whole sentence. It puts one fixed word, Zabranjeno (forbidden), in front of a verb in its dictionary form: Zabranjeno pušiti. (No smoking.) Zabranjeno parkirati. (No parking.) Zabranjeno fotografirati. (No photos.) Learn Zabranjeno as part of the sign. It says the same as a sentence with ne smjeti: Zabranjeno pušiti = Ovdje ne smijemo pušiti.',
        highlight: 'Zabranjeno pušiti.',
      },
      {
        type: 'example',
        title: 'Asking and Answering',
        items: [
          {
            hr: 'Smijem li ući? — Naravno, izvolite.',
            en: 'May I come in? — Of course, please do.',
            note: 'smijem li + the infinitive',
          },
          { hr: 'Smijem li sjesti ovdje?', en: 'May I sit here?', note: 'sjesti — to sit down' },
          {
            hr: 'Smijemo li parkirati ovdje?',
            en: 'Are we allowed to park here?',
            note: 'mi → smijemo',
          },
          {
            hr: 'Smijem li otvoriti prozor?',
            en: 'May I open the window?',
            note: 'prozor is a thing → no change',
          },
          {
            hr: 'Smijem li fotografirati? — Ne, ne smijete.',
            en: 'May I take photos? — No, you may not.',
            note: 'polite vi → ne smijete',
          },
          {
            hr: 'Smiješ li gledati film večeras?',
            en: 'Are you allowed to watch a film tonight?',
            note: 'ti → smiješ',
          },
          { hr: 'Mama kaže da smijem.', en: 'Mum says I am allowed.', note: 'da — that' },
        ],
      },
      {
        type: 'example',
        title: 'Rules and Bans',
        items: [
          {
            hr: 'Ovdje ne smijete pušiti.',
            en: 'You are not allowed to smoke here.',
            note: 'the commonest sign in the country',
          },
          {
            hr: 'Pas ne smije ući.',
            en: 'The dog is not allowed in.',
            note: 'on / ona / ono → smije',
          },
          {
            hr: 'Djeca ne smiju voziti auto.',
            en: 'Children are not allowed to drive a car.',
            note: 'djeca → smiju',
          },
          {
            hr: 'Ne smiješ voziti brzo.',
            en: 'You must not drive fast.',
            note: 'a ban → ne smiješ',
          },
          {
            hr: 'Ne moraš doći, ali smiješ.',
            en: 'You do not have to come, but you may.',
            note: 'no obligation, but permission',
          },
          {
            hr: 'Mogu plivati, ali ovdje ne smijem.',
            en: 'I can swim, but I am not allowed to here.',
            note: 'ability against permission',
          },
          {
            hr: 'Zabranjeno parkirati. — Ovdje ne smijemo parkirati.',
            en: 'No parking. — We are not allowed to park here.',
            note: 'the sign and the sentence say the same thing',
          },
          {
            hr: 'U muzeju piše: Zabranjeno fotografirati.',
            en: 'In the museum the sign says: No photos.',
            note: 'piše — it says (on a sign)',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you ask "May I come in?"',
        options: ['Smijem li ući?', 'Smijem li uđem?', 'Smjem li ući?', 'Smiju li ući?'],
        correct: 0,
        explanation: 'smijem (with ije) + li + the dictionary form ući.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence is a ban — "You must not smoke"?',
        options: ['Ne moraš pušiti.', 'Ne smiješ pušiti.', 'Ne trebaš pušiti.'],
        correct: 1,
        explanation:
          'A ban is ne smjeti. Ne moraš pušiti and Ne trebaš pušiti both mean "you do not have to smoke".',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, using morati for a ban: "Ne moraš pušiti ovdje" means you do not HAVE to smoke here; the ban is Ne smiješ pušiti. Second, the spelling: "smjem" — the present has ije: smijem. Third, giving the second verb a person ending: "Smijem li uđem?" — the second verb stays in the dictionary form: Smijem li ući?',
        highlight: 'Ne smiješ pušiti',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ li ući?" (May I …)',
            options: ['Smjem', 'Smiju', 'Smijem', 'Smiješ'],
            correct: 2,
            explanation: 'ja → smijem, spelled with ije.',
          },
          {
            q: 'Which sentence says "You must not drive fast"?',
            options: [
              'Ne moraš voziti brzo.',
              'Ne smiješ voziti brzo.',
              'Ne smiješ voziš brzo.',
              'Ne smije voziti brzo.',
            ],
            correct: 1,
            explanation: 'A ban is ne smjeti, ti → smiješ, and the infinitive voziti.',
          },
          {
            q: 'What does "Ne moraš doći." mean?',
            options: [
              'You do not have to come.',
              'You must not come.',
              'You cannot come.',
              'You do not want to come.',
            ],
            correct: 0,
            explanation: 'ne morati = no obligation. A ban would be ne smiješ.',
          },
          {
            q: 'Complete: "Ovdje ne ___ pušiti." (polite vi)',
            options: ['smiju', 'smije', 'smijemo', 'smijete'],
            correct: 3,
            explanation: 'Polite vi → smijete.',
          },
          {
            q: 'Complete: "Djeca ne ___ voziti auto."',
            options: ['smije', 'smiju', 'smijete', 'smijem'],
            correct: 1,
            explanation: 'djeca takes the "they" form: smiju.',
          },
          {
            q: 'Which sentence says "I can swim, but I am not allowed to here"?',
            options: [
              'Smijem plivati, ali ovdje ne mogu.',
              'Mogu plivati, ali ovdje ne moram.',
              'Mogu plivati, ali ovdje ne smijem.',
              'Moram plivati, ali ovdje ne smijem.',
            ],
            correct: 2,
            explanation: 'Ability is moći (mogu), permission is smjeti (ne smijem).',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Smjeti — Key Takeaways',
        points: [
          'smijem, smiješ, smije, smijemo, smijete, smiju — ije in every form',
          'Ask permission: Smijem li + the infinitive? Smijem li ući?',
          'A ban: Ne smiješ pušiti. Ovdje ne smijete parkirati.',
          'ne smjeti = must not; ne morati = do not have to',
          'moći = able to, smjeti = allowed to',
          'Signs: Zabranjeno + the infinitive — Zabranjeno pušiti, Zabranjeno parkirati',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Money and Exchange
  // ─────────────────────────────────────────────────────────
  {
    id: 'money-exchange',
    title: 'Money and Exchange',
    subtitle: 'The euro, the exchange office, and finding cash',
    icon: '💶',
    level: 'A1',
    duration: '~7 min',
    color: '#a16207',
    bg: '#fefce8',
    slides: [
      {
        type: 'intro',
        title: 'Paying in Croatia',
        body: 'Since 1 January 2023 Croatia uses the euro. Before that, from 1994 to the end of 2022, the currency was the kuna — you will still hear older people convert prices in their head, and you will see the word in old books and films. This lesson gives you the words for money and the conversation at an exchange office. The shape a currency word takes after a number comes later in the course, once its case has been taught; for now prices are written in figures — 2 € — and you read them.',
        icon: '💶',
      },
      {
        type: 'rule',
        title: 'Words for Money',
        body: 'novac — money. gotovina — cash. kartica — card. novčanica — a banknote. kovanica — a coin. sitno — small change (Imate li sitno? Do you have change?). bankomat — a cash machine. banka — a bank. mjenjačnica — an exchange office. tečaj — the exchange rate. provizija — the fee. račun — the receipt or bill. valuta — a currency.',
        highlight: 'Imate li sitno?',
      },
      {
        type: 'rule',
        title: 'Changing Money',
        body: 'mijenjati means to change, and promijeniti means to change once, on the spot. At the counter you say: Trebam promijeniti novac. (I need to change money.) or Želim promijeniti dolare. The clerk asks: Koliko trebate? (How much do you need?) Then you can ask about the rate: Kakav je tečaj danas? (What is the rate today?) and the fee: Kolika je provizija?',
        highlight: 'Trebam promijeniti novac.',
      },
      {
        type: 'rule',
        title: 'Asking the Price',
        body: 'Koliko košta? (How much does it cost?) — for one thing. Koliko je to? (How much is that?) — at the till, for everything together. The answer you will read on a price tag or a screen is a number with the € sign: 3 €, 15,50 €. Croatians write a comma where English writes a point: 1,20 € is one euro and twenty cents.',
        highlight: 'Koliko košta?',
      },
      {
        type: 'rule',
        title: 'The Spelling Trap: ije and je',
        body: 'Look at the two words: mijenjati (to change) with ije, but mjenjačnica (exchange office) with je. The long ije becomes the short je when the word grows longer. Write mjenjačnica, never "mijenjačnica".',
        highlight: 'mjenjačnica',
      },
      {
        type: 'example',
        title: 'At the Exchange Office',
        items: [
          {
            hr: 'Oprostite, gdje je mjenjačnica?',
            en: 'Excuse me, where is the exchange office?',
            note: 'je in mjenjačnica',
          },
          {
            hr: 'Trebam promijeniti novac.',
            en: 'I need to change money.',
            note: 'trebam + infinitive',
          },
          {
            hr: 'Želim promijeniti dolare. — Koliko trebate?',
            en: 'I want to change dollars. — How much do you need?',
            note: 'dolari → dolare, the object form',
          },
          {
            hr: 'Kakav je tečaj danas?',
            en: 'What is the exchange rate today?',
            note: 'tečaj — rate',
          },
          {
            hr: 'Kolika je provizija?',
            en: 'How big is the fee?',
            note: 'provizija — the fee',
          },
          {
            hr: 'Izvolite novac i račun.',
            en: 'Here are your money and your receipt.',
            note: 'Izvolite — here you are',
          },
          {
            hr: 'Trebam račun, molim.',
            en: 'I need a receipt, please.',
            note: 'račun is a thing → no change',
          },
        ],
      },
      {
        type: 'example',
        title: 'Prices and Paying',
        items: [
          {
            hr: 'Koliko košta kava? — 2 €.',
            en: 'How much is a coffee? — Two euros.',
            note: 'you read the price; saying it comes later',
          },
          {
            hr: 'Koliko je to? — To je 15,50 €.',
            en: 'How much is that? — That is fifteen euros fifty.',
            note: 'a comma, not a point',
          },
          {
            hr: 'Trebam gotovinu. Gdje je bankomat?',
            en: 'I need cash. Where is the cash machine?',
            note: 'gotovina → gotovinu',
          },
          {
            hr: 'Kartica ili gotovina? — Kartica.',
            en: 'Card or cash? — Card.',
            note: 'a one-word answer is enough',
          },
          {
            hr: 'Imate li sitno? Imam samo novčanicu.',
            en: 'Do you have change? I only have a banknote.',
            note: 'novčanica → novčanicu',
          },
          {
            hr: 'Bankomat je tamo, ali ne radi.',
            en: 'The cash machine is over there, but it does not work.',
            note: 'ne radi — out of order',
          },
          {
            hr: 'Hrvatska danas koristi euro. Kuna je stara valuta.',
            en: 'Croatia uses the euro today. The kuna is the old currency.',
            note: 'a fact worth knowing',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You need cash. Which machine do you look for?',
        options: ['mjenjačnica', 'bankomat', 'račun', 'tečaj'],
        correct: 1,
        explanation: 'bankomat is the cash machine; mjenjačnica is an exchange office.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What has been the Croatian currency since 2023?',
        options: ['the kuna', 'the euro', 'the dinar'],
        correct: 1,
        explanation:
          'Croatia adopted the euro on 1 January 2023. The kuna was used from 1994 to 2022.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the spelling of the exchange office: it is mjenjačnica, with a short je — the long ije belongs only to mijenjati. Second, leaving the object in its dictionary form: "Trebam gotovina" — cash is what you need, so Trebam gotovinu. Third, reading 1,20 € as one thousand and twenty: the comma separates the cents.',
        highlight: 'Trebam gotovinu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Trebam promijeniti ___." (money)',
            options: ['novac', 'novca', 'novcu', 'novci'],
            correct: 0,
            explanation: 'novac is a masculine thing, so the object form looks the same: novac.',
          },
          {
            q: 'Which question asks about the exchange rate?',
            options: [
              'Kakav je tečaj danas?',
              'Kolika je provizija?',
              'Gdje je bankomat?',
              'Imate li sitno?',
            ],
            correct: 0,
            explanation: 'tečaj is the exchange rate.',
          },
          {
            q: 'Which word is spelled correctly?',
            options: ['mijenjačnica', 'mjenjačnica', 'mjenjacnica', 'mijenjacnica'],
            correct: 1,
            explanation: 'mjenjačnica — the ije of mijenjati shortens to je.',
          },
          {
            q: 'How do you ask "Do you have small change?"',
            options: [
              'Imate li tečaj?',
              'Imate li račun?',
              'Imate li proviziju?',
              'Imate li sitno?',
            ],
            correct: 3,
            explanation: 'sitno is small change.',
          },
          {
            q: 'A price tag says 1,20 €. What is the price?',
            options: [
              'one thousand two hundred euros',
              'twelve euros',
              'one euro twenty cents',
              'one hundred and twenty euros',
            ],
            correct: 2,
            explanation: 'Croatian writes a comma before the cents: 1,20 € is one euro twenty.',
          },
          {
            q: 'Which statement is true?',
            options: [
              'Croatia has used the euro since 2023.',
              'Croatia still uses the kuna.',
              'Croatia has used the euro since 1994.',
              'Croatia uses the kuna and the euro together.',
            ],
            correct: 0,
            explanation: 'The euro replaced the kuna on 1 January 2023.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Money — Key Takeaways',
        points: [
          'Croatia uses the euro since 1 January 2023; the kuna was 1994–2022',
          'Trebam promijeniti novac. Kakav je tečaj? Kolika je provizija?',
          'Koliko košta? Koliko je to? — prices are read from figures: 15,50 €',
          'gotovina, kartica, bankomat, novčanica, sitno',
          'mijenjati (to change), but mjenjačnica (exchange office)',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'verbs-ati-irati': {
    worked: [
      {
        title: 'A New -irati Verb',
        problem: 'Dopuni: Mi ___ izlet. (organizirati)',
        en: 'We are organising a trip.',
        steps: [
          {
            label: 'Remove -ti',
            text: 'organizira-ti → organizira-. The -ir- and the -a- both stay.',
          },
          { label: 'Find the person', text: 'Mi is "we", and "we" takes -mo.' },
          { label: 'Build it', text: 'organizira + mo.' },
        ],
        answer: 'Mi organiziramo izlet.',
      },
      {
        title: 'The "They" Form',
        problem: 'Dopuni: Turisti ___ more. (fotografirati)',
        en: 'The tourists are taking photos of the sea.',
        steps: [
          { label: 'Find the person', text: 'turisti are "they".' },
          { label: 'The ending', text: '"They" takes -ju after the -a-.' },
          {
            label: 'Build it',
            text: 'fotografira + ju. The sea, more, is neuter and does not change.',
          },
        ],
        answer: 'Turisti fotografiraju more.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ja ___ pravo. (studirati)',
          options: ['studiraš', 'studiram', 'studira', 'studiraju'],
          correct: 1,
          hint: '"I" takes -m.',
          explanation: 'Ja studiram pravo.',
        },
        {
          q: 'Vi ___ stol. (rezervirati — polite you)',
          options: ['rezerviraju', 'rezerviramo', 'rezervirate', 'rezervira'],
          correct: 2,
          hint: 'Polite vi takes -te.',
          explanation: 'Vi rezervirate stol.',
        },
        {
          q: 'Mama ___ svaki dan. (telefonirati)',
          options: ['telefonira', 'telefoniram', 'telefoniraš', 'telefoniraju'],
          correct: 0,
          hint: 'She takes no ending after the -a-.',
          explanation: 'Mama telefonira svaki dan.',
        },
        {
          q: 'Oni ne ___, oni rade. (studirati)',
          options: ['studira', 'studiramo', 'studirate', 'studiraju'],
          correct: 3,
          hint: '"They" takes -ju.',
          explanation: 'Oni ne studiraju, oni rade.',
        },
        {
          type: 'type',
          q: 'Ti ____ auto ovdje. (parkirati)',
          answer: 'parkiraš',
          hint: '"You" (one friend) takes -š after the -a-.',
          explanation: 'Ti parkiraš auto ovdje.',
        },
        {
          type: 'type',
          q: 'Ana ____ tenis. (trenirati)',
          answer: 'trenira',
          hint: 'She: remove -ti and add nothing.',
          explanation: 'Ana trenira tenis.',
        },
        {
          type: 'type',
          q: 'Mi ____ koncert. (organizirati)',
          answer: 'organiziramo',
          hint: '"We" takes -mo.',
          explanation: 'Mi organiziramo koncert.',
        },
        {
          type: 'type',
          q: 'Oni ____ radio. (slušati)',
          answer: 'slušaju',
          hint: '"They" takes -ju after the -a-.',
          explanation: 'Oni slušaju radio.',
        },
        {
          type: 'type',
          q: 'Ja ____ hrvatski svaki dan. (learn)',
          answer: 'učim',
          hint: 'Learning in general is not university study; the verb ends in -iti.',
          explanation: 'Učim hrvatski. — učiti, not studirati.',
        },
        {
          q: 'Which verb means "to book"?',
          options: ['parkirati', 'trenirati', 'kontrolirati', 'rezervirati'],
          correct: 3,
          hint: 'Think of the English word "reservation".',
          explanation: 'rezervirati — Rezerviram stol.',
        },
        {
          q: '___ li često? (telefonirati — you, to a friend)',
          options: ['Telefoniraš', 'Telefoniram', 'Telefoniraju', 'Telefonira'],
          correct: 0,
          hint: 'A friend is ti.',
          explanation: 'Telefoniraš li često?',
        },
        {
          q: 'Which form is wrong?',
          options: ['studiram', 'studiraju', 'studam', 'studiramo'],
          correct: 2,
          hint: 'The whole stem stays in every form.',
          explanation: 'studam drops the -ir-; the form is studiram.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ja ___ auto." (parkirati)',
        options: ['parkiraš', 'parkiram', 'parkiraju', 'parkira'],
        correct: 1,
        explanation: 'ja → -m: parkiram.',
      },
      {
        q: 'Complete: "Vi ___ stol." (rezervirati)',
        options: ['rezerviramo', 'rezerviraju', 'rezervirate', 'rezerviraš'],
        correct: 2,
        explanation: 'vi → -te: rezervirate.',
      },
      {
        q: 'Complete: "Turisti ___ grad." (fotografirati)',
        options: ['fotografiraju', 'fotografira', 'fotografiramo', 'fotografiram'],
        correct: 0,
        explanation: 'turisti are "they": fotografiraju.',
      },
      {
        q: 'Which sentence fits someone taking an evening language course?',
        options: ['Studiraju hrvatski.', 'Studiram pravo.', 'Studiraš hrvatski.', 'Učim hrvatski.'],
        correct: 3,
        explanation: 'Learning a language in general is učiti.',
      },
      {
        q: 'Which ending goes with "mi"?',
        options: ['-m', '-mo', '-te', '-ju'],
        correct: 1,
        explanation: 'mi → -mo: gledamo, studiramo.',
      },
      {
        q: 'Complete: "___ li Marko često?" (telefonirati)',
        options: ['Telefonira', 'Telefoniraš', 'Telefoniram', 'Telefoniraju'],
        correct: 0,
        explanation: 'Marko is "he": Telefonira li Marko često? The verb comes first, then li.',
      },
    ],
    vocab: [
      ['studirati', 'to study (at university)', 'Studiram pravo.'],
      ['telefonirati', 'to phone', 'Mama telefonira svaki dan.'],
      ['organizirati', 'to organise', 'Ivan organizira izlet.'],
      ['rezervirati', 'to book', 'Večeras rezerviramo stol.'],
      ['trenirati', 'to train', 'Ana trenira tenis.'],
      ['parkirati', 'to park', 'Gdje parkiraš auto?'],
      ['fotografirati', 'to take photos', 'Turisti fotografiraju more.'],
      ['učiti', 'to learn', 'Učim hrvatski.'],
      ['izlet', 'trip, outing', 'Organiziramo izlet.'],
      ['pravo', 'law (the subject)', 'Moj brat studira pravo.'],
    ],
  },

  'accusative-animate': {
    worked: [
      {
        title: 'A Person as the Object',
        problem: 'Dopuni: Čekam ___. (susjed)',
        en: 'I am waiting for my neighbour.',
        steps: [
          { label: 'Find the object', text: 'The one being waited for: susjed.' },
          {
            label: 'Ask the question',
            text: 'Masculine — is it alive? A neighbour is a person: yes.',
          },
          { label: 'The ending', text: 'A living masculine noun adds -a.' },
        ],
        answer: 'Čekam susjeda.',
      },
      {
        title: 'Adjective and Noun Together',
        problem: 'Dopuni: Vidim ___. (dobar prijatelj)',
        en: 'I see a good friend.',
        steps: [
          { label: 'The noun', text: 'prijatelj is alive → prijatelja.' },
          {
            label: 'The adjective',
            text: 'Next to a living masculine object, the adjective takes -og.',
          },
          { label: 'Build it', text: 'dobar → dobrog, and the a in the middle drops out.' },
        ],
        answer: 'Vidim dobrog prijatelja.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Tražim ___. (konobar — the waiter)',
          options: ['konobar', 'konobara', 'konobaru', 'konobari'],
          correct: 1,
          hint: 'A waiter is a person.',
          explanation: 'Tražim konobara.',
        },
        {
          q: 'Kupujem ___. (a phone)',
          options: ['mobitela', 'mobitelu', 'mobitel', 'mobitelom'],
          correct: 2,
          hint: 'A phone is a masculine thing.',
          explanation: 'Kupujem mobitel. — no change.',
        },
        {
          q: 'Zovem ___. (kolega — a colleague)',
          options: ['kolegu', 'kolega', 'kolegaa', 'kolege'],
          correct: 0,
          hint: 'It ends in -a, so it changes like sestra.',
          explanation: 'Zovem kolegu.',
        },
        {
          q: '___ vidiš? — Vidim brata.',
          options: ['Što', 'Gdje', 'Kada', 'Koga'],
          correct: 3,
          hint: 'The answer is a person.',
          explanation: 'Koga vidiš? — Vidim brata.',
        },
        {
          type: 'type',
          q: 'Vidim ____. (brat)',
          answer: 'brata',
          hint: 'A brother is alive: add the masculine ending.',
          explanation: 'Vidim brata.',
        },
        {
          type: 'type',
          q: 'Zovem ____. (Ivan)',
          answer: 'Ivana',
          hint: 'A name is a person.',
          explanation: 'Zovem Ivana.',
        },
        {
          type: 'type',
          q: 'Volim ____. (tata)',
          answer: 'tatu',
          hint: 'A masculine word in -a changes like a feminine one.',
          explanation: 'Volim tatu.',
        },
        {
          type: 'type',
          q: 'Slušamo ____. (profesor)',
          answer: 'profesora',
          hint: 'A teacher is a person.',
          explanation: 'Slušamo profesora.',
        },
        {
          type: 'type',
          q: 'Poznaješ li ____ susjeda? (naš — our)',
          answer: 'našeg',
          accept: ['našega'],
          hint: 'After š the adjective ending is -eg.',
          explanation: 'Poznaješ li našeg susjeda?',
        },
        {
          q: 'Vidim ___. (a new car)',
          options: ['novog auta', 'novi auto', 'novu autu', 'novog auto'],
          correct: 1,
          hint: 'A car is not alive.',
          explanation: 'Vidim novi auto. — neither word changes.',
        },
        {
          q: 'Čekam ___. (the child)',
          options: ['djeteta', 'djetetu', 'dijeta', 'dijete'],
          correct: 3,
          hint: 'The alive question is only for masculine nouns.',
          explanation: 'Čekam dijete. — dijete is neuter.',
        },
        {
          q: 'Vidim ___. (pas — a dog)',
          options: ['pas', 'psa', 'pasa', 'psu'],
          correct: 1,
          hint: 'A dog is alive, and the a in the middle drops.',
          explanation: 'Vidim psa.',
        },
        {
          q: 'Poznajem Ivu ___. (Marić — her surname)',
          options: ['Marića', 'Marić', 'Mariću', 'Marićem'],
          correct: 1,
          hint: "Whose surname is it — a man's or a woman's?",
          explanation: "Poznajem Ivu Marić. — a woman's surname never changes; only Iva → Ivu.",
        },
        {
          type: 'type',
          q: 'Čekam gospodina ____. (Horvat — Mr Horvat)',
          answer: 'Horvata',
          hint: "A man's surname changes like any living masculine noun.",
          explanation: 'Čekam gospodina Horvata.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Tražim ___." (liječnik — a doctor)',
        options: ['liječnik', 'liječnika', 'liječniku', 'liječnici'],
        correct: 1,
        explanation: 'A doctor is alive: liječnika.',
      },
      {
        q: 'Complete: "Gledam ___." (a film)',
        options: ['filma', 'filmu', 'film', 'filmom'],
        correct: 2,
        explanation: 'A film is a thing: no change.',
      },
      {
        q: 'Complete: "Vidim ___." (Luka)',
        options: ['Luku', 'Luka', 'Lukaa', 'Luke'],
        correct: 0,
        explanation: 'A masculine name in -a changes like sestra: Luku.',
      },
      {
        q: 'Which sentence says "I am waiting for a good friend"?',
        options: [
          'Čekam dobar prijatelj.',
          'Čekam dobri prijatelja.',
          'Čekam dobar prijatelja.',
          'Čekam dobrog prijatelja.',
        ],
        correct: 3,
        explanation: 'Noun and adjective both change: dobrog prijatelja.',
      },
      {
        q: 'Which question word asks about a thing?',
        options: ['Koga?', 'Što?', 'Tko?', 'Gdje?'],
        correct: 1,
        explanation: 'Što? for things; Koga? for people and animals.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Kupujem stola i čekam prijatelj.',
          'Kupujem stol i čekam prijatelj.',
          'Kupujem stol i čekam prijatelja.',
          'Kupujem stola i čekam prijatelja.',
        ],
        correct: 2,
        explanation: 'The table stays, the friend changes.',
      },
    ],
    vocab: [
      ['susjed', 'neighbour', 'Čekam susjeda.'],
      ['konobar', 'waiter', 'Tražim konobara.'],
      ['liječnik', 'doctor', 'Tražimo liječnika.'],
      ['profesor', 'professor, teacher', 'Slušamo profesora.'],
      ['kolega', 'colleague (male)', 'Zovem kolegu.'],
      ['tata', 'dad', 'Volim tatu.'],
      ['konj', 'horse', 'Vidim konja.'],
      ['Koga?', 'whom?', 'Koga čekaš?'],
      ['prezime', 'surname', 'Poznajem Anu Kovač i Marka Kovača.'],
      ['čekati', 'to wait (for)', 'Čekam prijatelja.'],
      ['tražiti', 'to look for', 'Tražim konobara.'],
    ],
  },

  'at-the-hotel': {
    worked: [
      {
        title: 'Asking for a Room',
        problem: '"Do you have a free single room?"',
        en: 'Do you have a free single room?',
        steps: [
          { label: 'Polite you', text: 'A receptionist is vi: imate, then li.' },
          { label: 'The object', text: 'The room is what they have: soba → sobu.' },
          {
            label: 'The adjectives follow',
            text: 'slobodna → slobodnu, jednokrevetna → jednokrevetnu.',
          },
        ],
        answer: 'Imate li slobodnu jednokrevetnu sobu?',
      },
      {
        title: 'Reporting a Problem',
        problem: '"Excuse me, the lift does not work."',
        en: 'Excuse me, the lift does not work.',
        steps: [
          { label: 'Start politely', text: 'Oprostite — excuse me.' },
          { label: 'The verb', text: 'raditi means to work, for machines too.' },
          { label: 'The person', text: 'The lift is "it", so ne radi.' },
        ],
        answer: 'Oprostite, lift ne radi.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Dobar dan, imam ___. (a booking)',
          options: ['rezervacija', 'rezervaciju', 'rezervacije', 'rezervaciji'],
          correct: 1,
          hint: 'What you have is an object, and the word is feminine.',
          explanation: 'Imam rezervaciju.',
        },
        {
          q: 'To a receptionist: "Do you have wifi?"',
          options: ['Imaš li wifi?', 'Imam li wifi?', 'Imate li wifi?', 'Imaju li wifi?'],
          correct: 2,
          hint: 'Staff get the polite form.',
          explanation: 'Imate li wifi?',
        },
        {
          q: 'Ostajem ___. (the whole week)',
          options: ['cijeli tjedan', 'cijelu tjednu', 'cijelog tjedna', 'cijela tjedan'],
          correct: 0,
          hint: 'A week is a masculine thing.',
          explanation: 'Ostajem cijeli tjedan. — no change.',
        },
        {
          q: 'Klima ___. (does not work)',
          options: ['ne radim', 'nije radi', 'ne rade', 'ne radi'],
          correct: 3,
          hint: 'The air conditioning is "it".',
          explanation: 'Klima ne radi.',
        },
        {
          type: 'type',
          q: 'Imate li slobodnu ____? (soba)',
          answer: 'sobu',
          hint: 'The room is an object: feminine -a changes.',
          explanation: 'Imate li slobodnu sobu?',
        },
        {
          type: 'type',
          q: 'Ostajem ____ noć. (jedan — one)',
          answer: 'jednu',
          hint: 'noć is feminine, and the number follows the feminine object ending.',
          explanation: 'Ostajem jednu noć.',
        },
        {
          type: 'type',
          q: 'Vašu ____, molim. (putovnica)',
          answer: 'putovnicu',
          hint: 'The passport is what is being asked for.',
          explanation: 'Vašu putovnicu, molim.',
        },
        {
          type: 'type',
          q: '____ li slobodnu sobu? (imati — polite you)',
          answer: 'Imate',
          hint: 'Polite vi takes -te.',
          explanation: 'Imate li slobodnu sobu?',
        },
        {
          type: 'type',
          q: 'Oprostite, tuš ne ____. (raditi)',
          answer: 'radi',
          hint: 'The shower is "it".',
          explanation: 'Oprostite, tuš ne radi.',
        },
        {
          q: 'What does "Doručak je uključen." mean?',
          options: [
            'Breakfast is not included.',
            'Breakfast is over.',
            'Breakfast is included.',
            'Breakfast is at seven.',
          ],
          correct: 2,
          hint: 'uključen sounds like "included".',
          explanation: 'Breakfast is included.',
        },
        {
          q: 'The receptionist hands you the key. What did they say?',
          options: ['Izvolite ključ.', 'Račun, molim.', 'Na koje ime?', 'Ugodan boravak!'],
          correct: 0,
          hint: 'Izvolite is what you say when handing something over.',
          explanation: 'Izvolite ključ. — here is your key.',
        },
        {
          q: 'Which word means checkout?',
          options: ['prijava', 'odjava', 'putovnica', 'lozinka'],
          correct: 1,
          hint: 'Think of leaving: od- means "away".',
          explanation: 'odjava — checkout; prijava — check-in.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Rezerviram ___ sobu." (jednokrevetna — single)',
        options: ['jednokrevetna', 'jednokrevetne', 'jednokrevetnoj', 'jednokrevetnu'],
        correct: 3,
        explanation: 'The adjective moves with the room: jednokrevetnu sobu.',
      },
      {
        q: 'Which question asks "Under what name?"',
        options: ['Na koje ime?', 'Kako se zoveš?', 'Kada je doručak?', 'Koja je lozinka?'],
        correct: 0,
        explanation: 'Na koje ime? — what the receptionist asks about a booking.',
      },
      {
        q: 'Complete: "Ostajem ___." (the whole week)',
        options: ['cijelu tjednu', 'cijeli tjedan', 'cijela tjedna', 'cijelog tjedna'],
        correct: 1,
        explanation: 'tjedan is a masculine thing: cijeli tjedan.',
      },
      {
        q: 'The lift is broken. What do you say?',
        options: ['Lift ne radim.', 'Lift ne rade.', 'Oprostite, lift ne radi.', 'Lift nije radi.'],
        correct: 2,
        explanation: 'The lift is "it": ne radi.',
      },
      {
        q: 'Which sentence is the polite question to a receptionist?',
        options: ['Imaš li sobu?', 'Imate li sobu?', 'Imam li sobu?', 'Imamo li sobu?'],
        correct: 1,
        explanation: 'Polite vi: Imate li sobu?',
      },
      {
        q: 'What do you say when you want to pay at the end?',
        options: ['Račun, molim.', 'Izvolite ključ.', 'Ugodan boravak!', 'Na ime Horvat.'],
        correct: 0,
        explanation: 'Račun, molim. — the bill, please.',
      },
    ],
    vocab: [
      ['soba', 'room', 'Imate li slobodnu sobu?'],
      ['rezervacija', 'booking', 'Imam rezervaciju.'],
      ['slobodan', 'free, available', 'Soba je slobodna.'],
      ['jednokrevetna soba', 'single room', 'Rezerviram jednokrevetnu sobu.'],
      ['dvokrevetna soba', 'double room', 'Imamo dvokrevetnu sobu.'],
      ['ključ', 'key', 'Izvolite ključ.'],
      ['putovnica', 'passport', 'Vašu putovnicu, molim.'],
      ['doručak', 'breakfast', 'Doručak je uključen.'],
      ['recepcija', 'reception', 'Recepcija je tamo.'],
      ['lozinka', 'password', 'Koja je lozinka?'],
      ['odjava', 'checkout', 'Odjava je u podne.'],
    ],
  },

  'trebati-need': {
    worked: [
      {
        title: 'Needing a Person',
        problem: '"We need a doctor."',
        en: 'We need a doctor.',
        steps: [
          { label: 'The verb', text: 'We → trebamo.' },
          { label: 'The object', text: 'A doctor is what we need, so it takes the object form.' },
          { label: 'Is it alive?', text: 'liječnik is a person → liječnika.' },
        ],
        answer: 'Trebamo liječnika.',
      },
      {
        title: 'A Verb and a Thing Together',
        problem: '"I need to buy a ticket."',
        en: 'I need to buy a ticket.',
        steps: [
          { label: 'The need', text: 'I → trebam. Only this verb takes a person ending.' },
          { label: 'The action', text: 'The second verb stays in its dictionary form: kupiti.' },
          { label: 'The object', text: 'The ticket is what you buy: karta → kartu.' },
        ],
        answer: 'Trebam kupiti kartu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Trebam ___. (karta — a ticket)',
          options: ['karta', 'karti', 'kartu', 'karte'],
          correct: 2,
          hint: 'After trebam the thing is an object.',
          explanation: 'Trebam kartu.',
        },
        {
          q: 'Trebam ___. (a rest)',
          options: ['odmor', 'odmora', 'odmoru', 'odmorom'],
          correct: 0,
          hint: 'It is a masculine thing, not a person.',
          explanation: 'Trebam odmor. — a masculine thing does not change.',
        },
        {
          q: '"You need to study." (to a friend)',
          options: ['Trebaš učiš.', 'Trebam učiti.', 'Treba učiš.', 'Trebaš učiti.'],
          correct: 3,
          hint: 'Only trebati changes; the second verb stays in the dictionary form.',
          explanation: 'Trebaš učiti.',
        },
        {
          q: 'A shop assistant offers you a bag you do not want.',
          options: [
            'Ne treba, hvala.',
            'Trebam, hvala.',
            'Ne trebaju, hvala.',
            'Ne trebati, hvala.',
          ],
          correct: 0,
          hint: 'The fixed polite refusal uses treba with no person.',
          explanation: 'Ne treba, hvala.',
        },
        {
          type: 'type',
          q: 'Trebamo ____. (liječnik)',
          answer: 'liječnika',
          hint: 'A doctor is alive.',
          explanation: 'Trebamo liječnika.',
        },
        {
          type: 'type',
          q: 'Trebam ____ u grad. (to go)',
          answer: 'ići',
          hint: 'The dictionary form of the verb of going.',
          explanation: 'Trebam ići u grad.',
        },
        {
          type: 'type',
          q: 'Djeca ____ spavati. (trebati)',
          answer: 'trebaju',
          hint: 'djeca takes the "they" form.',
          explanation: 'Djeca trebaju spavati.',
        },
        {
          type: 'type',
          q: 'Trebam ____. (help)',
          answer: 'pomoć',
          hint: 'This feminine word ends in a consonant, so the object form looks the same.',
          explanation: 'Trebam pomoć.',
        },
        {
          type: 'type',
          q: 'Što ____? (trebati — polite you)',
          answer: 'trebate',
          hint: 'Polite vi takes -te.',
          explanation: 'Što trebate?',
        },
        {
          q: 'Moja sestra treba ___. (a new phone)',
          options: ['novog mobitela', 'novi mobitel', 'novu mobitelu', 'nova mobitela'],
          correct: 1,
          hint: 'A phone is a masculine thing.',
          explanation: 'Moja sestra treba novi mobitel.',
        },
        {
          q: '"We need to buy bread." (no particular person)',
          options: [
            'Treba kupiti kruh.',
            'Treba kupim kruh.',
            'Trebaju kupiti kruha.',
            'Treba kupimo kruh.',
          ],
          correct: 0,
          hint: 'treba alone, then the dictionary form.',
          explanation: 'Treba kupiti kruh.',
        },
        {
          q: 'Which sentence is wrong?',
          options: ['Trebam kavu.', 'Trebaš li kavu?', 'Trebam kava.', 'Trebamo kavu.'],
          correct: 2,
          hint: 'Check which one leaves the coffee in its dictionary form.',
          explanation: 'Trebam kava is wrong: the coffee is an object, so Trebam kavu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Trebam ___." (kava — a coffee)',
        options: ['kava', 'kave', 'kavi', 'kavu'],
        correct: 3,
        explanation: 'After trebam the coffee is an object: kavu.',
      },
      {
        q: 'Complete: "Trebamo ___." (a taxi)',
        options: ['taksija', 'taksi', 'taksiju', 'taksijem'],
        correct: 1,
        explanation: 'taksi is a masculine thing, so it does not change: Trebamo taksi.',
      },
      {
        q: 'Which sentence says "You do not need to wait"?',
        options: ['Ne trebaš čekati.', 'Ne trebaš čekaš.', 'Ne smiješ čekati.', 'Ne treba čekaš.'],
        correct: 0,
        explanation: 'ne trebaš + the dictionary form čekati.',
      },
      {
        q: 'Complete: "Trebamo ___." (konobar — the waiter)',
        options: ['konobar', 'konobaru', 'konobara', 'konobari'],
        correct: 2,
        explanation: 'A waiter is alive: konobara.',
      },
      {
        q: 'Complete: "Oni ___ pomoć."',
        options: ['treba', 'trebamo', 'trebate', 'trebaju'],
        correct: 3,
        explanation: 'oni → trebaju.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Trebam rezervirati stol.',
          'Trebam rezerviram stol.',
          'Treba rezerviram stol.',
          'Trebam rezervirati stola.',
        ],
        correct: 0,
        explanation: 'trebam + the dictionary form, and stol does not change.',
      },
    ],
    vocab: [
      ['trebati', 'to need', 'Trebam kartu.'],
      ['karta', 'ticket', 'Trebaš li kartu?'],
      ['pomoć', 'help', 'Trebaš li pomoć?'],
      ['odmor', 'rest, holiday', 'Trebam odmor.'],
      ['taksi', 'taxi', 'Trebamo taksi.'],
      ['mobitel', 'mobile phone', 'Sestra treba novi mobitel.'],
      ['vrećica', 'bag (plastic or paper)', 'Ne trebam vrećicu.'],
      ['ništa', 'nothing', 'Ne trebam ništa.'],
      ['brzo', 'quickly', 'Trebamo liječnika, brzo!'],
    ],
  },

  'smjeti-permission': {
    worked: [
      {
        title: 'Asking Permission',
        problem: '"May I open the window?"',
        en: 'May I open the window?',
        steps: [
          { label: 'The verb', text: 'Permission is smjeti; I → smijem.' },
          { label: 'Make it a question', text: 'smijem first, then li.' },
          {
            label: 'The second verb',
            text: 'otvoriti stays in the dictionary form; prozor is a thing and does not change.',
          },
        ],
        answer: 'Smijem li otvoriti prozor?',
      },
      {
        title: 'A Ban, Not a Choice',
        problem: '"You must not smoke here." (polite)',
        en: 'You must not smoke here.',
        steps: [
          {
            label: 'Ban or choice?',
            text: 'It is forbidden, so the verb is smjeti with ne — not morati.',
          },
          { label: 'The person', text: 'Polite vi → smijete.' },
          { label: 'Build it', text: 'Ovdje + ne smijete + the infinitive pušiti.' },
        ],
        answer: 'Ovdje ne smijete pušiti.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ li sjesti ovdje? (May I …)',
          options: ['Smijem', 'Smjem', 'Smiju', 'Smije'],
          correct: 0,
          hint: '"I", and the present has ije.',
          explanation: 'Smijem li sjesti ovdje?',
        },
        {
          q: '"You must not drive fast." (to a friend)',
          options: [
            'Ne moraš voziti brzo.',
            'Ne možeš voziti brzo.',
            'Ne smiješ voziš brzo.',
            'Ne smiješ voziti brzo.',
          ],
          correct: 3,
          hint: 'A ban, and the second verb in the dictionary form.',
          explanation: 'Ne smiješ voziti brzo.',
        },
        {
          q: 'What does "Ne moraš doći." mean?',
          options: [
            'You must not come.',
            'You do not have to come.',
            'You cannot come.',
            'You may come.',
          ],
          correct: 1,
          hint: 'morati is about obligation, not permission.',
          explanation: 'No obligation: you do not have to come.',
        },
        {
          q: 'Pas ne ___ ući.',
          options: ['smijem', 'smiju', 'smije', 'smiješ'],
          correct: 2,
          hint: 'The dog is "it".',
          explanation: 'Pas ne smije ući.',
        },
        {
          type: 'type',
          q: 'Djeca ne ____ voziti auto. (smjeti)',
          answer: 'smiju',
          hint: 'djeca takes the "they" form.',
          explanation: 'Djeca ne smiju voziti auto.',
        },
        {
          type: 'type',
          q: 'Smijem li ____? (to come in)',
          answer: 'ući',
          hint: 'The dictionary form of the verb for entering.',
          explanation: 'Smijem li ući?',
        },
        {
          type: 'type',
          q: 'Ovdje ne ____ pušiti. (smjeti — polite you)',
          answer: 'smijete',
          hint: 'Polite vi takes -te, with ije in the stem.',
          explanation: 'Ovdje ne smijete pušiti.',
        },
        {
          type: 'type',
          q: '____ li parkirati ovdje? (smjeti — we)',
          answer: 'Smijemo',
          hint: '"We" takes -mo, with ije in the stem.',
          explanation: 'Smijemo li parkirati ovdje?',
        },
        {
          type: 'type',
          q: '____ plivati, ali ovdje ne smijem. (I can)',
          answer: 'Mogu',
          hint: 'Ability, not permission.',
          explanation: 'Mogu plivati, ali ovdje ne smijem.',
        },
        {
          q: 'Which form is spelled correctly?',
          options: ['smjem', 'smijemo', 'smjemo', 'smijmo'],
          correct: 1,
          hint: 'The present always has ije.',
          explanation: 'smijemo.',
        },
        {
          q: '"May I take photos?" — the polite "No, you may not."',
          options: ['Ne, ne smijete.', 'Ne, ne morate.', 'Ne, ne smijem.', 'Ne, ne smiju.'],
          correct: 0,
          hint: 'A refusal of permission, to polite vi.',
          explanation: 'Ne, ne smijete.',
        },
        {
          q: 'Which verb is about permission?',
          options: ['moći', 'morati', 'smjeti', 'znati'],
          correct: 2,
          hint: 'Allowed, not able.',
          explanation: 'smjeti — to be allowed.',
        },
        {
          q: 'A sign says "Zabranjeno parkirati." What does it mean?',
          options: ['Parking is free.', 'No parking.', 'Park here.', 'Parking is full.'],
          correct: 1,
          hint: 'Zabranjeno means "forbidden".',
          explanation: 'Zabranjeno parkirati = Ovdje ne smijemo parkirati: no parking.',
        },
        {
          type: 'type',
          q: '____ pušiti. (the sign for "No smoking")',
          answer: 'Zabranjeno',
          accept: ['zabranjeno'],
          hint: 'One fixed word meaning "forbidden", then the verb in its dictionary form.',
          explanation: 'Zabranjeno pušiti.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ li otvoriti prozor?" (May I …)',
        options: ['Smiješ', 'Smjem', 'Smiju', 'Smijem'],
        correct: 3,
        explanation: 'ja → smijem.',
      },
      {
        q: 'Which sentence is a ban?',
        options: ['Ne moraš pušiti.', 'Ne smiješ pušiti.', 'Ne trebaš pušiti.', 'Ne želiš pušiti.'],
        correct: 1,
        explanation: 'A ban is ne smjeti.',
      },
      {
        q: 'Complete: "Pas ne ___ ući."',
        options: ['smije', 'smiju', 'smijem', 'smijete'],
        correct: 0,
        explanation: 'pas is "it": smije.',
      },
      {
        q: 'Which sentence says "May I sit down?"',
        options: [
          'Smijem li sjednem?',
          'Smjem li sjesti?',
          'Smijem li sjesti?',
          'Moram li sjesti?',
        ],
        correct: 2,
        explanation: 'smijem li + the dictionary form sjesti.',
      },
      {
        q: 'What does "Mogu plivati, ali ovdje ne smijem." say?',
        options: [
          'I cannot swim, but I am allowed here.',
          'I must swim, but not here.',
          'I do not want to swim here.',
          'I can swim, but I am not allowed to here.',
        ],
        correct: 3,
        explanation: 'mogu = able, ne smijem = not allowed.',
      },
      {
        q: 'Complete: "Ovdje ne ___ parkirati." (polite vi)',
        options: ['smiju', 'smijete', 'smije', 'smijemo'],
        correct: 1,
        explanation: 'Polite vi → smijete.',
      },
    ],
    vocab: [
      ['smjeti', 'to be allowed (may)', 'Smijem li ući?'],
      ['ući', 'to come in, to enter', 'Pas ne smije ući.'],
      ['sjesti', 'to sit down', 'Smijem li sjesti?'],
      ['pušiti', 'to smoke', 'Ovdje ne smijete pušiti.'],
      ['otvoriti', 'to open', 'Smijem li otvoriti prozor?'],
      ['prozor', 'window', 'Prozor je otvoren.'],
      ['ovdje', 'here', 'Smijemo li parkirati ovdje?'],
      ['naravno', 'of course', 'Naravno, izvolite.'],
      ['voziti', 'to drive', 'Ne smiješ voziti brzo.'],
      ['zabranjeno', 'forbidden (on signs)', 'Zabranjeno pušiti.'],
    ],
  },

  'money-exchange': {
    worked: [
      {
        title: 'Asking the Price',
        problem: '"How much is the coffee?"',
        en: 'How much is the coffee?',
        steps: [
          { label: 'The question word', text: 'How much → Koliko, at the start.' },
          { label: 'The verb', text: 'One thing costs: koštati in the "it" form, košta.' },
          { label: 'The thing', text: 'kava, the subject, in its dictionary form.' },
        ],
        answer: 'Koliko košta kava?',
      },
      {
        title: 'At the Counter',
        problem: '"I need to change dollars."',
        en: 'I need to change dollars.',
        steps: [
          { label: 'The need', text: 'trebam + a verb in the dictionary form.' },
          { label: 'The verb', text: 'Changing once, on the spot: promijeniti.' },
          {
            label: 'The object',
            text: 'dolari are what you change; a masculine plural object ends in -e: dolare.',
          },
        ],
        answer: 'Trebam promijeniti dolare.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koliko ___ kava?',
          options: ['koštam', 'košta', 'koštaju', 'koštaš'],
          correct: 1,
          hint: 'One thing costs: the "it" form.',
          explanation: 'Koliko košta kava?',
        },
        {
          q: 'At the till, for everything together: "Koliko je ___?"',
          options: ['taj', 'ta', 'to', 'tu'],
          correct: 2,
          hint: 'The word for "that" which points at no particular noun.',
          explanation: 'Koliko je to?',
        },
        {
          q: 'Which word means an exchange office?',
          options: ['bankomat', 'mjenjačnica', 'novčanica', 'kovanica'],
          correct: 1,
          hint: 'It comes from the verb for changing.',
          explanation: 'mjenjačnica.',
        },
        {
          q: 'Which word means a coin?',
          options: ['kovanica', 'novčanica', 'kartica', 'gotovina'],
          correct: 0,
          hint: 'Not paper, not plastic.',
          explanation: 'kovanica — a coin; novčanica — a banknote.',
        },
        {
          type: 'type',
          q: 'Trebam ____. (cash)',
          answer: 'gotovinu',
          hint: 'Cash is what you need, and the word is feminine in -a.',
          explanation: 'Trebam gotovinu.',
        },
        {
          type: 'type',
          q: 'Gdje je ____? (the cash machine)',
          answer: 'bankomat',
          hint: 'The word looks like "bank" + "automat".',
          explanation: 'Gdje je bankomat?',
        },
        {
          type: 'type',
          q: 'Trebam ____ novac. (to change — once)',
          answer: 'promijeniti',
          hint: 'The one-off version of the verb for changing, with ije.',
          explanation: 'Trebam promijeniti novac.',
        },
        {
          type: 'type',
          q: 'Imate li ____? (small change)',
          answer: 'sitno',
          hint: 'The word comes from "small, tiny".',
          explanation: 'Imate li sitno?',
        },
        {
          type: 'type',
          q: 'Želim promijeniti ____. (dollars)',
          answer: 'dolare',
          hint: 'A masculine plural object ends in -e.',
          explanation: 'Želim promijeniti dolare.',
        },
        {
          q: 'Which question asks about the exchange rate?',
          options: [
            'Kolika je provizija?',
            'Gdje je bankomat?',
            'Kakav je tečaj danas?',
            'Imate li sitno?',
          ],
          correct: 2,
          hint: 'tečaj is the rate.',
          explanation: 'Kakav je tečaj danas?',
        },
        {
          q: 'Which currency did Croatia use before the euro?',
          options: ['the dinar', 'the mark', 'the lira', 'the kuna'],
          correct: 3,
          hint: 'It is named after a small animal whose fur was once used as payment.',
          explanation: 'The kuna (1994–2022), named after the marten.',
        },
        {
          q: 'Which word is spelled wrongly?',
          options: ['mijenjati', 'mjenjačnica', 'mijenjačnica', 'promijeniti'],
          correct: 2,
          hint: 'The long ije shortens when the word grows longer.',
          explanation: 'It is mjenjačnica, with a short je.',
        },
      ],
    },
    checkB: [
      {
        q: 'A screen at the till shows 15,50 €. What do you pay?',
        options: [
          'fifteen euros fifty',
          'one thousand five hundred and fifty euros',
          'one hundred and fifty-five euros',
          'fifteen hundred euros',
        ],
        correct: 0,
        explanation: 'The comma separates the cents: 15,50 € is fifteen euros fifty.',
      },
      {
        q: 'Which word means the exchange rate?',
        options: ['provizija', 'račun', 'tečaj', 'sitno'],
        correct: 2,
        explanation: 'tečaj is the exchange rate; provizija is the fee.',
      },
      {
        q: 'Complete: "Trebam ___." (cash)',
        options: ['gotovina', 'gotovinu', 'gotovine', 'gotovini'],
        correct: 1,
        explanation: 'Cash is what you need: gotovina → gotovinu.',
      },
      {
        q: 'Which question asks about the fee?',
        options: [
          'Kakav je tečaj?',
          'Kolika je provizija?',
          'Gdje je mjenjačnica?',
          'Kartica ili gotovina?',
        ],
        correct: 1,
        explanation: 'provizija is the fee.',
      },
      {
        q: 'Which sentence says "I need to change money"?',
        options: [
          'Trebam promijenim novac.',
          'Trebati promijeniti novac.',
          'Trebam mijenjam novac.',
          'Trebam promijeniti novac.',
        ],
        correct: 3,
        explanation: 'trebam + the dictionary form promijeniti.',
      },
      {
        q: 'When did Croatia adopt the euro?',
        options: ['1 January 2023', '1 January 2013', '30 May 1994', '1 January 2002'],
        correct: 0,
        explanation: 'The euro replaced the kuna on 1 January 2023.',
      },
    ],
    vocab: [
      ['novac', 'money', 'Trebam promijeniti novac.'],
      ['gotovina', 'cash', 'Kartica ili gotovina?'],
      ['mjenjačnica', 'exchange office', 'Gdje je mjenjačnica?'],
      ['tečaj', 'exchange rate', 'Kakav je tečaj danas?'],
      ['bankomat', 'cash machine', 'Bankomat je tamo.'],
      ['novčanica', 'banknote', 'Imam samo novčanicu.'],
      ['kovanica', 'coin', 'Imam samo jednu kovanicu.'],
      ['sitno', 'small change', 'Imate li sitno?'],
      ['provizija', 'fee, commission', 'Kolika je provizija?'],
      ['kuna', 'kuna (Croatian currency 1994–2022)', 'Kuna je stara hrvatska valuta.'],
    ],
  },
};
