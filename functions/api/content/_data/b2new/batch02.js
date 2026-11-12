// functions/api/content/_data/b2new/batch02.js
//
// New B2 lessons, batch 02 (Croaticum restructure, stage 5, 2026-11-12). See b2new/index.js.
//
// Razgovarajte s nama! B2, lessons 2–4: present tenses the infinitive hides (-ovati /
// -ivati → -ujem, -nuti → -nem, stati → stanem), the internet and society,
// internationalisms, human rights and national minorities, and the relative pronoun in
// every case.
//
// Relative koji has two standard forms in the masculine/neuter genitive, dative and
// locative (kojeg / kojega, kojem / kojemu), and tko has two in the dative and locative
// (komu / kome). Both are taught; no item ever offers both, so no correct form is marked
// wrong.

/** Spine entries for this batch. `masterOrder` is the lesson's final B2 position. */
export const SPINE = [
  {
    id: 'present-ivati-nuti',
    masterOrder: 7,
    prerequisites: ['verbs-nuti', 'aspect-suffixes'],
    objectives: [
      'Form the present of -ovati and -ivati verbs: kupovati → kupujem, potpisivati → potpisujem',
      'Recognise the look-alikes that keep -am: pjevam, uživam, dobivam, zahtijevam',
      'Find the hidden n or m in the present: krenem, stanem, postanem, počnem, uzmem',
    ],
  },
  {
    id: 'internet-society',
    masterOrder: 9,
    prerequisites: ['technology-internet', 'opinions-agreeing', 'present-ivati-nuti'],
    objectives: [
      'Talk about computers, phones and social networks: na internetu, na društvenim mrežama',
      'Weigh advantages against disadvantages: s jedne strane… s druge strane…',
      'Describe internet addiction and predict the world in twenty years: ovisan o internetu, za dvadeset godina',
    ],
  },
  {
    id: 'internationalisms',
    masterOrder: 11,
    prerequisites: ['language-history', 'technology-internet'],
    objectives: [
      'Tell the gender of an international word from its ending: -cija and -ura are feminine, -izam and -ist masculine',
      'Decline international words: u organizaciji, u turizmu, bez informacija',
      'Use -irati verbs (organiziram) and know the native word beside an international one: računalo, zrakoplov',
    ],
  },
  {
    id: 'human-rights',
    masterOrder: 13,
    prerequisites: ['internationalisms', 'opinions-agreeing', 'media-news'],
    objectives: [
      'Talk about rights and freedoms: pravo na obrazovanje, boriti se za prava',
      'Describe the national minorities of Croatia and their rights',
      'Discuss globalisation in a formal register: Smatram da…, Djelomično se slažem, ali…',
    ],
  },
  {
    id: 'relative-pronouns-cases',
    masterOrder: 16,
    prerequisites: ['relative-koji', 'relative-deep', 'clitics'],
    objectives: [
      'Put koji, koja, koje into every case and number: kojeg, kojoj, s kojim, o kojima',
      'Use tko and što as relatives: onaj tko, ono što, ono o čemu',
      'Place the clitics straight after the relative: knjiga koju sam ti dao',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 7 · Presents the infinitive hides
// ─────────────────────────────────────────────────────────
const PRESENT_IVATI_NUTI = {
  id: 'present-ivati-nuti',
  title: 'Kupujem, Potpisujem, Stanem',
  subtitle: 'Present tenses the infinitive hides: -ovati and -ivati → -ujem, and the n of stanem',
  icon: '🔁',
  level: 'B2',
  duration: '~9 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'When the Infinitive Misleads',
      body: 'For most verbs the present is easy to guess from the infinitive: čitati → čitam, govoriti → govorim. For some very common verbs it is not. Kupovati does not give "kupovam" but kupujem; stati does not give "stam" but stanem. This lesson collects these verbs into a few groups, so that one rule covers dozens of verbs. (You may also meet mati in old songs and books — that is an old word for mother, today majka, and not a verb at all.)',
      icon: '🔁',
    },
    {
      type: 'rule',
      title: '-ovati → -ujem',
      body: 'A verb ending in -ovati swaps -ova- for -uj- in the present, and then takes the endings -em, -eš, -e, -emo, -ete, -u: kupovati → kupujem, putovati → putujem, darovati → darujem, ratovati → ratujem. After a soft consonant the same suffix is spelled -evati and behaves the same way: kraljevati → kraljujem. There are no exceptions to this group worth learning at this level.',
      highlight: 'kupovati → kupujem',
    },
    {
      type: 'table',
      title: 'Two Verbs, Full Present',
      headers: ['Person', 'kupovati (to buy)', 'potpisivati (to sign)'],
      rows: [
        ['ja', 'kupujem', 'potpisujem'],
        ['ti', 'kupuješ', 'potpisuješ'],
        ['on / ona / ono', 'kupuje', 'potpisuje'],
        ['mi', 'kupujemo', 'potpisujemo'],
        ['vi', 'kupujete', 'potpisujete'],
        ['oni / one / ona', 'kupuju', 'potpisuju'],
      ],
    },
    {
      type: 'rule',
      title: '-ivati → -ujem',
      body: 'Many imperfective verbs are made by putting -ivati in place of the ending of a perfective verb: potpisati → potpisivati, zapisati → zapisivati, pokazati → pokazivati, ispitati → ispitivati, preporučiti → preporučivati, objaviti → objavljivati. All of these do exactly what -ovati verbs do: potpisujem, zapisujem, pokazujem, ispitujem, preporučujem, objavljujem.',
      highlight: 'potpisivati → potpisujem',
    },
    {
      type: 'rule',
      title: 'Look-Alikes That Keep -am',
      body: 'Not every verb with -iva- or -eva- in it belongs to the group. In pjevati and uživati the v is part of the root, and the present is regular: pjevam, uživam. Dobivati is dobiti + -vati, not -ivati, so it gives dobivam. Zahtijevati (to demand) gives zahtijevam. These four are common enough to learn as words: pjevam, uživam, dobivam, zahtijevam.',
      highlight: 'pjevam, uživam, dobivam, zahtijevam',
    },
    {
      type: 'rule',
      title: '-nuti → -nem, and a Hidden n or m',
      body: 'Verbs in -nuti drop the u: krenuti → krenem, maknuti → maknem, dignuti → dignem, kihnuti → kihnem. A small group of very common verbs in -ati and -eti show a consonant in the present that the infinitive hides. An n: stati → stanem, postati → postanem, ostati → ostanem, nestati → nestanem, početi → počnem, započeti → započnem. An m: uzeti → uzmem. Commands are built on the same stem: stani, ostanite, uzmi, makni.',
      highlight: 'stati → stanem',
    },
    {
      type: 'example',
      title: 'The -ujem Verbs at Work',
      items: [
        {
          hr: 'Svake subote kupujem kruh i novine na tržnici.',
          en: 'Every Saturday I buy bread and the newspaper at the market.',
          note: 'kupujem — from kupovati',
        },
        {
          hr: 'Moji roditelji svako ljeto putuju po Dalmaciji.',
          en: 'My parents travel around Dalmatia every summer.',
          note: 'putuju — from putovati',
        },
        {
          hr: 'Direktorica potpisuje ugovore svako jutro prije sastanka.',
          en: 'The director signs contracts every morning before the meeting.',
          note: 'potpisuje — from potpisivati',
        },
        {
          hr: 'Na predavanju uvijek zapisujem najvažnije riječi.',
          en: 'In lectures I always write down the most important words.',
          note: 'zapisujem — from zapisivati',
        },
        {
          hr: 'Liječnik mi preporučuje više kretanja i manje kave.',
          en: 'The doctor recommends more exercise and less coffee to me.',
          note: 'preporučuje — from preporučivati',
        },
        {
          hr: 'Ona svaki mjesec objavljuje novi članak na blogu.',
          en: 'She publishes a new article on her blog every month.',
          note: 'objavljuje — from objavljivati',
        },
        {
          hr: 'Petra lijepo pjeva, a njezin brat uživa u glazbi.',
          en: 'Petra sings beautifully, and her brother enjoys music.',
          note: 'pjeva and uživa keep -a-: they are not -ivati verbs',
        },
      ],
    },
    {
      type: 'example',
      title: 'The Hidden n and m',
      items: [
        {
          hr: 'Ako sada krenemo, stići ćemo prije mraka.',
          en: 'If we set off now, we will arrive before dark.',
          note: 'krenemo — from krenuti, without the u',
        },
        {
          hr: 'Makni auto, molim te, ne mogu izaći iz garaže.',
          en: 'Move the car, please, I can’t get out of the garage.',
          note: 'makni — the command of maknuti',
        },
        {
          hr: 'Kad počnem čitati dobru knjigu, ne mogu stati.',
          en: 'When I start reading a good book, I can’t stop.',
          note: 'počnem — from početi, with an n',
        },
        {
          hr: 'Želim da moj sin postane liječnik kao njegov djed.',
          en: 'I want my son to become a doctor like his grandfather.',
          note: 'postane — from postati, with an n',
        },
        {
          hr: 'Ako ostanete kod nas na večeri, napravit ću riblju juhu.',
          en: 'If you stay with us for dinner, I will make fish soup.',
          note: 'ostanete — from ostati',
        },
        {
          hr: 'Ako uzmeš kišobran, nećeš pokisnuti.',
          en: 'If you take an umbrella, you won’t get wet.',
          note: 'uzmeš — from uzeti, with an m',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the ja form of kupovati?',
      options: ['kupovam', 'kupujem', 'kupovim'],
      correct: 1,
      explanation: '-ova- becomes -uj- in the present: kupujem.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the ja form of stati (to stop)?',
      options: ['statem', 'stanim', 'stanem'],
      correct: 2,
      explanation: 'An n appears in the present that the infinitive hides: stanem, staneš, stane.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Keeping the infinitive vowel: "kupovam", "potpisivam" — the present is kupujem, potpisujem. (2) Pushing the rule too far: pjevati, uživati, dobivati and zahtijevati keep -am: pjevam, uživam, dobivam, zahtijevam. (3) Leaving out the hidden consonant: "stam", "postam", "počem" — it is stanem, postanem, počnem. (4) Keeping -nu- in the present: "krenujem" — it is krenem.',
      highlight: 'kupujem, potpisujem',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Svako ljeto ___ na otok." (we travel — putovati)',
          options: ['putovamo', 'putujemo', 'putuvamo', 'putovemo'],
          correct: 1,
          explanation: 'putovati: -ova- → -uj-, then the mi ending -emo: putujemo.',
        },
        {
          q: 'Complete: "Tajnica ___ pisma za direktora." (signs — potpisivati)',
          options: ['potpisiva', 'potpisava', 'potpisivuje', 'potpisuje'],
          correct: 3,
          explanation: 'potpisivati: -iva- → -uj-: potpisuje.',
        },
        {
          q: 'Which verb keeps -am in the present?',
          options: ['kupovati', 'zapisivati', 'uživati', 'pokazivati'],
          correct: 2,
          explanation:
            'In uživati the v belongs to the root, so the present is regular: uživam. The others give kupujem, zapisujem, pokazujem.',
        },
        {
          q: 'Complete: "Ako ___ odmah, stići ćeš na vlak." (krenuti, ti)',
          options: ['kreneš', 'krenuješ', 'kreniš', 'krenaš'],
          correct: 0,
          explanation: '-nuti verbs drop the u and take -em, -eš: kreneš.',
        },
        {
          q: 'Complete: "Želi da njegova kći ___ liječnica." (postati)',
          options: ['posta', 'postati', 'postani', 'postane'],
          correct: 3,
          explanation:
            'After da the present is needed, and postati shows an n: postane. Postani is the command.',
        },
        {
          q: 'Complete: "Molim te, ___ kišobran." (uzeti — a command)',
          options: ['uzmi', 'uzeti', 'uzi', 'uzmeš'],
          correct: 0,
          explanation: 'uzeti → uzmem, so the command is built on uzm-: uzmi.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Hidden Presents — Key Takeaways',
      points: [
        '-ovati → -ujem: kupujem, putujem, darujem',
        '-ivati → -ujem: potpisujem, zapisujem, pokazujem, preporučujem',
        'Learn the look-alikes: pjevam, uživam, dobivam, zahtijevam',
        '-nuti → -nem: krenem, maknem, dignem',
        'A hidden n or m: stanem, postanem, ostanem, počnem, uzmem',
        'Commands use the present stem: makni, stani, uzmi',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 9 · The internet and society
// ─────────────────────────────────────────────────────────
const INTERNET_SOCIETY = {
  id: 'internet-society',
  title: 'Living Online',
  subtitle:
    'Computers, phones and social networks — the case for, the case against, and twenty years ahead',
  icon: '🌐',
  level: 'B2',
  duration: '~9 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'A Topic Everyone Has an Opinion On',
      body: 'At B1 you learned the words for using a computer and a phone. At B2 the internet stops being a tool and becomes a topic: is it good for us, what does it do to children, will we still talk to each other in twenty years? This lesson gives you the vocabulary and the phrases to argue both sides — the kind of short discussion every B2 exam asks for.',
      icon: '🌐',
    },
    {
      type: 'table',
      title: 'Words for the Digital World',
      headers: ['Croatian', 'English', 'In use'],
      rows: [
        ['računalo', 'computer', 'Radim na računalu.'],
        ['prijenosno računalo', 'laptop', 'Na putovanja nosim prijenosno računalo.'],
        ['mobitel, pametni telefon', 'mobile phone, smartphone', 'Mobitel mi je uvijek u džepu.'],
        ['društvene mreže', 'social networks', 'Koristiš li društvene mreže?'],
        ['objava', 'post', 'Pročitao sam njezinu novu objavu.'],
        ['pratitelj', 'follower', 'Ima tisuću pratitelja.'],
        ['lozinka', 'password', 'Nikome ne govori svoju lozinku.'],
        ['zaslon', 'screen', 'Djeca previše sjede pred zaslonom.'],
        ['preuzeti (preuzmem)', 'to download', 'Preuzmi aplikaciju banke.'],
        ['lažne vijesti', 'fake news', 'Lažne vijesti se brzo šire.'],
      ],
    },
    {
      type: 'rule',
      title: 'On the Internet, in the App, in Front of the Screen',
      body: 'Croatian is ON the internet and ON the networks: na internetu, na društvenim mrežama, na mobitelu (on the phone). Inside a program it is u: u aplikaciji, u pregledniku (in the browser). You sit in front of a screen with pred + instrumental: pred zaslonom. You connect TO the internet with na + accusative: spojiti se na internet. Time is spent with provoditi (provodim): Provodim previše vremena na mobitelu.',
      highlight: 'na internetu',
    },
    {
      type: 'rule',
      title: 'Weighing It Up',
      body: 'A prednost is an advantage; a nedostatak is a disadvantage (genitive nedostatka, plural nedostaci — the a drops). Lay out both sides with S jedne strane… s druge strane… (on the one hand… on the other). Add a point with Osim toga, contrast it with Međutim, and give a consequence with Zbog toga. To name the main point: Najveća je prednost to što… / Glavni je nedostatak to što…',
      highlight: 'S jedne strane… s druge strane…',
    },
    {
      type: 'rule',
      title: 'Addiction: Ovisan o + Locative',
      body: 'To be addicted is biti ovisan (ovisna) o + locative: ovisan o internetu, ovisna o društvenim mrežama. The noun is ovisnost o: ovisnost o internetu. Signs of it: ne može se odvojiti od mobitela (cannot tear himself away from the phone), nervozan je bez interneta, zanemaruje obveze (neglects duties — zanemarivati, an -ivati verb, so -ujem).',
      highlight: 'ovisan o internetu',
    },
    {
      type: 'rule',
      title: 'Twenty Years From Now',
      body: 'Za + accusative says "in" a stretch of time from now: za dvadeset godina, za deset godina. Predictions use the future, softened by how sure you are: sigurno, vjerojatno, možda. Mislim da će… / Ne vjerujem da će… Bilo bi dobro da… (it would be good if…) uses the conditional you already know.',
      highlight: 'za dvadeset godina',
    },
    {
      type: 'example',
      title: 'For and Against',
      items: [
        {
          hr: 'S jedne strane, internet nam omogućuje brz pristup informacijama.',
          en: 'On the one hand, the internet gives us fast access to information.',
          note: 'omogućuje — from omogućivati, an -ivati verb',
        },
        {
          hr: 'S druge strane, lažne vijesti se na društvenim mrežama šire vrlo brzo.',
          en: 'On the other hand, fake news spreads very fast on social networks.',
          note: 'na društvenim mrežama — locative plural',
        },
        {
          hr: 'Najveća je prednost to što možemo razgovarati s obitelji u inozemstvu.',
          en: 'The biggest advantage is that we can talk to family abroad.',
          note: 'to što introduces the advantage itself',
        },
        {
          hr: 'Glavni je nedostatak to što djeca premalo vremena provode vani.',
          en: 'The main disadvantage is that children spend too little time outside.',
          note: 'provode — from provoditi',
        },
        {
          hr: 'Moj brat je ovisan o mobitelu i zanemaruje svoje obveze.',
          en: 'My brother is addicted to his phone and neglects his duties.',
          note: 'ovisan o + locative mobitelu',
        },
        {
          hr: 'Osim toga, mnogi ljudi ne znaju tko sve vidi njihove podatke.',
          en: 'Besides, many people don’t know who can see their data.',
          note: 'Osim toga adds another point',
        },
      ],
    },
    {
      type: 'example',
      title: 'Twenty Years From Now',
      items: [
        {
          hr: 'Za dvadeset godina većina ljudi vjerojatno će raditi od kuće.',
          en: 'In twenty years most people will probably work from home.',
          note: 'za + accusative godina, then the future',
        },
        {
          hr: 'Mislim da će roboti obavljati mnoge dosadne poslove.',
          en: 'I think robots will do many boring jobs.',
          note: 'Mislim da će… — a careful prediction',
        },
        {
          hr: 'Ne vjerujem da će knjige potpuno nestati.',
          en: 'I don’t believe books will disappear completely.',
          note: 'nestati — the verb with a hidden n: nestanem',
        },
        {
          hr: 'Bilo bi dobro da djeca u školi uče kako prepoznati lažne vijesti.',
          en: 'It would be good if children learned at school how to recognise fake news.',
          note: 'Bilo bi dobro da… — a wish about the future',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'How do you say "on social networks"?',
      options: ['u društvenim mrežama', 'na društvenim mrežama', 'na društvene mreže'],
      correct: 1,
      explanation:
        'Croatian is ON the networks: na + locative plural, na društvenim mrežama. Na društvene mreže is movement (accusative).',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "On je ovisan ___."',
      options: ['o internetu', 'za internet', 'na internet'],
      correct: 0,
      explanation: 'ovisan takes o + locative: ovisan o internetu.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The wrong preposition after ovisan: it is always o + locative — ovisan o internetu, ovisnost o kockanju. (2) "u internetu" — Croatian is on the internet: na internetu. (3) Keeping the a in nedostatak: "nedostataka" is the genitive PLURAL; one disadvantage in the genitive is nedostatka. (4) "za dvadeset godine" — after dvadeset the noun is genitive plural: za dvadeset godina.',
      highlight: 'ovisan o internetu',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Provodim previše vremena ___." (on the internet)',
          options: ['u internetu', 'na internet', 'na internetu', 'za internetom'],
          correct: 2,
          explanation: 'Where? On the internet: na + locative, na internetu.',
        },
        {
          q: 'Which word means "a disadvantage"?',
          options: ['nedostatak', 'prednost', 'objava', 'pratitelj'],
          correct: 0,
          explanation: 'nedostatak is a disadvantage; prednost is an advantage.',
        },
        {
          q: 'Complete: "Djeca sjede ___ cijelo poslijepodne." (in front of the screen)',
          options: ['pred zaslon', 'pred zaslonom', 'pred zaslona', 'pred zaslonu'],
          correct: 1,
          explanation: 'Where? pred + instrumental: pred zaslonom.',
        },
        {
          q: 'Which phrase introduces the other side of an argument?',
          options: ['Osim toga', 'Zbog toga', 'Na primjer', 'S druge strane'],
          correct: 3,
          explanation:
            'S druge strane — on the other hand. Osim toga adds a point, Zbog toga gives a consequence.',
        },
        {
          q: 'Complete: "Mnogi tinejdžeri su ovisni o ___." (social networks)',
          options: [
            'društvene mreže',
            'društvenih mreža',
            'društvenim mrežama',
            'društvenima mrežama',
          ],
          correct: 2,
          explanation: 'o + locative plural: o društvenim mrežama.',
        },
        {
          q: 'Complete: "___ ljudi će voziti električne automobile." (in twenty years)',
          options: [
            'Za dvadeset godina',
            'Prije dvadeset godina',
            'Za dvadeset godine',
            'Dvadeset godina',
          ],
          correct: 0,
          explanation: 'za + time = in that much time from now; after dvadeset, godina.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Living Online — Key Takeaways',
      points: [
        'On the internet, on the networks: na internetu, na društvenim mrežama',
        'In front of the screen: pred zaslonom',
        'prednost and nedostatak (nedostatka, nedostaci)',
        'S jedne strane… s druge strane… Osim toga… Međutim…',
        'Addiction: ovisan o + locative, ovisnost o internetu',
        'In the future: za dvadeset godina + the future tense',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 11 · Internationalisms
// ─────────────────────────────────────────────────────────
const INTERNATIONALISMS = {
  id: 'internationalisms',
  title: 'Organizacija, Turizam, Organizirati',
  subtitle:
    'International words in Croatian — their endings, their genders, and the native words beside them',
  icon: '🌍',
  level: 'B2',
  duration: '~9 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'Words You Already Half Know',
      body: 'Thousands of Croatian words are international: demokracija, turizam, organizirati, kultura, student. You can often guess their meaning, but not how they behave. Croatian gives each one a gender, an ending pattern and its own spelling, and for some of them it also has a native word that is preferred in careful writing. This lesson gives you the endings that tell you all of that at a glance.',
      icon: '🌍',
    },
    {
      type: 'rule',
      title: '-cija and -ija: Feminine',
      body: 'English -tion usually becomes -cija: nation → nacija, organisation → organizacija, information → informacija, situation → situacija, tradition → tradicija. English -cy can be -cija too: democracy → demokracija. Sciences often end in -ija: geografija, filozofija, biologija, psihologija. All of these are feminine and decline like žena: u organizaciji, bez informacije, s tradicijom. The genitive plural ends in -a: puno informacija.',
      highlight: 'u organizaciji',
    },
    {
      type: 'rule',
      title: '-izam and -ist: Masculine',
      body: 'A word in -izam names an idea or a movement and is masculine: turizam, optimizam, realizam, socijalizam. In every other case the a before m drops: turizma, u turizmu, s optimizmom. A word in -ist names a man who does or believes something: turist, aktivist, pijanist, biciklist; plural turisti, genitive plural turista. A woman takes -istica: turistica, aktivistica, pijanistica.',
      highlight: 'turizma, u turizmu',
    },
    {
      type: 'table',
      title: 'Endings That Tell You the Gender',
      headers: ['Ending', 'Gender', 'Examples'],
      rows: [
        ['-cija, -ija', 'feminine', 'organizacija, demokracija, geografija'],
        ['-ura', 'feminine', 'kultura, arhitektura, literatura'],
        ['-ika', 'feminine', 'politika, matematika, tehnika'],
        ['-izam', 'masculine', 'turizam, optimizam'],
        ['-ist', 'masculine (person)', 'turist, aktivist'],
        ['-ment', 'masculine', 'dokument, parlament, element'],
        ['-tet', 'masculine', 'fakultet, identitet'],
        ['-or', 'masculine', 'direktor, motor, autor'],
        ['-ent', 'masculine', 'student, argument, klijent'],
      ],
    },
    {
      type: 'rule',
      title: '-irati Verbs: Always -iram',
      body: 'International verbs take the ending -irati, and their present is completely regular: organizirati → organiziram, organiziraš, organizira… Others: informirati, komunicirati, reagirati, analizirati, kritizirati, telefonirati, studirati. Most of them can be used both as perfective and as imperfective: Organizirao sam zabavu (once, finished) and Svake godine organiziram zabavu (repeatedly).',
      highlight: 'organizirati → organiziram',
    },
    {
      type: 'rule',
      title: 'A Native Word Beside It',
      body: 'For some international words Croatian has a native word, and careful writing prefers it. Both are correct; the international one is common in speech. računalo — kompjuter (computer); zrakoplov — avion (aeroplane); glazba — muzika (music); kazalište — teatar (theatre); zemljopis — geografija (geography); tvrtka — firma (company). Many international words have no native partner at all — demokracija, organizacija, turizam — and are the normal word in every register.',
      highlight: 'računalo — kompjuter',
    },
    {
      type: 'example',
      title: 'International Words in Croatian Sentences',
      items: [
        {
          hr: 'Ta organizacija pomaže ljudima bez doma.',
          en: 'That organisation helps homeless people.',
          note: 'organizacija is feminine, so ta',
        },
        {
          hr: 'Radim u turizmu već deset godina.',
          en: 'I have been working in tourism for ten years.',
          note: 'turizmu — locative of turizam, without the a',
        },
        {
          hr: 'Na internetu ima previše netočnih informacija.',
          en: 'There is too much inaccurate information on the internet.',
          note: 'informacija — genitive plural after ima previše',
        },
        {
          hr: 'Moja sestra je aktivistica i bori se za čist okoliš.',
          en: 'My sister is an activist and fights for a clean environment.',
          note: 'aktivistica — the feminine of aktivist',
        },
        {
          hr: 'Ove godine naš razred organizira izlet u Istru.',
          en: 'This year our class is organising a trip to Istria.',
          note: 'organizira — -irati verbs always give -iram, -ira',
        },
        {
          hr: 'Demokracija ne postoji bez slobodnih medija.',
          en: 'Democracy does not exist without a free media.',
          note: 'demokracija — no native partner, the normal word',
        },
      ],
    },
    {
      type: 'example',
      title: 'Native or International?',
      items: [
        {
          hr: 'Zrakoplov za Pariz polijeće u osam sati.',
          en: 'The plane for Paris takes off at eight o’clock.',
          note: 'zrakoplov — the word an airport announcement uses',
        },
        {
          hr: 'Idemo avionom ili autom?',
          en: 'Are we going by plane or by car?',
          note: 'avionom — the everyday spoken word',
        },
        {
          hr: 'Naša tvrtka traži programera koji zna raditi na računalu i s ljudima.',
          en: 'Our company is looking for a programmer who can work with computers and with people.',
          note: 'tvrtka and računalo — the preferred written words',
        },
        {
          hr: 'Večeras idemo u kazalište, a sutra na koncert klasične glazbe.',
          en: 'Tonight we are going to the theatre, and tomorrow to a classical music concert.',
          note: 'kazalište, glazbe — the native words',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What gender is informacija?',
      options: ['masculine', 'feminine', 'neuter'],
      correct: 1,
      explanation: 'Words in -cija are feminine: ta informacija, važna informacija.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Radim u ___." (tourism)',
      options: ['turizamu', 'turizmu', 'turizma'],
      correct: 1,
      explanation: 'The a before m drops in every case but the nominative: u turizmu.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Making -ija words masculine: "taj informacija" — it is ta informacija, važna informacija. (2) Keeping the a of -izam: "u turizamu" — it is u turizmu, s optimizmom. (3) Using the man’s word for a woman: "Ona je aktivist" — a woman is aktivistica, turistica. (4) Thinking -irati verbs are irregular: they never are — organiziram, organiziraš, organizira.',
      highlight: 'u turizmu, s optimizmom',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which word is masculine?',
          options: ['kultura', 'situacija', 'politika', 'parlament'],
          correct: 3,
          explanation:
            'Words in -ment are masculine. Kultura, situacija and politika are feminine.',
        },
        {
          q: 'Complete: "Ovo je vrlo ___ informacija."',
          options: ['važan', 'važna', 'važno', 'važni'],
          correct: 1,
          explanation: 'informacija is feminine singular: važna informacija.',
        },
        {
          q: 'Complete: "Govorili smo o ___." (optimism)',
          options: ['optimizam', 'optimizamu', 'optimizmu', 'optimizma'],
          correct: 2,
          explanation: 'o + locative, and the a drops: o optimizmu.',
        },
        {
          q: 'What is the ja form of komunicirati?',
          options: ['komuniciram', 'komuniciruem', 'komuniciravam', 'komunicirem'],
          correct: 0,
          explanation: '-irati verbs are regular: komuniciram.',
        },
        {
          q: 'Which is the native Croatian word for an aeroplane?',
          options: ['kazalište', 'zrakoplov', 'tvrtka', 'računalo'],
          correct: 1,
          explanation: 'zrakoplov is the native word; avion is the international one.',
        },
        {
          q: 'How do you say "She is a pianist"?',
          options: [
            'Ona je pijanist.',
            'Ona je pijanistu.',
            'Ona je pijanistici.',
            'Ona je pijanistica.',
          ],
          correct: 3,
          explanation: 'A woman in an -ist profession takes -istica: pijanistica.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Internationalisms — Key Takeaways',
      points: [
        '-cija, -ija, -ura, -ika: feminine — organizacija, kultura, politika',
        '-izam, -ist, -ment, -tet, -or, -ent: masculine',
        '-izam drops its a: turizma, u turizmu',
        'A woman in an -ist role: -istica — aktivistica',
        '-irati verbs are regular: organiziram',
        'Native beside international: računalo, zrakoplov, glazba, kazalište, tvrtka',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 13 · Human rights
// ─────────────────────────────────────────────────────────
const HUMAN_RIGHTS = {
  id: 'human-rights',
  title: 'Ljudska prava',
  subtitle: 'Rights, freedoms and minorities — and how to argue about globalisation formally',
  icon: '⚖️',
  level: 'B2',
  duration: '~10 min',
  color: '#1e40af',
  bg: '#eff6ff',
  slides: [
    {
      type: 'intro',
      title: 'Opća deklaracija o ljudskim pravima',
      body: 'On 10 December 1948 the General Assembly of the United Nations adopted the Universal Declaration of Human Rights — in Croatian, Opća deklaracija o ljudskim pravima. Its first article begins: Sva ljudska bića rađaju se slobodna i jednaka u dostojanstvu i pravima. This lesson gives you the language of rights and freedoms, tells you about the national minorities of Croatia, and practises the formal phrases of a discussion.',
      icon: '⚖️',
    },
    {
      type: 'rule',
      title: 'Pravo na + Accusative',
      body: 'A right is a right TO something: pravo na + accusative. Svatko ima pravo na život, na obrazovanje, na rad, na slobodu govora. With a verb you use the infinitive: Imate pravo šutjeti (You have the right to remain silent). To fight for something is boriti se za + accusative: boriti se za prava, za slobodu, za jednakost. To stand up for it is zalagati se za (zalažem se): Zalažem se za ravnopravnost.',
      highlight: 'pravo na obrazovanje',
    },
    {
      type: 'table',
      title: 'The Words of Rights',
      headers: ['Croatian', 'English'],
      rows: [
        ['ljudska prava', 'human rights'],
        ['sloboda govora', 'freedom of speech'],
        ['jednakost', 'equality'],
        ['ravnopravnost spolova', 'equality between men and women'],
        ['dostojanstvo', 'dignity'],
        ['diskriminacija', 'discrimination'],
        ['kršiti (kršenje) prava', 'to violate (violation of) rights'],
        ['zaštita prava', 'protection of rights'],
        ['manjina / većina', 'minority / majority'],
        ['Ustav', 'the Constitution'],
      ],
    },
    {
      type: 'rule',
      title: 'National Minorities in Croatia',
      body: 'The Croatian Constitution names 22 national minorities (nacionalne manjine). The largest is the Serb minority; others include Italians, Hungarians, Czechs, Slovaks, Bosniaks, Albanians and Roma. Minorities elect eight of the members of the Croatian Parliament, the Sabor, and have the right to use their own language and script. In many towns of Istria, Italian is in official use beside Croatian. Note the spelling: a people takes a capital (Talijani, Mađari, Česi), but the adjective does not (talijanska manjina, češka škola).',
      highlight: 'nacionalne manjine',
    },
    {
      type: 'rule',
      title: 'Globalisation: For and Against',
      body: 'Globalizacija is a typical B2 discussion topic. For: slobodna trgovina (free trade), jeftinija roba (cheaper goods), lakše putovanje i razmjena ideja. Against: male lokalne tvrtke propadaju (go under), lokalna kultura se gubi, razlike između bogatih i siromašnih rastu. Talk about it in the formal register: complete sentences, Vi with a capital in writing, and the phrases on the next slide.',
      highlight: 'globalizacija',
    },
    {
      type: 'rule',
      title: 'Formal Discussion Phrases',
      body: 'Giving a view: Smatram da… / Prema mojem mišljenju… Agreeing: Slažem se s Vama da… Partly agreeing: Djelomično se slažem, ali… Disagreeing politely: Ne bih se složio (složila) s tim. Stressing a point: Treba naglasiti da… Turning to the other side: S druge strane, ne smijemo zaboraviti da… Slagati se always takes s + instrumental: slažem se s Vama, s tim mišljenjem.',
      highlight: 'Djelomično se slažem, ali…',
    },
    {
      type: 'example',
      title: 'Rights and Freedoms',
      items: [
        {
          hr: 'Svako dijete ima pravo na besplatno osnovno obrazovanje.',
          en: 'Every child has the right to free primary education.',
          note: 'pravo na + accusative obrazovanje',
        },
        {
          hr: 'Mnoge su se žene stoljećima borile za pravo glasa.',
          en: 'For centuries many women fought for the right to vote.',
          note: 'boriti se za + accusative pravo',
        },
        {
          hr: 'Pripadnici nacionalnih manjina imaju pravo na vlastiti jezik i pismo.',
          en: 'Members of national minorities have the right to their own language and script.',
          note: 'nacionalnih manjina — genitive plural',
        },
        {
          hr: 'U mnogim istarskim gradovima talijanski se službeno koristi uz hrvatski.',
          en: 'In many towns of Istria Italian is officially used beside Croatian.',
          note: 'talijanski, istarskim — adjectives take a small letter',
        },
        {
          hr: 'Diskriminacija na temelju vjere ili porijekla zabranjena je zakonom.',
          en: 'Discrimination on the basis of religion or origin is forbidden by law.',
          note: 'na temelju + genitive: on the basis of',
        },
        {
          hr: 'Novinari moraju imati slobodu govora, inače demokracija ne funkcionira.',
          en: 'Journalists must have freedom of speech, otherwise democracy does not work.',
          note: 'funkcionira — an -irati verb',
        },
      ],
    },
    {
      type: 'example',
      title: 'A Formal Discussion on Globalisation',
      items: [
        {
          hr: 'Smatram da je globalizacija donijela više koristi nego štete.',
          en: 'I believe globalisation has brought more benefit than harm.',
          note: 'Smatram da… — giving a view',
        },
        {
          hr: 'Djelomično se slažem s Vama, ali male tvrtke ne mogu konkurirati velikima.',
          en: 'I partly agree with you, but small companies cannot compete with big ones.',
          note: 's Vama — slagati se takes s + instrumental',
        },
        {
          hr: 'Ne bih se složila s tim da se lokalna kultura nužno gubi.',
          en: 'I would not agree that local culture is necessarily lost.',
          note: 'složila — a woman speaking',
        },
        {
          hr: 'Treba naglasiti da je razlika između bogatih i siromašnih zemalja i dalje velika.',
          en: 'It must be stressed that the gap between rich and poor countries is still large.',
          note: 'Treba naglasiti da… — stressing a point',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Svatko ima pravo ___ rad."',
      options: ['za', 'na', 'o'],
      correct: 1,
      explanation: 'A right to something: pravo na + accusative, pravo na rad.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which phrase means "I partly agree"?',
      options: ['Potpuno se slažem.', 'Ne bih se složio.', 'Djelomično se slažem.'],
      correct: 2,
      explanation: 'djelomično = partly. Ne bih se složio is a polite disagreement.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The wrong preposition after pravo: "pravo za obrazovanje" — a right is always pravo na: pravo na obrazovanje. (2) Mixing up the two: you fight FOR a right, so boriti se za prava, but you HAVE a right TO it, pravo na. (3) Dropping s after slagati se: "Slažem se Vama" — it is Slažem se s Vama. (4) A capital on the adjective: "Talijanska manjina" in the middle of a sentence — the people are Talijani, the adjective is talijanska.',
      highlight: 'pravo na obrazovanje',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Građani imaju pravo ___ slobodu govora."',
          options: ['za', 'o', 'na', 's'],
          correct: 2,
          explanation: 'pravo na + accusative: pravo na slobodu govora.',
        },
        {
          q: 'Complete: "Aktivisti se bore ___ prava radnika."',
          options: ['za', 'na', 'o', 'protiv'],
          correct: 0,
          explanation: 'boriti se za + accusative: they fight for workers’ rights.',
        },
        {
          q: 'How many national minorities does the Croatian Constitution name?',
          options: ['8', '12', '22', '30'],
          correct: 2,
          explanation:
            'The Constitution names 22 national minorities. Eight is the number of seats they elect in the Sabor.',
        },
        {
          q: 'Which sentence is a polite formal disagreement?',
          options: [
            'Slažem se s Vama.',
            'Smatram da ste u pravu.',
            'Treba naglasiti da je tako.',
            'Ne bih se složio s tim.',
          ],
          correct: 3,
          explanation: 'Ne bih se složio s tim — I would not agree with that.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Slažem se s tim mišljenjem.',
            'Slažem se tim mišljenjem.',
            'Slažem se na to mišljenje.',
            'Slažem se za tim mišljenjem.',
          ],
          correct: 0,
          explanation: 'slagati se takes s + instrumental: s tim mišljenjem.',
        },
        {
          q: 'What does "ravnopravnost" mean?',
          options: ['freedom', 'equal rights', 'dignity', 'discrimination'],
          correct: 1,
          explanation:
            'ravnopravnost — having equal rights, as in ravnopravnost spolova. Sloboda is freedom, dostojanstvo dignity.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Human Rights — Key Takeaways',
      points: [
        'Opća deklaracija o ljudskim pravima — 10 December 1948',
        'pravo na + accusative: pravo na obrazovanje, na rad',
        'boriti se za / zalagati se za + accusative',
        'Croatia’s Constitution names 22 national minorities',
        'Talijani (a people) but talijanska manjina (an adjective)',
        'Formal phrases: Smatram da…, Djelomično se slažem, ali…, Ne bih se složio s tim',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 16 · Relative pronouns in every case
// ─────────────────────────────────────────────────────────
const RELATIVE_CASES = {
  id: 'relative-pronouns-cases',
  title: 'Koji, Kojeg, Kojem, Kojim',
  subtitle: 'The relative pronoun in every case — plus tko, što and čiji',
  icon: '🔗',
  level: 'B2',
  duration: '~10 min',
  color: '#047857',
  bg: '#ecfdf5',
  slides: [
    {
      type: 'intro',
      title: 'Who, Whom, To Whom, With Whom',
      body: 'English links a clause to a noun with who, whom, which or that, and barely changes them. Croatian uses koji, and koji declines in every case, like an adjective. You already know the basic sentences — čovjek koji radi ovdje, knjiga koju čitam. Here you learn every form, and the same pronouns as question words: Koji? Kojem? S kojim?',
      icon: '🔗',
    },
    {
      type: 'rule',
      title: 'Two Decisions',
      body: 'The noun BEFORE koji decides its gender and number. The pronoun’s job INSIDE its own clause decides its case. Žena koja radi ovdje — she is the subject: nominative. Žena koju vidim — she is the object: accusative. Žena kojoj pišem — I write to her: dative. Žena s kojom radim — I work with her: instrumental. The same woman, four cases.',
      highlight: 'The pronoun’s job INSIDE its own clause decides its case',
    },
    {
      type: 'table',
      title: 'The Singular',
      headers: ['Case', 'masculine', 'neuter', 'feminine'],
      rows: [
        ['nominative', 'koji', 'koje', 'koja'],
        ['genitive', 'kojeg(a)', 'kojeg(a)', 'koje'],
        ['dative', 'kojem(u)', 'kojem(u)', 'kojoj'],
        ['accusative', 'koji (thing) / kojeg(a) (alive)', 'koje', 'koju'],
        ['locative', 'kojem(u)', 'kojem(u)', 'kojoj'],
        ['instrumental', 'kojim', 'kojim', 'kojom'],
      ],
    },
    {
      type: 'table',
      title: 'The Plural',
      headers: ['Case', 'masculine', 'neuter', 'feminine'],
      rows: [
        ['nominative', 'koji', 'koja', 'koje'],
        ['genitive', 'kojih', 'kojih', 'kojih'],
        ['dative', 'kojima', 'kojima', 'kojima'],
        ['accusative', 'koje', 'koja', 'koje'],
        ['locative', 'kojima', 'kojima', 'kojima'],
        ['instrumental', 'kojima', 'kojima', 'kojima'],
      ],
    },
    {
      type: 'rule',
      title: 'Short and Long Forms, and the Preposition First',
      body: 'In brackets: kojeg and kojega, kojem and kojemu are both standard — the longer form is a little more formal. A preposition always goes BEFORE the pronoun, never at the end of the clause as in English: grad u kojem živim (the town I live in), prijatelj s kojim putujem, ljudi o kojima pričamo, kuća ispred koje čekam.',
      highlight: 'grad u kojem živim',
    },
    {
      type: 'rule',
      title: 'Clitics Straight After the Relative',
      body: 'A relative clause starts with koji (or with preposition + koji), and the clitic cluster comes immediately after it: Knjiga koju sam ti posudio… Čovjek kojem sam ga dao… Stan u kojem smo se upoznali… Never push the clitics further back: not "koju ti sam" — the order inside the cluster is still sam/ću first, then dative, then accusative, then se.',
      highlight: 'Knjiga koju sam ti posudio',
    },
    {
      type: 'rule',
      title: 'Tko and Što as Relatives',
      body: 'After onaj, svatko, nitko the relative is tko: onaj tko rano ustaje, svatko tko želi. After ono, sve, nešto, ništa it is što: ono što kažeš, sve što imam. They decline too. tko: koga, komu (kome), koga, o komu (kome), s kim (kime). što: čega, čemu, što, o čemu, čim (čime). So: onaj kome sam pisao, ono čega se bojim, ono o čemu govorimo, sve čime se bavim.',
      highlight: 'ono o čemu govorimo',
    },
    {
      type: 'rule',
      title: 'Čiji: Whose',
      body: 'čiji means whose, and it agrees with the thing OWNED, not with the owner: susjed čija kći studira (kći is feminine → čija), žena čiji sin svira gitaru (sin is masculine → čiji), ljudi čije su kuće uz more (kuće, feminine plural → čije). It declines like koji: susjed u čijoj kući stanujem.',
      highlight: 'čija kći',
    },
    {
      type: 'example',
      title: 'Koji in Every Case',
      items: [
        {
          hr: 'Ovo je kolega kojeg sam upoznala na konferenciji.',
          en: 'This is the colleague I met at the conference.',
          note: 'kojeg — accusative of a living masculine noun',
        },
        {
          hr: 'Profesorica kojoj sam poslao esej još mi nije odgovorila.',
          en: 'The teacher I sent the essay to hasn’t answered me yet.',
          note: 'kojoj — dative: I sent it TO her',
        },
        {
          hr: 'Grad u kojem sam odrastao danas je potpuno drukčiji.',
          en: 'The town I grew up in is completely different today.',
          note: 'u kojem — preposition first, locative',
        },
        {
          hr: 'To je prijateljica s kojom svako ljeto putujem na Vis.',
          en: 'That is the friend I travel to Vis with every summer.',
          note: 's kojom — instrumental, feminine',
        },
        {
          hr: 'Ljudi o kojima pričaš upravo su ušli u kafić.',
          en: 'The people you are talking about have just come into the café.',
          note: 'o kojima — locative plural',
        },
        {
          hr: 'Ne razumijem pravila bez kojih ne mogu riješiti zadatak.',
          en: 'I don’t understand the rules without which I can’t solve the task.',
          note: 'bez kojih — genitive plural',
        },
        {
          hr: 'Torba koju sam ti kupio stoji u ormaru.',
          en: 'The bag I bought you is in the wardrobe.',
          note: 'koju sam ti — clitics straight after the relative',
        },
      ],
    },
    {
      type: 'example',
      title: 'Tko, Što and Čiji',
      items: [
        {
          hr: 'Onaj tko rano ustaje ima više vremena za sebe.',
          en: 'Whoever gets up early has more time for himself.',
          note: 'onaj tko — tko after onaj',
        },
        {
          hr: 'Ono čega se najviše bojim jest samoća.',
          en: 'What I fear most is loneliness.',
          note: 'čega — bojati se takes the genitive',
        },
        {
          hr: 'To je upravo ono o čemu sam razmišljao.',
          en: 'That is exactly what I was thinking about.',
          note: 'o čemu — locative of što',
        },
        {
          hr: 'Upoznao sam susjedu čiji sin svira u bendu.',
          en: 'I met the neighbour whose son plays in a band.',
          note: 'čiji agrees with sin, not with susjeda',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Djevojka ___ sam pomogao zove se Ana."',
      options: ['koja', 'kojoj', 'koju'],
      correct: 1,
      explanation: 'pomoći takes the dative: I helped TO her, kojoj.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Sve ___ imam dugujem roditeljima."',
      options: ['što', 'koje', 'tko'],
      correct: 0,
      explanation: 'After sve, the relative is što: sve što imam.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Copying the case of the noun: "Žena koja sam vidio" — inside its clause the woman is the object, so Žena koju sam vidio. (2) Leaving out the preposition or putting it last: "grad kojem živim" — it is grad u kojem živim. (3) Clitics too late: "knjiga koju ti sam dao" — the cluster comes right after koju, auxiliary first: knjiga koju sam ti dao. (4) Agreeing čiji with the owner: "Marko, čiji sestra…" — sestra is feminine, so Marko, čija sestra…',
      highlight: 'Žena koju sam vidio',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Stan ___ živimo premali je za nas."',
          options: ['kojem', 'u kojem', 'koji', 'u koji'],
          correct: 1,
          explanation: 'Where we live: u + locative, and the preposition comes first: u kojem.',
        },
        {
          q: 'Complete: "Studenti ___ predajem vrlo su marljivi."',
          options: ['kojima', 'koje', 'kojih', 'koji'],
          correct: 0,
          explanation: 'predavati takes the dative (I teach TO them): kojima.',
        },
        {
          q: 'Complete: "To je auto ___ sam kupio prošle godine."',
          options: ['kojeg', 'kojem', 'kojim', 'koji'],
          correct: 3,
          explanation:
            'An object, masculine, a thing: the accusative is the same as the nominative, koji.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Pismo koje ti sam poslala nije stiglo.',
            'Pismo koje sam poslala ti nije stiglo.',
            'Pismo koje sam ti poslala nije stiglo.',
            'Pismo sam koje ti poslala nije stiglo.',
          ],
          correct: 2,
          explanation:
            'The clitics follow koje directly as one cluster, auxiliary first: koje sam ti poslala.',
        },
        {
          q: 'Complete: "Ono ___ govoriš nije istina."',
          options: ['o kojem', 'o čemu', 'o kome', 'o što'],
          correct: 1,
          explanation: 'After ono the relative is što, and o needs the locative: o čemu.',
        },
        {
          q: 'Complete: "Upoznala sam pjevača ___ pjesme svi znaju."',
          options: ['čiji', 'čija', 'čije', 'čijeg'],
          correct: 2,
          explanation: 'čiji agrees with pjesme (feminine plural, subject): čije.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Relative Pronouns — Key Takeaways',
      points: [
        'Gender and number from the noun; case from the job in the clause',
        'kojeg(a), kojem(u), kojim; koje, kojoj, koju, kojom; plural kojih, kojima',
        'Preposition first: u kojem, s kojom, o kojima',
        'Clitics right after the relative: koju sam ti dao',
        'onaj tko, ono što — and they decline: ono o čemu, onaj kome',
        'čiji agrees with the thing owned: susjed čija kći',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsB2.js). */
export const LESSONS = [
  PRESENT_IVATI_NUTI,
  INTERNET_SOCIETY,
  INTERNATIONALISMS,
  HUMAN_RIGHTS,
  RELATIVE_CASES,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'present-ivati-nuti': {
    worked: [
      {
        title: 'Find the Group, Then the Ending',
        problem: 'Prevedi: "We often travel and buy local wine."',
        en: 'We often travel and buy local wine.',
        steps: [
          { label: 'The verbs', text: 'to travel = putovati, to buy (repeatedly) = kupovati.' },
          { label: 'The group', text: 'Both end in -ovati, so -ova- becomes -uj- in the present.' },
          { label: 'The person', text: 'mi takes -emo: putujemo, kupujemo.' },
        ],
        answer: 'Često putujemo i kupujemo domaće vino.',
      },
      {
        title: 'A Hidden n',
        problem: 'Prevedi: "If you stay, I will make coffee."',
        en: 'If you stay, I will make coffee.',
        steps: [
          { label: 'The verb', text: 'to stay = ostati. Its present shows an n: ostanem.' },
          { label: 'The person', text: 'ti takes -eš: ostaneš.' },
          { label: 'The condition', text: 'ako + present, then the future: napravit ću.' },
        ],
        answer: 'Ako ostaneš, napravit ću kavu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ja ___ novine svaki dan. (kupovati)',
          options: ['kupovam', 'kupujem', 'kupovem', 'kupuvam'],
          correct: 1,
          hint: 'The -ova- of the infinitive turns into -uj-.',
          explanation: 'kupujem — -ovati → -ujem.',
        },
        {
          q: 'Studenti ___ bilješke na predavanju. (zapisivati)',
          options: ['zapisivaju', 'zapisavaju', 'zapisivu', 'zapisuju'],
          correct: 3,
          hint: '-iva- behaves like -ova-, and oni takes -u.',
          explanation: 'zapisuju — -ivati → -ujem, oni form -uju.',
        },
        {
          q: 'Ti lijepo ___. (pjevati)',
          options: ['pjevaš', 'pjevuješ', 'pjeveš', 'pjeviš'],
          correct: 0,
          hint: 'The v here belongs to the root — this is not an -ivati verb.',
          explanation: 'pjevaš — pjevati is regular: pjevam, pjevaš.',
        },
        {
          q: 'Ako ___ sada, stići ćemo. (krenuti, mi)',
          options: ['krenujemo', 'krenimo', 'krenemo', 'krenamo'],
          correct: 2,
          hint: 'Drop the -nu-… keep the n, lose the u.',
          explanation: 'krenemo — -nuti → -nem.',
        },
        {
          q: 'On želi da mu sin ___ inženjer. (postati)',
          options: ['postati', 'postane', 'postani', 'postanu'],
          correct: 1,
          hint: 'After da you need the present, and there is a hidden consonant.',
          explanation: 'postane — postati → postanem, postaneš, postane.',
        },
        {
          q: 'Molim vas, ___ ovdje. (stati — a polite command)',
          options: ['statite', 'stanete', 'stanite', 'stanjite'],
          correct: 2,
          hint: 'Build the command on the present stem, which has an n.',
          explanation: 'stanite — stanem → stani, stanite.',
        },
        {
          q: 'Ona ___ u dobroj hrani. (uživati)',
          options: ['uživuje', 'uživa', 'uživje', 'uživi'],
          correct: 1,
          hint: 'One of the look-alikes that stay regular.',
          explanation: 'uživa — uživati keeps -a-.',
        },
        {
          q: 'Liječnik ___ odmor i šetnju. (preporučivati)',
          options: ['preporučuje', 'preporučiva', 'preporučava', 'preporučije'],
          correct: 0,
          hint: 'An -ivati verb made from preporučiti.',
          explanation: 'preporučuje — -ivati → -uje.',
        },
        {
          type: 'type',
          q: 'Svake godine ____ po Europi. (mi — putovati)',
          answer: 'putujemo',
          hint: '-ova- turns into -uj-, then the mi ending.',
          explanation: 'putujemo — from putovati.',
        },
        {
          type: 'type',
          q: 'Tko ____ ugovor? (potpisivati)',
          answer: 'potpisuje',
          hint: 'An -ivati verb, third person singular.',
          explanation: 'potpisuje — from potpisivati.',
        },
        {
          type: 'type',
          q: 'Ako ____ kišobran, nećeš pokisnuti. (uzeti, ti)',
          answer: 'uzmeš',
          hint: 'There is a hidden m in the present.',
          explanation: 'uzmeš — uzeti → uzmem, uzmeš.',
        },
        {
          type: 'type',
          q: 'Kad ____ raditi, ne volim prekide. (početi, ja)',
          answer: 'počnem',
          hint: 'A hidden n appears after the č.',
          explanation: 'počnem — početi → počnem.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Baka ___ svaki dan svježe povrće." (buys — kupovati)',
        options: ['kupova', 'kupove', 'kupuje', 'kupujeva'],
        correct: 2,
        explanation: 'kupovati → kupujem, kupuje.',
      },
      {
        q: 'Complete: "Profesor nam ___ kako se to radi." (shows — pokazivati)',
        options: ['pokazuje', 'pokaziva', 'pokazava', 'pokazivuje'],
        correct: 0,
        explanation: 'pokazivati → pokazujem, pokazuje.',
      },
      {
        q: 'Which pair is correct?',
        options: [
          'pjevati → pjevujem',
          'dobivati → dobivam',
          'uživati → uživujem',
          'zahtijevati → zahtijevujem',
        ],
        correct: 1,
        explanation:
          'dobivati is dobiti + -vati, so it stays regular: dobivam. The other three are regular too: pjevam, uživam, zahtijevam.',
      },
      {
        q: 'Complete: "Ako ___ još sat vremena, propustit ćemo vlak." (ostati, mi)',
        options: ['ostamo', 'ostatemo', 'ostanemo', 'ostanimo'],
        correct: 2,
        explanation: 'ostati → ostanem, ostanemo. Ostanimo is a command ("let’s stay").',
      },
      {
        q: 'Complete: "Kad ___ učiti, isključim mobitel." (početi, ja)',
        options: ['počem', 'počnem', 'počinim', 'početem'],
        correct: 1,
        explanation: 'početi shows an n in the present: počnem.',
      },
      {
        q: 'What is the ja form of maknuti?',
        options: ['maknujem', 'maknim', 'maknem', 'makam'],
        correct: 2,
        explanation: '-nuti → -nem: maknem.',
      },
    ],
    vocab: [
      ['kupovati', 'to buy (repeatedly)', 'Kupujem kruh svako jutro.'],
      ['putovati', 'to travel', 'Ljeti putujemo na more.'],
      ['potpisivati', 'to sign (repeatedly)', 'Direktor potpisuje ugovore.'],
      ['zapisivati', 'to write down', 'Zapisujem nove riječi u bilježnicu.'],
      ['preporučivati', 'to recommend', 'Što nam preporučujete?'],
      ['uživati', 'to enjoy', 'Uživam u dobroj knjizi.'],
      ['maknuti', 'to move (something away)', 'Makni torbu sa stolice.'],
      ['postati', 'to become', 'Želi da postane liječnica.'],
      ['ostati', 'to stay', 'Ako ostaneš, skuhat ću kavu.'],
      ['početi', 'to begin', 'Kad počnem, ne mogu stati.'],
    ],
  },

  'internet-society': {
    worked: [
      {
        title: 'Build a Balanced Argument',
        problem:
          'Prevedi: "On the one hand the internet connects people; on the other hand it isolates them."',
        en: 'On the one hand the internet connects people; on the other hand it isolates them.',
        steps: [
          { label: 'The frame', text: 'S jedne strane… s druge strane…' },
          {
            label: 'The verbs',
            text: 'to connect = povezivati → povezuje; to isolate = izolirati → izolira.',
          },
          {
            label: 'The object',
            text: 'ljude — accusative plural; the second time just the pronoun ih.',
          },
        ],
        answer: 'S jedne strane internet povezuje ljude, s druge strane ih izolira.',
      },
      {
        title: 'Addicted To What?',
        problem: 'Prevedi: "My sister is addicted to social networks."',
        en: 'My sister is addicted to social networks.',
        steps: [
          { label: 'The adjective', text: 'addicted = ovisan; a woman: ovisna.' },
          { label: 'The preposition', text: 'ovisan always takes o + locative.' },
          { label: 'The ending', text: 'društvene mreže → locative plural društvenim mrežama.' },
        ],
        answer: 'Moja sestra je ovisna o društvenim mrežama.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ne mogu ___ jer nemam signal. (connect to the internet)',
          options: [
            'se spojiti na internet',
            'se spojiti u internet',
            'se spojiti s internetu',
            'se spojiti na internetu',
          ],
          correct: 0,
          hint: 'Movement onto it: na + accusative.',
          explanation: 'spojiti se na internet — accusative of direction.',
        },
        {
          q: 'Tinejdžeri provode puno vremena ___. (on their phones)',
          options: ['u mobitelima', 'na mobitelima', 'na mobitele', 'za mobitelima'],
          correct: 1,
          hint: 'Croatian is ON the phone, and it is a location.',
          explanation: 'na mobitelima — na + locative plural.',
        },
        {
          q: 'Najveća ___ interneta je brzina.',
          options: ['nedostatak', 'objava', 'prednost', 'lozinka'],
          correct: 2,
          hint: 'Speed is a good thing.',
          explanation: 'prednost — an advantage.',
        },
        {
          q: 'Glavni ___ društvenih mreža su lažne vijesti.',
          options: ['nedostatak', 'prednost', 'pratitelj', 'zaslon'],
          correct: 0,
          hint: 'Fake news is a bad thing, and the adjective is masculine.',
          explanation: 'nedostatak — a disadvantage (masculine: glavni).',
        },
        {
          q: 'Ne dijeli svoju ___ ni s kim.',
          options: ['objavu', 'aplikaciju', 'pratitelja', 'lozinku'],
          correct: 3,
          hint: 'The secret word you log in with.',
          explanation: 'lozinku — the password.',
        },
        {
          q: 'Internet je koristan. ___, može biti opasan.',
          options: ['Osim toga', 'Međutim', 'Zbog toga', 'Na primjer'],
          correct: 1,
          hint: 'The second sentence goes against the first.',
          explanation: 'Međutim — however.',
        },
        {
          q: 'Djeca ne bi smjela satima sjediti pred ___.',
          options: ['zaslon', 'zaslonu', 'zaslonom', 'zaslona'],
          correct: 2,
          hint: 'pred, describing where something is, takes the instrumental.',
          explanation: 'pred zaslonom — instrumental.',
        },
        {
          q: 'Mislim da ___ za dvadeset godina svi raditi od kuće.',
          options: ['će', 'bi', 'su', 'je'],
          correct: 0,
          hint: 'A prediction about the future.',
          explanation: 'će — the future auxiliary.',
        },
        {
          type: 'type',
          q: 'On je ovisan o ____. (internet)',
          answer: 'internetu',
          hint: 'o + locative, masculine.',
          explanation: 'o internetu — locative.',
        },
        {
          type: 'type',
          q: 'Svaki dan ____ fotografije na društvenim mrežama. (objavljivati, ona)',
          answer: 'objavljuje',
          hint: 'An -ivati verb: -iva- becomes -uj-.',
          explanation: 'objavljuje — from objavljivati.',
        },
        {
          type: 'type',
          q: 'Mnogi ljudi gube sate pred ____. (zaslon)',
          answer: 'zaslonom',
          hint: 'pred, saying where, takes the instrumental.',
          explanation: 'pred zaslonom — instrumental.',
        },
        {
          type: 'type',
          q: 'Ovo je jedan od najvećih ____ interneta. (nedostatak — genitive plural)',
          answer: 'nedostataka',
          hint: 'In the genitive plural the a of the last syllable comes back.',
          explanation: 'nedostataka — genitive plural after jedan od.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Pročitao sam to ___." (on the internet)',
        options: ['na internetu', 'u internetu', 'na internet', 'iz interneta'],
        correct: 0,
        explanation: 'na + locative: na internetu.',
      },
      {
        q: 'Which word means "a follower" on social networks?',
        options: ['objava', 'lozinka', 'pratitelj', 'zaslon'],
        correct: 2,
        explanation: 'pratitelj — a follower.',
      },
      {
        q: 'Complete: "Ona je ovisna ___ kupovini preko interneta."',
        options: ['od', 'na', 'za', 'o'],
        correct: 3,
        explanation: 'ovisan o + locative: o kupovini.',
      },
      {
        q: 'Which phrase adds one more point to an argument?',
        options: ['Osim toga', 'S druge strane', 'Međutim', 'Ipak'],
        correct: 0,
        explanation: 'Osim toga — besides, in addition.',
      },
      {
        q: 'What is the genitive singular of nedostatak?',
        options: ['nedostataka', 'nedostatka', 'nedostatku', 'nedostaci'],
        correct: 1,
        explanation: 'The a drops: nedostatka. Nedostataka is the genitive plural.',
      },
      {
        q: 'Complete: "___ će ljudi možda živjeti na Marsu." (in fifty years)',
        options: [
          'Prije pedeset godina',
          'Za pedeset godine',
          'Pedeset godina',
          'Za pedeset godina',
        ],
        correct: 3,
        explanation: 'za + time from now, with the genitive plural godina.',
      },
    ],
    vocab: [
      ['računalo', 'computer', 'Radim na računalu cijeli dan.'],
      ['društvene mreže', 'social networks', 'Koristiš li društvene mreže?'],
      ['objava', 'post', 'Njezina objava ima puno komentara.'],
      ['pratitelj', 'follower', 'Ima tisuću pratitelja.'],
      ['lozinka', 'password', 'Promijeni lozinku svakih nekoliko mjeseci.'],
      ['zaslon', 'screen', 'Djeca previše sjede pred zaslonom.'],
      ['prednost', 'advantage', 'Najveća prednost je brzina.'],
      ['nedostatak', 'disadvantage', 'Glavni nedostatak je cijena.'],
      ['ovisnost', 'addiction', 'Ovisnost o internetu je ozbiljan problem.'],
      ['lažne vijesti', 'fake news', 'Lažne vijesti se brzo šire.'],
    ],
  },

  internationalisms: {
    worked: [
      {
        title: 'Gender From the Ending',
        problem: 'Prevedi: "That is an important tradition."',
        en: 'That is an important tradition.',
        steps: [
          { label: 'The word', text: 'tradition → tradicija (-tion → -cija).' },
          { label: 'The gender', text: '-cija words are feminine.' },
          { label: 'Agreement', text: 'važna, feminine singular: važna tradicija.' },
        ],
        answer: 'To je važna tradicija.',
      },
      {
        title: 'The Disappearing a',
        problem: 'Prevedi: "Croatia lives from tourism."',
        en: 'Croatia lives from tourism.',
        steps: [
          { label: 'The phrase', text: 'to live from = živjeti od + genitive.' },
          { label: 'The word', text: 'tourism = turizam, masculine.' },
          { label: 'The ending', text: 'Genitive -a, and the a before m drops: turizma.' },
        ],
        answer: 'Hrvatska živi od turizma.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ova ___ je vrlo stara. (tradition)',
          options: ['tradicija', 'tradicion', 'tradicijom', 'tradicije'],
          correct: 0,
          hint: '-tion becomes -cija, and here it is the subject.',
          explanation: 'tradicija — nominative, feminine.',
        },
        {
          q: 'Radim u velikoj ___. (organisation)',
          options: ['organizacija', 'organizaciju', 'organizaciji', 'organizacijom'],
          correct: 2,
          hint: 'u + locative of a feminine noun in -a.',
          explanation: 'organizaciji — locative.',
        },
        {
          q: 'Ivan je ___ i vozi se po cijeloj Europi. (cyclist)',
          options: ['biciklistica', 'biciklist', 'biciklizam', 'bicikl'],
          correct: 1,
          hint: 'A man who does it: -ist.',
          explanation: 'biciklist — the man.',
        },
        {
          q: 'Marija je poznata ___. (activist)',
          options: ['aktivist', 'aktivizam', 'aktivnost', 'aktivistica'],
          correct: 3,
          hint: 'A woman takes a longer ending.',
          explanation: 'aktivistica — the woman.',
        },
        {
          q: 'Svake godine ___ festival u našem gradu. (oni — organizirati)',
          options: ['organiziraju', 'organiziravaju', 'organiziruju', 'organizire'],
          correct: 0,
          hint: '-irati verbs are regular: -iram, -iraju.',
          explanation: 'organiziraju — oni form of an -irati verb.',
        },
        {
          q: 'Koja je hrvatska riječ za "kompjuter"?',
          options: ['zrakoplov', 'kazalište', 'računalo', 'tvrtka'],
          correct: 2,
          hint: 'It is built on the verb for "to calculate".',
          explanation: 'računalo — from računati, to calculate.',
        },
        {
          q: 'Pričali smo o ___. (realism)',
          options: ['realizam', 'realizmu', 'realizamu', 'realizma'],
          correct: 1,
          hint: 'o + locative, and the a before m disappears.',
          explanation: 'realizmu — locative, without the a.',
        },
        {
          q: 'Taj ___ je nevažeći. (document)',
          options: ['dokumenta', 'dokumentom', 'dokumentu', 'dokument'],
          correct: 3,
          hint: 'The subject form of a masculine -ment word.',
          explanation: 'dokument — masculine, so taj.',
        },
        {
          type: 'type',
          q: 'Hvala na ____. (information — locative singular)',
          answer: 'informaciji',
          hint: 'hvala na + locative of a feminine noun in -a.',
          explanation: 'na informaciji — locative singular.',
        },
        {
          type: 'type',
          q: 'Moj brat radi u ____. (turizam — locative)',
          answer: 'turizmu',
          hint: 'u + locative, and drop the a before m.',
          explanation: 'turizmu — locative.',
        },
        {
          type: 'type',
          q: 'Moja prijateljica je ____ i svira na koncertima. (pijanist — a woman)',
          answer: 'pijanistica',
          hint: 'Add the feminine ending to the -ist word.',
          explanation: 'pijanistica — the feminine.',
        },
        {
          type: 'type',
          q: 'Ja ne ____ o politici. (diskutirati)',
          answer: 'diskutiram',
          hint: 'An -irati verb, ja form.',
          explanation: 'diskutiram — -irati → -iram.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which word is feminine?',
        options: ['fakultet', 'turizam', 'arhitektura', 'motor'],
        correct: 2,
        explanation: 'Words in -ura are feminine. The others are masculine.',
      },
      {
        q: 'Complete: "To je bila teška ___."',
        options: ['situacija', 'situaciji', 'situacijom', 'situacije'],
        correct: 0,
        explanation: 'Subject, nominative: situacija.',
      },
      {
        q: 'Complete: "Živimo od ___." (tourism)',
        options: ['turizam', 'turizamu', 'turizmom', 'turizma'],
        correct: 3,
        explanation: 'od + genitive, with the a dropped: turizma.',
      },
      {
        q: 'What is the oni form of reagirati?',
        options: ['reagiruju', 'reagiraju', 'reagiravaju', 'reagire'],
        correct: 1,
        explanation: '-irati verbs are regular: reagiraju.',
      },
      {
        q: 'Which is the native Croatian word for a company?',
        options: ['tvrtka', 'glazba', 'kazalište', 'zemljopis'],
        correct: 0,
        explanation: 'tvrtka; firma is the international word.',
      },
      {
        q: 'Complete: "Ona je poznata ___." (journalist and activist — a woman)',
        options: ['aktivist', 'aktivizam', 'aktivistica', 'aktivistom'],
        correct: 2,
        explanation: 'A woman in an -ist role: aktivistica.',
      },
    ],
    vocab: [
      ['organizacija', 'organisation', 'Radim u humanitarnoj organizaciji.'],
      ['demokracija', 'democracy', 'Demokracija treba slobodne medije.'],
      ['informacija', 'piece of information', 'Hvala na informaciji.'],
      ['turizam', 'tourism', 'Hrvatska živi od turizma.'],
      ['turist', 'tourist', 'Ljeti je u Splitu puno turista.'],
      ['organizirati', 'to organise', 'Organiziram rođendansku zabavu.'],
      ['računalo', 'computer', 'Novo računalo je vrlo brzo.'],
      ['zrakoplov', 'aeroplane', 'Zrakoplov kasni sat vremena.'],
      ['tvrtka', 'company', 'Radim u maloj tvrtki.'],
      ['kazalište', 'theatre', 'Večeras idemo u kazalište.'],
    ],
  },

  'human-rights': {
    worked: [
      {
        title: 'A Right To Something',
        problem: 'Prevedi: "Everyone has the right to work."',
        en: 'Everyone has the right to work.',
        steps: [
          { label: 'Everyone', text: 'svatko — an indefinite pronoun, singular verb: ima.' },
          { label: 'The right', text: 'pravo na + accusative.' },
          { label: 'The noun', text: 'rad (work) is a masculine thing, so the accusative is rad.' },
        ],
        answer: 'Svatko ima pravo na rad.',
      },
      {
        title: 'A Polite Disagreement',
        problem:
          'Prevedi (formally): "I partly agree with you, but globalisation also has disadvantages."',
        en: 'I partly agree with you, but globalisation also has disadvantages.',
        steps: [
          { label: 'Partly agree', text: 'Djelomično se slažem…' },
          {
            label: 'With you (formal)',
            text: 's + instrumental of Vi: s Vama, with a capital in writing.',
          },
          {
            label: 'The other side',
            text: 'ali + the noun nedostatak in the plural object form: nedostatke.',
          },
        ],
        answer: 'Djelomično se slažem s Vama, ali globalizacija ima i nedostatke.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Svako dijete ima pravo ___ obrazovanje.',
          options: ['za', 'o', 'na', 'u'],
          correct: 2,
          hint: 'A right TO something.',
          explanation: 'pravo na + accusative.',
        },
        {
          q: 'Radnici se bore ___ bolje plaće.',
          options: ['za', 'na', 'o', 's'],
          correct: 0,
          hint: 'You fight FOR something.',
          explanation: 'boriti se za + accusative.',
        },
        {
          q: 'Slažem se ___ da je to važno.',
          options: ['Vama', 's Vama', 'za Vas', 'na Vas'],
          correct: 1,
          hint: 'slagati se always takes a preposition and the instrumental.',
          explanation: 's Vama — instrumental with s.',
        },
        {
          q: 'U Hrvatskoj živi i ___ manjina.',
          options: ['Talijanska', 'talijanski', 'Talijani', 'talijanska'],
          correct: 3,
          hint: 'An adjective, inside the sentence, agreeing with a feminine noun.',
          explanation: 'talijanska — small letter, feminine.',
        },
        {
          q: 'Zakon zabranjuje ___ na temelju vjere.',
          options: ['diskriminaciju', 'diskriminacija', 'diskriminaciji', 'diskriminacijom'],
          correct: 0,
          hint: 'It is the object of zabranjuje.',
          explanation: 'diskriminaciju — accusative.',
        },
        {
          q: '___ da je globalizacija donijela više koristi nego štete.',
          options: ['Slažem', 'Smatram', 'Bojim', 'Borim'],
          correct: 1,
          hint: 'A formal way to give your view, without se.',
          explanation: 'Smatram da… — I believe that…',
        },
        {
          q: 'Svi ljudi rađaju se slobodni i jednaki u ___.',
          options: ['dostojanstvo', 'dostojanstvom', 'dostojanstvu', 'dostojanstva'],
          correct: 2,
          hint: 'u + locative of a neuter noun.',
          explanation: 'u dostojanstvu — locative.',
        },
        {
          q: 'Ne bih se ___ s tim. (a woman speaking)',
          options: ['složio', 'složili', 'složile', 'složila'],
          correct: 3,
          hint: 'The participle agrees with the speaker.',
          explanation: 'složila — feminine singular.',
        },
        {
          type: 'type',
          q: 'Imate pravo na ____. (sloboda — accusative)',
          answer: 'slobodu',
          hint: 'na + accusative of a feminine noun in -a.',
          explanation: 'slobodu — accusative.',
        },
        {
          type: 'type',
          q: 'Ona se ____ za prava žena. (zalagati se, ona)',
          answer: 'zalaže',
          hint: 'The g turns into ž in the present.',
          explanation: 'zalaže — zalagati → zalažem, zalaže.',
        },
        {
          type: 'type',
          q: 'Zakon štiti prava nacionalnih manjina i zabranjuje ____. (diskriminacija — accusative)',
          answer: 'diskriminaciju',
          hint: 'The object of zabranjuje: a feminine noun in -a takes -u.',
          explanation: 'diskriminaciju — accusative.',
        },
        {
          type: 'type',
          q: 'Djelomično se ____ s Vama. (slagati se, ja)',
          answer: 'slažem',
          hint: 'The g of slagati changes to ž in the present.',
          explanation: 'slažem — slagati → slažem.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Svatko ima pravo ___ život."',
        options: ['na', 'za', 'o', 'od'],
        correct: 0,
        explanation: 'pravo na + accusative: pravo na život.',
      },
      {
        q: 'Complete: "Mnoge žene su se borile ___ pravo glasa."',
        options: ['na', 'za', 'o', 's'],
        correct: 1,
        explanation: 'boriti se za + accusative.',
      },
      {
        q: 'When was the Universal Declaration of Human Rights adopted?',
        options: ['1918', '1945', '1990', '1948'],
        correct: 3,
        explanation: 'On 10 December 1948, by the UN General Assembly.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Slažem se Vama.', 'Slažem se s Vas.', 'Slažem se s Vama.', 'Slažem se na Vama.'],
        correct: 2,
        explanation: 'slagati se takes s + instrumental: s Vama.',
      },
      {
        q: 'What does "kršenje ljudskih prava" mean?',
        options: [
          'the protection of human rights',
          'the violation of human rights',
          'the history of human rights',
          'the list of human rights',
        ],
        correct: 1,
        explanation: 'kršiti = to violate; kršenje = violation.',
      },
      {
        q: 'Which phrase stresses a point in a formal discussion?',
        options: [
          'Treba naglasiti da…',
          'Ne bih se složio…',
          'Slažem se s Vama…',
          'Djelomično se slažem…',
        ],
        correct: 0,
        explanation: 'Treba naglasiti da… — it must be stressed that…',
      },
    ],
    vocab: [
      ['ljudska prava', 'human rights', 'Opća deklaracija štiti ljudska prava.'],
      ['sloboda govora', 'freedom of speech', 'Sloboda govora temelj je demokracije.'],
      ['jednakost', 'equality', 'Borimo se za jednakost svih ljudi.'],
      ['ravnopravnost', 'equal rights', 'Ravnopravnost spolova je zajamčena Ustavom.'],
      ['dostojanstvo', 'dignity', 'Svaki čovjek ima svoje dostojanstvo.'],
      ['manjina', 'minority', 'Talijanska manjina živi uglavnom u Istri.'],
      ['diskriminacija', 'discrimination', 'Diskriminacija je zabranjena zakonom.'],
      ['globalizacija', 'globalisation', 'Globalizacija ima prednosti i nedostatke.'],
      ['boriti se', 'to fight', 'Bore se za bolje uvjete rada.'],
      ['smatrati', 'to believe, to consider', 'Smatram da ste u pravu.'],
    ],
  },

  'relative-pronouns-cases': {
    worked: [
      {
        title: 'Gender From the Noun, Case From the Clause',
        problem: 'Prevedi: "The friend I travel with lives in Split." (a woman)',
        en: 'The friend I travel with lives in Split.',
        steps: [
          {
            label: 'Gender',
            text: 'prijateljica is feminine singular, so a feminine form of koji.',
          },
          { label: 'Case', text: 'I travel WITH her: s + instrumental → s kojom.' },
          {
            label: 'Order',
            text: 'Preposition first, then the verb of the relative clause, then the main verb.',
          },
        ],
        answer: 'Prijateljica s kojom putujem živi u Splitu.',
      },
      {
        title: 'Clitics After the Relative',
        problem: 'Prevedi: "The book I gave you is on the table."',
        en: 'The book I gave you is on the table.',
        steps: [
          { label: 'The relative', text: 'knjiga is feminine; it is the object of gave: koju.' },
          { label: 'The clitics', text: 'sam (auxiliary) and ti (to you) — auxiliary first.' },
          { label: 'Position', text: 'The cluster comes straight after koju: koju sam ti dao.' },
        ],
        answer: 'Knjiga koju sam ti dao je na stolu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Čovjek ___ vidiš je moj ujak.',
          options: ['koji', 'kojeg', 'kojem', 'kojim'],
          correct: 1,
          hint: 'A living man as the object of vidiš.',
          explanation: 'kojeg — accusative of a living masculine noun.',
        },
        {
          q: 'Selo ___ dolazim jako je malo.',
          options: ['iz kojeg', 'u koje', 'koje', 'iz koje'],
          correct: 0,
          hint: 'Coming FROM a place: iz + genitive, and selo is neuter.',
          explanation: 'iz kojeg — genitive, masculine/neuter.',
        },
        {
          q: 'Djeca ___ pomažem uče za ispit.',
          options: ['koja', 'koje', 'kojima', 'kojih'],
          correct: 2,
          hint: 'pomagati takes the dative, and it is plural.',
          explanation: 'kojima — dative plural.',
        },
        {
          q: 'Kuća ___ smo odrasli prodana je.',
          options: ['kojoj', 'koju', 'koja', 'u kojoj'],
          correct: 3,
          hint: 'IN which: a preposition and the locative.',
          explanation: 'u kojoj — locative, feminine.',
        },
        {
          q: 'Svatko ___ želi može doći.',
          options: ['tko', 'koji', 'što', 'čiji'],
          correct: 0,
          hint: 'The person-pronoun used after an indefinite like every-one.',
          explanation: 'svatko tko — whoever.',
        },
        {
          q: 'To je sve ___ znam.',
          options: ['koje', 'što', 'tko', 'čije'],
          correct: 1,
          hint: 'The thing-pronoun used after all, that, something, nothing.',
          explanation: 'sve što — all that.',
        },
        {
          q: 'Imam susjeda ___ kći svira violinu.',
          options: ['čiji', 'čije', 'čija', 'čijeg'],
          correct: 2,
          hint: 'It agrees with the thing owned — here a daughter.',
          explanation: 'čija — feminine, agreeing with kći.',
        },
        {
          q: 'Pas ___ sam se bojao bio je ogroman.',
          options: ['kojem', 'kojim', 'koji', 'kojeg'],
          correct: 3,
          hint: 'bojati se takes the genitive.',
          explanation: 'kojeg — genitive, masculine.',
        },
        {
          type: 'type',
          q: 'Žena s ____ radim zove se Ivana. (koji)',
          answer: 'kojom',
          hint: 'With whom: the instrumental, feminine.',
          explanation: 's kojom — feminine instrumental.',
        },
        {
          type: 'type',
          q: 'Ljudi o ____ pričaš upravo su došli. (koji)',
          answer: 'kojima',
          hint: 'o + locative, plural.',
          explanation: 'o kojima — locative plural.',
        },
        {
          type: 'type',
          q: 'Ono o ____ govoriš nije istina. (što)',
          answer: 'čemu',
          hint: 'The locative of što.',
          explanation: 'o čemu — the locative of što.',
        },
        {
          type: 'type',
          q: 'Pismo koje ____ ti poslao nije stiglo. (biti — the auxiliary, ja)',
          answer: 'sam',
          hint: 'The past-tense auxiliary for ja comes before the dative clitic.',
          explanation: 'koje sam ti poslao — auxiliary first.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Restoran ___ večeramo nalazi se uz more."',
        options: ['koji', 'u kojem', 'kojem', 'u koji'],
        correct: 1,
        explanation: 'Where we dine: u + locative, preposition first.',
      },
      {
        q: 'Complete: "Prijatelji ___ sam pisao još mi nisu odgovorili."',
        options: ['koje', 'kojih', 'kojima', 'koji'],
        correct: 2,
        explanation: 'I wrote TO them: dative plural, kojima.',
      },
      {
        q: 'Complete: "To je film ___ sam gledao tri puta."',
        options: ['koji', 'kojeg', 'kojem', 'kojim'],
        correct: 0,
        explanation:
          'film is a masculine thing and the object, so the accusative equals the nominative: koji.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Žena koja sam upoznao je liječnica.',
          'Žena kojoj sam upoznao je liječnica.',
          'Žena koju upoznao sam je liječnica.',
          'Žena koju sam upoznao je liječnica.',
        ],
        correct: 3,
        explanation: 'She is the object: koju, and the auxiliary follows straight after it.',
      },
      {
        q: 'Complete: "Onaj ___ sam pomogao zahvalio mi se."',
        options: ['tko', 'kome', 'koga', 'kim'],
        correct: 1,
        explanation: 'pomoći takes the dative: onaj kome (komu) sam pomogao.',
      },
      {
        q: 'Complete: "Ovo je profesor ___ knjigu čitamo."',
        options: ['čiji', 'čija', 'čiju', 'čije'],
        correct: 2,
        explanation: 'čiji agrees with knjigu — feminine, accusative: čiju.',
      },
    ],
    vocab: [
      ['koji', 'who, which (relative)', 'Čovjek koji tamo stoji je moj otac.'],
      ['čiji', 'whose', 'Susjeda čiji sin svira gitaru vrlo je ljubazna.'],
      ['onaj tko', 'whoever, the one who', 'Onaj tko rano ustaje ima više vremena.'],
      ['ono što', 'what, the thing that', 'Ono što kažeš je zanimljivo.'],
      ['odrasti', 'to grow up', 'Grad u kojem sam odrastao je malen.'],
      ['upoznati', 'to meet, to get to know', 'Kolega kojeg sam upoznao radi u Zagrebu.'],
      ['posuditi', 'to lend, to borrow', 'Knjiga koju sam ti posudio je zanimljiva.'],
      ['razmišljati', 'to think about', 'To je ono o čemu razmišljam.'],
    ],
  },
};
