// functions/api/content/_data/b1new/batch01.js
//
// New B1 lessons, batch 01 (Croaticum restructure, stage 4, 2026-11-12). See b1new/index.js.
//
// Razgovarajte s nama! A2-B1, lesson 6 (Odnosi, izgled, budućnost): irregular comparison
// and the superlative, comparative adverbs, character traits, appearance and compliments,
// and the second future (futur II).
//
// What the learner already has at this point of B1: every noun case and personal pronoun,
// adjectives, demonstratives and possessives in the nominative, accusative, dative and
// locative, the regular comparative (comparatives-a2), adverbs, aspect, the conditional.
// NOT yet: adjectives in the genitive or instrumental (B1 lessons 14 and 22), so nothing
// here puts an adjective in either case — "od" is always followed by a noun or a
// pronoun, and every "than" with an adjective phrase uses nego.

/** Spine entries for this batch. `masterOrder` is the lesson's final B1 position. */
export const SPINE = [
  {
    id: 'superlatives-irregular',
    masterOrder: 2,
    prerequisites: ['comparatives-a2'],
    objectives: [
      'Use the irregular comparatives bolji, gori, veći, manji, duži without guessing',
      'Build the superlative with naj- and say where something is best (u + locative)',
      'Decline comparatives and superlatives in the cases you already know',
    ],
  },
  {
    id: 'comparative-adverbs',
    masterOrder: 3,
    prerequisites: ['superlatives-irregular', 'adverbs'],
    objectives: [
      'Say that something is done faster, better, more or less: brže, bolje, više, manje',
      'Choose between od + genitive and nego for "than"',
      'Use sve bolje, što prije and što više… to više',
    ],
  },
  {
    id: 'character-traits',
    masterOrder: 4,
    prerequisites: ['comparative-adverbs', 'describing-people'],
    objectives: [
      'Describe what someone is like: vrijedan, iskren, strpljiv, tvrdoglav',
      'Compare two people’s characters with the comparative',
      'Soften or sharpen a judgement with malo, pomalo, previše, jako',
    ],
  },
  {
    id: 'appearance-compliments',
    masterOrder: 5,
    prerequisites: ['character-traits', 'verbs-with-dative-a2'],
    objectives: [
      'Describe someone’s appearance: hair, eyes, height, glasses',
      'Pay a compliment with izgledati and stajati: Ta ti haljina stoji',
      'Accept a compliment the way Croatians do, modestly and politely',
    ],
  },
  {
    id: 'future-ii',
    masterOrder: 9,
    prerequisites: ['aspect-perfective'],
    objectives: [
      'Form the second future: budem, budeš, bude… + the l-participle',
      'Use it after kad, ako, čim and dok when the clause points at the future',
      'Know why the ordinary future is wrong there, and when the present will do',
    ],
  },
];

