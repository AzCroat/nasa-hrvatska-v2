// functions/api/content/_data/lessonPracticeA1.js
//
// A1 worked examples and guided practice (2026-09-27), merged into each lesson by
// lessonPractice.js. Per lesson: two worked examples (a problem solved one visible
// step at a time) and one guided-practice slide (four items, each with a HINT shown
// after a first wrong try and an explanation once resolved).
//
// Authoring rules, the same ones the checks and drills follow:
//   - distractors are wrong by case, gender, agreement, word order or register —
//     never by being Serbian, and never real Croatian that a native would say;
//   - no cue in the form of its answer (a parenthetical names the MEANING or the
//     dictionary form, not the answer);
//   - a hint points at the rule and never contains the answer;
//   - the greeting is bog (owner decision, 2026-07).
// Scanned by lintCroatianText.mjs through the assembled LESSONS, both checks.

export const PRACTICE_A1 = {
  alphabet: {
    worked: [
      {
        title: 'Reading a New Word',
        problem: 'Pročitaj naglas: čokolada',
        en: 'Read it aloud: chocolate',
        steps: [
          {
            label: 'Split it',
            text: 'Break it into syllables: čo-ko-la-da. Every letter is sounded — nothing is silent.',
          },
          {
            label: 'The special letter',
            text: 'č is the hard, rounded "ch" of English "church", with the tongue pulled back.',
          },
          {
            label: 'The vowels',
            text: 'Every vowel is short and clear: o as in "not", a as in "father". They never change with the word around them.',
          },
        ],
        answer: 'čo-ko-la-da',
      },
      {
        title: 'Č or Ć?',
        problem: 'ku_a — č ili ć?',
        en: 'house — which letter?',
        steps: [
          {
            label: 'Say it slowly',
            text: 'The sound in the middle is soft and light, close to the "t" in a quickly said "tube".',
          },
          {
            label: 'Match the sound',
            text: 'The soft sound is ć. The hard, rounded "ch" of "church" is č.',
          },
          { label: 'Write it', text: 'The word for house has the soft sound, so it takes ć.' },
        ],
        answer: 'kuća',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koliko slova ima hrvatska abeceda?',
          options: ['30', '26', '32', '28'],
          correct: 0,
          hint: 'More than English: three sounds are written with two letters that count as one letter.',
          explanation:
            'Thirty, because lj, nj and dž are single letters — and q, w, x, y are not used.',
        },
        {
          q: 'Kako se piše "chocolate"?',
          options: ['čokolada', 'ćokolada', 'cokolada', 'šokolada'],
          correct: 0,
          hint: 'It is the hard, rounded "ch" of "church".',
          explanation: 'čokolada — č is the hard "ch"; ć is the softer one you hear in kuća.',
        },
        {
          q: 'Koje slovo zvuči kao "sh" u "ship"?',
          options: ['s', 'š', 'ž', 'č'],
          correct: 1,
          hint: 'It wears a small hat, and it is NOT the sound in "pleasure".',
          explanation: 'š = "sh" (šuma, forest). ž is the sound in "pleasure" (žena, woman).',
        },
        {
          q: 'U riječi "prst" (finger) koji glas nosi slog?',
          options: ['p', 'r', 's', 't'],
          correct: 1,
          hint: 'Croatian lets one consonant act as a vowel when it stands between two others.',
          explanation: 'The r carries the syllable: prst, trg, vrt have no written vowel at all.',
        },
      ],
    },
  },

  'greetings-farewells': {
    worked: [
      {
        title: 'Which Greeting?',
        problem: 'Ulaziš u pekaru u devet ujutro. Što kažeš?',
        en: 'You walk into a bakery at nine in the morning. What do you say?',
        steps: [
          {
            label: 'Who is it?',
            text: 'A shop assistant you do not know — a stranger, so the greeting is formal.',
          },
          {
            label: 'What time is it?',
            text: 'Morning. Until about ten, Croatians say dobro jutro; after that, dobar dan.',
          },
          {
            label: 'Rule out the casual one',
            text: 'Bog is for friends and family. To a stranger in a shop it sounds too familiar.',
          },
        ],
        answer: 'Dobro jutro!',
      },
      {
        title: 'Answer and Ask Back',
        problem: 'Prijatelj te pita: "Kako si?" Odgovori i pitaj njega.',
        en: 'A friend asks "How are you?" Answer, then ask back.',
        steps: [
          {
            label: 'Informal or formal?',
            text: 'A friend: ti. So the question back is kako si, not kako ste.',
          },
          {
            label: 'Answer briefly',
            text: 'Dobro sam, hvala — "I am well, thanks". Sam comes second, after dobro.',
          },
          {
            label: 'Turn it round',
            text: 'A ti? — "And you?" The a links your answer to the question back.',
          },
        ],
        answer: 'Dobro sam, hvala. A ti?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Navečer ulaziš u restoran. Pozdravi konobara.',
          options: ['Dobra večer!', 'Bog!', 'Dobro jutro!', 'Laku noć!'],
          correct: 0,
          hint: 'It is evening, and the waiter is a stranger. One greeting fits both.',
          explanation: 'Dobra večer. Laku noć is only for going to bed, or leaving late at night.',
        },
        {
          q: 'Kako pitaš profesora kako je?',
          options: ['Kako si?', 'Kako ste?', 'Što ima?', 'Kako ide?'],
          correct: 1,
          hint: 'A teacher gets the polite Vi-form, and the verb goes into the plural with it.',
          explanation: 'Kako ste? — the polite Vi, even when you are speaking to one person.',
        },
        {
          q: 'Odlaziš s posla i pozdravljaš kolegu kojeg ne poznaješ dobro.',
          options: ['Laku noć!', 'Doviđenja!', 'Dobro jutro!', 'Bog, stari!'],
          correct: 1,
          hint: 'You are leaving, not arriving — and you do not know him well.',
          explanation: 'Doviđenja is the neutral goodbye. Bog is for people you are close to.',
        },
        {
          q: 'Predstavi se: "My name is Ana."',
          options: ['Ja zovem Ana.', 'Zovem se Ana.', 'Se zovem Ana.', 'Zovem Ana se.'],
          correct: 1,
          hint: '"To be called" carries se, and se can never open a sentence.',
          explanation: 'Zovem se Ana. Se sits in second position, straight after the verb here.',
        },
      ],
    },
  },

  'pronouns-biti': {
    worked: [
      {
        title: 'Choosing the Form of Biti',
        problem: 'Dopuni: Ja ___ iz Hrvatske.',
        en: 'Fill in: I am from Croatia.',
        steps: [
          { label: 'Who is the subject?', text: 'ja — "I", the first person singular.' },
          {
            label: 'Find the form',
            text: 'Biti in the present, short form, first person singular, is sam.',
          },
          {
            label: 'Place it',
            text: 'Sam is a clitic: it goes second in the sentence, straight after ja.',
          },
        ],
        answer: 'Ja sam iz Hrvatske.',
      },
      {
        title: 'Dropping the Pronoun',
        problem: 'Reci bez zamjenice: Mi smo studenti.',
        en: 'Say it without the pronoun: We are students.',
        steps: [
          {
            label: 'The ending already says who',
            text: 'smo can only mean "we are", so mi adds nothing.',
          },
          {
            label: 'Drop it',
            text: 'Croatian usually leaves the pronoun out unless it is stressed.',
          },
          {
            label: 'Fix the word order',
            text: 'Smo cannot open a sentence, so the noun moves in front of it.',
          },
        ],
        answer: 'Studenti smo.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ti ___ moj prijatelj.',
          options: ['sam', 'si', 'je', 'ste'],
          correct: 1,
          hint: 'The subject is ti — you, one person, informal.',
          explanation: 'ti si — "you are".',
        },
        {
          q: 'Oni ___ u Zagrebu.',
          options: ['su', 'smo', 'je', 'ste'],
          correct: 0,
          hint: 'Oni means "they": third person plural.',
          explanation: 'oni su — "they are".',
        },
        {
          q: 'Which is correct for "I am a teacher"?',
          options: ['Sam učitelj.', 'Učitelj sam.', 'Ja je učitelj.', 'Ja učitelj.'],
          correct: 1,
          hint: 'Without ja, the short form of biti needs a word in front of it.',
          explanation: 'Učitelj sam. Ja sam učitelj is also right; sam alone can never be first.',
        },
        {
          q: 'Mi ___ umorni.',
          options: ['smo', 'su', 'ste', 'sam'],
          correct: 0,
          hint: 'Mi means "we".',
          explanation: 'mi smo — "we are".',
        },
      ],
    },
  },

  gender: {
    worked: [
      {
        title: 'Reading Gender From the Ending',
        problem: 'Kojeg je roda "more" (sea)?',
        en: 'What gender is "more"?',
        steps: [
          { label: 'Look at the last letter', text: 'more ends in -e.' },
          { label: 'Apply the rule', text: 'Nouns ending in -o or -e are almost always neuter.' },
          { label: 'Check with "this"', text: 'Neuter nouns take ovo: ovo more.' },
        ],
        answer: 'Srednji rod: ovo more.',
      },
      {
        title: 'When the Ending Lies',
        problem: 'Kojeg je roda "tata" (dad)?',
        en: 'What gender is "tata"?',
        steps: [
          { label: 'The ending says…', text: '-a usually means feminine.' },
          {
            label: 'But the meaning says…',
            text: 'tata names a man. Natural gender beats the ending.',
          },
          { label: 'Check with "my"', text: 'So the words around it are masculine: moj tata.' },
        ],
        answer: 'Muški rod: moj tata.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kojeg je roda "knjiga"?',
          options: ['muški', 'ženski', 'srednji', 'nema roda'],
          correct: 1,
          hint: 'Look at the ending, then check that it does not name a man.',
          explanation: 'knjiga ends in -a and is a thing: feminine (ova knjiga).',
        },
        {
          q: 'Kojeg je roda "stol"?',
          options: ['ženski', 'srednji', 'muški', 'nema roda'],
          correct: 2,
          hint: 'It ends in a consonant.',
          explanation: 'Nouns ending in a consonant are masculine: ovaj stol.',
        },
        {
          q: 'Kojeg je roda "selo" (village)?',
          options: ['srednji', 'ženski', 'muški', 'nema roda'],
          correct: 0,
          hint: 'What does a final -o usually mean?',
          explanation: '-o and -e are the neuter endings: ovo selo.',
        },
        {
          q: 'Kojeg je roda "noć" (night)?',
          options: ['muški', 'ženski', 'srednji', 'nema roda'],
          correct: 1,
          hint: 'One of the endings that lie: a consonant, but this noun is not masculine.',
          explanation:
            'noć is a feminine noun of the small i-group: ova noć. Learn these with ova.',
        },
      ],
    },
  },

  'plural-nouns': {
    worked: [
      {
        title: 'A Feminine Plural',
        problem: 'Stavi u množinu: knjiga',
        en: 'Make it plural: book',
        steps: [
          { label: 'Gender first', text: 'knjiga ends in -a, so it is feminine.' },
          { label: 'The feminine plural', text: 'Feminine -a becomes -e.' },
          { label: 'Apply it', text: 'Take off the -a and add -e.' },
        ],
        answer: 'knjige',
      },
      {
        title: 'A Short Masculine Noun',
        problem: 'Stavi u množinu: grad',
        en: 'Make it plural: city',
        steps: [
          { label: 'Gender first', text: 'grad ends in a consonant: masculine.' },
          { label: 'The masculine plural', text: 'Masculine nouns add -i.' },
          {
            label: 'Is it short?',
            text: 'grad has one syllable, so it grows -ov- before the ending.',
          },
        ],
        answer: 'gradovi',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Množina od "sestra":',
          options: ['sestri', 'sestre', 'sestra', 'sestrovi'],
          correct: 1,
          hint: 'Feminine -a changes to one other vowel in the plural.',
          explanation: 'sestra → sestre.',
        },
        {
          q: 'Množina od "selo":',
          options: ['sela', 'sele', 'seli', 'selovi'],
          correct: 0,
          hint: 'Neuter -o changes to the vowel feminine nouns END with in the singular.',
          explanation: 'selo → sela.',
        },
        {
          q: 'Množina od "čovjek" (person):',
          options: ['čovjeki', 'čovjeci', 'ljudi', 'čovjekovi'],
          correct: 2,
          hint: 'One of the five plurals you simply have to learn — it is a different word.',
          explanation: 'čovjek → ljudi.',
        },
        {
          q: 'Množina od "student":',
          options: ['studente', 'studenti', 'studenta', 'studentovi'],
          correct: 1,
          hint: 'Masculine, and more than one syllable long.',
          explanation: 'student → studenti. Only short masculine nouns grow -ov-.',
        },
      ],
    },
  },

  'basic-questions': {
    worked: [
      {
        title: 'A Yes/No Question',
        problem: 'Pitaj: Govoriš hrvatski?',
        en: 'Ask: Do you speak Croatian?',
        steps: [
          { label: 'Start from the statement', text: 'Govoriš hrvatski — "you speak Croatian".' },
          { label: 'Verb first', text: 'Put the verb at the front of the sentence.' },
          { label: 'Add li', text: 'li goes straight after the verb it questions.' },
        ],
        answer: 'Govoriš li hrvatski?',
      },
      {
        title: 'A Question Word',
        problem: 'Pitaj gdje je banka.',
        en: 'Ask where the bank is.',
        steps: [
          { label: 'Question word first', text: 'Where (a place, not a direction) is gdje.' },
          { label: 'Then the verb', text: 'is → je.' },
          { label: 'Then the thing', text: 'banka comes last.' },
        ],
        answer: 'Gdje je banka?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"Where do you live?"',
          options: ['Gdje živiš?', 'Kamo živiš?', 'Kada živiš?', 'Tko živiš?'],
          correct: 0,
          hint: 'You are asking about a place someone IS, not a place they are going to.',
          explanation: 'gdje = where (position); kamo = where to (direction).',
        },
        {
          q: '"How much does it cost?"',
          options: ['Kako košta?', 'Što košta?', 'Koliko košta?', 'Kada košta?'],
          correct: 2,
          hint: 'The question word for amounts and prices.',
          explanation: 'koliko = how much, how many.',
        },
        {
          q: '"Is she at home?"',
          options: [
            'Li je ona kod kuće?',
            'Je li ona kod kuće?',
            'Je ona li kod kuće?',
            'Ona je li kod kuće?',
          ],
          correct: 1,
          hint: 'li sits straight after the verb, and a question with biti opens with that verb.',
          explanation: 'Je li ona kod kuće? — je li is the standard way to open it.',
        },
        {
          q: '"Who is that?"',
          options: ['Što je to?', 'Koji je to?', 'Kako je to?', 'Tko je to?'],
          correct: 3,
          hint: 'You are asking about a person, not a thing.',
          explanation: 'tko = who; što = what.',
        },
      ],
    },
  },

  'present-tense-verbs': {
    worked: [
      {
        title: 'An -ati Verb',
        problem: 'čitati → ja ___',
        en: 'to read → I read',
        steps: [
          { label: 'Find the pattern', text: 'čitati ends in -ati.' },
          { label: 'Find the stem', text: 'Remove -ti: čita-.' },
          { label: 'Add the ending', text: 'The ending for ja is -m.' },
        ],
        answer: 'ja čitam',
      },
      {
        title: 'An -iti Verb',
        problem: 'govoriti → mi ___',
        en: 'to speak → we speak',
        steps: [
          { label: 'Find the pattern', text: 'govoriti ends in -iti, and those verbs keep the i.' },
          { label: 'Find the stem', text: 'Remove -ti: govori-.' },
          { label: 'Add the ending', text: 'The ending for mi is -mo.' },
        ],
        answer: 'mi govorimo',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ti ___ u bolnici. (raditi, to work)',
          options: ['radiš', 'radim', 'radi', 'radite'],
          correct: 0,
          hint: 'ti takes the ending -š.',
          explanation: 'raditi → ti radiš.',
        },
        {
          q: 'Oni ___ pisma. (pisati, to write)',
          options: ['pisaju', 'pišu', 'piše', 'pišemo'],
          correct: 1,
          hint: 'pisati is one of the -ati verbs whose s turns into š in the present.',
          explanation: 'pisati → pišem, pišeš … oni pišu.',
        },
        {
          q: 'Ona ___ more. (voljeti, to love)',
          options: ['voli', 'volim', 'voliš', 'vole'],
          correct: 0,
          hint: 'ona is one person, third person: nothing is added after the stem vowel.',
          explanation: 'voljeti → ona voli.',
        },
        {
          q: 'Vi ___ hrvatski. (učiti, to learn)',
          options: ['učimo', 'uče', 'učite', 'uči'],
          correct: 2,
          hint: 'vi takes the ending -te.',
          explanation: 'učiti → vi učite.',
        },
      ],
    },
  },

  negation: {
    worked: [
      {
        title: 'Negating Biti',
        problem: 'Niječno: Ja sam umoran.',
        en: 'Make it negative: I am tired.',
        steps: [
          { label: 'Find the verb', text: 'sam — biti, "to be".' },
          { label: 'Biti fuses with ne', text: 'ne + sam is written as one word.' },
          {
            label: 'Drop ja',
            text: 'The fused form already says "I am not", so it can open the sentence.',
          },
        ],
        answer: 'Nisam umoran.',
      },
      {
        title: 'Two Negatives',
        problem: 'Niječno: Netko zna.',
        en: 'Make it negative: Someone knows → Nobody knows.',
        steps: [
          { label: 'Negate the pronoun', text: 'netko (someone) → nitko (nobody).' },
          { label: 'Negate the verb too', text: 'Croatian also puts ne in front of the verb.' },
          { label: 'Both stay', text: 'Two negatives are required, not a mistake.' },
        ],
        answer: 'Nitko ne zna.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"I do not have time."',
          options: ['Ne imam vremena.', 'Nemam vremena.', 'Nemam vrijeme.', 'Imam ne vremena.'],
          correct: 1,
          hint: 'imati fuses with ne, and what you lack goes into the genitive.',
          explanation: 'Nemam vremena — one fused word, and vremena in the genitive.',
        },
        {
          q: '"I will not go."',
          options: ['Neću ići.', 'Ne ću ići.', 'Ne hoću ići.', 'Nećem ići.'],
          correct: 0,
          hint: 'htjeti fuses with ne into one written word.',
          explanation: 'neću — written as one word in standard Croatian.',
        },
        {
          q: '"Nobody is here."',
          options: ['Nitko je ovdje.', 'Nitko nije ovdje.', 'Netko nije ovdje.', 'Nitko ne ovdje.'],
          correct: 1,
          hint: 'Croatian needs two negatives: one on the pronoun, one on the verb.',
          explanation: 'Nitko nije ovdje.',
        },
        {
          q: '"I do not see anything."',
          options: ['Vidim ništa.', 'Ne vidim nešto.', 'Ništa vidim.', 'Ne vidim ništa.'],
          correct: 3,
          hint: 'A negative pronoun AND ne in front of the verb.',
          explanation: 'Ne vidim ništa (or Ništa ne vidim).',
        },
      ],
    },
  },

  'adjectives-basic': {
    worked: [
      {
        title: 'Agreeing With a Feminine Noun',
        problem: 'Dopuni: ___ kuća (lijep, beautiful)',
        en: 'a beautiful house',
        steps: [
          { label: 'Find the noun’s gender', text: 'kuća ends in -a: feminine.' },
          {
            label: 'The feminine ending',
            text: 'Adjectives describing a feminine noun end in -a.',
          },
          { label: 'Apply it', text: 'Add -a to the dictionary form.' },
        ],
        answer: 'lijepa kuća',
      },
      {
        title: 'The Fleeting A',
        problem: 'Dopuni: Voda je ___. (dobar, good)',
        en: 'The water is good.',
        steps: [
          {
            label: 'Find the noun’s gender',
            text: 'voda ends in -a: feminine, so the adjective ends in -a.',
          },
          {
            label: 'Watch the stem',
            text: 'dobar has an a that only appears when nothing follows it.',
          },
          {
            label: 'Add the ending',
            text: 'Once an ending is added, that a drops out: dobr- + a.',
          },
        ],
        answer: 'Voda je dobra.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ selo (star, old)',
          options: ['staro', 'stara', 'star', 'stari'],
          correct: 0,
          hint: 'selo is neuter.',
          explanation: 'Neuter adjectives end in -o: staro selo.',
        },
        {
          q: '___ žena (mlad, young)',
          options: ['mlad', 'mlada', 'mlado', 'mladi'],
          correct: 1,
          hint: 'žena is feminine.',
          explanation: 'mlada žena.',
        },
        {
          q: '___ gradovi (velik, big)',
          options: ['velika', 'veliki', 'veliko', 'velike'],
          correct: 1,
          hint: 'Masculine plural adjectives end like masculine plural nouns.',
          explanation: 'veliki gradovi — both end in -i.',
        },
        {
          q: 'Moja sestra je ___. (dobar, good)',
          options: ['dobar', 'dobro', 'dobri', 'dobra'],
          correct: 3,
          hint: 'sestra is feminine, and the a in the middle of dobar drops out when an ending is added.',
          explanation: 'dobra — dobar loses its a: dobr- + a.',
        },
      ],
    },
  },

  possessives: {
    worked: [
      {
        title: 'Agreeing With the Thing Owned',
        problem: 'Dopuni: ___ majka (my)',
        en: 'my mother',
        steps: [
          {
            label: 'The rule',
            text: 'A possessive agrees with the thing OWNED, not with the owner.',
          },
          { label: 'The thing owned', text: 'majka is feminine.' },
          { label: 'Apply it', text: 'moj takes the feminine ending -a.' },
        ],
        answer: 'moja majka',
      },
      {
        title: 'Her Car',
        problem: 'Dopuni: ___ auto (her)',
        en: 'her car',
        steps: [
          { label: 'The owner picks the word', text: '"her" is njezin.' },
          {
            label: 'The thing owned picks the ending',
            text: 'auto is masculine in Croatian, despite the -o.',
          },
          { label: 'Apply it', text: 'Masculine keeps the dictionary form.' },
        ],
        answer: 'njezin auto',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ kuća (our)',
          options: ['naš', 'naša', 'naše', 'naši'],
          correct: 1,
          hint: 'Agree with kuća.',
          explanation: 'naša kuća — feminine, because kuća is.',
        },
        {
          q: '___ sestra (his)',
          options: ['njegov', 'njezina', 'njegova', 'njegovo'],
          correct: 2,
          hint: '"His" gives you the word; sestra gives you the ending.',
          explanation: 'njegova sestra — owner male, ending feminine.',
        },
        {
          q: '___ selo (your, informal)',
          options: ['tvoje', 'tvoj', 'tvoja', 'tvoji'],
          correct: 0,
          hint: 'selo is neuter.',
          explanation: 'tvoje selo.',
        },
        {
          q: 'Čija je ovo knjiga? — "Mine."',
          options: ['Moj.', 'Moja.', 'Moje.', 'Moji.'],
          correct: 1,
          hint: 'The answer still agrees with the book.',
          explanation: 'Moja — knjiga is feminine, so the answer is too.',
        },
      ],
    },
  },

  demonstratives: {
    worked: [
      {
        title: 'Choosing "This"',
        problem: 'Dopuni: ___ knjiga je moja. (this)',
        en: 'This book is mine.',
        steps: [
          {
            label: 'Three distances',
            text: 'ovaj = this, near me; taj = that, near you; onaj = that over there.',
          },
          {
            label: 'They agree like adjectives',
            text: 'knjiga is feminine, so the word needs the feminine form.',
          },
          { label: 'Apply it', text: 'ovaj → ova.' },
        ],
        answer: 'Ova knjiga je moja.',
      },
      {
        title: 'Pointing, Not Describing',
        problem: '"That is my brother."',
        en: 'That is my brother.',
        steps: [
          {
            label: 'What is the sentence doing?',
            text: 'Pointing at someone and saying what he IS.',
          },
          {
            label: 'The workhorse',
            text: 'For that, Croatian uses the neuter to (or ovo), whatever the noun’s gender.',
          },
          {
            label: 'Build it',
            text: 'To je … and then the noun with its own agreement: moj brat.',
          },
        ],
        answer: 'To je moj brat.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ kuća (that one, over there)',
          options: ['ona', 'onaj', 'ono', 'ova'],
          correct: 0,
          hint: 'Far from both of us — and kuća is feminine.',
          explanation: 'onaj → ona kuća.',
        },
        {
          q: '___ je lijepo! (pointing: this is beautiful)',
          options: ['Ovaj', 'Ova', 'Ovo', 'Ovi'],
          correct: 2,
          hint: 'Pointing at something to comment on it uses the neuter form.',
          explanation: 'Ovo je lijepo — the neuter form is the pointing word.',
        },
        {
          q: 'Tko je ___ čovjek? (that man, near you)',
          options: ['taj', 'ta', 'to', 'ti'],
          correct: 0,
          hint: 'Near the person you are talking to — and čovjek is masculine.',
          explanation: 'taj čovjek.',
        },
        {
          q: 'Which place word goes with onaj?',
          options: ['ovdje', 'tu', 'ondje', 'ovamo'],
          correct: 2,
          hint: 'Match the distance: the one furthest from both of you.',
          explanation: 'ondje (over there) goes with onaj; ovdje with ovaj; tu with taj.',
        },
      ],
    },
  },

  'family-people': {
    worked: [
      {
        title: 'Which Uncle?',
        problem: 'Tvoj otac ima brata. Kako ga zoveš?',
        en: 'Your father has a brother. What do you call him?',
        steps: [
          {
            label: 'Which side?',
            text: 'Croatian names the side of the family: your father’s or your mother’s.',
          },
          { label: 'Father’s side', text: 'Your father’s brother is stric.' },
          { label: 'Mother’s side', text: 'Your mother’s brother would be ujak.' },
        ],
        answer: 'stric',
      },
      {
        title: 'Where Your Family Is From',
        problem: 'Odgovori: Odakle je tvoja obitelj? (from Dalmatia)',
        en: 'Where is your family from? — From Dalmatia.',
        steps: [
          { label: 'From a place', text: 'iz + the genitive.' },
          { label: 'The noun', text: 'Dalmacija is feminine: the genitive changes -a to -e.' },
          { label: 'Build it', text: 'Moja obitelj je iz … and the genitive.' },
        ],
        answer: 'Moja obitelj je iz Dalmacije.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Majčin brat je moj ___.',
          options: ['stric', 'ujak', 'djed', 'brat'],
          correct: 1,
          hint: 'The mother’s side has its own word.',
          explanation: 'ujak = mother’s brother; stric = father’s brother.',
        },
        {
          q: 'Množina od "dijete" (child):',
          options: ['dijeti', 'djeca', 'dijeta', 'djetovi'],
          correct: 1,
          hint: 'One of the plurals that changes the whole word.',
          explanation: 'dijete → djeca, and it takes a plural verb: djeca se igraju.',
        },
        {
          q: 'Kći moje sestre je moja ___.',
          options: ['nećakinja', 'sestrična', 'unuka', 'teta'],
          correct: 0,
          hint: 'Your sibling’s daughter.',
          explanation: 'nećakinja = niece; sestrična = cousin; unuka = granddaughter.',
        },
        {
          q: '"My parents"',
          options: ['moj roditelji', 'moji roditelji', 'moje roditelji', 'moja roditelji'],
          correct: 1,
          hint: 'roditelji is masculine plural, and "my" agrees with it.',
          explanation: 'moji roditelji — -i on both.',
        },
      ],
    },
  },

  'countries-languages': {
    worked: [
      {
        title: 'Where You Are From',
        problem: '"I am from Canada."',
        en: 'I am from Canada.',
        steps: [
          { label: 'From a country', text: 'iz + the genitive.' },
          { label: 'The noun', text: 'Kanada is feminine: the genitive changes -a to -e.' },
          { label: 'Build it', text: 'Ja sam iz … — sam second, as always.' },
        ],
        answer: 'Ja sam iz Kanade.',
      },
      {
        title: 'Where You Live',
        problem: '"I live in Canada."',
        en: 'I live in Canada.',
        steps: [
          { label: 'Where you are', text: 'u + the locative.' },
          { label: 'The noun', text: 'Kanada is feminine: the locative ending is -i.' },
          { label: 'Build it', text: 'Živim — "I live" — then u and the locative.' },
        ],
        answer: 'Živim u Kanadi.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Ona je ___. (a Croatian woman)',
          options: ['Hrvat', 'Hrvatica', 'hrvatski', 'Hrvatska'],
          correct: 1,
          hint: 'A woman and a nationality — not the language, and not the country.',
          explanation:
            'Hrvat (man), Hrvatica (woman), hrvatski (the language), Hrvatska (the country).',
        },
        {
          q: 'Govorim ___ i engleski. (Croatian)',
          options: ['Hrvatski', 'hrvatski', 'Hrvat', 'Hrvatska'],
          correct: 1,
          hint: 'Languages are written with a small letter.',
          explanation: 'hrvatski — lower case, like engleski.',
        },
        {
          q: 'Dolazim iz ___. (Italy)',
          options: ['Italija', 'Italiju', 'Italije', 'Italiji'],
          correct: 2,
          hint: 'iz takes the genitive; feminine -a changes to -e.',
          explanation: 'iz Italije.',
        },
        {
          q: 'Moja baka živi u ___. (Split)',
          options: ['Split', 'Splita', 'Splitu', 'Splitom'],
          correct: 2,
          hint: 'Where she lives: u + the locative, and a masculine noun takes -u.',
          explanation: 'u Splitu.',
        },
      ],
    },
  },

  'numbers-time': {
    worked: [
      {
        title: 'Saying Your Age',
        problem: 'Koliko ti je godina? — 25',
        en: 'How old are you? — 25.',
        steps: [
          { label: 'Age is something you have', text: 'The verb is imati: imam.' },
          { label: 'Build the number', text: 'dvadeset + pet.' },
          {
            label: 'The noun after five',
            text: 'From five up, the noun goes into the genitive plural: godina.',
          },
        ],
        answer: 'Imam dvadeset pet godina.',
      },
      {
        title: 'Telling the Time',
        problem: 'Koliko je sati? — 3:00',
        en: 'What time is it? — Three o’clock.',
        steps: [
          { label: 'The three shapes', text: 'jedan sat; dva, tri, četiri sata; pet and up sati.' },
          { label: 'Pick the shape', text: 'Three belongs to the 2–4 group: sata.' },
          { label: 'The verb', text: 'With 2–4 the verb is plural: su.' },
        ],
        answer: 'Tri su sata.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koliko je sati? — 5:00',
          options: ['Pet je sat.', 'Pet je sati.', 'Pet su sata.', 'Pet sata je.'],
          correct: 1,
          hint: 'From five upwards the noun is genitive plural, and the verb stays singular.',
          explanation: 'Pet je sati.',
        },
        {
          q: 'Koliko je sati? — 1:00',
          options: ['Jedan je sat.', 'Jedan je sati.', 'Jedan su sata.', 'Jedna je sat.'],
          correct: 0,
          hint: 'One takes the plain dictionary form of the noun.',
          explanation: 'Jedan je sat.',
        },
        {
          q: '"I am thirty years old."',
          options: [
            'Imam trideset godina.',
            'Sam trideset godina.',
            'Imam trideset godine.',
            'Ja je trideset godina.',
          ],
          correct: 0,
          hint: 'Age is had, not been; and thirty takes the genitive plural.',
          explanation: 'Imam trideset godina.',
        },
        {
          q: 'Broj 14:',
          options: ['četiri deset', 'četrnaest', 'četrdeset', 'četiri'],
          correct: 1,
          hint: 'The teens end in -naest.',
          explanation: 'četrnaest = 14; četrdeset = 40.',
        },
      ],
    },
  },

  'time-calendar': {
    worked: [
      {
        title: 'On a Day',
        problem: '"On Monday I work."',
        en: 'On Monday I work.',
        steps: [
          { label: 'On a day', text: 'u + the accusative.' },
          {
            label: 'The noun',
            text: 'ponedjeljak is a masculine thing, so its accusative looks like the dictionary form.',
          },
          { label: 'Build it', text: 'U ponedjeljak, then the verb: radim.' },
        ],
        answer: 'U ponedjeljak radim.',
      },
      {
        title: 'In a Season',
        problem: '"In summer we go to the sea."',
        en: 'In summer we go to the sea.',
        steps: [
          {
            label: 'Two seasons have their own word',
            text: 'ljeti (in summer) and zimi (in winter) need no preposition.',
          },
          { label: 'Going to the sea', text: 'Motion towards: na more (accusative).' },
          { label: 'Build it', text: 'Ljeti, then idemo, then na more.' },
        ],
        answer: 'Ljeti idemo na more.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"on Friday"',
          options: ['u petak', 'na petak', 'u petku', 'petak'],
          correct: 0,
          hint: 'u + the accusative, and the name of the day does not change.',
          explanation: 'u petak.',
        },
        {
          q: '"in winter"',
          options: ['u zima', 'zimi', 'na zimu', 'zimom'],
          correct: 1,
          hint: 'Two seasons have a one-word form of their own.',
          explanation: 'zimi and ljeti; but u proljeće and u jesen.',
        },
        {
          q: '"in May"',
          options: ['u svibnju', 'u svibanj', 'na svibanj', 'svibnjem'],
          correct: 0,
          hint: 'Months take u + the locative.',
          explanation: 'u svibnju — svibanj → svibnju.',
        },
        {
          q: '"tomorrow"',
          options: ['jučer', 'danas', 'sutra', 'prekjučer'],
          correct: 2,
          hint: 'The day after today.',
          explanation: 'sutra = tomorrow; jučer = yesterday; danas = today.',
        },
      ],
    },
  },

  cases: {
    worked: [
      {
        title: 'Why "Anu"?',
        problem: 'Zašto "Vidim Anu", a ne "Vidim Ana"?',
        en: 'Why "Vidim Anu" and not "Vidim Ana"?',
        steps: [
          {
            label: 'Who is doing it?',
            text: 'I am — the verb vidim says so. That is the subject.',
          },
          { label: 'What is Ana?', text: 'The one being seen — like "him" in English, not "he".' },
          { label: 'The object case', text: 'That is the accusative, and feminine -a becomes -u.' },
        ],
        answer: 'Vidim Anu.',
      },
      {
        title: 'Why "Zagrebu"?',
        problem: 'Zašto "Živim u Zagrebu", a ne "Živim u Zagreb"?',
        en: 'Why "u Zagrebu" and not "u Zagreb"?',
        steps: [
          { label: 'Being or going?', text: 'Živim says where you ARE, not where you are going.' },
          { label: 'The case for position', text: 'u + the locative.' },
          {
            label: 'The ending',
            text: 'Zagreb is masculine: the locative adds -u. (Going there would be u Zagreb.)',
          },
        ],
        answer: 'Živim u Zagrebu.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which case answers "Tko? Što?" — the subject?',
          options: ['nominativ', 'genitiv', 'akuzativ', 'lokativ'],
          correct: 0,
          hint: 'The case of the dictionary form.',
          explanation: 'nominativ — the subject of the sentence.',
        },
        {
          q: 'Idem u ___. (going to school)',
          options: ['škola', 'školi', 'školu', 'škole'],
          correct: 2,
          hint: 'Motion towards a place: u + the accusative.',
          explanation: 'Idem u školu. Being there is u školi.',
        },
        {
          q: 'Kava bez ___. (without milk)',
          options: ['mlijeko', 'mlijeka', 'mlijeku', 'mlijekom'],
          correct: 1,
          hint: 'bez always takes the genitive.',
          explanation: 'bez mlijeka.',
        },
        {
          q: 'In "Dajem knjigu bratu", which word is in the dative?',
          options: ['Dajem', 'knjigu', 'bratu', 'none of them'],
          correct: 2,
          hint: 'The dative answers "to whom?".',
          explanation: 'bratu — to my brother. knjigu is the accusative: what is given.',
        },
      ],
    },
  },

  'accusative-intro': {
    worked: [
      {
        title: 'A Feminine Object',
        problem: 'Dopuni: Pijem ___. (coffee)',
        en: 'I drink coffee.',
        steps: [
          { label: 'Find the object', text: 'What does the verb act on? The coffee: kava.' },
          { label: 'The case', text: 'The object takes the accusative.' },
          { label: 'The ending', text: 'Feminine -a becomes -u.' },
        ],
        answer: 'Pijem kavu.',
      },
      {
        title: 'Is It Alive?',
        problem: 'Dopuni: Vidim ___. (my brother)',
        en: 'I see my brother.',
        steps: [
          { label: 'Find the object', text: 'brat — the one being seen.' },
          { label: 'Masculine: ask the question', text: 'Is it alive? Yes.' },
          { label: 'The ending', text: 'A living masculine noun adds -a in the accusative.' },
        ],
        answer: 'Vidim brata.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Vidim ___. (the table)',
          options: ['stola', 'stol', 'stolu', 'stolom'],
          correct: 1,
          hint: 'Masculine, and not alive.',
          explanation: 'A masculine THING keeps its dictionary form in the accusative: stol.',
        },
        {
          q: 'Čitam ___. (a book)',
          options: ['knjigu', 'knjiga', 'knjige', 'knjizi'],
          correct: 0,
          hint: 'A feminine object: the -a changes.',
          explanation: 'knjigu.',
        },
        {
          q: 'Zovem ___. (my friend Marko)',
          options: ['Marko', 'Marku', 'Markom', 'Marka'],
          correct: 3,
          hint: 'Masculine, and alive.',
          explanation: 'Marka — a living masculine noun takes -a.',
        },
        {
          q: 'Idem u ___. (to the city)',
          options: ['gradu', 'grad', 'grada', 'gradom'],
          correct: 1,
          hint: 'Motion towards a place is the accusative too.',
          explanation: 'u grad (going there); u gradu (being there).',
        },
      ],
    },
  },

  'imati-nemati': {
    worked: [
      {
        title: 'What You Have',
        problem: '"I have a sister."',
        en: 'I have a sister.',
        steps: [
          { label: 'What you have is an object', text: 'So it goes into the accusative.' },
          { label: 'The ending', text: 'sestra is feminine: -a becomes -u.' },
          { label: 'Build it', text: 'Imam, then the accusative.' },
        ],
        answer: 'Imam sestru.',
      },
      {
        title: 'What You Lack',
        problem: '"I do not have any money."',
        en: 'I do not have any money.',
        steps: [
          { label: 'The negative fuses', text: 'ne + imam = nemam.' },
          {
            label: 'The case changes',
            text: 'What you LACK goes into the genitive, not the accusative.',
          },
          {
            label: 'The ending',
            text: 'novac → novca: masculine genitive -a, and the a in the middle drops out.',
          },
        ],
        answer: 'Nemam novca.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"There is no milk."',
          options: ['Nema mlijeka.', 'Nema mlijeko.', 'Nije mlijeka.', 'Ne ima mlijeka.'],
          correct: 0,
          hint: '"There is no" is one fused word, followed by the genitive.',
          explanation: 'Nema mlijeka.',
        },
        {
          q: '"She is twenty years old."',
          options: [
            'Ona je dvadeset godina.',
            'Ona ima dvadeset godina.',
            'Ona ima dvadeset godine.',
            'Ona imaju dvadeset godina.',
          ],
          correct: 1,
          hint: 'Age is had; twenty takes the genitive plural.',
          explanation: 'Ona ima dvadeset godina.',
        },
        {
          q: '"We have a dog."',
          options: ['Imamo pas.', 'Imamo psa.', 'Imamo psu.', 'Imam psa.'],
          correct: 1,
          hint: 'A living masculine object — and mi takes -mo.',
          explanation: 'Imamo psa — pas → psa, the a drops out.',
        },
        {
          q: '"I do not have time."',
          options: ['Nemam vrijeme.', 'Imam ne vremena.', 'Nemam vremena.', 'Ne imam vremena.'],
          correct: 2,
          hint: 'The fused negative, then the genitive.',
          explanation: 'Nemam vremena.',
        },
      ],
    },
  },

  'locative-intro': {
    worked: [
      {
        title: 'A Masculine Place',
        problem: '"I live in Zagreb."',
        en: 'I live in Zagreb.',
        steps: [
          { label: 'Where you are', text: 'u + the locative.' },
          { label: 'The ending', text: 'Zagreb is masculine: add -u.' },
          { label: 'Build it', text: 'Živim u …' },
        ],
        answer: 'Živim u Zagrebu.',
      },
      {
        title: 'A Feminine Place',
        problem: '"She is at school."',
        en: 'She is at school.',
        steps: [
          { label: 'Where she is', text: 'u + the locative.' },
          { label: 'The ending', text: 'škola is feminine: -a becomes -i.' },
          { label: 'Build it', text: 'Ona je u …' },
        ],
        answer: 'Ona je u školi.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Radim u ___. (in a hospital)',
          options: ['bolnica', 'bolnicu', 'bolnici', 'bolnice'],
          correct: 2,
          hint: 'Where you work is where you ARE — and the noun is feminine.',
          explanation: 'u bolnici.',
        },
        {
          q: 'Ljeti smo na ___. (at the sea)',
          options: ['moru', 'more', 'mora', 'morem'],
          correct: 0,
          hint: 'Being somewhere; neuter takes the same locative ending as masculine.',
          explanation: 'na moru.',
        },
        {
          q: 'Kamo ideš? — ___ (into town)',
          options: ['U gradu.', 'U grad.', 'U grada.', 'U gradom.'],
          correct: 1,
          hint: 'Kamo asks "where to?" — motion.',
          explanation: 'Kamo? → u grad (accusative). Gdje? → u gradu (locative).',
        },
        {
          q: 'Pričamo o ___. (about the film)',
          options: ['film', 'filma', 'filmu', 'filmom'],
          correct: 2,
          hint: 'o = "about", and it takes the locative.',
          explanation: 'o filmu.',
        },
      ],
    },
  },

  'prepositions-place': {
    worked: [
      {
        title: 'In Front Of',
        problem: '"The car is in front of the house."',
        en: 'The car is in front of the house.',
        steps: [
          { label: 'The preposition', text: 'in front of = ispred.' },
          { label: 'Its case', text: 'ispred always takes the genitive.' },
          { label: 'The ending', text: 'kuća → kuće.' },
        ],
        answer: 'Auto je ispred kuće.',
      },
      {
        title: 'At Someone’s Place',
        problem: '"I am at my grandma’s."',
        en: 'I am at my grandma’s.',
        steps: [
          { label: 'The preposition', text: 'At someone’s place = kod.' },
          { label: 'Its case', text: 'kod takes the genitive.' },
          { label: 'The ending', text: 'baka → bake.' },
        ],
        answer: 'Ja sam kod bake.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Mačka je ispod ___. (under the table)',
          options: ['stol', 'stola', 'stolu', 'stolom'],
          correct: 1,
          hint: 'ispod takes the genitive.',
          explanation: 'ispod stola.',
        },
        {
          q: 'Knjiga je na ___. (on the table)',
          options: ['stol', 'stola', 'stolu', 'stolom'],
          correct: 2,
          hint: 'Resting on a surface: na + the locative.',
          explanation: 'na stolu.',
        },
        {
          q: 'Idem ___ mamom. (with)',
          options: ['s', 'sa', 'od', 'kod'],
          correct: 0,
          hint: 'With someone takes the instrumental; the longer form is only for words starting s, š, z or ž.',
          explanation: 's mamom (but sa sestrom).',
        },
        {
          q: 'Banka je između pošte i ___. (the school)',
          options: ['škola', 'školu', 'škole', 'školi'],
          correct: 2,
          hint: 'između takes the genitive — for both things.',
          explanation: 'između pošte i škole.',
        },
      ],
    },
  },

  'genitive-intro': {
    worked: [
      {
        title: 'Belonging Without an Apostrophe',
        problem: '"my sister’s car"',
        en: 'my sister’s car',
        steps: [
          { label: 'Word order', text: 'Croatian puts the thing first and the owner after it.' },
          { label: 'The owner’s case', text: 'The owner goes into the genitive.' },
          {
            label: 'The endings',
            text: 'moja sestra → moje sestre: feminine -a becomes -e on both words.',
          },
        ],
        answer: 'auto moje sestre',
      },
      {
        title: 'A Quantity Of Something',
        problem: '"a glass of water"',
        en: 'a glass of water',
        steps: [
          { label: 'The quantity word', text: 'čaša — a glass.' },
          { label: 'What it holds', text: 'The substance goes into the genitive.' },
          { label: 'The ending', text: 'voda is feminine: -a becomes -e.' },
        ],
        answer: 'čaša vode',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'šalica ___ (a cup of coffee)',
          options: ['kava', 'kavu', 'kave', 'kavi'],
          correct: 2,
          hint: 'After a quantity word, the genitive — and feminine -a changes to -e.',
          explanation: 'šalica kave.',
        },
        {
          q: 'kuća mog ___ (my brother’s house)',
          options: ['brat', 'brata', 'bratu', 'bratom'],
          correct: 1,
          hint: 'The owner goes into the genitive; masculine adds -a.',
          explanation: 'kuća mog brata.',
        },
        {
          q: 'Nema ___. (There is no bread.)',
          options: ['kruha', 'kruh', 'kruhu', 'kruhom'],
          correct: 0,
          hint: 'Absence takes the genitive.',
          explanation: 'Nema kruha.',
        },
        {
          q: 'puno ___ (a lot of people)',
          options: ['čovjek', 'ljudi', 'ljude', 'ljudima'],
          correct: 1,
          hint: 'The plural of čovjek, in the genitive — which looks just like its nominative plural.',
          explanation: 'puno ljudi.',
        },
      ],
    },
  },

  'vocative-intro': {
    worked: [
      {
        title: 'Calling a Man by Name',
        problem: 'Pozovi Ivana: "___, dođi!"',
        en: 'Call Ivan: "Ivan, come here!"',
        steps: [
          { label: 'Calling someone', text: 'Addressing a person uses the vocative.' },
          { label: 'The ending', text: 'Masculine names ending in a consonant add -e.' },
          { label: 'Apply it', text: 'Ivan → Ivane.' },
        ],
        answer: 'Ivane, dođi!',
      },
      {
        title: 'Addressing a Stranger',
        problem: '"Excuse me, sir…"',
        en: 'Excuse me, sir…',
        steps: [
          { label: 'Polite attention', text: 'Oprostite — the polite form.' },
          { label: 'The word for sir', text: 'gospodin, in the vocative.' },
          { label: 'The ending', text: 'Masculine -e: gospodine.' },
        ],
        answer: 'Oprostite, gospodine…',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Zoveš prijatelja Marka: "___, gdje si?"',
          options: ['Marko', 'Marka', 'Marku', 'Markom'],
          correct: 0,
          hint: 'Names ending in -o usually stay as they are when you call them.',
          explanation: 'Marko, gdje si?',
        },
        {
          q: 'Dobar dan, ___! (to Mrs Horvat: gospođa)',
          options: ['gospođa', 'gospođo', 'gospođu', 'gospođe'],
          correct: 1,
          hint: 'Feminine -a changes when you address someone.',
          explanation: 'gospođo — -a becomes -o.',
        },
        {
          q: 'Hvala, ___! (to your friend Petar)',
          options: ['Petar', 'Petre', 'Petra', 'Petru'],
          correct: 1,
          hint: 'Masculine adds -e, and the a in front of the r drops out.',
          explanation: 'Petar → Petre.',
        },
        {
          q: '___, gdje su ključevi? (calling your dad: tata)',
          options: ['tata', 'tato', 'tatu', 'tate'],
          correct: 1,
          hint: 'A noun in -a still takes the -a → -o change, even when it names a man.',
          explanation: 'Tato, gdje su ključevi?',
        },
      ],
    },
  },

  'modals-basic': {
    worked: [
      {
        title: 'Modal + Infinitive',
        problem: '"I want to sleep."',
        en: 'I want to sleep.',
        steps: [
          { label: 'The modal', text: 'To want, as a plain wish: želim.' },
          {
            label: 'The second verb',
            text: 'After a modal, the verb stays in its dictionary form.',
          },
          { label: 'Build it', text: 'želim + spavati.' },
        ],
        answer: 'Želim spavati.',
      },
      {
        title: 'A Learned Skill',
        problem: '"Can you swim?" (do you know how)',
        en: 'Can you swim?',
        steps: [
          { label: 'Skill or ability right now?', text: 'Swimming is learned: znati, not moći.' },
          { label: 'The form', text: 'ti → znaš.' },
          { label: 'Make it a question', text: 'Verb first, li after it, then the infinitive.' },
        ],
        answer: 'Znaš li plivati?',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Moram ___. (to work)',
          options: ['radim', 'raditi', 'rade', 'radio'],
          correct: 1,
          hint: 'After a modal, the second verb stays in its dictionary form.',
          explanation: 'Moram raditi.',
        },
        {
          q: '___ li mi pomoći? (can you — politely)',
          options: ['Možeš', 'Možete', 'Moguće', 'Mogu'],
          correct: 1,
          hint: 'The polite Vi-form of moći.',
          explanation: 'Možete li mi pomoći?',
        },
        {
          q: '"I need to go."',
          options: ['Trebam ići.', 'Treba ići ja.', 'Trebam idem.', 'Treba mi idem.'],
          correct: 0,
          hint: 'A modal, then the dictionary form of the second verb.',
          explanation: 'Trebam ići (or Treba mi ići, or Moram ići).',
        },
        {
          q: 'Ona ___ svirati gitaru. (knows how to)',
          options: ['može', 'mora', 'želi', 'zna'],
          correct: 3,
          hint: 'A learned skill — not permission, and not being able to right now.',
          explanation: 'zna svirati is a skill; može svirati is being able to right now.',
        },
      ],
    },
  },

  'imperative-basic': {
    worked: [
      {
        title: 'An Informal Command',
        problem: 'Reci prijatelju: "Read this!" (čitati)',
        en: 'Tell a friend: Read this!',
        steps: [
          { label: 'Start from the oni form', text: 'čitati → oni čitaju.' },
          { label: 'Verbs in -aju', text: 'Take -aju off and add -j.' },
          {
            label: 'One friend, informal',
            text: 'The short form is enough; čitajte would be polite or plural.',
          },
        ],
        answer: 'Čitaj ovo!',
      },
      {
        title: 'Telling Someone Not To',
        problem: 'Reci prijatelju: "Don’t wait!" (čekati)',
        en: 'Tell a friend: Don’t wait!',
        steps: [
          { label: 'The negative command', text: 'Use nemoj for one person you say ti to.' },
          { label: 'Then the verb', text: 'nemoj is followed by the dictionary form.' },
          { label: 'Build it', text: 'nemoj + čekati.' },
        ],
        answer: 'Nemoj čekati!',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___, molim. (please sit down — to a guest: sjesti)',
          options: ['Sjedni', 'Sjednite', 'Sjedi', 'Sjesti'],
          correct: 1,
          hint: 'The polite form ends in -ite.',
          explanation: 'Sjednite, molim.',
        },
        {
          q: '"Wait!" — to a friend (čekati)',
          options: ['Čekaj!', 'Čekajte!', 'Čekati!', 'Čeka!'],
          correct: 0,
          hint: 'One friend: the short informal form.',
          explanation: 'Čekaj! (Čekajte to several people, or politely.)',
        },
        {
          q: '"Don’t go!" — to a friend',
          options: ['Nemoj ideš!', 'Nemoj ići!', 'Nemoj idi!', 'Nemoj idem!'],
          correct: 1,
          hint: 'nemoj, then the dictionary form of the verb.',
          explanation: 'Nemoj ići!',
        },
        {
          q: '"Excuse me" — to a stranger',
          options: ['Oprosti', 'Oprostite', 'Oprostiti', 'Oprostio'],
          correct: 1,
          hint: 'A stranger gets the polite -ite form.',
          explanation: 'Oprostite.',
        },
      ],
    },
  },

  'reflexive-verbs': {
    worked: [
      {
        title: 'Where Se Goes',
        problem: '"I wash in the morning." (prati se)',
        en: 'I wash in the morning.',
        steps: [
          { label: 'The verb carries se', text: 'prati se → ja se perem.' },
          { label: 'Se is a clitic', text: 'It takes second position in the sentence.' },
          { label: 'Build it', text: 'Ujutro first, se second, then the verb.' },
        ],
        answer: 'Ujutro se perem.',
      },
      {
        title: 'Se Meaning "One"',
        problem: '"English is spoken here."',
        en: 'English is spoken here.',
        steps: [
          { label: 'No person doing it', text: 'Impersonal se means "one" or "people".' },
          { label: 'The verb', text: 'Third person singular: govori.' },
          { label: 'Build it', text: 'Ovdje, then se in second position, then the verb.' },
        ],
        answer: 'Ovdje se govori engleski.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Kako ___ zoveš?',
          options: ['se', 'si', 'ti', 'te'],
          correct: 0,
          hint: 'zvati se carries the reflexive particle, and it never changes with the person.',
          explanation: 'Kako se zoveš? — se is the same for everyone.',
        },
        {
          q: '"We are meeting tomorrow." (naći se)',
          options: [
            'Se sutra nalazimo.',
            'Sutra nalazimo sebe.',
            'Sutra se nalazimo.',
            'Sutra nalazimo se.',
          ],
          correct: 2,
          hint: 'se goes second — straight after the first word.',
          explanation: 'Sutra se nalazimo.',
        },
        {
          q: 'Ja se ___ ujutro. (tuširati se, to shower)',
          options: ['tuširam', 'tušira', 'tuširaš', 'tuširamo'],
          correct: 0,
          hint: 'Conjugate the verb for ja; se never changes.',
          explanation: 'Ja se tuširam.',
        },
        {
          q: 'Na znaku piše: "Ovdje se ___." (no smoking here)',
          options: ['ne pušim', 'nepuši', 'ne pušiti', 'ne puši'],
          correct: 3,
          hint: 'Impersonal se takes the third person singular, and ne stays a separate word.',
          explanation: 'Ovdje se ne puši.',
        },
      ],
    },
  },

  'likes-preferences': {
    worked: [
      {
        title: 'Liking With Sviđati Se',
        problem: '"I like Zagreb." (sviđati se)',
        en: 'I like Zagreb.',
        steps: [
          { label: 'Flip it', text: 'The thing liked is the subject: Zagreb "appeals".' },
          { label: 'The person who likes', text: 'goes into the dative: to me → mi.' },
          { label: 'Agreement', text: 'The verb agrees with Zagreb — singular: sviđa.' },
        ],
        answer: 'Sviđa mi se Zagreb.',
      },
      {
        title: 'Liking Several Things',
        problem: '"I like the islands." (sviđati se)',
        en: 'I like the islands.',
        steps: [
          { label: 'The subject', text: 'otoci — the islands, plural.' },
          { label: 'The verb follows it', text: 'Plural subject, plural verb: sviđaju.' },
          {
            label: 'Build it',
            text: 'The verb, then mi and se in second position, then the subject.',
          },
        ],
        answer: 'Sviđaju mi se otoci.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Volim ___. (coffee)',
          options: ['kava', 'kavu', 'kave', 'kavi'],
          correct: 1,
          hint: 'voljeti takes a direct object: the accusative.',
          explanation: 'Volim kavu.',
        },
        {
          q: '___ mi se ovaj grad.',
          options: ['Sviđam', 'Sviđa', 'Sviđaju', 'Sviđaš'],
          correct: 1,
          hint: 'The verb agrees with the thing liked — and there is one of it.',
          explanation: 'Sviđa mi se ovaj grad.',
        },
        {
          q: 'Sviđaju ___ se planine. (she likes)',
          options: ['mi', 'joj', 'mu', 'im'],
          correct: 1,
          hint: 'The person who likes is in the dative: to her.',
          explanation: 'Sviđaju joj se planine.',
        },
        {
          q: '"I prefer the sea to the mountains."',
          options: [
            'Više volim more nego planine.',
            'Više volim more nego planinama.',
            'Više volim moru nego planine.',
            'Više volim mora nego planine.',
          ],
          correct: 0,
          hint: 'Both things are objects of volim, so both stay in the accusative.',
          explanation: 'Više volim more nego planine.',
        },
      ],
    },
  },

  'food-drink': {
    worked: [
      {
        title: 'Ordering Politely',
        problem: 'Naruči (muškarac): "I would like a coffee with milk."',
        en: 'Order (as a man): I would like a coffee with milk.',
        steps: [
          {
            label: 'The polite request',
            text: 'htio bih (a man) or htjela bih (a woman) — never a blunt hoću.',
          },
          { label: 'What you order', text: 'It is an object: kava → kavu.' },
          { label: 'With milk', text: 's + the instrumental: s mlijekom.' },
        ],
        answer: 'Htio bih kavu s mlijekom.',
      },
      {
        title: 'Two Of Something',
        problem: '"Two beers, please."',
        en: 'Two beers, please.',
        steps: [
          { label: 'The noun', text: 'pivo is neuter.' },
          { label: 'After two, three, four', text: 'A neuter noun ends in -a.' },
          { label: 'Build it', text: 'Dva, then the noun, then molim.' },
        ],
        answer: 'Dva piva, molim.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '___ čaj, molim. (a woman ordering)',
          options: ['Htio bih', 'Htjela bih', 'Hoću', 'Htjela sam'],
          correct: 1,
          hint: 'The polite form — and the speaker is a woman.',
          explanation: 'Htjela bih čaj, molim.',
        },
        {
          q: 'Jedem ___. (soup)',
          options: ['juha', 'juhu', 'juhe', 'juhi'],
          correct: 1,
          hint: 'What you eat is an object.',
          explanation: 'Jedem juhu.',
        },
        {
          q: 'komad ___ (a piece of cake: torta)',
          options: ['torta', 'tortu', 'torte', 'torti'],
          correct: 2,
          hint: 'A quantity word, so the genitive.',
          explanation: 'komad torte.',
        },
        {
          q: 'Račun, ___! (asking for the bill)',
          options: ['hvala', 'izvolite', 'oprostite', 'molim'],
          correct: 3,
          hint: 'The word for "please" when you ask for something.',
          explanation: 'Račun, molim! Izvolite is what the waiter says as he hands it over.',
        },
      ],
    },
  },

  'shopping-prices': {
    worked: [
      {
        title: 'Two To Four',
        problem: '"three apples"',
        en: 'three apples',
        steps: [
          { label: 'Which group?', text: 'Three belongs to the 2–4 group.' },
          { label: 'The ending', text: 'After 2–4, a feminine noun ends in -e.' },
          { label: 'Apply it', text: 'jabuka → jabuke.' },
        ],
        answer: 'tri jabuke',
      },
      {
        title: 'Five And Up',
        problem: '"five apples"',
        en: 'five apples',
        steps: [
          { label: 'Which group?', text: 'Five and up take the genitive plural.' },
          {
            label: 'The feminine genitive plural',
            text: 'For jabuka it is -a, the same as its dictionary form.',
          },
          { label: 'Apply it', text: 'pet + jabuka.' },
        ],
        answer: 'pet jabuka',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Koliko ___ ovo? (does this cost)',
          options: ['košta', 'koštaju', 'košta li', 'koštam'],
          correct: 0,
          hint: '"This" is one thing: third person singular.',
          explanation: 'Koliko košta ovo?',
        },
        {
          q: 'dvije ___ (bottles: boca)',
          options: ['boca', 'boce', 'bocu', 'bocama'],
          correct: 1,
          hint: 'After dvije (the 2–4 group), a feminine noun ends in -e.',
          explanation: 'dvije boce.',
        },
        {
          q: 'deset ___ (euros)',
          options: ['euro', 'eura', 'euri', 'eurom'],
          correct: 1,
          hint: 'Five and up: the genitive plural.',
          explanation: 'deset eura.',
        },
        {
          q: '"Can I pay by card?"',
          options: [
            'Mogu li platiti kartica?',
            'Mogu platiti li karticom?',
            'Mogu li platiti karticom?',
            'Mogu li plaćam karticom?',
          ],
          correct: 2,
          hint: 'li straight after the modal; the thing you pay WITH goes into the instrumental.',
          explanation: 'Mogu li platiti karticom?',
        },
      ],
    },
  },

  'directions-town': {
    worked: [
      {
        title: 'Asking the Way',
        problem: '"Excuse me, where is the station?"',
        en: 'Excuse me, where is the station?',
        steps: [
          { label: 'Get attention politely', text: 'Oprostite.' },
          { label: 'Ask where', text: 'Gdje je …' },
          { label: 'The place', text: 'the (railway) station: kolodvor.' },
        ],
        answer: 'Oprostite, gdje je kolodvor?',
      },
      {
        title: 'How You Travel',
        problem: '"I am going by tram."',
        en: 'I am going by tram.',
        steps: [
          { label: 'Means of transport', text: 'The instrumental, with no preposition.' },
          { label: 'The ending', text: 'tramvaj ends in a soft consonant, so it takes -em.' },
          { label: 'Build it', text: 'Idem + tramvajem.' },
        ],
        answer: 'Idem tramvajem.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"Turn left." (to a stranger)',
          options: ['Skrenite lijevo.', 'Skreni lijevo.', 'Skrenuti lijevo.', 'Skrenite lijevi.'],
          correct: 0,
          hint: 'The polite imperative — and the direction word never changes.',
          explanation: 'Skrenite lijevo.',
        },
        {
          q: 'Idem ___. (by bus)',
          options: ['autobus', 'autobusom', 'autobusu', 'autobusem'],
          correct: 1,
          hint: 'Means of transport: the instrumental, and after a hard consonant it is -om.',
          explanation: 'Idem autobusom.',
        },
        {
          q: '"straight ahead"',
          options: ['desno', 'lijevo', 'ravno', 'natrag'],
          correct: 2,
          hint: 'Neither left nor right, and not back.',
          explanation: 'ravno = straight on; desno = right; lijevo = left.',
        },
        {
          q: '"on foot"',
          options: ['na noge', 'pješice', 'nogama', 'pješak'],
          correct: 1,
          hint: 'A single word, an adverb.',
          explanation: 'pješice (or pješke). pješak is a pedestrian.',
        },
      ],
    },
  },

  'weather-seasons': {
    worked: [
      {
        title: 'A Sentence With No Subject',
        problem: '"It is cold."',
        en: 'It is cold.',
        steps: [
          {
            label: 'No subject',
            text: 'Weather sentences have nothing doing the being — no "it".',
          },
          { label: 'The adjective', text: 'With no subject, it takes the neuter form: hladno.' },
          { label: 'The verb', text: 'je, in second position.' },
        ],
        answer: 'Hladno je.',
      },
      {
        title: 'Rain Falls',
        problem: '"It is raining."',
        en: 'It is raining.',
        steps: [
          { label: 'Croatian says it differently', text: 'Rain falls: padati.' },
          { label: 'The subject', text: 'kiša is the subject, so the verb agrees with it.' },
          { label: 'Build it', text: 'pada + kiša.' },
        ],
        answer: 'Pada kiša.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: '"It is warm today."',
          options: ['Danas je toplo.', 'Danas je topao.', 'Danas je topla.', 'Danas toplo je.'],
          correct: 0,
          hint: 'No subject, so the adjective takes the neuter form — and je goes second.',
          explanation: 'Danas je toplo.',
        },
        {
          q: '"It is snowing."',
          options: ['Pada snijegu.', 'Pada snijeg.', 'Pada snijeg je.', 'Padaju snijeg.'],
          correct: 1,
          hint: 'Snow falls, just like rain.',
          explanation: 'Pada snijeg (or: Sniježi).',
        },
        {
          q: 'Kakvo je ___ danas? (the weather)',
          options: ['vrijeme', 'vremena', 'vremenu', 'vremenom'],
          correct: 0,
          hint: 'It is the subject of the question.',
          explanation: 'Kakvo je vrijeme danas?',
        },
        {
          q: '"It is windy."',
          options: ['Vjetrovit je.', 'Vjetar je.', 'Vjetrovita je.', 'Vjetrovito je.'],
          correct: 3,
          hint: 'No subject: the neuter form, like hladno and toplo.',
          explanation: 'Vjetrovito je (or: Puše vjetar).',
        },
      ],
    },
  },
};
