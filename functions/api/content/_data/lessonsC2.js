// functions/api/content/_data/lessonsC2.js
//
// C2 CONTENT (curriculum wave 6, 2026-08-28).
//
// C2 had FOUR lessons: the pluperfect, the comma, rhetorical figures and the
// administrative register. Four good lessons and nothing else — the level a
// learner is supposed to spend years inside consisted of one tense, one
// punctuation mark, one style topic and one genre.
//
// The CEFR C2 descriptor is not "more grammar". It is: understands with ease
// virtually everything heard or read; can summarise information from different
// spoken and written sources, reconstructing arguments and accounts in a
// coherent presentation; expresses him/herself spontaneously, very fluently and
// precisely, DIFFERENTIATING FINER SHADES OF MEANING even in the most complex
// situations. Almost none of that was represented.
//
// The level is built in five blocks:
//   1–8   PRECISION — the last five per cent, where the question stops being
//         "is this correct" and becomes "which correct form, and what does
//         choosing it say about me";
//   9–11  the tense and mood system at full range;
//   12–15 STYLE — rhythm, irony, and the humour that depends on grammar;
//   16–21 GENRE — the five functional styles Croatian linguistics itself
//         names, plus reading text written before the modern standard;
//   22–27 SYNTHESIS AND PRODUCTION — the CEFR descriptors, taught directly;
//   28–30 DEPTH — phraseology, the dialects, and what a language choice
//         signals about the person making it.
//
// Bodies live here rather than in lessons.js for the reason given in that
// file's header. THIS FILE MUST STAY IN scripts/lintCroatianText.mjs TARGETS.