/** Lesson bodies (same shape as lessonsB1.js). */
export const LESSONS = [
  // ─────────────────────────────────────────────────────────
  // Irregular comparison and the superlative
  // ─────────────────────────────────────────────────────────
  {
    id: 'superlatives-irregular',
    title: 'Better, Worse, the Biggest',
    subtitle: 'Irregular comparatives, the superlative, and both in every case you know',
    icon: '🏆',
    level: 'B1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The Words You Use Most Are the Irregular Ones',
        body: 'You already build regular comparatives: pametan → pametniji (smarter). But the adjectives you reach for most often — good, bad, big, small, long, tall — do not follow that pattern, in Croatian exactly as in English (good → better, not "gooder"). This lesson gathers them, adds the superlative ("the best", "the biggest"), and shows that both are ordinary adjectives that change their endings in every case you know.',
        icon: '🏆',
      },
      {
        type: 'rule',
        title: 'Five to Learn as Whole Words',
        body: 'dobar (good) → bolji (better). loš (bad) and zao (bad, evil) → gori (worse) — the book pairs gori with zao, and loš shares it. velik (big) → veći (bigger). malen or mali (small) → manji (smaller). dug or dugačak (long) → duži or dulji (longer). Both duži and dulji are standard Croatian — you will hear and read both. A few more show a sound change you can learn with them: mio (dear) → miliji, drag (dear) → draži, tanak (thin) → tanji, debeo (fat, thick) → deblji, sladak (sweet) → slađi. For loš, the regular lošiji also exists, but gori is the everyday word. None of these can be worked out from a rule, so learn each pair together, the way you learned good–better.',
        highlight: 'dobar → bolji, loš → gori, velik → veći, malen → manji, dug → duži',
      },
      {
        type: 'table',
        title: 'Positive, Comparative, Superlative',
        headers: ['Positive', 'Comparative', 'Superlative', 'English'],
        rows: [
          ['dobar', 'bolji', 'najbolji', 'good, better, best'],
          ['loš / zao', 'gori', 'najgori', 'bad, worse, worst'],
          ['velik', 'veći', 'najveći', 'big, bigger, biggest'],
          ['malen / mali', 'manji', 'najmanji', 'small, smaller, smallest'],
          ['dug / dugačak', 'duži (dulji)', 'najduži (najdulji)', 'long, longer, longest'],
          ['drag', 'draži', 'najdraži', 'dear, dearer, dearest'],
          ['sladak', 'slađi', 'najslađi', 'sweet, sweeter, sweetest'],
          ['kratak', 'kraći', 'najkraći', 'short, shorter, shortest'],
          ['visok', 'viši', 'najviši', 'tall/high, taller, tallest'],
          ['nizak', 'niži', 'najniži', 'low/short, lower, lowest'],
          ['širok', 'širi', 'najširi', 'wide, wider, widest'],
          ['dubok', 'dublji', 'najdublji', 'deep, deeper, deepest'],
          ['težak', 'teži', 'najteži', 'heavy/hard, harder, hardest'],
          ['skup', 'skuplji', 'najskuplji', 'expensive, dearer, dearest'],
        ],
      },
      {
        type: 'rule',
        title: 'Why kratak Becomes kraći',
        body: 'Most adjectives in the lower half of the table lose their last syllable (-ak, -ok) and then take the short ending -ji, which melts into the consonant before it: kratak → krat + ji → kraći, visok → vis + ji → viši, nizak → niz + ji → niži, širok → šir + ji → širi. After b and p an l appears: dubok → dublji, skup → skuplji. You do not need to apply this on the spot — it explains why the forms look the way they do, which makes them easier to remember.',
        highlight: 'kratak → kraći, visok → viši, dubok → dublji',
      },
      {
        type: 'rule',
        title: 'The Superlative: naj- + the Comparative',
        body: 'Put naj- in front of the comparative and you have the superlative: bolji → najbolji (best), veći → najveći (biggest), skuplji → najskuplji (most expensive). There is nothing else to learn — if you know the comparative, you know the superlative. To say where something is the best, use u + locative: najbolja kava u gradu (the best coffee in town), najveći grad u Hrvatskoj (the biggest city in Croatia). When the comparative begins with j, the j doubles: jeftiniji → najjeftiniji (cheapest).',
        highlight: 'naj- + comparative = superlative',
      },
      {
        type: 'rule',
        title: 'They Decline Like Any Adjective',
        body: 'Comparatives and superlatives are adjectives, so they agree with their noun in gender, number and case. They take the SOFT endings (the ones with e, like naš → našem): masculine and neuter dative and locative in -em (u većem stanu, mlađem bratu), feminine accusative in -u and dative/locative in -oj (u boljoj školi, starijoj sestri), and a masculine animate accusative in -eg (Imam mlađeg brata). Plural dative and locative end in -im: u većim gradovima.',
        highlight: 'u većem stanu, mlađem bratu, u boljoj školi',
      },
      {
        type: 'table',
        title: 'bolji in the Cases You Know',
        headers: ['Case', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['Nominative', 'bolji stan', 'bolja škola', 'bolje mjesto'],
          ['Accusative', 'bolji stan / boljeg brata', 'bolju školu', 'bolje mjesto'],
          ['Dative', 'boljem bratu', 'boljoj sestri', 'boljem djetetu'],
          ['Locative', 'u boljem stanu', 'u boljoj školi', 'u boljem mjestu'],
        ],
      },
      {
        type: 'example',
        title: 'Comparing Things',
        items: [
          {
            hr: 'Moj stan je manji nego tvoj, ali je bliži centru.',
            en: 'My flat is smaller than yours, but it is closer to the centre.',
            note: 'manji — irregular comparative of malen; bliži takes the dative, like blizak',
          },
          {
            hr: 'Danas je vrijeme gore nego jučer.',
            en: 'The weather is worse today than yesterday.',
            note: 'gore — neuter of gori, agreeing with vrijeme',
          },
          {
            hr: 'Sava je duža od Drave.',
            en: 'The Sava is longer than the Drava.',
            note: 'duža — feminine, agreeing with Sava; dulja is equally correct',
          },
          {
            hr: 'Ovaj ispit je bio lakši nego prošli.',
            en: 'This exam was easier than the last one.',
            note: 'nego + nominative: compare like with like',
          },
          {
            hr: 'Imam mlađeg brata i stariju sestru.',
            en: 'I have a younger brother and an older sister.',
            note: 'mlađeg — animate accusative; stariju — feminine accusative',
          },
          {
            hr: 'Živimo u većem stanu nego prije.',
            en: 'We live in a bigger flat than before.',
            note: 'većem — locative after u, soft ending -em',
          },
          {
            hr: 'Kupila sam skuplju haljinu, ali je i bolja.',
            en: 'I bought the more expensive dress, but it is also better.',
            note: 'skuplju — accusative of skuplja',
          },
          {
            hr: 'Daj veći komad mlađem djetetu.',
            en: 'Give the bigger piece to the younger child.',
            note: 'mlađem — dative of mlađe, agreeing with dijete',
          },
        ],
      },
      {
        type: 'example',
        title: 'The Best, the Biggest',
        items: [
          {
            hr: 'Zagreb je najveći grad u Hrvatskoj.',
            en: 'Zagreb is the biggest city in Croatia.',
            note: 'najveći + u + locative for "in"',
          },
          {
            hr: 'Dinara je najviši vrh u Hrvatskoj.',
            en: 'Dinara is the highest peak in Croatia.',
            note: 'najviši — superlative of visok',
          },
          {
            hr: 'Krk i Cres su najveći otoci na Jadranu.',
            en: 'Krk and Cres are the biggest islands in the Adriatic.',
            note: 'plural najveći, agreeing with otoci',
          },
          {
            hr: 'Ponedjeljak mi je najgori dan u tjednu.',
            en: 'Monday is my worst day of the week.',
            note: 'najgori — superlative of loš',
          },
          {
            hr: 'U najboljoj slastičarnici u gradu uvijek je gužva.',
            en: 'There is always a crowd in the best cake shop in town.',
            note: 'najboljoj — feminine locative',
          },
          {
            hr: 'Ana je najbolja učenica u razredu.',
            en: 'Ana is the best pupil in the class.',
            note: 'najbolja — feminine, agreeing with učenica',
          },
          {
            hr: 'Ovo je najkraći put do mora.',
            en: 'This is the shortest way to the sea.',
            note: 'najkraći — superlative of kratak',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which is the comparative of "dobar"?',
        options: ['dobriji', 'bolji', 'više dobar', 'najbolji'],
        correct: 1,
        explanation:
          'dobar has an irregular comparative, bolji — just as English has better, not "gooder". najbolji is the superlative, one step further.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Živimo u ___ stanu nego prije." (bigger)',
        options: ['veći', 'većem', 'većoj', 'većeg'],
        correct: 1,
        explanation:
          'u + locative, masculine stan: the soft locative ending -em, većem. veći is the nominative; većoj is feminine.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) Putting a regular ending on an irregular adjective: dobriji, velikiji and maliji do not exist — say bolji, veći, manji. (2) Building the comparative from više + the plain adjective, as English does with "more": više dobar is wrong, bolji is right. (3) Forgetting that a comparative declines: Živim u veći stan is wrong after u for location — the comparative takes the locative like any adjective, Živim u većem stanu. (4) Using od in front of an adjective phrase you have not met in the genitive yet: when in doubt, nego plus the same case is always correct.',
        highlight: 'Živim u većem stanu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Moj auto je ___ nego tvoj." (good — comparative)',
            options: ['dobriji', 'bolji', 'najbolji', 'više dobar'],
            correct: 1,
            explanation:
              'dobar → bolji is irregular. dobriji does not exist, više dobar copies English, and najbolji is the superlative, which does not combine with nego.',
          },
          {
            q: 'Complete: "Živimo u ___ gradu." (smaller)',
            options: ['manjem', 'manji', 'manjoj', 'manjeg'],
            correct: 0,
            explanation:
              'u + locative, masculine grad: manjem. manji is the nominative, manjoj is feminine, and manjeg is the animate accusative.',
          },
          {
            q: 'Complete: "Danas je vrijeme ___ nego jučer." (worse)',
            options: ['gori', 'gora', 'gore', 'najgori'],
            correct: 2,
            explanation:
              'vrijeme is neuter, so the comparative takes the neuter form gore. A superlative cannot stand with nego.',
          },
          {
            q: 'Which is the comparative of "kratak"?',
            options: ['kratkiji', 'krataći', 'kratši', 'kraći'],
            correct: 3,
            explanation:
              'kratak drops -ak and takes -ji, which melts the t into ć: kraći. The other three do not exist.',
          },
          {
            q: 'Complete: "Ana je ___ učenica u razredu." (the best)',
            options: ['bolja', 'najbolji', 'najbolja', 'najboljoj'],
            correct: 2,
            explanation:
              'The superlative naj- + bolja, feminine nominative to agree with učenica. bolja is only "better"; najboljoj is the dative/locative.',
          },
          {
            q: 'Complete: "Imam ___ brata." (younger)',
            options: ['mlađi', 'mlađem', 'mlađeg', 'mlađu'],
            correct: 2,
            explanation:
              'brat is a living masculine noun in the accusative, so the adjective takes the animate accusative: mlađeg brata.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Irregular Comparison — Key Takeaways',
        points: [
          'dobar → bolji, loš → gori, velik → veći, malen → manji, dug → duži (dulji)',
          'kratak → kraći, visok → viši, nizak → niži, dubok → dublji, skup → skuplji',
          'Superlative = naj- + comparative: najbolji, najveći, najjeftiniji',
          '"The best in…" = u + locative: najveći grad u Hrvatskoj',
          'They decline with soft endings: u većem stanu, mlađem bratu, u boljoj školi',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Comparative adverbs
  // ─────────────────────────────────────────────────────────
  {
    id: 'comparative-adverbs',
    title: 'Faster, Better, More',
    subtitle: 'Comparing how things are done — and the two ways to say "than"',
    icon: '🏃',
    level: 'B1',
    duration: '~7 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'Comparing Actions, Not Things',
        body: 'An adjective compares things: Ivan je brži (Ivan is faster). An adverb compares how something is DONE: Ivan trči brže (Ivan runs faster). Croatian makes the adverb in one step from the comparative you already know, and adds three handy patterns — "better and better", "as soon as possible" and "the more…, the more…".',
        icon: '🏃',
      },
      {
        type: 'rule',
        title: 'The Comparative Adverb = the Neuter Comparative',
        body: 'Take the comparative adjective and use its neuter form, the one ending in -e: brži → brže (faster), sporiji → sporije (more slowly), glasniji → glasnije (louder), bolji → bolje (better), gori → gore (worse), lakši → lakše (more easily). This is the same pattern as brz → brzo for the plain adverb — the neuter form doubles as the adverb.',
        highlight: 'brži → brže, bolji → bolje',
      },
      {
        type: 'table',
        title: 'Adverb, Comparative, Superlative',
        headers: ['Adverb', 'Comparative', 'Superlative', 'English'],
        rows: [
          ['brzo', 'brže', 'najbrže', 'fast, faster, fastest'],
          ['sporo', 'sporije', 'najsporije', 'slowly, more slowly, most slowly'],
          ['dobro', 'bolje', 'najbolje', 'well, better, best'],
          ['loše', 'gore', 'najgore', 'badly, worse, worst'],
          ['mnogo / puno', 'više', 'najviše', 'much, more, most'],
          ['malo', 'manje', 'najmanje', 'little, less, least'],
          ['često', 'češće', 'najčešće', 'often, more often, most often'],
          ['rijetko', 'rjeđe', 'najrjeđe', 'rarely, more rarely, most rarely'],
          ['rano', 'ranije', 'najranije', 'early, earlier, earliest'],
          ['kasno', 'kasnije', 'najkasnije', 'late, later, latest'],
        ],
      },
      {
        type: 'rule',
        title: '"Than": od or nego',
        body: 'With a noun or a pronoun you have two choices. od + genitive: Govori brže od mene (She speaks faster than me). nego + the SAME case as the thing compared: Govori brže nego ja (She speaks faster than I do). Both are correct. But only nego works in front of anything that is not a plain noun or pronoun — an adverb, a time word, a phrase with a preposition, an infinitive: Danas je toplije nego jučer. Više volim čaj nego kavu. U Splitu je toplije nego u Zagrebu.',
        highlight: 'Govori brže od mene. = Govori brže nego ja.',
      },
      {
        type: 'rule',
        title: 'Three Useful Patterns',
        body: 'sve + comparative = more and more: Govoriš sve bolje (You speak better and better). što + comparative = as … as possible: Dođi što prije (Come as soon as possible), Piši što češće (Write as often as you can). što + comparative …, to + comparative = the more …, the more: Što više čitaš, to bolje pišeš (The more you read, the better you write).',
        highlight: 'Što više čitaš, to bolje pišeš.',
      },
      {
        type: 'rule',
        title: 'Adjective or Adverb?',
        body: 'Ask what you are describing. A person or a thing → adjective, agreeing with it: On je bolji pjevač (He is a better singer). Ona je brža (She is faster). An action → adverb, which never changes: On bolje pjeva (He sings better). Ona brže trči (She runs faster). One more: više volim + infinitive or noun means "I prefer": Više volim čitati nego gledati televiziju.',
        highlight: 'On je bolji pjevač. On bolje pjeva.',
      },
      {
        type: 'example',
        title: 'How Things Are Done',
        items: [
          {
            hr: 'Ivan trči brže od mene.',
            en: 'Ivan runs faster than me.',
            note: 'brže — adverb; od + genitive pronoun mene',
          },
          {
            hr: 'Ivan trči brže nego ja.',
            en: 'Ivan runs faster than I do.',
            note: 'nego + nominative ja — the same meaning',
          },
          {
            hr: 'Molim vas, govorite malo sporije.',
            en: 'Please speak a little more slowly.',
            note: 'sporije — the sentence every learner needs',
          },
          {
            hr: 'Danas je toplije nego jučer.',
            en: 'It is warmer today than yesterday.',
            note: 'only nego before a time word',
          },
          {
            hr: 'Više volim čaj nego kavu.',
            en: 'I prefer tea to coffee.',
            note: 'nego + accusative, matching čaj',
          },
          {
            hr: 'Govoriš hrvatski sve bolje.',
            en: 'You speak Croatian better and better.',
            note: 'sve + comparative = more and more',
          },
          {
            hr: 'Javi mi se što prije.',
            en: 'Get in touch as soon as possible.',
            note: 'što + comparative = as … as possible',
          },
          {
            hr: 'Što više vježbaš, to manje griješiš.',
            en: 'The more you practise, the fewer mistakes you make.',
            note: 'što …, to … = the more …, the …',
          },
        ],
      },
      {
        type: 'example',
        title: 'The Most, the Least',
        items: [
          {
            hr: 'Moja baka kuha najbolje na svijetu.',
            en: 'My grandmother cooks the best in the world.',
            note: 'najbolje — superlative adverb',
          },
          {
            hr: 'Najviše volim plivati u moru.',
            en: 'What I like most is swimming in the sea.',
            note: 'najviše volim = I like most of all',
          },
          {
            hr: 'U Splitu je ljeti toplije nego u Zagrebu.',
            en: 'In summer it is warmer in Split than in Zagreb.',
            note: 'nego before a phrase with a preposition',
          },
          {
            hr: 'Moramo jesti manje šećera.',
            en: 'We have to eat less sugar.',
            note: 'manje + genitive, like malo',
          },
          {
            hr: 'Autobusi voze rjeđe nedjeljom.',
            en: 'Buses run less often on Sundays.',
            note: 'rjeđe — comparative of rijetko',
          },
          {
            hr: 'Bolje kasno nego nikad.',
            en: 'Better late than never.',
            note: 'a proverb with two adverbs and nego',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which says "He sings better than me"?',
        options: [
          'On pjeva bolji od mene.',
          'On pjeva bolje od mene.',
          'On pjeva dobro od mene.',
          'On pjeva najbolje od mene.',
        ],
        correct: 1,
        explanation:
          'Singing is an action, so the adverb: bolje. bolji is the adjective, dobro is not a comparative, and najbolje is the superlative.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Danas je hladnije ___ jučer."',
        options: ['od', 'nego', 'kao', 'do'],
        correct: 1,
        explanation:
          'Before a time word like jučer only nego works. od needs a noun or pronoun in the genitive after it.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) The adjective where the adverb belongs: On pjeva bolji is wrong — he SINGS better, so On pjeva bolje. (2) od in front of a time word or a phrase: Toplije je od jučer is wrong — Toplije je nego jučer. (3) Mixing cases after nego: Više volim čaj nego kava is wrong, because čaj is an object (accusative), so the second item matches it — Više volim čaj nego kavu. (4) Copying English "more" with više + adverb: više brzo is wrong; the comparative is one word, brže.',
        highlight: 'Više volim čaj nego kavu',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Molim vas, govorite ___." (more slowly)',
            options: ['spor', 'sporiji', 'sporije', 'najsporiji'],
            correct: 2,
            explanation:
              'Speaking is an action, so the comparative adverb, which is the neuter form in -e: sporije.',
          },
          {
            q: 'Complete: "Marko trči brže ___ ja."',
            options: ['od', 'nego', 'kao', 'što'],
            correct: 1,
            explanation:
              'ja is the nominative, so it needs nego. With od the pronoun would be in the genitive: od mene.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Više volim čitati nego gledati televiziju.',
              'Više volim čitati od gledati televiziju.',
              'Volim više čitati nego gledam televiziju.',
              'Više volim čitati kao gledati televiziju.',
            ],
            correct: 0,
            explanation:
              'Two infinitives are compared with nego, and the second matches the first. od needs a noun in the genitive; kao means "as/like".',
          },
          {
            q: 'What does "Dođi što prije" mean?',
            options: [
              'Come before me.',
              'Come earlier than yesterday.',
              'Come more often.',
              'Come as soon as possible.',
            ],
            correct: 3,
            explanation: 'što + comparative = as … as possible; prije means sooner, earlier.',
          },
          {
            q: 'Complete: "Što više čitaš, ___ bolje pišeš."',
            options: ['što', 'nego', 'to', 'sve'],
            correct: 2,
            explanation: 'The pattern is što …, to …: the more you read, the better you write.',
          },
          {
            q: 'Which is the comparative adverb of "često"?',
            options: ['češće', 'čestije', 'više često', 'najčešće'],
            correct: 0,
            explanation:
              'često → češće (st + j melts into šć). najčešće is the superlative, and više često copies English.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Comparative Adverbs — Key Takeaways',
        points: [
          'The comparative adverb is the neuter comparative: brže, bolje, sporije',
          'mnogo → više, malo → manje, često → češće, rijetko → rjeđe',
          'Superlative adverb: najbrže, najbolje, najviše',
          'od + genitive or nego + same case; before time words and phrases only nego',
          'sve bolje (better and better), što prije (as soon as possible), što više…, to…',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Character traits
  // ─────────────────────────────────────────────────────────
  {
    id: 'character-traits',
    title: 'What Kind of Person?',
    subtitle: 'Character traits, their opposites, and comparing people',
    icon: '🤝',
    level: 'B1',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Beyond Tall and Short',
        body: 'Describing what someone LOOKS like needs a dozen words. Describing what someone IS like — hardworking, honest, stubborn, patient — is where real conversation about friends, family and colleagues lives. This lesson gives you the core traits, the quick way to build their opposites, and the comparatives you need to say who is more patient than whom.',
        icon: '🤝',
      },
      {
        type: 'table',
        title: 'Core Character Traits',
        headers: ['Croatian (m / f)', 'English', 'Opposite'],
        rows: [
          ['vrijedan / vrijedna', 'hardworking', 'lijen / lijena (lazy)'],
          ['iskren / iskrena', 'honest, sincere', 'neiskren'],
          ['ljubazan / ljubazna', 'kind, friendly', 'neljubazan'],
          ['strpljiv / strpljiva', 'patient', 'nestrpljiv'],
          ['pošten / poštena', 'fair, honest', 'nepošten'],
          ['pouzdan / pouzdana', 'reliable', 'nepouzdan'],
          ['tvrdoglav / tvrdoglava', 'stubborn', 'popustljiv (yielding, indulgent)'],
          ['hrabar / hrabra', 'brave', 'plašljiv (timid)'],
          ['duhovit / duhovita', 'witty, funny', 'dosadan (boring)'],
          ['sramežljiv / sramežljiva', 'shy', 'druželjubiv (sociable)'],
          ['velikodušan / velikodušna', 'generous', 'škrt (stingy)'],
          ['skroman / skromna', 'modest', 'umišljen (conceited)'],
        ],
      },
      {
        type: 'rule',
        title: 'Opposites with ne-',
        body: 'Many traits make their opposite simply with ne- written together with the adjective: iskren → neiskren, strpljiv → nestrpljiv, pošten → nepošten, pouzdan → nepouzdan, ljubazan → neljubazan. Not every one works the way you expect: nevrijedan does exist, but it means worthless or unworthy, not lazy — the opposite of vrijedan (hardworking) is lijen. Learn the pairs from the table, and use ne- freely on the ones it shows.',
        highlight: 'strpljiv → nestrpljiv',
      },
      {
        type: 'rule',
        title: 'The Disappearing a',
        body: 'Adjectives ending in -an or -ar lose that a as soon as an ending is added: ljubazan → ljubazna, vrijedan → vrijedna, skroman → skromna, hrabar → hrabra, velikodušan → velikodušni (plural). You met this with pametan → pametna. It is the most common spelling slip in this topic, so say the feminine aloud: a "ljubazana" sounds wrong to a Croatian ear.',
        highlight: 'ljubazan → ljubazna',
      },
      {
        type: 'rule',
        title: 'Comparing Characters',
        body: 'Traits are ordinary adjectives, so they take the regular comparative -iji: strpljiv → strpljiviji, iskren → iskreniji, tvrdoglav → tvrdoglaviji, ljubazan → ljubazniji, hrabar → hrabriji, duhovit → duhovitiji. Ona je strpljivija od mene. Moj brat je tvrdoglaviji nego ja. To soften or sharpen a judgement put a word in front: malo or pomalo (a bit), jako or vrlo (very), previše (too): Pomalo je tvrdoglav. Previše je ozbiljan.',
        highlight: 'Ona je strpljivija od mene.',
      },
      {
        type: 'rule',
        title: 'Words That Look Alike but Judge Differently',
        body: 'Croatian, like English, has pairs where one word praises and the other criticises the same behaviour. štedljiv (thrifty) is a compliment; škrt (stingy) is not. duhovit means witty — someone who makes you laugh on purpose; smiješan can mean funny, but said of a person it often means ridiculous. siguran u sebe (self-confident) is good; umišljen (conceited) is not. Choosing the right one is half of describing someone fairly.',
        highlight: 'štedljiv, not škrt',
      },
      {
        type: 'example',
        title: 'Describing People',
        items: [
          {
            hr: 'Kakav je tvoj novi šef? Strog je, ali pošten.',
            en: 'What is your new boss like? Strict, but fair.',
            note: 'Kakav je…? = What is … like?',
          },
          {
            hr: 'Ivan je vrijedan i pouzdan, ali je pomalo tvrdoglav.',
            en: 'Ivan is hardworking and reliable, but a bit stubborn.',
            note: 'pomalo softens the criticism',
          },
          {
            hr: 'Kolegica mi je jako ljubazna i uvijek mi rado pomaže.',
            en: 'My colleague is very kind and always glad to help me.',
            note: 'ljubazna — the a of ljubazan disappears',
          },
          {
            hr: 'Nije škrt, samo je štedljiv.',
            en: 'He is not stingy, just thrifty.',
            note: 'the compliment and the criticism side by side',
          },
          {
            hr: 'Najviše cijenim iskrenost i poštenje.',
            en: 'What I value most is honesty and fairness.',
            note: 'the nouns: iskrenost, poštenje',
          },
          {
            hr: 'Previše je ozbiljan za svoje godine.',
            en: 'He is too serious for his age.',
            note: 'previše = too',
          },
          {
            hr: 'Moja sestra je sramežljiva, a ja sam druželjubiviji.',
            en: 'My sister is shy, and I am more sociable.',
            note: 'a = whereas, for a contrast',
          },
          {
            hr: 'Duhovit je i uvijek nas zabavlja.',
            en: 'He is witty and always entertains us.',
            note: 'duhovit — funny on purpose',
          },
        ],
      },
      {
        type: 'table',
        title: 'Strong as a Lion: Character Similes',
        headers: ['Croatian', 'Literally', 'Meaning'],
        rows: [
          ['vrijedan kao mrav', 'hardworking as an ant', 'very hardworking'],
          ['hrabar kao lav', 'brave as a lion', 'very brave'],
          ['mudar kao sova', 'wise as an owl', 'very wise'],
          ['tvrdoglav kao magarac', 'stubborn as a donkey', 'very stubborn'],
          ['dosadan kao muha', 'annoying as a fly', 'a real pest, very annoying'],
          ['glup kao guska', 'stupid as a goose', 'very silly'],
          ['lijep kao slika', 'beautiful as a picture', 'very beautiful'],
        ],
      },
      {
        type: 'rule',
        title: 'kao + an Animal',
        body: 'Croatian sharpens a trait with kao (like) and an animal, the way English says "as busy as a bee". The adjective agrees with the person and the animal stays in the nominative: Ona je vrijedna kao mrav. On je tvrdoglav kao magarac. Note dosadan kao muha: a fly is not boring, it is irritating, so dosadan here means annoying. The positive ones (hrabar kao lav, mudar kao sova, lijepa kao slika) are compliments; glup kao guska and tvrdoglav kao magarac are not, so keep them for friends who can take a joke.',
        highlight: 'Ona je vrijedna kao mrav.',
      },
      {
        type: 'example',
        title: 'Comparing Characters',
        items: [
          {
            hr: 'Ona je strpljivija od mene.',
            en: 'She is more patient than me.',
            note: 'strpljivija — comparative of strpljiva',
          },
          {
            hr: 'Moj brat je tvrdoglaviji nego ja.',
            en: 'My brother is more stubborn than I am.',
            note: 'nego + nominative',
          },
          {
            hr: 'Djeca su često iskrenija nego odrasli.',
            en: 'Children are often more honest than adults.',
            note: 'iskrenija — agreeing with djeca; nego + nominative odrasli',
          },
          {
            hr: 'Moja najbolja prijateljica je najhrabrija u našem društvu.',
            en: 'My best friend is the bravest in our group.',
            note: 'najhrabrija — superlative of hrabra',
          },
          {
            hr: 'Kakvi su tvoji novi kolege? Ljubazni su, ali malo nepouzdani.',
            en: 'What are your new colleagues like? Friendly, but a bit unreliable.',
            note: 'plural Kakvi su…?',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Moja mama je jako ___." (kind)',
        options: ['ljubazan', 'ljubazana', 'ljubazna', 'ljubazno'],
        correct: 2,
        explanation:
          'Feminine, and the a of ljubazan drops when the ending is added: ljubazna. ljubazno is the adverb.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which is the opposite of "strpljiv"?',
        options: ['nestrpljiv', 'lijen', 'tvrdoglav', 'škrt'],
        correct: 0,
        explanation: 'ne- + strpljiv = nestrpljiv, impatient.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) Keeping the fleeting a: Ona je ljubazana is wrong — Ona je ljubazna. (2) Making the opposite of vrijedan with ne-: nevrijedan means worthless, not lazy — say lijen. (3) Forgetting agreement when comparing: Ana je strpljiviji od brata is wrong — Ana is feminine, so Ana je strpljivija od brata. (4) Calling a careful saver škrt when you mean it kindly: that is štedljiv.',
        highlight: 'Ana je strpljivija od brata',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Moja sestra je vrlo ___." (hardworking)',
            options: ['vrijedan', 'vrijedna', 'vrijedana', 'vrijedno'],
            correct: 1,
            explanation: 'Feminine, with the a of vrijedan dropped: vrijedna.',
          },
          {
            q: 'Complete: "Ana je ___ od brata." (more patient)',
            options: ['strpljiviji', 'strpljivija', 'najstrpljivija', 'strpljiva'],
            correct: 1,
            explanation:
              'The comparative, agreeing with Ana: strpljivija. strpljiviji is masculine; strpljiva is not a comparative.',
          },
          {
            q: 'Which word praises someone who is careful with money?',
            options: ['škrt', 'umišljen', 'lijen', 'štedljiv'],
            correct: 3,
            explanation: 'štedljiv (thrifty) is a compliment; škrt (stingy) is a criticism.',
          },
          {
            q: 'Which is the opposite of "pouzdan"?',
            options: ['nepouzdan', 'pošten', 'iskren', 'hrabar'],
            correct: 0,
            explanation: 'ne- + pouzdan = nepouzdan, unreliable.',
          },
          {
            q: 'Complete: "Kakav je tvoj šef? — Strog je, ali ___." (fair)',
            options: ['poštena', 'pošteno', 'pošten', 'poštenje'],
            correct: 2,
            explanation: 'šef is masculine, so pošten. poštenje is the noun, pošteno the adverb.',
          },
          {
            q: 'What does "Pomalo je tvrdoglav" say?',
            options: [
              'He is far too stubborn.',
              'He is not stubborn at all.',
              'He is a bit stubborn.',
              'He is more stubborn than me.',
            ],
            correct: 2,
            explanation: 'pomalo softens a judgement: a bit, somewhat.',
          },
          {
            q: 'Complete: "Ona je hrabra kao ___." (as brave as a lion)',
            options: ['sova', 'mrav', 'lav', 'guska'],
            correct: 2,
            explanation: 'hrabar kao lav. The animal stays in the nominative after kao.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Character Traits — Key Takeaways',
        points: [
          'vrijedan, iskren, ljubazan, strpljiv, pošten, pouzdan, tvrdoglav, duhovit',
          'Many opposites take ne-: nestrpljiv, neiskren, nepouzdan; vrijedan ↔ lijen',
          'The a of -an / -ar drops: ljubazna, vrijedna, hrabra',
          'Compare with -iji: strpljiviji, iskreniji, tvrdoglaviji',
          'pomalo, jako, previše soften or sharpen; štedljiv praises, škrt criticises',
          'Similes: vrijedan kao mrav, hrabar kao lav, tvrdoglav kao magarac — the animal stays nominative',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Appearance and compliments
  // ─────────────────────────────────────────────────────────
  {
    id: 'appearance-compliments',
    title: 'You Look Great!',
    subtitle: 'Describing appearance, paying a compliment, and taking one gracefully',
    icon: '💐',
    level: 'B1',
    duration: '~7 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Looks, Kindly Said',
        body: 'Croatians notice appearance and talk about it openly — a new haircut, a tan after the summer, a dress that suits you. This lesson gives you the words to describe how someone looks, the two verbs every compliment uses (izgledati and stajati), and the modest way to accept one.',
        icon: '💐',
      },
      {
        type: 'table',
        title: 'Describing Appearance',
        headers: ['Croatian', 'English'],
        rows: [
          ['visok / nizak', 'tall / short'],
          ['vitak / mršav', 'slim / thin'],
          ['krupan', 'well-built, heavy-set (a polite word)'],
          ['duga / kratka kosa', 'long / short hair'],
          ['ravna / kovrčava kosa', 'straight / curly hair'],
          ['plava / smeđa / crna / sijeda kosa', 'blond / brown / black / grey hair'],
          ['plave / zelene / smeđe oči', 'blue / green / brown eyes'],
          ['brada, brkovi', 'beard, moustache'],
          ['nositi naočale', 'to wear glasses'],
          ['frizura', 'hairstyle'],
        ],
      },
      {
        type: 'rule',
        title: 'Saying What Someone Has',
        body: 'Hair, eyes and beards go with imati and the accusative: Ima kratku smeđu kosu. Ima plave oči. Ima bradu. Glasses are always plural — naočale — and you wear them: Nosi naočale. For build, use biti: Visok je i vitak. Choose your word with care: krupan is a kind way to say heavy-set, while debeo (fat) sounds blunt, exactly as in English.',
        highlight: 'Ima kratku smeđu kosu i nosi naočale.',
      },
      {
        type: 'rule',
        title: 'izgledati — to Look',
        body: 'izgledati (izgledam, izgledaš, izgleda) + an adverb says how someone looks: Lijepo izgledaš (You look lovely). Izgledaš odmorno (You look rested). Izgledaš umorno (You look tired). izgledati kao + nominative compares: Izgleda kao glumica (She looks like an actress). A comparative adverb works too: Izgledaš mlađe (You look younger). You will also hear an adjective after izgledati (Izgledaš umoran), but with lijepo and dobro the adverb is the set phrase: Lijepo izgledaš, Dobro izgledaš.',
        highlight: 'Lijepo izgledaš.',
      },
      {
        type: 'rule',
        title: 'stajati — to Suit',
        body: 'Clothes, colours and haircuts "stand" to a person, and the person goes in the DATIVE: Ta ti haljina stoji (That dress suits you). Ova boja ti lijepo stoji. Plural things take the plural stoje: Te cipele ti dobro stoje. The short dative (ti, vam, mu, joj) sits in second position, so it can even come between the demonstrative and its noun: Ta ti haljina stoji and Ta haljina ti stoji are both correct.',
        highlight: 'Ta ti haljina stoji.',
      },
      {
        type: 'rule',
        title: 'Taking a Compliment',
        body: 'The basic answer is simply Hvala! Croatians often add a little modesty: Ma daj, stara je to haljina (Oh, come on, it is an old dress) or Hvala, drago mi je da ti se sviđa (Thanks, I am glad you like it). To return the compliment, match the case of the original: someone said Ti lijepo izgledaš, so you answer Hvala, i ti! A WISH comes with a dative (Ugodan ti vikend!), so it is answered Hvala, i tebi.',
        highlight: 'Hvala, i ti!',
      },
      {
        type: 'table',
        title: 'More Detail: Hair, Face, Nose',
        headers: ['Croatian', 'English'],
        rows: [
          ['prosijeda kosa', 'greying hair'],
          ['ćelav / ćelava', 'bald'],
          ['punđa', 'a bun (hair)'],
          ['pletenica', 'a plait, braid'],
          ['šiške', 'a fringe (always plural)'],
          ['ravan nos', 'a straight nose'],
          ['kukast / orlovski nos', 'a hooked / an aquiline nose'],
          ['prćast nos', 'a snub, turned-up nose'],
          ['visoko / nisko čelo', 'a high / low forehead'],
        ],
      },
      {
        type: 'table',
        title: 'When You Would Rather Not Say',
        headers: ['Croatian', 'English', 'When'],
        rows: [
          ['To me ne zanima.', 'That does not interest me.', 'lack of interest, neutral'],
          ['Nisam zainteresiran / zainteresirana.', 'I am not interested.', 'lack of interest, polite'],
          ['To nije moja stvar.', 'That is none of my business.', 'staying out of it'],
          ['Baš me briga.', 'I could not care less.', 'blunt — friends only'],
          ['Teško je reći.', 'It is hard to say.', 'avoiding an opinion'],
          ['To je delikatno pitanje.', 'That is a delicate question.', 'avoiding an opinion'],
          ['A što biste željeli čuti?', 'And what would you like to hear?', 'turning the question back'],
        ],
      },
      {
        type: 'rule',
        title: 'Not Every Question Wants an Answer',
        body: 'Talk about looks quickly reaches questions you would rather not answer: "Do I look fat in this?" or "Is she prettier than me?". The book gives two sets of escapes. For lack of interest: To me ne zanima, Nisam zainteresiran, To nije moja stvar — and among friends the blunt Baš me briga. To avoid giving an opinion: Teško je reći, To je delikatno pitanje, or turn it back with A što biste željeli čuti? Use the polite ones with anyone; Baš me briga can sound rude to a stranger.',
        highlight: 'Teško je reći.',
      },
      {
        type: 'example',
        title: 'Describing Someone',
        items: [
          {
            hr: 'Visok je, ima kratku smeđu kosu i nosi naočale.',
            en: 'He is tall, has short brown hair and wears glasses.',
            note: 'imati + accusative; nositi naočale',
          },
          {
            hr: 'Ima plave oči i dugu kovrčavu kosu.',
            en: 'She has blue eyes and long curly hair.',
            note: 'dugu kovrčavu kosu — both adjectives in the accusative',
          },
          {
            hr: 'Moj djed ima sijedu kosu i bijelu bradu.',
            en: 'My grandfather has grey hair and a white beard.',
            note: 'sijeda kosa — grey hair',
          },
          {
            hr: 'Izgleda kao njegov otac kad je bio mlad.',
            en: 'He looks like his father when he was young.',
            note: 'izgledati kao + nominative',
          },
          {
            hr: 'Mislim da je karakter važniji od izgleda.',
            en: 'I think character matters more than looks.',
            note: 'od + genitive noun izgleda',
          },
          {
            hr: 'Danas ljudi previše pažnje pridaju izgledu.',
            en: 'People pay too much attention to appearance these days.',
            note: 'pridavati + dative',
          },
        ],
      },
      {
        type: 'example',
        title: 'Compliments and Replies',
        items: [
          {
            hr: 'Lijepo izgledaš! — Hvala, i ti!',
            en: 'You look lovely! — Thanks, so do you!',
            note: 'i ti matches the subject of izgledaš',
          },
          {
            hr: 'Ta ti haljina stvarno stoji.',
            en: 'That dress really suits you.',
            note: 'stajati + dative ti',
          },
          {
            hr: 'Ošišala si se! Kraća kosa ti bolje stoji.',
            en: 'You have had your hair cut! Shorter hair suits you better.',
            note: 'bolje — comparative adverb',
          },
          {
            hr: 'Izgledaš odmorno, jesi li bio na moru?',
            en: 'You look rested, were you at the seaside?',
            note: 'izgledati + adverb',
          },
          {
            hr: 'Ma daj, stara je to jakna.',
            en: 'Oh, come on, it is an old jacket.',
            note: 'the modest reply',
          },
          {
            hr: 'Hvala, drago mi je da ti se sviđa.',
            en: 'Thanks, I am glad you like it.',
            note: 'svidjeti se + dative',
          },
          {
            hr: 'Ugodan ti vikend! — Hvala, i tebi.',
            en: 'Have a nice weekend! — Thanks, you too.',
            note: 'a wish with a dative, answered in the dative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Ova boja ___ lijepo stoji." (suits you)',
        options: ['te', 'ti', 'tebe', 'tvoja'],
        correct: 1,
        explanation: 'stajati takes the person in the dative: ti. te and tebe are the accusative.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Someone says "Lijepo izgledaš!" Which reply returns the compliment?',
        options: ['Molim.', 'Hvala, i tebi.', 'Hvala, i ti!', 'Nema na čemu.'],
        correct: 2,
        explanation:
          'The compliment was about you as the subject (ti izgledaš), so you answer i ti. Molim and Nema na čemu answer a thank-you.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) The accusative with stajati: Ta haljina te stoji is wrong — the person is in the dative, Ta ti haljina stoji. (2) The wrong case after kao: Izgleda kao glumicu is wrong — kao compares like with like, so the nominative, Izgleda kao glumica. (3) Answering a compliment with Molim or Nema na čemu, which reply to a thank-you; the answer to a compliment is Hvala. (4) imati for glasses: say Nosi naočale, the same verb as for clothes.',
        highlight: 'Ta ti haljina stoji',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Te cipele ti dobro ___."',
            options: ['stoji', 'stoje', 'stojiš', 'stojim'],
            correct: 1,
            explanation: 'The subject is the plural cipele, so the verb is plural: stoje.',
          },
          {
            q: 'Complete: "Nova frizura ___ jako stoji." (suits her)',
            options: ['joj', 'je', 'nju', 'njezina'],
            correct: 0,
            explanation: 'The person goes in the dative: joj. je and nju are the accusative.',
          },
          {
            q: 'Which says "You look tired"?',
            options: ['Izgledaš umor.', 'Izgledaš umorno.', 'Umorno izgleda.', 'Izgledam umorno.'],
            correct: 1,
            explanation:
              'izgledati + adverb, second person: Izgledaš umorno. Izgleda is he/she; izgledam is I.',
          },
          {
            q: 'Complete: "Ima ___ kosu." (long curly)',
            options: ['duga kovrčava', 'dugom kovrčavom', 'dugoj kovrčavoj', 'dugu kovrčavu'],
            correct: 3,
            explanation:
              'imati takes the accusative, and both adjectives agree: dugu kovrčavu kosu.',
          },
          {
            q: 'Someone wishes you "Ugodan ti vikend!" What do you answer?',
            options: ['Hvala, i tebi.', 'Hvala, i ti!', 'Molim.', 'Lijepo izgledaš.'],
            correct: 0,
            explanation: 'A wish with a dative ti is answered in the dative: i tebi.',
          },
          {
            q: 'Which is the most polite way to say someone is heavy-set?',
            options: ['debeo', 'mršav', 'krupan', 'nizak'],
            correct: 2,
            explanation:
              'krupan is the kind word; debeo is blunt. mršav and nizak mean thin and short.',
          },
          {
            q: 'Someone asks about a neighbour\'s private life. Which reply says it is none of your business?',
            options: ['Teško je reći.', 'To nije moja stvar.', 'Lijepo izgleda.', 'A što biste željeli čuti?'],
            correct: 1,
            explanation: 'To nije moja stvar — that is none of my business.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Appearance and Compliments — Key Takeaways',
        points: [
          'Ima kratku kosu, plave oči, bradu; nosi naočale',
          'Not answering: To me ne zanima, To nije moja stvar, Teško je reći, To je delikatno pitanje',
          'izgledati + adverb: Lijepo izgledaš, Izgledaš odmorno',
          'stajati + dative: Ta ti haljina stoji, Te cipele ti stoje',
          'Accept with Hvala — and a little modesty: Ma daj, stara je to',
          'Return a compliment with i ti, a wish with i tebi',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Future II
  // ─────────────────────────────────────────────────────────
  {
    id: 'future-ii',
    title: 'When I Have Time — Future II',
    subtitle: 'budem + the l-participle, after kad, ako, čim and dok',
    icon: '⏳',
    level: 'B1',
    duration: '~8 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'A Second Future',
        body: 'You know the future: nazvat ću te (I will call you). But Croatian does not allow that future after kad (when), ako (if), čim (as soon as) or dok (while) when they point ahead. There it uses a second future, futur II, built from budem and the past participle you already know: Kad budem imao vremena, nazvat ću te. (When I have time, I will call you.)',
        icon: '⏳',
      },
      {
        type: 'table',
        title: 'Forming Futur II',
        headers: ['Person', 'budem + participle', 'English'],
        rows: [
          ['ja', 'budem imao / imala', 'I (will) have'],
          ['ti', 'budeš imao / imala', 'you (will) have'],
          ['on / ona / ono', 'bude imao / imala / imalo', 'he / she / it (will) have'],
          ['mi', 'budemo imali / imale', 'we (will) have'],
          ['vi', 'budete imali / imale', 'you (will) have'],
          ['oni / one / ona', 'budu imali / imale / imala', 'they (will) have'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Pieces, Two Jobs',
        body: 'budem, budeš, bude, budemo, budete, budu is the present of the perfective biti, and it carries the PERSON. The l-participle (imao, imala, imali…) is the same one you use for the past, and it carries the GENDER and NUMBER: a woman says Kad budem imala vremena. Never use the infinitive after budem — Kad budem imati is wrong. And budem on its own means "I will be" in such a clause: Kad budem u Zagrebu, javit ću ti se.',
        highlight: 'Kad budem imala vremena',
      },
      {
        type: 'rule',
        title: 'Where It Goes: Only After kad, ako, čim, dok',
        body: 'Futur II lives in the dependent clause — the "when" or "if" half — and the main clause keeps the ordinary future or an imperative: Ako bude padala kiša, ostat ćemo kod kuće. Ako budete imali pitanja, javite se. Putting the ordinary future in that half is the classic mistake: Kad ću imati vremena is wrong, just as English says "when I have", never "when I will have". Futur II never stands alone as the main verb of a sentence in standard Croatian.',
        highlight: 'Ako bude padala kiša, ostat ćemo kod kuće.',
      },
      {
        type: 'rule',
        title: 'Aspect: When the Present Will Do',
        body: 'With a PERFECTIVE verb (a single, finished event) Croatian can also use the plain present: Kad dođem, nazvat ću te and Kad budem došao, nazvat ću te are both correct, and the present is more common in speech. With an IMPERFECTIVE verb (an ongoing state or activity) you need futur II, because the present would change the meaning: Kad imam vremena, čitam means "whenever I have time, I read" (a habit), while Kad budem imao vremena, čitat ću means "when I have time, I will read" (one future occasion). Verbs like imati and biti have no perfective partner, so futur II is the one way to put them in such a clause.',
        highlight: 'Kad imam vremena, čitam.',
      },
      {
        type: 'rule',
        title: 'Clitics Still Come Second',
        body: 'budem is a full word, not a clitic, so short words like se, ga, ti, mu go in front of it, right after kad, ako or čim: Kad se budem vratio, sve ću ti ispričati. Kad ga budem vidjela, reći ću mu. Ako mi budeš trebao, nazvat ću te.',
        highlight: 'Kad se budem vratio',
      },
      {
        type: 'example',
        title: 'Futur II in Use',
        items: [
          {
            hr: 'Kad budem imao vremena, nazvat ću te.',
            en: 'When I have time, I will call you.',
            note: 'imati has no perfective partner, so futur II',
          },
          {
            hr: 'Ako bude padala kiša, ostat ćemo kod kuće.',
            en: 'If it rains, we will stay at home.',
            note: 'bude padala — third person, feminine participle for kiša',
          },
          {
            hr: 'Ako budete imali pitanja, slobodno se javite.',
            en: 'If you have any questions, feel free to get in touch.',
            note: 'budete imali — the polite vi form',
          },
          {
            hr: 'Dok budeš živio kod nas, nećeš plaćati stanarinu.',
            en: 'While you live with us, you will not pay rent.',
            note: 'dok + futur II for a future period',
          },
          {
            hr: 'Kad budemo bili u Splitu, posjetit ćemo baku.',
            en: 'When we are in Split, we will visit grandma.',
            note: 'budemo bili — or simply budemo',
          },
          {
            hr: 'Kad budem u Zagrebu, javit ću ti se.',
            en: 'When I am in Zagreb, I will get in touch.',
            note: 'budem alone = I will be',
          },
          {
            hr: 'Čim budem završila posao, doći ću po tebe.',
            en: 'As soon as I finish work, I will come and pick you up.',
            note: 'a woman speaking: završila',
          },
          {
            hr: 'Kad se budeš vratio, sve će biti gotovo.',
            en: 'When you get back, everything will be ready.',
            note: 'se before budeš, in second position',
          },
          {
            hr: 'Kad ga budem vidjela, reći ću mu.',
            en: 'When I see him, I will tell him.',
            note: 'ga before budem',
          },
          {
            hr: 'Ako bude lijepo vrijeme, idemo na izlet.',
            en: 'If the weather is nice, we are going on a trip.',
            note: 'bude alone = it will be',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Complete: "Kad ___ vremena, nazvat ću te." (I have — a man)',
        options: ['ću imati', 'budem imao', 'budem imati', 'sam imao'],
        correct: 1,
        explanation:
          'A kad-clause pointing at the future takes futur II: budem + participle. ću imati is the ordinary future, which is wrong there; budem never takes an infinitive.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'What does "Kad imam vremena, čitam" mean?',
        options: [
          'When I have time, I will read.',
          'Whenever I have time, I read.',
          'When I had time, I read.',
          'If I had time, I would read.',
        ],
        correct: 1,
        explanation:
          'The imperfective present in a kad-clause describes a habit: whenever. One future occasion needs futur II.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: '(1) The ordinary future after kad or ako: Kad ću imati vremena, nazvat ću te is wrong — Kad budem imao vremena, nazvat ću te. (2) An infinitive after budem: Ako budeš htjeti is wrong — Ako budeš htio. (3) A participle that does not agree: a woman says Kad budem završila, a group Kad budemo završili. (4) A clitic after budem: Kad budem se vratio is wrong — the clitic goes second, Kad se budem vratio.',
        highlight: 'Kad budem imao vremena, nazvat ću te.',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Kad ___ vremena, upisat ću tečaj." (I have — a woman)',
            options: ['ću imati', 'budem imati', 'budem imala', 'sam imala'],
            correct: 2,
            explanation:
              'Futur II with a feminine participle: budem imala. The ordinary future is wrong in a kad-clause, and budem never takes an infinitive.',
          },
          {
            q: 'Complete: "Ako ___ kiša, ostat ćemo kod kuće." (rains)',
            options: ['bude padala', 'će padati', 'bude padati', 'je padala'],
            correct: 0,
            explanation:
              'bude + participle agreeing with kiša: bude padala. će padati is the ordinary future, wrong after ako.',
          },
          {
            q: 'Which word order is correct?',
            options: [
              'Kad budem se vratio, nazvat ću te.',
              'Kad budem vratio se, nazvat ću te.',
              'Kad se budem vratio, nazvat ću te.',
              'Se kad budem vratio, nazvat ću te.',
            ],
            correct: 2,
            explanation:
              'se is a clitic and takes second place, right after kad; budem is a full word.',
          },
          {
            q: 'Complete: "Dok ___ u Zagrebu, stanovat ćemo kod tete." (we are)',
            options: ['ćemo biti', 'budemo', 'budem', 'smo bili'],
            correct: 1,
            explanation:
              'budemo on its own is futur II of biti, mi: while we are. budem is the ja form; smo bili is the past.',
          },
          {
            q: 'Spot the error: "Kad ću doći kući, skuhat ću večeru."',
            options: [
              'Nothing is wrong.',
              'The main clause needs budem.',
              'skuhat ću should be in the present.',
              'Kad ću doći must be Kad dođem or Kad budem došao.',
            ],
            correct: 3,
            explanation:
              'The ordinary future cannot stand in a kad-clause. With the perfective doći, both the present and futur II are correct.',
          },
          {
            q: 'Why is futur II needed in "Kad budem imao vremena, čitat ću"?',
            options: [
              'Because imati is imperfective, and its present would mean "whenever".',
              'Because the main clause is in the past.',
              'Because futur II is always used after nego.',
              'Because imati is perfective.',
            ],
            correct: 0,
            explanation:
              'An imperfective present in a kad-clause describes a habit. For one future occasion with an imperfective verb, futur II is the form.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Futur II — Key Takeaways',
        points: [
          'budem, budeš, bude, budemo, budete, budu + l-participle',
          'Used after kad, ako, čim, dok when the clause points at the future',
          'The ordinary future (ću imati) is wrong there',
          'Perfective verbs may use the present instead: Kad dođem = Kad budem došao',
          'Clitics go before budem: Kad se budem vratio',
        ],
      },
    ],
  },
];

/** Worked examples, guided practice, form B and vocabulary, keyed by lesson id. */
export const PRACTICE = {
  'superlatives-irregular': {
    worked: [
      {
        title: 'Better in the Locative',
        problem: 'Reci: We live in a better flat than before.',
        en: 'We live in a better flat than before.',
        steps: [
          {
            label: 'The comparative',
            text: 'better is irregular: dobar gives bolji, never dobriji.',
          },
          {
            label: 'The case',
            text: 'u for a location takes the locative, and stan is masculine, so the soft ending -em: boljem.',
          },
          {
            label: 'Than',
            text: 'before is a time word, so only nego works: nego prije.',
          },
        ],
        answer: 'Živimo u boljem stanu nego prije.',
      },
      {
        title: 'The Longest In',
        problem: 'Reci: Velebit is the longest mountain range in Croatia.',
        en: 'Velebit is the longest mountain range in Croatia.',
        steps: [
          {
            label: 'The comparative',
            text: 'long is dug, irregular comparative duži (dulji is equally standard).',
          },
          {
            label: 'The superlative',
            text: 'naj- in front, feminine to agree with planina: najduža.',
          },
          {
            label: 'Where',
            text: 'the place goes with u + locative: u Hrvatskoj.',
          },
        ],
        answer: 'Velebit je najduža planina u Hrvatskoj.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Which is the comparative of "loš"?',
          options: ['lošji', 'gori', 'najgori', 'gorši'],
          correct: 1,
          hint: 'It is irregular and short, and has nothing of loš in it.',
          explanation:
            'loš → gori (the regular lošiji also exists, but gori is the everyday word).',
        },
        {
          q: 'Which is the comparative of "visok"?',
          options: ['visokiji', 'visši', 'viši', 'najviši'],
          correct: 2,
          hint: 'Drop -ok; the s melts with the ending into š.',
          explanation: 'visok → viši.',
        },
        {
          q: 'Complete: "Daj veći komad ___ djetetu." (younger)',
          options: ['mlađe', 'mlađem', 'mlađoj', 'mlađeg'],
          correct: 1,
          hint: 'The one you give to is in the dative, and dijete is neuter.',
          explanation: 'mlađem djetetu — dative, soft ending.',
        },
        {
          q: 'Complete: "U ___ slastičarnici u gradu uvijek je gužva." (the best)',
          options: ['najboljoj', 'najbolja', 'najbolju', 'boljoj'],
          correct: 0,
          hint: 'u + location, feminine noun, superlative.',
          explanation: 'u najboljoj slastičarnici — feminine locative.',
        },
        {
          q: 'Which is the superlative of "jeftin"?',
          options: ['najjeftin', 'najeftiniji', 'jeftiniji', 'najjeftiniji'],
          correct: 3,
          hint: 'naj- goes in front of the comparative, and nothing is dropped where two letters meet.',
          explanation: 'najjeftiniji — the j doubles.',
        },
        {
          q: 'Complete: "Imam ___ sestru." (older)',
          options: ['starija', 'stariju', 'starijoj', 'starijem'],
          correct: 1,
          hint: 'imati takes the accusative; sestra is feminine.',
          explanation: 'stariju sestru — feminine accusative.',
        },
        {
          type: 'type',
          q: 'Ova torba je ____ nego ona. (big → bigger)',
          answer: 'veća',
          hint: 'The irregular comparative, feminine for torba.',
          explanation: 'veća — feminine of veći.',
        },
        {
          type: 'type',
          q: 'Ovo je ____ pizza u gradu. (good → the best)',
          answer: 'najbolja',
          hint: 'naj- + the irregular comparative, feminine.',
          explanation: 'najbolja pizza.',
        },
        {
          type: 'type',
          q: 'Ljeti su dani ____ nego zimi. (long → longer)',
          answer: 'duži',
          accept: ['dulji'],
          hint: 'The irregular comparative of dug, masculine plural.',
          explanation: 'duži (or dulji) — both are standard.',
        },
        {
          type: 'type',
          q: 'Sestra živi u ____ gradu nego ja. (small → smaller)',
          answer: 'manjem',
          hint: 'The irregular comparative of malen, in the locative after u.',
          explanation: 'u manjem gradu — locative, soft ending.',
        },
        {
          type: 'type',
          q: 'Dinara je ____ vrh u Hrvatskoj. (high → the highest)',
          answer: 'najviši',
          hint: 'naj- + the comparative of visok.',
          explanation: 'najviši vrh.',
        },
        {
          type: 'type',
          q: 'Ovaj put je ____ nego onaj. (short → shorter)',
          answer: 'kraći',
          hint: 'kratak drops -ak, and t melts into ć.',
          explanation: 'kraći put.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Moja kava je ___ nego tvoja." (good — comparative)',
        options: ['bolja', 'dobrija', 'najbolja', 'više dobra'],
        correct: 0,
        explanation: 'dobar → bolji, feminine bolja to agree with kava.',
      },
      {
        q: 'Complete: "Radim u ___ firmi nego prije." (bigger)',
        options: ['veća', 'veću', 'većem', 'većoj'],
        correct: 3,
        explanation: 'u + locative, feminine firma: većoj.',
      },
      {
        q: 'Which is the comparative of "dubok"?',
        options: ['dubokiji', 'dublji', 'dubši', 'dubji'],
        correct: 1,
        explanation: 'dubok → dublji: after b an l appears.',
      },
      {
        q: 'Complete: "Zagreb je ___ grad u Hrvatskoj." (the biggest)',
        options: ['veći', 'najvećem', 'najveći', 'najveća'],
        correct: 2,
        explanation: 'naj- + veći, masculine to agree with grad.',
      },
      {
        q: 'Complete: "Kupio sam ___ auto." (more expensive)',
        options: ['skupiji', 'skuplji', 'skupljem', 'skuplju'],
        correct: 1,
        explanation:
          'auto is masculine inanimate, so the accusative is the same as the nominative: skuplji.',
      },
      {
        q: 'Complete: "Danas je promet ___ nego jučer." (worse)',
        options: ['gori', 'gora', 'gore', 'loš'],
        correct: 0,
        explanation: 'promet is masculine: gori.',
      },
    ],
    vocab: [
      ['bolji', 'better', 'Ova kava je bolja nego jučer.'],
      ['gori', 'worse', 'Danas je promet gori nego inače.'],
      ['veći', 'bigger', 'Živimo u većem stanu.'],
      ['manji', 'smaller', 'Treba mi manja torba.'],
      ['duži', 'longer', 'Ljeti su dani duži.'],
      ['kraći', 'shorter', 'Ovo je kraći put.'],
      ['viši', 'taller, higher', 'Brat je viši od mene.'],
      ['skuplji', 'more expensive', 'Ovaj stan je skuplji.'],
      ['najbolji', 'the best', 'Ovo je najbolja pizza u gradu.'],
      ['najveći', 'the biggest', 'Zagreb je najveći grad u Hrvatskoj.'],
    ],
  },

  'comparative-adverbs': {
    worked: [
      {
        title: 'An Action, Compared',
        problem: 'Reci: My sister speaks Croatian better than me.',
        en: 'My sister speaks Croatian better than me.',
        steps: [
          {
            label: 'Adjective or adverb?',
            text: 'speaking is an action, so the adverb, not the adjective bolji.',
          },
          {
            label: 'The form',
            text: 'the adverb is the neuter comparative: bolje.',
          },
          {
            label: 'Than',
            text: 'a pronoun: od + genitive mene (or nego ja).',
          },
        ],
        answer: 'Moja sestra govori hrvatski bolje od mene.',
      },
      {
        title: 'The More…, the More…',
        problem: 'Reci: The more you practise, the faster you speak.',
        en: 'The more you practise, the faster you speak.',
        steps: [
          {
            label: 'The frame',
            text: 'the pattern is što + comparative, to + comparative.',
          },
          {
            label: 'First half',
            text: 'more from mnogo is više: što više vježbaš.',
          },
          {
            label: 'Second half',
            text: 'faster from brzo is brže: to brže govoriš.',
          },
        ],
        answer: 'Što više vježbaš, to brže govoriš.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Marko pjeva ___ od mene." (better)',
          options: ['bolji', 'dobro', 'bolje', 'najbolji'],
          correct: 2,
          hint: 'Singing is an action — the neuter comparative.',
          explanation: 'pjeva bolje — adverb.',
        },
        {
          q: 'Complete: "Danas je toplije ___ jučer."',
          options: ['nego', 'od', 'kao', 'do'],
          correct: 0,
          hint: 'A time word follows — only one "than" works there.',
          explanation: 'nego jučer.',
        },
        {
          q: 'Complete: "Više volim čaj nego ___."',
          options: ['kava', 'kavu', 'kave', 'kavi'],
          correct: 1,
          hint: 'The second item matches the case of čaj, which is an object.',
          explanation: 'nego kavu — accusative, like čaj.',
        },
        {
          q: 'What does "sve bolje" mean?',
          options: [
            'the best of all',
            'as well as possible',
            'better and better',
            'everything is better',
          ],
          correct: 2,
          hint: 'sve + comparative describes growth over time.',
          explanation: 'sve bolje = better and better.',
        },
        {
          q: 'Which is the comparative of "rijetko"?',
          options: ['rjeđe', 'rijetkije', 'rjeđi', 'najrjeđe'],
          correct: 0,
          hint: 'The ije shortens and tk melts into đ; adverbs end in -e.',
          explanation: 'rijetko → rjeđe.',
        },
        {
          q: 'Complete: "Ana trči brže nego ___."',
          options: ['mene', 'meni', 'ja', 'mnom'],
          correct: 2,
          hint: 'After nego the pronoun matches Ana — the subject.',
          explanation: 'nego ja — nominative.',
        },
        {
          type: 'type',
          q: 'Govori ____, molim te, ne razumijem. (slowly → more slowly)',
          answer: 'sporije',
          hint: 'The neuter comparative of spor.',
          explanation: 'sporije — more slowly.',
        },
        {
          type: 'type',
          q: 'Ivan trči ____ od mene. (fast → faster)',
          answer: 'brže',
          hint: 'The comparative of brzo; z melts into ž.',
          explanation: 'brže — faster.',
        },
        {
          type: 'type',
          q: 'Dođi ____ prije! (as soon as possible)',
          answer: 'što',
          hint: 'The small word that turns a comparative into "as … as possible".',
          explanation: 'što prije — as soon as possible.',
        },
        {
          type: 'type',
          q: 'Danas je ____ nego jučer. (warm → warmer)',
          answer: 'toplije',
          hint: 'The neuter comparative of topao.',
          explanation: 'toplije — warmer.',
        },
        {
          type: 'type',
          q: 'Moja baka kuha ____ na svijetu. (well → the best)',
          answer: 'najbolje',
          hint: 'naj- + the irregular comparative adverb of dobro.',
          explanation: 'najbolje — the best.',
        },
        {
          type: 'type',
          q: 'Moramo jesti ____ šećera. (little → less)',
          answer: 'manje',
          hint: 'The comparative of malo; like malo it takes the genitive.',
          explanation: 'manje šećera — less sugar.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Možete li govoriti ___?" (louder)',
        options: ['glasniji', 'glasno', 'glasnije', 'najglasnije'],
        correct: 2,
        explanation: 'An action: the comparative adverb glasnije.',
      },
      {
        q: 'Complete: "Petra piše brže od ___."',
        options: ['mene', 'ja', 'meni', 'mi'],
        correct: 0,
        explanation: 'od + genitive: mene.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'U Splitu je toplije od u Zagrebu.',
          'U Splitu je toplije nego u Zagrebu.',
          'U Splitu je topliji nego u Zagrebu.',
          'U Splitu je više toplo nego u Zagrebu.',
        ],
        correct: 1,
        explanation:
          'Before a phrase with a preposition only nego works, and the impersonal sentence takes the adverb.',
      },
      {
        q: 'Complete: "Javi mi se ___ prije."',
        options: ['sve', 'što', 'to', 'nego'],
        correct: 1,
        explanation: 'što + comparative = as soon as possible.',
      },
      {
        q: 'Which is the superlative adverb of "mnogo"?',
        options: ['najmnogo', 'najviše', 'više', 'najveće'],
        correct: 1,
        explanation: 'mnogo → više → najviše.',
      },
      {
        q: 'Complete: "Govoriš hrvatski ___ bolje." (better and better)',
        options: ['što', 'to', 'nego', 'sve'],
        correct: 3,
        explanation: 'sve + comparative = more and more: sve bolje.',
      },
    ],
    vocab: [
      ['brže', 'faster', 'Ivan trči brže od mene.'],
      ['sporije', 'more slowly', 'Govorite sporije, molim vas.'],
      ['bolje', 'better', 'Govoriš sve bolje.'],
      ['više', 'more', 'Više volim čaj nego kavu.'],
      ['manje', 'less', 'Moramo jesti manje šećera.'],
      ['češće', 'more often', 'Piši mi češće.'],
      ['najbolje', 'best', 'Baka kuha najbolje.'],
      ['nego', 'than', 'Danas je toplije nego jučer.'],
      ['što prije', 'as soon as possible', 'Dođi što prije.'],
    ],
  },

  'character-traits': {
    worked: [
      {
        title: 'Comparing Two People',
        problem: 'Reci: My sister is more patient than my brother.',
        en: 'My sister is more patient than my brother.',
        steps: [
          {
            label: 'The trait',
            text: 'patient is strpljiv.',
          },
          {
            label: 'The comparative',
            text: 'regular -iji, feminine to agree with sestra: strpljivija.',
          },
          {
            label: 'Than',
            text: 'a noun: od + genitive brata (or nego brat).',
          },
        ],
        answer: 'Moja sestra je strpljivija od brata.',
      },
      {
        title: 'A Fair Judgement',
        problem: 'Reci: She is kind, but a bit stubborn.',
        en: 'She is kind, but a bit stubborn.',
        steps: [
          {
            label: 'kind',
            text: 'ljubazan, feminine: the a drops, ljubazna.',
          },
          {
            label: 'Soften',
            text: 'a bit is pomalo, in front of the adjective.',
          },
          {
            label: 'stubborn',
            text: 'tvrdoglav, feminine tvrdoglava.',
          },
        ],
        answer: 'Ljubazna je, ali pomalo tvrdoglava.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Moj šef je strog, ali ___." (fair)',
          options: ['pošten', 'poštena', 'pošteno', 'nepošten'],
          correct: 0,
          hint: 'šef is masculine; you want the positive word.',
          explanation: 'pošten — fair.',
        },
        {
          q: 'Which word means "reliable"?',
          options: ['pošten', 'strpljiv', 'pouzdan', 'skroman'],
          correct: 2,
          hint: 'You can count on such a person.',
          explanation: 'pouzdan = reliable.',
        },
        {
          q: 'Complete: "Ona je vrlo ___." (brave)',
          options: ['hrabar', 'hrabra', 'hrabara', 'hrabro'],
          correct: 1,
          hint: 'Feminine, and the a of -ar drops.',
          explanation: 'hrabra.',
        },
        {
          q: 'Which word for a careful saver is a compliment?',
          options: ['škrt', 'lijen', 'umišljen', 'štedljiv'],
          correct: 3,
          hint: 'One of these is the polite word for the same habit.',
          explanation: 'štedljiv = thrifty.',
        },
        {
          q: 'Complete: "Moj brat je ___ nego ja." (more stubborn)',
          options: ['tvrdoglavija', 'tvrdoglaviji', 'tvrdoglav', 'najtvrdoglaviji'],
          correct: 1,
          hint: 'Regular -iji, masculine for brat.',
          explanation: 'tvrdoglaviji.',
        },
        {
          q: 'What does "Previše je ozbiljan" mean?',
          options: [
            'He is quite serious.',
            'He is too serious.',
            'He is not serious.',
            'He is more serious.',
          ],
          correct: 1,
          hint: 'previše = more than is good.',
          explanation: 'previše = too.',
        },
        {
          type: 'type',
          q: 'Kolegica mi je jako ____. (kind)',
          answer: 'ljubazna',
          hint: 'Feminine of the word for kind; the a before n drops.',
          explanation: 'ljubazna.',
        },
        {
          type: 'type',
          q: 'Djeca su često ____ nego odrasli. (honest → more honest)',
          answer: 'iskrenija',
          hint: 'Regular comparative, neuter plural to agree with djeca.',
          explanation: 'iskrenija.',
        },
        {
          type: 'type',
          q: 'Nije vrijedan, nego ____. (lazy)',
          answer: 'lijen',
          hint: 'The opposite of hardworking — not formed with ne-.',
          explanation: 'lijen — lazy.',
        },
        {
          type: 'type',
          q: 'On je strpljiv, a ona je ____. (impatient)',
          answer: 'nestrpljiva',
          hint: 'ne- + patient, feminine.',
          explanation: 'nestrpljiva.',
        },
        {
          type: 'type',
          q: 'Moja prijateljica je ____ u našem društvu. (brave → the bravest)',
          answer: 'najhrabrija',
          hint: 'naj- + the comparative of hrabra.',
          explanation: 'najhrabrija.',
        },
        {
          type: 'type',
          q: 'Moja sestra je sramežljiva, a brat je ____. (sociable)',
          answer: 'druželjubiv',
          hint: 'The opposite of shy, masculine.',
          explanation: 'druželjubiv.',
        },
        {
          q: 'Complete the simile: "Moj djed je tvrdoglav kao ___."',
          options: ['magarac', 'mrav', 'sova', 'lav'],
          correct: 0,
          hint: 'The animal Croatian picks for someone who will not move.',
          explanation: 'tvrdoglav kao magarac — stubborn as a donkey.',
        },
        {
          type: 'type',
          q: 'Moja baka je vrijedna kao ____. (an ant)',
          answer: 'mrav',
          hint: 'The small insect that never stops working, in the nominative.',
          explanation: 'vrijedna kao mrav — the animal stays nominative after kao.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Moj otac je jako ___." (hardworking)',
        options: ['vrijedna', 'vrijedno', 'vrijedan', 'vrijedni'],
        correct: 2,
        explanation: 'Masculine singular keeps the a: vrijedan.',
      },
      {
        q: 'Which is the opposite of "iskren"?',
        options: ['pošten', 'neiskren', 'skroman', 'lijen'],
        correct: 1,
        explanation: 'ne- + iskren = neiskren.',
      },
      {
        q: 'Complete: "Petra je ___ od Ivane." (wittier)',
        options: ['duhovitija', 'duhovitiji', 'duhovita', 'najduhovitija'],
        correct: 0,
        explanation: 'Regular -iji, feminine for Petra: duhovitija.',
      },
      {
        q: 'Which word is a criticism?',
        options: ['skroman', 'velikodušan', 'pouzdan', 'umišljen'],
        correct: 3,
        explanation: 'umišljen = conceited; the others are compliments.',
      },
      {
        q: 'Complete: "Kakvi su tvoji kolege? — ___ su." (friendly)',
        options: ['Ljubazan', 'Ljubazni', 'Ljubazne', 'Ljubazna'],
        correct: 1,
        explanation: 'Masculine plural for kolege, with the a dropped: ljubazni.',
      },
      {
        q: 'What does "malo nepouzdan" say?',
        options: ['very reliable', 'not reliable at all', 'a bit unreliable', 'more reliable'],
        correct: 2,
        explanation: 'malo softens: a bit; nepouzdan = unreliable.',
      },
      {
        q: 'Which simile is a compliment?',
        options: ['glup kao guska', 'dosadan kao muha', 'mudar kao sova', 'tvrdoglav kao magarac'],
        correct: 2,
        explanation: 'mudar kao sova — wise as an owl. The other three are criticisms.',
      },
    ],
    vocab: [
      ['vrijedan', 'hardworking', 'Ivan je vrijedan i pouzdan.'],
      ['mrav', 'ant', 'Vrijedna je kao mrav.'],
      ['magarac', 'donkey', 'Tvrdoglav je kao magarac.'],
      ['lijen', 'lazy', 'Nije lijen, samo je umoran.'],
      ['iskren', 'honest, sincere', 'Djeca su često iskrena.'],
      ['ljubazan', 'kind, friendly', 'Kolegica mi je jako ljubazna.'],
      ['strpljiv', 'patient', 'Ona je strpljivija od mene.'],
      ['tvrdoglav', 'stubborn', 'Pomalo je tvrdoglav.'],
      ['pouzdan', 'reliable', 'Trebam pouzdanu osobu.'],
      ['duhovit', 'witty', 'Duhovit je i uvijek nas zabavlja.'],
      ['štedljiv', 'thrifty', 'Nije škrt, samo je štedljiv.'],
      ['iskrenost', 'honesty', 'Najviše cijenim iskrenost.'],
    ],
  },

  'appearance-compliments': {
    worked: [
      {
        title: 'A Compliment with stajati',
        problem: 'Reci: That colour really suits you.',
        en: 'That colour really suits you.',
        steps: [
          {
            label: 'The verb',
            text: 'suiting someone is stajati, third person stoji for one colour.',
          },
          {
            label: 'The person',
            text: 'the one it suits goes in the dative: the short form ti.',
          },
          {
            label: 'Order',
            text: 'ti is a clitic and takes second place: Ta ti boja…',
          },
        ],
        answer: 'Ta ti boja stvarno stoji.',
      },
      {
        title: 'Describing a Friend',
        problem: 'Reci: She is tall, has long straight hair and wears glasses.',
        en: 'She is tall, has long straight hair and wears glasses.',
        steps: [
          {
            label: 'Build',
            text: 'biti + adjective, feminine: Visoka je.',
          },
          {
            label: 'Hair',
            text: 'imati + accusative, both adjectives agreeing: dugu ravnu kosu.',
          },
          {
            label: 'Glasses',
            text: 'always plural and worn: nosi naočale.',
          },
        ],
        answer: 'Visoka je, ima dugu ravnu kosu i nosi naočale.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Ta haljina ___ stvarno stoji." (suits you)',
          options: ['ti', 'te', 'tebe', 'tvoja'],
          correct: 0,
          hint: 'stajati puts the person in the dative.',
          explanation: 'Ta haljina ti stoji.',
        },
        {
          q: 'Complete: "Te cipele ti lijepo ___."',
          options: ['stoji', 'stojiš', 'stoje', 'stojimo'],
          correct: 2,
          hint: 'The shoes are the subject, and they are plural.',
          explanation: 'cipele stoje.',
        },
        {
          q: 'Which says "You look lovely"?',
          options: ['Lijepo izgledam.', 'Lijepo izgledaš.', 'Lijepo izgleda.', 'Izgledaš lijepoj.'],
          correct: 1,
          hint: 'izgledati takes the adverb; check the person too.',
          explanation: 'Lijepo izgledaš.',
        },
        {
          q: 'Someone says "Ta ti jakna stoji." Which reply is modest?',
          options: ['Molim.', 'Nema na čemu.', 'Hvala, i tebi.', 'Ma daj, stara je to jakna.'],
          correct: 3,
          hint: 'Croatians often play the compliment down.',
          explanation: 'Ma daj, stara je to jakna — oh, come on, it is old.',
        },
        {
          q: 'Which is the polite word for heavy-set?',
          options: ['krupan', 'debeo', 'mršav', 'nizak'],
          correct: 0,
          hint: 'One of these sounds blunt, two mean something else.',
          explanation: 'krupan.',
        },
        {
          q: 'Complete: "Izgleda ___ glumica." (like)',
          options: ['nego', 'kao', 'što', 'od'],
          correct: 1,
          hint: 'izgledati + the word for "like" + nominative.',
          explanation: 'Izgleda kao glumica.',
        },
        {
          type: 'type',
          q: 'Ima ____ smeđu kosu. (short)',
          answer: 'kratku',
          hint: 'imati takes the accusative; kosa is feminine.',
          explanation: 'kratku smeđu kosu.',
        },
        {
          type: 'type',
          q: 'Moj djed ima ____ kosu. (grey)',
          answer: 'sijedu',
          hint: 'The colour of hair that has gone white with age, in the accusative.',
          explanation: 'sijedu kosu.',
        },
        {
          type: 'type',
          q: 'Kraća kosa ti ____ stoji. (better)',
          answer: 'bolje',
          hint: 'The comparative adverb of dobro.',
          explanation: 'bolje stoji.',
        },
        {
          type: 'type',
          q: 'Nova frizura ____ jako stoji. (suits her)',
          answer: 'joj',
          hint: 'The short dative of ona.',
          explanation: 'joj — the short dative.',
        },
        {
          type: 'type',
          q: 'Izgledaš ____, jesi li bila na moru? (rested)',
          answer: 'odmorno',
          hint: 'izgledati + the adverb in -o.',
          explanation: 'Izgledaš odmorno.',
        },
        {
          type: 'type',
          q: 'Ugodan ti vikend! — Hvala, i ____.',
          answer: 'tebi',
          hint: 'The wish came with a dative, so the reply uses the same case.',
          explanation: 'i tebi.',
        },
        {
          q: 'A stranger asks what you think of a politician\'s looks. Which reply avoids giving an opinion?',
          options: ['Baš me briga.', 'Teško je reći.', 'Lijepo izgleda.', 'Hvala, i vama.'],
          correct: 1,
          hint: 'You want to step aside politely, not be rude and not praise.',
          explanation: 'Teško je reći — it is hard to say.',
        },
        {
          type: 'type',
          q: 'To me ne ____. (That does not interest me.)',
          answer: 'zanima',
          hint: 'The third person of zanimati — the thing interests you.',
          explanation: 'To me ne zanima.',
        },
        {
          q: 'Which word describes a turned-up nose?',
          options: ['prćast', 'kukast', 'ćelav', 'krupan'],
          correct: 0,
          hint: 'The opposite direction from a hooked nose.',
          explanation: 'prćast nos — a snub nose; kukast is hooked.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Ova boja ___ dobro stoji." (suits him)',
        options: ['ga', 'mu', 'njega', 'njegova'],
        correct: 1,
        explanation: 'The person goes in the dative: mu.',
      },
      {
        q: 'Which says "You look younger"?',
        options: ['Izgledaš mlađi od.', 'Izgledaš mlado.', 'Izgledaš mlađe.', 'Mlađe izgleda.'],
        correct: 2,
        explanation: 'izgledati + comparative adverb, second person: Izgledaš mlađe.',
      },
      {
        q: 'Complete: "Ima ___ oči." (blue)',
        options: ['plave', 'plava', 'plavu', 'plavim'],
        correct: 0,
        explanation: 'oči is a feminine plural in the accusative: plave oči.',
      },
      {
        q: 'Someone says "Lijepo izgledaš!" What do you answer?',
        options: ['Nema na čemu.', 'Molim.', 'Hvala, i tebi.', 'Hvala, i ti!'],
        correct: 3,
        explanation: 'The compliment had ti as the subject, so you answer i ti.',
      },
      {
        q: 'Which says "He wears glasses"?',
        options: ['Ima naočalu.', 'Nosi naočale.', 'Nosi naočala.', 'Je naočale.'],
        correct: 1,
        explanation: 'naočale is always plural, and you wear it: nosi.',
      },
      {
        q: 'Complete: "Mislim da je karakter ___ od izgleda." (more important)',
        options: ['važno', 'najvažniji', 'važniji', 'važnija'],
        correct: 2,
        explanation: 'Comparative, masculine to agree with karakter: važniji.',
      },
      {
        q: 'Which reply is blunt and best kept for friends?',
        options: ['To nije moja stvar.', 'Baš me briga.', 'Nisam zainteresiran.', 'To je delikatno pitanje.'],
        correct: 1,
        explanation: 'Baš me briga — I could not care less. The others are polite.',
      },
    ],
    vocab: [
      ['izgledati', 'to look', 'Lijepo izgledaš.'],
      ['zanimati', 'to interest', 'To me ne zanima.'],
      ['ćelav', 'bald', 'Moj ujak je ćelav.'],
      ['pletenica', 'plait, braid', 'Kći ima dugu pletenicu.'],
      ['stajati', 'to suit (someone: dative)', 'Ta ti haljina stoji.'],
      ['kosa', 'hair', 'Ima dugu kovrčavu kosu.'],
      ['oči', 'eyes', 'Ima plave oči.'],
      ['naočale', 'glasses', 'Nosi naočale.'],
      ['brada', 'beard', 'Djed ima bijelu bradu.'],
      ['frizura', 'hairstyle', 'Nova frizura ti stoji.'],
      ['sijed', 'grey (of hair)', 'Tata ima sijedu kosu.'],
      ['krupan', 'heavy-set', 'Visok je i krupan.'],
      ['izgled', 'appearance, looks', 'Karakter je važniji od izgleda.'],
    ],
  },

  'future-ii': {
    worked: [
      {
        title: 'A "When" with an Imperfective Verb',
        problem: 'Reci (a man): When I have more time, I will learn to dance.',
        en: 'When I have more time, I will learn to dance.',
        steps: [
          {
            label: 'Which half',
            text: 'the kad half points at the future, so it cannot take ću.',
          },
          {
            label: 'The verb',
            text: 'imati has no perfective partner, so futur II: budem + participle imao.',
          },
          {
            label: 'The main clause',
            text: 'the ordinary future: učit ću plesati. Imati više vremena takes the genitive vremena.',
          },
        ],
        answer: 'Kad budem imao više vremena, učit ću plesati.',
      },
      {
        title: 'If, with a Clitic',
        problem: 'Reci (a man speaking): If you need me, call me.',
        en: 'If you need me, call me.',
        steps: [
          {
            label: 'Who is the subject',
            text: 'with trebati the one NEEDED is the subject (here ja, a man) and the one who needs is in the dative: ti.',
          },
          {
            label: 'The condition',
            text: 'ako pointing at the future: futur II, budem trebao, with the clitic ti in second place right after ako.',
          },
          {
            label: 'The main clause',
            text: 'an instruction: the imperative nazovi + me.',
          },
        ],
        answer: 'Ako ti budem trebao, nazovi me.',
      },
    ],
    practice: {
      title: 'Guided Practice',
      items: [
        {
          q: 'Complete: "Ako ___ pitanja, javite se." (you have — vi)',
          options: ['ćete imati', 'budete imali', 'budete imati', 'ste imali'],
          correct: 1,
          hint: 'ako pointing ahead, the polite vi form, and a participle.',
          explanation: 'budete imali.',
        },
        {
          q: 'Complete: "Kad ___ u Splitu, posjetit ćemo baku." (we are)',
          options: ['ćemo biti', 'smo bili', 'budemo', 'budu'],
          correct: 2,
          hint: 'biti in futur II can stand alone; you need the mi form.',
          explanation: 'budemo — we will be.',
        },
        {
          q: 'Which is correct for a woman?',
          options: [
            'Čim budem završio, doći ću.',
            'Čim budem završila, doći ću.',
            'Čim ću završiti, doći ću.',
            'Čim budem završiti, doći ću.',
          ],
          correct: 1,
          hint: 'The participle carries the speaker’s gender.',
          explanation: 'budem završila.',
        },
        {
          q: 'Which word order is correct?',
          options: [
            'Kad budem ga vidio, reći ću mu.',
            'Kad budem vidio ga, reći ću mu.',
            'Kad ga budem vidio, reći ću mu.',
            'Ga kad budem vidio, reći ću mu.',
          ],
          correct: 2,
          hint: 'The clitic takes second place in its clause.',
          explanation: 'Kad ga budem vidio.',
        },
        {
          q: 'Which sentence describes a habit?',
          options: [
            'Kad budem imao vremena, čitat ću.',
            'Kad imam vremena, čitam.',
            'Ako budem imao vremena, čitat ću.',
            'Čim budem imao vremena, čitat ću.',
          ],
          correct: 1,
          hint: 'A present in both halves.',
          explanation: 'Kad imam vremena, čitam — whenever.',
        },
        {
          q: 'Complete: "Ako ___ lijepo vrijeme, idemo na izlet."',
          options: ['bude', 'će biti', 'budu', 'budem'],
          correct: 0,
          hint: 'It will be — third person singular, standing alone.',
          explanation: 'Ako bude lijepo vrijeme.',
        },
        {
          type: 'type',
          q: 'Kad ____ imao vremena, nazvat ću te.',
          answer: 'budem',
          hint: 'The ja form of the perfective biti.',
          explanation: 'Kad budem imao vremena.',
        },
        {
          type: 'type',
          q: 'Dok ____ živio kod nas, nećeš plaćati stanarinu. (ti)',
          answer: 'budeš',
          hint: 'The ti form of the perfective biti.',
          explanation: 'Dok budeš živio.',
        },
        {
          type: 'type',
          q: 'Ako bude ____ kiša, ostat ćemo kod kuće. (padati)',
          answer: 'padala',
          hint: 'The l-participle, agreeing with kiša.',
          explanation: 'bude padala.',
        },
        {
          type: 'type',
          q: 'Kad djeca ____ spavala, gledat ćemo film. (they are asleep)',
          answer: 'budu',
          hint: 'The oni form of the perfective biti.',
          explanation: 'Kad djeca budu spavala.',
        },
        {
          type: 'type',
          q: 'Kad ____ budeš vratio, sve će biti gotovo. (reflexive)',
          answer: 'se',
          hint: 'The reflexive clitic, in second place.',
          explanation: 'Kad se budeš vratio.',
        },
        {
          type: 'type',
          q: 'Kad budemo ____ u Zagrebu, javit ćemo vam se. (biti — mi, men)',
          answer: 'bili',
          hint: 'The masculine plural l-participle of biti.',
          explanation: 'budemo bili — or simply budemo.',
        },
      ],
    },
    checkB: [
      {
        q: 'Complete: "Kad ___ novca, kupit ću auto." (I have — a man)',
        options: ['ću imati', 'budem imati', 'imam imao', 'budem imao'],
        correct: 3,
        explanation: 'Futur II: budem + participle imao.',
      },
      {
        q: 'Complete: "Ako ___ htio, možeš doći." (you want — a man)',
        options: ['budeš', 'ćeš', 'budem', 'si'],
        correct: 0,
        explanation: 'ako pointing ahead: budeš htio.',
      },
      {
        q: 'Which sentence is correct?',
        options: [
          'Kad ćeš biti u Zagrebu, javi mi se.',
          'Kad budeš u Zagrebu, javi mi se.',
          'Kad budeš biti u Zagrebu, javi mi se.',
          'Kad si budeš u Zagrebu, javi mi se.',
        ],
        correct: 1,
        explanation:
          'budeš alone = you will be. ćeš is wrong after kad, and budeš never takes an infinitive.',
      },
      {
        q: 'Complete: "Dok ___ radili, djeca će biti kod bake." (we are working)',
        options: ['ćemo', 'budemo', 'smo', 'budu'],
        correct: 1,
        explanation: 'dok + futur II, mi: budemo radili.',
      },
      {
        q: 'Spot the error: "Ako će vam trebati pomoć, zovite me."',
        options: [
          'Nothing is wrong.',
          'zovite should be zovete.',
          'Ako će vam trebati must be Ako vam bude trebala.',
          'pomoć should be in the genitive.',
        ],
        correct: 2,
        explanation: 'The ordinary future cannot follow ako here; it is futur II, and pomoć is the subject of trebati (as in Ako ti budem trebao): Ako vam bude trebala pomoć.',
      },
      {
        q: 'With a perfective verb, which is ALSO correct beside "Kad budem stigao, nazvat ću te"?',
        options: [
          'Kad ću stići, nazvat ću te.',
          'Kad budem stići, nazvat ću te.',
          'Kad sam stigao, nazvat ću te.',
          'Kad stignem, nazvat ću te.',
        ],
        correct: 3,
        explanation: 'A perfective verb may take the plain present in the kad-clause: Kad stignem.',
      },
    ],
    vocab: [
      ['budem', 'I will be (in a kad/ako clause)', 'Kad budem u Zagrebu, javit ću ti se.'],
      ['ako', 'if', 'Ako budeš htio, možeš doći.'],
      ['čim', 'as soon as', 'Čim budem završila, doći ću.'],
      ['dok', 'while', 'Dok budeš živio kod nas, nećeš plaćati stanarinu.'],
      ['javiti se', 'to get in touch', 'Ako budete imali pitanja, javite se.'],
      ['stanarina', 'rent', 'Stanarina je visoka.'],
      ['izlet', 'trip, outing', 'Ako bude lijepo vrijeme, idemo na izlet.'],
      ['upisati', 'to enrol in', 'Kad budem imala vremena, upisat ću tečaj.'],
      ['gotov', 'ready, finished', 'Kad se vratiš, sve će biti gotovo.'],
    ],
  },
};
