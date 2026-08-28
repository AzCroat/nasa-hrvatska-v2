// ═══════════════════════════════════════════════════════════
// Animated Grammar Lesson Scripts — Naša Hrvatska
// Pre-written lesson content for the AnimatedLesson player
// ═══════════════════════════════════════════════════════════

import { LESSONS_A1 } from './lessonsA1.js';
import { LESSONS_A2 } from './lessonsA2.js';
import { LESSONS_B1 } from './lessonsB1.js';
import { LESSONS_B2 } from './lessonsB2.js';
import { LESSONS_C1 } from './lessonsC1.js';

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
        type: 'quiz',
        q: "How do you say 'She speaks' using govoriti (Class 2)?",
        options: ['govora', 'govorim', 'govori', 'govorite'],
        correct: 2,
        explanation:
          'Class 2 (-IM) 3rd person singular is formed by dropping the -im ending and adding -i. Govoriti → govori (she/he/it speaks). The pattern is: govorim, govoriš, govori, govorimo, govorite, govore.',
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
        type: 'quiz',
        q: "You want to say 'I read the whole book' (it's finished). Which verb do you use?",
        options: ['čitao sam', 'pročitao sam', 'bit ću čitao', 'čitat ću'],
        correct: 1,
        explanation:
          "'Pročitao sam' uses the perfective 'pročitati' — the reading is completed, the whole book is done. 'Čitao sam' (imperfective) would mean 'I was reading' — the process, not the completion. The word 'cijelu' (whole) also signals perfective meaning.",
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
        type: 'quiz',
        q: "In the sentence 'I gave it to him' (Dao ___ ___ ___ .), what is the correct clitic order?",
        options: ['ga mu sam', 'sam ga mu', 'sam mu ga', 'mu ga sam'],
        correct: 2,
        explanation:
          "The correct order is 'sam mu ga': biti forms (sam) come first in the chain, then dative pronouns (mu = to him), then accusative pronouns (ga = it). 'Dao sam mu ga.' The chain order is fixed: bi → biti → dative → accusative → se.",
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
        type: 'quiz',
        q: "How do you say 'I would like a coffee' politely?",
        options: ['Htio/Htjela bih kavu, molim.', 'Ja hoću kavu.', 'Mogu kavu.', 'Kava, molim.'],
        correct: 0,
        explanation:
          "'Htio/Htjela bih kavu, molim.' uses the conditional 'bih' with the participle 'htio/htjela' — this is the standard polite way to order or request in Croatian. 'Ja hoću kavu' is too blunt. 'Mogu kavu' is ungrammatical in this context.",
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
        type: 'quiz',
        q: "Complete: 'Volio bih posjetiti Dubrovnik, ___ sam čuo da je predivno.'",
        options: ['jer', 'iako', 'čim', 'dok'],
        correct: 0,
        explanation:
          "'jer' (because) is correct — 'Volio bih posjetiti Dubrovnik, jer sam čuo da je predivno.' (I would love to visit Dubrovnik, because I've heard it's beautiful.) 'iako' would mean 'although', which contradicts the positive intent. 'čim' means 'as soon as' and 'dok' means 'while' — neither fits here.",
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
        headers: ['Person', 'Auxiliary', 'Short form (ići)', 'Long form'],
        rows: [
          ['ja', 'ću', 'ić ću', 'ja ću ići'],
          ['ti', 'ćeš', 'ić ćeš', 'ti ćeš ići'],
          ['on / ona', 'će', 'ić će', 'on/ona će ići'],
          ['mi', 'ćemo', 'ić ćemo', 'mi ćemo ići'],
          ['vi', 'ćete', 'ić ćete', 'vi ćete ići'],
          ['oni / one', 'će', 'ić će', 'oni/one će ići'],
        ],
      },
      {
        type: 'rule',
        title: 'No Gender Difference — Ever',
        body: "In the past tense, 'radio sam' (m.) vs 'radila sam' (f.) differ. In the future, 'radit ću' is identical for male and female speakers. A man says 'ić ću' and a woman says 'ić ću' — no change. This gender-neutrality applies to every verb in every person. Memorize the six auxiliaries and you're done.",
        highlight: 'No gender distinction in future tense',
      },
      {
        type: 'example',
        title: 'Future Tense — Real Sentences',
        items: [
          {
            hr: 'Sutra ću ići na more.',
            en: 'Tomorrow I will go to the sea.',
            note: 'Short: ić ću | Long: ću ići',
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
          ['između', 'between', 'između stolova (between tables)'],
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
        type: 'summary',
        title: 'Instrumental — Three Core Uses',
        points: [
          'Means/tool (no preposition): pisati olovkom, putovati vlakom, platiti karticom',
          's/sa + instrumental = with someone: s Anom, s prijateljem',
          'Other prepositions: između, pred, nad, pod, za, među + instrumental',
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
            note: "je = 'is'/identity; comes after ga",
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
        type: 'table',
        title: '30 Essential Croatian Proverbs — Cultural Keys',
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
        type: 'summary',
        title: 'C1 Register & Idioms — What Makes You Sound Croatian',
        points: [
          'Vi (formal) vs Ti (informal) — know which context demands which',
          'Discourse markers: znači, eto, pa, baš, ajde — use them, sound natural',
          'Diminutives (-ić/-ica/-ce) signal warmth and informality — use generously',
          "Idioms: 'Svaka čast!' / 'Nije mu sve doma' / 'Pala mu mrak na oči'",
          '30 Croatian proverbs encode the culture — knowing 10 makes you culturally fluent',
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
        type: 'quiz',
        title: 'Quick Check',
        q: "How do you say 'quarter to twelve' in Croatian?",
        options: ['Dvanaest i četvrt.', 'Dvanaest bez četvrt.', 'Pola dvanaest.'],
        correct: 1,
        explanation:
          "'Bez četvrt' means 'without a quarter' — subtract 15 minutes from the next hour. 'I četvrt' means 'and a quarter' (quarter past). 'Pola' means 'half past'.",
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
        body: 'Formal Croatian heavily uses "verbal nouns" — converting verbs into nouns using the suffixes -anje, -enje, or -enje. This creates an impersonal, bureaucratic tone. Examples: zapošljavanje (employment, from zapošljavati), obrazovanje (education, from obrazovati), odobravanje (approval, from odobravati), provođenje (implementation, from provoditi), financiranje (financing, from financirati). A sentence like "Provodi se postupak odobravanja financiranja projekta" packs four nominalizations and is perfectly normal in official Croatian.',
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
          ['week', 'tjedan', 'nedelja', 'nedelja = Sunday in Croatian (nedjeljom)'],
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
];
