// functions/api/content/_data/b1new/batch04.js
//
// New B1 lessons, batch 04 (Croaticum restructure, stage 4, 2026-11-12). See b1new/index.js.
//
// Razgovarajte s nama! A2-B1, lessons 9 and 10:
//   names-and-meanings      (33) — Croatian names, what they mean, name days, eponyms, names in the cases
//   love-and-marriage       (34) — relationships and marriage; oženiti se (he) / udati se (she)
//   foreign-nouns-declension (39) — Tony → Tonyja, taksi → taksija, Hugo → Huga, radio → radija, dio → dijela
//   verbs-vati-jem          (40) — davati → dajem, ustajati → ustajem; stati → stanem, ostati → ostanem
//   croats-abroad           (41) — iseljenici and the diaspora, famous Croats, life abroad: pros and cons
//
// Facts about people and words are limited to what is well established; nothing is
// stated about a person or an etymology that could not be checked.

// ─────────────────────────────────────────────────────────────────────────────
// 33 · Names and What They Mean
// ─────────────────────────────────────────────────────────────────────────────
const NAMES = {
  id: 'names-and-meanings',
  title: 'Names and What They Mean',
  subtitle: 'Croatian first names, name days, things named after people, names in the cases',
  icon: '🏷️',
  level: 'B1',
  duration: '~6 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Ime je znak — A Name Is a Sign',
      body: 'Many Croatian first names are ordinary words you already half know: Zora is the word for dawn, Mirna is the adjective for calm, Zlatko comes from zlato (gold). This lesson reads names as words, follows the name-day calendar, meets a few things named after people — and, most usefully, shows how names change in the cases, because a name you cannot decline is a name you cannot use in a sentence.',
      icon: '🏷️',
    },
    {
      type: 'table',
      title: 'Names That Are Words',
      headers: ['Name', 'Comes from', 'Meaning of the word'],
      rows: [
        ['Zora', 'zora', 'dawn'],
        ['Mirna', 'miran, mirna', 'calm, peaceful'],
        ['Jasna', 'jasan, jasna', 'clear'],
        ['Vedran', 'vedar', 'clear (of the sky), cheerful'],
        ['Ljubica', 'ljubica', 'violet (the flower)'],
        ['Ruža', 'ruža', 'rose'],
        ['Zlatko', 'zlato', 'gold'],
        ['Biserka', 'biser', 'pearl'],
        ['Snježana', 'snijeg', 'snow'],
      ],
    },
    {
      type: 'rule',
      title: 'Names Built From Two Words',
      body: 'An old Slavic pattern joins two words into one name, and the second is often -mir (mir: peace) or -slav (slava: glory). Tihomir is tih (quiet) + mir. Branimir is braniti (to defend) + mir. Several medieval Croatian rulers carried names of this kind — Tomislav, Branimir, Zvonimir, Krešimir — which is why they are still common today and why you will find them on streets and squares all over the country.',
      highlight: 'Tihomir = tih + mir',
    },
    {
      type: 'rule',
      title: 'Imendan — the Name Day',
      body: 'Many Croats celebrate two days: the birthday (rođendan) and the name day (imendan), the feast of the saint whose name they carry. You say "Sretan imendan!" exactly as you say "Sretan rođendan!". Asking about a name uses three phrases: Što znači tvoje ime? (What does your name mean?), Dobio je ime po djedu (He was named after his grandfather — po + the locative), Nazvali su je po baki (They named her after her grandmother).',
      highlight: 'Dobio je ime po djedu.',
    },
    {
      type: 'table',
      title: 'Some Name Days',
      headers: ['Name', 'Name day', 'The feast'],
      rows: [
        ['Josip', '19. ožujka', 'sveti Josip'],
        ['Ivan', '24. lipnja', 'Ivanje — sveti Ivan Krstitelj'],
        ['Petar, Pavao', '29. lipnja', 'Petrovo — sveti Petar i Pavao'],
        ['Marija', '15. kolovoza', 'Velika Gospa'],
        ['Martin', '11. studenoga', 'Martinje'],
        ['Nikola', '6. prosinca', 'sveti Nikola'],
        ['Stjepan', '26. prosinca', 'Stjepanje'],
      ],
    },
    {
      type: 'rule',
      title: 'Names Change in the Cases',
      body: 'A name declines like any noun of its shape. Marko drops the -o: Marka, Marku, Markom. Ivan is an animate masculine, so the accusative looks like the genitive: Vidim Ivana. That is a trap, because Ivana is also a woman’s name — and the woman Ivana becomes Ivanu: Vidim Ivanu. A masculine name in -a, like Luka or Nikola, takes the endings of žena (Luke, Luki, Luku, Lukom) but keeps masculine adjectives: s mojim Lukom.',
      highlight: 'Vidim Ivana. / Vidim Ivanu.',
    },
    {
      type: 'table',
      title: 'Named After People',
      headers: ['Word', 'English', 'Named after'],
      rows: [
        ['kravata', 'necktie', 'the Croats — French cravate, from Croate'],
        ['penkala', 'pen, pencil (everyday word)', 'Slavoljub Penkala, inventor in Zagreb'],
        ['tesla', 'the unit of magnetic flux density', 'Nikola Tesla'],
        ['volt', 'the unit of voltage', 'Alessandro Volta'],
        ['sendvič', 'sandwich', 'the Earl of Sandwich'],
        ['daltonizam', 'colour blindness', 'John Dalton'],
      ],
    },
    {
      type: 'rule',
      title: 'Surnames: -ić, and Women’s Surnames',
      body: 'The ending -ić was a diminutive meaning "little" or "son of", so Petrović was once "Petar’s son" and Marković "Marko’s son". The most common surname in Croatia is Horvat, an old northern form of the word Hrvat. A man’s surname declines: s gospodinom Horvatom. A woman’s surname that ends in a consonant does NOT change: s gospođom Horvat, kod gospođe Babić.',
      highlight: 's gospođom Horvat',
    },
    {
      type: 'example',
      title: 'Talking About Names',
      items: [
        {
          hr: 'Ime Zora znači isto što i riječ zora.',
          en: 'The name Zora means the same as the word for dawn.',
          note: 'znači — means',
        },
        {
          hr: 'Moja sestra zove se Mirna, a stvarno je mirna.',
          en: 'My sister is called Mirna, and she really is calm.',
          note: 'mirna — the adjective the name comes from',
        },
        {
          hr: 'Sin je dobio ime po djedu Josipu.',
          en: 'The son was named after his grandfather Josip.',
          note: 'po + the locative: djedu Josipu',
        },
        {
          hr: 'Nazvali su kćer po baki Ljubici.',
          en: 'They named their daughter after grandmother Ljubica.',
          note: 'po + the locative: baki Ljubici',
        },
        {
          hr: 'Sutra slavim imendan, a rođendan mi je u ožujku.',
          en: 'Tomorrow I celebrate my name day, and my birthday is in March.',
          note: 'imendan and rođendan — two different days',
        },
        {
          hr: 'Sretan imendan, Ivane!',
          en: 'Happy name day, Ivan!',
          note: 'Ivane — the vocative of Ivan',
        },
        {
          hr: 'Kravata je dobila ime po Hrvatima.',
          en: 'The necktie got its name from the Croats.',
          note: 'po + the locative plural: Hrvatima',
        },
      ],
    },
    {
      type: 'example',
      title: 'Names in the Cases',
      items: [
        {
          hr: 'Jučer sam u gradu vidio Ivana i Ivanu.',
          en: 'Yesterday in town I saw Ivan and Ivana.',
          note: 'Ivana is the accusative of Ivan; Ivanu is the accusative of Ivana',
        },
        {
          hr: 'Idem u kino s Lukom i Markom.',
          en: 'I am going to the cinema with Luka and Marko.',
          note: 'the instrumental: Luka becomes Lukom, Marko becomes Markom',
        },
        {
          hr: 'Ovo je poklon za Nikolu.',
          en: 'This is a present for Nikola.',
          note: 'za + the accusative: Nikola becomes Nikolu, like žena → ženu',
        },
        {
          hr: 'Razgovarao sam s gospodinom Horvatom.',
          en: 'I talked with Mr Horvat.',
          note: 'a man’s surname declines: Horvatom',
        },
        {
          hr: 'Razgovarao sam i s gospođom Horvat.',
          en: 'I also talked with Mrs Horvat.',
          note: 'a woman’s surname in a consonant stays Horvat',
        },
        {
          hr: 'Penkala je dobila ime po Slavoljubu Penkali.',
          en: 'The penkala got its name from Slavoljub Penkala.',
          note: 'the man Penkala declines like žena: Penkali',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is an "imendan"?',
      options: [
        'a birthday',
        'the feast day of the saint whose name you carry',
        'the day a child is given a name at the registry office',
        'a wedding anniversary',
      ],
      correct: 1,
      explanation:
        'The imendan is the name day: the feast of your name’s saint. Ivan celebrates on 24 June, Nikola on 6 December. The birthday is rođendan.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'The name Vedran comes from which adjective?',
      options: [
        'vedar (clear, cheerful)',
        'velik (big)',
        'veseo (merry)',
        'vrijedan (hard-working)',
      ],
      correct: 0,
      explanation:
        'Vedran comes from vedar: a clear sky, and by extension a cheerful person. Vedro nebo is a cloudless sky.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Mixing the man and the woman: Vidim Ivanu means you see the woman Ivana; for the man Ivan it is Vidim Ivana. (2) Declining a woman’s surname that ends in a consonant: "kod gospođe Horvata" is wrong — it stays kod gospođe Horvat. (3) Giving Luka feminine adjectives because his endings look feminine: "s mojom Lukom" is wrong — Luka is a man, so it is s mojim Lukom. (4) Naming after someone with the wrong case: "dobio je ime po djed" — po takes the locative, po djedu.',
      highlight: 'kod gospođe Horvat',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Dobio je ime po ___." (his grandfather — djed)',
          options: ['djed', 'djeda', 'djedu', 'djedom'],
          correct: 2,
          explanation:
            'po in the sense "named after" takes the locative, and djed in the locative is djedu: dobio je ime po djedu.',
        },
        {
          q: 'You want to say "I saw Ivan" (the man). Which sentence is right?',
          options: ['Vidio sam Ivan.', 'Vidio sam Ivanu.', 'Vidio sam Ivanom.', 'Vidio sam Ivana.'],
          correct: 3,
          explanation:
            'Ivan is animate, so the accusative looks like the genitive: Ivana. Ivanu is the accusative of the woman’s name Ivana.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Razgovarala sam s gospođom Babićem.',
            'Razgovarala sam s gospođom Babić.',
            'Razgovarala sam s gospođu Babić.',
            'Razgovarala sam s gospođom Babića.',
          ],
          correct: 1,
          explanation:
            'gospođa goes into the instrumental (gospođom), but a woman’s surname ending in a consonant does not change: Babić.',
        },
        {
          q: 'When does everyone called Nikola celebrate their name day?',
          options: ['6 December', '24 June', '19 March', '11 November'],
          correct: 0,
          explanation:
            'Sveti Nikola is on 6 December. 24 June is Ivan, 19 March is Josip and 11 November is Martin.',
        },
        {
          q: 'Which word comes from the name of the Croats?',
          options: ['sendvič', 'kravata', 'penkala', 'tesla'],
          correct: 1,
          explanation:
            'The necktie: French cravate comes from Croate. Penkala and tesla come from people’s names, sendvič from an English earl.',
        },
        {
          q: 'Complete: "Idem na kavu s ___." (Luka)',
          options: ['Lukem', 'Lukim', 'Luki', 'Lukom'],
          correct: 3,
          explanation:
            's + the instrumental. Luka takes the endings of žena, and žena becomes ženom, so Luka becomes Lukom.',
        },
        {
          q: 'What did the surname ending -ić originally mean?',
          options: ['from the town of', 'little, son of', 'servant of', 'brother of'],
          correct: 1,
          explanation: '-ić was a diminutive: Petrović was once "Petar’s son", "little Petar".',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Names — Key Takeaways',
      points: [
        'Many names are words: Zora, Mirna, Jasna, Vedran, Ljubica, Zlatko',
        'Two-part names: Tihomir (tih + mir), Branimir (braniti + mir), Tomislav',
        'Imendan is the name day; Sretan imendan!',
        'Named after: dobiti ime po + locative, nazvati po + locative',
        'Vidim Ivana (the man) / Vidim Ivanu (the woman); s mojim Lukom',
        'A woman’s surname in a consonant does not change: s gospođom Horvat',
      ],
    },
  ],
};

