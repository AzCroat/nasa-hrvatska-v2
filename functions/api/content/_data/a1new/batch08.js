// functions/api/content/_data/a1new/batch08.js
//
// New A1 lessons, batch 08 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// Six lessons: instrumental-place (76), instrumental-pronouns (77), genitive-partitive (79),
// nemati-genitive (80), genitive-prepositions (81), genitive-pronouns (82).
//
// Authoring notes that are claims about Croatian, stated so a reviewer can check them:
//   - između takes the GENITIVE in standard Croatian (između kuće i škole), so it is taught
//     in genitive-prepositions, not with pred/pod/nad/za + instrumental. Lesson 76 only
//     points the learner at the phrase they already met in the place lesson.
//   - mnom/mnome, njim/njime, njom/njome are both standard; typed answers accept both.
//   - After nemam with ONE countable thing, both the accusative (Nemam auto) and the
//     genitive (Nemam auta) are heard; neither is tested as wrong. After nema (there is
//     no …) only the genitive is used.
//   - Partitive genitive and accusative are BOTH correct and mean different things
//     (Kupio sam kruha = some bread; Kupio sam kruh = a loaf / the bread).
//   - No imperative (taught at 94) is used anywhere in this batch.

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'instrumental-place',
    masterOrder: 76,
    prerequisites: ['instrumental-intro', 'prepositions-place'],
    objectives: [
      'Say where something is with pod, nad, pred and za: pod stolom, pred kućom',
      'Tell a place (pod stolom) from a movement to it (pod stol)',
      'Use za for "behind" and for sitting at a table: za kućom, za stolom',
    ],
  },
  {
    id: 'instrumental-pronouns',
    masterOrder: 77,
    prerequisites: ['instrumental-intro', 'object-pronouns'],
    objectives: [
      'Say who you are with: sa mnom, s tobom, s njim, s njom',
      'Use s nama, s vama, s njima and ask s kim?',
      'Remember why it is sa mnom and never plain s before mnom',
    ],
  },
  {
    id: 'genitive-partitive',
    masterOrder: 79,
    prerequisites: ['genitive-intro', 'food-drink'],
    objectives: [
      'Order an amount of anything: čaša vode, boca vina, komad torte',
      'Use malo, puno, dosta and previše with the genitive',
      'Offer "some": Hoćeš li kave? — and tell kruha (some bread) from kruh (the bread)',
    ],
  },
  {
    id: 'nemati-genitive',
    masterOrder: 80,
    prerequisites: ['genitive-intro', 'imati-nemati', 'negation'],
    objectives: [
      'Say what is missing: Nema mlijeka, Nemam vremena',
      'Say it in the past and future: Nije bilo vode, Neće biti nastave',
      'Know where Croatians say it two ways: Nemam auto / Nemam auta',
    ],
  },
  {
    id: 'genitive-prepositions',
    masterOrder: 81,
    prerequisites: ['genitive-intro', 'prepositions-place'],
    objectives: [
      'Use iz, s, od, do, kod, bez, blizu, pokraj and između with the genitive',
      'Choose iz or s by following u and na: iz škole, s posla',
      'Say where you are from, who something is from, and whose place you are at',
    ],
  },
  {
    id: 'genitive-pronouns',
    masterOrder: 82,
    prerequisites: ['genitive-intro', 'object-pronouns'],
    objectives: [
      'Use pronouns after prepositions: kod mene, bez tebe, od njega, blizu nje',
      'Say who is not here: Nema ga, Nema je, Nema ih',
      'Tell nje (genitive) from nju (accusative)',
    ],
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// 76 · instrumental-place
// ═════════════════════════════════════════════════════════════════════════════
const L_INSTRUMENTAL_PLACE = {
  id: 'instrumental-place',
  title: 'Under, Over, In Front, Behind',
  subtitle: 'pod, nad, pred and za: saying where something is',
  icon: '📦',
  level: 'A1',
  duration: '~7 min',
  color: '#0d9488',
  bg: '#f0fdfa',
  slides: [
    {
      type: 'intro',
      title: 'Four Small Words, One Ending You Know',
      body: 'You already say s bratom (with my brother) and s Anom (with Ana) — the noun after s takes the ending called the instrumental. Four more small words take exactly the same ending when they say WHERE something is: pod (under), nad (over, above), pred (in front of) and za (behind, or at a table). Mačka je pod stolom — the cat is under the table. No new endings to learn, only four new words.',
      icon: '📦',
    },
    {
      type: 'rule',
      title: 'The Ending You Already Know',
      body: 'A masculine or neuter noun adds -om: stol → pod stolom, kino → pred kinom. If the noun ends in a soft sound (j, lj, nj, č, ć, š, ž, đ) or is a neuter in -e, it takes -em instead: muzej → pred muzejem, more → nad morem. A feminine noun in -a swaps it for -om: kuća → pred kućom, škola → za školom. These are the same endings as s bratom and s Anom.',
      highlight: 'stol → pod stolom',
    },
    {
      type: 'table',
      title: 'The Four Place Words',
      headers: ['Word', 'Meaning', 'Example', 'English'],
      rows: [
        ['pod', 'under', 'Mačka je pod stolom.', 'The cat is under the table.'],
        ['nad', 'over, above', 'Lampa visi nad stolom.', 'The lamp hangs above the table.'],
        ['pred', 'in front of', 'Auto je pred kućom.', 'The car is in front of the house.'],
        ['za', 'behind', 'Vrt je za kućom.', 'The garden is behind the house.'],
        ['za', 'at (a table, a desk)', 'Sjedimo za stolom.', 'We are sitting at the table.'],
      ],
    },
    {
      type: 'rule',
      title: 'Za Has Two Jobs Here',
      body: 'With the -om ending, za is a place. It means "behind" (za kućom — behind the house) and also "at" for anything you sit at and work at: za stolom (at the table), za računalom (at the computer). You met za earlier meaning "for" — Kupujem cvijeće za mamu. That za is followed by the accusative. The ending tells you which za you are hearing.',
      highlight: 'za stolom',
    },
    {
      type: 'rule',
      title: 'Where It Is, or Where It Goes',
      body: 'This is the same pairing you know from u školi (in school) and u školu (into school). When something IS in a place, the noun takes the instrumental: Knjiga je pod krevetom. When something MOVES to that place, the noun takes the accusative: Stavljam knjigu pod krevet. Ask yourself: is it already there, or on its way there?',
      highlight: 'pod krevetom · pod krevet',
    },
    {
      type: 'rule',
      title: 'Two Ways to Say It',
      body: 'In the place lesson you met ispred kuće and ispod stola as fixed phrases. They mean the same as pred kućom and pod stolom, but ispred and ispod take a different ending, the genitive, which the next lessons explain. Both pairs are correct Croatian and you will hear both. Između (between) belongs with ispred and ispod, not with pred and pod: you already know it as a phrase.',
      highlight: 'pred kućom = ispred kuće',
    },
    {
      type: 'example',
      title: 'Where Things Are',
      items: [
        {
          hr: 'Mačka spava pod stolom.',
          en: 'The cat is sleeping under the table.',
          note: 'stol → stolom',
        },
        {
          hr: 'Naš auto je pred kućom.',
          en: 'Our car is in front of the house.',
          note: 'kuća → kućom',
        },
        {
          hr: 'Lampa visi nad stolom.',
          en: 'The lamp hangs above the table.',
          note: 'nad = over, above',
        },
        {
          hr: 'Vrt je za kućom.',
          en: 'The garden is behind the house.',
          note: 'za + -om = behind',
        },
        {
          hr: 'Čekam te pred školom u osam.',
          en: 'I will wait for you in front of the school at eight.',
          note: 'škola → školom',
        },
        {
          hr: 'Sastanak je pred muzejem.',
          en: 'The meeting is in front of the museum.',
          note: 'muzej ends in j, so -em',
        },
      ],
    },
    {
      type: 'example',
      title: 'At the Table, Over the Sea',
      items: [
        {
          hr: 'Cijela obitelj sjedi za stolom.',
          en: 'The whole family is sitting at the table.',
          note: 'za stolom = at the table',
        },
        {
          hr: 'Moj brat cijeli dan sjedi za računalom.',
          en: 'My brother sits at the computer all day.',
          note: 'računalo → računalom',
        },
        {
          hr: 'Galebovi lete nad morem.',
          en: 'Seagulls are flying over the sea.',
          note: 'more is neuter in -e, so -em',
        },
        {
          hr: 'Ključ je pod tepihom.',
          en: 'The key is under the rug.',
          note: 'a place: instrumental',
        },
        {
          hr: 'Stavljam ključ pod tepih.',
          en: 'I am putting the key under the rug.',
          note: 'a movement: accusative',
        },
        {
          hr: 'Avion leti nad Zagrebom.',
          en: 'The plane is flying over Zagreb.',
          note: 'names take the ending too',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Lopta je pod ___." (The ball is under the bed — "krevet".)',
      options: ['krevet', 'krevetom', 'krevetu', 'kreveta'],
      correct: 1,
      explanation:
        'The ball is already there, so pod takes the instrumental, and a masculine noun adds -om: pod krevetom. "Pod krevet" would be right only for putting the ball there.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence means "We are sitting at the table"?',
      options: [
        'Sjedimo za stol.',
        'Sjedimo pod stolom.',
        'Sjedimo za stolom.',
        'Sjedimo nad stolom.',
      ],
      correct: 2,
      explanation:
        'Za with the -om ending means "at" a table: Sjedimo za stolom. "Za stol" has the accusative ending, which a place does not take, and pod and nad mean under and over.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, keeping the dictionary form after the place word: "Mačka je pod stol." When the cat is already there, the noun takes the instrumental: pod stolom. Second, using the place ending for a movement: "Stavljam knjigu pod krevetom." Putting something somewhere takes the accusative: pod krevet. Third, reading every za as "for": Sjedim za stolom means I am sitting at the table — with -om, za is a place.',
      highlight: 'pod stolom',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Auto je ___." (in front of the house — "kuća")',
          options: ['pred kuću', 'pred kućom', 'pred kuća', 'pred kući'],
          correct: 1,
          explanation:
            'A place takes the instrumental, and a feminine noun swaps -a for -om: pred kućom. "Pred kuću" has the accusative ending, which belongs to a movement.',
        },
        {
          q: 'Which word means "over, above"?',
          options: ['pod', 'za', 'pred', 'nad'],
          correct: 3,
          explanation:
            'nad = over, above. pod is under, pred is in front of, and za is behind or at.',
        },
        {
          q: 'Complete: "Avion leti nad ___." (the sea — "more")',
          options: ['morem', 'moru', 'more', 'mora'],
          correct: 0,
          explanation:
            'A neuter noun in -e takes -em in the instrumental: nad morem. "Moru" is the locative you know from na moru.',
        },
        {
          q: 'Which sentence describes a MOVEMENT to a place?',
          options: [
            'Knjiga je pod krevetom.',
            'Mačka spava pod stolom.',
            'Stavljam knjigu pod krevet.',
            'Vrt je za kućom.',
          ],
          correct: 2,
          explanation:
            'Stavljam knjigu pod krevet — the book is on its way there, so krevet takes the accusative. The other three say where something already is, with the instrumental.',
        },
        {
          q: 'What does "Sjedim za računalom" mean?',
          options: [
            'I am sitting at the computer.',
            'I am sitting for the computer.',
            'I am sitting under the computer.',
            'I am buying a computer.',
          ],
          correct: 0,
          explanation: 'With the -om ending, za is a place: at the computer.',
        },
        {
          q: 'Complete: "Čekam te pred ___." (the museum — "muzej")',
          options: ['muzejom', 'muzejem', 'muzeju', 'muzej'],
          correct: 1,
          explanation: 'muzej ends in j, a soft sound, so it takes -em, not -om: pred muzejem.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Place Words — Key Takeaways',
      points: [
        'pod (under), nad (over), pred (in front of), za (behind, at) + the instrumental for a place',
        'Same endings as s bratom: -om, soft -em, feminine -om',
        'Already there → instrumental (pod stolom); moving there → accusative (pod stol)',
        'za + -om is a place: za kućom, za stolom; za + accusative is "for"',
        'pred kućom = ispred kuće — both correct',
      ],
    },
  ],
};

const P_INSTRUMENTAL_PLACE = {
  worked: [
    {
      title: 'The Cat Under the Table',
      problem: '"The cat is under the table."',
      en: 'The cat is under the table.',
      steps: [
        { label: 'The place word', text: 'under = pod.' },
        {
          label: 'There or going there?',
          text: 'The cat is already there — nothing is moving — so the noun takes the instrumental.',
        },
        { label: 'The ending', text: 'stol is masculine and ends in a consonant: add -om.' },
      ],
      answer: 'Mačka je pod stolom.',
    },
    {
      title: 'Where It Is, or Where It Goes',
      problem: '"I put the book under the bed." / "The book is under the bed."',
      en: 'Movement first, then the place.',
      steps: [
        {
          label: 'Sentence one',
          text: 'The book is moving to the spot, so krevet takes the accusative — for a thing that is masculine, that looks like the dictionary form.',
        },
        {
          label: 'Sentence two',
          text: 'The book is already there, so krevet takes the instrumental: -om.',
        },
        {
          label: 'Same word, two endings',
          text: 'The ending is what tells the listener which you mean.',
        },
      ],
      answer: 'Stavljam knjigu pod krevet. · Knjiga je pod krevetom.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Mačka je pod ___. (the bed — krevet)',
        options: ['krevet', 'krevetom', 'krevetu', 'kreveta'],
        correct: 1,
        hint: 'The cat is already there: a place, so the instrumental ending.',
        explanation: 'pod krevetom.',
      },
      {
        q: 'Lampa visi ___ stolom. (above)',
        options: ['pod', 'nad', 'pred', 'za'],
        correct: 1,
        hint: 'The word for the space higher than something.',
        explanation: 'nad stolom — above the table.',
      },
      {
        q: 'Čekam te pred ___. (the cinema — kino)',
        options: ['kinu', 'kino', 'kinom', 'kina'],
        correct: 2,
        hint: 'A neuter noun in -o: the o becomes -om.',
        explanation: 'pred kinom.',
      },
      {
        q: 'Stavljam torbu pod ___. (moving it to the space under the bed)',
        options: ['krevetom', 'krevet', 'krevetu', 'kreveta'],
        correct: 1,
        hint: 'The bag is on its way there, so this is not the place ending.',
        explanation: 'pod krevet — a movement takes the accusative.',
      },
      {
        q: 'Galebovi lete nad ___. (the sea — more)',
        options: ['morom', 'moru', 'morem', 'mora'],
        correct: 2,
        hint: 'more ends in -e, so it takes the soft ending.',
        explanation: 'nad morem.',
      },
      {
        q: 'What does "Sjedimo za stolom" mean?',
        options: [
          'We are sitting at the table.',
          'We are sitting for the table.',
          'We are sitting on the table.',
          'We are going to the table.',
        ],
        correct: 0,
        hint: 'With the -om ending, za is a place, not "for".',
        explanation: 'At the table.',
      },
      {
        q: 'Vrt je ___ kućom. (behind)',
        options: ['nad', 'pod', 'za', 'pred'],
        correct: 2,
        hint: 'The same word also means "at" a table.',
        explanation: 'za kućom — behind the house.',
      },
      {
        q: 'Which ending does "muzej" take after pred?',
        options: ['-om', '-em', '-u', '-a'],
        correct: 1,
        hint: 'j counts as a soft sound.',
        explanation: 'pred muzejem.',
      },
      {
        type: 'type',
        q: 'Mačka spava pod ____. (stol)',
        answer: 'stolom',
        hint: 'A place, not a movement: add the instrumental ending.',
        explanation: 'Mačka spava pod stolom.',
      },
      {
        type: 'type',
        q: 'Naš auto je pred ____. (kuća)',
        answer: 'kućom',
        hint: 'Feminine -a changes to -om.',
        explanation: 'Naš auto je pred kućom.',
      },
      {
        type: 'type',
        q: 'Moj brat cijeli dan sjedi za ____. (računalo)',
        answer: 'računalom',
        hint: 'Neuter -o changes to -om.',
        explanation: 'za računalom — at the computer.',
      },
      {
        type: 'type',
        q: 'Avion leti nad ____. (Zagreb)',
        answer: 'Zagrebom',
        hint: 'A masculine noun ending in a consonant adds -om, names included.',
        explanation: 'nad Zagrebom.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Ključ je pod ___." (the rug — "tepih")',
      options: ['tepih', 'tepihu', 'tepihom', 'tepiha'],
      correct: 2,
      explanation: 'The key is already there: pod tepihom.',
    },
    {
      q: 'Which word means "in front of"?',
      options: ['pred', 'nad', 'pod', 'za'],
      correct: 0,
      explanation: 'pred = in front of: pred kućom, pred školom.',
    },
    {
      q: 'Complete: "Djeca se igraju za ___." (behind the school — "škola")',
      options: ['škola', 'školu', 'školom', 'školi'],
      correct: 2,
      explanation: 'za meaning "behind" takes the instrumental: za školom.',
    },
    {
      q: 'Which sentence says where something IS (no movement)?',
      options: [
        'Stavljam ključ pod tepih.',
        'Mačka ide pod stol.',
        'Stavljam torbu pod krevet.',
        'Ključ je pod tepihom.',
      ],
      correct: 3,
      explanation:
        'Ključ je pod tepihom — the instrumental ending says it is already there. The others move something, with the accusative.',
    },
    {
      q: 'Which pair means the same thing?',
      options: [
        'pred kućom = ispred kuće',
        'pod stolom = nad stolom',
        'za kućom = pred kućom',
        'nad morem = pod morem',
      ],
      correct: 0,
      explanation: 'pred kućom and ispred kuće both mean in front of the house.',
    },
    {
      q: 'Complete: "Cijela obitelj je za ___." (at the table — "stol")',
      options: ['stol', 'stola', 'stolu', 'stolom'],
      correct: 3,
      explanation: 'za stolom — at the table, a place, with the instrumental.',
    },
  ],
  vocab: [
    ['pod', 'under', 'Mačka je pod stolom.'],
    ['nad', 'over, above', 'Lampa visi nad stolom.'],
    ['pred', 'in front of', 'Čekam te pred školom.'],
    ['za', 'behind; at (a table)', 'Vrt je za kućom.'],
    ['krevet', 'bed', 'Lopta je pod krevetom.'],
    ['računalo', 'computer', 'Sjedi za računalom cijeli dan.'],
    ['tepih', 'rug, carpet', 'Ključ je pod tepihom.'],
    ['lampa', 'lamp', 'Lampa visi nad stolom.'],
    ['vrt', 'garden', 'Vrt je za kućom.'],
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// 77 · instrumental-pronouns
// ═════════════════════════════════════════════════════════════════════════════
const L_INSTRUMENTAL_PRONOUNS = {
  id: 'instrumental-pronouns',
  title: 'With Me, With You',
  subtitle: 'sa mnom, s tobom, s njim: pronouns in the instrumental',
  icon: '🤝',
  level: 'A1',
  duration: '~7 min',
  color: '#2563eb',
  bg: '#eff6ff',
  slides: [
    {
      type: 'intro',
      title: 'Who Are You With?',
      body: 'You can say s bratom (with my brother) and s Anom (with Ana). Now the short words: with me, with you, with him, with them. These are the instrumental forms of the pronouns — the last thing you need to talk about who you do things with. Hoćeš li ići u kino sa mnom? Do you want to go to the cinema with me?',
      icon: '🤝',
    },
    {
      type: 'table',
      title: 'The Forms',
      headers: ['Pronoun', 'Instrumental', 'With …', 'English'],
      rows: [
        ['ja', 'mnom (mnome)', 'sa mnom', 'with me'],
        ['ti', 'tobom', 's tobom', 'with you'],
        ['on', 'njim (njime)', 's njim', 'with him'],
        ['ona', 'njom (njome)', 's njom', 'with her'],
        ['ono', 'njim (njime)', 's njim', 'with it'],
        ['mi', 'nama', 's nama', 'with us'],
        ['vi', 'vama', 's vama', 'with you (more than one, or polite)'],
        ['oni, one, ona', 'njima', 's njima', 'with them'],
        ['tko', 'kim (kime)', 's kim?', 'with whom?'],
      ],
    },
    {
      type: 'rule',
      title: 'Sa mnom: s Gets an a',
      body: 'Before mnom, s becomes sa: sa mnom. Saying s and then m and n in one go is too hard, so Croatian adds a vowel — the same thing that happens in sa sestrom and sa ženom. Everywhere else in this lesson the plain s is used: s tobom, s njim, s nama, s vama.',
      highlight: 'sa mnom',
    },
    {
      type: 'rule',
      title: 'He, She and They Start with nj-',
      body: 'After a preposition, on, ona and oni use forms that start with nj-, just as you say za njega in the accusative: s njim (with him), s njom (with her), s njima (with them). The longer forms njime and njome are the same words with an extra -e; both are correct and you will hear both. The same goes for mnom and mnome.',
      highlight: 's njim · s njom · s njima',
    },
    {
      type: 'rule',
      title: 'Not Only With s',
      body: 'The four place words from the last lesson take the same forms: pred tobom (in front of you), za njim (behind him), nad nama (above us). With mnom, three of them also add an a: preda mnom, nada mnom, poda mnom. Za stays as it is: za mnom (behind me).',
      highlight: 'preda mnom',
    },
    {
      type: 'example',
      title: 'Who With?',
      items: [
        {
          hr: 'Hoćeš li ići u kino sa mnom?',
          en: 'Do you want to go to the cinema with me?',
          note: 'ja → sa mnom',
        },
        { hr: 'Rado idem s tobom.', en: 'I will gladly go with you.', note: 'ti → s tobom' },
        {
          hr: 'Ana živi s nama u Zagrebu.',
          en: 'Ana lives with us in Zagreb.',
          note: 'mi → s nama',
        },
        {
          hr: 'Razgovaram s njom svaki dan.',
          en: 'I talk to her every day.',
          note: 'razgovarati s = talk to',
        },
        {
          hr: 'Moj brat radi s njim u hotelu.',
          en: 'My brother works with him at the hotel.',
          note: 'on → s njim',
        },
        {
          hr: 'S kim ideš na more?',
          en: 'Who are you going to the seaside with?',
          note: 'tko → s kim',
        },
      ],
    },
    {
      type: 'example',
      title: 'More in Context',
      items: [
        {
          hr: 'Moji roditelji idu na more, a ja idem s njima.',
          en: 'My parents are going to the seaside, and I am going with them.',
          note: 'oni → s njima',
        },
        {
          hr: 'Možemo li razgovarati s vama?',
          en: 'Can we talk to you?',
          note: 'polite vi → s vama',
        },
        {
          hr: 'Pas uvijek ide za njim.',
          en: 'The dog always walks behind him.',
          note: 'za + njim',
        },
        {
          hr: 'Preda mnom je cijeli slobodan dan.',
          en: 'A whole free day is ahead of me.',
          note: 'pred + mnom → preda mnom',
        },
        {
          hr: 'Dijete sjedi za stolom s nama.',
          en: 'The child is sitting at the table with us.',
          note: 'za stolom + s nama',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Hoćeš li ići u grad ___?" (with me)',
      options: ['sa ja', 'sa mnom', 'sa mi', 'sa meni'],
      correct: 1,
      explanation:
        'The instrumental of ja is mnom, and s becomes sa before it: sa mnom. "Ja" is the subject form, "mi" the short dative and "meni" the long dative.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which is correct? (I talk to her every day.)',
      options: [
        'Razgovaram s ona svaki dan.',
        'Razgovaram s nju svaki dan.',
        'Razgovaram s njoj svaki dan.',
        'Razgovaram s njom svaki dan.',
      ],
      correct: 3,
      explanation:
        'After s, ona becomes njom: s njom. "Nju" is the accusative and "njoj" the dative — neither follows s meaning "with".',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, keeping the subject form after s: "s ja", "s on". After a preposition the pronoun changes: sa mnom, s njim. Second, dropping the n: "s im", "s om". After a preposition he, she and they always start with nj-: s njim, s njom, s njima. Third, mixing up nama and vama: s nama is with us, s vama is with you.',
      highlight: 'sa mnom',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Idem u kino ___." (with you — to a friend)',
          options: ['s ti', 's tobom', 's tvoj', 's tebi'],
          correct: 1,
          explanation: 'The instrumental of ti is tobom: s tobom. "Tebi" is the dative.',
        },
        {
          q: 'Which is the instrumental of "mi" (we)?',
          options: ['nas', 'mi', 'nam', 'nama'],
          correct: 3,
          explanation: 'nama: s nama, with us. "Nas" is the accusative and "nam" the short dative.',
        },
        {
          q: 'Complete: "Moja sestra živi ___." (with them)',
          options: ['s njih', 's oni', 's njima', 's ih'],
          correct: 2,
          explanation: 'They becomes njima after s: s njima.',
        },
        {
          q: 'Complete: "___ ideš na more?" (Who are you going to the seaside with?)',
          options: ['S kim', 'S tko', 'S tkom', 'S tkim'],
          correct: 0,
          explanation: 'The instrumental of tko is kim (or kime): S kim ideš na more?',
        },
        {
          q: 'What is wrong with "Ana razgovara s on."?',
          options: [
            'on should be njim — after s, "he" becomes njim',
            's should be sa',
            'razgovara should be razgovaraju',
            'Nothing is wrong',
          ],
          correct: 0,
          explanation: 'Ana razgovara s njim. — the pronoun takes its instrumental nj- form.',
        },
        {
          q: 'Which sentence is correct? (The dog walks behind him.)',
          options: ['Pas ide za on.', 'Pas ide za im.', 'Pas ide za njim.', 'Pas ide za njemu.'],
          correct: 2,
          explanation:
            'za meaning "behind" takes the instrumental, and on becomes njim after a preposition. "Njemu" is the dative.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'With Me, With You — Key Takeaways',
      points: [
        'sa mnom, s tobom, s njim, s njom, s nama, s vama, s njima',
        'sa before mnom — plain s everywhere else',
        'He, she and they start with nj- after a preposition',
        'njim/njime, njom/njome, mnom/mnome: both forms are correct',
        'S kim? — with whom?',
        'Place words too: za njim, pred tobom, preda mnom',
      ],
    },
  ],
};

const P_INSTRUMENTAL_PRONOUNS = {
  worked: [
    {
      title: 'With Me',
      problem: '"Are you coming to the cinema with me?"',
      en: 'Are you coming to the cinema with me?',
      steps: [
        { label: 'Who is with whom', text: 'with me = s + the instrumental of ja.' },
        { label: 'The form', text: 'The instrumental of ja is mnom.' },
        { label: 'The extra vowel', text: 'Before mnom, s becomes sa.' },
      ],
      answer: 'Ideš li u kino sa mnom?',
    },
    {
      title: 'With Him',
      problem: '"I play football with him."',
      en: 'I play football with him.',
      steps: [
        { label: 'Who is with whom', text: 'with him = s + the instrumental of on.' },
        { label: 'The nj- form', text: 'After a preposition, on becomes njim.' },
        { label: 'No extra vowel', text: 'Plain s is enough before nj.' },
      ],
      answer: 'Igram nogomet s njim.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Rado idem ___. (with you — to a friend)',
        options: ['s ti', 's tobom', 's tebi', 's tvoj'],
        correct: 1,
        hint: 'After s, ti changes completely; the form ends in -om.',
        explanation: 's tobom.',
      },
      {
        q: 'Ana živi ___. (with us)',
        options: ['s mi', 's nas', 's nama', 's nam'],
        correct: 2,
        hint: 'The instrumental of mi ends in -ma.',
        explanation: 's nama.',
      },
      {
        q: 'Razgovaram ___ svaki dan. (with her)',
        options: ['s ona', 's njom', 's je', 's nju'],
        correct: 1,
        hint: 'She becomes an nj- form ending like s Anom.',
        explanation: 's njom.',
      },
      {
        q: 'Možemo li razgovarati ___? (with you — politely)',
        options: ['s vama', 's vi', 's vas', 's vam'],
        correct: 0,
        hint: 'Polite you is vi; its instrumental ends like the one for mi.',
        explanation: 's vama.',
      },
      {
        q: '___ ideš u kino? (With whom)',
        options: ['S tko', 'S tkom', 'S kim', 'S tkim'],
        correct: 2,
        hint: 'The instrumental of tko is short — three letters.',
        explanation: 'S kim ideš u kino?',
      },
      {
        q: 'Pas ide za ___. (him)',
        options: ['on', 'njim', 'njemu', 'im'],
        correct: 1,
        hint: 'za meaning "behind" takes the same forms as s.',
        explanation: 'za njim — behind him.',
      },
      {
        q: 'Why is it "sa mnom" and not plain s?',
        options: [
          's cannot stand right before m and n, so an a is added',
          'sa is the polite form',
          'sa is only used by women',
          'sa is the plural',
        ],
        correct: 0,
        hint: 'Try saying the three consonants together in one breath.',
        explanation: 'An a makes it sayable — the same as sa sestrom.',
      },
      {
        q: 'Which pair means the same thing?',
        options: ['s njim = s njima', 's tobom = s vama', 's njim = s njime', 's nama = s njima'],
        correct: 2,
        hint: 'One pair is a short and a long form of the same word.',
        explanation: 'njim and njime are both "him" in the instrumental.',
      },
      {
        type: 'type',
        q: 'Hoćeš li ići na kavu ____? (with me)',
        answer: 'sa mnom',
        accept: ['sa mnome'],
        hint: 'Before this pronoun, the little word needs an extra vowel.',
        explanation: 'Hoćeš li ići na kavu sa mnom?',
      },
      {
        type: 'type',
        q: 'Moji roditelji idu na more. Idem s ____. (them)',
        answer: 'njima',
        hint: 'They becomes an nj- form ending in -ma.',
        explanation: 'Idem s njima.',
      },
      {
        type: 'type',
        q: 'Ivan je moj prijatelj. Često igram tenis s ____. (him)',
        answer: 'njim',
        accept: ['njime'],
        hint: 'He changes to an nj- form after a preposition.',
        explanation: 'Igram tenis s njim.',
      },
      {
        type: 'type',
        q: 'Ana je ovdje. Želim razgovarati s ____. (her)',
        answer: 'njom',
        accept: ['njome'],
        hint: 'She changes to an nj- form; the feminine instrumental ending is -om.',
        explanation: 'Želim razgovarati s njom.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Hoćeš li razgovarati ___?" (with me)',
      options: ['sa ja', 'sa mnom', 'sa mi', 'sa meni'],
      correct: 1,
      explanation: 'sa mnom — the instrumental of ja, with sa.',
    },
    {
      q: 'Which is the instrumental of "vi" (you, plural)?',
      options: ['vas', 'vam', 'vama', 'vi'],
      correct: 2,
      explanation: 'vama: s vama.',
    },
    {
      q: 'Complete: "Moj brat radi ___." (with her)',
      options: ['s ona', 's nju', 's njoj', 's njom'],
      correct: 3,
      explanation: 's njom — "nju" is the accusative and "njoj" the dative.',
    },
    {
      q: 'Complete: "Djeca se igraju ___." (with him)',
      options: ['s njim', 's on', 's im', 's njemu'],
      correct: 0,
      explanation: 's njim — after a preposition, on becomes njim.',
    },
    {
      q: 'What does "s nama" mean?',
      options: ['with us', 'with you', 'with them', 'with me'],
      correct: 0,
      explanation: 'nama is the instrumental of mi.',
    },
    {
      q: 'What is wrong with "Idem na more s njih."?',
      options: [
        'njih should be njima — after s meaning "with", the instrumental',
        's should be sa',
        'more should be moru',
        'Nothing is wrong',
      ],
      correct: 0,
      explanation: 'Idem na more s njima. — "njih" is the accusative.',
    },
  ],
  vocab: [
    ['sa mnom', 'with me', 'Hoćeš li ići sa mnom?'],
    ['s tobom', 'with you', 'Rado idem s tobom.'],
    ['s njim', 'with him', 'Moj brat radi s njim.'],
    ['s njom', 'with her', 'Razgovaram s njom svaki dan.'],
    ['s nama', 'with us', 'Ana živi s nama.'],
    ['s vama', 'with you (plural, polite)', 'Možemo li razgovarati s vama?'],
    ['s njima', 'with them', 'Idem na more s njima.'],
    ['s kim?', 'with whom?', 'S kim ideš na more?'],
    ['razgovarati s', 'to talk to, with', 'Razgovaram s mamom.'],
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// 79 · genitive-partitive
// ═════════════════════════════════════════════════════════════════════════════
const L_GENITIVE_PARTITIVE = {
  id: 'genitive-partitive',
  title: 'Some Water, a Little Bread',
  subtitle: 'Amounts of things: the genitive after a glass, a piece, a little, a lot',
  icon: '🥛',
  level: 'A1',
  duration: '~7 min',
  color: '#ca8a04',
  bg: '#fefce8',
  slides: [
    {
      type: 'intro',
      title: 'How Much Of It?',
      body: 'You know čaša vode (a glass of water) and šalica kave (a cup of coffee). Here is the whole idea behind them: whenever you talk about an AMOUNT of a substance — a glass, a piece, a kilo, a little, a lot, or just "some" — the substance goes into the genitive. It is the most useful thing to know in a café, a shop or a kitchen.',
      icon: '🥛',
    },
    {
      type: 'table',
      title: 'Containers and Pieces',
      headers: ['Substance', 'Genitive', 'An amount', 'English'],
      rows: [
        ['voda', 'vode', 'čaša vode', 'a glass of water'],
        ['čaj', 'čaja', 'šalica čaja', 'a cup of tea'],
        ['vino', 'vina', 'boca vina', 'a bottle of wine'],
        ['mlijeko', 'mlijeka', 'litra mlijeka', 'a litre of milk'],
        ['kruh', 'kruha', 'kriška kruha', 'a slice of bread'],
        ['torta', 'torte', 'komad torte', 'a piece of cake'],
        ['meso', 'mesa', 'kilogram mesa', 'a kilo of meat'],
        ['juha', 'juhe', 'tanjur juhe', 'a plate of soup'],
      ],
    },
    {
      type: 'rule',
      title: 'Little, Much, Enough, Too Much',
      body: 'Four amount words work the same way: malo (a little), puno (a lot), dosta (enough, quite a lot), previše (too much). Malo kruha — a little bread. Puno šećera — a lot of sugar. Dosta mlijeka — enough milk. Previše kave — too much coffee. They never change; only the substance takes the genitive.',
      highlight: 'malo kruha',
    },
    {
      type: 'rule',
      title: 'Just "Some": the Genitive on Its Own',
      body: 'The genitive does not need an amount word at all. On its own it means "some, an amount I am not counting": Hoćeš li kave? — Would you like some coffee? Ima li kruha? — Is there any bread? Kupio sam mlijeka. — I bought some milk. This is how Croatians offer food and drink at home, so you will hear it all the time.',
      highlight: 'Hoćeš li kave?',
    },
    {
      type: 'rule',
      title: 'Some, or The? Genitive or Accusative',
      body: 'Both endings are correct after a verb like kupiti or popiti — they just say different things. Kupio sam kruha = I bought some bread (an amount). Kupio sam kruh = I bought a loaf, the bread (one whole thing). Popio sam vode = I drank some water. Popio sam vodu = I drank the water (that particular water, all of it). Choose by what you mean.',
      highlight: 'kruha · kruh',
    },
    {
      type: 'rule',
      title: 'The Amount Word Has Its Own Ending',
      body: 'The container or piece is a normal noun, so it takes whatever ending the sentence needs. In Na stolu je boca vina, the bottle is the subject: boca. In Pijem čašu vode, the glass is what you drink, so it takes the accusative: čašu. The substance after it stays in the genitive every time.',
      highlight: 'Pijem čašu vode',
    },
    {
      type: 'example',
      title: 'In the Café and the Kitchen',
      items: [
        {
          hr: 'Molim vas, čašu vode i šalicu čaja.',
          en: 'A glass of water and a cup of tea, please.',
          note: 'čaša → čašu (the object), vode stays genitive',
        },
        {
          hr: 'Za doručak jedem krišku kruha sa sirom.',
          en: 'For breakfast I eat a slice of bread with cheese.',
          note: 'kriška kruha',
        },
        {
          hr: 'Hoćeš li kave?',
          en: 'Would you like some coffee?',
          note: 'the genitive alone = some',
        },
        {
          hr: 'U hladnjaku ima mlijeka i sira.',
          en: 'There is some milk and cheese in the fridge.',
          note: 'ima + genitive = there is some',
        },
        {
          hr: 'Mama stavlja malo šećera u čaj.',
          en: 'Mum puts a little sugar in the tea.',
          note: 'malo + genitive',
        },
      ],
    },
    {
      type: 'example',
      title: 'Shopping and Eating',
      items: [
        {
          hr: 'Kupio sam kilogram mesa i bocu vina.',
          en: 'I bought a kilo of meat and a bottle of wine.',
          note: 'boca → bocu, vina stays',
        },
        {
          hr: 'Na tanjuru je puno riže.',
          en: 'There is a lot of rice on the plate.',
          note: 'riža → riže',
        },
        {
          hr: 'Želim komad torte i šalicu kave.',
          en: 'I would like a piece of cake and a cup of coffee.',
          note: 'torta → torte',
        },
        {
          hr: 'Popio sam vode i sad sam dobro.',
          en: 'I drank some water and now I am fine.',
          note: 'some water: genitive',
        },
        {
          hr: 'Popio sam vodu iz tvoje čaše.',
          en: 'I drank the water from your glass.',
          note: 'that water: accusative',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'How do you say "a bottle of wine"?',
      options: ['boca vino', 'boca vina', 'boca vinu', 'boca vinom'],
      correct: 1,
      explanation:
        'What is in the bottle goes into the genitive, and neuter -o becomes -a: boca vina.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What does "Hoćeš li čaja?" mean?',
      options: [
        'Would you like some tea?',
        'Is the tea hot?',
        'Do you drink tea every day?',
        'Where is the tea?',
      ],
      correct: 0,
      explanation: 'The genitive on its own means "some": would you like some tea?',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, using the accusative after an amount: "čaša vodu". The substance stays in the genitive: čaša vode. Second, forgetting that the amount word changes too: "Pijem čaša vode". The glass is what you drink, so: Pijem čašu vode. Third, thinking kruha and kruh mean the same thing: Kupio sam kruha is some bread, Kupio sam kruh is one loaf.',
      highlight: 'Pijem čašu vode',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Molim vas, šalicu ___." (tea — "čaj")',
          options: ['čaj', 'čaja', 'čaju', 'čajem'],
          correct: 1,
          explanation: 'What fills the cup takes the genitive, masculine -a: šalicu čaja.',
        },
        {
          q: 'Complete: "Stavljam malo ___ u kavu." (milk — "mlijeko")',
          options: ['mlijeko', 'mlijeku', 'mlijekom', 'mlijeka'],
          correct: 3,
          explanation: 'malo is an amount word, so the genitive: malo mlijeka.',
        },
        {
          q: 'What does "U hladnjaku ima sira" mean?',
          options: [
            'There is some cheese in the fridge.',
            'There is no cheese in the fridge.',
            'The cheese is not in the fridge.',
            'Where is the cheese?',
          ],
          correct: 0,
          explanation: 'ima + the genitive = there is some.',
        },
        {
          q: 'Which is correct? (I drink a glass of water every morning.)',
          options: [
            'Svako jutro pijem čaša vode.',
            'Svako jutro pijem čašu vodu.',
            'Svako jutro pijem čašu vode.',
            'Svako jutro pijem čaši vode.',
          ],
          correct: 2,
          explanation:
            'The glass is the object, so čašu; what is in it stays in the genitive, vode.',
        },
        {
          q: 'What is the difference between "Kupio sam kruh" and "Kupio sam kruha"?',
          options: [
            'kruh is a loaf, the bread; kruha is some bread',
            'kruha is wrong after kupio',
            'kruh is the plural',
            'There is no difference at all',
          ],
          correct: 0,
          explanation:
            'Both are correct: the accusative names one whole thing, the genitive an amount.',
        },
        {
          q: 'Complete: "Na stolu je boca ___." (oil — "ulje")',
          options: ['ulje', 'ulja', 'ulju', 'uljem'],
          correct: 1,
          explanation: 'Neuter nouns take -a in the genitive, those in -e included: boca ulja.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Amounts — Key Takeaways',
      points: [
        'An amount of a substance: the substance goes into the genitive',
        'čaša vode, boca vina, komad torte, kilogram mesa',
        'malo, puno, dosta, previše + genitive',
        'The genitive alone means "some": Hoćeš li kave?',
        'kruha (some bread) and kruh (the bread) are both correct, with different meanings',
        'The amount word takes its own ending: Pijem čašu vode',
      ],
    },
  ],
};

const P_GENITIVE_PARTITIVE = {
  worked: [
    {
      title: 'A Cup of Tea',
      problem: '"A cup of tea, please."',
      en: 'A cup of tea, please.',
      steps: [
        { label: 'The amount word', text: 'a cup = šalica.' },
        { label: 'What is in it', text: 'čaj goes into the genitive: masculine adds -a.' },
        {
          label: 'The cup itself',
          text: 'You are asking for the cup, so it is the object: feminine -a becomes -u.',
        },
      ],
      answer: 'Šalicu čaja, molim.',
    },
    {
      title: 'Some, or The?',
      problem: '"I bought some bread." / "I bought the bread."',
      en: 'Two sentences, two meanings.',
      steps: [
        { label: 'Some bread', text: 'An amount, with no amount word: the genitive on its own.' },
        {
          label: 'The bread',
          text: 'One whole loaf, an ordinary object: the accusative, which for kruh looks like the dictionary form.',
        },
        {
          label: 'Both are right',
          text: 'They are not a right and a wrong — they mean different things.',
        },
      ],
      answer: 'Kupio sam kruha. · Kupio sam kruh.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'čaša ___ (a glass of juice — sok)',
        options: ['sok', 'soka', 'soku', 'sokom'],
        correct: 1,
        hint: 'The substance takes the genitive; masculine adds one vowel.',
        explanation: 'čaša soka.',
      },
      {
        q: 'boca ___ (a bottle of wine — vino)',
        options: ['vino', 'vinu', 'vina', 'vinom'],
        correct: 2,
        hint: 'Neuter -o changes in the genitive.',
        explanation: 'boca vina.',
      },
      {
        q: 'malo ___ (a little milk — mlijeko)',
        options: ['mlijeka', 'mlijeko', 'mlijeku', 'mlijekom'],
        correct: 0,
        hint: 'malo is an amount word.',
        explanation: 'malo mlijeka.',
      },
      {
        q: 'puno ___ (a lot of sugar — šećer)',
        options: ['šećer', 'šećera', 'šećeru', 'šećerom'],
        correct: 1,
        hint: 'puno is an amount word too.',
        explanation: 'puno šećera.',
      },
      {
        q: 'Pijem ___ vode. (a glass — čaša)',
        options: ['čaša', 'čaše', 'čašu', 'čaši'],
        correct: 2,
        hint: 'The glass is what you drink, so it is the object.',
        explanation: 'Pijem čašu vode.',
      },
      {
        q: 'tanjur ___ (a plate of soup — juha)',
        options: ['juha', 'juhu', 'juhi', 'juhe'],
        correct: 3,
        hint: 'Feminine -a changes to -e in the genitive.',
        explanation: 'tanjur juhe.',
      },
      {
        q: 'What does "Kupio sam mlijeka" mean?',
        options: [
          'I bought some milk.',
          'I bought the milk.',
          'I did not buy any milk.',
          'I am buying milk now.',
        ],
        correct: 0,
        hint: 'The genitive alone, with no amount word.',
        explanation: 'Some milk.',
      },
      {
        q: 'Which word is NOT followed by the genitive?',
        options: ['malo', 'puno', 'čaša', 'dobar'],
        correct: 3,
        hint: 'Three of them measure an amount.',
        explanation: 'dobar (good) describes; it does not measure.',
      },
      {
        type: 'type',
        q: 'Molim vas, šalicu ____. (kava)',
        answer: 'kave',
        hint: 'An amount of a substance: feminine -a changes to -e.',
        explanation: 'šalicu kave.',
      },
      {
        type: 'type',
        q: 'Za doručak jedem krišku ____. (kruh)',
        answer: 'kruha',
        hint: 'A slice of something: the genitive.',
        explanation: 'krišku kruha.',
      },
      {
        type: 'type',
        q: 'Kupujem kilogram ____. (meso)',
        answer: 'mesa',
        hint: 'Neuter -o changes in the genitive.',
        explanation: 'kilogram mesa.',
      },
      {
        type: 'type',
        q: 'Želim komad ____. (torta)',
        answer: 'torte',
        hint: 'A piece of something: feminine -a changes to -e.',
        explanation: 'komad torte.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Kupujem kilogram ___." (cheese — "sir")',
      options: ['sir', 'siru', 'sira', 'sirom'],
      correct: 2,
      explanation: 'kilogram sira — the substance takes the genitive.',
    },
    {
      q: 'Complete: "U čaju ima previše ___." (sugar — "šećer")',
      options: ['šećera', 'šećer', 'šećeru', 'šećerom'],
      correct: 0,
      explanation: 'previše šećera — previše is an amount word.',
    },
    {
      q: 'What does "Hoćeš li kave?" mean?',
      options: [
        'Is the coffee ready?',
        'Would you like some coffee?',
        'Do you drink coffee every day?',
        'Where is the coffee?',
      ],
      correct: 1,
      explanation: 'The genitive alone means "some".',
    },
    {
      q: 'Which is correct? (I would like a plate of soup.)',
      options: [
        'Želim tanjur juha.',
        'Želim tanjur juhu.',
        'Želim tanjuru juhe.',
        'Želim tanjur juhe.',
      ],
      correct: 3,
      explanation: 'tanjur is the object (masculine, so unchanged); juha goes into the genitive.',
    },
    {
      q: 'Which sentence means "I drank some water"?',
      options: ['Popio sam vode.', 'Popio sam voda.', 'Popio sam vodom.', 'Popio sam vodi.'],
      correct: 0,
      explanation: 'Some water: the genitive, vode.',
    },
    {
      q: 'Complete: "Za desert jedem komad ___." (cake — "torta")',
      options: ['torta', 'tortu', 'torte', 'tortom'],
      correct: 2,
      explanation: 'komad torte — a piece of cake.',
    },
  ],
  vocab: [
    ['boca', 'bottle', 'Kupio sam bocu vina.'],
    ['komad', 'piece', 'Želim komad torte.'],
    ['kriška', 'slice', 'Jedem krišku kruha.'],
    ['tanjur', 'plate', 'Na tanjuru je puno riže.'],
    ['litra', 'litre', 'Treba mi litra mlijeka.'],
    ['sok', 'juice', 'Čašu soka, molim.'],
    ['sir', 'cheese', 'U hladnjaku ima sira.'],
    ['dosta', 'enough, quite a lot', 'Imamo dosta kruha.'],
    ['previše', 'too much', 'Piješ previše kave.'],
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// 80 · nemati-genitive
// ═════════════════════════════════════════════════════════════════════════════
const L_NEMATI_GENITIVE = {
  id: 'nemati-genitive',
  title: 'There Is No Milk',
  subtitle: 'nema, nemam and nije bilo: what is missing takes the genitive',
  icon: '🚫',
  level: 'A1',
  duration: '~7 min',
  color: '#dc2626',
  bg: '#fef2f2',
  slides: [
    {
      type: 'intro',
      title: 'Saying Something Is Missing',
      body: 'Nema kruha. Nemam vremena. Two of the most useful sentences in Croatian, and both run on the genitive. This lesson shows exactly when "not having" takes the genitive, how to say it in the past and the future — and the one place where Croatians say it two ways, both of them correct.',
      icon: '🚫',
    },
    {
      type: 'rule',
      title: 'Nema: There Is No …',
      body: 'Nema means "there is no, there isn\'t any". It never changes, and what is missing always goes into the genitive: Nema mlijeka (there is no milk). Nema autobusa (there is no bus). It works for people too: Nema Ivana — Ivan isn\'t here. Its partner ima means "there is some": Ima kruha. Ima li mlijeka? — Ima. / Nema.',
      highlight: 'Nema mlijeka.',
    },
    {
      type: 'rule',
      title: 'Nemam: I Have No …',
      body: "Nemam (I don't have) also takes the genitive for anything you cannot count — time, money, water, patience: Nemam vremena (I have no time). Nemamo novca (we have no money). One fixed phrase to learn as it is: Nemam pojma — I have no idea (pojam, notion, loses its a: pojma).",
      highlight: 'Nemam vremena.',
    },
    {
      type: 'rule',
      title: 'One Countable Thing: Both Are Heard',
      body: 'When nemam is followed by ONE thing you can count — a car, a sister, a bike — Croatians say it two ways: Nemam auto and Nemam auta. In everyday speech the first (the accusative) is the most common; the second (the genitive) is also correct and sounds a little more formal or emphatic. Neither is a mistake. This choice exists only after nemam: after nema (there is no), it is always the genitive — Nema auta pred kućom.',
      highlight: 'Nemam auto. / Nemam auta.',
    },
    {
      type: 'rule',
      title: 'In the Past and the Future',
      body: 'In the past, nema becomes nije bilo: Nije bilo kruha (there was no bread). In the future it becomes neće biti: Neće biti nastave (there will be no classes). The form is always bilo — neuter, singular — whatever the missing thing is: Nije bilo vode, Nije bilo Ivana.',
      highlight: 'Nije bilo kruha.',
    },
    {
      type: 'rule',
      title: 'Nema or Nije?',
      body: "Nije says what something is like, or where it is: Mlijeko nije hladno (the milk isn't cold). Ivan nije ovdje (Ivan isn't here). Nema says it is not there at all: Nema mlijeka (there is no milk). For a person, Ivan nije ovdje and Nema Ivana mean the same thing.",
      highlight: 'nije · nema',
    },
    {
      type: 'table',
      title: 'The Patterns',
      headers: ['Pattern', 'Example', 'English'],
      rows: [
        ['nema + genitive', 'Nema kruha.', 'There is no bread.'],
        ['ima + genitive', 'Ima kruha.', 'There is some bread.'],
        ['nemam + genitive', 'Nemam vremena.', 'I have no time.'],
        ['nije bilo + genitive', 'Nije bilo mlijeka.', 'There was no milk.'],
        ['neće biti + genitive', 'Neće biti vode.', 'There will be no water.'],
        ['nemam + one thing', 'Nemam auto. / Nemam auta.', "I don't have a car. (both heard)"],
      ],
    },
    {
      type: 'example',
      title: 'What Is Missing',
      items: [
        {
          hr: 'Nema mlijeka u hladnjaku.',
          en: 'There is no milk in the fridge.',
          note: 'mlijeko → mlijeka',
        },
        {
          hr: 'Danas nemam vremena za kavu.',
          en: 'I have no time for coffee today.',
          note: 'vrijeme → vremena',
        },
        {
          hr: 'Nažalost, nemamo novca za novi auto.',
          en: 'Unfortunately we have no money for a new car.',
          note: 'novac → novca',
        },
        {
          hr: 'Ima li kruha? Nema, ali ima sira.',
          en: 'Is there any bread? No, but there is some cheese.',
          note: 'ima / nema + genitive',
        },
        {
          hr: 'U selu nema škole.',
          en: 'There is no school in the village.',
          note: 'škola → škole',
        },
      ],
    },
    {
      type: 'example',
      title: 'People, Past and Future',
      items: [
        {
          hr: 'Gdje je Marko? Nema Marka, otišao je kući.',
          en: "Where is Marko? He isn't here, he went home.",
          note: 'a person: Marko → Marka',
        },
        {
          hr: 'Jučer nije bilo vode u cijeloj zgradi.',
          en: 'Yesterday there was no water in the whole building.',
          note: 'always bilo',
        },
        {
          hr: 'Sutra neće biti nastave.',
          en: 'There will be no classes tomorrow.',
          note: 'nastava → nastave',
        },
        {
          hr: 'Nemam pojma gdje je stanica.',
          en: 'I have no idea where the stop is.',
          note: 'a fixed phrase',
        },
        {
          hr: 'Nemam auto, pa idem tramvajem.',
          en: "I don't have a car, so I go by tram.",
          note: 'one countable thing: Nemam auta is also heard',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Nema ___." (There is no water — "voda".)',
      options: ['voda', 'vodu', 'vode', 'vodi'],
      correct: 2,
      explanation: 'nema always takes the genitive, and feminine -a becomes -e: Nema vode.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'How do you say "There was no bread yesterday"?',
      options: [
        'Jučer nema kruha.',
        'Jučer nije bilo kruha.',
        'Jučer nije bila kruha.',
        'Jučer nisu bili kruha.',
      ],
      correct: 1,
      explanation:
        'In the past nema becomes nije bilo, and bilo never changes: Jučer nije bilo kruha.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, the dictionary form after nema: "Nema mlijeko". Nema always takes the genitive: Nema mlijeka. Second, matching bilo to the missing thing: "Nije bila vode". In the past it is always nije bilo: Nije bilo vode. Third, using nije for "there is no": "Nije kruha". Nije describes something that is there; for something that is not there at all, use nema.',
      highlight: 'Nema mlijeka',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Nema ___ u hladnjaku." (There is no cheese — "sir".)',
          options: ['sir', 'sira', 'siru', 'sirom'],
          correct: 1,
          explanation: 'nema + genitive, masculine -a: Nema sira.',
        },
        {
          q: 'Which sentence means "I have no time"?',
          options: ['Nemam vremena.', 'Nije vremena.', 'Nisam vremena.', 'Nemam vremenu.'],
          correct: 0,
          explanation: 'nemam + genitive: Nemam vremena.',
        },
        {
          q: 'Complete: "Jučer nije ___ struje." (There was no electricity yesterday.)',
          options: ['bila', 'bio', 'bilo', 'bile'],
          correct: 2,
          explanation: 'Always nije bilo, whatever the missing thing.',
        },
        {
          q: 'Answer "Ima li mlijeka?" with "No, there isn\'t".',
          options: ['Nije.', 'Nisam.', 'Nisu.', 'Nema.'],
          correct: 3,
          explanation: 'The answer repeats the verb, negated: Ima? — Nema.',
        },
        {
          q: 'Complete: "Nemam ___ gdje je hotel." (I have no idea — "pojam".)',
          options: ['pojam', 'pojma', 'pojmu', 'pojama'],
          correct: 1,
          explanation: 'Nemam pojma — the genitive, and the a drops out of pojam.',
        },
        {
          q: 'Which statement is TRUE?',
          options: [
            'After nema, only the genitive is used: Nema auta.',
            'After nema, only the accusative is used: Nema auto.',
            '"Nemam auto" is wrong Croatian.',
            '"Nemam vremena" is wrong Croatian.',
          ],
          correct: 0,
          explanation:
            'nema always takes the genitive. After nemam with one countable thing both forms are heard, and Nemam vremena is exactly right.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Missing Things — Key Takeaways',
      points: [
        'nema + genitive = there is no: Nema mlijeka, Nema Ivana',
        'ima + genitive = there is some: Ima kruha',
        'nemam + something uncountable: Nemam vremena, Nemam novca',
        'Past: nije bilo; future: neće biti — bilo never changes',
        'Nemam auto and Nemam auta are both heard; after nema only the genitive',
        'nije describes; nema says it is not there',
      ],
    },
  ],
};

const P_NEMATI_GENITIVE = {
  worked: [
    {
      title: 'There Is No Milk',
      problem: '"There is no milk."',
      en: 'There is no milk.',
      steps: [
        { label: 'There is no …', text: 'Croatian uses one word for this: nema.' },
        { label: 'The case', text: 'What is missing goes into the genitive.' },
        { label: 'The ending', text: 'mlijeko is neuter: -o becomes -a.' },
      ],
      answer: 'Nema mlijeka.',
    },
    {
      title: 'There Was No Time',
      problem: '"Yesterday there was no time."',
      en: 'Yesterday there was no time.',
      steps: [
        { label: 'The past', text: 'In the past, nema becomes nije bilo.' },
        { label: 'bilo never changes', text: 'It stays neuter singular, whatever is missing.' },
        { label: 'The genitive', text: 'vrijeme has a longer stem in its endings: vremen- + -a.' },
      ],
      answer: 'Jučer nije bilo vremena.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Nema ___. (There is no bread — kruh)',
        options: ['kruh', 'kruha', 'kruhu', 'kruhom'],
        correct: 1,
        hint: 'nema always takes the genitive.',
        explanation: 'Nema kruha.',
      },
      {
        q: 'Danas nemam ___. (time — vrijeme)',
        options: ['vremenima', 'vremenu', 'vremena', 'vremenom'],
        correct: 2,
        hint: 'Time cannot be counted, so the genitive — and the stem becomes vremen-.',
        explanation: 'Nemam vremena.',
      },
      {
        q: 'Jučer nije ___ mlijeka.',
        options: ['bio', 'bila', 'bilo', 'bili'],
        correct: 2,
        hint: 'One form for every missing thing: the neuter singular.',
        explanation: 'Nije bilo mlijeka.',
      },
      {
        q: 'Ima li sira? — ___, ali ima kruha.',
        options: ['Nema', 'Nije', 'Nisam', 'Nisu'],
        correct: 0,
        hint: 'The answer repeats the verb of the question, negated.',
        explanation: 'Nema, ali ima kruha.',
      },
      {
        q: "Ivan isn't here. = ___",
        options: ['Nema Ivana.', 'Nema Ivan.', 'Nema Ivanu.', 'Nema Ivanom.'],
        correct: 0,
        hint: 'A person who is not there goes into the genitive too.',
        explanation: 'Nema Ivana.',
      },
      {
        q: 'Sutra neće biti ___. (classes — nastava)',
        options: ['nastava', 'nastavu', 'nastave', 'nastavi'],
        correct: 2,
        hint: 'The future of nema still takes the genitive.',
        explanation: 'Neće biti nastave.',
      },
      {
        q: 'Which pair can BOTH be heard in everyday Croatian?',
        options: [
          'Nema mlijeka. / Nema mlijeko.',
          'Nemam auto. / Nemam auta.',
          'Nema kruha. / Nema kruh.',
          'Nije bilo vode. / Nije bila vode.',
        ],
        correct: 1,
        hint: 'Only one countable thing after nemam can go either way.',
        explanation: 'Nemam auto and Nemam auta are both heard.',
      },
      {
        q: 'What does "Nemam pojma" mean?',
        options: ['I have no idea.', 'I have no time.', 'I have no money.', 'I am not here.'],
        correct: 0,
        hint: 'pojam means a notion.',
        explanation: 'I have no idea.',
      },
      {
        type: 'type',
        q: 'U hladnjaku nema ____. (mlijeko)',
        answer: 'mlijeka',
        hint: 'nema + genitive: neuter -o changes.',
        explanation: 'Nema mlijeka.',
      },
      {
        type: 'type',
        q: 'Nažalost, nemamo ____ za to. (novac)',
        answer: 'novca',
        hint: 'Money is not counted, and the a before the last consonant drops out.',
        explanation: 'Nemamo novca.',
      },
      {
        type: 'type',
        q: 'U selu nema ____. (škola)',
        answer: 'škole',
        hint: 'Feminine -a changes to -e in the genitive.',
        explanation: 'U selu nema škole.',
      },
      {
        type: 'type',
        q: 'Jučer nije bilo ____. (struja)',
        answer: 'struje',
        hint: 'The past of nema still takes the genitive.',
        explanation: 'Nije bilo struje.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "U selu nema ___." (There is no shop — "trgovina".)',
      options: ['trgovina', 'trgovinu', 'trgovini', 'trgovine'],
      correct: 3,
      explanation: 'nema + genitive: trgovine.',
    },
    {
      q: 'Which sentence means "We have no money"?',
      options: ['Nemamo novca.', 'Nismo novca.', 'Nemamo novcu.', 'Nemamo novcem.'],
      correct: 0,
      explanation: 'nemamo + genitive: novca.',
    },
    {
      q: 'Complete: "Sutra neće ___ nastave."',
      options: ['bilo', 'bila', 'biti', 'je'],
      correct: 2,
      explanation: 'The future of nema is neće biti.',
    },
    {
      q: "Where is Ana? She isn't here. Which is correct?",
      options: ['Nema Ana.', 'Nema Anu.', 'Nema Ane.', 'Nema Ani.'],
      correct: 2,
      explanation: 'A missing person goes into the genitive: Nema Ane.',
    },
    {
      q: 'Which sentence says something is not there AT ALL?',
      options: ['Kava nije vruća.', 'Nema kave.', 'Kava nije moja.', 'Kava nije skupa.'],
      correct: 1,
      explanation: 'nema says it is missing; nije describes coffee that is there.',
    },
    {
      q: 'Complete: "Jučer nije bilo ___ u zgradi." (water — "voda")',
      options: ['vode', 'voda', 'vodu', 'vodi'],
      correct: 0,
      explanation: 'Nije bilo vode.',
    },
  ],
  vocab: [
    ['nema', 'there is no', 'Nema mlijeka.'],
    ['ima', 'there is (some)', 'Ima li kruha?'],
    ['vrijeme', 'time', 'Nemam vremena.'],
    ['novac', 'money', 'Nemamo novca.'],
    ['pojam', 'notion, idea', 'Nemam pojma.'],
    ['struja', 'electricity', 'Nije bilo struje.'],
    ['nastava', 'classes, lessons', 'Sutra neće biti nastave.'],
    ['hladnjak', 'fridge', 'U hladnjaku nema sira.'],
    ['nažalost', 'unfortunately', 'Nažalost, nemam vremena.'],
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// 81 · genitive-prepositions
// ═════════════════════════════════════════════════════════════════════════════
const L_GENITIVE_PREPOSITIONS = {
  id: 'genitive-prepositions',
  title: 'From, To, At, Without',
  subtitle: 'iz, s, od, do, kod, bez, blizu, pokraj, između + the genitive',
  icon: '🧭',
  level: 'A1',
  duration: '~8 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'The Words That Put You on the Map',
      body: "From, to, at someone's, without, near, beside, between: in Croatian all of these take the genitive. You have met iz and bez already. Here is the whole working set — and how to choose between the ones that look alike, like iz and od, or u kući and kod kuće.",
      icon: '🧭',
    },
    {
      type: 'table',
      title: 'The Working Set',
      headers: ['Word', 'Meaning', 'Example', 'English'],
      rows: [
        ['iz', 'out of, from (a place)', 'iz Zagreba', 'from Zagreb'],
        ['s / sa', 'from (a "na" place)', 's posla', 'from work'],
        ['od', 'from (a person)', 'od mame', 'from Mum'],
        ['do', 'to, as far as, until', 'do centra', 'to the centre'],
        ['kod', "at someone's place", 'kod bake', "at Grandma's"],
        ['bez', 'without', 'bez šećera', 'without sugar'],
        ['blizu', 'near', 'blizu mora', 'near the sea'],
        ['pokraj', 'beside, next to', 'pokraj rijeke', 'beside the river'],
        ['između', 'between', 'između kuće i škole', 'between the house and the school'],
      ],
    },
    {
      type: 'rule',
      title: 'Iz or s? Follow u and na',
      body: 'If you are IN a place with u, you come out of it with iz: u Zagrebu → iz Zagreba, u školi → iz škole. If you are AT a place with na, you come from it with s: na poslu → s posla, na moru → s mora, na plaži → s plaže. Before s, z, š or ž, s becomes sa: sa sastanka (from the meeting). This s means "from" and takes the genitive — not the s of s bratom, which means "with".',
      highlight: 'iz škole · s posla',
    },
    {
      type: 'rule',
      title: 'Od: From a Person',
      body: 'Iz is for places; od is for people: Pismo je od mame (the letter is from Mum). Poklon od prijatelja (a present from a friend). Od also starts a stretch of time or space that do finishes: od ponedjeljka do petka (from Monday to Friday), od kuće do posla (from home to work).',
      highlight: 'od mame',
    },
    {
      type: 'rule',
      title: "Kod: At Someone's Place",
      body: "Kod + a person means at their home or their workplace: kod bake (at Grandma's), kod Ane (at Ana's), kod liječnika (at the doctor's). And kod kuće means at home. Careful: u kući means inside the house — Mačka je u kući, the cat is indoors. When you mean \"at home\", say kod kuće.",
      highlight: 'kod kuće',
    },
    {
      type: 'rule',
      title: 'Do, Blizu, Pokraj, Između',
      body: 'Do means "as far as" or "until": Autobus ide do centra. Idem do trgovine (I\'m popping over to the shop). Do sutra! (Until tomorrow!) Blizu means near: blizu mora. Pokraj means right beside: pokraj rijeke. Između (between) joins two nouns with i, and both take the genitive: između banke i pošte.',
      highlight: 'između banke i pošte',
    },
    {
      type: 'example',
      title: 'Where From, Where To',
      items: [
        {
          hr: 'Dolazim iz Splita, a moja žena iz Zadra.',
          en: 'I come from Split, and my wife from Zadar.',
          note: 'Zadar → Zadra: the a drops out',
        },
        {
          hr: 'Vraćam se s posla u šest.',
          en: 'I come back from work at six.',
          note: 'na poslu → s posla',
        },
        {
          hr: 'Ovo pismo je od moje bake.',
          en: 'This letter is from my grandmother.',
          note: 'od + a person',
        },
        {
          hr: 'Radim od ponedjeljka do petka.',
          en: 'I work from Monday to Friday.',
          note: 'ponedjeljak → ponedjeljka',
        },
        {
          hr: 'Autobus ide do centra grada.',
          en: 'The bus goes to the city centre.',
          note: 'centar → centra',
        },
      ],
    },
    {
      type: 'example',
      title: 'Where Things Are',
      items: [
        { hr: 'Večeras smo kod Ane.', en: "Tonight we are at Ana's.", note: 'kod + a person' },
        {
          hr: 'Danas cijeli dan radim kod kuće.',
          en: 'Today I am working at home all day.',
          note: 'at home = kod kuće',
        },
        {
          hr: 'Pijem kavu bez mlijeka.',
          en: 'I drink coffee without milk.',
          note: 'bez + genitive',
        },
        { hr: 'Naš stan je blizu mora.', en: 'Our flat is near the sea.', note: 'more → mora' },
        {
          hr: 'Hotel je pokraj rijeke.',
          en: 'The hotel is beside the river.',
          note: 'rijeka → rijeke',
        },
        {
          hr: 'Pošta je između banke i ljekarne.',
          en: 'The post office is between the bank and the pharmacy.',
          note: 'both nouns in the genitive',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Dolazim ___ Osijeka." (from)',
      options: ['u', 'na', 'iz', 'kod'],
      correct: 2,
      explanation: 'You live u Osijeku, so you come iz Osijeka.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which means "at Grandma\'s"?',
      options: ['kod bake', 'u baki', 'na baki', 'iz bake'],
      correct: 0,
      explanation: 'kod + a person in the genitive: kod bake.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, the locative after iz: "iz Zagrebu". Iz takes the genitive: iz Zagreba. Second, iz for people: "pismo iz mame". From a person is od: pismo od mame. Third, u kući for "at home". At home is kod kuće; u kući means inside the house.',
      highlight: 'kod kuće',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Moji roditelji su iz ___." (Zagreb)',
          options: ['Zagreb', 'Zagrebu', 'Zagreba', 'Zagrebom'],
          correct: 2,
          explanation: 'iz + genitive, masculine -a: iz Zagreba.',
        },
        {
          q: 'Complete: "Ovaj poklon je ___ prijatelja." (from a friend)',
          options: ['iz', 'od', 'do', 'kod'],
          correct: 1,
          explanation: 'From a person: od.',
        },
        {
          q: 'Complete: "Vraćam se ___ posla u pet." (from work)',
          options: ['iz', 'u', 's', 'na'],
          correct: 2,
          explanation: 'You are na poslu, so you come s posla.',
        },
        {
          q: 'Which sentence means "I am at home"?',
          options: ['Ja sam u kuću.', 'Ja sam kod kuće.', 'Ja sam do kuće.', 'Ja sam iz kuću.'],
          correct: 1,
          explanation: 'At home = kod kuće.',
        },
        {
          q: 'Complete: "Autobus ide do ___." (the centre — "centar")',
          options: ['centra', 'centar', 'centru', 'centrom'],
          correct: 0,
          explanation: 'do + genitive; centar loses its a: centra.',
        },
        {
          q: 'Which sentence is correct? (The bank is between the post office and the school.)',
          options: [
            'Banka je između pošta i škola.',
            'Banka je između poštu i školu.',
            'Banka je između pošti i školi.',
            'Banka je između pošte i škole.',
          ],
          correct: 3,
          explanation: 'između + genitive, for both nouns: pošte i škole.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'From, To, At — Key Takeaways',
      points: [
        'iz, s, od, do, kod, bez, blizu, pokraj, između all take the genitive',
        'u → iz, na → s: iz škole, s posla',
        'od for people: pismo od mame; od … do for a stretch: od ponedjeljka do petka',
        'kod + a person = at their place; kod kuće = at home',
        'između X i Y — both in the genitive',
      ],
    },
  ],
};

const P_GENITIVE_PREPOSITIONS = {
  worked: [
    {
      title: 'From School, From Work',
      problem: '"I am coming back from school." / "… from work."',
      en: 'Two kinds of "from".',
      steps: [
        {
          label: 'School',
          text: 'You are u školi, so "from" is iz + the genitive: škola → škole.',
        },
        { label: 'Work', text: 'You are na poslu, so "from" is s + the genitive.' },
        { label: 'The ending', text: 'posao loses its a in the endings: posla.' },
      ],
      answer: 'Vraćam se iz škole. · Vraćam se s posla.',
    },
    {
      title: "At Grandma's",
      problem: '"Tonight we are at Grandma\'s."',
      en: "Tonight we are at Grandma's.",
      steps: [
        { label: "At someone's place", text: 'Croatian uses kod.' },
        { label: 'The case', text: 'kod takes the genitive.' },
        { label: 'The ending', text: 'baka is feminine: -a becomes -e.' },
      ],
      answer: 'Večeras smo kod bake.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Dolazim ___ Splita.',
        options: ['iz', 'u', 'na', 'kod'],
        correct: 0,
        hint: 'You live u Splitu; switch to the matching "from" word.',
        explanation: 'iz Splita.',
      },
      {
        q: 'Pismo je ___ moje sestre.',
        options: ['iz', 'od', 'do', 'u'],
        correct: 1,
        hint: 'From a person, not a place.',
        explanation: 'od moje sestre.',
      },
      {
        q: 'Vraćam se ___ mora. (from the seaside)',
        options: ['iz', 'u', 's', 'do'],
        correct: 2,
        hint: 'You are na moru at the seaside.',
        explanation: 's mora.',
      },
      {
        q: "Večeras smo ___ bake. (at Grandma's)",
        options: ['u', 'kod', 'na', 'iz'],
        correct: 1,
        hint: "The word for being at someone's place.",
        explanation: 'kod bake.',
      },
      {
        q: 'Autobus ide do ___. (the station — stanica)',
        options: ['stanica', 'stanicu', 'stanice', 'stanici'],
        correct: 2,
        hint: 'do takes the genitive: feminine -a changes.',
        explanation: 'do stanice.',
      },
      {
        q: 'Stan je blizu ___. (the school — škola)',
        options: ['škole', 'škola', 'školu', 'školi'],
        correct: 0,
        hint: 'blizu takes the genitive.',
        explanation: 'blizu škole.',
      },
      {
        q: 'Pijem kavu bez ___. (sugar — šećer)',
        options: ['šećer', 'šećeru', 'šećerom', 'šećera'],
        correct: 3,
        hint: 'bez takes the genitive; masculine adds a vowel.',
        explanation: 'bez šećera.',
      },
      {
        q: 'Which means "at home"?',
        options: ['u kuću', 'kod kuće', 'na kuću', 'iz kuću'],
        correct: 1,
        hint: "The word that means at someone's place.",
        explanation: 'kod kuće.',
      },
      {
        type: 'type',
        q: 'Moja žena je iz ____. (Zadar)',
        answer: 'Zadra',
        hint: 'Genitive -a, and the a in the last syllable drops out.',
        explanation: 'iz Zadra.',
      },
      {
        type: 'type',
        q: 'Ovo je poklon od ____. (prijatelj)',
        answer: 'prijatelja',
        hint: 'od + genitive: masculine adds -a.',
        explanation: 'od prijatelja.',
      },
      {
        type: 'type',
        q: 'Hotel je pokraj ____. (rijeka)',
        answer: 'rijeke',
        hint: 'pokraj takes the genitive: feminine -a changes to -e.',
        explanation: 'pokraj rijeke.',
      },
      {
        type: 'type',
        q: 'Pošta je između banke i ____. (ljekarna)',
        answer: 'ljekarne',
        hint: 'Both nouns after između take the genitive.',
        explanation: 'između banke i ljekarne.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Dolazimo iz ___." (Rijeka)',
      options: ['Rijeka', 'Rijeke', 'Rijeku', 'Rijeci'],
      correct: 1,
      explanation: 'iz + genitive: iz Rijeke.',
    },
    {
      q: 'Complete: "Večeras smo ___ Marka." (at Marko\'s)',
      options: ['kod', 'u', 'na', 'iz'],
      correct: 0,
      explanation: 'kod + a person: kod Marka.',
    },
    {
      q: 'Complete: "Radim od ponedjeljka ___ petka." (to)',
      options: ['iz', 'kod', 'do', 'od'],
      correct: 2,
      explanation: 'od … do: from … to.',
    },
    {
      q: 'You are na plaži. How do you say "from the beach"?',
      options: ['iz plaže', 'na plaže', 's plaže', 'u plaže'],
      correct: 2,
      explanation: 'na → s: s plaže.',
    },
    {
      q: 'Complete: "Hotel je pokraj ___." (the river — "rijeka")',
      options: ['rijeka', 'rijeci', 'rijeku', 'rijeke'],
      correct: 3,
      explanation: 'pokraj + genitive: pokraj rijeke.',
    },
    {
      q: 'Which sentence is correct? (I drink tea without sugar.)',
      options: [
        'Pijem čaj bez šećera.',
        'Pijem čaj bez šećer.',
        'Pijem čaj bez šećeru.',
        'Pijem čaj bez šećerom.',
      ],
      correct: 0,
      explanation: 'bez + genitive: šećera.',
    },
  ],
  vocab: [
    ['od', 'from (a person)', 'Pismo je od mame.'],
    ['do', 'to, as far as, until', 'Autobus ide do centra.'],
    ['kod', "at someone's place", 'Večeras smo kod bake.'],
    ['blizu', 'near', 'Stan je blizu mora.'],
    ['pokraj', 'beside, next to', 'Hotel je pokraj rijeke.'],
    ['između', 'between', 'Pošta je između banke i ljekarne.'],
    ['rijeka', 'river', 'Hotel je pokraj rijeke.'],
    ['ljekarna', 'pharmacy', 'Ljekarna je blizu škole.'],
    ['posao', 'work, job', 'Vraćam se s posla u šest.'],
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// 82 · genitive-pronouns
// ═════════════════════════════════════════════════════════════════════════════
const L_GENITIVE_PRONOUNS = {
  id: 'genitive-pronouns',
  title: 'At My Place, Without You',
  subtitle: 'kod mene, bez tebe, nema ga: pronouns in the genitive',
  icon: '🏠',
  level: 'A1',
  duration: '~7 min',
  color: '#db2777',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'You Know Most of These Already',
      body: "Kod mene (at my place), bez tebe (without you), od njega (from him). Now that you can use the genitive with nouns, the pronouns follow — and nearly all of them look exactly like the accusative forms you already know. One pronoun is different, and the short forms have one job of their own: saying someone isn't here.",
      icon: '🏠',
    },
    {
      type: 'table',
      title: 'The Forms',
      headers: ['Pronoun', 'Long form', 'Short form', 'Example'],
      rows: [
        ['ja', 'mene', 'me', 'kod mene'],
        ['ti', 'tebe', 'te', 'bez tebe'],
        ['on', 'njega', 'ga', 'od njega'],
        ['ona', 'nje', 'je', 'blizu nje'],
        ['ono', 'njega', 'ga', 'bez njega'],
        ['mi', 'nas', 'nas', 'kod nas'],
        ['vi', 'vas', 'vas', 'do vas'],
        ['oni, one, ona', 'njih', 'ih', 'bez njih'],
        ['tko', 'koga', '—', 'kod koga?'],
      ],
    },
    {
      type: 'rule',
      title: 'Same as the Accusative — Except One',
      body: 'mene, tebe, njega, nas, vas and njih are the same words as in the accusative: Vidim tebe / bez tebe. The one difference is ona. In the accusative it is nju (Vidim nju — I see her); in the genitive it is nje (bez nje — without her). The short form je is the same in both.',
      highlight: 'nju · nje',
    },
    {
      type: 'rule',
      title: 'After a Preposition: the Long Form',
      body: 'After any preposition, use the long form: kod mene, bez tebe, od njega, blizu nje, do nas, kod vas, bez njih. A short form never follows a preposition — "kod me" is not Croatian. And kod nas, kod vas mean "at our place, at your place", but also "in our country, where you live": Kod nas je zimi hladno — where we live, it is cold in winter.',
      highlight: 'kod mene',
    },
    {
      type: 'rule',
      title: 'Short Forms After Nema',
      body: "You know Nema Ivana — Ivan isn't here. With a pronoun, use the short form: Nema ga (he isn't here), Nema je (she isn't here), Nema ih (they aren't here). Like every short form, it goes second in the sentence: Danas ga nema. Zašto je nema? Use the long form only to contrast two people: Njega nema, ali ona je tu.",
      highlight: 'Nema ga.',
    },
    {
      type: 'example',
      title: 'At, From, Without',
      items: [
        {
          hr: 'Večeras ste svi kod mene.',
          en: 'Tonight you are all at my place.',
          note: 'ja → kod mene',
        },
        {
          hr: 'Ne idem na more bez tebe.',
          en: 'I am not going to the seaside without you.',
          note: 'ti → bez tebe',
        },
        { hr: 'Ovaj poklon je od njega.', en: 'This present is from him.', note: 'on → od njega' },
        {
          hr: 'Moja sestra živi blizu nje.',
          en: 'My sister lives near her.',
          note: 'ona → nje, not nju',
        },
        {
          hr: 'Možeš li doći do nas poslije posla?',
          en: 'Can you come over to our place after work?',
          note: 'mi → nas',
        },
        {
          hr: 'Kod vas je uvijek lijepo.',
          en: 'It is always lovely at your place.',
          note: 'vi → vas',
        },
      ],
    },
    {
      type: 'example',
      title: "Who Isn't Here",
      items: [
        {
          hr: 'Gdje je Marko? Danas ga nema.',
          en: "Where is Marko? He isn't here today.",
          note: 'short form, second place',
        },
        {
          hr: 'Ana je bolesna, pa je nema na poslu.',
          en: "Ana is ill, so she isn't at work.",
          note: 'ona → je',
        },
        {
          hr: 'Djeca su na moru, zato ih nema.',
          en: "The children are at the seaside, so they aren't here.",
          note: 'oni → ih',
        },
        {
          hr: 'Bez njih ne idemo na izlet.',
          en: 'We are not going on the trip without them.',
          note: 'oni → bez njih',
        },
        {
          hr: 'Kod koga spavaš večeras?',
          en: 'Whose place are you sleeping at tonight?',
          note: 'tko → koga',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Večeras smo kod ___." (me)',
      options: ['ja', 'me', 'mene', 'meni'],
      correct: 2,
      explanation:
        'After a preposition, the long genitive form: kod mene. "Me" is the short form, which never follows a preposition.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which means "He isn\'t here"?',
      options: ['Nema ga.', 'Nije ga.', 'Nema on.', 'Nema mu.'],
      correct: 0,
      explanation: 'nema + the short genitive form of on: Nema ga.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'First, a short form after a preposition: "kod me". After any preposition, use the long form: kod mene. Second, the accusative of ona in the genitive: "bez nju". The genitive is nje: bez nje. Third, the subject form after nema: "Nema on". Nema takes the genitive: Nema ga.',
      highlight: 'kod mene',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Ne idem na more bez ___." (you — to a friend)',
          options: ['ti', 'tebe', 'te', 'tebi'],
          correct: 1,
          explanation: 'After a preposition, the long form: bez tebe.',
        },
        {
          q: 'Complete: "Moj stan je blizu ___." (her)',
          options: ['nju', 'ona', 'nje', 'njoj'],
          correct: 2,
          explanation: 'The genitive of ona is nje; nju is the accusative.',
        },
        {
          q: 'Which means "They aren\'t here"?',
          options: ['Nema ih.', 'Nema oni.', 'Nisu ih.', 'Nema njima.'],
          correct: 0,
          explanation: 'nema + the short genitive of oni: Nema ih.',
        },
        {
          q: 'Complete: "Ovo pismo je od ___." (him)',
          options: ['on', 'ga', 'njemu', 'njega'],
          correct: 3,
          explanation: 'After od, the long form: od njega.',
        },
        {
          q: 'What is wrong with "Večeras smo kod me."?',
          options: [
            'me should be mene — after a preposition, the long form',
            'kod should be u',
            'smo should be sam',
            'Nothing is wrong',
          ],
          correct: 0,
          explanation: 'Večeras smo kod mene.',
        },
        {
          q: 'Complete: "Gdje je Ivan? Danas ___ nema."',
          options: ['ga', 'on', 'mu', 'njemu'],
          correct: 0,
          explanation: 'The short genitive of on, in second place: Danas ga nema.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Genitive Pronouns — Key Takeaways',
      points: [
        'mene, tebe, njega, nje, nas, vas, njih — and the short me, te, ga, je, ih',
        'Same as the accusative, except ona: nje (genitive), nju (accusative)',
        'After a preposition, always the long form: kod mene, bez tebe',
        "Nema ga / Nema je / Nema ih — someone isn't here",
        'kod nas = at our place, or in our country',
      ],
    },
  ],
};

const P_GENITIVE_PRONOUNS = {
  worked: [
    {
      title: 'At My Place',
      problem: '"Tonight we are at my place."',
      en: 'Tonight we are at my place.',
      steps: [
        { label: "At someone's place", text: 'kod + the genitive.' },
        { label: 'Two forms', text: 'The genitive of ja has a long and a short form: mene, me.' },
        { label: 'After a preposition', text: 'Always the long form.' },
      ],
      answer: 'Večeras smo kod mene.',
    },
    {
      title: "She Isn't Here",
      problem: 'Where is Ana? — "She isn\'t here today."',
      en: "She isn't here today.",
      steps: [
        { label: "Isn't here", text: 'nema + the genitive.' },
        { label: 'No preposition', text: 'So the short form: ona → je.' },
        { label: 'Word order', text: 'A short form goes second: after danas, before nema.' },
      ],
      answer: 'Danas je nema.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Večeras smo svi kod ___. (me)',
        options: ['mene', 'me', 'meni', 'ja'],
        correct: 0,
        hint: 'After a preposition, the long form.',
        explanation: 'kod mene.',
      },
      {
        q: 'Ne mogu bez ___. (you — a friend)',
        options: ['ti', 'te', 'tebe', 'tebi'],
        correct: 2,
        hint: 'bez is a preposition, so the long form.',
        explanation: 'bez tebe.',
      },
      {
        q: 'Poklon je od ___. (him)',
        options: ['ga', 'njega', 'njemu', 'on'],
        correct: 1,
        hint: 'od is a preposition, so the long form.',
        explanation: 'od njega.',
      },
      {
        q: 'Moja kuća je blizu ___. (her)',
        options: ['nju', 'ona', 'njoj', 'nje'],
        correct: 3,
        hint: 'This is the one pronoun that differs from the accusative.',
        explanation: 'blizu nje.',
      },
      {
        q: 'Gdje je Marko? — Nema ___.',
        options: ['ga', 'on', 'njemu', 'mu'],
        correct: 0,
        hint: 'No preposition here, so the short genitive form.',
        explanation: 'Nema ga.',
      },
      {
        q: 'Gdje su djeca? — Nema ___.',
        options: ['oni', 'ih', 'njima', 'im'],
        correct: 1,
        hint: 'The short genitive form of oni.',
        explanation: 'Nema ih.',
      },
      {
        q: '"Kod nas" can mean …',
        options: ['at our place, or in our country', 'with us', 'without us', 'from us'],
        correct: 0,
        hint: "kod means at someone's place.",
        explanation: 'At our place — or where we live.',
      },
      {
        q: 'Which pronoun is DIFFERENT in the genitive and the accusative?',
        options: ['ja', 'ti', 'ona', 'mi'],
        correct: 2,
        hint: 'Think: bez … / vidim …',
        explanation: 'ona: bez nje, but vidim nju.',
      },
      {
        type: 'type',
        q: 'Možete li doći do ____? (mi)',
        answer: 'nas',
        hint: 'The genitive of mi looks just like its accusative.',
        explanation: 'do nas — to our place.',
      },
      {
        type: 'type',
        q: 'Ovo pismo je od ____. (ona)',
        answer: 'nje',
        hint: 'Not the accusative form — the genitive of ona.',
        explanation: 'od nje.',
      },
      {
        type: 'type',
        q: 'Ne idemo na izlet bez ____. (oni)',
        answer: 'njih',
        hint: 'After a preposition, the long form.',
        explanation: 'bez njih.',
      },
      {
        type: 'type',
        q: 'Gdje je Ivan? Danas ____ nema. (on — short form)',
        answer: 'ga',
        hint: 'The short genitive form of on, in second place.',
        explanation: 'Danas ga nema.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Možeš li doći do ___?" (us)',
      options: ['mi', 'nama', 'nas', 'nam'],
      correct: 2,
      explanation: 'do + the genitive of mi: do nas.',
    },
    {
      q: 'Complete: "Kod ___ je uvijek lijepo." (you — plural or polite)',
      options: ['vas', 'vi', 'vama', 'vam'],
      correct: 0,
      explanation: 'kod + the genitive of vi: kod vas.',
    },
    {
      q: 'Complete: "Bez ___ ne mogu." (her)',
      options: ['ona', 'nju', 'njoj', 'nje'],
      correct: 3,
      explanation: 'The genitive of ona is nje.',
    },
    {
      q: 'Which means "She isn\'t here today"?',
      options: ['Danas nema ona.', 'Danas je nema.', 'Danas nije je.', 'Danas nema njoj.'],
      correct: 1,
      explanation: 'nema + the short form je, in second place: Danas je nema.',
    },
    {
      q: 'Complete: "Ovaj poklon je od ___." (them)',
      options: ['oni', 'ih', 'njih', 'njima'],
      correct: 2,
      explanation: 'After a preposition, the long form: od njih.',
    },
    {
      q: 'Complete: "___ spavaš večeras?" (At whose place …)',
      options: ['Kod koga', 'Kod tko', 'Kod kome', 'Kod kim'],
      correct: 0,
      explanation: 'The genitive of tko is koga: Kod koga?',
    },
  ],
  vocab: [
    ['kod mene', 'at my place', 'Večeras smo kod mene.'],
    ['bez tebe', 'without you', 'Ne idem bez tebe.'],
    ['od njega', 'from him', 'Poklon je od njega.'],
    ['blizu nje', 'near her', 'Živim blizu nje.'],
    ['kod nas', 'at our place; in our country', 'Kod nas je zimi hladno.'],
    ['kod vas', 'at your place', 'Kod vas je uvijek lijepo.'],
    ['bez njih', 'without them', 'Bez njih ne idemo.'],
    ['nema ga', "he isn't here", 'Danas ga nema.'],
    ['kod koga?', 'at whose place?', 'Kod koga spavaš?'],
  ],
};

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  L_INSTRUMENTAL_PLACE,
  L_INSTRUMENTAL_PRONOUNS,
  L_GENITIVE_PARTITIVE,
  L_NEMATI_GENITIVE,
  L_GENITIVE_PREPOSITIONS,
  L_GENITIVE_PRONOUNS,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'instrumental-place': P_INSTRUMENTAL_PLACE,
  'instrumental-pronouns': P_INSTRUMENTAL_PRONOUNS,
  'genitive-partitive': P_GENITIVE_PARTITIVE,
  'nemati-genitive': P_NEMATI_GENITIVE,
  'genitive-prepositions': P_GENITIVE_PREPOSITIONS,
  'genitive-pronouns': P_GENITIVE_PRONOUNS,
};