export const LESSONS_C2 = [
  // ── 1. Norm and usage ─────────────────────────────────────────────────────
  {
    id: 'norma-i-uzus',
    title: 'The Norm and the Usage',
    level: 'C2',
    subtitle: 'What the standard says, what educated speakers do, and the gap',
    icon: '⚖️',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'A Different Kind of Question',
        body: 'Up to C1 the question was always "is this correct?". At C2 it stops being useful, because the interesting cases are the ones where two forms are both defensible and the choice says something. Croatian has an unusually explicit standard — codified grammars, an orthography, a long tradition of language advice — and an everyday usage that does not always match it. Knowing where they diverge is the difference between writing correctly and writing deliberately.',
        icon: '⚖️',
      },
      {
        type: 'rule',
        title: 'Norma Is Prescribed, Uzus Is Observed',
        body: 'Norma is what the codified standard prescribes: what the Hrvatski pravopis, the grammars and the dictionaries say. Uzus is what competent speakers and writers actually do. Where they agree there is nothing to discuss. Where they differ you have a decision to make, and the right decision depends on who is reading.',
        highlight: 'norma = prescribed · uzus = observed',
      },
      {
        type: 'table',
        title: 'Four Well-Known Divergences',
        headers: ['The norm prefers', 'Usage often has', 'Where it matters'],
        rows: [
          [
            'trebam raditi',
            'trebam da radim',
            'The da-construction is marked; avoid it in writing',
          ],
          ['dvoje djece', 'dvojica djece', 'dvojica is for men only — the norm is strict here'],
          ['gdje si bio?', 'di si bio?', 'Purely spoken; never written outside dialogue'],
          ['s njim', 'sa njim', 'sa only before s, š, z, ž and awkward clusters'],
        ],
      },
      {
        type: 'rule',
        title: 'The Norm Is Not Arbitrary, But It Is Chosen',
        body: 'Croatian codification made deliberate choices: štokavian as the base, the ijekavian yat reflex, a preference for building words from native roots rather than borrowing. Those choices have reasons and a history. They are not laws of nature, and a form the standard does not prefer is not necessarily an error — it may be regional, older, or simply less formal. Say "the standard prefers", not "that is wrong", unless it genuinely is.',
        highlight: 'less standard ≠ wrong',
      },
      {
        type: 'rule',
        title: 'Hypercorrection Is Its Own Error',
        body: 'The commonest C2 mistake is overshooting. A learner who has been told the nominal style is formal writes "vršenje provođenja nadzora". A learner told to avoid the da-construction writes infinitives where Croatian would not use one. A learner told "sa" is wrong writes "s sestrom" instead of "sa sestrom". Correction applied without judgement produces sentences no native speaker would write, and they are more conspicuous than the original error.',
        highlight: 's sestrom ✗ → sa sestrom ✓',
      },
      {
        type: 'rule',
        title: 'Choose For the Reader',
        body: 'The practical rule at C2: identify the register the reader expects, then write within it consistently. A legal submission and a column in Jutarnji list have different norms and both are professional. What never works is mixing them — an administrative nominal phrase inside a chatty paragraph reads as a mistake even when every word is correct.',
        highlight: 'consistency inside a register beats correctness across registers',
      },
      {
        type: 'example',
        title: 'The Same Idea, Three Defensible Ways',
        items: [
          {
            hr: 'Zahtjev je odbijen zbog nepotpune dokumentacije.',
            en: 'The application was rejected due to incomplete documentation.',
            note: 'Administrative: nominal, agentless, entirely standard',
          },
          {
            hr: 'Zahtjev su odbili jer dokumentacija nije bila potpuna.',
            en: 'They rejected the application because the documentation was not complete.',
            note: 'Neutral written: verbal, explicit, also entirely standard',
          },
          {
            hr: 'Odbili su mi zahtjev jer nisam sve predao.',
            en: 'They rejected my application because I did not hand everything in.',
            note: 'Spoken: correct Croatian, wrong for a formal letter',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A colleague writes "Trebam da završim izvještaj" in a report. What is the accurate thing to say about it?',
        options: [
          'It is ungrammatical and must be corrected',
          'It is understood everywhere but marked; the norm prefers "Trebam završiti izvještaj" in writing',
          'It is the preferred standard form',
          'It is a Serbian construction and must never appear',
        ],
        correct: 1,
        explanation:
          'The da-construction after trebati is widespread in speech across the region and perfectly comprehensible, but the Croatian standard prefers the infinitive in writing. "Marked, not wrong" is the honest description — and it is exactly the kind of judgement C2 is about.',
      },
      {
        type: 'quiz',
        q: 'Which of these is a hypercorrection rather than a genuine improvement?',
        options: [
          'Changing "sa mnom" to "s mnom"',
          'Changing "s sestrom" to "sa sestrom"',
          'Changing "trebam da idem" to "trebam ići"',
          'Changing "di si" to "gdje si" in a written report',
        ],
        correct: 0,
        explanation:
          '"Sa mnom" is the correct standard form — sa is required before the instrumental of ja precisely because "s mnom" is awkward to pronounce. Applying the "s not sa" rule mechanically breaks it. The other three are real corrections.',
      },
      {
        type: 'summary',
        title: 'Norm and Usage — What to Keep',
        points: [
          'Norma is prescribed, uzus is observed — the interesting cases are where they differ',
          'A non-standard form is often marked or regional rather than wrong',
          'Hypercorrection is more conspicuous than the error it replaces',
          'Write consistently inside one register; mixing registers reads as a mistake',
          'sa before s, š, z, ž and before mnom — s everywhere else',
        ],
      },
    ],
  },

  // ── 2. Contested spellings ────────────────────────────────────────────────
  {
    id: 'pravopis-dvojbe',
    title: 'The Contested Spellings',
    level: 'C2',
    subtitle: 'neću, pogreška, ne bih — the points Croatians argue about',
    icon: '✒️',
    duration: '~7 min',
    color: '#b45309',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'Where Croatian Orthography Is Not Settled',
        body: 'Most Croatian spelling is regular enough to be uninteresting. A handful of points are not, and they have been argued about publicly for decades — through competing orthographies, ministerial decisions and newspaper columns. Knowing which points are genuinely contested, and which are simply errors, is part of writing as an insider rather than a visitor.',
        icon: '✒️',
      },
      {
        type: 'table',
        title: 'The Contested Points',
        headers: ['Written', 'Also seen', 'Status'],
        rows: [
          [
            'neću, nećeš',
            'ne ću, ne ćeš',
            'Together is now standard; apart is the older prescription',
          ],
          ['pogreška', 'pogrješka', 'Both codified at times; pogreška dominates in practice'],
          ['strelica', 'strjelica', 'Same je/jě question after a consonant cluster'],
          ['zadatci', 'zadaci', 'Both permitted; zadaci is far commoner'],
          ['ne znam', 'neznam', 'NOT contested — ne is written apart from verbs'],
        ],
      },
      {
        type: 'rule',
        title: 'Ne Is Written Apart, Except Four Verbs',
        body: 'The negative particle ne is a separate word before a verb: ne znam, ne razumijem, ne bih. The exceptions are the four verbs that fused historically — nisam (biti), neću (htjeti), nemam (imati), nemoj (imperative). Everything else is written apart, and "neznam" is simply an error rather than a variant.',
        highlight: 'nisam · neću · nemam · nemoj — everything else apart',
      },
      {
        type: 'rule',
        title: 'The Conditional Is Two Words',
        body: 'Bih, bi, bismo, biste, bi are separate words: ne bih, ne bismo. The second person plural is biste, not "bi ste"; the first person plural is bismo, not "bi smo". And the form for I is bih, never bi — "ja bi rekao" is very common in speech and is one of the clearest markers of a text that has not been edited.',
        highlight: 'ja bih · mi bismo · vi biste',
      },
      {
        type: 'rule',
        title: 'Capitals: Croatian Is Sparer Than English',
        body: 'Croatian capitalises the first word of a multi-word proper name and any proper noun inside it: Republika Hrvatska, Ministarstvo znanosti i obrazovanja, Trg bana Jelačića. Days, months, nationalities as adjectives and languages are lower case: ponedjeljak, siječanj, hrvatski jezik. In polite address, Vi and its forms are capitalised in letters to one person, and this is one of the few places where the capital carries meaning.',
        highlight: 'hrvatski jezik, ponedjeljak, siječanj — lower case',
      },
      {
        type: 'table',
        title: 'Punctuation Marks Croatian Handles Differently',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          [
            '„Dobar dan”, rekao je.',
            '"Good day," he said.',
            'Comma inside the closing quotation mark',
          ],
          ['5. svibnja 2026.', '5 May 2026', 'Ordinal dots after day and year'],
          ['1.500,75', '1,500.75', 'Dot for thousands, comma for decimals'],
          ['npr., tj., itd.', 'e.g., i.e., etc.', 'Abbreviations keep the final dot'],
        ],
      },
      {
        type: 'rule',
        title: 'Pick a Side and Stay There',
        body: 'On the genuinely contested points nobody can call you wrong. What they can call you is inconsistent. Write pogreška throughout or pogrješka throughout; zadaci throughout or zadatci throughout. A document that alternates announces that nobody read it end to end, which is the impression a C2 writer is trying hardest to avoid.',
        highlight: 'consistency is the rule where the rule is contested',
      },
      {
        type: 'example',
        title: 'Edited and Unedited',
        items: [
          {
            hr: 'Ja bih to napravio, ali ne znam kako.',
            en: 'I would do it, but I do not know how.',
            note: 'bih for I; ne znam apart — both correct',
          },
          {
            hr: 'Nećemo doći jer nemamo vremena.',
            en: 'We will not come because we do not have time.',
            note: 'nećemo and nemamo are the fused exceptions',
          },
          {
            hr: 'Sastanak je 5. lipnja 2026. u 14 sati.',
            en: 'The meeting is on 5 June 2026 at 2 p.m.',
            note: 'Ordinal dots; lipnja lower case',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which sentence contains an actual orthographic error rather than a contested variant?',
        options: [
          'Ne ću doći sutra.',
          'Ja bi to napravio.',
          'Riješili smo sve zadatke.',
          'To je bila pogrješka.',
        ],
        correct: 1,
        explanation:
          '"Ja bi" is an error: the first person singular conditional is bih. "Ne ću" is the older prescription, "pogrješka" a codified variant, and "zadatke" is simply the accusative plural. Only one of the four is not defensible.',
      },
      {
        type: 'quiz',
        q: 'How should "on Monday, 5 May" be written in a Croatian business letter?',
        options: [
          'u Ponedjeljak, 5. Svibnja',
          'u ponedjeljak, 5. svibnja',
          'u ponedjeljak, 5 svibnja',
          'u Ponedjeljak, 5 Svibnja',
        ],
        correct: 1,
        explanation:
          'Days and months are lower case in Croatian, and the day of the month takes an ordinal dot. English habits push learners towards capitals on both, which is why this is one of the most frequent errors in otherwise excellent writing.',
      },
      {
        type: 'summary',
        title: 'Contested Spellings — What to Keep',
        points: [
          'ne is written apart except nisam, neću, nemam, nemoj',
          'ja bih, mi bismo, vi biste — never "ja bi"',
          'Days, months, languages and nationality adjectives are lower case',
          'Dates take ordinal dots; decimals use a comma and thousands a dot',
          'On genuinely contested points, consistency is the only real rule',
        ],
      },
    ],
  },

  // ── 4. Declension irregularities ──────────────────────────────────────────
  {
    id: 'sklonidba-iznimke',
    title: 'The Declensions That Fight Back',
    level: 'C2',
    subtitle: 'Foreign names, proper nouns, and the nouns that refuse the pattern',
    icon: '🧩',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Cases Are Automatic. These Are Not.',
        body: 'By C2 the case endings are not the problem. What still causes hesitation is the small set of nouns that decline against expectation, and above all foreign names — because Croatian declines them, English does not, and there is no way to avoid the question when you write about anyone from outside the country.',
        icon: '🧩',
      },
      {
        type: 'rule',
        title: 'Foreign Names Decline — That Is Not Optional',
        body: 'Croatian inflects foreign names as far as its morphology allows. A man called Shakespeare becomes Shakespearea, Shakespeareu. Macron becomes Macrona, Macronu. Leaving a name uninflected — "knjiga o Shakespeare" — is a genuine error, not a stylistic choice, and it is the single most visible sign of a text written by a foreigner.',
        highlight: 'knjiga o Shakespeareu, ne "o Shakespeare"',
      },
      {
        type: 'table',
        title: 'Foreign Names by Ending',
        headers: ['Name', 'Genitive', 'Rule'],
        rows: [
          ['Macron', 'Macrona', 'Consonant ending — declines like a normal masculine'],
          ['Shakespeare', 'Shakespearea', 'Silent final e — kept in writing, endings added after'],
          ['Kennedy', 'Kennedyja', 'Final -y takes a linking -j-'],
          ['Hugo', 'Hugoa', 'Final -o after a vowel keeps the o and adds the ending'],
          ['Zola', 'Zole', 'Final -a declines like a feminine, whoever bears it'],
          ['Merkel', 'Merkel', 'A woman’s surname in a consonant does not decline'],
        ],
      },
      {
        type: 'rule',
        title: "A Woman's Surname Ending in a Consonant Does Not Decline",
        body: 'This is the rule that surprises everyone. Angela Merkel, o Angeli Merkel — the first name declines, the surname does not. The reason is morphological: a consonant-final surname has no feminine paradigm to enter. A surname ending in -a does decline, whoever bears it: Ana Kovača is wrong, but o Ani Kovač is right and o Zoli is right for a man called Zola.',
        highlight: 'o Angeli Merkel — first name only',
      },
      {
        type: 'table',
        title: 'Native Nouns That Break the Pattern',
        headers: ['Nominative', 'Watch for', 'Why'],
        rows: [
          ['čovjek', 'plural is ljudi', 'Suppletive — a different root entirely'],
          [
            'dijete',
            'plural is djeca, and it is feminine singular in agreement',
            'Collective; djeca je došla',
          ],
          ['brat', 'plural braća, agreeing as feminine singular', 'Same collective pattern'],
          ['pas', 'genitive psa — the a drops', 'Fleeting a'],
          ['sat', 'sati (hours) vs satovi (clocks/lessons)', 'Two plurals, two meanings'],
          ['oko / uho', 'oči / uši — old dual, feminine', 'The body-part pairs kept the dual'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Plurals, Two Meanings',
        body: 'A handful of nouns have kept a short plural and a long plural with different senses. Sat: dva sata (two hours) but dva satova is wrong — satovi means clocks or lessons. Godina: pet godina (years) but godišta for year-groups. Oko: oči for the eyes in your head, oka for the eyes of a net or spots of fat in soup. Choosing the wrong plural produces a sentence that is grammatical and about the wrong thing.',
        highlight: 'dva sata (hours) · dva sata na zidu → dva satova ✗ / dva sata ✓',
      },
      {
        type: 'rule',
        title: 'Place Names Have Their Own Habits',
        body: 'Some Croatian place names are plural in form and take plural agreement: Karlovci, Vinkovci, Bjelovar is singular but Duga Resa is two words that both decline. Foreign cities usually adapt: u Londonu, iz Pariza, prema Berlinu. Some resist and stay uninflected: u Oslu is standard, but u Peruu and u Marokku follow the ordinary masculine pattern. When in doubt, look it up rather than guess — this is a lookup problem, not a rule problem.',
        highlight: 'u Londonu, iz Pariza, prema Berlinu',
      },
      {
        type: 'example',
        title: 'Getting Names Right',
        items: [
          {
            hr: 'Pročitao sam biografiju Winstona Churchilla.',
            en: "I read Winston Churchill's biography.",
            note: 'Both names decline — he is a man with consonant-final names',
          },
          {
            hr: 'Razgovarali smo o Angeli Merkel.',
            en: 'We talked about Angela Merkel.',
            note: 'First name declines, consonant-final surname does not',
          },
          {
            hr: 'Djeca su otišla, ali braća su ostala.',
            en: 'The children left, but the brothers stayed.',
            note: 'Both collectives; both take plural neuter agreement here in modern usage',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'How would you write "a book about Hillary Clinton" in Croatian?',
        options: [
          'knjiga o Hillary Clinton',
          'knjiga o Hillari Clinton',
          'knjiga o Hillary Clintonu',
          'knjiga o Hillari Clintonovoj',
        ],
        correct: 1,
        explanation:
          'The first name Hillary declines like a feminine noun (Hillari in the locative); the surname Clinton ends in a consonant and belongs to a woman, so it stays put. The third option gives her a masculine surname and the fourth adds a possessive suffix that modern usage has largely abandoned.',
      },
      {
        type: 'quiz',
        q: 'Which is right for "I waited two hours"?',
        options: [
          'Čekao sam dva satova.',
          'Čekao sam dva sata.',
          'Čekao sam dvije sate.',
          'Čekao sam dva sati.',
        ],
        correct: 1,
        explanation:
          'Sat in the sense of an hour takes the short plural, and after dva the noun stands in the genitive singular: dva sata. Satovi exists but means clocks or school lessons, so "dva satova" says something else entirely and says it ungrammatically.',
      },
      {
        type: 'summary',
        title: 'Declension Exceptions — What to Keep',
        points: [
          'Foreign names decline; leaving them uninflected is an error, not a style',
          "A woman's consonant-final surname does not decline — only her first name does",
          'čovjek/ljudi, dijete/djeca, brat/braća are suppletive or collective',
          'sat, godina and oko have two plurals with two different meanings',
          'Place-name declension is a lookup problem — check rather than guess',
        ],
      },
    ],
  },

  // ── 5. Numbers in formal writing ──────────────────────────────────────────
  {
    id: 'brojevi-norma',
    title: 'Numbers, Dates and Measurements',
    level: 'C2',
    subtitle: 'The conventions formal Croatian applies to everything countable',
    icon: '📐',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Part of Formal Writing Nobody Teaches',
        body: 'Numbers are where a well-written Croatian document quietly announces whether it was written by someone who works in the language. The grammar of counting was settled at A2 and C1; what remains is convention — when to write a numeral and when a word, how to punctuate a decimal, how to render a date, how to inflect a number inside running text.',
        icon: '📐',
      },
      {
        type: 'table',
        title: 'The Conventions',
        headers: ['Written as', 'Not', 'Context'],
        rows: [
          ['1.500,75 kn', '1,500.75 kn', 'Dot separates thousands, comma the decimal'],
          ['5. svibnja 2026.', '5 svibanj 2026', 'Ordinal dots; the month in the genitive'],
          ['u 14 sati', 'u 14:00 sati', 'The word sati replaces the second half of the clock time'],
          ['20 %', '20%', 'A space before the percent sign'],
          ['3 kg, 15 km', '3kg, 15km', 'A space before every unit'],
          ['tridesetih godina', '30-ih godina', 'Decades are written out in prose'],
        ],
      },
      {
        type: 'rule',
        title: 'Words for Small Numbers, Numerals for Large',
        body: 'Croatian prose convention, like English, writes small numbers as words and larger ones as numerals — commonly words up to ten, numerals above. The line is not codified, so the rule that matters is consistency within one text. What is codified is that a sentence never begins with a numeral: rewrite the sentence or spell the number out.',
        highlight: 'Never open a sentence with a numeral',
      },
      {
        type: 'rule',
        title: 'Numbers Decline, Including in Documents',
        body: 'Two, three and four decline: s dvama ljudima, o trima slučajevima. Higher numbers behave as indeclinables in practice, and modern usage lets dva decline or not depending on register. In administrative writing the declined forms survive and are expected; in journalism they read as stiff. Knowing which is which is the whole skill.',
        highlight: 's dvama prijedlozima (formal) · s dva prijedloga (neutral)',
      },
      {
        type: 'rule',
        title: 'The Genitive After Quantity Is Not Optional',
        body: 'After a quantity expression the counted noun stands in the genitive plural: mnogo ljudi, nekoliko problema, pet kuna, malo vremena. The commonest C2-level slip is applying it after dva/tri/četiri, which take the genitive SINGULAR instead: dva sata, tri dana, četiri godine. Getting this backwards is grammatical noise that a careful reader hears immediately.',
        highlight: 'pet kuna (gen. pl.) · dvije kune (gen. sg.)',
      },
      {
        type: 'table',
        title: 'Money, Time and Measurement in Prose',
        headers: ['Croatian', 'English'],
        rows: [
          ['Cijena iznosi 1.250,00 eura.', 'The price is 1,250.00 euros.'],
          ['Rok je 30 dana od primitka.', 'The deadline is 30 days from receipt.'],
          ['Sastanak počinje u 9 i 30.', 'The meeting starts at half past nine.'],
          ['Udio je porastao za 3,5 postotna boda.', 'The share rose by 3.5 percentage points.'],
          ['Površina je 120 m².', 'The area is 120 m².'],
        ],
      },
      {
        type: 'rule',
        title: 'Postotak and Postotni Bod Are Different Things',
        body: 'A rise from 10 % to 13 % is a rise of three PERCENTAGE POINTS (postotna boda) and of thirty per cent (posto). Croatian keeps the distinction as carefully as English does, and getting it wrong in a report about anything measured is a substantive error rather than a linguistic one. Posto is invariable; postotak declines.',
        highlight: 'postotni bod ≠ posto',
      },
      {
        type: 'example',
        title: 'A Paragraph With Numbers In It',
        items: [
          {
            hr: 'U 2025. godini prihod je iznosio 4.320.000,00 eura.',
            en: 'In 2025 the revenue amounted to 4,320,000.00 euros.',
            note: 'Ordinal dot on the year; dots for thousands, comma for decimals',
          },
          {
            hr: 'To je porast od 12 % u odnosu na prethodnu godinu.',
            en: 'That is a rise of 12 % compared with the previous year.',
            note: 'Space before the percent sign; u odnosu na + accusative',
          },
          {
            hr: 'Očekujemo da će rast usporiti na 3 do 4 posto.',
            en: 'We expect growth to slow to 3 to 4 per cent.',
            note: 'posto invariable; the range written with do',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which renders "1,250.50 euros" correctly in a Croatian document?',
        options: ['1,250.50 eura', '1.250,50 eura', '1 250.50 eura', '1250,50 euro'],
        correct: 1,
        explanation:
          'Croatian uses the dot as the thousands separator and the comma as the decimal mark — the opposite of English. Euro also takes the genitive plural eura after this quantity, not the nominative.',
      },
      {
        type: 'quiz',
        q: 'An index moves from 20 % to 25 %. What has risen by five?',
        options: [
          'Postotak — it rose by five per cent',
          'Postotni bodovi — it rose by five percentage points, which is a rise of 25 per cent',
          'Both expressions mean the same thing',
          'Neither — the change cannot be expressed in Croatian',
        ],
        correct: 1,
        explanation:
          'Five percentage points, twenty-five per cent. Croatian marks the difference exactly as English does, and conflating them in a report misstates the finding rather than merely the wording.',
      },
      {
        type: 'summary',
        title: 'Numbers — What to Keep',
        points: [
          'Dot for thousands, comma for decimals — the reverse of English',
          'Dates take ordinal dots and the month in the genitive',
          'A space before %, kg, km and every other unit',
          'dva/tri/četiri + genitive singular; five and above + genitive plural',
          'postotni bod and posto measure different things — keep them apart',
        ],
      },
    ],
  },

  // ── 6. Agreement subtleties ───────────────────────────────────────────────
  {
    id: 'slaganje-suptilnosti',
    title: 'Agreement When the Subject Is Complicated',
    level: 'C2',
    subtitle: 'Coordinated subjects, collectives, and what the verb does about them',
    icon: '🔗',
    duration: '~6 min',
    color: '#be123c',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Agreement Stops Being Automatic',
        body: 'One noun, one verb: settled at A1. What is not settled, and what C2 writers still get wrong, is what happens when the subject is two nouns of different genders, or a collective, or a quantity, or a noun far away from its verb. Croatian has answers for all of these, and several of them are not what an English speaker would guess.',
        icon: '🔗',
      },
      {
        type: 'rule',
        title: 'Mixed Genders Take the Masculine Plural',
        body: 'When coordinated subjects differ in gender, the participle goes masculine plural: Ivan i Ana su došli. Marko, Petra i Lucija su otišli. This holds even when the women outnumber the men, because the masculine plural is functioning here as the unmarked form rather than as a statement about anybody.',
        highlight: 'Ivan i Ana su došli',
      },
      {
        type: 'table',
        title: 'The Cases That Trip People',
        headers: ['Subject', 'Verb form', 'Note'],
        rows: [
          ['Ivan i Ana', 'došli su', 'Mixed gender → masculine plural'],
          ['Ana i Marija', 'došle su', 'All feminine → feminine plural'],
          ['djeca', 'djeca su došla', 'Collective, neuter plural agreement'],
          ['nekoliko ljudi', 'došlo je', 'Quantity → neuter singular'],
          ['pet studenata', 'došlo je', 'Five and above → neuter singular'],
          ['dva studenta', 'došla su', 'Two, three, four → masculine dual-plural'],
        ],
      },
      {
        type: 'rule',
        title: 'A Quantity Subject Takes a Neuter Singular Verb',
        body: 'This is the rule that most often surprises. Mnogo ljudi je došlo. Nekoliko studenata je položilo. Pet automobila je stiglo. The quantity word, not the noun, controls agreement, and it delivers a neuter singular. Writing "mnogo ljudi su došli" is the single commonest agreement error in advanced learner Croatian.',
        highlight: 'Mnogo ljudi je došlo — not "su došli"',
      },
      {
        type: 'rule',
        title: 'Two, Three and Four Behave Differently From Five',
        body: 'Dva studenta su došla — masculine, plural-looking, and the participle ends in -a. Pet studenata je došlo — neuter singular. The boundary is exactly at five, and it is a survival of the old dual. It applies to every quantity phrase: dvije žene su došle, pet žena je došlo.',
        highlight: 'dva su došla · pet je došlo',
      },
      {
        type: 'rule',
        title: 'The Nearest Noun Does Not Win',
        body: 'English speakers sometimes let agreement drift to whichever noun is closest to the verb. Croatian does not permit it. "Ni Ivan ni njegove sestre nisu došli" — the verb is plural because the subject as a whole is plural, not singular because sestre is nearest or Ivan is first. When the subject is long, find its head before choosing the verb.',
        highlight: 'agreement is with the whole subject, not the nearest word',
      },
      {
        type: 'example',
        title: 'Agreement in Real Sentences',
        items: [
          {
            hr: 'Mnogo je ljudi došlo na otvorenje.',
            en: 'Many people came to the opening.',
            note: 'Neuter singular došlo; the clitic je slides into second position',
          },
          {
            hr: 'Dvije su se kolegice javile na natječaj.',
            en: 'Two colleagues applied for the competition.',
            note: 'dvije + feminine plural javile; clitic cluster su se in second position',
          },
          {
            hr: 'Djeca su se igrala dok su roditelji razgovarali.',
            en: 'The children played while the parents talked.',
            note: 'djeca takes neuter plural igrala',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which is correct for "Several students passed"?',
        options: [
          'Nekoliko studenata su položili.',
          'Nekoliko studenata je položilo.',
          'Nekoliko studenti je položio.',
          'Nekoliko studenata su položila.',
        ],
        correct: 1,
        explanation:
          'A quantity expression takes a neuter singular verb and a genitive plural noun: nekoliko studenata je položilo. The plural verb is the commonest advanced-learner error here because English agreement pulls the other way.',
      },
      {
        type: 'quiz',
        q: '"Marija i Petar ___ na sastanak." Which participle?',
        options: ['došle su', 'došli su', 'došlo je', 'došao je'],
        correct: 1,
        explanation:
          'Mixed genders take the masculine plural, so došli su. The masculine plural here is unmarked rather than a claim about the people involved — the same logic that makes ljudi the default word for people.',
      },
      {
        type: 'summary',
        title: 'Agreement — What to Keep',
        points: [
          'Mixed-gender coordinated subjects take the masculine plural',
          'Quantity subjects (mnogo, nekoliko, five and above) take a NEUTER SINGULAR verb',
          'Two, three and four keep a plural-looking form from the old dual',
          'djeca and braća are collectives with their own agreement',
          'The verb agrees with the whole subject, never with the nearest noun',
        ],
      },
    ],
  },

  // ── 7. Case subtleties ────────────────────────────────────────────────────
  {
    id: 'padezne-suptilnosti',
    title: 'Case at the Margins',
    level: 'C2',
    subtitle: 'Genitive under negation, the partitive, and cases that carry meaning alone',
    icon: '🎚️',
    duration: '~7 min',
    color: '#4d7c0f',
    bg: '#f7fee7',
    slides: [
      {
        type: 'intro',
        title: 'Where the Case Is the Message',
        body: 'At C1 you learned which case each verb governs. At C2 the remaining cases are the ones where nothing governs anything — where the case itself carries the meaning and swapping it produces a different sentence rather than a wrong one. These are the constructions that let a Croatian writer say in four words what English needs a clause for.',
        icon: '🎚️',
      },
      {
        type: 'rule',
        title: 'The Genitive of Negation',
        body: 'A negated verb can take its object in the genitive instead of the accusative: Nemam vremena rather than Nemam vrijeme. Ne vidim razloga. Nema problema. The genitive here is older and stronger; it emphasises the total absence of the thing. The accusative after a negated verb is also possible and reads as more neutral, so the choice is a matter of emphasis rather than correctness.',
        highlight: 'Nemam vremena — total absence',
      },
      {
        type: 'table',
        title: 'The Same Verb, Two Cases, Two Readings',
        headers: ['Genitive', 'Accusative', 'The difference'],
        rows: [
          ['Popio je vode.', 'Popio je vodu.', 'Some water / the water — the partitive'],
          ['Nemam novca.', 'Nemam novac.', 'No money at all / not the money in question'],
          ['Daj mi kruha.', 'Daj mi kruh.', 'Some bread / the loaf'],
          ['Bojim se psa.', '—', 'bojati se governs the genitive; no choice here'],
        ],
      },
      {
        type: 'rule',
        title: 'The Partitive Genitive',
        body: 'A bare genitive can mean "some of": Kupi kruha (buy some bread), Donesi vode (bring some water). The accusative would name a specific whole loaf or a specific glass. English marks this with "some" or with nothing at all; Croatian marks it with the case, which is why the distinction is invisible to a learner translating word for word.',
        highlight: 'Kupi kruha (some) · Kupi kruh (the loaf)',
      },
      {
        type: 'rule',
        title: 'The Temporal Cases',
        body: 'Croatian expresses time with bare cases and no preposition. The genitive gives a point: prošle godine, ovoga tjedna, jednoga dana. The instrumental gives a repetition: subotom (on Saturdays), danju (by day), noću (by night), ljeti (in summer). The accusative gives a duration: cijeli dan, cijelu godinu. Three cases, three time relations, no prepositions anywhere.',
        highlight: 'prošle godine · subotom · cijeli dan',
      },
      {
        type: 'rule',
        title: 'The Dative of Possession',
        body: 'Where English says "my head hurts", Croatian often says Boli me glava — but for possession in the sense of belonging-to-a-person it reaches for the dative: Umro mu je otac (his father died), Sin joj je u Njemačkoj (her son is in Germany). The dative clitic does what an English possessive pronoun does, and it is warmer: it presents the person as affected rather than merely as an owner.',
        highlight: 'Umro mu je otac — the dative of the person affected',
      },
      {
        type: 'rule',
        title: 'The Instrumental of Manner and Means',
        body: 'A bare instrumental gives means or route without any preposition: putovati vlakom (by train), pisati olovkom (with a pencil), ići šumom (through the forest), noću (by night). With s or sa the same case means accompaniment instead: s bratom, sa sestrom. Dropping or adding the preposition turns an instrument into a companion, which is how "putovao je s vlakom" becomes a sentence about travelling in the train\'s company.',
        highlight: 'putovati vlakom (by) · putovati s bratom (with)',
      },
      {
        type: 'example',
        title: 'The Margins in Use',
        items: [
          {
            hr: 'Nemam vremena za to ovoga tjedna.',
            en: 'I have no time for that this week.',
            note: 'Genitive of negation + temporal genitive in one clause',
          },
          {
            hr: 'Subotom ujutro ide na tržnicu i kupi voća i kruha.',
            en: 'On Saturday mornings he goes to the market and buys some fruit and bread.',
            note: 'Instrumental of repetition + partitive genitives',
          },
          {
            hr: 'Umrla mu je majka prošle godine.',
            en: 'His mother died last year.',
            note: 'Dative of the person affected + temporal genitive',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'What is the difference between "Donesi vode" and "Donesi vodu"?',
        options: [
          'No difference — both are equally standard',
          '"Vode" asks for some water; "vodu" asks for the particular water in question',
          '"Vode" is plural',
          '"Vodu" is more polite',
        ],
        correct: 1,
        explanation:
          'The bare genitive is partitive — some water, an unspecified amount. The accusative points at a definite quantity or the specific water both speakers have in mind. English uses "some" or nothing; Croatian uses the case, which is why translating word for word loses the distinction entirely.',
      },
      {
        type: 'quiz',
        q: 'Which sentence uses the instrumental correctly for "he travelled by train"?',
        options: [
          'Putovao je s vlakom.',
          'Putovao je vlakom.',
          'Putovao je na vlaku.',
          'Putovao je vlaka.',
        ],
        correct: 1,
        explanation:
          'A bare instrumental gives the means: vlakom, autom, avionom. Adding s makes it accompaniment, so "s vlakom" says he travelled in the train\'s company. This is one of the few places where an extra preposition produces a sentence that is grammatical and comic.',
      },
      {
        type: 'summary',
        title: 'Case at the Margins — What to Keep',
        points: [
          'The genitive of negation emphasises total absence: Nemam vremena',
          'The partitive genitive means "some": Kupi kruha vs Kupi kruh',
          'Time takes bare cases: prošle godine (point), subotom (repeated), cijeli dan (duration)',
          'The dative marks the person affected, doing the work of a possessive',
          'A bare instrumental is means; with s it is accompaniment',
        ],
      },
    ],
  },

  // ── 8. The hard edges of aspect ───────────────────────────────────────────
  {
    id: 'glagolski-vid-granice',
    title: 'The Hard Edges of Aspect',
    level: 'C2',
    subtitle: 'Biaspectual verbs, negated imperatives, and where the rules stop',
    icon: '🪓',
    duration: '~7 min',
    color: '#c2410c',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'The Cases the Rule Does Not Cover',
        body: 'The C1 rule — perfective for a completed whole, imperfective for a process — carries you a long way and then stops. It stops at verbs that are both aspects at once, at negated commands, at the historic present, and at a set of contexts where the grammar chooses the aspect for you regardless of what you mean. These edges are where advanced learners still sound approximate.',
        icon: '🪓',
      },
      {
        type: 'rule',
        title: 'Biaspectual Verbs Are Both at Once',
        body: 'A small set of verbs, mostly borrowings in -irati and a few native ones, function as either aspect without changing form: telefonirati, organizirati, informirati, and natively čuti, vidjeti, ručati, večerati. Only the context tells you which reading applies. Telefonirao sam mu can mean "I phoned him" or "I was phoning him", and Croatian simply does not distinguish them here.',
        highlight: 'organizirati, telefonirati, čuti, vidjeti — both aspects',
      },
      {
        type: 'rule',
        title: 'A Negated Imperative Is Always Imperfective',
        body: 'This is the hardest rule to internalise because it overrides meaning. Positive: Zatvori vrata (perfective, close the door). Negated: Ne zatvaraj vrata — imperfective, even though you are forbidding a single completed act. Nemoj otvarati. Ne govori mu. The perfective in a negated imperative is not a shade of meaning, it is an error, and it is one of the most audible mistakes a foreign speaker makes.',
        highlight: 'Zatvori vrata → Ne zatvaraj vrata',
      },
      {
        type: 'table',
        title: 'Positive and Negated Commands',
        headers: ['Do it', "Don't do it", 'Note'],
        rows: [
          ['Zatvori prozor.', 'Ne zatvaraj prozor.', 'zatvoriti → zatvarati'],
          ['Reci mu.', 'Nemoj mu govoriti.', 'reći → govoriti (suppletive pair)'],
          ['Kupi to.', 'Ne kupuj to.', 'kupiti → kupovati'],
          ['Otvori vrata.', 'Nemoj otvarati vrata.', 'nemoj + infinitive is the softer form'],
          [
            'Pojedi sve.',
            'Nemoj sve pojesti.',
            'The one exception type — warning against a single act',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Nemoj + Perfective Is the Warning Exception',
        body: 'The one place a perfective survives under negation is a warning against a specific single act that might happen by accident: Nemoj pasti! (Do not fall!), Nemoj zaboraviti! (Do not forget!), Nemoj to slomiti! Here the speaker is not forbidding an activity but flagging a one-off risk, and the perfective is exactly right. Ne zaboravljaj would mean "do not be forgetful in general", which is a different instruction.',
        highlight: 'Nemoj zaboraviti! (this once) vs Ne zaboravljaj (in general)',
      },
      {
        type: 'rule',
        title: 'The Historic Present Takes the Imperfective',
        body: 'Croatian narrates past events in the present tense for immediacy, and that present is imperfective even for completed acts: Ulazi on u sobu, gleda me i ništa ne govori. Using perfectives here — uđe, pogleda — is possible and produces the narrative present of folk tales and jokes, a distinctly different texture. Both exist; mixing them at random does not.',
        highlight: 'Ulazi on u sobu i gleda me… — the historic present',
      },
      {
        type: 'rule',
        title: 'Phase Verbs Demand the Imperfective',
        body: 'Verbs that name the beginning, continuation or end of an action take an imperfective infinitive, because you cannot begin a completed whole. Počeo je čitati, nastavio je raditi, prestao je pušiti. Počeo je pročitati is not a fine distinction, it is ungrammatical. The same applies after moći in some habitual senses and after volim, mrzim, znam in the sense of knowing how.',
        highlight: 'početi / nastaviti / prestati + IMPERFECTIVE',
      },
      {
        type: 'example',
        title: 'The Edges in Practice',
        items: [
          {
            hr: 'Nemoj zaboraviti ključeve, ali ne zaboravljaj ni ostalo.',
            en: 'Do not forget the keys — and do not be forgetful about the rest either.',
            note: 'Perfective for the one-off risk, imperfective for the general habit',
          },
          {
            hr: 'Prestao je pušiti prije pet godina.',
            en: 'He stopped smoking five years ago.',
            note: 'prestati takes the imperfective infinitive',
          },
          {
            hr: 'Ulazim ja u ured, a on već sjedi za mojim stolom.',
            en: 'So I walk into the office and he is already sitting at my desk.',
            note: 'Historic present — imperfective throughout',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'How do you tell someone not to open the window?',
        options: [
          'Ne otvori prozor.',
          'Ne otvaraj prozor.',
          'Ne otvoriti prozor.',
          'Neotvaraj prozor.',
        ],
        correct: 1,
        explanation:
          'A negated imperative takes the imperfective: otvoriti → otvarati, so ne otvaraj. This overrides the ordinary aspect logic — you are forbidding a single act, yet the imperfective is obligatory. The fourth option also joins ne to the verb, which only nisam, neću, nemam and nemoj do.',
      },
      {
        type: 'quiz',
        q: 'Which is grammatical?',
        options: [
          'Počeo je pročitati knjigu.',
          'Počeo je čitati knjigu.',
          'Prestao je popušiti.',
          'Nastavio je napisati pismo.',
        ],
        correct: 1,
        explanation:
          'Phase verbs — početi, nastaviti, prestati — require an imperfective infinitive, because a completed whole has no beginning, middle or end to enter. The other three pair a phase verb with a perfective and are ungrammatical rather than merely marked.',
      },
      {
        type: 'summary',
        title: 'Aspect at the Edges — What to Keep',
        points: [
          'Biaspectual verbs (organizirati, čuti, vidjeti) are both aspects; only context decides',
          'A negated imperative is imperfective: Ne zatvaraj, Ne kupuj',
          'Nemoj + perfective is the exception — a warning about one specific act',
          'The historic present narrates with imperfectives; perfectives give a different texture',
          'početi, nastaviti, prestati always take an imperfective infinitive',
        ],
      },
    ],
  },

  // ── 10. The second conditional ────────────────────────────────────────────
  {
    id: 'kondicional-drugi',
    title: 'The Second Conditional',
    level: 'C2',
    subtitle: 'Bio bih došao — the mood for what never happened',
    icon: '🕰️',
    duration: '~6 min',
    color: '#6d28d9',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'A Form Most Learners Never Meet',
        body: 'Croatian has a second conditional — kondicional drugi — built from the conditional of biti plus the participle: bio bih došao. It is rare in speech, alive in literature and careful writing, and almost never taught, so learners reach C2 able to say "I would come" and unable to say "I would have come" except by implication. This lesson closes that.',
        icon: '🕰️',
      },
      {
        type: 'rule',
        title: 'How It Is Built',
        body: 'Take the first conditional of biti — bio bih, bio bi, bio bi, bili bismo, bili biste, bili bi — and add the l-participle of the main verb. Bio bih došao. Bila bi rekla. Bili bismo znali. The participle of biti agrees with the subject in gender and number, and so does the main participle, which is why the form is long and why speech tends to avoid it.',
        highlight: 'bio bih + došao = bio bih došao',
      },
      {
        type: 'table',
        title: 'First Conditional and Second Conditional',
        headers: ['Croatian', 'English', 'Reading'],
        rows: [
          ['Došao bih.', 'I would come.', 'Still possible'],
          ['Bio bih došao.', 'I would have come.', 'It did not happen'],
          ['Da imam vremena, došao bih.', 'If I had time, I would come.', 'Present unreal'],
          [
            'Da sam imao vremena, bio bih došao.',
            'If I had had time, I would have come.',
            'Past unreal',
          ],
          ['Rekla bi mu.', 'She would tell him.', 'Open'],
          ['Bila bi mu rekla.', 'She would have told him.', 'Closed — she did not'],
        ],
      },
      {
        type: 'rule',
        title: 'The First Conditional Usually Does the Job',
        body: 'Modern spoken Croatian mostly uses the first conditional for both, letting the da-clause carry the time: Da sam znao, došao bih. That is entirely standard and nobody will correct you. The second conditional adds explicit unreality and a literary weight, which is why you find it in Krleža and in careful obituaries and rarely in a text message.',
        highlight: 'Da sam znao, došao bih — standard and sufficient',
      },
      {
        type: 'rule',
        title: 'Where It Earns Its Keep',
        body: 'Use it when the unreality is the point and the context does not already establish it: in a counterfactual argument, in regret, in a formal apology. "Da smo znali, bili bismo postupili drukčije" is a sentence a company writes; "da smo znali, postupili bismo drukčije" says the same and sounds slightly less considered. In an argument about what should have been done, the explicit form is the courteous one.',
        highlight: 'Bili bismo postupili drukčije.',
      },
      {
        type: 'rule',
        title: 'Do Not Confuse It With the Pluperfect',
        body: 'The pluperfect — bio sam došao — is indicative and reports a real event before another past event. The second conditional — bio bih došao — is conditional and reports a non-event. One letter of difference between sam and bih, and the whole factual status of the sentence changes. In reading older texts this pair is the commonest source of misunderstanding.',
        highlight: 'bio SAM došao (it happened) · bio BIH došao (it did not)',
      },
      {
        type: 'example',
        title: 'The Mood in Use',
        items: [
          {
            hr: 'Da smo znali za rok, bili bismo predali na vrijeme.',
            en: 'Had we known about the deadline, we would have submitted on time.',
            note: 'Formal, explicit, and unmistakably counterfactual',
          },
          {
            hr: 'Bio bih ti rekao, ali nisam te mogao dobiti.',
            en: 'I would have told you, but I could not reach you.',
            note: 'Clitic order: bio bih ti rekao — bih before the dative ti',
          },
          {
            hr: 'Nikad ne bi bila otišla da je znala što je čeka.',
            en: 'She would never have left had she known what awaited her.',
            note: 'Negated second conditional; literary register',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which sentence says the speaker did NOT come?',
        options: ['Došao bih.', 'Bio sam došao.', 'Bio bih došao.', 'Dolazio sam.'],
        correct: 2,
        explanation:
          'Bio bih došao is the second conditional: counterfactual, and the coming did not happen. Bio sam došao is the pluperfect and reports that it did. The difference is sam versus bih, and it reverses the factual claim of the sentence.',
      },
      {
        type: 'quiz',
        q: 'Where does the clitic go in "I would have told you"?',
        options: [
          'Bio ti bih rekao.',
          'Bio bih ti rekao.',
          'Bih ti bio rekao.',
          'Ti bio bih rekao.',
        ],
        correct: 1,
        explanation:
          'The cluster follows the ordinary second-position rules with bih before the dative: bio bih ti rekao. The participle bio opens the sentence and the whole clitic cluster follows it in order — conditional auxiliary, then dative.',
      },
      {
        type: 'summary',
        title: 'The Second Conditional — What to Keep',
        points: [
          'bio bih + l-participle = would have done; both participles agree with the subject',
          'The first conditional plus a da-clause covers the same ground and is standard',
          'Reach for the second conditional when the unreality itself is the point',
          'bio SAM došao is indicative and real; bio BIH došao is conditional and not',
          'Clitic order inside it is ordinary: bio bih ti rekao',
        ],
      },
    ],
  },

  // ── 11. Modality across the system ────────────────────────────────────────
  {
    id: 'glagolski-nacini',
    title: 'Modality Across the Whole System',
    level: 'C2',
    subtitle: 'Obligation, permission and probability, and the forms that carry them',
    icon: '🎛️',
    duration: '~7 min',
    color: '#0e7490',
    bg: '#ecfeff',
    slides: [
      {
        type: 'intro',
        title: 'Modality Is Not Only the Modal Verbs',
        body: 'Learners meet morati, moći and trebati early and assume that is modality dealt with. It is not. Croatian expresses obligation, permission, probability and inference through impersonal constructions, the conditional, the future, particles and word order as well — and the choice between them is what makes an instruction sound like a request, a rule or a threat.',
        icon: '🎛️',
      },
      {
        type: 'table',
        title: 'One Meaning, Several Forms',
        headers: ['Form', 'Example', 'Force'],
        rows: [
          ['morati', 'Moraš doći.', 'Direct obligation'],
          ['trebati', 'Trebao bi doći.', 'Advice, softened'],
          ['valja', 'Valja doći na vrijeme.', 'Impersonal norm'],
          ['treba + infinitive', 'Treba to riješiti.', 'Agentless obligation'],
          ['imperative', 'Dođi.', 'Command'],
          ['future', 'Doći ćeš u devet.', 'Instruction disguised as prediction'],
        ],
      },
      {
        type: 'rule',
        title: 'Impersonal Obligation Removes the Person',
        body: 'Treba to riješiti. Valja provjeriti podatke. Potrebno je dostaviti dokaz. None of these names who must act, and that is exactly their function: they state a requirement without pointing at anybody. Administrative and academic Croatian run on them. In a personal exchange the same construction reads as evasive — "treba to riješiti" said to a colleague can mean "you should have done this already".',
        highlight: 'Treba to riješiti — obligation with nobody in it',
      },
      {
        type: 'rule',
        title: 'The Future as an Instruction',
        body: 'Croatian, like English, uses the future to give orders that are not phrased as orders: Doći ćeš u devet i nećeš kasniti. The effect is stronger than an imperative, not weaker, because it presents compliance as already settled. Parents and sergeants use it. Used to a peer it is a serious escalation, which is why a learner reaching for it as a neutral future can cause offence without knowing.',
        highlight: 'Doći ćeš u devet. — settled, not requested',
      },
      {
        type: 'rule',
        title: 'Probability and Inference',
        body: 'Croatian marks how sure you are with particles rather than with modal verbs: sigurno (certainly), vjerojatno (probably), valjda (presumably, with a shrug), možda (maybe), navodno (allegedly), izgleda (it seems). Navodno is the one worth learning properly — it distances the speaker from the claim entirely, and journalists use it to report without endorsing.',
        highlight: 'navodno = reported, not endorsed',
      },
      {
        type: 'rule',
        title: 'Trebati Is Two Verbs',
        body: 'Trebati means "to need" with a personal subject — Trebam odmor, Trebaju mi papiri — and "should" as a modal, where the standard prefers a personal construction: Trebao bih ići. The impersonal "treba da idem" is widespread in speech and marked in writing. Meanwhile "Trebaju mi papiri" and "Trebam papire" are both used, with the dative construction the older and more standard one.',
        highlight: 'Trebaju mi papiri (need) · Trebao bih ići (should)',
      },
      {
        type: 'example',
        title: 'The Same Instruction, Five Ways',
        items: [
          {
            hr: 'Molim vas, dostavite dokumentaciju do petka.',
            en: 'Please submit the documentation by Friday.',
            note: 'Polite imperative — a request',
          },
          {
            hr: 'Dokumentaciju je potrebno dostaviti do petka.',
            en: 'The documentation must be submitted by Friday.',
            note: 'Impersonal — a rule, nobody named',
          },
          {
            hr: 'Trebali biste dostaviti dokumentaciju do petka.',
            en: 'You should submit the documentation by Friday.',
            note: 'Conditional — advice',
          },
          {
            hr: 'Dostavit ćete dokumentaciju do petka.',
            en: 'You will submit the documentation by Friday.',
            note: 'Future — an order that admits no reply',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A manager writes to a colleague: "Izvještaj ćeš poslati do srijede." How does that read?',
        options: [
          'As a neutral statement about the future',
          'As a polite request',
          'As an order that treats compliance as already decided',
          'As a question',
        ],
        correct: 2,
        explanation:
          'The future used for instruction is stronger than the imperative, because it presents the action as settled rather than asked for. Between peers it lands as an escalation, which is exactly the effect a learner does not intend when using it as a plain future.',
      },
      {
        type: 'quiz',
        q: 'Which reports a claim WITHOUT the writer endorsing it?',
        options: [
          'Sigurno je odbio ponudu.',
          'Navodno je odbio ponudu.',
          'Vjerojatno je odbio ponudu.',
          'Valjda je odbio ponudu.',
        ],
        correct: 1,
        explanation:
          "Navodno marks the claim as reported by someone else and explicitly withholds the writer's agreement. Sigurno, vjerojatno and valjda all place the writer somewhere on a scale of confidence in the claim; navodno takes them off the scale entirely.",
      },
      {
        type: 'summary',
        title: 'Modality — What to Keep',
        points: [
          'Obligation comes in personal (moraš) and impersonal (treba, valja, potrebno je) forms',
          'The impersonal form states a rule without naming who must obey it',
          'The future used as an instruction is stronger than an imperative, not softer',
          'Certainty rides on particles: sigurno, vjerojatno, valjda, možda, navodno',
          'Navodno distances the speaker from the claim entirely',
        ],
      },
    ],
  },

  // ── 13. Sentence rhythm ───────────────────────────────────────────────────
  {
    id: 'ritam-recenice',
    title: 'The Rhythm of a Sentence',
    level: 'C2',
    subtitle: 'Length, weight and the placement that makes prose readable',
    icon: '🎼',
    duration: '~6 min',
    color: '#a21caf',
    bg: '#fdf4ff',
    slides: [
      {
        type: 'intro',
        title: 'Correct Prose That Is Still Hard to Read',
        body: 'A C2 learner writes sentences that are all correct and all the same length, and the result is flat. Croatian rhythm is built differently from English rhythm because word order is freer and the clitics have a fixed slot, so the tools available are different — and once you can hear them, the same content becomes readable or unreadable at will.',
        icon: '🎼',
      },
      {
        type: 'rule',
        title: 'Vary the Length Deliberately',
        body: 'Croatian prose favours a long sentence followed by a short one. The long sentence carries the argument, with subordination and apposition; the short one lands it. Three long sentences in a row exhaust a reader, and three short ones in a row read as a list. The rhythm is not decoration — it tells the reader which sentence matters.',
        highlight: 'long, long, SHORT — the short one is the point',
      },
      {
        type: 'rule',
        title: 'End Weight: Put the New Information Last',
        body: 'Croatian word order is free enough that you choose what ends the sentence, and the end is the emphatic position. Known information first, new information last. "Zakon je stupio na snagu prošloga tjedna" answers when; "Prošloga tjedna na snagu je stupio novi zakon" answers what. Same words, different question answered, and readers feel the difference without being able to name it.',
        highlight: 'known first · new last',
      },
      {
        type: 'table',
        title: 'The Same Facts, Reordered',
        headers: ['Order', 'What it foregrounds'],
        rows: [
          ['Ivan je jučer kupio auto.', 'Neutral — Ivan is the topic'],
          ['Jučer je Ivan kupio auto.', 'The time is the topic'],
          ['Auto je Ivan kupio jučer.', 'The car is known; when is the news'],
          ['Kupio je Ivan auto, i to jučer.', 'Emphatic, spoken; i to adds the punch'],
        ],
      },
      {
        type: 'rule',
        title: 'The Clitics Fix Your Second Position',
        body: 'Whatever you choose to front, the clitic cluster follows it. That makes the first constituent a genuine decision rather than a habit: it determines both the topic and where the sentence draws breath. This is why Croatian sentences can be reordered so freely and yet feel wrong when reordered carelessly — the clitics move with the frame and expose an awkward choice immediately.',
        highlight: 'the first constituent chooses the topic AND the breath',
      },
      {
        type: 'rule',
        title: 'Do Not Stack Subordination',
        body: 'Croatian tolerates deep subordination better than English, and that is a trap. A sentence with three nested koji-clauses is grammatical and unreadable. The remedy is condensation — turn one clause into a phrase — or a full stop. Style guides in Croatian make this point as firmly as English ones do, and the nominal style is where the problem usually starts.',
        highlight: 'two levels of subordination, not four',
      },
      {
        type: 'example',
        title: 'Flat and Shaped',
        items: [
          {
            hr: 'Odbor je razmotrio prijedlog. Odbor je donio odluku. Odluka stupa na snagu odmah.',
            en: 'The committee considered the proposal. The committee made a decision. The decision takes effect immediately.',
            note: 'Correct, and monotonous — three sentences of one shape',
          },
          {
            hr: 'Razmotrivši prijedlog, odbor je donio odluku koja stupa na snagu odmah.',
            en: 'Having considered the proposal, the committee made a decision that takes effect immediately.',
            note: 'One shaped sentence: verbal adverb, main clause, relative tail',
          },
          {
            hr: 'Odbor je prijedlog razmotrio i odbio ga. Jednoglasno.',
            en: 'The committee considered the proposal and rejected it. Unanimously.',
            note: 'Long then very short — the one-word sentence carries the weight',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'You want to stress WHEN the law took effect. Which order does that?',
        options: [
          'Novi zakon je stupio na snagu prošloga tjedna.',
          'Prošloga tjedna je stupio na snagu novi zakon.',
          'Stupio je na snagu novi zakon prošloga tjedna.',
          'Na snagu je novi zakon stupio prošloga tjedna.',
        ],
        correct: 0,
        explanation:
          'End weight puts the new information last, so leaving prošloga tjedna at the end makes the time the news. Fronting it, as in the second option, makes the time the known frame and the law the news — the opposite emphasis.',
      },
      {
        type: 'quiz',
        q: 'What is the standard remedy for a sentence with four nested subordinate clauses?',
        options: [
          'Add commas until it is clear',
          'Condense one clause into a phrase, or split the sentence',
          'Move the clitics to the end',
          'Rewrite it in the passive',
        ],
        correct: 1,
        explanation:
          'Condensation and the full stop are the two tools. Commas do not reduce depth, moving the clitics breaks second position, and the passive usually adds nominal weight rather than removing it.',
      },
      {
        type: 'summary',
        title: 'Rhythm — What to Keep',
        points: [
          'Vary sentence length on purpose; the short one after long ones carries the point',
          'End weight: known information first, new information last',
          'Whatever you front becomes the topic, and the clitics follow it',
          'Two levels of subordination, not four',
          'Condensation or a full stop — those are the two ways out of a tangle',
        ],
      },
    ],
  },

  // ── 14. Irony and subtext ─────────────────────────────────────────────────
  {
    id: 'ironija-podtekst',
    title: 'Irony and Subtext',
    level: 'C2',
    subtitle: 'Saying one thing and meaning another, and hearing it done to you',
    icon: '🎭',
    duration: '~6 min',
    color: '#4338ca',
    bg: '#eef2ff',
    slides: [
      {
        type: 'intro',
        title: 'The Last Thing a Foreign Speaker Hears',
        body: 'Comprehension of literal Croatian arrives long before comprehension of ironic Croatian, and the gap can last years. Irony is grammatically ordinary — that is the point — so nothing in the sentence signals it except intonation, context and a small set of markers native speakers deploy without thinking. This lesson names them.',
        icon: '🎭',
      },
      {
        type: 'table',
        title: 'The Markers',
        headers: ['Marker', 'Example', 'Signals'],
        rows: [
          ['baš', 'Baš si mi pomogao.', 'Emphatic — and here, sarcastic'],
          ['ma', 'Ma daj.', 'Dismissal, disbelief'],
          ['nego što', 'Je li dobro? — Nego što!', 'Emphatic agreement'],
          ['svaka čast', 'Svaka čast, stvarno.', 'Praise, or its exact opposite'],
          ['e pa', 'E pa, hvala lijepa.', 'Resigned, often sarcastic'],
          ['taman posla', 'Taman posla!', 'Absolutely not — indignant refusal'],
        ],
      },
      {
        type: 'rule',
        title: 'Baš Is the Workhorse',
        body: 'Baš intensifies, and intensified praise in a context where praise is not deserved becomes sarcasm: "Baš si pametan" is either "you really are clever" or its exact opposite, and only the situation decides. The construction is identical. If you cannot yet hear which is meant, the safe reading in a tense exchange is the sarcastic one.',
        highlight: 'Baš si mi pomogao. — thanks for nothing',
      },
      {
        type: 'rule',
        title: 'Understatement Is the Croatian Default',
        body: 'Croatian praises by not complaining. "Nije loše" about an excellent meal is genuine approval. "Može" as a response to a proposal is acceptance, not reluctance. "Ide nekako" about a business that is doing well is normal modesty. A learner who hears these as lukewarm will consistently misread how well things are going — and one who answers "odlično!" to everything sounds naive.',
        highlight: 'Nije loše = that was very good',
      },
      {
        type: 'rule',
        title: 'The Rhetorical Question',
        body: 'A question that is not a question carries most of the irony in spoken Croatian. "A što si ti očekivao?" is not asking. "Ma je li moguće?" is not asking either. The formal signal is that no answer is left room for — the speaker continues — and the intonation falls where a genuine question would rise.',
        highlight: 'A što si ti očekivao?',
      },
      {
        type: 'rule',
        title: 'Reading Irony in Writing',
        body: 'Without intonation, written Croatian marks irony with quotation marks around the ironic word, with the diminutive, and with an incongruously formal register. Calling a bad decision "sjajna odluka" in an otherwise sober article is a signal. So is calling a large problem a problemčić. In journalism the incongruous formality is the commonest device — administrative vocabulary applied to something trivial.',
        highlight: 'diminutive + formal register = written irony',
      },
      {
        type: 'example',
        title: 'Hearing It',
        items: [
          {
            hr: 'Kako je bilo? — Ma, super. Čekali smo tri sata.',
            en: 'How was it? — Oh, great. We waited three hours.',
            note: 'Ma + super + the fact that follows: unmistakably sarcastic',
          },
          {
            hr: 'Svaka čast, stvarno ste se potrudili.',
            en: 'Well done, you really made an effort.',
            note: 'Genuine or withering — only the situation tells you',
          },
          {
            hr: 'Nije loše, mogao bi i ti to napraviti.',
            en: 'Not bad — you could do that too.',
            note: 'Understated praise; "nije loše" here is real approval',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A Croatian friend tastes your cooking and says "Nije loše." What have they said?',
        options: [
          'It was mediocre',
          'It was genuinely good — this is understated praise',
          'They did not like it but are being polite',
          'They want more salt',
        ],
        correct: 1,
        explanation:
          'Croatian praises by declining to complain. "Nije loše" from someone who means it is real approval, and reading it as lukewarm is one of the most persistent misunderstandings for English speakers, who expect praise to be stated positively.',
      },
      {
        type: 'quiz',
        q: 'Which device most often marks irony in written Croatian journalism?',
        options: [
          'Exclamation marks',
          'Formal or administrative vocabulary applied to something trivial',
          'The second conditional',
          'Longer sentences',
        ],
        correct: 1,
        explanation:
          'Register incongruity is the standard written device — describing a petty squabble in the language of a legal decision. Quotation marks and diminutives do similar work; exclamation marks and sentence length carry no ironic charge on their own.',
      },
      {
        type: 'summary',
        title: 'Irony — What to Keep',
        points: [
          'baš, ma, svaka čast and e pa are the spoken markers — context decides the reading',
          '"Nije loše" is genuine praise; Croatian understates approval by default',
          'Rhetorical questions carry most spoken irony and leave no room for an answer',
          'In writing, irony rides on diminutives, quotation marks and register incongruity',
          'In a tense exchange, read baš + praise as sarcasm until proven otherwise',
        ],
      },
    ],
  },

  // ── 15. Wordplay ──────────────────────────────────────────────────────────
  {
    id: 'humor-jezicni',
    title: 'The Humour That Needs the Grammar',
    level: 'C2',
    subtitle: 'Puns, near-homonyms and jokes that cannot be translated',
    icon: '🃏',
    duration: '~6 min',
    color: '#ca8a04',
    bg: '#fefce8',
    slides: [
      {
        type: 'intro',
        title: 'The Last Frontier of Comprehension',
        body: 'You can follow a Croatian news broadcast long before you can follow a Croatian joke, because a joke often turns on a case ending, an aspect pair or two words that differ by one letter. This lesson is not about being funny in Croatian — that comes on its own or not at all — but about not being the only person at the table who missed it.',
        icon: '🃏',
      },
      {
        type: 'table',
        title: 'Pairs That Do the Work',
        headers: ['Pair', 'Meanings', 'The joke'],
        rows: [
          ['pas / pas', 'dog / belt (pojas, shortened)', 'Classic near-homonym setup'],
          ['sam / sam', 'I am / alone', 'Sam sam — "I am alone", two words one form'],
          ['mir / mir', 'peace / a men’s name in vocative jokes', 'Wordplay on names'],
          ['grad / grad', 'city / hail', 'Pao je grad — the city fell, or it hailed'],
          ['luk / luk', 'onion / arch, bow', 'Same form, three meanings'],
          ['kosa / kosa', 'hair / scythe', 'Homographs with different accents'],
        ],
      },
      {
        type: 'rule',
        title: 'Accent Distinguishes What Spelling Does Not',
        body: 'Several of the pairs above are spelled identically and differ in pitch accent — grad the city and grad the hail, kosa the hair and kosa the scythe, luk the onion and luk the arch. Speech separates them; writing does not, and a joke exploits exactly that gap. This is the practical payoff of the C1 prosody lesson.',
        highlight: 'grȃd (city) vs grȁd (hail) — accent alone',
      },
      {
        type: 'rule',
        title: 'Case Endings Are a Punchline',
        body: 'Because Croatian marks role by ending rather than order, a joke can hinge on which ending was used. "Vidio sam ga s teleskopom" is ambiguous in English about who had the telescope; Croatian can disambiguate — and a comedian will choose the reading you did not. Similarly, the vocative is a comic resource: calling someone by a mock-formal vocative is a joke in itself.',
        highlight: 'the ending, not the order, holds the trap',
      },
      {
        type: 'rule',
        title: 'The Diminutive Is a Comic Instrument',
        body: "Applying a diminutive to something that cannot be small is Croatian's most reliable comic move: problemčić for a disaster, računčić for an enormous bill, ratić for a war. The mismatch does the work. The augmentative does the reverse — kućerina for a modest house — and both are available to any speaker who has learned the C1 suffixes.",
        highlight: 'računčić — a "little bill" of four hundred euros',
      },
      {
        type: 'rule',
        title: 'Regional Speech as a Comic Register',
        body: 'Croatian comedy leans heavily on switching into kajkavian or čakavian, or into a marked Dalmatian or Zagorje accent, for a line or two. It is a register shift rather than mockery — an educated speaker from Split doing a broad Split accent for effect is doing what a Londoner does with a stage cockney. Recognising the switch is what lets you hear the joke rather than the dialect.',
        highlight: 'a dialect switch is a comic register, not a mistake',
      },
      {
        type: 'example',
        title: 'Jokes That Need the Grammar',
        items: [
          {
            hr: 'Sam sam sam sastavio taj stol.',
            en: 'I alone assembled that table by myself.',
            note: 'Three sams: I-am, alone, alone-emphatic — the classic tongue-twister',
          },
          {
            hr: 'Pao je grad. — Koji, Zagreb?',
            en: 'Hail fell. — Which one, Zagreb?',
            note: 'grad = hail and city; the accents differ, the spelling does not',
          },
          {
            hr: 'Stigao je računčić od četiristo eura.',
            en: 'A little bill for four hundred euros arrived.',
            note: 'Diminutive applied to something large — the standard comic mismatch',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Why can "Pao je grad" be a joke in speech but not in writing?',
        options: [
          'The word order changes',
          'grad means both city and hail, and only the pitch accent separates them',
          'The verb is ambiguous',
          'It is not a joke in either medium',
        ],
        correct: 1,
        explanation:
          'The two words are spelled identically and differ in accent, so speech distinguishes them and writing does not — which is precisely the gap the joke uses. Several Croatian puns work this way and are invisible on the page.',
      },
      {
        type: 'quiz',
        q: 'A colleague describes a serious production outage as "mali problemčić". What are they doing?',
        options: [
          'Understating the problem out of embarrassment',
          'Using a diminutive on something large — the standard Croatian comic mismatch, usually wry rather than dismissive',
          'Being technically precise',
          'Using a regional dialect form',
        ],
        correct: 1,
        explanation:
          'Diminutive plus something undeniably large is a set comic move. It is wry acknowledgement rather than denial, and hearing it as genuine understatement misreads both the speaker and the size of the problem.',
      },
      {
        type: 'summary',
        title: 'Wordplay — What to Keep',
        points: [
          'Many puns turn on pitch accent, invisible in writing: grad, kosa, luk',
          'Case endings can be the trap, because the ending fixes the role',
          'A diminutive applied to something large is the standard comic mismatch',
          'A switch into kajkavian or a marked accent is a comic register, not mockery',
          'Missing a joke is normal at C2; recognising the device is the achievable goal',
        ],
      },
    ],
  },

  // ── 17. Journalistic style ────────────────────────────────────────────────
  {
    id: 'publicisticki-stil',
    title: 'Journalistic Style',
    level: 'C2',
    subtitle: 'How a Croatian news text is built, sentence by sentence',
    icon: '📰',
    duration: '~6 min',
    color: '#1d4ed8',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'One of the Five Functional Styles',
        body: "Croatian linguistics names five functional styles — književnoumjetnički, publicistički, znanstveni, administrativni and razgovorni. You have met the administrative one. The journalistic style is the one you read most, and it has conventions as fixed as the administrative style's: a particular opening, a particular way of attributing, and a vocabulary that exists almost nowhere else.",
        icon: '📰',
      },
      {
        type: 'table',
        title: 'The Vocabulary of the Newsroom',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['doznaje se', 'it is learned', 'Agentless — the source is protected'],
          [
            'prema neslužbenim informacijama',
            'according to unofficial information',
            'Standard hedge',
          ],
          [
            'izvor blizak istrazi',
            'a source close to the investigation',
            'Calque, now fully naturalised',
          ],
          ['kako doznajemo', 'as we learn', 'First person plural — the paper as a voice'],
          ['navodno', 'allegedly', 'Distances the paper from the claim'],
          ['oglasio se priopćenjem', 'issued a statement', 'The set phrase for official response'],
        ],
      },
      {
        type: 'rule',
        title: 'The Lead Carries Everything',
        body: 'A Croatian news lead answers who, what, where and when in one sentence, and it front-loads the newest element. The rest of the article descends in importance, so a reader can stop at any paragraph and have the story. This is the same inverted pyramid English journalism uses, and it means the last paragraph of a Croatian article is usually the least informative one.',
        highlight: 'newest element first, importance descending',
      },
      {
        type: 'rule',
        title: 'Attribution Is Grammatical, Not Optional',
        body: "Croatian journalism marks who said what with a small set of constructions: kaže, tvrdi, navodi, ističe, upozorava — each carrying a different degree of the paper's endorsement. Kaže is neutral. Tvrdi implies the claim is contested. Navodi is formal and neutral. Ističe suggests the paper agrees it is important. Choosing among them is editorial work done through grammar.",
        highlight: 'kaže (neutral) · tvrdi (contested) · ističe (endorsed as important)',
      },
      {
        type: 'rule',
        title: 'The Nominal Style Creeps In',
        body: 'Journalism borrows the administrative style\'s nominalisations for compression — "zbog povećanja cijena" rather than "jer su cijene porasle" — because a headline has no room for a clause. It also borrows its agentlessness, and that is where the reader should be alert: "donesena je odluka" says a decision was made without saying by whom, and in a news text that omission is sometimes deliberate.',
        highlight: 'donesena je odluka — by whom?',
      },
      {
        type: 'rule',
        title: 'Headlines Drop Words',
        body: 'Croatian headlines omit auxiliaries and articles the way English ones do: "Vlada usvojila proračun" rather than "Vlada je usvojila proračun". The dropped je is the giveaway that you are reading a headline register, and the same sentence inside the article would be ungrammatical without it.',
        highlight: 'Vlada usvojila proračun — headline only',
      },
      {
        type: 'example',
        title: 'A Paragraph of News Croatian',
        items: [
          {
            hr: 'Vlada je jučer usvojila izmjene zakona, doznaje se iz izvora bliskih Ministarstvu.',
            en: 'The government adopted amendments to the law yesterday, it is learned from sources close to the Ministry.',
            note: 'Lead sentence + agentless attribution',
          },
          {
            hr: 'Oporba tvrdi da izmjene nisu usklađene s europskim propisima.',
            en: 'The opposition claims the amendments are not aligned with European regulations.',
            note: 'tvrdi marks the claim as contested',
          },
          {
            hr: 'Ministarstvo se za sada nije oglasilo priopćenjem.',
            en: 'The Ministry has not so far issued a statement.',
            note: 'The set phrase for "no comment yet"',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'An article says "Oporba tvrdi da…" rather than "Oporba kaže da…". What has the paper signalled?',
        options: [
          'Nothing — the two verbs are interchangeable',
          'That it regards the claim as contested or unproven',
          'That the opposition is lying',
          'That the statement was written rather than spoken',
        ],
        correct: 1,
        explanation:
          'Tvrditi marks a claim as asserted-but-not-established. It is not an accusation of lying, and it is not neutral either — which is exactly why the choice between kaže, tvrdi, navodi and ističe is editorial work performed through grammar.',
      },
      {
        type: 'quiz',
        q: 'Why is "Vlada usvojila proračun" acceptable as a headline but not inside the article?',
        options: [
          'Headlines use the aorist',
          'Headlines drop the auxiliary je; a full sentence requires it',
          'Vlada takes a different verb form in headlines',
          'It is acceptable in both',
        ],
        correct: 1,
        explanation:
          'Headline register omits the auxiliary, exactly as English headlines omit articles and auxiliaries. Restore the je and the sentence works anywhere; leave it out in running text and it is simply incomplete.',
      },
      {
        type: 'summary',
        title: 'Journalistic Style — What to Keep',
        points: [
          'The lead answers who, what, where and when, newest element first',
          'kaže, tvrdi, navodi and ističe carry different degrees of endorsement',
          'doznaje se and prema neslužbenim informacijama protect the source',
          'Agentless nominal constructions compress — and sometimes conceal',
          'Headlines drop the auxiliary je; running text does not',
        ],
      },
    ],
  },

  // ── 18. Scientific style ──────────────────────────────────────────────────
  {
    id: 'znanstveni-stil',
    title: 'Scientific Style',
    level: 'C2',
    subtitle: 'The conventions of a Croatian paper, from sažetak to literatura',
    icon: '🔬',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'Beyond Academic Writing',
        body: 'The C1 lesson taught you to structure an argument in Croatian academic prose. This one is about the genre itself: the sections a Croatian paper has, the impersonal conventions it uses, how terminology is coined, and the citation habits that differ from English-language practice. You need it to read a Croatian journal, and you need it to publish in one.',
        icon: '🔬',
      },
      {
        type: 'table',
        title: 'The Sections of a Paper',
        headers: ['Croatian', 'English', 'Note'],
        rows: [
          ['sažetak', 'abstract', 'Usually with a ključne riječi list'],
          ['uvod', 'introduction', ''],
          ['metodologija', 'methodology', ''],
          ['rezultati', 'results', ''],
          ['rasprava', 'discussion', 'Literally "debate"'],
          ['zaključak', 'conclusion', ''],
          ['literatura', 'references', 'Never "reference"'],
        ],
      },
      {
        type: 'rule',
        title: 'The Impersonal Is the Default Voice',
        body: 'Croatian scholarly writing avoids the first person singular even more firmly than English does. "U radu se analizira…" (this paper analyses), "Utvrđeno je da…" (it was established that), "Iz navedenoga proizlazi…" (from the above it follows). The se-passive and the neuter participle do the work an English writer might do with "we". The first person plural is possible in some fields and reads as slightly older.',
        highlight: 'U radu se analizira… — the standard opening',
      },
      {
        type: 'table',
        title: 'The Set Phrases',
        headers: ['Croatian', 'English'],
        rows: [
          ['Cilj je ovoga rada…', 'The aim of this paper is…'],
          ['U radu se polazi od pretpostavke da…', 'The paper proceeds from the assumption that…'],
          ['Rezultati pokazuju da…', 'The results show that…'],
          ['Iz navedenoga proizlazi da…', 'From the above it follows that…'],
          ['Potrebna su daljnja istraživanja.', 'Further research is required.'],
          ['Autor zahvaljuje…', 'The author thanks…'],
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Coins Rather Than Borrows',
        body: 'The Illyrian habit of building terms from native roots is still alive in scientific vocabulary: računalo rather than kompjuter, zrakoplov rather than avion, glazba rather than muzika, sučelje for interface, preglednik for browser. Some coinages won and some did not, and which is which is a matter of usage rather than principle. In a paper, use the term your field uses and stay consistent.',
        highlight: 'računalo, sučelje, preglednik — native coinages that won',
      },
      {
        type: 'rule',
        title: 'Hedging Is Obligatory',
        body: 'Croatian scholarly writing hedges as heavily as English: čini se da, moguće je da, rezultati upućuju na, nije isključeno da. An unhedged claim reads as amateur. The strongest form available is "rezultati pokazuju" (the results show), and even that is normally softened when the sample is small. Overclaiming is the commonest fault in a translated paper, because English hedges are often dropped in translation.',
        highlight: 'rezultati upućuju na — the results point towards',
      },
      {
        type: 'rule',
        title: 'Citation Conventions',
        body: 'Croatian journals mostly follow international styles now, but two habits persist. Author names in running text are declined: "prema Katičiću", "kako navodi Silić". And usp. (usporedi, compare) appears where English uses cf. Getting the declension of a cited author\'s name right is a small thing that marks a paper as written rather than translated.',
        highlight: 'prema Katičiću · usp. Silić 2005',
      },
      {
        type: 'example',
        title: 'Opening a Paper',
        items: [
          {
            hr: 'Cilj je ovoga rada utvrditi u kojoj mjeri navedeni čimbenici utječu na ishod.',
            en: 'The aim of this paper is to establish to what extent the stated factors influence the outcome.',
            note: 'Clitic je in second position after Cilj',
          },
          {
            hr: 'U radu se polazi od pretpostavke da je veza uzročna, a ne samo korelacijska.',
            en: 'The paper proceeds from the assumption that the relationship is causal and not merely correlational.',
            note: 'se-passive; a ne is the standard contrastive',
          },
          {
            hr: 'Rezultati upućuju na povezanost, no potrebna su daljnja istraživanja.',
            en: 'The results point to a connection, but further research is required.',
            note: 'Hedged claim followed by the obligatory caveat',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which is the conventional way for a Croatian paper to state its aim?',
        options: [
          'Ja želim u ovom radu pokazati…',
          'Cilj je ovoga rada utvrditi…',
          'Mi ćemo u ovom radu dokazati…',
          'Ovaj rad će pokazati…',
        ],
        correct: 1,
        explanation:
          'The impersonal "Cilj je ovoga rada…" is the standard opening. The first person singular is avoided, "dokazati" overclaims for most fields, and giving the paper itself as an agent of "će pokazati" reads as a translation from English.',
      },
      {
        type: 'quiz',
        q: 'How would you write "according to Katičić" in a Croatian paper?',
        options: ['prema Katičić', 'prema Katičiću', 'prema Katičića', 'po Katičić'],
        correct: 1,
        explanation:
          "Prema takes the dative, and a cited author's name declines like any other masculine noun: Katičiću. Leaving the name uninflected is the same error as leaving any foreign or native surname uninflected, and in a scholarly text it is conspicuous.",
      },
      {
        type: 'summary',
        title: 'Scientific Style — What to Keep',
        points: [
          'sažetak, uvod, metodologija, rezultati, rasprava, zaključak, literatura',
          'The impersonal se-construction is the default voice, not the first person',
          'Croatian coins terms from native roots: računalo, sučelje, preglednik',
          'Hedging is obligatory; an unhedged claim reads as amateur',
          'Cited author names decline: prema Katičiću, kako navodi Silić',
        ],
      },
    ],
  },

  // ── 19. Literary style ────────────────────────────────────────────────────
  {
    id: 'knjizevni-stil',
    title: 'How Literary Croatian Works',
    level: 'C2',
    subtitle: 'The devices a novel uses that a report never would',
    icon: '📖',
    duration: '~7 min',
    color: '#9f1239',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Reading With the Machinery Visible',
        body: 'B2 told you what to read. This lesson is about how it is built — the tense choices, the free indirect style, the dialect passages and the archaisms that a Croatian novel uses and a Croatian report never would. Knowing them turns difficult prose from an obstacle into a set of decisions you can watch the author make.',
        icon: '📖',
      },
      {
        type: 'rule',
        title: 'The Aorist and Imperfect Live Here',
        body: 'Both tenses are effectively extinct in speech and entirely alive in literature. A writer reaches for the aorist for a sudden completed act — reče, dođe, pade — and for the imperfect for a sustained past state — bijaše, gledaše. The effect is elevation and distance; the same events in the perfect tense would read as reportage. When you meet them, the author has chosen a register, not merely a tense.',
        highlight: 'reče, pade (aorist) · bijaše, gledaše (imperfect)',
      },
      {
        type: 'rule',
        title: 'Free Indirect Style',
        body: "Croatian, like English, lets a narrator slide into a character's thoughts without quotation marks or a reporting verb: \"Sjeo je i pogledao kroz prozor. Kako je sve to postalo besmisleno.\" The second sentence is the character thinking, in the narrator's grammar. Missing the shift means attributing a character's judgement to the author, which changes the meaning of whole chapters.",
        highlight: "the narrator's grammar, the character's thought",
      },
      {
        type: 'table',
        title: 'Devices and What They Signal',
        headers: ['Device', 'Example', 'Effect'],
        rows: [
          ['Aorist', 'Reče i ode.', 'Sudden, elevated, folkloric'],
          ['Imperfect', 'Sjedaše i šutjaše.', 'Sustained past, lyrical'],
          ['Historic present', 'Ulazi on i vidi…', 'Immediacy'],
          ['Inversion', 'Dođe zima.', 'Foregrounds the event'],
          ['Dialect passage', 'kaj, ča forms in dialogue', 'Places a character socially'],
          ['Archaism', 'vazda, tja, spomen', 'Distance in time'],
        ],
      },
      {
        type: 'rule',
        title: 'Dialect in Dialogue Places a Character',
        body: "A novel set in Zagreb will give a character kajkavian speech; one set on an island will give čakavian. This is characterisation, not local colour: the reader is told the character's origin, class and generation in a single line. Krleža does it constantly. A learner who skips the dialect passages loses exactly the information the author put there.",
        highlight: 'dialect in dialogue = biography in one line',
      },
      {
        type: 'rule',
        title: 'The Sentence Is Longer, Not Sloppier',
        body: "Croatian literary sentences run long — Krleža's famously so — with subordination that a style guide would refuse in a report. That is deliberate: length in literature builds a pressure that a full stop releases. Read for the main clause first, then reread; the syntax is a structure, not a tangle, and the parsing habits from the C1 clause lesson are exactly what you need.",
        highlight: 'find the main clause, then reread',
      },
      {
        type: 'example',
        title: 'Registers on the Page',
        items: [
          {
            hr: 'Dođe zima, i s njom tišina kakve u tom selu nije bilo godinama.',
            en: 'Winter came, and with it a silence such as that village had not known for years.',
            note: 'Aorist dođe + inversion; elevated and slightly archaic',
          },
          {
            hr: 'Sjeo je za stol. Zašto je uopće došao?',
            en: 'He sat down at the table. Why had he come at all?',
            note: 'Free indirect style — the second sentence is his thought',
          },
          {
            hr: '— Kaj ti je? — pitala ga je susjeda.',
            en: '"What is the matter with you?" the neighbour asked him.',
            note: 'Kajkavian kaj in dialogue places her immediately',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A novel has: "Ušao je u sobu. Nikad se više neće vratiti ovamo." Who thinks the second sentence?',
        options: [
          'The narrator, stating a fact about the future',
          'Most likely the character — this is free indirect style',
          'Nobody; it is a printing error',
          'A second character not yet introduced',
        ],
        correct: 1,
        explanation:
          "A judgement or resolution appearing in the narrator's grammar immediately after a character's action is the signature of free indirect style. Reading it as the narrator's own assertion attributes the character's certainty to the author.",
      },
      {
        type: 'quiz',
        q: 'Why does a novelist give one character kajkavian dialogue?',
        options: [
          'To show the character is uneducated',
          'To place the character by origin, class and generation in a single line',
          'Because the novel is written in kajkavian',
          'To make the text harder',
        ],
        correct: 1,
        explanation:
          'Dialect in dialogue is characterisation — it carries biography compactly. It is not a judgement about education: kajkavian is the everyday speech of a large and entirely educated part of the country, including Zagreb.',
      },
      {
        type: 'summary',
        title: 'Literary Style — What to Keep',
        points: [
          'The aorist and imperfect are alive in literature and dead in speech',
          "Free indirect style puts a character's thought in the narrator's grammar",
          'Dialect in dialogue places a character socially and geographically',
          'Long literary sentences are structures — find the main clause, then reread',
          'Archaisms and inversion signal distance in time, not carelessness',
        ],
      },
    ],
  },

  // ── 20. The colloquial register ───────────────────────────────────────────
  {
    id: 'razgovorni-stil',
    title: 'The Colloquial Register, Used Deliberately',
    level: 'C2',
    subtitle: 'What real speech does, and when a C2 speaker should join in',
    icon: '💬',
    duration: '~6 min',
    color: '#c026d3',
    bg: '#fdf4ff',
    slides: [
      {
        type: 'intro',
        title: 'The Register Learners Are Warned Away From',
        body: 'Everything up to now has pushed you towards the standard. But the razgovorni stil is one of the five functional styles, not a failure to reach the others, and a C2 speaker who can only produce standard Croatian sounds like a document. The skill is not adopting colloquial speech wholesale — it is knowing exactly what it does and choosing when to use it.',
        icon: '💬',
      },
      {
        type: 'table',
        title: 'What Real Speech Does',
        headers: ['Spoken', 'Standard', 'Note'],
        rows: [
          ['Ideš van?', 'Izlaziš li?', 'Rising intonation replaces li'],
          ['Nema veze.', 'Nije važno.', 'The universal "never mind"'],
          ['Ma pusti.', 'Nije bitno.', 'Dismissal, friendly'],
          ['Ajde.', 'Hajde / Dobro.', 'Agreement, encouragement, or goodbye'],
          ['Može.', 'U redu, pristajem.', 'Acceptance — enthusiastic despite the form'],
          ['Bog.', 'Doviđenja.', 'The everyday greeting and farewell; bok is the Zagreb variant'],
        ],
      },
      {
        type: 'rule',
        title: 'Intonation Replaces Grammar',
        body: 'The clearest structural difference is the question. Standard Croatian asks with li or with je li; speech asks with intonation alone: "Ideš?" "Znaš?" "Dolaziš sutra?" Using li in relaxed conversation is not wrong but is noticeably careful, and it is one of the reliable signs that someone learned Croatian in a classroom.',
        highlight: 'Ideš? — the question is entirely in the intonation',
      },
      {
        type: 'rule',
        title: 'Shortening Is Systematic',
        body: 'Speech drops sounds in predictable places: hoću → oću, hajde → ajde, gdje → di in some regions, nemoj → nemo. These are not errors and they are not random — each has a settled spoken form. What matters for a learner is recognising them instantly in listening, and NOT writing them outside reported dialogue.',
        highlight: 'recognise in listening, avoid in writing',
      },
      {
        type: 'rule',
        title: 'The Diminutive Does Social Work',
        body: "Spoken Croatian uses diminutives constantly and rarely to indicate size: kavica is not a small coffee but a pleasant one, pivica is a sociable beer, minutica is not sixty seconds. The suffix signals warmth and informality. Declining to use them at all is one of the things that makes a fluent foreigner's Croatian feel slightly cold.",
        highlight: 'kavica = a nice coffee, not a small one',
      },
      {
        type: 'rule',
        title: 'Know Where the Boundary Is',
        body: 'The colloquial register is right in conversation, in dialogue in fiction, in a message to a friend, and in a deliberate rhetorical drop inside a speech. It is wrong in a report, an application, an email to someone you have not met and an academic text. The C2 skill is switching cleanly and never drifting — a colloquial contraction in a formal paragraph reads as carelessness, not as warmth.',
        highlight: 'switch deliberately; never drift',
      },
      {
        type: 'example',
        title: 'The Same Exchange, Two Registers',
        items: [
          {
            hr: 'Ideš na kavu? — Može, ajde.',
            en: 'Coming for a coffee? — Sure, come on.',
            note: 'Colloquial: intonation question, može, ajde',
          },
          {
            hr: 'Biste li mi se pridružili na kavi? — Vrlo rado, hvala.',
            en: 'Would you join me for a coffee? — Gladly, thank you.',
            note: 'Formal: conditional question with li, V-form',
          },
          {
            hr: 'Nema veze, riješit ćemo to sutra.',
            en: 'Never mind, we will sort it out tomorrow.',
            note: 'Colloquial opener with a perfectly standard clause after it',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A Croatian colleague invites you for a "kavica". What does the diminutive tell you?',
        options: [
          'The coffee will be small',
          'It is an informal, friendly invitation — the diminutive signals warmth, not size',
          'They are being sarcastic',
          'It is a regional word for espresso',
        ],
        correct: 1,
        explanation:
          'Spoken Croatian uses diminutives for warmth far more than for size. Kavica is the social ritual rather than the volume, and reading it literally misses the invitation that is actually being made.',
      },
      {
        type: 'quiz',
        q: 'Where does the colloquial register belong?',
        options: [
          'Nowhere — a C2 speaker should always use the standard',
          'In conversation, messages to friends, fiction dialogue, and deliberate rhetorical moments',
          'Only in writing',
          'Everywhere, since it is what native speakers use',
        ],
        correct: 1,
        explanation:
          'It is one of the five functional styles with its own domain, not a failure to reach the standard. The C2 skill is switching between registers cleanly — using it where it belongs and never letting it drift into a formal paragraph.',
      },
      {
        type: 'summary',
        title: 'The Colloquial Register — What to Keep',
        points: [
          'Speech asks questions with intonation alone; li in casual talk sounds studied',
          'Shortenings (oću, ajde, nemo) are systematic — recognise them, do not write them',
          'Diminutives signal warmth rather than size: kavica, pivica',
          'Može, nema veze and ma pusti are the workhorses of relaxed agreement',
          'Switch registers deliberately; drifting between them reads as carelessness',
        ],
      },
    ],
  },

  // ── 21. Reading older Croatian ────────────────────────────────────────────
  {
    id: 'stari-tekstovi',
    title: 'Reading Older Croatian',
    level: 'C2',
    subtitle: 'Texts written before the modern standard, and how to get through them',
    icon: '📜',
    duration: '~7 min',
    color: '#78350f',
    bg: '#fffbeb',
    slides: [
      {
        type: 'intro',
        title: 'The Library Before 1900',
        body: 'B2 gave you the history of the standard. This lesson gives you access to what was written before it settled: Marulić, the Dubrovnik poets, Kačić, the nineteenth-century press. The obstacles are few and systematic — a handful of spelling conventions, some lost forms, and a vocabulary that has shifted — and once you know them, three centuries of writing open up.',
        icon: '📜',
      },
      {
        type: 'table',
        title: 'What Looks Wrong and Is Not',
        headers: ['You see', 'It is', 'Note'],
        rows: [
          ['cs, ch, sz', 'č, ć, š', 'Pre-Gaj spelling; digraphs for the diacritics'],
          ['ie, ye', 'ije, je', 'Older yat spellings'],
          ['bijah, bijaše', 'imperfect of biti', 'Dead in speech, everywhere in these texts'],
          ['reče, dođe', 'aorist', 'The default narrative tense'],
          ['tj, dj', 'ć, đ', 'Especially in nineteenth-century printing'],
          ['jest, jesu', 'full forms of biti', 'Where modern Croatian uses je, su'],
        ],
      },
      {
        type: 'rule',
        title: 'Before Gaj, Every Writer Spelled Differently',
        body: "Croatian had no single orthography until Ljudevit Gaj's reform in the 1830s. Before that, writers used Italian, Hungarian or German conventions to render the sounds Latin has no letters for: cs or ch for č, sz for s, ss for š. The text is Croatian; the spelling is borrowed. Read it aloud and it usually resolves.",
        highlight: 'read it aloud — the spelling is foreign, the language is not',
      },
      {
        type: 'rule',
        title: 'The Tenses You Never Use Are the Ones They Do',
        body: 'The aorist and imperfect are the ordinary narrative tenses of these texts, and the pluperfect appears freely. If you skipped those lessons because the forms felt academic, this is where they pay: without them a page of Kačić is a wall. Reče, dođe, bijaše, gledaše — recognising them is most of the battle.',
        highlight: 'aorist + imperfect = the narrative spine of older prose',
      },
      {
        type: 'table',
        title: 'Words That Have Shifted',
        headers: ['Then', 'Now', 'Note'],
        rows: [
          ['vazda', 'uvijek', 'always'],
          ['knjiga', 'letter, as well as book', 'The older sense survives in phrases'],
          ['jur', 'već', 'already'],
          ['tolikoj', 'toliko', 'Older adverbial form'],
          ['glagoljati', 'govoriti', 'Root of glagoljica'],
          ['pisac', 'writer, but earlier also scribe', 'Sense narrowed'],
        ],
      },
      {
        type: 'rule',
        title: 'The Dialects Were Literary Languages',
        body: 'Before štokavian was chosen as the standard base, čakavian and kajkavian both had full literary traditions. Marulić wrote in čakavian; the Zagreb school wrote in kajkavian into the nineteenth century. A text that looks like a dialect curiosity may be a mainstream literary work of its period, and reading it as substandard misreads the entire history.',
        highlight: "Marulić's čakavian was a literary standard, not a dialect",
      },
      {
        type: 'rule',
        title: 'A Practical Order of Attack',
        body: 'Read for the verbs first — they carry the tense system and most of the difficulty. Then resolve the spelling by sound. Then look up only the words that block the sentence, not every unfamiliar one. Most nineteenth-century Croatian is readable at C2 on a second pass; sixteenth-century Croatian usually needs an edition with notes, and using one is not a failure.',
        highlight: 'verbs → sound out the spelling → look up only what blocks',
      },
      {
        type: 'example',
        title: 'Older Shapes, Modern Sense',
        items: [
          {
            hr: 'I reče mu: vazda ću te pamtiti.',
            en: 'And he said to him: I shall always remember you.',
            note: 'Aorist reče + vazda for uvijek',
          },
          {
            hr: 'Bijaše tada mlad i pun nade.',
            en: 'He was then young and full of hope.',
            note: 'Imperfect bijaše — a sustained past state',
          },
          {
            hr: 'Jur nijedna na svit lipa…',
            en: 'No longer is any woman on earth beautiful…',
            note: 'Šiško Menčetić; jur = već, lipa = lijepa in the ikavian of the Dubrovnik circle',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A 1780 text spells a word "csetiri". What is it?',
        options: ['cetiri', 'četiri', 'ćetiri', 'A misprint'],
        correct: 1,
        explanation:
          'Pre-Gaj orthography used digraphs borrowed from Italian and Hungarian for the sounds Latin lacks: cs for č. Reading the text aloud is usually enough to resolve these, because the language underneath is ordinary Croatian.',
      },
      {
        type: 'quiz',
        q: "Why is it a mistake to read Marulić's čakavian as a dialect curiosity?",
        options: [
          'It is actually štokavian',
          'Čakavian was a full literary language of its period, before štokavian was chosen as the standard base',
          'Marulić wrote in Latin',
          'Čakavian is not Croatian',
        ],
        correct: 1,
        explanation:
          'Čakavian and kajkavian both carried complete literary traditions before the nineteenth-century standardisation. Treating them as substandard reads the choice of štokavian backwards onto three centuries that had not yet made it.',
      },
      {
        type: 'summary',
        title: 'Older Croatian — What to Keep',
        points: [
          'Pre-Gaj spelling uses digraphs (cs, ch, sz) — read it aloud and it resolves',
          'The aorist, imperfect and pluperfect are the ordinary narrative tenses there',
          'vazda, jur and a small set of shifted words cover most of the vocabulary gap',
          'Čakavian and kajkavian were literary standards, not dialect curiosities',
          'Verbs first, then spelling, then look up only what blocks the sentence',
        ],
      },
    ],
  },

  // ── 22. Synthesis across sources ──────────────────────────────────────────
  {
    id: 'sinteza-izvora',
    title: 'Synthesising Several Sources',
    level: 'C2',
    subtitle: 'Turning three texts that disagree into one coherent account',
    icon: '🧵',
    duration: '~7 min',
    color: '#0d9488',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'The Descriptor, Taught Directly',
        body: '"Can summarise information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation." That sentence is the CEFR definition of C2, and it names a skill nothing in this app had taught. Summarising ONE text was C1. Synthesising several — especially several that disagree — needs its own vocabulary and its own structure.',
        icon: '🧵',
      },
      {
        type: 'rule',
        title: 'Synthesis Is Not a Sequence of Summaries',
        body: 'The failure mode is obvious once named: three paragraphs, one per source, joined by "a drugi autor kaže". That is a list, not a synthesis. A synthesis is organised by IDEA, not by source — each paragraph takes one point and reports what every source says about it. The sources appear as evidence inside your structure rather than as the structure itself.',
        highlight: 'organise by idea, not by source',
      },
      {
        type: 'table',
        title: 'The Vocabulary of Agreement and Divergence',
        headers: ['Croatian', 'English', 'Use'],
        rows: [
          ['Svi se izvori slažu da…', 'All the sources agree that…', 'Establishing common ground'],
          ['Za razliku od X, Y tvrdi…', 'Unlike X, Y claims…', 'Marking divergence'],
          ['Dok X naglašava…, Y upozorava…', 'While X emphasises…, Y warns…', 'Balanced contrast'],
          ['Oba autora polaze od…', 'Both authors proceed from…', 'Shared premise'],
          ['Nijedan izvor ne spominje…', 'No source mentions…', 'Naming a gap'],
          [
            'Razlika je prije u naglasku nego u sadržaju.',
            'The difference is one of emphasis rather than substance.',
            'Deflating a false dispute',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Say Where They Agree First',
        body: 'Begin with the common ground, then the divergence. A reader who does not know what the sources share cannot judge how far apart they are, and a synthesis that opens on a disagreement makes the field look more fractured than it is. "Svi se izvori slažu da je pojava stvarna; razilaze se oko uzroka" orients the reader in one sentence.',
        highlight: 'common ground first, then the split',
      },
      {
        type: 'rule',
        title: 'Attribute Precisely, Without Repetition',
        body: 'Every claim traceable to one source must be attributed, and the attribution verbs from the journalism lesson do the work: navodi, tvrdi, ističe, upozorava, zaključuje. Vary them — five "kaže" in a paragraph reads as a school exercise — but vary them for meaning, not for variety. A writer who reaches for "upozorava" when the source merely observed has misreported it.',
        highlight: 'vary the verb for meaning, never for variety alone',
      },
      {
        type: 'rule',
        title: 'A Gap Is a Finding',
        body: 'What no source addresses is often the most useful thing a synthesis can report. "Nijedan izvor ne razmatra dugoročne troškove" is a sentence with real content. Learners suppress it because it feels like admitting incompleteness; in fact it is the part of the work only the person who read everything can supply.',
        highlight: 'Nijedan izvor ne razmatra… — that is a result',
      },
      {
        type: 'example',
        title: 'A Synthesis Paragraph',
        items: [
          {
            hr: 'Svi se izvori slažu da je pad zabilježen; razilaze se oko toga je li privremen.',
            en: 'All the sources agree that a decline was recorded; they diverge on whether it is temporary.',
            note: 'Common ground and the split in one sentence',
          },
          {
            hr: 'Dok prvi izvještaj naglašava sezonske čimbenike, drugi upozorava na strukturne.',
            en: 'While the first report emphasises seasonal factors, the second warns of structural ones.',
            note: 'Dok…, … is the balanced-contrast frame',
          },
          {
            hr: 'Nijedan izvor ne razmatra učinak na manje sredine, što ostaje otvoreno pitanje.',
            en: 'No source considers the effect on smaller communities, which remains an open question.',
            note: 'The gap reported as a finding',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'What is the clearest sign that a text is a list of summaries rather than a synthesis?',
        options: [
          'It is too short',
          'It has one paragraph per source rather than one per idea',
          'It uses too many attribution verbs',
          'It quotes directly',
        ],
        correct: 1,
        explanation:
          'Organisation by source is the giveaway. A synthesis takes one idea per paragraph and reports what each source contributes to it, so the sources appear as evidence inside your structure rather than supplying the structure themselves.',
      },
      {
        type: 'quiz',
        q: 'A source simply observes a trend. Which attribution verb misreports it?',
        options: ['navodi', 'ističe', 'upozorava', 'primjećuje'],
        correct: 2,
        explanation:
          'Upozoravati means to warn, which adds an alarm the source did not sound. Varying attribution verbs is good style only when each one still fits — varying them purely to avoid repetition changes what the sources said.',
      },
      {
        type: 'summary',
        title: 'Synthesis — What to Keep',
        points: [
          'Organise by idea, never one paragraph per source',
          'State the common ground before the divergence',
          'Svi se izvori slažu… / Za razliku od X… / Dok X…, Y… are the frames',
          'Attribution verbs carry meaning — vary them only where they still fit',
          'What no source says is a finding worth reporting',
        ],
      },
    ],
  },

  // ── 23. Reconstructing an argument ────────────────────────────────────────
  {
    id: 'rekonstrukcija-argumenta',
    title: "Reconstructing Someone Else's Argument",
    level: 'C2',
    subtitle: 'Stating a position you do not hold, fairly enough that its holder agrees',
    icon: '🏗️',
    duration: '~6 min',
    color: '#7c2d12',
    bg: '#fff7ed',
    slides: [
      {
        type: 'intro',
        title: 'The Other Half of the Descriptor',
        body: 'The CEFR wording is "reconstructing arguments and accounts". Reconstruction is not summary: it means restating someone\'s reasoning — premises, inference, conclusion — in your own words, accurately enough that they would accept your version. It is the foundation of every serious disagreement, and it has a set Croatian vocabulary.',
        icon: '🏗️',
      },
      {
        type: 'table',
        title: 'The Machinery',
        headers: ['Croatian', 'English'],
        rows: [
          ['Autor polazi od pretpostavke da…', 'The author proceeds from the assumption that…'],
          ['Njegov je argument u osnovi sljedeći…', 'His argument is essentially the following…'],
          ['Iz toga zaključuje da…', 'From this he concludes that…'],
          ['Ključni je korak u tom rasuđivanju…', 'The key step in that reasoning is…'],
          [
            'Ako sam dobro razumio, tvrdnja glasi…',
            'If I have understood correctly, the claim is…',
          ],
          [
            'Najjača verzija toga argumenta bila bi…',
            'The strongest version of that argument would be…',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Separate the Premise From the Conclusion',
        body: 'A reconstruction names what is assumed, what follows, and where the move from one to the other happens. "Polazi od pretpostavke da je tržište učinkovito; iz toga zaključuje da je regulacija suvišna." Once the steps are laid out, a reader can see exactly which one you will contest — and so can the person whose argument it is.',
        highlight: 'premise → inference → conclusion, each named',
      },
      {
        type: 'rule',
        title: 'Reconstruct the Strongest Version',
        body: 'Croatian argumentative writing shares the norm: you state your opponent\'s case at its best, not at its most convenient. "Najjača verzija toga argumenta bila bi…" is a sentence that buys you enormous credibility, because a reader who sees you strengthen a position before rejecting it will trust your rejection. Attacking a weak version is visible and cheap.',
        highlight: 'Najjača verzija toga argumenta bila bi…',
      },
      {
        type: 'rule',
        title: 'Mark the Boundary of Your Own Voice',
        body: 'The risk in reconstruction is that a reader loses track of who is speaking. Croatian marks the boundary explicitly: "Do ovdje autor. Ono što slijedi moj je prigovor." Or simply "Toliko o njegovu stajalištu." Without such a marker, a long faithful reconstruction reads as your own position, which is the opposite of the intended effect.',
        highlight: 'Toliko o njegovu stajalištu. — the boundary marker',
      },
      {
        type: 'rule',
        title: 'Check Before You Object',
        body: 'The courteous and effective move is to confirm the reconstruction before contesting it: "Ako sam dobro razumio, tvrdnja glasi… Je li tako?" In writing it becomes a concessive: "Pod pretpostavkom da sam ga dobro razumio…". Both protect you from the most damaging outcome in an argument, which is a devastating refutation of something nobody said.',
        highlight: 'Ako sam dobro razumio, tvrdnja glasi…',
      },
      {
        type: 'example',
        title: 'A Reconstruction and Its Turn',
        items: [
          {
            hr: 'Autor polazi od pretpostavke da su podaci potpuni.',
            en: 'The author proceeds from the assumption that the data are complete.',
            note: 'The premise, named as a premise',
          },
          {
            hr: 'Iz toga zaključuje da je uzorak reprezentativan i da se nalaz može poopćiti.',
            en: 'From this he concludes that the sample is representative and the finding can be generalised.',
            note: 'The inference and the conclusion, in order',
          },
          {
            hr: 'Toliko o njegovu stajalištu. Prigovor je upravo u prvom koraku.',
            en: 'So much for his position. The objection lies precisely in the first step.',
            note: 'Boundary marker, then the objection located exactly',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Why does a careful writer state the STRONGEST version of an argument they intend to reject?',
        options: [
          'Politeness, at the cost of persuasiveness',
          'Because a reader who sees the position strengthened first will trust the rejection',
          'To make the text longer',
          'It is a requirement of Croatian grammar',
        ],
        correct: 1,
        explanation:
          'Strengthening before rejecting is a credibility move, not merely a courtesy. Refuting a weak version is visible to any informed reader and costs more than it gains — which is why the phrase "najjača verzija toga argumenta" exists at all.',
      },
      {
        type: 'quiz',
        q: 'What does "Toliko o njegovu stajalištu" do in a piece of argumentative writing?',
        options: [
          'Dismisses the position as unimportant',
          "Marks the boundary between the reconstruction and the writer's own voice",
          'Introduces a quotation',
          'Concludes the whole text',
        ],
        correct: 1,
        explanation:
          "It signals that the faithful restatement has ended and what follows is the writer speaking. Without such a marker a long accurate reconstruction is easily read as the writer's own position — exactly backwards.",
      },
      {
        type: 'summary',
        title: 'Reconstruction — What to Keep',
        points: [
          'Name the premise, the inference and the conclusion separately',
          'Reconstruct the strongest version — it is a credibility move, not a courtesy',
          'Mark where the reconstruction ends and your voice begins',
          'Confirm your understanding before objecting: Ako sam dobro razumio…',
          'Locate your objection at a specific step, not at the conclusion in general',
        ],
      },
    ],
  },

  // ── 24. Finer shades of meaning ───────────────────────────────────────────
  {
    id: 'precizno-nijansiranje',
    title: 'Finer Shades of Meaning',
    level: 'C2',
    subtitle: 'Choosing between near-synonyms that are not actually synonyms',
    icon: '🔎',
    duration: '~7 min',
    color: '#1e40af',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Phrase the Descriptor Uses',
        body: '"Differentiating finer shades of meaning even in the most complex situations." At C2 vocabulary stops being about knowing more words and becomes about choosing between words you already know — where a dictionary gives you three Croatian options for one English word and does not say which one a native speaker would use here.',
        icon: '🔎',
      },
      {
        type: 'table',
        title: 'Near-Synonyms That Are Not',
        headers: ['Words', 'The difference'],
        rows: [
          [
            'reći / kazati / govoriti',
            'reći = say once; kazati = slightly formal or regional; govoriti = speak, ongoing',
          ],
          ['vidjeti / gledati', 'vidjeti = perceive; gledati = watch, direct attention'],
          [
            'znati / poznavati',
            'znati = know a fact; poznavati = be acquainted with a person or field',
          ],
          ['moći / umjeti / znati', 'moći = be able; umjeti = have the skill; znati = know how'],
          [
            'učiti / naučiti / studirati',
            'učiti = study; naučiti = learn (perfective); studirati = be at university',
          ],
          [
            'problem / poteškoća / smetnja',
            'problem = general; poteškoća = difficulty; smetnja = interference, obstruction',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Znati and Poznavati Are Not Interchangeable',
        body: 'Znam da dolazi — I know that he is coming, a fact. Poznajem ga — I know him, acquaintance. Poznaje gradivo — he knows the material, in the sense of being at home in it. A learner who uses znati for people produces "Znam Ivana", which is understood and immediately marks them as foreign. English collapses the distinction; most of Europe does not.',
        highlight: 'Znam da… (fact) · Poznajem ga (person)',
      },
      {
        type: 'rule',
        title: 'Moći, Umjeti, Znati',
        body: 'Three ways into "can". Mogu doći — circumstances permit. Umijem plivati — I have the skill. Znam plivati — I know how, and this is what people actually say. Umjeti is slightly bookish now; the everyday split is between moći for possibility and znati for acquired ability. "Mogu plivati" means the water is available, not that you learned.',
        highlight: 'Znam plivati (learned) · Mogu plivati (permitted)',
      },
      {
        type: 'rule',
        title: 'Register Is Part of the Meaning',
        body: 'Some near-synonyms differ only in register, and choosing wrong is as visible as choosing the wrong sense. Kuća and dom are both home, but dom is warmer and more abstract. Auto and automobil differ as car and motor vehicle do. Doktor and liječnik: liječnik is the professional standard term, doktor the everyday one and also an academic title. Neither is wrong; one of them fits.',
        highlight: 'liječnik (standard) · doktor (everyday, and a title)',
      },
      {
        type: 'rule',
        title: 'Test by Collocation, Not by Definition',
        body: 'The practical method: do not ask what a word means, ask what it goes with. Donijeti odluku but not napraviti odluku. Postaviti pitanje but not dati pitanje. Voditi računa but not držati računa. A dictionary gives you the definition; the collocation tells you whether a native speaker would use it here, and it is the faster test by far.',
        highlight: 'donijeti odluku · postaviti pitanje · voditi računa',
      },
      {
        type: 'example',
        title: 'The Right Word, Not a Right Word',
        items: [
          {
            hr: 'Poznajem ga godinama, ali ne znam gdje sada radi.',
            en: 'I have known him for years, but I do not know where he works now.',
            note: 'Both verbs in one sentence, each in its own sense',
          },
          {
            hr: 'Zna plivati, ali danas ne može jer je more previše hladno.',
            en: 'He can swim, but today he cannot because the sea is too cold.',
            note: "znati = the acquired skill; moći = today's circumstances",
          },
          {
            hr: 'Odbor je donio odluku i o njoj postavio nekoliko pitanja.',
            en: 'The committee made a decision and raised several questions about it.',
            note: 'donijeti odluku and postaviti pitanje are the fixed pairings',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'How do you say "I know Ana" in Croatian?',
        options: ['Znam Anu.', 'Poznajem Anu.', 'Znam za Anu.', 'Umijem Anu.'],
        correct: 1,
        explanation:
          'Poznavati is for people and fields you are acquainted with; znati is for facts. "Znam Anu" is understood and instantly marks a speaker as foreign, and "znam za Anu" says something different again — I know of her.',
      },
      {
        type: 'quiz',
        q: 'Which is the natural Croatian collocation for "make a decision"?',
        options: ['napraviti odluku', 'donijeti odluku', 'uraditi odluku', 'dati odluku'],
        correct: 1,
        explanation:
          'Donijeti odluku is fixed. The others are all built from verbs that mean "make" or "give" in some sense and are all wrong here — which is why collocation, not definition, is the practical test for choosing between near-synonyms.',
      },
      {
        type: 'summary',
        title: 'Finer Shades — What to Keep',
        points: [
          'znati for facts, poznavati for people and fields',
          "znati plivati is the learned skill; moći plivati is today's circumstances",
          'Register is part of meaning: liječnik and doktor are not interchangeable',
          'Test by collocation rather than by definition — it is faster and more reliable',
          'donijeti odluku, postaviti pitanje, voditi računa are fixed pairings',
        ],
      },
    ],
  },

  // ── 25. Spontaneous extended speech ───────────────────────────────────────
  {
    id: 'spontani-govor',
    title: 'Speaking at Length Without Preparation',
    level: 'C2',
    subtitle: 'Fluency when you have not rehearsed and cannot stop',
    icon: '🎤',
    duration: '~6 min',
    color: '#b91c1c',
    bg: '#fef2f2',
    slides: [
      {
        type: 'intro',
        title: 'The Skill Written Practice Does Not Build',
        body: '"Expresses him/herself spontaneously, very fluently and precisely." Spontaneously is the word that matters. A learner who writes excellent Croatian can still stall when asked an unexpected question, because writing allows revision and speech does not. What fluent speakers have is not a bigger vocabulary but a set of moves for buying time and recovering.',
        icon: '🎤',
      },
      {
        type: 'table',
        title: 'Buying Time Without Sounding Lost',
        headers: ['Croatian', 'English', 'Function'],
        rows: [
          ['Pa, kako da kažem…', 'Well, how shall I put it…', 'Classic filler, buys a full second'],
          ['Da budem iskren…', 'To be honest…', 'Frames the answer while you find it'],
          [
            'To je dobro pitanje.',
            'That is a good question.',
            'Universal, and universally recognised as such',
          ],
          [
            'Ovisi o tome kako gledate.',
            'It depends how you look at it.',
            'True often enough to be useful',
          ],
          [
            'Ako sam dobro razumio pitanje…',
            'If I have understood the question…',
            'Buys time and checks comprehension',
          ],
          [
            'Vratit ću se na to.',
            'I will come back to that.',
            'Defers cleanly, without dropping it',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Croatian Fillers Are Not English Fillers',
        body: 'Translating "um" and "you know" produces nothing usable. The Croatian equivalents are pa, ovaj, znači, kao and mislim. Ovaj is the closest to "er". Znači, literally "meaning", has drifted into a pure filler and is heavily used. Overusing znači is a recognised verbal tic that speakers are teased for — which tells you exactly how native it sounds.',
        highlight: 'pa, ovaj, znači, mislim — not um and you know',
      },
      {
        type: 'rule',
        title: 'Repair Out Loud, Do Not Restart',
        body: 'When a sentence goes wrong mid-way, fluent speakers do not go back to the beginning. They repair in place: "…zbog toga, odnosno, točnije rečeno, zbog posljedica toga…". Odnosno and točnije are the repair words, and using them makes a self-correction sound like precision rather than a stumble. Restarting the sentence signals that you lost control of it.',
        highlight: 'odnosno · točnije rečeno — repair in place',
      },
      {
        type: 'rule',
        title: 'Signpost So You Cannot Get Lost',
        body: 'Announce the shape of your answer before you give it: "Rekao bih dvije stvari. Prvo… Drugo…". Committing to two points forces you to finish, and it tells the listener when you are done, which is the hardest thing to signal in a language you are still thinking in. Three points is a risk; two is almost always enough.',
        highlight: 'Rekao bih dvije stvari. Prvo… Drugo…',
      },
      {
        type: 'rule',
        title: 'Simplify Under Pressure, Deliberately',
        body: 'The C2 move is not to reach for the most complex structure available but to notice when a complex one is failing and drop to a simpler one without stopping. A stalled subordinate clause can always become two short sentences. Nobody notices the simplification; everybody notices the stall.',
        highlight: 'when a clause stalls, make it two sentences',
      },
      {
        type: 'example',
        title: 'An Unrehearsed Answer',
        items: [
          {
            hr: 'Pa, to je dobro pitanje. Rekao bih dvije stvari.',
            en: 'Well, that is a good question. I would say two things.',
            note: 'Filler, acknowledgement, then a committed structure',
          },
          {
            hr: 'Prvo, podaci nisu potpuni — odnosno, potpuni su, ali nisu usporedivi.',
            en: 'First, the data are not complete — or rather, they are complete but not comparable.',
            note: 'Repair in place with odnosno; sounds like precision',
          },
          {
            hr: 'Drugo, i tu bih bio oprezan, zaključak ovisi o razdoblju koje gledamo.',
            en: 'Second, and here I would be cautious, the conclusion depends on the period we look at.',
            note: 'The second point closes the structure the speaker promised',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Mid-sentence you realise your subordinate clause is going wrong. What does a fluent speaker do?',
        options: [
          'Stop and restart the sentence from the beginning',
          'Repair in place with odnosno or točnije rečeno, or split it into two short sentences',
          'Switch to English',
          'Finish the clause incorrectly and move on',
        ],
        correct: 1,
        explanation:
          'Repair words make a self-correction sound like precision, and splitting into two sentences is invisible to a listener. Restarting is the one move that audibly signals loss of control — the thing the other options are all trying to avoid.',
      },
      {
        type: 'quiz',
        q: 'Which is a genuine Croatian filler rather than a translated English one?',
        options: ['um', 'znaš', 'ovaj', 'kao što'],
        correct: 2,
        explanation:
          'Ovaj is the standard Croatian hesitation marker, closest to English "er". Pa, znači and mislim are the others in heavy use. "Um" is not Croatian, and "kao što" is a comparative conjunction rather than a filler.',
      },
      {
        type: 'summary',
        title: 'Spontaneous Speech — What to Keep',
        points: [
          'Pa, ovaj, znači and mislim are the real fillers — not translated English ones',
          'Repair in place with odnosno and točnije rečeno; never restart the sentence',
          'Announce the shape first: Rekao bih dvije stvari. Prvo… Drugo…',
          'Two points, not three — a promise you can keep',
          'Dropping to a simpler structure is invisible; stalling is not',
        ],
      },
    ],
  },

  // ── 26. Professional translation ──────────────────────────────────────────
  {
    id: 'prevodjenje-strucno',
    title: 'Translating at a Professional Level',
    level: 'C2',
    subtitle: 'What changes when the translation has to stand on its own',
    icon: '🔁',
    duration: '~7 min',
    color: '#065f46',
    bg: '#ecfdf5',
    slides: [
      {
        type: 'intro',
        title: 'Beyond Avoiding the Traps',
        body: 'C1 taught you the structures that do not survive translation. This lesson is about the work itself: deciding what a translation is FOR, handling terms with no equivalent, keeping register across a whole document, and the specific problems Croatian poses to and from English — starting with the fact that Croatian is around fifteen per cent longer.',
        icon: '🔁',
      },
      {
        type: 'rule',
        title: 'Decide the Brief Before the First Sentence',
        body: 'A contract is translated for legal equivalence; a marketing text for effect; a literary passage for voice; a technical manual for unambiguous instruction. These briefs conflict, and a translator who has not chosen one produces a text that serves none. Croatian legal translation in particular tolerates awkwardness in exchange for precision, and marketing translation does the reverse.',
        highlight: 'equivalence, effect, voice or instruction — pick one',
      },
      {
        type: 'table',
        title: 'Structural Problems, Both Directions',
        headers: ['Problem', 'Handling'],
        rows: [
          ['English has no case', 'Word order in English carries what Croatian endings carry'],
          [
            'Croatian has no articles',
            'Definiteness comes from context, adjective form or word order',
          ],
          ['English present perfect', 'Croatian perfect plus an adverb: već, dosad'],
          ['Croatian aspect', 'English needs an adverb or a different verb entirely'],
          ['Croatian runs ~15 % longer', 'Layout and subtitle timing must allow for it'],
          ['V-form politeness', 'English has no grammatical equivalent — use register instead'],
        ],
      },
      {
        type: 'rule',
        title: 'Terms Without an Equivalent',
        body: "Some terms have no counterpart and must be handled explicitly rather than approximated. Županija is not a county. OIB is not a social security number. Dom zdravlja is not a hospital. The three honest options are borrowing with a gloss, describing, or naming the nearest institution and flagging the difference. Silently substituting the reader's own institution misinforms them.",
        highlight: 'borrow + gloss, describe, or flag the difference',
      },
      {
        type: 'rule',
        title: 'Translate the Register, Not Only the Words',
        body: 'An English contract\'s "shall" is not Croatian "hoće" — it is the present tense of obligation, or dužan je. English business email is warmer than Croatian business email, so a faithful translation of English friendliness reads as over-familiar in Croatian, and a faithful translation of Croatian formality reads as cold in English. Adjusting for that is part of the job, not a liberty.',
        highlight: 'shall → dužan je / present tense, never hoće',
      },
      {
        type: 'rule',
        title: 'Read the Result as a Croatian Text',
        body: 'The final check is to read the translation without the original beside you and ask whether a Croatian writer would have produced this. Calques survive review when you are comparing texts and stand out immediately when you are not. If a sentence needs the English to be understandable, it has not been translated yet.',
        highlight: 'if it needs the original to make sense, it is not finished',
      },
      {
        type: 'example',
        title: 'Decisions in Practice',
        items: [
          {
            hr: 'Ugovaratelj je dužan dostaviti dokumentaciju u roku od 30 dana.',
            en: 'The Contractor shall submit the documentation within 30 days.',
            note: '"shall" becomes dužan je — obligation, not future',
          },
          {
            hr: 'Zahtjev se podnosi nadležnoj županiji (regionalnoj upravnoj jedinici).',
            en: 'The application is submitted to the competent županija (regional administrative unit).',
            note: 'Borrow the term and gloss it once',
          },
          {
            hr: 'Radujemo se suradnji i stojimo na raspolaganju.',
            en: 'We look forward to working with you and remain at your disposal.',
            note: 'Croatian business closing formula — not a literal rendering',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'How should "The Supplier shall deliver the goods" be rendered in a Croatian contract?',
        options: [
          'Dobavljač hoće isporučiti robu.',
          'Dobavljač je dužan isporučiti robu.',
          'Dobavljač će možda isporučiti robu.',
          'Dobavljač isporučuje robu ako želi.',
        ],
        correct: 1,
        explanation:
          'Legal "shall" is obligation, not future. Croatian expresses it with dužan je or with the plain present tense; translating it as hoće turns a binding duty into a statement of intention, which is a substantive change to a contract.',
      },
      {
        type: 'quiz',
        q: 'You are translating "županija" for an English readership. What is the honest handling?',
        options: [
          'Translate it as "county"',
          'Borrow the term and gloss it once, or describe it and flag that it is not equivalent',
          'Leave it untranslated with no explanation',
          'Translate it as "state"',
        ],
        correct: 1,
        explanation:
          "Substituting the reader's own institution tells them something false about how Croatia is administered. Borrowing with a gloss, or describing while flagging the difference, keeps the reader accurately informed — which is what the translation is for.",
      },
      {
        type: 'summary',
        title: 'Professional Translation — What to Keep',
        points: [
          'Choose the brief first: equivalence, effect, voice or instruction',
          'Legal "shall" is dužan je or the present tense, never hoće',
          'Terms without an equivalent get borrowed and glossed, or described and flagged',
          'Croatian runs about 15 % longer — allow for it in layout and subtitles',
          'Read the result without the original; if it needs the original, it is not finished',
        ],
      },
    ],
  },

  // ── 27. Editing someone else's text ───────────────────────────────────────
  {
    id: 'uredjivanje-teksta',
    title: "Editing Someone Else's Croatian",
    level: 'C2',
    subtitle: 'What to change, what to leave, and how to say why',
    icon: '✂️',
    duration: '~6 min',
    color: '#334155',
    bg: '#f8fafc',
    slides: [
      {
        type: 'intro',
        title: 'A Different Job From Proofreading Your Own',
        body: "C1 taught you to find your own errors. Editing someone else's text is a different discipline, because most of what you could change is not wrong — it is merely not how you would have written it. The whole skill is the boundary between correcting and rewriting, and Croatian editorial practice draws it in a specific place.",
        icon: '✂️',
      },
      {
        type: 'table',
        title: 'Three Levels, Three Mandates',
        headers: ['Level', 'Croatian', 'What it touches'],
        rows: [
          ['Proofreading', 'korektura', 'Typos, spelling, punctuation only'],
          ['Language editing', 'lektura', 'Grammar, agreement, case, register consistency'],
          ['Substantive editing', 'redaktura', 'Structure, argument, cuts — with the author'],
        ],
      },
      {
        type: 'rule',
        title: 'Lektura Is a Recognised Professional Role',
        body: "Croatian publishing employs lektori as a matter of course, and a lektor's mandate is language, not content. They fix agreement, case government, clitic position, register drift and orthography. They do not rewrite the author's sentences to their own taste, and an author who finds their voice edited out will say so. Knowing the scope of the role is what makes the work welcome.",
        highlight: 'lektura fixes the language, never the voice',
      },
      {
        type: 'rule',
        title: 'The Change-Nothing Test',
        body: 'Before changing anything, ask: is this wrong, or is it merely not mine? If it is defensible under any standard reading, leave it. Editors earn trust by the changes they do NOT make, and an author reading a manuscript returned covered in preference changes stops reading the substantive ones.',
        highlight: 'wrong, or merely not mine?',
      },
      {
        type: 'rule',
        title: 'What Croatian Editing Actually Catches',
        body: 'The recurring list, in order of frequency: clitic position, agreement with quantity subjects, case after prepositions in long sentences, register drift between paragraphs, English word order surviving a translation, and the comma before da. Everything else is rarer. An editor who works through those six catches most of what matters in most texts.',
        highlight: 'clitics · quantity agreement · case in long sentences · register drift',
      },
      {
        type: 'rule',
        title: 'Say Why, Briefly',
        body: 'A change with a one-line reason is accepted; a silent change is resented and often reverted. "Zamijenio sam redoslijed enklitika — moraju biti na drugom mjestu." Croatian editorial culture expects this, and the reason also protects you: an author who disagrees can now disagree with the rule rather than with you.',
        highlight: 'every change carries a one-line reason',
      },
      {
        type: 'example',
        title: 'Editing Notes',
        items: [
          {
            hr: 'Mnogo ljudi su došli → Mnogo ljudi je došlo.',
            en: 'Agreement: a quantity subject takes a neuter singular verb.',
            note: 'A correction — not a preference',
          },
          {
            hr: 'Ja sam ti to htio reći → Htio sam ti to reći.',
            en: 'Clitic order; and the pronoun ja is redundant here.',
            note: 'Two changes, both rule-based, both worth naming',
          },
          {
            hr: 'Odbor je odlučio da će razmotriti… → Odbor je odlučio razmotriti…',
            en: 'The infinitive is preferred to the da-construction in this register.',
            note: 'Register, not correctness — flag it as a suggestion',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'An author writes a defensible sentence you would have phrased differently. What does a lektor do?',
        options: [
          'Rewrite it to the better phrasing',
          'Leave it — lektura fixes language, not voice',
          'Delete it',
          'Rewrite it and say nothing',
        ],
        correct: 1,
        explanation:
          "The change-nothing test applies: defensible under a standard reading means leave it. An editor's credibility comes from the changes they decline to make, because an author buried in preference edits stops attending to the substantive ones.",
      },
      {
        type: 'quiz',
        q: 'Which of these is a correction rather than a preference?',
        options: [
          'Changing "Odbor je odlučio da će razmotriti" to "Odbor je odlučio razmotriti"',
          'Changing "Mnogo ljudi su došli" to "Mnogo ljudi je došlo"',
          'Shortening a long sentence',
          'Replacing a noun with a synonym',
        ],
        correct: 1,
        explanation:
          'Quantity-subject agreement is a rule, so that one is a correction. The da-construction is a register preference, and shortening or substituting are matters of taste — all three belong in a note, not in a silent edit.',
      },
      {
        type: 'summary',
        title: 'Editing — What to Keep',
        points: [
          'korektura, lektura and redaktura have three different mandates',
          "Lektura fixes the language and leaves the author's voice alone",
          'Ask "wrong, or merely not mine?" before every change',
          'The frequent catches: clitics, quantity agreement, case, register drift',
          'Every change gets a one-line reason — silent edits get reverted',
        ],
      },
    ],
  },

  // ── 28. Deep phraseology ──────────────────────────────────────────────────
  {
    id: 'frazeologija-dubinska',
    title: 'Phraseology in Depth',
    level: 'C2',
    subtitle: 'Proverbs, allusions, and the expressions that carry a history',
    icon: '🗝️',
    duration: '~7 min',
    color: '#7e22ce',
    bg: '#faf5ff',
    slides: [
      {
        type: 'intro',
        title: 'Beyond the Idiom List',
        body: 'C1 gave you idioms that native speakers say. This lesson is about the layer beneath: the proverbs everyone can complete from the first half, the biblical and classical allusions that surface in serious writing, and the historical expressions whose origin the speaker has forgotten but whose weight they have not. These are the phrases that assume a shared past.',
        icon: '🗝️',
      },
      {
        type: 'table',
        title: 'Proverbs Everyone Can Finish',
        headers: ['Croatian', 'English', 'Used for'],
        rows: [
          [
            'Tko rano rani, dvije sreće grabi.',
            'The early riser catches two strokes of luck.',
            'Encouragement to start early',
          ],
          [
            'Bolje vrabac u ruci nego golub na grani.',
            'Better a sparrow in the hand than a pigeon on the branch.',
            'Take the certain option',
          ],
          [
            'Sto ljudi, sto ćudi.',
            'A hundred people, a hundred temperaments.',
            'Accepting difference',
          ],
          [
            'Bez muke nema nauke.',
            'Without effort there is no learning.',
            'Consolation during difficulty',
          ],
          [
            'Tiha voda brijege dere.',
            'Still water wears down the hills.',
            'The quiet one to watch',
          ],
          [
            'Iz malih potoka nastaju velike rijeke.',
            'Great rivers come from small streams.',
            'Small beginnings',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Half a Proverb Is the Whole Proverb',
        body: 'Croatian speakers rarely finish a well-known proverb. Someone says "Tko rano rani…" and stops, and the sentence is complete. This is the same move as English "when in Rome". For a learner the practical consequence is that you must recognise proverbs from their opening, because the ending you were taught may never be said.',
        highlight: '"Tko rano rani…" — that is the whole thing',
      },
      {
        type: 'table',
        title: 'Expressions With a History Inside Them',
        headers: ['Expression', 'Meaning', 'Origin'],
        rows: [
          ['gordijski čvor', 'an intractable problem', 'Classical — Alexander'],
          ['sizifov posao', 'endless futile labour', 'Classical — Sisyphus'],
          ['glas vapijućega u pustinji', 'an unheeded warning', 'Biblical'],
          ['izgubljeni sin', 'the prodigal son', 'Biblical'],
          ['prijeći Rubikon', 'pass the point of no return', 'Classical — Caesar'],
          ['trojanski konj', 'a hidden threat', 'Classical'],
        ],
      },
      {
        type: 'rule',
        title: 'The Classical Layer Is Assumed in Serious Writing',
        body: 'Croatian journalism and essay writing draw on classical and biblical allusion without explanation, on the assumption that an educated reader recognises them. A leader writer will call a negotiation a gordijski čvor and move on. These allusions map closely onto English ones, which is good news — the vocabulary is different but the reference is shared.',
        highlight: 'the reference is shared with English; only the words differ',
      },
      {
        type: 'rule',
        title: 'Some Are Specifically Croatian',
        body: 'A smaller set has no English counterpart and carries local history: "prošao je kao Janko na Kosovu" (he came off very badly), "muljati" from the wine press, expressions built on the Adriatic and on Ottoman-era borrowings. These are the ones worth asking about rather than guessing, because their register varies sharply by region and generation.',
        highlight: 'ask about the local ones — the register varies by region',
      },
      {
        type: 'rule',
        title: 'Deploy Sparingly',
        body: 'A learner who has just acquired a stock of proverbs uses too many, and the effect is the opposite of fluent — it reads as someone performing the language. One well-placed proverb in a long conversation is native; three is a phrasebook. Recognition is the skill worth having in full; production can stay modest for years without anyone noticing.',
        highlight: 'recognise all of them, use one at a time',
      },
      {
        type: 'example',
        title: 'In Real Use',
        items: [
          {
            hr: 'Znaš kako se kaže — tko rano rani…',
            en: 'You know how it goes — the early bird…',
            note: 'Trailing off is the normal delivery',
          },
          {
            hr: 'Pregovori su postali pravi gordijski čvor.',
            en: 'The negotiations have become a real Gordian knot.',
            note: 'Classical allusion used without explanation',
          },
          {
            hr: 'To je sizifov posao — ispravljaš jedno, pokvari se drugo.',
            en: 'It is a Sisyphean task — you fix one thing and another breaks.',
            note: 'Allusion plus its own gloss, common in speech',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A colleague says "Bolje vrabac u ruci…" and stops. What have they said?',
        options: [
          'They forgot the rest',
          'The whole proverb — take the certain option rather than the better uncertain one',
          'They are asking you to finish it',
          'They changed the subject',
        ],
        correct: 1,
        explanation:
          'Trailing off after the recognisable opening is the normal delivery for a well-known Croatian proverb, exactly as English does with "when in Rome". The meaning is fully conveyed and no completion is expected.',
      },
      {
        type: 'quiz',
        q: 'What is the good news about Croatian classical and biblical allusions for an English speaker?',
        options: [
          'There are very few of them',
          'The references are largely shared with English — only the wording differs',
          'They are always explained in the text',
          'They only appear in older writing',
        ],
        correct: 1,
        explanation:
          'Gordijski čvor, sizifov posao, prijeći Rubikon and trojanski konj all point at the same stories an English reader knows. The learning task is vocabulary rather than cultural background, which makes this the easiest layer of Croatian phraseology to acquire.',
      },
      {
        type: 'summary',
        title: 'Phraseology — What to Keep',
        points: [
          'Proverbs are delivered half-finished; recognise them from the opening',
          'Classical and biblical allusions are assumed, unexplained, in serious writing',
          'Those references are largely shared with English — only the wording differs',
          'A smaller local set carries Croatian history and varies by region',
          'Recognise everything; produce sparingly — one proverb, not three',
        ],
      },
    ],
  },

  // ── 29. The dialects in depth ─────────────────────────────────────────────
  {
    id: 'dijalekti-dubinski',
    title: 'The Three Dialects in Depth',
    level: 'C2',
    subtitle: 'Štokavian, kajkavian and čakavian, and what each one sounds like',
    icon: '🗺️',
    duration: '~7 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'From Recognising to Understanding',
        body: 'C1 taught you to recognise kajkavian and čakavian when you meet them. This lesson goes into what actually differs — the sound changes, the tense systems, the vocabulary — so that a conversation in Zagorje or on Hvar becomes followable rather than merely identifiable. Around half the country speaks something other than standard štokavian at home.',
        icon: '🗺️',
      },
      {
        type: 'table',
        title: 'The Three, by the Word for What',
        headers: ['Dialect', 'What', 'Heartland'],
        rows: [
          ['štokavski', 'što', 'Slavonia, Dalmatian hinterland, Bosnia — the standard base'],
          ['kajkavski', 'kaj', 'Zagreb, Zagorje, Međimurje, the north-west'],
          ['čakavski', 'ča', 'Istria, Kvarner, the islands, parts of the coast'],
        ],
      },
      {
        type: 'rule',
        title: 'Kajkavian Has a Different Tense System',
        body: 'The biggest surprise for a standard-trained learner is that kajkavian does not use the aorist or imperfect at all, and its future is built differently: "bum išel" rather than "ići ću". The accent is fixed further forward, vowels are reduced, and there is heavy German and Hungarian lexical influence — cajger, špancirati, farba. It is closer to Slovene than the standard is.',
        highlight: 'bum išel = ići ću',
      },
      {
        type: 'table',
        title: 'The Same Sentence, Three Ways',
        headers: ['Standard', 'Kajkavian', 'Čakavian'],
        rows: [
          ['Što radiš?', 'Kaj delaš?', 'Ča delaš?'],
          ['Gdje si bio?', 'Gdje si bil?', 'Gdi si bil?'],
          ['Idem kući.', 'Idem domov.', 'Gren doma.'],
          ['Nisam znao.', 'Nis znal.', 'Nisan znal.'],
          ['Lijepo je.', 'Lepo je.', 'Lipo je.'],
        ],
      },
      {
        type: 'rule',
        title: 'The Yat Reflex Sorts Them Quickly',
        body: 'The old vowel yat came out three ways: ije/je in the standard and most štokavian (lijep, mlijeko), e in kajkavian (lep, mleko), i in čakavian and some štokavian (lip, mliko). One word usually tells you where you are — and it explains why ikavian forms appear in Dalmatian štokavian speech and in older literature without being kajkavian or čakavian at all.',
        highlight: 'lijep (std) · lep (kaj) · lip (ča and ikavian što)',
      },
      {
        type: 'rule',
        title: 'Čakavian Keeps the Oldest Features',
        body: 'Čakavian preserves things the standard lost: the old pitch accents in fuller form, final -l where the standard has -o (bil rather than bio), and an m becoming n at the end of words (nisan, san). Its vocabulary carries centuries of Venetian — škura for a shutter, pjat for a plate, kužina for a kitchen. It is the most conservative of the three and, for a learner, the hardest to follow at speed.',
        highlight: 'bil not bio · nisan not nisam · Venetian vocabulary',
      },
      {
        type: 'rule',
        title: 'Nobody Speaks Only One',
        body: 'The practical reality is that almost everyone code-switches. A Zagreb speaker uses kajkavian features at home and standard štokavian at work, often mid-conversation. Treating a dialect feature as a mistake is the error — it is a register choice, and noticing which way someone switches tells you more about the situation than about them.',
        highlight: 'a dialect feature is a register choice, not a mistake',
      },
      {
        type: 'example',
        title: 'Three Voices',
        items: [
          {
            hr: 'Kaj se dogodilo? Nis znal da si došel.',
            en: 'What happened? I did not know you had come.',
            note: 'Kajkavian: kaj, nis, došel with the -l ending',
          },
          {
            hr: 'Ča je bilo? Nisan te vidil.',
            en: 'What was it? I did not see you.',
            note: 'Čakavian: ča, nisan with final n, vidil',
          },
          {
            hr: 'Što se dogodilo? Nisam znao da si došao.',
            en: 'What happened? I did not know you had come.',
            note: 'Standard štokavian, for comparison',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'You hear "Nisan te vidil". Which dialect, and how do you know?',
        options: [
          'Kajkavian — because of the -l ending',
          'Čakavian — final m becomes n (nisan), and -l is preserved in vidil',
          'Standard štokavian with a speech impediment',
          'Slovene',
        ],
        correct: 1,
        explanation:
          'Final m becoming n is a distinctively čakavian feature, and the preserved -l participle points the same way. Kajkavian also keeps the -l (bil, znal) but does not turn final m into n, so the nisan is what settles it.',
      },
      {
        type: 'quiz',
        q: 'A Zagreb colleague switches into kajkavian features during a coffee break. What has happened?',
        options: [
          'They have made a mistake',
          'They have switched register — the informal setting calls for it',
          'They are speaking a different language',
          'They are from Slovenia',
        ],
        correct: 1,
        explanation:
          "Code-switching between the local dialect and the standard is normal and constant across the country. The switch reports something about the situation rather than about the speaker's competence, and hearing it as error misreads both.",
      },
      {
        type: 'summary',
        title: 'The Dialects — What to Keep',
        points: [
          'što, kaj and ča name the three, and the yat reflex sorts them: lijep, lep, lip',
          'Kajkavian has no aorist or imperfect and builds the future with bum',
          'Čakavian keeps -l (bil), turns final m to n (nisan), and carries Venetian vocabulary',
          'Almost everyone code-switches between dialect and standard by situation',
          'A dialect feature is a register choice — never treat it as a mistake',
        ],
      },
    ],
  },

  // ── 30. Language and society ──────────────────────────────────────────────
  {
    id: 'jezik-i-drustvo',
    title: 'What a Language Choice Says About You',
    level: 'C2',
    subtitle: 'Age, medium, formality — and how Croatians read each other',
    icon: '🧭',
    duration: '~7 min',
    color: '#166534',
    bg: '#f0fdf4',
    slides: [
      {
        type: 'intro',
        title: 'The Last Thing to Learn',
        body: 'Every choice you have learned to make — dialect or standard, ti or Vi, a diminutive or none, a borrowing or a native coinage — is read by Croatian listeners as information about you. This lesson is about that reading: what the signals are, who sends them, and how to control the impression your Croatian makes now that its correctness is no longer in question.',
        icon: '🧭',
      },
      {
        type: 'table',
        title: 'What Gets Read',
        headers: ['Choice', 'Signals'],
        rows: [
          ['Vi vs ti', 'Distance, age difference, institutional setting'],
          ['Dialect features', 'Region, and whether the setting is relaxed'],
          ['Anglicisms', 'Age, profession, and how online the speaker is'],
          [
            'Native coinages (računalo, sučelje)',
            'Careful, standard-oriented, often institutional',
          ],
          ['Diminutives', 'Warmth, and often a female-coded conversational style'],
          ['Turkish- and German-origin words', 'Region and generation more than register'],
        ],
      },
      {
        type: 'rule',
        title: 'The Vi/Ti Line Has Moved',
        body: 'Older practice was Vi with anyone not a friend or a child. Current practice, especially under forty and in tech, media and creative work, moves to ti quickly — often at the first meeting. The safe method is unchanged: start with Vi, and switch when the other person switches or proposes it ("Možemo na ti?"). Offering it yourself to someone older or more senior is still theirs to offer first.',
        highlight: "Možemo na ti? — the other person's move to make",
      },
      {
        type: 'rule',
        title: 'Anglicisms Are Generational, Not Wrong',
        body: 'Younger urban Croatian absorbs English freely: lajkati, gugla, apdejt, kul. Institutional and older speech prefers the native forms. Neither is an error, and the choice sits on an axis of age and setting rather than correctness. A learner who uses only native coinages sounds like a document; one who uses only anglicisms sounds twenty-two.',
        highlight: 'the axis is age and setting, not right and wrong',
      },
      {
        type: 'rule',
        title: 'Written Croatian Online Is Its Own Register',
        body: 'Messaging Croatian drops diacritics (cao, sto radis), abbreviates heavily, and uses spoken forms in writing — the one place the colloquial register is legitimately written. Applying it to email is a serious misread. Diacritics in particular: absent in a text message, obligatory in anything professional, and their absence in a formal email is read as carelessness rather than as speed.',
        highlight: 'no diacritics in a message, always in an email',
      },
      {
        type: 'rule',
        title: 'The Diaspora Accent Is Its Own Signal',
        body: "Heritage speakers often carry the vocabulary and dialect of the region and generation their family left, which can be decades out of date — and Croatians hear this immediately and usually with warmth. It is worth knowing what you are signalling: a form that sounds archaic or strongly regional in Zagreb may be exactly what was standard in your grandparents' village. That is heritage, not error.",
        highlight: 'an old-fashioned form is heritage, not a mistake',
      },
      {
        type: 'rule',
        title: 'Control the Impression Deliberately',
        body: 'The C2 endpoint is not speaking one perfect Croatian. It is having several and choosing between them: standard for the report, relaxed for the coffee, a diminutive where warmth is wanted, the native coinage where precision is. When you can do that, the language has stopped being something you are learning and has become something you are using.',
        highlight: 'several Croatians, chosen deliberately',
      },
      {
        type: 'example',
        title: 'The Same Person, Three Settings',
        items: [
          {
            hr: 'Poštovani, u privitku dostavljam traženu dokumentaciju.',
            en: 'Dear Sir or Madam, please find the requested documentation attached.',
            note: 'Formal email: V-form, standard, full diacritics',
          },
          {
            hr: 'Bok, šaljem ti onaj dokument, javi ako nešto fali.',
            en: 'Hi, I am sending you that document, let me know if anything is missing.',
            note: 'Colleague on ti; relaxed but still fully written',
          },
          {
            hr: 'evo saljem, javi ak nesto fali',
            en: 'here sending, let me know if anything missing',
            note: 'A message: no diacritics, no capitals — legitimate here and nowhere else',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'You are emailing a professor you have not met. Which is right?',
        options: [
          'Ti, with diacritics',
          'Vi, with full diacritics, until they propose otherwise',
          'Vi, without diacritics to save time',
          'Whichever — the distinction has disappeared',
        ],
        correct: 1,
        explanation:
          'Start with Vi and let the other person propose ti. Diacritics are obligatory in anything professional; omitting them in a formal email reads as carelessness, not as speed, however normal it is in a text message.',
      },
      {
        type: 'quiz',
        q: 'A heritage speaker uses a word that sounds old-fashioned in Zagreb. What is the accurate reading?',
        options: [
          'They have made an error and should be corrected',
          'They carry the vocabulary of the region and generation their family left — heritage, not error',
          'They are speaking a different language',
          'They learned Croatian from a textbook',
        ],
        correct: 1,
        explanation:
          'Diaspora Croatian preserves the forms that were current when the family emigrated. Croatians recognise this immediately and generally warmly. Knowing what the form signals is useful; treating it as a mistake misdescribes it.',
      },
      {
        type: 'summary',
        title: 'Language and Society — What to Keep',
        points: [
          "Vi first; ti is the other person's to propose — Možemo na ti?",
          'Anglicisms and native coinages sit on an axis of age and setting, not correctness',
          'Messaging Croatian drops diacritics; professional writing never does',
          'Heritage forms are the language of a place and time, not errors',
          'The C2 endpoint is having several Croatians and choosing between them',
        ],
      },
    ],
  },
];
