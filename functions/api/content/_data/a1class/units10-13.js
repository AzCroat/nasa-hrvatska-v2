// ─── A1 lessons in class order — Units 10 to 13 ──────────────────────────────
// Same contract as lessonClassA1.js (the Unit 1 pilot): per lesson, a `text`
// (a dialogue or short text the learner hears, reads and answers questions on)
// and a `mix` (the practice slide's items in order — a NUMBER is the index of an
// item the lesson already has in lessonPractice, an OBJECT is a new exercise).
//
// Held to the pilot's rules: only what this lesson and the lessons before it have
// taught; a match tests meaning or grammar; a sort names its groups in plain
// words; a typed answer is never shown earlier on the same slide; standard
// Croatian; the casual greeting is "Bog".
//
// Not wired into the lessons yet — checked with scripts/lessonClassCheck.mjs.

export const CLASS_A1_U10_13 = {
  // ═══ UNIT 10 ═══════════════════════════════════════════════════════════════

  // ── Verbs in -iti and -jeti ────────────────────────────────────────────────
  'verbs-iti-jeti': {
    text: {
      kind: 'dialogue',
      title: 'Govoriš li hrvatski?',
      lines: [
        {
          who: 'Maja',
          hr: 'Tom, ti dobro govoriš hrvatski! Učiš li svaki dan?',
          en: 'Tom, you speak Croatian well! Do you study every day?',
        },
        {
          who: 'Tom',
          hr: 'Učim svaki dan. Volim hrvatski, ali još ne razumijem sve.',
          en: 'I study every day. I love Croatian, but I do not understand everything yet.',
        },
        {
          who: 'Maja',
          hr: 'A tvoji roditelji? Govore li i oni hrvatski?',
          en: 'And your parents? Do they speak Croatian too?',
        },
        {
          who: 'Tom',
          hr: 'Ne govore. Mama i tata govore engleski, a mama uči i talijanski.',
          en: 'They do not. Mum and dad speak English, and mum is also learning Italian.',
        },
        { who: 'Maja', hr: 'Vidiš li ih često?', en: 'Do you see them often?' },
        {
          who: 'Tom',
          hr: 'Ne vidim. Oni ne žive ovdje, ali telefoniramo svaki tjedan.',
          en: 'I do not. They do not live here, but we phone every week.',
        },
        {
          who: 'Maja',
          hr: 'I moj brat i ja učimo jezik: njemački. Što misliš, je li hrvatski lijep?',
          en: 'My brother and I are learning a language too: German. What do you think, is Croatian beautiful?',
        },
        {
          who: 'Tom',
          hr: 'Jest! Hrvatski je jako lijep jezik.',
          en: 'It is! Croatian is a very beautiful language.',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: what do we learn about Tom's parents?",
          options: [
            'They speak Croatian with Tom every day',
            'They speak English and do not live here',
            'They are learning German',
            'They live with Tom and Maja',
          ],
          correct: 1,
          hint: 'Think of what Tom answers when Maja asks whether they speak Croatian, and whether he sees them.',
          explanation:
            'They speak English (and mum is learning Italian), and they do not live here — Tom phones them every week. It is Maja and her brother who are learning German.',
        },
        {
          q: 'Tom says "Mama i tata govore engleski." Why "govore" and not "govori"?',
          options: [
            'Because engleski is a language',
            'Because the sentence is negative',
            'Mum and dad are two people, so the verb takes the "they" form, which ends in -e',
            'Because Tom is speaking about himself',
          ],
          correct: 2,
          hint: 'Count the people who do the speaking.',
          explanation:
            'Mama i tata = oni (they). A verb in -iti takes -e for "they": oni govore. One person would be govori: Mama govori engleski.',
        },
        {
          type: 'type',
          q: 'Now you. Maja asks YOU: "Radiš li danas?" Say that you do — one word, with the verb: ____.',
          answer: 'Radim',
          accept: ['Da, radim'],
          hint: 'raditi is an -iti verb: take -iti off and add the ending for "I", as in učim and volim.',
          explanation: 'Radim. — "I do (work)." raditi → rad- + -im, exactly like učiti → učim.',
        },
        {
          type: 'type',
          q: 'Tell Maja about your friends: Moji prijatelji ____ talijanski. (učiti)',
          answer: 'uče',
          hint: 'Your friends are "they". For "they", an -iti verb ends in -e — as in the dialogue: Mama i tata govore.',
          explanation:
            'Moji prijatelji uče talijanski. — učiti → oni uče, like govoriti → oni govore.',
        },
        {
          type: 'transform',
          q: 'Change "ja" to "oni".',
          from: 'Ja vidim more.',
          answer: 'Oni vide more.',
          hint: 'The "they" form of this verb group ends in -e.',
          explanation:
            'Oni vide more. — vidjeti loses its -je- in every present form: vidim, vidiš … vide.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each person to its form of sjediti (to sit).',
        pairs: [
          ['ja', 'sjedim'],
          ['ti', 'sjediš'],
          ['ona', 'sjedi'],
          ['mi', 'sjedimo'],
          ['oni', 'sjede'],
        ],
        explanation:
          'sjediti → sjedim, sjediš, sjedi, sjedimo, sjedite, sjede. Five endings start with i; only "they" ends in -e.',
      },
      8,
      {
        type: 'sort',
        q: 'Look at the vowel before -ti. Which ending does the verb take for "I": -im or -am?',
        groups: ['"I" ends in -im', '"I" ends in -am'],
        items: [
          { hr: 'raditi', group: 0 },
          { hr: 'gledati', group: 1 },
          { hr: 'vidjeti', group: 0 },
          { hr: 'čitati', group: 1 },
          { hr: 'misliti', group: 0 },
          { hr: 'čekati', group: 1 },
          { hr: 'živjeti', group: 0 },
        ],
        explanation:
          'An i (or je) before -ti gives -im; an a gives -am. A few common verbs break the pattern, such as piti and razumjeti — learn those as you meet them.',
      },
      9,
      {
        type: 'tf',
        q: '"Oni radaju" is the correct "they" form of raditi.',
        answer: false,
        hint: 'raditi is an -iti verb. Which ending does "they" take in that group?',
        explanation:
          'It is oni rade. The ending -aju belongs to -ati verbs: oni čitaju, oni gledaju.',
      },
      3,
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ja', 'vidjem', 'more.'],
        wrong: 1,
        answer: 'vidim',
        hint: 'The -je- belongs only to the dictionary form.',
        explanation: 'Ja vidim more. — vidjeti drops -jeti and adds -im; nobody says "vidjem".',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "We learn Croatian every day."',
        words: ['Učimo', 'hrvatski', 'svaki', 'dan.'],
        explanation: 'Učimo hrvatski svaki dan. — učiti → učimo; no "mi" is needed.',
      },
      7,
      {
        type: 'transform',
        q: 'Change "ja" to "oni".',
        from: 'Ja živim ovdje.',
        answer: 'Oni žive ovdje.',
        hint: 'živjeti goes like govoriti. Think of the "they" ending in that group.',
        explanation: 'Oni žive ovdje. — živjeti → živim … žive. The -je- is gone in every form.',
      },
      11,
      {
        type: 'listen',
        audio: 'Moji roditelji ne govore hrvatski.',
        q: 'Who does not speak Croatian?',
        options: ['I do not', 'My brother', 'My parents', 'We do not'],
        correct: 2,
        explanation: 'Moji roditelji ne govore hrvatski. — my parents; govore is the "they" form.',
      },
      12,
      {
        type: 'dictate',
        audio: 'Mi volimo more.',
        answer: 'Mi volimo more.',
        hint: 'Three words. The verb is the "we" form of voljeti.',
        explanation: 'Mi volimo more. — we love the sea. voljeti → volimo.',
      },
    ],
  },

  // ── Clothes ────────────────────────────────────────────────────────────────
  'clothes-appearance': {
    text: {
      kind: 'dialogue',
      title: 'Nova jakna',
      lines: [
        {
          who: 'Prodavačica',
          hr: 'Dobar dan! Izvolite?',
          en: 'Good afternoon! How can I help you?',
        },
        {
          who: 'Ana',
          hr: 'Dobar dan. Tražim jaknu. Imate li crnu jaknu, broj trideset osam?',
          en: 'Good afternoon. I am looking for a jacket. Do you have a black jacket, size thirty-eight?',
        },
        {
          who: 'Prodavačica',
          hr: 'Nemamo crnu, ali imamo ovu plavu. Jako je lijepa.',
          en: 'We do not have a black one, but we have this blue one. It is very nice.',
        },
        { who: 'Ana', hr: 'Mogu li je probati?', en: 'Can I try it on?' },
        {
          who: 'Prodavačica',
          hr: 'Naravno. Kabina je tamo lijevo.',
          en: 'Of course. The fitting room is over there on the left.',
        },
        {
          who: 'Ana',
          hr: 'Dobra je! Uzimam ovu jaknu. Trebam i bijelu košulju.',
          en: 'It is good! I will take this jacket. I also need a white shirt.',
        },
        {
          who: 'Prodavačica',
          hr: 'Košulje su ovdje. Imamo i ove hlače: nove su i nisu skupe.',
          en: 'The shirts are here. We also have these trousers: they are new and they are not expensive.',
        },
        {
          who: 'Ana',
          hr: 'Hvala, ali ne trebam hlače. Uvijek nosim traperice!',
          en: 'Thank you, but I do not need trousers. I always wear jeans!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Ana take, and what does she say no to?',
          options: [
            'She takes the black jacket and says no to the shirt',
            'She takes the trousers and says no to the jacket',
            'She takes the blue jacket and says no to the trousers',
            'She takes the jeans and says no to the shirt',
          ],
          correct: 2,
          hint: 'The shop has no black jacket. And what does Ana always wear?',
          explanation:
            'There is no black jacket, so she takes the blue one (and needs a white shirt). She does not need trousers — she always wears jeans.',
        },
        {
          q: 'The dictionary forms are "crna jakna". Why does Ana ask "Imate li crnu jaknu"?',
          options: [
            'Because it is a question',
            'Because the jacket is the object of imate, so both words take the accusative -u',
            'Because jakna is plural',
            'Because crnu is a different colour from crna',
          ],
          correct: 1,
          hint: 'What do you have? The thing you have, look for or wear is an object.',
          explanation:
            'After imati, tražiti, trebati and nositi the thing is an object: jakna → jaknu, and the colour goes with it: crna → crnu.',
        },
        {
          type: 'type',
          q: 'Now you. The shop assistant asks: "Izvolite?" You are looking for a green shirt (green = zelen): Tražim ____ košulju.',
          answer: 'zelenu',
          hint: 'The colour must match košulju: feminine, and an object — like "crnu jaknu" in the dialogue.',
          explanation:
            'Tražim zelenu košulju. — zelena košulja becomes zelenu košulju as an object.',
        },
        {
          type: 'type',
          q: 'Say what your brother wears: Moj brat uvijek ____ crne hlače.',
          answer: 'nosi',
          hint: 'Ana says "nosim" about herself. The verb is nositi, an -iti verb: use the form for "he".',
          explanation:
            'Moj brat uvijek nosi crne hlače. — nositi: nosim, nosiš, nosi. For clothes you have on, use nositi, not imati.',
        },
        {
          type: 'transform',
          q: 'Say the same about the trousers (hlače) instead of the jacket.',
          from: 'Ova jakna je nova.',
          answer: 'Ove hlače su nove.',
          hint: 'hlače is always plural and feminine: the pointing word, the verb and the adjective all change — the shop assistant says "ove hlače: nove su".',
          explanation: 'Ove hlače su nove. — one pair, but a plural word: ove, su, nove.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each piece of clothing to its meaning.',
        pairs: [
          ['majica', 'T-shirt'],
          ['košulja', 'shirt'],
          ['hlače', 'trousers'],
          ['haljina', 'dress'],
          ['cipele', 'shoes'],
        ],
        explanation:
          'majica — T-shirt, košulja — shirt, hlače — trousers, haljina — dress, cipele — shoes.',
      },
      4,
      {
        type: 'sort',
        q: 'Is the word singular (one thing: "… je") or a plural word ("… su")?',
        groups: ['Singular: … je', 'Plural word: … su'],
        items: [
          { hr: 'jakna', group: 0 },
          { hr: 'hlače', group: 1 },
          { hr: 'kaput', group: 0 },
          { hr: 'traperice', group: 1 },
          { hr: 'haljina', group: 0 },
          { hr: 'cipele', group: 1 },
          { hr: 'čarape', group: 1 },
        ],
        explanation:
          'hlače and traperice exist only in the plural; cipele and čarape usually come in pairs. All four are feminine plural, so adjectives take -e.',
      },
      5,
      {
        type: 'tf',
        q: '"Imam plavu majicu." says that you have a blue T-shirt on right now.',
        answer: false,
        hint: 'One verb is for owning, another for wearing.',
        explanation: 'Imam plavu majicu says you own one. What you have on is: Nosim plavu majicu.',
      },
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Nosim', 'crven', 'majicu.'],
        wrong: 1,
        answer: 'crvenu',
        hint: 'The colour has to match the noun after it — feminine, and an object.',
        explanation:
          'Nosim crvenu majicu. — the colour agrees in gender and case: crvena majica → crvenu majicu.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "Where is the fitting room?"',
        words: ['Gdje', 'je', 'kabina?'],
        explanation: 'Gdje je kabina? — the question word first, then je.',
      },
      0,
      {
        type: 'transform',
        q: 'Say that you are wearing it. Start with "Nosim".',
        from: 'Ovo je bijela košulja.',
        answer: 'Nosim bijelu košulju.',
        hint: 'What you wear is an object: both the colour and the noun change their ending.',
        explanation: 'Nosim bijelu košulju. — bijela košulja → bijelu košulju after nosim.',
      },
      8,
      {
        type: 'listen',
        audio: 'Tražim crne cipele, broj četrdeset.',
        q: 'What is the customer looking for?',
        options: [
          'Black trousers, size 40',
          'Black shoes, size 40',
          'Black shoes, size 14',
          'White shoes, size 40',
        ],
        correct: 1,
        explanation: 'Tražim crne cipele, broj četrdeset. — black shoes, size forty.',
      },
      7,
      10,
      {
        type: 'dictate',
        audio: 'Uzimam ovu jaknu.',
        answer: 'Uzimam ovu jaknu.',
        hint: 'Three words: "I will take this jacket."',
        explanation: 'Uzimam ovu jaknu. — ova jakna is the object, so both words end in -u.',
      },
    ],
  },

  // ── Shopping and prices ────────────────────────────────────────────────────
  'shopping-prices': {
    text: {
      kind: 'dialogue',
      title: 'Koliko košta?',
      lines: [
        {
          who: 'Ivan',
          hr: 'Dobar dan! Koliko košta ova torba?',
          en: 'Good afternoon! How much does this bag cost?',
        },
        {
          who: 'Prodavačica',
          hr: 'Dobar dan. Ta torba košta sto dvadeset.',
          en: 'Good afternoon. That bag costs a hundred and twenty.',
        },
        {
          who: 'Ivan',
          hr: 'Sto dvadeset? To je preskupo! Imate li jeftinu torbu?',
          en: 'A hundred and twenty? That is too expensive! Do you have a cheap bag?',
        },
        {
          who: 'Prodavačica',
          hr: 'Imamo. Ova crna je jeftina: četrdeset pet.',
          en: 'We do. This black one is cheap: forty-five.',
        },
        {
          who: 'Ivan',
          hr: 'Dobro, uzimam crnu. A koliko koštaju ove majice?',
          en: 'Good, I will take the black one. And how much do these T-shirts cost?',
        },
        {
          who: 'Prodavačica',
          hr: 'Majice nisu skupe. Jedna majica košta petnaest.',
          en: 'The T-shirts are not expensive. One T-shirt costs fifteen.',
        },
        {
          who: 'Ivan',
          hr: 'Uzimam i majicu. Imate li vrećicu?',
          en: 'I will take a T-shirt too. Do you have a bag?',
        },
        {
          who: 'Prodavačica',
          hr: 'Naravno, izvolite. To je zajedno šezdeset.',
          en: 'Of course, here you are. That is sixty altogether.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Ivan buy, and what does he pay altogether?',
          options: [
            'The first bag and a T-shirt — 120',
            'Only the black bag — 45',
            'Two T-shirts — 30',
            'The black bag and a T-shirt — 60',
          ],
          correct: 3,
          hint: 'The first bag was too expensive. Add the two prices he agrees to.',
          explanation:
            'He takes the black bag (45) and one T-shirt (15): together 60. The first bag, at 120, was too expensive.',
        },
        {
          q: 'Ivan says "To je preskupo!" What does pre- add to skupo?',
          options: [
            '"not" — not expensive',
            '"too" — too expensive',
            '"a little" — a little expensive',
            '"very cheap"',
          ],
          correct: 1,
          hint: 'Think of how he reacts: he asks for a cheap bag straight away.',
          explanation: 'pre- means "too": skupo is expensive, preskupo is too expensive.',
        },
        {
          type: 'type',
          q: 'Now you. You point at some shoes and ask the price: Koliko ____ ove cipele?',
          answer: 'koštaju',
          hint: 'Shoes are plural, so the verb needs its "they" form. koštati is an -ati verb, like čitati → čitaju.',
          explanation: 'Koliko koštaju ove cipele? — one thing košta, several things koštaju.',
        },
        {
          type: 'type',
          q: 'The shop assistant shows you a price tag: 70. Say the number: ____.',
          answer: 'sedamdeset',
          hint: 'The tens are built from the number plus the word for ten, as in četrdeset.',
          explanation: 'sedamdeset — sedam (7) + deset (10), written as one word.',
        },
        {
          type: 'transform',
          q: 'Say the same about the T-shirt (majica) instead of the coat.',
          from: 'Kaput je preskup.',
          answer: 'Majica je preskupa.',
          hint: 'majica is feminine, and the adjective has to agree with it.',
          explanation:
            'Majica je preskupa. — the adjective agrees: preskup kaput, preskupa majica.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each number word to its figure.',
        pairs: [
          ['trideset', '30'],
          ['šezdeset', '60'],
          ['devedeset', '90'],
          ['dvjesto', '200'],
          ['tisuća', '1000'],
        ],
        explanation: 'trideset 30, šezdeset 60, devedeset 90, dvjesto 200, tisuća 1000.',
      },
      0,
      8,
      {
        type: 'sort',
        q: 'Is it a place where you shop, or a word that describes the price?',
        groups: ['A place where you shop', 'A word about the price'],
        items: [
          { hr: 'dućan', group: 0 },
          { hr: 'skup', group: 1 },
          { hr: 'tržnica', group: 0 },
          { hr: 'jeftin', group: 1 },
          { hr: 'pekarnica', group: 0 },
          { hr: 'preskup', group: 1 },
          { hr: 'ljekarna', group: 0 },
        ],
        explanation:
          'dućan (shop), tržnica (market), pekarnica (bakery) and ljekarna (pharmacy) are places. skup, jeftin and preskup say whether the price is high, low or too high.',
      },
      9,
      {
        type: 'tf',
        q: '"Sto četrdeset osam" is the number 148.',
        answer: true,
        hint: 'Read the parts in order: hundred, tens, ones.',
        explanation:
          'sto (100) + četrdeset (40) + osam (8) = 148. Croatian just writes the parts in order.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "How much does this cost?"',
        words: ['Koliko', 'ovo', 'košta?'],
        explanation: 'Koliko ovo košta? — the price is an amount, so the question word is koliko.',
      },
      4,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ove', 'jabuke', 'su', 'jeftin', 'i', 'slatke.'],
        wrong: 3,
        answer: 'jeftine',
        hint: 'The apples are feminine plural. Both adjectives have to agree with them.',
        explanation:
          'Ove jabuke su jeftine i slatke. — jabuke is feminine plural, so the adjective ends in -e.',
      },
      10,
      {
        type: 'transform',
        q: 'Ask about several T-shirts: change "ova majica" to "ove majice".',
        from: 'Koliko košta ova majica?',
        answer: 'Koliko koštaju ove majice?',
        hint: 'With a plural subject the verb changes too.',
        explanation: 'Koliko koštaju ove majice? — majice is plural, so košta becomes koštaju.',
      },
      {
        type: 'listen',
        audio: 'Ta jakna košta dvjesto trideset.',
        q: 'How much is the jacket?',
        options: ['320', '230', '213', '203'],
        correct: 1,
        explanation: 'dvjesto trideset = 200 + 30 = 230.',
      },
      11,
      {
        type: 'listen',
        audio: 'Ljekarna je zatvorena.',
        q: 'What did you hear?',
        options: [
          'The bakery is closed.',
          'The pharmacy is open.',
          'The pharmacy is closed.',
          'The market is closed.',
        ],
        correct: 2,
        explanation: 'Ljekarna je zatvorena. — the pharmacy is closed.',
      },
      {
        type: 'dictate',
        audio: 'Imate li sitno?',
        answer: 'Imate li sitno?',
        hint: 'Three words. You are asking a shop assistant for small change.',
        explanation: 'Imate li sitno? — Do you have change?',
      },
    ],
  },

  // ── The locative ───────────────────────────────────────────────────────────
  'locative-intro': {
    text: {
      kind: 'dialogue',
      title: 'Gdje si?',
      lines: [
        {
          who: 'Ana',
          hr: 'Bog, Marko! Gdje si? Jesi li u školi?',
          en: 'Hi, Marko! Where are you? Are you at school?',
        },
        {
          who: 'Marko',
          hr: 'Nisam, danas sam u gradu. Sjedim u kavani i pijem kavu.',
          en: 'No, today I am in town. I am sitting in a café and drinking coffee.',
        },
        {
          who: 'Ana',
          hr: 'A gdje je Petra? Je li i ona u kavani?',
          en: 'And where is Petra? Is she in the café too?',
        },
        {
          who: 'Marko',
          hr: 'Nije. Petra je na poslu. Ona radi u banci.',
          en: 'No. Petra is at work. She works in a bank.',
        },
        {
          who: 'Ana',
          hr: 'A tvoji roditelji? Jesu li doma?',
          en: 'And your parents? Are they at home?',
        },
        {
          who: 'Marko',
          hr: 'Nisu. Mama i tata su na moru. Sada su na otoku.',
          en: 'No. Mum and dad are at the seaside. Right now they are on an island.',
        },
        {
          who: 'Ana',
          hr: 'Lijepo! Ja sam u parku i čitam knjigu o Zagrebu.',
          en: 'Lovely! I am in the park, reading a book about Zagreb.',
        },
        {
          who: 'Marko',
          hr: 'Idem i ja u park! Vidimo se.',
          en: 'I am coming to the park too! See you.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is everybody?',
          options: [
            'Marko is at school, Petra is in a café, the parents are at home',
            'Marko is in a café, Petra is at work, the parents are at the seaside',
            'Marko is in the park, Petra is in a bank, the parents are in Zagreb',
            'Marko is at work, Petra is at school, the parents are on an island',
          ],
          correct: 1,
          hint: 'Marko is drinking coffee. Petra works in a bank. Mum and dad are on an island.',
          explanation:
            'Marko sits in a café in town, Petra is at work in the bank, and the parents are at the seaside, on an island. Ana is the one in the park.',
        },
        {
          q: 'Ana says "Ja sam u parku", but Marko answers "Idem i ja u park". Why does park have an ending only the first time?',
          options: [
            'Ana is in the park already (position), while Marko is on his way there (motion)',
            'Ana is a woman and Marko is a man',
            'Marko made a mistake',
            'Because "idem" is negative',
          ],
          correct: 0,
          hint: 'Ask "Gdje?" about Ana and "Kamo?" about Marko.',
          explanation:
            'Being somewhere takes a special place ending — the locative: u parku. Going somewhere takes the accusative you already know: u park.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Gdje si?" You are in Split: U ____ sam.',
          answer: 'Splitu',
          hint: 'Split is masculine, like grad and park in the dialogue. Add the same place ending.',
          explanation:
            'U Splitu sam. — masculine nouns take -u for where something is: u gradu, u parku.',
        },
        {
          type: 'type',
          q: 'Ana asks where your sister works. She works in a pharmacy (ljekarna): Radi u ____.',
          answer: 'ljekarni',
          hint: 'ljekarna is feminine, like kavana and škola. In the dialogue: u kavani, u školi.',
          explanation:
            'Radi u ljekarni. — a feminine noun in -a swaps it for -i: kavana → u kavani.',
        },
        {
          type: 'transform',
          q: 'You have arrived. Say where you ARE instead of where you are going.',
          from: 'Idem u ured.',
          answer: 'U uredu sam.',
          accept: ['Ja sam u uredu.', 'Sada sam u uredu.'],
          hint: 'Being there needs the place ending, and ured is masculine. The short word sam cannot come first.',
          explanation: 'U uredu sam. — Idem u ured is the way there; u uredu is being there.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Is the person on the way there, or already there?',
        groups: ['On the way there', 'Already there'],
        items: [
          { hr: 'Idem u školu.', group: 0 },
          { hr: 'U školi sam.', group: 1 },
          { hr: 'Idemo na more.', group: 0 },
          { hr: 'Na moru smo.', group: 1 },
          { hr: 'Idu u vrt.', group: 0 },
          { hr: 'Sjedim u vrtu.', group: 1 },
        ],
        explanation:
          'Going takes the accusative (u školu, na more, u vrt). Being or sitting somewhere takes the locative (u školi, na moru, u vrtu).',
      },
      4,
      {
        type: 'tf',
        q: '"Živim u Zagreb." is correct Croatian.',
        answer: false,
        hint: 'Living somewhere is not moving. Which ending does the place need?',
        explanation:
          'Where you live is a position, so the place takes the locative: Živim u Zagrebu.',
      },
      0,
      {
        type: 'match',
        q: 'Match each question to its answer.',
        pairs: [
          ['Gdje radi učiteljica?', 'U školi.'],
          ['Kamo ideš?', 'Na more.'],
          ['Gdje je kruh?', 'Na stolu.'],
          ['Tko je u vrtu?', 'Baka.'],
        ],
        explanation:
          'Gdje? asks where something is, and the answer is in the locative: u školi, na stolu. Kamo? asks where to: na more.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Mama', 'radi', 'u', 'banki', 'u', 'gradu.'],
        wrong: 3,
        answer: 'banci',
        hint: 'Before the ending -i, k does not stay k.',
        explanation: 'Mama radi u banci u gradu. — banka → u banci: k becomes c before -i.',
      },
      2,
      {
        type: 'order',
        q: 'Put the words in order: "The book is on the table."',
        words: ['Knjiga', 'je', 'na', 'stolu.'],
        explanation: 'Knjiga je na stolu. — na + locative: stol → na stolu.',
      },
      6,
      {
        type: 'transform',
        q: 'Answer "Gdje si?" instead of "Kamo ideš?" — you are there now.',
        from: 'Idem u park.',
        answer: 'U parku sam.',
        accept: ['Ja sam u parku.', 'Sada sam u parku.'],
        hint: 'Change the verb to "I am", give the place its ending, and keep sam out of first place.',
        explanation: 'U parku sam. — position: park → u parku.',
      },
      3,
      7,
      {
        type: 'listen',
        audio: 'Moji roditelji žive na otoku.',
        q: 'Where do the parents live?',
        options: ['In a village', 'At the seaside', 'In town', 'On an island'],
        correct: 3,
        explanation: 'Moji roditelji žive na otoku. — on an island; islands take na.',
      },
      8,
      {
        type: 'dictate',
        audio: 'Sjedimo u vrtu.',
        answer: 'Sjedimo u vrtu.',
        hint: 'Three words: "We are sitting in the garden."',
        explanation: 'Sjedimo u vrtu. — vrt → u vrtu: masculine, so -u.',
      },
    ],
  },

  // ── U and na: where vs where to ────────────────────────────────────────────
  'prepositions-place': {
    text: {
      kind: 'dialogue',
      title: 'Kamo ideš?',
      lines: [
        { who: 'Luka', hr: 'Bog, Ivana! Kamo ideš?', en: 'Hi, Ivana! Where are you going?' },
        {
          who: 'Ivana',
          hr: 'Idem na tržnicu. A ti? Jesi li danas na poslu?',
          en: 'I am going to the market. And you? Are you at work today?',
        },
        {
          who: 'Luka',
          hr: 'Nisam. Danas ne radim, idem na plažu. Moja djeca su već na plaži.',
          en: 'No. I am not working today, I am going to the beach. My children are already at the beach.',
        },
        {
          who: 'Ivana',
          hr: 'A gdje je tvoja žena? Je li i ona na plaži?',
          en: 'And where is your wife? Is she at the beach too?',
        },
        {
          who: 'Luka',
          hr: 'Nije, ona je u gradu. Večeras idemo u kino.',
          en: 'No, she is in town. Tonight we are going to the cinema.',
        },
        {
          who: 'Ivana',
          hr: 'Lijepo! Moj muž je na poslu, a djeca su u školi.',
          en: 'Lovely! My husband is at work, and the children are at school.',
        },
        {
          who: 'Luka',
          hr: 'Ideš li i ti večeras u kino?',
          en: 'Are you going to the cinema tonight too?',
        },
        {
          who: 'Ivana',
          hr: 'Ne mogu. Večeras idem na koncert.',
          en: 'I cannot. Tonight I am going to a concert.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is Luka going now, and where is he going tonight?',
          options: [
            'Now to the market, tonight to a concert',
            'Now to work, tonight to the beach',
            'Now to the beach, tonight to the cinema',
            'Now into town, tonight to the cinema',
          ],
          correct: 2,
          hint: 'His children are already where he is going. His wife and he have a plan for the evening.',
          explanation:
            "Luka is going to the beach now, and tonight he and his wife are going to the cinema. The market and the concert are Ivana's plans.",
        },
        {
          q: 'Luka says "idem na plažu" and then "Moja djeca su već na plaži." Why two different endings?',
          options: [
            'plažu is singular and plaži is plural',
            'Luka is a man and the children are a group',
            'After idem the place is a destination (accusative); after su it is where they already are (locative)',
            'There is no difference — both are always correct',
          ],
          correct: 2,
          hint: 'One answers "Kamo?", the other answers "Gdje?".',
          explanation:
            'Kamo? — na plažu: he is on his way, so the accusative. Gdje? — na plaži: they are there, so the locative. The preposition na stays the same.',
        },
        {
          type: 'type',
          q: 'Now you. Luka asks YOU: "Kamo ideš?" You are going to the bank (banka): Idem u ____.',
          answer: 'banku',
          hint: 'You are on your way, so the place is a destination: the accusative of a noun in -a.',
          explanation: 'Idem u banku. — motion takes the accusative: banka → banku.',
        },
        {
          type: 'type',
          q: 'Later Ivana phones you: "Gdje si?" You are at the concert now: Na ____ sam.',
          answer: 'koncertu',
          hint: 'Nothing is moving any more, so the place takes the locative. koncert is masculine.',
          explanation:
            'Na koncertu sam. — Ivana said "idem na koncert" (on the way); being there is na koncertu.',
        },
        {
          type: 'transform',
          q: 'Ana has arrived. Change "ide" to "je" and give the place the right ending.',
          from: 'Ana ide na tržnicu.',
          answer: 'Ana je na tržnici.',
          hint: 'Being there takes the locative: a feminine noun in -a changes its last letter.',
          explanation:
            'Ana je na tržnici. — na tržnicu is the way there, na tržnici is being there.',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Which little word goes with the place: u or na?',
        groups: ['u', 'na'],
        items: [
          { hr: 'ured', group: 0 },
          { hr: 'more', group: 1 },
          { hr: 'škola', group: 0 },
          { hr: 'tržnica', group: 1 },
          { hr: 'kino', group: 0 },
          { hr: 'otok', group: 1 },
          { hr: 'kuća', group: 0 },
          { hr: 'plaža', group: 1 },
        ],
        explanation:
          'ured, škola, kino and kuća take u; more, tržnica, otok and plaža take na. The place decides, so learn it with its word.',
      },
      8,
      4,
      9,
      {
        type: 'tf',
        q: '"Idem u gradu." is correct Croatian.',
        answer: false,
        hint: 'idem means you are on your way. Which form does a destination take?',
        explanation:
          'On the way, the place is in the accusative: Idem u grad. The form u gradu is for being there: U gradu sam.',
      },
      1,
      {
        type: 'match',
        q: 'Match each question to its answer.',
        pairs: [
          ['Kamo ideš?', 'Idem u kino.'],
          ['Gdje si?', 'U kinu sam.'],
          ['Kamo idu djeca?', 'Idu na plažu.'],
          ['Gdje su djeca?', 'Na plaži su.'],
        ],
        explanation:
          'Kamo? is answered with a destination (u kino, na plažu); Gdje? with a position (u kinu, na plaži). The verb shows who is meant.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Baka', 'živi', 'na', 'otok', 'i', 'voli', 'more.'],
        wrong: 3,
        answer: 'otoku',
        hint: 'Living somewhere is a position, not a journey.',
        explanation:
          'Baka živi na otoku i voli more. — živjeti happens in a place, so the locative: na otoku.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Where are you going tonight?"',
        words: ['Kamo', 'ideš', 'večeras?'],
        explanation: 'Kamo ideš večeras? — kamo asks about a destination.',
      },
      6,
      {
        type: 'transform',
        q: 'Now they are on their way. Change "smo" to "idemo" and fix the place.',
        from: 'Na moru smo.',
        answer: 'Idemo na more.',
        accept: ['Na more idemo.'],
        hint: 'A destination takes the accusative — and a neuter noun does not change there.',
        explanation: 'Idemo na more. — na moru is being there; na more is going there.',
      },
      {
        type: 'listen',
        audio: 'Večeras idemo na koncert.',
        q: 'Where are they going tonight?',
        options: ['To the cinema', 'To a concert', 'To the beach', 'To the market'],
        correct: 1,
        explanation: 'Večeras idemo na koncert. — to a concert; events take na.',
      },
      {
        type: 'dictate',
        audio: 'Djeca su na plaži.',
        answer: 'Djeca su na plaži.',
        hint: 'Four words. Nobody is moving, so the last word has the place ending.',
        explanation: 'Djeca su na plaži. — the children are at the beach: plaža → na plaži.',
      },
    ],
  },

  // ═══ UNIT 11 ═══════════════════════════════════════════════════════════════

  // ── About me, about you: the locative pronouns ─────────────────────────────
  'locative-pronouns': {
    text: {
      kind: 'dialogue',
      title: 'Novi kolege',
      lines: [
        {
          who: 'Ana',
          hr: 'Maja, poznaješ li Luku i Ivu? Oni su novi kolege.',
          en: 'Maja, do you know Luka and Iva? They are the new colleagues.',
        },
        {
          who: 'Maja',
          hr: 'Poznajem ih. U uredu stalno pričaju o njima.',
          en: 'I know them. In the office people talk about them all the time.',
        },
        { who: 'Ana', hr: 'A što znaš o njemu?', en: 'And what do you know about him?' },
        {
          who: 'Maja',
          hr: 'Luka je iz Splita i često priča o moru. Iva je njegova sestra, ali o njoj ne znam ništa.',
          en: 'Luka is from Split and often talks about the sea. Iva is his sister, but I know nothing about her.',
        },
        {
          who: 'Ana',
          hr: 'Što misliš o njemu? Je li dobar kolega?',
          en: 'What do you think of him? Is he a good colleague?',
        },
        {
          who: 'Maja',
          hr: 'Jest. I često govori o tebi, Ana!',
          en: 'He is. And he often talks about you, Ana!',
        },
        {
          who: 'Ana',
          hr: 'O meni? Što govori o meni?',
          en: 'About me? What does he say about me?',
        },
        {
          who: 'Maja',
          hr: 'Ne znam što govori. Ali stalno pita: "Gdje je Ana?"',
          en: 'I do not know what he says. But he keeps asking: "Where is Ana?"',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Maja know about Iva?',
          options: [
            'That she is from Split and loves the sea',
            'That she often talks about Ana',
            "Only that she is Luka's sister",
            'That she is a good colleague',
          ],
          correct: 2,
          hint: 'Maja knows a lot about Luka. About Iva she says "ne znam ništa" — after one single fact.',
          explanation:
            "Iva is Luka's sister, and that is all Maja knows. It is Luka who is from Split, talks about the sea and asks about Ana.",
        },
        {
          q: 'Maja says "o njemu" about Luka but "o njoj" about Iva. What decides which form she uses?',
          options: [
            'Whether the sentence is a question',
            'Who is speaking — a man or a woman',
            'Whether the person is in the room',
            'Who she is talking about: a man (on) or a woman (ona)',
          ],
          correct: 3,
          hint: 'Luka is "on". Iva is "ona".',
          explanation:
            'After o ("about"), on becomes njemu and ona becomes njoj. The pronoun changes its form after a preposition, just as nouns do.',
        },
        {
          type: 'type',
          q: 'Now you. Maja asks YOU: "Govori li Luka o meni?" He does. Answer her: Da, govori o ____.',
          answer: 'tebi',
          hint: 'Maja says "about me". You answer "about you" — the form of ti that Maja uses to Ana in the dialogue.',
          explanation: 'Da, govori o tebi. — her "o meni" becomes your "o tebi": ti → tebi.',
        },
        {
          type: 'type',
          q: 'Ana asks you: "Što znaš o Luki i Ivi?" Nothing at all! Ne znam ništa o ____.',
          answer: 'njima',
          hint: 'Luka and Iva together are "they". Maja uses this form in her first line.',
          explanation: 'Ne znam ništa o njima. — oni → njima: one form for every "they".',
        },
        {
          type: 'transform',
          q: 'Replace "o Luki" with a pronoun.',
          from: 'Često pričamo o Luki.',
          answer: 'Često pričamo o njemu.',
          hint: 'Luka is a man: use the form of "on" that follows o.',
          explanation: 'Često pričamo o njemu. — Luka = on, and after o that is njemu.',
        },
      ],
    },
    mix: [
      1,
      {
        type: 'tf',
        q: 'After "o" you can choose a short form of the pronoun, as you can in the accusative (me, te, ga).',
        answer: false,
        hint: 'How many sets of forms did this lesson give you?',
        explanation:
          'The locative has only one set of forms, and it always follows a preposition — there are no short forms to choose from.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Baka', 'priča', 'o', 'vi', 'svaki', 'dan.'],
        wrong: 3,
        answer: 'vama',
        hint: 'After a preposition the pronoun cannot keep its subject form.',
        explanation: 'Baka priča o vama svaki dan. — vi becomes vama after o.',
      },
      10,
      {
        type: 'sort',
        q: 'Which noun can each pronoun point back to? Sort the nouns by gender: "u njoj" (feminine) or "u njemu" (masculine or neuter).',
        groups: ['u njoj — a feminine noun', 'u njemu — a masculine or neuter noun'],
        items: [
          { hr: 'soba', group: 0 },
          { hr: 'grad', group: 1 },
          { hr: 'kuća', group: 0 },
          { hr: 'selo', group: 1 },
          { hr: 'torba', group: 0 },
          { hr: 'park', group: 1 },
        ],
        explanation:
          'The pronoun follows the gender of the noun: soba, kuća, torba → u njoj; grad, selo, park → u njemu.',
      },
      11,
      3,
      12,
      {
        type: 'order',
        q: 'Put the words in order: "What do you think about her?"',
        words: ['Što', 'misliš', 'o', 'njoj?'],
        explanation: 'Što misliš o njoj? — misliti o + the locative: ona → njoj.',
      },
      {
        type: 'transform',
        q: 'Replace the two people with one pronoun.',
        from: 'Pišem o Ani i Marku.',
        answer: 'Pišem o njima.',
        hint: 'Ana and Marko together are "they".',
        explanation: 'Pišem o njima. — oni → njima, whoever "they" are.',
      },
      13,
      14,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Šetamo po gradu.', 'We are walking around town.'],
          ['Grad je poznat po moru.', 'The town is known for the sea.'],
          ['Film je o nama.', 'The film is about us.'],
          ['Na njemu je knjiga.', 'The book is on it.'],
        ],
        explanation:
          'po + locative: around a place, or known for something. o + locative: about. na njemu: on it (a masculine or neuter thing).',
      },
      {
        type: 'listen',
        audio: 'Baka često priča o vama.',
        q: 'Who does grandma often talk about?',
        options: ['About us', 'About them', 'About you (plural or polite)', 'About me'],
        correct: 2,
        explanation: 'Baka često priča o vama. — vi → vama: about you.',
      },
      {
        type: 'dictate',
        audio: 'Stalno mislim o njoj.',
        answer: 'Stalno mislim o njoj.',
        hint: 'Four words: "I think about her all the time."',
        explanation: 'Stalno mislim o njoj. — ona → o njoj.',
      },
    ],
  },

  // ── Verbs in -ovati ────────────────────────────────────────────────────────
  'verbs-ovati': {
    text: {
      kind: 'dialogue',
      title: 'Gdje ljetujete?',
      lines: [
        {
          who: 'Gospođa Kovač',
          hr: 'Dobar dan, Marko! Putujete li ljeti?',
          en: 'Good afternoon, Marko! Do you travel in summer?',
        },
        {
          who: 'Marko',
          hr: 'Dobar dan! Putujemo. Ljeti uvijek putujemo na more.',
          en: 'Good afternoon! We do. In summer we always travel to the seaside.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'A gdje ljetujete?',
          en: 'And where do you spend the summer holiday?',
        },
        {
          who: 'Marko',
          hr: 'Ljetujemo na otoku. Moji roditelji stanuju u Splitu i često ih posjećujemo.',
          en: 'We spend it on an island. My parents live in Split and we often visit them.',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Lijepo! Što radite tamo?',
          en: 'Lovely! What do you do there?',
        },
        {
          who: 'Marko',
          hr: 'Djeca crtaju i plivaju, ja kupujem ribu na tržnici, a žena doručkuje u vrtu i uživa. A Vi, putujete li i Vi?',
          en: 'The children draw and swim, I buy fish at the market, and my wife has breakfast in the garden and enjoys herself. And you, do you travel too?',
        },
        {
          who: 'Gospođa Kovač',
          hr: 'Ne putujem. Ljeti sam uvijek doma.',
          en: 'I do not travel. In summer I am always at home.',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: where does Marko's family spend the summer, and who lives in Split?",
          options: [
            'On an island; his parents live in Split',
            'In Split; his wife lives on an island',
            'At home; Mrs Kovač lives in Split',
            'On an island; his children live in Split',
          ],
          correct: 0,
          hint: 'They visit someone often. Who?',
          explanation:
            'The family spends the summer on an island, and they often visit Marko’s parents, who live in Split. Mrs Kovač stays at home.',
        },
        {
          q: 'The dictionary form is "putovati", but Marko says "putujemo". What has happened to -ova-?',
          options: [
            'Nothing — putujemo comes from a different verb',
            'It has moved to the end of the word',
            'It has turned into -uj-, and the ending follows it',
            'It is only dropped in questions',
          ],
          correct: 2,
          hint: 'Compare: putovati — putujemo, ljetovati — ljetujemo.',
          explanation:
            'In the present, -ova- becomes -uj-: putovati → putuj- + -emo. The same happens in ljetujemo, stanuju, kupujem, doručkuje.',
        },
        {
          type: 'type',
          q: 'Now you. Mrs Kovač asks YOU: "Stanujete li ovdje?" Say that you do — one word, with the verb, about yourself: ____.',
          answer: 'Stanujem',
          accept: ['Da, stanujem'],
          hint: 'stanovati goes like putovati. She says "Ne putujem" about herself — build the same form.',
          explanation: 'Stanujem. — stanovati → stanuj- + -em, like putovati → putujem.',
        },
        {
          type: 'type',
          q: 'Say when your children have breakfast: Djeca ____ u osam. (doručkovati)',
          answer: 'doručkuju',
          hint: 'The children are "they". In the dialogue the parents "stanuju" — the same ending.',
          explanation: 'Djeca doručkuju u osam. — doručkovati → doručkuj- + -u for "they".',
        },
        {
          type: 'transform',
          q: 'Change "mi" to "ona".',
          from: 'Mi često posjećujemo baku.',
          answer: 'Ona često posjećuje baku.',
          hint: 'Keep the -uj- and change only the ending, as in "žena doručkuje".',
          explanation:
            'Ona često posjećuje baku. — posjećivati → posjećujem, posjećuješ, posjećuje.',
        },
      ],
    },
    mix: [
      3,
      {
        type: 'sort',
        q: 'How does the "I" form end: in -ujem or in -am?',
        groups: ['"I" ends in -ujem', '"I" ends in -am'],
        items: [
          { hr: 'putovati', group: 0 },
          { hr: 'gledati', group: 1 },
          { hr: 'kupovati', group: 0 },
          { hr: 'čitati', group: 1 },
          { hr: 'stanovati', group: 0 },
          { hr: 'studirati', group: 1 },
          { hr: 'ljetovati', group: 0 },
        ],
        explanation:
          'The signal is the whole ending -ovati: it gives -ujem. A plain -ati verb keeps -am, and an -irati verb keeps its -ir-: studiram.',
      },
      8,
      {
        type: 'match',
        q: 'Match each person to its form of doručkovati (to have breakfast).',
        pairs: [
          ['ja', 'doručkujem'],
          ['ti', 'doručkuješ'],
          ['ona', 'doručkuje'],
          ['mi', 'doručkujemo'],
          ['oni', 'doručkuju'],
        ],
        explanation: 'doručkujem, doručkuješ, doručkuje, doručkujemo, doručkujete, doručkuju.',
      },
      9,
      {
        type: 'tf',
        q: '"Kupovam kruh." is correct Croatian.',
        answer: false,
        hint: 'kupovati ends in -ovati. What happens to -ova- in the present?',
        explanation: 'The -ova- turns into -uj-: Kupujem kruh.',
      },
      10,
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moji', 'roditelji', 'stanovaju', 'u', 'Splitu.'],
        wrong: 2,
        answer: 'stanuju',
        hint: 'The verb has kept its -ov-. It should not.',
        explanation: 'Moji roditelji stanuju u Splitu. — stanovati → stanuju, never "stanovaju".',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "We often travel to Croatia."',
        words: ['Često', 'putujemo', 'u', 'Hrvatsku.'],
        explanation:
          'Često putujemo u Hrvatsku. — putovati → putujemo; u Hrvatsku is the destination.',
      },
      2,
      {
        type: 'transform',
        q: 'Change "ja" to "oni".',
        from: 'Ja kupujem voće.',
        answer: 'Oni kupuju voće.',
        hint: 'The -uj- stays. Only the last part of the verb changes.',
        explanation: 'Oni kupuju voće. — kupujem, kupuješ, kupuje, kupujemo, kupujete, kupuju.',
      },
      12,
      {
        type: 'listen',
        audio: 'Sestra crta, a brat putuje.',
        q: 'What is the brother doing?',
        options: ['He is drawing', 'He is travelling', 'He is shopping', 'He is having breakfast'],
        correct: 1,
        explanation:
          'Sestra crta, a brat putuje. — the sister draws (crtati), the brother travels (putovati).',
      },
      {
        type: 'dictate',
        audio: 'Doručkujem u sedam.',
        answer: 'Doručkujem u sedam.',
        hint: 'Three words: "I have breakfast at seven."',
        explanation: 'Doručkujem u sedam. — doručkovati → doručkujem.',
      },
    ],
  },

  // ── The months ─────────────────────────────────────────────────────────────
  months: {
    text: {
      kind: 'dialogue',
      title: 'Kada je tvoj rođendan?',
      lines: [
        { who: 'Ana', hr: 'Tom, kada je tvoj rođendan?', en: 'Tom, when is your birthday?' },
        { who: 'Tom', hr: 'U veljači. A tvoj?', en: 'In February. And yours?' },
        {
          who: 'Ana',
          hr: 'Moj je u srpnju. U srpnju smo uvijek na moru.',
          en: 'Mine is in July. In July we are always at the seaside.',
        },
        {
          who: 'Tom',
          hr: 'Lijepo! Moja sestra ima rođendan u ožujku, a brat u studenom.',
          en: 'Lovely! My sister has her birthday in March, and my brother in November.',
        },
        {
          who: 'Ana',
          hr: 'A kada putuješ u Kanadu?',
          en: 'And when are you travelling to Canada?',
        },
        {
          who: 'Tom',
          hr: 'U kolovozu. Ali škola počinje u rujnu i u rujnu sam ovdje.',
          en: 'In August. But school starts in September, and in September I am here.',
        },
        { who: 'Ana', hr: 'Koji mjesec voliš?', en: 'Which month do you love?' },
        {
          who: 'Tom',
          hr: 'Volim svibanj. U svibnju je Zagreb jako lijep.',
          en: 'I love May. In May Zagreb is very beautiful.',
        },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: when is Tom's birthday, and when is Ana's?",
          options: [
            "Tom's is in March, Ana's is in August",
            "Tom's is in July, Ana's is in February",
            "Tom's is in November, Ana's is in May",
            "Tom's is in February, Ana's is in July",
          ],
          correct: 3,
          hint: "Ana's family is always at the seaside in her birthday month.",
          explanation:
            "Tom: u veljači — in February. Ana: u srpnju — in July. March and November are his sister's and his brother's.",
        },
        {
          q: 'Tom says "Volim svibanj" but "U svibnju je Zagreb jako lijep." Why are the two forms different?',
          options: [
            'svibnju is the plural of svibanj',
            'After u, to say WHEN, the month takes the place ending -u — and the a before the last letter drops out',
            'svibanj is only used in questions',
            'Because Zagreb is masculine',
          ],
          correct: 1,
          hint: 'It is the same ending as in "u gradu", used for time.',
          explanation:
            '"In May" is u + the locative, exactly as for a place. svibanj has a fleeting a: it drops when the ending is added. After volim the month is an object and stays as it is.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks: "Kada je tvoj rođendan?" It is in January (siječanj): U ____.',
          answer: 'siječnju',
          hint: 'siječanj behaves like svibanj in the dialogue: the a drops out, then the ending is added.',
          explanation: 'U siječnju. — siječanj → siječnj- + -u, like svibanj → u svibnju.',
        },
        {
          type: 'type',
          q: 'Tom asks when you travel to Croatia. In October (listopad): Putujem u Hrvatsku u ____.',
          answer: 'listopadu',
          hint: 'listopad has no fleeting a. Just add the ending, as in "u kolovozu".',
          explanation:
            'Putujem u Hrvatsku u listopadu. — u Hrvatsku is where to; u listopadu is when.',
        },
        {
          type: 'transform',
          q: 'Say that your birthday is in that month. Start with "Moj rođendan je u".',
          from: 'Volim prosinac.',
          answer: 'Moj rođendan je u prosincu.',
          hint: 'prosinac (December) loses its a too, like svibanj → u svibnju.',
          explanation: 'Moj rođendan je u prosincu. — prosinac → prosinc- + -u.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each month to its English name.',
        pairs: [
          ['veljača', 'February'],
          ['kolovoz', 'August'],
          ['rujan', 'September'],
          ['srpanj', 'July'],
          ['studeni', 'November'],
        ],
        explanation:
          'veljača — February, srpanj — July, kolovoz — August, rujan — September, studeni — November.',
      },
      4,
      8,
      {
        type: 'sort',
        q: 'Is it a winter month or a summer month?',
        groups: ['A winter month', 'A summer month'],
        items: [
          { hr: 'prosinac', group: 0 },
          { hr: 'srpanj', group: 1 },
          { hr: 'siječanj', group: 0 },
          { hr: 'kolovoz', group: 1 },
          { hr: 'veljača', group: 0 },
          { hr: 'lipanj', group: 1 },
        ],
        explanation:
          'prosinac, siječanj, veljača — December, January, February. lipanj, srpanj, kolovoz — June, July, August.',
      },
      9,
      {
        type: 'tf',
        q: 'Croatian writes the months with a capital letter: "u Prosincu".',
        answer: false,
        hint: 'Think of the days of the week.',
        explanation: 'Months, like days, take a small letter: u prosincu.',
      },
      10,
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['U', 'rujan', 'počinje', 'škola.'],
        wrong: 1,
        answer: 'rujnu',
        hint: 'After u, a month needs its ending — and this one has a fleeting a.',
        explanation: 'U rujnu počinje škola. — rujan → u rujnu.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "My birthday is in May."',
        words: ['Moj', 'rođendan', 'je', 'u', 'svibnju.'],
        explanation: 'Moj rođendan je u svibnju. — svibanj → u svibnju.',
      },
      7,
      {
        type: 'transform',
        q: 'Say that you travel in that month. Start with "Putujem u".',
        from: 'Volim listopad.',
        answer: 'Putujem u listopadu.',
        hint: 'To say when, the month takes the same ending as a place after u.',
        explanation: 'Putujem u listopadu. — listopad → u listopadu.',
      },
      12,
      {
        type: 'listen',
        audio: 'Baka dolazi u srpnju.',
        q: 'When is grandma coming?',
        options: ['In June', 'In January', 'In July', 'In September'],
        correct: 2,
        explanation: 'Baka dolazi u srpnju. — srpanj is July.',
      },
      {
        type: 'dictate',
        audio: 'Sada je siječanj.',
        answer: 'Sada je siječanj.',
        hint: 'Three words: "It is January now." The month has a č and an nj in it.',
        explanation:
          'Sada je siječanj. — the month itself, with no preposition and a small letter.',
      },
    ],
  },

  // ── My flat ────────────────────────────────────────────────────────────────
  'flat-rooms': {
    text: {
      kind: 'dialogue',
      title: 'Novi stan',
      lines: [
        {
          who: 'Ivan',
          hr: 'Ana, ovo je moj novi stan! Nije velik, ali ima balkon.',
          en: 'Ana, this is my new flat! It is not big, but it has a balcony.',
        },
        { who: 'Ana', hr: 'Lijep je! Gdje je kuhinja?', en: 'It is nice! Where is the kitchen?' },
        {
          who: 'Ivan',
          hr: 'Ovdje. U kuhinji je stol, a na zidu je slika.',
          en: 'Here. There is a table in the kitchen, and a picture on the wall.',
        },
        { who: 'Ana', hr: 'A gdje je tvoja soba?', en: 'And where is your room?' },
        {
          who: 'Ivan',
          hr: 'Tamo. U sobi je krevet, ormar i polica.',
          en: 'Over there. In the room there is a bed, a wardrobe and a shelf.',
        },
        { who: 'Ana', hr: 'Jesu li tvoje knjige na polici?', en: 'Are your books on the shelf?' },
        {
          who: 'Ivan',
          hr: 'Jesu. Knjige su na polici, a mačka spava na krevetu!',
          en: 'They are. The books are on the shelf, and the cat is sleeping on the bed!',
        },
        {
          who: 'Ana',
          hr: 'Lijepo! A kavu pijemo na balkonu, naravno.',
          en: 'Lovely! And we will have our coffee on the balcony, of course.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is the picture, and where is the cat?',
          options: [
            'The picture is in the room, the cat is on the balcony',
            'The picture is on the shelf, the cat is in the kitchen',
            'The picture is on the balcony, the cat is in the wardrobe',
            'The picture is on the kitchen wall, the cat is on the bed',
          ],
          correct: 3,
          hint: 'Ivan mentions the picture when he shows the kitchen, and the cat when he talks about his room.',
          explanation:
            'Na zidu je slika — on the wall, in the kitchen. Mačka spava na krevetu — on the bed.',
        },
        {
          q: 'Ivan says "u kuhinji" and "u sobi", but "na zidu" — and Ana says "na balkonu". Why na?',
          options: [
            'Rooms take u; a wall, a balcony and other surfaces or open places take na',
            'na is used with masculine nouns, u with feminine ones',
            'na is more polite than u',
            'na is used when something is moving',
          ],
          correct: 0,
          hint: 'You are inside a room. Are you inside a wall?',
          explanation:
            'u is for inside something: u kuhinji, u sobi. na is for a surface or an open place: na zidu, na polici, na krevetu, na balkonu.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks: "Gdje je mačka?" It is hiding in the wardrobe: U ____.',
          answer: 'ormaru',
          hint: 'ormar is masculine. Give it the same place ending as zid and balkon have in the dialogue.',
          explanation: 'U ormaru. — masculine nouns take -u: ormar → u ormaru.',
        },
        {
          type: 'type',
          q: 'She asks where the milk is. It is in the fridge (hladnjak): Mlijeko je u ____.',
          answer: 'hladnjaku',
          hint: 'hladnjak is masculine too — the same ending again.',
          explanation: 'Mlijeko je u hladnjaku. — inside something, so u; hladnjak → hladnjaku.',
        },
        {
          type: 'transform',
          q: 'Describe the room the way Ivan does: put the place first.',
          from: 'Kauč je u sobi.',
          answer: 'U sobi je kauč.',
          hint: 'Start with "U sobi". The little word je stays in second place.',
          explanation:
            'U sobi je kauč. — to say what is in a room, Croatian starts with the place.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each word to its meaning.',
        pairs: [
          ['kuhinja', 'kitchen'],
          ['kupaonica', 'bathroom'],
          ['hodnik', 'hallway'],
          ['ormar', 'wardrobe'],
          ['hladnjak', 'fridge'],
        ],
        explanation:
          'kuhinja — kitchen, kupaonica — bathroom, hodnik — hallway, ormar — wardrobe, hladnjak — fridge.',
      },
      4,
      {
        type: 'sort',
        q: 'To say where something is: does the place take u (inside it) or na (on it)?',
        groups: ['u', 'na'],
        items: [
          { hr: 'kuhinja', group: 0 },
          { hr: 'zid', group: 1 },
          { hr: 'soba', group: 0 },
          { hr: 'pod', group: 1 },
          { hr: 'stan', group: 0 },
          { hr: 'balkon', group: 1 },
        ],
        explanation:
          'Rooms and the flat take u. The wall, the floor and the balcony always take na.',
      },
      8,
      {
        type: 'tf',
        q: '"Mlijeko je u hladnjaku." says that the milk is on the table.',
        answer: false,
        hint: 'Which piece of furniture keeps things cold?',
        explanation: 'u hladnjaku — in the fridge. On the table would be na stolu.',
      },
      9,
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Knjiga', 'je', 'na', 'polica', 'u', 'sobi.'],
        wrong: 3,
        answer: 'polici',
        hint: 'After na, when nothing is moving, the noun cannot keep its dictionary form.',
        explanation: 'Knjiga je na polici u sobi. — polica → na polici.',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "The cat is sleeping on the bed."',
        words: ['Mačka', 'spava', 'na', 'krevetu.'],
        explanation: 'Mačka spava na krevetu. — on the surface of the bed: na.',
      },
      5,
      11,
      {
        type: 'transform',
        q: 'Put the place first.',
        from: 'Tepih je na podu.',
        answer: 'Na podu je tepih.',
        hint: 'Start with the two-word place. je comes straight after it.',
        explanation: 'Na podu je tepih. — the place first, then je, then the thing.',
      },
      {
        type: 'listen',
        audio: 'Odjeća je u ormaru, a torba je na stolici.',
        q: 'Where are the clothes?',
        options: ['On the chair', 'In the wardrobe', 'In the hallway', 'On the bed'],
        correct: 1,
        explanation:
          'Odjeća je u ormaru — the clothes are in the wardrobe. The bag is on the chair.',
      },
      12,
      {
        type: 'dictate',
        audio: 'Sjedimo na balkonu.',
        answer: 'Sjedimo na balkonu.',
        hint: 'Three words: "We are sitting on the balcony."',
        explanation: 'Sjedimo na balkonu. — the balcony always takes na.',
      },
    ],
  },

  // ── On the phone ───────────────────────────────────────────────────────────
  'phone-call': {
    text: {
      kind: 'dialogue',
      title: 'Halo?',
      lines: [
        { who: 'Gospođa Babić', hr: 'Halo?', en: 'Hello?' },
        {
          who: 'Petar',
          hr: 'Dobar dan, ovdje Petar Horvat. Tražim Ivanu. Je li doma?',
          en: 'Good afternoon, this is Petar Horvat. I am looking for Ivana. Is she at home?',
        },
        {
          who: 'Gospođa Babić',
          hr: 'Nažalost, nije. Ivana je na poslu.',
          en: 'Unfortunately not. Ivana is at work.',
        },
        { who: 'Petar', hr: 'Mogu li ostaviti poruku?', en: 'Can I leave a message?' },
        {
          who: 'Gospođa Babić',
          hr: 'Oprostite, ne čujem Vas dobro. Možete li ponoviti?',
          en: 'Sorry, I cannot hear you well. Can you repeat that?',
        },
        {
          who: 'Petar',
          hr: 'Naravno. Mogu li ostaviti poruku? Moj broj je nula devet jedan, pet pet pet, dva tri četiri.',
          en: 'Of course. Can I leave a message? My number is zero nine one, five five five, two three four.',
        },
        {
          who: 'Gospođa Babić',
          hr: 'Dobro, imam broj. Ivana je doma u pet.',
          en: 'Good, I have the number. Ivana is home at five.',
        },
        {
          who: 'Petar',
          hr: 'Hvala na informaciji. Doviđenja!',
          en: 'Thank you for the information. Goodbye!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why can Petar not speak to Ivana, and what does he do about it?',
          options: [
            'She is at home but busy, so he waits',
            'He has the wrong number, so he says sorry',
            'She is at work, so he leaves his number',
            'She is in a meeting, so he phones her office',
          ],
          correct: 2,
          hint: 'Mrs Babić says "nažalost" — and at the end she says "imam broj".',
          explanation:
            'Ivana is at work (na poslu), so Petar leaves a message: his phone number. She will be home at five.',
        },
        {
          q: 'Petar says "Tražim Ivanu", but Mrs Babić says "Ivana je na poslu". Why does Petar say Ivanu?',
          options: [
            'Because he is being polite',
            'Because Ivana is not at home',
            'Because Ivanu is her surname',
            'Because Ivana is the object of tražim — the person he is looking for',
          ],
          correct: 3,
          hint: 'Koga traži Petar? The person you look for is an object.',
          explanation:
            'tražiti takes an object, so the name is in the accusative: Ivana → Ivanu. In "Ivana je na poslu" she is the subject and keeps her dictionary form.',
        },
        {
          type: 'type',
          q: "Now you. You phone a friend's home and her brother answers. You want to speak to Petra: Tražim ____.",
          answer: 'Petru',
          hint: 'Petra is the object of tražim — change the name the way Petar changes "Ivana".',
          explanation: 'Tražim Petru. — a name in -a takes -u as an object: Petra → Petru.',
        },
        {
          type: 'type',
          q: 'Someone phones for your sister, but she is at the cinema (kino): Nažalost, sestra je u ____.',
          answer: 'kinu',
          hint: 'Where someone is takes the locative. kino is neuter: -o becomes the usual place ending.',
          explanation:
            'Nažalost, sestra je u kinu. — where she is: kino → u kinu, like posao → na poslu in the dialogue.',
        },
        {
          type: 'transform',
          q: 'Mrs Babić speaks to a stranger. Say the same to a friend: change "Vas" to the short form for "ti".',
          from: 'Ne čujem Vas dobro.',
          answer: 'Ne čujem te dobro.',
          hint: 'You learned the short object forms: me, te, ga … Which one means "you" for one friend?',
          explanation:
            'Ne čujem te dobro. — Vas is the polite "you" as an object; to a friend it is te.',
        },
      ],
    },
    mix: [
      0,
      9,
      {
        type: 'match',
        q: 'Match each English sentence to what you say on the phone.',
        pairs: [
          ['Just a moment.', 'Samo trenutak.'],
          ['Wrong number.', 'Pogrešan broj.'],
          ['The connection is bad.', 'Veza je loša.'],
          ['Unfortunately, he is not here.', 'Nažalost, nije tu.'],
        ],
        explanation:
          'Samo trenutak — just a moment. Pogrešan broj — wrong number. Veza je loša — the connection is bad. Nažalost, nije tu — unfortunately, he is not here.',
      },
      3,
      8,
      {
        type: 'sort',
        q: 'Who says it: the person who is calling, or the person who answers the phone?',
        groups: ['The caller', 'The person who answers'],
        items: [
          { hr: 'Tražim Ivanu.', group: 0 },
          { hr: 'Želite li ostaviti poruku?', group: 1 },
          { hr: 'Je li Ivana doma?', group: 0 },
          { hr: 'Nažalost, nije tu.', group: 1 },
          { hr: 'Mogu li ostaviti poruku?', group: 0 },
          { hr: 'Tko je na telefonu?', group: 1 },
        ],
        explanation:
          'The caller asks for someone and asks to leave a message. The person who answers asks who is calling, says the person is not there and offers to take a message.',
      },
      {
        type: 'tf',
        q: '"Ovdje Ana." is how you say who you are on the phone.',
        answer: true,
        hint: 'Think of how Petar begins his call.',
        explanation: 'Ovdje + your name: "This is Ana." You do not say "Ja sam na telefonu".',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Tražim', 'Marko', 'Horvata.'],
        wrong: 1,
        answer: 'Marka',
        hint: 'Both the first name and the surname are the object — and he is a living person.',
        explanation:
          'Tražim Marka Horvata. — a man as an object takes -a, in the first name and the surname.',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "Is Ivana at home?"',
        words: ['Je', 'li', 'Ivana', 'doma?'],
        explanation: 'Je li Ivana doma? — the question you already know: Je li …?',
      },
      10,
      {
        type: 'listen',
        audio: 'Gospodin Horvat je na sastanku.',
        q: 'Why can Mr Horvat not come to the phone?',
        options: ['He is at home', 'He is at lunch', 'He is in a meeting', 'He is on holiday'],
        correct: 2,
        explanation:
          'Gospodin Horvat je na sastanku. — he is in a meeting: sastanak → na sastanku.',
      },
      12,
      {
        type: 'transform',
        q: 'Thank the caller for the MESSAGE (poruka) instead of the call.',
        from: 'Hvala na pozivu.',
        answer: 'Hvala na poruci.',
        hint: 'poruka is feminine: -a becomes -i, and k does not stay k before -i.',
        explanation: 'Hvala na poruci. — hvala na + locative: poruka → poruci, with k → c.',
      },
      {
        type: 'dictate',
        audio: 'Mogu li ostaviti poruku?',
        answer: 'Mogu li ostaviti poruku?',
        hint: 'Four words: a polite question that starts with "Mogu li".',
        explanation: 'Mogu li ostaviti poruku? — Can I leave a message?',
      },
    ],
  },

  // ═══ UNIT 12 ═══════════════════════════════════════════════════════════════

  // ── The past tense ─────────────────────────────────────────────────────────
  'past-tense': {
    text: {
      kind: 'dialogue',
      title: 'Što si radila jučer?',
      lines: [
        {
          who: 'Marko',
          hr: 'Bog, Ana! Što si radila jučer?',
          en: 'Hi, Ana! What did you do yesterday?',
        },
        {
          who: 'Ana',
          hr: 'Jučer sam radila cijeli dan. A ti?',
          en: 'Yesterday I worked all day. And you?',
        },
        {
          who: 'Marko',
          hr: 'Ja nisam radio. Bio sam doma i gledao sam film.',
          en: 'I did not work. I was at home and I watched a film.',
        },
        { who: 'Ana', hr: 'A gdje su bili Petra i Ivan?', en: 'And where were Petra and Ivan?' },
        {
          who: 'Marko',
          hr: 'Išli su u kino. Petra je čekala, a Ivan je kasnio!',
          en: 'They went to the cinema. Petra waited, and Ivan was late!',
        },
        {
          who: 'Ana',
          hr: 'Moje sestre su bile na moru. Plivale su cijeli dan.',
          en: 'My sisters were at the seaside. They swam all day.',
        },
        {
          who: 'Marko',
          hr: 'Lijepo! Ja sam jučer puno spavao.',
          en: 'Lovely! I slept a lot yesterday.',
        },
        {
          who: 'Ana',
          hr: 'A ja nisam puno spavala. Danas sam umorna!',
          en: 'And I did not sleep much. Today I am tired!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who did what yesterday?',
          options: [
            'Ana watched a film, Marko worked, Petra and Ivan were at the seaside',
            'Ana worked, Marko was at home, Petra and Ivan went to the cinema',
            'Ana slept a lot, Marko went to the cinema, Petra and Ivan worked',
            'Ana was at the seaside, Marko worked, Petra and Ivan were at home',
          ],
          correct: 1,
          hint: 'One of them is tired today. One of them watched a film at home.',
          explanation:
            "Ana worked all day, Marko was at home with a film, and Petra and Ivan went to the cinema. It was Ana's sisters who were at the seaside.",
        },
        {
          q: 'Ana says "nisam puno spavala", but Marko says "puno spavao". Why are the endings different?',
          options: [
            'Ana is talking about today, Marko about yesterday',
            'spavala is the negative form',
            'The past form agrees with the person: a woman says -la, a man says -o',
            'spavao is the polite form',
          ],
          correct: 2,
          hint: 'Compare the other pairs in the dialogue: Ana "radila", Marko "radio".',
          explanation:
            'The past has two parts: a short form of biti (sam, si, je …) and a form of the verb that agrees with the subject. A woman: spavala sam. A man: spavao sam.',
        },
        {
          type: 'type',
          q: 'Now you. Marko asks YOU what you did yesterday. You read a book (čitati): ____ sam knjigu.',
          answer: 'Čitao',
          accept: ['Čitala'],
          hint: 'Take -ti off čitati. A man adds -o, a woman adds -la — like "gledao" and "radila" in the dialogue.',
          explanation:
            'Čitao sam knjigu. (a man) / Čitala sam knjigu. (a woman) — the form agrees with you, the speaker.',
        },
        {
          type: 'type',
          q: 'Say that your sisters worked yesterday: Sestre su jučer ____. (raditi)',
          answer: 'radile',
          hint: 'A group of women only: look at what Ana says about her sisters — "bile", "plivale".',
          explanation:
            'Sestre su jučer radile. — an all-female group takes -le; a mixed group takes -li.',
        },
        {
          type: 'transform',
          q: 'Ana says this. Now Marko says the same about himself.',
          from: 'Jučer sam bila na moru.',
          answer: 'Jučer sam bio na moru.',
          hint: 'Only one word changes: the past form of biti for a man.',
          explanation: 'Jučer sam bio na moru. — biti: bila for a woman, bio for a man.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Who watched? Match each subject to its past form of gledati.',
        pairs: [
          ['on', 'gledao je'],
          ['ona', 'gledala je'],
          ['oni', 'gledali su'],
          ['one', 'gledale su'],
        ],
        explanation:
          '-o for a man, -la for a woman, -li for a group, -le for a group of women only.',
      },
      4,
      {
        type: 'sort',
        q: 'Who is speaking: a man or a woman?',
        groups: ['A man is speaking', 'A woman is speaking'],
        items: [
          { hr: 'Gledao sam film.', group: 0 },
          { hr: 'Spavala sam.', group: 1 },
          { hr: 'Čitao sam.', group: 0 },
          { hr: 'Pisala sam pismo.', group: 1 },
          { hr: 'Kuhao sam ručak.', group: 0 },
          { hr: 'Plivala sam.', group: 1 },
        ],
        explanation:
          'With "sam", the ending tells you who is speaking: -o is a man, -la is a woman.',
      },
      0,
      5,
      {
        type: 'tf',
        q: '"Sam radio jučer." is correct Croatian.',
        answer: false,
        hint: 'sam is one of the small words that can never stand first.',
        explanation: 'sam must be in second place: Radio sam jučer.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "Yesterday we watched a film."',
        words: ['Jučer', 'smo', 'gledali', 'film.'],
        explanation:
          'Jučer smo gledali film. — the time word is first, so smo comes straight after it.',
      },
      6,
      {
        type: 'transform',
        q: 'Make it negative.',
        from: 'Gledali smo film.',
        answer: 'Nismo gledali film.',
        accept: ['Film nismo gledali.', 'Mi nismo gledali film.'],
        hint: 'Swap the short form of biti for its "not" form — that one may stand first.',
        explanation:
          'Nismo gledali film. — the negative form comes before the past form of the verb.',
      },
      2,
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'je', 'čitao', 'knjigu.'],
        wrong: 3,
        answer: 'čitala',
        hint: 'The past form has to agree with the subject — and the subject is a woman.',
        explanation: 'Moja sestra je čitala knjigu. — sestra is feminine, so the form ends in -la.',
      },
      8,
      11,
      {
        type: 'listen',
        audio: 'Marko i Ana su bili u kinu.',
        q: 'Where were Marko and Ana?',
        options: ['At home', 'At work', 'At the cinema', 'At the seaside'],
        correct: 2,
        explanation:
          'Marko i Ana su bili u kinu. — they were at the cinema; a mixed group takes bili.',
      },
      {
        type: 'dictate',
        audio: 'Jučer smo bili doma.',
        answer: 'Jučer smo bili doma.',
        hint: 'Four words: "Yesterday we were at home." The short form of biti is in second place.',
        explanation: 'Jučer smo bili doma. — jučer first, then smo, then bili.',
      },
    ],
  },

  // ── The irregular past ─────────────────────────────────────────────────────
  'past-irregular': {
    text: {
      kind: 'dialogue',
      title: 'Gdje si bio?',
      lines: [
        { who: 'Mama', hr: 'Luka, gdje si bio?', en: 'Luka, where were you?' },
        {
          who: 'Luka',
          hr: 'Išao sam u grad. Maja je došla iz Splita.',
          en: 'I went into town. Maja came from Split.',
        },
        { who: 'Mama', hr: 'Što ste radili?', en: 'What did you do?' },
        {
          who: 'Luka',
          hr: 'Jeli smo pizzu i pili sok. Maja je htjela sladoled, a ja sam htio kolač.',
          en: 'We ate pizza and drank juice. Maja wanted ice cream, and I wanted cake.',
        },
        {
          who: 'Mama',
          hr: 'A zašto nisi došao na večeru?',
          en: 'And why did you not come to dinner?',
        },
        {
          who: 'Luka',
          hr: 'Nisam mogao. Maja je otišla u osam.',
          en: 'I could not. Maja left at eight.',
        },
        {
          who: 'Mama',
          hr: 'Tata je rekao: "Luka nema ključ."',
          en: 'Dad said: "Luka does not have a key."',
        },
        {
          who: 'Luka',
          hr: 'Imam ga! Našao sam ga u torbi.',
          en: 'I have it! I found it in my bag.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: why did Luka not come to dinner?',
          options: [
            'He was in town with Maja, who only left at eight',
            'He had lost his key and could not get in',
            'He was working late in Split',
            'He did not want pizza',
          ],
          correct: 0,
          hint: 'Who came from Split, and when did she leave?',
          explanation:
            'Luka was in town with Maja. She left at eight, so he could not come to dinner. The key was in his bag all along.',
        },
        {
          q: 'Luka says "Maja je htjela sladoled, a ja sam htio kolač." What is special about the past of htjeti?',
          options: [
            'It has no feminine form',
            'It does not need sam or je',
            'It is the same for a man and a woman',
            'The form for a man is short (htio), while the form for a woman keeps the je of the infinitive (htjela)',
          ],
          correct: 3,
          hint: 'Put the two forms side by side and look at what comes after ht-.',
          explanation:
            'htjeti → htio (a man), htjela (a woman), htjeli (a group). Verbs like this do not follow the regular rule, so learn them as families.',
        },
        {
          type: 'type',
          q: 'Now you. Mum asks YOU where you were. You went to the cinema: ____ sam u kino.',
          answer: 'Išao',
          accept: ['Išla'],
          hint: 'The past of ići has an š in it — Luka uses it in his first answer. A woman drops the a before the l-ending: iš-la.',
          explanation:
            'Išao sam u kino. (a man) / Išla sam u kino. (a woman) — ići → išao, išla, išli.',
        },
        {
          type: 'type',
          q: 'Say what your parents said: Roditelji su ____ "dobar dan". (reći)',
          answer: 'rekli',
          hint: 'reći hides a k. In the dialogue: "Tata je rekao". Two people take the group ending -li in place of -ao.',
          explanation: 'Roditelji su rekli "dobar dan". — reći → rekao, rekla, rekli.',
        },
        {
          type: 'transform',
          q: 'Luka says this. Now Maja says the same about herself.',
          from: 'Nisam mogao doći.',
          answer: 'Nisam mogla doći.',
          hint: 'The a before the last letter is there only in the form for a man.',
          explanation:
            'Nisam mogla doći. — moći → mogao (a man), mogla (a woman): the hidden g comes back.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each past form to its meaning.',
        pairs: [
          ['otišla je', 'she left'],
          ['pili su', 'they drank'],
          ['mogao je', 'he could'],
          ['vidjela je', 'she saw'],
          ['htjeli su', 'they wanted'],
        ],
        explanation:
          'otići — otišla, piti — pili, moći — mogao, vidjeti — vidjela, htjeti — htjeli.',
      },
      1,
      8,
      {
        type: 'sort',
        q: 'Who did it: a man, a woman, or a group?',
        groups: ['A man', 'A woman', 'A group'],
        items: [
          { hr: 'pio', group: 0 },
          { hr: 'htjela', group: 1 },
          { hr: 'otišli', group: 2 },
          { hr: 'mogla', group: 1 },
          { hr: 'rekao', group: 0 },
          { hr: 'bili', group: 2 },
        ],
        explanation:
          'Even the irregular verbs keep the usual endings: -o for a man, -la for a woman, -li for a group.',
      },
      {
        type: 'transform',
        q: 'Change "Marko" to "Ana".',
        from: 'Marko je išao kući.',
        answer: 'Ana je išla kući.',
        hint: 'Besides the name, one more word has to agree with Ana.',
        explanation: 'Ana je išla kući. — ići: išao for a man, išla for a woman.',
      },
      9,
      {
        type: 'tf',
        q: '"Htjeo sam kavu." is what a man says for "I wanted coffee."',
        answer: false,
        hint: 'The form for a man is the short one.',
        explanation: 'A man says Htio sam kavu. The je stays only in htjela and htjeli.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'je', 'jučer', 'došao', 'u', 'Zagreb.'],
        wrong: 3,
        answer: 'došla',
        hint: 'The past form has to agree with Ana.',
        explanation: 'Ana je jučer došla u Zagreb. — doći → došao (a man), došla (a woman).',
      },
      10,
      {
        type: 'order',
        q: 'Put the words in order: "She left at eight."',
        words: ['Otišla', 'je', 'u', 'osam.'],
        explanation: 'Otišla je u osam. — the verb form is first, so je follows it.',
      },
      11,
      {
        type: 'listen',
        audio: 'Mama i tata su došli u subotu.',
        q: 'When did mum and dad come?',
        options: ['On Sunday', 'On Saturday', 'On Friday', 'Yesterday'],
        correct: 1,
        explanation: 'Mama i tata su došli u subotu. — on Saturday; a mixed pair takes došli.',
      },
      7,
      12,
      {
        type: 'dictate',
        audio: 'Nisam mogla doći.',
        answer: 'Nisam mogla doći.',
        hint: 'Three words: "I could not come." A woman is speaking.',
        explanation: 'Nisam mogla doći. — moći → mogla for a woman.',
      },
    ],
  },

  // ── Questions and negation in the past ─────────────────────────────────────
  'past-questions-negation': {
    text: {
      kind: 'dialogue',
      title: 'Jesi li bio na koncertu?',
      lines: [
        {
          who: 'Iva',
          hr: 'Bog, Marko! Jesi li jučer bio na koncertu?',
          en: 'Hi, Marko! Were you at the concert yesterday?',
        },
        {
          who: 'Marko',
          hr: 'Nisam. Nisam mogao, radio sam. A ti, jesi li ti bila?',
          en: 'No, I was not. I could not, I was working. And you, were you there?',
        },
        {
          who: 'Iva',
          hr: 'Jesam! Koncert je bio jako dobar.',
          en: 'I was! The concert was very good.',
        },
        { who: 'Marko', hr: 'Je li i Petra došla?', en: 'Did Petra come too?' },
        { who: 'Iva', hr: 'Nije došla. Bila je bolesna.', en: 'She did not come. She was ill.' },
        {
          who: 'Marko',
          hr: 'A Ivan i Luka? Jesu li oni došli?',
          en: 'And Ivan and Luka? Did they come?',
        },
        {
          who: 'Iva',
          hr: 'Jesu, ali su kasnili.',
          en: 'They did, but they were late.',
        },
        { who: 'Marko', hr: 'A ja nisam ništa vidio!', en: 'And I did not see anything!' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who was NOT at the concert?',
          options: ['Iva and Petra', 'Ivan and Luka', 'Marko and Petra', 'Marko and Ivan'],
          correct: 2,
          hint: 'One of them was working. One of them was ill.',
          explanation:
            'Marko was working and Petra was ill. Iva was there, and Ivan and Luka came late.',
        },
        {
          q: 'Iva asks "Jesi li jučer bio na koncertu?" How is a yes/no question in the past built?',
          options: [
            'With a question word such as gdje or zašto',
            'By putting ne before the verb',
            'By putting the past form first and sam after it',
            'With the long form of biti first, then li — the past form of the verb stays as it is',
          ],
          correct: 3,
          hint: 'You already ask "Jesi li doma?" this way.',
          explanation:
            'The question starts with the long form of biti + li, exactly as in the present: Jesi li …? For "he" or "she" it is Je li …? — Je li i Petra došla?',
        },
        {
          type: 'type',
          q: 'Now you. Iva asks YOU: "Jesu li tvoji roditelji bili na koncertu?" They were not. Answer in one word, with the verb: ____.',
          answer: 'Nisu',
          hint: 'You are answering about them: the "not" form of biti for "they".',
          explanation:
            'Nisu. — "They were not." The one-word answer is the same as in the present; the past form (bili) can be left out.',
        },
        {
          type: 'type',
          q: 'Ask Iva and Marko together whether they were at home: ____ li bili doma?',
          answer: 'Jeste',
          hint: 'Two people are "vi". Start with the long form of biti for vi — the polite question "… li Vi iz Zagreba?" begins with it too.',
          explanation:
            'Jeste li bili doma? — the long form for vi, then li, then the past form for a group.',
        },
        {
          type: 'transform',
          q: 'Your turn to ask. Turn this into a yes/no question.',
          from: 'Luka je vidio koncert.',
          answer: 'Je li Luka vidio koncert?',
          accept: ['Jest li Luka vidio koncert?'],
          hint: 'For "he" the question starts with the short form and li — as in Marko\'s question about Petra.',
          explanation: 'Je li Luka vidio koncert? — like Je li i Petra došla?',
        },
      ],
    },
    mix: [
      {
        type: 'sort',
        q: 'Is it a statement, a denial, or a question?',
        groups: ['Statement: it happened', 'Denial: it did not happen', 'Question'],
        items: [
          { hr: 'Došli smo.', group: 0 },
          { hr: 'Nismo došli.', group: 1 },
          { hr: 'Jeste li došli?', group: 2 },
          { hr: 'Radila je.', group: 0 },
          { hr: 'Nisu radili.', group: 1 },
          { hr: 'Je li radila?', group: 2 },
        ],
        explanation:
          'A statement has the short form of biti; a denial has the form with ni-; a yes/no question starts with the long form (or Je) + li.',
      },
      4,
      1,
      {
        type: 'tf',
        q: '"Gdje li si bio?" is the ordinary way to ask "Where were you?"',
        answer: false,
        hint: 'li belongs to one kind of question only.',
        explanation:
          'With a question word there is no li: Gdje si bio? li appears only in yes/no questions.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "Where were you yesterday?"',
        words: ['Gdje', 'si', 'bio', 'jučer?'],
        explanation: 'Gdje si bio jučer? — the question word, then si straight after it.',
      },
      6,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Gosti', 'nisu', 'otišao', 'u', 'osam.'],
        wrong: 2,
        answer: 'otišli',
        hint: 'gosti is a group. The past form has to agree with it.',
        explanation: 'Gosti nisu otišli u osam. — a group takes -li: otišli.',
      },
      7,
      9,
      8,
      {
        type: 'match',
        q: 'Match each question to its answer.',
        pairs: [
          ['Jesi li bio u Splitu?', 'Nisam, bio sam u Zadru.'],
          ['Je li Ana došla?', 'Nije, bila je bolesna.'],
          ['Jeste li ručali?', 'Nismo, čekamo tebe.'],
          ['Jesu li gosti otišli?', 'Jesu, otišli su u osam.'],
        ],
        explanation:
          'The short answer uses biti in the person who answers: Jesi li …? — Nisam. Jeste li …? — Nismo. Je li …? — Nije. Jesu li …? — Jesu.',
      },
      {
        type: 'transform',
        q: 'Turn it into a yes/no question.',
        from: 'Oni su kupili karte.',
        answer: 'Jesu li oni kupili karte?',
        accept: ['Jesu li kupili karte?'],
        hint: 'Start with the long form of biti for "they", then li.',
        explanation:
          'Jesu li oni kupili karte? — long form first, li second, and the past form does not change.',
      },
      10,
      {
        type: 'listen',
        audio: 'Zašto nisi došla na posao?',
        q: 'What is being asked?',
        options: [
          'When did you come to work?',
          'Did you come to work?',
          'Why did you not come to work?',
          'Why did she not come to work?',
        ],
        correct: 2,
        explanation:
          'Zašto nisi došla na posao? — zašto = why, nisi = you did not; došla shows a woman is being asked.',
      },
      {
        type: 'dictate',
        audio: 'Nismo ništa kupili.',
        answer: 'Nismo ništa kupili.',
        hint: 'Three words: "We did not buy anything." Two negatives, as always in Croatian.',
        explanation: 'Nismo ništa kupili. — ništa needs a negated verb: nismo.',
      },
    ],
  },

  // ── Telling a story ────────────────────────────────────────────────────────
  'past-story': {
    text: {
      kind: 'text',
      title: 'Markova nedjelja',
      lines: [
        { hr: 'U nedjelju sam ustao rano.', en: 'On Sunday I got up early.' },
        { hr: 'Prvo sam doručkovao na balkonu.', en: 'First I had breakfast on the balcony.' },
        {
          hr: 'Onda sam išao na tržnicu i kupio ribu i kruh.',
          en: 'Then I went to the market and bought fish and bread.',
        },
        { hr: 'Poslije toga sam kuhao ručak.', en: 'After that I cooked lunch.' },
        {
          hr: 'Popodne su došli Ana i Luka. Jeli smo ribu i pili vino.',
          en: 'In the afternoon Ana and Luka came. We ate fish and drank wine.',
        },
        { hr: 'Zatim smo šetali po gradu.', en: 'Next we walked around town.' },
        { hr: 'Navečer smo gledali utakmicu.', en: 'In the evening we watched a match.' },
        { hr: 'Na kraju sam bio jako umoran.', en: 'In the end I was very tired.' },
      ],
      questions: [
        {
          q: "Without looking back at the text: in which order did Marko's Sunday go?",
          options: [
            'Cooking lunch → the market → the match → friends came → a walk',
            'The market → cooking lunch → friends came → a walk → the match',
            'Friends came → the market → a walk → cooking lunch → the match',
            'The market → a walk → cooking lunch → the match → friends came',
          ],
          correct: 1,
          hint: 'He bought the fish before he cooked it, and his friends came to eat it.',
          explanation:
            'Breakfast, then the market, then cooking; in the afternoon Ana and Luka came, they walked around town, and in the evening they watched the match.',
        },
        {
          q: 'Marko writes "Prvo sam doručkovao", not "Prvo doručkovao sam". Why?',
          options: [
            'Because prvo is a verb',
            'The small word sam has to stand in second place, right after the first word or phrase',
            'Because doručkovao must always be last',
            'Both orders are equally correct; he just prefers this one',
          ],
          correct: 1,
          hint: 'Look at where sam and smo stand in every sentence of the story.',
          explanation:
            'sam, si, je, smo, ste, su always take second place. In a story a word like prvo or onda is often first, so the small word comes right after it — and "Poslije toga" or "Na kraju" count as one place.',
        },
        {
          type: 'type',
          q: 'Now you. Tell your own morning: "Then I drank coffee." Onda sam ____ kavu. (piti)',
          answer: 'pio',
          accept: ['pila'],
          hint: 'piti has a very short stem: a man says pi + o, a woman says pi + la. Keep the same person through the whole story.',
          explanation: 'Onda sam pio kavu. (a man) / Onda sam pila kavu. (a woman)',
        },
        {
          type: 'order',
          q: 'Put the words in order: "Later we ate pizza."',
          words: ['Kasnije', 'smo', 'jeli', 'pizzu.'],
          explanation: 'Kasnije smo jeli pizzu. — kasnije (later) is first, so smo comes second.',
        },
        {
          type: 'transform',
          q: 'Ana tells the same Sunday. Change the sentence so that a woman is speaking.',
          from: 'Na kraju sam bio jako umoran.',
          answer: 'Na kraju sam bila jako umorna.',
          hint: 'Two words have to agree with Ana: the past form of biti, and the adjective.',
          explanation:
            'Na kraju sam bila jako umorna. — the teller stays the same through the whole story: bila, umorna.',
        },
      ],
    },
    mix: [
      11,
      {
        type: 'match',
        q: 'Match each story word to its meaning.',
        pairs: [
          ['onda', 'then'],
          ['kasnije', 'later'],
          ['ujutro', 'in the morning'],
          ['popodne', 'in the afternoon'],
          ['navečer', 'in the evening'],
        ],
        explanation:
          'onda — then, kasnije — later, ujutro — in the morning, popodne — in the afternoon, navečer — in the evening.',
      },
      8,
      {
        type: 'sort',
        q: 'Does the word put events in ORDER (first, then …), or does it say WHEN in the day or week?',
        groups: ['It puts events in order', 'It says when'],
        items: [
          { hr: 'prvo', group: 0 },
          { hr: 'ujutro', group: 1 },
          { hr: 'onda', group: 0 },
          { hr: 'jučer', group: 1 },
          { hr: 'zatim', group: 0 },
          { hr: 'navečer', group: 1 },
          { hr: 'popodne', group: 1 },
        ],
        explanation:
          'prvo, onda and zatim line the events up. ujutro, popodne, navečer and jučer say when something happened.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "First I drank coffee."',
        words: ['Prvo', 'sam', 'pio', 'kavu.'],
        explanation: 'Prvo sam pio kavu. — sam comes straight after the first word.',
      },
      6,
      9,
      {
        type: 'transform',
        q: 'Join the two sentences with "i" and say "sam" only once.',
        from: 'Ustao sam. Doručkovao sam.',
        answer: 'Ustao sam i doručkovao.',
        hint: 'When the same person does both things, the second sam can go.',
        explanation:
          'Ustao sam i doručkovao. — one sam is enough for two actions by the same person.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ana', 'je', 'kupila', 'kruh', 'i', 'otišao', 'kući.'],
        wrong: 5,
        answer: 'otišla',
        hint: 'Both actions are Ana’s. Both past forms have to agree with her.',
        explanation:
          'Ana je kupila kruh i otišla kući. — the same person, so the same ending both times.',
      },
      12,
      {
        type: 'tf',
        q: '"Poslije sam toga gledao film." has its words in the right order.',
        answer: false,
        hint: 'Two of these words form one block that cannot be split.',
        explanation:
          'poslije toga is one block, and sam comes after both words: Poslije toga sam gledao film.',
      },
      5,
      {
        type: 'transform',
        q: 'Start the sentence with "Onda".',
        from: 'Išli smo u kino.',
        answer: 'Onda smo išli u kino.',
        hint: 'Once Onda is first, the small word moves up to second place.',
        explanation: 'Onda smo išli u kino. — smo follows the first word, and išli comes after it.',
      },
      {
        type: 'listen',
        audio: 'Navečer smo gledali film.',
        q: 'When did they watch the film?',
        options: ['In the morning', 'In the afternoon', 'In the evening', 'Yesterday morning'],
        correct: 2,
        explanation: 'Navečer smo gledali film. — navečer = in the evening.',
      },
      {
        type: 'dictate',
        audio: 'Kasnije je došao Marko.',
        answer: 'Kasnije je došao Marko.',
        hint: 'Four words: "Later Marko came." The first word means "later".',
        explanation: 'Kasnije je došao Marko. — kasnije is first, so je comes second.',
      },
    ],
  },

  // ── Weather and seasons ────────────────────────────────────────────────────
  'weather-seasons': {
    text: {
      kind: 'dialogue',
      title: 'Kakvo je vrijeme?',
      lines: [
        {
          who: 'Ana',
          hr: 'Halo, Marko! Kakvo je vrijeme u Splitu?',
          en: 'Hello, Marko! What is the weather like in Split?',
        },
        {
          who: 'Marko',
          hr: 'Lijepo je! Sunčano je i toplo. A u Zagrebu?',
          en: 'It is lovely! It is sunny and warm. And in Zagreb?',
        },
        {
          who: 'Ana',
          hr: 'Hladno je i pada kiša. Jučer je padao snijeg!',
          en: 'It is cold and it is raining. Yesterday it snowed!',
        },
        {
          who: 'Marko',
          hr: 'Snijeg? Ovdje zimi nikad ne pada snijeg.',
          en: 'Snow? Here it never snows in winter.',
        },
        {
          who: 'Ana',
          hr: 'Znam. Zimi je u Zagrebu hladno, ali ljeti je jako vruće.',
          en: 'I know. In winter it is cold in Zagreb, but in summer it is very hot.',
        },
        {
          who: 'Marko',
          hr: 'I ovdje je ljeti vruće. Ja volim proljeće: u proljeće je toplo i sunčano.',
          en: 'It is hot here in summer too. I love spring: in spring it is warm and sunny.',
        },
        {
          who: 'Ana',
          hr: 'A ja volim jesen, ali u jesen često pada kiša.',
          en: 'And I love autumn, but in autumn it often rains.',
        },
        {
          who: 'Marko',
          hr: 'U Splitu je i u jesen sunčano!',
          en: 'In Split it is sunny in autumn too!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what is the weather like today in Split, and in Zagreb?',
          options: [
            'Split: cold and rainy. Zagreb: sunny and warm',
            'Split: hot. Zagreb: snowing',
            'Split: sunny and warm. Zagreb: cold and rainy',
            'Split: rainy. Zagreb: sunny but cold',
          ],
          correct: 2,
          hint: 'Marko is the one in Split, and he is happy with the weather.',
          explanation:
            'Split: sunčano je i toplo. Zagreb: hladno je i pada kiša — and it snowed there yesterday.',
        },
        {
          q: 'Marko says "Sunčano je i toplo." Which word stands for the English "it"?',
          options: [
            'sunčano',
            'je',
            'i',
            'None — Croatian has no subject here: the adjective in -o plus je is the whole sentence',
          ],
          correct: 3,
          hint: 'Translate the sentence word by word and see what is left over in English.',
          explanation:
            'English needs "it"; Croatian simply has no subject. The neuter form of the adjective (sunčano, toplo, hladno) + je is a complete sentence.',
        },
        {
          type: 'type',
          q: 'Now you. You know the adjective "dobar" (good). Say "It is good." the way Marko says "Lijepo je.": ____ je.',
          answer: 'Dobro',
          hint: 'Use the neuter form of the adjective — the one that ends in -o.',
          explanation:
            'Dobro je. — the same pattern works far beyond the weather: Lijepo je. Hladno je. Dobro je.',
        },
        {
          type: 'type',
          q: 'Say when it snows where you live — "in winter", in one word: ____ pada snijeg.',
          answer: 'Zimi',
          hint: 'Marko and Ana both use this one-word form of zima; ljeto has one too: ljeti.',
          explanation:
            'Zimi pada snijeg. — "in winter" and "in summer" are single words: zimi, ljeti.',
        },
        {
          type: 'transform',
          q: 'Say it about yesterday: change "Danas" to "Jučer" and put the verb in the past.',
          from: 'Danas pada kiša.',
          answer: 'Jučer je padala kiša.',
          accept: ['Jučer je kiša padala.'],
          hint: 'The rain is the subject, and kiša is feminine. The small word je takes second place.',
          explanation:
            'Jučer je padala kiša. — the past form agrees with kiša (feminine): padala. With snijeg it is padao.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Vruće je.', 'It is hot.'],
          ['Maglovito je.', 'It is foggy.'],
          ['Pada tuča.', 'It is hailing.'],
          ['Toplo je.', 'It is warm.'],
          ['Kasno je.', 'It is late.'],
        ],
        explanation: 'vruće — hot, maglovito — foggy, tuča — hail, toplo — warm, kasno — late.',
      },
      4,
      2,
      {
        type: 'order',
        q: 'Put the words in order: "What is the weather like today?"',
        words: ['Kakvo', 'je', 'vrijeme', 'danas?'],
        explanation: 'Kakvo je vrijeme danas? — kakvo means "what kind of".',
      },
      5,
      {
        type: 'tf',
        q: '"Kiša je." is how Croatian says "It is raining."',
        answer: false,
        hint: 'In Croatian the rain does something.',
        explanation: 'The rain falls: Pada kiša.',
      },
      6,
      {
        type: 'sort',
        q: 'To say "in" that season: does the season turn into one special word, or does it take "u"?',
        groups: ['One special word', 'u + the season'],
        items: [
          { hr: 'ljeto', group: 0 },
          { hr: 'proljeće', group: 1 },
          { hr: 'zima', group: 0 },
          { hr: 'jesen', group: 1 },
        ],
        explanation:
          'ljeti and zimi are single words. Spring and autumn take u: u proljeće, u jesen.',
      },
      1,
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Danas', 'je', 'vrijeme', 'lijep', 'i', 'toplo.'],
        wrong: 3,
        answer: 'lijepo',
        hint: 'vrijeme is a neuter noun, and the adjective has to agree with it.',
        explanation:
          'Danas je vrijeme lijepo i toplo. — vrijeme is neuter, so the adjective ends in -o.',
      },
      8,
      {
        type: 'transform',
        q: 'Say it about yesterday: change "Danas" to "Jučer" and put the verb in the past.',
        from: 'Danas pada snijeg.',
        answer: 'Jučer je padao snijeg.',
        accept: ['Jučer je snijeg padao.'],
        hint: 'snijeg is masculine, so the past form ends in -o. The small word je takes second place.',
        explanation: 'Jučer je padao snijeg. — the past form agrees with snijeg: padao.',
      },
      3,
      {
        type: 'listen',
        audio: 'U jesen često pada kiša.',
        q: 'When does it often rain?',
        options: ['In spring', 'In summer', 'In autumn', 'In winter'],
        correct: 2,
        explanation: 'U jesen često pada kiša. — u jesen = in autumn.',
      },
      {
        type: 'dictate',
        audio: 'Zimi pada snijeg.',
        answer: 'Zimi pada snijeg.',
        hint: 'Three words: "In winter it snows."',
        explanation: 'Zimi pada snijeg. — zimi is the one-word form for "in winter".',
      },
    ],
  },

  // ═══ UNIT 13 ═══════════════════════════════════════════════════════════════

  // ── The future tense ───────────────────────────────────────────────────────
  'future-tense': {
    text: {
      kind: 'dialogue',
      title: 'Sutra',
      lines: [
        { who: 'Ana', hr: 'Marko, što ćeš raditi sutra?', en: 'Marko, what will you do tomorrow?' },
        {
          who: 'Marko',
          hr: 'Sutra ću ići na more. Hoćeš li i ti ići?',
          en: 'Tomorrow I will go to the seaside. Will you go too?',
        },
        {
          who: 'Ana',
          hr: 'Neću. Sutra ću raditi cijeli dan.',
          en: 'I will not. Tomorrow I will work all day.',
        },
        {
          who: 'Marko',
          hr: 'A tvoja sestra? Hoće li ona doći?',
          en: 'And your sister? Will she come?',
        },
        {
          who: 'Ana',
          hr: 'Hoće! Maja će doći, ali Petar neće. On će biti u Zagrebu.',
          en: 'She will! Maja will come, but Petar will not. He will be in Zagreb.',
        },
        { who: 'Marko', hr: 'Dobro. Krenut ćemo u devet.', en: 'Good. We will set off at nine.' },
        {
          who: 'Ana',
          hr: 'Bit će lijepo! Hoće li biti sunčano?',
          en: 'It will be lovely! Will it be sunny?',
        },
        { who: 'Marko', hr: 'Hoće. Neće padati kiša.', en: 'It will. It will not rain.' },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who will go to the seaside tomorrow?',
          options: ['Marko and Ana', 'Marko and Maja', 'Ana and Petar', 'Marko, Maja and Petar'],
          correct: 1,
          hint: 'One of them will work all day. One of them will be in Zagreb.',
          explanation:
            "Marko will go, and Ana's sister Maja will come with him. Ana will be working, and Petar will be in Zagreb.",
        },
        {
          q: 'Marko says "Sutra ću ići", but later "Krenut ćemo u devet." What has happened to the verb krenuti?',
          options: [
            'Nothing — krenut is a different verb',
            'It is in the past tense',
            'It stands first, and a -ti verb drops its final -i when the small future word follows it',
            'It has lost its -i because the sentence is about "we"',
          ],
          correct: 2,
          hint: 'In which of the two sentences does the verb come before the small word?',
          explanation:
            'The small future words (ću, ćeš, će …) stand in second place. After another word the verb is whole: Sutra ću ići. When the verb itself is first, a -ti verb loses its -i: Krenut ćemo. A -ći verb such as ići never shortens.',
        },
        {
          type: 'type',
          q: 'Now you. Marko asks you and Ana: "Hoćete li doći?" Neither of you will. Answer for both of you, in one word: ____.',
          answer: 'Nećemo',
          hint: 'Ana says "Neću" for herself. For "we", use the same word with the ending you see in "Krenut ćemo".',
          explanation:
            'Nećemo. — "We will not." neću, nećeš, neće, nećemo, nećete, neće: always one word.',
        },
        {
          type: 'type',
          q: 'Say "We will watch a film." Start with the verb: ____ ćemo film. (gledati)',
          answer: 'Gledat',
          hint: 'gledati is a -ti verb. Before ćemo it loses its last letter, like krenuti in the dialogue.',
          explanation: 'Gledat ćemo film. — written as two words, and the verb drops its final -i.',
        },
        {
          type: 'transform',
          q: 'Say it about tomorrow: change "Danas" to "Sutra" and put the verb in the future.',
          from: 'Danas učim hrvatski.',
          answer: 'Sutra ću učiti hrvatski.',
          accept: ['Sutra ću hrvatski učiti.'],
          hint: 'After "Sutra" comes the small future word for "I", and then the whole dictionary form of the verb.',
          explanation:
            'Sutra ću učiti hrvatski. — sutra is first, so ću is second and the verb keeps its full form.',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: '"Ću doći sutra." is correct Croatian.',
        answer: false,
        hint: 'The small future word is one of those that cannot stand first.',
        explanation: 'ću needs a word before it: Doći ću sutra, or Sutra ću doći.',
      },
      8,
      {
        type: 'match',
        q: 'Match each person to its small future word.',
        pairs: [
          ['ja', 'ću'],
          ['ti', 'ćeš'],
          ['mi', 'ćemo'],
          ['vi', 'ćete'],
          ['oni', 'će'],
        ],
        explanation: 'ću, ćeš, će, ćemo, ćete, će — the same for men and women, with any verb.',
      },
      1,
      7,
      {
        type: 'sort',
        q: 'The verb stands first, before ću. Does it lose its final -i, or does it stay whole?',
        groups: ['It loses its -i', 'It stays whole'],
        items: [
          { hr: 'raditi', group: 0 },
          { hr: 'ići', group: 1 },
          { hr: 'gledati', group: 0 },
          { hr: 'doći', group: 1 },
          { hr: 'kuhati', group: 0 },
          { hr: 'moći', group: 1 },
          { hr: 'biti', group: 0 },
        ],
        explanation:
          'Only -ti verbs shorten: radit ću, gledat ću, kuhat ću, bit ću. A -ći verb keeps its full form: ići ću, doći ću, moći ću.',
      },
      {
        type: 'transform',
        q: 'Make it negative.',
        from: 'Doći ću sutra.',
        answer: 'Neću doći sutra.',
        accept: ['Sutra neću doći.'],
        hint: 'The "not" form is a single word, and it may stand first.',
        explanation: 'Neću doći sutra. — ne and ću fuse into one word, followed by the whole verb.',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "Will Ana come?"',
        words: ['Hoće', 'li', 'Ana', 'doći?'],
        explanation:
          'Hoće li Ana doći? — a yes/no question in the future starts with the long form (hoće) + li.',
      },
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sutra', 'ćemo', 'putovat', 'u', 'Zadar.'],
        wrong: 2,
        answer: 'putovati',
        hint: 'The verb is short only when it stands directly before the small future word.',
        explanation:
          'Sutra ćemo putovati u Zadar. — after ćemo the verb keeps its whole form. Short only when it is first: Putovat ćemo.',
      },
      6,
      {
        type: 'transform',
        q: 'Start with the verb (the short form).',
        from: 'Ja ću čitati.',
        answer: 'Čitat ću.',
        hint: 'Drop the pronoun, put the verb first, and remove one letter from it.',
        explanation: 'Čitat ću. — verb first, without its final -i, then ću as a separate word.',
      },
      11,
      {
        type: 'listen',
        audio: 'Sutra će padati kiša.',
        q: 'What will the weather be like tomorrow?',
        options: ['It will be sunny', 'It will snow', 'It will be hot', 'It will rain'],
        correct: 3,
        explanation: 'Sutra će padati kiša. — tomorrow it will rain.',
      },
      {
        type: 'dictate',
        audio: 'Bit će lijepo.',
        answer: 'Bit će lijepo.',
        hint: 'Three words: "It will be lovely." The verb biti has lost its last letter.',
        explanation: 'Bit će lijepo. — biti → bit će: the future of "Lijepo je".',
      },
    ],
  },

  // ── Making plans ───────────────────────────────────────────────────────────
  'future-plans': {
    text: {
      kind: 'dialogue',
      title: 'Planovi za vikend',
      lines: [
        {
          who: 'Iva',
          hr: 'Tom, što ćeš raditi za vikend?',
          en: 'Tom, what will you do at the weekend?',
        },
        {
          who: 'Tom',
          hr: 'U subotu ću čistiti stan. A ti?',
          en: 'On Saturday I will clean the flat. And you?',
        },
        {
          who: 'Iva',
          hr: 'Ja ću ići na more. Hoćeš li i ti ići?',
          en: 'I will go to the seaside. Will you go too?',
        },
        {
          who: 'Tom',
          hr: 'U subotu neću. Ali u nedjelju ću biti slobodan.',
          en: 'Not on Saturday. But on Sunday I will be free.',
        },
        {
          who: 'Iva',
          hr: 'Dobro! Onda ćemo u nedjelju ići zajedno. Plivat ćemo i jesti ribu.',
          en: 'Good! Then we will go together on Sunday. We will swim and eat fish.',
        },
        { who: 'Tom', hr: 'Kada ćemo krenuti?', en: 'When will we set off?' },
        {
          who: 'Iva',
          hr: 'Krenut ćemo u osam. Moja sestra će voziti.',
          en: 'We will set off at eight. My sister will drive.',
        },
        { who: 'Tom', hr: 'Lijepo! Vidimo se u nedjelju.', en: 'Lovely! See you on Sunday.' },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: what are Tom's plans for Saturday and for Sunday?",
          options: [
            'Saturday: the seaside. Sunday: cleaning the flat',
            'Saturday: driving to Split. Sunday: working',
            'Saturday and Sunday: the seaside with Iva',
            'Saturday: cleaning the flat. Sunday: the seaside with Iva',
          ],
          correct: 3,
          hint: 'On one of the two days he will be free.',
          explanation:
            'On Saturday Tom will clean his flat. On Sunday he is free, so he will go to the seaside with Iva — her sister will drive.',
        },
        {
          q: 'Iva says "Onda ćemo u nedjelju ići" but "Plivat ćemo." Why is the verb short only in the second sentence?',
          options: [
            'Because plivati is irregular',
            'Because the second sentence is a question',
            'There the verb stands first, directly before ćemo — and a -ti verb then drops its -i',
            'Because swimming is a fixed plan',
          ],
          correct: 2,
          hint: 'Look at which word is first in each sentence.',
          explanation:
            'ćemo wants second place. If another word is first (Onda), the verb follows whole. If the verb is first, a -ti verb is shortened: Plivat ćemo, Krenut ćemo.',
        },
        {
          type: 'type',
          q: 'Now you. Iva asks YOU: "Što ćeš raditi za vikend?" You will travel (putovati). Start with the verb: ____ ću.',
          answer: 'Putovat',
          hint: 'A -ti verb loses its last letter before ću — as in "Plivat ćemo".',
          explanation: 'Putovat ću. — putovati without its final -i, then ću as a separate word.',
        },
        {
          type: 'type',
          q: 'Iva wants to know whether you will come on Sunday. Say "I will come." Start with the verb: ____ ću.',
          answer: 'Doći',
          hint: 'The verb "to come" ends in -ći, not -ti. Such verbs never shorten before ću.',
          explanation: 'Doći ću. — a -ći verb keeps its whole form: doći ću, ići ću.',
        },
        {
          type: 'transform',
          q: 'Start the sentence with "U nedjelju".',
          from: 'Plivat ćemo.',
          answer: 'U nedjelju ćemo plivati.',
          hint: 'Now ćemo follows the time phrase — and the verb gets its last letter back.',
          explanation:
            'U nedjelju ćemo plivati. — with another word first, the verb stands after ćemo in its whole form.',
        },
      ],
    },
    mix: [
      10,
      11,
      {
        type: 'tf',
        q: 'For a plan that is already fixed, Croatian can simply use the present: "Sutra idem na more."',
        answer: true,
        hint: 'English does the same: "Tomorrow I am going to the seaside."',
        explanation:
          'Both the future and the present are natural here. The future says "I will"; the present says "it is arranged".',
      },
      0,
      8,
      {
        type: 'transform',
        q: 'Start the sentence with "Sutra".',
        from: 'Radit ću.',
        answer: 'Sutra ću raditi.',
        hint: 'ću stays in second place, and the verb after it is whole again.',
        explanation: 'Sutra ću raditi. — time word, then ću, then the full verb.',
      },
      9,
      {
        type: 'sort',
        q: 'Is the sentence written correctly, or not?',
        groups: ['Correct', 'Not correct'],
        items: [
          { hr: 'Putovat ću u Split.', group: 0 },
          { hr: 'Ić ću na more.', group: 1 },
          { hr: 'Sutra ću kuhati.', group: 0 },
          { hr: 'Ću kuhati sutra.', group: 1 },
          { hr: 'Doći ćemo u subotu.', group: 0 },
          { hr: 'Doć ćemo u subotu.', group: 1 },
        ],
        explanation:
          'A -ći verb never shortens (Ići ću, Doći ćemo), and ću can never stand first (Kuhat ću sutra, or Sutra ću kuhati).',
      },
      5,
      {
        type: 'order',
        q: 'Put the words in order: "What will you do tomorrow?"',
        words: ['Što', 'ćeš', 'raditi', 'sutra?'],
        explanation: 'Što ćeš raditi sutra? — the question word is first, so ćeš is second.',
      },
      {
        type: 'transform',
        q: 'Make it negative.',
        from: 'Ići ćemo na more.',
        answer: 'Nećemo ići na more.',
        accept: ['Na more nećemo ići.'],
        hint: 'The "not" form for "we" is one full word, and it can stand first.',
        explanation: 'Nećemo ići na more. — ne + ćemo is one word, followed by the whole verb.',
      },
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['U', 'subotu', 'ću', 'čistit', 'stan.'],
        wrong: 3,
        answer: 'čistiti',
        hint: 'The verb is short only when it stands directly before ću.',
        explanation:
          'U subotu ću čistiti stan. — after ću the verb is whole. Short only when it is first: Čistit ću stan.',
      },
      {
        type: 'match',
        q: 'Match each question to its answer.',
        pairs: [
          ['Što ćeš raditi sutra?', 'Učit ću hrvatski.'],
          ['Hoćete li ići na more?', 'Nećemo, moramo raditi.'],
          ['Kada će doći tvoja sestra?', 'Doći će u kolovozu.'],
          ['Što će djeca raditi?', 'Plivat će u moru.'],
        ],
        explanation:
          'The answer uses the future word of the person who answers or is meant: ćeš → ću, hoćete → nećemo, će → će.',
      },
      12,
      7,
      {
        type: 'listen',
        audio: 'Moja sestra će doći u kolovozu.',
        q: 'When will the sister come?',
        options: ['In July', 'On Saturday', 'In August', 'In September'],
        correct: 2,
        explanation: 'Moja sestra će doći u kolovozu. — kolovoz is August.',
      },
      {
        type: 'dictate',
        audio: 'Doći ćemo u subotu.',
        answer: 'Doći ćemo u subotu.',
        hint: 'Four words: "We will come on Saturday."',
        explanation: 'Doći ćemo u subotu. — a -ći verb, so nothing is dropped.',
      },
    ],
  },

  // ── The dative ─────────────────────────────────────────────────────────────
  'dative-intro': {
    text: {
      kind: 'dialogue',
      title: 'Bakin rođendan',
      lines: [
        {
          who: 'Maja',
          hr: 'Luka, sutra je bakin rođendan. Što ćeš dati baki?',
          en: "Luka, tomorrow is grandma's birthday. What will you give grandma?",
        },
        {
          who: 'Luka',
          hr: 'Dat ću baki knjigu. A ti?',
          en: 'I will give grandma a book. And you?',
        },
        {
          who: 'Maja',
          hr: 'Ja sam kupila baki cvijeće. Jesi li javio stricu?',
          en: 'I have bought grandma flowers. Have you let uncle know?',
        },
        {
          who: 'Luka',
          hr: 'Nisam. Poslat ću stricu poruku. A tko će pomoći mami? Ona kuha ručak.',
          en: 'No. I will send uncle a message. And who will help mum? She is cooking lunch.',
        },
        {
          who: 'Maja',
          hr: 'Ja ću pomoći mami, a ti ćeš pomoći djedu u vrtu.',
          en: 'I will help mum, and you will help grandpa in the garden.',
        },
        { who: 'Luka', hr: 'Dobro. A što radi tata?', en: 'All right. And what is dad doing?' },
        {
          who: 'Maja',
          hr: 'Tata piše baki pismo. To je njegov poklon.',
          en: 'Dad is writing grandma a letter. That is his present.',
        },
        {
          who: 'Luka',
          hr: 'Lijepo! Bit će to lijep rođendan.',
          en: 'Lovely! It will be a nice birthday.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: who gives grandma what?',
          options: [
            'Luka: flowers. Maja: a book. Dad: a message',
            'Luka: a book. Maja: flowers. Dad: a letter',
            'Luka: a letter. Maja: lunch. Dad: flowers',
            'Luka: a message. Maja: a book. Dad: flowers',
          ],
          correct: 1,
          hint: 'The message is for uncle, not for grandma.',
          explanation:
            'Luka will give her a book, Maja has bought flowers, and dad is writing her a letter. The message is for uncle.',
        },
        {
          q: 'Luka says "Dat ću baki knjigu." How does the sentence show who gets the book?',
          options: [
            'By the word order only',
            'By the ending of knjigu',
            'By a preposition before baka',
            'By the ending of baki: baka with -i means "to grandma" — no preposition is needed',
          ],
          correct: 3,
          hint: 'Find the word that has changed from "baka".',
          explanation:
            'The person who receives stands in the dative: baka → baki, mama → mami, stric → stricu, djed → djedu. The thing given is the object: knjigu. English needs "to"; Croatian uses the ending.',
        },
        {
          type: 'type',
          q: 'Now you. You will write to your aunt (teta): Pisat ću ____.',
          answer: 'teti',
          hint: 'The one who receives takes the dative. teta is feminine — change it the way the dialogue changes baka and mama.',
          explanation:
            'Pisat ću teti. — a feminine noun in -a takes -i in the dative: teta → teti.',
        },
        {
          type: 'type',
          q: 'Say who you are helping — your dad (tata): Pomažem ____.',
          answer: 'tati',
          hint: 'tata ends in -a, so it changes like mama → mami. (pomoći: pomažem = I help.)',
          explanation:
            'Pomažem tati. — pomoći takes the dative; tata → tati, like a feminine noun in -a.',
        },
        {
          type: 'transform',
          q: 'Say who gets the flowers without "za": use the dative.',
          from: 'Kupujem cvijeće za mamu.',
          answer: 'Kupujem cvijeće mami.',
          accept: ['Kupujem mami cvijeće.', 'Mami kupujem cvijeće.'],
          hint: 'Drop za. The ending of the person then has to say "to" or "for" — as in "Ja sam kupila baki cvijeće".',
          explanation:
            'Kupujem cvijeće mami. — za + accusative (za mamu) and the plain dative (mami) both say who it is for.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each verb to its meaning.',
        pairs: [
          ['dati', 'to give'],
          ['pomoći', 'to help'],
          ['vjerovati', 'to believe, to trust'],
          ['slati', 'to send'],
          ['javiti', 'to let know'],
        ],
        explanation:
          'All five take a person in the dative: you give, help, trust, send and let know TO someone.',
      },
      0,
      4,
      {
        type: 'sort',
        q: 'In a sentence like "Dajem … …", is the word the THING that is given, or the PERSON who gets it?',
        groups: ['The thing (accusative)', 'The person who gets it (dative)'],
        items: [
          { hr: 'knjigu', group: 0 },
          { hr: 'baki', group: 1 },
          { hr: 'poruku', group: 0 },
          { hr: 'djedu', group: 1 },
          { hr: 'razglednicu', group: 0 },
          { hr: 'teti', group: 1 },
          { hr: 'kavu', group: 0 },
          { hr: 'Marku', group: 1 },
        ],
        explanation:
          'A feminine thing ends in -u as an object (knjigu, poruku). The person who gets it ends in -i if feminine (baki, teti) and in -u if masculine (djedu, Marku).',
      },
      5,
      1,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Šaljem', 'mamu', 'razglednicu.'],
        wrong: 1,
        answer: 'mami',
        hint: 'As it stands, the sentence sends mum somewhere. Who gets the postcard?',
        explanation:
          'Šaljem mami razglednicu. — the thing is in the accusative, the person who gets it in the dative.',
      },
      6,
      {
        type: 'tf',
        q: '"Pomažem sestru." is correct Croatian.',
        answer: false,
        hint: 'pomoći is one of the verbs that want their person in the dative.',
        explanation: 'pomoći takes the dative, not the accusative: Pomažem sestri.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I am writing grandma a letter."',
        words: ['Pišem', 'baki', 'pismo.'],
        explanation: 'Pišem baki pismo. — to whom: baki. What: pismo.',
      },
      7,
      {
        type: 'transform',
        q: 'Say who the present is for without "za": use the dative.',
        from: 'Kupio sam poklon za Anu.',
        answer: 'Kupio sam poklon Ani.',
        accept: ['Kupio sam Ani poklon.', 'Ani sam kupio poklon.'],
        hint: 'Drop za and give the name its dative ending.',
        explanation: 'Kupio sam poklon Ani. — a name in -a takes -i: Ana → Ani.',
      },
      9,
      8,
      {
        type: 'listen',
        audio: 'Šaljem prijatelju razglednicu.',
        q: 'Who gets the postcard?',
        options: ['My brother', 'My sister', 'My parents', 'My friend'],
        correct: 3,
        explanation: 'Šaljem prijatelju razglednicu. — prijatelj → prijatelju: to my friend.',
      },
      {
        type: 'dictate',
        audio: 'Vjerujem bratu.',
        answer: 'Vjerujem bratu.',
        hint: 'Two words: "I trust my brother."',
        explanation: 'Vjerujem bratu. — vjerovati takes the dative: brat → bratu.',
      },
    ],
  },

  // ── The dative after prepositions ──────────────────────────────────────────
  'dative-prepositions': {
    text: {
      kind: 'dialogue',
      title: 'K liječniku',
      lines: [
        { who: 'Ana', hr: 'Bog, Ivan! Kamo ideš?', en: 'Hi, Ivan! Where are you going?' },
        { who: 'Ivan', hr: 'Idem k liječniku. A ti?', en: "I am going to the doctor's. And you?" },
        {
          who: 'Ana',
          hr: 'Ja idem k baki. Ona stanuje nasuprot pošti.',
          en: "I am going to grandma's. She lives opposite the post office.",
        },
        {
          who: 'Ivan',
          hr: 'I liječnik radi tamo, nasuprot parku. Idemo zajedno prema centru!',
          en: 'The doctor works there too, opposite the park. Let us walk towards the centre together!',
        },
        {
          who: 'Ana',
          hr: 'Dobro. Ali pada kiša, a ti nemaš kišobran!',
          en: 'All right. But it is raining, and you have no umbrella!',
        },
        {
          who: 'Ivan',
          hr: 'Znam. Idem unatoč kiši. Moram k liječniku.',
          en: "I know. I am going despite the rain. I have to get to the doctor's.",
        },
        {
          who: 'Ana',
          hr: 'A sutra? Hoćeš li doći na kavu?',
          en: 'And tomorrow? Will you come for a coffee?',
        },
        {
          who: 'Ivan',
          hr: 'Sutra ne mogu. Idem ka kolegi na ručak.',
          en: "Tomorrow I cannot. I am going to a colleague's for lunch.",
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where is each of them going, and where does grandma live?',
          options: [
            "Ivan to a colleague's, Ana to the doctor's; grandma lives opposite the park",
            "Ivan to the post office, Ana to grandma's; grandma lives in the centre",
            "Ivan to the doctor's, Ana to grandma's; grandma lives opposite the post office",
            "Ivan to the doctor's, Ana to the park; grandma lives opposite the doctor",
          ],
          correct: 2,
          hint: 'The colleague is tomorrow. The park is opposite the doctor, not opposite grandma.',
          explanation:
            "Ivan is going to the doctor's and Ana to her grandma's. Grandma lives opposite the post office; the doctor works opposite the park.",
        },
        {
          q: 'Ivan says "k liječniku" but "ka kolegi". Why does k get an extra a?',
          options: [
            'Because the next word starts with k — "k kolegi" would be hard to say',
            'Because kolega is a foreign word',
            'Because it is tomorrow, not today',
            'ka is used with men and k with women',
          ],
          correct: 0,
          hint: 'Say "k kolegi" out loud.',
          explanation:
            'k means "to" a person. Before a word that starts with k or g it becomes ka: ka kolegi. The person after it takes the dative ending: liječnik → liječniku, kolega → kolegi, baka → baki.',
        },
        {
          type: 'type',
          q: 'Now you. Ana asks YOU: "Kamo ideš?" You are going to your sister\'s: Idem k ____.',
          answer: 'sestri',
          hint: 'After k the person takes the dative: a noun in -a changes like baka → baki.',
          explanation: 'Idem k sestri. — to a person: k + dative; sestra → sestri.',
        },
        {
          type: 'type',
          q: 'You are walking towards the school (škola): Idem prema ____.',
          answer: 'školi',
          hint: 'prema takes the same ending as k: Ivan says "prema centru"; a feminine noun in -a takes -i.',
          explanation:
            'Idem prema školi. — prema means "towards", and it takes the dative: škola → školi.',
        },
        {
          type: 'transform',
          q: 'Now you are going to your grandfather (djed) instead.',
          from: 'Idem k mami.',
          answer: 'Idem k djedu.',
          hint: 'djed is masculine, so its ending is the one in "k liječniku". Does k need an extra a before d?',
          explanation:
            'Idem k djedu. — masculine dative -u. The extra a appears only before k and g.',
        },
      ],
    },
    mix: [
      {
        type: 'match',
        q: 'Match each preposition to its meaning.',
        pairs: [
          ['k', 'to (a person)'],
          ['prema', 'towards'],
          ['nasuprot', 'opposite'],
          ['unatoč', 'despite'],
        ],
        explanation:
          'All four are followed by a noun in the dative — the case you met in the last lesson.',
      },
      8,
      {
        type: 'tf',
        q: '"Idem u liječnika." is the right way to say "I am going to the doctor\'s."',
        answer: false,
        hint: 'A person is not a place you go into.',
        explanation:
          'To a person you go with k + the dative: Idem k liječniku. The preposition u is for places.',
      },
      6,
      9,
      {
        type: 'sort',
        q: 'Which form of the preposition goes before the word: k or ka?',
        groups: ['k', 'ka'],
        items: [
          { hr: 'baki', group: 0 },
          { hr: 'kolegi', group: 1 },
          { hr: 'frizeru', group: 0 },
          { hr: 'konobaru', group: 1 },
          { hr: 'sestri', group: 0 },
          { hr: 'gostu', group: 1 },
          { hr: 'teti', group: 0 },
        ],
        explanation:
          'Before a word that starts with k or g, the preposition becomes ka. Everywhere else it is k.',
      },
      4,
      {
        type: 'order',
        q: 'Put the words in order: "The bank is opposite the post office."',
        words: ['Banka', 'je', 'nasuprot', 'pošti.'],
        explanation: 'Banka je nasuprot pošti. — nasuprot + dative: pošta → pošti.',
      },
      10,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Autobus', 'ide', 'prema', 'Split', 'svaki', 'dan.'],
        wrong: 3,
        answer: 'Splitu',
        hint: 'After prema the place cannot keep its dictionary form.',
        explanation:
          'Autobus ide prema Splitu svaki dan. — prema takes the dative: Split → Splitu.',
      },
      11,
      {
        type: 'transform',
        q: 'Now you are going to your colleague (kolega) instead. Watch the little word.',
        from: 'Idem k bratu.',
        answer: 'Idem ka kolegi.',
        hint: 'kolega takes -i, like a noun in -a. And think about what is hard to say before another k.',
        explanation: 'Idem ka kolegi. — k becomes ka before k; kolega → kolegi.',
      },
      3,
      12,
      {
        type: 'listen',
        audio: 'Naš stan je nasuprot parku.',
        q: 'Where is the flat?',
        options: ['In the park', 'Opposite the park', 'Near the post office', 'Towards the centre'],
        correct: 1,
        explanation: 'Naš stan je nasuprot parku. — opposite the park.',
      },
      {
        type: 'dictate',
        audio: 'Idemo k baki.',
        answer: 'Idemo k baki.',
        hint: 'Three words: "We are going to grandma\'s." The little word before the person is a single letter.',
        explanation: 'Idemo k baki. — k + dative: baka → baki (family words keep their k).',
      },
    ],
  },

  // ── Object pronouns ────────────────────────────────────────────────────────
  'object-pronouns': {
    text: {
      kind: 'dialogue',
      title: 'Gdje je moj mobitel?',
      lines: [
        {
          who: 'Luka',
          hr: 'Maja, vidiš li moj mobitel? Ne mogu ga naći.',
          en: 'Maja, can you see my mobile? I cannot find it.',
        },
        {
          who: 'Maja',
          hr: 'Ne vidim ga. Je li u torbi?',
          en: 'I cannot see it. Is it in your bag?',
        },
        { who: 'Luka', hr: 'Nije. Možeš li mi pomoći?', en: 'No. Can you help me?' },
        {
          who: 'Maja',
          hr: 'Naravno. Jesi li ga dao Ivanu? Jučer si mu pokazao nove slike.',
          en: 'Of course. Did you give it to Ivan? Yesterday you showed him the new pictures.',
        },
        {
          who: 'Luka',
          hr: 'Ivanu? Da! Dao sam mu ga jučer.',
          en: 'To Ivan? Yes! I gave it to him yesterday.',
        },
        {
          who: 'Maja',
          hr: 'Onda ga ima Ivan. Poslat ću mu poruku.',
          en: 'Then Ivan has it. I will send him a message.',
        },
        {
          who: 'Luka',
          hr: 'Hvala ti! A gdje je Ana? Čeka li nas?',
          en: 'Thank you! And where is Ana? Is she waiting for us?',
        },
        { who: 'Maja', hr: 'Čeka. Vidjela sam je u kavani.', en: 'She is. I saw her in the café.' },
      ],
      questions: [
        {
          q: "Without looking back at the dialogue: where is Luka's mobile?",
          options: [
            'In his bag',
            'Ana has it in the café',
            'Ivan has it — Luka gave it to him yesterday',
            'Maja has it',
          ],
          correct: 2,
          hint: 'Luka showed someone his new pictures yesterday.',
          explanation:
            'Luka gave the mobile to Ivan yesterday when he showed him the pictures, so Ivan has it.',
        },
        {
          q: 'Maja says "Ne vidim ga." What does "ga" stand for, and why is it not the first word?',
          options: [
            'It stands for Luka; it is last because it is stressed',
            'It stands for the mobile (a masculine noun); short pronouns can never stand first',
            'It stands for the bag; it follows the verb because the sentence is negative',
            'It means "not"; it always follows the verb',
          ],
          correct: 1,
          hint: 'You met this short word with the accusative: Vidim ga. — I see him / it.',
          explanation:
            'ga = "him" or "it" for a masculine noun (mobitel). Short pronouns are small unstressed words: they sit in second place and never open a sentence.',
        },
        {
          type: 'type',
          q: 'Now you. You and Ana are waiting for Luka. Ask Maja: "Does Luka see us?" Vidi li ____ Luka?',
          answer: 'nas',
          hint: 'The short word for "us" — Luka uses it when he asks whether Ana is waiting.',
          explanation:
            'Vidi li nas Luka? — nas = us. It follows "Vidi li", as close to second place as it can get.',
        },
        {
          type: 'type',
          q: 'Ivan needs your book, and you are giving it to him: Dajem ____ knjigu.',
          answer: 'mu',
          hint: 'Ivan is the one who receives. Maja and Luka use a short "to him" word about Ivan — the one in "Poslat ću … poruku".',
          explanation: 'Dajem mu knjigu. — mu = to him: the short dative form of on.',
        },
        {
          type: 'transform',
          q: 'Replace "Ivanu" and "mobitel" with short pronouns.',
          from: 'Dajem Ivanu mobitel.',
          answer: 'Dajem mu ga.',
          hint: 'Two short words: first the one for "to him", then the one for "it" (mobitel is masculine). To whom comes before what.',
          explanation:
            'Dajem mu ga. — the dative (mu) always comes before the accusative (ga), as in Luka\'s "Dao sam mu ga".',
        },
      ],
    },
    mix: [
      4,
      {
        type: 'tf',
        q: '"Ga vidim svaki dan." is correct Croatian.',
        answer: false,
        hint: 'Short pronouns need a word to lean on.',
        explanation:
          'A short pronoun cannot open a sentence: Vidim ga svaki dan, or Ja ga vidim svaki dan.',
      },
      5,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Brat', 'uči.', 'Pomažem', 'ga', 'svaki', 'dan.'],
        wrong: 3,
        answer: 'mu',
        hint: 'pomoći wants its person in the dative, not the accusative.',
        explanation: 'Pomažem mu svaki dan. — pomoći takes the dative, so "him" is mu, not ga.',
      },
      9,
      6,
      {
        type: 'match',
        q: 'Match each meaning to its short dative form.',
        pairs: [
          ['to me', 'mi'],
          ['to him', 'mu'],
          ['to her', 'joj'],
          ['to us', 'nam'],
          ['to them', 'im'],
        ],
        explanation:
          'These are the short "to whom" forms. Like all short pronouns, they sit in second place.',
      },
      {
        type: 'sort',
        q: 'Does the short word answer "whom? what?" (accusative) or "to whom?" (dative)?',
        groups: ['Whom? What? — accusative', 'To whom? — dative'],
        items: [
          { hr: 'ga', group: 0 },
          { hr: 'mu', group: 1 },
          { hr: 'ih', group: 0 },
          { hr: 'im', group: 1 },
          { hr: 'te', group: 0 },
          { hr: 'joj', group: 1 },
          { hr: 'nam', group: 1 },
        ],
        explanation:
          'Vidim ga, ih, te — I see him, them, you. Pišem joj, nam — I write to her, to us; and the same for "to him" and "to them".',
      },
      7,
      {
        type: 'order',
        q: 'Put the words in order: "He gave it to me."',
        words: ['Dao', 'mi', 'ga', 'je.'],
        explanation:
          'Dao mi ga je. — to whom (mi) comes before what (ga), and je comes last in the group.',
      },
      {
        type: 'transform',
        q: 'Replace "baki" with a short pronoun.',
        from: 'Pišem baki pismo.',
        answer: 'Pišem joj pismo.',
        hint: 'Grandma is "ona", and she is the one who receives: use the short dative form.',
        explanation:
          'Pišem joj pismo. — joj = to her; it takes second place, right after the verb.',
      },
      3,
      8,
      {
        type: 'transform',
        q: 'Replace "mami" and "ključ" with short pronouns.',
        from: 'Dajem mami ključ.',
        answer: 'Dajem joj ga.',
        hint: 'First the word for "to her", then the word for "it" — ključ is masculine.',
        explanation: 'Dajem joj ga. — dative before accusative: joj (to her) + ga (it).',
      },
      10,
      {
        type: 'listen',
        audio: 'Baka nam piše svaki tjedan.',
        q: 'Who does grandma write to every week?',
        options: ['To me', 'To them', 'To us', 'To you'],
        correct: 2,
        explanation: 'Baka nam piše svaki tjedan. — nam = to us.',
      },
      {
        type: 'dictate',
        audio: 'Možeš li nam pomoći?',
        answer: 'Možeš li nam pomoći?',
        hint: 'Four words: "Can you help us?"',
        explanation: 'Možeš li nam pomoći? — nam (to us) follows "Možeš li".',
      },
    ],
  },
};
