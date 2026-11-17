// ─── B1 lessons in class order — Units 1–2 (lessons 1–10) ────────────────────
// Same shape and rules as the A1 and A2 class files (a1class/, a2class/):
//   text — the dialogue or text the learner hears, then reads, and its questions.
//   mix  — the practice items, in order. A NUMBER is the index of an item the
//          lesson already has in its practice data; an OBJECT is a new exercise.
//
// Only what A1, A2, the B1 lessons before each lesson, and the lesson itself have
// taught. No relative clauses with koji, no reported-speech machinery, no real
// conditions beyond the A2 "ako". Futur II appears only from future-ii on.
// Vi / Vas / Vam / Vaš take a capital whenever ONE person is addressed politely;
// the plural vi for several people is written small. Typed answers ignore capitals.
// In every mix a form is PRODUCED before any later item prints it.

export const CLASS_B1_U01_02 = {
  // ══ UNIT 1 ═════════════════════════════════════════════════════════════════

  // ── Comparison of adjectives ───────────────────────────────────────────────
  'comparatives-a2': {
    text: {
      kind: 'dialogue',
      title: 'Dva stana',
      lines: [
        {
          who: 'Ivana',
          hr: 'Pogledali smo dva stana. Prvi je veći, ali je i skuplji od drugoga.',
          en: 'We looked at two apartments. The first one is bigger, but it is also more expensive than the second.',
        },
        {
          who: 'Tomislav',
          hr: 'A drugi? Je li barem ljepši?',
          en: 'And the second one? Is it at least nicer?',
        },
        {
          who: 'Ivana',
          hr: 'Jest. Noviji je i svjetliji, ali kuhinja je manja nego u prvom stanu.',
          en: 'It is. It is newer and brighter, but the kitchen is smaller than in the first apartment.',
        },
        {
          who: 'Tomislav',
          hr: 'Meni je važnije nešto drugo: koji je stan bliži tvom poslu?',
          en: 'Something else matters more to me: which apartment is closer to your work?',
        },
        {
          who: 'Ivana',
          hr: 'Drugi. I ulica je tiša, a susjedi su stari i mirni — nema zabava do jutra!',
          en: 'The second. The street is quieter too, and the neighbors are old and calm — no parties till morning!',
        },
        {
          who: 'Tomislav',
          hr: 'Onda je drugi stan bolji izbor. Manji je, ali je mirniji.',
          en: 'Then the second apartment is the better choice. It is smaller, but it is calmer.',
        },
        {
          who: 'Ivana',
          hr: 'I jeftiniji! A jeftiniji stan znači dulji godišnji odmor.',
          en: 'And cheaper! And a cheaper apartment means a longer vacation.',
        },
        {
          who: 'Tomislav',
          hr: 'To je najbolja vijest danas! Nazovimo vlasnika.',
          en: 'That is the best news today! Let’s call the owner.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which apartment do they choose, and what speaks for it?',
          options: [
            'The first: it is bigger and has a bigger kitchen',
            'The first: it is cheaper and closer to work',
            'The second: it is bigger, newer and brighter',
            'The second: it is closer to work, quieter and cheaper',
          ],
          correct: 3,
          hint: 'Think of what Tomislav says matters most to him, and of Ivana’s joke about the vacation.',
          explanation:
            'They choose the second apartment. It is smaller, but closer to Ivana’s work, on a quieter street, and cheaper — which means a longer vacation.',
        },
        {
          q: 'Ivana says "skuplji od drugoga", but "manja nego u prvom stanu". Why does she switch to nego the second time?',
          options: [
            'Because kuhinja is a feminine noun',
            'Because what follows is a phrase with a preposition, and od can only take a noun or pronoun in the genitive',
            'Because nego is used for small things and od for big ones',
            'Because nego is the polite word and od the informal one',
          ],
          correct: 1,
          hint: 'Look at what comes right after each "than": one word in the genitive, or a whole phrase beginning with u?',
          explanation:
            'od needs a noun or pronoun in the genitive right after it: od drugoga. Before a phrase such as "u prvom stanu" only nego works.',
        },
        {
          type: 'type',
          q: 'Now you. Ivana’s car is old, and Tomislav’s is even older: Tomislavov auto je još ____. (star)',
          answer: 'stariji',
          hint: 'A regular comparative: add the common three-letter ending to the stem.',
          explanation: 'star → stariji, with the regular -iji. "još stariji" means "even older".',
        },
        {
          type: 'transform',
          q: 'Say the same thing with nego instead of od.',
          from: 'Ivana je mlađa od Tomislava.',
          answer: 'Ivana je mlađa nego Tomislav.',
          hint: 'After nego the second person stands in the same case as the first one — the subject.',
          explanation:
            'Ivana je mlađa nego Tomislav. — od takes the genitive (od Tomislava); nego keeps the case of the first term, here the nominative.',
        },
        {
          type: 'transform',
          q: 'Turn the comparison around: start with "Drugi stan".',
          from: 'Prvi stan je veći od drugoga.',
          answer: 'Drugi stan je manji od prvoga.',
          accept: [
            'Drugi stan je manji od prvog.',
            'Drugi stan je manji nego prvi.',
            'Drugi je stan manji nego prvi.',
            'Drugi je stan manji od prvoga.',
            'Drugi je stan manji od prvog.',
          ],
          hint: 'You need the comparative of the opposite adjective — an irregular one, learned as a whole word.',
          explanation:
            'Drugi stan je manji od prvoga. — the opposite of veći is manji (from malen), and od again takes the genitive.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'match',
        q: 'Match each comparative to its meaning.',
        pairs: [
          ['gori', 'worse'],
          ['dulji', 'longer'],
          ['uži', 'narrower'],
          ['kraći', 'shorter'],
          ['jači', 'stronger'],
        ],
        explanation:
          'gori comes from loš or zao, dulji from dug, uži from uzak, kraći from kratak and jači from jak. Short adjectives often change their last consonant in the comparative.',
      },
      4,
      {
        type: 'sort',
        q: 'Which "than" fits the gap?',
        groups: ['Needs "od"', 'Needs "nego"'],
        items: [
          { hr: 'Split je manji ___ Zagreba.', group: 0 },
          { hr: 'Danas je toplije ___ jučer.', group: 1 },
          { hr: 'Ana je starija ___ brata.', group: 0 },
          { hr: 'Kruh je ovdje skuplji ___ u Osijeku.', group: 1 },
          { hr: 'Bolje je hodati ___ čekati.', group: 1 },
          { hr: 'Vlak je brži ___ autobusa.', group: 0 },
        ],
        explanation:
          'od is followed by a noun in the genitive: od Zagreba, od brata, od autobusa. Before a time word, a phrase with a preposition or an infinitive, only nego works.',
      },
      6,
      2,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ova', 'kava', 'je', 'dobrija', 'od', 'one.'],
        wrong: 3,
        answer: 'bolja',
        hint: 'The comparative of dobar is irregular — and here it agrees with kava.',
        explanation:
          'Ova kava je bolja od one. — dobar has no regular comparative; it is bolji, feminine bolja.',
      },
      7,
      9,
      {
        type: 'tf',
        q: 'In "Marko je stariji nego ja" you can replace nego with od and leave every other word as it is.',
        answer: false,
        hint: 'Which case does od take?',
        explanation:
          'False. od takes the genitive, so the pronoun has to change as well: Marko je stariji od mene.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "My brother is two years older than me."',
        words: ['Moj', 'brat', 'je', 'dvije', 'godine', 'stariji', 'od', 'mene.'],
        accept: [
          'Moj je brat dvije godine stariji od mene.',
          'Moj brat je stariji od mene dvije godine.',
          'Moj je brat stariji od mene dvije godine.',
        ],
        explanation:
          'Moj brat je dvije godine stariji od mene. The difference (dvije godine) usually stands right before the comparative.',
      },
      8,
      11,
      {
        type: 'transform',
        q: 'Turn the comparison around: start with "Autobus".',
        from: 'Vlak je brži od autobusa.',
        answer: 'Autobus je sporiji od vlaka.',
        accept: ['Autobus je sporiji nego vlak.'],
        hint: 'Use the comparative of the opposite adjective — a regular one — and put the train into the case that od takes.',
        explanation:
          'Autobus je sporiji od vlaka. — the opposite of brz is spor, with the regular comparative in -iji; vlak goes into the genitive after od.',
      },
      {
        type: 'listen',
        audio: 'Moja sestra je tri godine mlađa od mene, ali je viša.',
        q: 'What do we learn about the sister?',
        options: [
          'She is three years older than the speaker',
          'She is younger than the speaker, and shorter',
          'She is younger than the speaker, but taller',
          'She is older than the speaker, and taller',
        ],
        correct: 2,
        explanation:
          'tri godine mlađa od mene — three years younger than me; ali je viša — but she is taller.',
      },
      {
        type: 'dictate',
        audio: 'Ovaj grad je ljepši nego moj.',
        answer: 'Ovaj grad je ljepši nego moj.',
        hint: 'Six words: "This town is more beautiful than mine."',
        explanation:
          'Ovaj grad je ljepši nego moj. — lijep → ljepši, and nego keeps moj in the nominative.',
      },
    ],
  },

  // ── Irregular comparatives, superlatives, and their cases ──────────────────
  'superlatives-irregular': {
    text: {
      kind: 'text',
      title: 'E-mail s Visa',
      lines: [
        {
          hr: 'Draga Petra, javljam ti se s Visa. Mislim da je ovo najljepši otok na Jadranu!',
          en: 'Dear Petra, I am writing to you from Vis. I think this is the most beautiful island in the Adriatic!',
        },
        {
          hr: 'Ove godine smo u manjem apartmanu nego prošle godine, ali je bliži moru.',
          en: 'This year we are in a smaller apartment than last year, but it is closer to the sea.',
        },
        {
          hr: 'Naša plaža je manja od gradske, ali je more ovdje čišće i toplije.',
          en: 'Our beach is smaller than the town beach, but the sea here is cleaner and warmer.',
        },
        {
          hr: 'Jučer smo se popeli na Hum, najviši vrh otoka.',
          en: 'Yesterday we climbed Hum, the highest peak on the island.',
        },
        {
          hr: 'Put je bio duži i teži nego na karti, a moj mlađi brat se cijelo vrijeme žalio.',
          en: 'The trail was longer and harder than on the map, and my younger brother complained the whole time.',
        },
        {
          hr: 'Navečer smo večerali u najstarijoj konobi u gradu. Nikad nisam jela bolju ribu!',
          en: 'In the evening we had dinner in the oldest tavern in town. I have never eaten better fish!',
        },
        {
          hr: 'Najgora vijest: sutra se vraćamo kući.',
          en: 'The worst news: tomorrow we are going back home.',
        },
        {
          hr: 'Sljedeće godine dolazimo na dulji odmor — i ti ideš s nama! Pozdrav, Marta',
          en: 'Next year we are coming for a longer vacation — and you are coming with us! Best, Marta',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the e-mail: how is this year’s apartment different from last year’s?',
          options: [
            'It is bigger, but farther from the sea',
            'It is smaller, but closer to the sea',
            'It is smaller and farther from the sea',
            'It is bigger and closer to the town',
          ],
          correct: 1,
          hint: 'Marta mentions one disadvantage and one advantage, joined by "ali".',
          explanation:
            'u manjem apartmanu nego prošle godine, ali je bliži moru — a smaller apartment, but closer to the sea.',
        },
        {
          q: 'Marta writes "u manjem apartmanu" and "u najstarijoj konobi". Why do the comparative and the superlative have these endings?',
          options: [
            'Comparatives never change, so these are two different words',
            'They are adverbs here, and adverbs end in -em or -oj',
            'They are ordinary adjectives: after u for a place they take the locative, -em for a masculine noun and -oj for a feminine one',
            'After u every adjective takes the genitive',
          ],
          correct: 2,
          hint: 'Ask "where?" — and look at the gender of apartman and of konoba.',
          explanation:
            'A comparative or superlative agrees with its noun in gender, number and case. Location after u is the locative: u manjem apartmanu (masculine), u najstarijoj konobi (feminine).',
        },
        {
          type: 'type',
          q: 'Now you. Marta has one brother, and he was born after her: Marta ima ____ brata. (mlad)',
          answer: 'mlađeg',
          accept: ['mlađega'],
          hint: 'imati takes the accusative, and a brother is a living being — so the masculine ending is not the same as the nominative.',
          explanation:
            'Marta ima mlađeg brata. — mlad → mlađi; the animate masculine accusative takes the soft ending -eg.',
        },
        {
          type: 'type',
          q: 'Marta is sure of it: Vis ima ____ more na Jadranu. (čist — the cleanest)',
          answer: 'najčišće',
          hint: 'Start from the comparative of čist, in the form that agrees with the neuter more, and put the superlative prefix in front.',
          explanation:
            'Vis ima najčišće more na Jadranu. — čist → čišći → najčišći; neuter najčišće, agreeing with more.',
        },
        {
          type: 'transform',
          q: 'Say where they had dinner. Start with "Večerali smo u…".',
          from: 'To je najbolji restoran u gradu.',
          answer: 'Večerali smo u najboljem restoranu u gradu.',
          hint: 'After u for a place both the superlative and the noun go into the locative.',
          explanation:
            'Večerali smo u najboljem restoranu u gradu. — the superlative declines like any adjective, with the soft ending -em.',
        },
      ],
    },
    mix: [
      6,
      {
        type: 'match',
        q: 'Match each comparative to its opposite.',
        pairs: [
          ['teži', 'lakši'],
          ['deblji', 'tanji'],
          ['skuplji', 'jeftiniji'],
          ['mlađi', 'stariji'],
          ['bolji', 'gori'],
        ],
        explanation:
          'teži ↔ lakši (harder ↔ easier), deblji ↔ tanji (thicker ↔ thinner), skuplji ↔ jeftiniji (more expensive ↔ cheaper), mlađi ↔ stariji (younger ↔ older), bolji ↔ gori (better ↔ worse).',
      },
      11,
      2,
      {
        type: 'sort',
        q: 'What is the comparative doing in the sentence?',
        groups: [
          'Says what something is',
          'Says where (after u)',
          'The thing someone buys or looks for',
        ],
        items: [
          { hr: 'Živimo u većem stanu.', group: 1 },
          { hr: 'Kupila je skuplju haljinu.', group: 2 },
          { hr: 'Ovo je kraći put.', group: 0 },
          { hr: 'Radi u boljoj školi.', group: 1 },
          { hr: 'Tražim jeftiniji hotel.', group: 2 },
          { hr: 'Njezin brat je viši.', group: 0 },
        ],
        explanation:
          'After je the comparative is in the nominative (kraći, viši); after u for a place in the locative (većem, boljoj); as the object in the accusative (skuplju, jeftiniji).',
      },
      9,
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Stanujemo', 'u', 'najbolji', 'hotelu', 'u', 'gradu.'],
        wrong: 2,
        answer: 'najboljem',
        hint: 'After u for a place the superlative needs the same case as hotelu.',
        explanation:
          'Stanujemo u najboljem hotelu u gradu. — a superlative declines: masculine locative, soft ending -em.',
      },
      8,
      {
        type: 'tf',
        q: '"Sava je dulja od Drave" and "Sava je duža od Drave" are both correct standard Croatian.',
        answer: true,
        hint: 'The adjective dug has two comparatives.',
        explanation:
          'True. dug → dulji or duži; both are standard, and you will hear and read both.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "I have never seen a bigger dog."',
        words: ['Nikad', 'nisam', 'vidio', 'većeg', 'psa.'],
        accept: [
          'Većeg psa nikad nisam vidio.',
          'Nikad većeg psa nisam vidio.',
          'Nisam nikad vidio većeg psa.',
          'Nikad nisam većeg psa vidio.',
          'Većeg psa nisam nikad vidio.',
        ],
        explanation:
          'Nikad nisam vidio većeg psa. A dog is a living being, so the masculine accusative of veći is većeg.',
      },
      10,
      4,
      {
        type: 'transform',
        q: 'Join the two sentences into one. Start with "Marko ima…".',
        from: 'Marko ima sestru. Ona je starija.',
        answer: 'Marko ima stariju sestru.',
        hint: 'The comparative moves in front of the noun and takes the noun’s case.',
        explanation:
          'Marko ima stariju sestru. — imati takes the accusative, and the feminine accusative of starija is stariju.',
      },
      {
        type: 'listen',
        audio: 'Živimo u manjem gradu nego prije, ali u većoj kući.',
        q: 'What changed when they moved?',
        options: [
          'A bigger town and a smaller house',
          'A bigger town and a bigger house',
          'A smaller town and a bigger house',
          'A smaller town and a smaller house',
        ],
        correct: 2,
        explanation:
          'u manjem gradu nego prije — in a smaller town than before; ali u većoj kući — but in a bigger house.',
      },
      {
        type: 'dictate',
        audio: 'Ovo je najkraći put do mora.',
        answer: 'Ovo je najkraći put do mora.',
        hint: 'Six words: "This is the shortest way to the sea."',
        explanation: 'Ovo je najkraći put do mora. — kratak → kraći → najkraći.',
      },
    ],
  },

  // ── Comparative adverbs ────────────────────────────────────────────────────
  'comparative-adverbs': {
    text: {
      kind: 'dialogue',
      title: 'Trening prije utrke',
      lines: [
        {
          who: 'Dora',
          hr: 'Filipe, danas trčiš puno brže nego prošli tjedan!',
          en: 'Filip, today you are running much faster than last week!',
        },
        {
          who: 'Filip',
          hr: 'Hvala, ali ti i dalje trčiš brže od mene. Ja se samo više trudim.',
          en: 'Thanks, but you still run faster than me. I just try harder.',
        },
        {
          who: 'Dora',
          hr: 'Ide ti sve bolje. Što češće treniraš, to lakše dišeš.',
          en: 'You are getting better and better. The more often you train, the more easily you breathe.',
        },
        {
          who: 'Filip',
          hr: 'Znam, ali ujutro mi je sve teže ustati. Ti ustaješ ranije nego ja, zar ne?',
          en: 'I know, but in the morning it is harder and harder for me to get up. You get up earlier than I do, don’t you?',
        },
        {
          who: 'Dora',
          hr: 'Puno ranije! Najbolje trčim prije posla, kad je grad još tih.',
          en: 'Much earlier! I run best before work, when the city is still quiet.',
        },
        {
          who: 'Filip',
          hr: 'Ja više volim trčati navečer nego ujutro. Tada imam više snage.',
          en: 'I prefer running in the evening to running in the morning. I have more energy then.',
        },
        {
          who: 'Dora',
          hr: 'Dobro, ali utrka je u nedjelju u devet ujutro. Dođi što ranije!',
          en: 'Fine, but the race is on Sunday at nine in the morning. Come as early as you can!',
        },
        {
          who: 'Filip',
          hr: 'Doći ću što prije… i trčat ću najsporije od svih.',
          en: 'I will come as soon as possible… and I will run the slowest of all.',
        },
        {
          who: 'Dora',
          hr: 'Važno je stići do cilja. Bolje sporo nego nikako!',
          en: 'What matters is reaching the finish line. Better slowly than not at all!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: when does each of them like to run?',
          options: [
            'Dora in the evening after work; Filip early in the morning',
            'Both of them on Sunday mornings only',
            'Dora before work, while the city is quiet; Filip in the evening',
            'Dora at noon; Filip before work',
          ],
          correct: 2,
          hint: 'One of them gets up much earlier. The other says he has more energy at a certain time of day.',
          explanation:
            'Dora runs best before work (Najbolje trčim prije posla). Filip prefers the evening (Više volim trčati navečer nego ujutro).',
        },
        {
          q: 'Filip says "brže od mene", but Dora says "brže nego prošli tjedan". Why could Dora not use od?',
          options: [
            'Because od is only used by men',
            'Because after her "than" comes a time expression, not a noun or pronoun in the genitive',
            'Because brže is an adverb, and adverbs never take od',
            'Because od is only possible in the past tense',
          ],
          correct: 1,
          hint: 'Filip compares himself with a person. What does Dora compare today with?',
          explanation:
            'od + genitive works with a noun or pronoun (od mene). Before a time expression like "prošli tjedan" or "jučer" only nego is possible.',
        },
        {
          type: 'type',
          q: 'Now you. Filip seldom trains, and in winter even more seldom: Zimi trenira još ____. (rijetko)',
          answer: 'rjeđe',
          hint: 'This comparative is irregular: the ije shortens and tk melts into one soft consonant.',
          explanation: 'rijetko → rjeđe (more rarely). The adverb ends in -e and never changes.',
        },
        {
          type: 'transform',
          q: 'Say the same thing with nego instead of od.',
          from: 'Dora trči brže od Filipa.',
          answer: 'Dora trči brže nego Filip.',
          hint: 'After nego the second runner stands in the same case as the first one.',
          explanation:
            'Dora trči brže nego Filip. — od takes the genitive (od Filipa); nego keeps the nominative, matching Dora.',
        },
        {
          type: 'transform',
          q: 'This sentence describes Dora (trkačica = a runner). Now describe how she RUNS: start with "Dora trči…".',
          from: 'Dora je bolja trkačica od Filipa.',
          answer: 'Dora trči bolje od Filipa.',
          accept: [
            'Dora trči bolje nego Filip.',
            'Dora bolje trči od Filipa.',
            'Dora bolje trči nego Filip.',
          ],
          hint: 'An action is described by an adverb: the neuter form of the comparative, which agrees with nobody.',
          explanation:
            'Dora trči bolje od Filipa. — bolja agrees with trkačica; bolje describes the running and never changes.',
        },
      ],
    },
    mix: [
      8,
      7,
      {
        type: 'match',
        q: 'Match each comparative adverb to its meaning.',
        pairs: [
          ['tiše', 'more quietly'],
          ['kasnije', 'later'],
          ['više', 'more'],
          ['gore', 'worse'],
          ['ranije', 'earlier'],
        ],
        explanation:
          'tiho → tiše, kasno → kasnije, mnogo → više, loše → gore, rano → ranije. Every comparative adverb ends in -e.',
      },
      6,
      {
        type: 'sort',
        q: 'Does the comparative describe a person or thing, or does it describe an action?',
        groups: ['Describes a person or thing', 'Describes an action'],
        items: [
          { hr: 'Ona je brža.', group: 0 },
          { hr: 'Ona brže pliva.', group: 1 },
          { hr: 'On je bolji kuhar.', group: 0 },
          { hr: 'On bolje kuha.', group: 1 },
          { hr: 'Ovaj vlak je sporiji.', group: 0 },
          { hr: 'Ovaj vlak vozi sporije.', group: 1 },
        ],
        explanation:
          'An adjective agrees with the person or thing: brža, bolji, sporiji. An adverb describes the verb and always has the neuter form: brže, bolje, sporije.',
      },
      11,
      3,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Djeca', 'danas', 'pjevaju', 'glasniji', 'nego', 'jučer.'],
        wrong: 3,
        answer: 'glasnije',
        hint: 'The word says HOW they sing, so it must not agree with anyone.',
        explanation:
          'Djeca danas pjevaju glasnije nego jučer. — an action takes the adverb, the neuter form of the comparative.',
      },
      9,
      {
        type: 'tf',
        q: '"Više volim čaj nego kava" is correct, because nego is always followed by the nominative.',
        answer: false,
        hint: 'Is čaj the subject of that sentence, or the object?',
        explanation:
          'False. nego takes the SAME case as the thing it is compared with. čaj is the object (accusative), so: Više volim čaj nego kavu.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "The more you read, the better you write."',
        words: ['Što', 'više', 'čitaš,', 'to', 'bolje', 'pišeš.'],
        accept: ['Što više čitaš, to pišeš bolje.', 'Što čitaš više, to bolje pišeš.'],
        explanation:
          'Što više čitaš, to bolje pišeš. The pattern is što + comparative …, to + comparative.',
      },
      10,
      4,
      {
        type: 'transform',
        q: 'Make it "as often as you can".',
        from: 'Piši mi često.',
        answer: 'Piši mi što češće.',
        hint: 'One small word in front of the comparative of često.',
        explanation: 'Piši mi što češće. — što + comparative means "as … as possible".',
      },
      {
        type: 'listen',
        audio: 'Nedjeljom autobusi voze rjeđe nego subotom.',
        q: 'On which day are there fewer buses?',
        options: ['On Saturdays', 'On Sundays', 'They run equally often', 'On Mondays'],
        correct: 1,
        explanation:
          'Nedjeljom … rjeđe nego subotom — on Sundays the buses run less often than on Saturdays.',
      },
      {
        type: 'dictate',
        audio: 'Govorite malo sporije, molim Vas.',
        answer: 'Govorite malo sporije, molim Vas.',
        hint: 'Five words: you politely ask a stranger to speak a little more slowly.',
        explanation:
          'Govorite malo sporije, molim Vas. — sporije is the comparative adverb of sporo; Vas has a capital for one person addressed politely.',
      },
    ],
  },

  // ── Character traits ───────────────────────────────────────────────────────
  'character-traits': {
    text: {
      kind: 'dialogue',
      title: 'Kakva je nova šefica?',
      lines: [
        {
          who: 'Sanja',
          hr: 'Dario, kakva je vaša nova šefica? Čujem da je stroga.',
          en: 'Dario, what is your new boss like? I hear she is strict.',
        },
        {
          who: 'Dario',
          hr: 'Stroga je, ali poštena. I puno je strpljivija od starog šefa.',
          en: 'She is strict, but fair. And she is much more patient than the old boss.',
        },
        {
          who: 'Sanja',
          hr: 'A kolege? Prošli put si rekao da je Bruno lijen.',
          en: 'And your coworkers? Last time you said that Bruno was lazy.',
        },
        {
          who: 'Dario',
          hr: 'Pogriješio sam. Bruno je zapravo vrijedan kao mrav, samo je sramežljiv i malo govori.',
          en: 'I was wrong. Bruno is actually as hardworking as an ant; he is just shy and does not say much.',
        },
        {
          who: 'Sanja',
          hr: 'A Karla? Meni se čini jako duhovita.',
          en: 'And Karla? She seems very witty to me.',
        },
        {
          who: 'Dario',
          hr: 'Duhovita je, ali je i tvrdoglava kao magarac. Nikad ne mijenja mišljenje!',
          en: 'She is witty, but she is also as stubborn as a donkey. She never changes her mind!',
        },
        {
          who: 'Sanja',
          hr: 'Ha-ha! A kakav si ti kolega?',
          en: 'Ha-ha! And what kind of coworker are you?',
        },
        {
          who: 'Dario',
          hr: 'Ja? Skroman, pouzdan, velikodušan…',
          en: 'Me? Modest, reliable, generous…',
        },
        {
          who: 'Sanja',
          hr: '…i nimalo umišljen, zar ne?',
          en: '…and not conceited at all, right?',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what did Dario think of Bruno before, and what does he think now?',
          options: [
            'He thought Bruno was stubborn; now he finds him witty',
            'He thought Bruno was lazy; now he sees that he works hard and is just shy',
            'He thought Bruno was shy; now he finds him lazy',
            'He thought Bruno was strict; now he finds him fair',
          ],
          correct: 1,
          hint: 'Dario admits a mistake. Which animal does he compare Bruno to?',
          explanation:
            'Dario had called Bruno lijen (lazy). Now he says Bruno is vrijedan kao mrav — hardworking as an ant — only shy and quiet.',
        },
        {
          q: 'Why is Sanja’s last line a joke?',
          options: [
            'Because Dario has just praised himself three times — and one of the three words was "modest"',
            'Because Dario forgot to mention Karla',
            'Because "umišljen" is a compliment and Dario did not expect it',
            'Because Sanja thinks Dario is lazier than Bruno',
          ],
          correct: 0,
          hint: 'Look at the first word Dario uses about himself, and at what umišljen means.',
          explanation:
            'Dario calls himself skroman (modest) while listing only his virtues. Sanja teases him: "and not conceited (umišljen) at all" — the opposite of modest.',
        },
        {
          type: 'type',
          q: 'Now you. The new boss is patient. The old boss was the opposite: Stari šef je bio ____.',
          answer: 'nestrpljiv',
          hint: 'This trait makes its opposite with a short prefix written together with the adjective.',
          explanation: 'strpljiv → nestrpljiv. ne- is written together with the adjective.',
        },
        {
          type: 'type',
          q: 'Karla does not change her mind easily — but Dario says Sanja is even worse: Sanja je još ____ od Karle. (tvrdoglav)',
          answer: 'tvrdoglavija',
          hint: 'A regular comparative, and it has to agree with Sanja.',
          explanation:
            'tvrdoglav → tvrdoglaviji; feminine tvrdoglavija. Most long trait adjectives take the regular -iji.',
        },
        {
          type: 'transform',
          q: 'Say the same about Karla.',
          from: 'Bruno je vrijedan i sramežljiv.',
          answer: 'Karla je vrijedna i sramežljiva.',
          hint: 'Both adjectives become feminine — and in one of them a vowel disappears before the ending.',
          explanation:
            'Karla je vrijedna i sramežljiva. — vrijedan loses its a when an ending is added: vrijedna, never "vrijedana".',
        },
      ],
    },
    mix: [
      8,
      {
        type: 'match',
        q: 'Match each trait to its opposite.',
        pairs: [
          ['hrabar', 'plašljiv'],
          ['duhovit', 'dosadan'],
          ['velikodušan', 'škrt'],
          ['skroman', 'umišljen'],
        ],
        explanation:
          'hrabar (brave) ↔ plašljiv (timid), duhovit (witty) ↔ dosadan (boring), velikodušan (generous) ↔ škrt (stingy), skroman (modest) ↔ umišljen (conceited). None of these opposites is made with ne-.',
      },
      6,
      11,
      {
        type: 'sort',
        q: 'Would you be pleased to hear this word about yourself?',
        groups: ['A compliment', 'A criticism'],
        items: [
          { hr: 'štedljiv', group: 0 },
          { hr: 'škrt', group: 1 },
          { hr: 'pouzdan', group: 0 },
          { hr: 'umišljen', group: 1 },
          { hr: 'iskren', group: 0 },
          { hr: 'neljubazan', group: 1 },
          { hr: 'velikodušan', group: 0 },
          { hr: 'nepošten', group: 1 },
        ],
        explanation:
          'štedljiv (thrifty) praises the same habit that škrt (stingy) criticizes. pouzdan, iskren and velikodušan are virtues; umišljen, neljubazan and nepošten are not.',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Moja', 'sestra', 'je', 'strpljiviji', 'od', 'brata.'],
        wrong: 3,
        answer: 'strpljivija',
        hint: 'The comparative has to agree with the person it describes.',
        explanation:
          'Moja sestra je strpljivija od brata. — a comparative is an adjective, so it is feminine for sestra.',
      },
      7,
      13,
      12,
      {
        type: 'tf',
        q: '"Dosadan kao muha" describes a quiet, boring person who never says a word.',
        answer: false,
        hint: 'Think of what a fly actually does when it is in your room.',
        explanation:
          'False. A fly is not boring, it is irritating: dosadan kao muha is said of a pest who will not leave you alone.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "He is not stingy, he is just thrifty."',
        words: ['Nije', 'škrt,', 'samo', 'je', 'štedljiv.'],
        explanation:
          'Nije škrt, samo je štedljiv. The short word je takes second place in its clause, right after samo.',
      },
      10,
      5,
      {
        type: 'transform',
        q: 'Say the opposite about him. Both adjectives make their opposite the same way.',
        from: 'Novi kolega je pouzdan i iskren.',
        answer: 'Novi kolega je nepouzdan i neiskren.',
        hint: 'A short negative prefix, written together with each adjective.',
        explanation:
          'Novi kolega je nepouzdan i neiskren. — ne- joins the adjective as one word: nepouzdan, neiskren.',
      },
      {
        type: 'listen',
        audio: 'Moj šef je strog, ali je pošten i nikad nije neljubazan.',
        q: 'What is the boss like?',
        options: [
          'Kind, but unfair',
          'Strict and often unkind',
          'Strict, but fair and never unkind',
          'Fair, but impatient',
        ],
        correct: 2,
        explanation: 'strog — strict; pošten — fair; nikad nije neljubazan — he is never unkind.',
      },
      {
        type: 'dictate',
        audio: 'Ona je vrijedna kao mrav.',
        answer: 'Ona je vrijedna kao mrav.',
        hint: 'Five words: "She is as hardworking as an ant."',
        explanation:
          'Ona je vrijedna kao mrav. — the adjective agrees with ona, and the animal stays in the nominative after kao.',
      },
    ],
  },

  // ── Appearance and compliments ─────────────────────────────────────────────
  'appearance-compliments': {
    text: {
      kind: 'dialogue',
      title: 'Na rođendanskoj zabavi',
      lines: [
        {
          who: 'Mia',
          hr: 'Lana, ošišala si se! Kraća kosa ti odlično stoji.',
          en: 'Lana, you got a haircut! Shorter hair really suits you.',
        },
        {
          who: 'Lana',
          hr: 'Hvala! Frizerka kaže da s kratkom kosom izgledam mlađe.',
          en: 'Thanks! The hairdresser says I look younger with short hair.',
        },
        {
          who: 'Mia',
          hr: 'Ima pravo. I ta ti zelena haljina stvarno stoji.',
          en: 'She is right. And that green dress really suits you too.',
        },
        {
          who: 'Lana',
          hr: 'Ma daj, stara je to haljina. A ti izgledaš odmorno. Jesi li bila na moru?',
          en: 'Oh, come on, it is an old dress. And you look rested. Were you at the coast?',
        },
        {
          who: 'Mia',
          hr: 'Jesam, tjedan dana. Reci mi, tko je onaj visoki muškarac? Ima bradu i nosi naočale.',
          en: 'I was, for a week. Tell me, who is that tall man? He has a beard and wears glasses.',
        },
        {
          who: 'Lana',
          hr: 'To je moj bratić Vedran. Prije je imao dugu kovrčavu kosu, a sad je skoro ćelav.',
          en: 'That is my cousin Vedran. He used to have long curly hair, and now he is almost bald.',
        },
        {
          who: 'Mia',
          hr: 'Meni izgleda kao glumac. Je li ljepši od tvog dečka?',
          en: 'To me he looks like an actor. Is he better-looking than your boyfriend?',
        },
        {
          who: 'Lana',
          hr: 'Hm, teško je reći. To je delikatno pitanje!',
          en: 'Hm, it is hard to say. That is a delicate question!',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: what does Vedran look like today?',
          options: [
            'Short, with long curly hair and a mustache',
            'Tall, with a beard and glasses, and almost bald',
            'Tall, with long curly hair and no glasses',
            'Heavy-set, with gray hair and a beard',
          ],
          correct: 1,
          hint: 'Mia names three things she can see. Lana adds what has changed about his hair.',
          explanation:
            'Vedran is tall (visoki muškarac), has a beard and wears glasses. His long curly hair is gone: sad je skoro ćelav.',
        },
        {
          q: 'Mia says "Kraća kosa ti odlično stoji". Why "ti" and not "te"?',
          options: [
            'Because ti is the subject of the sentence',
            'Because kosa is feminine',
            'Because with stajati the person something suits goes in the dative',
            'Because te is used only in questions',
          ],
          correct: 2,
          hint: 'The hair is the subject — it "stands" well. In which case is the person it stands TO?',
          explanation:
            'stajati works like "to be becoming TO someone": the thing is the subject and the person is in the dative. That is why Mia says ti, the short dative of the pronoun, and not te.',
        },
        {
          type: 'type',
          q: 'Now you. Vedran is wearing a new jacket. Tell Mia that it suits HIM: Nova jakna ____ dobro stoji.',
          answer: 'mu',
          hint: 'The short dative of on.',
          explanation:
            'Nova jakna mu dobro stoji. — the person is in the dative; the short form mu takes second place.',
        },
        {
          type: 'transform',
          q: 'You said this to a friend. Now say it to your teacher, Mrs. Horvat — politely.',
          from: 'Lijepo izgledaš!',
          answer: 'Lijepo izgledate!',
          hint: 'Only the verb changes: polite Vi takes the same ending as the plural.',
          explanation: 'Lijepo izgledate! — izgledati + adverb; izgledaš for ti, izgledate for Vi.',
        },
        {
          type: 'transform',
          q: 'Describe her hair in one sentence with imati.',
          from: 'Njezina kosa je duga i crna.',
          answer: 'Ima dugu crnu kosu.',
          accept: [
            'Ona ima dugu crnu kosu.',
            'Ima dugu, crnu kosu.',
            'Ona ima dugu, crnu kosu.',
            'Ima dugu i crnu kosu.',
            'Ona ima dugu i crnu kosu.',
            'Ima crnu dugu kosu.',
          ],
          hint: 'What someone has stands in the accusative — the noun and both adjectives.',
          explanation:
            'Ima dugu crnu kosu. — hair goes with imati and the accusative: duga → dugu, crna → crnu, kosa → kosu.',
        },
      ],
    },
    mix: [
      9,
      6,
      {
        type: 'match',
        q: 'Match each word to its description.',
        pairs: [
          ['ćelav', 'has no hair on his head'],
          ['brkovi', 'hair above the upper lip'],
          ['naočale', 'you wear them to see well'],
          ['pletenica', 'long hair woven together'],
          ['šiške', 'short hair falling over the forehead'],
        ],
        explanation:
          'ćelav — bald; brkovi — a mustache; naočale — glasses; pletenica — a braid; šiške — bangs. naočale and šiške are always plural.',
      },
      7,
      {
        type: 'sort',
        q: 'How do you say it about a man? Sort each ending under the beginning it can follow.',
        groups: ['On ima … / On nosi …', 'On je …'],
        items: [
          { hr: 'plave oči', group: 0 },
          { hr: 'visok', group: 1 },
          { hr: 'bradu', group: 0 },
          { hr: 'ćelav', group: 1 },
          { hr: 'naočale', group: 0 },
          { hr: 'vitak', group: 1 },
          { hr: 'brkove', group: 0 },
          { hr: 'krupan', group: 1 },
        ],
        explanation:
          'A feature someone has or wears is a noun in the accusative, after imati or nositi: ima plave oči, ima bradu, ima brkove, nosi naočale. What someone IS is an adjective in the nominative, after biti: visok je, vitak, krupan, ćelav.',
      },
      10,
      0,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Tvoja', 'sestra', 'izgleda', 'kao', 'glumicu.'],
        wrong: 4,
        answer: 'glumica',
        hint: 'kao compares like with like, so the word after it has the same case as sestra.',
        explanation:
          'Tvoja sestra izgleda kao glumica. — after kao comes the nominative, not the accusative.',
      },
      8,
      {
        type: 'tf',
        q: 'When a friend says "Lijepo izgledaš!", a natural reply is "Nema na čemu."',
        answer: false,
        hint: 'What does "Nema na čemu" normally answer?',
        explanation:
          'False. "Nema na čemu" answers a thank-you. A compliment is answered with Hvala! — often with a little modesty added: Ma daj…',
      },
      11,
      {
        type: 'order',
        q: 'Put the words in order: "That jacket really suits you."',
        words: ['Ta', 'ti', 'jakna', 'stvarno', 'stoji.'],
        accept: ['Ta jakna ti stvarno stoji.', 'Stvarno ti stoji ta jakna.'],
        explanation:
          'Ta ti jakna stvarno stoji. The short dative ti takes second place — even between ta and jakna. "Ta jakna ti stvarno stoji" is correct as well.',
      },
      13,
      {
        type: 'transform',
        q: 'The compliment was about a dress. Now make it about shoes: replace "Ta haljina" with "Te cipele".',
        from: 'Ta haljina ti lijepo stoji.',
        answer: 'Te cipele ti lijepo stoje.',
        accept: ['Te ti cipele lijepo stoje.'],
        hint: 'The shoes are now the subject, and there is more than one of them.',
        explanation:
          'Te cipele ti lijepo stoje. — the verb agrees with the thing: haljina stoji, cipele stoje.',
      },
      12,
      {
        type: 'listen',
        audio: 'Visok je, ima kratku crnu kosu i nosi naočale.',
        q: 'Who is being described?',
        options: [
          'A short man with black hair and a beard',
          'A tall man with short black hair and glasses',
          'A tall man with long black hair and glasses',
          'A tall woman with short black hair',
        ],
        correct: 1,
        explanation:
          'Visok je — he is tall (the form for a man); kratku crnu kosu — short black hair; nosi naočale — he wears glasses.',
      },
      {
        type: 'dictate',
        audio: 'Izgledaš kao tvoja majka.',
        answer: 'Izgledaš kao tvoja majka.',
        hint: 'Four words: "You look like your mother."',
        explanation: 'Izgledaš kao tvoja majka. — izgledati kao + nominative.',
      },
    ],
  },

  // ══ UNIT 2 ═════════════════════════════════════════════════════════════════

  // ── Aspect 2: the imperfective ─────────────────────────────────────────────
  'aspect-imperfective': {
    text: {
      kind: 'text',
      title: 'Ljeta kod bake',
      lines: [
        {
          hr: 'Kad sam bila mala, svako sam ljeto provodila kod bake na Braču.',
          en: 'When I was little, I spent every summer at my grandma’s on Brač.',
        },
        {
          hr: 'Baka je uvijek ustajala prva i pekla kruh, a ja sam još spavala.',
          en: 'Grandma always got up first and baked bread, while I was still sleeping.',
        },
        {
          hr: 'Poslije doručka obično smo išle na plažu. Ja sam plivala, a baka je sjedila pod drvetom i čitala novine.',
          en: 'After breakfast we usually went to the beach. I swam, and Grandma sat under a tree and read the newspaper.',
        },
        {
          hr: 'Navečer smo često sjedile pred kućom i gledale more.',
          en: 'In the evening we often sat in front of the house and watched the sea.',
        },
        {
          hr: 'Jedne večeri, dok smo večerale, zazvonio je telefon.',
          en: 'One evening, while we were having dinner, the phone rang.',
        },
        { hr: 'Zvala je mama: dobila sam brata!', en: 'It was Mom calling: I had a baby brother!' },
        {
          hr: 'Danas baka više ne peče kruh svaki dan, ali ja je i dalje posjećujem svako ljeto.',
          en: 'Today Grandma no longer bakes bread every day, but I still visit her every summer.',
        },
        {
          hr: 'I još uvijek navečer sjedimo pred kućom i gledamo more.',
          en: 'And in the evening we still sit in front of the house and watch the sea.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the story: what did Grandma do at the beach while the girl swam?',
          options: [
            'She swam with her',
            'She baked bread at home',
            'She sat under a tree and read the newspaper',
            'She watched the sea from the house',
          ],
          correct: 2,
          hint: 'Grandma stayed out of the water and out of the sun.',
          explanation:
            'Baka je sjedila pod drvetom i čitala novine — she sat under a tree and read the newspaper, as she usually did.',
        },
        {
          q: 'In "dok smo večerale, zazvonio je telefon" the first verb is imperfective and the second perfective. Why?',
          options: [
            'The dinner was going on in the background; the ring was one sudden event that broke into it',
            'The dinner happened once; the phone rang every evening',
            'Verbs about food are always imperfective',
            'After dok both verbs must have different aspects',
          ],
          correct: 0,
          hint: 'Which of the two actions was already in progress, and which one happened in a single moment?',
          explanation:
            'The imperfective sets the scene — we were having dinner. The perfective zazvonio je is the single event that interrupts it.',
        },
        {
          type: 'type',
          q: 'Now you. Grandpa had a habit too: Djed je svake večeri dva sata ____ pisma. (pisati / napisati)',
          answer: 'pisao',
          hint: 'A habit, and an activity that lasted two hours each time: the verb of the process, in the past, for a man.',
          explanation:
            'Djed je svake večeri dva sata pisao pisma. — a repeated activity with a stated duration is imperfective.',
        },
        {
          type: 'type',
          q: 'Set the scene for what happened next: Dok je baka ____ ručak, došao je poštar. (kuhati / skuhati)',
          answer: 'kuhala',
          hint: 'The cooking was in progress when the mail carrier came — the background verb, agreeing with baka.',
          explanation:
            'Dok je baka kuhala ručak, došao je poštar. — the ongoing background after dok is imperfective; došao je is the event.',
        },
        {
          type: 'transform',
          q: 'This happened once. Describe it as her daily custom: replace "Jučer" with "Svaki dan" and use the other verb of the pair.',
          from: 'Jučer sam popila kavu s bakom.',
          answer: 'Svaki dan sam pila kavu s bakom.',
          accept: ['Svaki sam dan pila kavu s bakom.', 'Svaki dan pila sam kavu s bakom.'],
          hint: 'The partner of popiti has no prefix.',
          explanation:
            'Svaki dan sam pila kavu s bakom. — to describe a custom as something that used to go on, Croatian uses the imperfective: piti, not popiti.',
        },
      ],
    },
    mix: [
      5,
      {
        type: 'match',
        q: 'Why is the verb imperfective? Match each sentence to the reason.',
        pairs: [
          ['Svaki dan pijem kavu.', 'a habit'],
          ['Ribe žive u vodi.', 'a general truth'],
          ['Kuhala sam kad si nazvao.', 'the background to another event'],
          ['Tražio sam ključeve, ali ih nisam našao.', 'an attempt without a result'],
          ['Cijelu noć je padao snijeg.', 'it went on for a stretch of time'],
        ],
        explanation:
          'The imperfective describes habits, general truths, a background in progress, an activity whose result is not claimed, and anything that simply lasted.',
      },
      4,
      3,
      {
        type: 'sort',
        q: 'A habit, or something in progress at one moment?',
        groups: ['A habit — again and again', 'In progress at one moment'],
        items: [
          { hr: 'Nedjeljom smo igrali nogomet.', group: 0 },
          { hr: 'Igrali smo nogomet kad je počela kiša.', group: 1 },
          { hr: 'Kao student često je putovao.', group: 0 },
          { hr: 'Spavala je dok je trajao film.', group: 1 },
          { hr: 'Ljeti uvijek ustajem rano.', group: 0 },
          { hr: 'Tiho! Beba spava.', group: 1 },
        ],
        explanation:
          'Both jobs belong to the imperfective. Words like nedjeljom, često and uvijek point to a habit; kad, dok and "right now" point to one moment with the action in progress.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Jučer', 'sam', 'tri', 'sata', 'pročitao', 'stripove.'],
        wrong: 4,
        answer: 'čitao',
        hint: 'The sentence says how long the activity went on. Can a finished result go on for three hours?',
        explanation:
          'Jučer sam tri sata čitao stripove. — an activity with a stated duration is imperfective: čitati, not pročitati.',
      },
      6,
      7,
      {
        type: 'tf',
        q: 'The sentence "Učio sam hrvatski" tells us that the speaker never learned Croatian.',
        answer: false,
        hint: 'The imperfective reports the activity. Does it say anything about the result?',
        explanation:
          'False. The imperfective reports the activity of studying and leaves the result open — it neither claims it nor denies it.',
      },
      {
        type: 'order',
        q: 'Put the words in order: "While I was cooking, the children were playing in the yard."',
        words: ['Dok', 'sam', 'kuhala,', 'djeca', 'su', 'se', 'igrala', 'u', 'dvorištu.'],
        accept: [
          'Djeca su se igrala u dvorištu dok sam kuhala.',
          'Dok sam kuhala, djeca su se u dvorištu igrala.',
          'Dok sam kuhala, u dvorištu su se igrala djeca.',
        ],
        explanation:
          'Dok sam kuhala, djeca su se igrala u dvorištu. Two actions in progress at the same time — both imperfective.',
      },
      1,
      {
        type: 'transform',
        q: 'One purchase becomes a custom: replace "Jučer" with "Svaki dan" and use the other verb of the pair.',
        from: 'Jučer sam kupio novine.',
        answer: 'Svaki dan sam kupovao novine.',
        accept: ['Svaki sam dan kupovao novine.', 'Svaki dan kupovao sam novine.'],
        hint: 'The imperfective partner of kupiti is longer: it has -ova- in the infinitive.',
        explanation:
          'Svaki dan sam kupovao novine. — kupiti is the single purchase; kupovati describes the custom.',
      },
      {
        type: 'listen',
        audio: 'Kad sam bio student, svake sam subote radio u kafiću.',
        q: 'What does the speaker tell us?',
        options: [
          'He is working in a café this Saturday',
          'As a student he used to work in a café on Saturdays',
          'He worked in a café once, on one Saturday',
          'He would like to work in a café',
        ],
        correct: 1,
        explanation:
          'svake subote + the imperfective radio — a repeated activity in the past: he used to work there every Saturday.',
      },
      {
        type: 'dictate',
        audio: 'Dok je padala kiša, čitali smo.',
        answer: 'Dok je padala kiša, čitali smo.',
        hint: 'Six words: "While it was raining, we were reading."',
        explanation:
          'Dok je padala kiša, čitali smo. — two imperfective verbs: the rain and the reading went on together.',
      },
    ],
  },

  // ── Aspect 3: the perfective ───────────────────────────────────────────────
  'aspect-perfective': {
    text: {
      kind: 'dialogue',
      title: 'Gdje su ključevi?',
      lines: [
        {
          who: 'Ema',
          hr: 'Jakove, zašto si zakasnio na sastanak?',
          en: 'Jakov, why were you late for the meeting?',
        },
        {
          who: 'Jakov',
          hr: 'Ne pitaj! Ustao sam na vrijeme, istuširao se i popio kavu. A onda nisam mogao naći ključeve.',
          en: 'Don’t ask! I got up on time, took a shower and drank my coffee. And then I could not find my keys.',
        },
        {
          who: 'Ema',
          hr: 'Jesi li ih potražio u torbi?',
          en: 'Did you have a look for them in your bag?',
        },
        {
          who: 'Jakov',
          hr: 'Tražio sam ih pola sata — u torbi, u kaputu, u autu. Na kraju sam nazvao ženu.',
          en: 'I looked for them for half an hour — in my bag, in my coat, in the car. In the end I called my wife.',
        },
        { who: 'Ema', hr: 'I? Što je rekla?', en: 'And? What did she say?' },
        {
          who: 'Jakov',
          hr: 'Rekla je: „Pogledaj u hladnjak.” Otvorio sam hladnjak i našao ih pokraj mlijeka!',
          en: 'She said: "Look in the fridge." I opened the fridge and found them next to the milk!',
        },
        {
          who: 'Ema',
          hr: 'U hladnjaku?! Tko ih je tamo stavio?',
          en: 'In the fridge?! Who put them there?',
        },
        {
          who: 'Jakov',
          hr: 'Ja. Sinoć sam se kasno vratio, stavio sve iz torbe u hladnjak i odmah zaspao.',
          en: 'I did. Last night I came back late, put everything from my bag into the fridge and fell asleep right away.',
        },
        {
          who: 'Ema',
          hr: 'Dobro, sjedni. Sastanak smo već završili, ali kavu još nismo popili.',
          en: 'All right, sit down. We have already finished the meeting, but we have not had our coffee yet.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where were the keys, and how did they get there?',
          options: [
            'In his coat; his wife put them there',
            'In the car; he left them there in the morning',
            'In the fridge; he put them there himself the night before',
            'In his bag; he did not look carefully',
          ],
          correct: 2,
          hint: 'His wife’s advice sounded strange. And think of how tired he was last night.',
          explanation:
            'The keys were in the fridge, next to the milk. Jakov himself had put everything from his bag there before he fell asleep.',
        },
        {
          q: 'Jakov says "Tražio sam ih pola sata" but "našao ih pokraj mlijeka". Why is the first verb imperfective and the second perfective?',
          options: [
            'The search lasted for a stretch of time; the finding was one completed moment',
            'tražiti is used in the morning, naći in the evening',
            'The first sentence is negative, the second is not',
            'tražiti and naći are one aspect pair, and the order decides the aspect',
          ],
          correct: 0,
          hint: 'Look at "pola sata". Can a single moment last half an hour?',
          explanation:
            'A process with a duration (pola sata) is imperfective: tražio sam. The moment of finding is a single finished event: našao sam. They are two different verbs, not one pair.',
        },
        {
          type: 'type',
          q: 'Now you. Ema tells her own morning — a chain of finished steps: Ustala sam, ____ kavu i otišla na posao. (piti / popiti)',
          answer: 'popila',
          hint: 'Each step was finished before the next one began; the speaker is a woman.',
          explanation:
            'Ustala sam, popila kavu i otišla na posao. — every step in a chain of completed events is perfective.',
        },
        {
          type: 'type',
          q: 'Jakov’s wife explains one finished action: Bilo je vruće, pa sam ____ prozor. (otvarati / otvoriti)',
          answer: 'otvorila',
          hint: 'One action with a result — the window is now open; a woman is speaking.',
          explanation:
            'Bilo je vruće, pa sam otvorila prozor. — one completed action with a result is perfective: otvoriti.',
        },
        {
          type: 'transform',
          q: 'Every morning Jakov drinks coffee and reads the newspaper. Say that this morning he FINISHED both. Start with "Jutros je Jakov…".',
          from: 'Jakov svako jutro pije kavu i čita novine.',
          answer: 'Jutros je Jakov popio kavu i pročitao novine.',
          accept: [
            'Jutros je popio kavu i pročitao novine.',
            'Jakov je jutros popio kavu i pročitao novine.',
          ],
          hint: 'Both verbs move to the past and take their perfective partners — one with po-, one with pro-.',
          explanation:
            'Jutros je Jakov popio kavu i pročitao novine. — two finished events: popiti and pročitati, the perfective partners of piti and čitati.',
        },
      ],
    },
    mix: [
      4,
      8,
      {
        type: 'match',
        q: 'Match each sentence to its meaning.',
        pairs: [
          ['Zaspala je.', 'She fell asleep.'],
          ['Spavala je.', 'She was sleeping.'],
          ['Naučio je pjesmu.', 'He learned the song and knows it now.'],
          ['Učio je pjesmu.', 'He was studying the song.'],
          ['Zavolio je Zagreb.', 'He came to love Zagreb.'],
        ],
        explanation:
          'The perfective marks the moment of change and its result (zaspala, naučio, zavolio). The imperfective describes the state or the activity itself (spavala, učio).',
      },
      5,
      0,
      {
        type: 'sort',
        q: 'Scenery or plot? Does the verb set the scene, or does it move the story on?',
        groups: ['Sets the scene', 'Moves the story on'],
        items: [
          { hr: 'Sunce je sjalo.', group: 0 },
          { hr: 'Netko je pokucao.', group: 1 },
          { hr: 'Ptice su pjevale.', group: 0 },
          { hr: 'Ana je ušla.', group: 1 },
          { hr: 'Vjetar je puhao.', group: 0 },
          { hr: 'Telefon je zazvonio.', group: 1 },
        ],
        explanation:
          'The scenery — sun, birds, wind — is imperfective. The single events that advance the story — a knock, an entrance, a ring — are perfective.',
      },
      7,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Sada', 'napišem', 'pismo', 'baki.'],
        wrong: 1,
        answer: 'pišem',
        hint: 'What is happening right now is in progress — and a perfective present cannot say that.',
        explanation:
          'Sada pišem pismo baki. — an action in progress takes the imperfective. The present of napisati lives in clauses such as "Kad napišem pismo, …".',
      },
      {
        type: 'tf',
        q: '"Čitao sam knjigu dva sata" should be corrected to "Pročitao sam knjigu dva sata", because the reading is over.',
        answer: false,
        hint: 'Reading FOR two hours — is that a result, or a process that lasted?',
        explanation:
          'False. A duration describes the process, so the imperfective is right: Čitao sam dva sata. The perfective goes with the time it took to finish: Pročitao sam knjigu za dva sata.',
      },
      6,
      {
        type: 'order',
        q: 'Put the words in order: "He drank his coffee, paid and left."',
        words: ['Popio', 'je', 'kavu,', 'platio', 'i', 'otišao.'],
        accept: ['Kavu je popio, platio i otišao.'],
        explanation:
          'Popio je kavu, platio i otišao. Three perfective verbs in a row: each step is finished before the next begins.',
      },
      13,
      3,
      {
        type: 'transform',
        q: 'This promises calls all summer long. Promise ONE call instead: replace "cijelo ljeto" with "sutra" and use the other verb of the pair.',
        from: 'Zvat ću te cijelo ljeto.',
        answer: 'Nazvat ću te sutra.',
        accept: ['Sutra ću te nazvati.'],
        hint: 'The perfective partner of zvati has a prefix. Before ću the infinitive loses its final -i.',
        explanation: 'Nazvat ću te sutra. — one bounded call in the future is perfective: nazvati.',
      },
      {
        type: 'listen',
        audio: 'Ušla je u sobu, upalila svjetlo i sjela za stol.',
        q: 'What happened?',
        options: [
          'She was sitting at the table when the light came on',
          'She usually sits at the table in her room',
          'She came in, switched on the light and sat down at the table',
          'She will come in and switch on the light',
        ],
        correct: 2,
        explanation:
          'Three perfective verbs in the past — ušla, upalila, sjela: three completed steps, one after another.',
      },
      {
        type: 'dictate',
        audio: 'Djeca su pojela cijeli kolač.',
        answer: 'Djeca su pojela cijeli kolač.',
        hint: 'Five words: "The children ate the whole cake."',
        explanation:
          'Djeca su pojela cijeli kolač. — the cake is gone: a completed action, with the participle in -a for djeca.',
      },
    ],
  },

  // ── Verb prefixes ──────────────────────────────────────────────────────────
  'verb-prefixes': {
    text: {
      kind: 'dialogue',
      title: 'Upis na tečaj',
      lines: [
        { who: 'Službenica', hr: 'Dobar dan. Izvolite?', en: 'Hello. How can I help you?' },
        {
          who: 'Noa',
          hr: 'Dobar dan. Htio bih se upisati na tečaj hrvatskog jezika.',
          en: 'Hello. I would like to enroll in the Croatian language course.',
        },
        {
          who: 'Službenica',
          hr: 'Naravno. Uđite i sjednite. Jeste li ispunili obrazac?',
          en: 'Of course. Come in and sit down. Have you filled out the form?',
        },
        {
          who: 'Noa',
          hr: 'Jesam, ali jedno pitanje nisam razumio. Možete li mi ga prevesti?',
          en: 'I have, but there is one question I did not understand. Can you translate it for me?',
        },
        {
          who: 'Službenica',
          hr: 'Tu morate opisati zašto učite hrvatski. Napišite samo dvije rečenice.',
          en: 'Here you have to describe why you are learning Croatian. Write just two sentences.',
        },
        {
          who: 'Noa',
          hr: 'Dobro… Evo, napisao sam. Treba li još nešto?',
          en: 'All right… There, I have written it. Is anything else needed?',
        },
        {
          who: 'Službenica',
          hr: 'Potpišite se ovdje dolje i zapišite ovaj broj. To je broj Vaše grupe.',
          en: 'Sign here at the bottom and note down this number. It is the number of your group.',
        },
        {
          who: 'Noa',
          hr: 'Zapisao sam. Kad počinje tečaj?',
          en: 'I have noted it down. When does the course start?',
        },
        {
          who: 'Službenica',
          hr: 'U ponedjeljak. Kad izađete iz zgrade, prijeđite ulicu: učionica je u zgradi preko puta.',
          en: 'On Monday. When you leave the building, cross the street: the classroom is in the building across the way.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: which three things does Noa have to do with the form?',
          options: [
            'Translate it, copy it out and pay for it',
            'Describe why he is learning Croatian, sign it, and note down his group number',
            'Describe his family, sign it, and write down the address',
            'Write two pages, sign twice, and bring a photo',
          ],
          correct: 1,
          hint: 'One task needs two sentences, one needs his name, and one is about a number.',
          explanation:
            'He has to describe (opisati) why he is learning Croatian, sign his name at the bottom, and note down (zapisati) the number of his group.',
        },
        {
          q: 'The clerk says "Uđite" and later "Kad izađete iz zgrade". Both verbs are built on ići. What do the two prefixes tell you?',
          options: [
            'u- means "again" and iz- means "quickly"',
            'u- makes the verb polite and iz- makes it informal',
            'u- means "into" and iz- means "out of" — the same as the prepositions u and iz',
            'u- marks the past and iz- marks the future',
          ],
          correct: 2,
          hint: 'Compare them with the two prepositions you use for going into a building and coming out of it.',
          explanation:
            'The prefixes match the prepositions: ući — to go in (u), izaći — to go out (iz). Know the preposition and you can usually guess the verb.',
        },
        {
          type: 'type',
          q: 'Now you. Noa has written his name at the bottom of the form. He says: ____ sam se. (pisati + the prefix for "under")',
          answer: 'Potpisao',
          hint: 'The prefix is pod-, but before p it is spelled the way it sounds.',
          explanation:
            'Potpisao sam se. — pod- + pisati → potpisati: d becomes t before p. To sign is to write your name under something.',
        },
        {
          type: 'type',
          q: 'After class Noa wants a quick chat with his teacher: Mogu li malo ____ s Vama? (pričati + the prefix for "a little, briefly")',
          answer: 'popričati',
          hint: 'The two-letter prefix that often means "for a short while".',
          explanation:
            'Mogu li malo popričati s Vama? — po- adds "a little, briefly": popričati is to have a quick chat.',
        },
        {
          type: 'transform',
          q: 'The clerk said this to Noa politely. Say the same to a friend (ti).',
          from: 'Uđite i potpišite se.',
          answer: 'Uđi i potpiši se.',
          hint: 'Both imperatives lose the ending of the Vi form.',
          explanation:
            'Uđi i potpiši se. — the ti imperative: uđi (from ući), potpiši se (from potpisati se).',
        },
      ],
    },
    mix: [
      4,
      5,
      {
        type: 'match',
        q: 'One root, many verbs. Match each verb to its meaning.',
        pairs: [
          ['opisati', 'to describe'],
          ['prepisati', 'to copy out'],
          ['ispisati', 'to write out'],
          ['zapisati', 'to note down'],
          ['raspakirati', 'to unpack'],
        ],
        explanation:
          'o- around, pre- across, iz- out (spelled is- before p), za- fixing something in place — and raz- apart (spelled ras- before p) on a different root: raspakirati.',
      },
      6,
      1,
      {
        type: 'sort',
        q: 'Which way does the action go?',
        groups: ['Into', 'Out of', 'Across'],
        items: [
          { hr: 'ući u sobu', group: 0 },
          { hr: 'izaći iz kuće', group: 1 },
          { hr: 'prijeći most', group: 2 },
          { hr: 'upisati ime u knjigu', group: 0 },
          { hr: 'ispisati se iz škole', group: 1 },
          { hr: 'prijeći ulicu', group: 2 },
        ],
        explanation:
          'u- is "into" (ući, upisati), iz- is "out of" (izaći, ispisati se), and pre- / prije- is "across" (prijeći).',
      },
      9,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Ušao', 'sam', 'iz', 'stana', 'i', 'prešao', 'ulicu.'],
        wrong: 0,
        answer: 'Izašao',
        hint: 'Look at the preposition after the verb. The prefix has to point the same way.',
        explanation:
          'Izašao sam iz stana i prešao ulicu. — the prefix matches the preposition: iz- with iz (out of), u- with u (into). "Ušao sam u stan" would be the opposite movement.',
      },
      7,
      {
        type: 'tf',
        q: '"Moram pisati ugovor" and "Moram potpisati ugovor" mean the same thing.',
        answer: false,
        hint: 'What does the prefix add to pisati?',
        explanation:
          'False. pisati ugovor is to be writing a contract; potpisati ugovor is to sign it. The prefix changes the meaning.',
      },
      8,
      {
        type: 'order',
        q: 'Put the words in order: "Can you translate this sentence for me?"',
        words: ['Možeš', 'li', 'mi', 'prevesti', 'ovu', 'rečenicu?'],
        accept: ['Možeš li mi ovu rečenicu prevesti?'],
        explanation:
          'Možeš li mi prevesti ovu rečenicu? The verb opens the question, li follows it, and the short word mi comes right after li.',
      },
      3,
      {
        type: 'transform',
        q: 'He was working on it. Now say that the job is finished: change only the verb.',
        from: 'Pisao sam zadaću.',
        answer: 'Napisao sam zadaću.',
        hint: 'One prefix — the one that simply marks completion on this verb.',
        explanation:
          'Napisao sam zadaću. — na- + pisati: the prefix makes the verb perfective, so the homework is done.',
      },
      {
        type: 'listen',
        audio: 'Prešli smo most i izašli iz grada prije mraka.',
        q: 'Where were they when it got dark?',
        options: [
          'Still on the bridge',
          'Already outside the town',
          'In the town center',
          'Under the bridge',
        ],
        correct: 1,
        explanation:
          'Prešli smo most — we crossed the bridge; izašli iz grada prije mraka — and left the town before dark.',
      },
      {
        type: 'dictate',
        audio: 'Prepiši ovu rečenicu u bilježnicu.',
        answer: 'Prepiši ovu rečenicu u bilježnicu.',
        hint: 'Five words: a teacher tells one student to copy a sentence into a notebook.',
        explanation:
          'Prepiši ovu rečenicu u bilježnicu. — pre- + pisati: to carry the text across onto another page; prepiši is the ti imperative.',
      },
    ],
  },

  // ── Futur II ───────────────────────────────────────────────────────────────
  'future-ii': {
    text: {
      kind: 'dialogue',
      title: 'Kad budeš u Zagrebu',
      lines: [
        {
          who: 'Nika',
          hr: 'Roko, sljedeći mjesec dolazim u Zagreb na tjedan dana!',
          en: 'Roko, next month I am coming to Zagreb for a week!',
        },
        {
          who: 'Roko',
          hr: 'Odlično! Dok budeš bila u Zagrebu, spavat ćeš kod mene.',
          en: 'Great! While you are in Zagreb, you will sleep at my place.',
        },
        {
          who: 'Nika',
          hr: 'Hvala ti. Ako budem imala vremena, htjela bih posjetiti i baku.',
          en: 'Thank you. If I have time, I would like to visit Grandma too.',
        },
        {
          who: 'Roko',
          hr: 'Kad budemo išli k baki, kupit ćemo joj cvijeće. Ona to voli.',
          en: 'When we go to Grandma’s, we will buy her flowers. She likes that.',
        },
        {
          who: 'Nika',
          hr: 'A ako bude padala kiša? Nemam kišobrana.',
          en: 'And if it rains? I do not have an umbrella.',
        },
        {
          who: 'Roko',
          hr: 'Ako bude padala, ići ćemo autom. Samo mi javi kad budeš znala točan datum.',
          en: 'If it rains, we will go by car. Just let me know when you know the exact date.',
        },
        {
          who: 'Nika',
          hr: 'Javit ću ti čim kupim kartu.',
          en: 'I will let you know as soon as I buy the ticket.',
        },
        {
          who: 'Roko',
          hr: 'Dogovoreno. A kad se budeš vraćala u Split, odnijet ćeš mami moj dar.',
          en: 'Deal. And when you go back to Split, you will take my present to Mom.',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the dialogue: where will Nika sleep, and what will they bring Grandma?',
          options: [
            'In a hotel; a cake',
            'At Grandma’s; an umbrella',
            'At Roko’s place; flowers',
            'At Roko’s place; a present from Mom',
          ],
          correct: 2,
          hint: 'Roko makes an offer in his first answer. Later he says what Grandma likes.',
          explanation:
            'Nika will sleep at Roko’s (spavat ćeš kod mene), and they will buy Grandma flowers (kupit ćemo joj cvijeće).',
        },
        {
          q: 'Roko says "Dok budeš bila u Zagrebu, spavat ćeš kod mene." Why not "Dok ćeš biti u Zagrebu"?',
          options: [
            'Because Nika is a woman, and ćeš is used only for men',
            'Because the ordinary future is not used in the dok / kad / ako half of the sentence; that half takes futur II',
            'Because dok always needs the past tense',
            'Because biti has no ordinary future',
          ],
          correct: 1,
          hint: 'Compare the two halves: which half has ćeš, and which one has budeš?',
          explanation:
            'When a clause with dok, kad, ako or čim points to the future, it takes futur II (budeš bila). The ordinary future stays in the main clause: spavat ćeš.',
        },
        {
          type: 'type',
          q: 'Now you. Roko, a man, promises the same thing: Kad budem ____ točan datum, javit ću ti. (znati)',
          answer: 'znao',
          hint: 'After budem comes the same form you use for the past tense — and it shows that the speaker is a man.',
          explanation:
            'Kad budem znao točan datum, javit ću ti. — budem carries the person, the l-participle the gender: znao for a man, znala for a woman.',
        },
        {
          type: 'transform',
          q: 'Nika said this about herself. Now say it about Nika and Roko together (mi).',
          from: 'Ako budem imala vremena, posjetit ću baku.',
          answer: 'Ako budemo imali vremena, posjetit ćemo baku.',
          hint: 'Three words change: the form of biti, the participle (a woman and a man together), and the future in the main clause.',
          explanation:
            'Ako budemo imali vremena, posjetit ćemo baku. — budemo for mi, the participle in the plural, and ćemo in the main clause.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences into one. Start with "Kad".',
          from: 'Bit ću u Splitu. Nazvat ću te.',
          answer: 'Kad budem u Splitu, nazvat ću te.',
          accept: [
            'Kad budem bio u Splitu, nazvat ću te.',
            'Kad budem bila u Splitu, nazvat ću te.',
            'Kada budem u Splitu, nazvat ću te.',
            'Kada budem bio u Splitu, nazvat ću te.',
            'Kada budem bila u Splitu, nazvat ću te.',
          ],
          hint: 'The "when" half cannot keep its ću. For biti, one word is enough there.',
          explanation:
            'Kad budem u Splitu, nazvat ću te. — in such a clause budem on its own means "I will be"; "budem bio / bila" is correct too.',
        },
      ],
    },
    mix: [
      7,
      10,
      6,
      {
        type: 'tf',
        q: '"Kad ću imati vremena, nazvat ću te" is a correct way to say "When I have time, I will call you".',
        answer: false,
        hint: 'English does not say "when I will have time" either.',
        explanation:
          'False. The ordinary future cannot stand in the "when" half. That half takes futur II: Kad budem imao vremena, nazvat ću te.',
      },
      9,
      {
        type: 'sort',
        q: 'A habit, or one occasion in the future?',
        groups: ['A habit — whenever', 'One occasion in the future'],
        items: [
          { hr: 'Kad imam vremena, čitam.', group: 0 },
          { hr: 'Kad budem imao vremena, čitat ću.', group: 1 },
          { hr: 'Ako pada kiša, ostajemo kod kuće.', group: 0 },
          { hr: 'Ako bude sunčano, ići ćemo na plažu.', group: 1 },
          { hr: 'Kad smo u Splitu, spavamo kod bake.', group: 0 },
          { hr: 'Kad budemo u Splitu, spavat ćemo kod bake.', group: 1 },
        ],
        explanation:
          'A present in both halves describes what happens whenever the condition is met. Futur II with the future in the main clause points to one occasion still to come.',
      },
      11,
      {
        type: 'match',
        q: 'Who will get in touch? Match each beginning to the rest of its sentence.',
        pairs: [
          ['Ako ja (Marko)', 'budem radio, javit ću se.'],
          ['Ako moja sestra', 'bude radila, javit će se.'],
          ['Ako brat i ja', 'budemo radili, javit ćemo se.'],
          ['Ako ti (Ana)', 'budeš radila, javit ćeš se.'],
          ['Ako moji roditelji', 'budu radili, javit će se.'],
        ],
        explanation:
          'Two things must fit the subject: the form of biti (budem, budeš, bude, budemo, budu) and the ending of the participle (-o, -la, -li).',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Kad', 'Marko', 'bude', 'znati', 'odgovor,', 'javit', 'će', 'se.'],
        wrong: 3,
        answer: 'znao',
        hint: 'After bude never the infinitive — use the form you know from the past tense, agreeing with Marko.',
        explanation:
          'Kad Marko bude znao odgovor, javit će se. — futur II is budem / budeš / bude… + the l-participle.',
      },
      3,
      {
        type: 'order',
        q: 'Put the words in order — to several people: "If you have questions, get in touch."',
        words: ['Ako', 'budete', 'imali', 'pitanja,', 'javite', 'se.'],
        accept: ['Javite se ako budete imali pitanja.'],
        explanation:
          'Ako budete imali pitanja, javite se. Futur II in the ako half, an imperative in the main clause.',
      },
      5,
      {
        type: 'transform',
        q: 'A man said this. Now a woman says it.',
        from: 'Čim budem završio posao, doći ću po tebe.',
        answer: 'Čim budem završila posao, doći ću po tebe.',
        hint: 'Only one word carries the speaker’s gender.',
        explanation:
          'Čim budem završila posao, doći ću po tebe. — budem stays; the participle agrees with the speaker.',
      },
      {
        type: 'listen',
        audio: 'Ako sutra bude padao snijeg, nećemo ići u školu.',
        q: 'What does the speaker say?',
        options: [
          'It snowed, so we did not go to school',
          'If it snows tomorrow, we will not go to school',
          'Whenever it snows, we do not go to school',
          'It will snow tomorrow, but we will go to school',
        ],
        correct: 1,
        explanation:
          'Ako sutra bude padao snijeg — if it snows tomorrow (futur II); nećemo ići u školu — we will not go to school.',
      },
      {
        type: 'dictate',
        audio: 'Kad budem u Zagrebu, javit ću ti se.',
        answer: 'Kad budem u Zagrebu, javit ću ti se.',
        hint: 'Eight words: "When I am in Zagreb, I will get in touch with you."',
        explanation:
          'Kad budem u Zagrebu, javit ću ti se. — budem alone means "I will be"; the short words ću ti se follow the infinitive in that order.',
      },
    ],
  },

  // ── Time clauses ───────────────────────────────────────────────────────────
  'time-clauses': {
    text: {
      kind: 'text',
      title: 'Poruka na hladnjaku',
      lines: [
        {
          hr: 'Dragi Leone, dok ti još spavaš, ja već putujem u Rijeku.',
          en: 'Dear Leon, while you are still asleep, I am already on my way to Rijeka.',
        },
        { hr: 'Čim ustaneš, daj mački jesti.', en: 'As soon as you get up, feed the cat.' },
        {
          hr: 'Prije nego što izađeš iz stana, zatvori sve prozore.',
          en: 'Before you leave the apartment, close all the windows.',
        },
        {
          hr: 'Nakon što ručaš, operi suđe. Ručak je u hladnjaku.',
          en: 'After you have lunch, wash the dishes. Lunch is in the fridge.',
        },
        {
          hr: 'Kad dođe poštar, potpiši se i uzmi paket.',
          en: 'When the mail carrier comes, sign and take the package.',
        },
        {
          hr: 'Nemoj gledati televiziju dok ne napišeš zadaću!',
          en: 'Do not watch TV until you have done your homework!',
        },
        {
          hr: 'Otkako imaš novi mobitel, rijetko mi se javljaš. Zato mi pošalji poruku čim ovo pročitaš.',
          en: 'Since you got your new cell phone, you rarely get in touch. So send me a message as soon as you read this.',
        },
        {
          hr: 'Vraćam se oko osam, kad završim sastanak. Voli te mama',
          en: 'I will be back around eight, when I finish my meeting. Love, Mom',
        },
      ],
      questions: [
        {
          q: 'Without looking back at the note: what must Leon do before he leaves the apartment, and what after lunch?',
          options: [
            'Feed the cat before leaving; take the package after lunch',
            'Close all the windows before leaving; wash the dishes after lunch',
            'Wash the dishes before leaving; do his homework after lunch',
            'Send a message before leaving; close the windows after lunch',
          ],
          correct: 1,
          hint: 'One task is about the apartment itself, the other about what is left on the table.',
          explanation:
            'Prije nego što izađeš iz stana, zatvori sve prozore. Nakon što ručaš, operi suđe.',
        },
        {
          q: 'Mom writes "Nemoj gledati televiziju dok ne napišeš zadaću!" When may Leon watch TV?',
          options: [
            'While he is doing his homework',
            'Only if he does not do his homework',
            'Once the homework is done — "dok ne" means "until"',
            'Never — the sentence has two negations',
          ],
          correct: 2,
          hint: 'The ne after dok is not a negation you translate. Together the two words make one connector.',
          explanation:
            'dok ne + a perfective verb means "until": no TV until the homework is written. Without ne, dok would mean "while".',
        },
        {
          type: 'type',
          q: 'Now you. Leon writes back: Javit ću ti se čim ____ zadaću. (napisati)',
          answer: 'napišem',
          hint: 'A time clause about the future takes no ću: use the present of the perfective verb, for ja.',
          explanation:
            'Javit ću ti se čim napišem zadaću. — after čim the perfective present points to the future; the ordinary future stays in the main clause.',
        },
        {
          type: 'transform',
          q: 'Mom wrote this to Leon. Now Leon promises it himself: keep "Prije nego što…" and use ću in the main clause.',
          from: 'Prije nego što izađeš, zatvori prozore.',
          answer: 'Prije nego što izađem, zatvorit ću prozore.',
          hint: 'The time clause keeps the present, now for ja. Only the main clause gets the future.',
          explanation:
            'Prije nego što izađem, zatvorit ću prozore. — present of the perfective in the time clause, future in the main clause.',
        },
        {
          type: 'transform',
          q: 'Join the two sentences with "čim". Remember: no future in the time clause.',
          from: 'Stići ću u Rijeku. Poslat ću ti poruku.',
          answer: 'Čim stignem u Rijeku, poslat ću ti poruku.',
          accept: ['Poslat ću ti poruku čim stignem u Rijeku.'],
          hint: 'stići is perfective, so its present does the job — and its present stem ends in -gn-.',
          explanation:
            'Čim stignem u Rijeku, poslat ću ti poruku. — stići → stignem; the future stays in the main clause only.',
        },
      ],
    },
    mix: [
      0,
      5,
      6,
      7,
      {
        type: 'match',
        q: 'Match each connector to its meaning.',
        pairs: [
          ['čim', 'as soon as'],
          ['dok', 'while'],
          ['otkako', 'since'],
          ['dok ne', 'until'],
          ['nakon što', 'after'],
        ],
        explanation:
          'čim — as soon as; dok — while; dok ne — until; otkako — since (from that time on); nakon što — after, followed by a whole clause.',
      },
      4,
      2,
      {
        type: 'sort',
        q: 'What does dok mean in each sentence?',
        groups: ['While', 'Until'],
        items: [
          { hr: 'Dok sam čekao, čitao sam.', group: 0 },
          { hr: 'Čekaj dok ne dođem.', group: 1 },
          { hr: 'Dok je mama kuhala, tata je spavao.', group: 0 },
          { hr: 'Ostani dok ne završi film.', group: 1 },
          { hr: 'Dok pada kiša, ostajemo unutra.', group: 0 },
          { hr: 'Ne idem dok ne pojedem.', group: 1 },
        ],
        explanation:
          'dok + an imperfective verb is "while" — two things going on together. dok ne + a perfective verb is "until" — the moment that ends the waiting.',
      },
      8,
      {
        type: 'fix',
        q: 'One word is wrong. Tap it.',
        words: ['Javi', 'mi', 'se', 'čim', 'kupio', 'kartu.'],
        wrong: 4,
        answer: 'kupiš',
        hint: 'The buying is still to come. After čim a future moment takes the present of the perfective verb — here for ti.',
        explanation:
          'Javi mi se čim kupiš kartu. — a time clause that points to the future takes the perfective present, not the past: kupiti → kupiš.',
      },
      {
        type: 'tf',
        q: '"Javit ću ti kad dođem" needs a comma before kad.',
        answer: false,
        hint: 'The comma depends on which half comes first.',
        explanation:
          'False. A comma follows the time clause when it comes FIRST: Kad dođem, javit ću ti. When the time clause comes second, there is usually no comma.',
      },
      9,
      {
        type: 'order',
        q: 'Put the words in order — politely, to a customer: "Before you sign the contract, read it carefully."',
        words: ['Prije', 'nego', 'što', 'potpišete', 'ugovor,', 'pažljivo', 'ga', 'pročitajte.'],
        accept: ['Prije nego što potpišete ugovor, pročitajte ga pažljivo.'],
        explanation:
          'Prije nego što potpišete ugovor, pažljivo ga pročitajte. The three-word connector opens the time clause, and the short word ga takes second place in the main clause.',
      },
      {
        type: 'transform',
        q: 'Join the two sentences into one. Start with "Nakon što".',
        from: 'Večerali smo. Onda smo izašli.',
        answer: 'Nakon što smo večerali, izašli smo.',
        accept: ['Nakon što smo večerali, izašli smo van.'],
        hint: 'The connector comes first, the short word smo right after it — and "onda" is no longer needed.',
        explanation:
          'Nakon što smo večerali, izašli smo. — nakon što introduces the earlier action; the comma closes the time clause.',
      },
      {
        type: 'listen',
        audio: 'Otkako živim u Zagrebu, svaki dan idem na posao tramvajem.',
        q: 'What do we learn about the speaker?',
        options: [
          'He will move to Zagreb and take the streetcar',
          'Before he moved to Zagreb, he took the streetcar',
          'Ever since he has lived in Zagreb, he has taken the streetcar to work every day',
          'He takes the streetcar until he gets to Zagreb',
        ],
        correct: 2,
        explanation:
          'Otkako živim u Zagrebu — since I have been living in Zagreb; svaki dan idem na posao tramvajem — I go to work by streetcar every day.',
      },
      {
        type: 'dictate',
        audio: 'Čim završim posao, idem kući.',
        answer: 'Čim završim posao, idem kući.',
        hint: 'Five words: "As soon as I finish work, I am going home."',
        explanation:
          'Čim završim posao, idem kući. — the perfective present after čim, and a comma after the time clause.',
      },
    ],
  },
};
