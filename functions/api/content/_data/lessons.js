// ═══════════════════════════════════════════════════════════
// Animated Grammar Lesson Scripts — Naša Hrvatska
// Pre-written lesson content for the AnimatedLesson player
// ═══════════════════════════════════════════════════════════

import { LESSONS_A1 } from './lessonsA1.js';
import { LESSONS_A2 } from './lessonsA2.js';
import { LESSONS_B1 } from './lessonsB1.js';
import { LESSONS_B2 } from './lessonsB2.js';
import { LESSONS_C1 } from './lessonsC1.js';
import { LESSONS_C2 } from './lessonsC2.js';

// The A1 expansion (2026-08-28) lives in its own module: this file was already
// ~6,000 lines for 45 lessons and the curriculum targets ~30 per level. LESSONS
// stays one flat array, so every consumer sees exactly what it saw before.
const LESSONS_CORE = [
  // ─────────────────────────────────────────────────────────
  // LESSON 1: Croatian Alphabet & Pronunciation
  // ─────────────────────────────────────────────────────────
  {
    id: 'alphabet',
    title: 'Croatian Alphabet & Pronunciation',
    subtitle: 'Master all 30 letters, special characters, and digraphs',
    icon: '🔤',
    level: 'A1',
    duration: '~5 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Alphabet',
        body: 'Croatian uses the Latin alphabet with 30 letters. The great news: Croatian is almost perfectly phonetic — every letter always makes the same sound. Once you learn the letters, you can read anything.',
        icon: '🔤',
      },
      {
        type: 'rule',
        title: 'The 30-Letter Alphabet',
        body: 'Croatian has 30 letters: A B C Č Ć D Dž Đ E F G H I J K L Lj M N Nj O P R S Š T U V Z Ž. The digraphs Dž, Lj, and Nj each count as a single letter. There is no Q, W, X, or Y in native Croatian words.',
        highlight: 'phonetic',
      },
      {
        type: 'table',
        title: 'Special Characters',
        headers: ['Letter', 'Sound', 'Like in English', 'Example Word'],
        rows: [
          ['Č č', '/tʃ/', 'ch as in church', 'čaj (tea)'],
          ['Ć ć', '/tɕ/', 'softer ch — between ch and ty', 'ćao (bye)'],
          ['Đ đ', '/dʑ/', 'j as in jump (soft)', 'đon (sole of shoe)'],
          ['Š š', '/ʃ/', 'sh as in ship', 'šuma (forest)'],
          ['Ž ž', '/ʒ/', 's as in treasure', 'život (life)'],
          ['Lj lj', '/ʎ/', 'ly as in million', 'ljubav (love)'],
          ['Nj nj', '/ɲ/', 'ny as in canyon', 'njiva (field)'],
          ['Dž dž', '/dʒ/', 'j as in judge (hard)', 'džem (jam)'],
        ],
      },
      {
        type: 'rule',
        title: 'The Rolled-R and the Vowel R',
        body: "In Croatian, R is always rolled (trilled). More unusually, R can act as a vowel — forming the nucleus of a syllable with no adjacent vowel. The word 'prst' (finger) has no written vowel at all, yet R carries the syllable.",
        highlight: 'prst',
      },
      {
        type: 'example',
        title: 'R as a Vowel — Listen',
        items: [
          { hr: 'prst', en: 'finger', note: 'R is the only vowel' },
          { hr: 'crv', en: 'worm', note: 'R carries the syllable' },
          { hr: 'trg', en: 'square / market', note: 'R between consonants' },
          { hr: 'Krk', en: 'Krk (island)', note: 'Famous Croatian island — pure consonants!' },
        ],
      },
      {
        type: 'rule',
        title: 'Č vs Ć — The Classic Challenge',
        body: "Č (hard) and Ć (soft) are the most confusing pair for learners. Č sounds like 'ch' in 'church' — the tongue is against the hard palate. Ć is softer — the tongue is positioned further forward, near the teeth ridge, producing a 'ty'-like sound (think the English 'tune' said quickly as 'tyoon'). Native speakers always distinguish them.",
        highlight: 'Č vs Ć',
      },
      {
        type: 'example',
        title: 'Minimal Pairs — Hear the Difference',
        items: [
          { hr: 'čaj', en: 'tea', note: 'Hard č — like church' },
          { hr: 'ćao', en: 'bye (informal)', note: 'Soft ć — softer than č' },
          { hr: 'džem', en: 'jam', note: 'Hard dž — like judge' },
          { hr: 'đon', en: 'sole (of a shoe)', note: 'Soft đ — softer than dž' },
          { hr: 'šuma', en: 'forest', note: 'š = sh as in ship' },
          { hr: 'život', en: 'life', note: 'ž = s as in treasure' },
        ],
      },
      {
        type: 'rule',
        title: 'Key Pronunciation Rules',
        body: "1. Every letter is always pronounced — no silent letters. 2. Stress is free but tends to fall on the first or second syllable. 3. Vowels are pure and never diphthongs. 4. C = 'ts' as in 'cats', not 'k'. 5. J = 'y' as in 'yes', never 'j' as in 'jam'.",
        highlight: 'no silent letters',
      },
      {
        type: 'example',
        title: 'Common Words — Full Pronunciation',
        items: [
          { hr: 'hvala', en: 'thank you', note: 'h is breathy; v-a-l-a — 4 clear sounds' },
          {
            hr: 'molim',
            en: "please / you're welcome",
            note: 'm-o-l-i-m — each letter pronounced',
          },
          { hr: 'dobar dan', en: 'good day', note: 'd-o-b-a-r d-a-n — no silent letters' },
          { hr: 'jutro', en: 'morning', note: "j = 'y'; u-t-r-o" },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Čaj je vruć.',
            en: 'The tea is hot.',
            note: 'Hard č at the start, soft ć at the end — hear both in one sentence',
          },
          {
            hr: 'Đak čita knjigu.',
            en: 'The pupil is reading a book.',
            note: 'Soft đ; every letter is sounded, nothing is silent',
          },
          {
            hr: 'Ljeto je lijepo na moru.',
            en: 'Summer is lovely at the seaside.',
            note: 'Lj is ONE letter — one sound, like the ll in million',
          },
          {
            hr: 'Njegov brat živi u Splitu.',
            en: 'His brother lives in Split.',
            note: 'Nj as in canyon; ž as the s in treasure',
          },
          { hr: 'Džep je pun.', en: 'The pocket is full.', note: 'Hard dž — the j in judge' },
          { hr: 'Cijena je deset eura.', en: 'The price is ten euros.', note: 'C = ts, never k' },
          {
            hr: 'Jučer sam bio u Šibeniku.',
            en: 'Yesterday I was in Šibenik.',
            note: 'J = y as in yes; š = sh',
          },
          {
            hr: 'Trg je pun ljudi.',
            en: 'The square is full of people.',
            note: 'Syllabic r in trg; lj in ljudi',
          },
          {
            hr: 'Hrvatska ima mnogo otoka.',
            en: 'Croatia has many islands.',
            note: 'H is breathy, as in loch — never silent',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'The Croatian letter J is pronounced like which English sound?',
        options: ['j as in jump', 'y as in yes', 'zh as in treasure', 'h as in hat'],
        correct: 1,
        explanation:
          "Croatian J always sounds like 'y' in 'yes'. The word 'ja' (I) sounds like 'ya'. This trips up English speakers who expect J to sound like 'jump'.",
      },
      {
        type: 'quiz',
        q: 'Which word uses R as a vowel (syllabic R)?',
        options: ['ljubav', 'prst', 'čaj', 'more'],
        correct: 1,
        explanation:
          "'Prst' (finger) has no written vowel — R serves as the syllable nucleus. This is one of Croatian's most distinctive features, also found in Czech and Slovak.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers read J as in 'jam', so 'ja' comes out as 'dja' — Croatian J is always 'y': ja sounds like 'ya' and jutro like 'yutro'. Second, C gets read as 'k' or 's': it is always 'ts', so cipele is 'tsipele'. Third, learners drop the hooks when writing and turn č, ć, š, ž into c, s, z — but čaj (tea) and caj are not the same word; a missing diacritic is a spelling mistake, not a shortcut.",
        highlight: "Croatian J is always 'y'",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Which is the correct spelling of 'life' — you hear it as zhi-vot?",
            options: ['zivot', 'žifot', 'žiwot', 'život'],
            correct: 3,
            explanation:
              "The 'zh' sound is written ž and the 'v' sound is v. There is no w in native Croatian words, and dropping the hook turns ž into a plain z — a different letter.",
          },
          {
            q: 'Which word begins with the SOFT sound ć rather than the hard č?',
            options: ['ćup (jug)', 'čaj (tea)', 'čovjek (man)', 'čaša (glass)'],
            correct: 0,
            explanation:
              "Ćup starts with ć, the softer sound made further forward in the mouth. The other three all start with hard č, as in 'church'.",
          },
          {
            q: 'Which sentence is spelled correctly?',
            options: [
              'Djak čita knjigu.',
              'Dyak cita knjigu.',
              'Đak čita knjigu.',
              'Djack čita knjigu.',
            ],
            correct: 2,
            explanation:
              "'Đak' (pupil) is written with the single letter đ. 'Dj', 'dy' and 'djack' are English approximations that do not exist in Croatian spelling, and 'cita' has lost its č.",
          },
          {
            q: "Spot the error: 'Ljubav je lyepa.'",
            options: [
              'ljubav should be lyubav',
              'lyepa should be lijepa — Croatian has no letter y',
              'je should be jest',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              "Croatian has no y; the 'y' sound is written j, so 'beautiful' is lijepa. 'Ljubav' is already right — lj is a single letter.",
          },
          {
            q: "How is the C in 'cipele' (shoes) pronounced?",
            options: ['like k in cat', 'like ts in cats', 'like s in sun', 'like ch in church'],
            correct: 1,
            explanation:
              "C is always 'ts' — never k, never s. The 'ch' sound has its own letter, č.",
          },
          {
            q: 'Counting Lj, Nj and Dž as single letters, how many letters does the Croatian alphabet have?',
            options: ['26', '28', '30', '32'],
            correct: 2,
            explanation:
              'Croatian has 30 letters; each of the three digraphs counts as one letter, and there is no q, w, x or y.',
          },
          {
            q: 'In which word does R carry the syllable as a vowel?',
            options: ['ruka', 'more', 'riba', 'trg'],
            correct: 3,
            explanation:
              "'Trg' (square) has no written vowel, so the rolled r is the core of the syllable. In ruka, more and riba an ordinary vowel does that job.",
          },
        ],
      },
      {
        type: 'summary',
        title: 'Croatian Alphabet — Complete!',
        points: [
          'Croatian has 30 letters — 3 digraphs (Lj, Nj, Dž) count as single letters',
          'It is perfectly phonetic: one letter = one sound, always',
          'The hardest pairs: Č (hard) vs Ć (soft), Dž (hard) vs Đ (soft)',
          'R can be a vowel — prst (finger), trg (square), Krk (island)',
          "J = 'y' as in yes; C = 'ts' as in cats; H = breathy as in loch",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 2: Noun Gender
  // ─────────────────────────────────────────────────────────
  {
    id: 'gender',
    title: 'Noun Gender',
    subtitle: 'Learn masculine, feminine, and neuter nouns',
    icon: '⚖️',
    level: 'A1',
    duration: '~5 min',
    color: '#16a34a',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'Noun Gender in Croatian',
        body: 'Every Croatian noun has a grammatical gender: masculine, feminine, or neuter. Gender controls how adjectives, pronouns, and verbs agree with the noun. The good news: the ending of most nouns tells you the gender immediately.',
        icon: '⚖️',
      },
      {
        type: 'rule',
        title: 'Rule 1 — Feminine Nouns',
        body: 'Most nouns ending in -A are feminine. This is the most reliable rule in Croatian grammar. Almost every noun ending in -a is feminine, regardless of biological sex. Exceptions exist for male names and a few loanwords.',
        highlight: '-A = feminine',
      },
      {
        type: 'rule',
        title: 'Rule 2 — Neuter Nouns',
        body: 'Nouns ending in -O or -E are neuter. This is also very reliable. Neuter nouns behave differently from masculine and feminine nouns in all cases.',
        highlight: '-O / -E = neuter',
      },
      {
        type: 'rule',
        title: 'Rule 3 — Masculine Nouns',
        body: "Nouns ending in a consonant are masculine. This is the default category. Note: some masculine nouns end in -o (loanwords like 'auto', 'radio') and a few neuter nouns end in a consonant — but these are rare exceptions.",
        highlight: 'consonant = masculine',
      },
      {
        type: 'table',
        title: 'Gender Endings at a Glance',
        headers: ['Gender', 'Typical Endings', 'Examples'],
        rows: [
          ['Masculine', 'consonant, -o (loanwords)', 'stol (table), brat (brother), auto (car)'],
          ['Feminine', '-a', 'žena (woman), knjiga (book), ruka (hand)'],
          ['Neuter', '-o, -e', 'selo (village), more (sea), dijete (child)'],
        ],
      },
      {
        type: 'rule',
        title: 'Natural Gender Exceptions',
        body: "Biological sex can override grammatical gender. Male names ending in -a are masculine despite the -a ending: Luka, Nikola, Matija all take masculine adjective agreement (mali Luka — little Luka). Occupational words ending in -a like 'kolega' (colleague) and 'vojvoda' (duke/warlord) can refer to males and take masculine agreement in practice: 'dobar kolega' (good colleague, male).",
        highlight: 'biological sex overrides',
      },
      {
        type: 'rule',
        title: 'Adjective Agreement',
        body: 'Adjectives must agree with the noun in gender, number, and case. A big table: veliki stol (masc). A big book: velika knjiga (fem). A big village: veliko selo (neut). The adjective changes its ending to match the noun.',
        highlight: 'adjectives must agree',
      },
      {
        type: 'example',
        title: 'Gender in Sentences',
        items: [
          {
            hr: 'Gdje je stol?',
            en: 'Where is the table?',
            note: 'stol = masculine (ends in consonant)',
          },
          {
            hr: 'Knjiga je na stolu.',
            en: 'The book is on the table.',
            note: 'knjiga = feminine (ends in -a)',
          },
          {
            hr: 'More je lijepo.',
            en: 'The sea is beautiful.',
            note: 'more = neuter (ends in -e)',
          },
          {
            hr: 'Grad je velik.',
            en: 'The city is big.',
            note: 'grad = masculine (ends in consonant)',
          },
          { hr: 'Soba je mala.', en: 'The room is small.', note: 'soba = feminine (ends in -a)' },
        ],
      },
      {
        type: 'example',
        title: 'Adjective Agreement — Watch It Change',
        items: [
          { hr: 'veliki brat', en: 'big brother', note: 'veliki = masc. adj. form' },
          { hr: 'velika sestra', en: 'big sister', note: 'velika = fem. adj. form' },
          { hr: 'veliko dijete', en: 'big child', note: 'veliko = neut. adj. form' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Moja majka je učiteljica.',
            en: 'My mother is a teacher.',
            note: 'majka, učiteljica — feminine -a; moja agrees',
          },
          {
            hr: 'Naš auto je star.',
            en: 'Our car is old.',
            note: 'auto ends in -o but is a masculine loanword: star, not staro',
          },
          {
            hr: 'Dijete spava u sobi.',
            en: 'The child is sleeping in the room.',
            note: 'dijete — neuter, ends in -e',
          },
          {
            hr: 'Luka je dobar prijatelj.',
            en: 'Luka is a good friend.',
            note: "a male name in -a takes the masculine 'dobar'",
          },
          {
            hr: 'Ovo pivo je hladno.',
            en: 'This beer is cold.',
            note: 'pivo — neuter -o; hladno agrees',
          },
          {
            hr: 'Stari grad je lijep.',
            en: 'The old town is beautiful.',
            note: 'grad — consonant = masculine; stari and lijep agree',
          },
          {
            hr: 'Nova kolegica radi ovdje.',
            en: 'The new colleague (a woman) works here.',
            note: 'kolegica — feminine; kolega would be the male colleague',
          },
          {
            hr: 'Sunce je toplo, a voda je hladna.',
            en: 'The sun is warm and the water is cold.',
            note: 'sunce neuter → toplo; voda feminine → hladna',
          },
        ],
      },
      {
        type: 'quiz',
        q: "What gender is the noun 'planina' (mountain)?",
        options: ['Masculine', 'Feminine', 'Neuter', 'Cannot tell'],
        correct: 1,
        explanation:
          "'Planina' ends in -a, so it is feminine. This is the most reliable rule: almost all nouns ending in -a are feminine in Croatian.",
      },
      {
        type: 'quiz',
        q: 'Which ending indicates a neuter noun?',
        options: ['-a', 'consonant', '-o or -e', '-i'],
        correct: 2,
        explanation:
          "Neuter nouns end in -o (like 'selo', village) or -e (like 'more', sea). Nouns ending in -a are feminine, and consonant endings indicate masculine.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners hear that 'auto' and 'radio' end in -o and call them neuter — they are masculine loanwords: 'stari auto', not 'staro auto'. A male name in -a pulls the same trick the other way: 'Luka je visok', never 'Luka je visoka', because biological sex overrides the ending. And neuter is not the case for everything English calls 'it' — 'stol' is masculine and 'knjiga' is feminine, so 'Stol je velik' and 'Knjiga je velika' each keep their own ending.",
        highlight: 'biological sex overrides the ending',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Ovo je ___ knjiga.' (This is a good book.)",
            options: ['dobar', 'dobra', 'dobro', 'dobri'],
            correct: 1,
            explanation:
              'knjiga ends in -a, so it is feminine and the adjective takes -a: dobra. dobar is masculine, dobro neuter, dobri masculine plural.',
          },
          {
            q: "Complete: 'More je ___.' (The sea is calm.)",
            options: ['miran', 'mirna', 'mirno', 'mirni'],
            correct: 2,
            explanation:
              'more ends in -e and is neuter, so the adjective ends in -o: mirno. miran is masculine and mirna feminine.',
          },
          {
            q: 'Which sentence has correct agreement?',
            options: ['Auto je novo.', 'Auto je nova.', 'Auto je novi.', 'Auto je nove.'],
            correct: 2,
            explanation:
              "'auto' is a masculine loanword despite its -o, so it takes masculine 'novi'. 'novo' would be neuter, 'nova' feminine, 'nove' plural.",
          },
          {
            q: "Spot the error: 'Nikola je dobra kolegica.'",
            options: [
              'Nikola is a male name, so it needs dobar kolega',
              'kolegica should be kolegice',
              'dobra should be dobro',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              "Nikola is a man's name; biological sex overrides the -a ending, so the masculine 'dobar kolega' is required.",
          },
          {
            q: "What gender is 'selo' (village), and why?",
            options: [
              'masculine — most nouns are',
              'feminine — it ends in a vowel',
              'neuter — it ends in -o',
              'it cannot be told from the ending',
            ],
            correct: 2,
            explanation:
              'Nouns in -o or -e are neuter. The -a ending marks feminine, and a consonant ending marks masculine.',
          },
          {
            q: 'Which noun is masculine?',
            options: ['žena', 'selo', 'ruka', 'stol'],
            correct: 3,
            explanation:
              'stol ends in a consonant — the masculine pattern. žena and ruka are feminine (-a); selo is neuter (-o).',
          },
          {
            q: "Complete: 'Ivan i Ana imaju ___ dijete.' (a small child)",
            options: ['mali', 'mala', 'malo', 'male'],
            correct: 2,
            explanation:
              'dijete is neuter (-e), so the adjective takes neuter -o: malo dijete. mali is masculine, mala feminine.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Noun Gender — Complete!',
        points: [
          'Three genders: masculine, feminine, neuter',
          'Ending -A = feminine (knjiga, žena, soba)',
          'Ending -O or -E = neuter (selo, more, dijete)',
          'Consonant ending = masculine (stol, brat, grad)',
          "Adjectives must match the noun's gender — the ending changes",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 3: Present Tense Conjugation
  // ─────────────────────────────────────────────────────────
  {
    id: 'present',
    title: 'Present Tense Conjugation',
    subtitle: 'Three verb classes plus essential irregular verbs',
    icon: '🔄',
    level: 'A2',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Present Tense in Croatian',
        body: 'Croatian verbs conjugate for person (1st, 2nd, 3rd) and number (singular, plural). There are three main conjugation classes, each with a characteristic ending pattern. Learn these three patterns and you can conjugate hundreds of verbs.',
        icon: '🔄',
      },
      {
        type: 'rule',
        title: 'Subject Pronouns',
        body: "In Croatian, subject pronouns (ja, ti, on/ona/ono...) are often dropped because the verb ending itself shows who is performing the action. You say 'Govorim' (I speak) without needing 'ja'. Pronouns are added for emphasis or contrast.",
        highlight: 'pronouns are optional',
      },
      {
        type: 'table',
        title: 'Subject Pronouns',
        headers: ['Person', 'Singular', 'Plural'],
        rows: [
          ['1st', 'ja (I)', 'mi (we)'],
          ['2nd', 'ti (you)', 'vi (you all / formal you)'],
          ['3rd', 'on/ona/ono (he/she/it)', 'oni/one/ona (they)'],
        ],
      },
      {
        type: 'rule',
        title: 'Three Conjugation Classes',
        body: "Class 1 (-AM pattern): infinitives often ending in -ati → gledam, gledaš... Class 2 (-IM pattern): infinitives often ending in -iti, -ati → govorim, govoriš... Class 3 (-EM pattern): infinitives often ending in -ati, -eti, -uti → pišem, pišeš... The infinitive ending doesn't always predict the class — you must learn each verb's class.",
        highlight: 'three classes',
      },
      {
        type: 'table',
        title: 'Class 1 (-AM) — gledati (to watch)',
        headers: ['Person', 'Singular', 'Plural'],
        rows: [
          ['1st', 'gledam', 'gledamo'],
          ['2nd', 'gledaš', 'gledate'],
          ['3rd', 'gleda', 'gledaju'],
        ],
      },
      {
        type: 'table',
        title: 'Class 2 (-IM) — govoriti (to speak)',
        headers: ['Person', 'Singular', 'Plural'],
        rows: [
          ['1st', 'govorim', 'govorimo'],
          ['2nd', 'govoriš', 'govorite'],
          ['3rd', 'govori', 'govore'],
        ],
      },
      {
        type: 'table',
        title: 'Class 3 (-EM) — pisati (to write)',
        headers: ['Person', 'Singular', 'Plural'],
        rows: [
          ['1st', 'pišem', 'pišemo'],
          ['2nd', 'pišeš', 'pišete'],
          ['3rd', 'piše', 'pišu'],
        ],
      },
      {
        type: 'table',
        title: 'Irregular — biti (to be)',
        headers: ['Person', 'Singular', 'Plural'],
        rows: [
          ['1st', 'jesam / sam', 'jesmo / smo'],
          ['2nd', 'jesi / si', 'jeste / ste'],
          ['3rd', 'jest / je', 'jesu / su'],
        ],
      },
      {
        type: 'rule',
        title: 'Other Key Irregular Verbs',
        body: 'Imati (to have): imam, imaš, ima, imamo, imate, imaju. Ići (to go): idem, ideš, ide, idemo, idete, idu. Htjeti (to want/will): hoću/ću, hoćeš/ćeš, hoće/će, hoćemo/ćemo, hoćete/ćete, hoće/će. These are used constantly — memorise them first.',
        highlight: 'imati · ići · htjeti',
      },
      {
        type: 'example',
        title: 'Present Tense in Action',
        items: [
          {
            hr: 'Govorim hrvatski svaki dan.',
            en: 'I speak Croatian every day.',
            note: 'Class 2: govoriti → govorim',
          },
          {
            hr: 'Ona gleda film.',
            en: 'She is watching a film.',
            note: 'Class 1: gledati → gleda',
          },
          {
            hr: 'Idemo na plažu.',
            en: 'We are going to the beach.',
            note: 'Irregular: ići → idemo',
          },
          { hr: 'Imam pitanje.', en: 'I have a question.', note: 'Irregular: imati → imam' },
          {
            hr: 'Što piše u knjizi?',
            en: 'What is written in the book?',
            note: 'Class 3: pisati → piše',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ne mogu doći, moram raditi.',
            en: 'I cannot come, I have to work.',
            note: 'moći → mogu; the ja and oni forms are both mogu',
          },
          {
            hr: 'Kamo ideš? — Idem na tržnicu.',
            en: 'Where are you going? — To the market.',
            note: 'ići → ideš, idem',
          },
          {
            hr: 'Hoćete li još malo juhe?',
            en: 'Would you like a little more soup?',
            note: 'htjeti → hoćete; juhe — partitive genitive',
          },
          {
            hr: 'Kupujem kruh svako jutro.',
            en: 'I buy bread every morning.',
            note: 'kupovati → kupujem: -ovati becomes -ujem',
          },
          {
            hr: 'Možeš li mi pokazati put?',
            en: 'Can you show me the way?',
            note: 'moći → možeš, with the g → ž change',
          },
          {
            hr: 'Djeca pišu zadaću, a ja kuham.',
            en: 'The children are doing their homework and I am cooking.',
            note: 'pisati → pišu; kuhati → kuham',
          },
          {
            hr: 'On zove taksi, mi čekamo vani.',
            en: 'He is calling a taxi, we are waiting outside.',
            note: 'zvati → zove (stem change); čekati → čekamo',
          },
          {
            hr: 'Kad putujem, uvijek spavam loše.',
            en: 'When I travel, I always sleep badly.',
            note: 'putovati → putujem; spavati → spavam',
          },
        ],
      },
      {
        type: 'quiz',
        q: "How do you say 'She speaks' using govoriti (Class 2)?",
        options: ['govora', 'govorim', 'govori', 'govorite'],
        correct: 2,
        explanation:
          'Class 2 (-IM) 3rd person singular is formed by dropping the -im ending and adding -i. Govoriti → govori (she/he/it speaks). The pattern is: govorim, govoriš, govori, govorimo, govorite, govore.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners regularise 'moći' into 'možem' — the ja form is 'mogu' (možeš, može, možemo, možete, mogu). Second, verbs in -ovati get conjugated straight from the infinitive, 'kupovam', 'putovam' — the -ova- becomes -uje-: kupujem, putujem. Third, 'htjeti' is fitted to the -im pattern as 'htjem' — it is 'hoću, hoćeš, hoće', and its negative is the single word 'neću', never 'ne hoću'.",
        highlight: 'the -ova- becomes -uje-',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Ja ___ plivati.' (I can swim.)",
            options: ['možem', 'mogu', 'moguću', 'može'],
            correct: 1,
            explanation:
              'moći is irregular: mogu, možeš, može, možemo, možete, mogu. možem is a learner invention and može is the he/she form.',
          },
          {
            q: "Complete: 'Oni ___ u Zagreb.' (They are going to Zagreb.)",
            options: ['idu', 'ideju', 'idaju', 'ide'],
            correct: 0,
            explanation:
              'ići follows the -em pattern: idem, ideš, ide, idemo, idete, idu. ide is singular.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Kupovam kruh.', 'Kupujem kruh.', 'Kupivam kruh.', 'Kupem kruh.'],
            correct: 1,
            explanation:
              'Verbs in -ovati swap -ova- for -uje-: kupovati → kupujem. The infinitive stem never appears in the present tense.',
          },
          {
            q: "Spot the error: 'Ne hoću ići kući.'",
            options: [
              'ići should be idem',
              'Ne hoću should be Neću — the negative of htjeti is one word',
              'kući should be kuću',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              "htjeti's negative is irregular and written as one word: neću, nećeš, neće. 'Ne hoću' does not exist.",
          },
          {
            q: "Which two forms of 'moći' are identical?",
            options: ['ja and ti', 'ti and on', 'ja and oni', 'mi and vi'],
            correct: 2,
            explanation:
              "mogu is both 'I can' and 'they can'. Context or the pronoun tells them apart.",
          },
          {
            q: "Complete: 'Što ___ za doručak?' (What do you (sg.) want for breakfast?)",
            options: ['hoću', 'hoćeš', 'htješ', 'hoćete'],
            correct: 1,
            explanation:
              'htjeti: hoću, hoćeš, hoće, hoćemo, hoćete, hoće. hoćeš is the ti form; hoćete is plural or formal.',
          },
          {
            q: "You hear yourself say 'oni pisaju'. Which correction is right?",
            options: [
              'oni pišu — pisati is an -em verb with the s → š change',
              'oni pisu',
              'oni pišaju',
              'no correction — pisaju is fine',
            ],
            correct: 0,
            explanation:
              'pisati conjugates pišem, pišeš, piše, pišemo, pišete, pišu. The š is part of every present-tense form.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Present Tense — Complete!',
        points: [
          'Three conjugation classes: -AM (gledati), -IM (govoriti), -EM (pisati)',
          'Subject pronouns (ja, ti, on...) are usually dropped — the verb ending is enough',
          'Key irregulars: biti (to be), imati (to have), ići (to go), htjeti (to want)',
          'biti has both long (jesam) and short (sam) forms — short forms are clitics',
          "Learn each verb's class when you first encounter it",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 4: The 7 Cases (Padeži Overview)
  // ─────────────────────────────────────────────────────────
  {
    id: 'cases',
    title: 'The 7 Cases (Padeži)',
    subtitle: 'How and why Croatian changes noun endings',
    icon: '🏛️',
    // Concept-teaching (2026-08-18): B1 → A1. This is the app's ONLY
    // "what is a case" primer, while every case DRILL unlocks at A1 — gating
    // the explanation two levels above the drills meant beginners were tested
    // on a concept nothing had ever taught them.
    level: 'A1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Has 7 Cases',
        body: "In Croatian, nouns, pronouns, and adjectives change their endings depending on their role in the sentence. These different forms are called cases (padeži). Instead of using separate words like 'of', 'to', 'by', Croatian changes the noun's ending. It sounds daunting — but once you understand the logic, it becomes elegant.",
        icon: '🏛️',
      },
      {
        type: 'rule',
        title: 'You Already Use Cases — in English',
        body: "You say 'HE is here' but 'I see HIM' and 'that is HIS coat' — same person, three forms, chosen by the job the word does in the sentence. That IS a case system. English keeps it only for pronouns (he/him/his, who/whom, they/them/their); Croatian applies the same idea to every noun, by changing the ending. Each case is simply one job a word can have.",
        highlight: 'he / him / his — you already do this',
      },
      {
        type: 'rule',
        title: 'What Cases Do',
        body: "Cases replace prepositions and word order to show meaning. 'I see the man' vs 'The man sees me' — in Croatian this is shown by changing 'čovjek' (man) to 'čovjeka'. You cannot move words around freely without changing meaning; instead, you change the noun's form.",
        highlight: 'endings show meaning',
      },
      {
        type: 'table',
        title: 'The 7 Cases — Overview',
        headers: ['Case', 'Croatian', 'Answers', 'Example'],
        rows: [
          ['Nominative', 'Nominativ', 'Who/What? (subject)', 'Stol je velik. (The table is big.)'],
          [
            'Accusative',
            'Akuzativ',
            'Whom/What? (direct object)',
            'Vidim stol. (I see the table.)',
          ],
          [
            'Genitive',
            'Genitiv',
            'Of whom/what? (possession, absence)',
            'Nema stola. (There is no table.)',
          ],
          ['Dative', 'Dativ', 'To/for whom?', 'Dajem Ani. (I give to Ana.)'],
          [
            'Locative',
            'Lokativ',
            'About/at/in (location, topic)',
            'Govori o stolu. (He speaks about the table.)',
          ],
          [
            'Instrumental',
            'Instrumental',
            'With/by means of',
            'Piše olovkom. (He writes with a pen.)',
          ],
          ['Vocative', 'Vokativ', 'Direct address', 'Stole moj! (My table! — archaic/poetic)'],
        ],
      },
      {
        type: 'rule',
        title: 'Nominative — The Subject Case',
        body: 'The nominative is the base form — what you find in dictionaries. It marks the subject of the sentence: the one doing the action. Stol je velik (The table is big). Žena čita (The woman reads). Adjectives in nominative: veliki (masc), velika (fem), veliko (neut).',
        highlight: 'Nominative = subject, dictionary form',
      },
      {
        type: 'rule',
        title: 'Accusative — The Object Case',
        body: "The accusative marks the direct object — the thing being acted upon. Vidim stol (I see the table — stol doesn't change, it's inanimate masculine). But animate masculine nouns DO change: Vidim muškarca (I see a man — muškarac → muškarca). Also used after motion verbs with 'u' and 'na'.",
        highlight: 'Accusative = direct object',
      },
      {
        type: 'rule',
        title: 'Genitive — Possession and Negation',
        body: "The genitive shows possession ('of'), quantity, and negation. Nema kruha (There is no bread). Auto mog brata (My brother's car). After nema (there is no), all nouns go into genitive. Also used after numbers 2-4 (genitive singular) and 5+ (genitive plural).",
        highlight: 'Genitive = of, nema + genitive',
      },
      {
        type: 'rule',
        title: 'Locative — Always With a Preposition',
        body: 'The locative ALWAYS requires a preposition — it never appears alone. Common prepositions: u (in), na (on/at), o (about), pri (at/near). Živim u Zagrebu (I live in Zagreb). Govori o knjizi (She speaks about the book). Key contrast: u Zagreb (accusative, going TO) vs u Zagrebu (locative, IN).',
        highlight: 'always needs a preposition',
      },
      {
        type: 'example',
        title: 'Cases in Real Sentences',
        items: [
          {
            hr: 'Vidim muškarca.',
            en: 'I see a man.',
            note: 'Accusative: muškarac → muškarca (masc. animate)',
          },
          { hr: 'Nema kruha.', en: 'There is no bread.', note: 'Genitive negation: kruh → kruha' },
          {
            hr: 'Idem u Zagreb.',
            en: 'I am going to Zagreb.',
            note: "Accusative after 'u' (motion toward)",
          },
          {
            hr: 'Živim u Zagrebu.',
            en: 'I live in Zagreb.',
            note: "Locative after 'u' (static location)",
          },
          {
            hr: 'Dajem knjigu sestri.',
            en: 'I give the book to my sister.',
            note: 'Dative: sestra → sestri (the receiver); knjiga → knjigu (the thing given)',
          },
          {
            hr: 'Pišem olovkom.',
            en: 'I write with a pencil.',
            note: 'Instrumental: olovka → olovkom',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Brat čita novine.',
            en: 'My brother is reading the newspaper.',
            note: 'brat — nominative subject; novine — accusative object',
          },
          {
            hr: 'Vidim brata na trgu.',
            en: 'I see my brother on the square.',
            note: 'brat → brata (accusative, animate); trg → trgu (locative after na)',
          },
          {
            hr: 'Nema mlijeka u hladnjaku.',
            en: 'There is no milk in the fridge.',
            note: 'nema + genitive: mlijeko → mlijeka',
          },
          {
            hr: 'Kupujem kavu za mamu.',
            en: 'I am buying coffee for mum.',
            note: 'both accusative: kava → kavu, mama → mamu',
          },
          {
            hr: 'Idemo u školu autobusom.',
            en: 'We go to school by bus.',
            note: 'u školu — accusative (motion); autobusom — instrumental (means)',
          },
          {
            hr: 'Šaljem poruku prijatelju.',
            en: 'I am sending a message to a friend.',
            note: 'poruka → poruku (accusative); prijatelj → prijatelju (dative, the receiver)',
          },
          {
            hr: 'Ivane, dođi ovamo!',
            en: 'Ivan, come here!',
            note: 'vocative: Ivan → Ivane when you call him',
          },
          {
            hr: 'Pričamo o gradu i o moru.',
            en: 'We are talking about the city and the sea.',
            note: 'o + locative: grad → gradu, more → moru',
          },
          {
            hr: 'Živim s bratom u malom stanu.',
            en: 'I live with my brother in a small flat.',
            note: 'bratom — instrumental after s; u stanu — locative',
          },
        ],
      },
      {
        type: 'rule',
        title: 'The u Zagreb / u Zagrebu Contrast',
        body: "This pair is the most important case contrast for beginners. MOTION uses accusative: Idem u Zagreb (I'm going to Zagreb). LOCATION uses locative: Živim u Zagrebu (I live in Zagreb). The same preposition 'u' triggers different cases depending on whether there is movement involved.",
        highlight: 'motion = accusative, location = locative',
      },
      {
        type: 'quiz',
        q: "Which case do you use after 'nema' (there is no)?",
        options: ['Nominative', 'Accusative', 'Genitive', 'Locative'],
        correct: 2,
        explanation:
          "'Nema' (there is no) always triggers the genitive case. 'Nema kruha' = there is no bread (kruh → kruha). 'Nema vremena' = there is no time (vrijeme → vremena). This is one of the most useful rules to memorise first.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "The classic beginner error is one form everywhere: 'Vidim brat' — an animate masculine object needs the accusative 'brata'. The second is keeping the accusative after a static verb: 'Živim u Zagreb' must be 'Živim u Zagrebu', because being somewhere is locative, going somewhere is accusative. The third is ignoring 'nema': 'Nema kruh' has to be 'Nema kruha' — absence always takes the genitive.",
        highlight: 'being somewhere is locative, going somewhere is accusative',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Idem u ___.' (I am going to Split.)",
            options: ['Split', 'Splitu', 'Splita', 'Splitom'],
            correct: 0,
            explanation:
              "Motion with 'u' takes the accusative, and an inanimate masculine noun keeps its dictionary form: u Split. 'Splitu' is locative (being in Split), 'Splita' is genitive.",
          },
          {
            q: "Complete: 'Nema ___.' (There is no water.)",
            options: ['voda', 'vodu', 'vode', 'vodi'],
            correct: 2,
            explanation:
              "'Nema' always takes the genitive: voda → vode. 'vodu' is accusative, 'vodi' dative/locative.",
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Dajem knjigu sestra.',
              'Dajem knjigu sestru.',
              'Dajem knjigu sestre.',
              'Dajem knjigu sestri.',
            ],
            correct: 3,
            explanation:
              "The receiver is in the dative: sestra → sestri. Accusative 'sestru' would make her the thing given, and genitive 'sestre' would mean 'of the sister'.",
          },
          {
            q: "What is wrong with 'Živim u Zagreb'?",
            options: [
              'Zagreb should be Zagreba (genitive)',
              'Zagreb should be Zagrebu — location after u takes the locative',
              'u should be na',
              'nothing — it is correct',
            ],
            correct: 1,
            explanation:
              "Living somewhere is static location, so 'u' takes the locative: u Zagrebu. The accusative 'u Zagreb' means going TO Zagreb.",
          },
          {
            q: 'Which English pair works like a Croatian case change?',
            options: ['big / bigger', 'he / him', 'dog / dogs', 'walk / walked'],
            correct: 1,
            explanation:
              'he and him are the same person doing different jobs — subject and object — which is exactly what Croatian endings do to every noun. The others are comparison, plural and tense.',
          },
          {
            q: "In 'Pišem olovkom', which case is 'olovkom' and why?",
            options: [
              'accusative — it is the object',
              'genitive — it belongs to me',
              'instrumental — it is the tool I write with',
              'locative — it is where I write',
            ],
            correct: 2,
            explanation:
              'The -om ending marks the instrumental, the case of the tool or means: writing WITH a pencil.',
          },
          {
            q: "Which case answers 'to whom?' — as in 'I give the book TO Ana'?",
            options: ['nominative', 'accusative', 'dative', 'vocative'],
            correct: 2,
            explanation:
              'The dative marks the receiver: Dajem knjigu Ani. The accusative marks what is given; the vocative is for calling someone.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The 7 Cases — Complete!',
        points: [
          'Nominative = subject (dictionary form) — Stol je velik',
          'Accusative = direct object, motion toward — Vidim stol / Idem u Zagreb',
          'Genitive = possession, negation — Nema kruha / auto mog brata',
          'Locative = static location/topic, always with a preposition — Živim u Zagrebu',
          'The u/na contrast: accusative for motion, locative for being there',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 5: Verb Aspect
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect',
    title: 'Verb Aspect',
    subtitle: 'The most important concept in Croatian grammar',
    icon: '⏳',
    level: 'B1',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Verb Aspect — The Most Important Croatian Concept',
        body: 'Almost every Croatian verb comes in two versions: imperfective (describes process, duration, habit) and perfective (describes completion, result). This is called verb aspect (glagolski vid). There is no direct equivalent in English — English uses tense to hint at aspect, but Croatian makes it mandatory and explicit.',
        icon: '⏳',
      },
      {
        type: 'rule',
        title: 'What Aspect Means',
        body: 'Imperfective aspect focuses on the action itself — the process, the duration, the repetition. Perfective aspect focuses on the completion — the result, the moment it finished. You must choose every time you use a verb. There is no neutral option.',
        highlight: 'process vs completion',
      },
      {
        type: 'rule',
        title: 'Imperfective — When to Use It',
        body: "Use the imperfective when: (1) describing a habit or routine — 'I read every day'; (2) describing an ongoing action — 'I was reading when he called'; (3) describing the activity without caring about completion — 'I was writing' (whether or not finished); (4) in questions about whether something happened at all.",
        highlight: 'habit, process, duration',
      },
      {
        type: 'rule',
        title: 'Perfective — When to Use It',
        body: "Use the perfective when: (1) the action was completed — 'I read the whole book'; (2) the action happened once, suddenly — 'He jumped up'; (3) the result matters — 'I wrote the letter' (it's now written); (4) sequential actions — 'He came in, sat down, and opened his book'. Each step is a completed event.",
        highlight: 'completion, result, single event',
      },
      {
        type: 'table',
        title: 'Aspect Pairs',
        headers: ['Imperfective (process)', 'Perfective (completion)', 'Meaning'],
        rows: [
          ['pisati', 'napisati', 'to write'],
          ['čitati', 'pročitati', 'to read'],
          ['učiti', 'naučiti', 'to learn'],
          ['jesti', 'pojesti', 'to eat'],
          ['gledati', 'pogledati', 'to watch / look'],
          ['dolaziti', 'doći', 'to come / arrive'],
          ['odlaziti', 'otići', 'to leave / go away'],
          ['kupovati', 'kupiti', 'to buy'],
        ],
      },
      {
        type: 'example',
        title: 'The Same Verb — Two Meanings',
        items: [
          {
            hr: 'Jučer sam pisao pismo.',
            en: 'Yesterday I was writing a letter. (process, unfinished)',
            note: 'Imperfective — the writing was in progress',
          },
          {
            hr: 'Jučer sam napisao pismo.',
            en: 'Yesterday I wrote a letter. (completed)',
            note: 'Perfective — the letter is done',
          },
          {
            hr: 'Svaki dan čitam novine.',
            en: 'Every day I read the newspaper. (habit)',
            note: 'Imperfective for habitual actions',
          },
          {
            hr: 'Pročitao sam cijelu knjigu.',
            en: 'I read the whole book. (finished)',
            note: 'Perfective — completed from start to finish',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Aspect in the Future Tense',
        body: "In the future tense, the difference becomes even more important. 'Čitat ću' (I will be reading / I will read — imperfective, process or habit). 'Pročitat ću' (I will have read / I will finish reading — perfective, completion). 'Kad dođeš' (When you arrive — perfective in time clauses, not 'kad dolaziš').",
        highlight: 'future aspect is critical',
      },
      {
        type: 'rule',
        title: 'Aspect Pairs — Patterns',
        body: 'Many perfective verbs are formed by adding a prefix to the imperfective: pisati → napisati (na-), čitati → pročitati (pro-), učiti → naučiti (na-), jesti → pojesti (po-). But some pairs are completely different words: dolaziti (imperf.) / doći (perf.) — to come. You must learn each pair.',
        highlight: 'prefixes often form perfectives',
      },
      {
        type: 'example',
        title: 'Aspect Contrast — Future and Time Clauses',
        items: [
          {
            hr: 'Kad dođeš, nazovi me.',
            en: 'When you arrive, call me.',
            note: "Perfective 'dođeš' — the arrival must be complete",
          },
          {
            hr: 'Sutra ću kupiti kruh.',
            en: 'Tomorrow I will buy bread.',
            note: 'Perfective — the purchase will be completed',
          },
          {
            hr: 'Svako jutro ću učiti sat vremena.',
            en: 'Every morning I will study for an hour.',
            note: 'Imperfective — repeated habit in the future',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Dok sam kuhao večeru, nazvala me sestra.',
            en: 'While I was cooking dinner, my sister called me.',
            note: 'kuhao (impf. background) + nazvala (pf. event)',
          },
          {
            hr: 'Skuhao sam večeru i pozvao susjede.',
            en: 'I cooked dinner and invited the neighbours.',
            note: 'skuhao, pozvao — two completed steps',
          },
          {
            hr: 'Godinama je učila hrvatski i napokon ga je naučila.',
            en: 'For years she was learning Croatian and finally she learned it.',
            note: 'učila (process) → naučila (result)',
          },
          {
            hr: 'Kupujemo kruh u istoj pekari već deset godina.',
            en: 'We have been buying bread at the same bakery for ten years.',
            note: 'kupovati — a habit',
          },
          {
            hr: 'Kupili smo kartu i ušli u vlak.',
            en: 'We bought a ticket and got on the train.',
            note: 'kupiti, ući — a sequence of completed actions',
          },
          {
            hr: 'U rječniku piše: pisati, nesvrš. — napisati, svrš.',
            en: 'The dictionary says: pisati, impf. — napisati, pf.',
            note: 'how a dictionary marks an aspect pair',
          },
          {
            hr: 'Otvarao je prozor, ali se zaglavio.',
            en: 'He was trying to open the window, but it jammed.',
            note: 'otvarati — the attempt; the result never came',
          },
        ],
      },
      {
        type: 'quiz',
        q: "You want to say 'I read the whole book' (it's finished). Which verb do you use?",
        options: ['čitao sam', 'pročitao sam', 'bit ću čitao', 'čitat ću'],
        correct: 1,
        explanation:
          "'Pročitao sam' uses the perfective 'pročitati' — the reading is completed, the whole book is done. 'Čitao sam' (imperfective) would mean 'I was reading' — the process, not the completion. The word 'cijelu' (whole) also signals perfective meaning.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers reach for the perfective whenever the English is past simple: 'Svaki dan sam napisao pismo' — a habit is imperfective, 'Svaki dan sam pisao pismo'. Second, the perfective gets used for a present ongoing action: 'Sada napišem pismo' cannot mean 'I am writing now' — a perfective present reads as a future or a single completion, so it is 'Sada pišem pismo'. Third, prefixes are treated as decoration: 'čitati' and 'pročitati' are not one verb with a flourish — the prefix turns a process into a completion, and the dictionary lists both.",
        highlight: 'a habit is imperfective',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Svako jutro ___ novine.' (I read the paper every morning.)",
            options: ['pročitam', 'pročitao sam', 'pročitat ću', 'čitam'],
            correct: 3,
            explanation:
              "'Svako jutro' marks a habit, so the imperfective present čitam is required. The perfective forms describe one completed reading.",
          },
          {
            q: "Complete: 'Jučer sam ___ cijelu knjigu.' (finished the whole book)",
            options: ['čitao', 'čitam', 'pročitao', 'čitat'],
            correct: 2,
            explanation:
              "'cijelu knjigu' — the whole book — signals completion, which is the perfective pročitati. čitao sam would only say I was reading.",
          },
          {
            q: 'Which sentence describes a completed action with a result?',
            options: [
              'Pisao sam pismo cijelo popodne.',
              'Napisao sam pismo i poslao ga.',
              'Pišem pismo baki.',
              'Često pišem pisma.',
            ],
            correct: 1,
            explanation:
              'napisao and poslao are perfective — the letter exists and is gone. The others describe a process, a present activity and a habit.',
          },
          {
            q: "Spot the error: 'Dok sam napisao pismo, zazvonio je telefon.'",
            options: [
              'napisao should be pisao — the background action is a process',
              'zazvonio should be zvonio',
              'telefon should be telefona',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              "'Dok' introduces the ongoing background, which must be imperfective: Dok sam pisao pismo. The ringing is the single event, so zazvonio is right.",
          },
          {
            q: "In the dictionary entry 'kupovati (nesvrš.) / kupiti (svrš.)', which verb means the buying is DONE?",
            options: ['kupovati', 'kupiti', 'both', 'neither — that is shown by tense'],
            correct: 1,
            explanation:
              'svrš. (svršeni) marks the perfective, the completed purchase: kupiti. nesvrš. is the process or habit of buying.',
          },
          {
            q: "Why does Croatian need two verbs where English has one 'to write'?",
            options: [
              'one is formal, one is informal',
              'one is present, one is past',
              'one views the action as a process, the other as a completion',
              'one is used by men, one by women',
            ],
            correct: 2,
            explanation:
              'Aspect is a view of the action, not a tense or a register. Both verbs exist in every tense; English leaves the difference to context.',
          },
          {
            q: "Complete: 'Kad ___ posao, javi mi se.' (when you finish work — later today)",
            options: ['završavaš', 'završiš', 'završavao', 'završavati'],
            correct: 1,
            explanation:
              'A future time clause needs the perfective present: kad završiš. završavaš would describe finishing as a process.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Verb Aspect — Complete!',
        points: [
          'Every Croatian verb has two aspect versions: imperfective and perfective',
          'Imperfective = process, habit, duration, repetition (čitati, pisati)',
          'Perfective = completion, result, single event (pročitati, napisati)',
          'Many perfectives are formed with a prefix: pisati → na-pisati',
          'Some pairs are different words: dolaziti (imperf.) / doći (perf.)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 6: Clitic Pronouns & Word Order
  // ─────────────────────────────────────────────────────────
  {
    id: 'clitics',
    title: 'Clitic Pronouns & Word Order',
    subtitle: 'The second-position rule and the clitic chain',
    icon: '🔗',
    level: 'B2',
    duration: '~8 min',
    color: '#6d28d9',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Clitics — The Hardest Part of Croatian',
        body: 'Croatian has a set of short, unstressed words called clitics (klitike) that must appear in a specific position in the sentence — always second — and always in a fixed internal order when multiple clitics cluster together. Native speakers use these automatically; learners find this the single hardest feature of Croatian.',
        icon: '🔗',
      },
      {
        type: 'rule',
        title: 'What Are Clitics?',
        body: "Clitics are short, unstressed forms of pronouns and the verb 'biti'. They cannot stand alone — they need to lean on surrounding words. Croatian clitics include: biti forms (sam, si, je, smo, ste, su), dative pronouns (mi, ti, mu, joj, nam, vam, im), accusative pronouns (me, te, ga, je, nas, vas, ih), and the reflexive se.",
        highlight: 'short, unstressed, second position',
      },
      {
        type: 'rule',
        title: 'The Second-Position Rule',
        body: 'Clitics must come SECOND in the clause — after the first stressed phrase (not necessarily the first word). The first phrase can be any constituent: a noun, a pronoun, an adverb, a prepositional phrase. Everything after that first phrase: clitics come immediately.',
        highlight: 'clitics go SECOND',
      },
      {
        type: 'rule',
        title: 'First Phrase, Not First Word',
        body: "This is the key subtlety: 'second position' means after the first PHRASE, not the first word. 'Moj brat' is one phrase — two words but one unit. So: 'Moj brat ga je vidio' (My brother saw him) — 'Moj brat' is the first phrase, then 'ga je' are the clitics in position two.",
        highlight: 'after the first phrase',
      },
      {
        type: 'table',
        title: 'The Clitic Chain — Fixed Order',
        headers: ['Position', 'Clitics'],
        rows: [
          ['1', 'bi (conditional auxiliary)'],
          ['2', 'sam, si, je, smo, ste, su (biti — past-tense auxiliary)'],
          ['3', 'mi, ti, mu, joj, nam, vam, im (dative pronouns)'],
          ['4', 'me, te, ga, je, nas, vas, ih (accusative pronouns)'],
          ['5', 'se (reflexive)'],
        ],
      },
      {
        type: 'rule',
        title: 'The Chain in Practice',
        body: "When multiple clitics appear together, they must follow the 5-slot order. You never say 'ga sam mu' — you must say 'sam mu ga' (biti → dative → accusative). The chain 'sam mu ga' is perfectly grammatical; reversing any element is not. Most sentences use only 2-3 clitics at once.",
        highlight: 'sam mu ga — never ga sam mu',
      },
      {
        type: 'example',
        title: 'Clitic Chains — Correct Placement',
        items: [
          {
            hr: 'Dao sam mu ga.',
            en: 'I gave it to him.',
            note: 'sam (biti) → mu (dative) → ga (accusative)',
          },
          {
            hr: 'Večeras ću mu ga dati.',
            en: 'Tonight I will give it to him.',
            note: "First phrase = 'Večeras', clitics follow immediately",
          },
          {
            hr: 'Sjećam se toga.',
            en: 'I remember that.',
            note: 'se is reflexive — always after biti clitics',
          },
          {
            hr: 'Nije mi ga dala.',
            en: "She didn't give it to me.",
            note: 'Negation: nije + mi + ga',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Negation and Clitics',
        body: "With negation, the negative form of 'biti' replaces the clitic 'biti' form. 'Je' becomes 'nije'. The other clitics stay in their positions after it: 'Nije mi ga rekao' (He didn't tell it to me). Notice: nije is stressed and is NOT a clitic — it is a full word, so it can appear in position one if needed.",
        highlight: 'nije replaces je in negation',
      },
      {
        type: 'rule',
        title: 'Questions and Clitics',
        body: "In questions with 'li', the pattern shifts. 'Je li ti rekao?' (Did he tell you?) — 'Je' stays at the front when followed by 'li'. This is an exception to the second-position rule. In questions with question words (što, gdje, kada), normal second-position applies: 'Što ti je rekao?' (What did he tell you?).",
        highlight: 'je li — special question pattern',
      },
      {
        type: 'example',
        title: 'More Clitic Examples',
        items: [
          {
            hr: 'Rekao mi je.',
            en: 'He told me.',
            note: "'Je' (3rd sg only) may appear sentence-finally after other clitics — 'Rekao mi je' is standard. Other biti forms (sam/si/smo/ste/su) always precede dative: 'Dao sam ti ga'",
          },
          {
            hr: 'Ona mi se sviđa.',
            en: 'I like her. (lit. She pleases me)',
            note: 'mi (dative) → se (reflexive) — in that order',
          },
          {
            hr: 'Kupio sam ga.',
            en: 'I bought it.',
            note: 'sam (biti position 2) → ga (accusative position 4)',
          },
          {
            hr: 'Jeste li ga vidjeli?',
            en: 'Did you (all) see him?',
            note: 'li follows the biti clitic in yes/no questions',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Moja mi je sestra jučer poslala fotografije s mora.',
            en: 'My sister sent me photos from the seaside yesterday.',
            note: 'mi je splits the phrase moja sestra — after the first stressed word',
          },
          {
            hr: 'Zar ti ga nisu vratili?',
            en: 'Did they not give it back to you?',
            note: 'ti (dat.) → ga (acc.); nisu is stressed, not a clitic',
          },
          {
            hr: 'Sjećaš li se onog restorana u Trogiru?',
            en: 'Do you remember that restaurant in Trogir?',
            note: 'li precedes se; sjećati se + genitive',
          },
          {
            hr: 'Rekli su mi da će mi ga poslati poštom.',
            en: 'They told me they would send it to me by post.',
            note: 'će → mi → ga in the subordinate clause',
          },
          {
            hr: 'Kupila bih ti je, ali nema je više.',
            en: 'I would buy it (f.) for you, but there is none left.',
            note: 'bih → ti → je (acc.)',
          },
          {
            hr: 'Ne sviđa mi se ta ideja.',
            en: 'I do not like that idea.',
            note: 'ne + verb comes first; mi → se follow',
          },
          {
            hr: 'Ona mu se javila tek navečer.',
            en: 'She only got in touch with him in the evening.',
            note: 'mu (dat.) → se; the auxiliary je is dropped after se in the 3rd person',
          },
        ],
      },
      {
        type: 'quiz',
        q: "In the sentence 'I gave it to him' (Dao ___ ___ ___ .), what is the correct clitic order?",
        options: ['ga mu sam', 'sam ga mu', 'sam mu ga', 'mu ga sam'],
        correct: 2,
        explanation:
          "The correct order is 'sam mu ga': biti forms (sam) come first in the chain, then dative pronouns (mu = to him), then accusative pronouns (ga = it). 'Dao sam mu ga.' The chain order is fixed: bi → biti → dative → accusative → se.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers put the clitics where English pronouns go, after the verb: 'Dao ga je mi' — the cluster is fixed, dative before accusative: 'Dao mi ga je'. Second, they anchor on the first word and keep the auxiliary ahead of the pronoun: 'Moj brat je mi rekao' — the auxiliary precedes the dative only when it is sam/si/smo/ste/su; with je the order is 'Moj brat mi je rekao', or the cluster may split the phrase, 'Moj mi je brat rekao'. Third, the auxiliary 'je' is kept after 'se': 'Nasmijala se je' — in the third person 'je' disappears after se, 'Nasmijala se'.",
        highlight: "in the third person 'je' disappears after se",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Marko ___ knjigu.' (gave me the book — dative mi, auxiliary je)",
            options: ['je mi dao', 'dao je mi', 'mi dao je', 'mi je dao'],
            correct: 3,
            explanation:
              'The cluster mi je sits right after Marko, the dative before je: Marko mi je dao knjigu.',
          },
          {
            q: "Complete: 'Ona ___.' (She laughed — nasmijati se, third person)",
            options: ['se je nasmijala', 'je nasmijala se', 'se nasmijala', 'nasmijala se je'],
            correct: 2,
            explanation:
              'In the third person the auxiliary je is dropped after se: Ona se nasmijala.',
          },
          {
            q: 'Which sentence has correct clitic order?',
            options: [
              'Rekao ga sam ti.',
              'Rekao sam ti ga.',
              'Rekao ti ga sam.',
              'Sam ti ga rekao.',
            ],
            correct: 1,
            explanation:
              'sam → ti (dative) → ga (accusative): Rekao sam ti ga. The auxiliary sam precedes the pronouns and cannot open the sentence.',
          },
          {
            q: "Spot the error: 'Dao je mi ga jučer.'",
            options: [
              'je should come after mi and ga: Dao mi ga je jučer',
              'ga should be njega',
              'dao should be dali',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'The third-person je goes last in the cluster, after the pronouns: mi ga je.',
          },
          {
            q: "Why is 'Sjećam se toga' correct but 'Se sjećam toga' not?",
            options: [
              'se must be second — it cannot open a sentence',
              'se must be last',
              'sjećati does not take se',
              'toga should be to',
            ],
            correct: 0,
            explanation:
              'se is a clitic and needs a stressed word before it. sjećati se is reflexive and takes the genitive toga.',
          },
          {
            q: "In 'Je li ti ga vratio?', what is the order of the two pronoun clitics after 'li'?",
            options: [
              'accusative, dative',
              'dative, accusative',
              'auxiliary, dative',
              'reflexive, dative',
            ],
            correct: 1,
            explanation:
              'Dative ti precedes accusative ga — the fixed slot order — even in a je li question.',
          },
          {
            q: "Complete: 'Ne ___ ta glazba.' (I don't like that music — sviđati se)",
            options: ['se mi sviđa', 'mi se sviđa', 'sviđa mi se', 'sviđa se mi'],
            correct: 2,
            explanation:
              'ne + verb forms the first stressed unit, then the clitics mi se: Ne sviđa mi se. Dative before reflexive.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Clitic Pronouns — Complete!',
        points: [
          'Clitics are short unstressed words that must appear in second position',
          'Second position means after the first PHRASE (not just first word)',
          'The chain order is fixed: bi → sam/si/je → dative (mu/mi) → accusative (ga/me) → se',
          "Negation: 'nije' replaces 'je'; other clitics keep their positions",
          "Questions: 'Je li' is a special pattern; question-word questions use normal order",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 7: Kondicionalni način (Conditional Mood)
  // ─────────────────────────────────────────────────────────
  {
    id: 'conditional',
    title: 'Kondicionalni način',
    subtitle: 'Conditional mood — wishes, hypotheticals, and polite requests',
    icon: '🔮',
    level: 'B2',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The Conditional Mood',
        body: "The conditional mood expresses wishes, hypotheticals, and polite requests. It uses the auxiliary 'bi' + past active participle.",
        icon: '🔮',
      },
      {
        type: 'table',
        title: 'Formation — bi + Participle',
        headers: ['Person', 'Masculine', 'Feminine'],
        rows: [
          ['ja (I)', 'ja bih radio', 'ja bih radila'],
          ['ti (you sg.)', 'ti bi radio', 'ti bi radila'],
          ['on/ona (he/she)', 'on/ona bi radio/radila', 'on/ona bi radio/radila'],
          ['mi (we)', 'mi bismo radili', 'mi bismo radile'],
          ['vi (you pl.)', 'vi biste radili', 'vi biste radile'],
          ['oni/one (they)', 'oni/one bi radili', 'oni/one bi radile'],
        ],
      },
      {
        type: 'rule',
        title: 'Three Core Uses',
        body: "The conditional has three main uses: (1) Hypotheticals — 'Kad bih imao vremena, učio bih više.' (If I had time, I would study more.) (2) Polite requests — 'Biste li mi mogli pomoći?' (Could you help me?) (3) Wishes — 'Volio bih posjetiti Dubrovnik.' (I would love to visit Dubrovnik.)",
        highlight: 'hypotheticals, requests, wishes',
      },
      {
        type: 'rule',
        title: 'Past Conditional — bio/bila + bi',
        body: "The past conditional expresses what would have happened but didn't. It adds 'bio/bila' (past of biti) before the main participle: 'Bio bih došao, ali nisam mogao.' (I would have come, but I couldn't.) The 'bio/bila' agrees in gender with the subject.",
        highlight: 'bio bih + participle',
      },
      {
        type: 'example',
        title: 'Conditional in Context',
        items: [
          {
            hr: 'Htio/Htjela bih kavu, molim.',
            en: 'I would like a coffee, please.',
            note: 'Most natural polite way to order',
          },
          {
            hr: 'Biste li mogli govoriti sporije?',
            en: 'Could you speak more slowly?',
            note: 'Polite request with biste li',
          },
          {
            hr: 'Kad bih živio u Zagrebu, svaki dan bih šetao Gornjim gradom.',
            en: 'If I lived in Zagreb, I would walk Upper Town every day.',
            note: 'Hypothetical present condition',
          },
          {
            hr: 'Bila bih kupila kartu, ali nije ih bilo.',
            en: 'I would have bought a ticket, but there were none.',
            note: 'Past conditional — feminine subject',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Da imam više vremena, naučio bih svirati gitaru.',
            en: 'If I had more time, I would learn to play the guitar.',
            note: 'da + present, then bih + participle',
          },
          {
            hr: 'Biste li mi mogli preporučiti dobar restoran?',
            en: 'Could you recommend me a good restaurant?',
            note: 'biste li — formal request',
          },
          {
            hr: 'Radije bih ostala kod kuće nego išla na zabavu.',
            en: 'I would rather stay at home than go to the party.',
            note: 'radije bih … nego — preference',
          },
          {
            hr: 'Kad bismo krenuli ranije, stigli bismo prije mraka.',
            en: 'If we set off earlier, we would arrive before dark.',
            note: 'kad + bismo in both clauses',
          },
          {
            hr: 'Trebao bi više spavati, izgledaš umorno.',
            en: 'You should sleep more, you look tired.',
            note: 'trebao bi — softened advice',
          },
          {
            hr: 'Bio bih vam zahvalan na brzom odgovoru.',
            en: 'I would be grateful to you for a quick reply.',
            note: 'formal letter formula: bio bih zahvalan',
          },
          {
            hr: 'Da si me nazvao, došla bih po tebe.',
            en: 'If you had called me, I would have come to get you.',
            note: 'da + past for an unreal past condition',
          },
        ],
      },
      {
        type: 'quiz',
        q: "How do you say 'I would like a coffee' politely?",
        options: ['Htio/Htjela bih kavu, molim.', 'Ja hoću kavu.', 'Mogu kavu.', 'Kava, molim.'],
        correct: 0,
        explanation:
          "'Htio/Htjela bih kavu, molim.' uses the conditional 'bih' with the participle 'htio/htjela' — this is the standard polite way to order or request in Croatian. 'Ja hoću kavu' is too blunt. 'Mogu kavu' is ungrammatical in this context.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "In careful speech and writing the conditional auxiliary changes by person — the forms are bih, bi, bi, bismo, biste, bi — so 'ja bih došao' and 'mi bismo došli', not a flat 'bi' for everyone. Second, English 'would' gets a future: 'Htio ću kavu' — a polite wish is the conditional, 'Htio bih kavu'. Third, 'bih' is put first: 'Bih htio rezervirati' — it is a clitic and cannot open the sentence: 'Htio bih rezervirati'.",
        highlight: 'the forms are bih, bi, bi, bismo, biste, bi',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "In formal writing, complete: 'Mi ___ rado došli.' (we would gladly come)",
            options: ['bi', 'bih', 'bismo', 'biste'],
            correct: 2,
            explanation:
              'mi takes bismo. bih is ja, biste is vi; bi belongs to ti and the third person.',
          },
          {
            q: "Complete: '___ kavu, molim.' (I would like a coffee — a woman speaking)",
            options: ['Htio bih', 'Htjela bih', 'Hoću', 'Htjela ću'],
            correct: 1,
            explanation:
              'The participle agrees with the speaker: htjela bih. Hoću is a blunt statement; htjela ću mixes past and future.',
          },
          {
            q: 'Which sentence is a correct hypothetical?',
            options: [
              'Kad bih imao novca, kupio bih kuću.',
              'Kad bih imao novca, kupim kuću.',
              'Kad imam novca, kupio bih kuću.',
              'Kad bih imati novca, kupio bih kuću.',
            ],
            correct: 0,
            explanation:
              'Both halves take the conditional: kad bih imao …, kupio bih. A present in either half breaks the hypothetical, and bih needs a participle, not an infinitive.',
          },
          {
            q: "Spot the error: 'Bih htio rezervirati stol za dvoje.'",
            options: [
              'bih cannot open the sentence — Htio bih rezervirati',
              'rezervirati should be rezerviram',
              'dvoje should be dva',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'bih is a clitic and must follow the first stressed word: Htio bih. za dvoje is right for a table for two.',
          },
          {
            q: "What is the difference between 'Hoću kavu' and 'Htio bih kavu'?",
            options: [
              'none',
              'the first is a blunt statement of want; the second is a polite request',
              'the second is past tense',
              'the first is formal',
            ],
            correct: 1,
            explanation:
              'The conditional softens a wish into a request, which is why it is how you order in a café.',
          },
          {
            q: "Complete: 'Da si učio, ___ ispit.' (you would have passed)",
            options: ['položio bi', 'položio bih', 'položiš', 'položit ćeš'],
            correct: 0,
            explanation:
              'ti takes bi: položio bi. bih is the ja form; the present and future do not express an unreal past outcome.',
          },
          {
            q: "Complete: '___ li mi pomoći?' (Could you — formal — help me?)",
            options: ['Bi', 'Biste', 'Bih', 'Bismo'],
            correct: 1,
            explanation:
              'The formal Vi takes biste: Biste li mi mogli pomoći? Bi would be informal ti.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Conditional Mood — Complete!',
        points: [
          'Conditional = bi + past active participle (radio/radila)',
          'Forms: ja bih, ti bi, on/ona bi, mi bismo, vi biste, oni/one bi',
          "Use 1 — hypotheticals: 'Kad bih imao vremena, učio bih više.'",
          "Use 2 — polite requests: 'Biste li mi mogli pomoći?'",
          "Use 3 — wishes: 'Volio bih posjetiti Dubrovnik.'",
          "Past conditional adds bio/bila: 'Bio bih došao, ali nisam mogao.'",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 8: Složene rečenice (Complex Sentences)
  // ─────────────────────────────────────────────────────────
  {
    id: 'complex-sentences',
    title: 'Složene rečenice',
    subtitle: 'Complex sentences — subordinating conjunctions and relative clauses',
    icon: '🔗',
    level: 'B2',
    duration: '~8 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Complex Sentences',
        body: 'Complex sentences connect ideas using subordinating conjunctions. Mastering these moves you from basic communication to natural conversation.',
        icon: '🔗',
      },
      {
        type: 'rule',
        title: 'Temporal Clauses — When, While, As Soon As',
        body: "Key temporal conjunctions: kad/kada (when), dok (while), čim (as soon as), prije nego što (before), nakon što (after). Examples: 'Kad dođeš, nazovi me.' (When you arrive, call me.) 'Dok sam učio, slušao sam glazbu.' (While I was studying, I was listening to music.) 'Čim završim, idem.' (As soon as I finish, I'm going.) Key rule: use a perfective verb after 'kad' for future events.",
        highlight: "perfective after 'kad' for future",
      },
      {
        type: 'table',
        title: 'Temporal Conjunctions',
        headers: ['Croatian', 'English', 'Example'],
        rows: [
          ['kad / kada', 'when', 'Kad dođeš, nazovi me.'],
          ['dok', 'while', 'Dok sam učio, slušao sam glazbu.'],
          ['čim', 'as soon as', 'Čim završim, idem.'],
          ['prije nego što', 'before', 'Jedi prije nego što odeš.'],
          ['nakon što', 'after', 'Nakon što sam jeo, odmarao sam.'],
        ],
      },
      {
        type: 'rule',
        title: 'Causal and Concessive Clauses',
        body: "jer (because), iako (although), premda (even though), budući da (since/given that). Examples: 'Učim hrvatski jer volim Hrvatsku.' (I study Croatian because I love Croatia.) 'Iako je teško, ne odustajem.' (Although it's hard, I'm not giving up.) 'Budući da imaš iskustva, možeš voditi tim.' (Since you have experience, you can lead the team.)",
        highlight: 'jer, iako, premda, budući da',
      },
      {
        type: 'rule',
        title: 'Relative Clauses — koji/koja/koje',
        body: "Relative clauses use koji (who/which/that). Koji must agree in gender with the noun it refers to (its antecedent): 'Čovjek koji govori hrvatski.' (The man who speaks Croatian — koji = masculine.) 'Žena koja govori hrvatski.' (The woman who speaks Croatian — koja = feminine.) 'Dijete koje govori hrvatski.' (The child who speaks Croatian — koje = neuter.) Koji also declines for case within the relative clause.",
        highlight: 'koji agrees in gender with antecedent',
      },
      {
        type: 'rule',
        title: 'Indirect Speech — da + Present/Past',
        body: "Indirect speech uses 'da' + the appropriate tense: 'Rekao je da uči hrvatski.' (He said that he is studying Croatian.) 'Mislim da je to točno.' (I think that's correct.) Common pitfall: do NOT use 'što' where 'da' is needed. 'Rekao je da dolazi.' ✓ 'Rekao je što dolazi.' ✗ — 'što' in this position means 'what', creating a different meaning.",
        highlight: 'da for indirect speech — not što',
      },
      {
        type: 'example',
        title: 'Complex Sentences in Context',
        items: [
          {
            hr: 'Kad završiš posao, dođi k meni.',
            en: 'When you finish work, come to me.',
            note: "Perfective 'završiš' — completion triggers the main clause",
          },
          {
            hr: 'Iako nisam Hrvat, govorim jezik.',
            en: "Although I'm not Croatian, I speak the language.",
            note: 'Concessive iako — surprising contrast',
          },
          {
            hr: 'Knjiga koju čitam je odlična.',
            en: "The book that I'm reading is excellent.",
            note: 'koju = accusative of koja (fem.) — relative clause with case',
          },
          {
            hr: 'Rekli su da će doći.',
            en: 'They said they would come.',
            note: 'da + future — indirect speech',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Čim sam ušao u kuću, osjetio sam miris kolača.',
            en: 'As soon as I came into the house, I smelled cake.',
            note: 'čim + perfective; comma after the fronted clause',
          },
          {
            hr: 'Susjed koji živi ispod nas svira klavir svake večeri.',
            en: 'The neighbour who lives below us plays the piano every evening.',
            note: 'koji — masculine, refers to susjed',
          },
          {
            hr: 'Nisam došla jer mi je auto bio u kvaru.',
            en: 'I did not come because my car had broken down.',
            note: 'jer + clause; the clitics mi je sit second in their own clause',
          },
          {
            hr: 'Rekla je da će doći kad završi posao.',
            en: 'She said she would come when she finishes work.',
            note: 'da + future; kad + perfective present',
          },
          {
            hr: 'Ne znam kako se zove ulica u kojoj stanuješ.',
            en: 'I do not know what the street you live in is called.',
            note: 'u kojoj — koja declined after a preposition',
          },
          {
            hr: 'Iako pada kiša, idemo na izlet.',
            en: 'Although it is raining, we are going on the trip.',
            note: 'iako — concession',
          },
          {
            hr: 'Pitala me jesam li vidio njezin mobitel.',
            en: 'She asked me whether I had seen her phone.',
            note: 'a reported yes/no question uses the li form',
          },
        ],
      },
      {
        type: 'quiz',
        q: "Complete: 'Volio bih posjetiti Dubrovnik, ___ sam čuo da je predivno.'",
        options: ['jer', 'iako', 'čim', 'dok'],
        correct: 0,
        explanation:
          "'jer' (because) is correct — 'Volio bih posjetiti Dubrovnik, jer sam čuo da je predivno.' (I would love to visit Dubrovnik, because I've heard it's beautiful.) 'iako' would mean 'although', which contradicts the positive intent. 'čim' means 'as soon as' and 'dok' means 'while' — neither fits here.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers reach for 'što' as 'that': 'Mislim što je kasno' — the complement is 'da', 'Mislim da je kasno'; 'što' means 'what'. Second, the relative pronoun is left in the nominative: 'čovjek koji sam vidio' — koji takes the case of its role in its own clause, 'čovjek kojeg sam vidio'. Third, tense is shifted as in English reported speech: 'Rekao je da je bio umoran' for 'he said he was tired' — Croatian keeps the original tense, 'Rekao je da je umoran'.",
        highlight: 'Croatian keeps the original tense',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Mislim ___ imaš pravo.'",
            options: ['što', 'jer', 'koji', 'da'],
            correct: 3,
            explanation:
              "The complement 'that' is da. što would mean what, jer because, koji which.",
          },
          {
            q: "Complete: 'Žena ___ sam upoznao jučer je liječnica.' (whom I met)",
            options: ['koja', 'koju', 'kojoj', 'kojom'],
            correct: 1,
            explanation:
              'Inside the relative clause the woman is the object of upoznati, so koja takes the accusative: koju.',
          },
          {
            q: "Which sentence reports 'Umoran sam' correctly?",
            options: [
              'Rekao je da sam umoran.',
              'Rekao je da je bio umoran.',
              'Rekao je da je umoran.',
              'Rekao je što je umoran.',
            ],
            correct: 2,
            explanation:
              'The original present tense is kept: da je umoran. The person changes to third, the tense does not shift back.',
          },
          {
            q: "Spot the error: 'Kad ću doći, nazvat ću te.'",
            options: [
              'nazvat ću should be nazovem',
              'ću doći should be dođem — a time clause takes the perfective present, not the future',
              'kad should be čim',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'After kad, čim and dok referring to the future, Croatian uses the perfective present: Kad dođem, nazvat ću te.',
          },
          {
            q: 'Which conjunction gives a REASON?',
            options: ['jer', 'iako', 'čim', 'dok'],
            correct: 0,
            explanation: 'jer = because. iako is although, čim as soon as, dok while.',
          },
          {
            q: "Complete: 'Grad ___ živim je malen.' (in which I live)",
            options: ['koji', 'u koji', 'u kojem', 'kojeg'],
            correct: 2,
            explanation:
              'Living in a place is u + locative, and the relative pronoun follows: u kojem živim.',
          },
          {
            q: "In 'Rekli su mi da će doći', where do the clitics 'mi' and 'će' sit?",
            options: [
              'both after the verb',
              'each in second position of its own clause',
              'both at the start',
              'anywhere — order is free',
            ],
            correct: 1,
            explanation:
              'Each clause keeps its own second position: mi after Rekli su, će after da. Attaching a clause does not move the anchor.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Complex Sentences — Complete!',
        points: [
          'Temporal: kad/kada (when), dok (while), čim (as soon as), prije nego što (before), nakon što (after)',
          "Use perfective verb after 'kad' for future events: 'Kad dođeš...'",
          'Causal/concessive: jer (because), iako (although), premda (even though), budući da (since)',
          'Relative clauses: koji/koja/koje agrees in gender with its antecedent',
          "Indirect speech: da + tense — NOT 'što' where 'da' is needed",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON: Formalno obraćanje: Vi i ti
  // ─────────────────────────────────────────────────────────
  {
    id: 'vi-vs-ti',
    title: 'Formalno obraćanje: Vi i ti',
    subtitle: 'Formal and informal address — when to use which',
    icon: '🤝',
    level: 'A2',
    duration: '~4 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Vi i ti — Formal vs Informal Address',
        body: "Croatian, like most European languages, has two ways to say 'you': Vi (formal, capitalized) and ti (informal). Choosing correctly is one of the most important social skills in Croatian — more so than grammar. Getting it wrong with elders is a noticeable social misstep.",
        icon: '🤝',
      },
      {
        type: 'rule',
        title: 'When to Use Vi (Formal)',
        body: "Use Vi (always capitalized in writing) with: elders and grandparents you are meeting for the first time, your partner's parents until they explicitly invite you to use ti, strangers over roughly 40 in formal situations, teachers, doctors, and officials. Vi is the safe default — when in doubt, start here.",
        highlight: 'when in doubt, use Vi',
      },
      {
        type: 'rule',
        title: 'When to Use ti (Informal)',
        body: "Use ti with peers your own age, children, close friends and family, and anyone who has explicitly said 'možemo prijeći na ti' (we can switch to ti). Among younger Croatians (under ~30) and in casual settings, ti is often used right away — but with older acquaintances, always wait for the invitation.",
        highlight: 'wait for the invitation',
      },
      {
        type: 'table',
        title: 'Vi vs ti — Quick Reference',
        headers: ['Situation', 'Use'],
        rows: [
          ["Partner's parents, first meeting", 'Vi'],
          ['Elders / grandparents (strangers)', 'Vi'],
          ['Doctors, teachers, officials', 'Vi'],
          ['Strangers over ~40 (formal)', 'Vi'],
          ['Peers your age', 'ti'],
          ['Children', 'ti'],
          ['Close friends and family', 'ti'],
          ["After 'možemo prijeći na ti'", 'ti'],
        ],
      },
      {
        type: 'rule',
        title: 'The Switch Offer — Prijelaz na ti',
        body: "When someone says 'Možemo li prijeći na ti?' (Can we switch to ti?), always accept warmly. The natural reply is 'Naravno, s veseljem!' (Of course, with pleasure!) or 'Naravno, s radošću!' Refusing is considered awkward and cold. The offer itself signals you have been accepted.",
        highlight: 'always accept warmly',
      },
      {
        type: 'example',
        title: 'Vi vs ti in Sentences',
        items: [
          {
            hr: 'Kako ste Vi?',
            en: 'How are you? (formal)',
            note: 'Vi — formal singular or plural',
          },
          { hr: 'Kako si ti?', en: 'How are you? (informal)', note: 'ti — informal, with a peer' },
          {
            hr: 'Možete li mi pomoći?',
            en: 'Can you help me? (formal)',
            note: 'Možete — Vi verb form',
          },
          {
            hr: 'Možeš li mi pomoći?',
            en: 'Can you help me? (informal)',
            note: 'Možeš — ti verb form',
          },
          {
            hr: 'Možemo li prijeći na ti?',
            en: 'Can we switch to ti?',
            note: 'The classic switch offer',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Gospodine Babiću, možete li mi pomoći?',
            en: 'Mr Babić, could you help me?',
            note: 'Vi-form možete + vocative Babiću — polite to a stranger',
          },
          {
            hr: 'Ivana, možeš li mi dodati sol?',
            en: 'Ivana, can you pass me the salt?',
            note: 'ti-form možeš with a friend at the table',
          },
          {
            hr: 'Izvolite, sjednite, molim Vas.',
            en: 'Please, do take a seat.',
            note: 'Vi imperative sjednite; molim Vas — formal but warm',
          },
          {
            hr: 'Bako, jesi li umorna?',
            en: 'Grandma, are you tired?',
            note: 'your own grandmother is ti — family is informal',
          },
          {
            hr: 'Doktore, koliko dugo moram uzimati lijek?',
            en: 'Doctor, how long do I have to take the medicine?',
            note: 'the doctor is addressed as Vi; doktore is the vocative',
          },
          {
            hr: 'Možemo na ti? — Naravno, ja sam Petra.',
            en: 'Shall we switch to ti? — Of course, I am Petra.',
            note: 'accepting the switch and offering a first name',
          },
          {
            hr: 'Hvala Vam na pomoći, gospođo.',
            en: 'Thank you for your help, madam.',
            note: 'hvala Vam + na + locative',
          },
          {
            hr: 'Hvala ti, stari, spasio si me!',
            en: 'Thanks, mate, you saved me!',
            note: 'ti-form and a nickname — close friends only',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Cultural Note — Why This Matters',
        body: "Croatians notice when foreigners use Vi correctly with elders — it earns immediate respect. Using ti too early with someone's grandmother or with a doctor signals carelessness. Most Croatians will gently correct you if ti is appropriate, but switching to ti too soon with elders is harder to recover from. The effort to use Vi shows cultural awareness.",
        highlight: 'Croatians will correct you kindly',
      },
      {
        type: 'quiz',
        q: "You are meeting your Croatian partner's mother for the first time. Which form do you use?",
        options: [
          'ti — to seem friendly',
          'Vi — she is an elder you are meeting formally',
          'Either is fine',
          'Use first name only',
        ],
        correct: 1,
        explanation:
          "Always start with Vi when meeting a partner's parents. Wait until they explicitly offer to switch to ti. Starting with ti signals a lack of respect for Croatian social norms, even if you mean to be warm.",
      },
      {
        type: 'quiz',
        q: "A Croatian peer says: 'Možemo li prijeći na ti?' What do you do?",
        options: [
          'Politely decline to keep it formal',
          "Accept warmly — 'Naravno, s veseljem!'",
          'Ignore it and keep using Vi',
          'Ask why they want to switch',
        ],
        correct: 1,
        explanation:
          'When someone offers to switch to ti, always accept warmly. The offer is a sign of welcome and acceptance. Refusing is considered awkward and cold in Croatian culture.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners translate 'you' as 'ti' everywhere and address a shopkeeper or a doctor with 'možeš' — a stranger in a service or official setting is Vi: 'možete', 'izvolite'. The opposite error is keeping Vi after a friend has said 'možemo na ti' — that reads as distance, not politeness. Third, in writing the polite form is capitalised: 'Hvala Vam', 'Molim Vas' in a message to one person; lower-case 'vi' means several people.",
        highlight: 'that reads as distance, not politeness',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "You ask a police officer for directions. Complete: '___ li mi reći gdje je pošta?'",
            options: ['Možeš', 'Možete', 'Može', 'Možemo'],
            correct: 1,
            explanation:
              'An official you do not know is Vi, so the verb is možete. možeš is the ti-form; može and možemo change the person entirely.',
          },
          {
            q: "A friend's little brother asks how you are. Complete: 'Dobro, a ___?'",
            options: ['ti', 'Vi', 'vi', 'ste'],
            correct: 0,
            explanation:
              "Children are always ti. 'A ti?' returns the question at the same level; Vi to a child sounds like a joke.",
          },
          {
            q: "Which is the right register for a first meeting with your partner's father?",
            options: [
              'Bog, kako si? Ja sam Tom.',
              'Dobar dan, drago mi je. Ja sam Tom.',
              'Hej, ti si tata? Ja sam Tom.',
              'Ćao, kako ide?',
            ],
            correct: 1,
            explanation:
              "A partner's parent is Vi until invited otherwise: a time-of-day greeting, drago mi je, your name. The others are ti-register openers.",
          },
          {
            q: "Spot the problem: a colleague said 'Možemo na ti' last week, yet you still write 'Poštovani, možete li mi poslati izvještaj?'",
            options: [
              'nothing — Vi is always the safest choice',
              'keeping Vi after the invitation signals distance; switch to ti',
              'izvještaj should be izvještaja',
              'Poštovani is only for strangers',
            ],
            correct: 1,
            explanation:
              'Once someone has offered ti, staying on Vi reads as coldness rather than respect. Accept the switch and keep it.',
          },
          {
            q: "What does a capital 'Vi' in a written message signal?",
            options: [
              'plural you — several people',
              'shouting',
              'polite address to one person',
              'a typo',
            ],
            correct: 2,
            explanation:
              'Capital Vi is the written mark of polite address to one person. Several people are lower-case vi.',
          },
          {
            q: "Complete: 'Gospođo Marić, hvala ___ na pomoći.'",
            options: ['ti', 'Vi', 'tebi', 'Vam'],
            correct: 3,
            explanation:
              "hvala takes the dative; the polite dative is Vam. 'Vi' is nominative, and ti/tebi are the informal forms.",
          },
          {
            q: 'Which verb form goes with Vi, even when speaking to one person?',
            options: ['si', 'ste', 'je', 'su'],
            correct: 1,
            explanation:
              "Vi is grammatically plural, so it always takes ste: 'Vi ste umorni'. si belongs to ti.",
          },
        ],
      },
      {
        type: 'summary',
        title: 'Formalno obraćanje — Complete!',
        points: [
          "Vi (capitalized) = formal: elders, officials, partner's parents, strangers over ~40",
          'ti = informal: peers, children, friends, family',
          'When in doubt, use Vi — Croatians will invite you to switch if ti is appropriate',
          "When offered 'Možemo li prijeći na ti?' always accept warmly",
          'Getting Vi right with elders earns immediate respect as a foreigner',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON: Croatian Past Tense (A2)
  // ─────────────────────────────────────────────────────────
  {
    id: 'past-tense',
    title: 'Croatian Past Tense',
    subtitle: 'Talk about yesterday — the L-participle + auxiliary system',
    icon: '⏮️',
    level: 'A2',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Past Tense',
        body: "The Croatian past tense has two moving parts: (1) a past participle that changes based on the subject's gender, and (2) a short form of 'biti' (to be) as an auxiliary. The logic is consistent — once you learn the pattern, it applies to every verb. You cannot speak Croatian without this.",
        icon: '⏮️',
      },
      {
        type: 'rule',
        title: 'The Two Parts: Participle + Auxiliary',
        body: "Past tense = L-PARTICIPLE + AUXILIARY (sam/si/je/smo/ste/su). The L-participle is named for its masculine singular ending in '-o' or '-ao/-io'. The auxiliary 'je' is clitic — in standard word order the participle comes first: 'Radio sam' (I worked), not 'Sam radio'.",
        highlight: 'participle + sam/si/je/smo/ste/su',
      },
      {
        type: 'rule',
        title: 'Gender Endings of the L-Participle',
        body: "The participle agrees with the SUBJECT in gender and number. Masculine singular: -o / -ao / -io (radio, išao, bio). Feminine singular: -la / -ala / -ila (radila, išla, bila). Masculine/mixed plural: -li (radili, išli, bili). All-female plural: -le (radile, išle, bile). The 'li' form is default for mixed or unknown groups.",
        highlight: '-o (m.sg) · -la (f.sg) · -li (m.pl) · -le (f.pl)',
      },
      {
        type: 'table',
        title: "'Raditi' (to work) — Full Past Tense",
        headers: ['Person', 'Masculine', 'Feminine'],
        rows: [
          ['ja (I)', 'radio sam', 'radila sam'],
          ['ti (you)', 'radio si', 'radila si'],
          ['on (he)', 'radio je', '—'],
          ['ona (she)', '—', 'radila je'],
          ['mi (we)', 'radili smo', 'radile smo'],
          ['vi (you pl.)', 'radili ste', 'radile ste'],
          ['oni (they m.)', 'radili su', '—'],
          ['one (they f.)', '—', 'radile su'],
        ],
      },
      {
        type: 'example',
        title: 'Core Verbs — Past Tense',
        items: [
          {
            hr: 'Išao sam u Zagreb.',
            en: 'I (m) went to Zagreb.',
            note: 'ići → išao (m) / išla (f) — irregular',
          },
          { hr: 'Jela je pizzu.', en: 'She ate pizza.', note: 'jesti → jeo (m) / jela (f)' },
          { hr: 'Bili smo kod kuće.', en: 'We were at home.', note: 'biti → bio/bila/bili/bile' },
          {
            hr: 'Govorili su hrvatski.',
            en: 'They (m.) spoke Croatian.',
            note: 'govoriti → govorio/govorila/govorili/govorile',
          },
          {
            hr: 'Mogla je doći.',
            en: 'She was able to come.',
            note: 'moći → mogao (m) / mogla (f) — irregular',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Jučer sam kuhala ručak za cijelu obitelj.',
            en: 'Yesterday I (f.) cooked lunch for the whole family.',
            note: 'kuhala — female speaker; sam in second position',
          },
          {
            hr: 'Vlak je kasnio dvadeset minuta.',
            en: 'The train was twenty minutes late.',
            note: 'kasnio — masculine, agreeing with vlak',
          },
          {
            hr: 'Gdje ste bili na odmoru? — Bili smo u Istri.',
            en: 'Where were you on holiday? — We were in Istria.',
            note: 'bili ste / bili smo — plural forms',
          },
          {
            hr: 'Nismo vidjeli taj film.',
            en: 'We did not see that film.',
            note: 'nismo + participle; the negative auxiliary comes first',
          },
          {
            hr: 'Moje sestre su studirale u Zadru.',
            en: 'My sisters studied in Zadar.',
            note: 'studirale — all-female plural -le',
          },
          {
            hr: 'Kad si došao kući?',
            en: 'When did you (m.) come home?',
            note: 'došao — irregular participle of doći',
          },
          {
            hr: 'Nisam mogla spavati zbog vrućine.',
            en: 'I (f.) could not sleep because of the heat.',
            note: 'mogla — feminine of mogao',
          },
          {
            hr: 'Tko je pojeo zadnji komad kolača?',
            en: 'Who ate the last piece of cake?',
            note: 'tko takes the masculine singular: pojeo',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Negative Past: Nisam / Nije / Nisu',
        body: "To negate the past tense, replace the positive auxiliary with its negative: nisam, nisi, nije, nismo, niste, nisu. The participle is unchanged. Standard word order: negative auxiliary AFTER the participle. 'Nisam radio' (I didn't work). 'Ona nije išla' (She didn't go). 'Nisu mogli doći' (They couldn't come).",
        highlight: 'nisam · nisi · nije · nismo · niste · nisu',
      },
      {
        type: 'rule',
        title: 'The Two Key Irregulars: ići and biti',
        body: "'Ići' (to go): past participle išao (m.sg), išla (f.sg), išli (m.pl), išle (f.pl). The 'š' appears in the past but not in the infinitive — memorize it separately. 'Biti' (to be): bio (m.sg), bila (f.sg), bili (m.pl), bile (f.pl). These two verbs appear in almost every Croatian sentence — learn them first.",
        highlight: 'ići → išao/išla | biti → bio/bila',
      },
      {
        type: 'quiz',
        q: "'She worked yesterday' — which is correct?",
        options: ['Radila je jučer.', 'Radio je jučer.', 'Radili smo jučer.', 'Radila sam jučer.'],
        correct: 0,
        explanation:
          "The subject is 'she' (ona) — feminine singular. Participle: 'radila' (f.sg). Auxiliary: 'je' (3rd person singular). Standard word order: 'Radila je jučer.' Answer B uses the masculine 'radio', C is 'we worked', D is 'I (f.) worked'.",
      },
      {
        type: 'quiz',
        q: "How do you say 'They (m.) didn't eat'?",
        options: ['Nisu jeli.', 'Nisu jele.', 'Nisu jeo.', 'Nisu jela.'],
        correct: 0,
        explanation:
          "'Nisu' = 3rd person plural negative auxiliary. 'Jeli' = masculine/mixed plural L-participle of 'jesti' (to eat). Together: 'Nisu jeli.' — 'They (m./mixed) didn't eat.' 'Jele' would be all-female group. 'Jeo/jela' are singular forms.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers keep one participle for everyone: a woman saying 'Radio sam' — the participle agrees with the speaker, so she says 'Radila sam'. Second, the auxiliary is put first, 'Sam radio jučer' — the clitic cannot open a sentence: 'Radio sam jučer' or 'Jučer sam radio'. Third, the negative is built as 'ne sam': the past negative is one word, 'Nisam radio', and here the auxiliary DOES come first, because nisam is a full stressed word.",
        highlight: 'the participle agrees with the speaker',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Ana says she was at home. Complete: 'Ana: ___ sam kod kuće.'",
            options: ['Bio', 'Bila', 'Bili', 'Bile'],
            correct: 1,
            explanation:
              'Ana is a woman speaking about herself, so the participle is feminine singular: bila. bio is masculine; bili and bile are plural.',
          },
          {
            q: "Complete: 'Oni ___ na koncert.' (They — a mixed group — went to the concert.)",
            options: ['su išli', 'su išle', 'je išao', 'su išao'],
            correct: 0,
            explanation:
              'A mixed or masculine group takes -li: išli su. išle is women only; išao is singular and cannot pair with su.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Sam jeo ručak.', 'Jeo sam ručak.', 'Jeo sam sam ručak.', 'Jeo ručak sam.'],
            correct: 1,
            explanation:
              "The clitic sam must be in second position: 'Jeo sam ručak'. It cannot open the sentence or be pushed to third position.",
          },
          {
            q: "Spot the error: 'Marija je došao kasno.'",
            options: [
              'je should be sam',
              'kasno should be kasnije',
              'došao should be došla — Marija is feminine',
              'nothing is wrong',
            ],
            correct: 2,
            explanation:
              'The participle agrees with the subject; Marija is feminine, so došla je. je is the correct third-person auxiliary.',
          },
          {
            q: "Complete: 'Mi ___ u Dubrovniku.' (We were not in Dubrovnik.)",
            options: ['ne smo bili', 'nismo bili', 'nismo bio', 'nisu bili'],
            correct: 1,
            explanation:
              "The negative auxiliary for mi is the single word nismo, and the participle stays plural: nismo bili. 'ne smo' does not exist; nisu is they.",
          },
          {
            q: "Which past participle of 'ići' does a woman use?",
            options: ['išao', 'ićila', 'idla', 'išla'],
            correct: 3,
            explanation:
              'ići has the irregular participle išao / išla / išli / išle. The š is not in the infinitive and has to be memorised.',
          },
          {
            q: "What does 'Radile su' tell you about the subject?",
            options: ['one man', 'a mixed group', 'a group of women only', 'one woman'],
            correct: 2,
            explanation:
              'The -le ending is the all-female plural. A mixed group would be radili su; one woman is radila je.',
          },
        ],
      },
      {
        type: 'summary',
        title: "Past Tense — You've Got It!",
        points: [
          'Past tense = L-participle + short auxiliary (sam/si/je/smo/ste/su)',
          'Masculine singular: -o / -ao / -io · Feminine singular: -la / -ala / -ila',
          'Mixed/masculine plural: -li · All-female plural: -le',
          'Negative: nisam/nisi/nije/nismo/niste/nisu — participle unchanged',
          'Key irregulars: ići → išao/išla | biti → bio/bila | moći → mogao/mogla',
          "Word order: 'Radio sam' (standard) — participle before auxiliary",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON: Croatian Future Tense (B1)
  // ─────────────────────────────────────────────────────────
  {
    id: 'future-tense',
    title: 'Croatian Future Tense',
    subtitle: 'Plans and predictions — the ću/ćeš/će system',
    icon: '🚀',
    level: 'B1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Future Tense',
        body: 'Croatian future tense is formed with a short set of auxiliaries (ću, ćeš, će, ćemo, ćete, će) combined with the infinitive. Unlike the past tense, gender plays NO role — the same form is used by men and women. This makes the future one of the simpler Croatian tenses to master.',
        icon: '🚀',
      },
      {
        type: 'rule',
        title: 'Future = Infinitive Stem + ću/ćeš/će...',
        body: "The short (enclitic) future form clips the infinitive: 'raditi' → 'radit ću' (I will work). The final vowel is dropped and the auxiliary is written as a separate word. The long form — 'ja ću raditi' — keeps the full infinitive and places the auxiliary first. Both forms are correct; the short form is more common in writing.",
        highlight: 'ću · ćeš · će · ćemo · ćete · će',
      },
      {
        type: 'table',
        title: 'Future Auxiliaries — Full Table',
        headers: ['Person', 'Auxiliary', 'With ići (no clipping)', 'Long form'],
        rows: [
          ['ja', 'ću', 'ići ću', 'ja ću ići'],
          ['ti', 'ćeš', 'ići ćeš', 'ti ćeš ići'],
          ['on / ona', 'će', 'ići će', 'on/ona će ići'],
          ['mi', 'ćemo', 'ići ćemo', 'mi ćemo ići'],
          ['vi', 'ćete', 'ići ćete', 'vi ćete ići'],
          ['oni / one', 'će', 'ići će', 'oni/one će ići'],
        ],
      },
      {
        type: 'rule',
        title: 'No Gender Difference — Ever',
        body: "In the past tense, 'radio sam' (m.) vs 'radila sam' (f.) differ. In the future, 'radit ću' is identical for male and female speakers. A man says 'ići ću' and a woman says 'ići ću' — no change. (Only a -ti infinitive clips before the auxiliary: radit ću; a -ći verb keeps its full form: ići ću, doći ću.) This gender-neutrality applies to every verb in every person. Memorize the six auxiliaries and you're done.",
        highlight: 'No gender distinction in future tense',
      },
      {
        type: 'example',
        title: 'Future Tense — Real Sentences',
        items: [
          {
            hr: 'Sutra ću ići na more.',
            en: 'Tomorrow I will go to the sea.',
            note: 'ići ću (a -ći verb never clips) | Long: ću ići',
          },
          {
            hr: 'Što ćeš raditi vikend?',
            en: 'What will you do this weekend?',
            note: 'Most common future question',
          },
          {
            hr: 'Bit će lijepo.',
            en: 'It will be nice.',
            note: 'biti → bit će — very high-frequency phrase',
          },
          {
            hr: 'Nećemo zaboraviti.',
            en: 'We will not forget.',
            note: 'Negative: nećemo (1st pl. neg. future)',
          },
          { hr: 'Hoće li doći?', en: 'Will he/she come?', note: 'Question: Hoće li + infinitive?' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Sljedeće godine preselit ćemo se u Zadar.',
            en: 'Next year we will move to Zadar.',
            note: 'preselit ćemo se — the clitics ćemo se follow the clipped infinitive',
          },
          {
            hr: 'Ja ću kuhati, a ti ćeš prati suđe.',
            en: 'I will cook and you will wash the dishes.',
            note: 'long form: pronoun first, ću / ćeš second',
          },
          {
            hr: 'Sutra će padati kiša cijeli dan.',
            en: 'Tomorrow it will rain all day.',
            note: 'će in second position after sutra; imperfective for duration',
          },
          {
            hr: 'Kad ćeš mi vratiti knjigu?',
            en: 'When will you give me the book back?',
            note: 'kad ćeš mi — the future clitic precedes the dative clitic',
          },
          {
            hr: 'Nećete vjerovati što se dogodilo!',
            en: 'You will not believe what happened!',
            note: 'nećete — negative future, one word',
          },
          {
            hr: 'Hoćemo li stići na vrijeme?',
            en: 'Will we make it on time?',
            note: 'hoćemo li — the question uses the full form',
          },
          {
            hr: 'Doći ću čim završim sastanak.',
            en: 'I will come as soon as I finish the meeting.',
            note: 'doći ću — an infinitive in -ći keeps its full form before ću',
          },
          {
            hr: 'Bit ćemo kod kuće do osam.',
            en: 'We will be at home until eight.',
            note: 'bit ćemo — the future of biti',
          },
          {
            hr: 'Učit ću hrvatski svaki dan, obećavam.',
            en: 'I will study Croatian every day, I promise.',
            note: 'učit ću — imperfective future for a habit',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Negative Future: Neću / Neće / Nećemo',
        body: "Negative future replaces the positive auxiliary with: neću, nećeš, neće, nećemo, nećete, neće. The infinitive follows unchanged. 'Neću ići' (I will not go). 'Neće doći' (He/she will not come). 'Nećemo zaboraviti' (We will not forget). The negative form is one word — never separate.",
        highlight: 'neću · nećeš · neće · nećemo · nećete · neće',
      },
      {
        type: 'rule',
        title: 'Aspect Matters in the Future',
        body: "Imperfective future describes an ongoing or habitual future action: 'Čitat ću' (or 'Ja ću čitati') (I will be reading / I'll read — no defined endpoint). Perfective future describes a completed, bounded action: 'Pročitat ću' (or 'Ja ću pročitati') (I will have read / I'll finish reading). For promises and plans with a clear outcome, always use perfective. Imperfective future is for ongoing states or habits.",
        highlight: 'Perfective = completion · Imperfective = ongoing/habitual',
      },
      {
        type: 'quiz',
        q: "'We will eat lunch' in Croatian?",
        options: ['Ručat ćemo.', 'Ručamo.', 'Ručali smo.', 'Ručaće.'],
        correct: 0,
        explanation:
          "'Ručati' → short stem 'ručat' + 'ćemo' (1st person plural future). 'Ručamo' = we eat (present). 'Ručali smo' = we ate (past). 'Ručaće' = they will eat (3rd person plural). Answer: 'Ručat ćemo.'",
      },
      {
        type: 'quiz',
        q: "'I will not come' — which is correct?",
        options: ['Neću doći.', 'Nisam došao.', 'Neće doći.', 'Ne dolazim.'],
        correct: 0,
        explanation:
          "'Neću' = 1st person singular negative future auxiliary. 'Doći' = perfective infinitive (to come, as completed arrival). Together: 'Neću doći.' 'Nisam došao' = past negative. 'Neće doći' = he/she will not come. 'Ne dolazim' = I am not coming (present imperfective).",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners clip -ći infinitives too: 'doć ću' — in standard writing only -ti infinitives lose their -i ('radit ću'); 'doći ću', 'ići ću' keep the full form. Second, the future clitic goes to the front, 'Ću doći sutra' — ću is a clitic and must sit in second position: 'Doći ću sutra' or 'Sutra ću doći'. Third, the negative is built as 'ne ću': it is the single word 'neću', and because it is a full stressed word it may open the sentence: 'Neću doći.'",
        highlight: 'ću is a clitic and must sit in second position',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Sutra ___ na more.' (we will go)",
            options: ['idemo ćemo', 'ćemo ići', 'ići ćemo', 'ićemo'],
            correct: 1,
            explanation:
              "After 'Sutra' the clitic ćemo must come second: Sutra ćemo ići. 'Ići ćemo' is right only when the infinitive itself opens the sentence.",
          },
          {
            q: "Complete: '___ doći na zabavu.' (She will not come to the party.)",
            options: ['Ne će', 'Nije', 'Ne hoće', 'Neće'],
            correct: 3,
            explanation:
              "The negative future is one word: neće. 'Nije' is past/present of biti, and 'ne hoće' does not exist.",
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ću te nazvati sutra.',
              'Nazvat ću te sutra.',
              'Nazvati ću te sutra.',
              'Nazvat te ću sutra.',
            ],
            correct: 1,
            explanation:
              'The -ti infinitive drops its -i before ću, and the cluster is ću te in that order. ću cannot open the sentence and cannot follow te.',
          },
          {
            q: "Spot the error: 'Marija će išla u školu sutra.'",
            options: [
              'će should be hoće',
              'sutra should be jučer',
              'išla should be ići — the future takes the infinitive, not the participle',
              'nothing is wrong',
            ],
            correct: 2,
            explanation:
              'The future is ću/ćeš/će + infinitive: Marija će ići. The l-participle belongs to the past tense.',
          },
          {
            q: "A man and a woman each say 'I will be at home'. How do their forms differ?",
            options: [
              'bit ću (m.) / bit ća (f.)',
              'bio ću / bila ću',
              'they do not differ — the future has no gender',
              'bit ćem / bit ćeš',
            ],
            correct: 2,
            explanation:
              'Unlike the past tense, the future uses the infinitive, which has no gender: both say bit ću.',
          },
          {
            q: "Complete: 'Kad ___ vratiti knjigu?' (When will you (sg.) give the book back?)",
            options: ['ćeš', 'hoće', 'će', 'ćete li'],
            correct: 0,
            explanation:
              'ti takes ćeš, placed right after kad. hoće is the full form for he/she, and li has no place after a question word.',
          },
          {
            q: "Which is the correct written short future of 'doći' with 'ja'?",
            options: ['doć ću', 'doći ću', 'doćiću', 'ću doći ja'],
            correct: 1,
            explanation:
              'Infinitives in -ći are not clipped in standard writing: doći ću. Only -ti infinitives lose the final -i (radit ću).',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Future Tense — Ready for Tomorrow!',
        points: [
          'Future = infinitive stem + ću/ćeš/će/ćemo/ćete/će',
          "Short form (common): 'radit ću' · Long form: 'ja ću raditi' — both correct",
          "No gender difference — 'bit ću' is the same for men and women",
          'Question: Hoće li + infinitive? (Will...?)',
          'Negative: neću/nećeš/neće/nećemo/nećete/neće + infinitive',
          'Aspect matters: perfective = plan with clear end · imperfective = ongoing',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 12: Verbal Aspect 2 — When to Use Imperfective
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-imperfective',
    title: 'Verbal Aspect 2: The Imperfective',
    subtitle: 'Habitual actions, ongoing processes, and general truths',
    icon: '🔄',
    level: 'B1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'When to Use Imperfective',
        body: "The imperfective aspect views an action as a process — ongoing, repeated, or simply described without reference to its completion. If you can add 'every day', 'always', or 'was doing' in English, you almost certainly need the imperfective in Croatian.",
        icon: '🔄',
      },
      {
        type: 'rule',
        title: 'Rule 1: Habitual & Repeated Actions',
        body: "When an action happens regularly — every day, often, sometimes — use the imperfective. The key words (uvijek, često, ponekad, svaki dan, obično) almost always demand imperfective. Think: if you could say 'used to' or 'would always', it's imperfective.",
        highlight: 'uvijek, često, ponekad',
      },
      {
        type: 'example',
        title: 'Habitual Actions — Listen',
        items: [
          {
            hr: 'Svaki dan pijem kavu.',
            en: 'Every day I drink coffee.',
            note: 'piti (impf.) — repeated habit',
          },
          {
            hr: 'Uvijek čitam prije spavanja.',
            en: 'I always read before sleep.',
            note: 'čitati (impf.) — always',
          },
          {
            hr: 'Često smo šetali po obali.',
            en: 'We often walked along the shore.',
            note: 'šetati (impf.) — often in past',
          },
          {
            hr: 'Obično jem u podne.',
            en: 'I usually eat at noon.',
            note: 'jesti (impf.) — usual routine',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Rule 2: Ongoing Action at a Point in Time',
        body: "Use the imperfective when describing what was happening at a specific moment — the action was in progress when something else occurred. This is the 'background' of a story. In English: 'I was reading when...' The action is a scene-setter, not a plot event.",
        highlight: 'was + -ing',
      },
      {
        type: 'example',
        title: 'Ongoing Actions — Listen',
        items: [
          {
            hr: 'Čitao sam kada je zazvonio telefon.',
            en: 'I was reading when the phone rang.',
            note: 'čitao sam (impf.) = background; zazvonio (pf.) = event',
          },
          {
            hr: 'Ona je spavala dok smo mi razgovarali.',
            en: 'She was sleeping while we were talking.',
            note: 'spavala (impf.) + razgovarali (impf.) — parallel processes',
          },
          {
            hr: 'Sunce je sjalo dok smo plivali.',
            en: 'The sun was shining while we swam.',
            note: 'sjalo (impf.) — scenic background',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Rule 3: General Truths & Definitions',
        body: "When stating a fact about how something generally works — not a specific event — use the imperfective. 'Water boils at 100°C.' 'Croatians greet with three kisses.' These aren't one-time events; they're general truths. Imperfective is the only option here.",
        highlight: 'general truth',
      },
      {
        type: 'table',
        title: 'Key Imperfective Trigger Words',
        headers: ['Croatian', 'English', 'Example'],
        rows: [
          ['uvijek', 'always', 'Uvijek čitam. (I always read.)'],
          ['često', 'often', 'Često pjevamo. (We often sing.)'],
          ['ponekad', 'sometimes', 'Ponekad trčim. (I sometimes run.)'],
          ['svaki dan', 'every day', 'Svaki dan učim. (I study every day.)'],
          ['obično', 'usually', 'Obično pijem čaj. (I usually drink tea.)'],
          ['rijetko', 'rarely', 'Rijetko kasnim. (I rarely arrive late.)'],
          ['nikad', 'never', 'Nikad ne pušim. (I never smoke.)'],
        ],
      },
      {
        type: 'rule',
        title: 'Rule 4: Attempted or Unfinished Actions',
        body: "When an action was tried but not completed, or when the outcome is irrelevant, use the imperfective. 'I was reading the book' (didn't necessarily finish it) vs. 'I read the book' (finished, perfective). The imperfective describes the activity; the perfective asserts the result.",
        highlight: 'attempt / process',
      },
      {
        type: 'example',
        title: 'Process vs Result — The Key Contrast',
        items: [
          {
            hr: 'Pisao sam pismo.',
            en: 'I was writing a letter. (process, not necessarily finished)',
            note: 'pisao (impf.) — focus on activity',
          },
          {
            hr: 'Napisao sam pismo.',
            en: 'I wrote a letter. (finished — it exists now)',
            note: 'napisao (pf.) — result assured',
          },
          {
            hr: 'Učio sam za ispit.',
            en: 'I was studying for the exam.',
            note: 'učio (impf.) — process, outcome open',
          },
          {
            hr: 'Naučio sam lekciju.',
            en: 'I learned the lesson. (mastered it)',
            note: 'naučio (pf.) — successful completion',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Dok je radila u Splitu, svaki dan je plivala prije posla.',
            en: 'While she worked in Split, she swam every day before work.',
            note: 'radila, plivala — a habit inside a lasting period',
          },
          {
            hr: 'Cijelu noć je padao snijeg.',
            en: 'It snowed all night.',
            note: 'padao — duration, not a single event',
          },
          {
            hr: 'Tražio sam ključeve pola sata.',
            en: 'I was looking for my keys for half an hour.',
            note: 'tražiti — the process; whether I found them is not said',
          },
          {
            hr: 'Ljudi u Dalmaciji jedu ribu petkom.',
            en: 'People in Dalmatia eat fish on Fridays.',
            note: 'jesti — habit / general truth',
          },
          {
            hr: 'Kad sam bio dijete, ljeta smo provodili na otoku.',
            en: 'When I was a child, we used to spend summers on the island.',
            note: "provoditi — the 'used to' reading",
          },
          {
            hr: 'Što si radio kad sam zvao? — Gledao sam utakmicu.',
            en: 'What were you doing when I called? — I was watching the match.',
            note: 'radio, gledao — ongoing at that moment',
          },
          {
            hr: 'Voda ključa na sto stupnjeva.',
            en: 'Water boils at a hundred degrees.',
            note: 'ključati — a general truth',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which sentence requires the IMPERFECTIVE aspect?',
        options: [
          'She finished (completed) her coffee.',
          'She was drinking coffee when I arrived.',
          'She drank her coffee in one sip.',
          'She will drink the coffee tomorrow.',
        ],
        correct: 1,
        explanation:
          "'She was drinking coffee when I arrived' — the ongoing background action needs imperfective (pila je kavu kada sam stigao). The first three options that reference completion or a quick single event use perfective (popiti). Imperfective = process / scene-setting.",
      },
      {
        type: 'quiz',
        q: 'Svaki dan _____ (to walk) uz more. Which verb form?',
        options: ['prohodati', 'hodati', 'prohodavam', 'hodao sam jednom'],
        correct: 1,
        explanation:
          "'Svaki dan' (every day) is a classic imperfective trigger. 'Hodati' is the imperfective of 'to walk'. 'Prohodati' is perfective (to learn to walk / walk for the first time). The daily habit demands imperfective.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners hear 'I read that book' and pick the perfective even with 'often': 'Često sam pročitao tu knjigu' — a repeated action is imperfective, 'Često sam čitao'. Second, they use the perfective for a scene-setting 'was doing': 'Napisao sam pismo kad je ušla' says the letter was finished at that moment; the background needs 'Pisao sam pismo kad je ušla'. Third, they treat the imperfective past as 'unfinished forever': 'Učio sam hrvatski' does not deny that you learned it — it reports the activity without claiming the result.",
        highlight: 'a repeated action is imperfective',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Svake subote ___ na tržnicu.' (we go)",
            options: ['odemo', 'otišli smo', 'otići ćemo', 'idemo'],
            correct: 3,
            explanation:
              "'Svake subote' marks repetition, so the imperfective present idemo is needed. The perfective forms describe a single trip.",
          },
          {
            q: "Complete: 'Kad si nazvao, ___ ručak.' (I was cooking lunch)",
            options: ['skuhao sam', 'skuham', 'kuhao sam', 'skuhat ću'],
            correct: 2,
            explanation:
              'The action in progress when the call came is background — imperfective kuhao sam. skuhao sam would mean lunch was already finished.',
          },
          {
            q: 'Which sentence states a general truth?',
            options: [
              'Sunce izlazi na istoku.',
              'Sunce je izašlo u šest.',
              'Sunce će izaći sutra.',
              'Sunce je jučer izašlo kasno.',
            ],
            correct: 0,
            explanation:
              'A general truth uses the imperfective present: izlazi. The others describe one particular sunrise, past or future.',
          },
          {
            q: "Spot the error: 'Dok sam pročitao novine, pio sam kavu.'",
            options: [
              'pio should be popio',
              'pročitao should be čitao — two parallel processes',
              'novine should be novina',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              "'Dok' with two simultaneous activities needs the imperfective on both: Dok sam čitao novine, pio sam kavu.",
          },
          {
            q: 'Which word almost always calls for the imperfective?',
            options: ['odjednom', 'jučer', 'uvijek', 'napokon'],
            correct: 2,
            explanation:
              'uvijek (always) marks a habit. odjednom (suddenly) and napokon (finally) point to single completed events; jučer is neutral.',
          },
          {
            q: "'Učio sam za ispit tri dana.' What does this claim?",
            options: [
              'I passed the exam',
              'I studied — the result is not stated',
              'I failed the exam',
              'I will study',
            ],
            correct: 1,
            explanation:
              'The imperfective reports the activity and its duration. Passing would be položio sam; the sentence says nothing about the outcome.',
          },
          {
            q: "Complete: 'Kao dijete ___ svaki dan nogomet.' (used to play)",
            options: ['odigrao sam', 'igrao sam', 'igrat ću', 'odigram'],
            correct: 1,
            explanation:
              "'used to' plus 'svaki dan' is a past habit — imperfective igrao sam. odigrao sam is one finished game.",
          },
        ],
      },
      {
        type: 'summary',
        title: 'Imperfective — When to Use It',
        points: [
          'Habits & repetition: uvijek, često, svaki dan → always imperfective',
          "Background / ongoing: 'was doing X when Y happened' → imperfective for X",
          'General truths & definitions → imperfective only',
          "Process without confirmed result: 'I was writing' → imperfective",
          "Key test: Can you add 'every day' or 'used to'? → imperfective",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 13: Verbal Aspect 3 — When to Use Perfective
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-perfective',
    title: 'Verbal Aspect 3: The Perfective',
    subtitle: 'Completed events, narrative past, and result states',
    icon: '✅',
    level: 'B1',
    duration: '~6 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'When to Use Perfective',
        body: "The perfective aspect views an action as a complete, bounded event — it happened, it ended, it's done. In a story, every time the plot advances ('then he called, then she left, then they arrived'), that's the perfective. Think: checkmarks. Each perfective verb is a completed step.",
        icon: '✅',
      },
      {
        type: 'rule',
        title: 'Rule 1: Single Completed Events',
        body: "When a specific event happened once and is fully complete, use perfective. The event has a definite beginning and end. English past simple usually maps to perfective when it means 'did X and finished it': 'I wrote the email' (and sent it), 'She called' (one specific call), 'He left' (and is gone).",
        highlight: 'once, done, complete',
      },
      {
        type: 'example',
        title: 'Completed Single Events — Listen',
        items: [
          {
            hr: 'Napisao sam email.',
            en: "I wrote the email. (it's done)",
            note: 'napisati (pf.) — email exists, complete',
          },
          {
            hr: 'Ona je otišla.',
            en: 'She left. (she is gone)',
            note: 'otići (pf.) — departure completed',
          },
          {
            hr: 'Pojeli smo cijeli kolač.',
            en: 'We ate the whole cake.',
            note: 'pojesti (pf.) — cake finished',
          },
          {
            hr: 'Pročitao je cijelu knjigu.',
            en: 'He read the whole book.',
            note: 'pročitati (pf.) — book done',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Rule 2: Narrative Sequence — Advancing the Story',
        body: "This is the most important use of perfective: in storytelling and narration, every verb that moves the story forward is perfective. The plot events — 'he entered, looked around, picked up the letter, read it, and called her' — each of these is a perfective verb. Imperfective is the stage setting; perfective is the action.",
        highlight: 'plot events = perfective',
      },
      {
        type: 'example',
        title: 'Narrative Chain — A Story in Perfective',
        items: [
          {
            hr: 'Ušao je, pogledao okolo i sjeo.',
            en: 'He entered, looked around, and sat down.',
            note: 'ući/pogledati/sjesti — 3 plot events, all pf.',
          },
          {
            hr: 'Uzela je kaput i izašla.',
            en: 'She took her coat and left.',
            note: 'uzeti/izaći — sequential events, both pf.',
          },
          {
            hr: 'Popio je kavu, platio i otišao.',
            en: 'He drank his coffee, paid, and left.',
            note: 'popiti/platiti/otići — classic narrative chain',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Rule 3: Result States',
        body: "The perfective is used when the focus is on the result — the new state created by the completed action. 'The door opened' (it is now open), 'I learned Croatian' (I now know it), 'She fell asleep' (she is now asleep). The perfective captures the moment of change and its lasting result.",
        highlight: 'result / new state',
      },
      {
        type: 'table',
        title: 'Common Imperfective → Perfective Pairs',
        headers: ['Imperfective', 'Perfective', 'English'],
        rows: [
          ['pisati', 'napisati', 'to write'],
          ['čitati', 'pročitati', 'to read'],
          ['jesti', 'pojesti', 'to eat'],
          ['piti', 'popiti', 'to drink'],
          ['gledati', 'pogledati', 'to look/watch'],
          ['govoriti', 'reći', 'to say/speak'],
          ['uzimati', 'uzeti', 'to take'],
          ['dolaziti', 'doći', 'to come'],
          ['odlaziti', 'otići', 'to leave'],
          ['učiti', 'naučiti', 'to learn'],
          ['kupovati', 'kupiti', 'to buy'],
          ['zvati', 'nazvati', 'to call'],
        ],
      },
      {
        type: 'rule',
        title: 'Rule 4: Future Events with a Clear End',
        body: "In future tense, the perfective is used for planned, bounded events — things that will happen and be done. 'I will call you' (one specific call), 'We will eat and then go' (chain of complete events). Imperfective future means ongoing or habitual future: 'I will be working all day'.",
        highlight: 'planned, bounded future event',
      },
      {
        type: 'example',
        title: 'Perfective vs Imperfective in Future',
        items: [
          {
            hr: 'Nazvat ću te sutra.',
            en: 'I will call you tomorrow. (one call, done)',
            note: 'nazvati (pf.) — specific planned event',
          },
          {
            hr: 'Zvat ću te cijelo ljeto.',
            en: 'I will be calling you all summer.',
            note: 'zvati (impf.) — ongoing/repeated future',
          },
          {
            hr: 'Pročitat ću tu knjigu za tjedan dana.',
            en: "I'll finish reading that book in a week.",
            note: 'pročitati (pf.) — completion implied',
          },
          {
            hr: 'Čitat ću svaki dan.',
            en: 'I will read every day.',
            note: 'čitati (impf.) — habitual future',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Sinoć sam napokon završila izvještaj i poslala ga šefu.',
            en: 'Last night I finally finished the report and sent it to the boss.',
            note: 'završila, poslala — two completed steps',
          },
          {
            hr: 'Kad je stigao vlak, svi su ustali.',
            en: 'When the train arrived, everyone stood up.',
            note: 'stigao, ustali — one event followed by another',
          },
          {
            hr: 'Otvorio je vrata, upalio svjetlo i zastao.',
            en: 'He opened the door, switched on the light and stopped.',
            note: 'three plot events, all perfective',
          },
          {
            hr: 'Kupit ću karte čim ih objave.',
            en: 'I will buy the tickets as soon as they release them.',
            note: 'kupit ću, objave — bounded future events',
          },
          {
            hr: 'Zaspala je za pet minuta.',
            en: 'She fell asleep within five minutes.',
            note: 'zaspati — a change of state with a lasting result',
          },
          {
            hr: 'Dijete je naučilo hodati prije prvog rođendana.',
            en: 'The child learned to walk before its first birthday.',
            note: 'naučilo — mastery achieved',
          },
          {
            hr: 'Pojeo sam sendvič i odmah krenuo dalje.',
            en: 'I ate the sandwich and set off again at once.',
            note: 'pojeo, krenuo — a narrative chain',
          },
        ],
      },
      {
        type: 'quiz',
        q: "In the sentence 'He entered the room, sat down, and opened his laptop' — what aspect are ALL the verbs?",
        options: [
          'All imperfective — ongoing background',
          'All perfective — sequential plot events',
          'Mixed: first two imperfective, last perfective',
          'It depends on whether he finished',
        ],
        correct: 1,
        explanation:
          'Sequential narrative events that advance the story are ALWAYS perfective: ušao je (pf.), sjeo je (pf.), otvorio je (pf.). This is the rule of narrative: imperfective sets the scene, perfective drives the plot.',
      },
      {
        type: 'quiz',
        q: 'Which sentence uses perfective correctly?',
        options: [
          'Svaki dan sam napisao pismo. (I wrote a letter every day.)',
          'Napisao sam pismo i poslao ga. (I wrote the letter and sent it.)',
          'Napisao sam kad je zvonilo. (I was writing when it rang.)',
          'Uvijek napisao kasno. (I always wrote late.)',
        ],
        correct: 1,
        explanation:
          "'Napisao sam pismo i poslao ga' — perfective 'napisati' (write to completion) + 'poslati' (send) form a narrative chain of completed events. Option A is wrong: 'svaki dan' requires imperfective. Option C's situation requires imperfective for the background action.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners say 'Sada napišem pismo' for 'I am writing a letter now' — a perfective present cannot describe an action in progress; it reads as a future or a one-off completion, so 'now' takes 'pišem'. Second, they use the perfective for duration: 'Pročitao sam dva sata' — reading FOR two hours is a process, 'čitao sam dva sata'; only 'pročitao sam knjigu' (finished it) is perfective. Third, in a story every verb gets the same aspect: the events advance with perfectives, but the scenery stays imperfective — 'Sunce je sjalo, on je ušao.'",
        highlight: 'a perfective present cannot describe an action in progress',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Jučer sam ___ pismo i poslao ga.' (wrote the letter — and it went)",
            options: ['pisao', 'napisao', 'pišem', 'pisat ću'],
            correct: 1,
            explanation:
              'A letter that was then sent was finished: perfective napisao. pisao would describe only the activity.',
          },
          {
            q: "Complete: 'Sada ___ ručak, ne mogu razgovarati.' (I am cooking lunch right now)",
            options: ['skuham', 'skuhao sam', 'kuham', 'skuhat ću'],
            correct: 2,
            explanation:
              'An action in progress at this moment must be imperfective: kuham. A perfective present (skuham) cannot mean an ongoing action.',
          },
          {
            q: 'Which sentence is a correct narrative chain?',
            options: [
              'Ulazio je, sjedao i otvarao knjigu.',
              'Ušao je, sjeo i otvorio knjigu.',
              'Ušao je, sjedao i otvarao knjigu.',
              'Uđe je, sjeo i otvorio knjigu.',
            ],
            correct: 1,
            explanation:
              'Plot events that follow one another are perfective: ušao, sjeo, otvorio. The imperfective chain describes processes with no sequence, and the last option mixes an aorist with an auxiliary.',
          },
          {
            q: "Spot the error: 'Pročitao sam knjigu cijelo popodne, ali nisam stigao do kraja.'",
            options: [
              'pročitao should be čitao — the process, not completed',
              'popodne should be popodneva',
              'stigao should be stigla',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              "'cijelo popodne' and 'nisam stigao do kraja' both say the reading was not completed, so the perfective contradicts the sentence: čitao sam.",
          },
          {
            q: "What does 'Zaspala je' (perfective) tell you that 'Spavala je' does not?",
            options: [
              'that she slept a long time',
              'the moment of change — she fell asleep and is now asleep',
              'that she slept badly',
              'nothing — they are synonyms',
            ],
            correct: 1,
            explanation:
              'zaspati marks the transition into sleep and its result; spavati describes the state of sleeping.',
          },
          {
            q: "Complete: '___ ću ti sutra ujutro.' (I will call you — one call)",
            options: ['Zvati', 'Zvat', 'Nazvat', 'Nazivat'],
            correct: 2,
            explanation:
              'One bounded future call is perfective: nazvat ću. zvat ću would mean I will be calling repeatedly or for a while.',
          },
          {
            q: "Why can't 'Napišem pismo' mean 'I am writing a letter (at this moment)'?",
            options: [
              'because napisati is a noun',
              'because pismo needs the genitive',
              'because napisati has no present tense',
              'because a perfective present is a future or a single completion, never an ongoing action',
            ],
            correct: 3,
            explanation:
              'Perfective verbs do have present forms, but those forms cannot express an action in progress — they appear in time clauses, futures and habitual completions.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Perfective — When to Use It',
        points: [
          "Single completed events: 'I called' (once, it's done) → perfective",
          'Narrative sequence: every plot-advancing verb in a story → perfective',
          "Result states: 'she fell asleep / he left' (new state created) → perfective",
          "Bounded future event: 'I will call you tomorrow' → perfective",
          "Key test: Could you say 'finished' or 'completed'? → probably perfective",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 14: Verbal Aspect 4 — Negation, Commands & Traps
  // ─────────────────────────────────────────────────────────
  {
    id: 'aspect-negation',
    title: 'Verbal Aspect 4: Negation & Commands',
    subtitle: 'Aspect in negative sentences, imperatives, and advanced contexts',
    icon: '🚫',
    level: 'B2',
    duration: '~6 min',
    color: '#dc2626',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'The Advanced Aspect Rules',
        body: "You know the basics: imperfective = process, perfective = completion. Now for the rules that native speakers follow automatically — but that cause the most errors for B2 learners: aspect in negation, aspect in imperatives (commands), and the subtle 'asking vs doing' distinction.",
        icon: '🚫',
      },
      {
        type: 'rule',
        title: 'Rule 1: Negation Strongly Prefers Imperfective',
        body: "When you negate an action in the past, the imperfective is almost always required — because negation cancels the action entirely, making completeness irrelevant. 'I didn't read' (nisam čitao — impf.) — the reading simply didn't happen. The perfective negative 'nisam pročitao' implies 'I didn't manage to finish reading' — a very specific meaning.",
        highlight: 'nisam + imperfective = typical negation',
      },
      {
        type: 'example',
        title: 'Negation — Imperfective vs Perfective',
        items: [
          {
            hr: 'Nisam čitao tu knjigu.',
            en: "I didn't read that book. (at all)",
            note: 'čitati (impf.) — standard negation; reading never happened',
          },
          {
            hr: 'Nisam pročitao tu knjigu.',
            en: "I didn't finish reading that book.",
            note: "pročitati (pf.) — implies I started but didn't complete it",
          },
          {
            hr: 'Nije jela ništa.',
            en: "She didn't eat anything.",
            note: 'jesti (impf.) — no eating occurred at all',
          },
          {
            hr: 'Nije pojela sve.',
            en: "She didn't eat everything.",
            note: 'pojesti (pf.) — she ate some, not all (not complete)',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Rule 2: Imperatives — General vs One-Time Commands',
        body: "Commands use aspect very specifically. An imperfective imperative gives a general instruction or policy: 'Speak Croatian!' (in general — do it as a habit). A perfective imperative gives a one-time order for a specific action: 'Say your name!' (do it now, once). Using the wrong aspect can sound rude or confused.",
        highlight: 'general policy = impf.; specific action = pf.',
      },
      {
        type: 'example',
        title: 'Imperative Aspect — Commands',
        items: [
          {
            hr: 'Govori sporije! (impf.)',
            en: 'Speak more slowly! (general instruction — do it as a habit from now on)',
            note: 'general instruction',
          },
          {
            hr: 'Reci mi svoju adresu! (pf.)',
            en: 'Tell me your address! (do it now, once)',
            note: 'specific, one-time request',
          },
          {
            hr: 'Pij više vode! (impf.)',
            en: 'Drink more water! (general lifestyle advice)',
            note: 'repeated habit instruction',
          },
          {
            hr: 'Popij ovu tabletu! (pf.)',
            en: 'Take this tablet! (now, this specific one)',
            note: 'one specific action now',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Rule 3: Asking Permission vs Requesting Action',
        body: "When asking for permission to do something ('May I open the window?') — use imperfective. When making a specific request for someone else to do something ('Could you open the window?') — use perfective. This distinction is subtle but immediately audible to native speakers.",
        highlight: 'permission = impf.; request = pf.',
      },
      {
        type: 'example',
        title: 'Permission & Request',
        items: [
          {
            hr: 'Mogu li otvarati prozor? (impf.)',
            en: 'May I open the window? (asking permission)',
            note: 'impf. — requesting right to do the action',
          },
          {
            hr: 'Možeš li otvoriti prozor? (pf.)',
            en: 'Can you open the window? (asking them to do it)',
            note: 'pf. — specific one-time request',
          },
          {
            hr: 'Smijem li pušiti ovdje? (impf.)',
            en: 'May I smoke here? (permission)',
            note: 'impf. — seeking permission for habit',
          },
          {
            hr: 'Možeš li zatvoriti vrata? (pf.)',
            en: 'Can you close the door? (please do it once)',
            note: 'pf. — requesting a specific action',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Nisam nikoga vidio na plaži, nije bilo ni žive duše.',
            en: 'I saw no one on the beach; there was not a living soul.',
            note: 'nisam vidio (impf. negation); nije bilo + genitive (žive duše)',
          },
          {
            hr: 'Nemoj otvarati prozor, hladno je.',
            en: "Don't open the window, it's cold.",
            note: 'nemoj + imperfective infinitive — the standard negative command',
          },
          {
            hr: 'Nikad nisam jeo tako dobru ribu.',
            en: 'I have never eaten such good fish.',
            note: 'nikad + nisam — the double negative is required',
          },
          {
            hr: 'Nemam vremena ni novca za to.',
            en: 'I have neither time nor money for that.',
            note: 'nemati + genitive: vremena, novca',
          },
          {
            hr: 'Ne kupuj kruh, već ga imamo.',
            en: "Don't buy bread, we already have some.",
            note: 'ne + imperfective imperative',
          },
          {
            hr: 'Nije platila račun, pa su joj isključili struju.',
            en: "She didn't pay the bill, so they cut off her electricity.",
            note: 'nije platila (pf.) — the specific act was not carried out',
          },
          {
            hr: 'Ne brinite, sve će biti u redu.',
            en: "Don't worry, everything will be fine.",
            note: 'ne brinite — imperfective, Vi-form',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Rule 4: After Modal Verbs — Context Decides',
        body: "After modal verbs (moći = can, htjeti = want, morati = must, smjeti = may), both aspects are possible but with very different meanings. Imperfective implies an ongoing or repeated action; perfective implies a specific, bounded goal. 'I want to read' (impf.) = I want to be a reader. 'I want to read this book' (pf.) = I want to finish this book.",
        highlight: 'modal + impf. = activity | modal + pf. = goal',
      },
      {
        type: 'table',
        title: 'Modal + Aspect Pairs — Meaning Shift',
        headers: ['Croatian', 'Aspect', 'English Meaning'],
        rows: [
          ['Hoću čitati.', 'impf.', 'I want to read. (as an activity / generally)'],
          ['Hoću pročitati ovu knjigu.', 'pf.', 'I want to finish reading this book. (goal)'],
          ['Moram pisati svaki dan.', 'impf.', 'I must write every day. (habitual)'],
          ['Moram napisati izvješće.', 'pf.', 'I must write the report. (specific task, done)'],
          ['Mogu plivati.', 'impf.', 'I can swim. (I know how to)'],
          ['Mogu preplivati kanal.', 'pf.', 'I can swim across the canal. (bounded achievement)'],
        ],
      },
      {
        type: 'quiz',
        q: "A friend gives you general lifestyle advice: 'Vježbaj svaki dan i _____ zdravo!' What goes in the blank?",
        options: [
          'pojedi (pf.)',
          'jedi (impf.)',
          'sjedi (impf.)',
          'jedeš (present, not imperative)',
        ],
        correct: 1,
        explanation:
          "'Jedi zdravo!' — general lifestyle imperative requires imperfective. 'Eat healthy!' is ongoing advice about a habit, not a one-time request to eat a specific meal. 'Pojedi' (pf.) would mean 'finish eating that specific thing right now' — very different!",
      },
      {
        type: 'quiz',
        q: "She studied all year but didn't pass the exam. How does she say 'I didn't pass'?",
        options: [
          'Neću položiti ispit. (future — will not pass)',
          "Nisam polagala ispit. (impf. — didn't take the exam at all)",
          "Nisam položila ispit. (pf. — tried but didn't pass)",
          "There's no difference",
        ],
        correct: 2,
        explanation:
          "She DID take (polagala) the exam — she just didn't pass (položiti = to pass, perfective). 'Nisam položila' (pf. negative) means 'I tried/took it but didn't successfully complete it.' 'Nisam polagala' would mean she never sat the exam at all — which contradicts the situation.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners negate a command with the perfective: 'Ne otvori prozor!' — a prohibition takes the imperfective, 'Ne otvaraj prozor!' or 'Nemoj otvarati prozor!'; a perfective negative imperative is a warning against a slip ('Nemoj pasti!'), not a ban. Second, the English single negative is copied: 'Nikad sam bio u Splitu' — Croatian stacks negatives, 'Nikad nisam bio u Splitu'. Third, 'nemam' is followed by the accusative: 'Nemam vrijeme' — nemati, like nema, takes the genitive: 'Nemam vremena'.",
        highlight: 'a prohibition takes the imperfective',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: '___ vrata, hladno je!' (Don't open the door — a general prohibition)",
            options: ['Ne otvori', 'Ne otvaraj', 'Otvori ne', 'Nemoj otvoriš'],
            correct: 1,
            explanation:
              'A prohibition uses the imperfective imperative: Ne otvaraj. Ne otvori would be a warning against accidentally opening it once; nemoj needs an infinitive.',
          },
          {
            q: "Complete: '___ nisam bio u Dubrovniku.' (I have never been)",
            options: ['Nikad', 'Ikad', 'Uvijek', 'Već'],
            correct: 0,
            explanation:
              'nikad pairs with the negated verb — the double negative is obligatory. ikad (ever) is used in questions and after conditions.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Nemam novac.', 'Nemam novcu.', 'Nemam novca.', 'Nemam novcem.'],
            correct: 2,
            explanation:
              'nemati takes the genitive of negation: nemam novca. novac (accusative) is the form after the positive imam.',
          },
          {
            q: "Spot the error: 'Nitko je došao na sastanak.'",
            options: [
              'Nitko should be Netko',
              'je should be nije — a negative word demands a negated verb',
              'sastanak should be sastanku',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'nitko, ništa, nikad all require the verb to be negated as well: Nitko nije došao.',
          },
          {
            q: "Why is 'Nisam čitao tu knjigu' the normal negation, not 'Nisam pročitao'?",
            options: [
              'because čitati is more formal',
              'because pročitati has no past tense',
              'because tu knjigu needs the genitive',
              'because negation cancels the action, so completeness is irrelevant — imperfective',
            ],
            correct: 3,
            explanation:
              'If the reading never happened, there is no completion to mark. Nisam pročitao says specifically that I did not get to the end.',
          },
          {
            q: "When is a negative PERFECTIVE imperative used, e.g. 'Nemoj pasti!'?",
            options: [
              'for any prohibition',
              'for a warning against an accidental one-off event',
              'only with Vi',
              'never — it is ungrammatical',
            ],
            correct: 1,
            explanation:
              'The perfective under negation warns about something that might happen once by accident. Bans and instructions take the imperfective.',
          },
          {
            q: "Complete: 'Nije bilo ___ na cesti.' (there was no snow)",
            options: ['snijeg', 'snijegu', 'snijegom', 'snijega'],
            correct: 3,
            explanation:
              'Existence negated takes the genitive: nije bilo snijega, as with nema snijega.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Aspect in Negation & Commands',
        points: [
          "Negation default: imperfective (action simply didn't happen)",
          "Perfective negative: 'tried but failed to complete' — specific meaning",
          'General imperative (advice/policy): imperfective',
          'Specific one-time command: perfective',
          'Permission (May I?): imperfective | Request (Please do it): perfective',
          'Modal + impf. = activity/ability | Modal + pf. = specific goal',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 15: Accusative Case Deep Dive
  // ─────────────────────────────────────────────────────────
  {
    id: 'accusative-deep',
    title: 'Accusative Case: Motion & Direct Objects',
    subtitle: 'Animate vs inanimate, directional motion, and time expressions',
    icon: '➡️',
    level: 'A2',
    duration: '~6 min',
    color: '#d97706',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Accusative — Your Most-Used Case',
        body: "The accusative is the case of direct objects and direction. After learning nominative ('what is it?'), accusative ('what do I do it to?') is the next case to master — you will use it in almost every sentence. It also marks movement toward a place: 'into the city', 'onto the table', 'to Zagreb'.",
        icon: '➡️',
      },
      {
        type: 'rule',
        title: 'Accusative: Direct Object',
        body: 'The direct object of a verb goes into the accusative. For feminine nouns (-a endings), -a changes to -u. For inanimate masculine nouns and neuter nouns, the accusative equals the nominative (no change). For animate masculine nouns (people and animals), the accusative equals the genitive (adds -a).',
        highlight: 'fem: -a → -u | inanim. masc./neut.: no change | anim. masc.: + -a',
      },
      {
        type: 'table',
        title: 'Accusative Endings — The Full Picture',
        headers: ['Gender', 'Nom.', 'Acc.', 'Example'],
        rows: [
          ['Feminine', '-a', '-u', 'žena → ženu (woman)'],
          ['Feminine', '-a', '-u', 'knjiga → knjigu (book)'],
          ['Masc. inanimate', '-∅ or cons.', 'same', 'grad → grad (city)'],
          ['Masc. inanimate', '-∅', 'same', 'stol → stol (table)'],
          ['Masc. animate', '-∅ or cons.', '-a', 'brat → brata (brother)'],
          ['Masc. animate', '-∅', '-a', 'pas → psa (dog)'],
          ['Neuter', '-o / -e', 'same', 'more → more (sea)'],
          ['Neuter', '-o', 'same', 'selo → selo (village)'],
        ],
      },
      {
        type: 'rule',
        title: 'The Animate/Inanimate Distinction',
        body: "This is one of Croatian grammar's key rules: masculine nouns that refer to living beings (people, animals) are 'animate' and take -a in accusative, just like genitive. Inanimate masculine nouns (objects, places, concepts) take the same form as nominative. Ask: 'Is it alive?' If yes → add -a.",
        highlight: 'alive? → -a | not alive? → no change',
      },
      {
        type: 'example',
        title: 'Animate vs Inanimate — Listen',
        items: [
          {
            hr: 'Vidim brata.',
            en: 'I see my brother.',
            note: 'brat (masc. animate) → brata (acc.)',
          },
          {
            hr: 'Vidim grad.',
            en: 'I see the city.',
            note: 'grad (masc. inanimate) → grad (acc., no change)',
          },
          { hr: 'Volim mačku.', en: 'I love the cat.', note: 'mačka (fem.) → mačku (acc.)' },
          {
            hr: 'Volim more.',
            en: 'I love the sea.',
            note: 'more (neuter) → more (acc., no change)',
          },
          {
            hr: 'Zovem prijatelja.',
            en: "I'm calling a friend.",
            note: 'prijatelj (masc. animate) → prijatelja (acc.)',
          },
          {
            hr: 'Kupujem auto.',
            en: "I'm buying a car.",
            note: 'auto (masc. inanimate) → auto (acc., no change)',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Accusative: Direction with u and na',
        body: "The prepositions u (into/to) and na (onto/to) trigger the accusative when they express movement toward a place. This contrasts with the locative (static location): 'u gradu' (in the city — locative) vs 'u grad' (into/to the city — accusative). The form of the noun is often the same, but the meaning is very different.",
        highlight: 'movement → accusative | location → locative',
      },
      {
        type: 'example',
        title: 'Direction (Acc.) vs Location (Loc.)',
        items: [
          {
            hr: 'Idem u Zagreb. (acc.)',
            en: "I'm going to Zagreb. (direction)",
            note: 'motion: u + accusative',
          },
          {
            hr: 'Živim u Zagrebu. (loc.)',
            en: 'I live in Zagreb. (location)',
            note: 'static: u + locative',
          },
          {
            hr: 'Sjeo je na stolicu. (acc.)',
            en: 'He sat down on the chair. (motion — onto)',
            note: 'na + accusative = direction',
          },
          {
            hr: 'Sjedi na stolici. (loc.)',
            en: "He's sitting on the chair. (location)",
            note: 'na + locative = static',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Svaki dan zalijevam cvijeće i hranim psa.',
            en: 'Every day I water the flowers and feed the dog.',
            note: 'cvijeće (neuter, no change); pas → psa (animate)',
          },
          {
            hr: 'Čekamo doktora već sat vremena.',
            en: 'We have been waiting for the doctor for an hour already.',
            note: 'doktor → doktora; sat vremena — duration',
          },
          {
            hr: 'Stavi mlijeko u hladnjak.',
            en: 'Put the milk in the fridge.',
            note: 'u hladnjak — motion into; inanimate, no change',
          },
          {
            hr: 'Ljeti idemo na otok Brač.',
            en: 'In summer we go to the island of Brač.',
            note: 'na + accusative — motion toward',
          },
          {
            hr: 'Volim svoju sestru i svog brata.',
            en: 'I love my sister and my brother.',
            note: 'sestru (fem. -u); brata (animate -a); svoju / svog agree',
          },
          {
            hr: 'Gledam utakmicu cijelu večer.',
            en: 'I am watching the match all evening.',
            note: 'utakmicu — the object; cijelu večer — duration',
          },
          {
            hr: 'Pozovi Marka na rođendan!',
            en: 'Invite Marko to the birthday party!',
            note: 'Marko → Marka (animate); na rođendan — an event counts as a direction',
          },
          {
            hr: 'U petak putujemo u Osijek.',
            en: 'On Friday we travel to Osijek.',
            note: 'u petak — day in the accusative; u Osijek — destination',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Accusative: Time Expressions',
        body: "Accusative also expresses duration of time — how long something lasts: 'cijeli dan' (the whole day), 'jedan sat' (one hour), 'tjedan dana' (a week). Also: specific days of the week with the preposition 'u' (u ponedjeljak — on Monday). These don't decline the noun differently but appear in their accusative form.",
        highlight: 'duration of time = accusative',
      },
      {
        type: 'quiz',
        q: 'Which sentence correctly uses the accusative for a masculine animate noun?',
        options: ['Vidim profesor.', 'Vidim profesora.', 'Vidim profesoru.', 'Vidim professore.'],
        correct: 1,
        explanation:
          "'Profesora' — profesor is masculine animate (a person), so accusative = genitive form: profesor → profesora. This is one of Croatian's most important rules. 'Vidim profesora' = I see the professor.",
      },
      {
        type: 'quiz',
        q: "Is this direction or location? 'Stavi knjigu na policu.'",
        options: [
          'Location — the book is on the shelf',
          'Direction — put the book onto the shelf (accusative)',
          "It doesn't matter — na always takes locative",
          'Direction with locative',
        ],
        correct: 1,
        explanation:
          "'Stavi' (put) indicates movement. 'Na policu' = onto the shelf (accusative, polica → policu). When na implies movement/direction, it takes accusative. When it describes where something statically is, it takes locative ('na polici' = on the shelf).",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "The animate rule gets skipped: 'Vidim prijatelj' — a living masculine noun takes -a, 'Vidim prijatelja'; and then it gets over-applied: 'Vidim stola' — a table is not alive, so 'Vidim stol'. Second, motion and location get swapped: 'Idem u gradu' should be 'Idem u grad', because going somewhere is accusative and 'u gradu' means you are already there. Third, feminine -a nouns keep their dictionary form as objects: 'Čitam knjiga' must be 'Čitam knjigu'.",
        highlight: 'a living masculine noun takes -a',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Poznajem ___.' (I know the teacher — a man.)",
            options: ['učitelj', 'učitelja', 'učitelju', 'učiteljem'],
            correct: 1,
            explanation:
              'učitelj is masculine animate, so the accusative adds -a: učitelja. učitelju is dative, učiteljem instrumental.',
          },
          {
            q: "Complete: 'Kupujem ___.' (I am buying a new table.)",
            options: ['novi stol', 'novog stola', 'novom stolu', 'nova stola'],
            correct: 0,
            explanation:
              'stol is inanimate, so the accusative equals the nominative: novi stol. novog stola would be the animate (or genitive) form.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Idem na plaži.', 'Idem na plažu.', 'Idem na plaža.', 'Idem na plažom.'],
            correct: 1,
            explanation:
              'Going to the beach is motion: na + accusative, plaža → plažu. na plaži is the locative — being on the beach.',
          },
          {
            q: "Spot the error: 'Vidim velikog grada.'",
            options: [
              'grada should be grad — a city is inanimate, so the accusative equals the nominative',
              'velikog should be veliku',
              'vidim should be vidim ga',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'Only animate masculine nouns take -a in the accusative. A city is inanimate: Vidim veliki grad.',
          },
          {
            q: "Why does 'pas' become 'psa' in 'Hranim psa' while 'stol' stays 'stol' in 'Vidim stol'?",
            options: [
              'pas is feminine',
              'stol is a loanword',
              'pas is animate, stol is not',
              'psa is genitive, not accusative',
            ],
            correct: 2,
            explanation:
              'Living masculine nouns take the -a ending in the accusative (which looks like the genitive); objects keep the nominative form.',
          },
          {
            q: "Complete: 'Čekao sam te ___.' (the whole day)",
            options: ['cijeli dan', 'cijelog dana', 'cijelom danu', 'cijelim danom'],
            correct: 0,
            explanation:
              'Duration of time is expressed with the accusative: cijeli dan, cijelu noć, tjedan dana.',
          },
          {
            q: 'Which pair correctly contrasts motion and location?',
            options: [
              'u školi (going) / u školu (being)',
              'u škola / u školu',
              'u školom (going) / u školi (being)',
              'u školu (going) / u školi (being)',
            ],
            correct: 3,
            explanation:
              'Motion takes the accusative (u školu), static location the locative (u školi). The other pairs reverse the cases or use forms that do not exist here.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Accusative — The Motion & Object Case',
        points: [
          'Feminine: -a → -u (žena → ženu, knjiga → knjigu)',
          'Masculine animate: + -a (brat → brata, pas → psa)',
          'Masculine inanimate + Neuter: no change (grad, more)',
          'u/na + accusative = movement toward | u/na + locative = static location',
          'Duration of time: cijeli dan, jedan sat, tjedan dana → accusative',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 16: Genitive Case — Possession, Absence & Quantity
  // ─────────────────────────────────────────────────────────
  {
    id: 'genitive-deep',
    title: 'Genitive Case: Possession & Absence',
    subtitle: 'Ownership, negation of existence, partitive quantities, and prepositions',
    icon: '📦',
    level: 'B1',
    duration: '~7 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: "Genitive — The Case of 'Of'",
        body: "The genitive answers the question 'koga/čega?' (of whom/what?). It's the second most common case after accusative, and it has four main jobs: showing possession ('the book of Ana'), negating existence ('there is no...'), expressing quantity ('a lot of water'), and appearing after dozens of prepositions (od, do, iz, bez, kod, za, s, prema...).",
        icon: '📦',
      },
      {
        type: 'table',
        title: 'Genitive Endings',
        headers: ['Gender', 'Nom.', 'Gen.', 'Example'],
        rows: [
          ['Feminine (-a)', '-a', '-e', 'žena → žene (of the woman)'],
          ['Feminine (-a)', '-a', '-e', 'knjiga → knjige (of the book)'],
          ['Masculine', 'cons.', '-a', 'brat → brata (of the brother)'],
          ['Masculine', 'cons.', '-a', 'grad → grada (of the city)'],
          ['Neuter (-o)', '-o', '-a', 'more → mora (of the sea)'],
          ['Neuter (-e)', '-e', '-a', 'polje → polja (of the field)'],
        ],
      },
      {
        type: 'rule',
        title: 'Use 1: Possession',
        body: "To say something belongs to someone, put the owner in the genitive. There is no separate word for 'of' — the ending does the work. 'Kov Ana' (Ana's key) = 'ključ Ane'. 'The city's centre' = 'centar grada'. The genitive noun follows the thing possessed.",
        highlight: 'owner → genitive',
      },
      {
        type: 'example',
        title: 'Possession in Genitive — Listen',
        items: [
          { hr: 'ključ Ane', en: "Ana's key", note: 'Ana → Ane (fem. gen.)' },
          { hr: 'centar grada', en: 'the city centre', note: 'grad → grada (masc. gen.)' },
          { hr: 'boja mora', en: 'the colour of the sea', note: 'more → mora (neut. gen.)' },
          { hr: 'soba moje sestre', en: "my sister's room", note: 'sestra → sestre (fem. gen.)' },
        ],
      },
      {
        type: 'rule',
        title: 'Use 2: Nema + Genitive (There is no...)',
        body: "The word 'nema' (there is no / there isn't) always takes the genitive. This is one of the most common patterns in Croatian. Its positive pair is 'ima' (there is). 'Ima kave?' (Is there coffee?) — 'Nema kave.' (There's no coffee.) The noun after nema is always genitive.",
        highlight: 'nema + genitive',
      },
      {
        type: 'example',
        title: 'Nema + Genitive',
        items: [
          {
            hr: 'Nema kave.',
            en: "There's no coffee.",
            note: 'kava → kave (fem. gen.) after nema',
          },
          { hr: 'Nema vremena.', en: "There's no time.", note: 'vrijeme → vremena (neut. gen.)' },
          { hr: 'Nema ga ovdje.', en: "He isn't here.", note: 'on → ga (gen. pronoun)' },
          { hr: 'Nema kruha.', en: "There's no bread.", note: 'kruh → kruha (masc. gen.)' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kuća mojih roditelja nalazi se blizu mora.',
            en: "My parents' house is near the sea.",
            note: 'mojih roditelja — genitive plural of possession; blizu + genitive',
          },
          {
            hr: 'Nema slobodnih mjesta u kinu večeras.',
            en: 'There are no free seats at the cinema tonight.',
            note: 'nema + genitive plural: slobodnih mjesta',
          },
          {
            hr: 'Kupi kilogram jabuka i litru mlijeka.',
            en: 'Buy a kilo of apples and a litre of milk.',
            note: 'quantity + genitive: jabuka (pl.), mlijeka',
          },
          {
            hr: 'Radim od ponedjeljka do petka bez pauze.',
            en: 'I work from Monday to Friday without a break.',
            note: 'od, do, bez — all + genitive',
          },
          {
            hr: 'Vraćamo se s posla oko sedam.',
            en: 'We come back from work around seven.',
            note: 's + genitive = off / from; oko + genitive',
          },
          {
            hr: 'Ovdje ima puno turista, ali malo parkirnih mjesta.',
            en: 'There are many tourists here but few parking places.',
            note: 'puno / malo + genitive plural',
          },
          {
            hr: 'Boja neba nad Jadranom je nevjerojatna.',
            en: 'The colour of the sky over the Adriatic is unbelievable.',
            note: 'boja neba — of the sky',
          },
          {
            hr: 'Umjesto kave uzet ću čaj.',
            en: 'Instead of coffee I will have tea.',
            note: 'umjesto + genitive',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Use 3: Quantities & Numbers (5+)',
        body: "After quantity words (mnogo, malo, puno, dosta, nekoliko — a lot, a little, many, some) and after numbers 5 and above, Croatian uses the genitive plural. 'Mnogo prijatelja' (many friends), 'pet boca' (five bottles). Numbers 2-4 use genitive singular; numbers 5+ use genitive plural.",
        highlight: '5+ and quantity words → genitive plural',
      },
      {
        type: 'table',
        title: 'Key Genitive Prepositions',
        headers: ['Preposition', 'Meaning', 'Example'],
        rows: [
          ['od', 'from, of, since', 'od Splita (from Split); od jučer (since yesterday)'],
          ['do', 'to, until, as far as', 'do Dubrovnika (to Dubrovnik); do sutra (until tomorrow)'],
          ['iz', 'out of, from inside', 'iz Zagreba (from Zagreb — lived there)'],
          ['bez', 'without', 'bez šećera (without sugar)'],
          ['kod', "at (someone's place)", "kod bake (at grandma's)"],
          ['za', 'for (genitive use)', 'za tjedan dana (in a week)'],
          ['s/sa', 'from (off of)', 's mora (from the sea)'],
          ['prema', 'toward, according to', 'prema gradu (toward the city)'],
        ],
      },
      {
        type: 'quiz',
        q: "Complete the sentence: 'Idem _____ (from Zagreb).'",
        options: ['iz Zagreb', 'u Zagreb', 'iz Zagreba', 'od Zagreb'],
        correct: 2,
        explanation:
          "'Iz' (from inside a place) takes the genitive. Zagreb → Zagreba (masculine genitive, -a ending). So: 'Idem iz Zagreba.' Note: 'od Zagreba' would mean 'away from Zagreb' (like a distance), while 'iz Zagreba' means 'from Zagreb' where you lived or were.",
      },
      {
        type: 'quiz',
        q: 'Which sentence correctly uses nema?',
        options: [
          'Nema kava u kuhinji.',
          'Nema kavu u kuhinji.',
          'Nema kave u kuhinji.',
          'Nema kavi u kuhinji.',
        ],
        correct: 2,
        explanation:
          "'Nema' always takes the genitive: kava → kave. 'Nema kave u kuhinji' = There's no coffee in the kitchen. This pattern (nema + genitive) is used thousands of times a day in Croatian conversation.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners keep the nominative after 'nema': 'Nema voda' — absence takes the genitive, 'Nema vode'. Second, they put an accusative after quantity words: 'puno ljudi' is right, but 'puno knjige' is not — a quantity is followed by the genitive plural, 'puno knjiga'. Third, 'iz' and 'od' get swapped after 'from': you are 'iz Zagreba' (out of the city), but a letter is 'od prijatelja' (from a person); both take the genitive, only the preposition changes.",
        highlight: "absence takes the genitive, 'Nema vode'",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'To je auto mog ___.' (my brother's car)",
            options: ['brat', 'bratu', 'bratom', 'brata'],
            correct: 3,
            explanation:
              'The owner goes into the genitive: brat → brata. bratu is dative, bratom instrumental.',
          },
          {
            q: "Complete: 'Nema ___ u boci.' (There is no wine in the bottle.)",
            options: ['vino', 'vinu', 'vina', 'vinom'],
            correct: 2,
            explanation: 'nema always takes the genitive: vino → vina.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Kupio sam puno knjige.',
              'Kupio sam puno knjiga.',
              'Kupio sam puno knjigu.',
              'Kupio sam puno knjigama.',
            ],
            correct: 1,
            explanation:
              'A quantity word is followed by the genitive plural: puno knjiga. knjige is singular and knjigu accusative.',
          },
          {
            q: "Spot the error: 'Idem kod prijatelj poslije posla.'",
            options: [
              'prijatelj should be prijatelja — kod takes the genitive',
              'kod should be u',
              'poslije should be nakon',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              "kod (at someone's place) governs the genitive: kod prijatelja. poslije posla is already correct — poslije also takes the genitive.",
          },
          {
            q: "What does 'Nema ga' mean?",
            options: [
              'He has nothing',
              'He is not here / there is no sign of him',
              'He does not have it',
              'It is not his',
            ],
            correct: 1,
            explanation:
              'nema + genitive pronoun expresses absence: nema ga = he is not here. ga is the genitive/accusative clitic of on.',
          },
          {
            q: "Complete: 'Putujemo od Zagreba ___ Splita.'",
            options: ['u', 'na', 'za', 'do'],
            correct: 3,
            explanation:
              'od … do (from … to) both take the genitive: od Zagreba do Splita. u and na would need the accusative.',
          },
          {
            q: "Which preposition means 'from' for a city you lived in?",
            options: ['od', 's', 'iz', 'do'],
            correct: 2,
            explanation:
              'iz + genitive is from inside an enclosed place: iz Zagreba. od is for people and time, s for off a surface.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Genitive — Four Core Uses',
        points: [
          "Possession: ključ Ane (Ana's key), centar grada (city centre)",
          "Nema + genitive: Nema kave. (There's no coffee.)",
          'After quantity words: mnogo prijatelja, malo vremena',
          'After numbers 5+: pet boca, deset dana',
          'After prepositions: od, do, iz, bez, kod, prema, s/sa',
          'Endings: fem. -e, masc./neut. -a (sg.)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 17: Dative & Locative Cases
  // ─────────────────────────────────────────────────────────
  {
    id: 'dative-locative',
    title: 'Dative & Locative Cases',
    subtitle: 'Giving and telling vs staying in place',
    icon: '📍',
    level: 'B1',
    duration: '~6 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Two Related Cases',
        body: "Dative and locative share the same endings in modern Croatian — yet they answer different questions and are used in completely different contexts. Dative = the recipient ('to whom?'); Locative = where something is, always with a preposition. Mastering them together is the most efficient approach.",
        icon: '📍',
      },
      {
        type: 'rule',
        title: 'Dative: The Recipient Case',
        body: "Dative answers 'komu? čemu?' (to whom? for what?). It's the case of the indirect object — the person who receives the action. 'I gave the book to Ana' — Ana is in dative. Key verbs that take dative: dati (give), reći (tell), poslati (send), pomoći (help), zahvaliti (thank), pokazati (show).",
        highlight: 'komu? čemu? → dative',
      },
      {
        type: 'table',
        title: 'Dative & Locative Endings',
        headers: ['Gender', 'Nominative', 'Dative/Locative', 'Example'],
        rows: [
          ['Feminine (-a)', 'žena', '-i', 'ženi (to/about the woman)'],
          ['Feminine (-a)', 'knjiga', '-i', 'knjizi (to/about the book)'],
          ['Masculine', 'brat', '-u', 'bratu (to/about the brother)'],
          ['Masculine', 'grad', '-u', 'gradu (to/in the city)'],
          ['Neuter (-o)', 'more', '-u', 'moru (to/about the sea)'],
          ['Neuter (-e)', 'polje', '-u', 'polju (to/about the field)'],
        ],
      },
      {
        type: 'example',
        title: 'Dative — Giving & Telling',
        items: [
          {
            hr: 'Dao sam knjigu Ani.',
            en: 'I gave the book to Ana.',
            note: 'Ana → Ani (fem. dat.)',
          },
          {
            hr: 'Rekla je sestri.',
            en: 'She told her sister.',
            note: 'sestra → sestri (fem. dat.)',
          },
          {
            hr: 'Pišem prijatelju.',
            en: "I'm writing to my friend.",
            note: 'prijatelj → prijatelju (masc. dat.)',
          },
          { hr: 'Pomozi mi!', en: 'Help me!', note: 'ja → mi (dative pronoun)' },
        ],
      },
      {
        type: 'rule',
        title: 'Locative: Location — Always with a Preposition',
        body: "The locative ONLY appears after a preposition — it never stands alone. The prepositions that take locative: u (in), na (on/at), o (about), po (around/throughout), pri (near/at). Locative answers 'gdje?' (where?) for static location. Remember the contrast: u Zagreb (acc. = going to) vs u Zagrebu (loc. = being in).",
        highlight: 'u, na, o, po, pri + locative = location',
      },
      {
        type: 'example',
        title: 'Locative — Static Locations',
        items: [
          {
            hr: 'Živim u Zagrebu.',
            en: 'I live in Zagreb.',
            note: 'Zagreb → Zagrebu (masc. loc.)',
          },
          {
            hr: 'Knjiga je na stolu.',
            en: 'The book is on the table.',
            note: 'stol → stolu (masc. loc.)',
          },
          {
            hr: 'Pričamo o moru.',
            en: "We're talking about the sea.",
            note: 'more → moru (neut. loc.)',
          },
          {
            hr: 'Šetamo po gradu.',
            en: "We're walking around the city.",
            note: 'grad → gradu (masc. loc.)',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Dative Pronouns — The Most Common Clitics',
        body: 'In everyday speech, the dative pronouns appear as short unstressed clitics (unaccented forms that glue to the sentence). These are among the most common words in Croatian: mi (to me), ti (to you), mu (to him), joj (to her), nam (to us), vam (to you pl.), im (to them). They follow the second-position rule.',
        highlight: 'mi, ti, mu, joj, nam, vam, im',
      },
      {
        type: 'example',
        title: 'Dative Clitics in Action',
        items: [
          { hr: 'Dao mi je ključ.', en: 'He gave me the key.', note: 'mi = to me (dative clitic)' },
          {
            hr: 'Rekla mu je istinu.',
            en: 'She told him the truth.',
            note: 'mu = to him (dative clitic)',
          },
          {
            hr: 'Pišu nam svaki tjedan.',
            en: 'They write to us every week.',
            note: 'nam = to us (dative clitic)',
          },
          { hr: 'Zahvaljujem ti.', en: 'I thank you.', note: 'ti = to you (dative clitic)' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Poklonio je majci cvijeće za rođendan.',
            en: 'He gave his mother flowers for her birthday.',
            note: 'majka → majci (dative, with the k → c change)',
          },
          {
            hr: 'Radujem se ljetu i moru.',
            en: 'I am looking forward to summer and the sea.',
            note: 'radovati se + dative: ljetu, moru',
          },
          {
            hr: 'Pomogla sam susjedi nositi torbe.',
            en: 'I helped the neighbour (f.) carry her bags.',
            note: 'pomoći + dative: susjeda → susjedi',
          },
          {
            hr: 'Na Trgu bana Jelačića uvijek je gužva.',
            en: 'On Ban Jelačić Square there is always a crowd.',
            note: 'na + locative: Trgu',
          },
          {
            hr: 'Živim u Rijeci, ali radim u Opatiji.',
            en: 'I live in Rijeka but work in Opatija.',
            note: 'u + locative: Rijeci (k → c), Opatiji',
          },
          { hr: 'Vjeruješ li mu?', en: 'Do you trust him?', note: 'vjerovati + dative clitic mu' },
          {
            hr: 'Razgovarali smo o filmu i o glazbi.',
            en: 'We talked about the film and about music.',
            note: 'o + locative: filmu, glazbi',
          },
          {
            hr: 'Ključ je u ladici, a ne na polici.',
            en: 'The key is in the drawer, not on the shelf.',
            note: 'u ladici, na polici — locative',
          },
        ],
      },
      {
        type: 'quiz',
        q: "How do you say 'I'm going to the city'? (direction — motion)",
        options: ['Idem u gradu.', 'Idem u grad.', 'Idem u gradom.', 'Idem po gradu.'],
        correct: 1,
        explanation:
          "'Idem u grad.' — Direction uses u + accusative. Masculine inanimate 'grad' takes no change in accusative: u grad. 'U gradu' (locative) means 'in the city' (static location). 'Po gradu' (locative) means 'around the city' (movement throughout, different meaning).",
      },
      {
        type: 'quiz',
        q: 'Which sentence correctly uses the dative?',
        options: [
          'Poslao sam pismo Ana.',
          'Poslao sam pismo Anu.',
          'Poslao sam pismo Ani.',
          'Poslao sam pismo Ane.',
        ],
        correct: 2,
        explanation:
          "'Poslao sam pismo Ani.' — Ana is the recipient (to whom?), so she takes the dative: Ana → Ani (feminine dative, -a → -i). 'Pismo' (letter) is the direct object in accusative (neuter, no change). 'Anu' would be accusative (direct object), 'Ane' genitive (of Ana).",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners put the receiver in the accusative: 'Dao sam knjigu sestru' — the one who receives is dative, 'sestri'. Second, the dative-only verbs get an accusative object: 'Pomozi me' — pomoći, vjerovati and radovati se all take the dative, 'Pomozi mi', 'Radujem se odmoru'. Third, the locative is used on its own, 'Zagrebu živim' — the locative never stands alone; it is always 'u Zagrebu', 'na moru', 'o tebi'.",
        highlight: 'the locative never stands alone',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Kupio sam dar ___.' (for my sister — she receives it)",
            options: ['sestra', 'sestru', 'sestri', 'sestre'],
            correct: 2,
            explanation:
              'The receiver is in the dative: sestra → sestri. sestru would make her the thing bought.',
          },
          {
            q: "Complete: 'Radujem se ___.' (I am looking forward to the holiday.)",
            options: ['odmor', 'odmora', 'odmorom', 'odmoru'],
            correct: 3,
            explanation:
              'radovati se governs the dative: odmoru. odmora is genitive, odmorom instrumental.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Pomozi mene!', 'Pomozi me!', 'Pomozi mi!', 'Pomozi ja!'],
            correct: 2,
            explanation:
              'pomoći takes the dative, so the clitic is mi. me and mene are accusative forms.',
          },
          {
            q: "Spot the error: 'Živim u Zagreb već tri godine.'",
            options: [
              'Zagreb should be Zagrebu — living there is locative',
              'već should be još',
              'godine should be godina',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'Static location takes u + locative: u Zagrebu. tri godine is correct — 3 takes the genitive singular.',
          },
          {
            q: "Which case do 'pomoći', 'vjerovati' and 'radovati se' all require?",
            options: ['accusative', 'genitive', 'dative', 'instrumental'],
            correct: 2,
            explanation:
              'All three are dative verbs: pomoći prijatelju, vjerovati tebi, radovati se ljetu.',
          },
          {
            q: "Complete: 'Pričamo o ___.' (about the new film)",
            options: ['novi film', 'novom filmu', 'novog filma', 'novim filmom'],
            correct: 1,
            explanation:
              'o always takes the locative; adjective and noun both change: novom filmu.',
          },
          {
            q: "What is the difference between 'Idem u školu' and 'Jesam u školi'?",
            options: [
              'none — they are interchangeable',
              'the first is going there (accusative), the second being there (locative)',
              'the first is formal',
              'the second is a question',
            ],
            correct: 1,
            explanation:
              'u + accusative marks motion toward; u + locative marks static location. Same preposition, different case, different meaning.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Dative & Locative — Key Differences',
        points: [
          'Dative: indirect object — to whom? (komu?) — no preposition needed',
          'Locative: location — where? (gdje?) — ALWAYS with u, na, o, po, pri',
          'Both share endings: fem. -i, masc./neut. -u',
          'Dative clitics: mi, ti, mu, joj, nam, vam, im',
          'Direction (acc.) vs Location (loc.): u grad vs u gradu',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 18: Instrumental Case
  // ─────────────────────────────────────────────────────────
  {
    id: 'instrumental',
    title: 'Instrumental Case: Means & Accompaniment',
    subtitle: "How you do things, who you're with, and what you are",
    icon: '🔧',
    level: 'B1',
    duration: '~6 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: "Instrumental — The 'By Means Of' Case",
        body: "The instrumental answers 'čime?' (with what?) and 'kime?' (with whom?). It's the case of tools, means, and accompaniment. 'I write with a pen' — pen is instrumental. 'I came with my sister' — sister is instrumental. It's also used after s/sa (with) and several other prepositions, and to describe what you are (profession after biti).",
        icon: '🔧',
      },
      {
        type: 'table',
        title: 'Instrumental Endings',
        headers: ['Gender', 'Nominative', 'Instrumental', 'Example'],
        rows: [
          ['Feminine (-a)', 'žena', '-om', 'ženom (with the woman)'],
          ['Feminine (-a)', 'knjiga', '-om', 'knjigom (with a book)'],
          ['Masculine', 'brat', '-om', 'bratom (with brother)'],
          ['Masculine', 'stol', '-om', 'stolom (with the table)'],
          ['Neuter (-o)', 'more', '-em', 'morem (by/with sea)'],
          ['Neuter (-e)', 'polje', '-em', 'poljem (across the field)'],
        ],
      },
      {
        type: 'rule',
        title: 'Use 1: Means & Instrument',
        body: "When you use a tool or means to do something, put it in the instrumental. No preposition is needed — the ending is enough. 'Writing with a pen' = 'pisati olovkom' (olovka → olovkom). 'Travelling by car' = 'putovati autom'. 'Paying by card' = 'platiti karticom'.",
        highlight: 'tool / means → instrumental, no preposition',
      },
      {
        type: 'example',
        title: 'Means & Instrument — Listen',
        items: [
          {
            hr: 'Pišem olovkom.',
            en: "I'm writing with a pencil.",
            note: 'olovka → olovkom (fem. instr.)',
          },
          { hr: 'Putujem vlakom.', en: 'I travel by train.', note: 'vlak → vlakom (masc. instr.)' },
          {
            hr: 'Jedem vilicom.',
            en: 'I eat with a fork.',
            note: 'vilica → vilicom (fem. instr.)',
          },
          { hr: 'Plati karticom!', en: 'Pay by card!', note: 'kartica → karticom (fem. instr.)' },
        ],
      },
      {
        type: 'rule',
        title: 'Use 2: Accompaniment with s/sa',
        body: "The preposition s/sa (with someone) always takes the instrumental. Use 's' before consonants, 'sa' before s, z, š, ž, and some clusters. 'With Ana' = 's Anom'. 'With my friend' = 's prijateljem'. This is the most common preposition + instrumental combination you'll encounter.",
        highlight: 's/sa + instrumental = with someone',
      },
      {
        type: 'example',
        title: 'Accompaniment — s/sa + Instrumental',
        items: [
          { hr: 'Idem s Anom.', en: "I'm going with Ana.", note: 'Ana → Anom (fem. instr.)' },
          {
            hr: 'Razgovaram s prijateljem.',
            en: "I'm talking with a friend.",
            note: 'prijatelj → prijateljem (masc. instr.)',
          },
          {
            hr: 'Živim sa sestrom.',
            en: 'I live with my sister.',
            note: "sestra → sestrom (fem. instr.); 'sa' before consonant cluster",
          },
          {
            hr: 'Pije kavu s mlijekom.',
            en: 'She drinks coffee with milk.',
            note: 'mlijeko → mlijekom (neut. instr.)',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Svaki dan putujem na posao tramvajem.',
            en: 'Every day I travel to work by tram.',
            note: 'tramvajem — means of travel, no preposition',
          },
          {
            hr: 'Volim šetati gradom s prijateljima.',
            en: 'I like walking around the city with friends.',
            note: 'gradom — through the city; s prijateljima — instrumental plural',
          },
          {
            hr: 'Reži kruh nožem, ne rukama.',
            en: 'Cut the bread with a knife, not with your hands.',
            note: 'nožem, rukama — the tool',
          },
          {
            hr: 'Ide sa sestrom i sa Zoranom na koncert.',
            en: 'She is going to the concert with her sister and with Zoran.',
            note: 'sa before s- and z-',
          },
          {
            hr: 'Nad gradom se skupljaju oblaci.',
            en: 'Clouds are gathering over the city.',
            note: 'nad + instrumental',
          },
          {
            hr: 'Bavim se plivanjem i trčanjem.',
            en: 'I do swimming and running.',
            note: 'baviti se + instrumental',
          },
          {
            hr: 'Postala je liječnicom nakon dugog studija.',
            en: 'She became a doctor after a long course of study.',
            note: 'postati + instrumental for the new role',
          },
          {
            hr: 'Među prijateljima se osjećam kao kod kuće.',
            en: 'Among friends I feel at home.',
            note: 'među + instrumental',
          },
          {
            hr: 'Pišem poruku mobitelom, ne olovkom.',
            en: 'I am writing the message with my phone, not with a pencil.',
            note: 'mobitelom, olovkom — bare instrumental',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Use 3: Profession / Characterization with biti',
        body: "After the verb biti (to be) when stating what someone is by nature — profession, nationality, religion — Croatian often uses the instrumental. 'Ona je liječnicom' (She is a doctor). This is a formal/literary register; colloquially, nominative is also common: 'Ona je liječnik/liječnica.' You will encounter both.",
        highlight: 'biti + profession → instrumental (formal)',
      },
      {
        type: 'table',
        title: 'Key Instrumental Prepositions',
        headers: ['Preposition', 'Meaning', 'Example'],
        rows: [
          ['s / sa', 'with (accompaniment)', 's prijateljem (with a friend)'],
          ['pred', 'in front of', 'pred kućom (in front of the house)'],
          ['za', 'behind, after', 'za uglom (behind the corner)'],
          ['nad', 'above, over', 'nad gradom (above the city)'],
          ['pod', 'under, below', 'pod mostom (under the bridge)'],
          ['među', 'among', 'među prijateljima (among friends)'],
        ],
      },
      {
        type: 'quiz',
        q: "How do you say 'I'm going with my mother'?",
        options: ['Idem s majke.', 'Idem s majku.', 'Idem s majkom.', 'Idem s majki.'],
        correct: 2,
        explanation:
          "'Idem s majkom.' — s/sa (with) + instrumental. Majka (mother) is feminine, instrumental ending -om: majka → majkom. This is the formation pattern for one of Croatian's most common preposition patterns.",
      },
      {
        type: 'quiz',
        q: 'You pay at a restaurant. Which is correct Croatian?',
        options: ['Plaćam kartu.', 'Plaćam karticom.', 'Plaćam kartice.', 'Plaćam kartica.'],
        correct: 1,
        explanation:
          "'Plaćam karticom.' — The means (how you pay) = instrumental. Kartica → karticom. No preposition needed — the -om ending alone indicates the instrument. This pattern (means without a preposition) is a key feature of the instrumental case.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners add 's' to the tool: 'Pišem s olovkom' — a means or instrument takes the bare instrumental, 'Pišem olovkom'; 's' is for company, 's prijateljem'. Second, 'sa' gets used before every noun: it is 's Anom', 's bratom', and 'sa' only before s, š, z, ž — 'sa sestrom', 'sa Zoranom'. Third, the noun stays in the nominative after 's': 's moj brat' must be 's mojim bratom' — the preposition governs the instrumental, adjective included.",
        highlight: 'a means or instrument takes the bare instrumental',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Idem u školu ___.' (by bus)",
            options: ['autobus', 's autobusom', 'autobusom', 'autobusu'],
            correct: 2,
            explanation:
              "Means of travel is the bare instrumental: autobusom. 's autobusom' would mean in the company of a bus.",
          },
          {
            q: "Complete: 'Razgovaram ___.' (with my mother)",
            options: ['s majka', 's majkom', 's majci', 's majku'],
            correct: 1,
            explanation:
              's governs the instrumental: majka → majkom. majci is dative and majku accusative.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Pišem s olovkom.', 'Pišem olovkom.', 'Pišem olovku.', 'Pišem na olovkom.'],
            correct: 1,
            explanation:
              'A tool takes the instrumental with no preposition: olovkom. Adding s turns the pencil into a companion.',
          },
          {
            q: "Spot the error: 'Živim s sestrom u Zagrebu.'",
            options: [
              's should be sa — before s, š, z, ž',
              'sestrom should be sestri',
              'Zagrebu should be Zagreb',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'Before a word beginning with s, š, z or ž the preposition is sa: sa sestrom. The instrumental sestrom is right.',
          },
          {
            q: 'Which verb takes the instrumental without a preposition?',
            options: ['baviti se', 'bojati se', 'radovati se', 'sjećati se'],
            correct: 0,
            explanation:
              'baviti se (to be engaged in) takes the instrumental: bavim se sportom. bojati se and sjećati se take the genitive, radovati se the dative.',
          },
          {
            q: "Complete: 'Ptice lete ___.' (over the city)",
            options: ['nad grad', 'nad gradu', 'nad grada', 'nad gradom'],
            correct: 3,
            explanation:
              'nad (above, over) governs the instrumental for a static position: nad gradom.',
          },
          {
            q: "In 'Postala je učiteljicom', why is 'učiteljicom' instrumental?",
            options: [
              'because it is the direct object',
              'because postati (become) takes the instrumental for the new role',
              'because s is understood',
              'because učiteljica is feminine',
            ],
            correct: 1,
            explanation:
              'postati and, in formal style, biti take the instrumental for a profession or role: postala je učiteljicom.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Instrumental — Three Core Uses',
        points: [
          'Means/tool (no preposition): pisati olovkom, putovati vlakom, platiti karticom',
          's/sa + instrumental = with someone: s Anom, s prijateljem',
          'Other prepositions: pred, nad, pod, za, među + instrumental (između takes the genitive: između stolova)',
          'Profession with biti (formal): Ona je liječnicom.',
          'Endings: fem. -om, masc. -om, neut. -em (soft stems: -om → varies)',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 19: Adjective Agreement
  // ─────────────────────────────────────────────────────────
  {
    id: 'adjective-agreement',
    title: 'Adjective Agreement',
    subtitle: 'Matching adjectives to nouns in gender, number, and case',
    icon: '🎨',
    level: 'A2',
    duration: '~6 min',
    color: '#9333ea',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Adjectives Must Agree',
        body: "In Croatian, adjectives must match the noun they describe in three things: gender (masculine/feminine/neuter), number (singular/plural), and case (nominative, accusative, genitive, etc.). This is called 'agreement'. An adjective alone has no fixed form — it changes to mirror the noun it modifies.",
        icon: '🎨',
      },
      {
        type: 'table',
        title: 'Basic Adjective Endings — Nominative Singular',
        headers: ['Gender', 'Ending', 'Example (big)', 'Example (small)'],
        rows: [
          ['Masculine', '-i / -∅', 'veliki (big)', 'mali (small)'],
          ['Feminine', '-a', 'velika (big)', 'mala (small)'],
          ['Neuter', '-o / -e', 'veliko (big)', 'malo (small)'],
        ],
      },
      {
        type: 'rule',
        title: 'The Agreement Rule',
        body: "Find the gender of the noun. Match the adjective ending to that gender. Simple example: 'big city' = 'veliki grad' (grad = masc. → veliki). 'Big sea' = 'veliko more' (more = neut. → veliko). 'Big woman' = 'velika žena' (žena = fem. → velika). The noun's gender dictates the adjective's ending.",
        highlight: 'noun gender → adjective ending',
      },
      {
        type: 'example',
        title: 'Agreement in Action — Listen',
        items: [
          { hr: 'veliki grad', en: 'big city', note: 'grad = masc. → veliki' },
          { hr: 'lijepa žena', en: 'beautiful woman', note: 'žena = fem. → lijepa' },
          { hr: 'malo dijete', en: 'small child', note: 'dijete = neut. → malo' },
          { hr: 'crni pas', en: 'black dog', note: 'pas = masc. → crni' },
          { hr: 'plava haljina', en: 'blue dress', note: 'haljina = fem. → plava' },
          { hr: 'staro more', en: 'old sea / ancient sea', note: 'more = neut. → staro' },
        ],
      },
      {
        type: 'rule',
        title: 'Adjectives in Cases — Accusative',
        body: "Adjectives also change for case, following the noun they modify. In the accusative: masculine inanimate adjectives don't change ('Vidim veliki grad' — same as nominative). Masculine animate adjectives add -og ('Vidim velikog brata'). Feminine adjectives change -a → -u ('Vidim lijepu ženu'). Neuter stays the same.",
        highlight: 'adjective case follows noun case',
      },
      {
        type: 'table',
        title: 'Adjective Endings — Key Cases',
        headers: ['Case', 'Masc. (inanim.)', 'Masc. (anim.)', 'Feminine', 'Neuter'],
        rows: [
          ['Nominative', 'veliki', 'veliki', 'velika', 'veliko'],
          ['Accusative', 'veliki (no change)', 'velikog', 'veliku', 'veliko (no change)'],
          ['Genitive', 'velikog', 'velikog', 'velike', 'velikog'],
          ['Dative/Loc.', 'velikom', 'velikom', 'velikoj', 'velikom'],
          ['Instrumental', 'velikim', 'velikim', 'velikom', 'velikim'],
        ],
      },
      {
        type: 'example',
        title: 'Adjectives Across Cases — Listen',
        items: [
          {
            hr: 'Vidim veliki grad. (acc.)',
            en: 'I see the big city.',
            note: 'masc. inanim. acc. = no change',
          },
          {
            hr: 'Vidim velikog brata. (acc.)',
            en: 'I see my big brother.',
            note: 'masc. anim. acc. = -og',
          },
          {
            hr: 'Vidim lijepu ženu. (acc.)',
            en: 'I see a beautiful woman.',
            note: 'fem. acc. = -u',
          },
          {
            hr: 'Živim u velikom gradu. (loc.)',
            en: 'I live in a big city.',
            note: 'masc. loc. = -om',
          },
          {
            hr: 'Idem s lijepom ženom. (instr.)',
            en: "I'm going with a beautiful woman.",
            note: 'fem. instr. = -om',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kupila sam crvenu haljinu i crne cipele.',
            en: 'I bought a red dress and black shoes.',
            note: 'crvenu — fem. accusative; crne — fem. plural accusative',
          },
          {
            hr: 'Živimo u staroj kući pored mora.',
            en: 'We live in an old house by the sea.',
            note: 'staroj — fem. locative -oj',
          },
          {
            hr: 'Upoznao sam zanimljivog čovjeka.',
            en: 'I met an interesting man.',
            note: 'zanimljivog — masc. animate accusative -og',
          },
          {
            hr: 'Novi susjedi su jako ljubazni.',
            en: 'The new neighbours are very kind.',
            note: 'novi, ljubazni — masc. plural nominative',
          },
          {
            hr: 'Putujemo starim autom.',
            en: 'We travel in an old car.',
            note: 'starim — masc. instrumental -im',
          },
          {
            hr: 'Nema toplog kruha u pekari.',
            en: 'There is no warm bread at the bakery.',
            note: 'toplog — masc. genitive after nema',
          },
          {
            hr: 'Mlad čovjek čeka ispred banke.',
            en: 'A young man is waiting in front of the bank.',
            note: 'mlad — indefinite (short) form: a young man, not one we already know',
          },
          {
            hr: 'Ovo malo selo ima veliko srce.',
            en: 'This small village has a big heart.',
            note: 'malo, veliko — neuter agreement',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Definite vs Indefinite Adjectives',
        body: "Croatian has two sets of adjective forms: definite (when the noun is specific/known: 'the big city') and indefinite (when it's new/general: 'a big city'). In modern spoken Croatian the distinction is fading — most speakers use definite forms everywhere. But knowing it exists explains why you sometimes see shorter forms like 'mlad' instead of 'mladi'.",
        highlight: 'definite: -i | indefinite: shorter (literary)',
      },
      {
        type: 'quiz',
        q: "Fill in the blank: 'To je _____ (beautiful) kuća.'",
        options: ['lijepa', 'lijep', 'lijepo', 'lijepom'],
        correct: 0,
        explanation:
          "'To je lijepa kuća.' — kuća is feminine (ends in -a), nominative (subject position). Feminine nominative adjective ending = -a. So 'lijep' + -a = 'lijepa'. 'Lijep' (no ending) would be indefinite masculine; 'lijepo' is neuter.",
      },
      {
        type: 'quiz',
        q: 'Which sentence has correct adjective agreement?',
        options: [
          'Vidim lijepi ženu.',
          'Vidim lijepa ženu.',
          'Vidim lijepu ženu.',
          'Vidim lijepom ženu.',
        ],
        correct: 2,
        explanation:
          "'Vidim lijepu ženu.' — žena (feminine noun) in accusative = ženu. The adjective must match: feminine accusative = -u ending. So 'lijepa' → 'lijepu'. 'Lijepi' is masculine, 'lijepa' is feminine nominative, 'lijepom' is dative/instrumental feminine.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners fix the adjective in its dictionary form: 'lijepa kuću' — the adjective must follow the noun into every case, so 'lijepu kuću'. Second, the masculine animate accusative gets the inanimate form: 'Vidim stari prijatelj' must be 'Vidim starog prijatelja' — both words take the animate ending. Third, a neuter plural is read as feminine singular: 'sela su lijepa' means the villages are beautiful, not one beautiful woman; the noun decides the ending.",
        highlight: 'the adjective must follow the noun into every case',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Živim u ___ gradu.' (in a big city)",
            options: ['veliki', 'velikom', 'velikog', 'velikim'],
            correct: 1,
            explanation:
              'gradu is locative, so the adjective takes the locative -om: velikom gradu. velikog is genitive, velikim instrumental.',
          },
          {
            q: "Complete: 'Vidim ___ psa.' (I see a black dog.)",
            options: ['crni', 'crna', 'crnog', 'crnom'],
            correct: 2,
            explanation:
              'pas is masculine animate, so both noun and adjective take the animate accusative: crnog psa.',
          },
          {
            q: 'Which sentence has correct agreement?',
            options: [
              'Kupio sam novi auto.',
              'Kupio sam nova auto.',
              'Kupio sam novo auto.',
              'Kupio sam novog auto.',
            ],
            correct: 0,
            explanation:
              'auto is a masculine inanimate noun, so the accusative is unchanged: novi auto. novo would be neuter and novog the animate form.',
          },
          {
            q: "Spot the error: 'Idem s lijepa ženom.'",
            options: [
              'ženom should be ženu',
              'lijepa should be lijepom — instrumental, like the noun',
              's should be sa',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'After s the noun is instrumental (ženom) and the adjective must match: lijepom ženom.',
          },
          {
            q: "What is the difference between 'mlad čovjek' and 'mladi čovjek'?",
            options: [
              'mlad is plural',
              'mladi is feminine',
              'there is none; mlad is a typo',
              'mlad is the indefinite form (a young man), mladi the definite (the young man)',
            ],
            correct: 3,
            explanation:
              'The short form introduces something new or general; the long -i form refers to a known, specific one. In speech the long form dominates, but both are standard.',
          },
          {
            q: "Complete: 'Ove ___ jabuke su iz Slavonije.' (these sweet apples)",
            options: ['slatki', 'slatka', 'slatke', 'slatkim'],
            correct: 2,
            explanation:
              'jabuke is feminine plural nominative, so the adjective ends in -e: slatke jabuke.',
          },
          {
            q: "Which form matches 'more' (sea) in 'Volim ___ more'?",
            options: ['plavi', 'plava', 'plavo', 'plave'],
            correct: 2,
            explanation:
              'more is neuter, and the neuter accusative equals the nominative: plavo more.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Adjective Agreement — The Core Rules',
        points: [
          'Adjectives agree with their noun in gender, number, and case',
          'Nominative: masc. -i, fem. -a, neut. -o/e',
          'Accusative: masc. inanim. = same; masc. anim. -og; fem. -u; neut. = same',
          'Genitive: masc./neut. -og; fem. -e',
          'Dative/Locative: masc./neut. -om; fem. -oj',
          'Instrumental: masc./neut. -im; fem. -om',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 20: C1 — Clitic Ordering Mastery
  // ─────────────────────────────────────────────────────────
  {
    id: 'clitics-advanced',
    title: 'C1: Clitic Ordering Mastery',
    subtitle: 'The exact rule no textbook explains clearly enough',
    icon: '⚡',
    level: 'C1',
    duration: '~8 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The Rule That Separates Learners from Speakers',
        body: 'Clitic placement is the feature of Croatian that most advanced learners still get wrong. Clitics are short, unstressed pronoun/auxiliary forms that cannot start or end a sentence — they must occupy the second position. Master this rule and you will sound genuinely Croatian. Get it wrong and every native speaker will notice.',
        icon: '⚡',
      },
      {
        type: 'rule',
        title: 'The Second-Position Rule',
        body: 'Clitics (sam/si/je/smo/ste/su, bi, mi/ti/mu/joj/nam/vam/im, me/te/ga/je/nas/vas/ih, se) cluster after the first stressed unit of the clause. The first stressed unit can be a single word, a whole noun phrase, or an adverb. After that first unit — the clitic cluster goes, in a fixed internal order.',
        highlight: 'first stressed unit → clitic cluster → rest of sentence',
      },
      {
        type: 'rule',
        title: 'The Internal Order of Clitics',
        body: "When multiple clitics appear together, they follow a strict internal order: (1) bi (conditional) → (2) auxiliary (je/sam/si/smo/ste/su) → (3) dative pronoun (mi/ti/mu/joj/nam/vam/im) → (4) accusative pronoun (me/te/ga/je/nas/vas/ih) → (5) se/si (reflexive) → (6) je again (if it's the verb 'biti' not auxiliary). Never change this order.",
        highlight: 'bi → aux → dat → acc → se → je',
      },
      {
        type: 'example',
        title: 'Clitic Order — Building Complexity',
        items: [
          {
            hr: 'Dao sam mu ga.',
            en: 'I gave it to him.',
            note: 'sam (aux) → mu (dat.) → ga (acc.) — correct order',
          },
          { hr: 'Rekla mi je.', en: 'She told me.', note: 'mi (dat.) → je (aux) — correct' },
          {
            hr: 'Kupit ću ti ga.',
            en: 'I will buy it for you.',
            note: 'ću (aux) → ti (dat.) → ga (acc.)',
          },
          {
            hr: 'Pokazao bi mi ga.',
            en: 'He would show it to me.',
            note: 'bi (cond.) → mi (dat.) → ga (acc.)',
          },
        ],
      },
      {
        type: 'rule',
        title: 'The First Stressed Unit — What Counts',
        body: "Any of these can be the 'first unit' before the clitic cluster: a single noun, a whole noun phrase with modifiers, an adverb, a conjunction + noun. Examples: 'Marija je pjevala' (Marija = first unit), 'Moja stara prijateljica mi je rekla' (Moja stara prijateljica = entire noun phrase = first unit). The clitics follow whatever comes first.",
        highlight: 'entire first phrase → then clitics',
      },
      {
        type: 'example',
        title: 'First Unit Variations — Listen',
        items: [
          {
            hr: 'Marija mi je to rekla.',
            en: 'Marija told me that.',
            note: "'Marija' is the first unit; mi + je follow",
          },
          {
            hr: 'Moja stara prijateljica mi je to rekla.',
            en: 'My old friend told me that.',
            note: 'entire NP is first unit; mi + je follow',
          },
          {
            hr: 'Jučer mi je rekla.',
            en: 'She told me yesterday.',
            note: "'Jučer' (adverb) = first unit; mi + je follow",
          },
          {
            hr: 'Kad mi je to rekla...',
            en: 'When she told me that...',
            note: "'Kad' = first unit in subclause",
          },
        ],
      },
      {
        type: 'rule',
        title: "The 'je' Problem — Auxiliary vs Verb",
        body: "The clitic 'je' does double duty: it's both the 3rd person singular past auxiliary AND the present tense of 'biti' (to be). When 'je' means 'is' (not an auxiliary), it comes LAST in the clitic cluster, after all other clitics. When it's the past auxiliary (helping verb), it follows its normal slot. This is the subtlest rule in Croatian.",
        highlight: 'je (aux.) = early slot | je (= is) = last',
      },
      {
        type: 'example',
        title: "The Double 'je' — The Hardest Distinction",
        items: [
          {
            hr: 'Dao mu je.',
            en: 'He gave it to him.',
            note: 'je = past auxiliary (is in aux slot)',
          },
          {
            hr: 'Dao mu ga je.',
            en: "He gave it to him. (explicit 'it')",
            note: 'je = past auxiliary; it sits LAST in the cluster, after ga',
          },
          { hr: 'Rekla mu je.', en: 'She told him.', note: 'je = aux (she has told)' },
          {
            hr: 'To mu je rekla.',
            en: 'She told him that.',
            note: 'je = aux, to = object before cluster',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Da mi ga je barem rekao na vrijeme, sve bi bilo drukčije.',
            en: 'If only he had told me it in time, everything would have been different.',
            note: 'da → mi (dat.) → ga (acc.) → je (aux) — the full cluster after the conjunction',
          },
          {
            hr: 'Zbog toga što se nije javila, zabrinuo sam se.',
            en: 'Because she did not get in touch, I got worried.',
            note: 'se follows što at once; nije is a stressed word, not a clitic',
          },
          {
            hr: 'Bi li mi se isplatilo čekati?',
            en: 'Would it be worth my while to wait?',
            note: 'bi → li → mi (dat.) → se',
          },
          {
            hr: 'Ta se stara kuća na brijegu prodala u tjedan dana.',
            en: 'That old house on the hill sold within a week.',
            note: 'se after the first stressed word, splitting the noun phrase',
          },
          {
            hr: 'Sjećam ga se kao da je bilo jučer.',
            en: 'I remember him as if it were yesterday.',
            note: 'ga → se; sjećati se governs the genitive',
          },
          {
            hr: 'Nisu mu ih htjeli dati.',
            en: 'They did not want to give them to him.',
            note: 'nisu (stressed) → mu → ih',
          },
          {
            hr: 'Ona ti ga je, koliko znam, već vratila.',
            en: 'She has, as far as I know, already returned it to you.',
            note: 'ti → ga → je, then the parenthetical',
          },
        ],
      },
      {
        type: 'quiz',
        q: "What is the correct clitic order in: 'She gave it to me' (ona + dat. mi + acc. ga + aux je)?",
        options: [
          'Ona je mi ga dala.',
          'Ona ga mi je dala.',
          'Ona mi ga je dala.',
          'Ona dala je mi ga.',
        ],
        correct: 2,
        explanation:
          "'Ona mi ga je dala.' — Order: ona (first unit) → mi (dative) → ga (accusative) → je (auxiliary) → dala (participle). The rule: auxiliary comes after dative and accusative pronouns. 'Ona je mi ga dala' is wrong — je cannot precede mi/ga.",
      },
      {
        type: 'quiz',
        q: "Where does the clitic cluster go in 'My older sister told me'?",
        options: [
          'Mi je moja starija sestra rekla.',
          'Moja starija sestra mi je rekla.',
          'Moja mi je starija sestra rekla.',
          'Rekla mi je moja starija sestra.',
        ],
        correct: 1,
        explanation:
          "'Moja starija sestra mi je rekla.' — The entire noun phrase 'Moja starija sestra' is the first stressed unit. The clitic cluster (mi je) follows immediately after the complete NP. This is the second-position rule applied to a multi-word first unit.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "At C1 the errors are subtle. First, 'je' is placed before the pronouns like sam or si: 'Ona je mi ga dala' — the third-person je goes LAST, 'Ona mi ga je dala', while 'Ja sam mu ga dao' keeps sam first. Second, the cluster drifts inside a subordinate clause: 'Rekla je da će ga mi poslati' — the order holds in every clause, 'da će mi ga poslati'. Third, 'li' is treated as a clitic that can follow others: 'Je mi li rekao?' — li is always the first element after the verb, 'Je li mi rekao?'.",
        highlight: 'the third-person je goes LAST',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Ona ___ dala.' (she gave it (m.) to me — mi, ga, je)",
            options: ['je mi ga', 'mi ga je', 'mi je ga', 'ga mi je'],
            correct: 1,
            explanation:
              'Dative → accusative → je: Ona mi ga je dala. The third-person auxiliary closes the cluster.',
          },
          {
            q: "Complete: 'Ja ___ dao.' (I gave it (m.) to him — sam, mu, ga)",
            options: ['mu ga sam', 'mu sam ga', 'ga sam mu', 'sam mu ga'],
            correct: 3,
            explanation: 'Unlike je, the auxiliary sam opens the cluster: sam → mu → ga.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Bi li mi se isplatilo?',
              'Li bi mi se isplatilo?',
              'Bi mi li se isplatilo?',
              'Bi li se mi isplatilo?',
            ],
            correct: 0,
            explanation:
              'li comes immediately after the first stressed word, then dative mi, then se: Bi li mi se isplatilo?',
          },
          {
            q: "Spot the error: 'Rekla je da će ga mi poslati sutra.'",
            options: [
              'će should be hoće',
              'ga mi should be mi ga — dative before accusative',
              'poslati should be pošalje',
              'nothing is wrong',
            ],
            correct: 1,
            explanation: 'The slot order is fixed in every clause: će → mi (dat.) → ga (acc.).',
          },
          {
            q: "Why is 'Moja mi je sestra rekla' grammatical although 'moja sestra' is one phrase?",
            options: [
              'it is not — the sentence is wrong',
              'because mi je is not a clitic cluster',
              'because the clitics may follow the first stressed WORD, splitting the phrase',
              'because moja is a verb',
            ],
            correct: 2,
            explanation:
              'Second position can be after the first stressed word or after the first whole phrase; both placements are standard.',
          },
          {
            q: "Complete: 'Sjećaš ___?' (do you remember him — ga, se, li)",
            options: ['li ga se', 'ga se li', 'se ga li', 'li se ga'],
            correct: 0,
            explanation: 'li is first, then the pronoun ga, then se: Sjećaš li ga se?',
          },
          {
            q: "In 'Nisu mu ih htjeli dati', why does 'nisu' come first?",
            options: [
              'it is a clitic in slot one',
              'it is a question particle',
              'it is the participle',
              'it is a stressed negative form, so it is not a clitic and can open the clause',
            ],
            correct: 3,
            explanation:
              'The negated forms of biti (nisam, nisu, nije) carry stress, so they can stand first and the clitics follow them.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Clitic Mastery — The Complete Rules',
        points: [
          'Clitics occupy second position — after the first stressed unit',
          'Internal order: bi → aux (je/sam...) → dative (mi/ti/mu...) → accusative (me/ga...) → se → je (verb)',
          'First unit can be any phrase — a word, NP, or adverb',
          "je as auxiliary: normal slot | je meaning 'is': always last",
          'Never place clitics at the start or end of a clause',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 21: C1 — Advanced Verbal Nouns & Participles
  // ─────────────────────────────────────────────────────────
  {
    id: 'verbal-nouns',
    title: 'C1: Verbal Nouns & Participles',
    subtitle: 'Turning verbs into nouns and adjectives — formal and literary Croatian',
    icon: '📖',
    level: 'C1',
    duration: '~8 min',
    color: '#1e3a8a',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Beyond Conjugated Verbs',
        body: 'At C1 level, Croatian deploys a rich system of non-finite verb forms: verbal nouns (glagolske imenice) that turn verbs into nouns, and participles (glagolski pridjevi) that turn verbs into adjectives. These forms are essential in formal writing, news media, legal texts, and academic Croatian — and they mark fluency that no textbook exercises have yet trained.',
        icon: '📖',
      },
      {
        type: 'rule',
        title: 'Verbal Nouns (Glagolske Imenice)',
        body: "Verbal nouns are formed from the verb stem + -nje or -će. They behave exactly like regular nouns (they decline through all 7 cases) but carry verbal meaning. 'Pisati' (to write) → 'pisanje' (writing, the act of writing). 'Učiti' (to learn) → 'učenje' (learning). These are neuter nouns and extremely common in formal registers.",
        highlight: 'verb stem + -nje / -će = verbal noun (neuter)',
      },
      {
        type: 'table',
        title: 'Common Verbal Noun Formations',
        headers: ['Verb', 'Verbal Noun', 'English', 'Example'],
        rows: [
          ['pisati', 'pisanje', 'writing', 'Pisanje je vještina. (Writing is a skill.)'],
          ['učiti', 'učenje', 'learning', 'Učenje jezika traje. (Language learning takes time.)'],
          ['čitati', 'čitanje', 'reading', 'Volim čitanje. (I love reading.)'],
          ['pjevati', 'pjevanje', 'singing', 'Pjevanje je terapija. (Singing is therapy.)'],
          [
            'putovati',
            'putovanje',
            'travelling',
            'Putovanje širi horizonte. (Travel broadens horizons.)',
          ],
          ['misliti', 'mišljenje', 'thinking/opinion', 'Po mom mišljenju... (In my opinion...)'],
          ['odlučiti', 'odlučivanje', 'deciding', 'Odlučivanje je teško. (Deciding is hard.)'],
        ],
      },
      {
        type: 'rule',
        title: 'Active Participle (Glagolski Pridjev Radni)',
        body: "The active participle (also called past active participle) is the form used to build the past tense in Croatian — it's the form you already know: 'pisao/pisala/pisalo' (wrote). It declines as an adjective. But it also appears independently as an adjective: 'čovjek koji je pao' can become 'pali čovjek' (the fallen man). These forms are common in news headlines.",
        highlight: 'pisao/pisala/pisalo = active participle',
      },
      {
        type: 'rule',
        title: 'Passive Participle (Glagolski Pridjev Trpni)',
        body: "The passive participle is formed from the verb stem + -n/-na/-no or -t/-ta/-to. It means 'having been done to'. 'Napisati' → 'napisan/napisana/napisano' (written). 'Otvoriti' → 'otvoren/otvorena/otvoreno' (opened). Used to form passive sentences: 'Knjiga je napisana.' (The book has been written / was written.) Critical in formal and media Croatian.",
        highlight: 'stem + -n/-t = passive participle (was/been done)',
      },
      {
        type: 'example',
        title: 'Passive Participle in Context — Listen',
        items: [
          {
            hr: 'Knjiga je napisana.',
            en: 'The book has been written.',
            note: 'napisati → napisana (fem. passive part.)',
          },
          {
            hr: 'Vrata su otvorena.',
            en: 'The doors are open(ed).',
            note: 'otvoriti → otvorena (pl. passive part.)',
          },
          {
            hr: 'Odluka je donesena.',
            en: 'The decision has been made.',
            note: 'donijeti → donesena (formal news register)',
          },
          {
            hr: 'Sporazum je potpisan.',
            en: 'The agreement has been signed.',
            note: 'potpisati → potpisan (media/legal)',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Adverbial Participle (Glagolski Prilog)',
        body: "Croatian has two adverbial participles: present (while doing) and past (having done). Present adverbial: 'idući' (while going / going, he...), 'govoreći' (while speaking). Past adverbial: 'otišavši' (having gone / after going). These are used in formal writing, replacing relative clauses. Literary but important at C1.",
        highlight: 'present: -ći (while doing) | past: -vši (having done)',
      },
      {
        type: 'example',
        title: 'Adverbial Participles — Formal Register',
        items: [
          {
            hr: 'Idući kroz grad, vidio je prijatelja.',
            en: 'While walking through the city, he saw a friend.',
            note: 'idući = present adverbial (simultaneous)',
          },
          {
            hr: 'Govoreći o tome, nasmijao se.',
            en: 'Speaking about it, he laughed.',
            note: 'govoreći = present adverbial',
          },
          {
            hr: 'Otišavši rano, stigla je prva.',
            en: 'Having left early, she arrived first.',
            note: 'otišavši = past adverbial (sequence)',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Nakon potpisivanja ugovora stranke su nazdravile.',
            en: 'After the signing of the contract the parties raised a toast.',
            note: "potpisivanje — verbal noun replacing 'nakon što su potpisali'",
          },
          {
            hr: 'Zabranjeno je parkiranje ispred ulaza.',
            en: 'Parking in front of the entrance is prohibited.',
            note: 'parkiranje as subject; zabranjeno — passive participle',
          },
          {
            hr: 'Putnici koji čekaju let mogu se odmoriti u novootvorenoj čekaonici.',
            en: 'Passengers waiting for their flight can rest in the newly opened waiting room.',
            note: 'novootvorena — a participle compound used as an adjective',
          },
          {
            hr: 'Došavši kući, shvatio je da je zaboravio ključeve.',
            en: 'Having come home, he realised he had forgotten his keys.',
            note: 'došavši — past adverbial participle',
          },
          {
            hr: 'Rastuća nezaposlenost brine ekonomiste.',
            en: 'Rising unemployment worries economists.',
            note: 'rastuća — present participle used as an adjective',
          },
          {
            hr: 'Čitanje na glas poboljšava izgovor.',
            en: 'Reading aloud improves pronunciation.',
            note: 'čitanje — verbal noun as subject',
          },
          {
            hr: 'Izgubljeni putnik pitao je za put do kolodvora.',
            en: 'The lost traveller asked the way to the station.',
            note: 'izgubljen — passive participle modifying a noun',
          },
          {
            hr: 'Ne razumijevajući pitanje, zamolila je da ga ponove.',
            en: 'Not understanding the question, she asked them to repeat it.',
            note: 'razumijevajući — present adverbial participle',
          },
        ],
      },
      {
        type: 'quiz',
        q: "What is the verbal noun of 'putovati' (to travel)?",
        options: ['putovan', 'putovajući', 'putovanje', 'putovavši'],
        correct: 2,
        explanation:
          "'Putovanje' — the verbal noun is formed by adding -nje to the infinitive stem. Putovati → putova- + -nje = putovanje (travel, travelling). It declines as a neuter noun: putovanje (nom.), putovanju (dat./loc.), putovanjem (instr.), etc.",
      },
      {
        type: 'quiz',
        q: "Formal news Croatian: 'The law was passed.' How would you say this?",
        options: [
          'Zakon je prolazio.',
          'Zakon je prošao.',
          'Zakon je prošan.',
          'Zakon je usvojen.',
        ],
        correct: 3,
        explanation:
          "'Zakon je usvojen.' — In formal/legal Croatian, 'usvojiti' (to adopt/pass [a law]) → 'usvojen' (passive participle). This is the standard media formula. 'Prošao' means passed physically through; 'prošan' is not a standard form. The passive participle 'usvojen' with 'biti' forms the standard passive voice for formal announcements.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners form the verbal noun from the perfective: 'napisanje' — verbal nouns in -nje come almost only from imperfectives, 'pisanje'; the perfective gives a participle, 'napisan'. Second, the adverbial participle is given a subject of its own: 'Došavši kući, ključevi su bili na stolu' — the participle must share the subject of the main clause, otherwise the keys came home. Third, the present participle is used for a completed action: 'Pročitajući knjigu, vratio ju je' — a prior completed action takes -vši, 'Pročitavši knjigu'.",
        highlight: 'the participle must share the subject of the main clause',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: '___ jezika zahtijeva strpljenje.' (the learning of a language)",
            options: ['Učeći', 'Naučenje', 'Učenje', 'Naučivši'],
            correct: 2,
            explanation:
              'The verbal noun from the imperfective učiti is učenje. Učeći is a participle and naučenje is not a standard form.',
          },
          {
            q: "Complete: '___ pismo, otišao je na poštu.' (Having written the letter)",
            options: ['Pišući', 'Napisavši', 'Napisanje', 'Napisan'],
            correct: 1,
            explanation:
              'A completed prior action takes the past adverbial participle: napisavši. Pišući would mean while writing.',
          },
          {
            q: 'Which sentence uses the adverbial participle correctly?',
            options: [
              'Vraćajući se kući, kiša je počela padati.',
              'Vraćajući se kući, vidio sam nesreću.',
              'Vraćajući se kući, autobus je zakasnio.',
              'Vraćajući se kući, ključevi su nestali.',
            ],
            correct: 1,
            explanation:
              'Only in the second sentence is the one returning home also the subject of the main clause (I). In the others the rain, the bus or the keys would be coming home.',
          },
          {
            q: "Spot the error: 'Pročitajući roman, napisala je osvrt.'",
            options: [
              'Pročitajući should be Pročitavši — a completed prior action takes -vši',
              'roman should be romana',
              'osvrt should be osvrta',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'The review came after the reading was finished, so the past adverbial participle is needed: Pročitavši roman.',
          },
          {
            q: "Which form compresses 'čovjek koji je pao' into two words?",
            options: ['padajući čovjek', 'pali čovjek', 'padanje čovjeka', 'pavši čovjek'],
            correct: 1,
            explanation:
              'The active participle used as an adjective: pali čovjek (the fallen man). padajući would be falling, padanje the act of falling.',
          },
          {
            q: "'Vrata su otvorena.' What is 'otvorena'?",
            options: [
              'a verbal noun',
              'a present adverbial participle',
              'a passive participle agreeing with vrata',
              'an adjective unrelated to the verb',
            ],
            correct: 2,
            explanation:
              'otvorena is the passive participle of otvoriti in the neuter plural, agreeing with vrata.',
          },
          {
            q: "Complete: 'Molimo tišinu za vrijeme ___.' (during the performance — izvoditi)",
            options: ['izvodeći', 'izvođen', 'izveden', 'izvođenja'],
            correct: 3,
            explanation:
              'za vrijeme takes a genitive noun; the verbal noun of izvoditi is izvođenje → izvođenja.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Verbal Nouns & Participles',
        points: [
          'Verbal nouns: verb + -nje = neuter noun (pisanje, učenje, putovanje)',
          'Active participle: pisao/pisala/pisalo — used in past tense & as adjective',
          "Passive participle: napisan/otvorena — 'was/been done to'; essential in formal Croatian",
          'Present adverbial: -ći (idući, govoreći) = simultaneous action',
          'Past adverbial: -vši (otišavši) = prior completed action',
          'All forms essential for C1 reading: news, law, academic texts',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON 22: C1 — Idiomatic Croatian & Advanced Register
  // ─────────────────────────────────────────────────────────
  {
    id: 'idioms-register',
    title: 'C1: Idiomatic Croatian & Register',
    subtitle: "Proverbs, idioms, formal vs colloquial, and what you won't find in any textbook",
    icon: '🎭',
    level: 'C1',
    duration: '~7 min',
    color: '#be185d',
    bg: '#fdf2f8',
    slides: [
      {
        type: 'intro',
        title: 'The Last 10% of Fluency',
        body: 'Grammar mastery gets you to B2. What takes you to C1 and native-level comfort is knowing: which word a Croatian would actually choose, which phrases mark you as educated vs uneducated, how to shift register from a job interview to a kafić conversation, and which idioms carry cultural weight no dictionary can fully explain.',
        icon: '🎭',
      },
      {
        type: 'rule',
        title: 'Formal vs Informal Register — The Key Signals',
        body: "Croatian has clear register markers. Formal signals: vi-form (plural second person as polite address), longer verbal nouns instead of infinitives, passive voice, no contractions. Informal signals: ti-form, shortened forms ('kak si' instead of 'kako si'), dialects, diminutives everywhere (kavica, kolačić, slatko). Wrong register in the wrong context is socially jarring.",
        highlight: 'Vi (formal) vs Ti (informal) — more than just grammar',
      },
      {
        type: 'table',
        title: 'Register Shifts — The Same Idea, Two Ways',
        headers: ['Formal', 'Informal/Colloquial', 'English'],
        rows: [
          ['Kako ste?', 'Kak si? / Šta ima?', 'How are you?'],
          ['Molim Vas.', 'Molim te. / Molim.', 'Please.'],
          ['Hvala lijepa.', 'Hvala! / Fala!', 'Thank you!'],
          ['Ne razumijem.', 'Ne kapim. / Nisam skužio.', "I don't understand."],
          ['Doviđenja.', 'Ćao! / Pa, ajde!', 'Goodbye!'],
          ['Sjesti', 'Sjediti / Sjest', 'To sit (formal/colloquial)'],
          ['Pisati izvještaj', 'Sklepati izvještaj', 'To write a report (formal/slangy)'],
        ],
      },
      {
        type: 'rule',
        title: "Diminutives — Croatian's Emotional Grammar",
        body: "Croatian speakers use diminutives far more than English speakers. Almost any noun can be made smaller and warmer with suffixes (-ić, -ica, -ce). 'Kava' → 'kavica' (affectionate little coffee). 'Kolač' → 'kolačić' (cookie/little cake). Diminutives signal warmth, informality, affection — even for big things. Getting this right makes you sound genuinely Croatian.",
        highlight: '-ić, -ica, -ce = diminutive (smaller + warmer)',
      },
      {
        type: 'example',
        title: 'Croatian Idioms — With Their Logic',
        items: [
          {
            hr: 'Pala mu je mrak na oči.',
            en: 'He saw red / lost it.',
            note: "Lit: 'Darkness fell on his eyes' — rage",
          },
          {
            hr: 'Čuvaj se kao od vatre.',
            en: 'Avoid it like the plague.',
            note: "Lit: 'Guard yourself as from fire'",
          },
          {
            hr: 'Nije mu sve doma.',
            en: "He's not all there / a bit odd.",
            note: "Lit: 'Not everything is home in him'",
          },
          {
            hr: 'Baciti rukavicu.',
            en: 'To throw down the gauntlet.',
            note: "Lit: 'To throw a glove' — same as English!",
          },
          {
            hr: 'Igrati se vatrom.',
            en: 'To play with fire.',
            note: 'Same as English — fire idioms cross cultures',
          },
          {
            hr: 'Svaka čast!',
            en: 'Well done! / Respect!',
            note: "Lit: 'Every honour!' — extremely common praise",
          },
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Discourse Markers',
        body: "Native speakers pepper their speech with discourse markers that signal thinking, agreement, contrast, and emphasis. These are never taught in textbooks but are instantly heard: 'znači' (so / I mean), 'dakle' (so / therefore — more formal), 'eto' (there you have it / so), 'evo' (here / look), 'pa' (well...), 'baš' (exactly / really), 'ajde' (come on / OK then).",
        highlight: 'znači, dakle, eto, baš, ajde, pa',
      },
      {
        type: 'example',
        title: 'Discourse Markers in Context — Listen',
        items: [
          {
            hr: 'Znači, ti ne znaš.',
            en: "So, you don't know then.",
            note: "znači = 'so' / drawing conclusion",
          },
          {
            hr: 'Eto, tako je.',
            en: "There you have it, that's how it is.",
            note: 'eto = presenting a conclusion',
          },
          { hr: 'Pa, nisam siguran.', en: "Well, I'm not sure.", note: "pa = hedging / 'well'" },
          {
            hr: 'Baš si u pravu.',
            en: "You're exactly right.",
            note: "baš = emphasis ('exactly', 'really')",
          },
          { hr: 'Ajde, idemo!', en: "Come on, let's go!", note: "ajde = encouragement / 'let's'" },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Na sastanku je odmah prešao na stvar.',
            en: 'At the meeting he got straight to the point.',
            note: 'prijeći na stvar — neutral, fine in any register',
          },
          {
            hr: 'Kad sam vidio račun, ostao sam bez teksta.',
            en: 'When I saw the bill, I was speechless.',
            note: 'ostati bez teksta — colloquial, among friends',
          },
          {
            hr: 'Nije bilo strašno, samo sam slomio nogu.',
            en: 'It was not terrible, I only broke my leg.',
            note: 'Croatian understatement — deadpan humour',
          },
          {
            hr: 'Ma pusti, to je sitnica.',
            en: 'Oh, never mind, it is a trifle.',
            note: 'ma + imperative — informal, warm',
          },
          {
            hr: 'Ovaj put ćemo zažmiriti na jedno oko.',
            en: 'This time we will turn a blind eye.',
            note: 'zažmiriti na jedno oko — an idiom usable at work',
          },
          {
            hr: 'Radi kao crv, ali plaća mu je za plakanje.',
            en: 'He works like a dog, but his salary is a joke.',
            note: 'raditi kao crv (like a worm = tirelessly); za plakanje — colloquial',
          },
          {
            hr: 'Ako Vam nije teško, javite mi do petka.',
            en: 'If it is no trouble, let me know by Friday.',
            note: 'ako Vam nije teško — polite softener, formal',
          },
          {
            hr: 'Nemoj se praviti Englez.',
            en: "Don't pretend you don't know what's going on.",
            note: 'praviti se Englez — playful idiom, informal only',
          },
        ],
      },
      {
        type: 'table',
        title: 'Essential Croatian Proverbs — Cultural Keys',
        headers: ['Croatian', 'Literal', 'English Equivalent'],
        rows: [
          ['Bolje ikad nego nikad.', 'Better sometime than never.', 'Better late than never.'],
          [
            'Tko rano rani, dvije sreće grabi.',
            'Who rises early grabs two fortunes.',
            'The early bird catches two worms.',
          ],
          [
            'Svaka ptica svojem jatu leti.',
            'Every bird flies to its own flock.',
            'Birds of a feather flock together.',
          ],
          ['Nema ruže bez trnja.', 'No rose without thorns.', 'No rose without thorns.'],
          [
            'U zdravom tijelu zdrav duh.',
            'In a healthy body, a healthy spirit.',
            'A healthy mind in a healthy body.',
          ],
          [
            'Nije zlato sve što sja.',
            'Not all that glitters is gold.',
            'All that glitters is not gold.',
          ],
          [
            'Sitna kap kamen dubi.',
            'A tiny drop hollows stone.',
            'Constant dripping wears the stone.',
          ],
        ],
      },
      {
        type: 'quiz',
        q: "A Croatian friend says 'Svaka čast!' after you ace a language test. What do they mean?",
        options: [
          'Every piece of honour — a religious blessing',
          'Well done! / Respect! — genuine praise',
          "That's a bit much — mild sarcasm",
          'You should be honoured to receive this',
        ],
        correct: 1,
        explanation:
          "'Svaka čast!' (literally 'every honour') is one of the most common expressions of genuine admiration and respect in Croatian. It's used exactly as English 'Well done!' or 'Respect!' — sincere, warm, and very frequent among friends and family.",
      },
      {
        type: 'quiz',
        q: 'Which sentence sounds more informal/colloquial?',
        options: [
          'Molim Vas, možete li mi reći gdje je kolodvor?',
          'Hej, gdje je kolodvor? Znaš li?',
          'Imate li informacije o lokaciji kolodvora?',
          'Tražim kolodvor — možete li mi pomoći?',
        ],
        correct: 1,
        explanation:
          "'Hej, gdje je kolodvor? Znaš li?' — uses 'hej' (informal greeting), ti-form 'znaš', and direct question structure. Option A uses the polite 'Vi' form. Option C is bureaucratic/formal. Option D is polite neutral. The colloquial marker is the ti-form 'znaš' and the casual opener 'Hej'.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners translate English idioms literally — 'slomiti nogu' for good luck means only a broken leg; a Croatian says 'Sretno!'. Second, colloquial forms are used in the wrong room: 'Kak si, šefe?' to a client sounds like a stand-up routine — 'Kako ste?' is the neutral opening, and the slang can follow if the other side starts it. Third, discourse markers are overused: three 'znači' in one sentence mark a nervous speaker; natives use one, or none.",
        highlight: "a Croatian says 'Sretno!'",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "A friend is about to sit an exam. Complete: '___ na ispitu!'",
            options: ['Slomi nogu', 'Sretno', 'Svaka čast', 'Nema frke'],
            correct: 1,
            explanation:
              "Croatian wishes luck with Sretno. 'Slomi nogu' is a literal broken leg, Svaka čast is praise afterwards, Nema frke means no worries.",
          },
          {
            q: "Complete: 'Prestani okolišati i prijeđi na ___.'",
            options: ['stvar', 'posao', 'riječ', 'put'],
            correct: 0,
            explanation:
              'prijeći na stvar = get to the point. The other nouns do not form this idiom.',
          },
          {
            q: 'Which sentence is appropriate when opening a phone call to a client?',
            options: [
              'Kak si, šefe, šta ima?',
              'Dobar dan, ovdje Ivan Horvat iz tvrtke Adria.',
              'Ej, bog, jesi tu?',
              'Ma gdje si, stari!',
            ],
            correct: 1,
            explanation:
              'A client call opens with a time-of-day greeting and your name. The other three are friend-register and would sound flippant.',
          },
          {
            q: "Spot the problem: in a job interview you say 'Znači, ja sam, znači, radio, znači, u banci.'",
            options: [
              'radio should be radila',
              'the filler znači is overused — it marks nervous, unedited speech',
              'u banci should be u banku',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'One znači is natural; three in a sentence read as stalling. u banci (locative) is correct.',
          },
          {
            q: "What does 'zažmiriti na jedno oko' mean?",
            options: [
              'to wink at someone',
              'to fall asleep',
              'to look carefully',
              'to turn a blind eye',
            ],
            correct: 3,
            explanation:
              'Literally to close one eye — to let something pass. It is neutral enough for a workplace.',
          },
          {
            q: "'Nije bilo strašno, samo sam slomio nogu.' What device is this?",
            options: [
              'understatement — deadpan Croatian humour',
              'hyperbole',
              'a proverb',
              'a formal apology',
            ],
            correct: 0,
            explanation:
              'Playing down a serious event with a straight face is a common Croatian humour register; taking it literally misses the joke.',
          },
          {
            q: 'Which idiom is safe in a FORMAL email?',
            options: [
              'Nemoj se praviti Englez.',
              'Nema frke.',
              'Ako Vam nije teško, javite mi.',
              'Ma pusti, sitnica.',
            ],
            correct: 2,
            explanation:
              'ako Vam nije teško is a polite Vi-register softener. The others are friend-register only.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'C1 Register & Idioms — What Makes You Sound Croatian',
        points: [
          'Vi (formal) vs Ti (informal) — know which context demands which',
          'Discourse markers: znači, eto, pa, baš, ajde — use them, sound natural',
          'Diminutives (-ić/-ica/-ce) signal warmth and informality — use generously',
          "Idioms: 'Svaka čast!' / 'Nije mu sve doma' / 'Pala mu mrak na oči'",
          'Proverbs encode the culture — knowing a handful makes you culturally fluent',
          'Read news, watch HRT, listen to podcasts — register is learned through exposure',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON A1-X1: Greetings & Farewells
  // ─────────────────────────────────────────────────────────
  {
    id: 'greetings-farewells',
    title: 'Greetings & Farewells',
    subtitle: 'Say hello, goodbye, and ask how someone is doing',
    icon: '👋',
    level: 'A1',
    duration: '~4 min',
    color: '#059669',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'Greetings in Croatian',
        body: "Croatian greetings change based on time of day and formality. The key distinction: 'ti' (informal, one person you know) vs 'Vi' (formal or plural). Get this right from day one.",
        icon: '👋',
      },
      {
        type: 'table',
        title: 'Time-of-Day Greetings',
        headers: ['Croatian', 'English', 'Use when'],
        rows: [
          ['Dobro jutro', 'Good morning', 'Until ~11 am'],
          ['Dobar dan', 'Good day', '11 am–6 pm'],
          ['Dobra večer', 'Good evening', 'After 6 pm'],
          ['Laku noć', 'Good night', 'Parting at night'],
          ['Bog', 'Hi / Bye', 'Casual, any time'],
          ['Ćao', 'Hi / Bye (very casual)', 'Friends only'],
        ],
      },
      {
        type: 'rule',
        title: 'Asking "How Are You?"',
        body: "Use 'Kako si?' with friends (ti-form). Use 'Kako ste?' with strangers, elders, or groups (Vi-form). Both mean 'How are you?' — the ending changes, not the meaning.",
        highlight: 'Kako si? / Kako ste?',
      },
      {
        type: 'example',
        title: 'Standard Replies',
        items: [
          { hr: 'Dobro, hvala.', en: 'Good, thanks.', note: 'Most common reply' },
          { hr: 'Odlično!', en: 'Excellent!', note: 'Very positive' },
          { hr: 'Tako-tako.', en: 'So-so.', note: 'Neutral / tired' },
          { hr: 'Moglo bi i bolje.', en: 'Could be better.', note: 'Honest / slightly negative' },
          { hr: 'A ti?', en: 'And you?', note: 'Always return the question' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Dobro jutro, gospođo Horvat! Kako ste?',
            en: 'Good morning, Mrs Horvat! How are you?',
            note: 'Vi-form kako ste with an older neighbour',
          },
          {
            hr: 'Bog, Marko! Kako si?',
            en: 'Hi, Marko! How are you?',
            note: 'bog + kako si — casual, to a friend',
          },
          {
            hr: 'Dobar dan. Ja sam Ivana, drago mi je.',
            en: 'Good afternoon. I am Ivana, nice to meet you.',
            note: 'introduce yourself, then add drago mi je',
          },
          {
            hr: 'Hvala, dobro sam. A Vi?',
            en: 'Thanks, I am well. And you?',
            note: 'return the question with the formal A Vi?',
          },
          {
            hr: 'Laku noć i lijepo spavaj!',
            en: 'Good night and sleep well!',
            note: 'laku noć is a bedtime farewell, never a greeting',
          },
          {
            hr: 'Doviđenja, vidimo se sutra u školi.',
            en: 'Goodbye, see you tomorrow at school.',
            note: 'doviđenja + vidimo se — neutral goodbye',
          },
          {
            hr: 'Čujemo se navečer, bog!',
            en: 'Talk this evening, bye!',
            note: 'čujemo se — the goodbye for phone and text',
          },
          {
            hr: 'Dobra večer, jeste li umorni?',
            en: 'Good evening, are you tired?',
            note: 'dobra večer after 6 pm; Vi-form question',
          },
        ],
      },
      {
        type: 'table',
        title: 'Farewells',
        headers: ['Croatian', 'English', 'Register'],
        rows: [
          ['Doviđenja', 'Goodbye', 'Formal / neutral'],
          ['Bog', 'Bye', 'Casual'],
          ['Ćao', 'Ciao / Bye', 'Informal — borrowed from Italian'],
          ['Vidimo se', 'See you', 'Implies you will meet again'],
          ['Čujemo se', 'Talk soon', 'Phone/text context'],
          ['Sretno!', 'Good luck!', 'Before an event'],
        ],
      },
      {
        type: 'rule',
        title: 'Introducing Yourself',
        body: "Say 'Zovem se [name].' (My name is…) or simply '[Name], drago mi je.' (Nice to meet you). 'Drago mi je' literally means 'It is pleasant to me' — use it every time you meet someone new.",
        highlight: 'Drago mi je.',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: 'Your new teacher enters the room at 9 am. You say:',
        options: ['Ćao!', 'Dobro jutro!', 'Laku noć!'],
        correct: 1,
        explanation:
          "'Dobro jutro' is the correct formal morning greeting. 'Ćao' is too casual for a teacher. 'Laku noć' is only used at night.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners greet the doctor or a grandmother with 'Kako si?' — with anyone you address as Vi the question is 'Kako ste?'. Second, 'Laku noć' gets used as a greeting because it looks like 'good evening': it is only a farewell at bedtime; on arriving after six you say 'Dobra večer'. Third, 'Drago mi je' is dropped from introductions — Croatians expect it, so after your name add it every time.",
        highlight: "with anyone you address as Vi the question is 'Kako ste?'",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "You meet your friend's grandmother for the first time. Complete: 'Dobar dan, kako ___?'",
            options: ['si', 'ste', 'je', 'su'],
            correct: 1,
            explanation:
              "An elder you are meeting formally takes the Vi-form 'ste'. 'si' is for friends; 'je' and 'su' are third person.",
          },
          {
            q: "It is 7 pm and you walk into a shop. Complete: '___, imate li kruha?'",
            options: ['Dobro jutro', 'Laku noć', 'Dobra večer', 'Dobar dan'],
            correct: 2,
            explanation:
              "After about six in the evening the greeting is 'Dobra večer'. 'Laku noć' is said only when parting for the night.",
          },
          {
            q: 'Which exchange is correct?',
            options: [
              '— Kako si? — Dobro, hvala. A ti?',
              '— Kako si? — Dobro, hvala. A Vi?',
              '— Kako ste? — Dobro, hvala. A ti?',
              '— Kako si? — Dobro. Laku noć.',
            ],
            correct: 0,
            explanation:
              "Keep the register consistent: a ti-question is returned with 'A ti?', a Vi-question with 'A Vi?'. Mixing them sounds odd, and 'Laku noć' is not a reply to 'how are you'.",
          },
          {
            q: "Spot what is missing: 'Dobar dan, ja sam Marko.' — and then silence.",
            options: [
              'Nothing — the introduction is complete',
              'Kako se zoveš?',
              'Drago mi je',
              'Laku noć',
            ],
            correct: 2,
            explanation:
              "After giving your name, Croatians say 'Drago mi je' (nice to meet you). Leaving it out reads as cold.",
          },
          {
            q: "What does 'Čujemo se' mean, and when is it used?",
            options: [
              "'See you' — when parting in person",
              "'Talk soon' — on the phone or in messages",
              "'Good luck' — before an exam",
              "'Nice to meet you' — at an introduction",
            ],
            correct: 1,
            explanation:
              "Literally 'we hear each other' — a goodbye for calls and texts. 'Vidimo se' is the in-person version and 'Sretno' is good luck.",
          },
          {
            q: 'Which greeting is the casual one you use with friends at any time of day?',
            options: ['Doviđenja', 'Bog', 'Dobar dan', 'Laku noć'],
            correct: 1,
            explanation:
              "'Bog' works as both hi and bye among friends at any hour. 'Doviđenja' is the neutral goodbye and 'Dobar dan' is tied to daytime.",
          },
          {
            q: "Complete the reply: '— Kako ste? — ___, hvala.'",
            options: ['Dobro', 'Dobar', 'Dobra', 'Dobri'],
            correct: 0,
            explanation:
              "The adverb 'dobro' (well) answers how you are. dobar, dobra and dobri are adjective forms that describe a noun, not a state.",
          },
        ],
      },
      {
        type: 'summary',
        title: 'Greetings — Key Takeaways',
        points: [
          'Dobro jutro / Dobar dan / Dobra večer — match the time of day',
          'Kako si? (informal) vs Kako ste? (formal/plural)',
          'Drago mi je — say it every time you meet someone new',
          'Doviđenja = formal goodbye; Bog/Ćao = casual',
          'Always return the question: A ti? / A Vi?',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON A1-X2: Pronouns & Biti (to be)
  // ─────────────────────────────────────────────────────────
  {
    id: 'pronouns-biti',
    title: 'Pronouns & Biti',
    subtitle: 'Master personal pronouns and the verb "to be"',
    icon: '🔵',
    level: 'A1',
    duration: '~5 min',
    color: '#2563eb',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Building Blocks: Pronouns',
        body: "Before you can say anything in Croatian, you need pronouns. Croatian has all the same pronouns as English — but the verb 'biti' (to be) changes form for each one. Learn both together.",
        icon: '🔵',
      },
      {
        type: 'table',
        title: 'Personal Pronouns',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['ja', 'I', 'Often dropped — verb ending is enough'],
          ['ti', 'you (singular informal)', 'Use with friends, peers, children'],
          ['on', 'he', ''],
          ['ona', 'she', ''],
          ['ono', 'it', 'Also: gender-neutral singular'],
          ['mi', 'we', ''],
          ['vi', 'you (plural or formal sing.)', 'Capital Vi = formal politeness'],
          ['oni / one / ona', 'they (m. / f. / n.)', ''],
        ],
      },
      {
        type: 'table',
        title: 'Biti (to be) — Present Tense',
        headers: ['Pronoun', 'Full form', 'Short clitic', 'Negative'],
        rows: [
          ['ja', 'jesam', 'sam', 'nisam'],
          ['ti', 'jesi', 'si', 'nisi'],
          ['on/ona/ono', 'jest', 'je', 'nije'],
          ['mi', 'jesmo', 'smo', 'nismo'],
          ['vi', 'jeste', 'ste', 'niste'],
          ['oni/one/ona', 'jesu', 'su', 'nisu'],
        ],
      },
      {
        type: 'rule',
        title: 'Full vs Clitic (Short) Form',
        body: "The full form ('jesam') is used for emphasis or yes/no answers. The clitic ('sam') attaches to the second position in a sentence and is used in everyday speech. In practice you will hear the clitic 90% of the time.",
        highlight: 'Jesam li? vs Ja sam tu.',
      },
      {
        type: 'example',
        title: 'Biti in Action',
        items: [
          { hr: 'Ja sam student.', en: 'I am a student.', note: 'Clitic — everyday' },
          { hr: 'On je Hrvat.', en: 'He is Croatian.', note: 'Masculine nationality' },
          { hr: 'Ona nije ovdje.', en: 'She is not here.', note: 'Negation: nije' },
          { hr: 'Mi smo u Zagrebu.', en: 'We are in Zagreb.', note: 'Location' },
          { hr: 'Jeste li gladni?', en: 'Are you hungry?', note: 'Full form in question' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ja sam iz Kanade, a ti?',
            en: 'I am from Canada, and you?',
            note: 'sam — the clitic sits in second position',
          },
          {
            hr: 'Ti si moj najbolji prijatelj.',
            en: 'You are my best friend.',
            note: 'si — the ti-form',
          },
          {
            hr: 'Ona je liječnica u Rijeci.',
            en: 'She is a doctor in Rijeka.',
            note: 'je — third person singular',
          },
          {
            hr: 'Umorni smo nakon posla.',
            en: 'We are tired after work.',
            note: 'pronoun dropped — smo already says who',
          },
          {
            hr: 'Jeste li Vi gospodin Kovač?',
            en: 'Are you Mr Kovač?',
            note: 'full form jeste + li opens a question',
          },
          {
            hr: 'Oni su iz Splita, a mi smo iz Osijeka.',
            en: 'They are from Split and we are from Osijek.',
            note: 'pronouns kept because the two halves contrast',
          },
          {
            hr: 'Nisam gladan, ali sam žedan.',
            en: 'I am not hungry, but I am thirsty.',
            note: 'nisam — negative form; sam again after ali',
          },
          {
            hr: 'Jesi li kod kuće? — Jesam.',
            en: 'Are you at home? — I am.',
            note: 'full form jesam as a one-word answer',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Dropping Pronouns',
        body: "Croatian is a pro-drop language — pronouns are often omitted because the verb ending already tells you who is doing the action. 'Jesam Hrvat.' means 'I am Croatian' — 'ja' (I) is not needed. Add the pronoun only for contrast or emphasis.",
        highlight: 'pro-drop',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: "How do you say 'We are not tired.' in Croatian?",
        options: ['Mi su umorni.', 'Mi nismo umorni.', 'Mi nije umorni.'],
        correct: 1,
        explanation:
          "'Nismo' is the negative plural 'we' form of biti. 'Su' is 3rd person plural (they). 'Nije' is 3rd person singular (he/she/it).",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers put the clitic first: 'Sam student' — the clitic cannot open a sentence, so it is 'Ja sam student' or simply 'Student sam'; leaving the verb out altogether ('Ja student') is not Croatian either. Second, the negative gets built as 'ne' + clitic: 'Ne sam umoran' does not exist — the negatives are single words, 'Nisam umoran'. Third, 'Vi' for one person still takes the plural verb: 'Vi ste umorni', never 'Vi si'.",
        highlight: 'the clitic cannot open a sentence',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Mi ___ iz Zagreba.'",
            options: ['smo', 'sam', 'ste', 'su'],
            correct: 0,
            explanation:
              "'mi' (we) pairs with 'smo'. 'sam' is I, 'ste' is you (plural/formal), 'su' is they.",
          },
          {
            q: "Complete: 'Ona ___ ovdje.' (She is not here.)",
            options: ['ne je', 'nije', 'nisam', 'nisu'],
            correct: 1,
            explanation:
              "The negative of 'je' is the single word 'nije'. 'ne je' does not exist; 'nisam' is I, 'nisu' is they.",
          },
          {
            q: 'Which sentence is correct?',
            options: ['Sam student.', 'Ja student.', 'Student sam.', 'Ja jesam student sam.'],
            correct: 2,
            explanation:
              "The clitic 'sam' must sit in second position: 'Student sam' or 'Ja sam student'. It cannot open the sentence, and the verb cannot be left out.",
          },
          {
            q: "What is wrong with 'Vi si učiteljica'?",
            options: [
              'Vi should be ti',
              'si should be ste — Vi always takes the plural verb',
              'učiteljica should be učitelj',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              "Formal 'Vi' is grammatically plural, so the verb is 'ste' even for one person: 'Vi ste učiteljica'.",
          },
          {
            q: "When would you say 'jesam' instead of 'sam'?",
            options: [
              'always — sam is a mistake',
              'never — jesam is archaic',
              'as a one-word answer or for emphasis',
              'only together with ja',
            ],
            correct: 2,
            explanation:
              "The full form stands alone ('Jesi li umoran? — Jesam.') or carries emphasis. In ordinary sentences the clitic 'sam' is used.",
          },
          {
            q: "Why is 'Umorni smo' a complete sentence without 'mi'?",
            options: [
              'because smo is optional',
              'because the verb form already shows who — Croatian drops the pronoun',
              'because umorni is plural',
              'because it is a question',
            ],
            correct: 1,
            explanation:
              "Croatian is pro-drop: 'smo' can only mean 'we', so 'mi' is added only for contrast or emphasis.",
          },
          {
            q: "Complete: 'Oni ___ studenti.'",
            options: ['je', 'ste', 'smo', 'su'],
            correct: 3,
            explanation: "'oni' (they) takes 'su'. 'je' is he/she, 'ste' you (plural), 'smo' we.",
          },
        ],
      },
      {
        type: 'summary',
        title: 'Pronouns & Biti — Key Takeaways',
        points: [
          '8 pronouns: ja, ti, on, ona, ono, mi, vi, oni/one/ona',
          'Biti has full forms (jesam) and short clitics (sam) — clitics are used in everyday speech',
          'Negation: nisam, nisi, nije, nismo, niste, nisu',
          'Pronouns are often dropped — the verb ending is enough',
          'Capital Vi = formal singular address',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON A1-X3: Numbers & Telling Time
  // ─────────────────────────────────────────────────────────
  {
    id: 'numbers-time',
    title: 'Numbers & Telling Time',
    subtitle: 'Count to 100 and tell the time in Croatian',
    icon: '🕐',
    level: 'A1',
    duration: '~5 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Numbers: The Foundation of Everything',
        body: 'You need numbers for prices, addresses, phone numbers, and time. Croatian numbers 1–10 must be memorised. From 11 onwards, patterns emerge that make them much easier.',
        icon: '🕐',
      },
      {
        type: 'table',
        title: '1–20: Memorise These',
        headers: ['Number', 'Croatian', 'Number', 'Croatian'],
        rows: [
          ['1', 'jedan / jedna / jedno', '11', 'jedanaest'],
          ['2', 'dva / dvije', '12', 'dvanaest'],
          ['3', 'tri', '13', 'trinaest'],
          ['4', 'četiri', '14', 'četrnaest'],
          ['5', 'pet', '15', 'petnaest'],
          ['6', 'šest', '16', 'šesnaest'],
          ['7', 'sedam', '17', 'sedamnaest'],
          ['8', 'osam', '18', 'osamnaest'],
          ['9', 'devet', '19', 'devetnaest'],
          ['10', 'deset', '20', 'dvadeset'],
        ],
      },
      {
        type: 'rule',
        title: 'Pattern: Tens & Hundreds',
        body: "Tens: add '-deset' after the base: tri+deset = trideset (30), četr+deset = četrdeset (40). Compounds: dvadeset jedan (21), trideset pet (35). Hundreds: sto (100), dvjesta (200), tristo (300), četiristo (400), petsto (500), tisuću (1000).",
        highlight: '-deset',
      },
      {
        type: 'rule',
        title: 'Genitive with Numbers',
        body: 'Croatian numbers trigger case changes on nouns. 1 → Nominative (jedan sat). 2/3/4 → Genitive singular (dva sata). 5+ → Genitive plural (pet sati). This is one of the trickiest early patterns — just memorise the three noun forms for common words.',
        highlight: 'jedan sat / dva sata / pet sati',
      },
      {
        type: 'table',
        title: 'Telling Time — Koliko je sati?',
        headers: ['Time', 'Croatian', 'Literal meaning'],
        rows: [
          ['1:00', 'Jedan sat.', 'One hour.'],
          ['2:00', 'Dva sata.', 'Two hours.'],
          ['5:00', 'Pet sati.', 'Five hours.'],
          ['8:15', 'Osam i petnaest.', 'Eight and fifteen.'],
          ['10:30', 'Deset i trideset. / Pola jedanaest.', 'Ten thirty / Half past ten.'],
          ['11:45', 'Dvanaest bez četvrt.', 'Quarter to twelve.'],
          ['12:00', 'Podne.', 'Noon.'],
          ['00:00', 'Ponoć.', 'Midnight.'],
        ],
      },
      {
        type: 'example',
        title: 'Practical Time Phrases',
        items: [
          { hr: 'Koliko je sati?', en: 'What time is it?', note: 'The standard question' },
          { hr: 'Imate li sat?', en: 'Do you have a watch?', note: 'Alternative question' },
          { hr: 'U koliko sati?', en: 'At what time?', note: 'Asking when something happens' },
          { hr: 'U sedam sati.', en: "At seven o'clock.", note: 'Stating a time (u + Genitive)' },
          { hr: 'Kasnim pet minuta.', en: 'I am five minutes late.', note: 'Very useful phrase' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Imam dvadeset pet godina.',
            en: 'I am twenty-five years old.',
            note: '25 ends in 5 → godina (genitive plural)',
          },
          {
            hr: 'Moj broj je devet, osam, sedam, šest.',
            en: 'My number is nine, eight, seven, six.',
            note: 'phone numbers are read digit by digit',
          },
          {
            hr: 'Sastanak je u dva sata.',
            en: "The meeting is at two o'clock.",
            note: 'u dva sata — 2 takes sata',
          },
          {
            hr: 'Vlak dolazi u pola devet.',
            en: 'The train comes at half past eight.',
            note: 'pola devet = 8:30 — half TO nine',
          },
          {
            hr: 'Jedna kava i dva čaja, molim.',
            en: 'One coffee and two teas, please.',
            note: 'jedna agrees with feminine kava; dva čaja',
          },
          {
            hr: 'Sada je petnaest i trideset.',
            en: 'It is now fifteen thirty.',
            note: 'the 24-hour clock is normal in Croatia',
          },
          {
            hr: 'Trgovina radi od osam do dvadeset sati.',
            en: 'The shop is open from eight to twenty hours.',
            note: 'od … do + hours',
          },
          {
            hr: 'Kasnim deset minuta, oprosti!',
            en: 'I am ten minutes late, sorry!',
            note: 'deset minuta — 5+ takes the genitive plural',
          },
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: "How do you say 'quarter to twelve' in Croatian?",
        options: ['Dvanaest i četvrt.', 'Dvanaest bez četvrt.', 'Pola dvanaest.'],
        correct: 1,
        explanation:
          "'Bez četvrt' means 'without a quarter' — subtract 15 minutes from the next hour. 'I četvrt' means 'and a quarter' (quarter past). 'Pola' means 'half past'.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners keep 'jedan' fixed like English 'one': it agrees with the noun — jedan sat, jedna kava, jedno pivo. The second slip is 'pet sata' by analogy with 'dva sata': from five upwards the noun is genitive plural, pet sati. The third is reading 'pola osam' as 8:30 — Croatian counts half TO the next hour, so pola osam is 7:30.",
        highlight: 'pola osam is 7:30',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Sastanak je u ___.' (at three o'clock)",
            options: ['tri sat', 'tri sata', 'tri sati', 'tri satu'],
            correct: 1,
            explanation:
              '2, 3 and 4 take the genitive singular sata. sati belongs to 5 and above; sat is used only after jedan.',
          },
          {
            q: "Complete: '___ pivo, molim.' (One beer, please.)",
            options: ['Jedan', 'Jedna', 'Jedno', 'Jedni'],
            correct: 2,
            explanation:
              'pivo is neuter, so jedan agrees as jedno. jedan is masculine (jedan sat), jedna feminine (jedna kava).',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Imam sedam godina.',
              'Imam sedam godine.',
              'Imam sedam godinu.',
              'Jesam sedam godina.',
            ],
            correct: 0,
            explanation:
              "Age is imati + number + genitive plural: sedam godina. 'godine' is the form after 2–4, 'godinu' is accusative, and Croatian does not say 'I am seven years'.",
          },
          {
            q: "Spot the error: 'Vlak dolazi u pet sata.'",
            options: [
              'u should be na',
              'sata should be sati — 5 and above take the genitive plural',
              'pet should be peti',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'After 5+ the noun is genitive plural: pet sati. sata belongs to 2, 3 and 4 only.',
          },
          {
            q: "What time is 'pola deset'?",
            options: ['10:30', '9:30', '10:00', '9:00'],
            correct: 1,
            explanation:
              'Croatian counts half TO the coming hour: pola deset is half past nine, 9:30.',
          },
          {
            q: "How do you ask 'What time is it?'",
            options: ['Koliko je sati?', 'Koji je sat?', 'Kada je sat?', 'Koliko sati imaš?'],
            correct: 0,
            explanation:
              "'Koliko je sati?' is the fixed question. 'Imate li sat?' asks whether someone has a watch; the other options are not how Croatian asks the time.",
          },
          {
            q: 'Which number never changes its form to agree with the noun?',
            options: ['jedan', 'dva', 'pet', 'both jedan and dva'],
            correct: 2,
            explanation:
              'pet is invariable: pet sati, pet kava, pet piva. jedan agrees fully (jedan/jedna/jedno) and dva has a feminine form, dvije.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Numbers & Time — Key Takeaways',
        points: [
          'Memorise 1–20; tens follow the -deset pattern',
          '1 sat, 2/3/4 sata, 5+ sati — case changes with numbers',
          'Koliko je sati? = What time is it?',
          'Pola + next hour = half past (pola jedanaest = 10:30)',
          'Bez četvrt + next hour = quarter to (bez četvrt dvanaest = 11:45)',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON A1-X4: Basic Questions
  // ─────────────────────────────────────────────────────────
  {
    id: 'basic-questions',
    title: 'Basic Questions',
    subtitle: 'Ask and answer essential everyday questions',
    icon: '❓',
    level: 'A1',
    duration: '~4 min',
    color: '#d97706',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Question Words (Upitne Riječi)',
        body: 'Croatian question words come first in the sentence, just like in English. The verb then takes the question (interrogative) form — in most cases you simply use the regular verb form but with rising intonation, or add the particle "li".',
        icon: '❓',
      },
      {
        type: 'table',
        title: 'The Core Question Words',
        headers: ['Croatian', 'English', 'Example'],
        rows: [
          ['Tko?', 'Who?', 'Tko si ti? (Who are you?)'],
          ['Što?', 'What?', 'Što radiš? (What are you doing?)'],
          ['Gdje?', 'Where?', 'Gdje živiš? (Where do you live?)'],
          ['Kada?', 'When?', 'Kada ideš? (When are you going?)'],
          ['Kako?', 'How?', 'Kako si? (How are you?)'],
          ['Zašto?', 'Why?', 'Zašto kasniš? (Why are you late?)'],
          ['Koliko?', 'How much/many?', 'Koliko košta? (How much does it cost?)'],
          ['Koji / Koja / Koje?', 'Which?', 'Koji razred? (Which class?)'],
        ],
      },
      {
        type: 'rule',
        title: 'Yes/No Questions with "Li"',
        body: "For yes/no questions, Croatian uses the particle 'li' after the verb: 'Govoriš li engleski?' (Do you speak English?). In everyday speech, rising intonation is enough and 'li' is often dropped: 'Govoriš engleski?' is equally natural.",
        highlight: 'Govoriš li engleski?',
      },
      {
        type: 'example',
        title: 'Essential Questions to Memorise',
        items: [
          {
            hr: 'Kako se zoveš?',
            en: 'What is your name? (informal)',
            note: 'Most common way to ask',
          },
          { hr: 'Odakle si?', en: 'Where are you from?', note: 'Odakle = from where' },
          {
            hr: 'Koliko imaš godina?',
            en: 'How old are you?',
            note: 'Literally: How many years do you have?',
          },
          {
            hr: 'Govoriš li hrvatski?',
            en: 'Do you speak Croatian?',
            note: 'Very useful early on',
          },
          { hr: 'Možeš li ponoviti?', en: 'Can you repeat?', note: 'Essential in class' },
          { hr: 'Što znači ...?', en: 'What does ... mean?', note: 'Use constantly when learning' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Tko je ta žena pored prozora?',
            en: 'Who is that woman by the window?',
            note: 'tko — who; the question word comes first',
          },
          { hr: 'Što radiš vikendom?', en: 'What do you do at the weekend?', note: 'što — what' },
          {
            hr: 'Gdje je kolodvor? — Tamo, lijevo.',
            en: 'Where is the station? — There, on the left.',
            note: 'gdje — where; a short answer, no need to repeat the sentence',
          },
          { hr: 'Kada počinje film?', en: 'When does the film start?', note: 'kada — when' },
          {
            hr: 'Koliko košta ova jakna?',
            en: 'How much does this jacket cost?',
            note: 'koliko — how much',
          },
          {
            hr: 'Je li ovo tvoj auto? — Nije, moj je crveni.',
            en: 'Is this your car? — No, mine is the red one.',
            note: 'je li … + nije as the answer',
          },
          {
            hr: 'Imaš li vremena za kavu? — Imam!',
            en: 'Do you have time for a coffee? — I do!',
            note: 'verb + li; answer with the verb alone',
          },
          {
            hr: 'Zašto učiš hrvatski? — Zbog obitelji.',
            en: 'Why are you learning Croatian? — Because of family.',
            note: 'zašto — why; zbog + genitive in the answer',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Answering Yes and No',
        body: "'Da' = yes. 'Ne' = no. For emphasis: 'Da, naravno!' (Yes, of course!). 'Ne, hvala.' (No, thank you.) Croatian also uses 'Nije' (it isn't) and 'Nisam' (I'm not) for negating with 'biti'.",
        highlight: 'Da / Ne',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: "How do you ask 'Where do you live?' in Croatian?",
        options: ['Kada živiš?', 'Gdje živiš?', 'Tko živiš?'],
        correct: 1,
        explanation:
          "'Gdje' = where. 'Kada' = when. 'Tko' = who. The verb 'živiš' is the ti-form of živjeti (to live).",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers put 'li' where 'do' would go: 'Li govoriš hrvatski?' — 'li' always follows the verb, so it is 'Govoriš li hrvatski?'. Second, 'do' gets translated as an extra verb, 'Radiš li ti raditi?' — there is no auxiliary; the verb alone carries the question. Third, learners answer with a whole sentence, 'Da, ja govorim hrvatski' — natural Croatian repeats just the verb: 'Govorim.' or 'Ne govorim.'",
        highlight: "'li' always follows the verb",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: '___ živiš?' (Where do you live?)",
            options: ['Kada', 'Gdje', 'Tko', 'Zašto'],
            correct: 1,
            explanation: 'gdje asks where. kada is when, tko is who, zašto is why.',
          },
          {
            q: "Complete: '___ košta kava?' (How much is the coffee?)",
            options: ['Koji', 'Kako', 'Što', 'Koliko'],
            correct: 3,
            explanation:
              'koliko asks how much or how many. koji is which, kako is how, što is what.',
          },
          {
            q: 'Which yes/no question is correctly formed?',
            options: [
              'Li govoriš hrvatski?',
              'Govoriš li hrvatski?',
              'Govoriš hrvatski li?',
              'Ti govoriš li hrvatski?',
            ],
            correct: 1,
            explanation:
              "'li' sits right after the verb, in second position: Govoriš li hrvatski? It cannot open the sentence, end it, or follow the subject pronoun.",
          },
          {
            q: "Spot the error: 'Tko radiš danas?'",
            options: [
              'radiš should be radi',
              'danas should be sutra',
              'tko should be što — the question is about an action, not a person',
              'nothing is wrong',
            ],
            correct: 2,
            explanation:
              "'What are you doing today?' asks about an action, so the word is što: Što radiš danas? Tko asks who.",
          },
          {
            q: "A friend asks 'Imaš li brata?' What is the natural short answer for yes?",
            options: ['Da, ja imam brata.', 'Imam.', 'Jesam.', 'Da brata.'],
            correct: 1,
            explanation:
              "Croatian answers by repeating the verb: 'Imam.' 'Jesam' answers a biti question. A full sentence is grammatical but sounds like a textbook.",
          },
          {
            q: "Complete: '___ ovo tvoj kaput? — Nije.'",
            options: ['Je li', 'Li je', 'Jesi', 'Što'],
            correct: 0,
            explanation:
              "'Je li' opens a yes/no question with biti, and the answer 'Nije' matches it. 'Li je' reverses the order; 'Jesi' would need ti.",
          },
          {
            q: "What does 'Odakle si?' ask?",
            options: [
              'Where are you going?',
              'Where are you now?',
              'How are you?',
              'Where are you from?',
            ],
            correct: 3,
            explanation:
              "odakle means 'from where'. 'Gdje si?' asks where you are and 'Kamo ideš?' where you are going.",
          },
        ],
      },
      {
        type: 'summary',
        title: 'Questions — Key Takeaways',
        points: [
          'Tko / Što / Gdje / Kada / Kako / Zašto / Koliko / Koji',
          'Yes/no questions: add li after the verb, or use rising intonation',
          'Kako se zoveš? — the most important question when meeting someone',
          'Što znači ...? — use this constantly while learning',
          'Da = yes / Ne = no — simple and universal',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON B1-X1: Motion Verbs — Ići, Dolaziti & Aspect
  // ─────────────────────────────────────────────────────────
  {
    id: 'motion-verbs',
    title: 'Motion Verbs',
    subtitle: 'Master ići, doći, otići and the aspect of movement',
    icon: '🚶',
    level: 'B1',
    duration: '~6 min',
    color: '#b45309',
    bg: '#fef3c7',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Motion Verbs',
        body: 'Croatian has dedicated verb pairs for motion direction — the imperfective describes the act of moving, while the perfective emphasises the completed arrival or departure. Mix them up and you will confuse native speakers.',
        icon: '🚶',
      },
      {
        type: 'table',
        title: 'Core Motion Verb Pairs',
        headers: ['Imperfective', 'Perfective', 'Direction', 'Example (Impf.)'],
        rows: [
          ['ići', 'otići', 'away (going, leaving)', 'Idem kući. (I am going home.)'],
          ['dolaziti', 'doći', 'toward (coming, arriving)', 'Dolazi u 8. (He arrives at 8.)'],
          ['hodati', '—', 'walking (no direction)', 'Hodao sam sat vremena.'],
          ['trčati', 'istrčati', 'running', 'Trčim svaki dan.'],
          ['voziti', 'odvoziti', 'driving', 'Vozim auto na posao.'],
          ['letjeti', 'odletjeti', 'flying', 'Let odlijeće u podne.'],
        ],
      },
      {
        type: 'rule',
        title: 'Ići vs Otići',
        body: "'Idem' (imperfective) = I am going / I go — the act of movement is ongoing or habitual. 'Otišao sam' (perfective) = I left / I went and am now gone — the departure is completed. Use imperfective for schedules and habits; use perfective when the point is that the person is now gone.",
        highlight: 'Idem vs Otišao sam',
      },
      {
        type: 'rule',
        title: 'Dolaziti vs Doći',
        body: "'Dolazi svaki tjedan.' = He comes every week. (Habit → imperfective.) 'Došao je u 8.' = He arrived at 8. (Completed arrival → perfective.) The perfective 'doći' always stresses that arrival is the completed event.",
        highlight: 'Dolazi vs Došao je',
      },
      {
        type: 'table',
        title: 'Present Tense of Ići',
        headers: ['Person', 'Form'],
        rows: [
          ['ja', 'idem'],
          ['ti', 'ideš'],
          ['on/ona/ono', 'ide'],
          ['mi', 'idemo'],
          ['vi', 'idete'],
          ['oni/one/ona', 'idu'],
        ],
      },
      {
        type: 'example',
        title: 'Motion Verbs in Context',
        items: [
          {
            hr: 'Idem u školu.',
            en: 'I am going to school.',
            note: 'Direction expressed by Accusative after u',
          },
          {
            hr: 'Otišao je na posao.',
            en: 'He has gone to work (and left).',
            note: 'Perfective — he is gone',
          },
          {
            hr: 'Dolazi li baka sutra?',
            en: 'Is grandma coming tomorrow?',
            note: 'Future arrangement with imperfective',
          },
          {
            hr: 'Dođi ovamo!',
            en: 'Come here!',
            note: 'Perfective imperative — one completed action',
          },
          {
            hr: 'Ne idi tamo!',
            en: "Don't go there!",
            note: 'Negative imperative — imperfective preferred',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Svaki dan idem na posao biciklom, a danas idem pješice.',
            en: 'Every day I go to work by bike, but today I am walking.',
            note: 'idem for both the habit and the current trip',
          },
          {
            hr: 'Došli su prije sat vremena i već su otišli.',
            en: 'They came an hour ago and have already left.',
            note: 'doći / otići — two completed movements',
          },
          {
            hr: 'Ulazim u dućan, a on izlazi.',
            en: 'I am going into the shop and he is coming out.',
            note: 'u- (in) vs iz- (out), imperfective',
          },
          {
            hr: 'Prešli smo cestu na semaforu.',
            en: 'We crossed the road at the traffic lights.',
            note: 'pre- = across: prijeći / prešli',
          },
          {
            hr: 'Kad dođeš kući, nazovi me.',
            en: 'When you get home, call me.',
            note: 'dođeš — perfective present in a future time clause',
          },
          {
            hr: 'Odlazim sutra ujutro, vraćam se u nedjelju.',
            en: 'I am leaving tomorrow morning and coming back on Sunday.',
            note: 'odlaziti / vraćati se — imperfective for scheduled plans',
          },
          {
            hr: 'Obišli smo cijeli otok za jedan dan.',
            en: 'We went around the whole island in one day.',
            note: 'ob- = around: obići',
          },
          {
            hr: 'Prolazim pored tvoje kuće svako jutro.',
            en: 'I pass by your house every morning.',
            note: 'pro- = past / through: prolaziti',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Direction Cases with Motion Verbs',
        body: "Motion verbs trigger the Accusative case: 'Idem u grad' (I am going to the city — Accusative). Static location uses Locative: 'Ja sam u gradu' (I am in the city). The same preposition 'u' changes the case depending on whether there is motion.",
        highlight: 'u + Accusative (motion) vs u + Locative (static)',
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: "'She left an hour ago.' — which verb form is correct?",
        options: ['Ona ide.', 'Ona odlazi.', 'Ona je otišla.'],
        correct: 2,
        explanation:
          "'Otišla je' (perfective past) = she left and is now gone. 'Ide' = she is going (present, ongoing). 'Odlazi' = she is leaving / she leaves (imperfective, still in the act).",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners use 'otići' for any going: 'Otišao sam u školu svaki dan' — a habit is imperfective, 'Išao sam u školu svaki dan'; otići stresses that someone is now gone. Second, the perfective present is used for a plan: 'Dođem sutra' is not how you announce tomorrow's visit — say 'Dolazim sutra' or 'Doći ću sutra'. Third, motion gets the locative: 'Idem u gradu' — a destination is accusative, 'Idem u grad'; only 'Šetam po gradu' (moving around inside it) takes the locative.",
        highlight: 'otići stresses that someone is now gone',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Marko ___ na posao svaki dan u osam.' (goes)",
            options: ['ode', 'otiđe', 'ide', 'otišao'],
            correct: 2,
            explanation:
              'A daily habit is imperfective: ide. ode is a perfective present and otišao a participle without its auxiliary.',
          },
          {
            q: "Complete: 'Kad ___, javi se.' (when you arrive)",
            options: ['dolaziš', 'dođeš', 'dolazio', 'doći'],
            correct: 1,
            explanation:
              'A future time clause takes the perfective present: kad dođeš. dolaziš would describe the arriving as a process.',
          },
          {
            q: 'Which sentence means she is already gone?',
            options: ['Ona ide.', 'Ona odlazi.', 'Ona je otišla.', 'Ona će otići.'],
            correct: 2,
            explanation:
              'otišla je is the completed departure. ide and odlazi describe the movement in progress; će otići is future.',
          },
          {
            q: "Spot the error: 'Idem u gradu kupiti kruh.'",
            options: [
              'kupiti should be kupim',
              'gradu should be grad — a destination is accusative',
              'kruh should be kruha',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'Motion toward a place takes u + accusative: u grad. u gradu is the locative — already in the city.',
          },
          {
            q: "What does the prefix in 'izaći' add to the meaning of 'ići'?",
            options: ['towards', 'across', 'around', 'out of'],
            correct: 3,
            explanation:
              'iz- means out: izaći = to go out. do- is towards, pre- across, ob- around.',
          },
          {
            q: "Complete: '___ sam most pješice.' (I crossed the bridge)",
            options: ['Prešao', 'Došao', 'Otišao', 'Ušao'],
            correct: 0,
            explanation:
              'pre- gives crossing: prijeći → prešao. došao is arrived, otišao left, ušao entered.',
          },
          {
            q: "Which pair is the correct imperfective / perfective for 'come'?",
            options: ['doći / dolaziti', 'dolaziti / doći', 'ići / doći', 'dolaziti / otići'],
            correct: 1,
            explanation:
              'dolaziti (impf.) describes coming as a process or habit; doći (pf.) is the completed arrival.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Motion Verbs — Key Takeaways',
        points: [
          'ići (impf.) / otići (pf.) — going away; dolaziti (impf.) / doći (pf.) — coming toward',
          'Imperfective = habit, schedule, ongoing; Perfective = completed arrival or departure',
          'Idem (I am going) vs Otišao sam (I went / I have left)',
          'Motion → Accusative after u/na; Static location → Locative after u/na',
          'Negative imperative strongly prefers imperfective: Ne idi! (not Nemoj otići for a general command)',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON B2-X1: Passive Voice
  // ─────────────────────────────────────────────────────────
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    subtitle: 'Master the passive in formal and written Croatian',
    icon: '📝',
    level: 'B2',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'Why Passive Voice Matters at B2',
        body: 'The passive voice is common in news articles, official documents, academic writing, and formal speech. At B2 you need to understand it fluently and use it correctly when writing formally. Croatian has two main passive strategies.',
        icon: '📝',
      },
      {
        type: 'rule',
        title: 'Strategy 1: Biti + Past Passive Participle',
        body: "Form the passive with 'biti' (to be) + the past passive participle (trpni pridjev). The participle agrees with the grammatical subject in gender and number. This is the most explicit passive and is typical of formal/written Croatian.",
        highlight: 'biti + trpni pridjev',
      },
      {
        type: 'table',
        title: 'Past Passive Participle Formation',
        headers: ['Verb', 'Infinitive stem', 'Participle (m./f./n./pl.)', 'Meaning'],
        rows: [
          ['pisati', 'pisa-', 'pisan / pisana / pisano / pisani', 'written'],
          ['graditi', 'gradi-', 'građen / građena / građeno / građeni', 'built'],
          ['otvoriti', 'otvori-', 'otvoren / otvorena / otvoreno / otvoreni', 'opened'],
          ['vidjeti', 'viđ-', 'viđen / viđena / viđeno / viđeni', 'seen'],
          [
            'napraviti',
            'napravi-',
            'napravljen / napravljena / napravljeno / napravljeni',
            'made/done',
          ],
          ['zaključati', 'zaključa-', 'zaključan / zaključana / zaključano / zaključani', 'locked'],
        ],
      },
      {
        type: 'example',
        title: 'Biti Passive — Examples',
        items: [
          {
            hr: 'Roman je napisan 1925.',
            en: 'The novel was written in 1925.',
            note: 'Masc. sing. — napisan',
          },
          {
            hr: 'Kuća je sagrađena od kamena.',
            en: 'The house was built of stone.',
            note: 'Fem. sing. — sagrađena',
          },
          { hr: 'Vrata su otvorena.', en: 'The doors are open(ed).', note: 'Plural — otvorena' },
          {
            hr: 'Pismo je pisano s ljubavlju.',
            en: 'The letter was written with love.',
            note: 'Neuter — pisano',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Strategy 2: Se-Passive (Reflexive Passive)',
        body: "Add the reflexive particle 'se' to an active verb: 'Ovdje se govori engleski.' (English is spoken here.) This construction is very common in everyday speech. It avoids naming an agent and is more natural than the biti-passive in conversation.",
        highlight: 'se + verb',
      },
      {
        type: 'example',
        title: 'Se-Passive — Examples',
        items: [
          {
            hr: 'Ovdje se govori engleski.',
            en: 'English is spoken here.',
            note: '3rd sg. — no agent named',
          },
          {
            hr: 'Stan se iznajmljuje.',
            en: 'The apartment is for rent.',
            note: 'Very common in ads',
          },
          { hr: 'Vino se pije ohlađeno.', en: 'Wine is drunk chilled.', note: 'General truth' },
          {
            hr: 'Prodaju se stanovi.',
            en: 'Apartments are being sold.',
            note: '3rd pl. — subject after verb',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Most je izgrađen prije sto godina i još se koristi.',
            en: 'The bridge was built a hundred years ago and is still in use.',
            note: 'biti-passive (izgrađen) + se-passive (koristi se)',
          },
          {
            hr: 'Ovdje se ne puši.',
            en: 'No smoking here.',
            note: 'se-passive on a notice — no agent',
          },
          {
            hr: 'Osumnjičeni je uhićen sinoć u Zagrebu.',
            en: 'The suspect was arrested last night in Zagreb.',
            note: 'news formula: je uhićen',
          },
          {
            hr: 'Kako se to kaže na hrvatskom?',
            en: 'How do you say that in Croatian?',
            note: 'kaže se — everyday se-passive',
          },
          {
            hr: 'Odluka će biti donesena do kraja mjeseca.',
            en: 'The decision will be made by the end of the month.',
            note: 'future passive: će biti + participle',
          },
          {
            hr: 'U ovoj se pekari kruh peče svako jutro.',
            en: 'In this bakery bread is baked every morning.',
            note: 'se-passive; se in second position',
          },
          {
            hr: 'Zgrada je bila oštećena u potresu.',
            en: 'The building had been damaged in the earthquake.',
            note: 'past passive: je bila + participle',
          },
          {
            hr: 'Ulaz je zabranjen neovlaštenim osobama.',
            en: 'Entry is forbidden to unauthorised persons.',
            note: 'zabranjen + dative — a sign',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Expressing the Agent (by whom)',
        body: "To say who performs the action, use 'od' + Genitive for people: 'Knjiga je napisana od poznatog pisca.' (The book was written by a famous author.) For instruments use 'pomoću' + Genitive: 'Napravljen je pomoću novih alata.' (Made with new tools.)",
        highlight: 'od + Genitiv (agent)',
      },
      {
        type: 'table',
        title: 'Biti Passive vs Se-Passive',
        headers: ['Feature', 'Biti passive', 'Se-passive'],
        rows: [
          ['Style', 'Formal / written', 'Conversational / everyday'],
          ['Agent', 'Can name with od + Gen', 'Never names agent'],
          ['Tense', 'All tenses possible', 'Most natural in present'],
          ['Example', 'Auto je popravljen.', 'Auto se popravio.'],
        ],
      },
      {
        type: 'quiz',
        title: 'Quick Check',
        q: "Which is the correct passive form of 'Gradili su most.' (They were building the bridge.)?",
        options: ['Most gradio je.', 'Most je bio građen.', 'Gradeći most.'],
        correct: 1,
        explanation:
          "'Most je bio građen.' = The bridge was being built — biti (bio) + past passive participle (građen), agreeing with 'most' (masculine singular). The other options are not grammatical passive constructions.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners build the passive with the active participle: 'Kuća je gradila' — the passive needs the passive participle, 'Kuća je građena' or 'Kuća je sagrađena'. Second, the participle is left in the masculine: 'Pisma su napisan' — it agrees with the subject, 'Pisma su napisana'. Third, the se-passive keeps its object in the accusative: 'Prodaje se stanove' — the thing sold becomes the subject, 'Prodaju se stanovi', and the verb agrees with it.",
        highlight: 'the thing sold becomes the subject',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Knjiga je ___ 1930. godine.' (was published)",
            options: ['objavila', 'objavljena', 'objavljen', 'objavljivala'],
            correct: 1,
            explanation:
              'The passive participle agrees with knjiga (feminine): objavljena. objavila is the active participle.',
          },
          {
            q: "Complete: 'Ovdje ___ hrvatski.' (Croatian is spoken here)",
            options: ['govori', 'se govori', 'je govorio', 'se govore'],
            correct: 1,
            explanation:
              'The se-passive: govori se. hrvatski is singular, so se govore is wrong; govori alone would need a subject who speaks.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Prodaje se stanove.',
              'Prodaju se stanovi.',
              'Prodaje se stanovi.',
              'Prodaju stanove se.',
            ],
            correct: 1,
            explanation:
              'In the se-passive the sold items are the subject, in the nominative plural, and the verb agrees: Prodaju se stanovi.',
          },
          {
            q: "Spot the error: 'Vrata je zatvoren.'",
            options: [
              'zatvoren should be zatvorena and je should be su — vrata is plural',
              'vrata should be vratu',
              'je should be jest',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'vrata is a neuter plural noun, so both the auxiliary and the participle are plural: Vrata su zatvorena.',
          },
          {
            q: "Which passive would a shop-window NOTICE use for 'apartment for rent'?",
            options: [
              'Stan je iznajmljen od vlasnika.',
              'Stan iznajmljuje.',
              'Stan se iznajmljuje.',
              'Stan je bio iznajmljivan.',
            ],
            correct: 2,
            explanation:
              'Notices and ads use the se-passive: Stan se iznajmljuje. The first option says it has already been rented out.',
          },
          {
            q: "How is the agent expressed in 'Roman je napisan ___ poznatog pisca'?",
            options: ['s', 'iz', 'za', 'od'],
            correct: 3,
            explanation: 'The agent of a biti-passive is od + genitive: od poznatog pisca.',
          },
          {
            q: "'Odluka je donesena.' What does this news formula mean?",
            options: [
              'The decision is being discussed',
              'The decision was rejected',
              'Someone is deciding now',
              'The decision has been made',
            ],
            correct: 3,
            explanation:
              'donesena is the passive participle of donijeti — the decision has been brought, i.e. made.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Passive Voice — Key Takeaways',
        points: [
          'Two strategies: biti + trpni pridjev (formal) and se + verb (conversational)',
          'Trpni pridjev agrees with the subject in gender and number: pisan/pisana/pisano/pisani',
          'Agent expressed with od + Genitive: od poznatog pisca (by a well-known author)',
          'Se-passive never names an agent — very common in notices and everyday speech',
          'Use biti-passive in academic/formal writing; use se-passive in speech and ads',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON: Time & Calendar
  // ─────────────────────────────────────────────────────────
  {
    id: 'time-calendar',
    title: 'Time & Calendar',
    subtitle: 'Tell time, say dates, and talk about when things happen',
    icon: '🕐',
    level: 'A1',
    duration: '~8 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Time & Calendar in Croatian',
        body: 'Knowing how to talk about time is essential from day one. In Croatian, you ask "Koliko je sati?" (What time is it?) and use a simple number system for hours and minutes. Days and months are not capitalized in Croatian.',
        icon: '🕐',
      },
      {
        type: 'rule',
        title: 'Asking & Telling the Time',
        body: 'To ask the time: "Koliko je sati?" (lit. How many is hours?). To answer, use the number + "sati" (hours): "Dva su sata" (It is 2 o\'clock), "Pet je sati" (It is 5 o\'clock). Note: 1 o\'clock is "Jedan sat", 2-4 use "sata", 5+ use "sati" — the same noun case rule applies to all counting in Croatian.',
        highlight: 'Koliko je sati?',
      },
      {
        type: 'table',
        title: 'Telling the Time — Examples',
        headers: ['Time', 'Croatian', 'Literal Meaning'],
        rows: [
          ['1:00', 'Jedan sat', 'One hour'],
          ['2:00', 'Dva su sata', 'Two are hours'],
          ['5:00', 'Pet je sati', 'Five is hours'],
          ['12:00', 'Dvanaest je sati', 'Twelve is hours'],
          ['3:30', 'Tri i pol', 'Three and a half'],
          ['6:15', 'Šest i četvrt', 'Six and a quarter'],
          ['8:45', 'Tri četvrt do devet', 'Three quarters to nine'],
        ],
      },
      {
        type: 'example',
        title: 'Time Expressions — Listen',
        items: [
          { hr: 'Koliko je sati?', en: 'What time is it?', note: 'The essential question' },
          { hr: 'Pet je sati.', en: "It is five o'clock.", note: '5+ hours → sati' },
          { hr: 'Dva su sata.', en: "It is two o'clock.", note: '2-4 hours → sata' },
          { hr: 'Tri i pol.', en: 'Half past three.', note: 'pol = half' },
          { hr: 'Četvrt do osam.', en: 'A quarter to eight.', note: 'do = to/until' },
        ],
      },
      {
        type: 'rule',
        title: 'Days of the Week',
        body: 'Days of the week are NOT capitalized in Croatian. They are: ponedjeljak (Monday), utorak (Tuesday), srijeda (Wednesday), četvrtak (Thursday), petak (Friday), subota (Saturday), nedjelja (Sunday). The week starts on Monday in Croatia. "Danas je..." = Today is... "Sutra je..." = Tomorrow is...',
        highlight: 'not capitalized',
      },
      {
        type: 'table',
        title: 'Days of the Week',
        headers: ['Croatian', 'English', 'Origin / Memory Aid'],
        rows: [
          ['ponedjeljak', 'Monday', 'after Sunday (nedjelja)'],
          ['utorak', 'Tuesday', 'second (drugi)'],
          ['srijeda', 'Wednesday', 'middle (sredina) of the week'],
          ['četvrtak', 'Thursday', 'fourth (četvrti) day'],
          ['petak', 'Friday', 'fifth (peti) day'],
          ['subota', 'Saturday', 'from Hebrew Shabbat'],
          ['nedjelja', 'Sunday', 'no work (ne + djelo)'],
        ],
      },
      {
        type: 'rule',
        title: 'Months of the Year',
        body: 'Months are also NOT capitalized in Croatian. Croatian uses Slavic month names — not the Latin/international ones. These names reflect nature and agriculture: siječanj (January, from "sjeći" = to cut), veljača (February), ožujak (March, from "orah" = walnut), travanj (April, from "trava" = grass), svibanj (May), lipanj (June, from "lipa" = linden), srpanj (July, from "srp" = sickle), kolovoz (August, lit. wheel-rut), rujan (September, from "rujati" = to roar), listopad (October, from "list" = leaf, "pad" = fall), studeni (November, from "studen" = cold), prosinac (December).',
        highlight: 'Slavic month names',
      },
      {
        type: 'table',
        title: 'Months of the Year',
        headers: ['Croatian', 'English', 'Meaning / Root'],
        rows: [
          ['siječanj', 'January', 'to cut (wood in winter)'],
          ['veljača', 'February', 'great/mighty (veljik)'],
          ['ožujak', 'March', 'walnut (orah)'],
          ['travanj', 'April', 'grass (trava)'],
          ['svibanj', 'May', 'may tree (sviba)'],
          ['lipanj', 'June', 'linden tree (lipa)'],
          ['srpanj', 'July', 'sickle (srp)'],
          ['kolovoz', 'August', 'wheel-rut (kolo+voz)'],
          ['rujan', 'September', 'to roar (rujati)'],
          ['listopad', 'October', 'leaf-fall (list+pad)'],
          ['studeni', 'November', 'cold (studen)'],
          ['prosinac', 'December', 'millet (proso)'],
        ],
      },
      {
        type: 'rule',
        title: 'Time Adverbs You Must Know',
        body: 'These time adverbs appear in everyday speech constantly. Memorize them: danas (today), jučer (yesterday), sutra (tomorrow), jutros (this morning), večeras (this evening), noćas (tonight), sada / sad (now), odmah (immediately), uvijek (always), nikad (never), često (often), ponekad (sometimes), rijetko (rarely).',
        highlight: 'danas / jučer / sutra',
      },
      {
        type: 'example',
        title: 'Time Adverbs in Sentences',
        items: [
          {
            hr: 'Danas imam sat jezika.',
            en: 'Today I have a language lesson.',
            note: 'danas = today',
          },
          {
            hr: 'Jučer sam bio u gradu.',
            en: 'Yesterday I was in the city.',
            note: 'jučer = yesterday',
          },
          {
            hr: 'Sutra idemo na more.',
            en: 'Tomorrow we are going to the sea.',
            note: 'sutra = tomorrow',
          },
          {
            hr: 'Uvijek pijem kavu ujutro.',
            en: 'I always drink coffee in the morning.',
            note: 'ujutro = in the morning (habitual)',
          },
          { hr: 'Nikad ne kasnim.', en: 'I am never late.', note: 'nikad = never' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'U ponedjeljak imam sastanak.',
            en: 'On Monday I have a meeting.',
            note: 'u + accusative for a day: u ponedjeljak',
          },
          {
            hr: 'Rođendan mi je petog svibnja.',
            en: 'My birthday is on the fifth of May.',
            note: 'dates use the genitive: petog svibnja',
          },
          {
            hr: 'Ljeti idemo na more, zimi skijamo.',
            en: 'In summer we go to the sea, in winter we ski.',
            note: 'ljeti / zimi — the season adverbs',
          },
          {
            hr: 'Vidimo se u subotu ujutro.',
            en: 'See you on Saturday morning.',
            note: 'u subotu — a feminine day takes -u',
          },
          {
            hr: 'Danas je utorak, sedmi listopada.',
            en: 'Today is Tuesday, the seventh of October.',
            note: 'day + ordinal + month in the genitive',
          },
          {
            hr: 'Nedjeljom ne radim.',
            en: 'On Sundays I do not work.',
            note: 'instrumental nedjeljom = every Sunday, as a habit',
          },
          {
            hr: 'Proljeće počinje u ožujku.',
            en: 'Spring begins in March.',
            note: 'u + locative for a month: u ožujku',
          },
          {
            hr: 'Kada dolaziš? — U petak navečer.',
            en: 'When are you coming? — Friday evening.',
            note: 'kada question, u petak answer',
          },
          {
            hr: 'U jesen pada kiša.',
            en: 'In autumn it rains.',
            note: 'jesen — autumn; u jesen is the fixed phrase',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'How do you say "What time is it?" in Croatian?',
        options: ['Što je vremena?', 'Koliko je sati?', 'Kada je sat?', 'Koji je dan?'],
        correct: 1,
        explanation:
          '"Koliko je sati?" literally means "How many is hours?" — it is the standard way to ask the time in Croatian. "Što je vremena?" does not exist; "Koji je dan?" means "What day is it?"',
      },
      {
        type: 'quiz',
        q: 'Which Croatian month name means "leaf-fall"?',
        options: ['rujan', 'studeni', 'listopad', 'srpanj'],
        correct: 2,
        explanation:
          '"Listopad" = October. It combines "list" (leaf) + "pad" (fall). Croatian uses these evocative Slavic month names instead of the Latin-based names used in most European languages.',
      },
      {
        type: 'quiz',
        q: 'What does "sutra" mean?',
        options: ['yesterday', 'now', 'tomorrow', 'today'],
        correct: 2,
        explanation:
          '"Sutra" = tomorrow. The full trio to memorize: jučer (yesterday) — danas (today) — sutra (tomorrow). These are among the most frequently used time adverbs in Croatian.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers capitalise days and months — 'Ponedjeljak', 'Svibanj' — but in Croatian they are lower-case unless they open a sentence. Second, 'on Monday' comes out as a bare noun, 'ponedjeljak idem' — the day needs 'u' + accusative, 'u ponedjeljak', and a feminine day changes its ending: 'u subotu', 'u srijedu'. Third, dates get read with cardinal numbers, 'pet svibanj' — a date is an ordinal in the genitive: 'petog svibnja'.",
        highlight: 'a date is an ordinal in the genitive',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Idem k liječniku u ___.' (on Wednesday)",
            options: ['srijeda', 'srijedu', 'srijedi', 'srijedom'],
            correct: 1,
            explanation:
              "After 'u' a day takes the accusative; feminine srijeda → srijedu. srijedom (instrumental) would mean 'on Wednesdays' as a habit.",
          },
          {
            q: "Complete: 'Rođen sam ___ siječnja.' (on the third of January)",
            options: ['tri', 'treći', 'trećeg', 'tri od'],
            correct: 2,
            explanation:
              'A date is an ordinal in the genitive: trećeg siječnja. treći is the nominative ordinal and tri a plain cardinal.',
          },
          {
            q: 'Which sentence is correctly written?',
            options: [
              'Danas je Petak, deseti Travnja.',
              'Danas je petak, deseti travnja.',
              'Danas je petak, Deseti Travnja.',
              'danas je Petak, deseti travnja.',
            ],
            correct: 1,
            explanation:
              'Days and months are lower-case in Croatian; only the first word of the sentence is capitalised.',
          },
          {
            q: "Spot the error: 'Zima počinje u prosinac.'",
            options: [
              'prosinac should be prosincu — u + month is locative',
              'počinje should be počinjem',
              'u should be na',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              "'In December' is u + locative: u prosincu. The accusative would mean motion into December, which makes no sense.",
          },
          {
            q: 'Which is the correct order of the first three months?',
            options: [
              'siječanj, veljača, ožujak',
              'siječanj, ožujak, veljača',
              'veljača, siječanj, ožujak',
              'ožujak, siječanj, veljača',
            ],
            correct: 0,
            explanation: 'siječanj is January, veljača February, ožujak March.',
          },
          {
            q: "What does 'Nedjeljom ne radim' mean?",
            options: [
              'I do not work this Sunday',
              'I do not work on Sundays (as a rule)',
              'I did not work on Sunday',
              'I work on Sunday',
            ],
            correct: 1,
            explanation:
              'The instrumental of a day (nedjeljom, subotom) means habitually, every Sunday. One particular Sunday would be u nedjelju.',
          },
          {
            q: "Which word is the season 'autumn'?",
            options: ['proljeće', 'zima', 'ljeto', 'jesen'],
            correct: 3,
            explanation: 'jesen is autumn; proljeće is spring, ljeto summer, zima winter.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Time & Calendar — Complete!',
        points: [
          '"Koliko je sati?" = What time is it?',
          '1 sat, 2-4 sata, 5+ sati — counting rule applies',
          'Days and months are NOT capitalized in Croatian',
          'Croatian months have Slavic names based on nature',
          'Key adverbs: danas / jučer / sutra / jutros / večeras',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // LESSON: Present Tense Verbs (A1-A2)
  // ─────────────────────────────────────────────────────────
  {
    id: 'present-tense-verbs',
    title: 'Present Tense Verbs',
    subtitle: 'Master the three conjugation classes and 15 essential verbs',
    icon: '🔄',
    level: 'A1',
    duration: '~10 min',
    color: '#0891b2',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Present Tense in Croatian',
        body: 'Croatian verbs change their endings based on who is doing the action. There are three conjugation classes, each with a different vowel in the ending (-em, -im, -am). Once you know which class a verb belongs to, you can conjugate any verb in that class instantly.',
        icon: '🔄',
      },
      {
        type: 'rule',
        title: 'The Three Conjugation Classes',
        body: 'Class 1 (-em class): the vowel E appears in the ending — pijem, idem, zovem. Class 2 (-im class): the vowel I appears — govorim, vidim, volim. Class 3 (-am class): the vowel A appears — imam, znam, čitam. The infinitive ending is the best clue: -ati (mostly Class 3), -iti/-eti (mostly Class 2), -ati with consonant change (often Class 1).',
        highlight: '-em / -im / -am',
      },
      {
        type: 'table',
        title: 'Class 1: -em Conjugation (piti — to drink)',
        headers: ['Person', 'Croatian', 'English'],
        rows: [
          ['ja (I)', 'pijem', 'I drink'],
          ['ti (you)', 'piješ', 'you drink'],
          ['on/ona/ono (he/she/it)', 'pije', 'he/she drinks'],
          ['mi (we)', 'pijemo', 'we drink'],
          ['vi (you pl.)', 'pijete', 'you (all) drink'],
          ['oni/one (they)', 'piju', 'they drink'],
        ],
      },
      {
        type: 'table',
        title: 'Class 2: -im Conjugation (govoriti — to speak)',
        headers: ['Person', 'Croatian', 'English'],
        rows: [
          ['ja', 'govorim', 'I speak'],
          ['ti', 'govoriš', 'you speak'],
          ['on/ona', 'govori', 'he/she speaks'],
          ['mi', 'govorimo', 'we speak'],
          ['vi', 'govorite', 'you (all) speak'],
          ['oni', 'govore', 'they speak'],
        ],
      },
      {
        type: 'table',
        title: 'Class 3: -am Conjugation (imati — to have)',
        headers: ['Person', 'Croatian', 'English'],
        rows: [
          ['ja', 'imam', 'I have'],
          ['ti', 'imaš', 'you have'],
          ['on/ona', 'ima', 'he/she has'],
          ['mi', 'imamo', 'we have'],
          ['vi', 'imate', 'you (all) have'],
          ['oni', 'imaju', 'they have'],
        ],
      },
      {
        type: 'rule',
        title: 'The Two Irregular Essentials: biti & htjeti',
        body: '"Biti" (to be) is the most irregular verb in Croatian but the most important. Present tense: jesam/sam, jesi/si, jest/je, jesmo/smo, jeste/ste, jesu/su. The short clitic forms (sam, si, je, smo, ste, su) are used in sentences; the long forms (jesam, jesi...) are used for emphasis or questions. "Htjeti" (to want): hoću, hoćeš, hoće, hoćemo, hoćete, hoće.',
        highlight: 'biti is irregular',
      },
      {
        type: 'table',
        title: '15 High-Frequency Verbs — Class at a Glance',
        headers: ['Infinitive', 'English', 'Class', 'Ja form'],
        rows: [
          ['biti', 'to be', 'irregular', 'sam / jesam'],
          ['htjeti', 'to want', 'irregular', 'hoću'],
          ['imati', 'to have', 'Class 3', 'imam'],
          ['znati', 'to know', 'Class 3', 'znam'],
          ['ići', 'to go', 'Class 1', 'idem'],
          ['doći', 'to come', 'Class 1', 'dođem'],
          ['govoriti', 'to speak', 'Class 2', 'govorim'],
          ['vidjeti', 'to see', 'Class 2', 'vidim'],
          ['čuti', 'to hear', 'Class 1', 'čujem'],
          ['voljeti', 'to love/like', 'Class 2', 'volim'],
          ['raditi', 'to work', 'Class 2', 'radim'],
          ['čitati', 'to read', 'Class 3', 'čitam'],
          ['pisati', 'to write', 'Class 1', 'pišem'],
          ['jesti', 'to eat', 'Class 1', 'jedem'],
          ['piti', 'to drink', 'Class 1', 'pijem'],
        ],
      },
      {
        type: 'rule',
        title: 'The Personal Pronoun is Optional',
        body: 'In Croatian, the verb ending already tells you who the subject is. So you can drop the pronoun: "Govorim hrvatski" = I speak Croatian (no "ja" needed). Pronouns are included for emphasis or contrast: "Ja govorim hrvatski, a ti govoriš engleski" (I speak Croatian, but you speak English). Beginners often include pronouns — this is fine and understood.',
        highlight: 'pronoun is optional',
      },
      {
        type: 'example',
        title: 'Present Tense in Real Sentences',
        items: [
          {
            hr: 'Govorim malo hrvatski.',
            en: 'I speak a little Croatian.',
            note: 'Class 2, ja form',
          },
          {
            hr: 'Imaš li brata?',
            en: 'Do you have a brother?',
            note: 'Class 3, li = yes/no question',
          },
          { hr: 'Ona voli kavu.', en: 'She loves coffee.', note: 'Class 2, ona form' },
          { hr: 'Idemo na plažu!', en: 'We are going to the beach!', note: 'Class 1, mi form' },
          { hr: 'Što radite?', en: 'What are you (all) doing?', note: 'Class 2, vi form' },
          { hr: 'Oni piju vino.', en: 'They are drinking wine.', note: 'Class 1, oni form' },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Svaki dan pijem kavu i čitam novine.',
            en: 'Every day I drink coffee and read the newspaper.',
            note: 'pijem (-em) and čitam (-am) side by side',
          },
          {
            hr: 'Radiš li subotom?',
            en: 'Do you work on Saturdays?',
            note: 'raditi → radiš (-im class)',
          },
          {
            hr: 'Moja sestra piše pjesme.',
            en: 'My sister writes poems.',
            note: 'pisati → piše: -ati with a consonant change = -em class',
          },
          {
            hr: 'Vidimo more s balkona.',
            en: 'We can see the sea from the balcony.',
            note: 'vidjeti → vidimo (-im class)',
          },
          {
            hr: 'Znate li gdje je pošta?',
            en: 'Do you know where the post office is?',
            note: 'znati → znate (-am class), vi-form',
          },
          {
            hr: 'Djeca jedu sladoled u parku.',
            en: 'The children are eating ice cream in the park.',
            note: 'jesti → jedu (-em class), 3rd plural -u',
          },
          {
            hr: 'Ujutro trčim, navečer kuham večeru.',
            en: 'In the morning I run, in the evening I cook dinner.',
            note: 'trčati → trčim (-im); kuhati → kuham (-am)',
          },
          {
            hr: 'Hoćeš li čaj ili kavu?',
            en: 'Do you want tea or coffee?',
            note: 'htjeti → hoćeš, irregular',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which conjugation class does "govoriti" (to speak) belong to?',
        options: ['Class 1 (-em)', 'Class 2 (-im)', 'Class 3 (-am)', 'Irregular'],
        correct: 1,
        explanation:
          '"Govoriti" belongs to Class 2. The pattern: govorim, govoriš, govori, govorimo, govorite, govore. The -i- vowel throughout (except the oni form -e) is the Class 2 signature.',
      },
      {
        type: 'quiz',
        q: 'What is the "ja" (I) form of "znati" (to know)?',
        options: ['znam', 'znajem', 'znim', 'znaje'],
        correct: 0,
        explanation:
          '"Znati" is a Class 3 (-am class) verb. The ja form is "znam". Full conjugation: znam, znaš, zna, znamo, znate, znaju. "Znajem" does not exist; this is a common learner error.',
      },
      {
        type: 'quiz',
        q: 'In Croatian, when should you include the subject pronoun (ja, ti, on...)?',
        options: [
          'Always — it is required',
          'Never — it is always dropped',
          'For emphasis or contrast — otherwise optional',
          'Only in questions',
        ],
        correct: 2,
        explanation:
          'Croatian is a pro-drop language — the verb ending conveys the subject, so the pronoun is optional. Include it for emphasis ("Ja govorim, ne ti!") or contrast. Beginners can always include pronouns without making an error.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "The commonest slip is building the ja form from the infinitive vowel: 'znajem' for znati — it is 'znam', an -am verb (znam, znaš, zna). Second, the 'they' ending gets copied across classes: 'oni govoriju' — the -im class takes -e in the plural, 'govore', while -am verbs take -aju ('čitaju') and -em verbs -u ('piju'). Third, 'pisati' is filed under -am because it ends in -ati: it is 'pišem, pišeš', with the š change — the infinitive is a clue, not a guarantee.",
        highlight: 'the infinitive is a clue, not a guarantee',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Oni ___ hrvatski.' (They speak Croatian.)",
            options: ['govoriju', 'govore', 'govorite', 'govoraju'],
            correct: 1,
            explanation:
              'govoriti is an -im verb; its 3rd person plural ends in -e: govore. -aju belongs to -am verbs and -ite is the vi form.',
          },
          {
            q: "Complete: 'Mi ___ kavu.' (We drink coffee.)",
            options: ['pijamo', 'pimo', 'pijemo', 'pijimo'],
            correct: 2,
            explanation: 'piti is an -em verb: pijem, piješ, pije, pijemo, pijete, piju.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ja znajem odgovor.',
              'Ja znam odgovor.',
              'Ja znaem odgovor.',
              'Ja znim odgovor.',
            ],
            correct: 1,
            explanation:
              'znati is an -am verb: znam, znaš, zna. The invented forms come from misreading the infinitive.',
          },
          {
            q: "Spot the error: 'Ona čitaju knjigu.'",
            options: [
              'čitaju should be čita — ona is singular',
              'ona should be one',
              'knjigu should be knjiga',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              "'ona' (she) is singular, so the verb is čita. čitaju is the they-form and would need oni or one.",
          },
          {
            q: "'pisati' ends in -ati. Which class does it actually follow, and what is the ja form?",
            options: [
              '-am class: pisam',
              '-im class: pisim',
              '-em class: pišem',
              'irregular: pišam',
            ],
            correct: 2,
            explanation:
              'pisati changes s → š and takes -em endings: pišem, pišeš, piše. The -ati infinitive is a clue, not a rule.',
          },
          {
            q: 'Which sentence says what you do every day?',
            options: [
              'Svaki dan idem na posao.',
              'Jučer sam išao na posao.',
              'Sutra ću ići na posao.',
              'Išao bih na posao.',
            ],
            correct: 0,
            explanation:
              'The present tense idem with svaki dan expresses a routine. The others are past, future and conditional.',
          },
          {
            q: "Complete: 'Vi ___ u Zagrebu?' (Do you (pl.) live in Zagreb?)",
            options: ['živite', 'živiš', 'živimo', 'žive'],
            correct: 0,
            explanation:
              'The vi form of an -im verb ends in -ite: živite. živiš is ti, živimo is mi, žive is oni.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Present Tense Verbs — Complete!',
        points: [
          'Three conjugation classes: -em (Class 1), -im (Class 2), -am (Class 3)',
          'biti and htjeti are irregular — memorize them first',
          'Class 1 signature vowel: e (pijem, pišem, idem)',
          'Class 2 signature vowel: i (govorim, vidim, volim)',
          'Class 3 signature vowel: a (imam, znam, čitam)',
          'Subject pronouns are optional — verb endings tell the story',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // LESSON: Prepositions in Action
  // ─────────────────────────────────────────────────────────
  {
    id: 'prepositions-action',
    title: 'Prepositions in Action',
    subtitle: 'Master location vs. direction, genitive preps, and the instrumental s/sa',
    icon: '📍',
    level: 'A2',
    duration: '~10 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Croatian Prepositions',
        body: 'Croatian prepositions are paired with specific cases — the preposition tells you which case to use. The most important pair to master first: "u" and "na" change meaning completely depending on whether they precede an accusative (direction: going TO) or a locative (location: being AT/IN). This single rule unlocks hundreds of sentences.',
        icon: '📍',
      },
      {
        type: 'rule',
        title: 'u / na + Accusative = Direction (Movement TO)',
        body: 'When you are moving toward a place, use u or na with the ACCUSATIVE case. The accusative for masculine inanimate nouns is the same as nominative; feminine -a nouns become -u. Idem u grad (I am going to the city). Idem na plažu (I am going to the beach). The key question: Is there movement toward the place? → Accusative.',
        highlight: 'movement = accusative',
      },
      {
        type: 'rule',
        title: 'u / na + Locative = Location (Being AT/IN)',
        body: 'When you are at a place (no movement), use u or na with the LOCATIVE case. Locative endings: masculine/neuter -u (u gradu, u selu), feminine -i (na plaži, u školi). Jesam u gradu (I am in the city). Sjedimo na plaži (We are sitting on the beach). The key question: Is there static location, no movement? → Locative.',
        highlight: 'location = locative',
      },
      {
        type: 'table',
        title: 'u/na: Accusative vs Locative — Side by Side',
        headers: ['Meaning', 'Case', 'Example', 'English'],
        rows: [
          ['going TO', 'Accusative', 'Idem u grad.', 'I am going to the city.'],
          ['being IN', 'Locative', 'Jesam u gradu.', 'I am in the city.'],
          ['going TO', 'Accusative', 'Idem na plažu.', 'I am going to the beach.'],
          ['being ON', 'Locative', 'Sjedim na plaži.', 'I am sitting on the beach.'],
          ['going TO', 'Accusative', 'Idem u školu.', 'I am going to school.'],
          ['being IN', 'Locative', 'Jesam u školi.', 'I am at school.'],
        ],
      },
      {
        type: 'rule',
        title: 'Genitive Prepositions: od, do, iz, bez, kod',
        body: '"Od" (from, of): Putujem od Splita do Dubrovnika (I travel from Split to Dubrovnik). "Do" (to, until): do srijede (until Wednesday). "Iz" (from out of — for enclosed spaces): iz kuće (from the house), iz grada (from the city). "Bez" (without): bez šećera (without sugar). "Kod" (at someone\'s place / near): kod prijatelja (at a friend\'s place), kod mene (at my place). All five require genitive case after them.',
        highlight: 'od / do / iz / bez / kod = genitive',
      },
      {
        type: 'rule',
        title: 'iz vs od — The Important Distinction',
        body: '"Iz" means FROM a contained/enclosed space: dolazim iz Zagreba (I come from Zagreb — the city encloses you). "Od" means FROM a person, an event, or something not enclosed: to je dar od mame (this is a gift from mum), od ponedjeljka (from Monday). Do NOT use "od" for cities and rooms — use "iz". This iz/od distinction is one of the most common errors in learner Croatian.',
        highlight: 'iz = enclosed space; od = from person/time',
      },
      {
        type: 'rule',
        title: 'Instrumental s/sa — With, Together',
        body: '"S" (before consonants) or "sa" (before s, z, š, ž, or for rhythm) means "with" and always takes the INSTRUMENTAL case. Instrumental endings: masculine/neuter -om (s bratom — with brother), feminine -om (s mamom — with mum), plurals vary. Idem s prijateljem (I am going with a friend). Razgovaram sa sestrom (I am talking with my sister). Never use "s" + nominative — always instrumental.',
        highlight: 's/sa = instrumental',
      },
      {
        type: 'table',
        title: 'Key Prepositions — Summary',
        headers: ['Preposition', 'Case Required', 'Core Meaning', 'Example'],
        rows: [
          ['u (direction)', 'Accusative', 'going into', 'Idem u kafić.'],
          ['na (direction)', 'Accusative', 'going onto/to', 'Idem na more.'],
          ['u (location)', 'Locative', 'being inside', 'Jesam u kafiću.'],
          ['na (location)', 'Locative', 'being on/at', 'Sjedim na moru.'],
          ['od', 'Genitive', 'from / of', 'Dar od prijatelja.'],
          ['do', 'Genitive', 'to / until', 'Do ponedjeljka.'],
          ['iz', 'Genitive', 'from (enclosed)', 'Dolazim iz Splita.'],
          ['bez', 'Genitive', 'without', 'Kava bez šećera.'],
          ['kod', 'Genitive', "at someone's / near", 'Kod mene doma.'],
          ['s/sa', 'Instrumental', 'with (together)', 'S prijateljem.'],
        ],
      },
      {
        type: 'example',
        title: 'Prepositions in Real Sentences — Listen',
        items: [
          { hr: 'Idem u Zagreb.', en: 'I am going to Zagreb.', note: 'u + accusative = direction' },
          { hr: 'Živim u Zagrebu.', en: 'I live in Zagreb.', note: 'u + locative = location' },
          {
            hr: 'Dolazim iz Splita.',
            en: 'I come from Split.',
            note: 'iz + genitive = from enclosed space',
          },
          {
            hr: 'Kava bez mlijeka, molim.',
            en: 'Coffee without milk, please.',
            note: 'bez + genitive',
          },
          {
            hr: 'Idem s mamom na tržnicu.',
            en: 'I am going with mum to the market.',
            note: 's + instrumental',
          },
          {
            hr: 'Kod mene je uvijek dobrodošao.',
            en: 'At my place, he is always welcome.',
            note: 'kod + genitive',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ključevi su na stolu, a torba je u ormaru.',
            en: 'The keys are on the table and the bag is in the wardrobe.',
            note: 'na stolu, u ormaru — locative, static',
          },
          {
            hr: 'Stavi ključeve na stol i torbu u ormar.',
            en: 'Put the keys on the table and the bag in the wardrobe.',
            note: 'same prepositions, accusative — motion',
          },
          {
            hr: 'Idem od kuće do posla pješice.',
            en: 'I walk from home to work.',
            note: 'od + genitive … do + genitive',
          },
          {
            hr: 'Vraćam se iz škole u tri.',
            en: 'I come back from school at three.',
            note: 'iz + genitive — out of an enclosed place',
          },
          {
            hr: 'Bez kave ne mogu raditi.',
            en: 'Without coffee I cannot work.',
            note: 'bez + genitive',
          },
          {
            hr: 'Sutra smo kod bake na ručku.',
            en: "Tomorrow we are at grandma's for lunch.",
            note: "kod + genitive = at someone's place; na ručku — locative",
          },
          {
            hr: 'Šetam sa psom pored rijeke.',
            en: 'I walk with the dog by the river.',
            note: 'sa before the ps- cluster; instrumental psom',
          },
          {
            hr: 'Ovo je pismo od mog djeda.',
            en: 'This is a letter from my grandfather.',
            note: 'od + genitive — from a person',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'You are going to the beach. Which case follows "na"?',
        options: ['Nominative', 'Genitive', 'Accusative', 'Locative'],
        correct: 2,
        explanation:
          'Movement TO a place requires the accusative. "Idem na plažu" — plažu is the accusative of plaža. If you were sitting ON the beach (no movement), you would use locative: "Sjedim na plaži".',
      },
      {
        type: 'quiz',
        q: 'How do you say "I come from Zagreb" in Croatian?',
        options: [
          'Dolazim od Zagreba.',
          'Dolazim iz Zagreba.',
          'Dolazim u Zagreb.',
          'Dolazim s Zagreba.',
        ],
        correct: 1,
        explanation:
          '"Iz" is used for coming from enclosed spaces (cities, rooms, buildings). Zagreb encloses you while you are there, so "dolazim iz Zagreba" is correct. "Od" is used for persons and time points, not cities.',
      },
      {
        type: 'quiz',
        q: 'Which preposition always requires the INSTRUMENTAL case?',
        options: ['od', 'u', 's/sa', 'bez'],
        correct: 2,
        explanation:
          '"S/sa" (with) always requires the instrumental case: s bratom, sa sestrom, s prijateljem. "Bez" requires genitive. "Od" requires genitive. "U" can require accusative (direction) or locative (location).',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English 'in' and 'on' are one word each, so learners freeze the case: 'Sjedim u restoran' — being in it is locative, 'u restoranu', and only going there is 'u restoran'. Second, 'from' becomes 'od' everywhere: 'Dolazim od Splita' should be 'iz Splita' — a town or a room is enclosed, so it is iz; od is for people and time. Third, 's' gets used with the nominative, 's moja sestra' — s/sa always takes the instrumental, 's mojom sestrom', and it becomes 'sa' before s, š, z, ž.",
        highlight: 'a town or a room is enclosed, so it is iz',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Knjiga je u ___.' (in the bag)",
            options: ['torba', 'torbu', 'torbi', 'torbom'],
            correct: 2,
            explanation:
              'The book is sitting there — static location, so u + locative: torbi. torbu would mean putting it into the bag.',
          },
          {
            q: "Complete: 'Idemo na ___.' (to the wedding)",
            options: ['svadbu', 'svadbi', 'svadbe', 'svadba'],
            correct: 0,
            explanation: 'Going to an event is motion: na + accusative, svadba → svadbu.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Dolazim od Rijeke.',
              'Dolazim iz Rijeke.',
              'Dolazim iz Rijeku.',
              'Dolazim s Rijeke.',
            ],
            correct: 1,
            explanation:
              'A city is an enclosed place, so from it is iz + genitive: iz Rijeke. od is for people and time points; iz never takes the accusative.',
          },
          {
            q: "Spot the error: 'Idem s brat u kino.'",
            options: [
              'kino should be kinu',
              'u should be na',
              'brat should be bratom — s takes the instrumental',
              'nothing is wrong',
            ],
            correct: 2,
            explanation:
              "s/sa always governs the instrumental: s bratom. 'u kino' is right — motion to the cinema.",
          },
          {
            q: "Which phrase says 'at my grandmother's place'?",
            options: ['u baki', 'na baku', 'kod bake', 'od bake'],
            correct: 2,
            explanation:
              "kod + genitive means at someone's place: kod bake. od bake would be 'from grandma'.",
          },
          {
            q: "Complete: 'Kava ___ šećera, molim.' (without sugar)",
            options: ['bez', 'iz', 'od', 's'],
            correct: 0,
            explanation:
              'bez (without) takes the genitive: bez šećera. The genitive ending alone does not tell you the preposition — the meaning does.',
          },
          {
            q: "Why is it 'sa sestrom' but 's bratom'?",
            options: [
              'sa is used before feminine nouns',
              'sa is used before s, š, z, ž; s elsewhere',
              'they are interchangeable in every case',
              'sa is the older form',
            ],
            correct: 1,
            explanation:
              'sa appears before a word starting with s, š, z or ž (and a few awkward clusters) so the sounds do not merge; otherwise it is s.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Prepositions in Action — Complete!',
        points: [
          'u/na + accusative = movement TO a place (Idem u grad)',
          'u/na + locative = static location AT a place (Jesam u gradu)',
          'iz = from an enclosed space (iz grada, iz kuće)',
          'od = from a person or time point (od mame, od ponedjeljka)',
          'od/do/iz/bez/kod all take the genitive case',
          's/sa (with) always takes the instrumental case',
        ],
      },
    ],
  },
  {
    id: 'numbers-nouns',
    title: 'Numbers & Nouns',
    subtitle: 'The three-way counting rule and collective numbers',
    icon: '🔢',
    level: 'B1',
    duration: '~10 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Numbers & Nouns in Croatian',
        body: 'In Croatian, the noun that follows a number changes its form depending on what the number is. This is one of the most surprising features for English speakers — in English, "two cats / five cats" shows no change. In Croatian, the noun takes three different forms depending on whether the number is 1, 2-4, or 5+. Mastering this rule makes your Croatian immediately sound more natural.',
        icon: '🔢',
      },
      {
        type: 'rule',
        title: 'The Three-Way Counting Rule',
        body: 'After the number 1 (jedan): use the NOMINATIVE singular. After numbers 2, 3, 4 (dva, tri, četiri): use the GENITIVE singular. After numbers 5 and above (pet, šest, ...): use the GENITIVE plural. This pattern repeats for compound numbers: 21, 22, 23, 24 follow the 1/2-4/5+ rule based on the last digit.',
        highlight: '1 = nominative / 2-4 = gen. sg. / 5+ = gen. pl.',
      },
      {
        type: 'table',
        title: 'The Counting Rule — "dan" (day)',
        headers: ['Number', 'Croatian', 'Form Used', 'English'],
        rows: [
          ['1', 'jedan dan', 'nominative singular', 'one day'],
          ['2', 'dva dana', 'genitive singular', 'two days'],
          ['3', 'tri dana', 'genitive singular', 'three days'],
          ['4', 'četiri dana', 'genitive singular', 'four days'],
          ['5', 'pet dana', 'genitive plural', 'five days'],
          ['10', 'deset dana', 'genitive plural', 'ten days'],
          ['21', 'dvadeset jedan dan', 'nominative singular', 'twenty-one days'],
          ['22', 'dvadeset dva dana', 'genitive singular', 'twenty-two days'],
          ['25', 'dvadeset pet dana', 'genitive plural', 'twenty-five days'],
        ],
      },
      {
        type: 'table',
        title: 'The Rule Across Different Nouns',
        headers: ['Number', 'sat (hour)', 'minuta (minute)', 'dijete (child)'],
        rows: [
          ['1', 'jedan sat', 'jedna minuta', 'jedno dijete'],
          ['2', 'dva sata', 'dvije minute', 'dvoje djece*'],
          ['3', 'tri sata', 'tri minute', 'troje djece*'],
          ['5', 'pet sati', 'pet minuta', 'petero djece*'],
          ['10', 'deset sati', 'deset minuta', 'desetero djece*'],
        ],
      },
      {
        type: 'rule',
        title: 'The 11-14 Exception — Always Genitive Plural',
        body: 'Numbers 11 through 14 are exceptions. Even though they end in 1, 2, 3, 4, they always take the GENITIVE PLURAL — not the 1/2-4 forms. Jedanaest (11) + gen.pl., dvanaest (12) + gen.pl., trinaest (13) + gen.pl., četrnaest (14) + gen.pl. Example: jedanaest dana (eleven days — gen.pl., not nominative!), dvanaest sati (twelve hours — gen.pl.). This exception holds for all teen numbers (11-19).',
        highlight: '11-19 always take genitive plural',
      },
      {
        type: 'table',
        title: '11-14 Exception vs Regular Rule',
        headers: ['Number', 'Croatian', 'Rule Applied', 'English'],
        rows: [
          ['4', 'četiri dana', 'genitive singular', 'four days'],
          ['14', 'četrnaest dana', 'genitive plural', 'fourteen days'],
          ['21', 'dvadeset jedan dan', 'nominative singular', '21 days'],
          ['22', 'dvadeset dva dana', 'genitive singular', '22 days'],
          ['24', 'dvadeset četiri dana', 'genitive singular', '24 days'],
          ['11', 'jedanaest dana', 'genitive plural', '11 days'],
          ['12', 'dvanaest sati', 'genitive plural', '12 hours'],
        ],
      },
      {
        type: 'rule',
        title: 'Collective Numbers: dvoje, troje, četvero...',
        body: 'Croatian has a special set of collective numbers for counting mixed-gender groups or inherently paired things. Dvoje (two — mixed group), troje (three — mixed), četvero/četvoro (four), petero/petoro (five), and so on. They are used with: children (djeca), animals in a pair, people of different genders together. "Imam dvoje djece" (I have two children — collective number + genitive of djeca). Do NOT use dva/dvije for mixed-gender groups of people — use dvoje.',
        highlight: 'dvoje/troje for mixed groups & children',
      },
      {
        type: 'example',
        title: 'Numbers in Real Sentences — Listen',
        items: [
          {
            hr: 'Čekao sam tri sata.',
            en: 'I waited three hours.',
            note: '3 + genitive singular sata',
          },
          { hr: 'Ima pet djece.', en: 'She has five children.', note: '5 + genitive plural djece' },
          {
            hr: 'Radio sam jedanaest sati.',
            en: 'I worked eleven hours.',
            note: '11 = teen → always gen. plural',
          },
          {
            hr: 'Dvadeset jedan dan odmora.',
            en: 'Twenty-one days of vacation.',
            note: '21 ends in 1 → nominative singular',
          },
          {
            hr: 'Imam dvoje djece.',
            en: 'I have two children.',
            note: 'dvoje = collective number for mixed-gender',
          },
          {
            hr: 'Došlo je petero studenata.',
            en: 'Five students came.',
            note: 'petero = collective for group of people',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Na stolu su dvije čaše i tri tanjura.',
            en: 'On the table are two glasses and three plates.',
            note: 'dvije čaše (fem. gen. sg.), tri tanjura (masc. gen. sg.)',
          },
          {
            hr: 'U razredu je dvadeset sedam učenika.',
            en: 'There are twenty-seven pupils in the class.',
            note: '27 ends in 7 → genitive plural učenika',
          },
          {
            hr: 'Čekali smo četrdeset jednu minutu.',
            en: 'We waited forty-one minutes.',
            note: '41 ends in 1 → singular, and jedan agrees: jednu minutu',
          },
          {
            hr: 'Kupila je dvanaest jaja i pet limuna.',
            en: 'She bought twelve eggs and five lemons.',
            note: 'teens and 5+ → genitive plural',
          },
          {
            hr: 'Dva brata rade u istoj tvrtki.',
            en: 'Two brothers work in the same firm.',
            note: 'dva brata — gen. sg.; the verb is plural',
          },
          {
            hr: 'Imamo trideset četiri gosta na vjenčanju.',
            en: 'We have thirty-four guests at the wedding.',
            note: '34 ends in 4 → genitive singular gosta',
          },
          {
            hr: 'Pet studenata je položilo ispit.',
            en: 'Five students passed the exam.',
            note: '5+ takes a neuter singular verb: je položilo',
          },
          {
            hr: 'Jedan sat, dva sata, pet sati — tako se broji.',
            en: 'One hour, two hours, five hours — that is how you count.',
            note: 'the three forms side by side',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'What form does the noun take after the number 3 in Croatian?',
        options: [
          'Nominative singular',
          'Genitive singular',
          'Genitive plural',
          'Accusative singular',
        ],
        correct: 1,
        explanation:
          'After 2, 3, and 4, Croatian nouns take the GENITIVE SINGULAR. So: tri dana (three days), tri sata (three hours), tri minute (three minutes). After 5+, the genitive plural is used instead.',
      },
      {
        type: 'quiz',
        q: 'How do you say "twelve hours" in Croatian?',
        options: ['dvanaest sat', 'dvanaest sata', 'dvanaest sati', 'dvanaest satom'],
        correct: 2,
        explanation:
          '"Dvanaest" (12) is a teen number (11-19). Teen numbers always take the GENITIVE PLURAL regardless of the last digit. The genitive plural of "sat" is "sati". So: dvanaest sati (twelve hours).',
      },
      {
        type: 'quiz',
        q: 'When should you use collective numbers (dvoje, troje, petero)?',
        options: [
          'For all counting in Croatian',
          'Only for objects',
          'For mixed-gender groups of people or when counting children',
          'Only for numbers above 5',
        ],
        correct: 2,
        explanation:
          'Collective numbers (dvoje, troje, četvero, petero...) are used for mixed-gender groups of people and for children (using the noun "djeca"). "Imam dvoje djece" = I have two children. For a group of all-male or all-female people, standard cardinal numbers are used.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners apply the 2–4 rule to the teens: 'dvanaest sata' — 11 to 19 always take the genitive plural, 'dvanaest sati'. Second, the singular after 1 is forgotten in compounds: 'dvadeset jedan dana' must be 'dvadeset jedan dan', because the last digit decides. Third, the verb after 5+ is made plural, 'Pet ljudi su došli' — five or more take a neuter singular verb, 'Pet ljudi je došlo', while 2–4 take a plural: 'Dva čovjeka su došla'.",
        highlight: '11 to 19 always take the genitive plural',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Imam ___.' (three sisters)",
            options: ['tri sestra', 'tri sestre', 'tri sestara', 'tri sestri'],
            correct: 1,
            explanation:
              '2–4 take the genitive singular: tri sestre. sestara is the genitive plural, used from 5 up.',
          },
          {
            q: "Complete: 'Radim ___ tjedno.' (forty hours)",
            options: ['četrdeset sat', 'četrdeset sata', 'četrdeset satova', 'četrdeset sati'],
            correct: 3,
            explanation:
              '40 ends in 0, so it behaves like 5+: genitive plural sati. sata belongs to 2–4.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Ima trinaest godina.',
              'Ima trinaest godine.',
              'Ima trinaest godinu.',
              'Ima trinaest godina su.',
            ],
            correct: 0,
            explanation:
              'Teens take the genitive plural regardless of the last digit: trinaest godina.',
          },
          {
            q: "Spot the error: 'Dvadeset dva dana su prošla, a dvadeset jedan dana ostaje.'",
            options: [
              'dvadeset jedan dana should be dvadeset jedan dan — 1 takes the singular',
              'dva dana should be dva dani',
              'prošla should be prošlo',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'A compound ending in 1 takes the nominative singular: dvadeset jedan dan. dvadeset dva dana su prošla is correct.',
          },
          {
            q: "Why is it 'dva sata' but 'pet sati'?",
            options: [
              'sata is plural, sati is singular',
              '2–4 take the genitive singular, 5+ the genitive plural',
              'sati is the formal form',
              'it depends on the speaker',
            ],
            correct: 1,
            explanation:
              'The three-way rule: 1 nominative singular, 2–4 genitive singular, 5+ genitive plural.',
          },
          {
            q: "Complete: 'Imaju ___.' (two children)",
            options: ['dva djeteta', 'dvije djece', 'dvoje djece', 'dva djece'],
            correct: 2,
            explanation:
              'Children are counted with the collective number plus the genitive of djeca: dvoje djece.',
          },
          {
            q: "Which verb form follows 'Pet učenika'?",
            options: ['su došli', 'je došlo', 'je došao', 'su došle'],
            correct: 1,
            explanation:
              'Five or more take a neuter singular verb: Pet učenika je došlo. The plural forms belong to 2–4.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Numbers & Nouns — Complete!',
        points: [
          '1 → nominative singular: jedan dan',
          '2, 3, 4 → genitive singular: dva, tri, četiri dana',
          '5+ → genitive plural: pet, deset dana',
          '11-19 always take genitive plural — even 11, 12, 13, 14',
          'Compound numbers follow the last digit rule (21 → nom., 22 → gen.sg.)',
          'Collective numbers dvoje/troje/petero for mixed groups and children',
        ],
      },
    ],
  },
  {
    id: 'feelings-inner-life',
    title: 'Feelings & Inner Life',
    subtitle:
      'Reflexive emotion verbs, the dative of experience, and untranslatable Croatian words',
    icon: '💙',
    level: 'B1',
    duration: '~12 min',
    color: '#7c3aed',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Feelings in Croatian',
        body: 'Expressing emotions in Croatian involves patterns that have no direct English equivalent. Many feelings are expressed with reflexive verbs (verbs that include "se"), and a whole group of emotional states use the DATIVE case — the emotion happens TO the speaker. Mastering these patterns moves you from textbook Croatian to how Croatians actually feel and speak.',
        icon: '💙',
      },
      {
        type: 'rule',
        title: 'Reflexive Emotion Verbs with SE',
        body: 'Many emotions are expressed with reflexive verbs in Croatian — the feeling reflects back onto the subject. Key examples: bojati se (to be afraid of), sramiti se (to be ashamed of), veseliti se (to look forward to / to be happy about), nadati se (to hope for), čuditi se (to be surprised at), brinuti se (to worry about). The object case depends on the verb: bojati se and sramiti se take the GENITIVE (bojim se psa — I am afraid of the dog), while veseliti se and nadati se take the DATIVE.',
        highlight: 'bojati se / nadati se / sramiti se',
      },
      {
        type: 'table',
        title: 'Key Reflexive Emotion Verbs',
        headers: ['Croatian', 'English', 'Object case', 'Example'],
        rows: [
          ['bojati se', 'to be afraid of', 'genitive', "Bojim se psa. (I'm afraid of the dog.)"],
          ['sramiti se', 'to be ashamed of', 'genitive', "Sramim se toga. (I'm ashamed of that.)"],
          [
            'veseliti se',
            'to look forward to',
            'dative',
            'Veselim se odmoru. (I look forward to vacation.)',
          ],
          ['nadati se', 'to hope for', 'dative', 'Nadam se boljem. (I hope for better.)'],
          ['čuditi se', 'to be surprised at', 'dative', "Čudim se tebi. (I'm surprised at you.)"],
          [
            'brinuti se',
            'to worry about',
            'instrumental/za+acc',
            'Brinem se za tebe. (I worry about you.)',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'The Dative of Experience — Emotion Happens TO You',
        body: 'A powerful Croatian pattern: the emotional state happens TO the speaker, who is in the DATIVE case. The structure is: Dative pronoun + je / mi je / ti je / mu je / joj je / nam je / vam je / im je. Examples: Žao mi je (I am sorry — lit. "sorrow is to me"). Dosadno mi je (I am bored). Hladno mi je (I am cold). Drago mi je (I am pleased — lit. "dear is to me"). The subject of the feeling is in the dative, not nominative.',
        highlight: 'Žao mi je / Dosadno mi je / Drago mi je',
      },
      {
        type: 'table',
        title: 'Dative of Experience — Common Expressions',
        headers: ['Croatian', 'Literal meaning', 'English equivalent'],
        rows: [
          ['Žao mi je.', 'Sorrow is to me.', 'I am sorry. / I feel bad about it.'],
          ['Drago mi je.', 'Dear/pleasant is to me.', 'I am pleased. / Nice to meet you.'],
          ['Dosadno mi je.', 'Boring is to me.', 'I am bored.'],
          ['Hladno mi je.', 'Cold is to me.', 'I am cold.'],
          ['Toplo mi je.', 'Warm is to me.', 'I am warm.'],
          ['Muka mi je.', 'Nausea is to me.', 'I feel sick. / I am disgusted.'],
          ['Stalo mi je do tebe.', 'It matters to me — about you.', 'I care about you.'],
          ['Žao mi je za njega.', 'Sorrow is to me for him.', 'I feel sorry for him.'],
        ],
      },
      {
        type: 'rule',
        title: 'Čežnja — Longing That Has No English Word',
        body: '"Čežnja" (pronounced CHEZH-nya) is a deep, bittersweet longing — for a person, a place, a time that has passed. It is more intense than nostalgia and more poetic than homesickness. You "feel čežnja" — "osjećam čežnju" or "imam čežnju za domovinom" (I have a longing for home). Croatian literature and poetry is saturated with čežnja. When a Croatian says "ima nešto u njemu od te čežnje" — "there is something in him of that longing" — it is high praise.',
        highlight: 'čežnja = bittersweet deep longing',
      },
      {
        type: 'rule',
        title: 'Inat — Defiant Stubbornness',
        body: '"Inat" is a culturally specific attitude: doing something deliberately out of spite, stubbornness, or defiance — often against your own interest, just to prove a point. "Iz inata" (out of inat/spite) is a common phrase. "Samo iz inata ne odlazi" — "He stays only out of inat." Inat is sometimes worn as a badge of honor: the Dubrovnik defenders who held the city under siege were praised for their inat. It can be admirable resistance or frustrating stubbornness — context decides.',
        highlight: 'inat = defiant spite / stubborn pride',
      },
      {
        type: 'rule',
        title: 'Snalaziti se — The Art of Making It Work',
        body: '"Snalaziti se" (reflexive, imperfective) means to navigate, adapt, improvise, and make things work — usually in difficult circumstances. It is a core survival verb for Croatian life. "Snalazim se" = I am managing / I am figuring it out. "On se uvijek snađe" (He always manages / He always finds a way). Asking "Snalaziš li se?" is a warm, practical question: "Are you finding your way? Are you managing?" — richer than "Are you okay?"',
        highlight: 'snalaziti se = to adapt and manage',
      },
      {
        type: 'example',
        title: 'Feelings in Real Sentences — Listen',
        items: [
          { hr: 'Bojim se visine.', en: 'I am afraid of heights.', note: 'bojati se + genitive' },
          {
            hr: 'Nadam se da ćeš doći.',
            en: 'I hope you will come.',
            note: 'nadati se + da clause',
          },
          {
            hr: 'Žao mi je što si tužan.',
            en: 'I am sorry that you are sad.',
            note: 'dative of experience',
          },
          {
            hr: 'Dosadno mi je bez tebe.',
            en: 'I am bored without you.',
            note: 'dative + bez + genitive',
          },
          {
            hr: 'Snalazim se pomalo.',
            en: 'I am managing a little / finding my way.',
            note: 'snalaziti se = to adapt',
          },
          {
            hr: 'Iz inata, ostao je do kraja.',
            en: 'Out of spite/stubbornness, he stayed until the end.',
            note: 'iz inata = cultural phrase',
          },
          {
            hr: 'Čežnja za domovinom ne prolazi.',
            en: "The longing for one's homeland does not pass.",
            note: 'čežnja + za + instrumental',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Bojim se da ćemo zakasniti na vlak.',
            en: 'I am afraid we will miss the train.',
            note: 'bojati se + da clause',
          },
          {
            hr: 'Veselim se tvom dolasku!',
            en: 'I am looking forward to your arrival!',
            note: 'veseliti se + dative: tvom dolasku',
          },
          {
            hr: 'Sram me je zbog onoga što sam rekao.',
            en: 'I am ashamed of what I said.',
            note: 'sram me je — the feeling happens TO me',
          },
          {
            hr: 'Vruće mi je, otvori prozor.',
            en: 'I am hot, open the window.',
            note: 'dative of experience: vruće mi je',
          },
          {
            hr: 'Brinem se za baku, sama je.',
            en: 'I worry about grandma, she is alone.',
            note: 'brinuti se za + accusative',
          },
          {
            hr: 'Draže mi je more nego planine.',
            en: 'I prefer the sea to the mountains.',
            note: 'draže mi je — preference with the dative',
          },
          {
            hr: 'Nadam se boljem poslu sljedeće godine.',
            en: 'I hope for a better job next year.',
            note: 'nadati se + dative: boljem poslu',
          },
          {
            hr: 'Nedostaješ mi.',
            en: 'I miss you.',
            note: 'nedostajati — the missed person is the subject, the one who misses is dative',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'What case does "bojati se" (to be afraid of) take for its object?',
        options: ['Accusative', 'Dative', 'Genitive', 'Instrumental'],
        correct: 2,
        explanation:
          '"Bojati se" takes the GENITIVE case for its object: "Bojim se psa" (I am afraid of the dog — psa is genitive of pas). Many reflexive emotion verbs take the genitive. Compare: "veseliti se" and "nadati se" take the dative instead.',
      },
      {
        type: 'quiz',
        q: 'What does "Žao mi je" literally mean?',
        options: ['I feel happy', 'Sorrow is to me (I am sorry)', 'I am surprised', 'I am bored'],
        correct: 1,
        explanation:
          '"Žao mi je" uses the dative of experience pattern. "Žao" (sorrow/regret) is the subject, "mi" is the dative pronoun (to me), and "je" is the verb "to be". Literal: "Sorrow is to me." This pattern — emotional state in dative — is fundamental to expressing feelings naturally in Croatian.',
      },
      {
        type: 'quiz',
        q: 'What does "snalaziti se" most closely mean?',
        options: [
          'to feel lonely',
          'to be stubborn / do something out of spite',
          'to adapt and manage in difficult circumstances',
          'to long for something lost',
        ],
        correct: 2,
        explanation:
          '"Snalaziti se" = to navigate, adapt, improvise, and manage. "Snalazim se" = I am managing / figuring it out. The other options describe: "čežnja" (longing for something lost) and "inat" (stubborn spite). "Snalaziti se" is a core everyday verb in Croatian.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English speakers make themselves the subject of every feeling: 'Ja sam hladan' means I am cold to the touch or cold-hearted — the sensation is 'Hladno mi je'. Second, the reflexive 'se' gets dropped: 'Bojim psa' — the emotion verbs need it, 'Bojim se psa', with the genitive. Third, 'I miss you' is translated word for word, 'Ja nedostajem tebe' — Croatian turns it round: the missed person is the subject and the one who misses is dative, 'Nedostaješ mi'.",
        highlight: "the sensation is 'Hladno mi je'",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: '___ je, uzet ću jaknu.' (I am cold)",
            options: ['Ja sam hladan', 'Hladan mi', 'Hladno me', 'Hladno mi'],
            correct: 3,
            explanation:
              'A sensation is expressed with a neuter adverb and the dative: Hladno mi je. Ja sam hladan describes a cold person, not a cold feeling.',
          },
          {
            q: "Complete: 'Veselim se ___.' (to the holiday)",
            options: ['odmor', 'odmora', 'odmoru', 'odmorom'],
            correct: 2,
            explanation:
              'veseliti se takes the dative: odmoru. odmora would be the genitive, which belongs to bojati se.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Bojim psa.', 'Bojim se psa.', 'Bojim se psu.', 'Bojim se pas.'],
            correct: 1,
            explanation: 'bojati se keeps its se and governs the genitive: bojim se psa.',
          },
          {
            q: "Spot the error: 'Ja nedostajem tebe.' (meant: I miss you)",
            options: [
              'tebe should be tebi',
              'the whole sentence is reversed — Croatian says Nedostaješ mi',
              'nedostajem should be nedostaju',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'With nedostajati the missed person is the subject and the one who misses is in the dative: Nedostaješ mi. The English word order cannot be kept.',
          },
          {
            q: "What does 'Žao mi je' literally express?",
            options: ['sorrow is TO me — I am sorry', 'I am angry', 'I am bored', 'I am tired'],
            correct: 0,
            explanation:
              'žao + dative + je: the sorrow happens to the speaker. It is the standard way to say sorry or to express regret.',
          },
          {
            q: "Complete: 'Nadam se ___.' (for good weather)",
            options: ['dobro vrijeme', 'dobrog vremena', 'dobrom vremenu', 'dobrim vremenom'],
            correct: 2,
            explanation:
              'nadati se takes the dative: dobrom vremenu. The oblique forms of vrijeme are vremena / vremenu.',
          },
          {
            q: "Which verb takes 'za' + accusative for the thing you feel about?",
            options: ['bojati se', 'nadati se', 'brinuti se', 'sramiti se'],
            correct: 2,
            explanation:
              'brinuti se za + accusative: brinem se za tebe. bojati se and sramiti se take the genitive, nadati se the dative.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Feelings & Inner Life — Complete!',
        points: [
          'Reflexive emotion verbs use se: bojati se, sramiti se, nadati se, veseliti se',
          'bojati se / sramiti se take GENITIVE; nadati se / veseliti se take DATIVE',
          'Dative of experience: Žao mi je / Dosadno mi je / Drago mi je',
          'Čežnja = bittersweet longing that Croatian has no single English translation for',
          'Inat = defiant stubbornness — sometimes admired, sometimes frustrating',
          'Snalaziti se = to adapt and navigate — the essential Croatian life skill',
        ],
      },
    ],
  },
  {
    id: 'writing-registers',
    title: 'Croatian Writing Registers',
    subtitle:
      'From casual conversation to formal prose: passive voice, nominalizations, and discourse markers',
    icon: '✍️',
    level: 'B2',
    duration: '~15 min',
    color: '#1d4ed8',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'Registers in Croatian',
        body: 'Croatian has a wide range of registers — from casual spoken language to formal bureaucratic and literary prose. At B2 level, you need to recognize and produce text in multiple registers. The differences involve: vocabulary choice, verb constructions (especially passive voice), degree of nominalization, and the use of formal discourse markers. This lesson maps the landscape.',
        icon: '✍️',
      },
      {
        type: 'rule',
        title: 'Three Registers — The Spectrum',
        body: 'Informal (razgovorni): short sentences, colloquialisms, contractions, direct style. Used in: text messages, casual conversation, social media. Journalistic (novinarski): medium-length sentences, active voice preferred, some technical vocabulary. Used in: news articles, online media, magazines. Formal (formalni/administrativni): long sentences, passive constructions, nominalizations, impersonal style. Used in: official documents, academic writing, legal texts, formal correspondence.',
        highlight: 'razgovorni / novinarski / formalni',
      },
      {
        type: 'table',
        title: 'The Same Idea — Three Registers',
        headers: ['Register', 'Croatian example', 'Features'],
        rows: [
          ['Informal', 'Zakon su izmijenili.', 'Active, simple, direct (they changed the law)'],
          [
            'Journalistic',
            'Vlada je izmijenila zakon.',
            'Subject named, active voice, clear agent',
          ],
          [
            'Formal',
            'Zakon je izmijenjen od strane Vlade.',
            'Passive, nominalized, agent in prepositional phrase',
          ],
          ['Informal', 'Tražim posao.', 'First-person, direct'],
          ['Journalistic', 'Stopa nezaposlenosti raste.', 'Impersonal, nominalized subject'],
          [
            'Formal',
            'Provodi se postupak zapošljavanja.',
            'Reflexive passive, full nominalization',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Passive Voice — Two Constructions',
        body: 'Croatian forms passive voice in two ways. (1) SE passive (reflexive passive): the verb takes "se" and the agent is dropped — "Zakon se mijenja" (The law is being changed / The law changes — impersonal). Most common in everyday and journalistic writing. (2) Biti + past passive participle: "Zakon je izmijenjen" (The law has been changed). The participle agrees with the subject in gender and number. Formal texts heavily prefer the biti+participle construction.',
        highlight: 'se passive vs. biti + participle',
      },
      {
        type: 'table',
        title: 'Passive Voice — Formation Examples',
        headers: ['Active', 'SE Passive', 'Biti + Participle'],
        rows: [
          ['Gradimo kuću.', 'Kuća se gradi.', 'Kuća je izgrađena.'],
          ['Objavljuju rezultate.', 'Rezultati se objavljuju.', 'Rezultati su objavljeni.'],
          ['Zakon mijenjaju.', 'Zakon se mijenja.', 'Zakon je izmijenjen.'],
          ['Pišu izvještaj.', 'Izvještaj se piše.', 'Izvještaj je napisan.'],
        ],
      },
      {
        type: 'rule',
        title: 'Nominalization — Turning Verbs into Nouns',
        body: 'Formal Croatian heavily uses "verbal nouns" — converting verbs into nouns using the suffixes -anje, -enje or -jenje. This creates an impersonal, bureaucratic tone. Examples: zapošljavanje (employment, from zapošljavati), obrazovanje (education, from obrazovati), odobravanje (approval, from odobravati), provođenje (implementation, from provoditi), financiranje (financing, from financirati). A sentence like "Provodi se postupak odobravanja financiranja projekta" packs four nominalizations and is perfectly normal in official Croatian.',
        highlight: '-anje / -enje = nominalization suffix',
      },
      {
        type: 'table',
        title: 'Common Nominalizations',
        headers: ['Verb', 'Nominalization', 'English'],
        rows: [
          ['zapošljavati', 'zapošljavanje', 'employment / hiring'],
          ['obrazovati', 'obrazovanje', 'education'],
          ['odobravati', 'odobravanje', 'approval'],
          ['provoditi', 'provođenje', 'implementation / conducting'],
          ['financirati', 'financiranje', 'financing / funding'],
          ['istraživati', 'istraživanje', 'research / investigation'],
          ['razvijati', 'razvijanje / razvoj', 'development'],
          ['komunicirati', 'komunikacija', 'communication'],
        ],
      },
      {
        type: 'rule',
        title: 'Discourse Markers — Connecting Ideas Formally',
        body: 'Formal Croatian uses specific discourse markers to connect ideas logically. These signal contrast, addition, explanation, and result. Key markers: međutim (however), naime (namely / you see — explains/clarifies), pritom (in doing so / meanwhile), stoga (therefore), ipak (nevertheless / yet), štoviše (moreover / furthermore), osim toga (in addition / besides), s obzirom na to (given that / considering). Using these correctly signals C1+ writing competence.',
        highlight: 'međutim / naime / stoga / štoviše',
      },
      {
        type: 'table',
        title: 'Discourse Markers in Context',
        headers: ['Marker', 'Function', 'Example'],
        rows: [
          ['međutim', 'contrast (however)', 'Rezultati su dobri. Međutim, troškovi su visoki.'],
          ['naime', 'explanation (namely)', 'Problem je ozbiljan. Naime, nema sredstava.'],
          ['stoga', 'result (therefore)', 'Nema proračuna; stoga projekt kasni.'],
          ['pritom', 'simultaneous (in doing so)', 'Provode se mjere, pritom se štede resursi.'],
          ['štoviše', 'addition (moreover)', 'Rezultati su dobri, štoviše, odlični.'],
          ['ipak', 'concession (nevertheless)', 'Teško je, ipak nastavljamo.'],
          ['naprotiv', 'contrast (on the contrary)', 'Ne pada; naprotiv, raste.'],
        ],
      },
      {
        type: 'example',
        title: 'Register Shifts — Same Content, Different Registers',
        items: [
          {
            hr: 'Nisam dobio povišicu.',
            en: "I didn't get a raise.",
            note: 'Informal — direct, first person',
          },
          {
            hr: 'Zaposleniku je odbijena molba za povišicu plaće.',
            en: "The employee's salary increase request was denied.",
            note: 'Formal — passive, nominalization',
          },
          { hr: 'Ajmo.', en: "Let's go.", note: 'Informal — contracted imperative' },
          {
            hr: 'Predlaže se pokretanje postupka.',
            en: 'The initiation of proceedings is proposed.',
            note: 'Formal — se passive + nominalization',
          },
          {
            hr: 'Projekt kasni jer nema para.',
            en: "The project is delayed because there's no money.",
            note: 'Informal — colloquial "para"',
          },
          {
            hr: 'Projekt kasni zbog nedostatka financijskih sredstava.',
            en: 'The project is delayed due to lack of financial resources.',
            note: 'Formal — zbog + gen., nominalization',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Poštovana gospođo Kovač, javljam Vam se u vezi s natječajem.',
            en: 'Dear Mrs Kovač, I am writing to you regarding the competition.',
            note: 'formal opening; Vam capitalised; u vezi s + instrumental',
          },
          {
            hr: 'Bog Ana, jesi za kavu sutra?',
            en: 'Hi Ana, up for a coffee tomorrow?',
            note: 'informal message — ti, clipped question',
          },
          {
            hr: 'Molimo Vas da potvrdite primitak ove poruke.',
            en: 'Please confirm receipt of this message.',
            note: 'molimo Vas da + verb — formal request',
          },
          {
            hr: 'Unaprijed zahvaljujem na odgovoru. S poštovanjem, Ivan Horvat',
            en: 'Thank you in advance for your reply. Yours sincerely, Ivan Horvat',
            note: 'standard closing formula',
          },
          {
            hr: 'Sastanak se odgađa zbog bolesti predavača.',
            en: "The meeting is postponed due to the lecturer's illness.",
            note: 'se-passive + zbog + genitive — notice register',
          },
          {
            hr: 'Nema frke, vidimo se u pet.',
            en: 'No worries, see you at five.',
            note: 'colloquial frka — never in a formal email',
          },
          {
            hr: 'Ovim putem obavještavamo korisnike o promjeni radnog vremena.',
            en: 'We hereby inform users of the change in opening hours.',
            note: 'ovim putem — a written-only formula',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which passive construction is most characteristic of formal/bureaucratic Croatian?',
        options: [
          'SE passive (Zakon se mijenja)',
          'Active voice with named subject',
          'Biti + past passive participle (Zakon je izmijenjen)',
          'Modal verb constructions',
        ],
        correct: 2,
        explanation:
          'Formal/bureaucratic Croatian strongly prefers the biti + past passive participle construction: "Zakon je izmijenjen", "Projekt je odobren", "Izvještaj je napisan". The SE passive is more common in everyday and journalistic writing. Active voice is preferred in journalistic style but avoided in formal documents.',
      },
      {
        type: 'quiz',
        q: 'What is a nominalization in Croatian?',
        options: [
          'A noun in the nominative case',
          'A verb converted into a noun using suffixes like -anje or -enje',
          'A passive verb form',
          'A discourse marker connecting two clauses',
        ],
        correct: 1,
        explanation:
          'Nominalization converts a verb into a noun: zapošljavati → zapošljavanje, obrazovati → obrazovanje, provoditi → provođenje. This creates the impersonal, abstract tone of formal Croatian. Heavy nominalization stacks like "postupak odobravanja financiranja" are common in official documents.',
      },
      {
        type: 'quiz',
        q: 'Which discourse marker means "namely" or "you see" (introduces an explanation)?',
        options: ['međutim', 'stoga', 'naime', 'pritom'],
        correct: 2,
        explanation:
          '"Naime" introduces an explanation or clarification of the previous statement: "Problem je ozbiljan. Naime, nema sredstava." (The problem is serious. Namely/You see, there are no resources.) "Međutim" = however, "stoga" = therefore, "pritom" = in doing so.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners open a formal email like a chat: 'Bog, imam pitanje' to a professor — the written formal opening is 'Poštovani' / 'Poštovana', with Vi throughout and 'S poštovanjem' to close. Second, spoken fillers leak into writing: 'znači', 'ono', 'frka' belong to speech; in a report they read as unedited. Third, the register is mixed inside one text: 'Poštovani, možeš li mi poslati…' — once you have chosen Vi, every verb, pronoun and closing must stay Vi.",
        highlight: 'once you have chosen Vi, every verb, pronoun and closing must stay Vi',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete a formal email opening to a woman: '___ gospođo Perić,'",
            options: ['Bog', 'Draga', 'Poštovana', 'Hej'],
            correct: 2,
            explanation:
              'Poštovana (to a woman) / Poštovani (to a man) is the formal opening. Draga is for someone you know well; Bog and Hej are speech.',
          },
          {
            q: "Complete the formal closing: '___, Marko Babić'",
            options: ['Vidimo se', 'S poštovanjem', 'Ajde', 'Čujemo se'],
            correct: 1,
            explanation:
              'S poštovanjem (with respect) is the standard formal sign-off. The others are spoken goodbyes.',
          },
          {
            q: 'Which sentence belongs in an official notice?',
            options: [
              'Prodaja kruha obustavlja se do daljnjega.',
              'Nema kruha, dođi sutra.',
              'Kruh je pojeden, sori.',
              'Nema frke, sutra ima kruha.',
            ],
            correct: 0,
            explanation:
              'The se-passive, the nominalisation prodaja and the formula do daljnjega mark the administrative register. The others are speech.',
          },
          {
            q: "Spot the register error: 'Poštovani profesore, možeš li mi poslati prezentaciju? S poštovanjem, Ana'",
            options: [
              'Poštovani should be Dragi',
              'možeš should be možete — Vi throughout',
              'prezentaciju should be prezentacija',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              'The opening and closing are Vi-register, so the verb must be too: možete li mi poslati. One ti-form breaks the whole email.',
          },
          {
            q: "What does 'ovim putem' signal?",
            options: [
              'a road direction',
              'an informal joke',
              'a question',
              "a written, formal announcement ('hereby')",
            ],
            correct: 3,
            explanation:
              "'By this means' — a fixed formula of official correspondence and notices. It is never spoken.",
          },
          {
            q: 'Which feature marks the FORMAL register?',
            options: [
              'short sentences and ti',
              'nominalisations and the biti-passive',
              'diminutives (kavica)',
              'discourse markers like ono, znači',
            ],
            correct: 1,
            explanation:
              'Formal Croatian favours verbal nouns and biti + participle; the other three are marks of informal speech.',
          },
          {
            q: "Complete: 'Molimo Vas ___ potvrdite dolazak.'",
            options: ['što', 'jer', 'kad', 'da'],
            correct: 3,
            explanation:
              'The request formula is molimo Vas da + present: Molimo Vas da potvrdite. što would mean what.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Croatian Writing Registers — Complete!',
        points: [
          'Three registers: informal (razgovorni), journalistic (novinarski), formal (formalni)',
          'SE passive: Zakon se mijenja — impersonal, common in all registers',
          'Biti + participle: Zakon je izmijenjen — formal register preferred',
          'Nominalization: -anje/-enje turns verbs into abstract nouns',
          'Discourse markers signal logical relationships: međutim/naime/stoga/štoviše',
          'Formal Croatian stacks nominalizations and passive constructions freely',
        ],
      },
    ],
  },
  {
    id: 'language-identity',
    title: 'Croatian Language Identity',
    subtitle:
      'Purism, the Glagolitic legacy, dialect dignity, and language anxiety in the diaspora',
    icon: '🇭🇷',
    level: 'C1',
    duration: '~15 min',
    color: '#991b1b',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'Language as Identity',
        body: 'For Croatians, language is not merely a communication tool — it is a marker of national identity, historical survival, and cultural pride. The Croatian standard language emerged through centuries of resistance: against Ottoman pressure, Habsburg rule, and Yugoslav-era linguistic standardization. Understanding this history helps you understand why Croatians care so deeply about language, and why your Croatian — even imperfect — is received with warmth.',
        icon: '🇭🇷',
      },
      {
        type: 'rule',
        title: 'Post-Independence Lexical Divergence from Serbian',
        body: 'After independence in 1991, Croatian underwent deliberate lexical differentiation from Serbian. Words that had been shared were replaced with distinctly Croatian forms or revived historical terms. Examples: vlak (train) vs. Serbian voz; tisuća (thousand) vs. Serbian hiljada; tjedan (week) vs. Serbian nedelja; zrakoplov (airplane) vs. Serbian avion; sveučilište (university) vs. Serbian univerzitet. This was not arbitrary — it was a conscious assertion of distinct cultural identity after decades of pressure toward a unified "Serbo-Croatian".',
        highlight: 'vlak / tisuća / tjedan / zrakoplov',
      },
      {
        type: 'table',
        title: 'Croatian vs Serbian Lexical Pairs',
        headers: ['Meaning', 'Croatian', 'Serbian', 'Note'],
        rows: [
          ['train', 'vlak', 'voz', 'Croatian term historically prior'],
          ['thousand', 'tisuća', 'hiljada', 'tisuća from Old Slavic'],
          ['week', 'tjedan', 'nedelja', 'Croatian nedjelja (-dje-) = Sunday, not week'],
          ['airplane', 'zrakoplov', 'avion', 'zrakoplov = air-boat, native compound'],
          ['university', 'sveučilište', 'univerzitet', 'sveučilište = all-learning-place'],
          ['hospital', 'bolnica', 'bolnica', 'same in both (not all words differ)'],
          ['hello', 'bog / ćao', 'zdravo', 'bog = informal; formal = dobar dan'],
          ['thank you', 'hvala', 'hvala', 'same (Slavic root)'],
        ],
      },
      {
        type: 'rule',
        title: 'Language Purism and Word Revival',
        body: 'Croatian has a tradition of "purist" word creation — preferring native Slavic roots over international loanwords when possible. The 19th-century National Revival (Narodni preporod) and the work of Vjekoslav Babukić and Bogoslav Šulek established hundreds of Croatian words. Šulek coined: tiskovnica (newspaper/printing office), brzojav (telegram, lit. fast-message), prirodopis (natural history), plinovod (gas pipe, lit. gas-conductor). This tradition continues — many Croatian scientists and linguists still prefer native terms.',
        highlight: 'natural Slavic roots preferred over Latin/Greek loans',
      },
      {
        type: 'rule',
        title: 'The Glagolitic Script — A Living Heritage',
        body: 'The Glagolitic script (glagoljica) was created in the 9th century by Saints Cyril and Methodius. While most Slavic languages moved to Cyrillic or Latin, Croatia maintained Glagolitic in religious and official use until the 18th century — uniquely long in Europe. The Baška Tablet (Bašćanska ploča, c. 1100 CE), the oldest monument naming a Croatian king in Croatian, is written in Glagolitic. Today, Glagolitic is used in art, logos, and street signs across Dalmatia and Istria as a symbol of cultural pride and continuity.',
        highlight: 'glagoljica = Croatian cultural anchor since 9th century',
      },
      {
        type: 'rule',
        title: 'Dialect Dignity — Čakavian and Kajkavian',
        body: 'Standard Croatian is based on Štokavian, but two other dialects — Čakavian and Kajkavian — are alive and treasured. Čakavian (spoken on the Dalmatian coast, Kvarner islands, and Istria) was the language of early Croatian literature: Marko Marulić\'s Judita (1501) is Čakavian. Kajkavian (Zagreb region) sounds more like Slovenian and was the language of Baroque Croatian poetry. Neither dialect is "broken Croatian" — both are distinct systems with UNESCO recognition as cultural heritage. When you hear a grandmother in a Dalmatian village speak Čakavian, you are hearing a living medieval language.',
        highlight: 'Čakavian and Kajkavian are treasured heritage dialects',
      },
      {
        type: 'rule',
        title: 'Language Anxiety in the Diaspora',
        body: 'Croatian diaspora communities (in Germany, Austria, USA, Australia, Canada, and elsewhere) often experience "language anxiety" — a complex mix of pride, guilt, and uncertainty about their Croatian. Heritage speakers may code-switch unconsciously, mix in loanwords from the host language, or feel embarrassed by regional Croatian influenced by their grandparents\' dialect. The honest answer from linguists: heritage Croatian is not inferior Croatian. It preserves features, idioms, and vocabulary that have since changed in Croatia. When you speak it, you are keeping the language alive in ways that textbooks cannot.',
        highlight: 'heritage Croatian is not broken Croatian',
      },
      {
        type: 'example',
        title: 'Language Identity in Context — Listen',
        items: [
          {
            hr: 'Čuvamo jezik kao dragocjenost.',
            en: 'We guard the language like a treasure.',
            note: 'Common sentiment among Croatian linguists',
          },
          {
            hr: 'Glagoljica je naš otisak prsta u povijesti.',
            en: 'Glagolitic is our fingerprint in history.',
            note: 'Common metaphor for Glagolitic heritage',
          },
          {
            hr: 'Govorim onako kako su me roditelji naučili.',
            en: 'I speak the way my parents taught me.',
            note: 'Heritage speaker perspective',
          },
          {
            hr: 'Jezik nije samo komunikacija — to je tko smo.',
            en: 'Language is not just communication — it is who we are.',
            note: 'Core Croatian linguistic identity claim',
          },
          {
            hr: 'Naš vlak, naš zrakoplov, naša tisuća.',
            en: 'Our train, our airplane, our thousand.',
            note: 'The distinctly Croatian vocabulary',
          },
          {
            hr: 'Iz inata, govorimo po svome.',
            en: 'Out of stubborn pride, we speak our own way.',
            note: 'Connects to cultural concept of inat',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Hrvatski standard temelji se na štokavskom narječju ijekavskoga izgovora.',
            en: 'The Croatian standard is based on the Štokavian dialect with ijekavian pronunciation.',
            note: 'ijekavski: lijep, mlijeko, vrijeme — the reflex that marks the standard',
          },
          {
            hr: 'Vlakom od Zagreba do Splita putuje se nekoliko sati.',
            en: 'By train from Zagreb to Split the journey takes several hours.',
            note: 'vlak — the Croatian choice a reader notices at once',
          },
          {
            hr: 'Tisuću godina stara glagoljica još se uči u školama.',
            en: 'The thousand-year-old Glagolitic script is still taught in schools.',
            note: 'tisuća — the Croatian numeral word',
          },
          {
            hr: 'Sveučilište u Zagrebu osnovano je 1669. godine.',
            en: 'The University of Zagreb was founded in 1669.',
            note: 'sveučilište — native compound for university',
          },
          {
            hr: 'Moja baka govori čakavski, a djed kajkavski — i oboje su Hrvati.',
            en: 'My grandmother speaks Čakavian and my grandfather Kajkavian — and both are Croats.',
            note: 'dialects are Croatian, not lesser Croatian',
          },
          {
            hr: 'U tjedan dana naučio sam mjesece: siječanj, veljača, ožujak.',
            en: 'In a week I learned the months: January, February, March.',
            note: 'tjedan and the Slavic month names — both distinctly Croatian',
          },
          {
            hr: 'Zrakoplov slijeće u zračnu luku Zadar.',
            en: 'The plane is landing at Zadar airport.',
            note: 'zrakoplov, zračna luka — purist compounds in everyday use',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Why does Croatian use "vlak" instead of "voz" for train?',
        options: [
          '"Voz" is incorrect Croatian grammar',
          '"Vlak" is a post-independence lexical choice to assert distinct Croatian identity from Serbian',
          '"Vlak" was borrowed from German',
          'There is no difference — both are used equally in Croatia',
        ],
        correct: 1,
        explanation:
          '"Vlak" is the Croatian word for train, historically used and reinforced after 1991 independence as part of deliberate lexical differentiation from Serbian (which uses "voz"). This reflects a broader conscious effort to develop distinctly Croatian vocabulary, not a claim that "voz" is grammatically wrong.',
      },
      {
        type: 'quiz',
        q: 'What is the Baška Tablet (Bašćanska ploča)?',
        options: [
          'A medieval Croatian legal code from 1288',
          'The oldest Croatian Glagolitic monument naming a Croatian king in Croatian (c. 1100 CE)',
          'A 19th-century linguistic manifesto establishing the Croatian standard language',
          'A Byzantine map of the Adriatic coast',
        ],
        correct: 1,
        explanation:
          'The Baška Tablet (c. 1100 CE) is the oldest Croatian Glagolitic monument that mentions a Croatian king (King Zvonimir) in the Croatian language. It is a symbol of Croatian linguistic continuity — written in Glagolitic when most of Europe was switching to Latin or Cyrillic.',
      },
      {
        type: 'quiz',
        q: "What is the correct way to understand a heritage speaker's Croatian that mixes dialects and loanwords?",
        options: [
          'As broken or degraded Croatian that needs to be corrected',
          'As a fossilized old Croatian that cannot adapt',
          'As a living form of Croatian that preserves features and keeps the language alive in the diaspora',
          'As a different language entirely, not Croatian',
        ],
        correct: 2,
        explanation:
          'Heritage Croatian is a living, legitimate form of the language. It often preserves older vocabulary and regional features that have since changed in Croatia itself. Diaspora speakers may mix in loanwords from the host country, but this is code-switching — a normal bilingual phenomenon, not language "corruption". Linguists treat heritage Croatian as valuable data about language change.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Heritage speakers often carry family vocabulary from the wider region and are unsure which word the standard prefers: the safe rule is the one this lesson lists — vlak, tisuća, tjedan, zrakoplov, sveučilište — and the ijekavian reflex (lijep, mlijeko, vrijeme) throughout. Second, learners overcorrect and reject every shared word: hvala, bolnica and voda are Croatian, and 'purifying' them invents forms nobody uses. Third, dialect is treated as error: a grandmother's čakavski is not wrong Croatian, so correct only the STANDARD forms in writing and leave her speech alone.",
        highlight: 'correct only the STANDARD forms in writing',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Which is the Croatian word for 'a thousand'?",
            options: ['stotina', 'milijun', 'tisuća', 'desetak'],
            correct: 2,
            explanation:
              'tisuća (from Old Slavic) is the standard Croatian numeral. stotina is a hundred, milijun a million, desetak about ten.',
          },
          {
            q: "Complete: 'Prošli ___ bio sam u Osijeku.' (last week)",
            options: ['mjesec', 'dan', 'sat', 'tjedan'],
            correct: 3,
            explanation:
              'tjedan is the Croatian word for week; mjesec is month, dan day, sat hour.',
          },
          {
            q: "Which reflex does the Croatian standard use in 'lijep', 'mlijeko', 'vrijeme'?",
            options: [
              'ijekavian — the old yat became ije / je',
              'ikavian — the old yat became i',
              'ekavian — the old yat became e',
              'none — those words have no yat',
            ],
            correct: 0,
            explanation:
              'Standard Croatian is ijekavian. The ikavian reflex lives in Croatian dialects along the coast; the ekavian reflex marks Kajkavian locally and other standards elsewhere.',
          },
          {
            q: "Spot the misconception: 'Moja baka govori čakavski, znači govori loš hrvatski.'",
            options: [
              'čakavski is a Croatian dialect with its own literary tradition — not bad Croatian',
              'baka should be bake',
              'govori should be govoriti',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              "Marulić's Judita is Čakavian. A dialect is a full system, not a failed attempt at the standard.",
          },
          {
            q: "What does 'sveučilište' literally build from?",
            options: [
              'svet + učiti — holy learning',
              'sve + učilište — a place of all learning',
              'sve + čitati — reading everything',
              'svijet + list — world leaf',
            ],
            correct: 1,
            explanation:
              'sve (all) + učilište (place of learning): the native compound the purist tradition preferred to a Latin loan.',
          },
          {
            q: 'Which script is the Baška Tablet written in?',
            options: ['Latin', 'Glagolitic', 'Cyrillic', 'Greek'],
            correct: 1,
            explanation:
              'The Baška Tablet (c. 1100) is Glagolitic, the script Croatia kept in use longer than any other Slavic country.',
          },
          {
            q: 'A heritage speaker mixes English words into Croatian at home. The linguistically sound reaction is:',
            options: [
              'correct every word — it is broken Croatian',
              'ask them to stop speaking Croatian',
              'assume they are not Croatian',
              'treat it as normal bilingual code-switching, and use the standard forms in writing',
            ],
            correct: 3,
            explanation:
              'Code-switching is ordinary bilingual behaviour. Heritage Croatian is living Croatian; the standard is what you aim for on paper.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Croatian Language Identity — Complete!',
        points: [
          'Post-1991: vlak, tisuća, tjedan, zrakoplov, sveučilište — deliberate Croatian lexical choices',
          'Purism tradition: Šulek and the National Revival created hundreds of native Croatian words',
          'Glagolitic script (glagoljica): Croatian cultural identity anchor since the 9th century',
          'Čakavian and Kajkavian are treasured heritage dialects, not inferior forms',
          'Heritage Croatian is not broken Croatian — it preserves the language in the diaspora',
          'Language is identity: for Croatians, speaking Croatian is a political and cultural act',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C1 — C1: Aorist & Imperfekt
  // ─────────────────────────────────────────────────────────
  {
    id: 'aorist-imperfekt',
    title: 'C1: Aorist & Imperfekt',
    subtitle: 'The literary past tenses — read novels, poetry and older prose',
    icon: '📜',
    level: 'C1',
    duration: '~8 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Two Tenses Hiding in Every Croatian Novel',
        body: 'Everyday Croatian uses one past tense — the perfekt (rekao sam). But open any novel, epic poem, or 19th-century text and you will meet two more: the aorist (for completed, sudden events) and the imperfekt (for ongoing past states). Native speakers rarely produce them in speech, but every educated reader recognizes them instantly. At C1, so should you.',
        icon: '📜',
      },
      {
        type: 'rule',
        title: 'The Aorist — Sudden, Completed, Dramatic',
        body: 'The aorist is built from PERFECTIVE verbs and narrates completed events in quick succession — the camera-cut tense of storytelling. Endings: -h, -Ø, -Ø, -smo, -ste, -še. From reći: rekoh, reče, reče, rekosmo, rekoste, rekoše. From doći: dođoh, dođe... In modern speech it survives in short dramatic bursts and in text messages for punch.',
        highlight: 'rekoh · reče · rekosmo · rekoše — perfective + sudden',
      },
      {
        type: 'rule',
        title: 'The Imperfekt — Ongoing Past Background',
        body: 'The imperfekt is built from IMPERFECTIVE verbs and paints the background: what was going on, lasting states, repeated past action. Endings: -ah/-jah/-ijah... From biti: bijah, bijaše, bijasmo. From gledati: gledah, gledaše. From živjeti: življah, življaše. It is the wallpaper of literary narration — the aorist acts in front of it.',
        highlight: 'bijaše · gledaše · življaše — imperfective + background',
      },
      {
        type: 'example',
        title: 'Aorist in Action — Rapid Narration',
        items: [
          {
            hr: 'Uđe u sobu i sjede za stol.',
            en: 'He entered the room and sat down at the table.',
            note: 'uđe, sjede — aorist 3sg: two quick completed actions',
          },
          {
            hr: 'Pogledah je i shvatih sve.',
            en: 'I looked at her and understood everything.',
            note: 'pogledah, shvatih — aorist 1sg (-h)',
          },
          {
            hr: 'Svi zašutješe kad on progovori.',
            en: 'Everyone fell silent when he spoke up.',
            note: 'zašutješe (3pl -še), progovori (3sg)',
          },
          {
            hr: 'Stigosmo u zoru.',
            en: 'We arrived at dawn.',
            note: 'stigosmo — aorist 1pl (-smo)',
          },
        ],
      },
      {
        type: 'example',
        title: 'Imperfekt in Action — The Background',
        items: [
          {
            hr: 'Bijaše hladna jesenska noć.',
            en: 'It was a cold autumn night.',
            note: 'bijaše — imperfekt of biti, scene-setting',
          },
          {
            hr: 'Starac življaše sam na otoku.',
            en: 'The old man lived alone on the island.',
            note: 'življaše — lasting state',
          },
          {
            hr: 'Djeca se igrahu na trgu dok zvona zvonjahu.',
            en: 'The children were playing on the square while the bells rang.',
            note: 'igrahu, zvonjahu — parallel ongoing action',
          },
          {
            hr: 'Gledaše me dugo, bez riječi.',
            en: 'He watched me for a long time, without a word.',
            note: 'gledaše — duration, not a sudden event',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kad ugledah more, srce mi zaigra.',
            en: 'When I caught sight of the sea, my heart leapt.',
            note: 'ugledah (1sg), zaigra (3sg) — two aorists',
          },
          {
            hr: 'Rekoh ti da ne ideš tamo!',
            en: 'I told you not to go there!',
            note: 'rekoh — the aorist that survives in speech, for punch',
          },
          {
            hr: 'Bijasmo mladi i ništa nas ne plašaše.',
            en: 'We were young and nothing frightened us.',
            note: 'bijasmo, plašaše — imperfekt background',
          },
          {
            hr: 'Dođoše gosti, sjedoše za stol i zapjevaše.',
            en: 'The guests came, sat down at the table and began to sing.',
            note: 'three aorists in -še — rapid narration',
          },
          {
            hr: 'Dok on govoraše, svi ga pažljivo slušahu.',
            en: 'While he was speaking, everyone listened to him attentively.',
            note: 'govoraše, slušahu — parallel imperfekts',
          },
          {
            hr: 'Odjednom se sve utiša.',
            en: 'Suddenly everything went quiet.',
            note: 'utiša — aorist 3sg of utišati se',
          },
          {
            hr: 'Stigosmo, vidjesmo, otiđosmo — ništa se nije promijenilo.',
            en: 'We arrived, we saw, we left — nothing had changed.',
            note: 'aorist 1pl -smo three times',
          },
          {
            hr: 'Kraljevi vladahu, a narod trpljaše.',
            en: 'Kings ruled and the people suffered.',
            note: 'vladahu, trpljaše — imperfekt for lasting states',
          },
        ],
      },
      {
        type: 'table',
        title: 'Aorist vs Imperfekt vs Perfekt',
        headers: ['Tense', 'Aspect', 'Feel', 'Example'],
        rows: [
          ['Aorist', 'perfective', 'sudden, completed, dramatic', 'reče — he said (snap)'],
          ['Imperfekt', 'imperfective', 'ongoing background state', 'gledaše — he was watching'],
          ['Perfekt', 'both', 'neutral everyday past', 'rekao je / gledao je'],
          ['Pluskvamperfekt', 'both', 'past before the past', 'bio je rekao'],
        ],
      },
      {
        type: 'rule',
        title: "Recognition Trap — 'bi' and 'bih' Are Also Aorist",
        body: "The conditional clitics bih/bi/bismo/biste are historically the AORIST of biti. That is why 'Ja bih došao' literally carries an old aorist inside it. When you meet bare 'bi' in older texts it can be a true aorist ('On bi kralj' — he became king), not a conditional. Context decides: conditional needs an l-participle nearby.",
        highlight: 'bih/bi/bismo = aorist of biti → the conditional was born from it',
      },
      {
        type: 'quiz',
        q: "In 'Svi zašutješe kad starac progovori', what is 'zašutješe'?",
        options: [
          'Present tense, 3rd plural',
          'Aorist, 3rd plural',
          'Imperfekt, 3rd plural',
          'Conditional',
        ],
        correct: 1,
        explanation:
          'zašutješe is the aorist 3rd plural (-še) of the perfective zašutjeti — a sudden completed event: everyone fell silent at once. The imperfekt of an ongoing state would be šućahu/šutjehu from the imperfective šutjeti.',
      },
      {
        type: 'quiz',
        q: 'Which sentence uses the imperfekt correctly — as ongoing past background?',
        options: [
          'More šumljaše pod prozorom.',
          'More zašumje pod prozorom.',
          'More je zašumjelo pod prozorom.',
          'More će šumjeti pod prozorom.',
        ],
        correct: 0,
        explanation:
          'šumljaše is the imperfekt of the imperfective šumjeti — the sea WAS murmuring, a background state. zašumje (aorist of perfective zašumjeti) is a single sudden event, the perfekt is neutral everyday past, and the last option is future.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners build an aorist from an imperfective: 'gledah' is an IMPERFEKT (I was watching); the aorist needs the perfective, 'pogledah'. Second, the two are read as one 'old past': the aorist snaps (reče — he said, at once), the imperfekt lingers (govoraše — he was speaking), and mixing them changes the pace of a passage. Third, in modern prose they are sprinkled at random for flavour: use the aorist for the beats of a story and the perfekt for the rest, or the text reads as parody.",
        highlight: 'the aorist snaps',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete with an aorist: 'Ona ___ i izađe.' (she stood up — ustati)",
            options: ['ustajaše', 'ustade', 'ustala je', 'ustaje'],
            correct: 1,
            explanation:
              'The aorist of the perfective ustati is ustade (3sg). ustajaše is an imperfekt, ustala je the perfekt, ustaje the present.',
          },
          {
            q: "Complete with an imperfekt: 'Vani ___ jak vjetar.' (was blowing — puhati)",
            options: ['puhnu', 'puhao je', 'puše', 'puhaše'],
            correct: 3,
            explanation:
              'puhaše is the imperfekt of the imperfective puhati — ongoing background. puhnu is an aorist of the perfective puhnuti.',
          },
          {
            q: 'Which sentence uses the aorist correctly for a sudden completed event?',
            options: [
              'Vrata se zatvoriše uz tresak.',
              'Vrata se zatvarahu uz tresak.',
              'Vrata su se zatvarala uz tresak.',
              'Vrata se zatvaraju uz tresak.',
            ],
            correct: 0,
            explanation:
              'zatvoriše is the aorist 3pl of the perfective zatvoriti — a slam. zatvarahu (imperfekt) and the perfekt of zatvarati describe the process.',
          },
          {
            q: "Spot the error: 'Bijaše hladno, i on odjednom zadrhtaše.'",
            options: [
              'zadrhtaše is 3rd plural — with on it must be zadrhta',
              'bijaše should be bi',
              'hladno should be hladan',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              '-še is the 3rd person PLURAL aorist ending; the singular has no ending: on zadrhta. bijaše hladno is a correct imperfekt.',
          },
          {
            q: "What does the aorist 'reče' convey that the perfekt 'rekao je' does not?",
            options: [
              'politeness',
              'that the speaker is female',
              'a sudden, dramatic completed action in narration',
              'habitual repetition',
            ],
            correct: 2,
            explanation:
              'The aorist is the camera-cut tense of storytelling; the perfekt is neutral everyday past.',
          },
          {
            q: "In an old text you read 'On bi kralj.' What is 'bi' here?",
            options: [
              'a conditional auxiliary',
              'the aorist of biti — he became king',
              'the imperfekt of biti',
              'a typo for je',
            ],
            correct: 1,
            explanation:
              'With no l-participle nearby, bare bi is the aorist of biti. The conditional needs a participle (bi došao).',
          },
          {
            q: "Which verb forms the imperfekt 'bijaše'?",
            options: ['biti', 'bježati', 'biti se', 'bijeliti'],
            correct: 0,
            explanation:
              'bijah, bijaše, bijasmo… is the imperfekt of biti (to be), the most frequent imperfekt in literature.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Literary Past Tenses — What to Keep',
        points: [
          'Aorist = perfective verbs, sudden completed narration: rekoh, reče, rekoše',
          'Imperfekt = imperfective verbs, ongoing background: bijaše, gledaše, življaše',
          'Everyday speech uses perfekt for both jobs — these two are for reading and style',
          'Conditional bih/bi/bismo is historically the aorist of biti',
          'You need to RECOGNIZE them reliably; producing them is stylistic seasoning',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C1 — C1: Word Formation (Tvorba riječi)
  // ─────────────────────────────────────────────────────────
  {
    id: 'tvorba-rijeci',
    title: 'C1: Word Formation (Tvorba riječi)',
    subtitle: 'Prefixes, suffixes, diminutives & augmentatives — grow your vocabulary tenfold',
    icon: '🧱',
    level: 'C1',
    duration: '~8 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'One Root, Twenty Words',
        body: 'Croatian builds words like Lego. From pisati (to write) you get napisati, prepisati, potpisati, upisati, otpisati, zapisati, opisati — each prefix shifts the meaning predictably. Learn the building blocks and every unknown word becomes three familiar pieces instead of a mystery.',
        icon: '🧱',
      },
      {
        type: 'table',
        title: 'The Core Verb Prefixes',
        headers: ['Prefix', 'Core meaning', 'pisati becomes', 'Meaning'],
        rows: [
          ['na-', 'onto / complete', 'napisati', 'to write (down), finish writing'],
          ['pre-', 'across / re-do', 'prepisati', 'to copy; to rewrite'],
          ['pot-', 'under', 'potpisati', 'to sign (write under)'],
          ['u-', 'into', 'upisati', 'to enrol, write into'],
          ['o-', 'around / about', 'opisati', 'to describe'],
          ['za-', 'begin / fix', 'zapisati', 'to note down'],
        ],
      },
      {
        type: 'rule',
        title: 'Agent Suffixes — Who Does It',
        body: '-telj makes a doer from a verb with a formal tone: učiti → učitelj (teacher), čitati → čitatelj (reader), slušati → slušatelj (listener). -ač is more everyday/technical: igrati → igrač (player), nositi → nosač (porter; bracket). -ar marks trades: zlato → zlatar (goldsmith), knjiga → knjižar (bookseller).',
        highlight: '-telj (formal doer) · -ač (doer/device) · -ar (trade)',
      },
      {
        type: 'rule',
        title: 'Diminutives — Small, Dear, or Ironic',
        body: "-ić/-čić (masculine): grad → gradić (little town), kamen → kamenčić (pebble). -ica (feminine): kuća → kućica (little house), knjiga → knjižica (booklet). -ce (neuter): selo → selce. Diminutives also carry affection (sinčić — dear little son) or irony ('lijepa plaćica' — some 'nice' little salary).",
        highlight: 'gradić · kamenčić · kućica · knjižica',
      },
      {
        type: 'rule',
        title: 'Augmentatives — Big, Clumsy, Often Pejorative',
        body: '-ina/-etina/-urina make things big and usually add a sneer: kuća → kućerina (great hulking house), ruka → ručetina (huge paw of a hand), glava → glavurina (big ugly head), nos → nosina. Beware: some -ina words are neutral size-words or even respectful (momčina — a great guy). Tone lives in context.',
        highlight: 'kućerina · ručetina · glavurina — big + attitude',
      },
      {
        type: 'example',
        title: 'The Full Scale — One Root, Three Sizes',
        items: [
          {
            hr: 'kuća → kućica → kućerina',
            en: 'house → cottage → hulking great house',
            note: 'neutral → endearing → pejorative',
          },
          {
            hr: 'Kupili su kućicu na moru.',
            en: 'They bought a little house by the sea.',
            note: 'diminutive = affection, not just size',
          },
          {
            hr: 'Ta njihova kućerina guta struju.',
            en: 'That great pile of theirs devours electricity.',
            note: 'augmentative = size + mild disapproval',
          },
          {
            hr: 'Radost, mladost, hrabrost — sve na -ost.',
            en: 'Joy, youth, courage — all in -ost.',
            note: '-ost builds abstract nouns from adjectives',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Prepisao je zadaću od prijatelja i učiteljica je to odmah primijetila.',
            en: 'He copied the homework from a friend and the teacher noticed at once.',
            note: 'pre- + pisati = copy',
          },
          {
            hr: 'Potpišite ugovor na dnu stranice.',
            en: 'Sign the contract at the bottom of the page.',
            note: 'pot- (under) + pisati = sign',
          },
          {
            hr: 'Upisala se na sveučilište u Splitu.',
            en: 'She enrolled at the university in Split.',
            note: 'u- (into) + pisati = enrol',
          },
          {
            hr: 'Slušatelji su pozorno pratili predavanje.',
            en: 'The listeners followed the lecture attentively.',
            note: 'slušati + -telj = listener; predavanje — verbal noun',
          },
          {
            hr: 'Kupili smo stančić u starom gradiću.',
            en: 'We bought a tiny flat in an old little town.',
            note: 'stan → stančić, grad → gradić — diminutives',
          },
          {
            hr: 'Kakva kišurina — pokisli smo do kože!',
            en: 'What a downpour — we got soaked to the skin!',
            note: 'kiša → kišurina — augmentative',
          },
          {
            hr: 'Njegova iskrenost i hrabrost svima su poznate.',
            en: 'His honesty and courage are known to everyone.',
            note: 'iskren, hrabar → -ost abstract nouns',
          },
          {
            hr: 'Pekar u našoj ulici peče najbolji kruh.',
            en: 'The baker in our street bakes the best bread.',
            note: 'peći → pekar — a trade in -ar',
          },
          {
            hr: 'Zapisala sam broj na papirić.',
            en: 'I noted the number down on a scrap of paper.',
            note: 'za- + pisati = note down; papir → papirić',
          },
          {
            hr: 'Opisala mi je cijeli put do tamo.',
            en: 'She described the whole route to me.',
            note: 'o- + pisati = describe',
          },
        ],
      },
      {
        type: 'quiz',
        q: "You meet the unknown word 'prepisivač'. Using word formation, what is it most likely?",
        options: [
          'A small copy',
          'Someone/something that copies',
          'The act of signing',
          'A written description',
        ],
        correct: 1,
        explanation:
          'pre- (across/re-) + pis (write) + -ač (doer/device) = a copier — a person who copies (e.g. cheats copying homework) or a copying device. The pieces give you the meaning without a dictionary.',
      },
      {
        type: 'quiz',
        q: 'Which form would a real-estate ad use for a charming small house?',
        options: ['kućerina', 'kućica', 'kućište', 'kućanstvo'],
        correct: 1,
        explanation:
          'kućica — the diminutive sells charm. kućerina would scare buyers (huge, ugly), kućište is a technical casing (e.g. of a computer), kućanstvo is a household.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners treat the prefix as a free extra: 'prepisati' and 'napisati' are not both 'write' — pre- makes it 'copy', and a form with the wrong prefix says something else. Second, the diminutive is applied to any noun for cuteness: 'kavica' is warm, but 'bolnica' is already a full word (hospital), not a small 'bol'; check that the base exists before you cut it. Third, the agent suffix is guessed: 'učitelj' takes -telj but 'pjevač' takes -ač, and 'pjevatelj' does not exist — the suffix is fixed per word, so learn the doer noun as a word and use the pattern to READ, not to invent.",
        highlight: 'use the pattern to READ, not to invent',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Molim Vas, ___ ovdje.' (sign — from pisati)",
            options: ['prepišite', 'potpišite', 'upišite', 'opišite'],
            correct: 1,
            explanation:
              'pot- (under) + pisati = sign: potpišite. prepišite is copy, upišite enter/enrol, opišite describe.',
          },
          {
            q: "Complete: 'Živimo u malom ___ na otoku.' (little house — kuća)",
            options: ['kućerini', 'kućici', 'kućištu', 'kućanstvu'],
            correct: 1,
            explanation:
              'kućica is the diminutive; kućerina is a hulking house, kućište a casing, kućanstvo a household.',
          },
          {
            q: "You meet 'nosač' for the first time. What is it most likely?",
            options: [
              'a nose',
              'a small carrier',
              'the act of carrying',
              'someone or something that carries',
            ],
            correct: 3,
            explanation:
              'nositi (carry) + -ač (doer/device) = a porter or a bracket. The act would be nošenje; a small one would need -ić.',
          },
          {
            q: "Spot the error: 'On je pjevatelj u zboru.'",
            options: [
              'zboru should be zbor',
              'on should be ona',
              'nothing is wrong',
              'pjevatelj does not exist — the doer is pjevač',
            ],
            correct: 3,
            explanation:
              'The agent suffix is fixed per word: pjevač (singer). u zboru (locative) is correct.',
          },
          {
            q: "Which suffix builds an abstract noun from an adjective, as in 'mladost'?",
            options: ['-ost', '-ić', '-ač', '-ina'],
            correct: 0,
            explanation:
              'mlad → mladost, radostan → radost, hrabar → hrabrost. -ić is diminutive, -ač an agent, -ina an augmentative.',
          },
          {
            q: "What tone does 'glavurina' carry compared with 'glava'?",
            options: ['affectionate', 'neutral', 'big and usually disparaging', 'formal'],
            correct: 2,
            explanation:
              '-urina is an augmentative: big, and normally with a sneer. Affection would be the diminutive glavica.',
          },
          {
            q: "Complete: '___ sam broj na ruku.' (I noted down — pisati)",
            options: ['Zapisao', 'Upisao', 'Prepisao', 'Potpisao'],
            correct: 0,
            explanation:
              'za- + pisati = note down: zapisao. upisao is enter, prepisao copy, potpisao sign.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Word Formation — What to Keep',
        points: [
          'Prefixes shift verb meaning predictably: na-, pre-, pot-, u-, o-, za-',
          'Doers: -telj (formal), -ač (everyday/device), -ar (trades)',
          'Diminutives -ić/-ica add smallness, affection, or irony',
          'Augmentatives -ina/-etina/-urina add size and usually attitude',
          'Unknown word? Split it: prefix + root + suffix and guess from the pieces',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C1 — C1: Word Order & Emphasis
  // ─────────────────────────────────────────────────────────
  {
    id: 'word-order-emphasis',
    title: 'C1: Word Order & Emphasis',
    subtitle: 'Croatian is not free-order — it is information-ordered',
    icon: '🎯',
    level: 'C1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: "The Myth of 'Free' Word Order",
        body: 'Because cases mark who does what, Croatian CAN reorder almost any sentence — but every order means something different. The rule natives follow unconsciously: known information first, NEW information last. The final position is the spotlight. Master this and your Croatian stops sounding translated.',
        icon: '🎯',
      },
      {
        type: 'rule',
        title: 'The Spotlight Is at the End',
        body: "'Marko je stigao jučer' answers WHEN did Marko arrive (jučer is new). 'Jučer je stigao Marko' answers WHO arrived yesterday (Marko is new). Same words, same truth, different question answered. Put the answer to the listener's question last.",
        highlight: 'old info → verb → NEW info (the answer)',
      },
      {
        type: 'rule',
        title: 'Fronting for Contrast',
        body: "Moving an object to the front marks contrast or topic: 'Knjigu sam ti dao, ne časopis' (It was the BOOK I gave you, not the magazine). 'Meni je to rekao' (To ME he said it — as for me). Fronting is loud; use it when you genuinely contrast, or it sounds theatrical.",
        highlight: 'Knjigu sam ti dao... — fronted object = contrast',
      },
      {
        type: 'rule',
        title: 'Pronouns: Silent by Default, Emphatic When Spoken',
        body: "Croatian drops subject pronouns — 'Nisam to rekao' is neutral. Adding the pronoun adds emphasis: 'JA to nisam rekao' (I didn't say that — someone else did). Full pronoun forms replace clitics for stress: 'Vidio je mene, ne tebe' (he saw ME, not you) — never a clitic after a preposition or under contrast.",
        highlight: 'Nisam rekao (neutral) vs JA nisam rekao (emphatic)',
      },
      {
        type: 'example',
        title: 'Same Words, Different Answers',
        items: [
          {
            hr: 'Marko je stigao jučer.',
            en: 'Marko arrived YESTERDAY.',
            note: "answers: 'When did he arrive?'",
          },
          {
            hr: 'Jučer je stigao Marko.',
            en: 'Yesterday MARKO arrived.',
            note: "answers: 'Who arrived yesterday?'",
          },
          {
            hr: 'Knjigu sam ti dao, ne časopis.',
            en: 'I gave you the BOOK, not the magazine.',
            note: 'fronted object = explicit contrast',
          },
          {
            hr: 'Vidio je mene, ne tebe.',
            en: 'He saw ME, not you.',
            note: 'full form mene under contrast — never the clitic me',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Tko je razbio prozor? — Prozor je razbio Ivan.',
            en: 'Who broke the window? — IVAN broke the window.',
            note: 'the answer (Ivan) goes last',
          },
          {
            hr: 'Što je Ivan razbio? — Ivan je razbio prozor.',
            en: 'What did Ivan break? — Ivan broke the WINDOW.',
            note: 'same words; the new information now sits at the end',
          },
          {
            hr: 'Kavu pijem ujutro, čaj navečer.',
            en: 'Coffee I drink in the morning, tea in the evening.',
            note: 'fronted objects for contrast',
          },
          {
            hr: 'Tebi vjerujem, njemu ne.',
            en: 'YOU I trust, him I do not.',
            note: 'full pronoun forms fronted for contrast',
          },
          {
            hr: 'Nikada mi to nije rekla.',
            en: 'She never told me that.',
            note: 'nikada fronted; the clitic mi stays second',
          },
          {
            hr: 'Sutra ćemo o tome, danas se odmaramo.',
            en: 'We will talk about it tomorrow; today we rest.',
            note: 'time adverbs fronted as topics; clitics stay second',
          },
          {
            hr: 'Ja to nisam rekao — rekla je Ana.',
            en: 'I did not say that — Ana did.',
            note: 'explicit ja for contrast; the new subject at the end',
          },
          {
            hr: 'U Zagrebu živim, a u Rijeci radim.',
            en: 'I live in Zagreb, but I work in Rijeka.',
            note: 'places fronted as the frame of the contrast',
          },
          {
            hr: 'Knjigu ti mogu posuditi, ali ne bilježnicu.',
            en: 'I can lend you the book, but not the notebook.',
            note: 'fronted object; ti stays in second position',
          },
          {
            hr: 'Meni je to rekao jučer, a tebi tek danas.',
            en: 'He told ME that yesterday, and you only today.',
            note: 'full forms meni / tebi under contrast',
          },
        ],
      },
      {
        type: 'rule',
        title: 'The Clitic Anchor Never Moves',
        body: "Whatever you front, the clitic cluster stays glued to second position: 'Knjigu sam ti dao' — sam ti rides right after the fronted 'Knjigu'. Emphasis reshuffles the stressed words around a fixed clitic skeleton. If your reordering forces a clitic to slot one, the order is wrong.",
        highlight: 'front anything — clitics stay in slot two',
      },
      {
        type: 'quiz',
        q: "A friend asks: 'Tko je jučer stigao?' (Who arrived yesterday?). Which answer has native word order?",
        options: [
          'Marko je jučer stigao.',
          'Jučer je stigao Marko.',
          'Stigao je Marko jučer.',
          'Jučer Marko je stigao.',
        ],
        correct: 1,
        explanation:
          "The question asks WHO — so Marko is the new information and goes last: 'Jučer je stigao Marko.' Option 4 is ungrammatical anyway: the clitic je must sit in second position, right after 'Jučer'.",
      },
      {
        type: 'quiz',
        q: "How do you say 'He saw ME, not you' with correct emphatic forms?",
        options: [
          'Vidio me je, ne te.',
          'Vidio je mene, ne tebe.',
          'Mene vidio je, ne tebe.',
          'Vidio me je, ne tebe.',
        ],
        correct: 1,
        explanation:
          "Contrast requires the full (stressed) pronoun forms: mene and tebe — clitics me/te cannot carry stress. 'Mene vidio je' breaks the second-position rule for je.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners front for no reason: 'Kruh sam kupio' when nobody asked about the bread sounds theatrical — front only what contrasts. Second, they move the clitics with the fronted word: 'Knjigu ti sam dao' — whatever moves, the cluster stays second: 'Knjigu sam ti dao'. Third, the new information is left buried in the middle: to answer 'Tko je došao?' they say 'Marko je jučer došao' — the answer belongs at the end, 'Jučer je došao Marko'.",
        highlight: 'the answer belongs at the end',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Someone asks 'Kad je Ana stigla?'. Which answer has the native order?",
            options: [
              'Jučer je stigla Ana.',
              'Jučer Ana je stigla.',
              'Stigla jučer je Ana.',
              'Ana je stigla jučer.',
            ],
            correct: 3,
            explanation:
              "The question asks WHEN, so 'jučer' is the new information and goes last. The second and third options also break the second-position rule for je.",
          },
          {
            q: "Complete for contrast: '___ vjerujem, njemu ne.' (YOU I trust)",
            options: ['Ti', 'Tebi', 'Te', 'Ti si'],
            correct: 1,
            explanation:
              'vjerovati takes the dative, and contrast needs the full stressed form: Tebi. Ti is nominative; te is an accusative clitic.',
          },
          {
            q: 'Which sentence keeps the clitics correctly after fronting?',
            options: [
              'Knjigu sam ti dao, ne časopis.',
              'Knjigu ti sam dao, ne časopis.',
              'Knjigu dao sam ti, ne časopis.',
              'Sam ti knjigu dao, ne časopis.',
            ],
            correct: 0,
            explanation:
              'The fronted object is the first unit; the cluster sam ti follows it in its fixed order. The others reorder or displace the clitics.',
          },
          {
            q: "Spot what a native would change: asked 'Tko je razbio prozor?', you answer 'Ivan je razbio prozor.'",
            options: [
              'razbio should be razbila',
              'the new information (Ivan) sounds more natural last: Prozor je razbio Ivan',
              'prozor should be prozora',
              'nothing needs changing',
            ],
            correct: 1,
            explanation:
              'The answer to a who-question is the spotlight word, and the spotlight is the end of the sentence.',
          },
          {
            q: "What does adding 'ja' do in 'Ja to nisam rekao'?",
            options: [
              'nothing — it is required',
              'makes the sentence a question',
              'adds emphasis or contrast: I, not someone else',
              'makes it formal',
            ],
            correct: 2,
            explanation:
              'Croatian drops subject pronouns by default, so a spoken one carries emphasis.',
          },
          {
            q: 'Which order is genuinely FIXED in Croatian?',
            options: [
              'subject before verb',
              'adjective after noun',
              'clitics in second position',
              'object before verb',
            ],
            correct: 2,
            explanation:
              'Stressed words can move for emphasis; the clitic cluster cannot — it stays anchored in second position.',
          },
          {
            q: "Complete: 'Vidio je ___, ne tebe.' (ME)",
            options: ['me', 'mene', 'ja', 'mi'],
            correct: 1,
            explanation:
              'Under contrast the full accusative form mene is required; the clitic me cannot carry stress.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Word Order — What to Keep',
        points: [
          'The end of the sentence is the spotlight — new information goes last',
          'Front an object only for genuine contrast (Knjigu sam ti dao, ne časopis)',
          'Spoken subject pronouns are emphatic; dropped ones are neutral',
          'Contrast and prepositions demand full pronoun forms (mene, tebe), not clitics',
          'The clitic cluster stays in second position no matter what you reorder',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C1 — C1: Collective Numbers & Groups
  // ─────────────────────────────────────────────────────────
  {
    id: 'collective-numbers',
    title: 'C1: Collective Numbers & Groups',
    subtitle: 'dvoje, trojica, obojica, petero — counting people the Croatian way',
    icon: '👥',
    level: 'C1',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Three Ways to Say Two',
        body: 'Croatian has dva (two things or men), dvije (two feminine), dvoje (a mixed male-female pair), and dvojica (two men, counted as a group). Choosing correctly signals real fluency; mixing them up instantly flags a learner. This system runs through troje/trojica, četvero/četvorica and beyond.',
        icon: '👥',
      },
      {
        type: 'table',
        title: 'The Collective Number System',
        headers: ['Group', 'Form', 'Used for', 'Example'],
        rows: [
          ['2 mixed', 'dvoje', 'man + woman, or children', 'dvoje djece'],
          ['2 men', 'dvojica', 'male group', 'dvojica prijatelja'],
          ['3 mixed', 'troje', 'mixed group', 'troje putnika'],
          ['3 men', 'trojica', 'male group', 'trojica radnika'],
          ['5 mixed', 'petero', 'mixed group', 'petero studenata'],
          ['both (2)', 'oboje / obojica', 'both mixed / both men', 'oboje su došli'],
        ],
      },
      {
        type: 'rule',
        title: 'The Genitive After Collectives',
        body: 'Collective numbers govern the genitive plural: dvoje DJECE, troje PUTNIKA, petero STUDENATA. The -ica male forms take genitive plural too: dvojica PRIJATELJA, trojica RADNIKA. The counted noun never agrees in nominative — the number is the grammatical head.',
        highlight: 'dvoje djece · trojica prijatelja — collective + GENITIVE',
      },
      {
        type: 'rule',
        title: 'Verb Agreement — The Surprise',
        body: "With -oje/-ero collectives the verb is often neuter singular: 'Došlo je petero studenata' (five students came). With -ica male groups the verb is masculine plural: 'Dvojica su čekala ispred.' And 'nas dvoje' (the two of us) takes a plural verb: 'Nas dvoje idemo zajedno.'",
        highlight: 'Došlo je petero... · Dvojica su čekala · Nas dvoje idemo',
      },
      {
        type: 'example',
        title: 'Collectives in Real Sentences',
        items: [
          {
            hr: 'Imaju dvoje djece.',
            en: 'They have two children.',
            note: 'dvoje + genitive djece — never dva djeteta',
          },
          {
            hr: 'Dvojica prijatelja otvorila su kafić.',
            en: 'Two friends (men) opened a café.',
            note: 'male group → dvojica',
          },
          {
            hr: 'Nas dvoje idemo zajedno na more.',
            en: 'The two of us are going to the coast together.',
            note: 'nas dvoje + plural verb',
          },
          {
            hr: 'Oboje su u pravu.',
            en: 'They are both right (man and woman).',
            note: 'oboje for a mixed pair',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Za stolom je sjedilo četvero ljudi: dvije žene i dva muškarca.',
            en: 'Four people were sitting at the table: two women and two men.',
            note: 'četvero for the mixed group; dvije / dva once the sexes are split',
          },
          {
            hr: 'Nas troje idemo na izlet, a vas dvoje ostajete.',
            en: 'The three of us are going on the trip and you two are staying.',
            note: 'nas troje / vas dvoje + plural verb',
          },
          {
            hr: 'Obojica braće rade u istoj tvrtki.',
            en: 'Both brothers work in the same firm.',
            note: 'obojica — both (men) + genitive',
          },
          {
            hr: 'Ova soba ima dvoja vrata.',
            en: 'This room has two doors.',
            note: 'dvoja vrata — the numeral adjective for a plural-only noun',
          },
          {
            hr: 'Troje djece igralo se u dvorištu.',
            en: 'Three children were playing in the yard.',
            note: 'troje djece + neuter singular verb',
          },
          {
            hr: 'Petero putnika čekalo je na peronu, a dvojica su pušila vani.',
            en: 'Five passengers were waiting on the platform, and two (men) were smoking outside.',
            note: 'petero (mixed) vs dvojica (men)',
          },
          {
            hr: 'Oboje ste u pravu, ali obje su zakasnile.',
            en: 'You are both right (m + f), but both (women) were late.',
            note: 'oboje (mixed) vs obje (feminine)',
          },
          {
            hr: 'Šestero nas je otišlo na more.',
            en: 'Six of us went to the seaside.',
            note: 'šestero nas + neuter singular je otišlo',
          },
          {
            hr: 'Njih dvoje vjenčalo se u lipnju.',
            en: 'The two of them got married in June.',
            note: 'njih dvoje — a couple',
          },
        ],
      },
      {
        type: 'quiz',
        q: "A couple has two children. 'They have two children' is:",
        options: [
          'Imaju dva djeteta.',
          'Imaju dvije djece.',
          'Imaju dvoje djece.',
          'Imaju dvojicu djece.',
        ],
        correct: 2,
        explanation:
          "Children are a mixed/unspecified group, so the collective dvoje + genitive plural djece is required: 'Imaju dvoje djece.' dvojica would mean two grown men, and 'dva djeteta' is not standard Croatian.",
      },
      {
        type: 'quiz',
        q: 'Two male workers were waiting outside. Which is correct?',
        options: [
          'Dvoje radnika su čekala ispred.',
          'Dvojica radnika čekala su ispred.',
          'Dva radnika čekalo je ispred.',
          'Dvojicu radnika čekali su ispred.',
        ],
        correct: 1,
        explanation:
          "An all-male group takes dvojica + genitive plural: 'Dvojica radnika čekala su ispred.' dvoje would imply a mixed group; the accusative dvojicu is wrong for a subject.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners count a mixed group with 'dva': 'dva prijatelja' means two male friends; a man and a woman are 'dvoje prijatelja'. Second, the noun after a collective is left in the nominative: 'troje djeca' — the counted noun is genitive plural, 'troje djece'. Third, the verb agreement is guessed: with -oje / -ero collectives the standard agreement is neuter singular, 'Petero studenata je došlo', while the -ica male forms take a plural, 'Dvojica su došla'.",
        highlight: "a man and a woman are 'dvoje prijatelja'",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Ana i Marko imaju ___.' (three children)",
            options: ['tri djeteta', 'trojica djece', 'tri djece', 'troje djece'],
            correct: 3,
            explanation:
              'Children take the collective plus the genitive of djeca: troje djece. trojica would mean three men.',
          },
          {
            q: "Complete: 'Na klupi su sjedila ___ starca.' (two old men)",
            options: ['dva', 'dvoje', 'dvojica', 'dvoja'],
            correct: 0,
            explanation:
              'With the noun named, two men are simply dva starca (genitive singular). dvojica stands alone or takes a genitive plural (dvojica staraca); dvoje implies a mixed pair.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Nas dvoje idemo zajedno.',
              'Nas dvoje ideju zajedno.',
              'Nas dvoje idete zajedno.',
              'Nas dvojicu idemo zajedno.',
            ],
            correct: 0,
            explanation:
              'nas dvoje takes a first-person plural verb: idemo. ideju is not a form of ići, idete is second person, dvojicu is an accusative.',
          },
          {
            q: "Spot the error: 'U sobi je bilo dvoje ljudi, dva muškarca.'",
            options: [
              'dvoje should be dvojica — two men are a male group',
              'ljudi should be ljude',
              'dva muškarca should be dvoje muškarca',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'dvoje announces a mixed pair, which the second half contradicts. Two men are dvojica (ljudi) or dva muškarca.',
          },
          {
            q: "What does 'oboje' refer to?",
            options: ['two men', 'two women', 'a man and a woman, or a mixed pair', 'two objects'],
            correct: 2,
            explanation:
              'oboje is the mixed form; obojica is both men, obje both women, oba both (masculine/neuter things).',
          },
          {
            q: "Complete: 'Ova kuća ima ___ vrata.' (two doors)",
            options: ['dva', 'dvoje', 'dvoja', 'dvojica'],
            correct: 2,
            explanation:
              'vrata is a neuter plural-only noun, so it takes the numeral adjective dvoja: dvoja vrata.',
          },
          {
            q: 'Which numeral form goes with a group of three WOMEN?',
            options: ['troje', 'trojica', 'tri', 'troja'],
            correct: 2,
            explanation:
              'An all-female group uses the ordinary cardinal: tri žene. troje is mixed, trojica is men only.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Collective Numbers — What to Keep',
        points: [
          'dvoje/troje/petero = mixed groups; dvojica/trojica = male groups',
          'All collectives govern the genitive plural: dvoje djece, trojica prijatelja',
          '-oje/-ero groups often take a neuter singular verb: Došlo je petero...',
          'nas dvoje / vas troje + plural verb for we-groups',
          'oboje (mixed both) vs obojica (both men) vs obje (both feminine)',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C2 — C2: Pluperfect & Tense Sequencing
  // ─────────────────────────────────────────────────────────
  {
    id: 'pluskvamperfekt',
    title: 'C2: Pluperfect & Tense Sequencing',
    subtitle: 'bio sam rekao / bijah rekao — the past before the past',
    icon: '⏳',
    level: 'C2',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Past Behind the Past',
        body: "When two past events stack — one finished before the other began — Croatian can mark the earlier one with the pluskvamperfekt: 'Kad smo stigli, vlak je već bio otišao' (when we arrived, the train had already left). Everyday speech often flattens it to plain perfekt + već, but polished writing and careful narration still use it. At C2 you should command both.",
        icon: '⏳',
      },
      {
        type: 'rule',
        title: 'Formation — Two Ways to Build It',
        body: "Standard: perfekt of biti + l-participle → 'bio sam rekao' (I had said), 'bila je otišla' (she had left). Literary: imperfekt of biti + l-participle → 'bijah rekao', 'bijaše otišla'. Both participles agree in gender and number. The literary form pairs naturally with aorist/imperfekt narration.",
        highlight: 'bio sam rekao (standard) · bijah rekao (literary)',
      },
      {
        type: 'example',
        title: 'The Pluperfect at Work',
        items: [
          {
            hr: 'Kad smo stigli, vlak je već bio otišao.',
            en: 'When we arrived, the train had already left.',
            note: 'leaving happened BEFORE arriving — pluperfect marks it',
          },
          {
            hr: 'Vratila je knjigu koju je bila posudila.',
            en: 'She returned the book she had borrowed.',
            note: 'borrowing precedes returning',
          },
          {
            hr: 'Bijaše se već smračilo kad uđosmo u grad.',
            en: 'It had already grown dark when we entered the town.',
            note: 'literary: bijaše + participle, with aorist uđosmo',
          },
          {
            hr: 'Sve što je bio planirao, propalo je u jednom danu.',
            en: 'Everything he had planned collapsed in a single day.',
            note: 'plans precede the collapse',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Kad je policija stigla, lopovi su već bili pobjegli.',
            en: 'When the police arrived, the thieves had already fled.',
            note: 'bili pobjegli — the earlier event',
          },
          {
            hr: 'Nisam znao da je ona već bila otputovala.',
            en: 'I did not know that she had already left.',
            note: 'reported knowledge about a prior event',
          },
          {
            hr: 'Bijah zaspao kad zazvoni telefon.',
            en: 'I had fallen asleep when the telephone rang.',
            note: 'literary: bijah + participle, with an aorist',
          },
          {
            hr: 'Kuća koju su bili kupili srušena je u potresu.',
            en: 'The house they had bought was destroyed in the earthquake.',
            note: 'a relative clause in the pluperfect',
          },
          {
            hr: 'Tek tada je shvatio što je bio učinio.',
            en: 'Only then did he realise what he had done.',
            note: 'bio učinio — the deed precedes the realisation',
          },
          {
            hr: 'Prije nego što je otišao, bio je sve pripremio.',
            en: 'Before he left, he had prepared everything.',
            note: 'connective plus pluperfect — belt and braces in careful prose',
          },
          {
            hr: 'Snijeg je već bio prekrio krovove kad smo se probudili.',
            en: 'Snow had already covered the roofs when we woke up.',
            note: 'već + bio prekrio',
          },
          {
            hr: 'Kako bijaše obećao, vratio se u zoru.',
            en: 'As he had promised, he returned at dawn.',
            note: 'bijaše obećao — literary pluperfect',
          },
        ],
      },
      {
        type: 'rule',
        title: 'Sequencing Without the Pluperfect',
        body: "Croatian usually signals sequence with connectives instead: 'nakon što' (after), 'prije nego što' (before), 'čim' (as soon as) + perfekt. 'Nakon što je završio studij, odselio se u Zadar.' The pluperfect becomes optional seasoning — obligatory nowhere, elegant where the earlier-past matters.",
        highlight: 'nakon što / prije nego što / čim + perfekt',
      },
      {
        type: 'rule',
        title: 'When Writers Reach for It',
        body: "Use the pluperfect when the earlier event is BACKGROUND to the later one, especially with 'već' (already) or reversed telling order: 'Policija je uhitila čovjeka koji je bio opljačkao banku.' Without it, rapid-fire reversed order can momentarily mislead the reader about what happened first.",
        highlight: 'reversed order + već → pluperfect earns its place',
      },
      {
        type: 'quiz',
        q: 'Which sentence correctly marks that the train left BEFORE our arrival?',
        options: [
          'Kad smo stigli, vlak je otišao.',
          'Kad smo stigli, vlak je već bio otišao.',
          'Kad smo bili stigli, vlak je otišao.',
          'Kad stignemo, vlak je bio otišao.',
        ],
        correct: 1,
        explanation:
          "The earlier event (the train leaving) takes the pluperfect: 'vlak je već bio otišao'. Option 3 puts the pluperfect on the WRONG event — our arrival is the later one. Option 1 is acceptable colloquially but does not mark the sequence; the question asks for explicit marking.",
      },
      {
        type: 'quiz',
        q: "The literary pluperfect of 'otići' (3sg feminine) is:",
        options: ['bijaše otišla', 'bila bi otišla', 'bi otišla', 'jest otišla'],
        correct: 0,
        explanation:
          "Literary pluperfect = imperfekt of biti + l-participle: bijaše otišla. 'bila bi otišla' is the past conditional (would have left), 'bi otišla' is conditional, 'jest otišla' is an emphatic perfekt.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners put the pluperfect on the LATER event: 'Kad smo bili stigli, vlak je otišao' — the earlier event is the one marked, 'Kad smo stigli, vlak je već bio otišao'. Second, they use it wherever English uses 'had': in a plain sequence with 'nakon što' the perfekt is enough, and a pluperfect on every verb reads as stilted. Third, they mix the two auxiliaries: 'bijah sam rekao' — it is either 'bio sam rekao' (perfekt of biti) or 'bijah rekao' (imperfekt of biti), never both.",
        highlight: 'the earlier event is the one marked',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete with the pluperfect: 'Kad sam došao, ona ___.' (had already left — otići, f.)",
            options: ['je otišla', 'je bila otišla', 'bi otišla', 'otiđe'],
            correct: 1,
            explanation:
              'Standard pluperfect = perfekt of biti + participle: je bila otišla. je otišla is a plain perfekt, bi otišla a conditional, otiđe an aorist.',
          },
          {
            q: "Complete with the literary form: 'Sunce ___ kad krenusmo.' (had set — zaći)",
            options: ['bijaše zašlo', 'bi zašlo', 'je zašlo', 'zađe'],
            correct: 0,
            explanation:
              'The literary pluperfect uses the imperfekt of biti: bijaše zašlo, matching the aorist krenusmo.',
          },
          {
            q: 'Which sentence marks the sequence correctly?',
            options: [
              'Kad smo bili stigli, film je počeo.',
              'Kad smo stigli, film je već bio počeo.',
              'Kad smo stigli, film je bio počinjati.',
              'Kad smo bili stigli, film je bio počeo.',
            ],
            correct: 1,
            explanation:
              'The film starting is the earlier event, so it takes the pluperfect; our arrival stays in the perfekt. An infinitive cannot form the pluperfect.',
          },
          {
            q: "Spot the error: 'Bijah sam to već rekao.'",
            options: [
              'bijah sam doubles the auxiliary — either bio sam rekao or bijah rekao',
              'rekao should be rekla',
              'već should be tek',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'bijah already contains the auxiliary; adding sam makes two. Choose one construction.',
          },
          {
            q: 'What does the pluperfect signal that a plain perfekt does not?',
            options: [
              'politeness',
              'that the action happened before another past action',
              'that the speaker is uncertain',
              'habitual repetition',
            ],
            correct: 1,
            explanation: 'It orders two past events explicitly: the pluperfect one came first.',
          },
          {
            q: "Complete: 'Vratila je novac koji ___.' (she had borrowed)",
            options: ['posuđuje', 'je posudila bila', 'je bila posudila', 'bijaše posuđivala'],
            correct: 2,
            explanation:
              'je bila posudila: auxiliary, then bila, then the main participle. The imperfective bijaše posuđivala would describe repeated borrowing.',
          },
          {
            q: 'When is the pluperfect NOT needed?',
            options: [
              'when the two events are told in reversed order',
              'when već (already) is present',
              'when nakon što or prije nego što already fixes the order',
              'never — it is always required for the earlier event',
            ],
            correct: 2,
            explanation:
              'A temporal connective makes the order explicit, so the perfekt suffices. Reversed order and već are exactly where the pluperfect earns its place.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Pluperfect — What to Keep',
        points: [
          'Standard form: perfekt of biti + participle (bio sam rekao)',
          'Literary form: imperfekt of biti + participle (bijah rekao)',
          'Marks the earlier of two past events — usually with već or reversed order',
          'Everyday alternative: nakon što / prije nego što / čim + perfekt',
          'Never obligatory — but its absence in careful prose is felt',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C2 — C2: Rhetorical Figures & Style
  // ─────────────────────────────────────────────────────────
  {
    id: 'stilske-figure',
    title: 'C2: Rhetorical Figures & Style',
    subtitle: 'metafora, gradacija, antiteza — read and write with intent',
    icon: '🎭',
    level: 'C2',
    duration: '~8 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Style Is a System, Not Decoration',
        body: 'Croatian essays, speeches and journalism lean on a classical toolkit of figures — and C2 exams expect you to NAME them, spot them, and deploy them. This lesson covers the seven you will actually meet: metafora, metonimija, hiperbola, gradacija, antiteza, ironija, retoričko pitanje.',
        icon: '🎭',
      },
      {
        type: 'table',
        title: 'The Core Seven',
        headers: ['Figura', 'What it does', 'Example'],
        rows: [
          ['metafora', 'implicit comparison', 'more problema (a sea of problems)'],
          ['metonimija', 'thing → related thing', 'popiti čašu (drink a glass)'],
          ['hiperbola', 'deliberate exaggeration', 'sto puta sam ti rekao'],
          ['gradacija', 'stepwise intensification', 'došao, vidio, pobijedio'],
          ['antiteza', 'sharp contrast', 'malen čovjek, velika djela'],
          ['ironija', 'saying the opposite', "'Baš si mi pomogao...'"],
          ['retoričko pitanje', 'question expecting no answer', 'Tko to još ne zna?'],
        ],
      },
      {
        type: 'rule',
        title: 'Metaphor & Metonymy — The Workhorses',
        body: "Metafora transfers by similarity: 'more problema', 'lavina kritika', 'zlatne ruke'. Metonimija transfers by real-world connection: 'popiti čašu' (the content, not the glass), 'čitati Krležu' (the works, not the man), 'Bruxelles je odlučio' (the institutions, not the city). Croatian headlines run on metonymy.",
        highlight: 'sličnost → metafora · stvarna veza → metonimija',
      },
      {
        type: 'rule',
        title: 'Gradacija & Antiteza — Architecture of Emphasis',
        body: "Gradacija climbs: 'Nije došao, nije nazvao, nije se ni javio.' Each step raises the stakes — order matters, weakest first. Antiteza collides opposites in parallel frames: 'Riječi lete, pisano ostaje.' Both figures love the rule of three and tight parallel syntax.",
        highlight: 'gradacija = stepenice · antiteza = sudar suprotnosti',
      },
      {
        type: 'example',
        title: 'Figures in the Wild',
        items: [
          {
            hr: 'Cijeli je grad izašao na ulice.',
            en: 'The whole town took to the streets.',
            note: 'metonimija — the people, not the buildings',
          },
          {
            hr: 'Nije došao, nije nazvao, nije se ni javio.',
            en: "He didn't come, didn't call, didn't even get in touch.",
            note: 'gradacija — three rising steps',
          },
          {
            hr: 'Umirem od gladi.',
            en: "I'm dying of hunger.",
            note: 'hiperbola — nobody is actually dying',
          },
          {
            hr: 'Mladost luduje, starost tuguje.',
            en: 'Youth runs wild, old age grieves.',
            note: 'antiteza in parallel halves',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Cijela je Hrvatska navijala za njih.',
            en: 'The whole of Croatia was cheering for them.',
            note: 'metonimija — the country for its people',
          },
          {
            hr: 'Čekam te sto godina!',
            en: 'I have been waiting for you for a hundred years!',
            note: 'hiperbola',
          },
          {
            hr: 'Bogat je duhom, siromašan džepom.',
            en: 'He is rich in spirit, poor in pocket.',
            note: 'antiteza in parallel halves',
          },
          {
            hr: 'Zamolio je, zatražio, zahtijevao — i na kraju naredio.',
            en: 'He asked, requested, demanded — and in the end ordered.',
            note: 'gradacija in four steps',
          },
          {
            hr: 'Zar je to sve što imate reći?',
            en: 'Is that all you have to say?',
            note: 'retoričko pitanje — an accusation, not a question',
          },
          {
            hr: 'Baš lijepo od tebe što si zaboravio moj rođendan.',
            en: 'How nice of you to forget my birthday.',
            note: 'ironija — the opposite of what is said',
          },
          {
            hr: 'Njegove su riječi bile led, a pogled nož.',
            en: 'His words were ice, and his look a knife.',
            note: 'two metaphors in one sentence',
          },
          {
            hr: 'Kratko. Jasno. Bez isprike.',
            en: 'Short. Clear. No apology.',
            note: 'rhythm — three fragments after long sentences',
          },
          {
            hr: 'Ne tražimo milost, tražimo pravdu.',
            en: 'We do not ask for mercy, we ask for justice.',
            note: 'antiteza with repetition — the shape of a speech',
          },
          {
            hr: 'Zagreb je odlučio, a Dalmacija je šutjela.',
            en: 'Zagreb decided, and Dalmatia stayed silent.',
            note: 'metonimija twice — capital and region for their institutions and people',
          },
        ],
      },
      {
        type: 'quiz',
        q: "'Bruxelles je donio novu odluku o ribarstvu.' Which figure is 'Bruxelles'?",
        options: ['metafora', 'metonimija', 'hiperbola', 'antiteza'],
        correct: 1,
        explanation:
          "Bruxelles stands for the EU institutions located there — a transfer by real-world connection, which is metonymy. A metaphor would need a similarity transfer ('Bruxelles is a labyrinth'), not a stand-in relationship.",
      },
      {
        type: 'quiz',
        q: 'Which sentence builds a gradacija?',
        options: [
          'Molio sam ga, preklinjao, na koljenima ga zaklinjao.',
          'Riječi lete, pisano ostaje.',
          'Imam more posla.',
          'Tko bi to još mogao znati?',
        ],
        correct: 0,
        explanation:
          "molio → preklinjao → zaklinjao na koljenima climbs in intensity — gradacija. 'Riječi lete, pisano ostaje' is antiteza, 'more posla' is metafora, and the last is a rhetorical question.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners call every image a metaphor: 'popiti čašu' is metonymy (the glass for its contents) — metaphor needs a likeness, metonymy a real-world connection. Second, gradation is written in the wrong order: 'naredio, zatražio, zamolio' descends and falls flat — the steps must climb, weakest first. Third, irony is labelled with a wink or a 'haha' because the writer fears it will be missed: in prose, irony lives in the gap between wording and situation, and labelling it kills it.",
        highlight: 'metaphor needs a likeness, metonymy a real-world connection',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "'Cijeli je Split izašao na ulice.' Which figure is 'Split'?",
            options: ['metafora', 'metonimija', 'hiperbola', 'ironija'],
            correct: 1,
            explanation:
              'The city stands for its inhabitants — a real-world connection, so metonymy. Nothing is being likened to anything.',
          },
          {
            q: 'Which line is a correctly built gradacija (climbing)?',
            options: [
              'Vikao je, govorio, šaptao.',
              'Govorio je, šaptao, vikao.',
              'Vikao je, šaptao, govorio.',
              'Šaptao je, govorio, vikao.',
            ],
            correct: 3,
            explanation:
              'Gradation rises step by step: whispered → spoke → shouted. The other orders fall or zigzag.',
          },
          {
            q: 'Which sentence is an antiteza?',
            options: [
              'Umirem od smijeha.',
              'Mladi sanjaju, stari pamte.',
              'Popio je dvije čaše.',
              'Tko to još ne zna?',
            ],
            correct: 1,
            explanation:
              'Two opposites in parallel frames — young / old, dream / remember. The others are hyperbole, metonymy and a rhetorical question.',
          },
          {
            q: "Spot the misnamed figure: a student labels 'Umirem od gladi' as ironija.",
            options: [
              'it is hiperbola — exaggeration, not the opposite of what is meant',
              'it is metonimija',
              'the label is correct',
              'it is gradacija',
            ],
            correct: 0,
            explanation:
              'Irony says the opposite of what is meant; dying of hunger is an exaggeration of a real hunger, so hyperbole.',
          },
          {
            q: "Complete to make a METAPHOR for coldness: 'Njegove riječi bile su ___.'",
            options: ['hladne', 'kao led', 'led', 'ledene'],
            correct: 2,
            explanation:
              'A metaphor states the identity outright: his words WERE ice. kao led is a simile; hladne and ledene are plain adjectives.',
          },
          {
            q: 'What does a retoričko pitanje do?',
            options: [
              'expects no answer — it asserts or accuses',
              'asks for information',
              'introduces a quotation',
              'softens a request',
            ],
            correct: 0,
            explanation:
              "'Tko to još ne zna?' means everybody knows. The question form carries a statement.",
          },
          {
            q: "Why does 'Kratko. Jasno. Bez isprike.' work after a long sentence?",
            options: [
              'it corrects a grammar error',
              'the shift in rhythm — fragments after length — creates emphasis',
              'it is a proverb',
              'it is required by the comma rules',
            ],
            correct: 1,
            explanation:
              'Varying sentence length is a deliberate stylistic tool; three fragments after a long period land like blows.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Rhetorical Figures — What to Keep',
        points: [
          'metafora = similarity transfer; metonimija = real-connection transfer',
          'gradacija climbs stepwise — order from weakest to strongest',
          'antiteza collides opposites in parallel syntax',
          'hiperbola exaggerates; ironija inverts; retoričko pitanje asks without asking',
          'Spotting figures by name is a standard C2 reading-exam task',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C2 — C2: Administrative & Legal Croatian
  // ─────────────────────────────────────────────────────────
  {
    id: 'administrativni-stil',
    title: 'C2: Administrative & Legal Croatian',
    subtitle: 'temeljem, sukladno, podnositelj zahtjeva — survive official documents',
    icon: '🏛️',
    level: 'C2',
    duration: '~8 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'A Language Within the Language',
        body: 'Every Croatian resident — including every returnee with paperwork at MUP — meets the administrative register: dense nominal style, fixed formulas, and prepositions nobody uses at dinner. You cannot avoid it; you can decode it. This lesson gives you the skeleton keys.',
        icon: '🏛️',
      },
      {
        type: 'table',
        title: 'Officialese → Human Croatian',
        headers: ['Administrative', 'Everyday', 'English'],
        rows: [
          ['temeljem članka 5.', 'prema članku 5.', 'pursuant to Article 5'],
          ['sukladno zakonu', 'u skladu sa zakonom', 'in accordance with the law'],
          ['podnositelj zahtjeva', 'onaj tko traži', 'the applicant'],
          [
            'u svrhu ostvarivanja prava',
            'da bi ostvario pravo',
            'for the purpose of exercising a right',
          ],
          ['nadležno tijelo', 'ured koji je za to zadužen', 'the competent authority'],
          ['pravomoćna presuda', 'konačna presuda', 'a final (legally binding) judgment'],
        ],
      },
      {
        type: 'rule',
        title: 'The Nominal Style — Verbs Turned to Stone',
        body: "Administrative Croatian buries actions in verbal nouns: instead of 'kad podnesete zahtjev' it writes 'prilikom podnošenja zahtjeva' (upon the submission of the request). Decode by re-verbing: find the -nje/-ba noun, turn it back into a verb, and the sentence untangles: podnošenje → podnijeti, izdavanje → izdati, ostvarivanje → ostvariti.",
        highlight: 'prilikom podnošenja = kad podnosite — re-verb the noun',
      },
      {
        type: 'rule',
        title: 'Case Government You Must Not Miss',
        body: "sukladno + dativ (sukladno odluci), temeljem + genitiv (temeljem ugovora), u roku od + genitiv (u roku od 15 dana), po službenoj dužnosti (ex officio — fixed). Deadlines matter: 'Žalba se podnosi u roku od 15 dana od dana dostave rješenja' — the clock starts at delivery (dostava), not at reading.",
        highlight: 'sukladno + DAT · temeljem + GEN · u roku od + GEN',
      },
      {
        type: 'example',
        title: 'Reading a Real Rješenje',
        items: [
          {
            hr: 'Temeljem članka 62. Zakona o strancima donosi se sljedeće rješenje.',
            en: 'Pursuant to Article 62 of the Aliens Act, the following decision is issued.',
            note: 'temeljem + genitive; passive donosi se',
          },
          {
            hr: 'Podnositelj zahtjeva dužan je dostaviti dokaz o uplati.',
            en: 'The applicant is obliged to submit proof of payment.',
            note: 'dužan je + infinitive = is obliged to',
          },
          {
            hr: 'Protiv ovog rješenja može se izjaviti žalba u roku od 15 dana.',
            en: 'An appeal against this decision may be lodged within 15 days.',
            note: 'protiv + genitive; deadline formula',
          },
          {
            hr: 'Ovime potvrđujem točnost navedenih podataka.',
            en: 'I hereby confirm the accuracy of the stated information.',
            note: 'ovime = hereby — signature-line formula',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Sukladno članku 12. Ugovora, najmoprimac je dužan plaćati najamninu do petog u mjesecu.',
            en: 'In accordance with Article 12 of the Contract, the tenant is obliged to pay the rent by the fifth of the month.',
            note: 'sukladno + dative; dužan je + infinitive',
          },
          {
            hr: 'Zahtjev se podnosi nadležnom uredu osobno ili poštom.',
            en: 'The application is submitted to the competent office in person or by post.',
            note: 'se-passive; nadležnom uredu — dative',
          },
          {
            hr: 'Uz zahtjev je potrebno priložiti presliku osobne iskaznice.',
            en: 'A copy of the identity card must be attached to the application.',
            note: 'potrebno je + infinitive — impersonal obligation',
          },
          {
            hr: 'Rješenje stupa na snagu danom donošenja.',
            en: 'The decision enters into force on the day of its adoption.',
            note: 'stupiti na snagu; danom — instrumental of time',
          },
          {
            hr: 'Stranka je upozorena na posljedice davanja netočnih podataka.',
            en: 'The party has been warned of the consequences of providing false information.',
            note: 'nominal chain: posljedice davanja podataka',
          },
          {
            hr: 'U slučaju nepoštivanja roka zahtjev će se odbaciti.',
            en: 'In the event of non-compliance with the deadline the application will be rejected.',
            note: 'u slučaju + genitive; future se-passive',
          },
          {
            hr: 'Ovaj ugovor sastavljen je u dva istovjetna primjerka.',
            en: 'This contract is drawn up in two identical copies.',
            note: 'closing formula of every Croatian contract',
          },
          {
            hr: 'Molimo da nas o promjeni adrese obavijestite u roku od osam dana.',
            en: 'Please inform us of a change of address within eight days.',
            note: 'u roku od + genitive',
          },
        ],
      },
      {
        type: 'quiz',
        q: "A document says: 'Žalba se podnosi u roku od 15 dana od dana dostave.' When does the 15-day clock start?",
        options: [
          'The day the decision was written',
          'The day you receive (are served) the decision',
          'The day you read the decision',
          'The first working day of the next month',
        ],
        correct: 1,
        explanation:
          "'od dana dostave' — from the day of delivery/service (dostava). Not when it was written, and legally irrelevant when you got around to reading it. Missing this distinction costs real appeals.",
      },
      {
        type: 'quiz',
        q: "Which case follows 'sukladno'?",
        options: [
          'genitiv — sukladno zakona',
          'dativ — sukladno zakonu',
          'akuzativ — sukladno zakon',
          'instrumental — sukladno zakonom',
        ],
        correct: 1,
        explanation:
          'sukladno governs the dative: sukladno zakonu, sukladno odluci. The genitive belongs to temeljem (temeljem zakona). Mixing these two is the most common officialese error even among natives.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners mix the case government of the fixed prepositions: 'sukladno zakona' and 'temeljem zakonu' — sukladno takes the dative (sukladno zakonu) and temeljem the genitive (temeljem zakona). Second, they write the register in the first person and the active: 'Ja Vam šaljem dokument' — an official text is impersonal and passive, 'Dokument se dostavlja u prilogu'. Third, the deadline formula is misread: 'u roku od 15 dana od dana dostave' counts from delivery, not from the date printed on the letter — counting from the date on the paper can cost the right to appeal.",
        highlight:
          'sukladno takes the dative (sukladno zakonu) and temeljem the genitive (temeljem zakona)',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Temeljem ___ donosi se ovo rješenje.' (Article 5 — članak 5.)",
            options: ['članak 5.', 'članku 5.', 'članka 5.', 'člankom 5.'],
            correct: 2,
            explanation:
              'temeljem governs the genitive: temeljem članka 5. The dative članku belongs after sukladno or prema.',
          },
          {
            q: "Complete: 'Sukladno ___ stranka je dužna…' (the decision — odluka)",
            options: ['odluke', 'odluku', 'odlukom', 'odluci'],
            correct: 3,
            explanation:
              'sukladno takes the dative: sukladno odluci. odluke would be the genitive, which goes with temeljem.',
          },
          {
            q: 'Which sentence is written in the administrative register?',
            options: [
              'Pošaljite nam papire kad stignete.',
              'Dokumentacija se dostavlja u roku od osam dana od dana zaprimanja poziva.',
              'Ajde, pošaljite to do idućeg tjedna.',
              'Molim te, pošalji papire.',
            ],
            correct: 1,
            explanation:
              'se-passive, nominalisations (dostavlja, zaprimanja) and the u roku od formula are the marks of the register. The others are speech.',
          },
          {
            q: "Spot the error: 'Žalba se podnosi u roku od 15 dana od dana dostavu.'",
            options: [
              'dostavu should be dostave — od takes the genitive',
              'žalba should be žalbu',
              '15 dana should be 15 dane',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'od dana dostave: both nouns are genitive after od. žalba is the subject of the se-passive and stays nominative.',
          },
          {
            q: "Decode 'prilikom podnošenja zahtjeva' into plain Croatian.",
            options: [
              'prije nego što podnesete zahtjev',
              'kad podnosite zahtjev',
              'nakon što odbiju zahtjev',
              'ako ne podnesete zahtjev',
            ],
            correct: 1,
            explanation:
              'prilikom + verbal noun = at the time of doing it. Re-verb podnošenje → podnositi and the phrase becomes kad podnosite zahtjev.',
          },
          {
            q: "What does 'Rješenje stupa na snagu danom donošenja' mean?",
            options: [
              'the decision can be appealed at once',
              'the decision is valid from the day it was adopted',
              'the decision is delayed by a day',
              'the decision is not yet final',
            ],
            correct: 1,
            explanation:
              'stupiti na snagu = enter into force; danom donošenja (instrumental of time) = on the day of adoption.',
          },
          {
            q: "Who is the 'podnositelj zahtjeva'?",
            options: [
              'the official who decides',
              'the applicant — the person submitting the request',
              'the lawyer',
              'the witness',
            ],
            correct: 1,
            explanation:
              'podnositi (submit) + -telj = the submitter; zahtjeva is the genitive of what is submitted.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Administrative Croatian — What to Keep',
        points: [
          'Re-verb the nominal style: prilikom podnošenja → kad podnosite',
          'sukladno + dative, temeljem + genitive, u roku od + genitive',
          'Deadlines run from dostava (service), not from reading',
          'podnositelj zahtjeva / nadležno tijelo / pravomoćno — fixed cast of characters',
          'Formulas to reuse: Ovime potvrđujem..., Protiv ovog rješenja može se izjaviti žalba...',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // 7b: C2 — C2: The Croatian Comma
  // ─────────────────────────────────────────────────────────
  {
    id: 'zarez-interpunkcija',
    title: 'C2: The Croatian Comma',
    subtitle: 'Kad dođeš, javi se — punctuation that grammar dictates',
    icon: '✒️',
    level: 'C2',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Commas by Rule, Not by Breath',
        body: 'English sprinkles commas where a reader pauses. Croatian places them by grammatical rule — and educated readers notice every miss. The good news: the system is small. Master five rules and your written Croatian jumps a register.',
        icon: '✒️',
      },
      {
        type: 'rule',
        title: 'Rule 1 — Inverted Clause Order Takes a Comma',
        body: "Subordinate clause AFTER the main clause: no comma — 'Javi se kad dođeš.' Subordinate clause FIRST (inversion): comma required — 'Kad dođeš, javi se.' The same pair works for ako, jer, dok, iako: 'Ako možeš, dođi' vs 'Dođi ako možeš.'",
        highlight: 'Kad dođeš, javi se. ← comma | Javi se kad dođeš. ← none',
      },
      {
        type: 'rule',
        title: 'Rule 2 — Contrast Conjunctions Always Take One',
        body: "A comma always precedes the contrastive conjunctions a, ali, nego, no, već: 'Htio sam doći, ali nisam stigao.' 'Nije to kupio, nego posudio.' By contrast, the additive i and choice ili take NO comma in plain coordination: 'Kupio je kruh i mlijeko.'",
        highlight: 'comma before a / ali / nego / no / već — never before plain i',
      },
      {
        type: 'rule',
        title: 'Rule 3 — Vocatives and Insertions Are Fenced Off',
        body: "A vocative is always set off: 'Ivane, dođi večeras.' 'Hvala ti, bako.' Inserted comments take a comma on BOTH sides: 'To je, naravno, samo prijedlog.' 'Moj brat, inače liječnik, živi u Splitu.' Forgetting the second fence is the classic error.",
        highlight: 'Ivane, dođi. · To je, naravno, samo prijedlog.',
      },
      {
        type: 'example',
        title: 'The Rules in Action',
        items: [
          {
            hr: 'Kad završiš posao, nazovi me.',
            en: 'When you finish work, call me.',
            note: 'inversion → comma after the subordinate clause',
          },
          {
            hr: 'Nazovi me kad završiš posao.',
            en: 'Call me when you finish work.',
            note: 'normal order → no comma',
          },
          {
            hr: 'Nije problem u novcu, nego u vremenu.',
            en: "The problem isn't money but time.",
            note: 'nego always takes a comma',
          },
          {
            hr: 'Moja sestra, inače profesorica, seli se u Rijeku.',
            en: 'My sister, a teacher by the way, is moving to Rijeka.',
            note: 'insertion fenced by TWO commas',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ako pada kiša, ostat ćemo kod kuće.',
            en: 'If it rains, we will stay at home.',
            note: 'inverted order — comma after the ako-clause',
          },
          {
            hr: 'Ostat ćemo kod kuće ako pada kiša.',
            en: 'We will stay at home if it rains.',
            note: 'normal order — no comma',
          },
          {
            hr: 'Htjela je doći, ali je ostala bez prijevoza.',
            en: 'She wanted to come, but was left without transport.',
            note: 'comma before ali',
          },
          {
            hr: 'Kupio je kruh, mlijeko i jaja.',
            en: 'He bought bread, milk and eggs.',
            note: 'commas in a list; none before the final i',
          },
          {
            hr: 'Marko, jesi li čuo vijesti?',
            en: 'Marko, have you heard the news?',
            note: 'vocative fenced off',
          },
          {
            hr: 'Rekla je da dolazi u pet.',
            en: 'She said she is coming at five.',
            note: 'no comma before complement da',
          },
          {
            hr: 'Grad, koji je nekad bio luka, danas živi od turizma.',
            en: 'The town, which was once a port, today lives on tourism.',
            note: 'a non-restrictive relative clause fenced by two commas',
          },
          {
            hr: 'Nije to učinio zbog novca, nego iz inata.',
            en: 'He did not do it for money, but out of spite.',
            note: 'comma before nego',
          },
          {
            hr: 'Dok je on spavao, ona je radila.',
            en: 'While he slept, she worked.',
            note: 'a fronted dok-clause takes a comma',
          },
        ],
      },
      {
        type: 'rule',
        title: "Rule 4 — No Comma Before 'da'",
        body: "Croatian does NOT put a comma before complement 'da': 'Mislim da imaš pravo.' 'Rekao je da dolazi sutra.' English 'that'-habits and Russian rules both mislead here. Exception: if 'da' opens an inverted or clearly inserted clause, normal fencing rules apply — but the everyday 'mislim da...' never takes one.",
        highlight: 'Mislim da imaš pravo — no comma, ever',
      },
      {
        type: 'quiz',
        q: 'Which sentence is punctuated correctly?',
        options: [
          'Kad dođeš javi se.',
          'Kad dođeš, javi se.',
          'Javi se, kad dođeš.',
          'Kad, dođeš, javi se.',
        ],
        correct: 1,
        explanation:
          "The subordinate clause comes first (inversion), so a comma follows it: 'Kad dođeš, javi se.' In the normal order 'Javi se kad dođeš' there is no comma at all.",
      },
      {
        type: 'quiz',
        q: "Where do commas go in: 'To je naravno samo prijedlog'?",
        options: [
          'To je naravno, samo prijedlog.',
          'To je, naravno samo prijedlog.',
          'To je, naravno, samo prijedlog.',
          'No commas needed.',
        ],
        correct: 2,
        explanation:
          "'naravno' is an inserted comment and must be fenced on both sides: 'To je, naravno, samo prijedlog.' One-sided fencing is the most common comma error in Croatian writing.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English habit puts a comma before every 'that': 'Mislim, da imaš pravo' — complement 'da' never takes one. Second, the fronted clause is left open: 'Kad dođeš javi se' — an inverted subordinate clause must be closed with a comma, 'Kad dođeš, javi se'. Third, an insertion gets one fence instead of two: 'Moj brat, inače liječnik živi u Splitu' — whatever you open with a comma you must close with a comma.",
        highlight: 'whatever you open with a comma you must close with a comma',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Which is punctuated correctly? (I think you are right.)',
            options: [
              'Mislim, da imaš pravo.',
              'Mislim da imaš pravo.',
              'Mislim da, imaš pravo.',
              'Mislim, da, imaš pravo.',
            ],
            correct: 1,
            explanation:
              "Complement 'da' takes no comma in Croatian, whatever English does with 'that'.",
          },
          {
            q: "Complete the punctuation: 'Ako možeš ___ dođi ranije.'",
            options: ['no comma', 'a semicolon', 'a dash', 'a comma — the ako-clause comes first'],
            correct: 3,
            explanation:
              'A subordinate clause placed before the main clause is closed with a comma: Ako možeš, dođi ranije.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Htio sam doći ali nisam stigao.',
              'Htio sam doći, ali nisam stigao.',
              'Htio sam, doći ali nisam stigao.',
              'Htio sam doći, ali, nisam stigao.',
            ],
            correct: 1,
            explanation: 'ali always takes a comma before it and nothing after it.',
          },
          {
            q: "Spot the error: 'Moja sestra, inače profesorica seli se u Rijeku.'",
            options: [
              'a second comma is missing after profesorica — insertions are fenced on both sides',
              'the first comma should be removed',
              'seli se should be se seli',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'The inserted comment inače profesorica needs a comma on both sides. One-sided fencing is the classic error.',
          },
          {
            q: "Why is there no comma in 'Javi se kad dođeš'?",
            options: [
              'because kad never takes a comma',
              'because the sentence is short',
              'because it is a command',
              'because the subordinate clause follows the main clause — normal order',
            ],
            correct: 3,
            explanation:
              'In the normal order main + subordinate there is no comma. Invert it and the comma appears: Kad dođeš, javi se.',
          },
          {
            q: 'Which conjunction ALWAYS takes a comma before it?',
            options: ['i', 'ili', 'nego', 'te'],
            correct: 2,
            explanation:
              'The contrastive conjunctions a, ali, nego, no, već always take a comma; plain i, ili and te in simple coordination do not.',
          },
          {
            q: "Complete: 'Kupio je kruh ___ mlijeko.'",
            options: [
              'a comma and i: kruh, i mlijeko',
              'no comma: kruh i mlijeko',
              'a comma only: kruh, mlijeko',
              'a dash',
            ],
            correct: 1,
            explanation: 'Two items joined by i take no comma in plain coordination.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'The Croatian Comma — What to Keep',
        points: [
          'Inverted clause first → comma; normal order → none',
          'Always a comma before a, ali, nego, no, već — never before plain i',
          'Vocatives and insertions are fenced off on both sides',
          "No comma before complement 'da' (Mislim da...)",
          'Croatian punctuation is grammatical — rules, not breathing',
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // A2 parity: Modalni glagoli: moći, morati, htjeti, smjeti, trebati
  // ─────────────────────────────────────────────────────────
  {
    id: 'modal-verbs-a2',
    title: 'Modalni glagoli: moći, morati, htjeti, smjeti, trebati',
    subtitle: 'Can, must, want, may, should — modal verb + infinitive patterns',
    icon: '🔑',
    level: 'A2',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'Modal Verbs — Expressing Ability, Obligation, and Desire',
        body: "Modal verbs let you talk about what you can, must, want, may, and should do. Croatian has five key modals: moći (can/to be able), morati (must/have to), htjeti (want), smjeti (may/to be allowed), and trebati (should/need to). Each modal is conjugated for person, and pairs with a second verb in the infinitive: 'Moram raditi' (I must work), 'Želim putovati' (I want to travel) — modal first, infinitive second, just like English 'can go' or 'must eat'.",
        icon: '🔑',
      },
      {
        type: 'rule',
        title: 'moći — Ability and Permission',
        body: "Moći means 'can' in the sense of ability or possibility: 'Mogu plivati' (I can swim — I have the skill). Conjugation: mogu, možeš, može, možemo, možete, mogu. Moći also covers general possibility: 'Može kišiti' (It might rain). Note the irregular 3rd person plural 'mogu', identical to 1st person singular.",
        highlight: 'mogu, možeš, može, možemo, možete, mogu',
      },
      {
        type: 'rule',
        title: 'smjeti vs moći — Permission vs Ability',
        body: "Croatian distinguishes permission from ability where English uses 'can' for both. Smjeti means 'may/to be allowed' — permission granted by a rule or person: 'Ne smiješ pušiti ovdje' (You may not smoke here — it's forbidden). Moći covers physical or practical ability: 'Ne mogu doći' (I can't come — I'm unable to). Mixing these up is a common learner error: 'Smijem li ući?' (May I come in?) asks permission, not ability.",
        highlight: 'smjeti = permission, moći = ability',
      },
      {
        type: 'rule',
        title: 'morati and trebati — Obligation and Recommendation',
        body: "Morati expresses strong obligation, 'must/have to': 'Moram ići kući' (I must go home — no choice). Trebati is softer, 'should/need to', and can take either an infinitive or a noun in accusative: 'Trebam otići liječniku' (I need to go to the doctor) or 'Trebam novu knjigu' (I need a new book). Negated morati ('ne moram') means 'don't have to', not 'must not' — for prohibition, use 'ne smijem'.",
        highlight: "ne moram = don't have to, not must not",
      },
      {
        type: 'table',
        title: 'Modal Verbs — Present Tense Conjugation',
        headers: [
          'Person',
          'moći (can)',
          'morati (must)',
          'htjeti (want)',
          'smjeti (may)',
          'trebati (should)',
        ],
        rows: [
          ['ja', 'mogu', 'moram', 'hoću', 'smijem', 'trebam'],
          ['ti', 'možeš', 'moraš', 'hoćeš', 'smiješ', 'trebaš'],
          ['on/ona/ono', 'može', 'mora', 'hoće', 'smije', 'treba'],
          ['mi', 'možemo', 'moramo', 'hoćemo', 'smijemo', 'trebamo'],
          ['vi', 'možete', 'morate', 'hoćete', 'smijete', 'trebate'],
          ['oni/one', 'mogu', 'moraju', 'hoće', 'smiju', 'trebaju'],
        ],
      },
      {
        type: 'example',
        title: 'Modal Verbs in Everyday Sentences',
        items: [
          {
            hr: 'Moram učiti za ispit.',
            en: 'I must study for the exam.',
            note: 'morati — strong obligation',
          },
          {
            hr: 'Možeš li mi pomoći?',
            en: 'Can you help me?',
            note: 'moći — ability/request',
          },
          {
            hr: 'Smijem li otvoriti prozor?',
            en: 'May I open the window?',
            note: 'smjeti — asking permission',
          },
          {
            hr: 'Trebaš popiti više vode.',
            en: 'You should drink more water.',
            note: 'trebati — soft recommendation',
          },
        ],
      },
      {
        type: 'rule',
        title: 'htjeti — Want, and Its Special Negative',
        body: "Htjeti means 'want' and also forms the future tense auxiliary (ću, ćeš, će...). As a standalone modal it conjugates: hoću, hoćeš, hoće, hoćemo, hoćete, hoće. Its negative form is completely irregular and written as one word: neću, nećeš, neće, nećemo, nećete, neće — never 'ne hoću'. 'Neću ići' means both 'I don't want to go' and 'I won't go', depending on context.",
        highlight: 'neću, not ne hoću',
      },
      {
        type: 'example',
        title: 'Negation and Mixed Modal Sentences',
        items: [
          {
            hr: 'Ne moram raditi sutra.',
            en: "I don't have to work tomorrow.",
            note: 'ne moram = no obligation, not prohibition',
          },
          {
            hr: 'Ne smiješ parkirati ovdje.',
            en: 'You must not park here.',
            note: 'ne smiješ = forbidden',
          },
          {
            hr: 'Neću jesti meso.',
            en: "I don't want to eat meat.",
            note: 'neću — irregular negative of htjeti',
          },
          {
            hr: 'Trebamo li rezervirati stol?',
            en: 'Do we need to reserve a table?',
            note: 'trebati in a question',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Mogu li dobiti račun, molim?',
            en: 'May I have the bill, please?',
            note: 'mogu li — a softened request',
          },
          {
            hr: 'Djeca ne smiju sama na more.',
            en: 'The children may not go to the sea alone.',
            note: 'ne smiju — prohibition; the verb of motion is understood',
          },
          {
            hr: 'Moramo krenuti prije kiše.',
            en: 'We have to set off before the rain.',
            note: 'morati + infinitive',
          },
          {
            hr: 'Hoćeš li putovati vlakom ili autobusom?',
            en: 'Do you want to travel by train or by bus?',
            note: 'htjeti + infinitive; instrumental for the means',
          },
          {
            hr: 'Trebao bih više spavati.',
            en: 'I ought to sleep more.',
            note: 'trebao bih — the conditional softens the should',
          },
          {
            hr: 'Možete li nam pokazati sobu?',
            en: 'Could you show us the room?',
            note: 'Vi-form možete li — polite hotel request',
          },
          {
            hr: 'Ne moraš doći ako si umoran.',
            en: "You don't have to come if you are tired.",
            note: 'ne moraš = no obligation',
          },
          {
            hr: 'Smijem li ovdje fotografirati?',
            en: 'Am I allowed to take photos here?',
            note: 'smjeti — asking permission in a museum',
          },
        ],
      },
      {
        type: 'quiz',
        q: "Your friend asks 'Smijem li sjesti ovdje?' What is being asked?",
        options: [
          'Whether they are allowed to sit there',
          'Whether they physically can sit there',
          'Whether they want to sit there',
          'Whether they should sit there for health reasons',
        ],
        correct: 0,
        explanation:
          "Smjeti expresses permission, not ability. 'Smijem li sjesti ovdje?' asks 'Am I allowed to sit here?' — checking if the seat is free or if it's okay to sit there, not testing physical capability.",
      },
      {
        type: 'quiz',
        q: "Which sentence correctly expresses 'I don't want to go' using the irregular negative?",
        options: ['Ne hoću ići.', 'Neću ići.', 'Ne moram ići.', 'Ne smijem ići.'],
        correct: 1,
        explanation:
          "The negative of htjeti is irregular and written as one word: neću, nećeš, neće... 'Ne hoću' is incorrect Croatian. 'Ne moram' means 'I don't have to' (no obligation), and 'ne smijem' means 'I'm not allowed'.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "English 'must not' gets translated with 'ne morati': 'Ne moraš pušiti ovdje' means you are free not to smoke — prohibition is 'Ne smiješ pušiti ovdje'. Second, the second verb is conjugated too, 'Mogu idem' — after a modal the second verb stays in the infinitive: 'Mogu ići'. Third, requests come out as bare orders, 'Daj mi vodu' — a modal question softens it: 'Možeš li mi dati vodu?' or, more politely, 'Biste li mi mogli dati vodu?'.",
        highlight: "prohibition is 'Ne smiješ pušiti ovdje'",
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Sutra ___ raditi.' (I must work tomorrow.)",
            options: ['moram', 'mogu', 'smijem', 'trebam'],
            correct: 0,
            explanation:
              'Strong obligation is morati: moram raditi. mogu is ability, smijem permission, trebam a softer should.',
          },
          {
            q: "Complete: 'Možeš li ___ prozor?' (open)",
            options: ['otvoriš', 'otvoriti', 'otvori', 'otvaram'],
            correct: 1,
            explanation:
              'After a modal the second verb is an infinitive: možeš li otvoriti. otvoriš is a conjugated form and otvori an imperative.',
          },
          {
            q: 'Which sentence is a polite request rather than an order?',
            options: ['Daj mi sol.', 'Sol!', 'Možeš li mi dodati sol?', 'Dodaj sol.'],
            correct: 2,
            explanation:
              'A modal question (možeš li…) turns a command into a request. The other three are imperatives or a bare demand.',
          },
          {
            q: "Spot the error: 'Ovdje ne moraš parkirati — zabranjeno je.'",
            options: [
              'parkirati should be parkiraš',
              'ne moraš should be ne smiješ — a prohibition needs smjeti',
              'zabranjeno should be zabranjen',
              'nothing is wrong',
            ],
            correct: 1,
            explanation:
              "'ne moraš' means you are not obliged to; something forbidden is 'ne smiješ'. The second half of the sentence says it is forbidden, so morati contradicts it.",
          },
          {
            q: "What does 'Ne moram ustati rano' mean?",
            options: [
              'I must not get up early',
              'I cannot get up early',
              'I do not have to get up early',
              'I do not want to get up early',
            ],
            correct: 2,
            explanation:
              'Negated morati removes the obligation. Prohibition would be ne smijem, inability ne mogu, unwillingness neću.',
          },
          {
            q: "Complete: 'Oni ___ doći na vrijeme.' (They want to come on time.)",
            options: ['hoću', 'hoćemo', 'htje', 'hoće'],
            correct: 3,
            explanation:
              'htjeti for oni is hoće (the same form as on/ona). hoću is I, hoćemo is we.',
          },
          {
            q: 'Which question asks for PERMISSION, not ability?',
            options: [
              'Mogu li plivati?',
              'Smijem li plivati?',
              'Moram li plivati?',
              'Trebam li plivati?',
            ],
            correct: 1,
            explanation:
              'smjeti is the permission verb: Smijem li…? asks whether it is allowed. Mogu li asks whether I am able; moram and trebam are about obligation.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Modal Verbs — Complete!',
        points: [
          'Modal verb + infinitive: Moram raditi, Želim putovati, Mogu doći',
          "moći = ability/possibility; smjeti = permission — don't mix them up",
          "morati = strong obligation ('must'); trebati = softer recommendation ('should')",
          "ne moram = don't have to (no obligation) vs ne smijem = must not (forbidden)",
          "htjeti's negative is irregular: neću, nećeš, neće — never 'ne hoću'",
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────
  // A2 parity: Komparacija pridjeva — Comparison of Adjectives
  // ─────────────────────────────────────────────────────────
  {
    id: 'comparatives-a2',
    title: 'Komparacija pridjeva — Comparison of Adjectives',
    subtitle: 'Comparative and superlative forms, plus od vs nego',
    icon: '📊',
    level: 'A2',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'Comparing Things in Croatian',
        body: "To say 'bigger', 'more beautiful', or 'the best' in Croatian, adjectives change form rather than adding a separate word like English 'more'. This lesson covers the regular comparative suffixes, the most common irregular comparatives, the superlative prefix naj-, and the two ways to say 'than' — od and nego.",
        icon: '📊',
      },
      {
        type: 'rule',
        title: 'The Regular Comparative: -iji, -ji, -ši',
        body: 'Most adjectives form the comparative by adding -iji to the stem: jednostavan → jednostavniji (simpler), pametan → pametniji (smarter). Adjectives ending in a single consonant plus -k, -c, -h often drop it and add -ji, with the preceding consonant softening: lijep → ljepši (more beautiful), mlad → mlađi (younger), jak → jači (stronger). A smaller group uses -ši: lak → lakši (easier).',
        highlight: 'jednostavan → jednostavniji',
      },
      {
        type: 'rule',
        title: 'Irregular Comparatives — Memorize These',
        body: "A handful of very common adjectives have completely irregular comparatives that don't follow any suffix rule: dobar (good) → bolji (better), loš (bad) → gori (worse), velik (big) → veći (bigger), malen/mali (small) → manji (smaller), and visok (tall) → viši (taller). These five appear constantly in everyday speech, so memorize them as whole words rather than trying to derive them.",
        highlight: 'dobar→bolji, loš→gori, velik→veći, malen→manji',
      },
      {
        type: 'rule',
        title: 'The Superlative: naj- + Comparative',
        body: "The superlative ('the most/-est') is formed by simply adding the prefix naj- to the comparative form — no separate rule to learn. Ljepši (more beautiful) → najljepši (most beautiful). Bolji (better) → najbolji (best). Veći (bigger) → najveći (biggest). Because the superlative always builds on the comparative, once you know the comparative, the superlative comes for free.",
        highlight: 'naj- + comparative = superlative',
      },
      {
        type: 'rule',
        title: "od vs nego — Two Ways to Say 'Than'",
        body: "Croatian expresses 'than' in a comparison two ways: 'od' + genitive case, or 'nego' + the same case as the first noun. 'Marko je stariji od mene' and 'Marko je stariji nego ja' both mean 'Marko is older than me' — the first uses genitive after od, the second uses nominative because nego compares like-for-like forms. Nego is required (not od) when comparing phrases, clauses, or anything other than simple nouns/pronouns.",
        highlight: 'od + genitive, or nego + matching case',
      },
      {
        type: 'table',
        title: 'Adjective Comparison — Key Forms',
        headers: ['Positive', 'Comparative', 'Superlative', 'English'],
        rows: [
          ['dobar', 'bolji', 'najbolji', 'good → better → best'],
          ['loš', 'gori', 'najgori', 'bad → worse → worst'],
          ['velik', 'veći', 'najveći', 'big → bigger → biggest'],
          ['malen', 'manji', 'najmanji', 'small → smaller → smallest'],
          ['visok', 'viši', 'najviši', 'tall → taller → tallest'],
          ['lijep', 'ljepši', 'najljepši', 'beautiful → more beautiful → most beautiful'],
          ['jednostavan', 'jednostavniji', 'najjednostavniji', 'simple → simpler → simplest'],
        ],
      },
      {
        type: 'example',
        title: 'Comparatives in Sentences',
        items: [
          {
            hr: 'Ovaj grad je veći od Splita.',
            en: 'This city is bigger than Split.',
            note: 'veći (irregular) + od + genitive',
          },
          {
            hr: 'Zagreb je najveći grad u Hrvatskoj.',
            en: 'Zagreb is the biggest city in Croatia.',
            note: 'najveći — superlative',
          },
          {
            hr: 'Ana je pametnija nego njezin brat.',
            en: 'Ana is smarter than her brother.',
            note: 'nego + nominative (matching case)',
          },
          {
            hr: 'Ovo vino je bolje od onoga.',
            en: 'This wine is better than that one.',
            note: 'bolji (irregular) + od + genitive',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Comparative Patterns',
        items: [
          {
            hr: 'Danas je hladnije nego jučer.',
            en: "Today it's colder than yesterday.",
            note: 'hladnije used with time expressions, not nouns',
          },
          {
            hr: 'Moja sestra je mlađa od mene.',
            en: 'My sister is younger than me.',
            note: 'mlađi (irregular softening) + od + genitive',
          },
          {
            hr: 'Ovo je najjednostavniji recept.',
            en: 'This is the simplest recipe.',
            note: 'najjednostavniji — regular -iji + naj-',
          },
          {
            hr: 'On trči brže nego ja.',
            en: 'He runs faster than I do.',
            note: 'nego required — comparing two clauses',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ljeto je toplije od proljeća.',
            en: 'Summer is warmer than spring.',
            note: 'toplije + od + genitive',
          },
          {
            hr: 'Rijeka je manja od Zagreba, ali je ljepša.',
            en: 'Rijeka is smaller than Zagreb, but it is prettier.',
            note: 'manja (irregular), ljepša (-ši type)',
          },
          {
            hr: 'Ovo je najbolji restoran u gradu.',
            en: 'This is the best restaurant in town.',
            note: 'najbolji — superlative of the irregular bolji',
          },
          {
            hr: 'Bolje je ići pješice nego čekati autobus.',
            en: 'It is better to walk than to wait for the bus.',
            note: 'nego between two infinitive phrases',
          },
          {
            hr: 'Moj brat je stariji od mene dvije godine.',
            en: 'My brother is two years older than me.',
            note: 'stariji + od mene (genitive)',
          },
          {
            hr: 'Kava je ovdje skuplja nego u Splitu.',
            en: 'Coffee is more expensive here than in Split.',
            note: 'nego before a prepositional phrase',
          },
          {
            hr: 'Ova je ulica najuža u starom gradu.',
            en: 'This street is the narrowest in the old town.',
            note: 'uzak → uži → najuža',
          },
          {
            hr: 'Sve je jednostavnije kad govoriš jezik.',
            en: 'Everything is simpler when you speak the language.',
            note: 'jednostavnije — regular -iji, neuter',
          },
        ],
      },
      {
        type: 'quiz',
        q: "What is the correct comparative of 'dobar' (good)?",
        options: ['dobriji', 'najdobriji', 'bolji', 'dobreji'],
        correct: 2,
        explanation:
          "Dobar is one of the irregular comparatives that doesn't take a suffix — it becomes bolji (better), completely unrelated to the root 'dobar'. The superlative built on it is najbolji (best).",
      },
      {
        type: 'quiz',
        q: "Which sentence correctly says 'Zagreb is bigger than Split'?",
        options: [
          'Zagreb je veći nego od Splita.',
          'Zagreb je veći Split.',
          'Zagreb je najveći od Splita.',
          'Zagreb je veći od Splita.',
        ],
        correct: 3,
        explanation:
          "The pattern is comparative + od + genitive: 'veći od Splita' (bigger than Split). 'Nego od' mixes both constructions incorrectly, and 'najveći od Splita' wrongly uses the superlative for a two-way comparison.",
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Learners build 'more' with a separate word, 'više lijep' — Croatian changes the adjective itself: 'ljepši'. Second, the irregulars get regularised, 'dobriji', 'velikiji' — they are 'bolji' and 'veći', and the superlative simply adds naj-: 'najbolji'. Third, 'od' is followed by the nominative, 'veći od ja' — od takes the genitive, 'veći od mene', while 'nego' keeps the case of the first term: 'veći nego ja'.",
        highlight: 'Croatian changes the adjective itself',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: "Complete: 'Danas je ___ nego jučer.' (colder)",
            options: ['hladno', 'hladnije', 'najhladnije', 'više hladno'],
            correct: 1,
            explanation:
              "The comparative is built into the word: hladnije. 'više hladno' copies English 'more'; najhladnije is the superlative.",
          },
          {
            q: "Complete: 'Ivan je ___ od Marka.' (taller)",
            options: ['visok', 'visokiji', 'viši', 'najviši'],
            correct: 2,
            explanation:
              'visok has the irregular comparative viši. visokiji does not exist; najviši would be the tallest of many.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Split je manji nego od Zagreba.',
              'Split je manji od Zagreb.',
              'Split je manji od Zagreba.',
              'Split je više mali od Zagreba.',
            ],
            correct: 2,
            explanation:
              "od takes the genitive: manji od Zagreba. 'nego od' doubles the construction, and 'više mali' is English word-for-word.",
          },
          {
            q: "Spot the error: 'Ovo je najdobriji film godine.'",
            options: [
              'najdobriji should be najbolji — dobar is irregular',
              'film should be filma',
              'godine should be godina',
              'nothing is wrong',
            ],
            correct: 0,
            explanation:
              'dobar → bolji → najbolji. The regular -iji suffix cannot be applied to the irregular five.',
          },
          {
            q: "When must you use 'nego' rather than 'od'?",
            options: [
              'always with people',
              'when comparing whole phrases or clauses',
              'only with irregular comparatives',
              'never — od is always preferred',
            ],
            correct: 1,
            explanation:
              "od works only before a noun or pronoun in the genitive. Comparing verbs, adverbs or prepositional phrases ('brže nego ja', 'skuplje nego u Splitu') needs nego.",
          },
          {
            q: "Complete: 'Ovo je ___ grad u Hrvatskoj.' (the biggest)",
            options: ['veći', 'velik', 'najvelik', 'najveći'],
            correct: 3,
            explanation:
              'The superlative is naj- + comparative, and the comparative of velik is veći: najveći.',
          },
          {
            q: "Which is the correct comparative of 'loš' (bad)?",
            options: ['lošiji', 'gori', 'najgori', 'loše'],
            correct: 1,
            explanation:
              'loš is irregular: gori (worse), najgori (worst). lošiji is a learner regularisation.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Comparison of Adjectives — Complete!',
        points: [
          'Regular comparative: add -iji/-ji/-ši to the stem (jednostavniji, ljepši, lakši)',
          'Irregular comparatives to memorize: dobar→bolji, loš→gori, velik→veći, malen→manji, visok→viši',
          'Superlative = naj- + comparative: najbolji, najveći, najljepši',
          "Use 'od' + genitive for simple noun/pronoun comparisons: veći od mene",
          "Use 'nego' when comparing phrases or clauses, matching the case of the first item",
        ],
      },
    ],
  },
];

export const LESSONS = [
  ...LESSONS_CORE,
  ...LESSONS_A1,
  ...LESSONS_A2,
  ...LESSONS_B1,
  ...LESSONS_B2,
  ...LESSONS_C1,
  ...LESSONS_C2,
];
