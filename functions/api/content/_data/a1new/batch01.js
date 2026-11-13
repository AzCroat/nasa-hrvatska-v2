// functions/api/content/_data/a1new/batch01.js
//
// New A1 lessons, batch 01 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// sounds-palatals (2) · biti-questions-negation (5) · plural-irregular (10) ·
// jobs-professions (11) · nationalities (13) · numbers-11-1000 (15).
//
// Each lesson uses only grammar taught at or before its own masterOrder. Where an
// earlier lesson taught a set phrase (iz Splita, u Zagrebu, Odakle si?, Govorim
// engleski), it appears here as an unanalysed chunk. Nothing counts nouns after a
// number (genitive, lesson 84), nothing sibilarizes a plural (lesson 20) and no
// masculine noun in -ac is put in the plural (fleeting a, lesson 21).

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'sounds-palatals',
    masterOrder: 2,
    prerequisites: ['alphabet'],
    objectives: [
      'Say and spell č and ć, dž and đ, and keep each pair apart',
      'Read lj and nj as one sound each, never two',
      'Know that leaving a hook off can make a different word',
      'Write a word the same way however its last consonant is said',
    ],
  },
  {
    id: 'biti-questions-negation',
    masterOrder: 5,
    prerequisites: ['pronouns-biti'],
    objectives: [
      'Say "I am not" for every person: nisam, nisi, nije, nismo, niste, nisu',
      'Ask a yes/no question with biti: Jesi li…? Je li…? Jeste li…?',
      'Answer in one word: Jesam. / Nisam. / Jest. / Nije.',
      'Put the negative and the question form in the right place in the sentence',
    ],
  },
  {
    id: 'plural-irregular',
    masterOrder: 10,
    prerequisites: ['plural-nouns', 'demonstratives', 'basic-questions'],
    objectives: [
      'Know the plurals that are different words: čovjek → ljudi, dijete → djeca',
      'Use djeca, braća and gospoda with a plural verb: Djeca su ovdje.',
      'Say eyes and ears: oko → oči, uho → uši',
      'Handle kći → kćeri and ime → imena',
    ],
  },
  {
    id: 'jobs-professions',
    masterOrder: 11,
    prerequisites: ['plural-irregular', 'gender', 'biti-questions-negation'],
    objectives: [
      'Ask and answer "What do you do?": Što si po zanimanju?',
      'Make the female form of a job: učitelj → učiteljica, liječnik → liječnica',
      'Say a job with no word for "a": Ja sam kuhar.',
      'Put a job into the plural for men, women and mixed groups',
    ],
  },
  {
    id: 'nationalities',
    masterOrder: 13,
    prerequisites: ['countries-languages', 'jobs-professions'],
    objectives: [
      'Say your nationality as a man or a woman: Hrvat, Hrvatica',
      'Know the three female endings: -ica, -ka, -kinja',
      'Name a language with -ski and a small letter: hrvatski',
      'Talk about groups: Hrvati, Hrvatice',
      'Name the people of a town: Zagrepčanin, Splićanka, Riječani',
    ],
  },
  {
    id: 'numbers-11-1000',
    masterOrder: 15,
    prerequisites: ['numbers-time'],
    objectives: [
      'Count from eleven to nineteen with -naest',
      'Build the tens with -deset and spell the tricky ones: pedeset, šezdeset',
      'Build any number up to a thousand: tristo četrdeset pet',
      'Read room, bus and house numbers aloud',
      'Know the big number words: tisuća, milijun, milijarda',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // The Special Sounds
  // ─────────────────────────────────────────────────────────
  {
    id: 'sounds-palatals',
    title: 'The Special Sounds: Č Ć Dž Đ Lj Nj',
    subtitle: 'Six letters English does not have, and how to keep them apart',
    icon: '👄',
    level: 'A1',
    duration: '~7 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Six Letters to Own',
        body: 'You already know that every Croatian letter keeps one sound. Six of them have no English letter at all: č, ć, dž, đ, lj and nj. They come in two pairs and a couple, and once you hear the difference you can spell almost any word you hear. This lesson is about your ear and your spelling, not about grammar.',
        icon: '👄',
      },
      {
        type: 'rule',
        title: 'Č and Dž: the Hard Pair',
        body: 'č is the "ch" in church: the tongue tip is raised and the lips push forward a little. dž is the same mouth position with your voice switched on — the "j" in jam. They are partners: č is the quiet one, dž the voiced one. čaj (tea), čaša (glass), ključ (key); džep (pocket), džem (jam), džemper (jumper). dž is written with two letters but it is one letter of the alphabet and one sound.',
        highlight: 'č = church, dž = jam',
      },
      {
        type: 'rule',
        title: 'Ć and Đ: the Soft Pair',
        body: 'ć is softer than č: the tongue tip rests low behind the bottom teeth and the middle of the tongue touches the roof of the mouth. It sits close to the "t" a British speaker says in "tune". đ is its voiced partner, close to the "d" in a British "duke". kuća (house), noć (night), sreća (luck); đak (pupil), rođendan (birthday), anđeo (angel). The family names that end in -ić — Babić, Perić — end in this soft ć.',
        highlight: 'ć = soft, đ = its voiced partner',
      },
      {
        type: 'table',
        title: 'The Two Pairs',
        headers: ['', 'Quiet', 'Voiced', 'Example'],
        rows: [
          ['Hard pair', 'č', 'dž', 'čaj · džep'],
          ['Soft pair', 'ć', 'đ', 'kuća · đak'],
        ],
      },
      {
        type: 'rule',
        title: 'Lj and Nj: One Sound Each',
        body: 'lj is the "lli" in million said as one quick sound; nj is the "ny" in canyon. Each is ONE letter, so ljeto (summer) has four letters, not five, and knjiga (book) is k-nj-i-g-a. Do not say an l and then a y: the tongue makes both at once. ljubav (love), ljudi (people), prijatelj (friend), nedjelja (Sunday); konj (horse), kuhinja (kitchen), Njemačka (Germany), trešnja (cherry).',
        highlight: 'lj and nj are single letters',
      },
      {
        type: 'table',
        title: 'Hear It, Spell It',
        headers: ['Letter', 'Sounds like', 'Word', 'Meaning'],
        rows: [
          ['č', 'church', 'čaša', 'glass'],
          ['ć', 'British "tune"', 'kuća', 'house'],
          ['dž', 'jam', 'džep', 'pocket'],
          ['đ', 'British "duke"', 'đak', 'pupil'],
          ['lj', 'million', 'ljeto', 'summer'],
          ['nj', 'canyon', 'knjiga', 'book'],
        ],
      },
      {
        type: 'rule',
        title: 'The Hooks Are Part of the Word',
        body: 'A hook is not decoration. Leave it off and you may write a different word: kuća is a house, but kuca means "he knocks". Write the hooks every time, and if you have no Croatian keyboard, learn where your phone hides č, ć, đ, š and ž rather than typing c, d or dj instead. Croatians notice a missing hook at once.',
        highlight: 'kuća is not kuca',
      },
      {
        type: 'rule',
        title: 'The End of a Word: Spell What It Is',
        body: 'At the very end of a word many speakers say a voiced consonant more quietly, so Bog can sound close to "bok" and grad close to "grat". The spelling does not change: you write Bog, grad, muž, smeđ. When you hear a word you do not know, the safest guess is the one a dictionary shows, not the one your ear heard at the end.',
        highlight: 'Bog is still written Bog',
      },
      {
        type: 'example',
        title: 'The Hard Pair in Words',
        items: [
          {
            hr: 'čaj, čaša, ključ, večer, mačka, čovjek',
            en: 'tea, glass, key, evening, cat, person',
            note: 'č — the "church" sound',
          },
          {
            hr: 'džep, džem, džemper, budžet, Džakarta',
            en: 'pocket, jam, jumper, budget, Jakarta',
            note: 'dž — one letter, the "jam" sound',
          },
          {
            hr: 'Čakovec, Čazma, Ploče, Bjelovar, Vinkovci',
            en: 'five Croatian towns',
            note: 'three of them with č',
          },
        ],
      },
      {
        type: 'example',
        title: 'The Soft Pair in Words',
        items: [
          {
            hr: 'kuća, noć, sreća, vruć, ćevapi, lišće',
            en: 'house, night, luck, hot, grilled sausages, leaves',
            note: 'ć — softer than č',
          },
          {
            hr: 'đak, rođendan, anđeo, rođak, Đakovo, smeđ',
            en: 'pupil, birthday, angel, cousin, a town in Slavonia, brown',
            note: 'đ — the voiced partner of ć',
          },
          {
            hr: 'Babić, Perić, Kovačić, Horvat, Jurić',
            en: 'five common family names',
            note: 'Kovačić has č and ć side by side: Ko-va-čić',
          },
        ],
      },
      {
        type: 'example',
        title: 'Lj and Nj in Words',
        items: [
          {
            hr: 'ljeto, ljubav, ljudi, prijatelj, nedjelja, kralj',
            en: 'summer, love, people, friend, Sunday, king',
            note: 'lj — one sound',
          },
          {
            hr: 'knjiga, konj, kuhinja, trešnja, Njemačka, panj',
            en: 'book, horse, kitchen, cherry, Germany, tree stump',
            note: 'nj — one sound',
          },
          {
            hr: 'Ljubljana, Kraljevica, Njivice, Opatija, Rijeka',
            en: 'the capital of Slovenia and four places on the Kvarner coast',
            note: 'every j in Opatija and Rijeka is the plain y sound',
          },
        ],
      },
      {
        type: 'example',
        title: 'Words With Two of Them',
        items: [
          {
            hr: 'čučanj, ključanica, ćevapčići, džepić',
            en: 'a squat, keyhole, small grilled sausages, little pocket',
            note: 'say each letter as its own sound',
          },
          {
            hr: 'čaj i kuća, ključ i noć, džem i đak',
            en: 'tea and a house, a key and the night, jam and a pupil',
            note: 'read them aloud slowly, then fast: č, ć, dž, đ in turn',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which letter is the soft one, the sound at the end of the name Babić?',
        options: ['č', 'ć', 'dž', 'lj'],
        correct: 1,
        explanation:
          'Family names in -ić end in the soft ć. č is the hard "church" sound, dž is the "jam" sound and lj is a different sound altogether.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How many letters does the word "ljeto" (summer) have?',
        options: ['five', 'three', 'six', 'four'],
        correct: 3,
        explanation:
          'lj is one letter, so ljeto is lj-e-t-o: four letters. Counting l and j separately gives five, which is how English would count it.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, saying every ch-sound the same way: č and ć are two letters with two sounds, and kuća has the soft one. Second, saying lj and nj as two sounds, "l-yeto" or "kn-yiga": each is one sound. Third, dropping the hooks when writing — kuća is not kuca, and kuca means "he knocks". Read the hook before you read the letter.',
        highlight: 'kuća is not kuca',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How is "house" spelled in Croatian?',
            options: ['kuca', 'kuča', 'kuća', 'kudža'],
            correct: 2,
            explanation:
              'kuća, with the soft ć. kuca without a hook is a different word ("he knocks"), kuča has the hard č, and kudža is not a word.',
          },
          {
            q: 'Which letter is the voiced partner of č (the "jam" sound)?',
            options: ['dž', 'đ', 'ž', 'ć'],
            correct: 0,
            explanation:
              'č and dž are the hard pair: same mouth, voice off and voice on. đ is the partner of the soft ć, and ž is the sound in "treasure".',
          },
          {
            q: 'How many sounds are in "nj" in the word "knjiga"?',
            options: ['two: n then j', 'one', 'three', 'none — it is silent'],
            correct: 1,
            explanation:
              'nj is a single letter and a single sound, the "ny" in canyon. Nothing in Croatian is silent.',
          },
          {
            q: 'Which word is spelled correctly?',
            options: ['rodjendan', 'rođendan', 'roćendan', 'rodžendan'],
            correct: 1,
            explanation:
              'rođendan (birthday) has đ. Typing dj for đ is a keyboard habit, not Croatian spelling; ć and dž are different sounds.',
          },
          {
            q: 'Someone says a word that sounds like "grat" (city). How is it written?',
            options: ['grat', 'građ', 'grač', 'grad'],
            correct: 3,
            explanation:
              'The word is grad. A final d can sound quieter in speech, but the spelling keeps the d.',
          },
          {
            q: 'Which word has the hard "church" sound?',
            options: ['noć', 'čaša', 'đak', 'sreća'],
            correct: 1,
            explanation:
              'čaša starts with č. noć and sreća have the soft ć, and đak starts with đ.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Special Sounds — Key Takeaways',
        points: [
          'č = church, dž = jam: the hard pair',
          'ć = soft (Babić), đ = its voiced partner (đak)',
          'lj and nj are one letter and one sound each',
          'The hooks are part of the word: kuća is not kuca',
          'A final consonant can sound quieter, but the spelling stays: Bog, grad',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // biti: questions and negation
  // ─────────────────────────────────────────────────────────
  {
    id: 'biti-questions-negation',
    title: 'Am I? I Am Not: Questions and No with biti',
    subtitle: 'nisam, nisi, nije — and Jesi li…?',
    icon: '❓',
    level: 'A1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Saying No, Asking Yes',
        body: 'You can say "I am", "you are" and "she is" with biti. Now you will say the opposite — "I am not" — and ask the question — "Are you…?". Both are built from biti itself, and both have a fixed shape you can learn in one go.',
        icon: '❓',
      },
      {
        type: 'rule',
        title: '"Not" Joins the Verb',
        body: 'English adds a separate word: "I am NOT". Croatian joins ni- to the verb and makes one new word. sam → nisam, si → nisi, je → nije, smo → nismo, ste → niste, su → nisu. There is no "ne sam" and no "ne je" — those simply do not exist. Nisam student. (I am not a student.) Ana nije ovdje. (Ana is not here.)',
        highlight: 'ne + sam → nisam',
      },
      {
        type: 'table',
        title: 'biti: Yes, No, Question',
        headers: ['Person', 'I am…', 'I am not…', 'Am I…?'],
        rows: [
          ['ja', 'sam', 'nisam', 'Jesam li?'],
          ['ti', 'si', 'nisi', 'Jesi li?'],
          ['on / ona / ono', 'je', 'nije', 'Je li?'],
          ['mi', 'smo', 'nismo', 'Jesmo li?'],
          ['vi / Vi', 'ste', 'niste', 'Jeste li?'],
          ['oni / one / ona', 'su', 'nisu', 'Jesu li?'],
        ],
      },
      {
        type: 'rule',
        title: 'Nisam Can Come First',
        body: 'You learned that the short sam can never open a sentence: "Sam student" is wrong. The negative is different. nisam, nisi, nije and the rest are full words, so they can stand first: Nisam student. Nije ovdje. You can also put the pronoun first for contrast: Ja nisam student, ali on je.',
        highlight: 'Nisam student.',
      },
      {
        type: 'rule',
        title: 'The Question: Long Form + li',
        body: 'To ask a yes/no question, take the LONG form of biti, put it first, and add li straight after it: jesam li, jesi li, jesmo li, jeste li, jesu li. One exception is the one you will use most: for he, she and it the question is Je li ("jest li" exists, but it is rare and bookish). Then add the rest: Jesi li ti student? Je li Ana ovdje? Jeste li Vi gospodin Horvat?',
        highlight: 'Jesi li ti student?',
      },
      {
        type: 'rule',
        title: 'Answering in One Word',
        body: 'Croatian answers with the verb, in YOUR person. Jesi li student? — Jesam. (I am.) or Nisam. (I am not.) Je li Marko ovdje? — Jest. or Nije. Jeste li Vi profesor? — Jesam. You can put da or ne in front: Da, jesam. Ne, nisam. Answering "Jesi" to "Jesi li?" repeats the question instead of answering it.',
        highlight: 'Jesi li…? — Jesam. / Nisam.',
      },
      {
        type: 'example',
        title: 'Questions and Answers',
        items: [
          {
            hr: 'Jesi li ti student? — Jesam, student sam.',
            en: 'Are you a student? — I am, I am a student.',
            note: 'jesi li in the question, jesam in the answer',
          },
          {
            hr: 'Je li Ana doma? — Nije, Ana je u Zagrebu.',
            en: 'Is Ana at home? — No, Ana is in Zagreb.',
            note: 'je li for she, nije for "she is not"',
          },
          {
            hr: 'Jeste li Vi gospodin Horvat? — Da, jesam.',
            en: 'Are you Mr Horvat? — Yes, I am.',
            note: 'Vi takes jeste li',
          },
          {
            hr: 'Jesu li oni ovdje? — Nisu, oni su tamo.',
            en: 'Are they here? — No, they are over there.',
            note: 'jesu li and nisu for they',
          },
          {
            hr: 'Jesmo li sada u Splitu? — Jesmo.',
            en: 'Are we in Split now? — We are.',
            note: 'jesmo li for we',
          },
        ],
      },
      {
        type: 'example',
        title: 'Saying No',
        items: [
          {
            hr: 'Nisam iz Zagreba, ja sam iz Splita.',
            en: 'I am not from Zagreb, I am from Split.',
            note: 'nisam opens the sentence',
          },
          {
            hr: 'Jesi li ti Ana? — Nisam, ja sam Maja.',
            en: 'Are you Ana? — No, I am Maja.',
            note: 'answer in your own person',
          },
          {
            hr: 'Ivan nije ovdje, a Petra je.',
            en: 'Ivan is not here, but Petra is.',
            note: 'nije, then the short je at the end',
          },
          {
            hr: 'Mi nismo u Zagrebu, mi smo u Splitu.',
            en: 'We are not in Zagreb, we are in Split.',
            note: 'nismo, then smo',
          },
          {
            hr: 'Vi niste u Rijeci? — Nisam, ja sam u Puli.',
            en: 'You are not in Rijeka? — No, I am in Pula.',
            note: 'a statement with a rising voice is also a question',
          },
          {
            hr: 'Je li to Marko? — Nije, to je Luka.',
            en: 'Is that Marko? — No, that is Luka.',
            note: 'to = that (person or thing)',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am not here"?',
        options: ['Ne sam ovdje.', 'Sam ne ovdje.', 'Nisam ovdje.', 'Nije ovdje.'],
        correct: 2,
        explanation:
          'ne and sam join into one word: nisam. "Ne sam" does not exist, and nije means "he/she is not".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Someone asks you "Jesi li ti student?" and you are one. What do you answer?',
        options: ['Jesi.', 'Jesam.', 'Je li.', 'Jest.'],
        correct: 1,
        explanation:
          'You answer about yourself, so the verb is in the "I" form: Jesam. "Jesi" repeats the question\'s "you", and "Jest" is the answer about a third person.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, building "not" from two words the English way: "ne sam", "ne je" — it is nisam, nije. Second, starting a question with the short form: "Si li ti student?" — the question needs the long form, Jesi li ti student? Third, answering with the question\'s person: to "Jesi li…?" the answer is Jesam or Nisam, never "Jesi".',
        highlight: 'Jesi li ti student?',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Marko ___ ovdje." (Marko is not here.)',
            options: ['ne je', 'nisu', 'nije', 'nisam'],
            correct: 2,
            explanation:
              'For he/she/it the negative is nije. "Ne je" does not exist, nisu is "they are not" and nisam is "I am not".',
          },
          {
            q: 'Which question correctly asks "Are you a student?" (to a friend)?',
            options: [
              'Jesi li ti student?',
              'Si li ti student?',
              'Li si ti student?',
              'Jeste li ti student?',
            ],
            correct: 0,
            explanation:
              'The question uses the long form, first, with li after it: Jesi li. The short si cannot open a sentence, li never comes first, and jeste li belongs with vi.',
          },
          {
            q: 'Complete: "___ li Ana doma?" (Is Ana at home?)',
            options: ['Jesmo', 'Jesi', 'Jesu', 'Je'],
            correct: 3,
            explanation:
              'For he, she and it the question is Je li. Jesmo is "we", jesi is "you" and jesu is "they".',
          },
          {
            q: '"Jeste li Vi gospođa Kovač?" — you are. Answer:',
            options: ['Jeste.', 'Jest.', 'Jesam.', 'Jesmo.'],
            correct: 2,
            explanation:
              'You answer about yourself: Jesam. Jeste repeats the question\'s "you", jest is about someone else, and jesmo is "we are".',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Sam nisam student.', 'Nisam student.', 'Ne sam student.', 'Student ne sam.'],
            correct: 1,
            explanation:
              'nisam is a full word, so it can open the sentence: Nisam student. The others either add a second sam or split nisam into two words that do not exist.',
          },
          {
            q: 'Complete: "Oni ___ u Zagrebu, oni su u Osijeku."',
            options: ['nismo', 'nisu', 'niste', 'nije'],
            correct: 1,
            explanation:
              'They are not: nisu. nismo is "we are not", niste "you are not", nije "he/she is not".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Questions and No — Key Takeaways',
        points: [
          'Not joins the verb: nisam, nisi, nije, nismo, niste, nisu',
          'nisam can open a sentence: Nisam student.',
          'A question is the long form + li: Jesi li…? Jeste li…? Jesu li…?',
          'For he, she and it the question is Je li…?',
          'Answer in your own person: Jesam. / Nisam. — about someone else: Jest. / Nije.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Irregular plurals
  // ─────────────────────────────────────────────────────────
  {
    id: 'plural-irregular',
    title: 'People, Children, Brothers: The Irregular Plurals',
    subtitle: 'The handful of plurals that follow no pattern',
    icon: '👨‍👩‍👧',
    level: 'A1',
    duration: '~7 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'The Words You Use Every Day',
        body: 'You can make most plurals from the gender: knjiga → knjige, selo → sela, student → studenti. A few very common nouns do not play along — and they are the words for people, children, family and the body, so you will need them on your first day in Croatia. There are only eight to learn, and two simple rules about how they behave.',
        icon: '👨‍👩‍👧',
      },
      {
        type: 'rule',
        title: 'A Different Word Altogether',
        body: 'Two plurals are not a new ending but a new word, exactly like English person → people and child → children. čovjek (person, man) → ljudi (people). dijete (child) → djeca (children). There is no "čovjeci" and no "dijeti": when you mean more than one, reach for the other word.',
        highlight: 'čovjek → ljudi, dijete → djeca',
      },
      {
        type: 'rule',
        title: 'Djeca, Braća, Gospoda Look Like One Thing',
        body: 'Three plurals end in -a, like a feminine singular noun such as knjiga: djeca (children), braća (brothers, from brat), gospoda (gentlemen, from gospodin). The pointing word in front takes that feminine shape too: ova djeca, ta braća, ona gospoda. But they mean MANY people, so the verb is plural: Djeca su ovdje. Braća su tamo. (In grammar terms they are "collective" nouns — one word for a group.)',
        highlight: 'ova djeca — Djeca su ovdje.',
      },
      {
        type: 'rule',
        title: 'Eyes and Ears',
        body: 'oko (eye) and uho (ear) are neuter in the singular, but their plurals are feminine words of their own: oko → oči, uho → uši. The pointing word is feminine plural: ove oči, te uši. Ovo su oči, a ovo su uši. (oko → oči is the plural for eyes only.)',
        highlight: 'oko → oči, uho → uši',
      },
      {
        type: 'rule',
        title: 'Daughter and Name',
        body: 'kći (daughter) → kćeri: Ana i Petra su kćeri. ime (name) → imena: an -en- appears before the -a. A few neuter nouns ending in -me do this: ime → imena, rame (shoulder) → ramena, vrijeme (time, weather) → vremena. They are regular neuter plurals in -a with a little extra in the middle.',
        highlight: 'ime → imena',
      },
      {
        type: 'table',
        title: 'The Eight to Know',
        headers: ['One', 'Many', 'With "these"', 'Meaning'],
        rows: [
          ['čovjek', 'ljudi', 'ovi ljudi', 'people'],
          ['dijete', 'djeca', 'ova djeca', 'children'],
          ['brat', 'braća', 'ova braća', 'brothers'],
          ['gospodin', 'gospoda', 'ova gospoda', 'gentlemen'],
          ['oko', 'oči', 'ove oči', 'eyes'],
          ['uho', 'uši', 'ove uši', 'ears'],
          ['kći', 'kćeri', 'ove kćeri', 'daughters'],
          ['ime', 'imena', 'ova imena', 'names'],
        ],
      },
      {
        type: 'example',
        title: 'People and Children',
        items: [
          {
            hr: 'Tko su ovi ljudi? — To su studenti.',
            en: 'Who are these people? — They are students.',
            note: 'ljudi takes ovi and su',
          },
          {
            hr: 'Gdje su djeca? — Djeca su tamo.',
            en: 'Where are the children? — The children are over there.',
            note: 'djeca: plural verb su',
          },
          {
            hr: 'Ovo dijete je Marko, a ono dijete je Ivan.',
            en: 'This child is Marko, and that child is Ivan.',
            note: 'one child: dijete, je',
          },
          {
            hr: 'Ova djeca nisu ovdje.',
            en: 'These children are not here.',
            note: 'ova djeca — feminine shape, plural verb',
          },
          {
            hr: 'Ovaj čovjek je Hrvat, a ovi ljudi su studenti.',
            en: 'This man is a Croat, and these people are students.',
            note: 'čovjek for one, ljudi for many',
          },
        ],
      },
      {
        type: 'example',
        title: 'Family and the Body',
        items: [
          {
            hr: 'Ivan i Marko su braća.',
            en: 'Ivan and Marko are brothers.',
            note: 'brat → braća',
          },
          {
            hr: 'Ana i Petra su kćeri, a Luka je sin.',
            en: 'Ana and Petra are the daughters, and Luka is the son.',
            note: 'kći → kćeri',
          },
          {
            hr: 'Tko su ova gospoda? — Ova gospoda su iz Zagreba.',
            en: 'Who are these gentlemen? — These gentlemen are from Zagreb.',
            note: 'gospoda: ova in front, su after',
          },
          {
            hr: 'Ovo su oči, ovo su uši, a ovo je nos.',
            en: 'These are the eyes, these are the ears, and this is the nose.',
            note: 'oči and uši: plural, with su',
          },
          {
            hr: 'Ana, Petra i Maja su imena, a Zagreb je grad.',
            en: 'Ana, Petra and Maja are names, and Zagreb is a city.',
            note: 'ime → imena',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the plural of "dijete" (child)?',
        options: ['dijeti', 'djeca', 'djete', 'dijeta'],
        correct: 1,
        explanation:
          'dijete has a different word for many: djeca. The other three apply ordinary endings to a noun that does not follow them.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence is correct?',
        options: [
          'Djeca je ovdje.',
          'Ovi djeca su ovdje.',
          'Ova djeca su ovdje.',
          'Ova djeca je ovdje.',
        ],
        correct: 2,
        explanation:
          'djeca takes the feminine-looking ova in front but a plural verb: Ova djeca su ovdje. "je" treats the children as one thing, and "ovi" is the masculine plural.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, building a regular plural from čovjek or dijete: "čovjeci", "dijeti" — it is ljudi and djeca. Second, giving djeca or braća a singular verb because they end in -a: "Djeca je ovdje" — the children are many, so Djeca su ovdje. Third, putting a masculine pointing word in front of them: "ovi djeca", "ti braća" — the pointing word is ova djeca, ta braća.',
        highlight: 'Djeca su ovdje',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'What is the plural of "čovjek" (person)?',
            options: ['čovjeci', 'čovjeki', 'ljudi', 'čovjekovi'],
            correct: 2,
            explanation:
              'čovjek has a different word for many: ljudi. The other three force a regular pattern onto it.',
          },
          {
            q: 'Complete: "Ivan i Marko su ___." (brothers)',
            options: ['brati', 'braća', 'bratovi', 'brate'],
            correct: 1,
            explanation:
              'brat → braća. It ends in -a, like a feminine noun, but means several brothers.',
          },
          {
            q: 'Complete: "Ovo su ___." (These are the eyes.)',
            options: ['oka', 'oki', 'okovi', 'oči'],
            correct: 3,
            explanation:
              'oko → oči, a feminine plural of its own. Oka, oki and okovi apply regular endings that this noun does not take.',
          },
          {
            q: 'Which pointing word goes with "braća"?',
            options: ['ova', 'ovi', 'ove', 'ovaj'],
            correct: 0,
            explanation:
              'braća looks like a feminine singular noun, so it takes ova: ova braća. The verb after it is still plural: Ova braća su ovdje.',
          },
          {
            q: 'What is the plural of "ime" (name)?',
            options: ['imi', 'ime', 'imena', 'imeni'],
            correct: 2,
            explanation:
              'ime adds -en- before the neuter plural -a: imena, just like rame → ramena.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Gdje je djeca?', 'Gdje su djeca?', 'Gdje su dijete?', 'Gdje su djece?'],
            correct: 1,
            explanation:
              'djeca means many children, so the verb is su: Gdje su djeca? "Je" treats them as one, dijete is a single child, and djece is not the form after su.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Irregular Plurals — Key Takeaways',
        points: [
          'A different word: čovjek → ljudi, dijete → djeca',
          'djeca, braća, gospoda look feminine (ova djeca) but take su',
          'oko → oči, uho → uši: ove oči, te uši',
          'kći → kćeri, ime → imena (also rame → ramena, vrijeme → vremena)',
          'Learn these eight as words, not as a rule',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Jobs and professions
  // ─────────────────────────────────────────────────────────
  {
    id: 'jobs-professions',
    title: 'Who Does What: Jobs for Men and Women',
    subtitle: 'učitelj or učiteljica — a job word has a gender',
    icon: '👩‍🍳',
    level: 'A1',
    duration: '~7 min',
    color: '#ca8a04',
    bg: '#fefce8',
    slides: [
      {
        type: 'intro',
        title: 'Što si po zanimanju?',
        body: '"What do you do?" is one of the first things a Croatian asks. The answer is a job word, and in Croatian a job word has a gender: a man is a učitelj (teacher), a woman is a učiteljica. This lesson gives you the patterns that make the female form, so you can name most jobs for anyone.',
        icon: '👩‍🍳',
      },
      {
        type: 'rule',
        title: 'No Word for "a"',
        body: 'English says "I am A teacher". Croatian has no word for "a" or "the", so you say the job straight after biti: Ja sam kuhar. (I am a cook.) Ona je liječnica. (She is a doctor.) Adding jedan ("one") is wrong here — it would mean "one cook", as if you were counting. To ask: Što si po zanimanju? (to a friend) or Što ste po zanimanju? (polite) — "What are you by profession?"',
        highlight: 'Ja sam kuhar.',
      },
      {
        type: 'rule',
        title: '-telj and -ač Add -ica',
        body: "Jobs ending in -telj or -ač add -ica for a woman. učitelj → učiteljica (teacher), ravnatelj → ravnateljica (head teacher), vozač → vozačica (driver), prodavač → prodavačica (shop assistant), pjevač → pjevačica (singer). The man's word stays whole and -ica goes on the end.",
        highlight: 'učitelj → učiteljica',
      },
      {
        type: 'rule',
        title: '-ik Becomes -ica',
        body: 'Jobs ending in -ik lose the -ik and take -ica: liječnik → liječnica (doctor), odvjetnik → odvjetnica (lawyer), službenik → službenica (clerk). The k disappears: it is liječnica, never "liječnikica".',
        highlight: 'liječnik → liječnica',
      },
      {
        type: 'rule',
        title: '-ar, -er and the Rest: -ica or -ka',
        body: 'Many other jobs add -ica or -ka, and here you learn the word: kuhar → kuharica (cook), konobar → konobarica (waiter), knjižničar → knjižničarka (librarian), novinar → novinarka (journalist), inženjer → inženjerka (engineer), frizer → frizerka (hairdresser), student → studentica, profesor → profesorica. When you meet a new job word, learn both forms together.',
        highlight: 'novinar → novinarka',
      },
      {
        type: 'table',
        title: 'Man, Woman, Many',
        headers: ['Man', 'Woman', 'Men or a mixed group', 'Women'],
        rows: [
          ['učitelj', 'učiteljica', 'učitelji', 'učiteljice'],
          ['vozač', 'vozačica', 'vozači', 'vozačice'],
          ['kuhar', 'kuharica', 'kuhari', 'kuharice'],
          ['konobar', 'konobarica', 'konobari', 'konobarice'],
          ['novinar', 'novinarka', 'novinari', 'novinarke'],
          ['student', 'studentica', 'studenti', 'studentice'],
          ['liječnik', 'liječnica', '—', 'liječnice'],
        ],
      },
      {
        type: 'rule',
        title: 'Groups: the Plural',
        body: 'Job words make their plurals by the rules you already know. A female job word ends in -a, so it takes -e: učiteljice, konobarice, novinarke. A male job word takes -i: učitelji, kuhari, vozači. A group of men and women together uses the MALE plural: Ana i Marko su studenti. (The plural of liječnik changes its k; you will meet that rule a little later.)',
        highlight: 'Ana i Marko su studenti.',
      },
      {
        type: 'example',
        title: 'Asking and Answering',
        items: [
          {
            hr: 'Što si po zanimanju? — Ja sam kuhar.',
            en: 'What do you do? — I am a cook.',
            note: 'no word for "a"',
          },
          {
            hr: 'Što ste po zanimanju? — Ja sam liječnica.',
            en: 'What do you do (polite)? — I am a doctor.',
            note: 'a woman: liječnica',
          },
          {
            hr: 'Marko je konobar, a Ana je konobarica.',
            en: 'Marko is a waiter, and Ana is a waitress.',
            note: 'konobar → konobarica',
          },
          {
            hr: 'Je li Petra novinarka? — Nije, Petra je profesorica.',
            en: 'Is Petra a journalist? — No, Petra is a teacher.',
            note: 'profesor → profesorica',
          },
          {
            hr: 'Nisam student, ja sam inženjer.',
            en: 'I am not a student, I am an engineer.',
            note: 'nisam + a job',
          },
        ],
      },
      {
        type: 'example',
        title: 'Men, Women and Groups',
        items: [
          {
            hr: 'Ivana je učiteljica, a Josip je ravnatelj.',
            en: 'Ivana is a teacher, and Josip is the head teacher.',
            note: '-telj for a man, -teljica for a woman',
          },
          {
            hr: 'Oni su vozači, a one su prodavačice.',
            en: 'They (men) are drivers, and they (women) are shop assistants.',
            note: 'oni + male plural, one + female plural',
          },
          {
            hr: 'Ana i Ivan su učitelji.',
            en: 'Ana and Ivan are teachers.',
            note: 'a mixed group takes the male plural',
          },
          {
            hr: 'Tko je ovaj čovjek? — To je odvjetnik.',
            en: 'Who is this man? — That is a lawyer.',
            note: 'odvjetnik → odvjetnica for a woman',
          },
          {
            hr: 'Ja sam inženjerka, a ona je frizerka.',
            en: 'I am an engineer, and she is a hairdresser.',
            note: 'two female jobs in -ka',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Ana is a teacher. Which sentence is right?',
        options: [
          'Ana je učitelji.',
          'Ana je učiteljica.',
          'Ana je jedna učiteljica.',
          'Ana je učiteljka.',
        ],
        correct: 1,
        explanation:
          'A woman is a učiteljica: -telj adds -ica. "Učitelji" is several teachers, "jedna" would count her, and "učiteljka" is not the form.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What is the female form of "liječnik" (doctor)?',
        options: ['liječnikica', 'liječnika', 'liječnica', 'liječnikka'],
        correct: 2,
        explanation:
          'Jobs in -ik drop the -ik and take -ica: liječnica. Keeping the k ("liječnikica") is the commonest slip, and liječnika is a different form of the man\'s word.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors come up again and again. First, forgetting the female form: for a woman the everyday word is the -ica one, Ana je učiteljica (the man\'s word for a woman is heard mainly in official titles). Second, translating "a" as jedan: "Ja sam jedan kuhar" — just Ja sam kuhar. Third, keeping the k of -ik: "liječnikica" — the k goes, liječnica.',
        highlight: 'Ana je učiteljica',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Petra je ___." (Petra is a waitress — konobar.)',
            options: ['konobar', 'konobarka', 'konobari', 'konobarica'],
            correct: 3,
            explanation:
              'konobar → konobarica. The man\'s word, the non-standard "konobarka" and the plural konobari all miss.',
          },
          {
            q: 'How do you say "I am a cook" (a man)?',
            options: ['Ja sam jedan kuhar.', 'Ja sam kuhar.', 'Sam kuhar.', 'Ja kuhar.'],
            correct: 1,
            explanation:
              'Croatian has no word for "a": Ja sam kuhar. jedan would count, sam cannot open a sentence, and biti cannot be left out.',
          },
          {
            q: 'What is the female form of "vozač" (driver)?',
            options: ['vozačica', 'vozačka', 'vozača', 'vozačice'],
            correct: 0,
            explanation: '-ač adds -ica: vozačica. vozačice is the plural, for several women.',
          },
          {
            q: 'Ana and Marko are both students. Which is right?',
            options: [
              'Ana i Marko su studentice.',
              'Ana i Marko je studenti.',
              'Ana i Marko su studenti.',
              'Ana i Marko su student.',
            ],
            correct: 2,
            explanation:
              'A mixed group uses the male plural, with su: studenti. studentice is women only, je is singular, and student is one person.',
          },
          {
            q: 'How do you ask a stranger politely what they do?',
            options: [
              'Što si po zanimanju?',
              'Što je po zanimanju?',
              'Što su po zanimanju?',
              'Što ste po zanimanju?',
            ],
            correct: 3,
            explanation:
              'Polite address uses Vi, so the verb is ste. si is for a friend, je and su ask about other people.',
          },
          {
            q: 'What is the female form of "novinar" (journalist)?',
            options: ['novinarica', 'novinarka', 'novinara', 'novinarkinja'],
            correct: 1,
            explanation:
              'novinar → novinarka. Not every -ar job takes -ica, which is why the form is learned with the word.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Jobs — Key Takeaways',
        points: [
          'No word for "a": Ja sam kuhar.',
          '-telj, -ač + -ica: učiteljica, vozačica',
          '-ik → -ica: liječnik → liječnica',
          'Others take -ica or -ka: kuharica, novinarka, inženjerka',
          'A mixed group uses the male plural: Ana i Marko su studenti.',
          'Ask: Što si po zanimanju? / Što ste po zanimanju?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Nationalities
  // ─────────────────────────────────────────────────────────
  {
    id: 'nationalities',
    title: 'Hrvat, Hrvatica, hrvatski',
    subtitle: 'Nationalities for men, women and groups — and the languages',
    icon: '🌍',
    level: 'A1',
    duration: '~7 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'Who You Are, What You Speak',
        body: 'You can say where you are from: Iz Kanade sam. Now you will say who you are — a Canadian man or a Canadian woman — and what language you speak. Like job words, a nationality has a male and a female form, and the language is a separate word with a small letter.',
        icon: '🌍',
      },
      {
        type: 'rule',
        title: 'Man, Woman, Group',
        body: 'Every nationality has four forms. Hrvat (a Croatian man), Hrvatica (a Croatian woman), Hrvati (Croatian men, or a mixed group), Hrvatice (Croatian women). A mixed group uses the male plural, exactly as with jobs: Ana i Ivan su Hrvati. Say Ja sam Hrvat or Ja sam Hrvatica — never "Ja sam Hrvatska", which is the country.',
        highlight: 'Hrvat, Hrvatica, Hrvati, Hrvatice',
      },
      {
        type: 'rule',
        title: 'Three Female Endings',
        body: 'The female form ends in -ica, -ka or -kinja, and which one is part of the word. -ica: Hrvatica, Mađarica, Njemica (German woman — note Nijemac loses its i). -ka: Talijanka, Amerikanka, Kanađanka, Slovenka, Španjolka, Austrijanka. -kinja: Engleskinja, Francuskinja, Irkinja. Learn each nationality as a pair: Englez / Engleskinja.',
        highlight: '-ica, -ka, -kinja',
      },
      {
        type: 'table',
        title: 'Nationalities',
        headers: ['Country', 'Man', 'Woman', 'Language'],
        rows: [
          ['Hrvatska', 'Hrvat', 'Hrvatica', 'hrvatski'],
          ['Italija', 'Talijan', 'Talijanka', 'talijanski'],
          ['Engleska', 'Englez', 'Engleskinja', 'engleski'],
          ['Francuska', 'Francuz', 'Francuskinja', 'francuski'],
          ['Njemačka', 'Nijemac', 'Njemica', 'njemački'],
          ['Mađarska', 'Mađar', 'Mađarica', 'mađarski'],
          ['Slovenija', 'Slovenac', 'Slovenka', 'slovenski'],
          ['Amerika', 'Amerikanac', 'Amerikanka', 'engleski'],
          ['Kanada', 'Kanađanin', 'Kanađanka', 'engleski / francuski'],
        ],
      },
      {
        type: 'rule',
        title: 'Languages: -ski and a Small Letter',
        body: 'The name of a language is a describing word ending in -ski (or -čki): hrvatski, engleski, talijanski, francuski, mađarski, njemački. It has a SMALL first letter, while the person has a capital: Hrvat, but hrvatski. Govorim hrvatski. Govorim engleski i malo hrvatski.',
        highlight: 'Hrvat, but hrvatski',
      },
      {
        type: 'rule',
        title: 'Plurals for Groups',
        body: 'Use the plural rules you know. Female forms in -a take -e: Hrvatice, Talijanke, Engleskinje, Njemice. Male forms ending in a consonant take -i: Hrvati, Talijani, Englezi, Francuzi, Mađari. Kanađanin drops its -in in the plural: Kanađani. (Male forms in -ac, like Amerikanac, change in the plural too; that comes in a later lesson.)',
        highlight: 'Kanađanin → Kanađani',
      },
      {
        type: 'rule',
        title: 'People From a Town: -anin and -čanin',
        body: 'A town or city gives a word for the people who live there, built the same way as Kanađanin. Many add -anin for a man and -anka for a woman: Beč (Vienna) → Bečanin, Bečanka; Zadar → Zadranin, Zadranka. Many others add -čanin and -čanka: Zagreb → Zagrepčanin, Zagrepčanka; Osijek → Osječanin, Osječanka; Karlovac → Karlovčanin. Before these endings the last sound of the town often changes: t becomes ć (Split → Splićanin, Splićanka), k and c become č (Rijeka → Riječanin, Karlovac → Karlovčanin), and the b of Zagreb is said and written p before č (Zagrepčanin). In the plural -in drops, as in Kanađani: Splićani, Zagrepčani, Riječani.',
        highlight: 'Split → Splićanin, Splićanka',
      },
      {
        type: 'table',
        title: 'Towns and Their People',
        headers: ['Town', 'Man', 'Woman', 'People (plural)'],
        rows: [
          ['Zagreb', 'Zagrepčanin', 'Zagrepčanka', 'Zagrepčani'],
          ['Split', 'Splićanin', 'Splićanka', 'Splićani'],
          ['Rijeka', 'Riječanin', 'Riječanka', 'Riječani'],
          ['Osijek', 'Osječanin', 'Osječanka', 'Osječani'],
          ['Zadar', 'Zadranin', 'Zadranka', 'Zadrani'],
          ['Beč', 'Bečanin', 'Bečanka', 'Bečani'],
        ],
      },
      {
        type: 'example',
        title: 'Who Is Who',
        items: [
          {
            hr: 'Odakle si? — Iz Kanade sam. Ja sam Kanađanka.',
            en: 'Where are you from? — I am from Canada. I am Canadian.',
            note: 'a woman: Kanađanka',
          },
          {
            hr: 'Marko je Hrvat, a Ana je Talijanka.',
            en: 'Marko is Croatian, and Ana is Italian.',
            note: 'a man and a woman, two nationalities',
          },
          {
            hr: 'Jesi li ti Amerikanac? — Nisam, ja sam Englez.',
            en: 'Are you American? — No, I am English.',
            note: 'nisam + a nationality',
          },
          {
            hr: 'Je li Petra Mađarica? — Nije, ona je Slovenka.',
            en: 'Is Petra Hungarian? — No, she is Slovenian.',
            note: 'Mađarica takes -ica, Slovenka takes -ka',
          },
          {
            hr: 'Pierre je Francuz, a Marie je Francuskinja.',
            en: 'Pierre is French, and Marie is French.',
            note: 'one English word, two Croatian ones',
          },
        ],
      },
      {
        type: 'example',
        title: 'Groups and Languages',
        items: [
          {
            hr: 'Ivan i Ana su Hrvati iz Zagreba.',
            en: 'Ivan and Ana are Croatians from Zagreb.',
            note: 'a mixed group: male plural',
          },
          {
            hr: 'One su Njemice, a oni su Talijani.',
            en: 'They (women) are German, and they (men) are Italian.',
            note: 'Njemice, Talijani',
          },
          {
            hr: 'Ja sam Hrvat iz Australije, ali govorim engleski.',
            en: 'I am a Croat from Australia, but I speak English.',
            note: 'a capital for the person, a small letter for the language',
          },
          {
            hr: 'Govorim hrvatski, engleski i malo talijanski.',
            en: 'I speak Croatian, English and a little Italian.',
            note: 'three languages, all small letters',
          },
          {
            hr: 'Kanađani su ovdje, a Engleskinje su tamo.',
            en: 'The Canadians are here, and the English women are over there.',
            note: 'Kanađanin → Kanađani, Engleskinja → Engleskinje',
          },
        ],
      },
      {
        type: 'example',
        title: 'People From Towns',
        items: [
          {
            hr: 'Ivan je Zagrepčanin, a Petra je Splićanka.',
            en: 'Ivan is from Zagreb, and Petra is from Split.',
            note: 'b becomes p before č; t becomes ć',
          },
          {
            hr: 'Jesi li ti Riječanin? — Nisam, ja sam Osječanin.',
            en: 'Are you from Rijeka? — No, I am from Osijek.',
            note: 'k becomes č in both: Rijeka, Osijek',
          },
          {
            hr: 'Marija je Zadranka, a Luka je Bečanin.',
            en: 'Marija is from Zadar, and Luka is from Vienna.',
            note: '-anka for a woman, -anin for a man',
          },
          {
            hr: 'Oni su Splićani, a one su Zagrepčanke.',
            en: 'They (men) are from Split, and they (women) are from Zagreb.',
            note: '-in drops in the plural; -ka takes -e',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Ana is from Croatia. Which sentence is right?',
        options: ['Ana je Hrvatska.', 'Ana je hrvatski.', 'Ana je Hrvat.', 'Ana je Hrvatica.'],
        correct: 3,
        explanation:
          "A Croatian woman is a Hrvatica. Hrvatska is the country, hrvatski the language, and Hrvat the man's word.",
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is spelled correctly?',
        options: ['Govorim Engleski.', 'Govorim engleski.', 'Govorim englez.', 'Govorim Engleska.'],
        correct: 1,
        explanation:
          'A language has a small letter and ends in -ski: engleski. Englez is an Englishman and Engleska is the country.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, a woman using the man\'s word: "Ja sam Hrvat" — a woman says Ja sam Hrvatica. Second, using the country or the language for a person: "Ja sam Hrvatska", "Ja sam hrvatski". Third, a capital letter on the language the English way: "Govorim Hrvatski" — it is hrvatski.',
        highlight: 'Ja sam Hrvatica',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Marie je ___." (Marie is French.)',
            options: ['Francuz', 'Francuskinja', 'francuski', 'Francuska'],
            correct: 1,
            explanation:
              'A French woman is a Francuskinja. Francuz is the man, francuski the language, Francuska the country.',
          },
          {
            q: 'Complete: "Ivan i Ana su ___." (Croatians — a mixed group)',
            options: ['Hrvatice', 'Hrvat', 'Hrvatski', 'Hrvati'],
            correct: 3,
            explanation:
              'A mixed group uses the male plural: Hrvati. Hrvatice is women only, Hrvat is one man, and hrvatski is the language.',
          },
          {
            q: 'What is the female form of "Talijan" (Italian)?',
            options: ['Talijanka', 'Talijanica', 'Talijankinja', 'Talijana'],
            correct: 0,
            explanation:
              'Talijan → Talijanka, with -ka. The female ending is part of the word, so it is learned in pairs.',
          },
          {
            q: 'Which sentence is spelled correctly?',
            options: [
              'Ja sam hrvat i govorim hrvatski.',
              'Ja sam Hrvat i govorim Hrvatski.',
              'Ja sam Hrvat i govorim hrvatski.',
              'Ja sam hrvat i govorim Hrvatski.',
            ],
            correct: 2,
            explanation: 'The person has a capital, the language does not: Hrvat, hrvatski.',
          },
          {
            q: 'What is the plural of "Kanađanin" (a Canadian man)?',
            options: ['Kanađanini', 'Kanađani', 'Kanađanke', 'Kanađanina'],
            correct: 1,
            explanation:
              'Kanađanin drops -in in the plural: Kanađani. Kanađanke are Canadian women.',
          },
          {
            q: 'A German woman says:',
            options: ['Ja sam Nijemac.', 'Ja sam Njemačka.', 'Ja sam njemački.', 'Ja sam Njemica.'],
            correct: 3,
            explanation:
              'A German woman is a Njemica. Nijemac is the man, Njemačka the country, njemački the language.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Nationalities — Key Takeaways',
        points: [
          'Four forms: Hrvat, Hrvatica, Hrvati, Hrvatice',
          'Female endings -ica, -ka, -kinja — learn each pair',
          'A mixed group uses the male plural: Ana i Ivan su Hrvati.',
          'Languages end in -ski and take a small letter: hrvatski',
          'Never the country or the language for a person',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Numbers 11–1000
  // ─────────────────────────────────────────────────────────
  {
    id: 'numbers-11-1000',
    title: 'From Eleven to a Thousand',
    subtitle: '-naest, -deset, -sto: three patterns build every number',
    icon: '🔢',
    level: 'A1',
    duration: '~7 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Three Patterns',
        body: 'You know jedan to deset. Every number up to a thousand is built from those ten with three endings: -naest for the teens, -deset for the tens, -sto for the hundreds. Learn the three patterns and the four or five spellings that follow the sound, and you can say any price, room or bus number.',
        icon: '🔢',
      },
      {
        type: 'rule',
        title: '11 to 19: -naest',
        body: '-naest means "on ten", so jedanaest is "one on ten". jedanaest (11), dvanaest (12), trinaest (13), četrnaest (14), petnaest (15), šesnaest (16), sedamnaest (17), osamnaest (18), devetnaest (19). Two are shortened: četiri becomes četr- (četrnaest), and šest loses its t (šesnaest), because that is how they are said.',
        highlight: 'četrnaest, šesnaest',
      },
      {
        type: 'rule',
        title: 'The Tens: -deset',
        body: 'deset is "ten", so the tens are "two tens", "three tens": dvadeset (20), trideset (30), četrdeset (40), pedeset (50), šezdeset (60), sedamdeset (70), osamdeset (80), devedeset (90). Watch three spellings that follow the sound: pet loses its t (pedeset), šest becomes šez- (šezdeset), and devet becomes deve- (devedeset).',
        highlight: 'pedeset, šezdeset, devedeset',
      },
      {
        type: 'rule',
        title: 'Between the Tens',
        body: 'Put the ten first and the unit after it, with or without i (and): 21 is dvadeset jedan or dvadeset i jedan; 35 is trideset pet or trideset i pet; 99 is devedeset devet. Both forms are correct Croatian; in quick speech the i is often dropped.',
        highlight: 'dvadeset i jedan',
      },
      {
        type: 'rule',
        title: 'Hundreds and a Thousand',
        body: 'sto is a hundred. The hundreds join the number to -sto in one word: dvjesto (200), tristo (300), četiristo (400), petsto (500), šesto (600), sedamsto (700), osamsto (800), devetsto (900). A thousand is tisuća. Build a big number from left to right: 345 = tristo četrdeset pet; 708 = sedamsto osam; 999 = devetsto devedeset devet.',
        highlight: 'tristo četrdeset pet',
      },
      {
        type: 'rule',
        title: 'Beyond a Thousand: milijun, milijarda',
        body: 'The big numbers are words of their own. tisuća is a thousand (1 000), milijun is a million (1 000 000), and milijarda is a thousand million — what English now calls a billion (1 000 000 000). bilijun is a million million (1 000 000 000 000). A Croatian "bilijun" is therefore not an English "billion": an English billion is a milijarda. Croatian writes big numbers with a space or a dot between groups of three: 1 000 000 or 1.000.000.',
        highlight: 'billion = milijarda',
      },
      {
        type: 'table',
        title: 'The Building Blocks',
        headers: ['Teens', 'Tens', 'Hundreds'],
        rows: [
          ['11 jedanaest', '20 dvadeset', '100 sto'],
          ['12 dvanaest', '30 trideset', '200 dvjesto'],
          ['13 trinaest', '40 četrdeset', '300 tristo'],
          ['14 četrnaest', '50 pedeset', '400 četiristo'],
          ['15 petnaest', '60 šezdeset', '500 petsto'],
          ['16 šesnaest', '70 sedamdeset', '600 šesto'],
          ['17 sedamnaest', '80 osamdeset', '700 sedamsto'],
          ['18 osamnaest', '90 devedeset', '800 osamsto'],
          ['19 devetnaest', '—', '900 devetsto · 1000 tisuća'],
        ],
      },
      {
        type: 'example',
        title: 'Numbers Around Town',
        items: [
          {
            hr: 'Ovo je tramvaj broj sedamnaest.',
            en: 'This is tram number seventeen.',
            note: 'sedam + naest',
          },
          {
            hr: 'Je li ovo soba broj devetsto? — Nije, ovo je soba broj devedeset.',
            en: 'Is this room number nine hundred? — No, this is room number ninety.',
            note: 'devetsto (900) and devedeset (90) — do not mix them',
          },
          {
            hr: 'Kuća broj osamdeset osam je tamo.',
            en: 'House number eighty-eight is over there.',
            note: 'the ten first, then the unit',
          },
          {
            hr: 'Autobus broj trinaest je ovdje.',
            en: 'Bus number thirteen is here.',
            note: 'tri + naest',
          },
          {
            hr: 'Soba broj dvjesto četrnaest je ovdje, a soba broj dvjesto petnaest je tamo.',
            en: 'Room 214 is here, and room 215 is over there.',
            note: 'dvjesto — with -je-',
          },
        ],
      },
      {
        type: 'example',
        title: 'Counting and Adding',
        items: [
          {
            hr: 'Koliko je jedanaest i devet? — Dvadeset.',
            en: 'How much is eleven and nine? — Twenty.',
            note: 'i = and, plus',
          },
          {
            hr: 'Pedeset i pedeset je sto.',
            en: 'Fifty and fifty is a hundred.',
            note: 'pedeset — no t',
          },
          {
            hr: 'Šezdeset, sedamdeset, osamdeset, devedeset, sto.',
            en: 'Sixty, seventy, eighty, ninety, a hundred.',
            note: 'count by tens',
          },
          {
            hr: 'Sto, dvjesto, tristo, četiristo, petsto.',
            en: 'A hundred, two hundred, three hundred, four hundred, five hundred.',
            note: 'one word each',
          },
          {
            hr: 'Koliko je petsto i petsto? — Tisuća.',
            en: 'How much is five hundred and five hundred? — A thousand.',
            note: 'tisuća = 1000',
          },
          {
            hr: 'Je li ovo milijun? — Nije, ovo je milijarda.',
            en: 'Is this a million? — No, this is a billion.',
            note: 'milijun = 1 000 000, milijarda = 1 000 000 000',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you write 50?',
        options: ['petdeset', 'pedeset', 'petnaest', 'pedesat'],
        correct: 1,
        explanation:
          'pet loses its t before -deset: pedeset. petnaest is 15, and the other two are misspellings.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What is "tristo četrdeset pet"?',
        options: ['3045', '334', '345', '435'],
        correct: 2,
        explanation:
          'tristo = 300, četrdeset = 40, pet = 5: 345. Croatian builds numbers left to right, like English.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three slips come up again and again. First, writing pet and šest whole before -deset and -naest: "petdeset", "šestnaest" — it is pedeset, šesnaest. Second, writing četiri whole in 14: "četirinaest" — it is četrnaest. Third, mixing 90 and 900: devedeset is ninety, devetsto is nine hundred. Say each one aloud and the spelling follows.',
        highlight: 'pedeset, šesnaest',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'How do you write 14?',
            options: ['četirinaest', 'četrnaest', 'četrdeset', 'četiristo'],
            correct: 1,
            explanation:
              'četiri shortens to četr- before -naest: četrnaest. četrdeset is 40 and četiristo is 400.',
          },
          {
            q: 'How do you write 60?',
            options: ['šestdeset', 'šesnaest', 'šesto', 'šezdeset'],
            correct: 3,
            explanation:
              'šest becomes šez- before -deset: šezdeset. šesnaest is 16 and šesto is 600.',
          },
          {
            q: 'What is "devetsto"?',
            options: ['900', '90', '19', '9000'],
            correct: 0,
            explanation:
              '-sto makes hundreds: devetsto is 900. Ninety is devedeset and 19 is devetnaest.',
          },
          {
            q: 'How do you say 200?',
            options: ['dvasto', 'dvjesto', 'dvadeset', 'dvanaest'],
            correct: 1,
            explanation: 'Two hundred is dvjesto. dvadeset is 20 and dvanaest is 12.',
          },
          {
            q: 'Which says 75?',
            options: ['sedamnaest pet', 'pet sedamdeset', 'sedamdeset pet', 'sedamsto pet'],
            correct: 2,
            explanation: 'The ten comes first, then the unit: sedamdeset pet. sedamsto pet is 705.',
          },
          {
            q: 'How do you say 1000?',
            options: ['desetsto', 'stotina', 'deset sto', 'tisuća'],
            correct: 3,
            explanation: 'A thousand is tisuća. There is no "desetsto".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Numbers 11–1000 — Key Takeaways',
        points: [
          'Teens: -naest — četrnaest, šesnaest',
          'Tens: -deset — pedeset, šezdeset, devedeset',
          'Between: ten first, unit after, with or without i',
          'Hundreds: one word with -sto — dvjesto, tristo, šesto',
          'A thousand: tisuća',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'sounds-palatals': {
    worked: [
      {
        title: 'Spell a Word You Hear',
        problem: 'You hear "kuća" (house). Which letter is in the middle?',
        en: 'Spell the word for house.',
        steps: [
          { label: 'Listen to the sound', text: 'The middle sound is a "ch", so it is č or ć.' },
          {
            label: 'Hard or soft?',
            text: 'It is the soft one: the tongue stays low, like the end of Babić.',
          },
          { label: 'Write it', text: 'Soft ch is ć: k-u-ć-a.' },
        ],
        answer: 'kuća',
      },
      {
        title: 'Count the Letters',
        problem: 'How many letters does "knjiga" (book) have?',
        en: 'Count the letters in the word for book.',
        steps: [
          { label: 'Find the pair', text: 'n and j stand together.' },
          { label: 'One letter', text: 'nj is ONE letter of the alphabet and one sound.' },
          { label: 'Count', text: 'k · nj · i · g · a — five letters.' },
        ],
        answer: 'five: k-nj-i-g-a',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which letter is the "church" sound?',
          options: ['ć', 'đ', 'č', 'ž'],
          correct: 2,
          hint: 'The hard one, with the tongue raised.',
          explanation: 'č is the hard "church" sound; ć is its soft neighbour.',
        },
        {
          q: 'Which letter is the voiced partner of ć?',
          options: ['đ', 'dž', 'č', 'lj'],
          correct: 0,
          hint: 'The soft pair: the quiet one and the voiced one.',
          explanation: 'ć and đ are the soft pair: kuća, đak.',
        },
        {
          q: 'How many sounds is "lj" in "ljeto"?',
          options: ['two', 'three', 'none', 'one'],
          correct: 3,
          hint: 'Like the middle of "million", said quickly.',
          explanation: 'lj is one letter and one sound.',
        },
        {
          q: 'Which word means "night"?',
          options: ['noč', 'noć', 'nođ', 'noj'],
          correct: 1,
          hint: 'It ends in the soft sound, the one in Babić.',
          explanation: 'noć ends in the soft ć.',
        },
        {
          q: 'Which word is "pocket"?',
          options: ['đep', 'čep', 'džep', 'žep'],
          correct: 2,
          hint: 'It starts with the "jam" sound.',
          explanation: 'džep starts with dž, the voiced partner of č.',
        },
        {
          q: 'You hear something like "grat". How is "city" written?',
          options: ['grat', 'grad', 'grač', 'gratt'],
          correct: 1,
          hint: 'A final consonant can sound quieter than it is spelled.',
          explanation: 'grad — the spelling keeps the d.',
        },
        {
          type: 'type',
          q: 'Type the word for "house" (k-u-?-a): ____',
          answer: 'kuća',
          hint: 'The middle letter is the soft one.',
          explanation: 'kuća, with ć. Without the hook it is a different word.',
        },
        {
          type: 'type',
          q: 'Type the word for "tea" (three letters, starts with the "church" sound): ____',
          answer: 'čaj',
          hint: 'The hard one, then a, then the y-sound.',
          explanation: 'čaj.',
        },
        {
          type: 'type',
          q: 'Type the word for "pupil" (starts with the voiced soft sound): ____',
          answer: 'đak',
          hint: 'The partner of ć, then a, then k.',
          explanation: 'đak — never "djak".',
        },
        {
          type: 'type',
          q: 'Type the word for "summer" (four letters): ____',
          answer: 'ljeto',
          hint: 'It starts with the "million" sound, which is one letter.',
          explanation: 'ljeto: lj-e-t-o.',
        },
        {
          q: 'Which word has two different "ch" sounds?',
          options: ['Kovačić', 'Babić', 'čaša', 'kuća'],
          correct: 0,
          hint: 'A family name with a hard one and then a soft one.',
          explanation: 'Ko-va-čić: č then ć.',
        },
        {
          q: 'Which word is spelled correctly?',
          options: ['knjiga', 'kniga', 'knyiga', 'knija'],
          correct: 0,
          hint: 'The "ny" sound is written with two letters that count as one.',
          explanation: 'knjiga, with nj.',
        },
      ],
    },
    checkB: [
      {
        q: 'How is "luck" spelled?',
        options: ['sreča', 'sreca', 'sređa', 'sreća'],
        correct: 3,
        explanation: 'sreća has the soft ć.',
      },
      {
        q: 'Which pair is the HARD pair?',
        options: ['ć and đ', 'č and dž', 'lj and nj', 'š and ž'],
        correct: 1,
        explanation: 'č (church) and dž (jam) are the hard pair.',
      },
      {
        q: 'How many letters are in "konj" (horse)?',
        options: ['three', 'four', 'five', 'two'],
        correct: 0,
        explanation: 'k · o · nj — nj is one letter.',
      },
      {
        q: 'Which word is "birthday"?',
        options: ['rodjendan', 'roćendan', 'rođendan', 'rodžendan'],
        correct: 2,
        explanation: 'rođendan, with đ.',
      },
      {
        q: 'Which word starts with the "jam" sound?',
        options: ['džem', 'čaj', 'đak', 'ćevapi'],
        correct: 0,
        explanation: 'džem (jam) starts with dž.',
      },
      {
        q: 'What happens if you write "kuca" instead of "kuća"?',
        options: [
          'Nothing — hooks are optional',
          'It becomes a different word',
          'It becomes a question',
          'It becomes polite',
        ],
        correct: 1,
        explanation: 'kuca means "he knocks". The hook is part of the word.',
      },
    ],
    vocab: [
      ['čaj', 'tea', 'čaj i kava'],
      ['čaša', 'glass', 'čaša i šalica'],
      ['ključ', 'key', 'ključ i džep'],
      ['kuća', 'house', 'kuća i stan'],
      ['noć', 'night', 'dan i noć'],
      ['džep', 'pocket', 'džep i ključ'],
      ['đak', 'pupil (school)', 'đak i učitelj'],
      ['ljeto', 'summer', 'ljeto i zima'],
      ['knjiga', 'book', 'knjiga i olovka'],
      ['prijatelj', 'friend', 'prijatelj i prijateljica'],
    ],
  },

  'biti-questions-negation': {
    worked: [
      {
        title: 'Saying "Not"',
        problem: 'Say: Ana is not here.',
        en: 'Say that Ana is not here.',
        steps: [
          { label: 'Start from yes', text: 'Ana je ovdje — Ana is here.' },
          { label: 'Join ni- to the verb', text: 'je becomes nije, one word.' },
          { label: 'Put it in', text: 'Ana nije ovdje.' },
        ],
        answer: 'Ana nije ovdje.',
      },
      {
        title: 'Asking a Question',
        problem: 'Ask a friend: Are you a student?',
        en: 'Ask a friend whether they are a student.',
        steps: [
          { label: 'The long form', text: 'For ti the long form of biti is jesi.' },
          { label: 'li after it', text: 'Put jesi first and li straight after: Jesi li.' },
          { label: 'The rest', text: 'Add ti and the noun: Jesi li ti student?' },
        ],
        answer: 'Jesi li ti student?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"I am not" is:',
          options: ['ne sam', 'nije', 'nisam', 'nisi'],
          correct: 2,
          hint: 'ni- joins the "I" form of biti.',
          explanation: 'ni + sam = nisam.',
        },
        {
          q: '"We are not" is:',
          options: ['nismo', 'niste', 'nisu', 'ne smo'],
          correct: 0,
          hint: 'ni- joins smo.',
          explanation: 'ni + smo = nismo.',
        },
        {
          q: 'Ask: Are they here?',
          options: [
            'Su li oni ovdje?',
            'Jesu li oni ovdje?',
            'Je li oni ovdje?',
            'Li su oni ovdje?',
          ],
          correct: 1,
          hint: 'The long form of su, first, with li after it.',
          explanation: 'Jesu li oni ovdje?',
        },
        {
          q: 'Ask: Is Marko at home?',
          options: [
            'Jesi li Marko doma?',
            'Jesmo li Marko doma?',
            'Jesu li Marko doma?',
            'Je li Marko doma?',
          ],
          correct: 3,
          hint: 'For he, she and it the question is the one exception.',
          explanation: 'Je li Marko doma?',
        },
        {
          q: '"Jeste li Vi profesor?" — you are. Answer:',
          options: ['Jeste.', 'Jesam.', 'Jesmo.', 'Jest.'],
          correct: 1,
          hint: 'Answer about yourself.',
          explanation: 'Jesam. — the "I" form.',
        },
        {
          q: '"Je li Ana ovdje?" — she is not. Answer:',
          options: ['Nisam.', 'Nisi.', 'Nije.', 'Nisu.'],
          correct: 2,
          hint: 'You are talking about her, not about yourself.',
          explanation: 'Nije. — "she is not".',
        },
        {
          type: 'type',
          q: 'Oni ____ u Zagrebu. (They are not in Zagreb.)',
          answer: 'nisu',
          hint: 'ni- joins su.',
          explanation: 'Oni nisu u Zagrebu.',
        },
        {
          type: 'type',
          q: '____ student. (I am not a student.)',
          answer: 'Nisam',
          hint: 'The negative of sam can open the sentence.',
          explanation: 'Nisam student.',
        },
        {
          type: 'type',
          q: '____ li ti Ana? (Are you Ana?)',
          answer: 'Jesi',
          hint: 'The long form of si.',
          explanation: 'Jesi li ti Ana?',
        },
        {
          type: 'type',
          q: 'Vi ____ ovdje. (You are not here.)',
          answer: 'niste',
          hint: 'ni- joins ste.',
          explanation: 'Vi niste ovdje.',
        },
        {
          q: 'Which sentence is correct?',
          options: ['Ne je ovdje.', 'Nije ovdje.', 'Je ne ovdje.', 'Ne ovdje je.'],
          correct: 1,
          hint: 'The negative is one word, and it can come first.',
          explanation: 'Nije ovdje. — "He/she is not here."',
        },
        {
          q: 'Ask a group of friends: Are you here?',
          options: ['Jesi li ovdje?', 'Jesmo li ovdje?', 'Jesu li ovdje?', 'Jeste li ovdje?'],
          correct: 3,
          hint: 'You (plural) is vi.',
          explanation: 'Jeste li ovdje? — vi, for more than one person.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ja ___ iz Splita." (I am not from Split.)',
        options: ['nije', 'nisam', 'ne sam', 'nisi'],
        correct: 1,
        explanation: 'nisam — "I am not".',
      },
      {
        q: 'Ask: Are you (polite) Mrs Horvat?',
        options: [
          'Jesi li Vi gospođa Horvat?',
          'Je li Vi gospođa Horvat?',
          'Jeste li Vi gospođa Horvat?',
          'Ste li Vi gospođa Horvat?',
        ],
        correct: 2,
        explanation: 'Vi takes the long form jeste, then li.',
      },
      {
        q: '"Jesi li doma?" — you are not. Answer:',
        options: ['Nisam.', 'Nisi.', 'Nije.', 'Jesam.'],
        correct: 0,
        explanation: 'Nisam. — about yourself.',
      },
      {
        q: 'Complete: "Mi ___ u Zagrebu." (We are not in Zagreb.)',
        options: ['nisu', 'niste', 'nije', 'nismo'],
        correct: 3,
        explanation: 'nismo — "we are not".',
      },
      {
        q: 'Which question is correct?',
        options: [
          'Je li Ivan ovdje?',
          'Li je Ivan ovdje?',
          'Jesmo li Ivan ovdje?',
          'Je Ivan li ovdje?',
        ],
        correct: 0,
        explanation: 'Je li comes first, li straight after the verb.',
      },
      {
        q: '"Je li Petra u Rijeci?" — she is. Answer:',
        options: ['Jesam.', 'Jest.', 'Jesi.', 'Jesu.'],
        correct: 1,
        explanation: 'Jest. — the answer about he, she or it.',
      },
    ],
    vocab: [
      ['nisam', 'I am not', 'Nisam student.'],
      ['nije', 'he / she / it is not', 'Ana nije ovdje.'],
      ['nisu', 'they are not', 'Oni nisu doma.'],
      ['jesi li', 'are you…? (to a friend)', 'Jesi li ti Ana?'],
      ['je li', 'is he / she / it…?', 'Je li Marko doma?'],
      ['jeste li', 'are you…? (polite or plural)', 'Jeste li Vi gospodin Horvat?'],
      ['doma', 'at home', 'Petra je doma.'],
      ['ovdje', 'here', 'Ivan nije ovdje.'],
      ['tamo', 'over there', 'Oni su tamo.'],
    ],
  },

  'plural-irregular': {
    worked: [
      {
        title: 'A Different Word',
        problem: 'Say: The people are here. (čovjek)',
        en: 'Say that the people are here.',
        steps: [
          { label: 'One or many?', text: 'Many people — you need the plural.' },
          { label: 'The irregular', text: 'čovjek has a different word for many: ljudi.' },
          { label: 'The verb', text: 'Plural subject, plural verb: su.' },
        ],
        answer: 'Ljudi su ovdje.',
      },
      {
        title: 'A Group Word',
        problem: 'Say: These children are not here. (dijete)',
        en: 'Say that these children are not here.',
        steps: [
          { label: 'The plural', text: 'dijete → djeca.' },
          {
            label: 'The pointing word',
            text: 'djeca looks like a feminine noun, so "these" is ova.',
          },
          { label: 'The verb', text: 'The children are many: nisu.' },
        ],
        answer: 'Ova djeca nisu ovdje.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Plural of "brat" (brother):',
          options: ['brati', 'bratovi', 'braća', 'brate'],
          correct: 2,
          hint: 'It ends in -a, like djeca.',
          explanation: 'brat → braća.',
        },
        {
          q: 'Plural of "uho" (ear):',
          options: ['uha', 'uši', 'uhi', 'uhovi'],
          correct: 1,
          hint: 'Like oko → oči, it becomes a feminine word.',
          explanation: 'uho → uši.',
        },
        {
          q: 'Plural of "gospodin" (gentleman):',
          options: ['gospoda', 'gospodini', 'gospođe', 'gospodi'],
          correct: 0,
          hint: 'A group word ending in -a, like braća.',
          explanation: 'gospodin → gospoda.',
        },
        {
          q: 'Which pointing word goes with "ljudi"?',
          options: ['ova', 'ove', 'ovaj', 'ovi'],
          correct: 3,
          hint: 'ljudi is a masculine plural.',
          explanation: 'ovi ljudi.',
        },
        {
          q: 'Which pointing word goes with "oči"?',
          options: ['ovi', 'ove', 'ova', 'ovo'],
          correct: 1,
          hint: 'oči is a feminine plural.',
          explanation: 'ove oči.',
        },
        {
          q: 'Complete: "Braća ___ tamo."',
          options: ['je', 'smo', 'su', 'si'],
          correct: 2,
          hint: 'The brothers are many people.',
          explanation: 'Braća su tamo.',
        },
        {
          type: 'type',
          q: 'dijete → ____',
          answer: 'djeca',
          hint: 'A different word, ending in -a.',
          explanation: 'dijete → djeca.',
        },
        {
          type: 'type',
          q: 'oko → ____',
          answer: 'oči',
          hint: 'A feminine plural, like uho → uši.',
          explanation: 'oko → oči.',
        },
        {
          type: 'type',
          q: 'ime → ____',
          answer: 'imena',
          hint: '-en- goes in before the neuter plural -a.',
          explanation: 'ime → imena.',
        },
        {
          type: 'type',
          q: 'Ana i Petra su ____. (daughters — kći)',
          answer: 'kćeri',
          hint: 'Keep kć- and add -eri in place of the final -i.',
          explanation: 'kći → kćeri.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Ti braća su ovdje.',
            'Ta braća je ovdje.',
            'Ta braća su ovdje.',
            'Ti braća je ovdje.',
          ],
          correct: 2,
          hint: 'Feminine-looking pointing word, plural verb.',
          explanation: 'Ta braća su ovdje.',
        },
        {
          q: 'Plural of "čovjek":',
          options: ['čovjeci', 'ljudi', 'čovjeki', 'ljude'],
          correct: 1,
          hint: 'A completely different word.',
          explanation: 'čovjek → ljudi.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Tko su ovi ___?" (Who are these people?)',
        options: ['čovjeci', 'čovjek', 'ljudi', 'ljude'],
        correct: 2,
        explanation: 'ljudi — the plural of čovjek.',
      },
      {
        q: 'Complete: "___ su tamo." (The children are over there.)',
        options: ['Djeca', 'Dijete', 'Djece', 'Dijeti'],
        correct: 0,
        explanation: 'Djeca su tamo.',
      },
      {
        q: 'Which is the plural of "uho" (ear)?',
        options: ['uha', 'uhovi', 'uhe', 'uši'],
        correct: 3,
        explanation: 'uho → uši.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Ova gospoda je iz Zagreba.',
          'Ova gospoda su iz Zagreba.',
          'Ovi gospoda su iz Zagreba.',
          'Ovi gospoda je iz Zagreba.',
        ],
        correct: 1,
        explanation: 'gospoda takes ova in front and su after.',
      },
      {
        q: 'What is the plural of "kći" (daughter)?',
        options: ['kćeri', 'kći', 'kćije', 'kćere'],
        correct: 0,
        explanation: 'kći → kćeri.',
      },
      {
        q: 'What is the plural of "rame" (shoulder)?',
        options: ['rami', 'rame', 'ramena', 'ramovi'],
        correct: 2,
        explanation: 'rame → ramena, like ime → imena.',
      },
    ],
    vocab: [
      ['čovjek', 'person, man (plural ljudi)', 'Ovaj čovjek je Hrvat.'],
      ['ljudi', 'people', 'Ljudi su ovdje.'],
      ['dijete', 'child (plural djeca)', 'Ovo dijete je Marko.'],
      ['djeca', 'children', 'Djeca su tamo.'],
      ['brat', 'brother (plural braća)', 'Ivan i Marko su braća.'],
      ['gospodin', 'gentleman, Mr (plural gospoda)', 'Ova gospoda su iz Zagreba.'],
      ['oko', 'eye (plural oči)', 'Ovo su oči.'],
      ['uho', 'ear (plural uši)', 'Ovo su uši.'],
      ['kći', 'daughter (plural kćeri)', 'Ana i Petra su kćeri.'],
      ['ime', 'name (plural imena)', 'Ana i Petra su imena.'],
    ],
  },

  'jobs-professions': {
    worked: [
      {
        title: "A Woman's Job Word",
        problem: 'Say: Ana is a teacher. (učitelj)',
        en: 'Say that Ana is a teacher.',
        steps: [
          { label: 'Man or woman?', text: 'Ana is a woman, so you need the female form.' },
          { label: 'The pattern', text: 'A job in -telj adds -ica.' },
          { label: 'No "a"', text: 'Put the job straight after je.' },
        ],
        answer: 'Ana je učiteljica.',
      },
      {
        title: 'A Mixed Group',
        problem: 'Say: Ivan and Petra are cooks. (kuhar)',
        en: 'Say that Ivan and Petra are cooks.',
        steps: [
          { label: 'Who?', text: 'A man and a woman together: a mixed group.' },
          { label: 'Which plural?', text: 'A mixed group uses the male plural.' },
          { label: 'Make it', text: 'kuhar ends in a consonant, so it takes -i: kuhari.' },
        ],
        answer: 'Ivan i Petra su kuhari.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Female form of "vozač" (driver):',
          options: ['vozačka', 'vozačica', 'vozača', 'vozačinja'],
          correct: 1,
          hint: 'Jobs in -ač keep the whole word and add an ending.',
          explanation: 'vozač → vozačica.',
        },
        {
          q: 'Female form of "odvjetnik" (lawyer):',
          options: ['odvjetnikica', 'odvjetnika', 'odvjetnica', 'odvjetnička'],
          correct: 2,
          hint: 'The -ik goes, then the ending comes.',
          explanation: 'odvjetnik → odvjetnica.',
        },
        {
          q: 'Female form of "inženjer" (engineer):',
          options: ['inženjerka', 'inženjerica', 'inženjera', 'inženjerkinja'],
          correct: 0,
          hint: 'The same short ending as in frizerka.',
          explanation: 'inženjer → inženjerka.',
        },
        {
          q: 'How do you say "She is a doctor"?',
          options: [
            'Ona je liječnici.',
            'Ona je jedna liječnica.',
            'Ona liječnica.',
            'Ona je liječnica.',
          ],
          correct: 3,
          hint: 'Female form, no word for "a", and biti stays in.',
          explanation: 'Ona je liječnica.',
        },
        {
          q: 'Ask a friend: What do you do?',
          options: [
            'Što ste po zanimanju?',
            'Što si po zanimanju?',
            'Što je po zanimanju?',
            'Što smo po zanimanju?',
          ],
          correct: 1,
          hint: 'A friend is ti.',
          explanation: 'Što si po zanimanju?',
        },
        {
          q: 'Several women are shop assistants (prodavač). They are:',
          options: ['prodavačice', 'prodavači', 'prodavačica', 'prodavač'],
          correct: 0,
          hint: 'Female form, then the feminine plural -e.',
          explanation: 'prodavačica → prodavačice.',
        },
        {
          type: 'type',
          q: 'Marko je konobar, a Ana je ____. (waitress)',
          answer: 'konobarica',
          hint: 'The male word plus -ica.',
          explanation: 'konobar → konobarica.',
        },
        {
          type: 'type',
          q: 'Petra je ____. (a journalist — novinar)',
          answer: 'novinarka',
          hint: 'This one takes the short ending -ka.',
          explanation: 'novinar → novinarka.',
        },
        {
          type: 'type',
          q: 'Ivana je ____. (a doctor — liječnik)',
          answer: 'liječnica',
          hint: 'Drop the -ik, then add the ending.',
          explanation: 'liječnik → liječnica.',
        },
        {
          type: 'type',
          q: 'Ana i Marko su ____. (students — a mixed group)',
          answer: 'studenti',
          hint: 'A mixed group takes the male plural.',
          explanation: 'Ana i Marko su studenti.',
        },
        {
          q: 'Which sentence is right for a man who cooks?',
          options: ['Ja sam jedan kuhar.', 'Ja sam kuharica.', 'Ja sam kuhar.', 'Sam kuhar ja.'],
          correct: 2,
          hint: 'No word for "a".',
          explanation: 'Ja sam kuhar.',
        },
        {
          q: 'Plural of "učiteljica":',
          options: ['učiteljici', 'učitelji', 'učiteljica', 'učiteljice'],
          correct: 3,
          hint: 'A feminine noun in -a takes -e.',
          explanation: 'učiteljica → učiteljice.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ana je ___." (a singer — pjevač)',
        options: ['pjevač', 'pjevačica', 'pjevačka', 'pjevača'],
        correct: 1,
        explanation: 'pjevač → pjevačica.',
      },
      {
        q: 'Female form of "službenik" (clerk):',
        options: ['službenikica', 'službenka', 'službenika', 'službenica'],
        correct: 3,
        explanation: '-ik → -ica: službenica.',
      },
      {
        q: 'Which is right?',
        options: [
          'Ja sam profesorica.',
          'Ja sam jedna profesorica.',
          'Sam profesorica.',
          'Ja profesorica.',
        ],
        correct: 0,
        explanation: 'No word for "a", and biti stays in: Ja sam profesorica.',
      },
      {
        q: 'Complete: "Oni su ___." (drivers — men)',
        options: ['vozačice', 'vozač', 'vozači', 'vozačica'],
        correct: 2,
        explanation: 'vozač → vozači.',
      },
      {
        q: 'Female form of "kuhar" (cook):',
        options: ['kuharka', 'kuharica', 'kuharkinja', 'kuhara'],
        correct: 1,
        explanation: 'kuhar → kuharica.',
      },
      {
        q: 'Ask politely: What do you do?',
        options: [
          'Što si po zanimanju?',
          'Što su po zanimanju?',
          'Što ste po zanimanju?',
          'Što je po zanimanju?',
        ],
        correct: 2,
        explanation: 'Polite Vi takes ste.',
      },
    ],
    vocab: [
      ['učitelj / učiteljica', 'teacher', 'Ivana je učiteljica.'],
      ['liječnik / liječnica', 'doctor', 'Marko je liječnik.'],
      ['kuhar / kuharica', 'cook', 'Ja sam kuhar.'],
      ['konobar / konobarica', 'waiter / waitress', 'Ana je konobarica.'],
      ['vozač / vozačica', 'driver', 'Oni su vozači.'],
      ['prodavač / prodavačica', 'shop assistant', 'Petra je prodavačica.'],
      ['novinar / novinarka', 'journalist', 'Nisam novinarka.'],
      ['odvjetnik / odvjetnica', 'lawyer', 'Je li on odvjetnik?'],
      ['inženjer / inženjerka', 'engineer', 'Ja sam inženjerka.'],
      ['po zanimanju', 'by profession', 'Što ste po zanimanju?'],
    ],
  },

  nationalities: {
    worked: [
      {
        title: "A Woman's Nationality",
        problem: 'Say (a woman from Italy): I am Italian.',
        en: 'A woman from Italy says who she is.',
        steps: [
          { label: "The man's word", text: 'An Italian man is a Talijan.' },
          { label: "The woman's ending", text: 'This one takes -ka: Talijanka.' },
          { label: 'The sentence', text: 'Ja sam + the nationality, with a capital letter.' },
        ],
        answer: 'Ja sam Talijanka.',
      },
      {
        title: 'Person and Language',
        problem: 'Say (a man): I am Croatian and I speak Croatian.',
        en: 'A man says he is Croatian and speaks Croatian.',
        steps: [
          { label: 'The person', text: 'A Croatian man is a Hrvat — a capital letter.' },
          { label: 'The language', text: 'The language ends in -ski: hrvatski.' },
          { label: 'The small letter', text: 'Languages take a small first letter.' },
        ],
        answer: 'Ja sam Hrvat i govorim hrvatski.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Female form of "Englez":',
          options: ['Englezica', 'Engleskinja', 'Englezka', 'Engleska'],
          correct: 1,
          hint: 'This one takes the long ending, -kinja.',
          explanation: 'Englez → Engleskinja.',
        },
        {
          q: 'Female form of "Mađar":',
          options: ['Mađarka', 'Mađarkinja', 'Mađarica', 'Mađarska'],
          correct: 2,
          hint: 'Like Hrvat → Hrvatica.',
          explanation: 'Mađar → Mađarica.',
        },
        {
          q: 'Female form of "Amerikanac":',
          options: ['Amerikanka', 'Amerikanica', 'Amerikankinja', 'Amerika'],
          correct: 0,
          hint: 'The -ac goes and the short female ending comes.',
          explanation: 'Amerikanac → Amerikanka.',
        },
        {
          q: 'How is the language "German" written?',
          options: ['Njemački', 'Nijemac', 'Njemica', 'njemački'],
          correct: 3,
          hint: 'A language has a small first letter.',
          explanation: 'njemački.',
        },
        {
          q: 'Several Croatian women are:',
          options: ['Hrvatice', 'Hrvati', 'Hrvatica', 'Hrvatske'],
          correct: 0,
          hint: 'Female form, feminine plural -e.',
          explanation: 'Hrvatica → Hrvatice.',
        },
        {
          q: 'Which is right for a German woman?',
          options: ['Ja sam Nijemac.', 'Ja sam Njemica.', 'Ja sam Njemačka.', 'Ja sam njemački.'],
          correct: 1,
          hint: 'Nijemac loses its i in the female form.',
          explanation: 'Ja sam Njemica.',
        },
        {
          type: 'type',
          q: 'Ana je iz Hrvatske. Ona je ____.',
          answer: 'Hrvatica',
          hint: "The man's word plus -ica.",
          explanation: 'Hrvat → Hrvatica.',
        },
        {
          type: 'type',
          q: 'Pierre je iz Francuske. On je ____.',
          answer: 'Francuz',
          hint: 'A short word ending in -z, like Englez.',
          explanation: 'Francuska → Francuz.',
        },
        {
          type: 'type',
          q: 'Govorim ____. (English — the language)',
          answer: 'engleski',
          hint: '-ski, and a small first letter.',
          explanation: 'Govorim engleski.',
        },
        {
          type: 'type',
          q: 'Ivan i Ana su ____. (Croatians — a mixed group)',
          answer: 'Hrvati',
          hint: 'A mixed group takes the male plural.',
          explanation: 'Ivan i Ana su Hrvati.',
        },
        {
          q: 'Plural of "Kanađanin":',
          options: ['Kanađanini', 'Kanađanke', 'Kanađani', 'Kanada'],
          correct: 2,
          hint: 'The -in drops in the plural.',
          explanation: 'Kanađanin → Kanađani.',
        },
        {
          q: 'A man from Split is a:',
          options: ['Splitanin', 'Splićanin', 'Splitac', 'Splićanka'],
          correct: 1,
          hint: 'The t of Split changes before the ending -anin.',
          explanation: 'Split → Splićanin (a woman is a Splićanka).',
        },
        {
          type: 'type',
          q: 'Ivan je iz Zagreba. On je ____.',
          answer: 'Zagrepčanin',
          hint: 'The town + -čanin, and its b is written p before č.',
          explanation: 'Zagreb → Zagrepčanin.',
        },
        {
          type: 'type',
          q: 'Petra je iz Rijeke. Ona je ____.',
          answer: 'Riječanka',
          hint: "The k of the town becomes č, then the woman's ending -anka.",
          explanation: 'Rijeka → Riječanin, Riječanka.',
        },
        {
          q: 'Which is spelled correctly?',
          options: [
            'Govorim Talijanski.',
            'Govorim talijanski.',
            'Govorim talijan.',
            'Govorim Italija.',
          ],
          correct: 1,
          hint: 'The language: -ski, small letter.',
          explanation: 'Govorim talijanski.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ana je ___." (Ana is English.)',
        options: ['Englez', 'engleski', 'Engleskinja', 'Engleska'],
        correct: 2,
        explanation: 'An Englishwoman is an Engleskinja.',
      },
      {
        q: 'Female form of "Slovenac":',
        options: ['Slovenka', 'Slovenica', 'Slovenkinja', 'Slovenija'],
        correct: 0,
        explanation: 'Slovenac → Slovenka.',
      },
      {
        q: 'Which sentence is spelled correctly?',
        options: [
          'Marko je talijan.',
          'Marko je Talijan i govori talijanski.',
          'Marko je Talijan i govori Talijanski.',
          'Marko je talijan i govori Talijanski.',
        ],
        correct: 1,
        explanation: 'A capital for the person, a small letter for the language.',
      },
      {
        q: 'Several Italian men are:',
        options: ['Talijanke', 'Talijan', 'talijanski', 'Talijani'],
        correct: 3,
        explanation: 'Talijan → Talijani.',
      },
      {
        q: 'A Croatian woman says:',
        options: ['Ja sam Hrvatska.', 'Ja sam Hrvat.', 'Ja sam hrvatski.', 'Ja sam Hrvatica.'],
        correct: 3,
        explanation: 'Ja sam Hrvatica.',
      },
      {
        q: 'Female form of "Irac" (Irishman):',
        options: ['Irica', 'Irkinja', 'Irka', 'Irska'],
        correct: 1,
        explanation: 'Irac → Irkinja, like Engleskinja.',
      },
    ],
    vocab: [
      ['Hrvat / Hrvatica', 'Croat (man / woman)', 'Marko je Hrvat, a Ana je Hrvatica.'],
      ['hrvatski', 'Croatian (the language)', 'Govorim hrvatski.'],
      ['Talijan / Talijanka', 'Italian (man / woman)', 'Ana je Talijanka.'],
      ['Englez / Engleskinja', 'Englishman / Englishwoman', 'Nisam Englez.'],
      ['Francuz / Francuskinja', 'Frenchman / Frenchwoman', 'Marie je Francuskinja.'],
      ['Nijemac / Njemica', 'German (man / woman)', 'One su Njemice.'],
      ['Amerikanac / Amerikanka', 'American (man / woman)', 'Jesi li ti Amerikanac?'],
      ['Kanađanin / Kanađanka', 'Canadian (man / woman)', 'Ja sam Kanađanka.'],
      ['engleski', 'English (the language)', 'Govorim engleski i malo hrvatski.'],
      ['Zagrepčanin / Zagrepčanka', 'a man / woman from Zagreb', 'Ivan je Zagrepčanin.'],
      ['Splićanin / Splićanka', 'a man / woman from Split', 'Petra je Splićanka.'],
      ['Riječanin / Riječanka', 'a man / woman from Rijeka', 'Jesi li ti Riječanin?'],
    ],
  },

  'numbers-11-1000': {
    worked: [
      {
        title: 'A Teen',
        problem: 'Say 16 in Croatian.',
        en: 'sixteen',
        steps: [
          { label: 'The unit', text: '16 is six on ten: šest + -naest.' },
          { label: 'The sound', text: 'Said quickly, the t of šest disappears.' },
          { label: 'Write it', text: 'Spell it as it sounds: šesnaest.' },
        ],
        answer: 'šesnaest',
      },
      {
        title: 'A Big Number',
        problem: 'Say 345 in Croatian.',
        en: 'three hundred and forty-five',
        steps: [
          { label: 'The hundreds', text: '300 is tri + sto in one word: tristo.' },
          { label: 'The tens', text: '40 is četr- + -deset: četrdeset.' },
          { label: 'The unit', text: '5 is pet. Put them in order, left to right.' },
        ],
        answer: 'tristo četrdeset pet',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '13 is:',
          options: ['tridest', 'trinaest', 'trideset', 'tristo'],
          correct: 1,
          hint: 'A teen: three on ten.',
          explanation: 'trinaest.',
        },
        {
          q: '40 is:',
          options: ['četrdeset', 'četrnaest', 'četirideset', 'četiristo'],
          correct: 0,
          hint: 'A ten, with the short form of četiri.',
          explanation: 'četrdeset.',
        },
        {
          q: '90 is:',
          options: ['devetsto', 'devetnaest', 'devetdeset', 'devedeset'],
          correct: 3,
          hint: 'A ten — and devet loses a letter before -deset.',
          explanation: 'devedeset.',
        },
        {
          q: '600 is:',
          options: ['šezdeset', 'šesnaest', 'šesto', 'šest sto'],
          correct: 2,
          hint: 'The hundreds are one word.',
          explanation: 'šesto (600).',
        },
        {
          q: '"dvadeset i jedan" is:',
          options: ['12', '21', '201', '120'],
          correct: 1,
          hint: 'The ten comes first.',
          explanation: '20 + 1 = 21.',
        },
        {
          q: '"sedamsto osam" is:',
          options: ['78', '780', '708', '718'],
          correct: 2,
          hint: 'sedamsto is a hundreds word.',
          explanation: '700 + 8 = 708.',
        },
        {
          type: 'type',
          q: '50 = ____',
          answer: 'pedeset',
          hint: 'pet loses its t before -deset.',
          explanation: 'pedeset.',
        },
        {
          type: 'type',
          q: '14 = ____',
          answer: 'četrnaest',
          hint: 'četiri shortens before -naest.',
          explanation: 'četrnaest.',
        },
        {
          type: 'type',
          q: '200 = ____',
          answer: 'dvjesto',
          hint: 'An ijekavian word with -je- in the middle.',
          explanation: 'dvjesto.',
        },
        {
          type: 'type',
          q: '1000 = ____',
          answer: 'tisuća',
          hint: 'Its own word, ending in the soft ch sound and -a.',
          explanation: 'tisuća.',
        },
        {
          q: '60 is:',
          options: ['šestdeset', 'šezdeset', 'šesdeset', 'šezeset'],
          correct: 1,
          hint: 'The t of šest changes to a z before d.',
          explanation: 'šezdeset.',
        },
        {
          q: 'Which is 99?',
          options: ['devetsto devet', 'devetnaest devet', 'devet devedeset', 'devedeset devet'],
          correct: 3,
          hint: 'Ten first, then the unit.',
          explanation: 'devedeset devet.',
        },
        {
          q: '1 000 000 is:',
          options: ['tisuća', 'milijun', 'milijarda', 'bilijun'],
          correct: 1,
          hint: 'A thousand thousands.',
          explanation: 'milijun = a million.',
        },
        {
          type: 'type',
          q: '1 000 000 000 (an English "billion") = ____',
          answer: 'milijarda',
          hint: 'Not bilijun: a thousand millions has its own word, ending in -a.',
          explanation: 'milijarda = a thousand million.',
        },
      ],
    },
    checkB: [
      {
        q: 'How do you write 16?',
        options: ['šestnaest', 'šesnaest', 'šezdeset', 'šesto'],
        correct: 1,
        explanation: 'šest loses its t: šesnaest.',
      },
      {
        q: 'How do you write 50?',
        options: ['pedeset', 'petdeset', 'petnaest', 'petsto'],
        correct: 0,
        explanation: 'pedeset — no t.',
      },
      {
        q: 'What is "devedeset"?',
        options: ['19', '900', '90', '9'],
        correct: 2,
        explanation: 'devedeset = 90.',
      },
      {
        q: 'Which says 412?',
        options: [
          'četiristo dvanaest',
          'četrdeset dvanaest',
          'četiri sto dvanaest',
          'četrnaest dvanaest',
        ],
        correct: 0,
        explanation: 'četiristo (400) + dvanaest (12).',
      },
      {
        q: 'How do you write 300?',
        options: ['trideset', 'trinaest', 'tri sto', 'tristo'],
        correct: 3,
        explanation: 'tristo, one word.',
      },
      {
        q: 'How do you write 18?',
        options: ['osamdeset', 'osamsto', 'osamnaest', 'osamaest'],
        correct: 2,
        explanation: 'osam + naest = osamnaest.',
      },
    ],
    vocab: [
      ['jedanaest', 'eleven', 'Autobus broj jedanaest je ovdje.'],
      ['dvanaest', 'twelve', 'Soba broj dvanaest je tamo.'],
      ['dvadeset', 'twenty', 'Koliko je deset i deset? — Dvadeset.'],
      ['pedeset', 'fifty', 'Pedeset i pedeset je sto.'],
      ['sto', 'a hundred', 'Sto i sto je dvjesto.'],
      ['dvjesto', 'two hundred', 'Soba broj dvjesto je ovdje.'],
      ['tisuća', 'a thousand', 'Petsto i petsto je tisuća.'],
      ['milijun', 'a million', 'Je li ovo milijun?'],
      ['milijarda', 'a billion (a thousand million)', 'Nije, ovo je milijarda.'],
      ['broj', 'number', 'Ovo je tramvaj broj sedamnaest.'],
      ['soba', 'room', 'Je li ovo soba broj devedeset?'],
    ],
  },
};
