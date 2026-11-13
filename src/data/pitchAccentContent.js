/**
 * pitchAccentContent.js — pitch accent lesson data for PitchAccentMastery.
 *
 * 6 lessons: intro, short_falling, short_rising, long_falling, long_rising, practice.
 * Each lesson has: theory (paragraph), keyPoints[], examples[], minimalPairs[], drill[].
 *
 * REWRITTEN 2026-11-13 (C1 workbook comparison). The previous version had most of its
 * accent keys wrong (lûk glossed "onion", pás "belt", brât, žéna, nóga, kúća, gláva as
 * short-rising), invented "dialectal" minimal pairs, and theory that stated the
 * distribution rules backwards ("the short-falling accent cannot stand on the first
 * syllable" — it is the reverse: falling accents stand ONLY on the first syllable).
 *
 * Notation is the standard one (Hrvatski jezični portal, Anić, Barić et al.):
 *   short falling  ȁ  (double grave)      long falling  ȃ  (inverted breve)
 *   short rising   à  (grave)             long rising   á  (acute)
 *   post-accentual length  ā  (macron)
 * Only words whose standard accent is certain are used; anything doubtful was dropped
 * rather than guessed.
 */

export const PITCH_ACCENT_LESSONS = [
  {
    id: 'intro',
    cefr: 'B1',
    title: 'What Is Pitch Accent?',
    subtitle: 'Why Croatian sounds like music',
    icon: '🎵',
    color: '#7c3aed',
    theory: `English uses stress — one syllable in a word is louder and more prominent than the others. Standard Croatian does something more: the accented syllable also has a pitch movement (falling or rising) and a length (short or long), and both are part of the word. A handful of words are told apart by accent alone.

Croatian has exactly four accents, from two features crossed: length (short or long) and pitch (falling or rising). Short falling (kratkosilazni) is marked ȁ, long falling (dugosilazni) ȃ, short rising (kratkouzlazni) à and long rising (dugouzlazni) á. A syllable after the accent can also be long; dictionaries mark that with a macron (ā).

Ordinary written Croatian carries no accent marks at all — you meet them in dictionaries and grammars. You do not need perfect accents to be understood, and speakers across Croatia vary a great deal. What helps most is an ear for the difference, so that when two words sound nearly identical you can catch which one was meant.`,
    keyPoints: [
      'Four accents: short falling ȁ, long falling ȃ, short rising à, long rising á',
      'They come from two features crossed: length (short/long) and pitch (falling/rising)',
      'Falling accents stand only on the first syllable of a word (or on a one-syllable word)',
      'Rising accents never stand on a one-syllable word, and nothing is accented on the last syllable of a longer word',
      'Recognition comes first: hear the difference before worrying about producing it',
    ],
    examples: [
      {
        hr: 'grȃd',
        en: 'city',
        audio: 'grad',
        note: 'Long falling on the only syllable — the vowel is held, then the pitch drops.',
      },
      {
        hr: 'grȁd',
        en: 'hail (weather)',
        audio: 'grad',
        note: 'Short falling — same spelling, different word. The vowel is short.',
      },
      {
        hr: 'lȕk',
        en: 'onion',
        audio: 'luk',
        note: 'Short falling on the only syllable.',
      },
      {
        hr: 'lȗk',
        en: 'arch, bow',
        audio: 'luk',
        note: 'Long falling — the same letters as the onion, a longer vowel.',
      },
      { hr: 'pȁs', en: 'dog', audio: 'pas', note: 'Short falling on the only syllable.' },
      {
        hr: 'pȃs',
        en: 'belt, waist',
        audio: 'pas',
        note: 'Long falling — the long vowel is the whole difference from pȁs.',
      },
      {
        hr: 'kȍsa',
        en: 'scythe',
        audio: 'kosa',
        note: 'Short falling on the first syllable.',
      },
      {
        hr: 'kòsa',
        en: 'hair',
        audio: 'kosa',
        note: 'Short rising on the first syllable — the pitch, not the length, tells it from kȍsa.',
      },
    ],
  },
  {
    id: 'short_falling',
    cefr: 'B1',
    title: 'Short-Falling Accent (ȁ)',
    subtitle: 'The quick drop',
    icon: '⬇️',
    color: '#dc2626',
    theory: `The short-falling accent (kratkosilazni naglasak) is a short vowel on which the pitch drops. It sounds quick and clipped.

Like the long-falling accent, it can stand only on the FIRST syllable of a word — so in a word of several syllables you will find it at the start (mȁjka, mȍre, kȁva, škȍla), and it is very common on one-syllable words (brȁt, pȁs, grȁd). It never stands further into a word in the standard language.

Dictionaries mark it with a double grave: ȁ, ȅ, ȉ, ȍ, ȕ. When it falls on a syllabic r, the r carries the mark: sȑce (heart), Hȑvātskā (Croatia).`,
    keyPoints: [
      'Short vowel + falling pitch = kratkosilazni (short falling)',
      'Stands only on the first syllable, or on a one-syllable word',
      'Marked with a double grave: ȁ ȅ ȉ ȍ ȕ (and ȑ on syllabic r)',
      'Common in everyday words: brȁt, mȁjka, mȍre, kȁva, škȍla',
    ],
    examples: [
      { hr: 'brȁt', en: 'brother', audio: 'brat', note: 'One syllable, short and falling.' },
      { hr: 'mȁjka', en: 'mother', audio: 'majka', note: 'Short falling on the first syllable.' },
      {
        hr: 'mȍre',
        en: 'sea',
        audio: 'more',
        note: 'Two syllables; the accent is on the first, as every falling accent is.',
      },
      { hr: 'kȁva', en: 'coffee', audio: 'kava', note: 'Short falling on the first syllable.' },
      { hr: 'škȍla', en: 'school', audio: 'škola', note: 'Short falling on the first syllable.' },
      {
        hr: 'sȑce',
        en: 'heart',
        audio: 'srce',
        note: 'Two syllables: the syllabic r carries the accent.',
      },
      {
        hr: 'grȁd',
        en: 'hail (weather)',
        audio: 'grad',
        note: 'One syllable. Contrast grȃd (city), long falling.',
      },
      { hr: 'pȁs', en: 'dog', audio: 'pas', note: 'One syllable. Contrast pȃs (belt, waist).' },
    ],
    minimalPairs: [
      {
        word1: { hr: 'grȁd', en: 'hail (weather)', accent: 'ȁ' },
        word2: { hr: 'grȃd', en: 'city', accent: 'ȃ' },
        note: 'Both falling — only the length differs. grȁd is short and clipped; grȃd holds the vowel before it drops.',
      },
      {
        word1: { hr: 'pȁs', en: 'dog', accent: 'ȁ' },
        word2: { hr: 'pȃs', en: 'belt, waist', accent: 'ȃ' },
        note: 'The same pattern: short falling against long falling.',
      },
      {
        word1: { hr: 'kȍsa', en: 'scythe', accent: 'ȁ' },
        word2: { hr: 'kòsa', en: 'hair', accent: 'à' },
        note: 'Both short — only the pitch differs: falling for the scythe, rising for hair.',
      },
    ],
    drill: [
      { q: 'Which word means "dog"?', opts: ['pȁs', 'pȃs', 'pás', 'pàs'], correct: 'pȁs' },
      {
        q: 'Which word carries a short-falling accent?',
        opts: ['kȁva', 'kùća', 'rúka', 'dȃn'],
        correct: 'kȁva',
      },
      {
        q: 'In standard Croatian, where can a short-falling accent stand?',
        opts: [
          'Only on the first syllable (or a one-syllable word)',
          'Only on the last syllable',
          'On any syllable',
          'Only on the second syllable',
        ],
        correct: 'Only on the first syllable (or a one-syllable word)',
      },
      {
        q: 'Which word means "hail" (weather)?',
        // One option per accent: grȃd long falling (= city), grȁd short falling (= hail),
        // grád long rising and gràd short rising (neither exists on a monosyllable).
        opts: ['grȃd', 'grȁd', 'grád', 'gràd'],
        correct: 'grȁd',
      },
    ],
  },
  {
    id: 'short_rising',
    cefr: 'B1',
    title: 'Short-Rising Accent (à)',
    subtitle: 'The quick lift',
    icon: '⬆️',
    color: '#16a34a',
    theory: `The short-rising accent (kratkouzlazni naglasak) is a short vowel on which the voice rises into the next syllable. It sounds light and quick.

Rising accents never stand on a one-syllable word, and nothing is accented on the last syllable of a longer word. Within those limits a rising accent can stand on the first syllable (vòda, žèna, kùća, sèstra) or further in (prìjatelj has it on the first, but many longer words have it in the middle).

Dictionaries mark it with a grave: à, è, ì, ò, ù. Do not confuse it with the double grave (ȁ) of the short falling accent.`,
    keyPoints: [
      'Short vowel + rising pitch = kratkouzlazni (short rising)',
      'Never on a one-syllable word; never on the last syllable of a longer word',
      'Marked with a grave: à è ì ò ù',
      'Everyday examples: vòda, žèna, nòga, kùća, sèstra, jèzik',
      'A case form can move the accent: vòda → vȍdu, nòga → nȍgu',
    ],
    examples: [
      { hr: 'vòda', en: 'water', audio: 'voda', note: 'Short rising on the first syllable.' },
      { hr: 'žèna', en: 'woman, wife', audio: 'žena', note: 'Short rising on the first syllable.' },
      { hr: 'nòga', en: 'leg, foot', audio: 'noga', note: 'Short rising on the first syllable.' },
      { hr: 'kùća', en: 'house', audio: 'kuća', note: 'Short rising on the first syllable.' },
      { hr: 'sèstra', en: 'sister', audio: 'sestra', note: 'Short rising on the first syllable.' },
      {
        hr: 'jèzik',
        en: 'language, tongue',
        audio: 'jezik',
        note: 'Short rising on the first syllable; the last syllable is unaccented.',
      },
      {
        hr: 'prìjatelj',
        en: 'friend',
        audio: 'prijatelj',
        note: 'Short rising on the first syllable of a three-syllable word.',
      },
      {
        hr: 'kòsa',
        en: 'hair',
        audio: 'kosa',
        note: 'Contrast kȍsa (scythe), short falling.',
      },
    ],
    minimalPairs: [
      {
        word1: { hr: 'kòsa', en: 'hair', accent: 'à' },
        word2: { hr: 'kȍsa', en: 'scythe', accent: 'ȁ' },
        note: 'Both vowels are short; the pitch rises for hair and falls for the scythe.',
      },
      {
        word1: { hr: 'vòda', en: 'water (nominative)', accent: 'à' },
        word2: { hr: 'vȍdu', en: 'water (accusative)', accent: 'ȁ' },
        note: 'The same noun: the accusative moves to a short falling accent. Croatian accent is part of the grammar.',
      },
      {
        word1: { hr: 'nòga', en: 'leg (nominative)', accent: 'à' },
        word2: { hr: 'nȍgu', en: 'leg (accusative)', accent: 'ȁ' },
        note: 'The same alternation as vòda → vȍdu.',
      },
    ],
    drill: [
      {
        q: 'Which spelling shows the standard accent of "voda" (water, nominative)?',
        opts: ['vòda', 'vȍda', 'vóda', 'vȏda'],
        correct: 'vòda',
      },
      {
        q: 'The short-rising accent is marked with which diacritic?',
        opts: ['Grave (à)', 'Acute (á)', 'Double grave (ȁ)', 'Inverted breve (ȃ)'],
        correct: 'Grave (à)',
      },
      {
        q: 'Which spelling shows the standard accent of "kuća" (house)?',
        opts: ['kȕća', 'kúća', 'kȗća', 'kùća'],
        correct: 'kùća',
      },
      {
        q: 'Which statement about the rising accents is TRUE?',
        opts: [
          'They never stand on a one-syllable word',
          'They stand only on the last syllable',
          'They only occur in dialects',
          'They are marked with a double grave',
        ],
        correct: 'They never stand on a one-syllable word',
      },
    ],
  },
  {
    id: 'long_falling',
    cefr: 'B2',
    title: 'Long-Falling Accent (ȃ)',
    subtitle: 'The held drop',
    icon: '📉',
    color: '#d97706',
    theory: `The long-falling accent (dugosilazni naglasak) is a long vowel on which the pitch drops. The vowel is held noticeably longer than a short one, and the fall runs across it.

Like the short-falling accent it stands only on the first syllable of a word, or on a one-syllable word, where it is very common: grȃd, dȃn, nȏć, pȃs. In longer words you find it at the start: vȋno, sȗnce.

Dictionaries mark it with an inverted breve: ȃ, ȇ, ȋ, ȏ, ȗ.`,
    keyPoints: [
      'Long vowel + falling pitch = dugosilazni (long falling)',
      'Stands only on the first syllable, or on a one-syllable word',
      'Marked with an inverted breve: ȃ ȇ ȋ ȏ ȗ',
      'Everyday examples: grȃd, dȃn, nȏć, vȋno, sȗnce',
    ],
    examples: [
      {
        hr: 'grȃd',
        en: 'city',
        audio: 'grad',
        note: 'Hold the vowel, then drop. Contrast grȁd (hail).',
      },
      { hr: 'dȃn', en: 'day', audio: 'dan', note: 'Long falling on a one-syllable word.' },
      { hr: 'nȏć', en: 'night', audio: 'noć', note: 'Long falling on a one-syllable word.' },
      { hr: 'vȋno', en: 'wine', audio: 'vino', note: 'Long falling on the first syllable.' },
      { hr: 'sȗnce', en: 'sun', audio: 'sunce', note: 'Long falling on the first syllable.' },
      {
        hr: 'lȗk',
        en: 'arch, bow',
        audio: 'luk',
        note: 'Contrast lȕk (onion), short falling.',
      },
      {
        hr: 'pȃs',
        en: 'belt, waist',
        audio: 'pas',
        note: 'Contrast pȁs (dog), short falling.',
      },
    ],
    minimalPairs: [
      {
        word1: { hr: 'grȃd', en: 'city', accent: 'ȃ' },
        word2: { hr: 'grȁd', en: 'hail (weather)', accent: 'ȁ' },
        note: 'Both falling: the vowel in grȃd is held, in grȁd it is quick.',
      },
      {
        word1: { hr: 'lȗk', en: 'arch, bow', accent: 'ȃ' },
        word2: { hr: 'lȕk', en: 'onion', accent: 'ȁ' },
        note: 'Length alone tells the arch from the onion.',
      },
      {
        word1: { hr: 'pȃs', en: 'belt, waist', accent: 'ȃ' },
        word2: { hr: 'pȁs', en: 'dog', accent: 'ȁ' },
        note: 'Long vowel = belt; short vowel = dog.',
      },
    ],
    drill: [
      { q: 'Which word means "city"?', opts: ['grȁd', 'grȃd', 'grád', 'gràd'], correct: 'grȃd' },
      {
        q: 'In a word of several syllables, where can a long-falling accent stand?',
        opts: ['First syllable only', 'Last syllable only', 'Any syllable', 'Second syllable only'],
        correct: 'First syllable only',
      },
      { q: 'Which word means "onion"?', opts: ['lȗk', 'lȕk', 'lúk', 'lùk'], correct: 'lȕk' },
      {
        q: 'What two features define the long-falling accent?',
        opts: [
          'Short vowel + rising pitch',
          'Long vowel + falling pitch',
          'Long vowel + rising pitch',
          'Short vowel + falling pitch',
        ],
        correct: 'Long vowel + falling pitch',
      },
    ],
  },
  {
    id: 'long_rising',
    cefr: 'B2',
    title: 'Long-Rising Accent (á)',
    subtitle: 'The held lift',
    icon: '📈',
    color: '#0e7490',
    theory: `The long-rising accent (dugouzlazni naglasak) is a long vowel on which the voice rises into the next syllable. The vowel is held, and the pitch climbs.

Like the short-rising accent it never stands on a one-syllable word and never on the last syllable of a longer word. Everyday examples: rúka, gláva, zíma, sréća, zvijézda.

Dictionaries mark it with an acute: á, é, í, ó, ú. The accusative of many such nouns moves the accent to a short falling one: rúka → rȕku, gláva → glȁvu, zíma → zȉmu.`,
    keyPoints: [
      'Long vowel + rising pitch = dugouzlazni (long rising)',
      'Never on a one-syllable word; never on the last syllable of a longer word',
      'Marked with an acute: á é í ó ú',
      'Everyday examples: rúka, gláva, zíma, sréća, zvijézda',
      'The difference from long falling is the pitch direction; both vowels are long',
    ],
    examples: [
      { hr: 'rúka', en: 'hand, arm', audio: 'ruka', note: 'Long rising on the first syllable.' },
      { hr: 'gláva', en: 'head', audio: 'glava', note: 'Long rising on the first syllable.' },
      { hr: 'zíma', en: 'winter', audio: 'zima', note: 'Long rising on the first syllable.' },
      {
        hr: 'sréća',
        en: 'happiness, luck',
        audio: 'sreća',
        note: 'Long rising on the first syllable.',
      },
      {
        hr: 'zvijézda',
        en: 'star',
        audio: 'zvijezda',
        note: 'Long rising on the long syllable -ije-.',
      },
      {
        hr: 'Lúka',
        en: 'Luka (a name)',
        audio: 'Luka',
        note: 'Contrast lȕka (harbour), short falling.',
      },
    ],
    minimalPairs: [
      {
        word1: { hr: 'Lúka', en: 'Luka (a name)', accent: 'á' },
        word2: { hr: 'lȕka', en: 'harbour', accent: 'ȁ' },
        note: 'Long rising for the name, short falling for the harbour.',
      },
      {
        word1: { hr: 'rúka', en: 'hand (nominative)', accent: 'á' },
        word2: { hr: 'rȕku', en: 'hand (accusative)', accent: 'ȁ' },
        note: 'The same noun: the accusative moves to a short falling accent.',
      },
      {
        word1: { hr: 'gláva', en: 'head (nominative)', accent: 'á' },
        word2: { hr: 'glȁvu', en: 'head (accusative)', accent: 'ȁ' },
        note: 'The same alternation as rúka → rȕku.',
      },
    ],
    drill: [
      {
        q: 'Which spelling shows the standard accent of "ruka" (hand)?',
        opts: ['rȗka', 'rúka', 'rȕka', 'rùka'],
        correct: 'rúka',
      },
      {
        q: 'Which word means "arch" or "bow"?',
        opts: ['lȗk', 'lúk', 'lȕk', 'lùk'],
        correct: 'lȗk',
      },
      {
        q: 'The word "gláva" (head) has which accent?',
        opts: ['Short falling', 'Short rising', 'Long rising', 'Long falling'],
        correct: 'Long rising',
      },
      {
        q: 'What distinguishes a long-rising from a long-falling accent?',
        opts: [
          'Vowel length',
          'Pitch direction (up vs down)',
          'Which syllable carries the accent',
          'Number of syllables',
        ],
        correct: 'Pitch direction (up vs down)',
      },
    ],
  },
  {
    id: 'practice',
    cefr: 'B1',
    title: 'Pitch Accent in Real Speech',
    subtitle: 'What matters for a learner',
    icon: '🗣️',
    color: '#7c3aed',
    theory: `Native speakers do not think about their accents; they acquired them as children, and many could not tell you whether kùća has a short or long rising accent although they say it perfectly. Your goal is the same kind of ear, not a phonetics degree.

The four-accent system described here is that of the standard language, the one used in careful public speech and recorded in dictionaries. Everyday speech varies by region — many speakers, in Zagreb and on the coast alike, do not keep all four apart — and none of that is "wrong".

For production, start with two things: never put the accent on the last syllable of a longer word (gòvoriti, not govoriTI), and notice which vowels are long. Pitch direction comes with listening.`,
    keyPoints: [
      'Native speakers do not consciously monitor their accent',
      'Everyday regional speech often differs from the four-accent standard',
      'Never stress the last syllable of a longer word: gòvoriti, prìjatelj, Hȑvātskā',
      'Learn which vowels are long; pitch direction follows with listening',
      'A dictionary such as hjp.znanje.hr shows the accent of every word',
    ],
    examples: [
      {
        hr: 'kùća',
        en: 'house',
        audio: 'kuća',
        note: 'Short rising on the first syllable.',
      },
      {
        hr: 'Hȑvātskā',
        en: 'Croatia',
        audio: 'Hrvatska',
        note: 'Short falling on the syllabic r; the two syllables after it are long.',
      },
      {
        hr: 'gòvoriti',
        en: 'to speak',
        audio: 'govoriti',
        note: 'Short rising on the first syllable — not on the last.',
      },
      {
        hr: 'ùčiti',
        en: 'to learn',
        audio: 'učiti',
        note: 'Short rising on the first syllable.',
      },
      {
        hr: 'čìtati',
        en: 'to read',
        audio: 'čitati',
        note: 'Short rising on the first syllable.',
      },
      {
        hr: 'zèmlja',
        en: 'earth, land, country',
        audio: 'zemlja',
        note: 'Short rising on the first syllable.',
      },
    ],
    drill: [
      {
        q: 'Which accents can stand only on the first syllable of a longer word?',
        opts: ['The falling accents', 'The rising accents', 'All four', 'None of them'],
        correct: 'The falling accents',
      },
      {
        q: 'For a beginner, which feature is most useful to get right first?',
        opts: [
          'Exact pitch direction',
          'Vowel length (short vs long)',
          'Regional variation',
          'Accent marks in writing',
        ],
        correct: 'Vowel length (short vs long)',
      },
      {
        q: 'Where is "govoriti" (to speak) accented?',
        opts: [
          'On the first syllable: gòvoriti',
          'On the last syllable',
          'On the third syllable',
          'It has no accent',
        ],
        correct: 'On the first syllable: gòvoriti',
      },
      {
        q: 'Which is the best long-term way to acquire the accents?',
        opts: [
          'Memorising the marks for every word',
          'Extensive listening to Croatian speech',
          'Avoiding words until the accent is perfect',
          'Stressing the last syllable for clarity',
        ],
        correct: 'Extensive listening to Croatian speech',
      },
    ],
  },
];

