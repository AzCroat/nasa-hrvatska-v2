// functions/api/content/_data/c1new/batch04.js
//
// New C1 lessons, batch 04 (Croaticum restructure, stage 6, 2026-11-12). See c1new/index.js.
//
// Razgovarajte s nama! B2-C1, lessons 5 and 6: agreement with several subjects of
// different gender, causal and consequential clauses, ethnonyms and place adjectives,
// the genitive after a noun (subjective, objective, possessive, of quality), and capital
// letters in personal and geographic names (Hrvatski pravopis, IHJJ).
//
// WHERE THE STANDARD ALLOWS TWO FORMS, BOTH ARE TAUGHT AND NEITHER IS TESTED:
//  - a predicate placed before its subjects may agree with the nearest one
//    (Došla je majka i otac) or be plural (Došli su majka i otac);
//  - feminine + neuter subjects take the masculine plural, and agreement with the
//    nearer noun is also found (Kuća i dvorište prodani su / prodana su);
//  - all-neuter subjects usually take the neuter plural; the masculine plural also occurs;
//  - a woman from Dubrovnik is traditionally Dubrovkinja; Dubrovčanka is also in use;
//  - causal pošto is common in speech; handbooks prefer budući da / jer, and pošto in its
//    careful standard sense is temporal (after). The learner is told both.

