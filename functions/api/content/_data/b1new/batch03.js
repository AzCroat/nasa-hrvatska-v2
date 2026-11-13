// functions/api/content/_data/b1new/batch03.js
//
// New B1 lessons, batch 03 (Croaticum restructure, stage 4, 2026-11-12). See b1new/index.js.
//
// Five lessons from Razgovarajte s nama! A2-B1, lessons 8 and 9:
//   genitive-plural-special (23) · time-genitive (25) · verbs-with-genitive (27)
//   · nouns-en-et (31) · verbs-peci-sti (32)
// Each builds only on grammar the learner has met by its position: the genitive of
// nouns and pronouns (A1), the genitive of adjectives (B1 22), numbers with the
// genitive, the past, the future, aspect and the imperative. Drill banks for each lesson
// live in src/data/drills/b1/.

// ─────────────────────────────────────────────────────────────────────────────
// 23 · genitive-plural-special — djevojaka, sestara, ljudi, prstiju, gradova
// ─────────────────────────────────────────────────────────────────────────────
const L_GENITIVE_PLURAL_SPECIAL = {
  id: 'genitive-plural-special',
  title: 'Pet djevojaka, deset prstiju — the Genitive Plural’s Special Forms',
  subtitle: 'An a that slips in, an -i where you expect -a, and the -iju of the body',
  icon: '🧮',
  level: 'B1',
  duration: '~7 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Counting Is Where the Genitive Plural Lives',
      body: 'Every time you count five or more, say "a lot of", "a few" or "without" with a plural, you need the genitive plural: pet kuća, puno prozora, nekoliko sela. Most nouns simply end in -a. But some of the commonest words in the language do something else: djevojka gives djevojaka, prst gives prstiju, čovjek gives ljudi. This lesson collects them, group by group, so that "pet djevojka" never comes out of your mouth again.',
      icon: '🧮',
    },
    {
      type: 'rule',
      title: 'The Ordinary Pattern, First',
      body: 'For most nouns the genitive plural ends in -a, whatever the gender: prozor → puno prozora (windows), kuća → pet kuća (houses), selo → deset sela (villages). Short masculine nouns that take the long plural keep the -ov- or -ev- you know from the nominative plural: grad → gradovi → pet gradova; stol → stolovi → deset stolova; muž → muževi → muževa; broj → brojevi → brojeva. The one everyday exception is dan: dani → pet dana.',
      highlight: 'gradovi → pet gradova',
    },
    {
      type: 'rule',
      title: 'An a Slips In Between Two Consonants',
      body: 'When the stem of a noun ends in two consonants, Croatian puts an a between them in the genitive plural, because the -a ending alone would leave the word hard to say. djevojka (stem djevojk-) → djevojaka; sestra (sestr-) → sestara; olovka (pencil) → olovaka; marka (stamp) → maraka; igra (game) → igara; zemlja (country) → zemalja; pismo (letter) → pisama; student → studenata; koncert → koncerata. This a is the same fleeting a you met in A1 — and nouns that lost it in the plural get it back here: muškarac → muškarci → muškaraca; stranac (foreigner) → stranaca; momak (lad) → momaka; Amerikanac → Amerikanaca.',
      highlight: 'djevojka → djevojaka',
    },
    {
      type: 'table',
      title: 'Nouns With the Slipped-In a',
      headers: ['nominative singular', 'nominative plural', 'genitive plural', 'example'],
      rows: [
        ['djevojka (girl)', 'djevojke', 'djevojaka', 'deset djevojaka'],
        ['sestra (sister)', 'sestre', 'sestara', 'Koliko imaš sestara?'],
        ['olovka (pencil)', 'olovke', 'olovaka', 'pet olovaka'],
        ['zemlja (country)', 'zemlje', 'zemalja', 'iz šest zemalja'],
        ['pismo (letter)', 'pisma', 'pisama', 'puno pisama'],
        ['student', 'studenti', 'studenata', 'sto studenata'],
        ['muškarac (man)', 'muškarci', 'muškaraca', 'pet muškaraca'],
        ['momak (lad)', 'momci', 'momaka', 'nekoliko momaka'],
      ],
    },
    {
      type: 'rule',
      title: 'Some Nouns End in -i Instead',
      body: 'Three groups take -i. (1) Feminine nouns whose stem ends in two consonants that do not take the a: majka → majki, torba (bag) → torbi, lopta (ball) → lopti, borba (fight) → borbi, šetnja (walk) → šetnji. (2) Feminine nouns ending in a consonant, the stvar group: stvar → puno stvari, noć → nekoliko noći, riječ → deset riječi. (3) A handful of masculine words: čovjek → pet ljudi, sat (hour) → pet sati, and mjesec (month) → pet mjeseci. The standard form is pet mjeseci; pet mjeseca is heard in everyday speech, but it is colloquial.',
      highlight: 'pet ljudi, pet sati',
    },
    {
      type: 'rule',
      title: 'The Body and the Guests: -iju and -u',
      body: 'A few nouns take -iju. Most of them are parts of the body: oči (eyes) → očiju, uši (ears) → ušiju, prsti (fingers, toes) → prstiju. The non-body word that does it is gost (guest) → gostiju: Na svadbi je bilo dvjesto gostiju. Two more body words end in -u: noga (leg, foot) → nogu, ruka (arm, hand) → ruku. Pauk ima osam nogu — a spider has eight legs. (In other cases these words are regular: na nozi, u ruci.)',
      highlight: 'deset prstiju',
    },
    {
      type: 'table',
      title: 'The Endings at a Glance',
      headers: ['ending', 'which nouns', 'examples'],
      rows: [
        ['-a', 'most nouns', 'prozora, kuća, sela, dana'],
        [
          '-ova / -eva',
          'short masculine nouns with a long plural',
          'gradova, stolova, muževa, brojeva',
        ],
        [
          'a slips in + -a',
          'stems ending in two consonants',
          'djevojaka, sestara, pisama, studenata',
        ],
        [
          '-i',
          'majka, torba, lopta…; the stvar group; ljudi, sati, mjeseci',
          'majki, torbi, stvari, noći',
        ],
        ['-iju', 'eyes, ears, fingers — and guests', 'očiju, ušiju, prstiju, gostiju'],
        ['-u', 'legs and arms', 'nogu, ruku'],
      ],
    },
    {
      type: 'example',
      title: 'The Slipped-In a and -i',
      items: [
        {
          hr: 'Na izletu je bilo deset djevojaka i osam momaka.',
          en: 'There were ten girls and eight lads on the trip.',
          note: 'djevojaka and momaka — genitive plural after a number, with the a slipped in',
        },
        {
          hr: 'Koliko imaš sestara? Imam dvije sestre i jednog brata.',
          en: 'How many sisters do you have? I have two sisters and one brother.',
          note: 'koliko takes the genitive plural sestara; after dvije the noun sestre is genitive singular',
        },
        {
          hr: 'Na stolu je pet olovaka i nekoliko starih pisama.',
          en: 'There are five pencils and a few old letters on the table.',
          note: 'olovaka and pisama — genitive plural with an inserted a',
        },
        {
          hr: 'U našoj grupi ima dvadeset studenata iz šest zemalja.',
          en: 'There are twenty students from six countries in our group.',
          note: 'studenata and zemalja — both stems end in two consonants',
        },
        {
          hr: 'Nisam ga vidjela nekoliko mjeseci.',
          en: 'I haven’t seen him for a few months.',
          note: 'mjeseci — the standard genitive plural',
        },
        {
          hr: 'Moram kupiti puno stvari, a nemam dovoljno torbi.',
          en: 'I have to buy a lot of things, and I haven’t got enough bags.',
          note: 'stvari and torbi — genitive plural in -i',
        },
      ],
    },
    {
      type: 'example',
      title: 'People, the Body and the Long Plural',
      items: [
        {
          hr: 'Subotom je na tržnici uvijek puno ljudi.',
          en: 'On Saturdays there are always a lot of people at the market.',
          note: 'ljudi — the genitive plural of čovjek (people)',
        },
        {
          hr: 'Dijete ima deset prstiju na rukama i deset na nogama.',
          en: 'A child has ten fingers on its hands and ten toes on its feet.',
          note: 'prstiju — the -iju ending of the body words',
        },
        {
          hr: 'Na svadbi moje sestrične bilo je dvjesto gostiju.',
          en: 'There were two hundred guests at my cousin’s wedding.',
          note: 'gostiju — gost is the one non-body noun with -iju',
        },
        {
          hr: 'Pas ima četiri noge, a pauk osam nogu.',
          en: 'A dog has four legs, and a spider eight.',
          note: 'after četiri the word noge is genitive singular; after osam the word nogu is genitive plural',
        },
        {
          hr: 'U Zagrebu ima mnogo muzeja, parkova i trgova.',
          en: 'In Zagreb there are many museums, parks and squares.',
          note: 'parkova and trgova — the long plural keeps -ov-; muzeja takes plain -a',
        },
        {
          hr: 'Čekali smo pet sati, a vlak nije došao.',
          en: 'We waited five hours and the train didn’t come.',
          note: 'sati — sat takes -i in the genitive plural',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "U razredu je dvanaest ___." (girls)',
      options: ['djevojka', 'djevojaka', 'djevojke', 'djevojkova'],
      correct: 1,
      explanation:
        'After twelve comes the genitive plural. The stem djevojk- ends in two consonants, so an a slips in: djevojaka.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Svaka ruka ima pet ___." (fingers)',
      options: ['prstova', 'prste', 'prstima', 'prstiju'],
      correct: 3,
      explanation:
        'Prst belongs to the body words that take -iju: prstiju. The long plural -ova is not used with it.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving the slipped-in a out: "pet djevojka", "deset sestra" — that is the nominative singular, and Croatians hear it at once. Say pet djevojaka, deset sestara. (2) Giving -ova to nouns that do not take it: "puno ljudova", "deset prstova", "pet satova" for hours — it is ljudi, prstiju, sati. (3) Writing pet mjeseca: it is heard in speech, but the standard form is pet mjeseci. (4) Forgetting that two, three and four still take the genitive SINGULAR: dvije sestre, tri djevojke — the special forms are for five and up, and for koliko, puno, nekoliko and bez.',
      highlight: 'pet djevojaka',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Koliko imaš ___?" (sisters)',
          options: ['sestra', 'sestara', 'sestri', 'sestrama'],
          correct: 1,
          explanation:
            'Koliko takes the genitive plural. The stem sestr- ends in two consonants, so an a slips in: sestara.',
        },
        {
          q: 'Complete: "U parku je bilo puno ___." (people)',
          options: ['ljudi', 'čovjeka', 'ljudova', 'ljudima'],
          correct: 0,
          explanation: 'The plural of čovjek is ljudi, and its genitive plural is also ljudi.',
        },
        {
          q: 'Complete: "Na zabavi je bilo dvadeset ___." (guests)',
          options: ['gosti', 'gostova', 'gostima', 'gostiju'],
          correct: 3,
          explanation: 'Gost takes the -iju ending in the genitive plural: gostiju.',
        },
        {
          q: 'Complete: "Ovaj grad ima pet ___." (bridges)',
          options: ['mostova', 'mostovi', 'mostima', 'moste'],
          correct: 0,
          explanation:
            'Most is a short masculine noun with the long plural mostovi, so the genitive plural keeps -ov-: mostova.',
        },
        {
          q: 'Complete: "Na stolu je nekoliko ___." (letters)',
          options: ['pismi', 'pismova', 'pisama', 'pismima'],
          correct: 2,
          explanation: 'The stem pism- ends in two consonants, so an a slips in: pisama.',
        },
        {
          q: 'Complete: "Pauk ima osam ___." (legs)',
          options: ['noga', 'nogu', 'nogi', 'nogama'],
          correct: 1,
          explanation:
            'Noga takes -u in the genitive plural: osam nogu. Noga is the nominative singular.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Special Genitive Plurals — Key Takeaways',
      points: [
        'Most nouns end in -a: prozora, kuća, sela; short masculines keep -ov-: gradova, stolova',
        'Two consonants at the end of the stem: an a slips in — djevojaka, sestara, pisama, studenata',
        'Nouns that lost a fleeting a get it back: muškaraca, momaka, stranaca',
        '-i: majki, torbi, lopti; stvari, noći; and ljudi, sati, mjeseci',
        '-iju for eyes, ears, fingers and guests: očiju, ušiju, prstiju, gostiju',
        '-u for legs and arms: nogu, ruku',
      ],
    },
  ],
};

