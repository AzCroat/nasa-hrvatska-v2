// functions/api/content/_data/a1new/batch04.js
//
// New A1 lessons, batch 04 (Croaticum restructure, stage 2, 2026-11-12). See a1new/index.js.
//
// Six lessons, masterOrder 38–43: ići, u/na + accusative for motion, za + accusative,
// accusative pronouns (long and short), at the travel agency, jesti/piti.
//
// What a learner knows at this point (and nothing more): biti, gender, plurals, adjectives
// and possessives, the present tense, negation, the accusative (including living masculine
// nouns and "Idem u grad / na more" as motion), imati, the modals (with "Htio / Htjela bih"
// as a polite chunk), trebati, smjeti, money, numbers, telling the time, and the days of
// the week ("u subotu"). No locative, genitive, dative, instrumental, past or future yet —
// so nothing here says where something IS with a case ending, measures a quantity, or
// travels "by bus" (autobusom). Distractors avoid genitive and accusative-plural forms
// after verbs and prepositions where those would be real Croatian (Pijem vode, za sestre).

/** Spine entries for this batch. `masterOrder` is the lesson's final A1 position. */
export const SPINE = [
  {
    id: 'ici-going',
    masterOrder: 38,
    prerequisites: ['present-tense-verbs', 'time-calendar'],
    objectives: [
      'Say where you and others are going: idem, ideš, ide, idemo, idete, idu',
      'Ask Kamo? for where someone is going and Gdje? for where someone is',
      'Use ići after a modal and in everyday phrases: Moram ići, Idemo!',
    ],
  },
  {
    id: 'u-na-motion',
    masterOrder: 39,
    prerequisites: ['ici-going', 'accusative-intro'],
    objectives: [
      'Go INTO buildings, towns and countries with u: u školu, u Zagreb, u Hrvatsku',
      'Go to events, open places and islands with na: na posao, na koncert, na plažu, na Brač',
      'Put the place in the accusative after u and na when you are going there',
    ],
  },
  {
    id: 'za-accusative',
    masterOrder: 40,
    prerequisites: ['accusative-intro', 'time-calendar'],
    objectives: [
      'Say who something is for: poklon za mamu, za brata',
      'Name a ticket or train by its destination: karta za Split, vlak za Zagreb',
      'Say what day or occasion something is for, and ask Za koga? and Zašto?',
    ],
  },
  {
    id: 'accusative-pronouns',
    masterOrder: 41,
    prerequisites: ['accusative-intro', 'pronouns-biti', 'za-accusative'],
    objectives: [
      'Replace an object with a pronoun: Vidim ga, Volim te, Čekam vas',
      'Put the short forms in second place: Ana me zove, Vidiš li me?',
      'Use the long forms after a preposition, for emphasis and alone: za tebe, Tebe!',
    ],
  },
  {
    id: 'travel-agency',
    masterOrder: 42,
    prerequisites: ['u-na-motion', 'za-accusative', 'accusative-pronouns'],
    objectives: [
      'Ask for a ticket politely: Htio bih / Htjela bih kartu za Split',
      'Choose a one-way or return ticket and ask when the ferry or bus goes',
      'Book a room or a trip for a day and for the people travelling',
    ],
  },
  {
    id: 'jesti-piti',
    masterOrder: 43,
    prerequisites: ['accusative-intro', 'za-accusative'],
    objectives: [
      'Conjugate jesti and piti: jedem, jedeš… pijem, piješ…',
      'Say what you eat and drink with the accusative: Jedem juhu, Pijem vodu',
      'Ask and answer about meals: Što jedeš za doručak? Ne pijem kavu.',
    ],
  },
];