export const PITCH_ACCENT_QUICK_REFERENCE = {
  cefr: 'B1',
  accents: [
    {
      symbol: 'ȁ',
      name: 'Kratkosilazni',
      nameEn: 'Short-Falling',
      color: '#dc2626',
      desc: 'Short vowel, pitch falls. Only on the first syllable or a one-syllable word.',
    },
    {
      symbol: 'à',
      name: 'Kratkouzlazni',
      nameEn: 'Short-Rising',
      color: '#16a34a',
      desc: 'Short vowel, pitch rises. Never on a one-syllable word or a final syllable.',
    },
    {
      symbol: 'ȃ',
      name: 'Dugosilazni',
      nameEn: 'Long-Falling',
      color: '#d97706',
      desc: 'Long vowel, pitch falls. Only on the first syllable or a one-syllable word.',
    },
    {
      symbol: 'á',
      name: 'Dugouzlazni',
      nameEn: 'Long-Rising',
      color: '#0e7490',
      desc: 'Long vowel, pitch rises. Never on a one-syllable word or a final syllable.',
    },
  ],
  commonWords: [
    { word: 'kùća', meaning: 'house', accent: 'short-rising' },
    { word: 'grȃd', meaning: 'city', accent: 'long-falling' },
    { word: 'grȁd', meaning: 'hail (weather)', accent: 'short-falling' },
    { word: 'vòda', meaning: 'water', accent: 'short-rising' },
    { word: 'rúka', meaning: 'hand, arm', accent: 'long-rising' },
    { word: 'nòga', meaning: 'leg, foot', accent: 'short-rising' },
    { word: 'žèna', meaning: 'woman', accent: 'short-rising' },
    { word: 'dȃn', meaning: 'day', accent: 'long-falling' },
    { word: 'nȏć', meaning: 'night', accent: 'long-falling' },
    { word: 'pȁs', meaning: 'dog', accent: 'short-falling' },
    { word: 'pȃs', meaning: 'belt, waist', accent: 'long-falling' },
    { word: 'lȕk', meaning: 'onion', accent: 'short-falling' },
    { word: 'lȗk', meaning: 'arch, bow', accent: 'long-falling' },
    { word: 'brȁt', meaning: 'brother', accent: 'short-falling' },
    { word: 'mȍre', meaning: 'sea', accent: 'short-falling' },
    { word: 'vȋno', meaning: 'wine', accent: 'long-falling' },
    { word: 'gláva', meaning: 'head', accent: 'long-rising' },
    { word: 'zíma', meaning: 'winter', accent: 'long-rising' },
    { word: 'sréća', meaning: 'happiness, luck', accent: 'long-rising' },
    { word: 'sèstra', meaning: 'sister', accent: 'short-rising' },
  ],
};