const NAMES_P = {
  worked: [
    {
      title: 'Named After Grandfather',
      problem: 'Dopuni: Sin je dobio ime ___ djedu Josipu.',
      en: 'Fill in: The son was named after his grandfather Josip.',
      steps: [
        {
          label: 'The preposition',
          text: '"Named after" someone is dobiti ime po nekome — the preposition is po.',
        },
        {
          label: 'The case',
          text: 'po in this meaning takes the locative, which looks like the dative.',
        },
        {
          label: 'The forms',
          text: 'djed becomes djedu and Josip becomes Josipu; both words agree.',
        },
      ],
      answer: 'Sin je dobio ime po djedu Josipu.',
    },
    {
      title: 'Mr and Mrs Babić',
      problem: 'Reci: I had lunch with Mr Babić and Mrs Babić.',
      en: 'I had lunch with Mr Babić and Mrs Babić.',
      steps: [
        {
          label: 'With',
          text: 's + the instrumental: gospodin becomes gospodinom, gospođa becomes gospođom.',
        },
        {
          label: 'His surname',
          text: 'A man’s surname declines like a noun: Babić becomes Babićem.',
        },
        {
          label: 'Her surname',
          text: 'A woman’s surname ending in a consonant never changes: it stays Babić.',
        },
      ],
      answer: 'Ručao sam s gospodinom Babićem i gospođom Babić.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Nazvali su sina po ___. (his uncle — stric)',
        options: ['stric', 'stricu', 'strica', 'stricem'],
        correct: 1,
        hint: 'po in the sense "named after" takes the locative.',
        explanation: 'po stricu — the locative of stric.',
      },
      {
        q: 'Sretan imendan, ___! (Ivan)',
        options: ['Ivan', 'Ivane', 'Ivana', 'Ivanu'],
        correct: 1,
        hint: 'You are calling to him: the vocative.',
        explanation: 'Ivane — the vocative of Ivan.',
      },
      {
        q: 'The name Zlatko comes from which noun?',
        options: ['zora', 'zlato', 'zvono', 'zemlja'],
        correct: 1,
        hint: 'The yellow metal.',
        explanation: 'Zlatko comes from zlato, gold.',
      },
      {
        q: 'Bili smo kod gospodina Kovača i gospođe ___.',
        options: ['Kovača', 'Kovaču', 'Kovač', 'Kovačem'],
        correct: 2,
        hint: 'A woman’s surname ending in a consonant does not decline.',
        explanation: 'kod gospođe Kovač — her surname stays in its basic form.',
      },
      {
        q: 'Josip slavi imendan ___.',
        options: ['19. ožujka', '29. lipnja', '6. prosinca', '15. kolovoza'],
        correct: 0,
        hint: 'The feast of Saint Joseph falls in spring.',
        explanation: 'Josip — 19. ožujka, the feast of sveti Josip.',
      },
      {
        q: 'Which is the most common surname in Croatia?',
        options: ['Penkala', 'Tesla', 'Modrić', 'Horvat'],
        correct: 3,
        hint: 'It is an old northern form of the word for a Croat.',
        explanation: 'Horvat — the most common Croatian surname.',
      },
      {
        q: 'Which name is built from tih (quiet) and mir (peace)?',
        options: ['Tomislav', 'Tihomir', 'Branimir', 'Vedran'],
        correct: 1,
        hint: 'Put the two words together.',
        explanation: 'Tihomir = tih + mir.',
      },
      {
        q: 'Ime Branimir dolazi od glagola ___ i riječi mir.',
        options: ['braniti', 'brati', 'brojiti', 'bacati'],
        correct: 0,
        hint: 'The verb means "to defend".',
        explanation: 'braniti (to defend) + mir (peace).',
      },
      {
        type: 'type',
        q: 'Dobila je ime po ____. (her grandmother — baka)',
        answer: 'baki',
        hint: 'po + the locative; baka declines like žena.',
        explanation: 'po baki — the locative of baka.',
      },
      {
        type: 'type',
        q: 'Sutra slavim ____, a rođendan mi je u svibnju. (my name day)',
        answer: 'imendan',
        hint: 'The day of the saint whose name you carry.',
        explanation: 'slavim imendan — I celebrate my name day.',
      },
      {
        type: 'type',
        q: 'Jučer sam u gradu vidio ____. (Luka)',
        answer: 'Luku',
        hint: 'Luka is a man, but his accusative ending is the one žena takes.',
        explanation: 'vidio sam Luku — like ženu.',
      },
      {
        type: 'type',
        q: 'Razgovarao sam s gospodinom ____. (Mr Horvat)',
        answer: 'Horvatom',
        hint: 'A man’s surname declines: s + the instrumental.',
        explanation: 's gospodinom Horvatom.',
      },
      {
        type: 'type',
        q: 'Kravata je dobila ime po ____. (the Croats — Hrvati)',
        answer: 'Hrvatima',
        hint: 'po + the locative plural.',
        explanation: 'po Hrvatima — the locative plural of Hrvati.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Nazvali su ga po ___." (his father — otac)',
      options: ['ocu', 'otac', 'oca', 'ocem'],
      correct: 0,
      explanation: 'po + the locative: otac becomes ocu.',
    },
    {
      q: 'Which sentence means "I saw Ivana" (the woman)?',
      options: ['Vidio sam Ivana.', 'Vidio sam Ivanu.', 'Vidio sam Ivanom.', 'Vidio sam Ivane.'],
      correct: 1,
      explanation: 'The woman Ivana declines like žena: Ivanu. Ivana would be the man Ivan.',
    },
    {
      q: 'Petar and Pavao celebrate their name day on…',
      options: ['26 December', '6 December', '29 June', '19 March'],
      correct: 2,
      explanation: '29 June, Petrovo — the feast of sveti Petar i Pavao.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Pismo je za gospođu Marić.',
        'Pismo je za gospođu Marića.',
        'Pismo je za gospođom Marić.',
        'Pismo je za gospođi Marić.',
      ],
      correct: 0,
      explanation:
        'za + the accusative: gospođu. Her surname ends in a consonant and does not change.',
    },
    {
      q: 'Which inventor gave his name to an everyday word for a pen?',
      options: ['Nikola Tesla', 'Slavoljub Penkala', 'Faust Vrančić', 'Ivan Vučetić'],
      correct: 1,
      explanation:
        'Slavoljub Penkala, who worked in Zagreb — penkala is still a common word for a pen.',
    },
    {
      q: 'Complete: "Večeras idem u kino s ___." (Nikola)',
      options: ['Nikolu', 'Nikolem', 'Nikoli', 'Nikolom'],
      correct: 3,
      explanation: 's + the instrumental: Nikola declines like žena, so Nikolom.',
    },
  ],
  vocab: [
    ['ime', 'first name', 'Kako ti je ime?'],
    ['prezime', 'surname', 'Prezime mi je Horvat.'],
    ['imendan', 'name day', 'Sretan imendan!'],
    ['rođendan', 'birthday', 'Rođendan mi je u ožujku.'],
    ['nadimak', 'nickname', 'Svi ga zovu po nadimku.'],
    ['značiti', 'to mean', 'Što znači tvoje ime?'],
    ['nazvati po', 'to name after', 'Nazvali su je po baki.'],
    ['dobiti ime po', 'to be named after', 'Dobio je ime po djedu.'],
    ['kravata', 'necktie', 'Kravata je dobila ime po Hrvatima.'],
    ['izumitelj', 'inventor', 'Penkala je bio izumitelj.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 34 · Love and Marriage
// ─────────────────────────────────────────────────────────────────────────────
const LOVE = {
  id: 'love-and-marriage',
  title: 'Love and Marriage',
  subtitle: 'From the first coffee to the wedding — and who marries whom in Croatian',
  icon: '💍',
  level: 'B1',
  duration: '~6 min',
  color: '#be185d',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'From the First Coffee to the Wedding',
      body: 'Relationships are where Croatian grammar becomes personal. Falling in love goes INTO someone (u + accusative), going out is WITH someone (s + instrumental), and getting married is two different verbs depending on whether a man or a woman is marrying. Get those three right and you can tell any love story — your own, your parents’, or the one the whole family talks about.',
      icon: '💍',
    },
    {
      type: 'table',
      title: 'The Stages of a Relationship',
      headers: ['Croatian', 'English'],
      rows: [
        ['upoznati se', 'to meet, to get to know each other'],
        ['svidjeti se (komu)', 'to be liked by, to appeal to'],
        ['hodati s (kim)', 'to go out with, to date'],
        ['zaljubiti se u (koga)', 'to fall in love with'],
        ['zaručiti se / vjeriti se', 'to get engaged'],
        ['vjenčati se', 'to get married (a couple, or one partner with s + instrumental)'],
        ['prekinuti s (kim)', 'to break up with'],
        ['razvesti se', 'to get divorced'],
      ],
    },
    {
      type: 'rule',
      title: 'He Marries, She Marries — Two Different Verbs',
      body: 'Croatian marks who is marrying. A MAN uses oženiti se, and the woman he marries is in the instrumental, with no preposition: Marko se oženio Anom. A WOMAN uses udati se, with za + the accusative: Ana se udala za Marka. For the couple together, or to stay neutral, use vjenčati se: Marko i Ana vjenčali su se u lipnju. The same split runs through the adjectives: he is oženjen, she is udana — and both of them are u braku (married).',
      highlight: 'Ana se udala za Marka.',
    },
    {
      type: 'table',
      title: 'Married or Not',
      headers: ['He is…', 'She is…', 'English'],
      rows: [
        ['oženjen', 'udana', 'married'],
        ['neoženjen', 'neudana', 'unmarried, single'],
        ['zaručen', 'zaručena', 'engaged'],
        ['razveden', 'razvedena', 'divorced'],
        ['udovac', 'udovica', 'widower / widow'],
      ],
    },
    {
      type: 'rule',
      title: 'Falling In Love Goes INTO Someone',
      body: 'zaljubiti se takes u + the accusative — you fall into love with someone, so it is movement: Zaljubio se u Anu. The state keeps the same case: Zaljubljen je u Anu. svidjeti se turns the English round: the person who is liked is the SUBJECT and the one who likes is in the dative — Ana se svidjela Marku (Marko liked Ana), or with a clitic: Svidjela mu se. And hodati s takes the instrumental: Hoda s Markom već godinu dana.',
      highlight: 'Zaljubio se u Anu.',
    },
    {
      type: 'table',
      title: 'At the Wedding',
      headers: ['Croatian', 'English'],
      rows: [
        ['vjenčanje', 'the wedding ceremony'],
        ['svadba', 'the wedding celebration, the party'],
        ['mladoženja', 'the groom'],
        ['mladenka', 'the bride'],
        ['mladenci', 'the newlyweds'],
        ['kum / kuma', 'the wedding witness, best man / maid of honour'],
        ['prsten', 'ring'],
        ['svekrva', 'the husband’s mother (to the wife)'],
        ['punica', 'the wife’s mother (to the husband)'],
      ],
    },
    {
      type: 'rule',
      title: 'Idioms of Love and Marriage',
      body: 'uploviti u bračnu luku — literally "to sail into the harbour of marriage": to finally get married, often said of someone who took their time. ljubav na prvi pogled — love at first sight. zaljubljen do ušiju — in love up to the ears, head over heels. slomiti nekome srce — to break someone’s heart. pasti nekome u oko — to catch someone’s eye. imati leptiriće u trbuhu — to have butterflies in your stomach.',
      highlight: 'uploviti u bračnu luku',
    },
    {
      type: 'example',
      title: 'A Love Story',
      items: [
        {
          hr: 'Upoznali su se na fakultetu, a hodaju već tri godine.',
          en: 'They met at university, and they have been going out for three years.',
          note: 'upoznati se — to meet; hodati — to date',
        },
        {
          hr: 'Svidio joj se čim ga je vidjela.',
          en: 'She liked him as soon as she saw him.',
          note: 'svidjeti se: he is the subject, she is in the dative (joj)',
        },
        {
          hr: 'Zaljubio se u nju na prvi pogled.',
          en: 'He fell in love with her at first sight.',
          note: 'zaljubiti se u + the accusative: nju',
        },
        {
          hr: 'Marko se prošlog ljeta oženio Anom.',
          en: 'Marko married Ana last summer.',
          note: 'oženiti se + the instrumental, no preposition: Anom',
        },
        {
          hr: 'Ana se udala za Marka u Splitu.',
          en: 'Ana married Marko in Split.',
          note: 'udati se za + the accusative: Marka',
        },
        {
          hr: 'Vjenčali su se u crkvi, a svadba je bila na otoku.',
          en: 'They got married in a church, and the reception was on an island.',
          note: 'vjenčanje in church, svadba afterwards',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Kum mu je bio najbolji prijatelj iz djetinjstva.',
          en: 'His best man was his best friend from childhood.',
          note: 'kum — the witness at the wedding',
        },
        {
          hr: 'Moj stric je u pedesetoj godini konačno uplovio u bračnu luku.',
          en: 'At fifty my uncle finally got married.',
          note: 'uploviti u bračnu luku — the idiom',
        },
        {
          hr: 'Prekinula je s dečkom jer joj je slomio srce.',
          en: 'She broke up with her boyfriend because he broke her heart.',
          note: 'prekinuti s + the instrumental: dečkom',
        },
        {
          hr: 'Zaljubljen je do ušiju i stalno priča o njoj.',
          en: 'He is head over heels in love and talks about her all the time.',
          note: 'zaljubljen do ušiju — the idiom',
        },
        {
          hr: 'Jesi li oženjen? — Nisam, ali sam zaručen.',
          en: 'Are you married? — No, but I am engaged.',
          note: 'oženjen — said of a man',
        },
        {
          hr: 'Moja sestra je udana, a brat je još neoženjen.',
          en: 'My sister is married, and my brother is still single.',
          note: 'udana for her, neoženjen for him',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'A WOMAN is getting married. Which verb does she use?',
      options: ['oženiti se', 'udati se', 'zaljubiti se', 'svidjeti se'],
      correct: 1,
      explanation:
        'A woman udaje se za nekoga: Ana se udala za Marka. oženiti se is what a man does.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the difference between "vjenčanje" and "svadba"?',
      options: [
        'They mean exactly the same',
        'vjenčanje is the ceremony, svadba is the celebration',
        'vjenčanje is the engagement, svadba is the wedding',
        'svadba is only used for divorces',
      ],
      correct: 1,
      explanation:
        'The vjenčanje is the ceremony itself (in church or at the registry office); the svadba is the party that follows.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Using the man’s verb for a woman: "Ana se oženila" is wrong — a woman marries with udati se: Ana se udala za Marka. (2) The wrong preposition with udati se: "udala se s Markom" is wrong; it is za + the accusative. (3) Loving AT someone instead of INTO them: "zaljubio se u Ani" is wrong — it is movement, so u + the accusative: zaljubio se u Anu. (4) The English order with svidjeti se: "Marko se svidio Anu" — the one who likes goes in the dative: Ana se svidjela Marku.',
      highlight: 'Ana se udala za Marka',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Ana se prošle godine ___ za Ivana."',
          options: ['oženila', 'udala', 'vjenčala', 'zaručila'],
          correct: 1,
          explanation:
            'A woman udaje se za + the accusative. oženiti se is for a man, and vjenčati se and zaručiti se go with s + the instrumental, not za.',
        },
        {
          q: 'Complete: "Ivan se oženio ___." (Ana)',
          options: ['za Anu', 'Ani', 'Anom', 's Anu'],
          correct: 2,
          explanation:
            'oženiti se takes the instrumental with no preposition: Ivan se oženio Anom.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Zaljubio se u Ani.',
            'Zaljubio se u Anu.',
            'Zaljubio se s Anom.',
            'Zaljubio se Anom.',
          ],
          correct: 1,
          explanation:
            'zaljubiti se is movement into: u + the accusative, Anu. u Ani would be location.',
        },
        {
          q: 'What does "uploviti u bračnu luku" mean?',
          options: [
            'to go on a honeymoon cruise',
            'to fall in love',
            'to get divorced',
            'to get married',
          ],
          correct: 3,
          explanation:
            'Literally "to sail into the harbour of marriage" — to (finally) get married.',
        },
        {
          q: 'A woman tells you she is married. Which word does she use?',
          options: ['oženjena', 'oženjen', 'udana', 'neudana'],
          correct: 2,
          explanation:
            'udana — married, of a woman. oženjen is said of a man, and neudana means single.',
        },
        {
          q: 'Complete: "Hoda s ___ već godinu dana." (Marko)',
          options: ['Marko', 'Marka', 'Markom', 'Marku'],
          correct: 2,
          explanation: 'hodati s + the instrumental: s Markom.',
        },
        {
          q: 'Who is a woman’s "svekrva"?',
          options: [
            'her mother',
            'her husband’s mother',
            'her sister-in-law',
            'her best friend at the wedding',
          ],
          correct: 1,
          explanation:
            'svekrva is the husband’s mother, from the wife’s side. The wife’s mother, to the husband, is punica.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Love and Marriage — Key Takeaways',
      points: [
        'hodati s + instrumental, zaljubiti se u + accusative',
        'svidjeti se: the liked person is the subject, the one who likes is in the dative',
        'He: oženiti se + instrumental (oženio se Anom); she: udati se za + accusative (udala se za Marka)',
        'Both: vjenčati se; oženjen (he), udana (she), u braku (both)',
        'vjenčanje is the ceremony, svadba the celebration; kum, mladenci',
        'uploviti u bračnu luku, ljubav na prvi pogled, zaljubljen do ušiju',
      ],
    },
  ],
};

const LOVE_P = {
  worked: [
    {
      title: 'She Married Him',
      problem: 'Reci: Ana married Ivan.',
      en: 'Ana married Ivan.',
      steps: [
        {
          label: 'Who is marrying?',
          text: 'Ana is a woman, so the verb is udati se, not oženiti se.',
        },
        {
          label: 'The preposition',
          text: 'udati se takes za + the accusative. Ivan is animate, so the accusative is Ivana.',
        },
        {
          label: 'The past',
          text: 'The feminine past participle is udala; se goes second, right after Ana.',
        },
      ],
      answer: 'Ana se udala za Ivana.',
    },
    {
      title: 'He Married Her',
      problem: 'Reci: Ivan married Ana.',
      en: 'Ivan married Ana.',
      steps: [
        {
          label: 'Who is marrying?',
          text: 'Ivan is a man, so the verb is oženiti se.',
        },
        {
          label: 'The case',
          text: 'The woman he marries is in the instrumental, with no preposition: Ana becomes Anom.',
        },
        {
          label: 'The past',
          text: 'The masculine past participle is oženio; se goes second.',
        },
      ],
      answer: 'Ivan se oženio Anom.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Marko se ___ Anom u svibnju.',
        options: ['udao', 'oženio', 'zaručio', 'svidio'],
        correct: 1,
        hint: 'Marko is a man, and the instrumental with no preposition goes with his verb.',
        explanation: 'Marko se oženio Anom.',
      },
      {
        q: 'Zaljubila se ___ kolegu s posla.',
        options: ['u', 's', 'za', 'na'],
        correct: 0,
        hint: 'Falling in love is movement into someone.',
        explanation: 'zaljubiti se u + the accusative: u kolegu.',
      },
      {
        q: 'Ana se ___ Marku na prvi pogled.',
        options: ['zaljubila', 'udala', 'svidjela', 'hodala'],
        correct: 2,
        hint: 'Marko is in the dative — the verb where the one who likes is in the dative.',
        explanation: 'Ana se svidjela Marku — Marko liked Ana.',
      },
      {
        q: 'Ona hoda s ___. (my brother)',
        options: ['mojim bratom', 'moj brat', 'mojeg brata', 'mojem bratu'],
        correct: 0,
        hint: 'hodati s + the instrumental, and the adjective agrees.',
        explanation: 'hoda s mojim bratom.',
      },
      {
        q: 'Who is the "mladoženja"?',
        options: ['the bride', 'the groom', 'the best man', 'the priest'],
        correct: 1,
        hint: 'The word is masculine, even though it ends in -a.',
        explanation: 'mladoženja — the groom; mladenka is the bride.',
      },
      {
        q: 'Slomio joj je ___.',
        options: ['srca', 'srcu', 'srce', 'srcem'],
        correct: 2,
        hint: 'The direct object of slomiti; a neuter noun.',
        explanation: 'slomio joj je srce — he broke her heart.',
      },
      {
        q: 'Which idiom means "head over heels in love"?',
        options: [
          'zaljubljen do ušiju',
          'pasti nekome u oko',
          'slomiti nekome srce',
          'uploviti u bračnu luku',
        ],
        correct: 0,
        hint: 'It names a part of the head.',
        explanation: 'zaljubljen do ušiju — in love up to the ears.',
      },
      {
        q: 'Vjenčali su se u ___, a svadba je bila u hotelu.',
        options: ['crkvu', 'crkva', 'crkvi', 'crkve'],
        correct: 2,
        hint: 'Where it happened: u + the locative.',
        explanation: 'u crkvi — the locative.',
      },
      {
        type: 'type',
        q: 'Ana se udala ____ Ivana.',
        answer: 'za',
        hint: 'udati se takes a preposition plus the accusative.',
        explanation: 'udala se za Ivana.',
      },
      {
        type: 'type',
        q: 'Ivan se oženio ____. (Petra — the woman)',
        answer: 'Petrom',
        hint: 'oženiti se + the instrumental, with no preposition.',
        explanation: 'oženio se Petrom.',
      },
      {
        type: 'type',
        q: 'Moja sestra je ____, a brat je još neoženjen. (married)',
        answer: 'udana',
        hint: 'The adjective for a woman who has married.',
        explanation: 'udana — married, of a woman.',
      },
      {
        type: 'type',
        q: 'Zaljubio se u ____ na prvi pogled. (Marija)',
        answer: 'Mariju',
        hint: 'u + the accusative; Marija declines like žena.',
        explanation: 'zaljubio se u Mariju.',
      },
      {
        type: 'type',
        q: 'Ivan i Ana ____ su se u lipnju. (got married — vjenčati se)',
        answer: 'vjenčali',
        hint: 'The plural past participle — a couple.',
        explanation: 'vjenčali su se — they got married.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Marija se ___ za Tomislava."',
      options: ['oženila', 'udala', 'zaljubila', 'svidjela'],
      correct: 1,
      explanation: 'A woman udaje se za + the accusative: udala se za Tomislava.',
    },
    {
      q: 'Complete: "Tomislav se oženio ___." (Marija)',
      options: ['za Mariju', 'Mariji', 'Marijom', 's Mariju'],
      correct: 2,
      explanation: 'oženiti se + the instrumental, no preposition: Marijom.',
    },
    {
      q: 'A man says he is not married. Which word does he use?',
      options: ['neudana', 'neoženjen', 'neoženjena', 'neudanom'],
      correct: 1,
      explanation: 'neoženjen — single, of a man. neudana is said of a woman.',
    },
    {
      q: 'Complete: "Zaljubila se ___ njega."',
      options: ['za', 's', 'na', 'u'],
      correct: 3,
      explanation: 'zaljubiti se u + the accusative: u njega.',
    },
    {
      q: 'What is a "svadba"?',
      options: [
        'the wedding celebration',
        'the engagement ring',
        'the divorce',
        'the bride’s mother',
      ],
      correct: 0,
      explanation: 'svadba — the wedding party; the ceremony itself is the vjenčanje.',
    },
    {
      q: 'Which sentence is correct?',
      options: ['Hoda s Ivan.', 'Hoda s Ivana.', 'Hoda s Ivanu.', 'Hoda s Ivanom.'],
      correct: 3,
      explanation: 'hodati s + the instrumental: s Ivanom.',
    },
  ],
  vocab: [
    ['hodati s', 'to go out with', 'Hoda s Markom već godinu dana.'],
    ['zaljubiti se', 'to fall in love', 'Zaljubio se u nju na prvi pogled.'],
    ['zaručiti se', 'to get engaged', 'Zaručili su se na Božić.'],
    ['vjenčati se', 'to get married', 'Vjenčali su se u lipnju.'],
    ['oženiti se', 'to marry (of a man)', 'Marko se oženio Anom.'],
    ['udati se', 'to marry (of a woman)', 'Ana se udala za Marka.'],
    ['svadba', 'wedding celebration', 'Svadba je trajala do jutra.'],
    ['kum', 'wedding witness, best man', 'Kum je održao govor.'],
    ['mladenci', 'newlyweds', 'Mladenci su plesali prvi ples.'],
    ['razvesti se', 'to get divorced', 'Razveli su se nakon pet godina.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 39 · Foreign Names and Words in the Cases
// ─────────────────────────────────────────────────────────────────────────────
const FOREIGN = {
  id: 'foreign-nouns-declension',
  title: 'Foreign Names and Words in the Cases',
  subtitle: 'Tony → Tonyja, taksi → taksija, Hugo → Huga, radio → radija — and dio → dijela',
  icon: '🌍',
  level: 'B1',
  duration: '~6 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'Croatian Declines the Whole World',
      body: 'English leaves foreign names alone; Croatian puts them in the cases like any other noun. You meet Tony, but you go to the cinema s Tonyjem and have lunch kod Tonyja. A taxi is taksi, but you arrive taksijem. The spelling of the foreign word is kept — Croatian simply adds its endings, with a few small adjustments that follow the SOUND of the word. Learn those adjustments and every foreign name and loanword becomes usable.',
      icon: '🌍',
    },
    {
      type: 'rule',
      title: 'Ending in an i Sound: Add j',
      body: 'When a word ends in the sound i — written -i or -y — Croatian puts a j between the word and the ending, so the two vowels do not collide. taksi → taksija, taksiju, taksijem. hobi → hobija. Tony → Tonyja, Tonyju, Tonyjem. Harry → Harryja. The original spelling stays exactly as it was, y included.',
      highlight: 'Tony → Tonyja, s Tonyjem',
    },
    {
      type: 'table',
      title: 'Tony and taksi in the Cases',
      headers: ['Case', 'Tony (a person)', 'taksi (a thing)'],
      rows: [
        ['N', 'Tony', 'taksi'],
        ['G', 'Tonyja', 'taksija'],
        ['D / L', 'Tonyju', 'taksiju'],
        ['A', 'Tonyja (animate = G)', 'taksi (inanimate = N)'],
        ['I', 'Tonyjem', 'taksijem'],
      ],
    },
    {
      type: 'rule',
      title: 'Ending in -o or -e: the Vowel Gives Way',
      body: 'A masculine name in -o drops the -o, exactly like Marko → Marka: Hugo → Huga, Hugu, Hugom; Otto → Otta, Ottu, Ottom; Bruno → Bruna. Foreign names that end in a pronounced -e keep it and add the ending: Goethe → Goethea, Goetheu, Goetheom; Dante → Dantea. A word in -u keeps it too, with no j: intervju → intervjua, u intervjuu, intervjuom.',
      highlight: 'Hugo → Huga',
    },
    {
      type: 'rule',
      title: 'Ending in -io: the o Becomes j',
      body: 'radio, studio and the name Mario change their final -o into -j- before an ending: radio → radija, na radiju, radijem; studio → studija, u studiju; Mario → Marija, Mariju, Marijem. Two traps follow. Vidio sam Marija means "I saw Mario", the man — it only LOOKS like the woman’s name Marija. And u studiju (in the studio) is not studija, which as a feminine noun means "a study".',
      highlight: 'na radiju',
    },
    {
      type: 'rule',
      title: 'Women’s Names Not Ending in -a Stay As They Are',
      body: 'A foreign feminine name ending in -a declines like žena. A feminine name ending in anything else does not change at all: Ingrid, Ruth, Carmen. Idem na kavu s Ingrid. Pismo je za Ruth. It is the same rule as a woman’s surname in a consonant: s gospođom Horvat.',
      highlight: 's Ingrid',
    },
    {
      type: 'table',
      title: 'dio — a Native Word Worth Learning Apart',
      headers: ['Case', 'Singular', 'Plural'],
      rows: [
        ['N', 'dio', 'dijelovi'],
        ['G', 'dijela', 'dijelova'],
        ['D / L', 'dijelu', 'dijelovima'],
        ['A', 'dio', 'dijelove'],
        ['I', 'dijelom', 'dijelovima'],
      ],
    },
    {
      type: 'rule',
      title: 'dio Is Not Like radio',
      body: 'dio (part) also ends in -io, but it is a native word and its stem is dijel-: the o was once an l. So dio → dijela, u prvom dijelu, a plural dijelovi. Never "dija" or "dioa". You already know the same pattern from posao → posla: the short form appears only in the nominative and accusative singular.',
      highlight: 'dio → dijela',
    },
    {
      type: 'example',
      title: 'People and Things',
      items: [
        {
          hr: 'Jučer sam vidio Tonyja u kafiću.',
          en: 'Yesterday I saw Tony in the café.',
          note: 'Tony becomes Tonyja: a j is added before the ending',
        },
        {
          hr: 'Idem na koncert s Harryjem.',
          en: 'I am going to the concert with Harry.',
          note: 's + the instrumental: Harryjem',
        },
        {
          hr: 'Na aerodrom smo išli taksijem.',
          en: 'We went to the airport by taxi.',
          note: 'the instrumental of means: taksijem',
        },
        {
          hr: 'Pričaj mi o svom novom hobiju.',
          en: 'Tell me about your new hobby.',
          note: 'o + the locative: hobi becomes hobiju',
        },
        {
          hr: 'Sutra idem kod Huga na ručak.',
          en: 'Tomorrow I am going to Hugo’s for lunch.',
          note: 'kod + the genitive: Hugo becomes Huga',
        },
        {
          hr: 'Na satu njemačkog čitamo Goethea.',
          en: 'In German class we read Goethe.',
          note: 'the -e stays and the ending follows: Goethea',
        },
        {
          hr: 'Idem na kavu s Ingrid.',
          en: 'I am going for coffee with Ingrid.',
          note: 'a woman’s name not ending in -a stays Ingrid',
        },
      ],
    },
    {
      type: 'example',
      title: 'Radio, Studio, dio',
      items: [
        {
          hr: 'Svako jutro slušam vijesti na radiju.',
          en: 'Every morning I listen to the news on the radio.',
          note: 'radio becomes radiju: the o turns into j',
        },
        {
          hr: 'Bend je cijeli mjesec snimao album u studiju.',
          en: 'The band spent the whole month recording the album in the studio.',
          note: 'u + the locative: studiju',
        },
        {
          hr: 'Upoznala sam Marija na tečaju.',
          en: 'I met Mario on the course.',
          note: 'Mario becomes Marija: the man, not the woman',
        },
        {
          hr: 'U intervjuu je govorio o svojoj obitelji.',
          en: 'In the interview he talked about his family.',
          note: 'intervju keeps its u: intervjuu',
        },
        {
          hr: 'U prvom dijelu filma ništa se ne događa.',
          en: 'Nothing happens in the first part of the film.',
          note: 'dio becomes dijelu',
        },
        {
          hr: 'Svi dijelovi grada povezani su tramvajem.',
          en: 'All parts of the city are connected by tram.',
          note: 'the plural of dio: dijelovi',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Why does Croatian write "Tonyja" and "taksija" with a j?',
      options: [
        'It is a spelling mistake that became standard',
        'The j separates the i sound of the word from the vowel of the ending',
        'Only names of people take a j',
        'The j marks the plural',
      ],
      correct: 1,
      explanation:
        'Two vowels would collide (taksi-a), so a j is slipped in between: taksija. It happens to things and people alike.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: '"Vidio sam Marija." Whom did the speaker see?',
      options: [
        'a woman called Marija',
        'a man called Mario',
        'several people',
        'nobody — it is wrong',
      ],
      correct: 1,
      explanation:
        'Mario becomes Marija in the genitive and the animate accusative. The woman Marija would be Mariju.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Dropping the j: "s Tonyom" and "na radiu" are wrong — it is s Tonyjem and na radiju. (2) Keeping a final -o and adding an ending to it: "Hugoa", "kod Ottoa" — the o drops, as in Marko → Marka: kod Huga, kod Otta. (3) Declining a woman’s name that does not end in -a: "s Ingridom" is wrong; it stays s Ingrid. (4) Treating dio like radio: "dija" is wrong — dio becomes dijela.',
      highlight: 's Tonyjem',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Sutra idem na kavu s ___." (Tony)',
          options: ['Tonyem', 'Tonyjem', 'Tonyom', 'Tony'],
          correct: 1,
          explanation:
            'Tony ends in an i sound, so a j comes before the instrumental ending: Tonyjem.',
        },
        {
          q: 'Complete: "Do aerodroma smo išli ___." (by taxi)',
          options: ['taksiom', 'taksiem', 'taksijem', 'taksi'],
          correct: 2,
          explanation: 'The instrumental of means, with j after the i: taksijem.',
        },
        {
          q: 'Complete: "Čuo sam to na ___."',
          options: ['radiu', 'radiju', 'radiou', 'radio'],
          correct: 1,
          explanation: 'na + the locative; the o of radio becomes j: na radiju.',
        },
        {
          q: 'What is the genitive of Hugo?',
          options: ['Hugoa', 'Hugoja', 'Huga', 'Hugu'],
          correct: 2,
          explanation: 'The -o drops, as in Marko → Marka: Huga. Hugu is the dative.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Razgovarao sam s Ingridom.',
            'Razgovarao sam s Ingrid.',
            'Razgovarao sam s Ingridu.',
            'Razgovarao sam s Ingride.',
          ],
          correct: 1,
          explanation: 'A woman’s name that does not end in -a does not change: s Ingrid.',
        },
        {
          q: 'Complete: "Najbolji ___ filma je kraj." (part)',
          options: ['dio', 'dijel', 'dijela', 'dijelo'],
          correct: 0,
          explanation: 'The nominative singular is dio; dijel- appears only before an ending.',
        },
        {
          q: 'Complete: "U drugom ___ knjige junak putuje u Ameriku."',
          options: ['diou', 'dijelom', 'dio', 'dijelu'],
          correct: 3,
          explanation: 'u + the locative: dijelu.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Foreign Words — Key Takeaways',
      points: [
        'An i sound (-i, -y) adds j: taksija, hobiju, Tonyja, s Harryjem',
        'A final -o drops: Hugo → Huga, Otto → Otta',
        'A pronounced -e or -u stays: Goethea, u intervjuu',
        '-io turns o into j: radio → na radiju, studio → u studiju, Mario → Marija',
        'A woman’s name not in -a stays: s Ingrid',
        'dio → dijela, u dijelu, dijelovi',
      ],
    },
  ],
};

const FOREIGN_P = {
  worked: [
    {
      title: 'A Concert With Tony',
      problem: 'Dopuni: Idem na koncert s ___. (Tony)',
      en: 'Fill in: I am going to the concert with Tony.',
      steps: [
        {
          label: 'The case',
          text: 's in the sense "together with" takes the instrumental.',
        },
        {
          label: 'The sound',
          text: 'Tony ends in an i sound, so a j goes between the name and the ending.',
        },
        {
          label: 'The ending',
          text: 'The masculine instrumental ending is -em after j, and the spelling Tony stays.',
        },
      ],
      answer: 'Idem na koncert s Tonyjem.',
    },
    {
      title: 'Heard on the Radio',
      problem: 'Dopuni: Čula sam to na ___. (radio)',
      en: 'Fill in: I heard it on the radio.',
      steps: [
        {
          label: 'The case',
          text: 'Where you heard something: na + the locative.',
        },
        {
          label: 'The stem',
          text: 'In radio the final o becomes j before an ending: radij-.',
        },
        {
          label: 'The ending',
          text: 'The masculine locative ending is -u.',
        },
      ],
      answer: 'Čula sam to na radiju.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Pričaj mi o svom novom ___. (hobby)',
        options: ['hobiu', 'hobiju', 'hobi', 'hobijem'],
        correct: 1,
        hint: 'o + the locative, and an i sound needs a j before the ending.',
        explanation: 'o hobiju.',
      },
      {
        q: 'Bili smo kod ___ na večeri. (Otto)',
        options: ['Ottoa', 'Otta', 'Ottu', 'Ottom'],
        correct: 1,
        hint: 'kod + the genitive, and the final -o drops as in Marko.',
        explanation: 'kod Otta.',
      },
      {
        q: '"Jesi li čuo Marija kako pjeva?" — Who is singing?',
        options: [
          'a man called Mario',
          'a woman called Marija',
          'nobody, it is a mistake',
          'several people',
        ],
        correct: 0,
        hint: 'The woman would be in the accusative with -u.',
        explanation: 'Marija here is the accusative of Mario.',
      },
      {
        q: 'Bend snima album u ___.',
        options: ['studiu', 'studijom', 'studiou', 'studiju'],
        correct: 3,
        hint: 'u + the locative; the o of studio becomes j.',
        explanation: 'u studiju.',
      },
      {
        q: 'Na satu njemačkog čitali smo ___. (Goethe)',
        options: ['Goethea', 'Goethe', 'Goetheja', 'Goethu'],
        correct: 0,
        hint: 'The pronounced -e stays and the ending is added after it.',
        explanation: 'čitali smo Goethea.',
      },
      {
        q: 'Veći ___ grada nalazi se uz more.',
        options: ['dijel', 'dio', 'dijela', 'diel'],
        correct: 1,
        hint: 'The subject — the nominative singular.',
        explanation: 'Veći dio grada.',
      },
      {
        q: 'Sve ___ stroja treba očistiti.',
        options: ['dijelovi', 'dioe', 'dijelove', 'dijele'],
        correct: 2,
        hint: 'The object, in the plural: the accusative plural.',
        explanation: 'sve dijelove — the accusative plural of dio.',
      },
      {
        q: 'U ___ je govorio o djetinjstvu.',
        options: ['intervjuju', 'intervjuu', 'intervju', 'intervjuom'],
        correct: 1,
        hint: 'A final -u does not take a j.',
        explanation: 'u intervjuu — the locative.',
      },
      {
        type: 'type',
        q: 'Idem u kino s ____. (Harry)',
        answer: 'Harryjem',
        hint: 's + the instrumental; the y is an i sound.',
        explanation: 's Harryjem.',
      },
      {
        type: 'type',
        q: 'Došla sam ____ jer je padala kiša. (by taxi)',
        answer: 'taksijem',
        hint: 'The instrumental of means.',
        explanation: 'došla sam taksijem.',
      },
      {
        type: 'type',
        q: 'Svako jutro slušam vijesti na ____.',
        answer: 'radiju',
        hint: 'na + the locative; the o turns into j.',
        explanation: 'na radiju.',
      },
      {
        type: 'type',
        q: 'U prvom ____ filma ništa se ne događa. (part)',
        answer: 'dijelu',
        hint: 'u + the locative, on the long stem.',
        explanation: 'u prvom dijelu.',
      },
      {
        type: 'type',
        q: 'Sutra idem kod ____ na ručak. (Hugo)',
        answer: 'Huga',
        hint: 'kod + the genitive; the -o drops.',
        explanation: 'kod Huga.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Upoznala sam ___ na moru." (Tony)',
      options: ['Tonya', 'Tony', 'Tonyja', 'Tonyu'],
      correct: 2,
      explanation: 'The animate accusative looks like the genitive, with j: Tonyja.',
    },
    {
      q: 'Complete: "Pričaj mi o svom ___." (hobby)',
      options: ['hobiju', 'hobiu', 'hobijem', 'hobi'],
      correct: 0,
      explanation: 'o + the locative: hobiju.',
    },
    {
      q: 'Complete: "Večeras sviramo u ___." (the studio)',
      options: ['studiu', 'studiou', 'studijem', 'studiju'],
      correct: 3,
      explanation: 'u + the locative; o becomes j: studiju.',
    },
    {
      q: 'What is the genitive of Otto?',
      options: ['Ottoa', 'Otta', 'Ottoja', 'Ottu'],
      correct: 1,
      explanation: 'The -o drops: Otta.',
    },
    {
      q: 'Complete: "Jučer sam razgovarao s ___." (Mario)',
      options: ['Mariom', 'Mariojem', 'Marijem', 'Marijom'],
      correct: 2,
      explanation: 'The instrumental of Mario is Marijem. Marijom is the woman Marija.',
    },
    {
      q: 'Which sentence is correct?',
      options: [
        'Ovo su dijelovi auta.',
        'Ovo su dioi auta.',
        'Ovo su dijeli auta.',
        'Ovo su diji auta.',
      ],
      correct: 0,
      explanation: 'The plural of dio is dijelovi.',
    },
  ],
  vocab: [
    ['taksi', 'taxi', 'Došli smo taksijem.'],
    ['hobi', 'hobby', 'Moj hobi je fotografija.'],
    ['radio', 'radio', 'Čula sam to na radiju.'],
    ['studio', 'studio', 'Snimali su album u studiju.'],
    ['intervju', 'interview', 'U intervjuu je govorio o obitelji.'],
    ['dio', 'part', 'Najbolji dio filma je kraj.'],
    ['žiri', 'jury, panel of judges', 'Odluka žirija bila je jednoglasna.'],
    ['strano ime', 'foreign name', 'Strana imena također se sklanjaju.'],
    ['sklanjati', 'to decline (a noun)', 'U hrvatskom se imena sklanjaju.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 40 · davati → dajem, stati → stanem
// ─────────────────────────────────────────────────────────────────────────────
const VATI = {
  id: 'verbs-vati-jem',
  title: 'davati → dajem, stati → stanem',
  subtitle: 'Two verb groups whose present tense hides the infinitive',
  icon: '🔁',
  level: 'B1',
  duration: '~6 min',
  color: '#15803d',
  bg: '#f0fdf4',
  slides: [
    {
      type: 'intro',
      title: 'When the Infinitive Misleads You',
      body: 'Most verbs show their present tense in the infinitive: čitati → čitam. Two very common groups do not. Verbs in -vati drop the -va- and take -jem: davati → dajem, prodavati → prodajem, poznavati → poznajem. And a small, frequent group in -ati takes -nem: stati → stanem, ostati → ostanem, postati → postanem. These are some of the most used verbs in the language — giving, selling, knowing people, staying, stopping, becoming.',
      icon: '🔁',
    },
    {
      type: 'table',
      title: 'davati and stati in the Present',
      headers: ['Person', 'davati (to give)', 'stati (to stop)'],
      rows: [
        ['ja', 'dajem', 'stanem'],
        ['ti', 'daješ', 'staneš'],
        ['on / ona / ono', 'daje', 'stane'],
        ['mi', 'dajemo', 'stanemo'],
        ['vi', 'dajete', 'stanete'],
        ['oni / one / ona', 'daju', 'stanu'],
      ],
    },
    {
      type: 'rule',
      title: '-vati → -jem: the -va- Disappears',
      body: 'Take the infinitive, remove -vati, add -jem: da-vati → dajem, proda-vati → prodajem, pozna-vati → poznajem, prizna-vati → priznajem, doda-vati → dodajem. The endings after that are the regular -em set: daješ, daje, dajemo, dajete, daju. The PAST keeps the infinitive stem: davao, prodavao, poznavao. Verbs in -ajati behave the same way in the present: ustajati → ustajem.',
      highlight: 'prodavati → prodajem',
    },
    {
      type: 'rule',
      title: 'Imperfective -vati, Perfective Partner',
      body: 'Most of these -vati verbs are the imperfective half of an aspect pair: dati (perfective, present dam) and davati (imperfective, dajem); prodati (prodam) and prodavati (prodajem). Use the -vati verb for habits and things in progress: Baka mi uvijek daje previše kolača. Use the perfective for one completed act: Moram prodati auto. poznavati (to know a person, a place) is imperfective on its own: Poznajem ga godinama.',
      highlight: 'Poznajem ga godinama.',
    },
    {
      type: 'rule',
      title: '-ati → -anem: stati, ostati, postati, ustati',
      body: 'A short group of PERFECTIVE verbs takes -nem in the present: stati → stanem (to stop; to fit), ostati → ostanem (to stay), postati → postanem (to become), ustati → ustanem (to get up). Being perfective, their present is used after ako, kad and da, or for the future: Ako ostanem u Zagrebu… Kad postanem liječnica… The imperative follows the same stem: Stani! Ostani! The past drops the n: stao, ostao, postao, ustao.',
      highlight: 'ostati → ostanem',
    },
    {
      type: 'table',
      title: 'The Pairs Side by Side',
      headers: ['Perfective', 'Present', 'Imperfective', 'Present'],
      rows: [
        ['dati', 'dam', 'davati', 'dajem'],
        ['prodati', 'prodam', 'prodavati', 'prodajem'],
        ['priznati', 'priznam', 'priznavati', 'priznajem'],
        ['ustati', 'ustanem', 'ustajati', 'ustajem'],
      ],
    },
    {
      type: 'example',
      title: 'Giving, Selling, Knowing',
      items: [
        {
          hr: 'Na tržnici prodajem povrće iz vlastitog vrta.',
          en: 'At the market I sell vegetables from my own garden.',
          note: 'prodavati becomes prodajem',
        },
        {
          hr: 'Poznaješ li moju sestru?',
          en: 'Do you know my sister?',
          note: 'poznavati becomes poznaješ',
        },
        {
          hr: 'Poznajem ga od djetinjstva.',
          en: 'I have known him since childhood.',
          note: 'poznavati becomes poznajem',
        },
        {
          hr: 'Baka mi uvijek daje previše kolača.',
          en: 'Grandma always gives me too many cakes.',
          note: 'davati becomes daje — a habit',
        },
        {
          hr: 'Radnim danom ustajem u šest sati.',
          en: 'On working days I get up at six.',
          note: 'ustajati becomes ustajem — a habit',
        },
        {
          hr: 'Priznajem, pogriješio sam.',
          en: 'I admit it, I made a mistake.',
          note: 'priznavati becomes priznajem',
        },
        {
          hr: 'U ovom dućanu prodaju samo domaće proizvode.',
          en: 'In this shop they sell only local products.',
          note: 'prodavati becomes prodaju',
        },
      ],
    },
    {
      type: 'example',
      title: 'Stopping, Staying, Becoming',
      items: [
        {
          hr: 'Ako sutra ustanem rano, idem trčati.',
          en: 'If I get up early tomorrow, I am going running.',
          note: 'ustati becomes ustanem — one act, after ako',
        },
        {
          hr: 'Autobus stane ispred škole.',
          en: 'The bus stops in front of the school.',
          note: 'stati becomes stane',
        },
        {
          hr: 'Ako ostanem u Zagrebu, javit ću ti se.',
          en: 'If I stay in Zagreb, I will get in touch.',
          note: 'ostati becomes ostanem',
        },
        {
          hr: 'Kad postanem liječnica, radit ću u bolnici.',
          en: 'When I become a doctor, I will work in a hospital.',
          note: 'postati becomes postanem',
        },
        {
          hr: 'Stani! Na semaforu je crveno.',
          en: 'Stop! The light is red.',
          note: 'the imperative of stati: stani',
        },
        {
          hr: 'Ostao je u Splitu tri dana.',
          en: 'He stayed in Split for three days.',
          note: 'the past of ostati: ostao, without n',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the "ja" form of prodavati?',
      options: ['prodavam', 'prodajem', 'prodam', 'prodavajem'],
      correct: 1,
      explanation:
        'Drop -vati and add -jem: prodajem. prodam is the present of the perfective prodati.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the past participle (he) of ostati?',
      options: ['ostanuo', 'ostao', 'ostanio', 'ostanao'],
      correct: 1,
      explanation:
        'The n belongs only to the present. The past is built on the infinitive: ostao, ostala.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) Keeping the -va- in the present: "davam", "prodavam", "poznavam" are not standard — it is dajem, prodajem, poznajem: Poznajem ga godinama. (2) Building the past on the present: "ostanuo", "stanuo" are wrong — the past comes from the infinitive: ostao, stao. (3) Mixing the pair: dam belongs to dati and dajem to davati — "Uvijek mi dam savjet" mixes a habit with a perfective verb; it is Uvijek mi daje savjete.',
      highlight: 'Poznajem ga godinama',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Što ___ na tržnici?" (you sell — prodavati)',
          options: ['prodavaš', 'prodaješ', 'prodajem', 'prodavaješ'],
          correct: 1,
          explanation: 'Drop -vati, add the -jem set: prodaješ.',
        },
        {
          q: 'Complete: "___ li Marka?" (Do you know — poznavati)',
          options: ['Poznavaš', 'Poznavaješ', 'Poznajem', 'Poznaješ'],
          correct: 3,
          explanation: 'poznavati becomes poznaješ in the ti form. Poznajem is the ja form.',
        },
        {
          q: 'What is the "ja" form of ostati?',
          options: ['ostaem', 'ostam', 'ostanem', 'ostanim'],
          correct: 2,
          explanation: 'ostati is one of the -ati → -anem verbs: ostanem.',
        },
        {
          q: 'Complete: "Autobus ___ ispred pošte." (stops — stati)',
          options: ['stane', 'stanu', 'stani', 'stanem'],
          correct: 0,
          explanation: 'The third person singular of stati is stane. Stani is the imperative.',
        },
        {
          q: 'What is the past participle (he) of stati?',
          options: ['stanuo', 'stanio', 'stao', 'stanao'],
          correct: 2,
          explanation: 'The past is built on the infinitive, without n: stao.',
        },
        {
          q: 'Which of these verbs is imperfective?',
          options: ['ustati', 'dati', 'prodavati', 'stati'],
          correct: 2,
          explanation:
            'prodavati is the imperfective partner of prodati. ustati, dati and stati are perfective.',
        },
        {
          q: 'Complete: "Baka mi uvijek ___ previše kolača." (gives — davati)',
          options: ['dava', 'davaje', 'daje', 'dajem'],
          correct: 2,
          explanation: 'davati becomes daje in the third person.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'dajem, stanem — Key Takeaways',
      points: [
        '-vati → -jem: dajem, prodajem, poznajem, priznajem, dodajem',
        'ustajati → ustajem; the past keeps the infinitive: davao, prodavao',
        'Pairs: dati (dam) / davati (dajem), prodati (prodam) / prodavati (prodajem)',
        '-ati → -anem: stanem, ostanem, postanem, ustanem — perfective',
        'Imperative: stani, ostani; past without n: stao, ostao, postao',
      ],
    },
  ],
};

const VATI_P = {
  worked: [
    {
      title: 'We Sell',
      problem: 'Konjugiraj: prodavati — mi ___ (we sell)',
      en: 'Conjugate: prodavati — we sell',
      steps: [
        {
          label: 'Remove -vati',
          text: 'proda-vati leaves the stem proda-.',
        },
        {
          label: 'Add j',
          text: 'The present stem of a -vati verb ends in j: prodaj-.',
        },
        {
          label: 'The ending',
          text: 'The "mi" ending of the -em set is -emo.',
        },
      ],
      answer: 'mi prodajemo',
    },
    {
      title: 'If I Stay',
      problem: 'Reci: If I stay in Zagreb, I will call you.',
      en: 'If I stay in Zagreb, I will call you.',
      steps: [
        {
          label: 'Which verb?',
          text: 'Staying here is one decision, so the perfective ostati.',
        },
        {
          label: 'Its present',
          text: 'ostati belongs to the -ati → -anem group: ostanem.',
        },
        {
          label: 'The main clause',
          text: 'The future of nazvati: nazvat ću, and the object clitic te follows ću.',
        },
      ],
      answer: 'Ako ostanem u Zagrebu, nazvat ću te.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Ovaj dućan ___ samo domaće proizvode.',
        options: ['prodava', 'prodaje', 'prodavaje', 'prodajem'],
        correct: 1,
        hint: 'Drop -vati, add the j and the third-person ending.',
        explanation: 'Ovaj dućan prodaje…',
      },
      {
        q: 'Ne ___ ga dobro, tek smo se upoznali. (I know — poznavati)',
        options: ['poznajem', 'poznavam', 'poznavaješ', 'poznavajem'],
        correct: 0,
        hint: 'The -va- disappears in the present.',
        explanation: 'Ne poznajem ga dobro.',
      },
      {
        q: 'Ako ___ u Zagrebu, nazvat ću te. (I stay)',
        options: ['ostam', 'ostanem', 'ostaim', 'ostanim'],
        correct: 1,
        hint: 'ostati takes an n in the present.',
        explanation: 'Ako ostanem…',
      },
      {
        q: '___! Ne prelazi ulicu. (Stop! — ti)',
        options: ['Stani', 'Stane', 'Stanem', 'Stanu'],
        correct: 0,
        hint: 'The imperative, built on the present stem stan-.',
        explanation: 'Stani! — stop!',
      },
      {
        q: 'Kad ___ liječnica, radit ću u Splitu. (I become)',
        options: ['postaem', 'postam', 'postanim', 'postanem'],
        correct: 3,
        hint: 'postati takes an n in the present.',
        explanation: 'Kad postanem liječnica…',
      },
      {
        q: 'Moja sestra ___ u pet ujutro. (gets up — ustajati)',
        options: ['ustajava', 'ustaje', 'ustajaje', 'ustajem'],
        correct: 1,
        hint: 'The third person of the -em set, on the stem ustaj-.',
        explanation: 'Sestra ustaje u pet.',
      },
      {
        q: 'Prošlog tjedna ___ smo u Zadru dva dana. (stayed)',
        options: ['ostanuli', 'ostanili', 'ostali', 'ostaleli'],
        correct: 2,
        hint: 'The past is built on the infinitive, without n.',
        explanation: 'ostali smo — the plural past participle.',
      },
      {
        q: 'Which pair is "perfective / imperfective"?',
        options: ['davati / dati', 'dati / davati', 'prodavati / prodati', 'poznavati / prodati'],
        correct: 1,
        hint: 'The perfective is the shorter verb.',
        explanation: 'dati (perfective) / davati (imperfective).',
      },
      {
        type: 'type',
        q: 'Što ____ na tržnici? (you sell — prodavati)',
        answer: 'prodaješ',
        hint: 'Drop -vati, add j and the ti ending.',
        explanation: 'Što prodaješ?',
      },
      {
        type: 'type',
        q: '____ li njezine roditelje? (Do you know — poznavati)',
        answer: 'Poznaješ',
        hint: 'The ti form; the -va- disappears.',
        explanation: 'Poznaješ li njezine roditelje?',
      },
      {
        type: 'type',
        q: 'Ako sutra ____ rano, idem trčati. (I get up — ustati)',
        answer: 'ustanem',
        hint: 'ustati is perfective and takes an n in the present.',
        explanation: 'Ako ustanem rano…',
      },
      {
        type: 'type',
        q: 'Mama mi uvijek ____ dobre savjete. (gives — davati)',
        answer: 'daje',
        hint: 'A habit: the imperfective verb, third person.',
        explanation: 'Mama mi uvijek daje savjete.',
      },
      {
        type: 'type',
        q: 'Ona je otišla, a on je ____ u Zagrebu. (stayed — ostati)',
        answer: 'ostao',
        hint: 'The masculine past, built on the infinitive.',
        explanation: 'on je ostao — he stayed.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Oni ___ kuću na moru." (are selling — prodavati)',
      options: ['prodaju', 'prodavaju', 'prodajemo', 'prodavu'],
      correct: 0,
      explanation: 'The oni form of prodavati: prodaju.',
    },
    {
      q: 'Complete: "Ne ___ me više?" (you recognise — prepoznavati)',
      options: ['prepoznavaš', 'prepoznaješ', 'prepoznajem', 'prepoznavaješ'],
      correct: 1,
      explanation: 'The same pattern as poznavati: prepoznaješ.',
    },
    {
      q: 'Complete: "Ako ___ kod kuće, gledat ćemo film." (we stay — ostati)',
      options: ['ostamo', 'ostanimo', 'ostanemo', 'ostajamo'],
      correct: 2,
      explanation: 'The mi form of ostati: ostanemo. Ostanimo is the imperative.',
    },
    {
      q: 'What is the "ona" form of postati?',
      options: ['posta', 'postani', 'postanu', 'postane'],
      correct: 3,
      explanation: 'postati → postane. Postani is the imperative and postanu the oni form.',
    },
    {
      q: 'What is the past participle (he) of postati?',
      options: ['postanuo', 'postao', 'postanio', 'postanao'],
      correct: 1,
      explanation: 'The past is built on the infinitive, without n: postao.',
    },
    {
      q: 'Which present form belongs to davati?',
      options: ['dam', 'dajem', 'davam', 'davajem'],
      correct: 1,
      explanation: 'davati → dajem. dam is the present of the perfective dati.',
    },
  ],
  vocab: [
    ['davati', 'to give (repeatedly)', 'Baka mi uvijek daje kolače.'],
    ['prodavati', 'to sell', 'Na tržnici prodajem povrće.'],
    ['poznavati', 'to know (a person, a place)', 'Poznajem ga od djetinjstva.'],
    ['priznavati', 'to admit', 'Priznajem da nisam bio u pravu.'],
    ['ustajati', 'to get up (habitually)', 'Ustajem u šest sati.'],
    ['ustati', 'to get up (once)', 'Sutra moram ustati rano.'],
    ['stati', 'to stop; to fit', 'Autobus stane ispred škole.'],
    ['ostati', 'to stay, to remain', 'Ostao je u Splitu tri dana.'],
    ['postati', 'to become', 'Želi postati liječnica.'],
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 41 · Croats in the World, the World in Croatia
// ─────────────────────────────────────────────────────────────────────────────
const ABROAD = {
  id: 'croats-abroad',
  title: 'Croats in the World, the World in Croatia',
  subtitle: 'Emigration and the diaspora, famous Croats, the pros and cons of life abroad',
  icon: '✈️',
  level: 'B1',
  duration: '~6 min',
  color: '#b91c1c',
  bg: '#fef2f2',
  slides: [
    {
      type: 'intro',
      title: 'A Country With Family Everywhere',
      body: 'Almost every Croatian family has someone abroad — an uncle in Germany, cousins in Canada, a great-grandfather who sailed to Argentina or Chile. And the movement runs both ways: people come back, and more and more foreigners come to live and work in Croatia. This lesson gives you the words for leaving and returning, a handful of Croats the whole world knows, and the frame for weighing up life abroad: s jedne strane… s druge strane…',
      icon: '✈️',
    },
    {
      type: 'table',
      title: 'Leaving and Returning',
      headers: ['Croatian', 'English'],
      rows: [
        ['iseliti se', 'to emigrate, to move out'],
        ['iseljenik / iseljenica', 'emigrant'],
        ['iseljeništvo, dijaspora', 'the emigrant community, the diaspora'],
        ['inozemstvo', 'abroad (a noun: foreign countries)'],
        ['vratiti se u domovinu', 'to return to the homeland'],
        ['povratnik / povratnica', 'a returnee'],
        ['stranac / strankinja', 'a foreigner'],
        ['nostalgija, čežnja', 'nostalgia, longing'],
      ],
    },
    {
      type: 'rule',
      title: 'Going Abroad and Being Abroad',
      body: 'inozemstvo is a noun, so it follows the place rule you know: going there is u + the accusative, being there is u + the locative. Preselio se u inozemstvo (he moved abroad) — Živi u inozemstvu (he lives abroad). The same with countries: iseliti se iz + the genitive, u + the accusative — Iselili su se iz Hrvatske u Kanadu — and then Žive u Kanadi.',
      highlight: 'Preselio se u inozemstvo.',
    },
    {
      type: 'table',
      title: 'Croats the World Knows',
      headers: ['Who', 'From', 'Known for'],
      rows: [
        ['Faust Vrančić', 'Šibenik', 'described an early parachute in his book of machines'],
        ['Nikola Tesla', 'born in Smiljan, Lika', 'alternating current; worked in America'],
        ['Ivan Vučetić', 'born on Hvar', 'fingerprint identification, developed in Argentina'],
        ['Slavoljub Penkala', 'worked in Zagreb', 'the mechanical pencil — penkala'],
        ['Luka Modrić', 'Zadar', 'footballer, Ballon d’Or (Zlatna lopta) 2018'],
      ],
    },
    {
      type: 'rule',
      title: 'Where Croats Live',
      body: 'Large Croatian communities live in Germany, Austria, the United States, Canada and Australia, and in South America above all in Argentina and Chile. Use the locative for where: u Njemačkoj, u Austriji, u Americi, u Kanadi, u Australiji, u Argentini — and Čile, a foreign word in -e, keeps its e: u Čileu. With a quantity, the people go into the genitive plural: Mnogo Hrvata živi u Njemačkoj.',
      highlight: 'u Čileu',
    },
    {
      type: 'rule',
      title: 'Weighing It Up: s jedne strane… s druge strane',
      body: 'To weigh two sides, open with S jedne strane… (on the one hand) and turn with a s druge strane… (and on the other). Name the sides with prednost (advantage) and nedostatak (disadvantage, plural nedostaci): Najveća prednost je bolja plaća, a najveći nedostatak je daljina. And for what you miss, nedostajati turns the English round, like svidjeti se: what you miss is the subject, you are in the dative — Nedostaje mi obitelj. Nedostaju mi prijatelji.',
      highlight: 'S jedne strane…, a s druge strane…',
    },
    {
      type: 'example',
      title: 'Leaving, Living, Returning',
      items: [
        {
          hr: 'Moj djed iselio se u Kanadu šezdesetih godina.',
          en: 'My grandfather emigrated to Canada in the sixties.',
          note: 'u + the accusative for the direction: Kanadu',
        },
        {
          hr: 'Živim u inozemstvu već deset godina.',
          en: 'I have been living abroad for ten years now.',
          note: 'u + the locative for the place: inozemstvu',
        },
        {
          hr: 'Mnogo Hrvata živi u Njemačkoj i Austriji.',
          en: 'Many Croats live in Germany and Austria.',
          note: 'mnogo + the genitive plural: Hrvata',
        },
        {
          hr: 'Velika hrvatska zajednica postoji i u Čileu.',
          en: 'There is also a large Croatian community in Chile.',
          note: 'Čile keeps its e: u Čileu',
        },
        {
          hr: 'Nakon dvadeset godina vratio se u domovinu.',
          en: 'After twenty years he returned to his homeland.',
          note: 'vratiti se u + the accusative: domovinu',
        },
        {
          hr: 'Sve više stranaca dolazi raditi u Hrvatsku.',
          en: 'More and more foreigners come to work in Croatia.',
          note: 'sve više + the genitive plural: stranaca',
        },
        {
          hr: 'S jedne strane, plaće su veće, a s druge strane, nedostaje mi obitelj.',
          en: 'On the one hand the salaries are higher; on the other, I miss my family.',
          note: 'nedostaje mi — I am in the dative',
        },
      ],
    },
    {
      type: 'example',
      title: 'Famous Croats',
      items: [
        {
          hr: 'Nikola Tesla rođen je u Smiljanu, u Lici.',
          en: 'Nikola Tesla was born in Smiljan, in Lika.',
          note: 'u + the locative: Smiljanu',
        },
        {
          hr: 'Ivan Vučetić rođen je na Hvaru, a radio je u Argentini.',
          en: 'Ivan Vučetić was born on Hvar and worked in Argentina.',
          note: 'na Hvaru — islands take na',
        },
        {
          hr: 'Faust Vrančić iz Šibenika opisao je padobran.',
          en: 'Faust Vrančić from Šibenik described a parachute.',
          note: 'iz + the genitive: Šibenika',
        },
        {
          hr: 'Luka Modrić osvojio je Zlatnu loptu 2018. godine.',
          en: 'Luka Modrić won the Ballon d’Or in 2018.',
          note: 'the accusative: Zlatnu loptu',
        },
        {
          hr: 'Moja sestrična rođena je u Australiji, ali savršeno govori hrvatski.',
          en: 'My cousin was born in Australia, but she speaks Croatian perfectly.',
          note: 'rođena — the feminine form',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What did Ivan Vučetić develop in Argentina?',
      options: [
        'an early parachute',
        'identification by fingerprints',
        'the mechanical pencil',
        'alternating current',
      ],
      correct: 1,
      explanation:
        'Vučetić, born on Hvar, developed fingerprint identification for the police in Argentina.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: '"Mnogo Hrvata živi u Njemačkoj." Why "Hrvata"?',
      options: [
        'mnogo takes the genitive plural',
        'it is the accusative',
        'it is the nominative plural',
        'Hrvata is the plural of Hrvatska',
      ],
      correct: 0,
      explanation:
        'Words of quantity — mnogo, puno, malo, sve više — take the genitive plural: mnogo Hrvata, sve više stranaca.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: '(1) The place case for a direction: "Preselio se u inozemstvu" is wrong — moving is movement, so u + the accusative: Preselio se u inozemstvo. (2) The direction case for a place: "Živi u Kanadu" is wrong — it is Živi u Kanadi. (3) The English order with nedostajati: "Nedostajem obitelj" is wrong — you are in the dative and what you miss is the subject: Nedostaje mi obitelj. (4) Forgetting the genitive after a quantity: "mnogo Hrvati" — it is mnogo Hrvata.',
      highlight: 'Preselio se u inozemstvo',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Preselila se u ___ prije pet godina." (abroad)',
          options: ['inozemstvu', 'inozemstvo', 'inozemstva', 'inozemstvom'],
          correct: 1,
          explanation: 'Moving is a direction: u + the accusative, inozemstvo.',
        },
        {
          q: 'Complete: "Živi u ___ već dugo." (abroad)',
          options: ['inozemstvo', 'inozemstva', 'inozemstvom', 'inozemstvu'],
          correct: 3,
          explanation: 'Living somewhere is a place: u + the locative, inozemstvu.',
        },
        {
          q: 'Where was Nikola Tesla born?',
          options: ['in Smiljan, in Lika', 'in Zagreb', 'in New York', 'in Šibenik'],
          correct: 0,
          explanation: 'Tesla was born in Smiljan, in Lika, in 1856; he later worked in America.',
        },
        {
          q: 'Who described an early parachute?',
          options: ['Ivan Vučetić', 'Faust Vrančić', 'Luka Modrić', 'Slavoljub Penkala'],
          correct: 1,
          explanation: 'Faust Vrančić of Šibenik, in his book of new machines.',
        },
        {
          q: 'Complete: "S jedne strane posao je bolji, a ___ strane nedostaje mi obitelj."',
          options: ['s druge', 's drugom', 'u drugoj', 'na drugu'],
          correct: 0,
          explanation: 's jedne strane… s druge strane — both with s + the genitive.',
        },
        {
          q: 'Complete: "Velika hrvatska zajednica živi u ___." (Chile)',
          options: ['Čile', 'Čilu', 'Čileu', 'Čilom'],
          correct: 2,
          explanation: 'Čile keeps its e and adds the ending: u Čileu.',
        },
        {
          q: 'What is an "iseljenik"?',
          options: ['a tourist', 'an emigrant', 'a returnee', 'a border guard'],
          correct: 1,
          explanation: 'iseljenik — someone who has emigrated. A returnee is a povratnik.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Croats Abroad — Key Takeaways',
      points: [
        'iseliti se iz + genitive u + accusative; vratiti se u domovinu',
        'u inozemstvo (going) / u inozemstvu (being)',
        'mnogo Hrvata, sve više stranaca — genitive plural after a quantity',
        'Tesla (Smiljan), Vrančić (Šibenik), Vučetić (Hvar), Penkala (Zagreb), Modrić (Zadar)',
        'S jedne strane…, a s druge strane…; prednost / nedostatak',
        'Nedostaje mi obitelj — you are in the dative',
      ],
    },
  ],
};

const ABROAD_P = {
  worked: [
    {
      title: 'From Croatia to Canada',
      problem: 'Reci: My aunt emigrated from Croatia to Canada.',
      en: 'My aunt emigrated from Croatia to Canada.',
      steps: [
        {
          label: 'The verb',
          text: 'To emigrate is iseliti se; a woman, past: iselila se, with se in second place.',
        },
        {
          label: 'From',
          text: 'iz + the genitive: Hrvatska becomes Hrvatske.',
        },
        {
          label: 'To',
          text: 'A direction: u + the accusative, Kanada becomes Kanadu.',
        },
      ],
      answer: 'Teta se iselila iz Hrvatske u Kanadu.',
    },
    {
      title: 'Weighing It Up',
      problem: 'Reci: On the one hand the job is better; on the other, I miss my friends.',
      en: 'On the one hand the job is better; on the other, I miss my friends.',
      steps: [
        {
          label: 'The frame',
          text: 'S jedne strane… a s druge strane…',
        },
        {
          label: 'The first side',
          text: 'The comparative of dobar is bolji: posao je bolji.',
        },
        {
          label: 'Missing someone',
          text: 'nedostajati: friends are the subject (plural, nedostaju) and you are in the dative (mi).',
        },
      ],
      answer: 'S jedne strane posao je bolji, a s druge strane nedostaju mi prijatelji.',
    },
  ],
  practice: {
    title: 'Guided Practice',
    items: [
      {
        q: 'Moj djed se iselio ___ Australiju.',
        options: ['u', 'na', 'iz', 'za'],
        correct: 0,
        hint: 'A direction into a country.',
        explanation: 'iselio se u Australiju.',
      },
      {
        q: 'Iselili su se ___ Hrvatske prije rata.',
        options: ['u', 'od', 'iz', 'na'],
        correct: 2,
        hint: 'Out of a country: the preposition with the genitive.',
        explanation: 'iz Hrvatske.',
      },
      {
        q: 'Mnogo ___ živi u Njemačkoj.',
        options: ['Hrvati', 'Hrvata', 'Hrvatima', 'Hrvate'],
        correct: 1,
        hint: 'mnogo takes the genitive plural.',
        explanation: 'mnogo Hrvata.',
      },
      {
        q: 'Najveći ___ života u inozemstvu je daljina od obitelji.',
        options: ['prednost', 'nedostatak', 'povratnik', 'iseljenik'],
        correct: 1,
        hint: 'Distance from family is a drawback — and the adjective is masculine.',
        explanation: 'najveći nedostatak — the biggest disadvantage.',
      },
      {
        q: 'Ivan Vučetić razvio je sustav identifikacije pomoću ___.',
        options: ['otisaka prstiju', 'padobrana', 'olovke', 'struje'],
        correct: 0,
        hint: 'Think of what the police take from your fingers.',
        explanation: 'pomoću otisaka prstiju — by means of fingerprints.',
      },
      {
        q: 'Nakon dvadeset godina vratio se u ___.',
        options: ['domovini', 'domovina', 'domovinu', 'domovinom'],
        correct: 2,
        hint: 'Returning is a direction: u + the accusative.',
        explanation: 'vratio se u domovinu.',
      },
      {
        q: 'Luka Modrić osvojio je Zlatnu ___ 2018. godine.',
        options: ['lopti', 'loptu', 'lopta', 'loptom'],
        correct: 1,
        hint: 'What he won is the direct object.',
        explanation: 'osvojio je Zlatnu loptu.',
      },
      {
        q: 'Nedostaje ___ obitelj. (I miss my family)',
        options: ['me', 'ja', 'mi', 'moj'],
        correct: 2,
        hint: 'The person who misses is in the dative.',
        explanation: 'Nedostaje mi obitelj.',
      },
      {
        type: 'type',
        q: 'Tesla je rođen u ____, u Lici. (Smiljan)',
        answer: 'Smiljanu',
        hint: 'u + the locative.',
        explanation: 'rođen je u Smiljanu.',
      },
      {
        type: 'type',
        q: 'S jedne strane plaće su veće, a s ____ strane sve je skuplje.',
        answer: 'druge',
        hint: 'The second half of the frame: s + the genitive of drugi.',
        explanation: 's druge strane.',
      },
      {
        type: 'type',
        q: 'Preselio se u ____ zbog posla. (abroad)',
        answer: 'inozemstvo',
        hint: 'Moving is a direction: u + the accusative.',
        explanation: 'preselio se u inozemstvo.',
      },
      {
        type: 'type',
        q: 'Mnogo Hrvata živi u ____. (Argentina)',
        answer: 'Argentini',
        hint: 'Living somewhere: u + the locative.',
        explanation: 'u Argentini.',
      },
      {
        type: 'type',
        q: 'Velika hrvatska zajednica postoji u ____. (Chile)',
        answer: 'Čileu',
        hint: 'A foreign name in -e keeps its e and adds the locative ending.',
        explanation: 'u Čileu.',
      },
    ],
  },
  checkB: [
    {
      q: 'Complete: "Nakon studija iselio se u ___." (Canada)',
      options: ['Kanadi', 'Kanada', 'Kanadu', 'Kanadom'],
      correct: 2,
      explanation: 'A direction: u + the accusative, Kanadu.',
    },
    {
      q: 'Complete: "Već petnaest godina živi u ___." (Germany)',
      options: ['Njemačku', 'Njemačka', 'Njemačkom', 'Njemačkoj'],
      correct: 3,
      explanation: 'A place: u + the locative, Njemačkoj.',
    },
    {
      q: 'Where was Ivan Vučetić born?',
      options: ['on Hvar', 'in Smiljan', 'in Šibenik', 'in Zadar'],
      correct: 0,
      explanation: 'Vučetić was born on the island of Hvar and later emigrated to Argentina.',
    },
    {
      q: 'What is the opposite of "prednost"?',
      options: ['povratak', 'nedostatak', 'dijaspora', 'domovina'],
      correct: 1,
      explanation: 'prednost (advantage) and nedostatak (disadvantage).',
    },
    {
      q: 'Complete: "Nikola Tesla radio je u ___." (America)',
      options: ['Americi', 'Ameriku', 'Amerika', 'Amerikom'],
      correct: 0,
      explanation: 'A place: u + the locative, Americi.',
    },
    {
      q: 'What is a "povratnik"?',
      options: [
        'an emigrant',
        'someone who has come back to the homeland',
        'a foreign worker',
        'a tourist',
      ],
      correct: 1,
      explanation: 'povratnik — a returnee; from vratiti se, to come back.',
    },
  ],
  vocab: [
    ['inozemstvo', 'abroad', 'Živi u inozemstvu deset godina.'],
    ['iseliti se', 'to emigrate', 'Djed se iselio u Kanadu.'],
    ['iseljenik', 'emigrant', 'Moj stric je iseljenik u Australiji.'],
    ['dijaspora', 'diaspora', 'Hrvatska dijaspora je velika.'],
    ['domovina', 'homeland', 'Vratio se u domovinu.'],
    ['povratnik', 'returnee', 'Kao povratnik, sve je morao ponovno naučiti.'],
    ['stranac', 'foreigner', 'Mnogo stranaca radi u turizmu.'],
    ['prednost', 'advantage', 'Prednost je bolja plaća.'],
    ['nedostatak', 'disadvantage', 'Nedostatak je daljina od obitelji.'],
    ['nedostajati', 'to be missed (by someone)', 'Nedostaje mi more.'],
  ],
};

export const SPINE = [
  {
    id: 'names-and-meanings',
    masterOrder: 33,
    prerequisites: ['genitive-deep'],
    objectives: [
      'Read Croatian first names as words and say what a name means',
      'Wish someone a happy name day and say who a child was named after (po + locative)',
      'Decline names correctly: Ivana / Ivanu, s Lukom, s gospođom Horvat',
    ],
  },
  {
    id: 'love-and-marriage',
    masterOrder: 34,
    prerequisites: ['names-and-meanings', 'instrumental'],
    objectives: [
      'Tell a relationship story: upoznati se, hodati s, zaljubiti se u, vjenčati se',
      'Say who married whom: oženio se Anom (he), udala se za Marka (she)',
      'Use the vocabulary and idioms of the wedding: svadba, kum, uploviti u bračnu luku',
    ],
  },
  {
    id: 'foreign-nouns-declension',
    masterOrder: 39,
    prerequisites: ['genitive-deep', 'instrumental'],
    objectives: [
      'Decline foreign names and loanwords: Tonyja, taksijem, Huga, Goethea, u intervjuu',
      'Turn -io into -ij-: na radiju, u studiju, Marija (from Mario)',
      'Leave feminine names not in -a unchanged, and decline dio → dijela',
    ],
  },
  {
    id: 'verbs-vati-jem',
    masterOrder: 40,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Form the present of -vati verbs: davati → dajem, prodavati → prodajem, poznavati → poznajem',
      'Form the present of stati, ostati, postati, ustati: stanem, ostanem, postanem, ustanem',
      'Build their past on the infinitive (ostao, davao) and pick the right partner of an aspect pair',
    ],
  },
  {
    id: 'croats-abroad',
    masterOrder: 41,
    prerequisites: ['foreign-nouns-declension', 'opinions-agreeing'],
    objectives: [
      'Talk about emigration and return: iseliti se, u inozemstvo / u inozemstvu, povratnik',
      'Say a few true things about Croats the world knows: Tesla, Vrančić, Vučetić, Penkala, Modrić',
      'Weigh up life abroad with s jedne strane… s druge strane, prednost and nedostatak',
    ],
  },
];

export const LESSONS = [NAMES, LOVE, FOREIGN, VATI, ABROAD];

export const PRACTICE = {
  'names-and-meanings': NAMES_P,
  'love-and-marriage': LOVE_P,
  'foreign-nouns-declension': FOREIGN_P,
  'verbs-vati-jem': VATI_P,
  'croats-abroad': ABROAD_P,
};
