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
    level: 'C1',
    subtitle: 'What the standard says, what educated speakers do, and the gap',
    icon: '⚖️',
    duration: '~7 min',
    color: '#0f766e',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'A Different Kind of Question',
        body: 'Until now the question was always "is this correct?". From here on it stops being useful, because the interesting cases are the ones where two forms are both defensible and the choice says something. Croatian has an unusually explicit standard — codified grammars, an orthography, a long tradition of language advice — and an everyday usage that does not always match it. Knowing where they diverge is the difference between writing correctly and writing deliberately.',
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
            'ja bih došao',
            'ja bi došao',
            'bi for every person is everyday speech; writing keeps bih, bismo, biste',
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
        body: 'The commonest mistake at this level is overshooting. A learner who has been told the nominal style is formal writes "vršenje provođenja nadzora". A learner told that the passive sounds official writes "Od strane uprave donesena je odluka" where Croatian simply says "Uprava je donijela odluku". A learner told "sa" is wrong writes "s sestrom" instead of "sa sestrom". Correction applied without judgment produces sentences no native speaker would write, and they are more conspicuous than the original error.',
        highlight: 's sestrom ✗ → sa sestrom ✓',
      },
      {
        type: 'rule',
        title: 'Choose For the Reader',
        body: 'The practical rule: identify the register the reader expects, then write within it consistently. A legal submission and a column in Jutarnji list have different norms and both are professional. What never works is mixing them — an administrative nominal phrase inside a chatty paragraph reads as a mistake even when every word is correct.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Norma propisuje infinitiv, pa u izvješću pišemo da uprava treba donijeti odluku do petka.',
            en: 'The norm prescribes the infinitive, so in a report we write that management needs to make the decision by Friday.',
            note: 'trebati + infinitive is the written norm; the da-construction is marked',
          },
          {
            hr: 'Išla je u kino sa sestrom, s bratom i sa Zoranom, a s Ivanom se našla poslije.',
            en: 'She went to the movie theater with her sister, her brother and Zoran, and met Ivan afterward.',
            note: 'sa before s, š, z, ž — s everywhere else, whatever the noun',
          },
          {
            hr: 'Pravopis dopušta oba oblika, ali lektorica je u cijeloj knjizi ujednačila jedan, jer dosljednost čitatelju govori da je tekst netko pročitao do kraja.',
            en: 'The orthography allows both forms, but the editor unified one throughout the book, because consistency tells the reader that someone read the text to the end.',
            note: 'Consistency inside a register beats correctness across registers',
          },
          {
            hr: 'Na radionicu je došlo dvoje djece i troje odraslih, a u susjednoj su dvorani sjedila dvojica muškaraca.',
            en: 'Two children and three adults came to the workshop, and in the next hall sat two men.',
            note: 'dvoje/troje for mixed groups and children; dvojica strictly for men',
          },
          {
            hr: 'Kolegi u poruci napišem da je stvar riješena, a u službenom dopisu da je predmet riješen u skladu s propisima.',
            en: 'To a colleague I write in a message that the matter is sorted; in an official letter, that the case has been resolved in accordance with the regulations.',
            note: 'The same content in two registers, each kept whole',
          },
          {
            hr: 'Nije pogrešno reći da idem u dućan, ali u oglasu trgovine pisat će trgovina, jer je ta riječ neutralnija.',
            en: "It is not wrong to say I am going to the dućan, but a store's advertisement will say trgovina, because that word is more neutral.",
            note: 'Less standard is not wrong — choose for the reader',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'A colleague writes "Ja bi to završio do petka" in a report. What is the accurate thing to say about it?',
        options: [
          'Nobody says it, so it must be a typing mistake',
          'It is what most people say, but in writing the norm keeps the first-person form: "Ja bih to završio do petka"',
          'It is the preferred standard form',
          'It is a regional form heard only on the coast',
        ],
        correct: 1,
        explanation:
          'In everyday speech bi serves for every person, and nobody misunderstands it. The standard keeps a form for each person — bih, bi, bi, bismo, biste, bi — and a report is written in the standard. "Usual in speech, not written in a report" is the honest description, and it is exactly the kind of judgment this lesson is about.',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors this lesson\'s learners make. First, treating every non-standard form as wrong: "di si" in a message to a friend is spoken, not a mistake — say the norm prefers "gdje" in writing. Second, hypercorrecting the preposition: sa mnom · sa sestrom — never s mnom, because the "s not sa" rule stops exactly where pronunciation demands sa. Third, mixing registers inside one text: "Odbili su mi zahtjev" inside an administrative letter reads as a slip even though every word is correct — keep "Zahtjev je odbijen" throughout.',
        highlight: 'sa mnom · sa sestrom — never s mnom',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Otišla je na more ___ bratom, a vratila se ___ sestrom."',
            options: ['s / s', 'sa / sa', 's / sa', 'sa / s'],
            correct: 2,
            explanation:
              'sa appears only before s, š, z, ž (and before mnom): s bratom but sa sestrom. Using sa everywhere is the spoken habit; using s everywhere is the hypercorrection.',
          },
          {
            q: 'Complete the formal report: "Uprava ___ odluku do petka."',
            options: ['treba donositi', 'treba donijeti', 'trebaju donijeti', 'treba donijet'],
            correct: 1,
            explanation:
              'Treba donijeti: trebati + the perfective infinitive. One decision by a deadline is a single completed act, so donositi is the wrong aspect; uprava is singular, so not trebaju; and a formal report keeps the full infinitive donijeti, not the spoken donijet.',
          },
          {
            q: 'Which sentence is the accepted standard form?',
            options: [
              'Došla su dvojica djece.',
              'Došlo je dvoje djece.',
              'Došli su dvoje djece.',
              'Došle su dvije djece.',
            ],
            correct: 1,
            explanation:
              'dvoje is the collective numeral for children and mixed groups and takes a neuter singular verb: došlo je dvoje djece. dvojica is for men only, and the other two break agreement.',
          },
          {
            q: 'A learner "corrects" a text. Which change is the hypercorrection?',
            options: [
              'sa njim → s njim',
              'trebam da idem → trebam ići',
              'sa mnom → s mnom',
              'neznam → ne znam',
            ],
            correct: 2,
            explanation:
              'sa mnom is the required standard form; "s mnom" is the rule applied past the point where it holds. The other three are genuine corrections.',
          },
          {
            q: 'A colleague says "Di si bio?" at lunch. What is the accurate description?',
            options: [
              'Spoken and regional, normal at lunch; it would not be written in a report',
              'An error to be corrected on the spot',
              'The preferred standard form',
              'Acceptable in a report as well',
            ],
            correct: 0,
            explanation:
              'di for gdje is purely spoken and regional — usage, not norm. It is neither an error at lunch nor acceptable in writing outside dialogue.',
          },
          {
            q: 'Inside an administrative letter, which sentence breaks the register?',
            options: [
              'Zahtjev je odbijen zbog nepotpune dokumentacije.',
              'Molimo da dopunite dokumentaciju u roku od osam dana.',
              'Odbili su mi zahtjev jer nisam sve predao.',
              'Dokumentacija se dostavlja nadležnom uredu.',
            ],
            correct: 2,
            explanation:
              'The third sentence is correct spoken Croatian in the wrong room: first person, colloquial verb, no nominal phrasing. Consistency inside one register is the rule.',
          },
          {
            q: 'What does "uzus" mean in this lesson?',
            options: [
              'What the orthography prescribes',
              'What competent speakers and writers actually do',
              'A regional pronunciation',
              'A hypercorrection',
            ],
            correct: 1,
            explanation:
              'Norma is prescribed; uzus is observed usage. The interesting cases are the ones where the two diverge and the choice says something about the writer.',
          },
        ],
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
    level: 'C1',
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
            'Both have been codified: neću dominates in practice, and ne ću survives in some pravopisi and in conservative writing',
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
        body: 'Croatian capitalizes the first word of a multi-word proper name and any proper noun inside it: Republika Hrvatska, Ministarstvo znanosti i obrazovanja, Trg bana Jelačića. Days, months, nationalities as adjectives and languages are lower case: ponedjeljak, siječanj, hrvatski jezik. In polite address, Vi and its forms are capitalized in letters to one person, and this is one of the few places where the capital carries meaning.',
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
            'Comma after the closing quotation mark — English puts it inside',
          ],
          ['5. svibnja 2026.', '5 May 2026', 'Ordinal dots after day and year'],
          ['1.500,75', '1,500.75', 'Dot for thousands, comma for decimals'],
          ['npr., tj., itd.', 'e.g., i.e., etc.', 'Abbreviations keep the final dot'],
        ],
      },
      {
        type: 'rule',
        title: 'Pick a Side and Stay There',
        body: 'On the genuinely contested points nobody can call you wrong. What they can call you is inconsistent. Write pogreška throughout or pogrješka throughout; zadaci throughout or zadatci throughout. A document that alternates announces that nobody read it end to end, which is the impression a careful writer is trying hardest to avoid.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ne razumijem zašto nisi došao, ali nemoj misliti da se ljutim.',
            en: 'I do not understand why you did not come, but do not think I am angry.',
            note: 'ne razumijem apart; nisi and nemoj are two of the four fused forms',
          },
          {
            hr: 'Da smo znali, ne bismo krenuli u petak, nego biste vi došli k nama u subotu.',
            en: 'Had we known, we would not have set off on Friday; instead you would have come to us on Saturday.',
            note: 'ne bismo, biste — the conditional auxiliary is always a separate word',
          },
          {
            hr: 'Republika Hrvatska potpisala je sporazum u utorak, 3. ožujka, u Ministarstvu vanjskih poslova.',
            en: 'The Republic of Croatia signed the agreement on Tuesday, 3 March, at the Ministry of Foreign Affairs.',
            note: 'Capitals only on the proper names; utorak and ožujka lower case; ordinal dot',
          },
          {
            hr: 'Nećete vjerovati, ali nemamo nijednu pogrešku u cijelom izvješću.',
            en: 'You will not believe it, but we do not have a single error in the whole report.',
            note: 'nećete and nemamo are fused; pogreška chosen and kept consistently',
          },
          {
            hr: 'Učenici su riješili sve zadatke, pa je učiteljica pohvalila cijeli razred.',
            en: 'The students solved all the tasks, so the teacher praised the whole class.',
            note: 'zadatke is the accusative plural — the zadaci/zadatci question arises only in the nominative',
          },
          {
            hr: 'Govorimo hrvatski jezik, učimo engleski, a u siječnju počinjemo s talijanskim.',
            en: 'We speak Croatian, we are learning English, and in January we start Italian.',
            note: 'Languages and months are lower case in Croatian',
          },
          {
            hr: 'Poštujemo Vaše mišljenje i zahvaljujemo Vam na strpljenju.',
            en: 'We respect your opinion and thank you for your patience.',
            note: 'Vaše, Vam capitalized in a letter to one person; zahvaljivati na + locative',
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
          'Days and months are lower case in Croatian, and the day of the month takes an ordinal dot. English habits push learners toward capitals on both, which is why this is one of the most frequent errors in otherwise excellent writing.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'The three slips that survive into otherwise excellent writing. First, "ja bi" for the first person: the form is ja bih, mi bismo, vi biste. Second, fusing ne with any verb: only nisam, neću, nemam and nemoj are written together — ne mogu, ne znam — apart; nemam, neću — together. Third, English capitals: "u Ponedjeljak", "Hrvatski jezik" and "u Svibnju" are all lower case in Croatian — u ponedjeljak, hrvatski jezik, u svibnju.',
        highlight: 'ne mogu, ne znam — apart; nemam, neću — together',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Da imam vremena, ja ___ došao."',
            options: ['bi', 'bih', 'bio bi', 'bijah'],
            correct: 1,
            explanation:
              'The first person singular of the conditional is bih. "Ja bi" is the commonest unedited-text marker; bio bi is the wrong person, and bijah is the imperfect, not a conditional.',
          },
          {
            q: 'Complete: "Vi ___ to trebali znati."',
            options: ['bi ste', 'biste', 'bi', 'bismo'],
            correct: 1,
            explanation:
              'The second person plural conditional is one word, biste. "Bi ste" splits it wrongly, bi is the third person, and bismo is first person plural.',
          },
          {
            q: 'Which line is correctly written?',
            options: [
              'Ne znam, ne mogu, nemam.',
              'Neznam, nemogu, nemam.',
              'Ne znam, nemogu, ne mam.',
              'Neznam, ne mogu, nemam.',
            ],
            correct: 0,
            explanation:
              'ne is written apart from every verb except the four fused ones (nisam, neću, nemam, nemoj). ne znam and ne mogu are apart; nemam is together.',
          },
          {
            q: 'Which contains an actual error rather than a contested variant?',
            options: [
              'Zadatci su teški.',
              'Ne ćemo doći.',
              'Vi bi ste trebali doći.',
              'Strjelica pokazuje sjever.',
            ],
            correct: 2,
            explanation:
              '"Bi ste" is an error: the form is biste. zadatci, ne ćemo and strjelica are all codified variants somebody has prescribed at some point — contested, not wrong.',
          },
          {
            q: 'How is "in January, in the Croatian language" written?',
            options: [
              'u Siječnju, na Hrvatskom jeziku',
              'u siječnju, na hrvatskom jeziku',
              'u siječnju, na Hrvatskom Jeziku',
              'u Siječnju, na hrvatskom jeziku',
            ],
            correct: 1,
            explanation:
              'Months and language names are lower case in Croatian. Capitalizing either is English interference and is among the most frequent errors in otherwise excellent writing.',
          },
          {
            q: 'A document uses "pogreška" in chapter one and "pogrješka" in chapter two. What is the honest verdict?',
            options: [
              'Chapter two is wrong',
              'Both are codified variants; the inconsistency is the fault',
              'Chapter one is wrong',
              'Neither form exists',
            ],
            correct: 1,
            explanation:
              'On a genuinely contested point nobody can call either form wrong. What they can call the document is unedited — alternating announces that nobody read it end to end.',
          },
          {
            q: 'Which date line is correct for a business letter?',
            options: [
              'Zagreb, 5 svibanj 2026',
              'Zagreb, 5. Svibnja 2026.',
              'Zagreb, 5. svibnja 2026.',
              'Zagreb, 5. svibnja 2026',
            ],
            correct: 2,
            explanation:
              'Ordinal dots after the day and the year, the month in the genitive and lower case: 5. svibnja 2026. The other three each drop a dot, add a capital or leave the month in the nominative.',
          },
        ],
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
    level: 'C1',
    subtitle: 'Foreign names, proper nouns, and the nouns that refuse the pattern',
    icon: '🧩',
    duration: '~7 min',
    color: '#7c3aed',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'The Cases Are Automatic. These Are Not.',
        body: 'At this point the case endings are not the problem. What still causes hesitation is the small set of nouns that decline against expectation, and above all foreign names — because Croatian declines them, English does not, and there is no way to avoid the question when you write about anyone from outside the country.',
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
          ['Hugo', 'Huga', 'A masculine in -o declines like Marko: Marko → Marka'],
          ['Zola', 'Zole', 'Final -a declines like a feminine, whoever bears it'],
          ['Merkel', 'Merkel', 'A woman’s surname in a consonant does not decline'],
        ],
      },
      {
        type: 'rule',
        title: "A Woman's Surname Ending in a Consonant Does Not Decline",
        body: 'This is the rule that surprises everyone. Angela Merkel, o Angeli Merkel — the first name declines, the surname does not. The reason is morphological: a consonant-final surname has no feminine paradigm to enter. A surname ending in -a does decline, whoever bears it: o Ani Zoli, o Ivanu Zoli. The consonant-final one stays as it is: o Ani Kovač, never o Ani Kovači or o Ani Kovaču.',
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
            'plural is djeca — declines like a feminine singular and takes adjectives that way (dobra djeca), but a verb goes PLURAL',
            'Collective; dobra djeca su došla',
          ],
          [
            'brat',
            'plural braća — feminine-singular form, plural verb: moja braća su došla',
            'Same collective pattern',
          ],
          ['pas', 'genitive psa — the a drops', 'Fleeting a'],
          ['sat', 'sati (hours) vs satovi (clocks/lessons)', 'Two plurals, two meanings'],
          ['oko / uho', 'oči / uši — old dual, feminine', 'The body-part pairs kept the dual'],
        ],
      },
      {
        type: 'rule',
        title: 'Two Plurals, Two Meanings',
        body: 'A handful of nouns have kept a short plural and a long plural with different senses. Sat: sati for hours (pet sati, mnogo sati) but satovi for clocks and lessons (pet satova, novi satovi). After dva, tri, četiri both senses share one form, dva sata, so the difference shows from five upwards. Oko: oči for the eyes in your head, oka for the eyes of a net or spots of fat in soup. Choosing the wrong plural produces a sentence that is grammatical and about the wrong thing.',
        highlight: 'pet sati (hours) · pet satova (clocks, lessons)',
      },
      {
        type: 'rule',
        title: 'Place Names Have Their Own Habits',
        body: 'Some Croatian place names are plural in form and take plural agreement: Vinkovci, Kaštela — Vinkovci su lijepi. A two-word name declines in both parts: u Dugoj Resi, iz Slavonskog Broda. Foreign cities adapt to the ordinary patterns: u Londonu, iz Pariza, prema Berlinu, and a neuter in -o like Oslo goes u Oslu, iz Osla. When in doubt, look it up rather than guess — this is a lookup problem, not a rule problem.',
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
            note: 'Both collectives: feminine-singular form, but the verb goes plural (su otišla, su ostala)',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Na predavanju o Emmanuelu Macronu i Angeli Merkel dvorana je bila puna.',
            en: 'At the lecture on Emmanuel Macron and Angela Merkel the hall was full.',
            note: "Macron declines (locative Macronu); the woman's consonant-final surname does not",
          },
          {
            hr: 'Čitao sam intervju s Johnom Kennedyjem i članak o Victoru Hugu.',
            en: 'I read an interview with John Kennedy and an article about Victor Hugo.',
            note: 'Final -y takes the linking -j-; Hugo declines like Marko: o Hugu',
          },
          {
            hr: 'Ljudi su čekali satima, a djeca su se igrala na trgu.',
            en: 'People waited for hours, and the children played in the square.',
            note: 'čovjek → ljudi; djeca takes a plural verb with the -a participle',
          },
          {
            hr: 'Psa smo ostavili kod susjeda, a mačku smo poveli sa sobom.',
            en: 'We left the dog with the neighbor and took the cat with us.',
            note: 'Fleeting a: pas → psa in the accusative',
          },
          {
            hr: 'Predavanje traje dva sata, a satovi na zidu ionako kasne.',
            en: 'The lecture lasts two hours, and the clocks on the wall are slow anyway.',
            note: 'dva sata = two hours; satovi = clocks — the two plurals with two meanings',
          },
          {
            hr: 'Braća su se posvađala oko nasljedstva, a oči su im bile pune suza.',
            en: 'The brothers quarreled over the inheritance, and their eyes were full of tears.',
            note: 'braća is a collective (participle in -a); oči keeps the old dual',
          },
          {
            hr: 'Vraćamo se iz Pariza preko Berlina, a u Londonu ostajemo tri dana.',
            en: 'We are coming back from Paris via Berlin, and staying three days in London.',
            note: 'Foreign cities adapt to the ordinary masculine pattern',
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
        correct: 0,
        explanation:
          'A woman\'s first name ending in a sound other than -a (Hillary ends in -i) does not decline, and a woman\'s surname ending in a consonant stays put too: o Hillary Clinton. "Hillari" respells the name, "Clintonu" gives her a masculine ending, and "Clintonovoj" adds a possessive suffix that modern usage has largely abandoned.',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors that mark a text as foreign. First, leaving a foreign name uninflected: film o Spielbergu — the name declines, and "film o Spielberg" is an error, not a style. Second, forcing a woman\'s consonant-final surname into a paradigm it does not have: "o Angeli Merkeli" or "Merkelovoj" — the surname stays Merkel and only Angeli declines. Third, reaching for the long plural of sat for hours: "dva satova" — after dva, tri, četiri the noun is genitive singular, dva sata, and satovi means clocks or lessons.',
        highlight: 'film o Spielbergu — the name declines',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Pročitala sam knjigu o ___."',
            options: ['Shakespeare', 'Shakespearea', 'Shakespeareu', 'Shakespearu'],
            correct: 2,
            explanation:
              'o takes the locative: Shakespeareu, with the silent e kept in writing and the ending added after it. Uninflected is an error, Shakespearea is the genitive, and dropping the e misspells the name.',
          },
          {
            q: 'Complete: "Razgovarali smo s ___."',
            options: ['Kennedy', 'Kennedyem', 'Kennedyjem', 'Kennedijem'],
            correct: 2,
            explanation:
              'A final -y takes the linking -j- before the ending: instrumental Kennedyjem. Without the j the form is wrong, and respelling the y as i changes the name.',
          },
          {
            q: 'Complete: "Sastanak s ___ Merkel trajao je sat vremena."',
            options: ['Angela', 'Angelom', 'Angelu', 'Angeli'],
            correct: 1,
            explanation:
              's takes the instrumental of the first name, Angelom, while the consonant-final surname of a woman stays Merkel. The other options are the nominative, accusative and dative.',
          },
          {
            q: 'Which sentence is correct?',
            options: ['Djeca je došla.', 'Djeca su došla.', 'Djeca su došli.', 'Djeca su došle.'],
            correct: 1,
            explanation:
              'djeca is a collective: plural verb su with the participle in -a. A singular verb or a masculine or feminine plural participle all break the pattern.',
          },
          {
            q: 'Which sentence contains an error?',
            options: [
              'Čekali smo ga dva sata.',
              'Kupila je dva sata za kuhinju.',
              'Škola je dobila nove satove.',
              'Čekali smo tri satova.',
            ],
            correct: 3,
            explanation:
              'After tri the noun stands in the genitive singular, so tri sata — and satovi means clocks or lessons in any case. The other three are correct: dva sata (hours or, with a numeral, clocks) and nove satove (clocks).',
          },
          {
            q: 'What does "satovi" mean, as opposed to "sati"?',
            options: ['Hours', 'Clocks or lessons', 'Minutes', 'Watches only'],
            correct: 1,
            explanation:
              'sat has two plurals with two senses: sati for hours, satovi for clocks and school lessons. Choosing the wrong one produces a grammatical sentence about the wrong thing.',
          },
          {
            q: 'Which place-name form is right?',
            options: ['Živi u London.', 'Živi u Londonu.', 'Živi u Londona.', 'Živi u Londone.'],
            correct: 1,
            explanation:
              'Foreign cities usually adapt to the ordinary masculine pattern: u Londonu, iz Pariza, prema Berlinu. Uninflected London is the same error as an uninflected personal name.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Declension Exceptions — What to Keep',
        points: [
          'Foreign names decline; leaving them uninflected is an error, not a style',
          "A woman's consonant-final surname does not decline — only her first name does",
          'čovjek/ljudi, dijete/djeca, brat/braća are suppletive or collective',
          'sat and oko have two plurals with two different meanings',
          'Place-name declension is a lookup problem — check rather than guess',
        ],
      },
    ],
  },

  // ── 5. Numbers in formal writing ──────────────────────────────────────────
  {
    id: 'brojevi-norma',
    title: 'Numbers, Dates and Measurements',
    level: 'C1',
    subtitle: 'The conventions formal Croatian applies to everything countable',
    icon: '📐',
    duration: '~6 min',
    color: '#0369a1',
    bg: '#f0f9ff',
    slides: [
      {
        type: 'intro',
        title: 'The Part of Formal Writing Nobody Teaches',
        body: 'Numbers are where a well-written Croatian document quietly announces whether it was written by someone who works in the language. The grammar of counting was settled at earlier levels; what remains is convention — when to write a numeral and when a word, how to punctuate a decimal, how to render a date, how to inflect a number inside running text.',
        icon: '📐',
      },
      {
        type: 'table',
        title: 'The Conventions',
        headers: ['Written as', 'Not', 'Context'],
        rows: [
          ['1.500,75 eura', '1,500.75 eura', 'Dot separates thousands, comma the decimal'],
          ['5. svibnja 2026.', '5 svibanj 2026', 'Ordinal dots; the month in the genitive'],
          ['u 14 sati', 'u 14:00 sati', 'The word sati replaces the second half of the clock time'],
          ['20 %', '20%', 'A space before the percent sign'],
          ['3 kg, 15 km', '3kg, 15km', 'A space before every unit'],
          [
            'tridesetih (30-ih) godina',
            '30-tih godina',
            'Figures take a hyphen and -ih; -tih is never right',
          ],
        ],
      },
      {
        type: 'rule',
        title: 'Words for Small Numbers, Numerals for Large',
        body: 'Croatian prose convention, like English, writes small numbers as words and larger ones as numerals — commonly words up to ten, numerals above. The line is not codified, so the rule that matters is consistency within one text. Style manuals add one firm recommendation: do not begin a sentence with a numeral — rewrite the sentence or spell the number out.',
        highlight: 'Style rule: do not open a sentence with a numeral',
      },
      {
        type: 'rule',
        title: 'Numbers Decline, Including in Documents',
        body: 'Two, three and four decline: s dvama ljudima, o trima slučajevima. Higher numbers behave as indeclinables in practice, and modern usage lets dva decline or not. Both are standard: the undeclined s dva prijedloga is the usual form everywhere, and the declined s dvama prijedlozima survives in administrative and legal writing, where it reads as formal; in journalism it reads as stiff.',
        highlight: 's dvama prijedlozima (formal) · s dva prijedloga (neutral, standard)',
      },
      {
        type: 'rule',
        title: 'The Genitive After Quantity Is Not Optional',
        body: 'After a quantity expression the counted noun stands in the genitive plural: mnogo ljudi, nekoliko problema, pet eura, malo vremena. The commonest advanced slip is applying it after dva/tri/četiri, which take the genitive SINGULAR instead: dva sata, tri dana, četiri godine. Getting this backwards is grammatical noise that a careful reader hears immediately.',
        highlight: 'pet godina (gen. pl.) · dvije godine (gen. sg.)',
      },
      {
        type: 'table',
        title: 'Money, Time and Measurement in Prose',
        headers: ['Croatian', 'English'],
        rows: [
          ['Cijena iznosi 1.250,00 eura.', 'The price is 1,250.00 euros.'],
          ['Rok je 30 dana od primitka.', 'The deadline is 30 days from receipt.'],
          ['Sastanak počinje u 9 i 30.', 'The meeting starts at half past nine.'],
          ['Udio je porastao za 3,5 postotnog boda.', 'The share rose by 3.5 percentage points.'],
          ['Površina je 120 m².', 'The area is 120 m².'],
        ],
      },
      {
        type: 'rule',
        title: 'Postotak and Postotni Bod Are Different Things',
        body: 'A rise from 10 % to 13 % is a rise of three PERCENTAGE POINTS (postotna boda) and of thirty percent (posto). Croatian keeps the distinction as carefully as English does, and getting it wrong in a report about anything measured is a substantive error rather than a linguistic one. Posto is invariable; postotak declines.',
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
            en: 'We expect growth to slow to 3 to 4 percent.',
            note: 'posto invariable; the range written with do',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ugovor je potpisan 12. ožujka 2026. u 10 sati, a stupa na snagu za 30 dana.',
            en: "The contract was signed on 12 March 2026 at 10 o'clock and takes effect in 30 days.",
            note: 'Ordinal dots on the day and year; u 10 sati; 30 dana in the genitive plural',
          },
          {
            hr: 'Nezaposlenost je pala s 8 % na 6 %, dakle za dva postotna boda ili za četvrtinu.',
            en: 'Unemployment fell from 8 % to 6 %, that is by two percentage points or by a quarter.',
            note: 'A space before %; postotni bod kept apart from the proportional change',
          },
          {
            hr: 'Komisija je raspravljala o dvama prijedlozima, a novinari su pisali o dva prijedloga.',
            en: 'The commission discussed two proposals, and the journalists wrote about two proposals.',
            note: 'Declined dvama in the formal record; undeclined dva in journalism',
          },
          {
            hr: 'Kupili smo 3 kg jabuka i 15 km dalje natočili gorivo za 60 eura.',
            en: 'We bought 3 kg of apples and 15 km further on filled up with fuel for 60 euros.',
            note: 'A space before every unit; eura is the genitive plural after 60',
          },
          {
            hr: 'Dvadeset gostiju stiglo je u podne, a četiri stola ostala su prazna.',
            en: 'Twenty guests arrived at noon, and four tables stayed empty.',
            note: 'The sentence opens with a number written out; dvadeset + genitive plural, četiri + genitive singular',
          },
          {
            hr: 'Cijena stana iznosi 185.000,00 eura, što je 2.312,50 eura po kvadratnom metru.',
            en: 'The price of the apartment is 185,000.00 euros, which is 2,312.50 euros per square meter.',
            note: 'Dot for thousands, comma for the decimal — the reverse of English',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Which renders "1,250.50 euros" correctly in a Croatian document?',
        options: ['1,250.50 eura', '1.250,50 eura', '1 250.50 eura', '1250,50 euro'],
        correct: 1,
        explanation:
          'Croatian uses the dot as the thousands separator and the comma as the decimal mark — the opposite of English. After a decimal amount the noun stands in the genitive singular; for euro that is eura, the same form as the genitive plural, never the nominative euro.',
      },
      {
        type: 'quiz',
        q: 'An index moves from 20 % to 25 %. What has risen by five?',
        options: [
          'Postotak — it rose by five percent',
          'Postotni bodovi — it rose by five percentage points, which is a rise of 25 percent',
          'Both expressions mean the same thing',
          'Neither — the change cannot be expressed in Croatian',
        ],
        correct: 1,
        explanation:
          'Five percentage points, twenty-five percent. Croatian marks the difference exactly as English does, and conflating them in a report misstates the finding rather than merely the wording.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors English habits produce. First, English punctuation: "1,500.75" is read by a Croatian accountant as one and a half — write 1.500,75 — dot for thousands, comma for decimals. Second, opening a sentence with a numeral, which style manuals advise against: „30 dana je rok.” reads better as „Rok je 30 dana.” or with the number spelled out. Third, a missing space and a confused unit: "20%" should be 20 %, and a rise from 10 % to 12 % is dva postotna boda, not "dva posto".',
        highlight: '1.500,75 — dot for thousands, comma for decimals',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Rok za prigovor je 15 ___ od primitka."',
            options: ['dan', 'dana', 'dani', 'danima'],
            correct: 1,
            explanation:
              'Five and above take the genitive plural: 15 dana. dan is singular, dani the nominative plural, danima the dative or instrumental.',
          },
          {
            q: 'Complete: "Čekali smo četiri ___ i platili pet ___."',
            options: ['sata / eura', 'sati / eura', 'sata / euri', 'sati / euro'],
            correct: 0,
            explanation:
              'dva, tri, četiri take the genitive singular (četiri sata) and five and above the genitive plural (pet eura). Getting this backwards is the commonest advanced slip with numbers.',
          },
          {
            q: 'Which is correctly written for a report?',
            options: [
              'Udio je porastao za 3,5 postotnog boda.',
              'Udio je porastao za 3.5 postotnog boda.',
              'Udio je porastao za 3,5 postotni bod.',
              'Udio je porastao za 3,5 postotnih boda.',
            ],
            correct: 0,
            explanation:
              'The decimal mark is a comma, and after a decimal the noun stands in the genitive singular: 3,5 postotnog boda. The second option has an English decimal point, the others the wrong case.',
          },
          {
            q: 'Which sentence goes against the style rule for numerals?',
            options: [
              'Rok je 30 dana.',
              '30 dana je rok.',
              'Rok iznosi trideset dana.',
              'Rok je trideset dana.',
            ],
            correct: 1,
            explanation:
              'Style manuals advise against beginning a sentence with a numeral. Either rewrite it so the numeral moves inside, or spell the number out.',
          },
          {
            q: 'Which phrase keeps the declined form of dva, as administrative texts often do?',
            options: [
              's dva prijedloga',
              'sa dva prijedlozima',
              's dvama prijedlozima',
              's dvoje prijedloga',
            ],
            correct: 2,
            explanation:
              's dvama prijedlozima declines dva. s dva prijedloga is also standard, and the more usual form; the other two mix cases.',
          },
          {
            q: 'Interest moves from 4 % to 6 %. By how much has it risen?',
            options: [
              'Za dva posto',
              'Za dva postotna boda, tj. za pedeset posto',
              'Za pedeset postotnih bodova',
              'Za šest posto',
            ],
            correct: 1,
            explanation:
              'Two percentage points, which is a fifty percent rise. Conflating postotni bod and posto misstates the finding rather than merely the wording.',
          },
          {
            q: 'How is "20 % of 1,000 euros" written?',
            options: [
              '20% od 1,000 eura',
              '20% od 1.000 eura',
              '20 % od 1,000 euro',
              '20 % od 1.000 eura',
            ],
            correct: 3,
            explanation:
              'A space before the percent sign, a dot as the thousands separator, and eura in the genitive plural after the quantity. Each of the other three breaks one of the three.',
          },
        ],
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
    level: 'C1',
    subtitle: 'Coordinated subjects, collectives, and what the verb does about them',
    icon: '🔗',
    duration: '~6 min',
    color: '#be123c',
    bg: '#fff1f2',
    slides: [
      {
        type: 'intro',
        title: 'Agreement Stops Being Automatic',
        body: 'One noun, one verb: settled at A1. What is not settled, and what advanced writers still get wrong, is what happens when the subject is two nouns of different genders, or a collective, or a quantity, or a noun far away from its verb. Croatian has answers for all of these, and several of them are not what an English speaker would guess.',
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
        body: 'This is the rule that most often surprises. Mnogo ljudi je došlo. Nekoliko studenata je položilo. Pet automobila je stiglo. The quantity word, not the noun, controls agreement, and it delivers a neuter singular. Writing „mnogo ljudi su došli” is the single commonest agreement error in advanced learner Croatian.',
        highlight: 'Mnogo ljudi je došlo — not „su došli”',
      },
      {
        type: 'rule',
        title: 'Two, Three and Four Behave Differently From Five',
        body: 'Dva studenta su došla — masculine, plural-looking, and the participle ends in -a. Pet studenata je došlo — neuter singular. The boundary is exactly at five, and it is a survival of the old dual. It applies to every quantity phrase: dvije žene su došle, pet žena je došlo.',
        highlight: 'dva su došla · pet je došlo',
      },
      {
        type: 'rule',
        title: 'The Nearest Noun: Only When the Verb Comes First',
        body: 'You met the one place where the nearest noun may decide in the previous lesson: a verb placed BEFORE its subjects may agree with the nearest one, Doputovala je Marija i njezin brat, Popularne su rasprodaje i popusti, and the plural is always correct too. When the verb FOLLOWS the subjects, it agrees with the subject as a whole. „Ni Ivan ni njegove sestre nisu došli” — the verb is masculine plural because the subject as a whole is mixed, not feminine because sestre is nearest. When a long subject comes first, find its head before choosing the verb.',
        highlight:
          'verb after the subjects → the whole subject; verb first → the nearest may decide',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ivan i Marija vratili su se s puta, a djeca su ih dočekala na kolodvoru.',
            en: 'Ivan and Marija came back from their trip, and the children met them at the station.',
            note: 'Mixed genders → masculine plural vratili; djeca → -a participle',
          },
          {
            hr: 'Nekoliko je turista ostalo na plaži, iako je kiša padala cijelo poslijepodne.',
            en: 'Several tourists stayed on the beach, although it rained all afternoon.',
            note: 'A quantity subject takes a neuter singular verb: ostalo',
          },
          {
            hr: 'Dva su brata otvorila pekarnicu, a pet sestara je otvorilo restoran.',
            en: 'Two brothers opened a bakery, and five sisters opened a restaurant.',
            note: 'Two → plural-looking dual form otvorila; five → neuter singular otvorilo',
          },
          {
            hr: 'Ni direktorica ni njezini zamjenici nisu potpisali ugovor.',
            en: 'Neither the director nor her deputies signed the contract.',
            note: 'The whole subject is plural and mixed → nisu potpisali, not the nearest noun',
          },
          {
            hr: 'Tri su djevojke stigle na vrijeme, a četvrta je zakasnila zbog gužve.',
            en: 'Three girls arrived on time, and the fourth was late because of the traffic.',
            note: 'tri with a feminine noun → feminine plural stigle',
          },
          {
            hr: 'Većina je zaposlenika glasala za štrajk, dok je manjina ostala suzdržana.',
            en: 'The majority of employees voted for the strike, while the minority abstained.',
            note: 'većina is a feminine singular noun and controls the verb: glasala',
          },
          {
            hr: 'Braća su se javila na natječaj, a sestre su ih podržale.',
            en: 'The brothers applied for the competition, and the sisters supported them.',
            note: 'braća collective → plural verb, -a participle; sestre → feminine plural',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three agreement errors that English pulls learners into. First, a plural verb after a quantity: "Mnogo ljudi su došli" — the quantity word delivers a neuter singular, Mnogo ljudi je došlo. Second, letting the nearer or the more numerous gender decide: "Ivan i Ana su došle" — mixed genders take the masculine plural, došli. Third, extending the dva pattern above four: "pet studenata su došla" copies dva studenta su došla, but from five upwards the form is pet studenata je došlo.',
        highlight: 'Mnogo ljudi je došlo',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Pet studenata ___ ispit."',
            options: ['su položili', 'je položilo', 'su položila', 'je položio'],
            correct: 1,
            explanation:
              'Five and above are quantity expressions and take a neuter singular verb: je položilo. The plural forms copy either English or the dva pattern, and položio is masculine singular.',
          },
          {
            q: 'Complete: "Dvije kolegice ___ na sastanak."',
            options: ['je došlo', 'su došli', 'su došle', 'je došla'],
            correct: 2,
            explanation:
              'dvije with a feminine noun keeps the plural-looking dual: su došle. The neuter singular belongs to five and above, and došli would be a mixed or masculine group.',
          },
          {
            q: 'Complete: "Petra, Lucija i Marko ___ na izlet."',
            options: ['su otišle', 'su otišli', 'je otišlo', 'su otišla'],
            correct: 1,
            explanation:
              'One man among the coordinated subjects makes the group mixed, and mixed genders take the masculine plural even when the women outnumber the men.',
          },
          {
            q: 'Which sentence is correct?',
            options: [
              'Djeca je bila umorna.',
              'Djeca su bili umorni.',
              'Djeca su bile umorne.',
              'Djeca su bila umorna.',
            ],
            correct: 3,
            explanation:
              'djeca is a collective and agrees with a plural verb and the -a form: su bila umorna. The singular verb and the masculine or feminine plural participles are all wrong.',
          },
          {
            q: 'Which sentence lets the verb drift to the nearest noun?',
            options: [
              'Ni Ivan ni njegove sestre nisu došli.',
              'Ni Ivan ni njegove sestre nisu došle.',
              'Ivan i njegove sestre došli su kasno.',
              'Ivan je sa sestrama došao kasno.',
            ],
            correct: 1,
            explanation:
              'došle agrees with sestre alone because it is nearest to the verb. The verb follows the subjects, so it agrees with the subject as a whole, which is mixed: došli. The fourth sentence has a singular subject, Ivan, and is correct.',
          },
          {
            q: 'Why does „dva studenta su došla” differ from „pet studenata je došlo”?',
            options: [
              'Because dva is feminine',
              'Because two, three and four preserve the old dual, while five and above are quantity expressions',
              'Because studenta is a misprint',
              'Because pet is an adverb',
            ],
            correct: 1,
            explanation:
              'The boundary at five is a survival of the dual: dva, tri, četiri keep a plural-looking agreement, and everything from pet upwards behaves like mnogo or nekoliko.',
          },
          {
            q: 'Complete: "Većina ___ za prijedlog."',
            options: ['su glasali', 'je glasalo', 'je glasala', 'su glasale'],
            correct: 2,
            explanation:
              'većina is an ordinary feminine singular noun, so the verb agrees with it: je glasala. It is not a neuter quantity adverb like mnogo, and the plural forms agree with nothing in the sentence.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Agreement — What to Keep',
        points: [
          'Mixed-gender coordinated subjects take the masculine plural',
          'Quantity subjects (mnogo, nekoliko, five and above) take a NEUTER SINGULAR verb',
          'Two, three and four keep a plural-looking form from the old dual',
          'djeca and braća are collectives with their own agreement',
          'A verb after its subjects agrees with the whole subject; a verb placed first may agree with the nearest',
        ],
      },
    ],
  },

  // ── 7. Case subtleties ────────────────────────────────────────────────────
  {
    id: 'padezne-suptilnosti',
    title: 'Case at the Margins',
    level: 'C1',
    subtitle: 'Genitive under negation, the partitive, and cases that carry meaning alone',
    icon: '🎚️',
    duration: '~7 min',
    color: '#4d7c0f',
    bg: '#f7fee7',
    slides: [
      {
        type: 'intro',
        title: 'Where the Case Is the Message',
        body: 'Earlier in this level you learned which case each verb governs. The cases left are the ones where nothing governs anything — where the case itself carries the meaning and swapping it produces a different sentence rather than a wrong one. These are the constructions that let a Croatian writer say in four words what English needs a clause for.',
        icon: '🎚️',
      },
      {
        type: 'rule',
        title: 'The Genitive of Negation',
        body: 'After nemati and nema the object is in the genitive: Nemam vremena, Nema problema, Nemam novca. Nemam vrijeme is not standard Croatian. After other negated verbs the genitive is possible beside the accusative: Ne vidim razloga or Ne vidim razlog. There the genitive is older and stronger and stresses the total absence of the thing; the accusative reads as more neutral, so the choice is one of emphasis.',
        highlight: 'Nemam vremena — never Nemam vrijeme',
      },
      {
        type: 'table',
        title: 'The Same Verb, Two Cases, Two Readings',
        headers: ['Genitive', 'Accusative', 'The difference'],
        rows: [
          ['Popio je vode.', 'Popio je vodu.', 'Some water / the water — the partitive'],
          [
            'Ne vidim razloga.',
            'Ne vidim razlog.',
            'No reason at all (stronger) / no reason (neutral)',
          ],
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
        body: 'Croatian expresses time with bare cases and no preposition. The genitive gives a point: prošle godine, ovoga tjedna, jednoga dana. The instrumental gives a repetition: subotom (on Saturdays), nedjeljom, večerima; the fixed adverbs danju (by day), noću (by night) and ljeti (in summer) do similar work. The accusative gives a duration: cijeli dan, cijelu godinu. Three cases, three time relations, no prepositions anywhere.',
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
        body: 'A bare instrumental gives means or route without any preposition: putovati vlakom (by train), pisati olovkom (with a pencil), ići šumom (through the forest). With s or sa the same case means accompaniment instead: s bratom, sa sestrom. Dropping or adding the preposition turns an instrument into a companion, which is how "putovao je s vlakom" becomes a sentence about traveling in the train\'s company.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Nemam ni novca ni volje za takav put, barem ne ove zime.',
            en: 'I have neither the money nor the will for such a trip, at least not this winter.',
            note: 'Genitive of negation (novca, volje) and the temporal genitive ove zime',
          },
          {
            hr: 'Donesi mi vode i malo kruha, a mlijeko ostavi u hladnjaku.',
            en: 'Bring me some water and a little bread, and leave the milk in the fridge.',
            note: 'Partitive genitives vode, kruha; the definite mlijeko in the accusative',
          },
          {
            hr: 'Nedjeljom putujemo autobusom, a ljeti plovimo brodom do otoka.',
            en: 'On Sundays we travel by bus, and in summer we sail by boat to the island.',
            note: 'Instrumental of repetition (nedjeljom) and of means (autobusom, brodom)',
          },
          {
            hr: 'Razbio mi se prozor, a susjedu je noću pukla cijev.',
            en: "My window broke, and the neighbor's pipe burst in the night.",
            note: 'Dative of the affected person: mi, susjedu; noću for time',
          },
          {
            hr: 'Cijeli dan smo hodali šumom, a navečer smo sjedili s prijateljima uz vatru.',
            en: 'All day we walked through the forest, and in the evening we sat with friends by the fire.',
            note: 'Accusative of duration; bare instrumental for the route; s + instrumental for company',
          },
          {
            hr: 'Prošloga tjedna nije bilo struje, pa nismo vidjeli nijednog filma.',
            en: 'Last week there was no electricity, so we did not see a single film.',
            note: 'nije bilo + genitive; the genitive of negation on nijednog filma',
          },
          {
            hr: 'Boli me glava, a sestri je pozlilo od vrućine.',
            en: 'My head hurts, and my sister felt faint from the heat.',
            note: 'Accusative me with boljeti; dative sestri with the impersonal pozliti',
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
        q: 'Which sentence uses the instrumental correctly for "he traveled by train"?',
        options: [
          'Putovao je s vlakom.',
          'Putovao je vlakom.',
          'Putovao je na vlaku.',
          'Putovao je vlaka.',
        ],
        correct: 1,
        explanation:
          'A bare instrumental gives the means: vlakom, autom, avionom. Adding s makes it accompaniment, so "s vlakom" says he traveled in the train\'s company. This is one of the few places where an extra preposition produces a sentence that is grammatical and comic.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors from translating the preposition instead of the case. First, adding s to an instrument: putovati vlakom, ne "s vlakom" — with the preposition the train becomes a traveling companion. Second, building repetition with a preposition: "na subotu" or "u subotama" for every Saturday — the bare instrumental subotom does it. Third, an accusative after nema: "Nema problem" — nema governs the genitive, Nema problema, exactly like Nemam vremena.',
        highlight: 'putovati vlakom, ne "s vlakom"',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Nema ___ — sve je riješeno."',
            options: ['problem', 'problema', 'problemu', 'problemom'],
            correct: 1,
            explanation:
              'nema takes the genitive: Nema problema. The accusative is the English-driven error, and the dative and instrumental fit no reading.',
          },
          {
            q: 'Complete: "Svakog ljeta putujemo ___ do Splita."',
            options: ['s vlakom', 'vlaka', 'vlakom', 'od vlaka'],
            correct: 2,
            explanation:
              'A bare instrumental gives the means: vlakom. s vlakom makes the train a companion, and the genitive forms name no relation at all.',
          },
          {
            q: 'Which sentence means "buy some bread"?',
            options: ['Kupi kruh.', 'Kupi kruha.', 'Kupi kruhu.', 'Kupi kruhom.'],
            correct: 1,
            explanation:
              'The partitive genitive kruha means an unspecified amount; the accusative kruh points at a definite loaf. The dative and instrumental do not fit kupiti.',
          },
          {
            q: 'Which sentence is wrong rather than merely a different emphasis?',
            options: ['Nemam vremena.', 'Ne vidim razlog.', 'Popio je vode.', 'Nemam vrijeme.'],
            correct: 3,
            explanation:
              'nemati takes the genitive, Nemam vremena, so the accusative vrijeme is an error. The first three are correct: after other negated verbs such as vidjeti the accusative is a neutral alternative to the genitive, and vode is partitive.',
          },
          {
            q: 'Complete: "___ idemo na tržnicu." (every Saturday, as a habit)',
            options: ['U subotu', 'Subotom', 'Subote', 'Za subotu'],
            correct: 1,
            explanation:
              'The instrumental of repetition says on Saturdays, habitually. U subotu names one Saturday, and the other two forms do not express time here.',
          },
          {
            q: 'What does the dative "mu" express in "Umro mu je otac"?',
            options: [
              'The father died because of him',
              'The person affected — his father died',
              'The father died with him',
              'A command to him',
            ],
            correct: 1,
            explanation:
              'The dative of the affected person does the work of an English possessive and presents the person as touched by the event rather than as an owner.',
          },
          {
            q: 'Complete: "Radili smo ___ i nismo stali." (the whole day)',
            options: ['cijeloga dana', 'cijelim danom', 'cijeli dan', 'cijelom danu'],
            correct: 2,
            explanation:
              'Duration is the accusative: cijeli dan. The genitive gives a point in time, the instrumental repetition, and the dative nothing temporal.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Case at the Margins — What to Keep',
        points: [
          'nemati and nema take the genitive: Nemam vremena; after other negated verbs the genitive stresses total absence',
          'The partitive genitive means "some": Kupi kruha vs Kupi kruh',
          'Time takes bare cases: prošle godine (point), subotom (repeated), cijeli dan (duration)',
          'The dative marks the person affected, doing the work of a possessive',
          'A bare instrumental is means; with s it is accompaniment',
        ],
      },
    ],
  },

  // ── 10. The second conditional ────────────────────────────────────────────
  {
    id: 'kondicional-drugi',
    title: 'The Second Conditional',
    level: 'C1',
    subtitle: 'Bio bih došao — the mood for what never happened',
    icon: '🕰️',
    duration: '~6 min',
    color: '#6d28d9',
    bg: '#f5f3ff',
    slides: [
      {
        type: 'intro',
        title: 'A Form Most Learners Never Meet',
        body: 'Croatian has a second conditional — kondicional drugi — built from the conditional of biti plus the participle: bio bih došao. It is rare in speech, alive in literature and careful writing, and almost never taught, so learners reach this level able to say "I would come" and unable to say "I would have come" except by implication. This lesson closes that.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Da ste nas nazvali, bili bismo vas pričekali na kolodvoru.',
            en: 'Had you called us, we would have waited for you at the station.',
            note: 'Past unreal: da + perfect, then bili bismo + participle',
          },
          {
            hr: 'Bila bih se javila ranije, ali nisam imala tvoj broj.',
            en: 'I would have gotten in touch earlier, but I did not have your number.',
            note: 'Feminine speaker: bila bih; se joins the clitic cluster after bih',
          },
          {
            hr: 'Bio sam već otišao kad je počela kiša, pa se nisam smočio.',
            en: 'I had already left when the rain started, so I did not get wet.',
            note: 'Pluperfect bio sam otišao — indicative, it happened',
          },
          {
            hr: 'Da znam, rekao bih ti odmah — ovako mogu samo nagađati.',
            en: 'If I knew, I would tell you at once — as it is, I can only guess.',
            note: 'Present unreal: the first conditional is all that is needed',
          },
          {
            hr: 'Tvrtka bi bila izbjegla gubitak da je na vrijeme promijenila dobavljača.',
            en: 'The company would have avoided the loss had it changed supplier in time.',
            note: 'Second conditional in the main clause, the perfect in the da-clause',
          },
          {
            hr: 'Da ste vidjeli stari kolodvor, bili biste se iznenadili koliko se sve promijenilo.',
            en: 'Had you seen the old station, you would have been surprised how much everything has changed.',
            note: 'bili biste se — the reflexive follows the conditional auxiliary',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors specific to this form. First, confusing it with the pluperfect: "Bio sam došao" reports a real earlier event; "Bio bih došao" reports one that never happened — one word, opposite facts. Second, a broken cluster: "bio ti bih rekao" — the conditional auxiliary precedes the dative, bio bih ti rekao — auxiliary before the dative. Third, forgetting that both participles agree: for Ana the form is "bila bi došla", never "bio bi došao".',
        highlight: 'bio bih ti rekao — auxiliary before the dative',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Da smo znali, ___ ranije." (we would have come)',
            options: ['bili bismo došli', 'bismo bili došli', 'bili smo došli', 'bili bi došli'],
            correct: 0,
            explanation:
              'bili bismo došli: the conditional of biti in second position, then the main participle. Clitic-first is impossible, bili smo došli is the pluperfect and did happen, and bi is the wrong person for we.',
          },
          {
            q: 'Complete: "___ pismo, ali nije imala adresu." (she would have sent)',
            options: ['bio bi poslao', 'bila bi poslala', 'bila bi poslao', 'bio bih poslala'],
            correct: 1,
            explanation:
              'Both participles agree with the feminine subject that nije imala shows: bila bi poslala. (After a named subject the clitic would come second: Ana bi bila poslala.) The other options mix genders or the person of the auxiliary.',
          },
          {
            q: 'Complete: "___ rekao, ali nisi bio tu." (I would have told you)',
            options: ['Bio ti bih', 'Bih ti bio', 'Bio bih ti', 'Ti bih bio'],
            correct: 2,
            explanation:
              'The participle bio opens the sentence and the cluster follows in order: conditional auxiliary, then the dative — bio bih ti rekao. Every other option breaks second position or the internal order.',
          },
          {
            q: 'Which sentence reports that the leaving actually happened?',
            options: ['Bio bih otišao.', 'Otišao bih.', 'Bio sam otišao.', 'Bio bi otišao.'],
            correct: 2,
            explanation:
              'Bio sam otišao is the pluperfect — indicative and real. The forms with bih and bi are conditional and describe non-events.',
          },
          {
            q: 'Which sentence is wrong?',
            options: [
              'Da sam znao, došao bih.',
              'Da sam znao, bio bih došao.',
              'Da bih znao, došao bih.',
              'Da sam znala, bila bih došla.',
            ],
            correct: 2,
            explanation:
              'The da-clause of a counterfactual takes the perfect (da sam znao), never the conditional. The other three are all standard — with either conditional in the main clause.',
          },
          {
            q: 'A text message reads "Da sam znao, došao bih." Is the second conditional needed?',
            options: [
              'Yes — the first conditional is an error here',
              'No — the da-clause already marks the past, and the first conditional is standard',
              'Yes, in every counterfactual',
              'No, because the second conditional does not exist',
            ],
            correct: 1,
            explanation:
              'Modern Croatian lets the da-clause carry the time and uses the first conditional for both; the second conditional adds explicit unreality and literary weight, which a text message does not need.',
          },
          {
            q: 'What is the difference between "bio sam došao" and "bio bih došao"?',
            options: [
              'Tense only — both mean I came',
              'The first is real (pluperfect), the second did not happen (second conditional)',
              'The first is conditional',
              'No difference',
            ],
            correct: 1,
            explanation:
              'sam versus bih reverses the factual claim: the pluperfect reports an event before another past event, the second conditional a non-event. This pair is the commonest source of misreading in older texts.',
          },
        ],
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

  // ── 13. Sentence rhythm ───────────────────────────────────────────────────
  {
    id: 'ritam-recenice',
    title: 'The Rhythm of a Sentence',
    level: 'C1',
    subtitle: 'Length, weight and the placement that makes prose readable',
    icon: '🎼',
    duration: '~6 min',
    color: '#a21caf',
    bg: '#fdf4ff',
    slides: [
      {
        type: 'intro',
        title: 'Correct Prose That Is Still Hard to Read',
        body: 'A learner at this level often writes sentences that are all correct and all the same length, and the result is flat. Croatian rhythm is built differently from English rhythm because word order is freer and the clitics have a fixed slot, so the tools available are different — and once you can hear them, the same content becomes readable or unreadable at will.',
        icon: '🎼',
      },
      {
        type: 'rule',
        title: 'Vary the Length Deliberately',
        body: 'Croatian prose favors a long sentence followed by a short one. The long sentence carries the argument, with subordination and apposition; the short one lands it. Three long sentences in a row exhaust a reader, and three short ones in a row read as a list. The rhythm is not decoration — it tells the reader which sentence matters.',
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
        body: 'Croatian tolerates deep subordination better than English, and that is a trap. A sentence with three nested koji-clauses is grammatical and unreadable. The remedy is condensation — turn one clause into a phrase — or a period. Style guides in Croatian make this point as firmly as English ones do, and the nominal style is where the problem usually starts.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Nakon što je odbor tri sata raspravljao o proračunu, glasanje je trajalo minutu. Prošao je.',
            en: 'After the committee had debated the budget for three hours, the vote took a minute. It passed.',
            note: 'Long sentence, then a two-word one — the short one lands it',
          },
          {
            hr: 'Novi je most otvoren jučer. Jučer je otvoren novi most.',
            en: 'The new bridge was opened yesterday. Yesterday a new bridge was opened.',
            note: 'End weight: the first answers when, the second answers what',
          },
          {
            hr: 'Kad su stigli na vrh, vjetar je već utihnuo, a dolina se pod njima pušila od jutarnje magle. Šutjeli su.',
            en: 'When they reached the top the wind had already died down, and the valley below them steamed with morning mist. They were silent.',
            note: 'Subordination and apposition, then a one-verb sentence',
          },
          {
            hr: 'Nakon pregleda dokumentacije uprava je odluku donijela jednoglasno.',
            en: 'After reviewing the documentation, management made the decision unanimously.',
            note: 'Condensation — a clause turned into a phrase; the clitic follows the first constituent',
          },
          {
            hr: 'Tko je pobijedio? Pobijedio je Hajduk. A kad? Sinoć.',
            en: 'Who won? Hajduk won. And when? Last night.',
            note: 'Each answer puts the new information last',
          },
          {
            hr: 'Grad je zimi tih, a ljeti, kad se ulice napune turistima, glasan je do ponoći.',
            en: 'The town is quiet in winter, and in summer, when the streets fill with tourists, it is loud until midnight.',
            note: 'Known frame first, the contrast carried to the end',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'You want to stress WHEN the law took effect. Which order does that?',
        options: [
          'Novi zakon je stupio na snagu prošloga tjedna.',
          'Prošloga tjedna je stupio na snagu novi zakon.',
          'Na snagu je prošloga tjedna stupio novi zakon.',
          'Prošloga je tjedna novi zakon stupio na snagu.',
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
          'Condensation and the period are the two tools. Commas do not reduce depth, moving the clitics breaks second position, and the passive usually adds nominal weight rather than removing it.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three rhythm faults that pass every grammar check. First, English default order in every sentence — subject, verb, object, time — so that nothing is ever emphasized; front the known element and let the news land last. Second, stacking koji-clauses: "čovjek koji je kupio kuću koja je pripadala obitelji koja se odselila" — condense one clause into a phrase or stop. Third, fronting a constituent and leaving the clitic where English would put the verb: "Jučer Ivan je kupio auto" — Jučer je Ivan kupio auto — the clitic follows the first constituent.',
        highlight: 'Jučer je Ivan kupio auto — the clitic follows the first constituent',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete with the correct clitic position: "Jučer ___ kupio auto."',
            options: ['Ivan je', 'je Ivan', 'Ivan', 'Ivan bio je'],
            correct: 1,
            explanation:
              'Whatever is fronted, the clitic cluster follows it: Jučer je Ivan kupio auto. "Jučer Ivan je" pushes je to third position, the third option drops the auxiliary, and the fourth strands it.',
          },
          {
            q: 'Which order makes "the car" the known topic and "yesterday" the news?',
            options: [
              'Ivan je jučer kupio auto.',
              'Auto je Ivan kupio jučer.',
              'Jučer je Ivan kupio auto.',
              'Kupio je Ivan auto jučer.',
            ],
            correct: 1,
            explanation:
              'End weight: the fronted auto is the known element and the sentence-final jučer is the news. The other orders foreground Ivan, the time, or the act of buying.',
          },
          {
            q: 'Which is the condensed version of "Odbor je razmotrio prijedlog i nakon toga je donio odluku"?',
            options: [
              'Odbor je razmotrio prijedlog. Odbor je donio odluku.',
              'Razmotrivši prijedlog, odbor je donio odluku.',
              'Odbor, koji je razmotrio prijedlog, koji je donio odluku.',
              'Odbor je razmotrio prijedlog i odbor je nakon toga donio odluku.',
            ],
            correct: 1,
            explanation:
              'The verbal adverb turns a clause into a phrase and keeps one main clause. The first option splits without condensing, the third stacks koji-clauses and loses its verb, the fourth merely repeats the subject.',
          },
          {
            q: 'Which sentence is grammatical but stacks the subordination the lesson warns against?',
            options: [
              'Kupio je kuću koja je pripadala obitelji koja je otišla u grad u kojem je radio njegov otac.',
              'Kupio je kuću koja je pripadala obitelji koja se odselila.',
              'Kupio je staru obiteljsku kuću.',
              'Kupio je kuću. Bila je stara.',
            ],
            correct: 0,
            explanation:
              'Three nested relative clauses are grammatical and unreadable. Two levels are the limit; the remedies are condensation or a period, both shown in the other options.',
          },
          {
            q: 'Three long sentences in a row, then "Jednoglasno." What does the short sentence do?',
            options: [
              'Signals a list',
              'Carries the point — the short sentence after long ones is where the weight lands',
              'Shows the writer ran out of words',
              'Marks a new paragraph',
            ],
            correct: 1,
            explanation:
              'Croatian prose favors a long sentence followed by a short one; the short one is the point. Three short sentences in a row would read as a list, three long ones exhaust the reader.',
          },
          {
            q: 'Which sentence has the clitic in the wrong place?',
            options: [
              'Jučer je Ivan kupio auto.',
              'Ivan je jučer kupio auto.',
              'Jučer Ivan je kupio auto.',
              'Auto je Ivan kupio jučer.',
            ],
            correct: 2,
            explanation:
              'The clitic must follow the first constituent, and in the third sentence it follows the second. The other three all front a different element and keep je in second position.',
          },
          {
            q: 'Complete with the verbal adverb that condenses the clause: "___ prijedlog, odbor je donio odluku."',
            options: ['Razmotrivši', 'Razmotriti', 'Razmotrio', 'Razmotren'],
            correct: 0,
            explanation:
              'The past verbal adverb razmotrivši turns the first clause into a phrase and leaves one main clause. An infinitive, a bare participle or a passive participle cannot head the phrase.',
          },
          {
            q: 'What is meant by "end weight"?',
            options: [
              'Long sentences go last',
              'The new information goes at the end, the emphatic position',
              'Every sentence ends with a verb',
              'The clitics go at the end',
            ],
            correct: 1,
            explanation:
              'Known information first, new information last: the end of a Croatian sentence is its emphatic position, and free word order lets you choose what stands there.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Rhythm — What to Keep',
        points: [
          'Vary sentence length on purpose; the short one after long ones carries the point',
          'End weight: known information first, new information last',
          'Whatever you front becomes the topic, and the clitics follow it',
          'Two levels of subordination, not four',
          'Condensation or a period — those are the two ways out of a tangle',
        ],
      },
    ],
  },

  // ── 14. Irony and subtext ─────────────────────────────────────────────────
  {
    id: 'ironija-podtekst',
    title: 'Irony and Subtext',
    level: 'C1',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Baš si se potrudio — zakasnio si samo sat vremena.',
            en: 'You really made an effort — you were only an hour late.',
            note: 'baš + praise + the fact that follows = sarcasm',
          },
          {
            hr: 'Kako ti ide novi posao? — Ide nekako, ne mogu se požaliti.',
            en: 'How is the new job going? — It is going somehow, I cannot complain.',
            note: 'Understatement: this is good news',
          },
          {
            hr: 'Ma daj, opet si zaboravio ključeve?',
            en: 'Oh come on, you forgot the keys again?',
            note: 'ma daj marks disbelief; the question expects no answer',
          },
          {
            hr: 'Gradska uprava donijela je povijesnu odluku: klupa u parku bit će prefarbana.',
            en: 'The city administration has taken a historic decision: the bench in the park will be repainted.',
            note: 'Administrative register applied to something trivial — written irony',
          },
          {
            hr: 'Imamo mali problemčić: nestalo je struje u cijeloj zgradi.',
            en: 'We have a tiny little problem: the power is out in the whole building.',
            note: 'A diminutive on something large',
          },
          {
            hr: 'A što si očekivao, da će ti sami donijeti novac na vrata?',
            en: 'And what did you expect, that they would bring the money to your door themselves?',
            note: 'Rhetorical question — the intonation falls, no answer is left room for',
          },
          {
            hr: 'Svaka čast, ovaj put si došao samo pola sata kasnije.',
            en: 'Well done, this time you were only half an hour late.',
            note: 'svaka čast — praise or its exact opposite; here the second',
          },
          {
            hr: 'Sve u svemu, nije loše, moglo je biti i gore.',
            en: 'All in all, not bad — it could have been worse.',
            note: 'Understated approval; nije loše is real praise',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three misreadings English speakers keep making. First, hearing "Nije loše" as lukewarm: Nije loše = genuine approval, because Croatian praises by declining to complain. Second, answering "Odlično!" to every piece of news — it sounds naive next to speakers who understate by default. Third, taking "Baš si mi pomogao" literally after a failure and replying "Nema na čemu": in a tense exchange, baš + praise is sarcasm until proven otherwise.',
        highlight: 'Nije loše = genuine approval',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: '"Baš si mi pomogao," says a friend after you dropped their laptop. What did they mean?',
            options: [
              'Genuine thanks',
              'Sarcasm — thanks for nothing',
              'A question',
              'A request for more help',
            ],
            correct: 1,
            explanation:
              'baš intensifies, and intensified praise where none is deserved is sarcasm. The construction is identical to real thanks; only the situation decides, and this situation is not ambiguous.',
          },
          {
            q: 'Complete the emphatic agreement: "Je li film dobar? — ___!"',
            options: ['Nego što', 'Ma daj', 'Taman posla', 'E pa'],
            correct: 0,
            explanation:
              'Nego što is emphatic agreement — of course. Ma daj is disbelief, taman posla an indignant refusal, and e pa a resigned opener.',
          },
          {
            q: 'Complete the indignant refusal: "Da mu posudim auto? ___!"',
            options: ['Nego što', 'Svaka čast', 'Taman posla', 'Nije loše'],
            correct: 2,
            explanation:
              'Taman posla means absolutely not. Nego što would agree, svaka čast praises or mocks, and nije loše approves.',
          },
          {
            q: 'Which sentence is written irony through register incongruity?',
            options: [
              'Klupa u parku je prefarbana.',
              'Gradska uprava donijela je povijesnu odluku o prefarbavanju klupe.',
              'Klupa je bila stara.',
              'Molimo ne sjedati na klupu.',
            ],
            correct: 1,
            explanation:
              'Administrative vocabulary — povijesna odluka — applied to a park bench is the standard written device. The other sentences are plain statements or a notice.',
          },
          {
            q: 'A colleague says "Ide nekako" about their business. Which reaction misreads them?',
            options: [
              'Drago mi je da ide.',
              'Znači, dobro ide.',
              'Žao mi je, jesu li problemi veliki?',
              'Super, bravo.',
            ],
            correct: 2,
            explanation:
              '"Ide nekako" is normal modesty about a business doing well. Offering sympathy reads the understatement as a complaint — the persistent misunderstanding this lesson names.',
          },
          {
            q: 'What does the diminutive do in "mali problemčić", said of a power cut in the whole building?',
            options: [
              'Reports a genuinely small problem',
              'Signals wry irony — a diminutive on something large',
              'Is a regional form',
              'Makes the sentence more formal',
            ],
            correct: 1,
            explanation:
              'A diminutive on something undeniably large is a set ironic move, wry rather than dismissive. Reading it as genuine understatement misjudges both the speaker and the problem.',
          },
          {
            q: '"A što si ti očekivao?" — what marks this as rhetorical?',
            options: [
              'Rising intonation',
              'It leaves no room for an answer, and the intonation falls',
              'It has no verb',
              'It uses Vi',
            ],
            correct: 1,
            explanation:
              'A rhetorical question carries most spoken irony: the speaker continues without waiting, and the intonation falls where a real question would rise.',
          },
        ],
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
    title: 'The Humor That Needs the Grammar',
    level: 'C1',
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
          ['vila / vila', 'fairy / villa', 'Two words from different sources, one form'],
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
        body: 'Because Croatian marks role by ending rather than order, a joke can hinge on which ending was used. "Vidio sam čovjeka s teleskopom" is as ambiguous as the English — who had the telescope? — and a comedian will choose the reading you did not. The bare instrumental removes the doubt: "Vidio sam čovjeka teleskopom" can only mean I used it. Similarly, the vocative is a comic resource: calling someone by a mock-formal vocative is a joke in itself.',
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
        body: 'Croatian comedy leans heavily on switching into kajkavian or čakavian, or into a marked Dalmatian or Zagorje accent, for a line or two. It is a register shift rather than mockery — an educated speaker from Split doing a broad Split accent for effect is doing what a Londoner does with a stage cockney. Recognizing the switch is what lets you hear the joke rather than the dialect.',
        highlight: 'a dialect switch is a comic register, not a mistake',
      },
      {
        type: 'example',
        title: 'Jokes That Need the Grammar',
        items: [
          {
            hr: 'Sam sam sastavio taj stol.',
            en: 'I assembled that table by myself.',
            note: 'Two sams: sam "alone" first, then sam "I am", the auxiliary, in second position',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Pao je grad na Zagreb, pa su novine pisale da je grad pao na grad.',
            en: 'Hail fell on Zagreb, so the papers wrote that hail fell on the city.',
            note: 'grad (hail) and grad (city) — identical spelling, different accent',
          },
          {
            hr: 'Otišla je frizeru zbog kose, a susjed je u polje otišao s kosom.',
            en: 'She went to the hairdresser because of her hair, and the neighbor went into the field with a scythe.',
            note: 'kosa (hair) and kosa (scythe) — homographs separated by accent',
          },
          {
            hr: 'Za ručak je bio luk, a ispod luka mosta netko je pecao.',
            en: 'There was onion for lunch, and under the arch of the bridge someone was fishing.',
            note: 'luk (onion) and luk (arch) — one form, two meanings',
          },
          {
            hr: 'Dobili smo računčić od tisuću eura i lijepu kućicu s dvanaest soba.',
            en: 'We got a little bill for a thousand euros and a nice little house with twelve rooms.',
            note: 'Diminutives on things that cannot be small — the comic mismatch',
          },
          {
            hr: 'Gospodine profesore, izvolite vaš sendvič — rekao je bratu za stolom.',
            en: '"Professor, sir, your sandwich" — he said to his brother at the table.',
            note: 'A mock-formal vocative as a joke in itself',
          },
          {
            hr: 'Kad je konobar iz Splita zapjevao na dalmatinskom, svi su za stolom prasnuli u smijeh.',
            en: 'When the waiter from Split broke into song in Dalmatian, everyone at the table burst out laughing.',
            note: 'A switch into a marked regional register, done for effect',
          },
          {
            hr: 'Vidio sam čovjeka s dalekozorom — a tko je imao dalekozor, to ti neću reći.',
            en: 'I saw a man with a telescope — and who had the telescope, I am not telling you.',
            note: 'The instrumental phrase can attach to either party; the joke keeps both readings',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three ways to miss the joke. First, reading a diminutive literally: računčić is not a small bill — it is a large one being laughed at, and kućica may have twelve rooms. Second, hearing a dialect switch as an error and correcting it — an educated speaker doing a broad Split line is doing a register, not slipping. Third, assuming two identical spellings are one word: grad, kosa and luk each hide a second word behind the same letters, and the pun lives in the accent you cannot see on the page.',
        highlight: 'računčić is not a small bill',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Why does "Pao je grad" work as a pun?',
            options: [
              'grad has two genders',
              'grad means both city and hail, and only the accent differs',
              'pasti is biaspectual',
              'It rhymes',
            ],
            correct: 1,
            explanation:
              'The two words are spelled identically and differ in pitch accent, so speech separates them and writing does not — which is exactly the gap the joke exploits.',
          },
          {
            q: 'Complete the joke about a huge bill: "Stigao je ___ od tisuću eura."',
            options: ['račun', 'računčić', 'računina', 'računčina'],
            correct: 1,
            explanation:
              'The diminutive on something large is the comic instrument. The plain noun makes no joke, and the augmentatives point the other way.',
          },
          {
            q: 'Complete the mock-formal address to your brother: "___, izvolite sjesti."',
            options: [
              'Gospodine profesor',
              'Gospodine profesore',
              'Gospodin profesor',
              'Gospodinu profesoru',
            ],
            correct: 1,
            explanation:
              'Both words take the vocative: Gospodine profesore. The comic effect needs the full formal form; a nominative or dative is simply a case error.',
          },
          {
            q: 'Which pair shows the same spelling with two accents and two meanings?',
            options: [
              'kosa (hair) / kosa (scythe)',
              'kuća / kućica',
              'pas / psa',
              'grad / gradovi',
            ],
            correct: 0,
            explanation:
              'kosa and kosa are homographs distinguished by pitch accent alone. The other pairs are a diminutive, a case form and a plural of one word.',
          },
          {
            q: 'A Split colleague drops into broad Dalmatian for one line and everyone laughs. Which reaction is the mistake?',
            options: [
              'Laughing along',
              'Recognizing the register switch',
              'Correcting the dialect to standard',
              'Asking what a word meant',
            ],
            correct: 2,
            explanation:
              'The switch is a comic register, like a Londoner doing stage cockney. Correcting it treats a deliberate move as an error and misses the joke entirely.',
          },
          {
            q: 'What is the augmentative "kućerina" doing when said of a modest house?',
            options: [
              'Describing a large house accurately',
              'The reverse comic mismatch — a big word for a small thing',
              'Marking a dialect',
              'Marking respect',
            ],
            correct: 1,
            explanation:
              'The augmentative does the reverse of the diminutive: applied to something modest it produces the same mismatch from the other side.',
          },
          {
            q: 'Complete: "Sam ___ sastavio stol." (I assembled the table by myself.)',
            options: ['sam', 'sama', 'samo', 'se'],
            correct: 0,
            explanation:
              'Two sams side by side: sam "alone", then sam "I am", the auxiliary, in second position. sama would be feminine, samo means only, and se has no place in the phrase.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Wordplay — What to Keep',
        points: [
          'Many puns turn on pitch accent, invisible in writing: grad, kosa, luk',
          'Case endings can be the trap, because the ending fixes the role',
          'A diminutive applied to something large is the standard comic mismatch',
          'A switch into kajkavian or a marked accent is a comic register, not mockery',
          'Missing a joke is normal at this level; recognizing the device is the achievable goal',
        ],
      },
    ],
  },

  // ── 17. Journalistic style ────────────────────────────────────────────────
  {
    id: 'publicisticki-stil',
    title: 'Journalistic Style',
    level: 'C1',
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
            'Calque, now fully naturalized',
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
        body: 'Journalism borrows the administrative style\'s nominalizations for compression — "zbog povećanja cijena" rather than "jer su cijene porasle" — because a headline has no room for a clause. It also borrows its agentlessness, and that is where the reader should be alert: "donesena je odluka" says a decision was made without saying by whom, and in a news text that omission is sometimes deliberate.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Ministar ističe da je reforma nužna, dok sindikati tvrde da je preuranjena.',
            en: 'The minister stresses that the reform is necessary, while the unions claim it is premature.',
            note: 'ističe endorses the importance; tvrde marks the claim as contested',
          },
          {
            hr: 'Prema neslužbenim informacijama, odluka je donesena još u ponedjeljak.',
            en: 'According to unofficial information, the decision was taken as early as Monday.',
            note: 'The standard hedge plus an agentless passive',
          },
          {
            hr: 'Kako doznajemo, istraga je proširena na još dvije osobe, navodno bliske upravi.',
            en: 'As we learn, the investigation has been widened to two more people, allegedly close to the management.',
            note: 'The paper speaks in the first person plural; navodno distances it from the claim',
          },
          {
            hr: 'Zbog povećanja cijena goriva prijevoznici najavljuju poskupljenje karata od 1. rujna.',
            en: 'Because of the rise in fuel prices, carriers announce a fare increase from 1 September.',
            note: 'Nominalization (povećanja, poskupljenje) compresses a clause into a phrase',
          },
          {
            hr: 'Sabor izglasao proračun; oporba napustila dvoranu.',
            en: 'Parliament passes budget; opposition walks out.',
            note: 'Headline register — the auxiliary je dropped twice',
          },
          {
            hr: 'Policija je priopćila da su uhićene tri osobe, a ime osumnjičenika nije objavljeno.',
            en: "The police announced that three people have been arrested, and the suspect's name has not been released.",
            note: 'priopćiti for the official response; agentless nije objavljeno',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'An article says "Oporba tvrdi da…" rather than "Oporba kaže da…". What has the paper signaled?',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three errors from reading news Croatian as ordinary Croatian. First, carrying the headline register into running text: "Vlada usvojila proračun." inside an article is incomplete — restore the je. Second, reading tvrdi as says: tvrdi ≠ kaže — it marks the claim as contested. Third, inflating a calm source: writing "upozorava" when the source merely observed adds an alarm the source never sounded; the neutral verb is kaže or navodi.',
        highlight: 'tvrdi ≠ kaže',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete the neutral attribution: "Ministar ___ da je reforma dogovorena."',
            options: ['kaže', 'tvrdi', 'upozorava', 'ističe'],
            correct: 0,
            explanation:
              'kaže is the neutral verb. tvrdi marks the claim as contested, upozorava adds a warning, and ističe signals that the paper thinks it important.',
          },
          {
            q: 'Complete the headline: "Vlada ___ izmjene zakona."',
            options: ['je usvojila', 'usvojila', 'usvoji', 'usvojivši'],
            correct: 1,
            explanation:
              'Headlines drop the auxiliary: Vlada usvojila izmjene zakona. With je it is a running-text sentence, and the other forms are not headline shapes.',
          },
          {
            q: 'Which sentence conceals who made the decision?',
            options: [
              'Vlada je donijela odluku.',
              'Ministar je donio odluku.',
              'Oporba je kritizirala odluku.',
              'Donesena je odluka.',
            ],
            correct: 3,
            explanation:
              'The agentless passive says a decision was made and nobody by whom. In a news text that omission is sometimes deliberate, which is why the reader should notice it.',
          },
          {
            q: 'Which sentence is incomplete inside a running article?',
            options: [
              'Sabor je izglasao proračun.',
              'Sabor izglasao proračun.',
              'Proračun je izglasan u Saboru.',
              'Sabor je proračun izglasao jučer.',
            ],
            correct: 1,
            explanation:
              'Without je the sentence is a headline, not a sentence. The other three all carry the auxiliary and work anywhere in the article.',
          },
          {
            q: 'What does "doznaje se" signal about the source?',
            options: [
              'The paper invented it',
              'The source is protected — the construction is agentless',
              'The minister said it',
              'It is a direct quotation',
            ],
            correct: 1,
            explanation:
              'doznaje se — it is learned — names nobody, which is its function: the paper reports without exposing who told it.',
          },
          {
            q: 'A source observes a trend calmly. Which verb misreports it?',
            options: ['navodi', 'kaže', 'upozorava', 'primjećuje'],
            correct: 2,
            explanation:
              'upozoravati means to warn, which adds an alarm the source did not sound. Attribution verbs carry endorsement and must be chosen for meaning, not variety.',
          },
          {
            q: 'Complete the set phrase: "Ministarstvo se oglasilo ___."',
            options: ['priopćenje', 'priopćenjem', 'priopćenja', 's priopćenjem'],
            correct: 1,
            explanation:
              'oglasiti se takes a bare instrumental: oglasilo se priopćenjem. The nominative and genitive fit nothing, and s would make the statement a companion.',
          },
        ],
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

  // ── 19. Literary style ────────────────────────────────────────────────────
  {
    id: 'knjizevni-stil',
    title: 'How Literary Croatian Works',
    level: 'C1',
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
        body: "Croatian, like English, lets a narrator slide into a character's thoughts without quotation marks or a reporting verb: \"Sjeo je i pogledao kroz prozor. Kako je sve to postalo besmisleno.\" The second sentence is the character thinking, in the narrator's grammar. Missing the shift means attributing a character's judgment to the author, which changes the meaning of whole chapters.",
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
        body: "A novel set in Zagreb will give a character kajkavian speech; one set on an island will give čakavian. This is characterization, not local color: the reader is told the character's origin, class and generation in a single line. Krleža does it constantly. A learner who skips the dialect passages loses exactly the information the author put there.",
        highlight: 'dialect in dialogue = biography in one line',
      },
      {
        type: 'rule',
        title: 'The Sentence Is Longer, Not Sloppier',
        body: "Croatian literary sentences run long — Krleža's famously so — with subordination that a style guide would refuse in a report. That is deliberate: length in literature builds a pressure that a period releases. Read for the main clause first, then reread; the syntax is a structure, not a tangle, and the parsing habits from the C1 clause lesson are exactly what you need.",
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
            en: '"What is the matter with you?" the neighbor asked him.',
            note: 'Kajkavian kaj in dialogue places her immediately',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Uđe u kuću, spusti torbu i zastade na pragu kuhinje.',
            en: 'He came into the house, put down his bag and stopped on the kitchen threshold.',
            note: 'A sequence of aorists — sudden, elevated',
          },
          {
            hr: 'Ona šutjaše i gledaše kroz prozor, kao da čekaše nekoga tko neće doći.',
            en: 'She was silent and looked out of the window, as if waiting for someone who would not come.',
            note: 'Imperfects for a sustained past state',
          },
          {
            hr: 'Zatvorio je vrata. Nikad više neće ući u tu sobu, nikad.',
            en: 'He closed the door. He would never enter that room again, never.',
            note: "Free indirect style — the second sentence is his thought in the narrator's grammar",
          },
          {
            hr: '— Ča ćeš, tako je moralo bit — reče stari ribar.',
            en: '"What can you do, it had to be that way," said the old fisherman.',
            note: 'Čakavian dialogue places him; the aorist reče frames it',
          },
          {
            hr: 'Dođe proljeće, i s njim glasovi koje selo nije čulo od rata.',
            en: 'Spring came, and with it voices the village had not heard since the war.',
            note: 'Aorist plus inversion — the event foregrounded',
          },
          {
            hr: 'Iako je znao da ga nitko ne čeka, i premda ga je od grada dijelio samo sat hoda, ostade tamo gdje jest, jer se bojao onoga što bi zatekao.',
            en: "Although he knew nobody was waiting for him, and though only an hour's walk separated him from the town, he stayed where he was, because he feared what he would find.",
            note: 'A long literary sentence: the main clause is ostade tamo gdje jest',
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
          "A judgment or resolution appearing in the narrator's grammar immediately after a character's action is the signature of free indirect style. Reading it as the narrator's own assertion attributes the character's certainty to the author.",
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
          'Dialect in dialogue is characterization — it carries biography compactly. It is not a judgment about education: kajkavian is the everyday speech of a large and entirely educated part of the country, including Zagreb.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: "Three reading errors that change the meaning of a chapter. First, taking free indirect thought as the narrator's fact — \"Nikad se više neće vratiti\" after a character's action is the character's certainty, not the author's. Second, reading unfamiliar forms as errors: reče, dođe, bijaše — a chosen register, not a misprint. Third, skipping the dialect lines in dialogue, which is where the author put the character's origin, class and generation.",
        highlight: 'reče, dođe, bijaše — a chosen register, not a misprint',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete in the aorist: "On ___ i ode." (said)',
            options: ['reče', 'rekao je', 'rekne', 'govoraše'],
            correct: 0,
            explanation:
              'reče is the aorist of reći and pairs with ode. rekao je is the perfect, rekne a present form, and govoraše the imperfect of a different verb.',
          },
          {
            q: 'Complete in the imperfect: "Sjedila je uz prozor i ___." (was looking, sustained)',
            options: ['pogleda', 'gledaše', 'pogledala', 'gledala je'],
            correct: 1,
            explanation:
              'gledaše is the imperfect — sustained, lyrical. pogleda is an aorist, gledala je the neutral perfect, and pogledala lacks its auxiliary.',
          },
          {
            q: 'Which sentence is free indirect style?',
            options: [
              'Rekao je da se nikad neće vratiti.',
              'Sjeo je. Kako je sve to postalo besmisleno.',
              '„Nikad se neću vratiti", rekao je.',
              'Nikad se nije vratio, kaže pripovjedač.',
            ],
            correct: 1,
            explanation:
              "A judgment in the narrator's grammar immediately after the character's action, with no reporting verb or quotation marks, is the signature of free indirect style.",
          },
          {
            q: 'A reader takes "Kaj ti je?" in a Zagreb novel as a typo for "Što ti je?". What has gone wrong?',
            options: [
              'Nothing — it is a typo',
              'They have missed dialect used as characterization',
              'The novel is in Slovene',
              'The character is uneducated',
            ],
            correct: 1,
            explanation:
              'Kajkavian in dialogue places the character by origin and generation in one line. It says nothing about education — kajkavian is the everyday speech of Zagreb.',
          },
          {
            q: 'What does the aorist "Dođe zima." signal, compared with "Došla je zima."?',
            options: [
              'A future event',
              'A mistake',
              'Elevation and suddenness — a chosen literary register',
              'Reported speech',
            ],
            correct: 2,
            explanation:
              'The same event in the perfect would read as reportage; the aorist elevates it and foregrounds it. When you meet it, the author has chosen a register.',
          },
          {
            q: 'How do you parse a very long literary sentence?',
            options: [
              'Read it word by word',
              'Find the main clause first, then reread',
              'Skip it',
              'Translate each clause into English first',
            ],
            correct: 1,
            explanation:
              'Length in literature builds a pressure that the period releases; the syntax is a structure. Locating the main clause first turns the tangle into a set of decisions you can follow.',
          },
          {
            q: 'Complete: "Tada ___ mlad i pun nade." (imperfect of biti)',
            options: ['bio je', 'bi', 'bude', 'bijaše'],
            correct: 3,
            explanation:
              'bijaše is the imperfect of biti, the tense of sustained past states in literature. bio je is the perfect, bi the aorist or conditional, bude a present form.',
          },
        ],
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

  // ── 21. Reading older Croatian ────────────────────────────────────────────
  {
    id: 'stari-tekstovi',
    title: 'Reading Older Croatian',
    level: 'C1',
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
          [
            'cs, ch, s, sz',
            'č, č / ć, š, s',
            'Pre-Gaj spelling: cs and ch stood for č and ć, a plain s often for š, and sz for s',
          ],
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
        body: 'The aorist and imperfect are the ordinary narrative tenses of these texts, and the pluperfect appears freely. If you skipped those lessons because the forms felt academic, this is where they pay: without them a page of Kačić is a wall. Reče, dođe, bijaše, gledaše — recognizing them is most of the battle.',
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
        body: 'Read for the verbs first — they carry the tense system and most of the difficulty. Then resolve the spelling by sound. Then look up only the words that block the sentence, not every unfamiliar one. Most nineteenth-century Croatian is readable on a second pass at the level you have reached; sixteenth-century Croatian usually needs an edition with notes, and using one is not a failure.',
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
            hr: 'Jur je svanulo, a lipa je zora nad gradom.',
            en: 'It has already dawned, and the dawn over the town is beautiful.',
            note: 'A line written for this lesson in the older manner: jur = već, lipa = lijepa in ikavian',
          },
        ],
      },
      {
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Bijahu tada u gradu tri crkve, a četvrtu bijahu započeli graditi prije rata.',
            en: 'There were then three churches in the town, and a fourth they had begun to build before the war.',
            note: 'Imperfect bijahu, then bijahu + participle as a pluperfect',
          },
          {
            hr: 'Kad dođoše na vrh, ugledaše more i zastadoše bez riječi.',
            en: 'When they came to the top, they saw the sea and stopped without a word.',
            note: 'Three aorists in the plural, -oše',
          },
          {
            hr: 'Knjigu ti šaljem po glasniku, a odgovor jur očekujem.',
            en: 'I am sending you this letter by messenger, and already expect a reply.',
            note: 'knjiga in its older sense of letter; jur = već',
          },
          {
            hr: 'Bio sam već pročitao pismo kad je stigao drugi glasnik.',
            en: 'I had already read the letter when the second messenger arrived.',
            note: 'The pluperfect as ordinary narrative',
          },
          {
            hr: 'Vazda su ga pamtili kao čovjeka koji ne bijaše nikoga iznevjerio.',
            en: 'They always remembered him as a man who had never let anyone down.',
            note: 'vazda = uvijek; ne bijaše iznevjerio is a negated pluperfect',
          },
          {
            hr: 'Pjesnik pisaše na čakavskom, kao što su tada pisali svi u Splitu.',
            en: 'The poet wrote in čakavian, as everyone in Split wrote at the time.',
            note: 'Imperfect pisaše; čakavian as the literary language of its period',
          },
          {
            hr: 'Rukopis bijaše star, slova čudna, ali kad ga pročitah naglas, riječi postadoše jasne.',
            en: 'The manuscript was old, the letters strange, but when I read it aloud the words became clear.',
            note: 'First-person aorist pročitah; postadoše — and the method itself',
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
          'Čakavian and kajkavian both carried complete literary traditions before the nineteenth-century standardization. Treating them as substandard reads the choice of štokavian backwards onto three centuries that had not yet made it.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three ways an older text defeats a reader who could follow it. First, reading the digraphs as errors: cs, ch and sz are č, ć and s in pre-Gaj spelling — sound it out. Second, treating the tense forms as unknown words: bijaše = imperfect of biti, not a new word, and reče, dođe are aorists, not misprints. Third, reading a čakavian or kajkavian text as substandard — before štokavian was chosen, both were literary languages with full traditions.',
        highlight: 'bijaše = imperfect of biti, not a new word',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'A 1790 text has "szrecha". What is the word?',
            options: ['sreća', 'srca', 'strjeha', 'srijeda'],
            correct: 0,
            explanation:
              'sz is s and ch is ć in the borrowed conventions of the time: szrecha = sreća. Reading it aloud resolves it, because the language underneath is ordinary Croatian.',
          },
          {
            q: 'Complete with the aorist plural: "Oni ___ na trg i zastadoše."',
            options: ['dođu', 'dođoše', 'dolazili su', 'dođe'],
            correct: 1,
            explanation:
              'The third person plural aorist of doći is dođoše, matching zastadoše. dođu is present, dolazili su the perfect, dođe the singular.',
          },
          {
            q: 'What does "vazda" mean in "Vazda ću te pamtiti"?',
            options: ['never', 'always', 'everywhere', 'already'],
            correct: 1,
            explanation:
              'vazda is the older word for uvijek. jur is the one meaning already, and neither survives in ordinary modern speech.',
          },
          {
            q: 'Which sentence is a pluperfect?',
            options: [
              'Bijaše otišao prije zore.',
              'Otišao je prije zore.',
              'Odlazi prije zore.',
              'Ode prije zore.',
            ],
            correct: 0,
            explanation:
              'bijaše + participle is the pluperfect built on the imperfect, common in older prose. The others are the perfect, the present and the aorist.',
          },
          {
            q: 'Which reading is the mistake?',
            options: [
              'Reading "ie" as ije/je',
              'Reading "reče" as the aorist',
              "Reading Marulić's čakavian as a dialect curiosity",
              'Reading "jest" as the full form of je',
            ],
            correct: 2,
            explanation:
              'Čakavian was a full literary language of its period. The other three are exactly the resolutions the lesson teaches.',
          },
          {
            q: 'In an older text "knjiga" can mean what, besides book?',
            options: ['a letter', 'a church', 'a scribe', 'a town'],
            correct: 0,
            explanation:
              'The older sense letter survives in set phrases and in these texts. pisac is the word whose sense narrowed from scribe to writer.',
          },
          {
            q: 'What is the recommended order of attack on a nineteenth-century text?',
            options: [
              'Look up every unfamiliar word first',
              'Verbs first, then sound out the spelling, then look up only what blocks',
              'Translate the title, then guess',
              'Read only the dialogue',
            ],
            correct: 1,
            explanation:
              'The verbs carry the tense system and most of the difficulty; the spelling resolves by sound; and only the words that block a sentence are worth the dictionary.',
          },
        ],
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
    title: 'Synthesizing Several Sources',
    level: 'C1',
    subtitle: 'Turning three texts that disagree into one coherent account',
    icon: '🧵',
    duration: '~7 min',
    color: '#0d9488',
    bg: '#f0fdfa',
    slides: [
      {
        type: 'intro',
        title: 'The Descriptor, Taught Directly',
        body: '"Can summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation." That sentence is how the CEFR describes the highest level of proficiency, and it names a skill no earlier lesson has taught. Summarizing ONE text you have already practiced. Synthesizing several — especially several that disagree — needs its own vocabulary and its own structure.',
        icon: '🧵',
      },
      {
        type: 'rule',
        title: 'Synthesis Is Not a Sequence of Summaries',
        body: 'The failure mode is obvious once named: three paragraphs, one per source, joined by "a drugi autor kaže". That is a list, not a synthesis. A synthesis is organized by IDEA, not by source — each paragraph takes one point and reports what every source says about it. The sources appear as evidence inside your structure rather than as the structure itself.',
        highlight: 'organize by idea, not by source',
      },
      {
        type: 'table',
        title: 'The Vocabulary of Agreement and Divergence',
        headers: ['Croatian', 'English', 'Use'],
        rows: [
          ['Svi se izvori slažu da…', 'All the sources agree that…', 'Establishing common ground'],
          ['Za razliku od X, Y tvrdi…', 'Unlike X, Y claims…', 'Marking divergence'],
          ['Dok X naglašava…, Y upozorava…', 'While X emphasizes…, Y warns…', 'Balanced contrast'],
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
            en: 'While the first report emphasizes seasonal factors, the second warns of structural ones.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Oba autora polaze od istih podataka, ali ih tumače suprotno.',
            en: 'Both authors proceed from the same data, but interpret them in opposite ways.',
            note: 'Shared premise stated before the divergence',
          },
          {
            hr: 'Za razliku od prvog istraživanja, drugo ne nalazi vezu između dohotka i zdravlja.',
            en: 'Unlike the first study, the second finds no link between income and health.',
            note: 'za razliku od + genitive — the divergence frame',
          },
          {
            hr: 'Razlika je prije u naglasku nego u sadržaju: svi izvori priznaju rast troškova.',
            en: 'The difference is one of emphasis rather than substance: all the sources acknowledge the rise in costs.',
            note: 'Deflating a false dispute',
          },
          {
            hr: 'Nijedan od triju izvora ne navodi kako je uzorak odabran.',
            en: 'None of the three sources states how the sample was selected.',
            note: 'The gap reported as a finding; triju is the declined genitive',
          },
          {
            hr: 'Dok ministarstvo ističe pad nezaposlenosti, sindikat upozorava na rast privremenih ugovora.',
            en: 'While the ministry stresses the fall in unemployment, the union warns of the rise in temporary contracts.',
            note: 'Dok…, … balances two attributions, each with its own verb',
          },
          {
            hr: 'Svi se izvori slažu oko dijagnoze, a razilaze se oko lijeka.',
            en: 'All the sources agree on the diagnosis, and diverge on the cure.',
            note: 'slagati se oko / razilaziti se oko + genitive',
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
          'Organization by source is the giveaway. A synthesis takes one idea per paragraph and reports what each source contributes to it, so the sources appear as evidence inside your structure rather than supplying the structure themselves.',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three synthesis faults. First, one paragraph per source joined by "a drugi autor kaže" — that is a list; organize by idea. Second, the wrong case after the divergence frame: "za razliku od prvi izvještaj" — za razliku od prvog izvještaja — genitive. Third, inflating a source to vary the verb: "upozorava" for a source that merely navodi misreports it — vary the verb for meaning, never for variety.',
        highlight: 'za razliku od prvog izvještaja — genitive',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Za razliku ___, drugi izvor ne spominje troškove."',
            options: ['od prvi izvor', 'od prvog izvora', 'prvog izvora', 's prvim izvorom'],
            correct: 1,
            explanation:
              'za razliku od governs the genitive: od prvog izvora. Without od the phrase is broken, and s takes the instrumental of accompaniment.',
          },
          {
            q: 'Complete: "Svi se izvori ___ da je pad stvaran."',
            options: ['slažu', 'slože', 'slagaju', 'složu'],
            correct: 0,
            explanation:
              'slagati se in the present is slažu se. slože is the perfective present, and the other two are not forms of the verb.',
          },
          {
            q: 'Which sentence opens a synthesis correctly?',
            options: [
              'Prvi autor kaže da je pad privremen.',
              'Svi se izvori slažu da je pad zabilježen; razilaze se oko uzroka.',
              'Drugi autor kaže nešto drugo.',
              'Treći izvor nema mišljenje.',
            ],
            correct: 1,
            explanation:
              'Common ground first, then the split, in one sentence. Opening on one source, or on a disagreement, leaves the reader unable to judge how far apart the sources are.',
          },
          {
            q: 'Which structure is the failure mode?',
            options: [
              'One paragraph per idea, each reporting all sources',
              'Common ground first, divergence second',
              'One paragraph per source, joined by "a drugi autor kaže"',
              'A closing paragraph naming what no source covers',
            ],
            correct: 2,
            explanation:
              'Organization by source is a sequence of summaries, not a synthesis. The other three are the structure the lesson teaches.',
          },
          {
            q: 'What does "Razlika je prije u naglasku nego u sadržaju" do?',
            options: [
              'Says the sources contradict each other',
              'Deflates a false dispute — they differ in emphasis, not substance',
              'Reports a gap',
              'Introduces a quotation',
            ],
            correct: 1,
            explanation:
              'The sentence tells the reader that an apparent disagreement is a difference of emphasis. It is the honest description when the sources share the substance.',
          },
          {
            q: 'Why write "Nijedan izvor ne razmatra dugoročne troškove"?',
            options: [
              'To admit failure',
              'Because a gap is a finding only the person who read everything can supply',
              'To pad the text',
              'It is a required formula',
            ],
            correct: 1,
            explanation:
              'What no source addresses is real content. Learners suppress it as an admission of incompleteness; in fact it is the part of the work only the person who read every source can do.',
          },
          {
            q: 'Complete: "___ autora polaze od iste pretpostavke." (both)',
            options: ['Obje', 'Oba', 'Obama', 'Obih'],
            correct: 1,
            explanation:
              'oba is the masculine form for two male or mixed authors and takes the genitive singular autora. obje is feminine, obama is the dative, and obih is not a standard form.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Synthesis — What to Keep',
        points: [
          'Organize by idea, never one paragraph per source',
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
    level: 'C1',
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
            en: 'From this he concludes that the sample is representative and the finding can be generalized.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Autorica polazi od pretpostavke da tržište samo ispravlja svoje pogreške.',
            en: 'The author proceeds from the assumption that the market corrects its own mistakes.',
            note: 'The premise named as a premise; polaziti od + genitive',
          },
          {
            hr: 'Iz toga zaključuje da svaka regulacija samo usporava oporavak.',
            en: 'From this she concludes that every regulation only slows the recovery.',
            note: 'The conclusion, marked as following from the premise',
          },
          {
            hr: 'Ključni je korak u tom rasuđivanju prešutna tvrdnja da su svi sudionici jednako obaviješteni.',
            en: 'The key step in that reasoning is the tacit claim that all participants are equally informed.',
            note: 'The inference located; the clitic je after Ključni',
          },
          {
            hr: 'Najjača verzija toga argumenta bila bi da regulacija škodi i kad je dobro zamišljena.',
            en: 'The strongest version of that argument would be that regulation does harm even when it is well designed.',
            note: 'Strengthening before rejecting',
          },
          {
            hr: 'Do ovdje autorica; ono što slijedi moj je prigovor na drugi korak.',
            en: 'So far the author; what follows is my objection to the second step.',
            note: 'The boundary marker, then the objection located at one step',
          },
          {
            hr: 'Ako sam Vas dobro razumio, tvrdite da je problem u podacima, a ne u metodi — je li tako?',
            en: 'If I have understood you correctly, you claim the problem is in the data and not in the method — is that right?',
            note: 'Confirming the reconstruction before contesting it',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three reconstruction faults. First, attacking a convenient version — a reader who sees the easy target loses trust in the whole rejection; state the strongest version first. Second, no boundary marker, so a long faithful reconstruction reads as your own position; end it with "Toliko o njegovu stajalištu." Third, a case slip in the opening formula: "polazi od pretpostavka" — polazi od pretpostavke da… — genitive after od.',
        highlight: 'polazi od pretpostavke da… — genitive after od',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "Autor polazi od ___ da su podaci potpuni."',
            options: ['pretpostavka', 'pretpostavku', 'pretpostavke', 'pretpostavkom'],
            correct: 2,
            explanation:
              'od takes the genitive: od pretpostavke. The nominative, accusative and instrumental do not follow od.',
          },
          {
            q: 'Complete: "Iz toga ___ da je uzorak reprezentativan."',
            options: ['zaključuje', 'zaključi', 'zaključio', 'zaključujući'],
            correct: 0,
            explanation:
              "The present zaključuje reports the author's step. zaključi is perfective, zaključio lacks its auxiliary, and the verbal adverb cannot be the main verb.",
          },
          {
            q: 'Which sentence marks the boundary of the reconstruction?',
            options: [
              'Autor polazi od pretpostavke da…',
              'Toliko o njegovu stajalištu.',
              'Najjača verzija toga argumenta bila bi…',
              'Iz toga zaključuje da…',
            ],
            correct: 1,
            explanation:
              "Toliko o njegovu stajalištu tells the reader the faithful restatement has ended and the writer's own voice begins. The others open, strengthen or conclude the reconstruction.",
          },
          {
            q: 'A writer reconstructs the weakest version of a position and refutes it. What is the fault?',
            options: [
              'Grammar',
              'It costs credibility — an informed reader sees the easy target',
              'Too long',
              'Wrong register',
            ],
            correct: 1,
            explanation:
              "Refuting a weak version is visible and cheap. Strengthening before rejecting is what earns a reader's trust in the rejection.",
          },
          {
            q: 'What does "Ako sam dobro razumio, tvrdnja glasi…" do?',
            options: [
              'Concedes the argument',
              'Checks the reconstruction before objecting',
              'Introduces the conclusion',
              'Ends the text',
            ],
            correct: 1,
            explanation:
              'It confirms the restatement with its owner before contesting it — protection against the most damaging outcome, a refutation of something nobody said.',
          },
          {
            q: 'Complete: "Ključni je korak u tom ___ prešutna tvrdnja."',
            options: ['rasuđivanje', 'rasuđivanju', 'rasuđivanja', 'rasuđivanjem'],
            correct: 1,
            explanation:
              'u with a location takes the locative: u tom rasuđivanju. The nominative, genitive and instrumental do not follow u in this sense.',
          },
          {
            q: 'Where should the objection be located?',
            options: [
              'At the conclusion in general',
              'At a specific step of the reasoning',
              "At the author's tone",
              'Nowhere — reconstruction is enough',
            ],
            correct: 1,
            explanation:
              'Once premise, inference and conclusion are laid out, the objection goes to the step that fails. Objecting to the conclusion in general contests nothing the author can answer.',
          },
        ],
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
    level: 'C1',
    subtitle: 'Choosing between near-synonyms that are not actually synonyms',
    icon: '🔎',
    duration: '~7 min',
    color: '#1e40af',
    bg: '#eff6ff',
    slides: [
      {
        type: 'intro',
        title: 'The Phrase the Descriptor Uses',
        body: '"Differentiating finer shades of meaning even in the most complex situations." At this level vocabulary stops being about knowing more words and becomes about choosing between words you already know — where a dictionary gives you three Croatian options for one English word and does not say which one a native speaker would use here.',
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
            'učiti = study; naučiti = learn (perfective); studirati = be in college',
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
        body: 'Znam da dolazi — I know that he is coming, a fact. Poznajem ga — I know him, acquaintance. Poznaje gradivo — he knows the material, in the sense of being at home in it. Znati is also heard for people in everyday speech — "Znam ga iz škole" is ordinary Croatian — but poznavati is the precise verb for acquaintance and the one careful writing prefers, while a fact can only ever be znati: "Poznajem da dolazi" is impossible. English collapses the distinction; Croatian keeps it where it matters.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Poznajem taj kraj kao svoj džep, ali ne znam gdje je nova bolnica.',
            en: 'I know that area like the back of my hand, but I do not know where the new hospital is.',
            note: 'poznavati for a place or field; znati for a fact',
          },
          {
            hr: 'Umije li on voziti? — Zna, ali danas ne može jer je popio čašu vina.',
            en: 'Can he drive? — He can, but not today, because he has had a glass of wine.',
            note: 'umjeti (bookish), znati (learned skill), moći (circumstances)',
          },
          {
            hr: 'Liječnica je postavila dijagnozu, a doktor Horvat, kako ga svi zovu, vodio je računa o terapiji.',
            en: 'The doctor made the diagnosis, and Doctor Horvat, as everyone calls him, looked after the treatment.',
            note: 'liječnica is the professional term; doktor the everyday one; voditi računa o',
          },
          {
            hr: 'Reci mi istinu — nemoj mi govoriti ono što želim čuti.',
            en: 'Tell me the truth — do not tell me what I want to hear.',
            note: 'reći for a single act; govoriti for the ongoing one, imperfective under negation',
          },
          {
            hr: 'Vidjela sam ga u gradu, ali nisam ga gledala dovoljno dugo da budem sigurna.',
            en: 'I saw him in town, but I did not look at him long enough to be sure.',
            note: 'vidjeti = perceive; gledati = direct attention',
          },
          {
            hr: 'Učio je cijelu noć, ali nije naučio ništa; studira medicinu treću godinu.',
            en: 'He studied all night but learned nothing; he is in his third year of medicine.',
            note: 'učiti (study), naučiti (learn, perfective), studirati (be in college)',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'How do you say "I know Ana" in Croatian?',
        options: ['Znam o Ani.', 'Poznajem Anu.', 'Znam za Anu.', 'Umijem Anu.'],
        correct: 1,
        explanation:
          'Poznavati is the precise verb for a person you are acquainted with. "Znam o Ani" is knowing facts about her, "znam za Anu" is knowing of her, and umjeti is a skill.',
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
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three word choices that mark a speaker as foreign. First, poznavati for a fact: Znam da dolazi, ne "poznajem da dolazi" — a fact is always znati, and poznavati is the precise verb for people and fields. Second, moći for a learned skill: "Mogu plivati" says the water is available; the acquired ability is Znam plivati. Third, a collocation translated from English: "napraviti odluku" — decisions are donijeti odluku, questions postaviti pitanje, and care is voditi računa.',
        highlight: 'Znam da dolazi, ne "poznajem da dolazi"',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete: "___ ga još iz škole." (I have known him)',
            options: ['Upoznajem', 'Poznajem', 'Umijem', 'Znam za'],
            correct: 1,
            explanation:
              'Acquaintance with a person is poznavati. upoznajem is "I am getting to know", which cannot run on since school, znam za means I know of him, and umjeti is a skill.',
          },
          {
            q: 'Complete: "___ plivati, naučila sam kao dijete."',
            options: ['Mogu', 'Znam', 'Smijem', 'Trebam'],
            correct: 1,
            explanation:
              "A learned ability is znati: Znam plivati. moći speaks of today's circumstances, smjeti of permission, trebati of need.",
          },
          {
            q: 'Complete the collocation: "Trebamo ___ pitanje upravi."',
            options: ['dati', 'napraviti', 'postaviti', 'staviti'],
            correct: 2,
            explanation:
              'Questions are postaviti pitanje. The other verbs all mean give, make or put in some sense and none collocates with pitanje.',
          },
          {
            q: 'Which sentence uses both verbs in their own sense?',
            options: [
              'Znam ga, ali ne poznajem gdje radi.',
              'Poznajem ga, ali ne znam gdje radi.',
              'Poznajem da radi ovdje.',
              'Znam ga, ali ne znam poznavati gdje radi.',
            ],
            correct: 1,
            explanation:
              'poznajem ga for the person, ne znam gdje for the fact. The other sentences swap the verbs or produce forms no speaker uses.',
          },
          {
            q: 'Which collocation is wrong?',
            options: ['donijeti odluku', 'voditi računa', 'postaviti pitanje', 'držati računa'],
            correct: 3,
            explanation:
              'Care is voditi računa, never držati računa. The other three are the fixed pairings the lesson lists.',
          },
          {
            q: 'What does "Ne mogu plivati danas" say, compared with "Ne znam plivati"?',
            options: [
              'The same thing',
              "Today's circumstances prevent it, versus never having learned",
              'The speaker forgot',
              'Nothing — both are wrong',
            ],
            correct: 1,
            explanation:
              'moći is possibility under the circumstances; znati is the acquired skill. The two sentences make different claims about the speaker.',
          },
          {
            q: 'Which is the practical test for choosing between near-synonyms?',
            options: [
              'The dictionary definition',
              'What the word collocates with',
              'Word length',
              'Frequency in English',
            ],
            correct: 1,
            explanation:
              'Ask what the word goes with, not what it means. The collocation says whether a native speaker would use it here, and it is the faster test.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Finer Shades — What to Keep',
        points: [
          'a fact is always znati; poznavati is the precise verb for people and fields',
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
    level: 'C1',
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
            'Universal, and universally recognized as such',
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
        body: 'Translating "um" and "you know" produces nothing usable. The Croatian equivalents are pa, ovaj, znači, kao and mislim. Ovaj is the closest to "er". Znači, literally "meaning", has drifted into a pure filler and is heavily used. Overusing znači is a recognized verbal tic that speakers are teased for — which tells you exactly how native it sounds.',
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
        body: 'The skilled move is not to reach for the most complex structure available but to notice when a complex one is failing and drop to a simpler one without stopping. A stalled subordinate clause can always become two short sentences. Nobody notices the simplification; everybody notices the stall.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Pa, ovaj, da budem iskren, nisam o tome razmišljao do ovog trenutka.',
            en: 'Well, er, to be honest, I had not thought about that until this moment.',
            note: 'Three genuine Croatian time-buyers in a row',
          },
          {
            hr: 'Ovisi o tome kako gledate; vratit ću se na to za minutu.',
            en: 'It depends how you look at it; I will come back to that in a minute.',
            note: 'Frames the answer, then defers cleanly without dropping it',
          },
          {
            hr: 'Rekao bih dvije stvari: prvo, cijene rastu; drugo, plaće ih ne prate.',
            en: 'I would say two things: first, prices are rising; second, wages are not keeping up.',
            note: 'A structure announced and finished',
          },
          {
            hr: 'To se dogodilo lani, odnosno, točnije rečeno, krajem pretprošle godine.',
            en: 'That happened last year — or rather, more precisely, at the end of the year before.',
            note: 'Repair in place with odnosno and točnije rečeno',
          },
          {
            hr: 'Znači, ako sam dobro razumio pitanje, zanima vas koliko će to trajati.',
            en: 'So, if I have understood the question, you want to know how long it will take.',
            note: 'znači as a filler, then a comprehension check',
          },
          {
            hr: 'Mislim, kako da kažem, situacija je složena — ali rješiva.',
            en: 'I mean, how shall I put it, the situation is complicated — but solvable.',
            note: 'Fillers, then a deliberately simple sentence',
          },
        ],
      },
      {
        type: 'quiz',
        q: 'Mid-sentence you realize your subordinate clause is going wrong. What does a fluent speaker do?',
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
        options: ['um', 'you know', 'ovaj', 'kao što'],
        correct: 2,
        explanation:
          'Ovaj is the standard Croatian hesitation marker, closest to English "er". Pa, znači and mislim are the others in heavy use. "Um" and "you know" are English, and "kao što" is a comparative conjunction rather than a filler.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three habits that make a fluent writer sound lost when speaking. First, translated fillers — "am" and "you know" in Croatian clothes; the real ones are pa, ovaj, znači and mislim. Second, restarting a sentence that has gone wrong — the audible loss of control; instead odnosno, točnije rečeno — repair in place. Third, promising three points and delivering one: announce two, and finish both.',
        highlight: 'odnosno, točnije rečeno — repair in place',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete the filler: "___, kako da kažem, to je složeno."',
            options: ['Um', 'Pa', 'Ah well', 'Jest da'],
            correct: 1,
            explanation:
              'Pa is the classic Croatian opener that buys a second. Um and ah well are English, and jest da introduces a concession, not a pause.',
          },
          {
            q: 'Complete the repair: "Stigli smo u pet, ___, malo prije pet."',
            options: ['točnije rečeno', 'nego', 'ali', 'iako'],
            correct: 0,
            explanation:
              'točnije rečeno corrects in place and sounds like precision. nego needs a negation before it, and ali and iako introduce a contrast rather than a correction.',
          },
          {
            q: 'Complete the announced structure: "Rekao bih ___ stvari. Prvo… Drugo…"',
            options: ['dvije', 'dva', 'dvoje', 'dvaju'],
            correct: 0,
            explanation:
              'stvar is feminine, so dvije stvari. dva is masculine, dvoje collective, and dvaju a genitive.',
          },
          {
            q: 'Which is a repair in place rather than a restart?',
            options: [
              'Podaci nisu… Dakle. Podaci nisu potpuni.',
              'Podaci nisu potpuni — odnosno, potpuni su, ali nisu usporedivi.',
              'Podaci… čekajte, počet ću ispočetka.',
              'Podaci nisu potpuni, kraj.',
            ],
            correct: 1,
            explanation:
              'odnosno turns a self-correction into a refinement. The first and third options restart audibly; the fourth simply stops.',
          },
          {
            q: 'Which is a translated English filler rather than a Croatian one?',
            options: ['ovaj', 'znači', 'am', 'pa'],
            correct: 2,
            explanation:
              'am is English um in Croatian spelling. ovaj, znači and pa are the genuine fillers native speakers use — and are teased for overusing.',
          },
          {
            q: 'What does "Vratit ću se na to" do?',
            options: [
              'Refuses the question',
              'Defers cleanly without dropping it',
              'Changes the subject',
              'Ends the conversation',
            ],
            correct: 1,
            explanation:
              "It parks a point without losing it, which keeps the listener's trust and buys the speaker time to finish the current thought.",
          },
          {
            q: 'A subordinate clause stalls mid-answer. What is the skilled move?',
            options: [
              'Stop and restart',
              'Finish it wrongly',
              'Drop to two short sentences without stopping',
              'Switch to English',
            ],
            correct: 2,
            explanation:
              'Nobody notices the simplification; everybody notices the stall. A stalled clause can always become two short sentences.',
          },
        ],
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

  // ── 30. Language and society ──────────────────────────────────────────────
  {
    id: 'jezik-i-drustvo',
    title: 'What a Language Choice Says About You',
    level: 'C1',
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
        body: 'The endpoint is not speaking one perfect Croatian. It is having several and choosing between them: standard for the report, relaxed for the coffee, a diminutive where warmth is wanted, the native coinage where precision is. When you can do that, the language has stopped being something you are learning and has become something you are using.',
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
            hr: 'Bog, šaljem ti onaj dokument, javi ako nešto fali.',
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
        type: 'example',
        title: 'More Examples in Context',
        items: [
          {
            hr: 'Poštovana gospođo Kovač, zahvaljujem Vam na brzom odgovoru i ostajem s poštovanjem.',
            en: 'Dear Mrs. Kovač, thank you for your prompt reply; yours sincerely.',
            note: 'Vam capitalized in a letter to one person; zahvaljivati na + locative',
          },
          {
            hr: 'Možemo na ti? — predložila je šefica nakon drugog sastanka.',
            en: 'Shall we switch to ti? — the boss suggested after the second meeting.',
            note: 'The senior person makes the move',
          },
          {
            hr: 'Lajkao sam ti objavu i poslao apdejt, sve je kul.',
            en: 'I liked your post and sent the update, everything is cool.',
            note: 'Anglicisms — they signal age and setting, not error',
          },
          {
            hr: 'Molimo da izvješće pošaljete kao privitak elektroničkom poštom.',
            en: 'Please send the report as an attachment by e-mail.',
            note: 'Native coinages — privitak, elektronička pošta — the institutional register',
          },
          {
            hr: 'Baka govori kao da je još 1965. u Imotskom, i to je njezino nasljeđe, ne pogreška.',
            en: 'Grandmother speaks as if it were still 1965 in Imotski, and that is her heritage, not a mistake.',
            note: 'Diaspora speech preserves a place and a time',
          },
          {
            hr: 'U poruci prijatelju pišem bez kvačica, a u dopisu klijentu svaki č i ć stoji na svom mjestu.',
            en: 'In a message to a friend I write without diacritics, and in a letter to a client every č and ć is in its place.',
            note: 'Diacritics by medium — optional in a message, obligatory in anything professional',
          },
          {
            hr: 'Za sastanak biram standard, za kavu s kolegama opušteni ton, a za baku njezin dijalekt.',
            en: 'For the meeting I choose the standard, for coffee with colleagues a relaxed tone, and for grandmother her dialect.',
            note: 'Several Croatians, chosen deliberately',
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
          'Diaspora Croatian preserves the forms that were current when the family emigrated. Croatians recognize this immediately and generally warmly. Knowing what the form signals is useful; treating it as a mistake misdescribes it.',
      },
      {
        type: 'rule',
        title: 'Common Mistakes',
        body: 'Three signals sent by accident. First, offering ti to someone older or more senior — it is theirs to propose, and "Možemo na ti?" from the junior side reads as presumption. Second, dropping diacritics in an email because a text message allows it — in anything professional their absence reads as carelessness. Third, the capital: Vi in a letter to one person is written with a capital, and lower-case "vi" there reads as a plural or as a slip.',
        highlight: 'Vi in a letter to one person',
      },
      {
        type: 'check',
        title: 'Mastery Check',
        items: [
          {
            q: 'Complete the formal email: "Zahvaljujem ___ na odgovoru."',
            options: ['Vi', 'Vam', 'ti', 'Vas'],
            correct: 1,
            explanation:
              'zahvaljivati takes the dative, and in a letter to one person the polite form is capitalized: Vam. ti is the wrong register, and Vi and Vas the wrong case.',
          },
          {
            q: 'Complete: "Hvala Vam ___ strpljenju."',
            options: ['za', 'o', 'na', 'u'],
            correct: 2,
            explanation:
              'hvala na governs the locative: na strpljenju. za would need the accusative, and o and u do not follow hvala.',
          },
          {
            q: 'Which is right for a first email to a professor you have not met?',
            options: [
              'Bog, šaljem ti rad.',
              'Poštovani profesore, u privitku Vam šaljem rad.',
              'Postovani profesore, u privitku vam saljem rad.',
              'Ej, evo rada.',
            ],
            correct: 1,
            explanation:
              'Vi, capitalized, with full diacritics. The third option has the right register and no diacritics, which reads as carelessness; the other two are message-register.',
          },
          {
            q: 'Where is a message-register form out of place?',
            options: [
              'evo saljem, javi — in a text to a friend',
              'Bog, šaljem ti dokument — to a colleague on ti',
              'Postovani, saljem dokumentaciju — in a formal email',
              'Poštovani, u privitku dostavljam — in a formal email',
            ],
            correct: 2,
            explanation:
              'Dropped diacritics are legitimate in a message and nowhere else. In a formal email they are read as carelessness, not speed.',
          },
          {
            q: 'What do heavy anglicisms such as lajkati and apdejt signal?',
            options: [
              'Poor Croatian',
              'Age, profession and how online the speaker is',
              'A regional dialect',
              'Formality',
            ],
            correct: 1,
            explanation:
              'Anglicisms sit on an axis of age and setting, not correctness. A speaker who uses only native coinages sounds like a document; one who uses only anglicisms sounds twenty-two.',
          },
          {
            q: 'Who proposes the switch to ti?',
            options: [
              'The younger person',
              'Whoever speaks first',
              'Nobody; Vi is permanent',
              "The senior or older person — the other party's move",
            ],
            correct: 3,
            explanation:
              'Start with Vi and switch when the other person switches or proposes it. Offering it upward is still presumptuous, however fast the line has moved in general.',
          },
          {
            q: 'What is the endpoint according to this lesson?',
            options: [
              'One perfect standard Croatian',
              'Several Croatians, chosen deliberately by setting',
              'Only dialect',
              'Only anglicisms',
            ],
            correct: 1,
            explanation:
              'Standard for the report, relaxed for the coffee, a diminutive where warmth is wanted, the coinage where precision is. When you can choose, the language has stopped being something you are learning.',
          },
        ],
      },
      {
        type: 'summary',
        title: 'Language and Society — What to Keep',
        points: [
          "Vi first; ti is the other person's to propose — Možemo na ti?",
          'Anglicisms and native coinages sit on an axis of age and setting, not correctness',
          'Messaging Croatian drops diacritics; professional writing never does',
          'Heritage forms are the language of a place and time, not errors',
          'The endpoint is having several Croatians and choosing between them',
        ],
      },
    ],
  },
];