/** Spine entries for this batch. `masterOrder` is the lesson's final C1 position. */
export const SPINE = [
  {
    id: 'multi-subject-agreement',
    masterOrder: 22,
    prerequisites: ['adjective-agreement', 'past-tense', 'word-order-emphasis'],
    objectives: [
      'Make the verb agree with two or more subjects: Brat i sestra su došli, Majka i kći su otišle',
      'Choose the person when pronouns combine: Ti i ja smo, ti i on ste',
      'Know what the standard allows when the verb comes first and when s + instrumental is not a second subject',
    ],
  },
  {
    id: 'cause-consequence-clauses',
    masterOrder: 23,
    prerequisites: ['cause-purpose', 'complex-sentences', 'clause-types'],
    objectives: [
      'Give a cause with jer, zato što, budući da, kako and s obzirom na to da',
      'State a consequence with tako da, toliko … da, pa and te',
      'Place the comma correctly and use pošto in its careful standard sense',
    ],
  },
  {
    id: 'ethnonyms',
    masterOrder: 26,
    prerequisites: ['countries-languages', 'adjective-agreement'],
    objectives: [
      'Name the people of a town: Zagrepčanin, Splićanin, Riječanka, Osječani',
      'Form the place adjective: zagrebački, splitski, riječki, osječki',
      'Spell the inhabitant with a capital letter and the adjective with a small one',
    ],
  },
  {
    id: 'objective-genitive',
    masterOrder: 27,
    prerequisites: ['genitive-deep', 'verbal-nouns'],
    objectives: [
      'Tell who does it from what is done to it: dolazak gostiju, zaštita okoliša',
      'Choose between očeva kuća and kuća moga oca',
      'Use the genitive of quality and keep a name in apposition: čovjek velikog srca, u gradu Zagrebu',
    ],
  },
  {
    id: 'capitals-names-geography',
    masterOrder: 28,
    prerequisites: ['countries-languages', 'ethnonyms'],
    objectives: [
      'Write personal names, nicknames and rulers correctly: Karlo Veliki, Petar Krešimir IV., kralj Tomislav',
      'Capitalise every word of a town or state name: Slavonski Brod, Biograd na Moru, Republika Hrvatska',
      'Capitalise only the first word of other geographic names: Jadransko more, Hrvatsko zagorje',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 22 · Agreement with several subjects
// ─────────────────────────────────────────────────────────
const MULTI_SUBJECT_AGREEMENT = {
  id: 'multi-subject-agreement',
  title: 'Two Subjects, One Verb',
  subtitle: 'Brat i sestra su došli · Majka i kći su otišle · Ti i ja smo',
  icon: '👫',
  level: 'C1',
  duration: '~7 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'When the Subject Is a Pair',
      body: 'You know that a past participle agrees with its subject: Ana je došla, Ivan je došao. But what does the verb do when the subject is Ana and Ivan, or a house and a yard, or you and I? Croatian has clear rules for gender, for person and for word order, and one or two places where the standard grammar allows two forms. This lesson teaches all of them.',
      icon: '👫',
    },
    {
      type: 'table',
      title: 'Gender: Who Decides',
      headers: ['Subjects', 'Predicate', 'Example'],
      rows: [
        ['at least one masculine noun', 'masculine plural (-i)', 'Brat i sestra su došli.'],
        ['only feminine nouns', 'feminine plural (-e)', 'Majka i kći su otišle.'],
        ['only neuter nouns', 'usually neuter plural (-a)', 'Selo i polje bila su poplavljena.'],
        ['feminine and neuter', 'masculine plural', 'Kuća i dvorište prodani su.'],
      ],
    },
    {
      type: 'rule',
      title: 'Masculine Wins',
      body: 'If even one subject is masculine, the predicate is masculine plural — however many feminine subjects stand beside it. Brat i sestra su došli. Ana, Marija i Ivan su otišli. Otac i kći bili su sretni. The masculine plural is also the form used when the genders are feminine and neuter: Kuća i dvorište prodani su. With that pair, agreement with the nearer noun (prodana su) is also found, so it is never marked wrong.',
      highlight: 'Brat i sestra su došli.',
    },
    {
      type: 'rule',
      title: 'Feminine Only When All Are Feminine',
      body: 'The feminine plural appears only when every subject is feminine: Majka i kći su otišle. Ana i Marija bile su umorne. Baka i unuka pekle su kolače. If all the subjects are neuter, the predicate is usually neuter plural: Dijete i štene bila su gladna. The masculine plural also occurs there, especially when the nouns mean people.',
      highlight: 'Majka i kći su otišle.',
    },
    {
      type: 'table',
      title: 'Person: Who Is Speaking',
      headers: ['Subjects', 'Becomes', 'Example'],
      rows: [
        ['ja + anyone', 'mi — 1st person plural', 'Ti i ja smo zakasnili.'],
        ['ti + he, she, they', 'vi — 2nd person plural', 'Ti i Marko ste prijatelji.'],
        ['third persons only', 'oni — 3rd person plural', 'On i ona su vjenčani.'],
      ],
    },
    {
      type: 'rule',
      title: 'First Beats Second, Second Beats Third',
      body: 'When pronouns combine, the first person outranks the second and the second outranks the third. Ti i ja means mi, so the verb is smo: Ti i ja smo zakasnili. Ti i Marko means vi: Ti i Marko ste zakasnili. Gender still follows the gender rule: two women say Ana i ja smo došle; a man and a woman say Ana i ja smo došli. Politeness puts the speaker last: moj brat i ja, not ja i moj brat.',
      highlight: 'Ti i ja smo zakasnili.',
    },
    {
      type: 'rule',
      title: 'When the Verb Comes First',
      body: 'When the predicate stands before its subjects, the standard grammar allows two forms: the plural (Došli su majka i otac) or agreement with the nearest subject (Došla je majka i otac). Both are correct; the plural is never wrong. An attribute in front of two nouns usually agrees with the nearest one: moj brat i sestra, nova kuća i dvorište.',
      highlight: 'Došli su majka i otac.',
    },
    {
      type: 'rule',
      title: 'S + Instrumental Is Not a Second Subject',
      body: 'In "Marko je sa sestrom otišao u kino" the subject is Marko alone; sa sestrom is company, in the instrumental. The verb therefore agrees with Marko: je otišao. Compare Marko i sestra su otišli, where both are subjects. The plural after s + instrumental is heard in casual speech, but the grammar agrees with the nominative only.',
      highlight: 'Marko je sa sestrom otišao',
    },
    {
      type: 'example',
      title: 'Agreement in Use',
      items: [
        {
          hr: 'Moj brat i sestra došli su jučer iz Zagreba i ostat će do nedjelje.',
          en: 'My brother and sister came from Zagreb yesterday and will stay until Sunday.',
          note: 'one masculine noun, so došli is masculine plural',
        },
        {
          hr: 'Majka i kći otišle su na tržnicu po svježe smokve i sir.',
          en: 'Mother and daughter went to the market for fresh figs and cheese.',
          note: 'both feminine, so otišle is feminine plural',
        },
        {
          hr: 'Ti i ja smo zakasnili na vlak jer si se predugo spremao.',
          en: 'You and I missed the train because you took too long to get ready.',
          note: 'ja outranks ti: the verb is smo',
        },
        {
          hr: 'Ti i Marko ste znali za iznenađenje, a nikome niste ništa rekli.',
          en: 'You and Marko knew about the surprise and did not tell anyone.',
          note: 'ti outranks Marko: the verb is ste',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Nakon poplave selo i polje bila su pod vodom gotovo tjedan dana.',
          en: 'After the flood the village and the field were under water for almost a week.',
          note: 'two neuter nouns: bila su, neuter plural',
        },
        {
          hr: 'Kuća i dvorište prodani su mladom paru iz Rijeke.',
          en: 'The house and the yard were sold to a young couple from Rijeka.',
          note: 'feminine and neuter together: masculine plural prodani',
        },
        {
          hr: 'Na vjenčanje su došli kumovi, rodbina i prijatelji iz cijele Dalmacije.',
          en: 'Godparents, relatives and friends from all over Dalmatia came to the wedding.',
          note: 'the verb comes first and is plural, the safe choice',
        },
        {
          hr: 'Petar je s prijateljima otišao planinariti na Velebit.',
          en: 'Petar went hiking on Velebit with his friends.',
          note: 's prijateljima is company, not a subject: otišao agrees with Petar',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Otac i kći ___ sretni."',
      options: ['bila je', 'bile su', 'bili su', 'bio je'],
      correct: 2,
      explanation:
        'One masculine subject is enough for the masculine plural: Otac i kći bili su sretni.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Two women speaking: "Ana i ja ___ zajedno."',
      options: ['smo putovale', 'su putovale', 'ste putovale', 'smo putovali'],
      correct: 0,
      explanation:
        'ja makes it first person plural (smo), and both speakers are women, so the participle is feminine plural: smo putovale.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first mistake is copying the gender of the nearest noun when the verb comes AFTER the subjects: "Brat i sestra su došle" is wrong — one masculine noun makes it došli. The second is the wrong person with pronouns: "Ti i ja ste došli" — ja outranks ti, so it is smo došli. The third is treating company as a subject: "Marko je sa sestrom otišli" — the subject is Marko, so je otišao. One masculine noun is enough: Brat i sestra su došli.',
      highlight: 'Brat i sestra su došli',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Brat i sestra ___ jučer iz Zagreba."',
          options: ['je došla', 'su došle', 'su došli', 'je došlo'],
          correct: 2,
          explanation:
            'One masculine subject (brat) gives the masculine plural: su došli. The feminine plural needs every subject to be feminine.',
        },
        {
          q: 'Complete: "Majka i kći ___ na tržnicu."',
          options: ['su otišle', 'su otišli', 'je otišao', 'su otišla'],
          correct: 0,
          explanation:
            'Both subjects are feminine, so the participle is feminine plural: su otišle.',
        },
        {
          q: 'Marko says to Ivan: "Ti i ja ___ prvi."',
          options: ['ste stigli', 'su stigli', 'smo stigli', 'je stigao'],
          correct: 2,
          explanation:
            'ja outranks ti, so ti i ja is mi and the verb is smo. Two men: masculine plural stigli.',
        },
        {
          q: 'Complete: "Ana je sa sestrom ___ u Split."',
          options: ['otputovao', 'otputovala', 'otputovalo', 'otputovali'],
          correct: 1,
          explanation:
            'sa sestrom is company in the instrumental, not a second subject. The verb agrees with Ana: je otputovala.',
        },
        {
          q: 'What does the standard grammar say about "Došla je majka i otac"?',
          options: [
            'It is wrong: two subjects always need su došli',
            'It must be Došlo je',
            'It is accepted only in poetry',
            'It is accepted: a verb placed first may agree with the nearest subject, and Došli su majka i otac is also correct',
          ],
          correct: 3,
          explanation:
            'When the predicate comes first, agreement with the nearest subject is allowed, and the plural is always correct too.',
        },
        {
          q: 'Complete: "Selo i grad ___ novom cestom."',
          options: ['su povezane', 'su povezani', 'je povezan', 'je povezano'],
          correct: 1,
          explanation: 'grad is masculine, so the predicate is masculine plural: su povezani.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Agreement with Several Subjects — Key Takeaways',
      points: [
        'One masculine subject makes the predicate masculine plural: Brat i sestra su došli',
        'Feminine plural only when every subject is feminine: Majka i kći su otišle',
        'Feminine + neuter takes the masculine plural; all-neuter usually the neuter plural',
        'ja outranks ti, ti outranks a third person: ti i ja smo, ti i on ste',
        'A verb placed first may be plural or agree with the nearest subject',
        's + instrumental is company, not a second subject: Marko je sa sestrom otišao',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 23 · Causal and consequential clauses
// ─────────────────────────────────────────────────────────
const CAUSE_CONSEQUENCE_CLAUSES = {
  id: 'cause-consequence-clauses',
  title: 'Because, and So',
  subtitle: 'jer, budući da, kako · tako da, toliko … da, pa, te',
  icon: '🔗',
  level: 'C1',
  duration: '~7 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'Two Sides of One Link',
      body: 'A cause answers "why?" and a consequence answers "with what result?". They describe the same link from opposite ends: Ostali smo kod kuće jer je padala kiša — Padala je kiša pa smo ostali kod kuće. At C1 the point is choosing the connector that fits the position, the register and the punctuation, and knowing which connectors cannot open a sentence.',
      icon: '🔗',
    },
    {
      type: 'table',
      title: 'Causal Connectors (uzročne rečenice)',
      headers: ['Connector', 'Where', 'Example'],
      rows: [
        ['jer', 'after the main clause', 'Ostali smo kod kuće jer je padala kiša.'],
        ['zato što', 'before or after', 'Zato što je kasnio, propustio je vlak.'],
        ['budući da', 'usually first', 'Budući da je bolestan, neće doći.'],
        ['kako', 'first only, formal', 'Kako nije bilo autobusa, išli smo pješice.'],
        [
          's obzirom na to da',
          'usually first, formal',
          'S obzirom na to da je rok prošao, zahtjev je odbijen.',
        ],
      ],
    },
    {
      type: 'table',
      title: 'Consequential Connectors (posljedične rečenice)',
      headers: ['Connector', 'Meaning', 'Example'],
      rows: [
        ['tako da', 'so that, with the result', 'Promet je stajao tako da smo zakasnili.'],
        ['tako / toliko … da', 'so … that', 'Bilo je tako hladno da se jezero zaledilo.'],
        ['pa', 'and so', 'Bio sam umoran pa sam rano legao.'],
        ['te', 'and so (formal)', 'Cesta je zatvorena te je promet preusmjeren.'],
      ],
    },
    {
      type: 'rule',
      title: 'Jer Follows, Budući Da and Kako Lead',
      body: 'A jer clause follows the main clause: Ostali smo kod kuće jer je padala kiša. To put the cause first, use budući da, zato što, kako or s obzirom na to da: Budući da je padala kiša, ostali smo kod kuće. Kako in this meaning must open the sentence; after the main clause it reads as manner ("how"). S obzirom na to da is formal, and the shortened "obzirom da" is not standard.',
      highlight: 'Budući da je padala kiša, ostali smo kod kuće.',
    },
    {
      type: 'rule',
      title: 'Pošto Means After',
      body: 'In careful standard Croatian, pošto is a time conjunction: Pošto je ručao, legao je = after he had lunch, he lay down. In everyday speech pošto is also used for a cause (Pošto nemam vremena, ne mogu doći), but language handbooks recommend budući da or jer for that meaning. In writing, keep pošto for time.',
      highlight: 'Pošto je ručao, legao je.',
    },
    {
      type: 'rule',
      title: 'The Result Is a Fact',
      body: 'A consequence clause states what actually happened, so it takes an ordinary indicative: Toliko je radio da se razbolio. Tako and toliko in the main clause set up the degree: tako with an adjective or adverb (tako hladno, tako brzo), toliko with a quantity or a verb (toliko ljudi, toliko je radio). Pa and te link two main clauses: Bio sam umoran pa sam legao. Te belongs to formal and written style.',
      highlight: 'Toliko je radio da se razbolio.',
    },
    {
      type: 'rule',
      title: 'Commas',
      body: 'When the dependent clause comes first, a comma separates it from the main clause: Budući da je padala kiša, ostali smo kod kuće. When the main clause comes first, no comma is needed: Ostali smo kod kuće jer je padala kiša. No comma goes before pa or te when they join two clauses: Bio sam umoran pa sam legao. Adverbs such as zato, stoga and dakle that open a second main clause stand after a comma: Padala je kiša, zato smo ostali kod kuće.',
      highlight: 'Budući da je padala kiša, ostali smo kod kuće.',
    },
    {
      type: 'example',
      title: 'Cause and Consequence in Use',
      items: [
        {
          hr: 'Ostali smo cijeli vikend kod kuće jer je bura zatvorila most prema otoku.',
          en: 'We stayed at home the whole weekend because the bora closed the bridge to the island.',
          note: 'jer after the main clause, no comma',
        },
        {
          hr: 'Budući da nitko nije znao put, zaustavili smo se i pitali u selu.',
          en: 'Since nobody knew the way, we stopped and asked in the village.',
          note: 'budući da first, comma after the clause',
        },
        {
          hr: 'Kako nije bilo ni autobusa ni taksija, do hotela smo išli pješice.',
          en: 'As there was neither a bus nor a taxi, we walked to the hotel.',
          note: 'causal kako, which must open the sentence',
        },
        {
          hr: 'S obzirom na to da je rok za prijavu istekao, vaš zahtjev nije moguće razmotriti.',
          en: 'Given that the application deadline has passed, your request cannot be considered.',
          note: 'a formal cause in an official letter',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Bilo je tako hladno da se jezero kod Trakošćana zaledilo do proljeća.',
          en: 'It was so cold that the lake near Trakošćan froze until spring.',
          note: 'tako … da with an adjective, the result as a fact',
        },
        {
          hr: 'Na koncert je došlo toliko ljudi da su mnogi ostali stajati vani.',
          en: 'So many people came to the concert that many had to stand outside.',
          note: 'toliko … da with a quantity',
        },
        {
          hr: 'Promet je na autocesti stajao dva sata tako da smo zakasnili na krštenje.',
          en: 'Traffic on the motorway stood still for two hours, so we were late for the christening.',
          note: 'tako da — with the result that',
        },
        {
          hr: 'Cesta prema Gospiću zatvorena je zbog snijega te je promet preusmjeren.',
          en: 'The road to Gospić is closed because of snow, and traffic has therefore been diverted.',
          note: 'te — formal, no comma before it',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which connector introduces a CONSEQUENCE?',
      options: ['budući da', 'jer', 'tako da', 'kako'],
      correct: 2,
      explanation: 'tako da states the result. budući da, jer and causal kako give the cause.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'In careful written standard, "Pošto je ručao, legao je" means:',
      options: [
        'Because he had lunch, he lay down.',
        'After he had lunch, he lay down.',
        'So that he could have lunch, he lay down.',
        'Although he had lunch, he lay down.',
      ],
      correct: 1,
      explanation:
        'In the careful standard pošto is temporal: after. For a cause, handbooks recommend budući da or jer.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first mistake is opening a sentence with jer: "Jer je padala kiša, ostali smo kod kuće" — move the cause after the main clause, or open with budući da. The second is the clipped "obzirom da": the standard form is s obzirom na to da. The third is a missing comma after a fronted clause: "Budući da je padala kiša ostali smo kod kuće" needs a comma after kiša.',
      highlight: 's obzirom na to da',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "___ je bio bolestan, nije došao na posao."',
          options: ['Jer', 'Budući da', 'Tako da', 'Pa'],
          correct: 1,
          explanation:
            'A cause placed first is introduced by budući da (or zato što, kako). Jer follows the main clause; tako da and pa give a consequence.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'Budući da je padala kiša ostali smo kod kuće.',
            'Budući da, je padala kiša ostali smo kod kuće.',
            'Budući, da je padala kiša, ostali smo kod kuće.',
            'Budući da je padala kiša, ostali smo kod kuće.',
          ],
          correct: 3,
          explanation:
            'A dependent clause placed before the main clause is closed with a comma; budući da is one connector and is never split by a comma.',
        },
        {
          q: 'Which connector introduces a CONSEQUENCE?',
          options: ['budući da', 'jer', 'tako da', 'kako'],
          correct: 2,
          explanation: 'tako da states the result; the others give the cause.',
        },
        {
          q: 'In careful written standard, what does pošto mean in "Pošto smo večerali, izašli smo u šetnju"?',
          options: ['after', 'because', 'so that', 'although'],
          correct: 0,
          explanation:
            'pošto is a time conjunction in the careful standard: after we had dinner, we went for a walk.',
        },
        {
          q: 'Complete: "Bilo je tako hladno ___ se jezero zaledilo."',
          options: ['jer', 'da', 'kako bi', 'budući da'],
          correct: 1,
          explanation: 'tako … da sets up a result: so cold that the lake froze.',
        },
        {
          q: 'Which sentence is NOT standard?',
          options: [
            'Ostali smo kod kuće jer je padala kiša.',
            'Jer je padala kiša, ostali smo kod kuće.',
            'Zato što je padala kiša, ostali smo kod kuće.',
            'Kako je padala kiša, ostali smo kod kuće.',
          ],
          correct: 1,
          explanation:
            'A jer clause follows the main clause. To put the cause first, use zato što, budući da or kako.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Cause and Consequence — Key Takeaways',
      points: [
        'Cause: jer (after the main clause), zato što, budući da, kako, s obzirom na to da',
        'Causal kako and budući da open the sentence; jer does not',
        'Pošto in careful standard means after; for a cause use budući da or jer',
        'Consequence: tako da, tako / toliko … da, pa, te — with an ordinary indicative',
        'Comma after a fronted dependent clause; no comma before pa or te',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 26 · Ethnonyms and place adjectives
// ─────────────────────────────────────────────────────────
const ETHNONYMS = {
  id: 'ethnonyms',
  title: 'Zagrepčanin, Splićanka, Riječani',
  subtitle: 'Naming the people of a place, and the adjective from it',
  icon: '🏙️',
  level: 'C1',
  duration: '~7 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'Who Lives Where',
      body: 'Croatian rarely says "a man from Split"; it says Splićanin. Every town has a name for its people (etnik, stanovničko ime) and an adjective (ktetik): Zagreb gives Zagrepčanin, Zagrepčanka and zagrebački. The forms follow a few suffixes and the sound changes you already know — but some towns have their own traditional forms, and those are worth learning one by one.',
      icon: '🏙️',
    },
    {
      type: 'table',
      title: 'Croatian Towns',
      headers: ['Place', 'Man', 'Woman', 'Adjective'],
      rows: [
        ['Zagreb', 'Zagrepčanin', 'Zagrepčanka', 'zagrebački'],
        ['Split', 'Splićanin', 'Splićanka', 'splitski'],
        ['Rijeka', 'Riječanin', 'Riječanka', 'riječki'],
        ['Osijek', 'Osječanin', 'Osječanka', 'osječki'],
        ['Zadar', 'Zadranin', 'Zadranka', 'zadarski'],
        ['Pula', 'Puljanin', 'Puljanka', 'pulski'],
        ['Šibenik', 'Šibenčanin', 'Šibenčanka', 'šibenski'],
        ['Dubrovnik', 'Dubrovčanin', 'Dubrovkinja', 'dubrovački'],
        ['Varaždin', 'Varaždinac', 'Varaždinka', 'varaždinski'],
        ['Vukovar', 'Vukovarac', 'Vukovarka', 'vukovarski'],
      ],
    },
    {
      type: 'rule',
      title: 'The -anin Family',
      body: 'Most towns take -anin (often as -janin or -čanin) for a man and -anka for a woman. In the plural the -in disappears: Zagrepčanin → Zagrepčani, Splićanin → Splićani, genitive plural Zagrepčana. The adjective is usually -ski or -ački: splitski, zagrebački. A Dubrovnik woman is traditionally a Dubrovkinja; Dubrovčanka is also in use.',
      highlight: 'Zagrepčanin → Zagrepčani',
    },
    {
      type: 'rule',
      title: 'The Sound Changes Do the Work',
      body: 'The suffix triggers changes you know from elsewhere. Voicing: b before č becomes p, so Zagreb gives Zagrepčanin. Palatalisation: k becomes č, so Osijek gives Osječanin and Rijeka gives Riječanin. Jotation: t + j becomes ć and l + j becomes lj, so Split gives Splićanin and Pula gives Puljanin. A fleeting a drops out: Zadar gives Zadranin. And a long ije shortens to je: Rijeka → Riječanin, Osijek → osječki.',
      highlight: 'Zagreb → Zagrepčanin',
    },
    {
      type: 'rule',
      title: 'The -ac Family',
      body: 'Some towns take -ac for a man and -ka for a woman: Varaždinac and Varaždinka, Vukovarac and Vukovarka, Samoborac and Samoborka. The a of -ac is fleeting, so the plural is Varaždinci and the genitive singular Varaždinca. This is also the commonest pattern for nations: Amerikanac, Španjolac, Slovenac.',
      highlight: 'Varaždinac → Varaždinci',
    },
    {
      type: 'table',
      title: 'Nations and Countries',
      headers: ['Country', 'Man', 'Woman', 'Adjective / language'],
      rows: [
        ['Hrvatska', 'Hrvat', 'Hrvatica', 'hrvatski'],
        ['Njemačka', 'Nijemac', 'Njemica', 'njemački'],
        ['Francuska', 'Francuz', 'Francuskinja', 'francuski'],
        ['Engleska', 'Englez', 'Engleskinja', 'engleski'],
        ['Italija', 'Talijan', 'Talijanka', 'talijanski'],
        ['Španjolska', 'Španjolac', 'Španjolka', 'španjolski'],
        ['Mađarska', 'Mađar', 'Mađarica', 'mađarski'],
        ['Kanada', 'Kanađanin', 'Kanađanka', 'kanadski'],
      ],
    },
    {
      type: 'rule',
      title: 'Capital for People, Small Letter for Adjectives',
      body: 'The name of an inhabitant or a nation is a proper name and takes a capital letter: Zagrepčanin, Splićanka, Hrvat, Njemica. The adjective and the name of a language take a small letter: zagrebački tramvaj, splitska riva, hrvatski jezik, govori njemački. Only at the start of a name does the adjective rise to a capital: Splitsko-dalmatinska županija.',
      highlight: 'On je Riječanin i radi u riječkoj luci.',
    },
    {
      type: 'example',
      title: 'Ethnonyms in Use',
      items: [
        {
          hr: 'Zagrepčani se nedjeljom ujutro okupljaju na Dolcu i u kafićima oko Cvjetnog trga.',
          en: 'On Sunday mornings the people of Zagreb gather at Dolac and in the cafés around Flower Square.',
          note: 'Zagrepčani — the plural drops -in',
        },
        {
          hr: 'Moja je baka Splićanka, a djed je bio Šibenčanin, pa se doma pričalo dalmatinski.',
          en: 'My grandmother is from Split and my grandfather was from Šibenik, so at home people spoke Dalmatian dialect.',
          note: 'Splićanka with ć from t + j; Šibenčanin with č',
        },
        {
          hr: 'Svaki pravi Riječanin ponosan je na riječku luku i na Korzo.',
          en: 'Every true Rijeka man is proud of the Rijeka port and of the Korzo.',
          note: 'Riječanin with a capital; riječki with a small letter',
        },
        {
          hr: 'Osječani kažu da je osječki kulen najbolji u Slavoniji.',
          en: 'The people of Osijek say that Osijek kulen is the best in Slavonia.',
          note: 'k → č and ije → je in Osječani and osječki',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Na zadarskoj rivi Zadrani i turisti zajedno slušaju morske orgulje.',
          en: 'On the Zadar waterfront locals and tourists listen to the sea organ together.',
          note: 'Zadrani — the fleeting a of Zadar drops',
        },
        {
          hr: 'Puljanka koju sam upoznao u Areni studira talijanski u Trstu.',
          en: 'The woman from Pula I met at the Arena studies Italian in Trieste.',
          note: 'Puljanka with lj from l + j; the language with a small letter',
        },
        {
          hr: 'Varaždinci krajem ljeta pozivaju goste na Špancirfest u starom gradu.',
          en: 'At the end of every summer the people of Varaždin invite guests to Špancirfest in the old town.',
          note: 'the -ac family: the plural Varaždinci',
        },
        {
          hr: 'Ona je Hrvatica rođena u Kanadi, a muž joj je Kanađanin koji uči hrvatski.',
          en: 'She is a Croatian woman born in Canada, and her husband is a Canadian who is learning Croatian.',
          note: 'nations with a capital, the language with a small letter',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'A man from Split is a ___.',
      options: ['Splitanin', 'Splićanin', 'Splitčanin', 'Splićan'],
      correct: 1,
      explanation: 't + j gives ć: Split → Splićanin, and a woman is a Splićanka.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is spelled correctly?',
      options: [
        'Ona je hrvatica i govori Njemački.',
        'Ona je Hrvatica i govori Njemački.',
        'Ona je hrvatica i govori njemački.',
        'Ona je Hrvatica i govori njemački.',
      ],
      correct: 3,
      explanation:
        'The nation takes a capital (Hrvatica); the language takes a small letter (njemački).',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first mistake is building the name on the bare town name without the sound change: "Splitanin", "Zagrebčanin". The suffix changes the consonant before it, so it is Splićanin and Zagrepčanin. The second is keeping -in in the plural: "Zagrepčanini" — the plural is Zagrepčani. The third is capitalising the adjective or the language: "Zagrebački tramvaj", "govori Hrvatski" — only the people are capitalised: Zagrepčanin, but zagrebački tramvaj and hrvatski jezik.',
      highlight: 'Zagrepčani',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'A man from Split is a ___.',
          options: ['Splitanin', 'Splićanin', 'Splitčanin', 'Splićan'],
          correct: 1,
          explanation: 'The suffix -janin turns t + j into ć: Splićanin.',
        },
        {
          q: 'The adjective from Osijek is ___.',
          options: ['osijekski', 'Osječki', 'osiječki', 'osječki'],
          correct: 3,
          explanation:
            'k becomes č and ije shortens to je: osječki, with a small letter because it is an adjective.',
        },
        {
          q: 'The plural of Zagrepčanin is ___.',
          options: ['Zagrepčanini', 'Zagrepčani', 'Zagrebčani', 'Zagrepčanci'],
          correct: 1,
          explanation: 'The -in of -anin drops in the plural: Zagrepčani. The b stays p before č.',
        },
        {
          q: 'Which sentence is spelled correctly?',
          options: [
            'On je riječanin i radi u riječkoj luci.',
            'On je Riječanin i radi u riječkoj luci.',
            'On je Riječanin i radi u Riječkoj luci.',
            'On je riječanin i radi u Riječkoj luci.',
          ],
          correct: 1,
          explanation:
            'The inhabitant takes a capital (Riječanin); the adjective takes a small letter (riječkoj luci).',
        },
        {
          q: 'A woman from Pula is a ___.',
          options: ['Pulanka', 'Pulka', 'Puljanka', 'Puljkinja'],
          correct: 2,
          explanation: 'l + j gives lj: Puljanin, Puljanka.',
        },
        {
          q: 'Why does Zagreb give Zagrepčanin with a p?',
          options: [
            'It is a spelling exception with no rule behind it',
            'b becomes voiceless p before the voiceless č',
            'The old name of the city was Zagrep',
            'p marks the masculine form',
          ],
          correct: 1,
          explanation:
            'Voicing assimilation: a voiced b before voiceless č becomes p, and Croatian writes the change.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Ethnonyms — Key Takeaways',
      points: [
        '-anin / -anka: Zagrepčanin, Splićanka, Riječanin; plural drops -in: Zagrepčani',
        '-ac / -ka: Varaždinac, Varaždinka; plural Varaždinci',
        'Sound changes: Zagrepčanin (b → p), Osječanin (k → č), Splićanin (t + j → ć), Puljanin (l + j → lj)',
        'Some forms are traditional: Dubrovkinja, Francuskinja, Njemica',
        'Inhabitants and nations with a capital; adjectives and languages with a small letter',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 27 · The genitive after a noun
// ─────────────────────────────────────────────────────────
const OBJECTIVE_GENITIVE = {
  id: 'objective-genitive',
  title: 'Whose Reading? The Genitive After a Noun',
  subtitle: 'dolazak gostiju · zaštita okoliša · kuća moga oca · čovjek velikog srca',
  icon: '🔎',
  level: 'C1',
  duration: '~7 min',
  color: '#be123c',
  bg: '#fff1f2',
  slides: [
    {
      type: 'intro',
      title: 'One Case, Several Relations',
      body: 'A genitive that follows a noun can mean very different things. In "dolazak gostiju" the guests do the arriving; in "zaštita okoliša" the environment is what gets protected; in "kuća moga oca" the father owns the house; in "čovjek velikog srca" the genitive describes the man. Written Croatian uses these phrases constantly, so reading them correctly — and building them — is a C1 skill.',
      icon: '🔎',
    },
    {
      type: 'table',
      title: 'What the Genitive Can Mean',
      headers: ['Kind', 'Question', 'Example'],
      rows: [
        ['subjective', 'who does it?', 'dolazak gostiju — gosti dolaze'],
        ['objective', 'what is it done to?', 'zaštita okoliša — netko štiti okoliš'],
        ['possessive', 'whose is it?', 'kuća moga oca'],
        ['of quality', 'what kind?', 'čovjek velikog srca'],
        ['explanatory', 'what does it consist of?', 'osjećaj straha, pitanje časti'],
      ],
    },
    {
      type: 'rule',
      title: 'Subjective and Objective',
      body: 'Behind a verbal noun stands a verb, and the genitive takes one of its roles. With an intransitive verb the genitive is the doer: dolazak gostiju (gosti dolaze), pad cijena (cijene padaju), rast plaća. With a transitive verb it is usually the thing affected: čitanje knjige (netko čita knjigu), zaštita okoliša, osvajanje vrha, izgradnja mosta. To find the role, turn the phrase back into a sentence.',
      highlight: 'zaštita okoliša — netko štiti okoliš',
    },
    {
      type: 'rule',
      title: 'When Both Readings Are Possible',
      body: 'Some phrases are ambiguous: ljubav majke can be the mother\'s love for someone or someone\'s love for the mother. When you mean the object, say so with a preposition: ljubav prema majci, briga za djecu, kontrola nad cijenama. When you mean the doer, a possessive adjective often helps: majčina ljubav. And avoid stacking genitives — "pitanje zaštite okoliša grada" is hard to read; a verb clause is clearer.',
      highlight: 'ljubav prema majci',
    },
    {
      type: 'rule',
      title: 'Očeva Kuća or Kuća Moga Oca',
      body: 'When the owner is a single noun or a first name, Croatian prefers a possessive adjective: očeva kuća, Anina knjiga, Markov auto. When the owner has a word of its own — an adjective, a pronoun, a surname — use the genitive after the noun: kuća moga oca, knjiga Ane Horvat, auto našeg susjeda. The possessive adjective agrees with the thing owned: Anin auto, Anina knjiga, Anino pismo.',
      highlight: 'očeva kuća / kuća moga oca',
    },
    {
      type: 'rule',
      title: 'Quality, Explanation and Apposition',
      body: 'The genitive of quality needs an adjective: čovjek velikog srca, žena plave kose. The explanatory genitive says what the noun consists of: osjećaj straha, pitanje časti, problem nezaposlenosti. But a proper name after a common noun is NOT a genitive — it is in apposition and takes the same case: grad Zagreb, u gradu Zagrebu, na otoku Krku, uz rijeku Savu.',
      highlight: 'u gradu Zagrebu',
    },
    {
      type: 'example',
      title: 'The Genitive in Use',
      items: [
        {
          hr: 'Zbog dolaska gostiju iz Kanade cijela je obitelj tjedan dana čistila kuću.',
          en: 'Because of the guests arriving from Canada, the whole family cleaned the house for a week.',
          note: 'subjective: the guests arrive',
        },
        {
          hr: 'Zaštita okoliša jedna je od glavnih tema ovogodišnjih lokalnih izbora.',
          en: 'Environmental protection is one of the main topics of this year’s local elections.',
          note: 'objective: someone protects the environment',
        },
        {
          hr: 'Osvajanje vrha Dinare u snijegu zahtijeva iskustvo i dobru opremu.',
          en: 'Reaching the summit of Dinara in snow requires experience and good equipment.',
          note: 'objective: someone conquers the summit',
        },
        {
          hr: 'Nagli pad cijena nekretnina iznenadio je i same agente.',
          en: 'The sudden fall in property prices surprised even the agents themselves.',
          note: 'subjective: prices fall',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Ljeta smo provodili u kući moga oca, a zime u maminu stanu u Zagrebu.',
          en: 'We spent summers in my father’s house and winters in Mum’s flat in Zagreb.',
          note: 'genitive for a modified owner; a possessive adjective for a single one',
        },
        {
          hr: 'Moj je djed bio čovjek velikog srca i još većeg strpljenja.',
          en: 'My grandfather was a man of great heart and even greater patience.',
          note: 'genitive of quality, each with its adjective',
        },
        {
          hr: 'Za njega je vraćanje duga bilo pitanje časti, a ne novca.',
          en: 'For him repaying the debt was a matter of honour, not money.',
          note: 'explanatory genitive: pitanje časti',
        },
        {
          hr: 'Rođen sam u gradu Zagrebu, ali djetinjstvo sam proveo na otoku Krku.',
          en: 'I was born in the city of Zagreb, but I spent my childhood on the island of Krk.',
          note: 'apposition: the name takes the same case as the noun before it',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'In "izgradnja mosta", what is most?',
      options: [
        'the builder',
        'what is built',
        'the place of building',
        'a quality of the building',
      ],
      correct: 1,
      explanation: 'Turn it back into a sentence: netko gradi most. The genitive is the object.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Živim u gradu ___."',
      options: ['Zagreba', 'Zagreb', 'Zagrebu', 'Zagrebom'],
      correct: 2,
      explanation:
        'The name is in apposition, not a genitive: it takes the same case as gradu. U gradu Zagrebu.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first mistake is putting a town name into the genitive after grad: "u gradu Zagreba" — the name stands in apposition, so it is u gradu Zagrebu. The second is a genitive of quality without its adjective: "čovjek srca" says nothing; it needs čovjek velikog srca or plemenitog srca. The third is an ambiguous genitive where the object is meant: write ljubav prema majci rather than ljubav majke.',
      highlight: 'u gradu Zagrebu',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'In "zaštita okoliša", what is okoliš?',
          options: [
            'the one who protects',
            'what is protected',
            'the owner of the protection',
            'a quality',
          ],
          correct: 1,
          explanation:
            'netko štiti okoliš: the genitive is the object of the verb behind the noun.',
        },
        {
          q: 'In "dolazak gostiju", what are the guests?',
          options: ['what is brought', 'the owners', 'the ones who arrive', 'a measure'],
          correct: 2,
          explanation: 'gosti dolaze: dolaziti has no object, so the genitive is the doer.',
        },
        {
          q: 'Complete: "Ovo je kuća ___." (my father’s)',
          options: ['moj otac', 'moga oca', 'mojem ocu', 'moje očevo'],
          correct: 1,
          explanation: 'An owner with a pronoun of its own stands in the genitive: kuća moga oca.',
        },
        {
          q: 'Which phrase makes the OBJECT reading clear?',
          options: ['ljubav majke', 'majčina ljubav', 'ljubav prema majci', 'majka ljubavi'],
          correct: 2,
          explanation:
            'prema + locative says who is loved. ljubav majke is ambiguous, and majčina ljubav means the mother loves.',
        },
        {
          q: 'Complete: "Djetinjstvo sam proveo na otoku ___."',
          options: ['Krka', 'Krk', 'Krku', 'Krkom'],
          correct: 2,
          explanation:
            'The name is in apposition and takes the locative like otoku: na otoku Krku.',
        },
        {
          q: 'Which is a genitive of quality?',
          options: ['čovjek velikog srca', 'srce čovjeka', 'čovjek bez srca', 'srce za čovjeka'],
          correct: 0,
          explanation:
            'A genitive with its adjective describes the person: čovjek velikog srca. bez srca is a genitive after a preposition.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'The Genitive After a Noun — Key Takeaways',
      points: [
        'Turn the phrase into a sentence to find the role: dolazak gostiju (doer), zaštita okoliša (object)',
        'Make an object explicit with prema, za or nad: ljubav prema majci',
        'Single owner → possessive adjective (očeva kuća); modified owner → genitive (kuća moga oca)',
        'Genitive of quality needs an adjective: čovjek velikog srca',
        'A name after grad, otok, rijeka is in apposition: u gradu Zagrebu, na otoku Krku',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 28 · Capital letters in names and on the map
// ─────────────────────────────────────────────────────────
const CAPITALS_NAMES_GEOGRAPHY = {
  id: 'capitals-names-geography',
  title: 'Capital Letters in Names and on the Map',
  subtitle: 'Karlo Veliki · Slavonski Brod · Jadransko more · Hrvatsko zagorje',
  icon: '🗺️',
  level: 'C1',
  duration: '~7 min',
  color: '#15803d',
  bg: '#f0fdf4',
  slides: [
    {
      type: 'intro',
      title: 'Which Words Get a Capital',
      body: 'English capitalises every important word of a name: the Adriatic Sea, the Plitvice Lakes. Croatian does not. Hrvatski pravopis divides names into groups: in personal names and in the names of towns and states every word is capitalised; in other geographic names only the first word and any word that is itself a name. Knowing which group a name belongs to is the whole rule.',
      icon: '🗺️',
    },
    {
      type: 'table',
      title: 'The Groups',
      headers: ['Kind of name', 'Rule', 'Examples'],
      rows: [
        [
          'people, nicknames',
          'every part capital',
          'Ivan Gundulić, Karlo Veliki, Petar Krešimir IV.',
        ],
        ['titles before a name', 'small letter', 'kralj Tomislav, ban Josip Jelačić, sveti Vlaho'],
        [
          'towns and villages',
          'every word, except prepositions and conjunctions',
          'Slavonski Brod, Biograd na Moru, Vela Luka',
        ],
        ['states', 'every word, except conjunctions', 'Republika Hrvatska, Bosna i Hercegovina'],
        [
          'other geographic names',
          'first word, then only names',
          'Jadransko more, Plitvička jezera, Hrvatsko zagorje',
        ],
        [
          'a common noun before a name',
          'small common noun',
          'rijeka Sava, otok Krk, planina Velebit',
        ],
      ],
    },
    {
      type: 'rule',
      title: 'People, Nicknames and Rulers',
      body: 'Every part of a personal name is capitalised, and so is a nickname that has become part of a name: Karlo Veliki, Ludovik Veliki, Nikola Šubić Zrinski. A ruler’s number is a Roman numeral with a full stop, because it is an ordinal: Petar Krešimir IV., Ivan Pavao II. Titles and the word sveti before a name take a small letter: kralj Zvonimir, papa Ivan Pavao II., sveti Vlaho.',
      highlight: 'Petar Krešimir IV.',
    },
    {
      type: 'rule',
      title: 'Towns and States: Every Word',
      body: 'In the name of a settlement every word is capitalised except prepositions and conjunctions: Slavonski Brod, Novi Vinodolski, Stari Grad, Vela Luka, Sveti Ivan Zelina, Biograd na Moru. The official names of states work the same way: Republika Hrvatska, Sjedinjene Američke Države, Bosna i Hercegovina.',
      highlight: 'Biograd na Moru',
    },
    {
      type: 'rule',
      title: 'Everything Else: Only the First Word',
      body: 'Seas, lakes, rivers, mountains, islands, regions and parts of the world capitalise only their first word — and any later word that is itself a name: Jadransko more, Plitvička jezera, Hrvatsko zagorje, Gorski kotar, Dugi otok, Bliski istok. Sjeverna Amerika keeps Amerika capital because Amerika is a name. Counties follow the first-word rule too: Splitsko-dalmatinska županija.',
      highlight: 'Hrvatsko zagorje',
    },
    {
      type: 'rule',
      title: 'Grad Zagreb and grad Zagreb',
      body: 'A common noun in front of a name keeps its small letter: grad Zagreb, rijeka Sava, otok Krk, planina Velebit. When the whole phrase is the official name of a unit, the first word is capitalised: Grad Zagreb is the administrative unit, as in "Gradska skupština Grada Zagreba". In everyday writing about the city itself, write grad Zagreb.',
      highlight: 'grad Zagreb',
    },
    {
      type: 'example',
      title: 'Names in Use',
      items: [
        {
          hr: 'Petar Krešimir IV. proširio je vlast hrvatskoga kraljevstva na dalmatinske gradove.',
          en: 'Petar Krešimir IV extended the rule of the Croatian kingdom to the Dalmatian towns.',
          note: 'Roman numeral with a full stop; adjectives with a small letter',
        },
        {
          hr: 'Kip kralja Tomislava stoji na Trgu kralja Tomislava, nasuprot glavnom kolodvoru u Zagrebu.',
          en: 'The statue of King Tomislav stands on King Tomislav Square, opposite the main station in Zagreb.',
          note: 'the title kralj with a small letter, even inside the name of a square',
        },
        {
          hr: 'Svake godine Dubrovčani na Stradunu slave svetoga Vlaha, zaštitnika grada.',
          en: 'Every year the people of Dubrovnik celebrate St Blaise, the city’s patron, on the Stradun.',
          note: 'sveti before a saint’s name with a small letter',
        },
        {
          hr: 'Iz Biograda na Moru svakoga jutra polaze izletnički brodovi prema Kornatima.',
          en: 'Every morning excursion boats leave Biograd na Moru for the Kornati.',
          note: 'a settlement: every word but the preposition capitalised',
        },
      ],
    },
    {
      type: 'example',
      title: 'More Examples in Context',
      items: [
        {
          hr: 'Ljeto provodimo na Dugom otoku, a zimu u Gorskom kotaru.',
          en: 'We spend the summer on Dugi otok and the winter in Gorski kotar.',
          note: 'island and region: only the first word capitalised',
        },
        {
          hr: 'Plitvička jezera najstariji su nacionalni park u Republici Hrvatskoj.',
          en: 'The Plitvice Lakes are the oldest national park in the Republic of Croatia.',
          note: 'a lake name against a state name',
        },
        {
          hr: 'Hrvatsko zagorje poznato je po dvorcima, brežuljcima i štrukljima.',
          en: 'Hrvatsko zagorje is known for its castles, hills and štrukli.',
          note: 'a region: zagorje with a small letter',
        },
        {
          hr: 'Moji su se pradjedovi iz Slavonskog Broda iselili u Sjevernu Ameriku.',
          en: 'My great-grandfathers emigrated from Slavonski Brod to North America.',
          note: 'Brod capital in a town name; Amerika capital as a name',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Which is spelled correctly?',
      options: ['Hrvatsko Zagorje', 'hrvatsko zagorje', 'Hrvatsko zagorje', 'Hrvatsko-zagorje'],
      correct: 2,
      explanation: 'A region capitalises only its first word: Hrvatsko zagorje.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which is spelled correctly?',
      options: ['Slavonski brod', 'Slavonski Brod', 'slavonski Brod', 'Slavonski-Brod'],
      correct: 1,
      explanation: 'A town capitalises every word: Slavonski Brod.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first mistake is English-style capitals on every word of a geographic name: "Jadransko More", "Plitvička Jezera", "Hrvatsko Zagorje". Only the first word is capitalised: Jadransko more. The second is the opposite mistake with towns: "Slavonski brod", "Vela luka" — a town capitalises every word. The third is a capital on a title: "Kralj Tomislav" in the middle of a sentence — write kralj Tomislav.',
      highlight: 'Jadransko more',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'The region north of Zagreb. Which is spelled correctly?',
          options: ['Hrvatsko Zagorje', 'hrvatsko zagorje', 'Hrvatsko zagorje', 'HRVATSKO zagorje'],
          correct: 2,
          explanation: 'A region capitalises only its first word.',
        },
        {
          q: 'The town on the Sava in Slavonia. Which is spelled correctly?',
          options: ['Slavonski brod', 'Slavonski Brod', 'slavonski Brod', 'Slavonski-Brod'],
          correct: 1,
          explanation: 'A settlement capitalises every word.',
        },
        {
          q: 'The sea off the Croatian coast. Which is spelled correctly?',
          options: ['Jadransko more', 'Jadransko More', 'jadransko more', 'Jadransko-more'],
          correct: 0,
          explanation: 'A sea capitalises only its first word.',
        },
        {
          q: 'Complete: "Na trgu stoji spomenik ___."',
          options: ['Kralju Tomislavu', 'kralju Tomislavu', 'kralju tomislavu', 'Kralju tomislavu'],
          correct: 1,
          explanation: 'The title takes a small letter; the name a capital.',
        },
        {
          q: 'The coastal town near Zadar. Which is spelled correctly?',
          options: ['Biograd Na Moru', 'Biograd na moru', 'Biograd na Moru', 'biograd na Moru'],
          correct: 2,
          explanation: 'A settlement capitalises every word except the preposition.',
        },
        {
          q: 'The continent. Which is spelled correctly?',
          options: ['Sjeverna amerika', 'sjeverna Amerika', 'SJEVERNA Amerika', 'Sjeverna Amerika'],
          correct: 3,
          explanation: 'The first word is capitalised, and Amerika is a name in its own right.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Capital Letters in Names — Key Takeaways',
      points: [
        'People and nicknames: every part capital — Karlo Veliki, Petar Krešimir IV.',
        'Titles and sveti before a name: small letter — kralj Tomislav, sveti Vlaho',
        'Towns and states: every word but prepositions and conjunctions — Biograd na Moru, Republika Hrvatska',
        'Other geographic names: first word only, plus names — Jadransko more, Sjeverna Amerika',
        'A common noun before a name stays small: rijeka Sava, otok Krk, grad Zagreb',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsC1.js). */
export const LESSONS = [
  MULTI_SUBJECT_AGREEMENT,
  CAUSE_CONSEQUENCE_CLAUSES,
  ETHNONYMS,
  OBJECTIVE_GENITIVE,
  CAPITALS_NAMES_GEOGRAPHY,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'multi-subject-agreement': {
    worked: [
      {
        title: 'Brother and Sister',
        problem: 'Reci: "My brother and sister arrived yesterday."',
        en: 'Say: My brother and sister arrived yesterday.',
        steps: [
          {
            label: 'Count the subjects',
            text: 'Two subjects, brat and sestra, so the predicate is plural: su.',
          },
          {
            label: 'Find the gender',
            text: 'One of them is masculine, and one masculine subject is enough for the masculine plural: došli.',
          },
          {
            label: 'The attribute',
            text: 'moj stands in front of both nouns and agrees with the nearest one: moj brat i sestra.',
          },
        ],
        answer: 'Moj brat i sestra došli su jučer.',
      },
      {
        title: 'You and I',
        problem: 'Two women, Ana and Maja. Maja says: "You and I were late again."',
        en: 'Two women: You and I were late again.',
        steps: [
          {
            label: 'Person',
            text: 'ja outranks ti, so ti i ja is mi: the auxiliary is smo.',
          },
          {
            label: 'Gender',
            text: 'Both speakers are women, so the participle is feminine plural: zakasnile.',
          },
          {
            label: 'Word order',
            text: 'The clitic smo goes in second position, after the whole subject ti i ja.',
          },
        ],
        answer: 'Ti i ja smo opet zakasnile.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Otac i sin ___ cijeli dan u vrtu."',
          options: ['radila su', 'radile su', 'radili su', 'radio je'],
          correct: 2,
          hint: 'Both subjects are masculine.',
          explanation: 'Masculine subjects take the masculine plural: radili su.',
        },
        {
          q: 'Complete: "Teta i sestrična ___ božićne kolače."',
          options: ['pekle su', 'pekli su', 'peklo je', 'pekla su'],
          correct: 0,
          hint: 'Every subject is feminine.',
          explanation: 'Only feminine subjects give the feminine plural: pekle su.',
        },
        {
          q: 'Complete: "Ti i on ___ najbolji prijatelji."',
          options: ['smo', 'ste', 'su', 'si'],
          correct: 1,
          hint: 'The second person outranks the third.',
          explanation: 'ti i on is vi: ste.',
        },
        {
          q: 'Complete: "Moj brat i ja ___ blizanci."',
          options: ['ste', 'su', 'je', 'smo'],
          correct: 3,
          hint: 'The first person outranks everyone.',
          explanation: 'moj brat i ja is mi: smo.',
        },
        {
          q: 'Complete: "Petar je s prijateljima ___ na Velebit."',
          options: ['otišao', 'otišli', 'otišle', 'otišla'],
          correct: 0,
          hint: 'Who is in the nominative? The others are in the instrumental.',
          explanation:
            's prijateljima is company, not a subject; the verb agrees with Petar: je otišao.',
        },
        {
          q: 'Complete: "Tele i janje bila su ___."',
          options: ['umorne', 'umorni', 'umorna', 'umoran'],
          correct: 2,
          hint: 'Both nouns are neuter, and the participle bila already shows the gender.',
          explanation: 'All-neuter subjects usually take the neuter plural: bila su umorna.',
        },
        {
          q: 'Complete: "Lucija, Petra i Josip ___ na koncert."',
          options: ['su išle', 'je išao', 'su išli', 'su išla'],
          correct: 2,
          hint: 'Look for a single masculine name in the group.',
          explanation: 'One masculine subject decides: su išli.',
        },
        {
          q: 'Which sentence has the wrong person?',
          options: [
            'Ti i ja smo zakasnili.',
            'Ti i Marko ste zakasnili.',
            'On i ona su zakasnili.',
            'Ti i ja ste zakasnili.',
          ],
          correct: 3,
          hint: 'Check which pronoun outranks which.',
          explanation: 'ti i ja is mi, so it must be smo zakasnili.',
        },
        {
          type: 'type',
          q: 'Majka i kći su ____ na more. (otići)',
          answer: 'otišle',
          hint: 'Both subjects are feminine.',
          explanation: 'Feminine plural participle: otišle.',
        },
        {
          type: 'type',
          q: 'Brat i sestra su ____ jučer. (doći)',
          answer: 'došli',
          hint: 'One masculine subject decides the gender.',
          explanation: 'Masculine plural participle: došli.',
        },
        {
          type: 'type',
          q: 'Ti i ja ____ dobri prijatelji. (biti, present)',
          answer: 'smo',
          hint: 'Which person wins when ja is among the subjects?',
          explanation: 'ti i ja is mi: smo.',
        },
        {
          type: 'type',
          q: 'Ana i ja (two women) smo ____ zajedno u Pariz. (putovati)',
          answer: 'putovale',
          hint: 'First person plural, and both speakers are women.',
          explanation: 'Feminine plural participle: smo putovale.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Otac i kći ___ na izlet."',
        options: ['su otišli', 'su otišle', 'je otišla', 'su otišla'],
        correct: 0,
        explanation: 'otac is masculine, so the predicate is masculine plural: su otišli.',
      },
      {
        q: 'Complete: "Baka i unuka ___ kolače."',
        options: ['su pekli', 'su pekle', 'je pekao', 'je peklo'],
        correct: 1,
        explanation: 'Both subjects are feminine: su pekle.',
      },
      {
        q: 'Complete: "Ti i Ivan ___ zadnji."',
        options: ['smo došli', 'su došli', 'ste došli', 'si došao'],
        correct: 2,
        explanation: 'ti outranks Ivan, so ti i Ivan is vi: ste došli.',
      },
      {
        q: 'Complete: "Marko je s bratom ___ na utakmicu."',
        options: ['otišao', 'otišli', 'otišla', 'otišle'],
        correct: 0,
        explanation: 's bratom is company; the verb agrees with Marko: je otišao.',
      },
      {
        q: 'Complete: "Dijete i štene ___ gladna."',
        options: ['bila su', 'bile su', 'bio je', 'bila je'],
        correct: 0,
        explanation: 'Two neuter subjects usually take the neuter plural: bila su gladna.',
      },
      {
        q: 'A group of two women and one man went out. Which sentence is correct?',
        options: [
          'Ana, Marija i Ivan su izašle.',
          'Ana, Marija i Ivan je izašao.',
          'Ana, Marija i Ivan su izašla.',
          'Ana, Marija i Ivan su izašli.',
        ],
        correct: 3,
        explanation: 'One masculine subject makes the masculine plural: su izašli.',
      },
    ],
    vocab: [
      ['slaganje', 'agreement (grammar)', 'Slaganje predikata sa subjektom važno je pravilo.'],
      ['subjekt', 'subject', 'U toj rečenici su dva subjekta.'],
      ['predikat', 'predicate', 'Predikat je u muškom rodu množine.'],
      ['dvorište', 'yard, courtyard', 'Kuća i dvorište prodani su prošle godine.'],
      ['unuka', 'granddaughter', 'Baka i unuka pekle su kolače.'],
      ['štene', 'puppy', 'Dijete i štene bila su gladna.'],
      ['blizanac', 'twin', 'Moj brat i ja smo blizanci.'],
      ['poplavljen', 'flooded', 'Selo i polje bila su poplavljena.'],
    ],
  },

  'cause-consequence-clauses': {
    worked: [
      {
        title: 'One Link, Three Ways',
        problem:
          'Join "Padala je kiša." and "Ostali smo kod kuće." with jer, with budući da and with pa.',
        en: 'Join "It was raining." and "We stayed at home." three ways.',
        steps: [
          {
            label: 'jer',
            text: 'The cause follows the main clause, without a comma: Ostali smo kod kuće jer je padala kiša.',
          },
          {
            label: 'budući da',
            text: 'The cause comes first and is closed by a comma: Budući da je padala kiša, ostali smo kod kuće.',
          },
          {
            label: 'pa',
            text: 'Now the rain comes first and the staying is its consequence, with no comma before pa.',
          },
        ],
        answer:
          'Ostali smo kod kuće jer je padala kiša. Budući da je padala kiša, ostali smo kod kuće. Padala je kiša pa smo ostali kod kuće.',
      },
      {
        title: 'Time or Cause?',
        problem:
          'Rewrite for an official letter: "Pošto nemamo vaše dokumente, ne možemo obraditi zahtjev."',
        en: 'Rewrite for an official letter: Since we do not have your documents, we cannot process the request.',
        steps: [
          {
            label: 'Read the meaning',
            text: 'The sentence gives a reason, not a time, so pošto is used in its colloquial causal sense.',
          },
          {
            label: 'Choose the standard connector',
            text: 'Handbooks recommend budući da or, more formally, s obzirom na to da for a cause placed first.',
          },
          {
            label: 'Keep the comma',
            text: 'The fronted cause is closed by a comma before the main clause.',
          },
        ],
        answer: 'S obzirom na to da nemamo vaše dokumente, ne možemo obraditi zahtjev.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "___ je most bio zatvoren, na otok smo išli trajektom."',
          options: ['Kako', 'Jer', 'Pa', 'Tako da'],
          correct: 0,
          hint: 'A formal causal connector that must open the sentence.',
          explanation: 'Causal kako opens the sentence; jer cannot.',
        },
        {
          q: 'Complete: "Kiša je padala cijeli dan ___ je utakmica odgođena."',
          options: ['budući da', 'tako da', 'jer', 'kako'],
          correct: 1,
          hint: 'The second clause is the result.',
          explanation: 'tako da — with the result that the match was postponed.',
        },
        {
          q: 'Complete in formal written style: "Cesta je zatvorena ___ je promet preusmjeren."',
          options: ['jer', 'budući da', 'te', 'zato što'],
          correct: 2,
          hint: 'A formal word for "and so", with no comma before it.',
          explanation:
            'te links a formal consequence: the road is closed, and so traffic is diverted.',
        },
        {
          q: 'Which sentence is punctuated correctly?',
          options: [
            'S obzirom na to da je rok prošao zahtjev je odbijen.',
            'S obzirom na to, da je rok prošao zahtjev je odbijen.',
            'S obzirom, na to da je rok prošao, zahtjev je odbijen.',
            'S obzirom na to da je rok prošao, zahtjev je odbijen.',
          ],
          correct: 3,
          hint: 'The connector is one unit, and the fronted clause ends with a comma.',
          explanation: 'A comma closes the fronted clause; nothing interrupts s obzirom na to da.',
        },
        {
          q: 'Which is the standard form?',
          options: ['obzirom da', 's obzirom da', 's obzirom na to da', 'obzirom na to da'],
          correct: 2,
          hint: 'The full connector keeps both the preposition at the start and the pronoun.',
          explanation: 's obzirom na to da is the standard form; the clipped versions are not.',
        },
        {
          q: 'Complete: "Na koncert je došlo ___ ljudi da su mnogi stajali vani."',
          options: ['tako', 'toliko', 'kako', 'zato'],
          correct: 1,
          hint: 'A quantity of people sets up the result.',
          explanation: 'toliko with a quantity: toliko ljudi da…',
        },
        {
          q: 'Which connector gives a CAUSE?',
          options: ['tako da', 'pa', 'toliko … da', 'zato što'],
          correct: 3,
          hint: 'The cause answers "why?".',
          explanation: 'zato što gives the reason; the others give a result.',
        },
        {
          q: 'In careful written standard, which connector belongs in "___ nemam vremena, ne mogu doći"?',
          options: ['Pošto', 'Budući da', 'Jer', 'Tako da'],
          correct: 1,
          hint: 'A cause placed first, in the form the handbooks recommend.',
          explanation:
            'budući da opens a cause in careful standard; pošto is temporal there, and jer cannot open the sentence.',
        },
        {
          type: 'type',
          q: 'Ostali smo kod kuće ____ je padala kiša.',
          answer: 'jer',
          accept: ['zato što', 'budući da'],
          hint: 'The commonest connector for a cause that follows the main clause.',
          explanation: 'jer — the cause after the main clause, no comma.',
        },
        {
          type: 'type',
          q: 'Bilo je toliko ljudi ____ nismo mogli ući.',
          answer: 'da',
          hint: 'toliko in the main clause is answered by a two-letter word.',
          explanation: 'toliko … da — a result.',
        },
        {
          type: 'type',
          q: '____ je bio bolestan, ostao je kod kuće. (since — two words)',
          answer: 'Budući da',
          accept: ['Zato što', 'Kako', 'S obzirom na to da'],
          hint: 'A causal connector that comfortably opens the sentence.',
          explanation: 'Budući da je bio bolestan, ostao je kod kuće.',
        },
        {
          type: 'type',
          q: 'Bio sam umoran ____ sam rano legao. (and so — a short word, no comma)',
          answer: 'pa',
          accept: ['te', 'tako da'],
          hint: 'The everyday connector that joins a consequence.',
          explanation: 'pa — and so; no comma before it.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "___ nije bilo autobusa, išli smo pješice."',
        options: ['Kako', 'Jer', 'Pa', 'Tako da'],
        correct: 0,
        explanation: 'Causal kako opens the sentence; jer follows the main clause.',
      },
      {
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Zato što je kasnio propustio je vlak.',
          'Zato, što je kasnio propustio je vlak.',
          'Zato što je kasnio, propustio je vlak.',
          'Zato što, je kasnio, propustio je vlak.',
        ],
        correct: 2,
        explanation: 'A fronted dependent clause is closed by a comma; zato što is one connector.',
      },
      {
        q: 'Which connector gives a CAUSE?',
        options: ['tako da', 'toliko … da', 'pa', 'budući da'],
        correct: 3,
        explanation: 'budući da gives the reason; the others give a result.',
      },
      {
        q: 'Complete: "Promet je stajao dva sata ___ smo zakasnili."',
        options: ['tako da', 'budući da', 'jer', 'kako'],
        correct: 0,
        explanation: 'tako da introduces the result.',
      },
      {
        q: 'Complete in formal written style: "Most je zatvoren zbog bure ___ je promet preusmjeren."',
        options: ['jer', 'te', 'budući da', 'kako'],
        correct: 1,
        explanation: 'te links a formal consequence, without a comma.',
      },
      {
        q: 'In careful written standard, what does pošto mean in "Pošto je predao rad, otišao je na more"?',
        options: ['because', 'so that', 'after', 'although'],
        correct: 2,
        explanation:
          'pošto is a time conjunction in the careful standard: after he handed in the paper.',
      },
    ],
    vocab: [
      ['uzrok', 'cause', 'Uzrok nesreće još nije poznat.'],
      ['posljedica', 'consequence', 'Posljedice poplave vidjele su se mjesecima.'],
      ['budući da', 'since, as', 'Budući da je kasno, idemo kući.'],
      ['s obzirom na to da', 'given that', 'S obzirom na to da je rok prošao, zahtjev je odbijen.'],
      ['preusmjeriti', 'to divert, redirect', 'Promet je preusmjeren na staru cestu.'],
      ['zalediti se', 'to freeze over', 'Jezero se zaledilo prošle zime.'],
      ['rok', 'deadline', 'Rok za prijavu istječe u petak.'],
      ['razmotriti', 'to consider, review', 'Vaš će zahtjev biti razmotren do kraja mjeseca.'],
    ],
  },

  ethnonyms: {
    worked: [
      {
        title: 'From Rijeka',
        problem: 'Name a man, a woman and the adjective from Rijeka.',
        en: 'Name a man, a woman and the adjective from Rijeka.',
        steps: [
          {
            label: 'The suffix',
            text: 'Rijeka takes -anin for a man and -anka for a woman.',
          },
          {
            label: 'The sound changes',
            text: 'k before the suffix becomes č, and the long ije shortens to je: Riječ-.',
          },
          {
            label: 'The adjective',
            text: 'The adjective takes -ki, with the same changes, and a small letter.',
          },
        ],
        answer: 'Riječanin, Riječanka, riječki',
      },
      {
        title: 'From Zagreb',
        problem: 'Say: "The people of Zagreb love the Zagreb trams."',
        en: 'Say: The people of Zagreb love the Zagreb trams.',
        steps: [
          {
            label: 'The voicing change',
            text: 'Zagreb + -čanin: b before the voiceless č becomes p.',
          },
          {
            label: 'The plural',
            text: 'The -in of -anin drops in the plural, and the name keeps its capital.',
          },
          {
            label: 'The adjective',
            text: 'zagrebački, with b because no voiceless consonant follows it, and a small letter.',
          },
        ],
        answer: 'Zagrepčani vole zagrebačke tramvaje.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'A man from Karlovac is a ___.',
          options: ['Karlovčanin', 'Karlovčan', 'Karlovanin', 'Karlovnik'],
          correct: 0,
          hint: 'The fleeting a of -ac drops, and c becomes č before -anin.',
          explanation: 'Karlovac → Karlovčanin, Karlovčanka, karlovački.',
        },
        {
          q: 'The adjective from Dubrovnik is ___.',
          options: ['dubrovnički', 'dubrovački', 'Dubrovački', 'dubrovniški'],
          correct: 1,
          hint: 'The -nik is shortened before the adjective ending, and adjectives take a small letter.',
          explanation: 'dubrovački, as in dubrovačke zidine.',
        },
        {
          q: 'The plural of Osječanin is ___.',
          options: ['Osječanini', 'Osiječani', 'Osijekčani', 'Osječani'],
          correct: 3,
          hint: 'The -in drops in the plural, and ije stays shortened.',
          explanation: 'Osječanin → Osječani.',
        },
        {
          q: 'A man from Vukovar is a ___.',
          options: ['Vukovarac', 'Vukovarčanin', 'Vukovaranin', 'Vukovarnik'],
          correct: 0,
          hint: 'Vukovar belongs to the -ac family.',
          explanation: 'Vukovarac, Vukovarka, vukovarski.',
        },
        {
          q: 'Which sentence is spelled correctly?',
          options: [
            'On je englez i govori Hrvatski.',
            'On je Englez i govori hrvatski.',
            'On je Englez i govori Hrvatski.',
            'On je englez i govori hrvatski.',
          ],
          correct: 1,
          hint: 'People are capitalised; languages are not.',
          explanation: 'Englez with a capital, hrvatski with a small letter.',
        },
        {
          q: 'Why does Pula give Puljanin?',
          options: [
            'l + j merges into lj before the suffix',
            'it is irregular, with no pattern',
            'lj marks the plural',
            'the j comes from the Latin name of the town',
          ],
          correct: 0,
          hint: 'The suffix begins with j.',
          explanation: 'Jotation: l + j gives lj, as in Puljanin and Puljanka.',
        },
        {
          q: 'A woman from Greece is a ___.',
          options: ['Grkica', 'Grčka', 'Grkinja', 'Grkinka'],
          correct: 2,
          hint: 'One of the traditional feminines in -kinja.',
          explanation: 'Grk, Grkinja, grčki. Grčka is the country.',
        },
        {
          q: 'The adjective from Split is ___.',
          options: ['splićanski', 'splitski', 'Splitski', 'splićki'],
          correct: 1,
          hint: 'The adjective is built on the town name itself, without jotation.',
          explanation: 'splitski, as in splitska riva.',
        },
        {
          type: 'type',
          q: 'Ivana je iz Osijeka. Ona je ____.',
          answer: 'Osječanka',
          hint: 'k becomes č, ije shortens, and a woman takes -anka.',
          explanation: 'Osijek → Osječanka.',
        },
        {
          type: 'type',
          q: 'Ivo je iz Dubrovnika. On je ____.',
          answer: 'Dubrovčanin',
          hint: 'The -nik shortens and the suffix is -čanin.',
          explanation: 'Dubrovnik → Dubrovčanin.',
        },
        {
          type: 'type',
          q: 'Moji roditelji su iz Zadra. Oni su ____.',
          answer: 'Zadrani',
          hint: 'The fleeting a drops, and the plural loses -in.',
          explanation: 'Zadranin → Zadrani.',
        },
        {
          type: 'type',
          q: 'Luka je iz Šibenika. On je ____.',
          answer: 'Šibenčanin',
          hint: 'k becomes č before the suffix.',
          explanation: 'Šibenik → Šibenčanin.',
        },
      ],
    },
    checkB: [
      {
        q: 'A man from Zadar is a ___.',
        options: ['Zadarac', 'Zadranin', 'Zadarin', 'Zadrančanin'],
        correct: 1,
        explanation: 'The fleeting a drops: Zadranin.',
      },
      {
        q: 'The adjective from Šibenik is ___.',
        options: ['šibenički', 'Šibenski', 'šibenski', 'šibeniški'],
        correct: 2,
        explanation: 'šibenski, with a small letter.',
      },
      {
        q: 'The plural of Splićanin is ___.',
        options: ['Splićanini', 'Splićanci', 'Splitčani', 'Splićani'],
        correct: 3,
        explanation: 'The -in drops in the plural: Splićani.',
      },
      {
        q: 'A woman from Varaždin is a ___.',
        options: ['Varaždinka', 'Varaždinkinja', 'Varaždinčanka', 'Varaždinica'],
        correct: 0,
        explanation: 'The -ac family: Varaždinac, Varaždinka.',
      },
      {
        q: 'Which sentence is spelled correctly?',
        options: [
          'Zagrepčani vole Zagrebačke tramvaje.',
          'Zagrepčani vole zagrebačke tramvaje.',
          'zagrepčani vole zagrebačke tramvaje.',
          'Zagrebčani vole zagrebačke tramvaje.',
        ],
        correct: 1,
        explanation:
          'The inhabitants with a capital and p before č; the adjective with a small letter and b.',
      },
      {
        q: 'Why does Split give Splićanin?',
        options: [
          't + j merges into ć before the suffix',
          'it is an exception with no rule',
          'ć marks a woman',
          'the town used to be called Splić',
        ],
        correct: 0,
        explanation: 'Jotation: t + j gives ć, as in Splićanin and Splićanka.',
      },
    ],
    vocab: [
      ['stanovnik', 'inhabitant', 'Zagreb ima gotovo osamsto tisuća stanovnika.'],
      ['etnik', 'name for the inhabitants of a place', 'Zagrepčanin je etnik od imena Zagreb.'],
      ['ktetik', 'adjective from a place name', 'Zagrebački je ktetik od imena Zagreb.'],
      ['podrijetlo', 'origin', 'Po podrijetlu je Osječanka, ali živi u Splitu.'],
      ['rodom', 'by birth', 'Rodom je iz Zadra.'],
      ['naglasak', 'accent', 'Po naglasku se čuje da je Splićanin.'],
      ['mještanin', 'local, villager', 'Mještani su se okupili na trgu.'],
      ['doseliti se', 'to move to (a place)', 'Doselili smo se u Rijeku prije deset godina.'],
    ],
  },

  'objective-genitive': {
    worked: [
      {
        title: 'From Sentence to Noun Phrase',
        problem: 'Turn "Grad gradi novi most." into a noun phrase about the building.',
        en: 'Turn "The city is building a new bridge." into a noun phrase.',
        steps: [
          {
            label: 'The verbal noun',
            text: 'graditi gives the noun izgradnja.',
          },
          {
            label: 'The object',
            text: 'The object of the verb, novi most, becomes a genitive: novog mosta. This is the objective genitive.',
          },
          {
            label: 'The doer',
            text: 'Adding grada too would stack two genitives; a possessive adjective (gradska) or a separate clause is clearer.',
          },
        ],
        answer: 'izgradnja novog mosta (gradska izgradnja novog mosta)',
      },
      {
        title: 'Two Kinds of Owner',
        problem: 'Say: "This is Father’s house, and that is my uncle’s house."',
        en: 'Say: This is Father’s house, and that is my uncle’s house.',
        steps: [
          {
            label: 'A single owner',
            text: 'otac alone gives the possessive adjective očev, agreeing with kuća: očeva kuća.',
          },
          {
            label: 'A modified owner',
            text: 'moj ujak has a word of its own, so it goes after the noun in the genitive: mog ujaka.',
          },
          {
            label: 'Join them',
            text: 'The two halves are contrasted with a.',
          },
        ],
        answer: 'Ovo je očeva kuća, a ono je kuća mog ujaka.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'In "osvajanje vrha", what is vrh?',
          options: ['the climber', 'the owner', 'what is reached', 'a quality'],
          correct: 2,
          hint: 'Turn it into a sentence: netko osvaja…',
          explanation: 'Objective genitive: someone reaches the summit.',
        },
        {
          q: 'In "pad cijena", what are the prices?',
          options: ['what someone drops', 'the things that fall', 'a quality', 'the owners'],
          correct: 1,
          hint: 'padati has no object.',
          explanation: 'Subjective genitive: cijene padaju.',
        },
        {
          q: 'Complete: "To je auto ___." (our neighbour’s)',
          options: ['naš susjed', 'našeg susjeda', 'našem susjedu', 'našeg susjedov'],
          correct: 1,
          hint: 'An owner with a pronoun of its own goes after the noun in the possessive case.',
          explanation: 'auto našeg susjeda — genitive.',
        },
        {
          q: 'Which possessive form agrees with knjiga?',
          options: ['Markov knjiga', 'Markovo knjiga', 'Markova knjiga', 'Markove knjiga'],
          correct: 2,
          hint: 'knjiga is feminine, in the nominative.',
          explanation: 'Markova knjiga — feminine nominative.',
        },
        {
          q: 'Complete: "Kupali smo se u rijeci ___."',
          options: ['Krke', 'Krka', 'Krki', 'Krkom'],
          correct: 2,
          hint: 'The name follows the case of rijeci.',
          explanation: 'Apposition: u rijeci Krki.',
        },
        {
          q: 'Which is a genitive of quality?',
          options: ['trgovi grada', 'grad bez trgova', 'grad lijepih trgova', 'trg u gradu'],
          correct: 2,
          hint: 'A genitive with its adjective describing the city.',
          explanation: 'grad lijepih trgova — a city of beautiful squares.',
        },
        {
          q: 'Which phrase is unambiguously about caring FOR the children?',
          options: ['briga djece', 'dječja briga', 'briga za djecu', 'djeca brige'],
          correct: 2,
          hint: 'A preposition makes the object explicit.',
          explanation: 'briga za djecu; briga djece could mean the children’s own worry.',
        },
        {
          q: 'In "pitanje časti", what does the genitive do?',
          options: [
            'names the owner of the question',
            'names who asks',
            'names what is done to the question',
            'says what the question consists of',
          ],
          correct: 3,
          hint: 'A matter of honour: the matter IS honour.',
          explanation: 'An explanatory genitive: it says what the matter is about.',
        },
        {
          type: 'type',
          q: 'Zaštita ____ važna je za sve nas. (okoliš)',
          answer: 'okoliša',
          hint: 'netko štiti okoliš: the object becomes a genitive.',
          explanation: 'Objective genitive: zaštita okoliša.',
        },
        {
          type: 'type',
          q: 'Volim ____ kuću na selu. (otac — possessive adjective)',
          answer: 'očevu',
          hint: 'A single owner gives a possessive adjective, here in the accusative feminine.',
          explanation: 'očev → očevu kuću.',
        },
        {
          type: 'type',
          q: 'Rođen sam u gradu ____. (Split)',
          answer: 'Splitu',
          hint: 'The name takes the same case as gradu.',
          explanation: 'Apposition: u gradu Splitu.',
        },
        {
          type: 'type',
          q: 'Čitanje ____ trajalo je cijelu noć. (taj roman)',
          answer: 'tog romana',
          accept: ['toga romana'],
          hint: 'netko čita taj roman: the object becomes a genitive.',
          explanation: 'Objective genitive: čitanje tog romana.',
        },
      ],
    },
    checkB: [
      {
        q: 'In "izgradnja mosta", what is most?',
        options: ['the builder', 'what is built', 'the place of building', 'a quality'],
        correct: 1,
        explanation: 'netko gradi most: an objective genitive.',
      },
      {
        q: 'In "rast cijena", what are the prices?',
        options: ['what someone raises', 'the owners', 'a quality', 'the things that rise'],
        correct: 3,
        explanation: 'cijene rastu: a subjective genitive.',
      },
      {
        q: 'Complete: "To je knjiga ___." (my sister’s)',
        options: ['moja sestra', 'moje sestre', 'mojoj sestri', 'moju sestru'],
        correct: 1,
        explanation: 'An owner with a pronoun stands in the genitive: knjiga moje sestre.',
      },
      {
        q: 'Which possessive form agrees with pismo?',
        options: ['Anino pismo', 'Anin pismo', 'Anina pismo', 'Aninog pismo'],
        correct: 0,
        explanation: 'pismo is neuter: Anino pismo.',
      },
      {
        q: 'Complete: "Kuća nam je uz rijeku ___."',
        options: ['Save', 'Sava', 'Savu', 'Savom'],
        correct: 2,
        explanation: 'Apposition: the name takes the accusative like rijeku — uz rijeku Savu.',
      },
      {
        q: 'Which is a genitive of quality?',
        options: ['žena plave kose', 'kosa žene', 'žena bez kose', 'kosa za ženu'],
        correct: 0,
        explanation: 'A genitive with its adjective describing the person.',
      },
    ],
    vocab: [
      ['zaštita', 'protection', 'Zaštita okoliša tema je izbora.'],
      ['okoliš', 'environment', 'Moramo čuvati okoliš.'],
      ['izgradnja', 'construction', 'Izgradnja mosta trajala je tri godine.'],
      ['dolazak', 'arrival', 'Čekamo dolazak gostiju iz Kanade.'],
      ['osvajanje', 'conquest, reaching (a summit)', 'Osvajanje vrha trajalo je cijeli dan.'],
      ['pad', 'fall, drop', 'Pad cijena iznenadio je sve.'],
      ['čast', 'honour', 'To mu je bilo pitanje časti.'],
      ['strpljenje', 'patience', 'Djed je bio čovjek velikog strpljenja.'],
    ],
  },

  'capitals-names-geography': {
    worked: [
      {
        title: 'A Town in a County',
        problem: 'Write: "Novi Vinodolski is in Primorje-Gorski Kotar County."',
        en: 'Write: Novi Vinodolski is in Primorje-Gorski Kotar County.',
        steps: [
          {
            label: 'The town',
            text: 'A settlement capitalises every word: Novi Vinodolski.',
          },
          {
            label: 'The county',
            text: 'A county is not a settlement: only its first word is capitalised, and the second half of the hyphenated adjective stays small.',
          },
          {
            label: 'The case',
            text: 'u + locative: u Primorsko-goranskoj županiji.',
          },
        ],
        answer: 'Novi Vinodolski nalazi se u Primorsko-goranskoj županiji.',
      },
      {
        title: 'A Sea, a Town and a King',
        problem:
          'Write: "King Zvonimir ruled the coast of the Adriatic Sea; my family comes from Stari Grad."',
        en: 'Write: King Zvonimir ruled the coast of the Adriatic Sea; my family comes from Stari Grad.',
        steps: [
          {
            label: 'The title',
            text: 'kralj before a name takes a small letter, except at the start of a sentence.',
          },
          {
            label: 'The sea',
            text: 'A sea capitalises only its first word: Jadranskoga mora.',
          },
          {
            label: 'The town',
            text: 'A settlement capitalises every word: iz Staroga Grada.',
          },
        ],
        answer:
          'Kralj Zvonimir vladao je obalom Jadranskoga mora, a moja obitelj potječe iz Staroga Grada.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'The long island west of Zadar. Which is spelled correctly?',
          options: ['Dugi Otok', 'dugi otok', 'Dugi otok', 'Dugi-otok'],
          correct: 2,
          hint: 'An island, not a settlement.',
          explanation: 'Only the first word is capitalised.',
        },
        {
          q: 'The state in North America. Which is spelled correctly?',
          options: [
            'Sjedinjene američke države',
            'Sjedinjene Američke Države',
            'sjedinjene Američke Države',
            'Sjedinjene Američke države',
          ],
          correct: 1,
          hint: 'State names capitalise every word.',
          explanation: 'Every word of an official state name is capitalised.',
        },
        {
          q: 'Which sentence is spelled correctly?',
          options: [
            'Ljetovali smo na Otoku Krku.',
            'Ljetovali smo na otoku Krku.',
            'Ljetovali smo na otoku krku.',
            'Ljetovali smo na Otoku krku.',
          ],
          correct: 1,
          hint: 'A common noun before a name stays small.',
          explanation: 'otok is a common noun; Krk is the name.',
        },
        {
          q: 'The town on the island of Hvar. Which is spelled correctly?',
          options: ['Stari grad', 'stari Grad', 'Stari Grad', 'Stari-Grad'],
          correct: 2,
          hint: 'It is a settlement.',
          explanation: 'Every word of a settlement name is capitalised.',
        },
        {
          q: 'The Croatian-Hungarian king known as the Great. Which is spelled correctly?',
          options: ['Ludovik veliki', 'ludovik Veliki', 'Ludovik-Veliki', 'Ludovik Veliki'],
          correct: 3,
          hint: 'A nickname that has become part of a name.',
          explanation: 'Every part of a personal name, nickname included, is capitalised.',
        },
        {
          q: 'The sea north of Turkey. Which is spelled correctly?',
          options: ['Crno More', 'crno more', 'Crno more', 'Crno-more'],
          correct: 2,
          hint: 'A sea is not a settlement.',
          explanation: 'Only the first word is capitalised.',
        },
        {
          q: 'Which sentence is spelled correctly?',
          options: [
            'Dubrovčani slave Svetoga Vlaha.',
            'Dubrovčani slave svetoga Vlaha.',
            'dubrovčani slave svetoga Vlaha.',
            'Dubrovčani slave svetoga vlaha.',
          ],
          correct: 1,
          hint: 'sveti before a saint’s name behaves like a title.',
          explanation: 'svetoga with a small letter; the people and the saint with capitals.',
        },
        {
          q: 'Which is spelled correctly?',
          options: ['Bliski Istok', 'bliski istok', 'Bliski istok', 'Bliski-istok'],
          correct: 2,
          hint: 'A part of the world: the first-word rule.',
          explanation: 'Bliski istok, like Daleki istok.',
        },
        {
          type: 'type',
          q: 'Petar Krešimir ____ bio je hrvatski kralj. (the fourth)',
          answer: 'IV.',
          accept: ['IV'],
          hint: 'A Roman numeral, which as an ordinal takes a full stop.',
          explanation: 'Petar Krešimir IV.',
        },
        {
          type: 'type',
          q: 'Biograd na ____ (the town near Zadar)',
          answer: 'Moru',
          hint: 'A settlement capitalises every word except the preposition.',
          explanation: 'Biograd na Moru.',
        },
        {
          type: 'type',
          q: 'Hrvatsko ____ (the region of castles north of Zagreb)',
          answer: 'zagorje',
          hint: 'A region: only its first word takes a capital.',
          explanation: 'Hrvatsko zagorje.',
        },
        {
          type: 'type',
          q: 'Splitsko-____ županija (the county around Split)',
          answer: 'dalmatinska',
          hint: 'The second half of a hyphenated county name stays small.',
          explanation: 'Splitsko-dalmatinska županija.',
        },
      ],
    },
    checkB: [
      {
        q: 'The lakes in Lika. Which is spelled correctly?',
        options: ['Plitvička Jezera', 'plitvička jezera', 'Plitvička jezera', 'Plitvičkajezera'],
        correct: 2,
        explanation: 'A lake name capitalises only its first word.',
      },
      {
        q: 'The official name of the state. Which is spelled correctly?',
        options: [
          'Republika hrvatska',
          'republika Hrvatska',
          'Republika Hrvatska',
          'Republika-Hrvatska',
        ],
        correct: 2,
        explanation: 'A state name capitalises every word.',
      },
      {
        q: 'Which sentence is spelled correctly?',
        options: [
          'Zagreb leži na Rijeci Savi.',
          'Zagreb leži na rijeci Savi.',
          'Zagreb leži na rijeci savi.',
          'Zagreb leži na Rijeci savi.',
        ],
        correct: 1,
        explanation: 'rijeka is a common noun; only the name is capitalised.',
      },
      {
        q: 'The town on Korčula. Which is spelled correctly?',
        options: ['Vela Luka', 'Vela luka', 'vela Luka', 'Vela-Luka'],
        correct: 0,
        explanation: 'A settlement capitalises every word.',
      },
      {
        q: 'The Frankish emperor. Which is spelled correctly?',
        options: ['Karlo veliki', 'karlo Veliki', 'Karlo Veliki', 'Karlo-Veliki'],
        correct: 2,
        explanation: 'A nickname that is part of a name is capitalised.',
      },
      {
        q: 'The mountain region between Zagreb and Rijeka. Which is spelled correctly?',
        options: ['Gorski Kotar', 'gorski kotar', 'Gorski-kotar', 'Gorski kotar'],
        correct: 3,
        explanation: 'A region capitalises only its first word.',
      },
    ],
    vocab: [
      ['naselje', 'settlement', 'Vela Luka je naselje na Korčuli.'],
      ['država', 'state', 'Republika Hrvatska je država u Europi.'],
      ['županija', 'county', 'Hrvatska ima dvadeset županija i Grad Zagreb.'],
      ['nadimak', 'nickname', 'Karlo Veliki dobio je nadimak po svojoj moći.'],
      ['vladar', 'ruler', 'Petar Krešimir IV. bio je moćan vladar.'],
      ['pravopis', 'orthography, spelling rules', 'Pravopis propisuje pisanje velikoga slova.'],
      ['jezero', 'lake', 'Plitvička jezera privlače turiste iz cijeloga svijeta.'],
      ['zaštitnik', 'patron, protector', 'Sveti Vlaho zaštitnik je Dubrovnika.'],
    ],
  },
};