const P_GENITIVE_PLURAL_SPECIAL = {
  worked: [
    {
      title: 'Counting Girls and Boys',
      problem: 'Prevedi: "There are ten girls and five boys in the group."',
      en: 'There are ten girls and five boys in the group.',
      steps: [
        {
          label: 'The case',
          text: 'Ten and five are numbers from five upwards, so both nouns go into the genitive plural.',
        },
        {
          label: 'Girls',
          text: 'Djevojka has the stem djevojk-: two consonants at the end, so an a slips in before the ending.',
        },
        {
          label: 'Boys',
          text: 'Dječak is an ordinary masculine noun with a short plural: the genitive plural just adds -a.',
        },
        {
          label: 'The verb',
          text: 'With five and more, the verb is singular: je.',
        },
      ],
      answer: 'U grupi je deset djevojaka i pet dječaka.',
    },
    {
      title: 'Fingers and Eyes',
      problem: 'Prevedi: "I have ten fingers and two eyes."',
      en: 'I have ten fingers and two eyes.',
      steps: [
        {
          label: 'Ten fingers',
          text: 'Deset needs the genitive plural, and prst is one of the body words with the -iju ending.',
        },
        {
          label: 'Two eyes',
          text: 'Dva needs the genitive SINGULAR, and the genitive singular of oko is oka.',
        },
        {
          label: 'Put it together',
          text: 'Imam + the two counted nouns, joined with i.',
        },
      ],
      answer: 'Imam deset prstiju i dva oka.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Kupio sam deset ___ za razglednice. (stamps)',
        options: ['maraka', 'marka', 'markama', 'markova'],
        correct: 0,
        hint: 'The stem of marka ends in two consonants; something slips in between them.',
        explanation: 'maraka — an a slips in between r and k.',
      },
      {
        q: 'Na ulici je bilo stotinu ___. (people)',
        options: ['čovjeka', 'ljudi', 'ljudova', 'ljudima'],
        correct: 1,
        hint: 'The plural of čovjek is a different word altogether, and its genitive plural does not change.',
        explanation: 'ljudi — the genitive plural of čovjek.',
      },
      {
        q: 'Nisam bio kod kuće nekoliko ___. (months)',
        options: ['mjesecova', 'mjesecima', 'mjeseci', 'mjesec'],
        correct: 2,
        hint: 'Mjesec is one of the few masculine nouns ending in -i here (it also has a form in -a).',
        explanation: 'mjeseci — the standard genitive plural (mjeseca is colloquial).',
      },
      {
        q: 'U ovom gradu ima mnogo ___. (parks)',
        options: ['parka', 'parkovima', 'parki', 'parkova'],
        correct: 3,
        hint: 'Park has a long nominative plural; the genitive plural keeps that -ov-.',
        explanation: 'parkova — parkovi → parkova.',
      },
      {
        q: 'Na putovanju sam izgubio dvije ___. (bags)',
        options: ['torbi', 'torbe', 'torbama', 'toraba'],
        correct: 1,
        hint: 'Count carefully: after two, three and four the noun is genitive SINGULAR.',
        explanation: 'dvije torbe — genitive singular. Torbi is the form for five and up.',
      },
      {
        q: 'Majka mi je kupila nekoliko ___. (pencils)',
        options: ['olovke', 'olovkama', 'olovaka', 'olovkom'],
        correct: 2,
        hint: 'Nekoliko takes the genitive plural, and the stem olovk- ends in two consonants.',
        explanation: 'olovaka — an a slips in between v and k.',
      },
      {
        q: 'Moram kupiti puno ___ za put. (things)',
        options: ['stvari', 'stvara', 'stvarova', 'stvarima'],
        correct: 0,
        hint: 'Stvar is a feminine noun ending in a consonant; its group ends in -i.',
        explanation: 'stvari — the stvar group takes -i.',
      },
      {
        type: 'type',
        q: 'Na izletu je bilo deset ____. (girls)',
        answer: 'djevojaka',
        hint: 'The stem djevojk- ends in two consonants: slip an a in between them, then add -a.',
        explanation: 'djevojaka — genitive plural with the inserted a.',
      },
      {
        type: 'type',
        q: 'Koliko ____ ima tvoja mama? (sisters)',
        answer: 'sestara',
        hint: 'Koliko takes the genitive plural; the stem sestr- needs an extra a.',
        explanation: 'sestara — genitive plural of sestra.',
      },
      {
        type: 'type',
        q: 'Čovjek ima dva oka, a pauk ima osam ____. (eyes)',
        answer: 'očiju',
        hint: 'The plural of oko is oči; the body words take -iju after five and up.',
        explanation: 'očiju — the genitive plural of oči.',
      },
      {
        type: 'type',
        q: 'Na svadbi je bilo dvjesto ____. (guests)',
        answer: 'gostiju',
        hint: 'This noun is not a body word, but it takes the same ending as fingers and eyes.',
        explanation: 'gostiju — genitive plural of gost.',
      },
      {
        type: 'type',
        q: 'U učionici je bilo pet ____. (tables)',
        answer: 'stolova',
        hint: 'Stol is a short masculine noun with a long plural (-ov-).',
        explanation: 'stolova — stolovi → stolova.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Na fakultetu studira tisuću ___." (students)',
      options: ['studenti', 'studenta', 'studenata', 'studentima'],
      correct: 2,
      explanation: 'The stem student- ends in two consonants (n + t), so an a slips in: studenata.',
    },
    {
      q: 'Complete: "Glumica je poznata po ljepoti svojih ___." (eyes)',
      options: ['oči', 'očiju', 'oka', 'očima'],
      correct: 1,
      explanation: 'Svojih is genitive plural, and oči takes -iju: očiju.',
    },
    {
      q: 'Complete: "U trgovini sam kupila pet ___." (bags)',
      options: ['torbama', 'toraba', 'torbe', 'torbi'],
      correct: 3,
      explanation: 'Torba is one of the feminine nouns that take -i in the genitive plural: torbi.',
    },
    {
      q: 'Complete: "Na plaži je bilo dvadesetak ___." (Americans)',
      options: ['Amerikanaca', 'Amerikanci', 'Amerikanca', 'Amerikancima'],
      correct: 0,
      explanation:
        'Amerikanac loses its a in the plural (Amerikanci) and gets it back in the genitive plural: Amerikanaca.',
    },
    {
      q: 'Complete: "Bilo je deset ___ i dvije žene." (men)',
      options: ['muškarci', 'muškarca', 'muškaraca', 'muškarcima'],
      correct: 2,
      explanation: 'After deset, the genitive plural with the returning a: muškaraca.',
    },
    {
      q: 'Complete: "Koliko ___ moram ponijeti?" (things)',
      options: ['stvara', 'stvari', 'stvarova', 'stvarima'],
      correct: 1,
      explanation: 'Stvar is a feminine noun ending in a consonant; its genitive plural is stvari.',
    },
  ],
  vocab: [
    ['djevojka', 'girl (gen. pl. djevojaka)', 'Na izletu je bilo deset djevojaka.'],
    ['sestra', 'sister (gen. pl. sestara)', 'Koliko imaš sestara?'],
    ['olovka', 'pencil (gen. pl. olovaka)', 'Trebam pet olovaka.'],
    ['pismo', 'letter (gen. pl. pisama)', 'Dobila sam puno pisama.'],
    ['zemlja', 'country, earth (gen. pl. zemalja)', 'Studenti su iz šest zemalja.'],
    ['prst', 'finger, toe (gen. pl. prstiju)', 'Svaka ruka ima pet prstiju.'],
    ['gost', 'guest (gen. pl. gostiju)', 'Na svadbi je bilo dvjesto gostiju.'],
    ['ljudi', 'people (gen. pl. ljudi)', 'Ovdje je uvijek puno ljudi.'],
    ['mjesec', 'month (gen. pl. mjeseci)', 'Učim hrvatski šest mjeseci.'],
    ['muškarac', 'man (gen. pl. muškaraca)', 'U sobi je bilo pet muškaraca.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 25 · time-genitive — prošle godine, svakog dana, prvog svibnja
// ─────────────────────────────────────────────────────────────────────────────
const L_TIME_GENITIVE = {
  id: 'time-genitive',
  title: 'Prošle godine, svakog dana — Time in the Genitive',
  subtitle: 'Last year, this winter, that night, on the first of May — no preposition needed',
  icon: '🗓️',
  level: 'B1',
  duration: '~6 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'When Did It Happen?',
      body: 'English says "last year", "this winter", "on the first of May". Croatian very often says these with no preposition at all — it simply puts the time words into the genitive: prošle godine, ove zime, prvog svibnja. Once you know the genitive of adjectives, you can place any memory or plan in time, and you will hear these phrases in every story Croatians tell about their past.',
      icon: '🗓️',
    },
    {
      type: 'rule',
      title: 'Adjective + Noun, Both in the Genitive',
      body: 'Take a time noun — dan, tjedan, mjesec, godina, ljeto, zima, noć, jutro, večer — put a word like prošli (last), ovaj (this), idući or sljedeći (next), taj (that) or jedan (one) in front of it, and put both into the genitive. Feminine nouns end in -e: prošle godine, ove zime, te noći, iduće jeseni. Masculine and neuter nouns take -og (or the longer -oga) on the adjective and -a on the noun: prošlog tjedna, ovog ljeta, idućeg mjeseca, tog jutra. After a soft consonant the -og becomes -eg: idućeg, sljedećeg.',
      highlight: 'prošle godine, prošlog tjedna',
    },
    {
      type: 'table',
      title: 'Time Phrases in the Genitive',
      headers: ['English', 'feminine noun', 'masculine / neuter noun'],
      rows: [
        ['last …', 'prošle godine, prošle zime', 'prošlog tjedna, prošlog ljeta'],
        ['this …', 'ove godine, ove jeseni', 'ovog mjeseca, ovog proljeća'],
        ['next …', 'iduće godine, sljedeće subote', 'idućeg tjedna, sljedećeg mjeseca'],
        ['that …', 'te noći, te večeri', 'tog dana, tog jutra'],
        ['every …', 'svake godine, svake večeri', 'svakog dana, svakog jutra'],
        ['one … (once)', 'jedne noći, jedne zime', 'jednog dana, jednog jutra'],
      ],
    },
    {
      type: 'rule',
      title: 'Every: svakog dana and svaki dan',
      body: 'Svakog dana, svake godine, svakog jutra are genitives and mean "every day, every year, every morning". You will also hear the accusative svaki dan, svaku večer — it is just as correct and very common in speech. The genitive is a little more formal and is what you will read. Next week is the same: idućeg tjedna (genitive) and idući tjedan (accusative) are both correct.',
      highlight: 'svakog dana',
    },
    {
      type: 'rule',
      title: 'Dates: the Ordinal and the Month',
      body: 'For "on the fifth of March", Croatian puts both the ordinal number and the month into the genitive, again with no preposition: petog ožujka. Written with a number, the ordinal gets a full stop: 5. ožujka. Rođena sam petog ožujka. Božić je dvadeset petog prosinca. Praznik rada slavi se prvog svibnja. The year works the same way: Rođen sam 1995. godine — read as tisuću devetsto devedeset pete godine.',
      highlight: 'petog ožujka',
    },
    {
      type: 'rule',
      title: 'Telling About the Past',
      body: 'These phrases are how a memory starts. Put the time first and the little words second: Prošlog ljeta smo bili na Visu. Te zime je padao snijeg cijeli tjedan. Jednog dana sam srela starog prijatelja. Jednog dana also looks forward: Jednog dana ću živjeti na moru. In the plural the adjective ends in -ih: ovih dana (these days, lately), prošlih godina (in past years).',
      highlight: 'Prošlog ljeta smo bili na Visu.',
    },
    {
      type: 'table',
      title: 'Three Ways to Say When',
      headers: ['form', 'meaning', 'example'],
      rows: [
        ['u + accusative', 'on that day', 'U subotu idem na more.'],
        ['instrumental, no preposition', 'every such day', 'Subotom idem na tržnicu.'],
        [
          'genitive, no preposition',
          'a particular day, often with prošli / idući / taj',
          'Prošle subote bio sam na moru.',
        ],
      ],
    },
    {
      type: 'table',
      title: 'More Words for When',
      headers: ['Croatian', 'English', 'example'],
      rows: [
        ['danju / noću', 'by day / by night', 'Danju radim, noću učim.'],
        ['prekjučer', 'the day before yesterday', 'Prekjučer sam bila kod bake.'],
        ['preksutra (prekosutra)', 'the day after tomorrow', 'Preksutra putujemo u Split.'],
        ['ponedjeljkom, utorkom…', 'on Mondays, on Tuesdays…', 'Ponedjeljkom imam tečaj.'],
        ['oduvijek', 'always (since ever)', 'Oduvijek volim more.'],
        ['zauvijek', 'for ever', 'Ostat ćemo prijatelji zauvijek.'],
      ],
    },
    {
      type: 'example',
      title: 'Memories and Habits',
      items: [
        {
          hr: 'Prošlog ljeta smo bili na Visu i svakog jutra plivali u moru.',
          en: 'Last summer we were on Vis and swam in the sea every morning.',
          note: 'prošlog ljeta and svakog jutra — genitive time phrases',
        },
        {
          hr: 'Te zime je padao snijeg cijeli tjedan.',
          en: 'That winter it snowed for a whole week.',
          note: 'te zime — feminine genitive',
        },
        {
          hr: 'Prošle godine sam se preselila u Rijeku.',
          en: 'Last year I moved to Rijeka.',
          note: 'prošle godine — feminine genitive',
        },
        {
          hr: 'Jednog dana sam na tržnici srela svoju učiteljicu.',
          en: 'One day I met my teacher at the market.',
          note: 'jednog dana — the classic way to start a story',
        },
        {
          hr: 'Tog jutra nitko nije bio na plaži.',
          en: 'That morning nobody was on the beach.',
          note: 'tog jutra — neuter genitive',
        },
        {
          hr: 'Ovih dana imam puno posla.',
          en: 'These days I have a lot of work.',
          note: 'ovih dana — genitive plural',
        },
      ],
    },
    {
      type: 'example',
      title: 'Plans and Dates',
      items: [
        {
          hr: 'Iduće godine želim upisati fakultet u Zagrebu.',
          en: 'Next year I want to enrol at university in Zagreb.',
          note: 'iduće godine — feminine genitive',
        },
        {
          hr: 'Sljedećeg mjeseca dolaze nam gosti iz Kanade.',
          en: 'Next month we have guests coming from Canada.',
          note: 'sljedećeg mjeseca — -eg after the soft ć',
        },
        {
          hr: 'Moja kći je rođena dvanaestog listopada.',
          en: 'My daughter was born on the twelfth of October.',
          note: 'dvanaestog listopada — ordinal and month in the genitive',
        },
        {
          hr: 'Dan državnosti slavi se tridesetog svibnja.',
          en: 'Statehood Day is celebrated on the thirtieth of May.',
          note: 'tridesetog svibnja — a date with no preposition',
        },
        {
          hr: 'Ove zime idemo na skijanje u Gorski kotar.',
          en: 'This winter we are going skiing in Gorski Kotar.',
          note: 'ove zime — feminine genitive',
        },
        {
          hr: 'Svake večeri baka nam je pričala priče.',
          en: 'Every evening Grandma told us stories.',
          note: 'svake večeri — večer is feminine',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "___ sam bio u Dubrovniku." (last year)',
      options: ['Prošla godina', 'Prošle godine', 'Prošlog godine', 'U prošle godine'],
      correct: 1,
      explanation:
        'Godina is feminine, so both words take the feminine genitive -e: prošle godine. No preposition goes in front.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Rođen sam ___ siječnja." (on the third)',
      options: ['treći', 'trećem', 'trećeg', 'treća'],
      correct: 2,
      explanation: 'In a date the ordinal is in the genitive with the month: trećeg siječnja.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving the time phrase in the nominative, as in English: "Prošla godina sam bio u Splitu" — it is Prošle godine sam bio u Splitu. (2) Adding a preposition: "u prošle godine", "na prvog svibnja" — the genitive needs none. (3) Giving a feminine noun the masculine ending: "prošlog godine", "svakog večeri" — godina and večer are feminine: prošle godine, svake večeri. (4) A date with the ordinal in the nominative: "Rođena sam peti ožujka" — the ordinal goes into the genitive: petog ožujka.',
      highlight: 'Prošle godine sam bio u Splitu.',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "___ smo bili na Visu." (last summer)',
          options: ['Prošlog ljeta', 'Prošlom ljetu', 'U prošlog ljeta', 'Prošla ljeta'],
          correct: 0,
          explanation: 'Ljeto is neuter: prošlog ljeta, with no preposition.',
        },
        {
          q: 'Complete: "Rođena sam ___ ožujka." (on the fifth)',
          options: ['peti', 'petom', 'petog', 'peta'],
          correct: 2,
          explanation: 'In a date the ordinal stands in the genitive: petog ožujka.',
        },
        {
          q: 'Complete: "Vidimo se ___." (next week)',
          options: ['idući tjedna', 'idućeg tjedna', 'idućem tjednu', 'iduće tjedna'],
          correct: 1,
          explanation:
            'Tjedan is masculine; adjective and noun both take the genitive: idućeg tjedna. (The accusative idući tjedan is also correct, but "idući tjedna" mixes two cases.)',
        },
        {
          q: 'Complete: "___ smo ostali budni do jutra." (that night)',
          options: ['Ta noć', 'Toj noći', 'Tog noći', 'Te noći'],
          correct: 3,
          explanation: 'Noć is feminine, so the feminine genitive: te noći.',
        },
        {
          q: 'Complete: "___ baka dolazi k nama na more." (every year)',
          options: ['Svakog godine', 'Svake godine', 'Svaka godina', 'Svakoj godini'],
          correct: 1,
          explanation: 'Godina is feminine: svake godine.',
        },
        {
          q: 'Complete: "Božić je dvadeset ___ prosinca." (fifth)',
          options: ['petog', 'peti', 'petom', 'pete'],
          correct: 0,
          explanation: 'Dvadeset petog prosinca — the last word of the ordinal is in the genitive.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Time in the Genitive — Key Takeaways',
      points: [
        'No preposition: prošle godine, ove zime, idućeg tjedna, tog dana',
        'Feminine nouns: -e on both words; masculine and neuter: -og (-eg) + -a',
        'Every: svakog dana, svake večeri — svaki dan is also fine',
        'Dates: ordinal and month in the genitive — petog ožujka, 5. ožujka',
        'Stories start with jednog dana, te zime, prošlog ljeta',
        'Plural: ovih dana, prošlih godina',
      ],
    },
  ],
};

const P_TIME_GENITIVE = {
  worked: [
    {
      title: 'A Memory From Last Summer',
      problem: 'Prevedi: "Last summer we were in Split."',
      en: 'Last summer we were in Split.',
      steps: [
        {
          label: 'The time phrase',
          text: 'Last summer: prošli + ljeto. Ljeto is neuter, so both go into the genitive: prošlog ljeta.',
        },
        {
          label: 'No preposition',
          text: 'The genitive alone says "when"; nothing goes in front of it.',
        },
        {
          label: 'Word order',
          text: 'The time phrase opens the sentence, so the little word smo comes right after it, then bili and the place.',
        },
      ],
      answer: 'Prošlog ljeta smo bili u Splitu.',
    },
    {
      title: 'A Birthday',
      problem: 'Prevedi: "My brother was born on the twentieth of April."',
      en: 'My brother was born on the twentieth of April.',
      steps: [
        {
          label: 'The month',
          text: 'April is travanj; its genitive is travnja (the fleeting a drops).',
        },
        {
          label: 'The ordinal',
          text: 'Twentieth is dvadeseti; in a date it goes into the genitive: dvadesetog.',
        },
        {
          label: 'The sentence',
          text: 'Moj brat je rođen + the date, with no preposition.',
        },
      ],
      answer: 'Moj brat je rođen dvadesetog travnja.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: '___ sam završila školu. (that year)',
        options: ['Te godine', 'Tog godine', 'Ta godina', 'Toj godini'],
        correct: 0,
        hint: 'Godina is feminine; both words need the feminine genitive ending.',
        explanation: 'Te godine — feminine genitive.',
      },
      {
        q: '___ idemo na skijanje. (this winter)',
        options: ['Ova zima', 'Ove zime', 'Ovog zime', 'Ovoj zimi'],
        correct: 1,
        hint: 'Zima is feminine; no preposition, genitive on both words.',
        explanation: 'Ove zime.',
      },
      {
        q: '___ sam na tržnici srela svoju učiteljicu. (one day)',
        options: ['Jedan dana', 'Jednom danu', 'Jednog dana', 'Jedne dana'],
        correct: 2,
        hint: 'Dan is masculine: the adjective takes -og and the noun -a.',
        explanation: 'Jednog dana — the story opener.',
      },
      {
        q: 'Praznik rada slavi se ___ svibnja. (on the first)',
        options: ['prvi', 'prvom', 'prva', 'prvog'],
        correct: 3,
        hint: 'In a date both the ordinal and the month are genitive.',
        explanation: 'prvog svibnja.',
      },
      {
        q: '___ dolaze nam gosti. (next month)',
        options: [
          'Sljedećeg mjeseca',
          'Sljedećog mjeseca',
          'Sljedeći mjeseca',
          'Sljedećem mjesecu',
        ],
        correct: 0,
        hint: 'After a soft consonant like ć the masculine ending is spelt with e, not o.',
        explanation: 'Sljedećeg mjeseca.',
      },
      {
        q: '___ imam jako puno posla. (these days)',
        options: ['Ovi dana', 'Ovih dana', 'Ovim danima', 'Ovi dani'],
        correct: 1,
        hint: 'This is a plural time phrase in the genitive; the adjective ends in -ih.',
        explanation: 'Ovih dana — genitive plural.',
      },
      {
        q: 'Baka nam je pričala priče ___. (every evening)',
        options: ['svakog večeri', 'svaka večer', 'svake večeri', 'svakoj večeri'],
        correct: 2,
        hint: 'Večer looks masculine, but it is feminine — like noć.',
        explanation: 'svake večeri.',
      },
      {
        type: 'type',
        q: '____ godine sam se preselio u Zadar. (last)',
        answer: 'Prošle',
        hint: 'Godina is feminine; the word for "last" takes the feminine genitive ending -e.',
        explanation: 'Prošle godine — feminine genitive.',
      },
      {
        type: 'type',
        q: '____ ljeta smo bili na Hvaru. (last)',
        answer: 'Prošlog',
        accept: ['Prošloga'],
        hint: 'Ljeto is neuter; the adjective takes the masculine/neuter genitive ending.',
        explanation: 'Prošlog ljeta (or prošloga ljeta).',
      },
      {
        type: 'type',
        q: 'Vidimo se idućeg ____. (week)',
        answer: 'tjedna',
        hint: 'Tjedan loses its fleeting a when an ending is added.',
        explanation: 'idućeg tjedna — genitive of tjedan.',
      },
      {
        type: 'type',
        q: 'Rođen sam petog ____. (March)',
        answer: 'ožujka',
        hint: 'March is ožujak; in a date it goes into the genitive and loses its fleeting a.',
        explanation: 'petog ožujka.',
      },
      {
        type: 'type',
        q: '____ noći nisam mogao spavati. (that)',
        answer: 'Te',
        hint: 'Noć is feminine; the genitive of ta is short.',
        explanation: 'Te noći — feminine genitive of ta.',
      },
      {
        q: 'Which word means "the day before yesterday"?',
        options: ['preksutra', 'prekjučer', 'oduvijek', 'noću'],
        correct: 1,
        hint: 'jučer is yesterday; prek- adds one more day.',
        explanation: 'prekjučer — the day before yesterday; preksutra is the day after tomorrow.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Doselili smo se u Zagreb ___." (last year)',
      options: ['prošlog godine', 'prošla godina', 'prošloj godini', 'prošle godine'],
      correct: 3,
      explanation: 'Godina is feminine: prošle godine.',
    },
    {
      q: 'Complete: "___ sam završio fakultet." (that year)',
      options: ['Te godine', 'Tog godine', 'Ta godina', 'Toj godini'],
      correct: 0,
      explanation: 'The feminine genitive of ta godina: te godine.',
    },
    {
      q: 'Complete: "___ idemo na more." (this summer)',
      options: ['Ove ljeta', 'Ovoj ljetu', 'Ovog ljeta', 'Ovo ljeta'],
      correct: 2,
      explanation: 'Ljeto is neuter: ovog ljeta.',
    },
    {
      q: 'Complete: "___ sam srela starog prijatelja." (one day)',
      options: ['Jedan dana', 'Jednog dana', 'Jednom danu', 'Jedne dana'],
      correct: 1,
      explanation: 'Dan is masculine: jednog dana.',
    },
    {
      q: 'Complete: "Praznik rada slavi se ___ svibnja." (first)',
      options: ['prvom', 'prvi', 'prva', 'prvog'],
      correct: 3,
      explanation: 'The ordinal in a date is genitive: prvog svibnja.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Svakog jutra pijem kavu na terasi.',
        'Svakoj jutru pijem kavu na terasi.',
        'Svake jutra pijem kavu na terasi.',
        'U svakog jutra pijem kavu na terasi.',
      ],
      correct: 0,
      explanation: 'Jutro is neuter: svakog jutra, with no preposition.',
    },
  ],
  vocab: [
    ['prošli', 'last, past', 'Prošle godine sam bio u Splitu.'],
    ['idući', 'next', 'Idućeg tjedna idemo na more.'],
    ['sljedeći', 'next, following', 'Sljedećeg mjeseca dolaze gosti.'],
    ['svaki', 'every, each', 'Svakog dana učim hrvatski.'],
    ['jednog dana', 'one day', 'Jednog dana ću živjeti na moru.'],
    ['ovih dana', 'these days, lately', 'Ovih dana imam puno posla.'],
    ['rođen / rođena', 'born', 'Rođena sam petog ožujka.'],
    ['tjedan', 'week (gen. tjedna)', 'Vidimo se idućeg tjedna.'],
    ['travanj', 'April (gen. travnja)', 'Rođen je dvadesetog travnja.'],
    ['sjećanje', 'memory', 'To je moje najljepše sjećanje.'],
    ['prekjučer', 'the day before yesterday', 'Prekjučer sam bila kod bake.'],
    ['zauvijek', 'for ever', 'Ostat ćemo prijatelji zauvijek.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 27 · verbs-with-genitive — bojati se, sjećati se, sramiti se, čuvati se, odreći se
// ─────────────────────────────────────────────────────────────────────────────
const L_VERBS_WITH_GENITIVE = {
  id: 'verbs-with-genitive',
  title: 'Bojim se mraka — Verbs That Take the Genitive',
  subtitle: 'Fear, memory, shame, caution and giving something up',
  icon: '🕷️',
  level: 'B1',
  duration: '~7 min',
  color: '#334155',
  bg: '#f1f5f9',
  slides: [
    {
      type: 'intro',
      title: 'Čega se bojiš?',
      body: 'What are you afraid of? In English you are afraid OF something, you remember something, you are ashamed OF something. Croatian expresses all of these with a small group of verbs that put the thing in the genitive: Bojim se mraka. Sjećam se tog dana. Sramim se toga. Most of them are reflexive, with se, and one of them, bojati se, also shows you a new present pattern: -ati → -im.',
      icon: '🕷️',
    },
    {
      type: 'rule',
      title: 'Fear: bojati se and plašiti se + Genitive',
      body: 'Bojati se means to be afraid, and what you fear goes into the genitive: Bojim se mraka (the dark). Bojim se visine (heights). Bojim se pasa (dogs). Moja sestra se boji zmija i pauka. The question word is čega, the genitive of što: Čega se bojiš? Plašiti se means the same and works the same way: Plašim se ispita. And with a person: Ne bojim se njega.',
      highlight: 'Čega se bojiš?',
    },
    {
      type: 'rule',
      title: 'A New Present: -ati → -im',
      body: 'Most verbs in -ati have a present in -am: čitati → čitam, spavati → spavam. A small group take -im instead, and bojati se is one of them: bojim se, bojiš se, boji se, bojimo se, bojite se, boje se. The others you will use most are držati (to hold) → držim, ležati (to lie) → ležim, trčati (to run) → trčim, bježati (to run away) → bježim, and stajati (to stand) → stojim. Also zviždati (to whistle) → zviždim, drhtati (to shiver) → drhtim, and for animals and weather: pas reži (the dog growls), kiša pljušti (the rain pours). There is no rule that tells you which -ati verbs belong here, so learn the present with the infinitive. Their past is regular: bojao se, bojala se; držao, ležao, trčao, stajao.',
      highlight: 'bojati se → bojim se',
    },
    {
      type: 'table',
      title: 'The -ati → -im Present',
      headers: ['person', 'bojati se', 'držati (hold)', 'ležati (lie)', 'stajati (stand)'],
      rows: [
        ['ja', 'bojim se', 'držim', 'ležim', 'stojim'],
        ['ti', 'bojiš se', 'držiš', 'ležiš', 'stojiš'],
        ['on / ona', 'boji se', 'drži', 'leži', 'stoji'],
        ['mi', 'bojimo se', 'držimo', 'ležimo', 'stojimo'],
        ['vi', 'bojite se', 'držite', 'ležite', 'stojite'],
        ['oni / one', 'boje se', 'drže', 'leže', 'stoje'],
      ],
    },
    {
      type: 'rule',
      title: 'Memory: sjećati se and sjetiti se',
      body: 'Sjećati se (imperfective, present sjećam se) means to remember, to have a memory of something: Sjećam se tog ljeta. Sjećaš li se naše prve učiteljice? Sjetiti se (perfective) means to remember at one moment, to think of it: Sjetio sam se njegove adrese. Nisam se sjetila tvog rođendana — oprosti! Both take the genitive, never "o": you remember a thing, not "about" it. Compare zaboraviti (to forget), which takes the accusative: Zaboravio sam adresu.',
      highlight: 'Sjećam se tog ljeta.',
    },
    {
      type: 'rule',
      title: 'Shame, Caution, Giving Up',
      body: 'Three more verbs take the genitive. Sramiti se (to be ashamed of; present sramim se): Ne sramim se svojih pogrešaka. Čuvati se (to beware of, to watch out for; present čuvam se): Čuvaj se psa! Čuvajte se džeparoša! — two signs you will see. Odreći se (to give something up; present odreknem se, past odrekao se): Odrekla sam se šećera. Moj djed se odrekao cigareta. Two more: stidjeti se is another word for to be ashamed (present stidim se): Stidim se toga. Riješiti se and osloboditi se mean to get rid of, to free yourself from: Riješio sam se starog auta. Napokon sam se oslobodila straha.',
      highlight: 'Čuvaj se psa!',
    },
    {
      type: 'rule',
      title: 'Pronouns With These Verbs',
      body: 'A pronoun after these verbs is in the genitive. The long forms are mene, tebe, njega, nje, nas, vas, njih: Ne bojim se tebe. The short forms me, te, ga, je (her), nas, vas, ih sit with the other little words in second place, and they come BEFORE se: Bojim ga se (I am afraid of him). Sjećam te se. Sjećaš li me se? (Do you remember me?) Ne boj ih se! (Don’t be afraid of them!) As a one-word answer use the long form: Koga se sjećaš? — Nje. (Whom do you remember? — Her.)',
      highlight: 'Sjećaš li me se?',
    },
    {
      type: 'example',
      title: 'Fears and Memories',
      items: [
        {
          hr: 'Kad sam bio mali, bojao sam se mraka.',
          en: 'When I was little, I was afraid of the dark.',
          note: 'mraka — genitive of mrak after bojati se',
        },
        {
          hr: 'Moja sestra se boji visine pa nikad ne leti avionom.',
          en: 'My sister is afraid of heights, so she never flies.',
          note: 'visine — genitive of visina',
        },
        {
          hr: 'Čega se najviše bojiš?',
          en: 'What are you most afraid of?',
          note: 'čega — the genitive of što',
        },
        {
          hr: 'Djeca se ne boje pasa, ali se boje pauka.',
          en: 'The children aren’t afraid of dogs, but they are afraid of spiders.',
          note: 'pasa and pauka — genitive plural',
        },
        {
          hr: 'Sjećam se svakog detalja tog putovanja.',
          en: 'I remember every detail of that journey.',
          note: 'svakog detalja — genitive after sjećati se',
        },
        {
          hr: 'Sjećaš li me se? Bili smo zajedno u školi.',
          en: 'Do you remember me? We were at school together.',
          note: 'me — the short genitive, before se',
        },
      ],
    },
    {
      type: 'example',
      title: 'Shame, Caution and Giving Up',
      items: [
        {
          hr: 'Ne sramim se svojih pogrešaka, iz njih učim.',
          en: 'I am not ashamed of my mistakes; I learn from them.',
          note: 'svojih pogrešaka — genitive plural after sramiti se',
        },
        {
          hr: 'Na vratima piše: Čuvaj se psa!',
          en: 'The sign on the gate says: Beware of the dog!',
          note: 'psa — genitive after čuvati se',
        },
        {
          hr: 'Odrekao sam se cigareta prije dvije godine.',
          en: 'I gave up cigarettes two years ago.',
          note: 'cigareta — genitive plural after odreći se',
        },
        {
          hr: 'Nisam se sjetila tvog rođendana, jako mi je žao.',
          en: 'I didn’t remember your birthday, I’m really sorry.',
          note: 'tvog rođendana — genitive after sjetiti se',
        },
        {
          hr: 'Baka drži unuka za ruku dok prelaze cestu.',
          en: 'Grandma holds her grandson’s hand while they cross the road.',
          note: 'drži — the on form of držati, an -ati → -im verb',
        },
        {
          hr: 'Mačka leži na suncu, a pas trči po vrtu.',
          en: 'The cat is lying in the sun and the dog is running round the garden.',
          note: 'leži and trči — -ati → -im verbs',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Bojim se ___." (the dark)',
      options: ['mrak', 'mraku', 'mraka', 'mrakom'],
      correct: 2,
      explanation: 'Bojati se takes the genitive: mraka.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which is the ja form of bojati se?',
      options: ['bojam se', 'bojim se', 'bojem se', 'bojajem se'],
      correct: 1,
      explanation: 'Bojati se is one of the -ati verbs with a present in -im: bojim se.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The accusative, as if the verb took an object: "Bojim se mrak", "Sjećam se taj dan" — the genitive: mraka, tog dana. (2) The ordinary -am present: "bojam se" — it is bojim se. But do not over-apply it: spavati is spavam, never "spavim". (3) English "remember about": "Sjećam se o tom danu" — no preposition: Sjećam se tog dana. (4) Forgetting se: "Bojim pasa" — say Bojim se pasa.',
      highlight: 'Sjećam se tog dana',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Sjećaš li se ___?" (that day)',
          options: ['taj dan', 'tog dana', 'tom danu', 'tim danom'],
          correct: 1,
          explanation: 'Sjećati se takes the genitive: tog dana.',
        },
        {
          q: 'Complete: "Moj brat se ___ pasa." (is afraid)',
          options: ['boja', 'bojaju', 'bojim', 'boji'],
          correct: 3,
          explanation: 'The on form of bojati se: boji se.',
        },
        {
          q: 'Complete: "Čuvajte se ___!" (pickpockets)',
          options: ['džeparoša', 'džeparoši', 'džeparoše', 'džeparošima'],
          correct: 0,
          explanation: 'Čuvati se takes the genitive; in the plural: džeparoša.',
        },
        {
          q: 'Complete: "Odrekla sam se ___." (sugar)',
          options: ['šećer', 'šećerom', 'šećera', 'šećeru'],
          correct: 2,
          explanation: 'Odreći se takes the genitive: šećera.',
        },
        {
          q: 'Complete: "Djeca ___ ruke ispod stola." (hold)',
          options: ['drže', 'držu', 'držaju', 'držimo'],
          correct: 0,
          explanation: 'Držati is an -ati → -im verb; the oni form is drže.',
        },
        {
          q: 'Which sentence says "Do you remember me?"',
          options: [
            'Sjećaš li se me?',
            'Sjećaš li me se?',
            'Sjećaš li mene se?',
            'Sjećaš me li se?',
          ],
          correct: 1,
          explanation: 'The short pronoun me comes after li and before se: Sjećaš li me se?',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Verbs With the Genitive — Key Takeaways',
      points: [
        'bojati se, plašiti se + genitive: Bojim se mraka. Čega se bojiš?',
        'sjećati se / sjetiti se + genitive, no preposition: Sjećam se tog dana',
        'sramiti se / stidjeti se, čuvati se, odreći se, riješiti se, osloboditi se + genitive',
        'bojati se, držati, ležati, trčati, bježati: -ati → -im; stajati → stojim',
        'spavati is not in this group: spavam',
        'Short pronouns me, te, ga, je, nas, vas, ih go before se: Bojim ga se. Sjećaš li me se?',
      ],
    },
  ],
};

const P_VERBS_WITH_GENITIVE = {
  worked: [
    {
      title: 'A Fear',
      problem: 'Prevedi: "My daughter is afraid of spiders."',
      en: 'My daughter is afraid of spiders.',
      steps: [
        {
          label: 'The verb',
          text: 'To be afraid is bojati se, an -ati → -im verb: the ona form is boji se.',
        },
        {
          label: 'The case',
          text: 'What you fear goes into the genitive. Spiders are many: the genitive plural of pauk is pauka.',
        },
        {
          label: 'Word order',
          text: 'Se is a little word and goes second: Moja kći se boji…',
        },
      ],
      answer: 'Moja kći se boji pauka.',
    },
    {
      title: 'A Memory With a Pronoun',
      problem: 'Prevedi: "I remember him well."',
      en: 'I remember him well.',
      steps: [
        {
          label: 'The verb',
          text: 'To remember is sjećati se; ja → sjećam se.',
        },
        {
          label: 'The pronoun',
          text: 'Him goes into the genitive. The short form ga is used without emphasis.',
        },
        {
          label: 'The order',
          text: 'Ga comes before se in the cluster after the verb: Sjećam ga se dobro.',
        },
      ],
      answer: 'Sjećam ga se dobro.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Ona se ___ visine. (is afraid — plašiti se)',
        options: ['plaša', 'plašu', 'plaši', 'plašimo'],
        correct: 2,
        hint: 'This is an ordinary -iti verb; the ona form ends in -i.',
        explanation: 'plaši se.',
      },
      {
        q: 'Sramim se ___. (that)',
        options: ['to', 'toga', 'tome', 'tim'],
        correct: 1,
        hint: 'Sramiti se takes the genitive; the genitive of to is longer.',
        explanation: 'toga — genitive of to.',
      },
      {
        q: 'Ne sjećam se njegove ___. (address)',
        options: ['adresa', 'adresu', 'adresi', 'adrese'],
        correct: 3,
        hint: 'After sjećati se, a feminine noun takes its genitive ending.',
        explanation: 'adrese — genitive of adresa.',
      },
      {
        q: 'Mačka ___ na kauču cijeli dan. (lies)',
        options: ['leži', 'leža', 'ležaje', 'ležem'],
        correct: 0,
        hint: 'Ležati belongs to the -ati verbs with an -im present.',
        explanation: 'leži — the on/ona form of ležati.',
      },
      {
        q: '___ se bojiš? (what)',
        options: ['Što', 'Čemu', 'Čega', 'Čime'],
        correct: 2,
        hint: 'You need the genitive of što.',
        explanation: 'Čega se bojiš?',
      },
      {
        q: 'Nisam se ___ tvog rođendana. (remembered — a man speaking)',
        options: ['sjetiti', 'sjetio', 'sjetim', 'sjeća'],
        correct: 1,
        hint: 'After nisam you need the past participle, masculine.',
        explanation: 'Nisam se sjetio — past tense of sjetiti se.',
      },
      {
        q: 'Zaboravio sam ___. (the address)',
        options: ['adresu', 'adrese', 'adresi', 'adresom'],
        correct: 0,
        hint: 'Careful: zaboraviti is not one of the genitive verbs.',
        explanation: 'adresu — zaboraviti takes the accusative.',
      },
      {
        type: 'type',
        q: 'Bojim se ____. (the dark)',
        answer: 'mraka',
        hint: 'Mrak goes into the genitive: add -a.',
        explanation: 'mraka — genitive of mrak.',
      },
      {
        type: 'type',
        q: 'Mi se ____ ispita. (are afraid — bojati se)',
        answer: 'bojimo',
        hint: 'This -ati verb has an -im present; take the mi ending.',
        explanation: 'bojimo se.',
      },
      {
        type: 'type',
        q: 'Odrekao sam se ____. (meat)',
        answer: 'mesa',
        hint: 'Meso is neuter; its genitive ends in -a.',
        explanation: 'mesa — genitive of meso.',
      },
      {
        type: 'type',
        q: 'Ja ____ torbu, a ti otvori vrata. (hold)',
        answer: 'držim',
        hint: 'Držati is an -ati → -im verb; the ja ending is -im.',
        explanation: 'držim.',
      },
      {
        q: 'Napokon sam se ___ starog auta. (got rid of — a man speaking)',
        options: ['riješio', 'riješila', 'riješiti', 'rješavam'],
        correct: 0,
        hint: 'A man speaking, past tense: the masculine past form.',
        explanation: 'Riješio sam se starog auta — riješiti se + genitive.',
      },
      {
        q: 'Sjećaš li se Ane? — Da, sjećam ___ se.',
        options: ['je', 'ju', 'joj', 'nju'],
        correct: 0,
        hint: 'The short GENITIVE of ona, before se.',
        explanation: 'Sjećam je se — je is the short genitive of ona.',
      },
      {
        type: 'type',
        q: 'Sjećaš li ____ se? Bili smo susjedi. (me — short form)',
        answer: 'me',
        hint: 'The short genitive of ja, which comes before se.',
        explanation: 'Sjećaš li me se?',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Ne bojim se ___." (dogs)',
      options: ['psi', 'pasa', 'psima', 'pse'],
      correct: 1,
      explanation: 'Bojati se takes the genitive; the genitive plural of pas is pasa.',
    },
    {
      q: 'Complete: "Ne sjećam se njegove ___." (address)',
      options: ['adresa', 'adresi', 'adresu', 'adrese'],
      correct: 3,
      explanation: 'Sjećati se takes the genitive: adrese.',
    },
    {
      q: 'Complete: "Sramim se ___." (that)',
      options: ['toga', 'to', 'tome', 'tim'],
      correct: 0,
      explanation: 'Sramiti se takes the genitive: toga.',
    },
    {
      q: 'Complete: "Djeca ___ po parku." (run)',
      options: ['trčaju', 'trču', 'trče', 'trčimo'],
      correct: 2,
      explanation: 'Trčati is an -ati → -im verb; the oni form is trče.',
    },
    {
      q: 'Complete: "Nisam se ___ tvog rođendana." (remembered — a man speaking)',
      options: ['sjetiti', 'sjetim', 'sjeća', 'sjetio'],
      correct: 3,
      explanation: 'After nisam se, the past participle: sjetio.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Sjećam se o našem prvom susretu.',
        'Sjećam se našeg prvog susreta.',
        'Sjećam se naš prvi susret.',
        'Sjećam našeg prvog susreta.',
      ],
      correct: 1,
      explanation: 'Sjećati se takes the genitive with no preposition, and it needs se.',
    },
  ],
  vocab: [
    ['bojati se', 'to be afraid (bojim se)', 'Bojim se mraka.'],
    ['plašiti se', 'to be afraid', 'Plašim se ispita.'],
    ['sjećati se', 'to remember (sjećam se)', 'Sjećam se tog ljeta.'],
    ['sjetiti se', 'to remember, to think of', 'Sjetio sam se njegove adrese.'],
    ['sramiti se', 'to be ashamed', 'Ne sramim se svojih pogrešaka.'],
    ['čuvati se', 'to beware of', 'Čuvaj se psa!'],
    ['odreći se', 'to give up (odreknem se)', 'Odrekla sam se šećera.'],
    ['držati', 'to hold (držim)', 'Držim kišobran.'],
    ['ležati', 'to lie (ležim)', 'Mačka leži na suncu.'],
    ['visina', 'height', 'Bojim se visine.'],
    ['stidjeti se', 'to be ashamed (stidim se)', 'Stidim se toga.'],
    ['riješiti se', 'to get rid of', 'Riješio sam se starog auta.'],
    ['bježati', 'to run away (bježim)', 'Mačka bježi od psa.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 31 · nouns-en-et — ime/imena, vrijeme/vremena, dijete/djeteta, tele/teleta
// ─────────────────────────────────────────────────────────────────────────────
const L_NOUNS_EN_ET = {
  id: 'nouns-en-et',
  title: 'Ime, imena; dijete, djeteta — Neuter Nouns That Grow',
  subtitle: 'The -en- of ime and vrijeme, the -et- of dijete and the young animals',
  icon: '🍼',
  level: 'B1',
  duration: '~6 min',
  color: '#be185d',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'Words That Get Longer',
      body: 'A small family of neuter nouns ending in -e grows a syllable as soon as it takes an ending. You already know one from A1: ime → imena. The same -en- appears in vrijeme (time, weather) and rame (shoulder), and a different extension, -et-, appears in dijete (child) and in the words for young animals: tele (calf), pile (chick), janje (lamb). Some of the most common words in the language are here — you cannot say "I have no time" or "give the child some water" without them.',
      icon: '🍼',
    },
    {
      type: 'rule',
      title: '-me Nouns Add -en-',
      body: 'Neuter nouns ending in -me add -en- before every ending, in the singular and the plural: ime → imena, imenu, imenom; prezime (surname) → prezimena, prezimenu, prezimenom; rame → ramena, ramenu, ramenom; pleme (tribe) → plemena; sjeme (seed) → sjemena; sljeme (the ridge of a roof, and the top of Medvednica above Zagreb) → sljemena. Vrijeme also shortens its ije to je: vremena, vremenu, vremenom. The nominative and accusative singular are the bare word: Kako ti je ime? Napiši svoje ime.',
      highlight: 'ime → imena, imenu, imenom',
    },
    {
      type: 'table',
      title: 'Ime and Vrijeme',
      headers: ['case', 'ime (sg.)', 'ime (pl.)', 'vrijeme (sg.)', 'vrijeme (pl.)'],
      rows: [
        ['nominative', 'ime', 'imena', 'vrijeme', 'vremena'],
        ['genitive', 'imena', 'imena', 'vremena', 'vremena'],
        ['dative / locative', 'imenu', 'imenima', 'vremenu', 'vremenima'],
        ['accusative', 'ime', 'imena', 'vrijeme', 'vremena'],
        ['instrumental', 'imenom', 'imenima', 'vremenom', 'vremenima'],
      ],
    },
    {
      type: 'rule',
      title: 'Vrijeme in Everyday Phrases',
      body: 'Vrijeme means both time and weather, and the -en- forms are everywhere. Nemam vremena — I have no time (genitive after nemati). Imaš li vremena za kavu? Stigli smo na vrijeme — we arrived on time. Za vrijeme ručka — during lunch. U zadnje vrijeme — lately. U stara vremena — in the old days. And the weather: Kakvo je vrijeme? Po lijepom vremenu idemo na izlet.',
      highlight: 'Nemam vremena.',
    },
    {
      type: 'rule',
      title: 'Dijete and the Young: -et-',
      body: 'Nouns for the young of people and animals add -et-: dijete → djeteta, djetetu, djetetom (ije shortens to je, as in vrijeme). The same with tele (calf) → teleta, pile (chick) → pileta, janje (lamb) → janjeta, prase (piglet) → praseta, mače (kitten) → mačeta, štene (puppy) → šteneta, unuče (grandchild) → unučeta, pače (duckling) → pačeta, lane (fawn) → laneta, jare (kid goat) → jareta, kumče (godchild) → kumčeta, novorođenče (newborn) → novorođenčeta, siroče (orphan) → siročeta. A few words that are not young beings do it too: uže (rope) → užeta, jaje (egg) → jajeta, dugme (button) → dugmeta, drvo (tree) → drveta.',
      highlight: 'dijete → djeteta, djetetu, djetetom',
    },
    {
      type: 'table',
      title: 'Dijete and Tele in the Singular',
      headers: ['case', 'dijete (child)', 'tele (calf)', 'example'],
      rows: [
        ['nominative', 'dijete', 'tele', 'Dijete spava.'],
        ['genitive', 'djeteta', 'teleta', 'igračka mog djeteta'],
        ['dative / locative', 'djetetu', 'teletu', 'Daj djetetu vode.'],
        ['accusative', 'dijete', 'tele', 'Vidim dijete.'],
        ['instrumental', 'djetetom', 'teletom', 's djetetom'],
      ],
    },
    {
      type: 'rule',
      title: 'The Plural: djeca and the Collective -ad',
      body: 'Dijete has the plural djeca, as you know: Djeca se igraju. Djeca is declined like the singular of žena — djece, djeci, djecu, djecom: Kupila sam djeci sladoled. Idem u park s djecom. With numbers you count it with dvoje, troje: dvoje djece. The young animals usually have a collective plural in -ad, which is grammatically ONE feminine noun: telad, janjad, prasad, štenad, unučad, pilad. It takes a singular verb: Telad je na livadi. Janjad pase. For chicks people also say pilići (from pilić), and for kittens mačići. The -me nouns have an ordinary plural: imena, ramena, plemena.',
      highlight: 'Telad je na livadi.',
    },
    {
      type: 'example',
      title: 'Names, Time and Shoulders',
      items: [
        {
          hr: 'Ne sjećam se njegova imena, ali znam njegovo lice.',
          en: 'I don’t remember his name, but I know his face.',
          note: 'imena — genitive of ime after sjećati se',
        },
        {
          hr: 'Pod kojim imenom ste rezervirali stol?',
          en: 'Under what name did you book the table?',
          note: 'imenom — instrumental of ime',
        },
        {
          hr: 'Nažalost, danas nemam vremena za kavu.',
          en: 'Unfortunately I have no time for coffee today.',
          note: 'vremena — genitive of vrijeme after nemati',
        },
        {
          hr: 'Po ovakvom vremenu nitko ne ide na plažu.',
          en: 'In weather like this nobody goes to the beach.',
          note: 'vremenu — locative of vrijeme',
        },
        {
          hr: 'Nosi torbu na lijevom ramenu.',
          en: 'He carries his bag on his left shoulder.',
          note: 'ramenu — locative of rame',
        },
        {
          hr: 'U stara vremena ljudi su živjeli bez struje.',
          en: 'In the old days people lived without electricity.',
          note: 'vremena — accusative plural of vrijeme',
        },
      ],
    },
    {
      type: 'example',
      title: 'Children and Young Animals',
      items: [
        {
          hr: 'Daj djetetu malo vode, žedno je.',
          en: 'Give the child some water, it’s thirsty.',
          note: 'djetetu — dative of dijete',
        },
        {
          hr: 'Došla je na sastanak s djetetom.',
          en: 'She came to the meeting with her child.',
          note: 'djetetom — instrumental of dijete',
        },
        {
          hr: 'Majka se brine za bolesno dijete.',
          en: 'The mother is worried about her sick child.',
          note: 'dijete — the accusative is the bare word',
        },
        {
          hr: 'Krava stoji na livadi pokraj svog teleta.',
          en: 'The cow is standing in the meadow next to her calf.',
          note: 'teleta — genitive of tele after pokraj',
        },
        {
          hr: 'Djevojčica se igra s malim mačetom.',
          en: 'The little girl is playing with a small kitten.',
          note: 'mačetom — instrumental of mače',
        },
        {
          hr: 'Na farmi je bilo puno janjadi i prasadi.',
          en: 'There were a lot of lambs and piglets on the farm.',
          note: 'janjadi and prasadi — genitive of the collectives janjad and prasad',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Nemam ___ za kavu." (time)',
      options: ['vrijeme', 'vremena', 'vrijemena', 'vremenu'],
      correct: 1,
      explanation: 'Nemati takes the genitive. Vrijeme adds -en- and shortens ije to je: vremena.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Daj ___ malo vode." (the child)',
      options: ['dijete', 'djetu', 'djetetu', 'dijetetu'],
      correct: 2,
      explanation: 'Dijete adds -et- and shortens ije to je: djetetu.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Dropping the extension: "Daj djetu vode", "na ramu" — it is djetetu, na ramenu. (2) Keeping the long ije before the extension: "dijeteta", "vrijemena" — the oblique forms shorten it: djeteta, vremena. (3) Building a plural from dijete: "djeteta" for children — the plural is djeca. (4) Giving telad or janjad a plural verb: "Telad su na livadi" — the collective is one feminine noun: Telad je na livadi.',
      highlight: 'djetetu, na ramenu',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Sjećaš li se njegova ___?" (name)',
          options: ['ime', 'imena', 'imenu', 'ima'],
          correct: 1,
          explanation: 'Sjećati se takes the genitive; ime adds -en-: imena.',
        },
        {
          q: 'Complete: "Torba mi visi na ___." (shoulder)',
          options: ['rame', 'ramu', 'ramenom', 'ramenu'],
          correct: 3,
          explanation: 'Na + locative, and rame adds -en-: ramenu.',
        },
        {
          q: 'Complete: "Seljak je došao s ___." (the calf)',
          options: ['teletom', 'telom', 'teletu', 'tele'],
          correct: 0,
          explanation: 'S + instrumental, and tele adds -et-: teletom.',
        },
        {
          q: 'Complete: "Oni imaju troje ___." (children)',
          options: ['djeca', 'djeteta', 'djece', 'djecom'],
          correct: 2,
          explanation: 'Troje takes the genitive of djeca: djece.',
        },
        {
          q: 'Complete: "Majka sjedi pokraj bolesnog ___." (child)',
          options: ['dijete', 'djeteta', 'djetu', 'dijeteta'],
          correct: 1,
          explanation: 'Pokraj takes the genitive: djeteta, with ije shortened to je.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Telad su na livadi.',
            'Telad je na livadi.',
            'Teleta su na livadi.',
            'Tele su na livadi.',
          ],
          correct: 1,
          explanation: 'Telad is a collective, one feminine noun, so it takes je.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Nouns With -en- and -et- — Key Takeaways',
      points: [
        '-me nouns add -en-: ime → imena, rame → ramena, pleme → plemena',
        'vrijeme → vremena, vremenu: the ije shortens to je',
        'Nemam vremena; na vrijeme; za vrijeme ručka; u stara vremena',
        'The young add -et-: dijete → djeteta, tele → teleta, mače → mačeta',
        'Plural of dijete: djeca; young animals: telad, janjad — one feminine noun, singular verb',
        'The bare word stays in the nominative and accusative singular: ime, dijete',
      ],
    },
  ],
};

const P_NOUNS_EN_ET = {
  worked: [
    {
      title: 'A Name You Cannot Remember',
      problem: 'Prevedi: "I don’t remember his name."',
      en: 'I don’t remember his name.',
      steps: [
        {
          label: 'The verb',
          text: 'To remember is sjećati se, and it takes the genitive. Negated, for ja: ne sjećam se.',
        },
        {
          label: 'The noun',
          text: 'Ime adds -en- before every ending; the genitive ending is -a.',
        },
        {
          label: 'His',
          text: 'Njegov agrees with a neuter noun in the genitive: njegova (or njegovog).',
        },
      ],
      answer: 'Ne sjećam se njegova imena.',
    },
    {
      title: 'With the Child',
      problem: 'Prevedi: "She went to the doctor with the child."',
      en: 'She went to the doctor with the child.',
      steps: [
        {
          label: 'The preposition',
          text: 'With is s + instrumental.',
        },
        {
          label: 'The noun',
          text: 'Dijete adds -et- and shortens ije to je; the instrumental ending is -om.',
        },
        {
          label: 'The sentence',
          text: 'Otišla je liječniku — to a person, the dative — then s + the child.',
        },
      ],
      answer: 'Otišla je liječniku s djetetom.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Pod kojim ___ ste rezervirali? (name)',
        options: ['ime', 'imenom', 'imom', 'imenu'],
        correct: 1,
        hint: 'Pod takes the instrumental here, and the noun adds -en-.',
        explanation: 'pod kojim imenom.',
      },
      {
        q: 'Po lijepom ___ idemo na izlet. (weather)',
        options: ['vremenu', 'vrijemenu', 'vrijeme', 'vremenom'],
        correct: 0,
        hint: 'Po + locative; shorten ije to je and add -en-.',
        explanation: 'po lijepom vremenu.',
      },
      {
        q: 'Ovo je soba mog ___. (grandchild)',
        options: ['unuče', 'unuča', 'unučetu', 'unučeta'],
        correct: 3,
        hint: 'Genitive, and the young take -et-.',
        explanation: 'unučeta — genitive of unuče.',
      },
      {
        q: 'Napiši svoje ___ i prezime. (name)',
        options: ['ime', 'imena', 'imenu', 'imenom'],
        correct: 0,
        hint: 'This is the accusative singular: the bare word stays.',
        explanation: 'svoje ime — the accusative singular has no extension.',
      },
      {
        q: 'Djevojčica se igra s ___. (the kitten)',
        options: ['mače', 'mačom', 'mačetom', 'mačetu'],
        correct: 2,
        hint: 'S + instrumental, and the young animal adds -et-.',
        explanation: 'mačetom.',
      },
      {
        q: 'U stara ___ ljudi su putovali pješice. (times)',
        options: ['vrijemena', 'vremena', 'vremenu', 'vrijeme'],
        correct: 1,
        hint: 'Stara is plural; vrijeme shortens ije to je before -en-.',
        explanation: 'u stara vremena.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Janjad pasu na livadi.',
          'Janjad pase na livadi.',
          'Janjeta pasu na livadi.',
          'Janje pasu na livadi.',
        ],
        correct: 1,
        hint: 'The collective of janje is one feminine noun.',
        explanation: 'Janjad pase — singular verb.',
      },
      {
        q: 'Poslijepodne idem u park s ___. (the children)',
        options: ['djecama', 'djecom', 'djeci', 'djecima'],
        correct: 1,
        hint: 'Djeca is declined like the singular of žena.',
        explanation: 's djecom — like s ženom.',
      },
      {
        q: 'Kokoš je izvela ___. (her chicks, as one group)',
        options: ['pilad', 'pilada', 'piladi', 'pile'],
        correct: 0,
        hint: 'The collective -ad noun, here as the bare object.',
        explanation: 'pilad — the collective of pile, one feminine noun.',
      },
      {
        type: 'type',
        q: 'Nažalost, nemam ____ za kavu. (time)',
        answer: 'vremena',
        hint: 'Genitive after nemati; shorten ije to je and add -en-.',
        explanation: 'vremena.',
      },
      {
        type: 'type',
        q: 'Daj ____ malo vode. (the child)',
        answer: 'djetetu',
        hint: 'Dative; shorten ije to je and add -et- before the ending.',
        explanation: 'djetetu — dative of dijete.',
      },
      {
        type: 'type',
        q: 'Nosi torbu na lijevom ____. (shoulder)',
        answer: 'ramenu',
        hint: 'Na + locative; the noun adds -en- before the ending.',
        explanation: 'ramenu — locative of rame.',
      },
      {
        type: 'type',
        q: 'Ne sjećam se njegova ____. (name)',
        answer: 'imena',
        hint: 'Sjećati se takes the genitive; add -en- and the ending -a.',
        explanation: 'imena — genitive of ime.',
      },
      {
        type: 'type',
        q: 'Krava stoji pokraj svog ____. (calf)',
        answer: 'teleta',
        hint: 'Pokraj takes the genitive; the young animal adds -et-.',
        explanation: 'teleta — genitive of tele.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Na ___ nosim dvije torbe." (both shoulders)',
      options: ['ramima', 'ramena', 'ramenima', 'ramenom'],
      correct: 2,
      explanation: 'Na + locative plural; rame adds -en-: ramenima.',
    },
    {
      q: 'Complete: "Ovo je soba mog ___." (grandchild)',
      options: ['unučeta', 'unuče', 'unuča', 'unučetu'],
      correct: 0,
      explanation: 'Genitive, with -et-: unučeta.',
    },
    {
      q: 'Complete: "U stara ___ ljudi su živjeli drukčije." (times)',
      options: ['vrijemena', 'vremenu', 'vrijeme', 'vremena'],
      correct: 3,
      explanation: 'Plural vremena, with ije shortened to je.',
    },
    {
      q: 'Complete: "Napiši svoje ___ i prezime." (name)',
      options: ['imena', 'ime', 'imenu', 'imenom'],
      correct: 1,
      explanation: 'Accusative singular: the bare word ime.',
    },
    {
      q: 'Complete: "Djevojčica se igra s ___." (the kitten)',
      options: ['mačom', 'mačetu', 'mačetom', 'mače'],
      correct: 2,
      explanation: 'S + instrumental, with -et-: mačetom.',
    },
    {
      q: 'Complete: "Imaš li ___ za kavu?" (time)',
      options: ['vremena', 'vrijemena', 'vremenom', 'vremenima'],
      correct: 0,
      explanation: 'Imati li… in the sense "any time" takes the genitive: vremena.',
    },
  ],
  vocab: [
    ['ime', 'name (gen. imena)', 'Kako ti je ime?'],
    ['vrijeme', 'time; weather (gen. vremena)', 'Nemam vremena.'],
    ['rame', 'shoulder (gen. ramena)', 'Nosi torbu na ramenu.'],
    ['pleme', 'tribe (gen. plemena)', 'Hrvati su nekad živjeli u plemenima.'],
    ['dijete', 'child (gen. djeteta, pl. djeca)', 'Daj djetetu vode.'],
    ['tele', 'calf (gen. teleta)', 'Krava stoji pokraj teleta.'],
    ['janje', 'lamb (gen. janjeta)', 'Janje je na livadi.'],
    ['mače', 'kitten (gen. mačeta)', 'Igra se s mačetom.'],
    ['unuče', 'grandchild (gen. unučeta)', 'Ovo je soba mog unučeta.'],
    ['na vrijeme', 'on time', 'Stigli smo na vrijeme.'],
    ['prezime', 'surname (gen. prezimena)', 'Kako se piše vaše prezime?'],
    ['djeca', 'children (declined like žena: djeci, djecom)', 'Idem u park s djecom.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 32 · verbs-peci-sti — peći/pečem, reći/rečem, vući/vučem, krasti/kradem
// ─────────────────────────────────────────────────────────────────────────────
const L_VERBS_PECI_STI = {
  id: 'verbs-peci-sti',
  title: 'Peći, pečem; krasti, kradem — Verbs With a Hidden Consonant',
  subtitle: 'The k and g behind -ći, the d and t behind -sti',
  icon: '🥖',
  level: 'B1',
  duration: '~7 min',
  color: '#c2410c',
  bg: '#fff7ed',
  slides: [
    {
      type: 'intro',
      title: 'The Infinitive Hides the Stem',
      body: 'Peći (to bake), reći (to say), vući (to pull), krasti (to steal), plesti (to knit): their infinitives end in -ći or -sti, and that ending hides the consonant the verb really has. The present shows it — pečem, rečem, vučem, kradem, pletem — and so does the past: pekao, rekao, vukao. Once you know the hidden consonant, every form of the verb falls into place.',
      icon: '🥖',
    },
    {
      type: 'rule',
      title: '-ći Verbs With a Hidden k',
      body: 'Peći, reći, teći (to flow) and vući hide a k: pek-, rek-, tek-, vuk-. In the present the k turns into č before e: pečem, pečeš, peče, pečemo, pečete. In the oni form the ending is -u, and the k stays: peku. The same: tečem… teku; vučem… vuku; rečem… reku. Three more work exactly like vući: tući (to beat; also to whip cream) → tučem… tuku; obući se (to get dressed) → obučem se; svući se (to get undressed) → svučem se, with the past obukao se, svukao se.',
      highlight: 'pečem … peku',
    },
    {
      type: 'table',
      title: 'Three -ći Verbs and moći',
      headers: ['person', 'peći (bake)', 'vući (pull)', 'teći (flow)', 'moći (can)'],
      rows: [
        ['ja', 'pečem', 'vučem', 'tečem', 'mogu'],
        ['ti', 'pečeš', 'vučeš', 'tečeš', 'možeš'],
        ['on / ona', 'peče', 'vuče', 'teče', 'može'],
        ['mi', 'pečemo', 'vučemo', 'tečemo', 'možemo'],
        ['vi', 'pečete', 'vučete', 'tečete', 'možete'],
        ['oni / one', 'peku', 'vuku', 'teku', 'mogu'],
      ],
    },
    {
      type: 'rule',
      title: 'Moći Hides a g',
      body: 'You have been using moći since A1, and now you can see why it looks the way it does: it hides a g (mog-). Before e the g turns into ž: možeš, može, možemo, možete. The ja and the oni forms are both mogu — the only verb with that ending in the ja form. The past brings the g back: mogao, mogla, mogli.',
      highlight: 'mogu, možeš, može',
    },
    {
      type: 'rule',
      title: 'Reći and kazati',
      body: 'Reći is perfective: one finished act of saying. So its present rečem is used where a completed act is meant — after kad, ako or da: Kad mu rečem istinu, bit će ljut. Moram ti nešto reći. For "I say, I am saying" right now, use the imperfective kazati (kažem, kažeš, kaže, kažemo, kažete, kažu) or govoriti: Što kažeš? Kažem ti, to nije istina. The past of reći is the everyday way to report: Rekao mi je sve. The command is reci, recite: Reci mi istinu!',
      highlight: 'Što kažeš?',
    },
    {
      type: 'rule',
      title: 'Command and Past of the -ći Verbs',
      body: 'Before the -i of the command, k turns into c: peci, pecite; reci, recite; vuci, vucite. "Vuci" is written on many doors: pull (the other side says Guraj, push). Moći has no command. The past brings the hidden consonant back: pekao, pekla; rekao, rekla; tekao, tekla; vukao, vukla; mogao, mogla.',
      highlight: 'reci, recite; vuci, vucite',
    },
    {
      type: 'rule',
      title: '-sti Verbs With a Hidden d, t, z or s',
      body: 'Verbs in -sti hide a consonant that only the present shows: krasti (to steal) → kradem, kradeš, krade… kradu; jesti (to eat) → jedem; plesti (to knit) → pletem; mesti (to sweep) → metem; bosti (to prick, to sting) → bodem; izvesti (to carry out, to perform) → izvedem; gristi (to bite) → grizem; tresti (to shake) → tresem. So learn each with its ja form. In the past a hidden d or t simply disappears: krao, krala; jeo, jela; pleo, plela; meo, mela; bo, bola; izveo, izvela. The others keep their consonant: grizao, grizla; tresao, tresla. Rasti (to grow) → rastem looks similar but hides nothing — the st stays: rastem, rastu; past rastao, rasla.',
      highlight: 'krasti → kradem, krao',
    },
    {
      type: 'table',
      title: 'The -sti Verbs',
      headers: ['infinitive', 'ja', 'oni', 'past (he)', 'past (she)'],
      rows: [
        ['krasti (steal)', 'kradem', 'kradu', 'krao', 'krala'],
        ['jesti (eat)', 'jedem', 'jedu', 'jeo', 'jela'],
        ['plesti (knit)', 'pletem', 'pletu', 'pleo', 'plela'],
        ['mesti (sweep)', 'metem', 'metu', 'meo', 'mela'],
        ['bosti (prick)', 'bodem', 'bodu', 'bo', 'bola'],
        ['izvesti (carry out)', 'izvedem', 'izvedu', 'izveo', 'izvela'],
        ['gristi (bite)', 'grizem', 'grizu', 'grizao', 'grizla'],
        ['rasti (grow)', 'rastem', 'rastu', 'rastao', 'rasla'],
      ],
    },
    {
      type: 'example',
      title: 'The -ći Verbs at Work',
      items: [
        {
          hr: 'Svake nedjelje baka peče kruh i kolače.',
          en: 'Every Sunday Grandma bakes bread and cakes.',
          note: 'peče — the ona form of peći',
        },
        {
          hr: 'U ovoj pekarnici peku najbolje kifle u gradu.',
          en: 'In this bakery they bake the best rolls in town.',
          note: 'peku — the oni form keeps the k',
        },
        {
          hr: 'Rijeka Sava teče kroz Zagreb.',
          en: 'The river Sava flows through Zagreb.',
          note: 'teče — the on/ona form of teći',
        },
        {
          hr: 'Ti vučeš kofer, a ja nosim torbe.',
          en: 'You pull the suitcase and I’ll carry the bags.',
          note: 'vučeš — the ti form of vući',
        },
        {
          hr: 'Što kažeš, hoćemo li ići na izlet?',
          en: 'What do you say, shall we go on a trip?',
          note: 'kažeš — the ti form of kazati, for saying right now',
        },
        {
          hr: 'Rekla mi je istinu tek nakon tjedan dana.',
          en: 'She told me the truth only a week later.',
          note: 'rekla — the past of reći brings the k back',
        },
        {
          hr: 'Kad mu rečem istinu, neće mi vjerovati.',
          en: 'When I tell him the truth, he won’t believe me.',
          note: 'rečem — the perfective present after kad',
        },
      ],
    },
    {
      type: 'example',
      title: 'The -sti Verbs at Work',
      items: [
        {
          hr: 'Netko mi je u tramvaju ukrao novčanik.',
          en: 'Someone stole my wallet on the tram.',
          note: 'ukrao — the past of ukrasti; the hidden d disappears',
        },
        {
          hr: 'Moja mama plete džemper za svog unuka.',
          en: 'My mum is knitting a jumper for her grandson.',
          note: 'plete — the ona form of plesti',
        },
        {
          hr: 'Djeca brzo rastu, a odjeća im postane mala.',
          en: 'Children grow fast, and their clothes get too small.',
          note: 'rastu — the oni form of rasti',
        },
        {
          hr: 'Što jedeš za doručak? Obično jedem kruh s maslacem.',
          en: 'What do you eat for breakfast? I usually eat bread and butter.',
          note: 'jedeš and jedem — the present of jesti',
        },
        {
          hr: 'Ne boj se, moj pas ne grize.',
          en: 'Don’t be afraid, my dog doesn’t bite.',
          note: 'grize — the on form of gristi',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Oni ___ pizzu u krušnoj peći." (bake)',
      options: ['peču', 'pečeju', 'peku', 'pekeju'],
      correct: 2,
      explanation: 'In the oni form the ending is -u and the k stays: peku.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Lopov je ___ novčanik." (stole)',
      options: ['krao', 'kradao', 'krastio', 'kradio'],
      correct: 0,
      explanation: 'The hidden d of krasti disappears in the past: krao.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Building the present from the infinitive: "pećem", "krastim" — the present uses the hidden consonant: pečem, kradem. (2) Changing the k in the oni form: "peču", "vuču" — before -u the k stays: peku, vuku. (3) A g-form for moći: "možem" — the ja form is mogu. (4) Keeping the d in the past: "kradao" — it is krao, jeo, pleo. (5) Using rečem for "I am saying": "Što rečeš?" — say Što kažeš?',
      highlight: 'peku, vuku',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Svake nedjelje baka ___ kolače." (bakes)',
          options: ['peče', 'peke', 'peći', 'pečuje'],
          correct: 0,
          explanation: 'Pek- + e: the k becomes č — peče.',
        },
        {
          q: 'Complete: "Što to ___?" (are you saying)',
          options: ['kazaš', 'rekneš', 'kažem', 'kažeš'],
          correct: 3,
          explanation: 'For saying right now use kazati: kažeš.',
        },
        {
          q: 'Complete: "Ja to ne ___ sam napraviti." (can)',
          options: ['možem', 'mogu', 'moćem', 'mogem'],
          correct: 1,
          explanation: 'The ja form of moći is mogu.',
        },
        {
          q: 'Complete: "Rijeka Sava ___ kroz Zagreb." (flows)',
          options: ['teku', 'tekne', 'teče', 'teći'],
          correct: 2,
          explanation: 'Tek- + e: the k becomes č — teče.',
        },
        {
          q: 'Complete: "Lopovi ___ bicikle ispred fakulteta." (steal)',
          options: ['kradu', 'krastu', 'kraju', 'kradeju'],
          correct: 0,
          explanation: 'The hidden d shows in the present: kradem… kradu.',
        },
        {
          q: 'Complete: "Jučer je ___ kofer do stanice." (he pulled)',
          options: ['vučio', 'vukao', 'vuko', 'vukeo'],
          correct: 1,
          explanation: 'The past brings the k back: vukao.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Hidden Consonants — Key Takeaways',
      points: [
        'peći, reći, teći, vući hide a k: pečem … peku; vučem … vuku',
        'moći hides a g: mogu, možeš, može … mogu; past mogao',
        'Command: k → c before i — peci, reci, vuci',
        'reći is perfective (rečem after kad, ako, da); for "I say" use kažem',
        '-sti verbs show their consonant in the present: kradem, jedem, pletem, grizem, rastem',
        'Past: the d or t disappears — krao, jeo, pleo; but grizao, rastao',
      ],
    },
  ],
};

const P_VERBS_PECI_STI = {
  worked: [
    {
      title: 'Baking in the Present',
      problem: 'Prevedi: "We bake bread every Saturday."',
      en: 'We bake bread every Saturday.',
      steps: [
        {
          label: 'Find the hidden consonant',
          text: 'Peći hides a k: the stem is pek-.',
        },
        {
          label: 'The ending',
          text: 'Mi takes -emo. Before e the k turns into č: peč- + -emo.',
        },
        {
          label: 'The time phrase',
          text: 'Every Saturday: svake subote (genitive) — or subotom.',
        },
      ],
      answer: 'Svake subote pečemo kruh.',
    },
    {
      title: 'A Theft in the Past',
      problem: 'Prevedi: "Someone stole her bicycle."',
      en: 'Someone stole her bicycle.',
      steps: [
        {
          label: 'The verb',
          text: 'To steal (once, completed) is ukrasti, the perfective of krasti.',
        },
        {
          label: 'The past',
          text: 'The hidden d disappears before -o: ukrao.',
        },
        {
          label: 'The owner',
          text: 'Her goes in the dative: joj, after je — or simply njezin bicikl.',
        },
      ],
      answer: 'Netko joj je ukrao bicikl.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Ti ___ kofer, a ja nosim torbu. (pull)',
        options: ['vukeš', 'vučeš', 'vučiš', 'vuciš'],
        correct: 1,
        hint: 'The hidden k turns into č before e.',
        explanation: 'vučeš.',
      },
      {
        q: 'Baka ___ džemper za unuka. (knits)',
        options: ['plesti', 'pleta', 'plete', 'plesne'],
        correct: 2,
        hint: 'Plesti hides a t; the ona ending is -e.',
        explanation: 'plete.',
      },
      {
        q: 'Djeca brzo ___. (grow)',
        options: ['rastu', 'rastaju', 'rasu', 'rastiju'],
        correct: 0,
        hint: 'Rasti keeps st in the present; the oni ending is -u.',
        explanation: 'rastu.',
      },
      {
        q: '___ mi istinu! (tell — to a friend)',
        options: ['Reći', 'Rekni', 'Reki', 'Reci'],
        correct: 3,
        hint: 'Before the -i of the command, the hidden k turns into c.',
        explanation: 'Reci! — the command of reći.',
      },
      {
        q: 'Jučer sam ___ kolače. (baked — a man speaking)',
        options: ['pečao', 'pekao', 'pekeo', 'pečio'],
        correct: 1,
        hint: 'The past brings the hidden k back.',
        explanation: 'pekao.',
      },
      {
        q: 'Što ___ za doručak? (do you eat)',
        options: ['jedeš', 'jeseš', 'jesteš', 'jediš'],
        correct: 0,
        hint: 'Jesti hides a d; the ti ending is -eš.',
        explanation: 'jedeš.',
      },
      {
        q: 'Možete li mi ___ gdje je stanica? (tell)',
        options: ['rečem', 'kažem', 'reći', 'rekni'],
        correct: 2,
        hint: 'After možete li you need an infinitive, and it is one act of telling.',
        explanation: 'reći — after možete li comes the infinitive: Možete li mi reći…?',
      },
      {
        type: 'type',
        q: 'Svake nedjelje mama ____ kruh. (bakes)',
        answer: 'peče',
        hint: 'Before e, the hidden k becomes č.',
        explanation: 'peče — the ona form of peći.',
      },
      {
        type: 'type',
        q: 'U ovoj pekarnici ____ najbolje kifle. (they bake)',
        answer: 'peku',
        hint: 'The oni ending is -u, and before u the k does not change.',
        explanation: 'peku.',
      },
      {
        type: 'type',
        q: 'Lopov je ____ torbu. (stole — he)',
        answer: 'ukrao',
        accept: ['krao'],
        hint: 'The perfective of krasti has the prefix u-; in the past the hidden d disappears.',
        explanation: 'ukrao (or krao).',
      },
      {
        type: 'type',
        q: 'Ujutro se brzo ____ i idem na posao. (I get dressed — obući se)',
        answer: 'obučem',
        hint: 'obući works like vući: the hidden k becomes č before e.',
        explanation: 'obučem se — I get dressed.',
      },
      {
        q: 'Pazi, pčela ___! (stings — bosti)',
        options: ['bosti', 'bode', 'bose', 'bodi'],
        correct: 1,
        hint: 'Bosti hides a d, like jesti; the ona ending is -e.',
        explanation: 'bode — bosti hides a d: bodem, bodeš, bode.',
      },
      {
        type: 'type',
        q: 'Rijeka ____ kroz grad. (flows)',
        answer: 'teče',
        hint: 'Teći hides a k, which becomes č before e.',
        explanation: 'teče.',
      },
      {
        type: 'type',
        q: 'Ja to ne ____ učiniti sama. (can)',
        answer: 'mogu',
        hint: 'The ja form of moći ends in -u, like the oni form.',
        explanation: 'mogu.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Ti ___ kofer, a ja nosim torbu." (pull)',
      options: ['vukeš', 'vučiš', 'vučeš', 'vuciš'],
      correct: 2,
      explanation: 'Vuk- + e: the k becomes č — vučeš.',
    },
    {
      q: 'Complete: "Baka ___ džemper za unuka." (knits)',
      options: ['plete', 'plesti', 'pleta', 'plesne'],
      correct: 0,
      explanation: 'Plesti hides a t: plete.',
    },
    {
      q: 'Complete: "Djeca brzo ___." (grow)',
      options: ['rastaju', 'rasu', 'rastiju', 'rastu'],
      correct: 3,
      explanation: 'Rasti → rastem … rastu.',
    },
    {
      q: 'Complete: "Jučer sam ___ kolače." (baked — a man speaking)',
      options: ['pečao', 'pekao', 'pekeo', 'pečio'],
      correct: 1,
      explanation: 'The past brings the k back: pekao.',
    },
    {
      q: 'Complete: "___ mi istinu!" (tell — to a friend)',
      options: ['Reći', 'Rekni', 'Reci', 'Reki'],
      correct: 2,
      explanation: 'k → c before the -i of the command: reci.',
    },
    {
      q: 'Complete: "Što ___ za doručak?" (do you eat)',
      options: ['jedeš', 'jeseš', 'jesteš', 'jediš'],
      correct: 0,
      explanation: 'Jesti hides a d: jedem, jedeš.',
    },
  ],
  vocab: [
    ['peći', 'to bake, to roast (pečem)', 'Baka peče kruh.'],
    ['reći', 'to say, to tell (rečem; past rekao)', 'Rekao mi je istinu.'],
    ['kazati', 'to say (kažem)', 'Što kažeš?'],
    ['teći', 'to flow (tečem)', 'Sava teče kroz Zagreb.'],
    ['vući', 'to pull, to drag (vučem)', 'Vučem kofer.'],
    ['krasti', 'to steal (kradem; past krao)', 'Netko mi je ukrao novčanik.'],
    ['plesti', 'to knit (pletem)', 'Mama plete džemper.'],
    ['gristi', 'to bite (grizem)', 'Moj pas ne grize.'],
    ['rasti', 'to grow (rastem)', 'Djeca brzo rastu.'],
    ['tući', 'to beat; to whip (tučem)', 'Tučem vrhnje za tortu.'],
    ['obući se', 'to get dressed (obučem se)', 'Obuci se, hladno je!'],
    ['pekarnica', 'bakery', 'U pekarnici kupujem kruh.'],
  ],
};

/** Spine entries for this batch. `masterOrder` is the lesson's final B1 position. */
export const SPINE = [
  {
    id: 'genitive-plural-special',
    masterOrder: 23,
    prerequisites: ['genitive-deep', 'fleeting-a', 'plural-irregular'],
    objectives: [
      'Insert the a in the genitive plural: djevojaka, sestara, pisama, studenata',
      'Use the -i genitive plurals: majki, torbi, stvari, ljudi, sati, mjeseci',
      'Use -iju and -u for the body and for guests: prstiju, očiju, gostiju, nogu',
      'Keep -ov- in the long plural: gradova, stolova, parkova',
    ],
  },
  {
    id: 'time-genitive',
    masterOrder: 25,
    prerequisites: [
      'genitive-deep',
      'genitive-adjectives',
      'ordinals-dates',
      'genitive-plural-special',
    ],
    objectives: [
      'Say when something happened with a genitive time phrase: prošle godine, tog dana',
      'Say every and next: svakog dana, svake večeri, idućeg tjedna',
      'Give dates with the ordinal and month in the genitive: petog ožujka',
      'Open a memory with jednog dana, te zime, prošlog ljeta',
    ],
  },
  {
    id: 'verbs-with-genitive',
    masterOrder: 27,
    prerequisites: ['genitive-deep', 'genitive-pronouns', 'reflexive-verbs', 'time-genitive'],
    objectives: [
      'Talk about fears with bojati se and plašiti se + genitive: Bojim se mraka',
      'Remember with sjećati se / sjetiti se + genitive, without a preposition',
      'Use sramiti se, čuvati se and odreći se + genitive',
      'Conjugate the -ati → -im present: bojim se, držim, ležim, stojim',
    ],
  },
  {
    id: 'nouns-en-et',
    masterOrder: 31,
    prerequisites: ['plural-irregular', 'genitive-deep', 'instrumental', 'verbs-with-genitive'],
    objectives: [
      'Decline ime, rame and vrijeme with -en-: imena, ramenu, vremena',
      'Use vrijeme in everyday phrases: nemam vremena, na vrijeme, za vrijeme',
      'Decline dijete and the young animals with -et-: djeteta, teleta, mačetom',
      'Use djeca and the collectives telad, janjad with the right verb',
    ],
  },
  {
    id: 'verbs-peci-sti',
    masterOrder: 32,
    prerequisites: ['infinitive-ci', 'past-irregular', 'imperative-basic', 'aspect-perfective'],
    objectives: [
      'Conjugate peći, teći, vući and moći: pečem … peku, mogu, možeš',
      'Choose between rečem and kažem, and use the past rekao',
      'Form the command with c: peci, reci, vuci',
      'Conjugate -sti verbs and their past: kradem / krao, pletem / pleo, rastem / rastao',
    ],
  },
];

/** Lesson bodies (same shape as lessonsB1.js). */
export const LESSONS = [
  L_GENITIVE_PLURAL_SPECIAL,
  L_TIME_GENITIVE,
  L_VERBS_WITH_GENITIVE,
  L_NOUNS_EN_ET,
  L_VERBS_PECI_STI,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'genitive-plural-special': P_GENITIVE_PLURAL_SPECIAL,
  'time-genitive': P_TIME_GENITIVE,
  'verbs-with-genitive': P_VERBS_WITH_GENITIVE,
  'nouns-en-et': P_NOUNS_EN_ET,
  'verbs-peci-sti': P_VERBS_PECI_STI,
};
