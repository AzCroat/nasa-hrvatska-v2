// functions/api/content/_data/a1new/batch02.js
//
// New A1 lessons, batch 02 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// zvati-se (16) · masculine-plural-ovi (19) · sibilarization (20) · fleeting-a (21) ·
// colours (22) · possessive-adjectives (24).
//
// WHAT THESE LESSONS MAY USE. The present tense (25) and every case after the nominative
// come later, so the sentences here run on biti (je, su, nije, jesu li), the presentative
// "Ovo je / Ovo su", ovdje / tamo, and — from lesson 16 — zvati se. Possessives (17) are
// used from lesson 17 on; adjective agreement first appears with the colours (22).
// A noun's plural is always the NOMINATIVE plural: no other plural case is taught yet.
//
// Authoring rules: CLAUDE.md "Croatian Content Authoring". Distractors are wrong by
// ending, gender or word order — never Serbian, never real Croatian a native would say.

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'zvati-se',
    masterOrder: 16,
    prerequisites: ['pronouns-biti', 'greetings-farewells'],
    objectives: [
      'Say your name and ask anyone else theirs: Zovem se… / Kako se zoveš? / Kako se zovete?',
      'Use all six forms of zvati se: zovem, zoveš, zove, zovemo, zovete, zovu',
      'Put the little word se in second place, and ask what a place is called',
    ],
  },
  {
    id: 'masculine-plural-ovi',
    masterOrder: 19,
    prerequisites: ['plural-nouns'],
    objectives: [
      'Make the plural of one-syllable masculine nouns with -ovi: grad → gradovi',
      'Choose -evi after a soft consonant: ključ → ključevi, muž → muževi',
      'Know the short nouns that take a plain -i: dan → dani, gost → gosti',
    ],
  },
  {
    id: 'sibilarization',
    masterOrder: 20,
    prerequisites: ['masculine-plural-ovi'],
    objectives: [
      'Change k → c, g → z, h → s before the plural -i: vojnik → vojnici',
      'Recognise when nothing changes: vlak → vlakovi, majka → majke',
      'Read and say the plurals of everyday nouns in -k, -g and -h',
    ],
  },
  {
    id: 'fleeting-a',
    masterOrder: 21,
    prerequisites: ['sibilarization'],
    objectives: [
      'Drop the fleeting a when the plural ending is added: pas → psi, stranac → stranci',
      'Handle the sounds that meet when it drops: vrabac → vrapci, momak → momci',
      'Know the nouns that keep their a: korak → koraci',
    ],
  },
  {
    id: 'colours',
    masterOrder: 22,
    prerequisites: ['gender', 'plural-nouns', 'fleeting-a'],
    objectives: [
      'Name eleven colours in Croatian',
      'Make a colour agree with its noun in gender and number: Kuća je crvena. Krovovi su crveni.',
      'Ask and answer "What colour is this?"',
    ],
  },
  {
    id: 'possessive-adjectives',
    masterOrder: 24,
    prerequisites: ['possessives', 'family-people', 'adjectives-basic'],
    objectives: [
      'Say "Ana\'s", "Marko\'s", "the sister\'s" with -in, -ov and -ev: Anin, Markov, prijateljev',
      'Make the possessive agree with the thing owned: Anin brat, Anina sestra, Anino pismo',
      'Use the plural forms: Anini prijatelji, Markove knjige',
    ],
  },
];

