// functions/api/content/_data/a2new/batch01.js
//
// New A2 lessons, batch 01 (Croaticum restructure, stage 3, 2026-11-12). See a2new/index.js.
//
// Razgovarajte s nama! A2-B1, lessons 1–2: declension revision, relational adjectives,
// possessive adjectives in every case, official personal data, adjectives /
// demonstratives / possessives in the accusative, and the order of the enclitic cluster.
//
// Masculine and neuter possessive adjectives (Markov, Anin) have TWO standard forms in
// the genitive, dative and locative singular — Markova / Markovog, Markovu / Markovom.
// Both are taught, and no item ever offers both, so no correct form is marked wrong.

/** Spine entries for this batch. `masterOrder` is the lesson's final A2 position. */
export const SPINE = [
  {
    id: 'declension-review',
    masterOrder: 3,
    prerequisites: ['cases', 'genitive-intro', 'instrumental-intro', 'plural-nouns'],
    objectives: [
      'See all seven cases of a noun side by side, in the singular and the plural',
      'Ask the question each case answers: Tko? Koga? Komu? S kim? O čemu?',
      'Spot the shared endings that save memory: dative = locative, and one plural ending for three cases',
    ],
  },
  {
    id: 'relational-adjectives',
    masterOrder: 5,
    prerequisites: ['nationalities', 'countries-languages', 'adjective-agreement'],
    objectives: [
      'Turn a place or a nation into an adjective with -ski: Split → splitski',
      'Know when the ending becomes -čki, -ški or -ćki: riječki, pariški, gospićki',
      'Write these adjectives with a small letter, except at the start of a name',
    ],
  },
  {
    id: 'possessive-adjectives-cases',
    masterOrder: 6,
    prerequisites: ['possessive-adjectives', 'adjective-agreement', 'declension-review'],
    objectives: [
      'Put Anin, Markov, sestrin into every case: u Aninoj kući, s Markovim bratom',
      'Know the two correct masculine forms: Markova and Markovog brata',
      'Use the plural forms: Markovih prijatelja, s Aninim roditeljima',
    ],
  },
  {
    id: 'official-forms',
    masterOrder: 7,
    prerequisites: ['dates-years', 'formal-address', 'vi-vs-ti', 'relational-adjectives'],
    objectives: [
      'Understand the fields of an official form: ime, prezime, datum i mjesto rođenja',
      'Answer an official’s polite questions: Kada ste rođeni? Čime se bavite?',
      'State your citizenship, address and occupation in full sentences',
    ],
  },
  {
    id: 'accusative-adjectives',
    masterOrder: 8,
    prerequisites: ['accusative-animate', 'adjective-agreement', 'possessive-adjectives-cases'],
    objectives: [
      'Put an adjective into the accusative with its noun: novu knjigu, novog prijatelja',
      'Keep a masculine thing unchanged: novi stol, taj grad',
      'Do the same with taj, ovaj, moj and naš: tog čovjeka, našeg susjeda',
    ],
  },
  {
    id: 'clitic-order',
    masterOrder: 11,
    prerequisites: [
      'object-pronouns',
      'accusative-pronouns',
      'reflexive-past-future',
      'past-questions-negation',
    ],
    objectives: [
      'Line up the small words in their fixed order: li – sam/ću – dative – accusative – se – je',
      'Say “I gave it to her” and “Did you tell him?” the Croatian way: Dao sam joj ga. Jesi li mu rekao?',
      'Put je at the end of the cluster, and say ju je instead of je je',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 3 · Declension review
// ─────────────────────────────────────────────────────────
const DECLENSION_REVIEW = {
  id: 'declension-review',
  title: 'All Seven Cases, One Table',
  subtitle: 'Every case you know, side by side — and the question each one answers',
  icon: '🗂️',
  level: 'A2',
  duration: '~8 min',
  color: '#0f766e',
  bg: '#f0fdfa',
  slides: [
    {
      type: 'intro',
      title: 'You Already Know Them All',
      body: 'In A1 you met the seven cases one at a time, each in its own lesson. A2 asks more of them — adjectives, possessives and pronouns all have to follow a noun into its case — so before that starts, this lesson lays every case out side by side. Nothing here is new. What is new is seeing the whole system at once, and noticing how much of it repeats.',
      icon: '🗂️',
    },
    {
      type: 'rule',
      title: 'Seven Questions',
      body: 'Each case answers a question. Nominative: Tko? Što? — the subject. Genitive: Koga? Čega? — of, from, without, and after quantities. Dative: Komu? Čemu? — to or for someone. Accusative: Koga? Što? — the direct object, and where to with u or na. Vocative — calling someone. Locative: O komu? O čemu? Gdje? — always after a preposition (u, na, o, po, pri). Instrumental: S kim? Čim? — with whom, or by what means.',
      highlight: 'Komu? Čemu?',
    },
    {
      type: 'table',
      title: 'The Singular',
      headers: [
        'Case',
        'Question',
        'student (m, alive)',
        'grad (m, thing)',
        'žena (f)',
        'selo (n)',
      ],
      rows: [
        ['nominative', 'Tko? Što?', 'student', 'grad', 'žena', 'selo'],
        ['genitive', 'Koga? Čega?', 'studenta', 'grada', 'žene', 'sela'],
        ['dative', 'Komu? Čemu?', 'studentu', 'gradu', 'ženi', 'selu'],
        ['accusative', 'Koga? Što?', 'studenta', 'grad', 'ženu', 'selo'],
        ['vocative', '—', 'studente!', 'grade!', 'ženo!', 'selo!'],
        ['locative', 'O komu? Gdje?', 'studentu', 'gradu', 'ženi', 'selu'],
        ['instrumental', 'S kim? Čim?', 'studentom', 'gradom', 'ženom', 'selom'],
      ],
    },
    {
      type: 'table',
      title: 'The Plural',
      headers: ['Case', 'studenti (m)', 'gradovi (m)', 'žene (f)', 'sela (n)'],
      rows: [
        ['nominative', 'studenti', 'gradovi', 'žene', 'sela'],
        ['genitive', 'studenata', 'gradova', 'žena', 'sela'],
        ['dative', 'studentima', 'gradovima', 'ženama', 'selima'],
        ['accusative', 'studente', 'gradove', 'žene', 'sela'],
        ['vocative', 'studenti!', 'gradovi!', 'žene!', 'sela!'],
        ['locative', 'studentima', 'gradovima', 'ženama', 'selima'],
        ['instrumental', 'studentima', 'gradovima', 'ženama', 'selima'],
      ],
    },
    {
      type: 'rule',
      title: 'Patterns That Save Memory',
      body: 'In the singular the dative and the locative look the same: studentu, ženi, selu. In the plural three cases share one ending — the dative, the locative and the instrumental: -ima for masculine and neuter, -ama for feminine. A masculine THING keeps its subject form as the object (Vidim grad), while a masculine living being borrows the genitive (Vidim studenta). A neuter noun has the same form as subject and object: selo, selo.',
      highlight: 'dative, locative and instrumental',
    },
    {
      type: 'rule',
      title: 'Two Small Adjustments',
      body: 'After a soft consonant (c, č, ć, đ, j, lj, nj, š, ž) the masculine instrumental is -em, not -om: s prijateljem, s mužem, s Matejem. And after the numbers five and up, and after puno or malo, the noun goes into the genitive plural — often with an extra a before the ending: pet studenata, deset mjeseci, puno ljudi.',
      highlight: 's prijateljem',
    },
    {
      type: 'example',
      title: 'One Noun Through Every Case',
      items: [
        {
          hr: 'Moj brat živi u Rijeci.',
          en: 'My brother lives in Rijeka.',
          note: 'brat is the subject — nominative; Rijeci is locative after u',
        },
        { hr: 'Nemam brata.', en: 'I have no brother.', note: 'brata — genitive after nemam' },
        {
          hr: 'Pišem bratu dugo pismo.',
          en: 'I am writing my brother a long letter.',
          note: 'bratu — dative: to whom?',
        },
        {
          hr: 'Čekam brata na stanici.',
          en: 'I am waiting for my brother at the stop.',
          note: 'brata — a living masculine object looks like the genitive',
        },
        { hr: 'Brate, gdje si?', en: 'Brother, where are you?', note: 'brate — vocative' },
        {
          hr: 'Često razgovaramo o bratu.',
          en: 'We often talk about my brother.',
          note: 'bratu — locative after o',
        },
        {
          hr: 'Idem u kino s bratom.',
          en: 'I am going to the cinema with my brother.',
          note: 'bratom — instrumental: with whom?',
        },
      ],
    },
    {
      type: 'example',
      title: 'Cases in the Plural',
      items: [
        {
          hr: 'Studenti uče u knjižnici.',
          en: 'The students are studying in the library.',
          note: 'studenti — nominative plural; knjižnici — locative singular',
        },
        {
          hr: 'U grupi je dvadeset studenata.',
          en: 'There are twenty students in the group.',
          note: 'studenata — genitive plural after a number',
        },
        {
          hr: 'Profesorica daje studentima knjige.',
          en: 'The teacher gives the students books.',
          note: 'studentima — dative plural; knjige — accusative plural',
        },
        {
          hr: 'Vidim studente ispred škole.',
          en: 'I see the students in front of the school.',
          note: 'studente — accusative plural; škole — genitive after ispred',
        },
        {
          hr: 'Razgovaram sa ženama iz sela.',
          en: 'I am talking with the women from the village.',
          note: 'ženama — instrumental plural; sela — genitive after iz',
        },
        {
          hr: 'Ljeti putujemo po selima i gradovima.',
          en: 'In summer we travel around villages and towns.',
          note: 'selima, gradovima — locative plural after po',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which question does the dative answer?',
      options: ['Koga? Čega?', 'Komu? Čemu?', 'S kim? Čim?'],
      correct: 1,
      explanation:
        'The dative is the "to whom, for whom" case: Komu pišeš? — Bratu. Koga? Čega? belongs to the genitive, and S kim? Čim? to the instrumental.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Idem na more s ___." (with my friends)',
      options: ['prijateljima', 'prijatelje', 'prijatelja', 'prijatelji'],
      correct: 0,
      explanation:
        'With whom? — the instrumental, and there are several friends: the plural ending -ima. Prijatelje is the accusative plural, prijatelja the genitive.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving a living masculine object in the subject form: "Čekam brat" — it must be Čekam brata. A thing does not change: Čekam autobus. (2) Dropping the preposition before a locative: "Živim Zagrebu" — the locative always has one: Živim u Zagrebu. (3) Using the genitive singular after five: "pet studenta" — from five upwards it is the genitive plural: pet studenata. (4) Writing -om after a soft consonant: "s prijateljom" — it is s prijateljem.',
      highlight: 'Čekam brata',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which question does the genitive answer?',
          options: ['Tko? Što?', 'Koga? Čega?', 'Komu? Čemu?', 'S kim? Čim?'],
          correct: 1,
          explanation:
            'The genitive answers Koga? Čega? — of whom, of what, from or without what. Tko? Što? is the nominative.',
        },
        {
          q: 'Complete: "Dajem ___ poklon." (to my sister)',
          options: ['sestru', 'sestri', 'sestre', 'sestrom'],
          correct: 1,
          explanation:
            'To whom? — the dative. A feminine noun in -a takes -i: sestri. Sestru is the accusative, sestre the genitive.',
        },
        {
          q: 'Complete: "Nema ___ u gradu." (no buses)',
          options: ['autobusi', 'autobuse', 'autobusa', 'autobusima'],
          correct: 2,
          explanation:
            'Nema takes the genitive, and here it is plural: autobusa. Autobusi is the subject form.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Čekam prijatelj.',
            'Čekam prijatelju.',
            'Čekam prijateljem.',
            'Čekam prijatelja.',
          ],
          correct: 3,
          explanation:
            'A friend is a living masculine object, so the accusative looks like the genitive: prijatelja.',
        },
        {
          q: 'Complete: "Razgovaramo o ___." (the towns)',
          options: ['gradovima', 'gradove', 'gradova', 'gradovi'],
          correct: 0,
          explanation:
            'O + locative, plural: gradovima — the same ending as the dative and instrumental plural.',
        },
        {
          q: 'Complete: "Putujem s ___." (with my husband)',
          options: ['mužom', 'mužem', 'muža', 'mužu'],
          correct: 1,
          explanation:
            'With whom? — the instrumental. Muž ends in a soft ž, so the ending is -em: mužem.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'All Seven Cases — Key Takeaways',
      points: [
        'Each case answers a question: Tko? Koga? Komu? Što? Gdje? S kim?',
        'Singular: dative and locative share one form',
        'Plural: dative, locative and instrumental share -ima / -ama',
        'A living masculine object takes the genitive form; a thing stays as it is',
        'The locative never appears without a preposition',
        'After a soft consonant the instrumental is -em: s prijateljem',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 5 · Relational adjectives
// ─────────────────────────────────────────────────────────
const RELATIONAL_ADJ = {
  id: 'relational-adjectives',
  title: 'Zagrebački, Splitski, Riječki',
  subtitle: 'Turning places and nations into adjectives with -ski, -čki, -ški and -ćki',
  icon: '🏙️',
  level: 'A2',
  duration: '~7 min',
  color: '#1d4ed8',
  bg: '#eff6ff',
  slides: [
    {
      type: 'intro',
      title: 'The Zagreb Tram, the Split Waterfront',
      body: 'English puts a place name in front of a noun and leaves it alone: the Zagreb tram, the Split waterfront, Istrian wine. Croatian turns the place into an adjective — a describing word — and that adjective then agrees with its noun like any other: zagrebački tramvaj, splitska riva, istarsko vino. These are called relational adjectives, because they say what something relates to.',
      icon: '🏙️',
    },
    {
      type: 'rule',
      title: 'The Basic Ending: -ski',
      body: 'Take the place name, drop a final vowel, and add -ski: Split → splitski, Zadar → zadarski, Pula → pulski, Istra → istarski, Europa → europski, Varaždin → varaždinski. A country whose name already ends in -ska or -ka simply switches to the adjective ending -i: Hrvatska → hrvatski, Engleska → engleski, Francuska → francuski, Njemačka → njemački.',
      highlight: 'Split → splitski',
    },
    {
      type: 'rule',
      title: 'After k, c or č: -čki',
      body: 'When the stem ends in k, c or č, the k or c merges with the ending and you hear -čki: Rijeka → riječki, Osijek → osječki, Amerika → američki, Karlovac → karlovački. Two very common ones take -ački and are best learned as words: Zagreb → zagrebački, Dubrovnik → dubrovački.',
      highlight: 'Rijeka → riječki',
    },
    {
      type: 'rule',
      title: 'The Rarer -ški and -ćki',
      body: 'A stem in z or g blends with the ending into -ški: Pariz → pariški, Prag → praški. A stem in ć keeps it: Gospić → gospićki. You will read these more often than you write them; recognising them is enough at this stage.',
      highlight: 'Pariz → pariški',
    },
    {
      type: 'rule',
      title: 'Small Letter, Always — Unless It Starts a Name',
      body: 'Unlike English, Croatian writes these adjectives with a small letter: hrvatski jezik, zagrebački tramvaj, splitska plaža, govorim njemački. The one exception is when the adjective is the first word of a proper name — a company, an institution, a region: Zagrebačka banka, Europska unija, Splitsko-dalmatinska županija.',
      highlight: 'hrvatski jezik',
    },
    {
      type: 'table',
      title: 'Places and Their Adjectives',
      headers: ['Place', 'Adjective', 'In use'],
      rows: [
        ['Hrvatska', 'hrvatski', 'hrvatski jezik'],
        ['Zagreb', 'zagrebački', 'zagrebački tramvaj'],
        ['Split', 'splitski', 'splitska riva'],
        ['Rijeka', 'riječki', 'riječka luka'],
        ['Osijek', 'osječki', 'osječka Tvrđa'],
        ['Dubrovnik', 'dubrovački', 'dubrovačke zidine'],
        ['Istra', 'istarski', 'istarsko vino'],
        ['Dalmacija', 'dalmatinski', 'dalmatinska klapa'],
        ['Slavonija', 'slavonski', 'slavonski kulen'],
        ['Njemačka', 'njemački', 'njemački auto'],
      ],
    },
    {
      type: 'rule',
      title: 'They Agree Like Any Adjective',
      body: 'A relational adjective takes the gender, number and case of its noun: splitski klub, splitska plaža, splitsko more; in the plural splitski klubovi, splitske plaže. In the cases too: Navijam za splitski klub. Šetamo po splitskoj rivi. A language is usually named by the adjective alone: Govorim hrvatski. Pišem na hrvatskom.',
      highlight: 'splitski klub, splitska plaža, splitsko more',
    },
    {
      type: 'example',
      title: 'Places in Everyday Sentences',
      items: [
        {
          hr: 'Volim zagrebački tramvaj.',
          en: 'I love the Zagreb tram.',
          note: 'Zagreb gives zagrebački',
        },
        {
          hr: 'Ovo je splitska riva.',
          en: 'This is the Split waterfront.',
          note: 'splitska — feminine, agreeing with riva',
        },
        {
          hr: 'Riječka luka je velika.',
          en: 'The port of Rijeka is big.',
          note: 'Rijeka gives riječka: k + ski becomes čki',
        },
        {
          hr: 'Pijemo istarsko vino.',
          en: 'We are drinking Istrian wine.',
          note: 'istarsko — neuter, agreeing with vino',
        },
        {
          hr: 'Moja baka kupuje slavonski kulen.',
          en: 'My grandmother buys Slavonian kulen sausage.',
          note: 'slavonski — kulen is a masculine thing',
        },
        {
          hr: 'Govorite li njemački?',
          en: 'Do you speak German?',
          note: 'njemački — a language, with a small letter',
        },
        {
          hr: 'Dubrovačke zidine su stare i visoke.',
          en: 'The Dubrovnik walls are old and high.',
          note: 'dubrovačke — feminine plural, agreeing with zidine',
        },
        {
          hr: 'Osječka Tvrđa je stari dio grada.',
          en: 'Osijek’s Tvrđa is the old part of the town.',
          note: 'Osijek gives osječka',
        },
        {
          hr: 'Ivan navija za splitski klub.',
          en: 'Ivan supports the Split club.',
          note: 'za + accusative; klub is a thing, so splitski does not change',
        },
        {
          hr: 'Europska unija ima dvadeset sedam članica.',
          en: 'The European Union has twenty-seven members.',
          note: 'Europska takes a capital only because it starts the name',
        },
        {
          hr: 'Moji roditelji vole dalmatinsku klapu i istarsku kuhinju.',
          en: 'My parents love Dalmatian klapa singing and Istrian cooking.',
          note: 'dalmatinsku, istarsku — feminine accusative',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the adjective from Rijeka?',
      options: ['rijekski', 'riječki', 'rijeki'],
      correct: 1,
      explanation:
        'The k of Rijek- merges with -ski: riječki. "Rijekski" keeps the k and is not a word.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is written correctly?',
      options: ['Govorim Hrvatski.', 'Govorim hrvatski.', 'Govorim hrvatskog.'],
      correct: 1,
      explanation:
        'Languages and other relational adjectives take a small letter in Croatian: Govorim hrvatski.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The English capital letter: "Hrvatski jezik", "Zagrebački tramvaj" in the middle of a sentence — in Croatian it is hrvatski jezik, zagrebački tramvaj. (2) Keeping the k: "rijekski", "osijekski" — the k becomes č: riječki, osječki. (3) Forgetting to agree: "splitski plaža" — plaža is feminine, so splitska plaža.',
      highlight: 'hrvatski jezik, zagrebački tramvaj',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What is the adjective from Osijek?',
          options: ['osijekski', 'osječki', 'osiješki', 'osjekški'],
          correct: 1,
          explanation: 'The k merges with -ski and becomes č: osječki.',
        },
        {
          q: 'Complete: "Volim ___ more." (Dalmatian)',
          options: ['dalmatinski', 'dalmatinska', 'dalmatinsko', 'dalmatinske'],
          correct: 2,
          explanation: 'More is neuter, so the adjective ends in -o: dalmatinsko more.',
        },
        {
          q: 'Which sentence is written correctly?',
          options: [
            'Pijem istarsko vino.',
            'Pijem Istarsko vino.',
            'Pijem istarski vino.',
            'Pijem Istarski vino.',
          ],
          correct: 0,
          explanation: 'A small letter, and the neuter ending to agree with vino: istarsko vino.',
        },
        {
          q: 'What is the adjective from Split?',
          options: ['splićki', 'splitki', 'splitčki', 'splitski'],
          correct: 3,
          explanation: 'Split ends in t, so it takes the plain ending: splitski.',
        },
        {
          q: 'Complete: "To su ___ zidine." (Dubrovnik)',
          options: ['dubrovački', 'dubrovačke', 'dubrovnički', 'dubrovnikske'],
          correct: 1,
          explanation:
            'Dubrovnik gives dubrovački, and zidine is feminine plural: dubrovačke zidine.',
        },
        {
          q: 'Why is "Europska unija" written with a capital E?',
          options: [
            'All relational adjectives take a capital',
            'The adjective starts the name of an institution',
            'Europa is a continent',
            'It is a spelling mistake',
          ],
          correct: 1,
          explanation:
            'Relational adjectives take a small letter, except as the first word of a proper name: Europska unija.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Relational Adjectives — Key Takeaways',
      points: [
        'A place becomes an adjective: Split → splitski, Hrvatska → hrvatski',
        'k or c before the ending gives -čki: riječki, osječki, karlovački',
        'Learn zagrebački and dubrovački as words',
        'z or g gives -ški: pariški, praški; ć gives -ćki: gospićki',
        'Small letter, except at the start of a name: Zagrebačka banka',
        'They agree with the noun: splitski klub, splitska plaža, splitsko more',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 6 · Possessive adjectives in all cases
// ─────────────────────────────────────────────────────────
const POSSESSIVE_CASES = {
  id: 'possessive-adjectives-cases',
  title: "In Ana's House, With Marko's Brother",
  subtitle: 'Anin, Markov, sestrin — following the noun into every case',
  icon: '🏡',
  level: 'A2',
  duration: '~8 min',
  color: '#15803d',
  bg: '#f0fdf4',
  slides: [
    {
      type: 'intro',
      title: 'The Owner Is an Adjective',
      body: "In A1 you learned that Croatian says Ana's book as Anina knjiga and Marko's brother as Markov brat: the owner becomes an adjective. An adjective follows its noun into every case, so the moment the noun moves — in Ana's house, with Marko's brother — the possessive has to move with it. This lesson gives you those endings.",
      icon: '🏡',
    },
    {
      type: 'rule',
      title: 'The Noun Decides, Not the Owner',
      body: "The owner only decides the FORM: Ana → Anin, Marko → Markov, sestra → sestrin, Petar → Petrov. The noun decides the ENDING: its gender, its number and its case. Ana's house is Anina kuća; in Ana's house is u Aninoj kući, because kuća has moved into the locative and the possessive follows it.",
      highlight: 'u Aninoj kući',
    },
    {
      type: 'rule',
      title: 'Feminine: Like Any Adjective',
      body: 'With a feminine noun the endings are the ones you know from nova: Anina sestra, bez Anine sestre, Aninoj sestri, vidim Aninu sestru, o Aninoj sestri, s Aninom sestrom. The dative and the locative share -oj; the instrumental is -om.',
      highlight: 'Anine, Aninoj, Aninu, Aninom',
    },
    {
      type: 'rule',
      title: 'Masculine and Neuter: Two Correct Forms',
      body: 'In the genitive, dative and locative the masculine and neuter possessive has two standard forms. The short one — Markova brata, Markovu bratu — is the older, more formal one. The long one — Markovog brata, Markovom bratu — is what you will hear most in speech. Both are correct; use whichever you like, but be consistent. The instrumental has only one: s Markovim bratom.',
      highlight: 'Markova / Markovog',
    },
    {
      type: 'table',
      title: 'The Singular',
      headers: ['Case', 'Anina sestra (f)', 'Markov brat (m, alive)', 'Ivanovo selo (n)'],
      rows: [
        ['nominative', 'Anina sestra', 'Markov brat', 'Ivanovo selo'],
        ['genitive', 'Anine sestre', 'Markova / Markovog brata', 'Ivanova / Ivanovog sela'],
        ['dative', 'Aninoj sestri', 'Markovu / Markovom bratu', 'Ivanovu / Ivanovom selu'],
        ['accusative', 'Aninu sestru', 'Markova / Markovog brata', 'Ivanovo selo'],
        ['locative', 'Aninoj sestri', 'Markovu / Markovom bratu', 'Ivanovu / Ivanovom selu'],
        ['instrumental', 'Aninom sestrom', 'Markovim bratom', 'Ivanovim selom'],
      ],
    },
    {
      type: 'table',
      title: 'The Plural',
      headers: ['Case', 'Anine sestre (f)', 'Markovi prijatelji (m)'],
      rows: [
        ['nominative', 'Anine sestre', 'Markovi prijatelji'],
        ['genitive', 'Aninih sestara', 'Markovih prijatelja'],
        ['dative / locative / instrumental', 'Aninim sestrama', 'Markovim prijateljima'],
        ['accusative', 'Anine sestre', 'Markove prijatelje'],
      ],
    },
    {
      type: 'rule',
      title: 'A Masculine Thing Stays Put',
      body: 'As with every adjective, a masculine THING as the object keeps the subject form: Kupili smo poklon za tatin rođendan, because rođendan is a thing. A living being takes the genitive-like form: Vidim Markova (or Markovog) psa. A neuter object never changes: Volim djedovo selo.',
      highlight: 'za tatin rođendan',
    },
    {
      type: 'example',
      title: 'Possessives on the Move',
      items: [
        {
          hr: 'Živim u Aninoj kući.',
          en: "I live in Ana's house.",
          note: 'Aninoj — locative, agreeing with kući',
        },
        {
          hr: 'Igram tenis s Markovim bratom.',
          en: "I play tennis with Marko's brother.",
          note: 'Markovim — instrumental, agreeing with bratom',
        },
        {
          hr: 'Ovo je auto Anine sestre.',
          en: "This is Ana's sister's car.",
          note: 'Anine — genitive, agreeing with sestre',
        },
        {
          hr: 'Dajem poklon Ivanovoj majci.',
          en: "I am giving a present to Ivan's mother.",
          note: 'Ivanovoj — dative, agreeing with majci',
        },
        {
          hr: 'Vidim Markovog psa u parku.',
          en: "I see Marko's dog in the park.",
          note: 'Markovog — a living masculine object; Markova is also correct',
        },
        {
          hr: 'Razgovaramo o bakinom vrtu.',
          en: "We are talking about grandma's garden.",
          note: 'bakinom — locative; bakinu is also correct',
        },
        {
          hr: 'Bratove knjige su na stolu.',
          en: "My brother's books are on the table.",
          note: 'bratove — feminine plural, agreeing with knjige',
        },
        {
          hr: 'Ana ide na more s Ivanovim roditeljima.',
          en: "Ana is going to the seaside with Ivan's parents.",
          note: 'Ivanovim — instrumental plural',
        },
        {
          hr: 'Kupili smo poklon za mamin rođendan.',
          en: "We bought a present for mum's birthday.",
          note: 'mamin — za + accusative; rođendan is a thing',
        },
        {
          hr: 'Nema Markovih ključeva.',
          en: "Marko's keys are not here.",
          note: 'Markovih — genitive plural after nema',
        },
        {
          hr: 'Večeras idemo na večeru kod Lukine bake.',
          en: "Tonight we are going to dinner at Luka's grandmother's.",
          note: 'Lukine — genitive after kod, agreeing with bake',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Spavam u ___ sobi." (Ana\'s)',
      options: ['Anina', 'Aninu', 'Aninoj', 'Anine'],
      correct: 2,
      explanation:
        'U + locative: soba → u sobi. The possessive follows with the feminine locative ending: Aninoj sobi.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Idem u kino s ___ bratom." (Marko\'s)',
      options: ['Markov', 'Markovim', 'Markovog', 'Markovom'],
      correct: 1,
      explanation:
        'With whom? — the instrumental, and the masculine instrumental of a possessive is -im: Markovim bratom. Markovom is the dative or locative.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Leaving the possessive in the subject form while the noun moves: "u Anina kuća" or "u Anina kući" — both words go into the locative: u Aninoj kući. (2) The instrumental with -om for a masculine noun: "s Markovom bratom" — it is s Markovim bratom. (3) Using the English \'s: "Markov\'s brat" — the -ov already means "of Marko".',
      highlight: 'u Aninoj kući',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Ovo je auto ___ sestre." (Ana\'s)',
          options: ['Anina', 'Anine', 'Aninoj', 'Aninu'],
          correct: 1,
          explanation:
            'Sestre is the genitive, so the possessive takes the genitive too: Anine sestre.',
        },
        {
          q: 'Complete: "Putujem s ___ prijateljem." (Ivan\'s)',
          options: ['Ivanov', 'Ivanovog', 'Ivanovim', 'Ivanovu'],
          correct: 2,
          explanation: 'The masculine instrumental of a possessive is -im: s Ivanovim prijateljem.',
        },
        {
          q: 'Complete: "Dajem cvijeće ___ baki." (Marija\'s)',
          options: ['Marijinoj', 'Marijina', 'Marijinu', 'Marijine'],
          correct: 0,
          explanation: 'To whom? — the dative, feminine: Marijinoj baki.',
        },
        {
          q: 'Complete: "Vidim ___ sestru." (Petar\'s)',
          options: ['Petrova', 'Petrovoj', 'Petrove', 'Petrovu'],
          correct: 3,
          explanation:
            'Petar loses its fleeting a: Petrov. Sestru is a feminine accusative, so Petrovu sestru.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Spavam u Anina sobi.',
            'Spavam u Aninoj sobi.',
            'Spavam u Aninom sobi.',
            'Spavam u Anine sobi.',
          ],
          correct: 1,
          explanation: 'Both words go into the feminine locative: u Aninoj sobi.',
        },
        {
          q: 'Complete: "Razgovaramo s ___ roditeljima." (Luka\'s)',
          options: ['Lukini', 'Lukine', 'Lukinih', 'Lukinim'],
          correct: 3,
          explanation:
            'Luka ends in -a, so Lukin; the instrumental plural is -im: s Lukinim roditeljima.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Possessives in the Cases — Key Takeaways',
      points: [
        'The owner gives the form: Anin, Markov, Petrov, sestrin',
        'The noun gives the ending: u Aninoj kući, s Markovim bratom',
        'Feminine endings are those of nova: Anine, Aninoj, Aninu, Aninom',
        'Masculine and neuter have two correct forms: Markova / Markovog, Markovu / Markovom',
        'The instrumental is -im in the masculine and neuter, -om in the feminine',
        'Plural: Markovih in the genitive, Markovim for dative, locative and instrumental',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 7 · Official forms
// ─────────────────────────────────────────────────────────
const OFFICIAL_FORMS = {
  id: 'official-forms',
  title: 'Filling In a Form',
  subtitle: 'Giving your personal details to an official, politely and correctly',
  icon: '📋',
  level: 'A2',
  duration: '~7 min',
  color: '#475569',
  bg: '#f8fafc',
  slides: [
    {
      type: 'intro',
      title: 'At the Counter',
      body: 'Registering an address, opening a bank account, enrolling in a course, visiting a doctor for the first time — sooner or later an official will ask for your details, or hand you a form (obrazac) to fill in. The questions are always the same handful, always asked with the polite Vi, and the answers use grammar you already know: the past participle rođen, the locative of places, dates in the genitive.',
      icon: '📋',
    },
    {
      type: 'rule',
      title: 'The Words on Every Form',
      body: 'ime — first name; prezime — surname; datum rođenja — date of birth; mjesto rođenja — place of birth; adresa — address; državljanstvo — citizenship; zanimanje — occupation; spol — sex (M or Ž); potpis — signature. Croatian forms also ask for the OIB, the personal identification number every resident has: eleven digits.',
      highlight: 'datum rođenja',
    },
    {
      type: 'rule',
      title: 'The Questions Use Vi',
      body: 'An official speaks to you with Vi, and you answer the same way: Kako se zovete? Kako se prezivate? Kada ste rođeni? Gdje ste rođeni? Gdje stanujete? Kojeg ste državljanstva? Čime se bavite? In writing, the polite Vi and Vaš take a capital letter: Vaše ime, Vaša adresa.',
      highlight: 'Kako se prezivate?',
    },
    {
      type: 'rule',
      title: 'Born: rođen, rođena',
      body: 'A man says Rođen sam, a woman Rođena sam. The date follows in the genitive, as in A1: Rođen sam petog ožujka tisuću devetsto devedesete. The place follows in the locative: Rođena sam u Splitu, u Kanadi, u Njemačkoj.',
      highlight: 'Rođena sam u Splitu',
    },
    {
      type: 'rule',
      title: 'Citizenship and Occupation',
      body: 'For citizenship you can say Imam hrvatsko državljanstvo, or name yourself: Ja sam hrvatski državljanin (a man), Ja sam hrvatska državljanka (a woman). For occupation: Po zanimanju sam medicinska sestra, or simply Ja sam inženjer, Radim kao kuhar. On the form itself the occupation is written with a small letter: učiteljica, student, umirovljenik.',
      highlight: 'Imam hrvatsko državljanstvo',
    },
    {
      type: 'table',
      title: 'Field, Question, Answer',
      headers: ['Field', 'The official asks', 'You answer'],
      rows: [
        ['ime', 'Kako se zovete?', 'Zovem se Marija.'],
        ['prezime', 'Kako se prezivate?', 'Prezivam se Horvat.'],
        ['datum rođenja', 'Kada ste rođeni?', 'Rođena sam 12. 4. 1988.'],
        ['mjesto rođenja', 'Gdje ste rođeni?', 'Rođena sam u Torontu.'],
        ['adresa', 'Gdje stanujete?', 'Stanujem u Ilici 25.'],
        ['državljanstvo', 'Kojeg ste državljanstva?', 'Imam hrvatsko i kanadsko državljanstvo.'],
        ['zanimanje', 'Čime se bavite?', 'Po zanimanju sam učiteljica.'],
      ],
    },
    {
      type: 'example',
      title: 'At the Office',
      items: [
        {
          hr: 'Kako se zovete i kako se prezivate?',
          en: 'What is your first name, and what is your surname?',
          note: 'Vi — the polite form an official uses',
        },
        {
          hr: 'Zovem se Marija, a prezivam se Horvat.',
          en: 'My first name is Marija and my surname is Horvat.',
        },
        {
          hr: 'Rođena sam dvanaestog travnja tisuću devetsto osamdeset osme.',
          en: 'I was born on the twelfth of April 1988.',
          note: 'rođena — a woman speaking; a man says rođen',
        },
        {
          hr: 'Rođen sam u Torontu, u Kanadi.',
          en: 'I was born in Toronto, in Canada.',
          note: 'Torontu, Kanadi — locative after u',
        },
        {
          hr: 'Stanujem u Ilici broj dvadeset pet.',
          en: 'I live at number twenty-five, Ilica Street.',
        },
        {
          hr: 'Imam hrvatsko i kanadsko državljanstvo.',
          en: 'I have Croatian and Canadian citizenship.',
        },
        {
          hr: 'Po zanimanju sam medicinska sestra.',
          en: 'I am a nurse by profession.',
        },
        {
          hr: 'Moj OIB ima jedanaest brojeva.',
          en: 'My OIB has eleven digits.',
        },
        {
          hr: 'Molim Vas, ispunite obrazac i potpišite se ovdje.',
          en: 'Please fill in the form and sign here.',
          note: 'ispunite, potpišite — the polite imperative',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'The official wants your surname. Which question do you hear?',
      options: ['Kako se zovete?', 'Kako se prezivate?', 'Gdje stanujete?'],
      correct: 1,
      explanation:
        'Prezime is the surname, and prezivati se is "to have as a surname": Kako se prezivate?',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'A woman says where she was born. Which is correct?',
      options: ['Rođen sam u Zadru.', 'Rođena sam u Zadru.', 'Rođena sam u Zadar.'],
      correct: 1,
      explanation: 'A woman says rođena, and the place takes the locative after u: u Zadru.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Using ti with an official: "Možeš li mi pomoći?" — at a counter it is Možete li mi pomoći? (2) Mixing up ime and prezime: many Croatian forms put the surname FIRST — Prezime i ime. Read the label before you write. (3) Forgetting your own gender: a woman writes Rođena sam, not Rođen sam. (4) Leaving the place in the subject form: "Rođen sam u Zagreb" — it is u Zagrebu.',
      highlight: 'Prezime i ime',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which field asks for your citizenship?',
          options: ['zanimanje', 'prezime', 'državljanstvo', 'potpis'],
          correct: 2,
          explanation:
            'Državljanstvo is citizenship; zanimanje is occupation, potpis is signature.',
        },
        {
          q: 'A man answers "Kada ste rođeni?". Which is correct?',
          options: [
            'Rođen sam 3. svibnja 1985.',
            'Rođena sam 3. svibnja 1985.',
            'Rođen sam u 3. svibnja 1985.',
            'Rođenje sam 3. svibnja 1985.',
          ],
          correct: 0,
          explanation: 'A man says rođen, and the date needs no preposition: Rođen sam 3. svibnja.',
        },
        {
          q: 'You are asked "Čime se bavite?". What do they want to know?',
          options: ['Your address', 'Your occupation', 'Your date of birth', 'Your signature'],
          correct: 1,
          explanation: 'Baviti se is "to do, to be occupied with": they are asking what you do.',
        },
        {
          q: 'Which question would you put to an official you do not know?',
          options: [
            'Kako se zoveš?',
            'Gdje stanuješ?',
            'Možeš li mi pomoći?',
            'Možete li mi pomoći?',
          ],
          correct: 3,
          explanation: 'With an official you use the polite Vi: Možete li mi pomoći?',
        },
        {
          q: 'Complete: "Rođena sam u ___." (Canada)',
          options: ['Kanada', 'Kanadu', 'Kanadi', 'Kanadom'],
          correct: 2,
          explanation: 'Where? — u + locative: u Kanadi.',
        },
        {
          q: 'What do you write in the field "potpis"?',
          options: ['Your signature', 'Your occupation', 'Your surname', 'Your country'],
          correct: 0,
          explanation: 'Potpis is a signature — potpisati se means to sign.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Filling In a Form — Key Takeaways',
      points: [
        'ime, prezime, datum i mjesto rođenja, adresa, državljanstvo, zanimanje, potpis',
        'Officials ask with Vi: Kada ste rođeni? Čime se bavite?',
        'Rođen sam (a man), rođena sam (a woman)',
        'The place of birth takes the locative: u Splitu, u Kanadi',
        'Imam hrvatsko državljanstvo — or hrvatski državljanin / hrvatska državljanka',
        'In writing, Vi and Vaš take a capital letter',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 8 · Adjectives, demonstratives and possessives in the accusative
// ─────────────────────────────────────────────────────────
const ACCUSATIVE_ADJ = {
  id: 'accusative-adjectives',
  title: 'A New Friend, a New Table',
  subtitle: 'Adjectives, taj and moj in the accusative',
  icon: '🛍️',
  level: 'A2',
  duration: '~8 min',
  color: '#c2410c',
  bg: '#fff7ed',
  slides: [
    {
      type: 'intro',
      title: 'The Object Brings Its Words With It',
      body: 'You know the accusative of nouns: Vidim ženu, Čekam brata, Kupujem stol. But a noun rarely travels alone — it comes with "a new", "that", "my", "our". In the accusative all of these words change together with the noun. The good news: there are only three things to learn, and one of them is "nothing changes".',
      icon: '🛍️',
    },
    {
      type: 'rule',
      title: 'Feminine: -u',
      body: 'A feminine adjective in the accusative ends in -u, exactly like its noun: nova knjiga → Čitam novu knjigu. The same goes for ta → tu, moja → moju, naša → našu: Poznaješ li tu ženu? Volim moju sestru. Imamo našu kuću na moru.',
      highlight: 'novu knjigu',
    },
    {
      type: 'rule',
      title: 'A Masculine Thing: Nothing Changes',
      body: 'If the masculine noun is a THING, the accusative is the same as the subject form — for the noun and for every word with it: novi stol → Kupujem novi stol. Taj grad → Volim taj grad. Moj auto → Perem moj auto. The same is true of every neuter noun: novo pismo → Čitam novo pismo; to selo → Volim to selo.',
      highlight: 'Kupujem novi stol',
    },
    {
      type: 'rule',
      title: 'A Masculine Living Being: -og or -eg',
      body: 'If the masculine noun is a person or an animal, the adjective takes -og (or the longer -oga): novi prijatelj → Imam novog prijatelja. Taj → tog: Poznaješ li tog čovjeka? Moj → mog or mojeg: Zovem mog brata. After a soft consonant (č, ć, đ, j, lj, nj, š, ž) it is -eg: naš → našeg susjeda, vaš → vašeg psa.',
      highlight: 'Imam novog prijatelja',
    },
    {
      type: 'table',
      title: 'Nominative → Accusative',
      headers: ['', 'nominative', 'accusative'],
      rows: [
        ['masculine thing', 'novi stol', 'novi stol'],
        ['masculine alive', 'novi prijatelj', 'novog prijatelja'],
        ['feminine', 'nova knjiga', 'novu knjigu'],
        ['neuter', 'novo pismo', 'novo pismo'],
        ['masculine plural', 'novi prijatelji', 'nove prijatelje'],
        ['feminine plural', 'nove knjige', 'nove knjige'],
        ['neuter plural', 'nova pisma', 'nova pisma'],
      ],
    },
    {
      type: 'table',
      title: 'Taj, Moj, Naš',
      headers: ['', 'taj / ta / to', 'moj / moja / moje', 'naš / naša / naše'],
      rows: [
        ['masculine thing', 'taj grad', 'moj auto', 'naš stan'],
        ['masculine alive', 'tog čovjeka', 'mog brata', 'našeg susjeda'],
        ['feminine', 'tu ženu', 'moju sestru', 'našu kuću'],
        ['neuter', 'to selo', 'moje pismo', 'naše dijete'],
      ],
    },
    {
      type: 'rule',
      title: 'The Plural Is Simpler',
      body: 'In the plural the living/thing difference disappears. Masculine and feminine both end in -e: Čekamo nove goste. Kupujem nove cipele. Neuter ends in -a: Pišem duga pisma. Tog, toga, mog, mojeg — all the double forms are correct; choose one and keep to it.',
      highlight: 'Čekamo nove goste',
    },
    {
      type: 'example',
      title: 'Objects With Company',
      items: [
        {
          hr: 'Kupujem novu haljinu.',
          en: 'I am buying a new dress.',
          note: 'novu — feminine accusative, like haljinu',
        },
        {
          hr: 'Imamo novi stol u kuhinji.',
          en: 'We have a new table in the kitchen.',
          note: 'novi — stol is a thing, so it does not change',
        },
        {
          hr: 'Upoznala sam novog prijatelja.',
          en: 'I met a new friend.',
          note: 'novog — prijatelj is alive, so -og',
        },
        {
          hr: 'Poznaješ li tog čovjeka?',
          en: 'Do you know that man?',
          note: 'tog — taj before a living masculine object',
        },
        {
          hr: 'Vidim tu ženu svaki dan.',
          en: 'I see that woman every day.',
          note: 'tu — ta becomes tu',
        },
        {
          hr: 'Volimo našeg psa.',
          en: 'We love our dog.',
          note: 'našeg — after the soft š, -eg instead of -og',
        },
        {
          hr: 'Čitam to pismo već treći put.',
          en: 'I am reading that letter for the third time.',
          note: 'to — neuter does not change',
        },
        {
          hr: 'Čekamo nove goste.',
          en: 'We are waiting for new guests.',
          note: 'nove — masculine plural accusative',
        },
        {
          hr: 'Moja mama ima crnu mačku i bijelog psa.',
          en: 'My mum has a black cat and a white dog.',
          note: 'crnu — feminine; bijelog — a living masculine object',
        },
        {
          hr: 'Gledamo taj stari film.',
          en: 'We are watching that old film.',
          note: 'taj stari — film is a thing, so nothing changes',
        },
        {
          hr: 'Ivana ima novog dečka i novu mačku.',
          en: 'Ivana has a new boyfriend and a new cat.',
          note: 'novog dečka — alive and masculine; novu mačku — feminine',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Imam ___ psa." (a big)',
      options: ['veliki', 'velikog', 'veliku'],
      correct: 1,
      explanation: 'Pas is a living masculine object, so the adjective takes -og: velikog psa.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Kupujem ___ auto." (a new)',
      options: ['novog', 'novu', 'novi'],
      correct: 2,
      explanation: 'Auto is a masculine thing: nothing changes in the accusative, so novi auto.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Treating a thing like a person: "Kupujem novog auta" — a car is a thing, so Kupujem novi auto. (2) Forgetting the change for a person: "Upoznao sam novi profesor" — he is alive: Upoznao sam novog profesora. (3) -og after a soft consonant: "našog susjeda" — after š it is -eg: našeg susjeda.',
      highlight: 'Kupujem novi auto',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Volim ___ sestru." (my)',
          options: ['moja', 'moju', 'mojoj', 'moje'],
          correct: 1,
          explanation:
            'Sestru is a feminine accusative, so the possessive ends in -u too: moju sestru.',
        },
        {
          q: 'Complete: "Poznajem ___ čovjeka." (that)',
          options: ['taj', 'ta', 'tog', 'tom'],
          correct: 2,
          explanation: 'Čovjek is a living masculine object: taj becomes tog.',
        },
        {
          q: 'Complete: "Kupili smo ___ stol." (a new)',
          options: ['novi', 'novog', 'novu', 'novom'],
          correct: 0,
          explanation: 'Stol is a masculine thing, so nothing changes: novi stol.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Volimo našog psa.',
            'Volimo naš pas.',
            'Volimo našem psu.',
            'Volimo našeg psa.',
          ],
          correct: 3,
          explanation: 'A dog is alive, so -og — but after the soft š it is -eg: našeg psa.',
        },
        {
          q: 'Complete: "Čekam ___ prijatelje." (my)',
          options: ['moji', 'moje', 'mojih', 'mojima'],
          correct: 1,
          explanation: 'Masculine plural accusative: moje prijatelje.',
        },
        {
          q: 'Complete: "Čitam ___ pismo." (that)',
          options: ['to', 'tog', 'tu', 'tom'],
          correct: 0,
          explanation: 'Pismo is neuter, so nothing changes: to pismo.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Accusative Adjectives — Key Takeaways',
      points: [
        'Feminine: -u — novu knjigu, tu ženu, moju sestru',
        'Masculine thing and every neuter: no change — novi stol, to selo',
        'Masculine living being: -og / -eg — novog prijatelja, tog čovjeka, našeg susjeda',
        'Plural: -e for masculine and feminine, -a for neuter',
        'Tog / toga, mog / mojeg — both forms are correct',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 11 · The order of the clitics
// ─────────────────────────────────────────────────────────
const CLITIC_ORDER = {
  id: 'clitic-order',
  title: 'Dao sam joj ga',
  subtitle: 'The fixed order of the small unstressed words',
  icon: '🧩',
  level: 'A2',
  duration: '~8 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Small Words, Strict Rules',
      body: 'Croatian has a set of very short, unstressed words that cannot stand on their own: li, the short forms of biti and htjeti (sam, si, je, ću, ćeš…), the short pronouns (mi, ti, mu, joj, me, te, ga…) and se. They are called clitics — words that lean on the word before them. You already put them in second place one at a time. When two or three meet, they line up in an order that never changes.',
      icon: '🧩',
    },
    {
      type: 'rule',
      title: 'They All Go in Second Place',
      body: 'The whole group sits after the first word or phrase of the sentence, never at the start: Dao sam joj ga. Jučer sam joj ga dao. Ivan mi ga je dao. If the sentence opens with a question word, the group follows it: Kad si mu rekao? A clitic can never open a sentence: "Mu sam rekao" is impossible.',
      highlight: 'Jučer sam joj ga dao.',
    },
    {
      type: 'table',
      title: 'The Order',
      headers: ['Place', 'Small words', 'Example'],
      rows: [
        ['1', 'li', 'Jesi li…?'],
        ['2', 'sam, si, smo, ste, su · ću, ćeš, će, ćemo, ćete', 'Dao sam…'],
        ['3', 'dative: mi, ti, mu, joj, nam, vam, im', '…sam joj…'],
        ['4', 'accusative: me, te, ga, je (ju), nas, vas, ih', '…joj ga…'],
        ['5', 'se', 'Sviđa li ti se?'],
        ['6', 'je (he or she is, has)', 'Dao joj ga je.'],
      ],
    },
    {
      type: 'rule',
      title: 'To Whom Before What',
      body: 'English says "I gave it to her" — the thing first. Croatian puts the person first: the dative (to whom) comes before the accusative (what). Dao sam joj ga. Pokazat ću vam ih. Poslala sam mu ga. Later you will meet the conditional words (bih, bi…); they take place 2, beside sam and ću.',
      highlight: 'Pokazat ću vam ih.',
    },
    {
      type: 'rule',
      title: 'Je Goes Last',
      body: 'Sam, si, smo, ste, su and ću open the group. But je — "he or she is, has" — goes to the END of it: Dao joj ga je. Ivan mi ga je poklonio. Rekla nam je istinu. And when je would meet the accusative je ("her"), Croatian says ju instead: Vidio ju je, never "je je".',
      highlight: 'Vidio ju je',
    },
    {
      type: 'rule',
      title: 'Questions: Li Comes First',
      body: 'Li opens the group, straight after the verb: Sviđa li ti se? Hoćeš li mi ga dati? Možete li mi pomoći? With the past, the question begins with the full form jesi, jeste, je: Jesi li mu rekao? Je li ti se svidjelo? And se comes after the pronouns: Sviđa mi se, Sviđa li ti se, not "se ti".',
      highlight: 'Jesi li mu rekao?',
    },
    {
      type: 'example',
      title: 'The Cluster at Work',
      items: [
        {
          hr: 'Dao sam joj ga.',
          en: 'I gave it to her.',
          note: 'sam, then joj (to her), then ga (it)',
        },
        {
          hr: 'Jesi li mu rekao?',
          en: 'Did you tell him?',
          note: 'li comes first, then mu',
        },
        {
          hr: 'Sviđa li ti se Zagreb?',
          en: 'Do you like Zagreb?',
          note: 'li, then ti, then se',
        },
        {
          hr: 'Ivan mi ga je poklonio.',
          en: 'Ivan gave it to me as a present.',
          note: 'mi, then ga, then je at the end',
        },
        {
          hr: 'Vidio ju je jučer u gradu.',
          en: 'He saw her in town yesterday.',
          note: 'ju instead of je before the auxiliary je',
        },
        {
          hr: 'Sutra ću ti ga donijeti.',
          en: 'I will bring it to you tomorrow.',
          note: 'ću, then ti, then ga',
        },
        {
          hr: 'Pokazat ću vam ih.',
          en: 'I will show them to you.',
          note: 'ću, then vam, then ih',
        },
        {
          hr: 'Kad ste nam ga poslali?',
          en: 'When did you send it to us?',
          note: 'the cluster follows the question word kad',
        },
        {
          hr: 'Rekla nam je istinu.',
          en: 'She told us the truth.',
          note: 'nam before je',
        },
        {
          hr: 'Je li ti ga dala?',
          en: 'Did she give it to you?',
          note: 'li, then ti, then ga',
        },
        {
          hr: 'Mama mi ga je kupila za rođendan, a tata mi ga je donio kući.',
          en: 'Mum bought it for me for my birthday, and Dad brought it home for me.',
          note: 'mi, then ga, then je — in both halves',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which order is correct for "I gave it to her"?',
      options: ['Dao sam ga joj.', 'Dao joj sam ga.', 'Dao sam joj ga.'],
      correct: 2,
      explanation: 'Sam first, then the dative joj, then the accusative ga: Dao sam joj ga.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which is correct for "He saw her"?',
      options: ['Vidio je je.', 'Vidio ju je.', 'Vidio je ju.'],
      correct: 1,
      explanation:
        'The accusative "her" comes before je, and next to je it becomes ju: Vidio ju je.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The English order, thing before person: "Dao sam ga joj" — Croatian puts to whom first: Dao sam joj ga. (2) Je in the middle: "Dala je mi ga" — je closes the group: Dala mi ga je. (3) A clitic at the start: "Mu sam rekao" — the first word must be a full word: Rekao sam mu. (4) "je je" for "has … her": it is ju je.',
      highlight: 'Dao sam joj ga',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Which order is correct for "I gave it to him"? (a woman speaking)',
          options: ['Dala sam ga mu.', 'Dala sam mu ga.', 'Dala mu sam ga.', 'Mu sam ga dala.'],
          correct: 1,
          explanation: 'Sam, then the dative mu, then the accusative ga.',
        },
        {
          q: 'Which is correct for "She gave it to me"?',
          options: ['Dala je mi ga.', 'Dala mi je ga.', 'Je mi ga dala.', 'Dala mi ga je.'],
          correct: 3,
          explanation: 'Je goes to the end of the group: mi, ga, je.',
        },
        {
          q: 'Which is correct for "Do you like it?" (ti)',
          options: ['Sviđa li ti se?', 'Sviđa ti li se?', 'Li ti se sviđa?', 'Sviđa ti se li?'],
          correct: 0,
          explanation: 'Li first, then the dative ti, then se.',
        },
        {
          q: 'Complete: "Vidio ___ je u gradu." (her)',
          options: ['je', 'ju', 'joj', 'njoj'],
          correct: 1,
          explanation: 'Before the auxiliary je, the accusative "her" is ju: Vidio ju je.',
        },
        {
          q: 'Which is correct for "I will bring it to you"? (ti)',
          options: [
            'Donijet ću ga ti.',
            'Donijet ću ti ga.',
            'Donijet ti ću ga.',
            'Ću ti ga donijeti.',
          ],
          correct: 1,
          explanation: 'Ću, then ti (to you), then ga (it).',
        },
        {
          q: 'Which is correct for "Ivan told us"?',
          options: [
            'Ivan je nam rekao.',
            'Ivan je rekao nam.',
            'Ivan nam je rekao.',
            'Nam je Ivan rekao.',
          ],
          correct: 2,
          explanation: 'After the first word Ivan comes the cluster nam je — je last.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Clitic Order — Key Takeaways',
      points: [
        'All the small words sit together in second place',
        'Order: li – sam/ću – dative – accusative – se – je',
        'To whom before what: Dao sam joj ga',
        'Je closes the group: Ivan mi ga je dao',
        'Ju je, never je je',
        'Questions: Sviđa li ti se? Jesi li mu rekao?',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsA2.js). */
export const LESSONS = [
  DECLENSION_REVIEW,
  RELATIONAL_ADJ,
  POSSESSIVE_CASES,
  OFFICIAL_FORMS,
  ACCUSATIVE_ADJ,
  CLITIC_ORDER,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'declension-review': {
    worked: [
      {
        title: 'Find the Question, Then the Ending',
        problem: 'Prevedi: "I am going to the cinema with my brother."',
        en: 'I am going to the cinema with my brother.',
        steps: [
          {
            label: 'Where to?',
            text: 'kino is where you are going: u + accusative. Kino is neuter, so it does not change.',
          },
          { label: 'With whom?', text: 'brat answers S kim? — that is the instrumental.' },
          {
            label: 'The ending',
            text: 'Masculine instrumental is -om: bratom. (After a soft consonant it would be -em.)',
          },
        ],
        answer: 'Idem u kino s bratom.',
      },
      {
        title: 'A Number, Then the Genitive Plural',
        problem: 'Prevedi: "There are seven students in the room."',
        en: 'There are seven students in the room.',
        steps: [
          { label: 'Where?', text: 'u + locative: soba → u sobi.' },
          {
            label: 'After seven',
            text: 'From five upwards the noun goes into the genitive plural.',
          },
          {
            label: 'The form',
            text: 'student → studenata, with an a slipped in before the ending.',
          },
          { label: 'The verb', text: 'A quantity takes a singular verb: je.' },
        ],
        answer: 'U sobi je sedam studenata.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ovo je kuća moje ___. (sestra)',
          options: ['sestra', 'sestre', 'sestri', 'sestru'],
          correct: 1,
          hint: 'Of whom? That question belongs to the genitive.',
          explanation: 'sestre — the genitive singular of a feminine noun in -a.',
        },
        {
          q: 'Idem na more s ___. (prijatelji)',
          options: ['prijatelji', 'prijatelje', 'prijateljima', 'prijatelja'],
          correct: 2,
          hint: 'With whom? — and there are several of them.',
          explanation: 'prijateljima — instrumental plural.',
        },
        {
          q: 'Vidim ___ na ulici. (susjed)',
          options: ['susjed', 'susjeda', 'susjedu', 'susjedom'],
          correct: 1,
          hint: 'A living masculine object.',
          explanation: 'susjeda — a living masculine object takes the genitive-like form.',
        },
        {
          q: 'Vidim ___ na stolu. (a phone)',
          options: ['telefona', 'telefon', 'telefonu', 'telefonom'],
          correct: 1,
          hint: 'A masculine THING as the object.',
          explanation: 'telefon — a masculine thing does not change in the accusative.',
        },
        {
          q: 'Kupujem pet ___. (lemons)',
          options: ['limuni', 'limune', 'limuna', 'limunima'],
          correct: 2,
          hint: 'After five: the genitive plural.',
          explanation: 'limuna — genitive plural after pet.',
        },
        {
          q: 'Pričam o ___. (selo)',
          options: ['selo', 'sela', 'selu', 'selom'],
          correct: 2,
          hint: 'About what? — the locative.',
          explanation: 'selu — neuter locative singular.',
        },
        {
          q: 'Profesor daje ___ zadaću. (studenti)',
          options: ['studenti', 'studente', 'studenata', 'studentima'],
          correct: 3,
          hint: 'To whom — and there are many.',
          explanation: 'studentima — dative plural.',
        },
        {
          q: 'Putujem ___. (by train)',
          options: ['vlak', 'vlaka', 'vlakom', 'vlaku'],
          correct: 2,
          hint: 'By what means? — the instrumental.',
          explanation: 'vlakom — the instrumental of means.',
        },
        {
          type: 'type',
          q: 'Nemam ____. (time — vrijeme)',
          answer: 'vremena',
          hint: 'Nemati takes the genitive, and this noun changes in the middle.',
          explanation: 'vremena — the genitive of vrijeme.',
        },
        {
          type: 'type',
          q: 'Živimo u ____. (Zagreb)',
          answer: 'Zagrebu',
          hint: 'Where? — u + locative.',
          explanation: 'u Zagrebu — masculine locative -u.',
        },
        {
          type: 'type',
          q: 'Razgovaram s ____. (sestra)',
          answer: 'sestrom',
          hint: 'With whom? — feminine instrumental.',
          explanation: 'sestrom — the feminine instrumental ends in -om.',
        },
        {
          type: 'type',
          q: 'U razredu ima dvadeset ____. (učenik)',
          answer: 'učenika',
          hint: 'After a number above four: the genitive plural.',
          explanation: 'učenika — genitive plural of učenik.',
        },
        {
          type: 'type',
          q: 'Šaljem pismo ____. (baka — dative)',
          answer: 'baki',
          hint: 'To whom? A feminine noun in -a takes -i.',
          explanation: 'baki — the dative of baka.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which question does the instrumental answer?',
        options: ['Gdje?', 'Koga? Što?', 'S kim? Čim?', 'Komu? Čemu?'],
        correct: 2,
        explanation: 'The instrumental answers S kim? Čim? — with whom, by what means.',
      },
      {
        q: 'Complete: "Pomažem ___." (my mother)',
        options: ['majku', 'majci', 'majke', 'majkom'],
        correct: 1,
        explanation: 'Pomagati takes the dative; majka → majci, the k softening to c before -i.',
      },
      {
        q: 'Complete: "U razredu je dvadeset ___." (students)',
        options: ['studenti', 'studente', 'studenata', 'studentima'],
        correct: 2,
        explanation: 'After dvadeset: the genitive plural, studenata.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Živim Splitu.', 'Živim u Split.', 'Živim u Splitom.', 'Živim u Splitu.'],
        correct: 3,
        explanation:
          'Where? — u + locative: u Splitu. The locative never stands without its preposition.',
      },
      {
        q: 'Complete: "Volim razgovarati sa ___." (the neighbours — women)',
        options: ['susjedama', 'susjede', 'susjeda', 'susjedi'],
        correct: 0,
        explanation: 'With whom? — the feminine instrumental plural: susjedama.',
      },
      {
        q: 'Complete: "Djeca se igraju ispred ___." (the building)',
        options: ['zgradu', 'zgradi', 'zgrade', 'zgradom'],
        correct: 2,
        explanation: 'Ispred takes the genitive: zgrade.',
      },
    ],
    vocab: [
      ['padež', 'grammatical case', 'Hrvatski ima sedam padeža.'],
      ['jednina', 'singular', 'Riječ grad je u jednini.'],
      ['množina', 'plural', 'Riječ gradovi je u množini.'],
      ['imenica', 'noun', 'Žena je imenica ženskog roda.'],
      ['nastavak', 'ending', 'Dativ i lokativ imaju isti nastavak.'],
      ['pitanje', 'question', 'Svaki padež odgovara na jedno pitanje.'],
      ['selo', 'village', 'Moja baka živi na selu.'],
      ['susjed', 'neighbour', 'Čekam susjeda ispred zgrade.'],
      ['zgrada', 'building', 'Djeca se igraju ispred zgrade.'],
    ],
  },

  'relational-adjectives': {
    worked: [
      {
        title: 'From Place to Adjective',
        problem: 'Prevedi: "I love the port of Rijeka."',
        en: 'I love the port of Rijeka.',
        steps: [
          { label: 'The place', text: 'Rijeka → the stem Rijek-.' },
          { label: 'Add the ending', text: 'k before -ski becomes č: riječki.' },
          {
            label: 'Agree',
            text: 'luka is feminine, and it is the object: luku. The adjective follows: riječku.',
          },
        ],
        answer: 'Volim riječku luku.',
      },
      {
        title: 'Small Letter or Capital?',
        problem: 'Prevedi: "Zagrebačka banka is a Croatian bank."',
        en: 'Zagrebačka banka is a Croatian bank.',
        steps: [
          {
            label: 'The name',
            text: 'Zagrebačka banka is the name of a company, so its first word takes a capital.',
          },
          {
            label: 'The description',
            text: 'The second adjective only describes the bank, so it takes a small h.',
          },
          { label: 'Agree', text: 'banka is feminine: zagrebačka, hrvatska.' },
        ],
        answer: 'Zagrebačka banka je hrvatska banka.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ovo je ___ trg. (Zagreb)',
          options: ['zagrebski', 'zagrebački', 'zagrebačka', 'zagrebačko'],
          correct: 1,
          hint: 'Zagreb takes -ački, and trg is masculine.',
          explanation: 'zagrebački trg — masculine, agreeing with trg.',
        },
        {
          q: 'Volim ___ luku. (Rijeka)',
          options: ['rijekski', 'riječku', 'riječka', 'riječki'],
          correct: 1,
          hint: 'k + ski becomes čki; luku is a feminine accusative.',
          explanation: 'riječku luku — feminine accusative.',
        },
        {
          q: 'Ovo je ___ plaža. (Split)',
          options: ['splitski', 'splitsko', 'splitska', 'splitske'],
          correct: 2,
          hint: 'Plaža is feminine.',
          explanation: 'splitska plaža.',
        },
        {
          q: 'Govorite li ___? (French)',
          options: ['Francuski', 'francuski', 'francuska', 'francusko'],
          correct: 1,
          hint: 'A language takes a small letter.',
          explanation: 'francuski — small letter, masculine form for the language.',
        },
        {
          q: 'Kupujem ___ pršut. (Istria)',
          options: ['istarski', 'Istarski', 'istarsku', 'istarsko'],
          correct: 0,
          hint: 'Pršut is a masculine thing, and the adjective takes a small letter.',
          explanation: 'istarski pršut.',
        },
        {
          q: 'Moj tata radi u ___ banci. (the company Zagrebačka banka)',
          options: ['zagrebačkoj', 'Zagrebačkoj', 'Zagrebački', 'zagrebačka'],
          correct: 1,
          hint: 'The adjective opens the name of a company, and banci is locative.',
          explanation: 'u Zagrebačkoj banci — a capital because it starts the name.',
        },
        {
          q: 'Gledam ___ film. (American)',
          options: ['amerikanski', 'amerikski', 'američki', 'amerikčki'],
          correct: 2,
          hint: 'Amerika ends in k — what happens to it before -ski?',
          explanation: 'američki — the k merges into -čki.',
        },
        {
          q: 'Which is the adjective from Pariz?',
          options: ['pariski', 'parizki', 'parižki', 'pariški'],
          correct: 3,
          hint: 'z and the ending blend into -ški.',
          explanation: 'pariški.',
        },
        {
          type: 'type',
          q: 'Volim ____ more. (Dalmatia)',
          answer: 'dalmatinsko',
          hint: 'Dalmacija gives dalmatin-, and more is neuter.',
          explanation: 'dalmatinsko more.',
        },
        {
          type: 'type',
          q: 'Učim ____ jezik. (Croatian)',
          answer: 'hrvatski',
          hint: 'A small letter, and jezik is masculine.',
          explanation: 'hrvatski jezik.',
        },
        {
          type: 'type',
          q: 'Ovo je ____ katedrala. (Zagreb)',
          answer: 'zagrebačka',
          hint: 'Zagreb takes -ački; katedrala is feminine.',
          explanation: 'zagrebačka katedrala.',
        },
        {
          type: 'type',
          q: 'Stara ____ Tvrđa je lijepa. (Osijek)',
          answer: 'osječka',
          hint: 'k + ski becomes čki, and Tvrđa is feminine.',
          explanation: 'osječka Tvrđa.',
        },
        {
          type: 'type',
          q: 'Navijam za ____ klub. (Split)',
          answer: 'splitski',
          hint: 'Za + accusative; klub is a masculine thing.',
          explanation: 'splitski klub — a masculine thing does not change.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the adjective from Karlovac?',
        options: ['karlovacski', 'karlovački', 'karlovski', 'karlovčki'],
        correct: 1,
        explanation: 'The c merges with -ski into -čki: karlovački.',
      },
      {
        q: 'Complete: "Kupili smo ___ kulen." (Slavonian)',
        options: ['slavonsku', 'slavonski', 'slavonsko', 'slavonskog'],
        correct: 1,
        explanation: 'Kulen is a masculine thing, so the accusative is slavonski.',
      },
      {
        q: 'Which sentence is written correctly?',
        options: [
          'Učim Njemački jezik.',
          'Učim njemačku jezik.',
          'Učim njemački jezik.',
          'Učim Njemačka jezik.',
        ],
        correct: 2,
        explanation: 'A small letter, and the masculine form to agree with jezik.',
      },
      {
        q: 'What is the adjective from Zadar?',
        options: ['zadrski', 'zadarčki', 'zadarki', 'zadarski'],
        correct: 3,
        explanation: 'Zadar ends in r, so it takes the plain ending: zadarski.',
      },
      {
        q: 'Complete: "Ovo je ___ tramvaj." (Zagreb)',
        options: ['zagrebački', 'zagrebski', 'zagrebačka', 'zagrebško'],
        correct: 0,
        explanation: 'Zagreb gives zagrebački; tramvaj is masculine.',
      },
      {
        q: 'Why is hrvatski in "Govorim hrvatski" written with a small h?',
        options: [
          'Relational adjectives take a small letter',
          'It comes at the end of the sentence',
          'Croatian never uses capital letters',
          'It is an abbreviation',
        ],
        correct: 0,
        explanation: 'Languages and other relational adjectives take a small letter.',
      },
    ],
    vocab: [
      ['hrvatski', 'Croatian', 'Govorim hrvatski.'],
      ['zagrebački', 'of Zagreb', 'Volim zagrebački tramvaj.'],
      ['splitski', 'of Split', 'Šetamo po splitskoj rivi.'],
      ['riječki', 'of Rijeka', 'Riječka luka je velika.'],
      ['njemački', 'German', 'Učim njemački.'],
      ['europski', 'European', 'Hrvatska je europska zemlja.'],
      ['jezik', 'language', 'Koji jezik govoriš?'],
      ['županija', 'county', 'Splitsko-dalmatinska županija je velika.'],
      ['luka', 'port, harbour', 'Brod ulazi u luku.'],
    ],
  },

  'possessive-adjectives-cases': {
    worked: [
      {
        title: 'Owner, Case, Agreement',
        problem: 'Prevedi: "I am sleeping in Ana\'s room."',
        en: "I am sleeping in Ana's room.",
        steps: [
          { label: 'Make the owner an adjective', text: 'Ana ends in -a: Anin.' },
          { label: 'Find the case', text: 'Where? u + locative: soba → u sobi.' },
          {
            label: 'Agree',
            text: 'The possessive takes the feminine locative ending -oj.',
          },
        ],
        answer: 'Spavam u Aninoj sobi.',
      },
      {
        title: 'With Whom, in the Plural',
        problem: 'Prevedi: "I am going on a trip with Petar\'s friends."',
        en: "I am going on a trip with Petar's friends.",
        steps: [
          { label: 'Owner', text: 'Petar loses its fleeting a: Petrov.' },
          { label: 'Case', text: 'With whom? Instrumental plural: prijateljima.' },
          { label: 'Agree', text: 'The possessive in the instrumental plural ends in -im.' },
        ],
        answer: 'Idem na izlet s Petrovim prijateljima.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: "Ovo je soba ___ sestre. (Ivan's)",
          options: ['Ivanova', 'Ivanove', 'Ivanovoj', 'Ivanovu'],
          correct: 1,
          hint: 'Sestre is a feminine genitive, and the possessive follows.',
          explanation: 'Ivanove sestre — feminine genitive.',
        },
        {
          q: "Sjedim na ___ stolici. (grandpa's — djed)",
          options: ['djedova', 'djedovu', 'djedove', 'djedovoj'],
          correct: 3,
          hint: 'Na + locative, and stolica is feminine.',
          explanation: 'na djedovoj stolici — feminine locative.',
        },
        {
          q: "Igram se s ___ mačkom. (Luka's)",
          options: ['Lukinom', 'Lukinim', 'Lukina', 'Lukinu'],
          correct: 0,
          hint: 'Mačka is feminine and here it is in the instrumental.',
          explanation: 's Lukinom mačkom — feminine instrumental -om.',
        },
        {
          q: "Putujem s ___ bratom. (the sister's)",
          options: ['sestrin', 'sestrinim', 'sestrinom', 'sestrina'],
          correct: 1,
          hint: 'A masculine noun in the instrumental — the possessive ends in -im.',
          explanation: 's sestrinim bratom — masculine instrumental.',
        },
        {
          q: "Gledam ___ fotografije. (mum's)",
          options: ['mamina', 'maminih', 'mamine', 'maminim'],
          correct: 2,
          hint: 'Fotografije is a feminine plural object.',
          explanation: 'mamine fotografije — feminine plural accusative.',
        },
        {
          q: "Kupujem kruh za ___ doručak. (dad's)",
          options: ['tatin', 'tatina', 'tatinog', 'tatinu'],
          correct: 0,
          hint: 'Za + accusative; doručak is a masculine thing.',
          explanation: 'za tatin doručak — a masculine thing does not change.',
        },
        {
          q: "Nema ___ ključeva. (Marko's)",
          options: ['Markovi', 'Markove', 'Markovih', 'Markovim'],
          correct: 2,
          hint: 'Nema takes the genitive, and the keys are plural.',
          explanation: 'Markovih ključeva — genitive plural.',
        },
        {
          q: "Šaljem poruku ___ prijateljici. (Ivana's)",
          options: ['Ivanina', 'Ivaninoj', 'Ivaninu', 'Ivanine'],
          correct: 1,
          hint: 'To whom? Feminine dative.',
          explanation: 'Ivaninoj prijateljici — feminine dative -oj.',
        },
        {
          type: 'type',
          q: "Živimo u ____ kući. (Ana's)",
          answer: 'Aninoj',
          hint: 'Kući is a feminine locative.',
          explanation: 'u Aninoj kući.',
        },
        {
          type: 'type',
          q: "Razgovaram s ____ susjedom. (Marko's)",
          answer: 'Markovim',
          hint: 'A masculine instrumental — the possessive ends in -im.',
          explanation: 's Markovim susjedom.',
        },
        {
          type: 'type',
          q: "Ovo je bicikl ____ sestre. (Petar's)",
          answer: 'Petrove',
          hint: 'Petar loses its a; sestre is a feminine genitive.',
          explanation: 'Petrove sestre.',
        },
        {
          type: 'type',
          q: "Pomažem ____ baki. (Ivan's)",
          answer: 'Ivanovoj',
          hint: 'To whom? Feminine dative -oj.',
          explanation: 'Ivanovoj baki.',
        },
        {
          type: 'type',
          q: "Volim ____ kolače. (mum's)",
          answer: 'mamine',
          hint: 'Kolači is a masculine plural, and here it is the object.',
          explanation: 'mamine kolače — masculine plural accusative -e.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ovo je kuća ___ majke." (Ivan\'s)',
        options: ['Ivanova', 'Ivanove', 'Ivanovoj', 'Ivanovu'],
        correct: 1,
        explanation: 'Majke is a feminine genitive: Ivanove majke.',
      },
      {
        q: 'Complete: "Šetam s ___ psom." (Ana\'s)',
        options: ['Anin', 'Aninog', 'Aninim', 'Aninu'],
        correct: 2,
        explanation: 'Masculine instrumental: s Aninim psom.',
      },
      {
        q: 'Complete: "Pišem ___ sestri." (Marko\'s)',
        options: ['Markovoj', 'Markova', 'Markove', 'Markovu'],
        correct: 0,
        explanation: 'To whom? Feminine dative: Markovoj sestri.',
      },
      {
        q: 'Complete: "Volim ___ juhu." (grandma\'s)',
        options: ['bakina', 'bakine', 'bakinoj', 'bakinu'],
        correct: 3,
        explanation: 'Juhu is a feminine accusative: bakinu juhu.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Ručamo u Markova kuhinji.',
          'Ručamo u Markovoj kuhinji.',
          'Ručamo u Markovim kuhinji.',
          'Ručamo u Markove kuhinji.',
        ],
        correct: 1,
        explanation: 'Where? Feminine locative: u Markovoj kuhinji.',
      },
      {
        q: 'Complete: "Idemo na izlet sa ___ prijateljima." (the sister\'s)',
        options: ['sestrini', 'sestrinim', 'sestrine', 'sestrinih'],
        correct: 1,
        explanation: 'Instrumental plural: sa sestrinim prijateljima.',
      },
    ],
    vocab: [
      ['Anin', "Ana's", 'Ovo je Anin stan.'],
      ['Markov', "Marko's", 'Markov brat je visok.'],
      ['sestrin', "the sister's", 'Sestrin auto je nov.'],
      ['bratov', "the brother's", 'Bratove knjige su na stolu.'],
      ['bakin', "grandma's", 'Volim bakinu juhu.'],
      ['djedov', "grandpa's", 'Sjedim na djedovoj stolici.'],
      ['tatin', "dad's", 'Ovo je tatin bicikl.'],
      ['mamin', "mum's", 'Svi vole mamine kolače.'],
      ['stolica', 'chair', 'Stolica je u kuhinji.'],
    ],
  },

  'official-forms': {
    worked: [
      {
        title: 'Answering "Kada i gdje ste rođeni?"',
        problem: 'A woman born in Pula on 7 June 1992 answers: "Kada i gdje ste rođeni?"',
        en: 'I was born on the seventh of June 1992 in Pula.',
        steps: [
          { label: 'Who is speaking', text: 'A woman: rođena sam.' },
          {
            label: 'The date',
            text: 'Day and year as ordinals in the genitive: sedmog lipnja tisuću devetsto devedeset druge.',
          },
          { label: 'The place', text: 'u + locative: Pula → u Puli.' },
        ],
        answer: 'Rođena sam sedmog lipnja tisuću devetsto devedeset druge u Puli.',
      },
      {
        title: 'Filling In the Fields',
        problem: 'Fill in Ime, Prezime and Zanimanje for Josip Kovačević, a chef.',
        en: 'First name, surname, occupation.',
        steps: [
          { label: 'Ime', text: 'The first name: Josip.' },
          { label: 'Prezime', text: 'The family name: Kovačević.' },
          { label: 'Zanimanje', text: 'The occupation, with a small letter: kuhar.' },
        ],
        answer: 'Ime: Josip. Prezime: Kovačević. Zanimanje: kuhar.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kako se ___? — Prezivam se Babić.',
          options: ['prezivate', 'zovete', 'stanujete', 'bavite'],
          correct: 0,
          hint: 'The answer gives a surname.',
          explanation: 'Kako se prezivate? — asking for the surname.',
        },
        {
          q: 'Gdje ___ rođeni? — U Osijeku.',
          options: ['si', 'ste', 'su', 'smo'],
          correct: 1,
          hint: 'An official speaks with Vi.',
          explanation: 'Gdje ste rođeni? — the polite Vi.',
        },
        {
          q: 'Ana piše: "___ sam u Rijeci."',
          options: ['Rođen', 'Rođena', 'Rođeno', 'Rođeni'],
          correct: 1,
          hint: 'A woman is writing about herself.',
          explanation: 'Rođena sam — a woman.',
        },
        {
          q: '___ se bavite? — Ja sam liječnik.',
          options: ['Čime', 'Što', 'Kako', 'Gdje'],
          correct: 0,
          hint: 'Baviti se takes the instrumental.',
          explanation: 'Čime se bavite? — What do you do?',
        },
        {
          q: 'Imam hrvatsko ___. (citizenship)',
          options: ['državljanin', 'državljanstvo', 'država', 'državljanka'],
          correct: 1,
          hint: 'A neuter noun, agreeing with hrvatsko.',
          explanation: 'hrvatsko državljanstvo.',
        },
        {
          q: 'Po ___ sam profesor. (by profession)',
          options: ['zanimanje', 'zanimanja', 'zanimanju', 'zanimanjem'],
          correct: 2,
          hint: 'Po here takes the locative.',
          explanation: 'Po zanimanju sam profesor.',
        },
        {
          q: 'Molim Vas, ___ ovdje. (sign)',
          options: ['potpiši se', 'potpisati se', 'potpis', 'potpišite se'],
          correct: 3,
          hint: 'The polite imperative, to match Molim Vas.',
          explanation: 'potpišite se — the polite imperative.',
        },
        {
          q: 'Which field is your date of birth?',
          options: ['datum rođenja', 'mjesto rođenja', 'državljanstvo', 'prebivalište'],
          correct: 0,
          hint: 'A date is a datum.',
          explanation: 'datum rođenja — date of birth.',
        },
        {
          type: 'type',
          q: 'Kako se ____? — Zovem se Petra. (polite)',
          answer: 'zovete',
          hint: 'The Vi form of zvati se.',
          explanation: 'Kako se zovete?',
        },
        {
          type: 'type',
          q: 'Gdje ____? — U Zagrebu. (polite: you live)',
          answer: 'stanujete',
          hint: 'The Vi form of stanovati.',
          explanation: 'Gdje stanujete?',
        },
        {
          type: 'type',
          q: 'Ivan: "____ sam u Zadru."',
          answer: 'Rođen',
          hint: 'A man is speaking about his birth.',
          explanation: 'Rođen sam u Zadru.',
        },
        {
          type: 'type',
          q: 'Rođena sam u ____. (Kanada)',
          answer: 'Kanadi',
          hint: 'Where? u + locative.',
          explanation: 'u Kanadi.',
        },
        {
          type: 'type',
          q: 'Imam ____ državljanstvo. (Croatian)',
          answer: 'hrvatsko',
          hint: 'A small letter, and državljanstvo is neuter.',
          explanation: 'hrvatsko državljanstvo.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which field asks for your occupation?',
        options: ['adresa', 'zanimanje', 'mjesto rođenja', 'ime'],
        correct: 1,
        explanation: 'Zanimanje is occupation.',
      },
      {
        q: 'A woman answers "Gdje ste rođeni?". Which is correct?',
        options: [
          'Rođen sam u Splitu.',
          'Rođena sam u Split.',
          'Rođena sam u Splitu.',
          'Rođena sam Splitu.',
        ],
        correct: 2,
        explanation: 'A woman says rođena, and u + locative: u Splitu.',
      },
      {
        q: 'You are asked "Kako se prezivate?". What do they want?',
        options: ['Your first name', 'Your surname', 'Your age', 'Your address'],
        correct: 1,
        explanation: 'Prezime is the surname.',
      },
      {
        q: 'An official says "Potpišite se ovdje." What do you do?',
        options: ['Sign here', 'Sit here', 'Wait here', 'Pay here'],
        correct: 0,
        explanation: 'Potpisati se is to sign.',
      },
      {
        q: 'Complete: "Stanujem u ___ 12." (Ilica Street)',
        options: ['Ilica', 'Ilicu', 'Ilici', 'Ilicom'],
        correct: 2,
        explanation: 'Where? u + locative: u Ilici.',
      },
      {
        q: 'Which sentence states your citizenship?',
        options: [
          'Po zanimanju sam kuharica.',
          'Rođena sam u Puli.',
          'Stanujem u Puli.',
          'Imam hrvatsko državljanstvo.',
        ],
        correct: 3,
        explanation: 'Državljanstvo is citizenship.',
      },
    ],
    vocab: [
      ['ime', 'first name', 'Moje ime je Marija.'],
      ['prezime', 'surname', 'Upišite svoje prezime.'],
      ['datum rođenja', 'date of birth', 'Datum rođenja pišemo brojevima.'],
      ['mjesto rođenja', 'place of birth', 'Moje mjesto rođenja je Toronto.'],
      ['adresa', 'address', 'Koja je Vaša adresa?'],
      ['državljanstvo', 'citizenship', 'Imam hrvatsko državljanstvo.'],
      ['zanimanje', 'occupation', 'Po zanimanju sam učiteljica.'],
      ['potpis', 'signature', 'Ovdje stavite svoj potpis.'],
      ['obrazac', 'form (to fill in)', 'Molim Vas, ispunite ovaj obrazac.'],
    ],
  },

  'accusative-adjectives': {
    worked: [
      {
        title: 'A Living Object',
        problem: 'Prevedi: "I met a new neighbour." (a man speaking)',
        en: 'I met a new neighbour.',
        steps: [
          { label: 'The object', text: 'susjed is the object, and he is alive.' },
          { label: 'The noun', text: 'A living masculine accusative: susjeda.' },
          { label: 'The adjective', text: 'It follows with -og: novog. (novoga is also correct.)' },
        ],
        answer: 'Upoznao sam novog susjeda.',
      },
      {
        title: 'Two Things — Nothing Changes',
        problem: 'Prevedi: "We are buying that red car and this blue bike."',
        en: 'We are buying that red car and this blue bike.',
        steps: [
          { label: 'Two things', text: 'auto and bicikl are masculine things.' },
          {
            label: 'Nothing changes',
            text: 'For a masculine thing the accusative is the same as the subject form.',
          },
          { label: 'So', text: 'taj crveni auto, ovaj plavi bicikl.' },
        ],
        answer: 'Kupujemo taj crveni auto i ovaj plavi bicikl.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ana kupuje ___ torbu. (a red)',
          options: ['crvena', 'crvenu', 'crvenog', 'crvene'],
          correct: 1,
          hint: 'Torbu is a feminine accusative.',
          explanation: 'crvenu torbu.',
        },
        {
          q: 'Vidim ___ susjeda. (our)',
          options: ['našeg', 'naš', 'našog', 'našu'],
          correct: 0,
          hint: 'A living masculine object, and naš ends in a soft š.',
          explanation: 'našeg susjeda — -eg after a soft consonant.',
        },
        {
          q: 'Imam ___ telefon. (an old)',
          options: ['starog', 'stari', 'staru', 'starom'],
          correct: 1,
          hint: 'A telephone is a masculine thing.',
          explanation: 'stari telefon — nothing changes.',
        },
        {
          q: 'Poznaješ li ___ djevojku? (that)',
          options: ['ta', 'toj', 'tom', 'tu'],
          correct: 3,
          hint: 'Djevojku is a feminine accusative.',
          explanation: 'tu djevojku.',
        },
        {
          q: 'Čekamo ___ goste. (dear — drag)',
          options: ['drage', 'dragi', 'dragih', 'dragim'],
          correct: 0,
          hint: 'A masculine plural object.',
          explanation: 'drage goste — masculine plural accusative -e.',
        },
        {
          q: 'Pozvali smo ___ profesora. (our)',
          options: ['naš', 'našu', 'našeg', 'našim'],
          correct: 2,
          hint: 'A living masculine object, after a soft consonant.',
          explanation: 'našeg profesora.',
        },
        {
          q: 'Čitam ___ knjige. (interesting)',
          options: ['zanimljive', 'zanimljivi', 'zanimljivih', 'zanimljivu'],
          correct: 0,
          hint: 'Knjige is a feminine plural object.',
          explanation: 'zanimljive knjige.',
        },
        {
          q: 'Vole ___ dijete. (their)',
          options: ['njihovog', 'njihovo', 'njihovu', 'njihov'],
          correct: 1,
          hint: 'Dijete is neuter — even though it is alive.',
          explanation: 'njihovo dijete — neuter does not change.',
        },
        {
          type: 'type',
          q: 'Kupio sam ____ auto. (a new)',
          answer: 'novi',
          accept: ['nov'],
          hint: 'A car is a masculine thing.',
          explanation: 'novi auto — nothing changes.',
        },
        {
          type: 'type',
          q: 'Zovem ____ liječnika. (a good)',
          answer: 'dobrog',
          accept: ['dobroga'],
          hint: 'A living masculine object takes -og.',
          explanation: 'dobrog liječnika.',
        },
        {
          type: 'type',
          q: 'Volim ____ sestru. (my)',
          answer: 'moju',
          hint: 'Sestru is a feminine accusative.',
          explanation: 'moju sestru.',
        },
        {
          type: 'type',
          q: 'Poznaješ li ____ čovjeka? (that)',
          answer: 'tog',
          accept: ['toga'],
          hint: 'A living masculine object.',
          explanation: 'tog čovjeka.',
        },
        {
          type: 'type',
          q: 'Gledamo ____ film. (that)',
          answer: 'taj',
          hint: 'A film is a masculine thing.',
          explanation: 'taj film — nothing changes.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Gledam ___ kuću." (that)',
        options: ['ta', 'tu', 'toj', 'te'],
        correct: 1,
        explanation: 'Feminine accusative: tu kuću.',
      },
      {
        q: 'Complete: "Zovem ___ liječnika." (a good)',
        options: ['dobar', 'dobri', 'dobrog', 'dobrom'],
        correct: 2,
        explanation: 'A doctor is alive: dobrog liječnika.',
      },
      {
        q: 'Complete: "Trebam ___ kaput." (a warm)',
        options: ['topli', 'toplog', 'toplu', 'toplom'],
        correct: 0,
        explanation: 'A coat is a masculine thing: topli kaput.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Upoznao sam novi profesor.',
          'Upoznao sam novom profesoru.',
          'Upoznao sam novim profesorom.',
          'Upoznao sam novog profesora.',
        ],
        correct: 3,
        explanation: 'A professor is alive: novog profesora.',
      },
      {
        q: 'Complete: "Kupujem ___ cipele." (new)',
        options: ['novi', 'nova', 'nove', 'novih'],
        correct: 2,
        explanation: 'Feminine plural accusative: nove cipele.',
      },
      {
        q: 'Complete: "Volim ___ selo." (your — ti)',
        options: ['tvoje', 'tvoju', 'tvog', 'tvojim'],
        correct: 0,
        explanation: 'Selo is neuter: tvoje selo.',
      },
    ],
    vocab: [
      ['prijatelj', 'friend', 'Upoznala sam novog prijatelja.'],
      ['susjed', 'neighbour', 'Pozdravljam našeg susjeda.'],
      ['čovjek', 'man, person', 'Poznaješ li tog čovjeka?'],
      ['haljina', 'dress', 'Kupujem novu haljinu.'],
      ['stol', 'table', 'Trebamo novi stol.'],
      ['pas', 'dog', 'Imamo malog psa.'],
      ['gost', 'guest', 'Čekamo drage goste.'],
      ['upoznati', 'to meet for the first time', 'Želim upoznati tvoju sestru.'],
      ['kaput', 'coat', 'Trebam topli kaput.'],
    ],
  },

  'clitic-order': {
    worked: [
      {
        title: 'To Whom Before What',
        problem: 'Prevedi: "I gave it (the key) to her." (a man speaking)',
        en: 'I gave it (the key) to her.',
        steps: [
          { label: 'The verb', text: 'Past: dao sam — sam takes the second place.' },
          { label: 'To whom', text: 'her, in the dative: joj.' },
          { label: 'What', text: 'the key, masculine: ga.' },
          { label: 'Order', text: 'sam, then joj, then ga.' },
        ],
        answer: 'Dao sam joj ga.',
      },
      {
        title: 'Je Goes Last',
        problem: 'Prevedi: "Ivan gave it (the key) to me."',
        en: 'Ivan gave it (the key) to me.',
        steps: [
          {
            label: 'Second place',
            text: 'Ivan is the first word, so the small words come straight after it.',
          },
          { label: 'Dative, accusative', text: 'mi (to me), then ga (it).' },
          { label: 'Je last', text: 'The auxiliary je always closes the group.' },
        ],
        answer: 'Ivan mi ga je dao.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kupio sam ___. (it — the bread — for her)',
          options: ['ga joj', 'joj ga', 'je ga', 'ju joj'],
          correct: 1,
          hint: 'To whom comes before what.',
          explanation: 'Kupio sam joj ga.',
        },
        {
          q: 'Rekla ___ istinu. (she told us)',
          options: ['nam je', 'je nam', 'nas je', 'je nas'],
          correct: 0,
          hint: 'The auxiliary je goes last.',
          explanation: 'Rekla nam je istinu.',
        },
        {
          q: 'Sviđa ___ ova pjesma? (do you like — ti)',
          options: ['ti li se', 'li se ti', 'li ti se', 'se li ti'],
          correct: 2,
          hint: 'Li opens the group, se comes after the pronoun.',
          explanation: 'Sviđa li ti se ova pjesma?',
        },
        {
          q: 'Vidjela ___ u kinu. (she saw him)',
          options: ['je ga', 'ga je', 'ju je', 'mu je'],
          correct: 1,
          hint: 'The accusative comes before je.',
          explanation: 'Vidjela ga je u kinu.',
        },
        {
          q: 'Poslat ću ___ sutra. (it — the parcel — to you, Vi)',
          options: ['ga Vam', 'Vam ga', 'Vas ga', 'ga Vas'],
          correct: 1,
          hint: 'The dative before the accusative.',
          explanation: 'Poslat ću Vam ga sutra.',
        },
        {
          q: 'Upoznao ___ na moru. (he met her)',
          options: ['je je', 'ju je', 'je ju', 'joj je'],
          correct: 1,
          hint: 'Two je side by side are not allowed.',
          explanation: 'Upoznao ju je na moru.',
        },
        {
          q: 'Jesi ___ vidio? (them — question)',
          options: ['ih li', 'li ih', 'li ga', 'ih'],
          correct: 1,
          hint: 'In a question, li comes first.',
          explanation: 'Jesi li ih vidio?',
        },
        {
          q: 'Brat ___ dao. (gave it — the key — to me)',
          options: ['mi je ga', 'je mi ga', 'mi ga je', 'ga mi je'],
          correct: 2,
          hint: 'Dative, accusative, and the auxiliary last.',
          explanation: 'Brat mi ga je dao.',
        },
        {
          type: 'type',
          q: 'Dao sam ____. (it — the key — to her)',
          answer: 'joj ga',
          hint: 'To whom first, then what.',
          explanation: 'Dao sam joj ga.',
        },
        {
          type: 'type',
          q: 'Ivan mi ____ poslao. (it — the letter — and "has")',
          answer: 'ga je',
          hint: 'The object word, then the auxiliary at the end.',
          explanation: 'Ivan mi ga je poslao.',
        },
        {
          type: 'type',
          q: 'Sviđa ____ se? (question — to you, ti)',
          answer: 'li ti',
          hint: 'The question word first, then the dative.',
          explanation: 'Sviđa li ti se?',
        },
        {
          type: 'type',
          q: 'Vidio ____ je. (her)',
          answer: 'ju',
          hint: 'Next to je, the short "her" changes.',
          explanation: 'Vidio ju je.',
        },
        {
          type: 'type',
          q: 'Sutra ću ____ ih pokazati. (to you — ti)',
          answer: 'ti',
          hint: 'The dative pronoun for ti.',
          explanation: 'Sutra ću ti ih pokazati.',
        },
      ],
    },
    checkB: [
      {
        q: 'Which order is correct for "I showed them to you"? (Vi, a man speaking)',
        options: [
          'Pokazao sam ih vam.',
          'Pokazao vam sam ih.',
          'Pokazao sam vam ih.',
          'Vam sam ih pokazao.',
        ],
        correct: 2,
        explanation: 'Sam, then the dative vam, then the accusative ih.',
      },
      {
        q: 'Which is correct for "He sent it to her"?',
        options: [
          'Poslao joj ga je.',
          'Poslao je joj ga.',
          'Poslao joj je ga.',
          'Je joj ga poslao.',
        ],
        correct: 0,
        explanation: 'Joj, ga — and je closes the group.',
      },
      {
        q: 'Which question is correct for "Did you tell him?"',
        options: ['Jesi mu li rekao?', 'Li si mu rekao?', 'Jesi li mu rekao?', 'Jesi mu rekao li?'],
        correct: 2,
        explanation: 'Jesi, then li, then mu.',
      },
      {
        q: 'Complete: "Upoznao ___ je prošle godine." (her)',
        options: ['je', 'joj', 'njoj', 'ju'],
        correct: 3,
        explanation: 'Before the auxiliary je, the accusative "her" is ju.',
      },
      {
        q: 'Which is correct for "I will give it to him"?',
        options: ['Dat ću ga mu.', 'Dat ću mu ga.', 'Dat mu ću ga.', 'Mu ću ga dati.'],
        correct: 1,
        explanation: 'Ću, then mu, then ga.',
      },
      {
        q: 'Which is correct for "Do you like the film?" (ti)',
        options: [
          'Sviđa li ti se film?',
          'Sviđa li se ti film?',
          'Sviđa ti li se film?',
          'Li ti se sviđa film?',
        ],
        correct: 0,
        explanation: 'Li, then ti, then se.',
      },
    ],
    vocab: [
      ['dati', 'to give', 'Dao sam joj ga.'],
      ['reći', 'to tell, to say', 'Jesi li mu rekao?'],
      ['poslati', 'to send', 'Poslat ću ti ga sutra.'],
      ['pokazati', 'to show', 'Pokazat ću vam ih.'],
      ['donijeti', 'to bring', 'Sutra ću ti ga donijeti.'],
      ['pokloniti', 'to give as a present', 'Ivan mi ga je poklonio.'],
      ['sviđati se', 'to be liked by', 'Sviđa li ti se Zagreb?'],
      ['istina', 'truth', 'Rekla nam je istinu.'],
      ['poruka', 'message', 'Poslao mi je poruku.'],
    ],
  },
};