/** Lesson bodies (same shape as lessonsA1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Ići — Going
  // ─────────────────────────────────────────────────────────
  {
    id: 'ici-going',
    title: 'Going: ići',
    subtitle: 'idem, ideš, ide — and the difference between Kamo? and Gdje?',
    icon: '🚶',
    level: 'A1',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'The Verb You Move With',
        body: 'Going home, going out, going for a coffee — all of it is one verb, ići (to go). It is the most useful movement verb in Croatian and it is irregular, so it gets a lesson of its own. The good news: once you know its stem, the endings are ones you have already met.',
        icon: '🚶',
      },
      {
        type: 'table',
        title: 'ići — to go',
        headers: ['Person', 'Croatian', 'English'],
        rows: [
          ['ja', 'idem', 'I go / I am going'],
          ['ti', 'ideš', 'you go (one person, informal)'],
          ['on / ona / ono', 'ide', 'he / she / it goes'],
          ['mi', 'idemo', 'we go'],
          ['vi', 'idete', 'you go (several people, or polite)'],
          ['oni / one / ona', 'idu', 'they go'],
        ],
      },
      {
        type: 'rule',
        title: 'The Stem Is id-, Not ić-',
        body: 'The dictionary form ići ends in -ći, like moći (to be able to). That ending disappears in the present tense: the stem (the part that stays the same) is id-. Add the endings -em, -eš, -e, -emo, -ete, -u and you have the whole verb: idem, ideš, ide, idemo, idete, idu. Notice that "oni" ends in -u, not -e: oni idu.',
        highlight: 'id- + em = idem',
      },
      {
        type: 'rule',
        title: 'Kamo? and Gdje? — Two Kinds of "Where"',
        body: 'English uses "where" for two different questions, and Croatian keeps them apart. Gdje? asks where something IS: Gdje je Ana? — Ana je tamo. (Where is Ana? — Ana is there.) Kamo? asks where something is GOING: Kamo ideš? — Idem kući. (Where are you going? — I am going home.) In relaxed speech you will also hear "Gdje ideš?", but the standard question for direction is Kamo?',
        highlight: 'Kamo ideš?',
      },
      {
        type: 'rule',
        title: 'Places You Can Already Go',
        body: 'Some words for direction need no ending at all: kući ((to) home), tamo (there), ovamo (here, this way — towards the speaker), van (out). Idem kući. Idemo van. A few more you met in the accusative lesson: u grad (into town), na more (to the seaside), na kavu (for a coffee). The next lesson shows exactly when to say u and when to say na.',
        highlight: 'Idem kući.',
      },
      {
        type: 'rule',
        title: 'Saying No, Asking, and Two Verbs Together',
        body: 'The negative is two separate words: ne idem, ne ideš. (Only a few verbs fuse ne into one word, like nisam, nemam and neću; ići is not one of them.) To ask a yes/no question, put li after the verb: Ideš li u grad? (Are you going into town?) After a modal verb, ići stays in its dictionary form: Moram ići. (I have to go.) Želim ići kući. (I want to go home.) And Idemo! on its own means "Let\'s go!"',
        highlight: 'Ideš li u grad?',
      },
      {
        type: 'example',
        title: 'Every Person',
        items: [
          { hr: 'Ja idem kući.', en: 'I am going home.', note: 'ja → idem' },
          {
            hr: 'Ideš li u grad?',
            en: 'Are you going into town?',
            note: 'ti → ideš, li after the verb',
          },
          { hr: 'Marko ide van.', en: 'Marko is going out.', note: 'on → ide' },
          { hr: 'Idemo na kavu!', en: "Let's go for a coffee!", note: 'mi → idemo' },
          { hr: 'Kamo idete?', en: 'Where are you going?', note: 'vi → idete' },
          {
            hr: 'Djeca idu kući.',
            en: 'The children are going home.',
            note: 'djeca takes the plural verb: idu',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kamo ideš? — Idem kući.',
            en: 'Where are you going? — I am going home.',
            note: 'Kamo? asks about direction',
          },
          {
            hr: 'Gdje je Ivana? — Ivana je tamo.',
            en: 'Where is Ivana? — Ivana is there.',
            note: 'Gdje? asks about place',
          },
          {
            hr: 'U subotu idemo na more.',
            en: 'On Saturday we are going to the seaside.',
            note: 'u subotu — on Saturday',
          },
          { hr: 'Moram ići, kasnim.', en: 'I have to go, I am late.', note: 'after moram: ići' },
          {
            hr: 'Danas ne idem van, bolestan sam.',
            en: 'I am not going out today, I am ill.',
            note: 'ne idem — two words',
          },
          {
            hr: 'Idete li u grad sutra?',
            en: 'Are you going into town tomorrow?',
            note: 'idete + li',
          },
          {
            hr: 'Oni idu u kino u petak.',
            en: 'They are going to the cinema on Friday.',
            note: 'oni → idu',
          },
          {
            hr: 'Laku noć, idem spavati.',
            en: 'Good night, I am going to bed.',
            note: 'idem + a second verb in its dictionary form',
          },
          {
            hr: 'Ana i Petar idu ovamo.',
            en: 'Ana and Petar are coming this way.',
            note: 'ovamo — towards the speaker',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "We are going home"?',
        options: ['Idemo kući.', 'Idem kući.', 'Idu kući.', 'Ide kući.'],
        correct: 0,
        explanation:
          'mi takes -emo: idemo. Idem is "I am going", idu is "they are going" and ide is "he or she is going".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which question asks where someone is GOING?',
        options: ['Gdje si?', 'Kamo ideš?', 'Tko si?'],
        correct: 1,
        explanation:
          'Kamo? asks about direction. Gdje si? asks where you ARE, and Tko si? asks who you are.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, building the present on the dictionary form: "ićem", "ićeš" — the stem is id-: idem, ideš. Second, using the singular for several people: "Oni ide" — oni idu, and so do the children: djeca idu. Third, writing the negative as one word: "neidem" — it is ne idem, two words, unlike nisam or nemam.',
        highlight: 'ne idem',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Mi ___ u grad."',
            options: ['idemo', 'idem', 'idu', 'ide'],
            correct: 0,
            explanation: 'mi takes -emo: idemo. Idem is for ja, idu for oni and ide for on or ona.',
          },
          {
            q: 'Complete: "Oni ___ kući."',
            options: ['ide', 'idete', 'idu', 'idemo'],
            correct: 2,
            explanation: 'oni takes -u: idu. Ide is singular, idete is for vi and idemo for mi.',
          },
          {
            q: 'In standard Croatian, which question word asks where someone is GOING?',
            options: ['gdje', 'kamo', 'kada', 'tko'],
            correct: 1,
            explanation:
              'Kamo? asks about direction. Gdje? asks where something is, kada? when, and tko? who.',
          },
          {
            q: 'Which sentence says "I am not going out today"?',
            options: [
              'Neidem van danas.',
              'Ne ićem van danas.',
              'Ne idu van danas.',
              'Ne idem van danas.',
            ],
            correct: 3,
            explanation:
              'The negative is two words, ne idem. "Neidem" fuses them, "ićem" builds on the wrong stem, and "ne idu" means "they are not going".',
          },
          {
            q: 'Which sentence asks "Are you going home?" (one person)',
            options: ['Li ideš kući?', 'Ideš li kući?', 'Idem li kući?', 'Ide li kući?'],
            correct: 1,
            explanation:
              'li comes straight after the verb: Ideš li kući? "Li" cannot start a sentence, "Idem li" asks about me, and "Ide li" asks about him or her.',
          },
          {
            q: 'Which is a good answer to "Gdje je Marko?"',
            options: ['Marko je tamo.', 'Kući.', 'Van.', 'Ovamo.'],
            correct: 0,
            explanation:
              'Gdje? asks where Marko IS, so the answer is a place: Marko je tamo. Kući, van and ovamo all describe direction — they answer Kamo?',
          },
        ],
      },
      {
        type: 'summary',
        title: 'ići — Key Takeaways',
        points: [
          'ići: idem, ideš, ide, idemo, idete, idu — the stem is id-',
          'Kamo? = where to (direction); Gdje? = where (place)',
          'Direction words with no ending: kući, tamo, ovamo, van',
          'The negative is two words: ne idem',
          'Questions: Ideš li u grad? — li after the verb',
          'After a modal ići stays as it is: Moram ići.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // U and Na — Going Places
  // ─────────────────────────────────────────────────────────
  {
    id: 'u-na-motion',
    title: 'U or Na? Going Places',
    subtitle: 'u školu, na posao — the accusative after u and na when you move',
    icon: '🧭',
    level: 'A1',
    duration: '~8 min',
    color: '#1d4ed8',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Two Small Words for "To"',
        body: 'You can say idem now. To say WHERE to, Croatian mostly uses one of two prepositions (small linking words like "to" or "into"): u or na. English says "to school", "to work", "to the beach" with the same "to" every time; Croatian chooses between u and na depending on the place. This lesson gives you the rule of thumb and the handful of places you simply learn.',
        icon: '🧭',
      },
      {
        type: 'rule',
        title: 'Moving Somewhere Takes the Accusative',
        body: 'When u or na answers Kamo? (where to?), the place after it takes the accusative — the object form you already know. Feminine -a becomes -u: škola → u školu, Hrvatska → u Hrvatsku. Masculine places are not alive, so they do not change: grad → u grad, Zagreb → u Zagreb. Neuter never changes: kino → u kino, more → na more.',
        highlight: 'škola → u školu',
      },
      {
        type: 'rule',
        title: 'U: Into Something With Walls or Borders',
        body: 'Use u for going INTO a building, a room, a town or a country — a place with walls or borders around it. u školu (to school), u trgovinu (to the shop), u banku (to the bank), u kino (to the cinema), u ured (to the office), u Split, u Rijeku, u Hrvatsku, u Njemačku.',
        highlight: 'u trgovinu',
      },
      {
        type: 'rule',
        title: 'Na: Events, Open Places, Islands',
        body: 'Use na for an event or activity — na posao (to work), na koncert, na sastanak (to a meeting), na utakmicu (to a match), na kavu, na izlet (on a trip). Use na for an open place or a surface — na plažu (to the beach), na trg (to the square), na more (to the seaside). And use na for islands: na Brač, na Krk, na otok (to an island).',
        highlight: 'na posao',
      },
      {
        type: 'rule',
        title: 'Some You Simply Learn',
        body: 'A few common places take na although they have walls: na kolodvor (to the station), na fakultet (to university — the faculty). Learn them as pairs with their preposition, the way you learn a noun with its gender. And remember the one direction with NO preposition: kući (home). "Idem u kuću" means going into a particular house; going home is Idem kući.',
        highlight: 'na kolodvor',
      },
      {
        type: 'table',
        title: 'Kamo? — Where To',
        headers: ['Dictionary form', 'Going there', 'Why'],
        rows: [
          ['škola', 'u školu', 'a building → u; -a → -u'],
          ['Zagreb', 'u Zagreb', 'a town → u; not alive, no change'],
          ['Hrvatska', 'u Hrvatsku', 'a country → u; -a → -u'],
          ['kino', 'u kino', 'a building → u; neuter, no change'],
          ['posao', 'na posao', 'an activity → na'],
          ['koncert', 'na koncert', 'an event → na'],
          ['plaža', 'na plažu', 'an open place → na; -a → -u'],
          ['Brač', 'na Brač', 'an island → na'],
          ['kolodvor', 'na kolodvor', 'learn it: na'],
        ],
      },
      {
        type: 'example',
        title: 'Going Into Places: u',
        items: [
          {
            hr: 'Djeca idu u školu.',
            en: 'The children are going to school.',
            note: 'škola → školu',
          },
          {
            hr: 'Idem u trgovinu, trebam kruh.',
            en: 'I am going to the shop, I need bread.',
            note: 'trgovina → trgovinu',
          },
          {
            hr: 'Sutra idemo u Split.',
            en: 'Tomorrow we are going to Split.',
            note: 'a town, not alive: no change',
          },
          {
            hr: 'Idete li u kino u petak?',
            en: 'Are you going to the cinema on Friday?',
            note: 'kino — neuter, no change',
          },
          {
            hr: 'Ivana ide u Njemačku.',
            en: 'Ivana is going to Germany.',
            note: 'Njemačka → Njemačku',
          },
        ],
      },
      {
        type: 'example',
        title: 'Going To Events and Open Places: na',
        items: [
          {
            hr: 'Svako jutro idem na posao.',
            en: 'Every morning I go to work.',
            note: 'work is an activity → na',
          },
          {
            hr: 'U subotu idemo na koncert.',
            en: 'On Saturday we are going to a concert.',
            note: 'an event → na',
          },
          {
            hr: 'Ljeti idemo na more.',
            en: 'In summer we go to the seaside.',
            note: 'more — neuter, no change',
          },
          { hr: 'Idemo na plažu!', en: "Let's go to the beach!", note: 'plaža → plažu' },
          {
            hr: 'Moram ići na kolodvor.',
            en: 'I have to go to the station.',
            note: 'learn it: na kolodvor',
          },
          {
            hr: 'Oni idu na Krk u nedjelju.',
            en: 'They are going to Krk on Sunday.',
            note: 'an island → na',
          },
          {
            hr: 'Marko ide na utakmicu.',
            en: 'Marko is going to the match.',
            note: 'utakmica → utakmicu',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am going to work"?',
        options: ['Idem u posao.', 'Idem na posao.', 'Idem na posla.'],
        correct: 1,
        explanation:
          'Work is an activity, so it takes na, and posao does not change: Idem na posao. "U posao" uses the wrong preposition and "posla" is a different case.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "We are going to Rijeka"?',
        options: ['Idemo na Rijeku.', 'Idemo u Rijeka.', 'Idemo u Rijeku.'],
        correct: 2,
        explanation:
          'A town takes u, and Rijeka is feminine in -a, so it takes -u: u Rijeku. "Na" is for events, open places and islands; "u Rijeka" forgets the accusative.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, leaving the place in its dictionary form after u or na: "Idem u škola" — going there takes the accusative: Idem u školu. Second, choosing u for an event or activity: "Idem u koncert", "Idem u posao" — events and activities take na: Idem na posao. Third, adding a preposition to home: "Idem u kući" — going home is simply Idem kući.',
        highlight: 'Idem na posao',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Djeca idu ___ školu."',
            options: ['na', 'iz', 'kod', 'u'],
            correct: 3,
            explanation: 'A school is a building, so going into it takes u: u školu.',
          },
          {
            q: 'Complete: "U petak idemo ___ koncert."',
            options: ['u', 'na', 'iz', 'od'],
            correct: 1,
            explanation: 'A concert is an event, and events take na: na koncert.',
          },
          {
            q: 'Complete: "Sutra idem u ___." (the town Rijeka)',
            options: ['Rijeka', 'Rijeci', 'Rijeku', 'Rijekom'],
            correct: 2,
            explanation:
              'Going somewhere takes the accusative, and feminine -a becomes -u: u Rijeku. Rijeci and Rijekom belong to cases you will meet later.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Idem na plažu.', 'Idem na plaža.', 'Idem u plaži.', 'Idem na plaži.'],
            correct: 0,
            explanation:
              'A beach is an open place → na, and plaža takes -u when you go there: Idem na plažu. "Na plaži" describes being there, not going.',
          },
          {
            q: 'Which question does "na posao" answer?',
            options: ['Gdje?', 'Tko?', 'Kamo?', 'Kada?'],
            correct: 2,
            explanation:
              'u and na with the accusative mark movement towards somewhere, which answers Kamo? — where to?',
          },
          {
            q: 'How do you say "I am going home"?',
            options: ['Idem na kuću.', 'Idem kući.', 'Idem u kući.', 'Idem kuća.'],
            correct: 1,
            explanation:
              'Going home needs no preposition: Idem kući. "U kući" says you are inside a house, and "kuća" is the dictionary form.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'U and Na — Key Takeaways',
        points: [
          'Going somewhere: u / na + accusative — škola → u školu',
          'u = into a building, town or country: u trgovinu, u Zagreb, u Hrvatsku',
          'na = event, activity, open place, island: na posao, na koncert, na plažu, na Brač',
          'Learn as pairs: na kolodvor, na fakultet',
          'Home needs no preposition: Idem kući.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Za + Accusative — For
  // ─────────────────────────────────────────────────────────
  {
    id: 'za-accusative',
    title: 'Za — For',
    subtitle: 'poklon za mamu, karta za Split — za and the accusative',
    icon: '🎁',
    level: 'A1',
    duration: '~7 min',
    color: '#be185d',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'A Preposition You Already Know How to Use',
        body: 'Za means "for", and the noun after it always takes the accusative. That is all the grammar there is: you already know the accusative endings from the verbs that take an object. What this lesson adds is the many everyday jobs za does — a present for someone, a ticket for a place, a table for Saturday.',
        icon: '🎁',
      },
      {
        type: 'rule',
        title: 'Za + Accusative',
        body: 'After za, the noun takes the object form. Feminine -a becomes -u: mama → za mamu. A living masculine noun adds -a: brat → za brata, Marko → za Marka. A masculine thing does not change: Split → za Split, doručak → za doručak. Neuter does not change: dijete → za dijete. Adjectives and possessives move with the noun: za moju sestru, za dobrog prijatelja.',
        highlight: 'za mamu',
      },
      {
        type: 'rule',
        title: 'For Someone',
        body: 'The most common use: who something is for. Ovo je poklon za mamu. (This is a present for Mum.) Kupujem cvijeće za sestru. (I am buying flowers for my sister.) Kolač je za brata. (The cake is for my brother.) To ask, use koga — the object form of tko (who): Za koga je ovo? (Who is this for?)',
        highlight: 'Za koga je ovo?',
      },
      {
        type: 'rule',
        title: 'A Ticket, a Train, a Ferry For a Place',
        body: 'A ticket or a vehicle is named by where it goes, with za: karta za Split (a ticket to Split), vlak za Zagreb (the train to Zagreb), trajekt za Hvar (the ferry to Hvar). Compare the verb: you GO u Split, but you buy a ticket ZA Split.',
        highlight: 'karta za Split',
      },
      {
        type: 'rule',
        title: 'For a Day, a Meal, an Occasion',
        body: 'Za also names the day or occasion something is meant for: Rezerviram stol za subotu. (I am booking a table for Saturday.) Za doručak imam kruh i sir. (For breakfast I have bread and cheese.) Za rođendan želim bicikl. (For my birthday I want a bike.) Za Božić idemo kući. (For Christmas we go home.)',
        highlight: 'za subotu',
      },
      {
        type: 'rule',
        title: 'Zašto or Za što?',
        body: 'Written as one word, zašto means "why": Zašto učiš hrvatski? (Why are you learning Croatian?) Written as two words, za što means "for what": it is za plus što, used when "for" really is part of the question. At this level you will almost always want zašto.',
        highlight: 'Zašto učiš hrvatski?',
      },
      {
        type: 'table',
        title: 'What za Does to the Noun',
        headers: ['Dictionary form', 'After za', 'Why'],
        rows: [
          ['mama', 'za mamu', 'feminine -a → -u'],
          ['brat', 'za brata', 'living masculine + -a'],
          ['dobar prijatelj', 'za dobrog prijatelja', 'the adjective follows'],
          ['Split', 'za Split', 'masculine, not alive: no change'],
          ['dijete', 'za dijete', 'neuter: no change'],
          ['subota', 'za subotu', 'feminine -a → -u'],
          ['doručak', 'za doručak', 'masculine, not alive: no change'],
        ],
      },
      {
        type: 'example',
        title: 'For People',
        items: [
          { hr: 'Ovo je poklon za mamu.', en: 'This is a present for Mum.', note: 'mama → mamu' },
          {
            hr: 'Kupujem cvijeće za sestru.',
            en: 'I am buying flowers for my sister.',
            note: 'sestra → sestru',
          },
          {
            hr: 'Za koga je ovaj kolač? — Za brata.',
            en: 'Who is this cake for? — For my brother.',
            note: 'brat is alive → brata',
          },
          {
            hr: 'Ova knjiga je za dobrog prijatelja.',
            en: 'This book is for a good friend.',
            note: 'the adjective follows: dobrog',
          },
          {
            hr: 'Radim za malu tvrtku.',
            en: 'I work for a small company.',
            note: 'mala tvrtka → malu tvrtku',
          },
        ],
      },
      {
        type: 'example',
        title: 'For Places and Days',
        items: [
          {
            hr: 'Imate li kartu za Split?',
            en: 'Do you have a ticket to Split?',
            note: 'a ticket is FOR a place',
          },
          {
            hr: 'Vlak za Zagreb ide u osam.',
            en: 'The train to Zagreb goes at eight.',
            note: 'Zagreb does not change',
          },
          {
            hr: 'Rezerviram stol za subotu.',
            en: 'I am booking a table for Saturday.',
            note: 'subota → subotu',
          },
          {
            hr: 'Za doručak imam kruh i sir.',
            en: 'For breakfast I have bread and cheese.',
            note: 'za doručak — for breakfast',
          },
          {
            hr: 'Za rođendan želim novi bicikl.',
            en: 'For my birthday I want a new bike.',
            note: 'rođendan does not change',
          },
          {
            hr: 'Zašto ideš u grad?',
            en: 'Why are you going into town?',
            note: 'zašto — one word, "why"',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "a present for my sister"?',
        options: ['poklon za moja sestra', 'poklon za moju sestru', 'poklon za mojoj sestri'],
        correct: 1,
        explanation:
          'za takes the accusative, and the whole phrase moves: moja sestra → moju sestru.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which word starts the question "Why are you learning Croatian?"',
        options: ['Zašto', 'Za koga', 'Kamo'],
        correct: 0,
        explanation: 'Zašto, one word, means why. Za koga asks for whom, and kamo asks where to.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the dictionary form after za: "poklon za mama" — za takes the accusative: poklon za mamu. Second, forgetting that people are alive: "za brat", "za Marko" — a living masculine noun adds -a: za brata, za Marka. Third, splitting "why": "Za što učiš?" when you mean why — zašto is one word.',
        highlight: 'poklon za mamu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ovo je poklon za ___." (mama)',
            options: ['mama', 'mamu', 'mami', 'mamom'],
            correct: 1,
            explanation: 'za takes the accusative, and feminine -a becomes -u: za mamu.',
          },
          {
            q: 'How do you say "a ticket to Zagreb"?',
            options: ['karta za Zagreba', 'karta u Zagrebu', 'karta za Zagrebu', 'karta za Zagreb'],
            correct: 3,
            explanation:
              'A ticket is FOR a place: za, and Zagreb is masculine and not alive, so it does not change.',
          },
          {
            q: 'Complete: "Kupujem knjigu za ___." (my brother)',
            options: ['mog brata', 'moj brat', 'mojem bratu', 'mojim bratom'],
            correct: 0,
            explanation:
              'brat is alive, so it adds -a, and the possessive moves with it: za mog brata.',
          },
          {
            q: 'Which word means "why"?',
            options: ['za što', 'za koga', 'zašto', 'koga'],
            correct: 2,
            explanation:
              'zašto — one word. Za što (two words) is "for what", za koga is "for whom", and koga is the object form of tko.',
          },
          {
            q: 'What does za do to the noun after it?',
            options: [
              'puts it in the accusative',
              'nothing',
              'puts it in the plural',
              'makes it feminine',
            ],
            correct: 0,
            explanation:
              'za is always followed by the accusative — the same object form verbs use.',
          },
          {
            q: 'Complete: "Rezerviram stol za ___." (Saturday)',
            options: ['subota', 'suboti', 'subotu', 'subotom'],
            correct: 2,
            explanation: 'za + accusative: subota → subotu.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Za — Key Takeaways',
        points: [
          'za = for, always + accusative',
          'For someone: za mamu, za brata, za dobrog prijatelja',
          'A ticket or vehicle for a place: karta za Split, vlak za Zagreb',
          'For a day or occasion: za subotu, za doručak, za rođendan',
          'Za koga? = for whom; zašto (one word) = why',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Accusative Pronouns — me, you, him, her
  // ─────────────────────────────────────────────────────────
  {
    id: 'accusative-pronouns',
    title: 'Me, You, Him, Her',
    subtitle: 'The object pronouns — long forms, short forms, and where they go',
    icon: '👉',
    level: 'A1',
    duration: '~8 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Stop Repeating the Noun',
        body: '"I see Marko. Marko is waving. I call Marko." Nobody talks like that — after the first time you say "him". Croatian has object pronouns too, and most of them come in TWO forms: a long one (njega) and a short one (ga). Both mean "him". This lesson shows which one to use and where the short one goes.',
        icon: '👉',
      },
      {
        type: 'table',
        title: 'The Object Pronouns',
        headers: ['Subject', 'Long form', 'Short form', 'English'],
        rows: [
          ['ja', 'mene', 'me', 'me'],
          ['ti', 'tebe', 'te', 'you (one person)'],
          ['on', 'njega', 'ga', 'him'],
          ['ona', 'nju', 'je (or ju)', 'her'],
          ['ono', 'njega', 'ga', 'it'],
          ['mi', 'nas', 'nas', 'us'],
          ['vi', 'vas', 'vas', 'you (several, or polite)'],
          ['oni / one / ona', 'njih', 'ih', 'them'],
        ],
      },
      {
        type: 'rule',
        title: 'The Short Form Is the Normal One',
        body: 'In an ordinary sentence use the short form. Vidim ga. (I see him.) Volim te. (I love you.) Čekam vas. (I am waiting for you.) Zovem ih. (I am calling them.) For "her" the usual short form is je; ju is also correct and you will meet it where je would sit next to another je. For mi and vi the long and short forms are the same word: nas, vas.',
        highlight: 'Vidim ga.',
      },
      {
        type: 'rule',
        title: 'Short Forms Sit in Second Place',
        body: 'The short forms are clitics — tiny words that can never start a sentence and always lean on something in front of them. They go in SECOND place: after the first word or phrase. Ana me zove. (Ana is calling me.) Marko ga vidi. (Marko sees him.) Ja te volim. (I love you.) In a question li comes first, then the pronoun: Vidiš li me? With ne, the ne and the verb count as one unit: Ne vidim ga. After a modal verb: Moram ga zvati. (I have to call him.)',
        highlight: 'Ana me zove.',
      },
      {
        type: 'rule',
        title: 'When You Need the Long Form',
        body: 'Use the long form in three situations. After a preposition: za mene, za tebe, za njega, za nju, za njih. For emphasis or contrast: Volim tebe, a ne njega. (I love YOU, not him.) On its own, as a one-word answer: Koga čekaš? — Tebe! (Who are you waiting for? — You!)',
        highlight: 'za tebe',
      },
      {
        type: 'example',
        title: 'Short Forms in Everyday Sentences',
        items: [
          {
            hr: 'Gdje je Marko? Ne vidim ga.',
            en: "Where is Marko? I can't see him.",
            note: 'ga = him; ne vidim counts as one unit',
          },
          { hr: 'Volim te.', en: 'I love you.', note: 'te = you' },
          { hr: 'Ana me zove.', en: 'Ana is calling me.', note: 'me in second place' },
          {
            hr: 'Čekamo vas ovdje.',
            en: 'We are waiting for you here.',
            note: 'vas = you (several)',
          },
          { hr: 'Poznaješ li ih?', en: 'Do you know them?', note: 'li first, then ih' },
          { hr: 'Ivana? Vidim je svaki dan.', en: 'Ivana? I see her every day.', note: 'je = her' },
          { hr: 'Moram ga zvati.', en: 'I have to call him.', note: 'second place, after moram' },
        ],
      },
      {
        type: 'example',
        title: 'Long Forms',
        items: [
          { hr: 'Ovo je za tebe.', en: 'This is for you.', note: 'after a preposition: long form' },
          {
            hr: 'Kava je za nju, a čaj je za njega.',
            en: 'The coffee is for her, and the tea is for him.',
            note: 'za nju, za njega',
          },
          {
            hr: 'Koga čekaš? — Tebe!',
            en: 'Who are you waiting for? — You!',
            note: 'alone as an answer',
          },
          {
            hr: 'Volim tebe, a ne njega.',
            en: 'I love you, not him.',
            note: 'contrast: long forms',
          },
          {
            hr: 'Soba je za nas.',
            en: 'The room is for us.',
            note: 'nas — long and short are the same',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I see him"?',
        options: ['Ga vidim.', 'Vidim ga.', 'Vidim on.'],
        correct: 1,
        explanation:
          'The short form goes in second place: Vidim ga. It can never start a sentence, and "on" is the subject form, not the object.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "This is for you"? (one person)',
        options: ['Ovo je za tebe.', 'Ovo je za ti.', 'Ovo je tebe za.'],
        correct: 0,
        explanation:
          'After a preposition use the long form: za tebe. "Ti" is the subject form, and za comes before its noun.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, starting a sentence with a short form: "Te volim." — a short form needs a word in front of it: Volim te, or Ja te volim. Second, a short form after a preposition: "za ga" — after a preposition use the long form: za njega. Third, using the subject form as an object: "Vidim on" — the object of the verb is ga: Vidim ga.',
        highlight: 'Volim te',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Vidiš li Petra? — Da, vidim ___."',
            options: ['je', 'ih', 'me', 'ga'],
            correct: 3,
            explanation: 'Petar is "he", so the object is ga. Je is her, ih them, and me me.',
          },
          {
            q: 'Complete: "Gdje su Ana i Marko? Ne vidim ___."',
            options: ['ga', 'je', 'ih', 'nas'],
            correct: 2,
            explanation: 'Ana and Marko are "they", so the object is ih.',
          },
          {
            q: 'Complete: "Kava je za ___." (for her)',
            options: ['je', 'nju', 'ona', 'ju'],
            correct: 1,
            explanation:
              'After a preposition use the long form: za nju. Je and ju are short forms, and ona is the subject form.',
          },
          {
            q: 'Which sentence says "Ana is calling me"?',
            options: ['Me Ana zove.', 'Ana ja zove.', 'Ana me zove.', 'Ana zove ja.'],
            correct: 2,
            explanation:
              'The short form me goes in second place, after Ana: Ana me zove. It cannot start a sentence, and "ja" is the subject form.',
          },
          {
            q: 'Complete: "Koga čekaš? — ___!" (You! — one person)',
            options: ['Te', 'Tebe', 'Ti', 'Tebi'],
            correct: 1,
            explanation:
              'On its own a pronoun needs the long form: Tebe! A short form cannot stand alone, ti is the subject form, and tebi is another case.',
          },
          {
            q: 'Where does a short pronoun like ga or te go?',
            options: [
              'always first in the sentence',
              'always last in the sentence',
              'right after a preposition',
              'in second place, after the first word or phrase',
            ],
            correct: 3,
            explanation:
              'Short forms sit in second place: Ana me zove, Vidim ga. After a preposition you use the long form instead.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Object Pronouns — Key Takeaways',
        points: [
          'me/mene, te/tebe, ga/njega, je/nju, nas, vas, ih/njih',
          'The short form is normal: Vidim ga. Volim te.',
          'Short forms sit in second place: Ana me zove. Vidiš li me?',
          'Long forms after a preposition (za tebe), for contrast, and alone (Tebe!)',
          'A short form never starts a sentence',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // At the Travel Agency
  // ─────────────────────────────────────────────────────────
  {
    id: 'travel-agency',
    title: 'At the Travel Agency',
    subtitle: 'Booking a trip: a ticket for where, for when, and for whom',
    icon: '🧳',
    level: 'A1',
    duration: '~8 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'Everything You Need Is Already Here',
        body: 'Booking a trip uses exactly what you have learned in the last few lessons: ići and u/na for where you are going, za for the ticket and the day, the days of the week, and the object pronouns. This lesson puts them together in one of the most useful conversations a visitor to Croatia has — at a putnička agencija (travel agency) or a ticket counter.',
        icon: '🧳',
      },
      {
        type: 'rule',
        title: 'Saying What You Want',
        body: 'Želim (I want) is fine. The polite form you met with the modals is Htio bih (a man speaking) or Htjela bih (a woman speaking): "I would like". Both are followed by the accusative or by a verb in its dictionary form. Htio bih kartu. (I would like a ticket.) Htjela bih rezervirati sobu. (I would like to book a room.) Add molim (please) at the end.',
        highlight: 'Htjela bih rezervirati sobu.',
      },
      {
        type: 'rule',
        title: 'Tickets',
        body: 'karta = ticket. A one-way ticket is jednosmjerna karta; a return ticket is povratna karta. As an object the whole phrase takes -u: Htio bih povratnu kartu. The destination comes with za: karta za Split, karta za trajekt (a ferry ticket). Koliko košta karta? asks how much it costs.',
        highlight: 'povratnu kartu',
      },
      {
        type: 'rule',
        title: 'When',
        body: 'For the day, use u + the accusative: u petak (on Friday), u subotu (on Saturday). For what a booking is FOR, use za: sobu za subotu (a room for Saturday). For the clock: u osam (at eight), u osam sati. To ask when a bus, train or ferry leaves, use ići: Kada ide trajekt za Hvar? (When does the ferry to Hvar go?)',
        highlight: 'Kada ide trajekt za Hvar?',
      },
      {
        type: 'table',
        title: 'At the Counter',
        headers: ['Croatian', 'English'],
        rows: [
          ['Izvolite.', 'How can I help? / Here you are.'],
          ['Želim rezervirati putovanje.', 'I want to book a trip.'],
          [
            'Htio bih / Htjela bih kartu za Split.',
            'I would like a ticket to Split (man / woman).',
          ],
          ['jednosmjerna karta', 'one-way ticket'],
          ['povratna karta', 'return ticket'],
          ['Kada ide autobus za Zadar?', 'When does the bus to Zadar go?'],
          ['Imate li sobu za subotu?', 'Do you have a room for Saturday?'],
          ['Koliko košta?', 'How much does it cost?'],
        ],
      },
      {
        type: 'example',
        title: 'A Conversation at the Counter',
        items: [
          {
            hr: 'Dobar dan, izvolite.',
            en: 'Good afternoon, how can I help?',
            note: 'izvolite — the agent invites you to speak',
          },
          {
            hr: 'Dobar dan. Želim ići na Hvar u petak.',
            en: 'Good afternoon. I want to go to Hvar on Friday.',
            note: 'an island → na; u petak',
          },
          {
            hr: 'Kada ide trajekt za Hvar?',
            en: 'When does the ferry to Hvar go?',
            note: 'ići for a ferry, za for its destination',
          },
          {
            hr: 'Trajekt ide u osam i u dva.',
            en: 'The ferry goes at eight and at two.',
            note: 'u osam — at eight',
          },
          {
            hr: 'Htjela bih povratnu kartu, molim.',
            en: 'I would like a return ticket, please.',
            note: 'a woman speaking: Htjela bih',
          },
          { hr: 'Za jednu osobu?', en: 'For one person?', note: 'jedna osoba → jednu osobu' },
          {
            hr: 'Ne, za mene i moju sestru.',
            en: 'No, for me and my sister.',
            note: 'za + long pronoun, za + moju sestru',
          },
          {
            hr: 'Dobro. Karte su ovdje. — Hvala, uzimam ih.',
            en: 'Fine. The tickets are here. — Thanks, I will take them.',
            note: 'ih = them',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Idemo u Dubrovnik u subotu.',
            en: 'We are going to Dubrovnik on Saturday.',
            note: 'a town → u; u subotu',
          },
          {
            hr: 'Rezerviram hotel za petak i subotu.',
            en: 'I am booking a hotel for Friday and Saturday.',
            note: 'za + the days',
          },
          { hr: 'Trebam kartu za vlak.', en: 'I need a train ticket.', note: 'trebam + object' },
          {
            hr: 'Ivana želi jednosmjernu kartu za Zagreb.',
            en: 'Ivana wants a one-way ticket to Zagreb.',
            note: 'the adjective takes -u too',
          },
          {
            hr: 'Moramo ići na kolodvor u sedam.',
            en: 'We have to go to the station at seven.',
            note: 'na kolodvor',
          },
          {
            hr: 'Idemo na izlet na Krk.',
            en: 'We are going on a trip to Krk.',
            note: 'na izlet, na Krk',
          },
          { hr: 'Kupujem kartu za autobus.', en: 'I am buying a bus ticket.', note: 'za autobus' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A man says: "I would like a return ticket to Split."',
        options: [
          'Htio bih povratna karta za Split.',
          'Htio bih povratnu kartu za Split.',
          'Htio bih povratnu kartu u Splitu.',
        ],
        correct: 1,
        explanation:
          'The ticket is the object, so the whole phrase takes -u: povratnu kartu, and its destination comes with za: za Split.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you ask "When does the ferry to Hvar go?"',
        options: [
          'Kada idu trajekt za Hvar?',
          'Kamo ide trajekt za Hvar?',
          'Kada ide trajekt za Hvar?',
        ],
        correct: 2,
        explanation:
          'Kada? asks when, and one ferry takes ide: Kada ide trajekt za Hvar? Kamo? would ask where it is going, and idu is plural.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, the ticket in its dictionary form: "Htio bih karta" — what you want is an object: Htio bih kartu. Second, the wrong polite form for your gender: a woman says Htjela bih, a man says Htio bih. Third, the day in the wrong form: "u petku" — on Friday is u petak, u + the accusative.',
        highlight: 'Htio bih kartu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Htio bih ___ za Zadar."',
            options: ['karta', 'kartu', 'karti', 'kartom'],
            correct: 1,
            explanation: 'The ticket is the object of htio bih, so feminine -a becomes -u: kartu.',
          },
          {
            q: 'A woman wants to book a room. Which sentence is correct?',
            options: [
              'Htio bih rezervirati sobu.',
              'Htjela bih rezervirati soba.',
              'Htjela bih rezervirati sobu.',
              'Htjela bi rezervirati sobu.',
            ],
            correct: 2,
            explanation:
              'A woman says Htjela bih, and the room is an object: sobu. "Htio" is the man\'s form, and "bi" without the h means "she would".',
          },
          {
            q: 'How do you say "We are leaving on Saturday"?',
            options: ['Idemo u subotu.', 'Idemo u suboti.', 'Idemo na subotu.', 'Idemo subota.'],
            correct: 0,
            explanation: 'On a day is u + the accusative: u subotu.',
          },
          {
            q: 'Complete: "Kada ___ autobus za Rijeku?"',
            options: ['idu', 'idem', 'ideš', 'ide'],
            correct: 3,
            explanation: 'One bus is "it", so the verb is ide.',
          },
          {
            q: 'What is a "povratna karta"?',
            options: ['a one-way ticket', 'a return ticket', 'a ferry', 'a timetable'],
            correct: 1,
            explanation:
              'povratna karta is a return ticket. A one-way ticket is jednosmjerna karta.',
          },
          {
            q: 'Complete: "Imate li sobu za ___?" (Friday)',
            options: ['petak', 'petku', 'petkom', 'petci'],
            correct: 0,
            explanation:
              'za takes the accusative, and petak is masculine and not alive, so it does not change.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Travel Agency — Key Takeaways',
        points: [
          'Polite request: Htio bih (man) / Htjela bih (woman) + accusative',
          'jednosmjerna karta (one-way), povratna karta (return)',
          'A ticket for a place: karta za Split; a trip there: idemo u / na …',
          'On a day: u petak; booked for a day: za petak',
          'When does it go? Kada ide trajekt za Hvar?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Jesti and Piti — Eating and Drinking
  // ─────────────────────────────────────────────────────────
  {
    id: 'jesti-piti',
    title: 'Eating and Drinking',
    subtitle: 'jesti and piti — two irregular verbs and their objects',
    icon: '🍽️',
    level: 'A1',
    duration: '~7 min',
    color: '#c2410c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'Two Verbs You Use Every Day',
        body: 'jesti (to eat) and piti (to drink) come up at every meal, and neither builds its present tense on the dictionary form in the obvious way. Learn their stems once and both verbs fall into place — with the same -em endings you used for idem.',
        icon: '🍽️',
      },
      {
        type: 'table',
        title: 'jesti and piti',
        headers: ['Person', 'jesti — to eat', 'piti — to drink'],
        rows: [
          ['ja', 'jedem', 'pijem'],
          ['ti', 'jedeš', 'piješ'],
          ['on / ona / ono', 'jede', 'pije'],
          ['mi', 'jedemo', 'pijemo'],
          ['vi', 'jedete', 'pijete'],
          ['oni / one / ona', 'jedu', 'piju'],
        ],
      },
      {
        type: 'rule',
        title: 'jesti: the Stem Is jed-',
        body: 'The dictionary form jesti hides a d. The present-tense stem is jed-: jedem, jedeš, jede, jedemo, jedete, jedu. Do not confuse jedem (I eat) with jesam (I am, the long form of sam) — they only look alike at the start.',
        highlight: 'jed- + em = jedem',
      },
      {
        type: 'rule',
        title: 'piti: the Stem Is pij-',
        body: 'For piti, add a j: the stem is pij-. pijem, piješ, pije, pijemo, pijete — and for oni the ending is -u: piju. The same pattern belongs to a few short verbs you will meet later, so it is worth learning well here.',
        highlight: 'oni piju',
      },
      {
        type: 'rule',
        title: 'What You Eat or Drink Is the Object',
        body: 'The food or drink takes the accusative, just like anything else a verb acts on. Feminine -a becomes -u: Jedem jabuku. Pijem vodu. Jedemo juhu. Masculine things and neuter nouns do not change: Jedem kruh. Pije sok. Jedeš li meso? Pijemo mlijeko.',
        highlight: 'Pijem vodu.',
      },
      {
        type: 'rule',
        title: 'Asking, Saying No, Meals',
        body: 'Što jedeš? (What are you eating?) Što piješ? (What are you drinking?) Jedeš li ribu? (Do you eat fish?) The negative is two words: Ne jedem meso. (I do not eat meat.) Ne pijem kavu. With za you can name the meal: za doručak (for breakfast), za ručak (for lunch), za večeru (for dinner).',
        highlight: 'Ne jedem meso.',
      },
      {
        type: 'example',
        title: 'Every Person',
        items: [
          { hr: 'Ja jedem ribu.', en: 'I eat fish.', note: 'riba → ribu' },
          { hr: 'Što piješ?', en: 'What are you drinking?', note: 'ti → piješ' },
          { hr: 'Marko jede jabuku.', en: 'Marko is eating an apple.', note: 'jabuka → jabuku' },
          { hr: 'Jedemo juhu i salatu.', en: 'We are eating soup and salad.', note: 'mi → jedemo' },
          { hr: 'Pijete li čaj ili kavu?', en: 'Do you drink tea or coffee?', note: 'vi → pijete' },
          {
            hr: 'Djeca piju mlijeko.',
            en: 'The children drink milk.',
            note: 'oni → piju; mlijeko does not change',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          { hr: 'Što jedeš za doručak?', en: 'What do you eat for breakfast?', note: 'za doručak' },
          {
            hr: 'Za doručak jedem kruh i sir.',
            en: 'For breakfast I eat bread and cheese.',
            note: 'kruh, sir — no change',
          },
          {
            hr: 'Pijem kavu svako jutro.',
            en: 'I drink coffee every morning.',
            note: 'kava → kavu',
          },
          {
            hr: 'Ne jedem meso, jedem ribu.',
            en: 'I do not eat meat, I eat fish.',
            note: 'ne jedem — two words',
          },
          {
            hr: 'Ana ne pije pivo.',
            en: 'Ana does not drink beer.',
            note: 'pivo — neuter, no change',
          },
          {
            hr: 'Što pijete? — Pijemo sok.',
            en: 'What are you drinking? — We are drinking juice.',
            note: 'pijete / pijemo',
          },
          { hr: 'Za ručak jedemo juhu.', en: 'For lunch we eat soup.', note: 'za ručak' },
          { hr: 'Jedeš li sladoled?', en: 'Do you eat ice cream?', note: 'li after the verb' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "They are drinking water"?',
        options: ['Oni pije vodu.', 'Oni piju vodu.', 'Oni piju voda.'],
        correct: 1,
        explanation:
          'oni takes -u: piju, and voda is the object: vodu. "Pije" is singular, and "voda" is the dictionary form.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "I am eating an apple"?',
        options: ['Jesem jabuku.', 'Jedem jabuka.', 'Jedem jabuku.'],
        correct: 2,
        explanation:
          'The stem is jed-: jedem, and the apple is the object: jabuku. "Jesem" is not a form of jesti.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'First, building the present on the dictionary form: "jestem", "jesim" — the stem is jed-: jedem. Second, the wrong ending for oni: "oni pijeju" — it is oni piju. Third, food in its dictionary form: "Jedem juha" — what you eat is an object: Jedem juhu.',
        highlight: 'Jedem juhu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Ja ___ ribu."',
            options: ['jedem', 'jede', 'jedu', 'jesti'],
            correct: 0,
            explanation:
              'ja takes -em: jedem. Jede is he or she, jedu is they, and jesti is the dictionary form.',
          },
          {
            q: 'Complete: "Ti ___ kavu?"',
            options: ['pijem', 'piješ', 'pije', 'piju'],
            correct: 1,
            explanation: 'ti takes -eš: piješ.',
          },
          {
            q: 'Complete: "Djeca ___ mlijeko."',
            options: ['pije', 'pijemo', 'piju', 'pijete'],
            correct: 2,
            explanation: 'djeca takes the plural verb: piju.',
          },
          {
            q: 'Complete: "Mi ___ juhu."',
            options: ['jedu', 'jede', 'jedete', 'jedemo'],
            correct: 3,
            explanation: 'mi takes -emo: jedemo.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Jedem salata.', 'Jedem salatu.', 'Jedem salati.', 'Jedem salatom.'],
            correct: 1,
            explanation: 'What you eat is the object, and feminine -a becomes -u: salatu.',
          },
          {
            q: 'How do you say "I do not drink beer"?',
            options: ['Nepijem pivo.', 'Ne piju pivo.', 'Ne pijem pivo.', 'Ne pijem pivu.'],
            correct: 2,
            explanation:
              'The negative is two words, ne pijem, and pivo is neuter, so it does not change. "Ne piju" means "they do not drink".',
          },
        ],
      },
      {
        type: 'summary',
        title: 'jesti and piti — Key Takeaways',
        points: [
          'jesti: jedem, jedeš, jede, jedemo, jedete, jedu (stem jed-)',
          'piti: pijem, piješ, pije, pijemo, pijete, piju (stem pij-)',
          'Food and drink take the accusative: Jedem juhu. Pijem vodu.',
          'The negative is two words: Ne jedem meso.',
          'Meals with za: za doručak, za ručak, za večeru',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'ici-going': {
    worked: [
      {
        title: 'Find the Person, Then the Ending',
        problem: 'Dopuni: Mi ___ kući. (ići)',
        en: 'We are going home.',
        steps: [
          { label: 'Who is going?', text: 'mi — we.' },
          { label: 'The stem', text: 'ići builds its present on id-, not on ić-.' },
          { label: 'The ending', text: 'mi takes -emo: id- + emo.' },
        ],
        answer: 'Mi idemo kući.',
      },
      {
        title: 'Which "Where"?',
        problem: 'Dopuni: ___ ideš? — Kući. (Kamo or Gdje?)',
        en: 'Where are you going? — Home.',
        steps: [
          { label: 'Look at the verb', text: 'ideš — someone is moving.' },
          {
            label: 'Look at the answer',
            text: 'Kući is a direction, not a place where someone is.',
          },
          { label: 'Choose', text: 'Direction is asked with Kamo?' },
        ],
        answer: 'Kamo ideš? — Kući.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ti ___ u grad?',
          options: ['ideš', 'idem', 'ide', 'idete'],
          correct: 0,
          hint: 'ti takes the -š ending.',
          explanation: 'Ideš li u grad? or simply Ti ideš u grad?',
        },
        {
          q: 'Ana ___ van.',
          options: ['idu', 'idem', 'ide', 'ideš'],
          correct: 2,
          hint: 'One person, she: the shortest form.',
          explanation: 'Ana ide van.',
        },
        {
          q: '___ je Petar? — Tamo.',
          options: ['Kamo', 'Gdje', 'Kada', 'Što'],
          correct: 1,
          hint: 'The answer says where Petar IS, not where he is going.',
          explanation: 'Gdje je Petar? — Tamo.',
        },
        {
          q: 'How do you say "I am going home"?',
          options: ['Idem kuća.', 'Idem u kući.', 'Idem kući.', 'Ja ide kući.'],
          correct: 2,
          hint: 'Home as a direction needs no preposition.',
          explanation: 'Idem kući.',
        },
        {
          q: 'Moram ___ kući.',
          options: ['idem', 'ide', 'idu', 'ići'],
          correct: 3,
          hint: 'After a modal, the second verb stays in its dictionary form.',
          explanation: 'Moram ići kući.',
        },
        {
          q: 'Djeca ___ van.',
          options: ['ide', 'idu', 'idemo', 'idete'],
          correct: 1,
          hint: 'djeca takes the plural verb, like oni.',
          explanation: 'Djeca idu van.',
        },
        {
          q: 'Danas ___ van. (I am not going)',
          options: ['neidem', 'ne idem', 'ne ićem', 'nije idem'],
          correct: 1,
          hint: 'The negative of this verb is two words.',
          explanation: 'Danas ne idem van.',
        },
        {
          q: 'How do you say "Let\'s go to the seaside!"?',
          options: ['Idemo na moru!', 'Idem na more!', 'Ide na more!', 'Idemo na more!'],
          correct: 3,
          hint: '"Let\'s go" is the mi form, and going somewhere keeps the place in its object form.',
          explanation: 'Idemo na more!',
        },
        {
          q: 'Laku noć, idem ___.',
          options: ['spavati', 'spavam', 'spava', 'spavaju'],
          correct: 0,
          hint: 'After idem, the second verb stays in its dictionary form.',
          explanation: 'Laku noć, idem spavati.',
        },
        {
          type: 'type',
          q: 'Ja ____ kući. (ići)',
          answer: 'idem',
          hint: 'The stem id- plus the ja ending -em.',
          explanation: 'Ja idem kući.',
        },
        {
          type: 'type',
          q: '____ li vi u kino? (ići)',
          answer: 'Idete',
          hint: 'vi takes -ete.',
          explanation: 'Idete li u kino?',
        },
        {
          type: 'type',
          q: 'Oni ____ van. (ići)',
          answer: 'idu',
          hint: 'oni takes -u, not -e.',
          explanation: 'Oni idu van.',
        },
        {
          type: 'type',
          q: '____ ideš? — Kući.',
          answer: 'Kamo',
          hint: 'The question word for direction — where TO.',
          explanation: 'Kamo ideš? — Kući.',
        },
        {
          type: 'type',
          q: 'Ona ____ na kavu. (ići)',
          answer: 'ide',
          hint: 'on, ona and ono share one form: the stem plus -e.',
          explanation: 'Ona ide na kavu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ti ___ kući?"',
        options: ['idem', 'ideš', 'ide', 'idu'],
        correct: 1,
        explanation: 'ti takes -eš: ideš.',
      },
      {
        q: 'Complete: "Mi ___ na kavu."',
        options: ['ide', 'idete', 'idemo', 'idu'],
        correct: 2,
        explanation: 'mi takes -emo: idemo.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Oni idu van.', 'Oni ide van.', 'Oni idemo van.', 'Oni ideš van.'],
        correct: 0,
        explanation: 'oni takes -u: Oni idu van.',
      },
      {
        q: 'Which is a good answer to "Kamo ideš?"',
        options: ['Tamo je.', 'Marko je.', 'Ovdje sam.', 'Idem u grad.'],
        correct: 3,
        explanation:
          'Kamo? asks where you are going, so the answer names a direction: Idem u grad. The others say where someone or something is.',
      },
      {
        q: 'What is the dictionary form of idem?',
        options: ['idemti', 'ići', 'idati', 'iditi'],
        correct: 1,
        explanation: 'ići — one of the few dictionary forms ending in -ći, like moći.',
      },
      {
        q: 'How do you say "I have to go"?',
        options: ['Moram idem.', 'Moram ići.', 'Morati idem.', 'Moram ide.'],
        correct: 1,
        explanation: 'Only the modal changes; ići stays in its dictionary form: Moram ići.',
      },
    ],
    vocab: [
      ['ići', 'to go', 'Idem kući.'],
      ['kamo', 'where to', 'Kamo ideš?'],
      ['gdje', 'where (at)', 'Gdje je Ana?'],
      ['kući', '(to) home', 'Idemo kući.'],
      ['tamo', 'there', 'Ana je tamo.'],
      ['ovamo', 'this way, towards here', 'Oni idu ovamo.'],
      ['van', 'out', 'Danas ne idem van.'],
      ['Idemo!', "Let's go!", 'Idemo na kavu!'],
      ['spavati', 'to sleep', 'Laku noć, idem spavati.'],
      ['kasniti', 'to be late', 'Moram ići, kasnim.'],
    ],
  },

  'u-na-motion': {
    worked: [
      {
        title: 'A Building',
        problem: 'Dopuni: Idem ___ banku. (u or na?)',
        en: 'I am going to the bank.',
        steps: [
          { label: 'What kind of place?', text: 'A bank is a building with walls.' },
          { label: 'The preposition', text: 'Going into a building takes u.' },
          { label: 'The ending', text: 'Movement takes the accusative: banka → banku.' },
        ],
        answer: 'Idem u banku.',
      },
      {
        title: 'An Event',
        problem: 'Say: We are going to a concert.',
        en: 'We are going to a concert.',
        steps: [
          { label: 'The verb', text: 'mi → idemo.' },
          { label: 'What kind of place?', text: 'A concert is an event, so it takes na.' },
          { label: 'The ending', text: 'koncert is masculine and not alive: no change.' },
        ],
        answer: 'Idemo na koncert.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Idem ___ trgovinu.',
          options: ['u', 'na', 'iz', 'od'],
          correct: 0,
          hint: 'A shop is a building you go into.',
          explanation: 'Idem u trgovinu.',
        },
        {
          q: 'Marko ide ___ sastanak.',
          options: ['u', 'na', 'iz', 'od'],
          correct: 1,
          hint: 'A meeting is an event.',
          explanation: 'Marko ide na sastanak.',
        },
        {
          q: 'Idemo na ___. (the beach)',
          options: ['plaža', 'plaži', 'plažu', 'plažom'],
          correct: 2,
          hint: 'Going there: feminine -a changes to the object ending.',
          explanation: 'Idemo na plažu.',
        },
        {
          q: 'Ivana ide u ___. (Germany)',
          options: ['Njemačka', 'Njemačku', 'Njemačkoj', 'Njemačkom'],
          correct: 1,
          hint: 'A country ending in -a: going there changes the -a.',
          explanation: 'Ivana ide u Njemačku.',
        },
        {
          q: 'Sutra idemo ___ Krk.',
          options: ['u', 'kod', 'na', 'iz'],
          correct: 2,
          hint: 'Krk is an island.',
          explanation: 'Sutra idemo na Krk.',
        },
        {
          q: 'Moram ići ___ kolodvor.',
          options: ['u', 'iz', 'od', 'na'],
          correct: 3,
          hint: 'One of the places you simply learn with its preposition.',
          explanation: 'Moram ići na kolodvor.',
        },
        {
          q: 'How do you say "I am going home"?',
          options: ['Idem u kući.', 'Idem kući.', 'Idem na kuću.', 'Idem kuća.'],
          correct: 1,
          hint: 'Home as a direction needs no preposition at all.',
          explanation: 'Idem kući.',
        },
        {
          q: 'Studenti idu ___ fakultet.',
          options: ['na', 'u', 'iz', 'od'],
          correct: 0,
          hint: 'Another place you learn as a pair, like the station.',
          explanation: 'Studenti idu na fakultet.',
        },
        {
          type: 'type',
          q: 'Idem u ____. (škola)',
          answer: 'školu',
          hint: 'Going there: feminine -a becomes -u.',
          explanation: 'Idem u školu.',
        },
        {
          type: 'type',
          q: 'Idemo na ____. (utakmica)',
          answer: 'utakmicu',
          hint: 'An event takes na, and the noun takes the object ending.',
          explanation: 'Idemo na utakmicu.',
        },
        {
          type: 'type',
          q: 'Oni idu u ____. (Hrvatska)',
          answer: 'Hrvatsku',
          hint: 'A country ending in -a: change the -a when you go there.',
          explanation: 'Oni idu u Hrvatsku.',
        },
        {
          type: 'type',
          q: 'Ana ide ____ posao.',
          answer: 'na',
          hint: 'Work is an activity.',
          explanation: 'Ana ide na posao.',
        },
        {
          type: 'type',
          q: 'Idemo u ____ u petak. (the cinema)',
          answer: 'kino',
          hint: 'A neuter noun: it does not change.',
          explanation: 'Idemo u kino u petak.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ljeti idemo ___ more."',
        options: ['kod', 'na', 'iz', 'od'],
        correct: 1,
        explanation: 'The seaside takes na: na more.',
      },
      {
        q: 'Complete: "Sutra idem ___ Zagreb."',
        options: ['u', 'na', 'iz', 'od'],
        correct: 0,
        explanation: 'A town takes u, and Zagreb does not change: u Zagreb.',
      },
      {
        q: 'Complete: "Petra ide na ___." (the market)',
        options: ['tržnica', 'tržnici', 'tržnicom', 'tržnicu'],
        correct: 3,
        explanation: 'Going there takes the accusative: tržnica → tržnicu.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Idemo na kino.', 'Idemo u kinu.', 'Idemo u kino.', 'Idemo kino.'],
        correct: 2,
        explanation:
          'A cinema is a building → u, and neuter kino does not change: Idemo u kino. "U kinu" describes being there.',
      },
      {
        q: 'Why is it "na posao" and not "u posao"?',
        options: [
          'Work is an activity, and activities take na',
          'posao is feminine',
          'posao is alive',
          'na is used with every noun',
        ],
        correct: 0,
        explanation: 'Events and activities take na: na posao, na koncert, na sastanak.',
      },
      {
        q: 'How do you say "I am going to the station"?',
        options: ['Idem u kolodvor.', 'Idem na kolodvoru.', 'Idem na kolodvor.', 'Idem kolodvor.'],
        correct: 2,
        explanation:
          'kolodvor is learned with na, and going there leaves it unchanged: Idem na kolodvor.',
      },
    ],
    vocab: [
      ['škola', 'school', 'Djeca idu u školu.'],
      ['trgovina', 'shop', 'Idem u trgovinu.'],
      ['banka', 'bank', 'Ana ide u banku.'],
      ['posao', 'work, job', 'Svako jutro idem na posao.'],
      ['koncert', 'concert', 'U subotu idemo na koncert.'],
      ['plaža', 'beach', 'Idemo na plažu!'],
      ['kolodvor', 'station', 'Moram ići na kolodvor.'],
      ['sastanak', 'meeting', 'Marko ide na sastanak.'],
      ['utakmica', 'match, game', 'Idemo na utakmicu.'],
      ['otok', 'island', 'Ljeti idemo na otok.'],
    ],
  },

  'za-accusative': {
    worked: [
      {
        title: 'For a Person',
        problem: 'Dopuni: Ovo je poklon za ___. (brat)',
        en: 'This is a present for my brother.',
        steps: [
          { label: 'The preposition', text: 'za is always followed by the accusative.' },
          { label: 'Masculine: is it alive?', text: 'A brother is alive.' },
          { label: 'The ending', text: 'A living masculine noun adds -a.' },
        ],
        answer: 'Ovo je poklon za brata.',
      },
      {
        title: 'Why, or For What?',
        problem: 'Dopuni: ___ ideš u grad? (Why are you going into town?)',
        en: 'Why are you going into town?',
        steps: [
          { label: 'What is asked?', text: 'The reason — why.' },
          {
            label: 'One word or two?',
            text: '"Why" is written as one word; za što, two words, means "for what".',
          },
          { label: 'Build it', text: 'The question word goes first, then the verb.' },
        ],
        answer: 'Zašto ideš u grad?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kupujem cvijeće za ___. (sestra)',
          options: ['sestra', 'sestru', 'sestri', 'sestrom'],
          correct: 1,
          hint: 'za takes the object form: feminine -a changes.',
          explanation: 'Kupujem cvijeće za sestru.',
        },
        {
          q: 'Ovo je karta za ___. (Rijeka)',
          options: ['Rijeka', 'Rijeci', 'Rijeku', 'Rijekom'],
          correct: 2,
          hint: 'A town ending in -a: after za the -a changes.',
          explanation: 'Ovo je karta za Rijeku.',
        },
        {
          q: 'Za ___ je ovaj poklon? — Za tatu.',
          options: ['koga', 'tko', 'kome', 'kim'],
          correct: 0,
          hint: 'You need the object form of tko.',
          explanation: 'Za koga je ovaj poklon?',
        },
        {
          q: 'Za ___ imam sendvič. (lunch)',
          options: ['ručku', 'ručci', 'ručak', 'ručka'],
          correct: 2,
          hint: 'A masculine thing does not change after za.',
          explanation: 'Za ručak imam sendvič.',
        },
        {
          q: 'Vlak ___ Split ide u devet.',
          options: ['za', 'kod', 'iz', 'od'],
          correct: 0,
          hint: 'A train is named by where it goes.',
          explanation: 'Vlak za Split ide u devet.',
        },
        {
          q: 'Kupujem knjigu za ___. (a good friend)',
          options: ['dobar prijatelj', 'dobrog prijatelja', 'dobroj prijatelju', 'dobri prijatelj'],
          correct: 1,
          hint: 'A friend is alive, and the adjective moves with the noun.',
          explanation: 'Kupujem knjigu za dobrog prijatelja.',
        },
        {
          q: 'Rezerviram sobu za ___. (Friday)',
          options: ['petku', 'petkom', 'petci', 'petak'],
          correct: 3,
          hint: 'A day that is masculine and not alive does not change.',
          explanation: 'Rezerviram sobu za petak.',
        },
        {
          q: 'Ovo je za ___. (Marko)',
          options: ['Marko', 'Marka', 'Marku', 'Markom'],
          correct: 1,
          hint: 'Marko is a living masculine noun.',
          explanation: 'Ovo je za Marka.',
        },
        {
          type: 'type',
          q: 'Kupujem poklon za ____. (mama)',
          answer: 'mamu',
          hint: 'za + accusative: feminine -a becomes -u.',
          explanation: 'Kupujem poklon za mamu.',
        },
        {
          type: 'type',
          q: 'Imate li kartu za ____? (Rijeka)',
          answer: 'Rijeku',
          hint: 'The destination after za takes the object form.',
          explanation: 'Imate li kartu za Rijeku?',
        },
        {
          type: 'type',
          q: 'Ovo je pismo za ____. (prijatelj)',
          answer: 'prijatelja',
          hint: 'A friend is alive: a masculine noun adds -a.',
          explanation: 'Ovo je pismo za prijatelja.',
        },
        {
          type: 'type',
          q: '____ ideš kući? — Bolestan sam.',
          answer: 'Zašto',
          hint: 'The answer gives a reason: the one-word question for it.',
          explanation: 'Zašto ideš kući? — Bolestan sam.',
        },
        {
          type: 'type',
          q: 'Rezerviram stol za ____. (srijeda)',
          answer: 'srijedu',
          hint: 'za + accusative: feminine -a becomes -u.',
          explanation: 'Rezerviram stol za srijedu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Kupujem kolač za ___." (sestra)',
        options: ['sestra', 'sestri', 'sestru', 'sestrom'],
        correct: 2,
        explanation: 'za + accusative: sestra → sestru.',
      },
      {
        q: 'Complete: "Ovo je soba za ___." (Ivan)',
        options: ['Ivan', 'Ivana', 'Ivanu', 'Ivanom'],
        correct: 1,
        explanation: 'Ivan is a living masculine noun, so it adds -a: za Ivana.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Imam karta za Split.',
          'Imam kartu za Splita.',
          'Imam kartu za Splitu.',
          'Imam kartu za Split.',
        ],
        correct: 3,
        explanation:
          'The ticket is an object (kartu), and Split is not alive, so it does not change after za.',
      },
      {
        q: 'Complete: "Za ___ je ova kava? — Za tatu."',
        options: ['tko', 'koga', 'kome', 'kamo'],
        correct: 1,
        explanation: 'After za you need the object form of tko: koga.',
      },
      {
        q: 'What does "zašto" mean?',
        options: ['why', 'for what', 'for whom', 'where to'],
        correct: 0,
        explanation: 'zašto, one word, is "why". For whom is za koga; where to is kamo.',
      },
      {
        q: 'Complete: "Za ___ imam juhu." (dinner)',
        options: ['večera', 'večeri', 'večeru', 'večero'],
        correct: 2,
        explanation: 'za + accusative: večera → večeru.',
      },
    ],
    vocab: [
      ['za', 'for (+ accusative)', 'Ovo je poklon za mamu.'],
      ['poklon', 'present, gift', 'Kupujem poklon za brata.'],
      ['karta', 'ticket', 'Imate li kartu za Split?'],
      ['vlak', 'train', 'Vlak za Zagreb ide u osam.'],
      ['cvijeće', 'flowers', 'Kupujem cvijeće za sestru.'],
      ['zašto', 'why', 'Zašto učiš hrvatski?'],
      ['koga', 'whom (object form of tko)', 'Za koga je ovo?'],
      ['doručak', 'breakfast', 'Za doručak imam kruh i sir.'],
      ['ručak', 'lunch', 'Za ručak imam sendvič.'],
      ['večera', 'dinner', 'Za večeru imam juhu.'],
      ['rođendan', 'birthday', 'Za rođendan želim bicikl.'],
    ],
  },

  'accusative-pronouns': {
    worked: [
      {
        title: 'Replace the Noun',
        problem: 'Vidim Marka. → Vidim ___.',
        en: 'I see Marko. → I see him.',
        steps: [
          {
            label: 'Which pronoun?',
            text: 'Marko is "he": the object forms are njega (long) and ga (short).',
          },
          {
            label: 'Long or short?',
            text: 'An ordinary sentence, no preposition, no emphasis: short.',
          },
          { label: 'Where?', text: 'Second place — straight after vidim.' },
        ],
        answer: 'Vidim ga.',
      },
      {
        title: 'After a Preposition',
        problem: 'Say: This coffee is for her.',
        en: 'This coffee is for her.',
        steps: [
          { label: 'Which pronoun?', text: '"her": nju (long) and je (short).' },
          { label: 'Long or short?', text: 'It follows za, a preposition, so it must be long.' },
          { label: 'Build it', text: 'Ova kava je za + the long form.' },
        ],
        answer: 'Ova kava je za nju.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Volim ___. (you — one person)',
          options: ['te', 'ti', 'tebi', 'tvoj'],
          correct: 0,
          hint: 'The short object form for ti.',
          explanation: 'Volim te.',
        },
        {
          q: 'Čekam Anu. → Čekam ___.',
          options: ['ga', 'je', 'ih', 'me'],
          correct: 1,
          hint: 'Ana is "she".',
          explanation: 'Čekam je.',
        },
        {
          q: 'Ovo je za ___. (him)',
          options: ['ga', 'on', 'njega', 'njemu'],
          correct: 2,
          hint: 'After a preposition you need the long form.',
          explanation: 'Ovo je za njega.',
        },
        {
          q: 'Vidiš li ___? (us)',
          options: ['mi', 'nama', 'naš', 'nas'],
          correct: 3,
          hint: 'For "us" the long and short object forms are the same word.',
          explanation: 'Vidiš li nas?',
        },
        {
          q: 'How do you say "I am calling you" (one person)?',
          options: ['Te zovem.', 'Zovem te.', 'Zovem ti.', 'Zovem tvoj.'],
          correct: 1,
          hint: 'A short form can never start a sentence.',
          explanation: 'Zovem te.',
        },
        {
          q: 'Gdje su ključevi? Ne vidim ___.',
          options: ['ga', 'je', 'ih', 'nas'],
          correct: 2,
          hint: 'Ključevi are "they".',
          explanation: 'Ne vidim ih.',
        },
        {
          q: 'How do you say "I am waiting for you (all)"?',
          options: ['Čekam vas.', 'Čekam vi.', 'Čekam vama.', 'Vas čekam.'],
          correct: 0,
          hint: 'The object form of vi, in second place.',
          explanation: 'Čekam vas.',
        },
        {
          q: 'Koga voliš? — ___! (Her!)',
          options: ['Je', 'Ju', 'Ona', 'Nju'],
          correct: 3,
          hint: 'Alone, as a one-word answer, a pronoun needs its long form.',
          explanation: 'Koga voliš? — Nju!',
        },
        {
          type: 'type',
          q: 'Gdje je Ivan? Ne vidim ____.',
          answer: 'ga',
          hint: 'The short object form for "him".',
          explanation: 'Ne vidim ga.',
        },
        {
          type: 'type',
          q: 'Ovo je poklon za ____. (ja)',
          answer: 'mene',
          hint: 'After a preposition: the long object form of ja.',
          explanation: 'Ovo je poklon za mene.',
        },
        {
          type: 'type',
          q: 'Ana i Ivo? Poznajem ____.',
          answer: 'ih',
          hint: 'The short object form for "them".',
          explanation: 'Poznajem ih.',
        },
        {
          type: 'type',
          q: 'Volim ____, a ne njega. (ti)',
          answer: 'tebe',
          hint: 'A contrast needs the long form.',
          explanation: 'Volim tebe, a ne njega.',
        },
        {
          type: 'type',
          q: 'Marko? Moram ____ zvati.',
          answer: 'ga',
          hint: 'The short form for "him", in second place after the modal.',
          explanation: 'Moram ga zvati.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Vidiš li Ivanu? — Da, vidim ___."',
        options: ['ga', 'je', 'ih', 'nas'],
        correct: 1,
        explanation: 'Ivana is "she", so the short object form is je.',
      },
      {
        q: 'Complete: "Čekate li Marka i Petra? — Da, čekamo ___."',
        options: ['ga', 'je', 'ih', 'vas'],
        correct: 2,
        explanation: 'Marko and Petar are "they", so the object is ih.',
      },
      {
        q: 'Complete: "Ovo je za ___." (for us)',
        options: ['mi', 'nam', 'naš', 'nas'],
        correct: 3,
        explanation: 'After za: nas — for us, the long and short forms are the same.',
      },
      {
        q: 'Which sentence says "I don\'t see him"?',
        options: ['Ga ne vidim.', 'Ne ga vidim.', 'Ne vidim ga.', 'Ne vidim on.'],
        correct: 2,
        explanation: 'ne and the verb count as one unit, and ga follows them: Ne vidim ga.',
      },
      {
        q: 'After a preposition you use:',
        options: [
          'the long form: za njega',
          'the short form: za ga',
          'the subject form: za on',
          'no pronoun at all',
        ],
        correct: 0,
        explanation: 'Prepositions take the long form: za mene, za tebe, za njega.',
      },
      {
        q: 'Complete: "Koga zoveš? — ___!" (You! — one person)',
        options: ['Te', 'Tebe', 'Ti', 'Tvoj'],
        correct: 1,
        explanation: 'Alone as an answer: the long form, Tebe!',
      },
    ],
    vocab: [
      ['mene', 'me (long form; short: me)', 'Ovo je za mene.'],
      ['tebe', 'you (long form; short: te)', 'Volim te.'],
      ['njega', 'him (long form; short: ga)', 'Vidim ga.'],
      ['nju', 'her (long form; short: je)', 'Kava je za nju.'],
      ['nas', 'us', 'Djeca nas čekaju.'],
      ['vas', 'you, several or polite', 'Čekamo vas.'],
      ['njih', 'them (long form; short: ih)', 'Poznaješ li ih?'],
      ['zvati', 'to call', 'Moram ga zvati.'],
      ['poznavati', 'to know (a person)', 'Poznajem ih.'],
      ['čekati', 'to wait (for)', 'Ana me čeka.'],
    ],
  },

  'travel-agency': {
    worked: [
      {
        title: 'Asking for a Ticket',
        problem: 'A man asks for a one-way ticket to Zagreb.',
        en: 'I would like a one-way ticket to Zagreb.',
        steps: [
          { label: 'The polite start', text: 'A man says Htio bih.' },
          { label: 'The object', text: 'jednosmjerna karta is what he wants: both words take -u.' },
          { label: 'The destination', text: 'A ticket is FOR a place: za Zagreb.' },
        ],
        answer: 'Htio bih jednosmjernu kartu za Zagreb.',
      },
      {
        title: 'Where and When',
        problem: 'Say: We are going to Dubrovnik on Friday.',
        en: 'We are going to Dubrovnik on Friday.',
        steps: [
          { label: 'The verb', text: 'mi → idemo.' },
          { label: 'Where to', text: 'A town → u, and Dubrovnik does not change.' },
          { label: 'When', text: 'On a day: u + accusative, petak does not change.' },
        ],
        answer: 'Idemo u Dubrovnik u petak.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Želim rezervirati ___. (a room)',
          options: ['sobu', 'soba', 'sobi', 'sobom'],
          correct: 0,
          hint: 'The room is the object: feminine -a changes.',
          explanation: 'Želim rezervirati sobu.',
        },
        {
          q: 'Kada ide vlak ___ Split?',
          options: ['kod', 'za', 'iz', 'od'],
          correct: 1,
          hint: 'A train is named by where it goes.',
          explanation: 'Kada ide vlak za Split?',
        },
        {
          q: 'Idemo na izlet ___ nedjelju.',
          options: ['od', 'u', 'iz', 'kod'],
          correct: 1,
          hint: 'On a day: the same preposition as for going into a town.',
          explanation: 'Idemo na izlet u nedjelju.',
        },
        {
          q: 'Htjela bih ___ kartu. (return)',
          options: ['povratna', 'povratnoj', 'povratnu', 'povratnom'],
          correct: 2,
          hint: 'The adjective takes the same ending as kartu.',
          explanation: 'Htjela bih povratnu kartu.',
        },
        {
          q: 'Koliko ___ karta?',
          options: ['košta', 'koštaju', 'koštam', 'koštaš'],
          correct: 0,
          hint: 'One ticket is "it".',
          explanation: 'Koliko košta karta?',
        },
        {
          q: 'Imate li kartu za ___? (the ferry)',
          options: ['trajekta', 'trajektu', 'trajektom', 'trajekt'],
          correct: 3,
          hint: 'A ferry is masculine and not alive.',
          explanation: 'Imate li kartu za trajekt?',
        },
        {
          q: 'A man asks politely for a ticket:',
          options: ['Htjela bih kartu.', 'Hoću bih kartu.', 'Htio bih kartu.', 'Htio bi kartu.'],
          correct: 2,
          hint: 'The man\'s form, and bih with an h for "I".',
          explanation: 'Htio bih kartu.',
        },
        {
          q: 'Za koga je soba? — Za ___. (me and my husband)',
          options: ['meni i mog muža', 'mene i mog muža', 'ja i moj muž', 'mene i moj muž'],
          correct: 1,
          hint: 'After za: the long pronoun, and a husband is alive.',
          explanation: 'Za mene i mog muža.',
        },
        {
          type: 'type',
          q: 'Želim kupiti ____ za Rijeku. (karta)',
          answer: 'kartu',
          hint: 'The ticket is the object: feminine -a becomes -u.',
          explanation: 'Želim kupiti kartu za Rijeku.',
        },
        {
          type: 'type',
          q: 'Idemo u Zadar u ____. (subota)',
          answer: 'subotu',
          hint: 'On a day: u + accusative.',
          explanation: 'Idemo u Zadar u subotu.',
        },
        {
          type: 'type',
          q: 'Kada ____ trajekt za Brač? (ići)',
          answer: 'ide',
          hint: 'One ferry is "it".',
          explanation: 'Kada ide trajekt za Brač?',
        },
        {
          type: 'type',
          q: 'Htjela bih jednosmjernu kartu ____ Osijek.',
          answer: 'za',
          hint: "The preposition that names a ticket's destination.",
          explanation: 'Htjela bih jednosmjernu kartu za Osijek.',
        },
        {
          type: 'type',
          q: 'Idemo ____ izlet na Krk.',
          answer: 'na',
          hint: 'A trip is an activity.',
          explanation: 'Idemo na izlet na Krk.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Trebam ___ za vlak."',
        options: ['karta', 'karti', 'kartu', 'kartom'],
        correct: 2,
        explanation: 'The ticket is the object of trebam: kartu.',
      },
      {
        q: 'Complete: "Idemo u Split u ___."',
        options: ['petak', 'petku', 'petkom', 'petci'],
        correct: 0,
        explanation: 'On a day is u + accusative, and petak does not change.',
      },
      {
        q: 'Complete: "Kada ___ trajekti za Hvar?"',
        options: ['ide', 'idu', 'idemo', 'idete'],
        correct: 1,
        explanation: 'trajekti (the ferries) are "they": idu.',
      },
      {
        q: 'A woman books a room for Saturday. Which sentence is correct?',
        options: [
          'Htio bih sobu za subotu.',
          'Htjela bih soba za subotu.',
          'Htjela bih sobu za subota.',
          'Htjela bih sobu za subotu.',
        ],
        correct: 3,
        explanation:
          'A woman says Htjela bih, the room is an object (sobu), and za takes the accusative (subotu).',
      },
      {
        q: 'What does "jednosmjerna karta" mean?',
        options: ['a one-way ticket', 'a return ticket', 'a bus timetable', 'a hotel room'],
        correct: 0,
        explanation: 'jednosmjerna karta is a one-way ticket; a return ticket is povratna karta.',
      },
      {
        q: 'Complete: "Rezerviram hotel za ___." (my mother)',
        options: ['moja mama', 'moju mamu', 'mojoj mami', 'mojom mamom'],
        correct: 1,
        explanation: 'za + accusative, and the possessive moves too: moju mamu.',
      },
    ],
    vocab: [
      ['putnička agencija', 'travel agency', 'Idem u putničku agenciju.'],
      ['putovanje', 'trip, journey', 'Želim rezervirati putovanje.'],
      ['jednosmjerna karta', 'one-way ticket', 'Htio bih jednosmjernu kartu.'],
      ['povratna karta', 'return ticket', 'Htjela bih povratnu kartu.'],
      ['trajekt', 'ferry', 'Kada ide trajekt za Hvar?'],
      ['autobus', 'bus', 'Kupujem kartu za autobus.'],
      ['izlet', 'trip, outing', 'Idemo na izlet na Krk.'],
      ['rezervirati', 'to book, to reserve', 'Rezerviram sobu za subotu.'],
      ['osoba', 'person', 'Za jednu osobu?'],
      ['izvolite', 'how can I help / here you are', 'Dobar dan, izvolite.'],
    ],
  },

  'jesti-piti': {
    worked: [
      {
        title: 'Drinking, Plural',
        problem: 'Dopuni: Oni ___ vodu. (piti)',
        en: 'They are drinking water.',
        steps: [
          { label: 'The stem', text: 'piti builds its present on pij-.' },
          { label: 'The person', text: 'oni takes -u.' },
          { label: 'The object', text: 'vodu is already in the accusative.' },
        ],
        answer: 'Oni piju vodu.',
      },
      {
        title: 'Eating, With an Object',
        problem: 'Say: We are eating soup.',
        en: 'We are eating soup.',
        steps: [
          { label: 'The stem', text: 'jesti builds its present on jed-.' },
          { label: 'The person', text: 'mi takes -emo: jedemo.' },
          { label: 'The object', text: 'juha is feminine: -a becomes -u.' },
        ],
        answer: 'Jedemo juhu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Što ___ za doručak? (you — one person)',
          options: ['jedeš', 'jedem', 'jede', 'jedu'],
          correct: 0,
          hint: 'ti takes the -š ending.',
          explanation: 'Što jedeš za doručak?',
        },
        {
          q: 'Ana ___ čaj.',
          options: ['piju', 'pije', 'pijem', 'piješ'],
          correct: 1,
          hint: 'One person, she.',
          explanation: 'Ana pije čaj.',
        },
        {
          q: 'Mi ___ ribu nedjeljom.',
          options: ['jedu', 'jedete', 'jedemo', 'jede'],
          correct: 2,
          hint: 'mi takes -emo.',
          explanation: 'Mi jedemo ribu nedjeljom.',
        },
        {
          q: 'Pijem ___ svako jutro. (coffee)',
          options: ['kava', 'kavi', 'kavom', 'kavu'],
          correct: 3,
          hint: 'What you drink is the object: feminine -a changes.',
          explanation: 'Pijem kavu svako jutro.',
        },
        {
          q: 'Jedeš li ___? (meat)',
          options: ['mesu', 'meso', 'mesom', 'mesima'],
          correct: 1,
          hint: 'A neuter noun does not change as an object.',
          explanation: 'Jedeš li meso?',
        },
        {
          q: 'How do you say "They don\'t drink milk"?',
          options: [
            'Oni ne piju mlijeko.',
            'Oni nepiju mlijeko.',
            'Oni ne pije mlijeko.',
            'Oni ne pijeju mlijeko.',
          ],
          correct: 0,
          hint: 'Two words for the negative, and the oni ending is short.',
          explanation: 'Oni ne piju mlijeko.',
        },
        {
          q: 'Djeca ___ sladoled.',
          options: ['jede', 'jedemo', 'jedu', 'jedeš'],
          correct: 2,
          hint: 'djeca takes the plural verb, like oni.',
          explanation: 'Djeca jedu sladoled.',
        },
        {
          q: 'What is the dictionary form of pijem?',
          options: ['pijati', 'pijeti', 'pijti', 'piti'],
          correct: 3,
          hint: 'The j belongs to the present stem only.',
          explanation: 'piti — the present stem adds a j: pij-.',
        },
        {
          type: 'type',
          q: 'Ja ____ jabuku. (jesti)',
          answer: 'jedem',
          hint: 'The stem jed- plus the ja ending.',
          explanation: 'Ja jedem jabuku.',
        },
        {
          type: 'type',
          q: '____ li vino? (vi, piti)',
          answer: 'Pijete',
          hint: 'The stem pij- plus the vi ending.',
          explanation: 'Pijete li vino?',
        },
        {
          type: 'type',
          q: 'Oni ____ kruh. (jesti)',
          answer: 'jedu',
          hint: 'oni takes -u.',
          explanation: 'Oni jedu kruh.',
        },
        {
          type: 'type',
          q: 'Marko ____ sok. (piti)',
          answer: 'pije',
          hint: 'One person: the stem plus -e.',
          explanation: 'Marko pije sok.',
        },
        {
          type: 'type',
          q: 'Jedemo ____. (salata)',
          answer: 'salatu',
          hint: 'What you eat is the object: feminine -a becomes -u.',
          explanation: 'Jedemo salatu.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "On ___ juhu."',
        options: ['jedem', 'jede', 'jedu', 'jedeš'],
        correct: 1,
        explanation: 'on takes -e: jede.',
      },
      {
        q: 'Complete: "Vi ___ kavu?"',
        options: ['pije', 'piju', 'pijete', 'pijemo'],
        correct: 2,
        explanation: 'vi takes -ete: pijete.',
      },
      {
        q: 'Which sentence is correct?',
        options: ['Oni pijeju sok.', 'Oni pije sok.', 'Oni pijemo sok.', 'Oni piju sok.'],
        correct: 3,
        explanation: 'oni takes -u: piju.',
      },
      {
        q: 'Complete: "Jedem ___." (a sandwich)',
        options: ['sendvič', 'sendviču', 'sendvičem', 'sendviči'],
        correct: 0,
        explanation: 'A masculine thing does not change as an object: sendvič.',
      },
      {
        q: 'What is the present-tense stem of jesti?',
        options: ['jest-', 'jed-', 'jes-', 'je-'],
        correct: 1,
        explanation: 'jed-: jedem, jedeš, jede…',
      },
      {
        q: 'How do you say "I don\'t eat fish"?',
        options: ['Ne jedem riba.', 'Nejedem ribu.', 'Ne jedem ribu.', 'Ne jede ribu.'],
        correct: 2,
        explanation: 'The negative is two words, and riba is the object: Ne jedem ribu.',
      },
    ],
    vocab: [
      ['jesti', 'to eat', 'Što jedeš?'],
      ['piti', 'to drink', 'Pijem kavu.'],
      ['jabuka', 'apple', 'Marko jede jabuku.'],
      ['riba', 'fish', 'Ne jedem meso, jedem ribu.'],
      ['meso', 'meat', 'Jedeš li meso?'],
      ['juha', 'soup', 'Za ručak jedemo juhu.'],
      ['sok', 'juice', 'Pijemo sok.'],
      ['mlijeko', 'milk', 'Djeca piju mlijeko.'],
      ['pivo', 'beer', 'Ana ne pije pivo.'],
      ['sladoled', 'ice cream', 'Jedeš li sladoled?'],
    ],
  },
};