// ─────────────────────────────────────────────────────────
// 16 · zvati se
// ─────────────────────────────────────────────────────────
const ZVATI_SE = {
  id: 'zvati-se',
  title: 'What Is Your Name?',
  subtitle: 'Zovem se… — saying and asking names with zvati se',
  icon: '🪪',
  level: 'A1',
  duration: '~6 min',
  color: '#7c3aed',
  bg: '#f5f3ff',
  slides: [
    {
      type: 'intro',
      title: 'Names, Taken Apart',
      body: 'You already say "Zovem se Ana" from the greetings lesson, as one fixed phrase. This lesson takes it apart so you can use it for anyone: yourself, a friend, a stranger, two people at once, even a town or a street. It is one verb with six forms, and one small word that always sits in the same place.',
      icon: '🪪',
    },
    {
      type: 'rule',
      title: 'Literally: I Call Myself',
      body: 'Croatian does not say "my name is". It says Zovem se Ana — literally "I call myself Ana". zovem means "I call", and se is a small word meaning "myself, oneself". The dictionary form is zvati se, "to be called". A verb that comes with se like this is called reflexive (the action turns back on the speaker); you will meet many more later.',
      highlight: 'Zovem se Ana.',
    },
    {
      type: 'table',
      title: 'All Six Forms',
      headers: ['Who', 'Croatian', 'English'],
      rows: [
        ['ja (I)', 'zovem se', 'my name is'],
        ['ti (you, one friend)', 'zoveš se', 'your name is'],
        ['on / ona / ono (he / she / it)', 'zove se', 'his / her / its name is'],
        ['mi (we)', 'zovemo se', 'our names are'],
        ['vi (you, polite or several)', 'zovete se', 'your name is / your names are'],
        ['oni / one / ona (they)', 'zovu se', 'their names are'],
      ],
    },
    {
      type: 'rule',
      title: 'Se Sits in Second Place',
      body: 'se is a tiny unstressed word, and it cannot open a sentence. It goes in the SECOND place: straight after the verb when the verb comes first (Zovem se Ana), after ja or a name when they come first (Ja se zovem Ana, Ivan se zove…), and after the question word in a question (Kako se zoveš?). "Se zovem Ana" is never right.',
      highlight: 'Kako se zoveš?',
    },
    {
      type: 'rule',
      title: 'Ti or Vi?',
      body: 'To a friend, a child or someone your age, ask Kako se zoveš? To an adult you do not know, a teacher or an official — or to two or more people — ask Kako se zovete? The answer is the same either way: Zovem se… You do not need to say ja; the ending -m already tells everyone who is speaking.',
      highlight: 'Kako se zovete?',
    },
    {
      type: 'rule',
      title: 'Places Have Names Too',
      body: 'The same verb names towns, streets and villages: Kako se zove ovaj grad? (What is this city called?) — Ovaj grad se zove Zadar. For a surname there is a second verb that works the same way, prezivati se: Prezivam se Horvat (My surname is Horvat), Kako se prezivate? (What is your surname?).',
      highlight: 'Prezivam se Horvat.',
    },
    {
      type: 'example',
      title: 'Names in Conversation',
      items: [
        {
          hr: 'Bog! Kako se zoveš? — Zovem se Ivan.',
          en: 'Hi! What is your name? — My name is Ivan.',
          note: 'ti form to someone your age',
        },
        {
          hr: 'Dobar dan. Kako se zovete? — Zovem se Marija Horvat.',
          en: 'Good afternoon. What is your name? — My name is Marija Horvat.',
          note: 'vi form to a stranger',
        },
        {
          hr: 'Ja se zovem Ana, a ti?',
          en: 'My name is Ana, and yours?',
          note: 'with ja first, se moves to second place',
        },
        {
          hr: 'To je profesor. Zove se Marko Babić.',
          en: 'That is the teacher. His name is Marko Babić.',
          note: 'zove — the on form',
        },
        {
          hr: 'Kako se zove ova žena? — Zove se Petra.',
          en: 'What is this woman called? — She is called Petra.',
          note: 'the same form for ona',
        },
        {
          hr: 'Mi se zovemo Ana i Ivana.',
          en: 'Our names are Ana and Ivana.',
          note: 'mi → zovemo',
        },
        {
          hr: 'Kako se zovu? — Zovu se Marko i Josip.',
          en: 'What are their names? — They are called Marko and Josip.',
          note: 'oni → zovu',
        },
        {
          hr: 'Kako se zove ovaj grad? — Ovaj grad se zove Split.',
          en: 'What is this city called? — This city is called Split.',
          note: 'places are named the same way',
        },
        {
          hr: 'Kako se zove ova ulica? — Zove se Ilica.',
          en: 'What is this street called? — It is called Ilica.',
          note: 'Ilica is a long street in the centre of Zagreb',
        },
        {
          hr: 'Prezivam se Kovač. Kako se prezivate?',
          en: 'My surname is Kovač. What is your surname?',
          note: 'prezivati se — for surnames',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: "You meet your child's new teacher. How do you ask her name?",
      options: ['Kako se zoveš?', 'Kako se zovete?', 'Kako se zove?', 'Kako zovete?'],
      correct: 1,
      explanation:
        'An adult you do not know gets the polite vi form: Kako se zovete? "Kako se zoveš?" is for a friend, "Kako se zove?" asks about someone else, and "Kako zovete?" has lost its se.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Which sentence is correct?',
      options: ['Se zovem Marko.', 'Zovem Marko se.', 'Ja zovem se Marko.', 'Ja se zovem Marko.'],
      correct: 3,
      explanation:
        'se takes the second place: after ja when ja comes first. It can never open the sentence, and it does not wander to the end or to third place.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'Three slips are typical. First, leaving out se: "Zovem Ana" is not Croatian at all — giving your name needs se: Zovem se Ana. (Calling Ana on the phone is a different sentence with a different form of her name, which comes in a later lesson.) Second, putting se in the wrong place: it is Ja se zovem Ana and Kako se zoveš?, never "Se zovem Ana" or "Ja zovem se Ana". Third, keeping the ja form for someone else: it is On se zove Ivan, not "On se zovem Ivan".',
      highlight: 'Ja se zovem Ana',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Kako se ___?" (asking a child his name)',
          options: ['zovem', 'zoveš', 'zove', 'zovete'],
          correct: 1,
          explanation:
            'A child gets the ti form, and the ti ending is -š: Kako se zoveš? zovete is the polite or plural form, zove asks about someone else, and zovem is your own.',
        },
        {
          q: 'Complete: "Ona se ___ Petra."',
          options: ['zovem', 'zoveš', 'zove', 'zovu'],
          correct: 2,
          explanation: 'ona takes the same form as on: zove. zovu is for several people.',
        },
        {
          q: 'Which question asks an older stranger politely?',
          options: ['Kako se zovete?', 'Kako se zoveš?', 'Kako se zovu?', 'Kako zoveš?'],
          correct: 0,
          explanation:
            'Politeness uses vi: Kako se zovete? zoveš is informal, zovu asks about "them", and "Kako zoveš?" is missing se.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Mi zovemo se Ana i Ivana.',
            'Se zovemo Ana i Ivana.',
            'Mi se zovu Ana i Ivana.',
            'Mi se zovemo Ana i Ivana.',
          ],
          correct: 3,
          explanation:
            'mi takes zovemo, and with mi first, se is second. "Se zovemo" opens with se, and "mi se zovu" uses the oni form.',
        },
        {
          q: 'What does "Kako se zove ovaj grad?" mean?',
          options: [
            'What is this city called?',
            'Where is this city?',
            'Is this a city?',
            'Which city is big?',
          ],
          correct: 0,
          explanation:
            'kako se zove asks for a name, and ovaj grad is "this city". Places are named with the same verb as people.',
        },
        {
          q: '"Kako se zovu?" — "___ se Marko i Josip."',
          options: ['Zove', 'Zovemo', 'Zovu', 'Zovete'],
          correct: 2,
          explanation:
            'The answer is about them, so it keeps the oni form: Zovu se Marko i Josip. zove is for one person, zovemo for us, zovete for you.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'zvati se — Key Takeaways',
      points: [
        'Zovem se Ana = literally "I call myself Ana"',
        'zovem, zoveš, zove, zovemo, zovete, zovu',
        'se is always second: Zovem se… / Ja se zovem… / Kako se zoveš?',
        'Kako se zoveš? to a friend; Kako se zovete? to a stranger or to several people',
        'Places too: Kako se zove ovaj grad?',
        'Surnames: Prezivam se Horvat.',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 19 · masculine plural -ovi / -evi
// ─────────────────────────────────────────────────────────
const MASCULINE_OVI = {
  id: 'masculine-plural-ovi',
  title: 'Short Nouns, Long Plurals',
  subtitle: 'grad → gradovi, ključ → ključevi — the -ovi / -evi plural',
  icon: '🏙️',
  level: 'A1',
  duration: '~6 min',
  color: '#0369a1',
  bg: '#f0f9ff',
  slides: [
    {
      type: 'intro',
      title: 'One Pattern, Hundreds of Words',
      body: 'In the plural lesson you met grad → gradovi. This lesson is about that one pattern, because it covers some of the most common nouns in the language — city, table, son, bridge, key, number. Short masculine nouns do not just add -i: they grow first.',
      icon: '🏙️',
    },
    {
      type: 'rule',
      title: 'Count the Syllables',
      body: 'A syllable is one beat with one vowel in it: grad has one beat, stu-dent has two. A masculine noun with ONE syllable usually adds -ovi in the plural: grad → gradovi, stol → stolovi, sin → sinovi, brod (ship) → brodovi, most (bridge) → mostovi. A masculine noun with two or more syllables usually adds a plain -i: student → studenti, profesor → profesori.',
      highlight: 'grad → gradovi',
    },
    {
      type: 'rule',
      title: '-ovi or -evi?',
      body: 'Look at the last letter. After a soft consonant — č, ć, đ, j, lj, nj, š, ž — the ending is -evi instead of -ovi: muž (husband) → muževi, nož (knife) → noževi, ključ (key) → ključevi, broj (number) → brojevi, kralj (king) → kraljevi, čaj (tea) → čajevi. Everywhere else it is -ovi. Your mouth agrees: "kraljovi" is awkward to say, kraljevi flows.',
      highlight: 'ključ → ključevi',
    },
    {
      type: 'rule',
      title: 'A Few Short Nouns Do Not Grow',
      body: 'Some very common one-syllable nouns take a plain -i, and you learn them as words: dan (day) → dani, gost (guest) → gosti, zub (tooth) → zubi, konj (horse) → konji, prst (finger) → prsti. And a few nouns change completely, as you saw in the plural lessons: brat → braća, čovjek → ljudi.',
      highlight: 'dan → dani',
    },
    {
      type: 'table',
      title: 'The Pattern at a Glance',
      headers: ['Singular', 'Plural', 'Why'],
      rows: [
        ['grad (city)', 'gradovi', 'one syllable, hard d → -ovi'],
        ['stol (table)', 'stolovi', 'one syllable → -ovi'],
        ['most (bridge)', 'mostovi', 'one syllable → -ovi'],
        ['vlak (train)', 'vlakovi', 'one syllable → -ovi'],
        ['muž (husband)', 'muževi', 'soft ž → -evi'],
        ['ključ (key)', 'ključevi', 'soft č → -evi'],
        ['broj (number)', 'brojevi', 'soft j → -evi'],
        ['student', 'studenti', 'two syllables → plain -i'],
        ['dan (day)', 'dani', 'learn it: no growth'],
        ['gost (guest)', 'gosti', 'learn it: no growth'],
      ],
    },
    {
      type: 'rule',
      title: 'The Verb Goes Plural Too',
      body: 'A plural subject takes su, not je: Grad je ovdje. — Gradovi su ovdje. And to point at several things at once, Croatian keeps ovo and to and changes only the verb: Ovo su ključevi (These are keys), To su brodovi (Those are ships).',
      highlight: 'Gradovi su ovdje.',
    },
    {
      type: 'example',
      title: 'Short Nouns in the Plural',
      items: [
        {
          hr: 'Ovo je stol. Ovo su stolovi.',
          en: 'This is a table. These are tables.',
          note: 'stol → stolovi',
        },
        {
          hr: 'Gdje su ključevi? Ključevi su ovdje.',
          en: 'Where are the keys? The keys are here.',
          note: 'ključ → ključevi: after soft č the noun takes -evi',
        },
        {
          hr: 'Ovo su mostovi, a ono su brodovi.',
          en: 'These are bridges, and those over there are ships.',
          note: 'most → mostovi, brod → brodovi',
        },
        {
          hr: 'Jesu li to vlakovi? Da, to su vlakovi.',
          en: 'Are those trains? Yes, those are trains.',
          note: 'jesu li — the plural question',
        },
        {
          hr: 'Muževi su ovdje, a žene su tamo.',
          en: 'The husbands are here, and the wives are there.',
          note: 'muž → muževi',
        },
        {
          hr: 'Ovo su brojevi: jedan, dva i tri.',
          en: 'These are numbers: one, two and three.',
          note: 'broj → brojevi',
        },
        {
          hr: 'To nisu satovi, to su noževi.',
          en: 'Those are not clocks, those are knives.',
          note: 'sat → satovi, nož → noževi',
        },
        {
          hr: 'Gosti su tamo, a sinovi su ovdje.',
          en: 'The guests are there, and the sons are here.',
          note: 'gost → gosti (no growth), sin → sinovi',
        },
        {
          hr: 'Ovo su kraljevi i kraljice.',
          en: 'These are kings and queens.',
          note: 'kralj → kraljevi',
        },
        {
          hr: 'Studenti su tamo, a profesori su ovdje.',
          en: 'The students are there, and the teachers are here.',
          note: 'longer nouns: plain -i',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the plural of "most" (bridge)?',
      options: ['mosti', 'mostovi', 'mostevi', 'moste'],
      correct: 1,
      explanation:
        'most has one syllable and ends in a hard t, so it takes -ovi: mostovi. -evi belongs after soft consonants, and a bare -i skips the growth.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the plural of "nož" (knife)?',
      options: ['noževi', 'nožovi', 'noži', 'noža'],
      correct: 0,
      explanation:
        'nož ends in ž, a soft consonant, so it grows with -evi: noževi. "nožovi" uses the hard-consonant ending.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The commonest slip is a bare -i on a short noun: "gradi", "stoli" and "sini" do not exist — it is gradovi, stolovi, sinovi. The second is -ovi after a soft consonant: "nožovi" and "ključovi" are wrong, because č, ć, đ, j, lj, nj, š and ž take -evi. The third is growing a long noun: student has two syllables, so it is studenti, never "studentovi".',
      highlight: 'gradovi, stolovi, sinovi',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What is the plural of "brod" (ship)?',
          options: ['brodi', 'brodevi', 'brodovi', 'broda'],
          correct: 2,
          explanation: 'One syllable, hard d: brodovi.',
        },
        {
          q: 'What is the plural of "ključ" (key)?',
          options: ['ključovi', 'ključevi', 'ključi', 'ključa'],
          correct: 1,
          explanation: 'č is soft, so the short noun grows with -evi: ključevi.',
        },
        {
          q: 'What is the plural of "profesor"?',
          options: ['profesorovi', 'profesorevi', 'profesora', 'profesori'],
          correct: 3,
          explanation:
            'profesor has three syllables, so it takes a plain -i: profesori. Only one-syllable nouns grow.',
        },
        {
          q: 'Which sentence is correct?',
          options: ['Sinovi su ovdje.', 'Sini su ovdje.', 'Sinovi je ovdje.', 'Sinevi su ovdje.'],
          correct: 0,
          explanation:
            'sin → sinovi (hard n), and a plural subject takes su. "Sini" skips the growth, "sinevi" uses the soft ending, "je" is singular.',
        },
        {
          q: 'What is the plural of "gost" (guest)?',
          options: ['gostovi', 'gostevi', 'gosti', 'goste'],
          correct: 2,
          explanation: 'gost is one of the short nouns that do not grow: gosti.',
        },
        {
          q: 'What is the plural of "kralj" (king)?',
          options: ['kraljevi', 'kraljovi', 'kralji', 'kralja'],
          correct: 0,
          explanation: 'lj is soft, so the ending is -evi: kraljevi.',
        },
      ],
    },
    {
      type: 'summary',
      title: '-ovi / -evi — Key Takeaways',
      points: [
        'One-syllable masculine nouns grow: grad → gradovi, stol → stolovi',
        'After č, ć, đ, j, lj, nj, š, ž: -evi — ključ → ključevi, muž → muževi',
        'Two or more syllables: plain -i — student → studenti',
        'Learn the exceptions: dan → dani, gost → gosti, zub → zubi, konj → konji',
        'A plural subject takes su: Gradovi su ovdje.',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 20 · sibilarization (k → c, g → z, h → s)
// ─────────────────────────────────────────────────────────
const SIBILARIZATION = {
  id: 'sibilarization',
  title: 'When K, G and H Change',
  subtitle: 'vojnik → vojnici, bubreg → bubrezi, orah → orasi',
  icon: '🔀',
  level: 'A1',
  duration: '~6 min',
  color: '#b45309',
  bg: '#fffbeb',
  slides: [
    {
      type: 'intro',
      title: 'A Sound Rule, Not a List',
      body: 'You met it once already: vojnik → vojnici. This lesson makes the rule yours. Three consonants — k, g and h — cannot stand right in front of the plural -i, so they turn into a softer, hissing sound. Once you hear it, the plurals stop looking random.',
      icon: '🔀',
    },
    {
      type: 'rule',
      title: 'The Three Pairs',
      body: 'k → c, g → z, h → s — when the plural -i comes straight after them. vojnik (soldier) → vojnici, učenik (pupil) → učenici, jezik (language) → jezici, bubreg (kidney) → bubrezi, dijalog (dialogue) → dijalozi, orah (walnut) → orasi, Čeh (Czech man) → Česi. Remember c sounds like "ts" in "cats".',
      highlight: 'k → c, g → z, h → s',
    },
    {
      type: 'rule',
      title: 'Why It Happens',
      body: 'Over centuries, Croatian softened k, g and h when an i followed, and the plural kept the result. The grammar name is sibilarization (a sibilant is a hissing sound like c, z, s) — you do not need the name, only the habit. Say vojnici aloud a few times; "vojniki" will soon sound foreign to you too.',
      highlight: 'vojnici',
    },
    {
      type: 'rule',
      title: 'Only Directly Before -i',
      body: 'If anything stands between the consonant and the -i, nothing changes. One-syllable nouns put -ov- in the middle, so the k, g or h stays: vlak (train) → vlakovi, vrh (peak) → vrhovi, rog (horn) → rogovi. And feminine nouns end in -e in the plural, so they never change: majka → majke, knjiga → knjige. A few short nouns do take a plain -i and so do change: đak (pupil) → đaci, Čeh (Czech) → Česi.',
      highlight: 'vlak → vlakovi',
    },
    {
      type: 'table',
      title: 'Change or No Change',
      headers: ['Singular', 'Plural', 'What happens'],
      rows: [
        ['vojnik (soldier)', 'vojnici', 'k → c'],
        ['učenik (pupil)', 'učenici', 'k → c'],
        ['jezik (language)', 'jezici', 'k → c'],
        ['bubreg (kidney)', 'bubrezi', 'g → z'],
        ['dijalog (dialogue)', 'dijalozi', 'g → z'],
        ['orah (walnut)', 'orasi', 'h → s'],
        ['Čeh (Czech man)', 'Česi', 'h → s'],
        ['vlak (train)', 'vlakovi', 'no change: -ov- in between'],
        ['vrh (peak)', 'vrhovi', 'no change: -ov- in between'],
        ['majka (mother)', 'majke', 'no change: ending is -e'],
      ],
    },
    {
      type: 'example',
      title: 'Hissing Plurals',
      items: [
        {
          hr: 'Ovo je učenik. Ovo su učenici.',
          en: 'This is a pupil. These are pupils.',
          note: 'k → c',
        },
        {
          hr: 'Vojnici su tamo, a radnici su ovdje.',
          en: 'The soldiers are there, and the workers are here.',
          note: 'vojnik → vojnici, radnik → radnici',
        },
        {
          hr: 'Hrvatski i njemački su jezici.',
          en: 'Croatian and German are languages.',
          note: 'jezik → jezici',
        },
        {
          hr: 'Gdje su đaci? Đaci su tamo.',
          en: 'Where are the pupils? The pupils are there.',
          note: 'đak → đaci',
        },
        {
          hr: 'Jesu li ovo orasi? Ne, to su lješnjaci.',
          en: 'Are these walnuts? No, those are hazelnuts.',
          note: 'orah → orasi, lješnjak → lješnjaci',
        },
        {
          hr: 'Česi i Slovaci su susjedi.',
          en: 'Czechs and Slovaks are neighbours.',
          note: 'Čeh → Česi (h → s), Slovak → Slovaci (k → c)',
        },
        {
          hr: 'Liječnici su ovdje, a psiholozi su tamo.',
          en: 'The doctors are here, and the psychologists are there.',
          note: 'liječnik → liječnici, psiholog → psiholozi',
        },
        {
          hr: 'Ovo su kovčezi, a to su vlakovi.',
          en: 'These are suitcases, and those are trains.',
          note: 'kovčeg → kovčezi, but vlak → vlakovi',
        },
        {
          hr: 'Putnici su tamo, a vlakovi su ovdje.',
          en: 'The passengers are there, and the trains are here.',
          note: 'putnik → putnici',
        },
        {
          hr: 'Majke su ovdje, a djeca su tamo.',
          en: 'The mothers are here, and the children are there.',
          note: 'majka → majke: no -i, no change',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the plural of "radnik" (worker)?',
      options: ['radniki', 'radnikovi', 'radnici', 'radnika'],
      correct: 2,
      explanation:
        'radnik has two syllables, so it takes a plain -i, and k before -i becomes c: radnici.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the plural of "vrh" (peak)?',
      options: ['vrhovi', 'vrsi', 'vrhi', 'vrsovi'],
      correct: 0,
      explanation:
        'vrh has one syllable, so it grows -ov-, and with -ov- in between the h does not touch the -i: vrhovi.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'Two errors pull in opposite directions. The first is forgetting the change: "vojniki", "učeniki" and "jeziki" sound foreign — it is vojnici, učenici, jezici. The second is changing where nothing touches the -i: vlak → vlakovi, never "vlacovi" or "vlaci"; majka → majke, never "majce". The test is one question: does -i come straight after k, g or h? Then change it: učenik → učenici.',
      highlight: 'učenik → učenici',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What is the plural of "jezik" (language)?',
          options: ['jeziki', 'jezici', 'jezikovi', 'jezike'],
          correct: 1,
          explanation: 'Two syllables → plain -i, and k before -i becomes c: jezici.',
        },
        {
          q: 'What is the plural of "bubreg" (kidney)?',
          options: ['bubregi', 'bubregovi', 'bubrezovi', 'bubrezi'],
          correct: 3,
          explanation: 'g before -i becomes z: bubrezi.',
        },
        {
          q: 'What is the plural of "orah" (walnut)?',
          options: ['orasi', 'orahi', 'orahovi', 'orase'],
          correct: 0,
          explanation: 'h before -i becomes s: orasi.',
        },
        {
          q: 'Which sentence is correct?',
          options: [
            'Učeniki su ovdje.',
            'Učenikovi su ovdje.',
            'Učenici su ovdje.',
            'Učenici je ovdje.',
          ],
          correct: 2,
          explanation:
            'učenik → učenici, with a plural verb su. "Učeniki" skips the change and "učenikovi" grows a three-syllable noun.',
        },
        {
          q: 'What is the plural of "vlak" (train)?',
          options: ['vlaci', 'vlakovi', 'vlaki', 'vlacovi'],
          correct: 1,
          explanation:
            'vlak is short, so it grows -ov-, and the k no longer touches the -i: vlakovi. No change happens.',
        },
        {
          q: 'Why does "majka" NOT become "majce" in the plural?',
          options: [
            'The feminine plural ending is -e, not -i',
            'majka is masculine',
            'k never changes in Croatian',
            'majka has one syllable',
          ],
          correct: 0,
          explanation:
            'The change happens only before -i. Feminine nouns take -e in the plural, so majka → majke.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'k, g, h — Key Takeaways',
      points: [
        'Before the plural -i: k → c, g → z, h → s',
        'vojnik → vojnici, bubreg → bubrezi, orah → orasi',
        'With -ov- in between, nothing changes: vlak → vlakovi',
        'Feminine -e plurals never change: majka → majke',
        'Test: does -i touch k, g or h directly?',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 21 · fleeting a (nominative plural)
// ─────────────────────────────────────────────────────────
const FLEETING_A = {
  id: 'fleeting-a',
  title: 'The A That Disappears',
  subtitle: 'pas → psi, stranac → stranci — the fleeting a',
  icon: '🐕',
  level: 'A1',
  duration: '~6 min',
  color: '#be185d',
  bg: '#fdf2f8',
  slides: [
    {
      type: 'intro',
      title: 'Where Did the A Go?',
      body: 'One dog is pas. Two dogs are not "pasi" — they are psi. Some masculine nouns have an a in their last syllable that lives only in the dictionary form. The moment an ending is added, it drops out. Learn to spot these nouns and their plurals stop looking strange.',
      icon: '🐕',
    },
    {
      type: 'rule',
      title: 'Only the Dictionary Form Has It',
      body: 'In pas (dog), stranac (foreigner), kupac (customer) and lonac (pot), the a before the final consonant is a fleeting a — in Croatian grammars, nepostojano a, "the a that is not always there". Add the plural -i and it goes: pas → psi, stranac → stranci, kupac → kupci, lonac → lonci.',
      highlight: 'pas → psi',
    },
    {
      type: 'rule',
      title: 'How to Spot It',
      body: 'Nouns ending in -ac with two or more syllables nearly always lose the a: Nijemac (German man) → Nijemci, Amerikanac → Amerikanci, lovac (hunter) → lovci, starac (old man) → starci. Nouns in -ak are mixed, so learn the plural with the word: momak (lad) → momci loses it, korak (step) → koraci keeps it.',
      highlight: 'Nijemac → Nijemci',
    },
    {
      type: 'rule',
      title: 'Then the Consonants Meet',
      body: 'When the a drops, two consonants touch and sometimes adjust. vrabac (sparrow) → vrapci: b turns to p beside c, and Croatian spelling writes what you say. momak → momci: the k now touches the -i, so k → c, the rule from the last lesson. otac (father) loses its a and its t; the stem oc- is short, so it grows -evi, and c becomes č before it: očevi. And san (dream) → snovi: the a drops and the short stem grows -ovi.',
      highlight: 'vrabac → vrapci',
    },
    {
      type: 'table',
      title: 'Nouns With a Fleeting A',
      headers: ['Singular', 'Plural', 'Note'],
      rows: [
        ['pas (dog)', 'psi', 'a drops'],
        ['stranac (foreigner)', 'stranci', 'a drops'],
        ['kupac (customer)', 'kupci', 'a drops'],
        ['lonac (pot)', 'lonci', 'a drops'],
        ['Nijemac (German man)', 'Nijemci', 'a drops'],
        ['vrabac (sparrow)', 'vrapci', 'a drops, b → p'],
        ['momak (lad)', 'momci', 'a drops, k → c'],
        ['otac (father)', 'očevi', 'a and t drop, -evi'],
        ['san (dream)', 'snovi', 'a drops, -ovi'],
        ['korak (step)', 'koraci', 'a STAYS, k → c'],
      ],
    },
    {
      type: 'example',
      title: 'The Plural Without Its A',
      items: [
        { hr: 'Ovo je pas. Ovo su psi.', en: 'This is a dog. These are dogs.', note: 'pas → psi' },
        {
          hr: 'Psi su tamo, a mačke su ovdje.',
          en: 'The dogs are there, and the cats are here.',
          note: 'psi takes a plural verb',
        },
        {
          hr: 'Stranci su ovdje, a Hrvati su tamo.',
          en: 'The foreigners are here, and the Croats are there.',
          note: 'stranac → stranci; Hrvat → Hrvati has no fleeting a',
        },
        {
          hr: 'Jesu li to Nijemci? Ne, to su Amerikanci.',
          en: 'Are those Germans? No, those are Americans.',
          note: 'Nijemac → Nijemci, Amerikanac → Amerikanci',
        },
        {
          hr: 'Momci su tamo, a djevojke su ovdje.',
          en: 'The lads are there, and the girls are here.',
          note: 'momak → momci: a drops, k → c',
        },
        {
          hr: 'Očevi i sinovi su ovdje.',
          en: 'The fathers and sons are here.',
          note: 'otac → očevi',
        },
        {
          hr: 'Gdje su kupci? Kupci su tamo.',
          en: 'Where are the customers? The customers are there.',
          note: 'kupac → kupci',
        },
        {
          hr: 'Ovo su vrapci, a ono su golubovi.',
          en: 'These are sparrows, and those over there are pigeons.',
          note: 'vrabac → vrapci; golub → golubovi',
        },
        {
          hr: 'Lonci su ovdje, a noževi su tamo.',
          en: 'The pots are here, and the knives are there.',
          note: 'lonac → lonci',
        },
        {
          hr: 'Lovci i psi su tamo.',
          en: 'The hunters and the dogs are there.',
          note: 'lovac → lovci, pas → psi',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'What is the plural of "stranac" (foreigner)?',
      options: ['stranaci', 'stranci', 'strancovi', 'strance'],
      correct: 1,
      explanation: 'The a before the final c is fleeting, so it drops when -i is added: stranci.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'What is the plural of "pas" (dog)?',
      options: ['pasi', 'pasovi', 'psi', 'pse'],
      correct: 2,
      explanation:
        'pas loses its a: ps- + -i = psi. It does not grow -ov-, and pse is a different form you will meet later.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The first mistake is keeping the a: "pasi", "stranaci" and "Nijemaci" are what every learner says at first — it is psi, stranci, Nijemci. The second is dropping an a that stays: korak → koraci, not "korci". The third is forgetting what happens when consonants meet: it is vrapci and momci, never "vrabci" or "momki". Say it aloud: Ovo su psi.',
      highlight: 'Ovo su psi',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'What is the plural of "kupac" (customer)?',
          options: ['kupaci', 'kupci', 'kupcovi', 'kupce'],
          correct: 1,
          explanation: 'The fleeting a drops: kupci.',
        },
        {
          q: 'What is the plural of "momak" (lad)?',
          options: ['momki', 'momaci', 'momakovi', 'momci'],
          correct: 3,
          explanation: 'The a drops (momk-), then k touches -i and becomes c: momci.',
        },
        {
          q: 'What is the plural of "otac" (father)?',
          options: ['očevi', 'otci', 'otaci', 'otcovi'],
          correct: 0,
          explanation:
            'otac loses its a and its t, the short stem grows -evi after the soft c, and c becomes č: očevi.',
        },
        {
          q: 'Which sentence is correct?',
          options: ['Ovo su pasi.', 'Ovo je psi.', 'Ovo su psi.', 'Ovo su pasovi.'],
          correct: 2,
          explanation: 'pas → psi, and a plural takes su: Ovo su psi.',
        },
        {
          q: 'What is the plural of "korak" (step)?',
          options: ['korci', 'koraki', 'koraci', 'korakovi'],
          correct: 2,
          explanation:
            'korak is one of the -ak nouns that KEEP their a; the k still becomes c before -i: koraci.',
        },
        {
          q: 'What is the plural of "vrabac" (sparrow)?',
          options: ['vrabaci', 'vrapci', 'vrabci', 'vrabcovi'],
          correct: 1,
          explanation: 'The a drops and b turns to p beside c: vrapci.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Fleeting A — Key Takeaways',
      points: [
        'Some masculine nouns lose an a when an ending is added: pas → psi',
        'Most nouns in -ac lose it: stranac → stranci, Nijemac → Nijemci',
        '-ak nouns vary: momak → momci, but korak → koraci',
        'Consonants adjust when they meet: vrabac → vrapci, otac → očevi',
        'Only the dictionary form carries the a',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 22 · colours
// ─────────────────────────────────────────────────────────
const COLOURS = {
  id: 'colours',
  title: 'Colours',
  subtitle: 'crven, crvena, crveno — colours that agree with their noun',
  icon: '🎨',
  level: 'A1',
  duration: '~6 min',
  color: '#dc2626',
  bg: '#fef2f2',
  slides: [
    {
      type: 'intro',
      title: 'What Colour Is It?',
      body: 'Colour words are adjectives — words that describe a noun. In English they never change: a red car, a red house, red apples. In Croatian they change their ending to match the noun. Learn the colours and you also learn how every Croatian describing word agrees.',
      icon: '🎨',
    },
    {
      type: 'rule',
      title: 'The Colours',
      body: 'crven (red), plav (blue), zelen (green), žut (yellow), bijel (white), crn (black), siv (grey), smeđ (brown), narančast (orange), ljubičast (purple), ružičast (pink). This is the masculine form, the one a dictionary lists. The word for colour itself is boja.',
      highlight: 'crven, plav, zelen',
    },
    {
      type: 'rule',
      title: 'Matching One Thing',
      body: 'A colour takes the gender of its noun: nothing added for masculine, -a for feminine, -o for neuter. Auto je crven. Kuća je crvena. Vino je crveno. The noun decides and the colour follows. Careful with auto: it ends in -o but is masculine, so it is crven.',
      highlight: 'Kuća je crvena.',
    },
    {
      type: 'rule',
      title: 'Matching Many',
      body: 'In the plural the endings are -i for masculine, -e for feminine and -a for neuter — the same vowels the nouns themselves take. Oblaci su sivi (oblak → oblaci). Kuće su bijele. Jaja su smeđa. A plural noun needs a plural colour and the plural verb su.',
      highlight: 'Kuće su bijele.',
    },
    {
      type: 'rule',
      title: 'Brown Is Soft',
      body: 'smeđ ends in đ, a soft consonant, so its neuter singular ends in -e instead of -o: smeđe jaje (a brown egg), but plavo jaje. All its other forms are regular: smeđ, smeđa, smeđi, smeđe, smeđa. One more useful fact: plava kosa is fair, blond hair, not blue hair.',
      highlight: 'smeđe jaje',
    },
    {
      type: 'table',
      title: 'Six Colours, Six Forms',
      headers: ['m.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'],
      rows: [
        ['crven', 'crvena', 'crveno', 'crveni', 'crvene', 'crvena'],
        ['plav', 'plava', 'plavo', 'plavi', 'plave', 'plava'],
        ['zelen', 'zelena', 'zeleno', 'zeleni', 'zelene', 'zelena'],
        ['bijel', 'bijela', 'bijelo', 'bijeli', 'bijele', 'bijela'],
        ['crn', 'crna', 'crno', 'crni', 'crne', 'crna'],
        ['smeđ', 'smeđa', 'smeđe', 'smeđi', 'smeđe', 'smeđa'],
      ],
    },
    {
      type: 'rule',
      title: 'Asking About Colour',
      body: 'Koja je ovo boja? — What colour is this? Answer with the colour and boja, which is feminine: Ovo je zelena boja. To check a guess, ask with je li: Je li auto crven? — Ne, auto je plav.',
      highlight: 'Koja je ovo boja?',
    },
    {
      type: 'example',
      title: 'Colours Everywhere',
      items: [
        {
          hr: 'Nebo je plavo, a trava je zelena.',
          en: 'The sky is blue, and the grass is green.',
          note: 'nebo neuter → plavo; trava feminine → zelena',
        },
        {
          hr: 'Snijeg je bijel, a noć je crna.',
          en: 'Snow is white, and the night is black.',
          note: 'snijeg masculine; noć is feminine though it ends in a consonant',
        },
        {
          hr: 'Hrvatska zastava je crvena, bijela i plava.',
          en: 'The Croatian flag is red, white and blue.',
          note: 'zastava is feminine',
        },
        {
          hr: 'Banane su žute, a jabuke su crvene.',
          en: 'Bananas are yellow, and apples are red.',
          note: 'feminine plural -e',
        },
        {
          hr: 'Oblaci su sivi, a more je plavo.',
          en: 'The clouds are grey, and the sea is blue.',
          note: 'masculine plural -i, neuter -o',
        },
        {
          hr: 'Kuće su bijele, a krovovi su crveni.',
          en: 'The houses are white, and the roofs are red.',
          note: 'krov → krovovi, a short masculine noun',
        },
        {
          hr: 'Je li auto crven? Ne, auto je plav.',
          en: 'Is the car red? No, the car is blue.',
          note: 'auto is masculine',
        },
        {
          hr: 'Oči su smeđe, a kosa je crna.',
          en: 'The eyes are brown, and the hair is black.',
          note: 'oči is a feminine plural',
        },
        {
          hr: 'Koja je ovo boja? Ovo je ljubičasta boja.',
          en: 'What colour is this? This is purple.',
          note: 'boja is feminine',
        },
        {
          hr: 'Psi su smeđi, a mačke su crne.',
          en: 'The dogs are brown, and the cats are black.',
          note: 'psi masculine plural, mačke feminine plural',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'Complete: "Kuća je ___." (white)',
      options: ['bijel', 'bijela', 'bijelo', 'bijele'],
      correct: 1,
      explanation: 'kuća ends in -a, so it is feminine, and the colour adds -a: bijela.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'Complete: "Jabuke su ___." (red)',
      options: ['crveni', 'crvena', 'crvene', 'crven'],
      correct: 2,
      explanation: 'jabuke is a feminine plural, so the colour takes -e: crvene.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'English colours never change, so the first instinct is one form for everything: "Kuća je crven" — but kuća is feminine, so Kuća je crvena. Second, the noun\'s ending can mislead: auto ends in -o yet is masculine, so it is Auto je crven, not "crveno". Third, a plural noun needs a plural colour: Jabuke su crvene, never "Jabuke su crven".',
      highlight: 'Kuća je crvena',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'Complete: "Nebo je ___." (blue — nebo is neuter)',
          options: ['plav', 'plava', 'plavo', 'plave'],
          correct: 2,
          explanation: 'A neuter noun takes -o: Nebo je plavo.',
        },
        {
          q: 'Complete: "Trava je ___." (green)',
          options: ['zelen', 'zelena', 'zeleno', 'zeleni'],
          correct: 1,
          explanation: 'trava is feminine: zelena.',
        },
        {
          q: 'Complete: "Oblaci su ___." (grey)',
          options: ['sivi', 'sive', 'siva', 'siv'],
          correct: 0,
          explanation: 'oblaci is a masculine plural, so the colour takes -i: sivi.',
        },
        {
          q: 'Which sentence is correct?',
          options: ['Auto je crveno.', 'Auto je crvena.', 'Auto su crven.', 'Auto je crven.'],
          correct: 3,
          explanation: 'auto is masculine despite its -o, so the colour has no ending: crven.',
        },
        {
          q: 'Complete: "Oči su ___." (brown — oči is a feminine plural)',
          options: ['smeđi', 'smeđa', 'smeđe', 'smeđ'],
          correct: 2,
          explanation: 'Feminine plural takes -e: Oči su smeđe.',
        },
        {
          q: 'Complete: "Jaje je ___." (brown — jaje is neuter)',
          options: ['smeđo', 'smeđe', 'smeđa', 'smeđ'],
          correct: 1,
          explanation: 'smeđ ends in the soft đ, so its neuter singular is -e, not -o: smeđe jaje.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Colours — Key Takeaways',
      points: [
        'crven, plav, zelen, žut, bijel, crn, siv, smeđ, narančast, ljubičast, ružičast',
        'One thing: -∅ / -a / -o — crven, crvena, crveno',
        'Many: -i / -e / -a — crveni, crvene, crvena',
        'smeđ is soft: smeđe jaje',
        'auto is masculine: Auto je crven.',
        'Koja je ovo boja? — Ovo je zelena boja.',
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// 24 · possessive adjectives (Anin, Markov)
// ─────────────────────────────────────────────────────────
const POSSESSIVE_ADJ = {
  id: 'possessive-adjectives',
  title: "Ana's, Marko's",
  subtitle: 'Anin, Markov, sestrin — saying whose something is',
  icon: '🏷️',
  level: 'A1',
  duration: '~7 min',
  color: '#15803d',
  bg: '#f0fdf4',
  slides: [
    {
      type: 'intro',
      title: "No 's in Croatian",
      body: "English adds 's to the owner: Ana's book, Marko's car. Croatian turns the owner into an adjective — a describing word — with its own ending: Ana → Anin, Marko → Markov. And like every adjective, it then agrees with the thing owned. That one idea covers this whole lesson.",
      icon: '🏷️',
    },
    {
      type: 'rule',
      title: 'Owner Ends in -a: Add -in',
      body: "If the owner's word ends in -a — a woman's name, a man's name like Luka, or a word like sestra — drop the -a and add -in: Ana → Anin, Marija → Marijin, Luka → Lukin, sestra (sister) → sestrin, mama → mamin, tata (dad) → tatin, baka (grandmother) → bakin.",
      highlight: 'Ana → Anin',
    },
    {
      type: 'rule',
      title: 'Owner Ends in a Consonant: Add -ov or -ev',
      body: 'Ivan → Ivanov, Josip → Josipov, brat → bratov, djed (grandfather) → djedov. Marko drops its -o first: Markov. After a soft consonant (č, ć, đ, j, lj, nj, š, ž, and c) it is -ev: Matej → Matejev, prijatelj (friend) → prijateljev, otac (father) → očev. Petar loses its fleeting a, as in the last lessons: Petrov.',
      highlight: 'Ivan → Ivanov',
    },
    {
      type: 'rule',
      title: 'It Agrees With the Thing Owned',
      body: 'Exactly like moj, moja, moje: Anin brat, Anina sestra, Anino pismo — and in the plural Anini prijatelji, Anine sestre, Anina pisma. Ana herself never decides the ending; the thing she owns does. Markov brat, Markova sestra, Markovo pismo.',
      highlight: 'Anin brat, Anina sestra',
    },
    {
      type: 'table',
      title: 'Four Owners, Six Forms',
      headers: ['Owner', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'],
      rows: [
        ['Ana', 'Anin', 'Anina', 'Anino', 'Anini', 'Anine', 'Anina'],
        ['Marko', 'Markov', 'Markova', 'Markovo', 'Markovi', 'Markove', 'Markova'],
        ['sestra', 'sestrin', 'sestrina', 'sestrino', 'sestrini', 'sestrine', 'sestrina'],
        ['otac', 'očev', 'očeva', 'očevo', 'očevi', 'očeve', 'očeva'],
      ],
    },
    {
      type: 'rule',
      title: 'Capitals, and One Word to Learn',
      body: 'A possessive made from a name keeps its capital letter: Anin, Markov. One made from an ordinary word does not: sestrin, bratov. And one very common word changes a sound: majka (mother) → majčin, majčina, majčino — while baka → bakin and Luka → Lukin do not change. Learn majčin as a word.',
      highlight: 'majka → majčin',
    },
    {
      type: 'example',
      title: 'Whose Is It?',
      items: [
        {
          hr: 'Ovo je Anin brat, a ovo je Anina sestra.',
          en: "This is Ana's brother, and this is Ana's sister.",
          note: 'brat masculine → Anin; sestra feminine → Anina',
        },
        { hr: 'Markov auto je crven.', en: "Marko's car is red.", note: 'auto is masculine' },
        {
          hr: 'Je li ovo Ivanova knjiga? Ne, to je Josipova knjiga.',
          en: "Is this Ivan's book? No, that is Josip's book.",
          note: 'knjiga feminine → -ova',
        },
        {
          hr: 'Ovo su Anini prijatelji.',
          en: "These are Ana's friends.",
          note: 'masculine plural -i',
        },
        {
          hr: 'Sestrina kuća je velika, a bratov stan je mali.',
          en: "The sister's house is big, and the brother's flat is small.",
          note: 'sestra → sestrin, brat → bratov',
        },
        {
          hr: 'Lukin pas je crn, a Markova mačka je bijela.',
          en: "Luka's dog is black, and Marko's cat is white.",
          note: 'Luka ends in -a → Lukin',
        },
        {
          hr: 'Majčino pismo je ovdje.',
          en: "Mother's letter is here.",
          note: 'majka → majčin; pismo neuter → -o',
        },
        { hr: 'Djedova kuća je stara.', en: "Grandfather's house is old.", note: 'djed → djedov' },
        {
          hr: 'To su Petrove knjige.',
          en: "Those are Petar's books.",
          note: 'Petar → Petrov, feminine plural -e',
        },
        {
          hr: 'Tatin auto je plav, a mamin auto je zelen.',
          en: "Dad's car is blue, and Mum's car is green.",
          note: 'tata → tatin, mama → mamin',
        },
        {
          hr: 'Očev brat je moj stric.',
          en: "Father's brother is my uncle (stric).",
          note: 'otac → očev',
        },
      ],
    },
    {
      type: 'quiz',
      title: 'Quick Check',
      q: 'How do you say "Ana\'s sister"?',
      options: ['Anin sestra', 'Anina sestra', 'Ana sestra', 'Anino sestra'],
      correct: 1,
      explanation: 'Ana → Anin, and sestra is feminine, so the possessive adds -a: Anina sestra.',
    },
    {
      type: 'quiz',
      title: 'One More',
      q: 'How do you say "Ivan\'s car"?',
      options: ['Ivanov auto', 'Ivanova auto', 'Ivanin auto', 'Ivan auto'],
      correct: 0,
      explanation:
        'Ivan ends in a consonant → Ivanov, and auto is masculine, so nothing is added: Ivanov auto.',
    },
    {
      type: 'rule',
      title: 'Common Mistakes',
      body: 'The trap is matching the owner instead of the thing: Ana is a woman, but her brother is masculine, so it is Anin brat, never "Anina brat". Second, using the bare name the English way: "Ana knjiga" means nothing — it is Anina knjiga. Third, -ov after a soft consonant: prijatelj → prijateljev, not "prijateljov".',
      highlight: 'Anin brat',
    },
    {
      type: 'check',
      title: 'Mastery Check',
      items: [
        {
          q: 'How do you say "Marko\'s sister"?',
          options: ['Markov sestra', 'Markova sestra', 'Markino sestra', 'Marko sestra'],
          correct: 1,
          explanation: 'Marko → Markov, and sestra is feminine: Markova sestra.',
        },
        {
          q: 'Complete: "Ovo je ___ pismo." (Ana\'s — pismo is neuter)',
          options: ['Anin', 'Anina', 'Anino', 'Anine'],
          correct: 2,
          explanation: 'A neuter noun takes -o: Anino pismo.',
        },
        {
          q: 'Which is the possessive adjective from "Luka" (a man\'s name)?',
          options: ['Lukov', 'Lukev', 'Lučin', 'Lukin'],
          correct: 3,
          explanation:
            "Luka ends in -a, so it takes -in whatever the owner's gender: Lukin. The k does not change.",
        },
        {
          q: 'Complete: "To su ___ prijatelji." (Ivan\'s)',
          options: ['Ivanovi', 'Ivanove', 'Ivanova', 'Ivanov'],
          correct: 0,
          explanation: 'prijatelji is a masculine plural: Ivanovi prijatelji.',
        },
        {
          q: 'Which phrase means "the friend\'s car" (prijatelj = friend)?',
          options: ['prijateljov auto', 'prijateljin auto', 'prijateljev auto', 'prijatelj auto'],
          correct: 2,
          explanation: 'lj is soft, so the ending is -ev: prijateljev auto.',
        },
        {
          q: 'How do you say "mother\'s house" (majka)?',
          options: ['majčino kuća', 'majčin kuća', 'majčina kuća', 'majka kuća'],
          correct: 2,
          explanation: 'majka → majčin, and kuća is feminine: majčina kuća.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Possessive Adjectives — Key Takeaways',
      points: [
        'Owner in -a → -in: Ana → Anin, sestra → sestrin, Luka → Lukin',
        'Owner in a consonant → -ov: Ivan → Ivanov, Marko → Markov',
        'After a soft consonant → -ev: prijatelj → prijateljev, otac → očev',
        'It agrees with the thing owned: Anin brat, Anina sestra, Anino pismo',
        'Plural: Anini prijatelji, Anine sestre, Anina pisma',
        'Learn majka → majčin; names keep their capital: Anin, Markov',
      ],
    },
  ],
};

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  ZVATI_SE,
  MASCULINE_OVI,
  SIBILARIZATION,
  FLEETING_A,
  COLOURS,
  POSSESSIVE_ADJ,
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'zvati-se': {
    worked: [
      {
        title: 'Saying Your Name',
        problem: 'Say: My name is Ana.',
        en: 'Say: My name is Ana.',
        steps: [
          {
            label: 'No "my name is"',
            text: 'Croatian says "I call myself", with the verb zvati se.',
          },
          { label: 'The ja form', text: 'For yourself the verb ends in -m: zovem.' },
          {
            label: 'Place se',
            text: 'The verb comes first here, so se goes straight after it, then the name.',
          },
        ],
        answer: 'Zovem se Ana.',
      },
      {
        title: 'Asking Politely',
        problem: 'Ask a teacher (politely) for his name.',
        en: 'Ask a teacher his name.',
        steps: [
          { label: 'Who are you asking?', text: 'A teacher is an adult you address politely: vi.' },
          { label: 'The vi form', text: 'The vi form of the verb ends in -te: zovete.' },
          {
            label: 'Build the question',
            text: 'The question word kako goes first, se second, the verb third.',
          },
        ],
        answer: 'Kako se zovete?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"What is your name?" — to a friend',
          options: ['Kako se zoveš?', 'Kako se zovete?', 'Kako se zovem?', 'Kako zoveš se?'],
          correct: 0,
          hint: 'A friend gets the ti form, and se stays in second place.',
          explanation: 'Kako se zoveš? — ti form, se right after kako.',
        },
        {
          q: 'On ___ zove Ivan.',
          options: ['se', 'sam', 'je', 'si'],
          correct: 0,
          hint: 'The small word meaning "himself" that always comes with this verb.',
          explanation: 'On se zove Ivan. — the reflexive se.',
        },
        {
          q: '"Kako se zove ova ulica?" means…',
          options: [
            'Where is this street?',
            'Is this a street?',
            'What is this street called?',
            'Which street is this house in?',
          ],
          correct: 2,
          hint: 'kako se zove always asks for a name.',
          explanation: 'What is this street called? — places are named with zvati se.',
        },
        {
          q: '"Their names are Ana and Ivan."',
          options: [
            'Zove se Ana i Ivan.',
            'Zovu se Ana i Ivan.',
            'Zovemo se Ana i Ivan.',
            'Zovete se Ana i Ivan.',
          ],
          correct: 1,
          hint: 'Two people you are talking ABOUT: the oni form.',
          explanation: 'Zovu se Ana i Ivan. — oni → zovu.',
        },
        {
          q: 'Which sentence is correct?',
          options: ['Se zovem Petra.', 'Zovem se Petra.', 'Zovem Petra se.', 'Zovem si Petra.'],
          correct: 1,
          hint: 'The small word can never open a sentence, and it is not si.',
          explanation: 'Zovem se Petra. — verb first, se second.',
        },
        {
          q: 'Ja ___ Josip.',
          options: ['se zovem', 'zovem se', 'se zove', 'zove se'],
          correct: 0,
          hint: 'With ja first, the small word takes the second place, and the verb is the ja form.',
          explanation: 'Ja se zovem Josip. — se straight after ja.',
        },
        {
          q: '"My surname is Horvat."',
          options: [
            'Prezime sam Horvat.',
            'Prezivam Horvat.',
            'Prezivam se Horvat.',
            'Ja sam prezivam Horvat.',
          ],
          correct: 2,
          hint: 'Surnames have their own verb, and it also needs the small reflexive word.',
          explanation: 'Prezivam se Horvat. — prezivati se works like zvati se.',
        },
        {
          q: 'Kako se ___ ovaj grad?',
          options: ['zovem', 'zoveš', 'zove', 'zovu'],
          correct: 2,
          hint: 'A city is "it": the on / ona / ono form.',
          explanation: 'Kako se zove ovaj grad? — one city, third person.',
        },
        {
          type: 'type',
          q: 'Kako se ____? (asking a friend)',
          answer: 'zoveš',
          hint: 'The ti form ends in -š.',
          explanation: 'Kako se zoveš?',
        },
        {
          type: 'type',
          q: 'Kako se ____? (asking a stranger politely)',
          answer: 'zovete',
          hint: 'The polite vi form ends in -te.',
          explanation: 'Kako se zovete?',
        },
        {
          type: 'type',
          q: 'Mi se ____ Ana i Ivana.',
          answer: 'zovemo',
          hint: 'The mi form ends in -mo.',
          explanation: 'Mi se zovemo Ana i Ivana.',
        },
        {
          type: 'type',
          q: 'Oni se ____ Marko i Luka.',
          answer: 'zovu',
          hint: 'The oni form is the shortest one, ending in -u.',
          explanation: 'Oni se zovu Marko i Luka.',
        },
        {
          type: 'type',
          q: 'Ona ____ zove Petra.',
          answer: 'se',
          hint: 'The little reflexive word, in second place.',
          explanation: 'Ona se zove Petra.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Kako se ___?" (asking a teacher politely)',
        options: ['zoveš', 'zovete', 'zove', 'zovem'],
        correct: 1,
        explanation: 'Politeness uses vi: Kako se zovete?',
      },
      {
        q: 'Complete: "Ovaj grad se ___ Zadar."',
        options: ['zovu', 'zovemo', 'zove', 'zoveš'],
        correct: 2,
        explanation: 'One city takes the on form: zove.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Se zove Luka.', 'Zove Luka se.', 'On zove se Luka.', 'On se zove Luka.'],
        correct: 3,
        explanation: 'With on first, se is second: On se zove Luka.',
      },
      {
        q: '"Zovu se Ana i Iva." means…',
        options: [
          'Their names are Ana and Iva.',
          'Our names are Ana and Iva.',
          'Call Ana and Iva.',
          'Your names are Ana and Iva.',
        ],
        correct: 0,
        explanation: 'zovu is the oni form: their names.',
      },
      {
        q: 'Complete: "Ja se ___ Marija."',
        options: ['zove', 'zovem', 'zoveš', 'zovu'],
        correct: 1,
        explanation: 'ja → zovem.',
      },
      {
        q: 'What is wrong with "Zovem Ivan." as a way of giving your name?',
        options: [
          'se is missing: Zovem se Ivan.',
          'zovem should be zove',
          'Ivan should come first',
          'Nothing is wrong',
        ],
        correct: 0,
        explanation:
          'Without se the verb means calling someone. Giving your name needs zvati se: Zovem se Ivan.',
      },
    ],
    vocab: [
      ['zvati se', 'to be called', 'Kako se zoveš?'],
      ['prezivati se', 'to have the surname', 'Prezivam se Kovač.'],
      ['ime', 'first name', 'Ana je ime, a Horvat je prezime.'],
      ['prezime', 'surname', 'Prezime je Horvat, a ime je Ivan.'],
      ['ulica', 'street', 'Ova ulica se zove Ilica.'],
      ['grad', 'city, town', 'Kako se zove ovaj grad?'],
      ['selo', 'village', 'Ovo selo se zove Hum.'],
      ['kako', 'how', 'Kako se zovete?'],
      ['drago mi je', 'pleased to meet you', 'Zovem se Ana. Drago mi je.'],
    ],
  },

  'masculine-plural-ovi': {
    worked: [
      {
        title: 'A Hard Consonant',
        problem: 'Put into the plural: most',
        en: 'Make it plural: bridge',
        steps: [
          { label: 'Gender', text: 'most ends in a consonant, so it is masculine.' },
          { label: 'Count the beats', text: 'most has one syllable, so it grows before the -i.' },
          { label: 'Hard or soft?', text: 't is a hard consonant, so the growth is -ov-.' },
        ],
        answer: 'mostovi',
      },
      {
        title: 'A Soft Consonant',
        problem: 'Put into the plural: broj',
        en: 'Make it plural: number',
        steps: [
          { label: 'Gender and length', text: 'broj is masculine and has one syllable.' },
          { label: 'Look at the last letter', text: 'j is one of the soft consonants.' },
          {
            label: 'Choose the ending',
            text: 'After a soft consonant the growth is -ev-, then -i.',
          },
        ],
        answer: 'brojevi',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Množina od "zid" (wall):',
          options: ['zidi', 'zidovi', 'zidevi', 'zida'],
          correct: 1,
          hint: 'One syllable, ending in a hard consonant.',
          explanation: 'zid → zidovi.',
        },
        {
          q: 'Množina od "muž" (husband):',
          options: ['muževi', 'mužovi', 'muži', 'muža'],
          correct: 0,
          hint: 'ž is a soft consonant.',
          explanation: 'muž → muževi.',
        },
        {
          q: 'Množina od "dan" (day):',
          options: ['danovi', 'danevi', 'dana', 'dani'],
          correct: 3,
          hint: 'This is one of the short nouns that do not grow.',
          explanation: 'dan → dani.',
        },
        {
          q: 'Množina od "student":',
          options: ['studentovi', 'studenti', 'studentevi', 'studente'],
          correct: 1,
          hint: 'Count the syllables: only one-syllable nouns grow.',
          explanation: 'student → studenti.',
        },
        {
          q: '___ su ovdje. (The sons)',
          options: ['Sini', 'Sinevi', 'Sinovi', 'Sina'],
          correct: 2,
          hint: 'sin is short and ends in a hard n.',
          explanation: 'Sinovi su ovdje.',
        },
        {
          q: 'Which noun takes -evi in the plural?',
          options: ['grad', 'nož', 'stol', 'most'],
          correct: 1,
          hint: 'Look for the noun ending in a soft consonant.',
          explanation: 'nož → noževi; the others take -ovi.',
        },
        {
          q: 'Množina od "konj" (horse):',
          options: ['konjevi', 'konjovi', 'konji', 'konja'],
          correct: 2,
          hint: 'nj is soft — but this horse is one of the nouns that do not grow at all.',
          explanation: 'konj → konji.',
        },
        {
          type: 'type',
          q: 'Množina: stol → ____',
          answer: 'stolovi',
          hint: 'One syllable, hard l: grow with -ov-.',
          explanation: 'stol → stolovi.',
        },
        {
          type: 'type',
          q: 'Množina: vrt (garden) → ____',
          answer: 'vrtovi',
          hint: 'One syllable, hard t.',
          explanation: 'vrt → vrtovi.',
        },
        {
          type: 'type',
          q: 'Množina: čaj (tea) → ____',
          answer: 'čajevi',
          hint: 'j is soft.',
          explanation: 'čaj → čajevi.',
        },
        {
          type: 'type',
          q: 'Množina: nož (knife) → ____',
          answer: 'noževi',
          hint: 'ž is soft.',
          explanation: 'nož → noževi.',
        },
        {
          type: 'type',
          q: 'Množina: zub (tooth) → ____',
          answer: 'zubi',
          hint: 'One of the short nouns that take a plain -i.',
          explanation: 'zub → zubi.',
        },
        {
          type: 'type',
          q: 'Ovo su ____. (keys — the singular is ključ)',
          answer: 'ključevi',
          hint: 'č is soft.',
          explanation: 'Ovo su ključevi.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the plural of "vlak" (train)?',
        options: ['vlaci', 'vlakovi', 'vlakevi', 'vlaki'],
        correct: 1,
        explanation: 'One syllable, hard k: vlakovi.',
      },
      {
        q: 'What is the plural of "broj" (number)?',
        options: ['brojovi', 'broji', 'brojevi', 'broja'],
        correct: 2,
        explanation: 'j is soft: brojevi.',
      },
      {
        q: 'What is the plural of "zub" (tooth)?',
        options: ['zubovi', 'zubi', 'zubevi', 'zube'],
        correct: 1,
        explanation: 'zub is one of the short nouns that do not grow: zubi.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Ovo su stoli.', 'Ovo je stolovi.', 'Ovo su stolevi.', 'Ovo su stolovi.'],
        correct: 3,
        explanation: 'stol → stolovi with the plural verb su.',
      },
      {
        q: 'What is the plural of "čaj" (tea)?',
        options: ['čajevi', 'čajovi', 'čaji', 'čaja'],
        correct: 0,
        explanation: 'j is soft: čajevi.',
      },
      {
        q: 'What is the plural of "konobar" (waiter)?',
        options: ['konobarovi', 'konobari', 'konobarevi', 'konobare'],
        correct: 1,
        explanation: 'konobar has three syllables, so it takes a plain -i: konobari.',
      },
    ],
    vocab: [
      ['stol', 'table (plural stolovi)', 'Ovo su stolovi.'],
      ['most', 'bridge (plural mostovi)', 'Ovo su mostovi.'],
      ['brod', 'ship (plural brodovi)', 'To su brodovi.'],
      ['ključ', 'key (plural ključevi)', 'Gdje su ključevi?'],
      ['nož', 'knife (plural noževi)', 'Noževi su tamo.'],
      ['broj', 'number (plural brojevi)', 'Ovo su brojevi.'],
      ['kralj', 'king (plural kraljevi)', 'Ovo su kraljevi i kraljice.'],
      ['čaj', 'tea (plural čajevi)', 'Čajevi su ovdje.'],
      ['gost', 'guest (plural gosti)', 'Gosti su tamo.'],
      ['dan', 'day (plural dani)', 'Ovo su dani: ponedjeljak, utorak, srijeda.'],
    ],
  },

  sibilarization: {
    worked: [
      {
        title: 'k Before -i',
        problem: 'Put into the plural: učenik',
        en: 'Make it plural: pupil',
        steps: [
          { label: 'Length', text: 'učenik has three syllables, so it takes a plain -i.' },
          { label: 'What touches the -i?', text: 'The -i would come straight after k.' },
          { label: 'Soften it', text: 'k before -i becomes c.' },
        ],
        answer: 'učenici',
      },
      {
        title: 'g Before -i',
        problem: 'Put into the plural: dijalog',
        en: 'Make it plural: dialogue',
        steps: [
          { label: 'Length', text: 'dijalog is a long noun: plain -i.' },
          { label: 'What touches the -i?', text: 'The last consonant is g.' },
          { label: 'Soften it', text: 'g before -i becomes z.' },
        ],
        answer: 'dijalozi',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Množina od "liječnik" (doctor):',
          options: ['liječniki', 'liječnikovi', 'liječnike', 'liječnici'],
          correct: 3,
          hint: 'A long noun takes a plain -i, and k cannot stand before it.',
          explanation: 'liječnik → liječnici.',
        },
        {
          q: 'Množina od "psiholog":',
          options: ['psihologi', 'psiholozi', 'psihologovi', 'psiholoze'],
          correct: 1,
          hint: 'g before -i turns into a hissing sound.',
          explanation: 'psiholog → psiholozi.',
        },
        {
          q: 'Množina od "trbuh" (belly):',
          options: ['trbusi', 'trbuhi', 'trbuhovi', 'trbuse'],
          correct: 0,
          hint: 'h before -i turns into a hissing sound.',
          explanation: 'trbuh → trbusi.',
        },
        {
          q: 'Množina od "rog" (horn):',
          options: ['rozi', 'rogi', 'rogovi', 'rozovi'],
          correct: 2,
          hint: 'A one-syllable noun grows first — does the g still touch the -i?',
          explanation: 'rog → rogovi: no change, -ov- stands in between.',
        },
        {
          q: 'Which pair is right?',
          options: ['k → s', 'g → z', 'h → c', 'k → z'],
          correct: 1,
          hint: 'The voiced g turns into the voiced hissing sound.',
          explanation: 'k → c, g → z, h → s.',
        },
        {
          q: 'Množina od "majka":',
          options: ['majce', 'majke', 'majki', 'majkovi'],
          correct: 1,
          hint: 'Feminine nouns take -e in the plural — does anything touch an -i?',
          explanation: 'majka → majke: no change.',
        },
        {
          q: '___ su tamo. (The pupils — đak)',
          options: ['Đaki', 'Đakovi', 'Đaci', 'Đake'],
          correct: 2,
          hint: 'đak is short but takes a plain -i, so the k is touched.',
          explanation: 'Đaci su tamo.',
        },
        {
          type: 'type',
          q: 'Množina: radnik (worker) → ____',
          answer: 'radnici',
          hint: 'k before -i becomes c.',
          explanation: 'radnik → radnici.',
        },
        {
          type: 'type',
          q: 'Množina: putnik (passenger) → ____',
          answer: 'putnici',
          hint: 'A long noun: plain -i, and k softens.',
          explanation: 'putnik → putnici.',
        },
        {
          type: 'type',
          q: 'Množina: kovčeg (suitcase) → ____',
          answer: 'kovčezi',
          hint: 'g before -i becomes z.',
          explanation: 'kovčeg → kovčezi.',
        },
        {
          type: 'type',
          q: 'Množina: Čeh (Czech man) → ____',
          answer: 'Česi',
          hint: 'h before -i becomes s.',
          explanation: 'Čeh → Česi.',
        },
        {
          type: 'type',
          q: 'Množina: lješnjak (hazelnut) → ____',
          answer: 'lješnjaci',
          hint: 'A long noun, and k before -i becomes c.',
          explanation: 'lješnjak → lješnjaci.',
        },
        {
          type: 'type',
          q: 'Množina: vrh (peak) → ____',
          answer: 'vrhovi',
          hint: 'A one-syllable noun grows first, so the h never touches the -i.',
          explanation: 'vrh → vrhovi: no change.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the plural of "putnik" (passenger)?',
        options: ['putniki', 'putnikovi', 'putnici', 'putnika'],
        correct: 2,
        explanation: 'k before -i becomes c: putnici.',
      },
      {
        q: 'What is the plural of "dijalog" (dialogue)?',
        options: ['dijalozi', 'dijalogi', 'dijalogovi', 'dijaloze'],
        correct: 0,
        explanation: 'g before -i becomes z: dijalozi.',
      },
      {
        q: 'What is the plural of "Čeh" (Czech man)?',
        options: ['Čehi', 'Česi', 'Čehovi', 'Čese'],
        correct: 1,
        explanation: 'h before -i becomes s: Česi.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Ovo su vlaci.', 'Ovo je vlakovi.', 'Ovo su vlaki.', 'Ovo su vlakovi.'],
        correct: 3,
        explanation: 'vlak grows -ov-, so the k stays: Ovo su vlakovi.',
      },
      {
        q: 'What is the plural of "lješnjak" (hazelnut)?',
        options: ['lješnjaki', 'lješnjakovi', 'lješnjace', 'lješnjaci'],
        correct: 3,
        explanation: 'k before -i becomes c: lješnjaci.',
      },
      {
        q: 'Which noun does NOT change its k in the plural?',
        options: ['vojnik', 'učenik', 'vlak', 'jezik'],
        correct: 2,
        explanation: 'vlak → vlakovi: the -ov- keeps the k away from the -i.',
      },
    ],
    vocab: [
      ['vojnik', 'soldier (plural vojnici)', 'Vojnici su tamo.'],
      ['učenik', 'pupil (plural učenici)', 'Učenici su ovdje.'],
      ['jezik', 'language (plural jezici)', 'Hrvatski i njemački su jezici.'],
      ['radnik', 'worker (plural radnici)', 'Radnici su ovdje.'],
      ['liječnik', 'doctor (plural liječnici)', 'Liječnici su tamo.'],
      ['putnik', 'passenger (plural putnici)', 'Putnici su tamo.'],
      ['orah', 'walnut (plural orasi)', 'Jesu li ovo orasi?'],
      ['bubreg', 'kidney (plural bubrezi)', 'Ovo su bubrezi.'],
      ['kovčeg', 'suitcase (plural kovčezi)', 'Ovo su kovčezi.'],
      ['vlak', 'train (plural vlakovi)', 'To su vlakovi.'],
    ],
  },

  'fleeting-a': {
    worked: [
      {
        title: 'The A Drops',
        problem: 'Put into the plural: stranac',
        en: 'Make it plural: foreigner',
        steps: [
          {
            label: 'Spot it',
            text: 'stranac ends in -ac and has two syllables: the a is fleeting.',
          },
          { label: 'Drop it', text: 'Take the a out: stranc-.' },
          { label: 'Add the ending', text: 'Add the masculine plural -i.' },
        ],
        answer: 'stranci',
      },
      {
        title: 'The A Drops, Then K Changes',
        problem: 'Put into the plural: momak',
        en: 'Make it plural: lad',
        steps: [
          { label: 'Drop the a', text: 'momak loses its a: momk-.' },
          { label: 'Add -i', text: 'Now the k stands right before the plural -i.' },
          { label: 'Soften it', text: 'k before -i becomes c, as in the last lesson.' },
        ],
        answer: 'momci',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Množina od "lonac" (pot):',
          options: ['lonaci', 'lonci', 'loncovi', 'lonce'],
          correct: 1,
          hint: 'Take out the a before the final c, then add the ending.',
          explanation: 'lonac → lonci.',
        },
        {
          q: 'Množina od "Nijemac" (German man):',
          options: ['Nijemaci', 'Nijemcovi', 'Nijemci', 'Nijemce'],
          correct: 2,
          hint: 'A noun in -ac with more than one syllable: the a drops.',
          explanation: 'Nijemac → Nijemci.',
        },
        {
          q: 'Množina od "lovac" (hunter):',
          options: ['lovci', 'lovaci', 'lovcevi', 'lovce'],
          correct: 0,
          hint: 'The a is fleeting, and the noun takes a plain -i.',
          explanation: 'lovac → lovci.',
        },
        {
          q: 'Množina od "otac" (father):',
          options: ['otaci', 'očevi', 'otcovi', 'otcevi'],
          correct: 1,
          hint: 'The a and the t both go; the short stem grows after a soft c, which changes.',
          explanation: 'otac → očevi.',
        },
        {
          q: 'Množina od "san" (dream):',
          options: ['sani', 'sanovi', 'snovi', 'sne'],
          correct: 2,
          hint: 'The a drops, and the short stem grows -ov-.',
          explanation: 'san → snovi.',
        },
        {
          q: 'Which noun KEEPS its a in the plural?',
          options: ['pas', 'korak', 'stranac', 'kupac'],
          correct: 1,
          hint: 'Nouns in -ak are mixed; nouns in -ac nearly always lose it.',
          explanation: 'korak → koraci keeps its a.',
        },
        {
          q: 'Ovo su ___. (dogs)',
          options: ['pasi', 'pse', 'psi', 'pasovi'],
          correct: 2,
          hint: 'Take the a out and add the plural ending.',
          explanation: 'pas → psi.',
        },
        {
          type: 'type',
          q: 'Množina: kupac (customer) → ____',
          answer: 'kupci',
          hint: 'Drop the fleeting a, then add -i.',
          explanation: 'kupac → kupci.',
        },
        {
          type: 'type',
          q: 'Množina: Amerikanac → ____',
          answer: 'Amerikanci',
          hint: 'A long noun in -ac: the a drops.',
          explanation: 'Amerikanac → Amerikanci.',
        },
        {
          type: 'type',
          q: 'Množina: vrabac (sparrow) → ____',
          answer: 'vrapci',
          hint: 'The a drops, and b changes beside c.',
          explanation: 'vrabac → vrapci.',
        },
        {
          type: 'type',
          q: 'Množina: pas (dog) → ____',
          answer: 'psi',
          hint: 'Only the dictionary form has the a.',
          explanation: 'pas → psi.',
        },
        {
          type: 'type',
          q: 'Množina: starac (old man) → ____',
          answer: 'starci',
          hint: 'A noun in -ac: the a drops before the -i.',
          explanation: 'starac → starci.',
        },
      ],
    },
    checkB: [
      {
        q: 'What is the plural of "lonac" (pot)?',
        options: ['lonci', 'lonaci', 'lonce', 'loncovi'],
        correct: 0,
        explanation: 'The fleeting a drops: lonci.',
      },
      {
        q: 'What is the plural of "Amerikanac"?',
        options: ['Amerikanaci', 'Amerikanci', 'Amerikance', 'Amerikancovi'],
        correct: 1,
        explanation: 'The fleeting a drops: Amerikanci.',
      },
      {
        q: 'What is the plural of "san" (dream)?',
        options: ['sani', 'sanovi', 'sne', 'snovi'],
        correct: 3,
        explanation: 'The a drops and the short stem grows: snovi.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Stranaci su ovdje.',
          'Stranci je ovdje.',
          'Stranci su ovdje.',
          'Strance su ovdje.',
        ],
        correct: 2,
        explanation: 'stranac → stranci, with the plural verb su.',
      },
      {
        q: 'What is the plural of "starac" (old man)?',
        options: ['staraci', 'starci', 'starcovi', 'starce'],
        correct: 1,
        explanation: 'The fleeting a drops: starci.',
      },
      {
        q: 'Why is it "vrapci" and not "vrabci"?',
        options: [
          'b turns into p next to c',
          'the a drops and b is silent',
          'vrabac is feminine',
          'the plural ending is -pi',
        ],
        correct: 0,
        explanation: 'Once the a drops, b meets c and becomes p, and the spelling shows it.',
      },
    ],
    vocab: [
      ['pas', 'dog (plural psi)', 'Psi su tamo.'],
      ['otac', 'father (plural očevi)', 'Očevi i sinovi su ovdje.'],
      ['stranac', 'foreigner (plural stranci)', 'Stranci su ovdje.'],
      ['kupac', 'customer (plural kupci)', 'Kupci su tamo.'],
      ['momak', 'lad, young man (plural momci)', 'Momci su tamo.'],
      ['lonac', 'pot (plural lonci)', 'Lonci su ovdje.'],
      ['vrabac', 'sparrow (plural vrapci)', 'Ovo su vrapci.'],
      ['korak', 'step (plural koraci)', 'Ovo su koraci.'],
      ['san', 'dream, sleep (plural snovi)', 'To su snovi.'],
      ['Nijemac', 'German man (plural Nijemci)', 'Jesu li to Nijemci?'],
    ],
  },

  colours: {
    worked: [
      {
        title: 'A Feminine Noun',
        problem: 'Say: The house is red.',
        en: 'Say: The house is red.',
        steps: [
          { label: 'Gender of the noun', text: 'kuća ends in -a, so it is feminine.' },
          { label: 'The feminine ending', text: 'A colour describing a feminine noun adds -a.' },
          { label: 'Put it together', text: 'crven + a, after the verb je.' },
        ],
        answer: 'Kuća je crvena.',
      },
      {
        title: 'A Masculine Plural',
        problem: 'Say: The clouds are grey.',
        en: 'Say: The clouds are grey.',
        steps: [
          { label: 'The noun', text: 'oblak → oblaci: a masculine plural.' },
          { label: 'The plural verb', text: 'Several things take su.' },
          { label: 'The colour', text: 'Masculine plural adds -i: siv + i.' },
        ],
        answer: 'Oblaci su sivi.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Snijeg je ___. (white)',
          options: ['bijel', 'bijela', 'bijelo', 'bijeli'],
          correct: 0,
          hint: 'snijeg ends in a consonant, so it is masculine — add nothing.',
          explanation: 'Snijeg je bijel.',
        },
        {
          q: 'Banane su ___. (yellow)',
          options: ['žuti', 'žute', 'žuta', 'žut'],
          correct: 1,
          hint: 'banane is a feminine plural.',
          explanation: 'Banane su žute.',
        },
        {
          q: 'Vino je ___. (red)',
          options: ['crven', 'crvena', 'crveno', 'crveni'],
          correct: 2,
          hint: 'vino ends in -o: neuter.',
          explanation: 'Vino je crveno.',
        },
        {
          q: 'Which word means "purple"?',
          options: ['ružičast', 'narančast', 'smeđ', 'ljubičast'],
          correct: 3,
          hint: 'It comes from ljubičica, the violet flower.',
          explanation: 'ljubičast = purple; ružičast = pink; narančast = orange; smeđ = brown.',
        },
        {
          q: 'Mačke su ___. (black)',
          options: ['crni', 'crne', 'crna', 'crno'],
          correct: 1,
          hint: 'mačke is a feminine plural.',
          explanation: 'Mačke su crne.',
        },
        {
          q: 'Jaja su ___. (white)',
          options: ['bijeli', 'bijele', 'bijela', 'bijelo'],
          correct: 2,
          hint: 'jaja is a neuter plural, which ends in -a.',
          explanation: 'Jaja su bijela.',
        },
        {
          q: 'Which question asks "What colour is this?"',
          options: ['Koja je ovo boja?', 'Što je ovo?', 'Je li ovo boja?', 'Gdje je boja?'],
          correct: 0,
          hint: 'boja means colour, and the question word means "which".',
          explanation: 'Koja je ovo boja? — which colour is this.',
        },
        {
          type: 'type',
          q: 'Trava je ____. (green)',
          answer: 'zelena',
          hint: 'trava ends in -a, so the colour does too.',
          explanation: 'Trava je zelena.',
        },
        {
          type: 'type',
          q: 'More je ____. (blue)',
          answer: 'plavo',
          hint: 'more is neuter: the colour ends in -o.',
          explanation: 'More je plavo.',
        },
        {
          type: 'type',
          q: 'Krovovi su ____. (red)',
          answer: 'crveni',
          hint: 'krovovi is a masculine plural: -i.',
          explanation: 'Krovovi su crveni.',
        },
        {
          type: 'type',
          q: 'Kosa je ____. (black)',
          answer: 'crna',
          hint: 'kosa is feminine.',
          explanation: 'Kosa je crna.',
        },
        {
          type: 'type',
          q: 'Oči su ____. (brown)',
          answer: 'smeđe',
          hint: 'oči is a feminine plural: -e.',
          explanation: 'Oči su smeđe.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "More je ___." (blue)',
        options: ['plav', 'plava', 'plavo', 'plavi'],
        correct: 2,
        explanation: 'more is neuter: plavo.',
      },
      {
        q: 'Complete: "Banane su ___." (yellow)',
        options: ['žuti', 'žute', 'žuta', 'žut'],
        correct: 1,
        explanation: 'banane is a feminine plural: žute.',
      },
      {
        q: 'Complete: "Snijeg je ___." (white)',
        options: ['bijel', 'bijela', 'bijelo', 'bijele'],
        correct: 0,
        explanation: 'snijeg is masculine: bijel.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Kuće su bijela.', 'Kuće je bijele.', 'Kuće su bijeli.', 'Kuće su bijele.'],
        correct: 3,
        explanation: 'kuće is a feminine plural: su bijele.',
      },
      {
        q: 'Complete: "Krovovi su ___." (red)',
        options: ['crvene', 'crvena', 'crveni', 'crveno'],
        correct: 2,
        explanation: 'krovovi is a masculine plural: crveni.',
      },
      {
        q: '"Koja je ovo boja?" means…',
        options: [
          'What colour is this?',
          'Whose is this?',
          'Where is the paint?',
          'Is this a colour?',
        ],
        correct: 0,
        explanation: 'koja = which, boja = colour.',
      },
    ],
    vocab: [
      ['boja', 'colour', 'Koja je ovo boja?'],
      ['crven', 'red', 'Jabuke su crvene.'],
      ['plav', 'blue; fair (hair)', 'Nebo je plavo.'],
      ['zelen', 'green', 'Trava je zelena.'],
      ['žut', 'yellow', 'Banane su žute.'],
      ['bijel', 'white', 'Snijeg je bijel.'],
      ['crn', 'black', 'Mačka je crna.'],
      ['siv', 'grey', 'Oblaci su sivi.'],
      ['smeđ', 'brown', 'Oči su smeđe.'],
      ['ljubičast', 'purple', 'Ovo je ljubičasta boja.'],
    ],
  },

  'possessive-adjectives': {
    worked: [
      {
        title: 'An Owner in -a',
        problem: "Say: Ana's book.",
        en: "Say: Ana's book.",
        steps: [
          { label: 'The owner', text: 'Ana ends in -a, so drop it and add -in.' },
          { label: 'The thing owned', text: 'knjiga is feminine.' },
          { label: 'Agree', text: 'A feminine noun adds -a to the possessive.' },
        ],
        answer: 'Anina knjiga',
      },
      {
        title: 'An Owner in a Consonant',
        problem: "Say: Petar's friends.",
        en: "Say: Petar's friends.",
        steps: [
          { label: 'The owner', text: 'Petar ends in a consonant: add -ov.' },
          { label: 'Fleeting a', text: 'Petar loses its a before an ending: Petr-.' },
          { label: 'Agree', text: 'prijatelji is a masculine plural: add -i.' },
        ],
        answer: 'Petrovi prijatelji',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"Marko\'s car"',
          options: ['Markov auto', 'Markova auto', 'Marko auto', 'Markovo auto'],
          correct: 0,
          hint: 'auto is masculine, so nothing is added after -ov.',
          explanation: 'Markov auto.',
        },
        {
          q: '"The sister\'s flat" (stan = flat)',
          options: ['sestrina stan', 'sestrin stan', 'sestrino stan', 'sestrov stan'],
          correct: 1,
          hint: 'sestra ends in -a; stan is masculine.',
          explanation: 'sestrin stan.',
        },
        {
          q: '"Ana\'s letters" (pisma)',
          options: ['Anine pisma', 'Anini pisma', 'Anina pisma', 'Anin pisma'],
          correct: 2,
          hint: 'pisma is a neuter plural, which ends in -a.',
          explanation: 'Anina pisma.',
        },
        {
          q: 'The possessive adjective from "Josip":',
          options: ['Josipin', 'Josipov', 'Josipev', 'Josipa'],
          correct: 1,
          hint: 'Josip ends in a hard consonant.',
          explanation: 'Josip → Josipov.',
        },
        {
          q: 'The possessive adjective from "Matej":',
          options: ['Matejov', 'Matejin', 'Matejev', 'Mateja'],
          correct: 2,
          hint: 'j is a soft consonant.',
          explanation: 'Matej → Matejev.',
        },
        {
          q: 'The possessive adjective from "tata" (dad):',
          options: ['tatov', 'tatin', 'tatev', 'tata'],
          correct: 1,
          hint: "tata ends in -a, whatever the owner's gender.",
          explanation: 'tata → tatin.',
        },
        {
          q: 'Which is spelled correctly?',
          options: ['anin brat', 'Anin brat', 'Anin Brat', 'ANIN BRAT'],
          correct: 1,
          hint: 'Made from a name, so it keeps the capital; the noun after it does not.',
          explanation: 'Anin brat.',
        },
        {
          type: 'type',
          q: "Ovo je ____ sestra. (Ivan's)",
          answer: 'Ivanova',
          hint: 'Ivan ends in a consonant, and sestra is feminine.',
          explanation: 'Ovo je Ivanova sestra.',
        },
        {
          type: 'type',
          q: "Ovo je ____ brat. (Ana's)",
          answer: 'Anin',
          hint: 'Drop the -a of the name, add -in, and brat is masculine.',
          explanation: 'Ovo je Anin brat.',
        },
        {
          type: 'type',
          q: "To su ____ knjige. (Marko's)",
          answer: 'Markove',
          hint: 'knjige is a feminine plural: -e.',
          explanation: 'To su Markove knjige.',
        },
        {
          type: 'type',
          q: "Ovo je ____ kuća. (grandfather's — djed)",
          answer: 'djedova',
          hint: 'djed ends in a consonant; kuća is feminine.',
          explanation: 'Ovo je djedova kuća.',
        },
        {
          type: 'type',
          q: "Ovo je ____ auto. (father's — otac)",
          answer: 'očev',
          hint: 'otac loses its a and t, the c turns soft before -ev, and auto is masculine.',
          explanation: 'Ovo je očev auto.',
        },
      ],
    },
    checkB: [
      {
        q: 'How do you say "Ana\'s brother"?',
        options: ['Anina brat', 'Anin brat', 'Anino brat', 'Ana brat'],
        correct: 1,
        explanation: 'brat is masculine: Anin brat.',
      },
      {
        q: 'Complete: "Ovo je ___ kuća." (Marko\'s)',
        options: ['Markov', 'Markovo', 'Markova', 'Markove'],
        correct: 2,
        explanation: 'kuća is feminine: Markova kuća.',
      },
      {
        q: 'Which is the possessive adjective from "sestra"?',
        options: ['sestrov', 'sestrev', 'sestrin', 'sestri'],
        correct: 2,
        explanation: 'sestra ends in -a: sestrin.',
      },
      {
        q: 'Complete: "To su ___ prijatelji." (Petar\'s)',
        options: ['Petarovi', 'Petrove', 'Petrov', 'Petrovi'],
        correct: 3,
        explanation: 'Petar loses its fleeting a, and prijatelji is masculine plural: Petrovi.',
      },
      {
        q: 'Complete: "Ovo je ___ pismo." (the friend\'s — prijatelj)',
        options: ['prijateljevo', 'prijateljovo', 'prijateljino', 'prijateljev'],
        correct: 0,
        explanation: 'lj is soft (-ev), and pismo is neuter (-o): prijateljevo.',
      },
      {
        q: 'Which phrase means "mother\'s letter" (majka)?',
        options: ['majčino pismo', 'majčina pismo', 'majka pismo', 'majčin pismo'],
        correct: 0,
        explanation: 'majka → majčin, and pismo is neuter: majčino pismo.',
      },
    ],
    vocab: [
      ['brat', 'brother', 'Bratov auto je plav.'],
      ['sestra', 'sister', 'Sestrina kuća je velika.'],
      ['majka', 'mother (possessive majčin)', 'Majčino pismo je ovdje.'],
      ['otac', 'father (possessive očev)', 'Očev brat je moj stric.'],
      ['djed', 'grandfather', 'Djedova kuća je stara.'],
      ['baka', 'grandmother', 'Bakin vrt je velik.'],
      ['tata', 'dad', 'Tatin auto je plav.'],
      ['mama', 'mum', 'Mamin auto je zelen.'],
      ['stric', "uncle (father's brother)", 'Očev brat je moj stric.'],
      ['prijatelj', 'friend', 'Prijateljev pas je crn.'],
    ],
  },
};
