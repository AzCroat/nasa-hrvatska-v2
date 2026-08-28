// ═══════════════════════════════════════════════════════════
// A1 CURRICULUM — lessons 5–30 (Wave 1 content, 2026-08-28)
// ═══════════════════════════════════════════════════════════
//
// WHY THIS FILE EXISTS SEPARATELY: lessons.js is already ~6,000 lines for 45
// lessons. The curriculum targets ~30 per level, so the catalog is heading for
// roughly four times that. Splitting per level now is cheap; splitting a
// 24,000-line file later is not. LESSONS spreads this array in, so every
// consumer — the spine test, /api/content/lessons, /api/content/lessons/{id} —
// sees one flat catalog exactly as before.
//
// WHAT A1 WAS MISSING, AND WHY IT MATTERED
// ----------------------------------------
// A1 had nine lessons. It taught the alphabet, gender, verbs and the IDEA of
// cases — and then stopped, one step short of every structure a beginner
// actually needs to say anything:
//
//   * no plural at all, so a learner could name one thing and not two;
//   * no negation, so they could not say what they did not want;
//   * no accusative, so they could not name what they were eating, buying,
//     reading or looking at — the first case anyone needs;
//   * no locative, so they could not say where they were;
//   * no possessives, so they could not say "my sister";
//   * no adjectives, though `gender` explicitly told them agreement was coming.
//
// The lessons below close that, and they are sequenced so each one is usable
// with only what came before it. Every case lesson sits after the `cases`
// primer, which is the app's only "what IS a case" explanation.
//
// AUTHORING RULES (see CLAUDE.md → Croatian Content Authoring)
//   * Standard štokavski, full diacritics, correct case government.
//   * Every technical term is glossed in plain English on first use, and
//     anchored to something the learner already says in English where one
//     exists — the same "English bridge" method the case concept cards use.
//   * Quiz distractors are wrong in a way a learner is actually wrong: a case
//     error, a gender mismatch, an English word order. Never a Serbian form,
//     and never real Croatian marked incorrect.

