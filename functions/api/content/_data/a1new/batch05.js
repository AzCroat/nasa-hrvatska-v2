// functions/api/content/_data/a1new/batch05.js
//
// New A1 lessons, batch 05 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// at-the-restaurant (45) · verbs-iti-jeti (46) · locative-pronouns (51) · verbs-ovati (52)
// · months (53) · flat-rooms (54).
//
// Each lesson uses only grammar taught at or before its own position in the new A1 order:
// - at-the-restaurant sits before the genitive (78) and the instrumental (74), so nothing
//   is partitive ("čašu vode") and nothing is "s mlijekom"; every order is an accusative.
//   It also sits before shopping-prices (48), so no prices are counted.
// - verbs-iti-jeti sits before the locative (49), so no "u Zagrebu".
// - months and flat-rooms use the locative only in the singular, and adjectives only in
//   the nominative ("dnevni boravak" is named, never placed in).
// Distractors avoid genitive forms of mass nouns ("Mogu li dobiti kave?" is a real
// partitive request), so no option marks real Croatian wrong.

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'at-the-restaurant',
    masterOrder: 45,
    prerequisites: ['food-drink', 'modals-basic', 'accusative-intro'],
    objectives: [
      'Ask for a table, the menu and the bill: Mogu li dobiti jelovnik?',
      'Order food and drink with the accusative: juhu, ribu, salatu',
      'Order for other people with za + a pronoun: za mene, za nju, za njega',
    ],
  },
  {
    id: 'verbs-iti-jeti',
    masterOrder: 46,
    prerequisites: ['present-tense-verbs'],
    objectives: [
      'Conjugate -iti and -jeti verbs: govorim, vidim, volim, živim',
      'Tell an -iti verb (govore) from an -ati verb (čitaju) in every person',
      'Know the common exceptions: pijem, razumijem, smijem',
    ],
  },
  {
    id: 'locative-pronouns',
    masterOrder: 51,
    prerequisites: ['prepositions-place', 'locative-intro'],
    objectives: [
      'Talk about people: o meni, o tebi, o njemu, o njoj, o nama, o vama, o njima',
      'Use razgovarati, pričati, misliti and pisati with o + the locative',
      'Say "in it" and "on it": U njoj živi baka. Na njemu je knjiga.',
    ],
  },
  {
    id: 'verbs-ovati',
    masterOrder: 52,
    prerequisites: ['verbs-iti-jeti', 'present-tense-verbs'],
    objectives: [
      'Conjugate -ovati verbs: putovati → putujem, kupovati → kupujem',
      'Recognise -ivati verbs that do the same: pokazivati → pokazujem',
      'Keep ordinary -ati verbs apart: crtati → crtam, gledati → gledam',
    ],
  },
  {
    id: 'months',
    masterOrder: 53,
    prerequisites: ['time-calendar', 'locative-intro'],
    objectives: [
      'Name the twelve Croatian months, from siječanj to prosinac',
      'Say "in January" with u + the locative: u siječnju, u prosincu',
      'Write the months with a small letter and drop the fleeting a: svibanj → u svibnju',
    ],
  },
  {
    id: 'flat-rooms',
    masterOrder: 54,
    prerequisites: ['prepositions-place', 'adjectives-basic'],
    objectives: [
      'Name the rooms of a flat and the furniture in them',
      'Say where things are with u and na + the locative: u ormaru, na polici',
      'Describe a flat: Stan je velik. Kuhinja je mala. Stan ima balkon.',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // At the Restaurant
  // ─────────────────────────────────────────────────────────
  {
    id: 'at-the-restaurant',
    title: 'At the Restaurant',
    subtitle: 'A table, the menu, your order and the bill',
    icon: '🍽️',
    level: 'A1',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'One Meal, Start to Finish',
        body: 'Everything you need in a restaurant is already in your hands. The accusative (the case for the thing a verb acts on) gives you what you order. The verb moći (can) lets you ask politely. And za plus a pronoun says who each dish is for. This lesson puts them together into one meal: finding a table, ordering, and asking for the bill.',
        icon: '🍽️',
      },
      {
        type: 'rule',
        title: 'Asking: Mogu li dobiti …?',
        body: '"Mogu li dobiti …?" means "Can I have …?" — literally "Can I get …?". Mogu is "I can", li turns it into a question, and after mogu the next verb stays in its dictionary form (the infinitive): dobiti. This one frame covers the whole meal: Mogu li dobiti jelovnik? (Can I have the menu?) Mogu li dobiti račun? (Can I have the bill?) Add "molim" or "molim vas" (please) and you are being perfectly polite.',
        highlight: 'Mogu li dobiti jelovnik?',
      },
      {
        type: 'rule',
        title: 'What You Order Is an Object',
        body: 'Whatever you ask for is the object of dobiti, so it goes into the accusative. You already know the rule: a feminine noun in -a changes -a to -u — juha → juhu (soup), riba → ribu (fish), kava → kavu (coffee). A masculine thing does not change — čaj, sok, kolač. A neuter noun does not change either — pivo, vino. So most of the work is remembering which dishes end in -a.',
        highlight: 'juha → juhu · čaj → čaj · pivo → pivo',
      },
      {
        type: 'table',
        title: 'From the Menu to Your Order',
        headers: ['On the menu', 'English', 'Your order'],
        rows: [
          ['juha', 'soup', 'Mogu li dobiti juhu?'],
          ['riba', 'fish', 'Mogu li dobiti ribu?'],
          ['salata', 'salad', 'Mogu li dobiti salatu?'],
          ['piletina', 'chicken', 'Mogu li dobiti piletinu?'],
          ['voda', 'water', 'Mogu li dobiti vodu?'],
          ['čaj', 'tea', 'Mogu li dobiti čaj?'],
          ['kolač', 'cake', 'Mogu li dobiti kolač?'],
          ['pivo', 'beer', 'Mogu li dobiti pivo?'],
        ],
      },
      {
        type: 'rule',
        title: 'For Me, For Her, For Him',
        body: 'When one person orders for the table, Croatian uses za (for) followed by the accusative pronoun: za mene (for me), za tebe (for you), za njega (for him), za nju (for her), za nas (for us). The verb can be left out entirely, just as in English: "Za mene juhu, a za nju ribu." — "Soup for me, and fish for her." Both the pronoun and the dish are in the accusative.',
        highlight: 'Za mene juhu, a za nju ribu.',
      },
      {
        type: 'rule',
        title: 'What the Waiter Says',
        body: 'Learn to recognise the waiter (konobar) or waitress (konobarica). "Što želite?" — What would you like? "Što želite piti?" — What would you like to drink? "Želite li još nešto?" — Would you like anything else? When the food comes: "Dobar tek!" — Enjoy your meal. A short "Hvala" back is all it needs.',
        highlight: 'Želite li još nešto?',
      },
      {
        type: 'rule',
        title: 'The Bill',
        body: 'The shortest way to ask is "Račun, molim." (The bill, please.) The fuller way is the frame you already know: "Mogu li dobiti račun?" The waiter may ask "Zajedno ili odvojeno?" — together or separately? Answer "Zajedno, molim." if one person pays, or "Odvojeno, molim." if each of you pays your own.',
        highlight: 'Račun, molim.',
      },
      {
        type: 'example',
        title: 'Ordering',
        items: [
          {
            hr: 'Dobar dan. Imate li slobodan stol?',
            en: 'Good afternoon. Do you have a free table?',
            note: 'slobodan agrees with stol: both masculine',
          },
          {
            hr: 'Mogu li dobiti jelovnik, molim vas?',
            en: 'Can I have the menu, please?',
            note: 'jelovnik is masculine, so it does not change',
          },
          {
            hr: 'Što želite piti?',
            en: 'What would you like to drink?',
            note: 'the waiter asks',
          },
          {
            hr: 'Mogu li dobiti vodu i sok?',
            en: 'Can I have water and a juice?',
            note: 'voda → vodu; sok stays as it is',
          },
          {
            hr: 'Za mene juhu, a za nju ribu.',
            en: 'Soup for me, and fish for her.',
            note: 'za mene, za nju; juha → juhu, riba → ribu',
          },
          {
            hr: 'Za njega piletinu i salatu.',
            en: 'Chicken and a salad for him.',
            note: 'piletina → piletinu, salata → salatu',
          },
        ],
      },
      {
        type: 'example',
        title: 'Finishing the Meal',
        items: [
          {
            hr: 'Dobar tek!',
            en: 'Enjoy your meal!',
            note: 'said when the food arrives',
          },
          {
            hr: 'Želite li još nešto?',
            en: 'Would you like anything else?',
            note: 'the waiter asks',
          },
          {
            hr: 'Da, molim vas kavu i kolač.',
            en: 'Yes, a coffee and a cake, please.',
            note: 'kava → kavu; kolač stays',
          },
          {
            hr: 'Sve je odlično, hvala.',
            en: 'Everything is excellent, thank you.',
            note: 'a compliment the kitchen will hear about',
          },
          {
            hr: 'Mogu li dobiti račun, molim vas?',
            en: 'Can I have the bill, please?',
            note: 'račun is masculine and does not change',
          },
          {
            hr: 'Zajedno ili odvojeno?',
            en: 'Together or separately?',
            note: 'the waiter asks how you will pay',
          },
          {
            hr: 'Zajedno, molim. Ja plaćam.',
            en: 'Together, please. I am paying.',
            note: 'plaćati → plaćam',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you ask for the soup? ("juha" is feminine.)',
        options: [
          'Mogu li dobiti juha?',
          'Mogu li dobiti juhu?',
          'Mogu li dobiti juhom?',
          'Mogu li dobiti juhi?',
        ],
        correct: 1,
        explanation:
          'The soup is the object of dobiti, so it takes the accusative, and a feminine -a becomes -u: juhu.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'The waiter asks "Zajedno ili odvojeno?" What does he want to know?',
        options: [
          'Whether you want a table outside',
          'Whether you will pay together or separately',
          'Whether you want a dessert',
          'Whether you are ready to order',
        ],
        correct: 1,
        explanation:
          'Zajedno means together and odvojeno means separately: he is asking how the bill is to be split.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, leaving the dish in its menu form: "Mogu li dobiti juha?" — the dish is the object, so: Mogu li dobiti juhu? Second, changing a masculine or neuter dish: "Mogu li dobiti čaju?" — čaj, pivo and kolač stay exactly as they are. Third, conjugating the second verb: "Mogu li dobim račun?" — after mogu the verb stays in its dictionary form, dobiti. Fourth, za with the wrong pronoun: "za ja", "za ona" — after za it is za mene, za nju.',
        highlight: 'Mogu li dobiti juhu?',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Mogu li dobiti ___?" (the fish — "riba")',
            options: ['riba', 'ribu', 'ribi', 'ribom'],
            correct: 1,
            explanation:
              'The fish is what you are asking for, the object, so the feminine -a becomes -u: ribu.',
          },
          {
            q: 'Complete: "Za ___ salatu, molim." (for her)',
            options: ['ona', 'njoj', 'nju', 'njom'],
            correct: 2,
            explanation:
              'Za takes the accusative, and the accusative of ona after a preposition is nju: za nju.',
          },
          {
            q: 'Which sentence asks for the bill?',
            options: [
              'Mogu li dobiti jelovnik?',
              'Dobar tek!',
              'Imate li slobodan stol?',
              'Mogu li dobiti račun?',
            ],
            correct: 3,
            explanation:
              'Račun is the bill. Jelovnik is the menu, Dobar tek wishes you a good meal, and the third asks for a table.',
          },
          {
            q: 'Complete: "Molim vas ___." (a coffee — "kava")',
            options: ['kavu', 'kava', 'kavi', 'kavom'],
            correct: 0,
            explanation: 'What you ask for is in the accusative: kava → kavu.',
          },
          {
            q: 'Which sentence is correct? (Can I have a beer?)',
            options: [
              'Mogu li dobiti pivu?',
              'Mogu li dobiti pivo?',
              'Mogu li dobim pivo?',
              'Mogu li dobiti pivom?',
            ],
            correct: 1,
            explanation:
              'Pivo is neuter, so its accusative looks the same as the menu form, and after mogu the verb stays dobiti.',
          },
          {
            q: 'What does "Dobar tek!" mean?',
            options: ['Goodbye!', 'Cheers!', 'Enjoy your meal!', 'The bill, please!'],
            correct: 2,
            explanation:
              'Dobar tek is what you say to someone about to eat — the same job as "bon appétit".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'At the Restaurant — Key Takeaways',
        points: [
          'Mogu li dobiti …? asks for anything: the menu, a dish, the bill',
          'What you order takes the accusative: juha → juhu, riba → ribu',
          'Masculine and neuter dishes do not change: čaj, kolač, pivo',
          'Order for others with za + pronoun: za mene, za njega, za nju',
          'The bill: Račun, molim. — Zajedno ili odvojeno?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Verbs in -iti and -jeti
  // ─────────────────────────────────────────────────────────
  {
    id: 'verbs-iti-jeti',
    title: 'Verbs in -iti and -jeti',
    subtitle: 'govorim, vidim, volim — the -im pattern',
    icon: '🗣️',
    level: 'A1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Second Big Pattern',
        body: 'You have already met verbs whose "I" form ends in -am: čitam, gledam, pitam. A second large group ends in -im instead: govorim (I speak), vidim (I see), volim (I love). Many of the most useful verbs in the language are in it. The good news is that you can tell almost every one of them from its dictionary form, the infinitive.',
        icon: '🗣️',
      },
      {
        type: 'rule',
        title: 'Take -iti Off, Add -im',
        body: 'For a verb ending in -iti, take -iti off and you have the stem: govoriti → govor-. Then add the endings: govorim (I), govoriš (you), govori (he, she), govorimo (we), govorite (you, plural or polite), govore (they). Five of the six endings start with i; only "they" is different, ending in -e.',
        highlight: 'govorim · govoriš · govori · govorimo · govorite · govore',
      },
      {
        type: 'table',
        title: '-iti, -jeti and -ati Side by Side',
        headers: ['Person', 'govoriti (speak)', 'vidjeti (see)', 'čitati (read)'],
        rows: [
          ['ja', 'govorim', 'vidim', 'čitam'],
          ['ti', 'govoriš', 'vidiš', 'čitaš'],
          ['on / ona', 'govori', 'vidi', 'čita'],
          ['mi', 'govorimo', 'vidimo', 'čitamo'],
          ['vi', 'govorite', 'vidite', 'čitate'],
          ['oni', 'govore', 'vide', 'čitaju'],
        ],
      },
      {
        type: 'rule',
        title: '-jeti Verbs Join the Same Group',
        body: 'Verbs ending in -jeti behave exactly like -iti verbs once you drop the -jeti: vidjeti → vidim (see), voljeti → volim (love, like), živjeti → živim (live), letjeti → letim (fly). The -je- belongs only to the infinitive and disappears in every present form. Nobody says "vidjem".',
        highlight: 'vidjeti → vidim',
      },
      {
        type: 'rule',
        title: 'Telling -iti from -ati',
        body: 'Look at the vowel before -ti. Most verbs with an a give -am: čitati → čitam, gledati → gledam, kuhati → kuham (a few, such as pisati → pišem, take -em instead; learn those as you meet them). An i (or je) gives -im: raditi → radim, učiti → učim, misliti → mislim. The difference shows most in "they": oni čitaju, oni gledaju — but oni rade, oni uče, oni govore.',
        highlight: 'oni govore · oni čitaju',
      },
      {
        type: 'rule',
        title: 'The Exceptions Worth Knowing',
        body: 'A handful of common verbs break the pattern, and you have met some already. Short -iti verbs add -jem: piti → pijem (drink). Three -jeti verbs add -ijem or change entirely: razumjeti → razumijem (understand), smjeti → smijem (may), htjeti → hoću (want). In the other direction, a few -ati verbs go to -im after č or ž: držati → držim (hold), trčati → trčim (run). Learn these as you meet them.',
        highlight: 'razumjeti → razumijem',
      },
      {
        type: 'example',
        title: 'The -im Pattern in Use',
        items: [
          {
            hr: 'Govorim hrvatski i engleski.',
            en: 'I speak Croatian and English.',
            note: 'govoriti → govorim',
          },
          { hr: 'Vidiš li more?', en: 'Can you see the sea?', note: 'vidjeti → vidiš' },
          { hr: 'Mi volimo kavu.', en: 'We love coffee.', note: 'voljeti → volimo' },
          { hr: 'Tata radi svaki dan.', en: 'Dad works every day.', note: 'raditi → radi' },
          {
            hr: 'Djeca uče hrvatski.',
            en: 'The children are learning Croatian.',
            note: 'they: uče',
          },
          {
            hr: 'Baka i djed žive sami.',
            en: 'Grandma and grandpa live alone.',
            note: 'živjeti → žive',
          },
        ],
      },
      {
        type: 'example',
        title: 'Next to -ati Verbs',
        items: [
          {
            hr: 'Ja čitam, a ti misliš.',
            en: 'I am reading and you are thinking.',
            note: '-am beside -iš',
          },
          {
            hr: 'Oni gledaju film, a mi sjedimo.',
            en: 'They are watching a film and we are sitting.',
            note: 'gledaju beside sjedimo',
          },
          {
            hr: 'Mama kuha ručak, a tata nosi vino.',
            en: 'Mum is cooking lunch and dad is carrying the wine.',
            note: 'kuha (-ati) beside nosi (-iti)',
          },
          {
            hr: 'Razumijete li me?',
            en: 'Do you understand me?',
            note: 'razumjeti → razumijete: an exception',
          },
          { hr: 'Što pijete?', en: 'What are you drinking?', note: 'piti → pijete: an exception' },
          { hr: 'Što misliš?', en: 'What do you think?', note: 'misliti → misliš' },
          {
            hr: 'Moja sestra uči njemački, a brat govori talijanski.',
            en: 'My sister is learning German and my brother speaks Italian.',
            note: 'uči and govori: he/she ends in -i',
          },
          {
            hr: 'Vidimo baku svaki tjedan.',
            en: 'We see grandma every week.',
            note: 'vidjeti → vidimo; baka → baku',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the "they" form of govoriti?',
        options: ['govoriju', 'govore', 'govoraju', 'govorimo'],
        correct: 1,
        explanation:
          'A regular -iti verb ends in -e in the "they" form: oni govore. The -aju ending belongs to -ati verbs. (The exceptions you meet below, like piti, have -ju: oni piju.)',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the "I" form of vidjeti?',
        options: ['vidjem', 'vidam', 'vidim', 'vidjim'],
        correct: 2,
        explanation: 'The -je- belongs only to the infinitive. Drop -jeti and add -im: vidim.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, giving an -iti verb the -ati ending in "they": "oni govoraju", "oni radaju" — a regular -iti or -jeti verb ends in -e there: oni govore, oni rade (only the exceptions such as piti and razumjeti have -ju: piju, razumiju). Second, keeping the -je- of the infinitive: "vidjem", "živjem" — it is vidim, živim. Third, forgetting the exceptions: "razumim", "pim" — it is razumijem and pijem.',
        highlight: 'oni govore',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Oni ___ hrvatski." (govoriti)',
            options: ['govorim', 'govore', 'govoriju', 'govoraju'],
            correct: 1,
            explanation: 'The "they" form of an -iti verb ends in -e: oni govore.',
          },
          {
            q: 'Complete: "Ja ___ more." (vidjeti)',
            options: ['vidjem', 'vidiš', 'vidim', 'vide'],
            correct: 2,
            explanation: 'Drop -jeti and add the "I" ending -im: vidim.',
          },
          {
            q: 'Which sentence is correct? (We love coffee.)',
            options: ['Volimo kavu.', 'Voljemo kavu.', 'Volemo kavu.', 'Volamo kavu.'],
            correct: 0,
            explanation: 'voljeti drops its -je- like every -jeti verb: volimo.',
          },
          {
            q: 'Which verb does NOT follow the -im pattern in the "I" form?',
            options: ['raditi', 'živjeti', 'učiti', 'razumjeti'],
            correct: 3,
            explanation:
              'razumjeti is an exception: razumijem. The others give radim, živim and učim.',
          },
          {
            q: 'Complete: "Djeca ___ sladoled." (voljeti)',
            options: ['volju', 'vole', 'volji', 'voljaju'],
            correct: 1,
            explanation: 'The "they" form ends in -e: djeca vole.',
          },
          {
            q: 'What is the "I" form of živjeti?',
            options: ['živjem', 'živam', 'živim', 'živijem'],
            correct: 2,
            explanation: 'Drop -jeti and add -im: živim.',
          },
        ],
      },
      {
        type: 'summary',
        title: '-iti and -jeti — Key Takeaways',
        points: [
          '-iti verbs: govorim, govoriš, govori, govorimo, govorite, govore',
          '-jeti verbs drop the -je-: vidjeti → vidim, voljeti → volim',
          '"They" ends in -e for regular -iti and -jeti verbs, -aju for -ati verbs: govore, čitaju',
          'Exceptions: piti → pijem (oni piju), razumjeti → razumijem (oni razumiju), smjeti → smijem (oni smiju)',
          'A few -ati verbs go to -im: držati → držim, trčati → trčim',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Locative Pronouns
  // ─────────────────────────────────────────────────────────
  {
    id: 'locative-pronouns',
    title: 'About Me, About You',
    subtitle: 'The locative of the pronouns: o meni, o tebi, o njemu',
    icon: '💬',
    level: 'A1',
    duration: '~6 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Talking About People',
        body: 'You can already say "Govorimo o filmu" — we are talking about the film — with o plus the locative (the case for where something is, and what something is about). People are talked about even more than films, so this lesson gives you the locative forms of ja, ti, on, ona and the rest. There are only seven to learn, and they are very regular.',
        icon: '💬',
      },
      {
        type: 'rule',
        title: 'The Seven Forms',
        body: 'ja → o meni (about me). ti → o tebi (about you). on → o njemu (about him). ona → o njoj (about her). ono → o njemu (about it), the same as on. mi → o nama (about us). vi → o vama (about you, plural or polite). oni, one, ona (they) → o njima (about them) — one form for every "they".',
        highlight: 'o meni · o tebi · o njemu · o njoj',
      },
      {
        type: 'table',
        title: 'The Locative Pronouns',
        headers: ['Pronoun', 'Locative', 'Example'],
        rows: [
          ['ja', 'meni', 'Pričaju o meni.'],
          ['ti', 'tebi', 'Mislim o tebi.'],
          ['on / ono', 'njemu', 'Govorimo o njemu.'],
          ['ona', 'njoj', 'Razgovaramo o njoj.'],
          ['mi', 'nama', 'Baka priča o nama.'],
          ['vi', 'vama', 'Pišem o vama.'],
          ['oni / one / ona', 'njima', 'Film je o njima.'],
        ],
      },
      {
        type: 'rule',
        title: 'Always the Long Form, Always After a Preposition',
        body: 'In the accusative you learned two sets, long (mene, njega) and short (me, ga). The locative has only one set, because it never appears without a preposition in front of it. So there is nothing to choose: after o, u or na it is always meni, tebi, njemu, njoj, nama, vama, njima. Notice that every "he, she, it, they" form starts with nj- here. In books you will sometimes see njemu shortened to njem; use njemu.',
        highlight: 'o njemu · o njoj · o njima',
      },
      {
        type: 'rule',
        title: 'Verbs That Talk About Things',
        body: 'These verbs take o + the locative for what they are about: razgovarati o (to talk about, have a conversation about), pričati o (to talk or tell about), govoriti o (to speak about), misliti o (to think about), čitati o (to read about), pisati o (to write about), znati nešto o (to know something about). Što misliš o njoj? — What do you think about her?',
        highlight: 'Što misliš o njoj?',
      },
      {
        type: 'rule',
        title: 'In It, On It',
        body: 'The same forms work after u and na when you mean "in it" or "on it". Choose the form by the gender of the noun you are pointing back to. Ovo je moja soba. U njoj spavam. (This is my room. I sleep in it.) — soba is feminine, so njoj. Ovo je stol. Na njemu je knjiga. (This is the table. The book is on it.) — stol is masculine, so njemu.',
        highlight: 'U njoj spavam.',
      },
      {
        type: 'example',
        title: 'Talking About People',
        items: [
          { hr: 'Razgovaramo o tebi.', en: 'We are talking about you.', note: 'ti → tebi' },
          {
            hr: 'Baka često priča o nama.',
            en: 'Grandma often talks about us.',
            note: 'mi → nama',
          },
          { hr: 'Što znaš o njemu?', en: 'What do you know about him?', note: 'on → njemu' },
          {
            hr: 'Stalno mislim o njoj.',
            en: 'I am always thinking about her.',
            note: 'ona → njoj',
          },
          { hr: 'Pišem pismo o vama.', en: 'I am writing a letter about you.', note: 'vi → vama' },
          {
            hr: 'Ne govore o meni, govore o njima.',
            en: 'They are not talking about me, they are talking about them.',
            note: 'ja → meni, oni → njima',
          },
        ],
      },
      {
        type: 'example',
        title: 'In It and On It',
        items: [
          {
            hr: 'Ovo je naša kuća. U njoj živi baka.',
            en: 'This is our house. Grandma lives in it.',
            note: 'kuća is feminine → njoj',
          },
          {
            hr: 'Ovo je stol. Na njemu je knjiga.',
            en: 'This is the table. The book is on it.',
            note: 'stol is masculine → njemu',
          },
          {
            hr: 'Ovo je moja torba. U njoj su ključevi.',
            en: 'This is my bag. The keys are in it.',
            note: 'torba → njoj',
          },
          {
            hr: 'Ovo je selo. U njemu živi djed.',
            en: 'This is the village. Grandpa lives in it.',
            note: 'selo is neuter → njemu',
          },
          {
            hr: 'Film je o njima i o nama.',
            en: 'The film is about them and about us.',
            note: 'two locatives, each with its own o',
          },
        ],
      },
      {
        type: 'rule',
        title: 'One More Locative Preposition: po',
        body: 'po + the locative has three everyday uses. Moving around or all over a place: Šetamo po gradu (We are walking around town). Djeca trče po parku (The children run around the park). Known for something: Hrvatska je poznata po moru (Croatia is known for its sea) — poznat, poznata, poznato agrees with the place, like any adjective. Named after someone: Trg je nazvan po banu Jelačiću (The square is named after Ban Jelačić). The noun after po takes the same locative ending you already know: grad → po gradu, park → po parku, more → po moru.',
        highlight: 'Šetamo po gradu.',
      },
      {
        type: 'example',
        title: 'po + the Locative',
        items: [
          { hr: 'Šetamo po gradu.', en: 'We are walking around town.', note: 'grad → po gradu' },
          {
            hr: 'Djeca trče po parku.',
            en: 'The children are running around the park.',
            note: 'park → po parku',
          },
          {
            hr: 'Hrvatska je poznata po moru.',
            en: 'Croatia is known for its sea.',
            note: 'poznata agrees with Hrvatska',
          },
          {
            hr: 'Slavonija je poznata po kulenu.',
            en: 'Slavonia is known for kulen (a spicy sausage).',
            note: 'kulen → po kulenu',
          },
          {
            hr: 'Trg je nazvan po banu Jelačiću.',
            en: 'The square is named after Ban Jelačić.',
            note: 'both words take the locative',
          },
          {
            hr: 'Ulica je nazvana po Nikoli Tesli.',
            en: 'The street is named after Nikola Tesla.',
            note: 'Nikola → Nikoli, Tesla → Tesli',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "We are talking about her"?',
        options: [
          'Razgovaramo o nju.',
          'Razgovaramo o njoj.',
          'Razgovaramo o ona.',
          'Razgovaramo o nje.',
        ],
        correct: 1,
        explanation:
          'After o meaning "about", the pronoun is in the locative, and the locative of ona is njoj.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the locative of "mi"?',
        options: ['nas', 'mi', 'nama', 'nami'],
        correct: 2,
        explanation: 'mi → o nama. Nas is the accusative, used after za: za nas.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the subject form after o: "o ja", "o on" — after a preposition the pronoun must change: o meni, o njemu. Second, the accusative form you learned for za: "o mene", "o njega", "o nju" — o meaning "about" takes the locative: o meni, o njemu, o njoj. Third, dropping the nj-: "o emu", "o oj" — it is Pričamo o njemu.',
        highlight: 'Pričamo o njemu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Razgovaramo o ___." (about you — one friend)',
            options: ['ti', 'tebe', 'tebi', 'tobom'],
            correct: 2,
            explanation: 'o + locative, and the locative of ti is tebi.',
          },
          {
            q: 'Complete: "Baka često priča o ___." (about him)',
            options: ['on', 'njemu', 'njega', 'njim'],
            correct: 1,
            explanation: 'The locative of on is njemu. Njega is the accusative.',
          },
          {
            q: 'Which sentence is correct? (I am thinking about her.)',
            options: ['Mislim o njoj.', 'Mislim o nju.', 'Mislim o ona.', 'Mislim o nje.'],
            correct: 0,
            explanation: 'misliti o + locative: o njoj.',
          },
          {
            q: 'Complete: "Ovo je moja soba. U ___ spavam." (in it)',
            options: ['nju', 'njoj', 'ona', 'njemu'],
            correct: 1,
            explanation:
              'Being in a place takes the locative, and soba is feminine: u njoj. U nju would be going into it.',
          },
          {
            q: 'What is the locative of "mi"?',
            options: ['nas', 'mi', 'nami', 'nama'],
            correct: 3,
            explanation: 'mi → nama: Baka priča o nama.',
          },
          {
            q: 'Which statement is true?',
            options: [
              'Locative pronouns have short forms like me and te',
              'A locative pronoun always follows a preposition',
              'After o you use the accusative pronoun',
              'The locative of on starts with o-',
            ],
            correct: 1,
            explanation:
              'The locative never stands alone, so it has only the long forms: meni, tebi, njemu, njoj, nama, vama, njima.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Locative Pronouns — Key Takeaways',
        points: [
          'meni, tebi, njemu, njoj, nama, vama, njima',
          'on and ono share njemu; every "they" is njima',
          'Only long forms, always after a preposition',
          'razgovarati, pričati, misliti, pisati o + locative',
          'u njoj, na njemu: "in it", "on it", by the gender of the noun',
          'po + locative: šetati po gradu (around), poznat po moru (known for), nazvan po banu (named after)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Verbs in -ovati
  // ─────────────────────────────────────────────────────────
  {
    id: 'verbs-ovati',
    title: 'Verbs in -ovati',
    subtitle: 'putovati → putujem: where -ova- turns into -uj-',
    icon: '🧳',
    level: 'A1',
    duration: '~6 min',
    color: '#15803d',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'A Verb That Changes Its Middle',
        body: 'Most verbs keep their stem and only change the ending. One group changes its middle as well: putovati (to travel) becomes putujem (I travel). Once you see the pattern it is completely regular, and it covers dozens of everyday verbs: kupovati (to shop, buy), stanovati (to live somewhere), doručkovati (to have breakfast).',
        icon: '🧳',
      },
      {
        type: 'rule',
        title: '-ova- Becomes -uj-',
        body: 'Take -ovati off the infinitive and put -uj- in its place, then add the endings: putovati → putuj- → putujem (I), putuješ (you), putuje (he, she), putujemo (we), putujete (you, plural or polite), putuju (they). The endings -em, -eš, -e, -emo, -ete, -u are the third pattern you already know from pišem.',
        highlight: 'putujem · putuješ · putuje · putujemo · putujete · putuju',
      },
      {
        type: 'table',
        title: 'Two -ovati Verbs Next to an -ati Verb',
        headers: ['Person', 'putovati (travel)', 'kupovati (buy)', 'crtati (draw)'],
        rows: [
          ['ja', 'putujem', 'kupujem', 'crtam'],
          ['ti', 'putuješ', 'kupuješ', 'crtaš'],
          ['on / ona', 'putuje', 'kupuje', 'crta'],
          ['mi', 'putujemo', 'kupujemo', 'crtamo'],
          ['vi', 'putujete', 'kupujete', 'crtate'],
          ['oni', 'putuju', 'kupuju', 'crtaju'],
        ],
      },
      {
        type: 'rule',
        title: 'Spot It by -ovati',
        body: 'The signal is the whole ending -ovati, not just -ati. stanovati → stanujem (I live), doručkovati → doručkujem (I have breakfast), ljetovati → ljetujem (I spend the summer holiday), darovati → darujem (I give as a present), sudjelovati → sudjelujem (I take part). An ordinary -ati verb without -ov- keeps -am: crtati → crtam, gledati → gledam. And -irati verbs keep their -ir-: studirati → studiram.',
        highlight: 'crtati → crtam, kupovati → kupujem',
      },
      {
        type: 'rule',
        title: '-ivati and -evati',
        body: 'Many longer verbs in -ivati do the same thing: pokazivati → pokazujem (I show), posjećivati → posjećujem (I visit). But not all of them: in uživati (to enjoy) the -iv- belongs to the root, so it is uživam. After j, c, č, ć, đ, dž, š, ž, lj or nj (the soft consonants) the same -ovati is spelled -evati and still gives -ujem, for example kraljevati → kraljujem (to reign) — rare at this level. When in doubt, learn the "I" form with the verb.',
        highlight: 'pokazivati → pokazujem',
      },
      {
        type: 'example',
        title: 'Travelling and Shopping',
        items: [
          {
            hr: 'Često putujem u Hrvatsku.',
            en: 'I often travel to Croatia.',
            note: 'putovati → putujem',
          },
          { hr: 'Gdje kupuješ kruh?', en: 'Where do you buy bread?', note: 'kupovati → kupuješ' },
          {
            hr: 'Mama kupuje voće na tržnici.',
            en: 'Mum buys fruit at the market.',
            note: 'kupuje',
          },
          { hr: 'Stanujemo u Zagrebu.', en: 'We live in Zagreb.', note: 'stanovati → stanujemo' },
          {
            hr: 'Gdje ljetujete?',
            en: 'Where do you spend your summer holiday?',
            note: 'ljetovati → ljetujete',
          },
          { hr: 'Oni puno putuju.', en: 'They travel a lot.', note: 'they: putuju' },
        ],
      },
      {
        type: 'example',
        title: 'Every Day',
        items: [
          {
            hr: 'Doručkujem u sedam.',
            en: 'I have breakfast at seven.',
            note: 'doručkovati → doručkujem',
          },
          {
            hr: 'Vodič pokazuje grad.',
            en: 'The guide shows the town.',
            note: 'pokazivati → pokazuje',
          },
          {
            hr: 'Svaki tjedan posjećujem baku.',
            en: 'I visit grandma every week.',
            note: 'posjećivati → posjećujem',
          },
          {
            hr: 'Djeca sudjeluju u igri.',
            en: 'The children take part in the game.',
            note: 'sudjelovati → sudjeluju',
          },
          {
            hr: 'Ja crtam, a sestra gleda film.',
            en: 'I am drawing and my sister is watching a film.',
            note: 'two ordinary -ati verbs',
          },
          {
            hr: 'Uživamo na moru.',
            en: 'We are enjoying ourselves at the seaside.',
            note: 'uživati → uživamo: not an -ujem verb',
          },
          {
            hr: 'Moji roditelji stanuju u Splitu, a ja studiram u Zagrebu.',
            en: 'My parents live in Split, and I study in Zagreb.',
            note: 'stanuju (-ovati) beside studiram (-irati)',
          },
          {
            hr: 'Kupujete li voće na tržnici?',
            en: 'Do you buy fruit at the market?',
            note: 'kupovati → kupujete',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the "I" form of kupovati?',
        options: ['kupovam', 'kupujem', 'kupuvam', 'kupim'],
        correct: 1,
        explanation: '-ova- becomes -uj-, then the "I" ending -em: kupujem.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which verb does NOT change to -ujem?',
        options: ['stanovati', 'putovati', 'crtati', 'doručkovati'],
        correct: 2,
        explanation: 'crtati has no -ov-, so it is an ordinary -ati verb: crtam.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, keeping the -ov- and adding -am: "putovam", "kupovam" — the -ova- turns into -uj-: Putujem u Split. Second, piling up endings in "they": "putujeju" — it is putuju. Third, using the pattern where it does not belong: "crtujem", "gledujem" — a verb without -ov- stays crtam, gledam.',
        highlight: 'Putujem u Split.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Često ___ u Hrvatsku." (putovati — I)',
            options: ['putovam', 'putujem', 'putuvam', 'putovem'],
            correct: 1,
            explanation: '-ova- becomes -uj-: putujem.',
          },
          {
            q: 'Complete: "Mama ___ kruh." (kupovati)',
            options: ['kupuje', 'kupova', 'kupuju', 'kupove'],
            correct: 0,
            explanation: 'The he/she form of kupovati is kupuje. Kupuju is "they".',
          },
          {
            q: 'Which verb does NOT change to -ujem?',
            options: ['stanovati', 'putovati', 'gledati', 'doručkovati'],
            correct: 2,
            explanation: 'gledati has no -ov-: gledam.',
          },
          {
            q: 'Complete: "Oni ___ u Zagrebu." (stanovati)',
            options: ['stanuje', 'stanovaju', 'stanujeju', 'stanuju'],
            correct: 3,
            explanation: 'The "they" form ends in -u: stanuju.',
          },
          {
            q: 'What is the "I" form of pokazivati?',
            options: ['pokazivam', 'pokazujem', 'pokazim', 'pokazivujem'],
            correct: 1,
            explanation: 'pokazivati follows the -ujem pattern: pokazujem.',
          },
          {
            q: 'Which pair is correct?',
            options: [
              'telefonirati → telefonujem',
              'uživati → uživam',
              'crtati → crtujem',
              'putovati → putovam',
            ],
            correct: 1,
            explanation:
              'In uživati the -iv- is part of the root, so it is uživam. The others are telefoniram, crtam and putujem.',
          },
        ],
      },
      {
        type: 'summary',
        title: '-ovati Verbs — Key Takeaways',
        points: [
          '-ovati → -ujem: putujem, putuješ, putuje, putujemo, putujete, putuju',
          'kupovati, stanovati, doručkovati, ljetovati, sudjelovati all work this way',
          'Many -ivati verbs too: pokazujem, posjećujem — but uživam',
          'No -ov-, no change: crtam, gledam, studiram',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Months
  // ─────────────────────────────────────────────────────────
  {
    id: 'months',
    title: 'The Months',
    subtitle: 'siječanj to prosinac, and how to say "in May"',
    icon: '📅',
    level: 'A1',
    duration: '~6 min',
    color: '#be123c',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Croatia Has Its Own Month Names',
        body: 'Most European languages take their month names from Latin: January, Januar, janvier. Croatian does not. Its months have old Slavic names, many of them describing what happens in nature at that time of year. They look unfamiliar at first, but they are worth learning properly — you will see them on every calendar, ticket and timetable in Croatia.',
        icon: '📅',
      },
      {
        type: 'rule',
        title: 'The Twelve Names',
        body: 'siječanj (January), veljača (February), ožujak (March), travanj (April), svibanj (May), lipanj (June), srpanj (July), kolovoz (August), rujan (September), listopad (October), studeni (November), prosinac (December). Like the days of the week, the months are written with a small letter: Sada je listopad.',
        highlight: 'months take a small letter',
      },
      {
        type: 'table',
        title: 'The Months and "In …"',
        headers: ['Month', 'English', 'in …'],
        rows: [
          ['siječanj', 'January', 'u siječnju'],
          ['veljača', 'February', 'u veljači'],
          ['ožujak', 'March', 'u ožujku'],
          ['travanj', 'April', 'u travnju'],
          ['svibanj', 'May', 'u svibnju'],
          ['lipanj', 'June', 'u lipnju'],
          ['srpanj', 'July', 'u srpnju'],
          ['kolovoz', 'August', 'u kolovozu'],
          ['rujan', 'September', 'u rujnu'],
          ['listopad', 'October', 'u listopadu'],
          ['studeni', 'November', 'u studenom'],
          ['prosinac', 'December', 'u prosincu'],
        ],
      },
      {
        type: 'rule',
        title: '"In May" Is u + the Locative',
        body: 'To say when something happens, use u with the locative, exactly as for a place. Ten months are ordinary masculine nouns, so they take -u: kolovoz → u kolovozu, listopad → u listopadu. Most of them have a fleeting a (an a that drops out when an ending is added) — you met it in the lesson on the fleeting a: svibanj → u svibnju, prosinac → u prosincu, ožujak → u ožujku. Veljača is the one feminine month: u veljači. Studeni is the twelfth, and it works differently: see the next slide.',
        highlight: 'svibanj → u svibnju',
      },
      {
        type: 'rule',
        title: 'Studeni Is Shaped Like an Adjective',
        body: 'Studeni ends in -i like an adjective, and it takes an adjective ending: u studenom. You will also see the longer u studenome, which is equally correct. Do not make it u studenu.',
        highlight: 'u studenom',
      },
      {
        type: 'rule',
        title: 'Names From Nature',
        body: 'Several names describe the season. travanj comes from trava, grass. lipanj comes from lipa, the linden tree, which flowers in June. srpanj comes from srp, the sickle used at harvest. listopad joins list (leaf) and padati (to fall): the month when the leaves fall. Knowing the picture behind a name makes it much easier to remember.',
        highlight: 'listopad = the leaves fall',
      },
      {
        type: 'example',
        title: 'When Things Happen',
        items: [
          {
            hr: 'Moj rođendan je u svibnju.',
            en: 'My birthday is in May.',
            note: 'svibanj → svibnju',
          },
          {
            hr: 'U kolovozu idemo na more.',
            en: 'In August we go to the seaside.',
            note: 'kolovoz → kolovozu',
          },
          {
            hr: 'Škola počinje u rujnu.',
            en: 'School starts in September.',
            note: 'rujan → rujnu',
          },
          {
            hr: 'Božić je u prosincu.',
            en: 'Christmas is in December.',
            note: 'prosinac → prosincu',
          },
          {
            hr: 'Valentinovo je u veljači.',
            en: 'Valentine’s Day is in February.',
            note: 'feminine: veljača → veljači',
          },
          {
            hr: 'Dan državnosti je u svibnju.',
            en: 'Statehood Day is in May.',
            note: 'a public holiday',
          },
        ],
      },
      {
        type: 'example',
        title: 'Talking About the Calendar',
        items: [
          {
            hr: 'Sada je listopad.',
            en: 'It is October now.',
            note: 'the month itself, no preposition',
          },
          { hr: 'Ispiti su u lipnju.', en: 'The exams are in June.', note: 'lipanj → lipnju' },
          {
            hr: 'Baka dolazi u srpnju.',
            en: 'Grandma is coming in July.',
            note: 'srpanj → srpnju',
          },
          {
            hr: 'Putujemo u Zadar u travnju.',
            en: 'We are travelling to Zadar in April.',
            note: 'u Zadar is motion, u travnju is time',
          },
          {
            hr: 'Volim lipanj.',
            en: 'I love June.',
            note: 'an object: the accusative, the same as the dictionary form',
          },
          {
            hr: 'Kada je tvoj rođendan? — U studenom.',
            en: 'When is your birthday? — In November.',
            note: 'studeni → u studenom',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "in May"?',
        options: ['u svibanj', 'u svibnju', 'u svibanju', 'u Svibnju'],
        correct: 1,
        explanation:
          'u + the locative, the fleeting a drops out, and months take a small letter: u svibnju.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which month is August?',
        options: ['kolovoz', 'srpanj', 'rujan', 'listopad'],
        correct: 0,
        explanation: 'kolovoz is August. Srpanj is July, rujan September, listopad October.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, a capital letter: "u Prosincu" — months are written small: u prosincu. Second, keeping the fleeting a: "u prosinacu", "u svibanju" — it drops out: u svibnju. Third, no ending at all: "u siječanj" — time takes the locative: u siječnju.',
        highlight: 'u prosincu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Moj rođendan je u ___." (svibanj)',
            options: ['svibanj', 'svibnju', 'svibanju', 'svibnja'],
            correct: 1,
            explanation: 'u + locative, without the fleeting a: u svibnju.',
          },
          {
            q: 'Which month is December?',
            options: ['studeni', 'listopad', 'prosinac', 'siječanj'],
            correct: 2,
            explanation: 'prosinac is December; studeni is November.',
          },
          {
            q: 'Which sentence is correct? (In August we go to the seaside.)',
            options: [
              'U kolovozu idemo na more.',
              'U kolovoz idemo na more.',
              'U kolovoza idemo na more.',
              'U Kolovozu idemo na more.',
            ],
            correct: 0,
            explanation: 'u + locative, with a small letter: u kolovozu.',
          },
          {
            q: 'Complete: "Škola počinje u ___." (rujan)',
            options: ['rujan', 'rujanu', 'rujna', 'rujnu'],
            correct: 3,
            explanation: 'rujan loses its fleeting a: u rujnu.',
          },
          {
            q: 'Which sentence is spelled correctly?',
            options: [
              'Ispiti su u Lipnju.',
              'Ispiti su u lipnju.',
              'Ispiti su u lipanju.',
              'Ispiti su u Lipanj.',
            ],
            correct: 1,
            explanation: 'A small letter, and the fleeting a drops: u lipnju.',
          },
          {
            q: 'What does "u veljači" mean?',
            options: ['in February', 'in January', 'in March', 'in April'],
            correct: 0,
            explanation: 'veljača is February, the one feminine month: u veljači.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Months — Key Takeaways',
        points: [
          'siječanj, veljača, ožujak, travanj, svibanj, lipanj',
          'srpanj, kolovoz, rujan, listopad, studeni, prosinac',
          'Written with a small letter',
          '"In" a month: u + locative — u siječnju, u kolovozu',
          'The fleeting a drops: svibanj → u svibnju; veljača → u veljači; studeni → u studenom',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Flat and Its Rooms
  // ─────────────────────────────────────────────────────────
  {
    id: 'flat-rooms',
    title: 'My Flat',
    subtitle: 'Rooms, furniture, and where everything is',
    icon: '🏠',
    level: 'A1',
    duration: '~6 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'A Tour of the Flat',
        body: 'Most people in Croatian towns live in a stan, a flat. In this lesson you learn the rooms, the main furniture, and how to say where things are with u (in) and na (on) plus the locative — the case you already use for where something is.',
        icon: '🏠',
      },
      {
        type: 'rule',
        title: 'The Rooms',
        body: 'kuhinja (kitchen), kupaonica (bathroom), soba (room), spavaća soba (bedroom), dnevni boravak (living room), hodnik (hallway), balkon (balcony), and WC (toilet, said "ve-ce"). Spavaća soba and dnevni boravak are an adjective and a noun together, like "living room" in English: Ovo je dnevni boravak.',
        highlight: 'kuhinja · kupaonica · soba · hodnik · balkon',
      },
      {
        type: 'table',
        title: 'Where You Are',
        headers: ['Room', 'English', 'in it / on it'],
        rows: [
          ['kuhinja', 'kitchen', 'u kuhinji'],
          ['kupaonica', 'bathroom', 'u kupaonici'],
          ['soba', 'room', 'u sobi'],
          ['hodnik', 'hallway', 'u hodniku'],
          ['stan', 'flat', 'u stanu'],
          ['balkon', 'balcony', 'na balkonu'],
        ],
      },
      {
        type: 'rule',
        title: 'Furniture, and u or na',
        body: 'krevet (bed), ormar (wardrobe), stol (table), stolica (chair), polica (shelf), kauč (sofa), hladnjak (fridge), tepih (rug), slika (picture), zid (wall), pod (floor), prozor (window). Use u for inside something and na for on a surface: Odjeća je u ormaru. Knjiga je na polici. Masculine nouns take -u, feminine -a becomes -i — and remember k → c before -i: slika → na slici.',
        highlight: 'u ormaru · na polici',
      },
      {
        type: 'rule',
        title: 'Balcony, Wall, Floor: Always na',
        body: 'Some places take na even where English says "in" or "on" without thinking: na balkonu (on the balcony), na zidu (on the wall), na podu (on the floor), na katu (on a floor, on a storey of the building — "upstairs" itself is gore). Rooms take u: u kuhinji, u sobi, u hodniku. Learn each place with its preposition.',
        highlight: 'na balkonu',
      },
      {
        type: 'rule',
        title: 'Describing the Flat',
        body: 'An adjective after je agrees with its noun, as you learned: Stan je velik. Kuhinja je mala. Kupaonica je nova. Soba je svijetla (bright). To say what a flat has, use imati: Stan ima balkon. And to say what is in a room, start with the place: U kuhinji je stol. U sobi je krevet.',
        highlight: 'Stan ima balkon.',
      },
      {
        type: 'example',
        title: 'Around the Flat',
        items: [
          {
            hr: 'Imam mali stan u gradu.',
            en: 'I have a small flat in town.',
            note: 'u gradu: locative',
          },
          {
            hr: 'Stan ima kuhinju, kupaonicu i balkon.',
            en: 'The flat has a kitchen, a bathroom and a balcony.',
            note: 'imati + accusative',
          },
          {
            hr: 'Kuhinja je mala, ali svijetla.',
            en: 'The kitchen is small but bright.',
            note: 'feminine adjectives',
          },
          { hr: 'Mama je u kuhinji.', en: 'Mum is in the kitchen.', note: 'kuhinja → kuhinji' },
          {
            hr: 'Navečer sjedimo na balkonu.',
            en: 'In the evening we sit on the balcony.',
            note: 'balkon takes na',
          },
          {
            hr: 'U sobi je krevet, ormar i stol.',
            en: 'In the room there is a bed, a wardrobe and a table.',
            note: 'the place first',
          },
        ],
      },
      {
        type: 'example',
        title: 'Where Everything Is',
        items: [
          { hr: 'Odjeća je u ormaru.', en: 'The clothes are in the wardrobe.', note: 'inside: u' },
          { hr: 'Knjiga je na polici.', en: 'The book is on the shelf.', note: 'polica → polici' },
          {
            hr: 'Mlijeko je u hladnjaku.',
            en: 'The milk is in the fridge.',
            note: 'hladnjak → hladnjaku',
          },
          { hr: 'Slika je na zidu.', en: 'The picture is on the wall.', note: 'na zidu' },
          {
            hr: 'Mačka spava na krevetu.',
            en: 'The cat is sleeping on the bed.',
            note: 'on the surface: na',
          },
          {
            hr: 'Ključevi su u hodniku.',
            en: 'The keys are in the hallway.',
            note: 'hodnik → hodniku',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "The book is on the shelf"? ("polica" is feminine.)',
        options: [
          'Knjiga je na polica.',
          'Knjiga je na policu.',
          'Knjiga je na polici.',
          'Knjiga je u polici.',
        ],
        correct: 2,
        explanation:
          'Position takes the locative, feminine -a becomes -i, and a surface takes na: na polici.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the bathroom?',
        options: ['kuhinja', 'kupaonica', 'hodnik', 'balkon'],
        correct: 1,
        explanation: 'kupaonica is the bathroom; kuhinja is the kitchen.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the dictionary form after na or u: "Knjiga je na polica" — where something is takes the locative: Knjiga je na polici. Second, the wrong preposition: "u balkonu", "u zidu" — it is na balkonu, na zidu. Third, the accusative of motion when nothing is moving: "Mama je u kuhinju" — u kuhinju is going into the kitchen; being there is u kuhinji.',
        highlight: 'Knjiga je na polici.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Mama je u ___." (kuhinja)',
            options: ['kuhinja', 'kuhinju', 'kuhinji', 'kuhinje'],
            correct: 2,
            explanation: 'Being in a place: u + locative, feminine -a → -i: u kuhinji.',
          },
          {
            q: 'Complete: "Knjige su na ___." (polica)',
            options: ['polici', 'polica', 'policu', 'policom'],
            correct: 0,
            explanation: 'na + locative: na polici.',
          },
          {
            q: 'Which sentence is correct? (We are on the balcony.)',
            options: [
              'Mi smo u balkonu.',
              'Mi smo na balkonu.',
              'Mi smo na balkon.',
              'Mi smo na balkona.',
            ],
            correct: 1,
            explanation: 'A balcony takes na, and position takes the locative: na balkonu.',
          },
          {
            q: 'Complete: "Odjeća je u ___." (ormar)',
            options: ['ormar', 'ormara', 'ormarom', 'ormaru'],
            correct: 3,
            explanation: 'Masculine nouns take -u in the locative: u ormaru.',
          },
          {
            q: 'Where do you usually cook?',
            options: ['u kupaonici', 'u kuhinji', 'u hodniku', 'na balkonu'],
            correct: 1,
            explanation: 'kuhinja is the kitchen: u kuhinji.',
          },
          {
            q: 'What is wrong with "Slika je na zid."?',
            options: [
              'zid should be zidu — position takes the locative',
              'na should be u',
              'slika should be sliku',
              'Nothing is wrong',
            ],
            correct: 0,
            explanation: 'The picture is resting there, so the locative: Slika je na zidu.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'My Flat — Key Takeaways',
        points: [
          'Rooms: kuhinja, kupaonica, soba, hodnik, balkon, dnevni boravak',
          'Furniture: krevet, ormar, stol, stolica, polica, kauč, hladnjak',
          'u + locative for inside: u ormaru, u kuhinji',
          'na + locative for on: na polici, na zidu, na balkonu',
          'Describe it: Stan je velik. Kuhinja je mala. Stan ima balkon.',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'at-the-restaurant': {
    worked: [
      {
        title: 'Ordering for Yourself',
        problem: '"Soup for me, please."',
        en: 'Soup for me, please.',
        steps: [
          { label: 'Who it is for', text: 'for = za, and za takes the accusative of ja: za mene.' },
          {
            label: 'What you want',
            text: 'juha is feminine in -a; as the thing ordered it becomes juhu.',
          },
          { label: 'Build it', text: 'Za mene … , molim.' },
        ],
        answer: 'Za mene juhu, molim.',
      },
      {
        title: 'Asking for the Bill',
        problem: '"Can I have the bill?"',
        en: 'Can I have the bill?',
        steps: [
          { label: 'Ask with moći', text: 'Can I = mogu, and li makes it a question: Mogu li …' },
          {
            label: 'The second verb',
            text: 'After mogu the verb stays in its dictionary form: dobiti.',
          },
          { label: 'The object', text: 'račun is masculine, so it does not change.' },
        ],
        answer: 'Mogu li dobiti račun?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Mogu li dobiti ___? (salata)',
          options: ['salata', 'salatu', 'salati', 'salatom'],
          correct: 1,
          hint: 'What you order is the object, and this noun ends in -a.',
          explanation: 'Mogu li dobiti salatu?',
        },
        {
          q: 'Za ___ pivo, molim. (for him)',
          options: ['on', 'njega', 'njemu', 'njim'],
          correct: 1,
          hint: 'za is followed by the accusative pronoun.',
          explanation: 'Za njega pivo.',
        },
        {
          q: 'Mogu li dobiti ___? (čaj)',
          options: ['čaju', 'čaj', 'čajem', 'čajevi'],
          correct: 1,
          hint: 'A masculine thing does not change in the accusative.',
          explanation: 'Mogu li dobiti čaj?',
        },
        {
          q: '"Zajedno ili odvojeno?" — One of you is paying for everything. You answer:',
          options: ['Zajedno, molim.', 'Odvojeno, molim.', 'Dobar tek!', 'Jelovnik, molim.'],
          correct: 0,
          hint: 'One bill for the whole table.',
          explanation: 'Zajedno means together.',
        },
        {
          q: 'Which sentence asks for the menu?',
          options: [
            'Mogu li dobiti račun?',
            'Imate li slobodan stol?',
            'Želite li još nešto?',
            'Mogu li dobiti jelovnik?',
          ],
          correct: 3,
          hint: 'The word for the menu comes from jelo, a dish.',
          explanation: 'Jelovnik is the menu; račun is the bill.',
        },
        {
          q: 'Za mene ___, a za nju ribu. (juha)',
          options: ['juha', 'juhom', 'juhu', 'juhi'],
          correct: 2,
          hint: 'Both dishes are things ordered — look at what happened to riba.',
          explanation: 'Za mene juhu, a za nju ribu.',
        },
        {
          q: '___ li dobiti kavu? (Can I have a coffee?)',
          options: ['Mogu', 'Moći', 'Mogući', 'Moguće'],
          correct: 0,
          hint: 'The "I" form of moći.',
          explanation: 'Mogu li dobiti kavu?',
        },
        {
          q: 'The waiter asks "Želite li još nešto?" What does he want to know?',
          options: [
            'If you would like anything else',
            'If you are ready to pay',
            'If you like the food',
            'If you have a reservation',
          ],
          correct: 0,
          hint: 'još nešto = something more.',
          explanation: 'He is asking whether you want anything else.',
        },
        {
          type: 'type',
          q: 'Mogu li dobiti ____? (voda)',
          answer: 'vodu',
          hint: 'Feminine -a becomes -u when it is the thing ordered.',
          explanation: 'Mogu li dobiti vodu?',
        },
        {
          type: 'type',
          q: 'Za ____ kavu, molim. (for me)',
          answer: 'mene',
          hint: 'The accusative of ja after za.',
          explanation: 'Za mene kavu, molim.',
        },
        {
          type: 'type',
          q: 'Mogu li dobiti ____? (piletina)',
          answer: 'piletinu',
          hint: 'The dish ends in -a; what happens to it as an object?',
          explanation: 'Mogu li dobiti piletinu?',
        },
        {
          type: 'type',
          q: 'Molim vas ____ i kolač. (kava)',
          answer: 'kavu',
          hint: 'The same change as juha → juhu.',
          explanation: 'Molim vas kavu i kolač.',
        },
        {
          type: 'type',
          q: 'Za ____ sok, a za mene vodu. (for her)',
          answer: 'nju',
          hint: 'The accusative of ona after a preposition.',
          explanation: 'Za nju sok, a za mene vodu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Mogu li dobiti ___?" (the salad — "salata")',
        options: ['salata', 'salatom', 'salatu', 'salati'],
        correct: 2,
        explanation: 'The thing ordered takes the accusative: salatu.',
      },
      {
        q: 'Complete: "Za ___ pivo, molim." (for him)',
        options: ['njega', 'on', 'njemu', 'njim'],
        correct: 0,
        explanation: 'za + accusative: za njega.',
      },
      {
        q: 'Which sentence orders a juice for her?',
        options: ['Za ona sok.', 'Za njoj sok.', 'Za nju sok.', 'Za nju soku.'],
        correct: 2,
        explanation: 'za nju, and the masculine sok does not change.',
      },
      {
        q: 'What does "Račun, molim." mean?',
        options: [
          'The menu, please.',
          'A table, please.',
          'The water, please.',
          'The bill, please.',
        ],
        correct: 3,
        explanation: 'račun is the bill.',
      },
      {
        q: 'Which sentence is correct? (Can I have a cake?)',
        options: [
          'Mogu li dobiti kolač?',
          'Mogu li dobiti kolaču?',
          'Mogu li dobim kolač?',
          'Mogu li dobiti kolačem?',
        ],
        correct: 0,
        explanation: 'kolač is masculine and stays the same; the second verb stays dobiti.',
      },
      {
        q: 'When does the waiter say "Dobar tek!"?',
        options: [
          'When you leave',
          'When he brings the food',
          'When he brings the bill',
          'When you sit down',
        ],
        correct: 1,
        explanation: 'Dobar tek wishes you a good meal as the food arrives.',
      },
    ],
    vocab: [
      ['jelovnik', 'menu', 'Mogu li dobiti jelovnik?'],
      ['račun', 'bill', 'Račun, molim.'],
      ['konobar', 'waiter', 'Konobar donosi juhu.'],
      ['juha', 'soup', 'Za mene juhu, molim.'],
      ['riba', 'fish', 'Za nju ribu.'],
      ['salata', 'salad', 'Mogu li dobiti salatu?'],
      ['piletina', 'chicken (meat)', 'Za njega piletinu.'],
      ['kolač', 'cake', 'Molim vas kavu i kolač.'],
      ['zajedno', 'together', 'Plaćamo zajedno.'],
      ['odvojeno', 'separately', 'Plaćamo odvojeno.'],
      ['slobodan', 'free, available', 'Imate li slobodan stol?'],
      ['dobar tek', 'enjoy your meal', 'Dobar tek!'],
    ],
  },

  'verbs-iti-jeti': {
    worked: [
      {
        title: 'An -iti Verb, "They"',
        problem: '"They speak Croatian."',
        en: 'They speak Croatian.',
        steps: [
          { label: 'The pattern', text: 'govoriti ends in -iti, so it belongs to the -im group.' },
          { label: 'The stem', text: 'Take -iti off: govor-.' },
          { label: 'The ending', text: '"They" takes -e in this group: govore.' },
        ],
        answer: 'Oni govore hrvatski.',
      },
      {
        title: 'A -jeti Verb, "I"',
        problem: '"I see the sea."',
        en: 'I see the sea.',
        steps: [
          { label: 'The pattern', text: 'vidjeti ends in -jeti, which works like -iti.' },
          { label: 'The stem', text: 'Drop the whole -jeti: vid-.' },
          { label: 'The ending', text: '"I" takes -im: vidim.' },
        ],
        answer: 'Vidim more.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ja ___ hrvatski. (učiti)',
          options: ['učim', 'učam', 'uči', 'učem'],
          correct: 0,
          hint: 'An -iti verb in the "I" form.',
          explanation: 'Ja učim hrvatski.',
        },
        {
          q: '___ li kavu? (voljeti — you, one friend)',
          options: ['Volim', 'Voliš', 'Volješ', 'Vole'],
          correct: 1,
          hint: 'The -je- disappears, and "you" ends in -š.',
          explanation: 'Voliš li kavu?',
        },
        {
          q: 'Mi ___ svaki dan. (raditi)',
          options: ['radimo', 'radamo', 'rademo', 'radiju'],
          correct: 0,
          hint: 'The "we" ending in this group starts with i.',
          explanation: 'Mi radimo svaki dan.',
        },
        {
          q: 'Oni ___ more. (vidjeti)',
          options: ['vidu', 'vidiju', 'vide', 'vidjeju'],
          correct: 2,
          hint: '"They" in the -im group ends in -e.',
          explanation: 'Oni vide more.',
        },
        {
          q: 'Ona ___ knjigu. (čitati)',
          options: ['čiti', 'čita', 'čitim', 'čite'],
          correct: 1,
          hint: 'This one ends in -ati, not -iti.',
          explanation: 'Ona čita knjigu.',
        },
        {
          q: 'Which infinitive gives "volim"?',
          options: ['volati', 'voljeti', 'volijeti', 'voliti'],
          correct: 1,
          hint: 'It is one of the -jeti verbs.',
          explanation: 'voljeti → volim.',
        },
        {
          q: 'Which is the "they" form of pitati?',
          options: ['pitaju', 'pite', 'pitiju', 'pitu'],
          correct: 0,
          hint: 'pitati is an -ati verb.',
          explanation: 'oni pitaju — -ati verbs take -aju.',
        },
        {
          q: 'Vi ___ hrvatski? (razumjeti)',
          options: ['razumite', 'razumijete', 'razumjete', 'razumiju'],
          correct: 1,
          hint: 'This verb is one of the exceptions: it adds -ije-.',
          explanation: 'Razumijete li hrvatski? — razumijem, razumiješ, razumije …',
        },
        {
          type: 'type',
          q: 'Mi ____ hrvatski. (govoriti)',
          answer: 'govorimo',
          hint: 'Stem govor- plus the "we" ending of the -im group.',
          explanation: 'Mi govorimo hrvatski.',
        },
        {
          type: 'type',
          q: 'Djeca ____ sladoled. (voljeti)',
          answer: 'vole',
          hint: 'Drop -jeti; "they" ends in -e.',
          explanation: 'Djeca vole sladoled.',
        },
        {
          type: 'type',
          q: 'Tata ____ ručak. (kuhati)',
          answer: 'kuha',
          hint: 'Look at the vowel before -ti.',
          explanation: 'Tata kuha ručak. — an -ati verb.',
        },
        {
          type: 'type',
          q: 'Što ____? (misliti — you, one friend)',
          answer: 'misliš',
          hint: 'An -iti verb, "you" form.',
          explanation: 'Što misliš?',
        },
        {
          type: 'type',
          q: 'Vi ____ vodu. (piti)',
          answer: 'pijete',
          hint: 'A short -iti verb: it adds -j- before the ending.',
          explanation: 'Vi pijete vodu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Oni ___ svaki dan." (raditi)',
        options: ['radiju', 'radu', 'rade', 'radaju'],
        correct: 2,
        explanation: 'oni rade — "they" ends in -e.',
      },
      {
        q: 'Complete: "Ti ___ dobro." (vidjeti)',
        options: ['vidiš', 'vidjeti', 'vidješ', 'vidaš'],
        correct: 0,
        explanation: 'Drop -jeti, add -iš: vidiš.',
      },
      {
        q: 'Which form is correct? (I understand.)',
        options: ['Razumim.', 'Razumjem.', 'Razumijem.', 'Razumijam.'],
        correct: 2,
        explanation: 'razumjeti is an exception: razumijem.',
      },
      {
        q: 'Which verb follows the -am pattern?',
        options: ['govoriti', 'čitati', 'misliti', 'voljeti'],
        correct: 1,
        explanation: 'čitati → čitam. The others give govorim, mislim, volim.',
      },
      {
        q: 'Complete: "Baka i djed ___ sami." (živjeti)',
        options: ['živu', 'živiju', 'živjeju', 'žive'],
        correct: 3,
        explanation: 'oni žive — the -je- drops and "they" ends in -e.',
      },
      {
        q: 'Complete: "Što ti ___?" (misliti)',
        options: ['misliš', 'mislim', 'mislaš', 'misleš'],
        correct: 0,
        explanation: 'ti misliš.',
      },
    ],
    vocab: [
      ['govoriti', 'to speak', 'Govorim hrvatski.'],
      ['vidjeti', 'to see', 'Vidiš li more?'],
      ['voljeti', 'to love, to like', 'Volimo kavu.'],
      ['živjeti', 'to live', 'Baka i djed žive sami.'],
      ['raditi', 'to work, to do', 'Tata radi svaki dan.'],
      ['učiti', 'to learn, to study', 'Djeca uče hrvatski.'],
      ['misliti', 'to think', 'Što misliš?'],
      ['razumjeti', 'to understand', 'Razumijete li me?'],
      ['sjediti', 'to sit', 'Mi sjedimo i pričamo.'],
      ['nositi', 'to carry, to wear', 'Tata nosi vino.'],
    ],
  },

  'locative-pronouns': {
    worked: [
      {
        title: 'About Her',
        problem: '"We are talking about her."',
        en: 'We are talking about her.',
        steps: [
          { label: 'The verb', text: 'razgovarati o — talk about — is followed by the locative.' },
          { label: 'The pronoun', text: 'The locative of ona is njoj.' },
          { label: 'Build it', text: 'Razgovaramo o …' },
        ],
        answer: 'Razgovaramo o njoj.',
      },
      {
        title: 'About Us',
        problem: '"Grandma often talks about us."',
        en: 'Grandma often talks about us.',
        steps: [
          { label: 'The verb', text: 'pričati o + the locative; baka is "she": priča.' },
          { label: 'The pronoun', text: 'The locative of mi is nama.' },
          { label: 'Build it', text: 'Baka često priča o …' },
        ],
        answer: 'Baka često priča o nama.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Mama misli o ___. (ti)',
          options: ['tebe', 'tebi', 'ti', 'tobom'],
          correct: 1,
          hint: 'o meaning "about" takes the locative.',
          explanation: 'Mama misli o tebi.',
        },
        {
          q: 'Čitam o ___. (on — a footballer)',
          options: ['njemu', 'njega', 'on', 'njim'],
          correct: 0,
          hint: 'The locative of on starts with nj- and ends like the locative of a masculine noun.',
          explanation: 'Čitam o njemu.',
        },
        {
          q: 'Pričamo o ___. (vi)',
          options: ['vas', 'vi', 'vama', 'vami'],
          correct: 2,
          hint: 'Think of mi → nama.',
          explanation: 'Pričamo o vama.',
        },
        {
          q: 'Ovo je torba. U ___ su ključevi. (in it)',
          options: ['nju', 'njoj', 'njemu', 'ona'],
          correct: 1,
          hint: 'torba is feminine, and the keys are not moving.',
          explanation: 'U njoj su ključevi.',
        },
        {
          q: 'Razgovaraju o ___. (oni)',
          options: ['njih', 'njima', 'oni', 'njim'],
          correct: 1,
          hint: 'One locative form serves every "they".',
          explanation: 'Razgovaraju o njima.',
        },
        {
          q: 'Što znaš o ___? (ja)',
          options: ['meni', 'mene', 'ja', 'mnom'],
          correct: 0,
          hint: 'Not the za form — the locative.',
          explanation: 'Što znaš o meni?',
        },
        {
          q: 'Which preposition fits? "Razmišljam ___ tebi." (I am thinking about you.)',
          options: ['o', 'za', 's', 'iz'],
          correct: 0,
          hint: 'The preposition for a topic.',
          explanation: 'Razmišljam o tebi.',
        },
        {
          q: 'Ovo je kuća. ___ živi baka. (in it)',
          options: ['U nju', 'U njoj', 'U ona', 'Na njoj'],
          correct: 1,
          hint: 'Inside the house, and nobody is moving.',
          explanation: 'U njoj živi baka.',
        },
        {
          type: 'type',
          q: 'Razgovaramo o ____. (ona)',
          answer: 'njoj',
          hint: 'The locative of ona starts with nj-.',
          explanation: 'Razgovaramo o njoj.',
        },
        {
          type: 'type',
          q: 'Baka priča o ____. (mi)',
          answer: 'nama',
          hint: 'The locative of mi.',
          explanation: 'Baka priča o nama.',
        },
        {
          type: 'type',
          q: 'Što misliš o ____? (ja)',
          answer: 'meni',
          hint: 'The locative of ja.',
          explanation: 'Što misliš o meni?',
        },
        {
          type: 'type',
          q: 'Pišem o ____. (oni)',
          answer: 'njima',
          hint: 'One form for every "they", starting with nj-.',
          explanation: 'Pišem o njima.',
        },
        {
          type: 'type',
          q: 'Stalno mislim o ____. (ti)',
          answer: 'tebi',
          hint: 'The locative of ti.',
          explanation: 'Stalno mislim o tebi.',
        },
        {
          q: 'Hrvatska je poznata po ___. (more)',
          options: ['more', 'moru', 'mora', 'morem'],
          correct: 1,
          hint: 'po takes the same case as o: the locative.',
          explanation: 'Hrvatska je poznata po moru.',
        },
        {
          type: 'type',
          q: 'Navečer šetamo po ____. (grad)',
          answer: 'gradu',
          hint: 'po + the locative: the masculine ending you know from u Zagrebu.',
          explanation: 'Šetamo po gradu — we walk around town.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Što misliš o ___?" (about me)',
        options: ['ja', 'mene', 'meni', 'mnom'],
        correct: 2,
        explanation: 'o + locative: o meni.',
      },
      {
        q: 'Complete: "Pričamo o ___." (about them)',
        options: ['njima', 'oni', 'njih', 'ih'],
        correct: 0,
        explanation: 'The locative of oni is njima.',
      },
      {
        q: 'Which sentence is correct? (We are talking about you — plural.)',
        options: [
          'Razgovaramo o vas.',
          'Razgovaramo o vama.',
          'Razgovaramo o vi.',
          'Razgovaramo o vami.',
        ],
        correct: 1,
        explanation: 'vi → o vama.',
      },
      {
        q: 'Complete: "Ovo je stol. Na ___ je knjiga." (on it)',
        options: ['on', 'njim', 'njega', 'njemu'],
        correct: 3,
        explanation: 'stol is masculine and the book is resting there: na njemu.',
      },
      {
        q: 'What is wrong with "Govorimo o nju."?',
        options: [
          'Nothing is wrong',
          'nju should be njoj — after o the locative',
          'o should be u',
          'govorimo should be govori',
        ],
        correct: 1,
        explanation: 'Nju is the accusative, used after za. After o it is njoj.',
      },
      {
        q: 'Complete: "Ona piše o ___." (about us)',
        options: ['nama', 'nas', 'mi', 'nami'],
        correct: 0,
        explanation: 'mi → o nama.',
      },
    ],
    vocab: [
      ['razgovarati', 'to talk, to have a conversation', 'Razgovaramo o tebi.'],
      ['pričati', 'to talk, to tell', 'Baka priča o nama.'],
      ['misliti', 'to think', 'Stalno mislim o njoj.'],
      ['pisati', 'to write', 'Pišem o njima.'],
      ['znati', 'to know', 'Što znaš o meni?'],
      ['često', 'often', 'Često mislim o tebi.'],
      ['stalno', 'all the time', 'Stalno pričaš o njemu.'],
      ['pismo', 'letter', 'Pišem pismo o vama.'],
      ['film', 'film', 'Film je o njima.'],
      ['šetati po', 'to walk around (a place)', 'Šetamo po gradu.'],
      ['poznat po', 'known for', 'Hrvatska je poznata po moru.'],
    ],
  },

  'verbs-ovati': {
    worked: [
      {
        title: 'Travelling',
        problem: '"I travel to Split."',
        en: 'I travel to Split.',
        steps: [
          { label: 'The pattern', text: 'putovati ends in -ovati: -ova- becomes -uj-.' },
          { label: 'The ending', text: '"I" adds -em: putujem.' },
          {
            label: 'Where to',
            text: 'Motion to a place: u + the accusative, and Split does not change.',
          },
        ],
        answer: 'Putujem u Split.',
      },
      {
        title: 'Shopping, "They"',
        problem: '"They buy bread every day."',
        en: 'They buy bread every day.',
        steps: [
          { label: 'The pattern', text: 'kupovati ends in -ovati: kupuj-.' },
          { label: 'The ending', text: '"They" adds -u: kupuju.' },
          { label: 'Build it', text: 'Svaki dan … kruh.' },
        ],
        answer: 'Svaki dan kupuju kruh.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ja ___ u Split. (putovati)',
          options: ['putovam', 'putujem', 'putuvam', 'putuje'],
          correct: 1,
          hint: 'The -ova- turns into something else.',
          explanation: 'Putujem u Split.',
        },
        {
          q: 'Vi ___ u Zagrebu? (stanovati)',
          options: ['stanujete', 'stanovate', 'stanuju', 'stanujemo'],
          correct: 0,
          hint: '"You" (plural or polite) ends in -ete.',
          explanation: 'Stanujete li u Zagrebu?',
        },
        {
          q: 'Djeca ___ u igri. (sudjelovati)',
          options: ['sudjeluje', 'sudjelovaju', 'sudjeluju', 'sudjelujeju'],
          correct: 2,
          hint: '"They" ends in a single -u.',
          explanation: 'Djeca sudjeluju u igri.',
        },
        {
          q: 'Which verb is NOT an -ujem verb?',
          options: ['kupovati', 'putovati', 'crtati', 'darovati'],
          correct: 2,
          hint: 'Look for the one without -ov-.',
          explanation: 'crtati → crtam.',
        },
        {
          q: 'Ona ___ baku svaki tjedan. (posjećivati)',
          options: ['posjećiva', 'posjećuje', 'posjećivuje', 'posjećim'],
          correct: 1,
          hint: 'This -ivati verb follows the -ujem pattern.',
          explanation: 'Ona posjećuje baku.',
        },
        {
          q: 'Which is the "I" form of uživati?',
          options: ['uživam', 'užujem', 'uživujem', 'uživim'],
          correct: 0,
          hint: 'Here the -iv- belongs to the root.',
          explanation: 'uživati → uživam.',
        },
        {
          q: 'Mi ___ u sedam. (doručkovati)',
          options: ['doručkovamo', 'doručkujemo', 'doručkuju', 'doručkujem'],
          correct: 1,
          hint: '"We" ends in -emo.',
          explanation: 'Mi doručkujemo u sedam.',
        },
        {
          q: 'Ja ___ sliku. (crtati)',
          options: ['crtujem', 'crtam', 'crtim', 'crtem'],
          correct: 1,
          hint: 'No -ov- in this verb.',
          explanation: 'Ja crtam sliku.',
        },
        {
          type: 'type',
          q: 'Gdje ____ kruh? (kupovati — you, one friend)',
          answer: 'kupuješ',
          hint: 'kupuj- plus the "you" ending -eš.',
          explanation: 'Gdje kupuješ kruh?',
        },
        {
          type: 'type',
          q: 'Oni ____ na moru. (ljetovati)',
          answer: 'ljetuju',
          hint: '-ova- becomes -uj-, then the "they" ending.',
          explanation: 'Oni ljetuju na moru.',
        },
        {
          type: 'type',
          q: 'Mi ____ u Zagrebu. (stanovati)',
          answer: 'stanujemo',
          hint: 'stanuj- plus the "we" ending.',
          explanation: 'Mi stanujemo u Zagrebu.',
        },
        {
          type: 'type',
          q: 'Ja ____ u Dubrovnik. (putovati)',
          answer: 'putujem',
          hint: 'putuj- plus the "I" ending.',
          explanation: 'Putujem u Dubrovnik.',
        },
        {
          type: 'type',
          q: 'Karta ____ put. (pokazivati)',
          answer: 'pokazuje',
          hint: 'pokazuj- plus the he/she/it ending.',
          explanation: 'Karta pokazuje put. — The map shows the way.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Mi ___ na moru." (ljetovati)',
        options: ['ljetujemo', 'ljetovamo', 'ljetovemo', 'ljetuju'],
        correct: 0,
        explanation: 'ljetuj- + -emo: ljetujemo.',
      },
      {
        q: 'Complete: "Ti ___ u sedam?" (doručkovati)',
        options: ['doručkovaš', 'doručkuješ', 'doručkuje', 'doručkujem'],
        correct: 1,
        explanation: 'doručkuj- + -eš: doručkuješ.',
      },
      {
        q: 'Which sentence is correct? (They travel a lot.)',
        options: ['Puno putovaju.', 'Puno putuje.', 'Puno putuju.', 'Puno putujeju.'],
        correct: 2,
        explanation: 'oni putuju.',
      },
      {
        q: 'Which verb follows the -am pattern?',
        options: ['kupovati', 'sudjelovati', 'putovati', 'gledati'],
        correct: 3,
        explanation: 'gledati has no -ov-: gledam.',
      },
      {
        q: 'Complete: "Vodič ___ grad." (pokazivati)',
        options: ['pokazuje', 'pokaziva', 'pokazivuje', 'pokazuju'],
        correct: 0,
        explanation: 'pokazivati → pokazuje.',
      },
      {
        q: 'What is wrong with "Ja kupovam kruh."?',
        options: [
          'kruh should be kruhu',
          'Nothing is wrong',
          'kupovam should be kupujem',
          'ja should be mi',
        ],
        correct: 2,
        explanation: 'The -ova- turns into -uj-: Ja kupujem kruh.',
      },
    ],
    vocab: [
      ['putovati', 'to travel', 'Često putujem u Hrvatsku.'],
      ['kupovati', 'to buy, to shop', 'Gdje kupuješ kruh?'],
      ['stanovati', 'to live (somewhere)', 'Stanujemo u Zagrebu.'],
      ['doručkovati', 'to have breakfast', 'Doručkujem u sedam.'],
      ['ljetovati', 'to spend the summer holiday', 'Gdje ljetujete?'],
      ['sudjelovati', 'to take part', 'Djeca sudjeluju u igri.'],
      ['pokazivati', 'to show', 'Vodič pokazuje grad.'],
      ['posjećivati', 'to visit', 'Svaki tjedan posjećujem baku.'],
      ['uživati', 'to enjoy', 'Uživamo na moru.'],
      ['crtati', 'to draw', 'Ja crtam sliku.'],
    ],
  },

  months: {
    worked: [
      {
        title: 'A Masculine Month',
        problem: '"My birthday is in May."',
        en: 'My birthday is in May.',
        steps: [
          { label: 'When', text: '"In" a month is u + the locative.' },
          {
            label: 'The ending',
            text: 'svibanj is masculine: -u, and the fleeting a drops out: svibnj-u.',
          },
          { label: 'Build it', text: 'Moj rođendan je u …' },
        ],
        answer: 'Moj rođendan je u svibnju.',
      },
      {
        title: 'The Feminine Month',
        problem: '"Valentine’s Day is in February."',
        en: 'Valentine’s Day is in February.',
        steps: [
          { label: 'When', text: 'u + the locative.' },
          { label: 'The ending', text: 'veljača is feminine in -a, so -a becomes -i.' },
          { label: 'Build it', text: 'Valentinovo je u …' },
        ],
        answer: 'Valentinovo je u veljači.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Idemo na more u ___. (lipanj)',
          options: ['lipanj', 'lipnju', 'lipanju', 'lipnja'],
          correct: 1,
          hint: 'The fleeting a drops when the ending is added.',
          explanation: 'u lipnju.',
        },
        {
          q: 'Which month is January?',
          options: ['siječanj', 'veljača', 'prosinac', 'ožujak'],
          correct: 0,
          hint: 'The first month of the year.',
          explanation: 'siječanj is January.',
        },
        {
          q: 'Which month is July?',
          options: ['lipanj', 'srpanj', 'kolovoz', 'svibanj'],
          correct: 1,
          hint: 'Its name comes from the harvest sickle.',
          explanation: 'srpanj is July.',
        },
        {
          q: 'Which is correct? (in October)',
          options: ['u listopad', 'u Listopadu', 'u listopadu', 'u listopada'],
          correct: 2,
          hint: 'A small letter and the locative ending.',
          explanation: 'u listopadu.',
        },
        {
          q: 'Which month comes after travanj?',
          options: ['ožujak', 'lipanj', 'svibanj', 'rujan'],
          correct: 2,
          hint: 'April is followed by May.',
          explanation: 'travanj, svibanj, lipanj.',
        },
        {
          q: 'Sada je ___. (It is September now.)',
          options: ['rujnu', 'rujan', 'Rujan', 'rujna'],
          correct: 1,
          hint: 'No preposition, so no ending — and a small letter.',
          explanation: 'Sada je rujan.',
        },
        {
          q: 'How do you say "in November"?',
          options: ['u studeni', 'u studenom', 'u studenu', 'u Studenom'],
          correct: 1,
          hint: 'This month takes an adjective ending.',
          explanation: 'u studenom (or u studenome).',
        },
        {
          q: 'Which month name means "the leaves fall"?',
          options: ['lipanj', 'listopad', 'travanj', 'srpanj'],
          correct: 1,
          hint: 'list = leaf.',
          explanation: 'listopad: list + padati.',
        },
        {
          type: 'type',
          q: 'Moj rođendan je u ____. (ožujak)',
          answer: 'ožujku',
          hint: 'The fleeting a drops, then the locative -u.',
          explanation: 'u ožujku.',
        },
        {
          type: 'type',
          q: 'Božić je u ____. (prosinac)',
          answer: 'prosincu',
          hint: 'The fleeting a drops, then the locative -u.',
          explanation: 'u prosincu.',
        },
        {
          type: 'type',
          q: 'Ispiti su u ____. (lipanj)',
          answer: 'lipnju',
          hint: 'The fleeting a drops, then the locative -u.',
          explanation: 'u lipnju.',
        },
        {
          type: 'type',
          q: 'Dan državnosti je u ____. (svibanj)',
          answer: 'svibnju',
          hint: 'The fleeting a drops, then the locative -u.',
          explanation: 'u svibnju.',
        },
        {
          type: 'type',
          q: 'Baka dolazi u ____. (travanj)',
          answer: 'travnju',
          hint: 'The fleeting a drops, then the locative -u.',
          explanation: 'u travnju.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Baka dolazi u ___." (srpanj)',
        options: ['srpanj', 'srpnju', 'srpanju', 'srpnja'],
        correct: 1,
        explanation: 'u srpnju — the fleeting a drops.',
      },
      {
        q: 'Which month is April?',
        options: ['ožujak', 'svibanj', 'travanj', 'lipanj'],
        correct: 2,
        explanation: 'travanj, from trava, grass.',
      },
      {
        q: 'Complete: "U ___ je Božić." (prosinac)',
        options: ['prosincu', 'prosinacu', 'prosinac', 'prosinca'],
        correct: 0,
        explanation: 'u prosincu.',
      },
      {
        q: 'Which month comes after kolovoz?',
        options: ['srpanj', 'listopad', 'studeni', 'rujan'],
        correct: 3,
        explanation: 'kolovoz (August) is followed by rujan (September).',
      },
      {
        q: 'Which is correct? (in March)',
        options: ['u ožujak', 'u ožujaku', 'u ožujku', 'u Ožujku'],
        correct: 2,
        explanation: 'u ožujku — small letter, no fleeting a.',
      },
      {
        q: 'Complete: "Valentinovo je u ___." (veljača)',
        options: ['veljači', 'veljaču', 'veljača', 'veljače'],
        correct: 0,
        explanation: 'The feminine month: -a becomes -i.',
      },
    ],
    vocab: [
      ['mjesec', 'month', 'Koji je mjesec?'],
      ['siječanj', 'January', 'Putujemo u siječnju.'],
      ['veljača', 'February', 'Valentinovo je u veljači.'],
      ['ožujak', 'March', 'Moj rođendan je u ožujku.'],
      ['travanj', 'April', 'Baka dolazi u travnju.'],
      ['svibanj', 'May', 'Dan državnosti je u svibnju.'],
      ['lipanj', 'June', 'Ispiti su u lipnju.'],
      ['srpanj', 'July', 'Baka dolazi u srpnju.'],
      ['kolovoz', 'August', 'U kolovozu idemo na more.'],
      ['rujan', 'September', 'Škola počinje u rujnu.'],
      ['listopad', 'October', 'Sada je listopad.'],
      ['studeni', 'November', 'Rođendan je u studenom.'],
      ['prosinac', 'December', 'Božić je u prosincu.'],
    ],
  },

  'flat-rooms': {
    worked: [
      {
        title: 'Inside Something',
        problem: '"The clothes are in the wardrobe."',
        en: 'The clothes are in the wardrobe.',
        steps: [
          { label: 'In or on', text: 'Inside the wardrobe: u.' },
          { label: 'The case', text: 'Nothing is moving, so the locative.' },
          { label: 'The ending', text: 'ormar is masculine: -u.' },
        ],
        answer: 'Odjeća je u ormaru.',
      },
      {
        title: 'On a Surface',
        problem: '"The book is on the shelf."',
        en: 'The book is on the shelf.',
        steps: [
          { label: 'In or on', text: 'On top of the shelf: na.' },
          { label: 'The case', text: 'It is lying there, so the locative.' },
          { label: 'The ending', text: 'polica is feminine: -a becomes -i.' },
        ],
        answer: 'Knjiga je na polici.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Djeca su u ___. (soba)',
          options: ['soba', 'sobu', 'sobi', 'sobe'],
          correct: 2,
          hint: 'Being in a room; feminine -a changes.',
          explanation: 'Djeca su u sobi.',
        },
        {
          q: 'Lampa je na ___. (stol)',
          options: ['stol', 'stolu', 'stola', 'stolom'],
          correct: 1,
          hint: 'Position, masculine.',
          explanation: 'Lampa je na stolu.',
        },
        {
          q: 'Which room is the hallway?',
          options: ['hodnik', 'balkon', 'kuhinja', 'kupaonica'],
          correct: 0,
          hint: 'The space you walk through from the front door.',
          explanation: 'hodnik is the hallway.',
        },
        {
          q: 'Mi ručamo u ___. (kuhinja)',
          options: ['kuhinji', 'kuhinju', 'kuhinja', 'kuhinjom'],
          correct: 0,
          hint: 'Where you are, not where you are going.',
          explanation: 'Mi ručamo u kuhinji.',
        },
        {
          q: 'u or na? "Sjedimo ___ balkonu."',
          options: ['u', 'na', 'o', 'po'],
          correct: 1,
          hint: 'A balcony is one of the places that take the "on" preposition.',
          explanation: 'Sjedimo na balkonu.',
        },
        {
          q: 'Slika je na ___. (zid)',
          options: ['zid', 'zidi', 'zidu', 'zida'],
          correct: 2,
          hint: 'Masculine nouns take -u in the locative.',
          explanation: 'Slika je na zidu.',
        },
        {
          q: 'Which sentence is correct? (The flat is big.)',
          options: ['Stan je velika.', 'Stan je velik.', 'Stan je veliko.', 'Stan je velike.'],
          correct: 1,
          hint: 'stan is masculine.',
          explanation: 'Stan je velik.',
        },
        {
          q: 'Stan ___ balkon. (The flat has a balcony.)',
          options: ['ima', 'je', 'imam', 'imaju'],
          correct: 0,
          hint: 'The verb for having, in the it form.',
          explanation: 'Stan ima balkon.',
        },
        {
          type: 'type',
          q: 'Ključevi su u ____. (hodnik)',
          answer: 'hodniku',
          hint: 'Masculine: add the locative ending.',
          explanation: 'Ključevi su u hodniku.',
        },
        {
          type: 'type',
          q: 'Torba je na ____. (stolica)',
          answer: 'stolici',
          hint: 'Feminine -a becomes -i.',
          explanation: 'Torba je na stolici.',
        },
        {
          type: 'type',
          q: 'Pas spava na ____. (kauč)',
          answer: 'kauču',
          hint: 'Masculine: add the locative ending.',
          explanation: 'Pas spava na kauču.',
        },
        {
          type: 'type',
          q: 'Ručnik je u ____. (kupaonica)',
          answer: 'kupaonici',
          hint: 'Feminine -a becomes -i.',
          explanation: 'Ručnik je u kupaonici.',
        },
        {
          type: 'type',
          q: 'Cvijeće je na ____. (prozor)',
          answer: 'prozoru',
          hint: 'Masculine: add the locative ending.',
          explanation: 'Cvijeće je na prozoru. — on the windowsill.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Mlijeko je u ___." (hladnjak)',
        options: ['hladnjak', 'hladnjaku', 'hladnjku', 'hladnjaka'],
        correct: 1,
        explanation: 'u hladnjaku — this a stays.',
      },
      {
        q: 'Complete: "Tata je u ___." (kupaonica)',
        options: ['kupaonica', 'kupaonicu', 'kupaonici', 'kupaonice'],
        correct: 2,
        explanation: 'u kupaonici.',
      },
      {
        q: 'Which sentence is correct? (The cat is on the bed.)',
        options: [
          'Mačka je na krevetom.',
          'Mačka je na kreveta.',
          'Mačka je na krevet.',
          'Mačka je na krevetu.',
        ],
        correct: 3,
        explanation: 'na + locative: na krevetu.',
      },
      {
        q: 'Which room is the bathroom?',
        options: ['kupaonica', 'kuhinja', 'hodnik', 'spavaća soba'],
        correct: 0,
        explanation: 'kupaonica is the bathroom.',
      },
      {
        q: 'Complete: "Tepih je na ___." (pod — the floor)',
        options: ['pod', 'podu', 'poda', 'podom'],
        correct: 1,
        explanation: 'na podu.',
      },
      {
        q: 'Which sentence is correct? (The kitchen is small.)',
        options: ['Kuhinja je mali.', 'Kuhinja je mala.', 'Kuhinja je malo.', 'Kuhinja je male.'],
        correct: 1,
        explanation: 'kuhinja is feminine: mala.',
      },
    ],
    vocab: [
      ['stan', 'flat, apartment', 'Imam mali stan u gradu.'],
      ['kuhinja', 'kitchen', 'Mama je u kuhinji.'],
      ['kupaonica', 'bathroom', 'Tata je u kupaonici.'],
      ['hodnik', 'hallway', 'Ključevi su u hodniku.'],
      ['balkon', 'balcony', 'Sjedimo na balkonu.'],
      ['krevet', 'bed', 'Mačka spava na krevetu.'],
      ['ormar', 'wardrobe', 'Odjeća je u ormaru.'],
      ['stolica', 'chair', 'Torba je na stolici.'],
      ['polica', 'shelf', 'Knjiga je na polici.'],
      ['hladnjak', 'fridge', 'Mlijeko je u hladnjaku.'],
      ['kauč', 'sofa', 'Pas spava na kauču.'],
      ['zid', 'wall', 'Slika je na zidu.'],
    ],
  },
};