/** @type {ReadonlyArray<object>} */
export const LESSONS_A1 = [
  // ─────────────────────────────────────────────────────────
  // Plural of Nouns
  // ─────────────────────────────────────────────────────────
  {
    id: 'plural-nouns',
    title: 'Plural of Nouns',
    subtitle: 'One book, two books — how Croatian nouns become plural',
    icon: '📚',
    level: 'A1',
    duration: '~6 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'From One to Many',
        body: 'English adds -s and stops: book → books. Croatian changes the ending instead, and which ending it takes depends on the gender you already learned. That is the whole trick — if you know a noun is feminine, you already know most of its plural.',
        icon: '📚',
      },
      {
        type: 'rule',
        title: 'Feminine: -a becomes -e',
        body: 'The easiest one, and the most reliable rule in the whole system. A feminine noun ends in -a, and its plural ends in -e. žena (woman) → žene (women). knjiga (book) → knjige (books). sestra (sister) → sestre (sisters). Nothing else changes.',
        highlight: '-a → -e',
      },
      {
        type: 'rule',
        title: 'Neuter: -o and -e become -a',
        body: 'A neuter noun ends in -o or -e, and its plural ends in -a. selo (village) → sela (villages). more (sea) → mora (seas). pismo (letter) → pisma (letters). Notice that a neuter plural now ends in -a, which is the feminine SINGULAR ending — that is a real source of confusion, and the only cure is to know the noun.',
        highlight: '-o / -e → -a',
      },
      {
        type: 'rule',
        title: 'Masculine: add -i',
        body: 'A masculine noun ends in a consonant, and the basic plural adds -i. student → studenti. prijatelj (friend) → prijatelji. profesor → profesori. This is the default, and it covers most longer masculine nouns.',
        highlight: 'consonant + -i',
      },
      {
        type: 'rule',
        title: 'Short Masculine Nouns Grow',
        body: 'One-syllable masculine nouns usually take an extra -ov- or -ev- before the -i. stol (table) → stolovi. grad (city) → gradovi. sin (son) → sinovi. After a soft consonant (č, ć, đ, š, ž, j, lj, nj, c) it is -ev-: muž (husband) → muževi, prijelaz → prijelazi. There is no shortcut here — learn the plural with the word, the way you learned der/die/das if you ever studied German.',
        highlight: 'stol → stolovi',
      },
      {
        type: 'table',
        title: 'The Three Patterns',
        headers: ['Gender', 'Singular', 'Plural', 'Change'],
        rows: [
          ['Masculine (long)', 'student', 'studenti', 'add -i'],
          ['Masculine (short)', 'grad', 'gradovi', 'add -ovi'],
          ['Masculine (soft, short)', 'muž', 'muževi', 'add -evi'],
          ['Feminine', 'knjiga', 'knjige', '-a → -e'],
          ['Neuter', 'selo', 'sela', '-o → -a'],
          ['Neuter', 'more', 'mora', '-e → -a'],
        ],
      },
      {
        type: 'rule',
        title: 'When k, g and h Soften',
        body: 'Before the plural -i, a final k, g or h changes: k → c, g → z, h → s. vojnik (soldier) → vojnici. đak (pupil) → đaci. bubreg (kidney) → bubrezi. orah (walnut) → orasi. This is not an exception you have to memorise word by word — it is a sound rule that runs through the whole language, and you will meet it again in the vocative and in the plural of cases.',
        highlight: 'k → c, g → z, h → s',
      },
      {
        type: 'example',
        title: 'Singular and Plural Side by Side',
        items: [
          {
            hr: 'Ovo je knjiga. Ovo su knjige.',
            en: 'This is a book. These are books.',
            note: 'je → su: the verb changes too',
          },
          {
            hr: 'Grad je velik. Gradovi su veliki.',
            en: 'The city is big. The cities are big.',
            note: 'short masculine takes -ovi',
          },
          {
            hr: 'Moja sestra je ovdje. Moje sestre su ovdje.',
            en: 'My sister is here. My sisters are here.',
            note: 'the possessive agrees as well',
          },
          {
            hr: 'More je toplo. Mora su topla.',
            en: 'The sea is warm. The seas are warm.',
            note: 'neuter -e → -a',
          },
          {
            hr: 'Studenti uče hrvatski.',
            en: 'The students are learning Croatian.',
            note: 'plural subject, plural verb',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Five You Simply Have to Know',
        body: 'A handful of very common nouns have plurals that follow no pattern, and they are common precisely because they are old. čovjek (person) → ljudi (people). dijete (child) → djeca (children). brat (brother) → braća (brothers). gospodin (gentleman) → gospoda. oko (eye) → oči, uho (ear) → uši. Learn these five as vocabulary, not as grammar.',
        highlight: 'čovjek → ljudi',
      },
      {
        type: 'example',
        title: 'The Irregulars in Use',
        items: [
          {
            hr: 'Ovdje ima mnogo ljudi.',
            en: 'There are a lot of people here.',
            note: 'never "čovjeci"',
          },
          {
            hr: 'Djeca su u školi.',
            en: 'The children are at school.',
            note: 'djeca looks singular but means many',
          },
          {
            hr: 'Moja braća žive u Splitu.',
            en: 'My brothers live in Split.',
            note: 'braća takes a plural verb',
          },
          {
            hr: 'Oči su joj plave.',
            en: 'Her eyes are blue.',
            note: 'oči — one of the few feminine plurals from a neuter noun',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'What is the plural of "sestra" (sister)?',
        options: ['sestri', 'sestre', 'sestrovi', 'sestra'],
        correct: 1,
        explanation:
          'Feminine nouns end in -a and take -e in the plural: sestra → sestre. The ending -i belongs to masculine nouns and -ovi to short masculine ones, so neither can apply to a feminine noun.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence correctly says "The cities are big"?',
        options: [
          'Grad su veliki.',
          'Gradi su veliki.',
          'Gradovi su veliki.',
          'Gradove su veliki.',
        ],
        correct: 2,
        explanation:
          '"Grad" is a one-syllable masculine noun, so it grows to "gradovi" rather than taking a bare -i. "Grad su" leaves the noun singular under a plural verb, and "gradove" is an object form, not a subject form.',
      },
      {
        type: 'summary',
        title: 'Plural — Key Takeaways',
        points: [
          'Feminine -a → -e: knjiga → knjige',
          'Neuter -o / -e → -a: selo → sela, more → mora',
          'Masculine + -i: student → studenti',
          'Short masculine nouns grow: grad → gradovi, muž → muževi',
          'Before -i, k → c, g → z, h → s: vojnik → vojnici',
          'Learn the five irregulars as words: ljudi, djeca, braća, oči, uši',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Saying No
  // ─────────────────────────────────────────────────────────
  {
    id: 'negation',
    title: 'Saying No',
    subtitle: 'Negation, the three fused verbs, and why Croatian doubles up',
    icon: '🚫',
    level: 'A1',
    duration: '~6 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'Negation Is Almost Free',
        body: 'Croatian has no equivalent of English "do": there is no "I do not know", only "not I-know". You put "ne" in front of the verb and you are done. Three very common verbs fuse with it instead, and one rule about double negatives will surprise you — that is the whole lesson.',
        icon: '🚫',
      },
      {
        type: 'rule',
        title: 'The Rule: ne + verb',
        body: 'Put "ne" immediately before the verb, as a separate word. znam (I know) → ne znam (I do not know). razumijem → ne razumijem (I do not understand). govorim hrvatski → ne govorim hrvatski. Nothing else in the sentence moves.',
        highlight: 'ne + verb',
      },
      {
        type: 'rule',
        title: 'Three Verbs Fuse With It',
        body: 'Exactly three verbs write the negation as one word, and they are three of the most common verbs in the language. biti (to be) → nisam, nisi, nije, nismo, niste, nisu. imati (to have) → nemam, nemaš, nema, nemamo, nemate, nemaju. htjeti (to want) → neću, nećeš, neće, nećemo, nećete, neće. Everything else keeps "ne" separate.',
        highlight: 'nisam · nemam · neću',
      },
      {
        type: 'table',
        title: 'The Three Fused Verbs in Full',
        headers: ['', 'biti (be)', 'imati (have)', 'htjeti (want)'],
        rows: [
          ['ja', 'nisam', 'nemam', 'neću'],
          ['ti', 'nisi', 'nemaš', 'nećeš'],
          ['on / ona / ono', 'nije', 'nema', 'neće'],
          ['mi', 'nismo', 'nemamo', 'nećemo'],
          ['vi', 'niste', 'nemate', 'nećete'],
          ['oni / one / ona', 'nisu', 'nemaju', 'neće'],
        ],
      },
      {
        type: 'example',
        title: 'Everyday Negatives',
        items: [
          {
            hr: 'Ne znam.',
            en: 'I do not know.',
            note: 'the single most useful sentence at A1',
          },
          {
            hr: 'Ne razumijem, možete li ponoviti?',
            en: 'I do not understand, could you repeat?',
            note: 'V-form: polite to a stranger',
          },
          {
            hr: 'Nisam iz Hrvatske.',
            en: 'I am not from Croatia.',
            note: 'biti fuses: nisam, not "ne sam"',
          },
          {
            hr: 'Nemam vremena.',
            en: 'I do not have time.',
            note: 'nemati takes the genitive: vremena',
          },
          {
            hr: 'Neću kavu, hvala.',
            en: 'I do not want coffee, thank you.',
            note: 'htjeti fuses: neću, not "ne hoću"',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Two Negatives Are Required, Not Wrong',
        body: 'English teachers spend years telling you not to say "I do not know nothing". Croatian requires exactly that. If the sentence contains a negative word — nitko (nobody), ništa (nothing), nikad (never), nigdje (nowhere), nijedan (not one) — the verb must ALSO be negated. Nitko ne zna. (Nobody knows.) Ništa ne vidim. (I see nothing.) Nikad ne kasnim. (I am never late.) Leaving the verb positive is not a milder version — it is simply ungrammatical.',
        highlight: 'Nitko ne zna.',
      },
      {
        type: 'example',
        title: 'Double Negation in Practice',
        items: [
          {
            hr: 'Nitko ne zna gdje je.',
            en: 'Nobody knows where he is.',
            note: 'nitko AND ne — both required',
          },
          {
            hr: 'Ništa ne razumijem.',
            en: 'I do not understand anything.',
            note: 'literally: nothing I-do-not-understand',
          },
          {
            hr: 'Nikad ne pijem kavu navečer.',
            en: 'I never drink coffee in the evening.',
            note: 'nikad + ne pijem',
          },
          {
            hr: 'Nigdje ga nema.',
            en: 'He is nowhere to be found.',
            note: 'nigdje + nema',
          },
        ],
      },
      {
        type: 'rule',
        title: '"Nema" Also Means "There Is No"',
        body: 'Beyond "he/she does not have", the form "nema" does the work of English "there is no" and "there are no". Nema kruha. (There is no bread.) Nema nikoga. (There is nobody there.) It never changes for number, and what is missing goes into the genitive — which is why it is "kruha" and not "kruh". You will meet the genitive properly in a later lesson; for now, treat "nema" phrases as set expressions.',
        highlight: 'Nema kruha.',
      },
      {
        type: 'example',
        title: 'Answering in the Negative',
        items: [
          {
            hr: 'Govoriš li hrvatski? — Ne, ne govorim.',
            en: 'Do you speak Croatian? — No, I do not.',
            note: 'the first "ne" answers, the second negates',
          },
          {
            hr: 'Jesi li umoran? — Nisam.',
            en: 'Are you tired? — I am not.',
            note: 'one word is a complete answer',
          },
          {
            hr: 'Imaš li auto? — Nemam.',
            en: 'Do you have a car? — I do not.',
            note: 'no need to repeat the noun',
          },
          {
            hr: 'To nije problem.',
            en: 'That is not a problem.',
            note: 'nije — the most useful fused form of all',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I do not have a brother"?',
        options: ['Ne imam brata.', 'Nemam brata.', 'Nisam brata.', 'Neću brata.'],
        correct: 1,
        explanation:
          '"Imati" is one of the three verbs that fuse with the negation, so it is "nemam" and never "ne imam". "Nisam" negates "to be" and "neću" negates "to want" — different verbs entirely.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence correctly says "Nobody knows"?',
        options: ['Nitko zna.', 'Nitko ne zna.', 'Ne nitko zna.', 'Netko ne zna.'],
        correct: 1,
        explanation:
          'A negative word such as "nitko" requires the verb to be negated too, so "nitko ne zna" is the only grammatical option. "Netko ne zna" is a real Croatian sentence, but it means "somebody does not know" — a different statement.',
      },
      {
        type: 'summary',
        title: 'Negation — Key Takeaways',
        points: [
          'ne goes directly before the verb, as a separate word: ne znam',
          'Three verbs fuse: nisam (biti), nemam (imati), neću (htjeti)',
          'Negative words demand a negative verb: Nitko ne zna. Ništa ne vidim.',
          'nema = "there is no", and what is missing takes the genitive',
          'Nisam / Nemam / Neću are complete answers on their own',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Adjectives and Agreement
  // ─────────────────────────────────────────────────────────
  {
    id: 'adjectives-basic',
    title: 'Adjectives and Agreement',
    subtitle: 'Making describing words match the noun they describe',
    icon: '🎨',
    level: 'A1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Adjectives Have to Match',
        body: 'The gender lesson promised that gender would matter once you met adjectives. This is where it pays off. An English adjective never changes — a big table, a big book, big tables. A Croatian adjective changes its ending to match the noun in gender and number, and once you can do that, your sentences stop sounding like a word list.',
        icon: '🎨',
      },
      {
        type: 'rule',
        title: 'The Three Basic Endings',
        body: 'Take the adjective in its plain masculine form and add nothing for masculine, -a for feminine, -o for neuter. velik (big) → velik stol, velika knjiga, veliko selo. mlad (young) → mlad čovjek, mlada žena, mlado dijete. If that pattern looks familiar, it should — it is the same -∅ / -a / -o that marks the genders themselves.',
        highlight: 'velik · velika · veliko',
      },
      {
        type: 'table',
        title: 'Agreement at a Glance',
        headers: ['', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['big', 'velik stol', 'velika kuća', 'veliko selo'],
          ['small', 'mali grad', 'mala soba', 'malo dijete'],
          ['new', 'nov auto', 'nova knjiga', 'novo pismo'],
          ['good', 'dobar dan', 'dobra ideja', 'dobro jutro'],
          ['beautiful', 'lijep pogled', 'lijepa pjesma', 'lijepo more'],
        ],
      },
      {
        type: 'rule',
        title: 'Plural: -i, -e, -a',
        body: 'In the plural the three endings are -i for masculine, -e for feminine and -a for neuter. veliki stolovi, velike knjige, velika sela. Notice that the neuter plural adjective ends in -a, exactly like the neuter plural noun it describes — the two rhyme, which makes them easy to remember together.',
        highlight: 'veliki · velike · velika',
      },
      {
        type: 'rule',
        title: 'The Fleeting A',
        body: 'A few common adjectives lose a vowel when an ending is added. dobar (good) → dobra, dobro, dobri. This is the same "fleeting a" you meet elsewhere in the language: it appears in the bare masculine form and vanishes as soon as anything follows. Other examples: sretan (happy) → sretna, sretno; hladan (cold) → hladna, hladno; pametan (clever) → pametna, pametno.',
        highlight: 'dobar → dobra',
      },
      {
        type: 'rule',
        title: 'Two Masculine Forms, One Small Difference',
        body: 'Masculine adjectives have a short form and a long form: velik and veliki. The short form works like English "a big table" and is what you use after "je": Stol je velik. The long form works like "the big table" and is what you use to point at a specific one: Veliki stol je u kuhinji. At A1 you can safely use the long form when the adjective sits in front of the noun, and the short form after "je".',
        highlight: 'Stol je velik. / Veliki stol...',
      },
      {
        type: 'example',
        title: 'Agreement in Whole Sentences',
        items: [
          {
            hr: 'Ovo je velika kuća.',
            en: 'This is a big house.',
            note: 'kuća is feminine, so velika',
          },
          {
            hr: 'Zagreb je lijep grad.',
            en: 'Zagreb is a beautiful city.',
            note: 'grad is masculine, so lijep',
          },
          {
            hr: 'More je toplo danas.',
            en: 'The sea is warm today.',
            note: 'more is neuter, so toplo',
          },
          {
            hr: 'Imamo dobre prijatelje.',
            en: 'We have good friends.',
            note: 'plural — and an object form you will meet soon',
          },
          {
            hr: 'Moja mala sestra ide u školu.',
            en: 'My little sister goes to school.',
            note: 'both moja and mala agree with sestra',
          },
        ],
      },
      {
        type: 'example',
        title: 'Adjectives Worth Knowing Today',
        items: [
          { hr: 'velik / mali', en: 'big / small', note: 'the first pair anyone needs' },
          { hr: 'nov / star', en: 'new / old', note: 'star also means old in age' },
          { hr: 'dobar / loš', en: 'good / bad', note: 'dobar loses its a: dobra' },
          { hr: 'lijep / ružan', en: 'beautiful / ugly', note: 'ružan → ružna' },
          { hr: 'skup / jeftin', en: 'expensive / cheap', note: 'essential when shopping' },
          { hr: 'topao / hladan', en: 'warm / cold', note: 'topao → topla, toplo' },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "a new book"? ("knjiga" is feminine.)',
        options: ['nov knjiga', 'nova knjiga', 'novo knjiga', 'novi knjiga'],
        correct: 1,
        explanation:
          'Feminine nouns take an adjective ending in -a, so "nova knjiga". The forms "nov" and "novi" are masculine and "novo" is neuter — none of them can sit in front of a feminine noun.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "More je ___" (The sea is warm).',
        options: ['topao', 'topla', 'toplo', 'topli'],
        correct: 2,
        explanation:
          '"More" is neuter — it ends in -e — so the adjective takes the neuter ending -o: toplo. "Topao" is the masculine form, "topla" the feminine and "topli" the masculine plural.',
      },
      {
        type: 'summary',
        title: 'Adjectives — Key Takeaways',
        points: [
          'An adjective matches its noun in gender and number',
          'Singular: -∅ masculine, -a feminine, -o neuter (velik, velika, veliko)',
          'Plural: -i masculine, -e feminine, -a neuter (veliki, velike, velika)',
          'Some adjectives drop a vowel when an ending is added: dobar → dobra',
          'Short form after je (Stol je velik); long form in front of the noun (veliki stol)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // My, Your, Our — Possessives
  // ─────────────────────────────────────────────────────────
  {
    id: 'possessives',
    title: 'My, Your, Our',
    subtitle: 'Possessive words, and why they change with the thing owned',
    icon: '🔑',
    level: 'A1',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Whose Is It?',
        body: 'English possessives never change: my brother, my sister, my books. Croatian possessives behave like adjectives — they agree with the thing OWNED, not with the owner. That single sentence explains almost everything in this lesson.',
        icon: '🔑',
      },
      {
        type: 'rule',
        title: 'They Agree With What Is Owned',
        body: 'This is the trap for English speakers, so it is worth saying twice. In "moja sestra" the -a comes from "sestra" being feminine — not from anything about me. The same speaker says "moj brat" and "moje pismo" without changing anything about themselves. Ask "what gender is the thing?", never "who owns it?".',
        highlight: 'moj brat · moja sestra · moje pismo',
      },
      {
        type: 'table',
        title: 'The Seven Possessives',
        headers: ['English', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['my', 'moj', 'moja', 'moje'],
          ['your (one person)', 'tvoj', 'tvoja', 'tvoje'],
          ['his / its', 'njegov', 'njegova', 'njegovo'],
          ['her', 'njezin (njen)', 'njezina', 'njezino'],
          ['our', 'naš', 'naša', 'naše'],
          ['your (plural / polite)', 'vaš', 'vaša', 'vaše'],
          ['their', 'njihov', 'njihova', 'njihovo'],
        ],
      },
      {
        type: 'rule',
        title: 'Njegov and Njezin Do Not Change for the Owner',
        body: 'English changes the word for the owner: his book, her book. Croatian does too — njegov for a male owner, njezin for a female one — but then the ENDING still follows the thing owned. A man says "njegov brat" about another man\'s brother and "njegova sestra" about that same man\'s sister. Both forms njezin and njen are correct and current; njezin is the more formal.',
        highlight: 'njegova sestra = his sister',
      },
      {
        type: 'rule',
        title: 'Plural Possessives',
        body: 'In the plural, possessives take the same endings as any adjective: -i for masculine, -e for feminine, -a for neuter. moji prijatelji (my friends), moje sestre (my sisters), moja pisma (my letters). If you can make an adjective plural, you can make a possessive plural.',
        highlight: 'moji · moje · moja',
      },
      {
        type: 'example',
        title: 'Talking About People',
        items: [
          {
            hr: 'Ovo je moj brat.',
            en: 'This is my brother.',
            note: 'brat is masculine → moj',
          },
          {
            hr: 'Moja majka je iz Dalmacije.',
            en: 'My mother is from Dalmatia.',
            note: 'majka is feminine → moja',
          },
          {
            hr: 'Naša obitelj živi u Zagrebu.',
            en: 'Our family lives in Zagreb.',
            note: 'obitelj is feminine → naša',
          },
          {
            hr: 'Njegovi roditelji govore hrvatski.',
            en: 'His parents speak Croatian.',
            note: 'plural masculine → njegovi',
          },
          {
            hr: 'Kako se zove vaša kći?',
            en: 'What is your daughter called?',
            note: 'vaša — polite, to someone you address formally',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Often Leaves Them Out',
        body: 'Where English insists on a possessive, Croatian frequently drops it because the meaning is obvious. "Idem kući" is "I am going home", not "I am going to my home". "Boli me glava" is "my head hurts", with no word for "my" anywhere. Using a possessive there is not wrong, but leaving it out sounds more natural — especially with family members and body parts.',
        highlight: 'Boli me glava.',
      },
      {
        type: 'example',
        title: 'Asking Whose',
        items: [
          {
            hr: 'Čiji je ovo auto?',
            en: 'Whose car is this?',
            note: 'čiji for a masculine noun',
          },
          {
            hr: 'Čija je ovo knjiga?',
            en: 'Whose book is this?',
            note: 'čija for a feminine noun',
          },
          {
            hr: 'Čije je ovo mjesto?',
            en: 'Whose seat is this?',
            note: 'čije for a neuter noun',
          },
          {
            hr: 'To je moje.',
            en: 'That is mine.',
            note: 'neuter moje works as a standalone "mine"',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "my sister"? ("sestra" is feminine.)',
        options: ['moj sestra', 'moja sestra', 'moje sestra', 'moji sestra'],
        correct: 1,
        explanation:
          'The possessive agrees with the thing owned, and "sestra" is feminine, so it takes -a: moja sestra. Your own gender never affects the form.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'A man is talking about his own sister. Which is correct?',
        options: ['njegov sestra', 'njegova sestra', 'njezina sestra', 'njihova sestra'],
        correct: 1,
        explanation:
          '"Njegov" marks a male owner, and the ending then follows "sestra", which is feminine — so "njegova sestra". "Njezina" would mean a woman\'s sister and "njihova" would mean several people\'s sister.',
      },
      {
        type: 'summary',
        title: 'Possessives — Key Takeaways',
        points: [
          'Possessives agree with the thing OWNED, never with the owner',
          'moj / tvoj / njegov / njezin / naš / vaš / njihov',
          'Endings work like adjectives: -∅ / -a / -o, plural -i / -e / -a',
          'njegov = a male owner, njezin (njen) = a female owner',
          'Croatian often omits them where English requires one: Idem kući.',
          'Čiji? Čija? Čije? — whose, agreeing with the thing asked about',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // This, That, Over There
  // ─────────────────────────────────────────────────────────
  {
    id: 'demonstratives',
    title: 'This, That, Over There',
    subtitle: 'Pointing at things — and the three-way distance system',
    icon: '👉',
    level: 'A1',
    duration: '~5 min',
    color: '#d97706',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'English Has Two, Croatian Has Three',
        body: 'English points with "this" and "that". Croatian points with three words, and the middle one has no English equivalent: ovaj is near ME, taj is near YOU, onaj is near neither of us. Once you notice it, you will hear speakers switching between them constantly.',
        icon: '👉',
      },
      {
        type: 'table',
        title: 'The Three Distances',
        headers: ['Word', 'Distance', 'English', 'Place word'],
        rows: [
          ['ovaj', 'near the speaker', 'this (here)', 'ovdje — here'],
          ['taj', 'near the listener', 'that (by you)', 'tu — there, by you'],
          ['onaj', 'away from both', 'that (over there)', 'ondje / tamo — over there'],
        ],
      },
      {
        type: 'rule',
        title: 'They Agree Like Adjectives',
        body: 'Each of the three changes for gender and number exactly as an adjective does. ovaj stol, ova knjiga, ovo selo; plural ovi stolovi, ove knjige, ova sela. The same pattern runs through taj / ta / to and onaj / ona / ono. If you learned the adjective endings, you already know these.',
        highlight: 'ovaj · ova · ovo',
      },
      {
        type: 'table',
        title: 'All Three, All Genders',
        headers: ['', 'Masculine', 'Feminine', 'Neuter'],
        rows: [
          ['this (by me)', 'ovaj', 'ova', 'ovo'],
          ['that (by you)', 'taj', 'ta', 'to'],
          ['that (over there)', 'onaj', 'ona', 'ono'],
        ],
      },
      {
        type: 'rule',
        title: 'The Neuter Form Is Your Workhorse',
        body: 'To say "this is…" or "that is…" about anything at all, use the neuter form and do not worry about the gender of what follows. Ovo je knjiga. Ovo je moj brat. To je problem. The neuter here is not describing the noun — it is standing in for "this thing", which is why it never changes. This is the single most useful pattern in the lesson.',
        highlight: 'Ovo je... / To je...',
      },
      {
        type: 'example',
        title: 'Pointing at Things',
        items: [
          {
            hr: 'Ovo je moja kuća.',
            en: 'This is my house.',
            note: 'neuter ovo, whatever follows',
          },
          {
            hr: 'Ovaj stol je premalen.',
            en: 'This table is too small.',
            note: 'ovaj agrees with stol',
          },
          {
            hr: 'Daj mi tu knjigu, molim te.',
            en: 'Pass me that book, please.',
            note: 'the book is near the listener',
          },
          {
            hr: 'Onaj brijeg je Medvednica.',
            en: 'That hill over there is Medvednica.',
            note: 'far from both of us',
          },
          {
            hr: 'To nije problem.',
            en: 'That is not a problem.',
            note: 'to as a neutral "that"',
          },
        ],
      },
      {
        type: 'example',
        title: 'Here, There and Over There',
        items: [
          {
            hr: 'Ovdje smo.',
            en: 'We are here.',
            note: 'ovdje pairs with ovaj',
          },
          {
            hr: 'Sjedni tu.',
            en: 'Sit there (right by you).',
            note: 'tu pairs with taj',
          },
          {
            hr: 'Živim ondje, blizu mora.',
            en: 'I live over there, near the sea.',
            note: 'ondje pairs with onaj; tamo is just as common',
          },
          {
            hr: 'Odakle si? — Odavde.',
            en: 'Where are you from? — From here.',
            note: 'odavde / odande — from here / from there',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are holding a book and want to say "This is a good book". Which is correct?',
        options: ['Ovaj je dobra knjiga.', 'Ovo je dobra knjiga.', 'Ova je dobra knjiga.'],
        correct: 1,
        explanation:
          'When you say "this is…" about a thing, Croatian uses the neuter "ovo" no matter what follows. "Ova knjiga je dobra" is also correct, but there "ova" sits directly in front of the noun and agrees with it.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Your friend is holding a pen (olovka, feminine). How do you say "that pen (in your hand)"?',
        options: ['ova olovka', 'ta olovka', 'ona olovka'],
        correct: 1,
        explanation:
          'Something near the LISTENER takes the "taj" family, and "olovka" is feminine, so it is "ta olovka". "Ova olovka" would mean the pen is in your own hand and "ona olovka" that it is away from both of you.',
      },
      {
        type: 'summary',
        title: 'Demonstratives — Key Takeaways',
        points: [
          'ovaj = near me, taj = near you, onaj = away from both',
          'Place words follow the same three-way split: ovdje / tu / ondje (or tamo)',
          'All three agree in gender and number, exactly like adjectives',
          'For "this is…" and "that is…", use the neuter: Ovo je… / To je…',
          'To je… is one of the most useful sentence openers at A1',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Accusative — Naming the Object
  // ─────────────────────────────────────────────────────────
  {
    id: 'accusative-intro',
    title: 'The Accusative',
    subtitle: 'The case for the thing you eat, buy, read or see',
    icon: '🎯',
    level: 'A1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The First Case You Actually Need',
        body: 'The cases lesson explained what a case IS. This is the first one you will use in almost every sentence you speak. The accusative marks the thing the verb acts on — what you drink, buy, read, see, want. English does this too, but only with pronouns: you say "I see HIM", not "I see he". That is exactly the same instinct, and Croatian applies it to every noun.',
        icon: '🎯',
      },
      {
        type: 'rule',
        title: 'The English Bridge: he → him',
        body: 'English kept case endings on a handful of words and threw the rest away. he/him, she/her, they/them, who/whom. Nobody has to think about it — you would never say "I see he". The accusative is that instinct written out on every noun in the language, so trust the instinct and just learn the endings.',
        highlight: 'I see HIM → Vidim njega',
      },
      {
        type: 'rule',
        title: 'Feminine: -a becomes -u',
        body: 'The clearest rule of the three, and the one you will use most. A feminine noun ending in -a takes -u as its object form. kava → Pijem kavu. (I drink coffee.) knjiga → Čitam knjigu. (I read a book.) sestra → Vidim sestru. (I see my sister.) One vowel changes and nothing else.',
        highlight: '-a → -u',
      },
      {
        type: 'rule',
        title: 'Neuter: Nothing Changes',
        body: 'Neuter nouns look identical whether they are the subject or the object. more → Vidim more. (I see the sea.) pismo → Čitam pismo. (I am reading a letter.) mlijeko → Pijem mlijeko. This is genuinely free — one whole gender you never have to adjust.',
        highlight: 'neuter = unchanged',
      },
      {
        type: 'rule',
        title: 'Masculine: Is It Alive?',
        body: 'Masculine nouns split in two, and the dividing line is whether the noun is alive. A LIVING masculine noun adds -a: brat → Vidim brata. pas (dog) → Vidim psa. prijatelj → Vidim prijatelja. A NON-LIVING masculine noun does not change at all: stol → Vidim stol. grad → Vidim grad. auto → Vidim auto. Croatian is the only common European language that makes you ask "is it alive?" before choosing an ending — but the question is easy, and the payoff is that half of all masculine nouns need no change.',
        highlight: 'alive + -a · not alive unchanged',
      },
      {
        type: 'table',
        title: 'The Accusative at a Glance',
        headers: ['Noun type', 'Subject form', 'Object form', 'Example'],
        rows: [
          ['Masculine, living', 'brat', 'brata', 'Vidim brata.'],
          ['Masculine, not living', 'stol', 'stol', 'Vidim stol.'],
          ['Feminine in -a', 'kava', 'kavu', 'Pijem kavu.'],
          ['Feminine in a consonant', 'noć', 'noć', 'Volim noć.'],
          ['Neuter', 'more', 'more', 'Vidim more.'],
        ],
      },
      {
        type: 'example',
        title: 'Verbs That Take an Object',
        items: [
          {
            hr: 'Pijem kavu svako jutro.',
            en: 'I drink coffee every morning.',
            note: 'kava → kavu',
          },
          {
            hr: 'Čitam zanimljivu knjigu.',
            en: 'I am reading an interesting book.',
            note: 'the adjective takes -u as well: zanimljivu',
          },
          {
            hr: 'Gledam film.',
            en: 'I am watching a film.',
            note: 'film is masculine and not alive → unchanged',
          },
          {
            hr: 'Volim svoju obitelj.',
            en: 'I love my family.',
            note: 'obitelj ends in a consonant → unchanged',
          },
          {
            hr: 'Poznajem tvoga brata.',
            en: 'I know your brother.',
            note: 'brat is alive → brata, and tvoj follows it',
          },
        ],
      },
      {
        type: 'rule',
        title: 'The Adjective Comes Along',
        body: 'Whatever ending the noun takes, its adjective and possessive take a matching one. Feminine is the tidiest: velika kuća → Vidim veliku kuću. moja sestra → Vidim moju sestru. For a living masculine noun the adjective ends in -og or -eg: dobar prijatelj → Vidim dobrog prijatelja. Do not drill these now — just notice that the whole phrase moves together, never the noun alone.',
        highlight: 'Vidim veliku kuću.',
      },
      {
        type: 'rule',
        title: 'It Also Means Motion Towards',
        body: 'The accusative is not only for objects. After "u" or "na" it marks movement TOWARDS somewhere, answering "where to?". Idem u grad. (I am going into town.) Idem na more. (I am going to the seaside.) Compare that with staying put, which uses a different case: U gradu sam. (I am in town.) The rule to remember is: motion takes the accusative, position does not.',
        highlight: 'Idem u grad. / U gradu sam.',
      },
      {
        type: 'example',
        title: 'Where To, and Where',
        items: [
          {
            hr: 'Idem u školu.',
            en: 'I am going to school.',
            note: 'motion → accusative: školu',
          },
          {
            hr: 'U školi sam.',
            en: 'I am at school.',
            note: 'position → a different case: školi',
          },
          {
            hr: 'Idemo na more u srpnju.',
            en: 'We are going to the seaside in July.',
            note: 'na more — motion, and more never changes',
          },
          {
            hr: 'Dolazim u Zagreb sutra.',
            en: 'I am coming to Zagreb tomorrow.',
            note: 'Zagreb is masculine and not alive → unchanged',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am drinking water"? ("voda" is feminine.)',
        options: ['Pijem voda.', 'Pijem vodu.', 'Pijem vode.', 'Pijem vodi.'],
        correct: 1,
        explanation:
          'A feminine noun in -a takes -u as the object: voda → vodu. "Voda" is the subject form, "vode" and "vodi" belong to other cases you will meet later.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence correctly says "I see my brother"?',
        options: ['Vidim moj brat.', 'Vidim moga brata.', 'Vidim moja brata.'],
        correct: 1,
        explanation:
          '"Brat" is masculine and alive, so it takes -a: brata. The possessive moves with it, giving "moga brata". Leaving the noun as "brat" would be the non-living pattern, which does not apply to a person.',
      },
      {
        type: 'summary',
        title: 'Accusative — Key Takeaways',
        points: [
          'The accusative marks what the verb acts on — the same instinct as English he → him',
          'Feminine -a → -u: Pijem kavu.',
          'Neuter never changes: Vidim more.',
          'Masculine living + -a (Vidim brata); masculine not living unchanged (Vidim stol)',
          'Adjectives and possessives take a matching ending — the phrase moves together',
          'After u / na it also marks motion towards: Idem u grad.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Imati — Having and Not Having
  // ─────────────────────────────────────────────────────────
  {
    id: 'imati-nemati',
    title: 'Having and Not Having',
    subtitle: 'imati, nemati, and the ima / nema that means "there is"',
    icon: '🎒',
    level: 'A1',
    duration: '~6 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'One Verb, Three Jobs',
        body: '"Imati" is the second verb every learner needs after "biti". It says what you own, it says how old you are, and in the third person it turns into the way Croatian says "there is" and "there is not". Three very different jobs from one small verb.',
        icon: '🎒',
      },
      {
        type: 'table',
        title: 'imati — to have',
        headers: ['Person', 'Positive', 'Negative'],
        rows: [
          ['ja', 'imam', 'nemam'],
          ['ti', 'imaš', 'nemaš'],
          ['on / ona / ono', 'ima', 'nema'],
          ['mi', 'imamo', 'nemamo'],
          ['vi', 'imate', 'nemate'],
          ['oni / one / ona', 'imaju', 'nemaju'],
        ],
      },
      {
        type: 'rule',
        title: 'What You Have Is an Object',
        body: 'The thing you have takes the accusative, exactly like the thing you drink or read. Imam sestru. (I have a sister — sestra → sestru.) Imam brata. (I have a brother — alive, so brata.) Imam auto. (I have a car — not alive, so unchanged.) If you can order a coffee, you can already say what you own.',
        highlight: 'Imam sestru.',
      },
      {
        type: 'rule',
        title: 'But What You LACK Takes the Genitive',
        body: 'This is the twist. In the positive, what you have is accusative: Imam auto. In the negative it switches to the genitive — the case of absence: Nemam auta. (I have no car.) Nemam novca. (I have no money.) Nemam vremena. (I have no time.) You do not need the genitive endings yet. Learn these three as phrases; the pattern will make sense when the genitive lesson arrives, and until then you will already be saying them correctly.',
        highlight: 'Nemam vremena.',
      },
      {
        type: 'example',
        title: 'Saying What You Have',
        items: [
          {
            hr: 'Imam dvije sestre i jednog brata.',
            en: 'I have two sisters and one brother.',
            note: 'numbers change the ending too — that comes later',
          },
          {
            hr: 'Imaš li mlađu sestru?',
            en: 'Do you have a younger sister?',
            note: 'li makes it a yes/no question',
          },
          {
            hr: 'Nemamo auto, idemo tramvajem.',
            en: 'We do not have a car, we take the tram.',
            note: 'nemamo — one word, always',
          },
          {
            hr: 'Nemam vremena danas.',
            en: 'I do not have time today.',
            note: 'the classic negative-genitive phrase',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Age Is Something You Have',
        body: 'Croatian does not say "I am thirty" — it says "I have thirty years". Koliko imaš godina? (How old are you? — literally: how many years do you have?) Imam trideset godina. (I am thirty.) Imam dvadeset i pet godina. If you are ever unsure, remember that Croatian treats age as a possession, and the question word is "koliko" rather than "kako star".',
        highlight: 'Imam trideset godina.',
      },
      {
        type: 'rule',
        title: 'Ima and Nema Mean "There Is" and "There Is No"',
        body: 'The third-person forms do double duty as the existence words. Ima kruha. (There is bread.) Nema kruha. (There is no bread.) Ima li mjesta? (Is there room?) Both stay in the third person no matter how many things there are: Ima ljudi. (There are people.) In both directions the thing that exists — or does not — takes the genitive.',
        highlight: 'Ima kruha. / Nema kruha.',
      },
      {
        type: 'example',
        title: 'Is There…?',
        items: [
          {
            hr: 'Ima li ovdje kavane?',
            en: 'Is there a café here?',
            note: 'ima li — the standard way to ask',
          },
          {
            hr: 'Nema nikoga u uredu.',
            en: 'There is nobody in the office.',
            note: 'nema + nikoga — double negation again',
          },
          {
            hr: 'Ima puno turista ljeti.',
            en: 'There are a lot of tourists in summer.',
            note: 'ima stays singular even for many',
          },
          {
            hr: 'Nema problema!',
            en: 'No problem!',
            note: 'you will hear this constantly',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I have a sister"?',
        options: ['Imam sestra.', 'Imam sestru.', 'Imam sestre.', 'Ima sestru.'],
        correct: 1,
        explanation:
          'What you have is an object, so "sestra" takes the accusative -u: Imam sestru. "Ima sestru" would mean he or she has a sister, not you.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you ask someone how old they are?',
        options: ['Kako star si?', 'Koliko imaš godina?', 'Koliko si godina?', 'Koliko star imaš?'],
        correct: 1,
        explanation:
          'Croatian treats age as something you HAVE, so the question is "Koliko imaš godina?" — how many years do you have. Building it around "biti" or around "star" is a direct translation from English and does not work here.',
      },
      {
        type: 'summary',
        title: 'Imati — Key Takeaways',
        points: [
          'imam, imaš, ima, imamo, imate, imaju — and the fused negative nemam…',
          'What you HAVE is accusative: Imam sestru.',
          'What you LACK is genitive: Nemam vremena.',
          'Age is a possession: Koliko imaš godina? — Imam trideset godina.',
          'ima / nema also mean "there is" and "there is no": Nema problema!',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Locative — Saying Where You Are
  // ─────────────────────────────────────────────────────────
  {
    id: 'locative-intro',
    title: 'The Locative',
    subtitle: 'Where you are, and the case that never appears alone',
    icon: '📍',
    level: 'A1',
    duration: '~6 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Case for "Where"',
        body: 'You can now say what you are doing to something. This case says where you are while you do it. It is the friendliest case in the language: the endings are short, there are only two of them worth learning today, and it never turns up without a preposition to warn you it is coming.',
        icon: '📍',
      },
      {
        type: 'rule',
        title: 'It Never Stands Alone',
        body: 'Every other case can appear on its own. The locative cannot — it only ever follows one of a small set of prepositions: u (in), na (on, at), o (about), po (around, along), pri (near, at). That is genuinely useful, because it means you always get a warning that the locative is coming. When you hear "u" or "na" and nothing is moving, the locative follows.',
        highlight: 'u · na · o · po · pri',
      },
      {
        type: 'rule',
        title: 'Masculine and Neuter Take -u',
        body: 'Both masculine and neuter nouns end in -u in the locative. grad → u gradu (in town). Zagreb → u Zagrebu. stol → na stolu (on the table). more → na moru (at the seaside). selo → u selu (in the village). One ending covers two genders.',
        highlight: 'masculine & neuter → -u',
      },
      {
        type: 'rule',
        title: 'Feminine Takes -i',
        body: 'A feminine noun in -a swaps it for -i. škola → u školi (at school). kuća → u kući (at home, in the house). Hrvatska → u Hrvatskoj — an adjective-shaped country name, which behaves slightly differently and is worth learning as a phrase. Notice the contrast with the accusative: u školu is going TO school, u školi is being AT school.',
        highlight: 'feminine → -i',
      },
      {
        type: 'table',
        title: 'Where To vs. Where',
        headers: ['Noun', 'Motion (accusative)', 'Position (locative)'],
        rows: [
          ['škola', 'Idem u školu.', 'U školi sam.'],
          ['grad', 'Idem u grad.', 'U gradu sam.'],
          ['more', 'Idem na more.', 'Na moru sam.'],
          ['kuća', 'Idem u kuću.', 'U kući sam.'],
          ['posao', 'Idem na posao.', 'Na poslu sam.'],
        ],
      },
      {
        type: 'rule',
        title: 'Kamo? and Gdje?',
        body: 'Croatian has separate question words for the two ideas, which makes the choice easier than it looks. "Gdje?" asks where something IS and expects the locative: Gdje si? — U kući sam. "Kamo?" asks where something is GOING and expects the accusative: Kamo ideš? — U grad. In everyday speech many speakers use "gdje" for both, but the answer still follows the rule.',
        highlight: 'Gdje si? / Kamo ideš?',
      },
      {
        type: 'example',
        title: 'Saying Where You Are',
        items: [
          {
            hr: 'Živim u Zagrebu.',
            en: 'I live in Zagreb.',
            note: 'masculine → -u',
          },
          {
            hr: 'Radim u banci.',
            en: 'I work at a bank.',
            note: 'banka → banci, with k → c before -i',
          },
          {
            hr: 'Knjiga je na stolu.',
            en: 'The book is on the table.',
            note: 'na + locative = on',
          },
          {
            hr: 'Ljeti smo uvijek na moru.',
            en: 'In summer we are always at the seaside.',
            note: 'more → moru',
          },
          {
            hr: 'Moji su iz Dalmacije, ali žive u Kanadi.',
            en: 'My family are from Dalmatia but live in Canada.',
            note: 'Kanada → Kanadi',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Also "About"',
        body: 'The preposition "o" plus the locative means "about" in the sense of a topic. Govorimo o filmu. (We are talking about the film.) Razmišljam o tebi. (I am thinking about you.) Što misliš o tome? (What do you think about that?) It is the same ending you already know, doing a completely different job.',
        highlight: 'Govorimo o filmu.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am at school"? ("škola" is feminine.)',
        options: ['U školu sam.', 'U školi sam.', 'U škola sam.', 'Na školi sam.'],
        correct: 1,
        explanation:
          'Position takes the locative, and a feminine noun swaps -a for -i: u školi. "U školu" is the accusative, which would mean you are going to school rather than already there.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence means "I am going to town" (not "I am in town")?',
        options: ['U gradu sam.', 'Idem u grad.', 'Idem u gradu.', 'Grad sam.'],
        correct: 1,
        explanation:
          'Motion takes the accusative, and "grad" is masculine and not alive, so it does not change: Idem u grad. "U gradu" is the locative and describes where you already are.',
      },
      {
        type: 'summary',
        title: 'Locative — Key Takeaways',
        points: [
          'The locative never appears without a preposition: u, na, o, po, pri',
          'Masculine and neuter take -u: u gradu, na moru',
          'Feminine takes -i: u školi, u kući',
          'Motion uses the accusative, position uses the locative: u školu vs. u školi',
          'Gdje? expects a locative answer; Kamo? expects an accusative one',
          'o + locative means "about": Govorimo o filmu.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Prepositions of Place
  // ─────────────────────────────────────────────────────────
  {
    id: 'prepositions-place',
    title: 'Prepositions of Place',
    subtitle: 'In, on, next to, under — and which case each one demands',
    icon: '🧭',
    level: 'A1',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Every Preposition Rules a Case',
        body: 'You know two cases now, which is exactly enough to place things in space. The rule that makes prepositions manageable is that each one always demands the same case — it is a property of the word, like gender. Learn the preposition together with the case it rules and you never have to decide again.',
        icon: '🧭',
      },
      {
        type: 'rule',
        title: 'The Big Two: u and na',
        body: 'These two carry most of the work. "u" is in or into, "na" is on, at or onto. Both take the locative when nothing is moving and the accusative when something is. Whether a place uses u or na is partly idiomatic and simply has to be learned: u gradu but na moru, u školi but na fakultetu, u kući but na poslu.',
        highlight: 'u = in · na = on / at',
      },
      {
        type: 'table',
        title: 'Which Places Take Which',
        headers: ['Place', 'Preposition', 'Position', 'Motion'],
        rows: [
          ['grad (town)', 'u', 'u gradu', 'u grad'],
          ['škola (school)', 'u', 'u školi', 'u školu'],
          ['kuća (house)', 'u', 'u kući', 'u kuću'],
          ['more (sea)', 'na', 'na moru', 'na more'],
          ['posao (work)', 'na', 'na poslu', 'na posao'],
          ['tržnica (market)', 'na', 'na tržnici', 'na tržnicu'],
        ],
      },
      {
        type: 'rule',
        title: 'The Genitive Group',
        body: 'A large family of place prepositions all take the genitive, and they never change case for motion. kod (at, at the home of), pored (next to), blizu (near), do (up to, beside), ispred (in front of), iza (behind), iznad (above), ispod (under), između (between). Because they all behave the same way, you can learn them as one block: whatever follows takes the genitive.',
        highlight: 'kod · pored · blizu · ispred · iza · ispod',
      },
      {
        type: 'rule',
        title: 'Kod Is the One You Will Use Daily',
        body: '"Kod" means "at the place of" and covers what English says with "at" plus a person or a business. Kod kuće sam. (I am at home.) Idem kod doktora. (I am going to the doctor\'s.) Bio sam kod bake. (I was at my grandmother\'s.) Note "kod kuće" for being at home, against "idem kući" for going home — two set phrases worth memorising exactly as they are.',
        highlight: 'kod kuće = at home',
      },
      {
        type: 'example',
        title: 'Placing Things',
        items: [
          {
            hr: 'Knjiga je na stolu.',
            en: 'The book is on the table.',
            note: 'na + locative',
          },
          {
            hr: 'Mačka je ispod stola.',
            en: 'The cat is under the table.',
            note: 'ispod + genitive: stola',
          },
          {
            hr: 'Kavana je pored banke.',
            en: 'The café is next to the bank.',
            note: 'pored + genitive: banke',
          },
          {
            hr: 'Auto je ispred kuće.',
            en: 'The car is in front of the house.',
            note: 'ispred + genitive: kuće',
          },
          {
            hr: 'Živim blizu mora.',
            en: 'I live near the sea.',
            note: 'blizu + genitive: mora',
          },
        ],
      },
      {
        type: 'rule',
        title: 'S / Sa and Od — With and From',
        body: 'Two more you will need immediately. "s" (or "sa") means "with" and takes the instrumental: Idem s prijateljem. Use "sa" before a word starting with s, š, z or ž — sa sestrom, sa Šimom — and plain "s" everywhere else; it is purely about being easy to say. "od" means "from" in the sense of a starting point and takes the genitive: od Zagreba do Splita.',
        highlight: 's / sa · od',
      },
      {
        type: 'example',
        title: 'Getting Around',
        items: [
          {
            hr: 'Idem od kuće do posla pješice.',
            en: 'I walk from home to work.',
            note: 'od … do + genitive',
          },
          {
            hr: 'Sjedim između brata i sestre.',
            en: 'I am sitting between my brother and my sister.',
            note: 'između + genitive, twice',
          },
          {
            hr: 'Idemo sa Sanjom u kino.',
            en: 'We are going to the cinema with Sanja.',
            note: 'sa before S-, and u kino for motion',
          },
          {
            hr: 'Tržnica je iza katedrale.',
            en: 'The market is behind the cathedral.',
            note: 'iza + genitive',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I am at home"?',
        options: ['Idem kući.', 'Kod kuće sam.', 'U kuću sam.', 'Na kući sam.'],
        correct: 1,
        explanation:
          '"Kod kuće" is the set phrase for being at home. "Idem kući" is also correct Croatian, but it means you are on your way home rather than already there.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence says "The café is next to the bank"?',
        options: [
          'Kavana je pored banka.',
          'Kavana je pored banci.',
          'Kavana je pored banke.',
          'Kavana je pored banku.',
        ],
        correct: 2,
        explanation:
          '"Pored" always takes the genitive, and the genitive of the feminine "banka" is "banke". The other options give the subject form, the locative and the accusative respectively — none of which this preposition allows.',
      },
      {
        type: 'summary',
        title: 'Prepositions of Place — Key Takeaways',
        points: [
          'Each preposition always rules the same case — learn them as a pair',
          'u and na switch: locative for position, accusative for motion',
          'kod, pored, blizu, ispred, iza, iznad, ispod, između — all genitive',
          'kod kuće = at home; idem kući = going home',
          's / sa = with (instrumental); od … do = from … to (genitive)',
          'Whether a place takes u or na is idiomatic: u gradu, but na moru',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Genitive — Of, From, and Absence
  // ─────────────────────────────────────────────────────────
  {
    id: 'genitive-intro',
    title: 'The Genitive',
    subtitle: 'Belonging, quantity, absence — the busiest case in Croatian',
    icon: '🔗',
    level: 'A1',
    duration: '~7 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'The Case You Have Already Been Using',
        body: 'You have met the genitive three times already without being told: nemam vremena, nema kruha, pored banke. It is the most frequently used case in Croatian, and it does four jobs — belonging, quantity, absence, and following a long list of prepositions. Here it is properly.',
        icon: '🔗',
      },
      {
        type: 'rule',
        title: "The English Bridge: the dog's bone",
        body: 'English has one surviving genitive and uses it constantly: the apostrophe-s. "the dog\'s bone", "my sister\'s car", "the end of the film". Croatian has no apostrophe — it changes the ending of the OWNER instead, and puts the owner second. auto moje sestre = my sister\'s car, literally "car of-my-sister".',
        highlight: 'auto moje sestre',
      },
      {
        type: 'rule',
        title: 'Masculine and Neuter Take -a',
        body: "Both take -a in the genitive singular. grad → centar grada (the centre of the city). brat → auto moga brata (my brother's car). more → boja mora (the colour of the sea). pismo → kraj pisma (the end of the letter). If a masculine noun is alive, its genitive looks identical to its accusative — that overlap is normal and causes no confusion in practice.",
        highlight: 'masculine & neuter → -a',
      },
      {
        type: 'rule',
        title: 'Feminine Takes -e',
        body: 'A feminine noun in -a swaps it for -e. sestra → auto moje sestre. kuća → vrata kuće (the door of the house). Hrvatska → iz Hrvatske (from Croatia). škola → blizu škole (near the school). One vowel again, and you have the most common genitive ending in the language.',
        highlight: 'feminine → -e',
      },
      {
        type: 'table',
        title: 'The Genitive Endings',
        headers: ['Gender', 'Subject form', 'Genitive', 'In a phrase'],
        rows: [
          ['Masculine', 'grad', 'grada', 'centar grada'],
          ['Masculine', 'brat', 'brata', 'auto moga brata'],
          ['Feminine', 'sestra', 'sestre', 'knjiga moje sestre'],
          ['Feminine', 'Hrvatska', 'Hrvatske', 'iz Hrvatske'],
          ['Neuter', 'more', 'mora', 'boja mora'],
          ['Neuter', 'selo', 'sela', 'blizu sela'],
        ],
      },
      {
        type: 'rule',
        title: 'Job Two: Quantity',
        body: 'After a word of quantity, the thing measured goes into the genitive. čaša vode (a glass of water). šalica kave (a cup of coffee). malo kruha (a little bread). puno ljudi (a lot of people). This is the same instinct as English "of", and it is why a café order sounds the way it does.',
        highlight: 'šalica kave',
      },
      {
        type: 'rule',
        title: 'Job Three: Absence',
        body: 'When something is not there, it takes the genitive. Nema kruha. (There is no bread.) Nemam novca. (I have no money.) Nema nikoga. (There is nobody.) You met this in the negation lesson as a set of phrases; now you can see why. Absence in Croatian is expressed as a lack OF something, and "of" is the genitive.',
        highlight: 'Nema kruha.',
      },
      {
        type: 'rule',
        title: 'Job Four: After Prepositions',
        body: 'More prepositions take the genitive than take any other case. iz (out of, from), od (from), do (to, until), bez (without), kod (at), poslije (after), prije (before), zbog (because of), plus the whole place group you already know. Kava bez šećera. (Coffee without sugar.) Iz Hrvatske sam. (I am from Croatia.) Vidimo se poslije posla.',
        highlight: 'iz · od · do · bez · kod · prije · poslije',
      },
      {
        type: 'example',
        title: 'The Genitive at Work',
        items: [
          {
            hr: 'Ovo je kuća moje bake.',
            en: "This is my grandmother's house.",
            note: 'belonging — the owner goes second and takes -e',
          },
          {
            hr: 'Molim vas, čašu vode.',
            en: 'A glass of water, please.',
            note: 'quantity — voda → vode',
          },
          {
            hr: 'Kavu bez šećera, molim.',
            en: 'Coffee without sugar, please.',
            note: 'bez + genitive',
          },
          {
            hr: 'Moji roditelji su iz Hrvatske.',
            en: 'My parents are from Croatia.',
            note: 'iz + genitive — how you say where you are from',
          },
          {
            hr: 'Nema mlijeka u hladnjaku.',
            en: 'There is no milk in the fridge.',
            note: 'absence + a locative for the place',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "a cup of coffee"? ("kava" is feminine.)',
        options: ['šalica kava', 'šalica kavu', 'šalica kave', 'šalica kavi'],
        correct: 2,
        explanation:
          'A quantity word puts what is measured into the genitive, and a feminine noun swaps -a for -e: šalica kave. "Kavu" is the accusative — right for drinking the coffee, wrong for measuring it.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which sentence says "I am from Croatia"?',
        options: [
          'Ja sam iz Hrvatska.',
          'Ja sam iz Hrvatsku.',
          'Ja sam iz Hrvatskoj.',
          'Ja sam iz Hrvatske.',
        ],
        correct: 3,
        explanation:
          '"Iz" always takes the genitive, and the genitive of "Hrvatska" is "Hrvatske". The other endings are the subject form, the accusative and the locative — the locative "u Hrvatskoj" is right for living there, not for coming from there.',
      },
      {
        type: 'summary',
        title: 'Genitive — Key Takeaways',
        points: [
          'Croatian\'s answer to English ’s and "of" — the owner goes second',
          'Masculine and neuter take -a; feminine takes -e',
          'Quantity: šalica kave, čaša vode, puno ljudi',
          'Absence: nema kruha, nemam novca',
          'A long list of prepositions demand it: iz, od, do, bez, kod, prije, poslije',
          'It is the most common case in Croatian — time spent here pays off everywhere',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // The Vocative — Calling Someone
  // ─────────────────────────────────────────────────────────
  {
    id: 'vocative-intro',
    title: 'The Vocative',
    subtitle: 'The case for addressing someone directly',
    icon: '📣',
    level: 'A1',
    duration: '~5 min',
    color: '#e11d48',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'A Case Just for Names',
        body: 'The vocative has one job: it marks the person you are speaking TO. English lost it centuries ago and only kept a fossil or two — "O Lord". Croatian uses it every time anyone calls out a name, which means you will hear it long before you need to produce it.',
        icon: '📣',
      },
      {
        type: 'rule',
        title: 'Why It Matters More Than It Looks',
        body: 'Getting the vocative wrong is not a grammar slip that passes unnoticed — it is the difference between calling a friend and reading their name off a list. "Ivan!" sounds like you are checking attendance; "Ivane!" is how you get his attention. This is one of the fastest ways to sound like you belong.',
        highlight: 'Ivane! not Ivan!',
      },
      {
        type: 'rule',
        title: 'Masculine: add -e',
        body: 'Most masculine nouns and names add -e. Ivan → Ivane! brat → brate! gospodin → gospodine! profesor → profesore! doktor → doktore! This one ending covers the great majority of what you will need.',
        highlight: 'Ivan → Ivane',
      },
      {
        type: 'rule',
        title: 'After a Soft Consonant, -u',
        body: 'If the noun ends in a soft consonant — č, ć, đ, š, ž, j, lj, nj, c — it takes -u instead, simply because -e is awkward there. prijatelj → prijatelju! muž → mužu! kralj → kralju! You can hear why: "prijatelje" fights the tongue in a way "prijatelju" does not.',
        highlight: 'prijatelj → prijatelju',
      },
      {
        type: 'rule',
        title: 'When k, g and h Change',
        body: 'A final k, g or h softens before the -e, the same way it did in the plural. junak (hero) → junače! Bog → Bože! duh → duše! vojnik → vojniče! If you learned k → c, g → z, h → s for the plural, note that before -e it goes further: k → č, g → ž, h → š.',
        highlight: 'junak → junače',
      },
      {
        type: 'table',
        title: 'The Patterns',
        headers: ['Ending', 'Vocative', 'Example', 'Called as'],
        rows: [
          ['hard consonant', '+ -e', 'Ivan', 'Ivane!'],
          ['soft consonant', '+ -u', 'prijatelj', 'prijatelju!'],
          ['-k / -g / -h', 'softens + -e', 'junak', 'junače!'],
          ['feminine -a', '+ -o', 'žena', 'ženo!'],
          ['feminine -ica', '+ -e', 'učiteljica', 'učiteljice!'],
          ['masculine -o / -e', 'unchanged', 'Marko', 'Marko!'],
        ],
      },
      {
        type: 'rule',
        title: 'Feminine: -o, but Names Usually Stay',
        body: 'A feminine noun in -a takes -o: žena → ženo! majka → majko! gospođa → gospođo! Nouns in -ica take -e instead: učiteljica → učiteljice! sestrica → sestrice! But female first names are the everyday exception — in modern spoken Croatian people call out Ana!, Marija!, Ivana! exactly as they are. The -o forms (Ano!) exist and sound old-fashioned or regional.',
        highlight: 'Ana! not Ano!',
      },
      {
        type: 'rule',
        title: 'Some Names Never Change',
        body: 'Masculine names ending in -o or -e are already comfortable to call out and stay as they are: Marko!, Ivo!, Mate!, Hrvoje!. So are most foreign names: John!, Peter!. If a name already ends in a vowel, leave it alone.',
        highlight: 'Marko! Ivo! Mate!',
      },
      {
        type: 'example',
        title: 'Calling and Greeting',
        items: [
          {
            hr: 'Ivane, dođi ovamo!',
            en: 'Ivan, come here!',
            note: 'the everyday vocative',
          },
          {
            hr: 'Dobar dan, gospodine!',
            en: 'Good day, sir!',
            note: 'gospodin → gospodine — polite and standard',
          },
          {
            hr: 'Oprostite, gospođo.',
            en: 'Excuse me, madam.',
            note: 'gospođa → gospođo',
          },
          {
            hr: 'Hvala, prijatelju.',
            en: 'Thank you, my friend.',
            note: 'soft consonant → -u',
          },
          {
            hr: 'Ana, imaš li minutu?',
            en: 'Ana, do you have a minute?',
            note: 'female first names normally stay unchanged',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You want to call out to your friend Ivan. What do you say?',
        options: ['Ivan!', 'Ivane!', 'Ivanu!', 'Ivana!'],
        correct: 1,
        explanation:
          'A masculine name ending in a hard consonant takes -e in the vocative: Ivane! Using the plain form "Ivan!" sounds like reading a name off a list rather than calling to someone.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you politely address a man you do not know?',
        options: ['gospodin', 'gospodine', 'gospodinu', 'gospodo'],
        correct: 1,
        explanation:
          '"Gospodin" ends in a hard consonant, so the vocative is "gospodine". "Gospodinu" is the dative and "gospodo" addresses a group of gentlemen rather than one man.',
      },
      {
        type: 'summary',
        title: 'Vocative — Key Takeaways',
        points: [
          'The vocative marks the person you are speaking to',
          'Masculine hard consonant + -e: Ivan → Ivane!',
          'Masculine soft consonant + -u: prijatelj → prijatelju!',
          'k, g, h soften before -e: junak → junače!',
          'Feminine -a → -o (ženo!), -ica → -e (učiteljice!)',
          'Female first names normally stay unchanged: Ana!, Marija!',
          'Names already ending in a vowel do not change: Marko!, Ivo!',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Can, Must, Want
  // ─────────────────────────────────────────────────────────
  {
    id: 'modals-basic',
    title: 'Can, Must, Want',
    subtitle: 'moći, morati, htjeti, trebati — and the infinitive that follows',
    icon: '💪',
    level: 'A1',
    duration: '~6 min',
    color: '#ea580c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'Four Verbs That Unlock Whole Sentences',
        body: 'Once you can say "I want", "I can", "I have to" and "I need", you can build a sentence around almost any verb you know — including verbs you have not learned to conjugate. That is why these four are worth a lesson of their own: they multiply everything else you have.',
        icon: '💪',
      },
      {
        type: 'rule',
        title: 'The Pattern: modal + infinitive',
        body: 'Conjugate the modal verb for the person, then leave the second verb in its dictionary form — the infinitive, which always ends in -ti or -ći. Želim učiti. (I want to learn.) Moram ići. (I have to go.) Mogu doći. (I can come.) Only the first verb changes, exactly as in English "I must GO", not "I must goes".',
        highlight: 'Moram ići.',
      },
      {
        type: 'table',
        title: 'moći — to be able to',
        headers: ['Person', 'Form', 'Example'],
        rows: [
          ['ja', 'mogu', 'Mogu doći sutra.'],
          ['ti', 'možeš', 'Možeš li ponoviti?'],
          ['on / ona', 'može', 'Ne može doći.'],
          ['mi', 'možemo', 'Možemo krenuti.'],
          ['vi', 'možete', 'Možete sjesti.'],
          ['oni / one', 'mogu', 'Mogu čekati.'],
        ],
      },
      {
        type: 'rule',
        title: 'moći Is Slightly Irregular',
        body: 'Notice that "ja" and "oni" share the same form, "mogu", and that the g becomes ž everywhere in between. That is the same softening you met in the plural and the vocative — it is a sound rule, not a random exception. And "Može!" on its own is one of the most useful words in the language: it means "sure", "fine by me", "go ahead".',
        highlight: 'Može!',
      },
      {
        type: 'table',
        title: 'morati, htjeti, trebati',
        headers: ['Person', 'morati (must)', 'htjeti (want)', 'trebati (need)'],
        rows: [
          ['ja', 'moram', 'hoću', 'trebam'],
          ['ti', 'moraš', 'hoćeš', 'trebaš'],
          ['on / ona', 'mora', 'hoće', 'treba'],
          ['mi', 'moramo', 'hoćemo', 'trebamo'],
          ['vi', 'morate', 'hoćete', 'trebate'],
          ['oni / one', 'moraju', 'hoće', 'trebaju'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Ways to Want',
        body: '"Htjeti" (hoću) and "željeti" (želim) both mean to want. "Hoću" is direct and everyday; "želim" is a little softer and more polite. Its negative is the fused "neću" you already know. For requests, though, Croatian prefers the conditional: "Htio bih kavu" (a man speaking) or "Htjela bih kavu" (a woman speaking) is the natural way to order something — "Hoću kavu" is grammatical but sounds blunt.',
        highlight: 'Htio / Htjela bih…',
      },
      {
        type: 'rule',
        title: 'Trebati Has a Second Life',
        body: '"Trebam" plus an infinitive means "I need to". Trebam ići. But "trebati" also takes a plain object for a thing you need: Trebam pomoć. (I need help.) Treba mi odmor. (I need a rest — literally "a rest is needed to me".) That second pattern is very common and worth recognising even before you can build it yourself.',
        highlight: 'Trebam pomoć. / Treba mi odmor.',
      },
      {
        type: 'example',
        title: 'Everyday Modal Sentences',
        items: [
          {
            hr: 'Moram ići, kasnim.',
            en: 'I have to go, I am late.',
            note: 'moram + infinitive',
          },
          {
            hr: 'Možete li mi pomoći?',
            en: 'Could you help me?',
            note: 'V-form request — polite to a stranger',
          },
          {
            hr: 'Ne mogu doći večeras.',
            en: 'I cannot come tonight.',
            note: 'ne stays separate: ne mogu',
          },
          {
            hr: 'Htjela bih rezervirati stol.',
            en: 'I would like to book a table.',
            note: 'a woman speaking; a man says htio bih',
          },
          {
            hr: 'Trebam naučiti hrvatski.',
            en: 'I need to learn Croatian.',
            note: 'trebam + infinitive',
          },
          {
            hr: 'Znaš li plivati?',
            en: 'Can you swim?',
            note: 'znati + infinitive = know HOW to',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Moći or Znati?',
        body: 'English uses "can" for both ability and permission, so both come out as "can swim" and "can go". Croatian splits them. "Znati" is a skill you learned: Znam plivati. (I can swim — I know how.) "Moći" is being able to right now: Ne mogu plivati, boli me rame. (I cannot swim, my shoulder hurts.) Choosing the wrong one is understandable but noticeable.',
        highlight: 'Znam plivati. / Mogu plivati.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I have to go"?',
        options: ['Moram idem.', 'Moram ići.', 'Moram idi.', 'Moram išao.'],
        correct: 1,
        explanation:
          'A modal verb is followed by the infinitive, the dictionary form ending in -ti or -ći: moram ići. Conjugating the second verb as well ("moram idem") is the most common learner error here.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'You learned to swim as a child. How do you say "I can swim"?',
        options: ['Mogu plivati.', 'Znam plivati.', 'Moram plivati.', 'Hoću plivati.'],
        correct: 1,
        explanation:
          'For a skill you have acquired, Croatian uses "znati": Znam plivati. "Mogu plivati" is also correct Croatian, but it means you are able to swim right now — in this pool, today.',
      },
      {
        type: 'summary',
        title: 'Modals — Key Takeaways',
        points: [
          'Modal + infinitive: only the first verb changes (Moram ići.)',
          'moći: mogu, možeš, može, možemo, možete, mogu — and Može! means "sure"',
          'morati: moram… · htjeti: hoću… (negative neću) · trebati: trebam…',
          'For requests use the conditional: Htio bih / Htjela bih…',
          'znati + infinitive = know how to; moći = able to right now',
          'Trebam pomoć — trebati also takes a plain object',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Giving Instructions
  // ─────────────────────────────────────────────────────────
  {
    id: 'imperative-basic',
    title: 'Giving Instructions',
    subtitle: 'The imperative — asking, telling, and asking politely',
    icon: '☝️',
    level: 'A1',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'How to Ask For Things',
        body: 'The imperative is the form you use to tell someone to do something — sit down, come here, pass me the salt. It sounds abrupt described that way, but in practice it is how every polite request, every recipe and every set of directions is built. You will need it the first time you ask anyone for anything.',
        icon: '☝️',
      },
      {
        type: 'rule',
        title: 'Build It From the "Oni" Form',
        body: 'Take the "oni" (they) form of the present, drop the -u, and you have the stem. Then add -i for one person, -imo for "let us", -ite for a group or for politeness. pišu → piš- → piši! pišimo! pišite! govore → govor- → govori! govorimo! govorite! It is one rule and it covers most verbs.',
        highlight: 'piši! · pišimo! · pišite!',
      },
      {
        type: 'rule',
        title: 'Verbs in -aju Take -j',
        body: 'If the "oni" form ends in -aju, the imperative ends in -j rather than -i. čitaju → čitaj! (read!) gledaju → gledaj! (look!) daju → daj! (give!) The plural forms follow: čitajmo!, čitajte!. "Daj" and "dajte" are worth learning right now — they are how you ask for anything to be passed to you.',
        highlight: 'čitaj! · daj! · gledaj!',
      },
      {
        type: 'table',
        title: 'Three Forms, One Stem',
        headers: ['Verb', 'you (one)', 'let us', 'you (plural / polite)'],
        rows: [
          ['čitati (read)', 'čitaj!', 'čitajmo!', 'čitajte!'],
          ['govoriti (speak)', 'govori!', 'govorimo!', 'govorite!'],
          ['pisati (write)', 'piši!', 'pišimo!', 'pišite!'],
          ['doći (come)', 'dođi!', 'dođimo!', 'dođite!'],
          ['ići (go)', 'idi!', 'idimo!', 'idite!'],
          ['biti (be)', 'budi!', 'budimo!', 'budite!'],
        ],
      },
      {
        type: 'rule',
        title: 'The -ite Form Is the Polite One',
        body: 'The plural form does double duty: it addresses a group, and it addresses one person you are being formal with — exactly like the V-form you met in greetings. To a friend: Sjedni! To a stranger, a customer, an older person: Sjednite! Getting this right matters more than the grammar itself, because using the singular with a stranger sounds curt.',
        highlight: 'Sjedni! → Sjednite!',
      },
      {
        type: 'rule',
        title: 'Saying "Do Not": nemoj',
        body: 'Croatian does not negate the imperative with a plain "ne". It uses "nemoj" plus the infinitive: nemoj (one person), nemojmo (let us not), nemojte (plural or polite). Nemoj ići! (Do not go!) Nemojte se brinuti. (Do not worry.) Nemoj zaboraviti. (Do not forget.) One word to learn, and it works with every verb in the language.',
        highlight: 'Nemoj ići!',
      },
      {
        type: 'rule',
        title: 'The Words That Soften Everything',
        body: 'A bare imperative can sound sharp, and Croatian softens it the same way English does. "Molim" (please) and "molim te" / "molim vas" turn an order into a request. "Izvoli" / "izvolite" means "here you are" or "go ahead". "Oprosti" / "oprostite" means "sorry" or "excuse me" and is how you open a request to a stranger. Attach one of these and the imperative becomes ordinary politeness.',
        highlight: 'molim vas · izvolite · oprostite',
      },
      {
        type: 'example',
        title: 'Requests You Will Use',
        items: [
          {
            hr: 'Oprostite, možete li mi pomoći?',
            en: 'Excuse me, could you help me?',
            note: 'the safest way to open with a stranger',
          },
          {
            hr: 'Daj mi vode, molim te.',
            en: 'Pass me some water, please.',
            note: 'daj + molim te, to a friend',
          },
          {
            hr: 'Dođite sutra ujutro.',
            en: 'Come tomorrow morning.',
            note: 'polite plural form',
          },
          {
            hr: 'Nemojte se brinuti.',
            en: 'Do not worry.',
            note: 'nemojte + infinitive',
          },
          {
            hr: 'Izvolite, sjednite.',
            en: 'Please, take a seat.',
            note: 'two polite forms together',
          },
          {
            hr: 'Idi ravno pa skreni lijevo.',
            en: 'Go straight on, then turn left.',
            note: 'directions are pure imperative',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'You are asking a stranger to sit down. Which is right?',
        options: ['Sjedni!', 'Sjednite!', 'Sjediš!', 'Nemoj sjesti!'],
        correct: 1,
        explanation:
          'The -ite form is used for a group and for one person you address formally, so a stranger gets "Sjednite!". "Sjedni!" is for a friend, "sjediš" is a statement rather than a request, and "nemoj sjesti" tells them not to.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "Do not forget!" to a friend?',
        options: ['Ne zaboravi!', 'Nemoj zaboraviti!', 'Ne zaboraviti!', 'Nemoj zaboravi!'],
        correct: 1,
        explanation:
          'A negative instruction is built with "nemoj" plus the infinitive: Nemoj zaboraviti! "Ne zaboravi" is heard, but "nemoj + infinitive" is the standard pattern and always safe.',
      },
      {
        type: 'summary',
        title: 'The Imperative — Key Takeaways',
        points: [
          'Take the "oni" form, drop -u, add -i / -imo / -ite',
          'Verbs whose "oni" form ends in -aju take -j: čitaj!, daj!',
          'The -ite form is both plural and polite: Sjednite!',
          'Negative instructions use nemoj / nemojmo / nemojte + infinitive',
          'molim (te / vas), izvolite and oprostite soften any request',
          'Directions are pure imperative: Idi ravno pa skreni lijevo.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Reflexive Verbs and Daily Routine
  // ─────────────────────────────────────────────────────────
  {
    id: 'reflexive-verbs',
    title: 'Verbs With "Se"',
    subtitle: 'Reflexive verbs, your daily routine, and where "se" sits',
    icon: '🔁',
    level: 'A1',
    duration: '~6 min',
    color: '#4f46e5',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'You Already Know One',
        body: 'The very first thing you learned to say was "Kako se zoveš?" — and that little "se" is a whole verb class. A large family of Croatian verbs carries "se", some because the action comes back to the doer, many simply because that is the verb. Learning where "se" goes is most of the work.',
        icon: '🔁',
      },
      {
        type: 'rule',
        title: 'What "Se" Does',
        body: 'In its clearest use, "se" means the action returns to the doer: tuširam se (I shower myself), oblačim se (I dress myself). But many verbs carry "se" with no reflexive meaning at all — smijati se (to laugh), bojati se (to be afraid), sjećati se (to remember), dogoditi se (to happen). Treat "se" as part of the verb and learn it with the word, the way you learn a noun with its gender.',
        highlight: 'zvati se · tuširati se · smijati se',
      },
      {
        type: 'rule',
        title: 'Where "Se" Goes: Second Position',
        body: 'This is the part worth real attention. "Se" is a clitic — a word too small to stand alone — and Croatian clitics take the SECOND position in the sentence, not a position next to their verb. Zovem se Ana. Kako se zoveš? Ja se zovem Ana. In each one, "se" is the second element, whatever comes first. Put it at the very start and the sentence stops being Croatian.',
        highlight: 'Kako se zoveš?',
      },
      {
        type: 'table',
        title: 'Second Position in Action',
        headers: ['Sentence', 'First element', 'Where se sits'],
        rows: [
          ['Zovem se Ana.', 'Zovem', 'right after the verb'],
          ['Ja se zovem Ana.', 'Ja', 'right after the pronoun'],
          ['Kako se zoveš?', 'Kako', 'right after the question word'],
          ['Danas se odmaram.', 'Danas', 'right after the time word'],
          ['Ne osjećam se dobro.', 'Ne osjećam', 'after the negated verb'],
        ],
      },
      {
        type: 'rule',
        title: 'Conjugate the Verb, Never the "Se"',
        body: '"Se" never changes — not for person, not for number, not for tense. Only the verb moves. zovem se, zoveš se, zove se, zovemo se, zovete se, zovu se. That makes reflexive verbs no harder to conjugate than any other; the only new thing is placement.',
        highlight: 'se never changes',
      },
      {
        type: 'example',
        title: 'A Day in Croatian',
        items: [
          {
            hr: 'Budim se u sedam.',
            en: 'I wake up at seven.',
            note: 'buditi se — to wake up',
          },
          {
            hr: 'Tuširam se i oblačim se.',
            en: 'I shower and get dressed.',
            note: 'two reflexives in a row',
          },
          {
            hr: 'Vraćam se kući oko šest.',
            en: 'I get back home around six.',
            note: 'vraćati se — to return',
          },
          {
            hr: 'Navečer se odmaram.',
            en: 'In the evening I rest.',
            note: 'navečer comes first, so se follows it',
          },
          {
            hr: 'Ne osjećam se dobro danas.',
            en: 'I do not feel well today.',
            note: 'osjećati se — to feel',
          },
        ],
      },
      {
        type: 'example',
        title: 'Common Verbs That Carry "Se"',
        items: [
          { hr: 'zvati se', en: 'to be called', note: 'Kako se zoveš?' },
          { hr: 'sjećati se', en: 'to remember', note: 'Sjećam se toga.' },
          { hr: 'bojati se', en: 'to be afraid', note: 'Ne bojim se.' },
          { hr: 'smijati se', en: 'to laugh', note: 'Zašto se smiješ?' },
          { hr: 'nalaziti se', en: 'to be located', note: 'Gdje se nalazi kolodvor?' },
          { hr: 'dogoditi se', en: 'to happen', note: 'Što se dogodilo?' },
        ],
      },
      {
        type: 'rule',
        title: 'It Also Means "One" or "People"',
        body: 'A third use, and a very common one on signs and in instructions: "se" makes a sentence impersonal, the way English uses "you", "one" or the passive. Kako se to kaže na hrvatskom? (How do you say that in Croatian?) Ovdje se ne puši. (No smoking here — literally "here one does not smoke".) Gdje se kupuju karte? (Where does one buy tickets?) You will read this form constantly.',
        highlight: 'Ovdje se ne puši.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Which sentence is correct?',
        options: ['Se zovem Ana.', 'Zovem se Ana.', 'Zovem Ana se.', 'Ana se zovem.'],
        correct: 1,
        explanation:
          '"Se" takes the second position, so it follows the first element of the sentence: Zovem se Ana. It can never open a sentence, which rules out the first option outright.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "Kako ___ kaže na hrvatskom?" (How do you say it in Croatian?)',
        options: ['se', 'si', 'sam', 'su'],
        correct: 0,
        explanation:
          'This is the impersonal "se" — "how does one say" — and it sits in second position after the question word "kako". The other options are forms of "biti" and do not belong here.',
      },
      {
        type: 'summary',
        title: 'Verbs With Se — Key Takeaways',
        points: [
          '"Se" is part of the verb — learn it together with the word',
          'It never changes: zovem se, zoveš se, zove se…',
          'It takes SECOND position, after whatever opens the sentence',
          'Daily routine runs on these: budim se, tuširam se, vraćam se',
          'Impersonal "se" = English "one" or "you": Ovdje se ne puši.',
          'Gdje se nalazi…? is how you ask where something is',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Likes and Preferences
  // ─────────────────────────────────────────────────────────
  {
    id: 'likes-preferences',
    title: 'Likes and Preferences',
    subtitle: 'voljeti, sviđati se, and the sentence that turns inside out',
    icon: '❤️',
    level: 'A1',
    duration: '~6 min',
    color: '#db2777',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'Two Ways to Like Something',
        body: 'Croatian has two words for liking, and they are not interchangeable. One behaves exactly as English does. The other flips the sentence around so that the thing you like becomes the subject — which feels strange for about a week and then becomes automatic.',
        icon: '❤️',
      },
      {
        type: 'rule',
        title: 'Voljeti — the Easy One',
        body: '"Voljeti" works like English "to love" or "to like a lot", and the thing you love is a plain object in the accusative. Volim kavu. (I love coffee.) Volim Zagreb. Volim svoju obitelj. Conjugation: volim, voliš, voli, volimo, volite, vole. If you can say "pijem kavu", you can already say "volim kavu".',
        highlight: 'Volim kavu.',
      },
      {
        type: 'rule',
        title: 'Sviđati Se — the One That Flips',
        body: 'This is the everyday word for liking something, and its logic is the reverse of English. The THING is the subject and does the pleasing; YOU are on the receiving end. Sviđa mi se Zagreb literally says "Zagreb is pleasing to me". So the verb agrees with the thing, not with you: Sviđa mi se film (one thing, sviđa) but Sviđaju mi se filmovi (several things, sviđaju).',
        highlight: 'Sviđa mi se Zagreb.',
      },
      {
        type: 'rule',
        title: 'The English Bridge: "it appeals to me"',
        body: 'English has this pattern too, just less often. "It appeals to me." "That suits me." "It seems fine to me." In every one, the thing is the subject and the person is the receiver — which is exactly how "sviđati se" works. If you build your sentence around "appeals to me" rather than "I like", the Croatian falls out correctly.',
        highlight: 'Zagreb appeals to me',
      },
      {
        type: 'table',
        title: 'The Little Word for "To Me"',
        headers: ['Person', 'Form', 'Example'],
        rows: [
          ['to me', 'mi', 'Sviđa mi se.'],
          ['to you', 'ti', 'Sviđa ti se?'],
          ['to him', 'mu', 'Sviđa mu se.'],
          ['to her', 'joj', 'Sviđa joj se.'],
          ['to us', 'nam', 'Sviđa nam se.'],
          ['to you (plural)', 'vam', 'Sviđa vam se?'],
          ['to them', 'im', 'Sviđa im se.'],
        ],
      },
      {
        type: 'rule',
        title: 'One or Many Changes the Verb',
        body: 'Because the thing liked is the subject, the verb counts the THING and not the person. Sviđa mi se ova pjesma. (I like this song — one song.) Sviđaju mi se ove pjesme. (I like these songs — several.) English speakers reliably say "sviđa mi se" for everything at first; noticing the plural is what makes it sound native.',
        highlight: 'Sviđa / Sviđaju',
      },
      {
        type: 'example',
        title: 'Saying What You Like',
        items: [
          {
            hr: 'Sviđa mi se ovaj grad.',
            en: 'I like this city.',
            note: 'one thing → sviđa',
          },
          {
            hr: 'Sviđaju mi se hrvatske pjesme.',
            en: 'I like Croatian songs.',
            note: 'several things → sviđaju',
          },
          {
            hr: 'Sviđa li ti se more?',
            en: 'Do you like the sea?',
            note: 'li makes it a question; ti = to you',
          },
          {
            hr: 'Volim kavu, ali ne volim čaj.',
            en: 'I love coffee, but I do not like tea.',
            note: 'voljeti takes a plain object',
          },
          {
            hr: 'Više volim more nego planine.',
            en: 'I prefer the sea to the mountains.',
            note: 'više volim = I prefer',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Preferring, and Not Liking',
        body: '"Više volim" is how you say you prefer something: Više volim čaj. (I prefer tea.) To compare two things, join them with "nego": Više volim čaj nego kavu. For dislike, "ne volim" is the ordinary negative, and "mrzim" means to hate — strong, and used more freely than English "hate", though still not something to say about a person you have just met.',
        highlight: 'Više volim čaj nego kavu.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "I like this song"? ("pjesma" is one song.)',
        options: [
          'Sviđam ovu pjesmu.',
          'Sviđa mi se ova pjesma.',
          'Sviđaju mi se ova pjesma.',
          'Sviđa me ova pjesma.',
        ],
        correct: 1,
        explanation:
          'The thing liked is the subject, so it stays in its subject form ("ova pjesma") and the verb is singular to match it. You appear as "mi" — to me. Making yourself the subject is the reflex English gives you, and it is the one to unlearn.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ mi se hrvatski filmovi." (I like Croatian films.)',
        options: ['Sviđa', 'Sviđaju', 'Sviđam', 'Volim'],
        correct: 1,
        explanation:
          '"Filmovi" is plural and it is the subject of the sentence, so the verb must be plural too: sviđaju. "Volim hrvatske filmove" would also be correct Croatian, but it uses the other verb and the other sentence pattern entirely.',
      },
      {
        type: 'summary',
        title: 'Likes — Key Takeaways',
        points: [
          'voljeti behaves like English: Volim kavu — plain object',
          'sviđati se flips it: the thing is the subject, you are "mi"',
          'Think "it appeals to me", not "I like it"',
          'The verb counts the thing: Sviđa mi se film / Sviđaju mi se filmovi',
          'mi, ti, mu, joj, nam, vam, im — the little word for the person',
          'Više volim X nego Y = I prefer X to Y',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Family and People
  // ─────────────────────────────────────────────────────────
  {
    id: 'family-people',
    title: 'Family and People',
    subtitle: 'Talking about the people closest to you',
    icon: '👨‍👩‍👧',
    level: 'A1',
    duration: '~6 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'The First Thing Anyone Asks',
        body: 'Family is where most conversations in Croatian go within about three minutes, and for anyone with Croatian roots it is usually the reason for learning in the first place. This lesson gives you the words, and puts them straight to work with the possessives you already know.',
        icon: '👨‍👩‍👧',
      },
      {
        type: 'table',
        title: 'The Immediate Family',
        headers: ['Croatian', 'English', 'Gender'],
        rows: [
          ['obitelj', 'family', 'feminine'],
          ['majka / mama', 'mother / mum', 'feminine'],
          ['otac / tata', 'father / dad', 'masculine'],
          ['roditelji', 'parents', 'masculine plural'],
          ['sin', 'son', 'masculine'],
          ['kći / kćerka', 'daughter', 'feminine'],
          ['brat', 'brother', 'masculine'],
          ['sestra', 'sister', 'feminine'],
          ['dijete / djeca', 'child / children', 'neuter / plural'],
        ],
      },
      {
        type: 'rule',
        title: 'Mama and Tata Are Not Childish',
        body: 'Unlike English, where an adult saying "mummy" raises eyebrows, Croatian adults use "mama" and "tata" as the normal everyday words for their parents. "Majka" and "otac" are more formal and turn up in writing, in official contexts and when speaking about someone else\'s parents. Use mama and tata about your own.',
        highlight: 'mama · tata',
      },
      {
        type: 'table',
        title: 'The Wider Family',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['baka', 'grandmother', 'also nona in Dalmatia and Istria'],
          ['djed', 'grandfather', 'also nono on the coast'],
          ['unuk / unuka', 'grandson / granddaughter', ''],
          ['stric', 'uncle', "father's brother"],
          ['ujak', 'uncle', "mother's brother"],
          ['teta / tetka', 'aunt', 'either side'],
          ['bratić / sestrična', 'cousin (male / female)', ''],
          ['muž / žena', 'husband / wife', 'suprug / supruga is more formal'],
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Names the Side of the Family',
        body: 'English has one word for uncle. Croatian has two, and they are not interchangeable: "stric" is your father\'s brother, "ujak" your mother\'s. This is not a nicety — a relative will notice if you get it wrong, because the word itself says which side of the family you mean. For aunts the everyday word "teta" covers both sides.',
        highlight: 'stric = father’s side · ujak = mother’s side',
      },
      {
        type: 'rule',
        title: 'Three Plurals to Watch',
        body: 'The family words include several of the irregular plurals from the plural lesson. brat → braća (brothers). dijete → djeca (children). čovjek → ljudi (people). "Braća" and "djeca" look singular and feminine but refer to a group, and they take a plural verb: Moja braća su ovdje. Moja djeca uče hrvatski.',
        highlight: 'braća · djeca · ljudi',
      },
      {
        type: 'example',
        title: 'Introducing Your Family',
        items: [
          {
            hr: 'Ovo je moja obitelj.',
            en: 'This is my family.',
            note: 'obitelj is feminine → moja',
          },
          {
            hr: 'Imam brata i dvije sestre.',
            en: 'I have a brother and two sisters.',
            note: 'brat is alive → brata in the accusative',
          },
          {
            hr: 'Moji roditelji žive u Splitu.',
            en: 'My parents live in Split.',
            note: 'roditelji is plural masculine → moji',
          },
          {
            hr: 'Moja baka je iz Dalmacije.',
            en: 'My grandmother is from Dalmatia.',
            note: 'iz + genitive: Dalmacije',
          },
          {
            hr: 'Kako se zove tvoj brat?',
            en: 'What is your brother called?',
            note: 'zvati se — and se in second position',
          },
          {
            hr: 'Djed je govorio samo hrvatski.',
            en: 'Grandfather spoke only Croatian.',
            note: 'a past form — you will build these at A2',
          },
        ],
      },
      {
        type: 'example',
        title: 'Questions About Family',
        items: [
          {
            hr: 'Imaš li braće i sestara?',
            en: 'Do you have any brothers and sisters?',
            note: 'the standard way to ask',
          },
          {
            hr: 'Koliko imaš djece?',
            en: 'How many children do you have?',
            note: 'after koliko, the genitive: djece',
          },
          {
            hr: 'Jesi li oženjen? / Jesi li udana?',
            en: 'Are you married?',
            note: 'oženjen of a man, udana of a woman',
          },
          {
            hr: 'Odakle je tvoja obitelj?',
            en: 'Where is your family from?',
            note: 'the question every diaspora learner gets',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Your mother’s brother is visiting. What do you call him?',
        options: ['stric', 'ujak', 'tetak', 'djed'],
        correct: 1,
        explanation:
          'Croatian names the side of the family: "ujak" is your mother’s brother and "stric" your father’s. "Tetak" is an aunt’s husband and "djed" is a grandfather.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "my sisters"? ("sestra" is feminine.)',
        options: ['moj sestre', 'moja sestre', 'moje sestre', 'moji sestre'],
        correct: 2,
        explanation:
          'A feminine plural takes -e on both the possessive and the noun: moje sestre. "Moja" is feminine singular and "moji" is masculine plural.',
      },
      {
        type: 'summary',
        title: 'Family — Key Takeaways',
        points: [
          'obitelj, majka/mama, otac/tata, brat, sestra, sin, kći',
          'Adults say mama and tata — they are not childish words',
          'stric is your father’s brother, ujak your mother’s',
          'braća, djeca and ljudi are irregular plurals that take plural verbs',
          'Imaš li braće i sestara? — how to ask about siblings',
          'Possessives agree with the relative, not with you: moj brat, moja sestra',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Countries, Nationalities and Languages
  // ─────────────────────────────────────────────────────────
  {
    id: 'countries-languages',
    title: 'Where You Are From',
    subtitle: 'Countries, nationalities and languages',
    icon: '🌍',
    level: 'A1',
    duration: '~6 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Odakle si?',
        body: '"Where are you from?" is the second question anyone asks, and for a heritage learner it is rarely a simple one. This lesson gives you the country, the nationality and the language — three different words in Croatian where English often reuses one — plus a way to answer that covers a complicated family history.',
        icon: '🌍',
      },
      {
        type: 'rule',
        title: 'Three Words, Not One',
        body: 'English says "I am English, from England, and I speak English" using one word three times. Croatian uses three different words, and they follow a pattern: the country is a noun, the nationality is a noun that changes for male and female, and the language is an adjective ending in -ski. Engleska, Englez / Engleskinja, engleski.',
        highlight: 'Engleska · Englez · engleski',
      },
      {
        type: 'table',
        title: 'Country, Person, Language',
        headers: ['Country', 'Man', 'Woman', 'Language'],
        rows: [
          ['Hrvatska', 'Hrvat', 'Hrvatica', 'hrvatski'],
          ['Engleska', 'Englez', 'Engleskinja', 'engleski'],
          ['Njemačka', 'Nijemac', 'Njemica', 'njemački'],
          ['Italija', 'Talijan', 'Talijanka', 'talijanski'],
          ['Amerika', 'Amerikanac', 'Amerikanka', 'engleski'],
          ['Kanada', 'Kanađanin', 'Kanađanka', 'engleski / francuski'],
          ['Australija', 'Australac', 'Australka', 'engleski'],
        ],
      },
      {
        type: 'rule',
        title: 'Languages Are Lower Case',
        body: 'Croatian capitalises the country and the nationality but NOT the language: Hrvatska, Hrvat, but hrvatski. The same goes for adjectives made from place names — hrvatska glazba (Croatian music), zagrebačke ulice (Zagreb streets). English capitalises all of them, so this is a habit worth breaking early if you plan to write anything.',
        highlight: 'Hrvat, but hrvatski',
      },
      {
        type: 'rule',
        title: 'From Somewhere: iz + genitive',
        body: 'To say where you are from, use "iz" and put the country into the genitive — which you already know. Iz Hrvatske sam. Iz Amerike sam. Iz Kanade sam. Feminine country names take -e, and that covers nearly all of them. For a city: Iz Zagreba sam. Iz Splita sam — masculine, so -a.',
        highlight: 'Iz Hrvatske sam.',
      },
      {
        type: 'rule',
        title: 'Living Somewhere: u + locative',
        body: 'Where you live takes the locative instead. Živim u Hrvatskoj. Živim u Kanadi. Živim u Zagrebu. Note "u Hrvatskoj" against "iz Hrvatske" — the same country name, two different endings, because the two questions are different. Country names built like adjectives, such as Hrvatska and Njemačka, take -oj in the locative.',
        highlight: 'u Hrvatskoj · iz Hrvatske',
      },
      {
        type: 'example',
        title: 'Answering the Question',
        items: [
          {
            hr: 'Odakle si? — Iz Kanade sam.',
            en: 'Where are you from? — I am from Canada.',
            note: 'iz + genitive',
          },
          {
            hr: 'Ja sam Hrvatica, ali živim u Australiji.',
            en: 'I am Croatian, but I live in Australia.',
            note: 'a woman speaking: Hrvatica',
          },
          {
            hr: 'Moji su djed i baka iz Dalmacije.',
            en: 'My grandparents are from Dalmatia.',
            note: 'the diaspora answer — the region, not just the country',
          },
          {
            hr: 'Govorim engleski i malo hrvatski.',
            en: 'I speak English and a little Croatian.',
            note: 'the language is lower case',
          },
          {
            hr: 'Učim hrvatski već godinu dana.',
            en: 'I have been learning Croatian for a year now.',
            note: 'Croatian uses the present where English uses a perfect',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Talking About Croatian Regions',
        body: 'For anyone with family roots here, the region often matters more than the country. Dalmacija (the coast and islands), Slavonija (the eastern plains), Istra (the peninsula in the north-west), Zagorje (the hills north of Zagreb), Lika, Kvarner, Podravina. Saying "moji su iz Slavonije" tells a Croatian far more than "moji su iz Hrvatske" — and it is almost always the follow-up question.',
        highlight: 'Moji su iz Dalmacije.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How does a woman say "I am Croatian"?',
        options: ['Ja sam Hrvat.', 'Ja sam Hrvatica.', 'Ja sam hrvatski.', 'Ja sam Hrvatska.'],
        correct: 1,
        explanation:
          'The nationality has separate male and female forms: Hrvat for a man, Hrvatica for a woman. "Hrvatski" is the language and "Hrvatska" is the country.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Complete: "___ sam." (I am from Croatia.)',
        options: ['Iz Hrvatska', 'Iz Hrvatske', 'U Hrvatskoj', 'Iz Hrvatsku'],
        correct: 1,
        explanation:
          '"Iz" takes the genitive, so the country becomes "Hrvatske". "U Hrvatskoj" is the locative and answers where you LIVE, not where you are from.',
      },
      {
        type: 'summary',
        title: 'Where You Are From — Key Takeaways',
        points: [
          'Country, nationality and language are three different words',
          'Nationality has male and female forms: Hrvat / Hrvatica',
          'Languages are lower case and usually end in -ski: hrvatski, engleski',
          'From: iz + genitive — Iz Hrvatske sam.',
          'Living in: u + locative — Živim u Hrvatskoj.',
          'Naming the region says far more than naming the country',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Food, Drink and Ordering
  // ─────────────────────────────────────────────────────────
  {
    id: 'food-drink',
    title: 'Food, Drink and Ordering',
    subtitle: 'In a café and at the table — with the accusative doing the work',
    icon: '☕',
    level: 'A1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Your First Real Conversation',
        body: 'Ordering in a café is where most learners have their first exchange with a stranger that actually works. It is also a perfect test of what you have learned: the accusative for what you order, the genitive for quantities, and the conditional for asking politely. Everything you need is already in place.',
        icon: '☕',
      },
      {
        type: 'table',
        title: 'Drinks',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['kava', 'coffee', 'the centre of Croatian social life'],
          ['čaj', 'tea', 'masculine'],
          ['voda', 'water', 'gazirana / negazirana — sparkling / still'],
          ['sok', 'juice', 'masculine'],
          ['mlijeko', 'milk', 'neuter'],
          ['pivo', 'beer', 'neuter'],
          ['vino', 'wine', 'crno / bijelo — red / white'],
          ['rakija', 'fruit brandy', 'expect to be offered some'],
        ],
      },
      {
        type: 'table',
        title: 'Food',
        headers: ['Croatian', 'English', 'Gender'],
        rows: [
          ['kruh', 'bread', 'masculine'],
          ['sir', 'cheese', 'masculine'],
          ['meso', 'meat', 'neuter'],
          ['riba', 'fish', 'feminine'],
          ['juha', 'soup', 'feminine'],
          ['salata', 'salad', 'feminine'],
          ['voće / povrće', 'fruit / vegetables', 'both neuter, both collective'],
          ['kolač', 'cake', 'masculine'],
          ['sladoled', 'ice cream', 'masculine'],
        ],
      },
      {
        type: 'rule',
        title: 'What You Eat Is an Object',
        body: 'Everything you eat, drink or order goes into the accusative. Jedem kruh. (masculine, not alive — unchanged.) Pijem kavu. (feminine — kava becomes kavu.) Jedem meso. (neuter — unchanged.) Naručujem juhu. (feminine — juha becomes juhu.) Only the feminine words change, which makes a menu much less frightening than it looks.',
        highlight: 'Pijem kavu. Jedem kruh.',
      },
      {
        type: 'rule',
        title: 'Quantities Take the Genitive',
        body: 'A glass, a cup, a little, a lot — anything measuring takes the genitive after it. čaša vode (a glass of water). šalica kave (a cup of coffee). komad kruha (a piece of bread). malo soli (a little salt). puno vremena. This is why "Čašu vode, molim" has two different endings in it: "čašu" is what you are asking for, "vode" is what fills it.',
        highlight: 'Čašu vode, molim.',
      },
      {
        type: 'rule',
        title: 'Ordering Politely',
        body: 'The blunt way is "Hoću kavu". Nobody will be offended, but nobody says it either. The natural forms are "Htio bih…" (a man speaking), "Htjela bih…" (a woman speaking), or simply the thing plus "molim": "Jednu kavu, molim." Add "molim vas" and you have covered every café in the country.',
        highlight: 'Htio / Htjela bih kavu.',
      },
      {
        type: 'example',
        title: 'A Café Exchange',
        items: [
          {
            hr: 'Izvolite?',
            en: 'What can I get you?',
            note: 'how a waiter opens',
          },
          {
            hr: 'Htjela bih jednu kavu s mlijekom, molim.',
            en: 'I would like one coffee with milk, please.',
            note: 's + instrumental: mlijekom',
          },
          {
            hr: 'Za mene čašu vode, molim vas.',
            en: 'A glass of water for me, please.',
            note: 'za mene — for me',
          },
          {
            hr: 'Imate li nešto bez mesa?',
            en: 'Do you have anything without meat?',
            note: 'bez + genitive: mesa',
          },
          {
            hr: 'Račun, molim.',
            en: 'The bill, please.',
            note: 'two words that end every visit',
          },
          {
            hr: 'Mogu li platiti karticom?',
            en: 'Can I pay by card?',
            note: 'karticom — instrumental, the means',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Coffee Is Not a Drink, It Is an Appointment',
        body: 'When a Croatian says "Idemo na kavu", the coffee is beside the point — it means an hour or two of sitting and talking. Turning down an invitation to kava reads as turning down the company. "Idemo na kavu?" is one of the most useful sentences you can learn, and "Može!" is the answer.',
        highlight: 'Idemo na kavu?',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you order a coffee? ("kava" is feminine.)',
        options: ['Htio bih kava.', 'Htio bih kavu.', 'Htio bih kave.', 'Htio bih kavi.'],
        correct: 1,
        explanation:
          'What you order is an object, so the feminine "kava" takes -u: kavu. "Kave" is the genitive — right after a quantity word, as in "šalica kave", but not on its own here.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "a glass of water"?',
        options: ['čaša voda', 'čašu vodu', 'čašu vode', 'čaša vodi'],
        correct: 2,
        explanation:
          'You are asking for the glass, so "čaša" becomes the accusative "čašu"; what fills it takes the genitive, so "voda" becomes "vode". Two different jobs, two different endings.',
      },
      {
        type: 'summary',
        title: 'Food and Drink — Key Takeaways',
        points: [
          'What you eat or order is accusative: Pijem kavu. Jedem kruh.',
          'Quantities take the genitive: čaša vode, šalica kave',
          'Order with Htio bih / Htjela bih, or the thing plus molim',
          'Račun, molim — the bill, please',
          'Izvolite? is the waiter opening; Može! is a cheerful yes',
          'Idemo na kavu? is an invitation to company, not to caffeine',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Shopping and Prices
  // ─────────────────────────────────────────────────────────
  {
    id: 'shopping-prices',
    title: 'Shopping and Prices',
    subtitle: 'Asking what things cost, and numbers past a hundred',
    icon: '🛒',
    level: 'A1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Numbers You Can Spend',
        body: 'You have counted to twenty and told the time. Shopping needs bigger numbers and one small grammatical habit: in Croatian, the NUMBER decides the ending of the noun that follows it. Learn that habit here and prices, quantities and ages all fall into place at once.',
        icon: '🛒',
      },
      {
        type: 'table',
        title: 'The Bigger Numbers',
        headers: ['Number', 'Croatian', 'Number', 'Croatian'],
        rows: [
          ['20', 'dvadeset', '100', 'sto'],
          ['30', 'trideset', '200', 'dvjesto'],
          ['40', 'četrdeset', '300', 'tristo'],
          ['50', 'pedeset', '500', 'petsto'],
          ['60', 'šezdeset', '1000', 'tisuća'],
          ['70', 'sedamdeset', '2000', 'dvije tisuće'],
          ['80', 'osamdeset', '', ''],
          ['90', 'devedeset', '', ''],
        ],
      },
      {
        type: 'rule',
        title: 'Building Numbers Is Just Addition',
        body: 'Croatian builds compound numbers by writing the parts in order, with no extra words. 21 = dvadeset jedan. 35 = trideset pet. 148 = sto četrdeset osam. 2026 = dvije tisuće dvadeset šest. There is nothing to memorise beyond the tens and hundreds you already have. One note on a thousand: the word is "tisuća", but when you count with it you will hear "tisuću" — tisuću eura, tisuću ljudi.',
        highlight: 'sto četrdeset osam',
      },
      {
        type: 'rule',
        title: 'The Number Rules the Noun',
        body: 'This is the habit worth building now. After 1, the noun stays singular: jedan euro. After 2, 3 and 4, it takes a special form ending in -a for masculine nouns: dva eura, tri eura, četiri eura. From 5 upwards it takes the genitive plural: pet eura, deset eura, sto eura. The same three-way split applies to any counted noun, and it repeats for 21, 22, 25 and so on — what matters is the LAST digit.',
        highlight: '1 · 2–4 · 5+',
      },
      {
        type: 'table',
        title: 'One, Two-to-Four, Five-Plus',
        headers: ['Count', 'Pattern', 'Example'],
        rows: [
          ['1', 'singular', 'jedan euro / jedna kuna'],
          ['2, 3, 4', 'special form', 'dva eura / tri kave'],
          ['5 and up', 'genitive plural', 'pet eura / deset kava'],
          ['21', 'follows the 1', 'dvadeset jedan euro'],
          ['22', 'follows the 2', 'dvadeset dva eura'],
          ['25', 'follows the 5', 'dvadeset pet eura'],
        ],
      },
      {
        type: 'rule',
        title: 'Money in Croatia',
        body: 'Croatia uses the euro. The word is "euro", its plural forms are "eura", and small change is "cent" — dva centa, deset centi. Prices are usually said as a plain number plus the currency: "pet eura i dvadeset centi", or just "pet dvadeset". You will still hear "kuna" from older speakers out of habit; the currency changed in 2023.',
        highlight: 'pet eura i dvadeset centi',
      },
      {
        type: 'example',
        title: 'In the Shop',
        items: [
          {
            hr: 'Koliko ovo košta?',
            en: 'How much does this cost?',
            note: 'the essential question',
          },
          {
            hr: 'Košta pet eura.',
            en: 'It costs five euros.',
            note: 'after 5, the genitive plural: eura',
          },
          {
            hr: 'Imate li ovo u većem broju?',
            en: 'Do you have this in a bigger size?',
            note: 'broj = size, as well as number',
          },
          {
            hr: 'Molim vas kilogram jabuka.',
            en: 'A kilo of apples, please.',
            note: 'quantity → genitive plural: jabuka',
          },
          {
            hr: 'Preskupo je za mene.',
            en: 'It is too expensive for me.',
            note: 'pre- means "too": preskupo, premalo',
          },
          {
            hr: 'Plaćam karticom.',
            en: 'I am paying by card.',
            note: 'gotovinom = in cash',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Where You Shop',
        body: 'A few words to recognise: "dućan" and "trgovina" are both shops, "supermarket" is what you expect, and "tržnica" is the open-air market where most Croatians still buy fruit and vegetables. "Pekarnica" is a bakery, "ljekarna" a pharmacy, "kiosk" the little stand selling newspapers and tickets.',
        highlight: 'dućan · tržnica · pekarnica · ljekarna',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "three euros"?',
        options: ['tri euro', 'tri eura', 'tri euri', 'tri eurova'],
        correct: 1,
        explanation:
          'The numbers 2, 3 and 4 take a special form of the noun ending in -a for masculine words: tri eura. After 5 and above it would still be "eura", but for a different reason — the genitive plural.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you ask what something costs?',
        options: ['Koliko je ovo?', 'Koliko ovo košta?', 'Što ovo košta?', 'Kako ovo košta?'],
        correct: 1,
        explanation:
          '"Koliko" asks how much and "košta" is the verb to cost, giving "Koliko ovo košta?". "Što" asks what and "kako" asks how — neither fits a question about an amount.',
      },
      {
        type: 'summary',
        title: 'Shopping — Key Takeaways',
        points: [
          'Tens and hundreds: dvadeset, pedeset, sto, dvjesto, tisuću',
          'Compound numbers are simple addition: sto četrdeset osam',
          'The number rules the noun: 1 singular, 2–4 special, 5+ genitive plural',
          'Only the LAST digit matters: dvadeset dva eura, dvadeset pet eura',
          'Koliko ovo košta? — the question you will use most',
          'dućan, tržnica, pekarnica, ljekarna — where to go for what',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Finding Your Way
  // ─────────────────────────────────────────────────────────
  {
    id: 'directions-town',
    title: 'Finding Your Way',
    subtitle: 'Asking for directions, and understanding the answer',
    icon: '🗺️',
    level: 'A1',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Asking Is the Easy Half',
        body: 'Asking for directions takes one sentence. Understanding the reply is the hard part, and it is mostly imperatives and prepositions — both of which you now have. This lesson gives you the question, the place names, and the handful of instructions you are actually likely to hear back.',
        icon: '🗺️',
      },
      {
        type: 'rule',
        title: 'Two Ways to Ask',
        body: '"Gdje je…?" is the direct one: Gdje je kolodvor? (Where is the station?) "Gdje se nalazi…?" is slightly more formal and very common on signs and in speech: Gdje se nalazi ljekarna? Open either with "Oprostite" and you have a polite, complete request: Oprostite, gdje je tržnica?',
        highlight: 'Oprostite, gdje je…?',
      },
      {
        type: 'table',
        title: 'Places in Town',
        headers: ['Croatian', 'English', 'Croatian', 'English'],
        rows: [
          ['kolodvor', 'station', 'pošta', 'post office'],
          ['trg', 'square', 'banka', 'bank'],
          ['ulica', 'street', 'ljekarna', 'pharmacy'],
          ['crkva', 'church', 'bolnica', 'hospital'],
          ['tržnica', 'market', 'kavana', 'café'],
          ['muzej', 'museum', 'restoran', 'restaurant'],
          ['park', 'park', 'kino', 'cinema'],
        ],
      },
      {
        type: 'rule',
        title: 'The Instructions You Will Hear',
        body: 'Directions come back as imperatives, usually in the polite -ite form. Idite ravno. (Go straight on.) Skrenite lijevo. (Turn left.) Skrenite desno. (Turn right.) Prijeđite ulicu. (Cross the street.) Nastavite do trga. (Carry on as far as the square.) If you learn only "ravno", "lijevo" and "desno", you will follow most answers.',
        highlight: 'ravno · lijevo · desno',
      },
      {
        type: 'table',
        title: 'Position Words',
        headers: ['Croatian', 'English', 'Case it takes'],
        rows: [
          ['pored / do', 'next to', 'genitive'],
          ['blizu', 'near', 'genitive'],
          ['ispred', 'in front of', 'genitive'],
          ['iza', 'behind', 'genitive'],
          ['preko puta', 'across from', 'genitive'],
          ['na uglu', 'on the corner', 'locative'],
          ['u centru', 'in the centre', 'locative'],
        ],
      },
      {
        type: 'example',
        title: 'Asking and Answering',
        items: [
          {
            hr: 'Oprostite, gdje je glavni kolodvor?',
            en: 'Excuse me, where is the main station?',
            note: 'glavni = main',
          },
          {
            hr: 'Idite ravno pa skrenite desno.',
            en: 'Go straight on, then turn right.',
            note: 'pa = and then',
          },
          {
            hr: 'To je preko puta pošte.',
            en: 'It is across from the post office.',
            note: 'preko puta + genitive: pošte',
          },
          {
            hr: 'Je li daleko? — Ne, pet minuta pješice.',
            en: 'Is it far? — No, five minutes on foot.',
            note: 'pet minuta — genitive plural after 5',
          },
          {
            hr: 'Gdje se nalazi najbliža ljekarna?',
            en: 'Where is the nearest pharmacy?',
            note: 'najbliža = nearest',
          },
          {
            hr: 'Izgubio sam se. / Izgubila sam se.',
            en: 'I am lost.',
            note: 'a man says izgubio, a woman izgubila',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Getting Around',
        body: 'Useful when the answer is "not near": "pješice" is on foot, "tramvajem" by tram, "autobusom" by bus, "autom" by car, "vlakom" by train. Those endings are the instrumental, marking the means of doing something — the same case as "plaćam karticom". Zagreb runs on trams, and "Koji tramvaj ide do centra?" is a question worth having ready.',
        highlight: 'pješice · tramvajem · autobusom',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'A local tells you "Skrenite lijevo". What should you do?',
        options: ['Go straight on', 'Turn left', 'Turn right', 'Cross the street'],
        correct: 1,
        explanation:
          '"Skrenite" is the polite imperative of "to turn" and "lijevo" is left. Straight on would be "idite ravno", right would be "skrenite desno", and crossing would be "prijeđite ulicu".',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'Which correctly says "The bank is next to the market"?',
        options: [
          'Banka je pored tržnica.',
          'Banka je pored tržnici.',
          'Banka je pored tržnice.',
          'Banka je pored tržnicu.',
        ],
        correct: 2,
        explanation:
          '"Pored" always takes the genitive, and the genitive of the feminine "tržnica" is "tržnice". The other endings are the subject form, the locative and the accusative.',
      },
      {
        type: 'summary',
        title: 'Directions — Key Takeaways',
        points: [
          'Oprostite, gdje je…? / Gdje se nalazi…? — the two ways to ask',
          'ravno, lijevo, desno — the three words that decode most answers',
          'Instructions come back as polite imperatives: Idite… Skrenite…',
          'Position words mostly take the genitive: pored, blizu, ispred, preko puta',
          'Means of travel takes the instrumental: pješice, tramvajem, autobusom',
          'Je li daleko? — Is it far?',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // Weather and Seasons
  // ─────────────────────────────────────────────────────────
  {
    id: 'weather-seasons',
    title: 'Weather and Seasons',
    subtitle: 'Small talk that works anywhere, and the four seasons',
    icon: '🌤️',
    level: 'A1',
    duration: '~5 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Safest Conversation There Is',
        body: 'Weather is where every learner should start speaking, because the sentences are short, nobody minds if you get one wrong, and you can have the same exchange with anyone. It also introduces a very Croatian sentence shape: one word plus "je", with no subject at all.',
        icon: '🌤️',
      },
      {
        type: 'rule',
        title: 'Sentences With No Subject',
        body: 'English insists on a subject even when there is nothing to be the subject of: "IT is cold." Croatian simply drops it. Hladno je. (It is cold.) Toplo je. (It is warm.) Vruće je. (It is hot.) Sunčano je. (It is sunny.) The neuter adjective plus "je" is a complete sentence, and this pattern goes far beyond the weather: Dobro je. Teško je. Kasno je.',
        highlight: 'Hladno je.',
      },
      {
        type: 'table',
        title: 'Describing the Day',
        headers: ['Croatian', 'English'],
        rows: [
          ['Sunčano je.', 'It is sunny.'],
          ['Oblačno je.', 'It is cloudy.'],
          ['Toplo je.', 'It is warm.'],
          ['Hladno je.', 'It is cold.'],
          ['Vruće je.', 'It is hot.'],
          ['Vjetrovito je.', 'It is windy.'],
          ['Maglovito je.', 'It is foggy.'],
        ],
      },
      {
        type: 'rule',
        title: 'Rain and Snow Fall',
        body: 'Croatian does not say "it is raining" — it says the rain falls. Pada kiša. (It is raining, literally "rain is falling".) Pada snijeg. (It is snowing.) Pada tuča. (It is hailing.) The noun is the subject and "pada" is the verb, so you can also say "Kiša pada" with no change in meaning — just a shift in emphasis.',
        highlight: 'Pada kiša.',
      },
      {
        type: 'rule',
        title: 'Asking About the Weather',
        body: '"Kakvo je vrijeme?" is how you ask what the weather is like — "kakvo" means "what kind of", and "vrijeme" is both weather and time, so context does the work. For a forecast: "Kakvo će biti vrijeme sutra?" And the answer that covers everything: "Lijepo je." (It is lovely.)',
        highlight: 'Kakvo je vrijeme?',
      },
      {
        type: 'table',
        title: 'The Four Seasons',
        headers: ['Season', 'English', 'In that season'],
        rows: [
          ['proljeće', 'spring', 'u proljeće'],
          ['ljeto', 'summer', 'ljeti'],
          ['jesen', 'autumn', 'u jesen'],
          ['zima', 'winter', 'zimi'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Have Their Own Word',
        body: 'Summer and winter have single-word forms for "in summer" and "in winter": ljeti and zimi. Spring and autumn use a preposition instead: u proljeće, u jesen. There is no logic to memorise here — it is four short forms, and you will use them constantly once you can talk about when you visit.',
        highlight: 'ljeti · zimi · u proljeće · u jesen',
      },
      {
        type: 'example',
        title: 'Weather Small Talk',
        items: [
          {
            hr: 'Kakvo je vrijeme danas?',
            en: 'What is the weather like today?',
            note: 'the opening line',
          },
          {
            hr: 'Sunčano je i toplo.',
            en: 'It is sunny and warm.',
            note: 'two subjectless sentences joined',
          },
          {
            hr: 'Pada kiša cijeli dan.',
            en: 'It has been raining all day.',
            note: 'Croatian uses the present here',
          },
          {
            hr: 'Ljeti je na moru jako vruće.',
            en: 'In summer it is very hot at the seaside.',
            note: 'ljeti + na moru (locative)',
          },
          {
            hr: 'Zimi pada snijeg u Zagorju.',
            en: 'In winter it snows in Zagorje.',
            note: 'zimi — one word for "in winter"',
          },
          {
            hr: 'Ima dvadeset i pet stupnjeva.',
            en: 'It is twenty-five degrees.',
            note: 'ima — the "there is" form again',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'How do you say "It is raining"?',
        options: ['Ono kiši.', 'Pada kiša.', 'To je kiša.', 'Kiša je.'],
        correct: 1,
        explanation:
          'Croatian says the rain falls: Pada kiša. There is no dummy "it" to build a sentence around, and "Kiša je" would simply identify something as rain rather than describe the weather.',
      },
      {
        type: 'quiz',
        title: 'One More',
        q: 'How do you say "in summer"?',
        options: ['u ljeto', 'ljeti', 'na ljeto', 'ljetom'],
        correct: 1,
        explanation:
          'Summer and winter have their own single-word forms: ljeti and zimi. Spring and autumn are the ones that use a preposition — u proljeće, u jesen.',
      },
      {
        type: 'summary',
        title: 'Weather — Key Takeaways',
        points: [
          'Croatian drops the dummy subject: Hladno je. Toplo je. Sunčano je.',
          'Rain and snow FALL: Pada kiša. Pada snijeg.',
          'Kakvo je vrijeme? — what is the weather like?',
          'proljeće, ljeto, jesen, zima',
          'ljeti and zimi are single words; spring and autumn take u',
          'The subjectless pattern works far beyond weather: Kasno je. Teško je.',
        ],
      },
    ],
  },
];
